# Pipeline Audit — gate-readiness for the 17 new civs

## ✅ RESOLVED (2026-05-16) — rewrite shipped, G1–G9 all implemented

| Gate | Shipped as | Commit |
|---|---|---|
| G1 density (10–15/ch) | `scripts/lint-density.ts` + `audits/density-baseline.json`, wired into `npm run gate` | 185cb21 |
| G2 links hard gate | `prebuild` = `gate` (lint:links --strict) → parse; +`--contention` pass | 139ba36 |
| G3 link-coverage | `scripts/link-coverage.ts` (Pass A gated, Pass B advisory) | 903a551 |
| G4 map vision-QA | `audit-maps.mjs` + `lint-map-prompt.mjs` + `maps-build.mjs` (auto-regen) | b35be7d |
| G5 map-existence | folded into `ship-check.mjs` | 94aa637 |
| G6 chapter-flow | audit-narrative.md "Build dependency" field; WEAK/REWRITE ship-blocking | 5d75789 |
| G7 backward cross-civ | audit skill "default defer" → mandatory; CLAUDE.md step 11 gate | 5d75789 |
| G8 chapter-count rigor | narrative-movement map, user-approved, no cap, no no-stop bypass | 5d75789 |
| G9 ship-check | `scripts/ship-check.mjs` (`npm run ship:check <tl>`) gates hasContent | 94aa637 |

