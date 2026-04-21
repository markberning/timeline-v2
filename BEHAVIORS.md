# Expected Behaviors

Source of truth for how the reader app should behave. Update this when we change or add a behavior so future work has a spec to check against.

## Chapter accordion
- **Collapsed state**: minimal row showing "01" chapter number in accent color, chapter title in Lora serif (text-xl) with inline rotating chevron (`›`, bold, rotates 90° + translate-x-1 when open), subtitle (dateRange) in italic serif below, start/end years right-justified with `›` separator. Gray `border-b` lines between chapters. No buttons, no summary peek.
- **Tap header → toggle summary** (NOT expand chapter). Summary expanded state shows the READ THE FULL CHAPTER button (solid accent background, white text, bold, book icon + circle arrow, chapter number inline with title, year range on own line) + "SUMMARY · FOR REVIEW" label + bullet list inside a left accent-colored vertical border (2.5px, margin-quoted style). Bullets in Geist sans-serif with inline event/glossary/cross-link auto-linking.
- **READ THE FULL CHAPTER button** → expand that chapter. Other chapters become `display: none` (not just hidden visually).
- **Expand scroll behavior**: on open, `window.scrollTo({top: 0})`. Because sibling chapters are `display:none`, the opened chapter is always the first visible chapter in the flow and sits right below the h1 + "N chapters" subtitle; scrollY=0 then shows sticky nav → h1 → subtitle → chapter header → map/body stacked naturally. Same answer whether the chapter was opened by a user tap or by a cross-link auto-expand (`?chapter=N`). Previous "scroll flush below nav" behavior was rejected because it pushed the h1 "Mesopotamia / N chapters" off-screen for every chapter past the top, and a delta-preserve approach had edge cases when the user tapped from a scroll position where the header was above the fold. A 300ms retry handles the case where an image/map loads after the initial rAF and would otherwise shift the chapter position.
- **Collapse scroll behavior**: calls `sectionRef.current.scrollIntoView({block: 'start'})`. The `<section>` has inline `scrollMarginTop: navHeight`, so the just-closed chapter header lands just below the sticky nav (not flush to y=0 behind it). Previous bug: collapse called `scrollIntoView` on the inner sticky header div, which has no scroll-margin, so the chapter number was hidden behind the nav.
- The sticky top-nav height is measured once on mount via `document.querySelector('[data-top-nav]').getBoundingClientRect().height` and used for both the chapter-header `sticky top` and the section's `scrollMarginTop` — hardcoded `-40` was short of the actual ~48px nav.
- Chapter maps are **probed on mount** with `new Image()` before the slot renders. `mapExists` starts as `null` (unknown) and only becomes `true` on successful load; civilizations without maps (Ancient China currently) never reserve the `aspect-ratio: 1408/768` placeholder, which previously caused a layout collapse mid-scroll that threw off the chapter-open scroll target.
- Tap sticky header while expanded → collapse. Swipe right anywhere in the body → collapse. × close button at the bottom also collapses.
- On collapse: scroll as above, then pulse the just-closed header with a 1.5s accent-colored background flash (edge-to-edge via `-mx-8 px-8`).
- Only one chapter open at a time. Scroll never spills past the end of the open chapter.
- **Sticky mini map**: when the chapter map scrolls out of view during reading, a small 100px-wide thumbnail appears fixed in the bottom-right corner (z-30). Tapping it opens the lightbox. It auto-hides when the full map scrolls back into view. Tracked via IntersectionObserver on the map div.

## Accent colors (chain-driven)
- Every TL narrative page gets an accent color from its first chain in `reference-data/tl-chains.ts`. Every TL in the same chain shares the color; every chain in the same region is a distinct shade of that region's family (Near East = amber/orange, Africa = yellow/ochre, Asia = violet/purple, Europe = blue/sky, Americas = green, Global = slate).
- Lookup: `getAccentColors(tlId)` in `src/lib/accent-colors.ts` calls `getChainsForTimeline(tlId)`, takes the first chain, and reads from the `CHAIN_COLORS` map. Falls back to `TL_OVERRIDES` (empty by default) then to neutral `DEFAULT_COLORS`.
- All 18 chain entries are contrast-verified: `text` on white ≥ AA 4.5:1, white on `badge` ≥ AA-lg 3:1, `base` on dark `#0a0a0a` ≥ AA 4.5:1. The comment in `accent-colors.ts` lists the target thresholds; when adding a new shade, rerun the contrast check before committing.
- The colors feed three CSS variables on the narrative page: `--accent` (decorative: nav underline, buttons, progress), `--accent-text` (readable text on white), `--accent-badge` (background for white chapter-number pills).
- The navigator (`TlNavigator` + `TlFlow`) does NOT use these accent colors — it uses the `STONE_THEME.regionColors` map (one color per region) because zone filtering is the primary visual grouping there.

## Event link chips
- One pill per event referenced in that chapter, colored by category.
- Rendered under the collapsed chapter summary AND inline in chapter prose.
- Tap → opens `EventSheet` (bottom sheet) without toggling the chapter.

## Glossary links
- Gray solid underline, normal weight (even inside markdown bold).
- Curated per-chapter in `content/.glossary-links-{tlId}.json`. Events win when a term overlaps.
- Tap → opens `GlossarySheet` with wiki extract + Wikipedia link.
- Glossary spans also appear inside event wiki extracts; clicking one from inside the EventSheet opens the GlossarySheet on top.

