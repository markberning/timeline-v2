// audit-glossary.mjs — coherence QA gate for glossary sheets (G12).
//
// lint-links (G2) already hard-ERRORs an empty or DEAD wikiSlug. But a slug can
// be ALIVE and still wrong: a disambiguation page, a same-name different-thing,
// or a redirect to an over-broad topic. The GlossarySheet renders ONLY the
// term + the Wikipedia extract + a link (no image), so this is a single cheap
// TEXT stage: does the wikiSlug page / wikiExtract actually correspond to the
// term the reader tapped?
//
// FAIL-CLOSED (any API/parse error = FAIL). On failure writes
// GLOSSARY-FAILURES-<tlId>.txt (ship-check asserts its absence).
// Mirrors audit-crosslinks.mjs.
//
// Calibration (2026-05-17, mirrors G10/audit-events): FAIL only a WRONG page
// (disambiguation, same-name-different-thing, redirect/off-subject). A broad
// PARENT article that legitimately covers the term — same civ/era/thread — is
// a PASS; thin-EN-coverage civs often have only a parent (a glossary term
// like "merit land" or "Daesik" frequently has no dedicated article).
//
// Resolution order for "no good EN article" (canonical, 2026-05-17):
//   1. authored `definition` blurb (no wikiSlug) — parse normalizes it to a
//      `def:` token; GlossarySheet shows the house-voice prose and NO wiki
//      link. SKIPPED here (auto-PASS): nothing to land on wrong, and the
//      blurb is 5-persona-audited author prose. This is the PREFERRED answer
//      and scales to thin-EN-coverage civs without degrading the tap.
//   2. correct broad on-thread PARENT slug (same civ/era/thread).
//   3. residual waived per-term in
//      content/.glossary-slug-waivers-<tlId>.json ({ "<term>": "reason" }),
//      mirroring G10 .event-slug-waivers / G3 .link-waivers / G1 baseline.
//
// Usage:
//   node --env-file=.env.local scripts/audit-glossary.mjs <tlId>
//   ... --model M --json --report-only --limit N

import { readFileSync, existsSync, writeFileSync, rmSync } from 'node:fs'
import { GoogleGenAI } from '@google/genai'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const model = arg('--model', 'gemini-3-pro-preview')
const limit = Number(arg('--limit', '0')) || 0

