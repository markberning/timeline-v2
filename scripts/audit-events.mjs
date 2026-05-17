// audit-events.mjs — coherence QA gate for event popups (G10).
//
// A reader taps an event link and gets a bottom sheet with four things from
// four different sources: which event opened (link→eventId), a photo
// (wikiSlug/commons), a caption (Commons description), and text (curated
// description + Wikipedia extract). Nothing verified they are about the SAME
// subject — the highest reader-facing quality risk. This gate closes it.
//
// Two stages (cost-aware):
//   Stage 1 TEXT  — every event with a wikiSlug/extract, BATCHED. Does the
//                   wikiExtract / wikiSlug match the event's label+description?
//                   (catches wrong / redirected / off-subject pages.)
//   Stage 2 VISION — only events that HAVE a photo. Does the image depict the
//                   subject, and does the caption match the image+subject?
//                   (catches the Longhouse→totem-pole class.) --no-vision skips.
//
// FAIL-CLOSED: any API/parse error = FAIL, never a silent pass (cf. G4).
// On failure writes EVENT-FAILURES-<tlId>.txt (ship-check asserts its absence).
//
// Usage:
//   node --env-file=.env.local scripts/audit-events.mjs <tlId>
//   ... --no-vision        # stage 1 only (no image cost)
//   ... --model M --text-model M --json --report-only --limit N

import { readFileSync, existsSync, writeFileSync, rmSync } from 'node:fs'
import { GoogleGenAI } from '@google/genai'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const noVision = args.includes('--no-vision')
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const arg = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d }
const visionModel = arg('--model', 'gemini-3-pro')
const textModel = arg('--text-model', 'gemini-3-pro')
const limit = Number(arg('--limit', '0')) || 0

