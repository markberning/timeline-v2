// Generate chapter map PNGs by calling the Gemini image-generation API.
//
// Usage:
//   GEMINI_API_KEY=... node scripts/generate-maps.mjs <tlId>
//   GEMINI_API_KEY=... node scripts/generate-maps.mjs <tlId> --chapter 3
//   GEMINI_API_KEY=... node scripts/generate-maps.mjs <tlId> --dry-run
//
// Reads map-prompts/<tlId>.md, splits it on "## Chapter N" headers,
// prepends the global preamble (everything before the first chapter header)
// to each chapter prompt, and writes the resulting PNGs to
// public/maps/<tlId>/chapter-<N>.png. Existing PNG or WebP files for a chapter
// are skipped so the script is resumable.

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { GoogleGenAI } from '@google/genai'

const DEFAULT_MODEL = 'gemini-3-pro-image-preview'
const ASPECT_RATIO = '16:9'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const dryRun = args.includes('--dry-run')
const noPreprocess = args.includes('--no-preprocess')
const onlyChapterIdx = args.indexOf('--chapter')
const onlyChapter = onlyChapterIdx >= 0 ? Number(args[onlyChapterIdx + 1]) : null
const modelIdx = args.indexOf('--model')
const model = modelIdx >= 0 ? args[modelIdx + 1] : DEFAULT_MODEL

if (!tlId) {
  console.error('Usage: node scripts/generate-maps.mjs <tlId> [--chapter N] [--dry-run]')
  process.exit(1)
}

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey && !dryRun) {
  console.error('Missing GEMINI_API_KEY or GOOGLE_API_KEY environment variable.')
  process.exit(1)
}

const promptPath = `map-prompts/${tlId}.md`
if (!existsSync(promptPath)) {
  console.error(`No prompt file at ${promptPath}`)
  process.exit(1)
}

const raw = readFileSync(promptPath, 'utf8')
const { preamble, chapters } = parsePrompts(raw)

if (chapters.length === 0) {
  console.error(`No "## Chapter N" sections found in ${promptPath}`)
  process.exit(1)
}

console.log(`Parsed ${chapters.length} chapters from ${promptPath}`)
console.log(`Model: ${model}`)
console.log(`Preamble: ${preamble.length} chars`)

const outDir = `public/maps/${tlId}`
mkdirSync(outDir, { recursive: true })

const ai = dryRun ? null : new GoogleGenAI({ apiKey })

let generated = 0
let skipped = 0
let failed = 0

for (const ch of chapters) {
  if (onlyChapter !== null && ch.number !== onlyChapter) continue

  const pngPath = join(outDir, `chapter-${ch.number}.png`)
  const webpPath = join(outDir, `chapter-${ch.number}.webp`)
  if (existsSync(pngPath) || existsSync(webpPath)) {
    console.log(`  ch ${ch.number}: skip (already exists)`)
    skipped++
    continue
  }

  const rawPrompt = `${preamble}\n\n${ch.body}`.trim()
  const fullPrompt = noPreprocess ? rawPrompt : preprocessPrompt(rawPrompt)

  if (dryRun) {
    console.log(`  ch ${ch.number}: ${fullPrompt.length} chars — "${ch.title}"`)
    continue
  }

  console.log(`  ch ${ch.number}: generating "${ch.title}" (${fullPrompt.length} chars)...`)
  try {
    const bytes = await generateImage(ai, fullPrompt)
    writeFileSync(pngPath, bytes)
    const kb = (bytes.length / 1024).toFixed(0)
    console.log(`         ✓ ${pngPath} (${kb} KB)`)
    generated++
  } catch (err) {
    console.error(`         ✗ ${err.message}`)
    failed++
  }
}

console.log(`\nDone. generated=${generated} skipped=${skipped} failed=${failed}`)
if (generated > 0) {
  console.log(`Next: node scripts/optimize-maps.mjs   (converts new PNGs to .webp and deletes PNG originals)`)
}

// ---

function parsePrompts(md) {
  const lines = md.split('\n')
  let firstChapterIdx = lines.findIndex((l) => /^## Chapter \d+/.test(l))
  if (firstChapterIdx === -1) return { preamble: '', chapters: [] }

  const preamble = lines.slice(0, firstChapterIdx).join('\n').trim()

  const chapters = []
  let i = firstChapterIdx
  while (i < lines.length) {
    const m = lines[i].match(/^## Chapter (\d+)\s*[—-]\s*(.+)$/)
    if (!m) {
      i++
      continue
    }
    const number = Number(m[1])
    const title = m[2].trim()
    const start = i
    let end = lines.length
    for (let j = i + 1; j < lines.length; j++) {
      if (/^## Chapter \d+/.test(lines[j])) {
        end = j
        break
      }
    }
    const body = lines.slice(start, end).join('\n').trim()
    chapters.push({ number, title, body })
    i = end
  }
  return { preamble, chapters }
}

// Strip em-dash placement context and trailing parentheticals from bulleted
// site lines. The prompts use:
//   - Oc Eo — lower Mekong delta, southern Vietnam (the Funan port)
// where everything after " — " is placement context meant to guide the model,
// not be rendered. The web UI inferred that; the API model renders the whole
// line and garbles half of it. Strip to just "- Oc Eo".
//
// Also injects an explicit instruction near the site list to render labels
// verbatim from the bullets.
function preprocessPrompt(prompt) {
  const lines = prompt.split('\n')
  let touchedSiteList = false
  const out = lines.map((line) => {
    const m = line.match(/^(\s*-\s+)([^—–]+?)\s+[—–]\s+.*$/)
    if (!m) return line
    touchedSiteList = true
    return `${m[1]}${m[2].trim()}`
  })
  if (!touchedSiteList) return prompt
  return [
    out.join('\n'),
    '',
    '**LABEL TEXT RULE (overrides everything else):** For every bulleted item in this prompt, render the label exactly as it appears in the bullet — nothing more. Do not invent descriptive text, do not add dates, do not append parenthetical explanations. The bullet text is the complete label.',
    '',
    '**NO DECORATIVE ELEMENTS:** Do not draw a compass rose, scale bar, legend, north arrow, latitude/longitude grid, inset map, secondary map panel, or any other cartographic decoration that this prompt does not explicitly request. Do not add a second map showing nearby regions or cultural diffusion. The only required text elements are the title bar, the bulleted labels, the listed region labels, and the single annotation specified above. Nothing else.',
  ].join('\n')
}

async function generateImage(ai, prompt) {
  const response = await ai.models.generateContent({
    model,
    contents: prompt,
    config: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: ASPECT_RATIO },
    },
  })

  const parts = response?.candidates?.[0]?.content?.parts ?? []
  for (const part of parts) {
    const inline = part.inlineData ?? part.inline_data
    if (inline?.data) {
      return Buffer.from(inline.data, 'base64')
    }
  }

  const finish = response?.candidates?.[0]?.finishReason
  const text = parts.map((p) => p.text).filter(Boolean).join(' ')
  throw new Error(`no image in response (finishReason=${finish}, text="${text.slice(0, 200)}")`)
}
