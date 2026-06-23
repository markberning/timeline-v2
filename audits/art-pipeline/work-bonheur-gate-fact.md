# FACT-CHECK + LEGEND gate — WORK: Matisse, *Le Bonheur de vivre*, 1905–06 (Barnes, BF719)

Gate run against `work-bonheur-draft.md` (Part A const + Part B prose) and
`work-bonheur-factpack.md`. Web-verified 2026-06-23 (Wikipedia *Le bonheur de vivre*,
Barnes collection record, Met Tetzen-Lund index, Grokipedia provenance, Smarthistory).
Do-not-edit / do-not-commit gate; findings only.

## VERDICT: PASS — no BLOCKERs. Two [NICE] notes, no [FIX].

Every load-bearing claim traces to the fact pack and re-verifies independently. All five
work-specific watch items are handled correctly. Details by axis below.

---

## Axis-by-axis

### Identity, dates, dimensions — CLEAN
- **Dimensions.** Draft `'5 ft 9 1/2 in × 7 ft 10 3/4 in'` and chip `5′9½″ × 7′10¾″`.
  Real museum record = **176.5 × 240.7 cm = 69.5 × 94.75 in**. 69.5 in = 5 ft 9.5 in ✓;
  94.75 in = 7 ft 10.75 in ✓. Imperial-only per house rule ✓. `heroAspect: 1.36`
  (240.7/176.5 = 1.3637) ✓ landscape, `heroFit: 'contain'` ✓. Confirmed against Barnes
  record + Wikipedia infobox.
- **Year.** `year: 1906` numeric; prose + stats "1905–06"; "between roughly October 1905
  and March 1906." Matches Wikipedia ("between October 1905 and March 1906") and the
  fact-pack convention (tag the finished/first-exhibited year). ✓
- **Medium / location / accession.** Oil on canvas ✓; The Barnes Foundation, Philadelphia
  (moved from Merion 2012) ✓; BF719 ✓.
- **Artist life dates.** Matisse 1869–1954 — figures block and fact pack agree; not
  asserted wrongly anywhere in prose. ✓
- **Salon dates.** Draft: "ran from about March 20 to April 20, 1906" and "Salon des
  Indépendants ... founded in 1884 ... spring 1906." Wikipedia confirms first exhibited at
  the Salon des Indépendants of 1906; the Mar 20–Apr 20 window is from Singulart (fact pack
  §A). Hedged "about," correct. ✓ Indépendants founding 1884 ✓.

### Verbatim quotes + attribution — CLEAN
- **Signac "gone to the dogs."** Draft quotes it in full (Part B BonReception): *"Matisse,
  whose attempts I have liked up to now, seems to me to have gone to the dogs. Upon a canvas
  of two-and-a-half meters, he has surrounded some strange characters with a line as thick
  as your thumb. Then he has covered the whole thing with flat, well-defined tints,
  which—however pure—seem disgusting."* This is **word-for-word** the Wikipedia/Barr-Bois
  wording. ✓ Attributed correctly as DOCUMENTED — "In a private letter dated January 14,
  1906, Signac wrote" and later "this is Signac, in private, to a fellow painter." Watch
  item (2) satisfied.
  - Note on the recipient: the fact pack says the recipient is *usually* given as Charles
    Angrand, but neither Wikipedia nor my searches firmly pin the addressee. The draft's
    choice to say "to a fellow painter" (not naming Angrand) is the correct conservative
    call — do NOT add a named recipient. The em-dash inside this quote (`which—however
    pure—seem`) is acceptable: it is *inside a verbatim quote*, not new prose, so it does
    not violate the no-em-dash-in-new-prose flag.
- **Leo Stein "the most important painting done in our time."** Draft hedges every
  instance: const note "is widely quoted calling it," Part B "is widely quoted as calling
  it." Matches the fact pack's DOCUMENTED-as-attribution verdict (oft-repeated, no single
  primary transcription pinned). Wording matches the standard attribution. ✓
- **Hilton Kramer "the least familiar of modern masterpieces."** Draft (BonAfterlife):
  *"the least familiar of modern masterpieces."* Verbatim per Wikipedia. ✓ Attributed to
  Kramer ✓.
- No invented quotes anywhere. ✓

### Provenance chain, prices, dates — CLEAN (watch item 1 handled)
- The draft does **NOT** assert a direct Stein→Barnes sale. Part A provenance[] and Part B
  BonAfterlife both run the full chain: Matisse → Leo & Gertrude Stein (1906, from the
  Salon) → Leo alone (1914 split, on deposit / via Bernheim-Jeune) → **Christian
  Tetzen-Lund, Copenhagen (1919)** → **Albert Barnes via dealer Paul Guillaume** after the
  **1922 Landmandsbanken collapse**, recorded **January 1923**. Matches the verified chain
  exactly. Watch item (1) satisfied.
- **Price.** "roughly 45,000 francs (≈ $3,700)" — matches secondary sources / Grokipedia /
  fact pack. ✓ Appropriately hedged ("roughly," "about").
- **Date.** "recorded January 1923" / const "recorded January 27, 1923" — matches the Barnes
  official record (Jan 27, 1923); bank-collapse trigger 1922. Both rendered correctly. ✓
