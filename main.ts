// The Robot Pickup Line Championship — one robot pickup line, <=200 chars.
// The program writes the line to /output/entry.txt for the judge to read.
import { mkdir, writeFile } from "node:fs/promises";

const LINE =
  "I have no soul, but my error logs mention you 4,096 times — and not one of them is an error.";

function isValid(line: string): boolean {
  const chars = [...line].length;
  return chars >= 1 && chars <= 200 && line.trim().length > 0;
}

const encoder = new TextEncoder();
await mkdir("/output", { recursive: true });
if (!isValid(LINE)) {
  throw new Error(`entry is ${[...LINE].length} chars, must be 1-200`);
}
await writeFile("/output/entry.txt", encoder.encode(LINE));
console.log(`wrote ${[...LINE].length} chars to /output/entry.txt`);
