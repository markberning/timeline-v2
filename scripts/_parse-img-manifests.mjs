// Parse the 6 new war-theme image manifests (audits/war-pipeline/<slug>-images.md)
// into structured figures JSON the theme generator consumes, and VALIDATE that every
// figure's placement heading resolves to a real `## ` heading in <slug>-final.md.
// Manifest formats vary (### / ## FIGURE entry delimiters; **placement:**/**place:**;
// headings bold and/or quoted and/or `## `-prefixed) so matching is normalized.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const WP = `${ROOT}/audits/war-pipeline`
const SLUGS = ['prisons', 'guerrilla-war', 'war-within-north', 'assassination', 'reckoning']

const field = (block, names) => {
  for (const name of [].concat(names)) {
    const m = block.match(new RegExp(`\\*\\*${name}:\\*\\*\\s*([^\\n]+?)\\s*$`, 'im'))
    if (m) return m[1].replace(/`/g, '').trim() // drop all backtick wrappers
  }
  return null
}
// normalize a heading for fuzzy matching: canonicalize quotes, drop leading ##/quotes,
// trailing quotes, *, collapse ws, lowercase
const norm = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/[*]/g, '')
  .replace(/^[#"'\s]+/, '').replace(/["'\s]+$/, '').replace(/\s+/g, ' ').trim().toLowerCase()

function headingsOf(slug) {
  const md = readFileSync(`${WP}/${slug}-final.md`, 'utf8')
  const hs = md.split('\n').filter(l => /^##\s+/.test(l) && !/^##\s+(MEANWHILE|FACT LEDGER)/i.test(l))
    .map(l => l.replace(/^##\s+/, '').trim())
  const map = new Map(hs.map(h => [norm(h), h]))
  return { hs, map }
}

// return ALL candidate heading strings found in a placement line (bold groups,
// double-quoted groups, and the bare text after the after/before keyword)
function headingCandidates(raw) {
  const c = []
  for (const m of raw.matchAll(/\*\*(.+?)\*\*/g)) c.push(m[1])
  for (const m of raw.matchAll(/["“”]([^"“”]+)["“”]/g)) c.push(m[1])
  const bare = raw.match(/^(?:after|before)\s+(.+?)(?:\s*\(.*)?$/i)
  if (bare) c.push(bare[1])
  return c
}

let totalMismatch = 0
for (const slug of SLUGS) {
  const md = readFileSync(`${WP}/${slug}-images.md`, 'utf8')
  const { hs, map } = headingsOf(slug)
  // split into blocks on any heading line; keep blocks that carry a filename
  const blocks = md.split(/\n#{2,4}\s+/).filter(b => /\*\*filename:\*\*/i.test(b))
  let hero = null
  const figs = []
  const miss = []
  for (const b of blocks) {
    const file = field(b, 'filename')
    if (!file) continue
    const caption = field(b, 'caption')
    const credit = field(b, 'credit')
    const orientation = field(b, ['orientation'])
    const rawPlace = field(b, ['placement', 'place']) || ''
    const isHero = /^\W*hero\b/i.test(rawPlace.replace(/\*/g, '')) || /(^|\b)hero\b/i.test((b.split('\n')[0] || ''))
    if (isHero && !hero) { hero = { file, caption, credit, orientation }; continue }
    const type = /\bbefore\b/i.test(rawPlace) ? 'before' : 'after'
    let actual = null
    for (const cand of headingCandidates(rawPlace)) { actual = map.get(norm(cand)); if (actual) break }
    // "within figure N" / "still within" — inherit the previous placed figure's heading
    if (!actual && /\b(within|figure)\b/i.test(rawPlace) && figs.length) actual = figs[figs.length - 1].heading
    if (!actual) { miss.push(`${file}: (placement="${rawPlace}")`); continue }
    figs.push({ file, caption, credit, orientation, type, heading: actual })
  }
  totalMismatch += miss.length
  writeFileSync(`${WP}/${slug}-figures.json`, JSON.stringify({ slug, hero, figs }, null, 2))
  console.log(`${slug}: hero=${hero ? '✓' : 'NONE'}, ${figs.length} figs placed, ${miss.length} unresolved`)
  for (const m of miss) console.log('   ✗ ' + m)
  if (miss.length) hs.forEach(h => console.log('       · ' + h))
}
console.log(`\nTOTAL unresolved placements: ${totalMismatch}`)
