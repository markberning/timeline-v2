// War battle-map generator (phase-2 worktree only).
//
// Standalone on purpose: war battle maps use a different house style than the
// civ territorial maps (flat schematic, side-colored forces + arrows, no terrain
// fill), and write to public/war-img/<slug>.png — NOT public/maps/<tl>/. It does
// NOT touch the shared civ generate-maps.mjs / its preprocessPrompt (those inject
// civ-only rules like "water is light blue, land is tan"). Clean kind-aware merge
// comes after the main-session sweep settles.
//
// Usage:
//   GOOGLE_API_KEY=... node scripts/generate-war-maps.mjs <war>            # all maps
//   GOOGLE_API_KEY=... node scripts/generate-war-maps.mjs <war> --map day2 # one map
//   ... --ar 1:1   (default 4:3)   --force (overwrite)   --dry-run
//
// <war> resolves to map-prompts/war/<war>.md. Sections are "## Map <slug>".

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { GoogleGenAI } from '@google/genai'

const MODEL = 'gemini-3-pro-image-preview'
const args = process.argv.slice(2)
const war = args.find((a) => !a.startsWith('--'))
const onlyIdx = args.indexOf('--map')
const onlyMap = onlyIdx >= 0 ? args[onlyIdx + 1] : null
const arIdx = args.indexOf('--ar')
const ASPECT = arIdx >= 0 ? args[arIdx + 1] : '4:3'
const force = args.includes('--force')
const dryRun = args.includes('--dry-run')

if (!war) {
  console.error('Usage: node scripts/generate-war-maps.mjs <war> [--map slug] [--ar 4:3] [--force] [--dry-run]')
  process.exit(1)
}

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey && !dryRun) {
  console.error('Missing GEMINI_API_KEY or GOOGLE_API_KEY environment variable.')
  process.exit(1)
}

const promptPath = `map-prompts/war/${war}.md`
if (!existsSync(promptPath)) {
  console.error(`No prompt file at ${promptPath}`)
  process.exit(1)
}

const { preamble, maps } = parsePrompts(readFileSync(promptPath, 'utf8'))
if (maps.length === 0) {
  console.error(`No "## Map <slug>" sections in ${promptPath}`)
  process.exit(1)
}

const outDir = 'public/war-img'
mkdirSync(outDir, { recursive: true })

const targets = onlyMap ? maps.filter((m) => m.slug === onlyMap || m.slug === `${war}-${onlyMap}`) : maps
if (targets.length === 0) {
  console.error(`No map matching --map ${onlyMap}. Available: ${maps.map((m) => m.slug).join(', ')}`)
  process.exit(1)
}

console.log(`Prompt: ${promptPath} · model: ${MODEL} · aspect: ${ASPECT}`)
console.log(`Targets: ${targets.map((m) => m.slug).join(', ')}`)

const ai = dryRun ? null : new GoogleGenAI({ apiKey })

for (const m of targets) {
  const pngPath = join(outDir, `${m.slug}.png`)
  if (existsSync(pngPath) && !force) {
    console.log(`SKIP ${m.slug} (exists; --force to overwrite)`)
    continue
  }
  const fullPrompt = `${preamble}\n\n${m.body}`
  if (dryRun) {
    console.log(`\n----- ${m.slug} -----\n${fullPrompt}\n`)
    continue
  }
  process.stdout.write(`GEN  ${m.slug} ... `)
  try {
    const bytes = await generateImage(ai, fullPrompt)
    writeFileSync(pngPath, bytes)
    console.log(`ok (${(bytes.length / 1024).toFixed(0)} KB) -> ${pngPath}`)
  } catch (err) {
    console.log(`FAIL: ${err.message}`)
  }
}

// Split on "## Map <slug>"; everything before the first is the shared preamble.
function parsePrompts(md) {
  const lines = md.split('\n')
  const preambleLines = []
  const maps = []
  let cur = null
  for (const line of lines) {
    const m = line.match(/^##\s+Map\s+(\S+)\s*$/)
    if (m) {
      if (cur) maps.push(cur)
      cur = { slug: m[1], body: '' }
    } else if (cur) {
      cur.body += line + '\n'
    } else {
      preambleLines.push(line)
    }
  }
  if (cur) maps.push(cur)
  for (const mp of maps) mp.body = mp.body.trim()
  return { preamble: preambleLines.join('\n').trim(), maps }
}

async function generateImage(ai, prompt) {
  const response = await ai.models.generateContent({
    model: MODEL,
    contents: prompt,
    config: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: ASPECT },
    },
  })
  const parts = response?.candidates?.[0]?.content?.parts ?? []
  for (const part of parts) {
    const inline = part.inlineData ?? part.inline_data
    if (inline?.data) return Buffer.from(inline.data, 'base64')
  }
  const finish = response?.candidates?.[0]?.finishReason
  const text = parts.map((p) => p.text).filter(Boolean).join(' ')
  throw new Error(`no image in response (finishReason=${finish}, text="${text.slice(0, 200)}")`)
}
