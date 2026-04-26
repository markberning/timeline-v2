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

**First-batch TLs:**
- [ancient-china.md](ancient-china.md) — Chapters 4, 7, 8
- [ancient-nubia.md](ancient-nubia.md) — Chapters 1–8 (all eight)
- [kingdom-of-kush.md](kingdom-of-kush.md) — see file
- [elamite-civilization.md](elamite-civilization.md) — Chapters 1, 3, 7, 8

**11-TL Gemini batch (April 2026) — review findings:**
- [ancestral-puebloans.md](ancestral-puebloans.md) — Ch 3, 4, 7, 8 (Ch 4 has the wrongly-attributed `chocolate residue` callout that was a real mislabel)
- [andean-kingdoms.md](andean-kingdoms.md) — Ch 2, 3, 4, 5, 6, 8 (six chapters; pervasive duplicated phrases and one fully-garbled annotation in Ch 4)
- [ancient-japan.md](ancient-japan.md) — Ch 1, 4, 8 (Ch 8 has hallucinated battle "Midani"; Ch 4 has duplicated Battle of Baekgang)
- [celtic-cultures.md](celtic-cultures.md) — Ch 3, 5, 7 (Ch 7 priority: "repurgetorix" hallucination + missing Alesia surrender callout)
- [han-dynasty.md](han-dynasty.md) — Ch 3, 5, 7 (Yellow River label duplications; Zhang Qian / Zhangye collision in Ch 3)
- [kingdom-of-aksum.md](kingdom-of-aksum.md) — Ch 3, 5 (incomplete sentences)
- [post-maurya-kingdoms.md](post-maurya-kingdoms.md) — Ch 4, 7, 8 (Ch 4 priority: Bamiyan Buddhas dated ~250 CE — factual error, should be 6th–7th c. CE)
- [six-dynasties.md](six-dynasties.md) — Ch 2, 4, 6, 7 (positioning suffixes leaking into labels; Ch 4 has duplicated Eastern Jin and "Taizong buried the Taizong buried the")
- [teotihuacan.md](teotihuacan.md) — Ch 1, 2, 5, 7, 8 (Ch 1: "Volgland Mexico" hallucination; Ch 5: "Gull site" hallucination; Ch 7: Pyramid of the Moon duplicated)
- [xiongnu-huns.md](xiongnu-huns.md) — Ch 1, 2, 5, 7, 8 (Ch 8 priority: "Stepids" / "starvoys" garbled tribes annotation)
- [zapotec-civilization.md](zapotec-civilization.md) — Ch 1, 2, 3, 4, 5, 7 (recurring `Mountains (surrounding ring)` duplication and `℡` Unicode-ligature substitution for `BCE` in Ch 3)

## Recurring failure modes from the 11-TL batch

In addition to the older ones above, the new batch surfaced these patterns:

- **Annotation duplication with one variant garbled.** Two copies of the same annotation rendered, one clean, one with hallucinated/truncated text. (See andean Ch 3, andean Ch 4, post-maurya Ch 8, ancient-japan Ch 4.)
- **Positioning instructions leaking into rendered labels.** Words like `(top)`, `(top edge)`, `(bottom edge)`, `(secondary)`, `(northeast edge)` were intended as author-side staging notes but Gemini rendered them as visible text. (See six-dynasties Ch 2/4/6/7, zapotec Ch 7.)
- **Duplicated words inside a single label.** `Gate of Gate of the Sun`, `North North America`, `pottery, pottery,`, `(far north) (far north)`, `Taizong buried the Taizong buried the`, `Water flows underground / Water flows underground`. The fix is an explicit anti-duplication rule per chapter.
- **Unicode ligature substitution.** `BCE` rendered as the telephone-symbol ligature `℡`. Force plain ASCII for date abbreviations.
- **Trailing sentences with no closing.** `...70+ sacrificial`, `...cultural blending after`, `...propaganda in`. Force every label to end with a complete word and a closing parenthesis.

## Workflow

1. Copy one prompt at a time into Gemini
2. Save output to `public/maps/{civilizationId}/chapter-{N}.png`, overwriting the old PNG
3. Re-run the non-destructive WebP optimizer to update the .webp copy
4. Visually re-check before shipping — if the redo still has errors, iterate on the prompt

## What was NOT regenerated

The following maps are clean and should be left alone:

- **Ancient China:** Ch 1, 2, 3, 5, 6
- **Ancient Nubia:** (none — all 8 had issues)
- **Elam:** Ch 2, 4, 5, 6