**Two large pre-existing-debt findings surfaced during the rewrite (NOT pipeline
defects; separate remediation, user's call — they do not block the 17):**
1. **~2211 parser-dropped links corpus-wide** (`lint-links --contention`). Mostly
   benign (shorter matchText losing its span to an intentional longer/cross
   link — reader still gets *a* link there); an unknown bad subset is terms
   that end up unlinked. The link sweep's "0 ERROR" only ever meant matchText
   *validity*, never span contention.
2. **559 chapters across 98/100 civs below 10 event-links** (`lint-density`).
   The existing corpus broadly misses the density bar; grandfathered in
   `audits/density-baseline.json` so legacy builds pass. The 17 new civs are
   held to 10–15 with zero tolerance.

The 17 are now safe to build: every bar the user named is an enforced gate.
Backfilling the two debt items across the existing 100 is a separate decision.

---

**Date:** 2026-05-16. **Trigger:** before building the 17 (`audits/phase-1.5-roster.md`),
verify the pipeline *guarantees* the user's quality bars rather than relying on
agent diligence that historically slipped (corpus link sweep + corpus map regen
were both post-hoc remediations of pipeline gaps).

**Method:** 3 parallel read-only deep audits (maps / narrative / links subsystems)
against the user's stated bars. User-clarified bar: **10–15 events per chapter**;
chapter count uncapped (story-driven); chapters must flow/build; links + forward
AND backward cross-civ comprehensive on first pass; maps good.

## Verdict per bar

| Bar | Verdict | Root cause |
|---|---|---|
| Maps good | **NOT-GUARANTEED** | No automated map QA. `generate-maps.mjs` has no retry/validation; garbled image = `generated`. No map lint, no CI, no map-existence check before `hasContent`. `preprocessPrompt()` only injects pleading text (advisory) — frame defect ~50% on a re-canary. Quality rests entirely on manual thumbnail spot-audit, which already slipped (3 Japan TLs shipped mapless). |
| Chapter count uncapped | **GUARANTEED** (no cap) | Parser unbounded (`parse-narratives.ts:221-253`); WRITING-RULES rejects length targets; corpus 8→20 ch. |
| Chapter-count rigor | **AT-RISK** | "No-stop mode" (documented recent norm) bypasses user approval; count chosen by "take the heavier option," not derived from the number of real narrative movements. |
| 10–15 events/ch | **NOT-GUARANTEED** | "Hard target" (CLAUDE.md:20) vs "don't force it" (HANDOFF:7); enforced nowhere. Measured: scientific-revolution 3.5/ch (Ch1 = 0), mali-empire 7.8/ch. No density lint. |
| Chapters flow | **NOT-GUARANTEED** | Persona D grades flow but skill is "report-only, no fixes" (audit-narrative.md:13); triage caps at "the single highest-value Story-Editor structural note; record the rest as deferred" (HANDOFF:16). WEAK/REWRITE does not block ship. |
| Links comprehensive | **NOT-GUARANTEED** | 966 silently-dropped links live across 89/100 (`audits/link-lint-baseline.json`). `lint:links` wired to nothing (no prebuild/hook/CI). Baseline gate claimed in memory but never coded (inert JSON, no script reads it). Coverage 3-pass detector is a `/tmp` one-off, not a pipeline step. Recently-shipped scientific-revolution & al-andalus still throw ERRORs. |
| Cross-civ forward | **AT-RISK** | Curated but uneven (scientific-revolution 22 cross / 20 ch); no coverage gate; broken cross matchText ships silently. |
| Cross-civ backward | **NOT-GUARANTEED** | audit-narrative.md Persona E Part 2 explicitly "default defer / separate task / report-only"; HANDOFF documents repeated deferral + opportunistic "fold into a future pass." No blocking ship gate; parse only validates backward links you chose to write. |

**Bottom line:** the hardening added a correctness *linter* and parser *warnings*
(real, useful) but no enforced *gate*, no runnable *baseline*, no coverage
*detector* in-flow, and no mandatory *backward pass*. Building 17 more civs on
this reproduces the debt just cleaned up.

## The rewrite — convert documented steps into blocking gates

The single design principle: **`hasContent: true` (ship) must be gated on
objective, automated checks; quality work that is "deferred" today becomes
must-fix that blocks ship.**

### G1 — Density gate (events/chapter)
New `scripts/lint-density.ts`: per chapter count curated event-links; ERROR if
outside **10–15**; print `events/ch min/max/avg`; `--strict` exits non-zero.
Backfill the known offenders before treating corpus as clean baseline.

### G2 — Links: make the gate real
- Wire `lint:links --strict` into `prebuild` (or `build-static.mjs` pre-`next build`).
- **Actually implement the baseline gate** memory claims exists: `lint-links.ts`
  loads `audits/link-lint-baseline.json`, exits non-zero only on errors NOT in
  baseline (key `tl|ch|kind|msg`). The 17 new civ IDs go on a zero-tolerance
  allowlist (never grandfathered).
- Add per-chapter cross-vs-event-vs-glossary **superset/overlap** check (the
  known span-stealing foot-gun; HANDOFF:40).

### G3 — Link coverage detector in-flow
Promote the `/tmp/lsweep.py` 3-pass detector to committed
`scripts/link-coverage.ts`; new numbered CLAUDE.md step between 5 and 6; every
flagged term must be linked or explicitly waived. Reconcile/delete the
contradictory low per-TL targets (CLAUDE.md:7 / HANDOFF:13) vs the locked
"proper nouns + concepts, no cap" bar.

### G4 — Map QA gate
New `scripts/audit-maps.mjs`: each PNG + its prompt → vision model with the
locked acceptance criteria (memory `feedback_dont_over_generalize_defect_rules`);
per-chapter PASS/FAIL + reason; exit non-zero on FAIL. Wrap gen to auto-loop
generate→audit→regen failures (≤3 rounds)→write `MAP-FAILURES-{tlId}.txt`.
Add a prompt-file linter (CRITICAL RULES block present; ≤5 sites / ≤1 annotation
per chapter; no banned phrases; `## Chapter N` count == narrative chapter count).

### G5 — Map-existence ship gate
Before `hasContent: true`: assert `public/maps/{tlId}/` has exactly one
`chapter-N.webp` per `## Chapter N`. Directly prevents the Japan-mapless bug.

### G6 — Chapter flow as a hard gate
Rewrite audit-narrative.md triage: **all Persona-D WEAK/REWRITE chapters are
must-fix and block ship**; add a Persona-D output field "Build map: does Ch N
advance from Ch N-1? yes/weak/no per boundary" — any "no" is must-fix. Delete the
"single structural note, defer the rest" rule.

### G7 — Backward cross-civ as a mandatory step
audit-narrative.md Persona E Part 2: change "default defer" → "must apply before
ship." New gated CLAUDE.md step: every backward finding applied or ledgered with
a reason; `lint:links --strict` passes for **every reference TL touched**.

### G8 — Chapter-count rigor
Mandatory pre-write **narrative-movement map** (list distinct dramatic movements;
chapters = movements, not a civ-type template), user-approved. Remove the
no-stop bypass *for the count decision specifically*. Replace "take the heavier
option" with "the count the movement-map produces."

### G9 — Single ship-check
`scripts/ship-check.mjs` (must pass before `hasContent: true`): maps exist+audited
(G4/G5), links clean baseline-aware (G2), coverage triaged (G3), density in band
(G1), Persona-D no WEAK/REWRITE (G6), backward pass done (G7). Update CLAUDE.md
pipeline + HANDOFF workflow + audit-narrative.md + WRITING-RULES + memory to
point at the gates instead of describing manual steps.

## Sequencing note / collision risk

`parse-narratives.ts`, `HANDOFF.md`, and `content/.*-links` are actively edited
by the concurrent link-sweep session. G2/G3 touch the link toolchain. Coordinate
or sequence the rewrite so it does not collide; the audit/script-creation parts
(G1, G4, G5, G9, audit-narrative.md, WRITING-RULES, CLAUDE.md) are largely
collision-free and can go first.
