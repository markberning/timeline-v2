/**
 * Fetch image thumbnails and Wikipedia extracts for events.
 * Results cached to content/.enrichment-cache.json.
 * Pass --refresh to force re-fetch all entries.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const CACHE_PATH = join(ROOT, 'content', '.enrichment-cache.json')
const REJECTIONS_PATH = join(ROOT, 'content', '.image-rejections.json')
const CAPTION_OVERRIDES_PATH = join(ROOT, 'content', '.caption-overrides.json')
const USER_AGENT = 'StuffHappened/2.0 (historical-narratives; mebernin@gmail.com)'

function loadRejections(): Set<string> {
  if (existsSync(REJECTIONS_PATH)) {
    const raw = JSON.parse(readFileSync(REJECTIONS_PATH, 'utf-8'))
    // Support both array format ["id1", "id2"] and object format {"id1": "reason"}
    if (Array.isArray(raw)) return new Set(raw)
    return new Set(Object.keys(raw))
  }
  return new Set()
}

function loadCaptionOverrides(): Record<string, string> {
  if (existsSync(CAPTION_OVERRIDES_PATH)) {
    return JSON.parse(readFileSync(CAPTION_OVERRIDES_PATH, 'utf-8'))
  }
  return {}
}

interface EnrichmentCache {
  thumbnails: Record<string, string | null>   // commonsFile → thumbUrl or null
  extracts: Record<string, string | null>     // wikiSlug → extract text or null
  wikiImages: Record<string, string | null>   // wikiSlug → Wikipedia page thumbnail URL or null
  wikiImageFiles: Record<string, string | null> // wikiSlug → Wikipedia page image filename or null
  imageDescriptions: Record<string, string | null> // Commons filename → description or null
}

function loadCache(): EnrichmentCache {
  const defaults: EnrichmentCache = { thumbnails: {}, extracts: {}, wikiImages: {}, wikiImageFiles: {}, imageDescriptions: {} }
  if (existsSync(CACHE_PATH)) {
    const raw = JSON.parse(readFileSync(CACHE_PATH, 'utf-8'))
    return { ...defaults, ...raw }
  }
  return defaults
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
    console.log(`  Commons thumbnails: ${filenames.length} cached, 0 to fetch`)
    return
  }
  console.log(`  Commons thumbnails: ${filenames.length - uncached.length} cached, ${uncached.length} to fetch`)

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
      cache.thumbnails[filename] = page.imageinfo?.[0]?.thumburl ?? null
    }

    for (const f of batch) {
      if (!(f in cache.thumbnails)) cache.thumbnails[f] = null
    }
  }
}

/** Batch-fetch Wikipedia extracts + page images. Up to 50 slugs per request. */
async function fetchWikiData(
  slugs: string[],
  cache: EnrichmentCache,
): Promise<void> {
  // Check what needs fetching (either extract or image missing)
  const needsExtract = slugs.filter(s => !(s in cache.extracts))
  const needsImage = slugs.filter(s => !(s in cache.wikiImages))
  const uncached = [...new Set([...needsExtract, ...needsImage])]

  if (uncached.length === 0) {
    console.log(`  Wiki data: ${slugs.length} cached, 0 to fetch`)
    return
  }
  console.log(`  Wiki data: ${slugs.length - uncached.length} cached, ${uncached.length} to fetch`)

  for (let i = 0; i < uncached.length; i += 50) {
    const batch = uncached.slice(i, i + 50)
    const titles = batch.join('|')
    // Combine extracts + pageimages in one request
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=extracts|pageimages&exintro=1&explaintext=1&exsentences=3&pithumbsize=400&format=json`

    const data = await fetchJson(url) as {
      query: {
        pages: Record<string, {
          title: string
          extract?: string
          thumbnail?: { source: string }
        }>
        normalized?: Array<{ from: string; to: string }>
      }
    }

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
      if (!(slug in cache.extracts)) {
        cache.extracts[slug] = page.extract?.trim() || null
      }
      if (!(slug in cache.wikiImages)) {
        cache.wikiImages[slug] = page.thumbnail?.source ?? null
      }
      if (!(slug in cache.wikiImageFiles)) {
        cache.wikiImageFiles[slug] = (page as Record<string, unknown>).pageimage as string ?? null
      }
    }

    for (const s of batch) {
      if (!(s in cache.extracts)) cache.extracts[s] = null
      if (!(s in cache.wikiImages)) cache.wikiImages[s] = null
    }
  }
}

/** Strip HTML tags from Commons descriptions */
function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
}

/** Batch-fetch image descriptions from Commons. */
async function fetchImageDescriptions(
  filenames: string[],
  cache: EnrichmentCache,
): Promise<void> {
  const uncached = filenames.filter(f => f && !(f in cache.imageDescriptions))
  if (uncached.length === 0) {
    console.log(`  Image captions: ${filenames.length} cached, 0 to fetch`)
    return
  }
  console.log(`  Image captions: ${filenames.length - uncached.length} cached, ${uncached.length} to fetch`)

  for (let i = 0; i < uncached.length; i += 50) {
    const batch = uncached.slice(i, i + 50)
    const titles = batch.map(f => `File:${f}`).join('|')
    const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=extmetadata&iiextmetadatafilter=ImageDescription|ObjectName&format=json`

    const data = await fetchJson(url) as {
      query: {
        pages: Record<string, {
          title: string
          imageinfo?: Array<{ extmetadata?: { ImageDescription?: { value: string }; ObjectName?: { value: string } } }>
        }>
        normalized?: Array<{ from: string; to: string }>
      }
    }

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
      const meta = page.imageinfo?.[0]?.extmetadata
      const desc = meta?.ImageDescription?.value
      cache.imageDescriptions[filename] = desc ? stripHtml(desc) : null
    }

    for (const f of batch) {
      if (!(f in cache.imageDescriptions)) cache.imageDescriptions[f] = null
    }
  }
}

