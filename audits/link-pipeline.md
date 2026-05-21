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
and classifies EVERY term, writing `audits/link-suggest/<civ>.{json,md}`:
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

## Verify (coordinator, every civ — verify don't relay)
- `link-coverage --tl=<civ>` (no --strict): TOTAL GATE ≈ 0 (NOT just "0 NEW").
- `lint-links --tl=<civ> --strict`: 0 ERROR.
- `fix-links <civ>`: 0 disambiguation/dead/wrong-subject flags.
- `parse -- --tl=<civ>`: no avoidable "not found in body" drops.
- Waiver audit: final waivers ≤ ~30, every one cat A/B/C.

## Future hardening (optional)
Make `link-coverage` itself refuse lazy skips: cap waivers/civ and auto-reject a
waiver that is a capitalized proper noun / multi-word name / in the civ catalog.
Then "skip" stops being an escape hatch even without a reviewer.
