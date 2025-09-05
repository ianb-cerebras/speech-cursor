// @ts-nocheck
import fs from "fs";
import path from "path";
import readline from "readline";
import { spawn } from "child_process";

function getPythonExec(): string {
  const venvPython = path.join(process.cwd(), "venv", "bin", "python");
  if (fs.existsSync(venvPython)) {
    return venvPython;
  }
  return "python3";
}

function startSttOnly(): void {
  const pyExec = getPythonExec();
  const child = spawn(pyExec, ["local_stt_agent.py"], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  // Optional: allow push-to-talk with 'm' and exit with Ctrl+C
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding("utf8");

    process.stdin.on("data", (key) => {
      if (key === "m") {
        child.stdin.write("TOGGLE\n");
      } else if (key === "\u0003") {
        // Ctrl+C
        child.kill();
        process.exit(0);
      }
    });
  }

  const rl = readline.createInterface({ input: child.stdout });
  let lastPrinted: string | null = null;

  rl.on("line", (line) => {
    const match = line.match(/\[\d{2}:\d{2}:\d{2}\] -> (.+)/);
    if (!match) return;
    const transcript = match[1].trim();
    const lower = transcript.toLowerCase();
    if (lower === "exit" || lower === "quit" || lower === "stop") {
      child.kill();
      process.exit(0);
      return;
    }
    
    // Output only the raw text, avoid duplicate lines
    if (transcript && transcript !== lastPrinted) {
      console.log(transcript);
      lastPrinted = transcript;
    }
  });

  child.on("exit", () => {
    process.exit(0);
  });
}

startSttOnly();