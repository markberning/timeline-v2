// Merge WAR prose into the corpus search index.
//
// War content (46 battle narratives + the Off-the-Battlefield themes + the
// How-the-War-Was-Fought chapters) is NOT markdown — it's hand-authored TSX
// `NARR` Records rendered by <BattleSectionReader>. The civ search index is
// built by parse-narratives.ts from content/*.json; this script runs AFTER it,
// AST-parses every war file that imports BattleSectionReader, extracts the
// prose, and appends `type:'war'` entries to public/search-index.json.
//
// Idempotent: it strips any prior non-civ entries before appending, so it can
// run repeatedly (it's chained after every `npm run parse`).
//
// See audits/war-pilot-civil-war.md (reader-engine note) for why war lives
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

interface Chapter { number: number; title: string; sentences: string[]; sectionId?: string }
interface Entry { tlId: string; label: string; region: string; color: string; type: 'war'; theatre: string; href: string; chapters: Chapter[] }

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

function main() {
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

  // Merge: keep civ entries (no `type`), drop any prior war/art, append fresh war.
  const existing: any[] = existsSync(INDEX_PATH) ? JSON.parse(readFileSync(INDEX_PATH, 'utf-8')) : []
  const civ = existing.filter(e => !e.type)
  const merged = [...civ, ...entries]
  writeFileSync(INDEX_PATH, JSON.stringify(merged))
  const sentences = entries.reduce((n, e) => n + e.chapters.reduce((m, c) => m + c.sentences.length, 0), 0)
  const sizeMB = (Buffer.byteLength(JSON.stringify(merged)) / 1024 / 1024).toFixed(1)
  console.log(`[war-search] +${entries.length} war entries (${sentences} sentences) → ${INDEX_PATH} (${civ.length} civ + ${entries.length} war, ${sizeMB} MB)`)
}

main()
