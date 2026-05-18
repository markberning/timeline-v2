# STATUS — canonical project state (READ THIS FIRST)

_This file is the single source of truth. It **supersedes** `HANDOFF.md`,
`HANDOFF-maps-sync-chains.md`, `HANDOFF-link-sweep.md` — those are history.
Last verified: 2026-05-17. Every number below has a reproduce command; if you
doubt a number, run it. **Never relay a previous session's "all clean" /
"all broken" claim as fact — verify with the command.**_

---

## ▶ COLD-START HANDOFF — 2026-05-18 (session cleared here; read this FIRST)

**Git:** `main` == `origin/main` @ `107ea65`, in sync. **The Swahili Coast +
the iOS swipe fix are SHIPPED and VERIFIED LIVE** (2026-05-18): user ran the
deploy from their terminal, wrangler uploaded 553 files;
`stuffhappened.com/swahili-coast/` = HTTP 200 serving real content, in the
live search-index, home/emep/mali 200 (no regression). Build-opti acceptance
test + The Swahili Coast: **DONE, live, closed.**

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

**Done & durable:**
- **Word-finder** — `scripts/link-coverage.ts` S7 rare-word signal: a
  lowercase word appearing in ≤6 of 102 civ narratives gets an **ADVISORY**
  `rare` tag. It never gates (verified: emep ch3 still 0 GATE) so it cannot
  block a build. User **ACCEPTED** it as a noisy-but-safe curator hint; the
  clean version (subtract a common-English word list) is deliberately
  deferred as a rabbit-hole — revisit only if noise slows real curation.
- **Build optimization — ALL 3 PILLARS DONE + codified 2026-05-18.**
  Pillar 1 (batch-don't-drip) + Pillar 3 (parallel read/suggest/apply, one
  coordinator) codified as the locked build procedure in
  `audits/build-optimization.md` + memory `project_build_optimization_done`.
  Pillar 2 (`npm run parse -- --tl=<civ>`, ~2s) **byte-verified**: scoped
  phoenicia output == committed full-parse content JSON + manifest, clean
  tree. Deterministic suggest tools Pillar 3 needs all confirmed present.
  `scripts/build-timer.mjs` (begin/mark/summary) is the deterministic
  per-step timing ledger for the acceptance test — NOT a monitoring agent.
- **Build-opti ACCEPTANCE TEST PASSED** — `swahili-coast` built brand-new
  end-to-end the optimized way (the test replaced the emep ch3 split at user
  request: a full new civ exercises the whole pipeline). 8 ch, ~23k words,
  all 12 ship-check gates green, shipped on `feat/the-17`. Total wall **2h
  4m**, full per-step ledger `audits/build-timing-swahili-coast.md`, verdict
  in `audits/build-optimization.md` → "Acceptance test RESULT". Optimization
  validated where aimed (fix loop no longer the bottleneck; scoped rebuild 5s
  vs 8min; creation parallelized); remaining cost is vendor map API + the
  mandatory full-parse ship tax, not process waste. Zero quality loss.
- **Build-opti 4th refinement DONE 2026-05-18 — `npm run parse:index`.**
  Post-`hasContent`-flip parse (~8m, the "get civ into search index" step)
  → **~1s**, **proven byte-identical** to the full parse's index (same
  sha256, `cmp -s` clean). `parse-narratives.ts` now shares one
  `generateSearchIndex()`; `--search-index-only` runs only it. Ship step:
  after the flip use `npm run parse:index`, not a standalone full parse
  (the deploy's `npm run build`→prebuild still does the one unavoidable
  full parse). Docs+memory updated. Multi-civ guidance: 2 civs via
  STAGGERED pipeline only (separate worktrees; backward-pass +
  ship/parse/deploy serialized; never shrink a gate's fan-out for speed).
- emep **ch3** fully link-curated + the flat-earth prose fix, LIVE on prod
  (manual deploy). Repo made self-contained (`df41b09` committed 2 event-link
  files that were local-only).

**Next (nothing urgent — the shipped work is closed):**
1. ~~commit the `node_modules` symlink removal~~ — **DONE `2833e00`** (see
   repo-hygiene item above).
2. ~~Optional cleanup: feat/the-17 + lcr worktrees~~ — **DONE 2026-05-18.**
   Both worktrees removed + all stale local branches deleted (verified fully
   in main first). See "Branch / worktree topology". Only the dead remote ref
   `origin/chore/link-coverage-redesign` is left (optional remote prune).
3. **The-17 roster continues** (`audits/phase-1.5-roster.md`): swahili-coast
   was the build-opti acceptance test AND roster work; remaining roster civs
   build the same optimized way (`audits/build-optimization.md` → "Locked
   build procedure"; memory `project_build_optimization_done`). Mind the
   ship-packaging traps: memory `feedback_civ_ship_packaging`.
- The `emep` ch3 → 3-chapter split is **no longer the acceptance test**
  (superseded) but remains available as ordinary content work if wanted.
- Deferred unchanged: backlog **#7** (22,877 coverage gaps), **#17**, **#12**
  — see "DO NOT START" / "Remaining real work" below.

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

- ~~Backlog #7 deferral~~ — **LIFTED by the user 2026-05-18.** The full
  legacy link-coverage sweep + the 2 required new-pipeline civs are now
  ACTIVE work (user chose "the 2 + full legacy sweep"). See the program
  section below. Backlog #7 is no longer deferred.
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

Phase 1 (first batch — the 2 required new-pipeline civs):
- **goryeo-korea ✅ DONE** (`eddea55`, pushed 2026-05-18). 97 GATE → 0:
  84 born-verified glossary slugs + 1 cross-link + 12 documented waivers,
  0 blurbs. Re-verified independently on main (link-coverage/lint-links/
  fix-links/audit-glossary/events/crosslinks all green). Template proven.
- **uyghur-steppe ⏳ in progress** (worktree agent, 131 GATE).
Mechanics validated: parallel worktree agent → coordinator copies curated
files to main → scoped parse → re-run ALL gates on main (verify, don't
relay) → force-add curated set (NOT git add -A) → commit. Ready to scale
to 5-agent worst-civ-first legacy batches once uyghur-steppe lands.

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
