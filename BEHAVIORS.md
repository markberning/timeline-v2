# Expected Behaviors

Source of truth for how the reader app should behave. Update this when we change or add a behavior so future work has a spec to check against.

## Chapter accordion
- **Collapsed state**: minimal row showing "01" chapter number in accent color, chapter title in Lora serif with inline rotating chevron, subtitle in italic, dateRange in tabular-nums. Gray `border-b` lines between chapters. All sizes scale proportionally with `--prose-size` via CSS calc vars.
- **Tap header → toggle summary** (NOT expand chapter). Summary expanded state shows READ THE FULL CHAPTER button (solid accent, white text) + "SUMMARY · FOR REVIEW" label + bullet list inside a left accent-colored vertical border.
- **READ THE FULL CHAPTER button** → expand that chapter. Other chapters become `display: none`.
- **Expand scroll**: `window.scrollTo({top: 0})`. Siblings are `display:none` so the opened chapter sits below h1 + subtitle. Same behavior for user tap and cross-link auto-expand (`?chapter=N`).
- **Collapse scroll**: `sectionRef.scrollIntoView({block: 'start'})` with `scrollMarginTop: navHeight`. Pulse with accent-colored background flash.
- Nav height measured once on mount via `querySelector('[data-top-nav]').getBoundingClientRect().height`.
- Chapter maps probed on mount with `new Image()`. `mapExists` starts as `null` — civs without maps never reserve the placeholder.
- Only one chapter open at a time. Scroll never spills past the open chapter.
- **Sticky mini map**: when chapter map scrolls out of view, 100px thumbnail appears fixed bottom-right. Tap → lightbox. Auto-hides when full map returns to view.

## Accent colors (region-driven)
- Every TL gets an accent color from its region in `navigator-tls.ts`. One color per region, no per-chain variations.
- Lookup: `getAccentColors(tlId)` in `src/lib/accent-colors.ts` maps tlId → region → `REGION_ACCENT_COLORS`.
- All entries contrast-verified: `text` on white ≥ AA 4.5:1, white on `badge` ≥ AA-lg 3:1.
- The navigator uses `STONE_THEME.regionColors` (one color per region) separately from these accent colors.

## Event link chips
- One pill per event referenced in that chapter, colored by category.
- Rendered under the collapsed chapter summary AND inline in chapter prose.
- Tap → opens `EventSheet` without toggling the chapter.

## Glossary links
- Gray background highlight, normal weight (even inside markdown bold).
- Curated per-chapter. Events win when a term overlaps.
- Tap → opens `GlossarySheet` with wiki extract + Wikipedia link.
- Also appear inside event wiki extracts; clicking one from inside EventSheet opens GlossarySheet on top.

## EventSheet
- Bottom sheet with `animate-slide-up`. Swipe down on header, tap header, × button, or tap backdrop closes.
- `event.description`, `event.details[].text`, and `event.wikiExtract` all rendered as HTML via `dangerouslySetInnerHTML` — parse runs glossary linking over all three fields.

## GlossarySheet
- Same gesture set as EventSheet but gray-themed.

## Lightbox
- Double-tap toggles zoom (1x ↔ 2.5x on tap point). Pinch zooms 1x–5x. Drag pans when zoomed.
- Swipe down (not zoomed) or tap backdrop dismisses. × button always dismisses.
- Scroll position saved before open, restored on close.

## Dark mode
- Background `#22201e` (warm dark), foreground `#e5e5e5`. Dark is default: `class="dark"` hardcoded on `<html>`, anti-flash script only removes it if `localStorage.theme === 'light'`. `color-scheme: dark` declared so iOS Safari doesn't auto-dark.
- Elevated surfaces use `--surface: #2f2c29`. Theme-color meta tag updates on toggle.

## Light mode
- Background `#f5f0e8` (warm cream). Theme-color meta tag updates to match.

## Text size
- Default 16px (1rem). Chapter headers scale via CSS calc vars from `--prose-size`.

## Save-my-place
- Scroll position auto-saved to localStorage every 500ms while a chapter is open. Stored as `reading-progress-{tlId}` → `{ chapter, scrollPct, timestamp }`.
- On return with saved progress: accent-colored "Continue Reading" banner (chapter name + percentage). Entire banner clickable; × dismisses. Banner reappears only if progress is newer than dismissal. 90-day expiry.

## Navigation
- Home page (`/`): Chronology page ("The Civ Lib"). Old TL Navigator at `/navigator`.
- Chapter page: single-page accordion, no per-chapter routes.
- **Swipe right on summary page** (dx > 80px, no chapter expanded) navigates home.
- **Last-viewed civ**: saved to `localStorage['last-viewed-civ']`, used by home page for initial highlight.
- **Whole-row tap**: tapping any `hasContent` row on home navigates to that civ.

## TL Navigator (`/navigator`)
Custom-touch scrolling flow layout of all 95 navigator civilizations with diagonal gap-driven positioning.

### Layout
- Fixed-position viewport, `height: 100svh`. Stone theme warm dark bg `#22201e`.
- Header (~88px): title + zone toggle pills. Body: `TlFlow` handles all rendering and scroll via JS touch handlers (no native scroll).
- Each row: 3 stacked lines (name, dates + chain chip, italic subtitle), `rowHeight = 72`, positioned via `translate3d` per frame.
- Row order is global chronological by `startYear` — array order in `navigator-tls.ts` is ignored.
- `hasContent: true` rows at full opacity; others at 0.35.

