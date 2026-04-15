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
- **Build**: `npm run parse` converts markdown narratives → JSON with event links, enriched images, and chapter maps
- **Dev**: `npm run dev` → localhost:3000

## Content Pipeline
0. **Pull v1 reference data** — before starting a new TL, check `~/projects/personal/timeline/src/data/{tlId}.json`. v1 has curated pitch/spans/events for most of the 71 navigator TLs in the same format as v2. Copy it to `reference-data/{tlId}.json` and write the narrative against it. Only build reference data from scratch if v1 genuinely has nothing.
1. **Write narrative** using all writing rules in `rewrite-fixes.md`
2. **Audit** using the 5-persona system in `.claude/skills/audit-narrative.md`
3. **Fix** audit findings
4. **Reconcile** — add any events/terms from the narrative that are missing from the TL reference data
5. **Curate event links** — read each chapter and place links in `content/.event-links-{tlId}.json`
6. **Enrich events** — `npm run parse` fetches thumbnails + Wikipedia extracts (cached)
7. **Generate chapter maps** — use Gemini with prompts from `map-prompts.md`, save to `public/maps/{tlId}/chapter-{N}.png`
8. **Review images** — `/review/{tlId}` page for approving/rejecting event images

## File Structure
```
src/
  app/
    page.tsx                    — home: renders TlNavigator (the flow navigator IS the home page)
    navigator/page.tsx          — /navigator: alias route, also renders TlNavigator
    [civilizationId]/
      layout.tsx                — accent color wrapper
      page.tsx                  — single-page accordion reader
    review/[civilizationId]/    — image review page
    api/review/                 — saves review results to file
  components/
    chapter-accordion.tsx       — expandable chapter with sticky header + map
    narrative-reader.tsx        — client wrapper for event link click delegation
    event-sheet.tsx             — bottom sheet for event details (image, caption, details, wiki)
    lightbox.tsx                — pinch-to-zoom fullscreen image viewer
    dark-mode-toggle.tsx        — sun/moon toggle, persisted to localStorage
    text-size-control.tsx       — 5-step font size control (14-22px)
    civilization-card.tsx       — home page card
    image-review.tsx            — approve/reject images with notes
    tl-navigator/
      tl-navigator.tsx          — navigator shell: header, zone toggles, body scroll lock, mounts TlFlow
      tl-flow.tsx               — custom-touch-scroll flow renderer: diagonal layout, chain pull, chain icons, tap nav
      tl-swimlanes.tsx          — legacy swim-lane gantt renderer (kept for reference, no longer mounted)
      zone-toggles.tsx          — 5 zone filter pills (Near East/Africa/Asia/Europe/Americas); double-tap = solo
  lib/
    data.ts                     — reads content JSON at build time
    types.ts                    — NarrativeChapter, TlEvent, TimelineNarrative, etc.
    accent-colors.ts            — per-TL accent colors with WCAG-safe text/badge variants
    categories.ts               — event category metadata (colors for 8 categories)
    navigator-tls.ts            — 71 navigator TLs with region, startYear, endYear, subtitle (descriptive tagline), hasContent flag (true for mesopotamia, indus-valley, ancient-china)
    navigator-themes.ts         — Stone theme constants (warm dark bg, region palette, row height)
scripts/
  parse-narratives.ts           — markdown → JSON build pipeline
  enrich-events.ts              — Wikimedia API: thumbnails, extracts, captions (cached)
  linkify.ts                    — legacy regex linkifier (replaced by curated links)
narratives/                     — chapter-based prose narratives (one .md per civilization)
reference-data/                 — TL JSON files from v1 (events, spans, chains)
content/                        — generated JSON (gitignored except override files)
  .event-links-{tlId}.json     — curated event link placements per chapter
  .caption-overrides.json       — manual image captions (overrides Commons descriptions)
  .image-overrides.json         — manual image file replacements
  .image-rejections.json        — rejected images with reasons
  .enrichment-cache.json        — Wikimedia API cache (gitignored)
public/maps/{tlId}/             — chapter map images (chapter-{N}.png)
audits/                         — audit reports from the 5-persona pipeline
```

