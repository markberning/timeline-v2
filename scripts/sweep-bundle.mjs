// Build per-chapter input bundles for an event-upgrade sweep of one civ.
// Usage: node scripts/sweep-bundle.mjs <tlId>
//
// Each event in a bundle now carries a DETERMINISTICALLY PREFETCHED wiki extract
// (`wikiExtract`, the article intro) and a born-verified lead-image filename
// (`leadImage`, a Commons File:) pulled from the Wikipedia REST summary endpoint.
// This is the token-saving spine of the sweep: the author agent reads these from
// the bundle instead of doing ~4 full-page WebFetches per event (each fetch then
// re-read from cache on every later turn — the #1 driver of the 5-hour-window
// burn, ~12M cache-read tokens/civ). Zero model tokens are spent here.
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

// ---- deterministic wiki prefetch (no model tokens) ----
// REST summary follows redirects 1:1, returns the intro extract + the lead image's
// real URL. We only keep the lead image when it lives on Commons (the gatherer
// resolves Commons files; a local en.wikipedia file won't download there).
const UA = 'stuffhappened-sweep/1.0 (https://stuffhappened.com; contact: mebernin@gmail.com)';
function commonsFileFromUrl(u) {
  if (!u || !/\/wikipedia\/commons\//.test(u)) return '';
  try { return 'File:' + decodeURIComponent(u.split('/').pop()).replace(/\s/g, '_'); } catch { return ''; }
}
async function fetchSummary(slug) {
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}?redirect=true`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA, accept: 'application/json' } });
    if (!r.ok) return { extract: '', leadImage: '' };
    const j = await r.json();
    return {
      extract: (j.extract || '').trim(),
      leadImage: commonsFileFromUrl(j.originalimage?.source || j.thumbnail?.source || ''),
    };
  } catch { return { extract: '', leadImage: '' }; }
}
// gather the unique slugs across all chapters, fetch each ONCE with bounded concurrency
const slugs = new Set();
for (const ch of Object.keys(el)) for (const link of el[ch]) {
  const e = byId.get(link.eventId); if (!e) continue;
  const s = e.wikiSlug || link.wikiSlug || ''; if (s) slugs.add(s);
}
const wiki = new Map();
const slugList = [...slugs];
const CONC = 6;
let fetched = 0;
for (let i = 0; i < slugList.length; i += CONC) {
  const batch = slugList.slice(i, i + CONC);
  const res = await Promise.all(batch.map(s => fetchSummary(s)));
  batch.forEach((s, k) => wiki.set(s, res[k]));
  fetched += batch.length;
  process.stderr.write(`\rprefetch ${fetched}/${slugList.length} wiki summaries`);
}
process.stderr.write('\n');

const outDir = `/tmp/${tl}-bundles`;
fs.mkdirSync(outDir, { recursive: true });
const summary = [];
let withExtract = 0, withLead = 0, totalEv = 0;
for (const ch of Object.keys(el)) {
  const seen = new Set(); const events = [];
  for (const link of el[ch]) {
    if (!link.eventId || seen.has(link.eventId)) continue; seen.add(link.eventId);
    const e = byId.get(link.eventId); if (!e) continue;
    const slug = e.wikiSlug || link.wikiSlug || '';
    const w = wiki.get(slug) || { extract: '', leadImage: '' };
    totalEv++; if (w.extract) withExtract++; if (w.leadImage) withLead++;
    events.push({ id: e.id, label: e.label, year: e.year, endYear: e.endYear, description: e.description || '', wikiSlug: slug, commonsFile: e.commonsFile || '', wikiExtract: w.extract, leadImage: w.leadImage });
  }
  const bundle = { tl, chapter: ch, chapterTitle: chText[ch]?.title || '', narrative: chText[ch]?.body || '', events };
  fs.writeFileSync(`${outDir}/ch${ch}.json`, JSON.stringify(bundle, null, 2));
  summary.push(`ch${ch} "${bundle.chapterTitle}": ${events.length} ev, ${bundle.narrative.length}c`);
}
fs.mkdirSync(`/tmp/${tl}-out`, { recursive: true });
console.log(summary.join('\n'));
console.error(`prefetched extracts for ${withExtract}/${totalEv} events · lead image for ${withLead}/${totalEv}`);
