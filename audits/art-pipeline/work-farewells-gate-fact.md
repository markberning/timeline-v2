# FACT-CHECK + LEGEND gate — Boccioni, *States of Mind: The Farewells* (1911, MoMA)

Gate run against `work-farewells-draft.md` + `work-farewells-factpack.md` + live web
(MoMA, Wikipedia, Italian Art Society, Met, italianfuturism.org, Artchive, et al.,
June 2026). Every concrete claim verified. Severity tags: **[BLOCKER]** (wrong / ships
a falsehood), **[FIX]** (imprecise or under/over-claimed; correct before ship),
**[NICE]** (optional polish, not load-bearing).

**Headline: the draft is clean on all six watch-items.** The two-version handling,
the 6943 hedge, the 1912 dating of "lines of force," the *Those Who Go* quote
attribution, the imperial-landscape dims, and the Futurism/Fascism honesty guardrail
are all handled correctly. No BLOCKERS. Findings below are FIX/NICE refinements.

---

## The six instructed watch-items — verdicts

| # | Watch-item | Verdict |
|---|---|---|
| 1 | MoMA = SECOND (post-Paris Cubist) version; first Divisionist version in Milan; acc. 64.1979, Gift of Nelson A. Rockefeller 1979 | **PASS** — handled correctly throughout |
| 2 | Locomotive 6943 hedged, not over-claimed | **PASS** — hedged ("by the usual reading"); arguably slightly over-hedged (see NICE-1) |
| 3 | "Lines of force" dated ~Feb 1912 Paris, NOT Oct/1911 | **PASS** — draft says "the following year, in 1912" and explicitly "just after these pictures" |
| 4 | "loneliness, anguish, dazed confusion" = *Those Who Go*, not *The Farewells* | **PASS** — quote not used at all; correctly kept off *Farewells* |
| 5 | Dims 70.5×96.2 cm → imperial, landscape | **PASS** — `2 ft 3¾ in × 3 ft 1⅞ in`, `heroAspect 1.36`, landscape; see FIX-3 for one rounding note |
| 6 | Futurism war/Fascism honesty with Boccioni-d.1916 guardrail | **PASS** — present and proportionate; one date refinement, FIX-2 |

---

## [FIX] findings

### [FIX-1] Provenance: Marinetti acquisition dated "from 1911" — MoMA says "from at least 1912"

**Exact text (const, provenance[1]):**
> `{ year: 'from 1911', who: 'Filippo Tommaso Marinetti', ... note: 'The poet who founded Futurism acquired the three panels directly from Boccioni. No price is recorded.', price: null }`

and prose (FarAfterlife):
> "The three panels went straight from Boccioni to **Filippo Tommaso Marinetti** ... The founder of the movement bought the movement's masterpiece of feeling directly from the painter."

**Issue:** The draft pins Marinetti's ownership start to **1911**. MoMA's own
provenance line (surfaced via the MoMA record / search) reads that Marinetti
owned it **"from at least 1912 until his death in 1944."** The fact pack itself
flagged this as uncertain ("from 1911(?)"). The triptych debuted publicly at the
Bernheim-Jeune Paris show in **Feb 1912**, which is consistent with a 1912 (not
1911) acquisition date. The "directly from the artist / Marinetti was first
owner" spine IS solid; only the **year** is over-precise.

**Correction:** Change the const `year` to `'from 1912'` (or `'by 1912'`), and
hedge the prose to not assert a 1911 hand-off — e.g. keep "went straight from
Boccioni to Marinetti" (direction is fine) but drop any implication it happened
in 1911. "From at least 1912" is the museum's wording.

**Source:** MoMA provenance (works/78648, works/37282), surfaced verbatim "in the
collection of Filippo Tommaso Marinetti ... who owned it in Milan and Rome from at
least 1912 until his death in 1944." https://www.moma.org/collection/works/78648

---

### [FIX-2] Marinetti and Fascism dated "1919" — defensible but worth tightening

**Exact text (FarFuturism):**
> "Marinetti would later, in **1919**, help found the Italian **Fascist** movement"

