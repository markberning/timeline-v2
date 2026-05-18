/**
 * link-coverage.ts — link-COVERAGE detector (the missing per-civ step).
 *
 * lint-links.ts validates entries that EXIST. It cannot see a link that was
 * never created. Under-production of links — jargon, proper nouns, named
 * people/places/concepts introduced in the prose but never linked to an
 * event/glossary/cross entry — is exactly what forced the corpus-wide sweep
 * and the "this chapter feels dense" complaint.
 *
 * THE OLD DESIGN failed because it trusted two unreliable signals:
 *   Pass A keyed on **bold**, but the narrative bolds rhetorical emphasis
 *     ("did **not**", "First, he **organized famine relief**") the same way
 *     it bolds first-use terms — so it both missed real terms and fired on
 *     non-terms.
 *   Pass B keyed on Capitalisation, ~90% noise (every "First", "While",
 *     "Christ"), so it could only ever be advisory.
 *   Lowercase jargon ("late antiquity", "tonsure", "plainsong") was invisible
 *     to both.
 *
 * THE NEW DESIGN keys on signals where the author has *already certified the
 * term is hard*, plus the corpus's own accumulated link knowledge. All
 * deterministic (no LLM — pipeline rule):
 *
 *   S1 pronunciation gloss  — `Columba (kuh-LUM-buh)`: WRITING-RULES require a
 *                             phonetic respelling the first time an unfamiliar
 *                             proper noun appears. The author saying "here is
 *                             how to pronounce it" IS the author certifying it
 *                             needs a link.                          [GATE]
 *   S2 foreign-term gloss   — `peregrinatio pro Christo, "pilgrimage for
 *                             Christ"`: a foreign term + its quoted English
 *                             translation. The lowercase-jargon catcher.[GATE]
 *   S3 corpus dictionary    — the term is a real curated link in SOME other
 *                             chapter/civ but raw text here. Near-certain gap;
 *                             self-improving as the corpus grows.      [GATE]
 *   S4 inline-definition    — `tonsure (the haircut monks wore…)`: the author
 *                             stopped to define it on first use.   [GATE if
 *                             bold or recurs, else advise]
 *   S5 recurrence ≥3        — a proper-noun phrase that recurs and drives the
 *                             chapter is load-bearing, not noise.      [GATE]
 *   S6 bold proper noun     — a bolded 1–3-word Capitalised phrase, no link
 *                             (the old Pass A intent, de-noised).      [GATE]
 *   advisory                — bold-only clauses, lone Capitalised words, S4
 *                             without corroboration. Worklist, never blocks.
 *
 * covered() is now word-boundary aware: "Augustine of Canterbury" no longer
 * falsely covers "Augustine of Hippo".
 *
 * Legacy 102 are grandfathered per-(civ,chapter,term) in
 * audits/link-coverage-baseline.json (mirrors density-baseline). A GATE hit
 * NOT in the baseline fails --strict — so new gaps in old civs are blocked and
 * brand-new civs (absent from the baseline) are zero-tolerance. Same model as
 * density / matchtext.
 *
 * Usage:
 *   tsx scripts/link-coverage.ts --tl=early-medieval-europe [--ch=3]
 *   tsx scripts/link-coverage.ts --tl=<civ> --strict        # exit 1 on new GATE hit
 *   tsx scripts/link-coverage.ts --tl=<civ> --no-baseline   # ignore grandfather
 *   tsx scripts/link-coverage.ts --write-coverage-baseline  # snapshot legacy 102
 *   tsx scripts/link-coverage.ts --corpus                   # audit all, emit worklists
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const NARR = join(ROOT, 'narratives')
const CONTENT = join(ROOT, 'content')
const BASELINE = join(ROOT, 'audits', 'link-coverage-baseline.json')
const WORKDIR = join(ROOT, 'audits', 'link-coverage')

const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const onlyCh = args.find(a => a.startsWith('--ch='))?.slice(5)
const strict = args.includes('--strict')
const noBaseline = args.includes('--no-baseline')
const writeBaseline = args.includes('--write-coverage-baseline')
const corpus = args.includes('--corpus')

// ── normalisation / tokenisation ────────────────────────────────────────────
function norm(s: string): string {
  return s
    .normalize('NFC')
    .replace(/[`*_]/g, '')
    .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N})]+$/gu, '')
    .replace(/[’']s\b/gi, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}
function toks(s: string): string[] {
  return norm(s).split(/[^\p{L}\p{N}]+/u).filter(Boolean)
}
function depl(t: string): string {
  return t.endsWith('s') && t.length > 4 ? t.slice(0, -1) : t
}
// aTok appears as a contiguous run inside bTok (word-boundary containment).
function runIn(aTok: string[], bTok: string[]): boolean {
  if (!aTok.length || aTok.length > bTok.length) return false
  for (let i = 0; i + aTok.length <= bTok.length; i++) {
    let ok = true
    for (let j = 0; j < aTok.length; j++)
      if (bTok[i + j] !== aTok[j] && depl(bTok[i + j]) !== depl(aTok[j])) { ok = false; break }
    if (ok) return true
  }
  return false
}

// Sentence-initial / structural / pronoun Capitalised words that are never a
// link on their own. Country names + universal basics are deliberately NOT
// hardcoded — those are per-civ waivers/baseline, keeping this civ-agnostic.
const STOP = new Set([
  'the','a','an','and','but','or','for','in','on','at','by','to','of','as','if','it','its',
  'this','that','these','those','he','she','they','we','his','her','their','him','them','you',
  'when','where','while','then','there','here','now','not','no','yes','so','yet','also','still',
  'first','second','third','fourth','fifth','sixth','seventh','finally','meanwhile','later',
  'although','though','because','since','after','before','during','despite','unlike','within',
  'thus','hence','therefore','however','moreover','indeed','perhaps','many','most','some','few',
  'both','each','every','such','other','another','one','two','three','what','which','who','why',
  'how','about','almost','nearly','roughly','around','over','under','between','among',
  'chapter','january','february','march','april','may','june','july','august','september',
  'october','november','december','monday','tuesday','wednesday','thursday','friday','saturday',
  'sunday','cross','note','like','near','far','old','new','part','end','way','time','year','day',
])
// Modern country / continent / broad-demonym / generic era-adjective skips.
// The corpus convention (CLAUDE.md step 7) explicitly says "skip modern
// country names / universal basics" — this is globally true, not civ-specific,
// so it lives here rather than in 102 per-civ waiver files. These are demoted
// to advisory (still on the worklist, never build-blocking).
const UNIVERSAL = new Set([
  'europe','european','asia','asian','africa','african','america','american','americas',
  'oceania','antarctica','atlantic','pacific','indian','arctic','mediterranean','the mediterranean',
  'england','english','ireland','irish','scotland','scottish','wales','welsh','britain','british',
  'france','french','germany','german','italy','italian','spain','spanish','portugal','portuguese',
  'china','chinese','japan','japanese','india','russia','russian','greece','greek','egypt',
  'egyptian','iran','iraq','turkey','turkish','syria','syrian','israel','korea','korean','vietnam',
  'switzerland','iceland','sicily','bavaria','christ','christian','christianity','christendom',
  'god','jesus','church','bible','rome','roman','romans','catholic','protestant','jewish','muslim',
  'islam','islamic','buddhist','hindu','west','western','east','eastern','north','south','northern',
  'southern','world war ii','world war i',
])
// A phonetic-respelling fragment, e.g. "OH-nuh", "LUM-buh", "BEN-eh-dikt".
const isPronFrag = (w: string) => /-/.test(w) && /[A-Z]{2,}/.test(w)
const isBasic = (key: string, tk: string[]) =>
  UNIVERSAL.has(key) || tk.every(t => UNIVERSAL.has(t) || STOP.has(t))

// ── corpus cross-reference dictionary ───────────────────────────────────────
// Every matchText curated ANYWHERE → its kind + an example civ. Built once.
let _dict: Map<string, { kind: string; tl: string }> | null = null
function corpusDict() {
  if (_dict) return _dict
  const d = new Map<string, { kind: string; tl: string }>()
  for (const f of readdirSync(CONTENT)) {
    const m = f.match(/^\.(event|glossary|cross)-links-(.+)\.json$/)
    if (!m) continue
    const kind = m[1] === 'event' ? 'event' : m[1] === 'glossary' ? 'glossary' : 'cross'
    const tl = m[2]
    let j: Record<string, { matchText?: string }[]>
    try { j = JSON.parse(readFileSync(join(CONTENT, f), 'utf-8')) } catch { continue }
    for (const ch of Object.keys(j)) for (const e of j[ch] ?? []) {
      const k = norm(e.matchText ?? '')
      if (k.length >= 3 && !d.has(k)) d.set(k, { kind, tl })
    }
  }
  _dict = d
  return d
}

// ── narrative chapters ──────────────────────────────────────────────────────
function chapters(tl: string): Map<string, string> {
  const md = readFileSync(join(NARR, `${tl}.md`), 'utf-8')
  const out = new Map<string, string>()
  const re = /^# Chapter (\d+)\s*[—-]\s*(.*)$/gm
  const marks: { n: string; idx: number }[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(md))) marks.push({ n: m[1], idx: m.index })
  for (let i = 0; i < marks.length; i++)
    out.set(marks[i].n, md.slice(marks[i].idx, marks[i + 1]?.idx ?? md.length))
  return out
}
function loadJson<T>(p: string): T | null {
  return existsSync(p) ? (JSON.parse(readFileSync(p, 'utf-8')) as T) : null
}

type Hit = { display: string; tier: 'GATE' | 'ADVISE'; tags: Set<string>; suggest: string }

// Scan one chapter. Returns normKey → Hit.
function scanChapter(tl: string, ch: string, body: string,
  gloss: any, ev: any, cx: any, waivers: any): Map<string, Hit> {
  const dict = corpusDict()
  const linkedTok = [
    ...(gloss[ch] ?? []), ...(ev[ch] ?? []), ...(cx[ch] ?? []),
  ].map((x: any) => toks(x.matchText ?? '')).filter((t: string[]) => t.length)
  const waived = new Set((waivers[ch] ?? []).map((s: string) => norm(s)))

  const covered = (termTok: string[], key: string) => {
    if (waived.has(key)) return true
    return linkedTok.some((L: string[]) => runIn(termTok, L) || runIn(L, termTok))
  }

  const prose = body.replace(/^# Chapter .*$/m, '')
  const plain = prose.replace(/[`*_]/g, ' ').replace(/\s+/g, ' ')

  // One accumulator per normalised term; tier is decided AFTER all signals
  // fire, so corroboration (e.g. recurrence + dict) works correctly.
  type Acc = {
    display: string; tags: Set<string>; suggest: string
    count: number; properNoun: boolean; bold: boolean; shaped3: boolean; basic: boolean
  }
  const acc = new Map<string, Acc>()
  const ensure = (display: string): Acc | null => {
    const key = norm(display)
    const tk = toks(display)
    if (!key || !tk.length || key.length < 3) return null
    if (tk.every(t => STOP.has(t))) return null
    if (covered(tk, key)) return null
    let a = acc.get(key)
    if (!a) {
      a = {
        display: display.trim(), tags: new Set(), suggest: '?', count: 0,
        properNoun: false, bold: false, shaped3: false, basic: isBasic(key, tk),
      }
      acc.set(key, a)
    }
    return a
  }
  const tag = (display: string, t: string, suggest = '') => {
    const a = ensure(display); if (!a) return a
    a.tags.add(t); if (suggest && a.suggest === '?') a.suggest = suggest; return a
  }
  const isBolded = (term: string) =>
    prose.includes(`**${term}**`) || new RegExp(`\\*\\*[^*]*\\b${
      term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b[^*]*\\*\\*`).test(prose)

  // ── Proper-noun phrases (non-sentence-initial Capitalised runs) ──────────
  for (const m of plain.matchAll(
    /(?<![.?!]\s)\b\p{Lu}[\p{L}’'-]+(?:\s+(?:of|the|de|la|del|ibn|al)\s+[\p{Lu}\p{L}’'-]+|\s+\p{Lu}[\p{L}’'-]+)*/gu)) {
    const disp = m[0].replace(/[’']s$/, '').trim()
    const tk = toks(disp)
    if (!tk.length || STOP.has(tk[0]) || disp.length < 4) continue
    if (disp.split(/\s+/).some(isPronFrag)) continue
    const a = ensure(disp); if (!a) continue
    a.properNoun = true; a.count++
    const d = dict.get(norm(disp))
    if (d) { a.tags.add('dict'); if (a.suggest === '?') a.suggest = d.kind === 'cross' ? 'cross-link' : d.kind }
  }

  // S1 — pronunciation gloss (author-certified unfamiliar proper noun).
  for (const m of prose.matchAll(
    /(\*{0,2})([A-Z][\p{L}’'.-]*(?:\s+(?:of|the|de|la|le|von|al|ibn|bin)\s+|\s+)?(?:[A-Z][\p{L}’'.-]*)?(?:\s+[A-Z][\p{L}’'.-]*){0,3})\1\s*\(\s*(?:pronounced\b|["“']?[a-z]+(?:-[a-z]+)*-[A-Z]{2,})/gu)) {
    const a = tag(m[2].replace(/[`*_]/g, '').trim(), 'pron', 'event/glossary')
    if (a) a.properNoun = true
  }

  // S2 — foreign term + quoted English gloss (the lowercase-jargon catcher).
  for (const m of prose.matchAll(
    /(\*{1,2})([^*]{3,60}?)\1\s*[,(]?\s*["“]([^"”]{2,60})["”]/gu)) {
    const term = m[2].replace(/[`*_]/g, '').trim()
    if (toks(term).length <= 6 && !/[.;:]/.test(term)) tag(term, 'gloss', 'glossary')
  }
  // (No pure-lowercase gloss branch: foreign terms in this corpus are always
  // italicised/bolded, so the markup branch above is sufficient; a bare
  // `<lc words>, "..."` pattern just catches asides like
  // `the modern secularized version, "CE"`.)

  // S4 — inline definition (author stopped to define it on first use).
  const DEF = '(?:the practice|the system|the haircut|the basic|a body of|a religious|a form of|a type of|a kind of|monks who|egyptian monks|which means|which meant|meaning\\b|literally\\b|so-called|the ritual|the doctrine|the belief|the office of|the rite|the haircut)'
  for (const m of prose.matchAll(new RegExp(
    `(\\*{0,2})([A-Za-z][\\p{L}’'-]*(?:\\s+[\\p{L}’'-]+){0,3})\\1\\s*(?:—|\\(|,)\\s*${DEF}`, 'giu'))) {
    const term = m[2].replace(/[`*_]/g, '').trim()
    const a = tag(term, 'def', 'glossary')
    // A bolded *term* corroborates (→ GATE); a bolded emphasis *clause* that
    // merely happens to precede a definition ("he **codified the liturgical
    // chant** — a body of plainsong") must not. Clause ⇒ >3 words, or
    // multi-word starting lowercase (mid-sentence verb phrase).
    const w = term.split(/\s+/)
    const clauseLike = w.length > 3 || (w.length > 1 && /^[a-z]/.test(term))
    if (a && m[1] === '**' && !clauseLike) a.bold = true
  }

  // S3-lc — lowercase jargon that is a curated link elsewhere (advisory tail).
  {
    const words = plain.match(/[\p{L}\p{N}][\p{L}\p{N}’'.-]*/gu) ?? []
    for (let i = 0; i < words.length;) {
      let matched = 0
      for (let n = Math.min(4, words.length - i); n >= 1; n--) {
        const phrase = words.slice(i, i + n).join(' ')
        if (/^\p{Lu}/u.test(phrase)) continue // proper nouns handled above
        const k = norm(phrase)
        if (k.length < 5) continue
        const d = dict.get(k)
        if (d) {
          const a = tag(phrase, 'dict-lc', d.kind === 'cross' ? 'cross-link' : d.kind)
          matched = n; void a; break
        }
      }
      i += matched || 1
    }
  }

  // S6 — bold spans. Proper-noun-shaped → strong; clause/lowercase → advisory.
  for (const m of prose.matchAll(/\*\*([^*]{2,}?)\*\*/g)) {
    const term = m[1].replace(/[`*_]/g, '').trim()
    if (/^\d+$/.test(term) || /[,;:]/.test(term)) continue
    const a = tag(term, 'bold', 'event/glossary'); if (!a) continue
    const words = term.split(/\s+/)
    if (words.length <= 3 && /^\p{Lu}/u.test(term) && !STOP.has(toks(term)[0])) {
      a.bold = true; a.shaped3 = true
    }
  }

  // ── Tier decision ───────────────────────────────────────────────────────
  const hits = new Map<string, Hit>()
  for (const [key, a] of acc) {
    const t = a.tags
    const gate =
      !a.basic && (
        t.has('pron') || t.has('gloss') ||
        (t.has('dict') && a.properNoun) ||
        (t.has('def') && a.bold) ||
        (t.has('bold') && a.shaped3) ||
        (a.properNoun && a.count >= 3))
    if (a.count >= 3) t.add(`recur×${a.count}`)
    hits.set(key, {
      display: a.display, tier: gate ? 'GATE' : 'ADVISE',
      tags: t, suggest: a.suggest,
    })
  }
  return hits
}

// ── per-civ run ─────────────────────────────────────────────────────────────
const baseline: Record<string, Record<string, string[]>> =
  !noBaseline && existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, 'utf-8')) : {}

