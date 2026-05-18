# Handoff — cold-start brief

_Current 2026-05-17 (late session, post hard-stop). Overwrite the dated/state sections when they change; operational notes are stable. Read this top-to-bottom before doing anything._

---

## ▶ STATE — uyghur-steppe SHIPPED text-only (2026-05-17, post-resume)

Superseding the prior hard-stop state. The user resumed and directed: finish uyghur-steppe **except maps**, then **"ship it without maps."** Done & **LIVE on stuffhappened.com**:
- **`main` @ `811d154`** (merge of `feat/the-17`), pushed to origin, deployed (wrangler version `46e035fb`). uyghur-steppe `hasContent: true` — **102 hasContent civs**.
- Fixed a real non-maps blocker en route: **G1 density** (ch1/2/3 were 9 events; added one verbatim-anchored pool-event placement each → 10). ship-check then green on **every gate except maps**.
- **Shipped text-only — G4 maps DELIBERATELY DEFERRED per explicit user instruction.** Override is cleanly scoped: ship-check confirmed `maps 1:1` was the *only* failing gate (G1/G2/G3/G6/G7 + G10/G11/G12 artifacts all green). Reader degrades gracefully — `chapter-accordion.tsx` probes each map and only mounts the block on load success, so map-less chapters show **no broken images**. Shipped-page guard only checks page size, not maps.
- **OWED: uyghur-steppe G4 maps** (8 ch). `map-prompts/uyghur-steppe.md` already authored. The aborted maps-build's 3 partial un-QA'd PNGs were deleted (ships cleanly map-less). When resumed: `node --env-file=.env.local scripts/maps-build.mjs uyghur-steppe` → re-`npm run build` → `wrangler deploy` → push. No `hasContent` change needed (already true).
- The 744–1206 Central Asian Steppe gap (Göktürk→Mongol) is now CLOSED — see memory `project_coverage_finding_steppe_gap`.

Corpus-remediation state below is UNCHANGED (still parked; `chore/g12-a-sweep` @ `8b4c71d` still the one real salvaged deliverable).

### (historical) the prior hard-stop
The user had issued repeated, escalating hard-stop orders ("stop all gemini work now", "stop all work", "stop all worktrees and sub agents"); session took "an unfathomable amount of time." That hold was lifted by the resume above.

### Worktree / branch topology
- **Only checkout now:** `/Users/mberning/projects/personal/timeline-v2` on **`main`** @ `250cf4b` (unchanged this session — nothing merged, nothing deployed, no `hasContent` flips). `git worktree list` shows just this one.
- **All these worktrees were REMOVED** (their **branches/commits survive** in the main repo — worktree removal never deletes refs): `the17-wt`, `g12sweep-{a..e}`, `.claude/worktrees/agent-*`.
- All background Agent tasks stopped: slice C/E via `TaskStop`; A/D completed; B/coordinator failed earlier. Nothing is running.

### Branches and exactly what's on them
- **`feat/the-17` @ `c5dae43`** — uyghur-steppe, the only real forward progress this session:
  - `b0c79da` step 11 backward pass (pre-session)
  - `4f2765d` **G11 cross-links CLEAN** — 25/25 PASS, stable ×2 (artifact gone)
  - `03e6490` **G10 event popups CLEAN** — 103/103 PASS, stable ×2
  - `c5dae43` **G12 glossary CLEAN** — 97/97 PASS, stable ×2
  - **G4 maps: NOT done** (killed mid-run). ship-check NOT run. `hasContent` still false. Not merged, not deployed.
