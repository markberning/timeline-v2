/**
 * Build script: parse narrative markdown files into structured JSON.
 * Run with: npx tsx scripts/parse-narratives.ts
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeStringify from 'rehype-stringify'
import { enrichEvents, enrichGlossary } from './enrich-events'
import { getAccentColors } from '../src/lib/accent-colors'

interface ParsedChapter {
  number: number
  title: string
  slug: string
  contentHtml: string
  eventIds: string[]
  summaryBullets?: string[]
}

interface GlossaryLink {
  term: string
  matchText: string
  wikiSlug: string
  type: string
}

interface GlossaryEntry {
  term: string
  wikiSlug: string
  type: string
  wikiExtract?: string
  thumbnailUrl?: string
}

interface CrossLinkCurated {
  matchText: string
  targetTl: string
  targetChapter: number
  blurb: string
}

interface CrossLinkOut {
  id: string
  matchText: string
  sourceChapter: number
  targetTl: string
  targetChapter: number
  targetLabel: string
  targetChapterTitle: string
  targetColorLight: string
  targetColorDark: string
  blurb: string
}

interface TlMeta {
  label: string
  chapters: Map<number, string>
  colorLight: string
  colorDark: string
}

interface ChapterSummary {
  chapter: number
  title: string
  subtitle?: string
  summary?: string
  bullets?: string[]
  dateRange: string
}

interface TlEventDetail {
  label: string
  text: string
}

interface TlEvent {
  id: string
  label: string
  year: number
  endYear?: number
  description: string
  wikiSlug: string
  commonsFile?: string
  tier: number
  category: string
  details?: TlEventDetail[]
}

interface TlSpan {
  id: string
  label: string
  startYear: number
  endYear: number
}

const ROOT = join(__dirname, '..')
const NARRATIVES_DIR = join(ROOT, 'narratives')
const REFERENCE_DIR = join(ROOT, 'reference-data')
const CONTENT_DIR = join(ROOT, 'content')
const OFFLINE_MANIFEST_DIR = join(ROOT, 'public', 'offline')
const MAPS_DIR = join(ROOT, 'public', 'maps')

// Map narrative filenames to TL IDs
const NARRATIVE_FILES: Record<string, string> = {
  'mesopotamia.md': 'mesopotamia',
  'indus-valley.md': 'indus-valley',
  'ancient-china.md': 'ancient-china',
  'ancient-nubia.md': 'ancient-nubia',
  'elamite-civilization.md': 'elamite-civilization',
  'early-dynastic-egypt.md': 'early-dynastic-egypt',
  'early-andean-civilizations.md': 'early-andean-civilizations',
  'persian-empire.md': 'persian-empire',
  'kingdom-of-kush.md': 'kingdom-of-kush',
  'minoan-civilization.md': 'minoan-civilization',
  'old-kingdom-egypt.md': 'old-kingdom-egypt',
  'ancient-korea.md': 'ancient-korea',
  'assyrian-empire.md': 'assyrian-empire',
  'hittite-empire.md': 'hittite-empire',
  'mycenaean-civilization.md': 'mycenaean-civilization',
  'shang-dynasty.md': 'shang-dynasty',
  'new-kingdom-egypt.md': 'new-kingdom-egypt',
  'olmec-civilization.md': 'olmec-civilization',
  'vedic-period.md': 'vedic-period',
  'zhou-dynasty.md': 'zhou-dynasty',
  'qin-dynasty.md': 'qin-dynasty',
  'maurya-empire.md': 'maurya-empire',
  'phoenicia.md': 'phoenicia',
  'polynesian-voyagers.md': 'polynesian-voyagers',
  'ancient-israel.md': 'ancient-israel',
  'late-egypt.md': 'late-egypt',
  'maya-civilization.md': 'maya-civilization',
  'carthage.md': 'carthage',
  'scythians.md': 'scythians',
  'ancient-greece.md': 'ancient-greece',
  'ancient-rome.md': 'ancient-rome',
  'zapotec-civilization.md': 'zapotec-civilization',
  'celtic-cultures.md': 'celtic-cultures',
  'xiongnu-huns.md': 'xiongnu-huns',
  'post-maurya-kingdoms.md': 'post-maurya-kingdoms',
  'han-dynasty.md': 'han-dynasty',
  'andean-kingdoms.md': 'andean-kingdoms',
  'teotihuacan.md': 'teotihuacan',
  'kingdom-of-aksum.md': 'kingdom-of-aksum',
  'six-dynasties.md': 'six-dynasties',
  'ancestral-puebloans.md': 'ancestral-puebloans',
  'aztec-empire.md': 'aztec-empire',
  'byzantine-empire.md': 'byzantine-empire',
  'viking-age.md': 'viking-age',
  'mongol-empire.md': 'mongol-empire',
  'gupta-empire.md': 'gupta-empire',
  'islamic-golden-age.md': 'islamic-golden-age',
  'ottoman-empire.md': 'ottoman-empire',
  'safavid-persia.md': 'safavid-persia',
  'umayyad-caliphate.md': 'umayyad-caliphate',
  'middle-horizon-empires.md': 'middle-horizon-empires',
  'edo-japan.md': 'edo-japan',
  'gokturk-khaganate.md': 'gokturk-khaganate',
  'mali-empire.md': 'mali-empire',
  'songhai-empire.md': 'songhai-empire',
  'tang-song-china.md': 'tang-song-china',
  'joseon-korea.md': 'joseon-korea',
  'medieval-india.md': 'medieval-india',
  'meiji-japan.md': 'meiji-japan',
  'yuan-dynasty.md': 'yuan-dynasty',
  'inca-empire.md': 'inca-empire',
  'timurid-empire.md': 'timurid-empire',
  'delhi-sultanate.md': 'delhi-sultanate',
  'mughal-empire.md': 'mughal-empire',
  'late-medieval-europe.md': 'late-medieval-europe',
  'high-medieval-europe.md': 'high-medieval-europe',
  'early-medieval-europe.md': 'early-medieval-europe',
  'srivijaya.md': 'srivijaya',
  'korean-modern.md': 'korean-modern',
  'japanese-economic-miracle.md': 'japanese-economic-miracle',
  'renaissance-italy.md': 'renaissance-italy',
  'ming-dynasty.md': 'ming-dynasty',
  'prehistoric-japan.md': 'prehistoric-japan',
  'asuka-nara-japan.md': 'asuka-nara-japan',
  'heian-japan.md': 'heian-japan',
  'modern-india.md': 'modern-india',
  'qing-dynasty.md': 'qing-dynasty',
  'chinese-revolution.md': 'chinese-revolution',
  'rise-of-china.md': 'rise-of-china',
  'khmer-empire.md': 'khmer-empire',
  'dai-viet.md': 'dai-viet',
  'majapahit.md': 'majapahit',
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function splitIntoChapters(markdown: string): { number: number; title: string; body: string }[] {
  const chapterRegex = /^# Chapter (\d+)\s*[—–-]\s*(.+)$/gm
  const chapters: { number: number; title: string; body: string }[] = []
  const matches: { index: number; number: number; title: string }[] = []

  let match
  while ((match = chapterRegex.exec(markdown)) !== null) {
    matches.push({
      index: match.index + match[0].length,
      number: parseInt(match[1], 10),
      title: match[2].trim(),
    })
  }

  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].index
    const end = i + 1 < matches.length
      ? markdown.lastIndexOf('# Chapter', matches[i + 1].index)
      : markdown.length

    let body = markdown.slice(start, end).trim()
    // Remove trailing --- separators
    body = body.replace(/\n---\s*$/, '').trim()

    chapters.push({
      number: matches[i].number,
      title: matches[i].title,
      body,
    })
  }

  return chapters
}

async function markdownToHtml(md: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(md)

  return String(result)
}

function loadSummaries(tlId: string): ChapterSummary[] {
  // Try both naming patterns
  const patterns = [
    join(NARRATIVES_DIR, `${tlId}.summaries.json`),
    join(NARRATIVES_DIR, `${Object.entries(NARRATIVE_FILES).find(([, id]) => id === tlId)?.[0]?.replace('.md', '')}.summaries.json`),
  ]

  for (const path of patterns) {
    if (existsSync(path)) {
      return JSON.parse(readFileSync(path, 'utf-8'))
    }
  }

  console.warn(`No summaries found for ${tlId}, generating placeholders`)
  return []
}

function loadReferenceData(tlId: string): { events: TlEvent[]; spans: TlSpan[]; label: string; mapCommonsFile?: string; accentColor?: string } {
  const path = join(REFERENCE_DIR, `${tlId}.json`)
  if (!existsSync(path)) {
    console.warn(`No reference data found for ${tlId}`)
    return { events: [], spans: [], label: tlId }
  }

  const data = JSON.parse(readFileSync(path, 'utf-8'))

  const events: TlEvent[] = (data.events ?? []).map((e: Record<string, unknown>) => ({
    id: e.id,
    label: e.label,
    year: e.year,
    endYear: e.endYear,
    description: e.description,
    wikiSlug: e.wikiSlug,
    commonsFile: e.commonsFile,
    details: e.details,
    tier: e.tier,
    category: e.category,
  }))

  const spans: TlSpan[] = (data.spans ?? []).map((s: Record<string, unknown>) => ({
    id: s.id,
    label: s.label,
    startYear: s.startYear,
    endYear: s.endYear,
  }))

  const accentColor = data.story?.paths?.[0]?.color

  return {
    events,
    spans,
    label: data.label ?? tlId,
    mapCommonsFile: data.mapCommonsFile,
    accentColor,
  }
}

async function parseNarrative(filename: string, tlId: string, tlMetaMap: Map<string, TlMeta>) {
  console.log(`Parsing ${filename} → ${tlId}...`)

  const markdown = readFileSync(join(NARRATIVES_DIR, filename), 'utf-8')
  const rawChapters = splitIntoChapters(markdown)
  const summaries = loadSummaries(tlId)
  const refData = loadReferenceData(tlId)

  // Enrich events with thumbnails and Wikipedia extracts
  const forceRefresh = process.argv.includes('--refresh')
  const enrichmentMap = await enrichEvents(
    refData.events.map(e => ({ id: e.id, commonsFile: e.commonsFile, wikiSlug: e.wikiSlug })),
    forceRefresh,
  )
  console.log(`  Enriched: ${enrichmentMap.size} events with thumbnails/extracts`)

  // Load curated event links
  const linksPath = join(ROOT, 'content', `.event-links-${tlId}.json`)
  let curatedLinks: Record<string, Array<{ eventId: string; matchText: string }>> = {}
  if (existsSync(linksPath)) {
    curatedLinks = JSON.parse(readFileSync(linksPath, 'utf-8'))
    const totalLinks = Object.values(curatedLinks).reduce((s, arr) => s + arr.length, 0)
    console.log(`  Curated event links: ${totalLinks} across ${Object.keys(curatedLinks).length} chapters`)
  } else {
    console.log(`  No curated event links found (${linksPath})`)
  }

  // Load curated glossary links
  const glossaryLinksPath = join(ROOT, 'content', `.glossary-links-${tlId}.json`)
  let glossaryLinks: Record<string, GlossaryLink[]> = {}
  if (existsSync(glossaryLinksPath)) {
    glossaryLinks = JSON.parse(readFileSync(glossaryLinksPath, 'utf-8'))
    const totalGlossary = Object.values(glossaryLinks).reduce((s, arr) => s + arr.length, 0)
    console.log(`  Curated glossary links: ${totalGlossary} across ${Object.keys(glossaryLinks).length} chapters`)
  }

  // Load curated cross-cultural links
  const crossLinksPath = join(ROOT, 'content', `.cross-links-${tlId}.json`)
  let curatedCrossLinks: Record<string, CrossLinkCurated[]> = {}
  if (existsSync(crossLinksPath)) {
    curatedCrossLinks = JSON.parse(readFileSync(crossLinksPath, 'utf-8'))
    const totalCross = Object.values(curatedCrossLinks).reduce((s, arr) => s + arr.length, 0)
    console.log(`  Curated cross-links: ${totalCross} across ${Object.keys(curatedCrossLinks).length} chapters`)
  }

  // Collect unique glossary slugs and enrich them
  const allGlossaryLinks = Object.values(glossaryLinks).flat()
  const glossarySlugs = [...new Set(allGlossaryLinks.map(l => l.wikiSlug).filter(Boolean))]
  const glossaryEnrichment = glossarySlugs.length > 0
    ? await enrichGlossary(glossarySlugs, forceRefresh)
    : new Map()

  // Build glossary entries keyed by slug (term comes from first link using that slug)
  const glossaryEntries: Record<string, GlossaryEntry> = {}
  for (const link of allGlossaryLinks) {
    if (glossaryEntries[link.wikiSlug]) continue
    const enriched = glossaryEnrichment.get(link.wikiSlug)
    glossaryEntries[link.wikiSlug] = {
      term: link.term,
      wikiSlug: link.wikiSlug,
      type: link.type,
      wikiExtract: enriched?.wikiExtract,
      thumbnailUrl: enriched?.thumbnailUrl,
    }
  }

  // Build category lookup for link injection
  const categoryMap = new Map(refData.events.map(e => [e.id, e.category]))

  const chapters: ParsedChapter[] = []
  const crossLinksOut: CrossLinkOut[] = []

  // Replace the first whole-word match of `matchText` in `text`, skipping any
  // positions inside existing <a>...</a> spans so we never nest anchors.
  function replaceOutsideAnchors(text: string, matchText: string, replacement: string): { result: string; replaced: boolean } {
    const parts = text.split(/(<a\b[^>]*>[\s\S]*?<\/a>)/g)
    const escaped = matchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\b(${escaped})\\b`, 'i')
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 1) continue // already an anchor — skip
      const before = parts[i]
      const after = before.replace(regex, replacement)
      if (after !== before) {
        parts[i] = after
        return { result: parts.join(''), replaced: true }
      }
    }
    return { result: text, replaced: false }
  }

  for (const ch of rawChapters) {
    // Inject curated event links into raw markdown
    let linkedBody = ch.body

    // Inject cross-cultural links first so they win over events/glossary on overlapping matches
    const chapterCross = curatedCrossLinks[String(ch.number)] ?? []
    const crossSorted = [...chapterCross].sort((a, b) => b.matchText.length - a.matchText.length)
    let crossIdx = 0
    for (const cl of crossSorted) {
      const targetMeta = tlMetaMap.get(cl.targetTl)
      if (!targetMeta) {
        console.warn(`  ⚠ cross-link ch${ch.number} → unknown targetTl: ${cl.targetTl} (skipping)`)
        continue
      }
      const targetChapterTitle = targetMeta.chapters.get(cl.targetChapter)
      if (!targetChapterTitle) {
        console.warn(`  ⚠ cross-link ch${ch.number} → ${cl.targetTl} ch${cl.targetChapter} not found (skipping)`)
        continue
      }
      const id = `cl-${ch.number}-${crossIdx++}`
      const styleAttr = `style="--cl-light:${targetMeta.colorLight};--cl-dark:${targetMeta.colorDark}"`
      const replacement = `<a class="cross-link" data-cross-id="${id}" ${styleAttr}>${cl.matchText}</a>`
      const res = replaceOutsideAnchors(linkedBody, cl.matchText, replacement)
      linkedBody = res.result
      if (res.replaced) {
        crossLinksOut.push({
          id,
          matchText: cl.matchText,
          sourceChapter: ch.number,
          targetTl: cl.targetTl,
          targetChapter: cl.targetChapter,
          targetLabel: targetMeta.label,
          targetChapterTitle,
          targetColorLight: targetMeta.colorLight,
          targetColorDark: targetMeta.colorDark,
          blurb: cl.blurb,
        })
      } else {
        console.warn(`  ⚠ cross-link ch${ch.number}: matchText "${cl.matchText}" not found in body`)
      }
    }

    const chapterLinks = curatedLinks[String(ch.number)] ?? []
    // Sort by length descending so longer matches are replaced first
    const sorted = [...chapterLinks].sort((a, b) => b.matchText.length - a.matchText.length)
    const linked = new Set<string>()
    for (const link of sorted) {
      if (linked.has(link.eventId)) continue
      if (!categoryMap.has(link.eventId)) {
        console.warn(`  ⚠ stale event link in ch${ch.number}: ${link.eventId} (skipping)`)
        continue
      }
      const cat = categoryMap.get(link.eventId) ?? 'people'
      const replacement = `<a class="event-link" data-event-id="${link.eventId}" data-category="${cat}">${link.matchText}</a>`
      const res = replaceOutsideAnchors(linkedBody, link.matchText, replacement)
      linkedBody = res.result
      if (res.replaced) linked.add(link.eventId)
    }

    // Inject glossary links (runs after events so events win where they overlap)
    const chapterGlossary = glossaryLinks[String(ch.number)] ?? []
    const glossarySorted = [...chapterGlossary].sort((a, b) => b.matchText.length - a.matchText.length)
    const glossaryLinked = new Set<string>()
    for (const link of glossarySorted) {
      if (glossaryLinked.has(link.matchText.toLowerCase())) continue
      const replacement = `<a class="glossary-link" data-wiki-slug="${link.wikiSlug}">${link.matchText}</a>`
      const res = replaceOutsideAnchors(linkedBody, link.matchText, replacement)
      linkedBody = res.result
      if (res.replaced) glossaryLinked.add(link.matchText.toLowerCase())
    }

    const html = await markdownToHtml(linkedBody)

    // Process summary bullets for this chapter (inject event + glossary links, strip markdown)
    const summaryEntry = summaries.find(s => s.chapter === ch.number)
    let summaryBullets: string[] | undefined
    if (summaryEntry?.bullets && summaryEntry.bullets.length > 0) {
      summaryBullets = []
      for (const bullet of summaryEntry.bullets) {
        let text = bullet
        // Inject cross-links first so they win on overlapping matches
        for (const cl of crossSorted) {
          const targetMeta = tlMetaMap.get(cl.targetTl)
          if (!targetMeta?.chapters.has(cl.targetChapter)) continue
          const existing = crossLinksOut.find(x => x.matchText === cl.matchText && x.sourceChapter === ch.number && x.targetTl === cl.targetTl && x.targetChapter === cl.targetChapter)
          if (!existing) continue
          const styleAttr = `style="--cl-light:${targetMeta.colorLight};--cl-dark:${targetMeta.colorDark}"`
          const replacement = `<a class="cross-link" data-cross-id="${existing.id}" ${styleAttr}>${cl.matchText}</a>`
          const res = replaceOutsideAnchors(text, cl.matchText, replacement)
          text = res.result
        }
        // Inject event links into bullet
        for (const link of sorted) {
          if (!categoryMap.has(link.eventId)) continue
          const cat = categoryMap.get(link.eventId) ?? 'people'
          const replacement = `<a class="event-link" data-event-id="${link.eventId}" data-category="${cat}">${link.matchText}</a>`
          const res = replaceOutsideAnchors(text, link.matchText, replacement)
          text = res.result
        }
        // Inject glossary links into bullet
        for (const link of glossarySorted) {
          const replacement = `<a class="glossary-link" data-wiki-slug="${link.wikiSlug}">${link.matchText}</a>`
          const res = replaceOutsideAnchors(text, link.matchText, replacement)
          text = res.result
        }
        summaryBullets.push(text)
      }
    }

    chapters.push({
      number: ch.number,
      title: ch.title,
      slug: slugify(ch.title),
      contentHtml: html,
      eventIds: Array.from(linked),
      summaryBullets,
    })
  }

  // Build a single regex of all glossary match texts for linking inside event wiki extracts
  const glossaryTermsForExtracts = allGlossaryLinks.map(l => l.matchText)
  const uniqueExtractTerms = [...new Set(glossaryTermsForExtracts)].sort((a, b) => b.length - a.length)
  function linkGlossaryInText(text: string): string {
    let result = text
    const used = new Set<string>()
    for (const term of uniqueExtractTerms) {
      const entry = allGlossaryLinks.find(l => l.matchText === term)
      if (!entry || used.has(entry.wikiSlug)) continue
      const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      const regex = new RegExp(`(?<!<[^>]*)\\b(${escaped})\\b`)
      const before = result
      result = result.replace(regex, `<a class="glossary-link" data-wiki-slug="${entry.wikiSlug}">${term}</a>`)
      if (result !== before) used.add(entry.wikiSlug)
    }
    return result
  }

  const output = {
    id: tlId,
    label: refData.label,
    accentColor: refData.accentColor ?? '#a1a1aa',
    mapCommonsFile: refData.mapCommonsFile,
    chapters: chapters.map(ch => {
      const summary = summaries.find(s => s.chapter === ch.number)
      return {
        ...ch,
        subtitle: summary?.subtitle ?? undefined,
        summary: summary?.summary ?? '',
        dateRange: summary?.dateRange ?? '',
      }
    }),
    events: refData.events.map(e => {
      const enriched = enrichmentMap.get(e.id)
      const merged: TlEvent & { wikiExtract?: string; thumbnailUrl?: string; imageCaption?: string } =
        enriched ? { ...e, ...enriched } : e
      if (merged.wikiExtract) {
        merged.wikiExtract = linkGlossaryInText(merged.wikiExtract)
      }
      if (merged.description) {
        merged.description = linkGlossaryInText(merged.description)
      }
      if (merged.details && Array.isArray(merged.details)) {
        merged.details = merged.details.map(d => ({
          ...d,
          text: d.text ? linkGlossaryInText(d.text) : d.text,
        }))
      }
      return merged
    }),
    spans: refData.spans,
    glossary: Object.values(glossaryEntries),
    crossLinks: crossLinksOut,
  }

  const outPath = join(CONTENT_DIR, `${tlId}.json`)
  writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`  → ${outPath} (${chapters.length} chapters, ${refData.events.length} events)`)

  // Emit the per-TL offline manifest: the exact list of URLs the service
  // worker should fetch + cache when the user taps "download for offline".
  // Kept minimal — just the page URL, the map WebPs that exist on disk,
  // and the unique thumbnail URLs for events + glossary. /_next/static/*
  // chunks are runtime-cached by the SW on first visit, so they don't
  // need to be in the manifest.
  const pageUrl = `/${tlId}/`
  const mapUrls: string[] = []
  for (const ch of chapters) {
    const webp = join(MAPS_DIR, tlId, `chapter-${ch.number}.webp`)
    if (existsSync(webp)) mapUrls.push(`/maps/${tlId}/chapter-${ch.number}.webp`)
  }
  const thumbSet = new Set<string>()
  for (const ev of output.events as Array<{ thumbnailUrl?: string }>) {
    if (ev.thumbnailUrl) thumbSet.add(ev.thumbnailUrl)
  }
  for (const gl of output.glossary) {
    if (gl.thumbnailUrl) thumbSet.add(gl.thumbnailUrl)
  }
  const thumbnails = Array.from(thumbSet)
  const manifest = {
    tlId,
    label: refData.label,
    pageUrl,
    maps: mapUrls,
    thumbnails,
    // urls = flat list the SW iterates — page first so it's available even
    // if thumbnail fetches fail. Thumbnails last because they're the
    // largest and the most tolerant of individual failures.
    urls: [pageUrl, ...mapUrls, ...thumbnails],
  }
  mkdirSync(OFFLINE_MANIFEST_DIR, { recursive: true })
  const manifestPath = join(OFFLINE_MANIFEST_DIR, `${tlId}.manifest.json`)
  writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))
  console.log(`  → ${manifestPath} (${mapUrls.length} maps, ${thumbnails.length} thumbnails)`)
}

async function main() {
  mkdirSync(CONTENT_DIR, { recursive: true })

  // Pass 1: collect chapter titles + labels + region for every TL so cross-links
  // can resolve targets without a second full parse.
  const tlMetaMap = new Map<string, TlMeta>()
  for (const [filename, tlId] of Object.entries(NARRATIVE_FILES)) {
    const path = join(NARRATIVES_DIR, filename)
    if (!existsSync(path)) continue
    const md = readFileSync(path, 'utf-8')
    const rawChapters = splitIntoChapters(md)
    const refData = loadReferenceData(tlId)
    const accent = getAccentColors(tlId)
    tlMetaMap.set(tlId, {
      label: refData.label,
      chapters: new Map(rawChapters.map(c => [c.number, c.title])),
      colorLight: accent.text,
      colorDark: accent.base,
    })
  }

  for (const [filename, tlId] of Object.entries(NARRATIVE_FILES)) {
    const path = join(NARRATIVES_DIR, filename)
    if (existsSync(path)) {
      await parseNarrative(filename, tlId, tlMetaMap)
    } else {
      console.warn(`Skipping ${filename}: file not found`)
    }
  }

  // ── Generate search index ──────────────────────────────────────
  console.log('Generating search index...')
  const searchIndex: { tlId: string; label: string; region: string; chapters: { number: number; title: string; sentences: string[] }[] }[] = []

  for (const [, tlId] of Object.entries(NARRATIVE_FILES)) {
    const contentPath = join(CONTENT_DIR, `${tlId}.json`)
    if (!existsSync(contentPath)) continue
    const content = JSON.parse(readFileSync(contentPath, 'utf-8'))
    if (!content.chapters || content.chapters.length === 0) continue

    // Look up region from navigator-tls data
    const { NAVIGATOR_TLS } = await import('../src/lib/navigator-tls')
    const navTl = NAVIGATOR_TLS.find((t: { id: string }) => t.id === tlId)
    if (!navTl || !navTl.hasContent) continue

    const chapters: { number: number; title: string; sentences: string[] }[] = []
    for (const ch of content.chapters) {
      // Strip HTML tags to get plain text
      const plain = (ch.contentHtml as string)
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()

      // Split into sentences (handle abbreviations reasonably)
      const sentences = plain
        .split(/(?<=[.!?])\s+(?=[A-Z""])/)
        .map(s => s.trim())
        .filter(s => s.length > 10) // skip tiny fragments

      chapters.push({ number: ch.number, title: ch.title, sentences })
    }

    searchIndex.push({ tlId, label: content.label, region: navTl.region, chapters })
  }

  const searchPath = join(ROOT, 'public', 'search-index.json')
  writeFileSync(searchPath, JSON.stringify(searchIndex))
  const sizeMB = (Buffer.byteLength(JSON.stringify(searchIndex)) / 1024 / 1024).toFixed(1)
  console.log(`  → ${searchPath} (${searchIndex.length} TLs, ${sizeMB} MB)`)

  console.log('Done!')
}

main().catch(console.error)
