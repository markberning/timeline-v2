# FACT-CHECK + LEGEND GATE — Matisse, *Open Window, Collioure* (1905)

**Gate:** FACT + LEGEND (gate 1 of the art critic pipeline)
**Target draft:** `audits/art-pipeline/work-open-window-draft.md`
**Fact pack:** `audits/art-pipeline/work-open-window-factpack.md`
**Reviewer note:** every claim checked against the fact pack AND the live web (NGA object page 106384 via search relay, fr/en Wikipedia, Met *Vertigo of Color*, SFMOMA, AGORHA/INHA). No edits made to the draft. Verdict: **NOT clean — 1 BLOCKER, 3 FIX, 2 NICE.** The watch-list items the brief named are all handled correctly by the draft (Fauvism-naming not pinned on this canvas; Stein 500fr kept on *Woman with a Hat*; no invented prices; portrait aspect 0.83; summer-1905 Collioure with Derain). The blocker is a **provenance omission**, not a watch-list miss.

---

## [BLOCKER]

### B1 — Provenance is missing its first owner: **Galerie Druet, Paris**
**Where:** PART A `provenance[]` (lines 64–72) AND PART B prose, WinAfterlife (lines 211–215).

**Draft text (const):** the chain runs `Henri Matisse (1905)` → `Pieter Van der Velde (1906)` → `General Réquin (1915–1918)` → … i.e. it presents **Van der Velde as the first private owner** and the prose makes this load-bearing:
> "It did not pass straight from the artist into a museum; this is its **first private owner**." (line 66, Van der Velde note)
> "In **1906**, the year after the Salon, it was acquired by a collector in Le Havre named Pieter Van der Velde." (prose, line 212)

**Problem:** The NGA's own provenance record places **Galerie Druet, Paris** in the chain *before* Van der Velde. The full NGA chain reads: *Galerie Druet, Paris; Pieter Van der Velde [1848–1922], Le Havre, 1906; probably given to General Réquin, 1915–1918; private collection, Paris, by 1949; Carstairs Gallery & Sidney Janis Gallery; sold 6 Aug 1952 to the Whitneys; 1998 to NGA.* The fact pack §5 also dropped Druet, so the error is inherited from the pack, not introduced by the author — but it is still a wrong/incomplete factual surface (provenance is an explicitly gated surface per the pipeline) and the prose's "first private owner" claim is now **affirmatively wrong**: the Druet gallery handled it first.

**Correction:** Insert a `Galerie Druet, Paris` provenance row before the Van der Velde row (price `null`, place Paris; NGA gives no acquisition date for Druet, so do not invent one — "before 1906"). Remove or soften the "this is its first private owner" sentence in the Van der Velde note. In the prose, either name Druet ("the Paris dealer Galerie Druet handled it, and by 1906 it had gone to a Le Havre collector, Pieter Van der Velde") or drop the "first owner" framing. Keep the "did not pass straight from the artist into a museum" point — that survives — but it went artist → Paris dealer → Le Havre collector, not artist → Van der Velde.

**Source:** NGA object 106384 provenance (relayed via NGA search snippet + multiple mirrors): "Galerie Druet, Paris; Pieter Van der Velde [1848-1922], Le Havre, 1906; probably given to his son-in-law, General Réquin, Paris, 1915-1918; …" — https://www.nga.gov/artworks/106384-open-window-collioure

---

## [FIX]

### F1 — Prose drops the ⅛ from the width (says "one foot six inches" instead of "one foot six and one-eighth inches")
**Where:** PART B, WinLooking, line 155.

**Draft text:** "about **one foot nine and three-quarter inches high by one foot six inches wide**"

**Problem:** 46 cm = 18.11 in = **1 ft 6 1/8 in**, which the const (`dimensions: '1 ft 9 3/4 in × 1 ft 6 1/8 in'`, line 41), the stats chip (line 54), and the `looking` section dateLabel (line 60) all state correctly. Only the spelled-out prose rounds the width down to a flat "one foot six inches," which under-reports by ⅛ in and is internally inconsistent with the rest of the draft. (The height "one foot nine and three-quarter inches" is correct: 55.3 cm = 21.77 in = 1 ft 9¾ in.)

