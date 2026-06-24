# FACT-CHECK + LEGEND GATE — Lee Krasner, *The Seasons* (1957)

Work-read `krasner-seasons` · Abstract Expressionism chain 9/9 · Whitney Museum (87.7)
Gate: WEB-verified every load-bearing claim. No edits to draft/src; no commit.
Date: 2026-06-24

---

## VERDICT: **PASS WITH FIXES**

Core facts (title, artist, date, medium, dimensions, accession, credit line, rights)
are **all confirmed verbatim against the Whitney record** and the supporting biography,
exhibition, series-dating, and quote claims check out against the web. **No BLOCKERS.**
Two **[FIX]** items concern quote *attribution precision* (the gate's flagged priority)
and one metadata date in `figures`. Several **[NICE]** polish notes. The draft's own
fact-handling header and the "presented as reported/attributed" framing already disarm
most of the risk the fact pack flagged — the fixes below tighten the residual.

---

## CONFIRMED (no change needed)

- **Whitney record — exact match.** Fetched https://whitney.org/collection/works/6153 :
  Title *The Seasons*; Lee Krasner; **1957**; **Oil and house paint on canvas**;
  **92 3/4 × 203 7/8 in (235.6 × 517.8 cm)**; accession **87.7**; credit line
  "Purchase, with funds from Frances and Sydney Lewis by exchange, the Mrs. Percy
  Uris Purchase Fund and the Painting and Sculpture Committee"; © The Pollock-Krasner
  Foundation / Artists Rights Society (ARS), New York. **Acquisition year NOT printed
  on the page** — confirms the draft must not assert a hard year. ✓
- **rights: 'in-copyright' is CORRECT.** Krasner d. 1984; 1957 work; under US copyright;
  Whitney prints the © Pollock-Krasner Foundation / ARS line. NOT pd-us. The
  `heroCredit` ("in copyright, shown small under fair use") and `RestrictedFigure`
  treatment are right. ✓
- **Dimensions / ft-in math.** 203 7/8 in = 16.99 ft = **17 ft 0 in** (a true ~17 ft,
  rounds *down* — draft says this correctly). 92 3/4 in = **7 ft 8 3/4 in**.
  heroAspect 517.8 / 235.6 = 2.198 ≈ 2.20. All correct. ✓
- **Acquisition year handled correctly.** Draft asserts NO hard year; presents "~1987"
  as an inference from the "87" accession prefix, explicitly labeled an inference in
  prose, the const comment, and provenance. Exactly what the brief required. ✓
- **"Earth Green" (c. 1956–59) vs "Night Journey"/Umber (c. 1959–62) — NOT conflated.**
  Web confirms Earth Green 1956–59 and the Umber/Night Journey insomnia series
  1959–61/62 as a separate, darker run. The draft's `KraMaking` section explicitly
  keeps them apart ("They are not the dark night paintings… a separate, darker run").
  ✓ (Minor: some sources cap Umber at 1961, others 1962 — draft's "c. 1959 to 1962"
  is within the cited range; fine.)
- **Post-Pollock context kept proportionate.** Pollock d. **11 Aug 1956** (confirmed);
  Krasner was in Europe and returned (confirmed); she moved into the barn studio
  (confirmed). The draft explicitly refuses the "grieving widow" reduction and notes
  ~20 yrs a committed painter before and ~28 after. Proportionate, as required. ✓
- **The "this was my answer" quote — CONFIRMED.** "Jackson died in '56 so the question
  came up whether one would continue painting at all and I guess this was my answer."
  Corroborated as Krasner's, from the **AAA oral history (Dorothy Seckler, 1964–68)**.
  Primary AAA transcript still 403 on direct fetch, but the wording + AAA/Seckler
  attribution are consistent across reachable sources. The draft presents it as
  "widely reported in this form" / "attributed" — honest and correct. ✓
- **Biography.** b. Oct 27 1908, d. June 19 1984; National Academy of Design
  (1928–32); studied under **Hans Hofmann from 1937** ("late 1930s" ✓); married
  Pollock 1945; in Europe at his death. All confirmed (Wikipedia/Tate). ✓
- **1949 "Mrs. Jackson Pollock" billing — CONFIRMED.** The 1949 ARTnews "Artists: Man
  and Wife" review printed the parenthetical "Lee Krasner (Mrs. Jackson Pollock)."
  Draft's claim is accurate. ✓
- **Exhibitions — CONFIRMED.** 1965 **Whitechapel Gallery** retrospective (Bryan
  Robertson, *Paintings, Drawings and Collages*, London, toured UK); 1973 **Whitney**
  *Lee Krasner: Large Paintings*. Both verified. ✓
- **"Too decorative" / coded-feminine critical dismissal** — corroborated across
  secondary scholarship (The Art Story et al.). Presented as a reported strand, fine. ✓

---

## [FIX] — must correct before ship

### FIX-1 — "a damn good painter, thank you" quote: attribution is wrong/loose
**Where:** `KraAfterlife` prose (draft lines ~250–253) — blockquote + the sentence
"The remark circulates widely (through Pollock-Krasner House materials and the
standard accounts)…"; and the const/header note (draft line 13) calling it
"Pollock-Krasner House / widely quoted."

