#!/usr/bin/env node
// One-shot single-writer merge of batch-5 coverage proposals into link JSONs.
// Dedupes matchText per (file,chapter); skips a glossary add if the matchText
// already exists as an event/glossary/cross link in that chapter (avoids contention).
import fs from 'node:fs';

const PROP = 'audits/link-coverage/PROPOSALS-batch5.json';
const props = JSON.parse(fs.readFileSync(PROP, 'utf8'));

function load(p){ return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p,'utf8')) : {}; }
function save(p,o){ fs.writeFileSync(p, JSON.stringify(o,null,2)+'\n'); }

let summary = [];
for (const [tl, chapters] of Object.entries(props)) {
  const ev = load(`content/.event-links-${tl}.json`);
  const gl = load(`content/.glossary-links-${tl}.json`);
  const cr = load(`content/.cross-links-${tl}.json`);
  const wvPath = `content/.link-waivers-${tl}.json`;
  const wv = load(wvPath);

  let added = {ev:0, gl:0, blurb:0, wv:0, skipped:0};

  for (const [ch, data] of Object.entries(chapters)) {
    ev[ch] = ev[ch]||[]; gl[ch] = gl[ch]||[]; cr[ch] = cr[ch]||[];
    const taken = new Set([
      ...ev[ch].map(e=>e.matchText),
      ...gl[ch].map(e=>e.matchText),
      ...cr[ch].map(e=>e.matchText),
    ]);
    for (const e of (data.events||[])) {
      if (taken.has(e.matchText)) { added.skipped++; continue; }
      ev[ch].push({eventId:e.eventId, matchText:e.matchText}); taken.add(e.matchText); added.ev++;
    }
    for (const g of (data.glossary||[])) {
      if (taken.has(g.matchText)) { added.skipped++; continue; }
      gl[ch].push({term:g.term, matchText:g.matchText, wikiSlug:g.wikiSlug, type:g.type}); taken.add(g.matchText); added.gl++;
    }
    for (const b of (data.glossary_blurbs||[])) {
      if (taken.has(b.matchText)) { added.skipped++; continue; }
      gl[ch].push({term:b.term, matchText:b.matchText, definition:b.definition, type:b.type}); taken.add(b.matchText); added.blurb++;
    }
    if (data.waivers && data.waivers.length) {
      const cur = new Set(wv[ch]||[]);
      for (const t of data.waivers) cur.add(t);
      wv[ch] = [...cur];
      added.wv += data.waivers.length;
    }
  }
  save(`content/.event-links-${tl}.json`, ev);
  save(`content/.glossary-links-${tl}.json`, gl);
  save(`content/.cross-links-${tl}.json`, cr);
  save(wvPath, wv);
  summary.push(`${tl}: +${added.ev} event, +${added.gl} glossary, +${added.blurb} blurb, +${added.wv} waiver (${added.skipped} dupes skipped)`);
}
console.log(summary.join('\n'));
