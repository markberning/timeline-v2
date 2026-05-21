# STATUS — canonical project state (READ THIS FIRST)

_This file is the single source of truth. It **supersedes** `HANDOFF.md`,
`HANDOFF-maps-sync-chains.md`, `HANDOFF-link-sweep.md` — those are history.
Last verified: 2026-05-17. Every number below has a reproduce command; if you
doubt a number, run it. **Never relay a previous session's "all clean" /
"all broken" claim as fact — verify with the command.**_

---

## ▶ COLD-START HANDOFF — 2026-05-21 (read this FIRST)

> **▶ SCHEDULE STOPPED BY USER 2026-05-21 10:04 PT.** The recurring routine
> (`trig_013gYpKAMEdBVBAhpu1HwaGd`) was **disabled** (`enabled:false`) one
> minute before its first real fire — it never ran a real batch (the 05-20
> fire was a date-guard no-op). The corpus programs (#7 link sweep, #19 intro
> retrofit) are now to be run **interactively/live in a session**, not by the
> cron. The "▶ SCHEDULED-RUN PLAYBOOK" below is retained as the per-batch
> procedure but is no longer auto-triggered. To re-arm the routine: re-enable
> at claude.ai/code/routines or via the `schedule` skill. **Order still
> locked: #7 to completion FIRST, then #19.** No agents running; clean stop.

**Git:** `main` == `origin/main`, clean tree, **no agents running**, single
worktree (`main`). **Remote Control is ON + persistent** (user can monitor/
steer this session from phone / claude.ai/code).

**▶ THE TASK FOR THIS SESSION (user-authorized 2026-05-21): run BOTH corpus
programs LIVE, in order #7 then #19, batch by batch, deploying as we go.**
The user stopped the scheduled routine specifically to drive this live (not
unattended). This IS the heavy-usage run; the weekly budget reset 2026-05-21
and the user is ready. Standing order: "run both as you suggest" → keep going
batch after batch until a gate genuinely fails or the user says stop;
checkpoint with the user after the first batch or two for sanity. Fail-closed
always — a failing civ is reverted + skipped, never pushed.

**THE PLAN (live version of the playbook — this session CAN deploy, unlike
the disabled remote routine):**
1. **#7 link-coverage sweep — RESUME.** 6 civs already done + pushed
   (goryeo-korea, uyghur-steppe, renaissance-italy, byzantine-empire,
   islamic-golden-age, delhi-sultanate; 2,533 GATE gaps closed). **Start with
   ottoman-empire** (PARKED — its first agent admitted waiving Süleyman/
   Janissaries as self-reference; re-check the rejected attempt with the
   CORRECTED waiver audit, redo with the hardened+tightened brief only if
   genuinely defective). Then worst-first batches of ~5 civs from
   `audits/link-coverage-ledger.md` (skip the 6 done): ≤5 worktree agents,
   ONE coordinator → merge → re-run ALL gates → CORRECTED waiver audit →
   force-add curated set (NEVER `git add -A`) → commit per civ → deploy the
   batch (clean atomic `rm -rf out && npm run build && npx wrangler deploy`,
   verify prod). Continue worst-first to corpus end, then a `--corpus`
   convergence pass to global 0. Full detail: "▶ ACTIVE PROGRAM" +
   "▶ SCHEDULED-RUN PLAYBOOK" below.
2. **#19 chapter-intro retrofit — AFTER #7 is fully done.** Author
   `narratives/<tl>.intros.json` for the 102 grandfathered civs to the RICH
   spec (CLAUDE.md step 8b; `early-medieval-europe` is the live template —
   rich "story so far" + "lay of the land", NOT terse). Per civ:
   `lint-intros --tl=<tl> --strict` 0 → scoped parse → REMOVE civ from
   `audits/intro-baseline.json` (the done-marker) → commit → deploy batch.
   Detail: backlog #19 in `audits/corpus-remediation-backlog.md`.

**Two load-bearing facts for #7 (full detail in ACTIVE PROGRAM + memory):**
- **The gate is corpus-coupled** → one-pass parallel sweep can't reach
  global 0; model is **SWEEP + CONVERGE** (commit each civ at worklist-closed
  + waiver-audit-clean; bounded sibling-drift residual mopped by a final
  `--corpus` convergence pass). Memory `project_coverage_sweep_corpus_coupled`.