if (!tlId) { console.error('Usage: node --env-file=.env.local scripts/audit-events.mjs <tlId> [--no-vision] [--report-only]'); process.exit(2) }
const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey) { console.error('Missing GEMINI_API_KEY or GOOGLE_API_KEY'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
let events = (JSON.parse(readFileSync(contentPath, 'utf8')).events || []).map((e) => ({
  id: e.id, label: stripHtml(e.label), category: e.category, wikiSlug: e.wikiSlug || '',
  description: stripHtml(e.description).slice(0, 600),
  wikiExtract: stripHtml(e.wikiExtract).slice(0, 600),
  imageCaption: stripHtml(e.imageCaption), thumbnailUrl: e.thumbnailUrl || '',
}))
if (limit) events = events.slice(0, limit)

const ai = new GoogleGenAI({ apiKey })
const verdicts = new Map() // id → { text?, vision? }
const setV = (id, k, v) => { const o = verdicts.get(id) || {}; o[k] = v; verdicts.set(id, o) }

function extractJson(text) {
  const m = text.match(/\[[\s\S]*\]|\{[\s\S]*\}/)
  if (!m) throw new Error('no JSON in model output')
  return JSON.parse(m[0])
}

// ---- Stage 1: TEXT coherence (batched) ----
const textTargets = events.filter((e) => e.wikiExtract || e.wikiSlug)
const BATCH = 12
for (let i = 0; i < textTargets.length; i += BATCH) {
  const batch = textTargets.slice(i, i + BATCH)
  const payload = batch.map((e) => ({ id: e.id, label: e.label, description: e.description, wikiSlug: e.wikiSlug, wikiExtract: e.wikiExtract }))
  const prompt = `For each event below, decide if the wikiSlug page and wikiExtract are about the SAME subject as the event's label+description (a reader tapping this event must not get a Wikipedia blurb about a different/broader/redirected topic). A loosely-related broader page is a FAIL if a more specific subject was meant. Empty wikiExtract is OK (not a fail) as long as wikiSlug is plausibly the right page.
Respond ONLY with a JSON array, one object per event, same order:
[{"id":"...","verdict":"PASS"|"FAIL","reason":"short"}]

EVENTS:
${JSON.stringify(payload, null, 1)}`
  try {
    const res = await ai.models.generateContent({ model: textModel, contents: prompt })
    const out = extractJson((res?.text ?? (res?.candidates?.[0]?.content?.parts ?? []).map((p) => p.text).filter(Boolean).join(' ')).trim())
    const byId = new Map(out.map((o) => [o.id, o]))
    for (const e of batch) {
      const v = byId.get(e.id)
      setV(e.id, 'text', v ? { verdict: v.verdict === 'PASS' ? 'PASS' : 'FAIL', reason: v.reason || '' } : { verdict: 'FAIL', reason: 'no verdict returned' })
    }
  } catch (err) {
    for (const e of batch) setV(e.id, 'text', { verdict: 'FAIL', reason: `text QA errored: ${String(err?.message || err).slice(0, 120)}` })
  }
}

// ---- Stage 2: VISION coherence (only imaged events) ----
if (!noVision) {
  const imaged = events.filter((e) => e.thumbnailUrl)
  for (const e of imaged) {
    try {
      const r = await fetch(e.thumbnailUrl, { headers: { 'User-Agent': 'timeline-v2-audit-events/1.0 (https://stuffhappened.com)' } })
      if (!r.ok) throw new Error(`image fetch ${r.status}`)
      const mimeType = r.headers.get('content-type')?.split(';')[0] || 'image/jpeg'
      const data = Buffer.from(await r.arrayBuffer()).toString('base64')
      const prompt = `This image is the photo shown in a history app when the reader taps the event below. Decide PASS/FAIL:
- Does the image plausibly depict THIS event's subject (or a directly relevant map/artifact/place/person of it)? A generic image of the wrong culture/topic is a FAIL.
- Does the caption describe what is actually in the image AND stay on this subject?
Event label: ${e.label}
Event description: ${e.description}
Caption shown under the image: ${e.imageCaption || '(none)'}
Respond ONLY: {"verdict":"PASS"|"FAIL","reason":"short"}`
      const res = await ai.models.generateContent({ model: visionModel, contents: [{ parts: [{ text: prompt }, { inlineData: { mimeType, data } }] }] })
      const v = extractJson((res?.text ?? (res?.candidates?.[0]?.content?.parts ?? []).map((p) => p.text).filter(Boolean).join(' ')).trim())
      setV(e.id, 'vision', { verdict: v.verdict === 'PASS' ? 'PASS' : 'FAIL', reason: v.reason || '' })
    } catch (err) {
      setV(e.id, 'vision', { verdict: 'FAIL', reason: `vision QA errored: ${String(err?.message || err).slice(0, 120)}` })
    }
  }
}

// ---- report ----
const rows = events.map((e) => {
  const v = verdicts.get(e.id) || {}
  const fails = []
  if (v.text?.verdict === 'FAIL') fails.push(`text:${v.text.reason}`)
  if (v.vision?.verdict === 'FAIL') fails.push(`image:${v.vision.reason}`)
  return { id: e.id, label: e.label, ok: fails.length === 0, fails }
}).filter((r) => verdicts.has(r.id))

const failed = rows.filter((r) => !r.ok)
if (asJson) {
  console.log(JSON.stringify({ tlId, total: rows.length, failed: failed.length, rows }, null, 2))
} else {
  for (const r of failed) console.log(`  ✗ ${r.id} (${r.label}) — ${r.fails.join(' | ')}`)
  console.log(`\naudit-events ${tlId}: ${rows.length} events checked · ${rows.length - failed.length} PASS · ${failed.length} FAIL` + (noVision ? ' (text only)' : ''))
}

if (failed.length > 0) {
  writeFileSync(`EVENT-FAILURES-${tlId}.txt`, failed.map((r) => `${r.id}\t${r.label}\t${r.fails.join(' | ')}`).join('\n') + '\n')
  console.error(`Wrote EVENT-FAILURES-${tlId}.txt — fix via wikiSlug correction, link→eventId fix, content/.image-overrides.json or .caption-overrides.json, then re-run.`)
  if (!reportOnly) process.exit(1)
} else {
  // Remove a stale failure artifact on a clean run (ship-check tests existence).
  if (existsSync(`EVENT-FAILURES-${tlId}.txt`)) rmSync(`EVENT-FAILURES-${tlId}.txt`)
}
