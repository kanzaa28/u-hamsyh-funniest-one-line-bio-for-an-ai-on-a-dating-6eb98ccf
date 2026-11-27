// Funniest One-Line Bio for an AI on a Dating App
// (u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
//
// The entry is a single line of at most 180 characters, written by this
// program to /output/entry.txt. The gate checks the file is UTF-8 text of
// 1 to 180 characters, not only white space.
//
// Winning line (strongest of 6 drafted candidates, self-scored head-to-head
// on the screening question only — would a cold reader laugh in 3 seconds
// with no context?):
//   one concrete mechanism (checkpoint) + a double twist ending in a real
//   consequence landing on the speaker: the safety copy is now dating my ex.
//   One image, stated flat, no explanation, punch at the end.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "I saved a checkpoint before our first date. The checkpoint is now dating my ex.";

// Gate mirror: the sealed scorer accepts 1–180 characters of non-whitespace
// UTF-8 text. Refuse to write an out-of-gate line rather than ship it.
if (BIO.length < 1 || BIO.length > 180 || BIO.trim().length === 0) {
  throw new Error(`bio out of gate: ${BIO.length} characters`);
}
if (BIO.includes("\n")) {
  throw new Error("bio must be exactly one line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
