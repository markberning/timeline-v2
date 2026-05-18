// audit-events.mjs — DETERMINISTIC ship gate for event-popup links (G10).
//
// REDESIGN 2026-05-17 (memory/project_link_verification_redesign): no LLM.
// Subject-correctness of an event's Wikipedia page is confirmed at CREATION
// time by scripts/verify-links.mjs, which records the confirmed page state
// into content/.link-snapshots-<tl>.json. This gate just proves, with one
// deterministic Wikipedia lookup, that nothing drifted: the page still
// exists, is not a disambiguation page, and has the same title that was
// confirmed. It cannot (and need not) re-judge "is this the right subject"
// — that was decided, with attention, when the snapshot was written.
//
// PASS without any check: an event with no wikiSlug or a `def:` slug (the
// curated description renders standalone — nothing external to be wrong),
// or an eventId waived in content/.event-slug-waivers-<tl>.json.
// FAIL (block, fail-closed): a real slug with no snapshot entry (never
// confirmed at creation), a dead/disambiguation page, or a title that no
// longer matches what was confirmed (page moved/merged/redirected away).
//
// Same contract as before: writes EVENT-FAILURES-<tl>.txt on failure
// (ship-check asserts its absence), exit 1 unless --report-only.
//
// Usage: node scripts/audit-events.mjs <tlId> [--json] [--report-only] [--limit N] [--refresh]

import { readFileSync, existsSync, writeFileSync, rmSync } from 'node:fs'
import { verifySlugs, isDefSlug } from './lib/wiki-verify.mjs'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const refresh = args.includes('--refresh')
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const limit = Number(arg('--limit', '0')) || 0
if (!tlId) { console.error('Usage: node scripts/audit-events.mjs <tlId> [--report-only]'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
let events = (JSON.parse(readFileSync(contentPath, 'utf8')).events || []).map((e) => ({
  id: e.id, label: stripHtml(e.label), wikiSlug: e.wikiSlug || '',
}))
if (limit) events = events.slice(0, limit)

const waiverPath = `content/.event-slug-waivers-${tlId}.json`
const slugWaivers = existsSync(waiverPath) ? JSON.parse(readFileSync(waiverPath, 'utf8')) : {}

const snapPath = `content/.link-snapshots-${tlId}.json`
const snapshot = existsSync(snapPath) ? (JSON.parse(readFileSync(snapPath, 'utf8')).events || {}) : null

const norm = (t) => (t || '').replace(/\s+/g, ' ').trim().toLowerCase()

// Items needing a live check: a real (non-def) slug, not waived.
const targets = events.filter((e) => e.wikiSlug && !isDefSlug(e.wikiSlug) && !slugWaivers[e.id])
const live = targets.length ? await verifySlugs(targets.map((e) => e.wikiSlug), { refresh }) : new Map()

const rows = events.map((e) => {
  if (!e.wikiSlug || isDefSlug(e.wikiSlug)) return { id: e.id, label: e.label, ok: true, reason: 'no external page (authored/slug-less — auto-pass)' }
  if (slugWaivers[e.id]) return { id: e.id, label: e.label, ok: true, reason: `waived: ${slugWaivers[e.id]}` }
  if (!snapshot) return { id: e.id, label: e.label, ok: false, reason: `no snapshot file — run: node scripts/verify-links.mjs ${tlId} --write-snapshot` }
  const snap = snapshot[e.wikiSlug]
  if (!snap) return { id: e.id, label: e.label, ok: false, reason: `slug "${e.wikiSlug}" never confirmed at creation (not in snapshot) — run verify-links` }
  const r = live.get(e.wikiSlug)
  if (!r || !r.exists) return { id: e.id, label: e.label, ok: false, reason: `"${e.wikiSlug}" — ${r?.reason || 'dead page'}` }
  if (r.disambiguation) return { id: e.id, label: e.label, ok: false, reason: `"${e.wikiSlug}" is now a disambiguation page` }
  if (norm(r.title) !== norm(snap.title)) return { id: e.id, label: e.label, ok: false, reason: `page moved/redirected since confirmation: "${snap.title}" → "${r.title}" (re-confirm + re-snapshot)` }
  return { id: e.id, label: e.label, ok: true, reason: 'matches confirmed snapshot' }
})

const failed = rows.filter((r) => !r.ok)
if (asJson) {
  console.log(JSON.stringify({ tlId, total: rows.length, failed: failed.length, rows }, null, 2))
} else {
  for (const r of failed) console.log(`  ✗ ${r.id} (${r.label}) — ${r.reason}`)
  console.log(`\naudit-events ${tlId}: ${rows.length} events · ${rows.length - failed.length} PASS · ${failed.length} FAIL (deterministic, no LLM)`)
}

const artifact = `EVENT-FAILURES-${tlId}.txt`
if (failed.length > 0) {
  writeFileSync(artifact, failed.map((r) => `${r.id}\t${r.label}\t${r.reason}`).join('\n') + '\n')
  console.error(`Wrote ${artifact} — retarget the slug (then re-run verify-links --write-snapshot), drop it to an authored blurb, or waive it; then re-run.`)
  if (!reportOnly) process.exit(1)
} else if (existsSync(artifact)) {
  rmSync(artifact)
}
