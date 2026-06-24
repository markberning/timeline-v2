# GATE — FACT-CHECK + LEGEND · Rothko, *No. 61 (Rust and Blue)* (1953) · slug `orange-yellow`

**Gate:** fact / legend (WEB-verified)
**Verified:** 2026-06-24
**Verdict:** **PASS** (no BLOCKERs). 2 FIX, 3 NICE. Every load-bearing claim WEB-confirmed.

---

## VERDICT SUMMARY

The draft is factually sound and clears the special-care traps. The work's name is
carried correctly as **No. 61 (Rust and Blue)**; the draft does NOT conflate it with the
different 1956 *Orange and Yellow* (Buffalo AKG) — it names and disavows that work
explicitly (PART A header comment, idiom ch.3, factpack §8). Rights `in-copyright` is
correct (Rothko d.1970; 1953 work not pd-us). Medium, dimensions, location, accession,
credit line all match the MOCA object record verbatim. The Rodman quote wording + source
are correct. Rothko's rejection of "colorist/abstractionist/color-field" is framed exactly
as he framed it — color as vehicle, emotion as end. No BLOCKERs found. The two FIXes are
small internal-consistency / citation-precision items; the NICEs are optional polish.

---

## CONFIRMED (WEB-verified, load-bearing — no change needed)

- **Name.** "No. 61 (Rust and Blue)" is the MOCA title. MOCA's full label string is
  *"No. 61 (Rust and Blue) [Brown Blue, Brown on Blue]"*. Draft leads with the correct name
  and carries the bracketed alt as a descriptive tag. ✓ (MOCA record)
- **NOT *Orange and Yellow*.** *Orange and Yellow* (1956) is a SEPARATE Rothko at the
  **Buffalo AKG / Albright-Knox** (231.2 × 180.4 cm, Gift of Seymour H. Knox Jr., 1956).
  Draft explicitly distinguishes the two and warns the slug is misleading. ✓ No conflation.
- **Medium.** "Oil on canvas." ✓ (MOCA)
- **Dimensions.** MOCA: 115¼ × 92 × 1¾ in (292.74 × 233.68 × 4.45 cm). Face = 292.74 ×
  233.68 cm. Conversion checks: 292.74 cm = 115.25 in = **9 ft 7.25 in** (draft rounds to
  9 ft 7 in ✓); 233.68 cm = 92.00 in = **7 ft 8 in** ✓. The 1¾ in / 4.45 cm third figure is
  stretcher DEPTH — draft correctly omits it from face dims. ✓ heroAspect 0.80 (233.68/292.74
  = 0.798) ✓. Dims given ft/in only, never cm in reader prose ✓.
- **Location / acquisition.** MOCA, Los Angeles; "The Panza Collection"; accession **84.9**;
  entered MOCA 1984. Credit line verbatim: *"The Museum of Contemporary Art, Los Angeles,
  The Panza Collection."* ✓ (MOCA)
- **Rights.** `in-copyright` CORRECT. Rothko d.1970; a 1953 work is not pd-us. MOCA rights
  line: *"©1998 Kate Rothko Prizel & Christopher Rothko / Artists Rights Society (ARS),
  New York."* heroCredit ("in copyright, shown small under fair use") is appropriate — NOT
  pd-us. ✓
- **Framing (the critical one).** Rothko rejected "abstractionist," "colorist," and the later
  "color-field painter" tag; draft frames the work as about EMOTION with color as the
  vehicle, and explicitly says the color relationships are NOT the point (idiom ch.2, break
  ch., the post-quote gloss). Draft uses "Color Field" only as the museums' movement
  category, never as Rothko's self-description. ✓ Exactly correct.
- **Descriptive titles, not Rothko-given.** Draft states Rothko numbered rather than named,
  and the parenthetical color tags are after-the-fact descriptors. ✓
- **"There is more than one Rothko No. 61."** Draft flags the year-by-year numbering
  ambiguity and pins this as the 1953 rust-on-blue MOCA canvas. ✓
- **Rodman quote — source.** Selden Rodman, *Conversations with Artists* (Devin-Adair, 1957),
  p.93; conversation recorded **1956**. ✓ Draft cites "1957 book ... 1956 Rodman conversation"
  — both correct (conversation 1956, book 1957). Wikiquote, Marginalian, Rodman archive all
  agree.
