#!/usr/bin/env node
// Merge the per-chapter vision-pick outputs into the single picks.json the sweep
// engine consumes, resolving cross-chapter image collisions deterministically.
//
// The photo-pick phase was parallelized per chapter (each chapter's picker writes
// /tmp/<tl>-photos/picks-ch<N>.json for only its own events). The engine's `finish`
// step requires GLOBAL image distinctness (each commonsFile used at most once across
// the whole civ — fix-links --strict blocks reuse on swept civs) and only DETECTS
// dups, it doesn't resolve them. A single agent used to enforce distinctness in its
// head; with parallel pickers two chapters can independently pick the same iconic
// image, so we resolve here: in stable chapter→event order, the FIRST event to claim
// a commonsFile keeps it; any later event that picked the same file is turned into a
// reject (reason noted) so a gap-fill round can try to fill it with something distinct.
//
// Output: /tmp/<tl>-photos/picks.json (the exact shape finish expects:
//   { "<eventId>": { "decision":"override", "commonsFile":"...", "caption":"..." }
//                 | { "decision":"reject", "reason":"..." } } )
// Prints one `RESULT <json>` line.

import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'

const tl = process.argv[2]
if (!tl) { console.error('usage: node scripts/_merge-picks.mjs <tlId>'); process.exit(1) }
const dir = `/tmp/${tl}-photos`
if (!existsSync(dir)) { console.error(`no ${dir}`); process.exit(1) }

// chapter files in chapter-number order: picks-ch1.json, picks-ch2.json, …
const chFiles = readdirSync(dir)
  .filter(f => /^picks-ch\d+\.json$/.test(f))
  .sort((a, b) => (+a.match(/\d+/)[0]) - (+b.match(/\d+/)[0]))

if (!chFiles.length) {
  console.error('no per-chapter picks-ch*.json found')
  console.log(`RESULT ${JSON.stringify({ merged: 0, override: 0, reject: 0, dupsResolved: 0, error: 'no per-chapter picks' })}`)
  process.exit(1)
}

const merged = {}            // eventId -> pick
const order = []             // eventIds in stable chapter→event order
for (const f of chFiles) {
  let obj
  try { obj = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8')) }
  catch (e) { console.error(`  (skip unreadable ${f}: ${e.message})`); continue }
  for (const [id, pick] of Object.entries(obj)) {
    if (!(id in merged)) order.push(id)
    merged[id] = pick        // last writer wins if an id somehow appears twice
  }
}

// resolve cross-chapter commonsFile collisions: first claimant keeps it, rest reject
const usedBy = new Map()     // commonsFile -> eventId that owns it
let dupsResolved = 0
for (const id of order) {
  const p = merged[id]
  if (!p || p.decision !== 'override' || !p.commonsFile) continue
  if (usedBy.has(p.commonsFile)) {
    merged[id] = { decision: 'reject', reason: `duplicate of ${p.commonsFile} (kept on ${usedBy.get(p.commonsFile)}); reassign in gap-fill` }
    dupsResolved++
  } else {
    usedBy.set(p.commonsFile, id)
  }
}

writeFileSync(`${dir}/picks.json`, JSON.stringify(merged, null, 2))
const override = Object.values(merged).filter(v => v.decision === 'override').length
const reject = Object.values(merged).filter(v => v.decision === 'reject').length
process.stderr.write(`[merge-picks] ${chFiles.length} chapter files → ${order.length} events; ${override} override / ${reject} reject; ${dupsResolved} cross-chapter dup(s) resolved\n`)
console.log(`RESULT ${JSON.stringify({ merged: order.length, override, reject, dupsResolved })}`)
