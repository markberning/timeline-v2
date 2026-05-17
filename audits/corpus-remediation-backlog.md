# Corpus Remediation Backlog

**What this is.** The G1–G12 pipeline gates (see `audits/pipeline-audit.md`)
protect the **17 new civs going forward**. The **existing 100 shipped civs**
were built on the old diligence-based pipeline and were *never run through the
new gates* — they were grandfathered so legacy builds wouldn't break. This file
is the single living tracker of everything owed on the existing corpus.

**Scope rule.** This is **deferred / separate from the 17-civ build** (and from
the goryeo-korea trial). Do not start these without an explicit decision —
several are large and billable. Status legend: ☐ not started · ◐ in progress ·
☑ done.

**Sequencing principle.** Cheap/deterministic first (free, catch real bugs),
then text-model passes (batched, moderate cost), then vision passes (highest
cost — sample or prioritize). Decide go/no-go per item; don't blanket-run.

---

## Priority table

| # | Item | Traces to | Volume (known/sampled) | Cost | Pri | Status |
|---|------|-----------|------------------------|------|-----|--------|
| 1 | Dead wikiSlugs corpus-wide | lint-links slug check (prebuild uses `--no-slugs`) | mali-empire alone had 1 (Ahmed_Baba 404) → likely dozens+ | free | **HIGH** | ☐ |
| 2 | Parser-dropped links triage | pipeline-audit debt #1 | ~2211 (`lint:links --contention`); unknown bad subset | free | **HIGH** | ☐ |
| 3 | G10 event-popup coherence retro | G10 never run on 100 | 100 civs × ~60–300 events; text every event + vision imaged | $$$ | **HIGH** | ☐ |
| 4 | G12 glossary coherence retro | G12 never run on 100 | ~143 terms/civ × 100 (text only) | $$ | MED | ☐ |
| 5 | G11 cross-link coherence retro | G11 Part B never run on 100 | 3355 cross-links (text only); Part A verified clean 0/3355 | $$ | MED | ☐ |
| 6 | Density backfill | pipeline-audit debt #2 | 559 sub-10 chapters across 98/100 civs | authoring | MED | ☐ |
| 7 | G3 link-coverage retro | G3 never run on 100 | bolded-unlinked: mali 58 / viking 111 / scirev 36 (sampled) | curation | MED | ☐ |
| 8 | G6 chapter-flow re-grade | "Build dependency" field is new; many civs lack audit files | unknown; ship-check found `audits/mali-empire.audit.md` missing | model | LOW | ☐ |
| 9 | G4 map re-QA (automated) | corpus passed *manual* audit only | ~870 chapters; manual audit was thorough → low yield | $$$ | LOW | ☐ |
| 10 | Term-precision sweep | `audits/term-precision-sweep.md` (existing) | Scandinavia≠Nordic class corpus-wide | curation | LOW | ☐ |
| 11 | Build/data audit (Track 3) | `memory/project_corpus_audit_plan` (was gated on link sweep) | parse/data-shape integrity corpus-wide | free | LOW | ☐ |
| 12 | Summary-bullets coherence (G13) | pipeline-audit "only ungated surface" | ~6–10 bullets × ~900 chapters | $$ | LOW | ☐ |

---

## Detail & method

**1. Dead wikiSlugs corpus-wide.** `prebuild`'s `gate` runs `--no-slugs` for
speed; the live-Wikipedia 404 check only runs per-civ in `ship-check`. The
existing 100 were never swept with slugs on. Method: `npx tsx
scripts/lint-links.ts --strict` (no `--no-slugs`) corpus-wide; every ERROR is a
real dead glossary/event slug a reader hits. Free, deterministic, high-value —
do first.

**2. Parser-dropped links triage.** `lint:links --contention` surfaces ~2211
links the parser silently drops. Most benign (shorter matchText loses its span
to an intentional longer/cross link — reader still gets *a* link there). The bad
subset = terms that end up with **no link at all**. Method: extend the
contention pass to classify "span consumed but term still linked elsewhere in
chapter" (benign) vs "term linked nowhere" (real loss); only the latter is
worklist. Free.

**3. G10 event-popup coherence (the user's explicit ask).** Run
`scripts/audit-events.mjs` over the 100. Stage 1 text (label/desc vs
wikiExtract/wikiSlug) is cheap and batched — run it everywhere first. Stage 2
vision (image↔caption↔subject) is the cost driver — sample, or prioritize
high-traffic / image-heavy civs, or run text-only first and vision only where
text flags. Fixes go via wikiSlug correction, link→eventId fix,
`.image-overrides.json` / `.caption-overrides.json`.

**4. G12 glossary / 5. G11 cross-link coherence.** Text-only (cheaper than G10).
`audit-glossary.mjs` / `audit-crosslinks.mjs` over the 100, batched. G11 Part A
(target resolution) already verified clean corpus-wide — only the semantic
(blurb↔target↔subject) pass is owed.

**6. Density backfill.** 559 chapters < 10 event-links (98/100 civs;
`audits/density-baseline.json`). Authoring effort (curate more event links or
add events). Decision: backfill all, backfill worst offenders only (e.g.
scientific-revolution avg 3.5/ch), or accept legacy as-is. Not started — user's
call on whether/how much.

**7. G3 link-coverage retro.** Author-bolded-but-unlinked terms across the 100
(sampled: mali 58, viking 111, scirev 36). Curation effort; pairs with #2/#4.

**8. G6 chapter-flow re-grade.** The Persona-D "Build dependency" gate field is
new; old `audits/{tl}.audit.md` files predate it and some civs may have no
audit file at all. Re-running the 5-persona audit corpus-wide is expensive and
low-yield (these shipped and read fine) — likely only worth it for civs with
known weak chapters. Low priority.

**9. G4 map re-QA.** The corpus passed the *manual* map audit
(`audits/map-audit.md` RESOLVED, thorough). Automated `audit-maps.mjs` re-QA
would catch only what eyeballing missed — billable, low expected yield. Defer
unless a specific civ looks off.

**11. Build/data audit (Track 3).** From the original 4-track corpus audit plan
(`memory/project_corpus_audit_plan`); was gated on the link sweep (now done) but
never executed. Parse integrity, data-shape consistency, offline-manifest
sanity corpus-wide. Free; scope TBD.

**12. Summary-bullets coherence (G13).** The one reader surface with no
coherence gate (currently covered only by the 5-persona narrative audit). Build
`audit-summaries.mjs` (text: do the bullets faithfully represent the chapter?)
if wanted — then it applies to new civs AND becomes backlog item for the 100.

---

## Cross-references (do not duplicate these)

- `audits/pipeline-audit.md` — the gate rewrite + the 2 debt findings (#2, #6).
- `audits/term-precision-sweep.md` — the live tracker for #10.
- `audits/coverage-audit.md` — gap findings (RESOLVED → fed the 17 roster).
- `memory/project_corpus_audit_plan` — original 4-track plan (#11 is Track 3).
- `audits/phase-1.5-roster.md` — the 17 new civs (NOT this backlog).

## Decisions needed (when this track is picked up)

1. Run order & how much to sample for the billable model passes (#3/#4/#5).
2. Density backfill (#6): all / worst-only / accept legacy.
3. Whether to build G13 (#12) so it also gates new civs.
4. Prioritized civ ordering — by reader traffic? by chain? all-or-nothing?
