// One-off: convert audits/war-pipeline/freedom-struggle-final.md → the reader page.
// Deterministic markdown→blocks conversion (the prose is long; hand-transcription is
// error-prone). Emits src/app/war-civil-war/off-the-battlefield/freedom-struggle/page.tsx.
import fs from 'node:fs'

const SRC = 'audits/war-pipeline/freedom-struggle-final.md'
const OUT = 'src/app/war-civil-war/off-the-battlefield/freedom-struggle/page.tsx'

let raw = fs.readFileSync(SRC, 'utf8').split('# NEW CLAIMS LEDGER')[0]

// Fact-check MUST-FIX: it was Absalom Jones (not Allen) pulled off his knees at St. George's.
raw = raw.replace(
  'its ushers tried to haul him and other Black worshippers up off their knees and away from the white pews during prayer',
  'its ushers tried to drag Black worshippers up off their knees and away from the white pews during prayer',
)

// Smart-quote a single block of text. Double quotes via per-block toggle (balanced);
// straight apostrophes → curly. No backticks or ${ appear in the source prose.
function smart(s) {
  let out = '', dq = false
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '"') { out += dq ? '”' : '“'; dq = !dq }
    else if (c === "'") { out += '’' }
    else out += c
  }
  return out
}

const lines = raw.split('\n')
let title = '', sectionEyebrow = ''
const blocks = []
let para = [], seenFirstHeading = false
const seenEyebrows = new Set()
const flush = () => { if (para.length) { blocks.push({ t: 'p', x: smart(para.join(' ').trim()) }); para = [] } }

for (const line of lines) {
  const s = line.trim()
  if (s.startsWith('# ')) continue
  const ti = s.match(/^_Title:\s*(.*?)_$/)
  if (ti) { title = ti[1]; continue }
  const eb = s.match(/^_Eyebrow:\s*(.*?)_$/)
  if (eb) {
    if (!seenFirstHeading) sectionEyebrow = eb[1]
    else {
      const last = blocks[blocks.length - 1]
      if (last && last.t === 'h' && !seenEyebrows.has(eb[1])) { last.eyebrow = eb[1]; seenEyebrows.add(eb[1]) }
    }
    continue
  }
  if (s.startsWith('## ')) { flush(); blocks.push({ t: 'h', x: smart(s.slice(3).trim()) }); seenFirstHeading = true; continue }
  if (s.startsWith('> ')) { flush(); blocks.push({ t: 'q', x: smart(s.slice(2).trim()) }); continue }
  if (s === '') { flush(); continue }
  para.push(s)
}
flush()

// Rename the first heading so it doesn't duplicate the section title.
const firstH = blocks.find(b => b.t === 'h')
if (firstH) firstH.x = 'The man in the used-clothing shop'

// Add a heading for the Nat Turner beat (currently flows without one).
const turnerIdx = blocks.findIndex(b => b.t === 'p' && b.x.startsWith('And then, in the late summer of 1831'))
if (turnerIdx >= 0) blocks.splice(turnerIdx, 0, { t: 'h', x: 'The Prophet' })

// Serialize blocks.
const ser = blocks.map(b => {
  if (b.t === 'h') return `      { h: '${b.x.replace(/'/g, "\\'")}'${b.eyebrow ? `, eyebrow: '${b.eyebrow}'` : ''} },`
  if (b.t === 'q') return `      { p: \`${b.x}\`, q: true },`
  return `      { p: \`${b.x}\` },`
}).join('\n')

const file = `'use client'

// THEME section — The Freedom Struggle (Off the Battlefield, kind=theme). The
// antebellum Black freedom struggle as the Black-LED force that helped drive the
// country to war — told as AGENCY, not suffering. The flagship of the "causes are
// the heart" direction (memory/project_war_causes_first). NOTE: 'use client' is
// REQUIRED — this page reads ACCENTS (exported from a 'use client' module); a
// server component resolves it to a client reference and the accent silently falls
// back to violet. Built through the war content pipeline (fact pack → author(Opus)
// → FIVE gates [fact-check + storytelling + comprehensiveness + clarity + Lost
// Cause/framing] → revise → re-check). Source + gate records:
// audits/war-pipeline/freedom-struggle-*.md. Green accent; no stat block, no map.
// GENERATED from freedom-struggle-final.md by scripts/_build-freedom-struggle.mjs.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'
import { ACCENTS } from '@/components/mode/war-chrome'

const NARR: Record<string, Narr> = {
  main: {
    eyebrow: '${sectionEyebrow.replace(/'/g, "\\'")}',
    title: \`${title}\`,
    blocks: [
${ser}
    ],
    meanwhile: {
      region: 'the nation\\'s politics',
      title: 'The Road to War',
      body: 'The freedom struggle made slavery impossible to ignore; the country\\'s politics had to contain the collision — and couldn\\'t. Compromise after compromise tried to settle whether slavery would spread west, each one breaking in turn. That long unraveling is where the story goes next.',
    },
  },
}

export default function FreedomStruggleThemePage() {
  return (
    <BattleSectionReader
      sections={NARR}
      id="main"
      slug="freedom-struggle"
      battleName="The Freedom Struggle"
      theatreId="offfield"
      battleId="th-freedomstruggle"
      theatreHref="/war-civil-war/off-the-battlefield"
      accent={ACCENTS.green}
      heroImage="/war-img/freedom-struggle-hero.jpg"
      heroPalette={['#3a322a', '#221d18', '#0a0806']}
      heroCredit="HERO_CREDIT_PLACEHOLDER"
      endHref="/war-civil-war/off-the-battlefield"
      endKicker="Not waiting to be rescued"
      endLabel="Back to Off the Battlefield"
    />
  )
}
`

fs.mkdirSync('src/app/war-civil-war/off-the-battlefield/freedom-struggle', { recursive: true })
fs.writeFileSync(OUT, file)
console.log('wrote', OUT, '—', blocks.length, 'blocks')
