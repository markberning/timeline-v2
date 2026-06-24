# GATE — FACT-CHECK + LEGEND — Russolo, *Dynamism of an Automobile* (1912–13)

Gate run against `work-automobile-draft.md` + `work-automobile-factpack.md`, every concrete claim re-verified vs the fact pack and the live web (Centre Pompidou collection record, Wikipedia, italianfuturism.org, Britannica/Flint translation, LoC manifestos).

**Verdict: PASS, with NO [BLOCKER].** Every watch-item flagged in the brief is handled correctly. There are a small number of [FIX] items (one provenance precision, one image-verification dependency) and a few [NICE] tightenings. The draft is unusually clean on exactly the traps that normally sink an art-work read (the date dispute, the 1909-vs-1910 manifesto miscredit, the composite-quote trap, the fabricated-provenance trap).

Do NOT edit the draft or commit — findings only.

---

## Watch-list results (the 6 brief items)

**(1) Pompidou identity — PASS.** Verified against the live Pompidou record (cazp46): title *Automobile in corsa* / *Dynamisme d'une automobile*; date **[1912-1913]**; oil on canvas; **106 × 140 cm**; inv. **AM 2917 P**; **"Don de Mme Sonia Delaunay, 1949."** Signature inscription "S.D.B.DR. : LRussolo 1911 [sic]." The draft uses 1912–13 as the display date everywhere prose/stats appear (const `stats`, hero credit, every section dateLabel, provenance), carries the `[sic]` discrepancy explicitly in PART A const comment, the `making` chapter, and provenance. The discrepancy is handled, not hidden. Accession, donor, year, medium, location all match the museum exactly.

**(2) Marinetti "roaring car / Victory of Samothrace" quote — PASS, single cited translation, not a composite.** The draft's quoted text ("...like serpents of explosive breath—a roaring car that seems to ride on grapeshot—is more beautiful than the *Victory of Samothrace*") is the **R.W. Flint / Britannica** published rendering, verbatim, not a blend. The draft explicitly attributes it to the 1909 *Manifesto of Futurism*, point 4, *Le Figaro*, 20 February 1909 — correct. It also flags the translation variance in-prose ("'grapeshot' or 'machine-gun fire,' 'Victory' or 'Winged Victory'... one careful published rendering, not a fact carved in marble"), which is exactly the doctrine-required handling. No composite. Good.

**(3) Russolo signed the 1910 PAINTERS' manifestos, NOT Marinetti's 1909 text — PASS, and actively corrected.** Verified: Russolo signed both the *Manifesto of the Futurist Painters* (11 Feb 1910) and the *Technical Manifesto of Futurist Painting* (published Poesia, 11 Apr 1910), alongside Boccioni, Carrà, Balla, Severini. He did NOT sign Marinetti's 1909 founding manifesto. The draft not only gets this right, it dedicates a whole paragraph in `AutPainter` to correcting the common error ("Russolo did **not** sign Marinetti's famous 1909 manifesto... If you ever see 'Russolo signed the 1909 manifesto,' you now know it is sloppy"). No miscredit anywhere.

**(4) No fabricated intermediate provenance — PASS.** The Russolo→Sonia Delaunay gap is left explicitly empty in the const `provenance` array, in the fact ledger, and in two `AutAfterlife` paragraphs that name the gap as a gap ("the record has two ends and an empty middle, and we are not going to make the middle up"). No invented dealer, sale, price, or date. Endpoints only (Russolo painted it; exhibited 1913–14 Florence / 1914 London; gift of Sonia Delaunay 1949). Correct.

