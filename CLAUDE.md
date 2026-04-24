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
- **Deploy**: Cloudflare Workers + Static Assets via `wrangler.jsonc`. `stuffhappened.com` is the v2 production domain; `v1.stuffhappened.com` is the legacy Vite explorer. Both projects live in the same CF account. **Auto-deploy is configured** through Cloudflare Workers Builds — the `timeline-v2` Worker has a git integration pointing at the GitHub repo, and every push to `main` triggers `npm run build && npx wrangler deploy` automatically. If a build gets "canceled" or the dashboard shows "disconnected from your Git account," the GitHub OAuth has gone stale: reconnect via CF dashboard → Workers → `timeline-v2` → Settings → Build → Manage (next to the Git repository field). Manual deploys from a local terminal with `npx wrangler deploy` are the fallback if auto-deploy is broken.
- **Dev**: `npm run dev` → localhost:3000. Dev server keeps the dev-only api routes and dynamic review pages for local image curation.

## Content Pipeline
0. **Pull v1 reference data + expand to target density** — before starting a new TL, check `~/projects/personal/timeline/src/data/{tlId}.json`. v1 has curated pitch/spans/events for most of the 71 navigator TLs in the same format as v2. Copy it to `reference-data/{tlId}.json`. Then **audit the event count and category balance**: target is **60-70 events** with coverage across all 8 categories (rulers, people, architecture, trade, science, writing, religion, wars). If below 55 events, expand before writing. Check for: (a) temporal gaps — any 300+ year stretch with <3 events, (b) category imbalance — rulers/people should have 10+ combined, (c) missing key figures, sites, or artifacts that any popular history would cover. Add events with proper `id`, `label`, `year`, `description`, `wikiSlug`, `tier`, `category` fields. **Also verify the `label` field in the reference data JSON matches the `label` in `navigator-tls.ts`** — this is what renders as the page heading in the reader. Mismatches cause the reader to show a different name than the navigator. This step is **mandatory and automatic** — never skip it, even if the v1 data looks decent at first glance.
1. **Write narrative** — Claude drafts the chapter-based prose. The user never hand-writes narratives; Claude does all writing, the user reviews and directs. Apply all writing rules in `WRITING-RULES.md`.
2. **Audit** using the 5-persona system in `.claude/skills/audit-narrative.md`
3. **Fix** audit findings — apply must-fix and should-fix items from the merged audit report at `audits/{tlId}.audit.md`
4. **Reconcile** — add any events/terms from the narrative that are missing from the TL reference data
5. **Register with parse pipeline** — add `'{tlId}.md': '{tlId}'` to the `NARRATIVE_FILES` map in `scripts/parse-narratives.ts`. Without this step, the TL will be skipped silently.
6. **Curate event links** — read each chapter and place links in `content/.event-links-{tlId}.json`. **matchText must be plain ASCII text with word-character boundaries** — no `**bold**` wrappers, no trailing `(parentheticals)`, no leading/trailing punctuation. The parse script uses `\b(escaped)\b` regex, so anything starting or ending in a non-word character will silently fail to match.
7. **Curate glossary links** — `content/.glossary-links-{tlId}.json`, format `[{term, matchText, wikiSlug, type}]` with type ∈ place|people|concept. Same matchText rules as event links. Target density: ~20–35 per chapter.
8. **Curate cross-civ links** (optional) — `content/.cross-links-{tlId}.json` per chapter with `{matchText, targetTl, targetChapter, blurb}`. Rendered as a bottom sheet in the reader via `CrossLinkSheet`. Same matchText rules.
9. **Write summary bullets** — `narratives/{tlId}.summaries.json` as a JSON list of `{chapter, title, dateRange, bullets: [...]}`, 6–10 bullets per chapter. Dense single-sentence factual outlines, not polished prose. See `narratives/ancient-china.summaries.json` for style reference. Bullets auto-get event/glossary/cross-link injection by the parse script.
10. **Enrich events** — `npm run parse` fetches thumbnails + Wikipedia extracts (cached). **Restart the dev server after parse** — `lib/data.ts` caches narratives in-memory.
11. **Backward cross-cultural pass** — apply the Persona E backward findings by adding Elam/Nubia/etc. cross-link entries to the completed reference TL cross-link files, pointing at chapters in the new TL.
12. **Generate chapter maps** — use Gemini with prompts from `map-prompts/{tlId}.md`. **Every prompt must open with the CRITICAL RULES block from `map-prompts/README.md`** (draw each label exactly once, spell exactly as written, don't invent words, edge-to-edge map with top header bar only) plus the TL's orientation preamble if applicable. Set Gemini to **thinking mode** for the extra rule-following budget — fast mode hallucinates. Save output to `public/maps/{tlId}/chapter-{N}.png`, then run the non-destructive optimize script for `.webp` at quality 85. **Audit every generated map** against its prompt — duplicate labels and garbled invented words are the most common failure modes. Maps with factual errors go to `map-prompts/redo/{tlId}.md` with per-chapter SPECIFIC REMINDERS blocks naming the exact failure. The reader loads `.webp` via the image probe in `chapter-accordion.tsx`.
13. **Review images** — `/review/{tlId}` page for approving/rejecting event images (dev mode only)
14. **Ship toggle** — flip `hasContent: true` on the TL's entry in `src/lib/navigator-tls.ts` to make the row tappable on the home navigator.

## File Structure
```
src/
  app/
    page.tsx                    — home: renders ChronologyPage ("The Civ Lib" — editorial home with swim-lane ribbon + civ list)
    navigator/page.tsx          — /navigator: old TlNavigator flow layout (preserved)
    globe/page.tsx              — /globe: D3 orthographic globe with 86 civs, timeline scrubber, drawer sidebar, color-coded by region
    [civilizationId]/
      layout.tsx                — accent color wrapper
      page.tsx                  — single-page accordion reader
    review/[civilizationId]/    — image review page
    api/review/                 — saves review results to file
  components/
    chapter-accordion.tsx       — expandable chapter with sticky header + map + X-close / Read-next bottom nav; sticky header is split into a clickable row + non-clickable preview area so bullet text is selectable
    narrative-reader.tsx        — client wrapper for event + glossary + cross-link click delegation; reads ?chapter=N on mount
    event-sheet.tsx             — bottom sheet for event details (image, caption, desc/details rendered as HTML, wiki extract)
    cross-link-sheet.tsx        — cross-cultural "Meanwhile in..." sheet; MutationObserver on <html> dark class
    lightbox.tsx                — pinch-to-zoom fullscreen image viewer
    dark-mode-toggle.tsx        — sun/moon toggle, persisted to localStorage
    text-size-control.tsx       — 5-step font size control (14-22px)
    image-review.tsx            — approve/reject images with notes
    offline-registrar.tsx       — mount-once client component that registers the service worker; included in app/layout.tsx
    globe-view.tsx              — dead code: old globe.gl WebGL globe
    globe2.tsx                  — D3 orthographic SVG globe: 86 civs, color-coded by region, drag-rotate, tap-hold-drag zoom, spin-to-civ, leader-line labels, timeline scrubber, drawer sidebar, info card with chain position + "Read the full story" button
    globe2.module.css           — CSS module for globe: theme-aware (dark/light), mobile-responsive, matched header with list view
    chronology/
      chronology-page.tsx       — 'use client' shell: owns activeCivId, responsive breakpoint, wires ribbon ↔ list/detail
      chronology-header.tsx     — "Stuff Happened" eyebrow + "The Civ Lib" title + dark mode toggle
      timeline-ribbon.tsx       — horizontal scrollable ribbon: swim-lane mode (mobile, 5 region lanes) + lane-packed mode (desktop)
      civ-list.tsx              — mobile scrolling list with DOM-only active state (no React re-renders during scroll)
      civ-icons-strip.tsx       — decorative civilization icon PNGs between header and ribbon
      detail-pane.tsx           — desktop detail card: civ info (left) + chain grid (right)
      chain-grid.tsx            — desktop: all chains grouped by region in a 3-column grid
    tl-navigator/
      tl-navigator.tsx          — navigator shell: header (title + v1 pill + offline library button), zone toggles, body scroll lock, mounts TlFlow + OfflineLibrarySheet
      tl-flow.tsx               — custom-touch-scroll flow renderer: diagonal layout, chain pull, chain icons, tap nav, client-side offline guard
      tl-swimlanes.tsx          — legacy swim-lane gantt renderer (kept for reference, no longer mounted)
      zone-toggles.tsx          — 5 zone filter pills (Near East/Africa/Asia/Europe/Americas); double-tap = solo
      offline-library-sheet.tsx — bottom-sheet modal opened by the header cloud button; lists all hasContent TLs with per-row download/delete cloud controls
  lib/
    data.ts                     — reads content JSON at build time
    types.ts                    — NarrativeChapter (now with optional subtitle), TlEvent, TimelineNarrative, etc.
    chronology-data.ts          — sorted civs, chain lookup map, lane-packing algorithm, year formatting
    accent-colors.ts            — per-TL accent colors with WCAG-safe text/badge variants
    categories.ts               — event category metadata (colors for 8 categories)
    navigator-tls.ts            — 91 navigator TLs with region, startYear, endYear, subtitle (descriptive tagline), hasContent flag (true for 25 shipped TLs)
    globe-data.ts               — dead code: polygon territories for old globe.gl globe
    globe2-data.ts              — 86 civilizations for D3 globe: id, name, start/end years, capital [lon,lat], extent polygon, region, summary, cities; plus GLOBE2_GROUPS (10 color-coded region groups), GLOBE_TO_READER mapping (globe civ → reader TL slug), getCivColor(), getReaderSlug(), getCivChain(), and timeline constants
    navigator-themes.ts         — Stone theme constants (warm dark bg, region palette, row height)
    offline.ts                  — service worker registration + download/delete/status store (useSyncExternalStore); exposes registerServiceWorker, downloadTl, deleteTl, useOfflineStatus, useAllOfflineStatus
scripts/
  parse-narratives.ts           — markdown → JSON build pipeline (two-pass: collects TL metadata first, then injects cross-links before event/glossary; ALSO emits per-TL offline manifests to public/offline/{tlId}.manifest.json)
  enrich-events.ts              — Wikimedia API: thumbnails, extracts, captions (cached); batch size 20 with exlimit=20, redirects=1, safeDecode slugs
  build-static.mjs              — wraps `next build`, stashes dev-only routes (/api, /candidates, /review) during static export
  optimize-maps.mjs             — one-shot PNG → WebP converter for chapter maps
  linkify.ts                    — legacy regex linkifier (replaced by curated links)
public/
  sw.js                         — hand-rolled service worker: network-first for navigations, cache-first for assets, per-TL caches, localhost fetch bypass, dual-slash cache put, HTML offline fallback
  offline/{tlId}.manifest.json  — generated by parse; page URL + map URLs + thumbnail URLs the SW uses to populate a per-TL offline cache (gitignored)
narratives/                     — chapter-based prose narratives (one .md per civilization)
reference-data/                 — TL JSON files from v1 (events, spans, chains)
content/                        — generated JSON (gitignored except override files)
  .event-links-{tlId}.json     — curated event link placements per chapter
  .glossary-links-{tlId}.json  — curated glossary term placements per chapter
  .cross-links-{tlId}.json     — curated cross-cultural link placements per chapter
  .caption-overrides.json       — manual image captions (overrides Commons descriptions)
  .image-overrides.json         — manual image file replacements
  .image-rejections.json        — rejected images with reasons
  .enrichment-cache.json        — Wikimedia API cache (gitignored)
public/maps/{tlId}/             — chapter map images (chapter-{N}.webp, quality 85)
wrangler.jsonc                  — Cloudflare Workers + Static Assets config (deploy target for stuffhappened.com)
next.config.ts                  — output: 'export', trailingSlash: true, images: { unoptimized: true }
audits/                         — audit reports from the 5-persona pipeline
```

## Reader Features (built)
- **Single-page accordion** — all chapters on one page, only one open at a time (siblings `display: none`)
- **Sticky controls** — "← Stuff Happened" back link, text size (A/A), dark mode toggle always visible. Below the sticky bar: TL title in Lora serif with accent vertical bar on the left + "N CH" pill right-justified, subtitle in italic indented below. Chain navigation row (← prev TL | next TL →) below the title block.
- **Chapter maps** — Gemini-generated maps at top of each expanded chapter with lightbox zoom (reserved aspect ratio so expand-scroll lands cleanly). **Sticky mini map**: when the full map scrolls out of view, a small thumbnail appears fixed in the bottom-right corner; tap it to open the lightbox. Disappears when the full map scrolls back into view.
- **Lightbox scroll preservation** — scroll position is saved before opening the lightbox and restored on close, so the reader returns to exactly where they were.
- **Event links** — curated context-aware links in prose, colored by category (8 categories). Now also auto-injected into `event.description` and `event.details[].text` inside the EventSheet (not just the Wikipedia extract).
- **Glossary links** — gray background highlight (light mode: #e5e7eb bg + #374151 text; dark mode: cool gray rgba(200,205,215,0.18) bg + #e5e7eb text), curated per-chapter, opens bottom sheet with Wikipedia extract. Glossary-linked inside chapter prose, summary bullets, event descriptions, event details, and event wiki extracts.
- **Cross-cultural ("CCC") links** — tinted background highlight in the *target* TL's chain color (light mode 12% opacity, dark mode 15%), no underlines. Tap opens a `CrossLinkSheet` with "Meanwhile in {label}" + a 1–3 sentence blurb + solid-fill "Read {label} Ch N →" button that hard-navigates to `/{tl}?chapter=N` so the target chapter auto-expands on arrival. Curated per-chapter in `content/.cross-links-{tlId}.json`. One `matchText` must cover exactly one civilization — compound phrases like "Egypt and Mesopotamia" get narrowed to just the linked civ. Three distinct link styles: event = colored underline, glossary = gray background, cross-link = colored background.
- **Event bottom sheet** — tap a linked event for image, caption, description, details sections, Wikipedia extract, read-more link. Description and details now render as HTML so inline glossary links work inside them.
- **Glossary sheet** — gray-themed smaller variant of EventSheet.
- **Cross-link sheet** — accent-colored header, MutationObserver watches `<html>` for `.dark` class changes so the accent reactively swaps between light and dark target colors when the user toggles the theme mid-session.
- **Summary page (collapsed/expanded)** — collapsed chapters show a minimal row: "01" chapter number in accent color, title in Lora serif (text-xl) with inline rotating chevron, subtitle (dateRange) in italic serif below, start/end years right-justified with `›` separator. Gray horizontal lines between chapters. Tapping a row toggles the summary view (does NOT open the full chapter). Summary expanded state shows: solid accent-colored "READ THE FULL CHAPTER" button (white text, bold, book icon, circle arrow, chapter number inline with title, year range) + "SUMMARY · FOR REVIEW" label + bullet list with left accent-colored vertical border (margin-quoted style). Bullets in Geist sans-serif with inline event/glossary/cross-link auto-linking from the parse script. Edge-to-edge highlight flash on collapse (`-mx-8 px-8`).
- **Narrative prose styling** — expanded chapters render in **Lora serif** font (loaded via next/font/google) with an **accent-colored drop cap** (2.8em, bold, floated left) on the first paragraph and a **diamond glyph separator** (◆, accent color, 50% opacity) between the first paragraph and the body prose. Default prose size 16px (1rem), adjustable via text-size control.
- **Chapter bottom nav** — every expanded chapter has a solid accent-colored × close button and a "Read Next Chapter" button matching the READ THE FULL CHAPTER style (solid accent, white text, bold, book icon, circle arrow, next chapter title + number). Last chapter shows only the ×.
- **Save-my-place** — while reading a chapter, scroll position is auto-saved to localStorage (debounced 500ms, stores chapter number + scroll percentage). When returning to a TL with saved progress, an accent-colored "Continue Reading" banner shows chapter name and percentage; tap to resume at the saved position, × to dismiss. Progress expires after 90 days.
- **Image enrichment** — Commons thumbnails + Wikipedia page image fallback, all verified at build time
- **Image captions** — hand-written captions in `.caption-overrides.json`, informal 1–2 sentence voice
- **Dark mode** — class-based, hardcoded `dark` on `<html>` in layout.tsx (anti-flash script only removes it if user has explicitly chosen light). Background `#22201e` warm dark, matches the navigator's Stone theme. `color-scheme: dark` declared so iOS Safari doesn't apply auto-dark. Bottom sheets use lighter `--surface` `#2f2c29` for elevation. The `theme-color` meta tag updates on toggle (dark: `#22201e`, light: `#ede5d3`) so the iOS notch/status bar matches the page background in both modes.
- **Light mode** — parchment background `#ede5d3` (warm yellowy cream), matching the notch/status bar via theme-color meta tag.
- **Text size** — 5 steps (14-22px), default 16px (index 1), persisted, affects summaries, chapter headers, and prose equally via relative `em` units
- **WCAG AA contrast** — all text passes 4.5:1, accent colors have light/dark mode variants
- **Viewport lock** — touch-action: pan-y prevents horizontal drift on mobile
- **Lightbox** — double-tap to toggle zoom (exactly centered on tap point), pinch, pan, swipe-down dismiss, backdrop tap dismiss. Scroll position preserved across open/close.
- **Gestures**: tap chapter header to toggle summary; swipe-right on expanded chapter to collapse; swipe-right on summary page navigates home
- **Image review** — two pages: `/review/{tlId}` for QA of current images, `/candidates/{tlId}` for approving/rejecting new candidates with editable captions. These are dev-only — stashed out of the tree during static build via `scripts/build-static.mjs` so production doesn't include them.
- **Chapter expand/collapse scroll** — on expand (user tap or cross-link auto-expand via `?chapter=N`), always `window.scrollTo({top: 0})`. Because siblings are `display: none` while one chapter is open, the opened chapter is always the first visible chapter and sits right below the h1 + "N chapters" subtitle, so scrollY=0 shows sticky nav → h1 → subtitle → chapter header stacked naturally. On collapse, `sectionRef.scrollIntoView({block: 'start'})` honors the section's `scrollMarginTop: navHeight` so the just-closed chapter header lands cleanly below the sticky nav (previous headerRef-based version hid it behind the nav).
- **TL Navigator (home at `/`)** — custom-touch scroll flow layout of 91 civilizations. `TlFlow` (in `tl-flow.tsx`) owns scroll completely: vertical-only, rAF friction momentum, each row rendered as a single `translate3d(x, y, 0)` per frame. Row x is a diagonal offset (row y in viewport × max indent) plus a gap-aware year-offset so chronological clusters pack tight and big historical jumps spread. Rows in the bottom third ease in from the lower right. Desktop mouse support via parallel `pointerup` listener. Constants live in `tl-flow.tsx`.
- **Navigator header** — "Stuff Happened" (18px bold) with small "v1 ↗" pill to `https://v1.stuffhappened.com`. Navigator flow starts at 25% from the top of the viewport (FLOW_TOP_PAD_FRAC = 0.25) so the first TL appears 3/4 of the way up the screen.
- **Stone theme** — the only navigator theme. Warm dark bg `#22201e`, region palette, line-style bars: row 1 colored hairline + dot + name, row 2 faded dates + chain chip, row 3 italic subtitle.
- **Chain chip** — tagged `data-chain-chip="1"` + `data-chain-id="..."` with `pointer-events: auto` on an otherwise non-interactive row. Tap hit-tested via `elementFromPoint(...).closest('[data-chain-chip]')`.
- **Subtitles** — every NavigatorTl has a short descriptive+evocative tagline rendered in small italic below the name.
- **hasContent dimming** — rows with `hasContent: true` (25 shipped TLs) render at full opacity; others at 0.35.
- **Tap to navigate** — short tap on a `hasContent` row uses `window.location.href` (NOT `router.push`). Client-side React transitions leave iOS Safari's scroll engine stuck; a hard nav discards the page and starts fresh.
- **Zone toggles** — single tap toggles a zone; double-tap solos it; double-tap again restores all five.
- **Chain-solo mode** — tapping a row's chain chip solos its chain (see `project_navigator_chain_solo.md` memory and `tl-flow.tsx` `soloChainId` prop). Non-members slide off-screen right and fade; members stack centered, 650ms eased transition. The old "chain pull" animation is gone.
- **WebP chapter maps** — stored as `.webp` quality 85 under `public/maps/{tlId}/chapter-{N}.webp`, converted via `scripts/optimize-maps.mjs` + sharp. 56 MB → 2.1 MB total with no visible quality loss.
- **iOS scroll hardening** — navigator uses `position: fixed; height: 100svh`; body locked while mounted; cleanup forces reflow + `window.scrollTo(0, 1); scrollTo(0, 0)` to kick Safari's scroll engine.
- **Offline reading (per-TL download)** — hand-rolled service worker at `public/sw.js`. `npm run parse` emits `public/offline/{tlId}.manifest.json` for every shipped TL, listing the page URL + every chapter-map WebP on disk + every Wikimedia event/glossary thumbnail URL. A cloud button in the navigator header opens a bottom-sheet `OfflineLibrarySheet` listing all `hasContent` TLs with per-row download/delete controls. Tap a row to populate `offline-tl-{tlId}-v1` cache (~15–20 MB per TL); tap again to wipe it. The SW uses **network-first for navigation requests** (so deployments show up immediately online) and **cache-first for assets**. `matchWithSlashVariants` handles the `/{tlId}` vs `/{tlId}/` mismatch, and the download loop caches both variants. A client-side guard in `tl-flow.tsx` checks `navigator.onLine` + download status before navigating — tapping a non-downloaded TL offline opens the library sheet instead of stranding the user. Dev-mode: SW registers on localhost but the fetch handler bails out to avoid fighting HMR. See `project_offline_reading.md` memory for the architecture and the tripwire list.
- **Summary text selection** — sticky chapter header is split into a clickable top row (number + title + date + chevron, `select-none`) and a sibling non-clickable summary area (READ button + bullet list, default text selection).
- **Globe (`/globe`)** — D3 orthographic SVG globe with 86 civilizations, consolidated from the former `/globe2` route. Old WebGL globe.gl (`globe-view.tsx`) is dead code. Key features:
  - **Color-coded by region** — 10 groups (Near East amber, Africa rust, Europe blue, Asia violet/red, Americas green, Steppe brown, Islamic green, SE Asia teal, Oceania sky). Pins, region polygons, leader-line labels, info cards, hover tooltips, and drawer headers all use group colors.
  - **Two-path country rendering** — one `<path>` for all land fill + one for all borders. Critical for drag performance.
  - **Drag to rotate** — pointer events with RAF-throttled state updates. Trackpad: two-finger swipe left/right pans, up/down zooms.
  - **Tap-hold-drag zoom** — Apple Maps style: tap once, tap again and hold, drag up to zoom in / down to zoom out. Double-tap also zooms in.
  - **Civ pins** — visible only on the near hemisphere, year-filtered. Explicit `r` attribute on circles (6px mobile, 3.5px desktop). Click → animated spin-to-civ + zoom-to-fit-extent + region polygon highlight + info card.
  - **Leader-line labels** — collision-avoiding placement (tries 4 directions), tinted with civ's region color.
  - **Timeline scrubber** — year slider from 5000 BCE to 1700 CE with density waveform. Mobile: taller (96px), slanted era markers, year/count below slider.
  - **Drawer sidebar** — 10 region groups with color + count, search, sticky header + search bar, dimmed-but-clickable items outside current year with explainer text, close button.
  - **Info card** — chain position (e.g. "CHINA 4/12"), civ name, dates, summary, cities, era strip in group color. "Read the full story →" button for shipped TLs.
  - **Globe ↔ Navigator sync** — 86 globe civs mapped to 91 navigator TLs via `GLOBE_TO_READER` in `globe2-data.ts`. Sub-civs show parent name in parens (e.g. "Silla / Unified Silla (Ancient Korea)"). All 25 shipped TLs reachable from globe.
  - **Matched headers** — both home page and globe share identical header: "STUFF HAPPENED" eyebrow, *Historica* Lora italic title, *List View* / *Globe View* underline toggle, dark mode toggle. Pixel-matched sizes and spacing.

## Reader Features (planned)
- Footnotes
- Theme threads (track a concept across chapters)
- Outline summaries
- Top drawer: interactive map (Ch 1), self-building timeline (Ch 2+)
- Navigator: scroll-to-reveal off-screen chain siblings during chain pull (currently siblings off-screen are pulled but invisible)

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
Narratives follow the chain order from `reference-data/tl-chains.ts`:

**Mesopotamian Succession chain** (in progress):
1. ✅ mesopotamia — 13 chapters, fully audited (plus a 2026-04-15 backward Persona-E audit against China/Nubia/Elam that corrected 6 factual errors across Ch 3/5/6/11/13 and a summary fact-precision pass that fixed 5 bullets), 82 curated event links, **336 glossary links**, **121 summary bullets across 13 chapters**, **34 cross-links** (up from 11 after the 2026-04-15 structural audit), 84/89 images (95%), 13 WebP chapter maps, label "Mesopotamia"
2. ✅ assyrian-empire — 8 chapters (~16.4k words), label "Assyrian Empire", 67 reference events, 64 event links, 183 glossary links, 18 cross-links, 68 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers Old Assyrian trade colonies through fall of Nineveh (-2500 to -609 BCE). Central thesis: the world's first superpower — organized violence as statecraft, brilliant until it wasn't.
3. islamic-golden-age

**Indian Subcontinent chain** (in progress):
1. ✅ indus-valley — 10 chapters, audited (plus 2026-04-15 backward Persona-E pass + summary factcheck — 2 narrative corrections on Ch 1/4/6/8 + 0 summary drifts; summaries came back clean), 66 event links, **226 glossary links**, **69 summary bullets**, **37 cross-links** (up from 28 after the 2026-04-15 structural audit; still the heaviest Indus→Meso edge), 48/56 images (86%), 10 WebP chapter maps, label "Indus Valley"
2. ✅ vedic-period — 8 chapters (~17k words), label "Vedic Period", 66 reference events, 64 event links, 187 glossary links, 17 cross-links, 7 WebP chapter maps (Ch 4 thematic), full audit + fixes. Covers Indo-Aryan migrations through birth of Buddhism/Jainism to Maurya doorstep (-1500 to -322 BCE). Central thesis: India's second civilization was built on words, not cities — hymns memorized without writing became the foundation of the world's oldest continuously practiced religion.
3. ✅ maurya-empire — 8 chapters (~16k words), label "Maurya Empire", 69 reference events, 60 event links, 195 glossary links, 17 cross-links, 8 chapter map prompts (maps pending Gemini generation), full audit + fixes. Covers Chandragupta's conquest through Ashoka's dharma experiment to the Shunga coup (-322 to -185 BCE). Central thesis: Chandragupta answered with the Arthashastra's ruthless pragmatism, Ashoka with dharma — the first ruler in history to carve his regrets into stone.
4. post-maurya-kingdoms
5. gupta-empire
6. medieval-india
7. delhi-sultanate
8. mughal-empire
9. modern-india

**Chinese Dynasties chain** (in progress):
1. ✅ ancient-china — 8 chapters (~20k words), full 5-persona audit (all 8 STRONG), summary factcheck clean (3 CHECK fixes applied in Ch 3/6/7), 37 event links, **208 glossary links**, **52 summary bullets**, **22 cross-links** (up from 17 after the 2026-04-15 structural audit, closes the China↔Elam zero-gap), label "Ancient China", **8 WebP chapter maps** (Ch 4/7/8 regenerated under strict-rules redo pass). Backward cross-cultural pass applied to Mesopotamia and Indus Valley.
2. ✅ shang-dynasty — 8 chapters (~17.4k words), label "Shang Dynasty", 69 reference events, 69 event links, 195 glossary links, 15 cross-links, 63 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers Erligang expansion through Battle of Muye (-1600 to -1046 BCE). Central thesis: where Chinese civilization stops being archaeology and starts being history — oracle bones, bronze kings, and the invention of the Mandate of Heaven.
3. ✅ zhou-dynasty — 9 chapters (~17.1k words), label "Zhou Dynasty", 66 reference events, 64 event links, 178 glossary links, 14 cross-links, 9 WebP chapter maps, full audit + fixes. Covers Western Zhou feudalism through Warring States to Qin conquest (-1046 to -256 BCE). Central thesis: they invented the Mandate of Heaven and spent eight centuries proving their own theory right — producing Confucius, Laozi, Sunzi, and the intellectual foundations of Chinese civilization.
4. ✅ qin-dynasty — 8 chapters (~16k words), label "Qin Dynasty", 66 reference events, 60 event links, 173 glossary links, 17 cross-links, 7 chapter map prompts (Ch 8 reflection, maps pending Gemini generation), full audit + fixes. Covers Legalist state-building through First Emperor's unification to collapse in 15 years (-356 to -206 BCE). Central thesis: you can unify a civilization by terror — the system shatters the moment the hand loosens, but the China it built lasted two thousand years.
5. han-dynasty
6. six-dynasties
7. tang-song-china
8. yuan-dynasty
9. ming-dynasty
10. qing-dynasty
11. chinese-revolution
12. rise-of-china

**Nile Valley chain** (in progress):
1. ✅ early-dynastic-egypt — 8 chapters (~25k words), label "Early Egypt", 68 reference events, ~55 event links, ~209 glossary links, ~20 cross-links, 59 summary bullets, 8 WebP chapter maps (zero redos), full audit + fixes. Covers predynastic through Second Dynasty (-5000 to -2686 BCE).
2. ✅ old-kingdom-egypt — 8 chapters (~17.7k words), label "Old Kingdom Egypt", 67 reference events, 57 event links, 191 glossary links, 15 cross-links, 66 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers Third Dynasty through First Intermediate Period reunification (-2686 to -2055 BCE). Central thesis: faith converted into engineering, then the engineering collapsed but the ideas survived.
3. ✅ new-kingdom-egypt — 9 chapters (~17.2k words), label "New Kingdom Egypt", 72 reference events, 68 event links, 196 glossary links, 20 cross-links, 9 WebP chapter maps, full audit + fixes. Covers Middle Kingdom through Bronze Age Collapse (-2055 to -1069 BCE). Central thesis: three reinventions, each more ambitious and more brittle — literary renaissance, chariot empire, monumental superpower, then the Bronze Age took it all away.
4. late-egypt

**Nubian Tradition chain** (in progress):
1. ✅ ancient-nubia — 8 chapters (~24k words), full pipeline, 8 WebP chapter maps. Chain color: ochre/yellow (`nubian-tradition`).
2. ✅ kingdom-of-kush — 8 chapters (~24k words), 55 reference events, 58 event links, 184 glossary links, 19 cross-links, 64 summary bullets, 8 WebP chapter maps (1 redo for pyramid count), full audit + fixes. Covers Napatan rise through Aksumite conquest (-1070 to 350 CE).
3. kingdom-of-aksum

**Persian Tradition chain** (in progress):
1. ✅ elamite-civilization — 8 chapters (~24k words), full pipeline, 8 WebP chapter maps. Central thesis: Elam never died — it became the bureaucratic spine of Persia. Chain color: `persian-tradition`.
2. ✅ persian-empire — 10 chapters (~15.5k words), 71 reference events, 62 event links, 164 glossary links, 15 cross-links, 86 summary bullets, 10 WebP chapter maps (zero redos), full audit + fixes. Covers Cyrus through Arab conquest (-559 to 651 CE). Central thesis: Persia absorbs what it conquers.
3. safavid-persia

**Andean chain** (in progress):
1. ✅ early-andean-civilizations — 8 chapters (~16k words), label "Early Andean", 69 reference events, ~61 event links, ~193 glossary links, ~18 cross-links, 56 summary bullets, 8 WebP chapter maps (zero redos), full audit + fixes. Covers Norte Chico/Caral through Chavín to Paracas (-3500 to -200 BCE).
2. andean-kingdoms
3. middle-horizon-empires

**Mesoamerican chain** (in progress):
1. ✅ olmec-civilization — 8 chapters (~14.5k words), label "Olmec", 68 reference events, 63 event links, 180 glossary links, 13 cross-links, 8 WebP chapter maps, full audit + fixes. Covers Gulf Coast Olmec from modern discovery through Epi-Olmec legacy (-1600 to -100 BCE). Central thesis: Mesoamerica's forgotten founders — colossal heads, rubber, the calendar, writing, zero, the ballgame, and the mother culture debate. Chain color: green (`mesoamerican`).
2. maya-civilization
3. aztec-empire

**Greco-Roman chain** (in progress):
1. ✅ minoan-civilization — 8 chapters (~17.5k words), label "Minoan", 66 reference events, 61 event links, 201 glossary links, 13 cross-links, 66 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers Neolithic Crete through Subminoan period (-7000 to -1100 BCE) plus modern rediscovery (1878-1952). Central thesis: Europe's first civilization was Cretan, not Greek, reconstructed from pictures and ruins because the language is locked. Chain color: blue (`greco-roman`).
2. ✅ mycenaean-civilization — 8 chapters (~17.4k words), label "Mycenaean", 67 reference events, 67 event links, 245 glossary links, 17 cross-links, 64 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers shaft graves through Greek Dark Ages (-1600 to -800 BCE). Central thesis: Greece before Greece knew it was Greek — the warriors whose memory became Homer.
3. ancient-greece
4. ancient-rome
5. byzantine-empire

**Korean Civilization chain** (in progress):
1. ✅ ancient-korea — 8 chapters (~16k words), label "Ancient Korea", 65 reference events, 65 event links, 207 glossary links, 16 cross-links, 64 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers Dangun founding myth through Unified Silla to Goryeo (-2333 to 935 CE). Central thesis: the peninsula that refused to be swallowed — borrowed everything from China, remained stubbornly Korean. Chain color: violet (`korean-civilization`).
2. joseon-korea
3. korean-modern

**Anatolian Succession chain** (in progress):
1. ✅ hittite-empire — 8 chapters (~18.5k words), label "Hittite Empire", 70 reference events, 66 event links, 204 glossary links, 16 cross-links, 65 summary bullets, 8 WebP chapter maps, full audit + fixes. Covers pre-Hittite Hatti through Bronze Age Collapse to Neo-Hittite states (-2500 to -700 BCE) plus 19th-century rediscovery. Central thesis: the forgotten superpower — world-historic and completely forgotten for 3,000 years. Chain color: orange-red (`anatolian-succession`).
2. ottoman-empire

**Standalone TLs (no chain):**
- ✅ phoenicia — 8 chapters (~16k words), label "Phoenicia", 71 reference events, 69 event links, 192 glossary links, 63 summary bullets, 8 chapter map prompts (maps pending Gemini), full audit + fixes. Covers Levantine coast from Bronze Age through destruction of Carthage (-1500 to -146 BCE). Central thesis: never built an empire — built something more durable: the alphabet, the trade routes, the colonies. Accent color: amber `#b45309`.
- ✅ polynesian-voyagers — 8 chapters (~16k words), label "Polynesian Voyagers", 70 reference events, 70 event links, 214 glossary links, 67 summary bullets, 8 chapter map prompts (maps pending Gemini), full audit + fixes. Covers Lapita expansion through Polynesian Triangle settlement (-1500 to 1300 CE). Central thesis: the greatest exploration in human history, without metal, writing, compasses, or maps. Accent color: sky `#0ea5e9`.
- ✅ ancient-israel — 8 chapters (~16k words), label "Ancient Israel", 71 reference events, 71 event links, 199 glossary links, 67 summary bullets, 8 chapter map prompts (maps pending Gemini), full audit + fixes. Covers Hebrew kingdoms from Saul through Babylonian exile (-1020 to -586 BCE). Central thesis: a tiny kingdom in a terrible location that produced the most influential collection of texts in human history. Accent color: gold `#ca8a04`.

## Color System
- **Chain-driven accent colors**: defined in `src/lib/accent-colors.ts`. Every TL in the same chain gets the same accent color; every chain in the same region gets a distinct shade of the region's color family. Region families: Near East = amber/orange (#d97706), Africa = rust red (#b44d3b), Asia = violet/purple, Europe = blue/sky, Americas = green, Global = slate. `getAccentColors(tlId)` looks up the TL's first chain via `getChainsForTimeline` and returns the chain color (falling back to per-TL overrides or neutral gray).
- **All 18 chain entries contrast-verified**: text on white ≥4.5:1, white on badge ≥3:1 (AA-lg), base on dark `#0a0a0a` ≥4.5:1. Check via the Python script in the accent-colors comment history when adding a new shade.
- **Category colors**: 8 event categories in `src/lib/categories.ts` with light/dark mode variants.

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section — a brief numbered list of what was completed with one sentence per item.

## Git
Always commit and push completed work without asking.
