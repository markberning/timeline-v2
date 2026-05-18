// fix-links.mjs — DETERMINISTIC link + photo checker/fixer. NO LLM.
//
// For one chapter (or a whole civ), every Wikipedia link is judged by three
// machine-only tests:
//   1. PAGE   — exists / not disambiguation / not redirected-away / title
//               stable (reuses scripts/lib/wiki-verify.mjs).
//   2. SUBJECT— word-overlap between the linked term (+ its context) and the
//               target page's title + lead sentence. ~zero overlap = the link
//               points at the wrong topic (the "Panku → Chinese god" class).
//   3. PHOTO  — word-overlap between the event's image filename + caption and
//               the event subject; plus a reuse check (same image file on
//               unrelated events = a recycled generic). NO vision model.
//
// Policy when a test fails and there is no clean machine fix: DROP the
// Wikipedia target / photo and flag it for an authored house-voice blurb /
// caption ("a missing link beats a wrong link"). Subject-correctness is never
// re-judged by a model.
//
// Default = DRY RUN: prints a report, writes nothing. (--apply not yet wired
// — the test pass is report-only by design.)
//
// Usage:
//   node scripts/fix-links.mjs <tlId> [--chapter=N]

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { verifySlugs, isDefSlug } from './lib/wiki-verify.mjs'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const chapterArg = args.find((a) => a.startsWith('--chapter='))
const onlyChapter = chapterArg ? chapterArg.split('=')[1] : null
const apply = args.includes('--apply')
const emitArg = args.find((a) => a.startsWith('--emit-flags='))
const emitFlags = emitArg ? emitArg.split('=')[1] : null
if (!tlId) { console.error('Usage: node scripts/fix-links.mjs <tlId> [--chapter=N]'); process.exit(2) }

const readJson = (p, fb) => (existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : fb)
const content = readJson(`content/${tlId}.json`, null)
if (!content) { console.error(`No content/${tlId}.json — run npm run parse first`); process.exit(2) }
const eventLinks = readJson(`content/.event-links-${tlId}.json`, {})
const glossaryLinks = readJson(`content/.glossary-links-${tlId}.json`, {})
const refEvents = (readJson(`reference-data/${tlId}.json`, { events: [] }).events) || []
const captionOverrides = readJson('content/.caption-overrides.json', {})

const eventById = Object.fromEntries((content.events || []).map((e) => [e.id, e]))
const refById = Object.fromEntries(refEvents.map((e) => [e.id, e]))

// ── deterministic tokenizer ───────────────────────────────────────────────
const STOP = new Set(('the of and a an to in on at by for with from as is was were be been being '
  + 'his her its their our it he she they we you i this that these those which who whom whose '
  + 'first last new old great into over under after before during between against among').split(' '))
// generic narrative scaffolding stripped from the TERM side so a descriptive
// event label ("Accession of …", "Death of the last …") cannot dilute the match.
const GENERIC = new Set(('accession death birth construction founding fall rise reign battle war revolt '
  + 'alliance migration order treaty inscription inscriptions empire khaganate dynasty kingdom era '
  + 'period age city king queen emperor qaghan khan last three').split(' '))
// split run-together filenames ("YuanEmperorAlbumGenghisPortrait", "Sogdia2")
const splitCamel = (s) => String(s || '')
  .replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/([A-Za-z])([0-9])/g, '$1 $2')
