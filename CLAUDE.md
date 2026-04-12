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
    page.tsx                    — home: civilization picker
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
  lib/
    data.ts                     — reads content JSON at build time
    types.ts                    — NarrativeChapter, TlEvent, TimelineNarrative, etc.
    accent-colors.ts            — per-TL accent colors with WCAG-safe text/badge variants
    categories.ts               — event category metadata (colors for 8 categories)
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
- **Dark mode** — class-based with anti-flash script, softened to `#1c1c1f` / `#e5e5e5` (WCAG AAA 13.6:1). Bottom sheets use lighter `--surface` for elevation.
- **Text size** — 5 steps (14-22px), persisted, affects both summaries and prose equally
- **WCAG AA contrast** — all text passes 4.5:1, accent colors have light/dark mode variants
- **Viewport lock** — touch-action: pan-y prevents horizontal drift on mobile
- **Lightbox** — double-tap to toggle zoom (exactly centered on tap point), pinch, pan, swipe-down dismiss, backdrop tap dismiss
- **Gestures**: tap or swipe-right on chapter header to collapse; swipe-right on summary page navigates home
- **Image review** — two pages: `/review/{tlId}` for QA of current images, `/candidates/{tlId}` for approving/rejecting new candidates with editable captions

## Reader Features (planned)
- Save-my-place (tap any sentence)
- Footnotes
- Theme threads (track a concept across chapters)
- Deep links to specific sections
- Outline summaries
- Top drawer: interactive map (Ch 1), self-building timeline (Ch 2+)
- TL Navigator: pan-and-zoom horizontal timeline for civilization discovery

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

**Mesopotamia chain** (pilot — complete):
1. ✅ mesopotamia — 13 chapters, fully audited, 85 curated event links, **334 curated glossary links**, **84/89 images (95%)**, 13 chapter maps (verified)

**India chain** (in progress):
1. ✅ indus-valley — 10 chapters, audited, 66 curated event links, Ch 1 glossary (28 terms), **48/56 images (86%)**, **chronological summary bullets for all 10 chapters**, 10 chapter maps
2. vedic-period
3. maurya-empire
4. post-maurya-kingdoms
5. gupta-empire
6. medieval-india
7. delhi-sultanate
8. mughal-empire
9. modern-india

**Egypt chain** (after India):
- ancient-egypt series (TBD split)

## Color System
- **Region colors**: 1-2 colors per region, not per TL (too many AA-compliant shades needed)
- **Accent colors**: defined in `src/lib/accent-colors.ts` with base/text/badge variants
- **Category colors**: 8 event categories in `src/lib/categories.ts` with light/dark mode variants
- **All contrast ratios documented** in accent-colors.ts comments

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section — a brief numbered list of what was completed with one sentence per item.

## Git
Always commit and push completed work without asking.
