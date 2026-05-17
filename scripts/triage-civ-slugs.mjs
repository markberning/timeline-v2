// Inline-triage aid (backlog #1 Phase 2). For ONE civ, lists every still-dead
// glossary slug with its matchText/chapter context + the top Wikipedia search
// hits (title + snippet) so a human can pick the subject-correct article or
// decide to drop. Read-only; serial + rate-limited. Decisions are applied
// separately via apply-slug-decisions.mjs.
//
// usage: node scripts/triage-civ-slugs.mjs <civId>

import { readFileSync } from 'fs'
import { join } from 'path'

const civ = process.argv[2]
if (!civ) { console.error('usage: node scripts/triage-civ-slugs.mjs <civId>'); process.exit(1) }
const ROOT = process.cwd()
const UA = 'stuffhappened-timeline-v2-deadslug-resolver/1.0 (https://stuffhappened.com; mebernin@gmail.com)'
const sleep = ms => new Promise(r => setTimeout(r, ms))
const dec = s => { try { return decodeURIComponent(s.replace(/_/g, ' ')) } catch { return s.replace(/_/g, ' ') } }
const strip = s => s.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim()

let chain = Promise.resolve()
function jget(params) {
  const run = async () => {
    const url = `https://en.wikipedia.org/w/api.php?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`
    for (let a = 0; a < 5; a++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': UA } })
        if (r.status === 429 || r.status === 503) { await sleep(8000 * (a + 1)); continue }
        if (r.ok) return await r.json()
      } catch {}
      await sleep(3000 * (a + 1))
    }
    return null
  }
  const p = chain.then(run); chain = p.then(() => sleep(1300), () => sleep(1300)); return p
}

const rep = JSON.parse(readFileSync(join(ROOT, 'audits', 'dead-slugs-resolution-2026-05-17.json'), 'utf8'))
const stillDead = new Set([...Object.keys(rep.needsReview), ...rep.residue])
const gloss = JSON.parse(readFileSync(join(ROOT, 'content', `.glossary-links-${civ}.json`), 'utf8'))

const rows = []
for (const [ch, arr] of Object.entries(gloss))
  for (const e of arr) if (stillDead.has(e.wikiSlug)) rows.push({ ch, matchText: e.matchText, slug: e.wikiSlug })

console.log(`\n# ${civ} — ${rows.length} still-dead glossary slugs\n`)
for (const r of rows) {
  const base = strip(dec(r.slug))
  const d = await jget({ action: 'query', list: 'search', srsearch: base, srlimit: '5', srprop: 'snippet' })
  const hits = (d?.query?.search ?? []).map(h => ({
    t: h.title, s: (h.snippet || '').replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').slice(0, 110)
  }))
  console.log(`ch${r.ch}  "${r.matchText}"   [dead: ${r.slug}]`)
  if (rep.needsReview[r.slug]) console.log(`   machine-hint (untrusted): ${rep.needsReview[r.slug]}`)
  hits.forEach((h, i) => console.log(`   ${i + 1}. ${h.t}  —  ${h.s}`))
  if (!hits.length) console.log(`   (no search hits)`)
  console.log()
}