**Finding:** The verbatim quote is confirmed —
> "I was a woman, Jewish, a widow, a damn good painter, thank you, and a little too independent."
— but its actual source is **Gail Levin**, Krasner's biographer, recounting what
Krasner said to her at their **first meeting in 1971** (per The Forward; Levin,
*Lee Krasner: A Biography*, 2012). It is **NOT** from "Pollock-Krasner House
materials," and **NOT** from the AAA Seckler oral history. The draft's attribution
to "Pollock-Krasner House materials and the standard accounts" is unsupported and
should not be asserted.

**Fix:** Either (a) drop the false sourcing and keep it generic, or (b) attribute it
correctly to Levin. Suggested replacement for the sentence at draft ~253:
> "The remark, recounted by her biographer Gail Levin from their first meeting, in
> 1971, circulates widely as Krasner's own summary of why the art world kept her at
> arm's length."
And in the const header note (line 13), change "Pollock-Krasner House / widely
quoted" → "recounted by biographer Gail Levin (1971); widely quoted." The quote
*text* and the "reported" framing are fine; only the named source must change.

### FIX-2 — `figures`: "Barbara Rose · her 1983 retrospective" date is imprecise
**Where:** const `figures` (draft line 91): `role: 'Critic; her 1983 retrospective
drove the reappraisal'`.

**Finding:** The Barbara Rose retrospective *Lee Krasner: A Retrospective* opened at
the **Museum of Fine Arts, Houston** and traveled to **MoMA, where it ran Dec 20,
1984 – Feb 12, 1985** — i.e. it opened *after* Krasner's death (June 1984). The
catalog carries a 1983 date and the Houston leg is sometimes cited as 1983, so "1983"
is not invented, but baldly calling it "her 1983 retrospective" is loose and conflicts
with the draft's own (correct) prose, which says the reappraisal/retrospective came
"near the end of her life." Also: Rose was the **curator/organizer**, more than just
"critic."

**Fix:** Change the role string to avoid the hard 1983 and the bare "critic," e.g.:
> `role: 'Curator; her MoMA/Houston retrospective (1983–85) drove the reappraisal'`
or simply `'Curator; her career retrospective drove the 1980s reappraisal'`.
(Prose in `KraAfterlife` is already safe — no edit needed there.)

---

## [NICE] — optional polish

- **N-1 — "this was my answer" attribution detail.** The draft says the AAA sessions
  were "the mid-1960s." The AAA oral history is dated **1964 Nov 2 – 1968 Apr 11**, so
  "mid-1960s" is fine; if you want precision, "the mid-1960s" → "the 1964–68 sessions."
  Not required.
- **N-2 — Umber series end date.** Draft "c. 1959 to 1962"; Kasmin's show is
  "1959–1962," other sources "1959–61." Within range; leave as is.
- **N-3 — "Matisse's cut-out forms" (lineage parent).** Plausible and commonly drawn,
  but it is an interpretive lineage tag, not a sourced biographical fact. Acceptable
  as a `lineage` label (these are associative, not claims of direct study); no action.
- **N-4 — Frances and Sydney Lewis "collectors."** The credit line says funds came
  "by exchange" from the Lewises; the `figures` role "Collectors; funds by exchange
  behind the Whitney purchase" is accurate and well-hedged. ✓ no action.

---

## SUMMARY TABLE

| Claim | Status |
|---|---|
| Title / date / medium / dims / accession / credit line / © | ✓ verbatim (Whitney) |
| rights: in-copyright (not pd-us) | ✓ correct |
| Acquisition year NOT asserted (~1987 = inference) | ✓ correct |
| Earth Green vs Night Journey kept distinct | ✓ correct |
| Post-Pollock context proportionate | ✓ correct |
| "this was my answer" quote + AAA/Seckler attribution | ✓ confirmed (presented as reported) |
| "damn good painter" quote text | ✓ confirmed |
| "damn good painter" SOURCE = Pollock-Krasner House | ✗ **FIX-1** (it's Gail Levin, 1971) |
| Barbara Rose "1983 retrospective" in figures | ⚠ **FIX-2** (opened MFAH 1983 → MoMA 1984–85) |
| 1965 Whitechapel / 1973 Whitney Large Paintings | ✓ confirmed |
| Biography (dates, NAD, Hofmann 1937, married 1945, Europe) | ✓ confirmed |

**No BLOCKERS. 2 FIX (1 quote-attribution, 1 metadata date). Ship after the two fixes.**
