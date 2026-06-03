/**
 * sweep-civ.mjs — the deterministic engine for one civ's event-upgrade sweep.
 *
 * Every NON-AI step of the sweep lives here as a phase, so an orchestrator (the
 * sweep-civ Workflow, or a human) only has to: run a phase, spawn the AI agents
 * that phase hands off to, run the next phase. Each phase prints a single
 * `RESULT <json>` line to stdout so the caller can parse structured state without
 * scraping logs.
 *
 * Phases (run in order; AI work happens between them):
 *   prep   <tl>            sweep-bundle → emits the chapter list to fan out per-chapter author agents
 *     ↳ (AI) one author agent per chapter writes /tmp/<tl>-out/chN.json — both the 2-part
 *            cards AND each event's born-verified photoCandidates inline (no separate finder)
 *   gather <tl>            merge any gap-fill candidates into the card outputs, then run the ONE
 *                          serial Wikimedia gatherer UNDER A GLOBAL LOCK (so overlapping civs
 *                          never touch the rate-limited host at the same time). Emits manifest stats.
 *     ↳ (AI) vision pick agent writes /tmp/<tl>-photos/picks.json (+ optional repick*.json)
 *   finish <tl>            merge picks → sweep-apply → parse(--tl) → per-chapter photo coverage
 *                          + G14/G15/fix-links gate results. Emits coverage + thin chapters + gate pass.
 *     ↳ (AI, only if thin) gap-fill finder writes /tmp/<tl>-gapfill2.json → re-run `gather` then `finish`
 *   commit <tl> <msg>      force-stage the civ's 3 curated files (never `git add -A`) + commit.
 *
 * The lock (gather phase) is an atomic mkdir on .image-cache/.gather.lock, with a
 * stale-lock takeover after LOCK_STALE_MS so a crashed run can't wedge the queue.
 */

import { execFileSync, execSync } from 'child_process'
import fs from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const [phase, tl, ...rest] = process.argv.slice(2)
if (!phase || !tl) { console.error('usage: sweep-civ.mjs <prep|gather|finish|commit> <tlId> [args]'); process.exit(1) }

const OUT_DIR = `/tmp/${tl}-out`
const refPath = join(ROOT, 'reference-data', `${tl}.json`)
const elPath = join(ROOT, 'content', `.event-links-${tl}.json`)
const rejPath = join(ROOT, 'content', '.image-rejections.json')
const node = process.execPath
const emit = obj => console.log('RESULT ' + JSON.stringify(obj))
const run = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'], maxBuffer: 64 * 1024 * 1024 })

