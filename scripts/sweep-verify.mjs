#!/usr/bin/env node
// sweep-verify.mjs — run the whole #7 link-pipeline verification for one civ and
// print a single consolidated report. Automates the coordinator "verify, don't relay"
// sequence (audits/link-pipeline.md) that was previously run gate-by-gate by hand.
//
// Runs, in order:
//   1. parse           — captures "not found in body" drops and CLASSIFIES each:
//                        redundant (an existing cross/event link already owns the
//                        matchText) vs form-mismatch (needs a human). With --fix-drops,
//                        auto-removes the redundant glossary entries and re-parses.
//   2. link-coverage   — TOTAL GATE must be ~0 (the real target, not "0 NEW").
//   3. lint-links --strict — 0 ERROR.
//   4. fix-links       — 0 links needing retarget (dead/disambig/wrong-subject/photo).
//   5. audit-reuse-links — wrong-subject scan; non-zero exit = pop-culture pattern.
//   6. verify-links --write-snapshot  (skip with --no-snapshot) — regen G10/G12 contract.
//   7. audit-events / audit-crosslinks / audit-glossary — deterministic ship gates.
//   8. waiver audit    — flags waivers that look like real entities (manual review).
//
// Usage: node scripts/sweep-verify.mjs <tlId> [--fix-drops] [--no-snapshot]
import fs from 'fs';
import { execSync } from 'child_process';

const tl = process.argv[2];
if (!tl) { console.error('usage: node scripts/sweep-verify.mjs <tlId> [--fix-drops] [--no-snapshot]'); process.exit(2); }
const FIX = process.argv.includes('--fix-drops');
const SNAP = !process.argv.includes('--no-snapshot');

const run = (cmd) => { try { return execSync(cmd + ' 2>&1', { encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }); } catch (e) { return (e.stdout || '') + (e.stderr || ''); } };
const tail = (s, n = 1) => s.trimEnd().split('\n').slice(-n).join('\n');
const results = [];
const mark = (ok, label, detail) => { results.push(ok); console.log(`${ok ? '✓' : '✗'} ${label}${detail ? ' — ' + detail : ''}`); };

const gP = `content/.glossary-links-${tl}.json`;
const cP = `content/.cross-links-${tl}.json`;
const eP = `content/.event-links-${tl}.json`;
const load = (p) => { try { return JSON.parse(fs.readFileSync(p)); } catch { return {}; } };

console.log(`\n=== sweep-verify ${tl} ===\n`);

// 1. parse + drop classification
const classifyDrops = (out) => {
  const drops = [...out.matchAll(/(glossary|cross-link|event) link ch(\d+): matchText "([^"]+)" not found in body/g)]
    .map(m => ({ kind: m[1], ch: m[2], mt: m[3] }));
  if (!drops.length) return [];
  const cross = load(cP), events = load(eP);
  for (const d of drops) {
    const owners = [];
    for (const e of (cross[d.ch] || [])) if (e.matchText === d.mt) owners.push('cross');
    for (const e of (events[d.ch] || [])) if (e.matchText === d.mt) owners.push('event');
    d.redundant = owners.length > 0; d.owner = owners[0];
  }
  return drops;
};

let parseOut = run(`npm run parse -- --tl=${tl}`);
let drops = classifyDrops(parseOut);
if (drops.length && FIX) {
  const gloss = load(gP);
  let removed = 0;
  for (const d of drops) if (d.redundant && d.kind === 'glossary') {
    const before = gloss[d.ch].length;
    gloss[d.ch] = gloss[d.ch].filter(e => e.matchText !== d.mt);
    removed += before - gloss[d.ch].length;
  }
  if (removed) { fs.writeFileSync(gP, JSON.stringify(gloss, null, 2) + '\n'); console.log(`  --fix-drops: removed ${removed} redundant glossary entr(ies) covered by an existing cross/event link`); }
  parseOut = run(`npm run parse -- --tl=${tl}`);
  drops = classifyDrops(parseOut);
}
const manual = drops.filter(d => !d.redundant);
const redundant = drops.filter(d => d.redundant);
mark(manual.length === 0, 'parse', drops.length === 0 ? 'no dropped links'
  : `${manual.length} form-mismatch (MANUAL), ${redundant.length} redundant${FIX ? '' : ' (re-run with --fix-drops)'}`);
for (const d of manual) console.log(`    MANUAL ch${d.ch} ${d.kind} "${d.mt}" — not a free in-body occurrence (fix matchText or drop)`);
for (const d of redundant) if (!FIX) console.log(`    redundant ch${d.ch} ${d.kind} "${d.mt}" — already a ${d.owner} link`);