## EventSheet
- Bottom sheet, slides up with `animate-slide-up`.
- Swipe down on header, tap header, or × button closes.
- Tap backdrop closes.
- `event.description`, each `event.details[].text`, and `event.wikiExtract` are all rendered as HTML via `dangerouslySetInnerHTML` — the parse step runs `linkGlossaryInText` over all three fields so any glossary term that naturally appears in those fields becomes a clickable link. Previously only `wikiExtract` got this treatment and glossary terms in descriptions rendered as plain text.

## GlossarySheet
- Same gesture set as EventSheet but gray-themed.

## Lightbox
- Opens when image in event sheet or chapter map is tapped.
- **Double-tap** toggles zoom (1x ↔ 2.5x, zoomed on the tap point).
- **Pinch** zooms to arbitrary scale (1x–5x).
- **Drag** pans when zoomed.
- **Swipe down** (when not zoomed) dismisses.
- **Tap backdrop** (when not zoomed) dismisses.
- × button always dismisses.

## Dark mode
- Background `#22201e` (warm dark, unified with the navigator Stone theme), foreground `#e5e5e5`. Contrast ≈ 13.6:1 (WCAG AAA).
- Elevated surfaces (event sheet, glossary sheet) use `--surface: #2f2c29` so they sit visibly above the page background.
- **Dark is the default**: `class="dark"` is hardcoded on `<html>` in `layout.tsx`; the anti-flash script only *removes* the class when `localStorage.theme === 'light'`. `color-scheme: dark` is declared on both `:root` and `.dark` in globals.css so iOS Safari doesn't apply its own auto-dark filter (without this, the navigator and narrative background looked measurably different even though both pointed at the same hex).
- Viewport meta exports `colorScheme: 'dark'` and `themeColor: '#22201e'`.
- Toggle is still available; persisted to `localStorage['theme']`.

## Light mode
- Background `#ede5d3` (warm parchment cream). Theme-color meta tag updates to `#ede5d3` so iOS notch/status bar matches.

## Text size
- 5 steps (0.875rem → 1.375rem) via A/A buttons, default 1rem (16px, index 1), persisted to `localStorage['textSize']`. Chapter numbers, titles, subtitles, and summary bullets use relative `em` units so they scale with the control. Prose inherits `--prose-size` from `.reading-content`.

## Save-my-place
- While a chapter is open, the scroll position is auto-saved to localStorage every 500ms (debounced). Stored as `reading-progress-{tlId}` → `{ chapter, scrollPct, timestamp }`.
- On returning to a TL page with saved progress and no chapter open, an accent-colored "Continue Reading" banner appears showing chapter name + percentage. The entire banner is clickable to resume; × button dismisses (with `stopPropagation`). Progress expires after 90 days.
- Resume: sets `pendingScrollPct` ref, opens the chapter, waits 400ms for content render + scroll-to-top effect to settle, then scrolls to `docHeight * pct`.

## Lightbox scroll preservation
- `openLightbox()` saves `window.scrollY` to a ref before showing the lightbox. `closeLightbox()` restores it via `requestAnimationFrame` after hiding. Prevents the scroll-to-top effect from firing when the lightbox state change causes a re-render.

## Navigation
- Home page (`/`): the TL Navigator flow layout. No civilization picker.
- Chapter page: single-page accordion. No per-chapter routes.
- **Swipe right on the civilization summary page** (dx > 80px, horizontal-dominant, no chapter expanded) navigates back to home. Disabled when a chapter is open, since swipe-right in that state is reserved for collapsing the chapter.
- `/navigator` is an alias route that renders the same navigator component as `/`.

## TL Navigator (home, `/`)
Custom-touch scrolling flow layout of 71 civilizations. This is the home page now — the old card picker is gone.

### Layout
- Fixed-position viewport anchored at top with `height: 100svh` (not `inset: 0`, which would extend behind the Safari bottom toolbar). Stone theme warm dark bg `#22201e`, matching the narrative dark mode bg so the transition between navigator and narrative is seamless.
- Header (~88px): title + 5 zone toggle pills. No zoom buttons, no time axis — they aren't needed in the flow layout.
- Body: `TlFlow` component handles everything below the header. `overflow: hidden`, `touch-action: none`. All scroll is JS-driven via touch handlers; no native scroll.
- Each row is a single absolutely-positioned element with `translate3d(x, y, 0)` + `opacity` written per frame. The row renders as 3 stacked lines: (1) region hairline + name, (2) date range + optional chain chip, (3) italic subtitle. `rowHeight = 72`.

### Data
- 71 TLs in `NAVIGATOR_TLS` (`src/lib/navigator-tls.ts`): id, label, subtitle, region, startYear, endYear, optional `isReal` and `hasContent` flags. Only `mesopotamia`, `indus-valley`, and `ancient-china` have `hasContent: true`; everything else renders at opacity 0.35.
- **Row order is global chronological, not array order.** `sortTls` in `tl-navigator.tsx` re-sorts by `startYear` ascending, with `endYear` as the tiebreaker. NAVIGATOR_TLS array order is ignored for display. Consequence: TL start/end dates drive the navigator layout, so they need to reflect scholarly consensus for the civilization's actual span — extended "Neolithic roots" dates push a TL up past later civilizations in the visible order. Regional grouping of the source array exists only for human readability of the file.
- Every TL has a hand-written `subtitle` (short descriptive+evocative tagline, place anchor + flavor hook — e.g. `Iraq's first cities and cuneiform`).

### Zones
- 5 fixed zones: Near East, Africa, Asia, Europe, Americas. `REGION_ORDER` + colors live on `STONE_THEME.regionColors` in `src/lib/navigator-themes.ts`.
- Single tap on a pill toggles that zone on/off. Double-tap solos it (enables only that zone). Double-tap on an already-solo zone restores all five. Single-click toggle is deferred by 220ms so a double-tap can pre-empt it (`ZoneToggles` manages this with a `useRef` timer).

