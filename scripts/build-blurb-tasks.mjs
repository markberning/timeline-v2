// Build authoring packets for blurb-pending glossary entries (backlog #1
// Phase 2). For every glossary entry with wikiSlug:"" (awaiting an authored
// house-voice definition), collect term + matchText + chapter + type + the
// narrative sentence that uses it (factual grounding for the author).
// Writes audits/blurb-tasks/<civ>.json = [{key,ch,term,matchText,type,context}]
// key = "<ch>␟<matchText>" (stable per blurb-pending entry).

import { readFileSync, writeFileSync, readdirSync, mkdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'audits', 'blurb-tasks')
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })

const SEP = '␟'
const sentenceAround = (text, phrase) => {
  const i = text.indexOf(phrase)
  if (i < 0) return null
  // expand to sentence-ish bounds around the first occurrence
  let s = i, e = i + phrase.length
  while (s > 0 && !'.!?\n'.includes(text[s - 1]) && i - s < 320) s--
  while (e < text.length && !'.!?\n'.includes(text[e]) && e - i < 320) e++
  return text.slice(s, e + 1).replace(/\s+/g, ' ').trim()
}

let civs = 0, tasks = 0
for (const gf of readdirSync(join(ROOT, 'content')).filter(f => f.startsWith('.glossary-links-') && f.endsWith('.json'))) {
  const civ = gf.replace('.glossary-links-', '').replace('.json', '')
  const g = JSON.parse(readFileSync(join(ROOT, 'content', gf), 'utf8'))
  const mdPath = join(ROOT, 'narratives', `${civ}.md`)
  const md = existsSync(mdPath) ? readFileSync(mdPath, 'utf8') : ''
  const rows = []
  for (const [ch, arr] of Object.entries(g)) {
    for (const e of arr) {
      if (e && e.wikiSlug === '' && !(e.definition && e.definition.trim())) {
        rows.push({
          key: `${ch}${SEP}${e.matchText}`,
          ch, term: e.term, matchText: e.matchText, type: e.type,
          context: sentenceAround(md, e.matchText) || null,
        })
      }
    }
  }
  if (rows.length) {
    writeFileSync(join(OUT, `${civ}.json`), JSON.stringify(rows, null, 2) + '\n')
    civs++; tasks += rows.length
  }
}
console.log(`blurb tasks: ${tasks} entries across ${civs} civs -> audits/blurb-tasks/`)
