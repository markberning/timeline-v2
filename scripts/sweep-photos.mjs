/**
 * sweep-photos.mjs — Phase 2a of the event-upgrade sweep: the SINGLE, paced,
 * cached, batched image gatherer. This is the ONLY thing that talks to
 * Wikimedia during a sweep, and it does so serially, so it structurally cannot
 * trip the 429 rate limit that stalled elamite ch7 (see
 * memory/feedback_wikimedia_rate_limit).
 *
 * Pipeline split:
 *   Phase 1  (card agents, fan out wide) — write description + exploreFurther,
 *            optionally NAME photo candidates. NO downloads.
 *   Phase 2a (THIS script, one serial stream) — discover + download every
 *            candidate image to a persistent cache, emit a manifest.
 *   Phase 2b (vision pick agent, NO network) — Read the cached local files,
 *            pick the best per event, write captions. Cannot 429: no requests.
 *
 * Usage:
 *   node scripts/sweep-photos.mjs <tlId> [options]
 *     --out <dir>       card-output dir (default /tmp/<tlId>-out) — read for the
 *                       target eventId set + any agent-named photoCandidates
 *     --cache <dir>     persistent byte cache (default .image-cache) — gitignored;
 *                       a hit here skips the download entirely (cross-civ reuse)
 *     --delay <ms>      pause between Wikimedia byte downloads (default 1200)
 *     --width <px>      thumbnail width to fetch (default 600)
 *     --max <n>         max candidates kept per event (default 5)
 *     --min <n>         events with fewer than this many page candidates get a
 *                       Commons file-search augment (default 2) — shrinks gap-fill
 *     --all             gather for ALL events, not just those in the card outputs
 *
 * Output: /tmp/<tlId>-photos/manifest.json
 *   { tl, generatedFor, rateLimited, note,
 *     events: { <eventId>: { label, wikiSlug, candidates: [ {file, localPath, w, h, source} ] } } }
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const USER_AGENT = 'StuffHappened/2.0 (historical-narratives; mebernin@gmail.com)'

// ---- args ----
const argv = process.argv.slice(2)
const tl = argv.find(a => !a.startsWith('--'))
if (!tl) { console.error('usage: node scripts/sweep-photos.mjs <tlId> [--out dir] [--cache dir] [--delay ms] [--width px] [--max n] [--all]'); process.exit(1) }
const opt = (name, def) => { const i = argv.indexOf(`--${name}`); return i >= 0 ? argv[i + 1] : def }
const flag = name => argv.includes(`--${name}`)
const OUT_DIR = opt('out', `/tmp/${tl}-out`)
const CACHE_DIR = join(ROOT, opt('cache', '.image-cache'))
const DELAY_MS = Number(opt('delay', 500))  // was 1200 (conservative, old parallel fan-out). Stepped 1200→700 (heian-japan held clean at 132 fresh downloads, 0 throttle) →500 on 2026-06-03. Single serial CDN stream + compliant UA. Watch 429s; revert up if the circuit-breaker trips.
const WIDTH = Number(opt('width', 600))
const MAX_PER_EVENT = Number(opt('max', 5))
const MIN_CANDIDATES = Number(opt('min', 2))  // events below this get a Commons-search augment
const GATHER_ALL = flag('all')
const PHOTOS_DIR = `/tmp/${tl}-photos`

const sleep = ms => new Promise(r => setTimeout(r, ms))

// Filenames we never want as event photos: vector icons, flags, logos, audio,
// generic chrome. (Maps are NOT auto-dropped — a map can be the right photo;
// the vision pick decides. We only drop things that are never a real artifact.)
const JUNK = /(^|[ _])(icon|logo|flag|coat[ _]of[ _]arms|commons-logo|wiki|ooui|oojs|edit-|magnify|ambox|question_book|disambig|gnome-|crystal_|nuvola|symbol_)/i
const JUNK_EXT = /\.(svg|ogg|oga|ogv|webm|mid|pdf)$/i
const isJunk = f => JUNK.test(f) || JUNK_EXT.test(f)

const norm = f => f.replace(/^File:/i, '').replace(/ /g, '_').trim()
const safe = f => norm(f).replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 180)
// Canonical match key: Commons returns titles with spaces, we store with
// underscores — normalize both sides so thumb-map get/set agree.
const key = f => norm(f).toLowerCase()

// ---- shared backoff fetch (mirrors enrich-events.ts) ----
let consecutive429 = 0
let circuitOpen = false
const CIRCUIT_TRIP = 4   // consecutive hard-429s (after retries) → stop touching Wikimedia

async function backoffFetch(url, kind /* 'json' | 'buffer' */) {
  if (circuitOpen) return null
  const MAX = 5
  for (let attempt = 1; attempt <= MAX; attempt++) {
    let res
    try {
      res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } })
    } catch (err) {
      if (attempt === MAX) { return null }
      await sleep(1000 * 2 ** attempt); continue
    }
    if (res.ok) { consecutive429 = 0; return kind === 'json' ? await res.json() : Buffer.from(await res.arrayBuffer()) }
    const transient = res.status === 429 || res.status >= 500
    if (res.status === 429) {
      consecutive429++
      if (consecutive429 >= CIRCUIT_TRIP) { circuitOpen = true; console.error(`  ⚠ circuit-breaker: ${CIRCUIT_TRIP} consecutive 429s — stopping Wikimedia traffic, manifest will be partial`); return null }
    }
    if (!transient || attempt === MAX) return null
    const retryAfter = Number(res.headers.get('retry-after'))
    const waitMs = Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : 1000 * 2 ** attempt
    await sleep(waitMs)
  }
  return null
}

