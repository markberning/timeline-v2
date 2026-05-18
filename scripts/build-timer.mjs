#!/usr/bin/env node
// Deterministic per-step build timing ledger.
//
// WHY THIS EXISTS (not a monitoring agent): a separate agent watching the
// build from the outside is a second concurrent session (breaks single-writer),
// can only guess where one step ends and the next begins, and burns tokens
// babysitting. Instead the build steps stamp their own start/stop into a
// ledger. Exact boundaries, zero extra agent, and the artifact is a clean
// before/after table you can read. This is the "deterministic timing log"
// STATUS.md locked — made real.
//
// Usage (called by the build steps themselves):
//   node scripts/build-timer.mjs <ledger.md> begin   "<run label>"
//   node scripts/build-timer.mjs <ledger.md> mark    "<step that just finished>"
//   node scripts/build-timer.mjs <ledger.md> summary
//
// `begin`  : (re)creates the ledger, records T0.
// `mark`   : records now, logs the elapsed time SINCE THE PREVIOUS mark/begin
//            attributed to "<step that just finished>", appends a row.
// `summary`: appends a steps-by-duration table + grand-total wall clock.
//
// State lives next to the ledger as <ledger>.state.json so steps can run in
// separate shells/processes and still chain.

import { readFileSync, writeFileSync, existsSync, appendFileSync } from 'fs'

const [, , ledgerArg, cmd, ...rest] = process.argv
const label = rest.join(' ').trim()

if (!ledgerArg || !cmd) {
  console.error('usage: build-timer.mjs <ledger.md> <begin|mark|summary> [label]')
  process.exit(2)
}

const ledger = ledgerArg
const statePath = `${ledger}.state.json`

function fmt(ms) {
  if (ms < 1000) return `${ms}ms`
  const s = ms / 1000
  if (s < 60) return `${s.toFixed(2)}s`
  const m = Math.floor(s / 60)
  const r = s - m * 60
  return `${m}m ${r.toFixed(1)}s`
}

function clock(ts) {
  return new Date(ts).toLocaleTimeString('en-US', { hour12: false })
}

function loadState() {
  if (!existsSync(statePath)) {
    console.error(`build-timer: no run in progress (missing ${statePath}); call \`begin\` first`)
    process.exit(2)
  }
  return JSON.parse(readFileSync(statePath, 'utf-8'))
}

if (cmd === 'begin') {
  const now = Date.now()
  const runLabel = label || 'build run'
  const state = { runLabel, start: now, last: now, marks: [] }
  writeFileSync(statePath, JSON.stringify(state, null, 2))
  const header =
    `# Build timing ledger — ${runLabel}\n\n` +
    `Started: ${new Date(now).toISOString()}\n\n` +
    `| wall clock | step duration | step |\n` +
    `|---|---|---|\n`
  writeFileSync(ledger, header)
  console.log(`[timer] begin "${runLabel}" → ${ledger}`)
  process.exit(0)
}

if (cmd === 'mark') {
  if (!label) {
    console.error('build-timer mark: a step label is required')
    process.exit(2)
  }
  const state = loadState()
  const now = Date.now()
  const delta = now - state.last
  state.marks.push({ label, atMs: now, deltaMs: delta })
  state.last = now
  writeFileSync(statePath, JSON.stringify(state, null, 2))
  appendFileSync(ledger, `| ${clock(now)} | ${fmt(delta)} | ${label} |\n`)
  console.log(`[timer] ${label} — ${fmt(delta)} (since previous step)`)
  process.exit(0)
}

if (cmd === 'summary') {
  const state = loadState()
  const now = Date.now()
  const total = now - state.start
  const sorted = [...state.marks].sort((a, b) => b.deltaMs - a.deltaMs)
  let out = `\n## Summary — ${state.runLabel}\n\n`
  out += `Total wall clock: **${fmt(total)}**\n\n`
  out += `Steps, slowest first:\n\n`
  out += `| step duration | % of total | step |\n|---|---|---|\n`
  for (const m of sorted) {
    const pct = total > 0 ? ((m.deltaMs / total) * 100).toFixed(1) : '0.0'
    out += `| ${fmt(m.deltaMs)} | ${pct}% | ${m.label} |\n`
  }
  out += `\nFinished: ${new Date(now).toISOString()}\n`
  appendFileSync(ledger, out)
  console.log(`[timer] summary appended — total ${fmt(total)} across ${state.marks.length} steps`)
  process.exit(0)
}

console.error(`build-timer: unknown command "${cmd}" (expected begin|mark|summary)`)
process.exit(2)
