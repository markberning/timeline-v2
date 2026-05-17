// Deterministic dead-wikiSlug resolver (backlog #1, Phase 1).
//
// API-frugal + rate-respectful (Wikipedia 429s aggressive callers):
//   Pass A — batch-probe the parenthetical-stripped base title for all dead
//            slugs, 50 titles/call (~11 calls). Captures the big
//            wrong-disambiguator / encoding-normalization class almost free.
//   Pass B — for the Pass-A residue only: one list=search per slug, serial
//            at <=1 req/sec, then batch-revalidate the strict candidates.
//
// STRICT gate throughout: accept a title only if its diacritic-folded,
// parenthetical-stripped normal form is EXACTLY the dead slug's, AND the
// title re-validates live (canonical page, not "missing"). The stored slug is
// taken from Wikipedia's own canonicalurl (guaranteed-valid encoding). Each
// applied fix therefore cannot introduce a NEW dead link. Full old->new map
// in audits/dead-slugs-resolution-2026-05-17.json; every edit is in git.

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const WORKLIST = join(ROOT, 'audits', 'dead-slugs-2026-05-17.txt')
const REPORT = join(ROOT, 'audits', 'dead-slugs-resolution-2026-05-17.json')
const CONTENT = join(ROOT, 'content')
const UA = 'stuffhappened-timeline-v2-deadslug-resolver/1.0 (https://stuffhappened.com; mebernin@gmail.com)'
const API = 'https://en.wikipedia.org/w/api.php'

const sleep = ms => new Promise(r => setTimeout(r, ms))
const decode = s => { try { return decodeURIComponent(s.replace(/_/g, ' ')) } catch { return s.replace(/_/g, ' ') } }
const stripParen = s => s.replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim()
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/\s*\([^)]*\)\s*/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim()

// global serial rate limiter: >= 1.1s between ANY two requests
let chain = Promise.resolve()
function jget(params) {
  const run = async () => {
    const url = `${API}?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`
    for (let a = 0; a < 6; a++) {
      try {
        const r = await fetch(url, { headers: { 'User-Agent': UA } })
        if (r.status === 429 || r.status === 503) {
          const ra = parseInt(r.headers.get('retry-after') || '', 10)
          await sleep((Number.isFinite(ra) ? ra * 1000 : 0) || Math.min(60000, 5000 * 2 ** a))
          continue
        }
        if (r.ok) return await r.json()
      } catch { /* retry */ }
      await sleep(3000 * (a + 1))
    }
    return null
  }
  const p = chain.then(run)
  chain = p.then(() => sleep(1100), () => sleep(1100))
  return p
}

// formatversion=2: pages is an array; follow normalized + redirects to map a
// requested title -> its final page object.
function indexPages(d) {
  const q = d?.query || {}
  const fwd = new Map() // requested(lc) -> final title(lc)
  for (const n of q.normalized || []) fwd.set(n.from.toLowerCase(), n.to.toLowerCase())
  for (const rd of q.redirects || []) fwd.set(rd.from.toLowerCase(), rd.to.toLowerCase())
  const byTitle = new Map()
  for (const p of q.pages || []) byTitle.set((p.title || '').toLowerCase(), p)
  return req => {
    let t = req.toLowerCase()
    for (let i = 0; i < 4 && fwd.has(t); i++) t = fwd.get(t)
    return byTitle.get(t) || byTitle.get(req.toLowerCase()) || null
  }
}
const slugOf = page => {
  const m = (page?.canonicalurl || '').match(/\/wiki\/(.+)$/)
  return m ? m[1] : null
}

// batch-validate titles (50/call); returns Map title -> {slug} for live pages
async function validateTitles(titles) {
  const out = new Map()
  for (let i = 0; i < titles.length; i += 50) {
    const batch = titles.slice(i, i + 50)
    const d = await jget({ action: 'query', titles: batch.join('|'), prop: 'info', inprop: 'url', redirects: '1' })
    if (!d) continue
    const lookup = indexPages(d)
    for (const t of batch) {
      const pg = lookup(t)
      if (pg && !pg.missing && pg.canonicalurl) { const s = slugOf(pg); if (s) out.set(t, s) }
    }
  }
  return out
}

