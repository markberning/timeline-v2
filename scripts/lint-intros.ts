/**
 * lint-intros.ts — chapter-intro presence + anti-density gate.
 *
 * Chapter intros (narratives/{tl}.intros.json) are the forward-looking
 * framing card shown before each chapter's prose. The whole point is to
 * REDUCE reader overwhelm, so the gate's load-bearing rule is the inverse
 * of a length floor: an intro that grows into a second wall of text
 * defeats its own purpose. The TOTAL word budget cap is therefore the
 * primary invariant — the intro must stay lighter than the chapter.
 *
 * Per chapter the sidecar must provide:
 *   - bridge   "The story so far" — a real recap: how we got here, the
 *              major players before this chapter, what the prior arc set
 *              up. REQUIRED for ch ≥ 2, FORBIDDEN on ch 1 (no "before"
 *              the first chapter). 40–180 words.
 *   - setup    "The lay of the land" — why this is happening, who is
 *              driving it, who opposes it, what it is replacing, what is
 *              at stake. REQUIRED. 60–220 words.
 *   - cast     "Who & what to watch" — 2–6 nameplates; name ≤ 6 words,
 *              note 3–16 words (a tag, not a definition).
 *   - takeaway "By the end" — REQUIRED, 5–40 words (one sentence; >1
 *              sentence is a WARN, not a block).
 *   - TOTAL words (bridge+setup+notes+takeaway) ≤ 620 → ERROR if over.
 *              The intro is now a real briefing, not a one-liner — the
 *              cap is a runway, far short of a 1500–4000w chapter, so it
 *              still cannot become a second wall.
 *
 * Legacy civs (no intros authored yet) are grandfathered as a flat list
 * in audits/intro-baseline.json, same fail-closed model as
 * density/coverage: a civ NOT in the baseline is held to the bar with
 * zero tolerance. The retrofit program removes a civ from the baseline
 * once its intros land + pass; new civs are never grandfathered.
 *
 * Usage:
 *   tsx scripts/lint-intros.ts                 # report every civ
 *   tsx scripts/lint-intros.ts --tl=early-medieval-europe
 *   tsx scripts/lint-intros.ts --strict        # exit 1 on non-grandfathered ERROR
 *   tsx scripts/lint-intros.ts --write-baseline # grandfather every civ lacking a clean intro set
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const NARR = join(ROOT, 'narratives')
const BASELINE = join(ROOT, 'audits', 'intro-baseline.json')

const SETUP_MIN = 60, SETUP_MAX = 220
const BRIDGE_MIN = 40, BRIDGE_MAX = 180
const NOTE_MIN = 3, NOTE_MAX = 16
const NAME_MAX_WORDS = 6
const CAST_MIN = 2, CAST_MAX = 6
const TAKEAWAY_MIN = 5, TAKEAWAY_MAX = 40
const TOTAL_MAX = 620 // anti-wall ceiling: a real briefing/runway, still ≪ a 1500–4000w chapter

const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const strict = args.includes('--strict')
const writeBaseline = args.includes('--write-baseline')

const baseline: string[] = existsSync(BASELINE)
  ? JSON.parse(readFileSync(BASELINE, 'utf-8'))
  : []
const grandfathered = new Set(baseline)

interface Cast { name: string; note: string }
interface Intro { chapter: number; bridge?: string; setup?: string; cast?: Cast[]; takeaway?: string }

const words = (s: string | undefined) => (s ? s.trim().split(/\s+/).filter(Boolean).length : 0)
const sentences = (s: string) => (s.match(/[.!?](?:\s|$)/g) || []).length

function chapterNumbers(tl: string): number[] {
  const md = readFileSync(join(NARR, `${tl}.md`), 'utf-8')
  return [...md.matchAll(/^# Chapter (\d+)\s*[—-]/gm)].map(m => Number(m[1]))
}

const tls = (onlyTl ? [onlyTl] : readdirSync(NARR)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', '')))
  .filter(tl => existsSync(join(NARR, `${tl}.md`)))
  .sort()

type Row = { tl: string; ch: number | '-'; msg: string; sev: 'ERROR' | 'WARN' }
const rows: Row[] = []
const failingCivs = new Set<string>()
let errCount = 0, warnCount = 0

for (const tl of tls) {
  const isGf = grandfathered.has(tl)
  const push = (ch: number | '-', msg: string, hard = true) => {
    const sev: 'ERROR' | 'WARN' = hard && !isGf ? 'ERROR' : 'WARN'
    rows.push({ tl, ch, msg, sev })
    sev === 'ERROR' ? errCount++ : warnCount++
    failingCivs.add(tl)
  }

  let chs: number[]
  try { chs = chapterNumbers(tl) } catch { push('-', 'no narrative'); continue }

  const path = join(NARR, `${tl}.intros.json`)
  if (!existsSync(path)) { push('-', 'no .intros.json sidecar'); continue }

  let intros: Intro[]
  try { intros = JSON.parse(readFileSync(path, 'utf-8')) } catch (e) { push('-', `unparseable intros.json: ${e}`); continue }

  for (const ch of chs) {
    const it = intros.find(i => i.chapter === ch)
    if (!it) { push(ch, 'missing intro entry'); continue }

    // bridge: required ch≥2, forbidden ch1
    if (ch === 1 && it.bridge) push(ch, 'ch1 must not have a "bridge" (no chapter before it)')
    if (ch >= 2) {
      const bw = words(it.bridge)
      if (!it.bridge) push(ch, 'missing "bridge" (required for ch ≥ 2)')
      else if (bw < BRIDGE_MIN || bw > BRIDGE_MAX) push(ch, `bridge ${bw}w (want ${BRIDGE_MIN}–${BRIDGE_MAX})`)
    }

    // setup: required
    const sw = words(it.setup)
    if (!it.setup) push(ch, 'missing "setup"')
    else if (sw < SETUP_MIN || sw > SETUP_MAX) push(ch, `setup ${sw}w (want ${SETUP_MIN}–${SETUP_MAX})`)

    // cast: 2–6, name/note bounds
    const cast = it.cast ?? []
    if (cast.length < CAST_MIN || cast.length > CAST_MAX) push(ch, `cast has ${cast.length} (want ${CAST_MIN}–${CAST_MAX})`)
    for (const c of cast) {
      if (!c?.name || !c?.note) { push(ch, 'cast entry missing name/note'); continue }
      if (words(c.name) > NAME_MAX_WORDS) push(ch, `cast name too long: "${c.name}"`)
      const nw = words(c.note)
      if (nw < NOTE_MIN || nw > NOTE_MAX) push(ch, `cast note ${nw}w ("${c.name}") want ${NOTE_MIN}–${NOTE_MAX}`)
    }

    // takeaway: required, one sentence
    const tw = words(it.takeaway)
    if (!it.takeaway) push(ch, 'missing "takeaway"')
    else {
      if (tw < TAKEAWAY_MIN || tw > TAKEAWAY_MAX) push(ch, `takeaway ${tw}w (want ${TAKEAWAY_MIN}–${TAKEAWAY_MAX})`)
      if (sentences(it.takeaway) > 1) push(ch, 'takeaway should be one sentence', false)
    }

    // TOTAL word budget — the anti-density invariant
    const total = words(it.bridge) + sw + cast.reduce((a, c) => a + words(c?.note), 0) + tw
    if (total > TOTAL_MAX) push(ch, `intro is ${total}w — over the ${TOTAL_MAX}w cap (would become a second wall)`)
  }

  const civErrs = rows.filter(r => r.tl === tl && r.sev === 'ERROR').length
  const civWarns = rows.filter(r => r.tl === tl && r.sev === 'WARN').length
  const tag = isGf ? ' [grandfathered]' : ''
  if (!existsSync(path) && isGf) continue
  console.log(`${tl}: ${chs.length}ch · ${civErrs} ERROR · ${civWarns} WARN${tag}`)
}

for (const r of rows.filter(r => r.sev === 'ERROR'))
  console.log(`  ✗ ${r.tl} ch${r.ch}: ${r.msg}`)

console.log(`\nlint-intros: ${tls.length} civs · ${errCount} ERROR · ${warnCount} WARN`)

if (writeBaseline) {
  const gf = [...failingCivs].sort()
  writeFileSync(BASELINE, JSON.stringify(gf, null, 0) + '\n')
  console.log(`wrote ${BASELINE} (${gf.length} grandfathered civs)`)
}

if (strict && errCount > 0) { console.error('STRICT: non-grandfathered intro errors present'); process.exit(1) }