const fold = (s) => splitCamel(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const toks = (s, extraDrop = null) =>
  new Set(fold(s).split(/[^a-z0-9]+/).filter((t) => t.length >= 3 && !STOP.has(t) && !(extraDrop && extraDrop.has(t))))

// Levenshtein, bailing early when the lengths are too far apart.
const lev = (a, b) => {
  if (Math.abs(a.length - b.length) > 3) return 99
  const d = Array.from({ length: a.length + 1 }, (_, i) => i)
  for (let j = 1; j <= b.length; j++) {
    let prev = d[0]; d[0] = j
    for (let i = 1; i <= a.length; i++) {
      const tmp = d[i]
      d[i] = Math.min(d[i] + 1, d[i - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = tmp
    }
  }
  return d[a.length]
}
// Two words "match" if equal, one is the other's start (plurals/suffixes:
// qanat/qanats), or they are 1–2 edits apart (spelling variants:
// Orchon/Orkhon, Kutadgu/Qutadghu).
const near = (x, y) => {
  if (x === y) return true
  if (Math.min(x.length, y.length) >= 4 && (x.startsWith(y) || y.startsWith(x))) return true
  return lev(x, y) <= (Math.max(x.length, y.length) >= 6 ? 2 : 1)
}
const has = (t, set) => { for (const u of set) if (near(t, u)) return true; return false }
const overlap = (a, b) => { let n = 0; for (const t of a) if (has(t, b)) n++; return a.size ? n / a.size : 1 }

// Romanization-insensitive name flattening so the SAME name written in two
// systems collapses to one form: "Yi Ja-gyeom" == "Yi Chagyŏm". Letters only,
// RR↔MR vowel digraphs and the j/ch consonant unified, doubles collapsed.
// Used ONLY slug-name vs page-title (the most reliable identity signal); kept
// strict (exact or clean containment, no edit slack) so a true mismatch like
// "Panku" vs "Pangu" is NOT wrongly rescued.
const squash = (s) => fold(s).replace(/[^a-z]/g, '')
  .replace(/eo/g, 'o').replace(/eu/g, 'u').replace(/oe/g, 'o').replace(/ae/g, 'e')
  .replace(/ch/g, 'j').replace(/(.)\1+/g, '$1')
const sameName = (a, b) => {
  const x = squash(a), y = squash(b)
  if (x.length < 5 || y.length < 5) return false
  return x === y || x.includes(y) || y.includes(x)
}

// ── chapter scope ─────────────────────────────────────────────────────────
const chapters = onlyChapter ? [onlyChapter] : Object.keys(eventLinks)
const eventIds = new Set()
const glossEntries = [] // {chapter, entry}
for (const ch of chapters) {
  for (const l of (eventLinks[ch] || [])) eventIds.add(l.eventId)
  for (const e of (glossaryLinks[ch] || [])) glossEntries.push({ ch, entry: e })
}

// ── collect slugs ─────────────────────────────────────────────────────────
const work = [] // {kind, id, term, slug, subjectStr, imageFile, caption}
for (const id of eventIds) {
  const ev = eventById[id]; if (!ev) continue
  const ref = refById[id] || {}
  if (ev.wikiSlug && !isDefSlug(ev.wikiSlug)) {
    work.push({
      kind: 'event', id, term: ev.label, slug: ev.wikiSlug,
      subjectStr: `${ev.label} ${ref.description || ''}`,
      commonsFile: ref.commonsFile || ev.commonsFile || '',
      caption: captionOverrides[id] || '',
    })
  }
}
for (const { entry } of glossEntries) {
  if (!entry.wikiSlug || isDefSlug(entry.wikiSlug)) continue // authored def: skip — nothing external to be wrong
  work.push({ kind: 'glossary', id: entry.term, term: entry.term, slug: entry.wikiSlug, subjectStr: entry.term })
}

const slugs = [...new Set(work.map((w) => w.slug))]
const res = await verifySlugs(slugs)

// ── reuse map: same page-image filename across unrelated events ────────────
const imageOf = (w) => w.commonsFile || (res.get(w.slug)?.image || '')
const imgUsers = new Map()
for (const w of work.filter((w) => w.kind === 'event')) {
  const img = imageOf(w); if (!img) continue
  if (!imgUsers.has(img)) imgUsers.set(img, [])
  imgUsers.get(img).push(w.id)
}

// ── classify ──────────────────────────────────────────────────────────────
const PAGE_FAIL = [], SUBJECT_FAIL = [], PHOTO_FAIL = [], PASS = []
for (const w of work) {
  const r = res.get(w.slug)
  if (!r || !r.ok) { PAGE_FAIL.push({ ...w, why: r?.reason || 'lookup failed' }); continue }
  // A renamed page is fine if it still lands on the right topic: judge it by
  // the page it ACTUALLY lands on (r.title/r.lead are already post-rename).
  // Only an off-topic landing is caught below, by the subject test.

  const termT = toks(w.term, GENERIC)
  const pageT = new Set([...toks(r.title), ...toks(r.lead)])
  const slugT = toks(w.slug.replace(/_/g, ' '), GENERIC)
  // subject ok if the named term OR the slug's own words appear in title+lead.
  const sc = Math.max(overlap(termT, pageT), overlap(slugT, pageT))
  if (sc === 0 && !sameName(w.slug.replace(/_/g, ' '), r.title)) {
    SUBJECT_FAIL.push({ ...w, why: `0 word-overlap with "${r.title}" — ${r.lead.slice(0, 90)}…` }); continue
  }

  if (w.kind === 'event') {
    const img = imageOf(w)
    if (img) {
      const reuse = imgUsers.get(img) || []
      if (reuse.length > 1) {
        PHOTO_FAIL.push({ ...w, why: `image "${img}" reused on ${reuse.length} events (${reuse.join(', ')}) — recycled generic` }); continue
      }
      const imgT = new Set([...toks(img.replace(/\.\w+$/, '')), ...toks(w.caption)])
      const subjT = toks(w.subjectStr, GENERIC)
      if (imgT.size && overlap(subjT, imgT) === 0 && overlap(imgT, subjT) === 0) {
        PHOTO_FAIL.push({ ...w, why: `image "${img}"${w.caption ? ` / caption "${w.caption.slice(0, 50)}…"` : ' (no caption)'} — 0 overlap with subject` }); continue
      }
    }
  }
  PASS.push({ ...w, title: r.title })
}

// ── resolve photo fixes: for a reused image, the single best-matching event
//    KEEPS it; every other copy is dropped. A lone off-topic image is dropped.
//    (Dropping = the event renders with no picture; its text/link stay.)
const score = (w, img) => overlap(toks(w.subjectStr, GENERIC),
  new Set([...toks(img.replace(/\.\w+$/, '')), ...toks(w.caption)]))
const dropPhoto = new Map() // eventId -> reason
const keepPhoto = []        // eventId (the one kept per reused image)
const byImage = new Map()
for (const w of PHOTO_FAIL) { const i = imageOf(w); if (!byImage.has(i)) byImage.set(i, []); byImage.get(i).push(w) }
for (const [img, group] of byImage) {
  if (group.length === 1) { dropPhoto.set(group[0].id, `off-topic image "${img}", no caption to save it`); continue }
  let best = group[0], bs = -1
  for (const w of group) { const s = score(w, img); if (s > bs) { bs = s; best = w } }
  for (const w of group) {
    if (w === best && bs > 0) keepPhoto.push(w.id)
    else dropPhoto.set(w.id, `same image "${img}" on ${group.length} events; kept only on ${bs > 0 ? best.id : 'none (no match)'}`)
  }
}

// Links that genuinely point at the wrong/dead page are NOT auto-edited —
// retargeting or writing a replacement blurb is a human/agent call. They are
// listed in a fix-needed file.
const linkFixObjs = [...PAGE_FAIL, ...SUBJECT_FAIL].map((x) => ({
  tl: tlId, kind: x.kind, id: x.id, term: x.term, slug: x.slug,
  reason: x.why, context: (x.subjectStr || x.term || '').replace(/\s+/g, ' ').trim().slice(0, 300),
}))
const linkFix = linkFixObjs.map((x) => `${x.kind}\t${x.id}\tslug=${x.slug}\t${x.reason}`)
if (emitFlags) { writeFileSync(emitFlags, JSON.stringify(linkFixObjs, null, 2) + '\n'); console.log(`emitted ${linkFixObjs.length} flags → ${emitFlags}`) }

// ── report ────────────────────────────────────────────────────────────────
const tag = apply ? 'APPLIED' : 'DRY RUN, no writes'
console.log(`\nfix-links ${tlId}${onlyChapter ? ` ch${onlyChapter}` : ''} — ${work.length} links checked (${tag})`)
console.log(`\n✓ PASS: ${PASS.length}/${work.length}`)
console.log(`pictures dropped: ${dropPhoto.size}   pictures kept (best match): ${keepPhoto.length}`)
console.log(`links needing a human retarget / our own write-up: ${linkFix.length}`)
if (dropPhoto.size) {
  console.log('\n— pictures being dropped —')
  for (const [id, why] of dropPhoto) console.log(`  ${id}: ${why}`)
}
if (linkFix.length) {
  console.log('\n— links flagged for a human (not auto-changed) —')
  for (const l of linkFix) console.log(`  ${l.replace(/\t/g, '  ')}`)
}

if (apply) {
  const rp = 'content/.image-rejections.json'
  const rej = readJson(rp, {})
  for (const [id, why] of dropPhoto) rej[id] = why // merge — never clobber other civs
  writeFileSync(rp, JSON.stringify(rej, Object.keys(rej).sort(), 2) + '\n')
  console.log(`\nwrote ${dropPhoto.size} entries into ${rp} (merged; total ${Object.keys(rej).length}).`)
  if (linkFix.length) {
    const fp = `LINK-FIX-NEEDED-${tlId}.txt`
    writeFileSync(fp, linkFix.join('\n') + '\n')
    console.log(`wrote ${fp} — ${linkFix.length} links need a human retarget or our own short write-up.`)
  }
  console.log('run `npm run parse` for the dropped pictures to take effect, then restart the dev server.')
} else {
  console.log('\n(re-run with --apply to write these changes)')
}
