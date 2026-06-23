# FACT-CHECK + LEGEND GATE — Boccioni, *Dynamism of a Cyclist* (1913)

**Target:** `audits/art-pipeline/work-cyclist-draft.md`
**Fact pack:** `audits/art-pipeline/work-cyclist-factpack.md`
**Gate:** fact-check + legend (apocrypha / fact-trap) axis, gated art pipeline.
**Verdict:** PASS with one [FIX] and a handful of [NICE]. **No [BLOCKER].** Every
load-bearing claim verified against the fact pack and the web. The four named fact-traps
(loan-status present tense, Marinetti-not-Boccioni-founded, landscape dims, no invented
provenance/price) are all handled correctly. The 1910 manifesto quote is verbatim-safe.

I did NOT edit the draft and did NOT commit.

---

## SUMMARY TABLE

| # | Sev | Claim | Status |
|---|---|---|---|
| 1 | PASS | Loan to Peggy Guggenheim is past-tense / ended ~2016, owner = Mattioli | Verified, handled correctly |
| 2 | PASS | Marinetti founded Futurism, not Boccioni | Verified |
| 3 | PASS | Dims 70×95 cm → 2′3½″×3′1½″, landscape ~1.36 | Verified, conversion correct |
| 4 | PASS | No invented early provenance / price | Verified — gaps left honest |
| 5 | PASS | 1910 Technical Manifesto "dynamic sensation itself" verbatim | Verified verbatim |
| 6 | FIX | Current location "Gianni Mattioli Collection, Milan" + Museo del Novecento hedge | Hedge is fine, but the Novecento loan is now firmly documented — over-hedged + one detail to tighten |
| 7 | NICE | "26 works… opened 6 September 1997" | 26 verified; exact day 6 Sep not independently confirmed |
| 8 | NICE | Death "17 August 1916… thrown and trampled" | Correct; thrown 16 Aug, died 17 Aug — draft is right |
| 9 | NICE | Mattioli "1949 purchase of 87 works from Feroldi" | Matches fact pack/Wikipedia |

---

## THE FOUR NAMED FACT-TRAPS — all clear

### TRAP 1 — Loan status must NOT be present tense. [PASS]
The draft is scrupulous about this. Every reference to the Peggy Guggenheim loan is
past-tense and bounded "1997–c.2016 / 1997 to about 2016," and the draft states outright
"the loan has ended" and "the old 'now at the Peggy Guggenheim, Venice' label is out of
date." The owner is consistently named as the Gianni Mattioli Collection, not the
Guggenheim. The stats chip reads `Mattioli Coll.`, not Guggenheim.
- Verified: loan ran **1997–2015/2016** (Wikipedia *Gianni Mattioli* = "to 2015";
  *Laura Mattioli* article = "from 1997 to 2016"; The Art Newspaper = "1997 to 2015").
  The draft's "about 2016" is the correct hedge.
  Sources: en.wikipedia.org/wiki/Laura_Mattioli ; theartnewspaper.com 2021/11/22.

### TRAP 2 — Marinetti founded Futurism, not Boccioni. [PASS]
Handled emphatically and correctly in three places (CycMilan: "Marinetti founded
Futurism. He was a poet, not a painter"; CycBoccioni: "Boccioni did not found Futurism…
He was a founding signatory of the painters' manifestos"; figures array: Marinetti role =
"Founded Futurism," Boccioni role = "The painter"). Verified: Marinetti published the
*Manifesto of Futurism* in *Le Figaro*, 20 Feb 1909; Boccioni came under his influence
after settling in Milan. Source: en.wikipedia.org/wiki/Umberto_Boccioni; Britannica.

### TRAP 3 — Dims 70×95 cm (H×W) → landscape imperial. [PASS]
- 70 cm = 27.56 in = 2 ft 3.56 in ≈ **2′3½″** (H). ✓
- 95 cm = 37.40 in = 3 ft 1.40 in ≈ **3′1½″** (W). ✓
- Aspect W/H = 95/70 = **1.357 ≈ 1.36**, LANDSCAPE. ✓
`heroAspect: 1.36`, `heroFit: 'contain'`, dimensions string and stat chip all correct and
consistent. Wikipedia infobox confirms "70 cm × 95 cm (28 in × 37 in)." No portrait flip.

