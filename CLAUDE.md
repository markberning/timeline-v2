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
0. **Pull v1 reference data** — before starting a new TL, check `~/projects/personal/timeline/src/data/{tlId}.json`. v1 has curated pitch/spans/events for most of the 71 navigator TLs in the same format as v2. Copy it to `reference-data/{tlId}.json` and write the narrative against it. Only build reference data from scratch if v1 genuinely has nothing. Before starting narrative writing, **review the v1 event list for coverage gaps** — some TLs never got a v1 overhaul and may be thin on events. If the event count looks light relative to the civilization's scope, propose additions up front and expand the reference data before writing begins.
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
12. **Generate chapter maps** — use Gemini with prompts from `map-prompts.md`, save to `public/maps/{tlId}/chapter-{N}.png`. Then run the non-destructive optimize script to produce `.webp` copies at quality 85 alongside the PNGs. The reader loads `.webp` via the image probe in `chapter-accordion.tsx`.
13. **Review images** — `/review/{tlId}` page for approving/rejecting event images (dev mode only)
14. **Ship toggle** — flip `hasContent: true` on the TL's entry in `src/lib/navigator-tls.ts` to make the row tappable on the home navigator.

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
    chapter-accordion.tsx       — expandable chapter with sticky header + map + X-close / Read-next bottom nav
    narrative-reader.tsx        — client wrapper for event + glossary + cross-link click delegation; reads ?chapter=N on mount
    event-sheet.tsx             — bottom sheet for event details (image, caption, desc/details rendered as HTML, wiki extract)
    cross-link-sheet.tsx        — cross-cultural "Meanwhile in..." sheet; MutationObserver on <html> dark class
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
  parse-narratives.ts           — markdown → JSON build pipeline (two-pass: collects TL metadata first, then injects cross-links before event/glossary)
  enrich-events.ts              — Wikimedia API: thumbnails, extracts, captions (cached); batch size 20 with exlimit=20, redirects=1, safeDecode slugs
  build-static.mjs              — wraps `next build`, stashes dev-only routes (/api, /candidates, /review) during static export
  optimize-maps.mjs             — one-shot PNG → WebP converter for chapter maps
  linkify.ts                    — legacy regex linkifier (replaced by curated links)
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
- **Sticky controls** — back link, text size (A/A), dark mode toggle always visible
- **Chapter maps** — Gemini-generated maps at top of each expanded chapter with lightbox zoom (reserved aspect ratio so expand-scroll lands cleanly)
- **Event links** — curated context-aware links in prose, colored by category (8 categories). Now also auto-injected into `event.description` and `event.details[].text` inside the EventSheet (not just the Wikipedia extract).
- **Glossary links** — gray solid underline, curated per-chapter, opens bottom sheet with Wikipedia extract. All three shipped TLs now have full glossary coverage: Mesopotamia 336, Indus Valley 226, Ancient China 208. Glossary-linked inside chapter prose, summary bullets, event descriptions, event details, and event wiki extracts.
- **Cross-cultural ("CCC") links** — dashed underline+overline bracketed phrase, colored in the *target* TL's chain color (not the host TL's). Tap opens a `CrossLinkSheet` with "Meanwhile in {label}" + a 1–3 sentence blurb + "Read {label} Ch N →" button that hard-navigates to `/{tl}?chapter=N` so the target chapter auto-expands on arrival. Curated per-chapter in `content/.cross-links-{tlId}.json`. Current inventory: Meso 11, Indus 28, Ancient China 17 (56 total). One `matchText` must cover exactly one civilization — compound phrases like "Egypt and Mesopotamia" get narrowed to just the linked civ.
- **Event bottom sheet** — tap a linked event for image, caption, description, details sections, Wikipedia extract, read-more link. Description and details now render as HTML so inline glossary links work inside them.
- **Glossary sheet** — gray-themed smaller variant of EventSheet.
- **Cross-link sheet** — accent-colored header, MutationObserver watches `<html>` for `.dark` class changes so the accent reactively swaps between light and dark target colors when the user toggles the theme mid-session.
- **Summary bullets** — chronological bullet summary per chapter with inline event/glossary/cross-link auto-linking + prominent "Read Chapter N →" button. Used for **all three TLs** now (Meso 121 bullets across 13 chapters, Indus 60+ across 10, Ancient China 52+ across 8). Bullet length scales by chapter density (6–12 per chapter).
- **Chapter bottom nav** — every expanded chapter has a small × close button on the left and a prominent accent-colored "Read Chapter N+1 →" button filling the rest of the row. Last chapter shows only the ×. Tapping Read Next sets `openChapter = N+1`, which triggers the expand effect → `window.scrollTo({top: 0})` so the next chapter renders flush under the h1.
- **Image enrichment** — Commons thumbnails + Wikipedia page image fallback, all verified at build time
- **Image captions** — hand-written captions in `.caption-overrides.json`, informal 1–2 sentence voice
- **Dark mode** — class-based, hardcoded `dark` on `<html>` in layout.tsx (anti-flash script only removes it if user has explicitly chosen light). Background `#22201e` warm dark, matches the navigator's Stone theme. `color-scheme: dark` declared so iOS Safari doesn't apply auto-dark. Bottom sheets use lighter `--surface` `#2f2c29` for elevation.
- **Text size** — 5 steps (14-22px), persisted, affects both summaries and prose equally
- **WCAG AA contrast** — all text passes 4.5:1, accent colors have light/dark mode variants
- **Viewport lock** — touch-action: pan-y prevents horizontal drift on mobile
- **Lightbox** — double-tap to toggle zoom (exactly centered on tap point), pinch, pan, swipe-down dismiss, backdrop tap dismiss
- **Gestures**: tap or swipe-right on chapter header to collapse; swipe-right on summary page navigates home
- **Image review** — two pages: `/review/{tlId}` for QA of current images, `/candidates/{tlId}` for approving/rejecting new candidates with editable captions. These are dev-only — stashed out of the tree during static build via `scripts/build-static.mjs` so production doesn't include them.
- **Chapter expand/collapse scroll** — on expand (user tap or cross-link auto-expand via `?chapter=N`), always `window.scrollTo({top: 0})`. Because siblings are `display: none` while one chapter is open, the opened chapter is always the first visible chapter and sits right below the h1 + "N chapters" subtitle, so scrollY=0 shows sticky nav → h1 → subtitle → chapter header stacked naturally. On collapse, `sectionRef.scrollIntoView({block: 'start'})` honors the section's `scrollMarginTop: navHeight` so the just-closed chapter header lands cleanly below the sticky nav (previous headerRef-based version hid it behind the nav).
- **TL Navigator (home at `/`)** — custom-touch scroll flow layout of 71 civilizations. `TlFlow` (in `tl-flow.tsx`) owns scroll completely: vertical-only, rAF friction momentum, each row rendered as a single `translate3d(x, y, 0)` per frame. Row x is a diagonal offset (row y in viewport × max indent) plus a gap-aware year-offset so chronological clusters pack tight and big historical jumps spread. Rows in the bottom third ease in from the lower right. Desktop mouse support via parallel `pointerup` listener. Constants live in `tl-flow.tsx`.
- **Navigator header** — "Stuff Happened — A Timeline App" with small "v1 ↗" pill to `https://v1.stuffhappened.com`.
- **Stone theme** — the only navigator theme. Warm dark bg `#22201e`, region palette, line-style bars: row 1 colored hairline + dot + name, row 2 faded dates + chain chip, row 3 italic subtitle.
- **Chain chip** — tagged `data-chain-chip="1"` + `data-chain-id="..."` with `pointer-events: auto` on an otherwise non-interactive row. Tap hit-tested via `elementFromPoint(...).closest('[data-chain-chip]')`.
- **Subtitles** — every NavigatorTl has a short descriptive+evocative tagline rendered in small italic below the name.
- **hasContent dimming** — rows with `hasContent: true` (mesopotamia, indus-valley, ancient-china) render at full opacity; others at 0.35.
- **Tap to navigate** — short tap on a `hasContent` row uses `window.location.href` (NOT `router.push`). Client-side React transitions leave iOS Safari's scroll engine stuck; a hard nav discards the page and starts fresh.
- **Zone toggles** — single tap toggles a zone; double-tap solos it; double-tap again restores all five.
- **Chain-solo mode** — tapping a row's chain chip solos its chain (see `project_navigator_chain_solo.md` memory and `tl-flow.tsx` `soloChainId` prop). Non-members slide off-screen right and fade; members stack centered, 650ms eased transition. The old "chain pull" animation is gone.
- **WebP chapter maps** — stored as `.webp` quality 85 under `public/maps/{tlId}/chapter-{N}.webp`, converted via `scripts/optimize-maps.mjs` + sharp. 56 MB → 2.1 MB total with no visible quality loss.
- **iOS scroll hardening** — navigator uses `position: fixed; height: 100svh`; body locked while mounted; cleanup forces reflow + `window.scrollTo(0, 1); scrollTo(0, 0)` to kick Safari's scroll engine.

