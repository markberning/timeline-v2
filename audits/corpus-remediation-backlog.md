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
legend: ☐ not started · ◐ in progress · ☑ done. **Item IDs are stable** (1–12
original; 13–16 added 2026-05-17 — gaps found on review) — other docs
cross-reference them; tiers regroup, IDs don't move.

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

## Run log

**2026-05-17 — Tier A started (economical first pass: instant local checks).**

- **#15 ☑ DONE.** Disk diff vs live `NARRATIVE_FILES`: one orphan,
  `reference-data/medieval-europe.json` (medieval-europe split into
  early/high/late). The sweep also caught a **live reader-facing 404**, not
  just dead weight: `globe2-data.ts` mapped globe entities `franks` & `hre` →
  `medieval-europe`, and `globe2.tsx` turns that into a navigable
  `<a href="/medieval-europe">` (no such page). Fixed: retargeted
  `franks → early-medieval-europe`, `hre → high-medieval-europe`; deleted the
  orphan JSON (commit `4ebd025`). `civ-icons.ts` / `civ-icons-strip.tsx`
  `medieval-europe` refs intentionally left — decorative `aria-hidden` img, no
  link, icon file still exists; cosmetic, not a defect. No orphan narratives;
  old `public/maps/ancient-japan/` already gone (CLAUDE.md claim verified).
- **#14 ☑ DONE — 0 genuine defects, $0 spent.** Naive map-count vs
  chapter-count flagged 2 TLs: `qin-dynasty` ch8, `vedic-period` ch4. Both are
  **intentional non-geographic chapters**, not gaps: `vedic-period.md` already
  carries the explicit *"No map for this chapter"* directive for ch4 ("The
  Caste Question"); `qin-dynasty` ch8 ("Fifteen Years That Built Two Thousand"
  — an institutional-legacy synthesis chapter) is legitimately the same case
  but the directive was never written, so it read as a silent gap. Fixed for
  free: added the explicit Chapter 8 "No map" block to
  `map-prompts/qin-dynasty.md` mirroring the vedic convention (commit pending).
  No image generation — the economical answer was *don't spend*. **Method
  refinement (durable):** a raw count check false-positives on intentional
  skips; #14's reusable detector must assert "every map-prompts chapter that
  has a real prompt (not a `No map` directive) has a `chapter-N.webp`", not
  "chapter count == file count". Under that definition the corpus is clean (the
  naive pass would have flagged *any* TL with file<chapter; only these 2
  appeared, and both are intentional).
- `goryeo-korea` registered w/o maps = the in-progress pipeline trial (maps are
  step 12); expected WIP, not a defect.

