// audit-glossary.mjs — DETERMINISTIC ship gate for glossary sheets (G12).
//
// REDESIGN 2026-05-17 (memory/project_link_verification_redesign): no LLM.
// Same model as audit-events: subject-correctness ("does this page actually
// explain the term") is decided at CREATION time by verify-links.mjs and
// recorded in content/.link-snapshots-<tl>.json; this gate deterministically
// proves the page didn't drift (still exists, not a disambiguation page,
// title stable). The canonical answer for a term with no good page is an
// authored `definition` blurb (a `def:` token — no Wikipedia link rendered),
// which is skipped here because there is no external page to be wrong.
//
// PASS without check: a `def:` (authored-blurb) entry, or a term waived in
// content/.glossary-slug-waivers-<tl>.json. FAIL (block, fail-closed): a
// real slug with no snapshot entry, dead/disambiguation, or title drift.
//
// Same contract: writes GLOSSARY-FAILURES-<tl>.txt on failure, exit 1
// unless --report-only.
//
// Usage: node scripts/audit-glossary.mjs <tlId> [--json] [--report-only] [--limit N] [--refresh]

import { readFileSync, existsSync, writeFileSync, rmSync } from 'node:fs'
import { verifySlugs, isDefSlug } from './lib/wiki-verify.mjs'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const refresh = args.includes('--refresh')
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const limit = Number(arg('--limit', '0')) || 0
if (!tlId) { console.error('Usage: node scripts/audit-glossary.mjs <tlId> [--report-only]'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
let glossary = (JSON.parse(readFileSync(contentPath, 'utf8')).glossary || [])
if (limit) glossary = glossary.slice(0, limit)
if (glossary.length === 0) { console.log(`audit-glossary ${tlId}: no glossary entries`); process.exit(0) }

const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
const seen = new Set()
const entries = []
for (const g of glossary) {
  const k = (g.term || '').toLowerCase()
  if (!k || seen.has(k)) continue
  seen.add(k)
  entries.push({ term: stripHtml(g.term), wikiSlug: g.wikiSlug || '' })
}

const waiverPath = `content/.glossary-slug-waivers-${tlId}.json`
const rawWaivers = existsSync(waiverPath) ? JSON.parse(readFileSync(waiverPath, 'utf8')) : {}
const slugWaivers = new Map(Object.entries(rawWaivers).map(([k, v]) => [k.toLowerCase(), v]))

const snapPath = `content/.link-snapshots-${tlId}.json`
const snapshot = existsSync(snapPath) ? (JSON.parse(readFileSync(snapPath, 'utf8')).glossary || {}) : null

const norm = (t) => (t || '').replace(/\s+/g, ' ').trim().toLowerCase()

const targets = entries.filter((e) => e.wikiSlug && !isDefSlug(e.wikiSlug) && !slugWaivers.has(e.term.toLowerCase()))
const live = targets.length ? await verifySlugs(targets.map((e) => e.wikiSlug), { refresh }) : new Map()

const rows = entries.map((e) => {
  if (!e.wikiSlug || isDefSlug(e.wikiSlug)) return { term: e.term, wikiSlug: e.wikiSlug, ok: true, reason: 'authored definition / slug-less (no Wikipedia link rendered — auto-pass)' }
  const w = slugWaivers.get(e.term.toLowerCase())
  if (w) return { term: e.term, wikiSlug: e.wikiSlug, ok: true, reason: `waived: ${w}` }
  if (!snapshot) return { term: e.term, wikiSlug: e.wikiSlug, ok: false, reason: `no snapshot file — run: node scripts/verify-links.mjs ${tlId} --write-snapshot` }
  const snap = snapshot[e.wikiSlug]
  if (!snap) return { term: e.term, wikiSlug: e.wikiSlug, ok: false, reason: `slug never confirmed at creation (not in snapshot) — run verify-links` }
  const r = live.get(e.wikiSlug)
  if (!r || !r.exists) return { term: e.term, wikiSlug: e.wikiSlug, ok: false, reason: r?.reason || 'dead page' }
  if (r.disambiguation) return { term: e.term, wikiSlug: e.wikiSlug, ok: false, reason: 'now a disambiguation page' }
  if (norm(r.title) !== norm(snap.title)) return { term: e.term, wikiSlug: e.wikiSlug, ok: false, reason: `page moved/redirected since confirmation: "${snap.title}" → "${r.title}" (re-confirm + re-snapshot)` }
  return { term: e.term, wikiSlug: e.wikiSlug, ok: true, reason: 'matches confirmed snapshot' }
})

const failed = rows.filter((r) => !r.ok)
if (asJson) {
  console.log(JSON.stringify({ tlId, total: rows.length, failed: failed.length, rows }, null, 2))
} else {
  for (const r of failed) console.log(`  ✗ "${r.term}" → ${r.wikiSlug} — ${r.reason}`)
  console.log(`\naudit-glossary ${tlId}: ${rows.length} terms · ${rows.length - failed.length} PASS · ${failed.length} FAIL (deterministic, no LLM)`)
}

const artifact = `GLOSSARY-FAILURES-${tlId}.txt`
if (failed.length > 0) {
  writeFileSync(artifact, failed.map((r) => `${r.term}\t${r.wikiSlug}\t${r.reason}`).join('\n') + '\n')
  console.error(`Wrote ${artifact} — retarget the slug (then re-run verify-links --write-snapshot), write an authored definition blurb, or waive it; then re-run.`)
  if (!reportOnly) process.exit(1)
} else if (existsSync(artifact)) {
  rmSync(artifact)
}