### TRAP 4 — No invented early provenance / price. [PASS]
The Boccioni→Mattioli chain is explicitly left as a gap ("not documented in accessible
sources, so it is left as a gap rather than invented"; "The exact date he acquired the
*Cyclist* is not documented"). Every `price` field is `null`, `'inherited'`,
`'loan, not sale'`, or `'—'` — no fabricated figure. Matches fact pack §6/§8.5 exactly.

### TRAP 5 (bonus) — 1910 manifesto quote verbatim. [PASS]
Draft (CycMaking + stats reasoning): the gesture "shall no longer be a fixed moment in
universal dynamism. It shall simply be **the dynamic sensation itself.**"
Verified verbatim against the manifesto full text: "The gesture which we would reproduce
on canvas shall no longer be a fixed moment in universal dynamism. It shall simply be the
dynamic sensation itself." Word-for-word match. Publication: *Poesia*, Milan, 11 April
1910, signed Boccioni, Carrà, Russolo, Balla, Severini — all stated correctly ("signed by
Boccioni and four other painters"). Source: unknown.nu/futurism/techpaint.html;
en.wikipedia.org/wiki/Futurist_Painting:_Technical_Manifesto.

---

## FINDINGS

### [FIX] Current-location hedge is now slightly over-hedged; tighten one phrase.
**Where:** CycAfterlife "Where it is now" + the `location` field + provenance row
`c.2016–today`. The draft says no single authoritative page "nails down the present-day
wall with certainty" and frames Museo del Novecento as a soft, recent-sources claim.
**Issue:** Since the fact pack was written, the Museo del Novecento placement is now well
documented as a deliberate, formal arrangement — not a loose tertiary rumor. The Mattioli
Collection's 26 Futurist works (including this *Cyclist*) moved to the **Museo del
Novecento, Milan, on a free five-year renewable loan beginning spring 2022** (The Art
Newspaper, 22 Nov 2021), and the current Wikipedia infobox states "Museo del Novecento,
Milan (on long-term loan from the Gianni Mattioli Collection)." This is the firmest
present-day reading available and matches the draft's stated location — so the draft's
*conclusion* is correct, but its framing under-sells the documentation.
**Correction (optional, not blocking):** Soften "no single authoritative museum page nails
down the present-day wall with certainty" toward "the collection moved on long-term loan
to the Museo del Novecento around 2022," keeping a light hedge but crediting the documented
2022 arrangement. The draft is NOT wrong — it just hedges a now-sourced fact. Acceptable to
ship as-is; this is a polish, not an error.
**Source:** theartnewspaper.com/2021/11/22/milan-museum-wins-battle-to-show-great-futurist-collection ;
en.wikipedia.org/wiki/Dynamism_of_a_Cyclist (infobox).

**Sub-note on ownership wording (verify-don't-relay):** The Art Newspaper (2021) names
**Giacomo Rossi, grandson of Mattioli, as "current owner of the collection,"** while the
draft credits **Laura Mattioli** (the daughter) with stewardship/arranging the loan. Both
are correct and not in conflict: Laura Mattioli (b. 1950, art historian) inherited from her
father in 1977 and has been the collection's curator since 1983 and arranged the 1997
Venice loan; the next generation (Giacomo Rossi) is now described as owner. The draft's
statements about Laura — "inherited on her father's death in 1977," "art historian,"
"arranged the long-term loan" — are all individually accurate (confirmed by the Laura
Mattioli Wikipedia article). No change required, but if a present-tense owner is ever
asserted, use "the Mattioli family / Gianni Mattioli Collection," not "Laura Mattioli owns
it today." Source: en.wikipedia.org/wiki/Laura_Mattioli ; The Art Newspaper.

### [NICE] "opened on 6 September 1997" — exact day not independently confirmed.
**Where:** provenance row `1997–c.2016` and CycAfterlife ("opened on 6 September 1997").
The fact pack asserts 6 Sept 1997 from the Guggenheim press release; the year 1997 and the
"26 works" count are both independently verified, but I could not pull the exact opening
day from a second source (the Guggenheim press PDF was binary-unreadable). Low risk — it
traces to a named primary source in the fact pack and is not load-bearing. No action
needed unless the coordinator wants a second confirmation of the day.

### [NICE] Death sequence — draft is correct, noting for the record.
Several sources phrase it as "thrown from his horse on 16 August 1916, died the next day,
17 August." The draft dates the death "17 August 1916" and says he was "thrown from his
horse and trampled, and died the next day" — consistent and accurate (the throw was the
16th, death the 17th). Age 33, near Verona, drafted May 1916, cavalry/artillery training
exercise: all verified. Source: italianartsociety.org; en.wikipedia.org/wiki/Umberto_Boccioni.

### [NICE] "1949 purchase of 87 works from the Pietro Feroldi collection."
Matches fact pack §3 and Wikipedia (*Gianni Mattioli*: 87 works from Feroldi in 1949).
The draft uses the broader "late 1930s–1940s, with a major 1949 purchase" framing the fact
pack recommended over the Guggenheim's tidy "formed 1949–1953" — correct call. No change.

### [NICE] All "look closer" annotation surfaces — verified, appropriately hedged.
Every annotation pointer (rider as a lean, wheel smeared into its arc, force lines lower-
left to upper-right, near-dissolved center mass, clashing color planes, no fixed contour)
is either an observation of the canvas or a sourced claim. The two that lean on the source
quote it accurately: figure/bicycle/space "seemingly fuse together in a single form"
(verified verbatim on Wikipedia) and the color "discord" tied explicitly to "the failure
of the Futurists to develop a coherent colour theory" (verified verbatim, and correctly
framed as energy, not a system). The `linee-forza` gloss ("how an object would resolve
itself if it followed the tendencies of its own forces") matches the Wikipedia phrasing.
No over-claim of pixel coordinates — pointers are directional/prose, per house rule.

---

## SURFACES CHECKED (whole-section, per the all-surfaces mandate)
hook · stats chips · `location` · `acquired` · heroCredit · section blurbs (5) ·
provenance rows (5) · figures array (5) · all 6 annotations · lineage parents/children ·
all body prose (5 chapters) · the manifesto quote · the Guggenheim "his most beautiful"
attribution. No factual surface left ungated.

## ON THE NON-GATED-BUT-WATCHED ITEMS
- "his most beautiful" is correctly attributed to the Guggenheim's curators, not asserted
  in house voice (fact pack §7). ✓
- Marinetti "war = the world's only hygiene" + later Fascism: documented, attributed to
  Marinetti, movement-level — consistent with the Futurism fact handling. ✓
- *Unique Forms of Continuity in Space*, 1913, the sculpture twin: verified date/title. ✓
- *The City Rises* (1910–11) as the legible earlier work: verified. ✓
- Bergson (1859–1941), constant flux: verified. ✓

---

## SOURCES CONSULTED
- en.wikipedia.org/wiki/Dynamism_of_a_Cyclist (infobox: dims, medium, Museo del Novecento; fusion/force-line/divisionism/color-theory text)
- en.wikipedia.org/wiki/Laura_Mattioli (inherited 1977, curator since 1983, loan 1997–2016)
- en.wikipedia.org/wiki/Gianni_Mattioli (Feroldi 87 works 1949; loan to 2015)
- en.wikipedia.org/wiki/Umberto_Boccioni (death 17 Aug 1916, age 33, Verona, drafted May 1916; Marinetti founded)
- en.wikipedia.org/wiki/Futurist_Painting:_Technical_Manifesto (11 Apr 1910, Poesia, 5 signatories)
- unknown.nu/futurism/techpaint.html (manifesto verbatim quote)
- theartnewspaper.com/2021/11/22/milan-museum-wins-battle-to-show-great-futurist-collection (Venice loan ended; Museo del Novecento free 5-yr renewable loan, spring 2022; 26 works; grandson Giacomo Rossi owner)
- italianartsociety.org (Boccioni death near Verona, 17 Aug 1916)
- Britannica, Boccioni (Marinetti launched Futurism)
