import logging
import os
import time
from datetime import datetime
from faster_whisper import BatchedInferencePipeline, WhisperModel
import pyaudio
import wave
import threading
import queue
import numpy as np
import sys
import subprocess
import json
try:
    import pyautogui as pag
    pag.FAILSAFE = False
except Exception:
    pag = None
try:
    import websocket as ws_client  # websocket-client
except Exception:
    ws_client = None
import termios
import tty

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("local_stt")

class LocalSTTAgent:
    def __init__(self, model_size="base", device="cpu", compute_type="int8"):
        """
        Initialize the local speech-to-text agent with push-to-talk
        
        Args:
            model_size: Whisper model size ("tiny", "base", "small", "medium", "large-v3")
            device: "cpu" or "cuda" (if you have a GPU)
            compute_type: "int8", "float16", etc.
        """
        self.model_size = model_size
        self.device = device
        self.compute_type = compute_type
        
        # Audio recording parameters
        self.chunk = 1024
        self.format = pyaudio.paInt16
        self.channels = 1
        self.rate = 16000
        self.recording = False
        self.audio_queue = queue.Queue()
        
        # Push-to-talk state
        self.is_recording = False
        self.audio_buffer = []
        self.should_exit = False
        
        # Initialize Whisper model
        logger.info(f"Loading Whisper model: {model_size} on {device}")
        self.model = WhisperModel(model_size, device=device, compute_type=compute_type)
        logger.info("Whisper model loaded successfully")
        
        # Initialize PyAudio
        self.audio = pyaudio.PyAudio()
        
        # Create transcripts directory
        self.transcripts_dir = "transcripts"
        os.makedirs(self.transcripts_dir, exist_ok=True)
        
        # Create a timestamped transcript file
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        self.transcript_file = os.path.join(self.transcripts_dir, f"transcript_{timestamp}.txt")
        
        # Write header to transcript file
        with open(self.transcript_file, "w") as f:
            f.write(f"Local Faster-Whisper Transcription Session (Push-to-Talk)\n")
            f.write(f"Model: {model_size}, Device: {device}, Compute: {compute_type}\n")
            f.write(f"Started: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write(f"Press Enter to start/stop recording\n")
            f.write("-" * 50 + "\n\n")

    def _compute_rms(self, pcm_bytes: bytes) -> float:
        """Compute RMS in the range [0.0, 1.0] for int16 PCM bytes."""
        if not pcm_bytes:
            return 0.0
        samples = np.frombuffer(pcm_bytes, dtype=np.int16)
        if samples.size == 0:
            return 0.0
        rms = np.sqrt(np.mean(np.square(samples.astype(np.float32))))
        return float(rms / 32768.0)

    def audio_callback(self, in_data, frame_count, time_info, status):
        """Callback for audio recording"""
        if self.recording and self.is_recording:
            self.audio_queue.put(in_data)
            self.audio_buffer.append(in_data)
        return (in_data, pyaudio.paContinue)

    def start_recording(self):
        """Start recording audio from microphone"""
        logger.info("Starting audio recording...")
        self.recording = True
        
        # Open audio stream
        self.stream = self.audio.open(
            format=self.format,
            channels=self.channels,
            rate=self.rate,
            input=True,
            frames_per_buffer=self.chunk,
            stream_callback=self.audio_callback
        )
        
        self.stream.start_stream()

    def stop_recording(self):
        """Stop recording audio"""
        logger.info("Stopping audio recording...")
        self.recording = False
        
        if hasattr(self, 'stream'):
            self.stream.stop_stream()
            self.stream.close()

    def toggle_recording(self):
        """Toggle recording on/off"""
        if not self.is_recording:
            # Start recording
            self.is_recording = True
            self.audio_buffer = []  # Clear previous buffer
            print("🎤 Recording... (press 'm' to stop)", flush=True)
        else:
            # Stop recording
            self.is_recording = False
            print("🎤 Stopped recording", flush=True)
            
            # Process the recorded audio
            if self.audio_buffer:
                self.process_recorded_audio()

    def process_recorded_audio(self):
        """Process the recorded audio buffer"""
        if not self.audio_buffer:
            return
            
        # Combine all audio chunks
        audio_data = b''.join(self.audio_buffer)
        
        if len(audio_data) > 0:
            # Save audio chunk
            temp_file = self.save_audio_chunk(audio_data)
            
            # Transcribe
            transcript = self.transcribe_audio(temp_file)
            trimmed = (transcript or "").strip()
            
            # Ignore very short fragments (<4 chars), like inspiration
            if trimmed and len(trimmed) < 4:
                os.remove(temp_file)
                return
            
            if trimmed:
                # Single unified final output (like inspiration)
                print(f"🎯 Final transcript: {trimmed}")
                
                # Save to file
                self.save_transcript(trimmed)
                
                # Optionally type into Cursor (editor/chat)
                if os.environ.get("CURSOR_SEND", "1") != "0":
                    press_enter = os.environ.get("CURSOR_PRESS_ENTER", "1") != "0"
                    self.send_to_cursor_chat(trimmed, press_enter=press_enter)

                # Apply simple action framework (exit only)
                self.handle_transcript_actions(trimmed)
            else:
                print("No speech detected")
            
            # Clean up temp file
            os.remove(temp_file)
        else:
            print("No audio recorded")

    def save_audio_chunk(self, audio_data, filename="temp_audio.wav"):
        """Save audio data to a WAV file"""
        with wave.open(filename, 'wb') as wf:
            wf.setnchannels(self.channels)
            wf.setsampwidth(self.audio.get_sample_size(self.format))
            wf.setframerate(self.rate)
            wf.writeframes(audio_data)
        return filename

    def transcribe_audio(self, audio_file):
        """Transcribe audio file using faster-whisper"""
        try:
            logger.info(f"Transcribing audio file: {audio_file}")
            beam_size = int(os.environ.get("BEAM_SIZE", "5"))
            language = os.environ.get("LANGUAGE", "en")
            vad_filter = os.environ.get("VAD_FILTER", "1") != "0"
            vad_min_silence_ms = int(os.environ.get("VAD_MIN_SILENCE_MS", os.environ.get("SILENCE_MS", "400")))

            segments, info = self.model.transcribe(
                audio_file,
                beam_size=beam_size,
                language=language,
                vad_filter=vad_filter,
                vad_parameters=dict(min_silence_duration_ms=vad_min_silence_ms)
            )
            
            # Collect all segments
            transcript = ""
            for segment in segments:
                transcript += segment.text + " "
            
            transcript = transcript.strip()
            
            if info.language:
                logger.info(f"Detected language: {info.language} (probability: {info.language_probability:.2f})")
            
            return transcript
            
        except Exception as e:
            logger.error(f"Error transcribing audio: {e}")
            return ""

    def send_to_cursor_chat(self, text: str, press_enter: bool | None = None):
        """Send text to Cursor using pyautogui; optionally press Enter (chat).

        If press_enter is None, reads env CURSOR_PRESS_ENTER (default "1").
        Set CURSOR_PRESS_ENTER=0 to avoid submitting and just type into editor.
        """
        try:
            # Resolve enter behavior from arg/env
            if press_enter is None:
                press_enter = os.environ.get("CURSOR_PRESS_ENTER", "1") != "0"

            # Bring Cursor to front (so keystrokes go to the right app)
            subprocess.run(["osascript", "-e", "tell application \"Cursor\" to activate"], check=True)
            time.sleep(0.15)

            if pag is not None:
                # Type the text directly
                pag.typewrite(text, interval=0.005)
                if press_enter:
                    pag.press('enter')
            else:
                # Fallback: clipboard + paste (+ optional Enter) via AppleScript
                subprocess.run(["pbcopy"], input=text.encode("utf-8"), check=True)
                osa_cmd = [
                    "osascript",
                    "-e", "tell application \"System Events\" to keystroke \"v\" using {command down}",
                ]
                if press_enter:
                    osa_cmd.extend(["-e", "tell application \"System Events\" to key code 36"])
                subprocess.run(osa_cmd, check=True)
        except Exception as e:
            logger.error(f"Failed to send to Cursor: {e}")

    def save_transcript(self, transcript):
        """Save transcript to file"""
        if transcript:
            timestamp = datetime.now().strftime("%H:%M:%S")
            try:
                with open(self.transcript_file, "a", encoding="utf-8") as f:
                    f.write(f"[{timestamp}] {transcript}\n")
                logger.info(f"Transcript saved to: {self.transcript_file}")
            except Exception as e:
                logger.error(f"Error saving transcript: {e}")

    def handle_transcript_actions(self, transcript: str) -> None:
        """Parse simple voice commands and execute local actions (exit only)."""
        text = (transcript or "").strip().lower()
        if not text:
            return
        
        try:
            # Exit commands only (no scroll handling needed)
            if any(cmd in text for cmd in ["exit", "quit", "stop listening", "stop"]):
                print("👋 Exit command detected. Stopping agent…", flush=True)
                self.should_exit = True
                return
        except Exception as e:
                logger.error(f"Action handling error: {e}")

    def run_push_to_talk(self):
        """Run continuous transcription with short chunks"""
        logger.info("Starting continuous transcription (press Ctrl+C to stop)")
        logger.info("Recording in 3-second chunks and transcribing automatically")
        print("\n🎤 Continuous Recording Mode")
        print("Recording in 3-second chunks...")
        print("Press Ctrl+C to exit\n")
        
        try:
            # Start recording stream
            self.start_recording()
            
            # Record in continuous chunks
            while True:
                if self.should_exit:
                    break
                # Record for 3 seconds
                self.audio_buffer = []
                self.is_recording = True
                time.sleep(3)
                self.is_recording = False
                
                # Process the recorded audio
                if self.audio_buffer:
                    self.process_recorded_audio()
                
                # Small delay between chunks
                time.sleep(0.5)
                
        except KeyboardInterrupt:
            logger.info("Stopping transcription...")
        finally:
            self.cleanup()

    def run_endpointing_silence(self):
        """Run continuous transcription using a silence-threshold endpointing strategy.

        Env controls:
          - SILENCE_MS: minimum trailing silence (ms) to close an utterance (default: 700)
          - SILENCE_LEVEL: RMS threshold in [0.0, 1.0] below which audio is considered silent (default: 0.01)
          - MIN_UTTER_MS: minimum utterance length before we allow closing (default: 400)
          - MAX_UTTER_MS: maximum utterance length to force-cut (default: 30000)
        """
        silence_ms = int(os.environ.get("SILENCE_MS", "700"))
        silence_level = float(os.environ.get("SILENCE_LEVEL", "0.01"))
        min_utter_ms = int(os.environ.get("MIN_UTTER_MS", "400"))
        max_utter_ms = int(os.environ.get("MAX_UTTER_MS", "30000"))

        logger.info(
            f"Endpointing mode: silence (silence_ms={silence_ms}, silence_level={silence_level}, "
            f"min_utter_ms={min_utter_ms}, max_utter_ms={max_utter_ms})"
        )

        print("\n🎤 Silence Endpointing Mode")
        print(f"Waiting for speech... close on ≥{silence_ms}ms below RMS {silence_level}")
        print("Press Ctrl+C to exit\n")

        try:
            self.start_recording()
            self.is_recording = True

            utter_start_time = time.time()
            last_audio_time = utter_start_time
            trailing_silence_ms = 0
            in_utterance = False

            # Each queue item is a chunk of bytes from audio_callback while is_recording is True
            while True:
                if self.should_exit:
                    break
                try:
                    chunk = self.audio_queue.get(timeout=0.5)
                except queue.Empty:
                    # If in utterance, increment silence by the gap
                    if in_utterance:
                        gap_ms = int((time.time() - last_audio_time) * 1000)
                        trailing_silence_ms += gap_ms
                        last_audio_time = time.time()
                        # Check force-close by max length
                        utter_len_ms = int((time.time() - utter_start_time) * 1000)
                        if utter_len_ms >= max_utter_ms:
                            self.is_recording = False
                            self.process_recorded_audio()
                            # Reset for next utterance
                            self.audio_buffer = []
                            self.is_recording = True
                            in_utterance = False
                            trailing_silence_ms = 0
                            utter_start_time = time.time()
                    continue

                # We received audio
                last_audio_time = time.time()

                # Determine if chunk is silent
                rms = self._compute_rms(chunk)
                is_silent = rms < silence_level

                if not in_utterance and not is_silent:
                    # Speech started
                    in_utterance = True
                    utter_start_time = time.time()
                    trailing_silence_ms = 0

                if in_utterance:
                    if is_silent:
                        # Add approximate chunk duration to trailing silence
                        chunk_ms = int((len(chunk) / 2) / self.rate * 1000)  # 2 bytes per sample (int16)
                        trailing_silence_ms += max(chunk_ms, 1)
                    else:
                        trailing_silence_ms = 0

                    # If enough trailing silence and minimum utterance length is satisfied, close
                    utter_len_ms = int((time.time() - utter_start_time) * 1000)
                    if trailing_silence_ms >= silence_ms and utter_len_ms >= min_utter_ms:
                        self.is_recording = False
                        self.process_recorded_audio()
                        # Reset for next utterance
                        self.audio_buffer = []
                        self.is_recording = True
                        in_utterance = False
                        trailing_silence_ms = 0
                        utter_start_time = time.time()

        except KeyboardInterrupt:
            logger.info("Stopping transcription...")
        finally:
            self.cleanup()

    def run_auto_record_400ms(self):
        """Run automatic recording mode with 400ms delay to stop recording after speech ends
        
        Env:
          - START_LEVEL: RMS threshold to start an utterance (default: 0.02)
          - STOP_LEVEL: RMS threshold below which audio is considered silent (default: 0.01)
          - SILENCE_MS: trailing silence (ms) to close utterance (default: 400)
          - MIN_UTTER_MS: minimum utterance length (ms) before allowing close (default: 400)
        """
        print("\n🎤 Auto Recording Mode (400ms delay)")
        print("Recording will automatically start when speech is detected and stop shortly after you finish")
        print("Press Ctrl+C to exit\n")
        
        # Hysteresis thresholds and timing
        start_level = float(os.environ.get("START_LEVEL", "0.02"))
        stop_level = float(os.environ.get("STOP_LEVEL", "0.01"))
        silence_ms = int(os.environ.get("SILENCE_MS", "400"))
        min_utter_ms = int(os.environ.get("MIN_UTTER_MS", "400"))
        
        try:
            self.start_recording()
            self.is_recording = False  # Start with recording off
            
            utter_start_time = 0.0
            last_audio_time = time.time()
            trailing_silence_ms = 0
            in_utterance = False
            
            while True:
                if self.should_exit:
                    break
                try:
                    chunk = self.audio_queue.get(timeout=0.1)
                except queue.Empty:
                    # If in utterance, accumulate silence by the gap
                    if in_utterance:
                        gap_ms = int((time.time() - last_audio_time) * 1000)
                        trailing_silence_ms += gap_ms
                        # Check for close conditions even without new audio
                        utter_len_ms = int((time.time() - utter_start_time) * 1000)
                        if trailing_silence_ms >= silence_ms and utter_len_ms >= min_utter_ms:
                            self.is_recording = False
                            self.process_recorded_audio()
                            # Reset for next utterance
                            self.audio_buffer = []
                            in_utterance = False
                            trailing_silence_ms = 0
                    last_audio_time = time.time()
                    continue

                # We received audio
                last_audio_time = time.time()
                
                # Determine level
                rms = self._compute_rms(chunk)
                
                if not in_utterance:
                    if rms >= start_level:
                        # Speech started - begin recording
                        in_utterance = True
                        self.is_recording = True
                        utter_start_time = time.time()
                        trailing_silence_ms = 0
                        self.audio_buffer = []  # Clear buffer at start of new utterance
                        print("🎤 Recording started...", flush=True)
                        # Fall through to append chunk
                    else:
                        # Still waiting for start
                        continue
                
                # In utterance: append current chunk
                self.audio_buffer.append(chunk)
                
                if rms < stop_level:
                    # Accumulate trailing silence using chunk duration
                    chunk_ms = int((len(chunk) / 2) / self.rate * 1000)  # 2 bytes per sample (int16)
                    trailing_silence_ms += max(chunk_ms, 1)
                else:
                    trailing_silence_ms = 0
                
                # Check close conditions
                utter_len_ms = int((time.time() - utter_start_time) * 1000)
                if trailing_silence_ms >= silence_ms and utter_len_ms >= min_utter_ms:
                    self.is_recording = False
                    self.process_recorded_audio()
                    # Reset for next utterance
                    self.audio_buffer = []
                    in_utterance = False
                    trailing_silence_ms = 0

    def run_cartesia_streaming(self):
        """Stream microphone PCM to Cartesia STT WebSocket and handle final transcripts (like inspiration)."""
        api_key = os.environ.get("CARTESIA_API_KEY")
        if not api_key:
            logger.error("CARTESIA_API_KEY not set")
            return
        if ws_client is None:
            logger.error("websocket-client is not installed. pip install websocket-client")
            return

        qs = (
            "model=ink-whisper&encoding=pcm_s16le&sample_rate=16000"
        )
        url = f"wss://api.cartesia.ai/stt/websocket?{qs}"
        headers = [
            f"X-API-Key: {api_key}",
            "Cartesia-Version: 2025-04-16",
        ]

        def on_open(ws):
            print("🎤 Cartesia streaming STT connected. Speak freely (Ctrl+C to exit)")
            self.start_recording()
            self.is_recording = True

            def send_loop():
                try:
                    while not self.should_exit and ws.sock and ws.sock.connected:
                        try:
                            chunk = self.audio_queue.get(timeout=0.2)
                        except queue.Empty:
                            continue
                        # Send raw PCM bytes
                        ws.send(chunk, opcode=ws_client.ABNF.OPCODE_BINARY)
                except Exception as e:
                    logger.error(f"Sender thread error: {e}")

            t = threading.Thread(target=send_loop, daemon=True)
            t.start()

        def on_message(ws, message):
            try:
                msg = json.loads(message)
            except Exception:
                return
            if msg.get("type") == "transcript" and msg.get("is_final"):
                text = ""
                words = msg.get("words")
                if isinstance(words, list) and words:
                    # Mirror inspiration: join without spaces
                    try:
                        text = "".join([w.get("word", "") for w in words])
                    except Exception:
                        text = msg.get("text", "") or ""
                else:
                    text = msg.get("text", "") or ""
                trimmed = text.strip()
                if len(trimmed) < 4:
                    return
                print(f"🎯 Final transcript: {trimmed}")
                self.save_transcript(trimmed)
                # Type into Cursor (editor/chat) and submit by default
                if os.environ.get("CURSOR_SEND", "1") != "0":
                    press_enter = os.environ.get("CURSOR_PRESS_ENTER", "1") != "0"
                    self.send_to_cursor_chat(trimmed, press_enter=press_enter)
                self.handle_transcript_actions(trimmed)
                if self.should_exit:
                    try:
                        ws.send("finalize")
                        ws.send("done")
                    except Exception:
                        pass
                    ws.close()

        def on_error(ws, error):
            logger.error(f"WebSocket error: {error}")

        def on_close(ws, status_code, msg):
            print("Cartesia WebSocket closed")
            try:
                self.cleanup()
            except Exception:
                pass

        ws_app = ws_client.WebSocketApp(
            url,
            header=headers,
            on_open=on_open,
            on_message=on_message,
            on_error=on_error,
            on_close=on_close,
        )

        try:
            # Handle Ctrl+C to exit gracefully
            def run_ws():
                ws_app.run_forever()
            wst = threading.Thread(target=run_ws, daemon=True)
            wst.start()

            # Keep main thread alive until exit
            while wst.is_alive() and not self.should_exit:
                time.sleep(0.2)
        except KeyboardInterrupt:
            self.should_exit = True
            try:
                ws_app.send("finalize")
                ws_app.send("done")
            except Exception:
                pass
            ws_app.close()
        finally:
            self.cleanup()

    def cleanup(self):
        """Clean up resources"""
        if hasattr(self, 'stream'):
            self.stream.close()
        self.audio.terminate()
        logger.info("Cleanup completed")

def main():
    """Main function to run the local STT agent"""
    print("🎤 Local Faster-Whisper Speech-to-Text Agent (Push-to-Talk)")
    print("=" * 60)
    
    # You can customize these parameters
    model_size = "base"  # Options: "tiny", "base", "small", "medium", "large-v3"
    device = "cpu"       # Use "cuda" if you have a GPU
    compute_type = "int8"  # Options: "int8", "float16", etc.
    
    print(f"Model: {model_size}")
    print(f"Device: {device}")
    print(f"Compute Type: {compute_type}")
    print()
    
    # Create and run the agent
    agent = LocalSTTAgent(model_size=model_size, device=device, compute_type=compute_type)
    
    print("🎤 Local STT Agent Ready")
    
    # Choose mode based on env
    endpointing_mode = os.environ.get("ENDPOINTING", "auto").lower()

    if endpointing_mode == "cartesia":
        agent.run_cartesia_streaming()
        return

    if endpointing_mode == "silence":
        agent.run_endpointing_silence()
        return
        
    if endpointing_mode == "auto":
        agent.run_auto_record_400ms()
        return

    # Default: toggle mode via 'm' key or stdin TOGGLE
    agent.start_recording()

    if sys.stdin.isatty():
        def listen_for_keys():
            fd = sys.stdin.fileno()
            old_settings = termios.tcgetattr(fd)
            try:
                tty.setcbreak(fd)
                print("Press 'm' to toggle microphone. Press Ctrl+C to exit.", flush=True)
                while True:
                    ch = sys.stdin.read(1)
                    if not ch:
                        continue
                    if ch.lower() == 'm':
                        agent.toggle_recording()
            except KeyboardInterrupt:
                pass
            finally:
                termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)

        t = threading.Thread(target=listen_for_keys, daemon=True)
        t.start()
        try:
            while True:
                if agent.should_exit:
                    break
                time.sleep(0.2)
        except KeyboardInterrupt:
            pass
        finally:
            agent.cleanup()
    else:
        print("Waiting for TOGGLE commands from stdin...", flush=True)
        while True:
            try:
                command = input().strip()
                if command == "TOGGLE":
                    agent.toggle_recording()
            except EOFError:
                break
        agent.cleanup()

if __name__ == "__main__":
    main()