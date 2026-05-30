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

**The pipeline is gated, not advised** — quality bars are enforced by scripts that
fail the build/ship. **The full 14-step recipe lives in `docs/content-pipeline.md` —
read it before any civ-build or event-sweep work.** What stays here is the spine:

- **Born-verified links + photos (locked 2026-05-17/2026-05-29).** Every wiki slug and
  every event photo is confirmed against its real page/image *at the moment it is
  written* — `node scripts/fix-links.mjs --tl={tlId}` is the creation-time instrument
  AND a `--strict` ship gate. Never write slugs blind and lean on a later sweep. A
  *missing* link/photo beats a *wrong* one; for photos, a representative era artifact
  beats blank (reject is the last resort). The snapshot gates (`verify-links` →
  `audit-events`/`audit-glossary`) are only a rot/regression net, not where errors are
  first caught.
- **Gates (all run by `scripts/ship-check.mjs` before `hasContent: true`):** G1 density
  (`lint-density`, 10–15 events/ch) · G2 links (`lint:links --strict`, 0 ERROR) · G3
  coverage (`link-coverage --strict`) · G4 maps (`maps-build`: lint→gen→vision-QA→
  auto-regen ≤3; **3-attempt cap then hand to user, never re-roll** — see
  `memory/feedback_map_three_attempt_cap`) · G10/G11/G12 event/cross/glossary
  snapshot+floor (deterministic, no LLM) · G13 chapter intros (`lint-intros`, shape
  only) · G14 event 2-part "explore further" cards · G15 event-photo 70% floor. New +
  swept civs are zero-tolerance; the legacy 100/102 are baseline-grandfathered.
- **Autonomy:** "start building `<civ>`" = run the whole pipeline with no approval pause,
  provided the two invariants hold (≥10–15 events/ch; chapter count = #movements,
  uncapped). The map planning pause is lifted; every quality gate is unchanged.
- **Event cards (locked 2026-05-29, `celtic-cultures` ch1 ref):** every event is a 2-part
  card — `description` (tight house-voice what-it-is) + a `details` "Explore further"
  beat (2–4 sentences the narrative does NOT give); born-verified facts only.
- **Maps:** `node --env-file=.env.local scripts/maps-build.mjs {tlId}` (the G4 gate). The
  old manual generate→eyeball→optimize loop is retired.

The ONLY AI anywhere in the pipeline is map generation/QA — every link/coverage/card
gate is deterministic. See `audits/pipeline-audit.md` for the gate rationale, and
`docs/content-pipeline.md` for the step-by-step recipe + every locked detail.

## File Structure
**Full annotated tree (every component, script, and content/audit file) is in
`docs/content-pipeline.md`.** The load-bearing entry points:
- `src/app/` — `page.tsx` (Civ Lib home) · `[civilizationId]/` (accordion reader) ·
  `navigator/` · `globe/` · `review/` + `api/review/` (dev-only image curation)
- `src/lib/` — `navigator-tls.ts` (the 100 TLs + `hasContent` flag — **ship source of
  truth**) · `data.ts` (build-time content read) · `types.ts` · `accent-colors.ts` ·
  `categories.ts` · `chronology-data.ts`
- `scripts/` — `parse-narratives.ts` (md→JSON) · `ship-check.mjs` (aggregate ship gate) ·
  `fix-links.mjs` (born-verified link+photo) · `maps-build.mjs` (G4) · the event-upgrade
  sweep chain `sweep-bundle.mjs`→card+finder agents→`sweep-photos.mjs` (Phase-2a: single
  paced/cached/batched 429-proof Wikimedia gatherer, context-aware Commons search)→vision
  pick→`sweep-apply.mjs`, all driven by **`sweep-civ.mjs`** (deterministic prep/gather/
  finish/commit engine, global gather+apply locks so civs OVERLAP safely) under the
  **sweep-civ workflow** (run 2-wide; see `audits/event-upgrade-sweep-progress.md`) · the gate scripts
  `lint-density`/`lint-links`/`link-coverage`/`lint-intros`/`lint-event-cards`/
  `lint-event-photos` · `verify-links`+`audit-{events,crosslinks,glossary}.mjs`
  (deterministic snapshot/floor gates). `retarget-links`/`collect-autofails`/
  `audit-retargets`/`apply-decisions` are **legacy-100 cleanup only, never new civs.**
- content/audit data: `reference-data/{tlId}.json` · `narratives/{tlId}.md` +
  `.summaries.json` + `.intros.json` · `content/.{event,glossary,cross}-links-{tlId}.json`
  + waivers · `audits/*-baseline.json` (gate grandfathers) · `public/maps/{tlId}/`

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
**100 of 100 navigator TLs shipped** (every `navigator-tls.ts` entry has
`hasContent: true`); all 100 have chapter maps that pass the locked acceptance
criteria. The **live source of truth is `src/lib/navigator-tls.ts` (what's shipped) +
`reference-data/tl-chains.ts` (chain order)** — query those, not a hand-maintained
list. The per-chain snapshot (every chain + chapter counts) is in
`docs/content-pipeline.md`; the next work is the ~17 new TLs in
`audits/phase-1.5-roster.md`. Map doctrine: `audits/map-audit.md` +
`memory/feedback_dont_over_generalize_defect_rules`.

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
