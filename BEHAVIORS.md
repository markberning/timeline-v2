# Expected Behaviors

Source of truth for how the reader app should behave. Update this when we change or add a behavior so future work has a spec to check against.

## Chapter accordion
- Collapsed: shows number, title, date range, 2–4 sentence summary, and event-link chips.
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
- Background `#1c1c1f`, foreground `#e5e5e5` — softened from near-black/near-white. Contrast ≈ 13.6:1 (WCAG AAA).
- Elevated surfaces (event sheet, glossary sheet) use `--surface: #2a2a2f` so they sit visibly above the page background.
- Toggled via sun/moon button, persisted to `localStorage['theme']`.

## Text size
- 5 steps (0.875rem → 1.375rem) via A/A buttons, persisted to `localStorage['textSize']`. Affects both summaries and prose equally.

## Navigation
- Home page: civilization picker.
- Chapter page: single-page accordion. No per-chapter routes.