if (!tlId) { console.error('Usage: node --env-file=.env.local scripts/audit-glossary.mjs <tlId> [--report-only]'); process.exit(2) }
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey) { console.error('Missing GEMINI_API_KEY or GOOGLE_API_KEY'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
let glossary = (JSON.parse(readFileSync(contentPath, 'utf8')).glossary || [])
if (limit) glossary = glossary.slice(0, limit)
if (glossary.length === 0) { console.log(`audit-glossary ${tlId}: no glossary entries`); process.exit(0) }

const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
// Dedup by term — the sheet is keyed by term; one verdict per distinct term.
const seen = new Set()
const entries = []
for (const g of glossary) {
  const k = (g.term || '').toLowerCase()
  if (!k || seen.has(k)) continue
  seen.add(k)
  entries.push({ term: stripHtml(g.term), wikiSlug: g.wikiSlug || '', wikiExtract: stripHtml(g.wikiExtract).slice(0, 500) })
}

// G12 slug waivers: { "<term>": "reason" } — broad-but-correct parent the
// civ cannot improve. Waived terms skip the model call (PASS), matched
// case-insensitively, and never reach GLOSSARY-FAILURES.
const waiverPath = `content/.glossary-slug-waivers-${tlId}.json`
const rawWaivers = existsSync(waiverPath) ? JSON.parse(readFileSync(waiverPath, 'utf8')) : {}
const slugWaivers = new Map(Object.entries(rawWaivers).map(([k, v]) => [k.toLowerCase(), v]))

const ai = new GoogleGenAI({ apiKey })
function extractJson(t) { const m = t.match(/\[[\s\S]*\]|\{[\s\S]*\}/); if (!m) throw new Error('no JSON'); return JSON.parse(m[0]) }

const isDef = (e) => e.wikiSlug.startsWith('def:')

const verdicts = new Map()
for (const e of entries) {
  // Authored-blurb entries: parse-narratives normalizes a `definition`
  // with no wikiSlug to a stable `def:` token, and GlossarySheet renders
  // the house-voice blurb with NO Wikipedia link. There is no external
  // page for the reader to land on wrong, and the blurb is author-written
  // + 5-persona-audited prose — so there is nothing for a coherence gate
  // to check. Skip the model call (PASS), mirroring G10 skipping slug-less
  // events whose curated description renders standalone. This makes the
  // authored `definition` the canonical "no good EN article" answer for
  // glossary (the slug-waiver remains for the broad-parent-stretch case).
  if (isDef(e)) {
    verdicts.set(e.term, { verdict: 'PASS', reason: 'authored definition (def: token — no Wikipedia link rendered)' })
    continue
  }
  const w = slugWaivers.get(e.term.toLowerCase())
  if (w) verdicts.set(e.term, { verdict: 'PASS', reason: `waived: ${w}` })
}
const pending = entries.filter((e) => !isDef(e) && !slugWaivers.has(e.term.toLowerCase()))
const BATCH = 12
for (let i = 0; i < pending.length; i += BATCH) {
  const batch = pending.slice(i, i + BATCH)
  const prompt = `Each item is a glossary entry in a history reading app: the reader taps "term" and gets the Wikipedia page "wikiSlug" with intro "wikiExtract". Decide whether the reader lands on a CORRECT, ON-SUBJECT page that helps explain the term.

PASS if the page (or extract) explains the term OR is a broader parent topic that legitimately covers it — same civilization, same era, same thread of history. Many real glossary terms only have a broad parent article on English Wikipedia; landing on the correct parent is fine. Empty wikiExtract is PASS as long as the wikiSlug is plausibly the right page.

FAIL only if the page is genuinely WRONG for the reader: a disambiguation page, a same-name-different-thing (wrong city/person/sense), or a redirect to an off-subject topic that does not explain this term at all. Breadth alone is NOT a failure — wrongness is.

Respond ONLY with a JSON array, same order: [{"term":"...","verdict":"PASS"|"FAIL","reason":"short"}]

ENTRIES:
${JSON.stringify(batch, null, 1)}`
  try {
    const res = await ai.models.generateContent({ model, contents: prompt })
    const out = extractJson((res?.text ?? (res?.candidates?.[0]?.content?.parts ?? []).map((p) => p.text).filter(Boolean).join(' ')).trim())
    const byTerm = new Map(out.map((o) => [(o.term || '').toLowerCase(), o]))
    for (const e of batch) {
      const v = byTerm.get(e.term.toLowerCase())
      verdicts.set(e.term, v ? { verdict: v.verdict === 'PASS' ? 'PASS' : 'FAIL', reason: v.reason || '' } : { verdict: 'FAIL', reason: 'no verdict returned' })
    }
  } catch (err) {
    for (const e of batch) verdicts.set(e.term, { verdict: 'FAIL', reason: `QA errored: ${String(err?.message || err).slice(0, 120)}` })
  }
}

const rows = entries.map((e) => {
  const v = verdicts.get(e.term) || { verdict: 'FAIL', reason: 'not evaluated' }
  return { term: e.term, wikiSlug: e.wikiSlug, ok: v.verdict === 'PASS', reason: v.reason }
})
const failed = rows.filter((r) => !r.ok)

if (asJson) {
  console.log(JSON.stringify({ tlId, total: rows.length, failed: failed.length, rows }, null, 2))
} else {
  for (const r of failed) console.log(`  ✗ "${r.term}" → ${r.wikiSlug} — ${r.reason}`)
  console.log(`\naudit-glossary ${tlId}: ${rows.length} terms · ${rows.length - failed.length} PASS · ${failed.length} FAIL`)
}

const artifact = `GLOSSARY-FAILURES-${tlId}.txt`
if (failed.length > 0) {
  writeFileSync(artifact, failed.map((r) => `${r.term}\t${r.wikiSlug}\t${r.reason}`).join('\n') + '\n')
  console.error(`Wrote ${artifact} — fix the wikiSlug (or the term), then re-run.`)
  if (!reportOnly) process.exit(1)
} else if (existsSync(artifact)) {
  rmSync(artifact)
}
