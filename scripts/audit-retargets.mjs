// audit-retargets.mjs — coordinator SAFETY SWEEP over proposed retargets. NO LLM.
//
// The deterministic name-match in retarget-links can confidently pick a WRONG
// page when two unrelated subjects share a name ("Orban" the 1453 cannon
// founder → Viktor Orbán; "White Lotus Society" → the HBO show). Catch these
// by comparing the ORIGINAL term + its narrative context against the NEW
// page's title + lead. Near-zero overlap = the new page is about something
// else → SUSPECT (kicked back to a blurb / re-pick, never applied blind).

import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { verifySlugs } from './lib/wiki-verify.mjs'

const splitCamel = (s) => String(s || '').replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Za-z])([0-9])/g, '$1 $2')
const fold = (s) => splitCamel(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const STOP = new Set('the of and a an to in on at by for with from as is was were be been being its their our it he she they we this that these those which who whose new old great first last into over under after before during between against among'.split(' '))
const toks = (s) => new Set(fold(s).split(/[^a-z0-9]+/).filter((t) => t.length >= 3 && !STOP.has(t)))
const lev = (a, b) => { if (Math.abs(a.length - b.length) > 3) return 9; const d = Array.from({ length: a.length + 1 }, (_, i) => i); for (let j = 1; j <= b.length; j++) { let p = d[0]; d[0] = j; for (let i = 1; i <= a.length; i++) { const t = d[i]; d[i] = Math.min(d[i] + 1, d[i - 1] + 1, p + (a[i - 1] === b[j - 1] ? 0 : 1)); p = t } } return d[a.length] }
const near = (x, y) => x === y || (Math.min(x.length, y.length) >= 4 && (x.startsWith(y) || y.startsWith(x))) || lev(x, y) <= (Math.max(x.length, y.length) >= 6 ? 2 : 1)
const overlap = (a, b) => { let n = 0; for (const t of a) for (const u of b) if (near(t, u)) { n++; break } return a.size ? n / a.size : 0 }

const decDir = '/tmp/decisions'
const retargets = []
for (const f of readdirSync(decDir)) {
  if (!f.endsWith('.json')) continue
  for (const d of JSON.parse(readFileSync(`${decDir}/${f}`, 'utf8'))) {
    if (d.action === 'retarget' && d.newSlug) retargets.push({ file: f, ...d })
  }
}

// fetch every new page's lead once (cached)
const slugs = [...new Set(retargets.map((r) => r.newSlug))]
const info = await verifySlugs(slugs, { cacheFile: '/tmp/wv-audit.json' })

const suspect = []
for (const r of retargets) {
  const v = info.get(r.newSlug)
  if (!v || !v.ok) { suspect.push({ ...r, why: `new page not OK: ${v?.reason || 'lookup failed'}`, score: -1 }); continue }
  // original meaning = the linked term + its narrative context (event desc /
  // glossary term); new meaning = the destination title + lead.
  const origin = new Set([...toks(r.term), ...toks(r.context)])
  const dest = new Set([...toks(v.title), ...toks(v.lead)])
  const sc = Math.max(overlap(origin, dest), overlap(toks(r.term), new Set(toks(v.title))))
  if (sc < 0.18) suspect.push({ ...r, why: `weak match orig↔"${v.title}" (${sc.toFixed(2)}) — lead: ${v.lead.slice(0, 110)}`, score: +sc.toFixed(2) })
}

suspect.sort((a, b) => a.score - b.score)
writeFileSync('/tmp/suspect-retargets.json', JSON.stringify(suspect, null, 2) + '\n')
console.log(`audited ${retargets.length} retargets → ${suspect.length} SUSPECT (low original↔destination overlap)`)
for (const s of suspect.slice(0, 40)) console.log(`  [${s.score}] ${s.tl} ${s.id} "${s.term}" → ${s.newSlug}\n      ${s.why}`)
if (suspect.length > 40) console.log(`  …and ${suspect.length - 40} more in /tmp/suspect-retargets.json`)