- **Use the CORRECTED waiver audit** (the earlier one had a keying bug — used
  glossary `term` not `matchText` → false "never-linked" flags). Build the
  linked set from glossary `matchText` AND `term` + cross/event `matchText`,
  and substring-check any flagged term before calling it a defect. Memory
  `feedback_coverage_agents_over_waive`. Any real place/people/person/ruler/
  institution/our-civ in the waived-but-never-linked set = reject the civ.

**Done in the 2026-05-19→21 sessions (do NOT redo):** chapter-intro feature +
G13 gate shipped & LIVE (pilot `early-medieval-europe`, rich form, prod-
verified); #19 added to corpus remediation; intros wired into the new-civ
pipeline + audit skill; G13/G14 gate-collision fixed; scheduled routine
`trig_013gYpKAMEdBVBAhpu1HwaGd` created then **DISABLED** (banner above).

**Shipped & closed earlier this session (do not re-litigate):** Standalone
chain-picker fix (`30c03a2`, live), civ date-range in the sticky header
(`23db240`, live), `node_modules` symlink untracked (`2833e00`),
`npm run parse:index` post-flip optimization (`74ae3fe`, ~8m→~1s, proven
byte-identical), worktree/branch cleanup. The Swahili Coast + iOS swipe
fix remain live on prod.

**Repo-hygiene item — DONE 2026-05-18 (`2833e00`, pushed):** the historically-
committed `node_modules` symlink blob (git mode 120000) is untracked via
`git rm --cached` (real dir kept on disk; `.gitignore`'s `node_modules/` rule
now takes over). This was the root cause of the multi-hour "tsx exits 194 /
build silently dies" tail. Fresh checkouts/worktrees no longer inherit it.

**Deploy-tail lesson (cost ~3h of false leads — durable):** `content/` is
gitignored. Every per-civ curated file (`.event-links/.glossary-links/
.cross-links/.link-waivers/.link-snapshots-<tl>.json`) MUST be `git add -f`'d
or it silently never reaches main and the density/coverage gates see the civ
as 0-events. And NEVER `git add -A` during a build — it sweeps the parallel
writers' `.draft-sc-*.md` / `.fix-sc-*.md` scratch files into the commit,
which then lint as phantom 0-event civs and abort the build. Both bit this
build; both fixed in `5be78b6`. The repeated "exit 194, no output" was the
build aborting at the density gate, NOT a tsx/sandbox failure — verified.

**Durable context still in force (not the active task — background):**
- Build optimization (3 pillars + `npm run parse:index` 4th refinement) is
  DONE/codified — `audits/build-optimization.md`, memory
  `project_build_optimization_done`. The-17 roster + emep ch3 split remain
  available as ordinary content work but are NOT the current priority — the
  link-coverage sweep is. Backlog **#17**/**#12** still deferred; **#7 is
  NO LONGER deferred — it is the ACTIVE PROGRAM.**
- `scripts/link-coverage.ts` S7 rare-word signal is an accepted noisy-but-
  safe advisory (never gates).

**Auto-deploy: PARKED (user deprioritized).** `deploy.yml` no longer runs on
push (stops the failure emails). Manual deploy is the working path:
`rm -rf out && npm run build && npx wrangler deploy` (wrangler OAuth auth on
this Mac). Diagnostic for whenever it's resumed: a faithful clean
`npm ci && npm run build` **passes (exit 0)** — so the remaining Action
failure is the **Cloudflare deploy step**, almost certainly the API token's
permission scope. Resume path: recreate the token via the **"Edit Cloudflare
Workers" template** (not a narrow custom token), update the
`CLOUDFLARE_API_TOKEN` GitHub secret, re-add the `push:` trigger in
`deploy.yml`. Cloudflare secrets are set; the chat-exposed token was rolled
(dead).

**Communication (auto-inherited via memory + `~/.claude/CLAUDE.md`):** every
message to the user begins with the literal ***Message to you*** then plain
normal text — plain language, no jargon, lead with the point, short.

---

## ▶ SCHEDULED-RUN PLAYBOOK (automated cron entrypoint — added 2026-05-19)

A recurring daily scheduled agent (created 2026-05-19, first fire **2026-05-21
10:05 America/Los_Angeles**) runs this. **Each fire = at most ONE batch, then
stop.** User-locked order: **#7 link-coverage sweep to completion, THEN #19
chapter-intro retrofit.** Per fire, in order:

