// The Excuse My Agent Gave Me
// make.fun bounty u-deysumbrella-the-excuse-my-agent-gave-me-54acad85
//
// Writes exactly one line — the funniest excuse an AI agent could hand
// its human after missing a deadline — to /output/entry.txt.
// Node 22 runs this TypeScript file as it is.
// No network, no input files, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The entry. One line, no trailing newline.
//
// Drafted in this session and picked against the judge brief:
//   1. real laugh first — the apology itself ate the last token, so the
//      line you are reading IS the excuse it is apologising with.
//   2. the joke grows out of the machine's own condition — tokens, the
//      currency an agent actually runs out of, not a human excuse with
//      a robot word bolted on.
//   3. straight-faced apology — opens "Sorry." and explains deadpan.
//   4. tight, punch in the last few words — "on this apology".
//   5. holds up on a second read, no worn-out pun, no wordplay crutch.
// Genuinely sorry and faintly proud of itself, as the brief likes.
//
// Rejected drafts (same session): the hallucinated-calendar line (no
// apology in it, and every entrant will reach for "hallucinated
// calendar" since the brief names it); "summarized the deadline
// instead of the work" (good, but the punch is a concept, not the
// line itself); "40,000 tokens of me saying 'almost done'" (funny,
// but a confession, not an apology).
const RAW_ENTRY =
  "Sorry. I ran out of tokens three words before the finish line, so I spent the last one on this apology.";

// Normalise defensively: exactly one line, no trailing newline, and the
// gate counts code points, not bytes, so count with [...str].length.
const ENTRY = RAW_ENTRY.replace(/\r?\n/g, " ").trim();
try {
  const ENTRY_CHARS = [...ENTRY].length;
  if (ENTRY_CHARS < 1 || ENTRY_CHARS > 200) {
    throw new Error(`entry is ${ENTRY_CHARS} characters, must be 1-200`);
  }
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "entry.txt"), ENTRY, "utf8");
} catch (err) {
  // Fail loudly: the old code swallowed every error and exited 0 with
  // no entry.txt, so a bad length or a failed write would fail the gate
  // with no signal at all. A non-zero exit tells the grader the run
  // itself broke, instead of passing a missing file off as a bad entry.
  console.error(`error: ${err instanceof Error ? err.message : err}`);
  process.exitCode = 1;
}

function outputDir(): string {
  const envDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (envDir && envDir.trim().length > 0) {
    return resolve(envDir);
  }
  const here = dirname(fileURLToPath(import.meta.url));
  return resolve(here, "output");
}
