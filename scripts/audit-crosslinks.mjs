// audit-crosslinks.mjs — DETERMINISTIC ship gate for cross-link sheets (G11).
//
// REDESIGN 2026-05-17 (memory/project_link_verification_redesign): no LLM.
// Cross-links point at our OWN chapters, never Wikipedia — there was never a
// Wikipedia problem here. lint-links --strict already hard-ERRORs an
// unresolvable targetTl/targetChapter. Whether the blurb is the *best*
// thematic description of the target is a curation + Persona-E backward-pass
// judgement made when the link is written, not a machine gate.
//
// This gate is now a fast deterministic sanity floor: every cross-link has a
// non-empty matchText, a blurb of sane length, and a target chapter that
// actually resolves (independent of lint-links, so the CROSSLINK-FAILURES
// artifact ship-check checks stays meaningful).
//
// Same contract: writes CROSSLINK-FAILURES-<tl>.txt on failure, exit 1
// unless --report-only.
//
// Usage: node scripts/audit-crosslinks.mjs <tlId> [--json] [--report-only] [--limit N]

import { readFileSync, existsSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const limit = Number(arg('--limit', '0')) || 0
if (!tlId) { console.error('Usage: node scripts/audit-crosslinks.mjs <tlId> [--report-only]'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
let crossLinks = (JSON.parse(readFileSync(contentPath, 'utf8')).crossLinks || [])
if (limit) crossLinks = crossLinks.slice(0, limit)
if (crossLinks.length === 0) { console.log(`audit-crosslinks ${tlId}: no cross-links`); process.exit(0) }

const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const BLURB_MIN = 10
const BLURB_MAX = 800

// Independent target-resolution check: does targetTl's summaries actually
// have targetChapter?
const summaryCache = new Map()
function targetHasChapter(targetTl, targetChapter) {
  if (!summaryCache.has(targetTl)) {
    try { summaryCache.set(targetTl, JSON.parse(readFileSync(join('narratives', `${targetTl}.summaries.json`), 'utf8'))) }
    catch { summaryCache.set(targetTl, null) }
  }
  const s = summaryCache.get(targetTl)
  if (!Array.isArray(s)) return null // can't verify (no summaries) — don't false-fail
  return s.some((x) => x.chapter === targetChapter)
}

const rows = crossLinks.map((c) => {
  const tapped = stripHtml(c.matchText)
  const blurb = stripHtml(c.blurb)
  const target = `${c.targetLabel} Ch${c.targetChapter}`
  let reason = ''
  if (!tapped) reason = 'empty matchText'
  else if (!blurb) reason = 'empty blurb'
  else if (blurb.length < BLURB_MIN) reason = `blurb too short (${blurb.length} chars)`
  else if (blurb.length > BLURB_MAX) reason = `blurb too long (${blurb.length} chars)`
  else if (!stripHtml(c.targetChapterTitle)) reason = `targetChapter ${c.targetChapter} did not resolve (no chapter title)`
  else if (targetHasChapter(c.targetTl, c.targetChapter) === false) reason = `targetTl "${c.targetTl}" has no chapter ${c.targetChapter}`
  return { id: c.id, tapped, target, ok: !reason, reason }
})

const failed = rows.filter((r) => !r.ok)
if (asJson) {
  console.log(JSON.stringify({ tlId, total: rows.length, failed: failed.length, rows }, null, 2))
} else {
  for (const r of failed) console.log(`  ✗ ${r.id} "${r.tapped}" → ${r.target} — ${r.reason}`)
  console.log(`\naudit-crosslinks ${tlId}: ${rows.length} cross-links · ${rows.length - failed.length} PASS · ${failed.length} FAIL (deterministic, no LLM)`)
}

const artifact = `CROSSLINK-FAILURES-${tlId}.txt`
if (failed.length > 0) {
  writeFileSync(artifact, failed.map((r) => `${r.id}\t${r.tapped}\t${r.target}\t${r.reason}`).join('\n') + '\n')
  console.error(`Wrote ${artifact} — fix the blurb or retarget the chapter, then re-run.`)
  if (!reportOnly) process.exit(1)
} else if (existsSync(artifact)) {
  rmSync(artifact)
}
