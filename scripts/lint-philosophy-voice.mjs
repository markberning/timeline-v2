// Deterministic voice linter for philosophy reads. NO LLM — pure regex.
// Catches the narrator-intrusion / melodrama / over-explanation / coaching patterns
// the author+critic agents kept letting through. Run:
//   node scripts/lint-philosophy-voice.mjs            # report all hits
//   node scripts/lint-philosophy-voice.mjs --strict   # exit 1 if any hit (ship gate)
// Scans the reader-facing string fields (throughline, hook, brk paragraphs, block "p",
// captions) of every shipped read .ts under src/app/philosophy/**/_reads/.
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOTS = [
  'src/app/philosophy/thinker/_reads',
  'src/app/philosophy/school/_reads',
  'src/app/philosophy/work/_reads',
]

// High-precision banned patterns. Each is [regex, label]. Kept narrow so legitimate
// prose does not trip them; when in doubt the phrase is one a plain narrator never needs.
const RULES = [
  // narrator flagging its own honesty / stance
  [/\bthere is no getting around it\b/i, 'narrator-aside: "no getting around it"'],
  [/\bno getting around\b/i, 'narrator-aside: "no getting around"'],
  [/\bthe honest (position|account|answer|truth) is\b/i, 'narrator-aside: "the honest X is"'],
  [/\bto be honest\b/i, 'narrator-aside: "to be honest"'],
  [/\bif we(?:'re| are) honest\b/i, 'narrator-aside: "if we are honest"'],
  [/\b(the )?(first|second|third|fourth) (hard truth|problem|caution)\b/i, 'narrator scaffolding: counting truths/problems'],
  [/\bit cuts deep\b/i, 'melodrama: "it cuts deep"'],
  [/\bworth flagging\b/i, 'coaching: "worth flagging"'],
  [/\bworth noting\b/i, 'coaching: "worth noting"'],
  [/\b(it is|it'?s) worth pausing\b/i, 'coaching: "worth pausing"'],
  // telling the reader what matters / is revealing / is the point
  [/\bthe (difference|distinction) matters\b/i, 'editorializing: "the difference matters"'],
  [/\bis revealing\b/i, 'editorializing: "is revealing"'],
  [/\bthe whole point\b/i, 'editorializing: "the whole point"'],
  [/\bmisses the point\b/i, 'editorializing: "misses the point"'],
  [/\b(here|this) is the part\b/i, 'meta-narration: "here is the part"'],
  [/\bthe part (people|everyone|most) (miss|forget)\b/i, 'meta-narration: "the part people miss"'],
  [/\bwhat'?s (striking|remarkable) is\b/i, 'meta-narration: "what is striking is"'],
  // the wise/careful reader; coaching the reader's move
  [/\bthe (wise|careful|smart|attentive|good) reader\b/i, 'condescension: "the wise reader"'],
  [/\bthe mistake to avoid\b/i, 'coaching: "the mistake to avoid"'],
  [/\bexactly the mistake\b/i, 'coaching: "exactly the mistake"'],
  [/\bit would be easy to\b/i, 'coaching: "it would be easy to"'],
  [/\byou might be tempted\b/i, 'coaching: presuming reader temptation'],
  // presuming the reader's reaction
  [/\bcute fact\b/i, 'presuming reaction: "cute fact"'],
  [/\bthe first reaction\b/i, 'presuming reaction: "the first reaction"'],
  // melodrama / hyperbole
  [/\bdemolish(es|ed|ing)?\b/i, 'melodrama: "demolish"'],
  [/\bunkillable\b/i, 'melodrama: "unkillable"'],
  [/\bran wild\b/i, 'hyperbole: "ran wild"'],
  [/\blike a thunderclap\b/i, 'hyperbole: "like a thunderclap"'],
  [/\bthunderclap\b/i, 'hyperbole: "thunderclap"'],
  [/\btook the world by storm\b/i, 'hyperbole: "took the world by storm"'],
  [/\bswallowed the (future|world)\b/i, 'hyperbole: "swallowed the future"'],
  // presuming the reader already knows
  [/\bever(yone|ybody) knows\b/i, 'presuming knowledge: "everyone knows"'],
  // presuming/managing the reader's judgment of the subject
  [/\breason to think less of\b/i, 'presuming judgment: "no reason to think less of"'],
  // editorializing aesthetic verdicts
  [/\bcharming\b/i, 'editorializing: "charming"'],
  // figurative/cute turns that should be said plainly
  [/\btripping over\b/i, 'cute figure: "tripping over"'],
  [/\bwas busy\b/i, 'personification: "was busy"'],
  [/\bcartoon\b/i, 'cute figure: "cartoon"'],
  [/\bcloser to the ground\b/i, 'figurative: "closer to the ground"'],
  [/\bridden on\b/i, 'figurative: "ridden on"'],
  [/\bcomes wrapped in\b|wrapped in a slogan/i, 'figurative: "wrapped in (a slogan)"'],
  [/\bin the neighbou?rhood of\b/i, 'odd register: "in the neighborhood of"'],
  [/\bturns on\b/i, 'overused: "turns on"'],
  // odd register
  [/\bcash(ed)? (it )?out\b/i, 'odd register: "cash out"'],
  // self-reference to the artifact
  [/\bthis read\b/i, 'self-reference: "this read"'],
  // second person in narration
  [/\byou\b/i, 'second person: "you"'],
  [/\byour\b/i, 'second person: "your"'],
  // gratuitous bold in prose (the user questioned ALL bolding)
  [/\*\*/, 'gratuitous bold (**)'],
]

// Pull reader-facing strings (rough: any "..." string value on a content line). We scan
// the whole file text line by line but skip the comment header and import lines.
function scanFile(path) {
  const lines = readFileSync(path, 'utf8').split('\n')
  const hits = []
  let inEpigraphAttr = false
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/^\s*\/\//.test(line) || /^import /.test(line)) continue
    // skip epigraph quote text + attribution (verified quotes may legitimately contain anything)
    const isEpigraph = /"(text|attribution)":/.test(line)
    const isAlt = /"alt":/.test(line) // presentational, not prose
    if (isEpigraph || isAlt) continue
    // blank out inline verified quotes (\"...\") so quoted source text is exempt —
    // we never rewrite a quotation, so it must not trip the rules (e.g. "You cannot
    // step twice into the same river"). Report the original snippet, lint the scrub.
    const scrub = line.replace(/\\"[^"]*?\\"/g, '\\"\\"')
    for (const [re, label] of RULES) {
      const m = scrub.match(re)
      if (m) {
        // ignore matches inside an inline quoted passage \"...\" within a "p" (verified quote)
        hits.push({ line: i + 1, label, snippet: line.trim().slice(0, 130) })
      }
    }
  }
  return hits
}

const strict = process.argv.includes('--strict')
let total = 0
const byFile = []
for (const root of ROOTS) {
  let files = []
  try { files = readdirSync(root).filter(f => f.endsWith('.ts') && f !== 'index.ts') } catch { continue }
  for (const f of files) {
    const hits = scanFile(join(root, f))
    if (hits.length) { byFile.push([join(root, f), hits]); total += hits.length }
  }
}

byFile.sort((a, b) => b[1].length - a[1].length)
for (const [path, hits] of byFile) {
  console.log(`\n${path}  (${hits.length})`)
  for (const h of hits) console.log(`  L${h.line}  [${h.label}]  ${h.snippet}`)
}
console.log(`\n${total} voice hits across ${byFile.length} files.`)
if (strict && total > 0) process.exit(1)
