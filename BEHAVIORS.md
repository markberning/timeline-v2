# Expected Behaviors

Source of truth for how the reader app should behave. Update this when we change or add a behavior so future work has a spec to check against.

## Chapter accordion
- Collapsed: shows number, title, date range, and EITHER:
  - a bulleted chronological list of what happens in the chapter with inline event/glossary links + a "Read chapter →" button (when the summary entry has a `bullets` array), OR
  - the legacy 2–4 sentence paragraph summary + category-colored event chips (fallback when no bullets).
- Tap header → expand that chapter. Other chapters become `display: none` (not just hidden visually).
- Expand scrolls the section to the top of the viewport (under the 40px sticky controls bar). Uses `section.offsetTop - 40` not the sticky header's rect.
- Chapter map (Gemini-generated) sits above the prose with `aspect-ratio: 1408/768` reserved so layout is stable before the image loads.
- Tap sticky header while expanded → collapse. Swipe right anywhere in the body → collapse. × close button at the bottom also collapses.
- On collapse: `window.scrollTo` the just-closed header to the top, then pulse it with a 1.5s accent-colored background flash.
- Only one chapter open at a time. Scroll never spills past the end of the open chapter.

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
- Wiki extract rendered as HTML (so glossary links inside it are clickable).

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

## Text size
- 5 steps (0.875rem → 1.375rem) via A/A buttons, persisted to `localStorage['textSize']`. Affects both summaries and prose equally.

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
- Each row is a single absolutely-positioned element with one `translate3d(x, y, 0)` transform per frame. Rows with chain membership get a companion chain-icon element (separate ref, `translate3d(0, y, 0)`) pinned to `right: 12`.

### Data
- 71 TLs in `NAVIGATOR_TLS` (`src/lib/navigator-tls.ts`): id, label, subtitle, region, startYear, endYear, optional `isReal` and `hasContent` flags. Only `mesopotamia` and `indus-valley` have `hasContent: true`; everything else renders at opacity 0.35.
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
  2. Chain-pull offset (x-only, see below), then write one `translate3d` per row to `barRefs[i]` and another to `iconRefs[i]` (icons track row y but keep x anchored to the viewport's right edge).

### Custom touch scroll
- `overflow: hidden` + `touch-action: none` on the container; body is locked via `position: fixed` while the navigator is mounted (see iOS hardening below).
- `scrollOffsetRef`, `velocityRef`, `lastTouchY/Time`, `isTouchingRef`, `momentumRafRef` all in refs — no React re-render during scroll.
- `onTouchMove` accumulates `scrollOffset -= dy`, clamps to `[0, maxScroll]`, updates velocity as `-dy * (16.67 / dt)`, and calls `render()` synchronously.
- `onTouchEnd` kicks off friction-decay momentum via rAF when velocity exceeds `MIN_VELOCITY = 0.05`. `FRICTION = 0.94`. Wheel events handled similarly for desktop.
- `maxScroll = totalHeight - vh + rowHeight` — one row of breathing room below the last TL so it doesn't sit flush at the bottom.

### Tap detection
- `TAP_MOVE_THRESHOLD = 10px`, `TAP_TIME_THRESHOLD = 500ms`, and a `wasMomentumRef` flag mean "tap during active momentum stops the scroll and does not fire any action".
- On a clean tap, compute `rowIdx = floor((touchY - rect.top + scrollOffset) / rowHeight)`.
- **Icon zone check first**: if `touchX > vw - ICON_TAP_WIDTH` (48px) AND `chainMembers.has(rowIdx)`, start a chain pull and return.
- **Navigation next**: if `tls[rowIdx].hasContent`, use `window.location.href = '/' + id` — NOT `router.push`. Client-side React transitions leave iOS Safari's scroll engine in a stuck state for several touches on the next page; a hard navigation sidesteps it.
- Otherwise, fall through to momentum launch.

### Chain icons + chain-pull animation
- `chainMembers` useMemo (rebuilt whenever `tls` changes) walks `TL_CHAINS` from `reference-data/tl-chains.ts` and builds a `Map<rowIdx, Set<rowIdx>>` of sibling row indices. Union across all chains a TL belongs to (some TLs like `persian-empire` are in multiple chains).
- Only rows with at least one visible sibling render a chain-link SVG, anchored at `right: 12` on a separate ref'd element with its own `translate3d(0, y, 0)` transform. Icon color is `theme.textPrimary` at opacity 0.45. `pointer-events: none` — the container's touch handler does the hit-testing by coordinates.
- On an icon-zone tap, `startChainPull(tappedIdx)` sets `chainPullRef = { startTime, tappedIdx, memberSet }` and launches an rAF loop that calls `render()` each frame. The animation has three phases:
  - **Pull-in** (`PULL_IN_MS = 400`, ease-out): each sibling's `x` lerps from natural toward the tapped row's natural x with factor `1 - (1 - t)²`.
  - **Hold** (`PULL_HOLD_MS = 200`): `factor = 1`, chain clustered at strength `PULL_STRENGTH = 0.8`.
  - **Release** (`PULL_RELEASE_MS = 600`, ease-in): factor `(1 - t)²` back to 0. Siblings glide back to their natural positions.
- **Only x is pulled**, not y. Vertical spacing stays untouched so the cluster reads as a column at the tapped row's x. This preserves chronological ordering visually.
- **Known limitation**: siblings off-screen (above or below the viewport) are still pulled (their transforms are updated) but aren't visible. Scrolling isn't auto-triggered to reveal them. Future work: either scroll to center the tapped chain during pull, or constrain the pull so every sibling's target y stays within the viewport.

### iOS Safari hardening
- Navigator wrapper uses `position: fixed; top: 0; left: 0; right: 0; height: 100svh`. `inset: 0` would use the large viewport and extend behind the bottom address bar; `100svh` respects the toolbar.
- While the navigator is mounted, a useEffect in `tl-navigator.tsx` locks the body: `html.overflow = 'hidden'`, `body.overflow = 'hidden'`, `body.position = 'fixed'`, `body.top/left/right = 0`, `body.overscroll-behavior = 'none'`, `body.touch-action = 'none'`. Required because iOS Safari rubber-bands the body and drags `position: fixed` children around, even with `overscroll-behavior: none`.
- On unmount, the cleanup restores the body to explicit reset values (`position: static`, `touch-action: pan-y`, `overflow: visible`), forces a reflow via `void body.offsetHeight`, calls `window.scrollTo(0, 1); scrollTo(0, 0)` to kick Safari's scroll engine out of its cached "body not scrollable" state, and then drops the overrides back to the captured previous values. Even with all of this, navigating via `router.push` leaves Safari holding onto enough state that the first few touches on the narrative page get swallowed — that's why tap navigation uses `window.location.href` instead.

### Stone theme
- The only theme. Defined in `src/lib/navigator-themes.ts` as `STONE_THEME`. App bg `#22201e`, header bg `#2a2724`, `rowHeight: 56`, `bar.style: 'line'` (bar is a thin region-colored hairline, not a filled rectangle), region palette tuned warm.
- Label stack per row: line (3px colored hairline at `scaleX(barW)`) → name row (`[dot] Name · start–end`) → subtitle (italic small opacity 0.55). Dates use `formatYearRange` that combines eras when both years share one (`1922–1991 CE`, `5000–539 BCE`).

### Deferred / out of scope
- Reveal off-screen chain siblings during pull (see Known limitation above).
- Tap-to-expand subtitle / tooltip preview of a non-content TL.
- Per-chain coloring of the chain icon (currently neutral).
- Follow-mode and gap markers from earlier swimlane experiments — superseded by the flow layout.

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
