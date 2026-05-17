// audit-maps.mjs — vision-model QA gate for chapter maps.
//
// The generation script (generate-maps.mjs) writes whatever bytes the image
// model returns; a garbled or framed map counts as "generated". This gate
// closes that hole: every chapter map is shown to a vision model with the
// LOCKED acceptance criteria and must come back PASS, or the gate fails.
//
// FAIL-CLOSED: any API error, missing image, or unparseable verdict is a FAIL,
// never a silent pass — that is the entire point of the gate.
//
// Acceptance criteria are verbatim from memory
// feedback_dont_over_generalize_defect_rules (locked over 3 user corrections):
// modern reference geography / repeated correct rivers / province outlines are
// NOT defects; only garble/wrong-location/adjacent-dup/caption-3x/compass-words/
// frame-or-title-chrome/illegible/non-blue-water are.
//
// Usage:
//   GEMINI_API_KEY=... node scripts/audit-maps.mjs <tlId>
//   ... node scripts/audit-maps.mjs <tlId> --chapter 3
//   ... node scripts/audit-maps.mjs <tlId> --model gemini-3-pro
//   ... node scripts/audit-maps.mjs <tlId> --json        # machine-readable
//   ... node scripts/audit-maps.mjs <tlId> --report-only  # never exit non-zero

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { GoogleGenAI } from '@google/genai'

const DEFAULT_MODEL = 'gemini-3-pro'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const chIdx = args.indexOf('--chapter')
const onlyChapter = chIdx >= 0 ? Number(args[chIdx + 1]) : null
const modelIdx = args.indexOf('--model')
const model = modelIdx >= 0 ? args[modelIdx + 1] : DEFAULT_MODEL
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')

if (!tlId) {
  console.error('Usage: node scripts/audit-maps.mjs <tlId> [--chapter N] [--model M] [--json] [--report-only]')
  process.exit(2)
}

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey) {
  console.error('Missing GEMINI_API_KEY or GOOGLE_API_KEY')
  process.exit(2)
}

const RUBRIC = `You are a strict cartographic QA reviewer for a history reading app.
You are shown ONE chapter map and the prompt that generated it. Decide PASS or FAIL.

These are NOT defects — do not fail for any of them:
- A long river carrying its label more than once, if each is spelled correctly and the repeats are well separated (normal cartography).
- Period-appropriate province / state / kingdom outlines.
- Faint MODERN country or region outlines or labels used as an orientation aid (welcome — they help the reader place the location).
- Any period or modern reference geography.
- Minor extra labels that are correct and not requested.

These ARE defects — FAIL if ANY is present:
- Garbled, invented, or misspelled text anywhere (letters added/dropped/doubled; words not derivable from the prompt).
- A feature placed in the wrong real-world location, or a label that contradicts the prompt's facts.
- The SAME label stamped twice adjacent / touching / stacked, OR any caption or annotation repeated 3+ times.
- The words North/South/East/West, or single letters N/S/E/W, rendered anywhere as map text.
- Any border/box/frame/hairline around the map (the map must bleed off all four edges) EXCEPT the single full-width title bar at the very top; OR no title bar; OR a second/floating/boxed title; OR an ornamental star/sparkle/compass-rose/corner glyph.
- Water rendered gray, cream, tan, sepia, parchment, or white (sea/lake/river must be light blue).
- Content illegible at reading size.

Respond with ONLY a JSON object, no prose, no code fence:
{"verdict":"PASS"|"FAIL","defects":["short phrase", ...],"notes":"one sentence"}`

function parsePromptChapters(md) {
  const lines = md.split('\n')
  const first = lines.findIndex((l) => /^## Chapter \d+/.test(l))
  if (first === -1) return { preamble: '', chapters: [] }
  const preamble = lines.slice(0, first).join('\n').trim()
  const chapters = []
  let i = first
  while (i < lines.length) {
    const m = lines[i].match(/^## Chapter (\d+)\s*(?:[—-]\s*(.+?))?\s*$/)
    if (!m) { i++; continue }
    let end = lines.length
    for (let j = i + 1; j < lines.length; j++) {
      if (/^## Chapter \d+/.test(lines[j])) { end = j; break }
    }
    chapters.push({ number: Number(m[1]), title: (m[2] || `Chapter ${m[1]}`).trim(), body: lines.slice(i, end).join('\n').trim() })
    i = end
  }
  return { preamble, chapters }
}

const promptPath = `map-prompts/${tlId}.md`
if (!existsSync(promptPath)) { console.error(`No prompt file at ${promptPath}`); process.exit(2) }
const { preamble, chapters } = parsePromptChapters(readFileSync(promptPath, 'utf8'))
if (chapters.length === 0) { console.error(`No "## Chapter N" sections in ${promptPath}`); process.exit(2) }

const mapDir = `public/maps/${tlId}`
const ai = new GoogleGenAI({ apiKey })

async function auditChapter(ch) {
  const webp = join(mapDir, `chapter-${ch.number}.webp`)
  const png = join(mapDir, `chapter-${ch.number}.png`)
  const file = existsSync(webp) ? webp : existsSync(png) ? png : null
  if (!file) return { ch: ch.number, verdict: 'FAIL', defects: ['map file missing'], notes: 'no chapter-N.webp/png' }

  const bytes = readFileSync(file)
  const mimeType = file.endsWith('.webp') ? 'image/webp' : 'image/png'
  const context = `Chapter ${ch.number} — ${ch.title}\n\nPROMPT THAT GENERATED THIS MAP:\n${preamble}\n\n${ch.body}`

  try {
    const res = await ai.models.generateContent({
      model,
      contents: [{ parts: [
        { text: `${RUBRIC}\n\n--- CONTEXT ---\n${context}` },
        { inlineData: { mimeType, data: bytes.toString('base64') } },
      ] }],
    })
    const parts = res?.candidates?.[0]?.content?.parts ?? []
    const text = (res?.text ?? parts.map((p) => p.text).filter(Boolean).join(' ')).trim()
    const json = text.match(/\{[\s\S]*\}/)
    if (!json) return { ch: ch.number, verdict: 'FAIL', defects: ['QA verdict unparseable'], notes: text.slice(0, 160) }
    const v = JSON.parse(json[0])
    const verdict = v.verdict === 'PASS' ? 'PASS' : 'FAIL'
    return { ch: ch.number, verdict, defects: v.defects ?? [], notes: v.notes ?? '' }
  } catch (err) {
    // Fail-closed: an errored QA call is a FAIL, never a pass.
    return { ch: ch.number, verdict: 'FAIL', defects: ['QA call errored'], notes: String(err?.message || err).slice(0, 200) }
  }
}

const targets = chapters.filter((c) => onlyChapter === null || c.number === onlyChapter)
const results = []
for (const ch of targets) {
  const r = await auditChapter(ch)
  results.push(r)
  if (!asJson) {
    const mark = r.verdict === 'PASS' ? '✓' : '✗'
    console.log(`  ${mark} ch ${r.ch}: ${r.verdict}${r.defects.length ? ' — ' + r.defects.join('; ') : ''}`)
  }
}

const failed = results.filter((r) => r.verdict !== 'PASS')
if (asJson) {
  console.log(JSON.stringify({ tlId, model, total: results.length, failed: failed.length, results }, null, 2))
} else {
  console.log(`\naudit-maps ${tlId}: ${results.length} chapters · ${results.length - failed.length} PASS · ${failed.length} FAIL`)
}

if (!reportOnly && failed.length > 0) process.exit(1)
