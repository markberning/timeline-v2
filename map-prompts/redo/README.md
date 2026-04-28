# Map Prompt Redos (lean spec)

**Status (2026-04-28): all 11-TL batch redos complete and shipped.** Every chapter listed below has been replaced with a clean lean-spec render in `public/maps/{tl}/chapter-{N}.webp`.

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

11-TL Gemini batch (April 2026) — review findings, all shipped 2026-04-26 → 2026-04-28:

- [ancestral-puebloans.md](ancestral-puebloans.md) — Ch 3, 4, 7, 8 ✅ shipped
- [andean-kingdoms.md](andean-kingdoms.md) — Ch 2, 3, 4, 5, 6, 8 ✅ shipped
- [ancient-japan.md](ancient-japan.md) — Ch 1, 4, 8 ✅ shipped
- [celtic-cultures.md](celtic-cultures.md) — Ch 3, 5, 7 ✅ shipped
- [han-dynasty.md](han-dynasty.md) — Ch 3, 5, 7 ✅ shipped
- [kingdom-of-aksum.md](kingdom-of-aksum.md) — Ch 3, 5 ✅ shipped
- [post-maurya-kingdoms.md](post-maurya-kingdoms.md) — Ch 4, 7, 8 ✅ shipped
- [six-dynasties.md](six-dynasties.md) — Ch 2, 4, 6, 7 ✅ shipped
- [teotihuacan.md](teotihuacan.md) — Ch 1, 2, 5, 7, 8 ✅ shipped (Ch 1 + Ch 7 needed a v2 pass — see below)
- [xiongnu-huns.md](xiongnu-huns.md) — Ch 1, 2, 5, 7, 8 ✅ shipped
- [zapotec-civilization.md](zapotec-civilization.md) — Ch 1, 2, 3, 4, 5, 7 ✅ shipped (Ch 4 needed a second render after `Munte Albán` gibberish in the first redo)

## When the lean spec still fails: split-annotation v2 (Teotihuacan Ch 1, 7)

A single still-too-long annotation can hallucinate even at the lean tier. Teotihuacan ch 1 produced `origina wanm` then `aligned firt in aligned`; ch 7 produced `teamelts`, `muralstructure`, doubled `readable readable`, plus the literal word `ONCE` rendered as a label inside two compounds (the bullet header `Sites — each ONCE:` leaked into the output).

The fix that worked is in [teotihuacan-ch1-ch7-v2.md](teotihuacan-ch1-ch7-v2.md):

1. **Split a long annotation into two short separate boxes (`ANNOTATION A` and `ANNOTATION B`).** Each box has a single short clause as its caption. The model has less room to mash adjacent clauses together with hallucinated connector words.
2. **Cite the specific gibberish words from prior renders by name** so the model can pattern-match them as wrong: `"past renders produced gibberish like X, Y, Z — none of those strings exist."`
3. **Explicitly tell the model that `ONCE` is a count instruction, not a label**, when the bullet header uses the word.

Apply this v2 pattern preemptively when a chapter has more than one annotation or when the annotation is more than one short clause. It's a small extra defense on top of the regular lean spec.

## Workflow

1. Copy one prompt at a time into Gemini
2. Save output to `public/maps/{civilizationId}/chapter-{N}.png`, overwriting the old PNG
3. Convert to WebP (q85) and update the chapter-{N}.webp
4. Visually re-check before shipping — if the redo still has errors, iterate on the prompt (split annotations + cite the gibberish — see v2 section above)