**Correction:** "…by **one foot six and one-eighth inches** wide" (or "just over one foot six inches wide"). Verified: 55.3/2.54 = 21.77 in; 46/2.54 = 18.11 in.

**Source:** NGA 55.3 × 46 cm (fact pack §1, NGA object page); arithmetic verified.

### F2 — Vauxcelles's printed line predates the Salon's public opening; "that autumn the picture went up on a wall… On 17 October 1905…" telescopes the timeline
**Where:** PART B, WinSalon, lines 183 + 190.

**Draft text:** "That autumn the picture went up on a wall in Paris, at the Salon d'Automne…" then "On **17 October 1905**, the critic Louis Vauxcelles… wrote a line that stuck."

**Problem:** The 1905 Salon d'Automne ran **18 October – 25 November 1905** (Grand Palais). Vauxcelles's *Gil Blas* review is dated **17 October 1905** — i.e. it appeared at/just before the press preview/vernissage, a day *before* the public opening. The draft's sequencing ("the picture went up on a wall… On 17 October… wrote a line") is not false but reads as if the public show was already running when the line was printed; the line in fact dropped on the eve of (or at) the opening. Minor, but the dates are a gated factual surface and the draft never states the run-dates, so a reader can't reconstruct that the review preceded the opening.

**Correction:** Optional but recommended: note the Salon ran 18 Oct–25 Nov 1905, and that Vauxcelles's line ran in *Gil Blas* on 17 October (the eve of / at the vernissage). At minimum, do not imply the public show was underway before the 17 Oct review. The date "17 October 1905" itself is correct — keep it.

**Source:** AGORHA/INHA "Salon d'Automne (18/10/1905 – 25/11/1905), Grand Palais" — https://agorha.inha.fr/ark:/54721/d130aa99-ccde-4e86-b9aa-999b6b1c69a4 ; fr.wikipedia *Salon d'Automne de 1905*; Gil Blas date confirmed (fr.wikipedia, en.wikipedia *Fauvism*).

### F3 — "his summer companion Derain… by Maurice de Vlaminck and others" in Salle VII — confirm Vlaminck/list, fine; but the Marque busts described as "Renaissance-style" twice — verify, OK
**Where:** PART B, WinSalon, lines 186 + 190.

**Problem:** This is a *pass-with-note*, not a defect: the draft says Salle VII held "canvases by Matisse, by his summer companion Derain, by Maurice de Vlaminck and others" around "two small, prim, Renaissance-style marble busts by a conventional sculptor named Albert Marque." All verified — Salle VII held Camoin, Derain, Manguin, Marquet, Matisse, Vlaminck; Marque's two busts (described as quattrocento/Renaissance-style) sat at the room's center. The only thing to confirm at the looking-gate (not here) is the "two busts" count vs. the canvas's own annotation calling them "a pair of prim marble busts" (section blurb line 61) — consistent. **No change required**; logged so the looking/clarity gates don't re-flag it.

**Source:** fr.wikipedia *Salon d'Automne de 1905* (Salle VII roster + Marque busts); en.wikipedia *Fauvism*.

---

## [NICE]

### N1 — "the divided touch he had picked up from the dot painters (the Neo-Impressionists)" — accurate, optionally name Signac/Saint-Tropez 1904
**Where:** PART B, WinMaking, line 137; annotation line 85.

The draft attributes the broken/divided dashes to "the dot painters (the Neo-Impressionists)." Correct and well-framed. If the comprehensiveness gate wants more, the documented specific is that Matisse absorbed Divisionism from **Signac at Saint-Tropez in summer 1904** (*Luxe, calme et volupté*), the year before Collioure — but this is enrichment, not a fix, and is outside the fact pack's scope. Leave unless a later gate asks for it.

### N2 — "had started two years earlier" for the Salon d'Automne — correct, no action
**Where:** PART B, WinSalon, line 183.

The Salon d'Automne was founded in **1903**; "two years earlier" relative to 1905 is correct. Logged so it isn't re-queried.

