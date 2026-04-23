# Session Handoff — 2026-04-22b

**Branch:** main
**Last commit:** `fa3b24c` — Chain position inherits font-bold
**Commits this session:** 55
**Auto-deploy:** Cloudflare Workers auto-deploy from main. Manual fallback: `npx wrangler deploy`.

## Session Summary
New editorial home page ("The Civ Lib") replacing the old TL Navigator at `/`. Major typography and color system overhaul across home page and reader. Chapter subtitles added to all 16 TLs.

## What Was Built

### New Home Page (`/`)
- **Mobile**: horizontal swim-lane ribbon (5 region lanes) + scrolling civ list with DOM-only active state highlighting (zero React re-renders during scroll). IntersectionObserver replaced with scroll-position math + 300ms settle timer. Ribbon auto-scrolls to active bar.
- **Desktop**: lane-packed ribbon (first-fit algorithm) + detail pane with chain grid index. Bar click centers bar start, updates detail pane, auto-scrolls chain grid.
- **Civ icons strip**: 11 PNG civilization icons (sphinx, lamassu, faravahar, torii, lotus, etc.) as decorative border between header and ribbon.
- **Region labels**: gradient fade overlay (solid under labels → transparent) so bar content dissolves before reaching text.
- **Last-viewed civ**: reader saves `localStorage['last-viewed-civ']`, home page reads it on mount and scrolls to that row.
- **Title**: "The Civ Lib" in italic Lora.
- Old TL Navigator preserved at `/navigator`.

### Typography Framework
- Unified 5-level type scale across home page and reader: page title 22px, section title 18px, subtitle 14px italic Lora, meta 13px tabular-nums, labels 11px uppercase.
- Chapter headers scale with `--prose-size` via CSS calc vars (`--ch-title` ×1.125, `--ch-subtitle` ×0.875, `--ch-meta` ×0.8125).
- Text size control removed from reader nav; default prose size 16px. Stale `localStorage['textSize']` actively cleaned up on page load.

### Chapter Subtitles
- Added `subtitle` field to `NarrativeChapter` type, parse script, and all 16 summaries JSON files (137 chapters total).
- Short descriptive one-liners for every chapter, rendered in italic Lora below title and above dateRange.

### Color System Changes
- **Africa**: gold/ochre → rust red (`#b44d3b`). Chain accents updated (nile-valley, nubian-tradition, west-african-empires).
- **Near East**: standardized to `#d97706` (matching chain accent on reader pages).
- **Light mode background**: lightened from `#ede5d3` to `#f5f0e8`.

### Reader Fixes
- **Continue Reading banner**: dismissed state persisted to localStorage; only reappears if user actually scrolls in a chapter after dismissing.
- **Cross-link sheet button**: solid accent bg + white text + Lora font (matching READ THE FULL CHAPTER style).
- **Chapter title nowrap**: last word + chevron wrapped in `whitespace-nowrap` so icon never strands alone.
- **"Before the Pharaohs"** renamed to **"Early Egypt"** (academically correct — the TL includes the first pharaohs).

### Mobile Scroll Performance
- Replaced IntersectionObserver with scroll-position math (rAF-throttled, deterministic).
- Active row highlighting via direct DOM attribute toggle + CSS — zero React re-renders during scroll.
- React state (ribbon sync) deferred until 300ms after scroll stops.
- 800ms lock-out after bar tap prevents scroll handler from overriding the selection.
- `scrollTop < 20` always selects first civ (prevents iOS rubber-band bounce-back issue).

## What Still Needs Doing

### Immediate
1. **Generate 56 chapter maps** — prompts ready in `map-prompts/` for all 7 new TLs. Gemini thinking mode, save PNGs, run WebP optimizer.
2. **Backward cross-cultural pass** — Persona E audit reports have backward findings for all 7 new TLs.

### Next TLs
Natural chain progressions: ancient-greece, zhou-dynasty, new-kingdom-egypt, kingdom-of-aksum, vedic-period, islamic-golden-age, safavid-persia.

## All 16 Shipped TLs
1. mesopotamia (13 ch, maps done)
2. indus-valley (10 ch, maps done)
3. ancient-china (8 ch, maps done)
4. ancient-nubia (8 ch, maps done)
5. elamite-civilization (8 ch, maps done)
6. early-dynastic-egypt (8 ch, maps done) — label now "Early Egypt"
7. early-andean-civilizations (8 ch, maps done)
8. persian-empire (10 ch, maps done)
9. kingdom-of-kush (8 ch, maps done)
10. minoan-civilization (8 ch, maps pending)
11. old-kingdom-egypt (8 ch, maps pending)
12. ancient-korea (8 ch, maps pending)
13. assyrian-empire (8 ch, maps pending)
14. hittite-empire (8 ch, maps pending)
15. mycenaean-civilization (8 ch, maps pending)
16. shang-dynasty (8 ch, maps pending)

## Key Files Changed This Session
- `src/app/page.tsx` — swapped TlNavigator for ChronologyPage
- `src/components/chronology/*` — 7 new files (chronology-page, header, ribbon, civ-list, detail-pane, chain-grid, civ-icons-strip)
- `src/lib/chronology-data.ts` — new data module
- `src/lib/navigator-tls.ts` — region colors updated
- `src/lib/accent-colors.ts` — Africa chain colors: gold → rust red
- `src/lib/types.ts` — NarrativeChapter.subtitle added
- `src/app/globals.css` — ch-title/subtitle/meta CSS vars, civ-row active styles, light mode bg
- `src/app/layout.tsx` — localStorage cleanup, light mode color
- `src/components/chapter-accordion.tsx` — subtitle rendering, scaling vars, nowrap chevron
- `src/components/narrative-reader.tsx` — last-viewed-civ save, continue-reading dismiss persistence
- `src/components/cross-link-sheet.tsx` — solid accent button style
- `narratives/*.summaries.json` — all 16 files updated with chapter subtitles
- `public/icons/*.png` — 11 civilization icon PNGs
