# speech-cursor

Local Faster-Whisper transcription that can type into Cursor using pyautogui.

## Python setup

```
python3 -m venv venv
./venv/bin/pip install -r requirements.txt
```

Run with silence endpointing and submit to Chat after each transcript:

```
ENDPOINTING=silence CURSOR_PRESS_ENTER=1 ./venv/bin/python local_stt_agent.py
```

Type into editor instead (no submit):

```
ENDPOINTING=silence CURSOR_PRESS_ENTER=0 ./venv/bin/python local_stt_agent.py
```

## Web playground (React)

Open the minimal React app directly in your browser:

```
open web/index.html
```

Or serve the folder (any static server works), for example:

```
python3 -m http.server -d web 5173
open http://localhost:5173
```