- **Rodman quote — wording.** Draft blockquote matches the widely-reproduced canonical
  text, including the middle clause *"I am not interested in the relationship of color or
  form or anything else"* (authentic, confirmed across sources) and *"or form"* (NOT "to
  form" — draft's anchor note is right). "tragedy, ecstasy, doom and so on" ✓; "break down
  and cry" / "religious experience" / "miss the point" ✓. The misquote warnings in ch.break
  (don't render as 1947 essay / MoMA wall text) are correct. ✓
- **1951 scale statement.** *"I paint very large pictures… I want to be very intimate and
  human… if you paint the larger picture, you are in it."* Source: *Interiors*, vol. 110
  no. 10, May 1951. ✓ (draft attributes it to "a statement he wrote in 1951" — correct)
- **Provenance / first exhibition.** Panza → MOCA 1984 ✓. Draft does NOT assert the shaky
  "1955 Sidney Janis" first-showing; it correctly says "no famous first buyer / no auction
  drama." Wikipedia confirms first exhibited MoMA 1961 — draft does not contradict this
  (it simply doesn't claim an earlier showing). ✓
- **Rothko biography.** b. Marcus Rothkowitz, Dvinsk (now Daugavpils, Latvia), Russian
  Empire, 1903; d. New York 1970 (suicide in his studio). ✓
- **Lineage / afterlife.** Color Field → Frankenthaler + Morris Louis → Rothko Chapel,
  Houston, **1971**. ✓ (Chapel dedicated Feb 1971.)

---

## FINDINGS

### [FIX] 1 — Figures-array caption for Selden Rodman: "1956" vs prose "1957 book"
**Where:** PART A `figures` array, line 66:
`{ name: 'Selden Rodman', role: 'Recorded the key statement, 1956', ... }`
**Issue:** Not wrong (the conversation WAS 1956), but it sits beside ch.break prose that
foregrounds the **1957** book and the heroCredit/idiom that never mention 1956, so a reader
hitting the figure card sees a bare "1956" that looks like it disagrees with the cited 1957
*Conversations with Artists*. Both years are real (conversation 1956 / published 1957) but
the card should disambiguate rather than assert a bare year.
**Corrected text:**
`role: 'Recorded the key statement (conversation 1956, pub. 1957)'`
(or simply `role: 'Recorded the key statement'` to avoid the apparent year clash).

### [FIX] 2 — Anchor-note pluralization vs blockquote ("relationship**s**" vs "relationship")
**Where:** ch.break wording note, line 210:
"the reprinted Rodman wording is "the relationship of color **or** form or anything else.""
vs the factpack §4 note which says "relationship**s** of color." Wikiquote renders it
singular ("the relationship of color or form"); some reprints use the plural. The draft's
blockquote (line 204) uses the singular "relationship," which matches the most-cited
Wikiquote/Marginalian text.
**Action:** No change to the blockquote (singular is the safer, most-reproduced form). The
note is internally consistent with the blockquote as written — **keep singular throughout**;
only flagging so the reviser does not "correct" the blockquote to the plural. (Either form
is defensible; pick one and keep it. Recommend SINGULAR, as drafted.)
*Downgrade to NICE if the reviser confirms blockquote and note already agree — they do as
written; this is a do-not-regress note.*

### [NICE] 1 — heroCredit could name ARS for completeness
**Where:** `heroCredit` line 43.
Current: *"…MOCA, Los Angeles · in copyright, shown small under fair use."* Accurate and
sufficient. The provenance block already names "© Kate Rothko Prizel & Christopher Rothko /
Artists Rights Society, New York." Optional: add "© ARS" to the hero credit for parity with
the rights line. Not required.

### [NICE] 2 — "advances and recedes" is presented as fact; it is perceptual/standard
**Where:** ch.looking + annotations ("warm colors come forward, cool ones fall back").
This is a well-established account of Rothko's warm/cool push-pull and is uncontroversial in
the literature; the draft already hedges ("nothing actually moves… built into the picture").
No correction needed — noting only that it is an interpretive-but-standard claim, not a
documented Rothko statement.

### [NICE] 3 — "founded in 1979, main building still under construction" (MOCA, ch.afterlife)
**Where:** ch.afterlife line 230. MOCA was founded 1979; the Panza acquisition (1984)
predated the Arata Isozaki Grand Avenue building (opened 1986) — so "main building still
under construction" in 1984 is accurate (the Temporary Contemporary/Geffen opened 1983, the
permanent Grand Avenue building 1986). Claim stands. Optional precision: "its permanent
Grand Avenue building not yet open." Not required.

---

## TRAP CHECK (factpack §8) — all cleared

| Trap | Status |
|---|---|
| Slug `orange-yellow` ≠ this painting | ✓ Draft names + disavows the 1956 Buffalo work |
| Title variants both descriptive, neither "the" title | ✓ Leads w/ Rust and Blue, alt noted |
| Multiple Rothko "No. 61"s | ✓ Flagged + pinned to 1953 MOCA canvas |
| Don't call him "colorist"/"abstractionist" | ✓ Labels only quoted-to-reject |
| Don't over-mystify | ✓ "inner light" explained as thinned washes, physical recipe |
| Dimensions — drop the 1¾ in depth | ✓ Face dims only, ft/in only |
| Shaky early-exhibition claims | ✓ Not asserted |
| Date firm 1953 | ✓ |

---

## SOURCES (WEB-verified this pass)
- MOCA object record — https://www.moca.org/collection/work/no-61-rust-and-blue-brown-blue-brown-on-blue
- Wikipedia, *No. 61 (Rust and Blue)* — https://en.wikipedia.org/wiki/No._61_(Rust_and_Blue)
- Buffalo AKG, *Orange and Yellow* (1956, the OTHER work) — https://buffaloakg.org/artworks/k19568-orange-and-yellow
- Wikiquote, *Mark Rothko* (Rodman quote + 1951 statement) — https://en.wikiquote.org/wiki/Mark_Rothko
- The Marginalian (Rodman/Rothko, full passage + 1956 conversation) — https://www.themarginalian.org/2014/02/19/mark-rothko-on-art-selden-rodman/
