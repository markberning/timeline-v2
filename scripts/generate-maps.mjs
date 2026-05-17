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

  // Global defect-prevention rules — injected into EVERY chapter prompt
  // (regardless of site-bullet shape), so older prompt files that lack the
  // README CRITICAL RULES block (e.g. mesopotamia, indus-valley) still get
  // them on regen. Each rule targets a recurring failure found in the
  // 2026-05 corpus map audit (see audits/map-audit.md).
  const globalRules = [
    '**DUPLICATE-LABEL RULE (the #1 corpus defect):** Draw every city, region, sea, and river label EXACTLY ONCE. Long rivers are the most frequent failure: a long river (for example the Nile, Yellow River, Niger, Volga, Euphrates, Tigris, Ganges, Danube, Mississippi) gets ONE label along its course and never a second copy near another bend. Never repeat any annotation text anywhere.',
    '',
    '**SPELL LABELS EXACTLY:** Render every label spelled EXACTLY as written in this prompt, including long transliterated place names. Do not add, drop, double, or alter letters (on a prior run "Shikanoshima" became "Shikanoshimia" — never mutate names like that). Invent no words that are not in this prompt.',
    '',
    '**NO MODERN POLITICAL GEOGRAPHY:** This is a historical map. Do not draw modern country names (for example PAKISTAN, IRAN, TURKEY, INDIA, JAPAN, CHINA, KOREA, EGYPT, MEXICO) and do NOT draw ANY boundary, border, national, administrative, prefecture, province, or internal-division lines anywhere (solid, dotted, or dashed). The only lines permitted on the map are coastlines, the rivers named in this prompt, and the single annotation arrow or shaded zone. Show only the regions, sites, and labels named in this prompt.',
    '',
    '**NO COMPASS WORDS AS LABELS:** Do not print the words North, South, East, or West, or the single letters N, S, E, W, anywhere on the image. The map is north-up by convention only; orientation must never appear as rendered text.',
    '',
    '**NO ORNAMENTAL GLYPHS:** Do not add any decorative star, four-point sparkle, twinkle, compass-rose flourish, or corner ornament anywhere. A stray sparkle has repeatedly appeared in the bottom-right corner on prior runs — do not draw it or any other ornament.',
    '',
    '**FRAME RULE (failed on half the last run — obey literally):** Draw NO border, outline, frame, rectangle, box, or hairline anywhere on the image except the single title header bar at the very top. The map and its water must BLEED OFF all four outer edges of the image — top (beside the title bar), left, right, and bottom. Never enclose the map in a rectangle. If you are about to draw any thin line around the map perimeter, do not draw it.',
    '',
    '**ONE TITLE, ONE BAR:** Render the chapter title text EXACTLY ONCE, only inside a single header bar that spans the FULL width of the image across the very top. Never draw a second title, a floating title box, or a separately boxed chapter number anywhere on the image. The header bar is full-width — not a small floating rectangle.',
    '',
    '**WATER IS LIGHT BLUE:** Every sea, bay, lake, and river is light blue. Never render water as gray, cream, tan, sepia, parchment, or white. Land is beige/tan; desert is pale yellow.',
    '',
    '**NO DECORATIVE ELEMENTS:** Do not draw a compass rose, scale bar, legend, north arrow, latitude/longitude grid, inset map, secondary map panel, or any other cartographic decoration that this prompt does not explicitly request. Do not add a second map showing nearby regions or cultural diffusion. The only required text elements are the title bar, the bulleted labels, the listed region labels, and the single annotation specified. Nothing else.',
  ].join('\n')

  if (!touchedSiteList) {
    return [prompt, '', globalRules].join('\n')
  }
  return [
    out.join('\n'),
    '',
    '**LABEL TEXT RULE (overrides everything else):** For every bulleted item in this prompt, render the label exactly as it appears in the bullet — nothing more. Do not invent descriptive text, do not add dates, do not append parenthetical explanations. The bullet text is the complete label.',
    '',
    globalRules,
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