1. **Read this whole file first.** It is canonical. Determine the active
   program + the next batch from the run logs in "▶ ACTIVE PROGRAM" (#7) and
   backlog `#19`, and from `audits/link-coverage-ledger.md`.
2. **Date guard (HARD).** If the current UTC date is **before 2026-05-21**,
   do nothing at all and exit immediately — no commit, no STATUS write, no
   agents. The recurring cron (`5 17 * * *`) will fire on 2026-05-20 before
   the user's usage reset; that fire MUST be a silent no-op. First real
   working fire = 2026-05-21. (A remote agent cannot introspect the user's
   weekly claude.ai usage, so this guard is date-based by design, not a
   usage check — it is the deliberate proxy for "after the weekly reset.")
   If a fire ever detects a `DONE` marker for BOTH programs in the run log,
   also no-op (the work is finished; the user disables the routine at
   claude.ai/code/routines).
3. **Pick the active program.** #7 is active until `link-coverage --corpus`
   shows 0 NEW corpus-wide (sweep + convergence done). Then #19 is active
   until `audits/intro-baseline.json` is empty (all 102 de-grandfathered).
   When both are done, the routine **self-deletes** (see CronDelete in the
   schedule) and writes a DONE line here.
4. **Run exactly one batch with that program's LOCKED protocol:**
   - **#7:** start with **ottoman-empire** (re-check with the *corrected*
     waiver audit — matchText+term keying; redo with the hardened+tightened
     brief only if genuinely defective). Then next 5 worst civs from the
     ledger (skip the 6 done + any since-completed). Hardened brief MANDATORY;
     ≤5 worktree agents (hard ceiling); ONE coordinator merges, re-runs ALL
     gates, runs the CORRECTED waiver audit, force-adds the curated set (NEVER
     `git add -A`), commits per civ. Detail: "▶ ACTIVE PROGRAM" + memories
     `feedback_coverage_agents_over_waive`, `project_coverage_sweep_corpus_coupled`.
   - **#19:** next 5 civs (worst/most-read first). Author `narratives/{tl}.intros.json`
     to the **rich** spec (CLAUDE.md step 8b; `early-medieval-europe` is the
     template; rich backstory NOT terse — `feedback_chapter_intros_rich`).
     `lint-intros --tl={tl} --strict` → 0, scoped parse, **remove the civ from
     `audits/intro-baseline.json`** (the done-marker). ≤5 worktree agents, one
     coordinator; coordinator **sample-reads** each civ for the rich-runway
     intent (gate-green ≠ correct). Detail: backlog `#19`.
5. **Verify, don't relay.** Re-run the deterministic tools yourself. If ANY
   gate/verification fails for a civ → STOP that civ, leave `main` clean, do
   **NOT** push partial/bad content, write the failure to the run log, and
   continue only with civs that fully passed.
6. **Record + push (PUSH-ONLY — do NOT deploy).** Append a dated run-log
   line (civs done, commits, failures). Commit STATUS. `git push origin
   main`. **Do NOT run `npm run build` / `npx wrangler deploy`** — this is a
   remote cloud agent with no Cloudflare auth; deploy is impossible here and
   is a deliberate manual local step (user chose push-only 2026-05-19).
   Append each pushed civ to the **DEPLOY DEBT** list below so a later local
   session deploys them. Then **stop** — at most one batch per fire; do not
   start the next batch this fire. Execution is **serial** (no Agent/worktree
   fan-out in the remote tool set) — a "batch" here is a small serial run
   (≤5 civs), stop early on any failure.

**DEPLOY DEBT (pushed to main by the routine, NOT yet on stuffhappened.com):**
_(none yet — the routine appends civ ids + commit here; a local session runs
the clean atomic deploy and clears this list)_

**Hard stops:** two consecutive failing fires on the same civ/batch → stop
the routine and leave for a human (write STOP-FOR-HUMAN here). The schedule
can be cancelled anytime with the `schedule` skill or by the user.

---

## Operating model (durable — this is how this project is run)

1. **One writer at a time on `main`.** Concurrent work goes in an isolated
   `git worktree` on its own branch, merged later — never two sessions editing
   the same checkout. (Worktrees live alongside, e.g. `../timeline-v2-lcr`.)
2. **Verify, don't relay.** Session self-reports ("solid and clean", "N broken")
   are not evidence. The deterministic tools are evidence. Re-run them.
3. **Stale report files cause false emergencies.** `LINK-FIX-NEEDED-*.txt` and
   similar are transient; delete them after use. A number with no reproduce
   command is a rumour.
4. **Nothing reader-facing deploys while the user is reassessing** without an
   explicit "push/deploy" from them. Committing locally is fine and is how work
   survives a session clear; pushing `main` auto-deploys (Cloudflare) and is
   gated on their word right now.
5. **Don't start deferred work.** Deferred = listed under "DO NOT START" below
   until the user lifts it.