export interface EnrichedEvent {
  thumbnailUrl?: string
  imageCaption?: string
  wikiExtract?: string
}

/** Enrich a set of events. Returns a map of event ID → enrichment data. */
export async function enrichEvents(
  events: Array<{ id: string; commonsFile?: string; wikiSlug?: string }>,
  forceRefresh = false,
): Promise<Map<string, EnrichedEvent>> {
  const cache = forceRefresh
    ? { thumbnails: {}, extracts: {}, wikiImages: {}, wikiImageFiles: {}, imageDescriptions: {} } as EnrichmentCache
    : loadCache()

  const commonsFiles = [...new Set(events.filter(e => e.commonsFile).map(e => e.commonsFile!))]
  const wikiSlugs = [...new Set(events.filter(e => e.wikiSlug).map(e => e.wikiSlug!))]

  await fetchThumbnails(commonsFiles, cache)
  await fetchWikiData(wikiSlugs, cache)

  // Collect all image filenames we'll actually use (Commons + Wikipedia fallbacks)
  const imageFilenames: string[] = []
  for (const evt of events) {
    if (evt.commonsFile && cache.thumbnails[evt.commonsFile]) {
      imageFilenames.push(evt.commonsFile)
    } else if (evt.wikiSlug && cache.wikiImageFiles[evt.wikiSlug]) {
      imageFilenames.push(cache.wikiImageFiles[evt.wikiSlug]!)
    }
  }
  await fetchImageDescriptions([...new Set(imageFilenames)], cache)

  saveCache(cache)

  const rejections = loadRejections()
  if (rejections.size > 0) console.log(`  Image rejections: ${rejections.size} events excluded`)

  const captionOverrides = loadCaptionOverrides()
  const overrideCount = Object.keys(captionOverrides).length
  if (overrideCount > 0) console.log(`  Caption overrides: ${overrideCount} manual captions`)

  const result = new Map<string, EnrichedEvent>()
  for (const evt of events) {
    const enriched: EnrichedEvent = {}
    // Prefer Commons thumbnail, fall back to Wikipedia page image
    // Skip if event is in rejections list
    if (!rejections.has(evt.id)) {
      let imageFile: string | null = null
      if (evt.commonsFile && cache.thumbnails[evt.commonsFile]) {
        enriched.thumbnailUrl = cache.thumbnails[evt.commonsFile]!
        imageFile = evt.commonsFile
      } else if (evt.wikiSlug && cache.wikiImages[evt.wikiSlug]) {
        enriched.thumbnailUrl = cache.wikiImages[evt.wikiSlug]!
        imageFile = cache.wikiImageFiles[evt.wikiSlug] ?? null
      }
      // Caption priority: manual override > Commons description
      if (captionOverrides[evt.id]) {
        enriched.imageCaption = captionOverrides[evt.id]
      } else if (imageFile && cache.imageDescriptions[imageFile]) {
        enriched.imageCaption = cache.imageDescriptions[imageFile]!
      }
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
