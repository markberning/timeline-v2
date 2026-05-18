// retarget-links.mjs — DETERMINISTIC broken-link resolver. NO LLM.
//
// Input : a flags JSON (from `fix-links.mjs --emit-flags`) — array of
//         { tl, kind, id, term, slug, reason, context }.
// For each broken link it asks the Wikipedia SEARCH api for the term and
// proposes a fix, conservatively:
//   retarget — a candidate whose title is the SAME NAME as the term
//              (romanization-insensitive) or a strong word match, AND is
//              itself a live non-disambiguation page. The slug is rewritten.
//   keep     — (subject flags only) the page it already lands on IS the right
//              one under a different name (synonym / scientific name) — false
//              alarm, no change.
//   blurb    — no confident page exists → DROP the Wikipedia link and write
//              our own house-voice copy. "A missing link beats a wrong link."
// Never guesses: a weak top hit yields `blurb`, not a confident-wrong link.
//
// Output: a decisions JSON the coordinator applies. This script does NOT
// mutate the repo (safe to run many in parallel on disjoint civ lists).
//
// Usage: node scripts/retarget-links.mjs --in=flags.json --out=decisions.json

import { readFileSync, writeFileSync } from 'node:fs'
import { verifySlugs } from './lib/wiki-verify.mjs'

const args = process.argv.slice(2)
const inPath = (args.find((a) => a.startsWith('--in=')) || '').split('=')[1]
const outPath = (args.find((a) => a.startsWith('--out=')) || '').split('=')[1]
// Per-run cache path so parallel runs never write the same file (the
// shared-cache corruption that broke the previous fan-out).
const cacheFile = ((args.find((a) => a.startsWith('--cache=')) || '').split('=')[1]) || `/tmp/wv-${process.pid}.json`
if (!inPath || !outPath) { console.error('Usage: node scripts/retarget-links.mjs --in=flags.json --out=decisions.json [--cache=path]'); process.exit(2) }

// ── shared deterministic matching (mirrors fix-links.mjs) ──────────────────
const splitCamel = (s) => String(s || '').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Za-z])([0-9])/g, '$1 $2')
const fold = (s) => splitCamel(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const STOP = new Set('the of and a an to in on at by for with from as is was were be been being its their our it he she they we this that these those which who whose new old great'.split(' '))
const toks = (s) => new Set(fold(s).split(/[^a-z0-9]+/).filter((t) => t.length >= 3 && !STOP.has(t)))
const lev = (a, b) => { if (Math.abs(a.length - b.length) > 3) return 99; const d = Array.from({ length: a.length + 1 }, (_, i) => i); for (let j = 1; j <= b.length; j++) { let p = d[0]; d[0] = j; for (let i = 1; i <= a.length; i++) { const t = d[i]; d[i] = Math.min(d[i] + 1, d[i - 1] + 1, p + (a[i - 1] === b[j - 1] ? 0 : 1)); p = t } } return d[a.length] }
const near = (x, y) => x === y || (Math.min(x.length, y.length) >= 4 && (x.startsWith(y) || y.startsWith(x))) || lev(x, y) <= (Math.max(x.length, y.length) >= 6 ? 2 : 1)
const overlap = (a, b) => { let n = 0; for (const t of a) for (const u of b) if (near(t, u)) { n++; break } return a.size ? n / a.size : 0 }
const squash = (s) => fold(s).replace(/[^a-z]/g, '').replace(/eo/g, 'o').replace(/eu/g, 'u').replace(/oe/g, 'o').replace(/ae/g, 'e').replace(/ch/g, 'j').replace(/(.)\1+/g, '$1')
const sameName = (a, b) => { const x = squash(a), y = squash(b); return x.length >= 5 && y.length >= 5 && (x === y || x.includes(y) || y.includes(x)) }

const UA = 'timeline-v2-retarget/1.0 (https://stuffhappened.com)'
const cleanName = (slug) => decodeURIComponent(String(slug)).replace(/_/g, ' ').replace(/\s*\([^)]*\)\s*/g, ' ').replace(/#.*$/, '').replace(/\s+/g, ' ').trim()

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

const flags = JSON.parse(readFileSync(inPath, 'utf8'))
const decisions = []

for (const f of flags) {
  const isSubject = /word-overlap/.test(f.reason)        // noisy false-alarm-prone bucket
  const query = cleanName(f.slug) || f.term
  const cands = await searchWiki(query)
  const qTok = toks(query)

  // pick the best candidate by name identity first, then strong word overlap
  let pick = null, pickWhy = ''
  for (let i = 0; i < cands.length; i++) {
    const c = cands[i]
    if (sameName(query, c)) { pick = c; pickWhy = 'same name'; break }
  }
  if (!pick) for (let i = 0; i < Math.min(cands.length, 3); i++) {
    const c = cands[i]
    if (overlap(qTok, toks(c)) >= 0.6) { pick = c; pickWhy = `strong word match (rank ${i + 1})`; break }
  }

  // confirm the picked page is itself alive & not a disambiguation page
  let verified = null
  if (pick) {
    const slug = pick.replace(/ /g, '_')
    const v = (await verifySlugs([slug], { cacheFile })).get(slug)
    if (v && v.ok && !v.disambiguation) verified = { slug, title: v.title }
  }

  if (verified && squash(verified.slug) === squash(f.slug)) {
    // resolves to the same place it already pointed → the flag was a false
    // alarm (synonym / scientific name). Leave it alone.
    decisions.push({ ...f, action: 'keep', note: `false alarm — already correct (${verified.title})` })
  } else if (verified) {
    decisions.push({ ...f, action: 'retarget', newSlug: verified.slug, newTitle: verified.title, note: pickWhy })
  } else if (isSubject) {
    // a possibly-wrong subject with no clearly-better page: hand to a human
    // rather than blank a maybe-correct link.
    decisions.push({ ...f, action: 'review', note: 'no confident better page; subject-flag, needs eyeball' })
  } else {
    // genuinely dead/disambiguation and nothing solid found → drop + author
    decisions.push({ ...f, action: 'blurb', note: 'no confident page — drop link, write our own copy' })
  }
}

writeFileSync(outPath, JSON.stringify(decisions, null, 2) + '\n')
const tally = decisions.reduce((m, d) => ((m[d.action] = (m[d.action] || 0) + 1), m), {})
console.log(`retarget-links: ${decisions.length} flags → ${JSON.stringify(tally)} → ${outPath}`)