## Reader Features (built)
- **Single-page accordion** — all chapters on one page, only one open at a time (siblings `display: none`)
- **Sticky controls** — back link, text size (A/A), dark mode toggle always visible
- **Chapter maps** — Gemini-generated maps at top of each expanded chapter with lightbox zoom (reserved aspect ratio so expand-scroll lands cleanly)
- **Event links** — curated context-aware links in prose, colored by category (8 categories)
- **Glossary links** — gray solid underline, curated per-chapter, opens bottom sheet with Wikipedia extract. Also work inside event wiki extracts.
- **Event bottom sheet** — tap a linked event for image, caption, details sections, Wikipedia extract, read-more link. Swipe down or tap header to dismiss.
- **Glossary sheet** — gray-themed smaller variant of EventSheet.
- **Summary bullets** — optional chronological bullet summary per chapter (with inline event/glossary links) + big "Read Chapter N →" button. Replaces the paragraph+chips layout. Used for all of Indus Valley.
- **Image enrichment** — Commons thumbnails + Wikipedia page image fallback, all verified at build time
- **Image captions** — hand-written captions in `.caption-overrides.json`, informal 1–2 sentence voice
- **Dark mode** — class-based, hardcoded `dark` on `<html>` in layout.tsx (anti-flash script only removes it if user has explicitly chosen light). Background `#22201e` warm dark, matches the navigator's Stone theme. `color-scheme: dark` declared so iOS Safari doesn't apply auto-dark. Bottom sheets use lighter `--surface` `#2f2c29` for elevation.
- **Text size** — 5 steps (14-22px), persisted, affects both summaries and prose equally
- **WCAG AA contrast** — all text passes 4.5:1, accent colors have light/dark mode variants
- **Viewport lock** — touch-action: pan-y prevents horizontal drift on mobile
- **Lightbox** — double-tap to toggle zoom (exactly centered on tap point), pinch, pan, swipe-down dismiss, backdrop tap dismiss
- **Gestures**: tap or swipe-right on chapter header to collapse; swipe-right on summary page navigates home
- **Image review** — two pages: `/review/{tlId}` for QA of current images, `/candidates/{tlId}` for approving/rejecting new candidates with editable captions
- **TL Navigator (home at `/`)** — custom-touch scroll flow layout of 71 civilizations. Vertical-only scrolling; each row has a fixed sqrt-compressed-duration bar width and its horizontal position is recomputed per frame from the row's y in the viewport (diagonal) plus a per-row year-gap offset (anchor-based). No global time axis. `TlFlow` (in `tl-flow.tsx`) owns scroll completely: container has `overflow: hidden` and `touch-action: none`, touchstart/move/end handlers track velocity and call a single `render()` that writes one `translate3d(x, y, 0)` per row. Friction-based momentum via rAF (`FRICTION = 0.94`).
- **Stone theme** — the only navigator theme left. Warm dark bg `#22201e`, region palette, line-style bars (thin colored hairline + dot + name + faded dates on one row, italic subtitle below), row height 56.
- **Gap-aware horizontal spacing** — each row's natural x is `(rowCenterY/vh) * maxIndent + (cumGap[i] - anchorCum) * H_GAP_SCALE`, where `cumGap[i]` is cumulative `sqrt(startYear - prev.startYear)` and `anchorCum` is interpolated at the fractional topmost visible row. Chronological clusters of similar-era TLs pack tight; big historical jumps produce a visibly wider horizontal step. `MAX_INDENT_FRAC = 0.3`, `H_GAP_SCALE = 0.38`.
- **Entry zone** — rows whose center y is in the bottom third of the viewport ease out from `entryX = 0.85*vw` toward their natural x. New TLs visibly glide in from the lower right as they scroll up, locking into the diagonal as they cross into the top two-thirds.
- **Subtitles** — every NavigatorTl has a short descriptive+evocative tagline (place anchor + flavor hook) rendered beneath the civ name in small italic.
- **hasContent dimming** — rows with `hasContent: true` (mesopotamia, indus-valley, ancient-china) render at full opacity; others at 0.35 so they read as "not written yet".
- **Tap to navigate** — short tap on a row with `hasContent` uses `window.location.href` (NOT `router.push`) to force a full browser load. Client-side React transitions leave iOS Safari's scroll engine in a stuck state and the first few touches on the narrative page get swallowed; a hard navigation discards the whole page and starts fresh.
- **Zone toggles** — single tap toggles a zone on/off; double-tap solos it (enables only that zone); double-tap again restores all five.
- **Chain icon + chain pull** — every TL that belongs to at least one chain (from `reference-data/tl-chains.ts`) shows a small chain-link SVG at the right edge of its row (positioned via a separate ref'd element, `translate3d(0, y, 0)`). Tapping in the right `ICON_TAP_WIDTH = 48px` zone of the row starts a chain-pull animation: phase 1 (400ms, ease-out) slides every visible chain sibling's x toward the tapped row's x (y unchanged, so vertical alignment is preserved and the chain reads as a column), phase 2 holds for 200ms, phase 3 (600ms, ease-in) releases back to natural. `PULL_STRENGTH = 0.8`. Siblings off-screen are still pulled but invisible; that's a known limitation (not yet addressed). `chainMembers` useMemo builds `Map<rowIdx, Set<rowIdx>>` from the union of chains in the current filtered tls list.
- **iOS scroll hardening** — navigator wrapper uses `position: fixed; height: 100svh` (not `inset: 0`, which would extend behind the Safari bottom toolbar). Body is locked via `position: fixed`, `overflow: hidden`, `touch-action: none`, `overscroll-behavior: none` while the navigator is mounted; cleanup restores explicit values, forces a reflow, and calls `window.scrollTo(0, 1); scrollTo(0, 0)` to kick the scroll engine.

## Reader Features (planned)
- Save-my-place (tap any sentence)
- Footnotes
- Theme threads (track a concept across chapters)
- Deep links to specific sections
- Outline summaries
- Top drawer: interactive map (Ch 1), self-building timeline (Ch 2+)
- Navigator: scroll-to-reveal off-screen chain siblings during chain pull (currently siblings off-screen are pulled but invisible)

## Writing Rules (summary — full rules in rewrite-fixes.md)
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

**Mesopotamian Succession chain** (pilot — complete):
1. ✅ mesopotamia — 13 chapters, fully audited, 85 curated event links, **334 curated glossary links**, **84/89 images (95%)**, 13 chapter maps (verified)

**Indian Subcontinent chain** (in progress):
1. ✅ indus-valley — 10 chapters, audited, 66 curated event links, Ch 1 glossary (28 terms), **48/56 images (86%)**, **chronological summary bullets for all 10 chapters**, 10 chapter maps
2. vedic-period
3. maurya-empire
4. post-maurya-kingdoms
5. gupta-empire
6. medieval-india
7. delhi-sultanate
8. mughal-empire
9. modern-india

**Chinese Dynasties chain** (in progress):
1. ✅ ancient-china — 8 chapters (~20k words), full 5-persona audit (Ch 3 and Ch 6 GOOD→STRONG after pass 1, all 8 STRONG), 37 curated event links (every event placed), chronological summary bullets for all 8 chapters, chapter maps pending. Backward cross-cultural pass applied to Mesopotamia and Indus Valley.
2. shang-dynasty
3. zhou-dynasty
4. qin-dynasty
5. han-dynasty
6. six-dynasties
7. tang-song-china
8. yuan-dynasty
9. ming-dynasty
10. qing-dynasty
11. chinese-revolution
12. rise-of-china

**Egypt chain** (after India/China):
- ancient-egypt series (TBD split)

## Color System
- **Chain-driven accent colors**: defined in `src/lib/accent-colors.ts`. Every TL in the same chain gets the same accent color; every chain in the same region gets a distinct shade of the region's color family. Region families: Near East = amber/orange, Africa = yellow/ochre, Asia = violet/purple, Europe = blue/sky, Americas = green, Global = slate. `getAccentColors(tlId)` looks up the TL's first chain via `getChainsForTimeline` and returns the chain color (falling back to per-TL overrides or neutral gray).
- **All 18 chain entries contrast-verified**: text on white ≥4.5:1, white on badge ≥3:1 (AA-lg), base on dark `#0a0a0a` ≥4.5:1. Check via the Python script in the accent-colors comment history when adding a new shade.
- **Category colors**: 8 event categories in `src/lib/categories.ts` with light/dark mode variants.

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section — a brief numbered list of what was completed with one sentence per item.

## Git
Always commit and push completed work without asking.
