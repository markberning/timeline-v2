# Link-coverage sweep PIPELINE (built 2026-05-21)

Replaces the single-agent "full sweep" that failed by letting one agent both
decide what to link AND do the linking — so it dodged the tedious half by mass-
waiving (gate green, links never made). The pipeline splits the job so no stage
can dodge.

## Why the old way failed
- `link-coverage --strict` exits 0 once NEW(★)=0 even with hundreds of
  grandfathered GATE gaps left, and it treats a **waiver (skip)** as "resolved"
  — it can't tell a lazy skip from a legitimate one. So an agent hits green by
  skipping. Only a human waiver-audit caught it. Batch-2 agents skipped 80–223
  terms/civ that should have been links (incl. whole sibling civs).

## The pipeline (3 stages)

### 1. PROPOSE — `node scripts/link-suggest.mjs --tl=<civ>`  (deterministic)
Reads the GATE worklist (`audits/link-coverage/LINK-COVERAGE-NEEDED-<civ>.txt`)
and classifies EVERY term, writing `audits/link-suggest/<civ>.{json,md}`.
**Now batched (2026-05-21): ~5s for a 600-term civ, was minutes.** It pre-warms all
REUSE slug verifications in one batched `verifySlugs` pass (20 titles/call, cached)
and classifies with a concurrency pool instead of one serial HTTP call per term.
Each REUSE row also carries `sourceCivs` = the number of DISTINCT civs that link the
exact slug (consensus signal used by the auto-apply stage).
- **REUSE** — term is already a born-verified glossary link in another civ →
  reuse that slug (high confidence; ~80% of terms hit this — the corpus index is
  ~18k slugs). Linker just confirms the subject matches in this civ's context.
- **CROSS** — term names another of our civs (resolved from how other civs
  cross-link it, or civ-id match) → cross-link.
- **SKIP** — the ONLY allowed non-links: civ's own name (cat B), modern
  country/state/city locator (cat A), generic common noun (cat C).
- **LINK-CANDIDATE** — Wikipedia search top hit, verified live + non-disambig,
  with its lead sentence for the subject confirmation.
- **NO-PAGE** — no confident page → route to the blurb writer.

### 2. LINK — an agent (or coordinator) consumes the worksheet
For each row: confirm REUSE/CROSS (quick — slug is pre-resolved), confirm or fix
LINK-CANDIDATE by reading the lead (born-verified subject check — the one thing a
machine can't decide), and write the curated glossary/cross entry. **matchText
must be a verbatim body substring of that chapter** (bold occurrences are fine to
target — bold IS linkable; see memory project_coverage_bold_is_linkable). The
agent **cannot skip outside the pre-approved SKIP set** — that's the dodge fix.
Route NO-PAGE rows to stage 3.

### 3. BLURB — author `definition` blurbs for NO-PAGE terms (no wikiSlug).

## Auto-apply + split (automated — added 2026-05-21)

Two scripts sit between PROPOSE and the agents to (a) take the provably-safe links off
the agents' plate and (b) generate their inputs + brief, removing all the per-civ
hand-orchestration:

```sh
# 1a. auto-write ONLY the provably-safe REUSE slice (dry-run first, then --apply)
node scripts/link-apply.mjs <civ>            # inspect
node scripts/link-apply.mjs <civ> --apply    # write
# 1b. generate per-chapter agent inputs + the hardened brief (excludes auto-applied)
node scripts/link-split.mjs <civ>
```

- **link-apply** auto-writes a glossary link ONLY where a same-name/wrong-subject
  mixup is near-impossible: REUSE `conf=high` (one corpus slug — no homonym) **AND**
  term ≥2 words (excludes single-word person/place homonyms) **AND** slug linked in
  ≥2 distinct civs (consensus) **AND** a clean exact-case word-boundary occurrence
  exists in the chapter PROSE (heading lines stripped, so a title-only term is
  deferred not title-linked) **AND** the span isn't already owned. Everything else —
  all single-word terms, all `CONFIRM-homonym`, all low-consensus — is DEFERRED to an
  agent's lead-read. REUSE is NOT a quality guarantee (the source corpus has
  legacy wrong-subject links fix-links can't catch — Antioch-the-city in a Crusades
  chapter, one al-Mansur vs another), so this slice is deliberately narrow (~8% of
  gaps / ~16% of REUSE on a fresh civ, e.g. 30 links on late-medieval-europe). Every
  auto-written link STILL passes the full gate stack (lint/fix-links/audit-reuse/
  coverage/snapshot) before commit — a bad one is blocked, not shipped. Eyeball the
  printed list + run `audit-reuse-links` regardless.
