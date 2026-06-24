# Fact-Check + Legend Gate — Picabia, *Ici, c'est ici Stieglitz, foi et amour* (1915)

**Gate:** FACT-CHECK + LEGEND (work-read, Dada). Web-verified 2026-06.
**Target:** `audits/art-pipeline/work-stieglitz-draft.md` (PART A const + PART B sections).

## VERDICT: **PASS** (no BLOCKERs)

Every load-bearing claim — medium, dimensions, accession/credit line, the *291* nos. 5–6 numbering correction, the Vest Pocket Kodak source, the IDEAL/gears/brake reading, the verbatim 1915 Tribune quote, the NPG/Orsay relief-print distinction, and the rights status — is confirmed against primary sources (Met, MoMA, NPG/Smithsonian, Hood, AIC, Wikiquote/Camfield). The draft handles the known traps correctly (it is a drawing not a painting/print; nos. 5–6 not No. 1; *foi et amour* not "Foit et Amour"; satire-and-homage held together). Findings below are minor: one [FIX] data field and a few [NICE] precision notes — none ship-blocking.

---

## PART A — const fields (all VERIFIED)

| Field | Draft value | Verified | Source |
|---|---|---|---|
| medium | "Ink, graphite, and pasted and printed papers on paper" | ✓ exact | Met API obj 488364 |
| dimensions | 2 ft 5 7/8 in × 1 ft 8 in | ✓ (75.9×50.8 cm; 29 7/8×20 in) | Met |
| acquired / acc. | Alfred Stieglitz Collection, 1949 (49.70.14) | ✓ exact | Met |
| location | The Metropolitan Museum of Art | ✓ | Met |
| year / artist / movement | 1915 / Picabia / Dada | ✓ | Met |
| Met short title | "Here, This Is Stieglitz Here" | ✓ exact | Met |
| cover of 291 nos. 5–6 (Jul–Aug 1915) | ✓ | ✓ | Met, MoMA, Hood, AIC, AGGV |
| rights: pd-us (pub. 1915) | ✓ | ✓ correct | published 1915 → PD-US; Picabia d.1953 |

### [FIX] — `heroAspect: 0.71` is the wrong ratio for these dimensions
The sheet is 50.8 × 75.9 cm (W × H). Width/height = 50.8 / 75.9 = **0.669**, not 0.71. The comment on the line even states "50.8 × 75.9 cm." If `heroAspect` is width÷height it should be **~0.67**. (0.71 would imply ~53.9 cm wide.) Correct to `0.67` unless the renderer defines aspect inversely — verify against how other portrait works set it, but the math as written is off. Low visual impact, but it is a derived numeric field, so flagging as FIX.

---

## PART B — prose / captions / annotations / quote (VERIFIED)

### KEY STATEMENT quote — VERIFIED verbatim
- "The machine has become more than a mere adjunct of life. It is really a part of human life… perhaps the very soul." — confirmed verbatim (Parkstone/Picabia.com render the identical chain incl. "really a part of human life…perhaps the very soul").
- "the genius of the modern world is in machinery, and that through machinery art ought to find a most vivid expression" — confirmed verbatim (Wikiquote, citing Camfield, *Francis Picabia* (Princeton 1979) p.77).
- "I have enlisted the machinery of the modern world, and introduced it into my studio" — confirmed verbatim.
- **Source:** "French Artists Spur on an American Art," *New-York Tribune*, Sunday, Oct 24, 1915. ✓ Confirmed (Wikiquote/Camfield). The draft's hyphenated **"New-York Tribune"** is correct to the paper's masthead (the period title was hyphenated); search engines render it un-hyphenated, but the draft is right.
- The draft's caution about the "an" in the headline and keeping the "machinery/pinnacle" clauses distinct is sound and matches the fact pack.

### [NICE] — "pinnacle of mechanical symbolism" mentioned in prose but not quoted
The afterlife prose (line ~197) references "the later vow to reach 'the pinnacle of mechanical symbolism'" as a separate clause. That phrase IS attested in the same interview (fact pack §4) — accurate to cite, no change needed. Noted only so a later editor doesn't mistake it for an unsourced flourish.

