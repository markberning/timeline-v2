#!/usr/bin/env node
// sweep-merge.mjs — merge link-sweep agent outputs into a civ's curated files.
//
// Automates the coordinator merge step of the #7 link pipeline (audits/link-pipeline.md).
// Fixes the two repeated hand-patches:
//   1. Dedups new matchText against EXISTING glossary + cross + EVENT links (not just
//      glossary+cross) — so a new glossary entry that collides with an existing
//      cross/event link is SKIPPED (the existing link already owns that span) instead
//      of being silently dropped by the parser later. Collisions are REPORTED.
//   2. Derives the valid chapter set from the narrative (`# Chapter N` headers) — never
//      invents ch9/ch10 keys for an 8-chapter civ.
//
// Agent output convention: one or more dirs, each containing per-chapter files
//   ch{N}.glossary.json  ch{N}.cross.json  ch{N}.blurbs.json  ch{N}.waivers.json
// (blurbs are glossary entries with `definition` and no wikiSlug; merged into glossary.)
//
// Usage: node scripts/sweep-merge.mjs <tlId> <dir1> [dir2 ...]
import fs from 'fs';

const [tl, ...dirs] = process.argv.slice(2);
if (!tl || dirs.length === 0) { console.error('usage: node scripts/sweep-merge.mjs <tlId> <dir1> [dir2 ...]'); process.exit(2); }

const narr = `narratives/${tl}.md`;
if (!fs.existsSync(narr)) { console.error(`no narrative: ${narr}`); process.exit(2); }
const chapters = new Set([...fs.readFileSync(narr, 'utf8').matchAll(/^# Chapter\s+(\d+)\b/gm)].map(m => m[1]));
if (!chapters.size) { console.error('no `# Chapter N` headers found'); process.exit(2); }
const maxCh = Math.max(...[...chapters].map(Number));

const gP = `content/.glossary-links-${tl}.json`;
const cP = `content/.cross-links-${tl}.json`;
const eP = `content/.event-links-${tl}.json`;
const wP = `content/.link-waivers-${tl}.json`;
const load = (p, dflt) => { try { return JSON.parse(fs.readFileSync(p)); } catch { return dflt; } };
const gloss = load(gP, {}), cross = load(cP, {}), events = load(eP, {}), waiv = load(wP, {});

const rd = (dir, f) => { try { return JSON.parse(fs.readFileSync(`${dir}/${f}`)); } catch { return []; } };
const norm = (s) => (s || '').trim();

let addG = 0, addC = 0, addW = 0;
const collisions = [];   // new entry skipped because an existing link owns its matchText
const badChapter = [];   // input referenced a chapter the narrative doesn't have

for (const ch of [...chapters].sort((a, b) => a - b)) {
  gloss[ch] = gloss[ch] || []; cross[ch] = cross[ch] || [];
  // owner map: matchText -> which link type already claims it (existing + added this run)
  const owner = new Map();
  for (const e of gloss[ch]) owner.set(norm(e.matchText), 'glossary');
  for (const e of (cross[ch] || [])) owner.set(norm(e.matchText), 'cross');
  for (const e of (events[ch] || [])) owner.set(norm(e.matchText), 'event');

  for (const dir of dirs) {
    for (const e of [...rd(dir, `ch${ch}.glossary.json`), ...rd(dir, `ch${ch}.blurbs.json`)]) {
      const m = norm(e.matchText);
      if (!m) continue;
      if (owner.has(m)) { collisions.push(`ch${ch} glossary "${m}" — already a ${owner.get(m)} link (skipped)`); continue; }
      gloss[ch].push(e); owner.set(m, 'glossary'); addG++;
    }
    for (const e of rd(dir, `ch${ch}.cross.json`)) {
      const m = norm(e.matchText);
      if (!m) continue;
      if (owner.has(m)) { collisions.push(`ch${ch} cross "${m}" — already a ${owner.get(m)} link (skipped)`); continue; }
      cross[ch].push(e); owner.set(m, 'cross'); addC++;
    }
    const nw = rd(dir, `ch${ch}.waivers.json`);
    if (nw.length) { const set = new Set([...(waiv[ch] || []), ...nw]); addW += set.size - (waiv[ch] || []).length; waiv[ch] = [...set]; }
  }
}

// flag input that referenced chapters outside the narrative
for (const dir of dirs) for (const f of (fs.existsSync(dir) ? fs.readdirSync(dir) : [])) {
  const m = f.match(/^ch(\d+)\./); if (m && !chapters.has(m[1])) badChapter.push(`${dir}/${f} (no chapter ${m[1]} in narrative)`);
}

fs.writeFileSync(gP, JSON.stringify(gloss, null, 2) + '\n');
fs.writeFileSync(cP, JSON.stringify(cross, null, 2) + '\n');
fs.writeFileSync(wP, JSON.stringify(waiv, null, 2) + '\n');

let gn = 0, cn = 0, wn = 0;
for (const k in gloss) gn += gloss[k].length;
for (const k in cross) cn += cross[k].length;
for (const k in waiv) wn += waiv[k].length;
console.log(`sweep-merge ${tl}: ${maxCh} chapters · +${addG} glossary, +${addC} cross, +${addW} waivers`);
console.log(`  totals now: glossary ${gn}, cross ${cn}, waivers ${wn}`);
if (collisions.length) {
  console.log(`\n  ${collisions.length} collision(s) skipped (existing link already covers the term — correct, not a loss):`);
  for (const c of collisions) console.log(`    · ${c}`);
}
if (badChapter.length) {
  console.error(`\n  ⚠ ${badChapter.length} input file(s) referenced a non-existent chapter (ignored):`);
  for (const b of badChapter) console.error(`    · ${b}`);
}
console.log('\nNext: node scripts/sweep-verify.mjs ' + tl);
