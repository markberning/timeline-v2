// collect-autofails.mjs — for one civ, emit a retarget-links flags file for
// EVERY dead/disambiguation slug in the full event+glossary pool (the wider
// set the snapshot/ship gate enforces — a superset of chapter-linked terms
// that fix-links scans). Mirrors verify-links.mjs collection exactly, then
// EXPANDS one bad slug shared by N events/terms into N flags (each event's
// wikiSlug / each term is fixed independently). NO LLM.
//
// Usage: node scripts/collect-autofails.mjs <tlId> <outPath>

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { verifySlugs, isDefSlug } from './lib/wiki-verify.mjs'

const tlId = process.argv[2]
const outPath = process.argv[3]
if (!tlId || !outPath) { console.error('Usage: collect-autofails.mjs <tlId> <outPath>'); process.exit(2) }

const cp = `content/${tlId}.json`
if (!existsSync(cp)) { console.error(`no ${cp}`); process.exit(0) }
const content = JSON.parse(readFileSync(cp, 'utf8'))
const stripHtml = (s) => (s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

// slug -> { events:[{id,label,desc}], terms:[term] }
const users = new Map()
const ev = (slug, e) => { if (!slug || isDefSlug(slug)) return; const u = users.get(slug) || { events: [], terms: [] }; u.events.push(e); users.set(slug, u) }
const tm = (slug, t) => { if (!slug || isDefSlug(slug)) return; const u = users.get(slug) || { events: [], terms: [] }; u.terms.push(t); users.set(slug, u) }
for (const e of content.events || []) ev(e.wikiSlug, { id: e.id, label: e.label || '', desc: stripHtml(e.description) })
const seen = new Set()
for (const g of content.glossary || []) { const k = (g.term || '').toLowerCase(); if (!k || seen.has(k)) continue; seen.add(k); tm(g.wikiSlug, stripHtml(g.term)) }

const slugs = [...users.keys()]
if (!slugs.length) { writeFileSync(outPath, '[]\n'); process.exit(0) }
const res = await verifySlugs(slugs)

const flags = []
for (const slug of slugs) {
  const r = res.get(slug)
  if (r && r.ok) continue // alive & not a disambiguation — fine
  const reason = r?.reason || 'lookup failed'
  const u = users.get(slug)
  for (const e of u.events) flags.push({ tl: tlId, kind: 'event', id: e.id, term: e.label, slug, reason, context: `${e.label} ${e.desc}`.slice(0, 300) })
  for (const t of u.terms) flags.push({ tl: tlId, kind: 'glossary', id: t, term: t, slug, reason, context: t })
}
writeFileSync(outPath, JSON.stringify(flags, null, 2) + '\n')
console.log(`${tlId}\t${flags.length}`)