### Annotations / looking points — VERIFIED
- **Vest Pocket Kodak / folding bellows camera, from a period advertisement** — ✓ Met curatorial text: "the visual source… was a magazine advertisement for the popular Vest Pocket Kodak camera." Draft correctly frames it as a scholarly source-identification, not an inscription. ✓
- **Limp/extended-but-disengaged bellows, lens drooping; read as broken / sexually deflated** — ✓ Met ("bellows extended but disengaged"); NPG ("limp and broken camera"); standard Picabia scholarship. ✓
- **IDEAL in Gothic/blackletter, the camera strains toward but never reaches it** — ✓ multiple sources (NPG: "striving toward, but not reaching, the 'Ideal'"; Smartify: "the word 'IDEAL' above the camera in Gothic lettering"). ✓
- **FOI ET AMOUR = "faith and love," carries title phrase** — ✓ title verified; translation correct.
- **Automobile gearshift in neutral/park** — ✓ The Met's own wording is "automobile gears set in **park**"; other scholarship says "**neutral**." The draft hedges "neutral (or park)" — honest and correct; both are in circulation. ✓
- **Hand-brake engaged** — ✓ Confirmed (NPG/Smithsonian: "the brake is engaged"; Smartify: "the brake is engaged"). The draft's "engaged hand-brake" is well-supported and NOT an over-read. ✓

### Provenance — VERIFIED
- Stieglitz kept the original drawing/collage until his death 1946; came to the Met 1949 as the Alfred Stieglitz Collection, acc. 49.70.14. ✓ (Met; "the elder photographer kept the original ink drawing and collage… until his death in 1946.")
- **[NICE]** Draft says the price/gift mechanism (gift vs. bequest) "is not spelled out" — matches the fact pack's flagged minor uncertainty. The `price: 'Alfred Stieglitz Collection (gift)'` const field characterizes it as a gift; the Met credit line ("Alfred Stieglitz Collection, 1949") does not literally say "gift," and the estate distribution was handled by O'Keeffe/the estate. Low-risk, but "(gift)" is a mild inference — acceptable; could soften to just the credit line if desired.

### NPG / Orsay relief-print distinction — VERIFIED
Draft says separate "photomechanical relief-print copies of the published cover" live at NPG (Washington) and Musée d'Orsay, which is "why you may see the work described as a 'print.'" ✓ NPG NPG.93.477.A medium = **"relief print on paper."** The Met drawing kept distinct from the printed copies — correct and important. ✓

### Satire vs. homage — VERIFIED, correctly balanced
Both readings presented, neither to the exclusion of the other, per fact pack §8 and the mandatory-pipeline doctrine. Satire (Met's curatorial line: "concerns… that Stieglitz was losing his drive") and homage (faith-and-love; made for his own magazine; he owned it) both web-confirmed. ✓

### [NICE] — Cézanne/Picasso/Matisse "first shows" claim
Draft (StiCircle) says at 291 New Yorkers saw "their first Cézannes, their first Picassos, their first Matisses." This is the standard popular framing and broadly true (291 gave several of these their first US showings — e.g., Matisse's first US exhibition was at 291 in 1908). Not the work itself, low-stakes context, accepted; only flagged for completeness.

---

## Trap audit (all handled correctly by the draft)
- ✓ NOT a painting/print — called a drawing/collage throughout; medium verbatim.
- ✓ NOT "No. 1" — draft uses nos. 5–6 (Jul–Aug 1915) and explicitly debunks the Wikimedia filename in provenance.
- ✓ *foi et amour* spelling correct; avoids the Artsy "Foit et Amour" corruption.
- ✓ Vest Pocket Kodak framed as source-identification, not inscription.
- ✓ Quote sourced to the 1915 Tribune interview, not a later memoir.
- ✓ rights pd-us reasoning correct.

## Required fixes before integrate
1. **[FIX]** `heroAspect: 0.71` → recompute (50.8/75.9 = ~0.67); the value contradicts its own dimension comment.

(Optional [NICE]: soften provenance `price: '… (gift)'` to the bare credit line; otherwise no changes.)
