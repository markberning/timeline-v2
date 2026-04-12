# Changelog

## 2026-04-12 — Glossary, Summaries, Images, Gestures, BEHAVIORS.md

### Glossary link system
- New `content/.glossary-links-{tlId}.json` format alongside event links: curated per-chapter placements with `{term, matchText, wikiSlug, type}`.
- New `GlossarySheet` bottom-sheet component (gray-themed, shorter than EventSheet) with swipe-down / tap-header / × to dismiss.
- Parse pipeline: injects glossary spans after events (events win), fetches Wikipedia extracts via existing enrichment cache, post-processes event wiki extracts so glossary terms inside EventSheet popups are also clickable.
- **Mesopotamia**: 334 curated glossary terms across all 13 chapters. **Indus Valley**: Ch 1 only (28 terms) so far.
- Gray solid underline, normal weight override to beat Tailwind Typography bold inheritance.

### Summary bullets
- New optional `bullets: string[]` field in `{tlId}.summaries.json` for chronological chapter summaries as bulleted lists with inline event/glossary links.
- Replaces the pill-chip row when bullets are present. Big "Read Chapter N →" accent-bordered button at the end.
- **All 10 Indus Valley chapters** now use this format.

### Chapter accordion gestures & scrolling
- Lifted `open` state to `NarrativeReader` so only one chapter renders at a time — other chapters `display: none`, scroll ends at chapter boundary.
- Tap or swipe-right on sticky header → collapse. Swipe-down was tried and removed (collided with upward scroll).
- Fixed iOS Safari sticky-button click-eating bug by switching header to `<div role="button">` with `onPointerDown`/`onPointerUp`.
- Fixed "expand scrolls to wrong place" bug: was measuring `headerRef.getBoundingClientRect().top` which is pinned to 40 on sticky elements, so the math was always a no-op. Now uses `section.offsetTop - 40`.
- Map container reserves `aspect-ratio: 1408/768` so layout is stable before the image loads.

### Event sheet, glossary sheet, lightbox
- Swipe down on sheet header dismisses.
- Lightbox: double-tap zoom (1x ↔ 2.5x, centered exactly on tap point), swipe down at base scale dismisses, tap backdrop or × dismisses.
- Dark mode: new `--surface` CSS var (`#2a2a2f`) distinct from `--background` (`#1c1c1f`) so bottom sheets sit visibly above the page. Overall dark mode softened from near-black/near-white to warm grays (13.6:1 contrast, WCAG AAA).

### Image pipeline
- New `/candidates/{tlId}` review page for staging proposed images for missing events (separate from existing `/review/*`).
- Approvals write to `.image-overrides.json` + `.caption-overrides.json`, and auto-clear stale entries from `.image-rejections.json`.
- Curation pass: **Mesopotamia 61 → 84/89 images (95%)**, **Indus Valley 29 → 48/56 images (86%)**. 42 new hand-captioned entries, all sourced from Wikimedia Commons (many originally from Met/Louvre/British Museum/Penn/Ashmolean/Iraq Museum).
- Fixed enrichment-cache null-trap bug: `if (!(slug in cache))` replaced with truthy check, so null fetches get retried.
- Fixed link-injection nested-anchor bug: `replaceOutsideAnchors` helper splits text by existing `<a>...</a>` spans before matching.
- Fixed stale-event-link warning: parse script now warns + skips when an eventId isn't in ref data (root cause of "Amorites is pink but doesn't open" bug).

### Navigation
- Swipe right on civilization summary page (no chapter expanded) → back to home.

### Docs
- New **BEHAVIORS.md** — single source of truth for expected behaviors across chapter accordion, sheets, lightbox, gestures, dark mode, image pipeline, link pipeline (including the three curation agents), and navigation.

---

## 2026-04-11b — Mesopotamia Map Audit

### Chapter Maps
- Fact-checked all 13 Mesopotamia chapter maps against narrative text
- All 13 maps pass — no hallucinations or factual errors found
- Verified: city placements, dates, empire extents, trade routes, campaign arrows, geographic features, regional labels
- Mesopotamia maps now at same quality bar as Indus Valley (post-hallucination-fix)

---

## 2026-04-11 — Mobile Reading UI + Event System + Images + Maps

### Reader App
- Built complete mobile reading UI: home page with civilization cards, single-page accordion reader with expandable chapters
- Sticky top bar with back chevron, text size control (5 steps, 14–22px), dark mode toggle — always visible
- Close chapter button at bottom of expanded content (replaced tap-to-collapse which caused accidental closes)
- Viewport locked to vertical scroll only on mobile (`touch-action: pan-y`)
- Dark mode with anti-flash script, persisted to localStorage
- WCAG AA contrast verified for all text in both modes — accent colors have light/dark variants

### Event Linking
- Built regex auto-linker ported from v1, then replaced it with AI-curated links
- Agents read each chapter in context and place links where events are actually discussed — no false positives
- 80 curated links for Mesopotamia (13 chapters), 65 for Indus Valley (10 chapters)
- Curated links stored in `content/.event-links-{tlId}.json`

### Event Bottom Sheet
- Tap a colored event link to open a bottom sheet with: category bar, image with caption, event label + year, description, detail sections ("Why It Matters", "What It Was", etc.), Wikipedia extract, read-more link
- Lightbox with pinch-to-zoom on event images
- 8 event category colors (rulers, wars, architecture, religion, science, trade, people, writing) with WCAG-safe variants

### Image Enrichment
- Build-time Wikimedia API integration: Commons thumbnails + Wikipedia page image fallback + extracts + captions
- All results cached locally — zero network on subsequent builds
- Manual caption overrides for all 122 events — descriptive alt-text style, every caption references event name
- Image override system for swapping specific Commons files per event
- Image rejection system with documented reasons (32 bad images removed)
- Image review page at `/review/{tlId}` with approve/reject/notes, filter tabs, submit-to-file

### Chapter Maps
- Gemini-generated simple maps for all 10 Indus Valley chapters
- Fact-checked against narrative text — caught hallucinated cities, wrong distances, anachronistic features
- Shown at top of expanded chapters with lightbox zoom
- Gemini prompts for all 23 chapters saved in `map-prompts.md`
- Style standard: "Apple Maps meets history textbook" — geography + city markers + one annotation, no clutter

### Infrastructure
- Next.js 16 + React 19 + Tailwind 4 + @tailwindcss/typography
- Build pipeline: `npm run parse` converts markdown → JSON with event links, enriched images
- Dev server configured for phone testing (`allowedDevOrigins`, `devIndicators: false`)
- Content files: curated event links, caption/image overrides, rejections, enrichment cache

### Design Decisions Documented
- TL Navigator concept: pan-and-zoom horizontal timeline grouped by world region, morphs into reading-view top drawer
- Region color strategy: 1–2 colors per region, not per TL (AA compliance constraint)
- Event links: AI-curated, not regex (v1 regex "could never tune well enough")
- Images: better no image than wrong image — reject mismatches

## 2026-04-10 — Initial Setup

- Initialized v2 repo with Next.js, parser, types, reference data
- Wrote Indus Valley narrative (10 chapters) and summaries
- Ran 4-persona audit on Indus Valley
- Applied audit fixes + cross-cultural cross-references to Mesopotamia
