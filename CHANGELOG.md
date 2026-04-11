# Changelog

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