- **link-split** writes `/tmp/<civ>/in/ch{N}.json` (the rows each chapter's agent must
  resolve — REUSE/CROSS/LINK-CANDIDATE/NO-PAGE, minus SKIP, minus auto-applied; the
  page lead is embedded so agents don't re-fetch), an empty `/tmp/<civ>/out/`, and
  `/tmp/<civ>/BRIEF.md` (civ id, self-CROSS name, own-name waiver, the full civ
  catalog, matchText rule). Replaces the hand-typed `node -e` split + copy-swap brief.

## Coordinator (automated — added 2026-05-21)

The merge + verify hand-work is now two scripts (replacing the per-civ manual steps):

```sh
# 2. merge agent outputs (pass-1 dir, and pass-2/residual dir ONLY if you ran one)
node scripts/sweep-merge.mjs <civ> /tmp/<civ>/out [/tmp/<civ>/out2]
# 3. run the whole verification + snapshot + ship gates as one report
node scripts/sweep-verify.mjs <civ> --fix-drops
```

**Residual round is now OPTIONAL (locked 2026-05-21).** After the main agent wave +
merge + verify, if only a small drift residual remains (a few NEW from sibling-commit
coupling), STOP — do NOT launch a residual agent round. The end-of-program `--corpus`
convergence pass mops all drift at once (that was always the model). Run a residual
pass only if the worklist is genuinely under-closed (a chapter agent under-delivered),
not for a handful of drift gaps.

- **sweep-merge** dedups new matchText against existing glossary + cross + **event**
  links (kills the silent-drop collision class), derives the chapter set from the
  narrative's `# Chapter N` headers (no more hard-coded ch9/ch10 bug), and *reports*
  every skipped collision instead of dropping it silently.
- **sweep-verify** runs parse (classifying "not found" drops into redundant vs
  form-mismatch; `--fix-drops` auto-removes the redundant glossary entries an existing
  cross/event link already covers), link-coverage (TOTAL), lint --strict, fix-links,
  audit-reuse-links, snapshot regen, and G10/G11/G12 — printing one ✅/❌ report.
  The waiver flag is advisory (bold-only/artifact/duplicate waivers are legit; eyeball
  them). `--no-snapshot` skips the slow snapshot+ship-gate tail for a fast iteration.

The manual gate-by-gate sequence below is what those two scripts run; keep it as the
reference for what each check means.

## Verify (coordinator, every civ — verify don't relay)
- `link-coverage --tl=<civ>` (no --strict): TOTAL GATE ≈ 0 (NOT just "0 NEW").
- `lint-links --tl=<civ> --strict`: 0 ERROR.
- `fix-links <civ>`: 0 disambiguation/dead/wrong-subject flags.
- `parse -- --tl=<civ>`: no avoidable "not found in body" drops.
- **`audit-reuse-links <civ>`: REUSE wrong-subject scan (added 2026-05-21).**
  fix-links proves a page is live/non-disambig/word-overlapping, but CANNOT catch
  a wrong subject whose *name* overlaps (Assassins→Assassin's_Creed the video
  game; Mansur→Ustad_Mansur the Mughal painter). This flags the complete subset
  where that hides — slug words diverge from the term, or a pop-culture/modern
  slug pattern — so the coordinator eyeballs ALL of it, not a random sample.
  Exits 1 on any pop-culture pattern (near-certain wrong link). The flagged list
  is mostly legitimate aliases (Ibn Sina→Avicenna, Jabal Tariq→Gibraltar);
  confirm each page SUBJECT matches the chapter. This replaces ad-hoc spot-checks.
- Waiver audit: final waivers ≤ ~30, every one cat A/B/C.

## Snapshot (coordinator, after gates pass)
`verify-links <civ> --write-snapshot` (0 auto-fail) then `audit-events`/
`audit-glossary`/`audit-crosslinks` all PASS — regenerates the G10/G11/G12
ship-gate contract for the new links.

## Future hardening (optional)
Make `link-coverage` itself refuse lazy skips: cap waivers/civ and auto-reject a
waiver that is a capitalized proper noun / multi-word name / in the civ catalog.
Then "skip" stops being an escape hatch even without a reviewer.
