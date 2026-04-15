# Map Prompts for Gemini

One file per TL. Copy each prompt one at a time into Gemini. Save output as `public/maps/{civilization}/chapter-{N}.png` where `{civilization}` is the full TL id (e.g. `ancient-nubia`, not `nubia`). After all chapters for a TL are generated, run the non-destructive WebP conversion (keep the PNG originals) to produce `.webp` copies alongside the PNGs at quality 85. The reader loads `.webp` via the image probe in `src/components/chapter-accordion.tsx`.

## House style for every prompt

Every prompt must include an explicit chapter-title directive inline. Use this line verbatim (swap in the chapter number and title):

> The chapter title `"Chapter N: <Title>"` should appear at the top of the map, centered, in a clean serif font, above the map frame — not inside the map area itself. Match the title treatment of the previous Ancient Nubia and Indus Valley chapter maps exactly.

Do not rely on a top-of-file note to convey this — Gemini takes the chapter title instruction more reliably when it appears in the prompt body.

## Per-TL files

- [mesopotamia.md](mesopotamia.md) — 13 chapters (1–13)
- [indus-valley.md](indus-valley.md) — 8 chapters (2, 4–10; Ch 1 and Ch 3 not drafted)
- [ancient-nubia.md](ancient-nubia.md) — 8 chapters (1–8)
- [ancient-china.md](ancient-china.md) — 8 chapters (1–8)
- [elamite-civilization.md](elamite-civilization.md) — 8 chapters (1–8)

## Redos

First-run Gemini output had hallucinations on some maps — see [redo/](redo/) for tightened rewrites of the problem prompts. Specifically:
- [redo/ancient-china.md](redo/ancient-china.md) — Ch 4, 7, 8 (the three China maps with real errors)
- [redo/ancient-nubia.md](redo/ancient-nubia.md) — Ch 1–8 (all eight Nubia maps need redos)