- **#1 ◐ SWEPT (free part done) — remediation strategy pending decision.**
  Corpus-wide live-Wikipedia pass (cache 367→11,768 slugs). Result: **577 dead
  references · 543 unique dead slugs · 93 of 100 civs** — zero non-slug ERRORs.
  The mali datapoint ("1 → likely dozens") understated it by ~50×. Worklist
  persisted: **`audits/dead-slugs-2026-05-17.txt`** (`civ⇥chapter⇥slug`).
  **Key constraint:** `lint-links.ts` already URL-decodes and treats redirect
  pages as valid (lines 236–257) — it only flags API-`missing` titles. So
  these are *genuinely wrong titles*, NOT decode/redirect false alarms; no
  cheap blanket transform recovers them. Recovery = find the right article per
  slug. **Recommended 2-phase remediation — no separate spend (see
  `memory/feedback_cost_framing`: the "$$$ billable" tier is for vision passes,
  not text slug triage):**
  - *Phase 1 (free, deterministic):* Wikipedia opensearch/search-API resolver
    per slug; auto-apply only on a strict similarity gate (recovers the
    mechanical majority — wrong disambiguator, spelling, `(cannon_founder)`-type
    parentheticals), each fix re-validated live so no new dead links.
  - *Phase 2 (inline triage, NOT a billable pass):* the post-Phase-1 residue
    (genuinely ambiguous / no-article: pick the right title or drop the link),
    handled in-session as normal work. The only real knobs are Phase-1
    auto-apply strictness and all-at-once vs. chain-prioritized.

  **Phase 1 RESULT (run 2026-05-17, `scripts/resolve-dead-slugs.mjs` +
  `apply-safe-slug-fixes.mjs`; report `audits/dead-slugs-resolution-2026-05-17.json`):**
  A first resolver pass "resolved" 157 by stripping the parenthetical
  disambiguator and accepting any *live* bare title — but `lint-links` checks
  **liveness, not subject**, so that landed many on disambiguation pages /
  homonyms (`Emergence_(mythology)`→`Emergence`,
  `Status_Quo_(Holy_Land_sites)`→`Status_Quo`,
  `Theodora_(empress,_wife_of_Theophilos)`→ a disambig page). Those 167 refs
  were reverted **before commit** (a wrong article is worse than an honest
  404). Auto-apply was then re-scoped to the **encoding/punctuation-equivalent
  class only** (same subject by construction — decode + diacritic-fold +
  punctuation, parentheticals retained): **26 unique slugs · 27 refs · 21
  files, applied + re-validated live (0 still-missing).** Remaining still-dead
  = **517**: `needsReview` 131 (a live candidate exists but subject is a
  judgment call — machine suggestion kept as a triage *hint only*, NOT trusted)
  + `residue` 386 (no live candidate). **Lesson (durable):** optimizing an
  auto-fixer for a liveness gate manufactures coherence defects the gate can't
  see — auto-apply must be restricted to provably-equivalent transforms; the
  131 + 386 are inline-triage work using each glossary entry's `matchText`
  context. Status stays ◐.

  **Phase 2 inline triage — per-civ chunks (worst-first). Workflow:
  `scripts/triage-civ-slugs.mjs <civ>` (search + snippet, rate-safe) → human
  subject decision → `audits/slug-decisions/<civ>.json` → 
  `scripts/apply-slug-decisions.mjs <civ>` → `lint-links --tl=<civ> --strict`
  (0 ERROR gate). Decisions files are the durable record.**
  - ☑ `polynesian-voyagers` (20 dead): 17 retargeted to subject-verified
    articles, 3 dropped (Alaloa / Andrew Sharp the navigation-skeptic /
    Makaliʻi canoe — no Wikipedia article exists; narrative inline-defines
    them). lint-links 0 ERROR.
  - ☑ `teotihuacan` (16 dead): 11 retargeted (Sierra_de_las_Navajas→
    Obsidian_use_in_Mesoamerica, Epiclassic→Mesoamerican_Epiclassic_Period,
    etc.), 5 dropped (San Juan river / underworld / Cerro Gordo / Thin Orange /
    Atetelco — only passing mentions exist; narrative inline-defines).
    lint-links 0 ERROR. **Triage principle: link only to a specifically
    on-subject article; DROP rather than dump a term on the giant main
    article.** **Remaining still-dead corpus-wide: ~481.**

**Next economical step:** decide #1 remediation approach (see options put to
user); then #11 build/data audit or #13 image liveness (both free).

---

## Tier A — Free, deterministic, run now (no decision needed)

| # | Item | Traces to | Volume (known/sampled) | Status |
|---|------|-----------|------------------------|--------|
| 1 | Dead wikiSlugs corpus-wide | lint-links slug check (prebuild uses `--no-slugs`) | **SWEPT: 577 refs · 543 unique · 93/100 civs** (`audits/dead-slugs-2026-05-17.txt`) | ◐ |
| 2 | Parser-dropped-link **classifier** (detection only) | pipeline-audit debt #1 | classifier un-built; raw `--contention` ≈2211 is un-triaged, not a worklist | ☐ |
| 11 | Build/data audit (Track 3) | `memory/project_corpus_audit_plan` | parse/data-shape integrity corpus-wide | ☐ |
| 13 | Image **liveness** (dead Commons thumbnails) | gap on review; `feedback_image_quality` | unknown; HTTP HEAD over enriched manifest | ☐ |
| 14 | Map↔chapter **count** integrity | gap on review; medieval-europe / ancient-japan splits | per-civ map count vs chapter count | ☑ |
| 15 | Superseded split-TL artifact sweep | CLAUDE.md (stale `reference-data/medieval-europe.json`, old `public/maps/ancient-japan/`) | deterministic disk diff vs live `NARRATIVE_FILES` | ☑ |