function runCiv(tl: string) {
  const gloss = loadJson<any>(join(CONTENT, `.glossary-links-${tl}.json`)) ?? {}
  const ev = loadJson<any>(join(CONTENT, `.event-links-${tl}.json`)) ?? {}
  const cx = loadJson<any>(join(CONTENT, `.cross-links-${tl}.json`)) ?? {}
  const waivers = loadJson<any>(join(CONTENT, `.link-waivers-${tl}.json`)) ?? {}
  const chs = chapters(tl)
  const perCh: { ch: string; hits: Map<string, Hit> }[] = []
  for (const [ch, body] of [...chs].sort((a, b) => Number(a[0]) - Number(b[0]))) {
    if (onlyCh && ch !== onlyCh) continue
    perCh.push({ ch, hits: scanChapter(tl, ch, body, gloss, ev, cx, waivers) })
  }
  return perCh
}

const allTls = onlyTl
  ? [onlyTl]
  : readdirSync(NARR).filter(f => f.endsWith('.md')).map(f => f.slice(0, -3)).sort()

// ── mode: write baseline ────────────────────────────────────────────────────
if (writeBaseline) {
  const out: Record<string, Record<string, string[]>> = {}
  for (const tl of allTls) {
    for (const { ch, hits } of runCiv(tl)) {
      const gate = [...hits.entries()].filter(([, h]) => h.tier === 'GATE').map(([k]) => k)
      if (gate.length) (out[tl] ??= {})[ch] = gate.sort()
    }
  }
  writeFileSync(BASELINE, JSON.stringify(out, null, 2) + '\n')
  const civs = Object.keys(out).length
  const total = Object.values(out).reduce((s, c) => s + Object.values(c).reduce((a, b) => a + b.length, 0), 0)
  console.log(`wrote ${BASELINE}\n  ${civs} civs · ${total} grandfathered coverage gaps`)
  process.exit(0)
}

