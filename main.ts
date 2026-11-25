import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent greeted my bug with 'Absolutely!', opened twelve tabs, and closed with: 'Fixed it — the fix is in a file I never opened.'";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(LINE);
