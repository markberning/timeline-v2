# Gemini map generation is DISABLED (cost control)

**Locked 2026-06-04.** AI map generation via Gemini is retired. Maps now come from
**real / period public-domain sources** (Wikimedia Commons, Library of Congress,
BnF, etc.), never generated. The F&I Ohio-Company page is the reference pattern:
the Mitchell (1755) and Lewis Evans (1755) maps, born-verified and web-sized.

## Why
The May 2026 civ-map build ran up a **$483.12 Gemini API bill** (project
`gen-lang-client-…`). It was NOT Google Maps Platform (that was $0.00) — it was the
Gemini image API. Breakdown:
- ~$238 — `Gemini 3 Pro Image` image output (drawing the maps + icons)
- ~$243 — `Gemini 3 Pro` text (the vision-QA step that critiques each map, ×retries)
- < $1 — Flash (negligible — the cost was the Pro models, not Flash)

Generated maps were also never grounded in real geography — Gemini *illustrates* a
map from a text prompt and can invent coastlines/rivers/borders, which is what the
(expensive) QA pass existed to catch. Real PD maps are accurate by construction and
cost nothing.

## What is disabled
A hard stop (exit 1) guards every Gemini map touchpoint unless `ALLOW_GEMINI_MAP_GEN=1`:
- `scripts/generate-maps.mjs` — civ chapter map generation (`--dry-run` still allowed; it makes no API call)
- `scripts/generate-war-maps.mjs` — war battle/theatre map generation (`--dry-run` still allowed)
- `scripts/audit-maps.mjs` — the vision-QA reviewer (the text-cost half)
- `scripts/maps-build.mjs` (the G4 gate) — no longer generates or QAs; it only
  **verifies a map file exists on disk for every chapter**. Missing maps fail the
  gate with "add a real / public-domain map", never a generation.

The 108 civs' already-shipped maps are static `.webp` files — they cost nothing to
keep serving and are untouched. `ship-check`'s "maps 1:1 with chapters" presence
check is unchanged (it was already free).

## Adding a new map
Source a real / period public-domain image, confirm its license on the Commons
`File:` page, web-size it, and drop it at `public/maps/<tlId>/chapter-N.webp` (civ)
or `public/war-img/<slug>.(jpg|png)` (war). Caption honestly (state the artwork's
real date if it post-dates the subject). Same born-verified bar as event photos.

## NOT covered (separate decision)
The icon generators (`gen-icons-all`, `gen-section-icons`, `gen-thread-icons`) also
use the Pro image model. They were a smaller contributor and are left as-is for now;
disable them too if icon spend matters.
