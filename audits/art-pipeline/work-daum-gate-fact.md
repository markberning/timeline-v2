# FACT-CHECK + LEGEND GATE — `daum` work-read

**Work:** Grosz, *"Daum" Marries Her Pedantic Automaton "George" in May 1920, John Heartfield Is Very Glad of It* (1920), Berlinische Galerie
**Gate:** fact-check + legend (PART A const + PART B prose/captions/annotations/quotes), web-verified
**Date:** 2026-06-24

## VERDICT: **PASS** (no BLOCKERs) — 0 BLOCKER · 2 FIX · 3 NICE

Every load-bearing claim web-verified against the Berlinische Galerie (owning museum, authoritative), Wikipedia, Wikiquote, and the Univ. of Michigan VRC reproduction record. The draft handles all seven of the prompt's special-care traps correctly. Two FIX items are small attribution/wording cleanups; neither is ship-blocking on its own, but both should be applied before integration.

---

## SPECIAL-CARE CHECKLIST (all confirmed handled correctly)

| Trap | Required handling | Draft status |
|---|---|---|
| **Medium = watercolour board (works on paper), NOT canvas** | use museum's board/paper support; flag the "canvas" error | ✓ CORRECT. Const: "Watercolour, pen and ink, and collage on watercolour board." DauLooking explicitly: "it is not a canvas at all… the owning museum is clear that it is a drawing-and-collage on board." Museum confirms: *"Watercolour, pencil, pen-and-ink and collage on watercolour board."* |
| **Dims 42 × 30.2 cm → ft/in** | imperial only | ✓ CORRECT. "1 ft 4½ in × 11⅞ in." Verified: 42 cm = 16.54 in = 1 ft 4.5 in; 30.2 cm = 11.89 in = 11⅞ in. (Wikipedia rounds to "17 in"; the draft's 16.5 in is the more precise figure — good.) |
| **Berlinische Galerie, acquired 1995 (Stiftung DKLB)** | state plainly | ✓ CORRECT. Museum: "Erworben aus Mitteln der Stiftung DKLB, Berlin 1995." Draft spells out "Stiftung Deutsche Klassenlotterie Berlin," DKLB's full name — correct. |
| **"Marshal Pétain" alt-title is WRONG (that's *Republican Automatons*, MoMA)** | omit/correct | ✓ CORRECT. Not used in title. DauReading explicitly debunks: "this wedding picture has nothing to do with Pétain." Verified: no source anywhere ties "Pétain" to either work; *Republican Automatons* (MoMA, watercolour+pencil on paper, 1920) is the faceless-robot-men picture. |
| **"Daum" = anagram of "Maud"; wife Eva Peter/Peters (surname unresolved)** | hedge the surname | ✓ CORRECT. Draft hedges throughout ("Peter or Peters, so we leave it open"). Confirmed split: **museum says "Eva Peter"**, **Wikipedia says "Eva Peters"** — the hedge is exactly right. Anagram Maud→Daum well-attested (museum + Wikipedia). |
| **"meta-mechanical construction" = Grosz's descriptor, not painted subtitle** | frame as descriptor | ✓ CORRECT. DauReading: "his own description of the type of object… not a second line painted onto the picture." Verified: the Univ. of Michigan VRC record carries it as a reproduction/genre caption ("Meta-Mech. Constr. after Prof. R. Hausmann," from the 1922 Malik portfolio), confirming it is a classifier, not an inscribed title line. |
| **KEY STATEMENT = Schneede-1975 general line; "gun and a sword" NOT quoted verbatim** | label as general; don't quote the gun/sword line | ✓ CORRECT. The "despair, hate and disillusionment / drunkards; puking men; clenched fists cursing at the moon" line is quoted verbatim and **labelled as a general statement of his aims, not about this work**. The "gun and a sword" claim is described and explicitly hedged ("circulates in several versions and is not pinned to a verified page, so take the sense and not a quoted sentence") — never quoted verbatim. |
| **Collaged scraps kept general (not identifiable)** | don't name specific clippings | ✓ CORRECT. DauLooking + annotation both say the individual clippings cannot be reliably identified; "the technique is the meaning, not the inventory." |
| **rights: 'pd-us'** | correct | ✓ CORRECT. Published 1920 → PD-US (pre-1930). EU © through 2029 (Grosz d.1959) handled accurately in DauAfterlife. |

---

## FINDINGS

### [FIX] 1 — Verbatim quote source: Wikiquote cites Otto Friedrich, not Schneede
DauBreak attributes the "despair, hate and disillusionment… drunkards; puking men; men with clenched fists cursing at the moon" quote to "Uwe M. Schneede's study of the artist." The fact pack sourced it to Schneede 1975 p.38; that is plausible (Schneede may quote it), but the most-cited public attribution (Wikiquote) traces the **exact wording** to **Otto Friedrich, *Before the Deluge* (1987), p.37**, drawn from Grosz's own 1946 autobiography *A Little Yes and a Big No*. The quote text itself is verified verbatim — only the named secondary source is at risk.
- **Why FIX not BLOCKER:** the quote is genuine and correctly attributed to Grosz; the issue is a possibly-unverified page citation.
- **Suggested fix:** soften the in-prose attribution so it doesn't assert a specific page in a book the gate couldn't open. Replace "recorded in Uwe M. Schneede's study of the artist, Grosz described his work like this:" with: *"recorded in his own memoirs and quoted ever since, Grosz described his work like this:"* — or keep Schneede but drop the implication of a verified page. (The quote stays; only the citation hedges.)

### [FIX] 2 — Herzfelde first name: confirm "Wieland," and one early-account attribution
DauReading line 184 names "the publisher Wieland Herzfelde" — **correct** (Wieland Herzfelde, John Heartfield's brother, ran Malik-Verlag). But Wikipedia renders the same quote under "**Werner Herzfeld**," and the fact pack §2 hedges "Wieland/Werner Herzfeld." Web check confirms the correct person is **Wieland Herzfelde** (the publisher; "Werner Herzfeld" on Wikipedia is an error/variant). 
- The PART A annotation (const, line 65) attributes "soberly pedantic arithmetical problems" to "one early account" without naming him — safe but vague.
- **Why FIX not BLOCKER:** the draft already uses the correct name in prose; this is a consistency/confidence note, not an error in the draft.
- **Suggested fix:** none required to the draft's chosen name (Wieland Herzfelde is right). Optionally, name him in the PART A annotation too for consistency ("as Wieland Herzfelde, Grosz's publisher, put it") rather than the anonymous "one early account."

### [NICE] 3 — heroAspect rounding
Const `heroAspect: 0.71` with comment "30.2 × 42 → W/H ≈ 0.72." 30.2/42 = 0.719 → rounds to **0.72**, not 0.71. Cosmetic; either set `0.72` to match the comment or leave as-is (1px difference at portrait scale). The comment correctly states the sheet is portrait.

### [NICE] 4 — Quote ledger / hedge density
DauBreak hedges the "gun and a sword" / "act of protest" lines well, but stacks three Grosz quote-claims in close succession (verbatim Schneede line + "act of protest… ugly, sick and hypocritical" + the hedged gun/sword). The "act of protest, ugly, sick and hypocritical" line is widely attributed to Grosz but the gate could not pin it to a primary page either (Wikiquote did not surface it). It is presented in the draft as a paraphrase ("trying to convince the world that it was ugly, sick and hypocritical"), not in quote marks — which is the right call. No change needed; flagged only so the integration pass knows that line, like the gun/sword line, is attested-but-not-page-verified.

### [NICE] 5 — de Chirico claim
DauLooking/annotation say the irreal city is "openly borrowed from… Giorgio de Chirico" and "the same source Grosz mined for all his 1920 automaton pictures." Wikipedia confirms the de Chirico influence on the background; the "all his 1920 automaton pictures" generalization is standard Dada scholarship and safe. No change.

---

## CROSS-CHECKS THAT PASSED CLEAN (no action)
- Full title wording + quotation marks around "Daum"/"George" — matches museum/Wikipedia.
- Wedding date 22 May 1920 — confirmed.
- 1922 Malik-Verlag portfolio *Mit Pinsel und Schere: 7 Materialisationen* / "With Brush and Scissors. 7 Materialisations" — confirmed (Univ. of Michigan VRC record).
- Grosz dates 1893–1959, emigrated to US 1933 — confirmed.
- Heartfield born Helmut Herzfeld, anglicised name; co-inventor of political photomontage; brother Wieland ran Malik — confirmed.
- Bride: underwear, floppy grey hat, exposed, turned toward indifferent machine-man — matches museum description ("vivacious sensuality versus cool, robotic functionality").
- *Republican Automatons* now at MoMA, same year, faceless robot men — confirmed.
- Provenance gap 1922→1995 left open, no invented owners — correct and honest.
