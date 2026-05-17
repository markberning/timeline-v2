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

## Content Pipeline

**The pipeline is gated, not advised.** Quality bars are enforced by scripts that
fail the build/ship, because shipping 100 civs on agent diligence required a
post-hoc corpus link sweep + corpus map regen. See `audits/pipeline-audit.md`.
Gate scripts: `npm run gate` (lint:links --strict + lint-density --strict, wired
into `prebuild`); `scripts/link-coverage.ts`; `scripts/maps-build.mjs` (lint →
gen → vision-QA → regen); `scripts/ship-check.mjs` (blocks the ship toggle).

0. **Pull v1 reference data + expand to target density** — check `~/projects/personal/timeline/src/data/{tlId}.json`, copy to `reference-data/{tlId}.json`. **Hard target: 10–15 events per chapter** (e.g. a 20-chapter TL ⇒ ~200–220 events), spread across all 8 categories — *enforced* by `lint-density.ts` (new civs get zero tolerance; not grandfathered). The event pool is reused across chapters. Verify the `label` field matches `navigator-tls.ts`.
0.5. **Narrative-movement map (GATE — user-approved before writing)** — list the distinct dramatic movements the civilization's story has (rise / crisis / transformation / collapse / afterlife …). **Chapter count = number of movements**, NOT a civ-type template and NOT "take the heavier option." No artificial cap — story length drives structure. Get the chapter list + one-line throughline per chapter approved by the user before drafting. This gate holds even in no-stop mode.
1. **Write narrative** — Claude drafts the chapter-based prose. Apply all writing rules in `WRITING-RULES.md`.
2. **Audit** using the 5-persona system in `.claude/skills/audit-narrative.md`. Report-only, but Persona-D WEAK/REWRITE grades and Persona-E backward findings are **ship-blocking** (enforced at step 14, not optional).
3. **Fix** audit findings from `audits/{tlId}.audit.md`. **Must-fix (blocks ship): all factual/citation errors, all readability-breaking definition/source-intro gaps, and EVERY Persona-D WEAK/REWRITE chapter + every "no" build-dependency boundary** (chapter flow is a hard gate, not "one structural note, defer the rest").
4. **Reconcile** — add events/terms from narrative missing from reference data.
5. **Register** — add `'{tlId}.md': '{tlId}'` to `NARRATIVE_FILES` in `scripts/parse-narratives.ts`.
6. **Curate event links** — `content/.event-links-{tlId}.json`. matchText: verbatim plain substring, no `**bold**`-spanning, no leading/trailing punctuation; Unicode word-boundary (`(?<![\p{L}\p{N}_])…`).
7. **Curate glossary + cross-civ links** — `.glossary-links-{tlId}.json`, `.cross-links-{tlId}.json`. **Bar: proper nouns + concepts, no cap** (skip modern country names / universal basics). The old "~10–14 event / ~8–12 glossary / ~14–18 cross per TL" and "~20–35 glossary per chapter" numbers are RETIRED — they were the under-production target that caused the sweep.
7b. **Link-coverage (GATE)** — `tsx scripts/link-coverage.ts --tl={tlId} --strict`. Every author-bolded-but-unlinked term must be linked or waived in `content/.link-waivers-{tlId}.json`. Pass B (proper nouns) is advisory.
8. **Write summary bullets** — `narratives/{tlId}.summaries.json`, 6–10 bullets per chapter. See WRITING-RULES.md.
9. **Lint links (GATE)** — `npm run lint:links --tl={tlId} --strict` must pass (0 ERROR). `--contention` (opt-in) shows what the parser will silently drop. This is also wired into `prebuild` corpus-wide.
10. **Enrich events** — `npm run parse` (runs the gate first). **Restart dev server after parse** — `lib/data.ts` caches in-memory.
11. **Backward cross-cultural pass (GATE — mandatory, not deferred)** — apply every Persona-E backward finding into the reference TLs' `.cross-links-*.json` (or ledger it with a reason); `npm run lint:links --strict` must pass for **every reference TL touched**.
12. **Generate + QA maps (GATE)** — `node --env-file=.env.local scripts/maps-build.mjs {tlId}`: lints the prompt, generates, runs the vision-model QA gate (`audit-maps.mjs`, locked acceptance criteria), auto-regens failures (≤3 rounds), then optimizes. Manual `generate-maps.mjs` + thumbnail eyeball is no longer the gate. See `map-prompts/README.md`.
13. **Review images** — `/review/{tlId}` (dev mode only).
14. **Ship toggle (GATE)** — `node scripts/ship-check.mjs {tlId}` must pass, THEN flip `hasContent: true` in `src/lib/navigator-tls.ts`. ship-check verifies: maps exist 1:1 with chapters + QA-passed, links 0-ERROR, coverage triaged, density in band, no Persona-D WEAK/REWRITE, backward pass done.

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
    chronology/                 — home page: header, search overlay, ribbon, civ list, chain grid
    tl-navigator/               — navigator: flow renderer, zone toggles, offline library sheet
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
public/
  sw.js                         — service worker: network-first nav, cache-first assets, per-TL caches
  search-index.json             — generated full-text search index (~9.7 MB)
narratives/                     — chapter-based prose narratives (one .md per civ)
reference-data/                 — TL JSON files from v1 (events, spans, chains)
content/                        — curated link files + generated JSON
  .event-links-{tlId}.json     — curated event link placements per chapter
  .glossary-links-{tlId}.json  — curated glossary term placements per chapter
  .cross-links-{tlId}.json     — curated cross-cultural link placements per chapter
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

**Maps:** all 100 shipped TLs have chapter maps. The 2026-05 corpus map audit + full regen (Tier 0 Japan, Tier 1 mesopotamia/indus-valley full-series, Tier 2 blockers, Tier 3 ~150 majors, Pass-1 re-roll) is COMPLETE — the whole corpus passes the locked acceptance criteria (see `audits/map-audit.md`; criteria in memory `feedback_dont_over_generalize_defect_rules`). `generate-maps.mjs` `preprocessPrompt()` auto-injects the hardened global rules; new/split TLs: `scripts/generate-maps.mjs <tlId>` → audit → `scripts/optimize-maps.mjs`.

## Color System
- **Region-driven accent colors** in `src/lib/accent-colors.ts`: Near East = amber `#d97706`, Africa = rust `#b44d3b`, Asia = violet `#7c3aed`, Europe = blue `#1d4ed8`, Americas = green `#047857`.
- **Globe groups** (`globe2-data.ts`): 10 color-coded groups, more granular than the 5-region accent system.
- **Category colors**: 8 event categories in `src/lib/categories.ts` with light/dark variants.

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section.

## Git
Always commit and push completed work without asking.
