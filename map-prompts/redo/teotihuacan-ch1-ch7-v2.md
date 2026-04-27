# Teotihuacan — Ch 1 & Ch 7 redo v2

Second-pass redo prompts for Teotihuacan chapters 1 and 7.

The original `map-prompts/redo/teotihuacan.md` produced gibberish on the
first redo run (ch 1: `origina wanm`; ch 7: `ONCE` rendered as a label,
`teamelts`, `muralstructure`, `genmrtly`). The lean re-run still produced
broken text (ch 1: `aligned firt in aligned`; ch 7: `readable readable`,
`teamelts`).

These v2 prompts split each chapter's single long annotation into two
short separate boxes, and explicitly cite the prior gibberish words so
the model can pattern-match them as wrong.

---

## Chapter 1 — REDO v2 (lean, two annotations split)

Create a simple, clean map for Chapter 1 of a mobile reading app about Teotihuacan. The chapter covers the Basin of Mexico, the Xitle eruption that buried Cuicuilco, and the founding of Teotihuacan on its 15.5-degree grid.

The chapter title "Chapter 1: The Volcano and the Valley" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.

**CRITICAL RULES:**

1. **Render every caption EXACTLY as quoted, character-for-character.** Do not add words. Do not duplicate words. Do not invent connector words.
2. **Past renders produced gibberish like `origina wanm`, `aligned firt in aligned`, and `Volgland`.** None of those strings exist. The word "aligned" appears EXACTLY ONCE per caption.
3. **Draw each label exactly once.**
4. **Spell every label exactly as written below.**
5. **Site labels are name-only — no parentheticals on the dots.**
6. **North is at the top. East is to the right.**
7. **All water is light blue.**
8. **Do not invent any labels, sites, or features that are not in this prompt.**

**Map requirements:**
- The Basin of Mexico — lake system, volcanic mountains around the rim, Cuicuilco in the south, Teotihuacan Valley in the northeast
- Muted warm palette

**Sites — 4 dots, name-only labels:**
- **Cuicuilco** — southern basin
- **Xitle volcano** — southwestern basin edge
- **Teotihuacan Valley** — northeastern basin
- **Sierra de las Navajas** — northeast of the valley

**Region labels (gray, 3 max):**
- Basin of Mexico
- Lake Texcoco
- Volcanic mountains (rim)

**Two annotations — render each as a SEPARATE box, do NOT merge them:**
- ANNOTATION A — a bold arrow from Cuicuilco northeast to the Teotihuacan Valley. Caption (verbatim, no other words): "Refugees flee Xitle's lava — migrate northeast"
- ANNOTATION B — a small box near the Teotihuacan Valley. Caption (verbatim, no other words): "Grid aligned 15.5° east of true north"

**Style:** Landscape orientation, simple and elegant.

---

## Chapter 7 — REDO v2 (lean, two annotations split, ONCE not a label)

Create a simple, clean map for Chapter 7 of a mobile reading app about Teotihuacan. The chapter covers the city's religion in murals — the Great Goddess at Tepantitla, the warrior orders at Atetelco, and the absence of named rulers.

The chapter title "Chapter 7: The Great Goddess and the Storm God" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.

**CRITICAL RULES:**

1. **The word `ONCE` is a count instruction — do NOT render it on the map.** Past renders incorrectly placed the word ONCE inside compounds.
2. **Render every caption EXACTLY as quoted, character-for-character.** Do not add words. Do not duplicate words. Do not invent connector words.
3. **Past renders produced gibberish like `teamelts`, `muralstructure`, `genmrtly`, `molnnt`, and a duplicated `readable readable`.** None of those strings exist. The word "readable" does not appear in any caption below.
4. **All five named sites must appear** — Tepantitla, Tetitla, Atetelco, Pyramid of the Sun, Pyramid of the Moon. Past renders dropped Tetitla.
5. **`Pyramid of the Moon` is at the NORTH end of the avenue; `Ciudadela` is at the SOUTH end.** Each appears EXACTLY ONCE.
6. **Draw each label exactly once.**
7. **Spell every label exactly as written below.**
8. **Site labels are name-only — no parentheticals on the dots.**
9. **North is at the top. East is to the right.**
10. **Do not invent any labels, sites, or features that are not in this prompt.**

**Map requirements:**
- Architectural plan view of Teotihuacan with the major mural-bearing compounds
- Muted warm palette

**Sites — 5 labels, name-only (all five must appear):**
- **Pyramid of the Moon** — north end of the avenue
- **Pyramid of the Sun** — east side of the avenue
- **Ciudadela** — south end of the avenue
- **Tepantitla** — northeast of the Pyramid of the Sun
- **Atetelco** — west of the Street of the Dead

**Region labels (gray, 1 max):**
- Street of the Dead

**Two annotations — render each as a SEPARATE box, do NOT merge them:**
- ANNOTATION A — a small shaded box on the city. Caption (verbatim, no other words): "Murals on every wall — vivid reds, greens, blues, yellows"
- ANNOTATION B — a small box near the ceremonial core. Caption (verbatim, no other words): "No named rulers, no writing — gods and processions instead"

**Style:** Landscape orientation, simple and elegant.
