#!/usr/bin/env node
// audit-reuse-links.mjs — deterministic REUSE/wrong-subject risk scan for one civ.
//
// The #7 link sweep reuses slugs born-verified in OTHER civs. fix-links proves a
// page is live + non-disambiguation + word-overlaps the term, but it CANNOT catch
// a wrong subject whose NAME overlaps (e.g. "Assassins"→Assassin's_Creed the video
// game, "Mansur"→Ustad_Mansur the Mughal painter). This flags the subset where a
// wrong subject can hide so a human/coordinator reviews ALL of it (not a sample):
//   1) slug words share < THRESHOLD of the term's words (homonym / divergence)
//   2) slug matches a pop-culture / modern wrong-subject pattern
// Glossary + event links are scanned (cross-links point at our own chapters).
//
// Usage: node scripts/audit-reuse-links.mjs <tlId> [--threshold=0.5]
import fs from 'fs';

const tl = process.argv[2];
if (!tl) { console.error('usage: node scripts/audit-reuse-links.mjs <tlId> [--threshold=0.5]'); process.exit(2); }
const threshArg = process.argv.find(a => a.startsWith('--threshold='));
const THRESH = threshArg ? parseFloat(threshArg.split('=')[1]) : 0.5;

const POP = /(_\(film\)|_\(novel\)|_\(song\)|_\(video_game\)|_\(album\)|_\(band\)|_\(TV_series\)|_\(TV\)|Assassin's_Creed|_\(franchise\)|_\(comics\)|_\(character\)|Conference|_Records|_\(company\)|_\(brand\))/i;

const read = (p) => { try { return JSON.parse(fs.readFileSync(p)); } catch { return {}; } };
const gloss = read(`content/.glossary-links-${tl}.json`);
const events = read(`content/.event-links-${tl}.json`);

const stop = new Set(['the','of','a','an','and','in','at','de','di','el','al','ibn','bin','el-','ad','dynasty','empire','kingdom','school','battle','great','city','river','i','ii','iii','iv','v','vi','vii','viii','ix','x']);
const words = (s) => (s || '').toLowerCase()
  .replace(/%[0-9a-f]{2}/gi, ' ')          // strip url-encoding
  .replace(/[_\-–—]/g, ' ')
  .normalize('NFD').replace(/[̀-ͯ]/g, '') // strip diacritics
  .replace(/[^a-z0-9 ]/g, ' ')
  .split(/\s+/).filter(w => w && !stop.has(w));

// term word counts as covered if a slug word is a prefix/substring of it or vice
// versa (handles plural/derivation: Barmakid⊂Barmakids, Sogdian~Sogdia, Muawiya I→Muawiya).
const covered = (w, sw) => sw.some(s => s === w || s.startsWith(w) || w.startsWith(s) || (w.length >= 4 && s.includes(w)) || (s.length >= 4 && w.includes(s)));

const flags = [];
const scan = (obj, kind) => {
  for (const ch of Object.keys(obj)) {
    for (const e of obj[ch]) {
      if (!e.wikiSlug) continue;                 // blurb-only / def: → nothing external
      const term = e.term || e.matchText || '';
      const tw = [...new Set(words(term))];
      const sw = [...new Set(words(e.wikiSlug))];
      let overlap = 0; for (const w of tw) if (covered(w, sw)) overlap++;
      const frac = tw.length ? overlap / tw.length : 1;
      const pop = POP.test(e.wikiSlug);
      if (pop || frac < THRESH) {
        flags.push({ ch, kind, term, matchText: e.matchText, slug: decodeURIComponent(e.wikiSlug), frac: frac.toFixed(2), reason: pop ? 'POP-CULTURE/MODERN pattern' : `low word-overlap ${frac.toFixed(2)}` });
      }
    }
  }
};
scan(gloss, 'glossary');
scan(events, 'event');

flags.sort((a, b) => (a.reason.startsWith('POP') ? -1 : 0) - (b.reason.startsWith('POP') ? -1 : 0) || Number(a.ch) - Number(b.ch));
console.log(`audit-reuse-links ${tl}: ${flags.length} entries to eyeball (slug↔term divergence ≥ ${1 - THRESH} or pop-culture pattern)`);
console.log('Review each: does the page SUBJECT match what this chapter means? (fix-links cannot decide this.)\n');
for (const f of flags) console.log(`  ch${f.ch} [${f.kind}] "${f.matchText}" → ${f.slug}   (${f.reason})`);
if (flags.some(f => f.reason.startsWith('POP'))) { console.error('\n⚠ POP-CULTURE/MODERN pattern present — almost certainly a wrong-subject link.'); process.exit(1); }
