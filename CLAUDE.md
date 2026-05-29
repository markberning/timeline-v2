# Stuff Happened — v2 Mobile Reading App

## What This Is
A mobile-first reading app for long-form historical narratives. Each civilization gets a complete, chapter-based narrative (like a short book) that the reader reads on their phone. The v1 interactive timeline explorer (stuffhappened.com) is frozen; this is a fresh start focused on reading, not zooming.

## The Product
- **Format**: chapter-based prose narratives, one per civilization
- **Voice**: informal, informational, conversational — popular history, not academic. "A delightful piece of royal propaganda" is the tone.
- **Reader**: mobile-first, designed for phone reading (portrait mode primary)
- **Content**: comprehensive — every event, person, and concept inline-defined on first use per chapter. The reader has zero prior knowledge.

## Tech Stack
- **Framework**: Next.js 16 + React 19 + TypeScript
- **Styling**: Tailwind 4 + @tailwindcss/typography
- **Build**: `npm run parse` runs automatically as `prebuild`; `npm run build` calls `scripts/build-static.mjs` which temporarily stashes dev-only routes (`/api/*`, `/candidates`, `/review`) and runs `next build` with `output: 'export'` to produce a fully static `out/` directory.
- **Deploy**: Cloudflare Workers + Static Assets via `wrangler.jsonc`. `stuffhappened.com` is the v2 production domain; `v1.stuffhappened.com` is the legacy Vite explorer. Auto-deploy from GitHub on push to `main`. Manual fallback: `npx wrangler deploy`.
- **Dev**: `npm run dev` → localhost:3000. Dev server keeps the dev-only api routes and dynamic review pages for local image curation.

## Authoring — the critic pipeline is MANDATORY in EVERY vertical (locked 2026-05-25)
**No article ships author-and-hope, in any vertical — civ, war, art, or music.**
Every long-form narrative goes through its vertical's gated critic pipeline (build
the fact pack → author → run the critic gates in parallel → reconcile + revise →
verify images/sources + cross-level coherence → integrate) BEFORE it ships. This
is a standing user directive, not a per-section choice: "make sure that from now on
all articles app-wide go through the critical authoring pipeline." The verticals
share one spine (storytelling first; accuracy / zero-hallucination a hard floor;
born-verified media) with per-vertical re-points:
**The gates cover EVERY SURFACE of a section, not just its main prose (locked
2026-05-25 — "make sure critical agents run for all sections in war, art, music").**
A "section" is every reader-facing factual surface it ships: captions,
look-closer / annotation pointers, provenance, stats, dimensions, medium, cards,
cast/side tags, intros, summary bullets, lineage/parallels, **the "Why this is a break"
block and the "The manifesto" block (art + music — required-where-applicable; the
manifesto's quotes AND its born-verified source link are both gated surfaces, never
asserted from memory or linked unverified)**. All of it is content and
runs through the SAME fact-checker + critics. **A short caption is not exempt for
being short** — that exemption is exactly how wrong facts shipped (the *Demoiselles*
"two left-hand faces in profile" annotation; the *Three Women* / Shchukin provenance;
a wrong Degas title + price on *Demoiselles*). Each vertical's doc carries the
surface checklist its ship-gate enforces. See
`memory/feedback_pipeline_mandatory_all_verticals`.
- **civ** — the 5-persona audit, `.claude/skills/audit-narrative.md` (Persona-D
  WEAK/REWRITE + Persona-E backward findings are ship-blocking; enforced at the
  ship-check gate, step 14 below).
- **war** — `audits/war-content-pipeline.md` (fact pack → author(Opus) →
  fact-check + storytelling critic(Sonnet) → revise → integrate; 2 hard gates).
- **art** — `audits/art-content-pipeline.md` (5 critic gates — fact / storytelling
  +looking / comprehensiveness / clarity / framing — + image-rights + nesting; every
  era/movement carries the "break" block, every movement the "manifesto" block or an
  explicit `absent`).
- **music** — `audits/music-content-pipeline.md` (the art/war analog; music content
  not yet started, so the doc is ready before the first article, never after — already
  carries the "hear the break" + manifesto/founding-statement requirements).
**Recurring failure mode to refuse:** hand-authoring a section and shipping it,
then gating later (the Kahnweiler work and the art "Lay of the land" prologue both
hit this; the user caught both). A passing draft is not a gated draft. If you catch
yourself writing narrative prose without a fact pack and the critic gates queued,
stop and run the pipeline. See `memory/feedback_pipeline_mandatory_all_verticals`.

## Content Pipeline

**The pipeline is gated, not advised.** Quality bars are enforced by scripts that
fail the build/ship, because shipping 100 civs on agent diligence required a
post-hoc corpus link sweep + corpus map regen. See `audits/pipeline-audit.md`.
Gate scripts: `npm run gate` (lint:links --strict + lint-density --strict, wired
into `prebuild`); `scripts/link-coverage.ts`; `scripts/maps-build.mjs` (lint →
gen → vision-QA → regen); `scripts/ship-check.mjs` (blocks the ship toggle).

