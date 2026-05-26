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
- App root (`/`): the four-thread launcher (Civilizations / Wars / Art / Music) + discovery feed. The civ chronology home ("The Civ Lib") is at `/civ`; old TL Navigator at `/navigator`; legacy ModeShell home at `/classic`.
- Chapter page: single-page accordion, no per-chapter routes.
- **Swipe right on summary page** (dx > 80px, no chapter expanded) navigates home.
- **Last-viewed civ**: saved to `localStorage['last-viewed-civ']`, used by home page for initial highlight.
- **Whole-row tap**: tapping any `hasContent` row on home navigates to that civ.

## Top navigation — ThreadBar + breadcrumbs (app-wide, redesigned 2026-05-24)
- **ThreadBar** (tier 1, `thread-bar.tsx`) — a persistent top row on every section/reader page (NOT on `/`, which is the launcher): a Home icon, then Civ · War · Art · Music, then search + dark-mode. Everything is grayscale **except the current section**, which shows its accent colour (tinted icon + coloured label) with a short **centred underline** — no filled background. Active section is derived from the path. Search is owned here (works on every page; overlay portalled to `<body>` to escape the bar's backdrop-filter); the app root carries the same search in its own header.
- **Section homes** (`/civ`, `/war`, `/art`, via `section-home-bar.tsx`) — just the ThreadBar; no breadcrumb pill row (the page's own browsing — Timeline/Chains/Globe + filter, the war spine, the art era hub/tree — covers it).
- **Deep-page breadcrumb** (tier 2) — **plain text + ▾ chevrons** (no pill chips), separated by `›`, uniform across civ/war/art, starting at the specific item (no "All X" root):
  - Civ reader (`civ-breadcrumb.tsx`): `Region › Chain › Civ › Chp`. The Chp crumb appears only once a chapter is open; standalone civs always show a "Standalone" chain crumb (whose menu still lists the region's real chains) so you're never trapped.
  - War deep (`mode/war-chrome.tsx` `WarBreadcrumb`): `ACW › Theatre › Battle` (+ `Chp` on a battle/theme section page).
  - Art (`mode/art-chrome.tsx`): `Era › Movements › Works` — the deeper levels render as picker crumbs scoped to the era/movement so you can drill from the bar (skipped when a level has no authored content).
  - Each crumb is muted text; the current/leaf one is accent. Tapping a crumb opens its switch menu (the menu items navigate).
- **View toggles** — Timeline/Dossier (war) and Eras/Tree (art) are compact segmented controls rendered **just below the hero** (sticky under the breadcrumb on scroll), `WarViewToggle`; Art's Eras/Tree sits at the top of the era list. The old back-arrow button is gone (ThreadBar + breadcrumb + browser back cover it).
- **Readers never truncate section titles** — the war sub-header and the war/art prev/next links wrap instead of clipping with an ellipsis.

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

## Art hero (image-shaped frame) — locked 2026-05-24
- **The hero frame matches the IMAGE's own dimensions.** A single artwork hero (`ArtHero` in `mode/art-chrome.tsx`) renders at its natural aspect ratio (`width:100%; height:auto`) — the frame takes the painting's shape. A square or portrait work is **never** cropped or letterboxed into a fixed landscape band.
- This retires the old fixed-240 `fit="cover"/"contain"` scheme, which caused the same defect repeatedly: squarish/portrait works (e.g. the *Demoiselles* work hero) read as "cut off." `fit`/`focus` stay on the prop type for compatibility but no longer crop a single hero — do not use them to patch framing.
- Only exception = a deliberate **portrait diptych** (`heroImages` with 2+ entries) — two works side by side at equal height for a genre/movement. A genuine cropped banner *detail* is a separate, explicit choice, credited "(detail)". Full rule + sourcing in `audits/art-vertical.md` §5b.
- **Artwork pages have NO hero.** The Canvas viewer is the signature visual for every work; a compact text header (name · artist·year · one-line hook) replaces the banner. Every artwork authors `annotations` as prose pointers (`{label, where, detail}` — see "Art WORK page — anatomy"); NO image crops/pins (coordinates can't be placed blind).

## Cards — the locked design (locked 2026-05-25)
The art cord/timeline cards (era + movement) all render through ONE shared
component, **`src/components/mode/orientation-card.tsx` (`OrientationCard`)** —
that's the single source of truth, so the design can't drift between timelines.
The rules it bakes in (all of these are recurring defects it exists to prevent):

- **The image is shown WHOLE — never cropped to a frame.** The only thing ever
  removed is a true scan border (mount / plate edge / paper margin / engraved
  caption). When a source scan carries that chrome, trim it with `sharp`
  (`.trim()` or an explicit `.extract()`), eyeball it, and **self-host the trimmed
  crop** in `public/art/` (e.g. `salon-1787.jpg` from the Met's mounted engraving;
  `demoiselles.jpg` from the en scan's gray top border).
- **The image fills 3 sides of the card; text is on the 4th**, by orientation:
  - **landscape / square** → image on TOP, filling top/left/right; text below.
  - **portrait** (clearly tall) → image on the LEFT, filling top/left; text on the
    right gets the rest, so the text column stays roomy.
  Orientation is **auto-detected** from the loaded image — portrait only when
  `naturalHeight > naturalWidth × PORTRAIT_RATIO` (≈1.18), so **near-square works
  (~1.0–1.15) stay on TOP** (a near-square left image would starve the text). An
  optional `portrait` hint avoids the load-time reflow; the author just supplies an
  image — no per-card tagging or sizing.
- **Screen-relative width caps (user rule):** a landscape/square card is never wider
  than **¾ of the screen** (`75vw`); a portrait **image** is never wider than **½
  the screen** (`50vw`). Per-size px values are the wide-screen target; the vw caps
  win on phones. The card **grows in height** to fit; it never stretches full-width.
- **Blurbs are written to FIT** (authoring rule). The image is the fixed element
  (shown whole, sized by the width caps); the **blurb is the flexible element** — the
  author writes it to fill the space the image leaves (a bit longer for a tall
  portrait so the text runs down beside it; freer below a landscape). Card size is
  responsive, so "fit" targets the primary phone layout; the CSS is the safety net
  (card always grows, never crops or clips), so an imperfect fit is never broken.
- **A card NEVER truncates text.** No `-webkit-line-clamp`, no `text-overflow:
  ellipsis`, no JS substring (`short()`-style) on a title/blurb. `textWrap:
  'pretty'`; the card grows. (Single-line ellipsis on *breadcrumb / nav chrome* is a
  separate, deliberate narrow-screen guard and is allowed.)
- **Text is TOP-aligned** in every card (title at the top, flowing down) — not
  vertically centered — so all cards read consistently.
- **Text sizes are MATCHED across all cards** regardless of size variant: title
  18px semibold serif, blurb 13.5px serif, sub a 10px uppercase label, credit 9.5px.
  Only the image size (and the XL flagship's accent ring) varies between cards.

**War cards** (`war-battle-card.tsx`, `war-front-door.tsx`) keep their own design —
the "escalating spine" where card height encodes the war's size, plus gradient
placeholder tiles, image-caption overlays, and Read/Soon badges — but they obey
the same no-crop / **no-truncation** floor (cards use `minHeight`, not a fixed
`height`, so un-clamped text can't clip). If war cards are ever unified onto
`OrientationCard`, add gradient-placeholder + overlay + badge support to it first.
**Known still-clamped spot to revisit if flagged:** the dense home-feed tiles
(`app-home.tsx` `clampN` + `short()`), kept bounded for the multi-column grid.

## Art movement page — anatomy (locked 2026-05-25)
The movement dossier (`mode/.../art-movement-page.tsx`) is a single scroll column
of **always-visible** sections (NO accordions — the jump-bar replaced them):
**Overview** (hero + hook + "Read the story") → **The break** (why it's genuinely a
new movement) → **The manifesto** (the movement in its own words) → **Influence** (the
influence-flow diagram) → **Details** (stats · faceoff · artists · parallels) →
**Works** (the featured-works cord) → **Canon** (the full checklist). Each section is
wrapped in `<div id="sec-…" style={{scrollMarginTop:46}}>`.

- **The break** (`WhatChangedBlock`, `ArtMovementContent.whatChanged` / `ArtEraContent.
  whatChanged`; locked 2026-05-25) — makes the rupture explicit, in pictures AND words:
  a **side-by-side before→after contrast** (a born-verified representative work of what
  came *before* — often outside our corpus, e.g. the academic Salon art a movement
  rejected — with a "vs" pivot, beside a work of this movement; both tap-to-zoom), then
  a short gated passage naming what *concretely* changed (subjects, finish, scale,
  viewpoint — not "revolutionary"). Sits right after Overview so the break lands before
  the reader dives in. Omitted → the chip + section just don't render. Eras carry the
  same block. (User directive: "each era and movement must explain why it is in fact a
  new era/movement — what changed — with works contrasting the difference"; applies to
  music too.)

- **The manifesto** (`ManifestoBlock`, `ArtMovementContent.manifesto` / `ArtEraContent.
  manifesto`; locked 2026-05-25) — the movement's founding document in its own words. A
  **pull-quote plate** (serif italic, an accent left-rule) of 2–3 born-verified excerpt
  lines, an attribution line (title · author · date · venue), then a short gated passage
  on what it claimed and why it mattered, and an optional **`sourceUrl`/`sourceLabel`**
  external link to the actual full text ("Read … ↗", new tab — the URL is born-verified
  to resolve AND to be the right document: Realism → the Getty/Nochlin 1855 text PDF;
  Cubism → Columbia's *Du Cubisme* primary-source PDF). When a movement deliberately had **no**
  manifesto, set `absent: true` → the block titles itself "No manifesto" and the prose
  tells the story of the silence (Cubism: Picasso/Braque published nothing; the theory
  came from others). Sits right after "The break". No images, so no lightbox. Omitted →
  the section just doesn't render. **It gets NO jump-bar chip** — the bar already fills a
  360px screen at 6 chips and must not scroll (see below), so the manifesto is reached by
  scrolling past The break, not by a 7th chip. Shipped first on Realism (Courbet 1855) +
  Cubism (absent). (User: "manifestos are a big part of art/music movements — include them.")

- **Sticky section jump-bar** — `SectionNav` (in `art-chrome.tsx`) renders as the
  FIRST child of `ArtPageShell` (so its parent IS the inner scroll container).
  A one-row chip strip (`Overview · Break · Influence · Details · Works · Canon`),
  sticky at `top:0`. Tapping a chip scrolls to that `sec-…` id and highlights it; a
  scroll-spy highlights the section in view ("you are here"). **Two bugs it must keep
  fixing:** (1) images above reflow after the first scroll → the jump lands short, so
  `jump()` **re-scrolls at 250ms + 600ms**; (2) the spy would re-light passing sections
  mid-jump → a `lockRef` **freezes the spy until ~850ms** after a jump. **The whole row
  must FIT one screen with NO horizontal scroll (user, 2026-05-25)** — `SectionNav` is
  content-sized + compact (font 10.5, padding `4px 7px`, gap 4, `overflowX:hidden`,
  centered) so up to 6 short chips fit a 360px phone (~346px). Keep labels short (≤8
  chars — "Break", not "The break") and cap at ~6; if a vertical needs more, merge
  blocks, don't let it scroll.
- **Influence flow lineage images** — every "Grew out of / Led to" node
  (`ArtLineageChip`) carries a born-verified `img`: a representative PD work for the
  concept (e.g. Daguerre's *Boulevard du Temple* for Photography, Vermeer's *Milkmaid*
  for Dutch genre, Bellows' *Cliff Dwellers* for the Ashcan School). A chip with no
  `img` falls back to its palette gradient — acceptable as a stopgap, but treat a
  gradient chip as an unfinished node to source, not a final state. Eyeball every
  subject (Commons search returns wrong files).
- **Artist row headshots** — `ArtistsStrip` shows a born-verified PD portrait or
  self-portrait per artist (`MovementArtist.photo`), circular, face-biased
  (`objectPosition '50% 18%'`), sepia-toned, with a **gradient fallback** (the
  artist's palette) when there's no photo or it fails. Léger has no clean-PD
  portrait → he keeps the gradient; that's expected, not a bug.
- **The full canon** — the count behind the "Canonical works" stat is backed by a
  real, browsable list (`ArtMovementContent.canon`: `{year,name,artist,wiki?,img?,
  nsfw?}`). One row each: **thumbnail → tap opens the `Lightbox`**; year; name; artist.
  The stat itself is a button that jumps to this section. Rules:
  - **Thumbnail** (`img`): a born-verified image of THE WORK. All canon works are
    pre-1931 → US-PD → inlinable from Commons/`en`. Confirm every subject by eye
    (Commons text search returns wrong files — a Japanese print came back for Léger's
    *Woman in Blue*, a writer for *The Cardiff Team*). `CanonThumb` degrades to a
    dashed placeholder on load-failure. If a specific work has no free image, swap the
    row to an equally-canonical work that does (e.g. *Ma Jolie*→*The Accordionist*,
    *Under the Birches*→*The Oaks at Apremont*) rather than ship a gap.
  - **Link** (`wiki`): the work's OWN Wikipedia article ONLY. **No artist-page
    fallbacks** (a missing link beats a broad one — user rule 2026-05-25); works
    without their own article are plain text.
  - **Explicit works** (`nsfw:true`, e.g. Courbet's *The Origin of the World*): keep
    them listed + linked, but **no inline thumbnail** and an `explicit` tag on the
    name, so tapping through is a choice, not an ambush. Don't drop the work; don't
    show it inline.

## Art WORK page — anatomy (locked 2026-05-25)
The work dossier (`[workId]/art-work-page.tsx`) follows the same always-visible +
jump-bar pattern as the movement page (NO accordions). Sticky `SectionNav` chips:
**Canvas · Look closer · Story · Provenance** (the "Look closer" chip only when the
work has annotations). Sections, each `<div id="sec-…" scrollMarginTop:46>`:
- **Canvas** — compact text header (name · artist·year · hook) + the whole painting
  (`CanvasViewer`, shown un-cropped; NO hero banner), **tap to pinch-zoom in the
  lightbox** ("Tap to zoom" affordance), + the museum caption. This is the ONE copy
  of the work on the page.
- **Look closer** — the `LookCloser` block: a **numbered list of prose pointers**
  only (NO second copy of the painting — it points back up to the Canvas, "Find these
  on the canvas above"). Each pointer is a `CanvasAnnotation` of `{label, where,
  detail}` — `where` is a short scannable location phrase ("Center foreground, low").
  **We do NOT crop or pin the image** (retired 2026-05-25): any coordinate is authored
  *blind* — we can't see where it lands, so a box/dot that's a few % off shows the
  wrong content. Words are the one thing we can place reliably. The legacy `x/y/w/h`
  fields remain on the type, optional + unused.
- **Story** — the numbered chapter cord (links into the section reader).
- **Provenance** — the at-a-glance `StatsRow` is **folded in here** (there was little
  under the old "Details" accordion), above the provenance ledger.

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