### Zones
- 5 zones: Near East, Africa, Asia, Europe, Americas. Single tap toggles; double-tap solos; double-tap solo restores all.

### Tap behavior
- Tap during momentum stops scroll without firing action.
- **Chip hit-test first**: `elementFromPoint` → `[data-chain-chip]`. Toggles chain-solo mode.
- **Navigation**: `hasContent` rows use `window.location.href` (NOT `router.push` — iOS Safari scroll stuck otherwise).

### Chain-solo mode
- Tapping a chain chip solos the chain. Non-members fade off-screen right; members stack centered. 650ms ease-in-out transition. Tapping the active chip exits.
- Two independent scroll offsets (flow + solo). Flow scroll preserved across enter/exit.
- Header shows chain pill with × dismiss instead of zone toggles.

### iOS Safari hardening
- Navigator: `position: fixed; height: 100svh`. Body locked while mounted. Unmount cleanup forces reflow + scroll kick to restore Safari's scroll engine.

## Cross-civ links ("Meanwhile in...")
- Third inline link type. Dashed underline+overline bracket in the target TL's chain color.
- Data: `content/.cross-links-{tlId}.json` — per-chapter `{ matchText, targetTl, targetChapter, blurb }`.
- **One matchText = one civilization.** Narrow compound phrases to just the linked civ.
- Parse injects cross-links *before* event/glossary links (cross-links win on overlap). Stale-target warning if tlId or chapter doesn't resolve.
- Sheet: "Meanwhile in {label}" + chapter + blurb + "Read {label} Ch N →" button. Hard `window.location.href` navigation. MutationObserver swaps light/dark accent on theme toggle.

## Link pipeline (event links + glossary links)
- **Event links**: category-colored dotted underline → EventSheet. **Glossary links**: gray solid underline → GlossarySheet.
- Events win over glossary (event injection runs first; `replaceOutsideAnchors` skips existing anchors).
- Curation files: `.event-links-{tlId}.json` (per-chapter `{eventId, matchText}`), `.glossary-links-{tlId}.json` (per-chapter `{term, matchText, wikiSlug, type}`). All hand-curated by agents, not regex.
- Parse warns and skips stale `eventId` refs not in reference data.
- Wiki extracts also get glossary linking — terms inside EventSheet wiki extracts become clickable.

### Agent curation process
Three agent passes per new TL:
1. **Event link agent** — reads chapters + reference events → `.event-links-{tlId}.json`. Every event discussed gets one placement; matchText must be literal substring.
2. **Glossary link agent** — reads chapters + event links (to skip duplicates) → `.glossary-links-{tlId}.json`. Every proper noun/term on first mention; events win.
3. **Summary bullets agent** — reads chapters + event links → `{tlId}.summaries.json`. 6–10 chronological bullets, include event matchText phrases verbatim for auto-linking.

## Image pipeline
### Sources
- Default: Wikimedia Commons via `wikiSlug` or `commonsFile`. Manual overrides in `.image-overrides.json`.
- Never: British Museum (CC-BY-NC), random blogs, Google Images.

### Captions
- Hand-written in `.caption-overrides.json`. Informal, 1–2 sentences. No "This image shows..." openers.

### Rejections
- `.image-rejections.json` — events with misleading images get no image. Approving in `/candidates` auto-clears stale rejections.

### Review workflows
- `/review/{tlId}` — QA current images. `/candidates/{tlId}` — approve/reject proposed new images with editable captions. Both dev-only; require `npm run parse` + dev restart after changes.

### Quality rules
- Prefer actual artifact photos over reconstructions. Museum photography is gold.
- For text-based events, use the actual cuneiform tablet. Skip abstract concepts.

## Chapter bottom navigation
- Every expanded chapter: solid accent × close + "Read Next Chapter" button (next chapter title + number). Last chapter: × only.

## Navigator header
- "Stuff Happened — A Timeline App" (13px bold). "v1 ↗" pill → `v1.stuffhappened.com`.
- Cloud button opens `OfflineLibrarySheet`.

## Offline reading (per-TL download)
Users download TLs (~15–20 MB each) via a library bottom sheet for offline reading.

### Key behaviors
- Library sheet lists all `hasContent` TLs. Tap → fetches manifest + caches page + maps + thumbnails into `offline-tl-{tlId}-v1`.
- SW strategy: network-first for navigations (so deploys show up), cache-first for assets.
- Both `/{tlId}` and `/{tlId}/` cached (trailing-slash mismatch handling).
- Client guard: tapping an un-downloaded TL when offline opens the library sheet instead of navigating.
- Dev mode: SW fetch handler is no-op on localhost; download/delete still work for testing.

### Tripwires
- Test offline on production, not localhost. Airplane mode ON + wifi OFF.
- First reload after deploy still runs old SW — need two reloads.
- Corrected narratives need manual re-download (cache-busting is per-cache-name).

## Summary text selection
- Sticky header split into: clickable row (`select-none` + pointer handlers) and non-clickable summary area (default text selection).

## Reader page header layout
- Accent-colored vertical bar (3.5px) left of TL title. Title in Lora serif (text-2xl, bold). "N CH" pill right-justified.
- Subtitle in italic, muted, indented. Chain nav row below title block.

## Accent color contrast
- Nile Valley and Nubian Tradition yellow accents darkened (`#a67c00` and `#b8860b`) for white-on-accent button contrast.
