/**
 * Fetch image thumbnails and Wikipedia extracts for events.
 * Results cached to content/.enrichment-cache.json.
 * Pass --refresh to force re-fetch all entries.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const CACHE_PATH = join(ROOT, 'content', '.enrichment-cache.json')
const USER_AGENT = 'StuffHappened/2.0 (historical-narratives; mebernin@gmail.com)'

interface EnrichmentCache {
  thumbnails: Record<string, string | null>  // commonsFile → thumbUrl or null (verified missing)
  extracts: Record<string, string | null>    // wikiSlug → extract text or null
}

function loadCache(): EnrichmentCache {
  if (existsSync(CACHE_PATH)) {
    return JSON.parse(readFileSync(CACHE_PATH, 'utf-8'))
  }
  return { thumbnails: {}, extracts: {} }
}

function saveCache(cache: EnrichmentCache): void {
  mkdirSync(join(ROOT, 'content'), { recursive: true })
  writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2))
}

async function fetchJson(url: string): Promise<unknown> {
  const res = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT },
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`)
  return res.json()
}

/** Batch-fetch Commons thumbnail URLs. Up to 50 filenames per request. */
async function fetchThumbnails(
  filenames: string[],
  cache: EnrichmentCache,
): Promise<void> {
  const uncached = filenames.filter(f => !(f in cache.thumbnails))
  if (uncached.length === 0) {
    console.log(`  Thumbnails: ${filenames.length} cached, 0 to fetch`)
    return
  }
  console.log(`  Thumbnails: ${filenames.length - uncached.length} cached, ${uncached.length} to fetch`)

  for (let i = 0; i < uncached.length; i += 50) {
    const batch = uncached.slice(i, i + 50)
    const titles = batch.map(f => `File:${f}`).join('|')
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url&iiurlwidth=400&format=json`

    const data = await fetchJson(url) as {
      query: {
        pages: Record<string, { title: string; imageinfo?: Array<{ thumburl: string }> }>
        normalized?: Array<{ from: string; to: string }>
      }
    }

    // Build a reverse lookup: normalized title → original filename
    const normalizedMap = new Map<string, string>()
    for (const f of batch) {
      normalizedMap.set(`File:${f}`.replace(/_/g, ' '), f)
      normalizedMap.set(`File:${f}`, f)
    }
    if (data.query.normalized) {
      for (const n of data.query.normalized) {
        const origFile = normalizedMap.get(n.from)
        if (origFile) normalizedMap.set(n.to, origFile)
      }
    }

    for (const page of Object.values(data.query.pages)) {
      const filename = normalizedMap.get(page.title)
      if (!filename) continue
      const thumbUrl = page.imageinfo?.[0]?.thumburl ?? null
      cache.thumbnails[filename] = thumbUrl
      if (!thumbUrl) console.log(`    ⚠ Missing: ${filename}`)
    }

    // Mark any batch entries not found in response as null
    for (const f of batch) {
      if (!(f in cache.thumbnails)) cache.thumbnails[f] = null
    }
  }
}

/** Batch-fetch Wikipedia extracts. Up to 50 slugs per request. */
async function fetchExtracts(
  slugs: string[],
  cache: EnrichmentCache,
): Promise<void> {
  const uncached = slugs.filter(s => !(s in cache.extracts))
  if (uncached.length === 0) {
    console.log(`  Extracts: ${slugs.length} cached, 0 to fetch`)
    return
  }
  console.log(`  Extracts: ${slugs.length - uncached.length} cached, ${uncached.length} to fetch`)

  for (let i = 0; i < uncached.length; i += 50) {
    const batch = uncached.slice(i, i + 50)
    const titles = batch.join('|')
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=extracts&exintro=1&explaintext=1&exsentences=3&format=json`

    const data = await fetchJson(url) as {
      query: {
        pages: Record<string, { title: string; extract?: string }>
        normalized?: Array<{ from: string; to: string }>
      }
    }

    // Build reverse lookup
    const normalizedMap = new Map<string, string>()
    for (const s of batch) {
      normalizedMap.set(s, s)
      normalizedMap.set(s.replace(/_/g, ' '), s)
    }
    if (data.query.normalized) {
      for (const n of data.query.normalized) {
        const origSlug = normalizedMap.get(n.from)
        if (origSlug) normalizedMap.set(n.to, origSlug)
      }
    }

    for (const page of Object.values(data.query.pages)) {
      const slug = normalizedMap.get(page.title)
      if (!slug) continue
      cache.extracts[slug] = page.extract?.trim() || null
    }

    // Mark missing
    for (const s of batch) {
      if (!(s in cache.extracts)) cache.extracts[s] = null
    }
  }
}

export interface EnrichedEvent {
  thumbnailUrl?: string
  wikiExtract?: string
}

/** Enrich a set of events. Returns a map of event ID → enrichment data. */
export async function enrichEvents(
  events: Array<{ id: string; commonsFile?: string; wikiSlug?: string }>,
  forceRefresh = false,
): Promise<Map<string, EnrichedEvent>> {
  const cache = forceRefresh
    ? { thumbnails: {}, extracts: {} } as EnrichmentCache
    : loadCache()

  const commonsFiles = [...new Set(events.filter(e => e.commonsFile).map(e => e.commonsFile!))]
  const wikiSlugs = [...new Set(events.filter(e => e.wikiSlug).map(e => e.wikiSlug!))]

  await fetchThumbnails(commonsFiles, cache)
  await fetchExtracts(wikiSlugs, cache)

  saveCache(cache)

  const result = new Map<string, EnrichedEvent>()
  for (const evt of events) {
    const enriched: EnrichedEvent = {}
    if (evt.commonsFile && cache.thumbnails[evt.commonsFile]) {
      enriched.thumbnailUrl = cache.thumbnails[evt.commonsFile]!
    }
    if (evt.wikiSlug && cache.extracts[evt.wikiSlug]) {
      enriched.wikiExtract = cache.extracts[evt.wikiSlug]!
    }
    if (enriched.thumbnailUrl || enriched.wikiExtract) {
      result.set(evt.id, enriched)
    }
  }

  return result
}
