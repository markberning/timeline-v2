#!/usr/bin/env node
// merge.mjs — join an alignment measure→time map into a guide's cues, producing
// a timings file the player consumes ({ meta, cues: { cueId: {tStart,tEnd} } }).
//
// Usage:
//   node merge.mjs <guide.json> <measure-times.json> <out-timings.json>
//
// <measure-times.json> is align.py's output:
//   { "meta": { "durationSec": N, "takesExpositionRepeat": bool, "source": "alignment" },
//     "measureTimes": { "1": 0.0, "2": 1.31, ... } }   // measure number (downbeat) -> seconds
//
// Each cue has measures:[firstBar,lastBar]. tStart = downbeat of firstBar;
// tEnd = downbeat of (lastBar+1), or the track end if that bar doesn't exist.

import { readFileSync, writeFileSync } from "node:fs";

const [, , guidePath, mtPath, outPath] = process.argv;
if (!guidePath || !mtPath || !outPath) {
  console.error("usage: node merge.mjs <guide.json> <measure-times.json> <out-timings.json>");
  process.exit(1);
}

const guide = JSON.parse(readFileSync(guidePath, "utf8"));
const mt = JSON.parse(readFileSync(mtPath, "utf8"));
const measureTimes = mt.measureTimes ?? {};
const durationSec = mt.meta?.durationSec ?? null;
const takesRepeat = mt.meta?.takesExpositionRepeat ?? false;

const timeOf = (bar) => {
  const t = measureTimes[String(bar)];
  return typeof t === "number" ? t : null;
};

const cues = {};
const warnings = [];
for (const cue of guide.cues) {
  // Skip the exposition-repeat cue unless this recording actually repeats.
  if (cue.id === "exp-repeat" && !takesRepeat) continue;

  const [firstBar, lastBar] = cue.measures ?? [];
  let tStart = timeOf(firstBar);
  let tEnd = timeOf(lastBar + 1);
  if (tEnd === null) tEnd = durationSec; // last cue runs to the end of the track
  if (tStart === null || tEnd === null) {
    warnings.push(`cue ${cue.id}: missing measure time (bars ${firstBar}-${lastBar})`);
    continue;
  }
  cues[cue.id] = { tStart: round(tStart), tEnd: round(tEnd) };
}

const out = {
  meta: {
    pieceId: guide.pieceId,
    source: mt.meta?.source ?? "alignment",
    durationSec,
    takesExpositionRepeat: takesRepeat,
  },
  cues,
};

writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
console.log(`wrote ${outPath} — ${Object.keys(cues).length} cues`);
if (warnings.length) {
  console.warn("warnings:\n  " + warnings.join("\n  "));
  process.exitCode = 2;
}

function round(x) {
  return Math.round(x * 1000) / 1000;
}