**Issue:** Marinetti co-authored the *Fasci italiani di combattimento* (the founding
of the Fascist movement) in March **1919** — so "1919" is correct for the *movement*.
The draft is careful to say "movement" not "party" and to separate it from Fascism
"taking power" (1922). This is accurate. **No change required for correctness.**
Flagging only because "help found the Italian Fascist movement" could be read as
the 1921 Partito Nazionale Fascista; the draft's 1919 + "movement" wording is the
right one. Leave as-is, or optionally add "(the Fasci di Combattimento)" for
precision.

**Source:** standard Marinetti biography; Smithsonian "Futurism ... despite its dark
side." https://www.smithsonianmag.com/arts-culture/futurism-is-still-influential-despite-its-dark-side-74098638/

**Verdict:** downgrade to NICE — not an error, just an optional clarifier.

---

### [FIX-3] Imperial width: MoMA prints "37⅜ in", draft uses "3 ft 1⅞ in" (= 37⅞ in)

**Exact text:** `dimensions: '2 ft 3 3/4 in × 3 ft 1 7/8 in'` and stat chip `'2′3¾″ × 3′1⅞″'`.

**Issue / resolution:** The cm figure is **96.2 cm** wide, consistent across every
source. 96.2 cm ÷ 2.54 = **37.87 in ≈ 37⅞ in = 3 ft 1⅞ in** — so the draft's
conversion is **arithmetically correct from the cm**. However, MoMA's own label
prints the imperial as **27¾ × 37⅜ in** (note: 37**⅜**, not 37⅞), which back-converts
to ~94.9 cm — a MoMA rounding quirk, not the canonical size. Height is unambiguous:
27¾ in = 2 ft 3¾ in ✓ (matches MoMA and the cm).

**Recommendation:** The draft's value is the better one (faithful to the canonical
96.2 cm, per the house rule of converting museum cm at authoring time). **Keep
`3 ft 1⅞ in`.** This is logged only so the coordinator isn't surprised that MoMA's
printed inch figure differs — it is MoMA's own rounding, not a draft error.

**Source:** Wikidata Q3230384 / Commons (70.5 × 96.2 cm); MoMA label (27¾ × 37⅜ in).
https://www.wikidata.org/wiki/Q3230384 · https://www.moma.org/collection/works/78648

**Verdict:** NICE / informational — no change needed.

---

## [NICE] findings

### [NICE-1] The 6943 hedge may be slightly heavier than the sourcing warrants

**Exact text (FarLooking / annotation 2):**
> "a stencilled number, read by the usual account as 6943. (The digits are small and
> worked into the paint, so that reading is the standard one rather than something you
> can crisply count off a photograph.)"

