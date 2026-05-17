// Central validation + canonicalization of subagent raw decisions
// (backlog #1 Phase 2). The safety net: subagents judged SUBJECT; this step
// independently verifies every chosen title is a LIVE Wikipedia page and
// stores Wikipedia's own canonical slug encoding. Any title that does not
// resolve live -> forced DROP (null). Single rate-limited process (never
// parallelize Wikipedia I/O).
//
// in:  audits/slug-decisions-raw/<civ>.json  { decisions:{slug:Title|null}, _conflicts:[] }
// out: audits/slug-decisions/<civ>.json       { slug: canonicalSlug | null }
//      audits/slug-decisions-finalize-report.json

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const RAW = join(ROOT, 'audits', 'slug-decisions-raw')
const OUT = join(ROOT, 'audits', 'slug-decisions')
const UA = 'stuffhappened-timeline-v2-deadslug-resolver/1.0 (https://stuffhappened.com; mebernin@gmail.com)'
const sleep = ms => new Promise(r => setTimeout(r, ms))

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

// title may arrive as "A title", "A_title", or percent-encoded; normalize to a
// plain query title for the API.
const toQuery = t => { let s = t; try { s = decodeURIComponent(t) } catch {} return s.replace(/_/g, ' ').trim() }

const files = readdirSync(RAW).filter(f => f.endsWith('.json'))
const raw = {}
const titles = new Set()
for (const f of files) {
  const civ = f.replace('.json', '')
  const j = JSON.parse(readFileSync(join(RAW, f), 'utf8'))
  raw[civ] = j
  for (const v of Object.values(j.decisions || {})) if (v) titles.add(toQuery(v))
}
const titleList = [...titles]
console.log(`finalize: ${files.length} civs, ${titleList.length} unique chosen titles to validate`)

// batch-validate -> Map queryTitle(lc) -> canonicalSlug
const canon = new Map()
for (let i = 0; i < titleList.length; i += 50) {
  const batch = titleList.slice(i, i + 50)
  const d = await jget({ action: 'query', titles: batch.join('|'), prop: 'info', inprop: 'url', redirects: '1' })
  if (!d) continue
  const q = d.query || {}
  const fwd = new Map()
  for (const n of q.normalized || []) fwd.set(n.from.toLowerCase(), n.to.toLowerCase())
  for (const rd of q.redirects || []) fwd.set(rd.from.toLowerCase(), rd.to.toLowerCase())
  const byTitle = new Map()
  for (const p of q.pages || []) byTitle.set((p.title || '').toLowerCase(), p)
  for (const t of batch) {
    let k = t.toLowerCase()
    for (let h = 0; h < 4 && fwd.has(k); h++) k = fwd.get(k)
    const pg = byTitle.get(k) || byTitle.get(t.toLowerCase())
    if (pg && !pg.missing && pg.canonicalurl) {
      const m = pg.canonicalurl.match(/\/wiki\/(.+)$/)
      if (m) canon.set(t.toLowerCase(), m[1])
    }
  }
  console.log(`  validated ${Math.min(i + 50, titleList.length)}/${titleList.length}`)
}

// build final per-civ slug maps
let retarget = 0, drop = 0, forcedDrop = 0
const failedTitles = new Set()
for (const [civ, j] of Object.entries(raw)) {
  const out = {}
  for (const [slug, title] of Object.entries(j.decisions || {})) {
    if (title == null) { out[slug] = null; drop++; continue }
    const c = canon.get(toQuery(title).toLowerCase())
    if (c && c !== slug) { out[slug] = c; retarget++ }
    else { out[slug] = null; forcedDrop++; if (!c) failedTitles.add(title) }
  }
  writeFileSync(join(OUT, `${civ}.json`), JSON.stringify(out, null, 2) + '\n')
}

const report = {
  generated: new Date().toISOString(),
  civs: files.length,
  uniqueTitles: titleList.length,
  retarget, dropFromAgents: drop, forcedDropFailedValidation: forcedDrop,
  failedTitles: [...failedTitles].sort(),
}
writeFileSync(join(ROOT, 'audits', 'slug-decisions-finalize-report.json'), JSON.stringify(report, null, 2) + '\n')
console.log(`\nretarget(valid) ${retarget} · agent-DROP ${drop} · forced-DROP(failed live) ${forcedDrop}`)
console.log(`failed titles (-> DROP): ${failedTitles.size}`)
console.log([...failedTitles].slice(0, 25).join(' | '))