// ---- load events ----
const ref = JSON.parse(readFileSync(join(ROOT, 'reference-data', `${tl}.json`), 'utf8'))
// Context terms appended to the Commons file-search so a bare label ("Standardized
// Weights", "Decline Begins") ranks THIS civ's artifacts first instead of pulling in
// global junk (Roman-Empire books, Lithuanian seals). Default = the civ's label;
// override with --context "...". This is the single biggest first-pass photo-quality
// lever — see audits/event-upgrade-sweep-progress.md (indus lesson).
const SEARCH_CONTEXT = opt('context', ref.label || '').replace(/\s+/g, ' ').trim()
const allEvents = [...(ref.events || [])]
for (const s of ref.spans || []) if (Array.isArray(s.events)) allEvents.push(...s.events)
const byId = new Map(allEvents.map(e => [e.id, e]))

// ---- target set + agent-named candidates from card outputs ----
const agentCandidates = new Map() // eventId → [File:...]
let targetIds = new Set()
if (existsSync(OUT_DIR)) {
  for (const f of readdirSync(OUT_DIR).filter(f => /^ch\d+\.json$/.test(f))) {
    const out = JSON.parse(readFileSync(join(OUT_DIR, f), 'utf8'))
    for (const c of out.cards || []) {
      targetIds.add(c.eventId)
      const cands = []
      if (c.photo?.commonsFile) cands.push(c.photo.commonsFile)
      if (Array.isArray(c.photoCandidates)) cands.push(...c.photoCandidates)
      if (cands.length) agentCandidates.set(c.eventId, cands)
    }
  }
}
if (GATHER_ALL || targetIds.size === 0) targetIds = new Set(allEvents.map(e => e.id))
const targets = [...targetIds].map(id => byId.get(id)).filter(Boolean)
console.log(`sweep-photos ${tl}: ${targets.length} events · cache ${CACHE_DIR} · delay ${DELAY_MS}ms`)