### Flow layout (the heart of the navigator)
- `rowLayout` useMemo precomputes `cumGap[i]` — cumulative `sqrt(max(0, tls[i].startYear - tls[i-1].startYear))` in sqrt-year units. Rows are still evenly spaced vertically (uniform `i * rowHeight`).
- `barWidths[i]` is sqrt-compressed duration, normalized so the longest TL fills `TARGET_MAX_FRAC = 0.7` of viewport width. Computed once per `tls + viewport` change; set on each bar's line element as an inline `transform: scaleX(barW)` on a 1px base so width updates are fully composited.
- Per frame, `render()` does two passes:
  1. Compute natural `(x, y)` for every row:
     - `y = i * rowHeight - scrollOffset`
     - `diagonalX = (rowCenterY / vh) * maxIndent` — scroll-driven diagonal, `MAX_INDENT_FRAC = 0.3`
     - `gapX = (cumGap[i] - anchorCum) * H_GAP_SCALE` where `anchorCum` is a linear interpolation of `cumGap` at the fractional topmost row (`scrollOffset / rowHeight`). `H_GAP_SCALE = 0.38` (px per sqrt-year). This makes clusters of similar-era TLs pack tight and big historical jumps open a wider horizontal step, without pushing rows off-screen (the anchor re-centers the topmost visible row at x=0).
     - Entry zone: if `rowCenterY > vh * (1 - ENTRY_ZONE_FRAC)` (`0.33`), lerp `x` toward `entryX = vw * 0.85` with `progress = ((rowCenterY - settleEndY) / entryZoneSpan)²`. New TLs visibly fly in from the lower right and glide diagonally into place as they scroll up.
  2. Solo blend (see Chain-solo mode below): lerp between the natural flow `(x, y)` and a stacked chain-solo target by `soloProgressRef` (0–1, eased), then write one `translate3d` + `opacity` per row to `barRefs[i]`.

### Custom touch scroll
- `overflow: hidden` + `touch-action: none` on the container; body is locked via `position: fixed` while the navigator is mounted (see iOS hardening below).
- `scrollOffsetRef`, `velocityRef`, `lastTouchY/Time`, `isTouchingRef`, `momentumRafRef` all in refs — no React re-render during scroll.
- `onTouchMove` accumulates `scrollOffset -= dy`, clamps to `[0, maxScroll]`, updates velocity as `-dy * (16.67 / dt)`, and calls `render()` synchronously.
- `onTouchEnd` kicks off friction-decay momentum via rAF when velocity exceeds `MIN_VELOCITY = 0.05`. `FRICTION = 0.94`. Wheel events handled similarly for desktop.
- `maxScroll = totalHeight - vh + rowHeight` — one row of breathing room below the last TL so it doesn't sit flush at the bottom.

### Tap detection
- `TAP_MOVE_THRESHOLD = 10px`, `TAP_TIME_THRESHOLD = 500ms`, and a `wasMomentumRef` flag mean "tap during active momentum stops the scroll and does not fire any action".
- On a clean tap, compute `rowIdx = floor((touchY - rect.top + scrollOffset) / rowHeight)`.
- **Chip hit-test first**: `document.elementFromPoint(touchX, touchY).closest('[data-chain-chip]')`. If found, call `onChainSolo(chainId)` (toggles — tapping the chip of the already-soloed chain exits).
- **Navigation next**: if `tls[rowIdx].hasContent`, use `window.location.href = '/' + id` — NOT `router.push`. Client-side React transitions leave iOS Safari's scroll engine in a stuck state for several touches on the next page; a hard navigation sidesteps it.
- Otherwise, fall through to momentum launch.

