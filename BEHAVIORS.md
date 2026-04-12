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
- Background `#1c1c1f`, foreground `#e5e5e5` — softened from near-black/near-white. Contrast ≈ 13.6:1 (WCAG AAA).
- Elevated surfaces (event sheet, glossary sheet) use `--surface: #2a2a2f` so they sit visibly above the page background.
- Toggled via sun/moon button, persisted to `localStorage['theme']`.

## Text size
- 5 steps (0.875rem → 1.375rem) via A/A buttons, persisted to `localStorage['textSize']`. Affects both summaries and prose equally.

## Navigation
- Home page: civilization picker.
- Chapter page: single-page accordion. No per-chapter routes.

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
