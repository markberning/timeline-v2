// Inline-triage prefetch (backlog #1 Phase 2).
//
// PRINT mode:  node scripts/triage-civ-slugs.mjs <civId>
//   lists each still-dead glossary slug + matchText + top Wikipedia hits.
//
// WRITE mode:  node scripts/triage-civ-slugs.mjs --write <all|civ1,civ2,...>
//   writes audits/slug-triage/<civ>.json = [{ch,matchText,slug,hits:[{t,s}]}]
//   for every still-dead slug, so subagents can judge WITHOUT any network
//   calls (all Wikipedia I/O stays on this single rate-limited process).
//
// Serial + 1.3s spacing + 429 backoff. One process only — never parallelize
// the network side (that is exactly what trips Wikipedia's rate limiter).

import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const args = process.argv.slice(2)
const writeMode = args[0] === '--write'
const UA = 'stuffhappened-timeline-v2-deadslug-resolver/1.0 (https://stuffhappened.com; mebernin@gmail.com)'
const DONE = new Set(['polynesian-voyagers', 'teotihuacan', 'ottoman-empire'])
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

function deadRows(civ) {
  const g = JSON.parse(readFileSync(join(ROOT, 'content', `.glossary-links-${civ}.json`), 'utf8'))
  const rows = []
  for (const [ch, arr] of Object.entries(g))
    for (const e of arr) if (e && stillDead.has(e.wikiSlug)) rows.push({ ch, matchText: e.matchText, slug: e.wikiSlug })
  return rows
}

async function search(slug) {
  const d = await jget({ action: 'query', list: 'search', srsearch: strip(dec(slug)), srlimit: '5', srprop: 'snippet' })
  return (d?.query?.search ?? []).map(h => ({
    t: h.title, s: (h.snippet || '').replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/g, ' ').slice(0, 140)
  }))
}

if (writeMode) {
  const sel = args[1] || 'all'
  let civs
  if (sel === 'all') {
    civs = readdirSync(join(ROOT, 'content'))
      .filter(f => f.startsWith('.glossary-links-') && f.endsWith('.json'))
      .map(f => f.replace('.glossary-links-', '').replace('.json', ''))
      .filter(c => !DONE.has(c) && deadRows(c).length)
  } else civs = sel.split(',')
  const OUT = join(ROOT, 'audits', 'slug-triage')
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })
  console.log(`prefetch: ${civs.length} civs`)
  let ci = 0
  for (const civ of civs) {
    ci++
    const rows = deadRows(civ)
    const cache = new Map()
    for (const r of rows) {
      if (!cache.has(r.slug)) cache.set(r.slug, await search(r.slug))
      r.hits = cache.get(r.slug)
    }
    writeFileSync(join(OUT, `${civ}.json`), JSON.stringify(rows, null, 2) + '\n')
    console.log(`  [${ci}/${civs.length}] ${civ}: ${rows.length} rows`)
  }
  console.log('prefetch done')
} else {
  const civ = args[0]
  if (!civ) { console.error('usage: triage-civ-slugs.mjs <civId> | --write <all|csv>'); process.exit(1) }
  const rows = deadRows(civ)
  console.log(`\n# ${civ} — ${rows.length} still-dead\n`)
  const cache = new Map()
  for (const r of rows) {
    if (!cache.has(r.slug)) cache.set(r.slug, await search(r.slug))
    console.log(`ch${r.ch}  "${r.matchText}"   [dead: ${r.slug}]`)
    if (rep.needsReview[r.slug]) console.log(`   machine-hint (untrusted): ${rep.needsReview[r.slug]}`)
    cache.get(r.slug).forEach((h, i) => console.log(`   ${i + 1}. ${h.t}  —  ${h.s}`))
    console.log()
  }
}
