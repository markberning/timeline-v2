# FACT-CHECK + LEGEND GATE — Magritte, *The Treachery of Images* (1929), LACMA

**Gate:** fact / legend (web-verified) · **Work:** `treachery` · **Verdict:** PASS WITH FIXES
**Date:** 2026-06-24 · **Scope:** every load-bearing claim in `work-treachery-draft.md` (PART A const + PART B prose, all five sections, every caption/annotation/stat/provenance/lineage surface) cross-checked against fact pack + live web.

---

## VERDICT

**PASS WITH FIXES.** No [BLOCKER]. The spine is solid and well-sourced: caption text,
medium, dimensions, accession, credit line, provenance chain, Foucault dates, the
Torczyner quote, the 1929-vs-variants guard, and rights all check out against LACMA's
own record and corroborating sources. **One real factual error** in BOTH the draft and
the fact pack: the *L'air et la chanson* variant is dated **1964** by the holding museum
(Art Institute of Chicago), not "1948–1952." That's a [FIX] (one parenthetical line, in
a "later cousin" aside, not the canonical-work claim). One [FIX] internal-consistency
nit on `heroAspect`. The rest are [NICE].

---

## VERIFIED (load-bearing claims that check out)

| Claim | Draft value | Verified | Source |
|---|---|---|---|
| English title | The Treachery of Images (This Is Not a Pipe) | ✓ exact | LACMA object 31931 |
| French title | La trahison des images (Ceci n'est pas une pipe) | ✓ exact | LACMA |
| Painted caption | "Ceci n'est pas une pipe" / "This is not a pipe" | ✓ exact, apostrophe in n'est, sentence-cap Ceci, closing period | LACMA / painting |
| Artist / dates | René Magritte (Belgian, 1898–1967) | ✓ | LACMA |
| Date | 1929 | ✓ | LACMA, Britannica, Wikipedia |
| Medium | Oil on canvas | ✓ (not print/drawing) | LACMA |
| Dimensions (in) | 23 3/4 × 31 15/16 in → "1 ft 11 3/4 in × 2 ft 7 15/16 in" | ✓ math correct; H 23¾, W 31¹⁵⁄₁₆ | LACMA |
| Dimensions (cm) | 60.3 × 81.1 cm (refuses stale 63.5 × 93.98) | ✓ LACMA gives ~60.3 × 81.1 cm; stale figure correctly refused | LACMA |
| Location | LACMA (BCAM 3rd Floor, Modern Art) | ✓ | LACMA |
| Credit line | "Purchased with funds provided by the Mr. and Mrs. William Preston Harrison Collection" | ✓ verbatim | LACMA |
| Accession | 78.7 | ✓ | LACMA |
| Acquired | 1978 | ✓ | LACMA / Sotheby's PB 17 May 1978 |
| Provenance: Galerie Le Centaure (Brussels) | ✓ | ✓ | provenance record |
| Provenance: Mesens 1932 | ✓ | ✓ (year confirmed) | provenance record |
| Provenance: Copley 1957 | ✓ William (1919–1996) & Noma (1916–2006) | ✓ all confirmed | provenance record |
| Provenance: Sotheby's Parke-Bernet, NY, 17 May 1978 | (not in prose; fact pack only) | ✓ | provenance record |
| Foucault essay 1968 | ✓ (journal) | ✓ *Les Cahiers du chemin* no. 2, 15 Jan 1968, pp. 79–105 | multiple |
| Foucault book 1973 | ✓ | ✓ Fata Morgana, Montpellier, 1973 | multiple |
| Foucault trans. Harkness *This Is Not a Pipe* | ✓ (no date asserted in prose) | ✓ UC Press 1983 | multiple |
| *Les mots et les images* 1929, *La Révolution surréaliste* | ✓ | ✓ issue #12, Dec 1929 | multiple |
| *Les deux mystères* 1966 | ✓ | ✓ oil on canvas, 1966 | multiple |
| 1929 LACMA = canonical work, matches wired image | ✓ guarded in TrcAfterlife | ✓ MagrittePipe.jpg is the 1929 LACMA canvas; no conflation | Wikipedia/LACMA |
| rights pd-us (1929) | ✓ | ✓ pre-1931 US publication; Magritte d.1967 EU caveat noted, doesn't block US | fact pack §7 (standard rule) |
| Torczyner quote ("The famous pipe…") | ✓ verbatim | ✓ matches widely-cited English wording | Torczyner 1977 p.71 / Wikipedia |

---

## FINDINGS

### [FIX] 1 — *L'air et la chanson* is dated **1964**, not "1948–1952"
**Where:** PART A const comment (lines 38, 43–45), the DRAFT header note (line 14),
and PART B `TrcAfterlife` prose:
> "There is a later painting, from around **1948–1952**, sometimes titled *L'air et la chanson*…"

(Also in the fact pack §8.1 and §1 note — the error originates there and propagated.)

**Problem:** The Art Institute of Chicago, which holds *L'air et la chanson / The Tune
and Also the Words*, records it as **1964, gouache on paper, 36.2 × 54.8 cm** (Lindy and
Edwin Bergman Collection). No "1948–1952" oil version is corroborated by any museum
record; "1948–1952" appears to be an unsourced web figure. Magritte first did the pipe
in oil in 1929, then revisited it in gouache in 1964.

**Corrected text (prose, `TrcAfterlife`):**
> "There is a later version, a **1964** gouache sometimes titled *L'air et la chanson*
> ("The Tune and Also the Words," now at the Art Institute of Chicago), with the same
> line in it."

**Corrected text (const comment + draft header):** replace every "1948/52" and
"1948–1952" with **"1964"** (and "variant" → drop "oil," since the 1964 work is gouache).

**Severity rationale:** Real and verifiable factual error, but it sits in a "later
cousins" aside about a different work, not in any claim about the canonical 1929 LACMA
painting. The canonical-work guard itself is correct. Hence FIX, not BLOCKER.

---

### [FIX] 2 — `heroAspect: 1.43` contradicts the true W/H (~1.345) and the code's own comment
**Where:** PART A const, line 69:
> `heroAspect: 1.43, // 60.3 × 81.1 cm → W/H ≈ 1.34; framed landscape per the wired file`

**Problem:** Width/height = 81.1 / 60.3 = **1.345**, which the comment correctly states,
yet the value is set to **1.43**. Either the value is wrong or it's a deliberate
framed-with-mat ratio that the comment doesn't justify. As written it's internally
contradictory.

**Corrected text:** set `heroAspect: 1.34` (matches the bare-canvas ratio and the
comment), OR keep 1.43 only if it's measured off the actual wired image file including
frame and the comment is updated to say so. Default to **1.34**.

**Severity:** rendering/consistency, not a reader-facing prose fact → FIX (low).

---

### [NICE] 3 — Torczyner inner-quote punctuation variant
**Where:** `TrcMaking`, the block quote (line 177): `'This is a pipe,'` (comma **inside**
the inner single quotes). Wikipedia's transcription places the comma **outside**:
`'This is a pipe', I'd have been lying!`. The fact pack (§4) already flags that the
quote "circulates in minor variants" around exactly this punctuation. The draft's
American-style comma-inside is defensible and the wording is otherwise verbatim. No
change required; noting for completeness. Keep attribution to Torczyner (1977) p.71
without over-specifying occasion — draft does this correctly.

### [NICE] 4 — Mesens place "Brussels" vs "London"
**Where:** const provenance (line 86) and `TrcAfterlife` give Mesens in "Brussels." One
provenance summary lists Mesens (1903–1971) "in London" at the 1932 sale (he was based
in London for much of his dealing life). The draft's "Brussels" is reasonable for the
1932 transfer context and the painting's Brussels origin, and the draft hedges by
calling him "a Belgian Surrealist." Not load-bearing; either is defensible. Optional:
soften to "the Belgian Surrealist E. L. T. Mesens" without pinning a city, or note
London. NICE.

### [NICE] 5 — $115,000 figure correctly omitted
The ~$115,000 1978 hammer price surfaces in secondary press (Artnet) but not LACMA's
record. Draft correctly refuses to print it and says so in-prose. Good — no change.

### [NICE] 6 — Foucault "essay 1967" minority claim
Fact pack flags a stray "1967" date for the essay. The draft correctly uses **1968**
(journal) / **1973** (book) and never says 1967. Verified 1968 is right (the 1967 date
is the year of Magritte's death / Foucault writing it, not publication). No change.

---

## NOTES FOR COORDINATOR
- The single substantive correction (FIX 1, the 1964 date) must also be pushed back into
  the **fact pack** §1 note and §8.1, since that's where "1948/1952" originated — or the
  error will recur on the next author pass.
- Everything else in the draft's "FACT HANDLING" preamble is accurate and well-guarded:
  the stale-dimension refusal, the canonical-work guard, the no-price provenance, the
  Foucault two-date handling, and the pd-us rationale all hold up.

**3-line summary:**
PASS WITH FIXES — no blockers; caption, medium, dims (60.3×81.1 cm / 23¾×31¹⁵⁄₁₆ in), acc. 78.7, credit line, provenance (Le Centaure→Mesens 1932→Copley 1957→Sotheby's 1978→LACMA), Foucault 1968/1973, and the Torczyner quote all web-verified against LACMA's own record + corroborators; the 1929 LACMA canvas is correctly guarded as canonical and matches the wired image.
One real [FIX]: the *L'air et la chanson* variant is **1964** (gouache, Art Institute of Chicago), not the "1948–1952" stated in both draft and fact pack — correct the aside and push the fix back into the fact pack.
One minor [FIX]: `heroAspect: 1.43` contradicts the true W/H ≈ 1.34 (and its own code comment) → set to 1.34; rest are [NICE] (Torczyner comma variant, Mesens city, omitted price — all already handled well).