// ── mode: corpus auditor (detect + worklist only, NO auto-apply) ────────────
if (corpus) {
  if (!existsSync(WORKDIR)) mkdirSync(WORKDIR, { recursive: true })
  const ledger: { tl: string; gate: number; advise: number; newGate: number }[] = []
  for (const tl of allTls) {
    const perCh = runCiv(tl)
    let gate = 0, advise = 0, newGate = 0
    const lines: string[] = [
      `# LINK-COVERAGE-NEEDED — ${tl}`,
      `# Each line: TERM  ⟨signals⟩  → suggested link type`,
      `# Resolve each with a BORN-VERIFIED Wikipedia slug or an authored blurb.`,
      `# Detect-only: this file never auto-applies links (born-verified doctrine).`, '',
    ]
    for (const { ch, hits } of perCh) {
      const based = new Set(baseline[tl]?.[ch] ?? [])
      const g = [...hits.entries()].filter(([, h]) => h.tier === 'GATE')
      const a = [...hits.entries()].filter(([, h]) => h.tier === 'ADVISE')
      gate += g.length; advise += a.length
      newGate += g.filter(([k]) => !based.has(k)).length
      if (!g.length && !a.length) continue
      lines.push(`## Chapter ${ch}`)
      for (const [k, h] of g)
        lines.push(`  ${based.has(k) ? ' ' : '*'} ${h.display}   ⟨${[...h.tags].join(',')}⟩  → ${h.suggest}`)
      for (const [, h] of a)
        lines.push(`  ~ ${h.display}   ⟨${[...h.tags].join(',')}⟩  (advisory)`)
      lines.push('')
    }
    if (gate || advise) {
      writeFileSync(join(WORKDIR, `LINK-COVERAGE-NEEDED-${tl}.txt`), lines.join('\n'))
      ledger.push({ tl, gate, advise, newGate })
    }
  }
  ledger.sort((a, b) => b.gate - a.gate)
  const md = [
    '# Link-coverage corpus audit',
    '',
    `Generated ${new Date().toISOString().slice(0, 10)} · ${ledger.length} civs with gaps · worklists in \`audits/link-coverage/\``,
    '',
    '`*` = NEW gap (not grandfathered, would fail --strict). `~` = advisory.',
    '',
    '| civ | GATE | new | advisory |',
    '|---|--:|--:|--:|',
    ...ledger.map(r => `| ${r.tl} | ${r.gate} | ${r.newGate} | ${r.advise} |`),
    '',
    `**Totals:** ${ledger.reduce((s, r) => s + r.gate, 0)} GATE · ` +
    `${ledger.reduce((s, r) => s + r.newGate, 0)} new · ` +
    `${ledger.reduce((s, r) => s + r.advise, 0)} advisory`,
  ].join('\n')
  writeFileSync(join(ROOT, 'audits', 'link-coverage-ledger.md'), md + '\n')
  console.log(md)
  process.exit(0)
}

