// lint-map-prompt.mjs — pre-generation guard for map-prompts/<tlId>.md.
//
// The README ties prompt density directly to the model's failure rate
// (>5 sites / extra annotations / missing CRITICAL block → more defects) and
// a chapter-count mismatch means the reader gets the wrong map per chapter.
// Catch these BEFORE a billable generation run.
//
// Usage: node scripts/lint-map-prompt.mjs <tlId> [--strict]

import { readFileSync, existsSync } from 'node:fs'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const strict = args.includes('--strict')
if (!tlId) { console.error('Usage: node scripts/lint-map-prompt.mjs <tlId> [--strict]'); process.exit(2) }

const promptPath = `map-prompts/${tlId}.md`
const narrPath = `narratives/${tlId}.md`
if (!existsSync(promptPath)) { console.error(`No prompt file at ${promptPath}`); process.exit(2) }

const md = readFileSync(promptPath, 'utf8')
const lines = md.split('\n')
const first = lines.findIndex((l) => /^## Chapter \d+/.test(l))
const preamble = first === -1 ? md : lines.slice(0, first).join('\n')

const issues = []
const add = (sev, msg) => issues.push({ sev, msg })

// 1. Chapter count must match the narrative.
const promptChs = [...md.matchAll(/^## Chapter (\d+)/gm)].map((m) => Number(m[1]))
if (existsSync(narrPath)) {
  const narrChs = [...readFileSync(narrPath, 'utf8').matchAll(/^# Chapter (\d+)\s*[—-]/gm)].map((m) => Number(m[1]))
  if (narrChs.length && promptChs.length !== narrChs.length)
    add('ERROR', `prompt has ${promptChs.length} chapters, narrative has ${narrChs.length}`)
  const missing = narrChs.filter((n) => !promptChs.includes(n))
  if (missing.length) add('ERROR', `prompt missing chapters: ${missing.join(', ')}`)
} else {
  add('WARN', `no narrative at ${narrPath} to cross-check chapter count`)
}

// 2. CRITICAL RULES block present in the preamble (README: pasted block is
//    followed more reliably than the global injection alone).
if (!/CRITICAL|RULES/i.test(preamble))
  add('WARN', 'preamble has no CRITICAL/RULES block — README house style expects one')

// 3. Banned phrases (README known-bad — bias the model toward UI chrome).
for (const bad of ['phone screen', 'mobile screen', 'smartphone', 'app screen']) {
  if (md.toLowerCase().includes(bad)) add('ERROR', `banned phrase "${bad}" in prompt`)
}

// 4. Per-chapter density: >5 site bullets correlates with garble (README).
let i = first
while (i !== -1 && i < lines.length) {
  const m = lines[i].match(/^## Chapter (\d+)/)
  if (!m) { i++; continue }
  let end = lines.length
  for (let j = i + 1; j < lines.length; j++) if (/^## Chapter \d+/.test(lines[j])) { end = j; break }
  const body = lines.slice(i, end)
  const bullets = body.filter((l) => /^\s*-\s+\S/.test(l)).length
  if (bullets > 8) add('WARN', `ch ${m[1]}: ${bullets} bullet lines (sites+regions) — README target is ~5 sites + ~4 regions; dense prompts garble more`)
  i = end
}

for (const x of issues) console.log(`  ${x.sev === 'ERROR' ? '✗' : '·'} ${x.sev} ${x.msg}`)
const errs = issues.filter((x) => x.sev === 'ERROR').length
console.log(`lint-map-prompt ${tlId}: ${errs} ERROR · ${issues.length - errs} WARN`)
if (strict && errs > 0) process.exit(1)
