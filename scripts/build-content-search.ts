// Merge WAR + ART prose into the corpus search index.
//
// War content (46 battle narratives + Off-the-Battlefield themes + How-the-War-
// Was-Fought chapters) is hand-authored TSX `NARR` Records rendered by
// <BattleSectionReader>; art content is structured data in src/lib/art-content.ts.
// Neither runs through the civ markdown pipeline, so neither was searchable. The
// civ index is built by parse-narratives.ts from content/*.json; this script runs
// AFTER it and appends:
//   • type:'war' — AST-parsed from every file importing BattleSectionReader
//   • type:'art' — imported from the ART_*_CONTENT registries, prose harvested
// to public/search-index.json.
//
// Idempotent: strips any prior non-civ entries before appending, so it can run
// repeatedly (chained after every `npm run parse`). Music has no real content yet.
//
// See audits/war-pilot-civil-war.md (reader-engine note) for why war/art live
// outside the civ pipeline.

import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'

const ROOT = process.cwd()
const WAR_ROOT = join(ROOT, 'src/app/war-civil-war')
const INDEX_PATH = join(ROOT, 'public/search-index.json')

// group (path segment after /war-civil-war) → accent colour + whether its
// sections are their own routes (battles: /<slug>/s/<id>) or one page (themes).
const GROUPS: Record<string, { color: string; sectioned: boolean; label: string }> = {
  eastern: { color: '#7c3aed', sectioned: true, label: 'Eastern Theatre' },
  western: { color: '#1d4ed8', sectioned: true, label: 'Western Theatre' },
  'trans-mississippi': { color: '#d97706', sectioned: true, label: 'Trans-Mississippi' },
  naval: { color: '#b44d3b', sectioned: true, label: 'Naval & Coastal' },
  'off-the-battlefield': { color: '#047857', sectioned: false, label: 'Off the Battlefield' },
  'how-the-war-was-fought': { color: '#8a7a66', sectioned: false, label: 'How the War Was Fought' },
}

// Prose-bearing keys inside a section / block / meanwhile object.
const PROSE_KEYS = new Set(['p', 'h', 'cap', 'body'])

// Prose-bearing keys anywhere in the ART content objects (everything else —
// ids, colours, coords, image urls, years, prices — is skipped).
const ART_ACCENT = '#7c3aed'
const ART_PROSE_KEYS = new Set([
  'hook', 'hookLong', 'blurb', 'note', 'detail', 'summary', 'intro', 'body', 'prose',
  'quotes', 'motto', 'eyebrow', 'title', 'influenceSummary', 'where', 'label', 'caption',
  'cap', 'author', 'dateLabel', 'name', 'artist', 'shortName', 'medium', 'location', 'role',
])

interface Chapter { number: number; title: string; sentences: string[]; sectionId?: string }
interface Entry { tlId: string; label: string; region: string; color: string; type: 'war' | 'art' | 'philosophy'; theatre: string; href: string; chapters: Chapter[] }

function walkFiles(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walkFiles(p, out)
    else if (name.endsWith('.tsx')) out.push(p)
  }
  return out
}

// Pull the readable text out of a string / template literal node.
function literalText(node: ts.Node): string | null {
  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) return node.text
  if (ts.isTemplateExpression(node)) {
    // concatenate the literal spans; drop ${...} substitutions (rare in prose)
    let s = node.head.text
    for (const span of node.templateSpans) s += ' ' + span.literal.text
    return s
  }
  return null
}

// Strip the inline markdown the reader supports: [text](href) → text,
// **bold**/*italic* markers, collapse whitespace.
function clean(raw: string): string {
  return raw
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim()
}