// ---- candidate discovery: PER-SLUG prop=images on each event's wikiSlug ----
// Maps slug → [filenames]. NOTE: this MUST be one title per request. MediaWiki's
// `imlimit` is a TOTAL across all titles in a query, processed in page order — so a
// batched call (50 titles, imlimit=40) lets the FIRST image-heavy page eat the whole
// limit and returns 0 images for every other page. That silently starved the candidate
// pool (gupta-empire: 4 page images for the whole civ; Chandragupta II / Samudragupta /
// Aryabhata each returned empty despite having images). One paced request per slug fixes
// it — deterministic, no model tokens. redirects=1 keeps the mapping 1:1.
const slugs = [...new Set(targets.flatMap(e => [e.wikiSlug, e.imageWikiSlug].filter(Boolean)))]
const pageImages = new Map()  // slug → [File:...]
const pageLead = new Map()    // slug → File:... (the page's lead image)
for (const slug of slugs) {
  const title = slug.replace(/_/g, ' ')
  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=images|pageimages&imlimit=40&piprop=name&titles=${encodeURIComponent(title)}`
  const data = await backoffFetch(url, 'json')
  await sleep(DELAY_MS / 2)
  if (!data) { console.error(`  (image-list for ${slug} failed/skipped)`); continue }
  const p = Object.values(data?.query?.pages || {})[0]
  if (!p) continue
  const imgs = (p.images || []).map(im => im.title).filter(t => /^File:/i.test(t) && !isJunk(t))
  pageImages.set(slug, imgs)
  if (p.pageimage) pageLead.set(slug, `File:${p.pageimage}`)
}

// ---- assemble preliminary per-event candidate list (agent-named first, then lead, then page images) ----
const prelim = new Map()  // eventId → { list, seen }
for (const e of targets) {
  const seen = new Set(), list = []
  const push = (f, source) => { const n = norm(f); if (!n || seen.has(n.toLowerCase()) || isJunk(n)) return; seen.add(n.toLowerCase()); list.push({ file: `File:${n}`, source }) }
  for (const f of agentCandidates.get(e.id) || []) push(f, 'agent')
  for (const slug of [e.wikiSlug, e.imageWikiSlug].filter(Boolean)) {
    if (pageLead.has(slug)) push(pageLead.get(slug), 'lead')
  }
  for (const slug of [e.wikiSlug, e.imageWikiSlug].filter(Boolean)) {
    for (const f of pageImages.get(slug) || []) push(f, 'page')
  }
  prelim.set(e.id, { list, seen })
}

// ---- augment events with a Commons file-search by label (paced, distinctness-aware) ----
// Two kinds of events need event-SPECIFIC candidates (the wiki page only yields
// candidates shared by every sub-event of one subject):
//   (1) low-candidate  — fewer than MIN_CANDIDATES usable page images (generic/no slug)
//   (2) no-unique-candidate — granular sub-events (e.g. 4 Aryabhata discoveries) whose
//       ONLY candidates are also another target event's, so the vision picker is forced
//       to reject all-but-one as duplicates ("reassign in gap-fill"). This was the #1
//       coverage leak on granular civs (gupta-empire: 52/73 events had a single,
//       sibling-shared candidate). A Commons file-namespace search by the event LABEL
//       surfaces distinct representative artifacts the shared page never linked.
// We compute candidate→events sharing ONCE up front (before the loop mutates lists),
// so the "no unique candidate" test reflects the page/lead/agent pool only.
const sharedBy = new Map()  // file key → count of target events listing it
for (const e of targets) for (const c of prelim.get(e.id).list) sharedBy.set(c.file.toLowerCase(), (sharedBy.get(c.file.toLowerCase()) || 0) + 1)
const hasUnique = e => prelim.get(e.id).list.some(c => (sharedBy.get(c.file.toLowerCase()) || 0) === 1)
let searched = 0
for (const e of targets) {
  const pc = prelim.get(e.id)
  // search if too few candidates, OR every candidate it has is shared with a sibling
  if (pc.list.length >= MIN_CANDIDATES && hasUnique(e)) continue
  const base = (e.label || e.id).replace(/[—–_-]+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!base) continue
  // Append civ context unless the label already contains it, so we don't over-narrow.
  const q = (SEARCH_CONTEXT && !base.toLowerCase().includes(SEARCH_CONTEXT.toLowerCase()))
    ? `${base} ${SEARCH_CONTEXT}` : base
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=${encodeURIComponent(q)}`
  const data = await backoffFetch(url, 'json')
  searched++
  await sleep(DELAY_MS / 2)
  if (!data) continue
  const hits = Object.values(data?.query?.pages || {}).sort((a, b) => (a.index ?? 99) - (b.index ?? 99))
  for (const h of hits) {
    if (!/^File:/i.test(h.title)) continue
    const n = norm(h.title)
    if (!n || pc.seen.has(n.toLowerCase()) || isJunk(n)) continue
    pc.seen.add(n.toLowerCase())
    pc.list.push({ file: `File:${n}`, source: 'search' })
  }
  // Float genuinely-distinct candidates (not shared with a sibling target) to the front
  // so they survive the per-event --max cap; sibling-shared files (which the picker will
  // reject as duplicates anyway) sink to the back. Stable within each group.
  const isShared = c => (sharedBy.get(c.file.toLowerCase()) || 0) > 1
  pc.list.sort((a, b) => (isShared(a) ? 1 : 0) - (isShared(b) ? 1 : 0))
}
if (searched) console.log(`  Commons search augmented ${searched} event(s) (low-candidate or no distinct candidate)`)