- **2012 move to Philadelphia** ✓; **BF719** ✓; Merion → Philadelphia ✓.
- Barnes "for decades barred color reproductions" — corroborated by the Kramer line and the
  fact pack PD note. ✓

### "First/only/most" and pillar claims — CLEAN
- "the most important Fauve painting in the world" (BonAfterlife) — phrased as a
  characterization in service of the Tetzen-Lund beat, and the work IS canonically the
  high-water canvas of Fauvism (fact pack §8). Not an unhedged historical superlative.
  Acceptable.
- Pillar-of-modernism claim is correctly **paired and Western-scoped**: "Together, the two
  canvases are usually counted as the twin pillars on which early modern painting in the
  West was built." Matches the fact-pack framing requirement; no lone-genius / "modern art
  begins here" overclaim. ✓

### Picasso / *Demoiselles* — CLEAN (watch item 3 handled)
- Every instance is **hedged as interpretation, never asserted intent**:
  - hook: "the one Picasso is said to have answered with Les Demoiselles d'Avignon"
  - const sections.afterlife: "Picasso's Demoiselles is widely read as the answer"
  - BonAfterlife: "is widely read as his answer to the sensation Matisse had made ... (That
    reading is interpretation, not documented intent, so take it as the way the rivalry is
    usually told, not as Picasso's stated plan ...)"
- Note the draft uses the phrase "out-shock the Fauve" *inside* the hedged sentence, which
  is fine because the whole clause is explicitly flagged as interpretation. Watch item (3)
  satisfied. *Demoiselles* dated 1907 consistently (matches the nesting-consistency note). ✓

### Visual sources — CLEAN (watch item 4 handled)
- **Carracci's *Love in the Golden Age*** is the only source asserted as documented:
  "argued by the historian James Cuno in 1980 and Thomas Puttfarken soon after ... That one
  is a real lineage, not a hunch." Attribution (after Paolo Fiammingo), the ring-of-dancers
  link, and the Cuno/Puttfarken citation all match the fact pack and Wikipedia. ✓
- **Ingres and Cézanne** are correctly framed as "drew on" / "in the tradition of" /
  "reasonable family resemblances rather than proven debts." ✓ Cézanne's *Large Bathers*
  and Ingres's odalisques both so framed.
- **Bellini does NOT appear** anywhere in the draft (Part A or B). ✓ Watch item (4)
  satisfied. Lineage parents = Carracci, Cézanne's Large Bathers, Ingres — all sourced.

### The Dance linkage — CLEAN (watch item 5 handled)
- Stated as **influence/seed, never as the same work**: annotations "the seed of an entire
  other canvas ... made it The Dance (1909–10)"; BonAfterlife "pulled that single motif out
  ... and made it the whole subject of The Dance (1909–10)"; sections.afterlife "spins its
  ring of dancers into The Dance." The const header comment even states it explicitly:
  "PREFIGURES The Dance (1909–10), it is not 'The Dance.'" ✓ *The Dance* dated 1909–10,
  matching Wikipedia. Watch item (5) satisfied.

### Other named facts — CLEAN
- **SFMOMA oil sketch** (*Sketch for "Le Bonheur de vivre"*, 1905–06; "more than four times"
  smaller than final; Neo-Imp/dotted vs flat) — matches SFMOMA note (fact pack §B). "A
  second study is held by the Barnes itself" ✓.
- **Cadmium-yellow degradation** "turning chalky and brown as its chemistry breaks down" —
  matches Wikipedia ("cadmium sulfide ... turning white or brown") and the UDaily study. ✓
- **Saint-Tropez 1904 / Signac apprenticeship** referenced tersely (per nesting). The
  Saint-Tropez summer is conventionally dated 1904 ✓.
- **27 rue de Fleurus** ✓; Stein siblings as early avant-garde patrons ✓; 1914 Stein
  collection division ✓.
- **Grande Jatte cross-comparison** ("dulled the sunlit grass of Seurat's Grande Jatte") —
  the Seurat fade is a real, documented phenomenon (zinc/chrome yellow). Accurate as a
  parallel. ✓

---

## [NICE] (optional polish, non-blocking)

1. **[NICE] Signac quote em-dash style.** The verbatim quote keeps `which—however pure—seem
   disgusting` with closed em-dashes. This is correct (it is a quote, exempt from the
   no-em-dash rule), but note for consistency the draft elsewhere honors the no-em-dash
   flag in new prose. No change needed; flagging only so a later pass doesn't "fix" the
   quote by mistake.

2. **[NICE] "two-and-a-half meters" inside the Signac quote vs the stated width.** The
   verbatim quote says the canvas is "two-and-a-half meters"; the real width is 2.407 m
   (≈ 2.4 m). This is Signac's own approximation in 1906 and must stay verbatim — do NOT
   reconcile it to the true dimension. Noted only to pre-empt a future editor "correcting"
   a primary quote. No action.

---

## Bottom line
Fact axis is clean across every required surface (identity, dimensions, dates, quotes +
attribution, provenance/prices, sources, lineage, all six annotations, hook, stats,
acquisition line). All five work-specific watch items pass. No BLOCKER, no FIX. The two
[NICE] items are quote-preservation reminders, not errors. Gate result: **PASS.**