- **`chore/g12-a-sweep` @ `8b4c71d`** — Slice A anti-dodge sweep **COMPLETE & committed** (the one remediation deliverable that survived): 21 slice-A civs 0-FAIL under the tightened anti-dodge gate; 6 authored `def:` blurbs incl. the **MUST-FIX `hittite-empire` `Panku`** (was → "Pangu" Chinese deity) now a `def:` blurb; `russian-empire` `antebellum South` → `Antebellum_South` slug. 7 files, slice-A only, no waivers, 0 new lint errors. **Slice A owns hittite-empire — Panku is FIXED here** (slice D's report wrongly claimed D owned it; it does not).
- **`chore/g12-{b,c,d,e}-sweep` @ originals** (`76f1cec`/`a5d4dae`/`122c886`/`3c5ae9a`) — **NO commits.** Slices B/C/D/E uncommitted sweep work was **lost** when worktrees were torn down (per the user's order). Their triage *analysis* survives only in the agent transcripts (`/private/tmp/claude-3348763/.../tasks/<agentId>.output`) and `/tmp/g12d/*.log` (slice D). Not recoverable as applied changes.
- **`chore/corpus-remediation` @ `0b45645`** — the dead serial coordinator (a60c87e0) committed one thing ("Dodge-sweep verify round-2 fixes: ancestral-puebloans residuals") before stalling/dying. Provenance/quality unverified; it ran the pre-anti-dodge serial plan. Treat as suspect.
- **`chore/g12-{a..e}` @ originals** (`2b3b545`/`76f1cec`/`a5d4dae`/`122c886`/`3c5ae9a`) — the ORIGINAL pre-`/clear` 5-slice work, **intact and untouched**.

---

## What actually happened this session (so the next person doesn't repeat it)

1. **uyghur G11 was the heavy lift.** The link-fanout had guessed ~13 wrong `targetChapter`s. Fixed each against the real chapter structure AND each target's `summaries.json` (the gate judges blurb-vs-summary, not blurb-vs-narrative). `audit-crosslinks` is **strongly non-deterministic** — each run surfaced a different 1–4 borderline set ("whack-a-mole"). Converged by making every blurb conservative/summary-aligned and dropping 1 cross-link (Samanids — no corpus chapter's summary covers it; the prose self-defines it). Final 25/25 PASS, stable ×2.
2. **Enrichment-cache pitfall (important).** `the17-wt/content/.enrichment-cache.json` was a **symlink to the canonical cache**, NOT a snapshot copy — directly contradicting the previous HANDOFF's claim and the `project_g12_fanout_lessons` memory. Concurrent writers truncated it → `npm run parse` crashed (`Unterminated string in JSON`). Fix that worked: `rm` the symlink, `cp` a validated private snapshot. **Any rebuilt worktree MUST snapshot-copy the cache, never symlink.**
3. **uyghur G10**: 19→0 FAIL. Slug fixes in `reference-data/uyghur-steppe.json`: `evt-012` Princess_Ningguo(Ming)→`Heqin`; `evt-021` An_Lushan_rebellion→`Uyghur_Khaganate`; `evt-036` Silk_Road→`Kingdom_of_Qocho`; `evt-088` Silk_Road→`Uyghur_Khaganate`; `evt-100` Ortoq(disambig)→blurb-only (wikiSlug removed). 23 mismatched auto-photos rejected in `content/.image-rejections.json` (these events have no `commonsFile` → image auto-derives from `wikiSlug`; broad slugs pull generic/reused images — "missing photo beats wrong photo"). Stable ×2.
4. **uyghur G12**: 1 FAIL (glossary "Princess Ningguo"→Ming) → authored `def:` blurb in `content/.glossary-links-uyghur-steppe.json`. 97/97 PASS, stable ×2.
5. **The API ceiling is a HARD physical cap (~5 concurrent Gemini).** Per the user's "max parallelism / never serial" directive, a 5-way slice fan-out was launched **while** also running uyghur's Gemini gates **and** the dead coordinator → 7+ concurrent → agents **stalled** on the 600s watchdog and produced near-zero. Slice agents also spawned forbidden monitor/poll loops and one leaked `GLOSSARY-FAILURES-xiongnu-huns.txt` into the canonical checkout (lane violation once its worktree vanished). **"As parallel as possible" = the API ceiling, not more. Beyond it is net-negative.**
6. The user then hard-stopped everything; teardown completed cleanly.

## Operational notes (stable — update only when a fact changes)
- **Tooling reality in this environment:** `SendMessage` is **NOT available** (cannot redirect/continue a running background agent). `TaskStop <agentId>` **does** stop a background agent. A `setsid/disown &` background bash kill-switch **fails to stay alive** in this sandbox — the reliable levers are foreground `pkill -9 -f <pat>` sweeps and `TaskStop`.
- **No heredocs in bash** (`<<EOF`) and no apostrophes in chained `-m` — both mangle silently. Use multiple `-m` flags; for JSON merges use `node -e '...'` (single-quoted, `String.fromCharCode(10)` for newlines), not shell heredoc.
- `content/` is fully gitignored. `git add -f` the curated `.cross-links/.glossary-links/.event-links/.image-rejections/.*-waivers-{tl}.json`. Never commit `content/{tl}.json`, `public/offline/*`, `public/search-index.json`, `.enrichment-cache.json` (regenerated artifacts).
- Commit email `mebernin@gmail.com`; trailer `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.
- `.env.local` has `GOOGLE_API_KEY`; gate scripts run Gemini (`gemini-3-pro-preview` text, image model for maps). After editing `.cross-links/.glossary-links/reference-data` you MUST `npm run parse` before re-running the gate (gates read parsed `content/{tl}.json` + target `narratives/*.summaries.json`, not the raw curated files).
- `audit-glossary` / `audit-crosslinks` / `audit-events` are **non-deterministic** and **fail-close transient Wikipedia `fetch failed` as FAIL** — high concurrency triggers HTTP 429 and floods false FAILs. Run gates **serially or ≤2 concurrent**. Treat a genuinely-reproducing FAIL as real; a flapping one with a defensible target is non-determinism.
- Repeat "completed/killed/failed" `<task-notification>`s from finished agents are no-ops — do not re-engage.
- PUBLISH policy unchanged (CLAUDE.md): publish when ship-ready without asking — but a hard-stop/reassess context overrides the default auto-push; do not push/deploy while the user is mid-reassessment without a green light.

## Exact remaining order (when the user green-lights resuming)
1. **Decide strategy with the user first** (they are reassessing — the per-civ gated pipeline + the failed parallel-fanout are both on the table).
2. **Finish uyghur, strictly serial, no concurrent Gemini:** recreate a `feat/the-17` worktree (snapshot-copy the enrichment cache, do NOT symlink) → `npm run parse` → `maps-build.mjs uyghur-steppe` (G4) → `ship-check.mjs uyghur-steppe` CLEAR → flip `uyghur-steppe` `hasContent:true` in `src/lib/navigator-tls.ts` → merge `feat/the-17`→`main` → clean atomic `rm -rf out && npm run build && npx wrangler deploy` → push.
3. **Corpus remediation, if resumed:** `chore/g12-a-sweep` (`8b4c71d`) is real & ready — verify, then merge to `main`. Slices B/C/D/E must be redone from their transcripts/`/tmp/g12d` logs, **serially or ≤2-concurrent**, and any worktree MUST first port `main`'s `audit-glossary.mjs` + CLAUDE.md step-10d (the slice branches predate anti-dodge commit `8e3fcff`; their old "clean" ledgers were under the loose gate). **Do NOT relaunch the 5-way fan-out.**

## Background / roadmap
- 101 civs shipped; uyghur-steppe is civ #1 of the 16-firm Phase-1.5 roster (`audits/phase-1.5-roster.md`), ~95% through its pipeline (only G4 maps + ship-check + publish remain).
- Corpus-remediation backlog: `audits/corpus-remediation-backlog.md`. Memories to read: `project_g12_fanout_lessons`, `feedback_publish_gate`, `feedback_autonomous_the17_build`, `feedback_dont_over_generalize_defect_rules`.