## Reader Features (planned)
- Save-my-place (tap any sentence)
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

**Mesopotamian Succession chain** (pilot — complete):
1. ✅ mesopotamia — 13 chapters, fully audited, 85 curated event links, **336 glossary links**, **121 summary bullets across 13 chapters**, **11 cross-links**, 84/89 images (95%), 13 WebP chapter maps, label "Mesopotamia"

**Indian Subcontinent chain** (in progress):
1. ✅ indus-valley — 10 chapters, audited, 66 event links, **226 glossary links**, **60+ summary bullets**, **28 cross-links** (heaviest edge, Ch 7 "A World Connected" has 8 links to Meso), 48/56 images (86%), 10 WebP chapter maps, label "Indus Valley"
2. vedic-period
3. maurya-empire
4. post-maurya-kingdoms
5. gupta-empire
6. medieval-india
7. delhi-sultanate
8. mughal-empire
9. modern-india

**Chinese Dynasties chain** (in progress):
1. ✅ ancient-china — 8 chapters (~20k words), full 5-persona audit (all 8 STRONG), 37 event links, **208 glossary links**, **52+ summary bullets**, **17 cross-links**, label "Ancient China", chapter maps pending. Backward cross-cultural pass applied to Mesopotamia and Indus Valley.
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

**Nubian Tradition chain** (in progress):
1. ✅ ancient-nubia — 8 chapters (~24k words), full 5-persona audit with must/should fixes applied, **54 reference events**, **52 event links**, **190 glossary links**, **18 forward cross-links + 11 backward into Meso/Indus/China**, parse-enriched (45 thumbs / 51 extracts / 44 captions), **8 WebP chapter maps** (Gemini-generated), navigator `hasContent: true`, **shipped live on stuffhappened.com**. Chain color: ochre/yellow (`nubian-tradition`). Summary bullets (`narratives/ancient-nubia.summaries.json`) NOT yet written.
2. kingdom-of-kush
3. kingdom-of-aksum

