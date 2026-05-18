// verify-links.mjs — CREATION-TIME Wikipedia link verification + snapshot.
//
// Run this while curating a civ's links (and once per existing civ to adopt
// the new process). It does the deterministic half and surfaces the human
// half:
//
//   AUTO-FAIL  — dead page or disambiguation page. ALWAYS wrong; the slug
//                must be retargeted or replaced with an authored blurb
//                (glossary `definition` / drop the event wikiSlug). No
//                judgement call — these can never be confirmed.
//   CONFIRM    — page resolves cleanly. Printed with its real title + lead
//                sentence + the events/terms that use it, so the curator
//                confirms it is the RIGHT subject (the one thing a machine
//                cannot decide). Not the right page → retarget or blurb.
//
//   --write-snapshot  — record every clean slug's confirmed state
//     (title + lead + image) into content/.link-snapshots-<tl>.json. THIS
//     IS THE CONTRACT: the deterministic ship gate later asserts the live
//     page still matches this snapshot (still exists, not disambiguation,
//     title stable). Only run --write-snapshot once the CONFIRM list has
//     actually been eyeballed for subject correctness — snapshotting is
//     "I confirm these are right", not "rubber-stamp whatever is here".
//
// NO LLM. The only AI in the pipeline is map generation/QA.
//
// Usage:
//   node scripts/verify-links.mjs <tlId> [--write-snapshot] [--json] [--report-only]

import { readFileSync, writeFileSync, existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { verifySlugs, isDefSlug } from './lib/wiki-verify.mjs'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const write = args.includes('--write-snapshot')
const asJson = args.includes('--json')
const reportOnly = args.includes('--report-only')
const refresh = args.includes('--refresh')
if (!tlId) { console.error('Usage: node scripts/verify-links.mjs <tlId> [--write-snapshot]'); process.exit(2) }

const contentPath = `content/${tlId}.json`
if (!existsSync(contentPath)) { console.error(`No ${contentPath} — run npm run parse first`); process.exit(2) }
const content = JSON.parse(readFileSync(contentPath, 'utf8'))
const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

// Collect distinct real slugs, tracking which events / glossary terms use each.
const users = new Map() // slug -> { events:Set, terms:Set, kind:'event'|'glossary'|'both' }
const note = (slug, kind, who) => {
  if (!slug || isDefSlug(slug)) return
  const u = users.get(slug) || { events: new Set(), terms: new Set() }
  if (kind === 'event') u.events.add(who); else u.terms.add(who)
  users.set(slug, u)
}
for (const e of content.events || []) note(e.wikiSlug, 'event', e.id)
const seenTerm = new Set()
for (const g of content.glossary || []) {
  const k = (g.term || '').toLowerCase()
  if (!k || seenTerm.has(k)) continue
  seenTerm.add(k)
  note(g.wikiSlug, 'glossary', stripHtml(g.term))
}

const slugs = [...users.keys()]
if (slugs.length === 0) {
  console.log(`verify-links ${tlId}: no Wikipedia slugs (all authored blurbs / slug-less) — nothing to verify`)
  if (write) writeFileSync(`content/.link-snapshots-${tlId}.json`, JSON.stringify({ events: {}, glossary: {} }, null, 2) + '\n')
  process.exit(0)
}

const results = await verifySlugs(slugs, { refresh })

const autoFail = []
const confirm = []
const snapshot = { events: {}, glossary: {} }
for (const slug of slugs) {
  const r = results.get(slug)
  const u = users.get(slug)
  const where = [...(u.events.size ? [`events: ${[...u.events].join(', ')}`] : []), ...(u.terms.size ? [`terms: ${[...u.terms].join(', ')}`] : [])].join(' | ')
  if (!r || !r.ok) {
    autoFail.push({ slug, reason: r?.reason || 'lookup failed', where })
    continue
  }
  confirm.push({ slug, title: r.title, lead: r.lead, redirectedTo: r.redirectedTo, where })
  const rec = { title: r.title, lead: r.lead, image: r.image }
  if (u.events.size) snapshot.events[slug] = rec
  if (u.terms.size) snapshot.glossary[slug] = rec
}

if (asJson) {
  console.log(JSON.stringify({ tlId, total: slugs.length, autoFail, confirm }, null, 2))
} else {
  if (autoFail.length) {
    console.log(`\n✗ AUTO-FAIL — must retarget or replace with an authored blurb (${autoFail.length}):`)
    for (const f of autoFail) console.log(`  ${f.slug} — ${f.reason}\n    (${f.where})`)
  }
  console.log(`\n● CONFIRM these are the RIGHT subject (${confirm.length}) — not right → retarget or blurb:`)
  for (const c of confirm) {
    console.log(`  ${c.slug}${c.redirectedTo ? ` → (redirects to "${c.redirectedTo}")` : ''}`)
    console.log(`    title: ${c.title}`)
    console.log(`    lead : ${c.lead.slice(0, 160)}`)
    console.log(`    used : ${c.where}`)
  }
  console.log(`\nverify-links ${tlId}: ${slugs.length} slugs · ${autoFail.length} auto-fail · ${confirm.length} to confirm`)
}

if (write) {
  const snapPath = `content/.link-snapshots-${tlId}.json`
  writeFileSync(snapPath, JSON.stringify(snapshot, null, 2) + '\n')
  // stderr under --json so stdout stays valid JSON for piping.
  const notice = (m) => (asJson ? console.error(m) : console.log(m))
  notice(`\nWrote ${snapPath} (${Object.keys(snapshot.events).length} event + ${Object.keys(snapshot.glossary).length} glossary confirmed pages).`)
  notice('This snapshot is the contract the deterministic ship gate enforces. Only commit it if the CONFIRM list is subject-correct.')
}

if (autoFail.length && !reportOnly && !write) process.exit(1)
