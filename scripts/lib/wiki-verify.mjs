// wiki-verify.mjs — shared DETERMINISTIC Wikipedia page checker. NO LLM.
//
// Given a list of Wikipedia slugs, one batched MediaWiki action=query call
// resolves, per slug:
//   exists          — the title is a real article (not a 404 "missing")
//   title           — the final article title AFTER normalization + redirects
//   redirectedTo    — if the slug is a redirect, where it lands ('' if not)
//   disambiguation   — true if the page is a Wikipedia "did you mean…?" page
//   lead            — first ~240 plain-text chars of the lead (for the human
//                     subject-confirm at creation time + re-confirm diffs)
//   image           — the page's lead image filename ('' if none)
//   ok / reason     — ok=false (with reason) for dead / disambiguation, i.e.
//                     the cases that are ALWAYS wrong for a reader tap.
//
// This is the one place the project talks to Wikipedia for link correctness.
// Used by verify-links.mjs (creation time) and the deterministic gates
// (ship time). Subject-correctness ("is this the RIGHT page for this term")
// is a human/agent decision at creation; this module supplies the facts that
// decision needs and the mechanical floor the ship gate re-checks.
//
// Fail-closed: a network/parse error yields ok:false reason:'lookup failed'
// so a gate blocks rather than silently passing (re-run when the net is back;
// the result is otherwise fully deterministic).

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const UA = 'timeline-v2-wiki-verify/1.0 (https://stuffhappened.com)'
const API = 'https://en.wikipedia.org/w/api.php'
const CACHE_DEFAULT = join(process.cwd(), 'audits', '.wiki-verify-cache.json')

// Never throw: a single slug with broken percent-encoding must not poison its
// 19 batch-mates (decodeURIComponent throws "URI malformed"). Decode valid
// percent-runs, leave un-decodable ones literal so only the bad slug 404s.
const slugToTitle = (s) => {
  const u = String(s).replace(/_/g, ' ').trim()
  try { return decodeURIComponent(u) } catch { /* fall through */ }
  return u.replace(/(?:%[0-9A-Fa-f]{2})+/g, (seq) => { try { return decodeURIComponent(seq) } catch { return seq } })
}
const norm = (t) => t.replace(/\s+/g, ' ').trim().toLowerCase()

// One MediaWiki query for up to 20 titles: existence + redirects + normalize
// + disambiguation flag + lead extract + lead image. 20 = the extracts limit.
async function queryBatch(titles) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    titles: titles.join('|'),
    redirects: '1',
    prop: 'info|extracts|pageprops|pageimages',
    ppprop: 'disambiguation',
    exintro: '1',
    explaintext: '1',
    exlimit: '20',
    piprop: 'name',
    formatversion: '2',
  })
  const ac = new AbortController()
  const t = setTimeout(() => ac.abort(), 20000)
  try {
    const r = await fetch(`${API}?${params}`, { headers: { 'User-Agent': UA }, signal: ac.signal })
    if (!r.ok) throw new Error(`API ${r.status}`)
    return await r.json()
  } finally {
    clearTimeout(t)
  }
}

// Resolve each requested slug through normalization + redirect chains to the
// final page record. Returns Map<slug, record>.
function mapResults(slugs, data) {
  const q = data?.query ?? {}
  const normMap = new Map() // from(lc) -> to
  for (const n of q.normalized ?? []) normMap.set(norm(n.from), n.to)
  const redirMap = new Map() // from(lc) -> to
  for (const rd of q.redirects ?? []) redirMap.set(norm(rd.from), rd.to)
  const pageByTitle = new Map()
  for (const p of q.pages ?? []) pageByTitle.set(norm(p.title ?? ''), p)

  const out = new Map()
  for (const slug of slugs) {
    const requested = slugToTitle(slug)
    const afterNorm = normMap.get(norm(requested)) ?? requested
    const afterRedir = redirMap.get(norm(afterNorm)) ?? afterNorm
    const redirectedTo = norm(afterRedir) !== norm(afterNorm) ? afterRedir : ''
    const page = pageByTitle.get(norm(afterRedir))
    if (!page || page.missing) {
      out.set(slug, { slug, exists: false, title: '', redirectedTo, disambiguation: false, lead: '', image: '', ok: false, reason: 'dead page (Wikipedia 404)' })
      continue
    }
    const disambiguation = !!(page.pageprops && 'disambiguation' in page.pageprops)
    const lead = (page.extract || '').replace(/\s+/g, ' ').trim().slice(0, 240)
    const image = page.pageimage || ''
    out.set(slug, {
      slug,
      exists: true,
      title: page.title || afterRedir,
      redirectedTo,
      disambiguation,
      lead,
      image,
      ok: !disambiguation,
      reason: disambiguation ? 'disambiguation page (always wrong for a reader tap)' : 'ok',
    })
  }
  return out
}

/**
 * verifySlugs(slugs, { cacheFile, refresh }) -> Map<slug, record>
 * record: { slug, exists, title, redirectedTo, disambiguation, lead, image, ok, reason }
 * Cached by slug in audits/.wiki-verify-cache.json (gitignored regen artifact).
 */
export async function verifySlugs(slugs, { cacheFile = CACHE_DEFAULT, refresh = false } = {}) {
  const uniq = [...new Set(slugs.filter(Boolean))]
  const cache = (!refresh && existsSync(cacheFile)) ? JSON.parse(readFileSync(cacheFile, 'utf8')) : {}
  const todo = refresh ? uniq : uniq.filter((s) => !(s in cache))
  for (let i = 0; i < todo.length; i += 20) {
    const batch = todo.slice(i, i + 20)
    try {
      const data = await queryBatch(batch.map(slugToTitle))
      const res = mapResults(batch, data)
      for (const s of batch) cache[s] = res.get(s)
    } catch (err) {
      const reason = `lookup failed: ${String(err?.message || err).slice(0, 80)}`
      for (const s of batch) cache[s] = { slug: s, exists: false, title: '', redirectedTo: '', disambiguation: false, lead: '', image: '', ok: false, reason }
    }
  }
  writeFileSync(cacheFile, JSON.stringify(cache, null, 2))
  return new Map(uniq.map((s) => [s, cache[s]]))
}

export const isDefSlug = (s) => typeof s === 'string' && s.startsWith('def:')
