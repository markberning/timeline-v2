/**
 * link-suggest.mjs — the LINK PIPELINE's proposal stage.
 *
 * Problem it solves: a single sweep agent given both "decide what to link" and
 * "go find every slug" dodges the tedious half by dumping terms onto the waiver
 * (skip) list — gate goes green, links never get made. This tool removes the
 * dodge by doing the deciding deterministically and pre-proposing a page for
 * every term, so the human/agent stage only CONFIRMS (born-verified subject
 * check) and CANNOT skip outside a tiny pre-approved set.
 *
 * For a civ it reads the GATE worklist (audits/link-coverage/LINK-COVERAGE-
 * NEEDED-<tl>.txt) and classifies every term:
 *   REUSE          — the term is already a born-verified glossary link in some
 *                    OTHER civ → reuse that slug (highest confidence).
 *   CROSS          — the term names another of our civilizations → cross-link
 *                    (target resolved from how other civs cross-link it).
 *   SKIP           — pre-approved non-link: the civ's own name, a modern
 *                    country/city locator, or a generic common noun. THIS IS
 *                    THE ONLY ALLOWED SKIP SET — everything else must be a link.
 *   LINK-CANDIDATE — Wikipedia search found a live, non-disambiguation page;
 *                    proposes the slug + its lead sentence for confirmation.
 *   NO-PAGE        — no confident page → route to the blurb writer.
 *
 * Output: audits/link-suggest/<tl>.json (machine) + .md (human worksheet).
 * Born-verified doctrine intact: this PROPOSES; it never writes curated links.
 *
 * Usage: node scripts/link-suggest.mjs --tl=<civ> [--limit=N] [--refresh]
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync } from 'fs'
import { verifySlugs } from './lib/wiki-verify.mjs'

const args = process.argv.slice(2)
const tlArg = args.find((a) => a.startsWith('--tl='))
const limitArg = args.find((a) => a.startsWith('--limit='))
const refresh = args.includes('--refresh')
if (!tlArg) { console.error('usage: node scripts/link-suggest.mjs --tl=<civ> [--limit=N] [--refresh]'); process.exit(1) }
const TL = tlArg.slice('--tl='.length)
const LIMIT = limitArg ? parseInt(limitArg.slice('--limit='.length), 10) : Infinity
const WL = `audits/link-coverage/LINK-COVERAGE-NEEDED-${TL}.txt`
if (!existsSync(WL)) { console.error(`no worklist ${WL} — run: tsx scripts/link-coverage.ts --corpus`); process.exit(1) }

const UA = 'timeline-v2-link-suggest/1.0 (https://stuffhappened.com)'
const fold = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const norm = (s) => fold(String(s || '')).replace(/\s+/g, ' ').trim()
const toks = (s) => new Set(fold(s).replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((w) => w.length > 2))
const overlap = (a, b) => { let n = 0; for (const t of a) if (b.has(t)) n++; return a.size ? n / a.size : 0 }
const squash = (s) => fold(s).replace(/[^a-z]/g, '').replace(/(.)\1+/g, '$1')
const sameName = (a, b) => { const x = squash(a), y = squash(b); return x.length >= 5 && y.length >= 5 && (x === y || x.includes(y) || y.includes(x)) }
const cleanName = (s) => decodeURIComponent(String(s)).replace(/_/g, ' ').replace(/\s*\([^)]*\)\s*/g, ' ').replace(/\s+/g, ' ').trim()