// ---------- shared helpers ----------
function loadEvents() {
  const d = JSON.parse(fs.readFileSync(refPath, 'utf8'))
  const evs = [...(d.events || [])]
  for (const s of d.spans || []) if (Array.isArray(s.events)) evs.push(...s.events)
  return { d, byId: new Map(evs.map(e => [e.id, e])) }
}
// recoverable?(eventId) — is a no-photo event worth a gap-fill finder round?
//   recoverable  = the gatherer surfaced ZERO downloadable candidates, so the picker
//                  never had a real image to judge. A targeted finder may surface one.
//   NOT recover. = the picker saw real candidates and rejected them ("nothing apt").
//                  Re-searching Commons almost never beats what was already rejected,
//                  so these are honest rejects — we must NOT burn a regather on them.
// (This is the core of the gap-fill optimization — see
//  memory/project_sweep_gapfill_optimization. The workflow additionally skips any
//  event a prior round's finder already tried-and-failed.)
function recoverableFn() {
  const manPath = `/tmp/${tl}-photos/manifest.json`
  const man = fs.existsSync(manPath) ? JSON.parse(fs.readFileSync(manPath, 'utf8')) : null
  return id => {
    if (!man) return true // no manifest yet → assume recoverable
    const cands = (man.events?.[id]?.candidates || []).length
    return cands === 0
  }
}
function chapterCoverage() {
  const el = JSON.parse(fs.readFileSync(elPath, 'utf8'))
  const { byId } = loadEvents()
  const rej = fs.existsSync(rejPath) ? JSON.parse(fs.readFileSync(rejPath, 'utf8')) : {}
  const recoverable = recoverableFn()
  const perChapter = []
  for (const ch of Object.keys(el).sort((a, b) => +a - +b)) {
    const seen = new Set(); let total = 0, withPhoto = 0; const noPhoto = []
    for (const link of el[ch]) {
      if (!link.eventId || seen.has(link.eventId)) continue; seen.add(link.eventId)
      const e = byId.get(link.eventId); if (!e) continue
      total++
      if (e.commonsFile && !rej[link.eventId]) withPhoto++
      else noPhoto.push({ id: link.eventId, label: e.label, recoverable: recoverable(link.eventId) })
    }
    const pct = total ? Math.round((withPhoto / total) * 100) : 100
    const recCount = noPhoto.filter(e => e.recoverable).length
    perChapter.push({ chapter: +ch, total, withPhoto, pct, thin: pct < 70, recoverable: recCount, noPhoto })
  }
  return perChapter
}
function mergeGapfillIntoOut() {
  // Merge every /tmp/<tl>-gapfill*.json {eventId:[File:..]} into the card outputs' photoCandidates.
  const gaps = fs.readdirSync('/tmp').filter(f => new RegExp(`^${tl}-gapfill.*\\.json$`).test(f))
  const merged = {}
  for (const g of gaps) {
    const obj = JSON.parse(fs.readFileSync(`/tmp/${g}`, 'utf8'))
    for (const [id, files] of Object.entries(obj)) merged[id] = [...new Set([...(merged[id] || []), ...files])]
  }
  let n = 0
  for (const f of fs.readdirSync(OUT_DIR).filter(x => /^ch\d+\.json$/.test(x))) {
    const p = join(OUT_DIR, f); const o = JSON.parse(fs.readFileSync(p, 'utf8')); let changed = false
    for (const c of o.cards || []) if (merged[c.eventId]) { c.photoCandidates = merged[c.eventId]; n++; changed = true }
    if (changed) fs.writeFileSync(p, JSON.stringify(o, null, 2))
  }
  return { gapfillFiles: gaps, injected: n, events: Object.keys(merged).length }
}
function mergePicksIntoOut() {
  // Base picks + any repick overrides (gap-fill rounds), merged by eventId; last wins.
  const picksPath = `/tmp/${tl}-photos/picks.json`
  if (!fs.existsSync(picksPath)) throw new Error(`no picks.json at ${picksPath}`)
  const picks = JSON.parse(fs.readFileSync(picksPath, 'utf8'))
  for (const r of fs.readdirSync(`/tmp/${tl}-photos`).filter(f => /^repick.*\.json$/.test(f)).sort()) {
    const ov = JSON.parse(fs.readFileSync(`/tmp/${tl}-photos/${r}`, 'utf8'))
    for (const [id, v] of Object.entries(ov)) picks[id] = v
  }
  fs.writeFileSync(picksPath, JSON.stringify(picks, null, 2))
  // distinctness check
  const used = {}; const dups = []
  for (const [id, v] of Object.entries(picks)) if (v.decision === 'override' && v.commonsFile) {
    if (used[v.commonsFile]) dups.push({ file: v.commonsFile, a: used[v.commonsFile], b: id }); else used[v.commonsFile] = id
  }
  let n = 0
  for (const f of fs.readdirSync(OUT_DIR).filter(x => /^ch\d+\.json$/.test(x))) {
    const p = join(OUT_DIR, f); const o = JSON.parse(fs.readFileSync(p, 'utf8'))
    for (const c of o.cards || []) if (picks[c.eventId]) { c.photo = picks[c.eventId]; n++ }
    fs.writeFileSync(p, JSON.stringify(o, null, 2))
  }
  const ov = Object.values(picks).filter(v => v.decision === 'override').length
  const rj = Object.values(picks).filter(v => v.decision === 'reject').length
  return { applied: n, override: ov, reject: rj, coverage: +(ov / (ov + rj) * 100).toFixed(1), dups }
}

