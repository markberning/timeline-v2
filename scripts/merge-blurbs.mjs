// Merge authored definitions into the glossary source (backlog #1 Phase 2).
// For each blurb-pending entry (wikiSlug:"") match audits/blurb-done/<civ>.json
// by key "<ch>␟<matchText>" and set entry.definition. Reports coverage gaps.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const SEP = '␟'
let set = 0, gaps = [], unused = []

for (const df of readdirSync(join(ROOT, 'audits', 'blurb-done')).filter(f => f.endsWith('.json'))) {
  const civ = df.replace('.json', '')
  const done = JSON.parse(readFileSync(join(ROOT, 'audits', 'blurb-done', df), 'utf8'))
  const gp = join(ROOT, 'content', `.glossary-links-${civ}.json`)
  if (!existsSync(gp)) { console.log(`?? no glossary file for ${civ}`); continue }
  const g = JSON.parse(readFileSync(gp, 'utf8'))
  const usedKeys = new Set()
  for (const [ch, arr] of Object.entries(g)) {
    for (const e of arr) {
      if (e && e.wikiSlug === '' && !(e.definition && e.definition.trim())) {
        const key = `${ch}${SEP}${e.matchText}`
        if (Object.prototype.hasOwnProperty.call(done, key) && done[key] && done[key].trim()) {
          e.definition = done[key].trim(); set++; usedKeys.add(key)
        } else gaps.push(`${civ} :: ${key}`)
      }
    }
  }
  for (const k of Object.keys(done)) if (!usedKeys.has(k)) unused.push(`${civ} :: ${k}`)
  writeFileSync(gp, JSON.stringify(g, null, 2) + '\n')
}

console.log(`merged ${set} definitions`)
if (gaps.length) { console.log(`\nUNFILLED blurb-pending (${gaps.length}):`); gaps.forEach(x => console.log('  ' + x)) }
if (unused.length) { console.log(`\nUNUSED blurb-done keys (${unused.length}):`); unused.forEach(x => console.log('  ' + x)) }
if (!gaps.length && !unused.length) console.log('full coverage — every blurb-pending entry got a definition, no orphan keys')
