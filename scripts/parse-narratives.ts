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
import { enrichEvents } from './enrich-events'

interface ParsedChapter {
  number: number
  title: string
  slug: string
  contentHtml: string
}

interface ChapterSummary {
  chapter: number
  title: string
  summary: string
  dateRange: string
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

// Map narrative filenames to TL IDs
const NARRATIVE_FILES: Record<string, string> = {
  'mesopotamia-rewrite.md': 'mesopotamia',
  'indus-valley.md': 'indus-valley',
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

async function parseNarrative(filename: string, tlId: string) {
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

  // Build category lookup for link injection
  const categoryMap = new Map(refData.events.map(e => [e.id, e.category]))

  const chapters: ParsedChapter[] = []

  for (const ch of rawChapters) {
    // Inject curated event links into raw markdown
    let linkedBody = ch.body
    const chapterLinks = curatedLinks[String(ch.number)] ?? []
    // Sort by length descending so longer matches are replaced first
    const sorted = [...chapterLinks].sort((a, b) => b.matchText.length - a.matchText.length)
    const linked = new Set<string>()
    for (const link of sorted) {
      if (linked.has(link.eventId)) continue
      const cat = categoryMap.get(link.eventId) ?? 'people'
      const escaped = link.matchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      // Only match in prose text, not inside existing HTML tags or markdown headings
      const regex = new RegExp(`(?<!<[^>]*)\\b(${escaped})\\b`, 'i')
      const replacement = `<a class="event-link" data-event-id="${link.eventId}" data-category="${cat}">${link.matchText}</a>`
      const before = linkedBody
      linkedBody = linkedBody.replace(regex, replacement)
      if (linkedBody !== before) linked.add(link.eventId)
    }

    const html = await markdownToHtml(linkedBody)

    chapters.push({
      number: ch.number,
      title: ch.title,
      slug: slugify(ch.title),
      contentHtml: html,
    })
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
        summary: summary?.summary ?? '',
        dateRange: summary?.dateRange ?? '',
        eventIds: [] as string[],
      }
    }),
    events: refData.events.map(e => {
      const enriched = enrichmentMap.get(e.id)
      return enriched ? { ...e, ...enriched } : e
    }),
    spans: refData.spans,
  }

  const outPath = join(CONTENT_DIR, `${tlId}.json`)
  writeFileSync(outPath, JSON.stringify(output, null, 2))
  console.log(`  → ${outPath} (${chapters.length} chapters, ${refData.events.length} events)`)
}

async function main() {
  mkdirSync(CONTENT_DIR, { recursive: true })

  for (const [filename, tlId] of Object.entries(NARRATIVE_FILES)) {
    const path = join(NARRATIVES_DIR, filename)
    if (existsSync(path)) {
      await parseNarrative(filename, tlId)
    } else {
      console.warn(`Skipping ${filename}: file not found`)
    }
  }

  console.log('Done!')
}

main().catch(console.error)
