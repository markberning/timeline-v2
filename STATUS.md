# STATUS — canonical project state (READ THIS FIRST)

_This file is the single source of truth. It **supersedes** `HANDOFF.md`,
`HANDOFF-maps-sync-chains.md`, `HANDOFF-link-sweep.md` — those are history.
Last verified: 2026-05-17. Every number below has a reproduce command; if you
doubt a number, run it. **Never relay a previous session's "all clean" /
"all broken" claim as fact — verify with the command.**_

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

- `main` — canonical. The fix-links fix + this file commit here.
- `feat/the-17` @ `1da7ce2` — **real, unmerged.** uyghur-steppe shipped
  text-only; only G4 maps + ship-check + publish remain.
- `chore/link-coverage-redesign` @ `1376548` — **MERGED to `main` (`e77736a`,
  2026-05-18, clean, no conflicts).** Branch can be deleted with the dead set.
- `chore/g12-{a..e}`, `chore/g12-{a..e}-sweep`, `chore/corpus-remediation`,
  `worktree-agent-*` (×6) — **all dead/superseded** per git history. Safe to
  delete (refs only; no work lost). Prune command below — user-gated, low value.

## DO NOT START (deferred by the user — until they say otherwise)

- **Backlog #7 — link-coverage remediation: 22,877 gaps** across 102 civs.
  Detector + per-civ worklists exist (`npx tsx scripts/link-coverage.ts
  --corpus`). The user **explicitly deferred closing these.** Do not start.
- Anything reader-facing **deployed** while the user is reassessing.

## Ready to run — user-gated (commands staged, do not run unprompted)

- **Photo de-dup tail** (cosmetic, deterministic, no-AI): per civ
  `node scripts/fix-links.mjs <tlId> --apply` then `npm run parse`. Drops
  recycled/off-topic images (a few per civ corpus-wide). Content change → commit
  ok, deploy gated.
- **Branch prune:** `git branch -D chore/g12-a chore/g12-a-sweep chore/g12-b
  chore/g12-b-sweep chore/g12-c chore/g12-c-sweep chore/g12-d chore/g12-d-sweep
  chore/g12-e chore/g12-e-sweep chore/corpus-remediation` + the 6
  `worktree-agent-*`. Keep `main`, `feat/the-17`, `chore/link-coverage-redesign`.
- **Push/deploy** the local `main` commits (tool fix + this file): tooling/docs
  only, does not change the reader site, but `git push` auto-deploys — **gated
  on the user's explicit word.**

## Remaining real work (not fires — schedule, don't panic)

- Backlog **#17**: ~226 authored fallback blurbs never reviewed for correctness.
- Backlog **#12**: summary-bullet sanity gate (forward gate + 100-civ retro).
- Backlog **#7**: the 22,877 coverage gaps (deferred — see above).
- `feat/the-17`: finish uyghur-steppe maps → ship-check → merge → deploy.

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
