// Recovery pass (backlog #1 Phase 2). The finalizer force-DROPs any subagent
// title that doesn't resolve live — but many failures are the RIGHT subject
// with a slightly-off title string (missing diacritic, over-specific
// parenthetical, minor phrasing). Re-search each failed title (seeded by the
// agent's INTENDED title => high precision), accept only a strict
// parenthetical/diacritic-folded match, re-validate canonical, and patch the
// final per-civ decisions. Unrecovered stay DROP. Single rate-limited process.

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const RAW = join(ROOT, 'audits', 'slug-decisions-raw')
const OUT = join(ROOT, 'audits', 'slug-decisions')
const UA = 'stuffhappened-timeline-v2-deadslug-resolver/1.0 (https://stuffhappened.com; mebernin@gmail.com)'
const sleep = ms => new Promise(r => setTimeout(r, ms))
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/\s*\([^)]*\)\s*/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()
const toQuery = t => { let s = t; try { s = decodeURIComponent(t) } catch {} return s.replace(/_/g, ' ').trim() }

let chain = Promise.resolve()
function jget(params) {
  const run = async () => {
    const url = `https://en.wikipedia.org/w/api.php?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`
    for (let a = 0; a < 6; a++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': UA } })
        if (r.status === 429 || r.status === 503) { await sleep(8000 * (a + 1)); continue }
        if (r.ok) return await r.json()
      } catch {}
      await sleep(3000 * (a + 1))
    }
    return null
  }
  const p = chain.then(run); chain = p.then(() => sleep(1200), () => sleep(1200)); return p
}

const report = JSON.parse(readFileSync(join(ROOT, 'audits', 'slug-decisions-finalize-report.json'), 'utf8'))
const failed = report.failedTitles || []

// map failedTitle -> [{civ, slug}]
const want = new Map()
for (const f of readdirSync(RAW).filter(f => f.endsWith('.json'))) {
  const civ = f.replace('.json', '')
  const j = JSON.parse(readFileSync(join(RAW, f), 'utf8'))
  for (const [slug, title] of Object.entries(j.decisions || {})) {
    if (title && failed.includes(title)) {
      if (!want.has(title)) want.set(title, [])
      want.get(title).push({ civ, slug })
    }
  }
}

console.log(`recovery: ${failed.length} failed titles`)
const recovered = {}   // failedTitle -> canonicalSlug
for (const ft of failed) {
  const nq = norm(toQuery(ft))
  const sd = await jget({ action: 'query', list: 'search', srsearch: toQuery(ft), srlimit: '5' })
  const hits = (sd?.query?.search ?? []).map(h => h.title)
  const pick = hits.find(h => norm(h) === nq)
  if (!pick) continue
  const vd = await jget({ action: 'query', titles: pick, prop: 'info', inprop: 'url', redirects: '1' })
  const pg = Object.values(vd?.query?.pages ?? {})[0]
  if (pg && !pg.missing && pg.canonicalurl) {
    const m = pg.canonicalurl.match(/\/wiki\/(.+)$/)
    if (m) recovered[ft] = m[1]
  }
}

// patch final per-civ decisions: null -> recovered canonical where applicable
let patched = 0
const byCiv = {}
for (const [ft, slugRefs] of want) {
  const canonSlug = recovered[ft]
  if (!canonSlug) continue
  for (const { civ, slug } of slugRefs) (byCiv[civ] ||= []).push([slug, canonSlug])
}
for (const [civ, pairs] of Object.entries(byCiv)) {
  const p = join(OUT, `${civ}.json`)
  const dec = JSON.parse(readFileSync(p, 'utf8'))
  for (const [slug, canonSlug] of pairs) {
    if (slug in dec && dec[slug] == null && canonSlug !== slug) { dec[slug] = canonSlug; patched++ }
  }
  writeFileSync(p, JSON.stringify(dec, null, 2) + '\n')
}

console.log(`recovered ${Object.keys(recovered).length}/${failed.length} titles -> patched ${patched} decisions`)
console.log('still DROP:', failed.filter(f => !recovered[f]).join(' | '))
