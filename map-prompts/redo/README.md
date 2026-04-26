# Map Prompt Redos (lean spec)

Prompts in this folder are **lean rewrites** of originals that produced hallucinations on the first Gemini run. Every redo here follows the **lean specification** (see `../README.md` "LEAN SPECIFICATION" section): 4–5 sites max, name-only labels (no parentheticals on dots), ≤1 annotation per map, 3–5 region labels for orientation only.

The April 2026 batch review found the failure rate scaled directly with prompt density. Maps with 7+ sites and long parenthetical descriptions on every dot routinely produced duplicates, hallucinated words inside parentheticals, and truncated sentences. Lean prompts give Gemini fewer chances to garble.

## Failure modes that lean spec defends against

1. **Annotation duplication with one variant garbled.** Two copies of the same annotation, one clean, one with hallucinated/truncated text. (Lean fix: ≤1 annotation per map.)
2. **Garbled words inside parentheticals on site labels.** `Eastancia`, `cunitural pueblors`, `repurgetorix`, `Volgland`, `Stepids`, `starvoys`, `Gull site`. (Lean fix: site labels are name-only — no parentheticals on dots. Every garbled word so far has been *inside* a parenthetical.)
3. **Positioning instructions leaking into rendered labels.** `(top)`, `(top edge)`, `(bottom edge)`, `(secondary)`, `(northeast edge)` were author-side staging notes but Gemini rendered them as visible text. (Lean fix: positioning given in prose to the artist, never as parenthetical suffixes on labels.)
4. **Duplicated words inside a single label.** `Gate of Gate of the Sun`, `North North America`, `pottery, pottery,`, `Taizong buried the Taizong buried the`. (Lean fix: critical rules call out each affected phrase explicitly.)
5. **Unicode ligature substitution.** `BCE` rendered as the telephone-symbol ligature `℡`. (Lean fix: explicit "BCE in plain ASCII letters" rule.)
6. **Trailing sentences with no closing.** `...70+ sacrificial`, `...cultural blending after`, `...propaganda in`. (Lean fix: explicit "every label ends with a complete word and closing parenthesis" rule.)
7. **Site-label collision** (e.g. Zhang Qian's annotation overlapping the Zhangye city label). (Lean fix: fewer sites means more whitespace between labels.)

## What's in here

11-TL Gemini batch (April 2026) — review findings:

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

## Workflow

1. Copy one prompt at a time into Gemini
2. Save output to `public/maps/{civilizationId}/chapter-{N}.png`, overwriting the old PNG
3. Convert to WebP (q85) and update the chapter-{N}.webp
4. Visually re-check before shipping — if the redo still has errors, iterate on the prompt
