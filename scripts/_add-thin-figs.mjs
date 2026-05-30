// One-off: integrate the additional verified PD figures (audits/war-pipeline/
// <slug>-images-add.md) into the three hand-authored thin OTBF pages, and swap the
// landscape hero where the manifest supplies one. These three pages are NOT generated
// by a live builder (freedom-struggle's _build-*.mjs is a stale one-off that would wipe
// hand-added figs), so we edit the page.tsx in place. Inserts each fig right after its
// placement heading's `{ h: ... }` block; groups multiple figs under one heading.
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SLUGS = ['slavery-cotton', 'freedom-struggle', 'emancipation']
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
// fold smart quotes/dashes, strip markdown **, collapse ws, lowercase
const norm = (s) => s.replace(/[’‘]/g, "'").replace(/[“”]/g, '"').replace(/\*/g, '')
  .replace(/[—–]/g, '-').replace(/\s+/g, ' ').trim().toLowerCase()

const field = (block, name) => {
  const m = block.match(new RegExp(`\\*\\*${name}:\\*\\*\\s*(.+?)\\s*$`, 'im'))
  return m ? m[1].replace(/^`|`$/g, '').trim() : null
}

for (const slug of SLUGS) {
  const md = readFileSync(`${ROOT}/audits/war-pipeline/${slug}-images-add.md`, 'utf8')
  const pagePath = `${ROOT}/src/app/war-civil-war/off-the-battlefield/${slug}/page.tsx`
  let page = readFileSync(pagePath, 'utf8')

  const blocks = md.split(/\n##\s+/).filter(b => /\*\*filename:\*\*/i.test(b))
  let hero = null
  const byHeading = new Map() // normHeading -> [figLine, ...]
  for (const b of blocks) {
    const file = field(b, 'filename'); if (!file) continue
    const caption = field(b, 'caption') || ''
    const credit = field(b, 'credit') || ''
    const rawPlace = (field(b, 'placement') || '').replace(/\*/g, '')
    if (/^hero\b/i.test(rawPlace)) { hero = { file, credit }; continue }
    const hm = (field(b, 'placement') || '').match(/after\s*\*\*(.+?)\*\*/i) || rawPlace.match(/after\s+(.+)/i)
    const heading = hm ? hm[1] : null
    if (!heading) { console.log(`  ${slug}: ✗ no heading for ${file} (placement="${rawPlace}")`); continue }
    const line = `      { fig: '/war-img/${file}', cap: \`${esc(caption)}\`, credit: \`${esc(credit)}\` },`
    const k = norm(heading)
    ;(byHeading.get(k) || byHeading.set(k, []).get(k)).push(line)
  }

  // hero swap
  if (hero) {
    page = page.replace(/heroImage="[^"]*"/, `heroImage="/war-img/${hero.file}"`)
    page = page.replace(/heroCredit=(?:"[^"]*"|\{`[^`]*`\})/, `heroCredit={\`${esc(hero.credit)}\`}`)
  }

  // insert figs after matching heading lines
  const lines = page.split('\n')
  const out = []
  let placed = 0
  const used = new Set()
  for (const ln of lines) {
    out.push(ln)
    const hm = ln.match(/\{\s*h:\s*(?:'([^']*)'|`([^`]*)`)/)
    if (hm) {
      const k = norm(hm[1] ?? hm[2] ?? '')
      if (byHeading.has(k) && !used.has(k)) { for (const fl of byHeading.get(k)) { out.push(fl); placed++ }; used.add(k) }
    }
  }
  writeFileSync(pagePath, out.join('\n'))
  const missed = [...byHeading.keys()].filter(k => !used.has(k))
  console.log(`${slug}: hero ${hero ? '✓ ' + hero.file : '— (kept)'}, ${placed} figs placed${missed.length ? ', UNMATCHED HEADINGS: ' + missed.join(' | ') : ''}`)
}