async function searchWiki(q) {
  const u = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(q)}&srlimit=7&srnamespace=0&format=json&formatversion=2`
  const ac = new AbortController(); const t = setTimeout(() => ac.abort(), 20000)
  try {
    const r = await fetch(u, { headers: { 'User-Agent': UA }, signal: ac.signal })
    if (!r.ok) return []
    const j = await r.json()
    return (j?.query?.search ?? []).map((s) => s.title)
  } catch { return [] } finally { clearTimeout(t) }
}

// ── pre-approved SKIP sets (the ONLY legitimate non-links) ───────────────────
const OWN = new Set(TL.split('-').filter((w) => w.length > 2))
const GENERIC = new Set(['king', 'kings', 'queen', 'emperor', 'emperors', 'empire', 'empires', 'kingdom', 'kingdoms',
  'war', 'wars', 'city', 'cities', 'town', 'river', 'rivers', 'mountain', 'mountains', 'sea', 'ocean', 'lake',
  'temple', 'temples', 'palace', 'fort', 'fortress', 'dynasty', 'dynasties', 'sultan', 'sultans', 'caliph', 'caliphs',
  'province', 'region', 'capital', 'army', 'armies', 'navy', 'earth', 'world', 'east', 'west', 'north', 'south',
  'republic', 'state', 'states', 'nation', 'people', 'peoples', 'century', 'dynasty', 'prince', 'princes', 'general'])
const MODERN = new Set(['afghanistan', 'pakistan', 'india', 'iran', 'iraq', 'china', 'turkey', 'syria', 'egypt',
  'russia', 'mexico', 'morocco', 'spain', 'france', 'england', 'britain', 'germany', 'italy', 'greece', 'japan',
  'korea', 'vietnam', 'indonesia', 'myanmar', 'burma', 'thailand', 'uzbekistan', 'tajikistan', 'turkmenistan',
  'kazakhstan', 'azerbaijan', 'georgia', 'armenia', 'serbia', 'romania', 'bulgaria', 'hungary', 'poland',
  'jordan', 'lebanon', 'israel', 'saudi arabia', 'yemen', 'oman', 'sri lanka', 'bangladesh', 'nepal', 'bhutan',
  'uttar pradesh', 'madhya pradesh', 'andhra pradesh', 'arunachal pradesh', 'himachal pradesh', 'tamil nadu',
  'bihar', 'odisha', 'gujarat', 'kerala', 'karnataka', 'rajasthan', 'haryana', 'maharashtra', 'punjab', 'sindh',
  'bengal', 'west bengal', 'assam', 'goa', 'middle east', 'central asia', 'southeast asia', 'south asia', 'east asia'])

// ── corpus indexes (term -> born-verified slug elsewhere; term -> cross target)
function buildCorpusIndexes() {
  const slugIdx = new Map()   // norm(term) -> Map<slug, { tl, count }>  (ALL slugs seen — to expose homonyms)
  const crossIdx = new Map()  // norm(term) -> { targetTl, count }
  const files = readdirSync('content')
  for (const f of files) {
    const m = f.match(/^\.glossary-links-(.+)\.json$/)
    if (m && m[1] !== TL) {
      let data; try { data = JSON.parse(readFileSync(`content/${f}`, 'utf8')) } catch { continue }
      for (const ch of Object.keys(data)) for (const e of data[ch] || []) {
        if (!e.wikiSlug || String(e.wikiSlug).startsWith('def:')) continue
        for (const key of [e.matchText, e.term]) {
          const k = norm(key); if (!k) continue
          let bySlug = slugIdx.get(k); if (!bySlug) { bySlug = new Map(); slugIdx.set(k, bySlug) }
          const cur = bySlug.get(e.wikiSlug)
          if (!cur) bySlug.set(e.wikiSlug, { tl: m[1], count: 1 }); else cur.count++
        }
      }
    }
    const c = f.match(/^\.cross-links-(.+)\.json$/)
    if (c && c[1] !== TL) {
      let data; try { data = JSON.parse(readFileSync(`content/${f}`, 'utf8')) } catch { continue }
      for (const ch of Object.keys(data)) for (const e of data[ch] || []) {
        if (!e.targetTl || !e.matchText) continue
        const k = norm(e.matchText); if (!k) continue
        const cur = crossIdx.get(k)
        if (!cur) crossIdx.set(k, { targetTl: e.targetTl, count: 1 })
        else cur.count++
      }
    }
  }
  return { slugIdx, crossIdx }
}

// ── parse the GATE worklist ──────────────────────────────────────────────────
function parseWorklist() {
  const out = []  // { chapter, term, signals, suggest }
  let ch = 0
  for (const line of readFileSync(WL, 'utf8').split('\n')) {
    const cm = line.match(/^##\s*Chapter\s+(\d+)/)
    if (cm) { ch = parseInt(cm[1], 10); continue }
    const lm = line.match(/^\s{2,}(.+?)\s+⟨([^⟩]*)⟩\s*→\s*(.+?)\s*$/)
    if (lm) out.push({ chapter: ch, term: lm[1].trim(), signals: lm[2].trim(), suggest: lm[3].trim() })
  }
  return out
}

const civNames = new Set(readdirSync('content').map((f) => (f.match(/^\.glossary-links-(.+)\.json$/) || [])[1]).filter(Boolean).map((id) => id.replace(/-/g, ' ')))

function isCivName(t) {
  const n = norm(t).replace(/ ch$/, '')
  for (const cn of civNames) if (squash(cn).includes(squash(n)) && squash(n).length >= 5) return cn.replace(/ /g, '-')
  return null
}

async function classify(item, idx) {
  const raw = item.term.replace(/\s+Ch$/, '')   // strip "(… Ch N)" artifact
  const n = norm(raw)
  // 1. SKIP — own name / generic / modern locator (the ONLY allowed non-links)
  if ([...OWN].some((w) => n === w || n === w + 's')) return { ...item, decision: 'SKIP', reason: 'own-name', cat: 'B' }
  if (GENERIC.has(n)) return { ...item, decision: 'SKIP', reason: 'generic common noun', cat: 'C' }
  if (MODERN.has(n)) return { ...item, decision: 'SKIP', reason: 'modern locator', cat: 'A' }
  // 2. CROSS — names one of our civs (resolved from corpus cross usage, then civ-id match)
  const cx = idx.crossIdx.get(n)
  if (cx) return { ...item, decision: 'CROSS', targetTl: cx.targetTl, conf: 'high', why: `cross-linked elsewhere ×${cx.count}` }
  const civ = isCivName(raw)
  if (civ) return { ...item, decision: 'CROSS', targetTl: civ, conf: 'med', why: 'matches a civ id' }
  // 3. REUSE — already a born-verified glossary link in another civ.
  // NOT a guarantee: the original could be wrong, and the SAME string can mean a
  // DIFFERENT subject here (homonyms: Emperor Wu, Tripoli, Alexandria…). So we
  // verify the page, SHOW the lead for subject-confirmation, and flag ambiguity.
  const bySlug = idx.slugIdx.get(n)
  if (bySlug) {
    const ranked = [...bySlug.entries()].sort((a, b) => b[1].count - a[1].count)
    const [slug, meta] = ranked[0]
    const ambiguous = ranked.length > 1
    const v = (await verifySlugs([slug], { refresh })).get(slug)
    const alts = ranked.slice(1).map(([s, m]) => `${s}(${m.tl})`)
    if (v && v.ok && !v.disambiguation) {
      return {
        ...item, decision: 'REUSE', slug, title: v.title, lead: v.lead,
        conf: ambiguous ? 'CONFIRM-homonym' : 'high',
        why: `linked in ${meta.tl} ×${meta.count}` + (ambiguous ? ` — ⚠ AMBIGUOUS: also ${alts.join(', ')}` : ''),
        alts: ambiguous ? alts : undefined,
      }
    }
    // reused slug is itself dead/disambig now → don't propagate; treat as fresh search
  }
  // 4. LINK-CANDIDATE — Wikipedia search + verify
  const cands = await searchWiki(raw)
  let pick = null, why = ''
  for (const c of cands) if (sameName(raw, c)) { pick = c; why = 'same name'; break }
  if (!pick) for (let i = 0; i < Math.min(cands.length, 3); i++) {
    if (overlap(toks(raw), toks(cands[i])) >= 0.5) { pick = cands[i]; why = `word match (rank ${i + 1})`; break }
  }
  if (!pick && cands.length) { pick = cands[0]; why = 'top hit (low confidence)' }
  if (pick) {
    const slug = pick.replace(/ /g, '_')
    const v = (await verifySlugs([slug], { refresh })).get(slug)
    if (v && v.ok && !v.disambiguation) {
      const conf = why === 'same name' ? 'high' : why.startsWith('word match') ? 'med' : 'low'
      return { ...item, decision: 'LINK-CANDIDATE', slug, title: v.title, lead: v.lead, conf, why }
    }
    if (v && v.disambiguation) return { ...item, decision: 'NO-PAGE', reason: `top hit "${pick}" is a disambiguation page`, conf: 'blurb' }
  }
  return { ...item, decision: 'NO-PAGE', reason: 'no confident Wikipedia page found', conf: 'blurb' }
}

// ── run ──────────────────────────────────────────────────────────────────────
const idx = buildCorpusIndexes()
const worklist = parseWorklist().slice(0, LIMIT)
console.error(`link-suggest ${TL}: ${worklist.length} GATE terms · corpus index ${idx.slugIdx.size} slugs / ${idx.crossIdx.size} cross`)
const rows = []
for (let i = 0; i < worklist.length; i++) {
  rows.push(await classify(worklist[i], idx))
  if ((i + 1) % 25 === 0) console.error(`  …${i + 1}/${worklist.length}`)
}

const tally = rows.reduce((m, r) => ((m[r.decision] = (m[r.decision] || 0) + 1), m), {})
mkdirSync('audits/link-suggest', { recursive: true })
writeFileSync(`audits/link-suggest/${TL}.json`, JSON.stringify(rows, null, 2) + '\n')

// human worksheet
let md = `# link-suggest — ${TL}\n\n${JSON.stringify(tally)}\n\nConfirm each row's subject from the lead, then write the curated entry. SKIP set is the ONLY allowed non-link.\n`
let curCh = -1
for (const r of rows) {
  if (r.chapter !== curCh) { curCh = r.chapter; md += `\n## Chapter ${curCh}\n` }
  if (r.decision === 'REUSE') md += `- **${r.term}** → REUSE \`${r.slug}\` [${r.conf}] — _${r.title}_: ${r.lead?.slice(0, 110)}  (${r.why})\n`
  else if (r.decision === 'CROSS') md += `- **${r.term}** → CROSS → \`${r.targetTl}\`  (${r.why})\n`
  else if (r.decision === 'SKIP') md += `- ${r.term} → SKIP (${r.reason}, cat ${r.cat})\n`
  else if (r.decision === 'LINK-CANDIDATE') md += `- **${r.term}** → \`${r.slug}\` [${r.conf}] — _${r.title}_: ${r.lead?.slice(0, 120)}\n`
  else md += `- **${r.term}** → NO-PAGE → blurb (${r.reason})\n`
}
writeFileSync(`audits/link-suggest/${TL}.md`, md)
console.error(`→ audits/link-suggest/${TL}.json + .md   ${JSON.stringify(tally)}`)