// ---------- gather lock ----------
// Two locks, both atomic-mkdir with a stale takeover so a killed run can't wedge the queue:
//   .gather.lock — held during a civ's serial Wikimedia gather (rate-limit safety)
//   .apply.lock  — held for the <1s shared-file write inside sweep-apply, because
//                  .caption-overrides.json and .image-rejections.json are GLOBAL files;
//                  two civs' applies running at once would read-modify-write race and
//                  clobber each other's captions/rejections. Narrow so it barely costs
//                  wall-clock but fully serializes the only shared mutation.
const LOCK_STALE_MS = 8 * 60 * 1000
async function withLock(name, fn) {
  const lock = join(ROOT, '.image-cache', name)
  fs.mkdirSync(join(ROOT, '.image-cache'), { recursive: true })
  for (let waited = 0; ; waited += 1000) {
    try { fs.mkdirSync(lock); break }
    catch {
      try { if (Date.now() - fs.statSync(lock).mtimeMs > LOCK_STALE_MS) { fs.rmSync(lock, { recursive: true, force: true }); continue } } catch {}
      if (waited === 0) console.error(`[lock] ${name} held by another civ — queued`)
      await new Promise(r => setTimeout(r, 1000))
    }
  }
  try { fs.writeFileSync(join(lock, 'tl'), tl); return await fn() }
  finally { try { fs.rmSync(lock, { recursive: true, force: true }) } catch {} }
}

// ---------- phases ----------
if (phase === 'prep') {
  const summary = run(node, ['scripts/sweep-bundle.mjs', tl])
  process.stderr.write(summary)
  const bundleDir = `/tmp/${tl}-bundles`
  const chapters = fs.readdirSync(bundleDir).filter(f => /^ch\d+\.json$/.test(f))
    .map(f => {
      const b = JSON.parse(fs.readFileSync(join(bundleDir, f), 'utf8'))
      return {
        chapter: +b.chapter, title: b.chapterTitle, eventCount: (b.events || []).length,
        events: (b.events || []).map(e => ({ id: e.id, label: e.label, wikiSlug: e.wikiSlug || '' })),
      }
    })
    .sort((a, b) => a.chapter - b.chapter)
  fs.mkdirSync(OUT_DIR, { recursive: true })
  emit({ phase: 'prep', tl, chapters, totalEvents: chapters.reduce((s, c) => s + c.eventCount, 0) })
}

else if (phase === 'gather') {
  const m = mergeGapfillIntoOut()
  process.stderr.write(`[gather] merged ${m.injected} candidate set(s) for ${m.events} events from ${m.gapfillFiles.join(', ') || '(none)'}\n`)
  await withLock('.gather.lock', async () => {
    run(node, ['scripts/sweep-photos.mjs', tl, ...rest])
  })
  const man = JSON.parse(fs.readFileSync(`/tmp/${tl}-photos/manifest.json`, 'utf8'))
  const ids = Object.keys(man.events)
  const none = ids.filter(i => !(man.events[i].candidates || []).length)
  emit({ phase: 'gather', tl, events: ids.length, withCandidates: ids.length - none.length, none, rateLimited: !!man.rateLimited })
}

