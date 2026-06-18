# STATUS — canonical project state (READ THIS FIRST)

_This file holds the **durable** project facts (operating model + verified
numbers + reproduce commands). Day-to-day state lives in `MEMORY.md` (loaded every
session) and in `CLAUDE.md` (the build spec). **Never relay a previous session's
"all clean" / "all broken" claim as fact — verify with the reproduce command.**_

Trimmed 2026-06-18: the long dated cold-start handoff + scheduled-run playbook (the
#7 link-coverage sweep and #19 chapter-intro retrofit — both COMPLETE corpus-wide —
plus a since-disabled cron) were removed as history. Their durable lessons live in
`memory/` (`project_manager_operating_model`, `feedback_coverage_agents_over_waive`,
`project_coverage_sweep_corpus_coupled`, `project_fix_links_tool`).

---

## Operating model (durable — this is how this project is run)

1. **One writer at a time on `main`.** Concurrent work goes in an isolated
   `git worktree` on its own branch, merged later — never two sessions editing
   the same checkout.
2. **Verify, don't relay.** Session self-reports ("solid and clean", "N broken")
   are not evidence. The deterministic tools are evidence. Re-run them.
3. **Stale report files cause false emergencies.** Transient `*-NEEDED-*.txt` /
   handoff notes are not canonical; a number with no reproduce command is a rumour.
4. **Publish per the CLAUDE.md PUBLISH POLICY.** Ship-ready (gated) work deploys
   without asking; never publish a gate-failing or half-built state. **v2 is OFF
   LIVE** (see CLAUDE.md → Deploy): deploys reach `dev.stuffhappened.com`, the apex
   serves a placeholder. Verify prod work against `dev.stuffhappened.com`.
5. **Don't start deferred work** until the user lifts it.

## Verified truth — 2026-05-17

| Thing | State | Reproduce |
|---|---|---|
| Reader-facing **dead/disambiguation** links | **0** in every civ sampled (worst 5 + spot) | `node scripts/fix-links.mjs <tlId>` → "PAGE" never appears |
| Corpus **link floor** (links a human should eyeball) | **8 links across 7 civs** (95/102 civs perfectly clean, 0 errors). Was 81 pre-fix, 801 as a stale phantom. The 8: ottoman-empire ×2; zhou-dynasty, mycenaean-civilization, kievan-rus, inca-empire, asuka-nara-japan, anglo-saxon-england ×1 — each a genuine slug≠term the tool correctly won't auto-confirm | run the floor loop in "Commands" below |
| Git | single writer; verify with | `git status -s && git rev-list --left-right --count HEAD...origin/main` |
| Backlog #7 (link-coverage sweep) | **COMPLETE corpus-wide** (0 NEW gaps; remaining GATE gaps all grandfathered) | `npx tsx scripts/link-coverage.ts --corpus` |
| Backlog #19 (chapter-intro retrofit) | **COMPLETE** (102/102; `audits/intro-baseline.json` empty) | — |
| Backlog #18 (link/photo cleanup) | DONE in substance — "0 broken" in older docs was the old liveness-only ruler; honest statement = "0 dead/disambiguation, ~floor of author-named pages Wikipedia renamed" | — |

**The `fix-links.mjs` author-fidelity fix (why the gate is trustworthy):** the
subject check used to compare the linked term against the page Wikipedia
*redirected* to, so a correctly-named slug (`Gukjagam`) routed to a differently-
titled article (`Kukchagam`) was falsely flagged "wrong subject" — the
false-positive class that made every link pass look like an unfixable swamp. Fix:
if the author named the slug as the term itself and the page is live & not a
disambiguation, trust Wikipedia's routing; a real dodge (term ≠ slug) still fails.

## Open backlog (not fires — schedule, don't panic)

- Backlog **#17**: ~226 authored fallback blurbs never reviewed for correctness.
- Backlog **#12**: summary-bullet sanity gate (forward gate + 100-civ retro).
- Backlog **#16**: BC/AD → BCE/CE corpus-wide conversion.
- The-17 roster continuation (`audits/phase-1.5-roster.md`) — remaining new civs.

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

# corpus link-coverage (NEW gaps should be 0):
npx tsx scripts/link-coverage.ts --corpus
```

## Pointers (don't duplicate)

- `CLAUDE.md` — the build spec (pipeline, gates, publish policy, file tree).
- `docs/content-pipeline.md` — the 14-step civ-build recipe.
- `memory/project_manager_operating_model.md` — this operating model, in memory.
- `memory/project_fix_links_tool.md` — the link/photo tool.
- `audits/phase-1.5-roster.md` — the 17 new civs.
