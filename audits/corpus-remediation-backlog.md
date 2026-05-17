# Corpus Remediation Backlog

**What this is.** The G1–G12 pipeline gates (see `audits/pipeline-audit.md`)
protect the **17 new civs going forward**. The **existing 100 shipped civs**
were built on the old diligence-based pipeline and were *never run through the
new gates* — they were grandfathered so legacy builds wouldn't break. This file
is the single living tracker of everything owed on the existing corpus.

**Scope rule is now per-tier, not blanket.** The old "all of this is deferred /
don't start without a decision" rule was too blunt: it gated free,
deterministic, reader-facing bug-catchers behind the same decision as $$$ vision
passes. Corrected:

- **Tier A is NOT gated** — it's free, deterministic, and catches live
  reader-facing bugs. Run it now; no decision required.
- **Tier B IS gated** — billable model passes; explicit go/no-go per item.
- **Tier C** — authoring / standard-drift; a recommended default is set, only
  light sign-off needed.
- **Tier D** — has forward value (gates the 17 too); treat as build work, not
  deferred retro.
- **Tier E** — genuinely defer; low yield.

Still **separate from the 17-civ build and the goryeo-korea trial.** Status
legend: ☐ not started · ◐ in progress · ☑ done. **Item IDs (1–12) are stable**
— other docs cross-reference them; tiers regroup, IDs don't move.

**Sequencing principle.** Within Tier B: cheap/deterministic text first
(batched, moderate cost), then vision (highest cost — sample or prioritize,
never blanket-run).

**Prioritization caveat (the missing axis).** Everything below is sorted by
*cost*, not by *reader exposure*, because there is no analytics/traffic source
in the repo. Cost-sorting is the weakest prioritization for optional work: a
dead slug or wrong popup in a heavily-read civ matters far more than a thin
chapter in an obscure one. If/when traffic data exists, **re-sort Tier B by
reader exposure before spending money.**

---

## Tier A — Free, deterministic, run now (no decision needed)

| # | Item | Traces to | Volume (known/sampled) | Status |
|---|------|-----------|------------------------|--------|
| 1 | Dead wikiSlugs corpus-wide | lint-links slug check (prebuild uses `--no-slugs`) | mali-empire alone had 1 (Ahmed_Baba 404) → likely dozens+ | ☐ |
| 2 | Parser-dropped-link **classifier** (detection only) | pipeline-audit debt #1 | classifier un-built; raw `--contention` ≈2211 is un-triaged, not a worklist | ☐ |
| 11 | Build/data audit (Track 3) | `memory/project_corpus_audit_plan` | parse/data-shape integrity corpus-wide | ☐ |

These have zero marginal cost and surface real bugs. There is no reason to hold
them behind the billable decision — do them first, independently.

## Tier B — Billable model passes (explicit go/no-go required)

| # | Item | Cost (text / vision) | Pri | Status |
|---|------|----------------------|-----|--------|
| 3 | G10 event-popup coherence retro | **$ text** / $$$ vision | **HIGH** | ☐ |
| 4 | G12 glossary coherence retro | $$ text-only | MED | ☐ |
| 5 | G11 cross-link coherence retro (Part B) | $$ text-only | MED | ☐ |
| 7 | G3 link-coverage retro | curation (post-detect) | MED | ☐ |

**#3 is mostly cheap — that is the headline, not a footnote.** G10 Stage-1
(label/desc vs wikiExtract/wikiSlug) is text, batched, and cheap; only Stage-2
(image↔caption↔subject vision) is the $$$ driver. The actual near-term action
is **run Stage-1 text corpus-wide as a triage filter, then vision *only* where
text flags** — not "G10 is $$$, defer." Treat the text pass as nearly-Tier-A.

## Tier C — Authoring / standard-drift (recommended default, light sign-off)

| # | Item | Volume | Recommended default | Status |
|---|------|--------|---------------------|--------|
| 6 | Density backfill | 559 sub-10 chapters, 98/100 civs | **Worst-only + accept rest as legacy** | ☐ |
| 10 | Term-precision sweep | Scandinavia≠Nordic class corpus-wide | Opportunistic, not a campaign | ☐ |

**#6 is standard drift, not a defect.** 98/100 civs "violating" the 10–15
gate means the *bar was raised after they shipped* — they read fine and shipped
fine. Blanket-backfilling 559 chapters is large authoring effort for low reader
value. Recommended default: backfill only the worst outliers (e.g.
scientific-revolution ≈3.5 links/ch) against a stated threshold, and
**explicitly accept the rest as grandfathered legacy** — don't leave it as an
open all/some/none question forever. User sign-off needed only on the threshold.

## Tier D — Forward-value (build with/before the 17, not deferred retro)

| # | Item | Why it's not LOW | Status |
|---|------|------------------|--------|
| 12 | Summary-bullets coherence (G13) | Only ungated reader surface; building it **also gates the 17 new civs**, not just backfills the 100 — dual value beats single-purpose retro | ☐ |

