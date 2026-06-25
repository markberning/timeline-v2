// Deterministic voice linter for ART reads. NO LLM — pure regex.
// The art analog of scripts/lint-philosophy-voice.mjs. Catches the exact tics the
// big 2026-06 voice sweep had to remove by hand (meta-narration about the work,
// app-navigation / chapter-signposting cross-references, hype that tells the reader
// the verdict, em-dashes) PLUS the shared house-voice narrator tics. Run:
//   node scripts/lint-art-voice.mjs            # report all hits
//   node scripts/lint-art-voice.mjs --strict   # exit 1 if any hit (ship gate)
// Scans the reader-facing prose in the four files that carry shipped art prose.
import { readFileSync } from 'node:fs'

// The four files that hold reader-facing art prose (era / movement / work reads +
// the content registry: hooks, blurbs, captions, the heavy Picasso lifeline).
const FILES = [
  'src/app/art/[eraId]/s/[sectionId]/era-narratives.tsx',
  'src/app/art/[eraId]/[movementId]/s/[sectionId]/movement-narratives.tsx',
  'src/app/art/[eraId]/[movementId]/[workId]/[sectionId]/art-section-reader.tsx',
  'src/lib/art-content.ts',
  'src/lib/art-content-nro.ts',
]

// STRICT rules (ship-blocking under --strict). These encode the LOCKED voice rules:
// the "the single most common thing said is wrong" / "unlocks the work" meta device
// the user flagged on Flag, app-navigation / chapter-signposting (feedback_no_meta_
// narration), artifact self-reference, em-dashes, and gratuitous bold. A hit here is
// (almost) always a real violation; kept narrow so legitimate art prose never trips.
const STRICT = [
  // meta-narration: "the most common thing said is wrong / unlocks the work"
  [/\bunlocks? (the |this )?(whole )?(work|painting|picture|piece)\b/i, 'meta: "unlocks the work"'],
  [/\bgetting it right unlocks?\b/i, 'meta: "getting it right unlocks"'],
  [/\bthe (single )?most common (thing|mistake)\b/i, 'meta: "the most common thing/mistake"'],
  [/\bthe key to the (whole )?(work|painting|picture)\b/i, 'meta: "the key to the work"'],
  // app-navigation: literal UI directions in narrative prose
  [/\bscroll (down|up|on)\b/i, 'app-nav: "scroll down"'],
  [/\bthe (artists?|works?) (section|tab|strip)\b/i, 'app-nav: "the artists section"'],
  // chapter-signposting: referencing the read as a document / its position in a series
  // a read never calls itself an "article"/"series" (those = the Richard Mutt quote
  // and artwork series); "this read" collides with the verb ("this reads as a dog").
  [/\bthis (page|section|chapter)\b/i, 'self-reference: "this page/section/chapter"'],
  [/\bas we(?:'ll| will| 'll)? (see|saw|noted|said)\b/i, 'signposting: "as we will see"'],
  [/\bwe(?:'ll| will)? come back\b/i, 'signposting: "we will come back"'],
  [/\b(the|in the) next (section|chapter|read|page)\b/i, 'signposting: "in the next section"'],
  [/\b(earlier|later) in this (read|section|chapter|series|piece)\b/i, 'signposting: "earlier in this read"'],
  [/\bby the end of this (read|section|chapter|piece)\b/i, 'signposting: "by the end of this read"'],
  // em-dash (user: cleared from reader prose). ONLY the true em-dash (—); the en-dash
  // (–) is correct typography for numeric/date ranges ("1863–1935") and is left alone.
  [/—/, 'em-dash (use parens or commas)'],
  [/&mdash;/i, 'em-dash entity (use parens or commas)'],
  // gratuitous bold in prose (the user questioned ALL bolding)
  [/\*\*/, 'gratuitous bold (**)'],
  // condescension / presuming the reader (shared house-voice tics)
  [/\bthe (wise|careful|smart|attentive|good) reader\b/i, 'condescension: "the wise reader"'],
  [/\byou might be tempted\b/i, 'coaching: presuming reader temptation'],
  [/\blike a thunderclap\b/i, 'hyperbole: "like a thunderclap"'],
  [/\btook the world by storm\b/i, 'hyperbole: "took the world by storm"'],
]

// SOFT rules (advisory — reported, NOT ship-blocking). Judgment-call tics that are
// often legitimate in art writing (an emphatic "the whole point", a narrator nudge
// "worth pausing"), so the author + storytelling critic decide case by case rather
// than the gate. Reported so a tic that has run wild across a build gets noticed.
const SOFT = [
  [/\bthe whole point\b/i, 'soft: "the whole point" (overused emphatic)'],
  [/\b(here|this) is the part\b/i, 'soft: "here is the part"'],
  [/\bthe part (people|everyone|most) (miss|forget|get wrong)\b/i, 'soft: "the part people miss"'],
  [/\b(it is|it'?s) worth (pausing|flagging|noting)\b/i, 'soft: "it is worth pausing/flagging"'],
  [/\bthe honest (position|account|answer|truth) is\b/i, 'soft: "the honest X is"'],
  [/\bto be honest\b/i, 'soft: "to be honest"'],
  [/\bwhat'?s (striking|remarkable) is\b/i, 'soft: "what is striking is"'],
  [/\bkeep (this|that) in mind\b/i, 'soft: "keep this in mind"'],
  [/\bthe genius of\b/i, 'soft: "the genius of"'],
]

// Lines we never lint: comment lines, imports, and presentational/structural fields
// (alt text, image URLs, style/className). Verified quotes are scrubbed before linting
// so a quotation can never trip a rule (we never rewrite a quote).
function isSkippableLine(line) {
  if (/^\s*\/\//.test(line) || /^\s*import /.test(line) || /^\s*\*/.test(line)) return true
  if (/"alt":|alt=|"src":|src=|href=|"href":|"image":|"heroImage":|"photo":|className=/.test(line)) return true
  return false
}

// Metadata fields whose VALUE is an artwork title / credit / date / location — these
// legitimately contain an em-dash (e.g. Seurat's title "A Sunday on La Grande Jatte —
// 1884"), so they are exempt from the em-dash rule (but still linted for everything else).
const META_FIELD = /\b(name|title|shortName|heroCredit|credit|year|label|where|place|attribution|fullName):|credit=|year=|label=/

// Strip a trailing line comment (`  // ...`) without eating `https://` etc. Only strips
// a `//` that follows whitespace and is not itself preceded by a `:` (URL scheme).
function stripTrailingComment(line) {
  const m = line.match(/\s\/\/(?!\/)/)
  if (m && line[m.index - 1] !== ':') return line.slice(0, m.index)
  return line
}

function scanFile(path) {
  let lines
  try { lines = readFileSync(path, 'utf8').split('\n') } catch { return [] }
  const strictHits = [], softHits = []
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i]
    if (isSkippableLine(raw)) continue
    const line = stripTrailingComment(raw)
    const isMeta = META_FIELD.test(line)
    // scrub inline verified quotes \"...\" and JSX-entity quotes &ldquo;…&rdquo;
    const scrub = line
      .replace(/\\"[^"]*?\\"/g, '\\"\\"')
      .replace(/&ldquo;[\s\S]*?&rdquo;/g, '')
    for (const [re, label] of STRICT) {
      // em-dash rules are exempt on title/credit/date metadata fields
      if (isMeta && /em-dash/.test(label)) continue
      if (re.test(scrub)) strictHits.push({ line: i + 1, label, snippet: line.trim().slice(0, 120) })
    }
    for (const [re, label] of SOFT) {
      if (re.test(scrub)) softHits.push({ line: i + 1, label, snippet: line.trim().slice(0, 120) })
    }
  }
  return { strictHits, softHits }
}

const strict = process.argv.includes('--strict')
const showSoft = !process.argv.includes('--no-soft')
let strictTotal = 0, softTotal = 0
const results = []
for (const f of FILES) {
  const { strictHits, softHits } = scanFile(f)
  results.push([f, strictHits, softHits])
  strictTotal += strictHits.length
  softTotal += softHits.length
}

console.log('\n=== STRICT (ship-blocking) ===')
for (const [path, strictHits] of results.filter(r => r[1].length).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n${path}  (${strictHits.length})`)
  for (const h of strictHits) console.log(`  L${h.line}  [${h.label}]  ${h.snippet}`)
}
console.log(`\n${strictTotal} STRICT hits.`)

if (showSoft) {
  console.log('\n=== SOFT (advisory — review, not blocking) ===')
  for (const [path, , softHits] of results.filter(r => r[2].length).sort((a, b) => b[2].length - a[2].length)) {
    console.log(`\n${path}  (${softHits.length})`)
    for (const h of softHits) console.log(`  L${h.line}  [${h.label}]  ${h.snippet}`)
  }
  console.log(`\n${softTotal} SOFT hits (advisory).`)
}

if (strict && strictTotal > 0) process.exit(1)