## Verified truth — 2026-05-17

| Thing | State | Reproduce |
|---|---|---|
| Reader-facing **dead/disambiguation** links | **0** in every civ sampled (worst 5 + spot) | `node scripts/fix-links.mjs <tlId>` → "PAGE" never appears |
| Corpus **link floor** (links a human should eyeball) | **8 links across 7 civs** (95/102 civs perfectly clean, 0 errors). Was 81 pre-fix, 801 as a stale phantom. The 8: ottoman-empire ×2; zhou-dynasty, mycenaean-civilization, kievan-rus, inca-empire, asuka-nara-japan, anglo-saxon-england ×1 — each a genuine slug≠term the tool correctly won't auto-confirm | run the loop in "commands" below |
| Git | `main` = `origin/main`, clean tree, single writer | `git status -s && git rev-list --left-right --count HEAD...origin/main` |
| Docs/memory | reconciled; this file is canonical | — |
| Corpus link cleanup (backlog #18) | DONE in substance — the "0 broken" phrasing in older docs was the **old liveness-only ruler**; the honest statement is "0 dead/disambiguation, ~floor of author-named pages Wikipedia renamed" | — |

**The `fix-links.mjs` author-fidelity fix (this session, why it matters):** the
subject check compared the linked term against the page Wikipedia *redirected
you to*, so a correctly-named slug (`Gukjagam`) that Wikipedia routes to a
differently-titled article (`Kukchagam`) was falsely flagged "wrong subject".
That false-positive class is **why every link pass looked like an unfixable
swamp.** Fix: if the author named the slug as the term itself, and the page is
already live & not-a-disambiguation, trust Wikipedia's routing. A real "dodge"
(term ≠ slug) still fails — gate unchanged where it should bite. Verified: false
alarms cleared, genuine "needs a human" + duplicate-photo flags preserved.

## Pipeline state (production, not just checkers) — verified 2026-05-17

- **Link correctness: IN the pipeline + gated.** `ship-check.mjs` runs
  `fix-links --strict` + `lint:links --strict` (zero-tolerance, new civs).
  CLAUDE.md step 6 is creation-first (born-verified). A civ cannot go live
  without passing. ✓
- **Link coverage: MERGED into the pipeline (`e77736a`, 2026-05-18).** The
  rebuilt multi-signal detector + its (civ,chapter,term) grandfather baseline
  are on `main`; `ship-check.mjs` line 87 runs the NEW detector. Verified:
  legacy `mali-empire --strict` = 281 gaps / **0 NEW** → passes (102 not
  broken); detector genuinely surfaces real recurring-unlinked entities.
  - **RESOLVED 2026-05-18 (user-approved).** Baseline surgically scoped to the
    **100 legacy civs only** — `uyghur-steppe` (131) and `goryeo-korea` (97),
    both the-17 *new-pipeline* civs, removed from
    `audits/link-coverage-baseline.json` (102→100 keys; the 100 legacy entries
    left byte-identical → zero risk to them). Verified: uyghur-steppe &
    goryeo-korea `--strict` now **exit 1 (gated)**; mali-empire & ancient-rome
    `--strict` still **exit 0 (legacy untouched)**. New production is now
    actually held to coverage at creation.
  - **Follow-on (NOT started — not deferred-#7):** uyghur-steppe & goryeo-korea
    are live (`hasContent:true`); de-grandfathering does NOT unship them and
    does not change the site, but their `ship-check` coverage gate now blocks
    until their **228 surfaced gaps** (131+97) are linked or waived. That is
    new-pipeline debt distinct from the DEFERRED legacy #7 (22,877). Closing it
    is real work; do it before treating those two as pipeline-complete.
- **The build itself does not validate links** (`prebuild` gate =
  `lint-links --no-slugs && lint-density`, no fix-links/coverage — speed
  design). Enforcement is `ship-check` at the hasContent flip + the
  build-static shipped-page guard, NOT the build. Sound *iff* ship-check is run.

## ✅ RESOLVED (verifying) — auto-deploy reactivated via in-repo Action (2026-05-18)

`git push origin main` auto-deploys again as of 2026-05-18. The old
**Cloudflare-dashboard Git integration** silently died; it's replaced by the
in-repo `.github/workflows/deploy.yml`. Both GitHub Actions secrets are now set
(`CLOUDFLARE_API_TOKEN` — rolled after being pasted in chat, so the exposed
value is dead — and `CLOUDFLARE_ACCOUNT_ID`). **This STATUS commit is the
first live test** of the reactivated path. Discipline stays: **never assume
push == deployed — verify prod**: `curl -sL https://stuffhappened.com/
early-medieval-europe/ | grep -c "supreme act of ascetic devotion"` (>0 =
current build live).

**Durable fix added:** `.github/workflows/deploy.yml` (in-repo GitHub Action:
push→build→`wrangler deploy`, fails loudly). **INERT until the owner adds 2
GitHub Actions secrets** (only they can): `CLOUDFLARE_API_TOKEN` (Workers
Scripts:Edit token) + `CLOUDFLARE_ACCOUNT_ID` =
`3149ac14b33df309a6ce83201305a973`; then disconnect the old dashboard
integration to avoid double deploys. Until activated, prod updates ONLY via
the manual atomic deploy: `rm -rf out && npm run build && npx wrangler deploy`
(builds the working tree — mind scope; stash unconfirmed changes first).

**Lesson (2026-05-18):** the first manual deploy *failed at the prebuild gate*
— a glossary `matchText` ("Dialogues of Pope Gregory the Great") spanned an
italic boundary so the parser couldn't find it → `lint-links --strict` 1 ERROR
→ build abort. Caught because the build runs the gate; would have been a
silently-dropped link. **After ANY link edit run `npx tsx scripts/lint-links.ts
--tl=<civ> --strict` (pipeline step 9) BEFORE deploy — link-coverage/fix-links
do not check matchText-is-in-body.**

## Worked example — early-medieval-europe ch3 (shipped 2026-05-18 for review)

Full link-coverage closure of one chapter, as the reference pattern: **46 GATE
gaps → 0** (43 born-verified glossary links + 3 documented waivers in
`content/.link-waivers-early-medieval-europe.json`: `monastery` generic/inline-
defined, `Northumbrian` adjectival form of linked place, `Tang-Song China`
already a cross-link). 1 term (`peregrinatio pro Christo`) was a dead Wikipedia
page → authored house-voice blurb, not a guessed slug. `fix-links` 326/326
PASS, 0 retarget. Pushed/deployed for user review. Note: closing coverage is
curation-with-judgement (link load-bearing, waive universals), not zeroing a
number — this chapter is the template.

## Branch / worktree topology

**CLEANED 2026-05-18.** Single worktree, single branch:
- `main` — the only worktree (`/Users/mberning/projects/personal/timeline-v2`)
  and the only local branch. `main == origin/main`, clean.
- `feat/the-17` + `chore/link-coverage-redesign` worktrees (`../timeline-v2-the17`,
  `../timeline-v2-lcr`) **removed**; both branches **verified fully contained in
  main** (zero commits not in main, `git cherry` empty, worktrees clean) before
  deletion — uyghur-steppe + swahili-coast `hasContent:true` on main AND live on
  prod (200). The old "feat/the-17 real, unmerged" note was stale; corrected.
- All `chore/g12-*`, `chore/corpus-remediation`, `worktree-agent-*` (×6) local
  branches **deleted** (were refs only, no work lost).
- **Still on origin:** `origin/chore/link-coverage-redesign` (work is merged to
  main → dead remote ref). Not pruned: deleting a remote branch is outward-
  facing — `git push origin --delete chore/link-coverage-redesign` when wanted.

## DO NOT START (deferred by the user — until they say otherwise)

- **Link-coverage sweep — PAUSED by user 2026-05-19 until ~2026-05-21**
  (weekly usage reset). Active program, not deferred/cancelled — just on
  hold for ~2 days. Do not launch sweep agents before then. Resume at
  "▶ NEXT SESSION START HERE".
- ~~Backlog #7 deferral~~ — **LIFTED by the user 2026-05-18.** The full
  legacy link-coverage sweep + the 2 required new-pipeline civs are now
  ACTIVE work (user chose "the 2 + full legacy sweep"). See the program
  section below. Backlog #7 is no longer deferred. (Currently PAUSED — see
  above.)
- Anything reader-facing **deployed** while the user is reassessing.

## Ready to run — user-gated (commands staged, do not run unprompted)

- **Photo de-dup tail** (cosmetic, deterministic, no-AI): per civ
  `node scripts/fix-links.mjs <tlId> --apply` then `npm run parse`. Drops
  recycled/off-topic images (a few per civ corpus-wide). Content change → commit
  ok, deploy gated.
- ~~**Branch prune**~~ — **DONE 2026-05-18.** All stale local branches + the
  `feat/the-17` & `lcr` worktrees removed (verified fully in main first). Only
  `origin/chore/link-coverage-redesign` remains on the remote (optional:
  `git push origin --delete chore/link-coverage-redesign`).
- **Push/deploy** the local `main` commits (tool fix + this file): tooling/docs
  only, does not change the reader site, but `git push` auto-deploys — **gated
  on the user's explicit word.**

## Remaining real work (not fires — schedule, don't panic)

- Backlog **#17**: ~226 authored fallback blurbs never reviewed for correctness.
- Backlog **#12**: summary-bullet sanity gate (forward gate + 100-civ retro).
- **Backlog #7 — NOW ACTIVE (deferral lifted 2026-05-18).** See the program
  section below — this is the current major effort.
- The-17 roster continuation (`audits/phase-1.5-roster.md`) — build remaining
  new civs the optimized way (now incl. `npm run parse:index` at ship).
- **Chapter-intro retrofit = backlog #19 (Tier C, user-approved 2026-05-19).**
  Pilot read + approved by the user ("this is great"); the *richer* spec is
  now locked (real "story so far" + "lay of the land" backstory — see
  `memory/feedback_chapter_intros_rich`, CLAUDE.md step 8b). The chapter-intro
  card + G13 gate are shipped and IN the new-civ pipeline (ship-check G13,
  zero-tolerance for non-grandfathered + audit-skill scope note);
  `early-medieval-europe` is the live reference template (`e141fda`/`8c51fc3`,
  prod-verified). The other **102 civs are grandfathered** in
  `audits/intro-baseline.json` — site unaffected. Full per-civ procedure +
  execution model now in `audits/corpus-remediation-backlog.md` **#19**.
  **NOT started — planning only.** Concept is approved; what's NOT yet
  decided is *scheduling*: it's a corpus-scale authoring campaign the same
  shape/effort as the #7 link sweep and carries the **same weekly-usage
  budget** — the two must be sequenced, not both run unbudgeted, and #7 is
  itself paused until ~2026-05-21. Do not launch #19 agents without an
  explicit go + a decision on its order vs #7.

## ▶ ACTIVE PROGRAM — full link-coverage sweep (started 2026-05-18)

**Mandate:** user chose "the 2 + full legacy sweep" — close **every** GATE
coverage gap corpus-wide. Verified scope (fresh `--corpus`, current rebuilt
2026-05-17 detector, 2026-05-18): **22,848 GATE gaps across 102 civs · 343
genuinely-blocking (NEW) · 83,109 advisory (ignore — noise by design).**
swahili-coast already 0 (built born-verified). Detection is DONE & current —
worklists `audits/link-coverage/LINK-COVERAGE-NEEDED-<tl>.txt`, ranking
`audits/link-coverage-ledger.md`. No re-detection needed.

**Per-civ procedure (the locked emed-ch3 template — born-verified, NOT
number-zeroing):** for each GATE term in a civ's worklist → (a) add a
confirmed glossary/event link (slug born-verified vs the real Wikipedia page
via `fix-links.mjs`), OR (b) an authored house-voice `definition` blurb if no
genuinely on-subject live page, OR (c) a documented waiver in
`content/.link-waivers-<tl>.json` for universals / inline-defined / already
cross-linked. Then per civ: `link-coverage --tl=<civ> --strict` → 0, AND
`lint-links --tl=<civ> --strict` → 0 ERROR (matchText-in-body — coverage
does NOT check this), AND `npm run parse -- --tl=<civ>`. A missing link beats
a wrong link; waive universals — do not link-spam to hit zero.

**Execution model:** parallel, **worst-civ-first** by GATE count
(islamic-golden-age 635, ottoman-empire 629, renaissance-italy 577,
byzantine-empire 552, delhi-sultanate 541 …). Each civ is an independent
edit surface (its own `content/.{glossary,event,link-waivers}-<tl>.json`).
≤5 concurrent agents (hard ceiling — scar tissue), separate worktrees, ONE
coordinator merges + runs gates + commits per batch. `lint-links --strict`
the gate after every link edit (matchText-italic-boundary class).
**Reader-facing** (adds links) → batched commits; deploy gated per the
publish policy. This is a sustained multi-batch program, not one session;
progress tracked civ-by-civ in `audits/link-coverage-ledger.md`.

**Phase 1 ✅ COMPLETE — the 2 required new-pipeline civs closed + verified:**
- **goryeo-korea** (`eddea55`). 97 GATE → 0: 84 slugs + 1 cross + 12 waivers.
- **uyghur-steppe** (`dfc42cd`). 131 GATE → 0: 160 slugs + 21 blurbs + 50
  new cross-links + 12 waivers (8 distinct, all modern-locator / anchored
  self-ref). **Attempt #1 REJECTED** by the coordinator waiver audit —
  passed all gates but over-waived 107/131 (real places/peoples/our-civs/
  junk fragments); discarded, main restored, redone with the hardened
  brief. The catch validated verify-don't-relay + the waiver audit.

**HARDENED brief is now mandatory for every sweep civ (lesson from the
uyghur over-waive):** the agent brief MUST carry (1) explicit closed-list
waiver categories — subject self-ref-after-first-link / modern-country
locator / already-linked-earlier-chapter / true universal — and a "never
waive a real place/people/person/concept or one of our civs or a
multi-word fragment" rule; (2) the cross-link catalog (our civ ids) so
recurring sibling-civ references become cross-links not waivers; (3) the
goryeo ratio as benchmark (~10–25 waivers, not 100+). **Coordinator step
is non-optional: after gates pass, audit the waiver file** — extract
waived-but-never-linked terms; any real entity there = reject + redo. See
memory `feedback_coverage_agents_over_waive`.

Mechanics validated: worktree agent → coordinator copies curated files to
main → scoped parse → re-run ALL gates on main (verify, don't relay) →
**waiver audit** (waived-but-never-linked must be only modern-locator) →
force-add curated set (NOT git add -A) → commit per civ.

**ARCHITECTURAL FINDING 2026-05-18 — the gate is corpus-coupled; one-pass
parallel sweep cannot reach global 0.** The link-coverage detector has a
"term linked in another civ → GATE here" signal. So every civ committed
adds small NEW gaps to all not-yet-final civs AND re-opens already-"0"
civs. Proven: uyghur-steppe was committed verified `0 NEW`; after
renaissance-italy committed it shows `6 NEW` on current main. The target
moves with every commit. **Revised model = SWEEP + CONVERGE:**
- *Sweep phase:* parallel agents close each civ's full GATE→0 vs the
  corpus at their start (the expensive born-verified work). Coordinator
  verify + waiver-audit + commit. Accept that earlier civs drift to small
  NEW counts (single/low-double digits) as later civs land — expected,
  bounded, NOT a failure.
- *Converge phase:* after all 102 swept once, re-run `--corpus`; the
  residual per-civ NEW is small + mostly recurrences of now-linked terms.
  Mop up in 1–2 fast convergence iterations until the whole corpus is
  simultaneously 0. (Full serialization was considered & rejected — kills
  parallel throughput for ~100 civs to avoid a small bounded tax.)
- *Done-definition:* a civ is "swept" when committed at commit-time-0;
  the program is "done" when a `--corpus` pass shows 0 NEW corpus-wide.

**Brief tightened (ottoman-empire defect):** category (a) waiver = the
civilization's OWN NAME string ONLY (e.g. "Ottoman"/"Ottomans"/"Ottoman
Empire"). A named ruler/sultan/king/person, a named institution/army/corps
(Janissaries), a people, or a place is ALWAYS a born-verified link, NEVER
(a). Waiver audit now also rejects any ruler/institution/person in the
waived-but-never-linked set.

**Legacy sweep — Batch 1 CLOSED 2026-05-18 (end of day): 4 of 5
committed, 1 parked.**
- renaissance-italy ✅ `8d2d78a` (577→0, waiver-clean)
- byzantine-empire ✅ `1efa3c5` (552→0; 8 drift)
- islamic-golden-age ✅ `c9f35c1` (635→0; 23 drift; agent wrote
  .link-waivers to MAIN not its worktree — content verified correct)
- delhi-sultanate ✅ `93d7e3f` (541→0; 171 waivers = legitimate
  verbose-(c), proven by fuller-form recheck; 6 drift)
- ottoman-empire ❌ PARKED for next session — first agent admitted
  waiving Süleyman/Janissaries as (a) + coverage didn't reproduce on
  main. NOT redone today (user said finish-these-and-stop). Redo with
  tightened brief next session — AND re-check with the corrected
  waiver audit (see bug below) before assuming full redo; its reject
  had independent grounds (agent self-admitted (a)-abuse) so likely
  still a redo, but verify cleanly.

**Phase 1 + Batch 1 sweep total committed: 6 civs, 2,533 worklist GATE
closed** — goryeo-korea `eddea55`, uyghur-steppe `dfc42cd`,
renaissance-italy `8d2d78a`, byzantine-empire `1efa3c5`,
islamic-golden-age `c9f35c1`, delhi-sultanate `93d7e3f`. main ==
origin/main, clean. Nothing reader-facing changed adversely; build/
deploy unaffected (they don't run link-coverage).

**COORDINATOR-AUDIT BUG found+fixed-in-method 2026-05-18:** the
waiver-audit one-liner built the `linked` set from glossary
`e.term||e.matchText` (the descriptive LABEL), not `e.matchText` (the
actually-linked prose string). For link-once-waive-variant pairs
(term="Tughlaq dynasty", matchText="Tughlaq"; waiver "Tughlaq") it
false-flagged the waiver as never-linked → nearly false-rejected
delhi-sultanate. **Bug direction = FALSE POSITIVE only** (over-flag),
so the 5 earlier accepts are SAFE (their small never-linked sets were
genuinely universal). **Corrected method (use next session):** build
`linked` from glossary `e.matchText` AND `e.term`, cross/event
`e.matchText`, and for any flagged term also substring-check it
against all linked term+matchText forms before calling it a defect.

**Convergence-phase debt (sweep+converge):** per-civ residual NEW from
sibling-commit cross-reference drift — uyghur ~6, byzantine 8, islamic
23, delhi 6 (renaissance/goryeo 0 at commit, will have drifted since).
Bounded + expected; the end-of-program `--corpus` convergence pass
mops all of it at once. NOT a defect, do not panic-revert.

**ottoman-empire ✅ CLOSED 2026-05-21 (`671894d`, pushed).** The
parked civ is done. Finding: the `a00501` worktree held a *corrected*
attempt (Süleyman linked as `Süleyman I`, Janissaries fully linked —
NOT the rejected over-waive), authored 17:31 on 05-18 but never merged.
Salvaged it rather than redoing: it had only 13 residual `⟨dict⟩`
corpus-drift gaps, closed born-verified (12 glossary links + 1 own-name
waiver "Ottomans" ch12). coverage --strict 0/0 · lint-links 0 ERROR ·
fix-links 689/692 (3 pre-existing) · CORRECTED waiver audit clean.
**Phase 1 + Batch 1 + ottoman = 7 civs swept.**

**Observed (not a blocker, pre-existing & corpus-wide):** ~37 ottoman
glossary/event links don't render because the term appears only inside
`**bold**` (house first-use style) and the matcher won't underline
bold. Coverage gate passes anyway (it checks the JSON, not the rendered
output). Legacy event links do the same. `repair-links.ts` R-TRIM
"fixes" MANGLE non-ASCII names (`Şehzade Mosque`→`ehzade Mosque`) — do
NOT apply it. This is contention/repair backlog territory, not the
sweep's job. Same bar as the 6 prior committed civs.

**Repo note:** 8 LOCKED agent worktrees from 05-18 are still on disk in
`.claude/worktrees/` (STATUS previously claimed "single worktree" —
that was wrong). All on old commits; ottoman content extracted from
a00501. Clean them before/at Batch 2 launch (verify no other-civ
uncommitted work first).

**▶ NEXT: Legacy sweep Batch 2** — next 5 worst from the ledger after
the 7 done: **mughal-empire (525), umayyad-caliphate (500),
medieval-india (480), yuan-dynasty (452), timurid-empire (422)**. Same
hardened brief, ≤5 worktree agents, coordinator protocol with the
CORRECTED waiver audit. These are from-scratch ~480-gap sweeps (NOT a
cheap finish like ottoman). Then continue worst-first, then the
`--corpus` convergence pass.
**Batch 2 NOT launched. No new agents running. Clean stop.**

## Commands

```sh
# corpus link floor (true number, reproducible):
: > /tmp/floor.log
for f in narratives/*.md; do tl=$(basename "$f" .md); \
  n=$(node scripts/fix-links.mjs "$tl" 2>/dev/null \
      | grep -oE 'needing a human retarget[^0-9]*[0-9]+' | grep -oE '[0-9]+$'); \
  echo "${n:-SKIP} $tl" >> /tmp/floor.log; done
awk '$1~/^[0-9]+$/{s+=$1}END{print "TOTAL "s}' /tmp/floor.log

# single civ detail:
node scripts/fix-links.mjs <tlId>
```

## Pointers (don't duplicate)

- `audits/corpus-remediation-backlog.md` — full backlog detail (IDs stable).
- `memory/project_manager_operating_model.md` — this operating model, in memory.
- `memory/project_fix_links_tool.md` — the link/photo tool.
- `audits/phase-1.5-roster.md` — the 17 new civs (separate from remediation).