// ---- load ----
const deadSlugs = [...new Set(
  readFileSync(WORKLIST, 'utf8').trim().split('\n').map(l => l.split('\t')[2]).filter(Boolean)
)]
const meta = new Map(deadSlugs.map(ds => {
  const q = decode(ds)
  return [ds, { q, nq: norm(q), base: stripParen(q) }]
}))
console.log(`resolving ${deadSlugs.length} unique dead slugs (strict gate, rate-limited)`)

const resolved = {}
let residue = [...deadSlugs]

// ---- Pass A: batched base-title probe ----
const baseCandidates = [...new Set(
  deadSlugs.map(ds => meta.get(ds).base).filter(b => b && norm(b))
)]
console.log(`Pass A: batch-probing ${baseCandidates.length} base titles...`)
const baseValid = await validateTitles(baseCandidates)
{
  const still = []
  for (const ds of residue) {
    const { nq, base } = meta.get(ds)
    const s = baseValid.get(base)
    if (s && s !== ds && norm(decode(s)) === nq) resolved[ds] = s
    else still.push(ds)
  }
  residue = still
}
console.log(`Pass A done: resolved ${Object.keys(resolved).length}, residue ${residue.length}`)

// ---- Pass B: one search per residue slug, then batch-revalidate ----
console.log(`Pass B: searching ${residue.length} residue slugs (serial)...`)
const candByDead = new Map()  // deadSlug -> [candidate titles, strict-matched]
let n = 0
for (const ds of residue) {
  const { q, nq, base } = meta.get(ds)
  const d = await jget({ action: 'query', list: 'search', srsearch: base || q, srlimit: '5' })
  const hits = d?.query?.search ?? []
  const ok = [...new Set(hits.map(h => h.title).filter(t => norm(t) === nq))]
  if (ok.length) candByDead.set(ds, ok)
  if (++n % 25 === 0 || n === residue.length) console.log(`  searched ${n}/${residue.length}`)
}
const allCands = [...new Set([...candByDead.values()].flat())]
console.log(`Pass B: batch-revalidating ${allCands.length} candidate titles...`)
const candValid = await validateTitles(allCands)
{
  const still = []
  for (const ds of residue) {
    const cands = candByDead.get(ds) || []
    let hit = null
    for (const c of cands) { const s = candValid.get(c); if (s && s !== ds) { hit = s; break } }
    if (hit) resolved[ds] = hit
    else still.push(ds)
  }
  residue = still
}
console.log(`Pass B done: resolved ${Object.keys(resolved).length} total, residue ${residue.length}`)

// ---- apply to every .glossary-links-*.json ----
const glossFiles = readdirSync(CONTENT).filter(f => f.startsWith('.glossary-links-') && f.endsWith('.json'))
let edits = 0
const touched = []
for (const f of glossFiles) {
  const p = join(CONTENT, f)
  const data = JSON.parse(readFileSync(p, 'utf8'))
  let c = 0
  for (const arr of Object.values(data)) {
    if (!Array.isArray(arr)) continue
    for (const g of arr) {
      if (g && typeof g.wikiSlug === 'string' && resolved[g.wikiSlug]) { g.wikiSlug = resolved[g.wikiSlug]; c++ }
    }
  }
  if (c) { writeFileSync(p, JSON.stringify(data, null, 2) + '\n'); edits += c; touched.push(`${f} (${c})`) }
}

writeFileSync(REPORT, JSON.stringify({
  generated: new Date().toISOString(),
  dead: deadSlugs.length,
  resolvedCount: Object.keys(resolved).length,
  residueCount: residue.length,
  resolved,
  residue: residue.sort(),
  appliedRefs: edits,
  filesTouched: touched.sort(),
}, null, 2) + '\n')

console.log(`\nDONE. resolved ${Object.keys(resolved).length}/${deadSlugs.length} unique · residue ${residue.length}`)
console.log(`applied ${edits} glossary refs across ${touched.length} files`)
console.log(`report: ${REPORT}`)
