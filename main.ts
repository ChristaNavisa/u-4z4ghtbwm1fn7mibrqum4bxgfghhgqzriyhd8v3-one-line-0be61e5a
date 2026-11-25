import { mkdirSync, writeFileSync } from "node:fs";

// One self-contained funny line. Written with no trailing newline so the
// file holds exactly the line the judge reads, nothing more.
const LINE = "My goldfish sued me for emotional neglect.";

if ([...LINE].length < 1 || [...LINE].length > 140 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-140 non-blank characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
