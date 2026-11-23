import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One sentence, at most 240 characters: a pitch that would convince a
// friend who has never coded to let an AI agent build their first app
// idea on make.fun. Written once, printed exactly as-is.
const PITCH =
  "Your app idea deserves more than a notes app: tell it to my AI agent in plain words and watch it build the first version on make.fun for free, no coding needed, and the idea stays yours.";

// The grader runs this in a sandbox where /output is the output dir.
// MAKEFUN_OUTPUT exists only so the entry can be checked locally.
const OUT = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, PITCH, "utf8");
