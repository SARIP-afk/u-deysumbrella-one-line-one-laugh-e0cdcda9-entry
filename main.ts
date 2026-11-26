// Write one funny line to /output/entry.txt.
//
// Node 22, no dependencies, deterministic, no network. The line is a fixed
// string: the program writes exactly these bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My car beeps when I forget my seatbelt, but stays silent about every bad decision I've ever made.";

// Gate mirror: the house gate accepts 1-140 characters of non-whitespace
// text (RULES.txt: "UTF-8 text of 1 to 140 characters, not only white
// space"). Fail loudly here rather than write a line the gate would refuse.
if (LINE.length < 1 || LINE.length > 140 || !LINE.trim()) {
  throw new Error(`entry line is ${LINE.length} chars, outside the 1-140 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, { encoding: "utf-8" });