Bumped from LOW. Its old priority was set by retro cost alone and ignored that
the deliverable is a *forward gate*. Build `audit-summaries.mjs` (text: do the
bullets faithfully represent the chapter?) alongside the 17 pipeline; the
corpus-retro then falls out as a Tier-B-style run.

## Tier E — Defer (low yield)

| # | Item | Why defer | Status |
|---|------|-----------|--------|
| 8 | G6 chapter-flow re-grade | These shipped and read fine; re-running the 5-persona audit corpus-wide is expensive, low-yield. Only worth it for civs with known weak chapters. | ☐ |
| 9 | G4 map re-QA (automated) | Corpus passed the *manual* map audit (`audits/map-audit.md` RESOLVED, thorough). Automated re-QA catches only what eyeballing missed — billable, low expected yield. | ☐ |

---

## Detail & method

**1. Dead wikiSlugs (Tier A).** `prebuild`'s `gate` runs `--no-slugs` for
speed; the live-Wikipedia 404 check only runs per-civ in `ship-check`. The
existing 100 were never swept with slugs on. Method: `npx tsx
scripts/lint-links.ts --strict` (no `--no-slugs`) corpus-wide; every ERROR is a
real dead glossary/event slug a reader hits. Free, deterministic, high-value —
**just run it.**

**2. Parser-dropped-link classifier (Tier A).** `lint:links --contention`
surfaces ≈2211 dropped links, but that raw number is **not a backlog size** —
most are benign (a shorter matchText loses its span but the term is still
linked elsewhere in the chapter, so the reader still gets *a* link). The Tier-A
deliverable is the **classifier**, free to build: extend the contention pass to
split "span consumed but term linked elsewhere" (benign, ignore) vs "term
linked nowhere" (real loss, worklist). Only the linked-nowhere subset becomes
actual fix work, and its size is unknown until the classifier runs.

**3. G10 event-popup coherence (Tier B, mostly cheap).** Run
`scripts/audit-events.mjs` over the 100. Stage 1 text is cheap and batched —
run it everywhere as the triage filter. Stage 2 vision is the only cost driver
— run it **only where Stage 1 flags**, or sample image-heavy / high-exposure
civs. Fixes go via wikiSlug correction, link→eventId fix,
`.image-overrides.json` / `.caption-overrides.json`. This is the user's
explicit ask; the cheap-text-first path makes the near-term cost small.

**4. G12 glossary / 5. G11 cross-link coherence (Tier B).** Text-only, cheaper
than G10. `audit-glossary.mjs` / `audit-crosslinks.mjs` over the 100, batched.
G11 Part A (target resolution) already verified clean corpus-wide — only the
semantic (blurb↔target↔subject) Part B is owed.

**6. Density backfill (Tier C).** 559 chapters < 10 event-links (98/100 civs;
`audits/density-baseline.json`). This is retroactive standard drift, not a bug
class. Recommended default: pick a worst-offender threshold, backfill only
below it, and record the rest as accepted legacy in this file. Authoring
effort; user decides the threshold, not whether to "fix all 559."

**7. G3 link-coverage retro (Tier B/curation).** Author-bolded-but-unlinked
terms across the 100 (sampled: mali 58, viking 111, scirev 36). Pairs with #2 —
run after the classifier so the two link-debt passes share triage.

**11. Build/data audit (Tier A).** From the original 4-track corpus audit plan
(`memory/project_corpus_audit_plan`); was gated on the link sweep (now done)
but never executed. Parse integrity, data-shape consistency, offline-manifest
sanity corpus-wide. Free, deterministic; scope TBD but run it with Tier A.

**12. Summary-bullets coherence / G13 (Tier D).** The one reader surface with
no coherence gate (currently only the 5-persona narrative audit touches it).
Build `audit-summaries.mjs` as a **forward gate for the 17**; the 100-civ retro
is then a downstream run. Dual value is why this is not LOW.

---

## Cross-references (do not duplicate these)

- `audits/pipeline-audit.md` — the gate rewrite + the 2 debt findings (#2, #6).
- `audits/term-precision-sweep.md` — the live tracker for #10.
- `audits/coverage-audit.md` — gap findings (RESOLVED → fed the 17 roster).
- `memory/project_corpus_audit_plan` — original 4-track plan (#11 is Track 3).
- `audits/phase-1.5-roster.md` — the 17 new civs (NOT this backlog).

## Decisions still needed (slimmed)

The old list had four open questions; three now have recommended defaults.
Remaining genuine user calls:

1. **Tier B go/no-go + spend ceiling** — and (if it exists) supply a
   reader-traffic ranking so Tier B sorts by exposure, not cost.
2. **#6 density threshold** — what links/ch floor triggers a backfill; the
   accept-rest-as-legacy default stands unless overridden.
3. **#12 G13** — confirm it's built alongside the 17 (forward gate) rather than
   booked as pure retro.

(Resolved by this rewrite: Tier A no longer needs a decision; #6 scope default
set; #12 reprioritized.)
