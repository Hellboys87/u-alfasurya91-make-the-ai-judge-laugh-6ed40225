// Make the AI Judge Laugh — one original office-life joke, one line.
// Writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Our standup is fifteen minutes of eight adults saying \"no blockers\" while blocked by everything — the meeting is the blocker.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(joke);