The number **6943** is stated plainly and consistently by multiple independent
sources (Artchive, Italian Art Society, the standard "tumultuous vortex ... the only
element of calm, the railway engine's number" description). The instruction was to
**hedge, not over-claim** — the draft satisfies that. If anything the double-hedge
("by the usual account" + the parenthetical) is marginally more cautious than needed,
but caution on a literal numeral is exactly the right failure direction. **Keep as-is;
no action.** Source: https://www.artchive.com/artwork/states-of-mind-the-farewells-umberto-boccioni-1911/

### [NICE-2] First-version museum CAN now be named: GAM Milan

**Exact text:** the draft repeatedly says the first version "stayed behind **in Milan**
... (Sources disagree on exactly which Milan museum, so we will leave it at the city.)"

The Italian Art Society / Met essay material is explicit: the first **Divisionist**
oil triptych is in the **Civica Galleria d'Arte Moderna (GAM), Milan** ("...are in
the Divisionist style and are in the collection of the Civica Galleria d'Arte Moderna
in Milan"). The Museo del Novecento alternative appears to be a conflation. The draft's
"leave it at the city" is **safe and not wrong**, but the museum is now confirmable as
**GAM, Milan** if the coordinator wants to tighten it. Optional upgrade, not a fix.

**Source:** Met essay / Italian Art Society material via search: "...in the Divisionist
style and are in the collection of the Civica Galleria d'Arte Moderna in Milan."
https://www.metmuseum.org/essays/umberto-boccioni-1882-1916

### [NICE-3] "first Futurist exhibition" date is precisely Feb 5, 1912

The draft's "1912 Paris exhibition" for the lines-of-force catalogue is correct. For
the record, the show opened at Galerie Bernheim-Jeune on **5 February 1912** with
Marinetti's preface/manifesto — fully supporting the draft's "the following year, in
1912" framing and its point that the term arrived *after* these pictures were painted.
No change. Source: https://www.italianfuturism.org/100-years-ago-today-futurist-exhibition-in-paris/

---

## Confirmed-correct (spot list — verified, no action)

- Boccioni 1882–1916, age 28 in 1911, died at 33 in 1916 after a fall from a horse in
  WWI military training. ✓ (Wikipedia, Met)
- Painted the triptych **twice in 1911**: first = Divisionist (pre-Paris); second =
  Cubist-inflected (post-Paris). MoMA holds the **second**. ✓ (MoMA, Met, Italian Art
  Society — all explicit)
- The MoMA **drawings/charcoal studies** are a separate thing from the second oil
  version — the draft correctly never conflates them; hero is the oil. ✓ (coordinator
  still owes the load-check that `boccioniStatesFarewells` is the OIL, per fact-pack
  CAUTION #2 — not a gate-1 prose issue, just re-flagging)
- Paris trip with Carrà and Russolo, urged/guided by Severini; month hedged to
  "autumn / late 1911" (sources split Oct/Nov). ✓
- Triptych panel titles + Italian (Gli addii / Quelli che vanno / Quelli che restano)
  and per-panel line geometry (curve / oblique / vertical). ✓ (Italian Art Society)
- *The Farewells* = the embrace/chaos panel; the embrace fused into the vortex; the
  number is the still point. ✓
- Medium oil on canvas; MoMA; acc. **64.1979**; **Gift of Nelson A. Rockefeller, 1979**;
  pd-us. ✓ (MoMA, Wikidata, Commons)
- Provenance spine Boccioni → Marinetti → widow **Benedetta (Cappa) Marinetti** (after
  Marinetti's 1944 death) → **Rockefeller (acquired Oct 1949)** → MoMA gift 1979. ✓ The
  widow's name and the Oct-1949 Rockefeller acquisition are now CONFIRMED by MoMA's
  provenance line (the fact pack had hedged both as DISPUTED — they check out). The
  draft's hedging of "~1949" / "secondary source" is now over-cautious but harmless;
  may be firmed up. (MoMA works/78648)
- No sale prices recorded; all left null. ✓ (correct — do-not-invent honored)
- Futurism launched **1909** by Marinetti; manifesto on the front page of a Paris
  newspaper (*Le Figaro*, 20 Feb 1909); glorified war as "the world's only hygiene."
  ✓ All accurate.
- Divisionism described as small separate strokes, cousin of Seurat's method. ✓
- Cubism = Picasso & Braque, faceted planes / multiple viewpoints. ✓

---

## Two carry-forward notes for the coordinator (not gate-1 prose errors)

1. **VERIFY-AT-IMAGE still owed** (gate's image pass, not this text pass): the six
   `where` placement phrases (6943 digits legible; embrace center-low; engine
   center-right; poles/wires vs an "oil tower"/signal upright per L'Art en Tête;
   faceting) must be eyeballed against the born-verified canvas before the look-closer
   pointers lock. The draft already dropped the unconfirmed "green" color claim and
   hedged the poles-vs-tower reading — both correct calls.
2. **Hero load-check:** confirm `ART_IMG.boccioniStatesFarewells` resolves to the
   **oil painting** (MoMA v2), not a *Studies for States of Mind* charcoal, at
   integration (fact-pack CAUTION #2).

---

## Bottom line

**No BLOCKERS. Ship after FIX-1** (Marinetti "from 1911" → "from at least 1912").
FIX-2/FIX-3 are downgraded to NICE (both already accurate). All six instructed
watch-items pass. The draft's hedging discipline is, if anything, slightly
conservative — which is the correct direction. The provenance widow-name and 1949
date the fact pack flagged as DISPUTED both verified clean; the only genuine
correction is the Marinetti acquisition year.
