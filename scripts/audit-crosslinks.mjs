// audit-crosslinks.mjs — coherence QA gate for cross-link sheets (G11).
//
// The "Meanwhile in {targetLabel} / Chapter N: {targetChapterTitle} / {blurb}"
// sheet has the same coherence risk G10 closed for event popups, but for
// cross-civ links: lint-links (G2) now validates the matchText AND that the
// target resolves (Part A), but nothing checks the SUBJECT agrees end to end —
// does the blurb actually describe that target chapter, and is that the
// era/topic-correct destination for what the reader tapped?
//
// Text-only (the sheet has no image), so one cheap batched stage. FAIL-CLOSED
// (any API/parse error = FAIL). On failure writes CROSSLINK-FAILURES-<tlId>.txt
// (ship-check asserts its absence). Mirrors audit-events.mjs.
//
// Usage:
//   node --env-file=.env.local scripts/audit-crosslinks.mjs <tlId>
//   ... --model M --json --report-only --limit N

import { readFileSync, existsSync, writeFileSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { GoogleGenAI } from '@google/genai'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const model = arg('--model', 'gemini-3-pro')
const limit = Number(arg('--limit', '0')) || 0

if (!tlId) { console.error('Usage: node --env-file=.env.local scripts/audit-crosslinks.mjs <tlId> [--report-only]'); process.exit(2) }
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey) { console.error('Missing GEMINI_API_KEY or GOOGLE_API_KEY'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
const content = JSON.parse(readFileSync(contentPath, 'utf8'))
let crossLinks = content.crossLinks || []
if (limit) crossLinks = crossLinks.slice(0, limit)
if (crossLinks.length === 0) { console.log(`audit-crosslinks ${tlId}: no cross-links`); process.exit(0) }

const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

// Source-side context: the sentence(s) around the matchText in the source chapter.
function sourceContext(sourceChapter, matchText) {
  try {
    const md = readFileSync(join('narratives', `${tlId}.md`), 'utf8')
    const marks = [...md.matchAll(/^# Chapter (\d+)/gm)]
    const mk = marks.find((m) => Number(m[1]) === sourceChapter)
    if (!mk) return ''
    const start = mk.index
    const next = marks.find((m) => m.index > start)
    const body = md.slice(start, next ? next.index : md.length)
    const i = body.toLowerCase().indexOf(matchText.toLowerCase())
    if (i < 0) return ''
    return stripHtml(body.slice(Math.max(0, i - 160), i + matchText.length + 160))
  } catch { return '' }
}

// Target-side description: that chapter's summary bullets (concise + accurate).
const summaryCache = new Map()
function targetSummary(targetTl, targetChapter) {
  if (!summaryCache.has(targetTl)) {
    try { summaryCache.set(targetTl, JSON.parse(readFileSync(join('narratives', `${targetTl}.summaries.json`), 'utf8'))) }
    catch { summaryCache.set(targetTl, []) }
  }
  const s = (summaryCache.get(targetTl) || []).find((x) => x.chapter === targetChapter)
  if (!s) return ''
  return `${s.title || ''} ${s.dateRange || ''} :: ${(s.bullets || []).join(' ')}`.trim()
}

const payload = crossLinks.map((c) => ({
  id: c.id,
  tapped: stripHtml(c.matchText),
  sourceContext: sourceContext(c.sourceChapter, stripHtml(c.matchText)),
  target: `${c.targetLabel} Ch ${c.targetChapter}: ${c.targetChapterTitle}`,
  targetSummary: targetSummary(c.targetTl, c.targetChapter).slice(0, 700),
  blurb: stripHtml(c.blurb),
}))

const ai = new GoogleGenAI({ apiKey })
function extractJson(t) { const m = t.match(/\[[\s\S]*\]|\{[\s\S]*\}/); if (!m) throw new Error('no JSON'); return JSON.parse(m[0]) }

const verdicts = new Map()
const BATCH = 10
for (let i = 0; i < payload.length; i += BATCH) {
  const batch = payload.slice(i, i + BATCH)
  const prompt = `Each item is a cross-civ link in a history app. The reader taps "tapped" (used in "sourceContext") and gets a sheet pointing at "target" with the text "blurb". "targetSummary" is what that target chapter actually covers.
For each, FAIL if any is true: the blurb does not accurately describe the target chapter; the target chapter is the wrong era/topic for what "tapped" refers to (a better-fitting chapter of that civ clearly exists); or the blurb/target contradicts the source context. Otherwise PASS. A reasonable thematic link is PASS even if not perfect.
Respond ONLY with a JSON array, same order: [{"id":"...","verdict":"PASS"|"FAIL","reason":"short"}]

ITEMS:
${JSON.stringify(batch, null, 1)}`
  try {
    const res = await ai.models.generateContent({ model, contents: prompt })
    const out = extractJson((res?.text ?? (res?.candidates?.[0]?.content?.parts ?? []).map((p) => p.text).filter(Boolean).join(' ')).trim())
    const byId = new Map(out.map((o) => [o.id, o]))
    for (const e of batch) {
      const v = byId.get(e.id)
      verdicts.set(e.id, v ? { verdict: v.verdict === 'PASS' ? 'PASS' : 'FAIL', reason: v.reason || '' } : { verdict: 'FAIL', reason: 'no verdict returned' })
    }
  } catch (err) {
    for (const e of batch) verdicts.set(e.id, { verdict: 'FAIL', reason: `QA errored: ${String(err?.message || err).slice(0, 120)}` })
  }
}

const rows = crossLinks.map((c) => {
  const v = verdicts.get(c.id) || { verdict: 'FAIL', reason: 'not evaluated' }
  return { id: c.id, tapped: stripHtml(c.matchText), target: `${c.targetLabel} Ch${c.targetChapter}`, ok: v.verdict === 'PASS', reason: v.reason }
})
const failed = rows.filter((r) => !r.ok)

if (asJson) {
  console.log(JSON.stringify({ tlId, total: rows.length, failed: failed.length, rows }, null, 2))
} else {
  for (const r of failed) console.log(`  ✗ ${r.id} "${r.tapped}" → ${r.target} — ${r.reason}`)
  console.log(`\naudit-crosslinks ${tlId}: ${rows.length} cross-links · ${rows.length - failed.length} PASS · ${failed.length} FAIL`)
}

const artifact = `CROSSLINK-FAILURES-${tlId}.txt`
if (failed.length > 0) {
  writeFileSync(artifact, failed.map((r) => `${r.id}\t${r.tapped}\t${r.target}\t${r.reason}`).join('\n') + '\n')
  console.error(`Wrote ${artifact} — fix the blurb, retarget targetChapter, or fix the link, then re-run.`)
  if (!reportOnly) process.exit(1)
} else if (existsSync(artifact)) {
  rmSync(artifact)
}