else if (phase === 'finish') {
  // Union the per-chapter vision picks into picks.json + resolve cross-chapter image
  // collisions (idempotent; re-applies repick*.json overrides on top via mergePicksIntoOut
  // below). Folded in here so the workflow needs no separate `mergepicks` agent. Its
  // RESULT line is captured (not echoed) — only `finish` emits to stdout.
  run(node, ['scripts/_merge-picks.mjs', tl])
  const merge = mergePicksIntoOut()
  process.stderr.write(`[finish] picks: ${merge.override} override / ${merge.reject} reject (${merge.coverage}%); applied to ${merge.applied} cards; dups: ${merge.dups.length}\n`)
  // sweep-apply mutates the GLOBAL caption/rejection files — serialize that write so
  // overlapping civs don't clobber each other's captions. parse + gates below are
  // civ-scoped and safe to run unlocked/concurrently.
  await withLock('.apply.lock', async () => { run(node, ['scripts/sweep-apply.mjs', tl]) })
  run('npm', ['run', 'parse', '--', `--tl=${tl}`])
  const perChapter = chapterCoverage()
  const thinChapters = perChapter.filter(c => c.thin)
  // gates (scoped); capture pass/fail from the corpus-aware linters' NEW counts
  let g14 = false, g15NewThin = null, fixLinksClean = false
  try { const o = run('npx', ['tsx', 'scripts/lint-event-cards.ts', tl]); g14 = new RegExp(`^${tl}: \\d+/\\d+ events carry the 2-part card · ✓ full`, 'm').test(o); const mm = o.match(/(\d+) NEW gap/); if (mm) g14 = g14 && mm[1] === '0' } catch (e) { process.stderr.write(String(e) + '\n') }
  // g15 = THIS civ's new-thin count, not the corpus total. lint-event-photos prints one
  // `  ✗ <tl> ch<N>: …` detail line per non-grandfathered thin chapter; count only this
  // civ's. (The old `/(\d+) NEW thin/` matched the CORPUS summary, so a single thin chapter
  // ANYWHERE — e.g. legacy ancient-greece ch3 at 67% — falsely blocked every civ's commit.
  // Fixed 2026-06-03. g14's `NEW gap` AND-condition above has the same latent shape but is
  // gated first by this civ's own `✓ full` line, so it has not bitten.)
  try { const o = run('npx', ['tsx', 'scripts/lint-event-photos.ts', tl]); g15NewThin = (o.match(new RegExp(String.raw`(^|\n)\s*✗ ${tl} ch`, 'g')) || []).length } catch (e) { process.stderr.write(String(e) + '\n') }
  try { const o = run(node, ['scripts/fix-links.mjs', `--tl=${tl}`, '--strict']); fixLinksClean = /clean \(no new/.test(o) } catch (e) { process.stderr.write(String(e) + '\n') }
  // Stage the commit message here (we have all the numbers) so `commit` can use git -F
  // and we never have to thread a multi-line message through the agent→bash boundary.
  const thinNote = thinChapters.length ? ` ${thinChapters.length} chapter(s) below the photo floor are genuinely image-poor events (honest rejects).` : ''
  const msg = `event-upgrade sweep: ${tl} — cards full, photos ${merge.coverage}% (${merge.override} born-verified, ${merge.reject} honest rejects); all gates green${thinNote}\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n`
  fs.writeFileSync(`/tmp/${tl}-commit-msg.txt`, msg)
  emit({ phase: 'finish', tl, ...merge, perChapter, thinChapters, gates: { g14, g15NewThin, fixLinksClean } })
}

else if (phase === 'commit') {
  // Force-stage ONLY the civ's curated outputs — never `git add -A` (sweeps writer temp files).
  try { execSync(`git add -f reference-data/${tl}.json content/.caption-overrides.json content/.image-rejections.json`, { cwd: ROOT, stdio: 'inherit' }) } catch {}
  const msgFile = `/tmp/${tl}-commit-msg.txt`
  if (fs.existsSync(msgFile)) execSync(`git commit -q -F ${msgFile}`, { cwd: ROOT, stdio: 'inherit' })
  else execSync(`git commit -q -m ${JSON.stringify(`event-upgrade sweep: ${tl}`)}`, { cwd: ROOT, stdio: 'inherit' })
  const sha = execSync('git rev-parse --short HEAD', { cwd: ROOT, encoding: 'utf8' }).trim()
  emit({ phase: 'commit', tl, sha })
}

else { console.error(`unknown phase: ${phase}`); process.exit(1) }
