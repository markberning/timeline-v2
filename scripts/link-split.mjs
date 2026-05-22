#!/usr/bin/env node
/**
 * link-split.mjs — generate the per-chapter agent inputs + the per-civ brief for a
 * link-coverage sweep, from the link-suggest worksheet. Replaces the hand-typed
 * `node -e` chapter split + the copy-and-swap BRIEF.md that was redone every civ.
 *
 * Reads:
 *   audits/link-suggest/<tl>.json          (link-suggest output — the proposals)
 *   audits/link-suggest/<tl>.applied.json  (link-apply output — rows already auto-written; excluded)
 * Writes:
 *   /tmp/<tl>/in/ch{N}.json   — the rows each chapter's agent must resolve (NOT SKIP, NOT applied)
 *   /tmp/<tl>/out/            — empty dir for agents to write ch{N}.{glossary,cross,blurbs,waivers}.json
 *   /tmp/<tl>/BRIEF.md        — the hardened brief (civ id, self-CROSS name, own-name waiver, cross catalog)
 *
 * Usage: node scripts/link-split.mjs <tlId>
 */
import fs from 'fs'

const tl = process.argv[2]
if (!tl || tl.startsWith('--')) { console.error('usage: node scripts/link-split.mjs <tlId>'); process.exit(2) }

const suggestP = `audits/link-suggest/${tl}.json`
if (!fs.existsSync(suggestP)) { console.error(`no ${suggestP} — run: node scripts/link-suggest.mjs --tl=${tl}`); process.exit(2) }
const rows = JSON.parse(fs.readFileSync(suggestP, 'utf8'))

// rows already auto-written by link-apply (exclude from agent work)
const appliedP = `audits/link-suggest/${tl}.applied.json`
const applied = fs.existsSync(appliedP) ? JSON.parse(fs.readFileSync(appliedP, 'utf8')) : []
const appliedKey = new Set(applied.map(a => `${a.chapter}|${a.term}`))

// the corpus civ catalog (for "this reference is one of our civs → cross-link")
const civIds = fs.readdirSync('narratives').filter(f => f.endsWith('.md')).map(f => f.replace(/\.md$/, '')).sort()
const civName = tl.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')

const dir = `/tmp/${tl}`
fs.mkdirSync(`${dir}/in`, { recursive: true })
fs.mkdirSync(`${dir}/out`, { recursive: true })

// ── per-chapter inputs (everything that needs a human/agent decision) ────────
const byCh = new Map()
let total = 0
for (const r of rows) {
  if (r.decision === 'SKIP') continue                       // pre-approved non-link
  if (appliedKey.has(`${r.chapter}|${r.term}`)) continue    // already auto-written
  if (!byCh.has(r.chapter)) byCh.set(r.chapter, [])
  byCh.get(r.chapter).push({
    term: r.term, decision: r.decision, conf: r.conf,
    slug: r.slug, title: r.title, lead: r.lead,
    targetTl: r.targetTl, why: r.why, reason: r.reason, alts: r.alts,
  })
  total++
}

const chapters = [...byCh.keys()].sort((a, b) => a - b)
for (const ch of chapters) {
  fs.writeFileSync(`${dir}/in/ch${ch}.json`, JSON.stringify({ tl, chapter: ch, rows: byCh.get(ch) }, null, 2) + '\n')
}

// ── the brief ─────────────────────────────────────────────────────────────────
const tally = {}
for (const ch of chapters) for (const r of byCh.get(ch)) tally[r.decision] = (tally[r.decision] || 0) + 1

