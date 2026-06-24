# Gate — FACT-CHECK + LEGEND — *Vir Heroicus Sublimis* (Barnett Newman, 1950–51)

**Gate:** fact / legend (web-verified). **Work:** Newman, *Vir Heroicus Sublimis*, MoMA (acc. 240.1969).
**Draft:** `audits/art-pipeline/work-vir-heroicus-draft.md` · **Fact pack:** `work-vir-heroicus-factpack.md`
**Date:** 2026-06-24 · **Verdict: PASS — no BLOCKERs, no FIXes. 3 NICE notes only.**

The draft is clean. Every load-bearing claim web-verified against MoMA, Wikipedia, Tate, Art Blart (MoMA wall-text reproduction), and the Barnett Newman Foundation chronology. The author handled all the gate-flagged traps correctly: it uses the MoMA-label height (242.2, not Wikipedia's 242.3), quotes the Betty Parsons notice verbatim, uses only the Tate-confirmed *Sublime Is Now* fragment, and explicitly does NOT assert the "I declare the space" line. Rights handling is correct.

---

## Load-bearing claims — verification table

| Claim in draft | Verified? | Source |
|---|---|---|
| Title *Vir Heroicus Sublimis*; translates "Man, Heroic and Sublime" | ✅ | MoMA wall label, Wikipedia |
| Artist Barnett Newman, American, 1905–1970 | ✅ | MoMA, Wikipedia |
| Date 1950–51 | ✅ | MoMA ("1950-51") |
| Medium oil on canvas | ✅ | MoMA, Wikipedia |
| Dimensions 242.2 × 541.7 cm = 7 ft 11⅜ in × 17 ft 9¼ in | ✅ (MoMA figure) | MoMA: "7′ 11 3/8″ × 17′ 9 1/4″ (242.2 × 541.7 cm)". Wikipedia infobox gives **242.3** — draft correctly chose the MoMA 242.2; see NICE-1 |
| MoMA, New York; "Gift of Mr. and Mrs. Ben Heller"; acc. 240.1969 | ✅ | MoMA search record, Wikipedia (accession 240.1969) |
| FIVE zips, no two alike | ✅ | MoMA, Smarthistory, multiple; search confirms five (light-red / white / maroon / orange / tan) |
| "zip" is Newman's OWN term, coined ~1948 (Onement I era) | ✅ | MoMA, TheArtStory: Newman's own device/word from 1948 |
| Betty Parsons Gallery, NY, solo show 23 Apr–12 May 1951 (first showing) | ✅ | Art Blart (MoMA wall text), Newman Foundation chronology |
| 1951 close-viewing notice, quoted: "There is a tendency to look at large pictures from a distance. The large pictures in this exhibition are intended to be seen from a short distance." | ✅ VERBATIM | Art Blart reproduces MoMA wall text with this exact wording; multiple sources confirm |
| Key statement = *The Sublime Is Now* (1948), *Tiger's Eye* Dec 1948 | ✅ | Tate, Newman Foundation; essay + pub data solid |
| Quoted fragment: "asserting man's desire for the exalted, for a… relationship to the absolute emotions." | ✅ matches Tate | Tate: "…are asserting man's desire for the exalted, for a… relationship to the absolute emotions." Draft's rendering matches (see NICE-2) |
| Ben Heller bought directly from Newman c. 1961 | ✅ (Jan 1961) | Multiple; purchase reported January 1961, part of a package deal |
| Given to MoMA 1969 by Ben & Sally Heller | ✅ | accession 240.1969 anchors the gift year |
| © Barnett Newman Foundation / Artists Rights Society (ARS), New York | ✅ | MoMA credit |
| Newman died 1970 | ✅ | MoMA, Wikipedia |

---

## RIGHTS — verified correct

- `rights: 'in-copyright'` is **CORRECT**, not pd-us. Newman d. 1970; work 1950–51 is under US copyright. Draft sets `rights: 'in-copyright'`, hero shown small under fair use, heroCredit reads "in copyright, shown small under fair use." ✅
- ARS / Barnett Newman Foundation © line present in provenance museum row. ✅
- **No pd-us anywhere.** ✅

## KEY STATEMENT / quote hygiene — verified correct

- The draft uses the Tate-confirmed *Sublime Is Now* fragment and does **NOT** assert the unsourced "I declare the space" line as a hard quote. The draft header and PART-A/PART-B comments explicitly note the "I declare the space" line is unsourced and not used. ✅ Exactly what the prompt required.
- The Betty Parsons notice is quoted verbatim as a real 1951 artifact (not softened to "some say"). ✅

## "heroAspect" math check

- `heroAspect: 2.24` from 541.7 / 242.2 = **2.2366 → 2.24**. ✅ Correct (the comment's "W/H ≈ 2.24" is right).

---

## NICE (optional polish — none ship-blocking)

**NICE-1 — Dimension discrepancy is correctly resolved; leave the gate comment as-is.**
The draft's inline code comment ("height 242.2 cm (MoMA label), NOT the Wikipedia 242.3") is accurate and verified live: MoMA = 242.2, Wikipedia infobox = 242.3. No change needed; flagging only to confirm the author's choice is the right one. The reader-facing imperial (7 ft 11⅜ in) matches the MoMA metric, so there is no metric/imperial mismatch.

**NICE-2 — Key-statement fragment punctuation: optional tightening.**
Draft (NwmSublime) renders the fragment as: *"asserting man's desire for the exalted, for a… relationship to the absolute emotions."* Tate's exact wording is *"…are asserting man's desire for the exalted, for a… relationship to the absolute emotions."* The draft's version is a faithful, verbatim-accurate excerpt of the Tate fragment (it just drops the leading "are," which is fine since the draft's own lead-in supplies the verb: "American painters were …asserting man's desire…"). No correction required; substance and inner ellipsis match Tate. Optional: if maximal fidelity is wanted, the lead-in could read "were … asserting" so the quoted word starts cleanly — but the current form is accurate as quoted.

**NICE-3 — "cadmium red" is a critical descriptor, not a MoMA-documented pigment.**
The annotations and prose say the red is "close to a cadmium red." The draft already hedges with "close to / near," which is correct — the cadmium-red identification comes from Smarthistory/critical description, not a MoMA materials record. The hedge keeps it honest; no change needed. (Independent search lists the five zip colors as light-red/white/maroon/orange/tan, consistent with the field reading as a cadmium-family red.) Flagging only so the hedge is never dropped to a bare "cadmium red" assertion in a later edit.

---

## Sourcing caveat (carried from fact pack, still true)

moma.org returns HTTP 403 to direct fetch (confirmed again this pass). All MoMA catalogue facts (medium, 242.2 × 541.7 / 7 ft 11⅜ × 17 ft 9¼, credit line, accession 240.1969, the Betty Parsons notice, the title translation) were corroborated via (a) MoMA's own search-result snippet, (b) Wikipedia's MoMA-sourced record, and (c) Art Blart's verbatim reproduction of the MoMA gallery label — which agree with each other. No claim rests on a single unconfirmed source.

**Bottom line:** PASS. Ship as drafted. No blockers, no required fixes.
