// Build per-chapter input bundles for an event-upgrade sweep of one civ.
// Usage: node scripts/sweep-bundle.mjs <tlId>
import fs from 'fs';
const tl = process.argv[2];
if (!tl) { console.error('usage: sweep-bundle.mjs <tlId>'); process.exit(1); }
const el = JSON.parse(fs.readFileSync(`content/.event-links-${tl}.json`, 'utf8'));
const d = JSON.parse(fs.readFileSync(`reference-data/${tl}.json`, 'utf8'));
const evs = d.events || (d.spans ? d.spans.flatMap(s => s.events || []) : []);
const byId = new Map(evs.map(e => [e.id, e]));
const md = fs.readFileSync(`narratives/${tl}.md`, 'utf8');
const parts = md.split(/^# Chapter (\d+)\s*[—-]\s*(.*)$/m);
const chText = {};
for (let i = 1; i < parts.length; i += 3) chText[parts[i]] = { title: parts[i + 1].trim(), body: parts[i + 2].trim() };
const outDir = `/tmp/${tl}-bundles`;
fs.mkdirSync(outDir, { recursive: true });
const summary = [];
for (const ch of Object.keys(el)) {
  const seen = new Set(); const events = [];
  for (const link of el[ch]) {
    if (!link.eventId || seen.has(link.eventId)) continue; seen.add(link.eventId);
    const e = byId.get(link.eventId); if (!e) continue;
    events.push({ id: e.id, label: e.label, year: e.year, endYear: e.endYear, description: e.description || '', wikiSlug: e.wikiSlug || link.wikiSlug || '', commonsFile: e.commonsFile || '' });
  }
  const bundle = { tl, chapter: ch, chapterTitle: chText[ch]?.title || '', narrative: chText[ch]?.body || '', events };
  fs.writeFileSync(`${outDir}/ch${ch}.json`, JSON.stringify(bundle, null, 2));
  summary.push(`ch${ch} "${bundle.chapterTitle}": ${events.length} ev, ${bundle.narrative.length}c`);
}
fs.mkdirSync(`/tmp/${tl}-out`, { recursive: true });
console.log(summary.join('\n'));