function toSentences(text: string): string[] {
  return clean(text)
    .split(/(?<=[.!?])\s+(?=[A-Z"“])/)
    .map(s => s.trim())
    .filter(s => s.length > 10)
}

// Get a named string property's text from an object literal.
function propText(obj: ts.ObjectLiteralExpression, key: string): string | null {
  for (const pr of obj.properties) {
    if (ts.isPropertyAssignment(pr) && pr.name && (ts.isIdentifier(pr.name) || ts.isStringLiteral(pr.name)) && pr.name.text === key) {
      return literalText(pr.initializer)
    }
  }
  return null
}

// Collect prose strings from a block/meanwhile object (its p/h/cap/body values).
function proseFromObject(obj: ts.ObjectLiteralExpression): string[] {
  const out: string[] = []
  for (const pr of obj.properties) {
    if (ts.isPropertyAssignment(pr) && pr.name && (ts.isIdentifier(pr.name) || ts.isStringLiteral(pr.name)) && PROSE_KEYS.has(pr.name.text)) {
      const t = literalText(pr.initializer)
      if (t) out.push(t)
    }
  }
  return out
}

// Find the NARR object literal: a variable whose initializer is an object whose
// property values are section objects (each carrying a `blocks` array).
function findNarr(sf: ts.SourceFile): ts.ObjectLiteralExpression | null {
  let found: ts.ObjectLiteralExpression | null = null
  const visit = (node: ts.Node) => {
    if (found) return
    if (ts.isVariableDeclaration(node) && node.initializer && ts.isObjectLiteralExpression(node.initializer)) {
      const obj = node.initializer
      const looksLikeNarr = obj.properties.some(pr =>
        ts.isPropertyAssignment(pr) && ts.isObjectLiteralExpression(pr.initializer) &&
        pr.initializer.properties.some(p2 => ts.isPropertyAssignment(p2) && p2.name && ts.isIdentifier(p2.name) && p2.name.text === 'blocks'))
      if (looksLikeNarr) { found = obj; return }
    }
    ts.forEachChild(node, visit)
  }
  visit(sf)
  return found
}

function extractSections(narr: ts.ObjectLiteralExpression): { id: string; title: string; sentences: string[] }[] {
  const sections: { id: string; title: string; sentences: string[] }[] = []
  for (const pr of narr.properties) {
    if (!ts.isPropertyAssignment(pr) || !ts.isObjectLiteralExpression(pr.initializer)) continue
    if (!(pr.name && (ts.isIdentifier(pr.name) || ts.isStringLiteral(pr.name)))) continue
    const id = pr.name.text
    const sec = pr.initializer
    const title = clean(propText(sec, 'title') ?? id)
    const eyebrow = propText(sec, 'eyebrow')
    const parts: string[] = []
    if (eyebrow) parts.push(clean(eyebrow))
    // blocks: [{ p|h|cap }]
    for (const p of sec.properties) {
      if (ts.isPropertyAssignment(p) && p.name && ts.isIdentifier(p.name) && p.name.text === 'blocks' && ts.isArrayLiteralExpression(p.initializer)) {
        for (const el of p.initializer.elements) if (ts.isObjectLiteralExpression(el)) parts.push(...proseFromObject(el))
      }
      // meanwhile: { title, body }
      if (ts.isPropertyAssignment(p) && p.name && ts.isIdentifier(p.name) && p.name.text === 'meanwhile' && ts.isObjectLiteralExpression(p.initializer)) {
        parts.push(...proseFromObject(p.initializer))
      }
    }
    const sentences = parts.flatMap(toSentences)
    if (sentences.length) sections.push({ id, title, sentences })
  }
  return sections
}

// Recursively pull prose strings out of an ART content object: collect any
// string whose immediate key is in ART_PROSE_KEYS; recurse through everything
// else (objects + arrays) so nested sections/manifesto/whatChanged/lineage are
// reached. Arrays inherit their parent key so `prose: [...]`/`quotes: [...]`
// string members are collected.
function harvestArt(node: unknown, keyHint: string, out: string[]): void {
  if (typeof node === 'string') { if (ART_PROSE_KEYS.has(keyHint)) out.push(node); return }
  if (Array.isArray(node)) { for (const el of node) harvestArt(el, keyHint, out); return }
  if (node && typeof node === 'object') { for (const [k, v] of Object.entries(node)) harvestArt(v, k, out); return }
}

async function artEntries(): Promise<Entry[]> {
  const { ART_ERA_CONTENT, ART_MOVEMENT_CONTENT, ART_WORK_CONTENT, ART_ARTIST_CONTENT } =
    await import('../src/lib/art-content')
  const out: Entry[] = []
  const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  const push = (obj: any, href: string, theatre: string, chapterTitle: string) => {
    const strings: string[] = []
    harvestArt(obj, '', strings)
    const sentences = strings.flatMap(toSentences)
    if (!sentences.length) return
    out.push({
      tlId: `art-${href.replace(/\//g, '-').replace(/^-/, '')}`,
      label: obj.name ?? obj.id, region: 'art', color: ART_ACCENT, type: 'art',
      theatre, href, chapters: [{ number: 1, title: chapterTitle, sentences }],
    })
  }

  for (const e of Object.values(ART_ERA_CONTENT) as any[]) push(e, `/art/${e.id}`, 'Western Art · Era', e.range ?? '')
  for (const m of Object.values(ART_MOVEMENT_CONTENT) as any[]) push(m, `/art/${m.eraId}/${m.id}`, 'Western Art · Movement', m.range ?? '')
  for (const w of Object.values(ART_WORK_CONTENT) as any[]) push(w, `/art/${w.eraId}/${w.movementId}/${w.id}`, `Western Art · ${cap(w.movement ?? 'Work')}`, [w.artist, w.year].filter(Boolean).join(' · '))
  for (const a of Object.values(ART_ARTIST_CONTENT) as any[]) push(a, `/art/artist/${a.id}`, 'Western Art · Artist', a.years ?? '')
  return out
}

const PHI_ACCENT = '#a08423'

async function philosophyEntries(): Promise<Entry[]> {
  const greeksModule = await import('../src/app/philosophy/greeks/narrative')
  type PhiNarr = typeof greeksModule.GREEKS
  type PhiChapter = PhiNarr['chapters'][number]
  type PhiBlock = PhiChapter['blocks'][number]

  const { GREEKS } = greeksModule
  const { FAITH_REASON } = await import('../src/app/philosophy/faith-reason/narrative')
  const { RATIONALISTS_EMPIRICISTS } = await import('../src/app/philosophy/rationalists-empiricists/narrative')
  const { KANT_GERMANS } = await import('../src/app/philosophy/kant-germans/narrative')
  const { NINETEENTH_CENTURY } = await import('../src/app/philosophy/nineteenth-century/narrative')

  const eras: { eraId: string; narr: PhiNarr }[] = [
    { eraId: 'greeks', narr: GREEKS },
    { eraId: 'faith-reason', narr: FAITH_REASON },
    { eraId: 'rationalists-empiricists', narr: RATIONALISTS_EMPIRICISTS },
    { eraId: 'kant-germans', narr: KANT_GERMANS },
    { eraId: 'nineteenth-century', narr: NINETEENTH_CENTURY },
  ]

  const out: Entry[] = []
  for (const { eraId, narr } of eras) {
    const chapters: Chapter[] = narr.chapters.map((ch: PhiChapter) => {
      const sentences: string[] = ch.blocks
        .filter((b: PhiBlock): b is { p: string } => 'p' in b)
        .flatMap((b: { p: string }) => toSentences(b.p))
      return { number: ch.num, title: ch.title, sentences }
    })
    const totalSentences = chapters.reduce((n: number, c: Chapter) => n + c.sentences.length, 0)
    if (!totalSentences) continue
    out.push({
      tlId: `philosophy-${eraId}`,
      label: narr.title,
      region: '',
      color: PHI_ACCENT,
      type: 'philosophy',
      theatre: 'Philosophy',
      href: `/philosophy/${eraId}`,
      chapters,
    })
  }
  return out
}

async function main() {
  const files = walkFiles(WAR_ROOT).filter(f => readFileSync(f, 'utf-8').includes('import { BattleSectionReader'))
  const entries: Entry[] = []

  for (const file of files) {
    const src = readFileSync(file, 'utf-8')
    const rel = file.slice(WAR_ROOT.length + 1)
    const seg = rel.split('/')
    const group = seg[0]
    const slug = seg[1]
    const meta = GROUPS[group]
    if (!meta || !slug || slug === 'page.tsx') continue
    const nameMatch = src.match(/battleName="([^"]+)"/)
    const label = nameMatch ? nameMatch[1] : slug
    const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    const narr = findNarr(sf)
    if (!narr) { console.warn(`  [war-search] no NARR found in ${rel}`); continue }
    const sections = extractSections(narr)
    if (!sections.length) continue

    const base = `/war-civil-war/${group}/${slug}`
    const chapters: Chapter[] = sections.map((s, i) => ({
      number: i + 1,
      title: s.title,
      sentences: s.sentences,
      ...(meta.sectioned ? { sectionId: s.id } : {}),
    }))
    entries.push({ tlId: `war-${group}-${slug}`, label, region: group, color: meta.color, type: 'war', theatre: meta.label, href: base, chapters })
  }

  const art = await artEntries()
  const philosophy = await philosophyEntries()

  // Merge: keep civ entries (no `type`), drop any prior war/art/philosophy, append fresh.
  const existing: any[] = existsSync(INDEX_PATH) ? JSON.parse(readFileSync(INDEX_PATH, 'utf-8')) : []
  const civ = existing.filter(e => !e.type)
  const merged = [...civ, ...entries, ...art, ...philosophy]
  writeFileSync(INDEX_PATH, JSON.stringify(merged))
  const count = (arr: Entry[]) => arr.reduce((n, e) => n + e.chapters.reduce((m, c) => m + c.sentences.length, 0), 0)
  const sizeMB = (Buffer.byteLength(JSON.stringify(merged)) / 1024 / 1024).toFixed(1)
  console.log(`[content-search] +${entries.length} war (${count(entries)} sent.) +${art.length} art (${count(art)} sent.) +${philosophy.length} philosophy (${count(philosophy)} sent.) → ${INDEX_PATH} (${civ.length} civ + ${entries.length} war + ${art.length} art + ${philosophy.length} philosophy, ${sizeMB} MB)`)
}

main()