// ---- finalize candidate lists (cap per event) ----
const eventCands = new Map()
for (const e of targets) eventCands.set(e.id, prelim.get(e.id).list.slice(0, MAX_PER_EVENT))

// ---- resolve thumb URLs (batched imageinfo, 50/req) ----
const allFiles = [...new Set([...eventCands.values()].flat().map(c => c.file))]
const thumb = new Map()  // File: → {url, w, h}
for (let i = 0; i < allFiles.length; i += 50) {
  const batch = allFiles.slice(i, i + 50)
  const titles = batch.join('|')
  const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url|size&iiurlwidth=${WIDTH}&titles=${encodeURIComponent(titles)}`
  const data = await backoffFetch(url, 'json')
  if (!data) { console.error(`  (imageinfo batch ${i / 50 + 1} failed/skipped)`); continue }
  for (const p of Object.values(data?.query?.pages || {})) {
    const ii = p.imageinfo?.[0]
    if (ii?.thumburl) thumb.set(key(p.title), { url: ii.thumburl, w: ii.thumbwidth, h: ii.thumbheight })
  }
  await sleep(DELAY_MS / 2)
}

// ---- download bytes (paced, cached) ----
mkdirSync(CACHE_DIR, { recursive: true })
mkdirSync(PHOTOS_DIR, { recursive: true })
let downloaded = 0, cached = 0, failed = 0
const manifestEvents = {}
for (const e of targets) {
  const out = []
  for (const c of eventCands.get(e.id) || []) {
    const t = thumb.get(key(c.file))
    if (!t) { continue }
    const ext = (t.url.match(/\.(jpe?g|png|gif|webp|tiff?)$/i)?.[1] || 'jpg').toLowerCase()
    const base = safe(c.file).replace(/\.(jpe?g|png|gif|webp|tiff?)$/i, '')
    const local = join(CACHE_DIR, `${base}.${ext}`)
    if (existsSync(local) && statSync(local).size > 0) {
      cached++; out.push({ file: c.file, localPath: local, w: t.w, h: t.h, source: c.source, cached: true }); continue
    }
    if (circuitOpen) { failed++; continue }
    const buf = await backoffFetch(t.url, 'buffer')
    await sleep(DELAY_MS)
    if (!buf) { failed++; continue }
    writeFileSync(local, buf)
    downloaded++
    out.push({ file: c.file, localPath: local, w: t.w, h: t.h, source: c.source, cached: false })
  }
  manifestEvents[e.id] = { label: e.label, wikiSlug: e.wikiSlug || null, candidates: out }
}

const manifest = {
  tl,
  generatedFor: targets.length,
  rateLimited: circuitOpen,
  note: circuitOpen
    ? 'CIRCUIT-BREAKER TRIPPED — Wikimedia 429. Manifest is PARTIAL; re-run sweep-photos once the limit clears (cached files persist, so the re-run only fetches the gaps).'
    : 'complete',
  events: manifestEvents,
}
writeFileSync(join(PHOTOS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2))

const eventsWithNone = Object.values(manifestEvents).filter(e => e.candidates.length === 0).length
console.log(`\n  downloaded ${downloaded} · cache-hits ${cached} · failed ${failed}`)
console.log(`  ${targets.length - eventsWithNone}/${targets.length} events have ≥1 candidate · ${eventsWithNone} with none`)
console.log(`  manifest → ${join(PHOTOS_DIR, 'manifest.json')}`)
if (circuitOpen) { console.error('\n  ⚠ rate-limited — manifest is partial. Wait a few minutes and re-run; cache makes the re-run cheap.'); process.exit(2) }