const brief = `# LINK-SWEEP BRIEF — ${tl} (${civName})

You are linking ONE chapter of a link-coverage sweep. Your input is \`/tmp/${tl}/in/ch{N}.json\`.
Write your output to \`/tmp/${tl}/out/ch{N}.glossary.json\`, \`ch{N}.cross.json\`,
\`ch{N}.blurbs.json\`, \`ch{N}.waivers.json\` (omit a file if empty).

## The job
Every row in your input is a coverage gap that MUST become a link OR a documented
waiver. You may NOT skip a row outside the pre-approved waiver set below — skipping
real entities is the failure that this pipeline exists to prevent.

For each row, by \`decision\`:

- **REUSE** — a slug already born-verified in another civ is proposed. The lead
  sentence is in the row. **BORN-VERIFY: does that page's SUBJECT match what THIS
  chapter means?** Same-name-different-thing is the trap (Antioch the city vs the
  Principality; one "al-Mansur" vs another). conf \`CONFIRM-homonym\` = the corpus has
  MULTIPLE slugs for this term — read \`alts\` and pick the right one. If the lead
  fits → write a glossary link. If it's the wrong subject → find the correct page
  and born-verify it. If no good page → blurb.
- **CROSS** — names another of our civilizations (\`targetTl\`). If \`targetTl === ${tl}\`
  (a reference to THIS civ) you CANNOT cross-link to self → write a **glossary** link
  instead (or waive if it's the own-name, see below). Otherwise write a cross-link to
  the target with a short "Meanwhile in…" blurb and the right target chapter.
- **LINK-CANDIDATE** — a Wikipedia search hit + its lead. Born-verify the subject from
  the lead; if right, glossary-link it; if wrong, find the correct page or blurb.
- **NO-PAGE** — no confident page. Write an authored house-voice \`definition\` blurb
  (a glossary entry with \`definition\` and NO \`wikiSlug\`). A missing link beats a
  wrong link; an authored blurb beats a guessed slug.

## matchText rule (hard)
\`matchText\` = the **shortest verbatim plain substring of THIS chapter's body** that
IS the term — the tight proper noun/concept, never a clause. ≤6 words, no comma, no
leading/trailing punctuation. **Bold IS linkable** — if the only occurrence is inside
\`**Term**\`, target \`Term\` (not the asterisks); never waive a term "bold-only". Use the
EXACT case as it appears in the body (the parser matches case-sensitively).

## The ONLY allowed waivers (everything else must be a link)
Put waived terms in \`ch{N}.waivers.json\` (a JSON array of the exact term strings):
- **own name** — the civilization's OWN name string only: "${civName}", "${civName.split(' ')[0]}",
  and obvious adjectival forms. A named ruler/person/people/place/institution is NEVER
  the own-name waiver — it is always a born-verified link.
- **modern-country locator** — a present-day country/region used purely to locate
  (modern Iran, Central Asia).
- **already linked earlier in this same chapter** — the first use is linked; later
  bare repeats can be waived.
- **true universal / generic common noun** — king, city, river, empire (lowercase).
Benchmark: a clean civ ends with ~10–25 waivers, NOT 100+. Over-waiving = rejected.

## Our civ catalog (a reference to any of these = a CROSS-link, not a waiver)
${civIds.join(', ')}

## Output entry shapes
- glossary: \`{ "matchText": "...", "term": "...", "wikiSlug": "Page_Title" }\`
- glossary blurb (NO-PAGE): \`{ "matchText": "...", "term": "...", "definition": "house-voice 1–2 sentences" }\`
- cross: \`{ "matchText": "...", "targetTl": "other-civ", "targetChapter": N, "blurb": "Meanwhile in…" }\`
- waivers: \`["Exact Term String", ...]\`
`
fs.writeFileSync(`${dir}/BRIEF.md`, brief)

console.log(`link-split ${tl}: ${total} agent rows across ${chapters.length} chapter(s)  ${JSON.stringify(tally)}`)
console.log(`  excluded ${applied.length} auto-applied + all SKIP rows`)
console.log(`  → ${dir}/in/ch{${chapters.join(',')}}.json`)
console.log(`  → ${dir}/out/  (agents write here)`)
console.log(`  → ${dir}/BRIEF.md`)
console.log(`\nLaunch ≤5 LINK agents (one per chapter, 2 waves if >5 chapters), each given BRIEF.md + its in/ch{N}.json.`)
console.log(`Then: node scripts/sweep-merge.mjs ${tl} ${dir}/out  &&  node scripts/sweep-verify.mjs ${tl} --fix-drops`)