These have zero marginal cost and surface real bugs. There is no reason to hold
them behind the billable decision — do them first, independently. **#13–15 are
distinct failure modes no gate covers**: #1 catches dead *slugs* and G10-vision
catches image↔caption *coherence*, but neither checks whether the image URL
actually *loads* (#13); #9 is the *billable* map-quality re-QA, not the *free*
"every chapter has exactly one map, no orphans" check (#14); and nothing sweeps
the split-TL leftovers CLAUDE.md flags by hand (#15).

## Tier B — Billable model passes (explicit go/no-go required)

| # | Item | Cost (text / vision) | Pri | Status |
|---|------|----------------------|-----|--------|
| 3 | G10 event-popup coherence retro | **$ text** / $$$ vision | **HIGH** | ☐ |
| 4 | G12 glossary coherence retro | $$ text-only | MED | ☐ |
| 5 | G11 cross-link coherence retro (Part B) | $$ text-only | MED | ☐ |
| 16 | Backward/reciprocal cross-link retro on the 100 | $$ text-only (pairs with #5) | MED | ☐ |
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

**13. Image liveness (Tier A).** Distinct from #1 (slug 404s) and from
G10-vision (image↔caption coherence): an enriched event can carry a Commons
thumbnail URL that simply 404s, rendering as a broken-image icon no matter how
good the caption is. Method: HTTP HEAD every image URL in the enriched manifest
corpus-wide; every non-200 is a reader-facing break. Free, deterministic,
batched. `feedback_image_quality` already flags Commons thumbnails as
unreliable — liveness was never swept.

**14. Map↔chapter count integrity (Tier A).** `ship-check` enforces 1:1
map:chapter for *new* civs; the 100 predate it and the `medieval-europe` →
early/high/late and `ancient-japan` → prehistoric/asuka-nara/heian splits can
silently orphan or drop a map on renumber. Method: per-civ, count
`public/maps/{tlId}/chapter-*.webp` vs parsed chapter count; flag any mismatch.
Free — this is NOT #9 (#9 is the billable *quality* re-QA; this is the free
*existence* check).

**15. Superseded split-TL artifact sweep (Tier A).** CLAUDE.md tracks stale
on-disk leftovers by hand (`reference-data/medieval-europe.json` "slated for
deletion"; old `public/maps/ancient-japan/` "removed"). Method: deterministic
diff of `reference-data/*.json`, `public/maps/*`, `narratives/*` against the
live `NARRATIVE_FILES` / `navigator-tls.ts` set; anything orphaned is dead
weight (and a search-index/offline-manifest risk). Free; pairs with #11.

**16. Backward/reciprocal cross-link retro (Tier B).** Pipeline step 11 (the
Persona-E backward pass — apply each cross-link into the *referenced* TL's
`.cross-links-*.json`) is a gate for the 17; the 100 predate it. #5 only checks
forward blurb-coherence (Part B); whether the 100's cross-links are reciprocal
where they should be is unaudited. Text-only, run with #5 (shared traversal of
the 3355 links).

---

## Scope boundary (not an item — recorded so it doesn't fall between docs)

§3 of `audits/coverage-audit.md` (the stale "89/100 / Remaining (8)" drift) was
fixed once but nothing *prevents that class recurring*: there is no recurring
consistency check that `navigator-tls.ts` ↔ `CLAUDE.md` roadmap ↔
`tl-chains.ts` stay in agreement. That is a **forward gate / pipeline concern,
not corpus remediation** — it belongs in `audits/pipeline-audit.md`, not here.
Logged only so the boundary is explicit and the regression-guard idea isn't
lost in the gap between the two trackers.

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
