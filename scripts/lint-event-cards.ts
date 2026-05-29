/**
 * lint-event-cards.ts — event-popup "explore further" 2-part card gate (G14).
 *
 * The product bar (user-locked 2026-05-29, celtic-cultures ch1 = reference pilot):
 * every event popup is a TWO-PART "explore further" card, never a bare wiki
 * sentence —
 *   (a) `description`  = a tight house-voice what-it-is (define + hook), AND
 *   (b) `details`      = an array containing one entry whose label is
 *                        "Explore further" with 2–4 sentences that ADD something
 *                        the narrative does not.
 * Both live on the event in reference-data/{tl}.json. This gate checks the SHAPE
 * (presence + non-emptiness), NOT truth — born-verification of the "explore
 * further" facts is a creation-time authoring step (CLAUDE step 0), and the photo
 * half is enforced separately by `fix-links --strict` (CLAUDE step 13).
 *
 * Scope = events the reader actually sees: the eventIds linked into a chapter via
 * content/.event-links-{tl}.json (same "what the reader gets" basis as
 * lint-density). Unused pool events are not gated.
 *
 * Legacy civs are grandfathered via audits/event-card-baseline.json (a flat list
 * of tlIds not yet swept) so this gate does NOT break the existing corpus build —
 * same pattern as density / link-coverage / intro baselines. Any civ NOT in the
 * baseline — every new civ, and every civ the sweep finishes — is held to 100%
 * with zero tolerance.
 *
 * Usage:
 *   tsx scripts/lint-event-cards.ts                  # report every civ
 *   tsx scripts/lint-event-cards.ts --tl=han-dynasty
 *   tsx scripts/lint-event-cards.ts --strict         # exit 1 on non-grandfathered gap
 *   tsx scripts/lint-event-cards.ts --write-baseline # snapshot civs not yet full
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const CONTENT = join(ROOT, 'content')
const REFDATA = join(ROOT, 'reference-data')
const BASELINE = join(ROOT, 'audits', 'event-card-baseline.json')

const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const strict = args.includes('--strict')
const writeBaseline = args.includes('--write-baseline')

// Grandfathered tlIds whose events predate this gate. A civ here is downgraded
// ERROR→WARN. New civs (and swept civs) never appear here.
const baseline: string[] = existsSync(BASELINE)
  ? JSON.parse(readFileSync(BASELINE, 'utf-8'))
  : []
const grandfathered = new Set(baseline)

type RefEvent = { id?: string; description?: string; details?: { label?: string; text?: string }[] }

function refEvents(tl: string): Map<string, RefEvent> {
  const p = join(REFDATA, `${tl}.json`)
  if (!existsSync(p)) return new Map()
  const d = JSON.parse(readFileSync(p, 'utf-8'))
  const evs: RefEvent[] = d.events ?? (d.spans ? d.spans.flatMap((s: any) => s.events ?? []) : [])
  return new Map(evs.filter(e => e.id).map(e => [e.id!, e]))
}

function surfacedIds(tl: string): Set<string> {
  const p = join(CONTENT, `.event-links-${tl}.json`)
  if (!existsSync(p)) return new Set()
  const el = JSON.parse(readFileSync(p, 'utf-8')) as Record<string, { eventId?: string }[]>
  const ids = new Set<string>()
  for (const ch of Object.keys(el)) for (const e of el[ch]) if (e.eventId) ids.add(e.eventId)
  return ids
}

function hasExploreFurther(e: RefEvent): boolean {
  return Array.isArray(e.details) &&
    e.details.some(d => /explore further/i.test(d.label ?? '') && (d.text ?? '').trim().length > 0)
}

const tls = (onlyTl ? [onlyTl] : readdirSync(CONTENT)
  .filter(f => /^\.event-links-.+\.json$/.test(f))
  .map(f => f.replace(/^\.event-links-/, '').replace(/\.json$/, '')))
  .sort()

type Gap = { tl: string; reason: 'no-card' | 'no-description' | 'no-explore-further' | 'missing-event'; id: string }
const errSnapshot = new Set<string>()
let errCount = 0
let warnCount = 0
const perCivGaps: Gap[] = []

for (const tl of tls) {
  const ids = surfacedIds(tl)
  if (!ids.size) continue
  const byId = refEvents(tl)
  const gaps: Gap[] = []
  for (const id of ids) {
    const e = byId.get(id)
    if (!e) { gaps.push({ tl, reason: 'missing-event', id }); continue }
    const hasDesc = !!(e.description && e.description.trim())
    const hasEF = hasExploreFurther(e)
    if (!hasDesc && !hasEF) gaps.push({ tl, reason: 'no-card', id })
    else if (!hasDesc) gaps.push({ tl, reason: 'no-description', id })
    else if (!hasEF) gaps.push({ tl, reason: 'no-explore-further', id })
  }
  const isGf = grandfathered.has(tl)
  if (gaps.length) {
    if (isGf) warnCount += gaps.length
    else { errCount += gaps.length; perCivGaps.push(...gaps) }
    errSnapshot.add(tl) // any gap → not yet full → belongs in the snapshot
  }
  const tag = gaps.length ? (isGf ? `· ${gaps.length} grandfathered` : `· ✗ ${gaps.length} NEW`) : '· ✓ full'
  console.log(`${tl}: ${ids.size - gaps.length}/${ids.size} events carry the 2-part card ${tag}`)
}

if (perCivGaps.length) {
  console.log('')
  const byTl: Record<string, Gap[]> = {}
  for (const g of perCivGaps) (byTl[g.tl] ??= []).push(g)
  for (const tl of Object.keys(byTl)) {
    console.log(`  ✗ ${tl}: ${byTl[tl].length} surfaced event(s) without a complete 2-part card`)
    for (const g of byTl[tl].slice(0, 5)) console.log(`      ${g.id} (${g.reason})`)
    if (byTl[tl].length > 5) console.log(`      …and ${byTl[tl].length - 5} more`)
  }
}

console.log(`\nlint-event-cards: ${tls.length} civs · ${errCount} NEW gap(s) · ${warnCount} grandfathered`)

if (writeBaseline) {
  writeFileSync(BASELINE, JSON.stringify([...errSnapshot].sort(), null, 0) + '\n')
  console.log(`wrote ${BASELINE} (${errSnapshot.size} grandfathered civs not yet swept)`)
}

if (strict && errCount > 0) { console.error('STRICT: non-grandfathered event-card gaps present'); process.exit(1) }
