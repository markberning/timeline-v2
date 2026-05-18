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
- **Link coverage: BUILT BUT NOT MERGED — pipeline gap.** The rebuilt
  multi-signal detector is `1376548` on `chore/link-coverage-redesign`,
  UNMERGED. On `main`, `scripts/link-coverage.ts` is the OLD weak detector
  (`903a551`, "missed ~38 of ~44 gaps"); `ship-check` line 81 runs that old one.
  **Fix = merge `chore/link-coverage-redesign` → `main`** (its 4 conflict files
  — CLAUDE.md, WRITING-RULES.md, .gitignore, ship-check.mjs — were deliberately
  NOT touched by `e213a52`, so the merge should be clean). Until then: pipeline
  produces link-*correct* civs, not coverage-*complete* ones.
- **The build itself does not validate links** (`prebuild` gate =
  `lint-links --no-slugs && lint-density`, no fix-links/coverage — speed
  design). Enforcement is `ship-check` at the hasContent flip + the
  build-static shipped-page guard, NOT the build. Sound *iff* ship-check is run.

## Branch / worktree topology

- `main` — canonical. The fix-links fix + this file commit here.
- `feat/the-17` @ `1da7ce2` — **real, unmerged.** uyghur-steppe shipped
  text-only; only G4 maps + ship-check + publish remain.
- `chore/link-coverage-redesign` @ `1376548` — **real, unmerged, pushed.** G3
  link-coverage rebuilt (multi-signal). Merge surface when it lands: `CLAUDE.md`,
  `WRITING-RULES.md`, `.gitignore`, `scripts/ship-check.mjs` (comment only),
  `scripts/link-coverage.ts` (full rewrite), new `audits/link-coverage-*`.
  **Avoid editing those 4 files on `main` until this merges** to keep the
  reconcile trivial.
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