### Chain chips + chain-solo mode
- Every row whose TL belongs to at least one chain from `TL_CHAINS` shows an inline chain chip on line 2 next to the dates: a small chain-link glyph + `shortLabel` + `index/total` (e.g. `⛓ China 5/12`). `shortLabel` is a new field on `TlChain` — every chain has a compact form ("Chinese Dynasties" → "China", "Mesoamerican Civilizations" → "Mesoamerica", etc.). The chip is tagged `data-chain-chip="1" data-chain-id="..."` with `pointer-events: auto` on an otherwise `pointer-events: none` row.
- `rowChainInfo` useMemo walks `TL_CHAINS` in order and assigns the *first* chain a row belongs to (rows in multiple chains show only their first chain's chip). Result: `Map<rowIdx, { chainId, shortLabel, index, total }>`.
- Tapping a chip calls `onChainSolo(chainId)` (from the `TlNavigator` parent), which toggles `soloChainId`. Tapping the chip of the currently soloed chain exits back to flow mode. During the transition animation, taps are ignored (`isAnimating()` gate in `onTouchEnd` and `onTouchMove`).

### Chain-solo animation
- `soloChainId` prop flowing from the parent drives a single ref-based animation. `soloProgressRef` goes 0 → 1 for enter and 1 → 0 for exit over `SOLO_ANIM_MS = 650` (ease-in-out). `soloDirRef` tracks direction; `soloAnimStartRef` is the timestamp origin; `soloAnimRafRef` owns the rAF. Mid-animation prop changes reset the start time so the tween blends from the current progress.
- `activeChainId` is React state (not a ref) so `soloLayout` useMemo recomputes when it changes. It's set immediately on enter and cleared only after the exit tween completes — this keeps the chain's stacked target positions valid through the exit.
- Per frame `render()` computes, for every row in `tls`:
  - **Flow target** `(flowX, flowY, flowOpacity)`: the normal diagonal/gap/entry-zone position if the row is in `flowLayout.visibleIdxs` (i.e. its region is in `enabledZones`). Otherwise parked off-screen right with `flowOpacity = 0` — chain members from disabled zones start invisible and slide in during the enter animation.
  - **Solo target** `(soloX, soloY, soloOpacity)`: if the row is in the active chain's ordered member list, it stacks at `soloLeftPad` (6% of viewport width), `y = soloIdx * rowHeight + soloStackCenter - soloScroll`. `soloStackCenter` vertically centers the stack when it fits, otherwise uses a small top pad. Non-members slide further off-screen right and fade.
  - **Blend**: `x = lerp(flowX, soloX, easeInOut(soloProgress))`, same for `y` and `opacity`. Rows with `opacity <= 0.01` also get `visibility: hidden` so `elementFromPoint` ignores them during chip hit-testing.
- The `TlFlow` component now owns zone filtering internally (parent passes *all* tls + `enabledZones`); this is required so chain members in disabled zones still exist as DOM nodes and can animate in.
- Two independent scroll offsets: `flowScrollRef` and `soloScrollRef`. Touch/wheel handlers write to whichever is active (`inSoloMode()` = `soloProgress >= 0.99 && activeChainId !== null`). Entering solo mode resets `soloScrollRef` to 0. Flow scroll is preserved across solo enter/exit so exiting the chain drops back where the user was.
- The header shows either the zone toggles (flow mode) OR a "Chain: {label} · N timelines ×" pill (solo mode). Tapping × on the pill calls `setSoloChainId(null)` and plays the exit animation in reverse.

### iOS Safari hardening
- Navigator wrapper uses `position: fixed; top: 0; left: 0; right: 0; height: 100svh`. `inset: 0` would use the large viewport and extend behind the bottom address bar; `100svh` respects the toolbar.
- While the navigator is mounted, a useEffect in `tl-navigator.tsx` locks the body: `html.overflow = 'hidden'`, `body.overflow = 'hidden'`, `body.position = 'fixed'`, `body.top/left/right = 0`, `body.overscroll-behavior = 'none'`, `body.touch-action = 'none'`. Required because iOS Safari rubber-bands the body and drags `position: fixed` children around, even with `overscroll-behavior: none`.
- On unmount, the cleanup restores the body to explicit reset values (`position: static`, `touch-action: pan-y`, `overflow: visible`), forces a reflow via `void body.offsetHeight`, calls `window.scrollTo(0, 1); scrollTo(0, 0)` to kick Safari's scroll engine out of its cached "body not scrollable" state, and then drops the overrides back to the captured previous values. Even with all of this, navigating via `router.push` leaves Safari holding onto enough state that the first few touches on the narrative page get swallowed — that's why tap navigation uses `window.location.href` instead.

### Stone theme
- The only theme. Defined in `src/lib/navigator-themes.ts` as `STONE_THEME`. App bg `#22201e`, header bg `#2a2724`, `rowHeight: 72`, `bar.style: 'line'` (bar is a thin region-colored hairline, not a filled rectangle), region palette tuned warm.
- Label stack per row (3 lines): (1) region hairline at `scaleX(barW)` + `[dot] Name`, (2) dates + optional chain chip, (3) italic subtitle. Dates use `formatYearRange` that combines eras when both years share one (`1922–1991 CE`, `5000–539 BCE`).

### Deferred / out of scope
- Tap-to-expand subtitle / tooltip preview of a non-content TL.
- Per-chain coloring of the chain chip (currently neutral).
- Browse between chains from within chain-solo mode (e.g. swipe to adjacent chain).
- Follow-mode and gap markers from earlier swimlane experiments — superseded by the flow layout.

## Cross-civ links ("Meanwhile in...")
- Third kind of inline link in the reader, alongside event links and glossary links. Match phrase in the prose opens a `CrossLinkSheet` bottom sheet that introduces a parallel development in another civilization and offers a "Read {label} Ch N →" jump button.
- **Visual treatment**: dashed `underline overline` bracket in the *target* TL's chain color. The top and bottom dashed strokes frame the matched phrase so it reads as a "doorway to another civilization" rather than a normal inline link. Uses `text-decoration-line: underline overline; text-decoration-style: dashed; text-decoration-thickness: 1.5px; text-underline-offset: 3px; font-weight: 500`.
- **Colors come from the target TL's chain**, not from its region, so two Asian TLs (Ancient China violet + Indus Valley indigo) are still visually distinct. Region-based coloring was rejected in an earlier iteration because same-region cross-refs blended into the host TL's accent.
- Data: `content/.cross-links-{tlId}.json` — per-chapter map of `{ matchText, targetTl, targetChapter, blurb }`. `matchText` finds the first occurrence of the phrase in that chapter's prose (outside existing anchors); `targetTl` + `targetChapter` are the destination; `blurb` is 1–3 sentences of "meanwhile..." context written by the curator.
- **One matchText must cover exactly one civilization** — if the prose says "Mesopotamia's or Egypt's" or "Egypt and Mesopotamia combined", the curator must narrow matchText to just the civilization that has a v2 target (e.g. `matchText: "Mesopotamia's"`). Wrapping a compound phrase in a single anchor makes the link wrap non-target civilization names in the clickable area for no benefit and reads as a bug when the target is obviously only one of them. When a phrase genuinely references two civilizations that both have v2 TLs, place two separate cross-links with two separate matchText anchors.
- **Parse-time two-pass**: pass 1 loads every TL's narrative and reference data to build a `tlMetaMap` of `{ label, chapters: Map<number, title>, colorLight, colorDark }` keyed by tlId, where `colorLight = getAccentColors(tl).text` and `colorDark = getAccentColors(tl).base`. Pass 2 parses each narrative and injects each cross-link `<a class="cross-link" data-cross-id="cl-{ch}-{i}" style="--cl-light:#X;--cl-dark:#Y">` into the chapter body *before* event/glossary injection, so cross-links win on overlapping matches. A stale-target warning fires if a cross-link points to a tlId or chapter number that doesn't resolve in `tlMetaMap`.
- **CSS**: `globals.css` has a single `.prose a.cross-link, a.cross-link { color: var(--cl-light, #6b7280) }` rule plus a `.dark .prose a.cross-link, .dark a.cross-link { color: var(--cl-dark, #9ca3af) }` override. The specific color values live on the anchor as inline CSS vars (baked by parse), so new TLs pick up their chain shade automatically without any CSS edits.
- **Runtime**: `NarrativeReader` builds a `Map<id, CrossLink>` and its `handleClick` delegate opens `CrossLinkSheet` when the tapped anchor has a `cross-link` class. The sheet is a sibling of `EventSheet` and `GlossarySheet`; only one sheet is ever open at a time.
- **Sheet**: header shows "Meanwhile in {label}" + `Chapter {n}: {title}` + blurb + a CTA button colored with the same target-chain shade. The sheet watches `<html>` for `.dark` class changes via MutationObserver and swaps between `targetColorLight` and `targetColorDark` reactively when the user toggles the theme.
- **Jump**: tapping "Read {label} Ch N →" does a hard `window.location.href = '/{targetTl}?chapter={n}'` navigation (same anti-iOS-stuck-scroll pattern used by the navigator). On the target page, `NarrativeReader` runs a mount-time effect that reads `?chapter=N` from `window.location.search` and calls `setOpenChapter(n)`, which triggers the chapter-accordion's open effect (scroll to y=0). The browser back button returns to the source TL with its original scroll state intact.
- **Auto-expand only applies to user-tap expands too**: the expand scroll effect in `chapter-accordion.tsx` has one unified path — `window.scrollTo({top: 0})` — whether the chapter was opened programmatically from a cross-link nav or by a user tap.
- **Current curation state (post 2026-04-15 structural audit)**: all 5 shipped TLs have cross-link files with a combined **137 cross-links**. Per-TL totals: Meso 34, Indus 37, Ancient China 22, Ancient Nubia 20, Elamite Civilization 24. The 2026-04-15 audit filled the biggest structural gaps: Meso→Indus (+4 trade-era links in Ch 4/5/6), Indus→Elam (+4 Meluhha/Susa/Shimashki links), China↔Elam (+3 covering the previously-zero gap via Silk Road + Anshan-rooted Achaemenids), Nubia↔Elam (+3 via Achaemenid satrapies ↔ Viceroy of Kush). See `audits/mesopotamia-backward-factcheck.md` and `audits/indus-valley-backward-factcheck.md` for the methodology and `project_cross_links.md` memory for the raw matrix. Adding a new TL should run the same structural audit against all 5 shipped TLs to identify where the new TL belongs in the matrix.

## Link pipeline (event links + glossary links)

The reader has two kinds of inline clickable terms in chapter prose:

- **Event links** — category-colored, dotted underline. Tap → opens the EventSheet with an image, caption, description, wiki extract. Used for every significant TL event the chapter mentions.
- **Glossary links** — gray solid underline, normal weight. Tap → opens the GlossarySheet with a short Wikipedia extract + "Read more on Wikipedia →" link. Used for every proper noun or TL-specific term that isn't already an event.

### Event links win over glossary links
If the same phrase would match both an event and a glossary entry, the event link takes precedence. This is enforced by the parse script running event injection before glossary injection. The `replaceOutsideAnchors` helper ensures we never nest `<a>` tags — a subsequent match on text already wrapped in an anchor is skipped.

### Curation files (never regex, never auto-detect)
- `content/.event-links-{tlId}.json` — per-chapter map of `{ eventId, matchText }`. The parse script finds the first `\b matchText \b` in each chapter and wraps it. Each event can link at most once per chapter.
- `content/.glossary-links-{tlId}.json` — per-chapter map of `{ term, matchText, wikiSlug, type }`. Same injection logic. Glossary dedupes by matchText (not slug) so multiple distinct words can point at the same Wikipedia article.

v1 regex-based linking was rejected for causing bad matches. All links are hand-curated (by agents) per chapter with exact `matchText` phrases. See memory `project_event_link_system`.

### Stale ref validation
The parse script warns and skips any `eventId` in an event-links file that doesn't exist in the TL's reference events array. Historical bug: dead refs rendered pink but did nothing when tapped (see memory `feedback_curated_link_validation`). Always verify eventIds match ref data when hand-editing these files.

### Wiki extract glossary linking
Because event popups render `event.wikiExtract` as HTML, the parse script also runs an exact-match pass over each extract to wrap any already-curated glossary term in a glossary link — so tapping a proper noun inside an EventSheet wiki extract opens the corresponding GlossarySheet on top.

### Agents used for curation
Curation is AI-assisted but always reviewed. For each new TL, expect to run three agent passes:

1. **Event link agent** — reads each chapter + the TL's reference events and outputs `content/.event-links-{tlId}.json`. Prompt must require: (a) every event referenced in the chapter gets one placement, (b) matchText must be a literal substring of the chapter body, (c) skip events already linked in that chapter.

2. **Glossary link agent** — reads each chapter + the already-generated event links (to know what to skip) and outputs `content/.glossary-links-{tlId}.json`. Prompt must require: (a) every proper noun and TL-specific term gets a placement on first mention, (b) events win — don't duplicate event-linked terms, (c) wikiSlug is the Wikipedia URL slug (underscores, no spaces), (d) type is one of `place | people | language | concept`.

3. **Summary bullets agent** — reads each chapter and the event-links file and outputs `bullets: string[]` inside `narratives/{file}.summaries.json`. Prompt must require: (a) 4–8 chronological bullets per chapter, (b) include event matchText phrases verbatim where they fit naturally so the parse script's link injection catches them, (c) house voice (informal, popular-history, surprising openers), (d) plain text, no markdown bold.

Each agent should be kicked off with a self-contained prompt that includes the format example, the rules, and the file paths. See recent sessions for prompt examples.

### Link styling
- Event links: defined in `globals.css` as `.event-link` with category-specific colors via `[data-category="..."]` selectors. Light mode and dark mode variants. Passes WCAG AA against the reading background.
- Glossary links: `.glossary-link` in `globals.css`, gray (`#6b7280` light, `#9ca3af` dark), solid underline, **normal font-weight** (override needed because markdown-bold wrapping was inheriting `font-weight: bold`).
- Higher-specificity selectors (`.prose a.glossary-link`) are required to beat Tailwind Typography's default link color inside chapter prose.

## Image pipeline

### Sources
- **Default**: Wikimedia Commons (via the events' `wikiSlug` → page image fallback, or `commonsFile` → direct thumbnail).
- **Manual overrides**: `content/.image-overrides.json` maps `eventId → Commons filename` when we want a specific file instead of whatever the Wikipedia page picks. Used when the default image is wrong, weak, or missing.
- **Future**: Met / Smithsonian Open Access APIs are legal alternatives if Commons falls short. Not wired up yet.
- **Never**: British Museum (CC-BY-NC), random blogs, Google Images — licensing isn't clean.

### Captions
- Every event that ships with an image should have a hand-written caption in `content/.caption-overrides.json`. Commons' own `ImageDescription` metadata is too noisy and often wrong or in another language.
- Voice: informal, factual, 1–2 sentences, leads with the concrete object or place, then explains significance. No "This image shows…" openers.
- Captions render below the image in the EventSheet in italic muted text.

### Rejections
- `content/.image-rejections.json` — `{ eventId: reason }`. Events in this file get no image applied even if they have a slug or override. Use when Wikipedia's page image is actively misleading (wrong civilization, wrong era, generic map, etc.).
- When an event is approved in the `/candidates` review flow, it is automatically removed from rejections — approving supersedes an earlier reject.

### Approval workflows

Two separate review pages for two different stages:

1. **`/review/{tlId}`** — review the images the pipeline CURRENTLY applies. Approve/reject/annotate. Used for QA passes on already-wired images. Decisions are saved to localStorage and can be submitted to write `.review-results-{tlId}.json`.

2. **`/candidates/{tlId}`** — review PROPOSED new images for events that are currently missing thumbnails. Reads `content/.image-candidates.json` (a staging list of `{eventId, label, filename, caption}` entries) and fetches Commons thumbnails live at request time for each candidate. Edit the caption text inline, approve/reject each one, then tap **Save N** at the top. Approved entries append to `.image-overrides.json` + `.caption-overrides.json` and clear any stale rejection on that event.

Both workflows require `npm run parse` + dev-server restart afterward for changes to take effect (see `feedback_parse_restart_dev` memory).

### Quality rules for candidate curation
- Prefer photos of the **actual artifact** (tablets, seals, statues, sites) over reconstructions or artist impressions.
- Museum photography from Met/Louvre/British Museum/Penn/Ashmolean/National Museum Delhi on Commons is gold.
- For text-based events (Epic of Gilgamesh, Enuma Elish, Atra-Hasis, Plimpton 322), the actual cuneiform tablet of that text is the right image — don't try to find a "dramatic scene."
- Avoid: generic civilization maps, wrong-culture objects, wrong-era objects, disambiguation-page defaults.
- Skip abstract concepts (Temple Economy, Silver Currency, De-urbanization, governance absence) — no single artifact represents them; leave them imageless.

## Chapter bottom navigation
- Every expanded chapter has a row at the bottom containing a solid accent-colored `×` close button and a "Read Next Chapter" button matching the READ THE FULL CHAPTER style (solid accent background, white text, bold, book icon, circle arrow, next chapter title in Lora serif + "Chapter N" below). Last chapter shows only the `×`.
- Tapping Read Next calls `setOpenChapter(next.number)` in `NarrativeReader`. The parent re-renders with the next chapter open and the current one hidden; the expand effect fires and scrolls to y=0, so the next chapter renders flush under the h1.
- `nextChapterTitle` prop was added to `ChapterAccordionProps` so the button can display the next chapter's name.

## Navigator header
- Title reads "Stuff Happened — A Timeline App" in 13px bold letter-spacing 0.03em.
- Right side of the title row has a small pill link "v1 ↗" pointing at `https://v1.stuffhappened.com` — the legacy Vite explorer that previously lived at `stuffhappened.com` and now lives on the subdomain.
- Below the title row: zone toggle pills (flow mode) OR the chain-solo pill (solo mode).

## Navigator chain chip placement
- Chain chip sits on **row 1 next to the TL label**, not on row 2 next to the dates. 36 px `marginLeft` from the label, 14 px font, 4×12 px padding, rounded-999 border, subtle `rgba(255,255,255,0.07)` background fill.
- Historical context: earlier placements had the chip right after the date range on row 2 (8 px gap). Users aiming at the TL label on row 1 frequently landed on the chip below and accidentally triggered chain-solo. A "push to far right of row 2" attempt (marginLeft: auto with definite width) was rejected visually. Current row-1 placement + pill styling + 36 px gap is the shipped version.
- Desktop mouse support: a parallel `pointerup` listener filtered to `pointerType === 'mouse'` runs the same chip hit-test via `elementFromPoint` that the touch handler uses. Touch devices continue to use the touchstart/touchend path; mouse filter keeps them from double-firing.

## Deploy
- **Target**: Cloudflare Workers + Static Assets. Production domain `stuffhappened.com`, legacy v1 lives on `v1.stuffhappened.com`, both projects in the same CF account.
- **Build**: `npm run build` = `prebuild` (which runs `tsx scripts/parse-narratives.ts`) + `node scripts/build-static.mjs`. The build-static script stashes `src/app/api/`, `src/app/candidates/`, and `src/app/review/` out of the tree before `next build` runs, then restores them in a finally block. Those routes can't be statically exported (route handlers + `force-dynamic` Wikimedia-fetching pages) but are still useful for local dev image curation, so `next dev` continues to see them.
- **next.config.ts**: `output: 'export'`, `trailingSlash: true`, `images: { unoptimized: true }`.
- **wrangler.jsonc**: `name: "timeline-v2"`, `compatibility_date: "2024-12-30"`, `assets: { directory: "./out", not_found_handling: "404-page" }`. Wrangler uploads `out/` as the Workers static asset bundle; no `main` entry point because there's no edge logic.
- **Dashboard**: Cloudflare Pages / Workers project `timeline-v2` is connected to `github.com/markberning/timeline-v2`. Build command `npm run build`, deploy command `npx wrangler deploy`. Pushes to `main` auto-trigger new builds.
- **Chapter maps are WebP quality 85** under `public/maps/{tlId}/chapter-{N}.webp`. Converted via `scripts/optimize-maps.mjs` + sharp from the original 1408×768 PNGs. Total out/ size dropped 76 MB → 11 MB after this optimization.

## Narrative authorship
- **Claude always writes narratives.** The user never hand-writes prose; they review and direct. Before starting a new TL, always (1) pull v1 reference data, (2) review the event list for coverage gaps (some v1 TLs are thin because they never got a narrative-driven overhaul), (3) propose additions up front and expand the reference data before writing begins. Rules captured in `CLAUDE.md` Pipeline step 1 and `WRITING-RULES.md`.

## Offline reading (per-TL download)

### The feature
Users can download any of the 5 shipped TLs for offline reading by tapping a cloud icon in the navigator header, which opens a bottom-sheet library listing all `hasContent` TLs with per-row download controls. Tapping a row kicks off a download that fetches the page HTML + every chapter map + every event/glossary thumbnail into a named cache. Total per-TL footprint: ~15–20 MB. Tapping a downloaded row again wipes that cache. When the browser is offline, previously-downloaded TLs open from cache; un-downloaded TLs show the library sheet instead of a broken page.

### Per-TL manifest generation
- `scripts/parse-narratives.ts` now emits `public/offline/{tlId}.manifest.json` for every shipped TL during every parse run.
- Shape: `{ tlId, label, pageUrl, maps: string[], thumbnails: string[], urls: string[] }` where `urls = [pageUrl, ...maps, ...thumbnails]` is the flat list the SW iterates.
- `maps` only includes WebPs that actually exist on disk (checked with `existsSync`), so a TL without maps emits a valid manifest with an empty maps array.
- `thumbnails` is a deduped set of `event.thumbnailUrl` + `glossary.thumbnailUrl` values after enrichment. Typical size: 160–265 thumbnails per TL.
- `public/offline/` is gitignored — the manifests are regenerated on every parse.

### Service worker (`public/sw.js`)
Hand-rolled, no Workbox. Two cache kinds:

- `offline-shell-v2` — runtime cache for navigator + shared `_next/*` chunks. Populated opportunistically by the fetch handler as the user browses. Clean-up on activate removes any older-versioned shell caches (`offline-shell-v1`, etc.).
- `offline-tl-{tlId}-v1` — per-TL cache, populated explicitly by message from the client during the download flow.

Fetch strategy:

- **Navigation requests** (HTML pages) → **network-first**. The SW tries `fetch(req)` first, and only falls back to cache on failure. This is the only strategy that lets a constantly-updated static site show new deploys to returning users — the original cache-first version stuck users on old HTML indefinitely. On failure, the fallback tries `matchWithSlashVariants(req)` (see below), then the home page from cache, then an HTML offline fallback with a 2-second meta-refresh back to `/`.
- **Non-navigation** requests (CSS, JS, images, maps, thumbnails) → **cache-first**. These are hash-keyed (JS/CSS) or stable (content) and can be served from cache without freshness concerns.

`matchWithSlashVariants(req)` exists because Next.js static export with `trailingSlash: true` stores page URLs as `/mesopotamia/` but the navigator navigates to `/mesopotamia` (no slash) via `window.location.href`. Cloudflare resolves the difference online via its static-assets layer. Offline, the SW has to try both forms. The helper does three passes: exact `caches.match(req)`, toggled-slash Request, and finally a manual iteration of every cache looking for either variant. **And** the download loop caches every same-origin URL under both slash variants (cache.put with the original URL plus a second cache.put with the toggled URL) so exact matches always hit regardless of which form the browser uses.

Opaque cross-origin thumbnails: the download loop uses `{ mode: isCrossOrigin ? 'no-cors' : 'same-origin' }`. Cross-origin Wikimedia thumbnails produce opaque responses (`res.type === 'opaque'`, `res.status === 0`) that cache.put accepts and `<img>` elements render back from cache without needing `crossOrigin="anonymous"` on the img tag.

Dev-mode bypass: the SW checks `self.location.hostname === 'localhost' || '127.0.0.1'` at load time and sets `IS_DEV_HOST`. When true, the fetch handler returns early without intercepting any request, so Next.js HMR and dev-server chunks are never runtime-cached or intercepted. The message handler still runs, so `downloadTl` / `deleteTl` / `check-tl` work in dev — you can test the download flow locally without breaking HMR, you just can't test "actually offline reading" in dev because the fetch handler is a no-op there.

Install + activate: `install` calls `skipWaiting` + precaches `/` (with a silent .catch so a dev 404 on root won't fail the install). `activate` calls `clients.claim` and cleans up any older-versioned shell caches. Bumping `SHELL_CACHE` forces a clean-slate on the next activation without touching per-TL caches.

### Client library (`src/lib/offline.ts`)
Module-level state store pattern using `useSyncExternalStore`. Exports:

- `registerServiceWorker()` — mount-once registration called from `<OfflineRegistrar />` in `app/layout.tsx`.
- `downloadTl(tlId)` — fetches `/offline/{tlId}.manifest.json`, sets progress state, posts `download-tl` message to SW.
- `deleteTl(tlId)` — posts `delete-tl` message.
- `useOfflineStatus(tlId)` — per-TL progress hook.
- `useAllOfflineStatus()` — full map of every TL's status, for components that render many rows.

Terminal states (`downloaded`, `error`) are mirrored to `localStorage['offline:{tlId}']` so cold-start renders the right icon before the SW has a chance to reply. On SW registration, a `list-downloaded` message syncs the canonical state from the SW and drift-corrects anything that disagrees.

### UI: header button + library sheet
- The navigator header has a small cloud button next to the `v1 ↗` pill. Tap → opens `OfflineLibrarySheet`.
- `OfflineLibrarySheet` is a bottom-sheet modal (80svh max-height, tap backdrop or × to close, Escape key also closes). Lists every `hasContent` TL with its label + subtitle + a per-row cloud status control. Visual states: outline cloud + down arrow (none), pulsing cloud + done/total + percent (downloading), filled cloud + check mark (downloaded), cloud with × (error). Tap a row to download or delete.
- The sheet itself shows live progress: percent + `{done} / {total}` for the currently downloading TL. Progress updates broadcast on every one of the first 10 items (so the UI moves off 0% immediately), then every 5, then on the final item.

### Client-side offline tap guard
`tl-flow.tsx` reads `useAllOfflineStatus()` and mirrors it into a ref so the layout-effect tap-handler closures read current values without the heavy effect re-running on every progress tick. Before `window.location.href = '/{tlId}'`, the handler calls a new `navigateToTl(tlId)` helper that checks:

1. `navigator.onLine === false` (browser reports offline)
2. The TL's status is not `'downloaded'`

If both are true, it calls the `onOfflineBlocked` callback (passed from `TlNavigator`, which opens `OfflineLibrarySheet`). Otherwise it navigates normally.

This guard was added after real-offline testing revealed that iOS Safari appears to short-circuit navigations to URLs it thinks won't work offline, silently dropping the tap before the SW can serve a fallback page. The client-side check dodges the issue entirely by preventing the navigation and showing the library instead.

### Known tripwires (as of 2026-04-15)
- **Test offline on real production, not localhost.** Loopback is always reachable even with wifi off. Airplane mode on iOS leaves wifi on if you manually re-enabled it; Control Center shows the wifi icon state. Real test = airplane mode ON + wifi explicitly OFF + tap production URL in Safari.
- **First reload after a deploy still runs the old SW.** The browser fetches the new `sw.js` on any navigation, but the currently-controlling SW is the old one until activate fires. With `skipWaiting` + `clients.claim` the new SW takes over quickly, but users typically need two reloads before the new code is definitely running.
- **Cache-busting is per-cache-name, not per-file.** The `offline-shell-v2` bump wipes the old shell cache but leaves `offline-tl-{tlId}-v1` untouched. If a shipped narrative is corrected and you want users' downloaded copies to update, you either need to bump the per-TL suffix (wipes all downloads, bad UX) or wait for users to manually delete + re-download.
- **Runtime shell cache is lenient.** Users get offline content "for free" for any page they visited online before going offline, even without tapping download. The client-side offline guard only looks at explicit downloads, so runtime-cached pages still navigate through. This is a feature, not a bug — more content offline is strictly better than less.

## Summary text selection
- The sticky chapter header is split into: **clickable header row** ("01" number + title + chevron, `select-none` + pointer handlers) → **non-clickable summary area** (READ button + SUMMARY label + bullet list, default text selection, no pointer handler). Layout indented via `pl-10`.
- Event/glossary/cross-link anchors inside bullets still work — their click events bubble up to the narrative-reader-level click delegation as before.

## Reader page header layout
- Accent-colored vertical bar (3.5px, rounded) to the left of the TL title.
- Title in Lora serif (text-2xl, bold, foreground color — not accent).
- "N CH" pill (accent background, white text, rounded-full) right-justified on the title line.
- Subtitle in italic, muted, indented to align with title text (`pl-[16.5px]`).
- Chain navigation row positioned below the title block (not above).

## Accent color contrast
- Nile Valley and Nubian Tradition yellow accent colors were darkened (`#a67c00` and `#b8860b` respectively) to ensure adequate contrast for white text on solid accent buttons (READ THE FULL CHAPTER, Read Next, Continue Reading banner).
