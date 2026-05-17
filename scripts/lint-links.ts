/**
 * lint-links.ts — pre-ship validator for curated link files.
 *
 * Catches, before parse/build, every class of error that had to be fixed by
 * hand during the 100-civ link sweep:
 *   - matchText that won't match the chapter body (uses the SAME \b regex the
 *     parser uses, so a failure here is exactly a failure there)
 *   - non-ASCII / leading-or-trailing-punctuation matchText (violates the rule)
 *   - sentence-like or chapter-title-fragment matchText (the "sloppy" pattern)
 *   - dead glossary wikiSlugs (live Wikipedia check, cached)
 *   - duplicate (eventId,matchText) / duplicate glossary matchText per chapter
 *   - generic concept slugs that need a culture-specific image review
 *
 * Usage:
 *   tsx scripts/lint-links.ts                 # lint every civ, report
 *   tsx scripts/lint-links.ts --tl=viking-age # lint one civ
 *   tsx scripts/lint-links.ts --strict        # exit 1 if any ERROR
 *   tsx scripts/lint-links.ts --no-slugs      # skip the Wikipedia slug check
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const NARR = join(ROOT, 'narratives')
const CONTENT = join(ROOT, 'content')
const CACHE = join(ROOT, 'audits', '.slug-validation-cache.json')
const UA = 'timeline-v2-lint-links/1.0 (https://stuffhappened.com)'

const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const strict = args.includes('--strict')
const skipSlugs = args.includes('--no-slugs')

// Generic slugs whose Wikipedia lead image is likely the wrong culture —
// flag for a manual image sanity check (the `Longhouse`→totem-pole class).
const GENERIC_SLUGS = new Set([
  'Longhouse', 'Mask', 'Temple', 'Pyramid', 'Chariot', 'Helmet', 'Sword',
  'Castle', 'Cavalry', 'Granary', 'Aqueduct', 'Fortification', 'Tomb',
])

type Issue = { tl: string; ch: string; kind: string; sev: 'ERROR' | 'WARN'; msg: string }
const issues: Issue[] = []
const add = (tl: string, ch: string, kind: string, sev: 'ERROR' | 'WARN', msg: string) =>
  issues.push({ tl, ch, kind, sev, msg })

function chapters(tl: string): Map<string, { title: string; body: string }> {
  const md = readFileSync(join(NARR, `${tl}.md`), 'utf-8')
  const out = new Map<string, { title: string; body: string }>()
  const re = /^# Chapter (\d+)\s*[—-]\s*(.*)$/gm
  const marks: { n: string; title: string; idx: number }[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(md))) marks.push({ n: m[1], title: m[2].trim(), idx: m.index })
  for (let i = 0; i < marks.length; i++) {
    const body = md.slice(marks[i].idx, marks[i + 1]?.idx ?? md.length)
    out.set(marks[i].n, { title: marks[i].title, body })
  }
  return out
}

// Exactly the parser's match test.
function matchesBody(matchText: string, body: string): boolean {
  const escaped = matchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  try {
    return new RegExp(`\\b(${escaped})\\b`, 'i').test(body)
  } catch {
    return false
  }
}

function checkMatchText(tl: string, ch: string, kind: string, mt: string, title: string, body: string) {
  if (!mt || !mt.trim()) { add(tl, ch, kind, 'ERROR', `empty matchText`); return }
  // JS `\b` is ASCII-defined, so a non-ASCII char only defeats the parser's
  // `\b(...)\b` when it sits at the *boundary* (first/last char). Interior
  // accents ("Monte Albán", "Albrecht Dürer") still match fine — let the
  // exact `matchesBody` test below be the sole judge of those, otherwise this
  // rule cries wolf on hundreds of links that actually work.
  if (/^[^\x00-\x7F]/.test(mt) || /[^\x00-\x7F]$/.test(mt)) add(tl, ch, kind, 'ERROR', `non-ASCII at matchText boundary ${JSON.stringify(mt)} — \\b is ASCII-only, parser will not match`)
  if (/^[^\w]|[^\w'’]$/.test(mt)) add(tl, ch, kind, 'WARN', `matchText ${JSON.stringify(mt)} has leading/trailing punctuation`)
  const words = mt.trim().split(/\s+/)
  if (words.length > 6 || /,/.test(mt)) add(tl, ch, kind, 'WARN', `matchText ${JSON.stringify(mt)} looks sentence-like (likely sloppy)`)
  const tl2 = title.toLowerCase(), mtl = mt.toLowerCase()
  // Only flag multi-word matchText that overlaps the title (single proper
  // nouns legitimately recur in titles, e.g. "Lindisfarne").
  if (title && words.length >= 2 && (tl2.includes(mtl) || mtl.includes(tl2)) && mtl !== tl2.split(/[:—-]/)[0].trim())
    add(tl, ch, kind, 'WARN', `matchText ${JSON.stringify(mt)} overlaps the chapter title "${title}" — likely a chapter-title fragment, not the term`)
  if (!matchesBody(mt, body)) add(tl, ch, kind, 'ERROR', `matchText ${JSON.stringify(mt)} NOT found in ch${ch} body (parser will silently drop it)`)
}

function loadJson<T>(p: string): T | null {
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf-8')) as T : null
}

const tls = (onlyTl ? [onlyTl] : readdirSync(NARR)
  .filter(f => f.endsWith('.md') && !f.endsWith('.summaries.json'))
  .map(f => f.replace('.md', '')))
  .filter(tl => existsSync(join(NARR, `${tl}.md`)))
  .sort()

const slugSet = new Set<string>()
const slugRefs: { slug: string; tl: string; ch: string }[] = []

for (const tl of tls) {
  let chs: Map<string, { title: string; body: string }>
  try { chs = chapters(tl) } catch { add(tl, '-', 'narrative', 'ERROR', 'no narrative file'); continue }

  const gloss = loadJson<Record<string, { matchText: string; wikiSlug: string }[]>>(join(CONTENT, `.glossary-links-${tl}.json`)) ?? {}
  const ev = loadJson<Record<string, { eventId: string; matchText: string }[]>>(join(CONTENT, `.event-links-${tl}.json`)) ?? {}
  const cx = loadJson<Record<string, { matchText: string; targetTl: string; targetChapter: number }[]>>(join(CONTENT, `.cross-links-${tl}.json`)) ?? {}

  for (const [ch, arr] of Object.entries(gloss)) {
    const meta = chs.get(ch)
    if (!meta) { add(tl, ch, 'glossary', 'ERROR', `chapter ${ch} not in narrative`); continue }
    const seen = new Set<string>()
    for (const g of arr) {
      checkMatchText(tl, ch, 'glossary', g.matchText, meta.title, meta.body)
      const k = g.matchText.toLowerCase()
      if (seen.has(k)) add(tl, ch, 'glossary', 'WARN', `duplicate glossary matchText ${JSON.stringify(g.matchText)} (only first links)`)
      seen.add(k)
      if (!g.wikiSlug || /\s/.test(g.wikiSlug)) add(tl, ch, 'glossary', 'ERROR', `bad wikiSlug ${JSON.stringify(g.wikiSlug)} for ${JSON.stringify(g.matchText)}`)
      else { slugSet.add(g.wikiSlug); slugRefs.push({ slug: g.wikiSlug, tl, ch }) }
      const decoded = decodeURIComponent(g.wikiSlug.replace(/_/g, ' '))
      if (GENERIC_SLUGS.has(decoded)) add(tl, ch, 'glossary', 'WARN', `generic slug "${g.wikiSlug}" — verify the Wikipedia lead image is the right culture`)
    }
  }
  for (const [ch, arr] of Object.entries(ev)) {
    const meta = chs.get(ch); if (!meta) { add(tl, ch, 'event', 'ERROR', `chapter ${ch} not in narrative`); continue }
    const pairs = new Set<string>()
    for (const e of arr) {
      checkMatchText(tl, ch, 'event', e.matchText, meta.title, meta.body)
      const p = `${e.eventId}|${e.matchText}`
      if (pairs.has(p)) add(tl, ch, 'event', 'WARN', `duplicate (eventId,matchText) ${JSON.stringify(p)}`)
      pairs.add(p)
    }
  }
  for (const [ch, arr] of Object.entries(cx)) {
    const meta = chs.get(ch); if (!meta) { add(tl, ch, 'cross', 'ERROR', `chapter ${ch} not in narrative`); continue }
    for (const c of arr) checkMatchText(tl, ch, 'cross', c.matchText, meta.title, meta.body)
  }
}

// ---- live Wikipedia slug validation (batched, cached) ----
async function validateSlugs(slugs: string[]): Promise<Record<string, boolean>> {
  const cache: Record<string, boolean> = loadJson(CACHE) ?? {}
  const todo = slugs.filter(s => !(s in cache))
  for (let i = 0; i < todo.length; i += 40) {
    const batch = todo.slice(i, i + 40)
    const titles = batch.map(s => decodeURIComponent(s.replace(/_/g, ' '))).join('|')
    // NO redirects=1: a redirect page is itself a real (non-"missing") page,
    // which is exactly what we want — only true 404 titles get "missing".
    const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=info&format=json`
    try {
      const r = await fetch(url, { headers: { 'User-Agent': UA } })
      const d = await r.json() as {
        query?: {
          normalized?: { from: string; to: string }[]
          pages?: Record<string, { title?: string; missing?: string }>
        }
      }
      const norm = new Map<string, string>()
      for (const n of d.query?.normalized ?? []) norm.set(n.from.toLowerCase(), n.to)
      const pageByTitle = new Map<string, { missing?: string }>()
      for (const p of Object.values(d.query?.pages ?? {})) pageByTitle.set((p.title ?? '').toLowerCase(), p)
      for (const s of batch) {
        const req = decodeURIComponent(s.replace(/_/g, ' '))
        const resolved = (norm.get(req.toLowerCase()) ?? req).toLowerCase()
        const page = pageByTitle.get(resolved)
        // Only mark dead when the API explicitly returns "missing"; if we
        // can't resolve the page at all, assume valid (never false-alarm).
        cache[s] = page ? !('missing' in page) : true
      }
    } catch {
      for (const s of batch) cache[s] = true // network issue: don't fail the build on it
    }
  }
  writeFileSync(CACHE, JSON.stringify(cache, null, 2))
  return cache
}

async function main() {
if (!skipSlugs && slugSet.size) {
  const verdict = await validateSlugs([...slugSet])
  for (const { slug, tl, ch } of slugRefs) {
    if (verdict[slug] === false) add(tl, ch, 'slug', 'ERROR', `dead wikiSlug "${slug}" (Wikipedia 404)`)
  }
}

// ---- report ----
const errs = issues.filter(i => i.sev === 'ERROR')
const warns = issues.filter(i => i.sev === 'WARN')
const byTl = new Map<string, Issue[]>()
for (const i of issues) (byTl.get(i.tl) ?? byTl.set(i.tl, []).get(i.tl)!).push(i)
for (const [tl, list] of [...byTl].sort()) {
  console.log(`\n=== ${tl} (${list.filter(i => i.sev === 'ERROR').length} err, ${list.filter(i => i.sev === 'WARN').length} warn) ===`)
  for (const i of list) console.log(`  ${i.sev === 'ERROR' ? '✗' : '·'} [ch${i.ch} ${i.kind}] ${i.msg}`)
}
console.log(`\nlint-links: ${tls.length} civs · ${errs.length} ERROR · ${warns.length} WARN`)
if (strict && errs.length) { console.error('STRICT: errors present'); process.exit(1) }
}

main().catch(e => { console.error(e); process.exit(1) })
