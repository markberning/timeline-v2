# Map Prompt Redos

Prompts in this folder are **rewrites of originals that produced hallucinations** on the first Gemini run. Each prompt has been tightened with explicit anti-hallucination directives targeted at the specific failure mode the original map exhibited.

## Common Gemini failure modes observed on the first run

1. **Duplicate labels** — Gemini rendered the same city / region / annotation in two places on the same map. Seen in 9 of 16 maps.
2. **Cataract numbering drift** — Gemini invented new names like "North Cataract" or rendered "Third Cataract" with the number "4" next to it.
3. **Garbled text** — Gemini invented words that look plausible: "cononniat" for "Third Cataract", "reachit" for "reach", "Kushi" for "Kush".
4. **Geographic orientation errors** — Memphis drawn west of Aswan; the Nile rendered flowing east-to-west instead of south-to-north; Lower Nubia placed south of Upper Nubia.
5. **Dropped site names** — the site name before the parenthetical got silently deleted on rendering.
6. **Label misplacement** — the Loess Plateau rendered east of Erlitou; the Yi River label placed on what was actually the Yellow River.

Every prompt in this folder opens with a **CRITICAL RULES** block addressing these failures. Nubia prompts also open with a **Nubia orientation rules** block clarifying the Lower/Upper directional semantics that Gemini kept getting backwards.

## What's in here

- [ancient-china.md](ancient-china.md) — Chapters 4, 7, 8 (the three China maps with real errors)
- [ancient-nubia.md](ancient-nubia.md) — Chapters 1–8 (all eight Nubia maps need redos)

## Workflow

1. Copy one prompt at a time into Gemini
2. Save output to `public/maps/{civilizationId}/chapter-{N}.png`, overwriting the old PNG
3. Re-run the non-destructive WebP optimizer to update the .webp copy
4. Visually re-check before shipping — if the redo still has errors, iterate on the prompt

## What was NOT regenerated

The following maps are clean and should be left alone:

- **Ancient China:** Ch 1, 2, 3, 5, 6
- **Ancient Nubia:** (none — all 8 had issues)
