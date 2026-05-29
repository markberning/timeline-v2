/**
 * lint-event-photos.ts — event-popup photo-coverage gate (G15).
 *
 * Carthage shipped with chapters that were 20–60% blank because the photo pass
 * over-rejected: it left an event imageless whenever the subject had "no
 * surviving portrait" or "only a map" — instead of falling back to a
 * REPRESENTATIVE born-verified artifact (an era coin, a Punic object, the
 * relevant site). Born-verified doctrine bars WRONG images, not representative
 * ones; a mostly-blank chapter is the worse failure. This gate makes a sparse
 * chapter fail the ship gate so the recovery (CLAUDE step 13 preference order)
 * actually happens.
 *
 * Coverage = of the events SURFACED in a chapter (its eventIds in the parsed
 * content), the fraction with a resolved popup image (thumbnailUrl — i.e. a
 * commonsFile or a real wiki page image; rejections in .image-rejections.json
 * count as no-image, which is the point). A chapter below FLOOR is a gap.
 *
 * Reads the PARSED content/{tl}.json (what the reader actually gets), so it runs
 * AFTER parse — same position as ship-check. Legacy civs are grandfathered via
 * audits/event-photo-baseline.json (a flat list of tlIds not yet photo-swept);
 * a civ NOT in the baseline — every new civ and every swept civ — is held to the
 * floor with zero tolerance. Same model as density / cards / intros.
 *
 * Usage:
 *   tsx scripts/lint-event-photos.ts                  # report every civ
 *   tsx scripts/lint-event-photos.ts --tl=carthage
 *   tsx scripts/lint-event-photos.ts --strict         # exit 1 on non-grandfathered thin chapter
 *   tsx scripts/lint-event-photos.ts --write-baseline # snapshot civs with a thin chapter
 *   tsx scripts/lint-event-photos.ts --floor=70       # override the per-chapter floor (default 70)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const CONTENT = join(ROOT, 'content')
const BASELINE = join(ROOT, 'audits', 'event-photo-baseline.json')

const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const strict = args.includes('--strict')
const writeBaseline = args.includes('--write-baseline')
const FLOOR = Number(args.find(a => a.startsWith('--floor='))?.slice(8) ?? 70) // % of a chapter's surfaced events that must carry an image

const baseline: string[] = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, 'utf-8')) : []
const grandfathered = new Set(baseline)

type Chapter = { number: number; title?: string; eventIds?: string[] }
type Civ = { chapters?: Chapter[]; events?: { id: string; thumbnailUrl?: string }[] }

const tls = (onlyTl ? [onlyTl] : readdirSync(CONTENT)
  .filter(f => /^[a-z][^.]*\.json$/.test(f))      // content/{tl}.json (not the .dot curated files)
  .map(f => f.replace(/\.json$/, '')))
  .sort()

type ThinChapter = { tl: string; ch: number; have: number; total: number; pct: number }
const errSnapshot = new Set<string>()
let errCount = 0
let warnCount = 0
const thin: ThinChapter[] = []

for (const tl of tls) {
  const p = join(CONTENT, `${tl}.json`)
  if (!existsSync(p)) continue
  let d: Civ
  try { d = JSON.parse(readFileSync(p, 'utf-8')) } catch { continue }
  if (!d.chapters?.length || !d.events) continue
  const hasImg = new Map((d.events).map(e => [e.id, !!e.thumbnailUrl]))
  const isGf = grandfathered.has(tl)
  let civThin = 0
  let worst = 100
  for (const ch of d.chapters) {
    const ids = ch.eventIds ?? []
    if (!ids.length) continue
    const have = ids.filter(id => hasImg.get(id)).length
    const pct = Math.round((100 * have) / ids.length)
    worst = Math.min(worst, pct)
    if (pct < FLOOR) {
      thin.push({ tl, ch: ch.number, have, total: ids.length, pct })
      civThin++
      errSnapshot.add(tl)
      isGf ? warnCount++ : errCount++
    }
  }
  const tag = civThin ? (isGf ? `· ${civThin} thin (grandfathered)` : `· ✗ ${civThin} thin chapter(s)`) : '· ✓'
  console.log(`${tl}: worst chapter ${worst}% ${tag}`)
}

if (thin.length) {
  console.log('')
  for (const t of thin.filter(t => !grandfathered.has(t.tl)))
    console.log(`  ✗ ${t.tl} ch${t.ch}: only ${t.have}/${t.total} events have a photo (${t.pct}% < ${FLOOR}%)`)
}

console.log(`\nlint-event-photos: ${tls.length} civs · floor ${FLOOR}% · ${errCount} NEW thin chapter(s) · ${warnCount} grandfathered`)

if (writeBaseline) {
  writeFileSync(BASELINE, JSON.stringify([...errSnapshot].sort(), null, 0) + '\n')
  console.log(`wrote ${BASELINE} (${errSnapshot.size} grandfathered civs with a thin chapter)`)
}

if (strict && errCount > 0) { console.error('STRICT: non-grandfathered thin photo chapters present'); process.exit(1) }