**Links are born-verified, not fixed later (locked 2026-05-17).** Every link
must be confirmed against its real Wikipedia page (live · not a disambiguation ·
right *subject* · sane photo) **at the moment it is written** — a slug is never
committed unconfirmed. `scripts/fix-links.mjs --tl={tlId}` is the creation-time
instrument (page-validity + term↔page word-overlap + photo filename/caption +
reuse) and a **ship gate** (`--strict`, run by `ship-check`; the 100 are
grandfathered in `audits/fix-links-baseline.json`, new civs zero-tolerance —
same model as density/matchtext). The deterministic snapshot gates (`verify-
links --write-snapshot` → `audit-events/glossary`) are a **rot/regression
safety net** — they catch a page that changed *after* we confirmed it; they are
not where errors are first discovered. `scripts/retarget-links.mjs` +
`audit-retargets.mjs` + `apply-decisions.mjs` are **one-time corpus-cleanup
tools for the legacy 100 only — NEVER part of creating a new civ** (auto-
retargeting guesses, and guesses are sometimes confidently wrong).

0. **Pull v1 reference data + expand to target density** — check `~/projects/personal/timeline/src/data/{tlId}.json`, copy to `reference-data/{tlId}.json`. **Hard target: 10–15 events per chapter** (e.g. a 20-chapter TL ⇒ ~200–220 events), spread across all 8 categories — *enforced* by `lint-density.ts` (new civs get zero tolerance; not grandfathered). The event pool is reused across chapters. Verify the `label` field matches `navigator-tls.ts`.
0.5. **Narrative-movement map (self-checked spec — NO user-approval pause; pause lifted 2026-05-18 at user request)** — still produce it: list the distinct dramatic movements (rise / crisis / transformation / collapse / afterlife …) and write the chapter list + one-line throughline per chapter. It is the build spec that lets chapters be drafted/curated in parallel — author it, don't wait on it. **Chapter count = number of movements**, NOT a civ-type template and NOT "take the heavier option"; **no cap on chapter count or chapter length** — story length drives structure. The user has standing-approved every map and removed the checkpoint: when they say "start building `<civ>`", run the whole pipeline autonomously with no approval stop, **provided the two invariants hold** — (a) ≥10–15 events per chapter (enforced zero-tolerance by `lint-density.ts`, step 0), and (b) chapter count/length unlimited (driven by the movements, never a template). This lifts ONLY the planning pause; every quality gate is unchanged. See `memory/feedback_civ_build_autonomy`.
1. **Write narrative** — Claude drafts the chapter-based prose. Apply all writing rules in `WRITING-RULES.md`.
2. **Audit** using the 5-persona system in `.claude/skills/audit-narrative.md`. Report-only, but Persona-D WEAK/REWRITE grades and Persona-E backward findings are **ship-blocking** (enforced at step 14, not optional).
3. **Fix** audit findings from `audits/{tlId}.audit.md`. **Must-fix (blocks ship): all factual/citation errors, all readability-breaking definition/source-intro gaps, and EVERY Persona-D WEAK/REWRITE chapter + every "no" build-dependency boundary** (chapter flow is a hard gate, not "one structural note, defer the rest").
4. **Reconcile** — add events/terms from narrative missing from reference data.
5. **Register** — add `'{tlId}.md': '{tlId}'` to `NARRATIVE_FILES` in `scripts/parse-narratives.ts`.
6. **Curate event links** — `content/.event-links-{tlId}.json`. matchText = **the tight term itself** (the proper noun / concept being linked) — the *shortest* verbatim plain substring that IS that term, never the surrounding clause or sentence. The link underline must mark the term, not a paragraph. **Hard bar (GATED — `lint:links --strict` ERROR for non-grandfathered civs): ≤6 words and no comma.** Existing corpus grandfathered in `audits/matchtext-baseline.json` (regenerate with `--write-matchtext-baseline`); a rare legitimately-long proper noun goes in `content/.matchtext-waivers-{tlId}.json` (exact-string array). Also: no `**bold**`-spanning, no leading/trailing punctuation; Unicode word-boundary (`(?<![\p{L}\p{N}_])…`). If the term itself is bolded, pick the nearest short *unbolded* occurrence of the same term — do NOT grab a long unbolded clause around it. **Same rule for glossary + cross-link matchText.** **Born-verified:** as you write each event's `wikiSlug`, confirm it against the real page — run `node scripts/fix-links.mjs --tl={tlId}` while curating and resolve every flag *now* (right page → keep; wrong/dead → retarget by hand to the correct article, or drop the slug to a curated blurb; bad/duplicate photo → reject it). Do not write slugs blind and lean on a later sweep — that is the anti-pattern this rule exists to kill.
7. **Curate glossary + cross-civ links** — `.glossary-links-{tlId}.json`, `.cross-links-{tlId}.json`. **Bar: proper nouns + concepts, no cap** (skip modern country names / universal basics). The old "~10–14 event / ~8–12 glossary / ~14–18 cross per TL" and "~20–35 glossary per chapter" numbers are RETIRED — they were the under-production target that caused the sweep. **Born-verified (same as step 6):** confirm each glossary `wikiSlug` against the real page as you write it (`fix-links.mjs --tl={tlId}`); a term with no genuinely on-subject live page gets an authored `definition` blurb *immediately*, not a guessed slug to be cleaned up later.
7b. **Link-coverage (GATE — multi-signal under-linking detector, rebuilt 2026-05-17).** `tsx scripts/link-coverage.ts --tl={tlId} --strict`. The old bold-only Pass A missed every non-bolded proper noun and all lowercase jargon (it hard-gated ~6 real terms in emed ch3 while ~38 sailed through). The detector now keys on signals where the author already certified the term is hard, plus the corpus's own link knowledge — all deterministic (no LLM): **pronunciation gloss** (`Columba (kuh-LUM-buh)`), **foreign-term gloss** (`peregrinatio pro Christo, "pilgrimage for Christ"`), **corpus cross-reference** (the term is a real curated link in some other civ but raw text here — self-improving as the corpus grows), **inline-definition**, **recurrence ≥3**, **bold proper noun**. GATE = the high-precision signals; recurrence/bold/lc-jargon alone = advisory worklist. Every GATE hit must be linked or waived in `content/.link-waivers-{tlId}.json`. Legacy 102 grandfathered per (civ,chapter,term) in `audits/link-coverage-baseline.json` (mirrors density/matchtext baselines; regenerate with `--write-coverage-baseline`) — a GATE hit NOT in the baseline fails `--strict`, so **new civs are zero-tolerance and a new gap in an old civ blocks**. Corpus audit: `--corpus` emits `audits/link-coverage/LINK-COVERAGE-NEEDED-{tl}.txt` worklists + `audits/link-coverage-ledger.md` (detect-only — born-verified doctrine forbids auto-linking; resolve each with a confirmed slug or authored blurb). Modern country names / universal basics are auto-demoted to advisory (no longer needs a per-civ waiver). **Corpus-wide debt at rebuild: 22,877 grandfathered gaps across 102 civs — this is remediation backlog #7.**
8. **Write summary bullets** — `narratives/{tlId}.summaries.json`, 6–10 bullets per chapter. See WRITING-RULES.md.
8b. **Write chapter intros (GATE — G13)** — `narratives/{tlId}.intros.json`, one entry per chapter, the framing card shown before the prose to cut reader overwhelm. **The user's locked direction (2026-05-19): give real backstory and lay-of-the-land — a richer runway reduces overwhelm; do NOT minimize this.** Four parts: `bridge` = **"The story so far"** (a real recap: how we got here, the major players *before* this chapter, what the prior arc set up — REQUIRED ch≥2, FORBIDDEN ch1; 40–180w); `setup` = **"The lay of the land"** (why this is happening, who is driving it, who opposes it, what it is replacing, what is at stake; 60–220w); `cast` (2–6 short `{name,note}` nameplates — a tag, NOT a definition; the prose still inline-defines on first use); `takeaway` (one sentence). `tsx scripts/lint-intros.ts --tl={tlId} --strict` enforces presence + per-field word bounds + a **TOTAL ≤620-word ceiling** — a real briefing/runway, still far short of a 1500–4000w chapter so it can't become a second wall. House voice, same as the narrative; no flat outcome dump (frame the tension, don't resolve it). Legacy 102 grandfathered in `audits/intro-baseline.json` (no intros yet — corpus retrofit is a separate scheduled program); **new civs are zero-tolerance**, same model as density/coverage. early-medieval-europe is the shipped pilot/reference. **G13/`lint-intros` is STRUCTURAL ONLY (shape, not truth).** Because a chapter intro is a reader-facing factual surface, its *content* is mandatory-gated through the same authoring critics as main prose (all-surfaces accuracy floor, locked 2026-05-25; see `memory/feedback_pipeline_mandatory_all_verticals`): per civ, beyond `lint-intros --strict`, run (a) a **fact-checker pass** on the intro claims — cast nameplate roles/dates (highest risk), the "story so far" recap, and the "lay of the land" assertions — and (b) a **storytelling/voice critic** (house voice; frames tension without resolving it; RICH not terse per the 2026-05-19 direction). No intro ships on `lint-intros` alone. (Born-verification is N/A — intros carry no wiki links; the check is claim-accuracy + voice.)
9. **Lint links (GATE)** — `npm run lint:links --tl={tlId} --strict` must pass (0 ERROR). `--contention` (opt-in) shows what the parser will silently drop. This is also wired into `prebuild` corpus-wide.
10. **Enrich events** — `npm run parse` (runs the gate first). **Restart dev server after parse** — `lib/data.ts` caches in-memory.
10b. **Verify event links (GATE — G10, deterministic, NO LLM).** Correctness is confirmed at **creation time**, never re-judged by a model later. `node scripts/verify-links.mjs {tlId}` lists every event's Wikipedia page with its real title + lead sentence so the curator confirms it is the right *subject* (the one thing a machine cannot decide); dead pages and disambiguation pages AUTO-FAIL — retarget to the correct article, or drop the wikiSlug → blurb-only event (curated `description` renders standalone; *a missing link beats a wrong link*; slug-less / `def:` events skip). Once the CONFIRM list is subject-correct, `node scripts/verify-links.mjs {tlId} --write-snapshot` records the confirmed page state (title + lead + image) to `content/.link-snapshots-{tlId}.json` — **this is the contract.** The ship gate `node scripts/audit-events.mjs {tlId}` is then a deterministic snapshot-compare: page still exists, not a disambiguation page, title unchanged (catches later moves/merges/redirects). **This snapshot gate is a rot/regression safety net — it catches a page that changed *after* we confirmed it; it is NOT where wrong links are first discovered. Subject-correctness + photo sanity are caught at creation by `fix-links.mjs` (step 6), re-checked by `ship-check`'s `fix-links --strict`. If the snapshot gate is finding genuinely-wrong (not merely rotted) links, curation skipped the born-verified step.** Block-don't-warn, fail-closed; writes `EVENT-FAILURES-{tlId}.txt`. Broad-parent stretch still waivable per-event in `content/.event-slug-waivers-{tlId}.json`. The ONLY AI in the whole pipeline is map generation/QA.
10c. **Verify cross-links (GATE — G11, deterministic, NO LLM).** Cross-links point at our own chapters, never Wikipedia; `lint:links --strict` already hard-ERRORs an unresolvable targetTl/targetChapter. `node scripts/audit-crosslinks.mjs {tlId}` is a deterministic floor only: non-empty matchText, sane-length blurb, target chapter resolves. Whether the blurb is the *best* description of the target is a curation + Persona-E backward-pass judgement made when the link is written, not a machine gate. Fail-closed; writes `CROSSLINK-FAILURES-{tlId}.txt`.
10d. **Verify glossary links (GATE — G12, deterministic, NO LLM).** Same model as G10: confirm each term's page subject at creation via `verify-links.mjs` (shares the one snapshot), then `node scripts/audit-glossary.mjs {tlId}` deterministically checks exists / not-disambiguation / title-stable against the snapshot. The **canonical answer for a term with no good EN page is an authored `definition` blurb** — no `wikiSlug`; parse normalizes it to a `def:` token; GlossarySheet shows house-voice prose and NO Wikipedia link; the gate skips it (nothing external to be wrong). Prefer it over pointing a niche term at a whole-civilization article. Broad-parent stretch waivable per-term in `content/.glossary-slug-waivers-{tlId}.json` (case-insensitive). Fail-closed; writes `GLOSSARY-FAILURES-{tlId}.txt`.
11. **Backward cross-cultural pass (GATE — mandatory, not deferred)** — apply every Persona-E backward finding into the reference TLs' `.cross-links-*.json` (or ledger it with a reason). **Lint scope (locked 2026-05-17):** the backward edit must introduce **no NEW `lint:links --strict` errors in any touched reference TL** (compare against its pre-edit state); a touched legacy TL's *pre-existing* grandfathered rot (dead slugs etc.) is the standing corpus-remediation backlog, **not** a per-civ ship blocker. Leave every touched TL no worse than found.
12. **Generate + QA maps (GATE)** — `node --env-file=.env.local scripts/maps-build.mjs {tlId}`: lints the prompt, generates, runs the vision-model QA gate (`audit-maps.mjs`, locked acceptance criteria), auto-regens failures (≤3 rounds), then optimizes. Manual `generate-maps.mjs` + thumbnail eyeball is no longer the gate. See `map-prompts/README.md`.
13. **Review images** — `/review/{tlId}` (dev mode only).
14. **Ship toggle (GATE)** — `node scripts/ship-check.mjs {tlId}` must pass, THEN flip `hasContent: true` in `src/lib/navigator-tls.ts`. ship-check verifies: maps exist 1:1 with chapters + QA-passed, **`fix-links --strict` clean for this civ (no new wrong-subject/dead link or bad/duplicate photo vs `fix-links-baseline.json` — the born-verified gate)**, event + glossary links snapshot-verified (G10/G12, deterministic — page exists, not disambiguation, title stable vs `.link-snapshots`), cross-links floor-checked (G11, deterministic), links 0-ERROR + targets resolve, coverage triaged, density in band, **chapter intros present + within budget (G13)**, no Persona-D WEAK/REWRITE, backward pass done. (G10/G11/G12 are now deterministic snapshot/floor checks, not LLM passes — see step 10b.)

## File Structure
```
src/
  app/
    page.tsx                    — home: "The Civ Lib" editorial home with swim-lane ribbon + civ list
    navigator/page.tsx          — /navigator: old TlNavigator flow layout
    globe/page.tsx              — /globe: D3 orthographic globe with 86 civs
    [civilizationId]/           — single-page accordion reader (layout.tsx + page.tsx)
    review/[civilizationId]/    — image review page (dev only)
    api/review/                 — saves review results (dev only)
  components/
    chapter-accordion.tsx       — expandable chapter with sticky header + map
    narrative-reader.tsx        — client wrapper for link click delegation + search-to-highlight
    event-sheet.tsx             — bottom sheet for event details (image, caption, desc, wiki extract)
    cross-link-sheet.tsx        — cross-cultural "Meanwhile in..." sheet
    lightbox.tsx                — pinch-to-zoom fullscreen image viewer
    dark-mode-toggle.tsx        — sun/moon toggle, persisted to localStorage
    offline-registrar.tsx       — service worker registration
    globe2.tsx                  — D3 orthographic SVG globe
    thread-bar.tsx              — app-wide top nav (Home·Civ·War·Art·Music + search + dark); grayscale except the active section + centred underline (see BEHAVIORS.md "Top navigation")
    section-home-bar.tsx        — section-home chrome (sticky ThreadBar) + shared SectionPill (plain-text breadcrumb pill)
    civ-breadcrumb.tsx          — civ reader breadcrumb: Region › Chain › Civ › Chp (plain text + ▾)
    chronology/                 — civ home (/civ): header, search overlay, ribbon, civ list, chain grid
    tl-navigator/               — navigator: flow renderer, zone toggles, offline library sheet
    mode/                       — war + art verticals: war-chrome (WarBreadcrumb + WarViewToggle), art-chrome, theatre/battle/art readers, front doors
  lib/
    data.ts                     — reads content JSON at build time
    types.ts                    — NarrativeChapter, TlEvent, TimelineNarrative, etc.
    chronology-data.ts          — sorted civs, chain lookup, lane-packing, year formatting
    accent-colors.ts            — region-driven accent colors with WCAG-safe variants
    categories.ts               — event category metadata (8 categories)
    navigator-tls.ts            — 100 navigator TLs with hasContent flag (100 shipped)
    globe2-data.ts              — 86 globe civs, 10 region groups, GLOBE_TO_READER mapping
    navigator-themes.ts         — Stone theme constants
    offline.ts                  — SW registration, download/delete/status store
scripts/
  parse-narratives.ts           — markdown → JSON + offline manifests + search index
  enrich-events.ts              — Wikimedia API: thumbnails, extracts, captions
  linkify.ts                    — link-curation helper
  build-static.mjs              — wraps `next build`, stashes dev-only routes
  generate-maps.mjs             — parses map-prompts/{tlId}.md → Gemini image API per chapter
  generate-maps-all-pending.mjs — batch wrapper: runs generate-maps over a pending TL list
  optimize-maps.mjs             — PNG → WebP converter for chapter maps (deletes PNG originals)
  lint-links.ts                 — G2 link validator (--strict gate; --contention opt-in)
  lint-density.ts               — G1 events/chapter gate (10–15, baseline-grandfathered)
  link-coverage.ts              — G3 multi-signal under-linking detector (--strict gate · --corpus auditor · --write-coverage-baseline)
  lint-map-prompt.mjs           — G4 pre-gen prompt guard
  audit-maps.mjs                — G4 vision-model map QA (fail-closed)
  maps-build.mjs                — G4 orchestrator: lint→gen→QA→auto-regen→optimize
  lib/wiki-verify.mjs           — shared deterministic Wikipedia page checker (no LLM)
  fix-links.mjs                 — born-verified link+photo checker (creation instrument + --strict ship gate); --apply tidies photos, --emit-flags
  retarget-links.mjs            — LEGACY-100 CLEANUP ONLY: deterministic Wikipedia-search retarget proposer (never new civs)
  collect-autofails.mjs         — LEGACY-100 CLEANUP ONLY: full-pool dead/disambig slug collector → flags
  audit-retargets.mjs           — LEGACY-100 CLEANUP ONLY: coordinator safety sweep over proposed retargets
  apply-decisions.mjs           — LEGACY-100 CLEANUP ONLY: single-writer applier of resolved decisions
  verify-links.mjs              — creation-time link verify + writes .link-snapshots (rot/regression net)
  audit-events.mjs              — G10 deterministic event-link snapshot gate (no LLM)
  audit-crosslinks.mjs          — G11 deterministic cross-link floor gate (no LLM)
  audit-glossary.mjs            — G12 deterministic glossary-link snapshot gate (no LLM)
  ship-check.mjs                — G5+G9 aggregate gate before hasContent: true
  repair-links.ts               — deterministic parser-dropped-link recovery
  lint-intros.ts                — G13 chapter-intro gate (presence + per-field bounds + TOTAL≤620 anti-wall ceiling; baseline-grandfathered, --write-baseline)
public/
  sw.js                         — service worker: network-first nav, cache-first assets, per-TL caches
  search-index.json             — generated full-text search index (~9.7 MB)
narratives/                     — chapter-based prose narratives (one .md per civ)
  {tlId}.summaries.json         — 6–10 retrospective summary bullets per chapter
  {tlId}.intros.json            — G13 forward-looking framing card per chapter (bridge/setup/cast/takeaway)
reference-data/                 — TL JSON files from v1 (events, spans, chains)
content/                        — curated link files + generated JSON
  .event-links-{tlId}.json     — curated event link placements per chapter
  .glossary-links-{tlId}.json  — curated glossary term placements per chapter
  .cross-links-{tlId}.json     — curated cross-cultural link placements per chapter
  .link-waivers-{tlId}.json    — G3 coverage-gate waivers ({chapter:[term]})
audits/
  intro-baseline.json          — G13 legacy grandfather (flat [tlId] list of civs with no intros yet); a civ NOT listed is zero-tolerance
  link-coverage-baseline.json  — G3 legacy grandfather ({tl:{ch:[term]}}); new gaps fail --strict
  link-coverage/               — G3 --corpus per-civ LINK-COVERAGE-NEEDED-{tl}.txt worklists
  link-coverage-ledger.md      — G3 --corpus summary (civs ranked by gap count)
  .link-snapshots-{tlId}.json   — G10/G12 confirmed-page snapshot (creation-time contract; {events,glossary}→slug→{title,lead,image})
  .event-slug-waivers-{tlId}.json — G10 broad-but-correct event-slug waivers ({eventId:reason})
  .glossary-slug-waivers-{tlId}.json — G12 broad-but-correct glossary-slug waivers ({term:reason})
  .caption-overrides.json       — manual image captions
  .image-overrides.json         — manual image file replacements
  .image-rejections.json        — rejected images with reasons
public/maps/{tlId}/             — chapter map images (chapter-{N}.webp)
audits/                         — audit reports from the 5-persona pipeline
```

## Reader Features (built)
See `BEHAVIORS.md` for detailed behavioral specs. Key features:
- **Single-page accordion** — all chapters on one page, only one open at a time (siblings `display: none`)
- **Sticky controls** — back link, dark mode toggle. TL title + chapter count + subtitle + chain nav.
- **Chapter maps** — Gemini-generated, lightbox zoom, sticky mini-map thumbnail
- **Three link types** — event (category-colored underline), glossary (gray background), cross-civ (target-chain-colored background). All curated per-chapter.
- **Bottom sheets** — EventSheet (image + caption + description + wiki extract), GlossarySheet, CrossLinkSheet ("Meanwhile in...")
- **Summary page** — collapsed rows with tap-to-toggle bullet lists, "READ THE FULL CHAPTER" buttons
- **Narrative prose** — Lora serif, accent drop cap, diamond separator
- **Save-my-place** — auto-saves scroll position, resume banner with chapter + percentage
- **Dark mode** (default) — warm dark `#22201e`. Light mode: parchment `#ede5d3`.
- **Lightbox** — double-tap zoom, pinch, pan, swipe-down dismiss
- **Gestures** — swipe-right to collapse chapter or navigate home
- **Image enrichment** — Commons thumbnails, manual captions + overrides + rejections
- **Offline reading** — per-TL download via service worker, library bottom sheet
- **Home page ("The Civ Lib")** — swim-lane ribbon, civ list, chain filter, full-text search
- **TL Navigator (`/navigator`)** — custom-touch flow layout, zone toggles, chain-solo mode
- **Globe (`/globe`)** — D3 orthographic SVG, 86 civs, timeline scrubber, drawer, info cards

## Reader Features (planned)
- Footnotes
- Theme threads (track a concept across chapters)
- Top drawer: interactive map (Ch 1), self-building timeline (Ch 2+)

## Writing Rules (summary — full rules in WRITING-RULES.md)
- **Write for completeness**, not for the existing event list
- **Inline-define everything** on first use per chapter — reader has zero prior knowledge
- **Set the scene** before introducing new people/places/concepts
- **Explain mechanisms**, not just outcomes
- **Use parentheses** for definitions, not em-dashes
- **Miles first**, km in parens
- **Terse cross-chapter refs** — "(Chapter 5)" not full re-introductions
- **Vary uncertainty language** — don't repeat "as far as we can tell"
- **Cross-civ comparisons** are the #1 structural asset — expand them
- **The informal voice is the product** — don't sand it down

## Civilization Roadmap
100 of 100 navigator TLs shipped (every navigator entry has hasContent: true). Narratives follow chain order from `reference-data/tl-chains.ts`. (medieval-europe omnibus split into early/high/late — stale reference-data/medieval-europe.json still on disk, slated for deletion; ancient-japan omnibus split into prehistoric/asuka-nara/heian — maps generated for all 3, stale public/maps/ancient-japan/ removed; the Northern European chain gained a 5-TL Germanic sub-chain bridging the old 50 BCE–793 CE gap.)

**Near East / Islamic Civilization:** ✅ umayyad-caliphate (8 ch) → islamic-golden-age → ottoman-empire — now the `islamic-civilization` chain in tl-chains.ts (islamic-golden-age & ottoman-empire are multi-chain).
**Mesopotamian Succession:** ✅ mesopotamia (13 ch) · ✅ assyrian-empire (8 ch) · ✅ islamic-golden-age (10 ch)
**Indian Subcontinent:** ✅ indus-valley (10 ch) · ✅ vedic-period (8 ch) · ✅ maurya-empire (8 ch) · ✅ post-maurya-kingdoms (8 ch) · ✅ gupta-empire (8 ch) · ✅ medieval-india (8 ch) · ✅ delhi-sultanate (8 ch) · ✅ mughal-empire (9 ch) · ✅ modern-india (15 ch)
**Chinese Dynasties:** ✅ ancient-china (8 ch) · ✅ shang-dynasty (8 ch) · ✅ zhou-dynasty (9 ch) · ✅ qin-dynasty (8 ch) · ✅ han-dynasty (8 ch) · ✅ six-dynasties (8 ch) · ✅ tang-song-china (9 ch) · ✅ yuan-dynasty (8 ch) · ✅ ming-dynasty (8 ch) · ✅ qing-dynasty (13 ch) · ✅ chinese-revolution (15 ch) · ✅ rise-of-china (15 ch)
**Nile Valley:** ✅ early-dynastic-egypt (8 ch) · ✅ old-kingdom-egypt (8 ch) · ✅ new-kingdom-egypt (9 ch) · ✅ late-egypt (8 ch)
**Nubian Tradition:** ✅ ancient-nubia (8 ch) · ✅ kingdom-of-kush (8 ch) · ✅ kingdom-of-aksum (8 ch)
**West African Empires:** ✅ mali-empire (8 ch) · ✅ songhai-empire (8 ch)
**Persian Tradition:** ✅ elamite-civilization (8 ch) · ✅ persian-empire (10 ch) · ✅ safavid-persia (8 ch)
**Andean:** ✅ early-andean-civilizations (8 ch) · ✅ andean-kingdoms (8 ch) · ✅ middle-horizon-empires (8 ch) · ✅ inca-empire (8 ch)
**Mesoamerican:** ✅ olmec-civilization (8 ch) · ✅ zapotec-civilization (8 ch) · ✅ teotihuacan (8 ch) · ✅ maya-civilization (8 ch) · ✅ aztec-empire (8 ch) — `mesoamerican` chain now olmec → zapotec → teotihuacan → maya → aztec
**Greco-Roman:** ✅ minoan-civilization (8 ch) · ✅ mycenaean-civilization (8 ch) · ✅ ancient-greece (8 ch) · ✅ ancient-rome (10 ch) · ✅ byzantine-empire (12 ch)
**Western European:** ✅ early-medieval-europe (8 ch) · ✅ high-medieval-europe (8 ch) · ✅ late-medieval-europe (8 ch) · ✅ renaissance-italy (8 ch) · ✅ scientific-revolution (20 ch) · ✅ enlightenment (20 ch) · ✅ industrial-revolution (20 ch) — completes the Western European Ideas chain · ✅ al-andalus (18 ch) — Islamic Iberia 711–1492 + the Morisco afterlife; standalone (not in a chain)
**SE Asian Maritime:** ✅ srivijaya (8 ch) · ✅ khmer-empire (10 ch) · ✅ majapahit (10 ch) · ✅ dai-viet (13 ch) — `southeast-asian-maritime` chain now srivijaya → khmer → majapahit → dai-viet
**Korean Civilization:** ✅ ancient-korea (8 ch) · ✅ joseon-korea (8 ch) · ✅ korean-modern (8 ch)
**Anatolian Succession:** ✅ hittite-empire (8 ch) · ✅ ottoman-empire (12 ch)
**Central Asian Steppe:** ✅ scythians (8 ch) · ✅ xiongnu-huns (8 ch) · ✅ gokturk-khaganate (8 ch) · ✅ mongol-empire (9 ch) · ✅ timurid-empire (8 ch)
**Northern European:** ✅ celtic-cultures (8 ch) · ✅ germanic-tribes (10 ch) · ✅ the-goths (11 ch) · ✅ migration-period (9 ch) · ✅ anglo-saxon-england (10 ch) · ✅ vendel-scandinavia (8 ch) · ✅ viking-age (8 ch) — the 5-TL Germanic sub-chain (full pipeline: narrative, 5-persona audit, settled event pools, summaries, links, cross-civ pass, Gemini maps) bridges the old 50 BCE–793 CE gap. Chain order: celtic → germanic-tribes → the-goths → migration-period → anglo-saxon-england → vendel-scandinavia → viking-age.
**Russian Civilization:** ✅ kievan-rus (12 ch) · ✅ russian-empire (20 ch) · ✅ soviet-union (20 ch) — chain: Rus' 882–1240 → Empire 1721–1917 → USSR 1922–1991
**Japanese Civilization:** ✅ prehistoric-japan (8 ch) · ✅ asuka-nara-japan (8 ch) · ✅ heian-japan (8 ch) · ✅ edo-japan (8 ch) · ✅ meiji-japan (8 ch) · ✅ japanese-economic-miracle (8 ch)
**North American Indigenous:** ✅ ancestral-puebloans (Mesa Verde & Chaco, -100–1300) · ✅ mississippian-culture (10 ch) — Cahokia & the mound-builder world 800–1600 — now the `north-american-indigenous` chain.
**Standalone (deliberately in no chain):** ✅ phoenicia (8 ch) · ✅ polynesian-voyagers (8 ch) · ✅ ancient-israel (8 ch) · ✅ carthage (8 ch) · ✅ al-andalus (18 ch, also under Western European). All other formerly-dangling TLs (umayyad-caliphate, dai-viet, majapahit, zapotec-civilization, teotihuacan, ancestral-puebloans, mississippian-culture) are now chained.
**American Republic:** ✅ early-american-republic (18 ch) · ✅ antebellum-america (18 ch) · ✅ reconstruction · ✅ roaring-twenties · ✅ civil-rights-era — chain: 1776 Declaration → republic finds its feet (1776–1828) → expansion & the slavery crisis to 1865 → Reconstruction → 1920s → Civil Rights

**Remaining (0):** all 100 navigator TLs have `hasContent: true`. The next work is the ~17 new TLs (not yet added to `navigator-tls.ts`).

**Maps:** all 100 shipped TLs have chapter maps. The 2026-05 corpus map audit + full regen (Tier 0 Japan, Tier 1 mesopotamia/indus-valley full-series, Tier 2 blockers, Tier 3 ~150 majors, Pass-1 re-roll) is COMPLETE — the whole corpus passes the locked acceptance criteria (see `audits/map-audit.md`; criteria in memory `feedback_dont_over_generalize_defect_rules`). `generate-maps.mjs` `preprocessPrompt()` auto-injects the hardened global rules. New/split TLs now go through the **G4 gate**: `node --env-file=.env.local scripts/maps-build.mjs <tlId>` (lint-prompt → generate → vision-QA → auto-regen ≤3 → optimize). The old manual `generate-maps.mjs → eyeball → optimize-maps.mjs` loop is retired (see Content Pipeline step 12).

## Color System
- **Region-driven accent colors** in `src/lib/accent-colors.ts`: Near East = amber `#d97706`, Africa = rust `#b44d3b`, Asia = violet `#7c3aed`, Europe = blue `#1d4ed8`, Americas = green `#047857`.
- **Globe groups** (`globe2-data.ts`): 10 color-coded groups, more granular than the 5-region accent system.
- **Category colors**: 8 event categories in `src/lib/categories.ts` with light/dark variants.

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section.

## Git — PUBLISH POLICY (ask-gate LIFTED 2026-05-17)
`git push` and `npx wrangler deploy` PUBLISH to stuffhappened.com (Cloudflare
auto-deploys `main`). Multiple concurrent **same-tree** sessions publishing once
caused recurring prod regressions (whole civ groups vanishing).

**Current rule:** **publish when ship-ready, no need to ask.** Commit locally
throughout; when a civ/merge has passed the full gated pipeline (ship-check
CLEAR + the `build-static.mjs` shipped-page guard green), flip `hasContent`,
merge to `main`, run the clean atomic `rm -rf out && npm run build && npx
wrangler deploy`, and push — autonomously. The user removed the *ask*, not the
gates: never publish a gate-failing or half-built state.

**Why it's safe to publish unattended now:** concurrent work runs in isolated
git **worktrees** (the-17 → `feat/the-17`, remediation → `chore/corpus-
remediation`), never concurrent same-tree sessions; and the shipped-page guard
makes a stale/partial build structurally undeployable. Those replace the old
serialize-under-explicit-approval gate. (A legacy settings.json PreToolUse hook
may still hard-block pushes — clear/relax it before the first unattended
publish.)