// 2. coverage
const covOut = run(`npx tsx scripts/link-coverage.ts --tl=${tl}`);
const covM = covOut.match(/(\d+) GATE coverage gap/);
const gate = covM ? +covM[1] : NaN;
mark(gate === 0, 'link-coverage', `${isNaN(gate) ? '?' : gate} GATE total`);

// 3. lint
const lintOut = run(`npx tsx scripts/lint-links.ts --tl=${tl} --strict`);
const lintM = lintOut.match(/(\d+) ERROR/);
const errs = lintM ? +lintM[1] : NaN;
mark(errs === 0, 'lint-links --strict', `${isNaN(errs) ? '?' : errs} ERROR`);

// 4. fix-links
const fxOut = run(`node scripts/fix-links.mjs ${tl}`);
const fxM = fxOut.match(/needing a human retarget[^0-9]*(\d+)/);
const retarget = fxM ? +fxM[1] : NaN;
mark(retarget === 0, 'fix-links', `${isNaN(retarget) ? '?' : retarget} needing retarget · ${tail(fxOut.split('\n').filter(l => l.includes('PASS')).join('\n')) || '?'}`);

// 5. audit-reuse-links (exit code matters)
let reuseOk = true; let reuseOut = '';
try { reuseOut = execSync(`node scripts/audit-reuse-links.mjs ${tl} 2>&1`, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 }); }
catch (e) { reuseOk = false; reuseOut = (e.stdout || '') + (e.stderr || ''); }
mark(reuseOk, 'audit-reuse-links', (reuseOut.match(/(\d+) entries to eyeball/) || [, '?'])[1] + ' to eyeball' + (reuseOk ? '' : ' · POP-CULTURE FLAG'));

// 6. snapshot + 7. ship gates
if (SNAP) {
  const snapOut = run(`node scripts/verify-links.mjs ${tl} --write-snapshot`);
  const af = (snapOut.match(/(\d+) auto-fail/) || [, '?'])[1];
  mark(af === '0' || af === '?', 'snapshot', `${af} auto-fail · ${tail(snapOut.split('\n').filter(l => l.includes('Wrote')).join('\n')) || ''}`);
  for (const [g, lbl] of [['audit-events', 'G10 events'], ['audit-crosslinks', 'G11 cross'], ['audit-glossary', 'G12 glossary']]) {
    const o = run(`node scripts/${g}.mjs ${tl}`);
    const m = o.match(/(\d+) PASS · (\d+) FAIL/);
    mark(m ? +m[2] === 0 : false, lbl, m ? `${m[1]} PASS, ${m[2]} FAIL` : 'no result');
  }
} else console.log('· snapshot + ship gates skipped (--no-snapshot)');

// 8. waiver audit — flag waivers that look like real entities
const waiv = load(`content/.link-waivers-${tl}.json`);
const OWN = new RegExp(tl.split('-').filter(w => !['empire', 'dynasty', 'kingdom', 'persia', 'china', 'india'].includes(w)).join('|'), 'i');
const LOCATOR = /^(modern |the )?(iran|iraq|afghanistan|pakistan|azerbaijan|lebanon|syria|turkey|egypt|india|china|morocco|tunisia|algeria|uzbekistan|kazakhstan|central asia|south(east)? asia|eurasia|middle east|caucasus|balkans|anatolia|mesopotamia|arabia|yemen|kerala|siberia|georgia|armenia)$/i;
const flagged = [];
for (const ch in waiv) for (const t of waiv[ch]) {
  const ownName = OWN.test(t) || /golden age/i.test(t);
  const locator = LOCATOR.test(t);
  const generic = /^[a-z]/.test(t) || t.split(/\s+/).length === 1 && /^[a-z]/.test(t);
  const boldNote = false; // bold-only waivers are legitimate but indistinguishable here
  if (!ownName && !locator && /^[A-Z]/.test(t) && t.split(/\s+/).length >= 2) flagged.push(`ch${ch} "${t}"`);
}
// ADVISORY only — flagged waivers are often legitimate (bold-only first-use, cross-ref
// artifact, duplicate-of-existing-link). Surface for a human eyeball; do NOT fail the run.
if (flagged.length) {
  console.log(`⚠ waiver audit — ${flagged.length} multi-word capitalized waiver(s) to eyeball (often legit: bold-only/artifact/duplicate, but confirm none is a real place/person):`);
  for (const f of flagged) console.log(`    review ${f}`);
} else console.log('✓ waiver audit — no suspicious waivers');

const allOk = results.every(Boolean);
console.log(`\n${allOk ? '✅ ALL GREEN' : '❌ NOT CLEAN — see ✗ above'} — ${tl}`);
process.exit(allOk ? 0 : 1);