**Persian Tradition chain** (in progress):
1. 📝 elamite-civilization — reference data imported from v1 and expanded 35 → **51 events** (added Puzur-Inshushinak, Eparti I, Siwe-palar-hupak, Kudur-Nahhunte I, Humban / Kiririsha / Nahhunte pantheon entries, Igihalkid dynasty, Humban-Numena I, Kutir-Nahhunte III, Hutelutush-Inshushinak, Te-Umman / Battle of Til-Tuba, Shamash-shum-ukin alliance, "King of Anshan" title, Behistun Elamite inscription, Persepolis Fortification Archive). Covers 3200–500 BCE. 8-chapter narrative drafted (~24k words) + audit + must/should fix pass applied. Backward cross-cultural pass into Meso (+14) and Indus (+2) shipped. **Pending:** forward event links, glossary links, forward cross-links, summary bullets, chapter map prompts, chapter maps, image review, `hasContent` toggle.
2. persian-empire
3. safavid-persia

**Egypt chain** (after Elam wraps):
- ancient-egypt series (TBD split)

## Color System
- **Chain-driven accent colors**: defined in `src/lib/accent-colors.ts`. Every TL in the same chain gets the same accent color; every chain in the same region gets a distinct shade of the region's color family. Region families: Near East = amber/orange, Africa = yellow/ochre, Asia = violet/purple, Europe = blue/sky, Americas = green, Global = slate. `getAccentColors(tlId)` looks up the TL's first chain via `getChainsForTimeline` and returns the chain color (falling back to per-TL overrides or neutral gray).
- **All 18 chain entries contrast-verified**: text on white ≥4.5:1, white on badge ≥3:1 (AA-lg), base on dark `#0a0a0a` ≥4.5:1. Check via the Python script in the accent-colors comment history when adding a new shade.
- **Category colors**: 8 event categories in `src/lib/categories.ts` with light/dark mode variants.

## Session Conventions
At the end of every task or set of changes, always provide a **Changes made this pass** section — a brief numbered list of what was completed with one sentence per item.

## Git
Always commit and push completed work without asking.