**(5) Noise-music angle — PASS.** Verified: *The Art of Noises* (*L'arte dei rumori*), 11 March 1913, letter to Francesco Balilla Pratella; intonarumori built with Ugo Piatti; first public presentation Modena (Teatro Storchi), 2 June 1913; London concerts 1914; instrument families (howlers/roarers/cracklers/hummers/gurglers); ancestor of noise music / musique concrète / electronic music, cited influence on Varèse, Cage, Schaeffer. Draft "more than twenty" is the safe count (does not assert the precise 21). The quoted Art-of-Noises line ("break out of this limited circle of [pure] sounds and conquer the infinite variety of noise-sounds") matches the standard published translation. "Largely set the brush aside" / "not forever, he painted again late in life" correctly softens the older "abandoned painting" phrasing per the ledger. All accurate.

**(6) Dimensions 106 × 140 cm → imperial — PASS.** Computed: 106 cm = 41.73 in = 3 ft 5.73 in ≈ **3′5¾″**; 140 cm = 55.12 in = 4 ft 7.12 in ≈ **4′7⅛″**; aspect 140/106 = **1.32** (landscape). Draft const `dimensions`, `stats` chip (`3′5¾″ × 4′7⅛″`), `heroAspect: 1.32`, and the looking-chapter prose ("about three and a half feet tall and four and a half feet wide") all match. No cm leaks into prose. Imperial-only rule satisfied.

---

## [FIX] — required before lock

**[FIX-1] Look-closer annotation directions are still image-unverified (the fact pack's own gate condition).**
The fact pack §4 gate note REQUIRES that every left/right/which-shape `where` be re-checked against the born-verified hero image before lock — this is the *Demoiselles* "two faces in profile" surface. The draft sidesteps the hard left/right call (annotations say "the way the car is going" / "one direction" rather than naming a side), which is defensible. BUT the standard scholarly/Wikipedia reading of this canvas is specific: the car travels **rightward**, with the red chevron/arrow force-lines **compressed on the LEFT** and fanning open toward the right. The draft's looking-chapter language ("from the denser, busier end toward the open field ahead," "the wedges fan out from the dense core toward the open field ahead") is consistent with that reading, so nothing is wrong — but the `ART_IMG.russoloAutomobile` hero image does not yet exist in the repo (`grep` finds no file and no other reference), so NO directional/shape claim has actually been pixel-confirmed. 
*Correction:* when the born-verified image lands, the coordinator must open it and confirm (a) car/compression is on the left, motion rightward; (b) the force-lines are red; (c) the "denser knot near the heart/core" placement; (d) "flat stepping bands" of color. If the image contradicts any `where`, fix the annotation. Until then these six annotations + the looking chapter stay provisional. 
*Source:* fact pack §4 gate note; Wikipedia "Dynamism of a Car" ("Horizontally stacked red arrows indicate the direction of the car's motion... The compression of the arrows on the left also suggests that the car is moving at an extremely high speed").

**[FIX-2] Provenance: "shown at the Florence Futurist exhibition, 1913–14" / "London Futurist exhibition at the Doré Galleries, 1914" — venue/name precision.**
The Florence show is verified and can be made more precise: it was the *Esposizione di pittura futurista* organized by *Lacerba*, **Galleria Gonnelli, Florence, 30 Nov 1913 – Jan 1914**. The London claim is only *partially* corroborated: the Futurist group did exhibit at the **Doré Gallery, London, 1914** (singular "Gallery," not "Galleries"), but sources gathered do NOT explicitly confirm *this specific canvas* hung there. 
*Correction:* (a) change "Doré Galleries" → "Doré Gallery" (the venue's actual name); (b) either source that *Dynamism of an Automobile* specifically was in the 1914 London show, or soften to the group-show framing ("...and the Futurist group's 1914 London exhibition at the Doré Gallery") so the canvas's individual presence isn't over-asserted. This appears in the const `provenance` note, `AutAfterlife` para 1, and the fact ledger — fix all three consistently. 
*Source:* Wikipedia/Grokipedia "Dynamism of a Car" (Galleria Gonnelli / Lacerba, Florence 1913–14); general Futurism sources confirm Doré **Gallery** London 1914 but not this work specifically.

---

## [NICE] — optional tightenings, not blocking

**[NICE-1] "Technical Manifesto" attribution.** The `making` chapter writes "Boccioni's *Technical Manifesto* of 1910 had called for putting 'the spectator in the centre of the picture'..." This is fine — Boccioni was the principal author — but the document was *signed by all five* (incl. Russolo). The current phrasing is accurate and reads well; no change needed, just noting it's a principal-author attribution, not sole-author. Verified quote: "We shall henceforward put the spectator in the centre of the picture."

**[NICE-2] `year: 1913` sort key vs displayed `1912–13`.** The const carries `year: 1913` (numeric sort key) while every *displayed* string is `1912–13`. The draft's coordinator note already flags this intentional split. No factual problem; just confirm the chain sorts as intended and that `1913` never surfaces as a bare displayed date.

**[NICE-3] "First concert" nuance (already safe).** The Modena 2 June 1913 event is most precisely the *first public presentation / demonstration* of an intonarumori (the "scoppiatore"/burster); some accounts reserve "first full intonarumori concert" for Milan, April 1914. The draft says "The first concert of these noise instruments was given in Modena... 2 June 1913," which tracks the standard/fact-pack framing and is acceptable. If maximally precise, "first public presentation" is marginally safer, but this is not a correction.

**[NICE-4] Russolo birth/death.** Not stated in prose (fine). For any nameplate, fact pack has 1885–1947, verified. Sonia Delaunay 1885–1979 (stated in prose) — verified, correct, and the Orphism co-founder-with-Robert-Delaunay claim is verified.

---

## Claims spot-checked and CLEAR (beyond the 6 watch items)
- Russolo from a musical family, father organist, brothers at Milan Conservatory, trained as painter — consistent with Estorick/Italian Art Society/Wikipedia. CLEAR.
- Befriended Boccioni end of 1909, joined founding Futurist painter circle — CLEAR.
- "War the world's only hygiene" + Marinetti later helped found Italian Fascism — CLEAR, standard, one proportionate line.
- *Victory of Samothrace* = ~2nd-c. BC Hellenistic marble, top of the Louvre staircase — CLEAR.
- Variant titles (*Velocità*/*Composition*/*Full Speed*) — CLEAR (fact pack §1).
- Influence list Varèse / Cage / Schaeffer; musique concrète defined correctly — CLEAR.

## Bottom line
No hallucinations, no miscredits, no fabricated provenance, no composite quote, date dispute handled, imperial dims correct. Ship-blocking items: NONE. Resolve [FIX-1] (image pixel-verify the look-closer `where`s when the born-verified hero lands) and [FIX-2] (Doré "Gallery" + don't over-assert this canvas in the 1914 London show) before lock.