---

## WATCH-LIST ITEMS (brief-specified) — all CLEAR

1. **NGA Washington, acc. 1998.74.7, Whitney credit; dims 55.3×46 → portrait 0.83.** Accession, credit line ("Collection of Mr. and Mrs. John Hay Whitney"), bequest 1998, location all correct (lines 42–43, 71). Aspect 0.83 / portrait correct and explicitly flagged in const comments + prose (lines 18, 49, 155). Dimension conversion correct in const/stats; **prose width has the F1 ⅛ slip.** Verified aspect = 46/55.3 = 0.832.
2. **Do NOT pin Fauvism's naming on this canvas.** ✅ Handled exactly right. WinSalon explicitly corrects it: "do not let anyone tell you it 'named Fauvism,' because the room did, and the busts did" (line 193); const comment line 21–23 reinforces. The "Donatello chez les fauves" line correctly attributed to the *whole Salle VII*/Marque busts.
3. **Cage backstory = Vauxcelles's 1939 retelling.** ✅ Correct and properly framed as legend: "That version comes from Vauxcelles himself, but only in a book he wrote in 1939, thirty-four years later… held at arm's length, framed as a story" (line 193). Matches fact-pack §9.1 doctrine.
4. **Stein 500-franc purchase belongs to *Woman with a Hat*, NOT this.** ✅ Explicit clean separation: "It was *Woman with a Hat*, not this canvas, that the American collectors Leo and Gertrude Stein bought… for somewhere around five hundred francs" (line 196). Verified: Steins bought *Woman with a Hat* for 500 francs (~$100) at the 1905 Salon.
5. **No sale prices documented — flag invented numbers.** ✅ No invented figures anywhere; all provenance `price` fields are `null` except the final bequest; prose says so out loud (line 215: "No dollar prices survive in the public record… inventing one would be worse than leaving the blank"). Clean.
6. **Summer 1905 Collioure with Derain.** ✅ Correct: summer 1905, Collioure (Roussillon, near Spanish border), Derain joined "early July" (line 115/58). Verified — Derain arrived early July (8 July 1905) on Matisse's invitation. Matisse age 35 (b.1869) ✅; Derain age 24, dates 1880–1954 ✅ (death year coincides with Matisse's 1954 — both correct, not an error).

## OTHER CLAIMS SPOT-CHECKED — CLEAR
- Title "Open Window, Collioure" (NGA title) ✅; medium oil on canvas ✅; year 1905 ✅.
- Whitney dates: John Hay Whitney 1904–1982 ✅; Betsey Cushing Whitney 1908–1998 ✅; sold to Whitneys 6 Aug 1952 ✅; Carstairs + Sidney Janis joint 1952 purchase ✅; Réquin "probably given" 1915–1918 hedge preserved ✅; 1949 Paris private collection ✅. (All correct **except** the missing Druet head of chain — B1.)
- rights `pd-us` ✅ (1905 work, pre-1930; plus all Matisse PD-US since 1 Jan 2025).
- Window-as-lifelong-motif (Nice, Étretat, late 1940s) ✅ matches fact pack §5 beat 5.
- Granular named hues (peacock blue, fuchsia, ultramarine, etc.) correctly attributed to the NGA-affiliated highlight essay as "one careful viewer's account rather than gospel" (line 140), per fact-pack §9.5 — not asserted as canonical. Visual specifics (boat masts/hulls colors, flower pots, frames-within-frames, dissolved threshold) are LOOKING-gate surfaces — verify against the image at that gate; not adjudicated here.

---

### Summary
| Severity | Count | Items |
|---|---|---|
| BLOCKER | 1 | B1 provenance missing Galerie Druet (also corrupts "first private owner" claim) |
| FIX | 3 | F1 prose width drops ⅛; F2 Salon run-dates / review-precedes-opening; F3 Salle VII roster pass-note |
| NICE | 2 | N1 Signac/Divisionism enrichment; N2 Salon founded 1903 confirm |

**The single must-fix before this can pass is B1.** Everything the brief specifically warned about is already correct in the draft.