// ── mode: per-civ report / gate ─────────────────────────────────────────────
let failed = 0
for (const tl of allTls) {
  const perCh = runCiv(tl)
  let civNew = 0
  for (const { ch, hits } of perCh) {
    const gate = [...hits.entries()].filter(([, h]) => h.tier === 'GATE')
    const advise = [...hits.entries()].filter(([, h]) => h.tier === 'ADVISE')
    if (!gate.length && !advise.length) continue
    const based = new Set(baseline[tl]?.[ch] ?? [])
    const newK = gate.filter(([k]) => !based.has(k))
    civNew += newK.length
    console.log(`\n--- ${tl} ch${ch} ---`)
    if (gate.length)
      console.log('  GATE   : ' + gate.map(([k, h]) =>
        `${based.has(k) ? '' : '★'}${h.display} ⟨${[...h.tags].join(',')}⟩`).join(' · '))
    if (advise.length)
      console.log('  advise : ' + advise.map(([, h]) => h.display).join(' · '))
  }
  const totGate = perCh.reduce((s, p) =>
    s + [...p.hits.values()].filter(h => h.tier === 'GATE').length, 0)
  console.log(`\nlink-coverage ${tl}: ${totGate} GATE coverage gap(s), ${civNew} NEW (★, not grandfathered)`)
  if (civNew > 0) failed += civNew
}

if (strict && failed > 0) {
  console.error(`\nSTRICT: ${failed} new uncovered term(s) — link each, or waive in content/.link-waivers-<tl>.json`)
  process.exit(1)
}
