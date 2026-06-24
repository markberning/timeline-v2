# FACT-CHECK + LEGEND GATE — Yves Tanguy, *Indefinite Divisibility (Divisibilité indéfinie)* (1942) · `tanguy-divis`

- **Gate:** Fact / accuracy / legend (rights, medium, dims, institution, provenance, quote, non-referential forms)
- **Method:** WEB-verified against the Buffalo AKG object record, The Art Story, Wikipedia/Britannica/Tate, and quote aggregators. Draft + factpack read; no edits made; no commit.
- **Date:** 2026-06-24

## VERDICT: **PASS** (no BLOCKER, no FIX) — 2 NICE notes only

Every load-bearing claim in the draft (PART A const + PART B prose) web-verifies against the AKG primary record and corroborating sources. The four "special care" axes the brief named are all handled correctly:

- **Rights `in-copyright` is CORRECT.** Tanguy d. 1955, work 1942 → under US copyright; AKG carries the active statement "© Estate of Yves Tanguy / Artists Rights Society (ARS), New York." Draft sets `rights: 'in-copyright'`, shows hero small with a fair-use heroCredit, and does NOT claim pd-us. The afterlife chapter explicitly contrasts it with the public-domain works in the chain. **Correct — would have flagged a pd-us mark; none present.**
- **The "develops before my eyes" quote is carefully attributed.** Verbatim text confirmed across aggregators (AZQuotes, BrainyQuote, QuoteFancy) and tied to Tanguy by The Art Story; the original period publication is NOT pinned anywhere online. The draft quotes it verbatim, attributes it to Tanguy, and names the source-uncertainty in prose ("the period source it came from is not pinned down… given here as a documented statement of his method… rather than tied to a specific magazine or date"). **It does NOT assert an unverifiable source. Correct.**
- **Invented forms stay INVENTED / non-referential.** AKG: "Without employing direct references to the real world… strange, indeterminate forms." The draft renders "totem / machine / marble-run" strictly as viewer ANALOGIES ("reads like," "those are viewers' analogies, not the thing itself," "Resist the urge to name it"), never as identifications. Notably, The Art Story DOES name specific objects ("a pedal, a propeller, and a clamp," "bowls collecting water") — the draft correctly declines to adopt those literal readings. **Correct.**
- **Title / date.** *Divisibilité indéfinie* = *Indefinite Divisibility*, 1942, both confirmed verbatim from the AKG record. No "Infinite/Endless" slippage. **Correct.**

### Catalog facts — all verified against AKG
| Claim | Draft | AKG record | Status |
|---|---|---|---|
| Medium | Oil on canvas | Oil on canvas | ✓ |
| Dimensions (support) | 101.6 × 88.9 cm → 3 ft 4 in × 2 ft 11 in (40 × 35 in) | 40 × 35 in (101.6 × **89** cm) | ✓ (see NICE-1) |
| Orientation | upright/portrait, 101.6 cm = height, 88.9 = width | 40 in (H) × 35 in (W) → taller than wide | ✓ |
| Institution | Buffalo AKG (formerly Albright-Knox; Albright Art Gallery 1945) | confirmed; renamed/reopened 2023 | ✓ |
| Credit line | Room of Contemporary Art Fund, 1945 | Room of Contemporary Art Fund, 1945 | ✓ |
| Accession | RCA1945:2 | RCA1945:2 | ✓ |
| Provenance | Pierre Matisse Gallery → Albright Art Gallery, June 22 1945, via RCA Fund | sale to Albright 22 June 1945 from Pierre Matisse Gallery confirmed | ✓ |

### Biography / lineage — all verified
- Tanguy 1900–1955, self-taught, saw a de Chirico in a Paris window **1923** and resolved to paint — ✓ (The Art Story; the specific painting was *Le Cerveau de l'enfant / The Child's Brain*, which the draft wisely does not name, avoiding an over-claim).
- de Chirico **1888–1978**, the empty-piazza / deep-shadow influence — ✓ (Wikipedia/Tate: 10 Jul 1888 – 20 Nov 1978).
- Emigrated to US **1939**; married Kay Sage (**1898–1963**) in **Reno, Nevada, 1940** (Aug 17, 1940) — ✓; settled in Woodbury, Connecticut — ✓.
- Breton/Surrealism founded 1924, two-channel (automatist vs. illusionistic) framing, Dalí/Magritte vs. Miró/Masson axis — ✓, standard art-historical framing.
- Museum descriptive language ("space appears infinite, like an endless desert," "dense and oppressive," "strong, warming light," "a mysterious structure dominates the foreground and casts a dark shadow") — all paraphrased faithfully from the AKG record; the draft attributes these to "the museum." ✓

## NICE (optional, non-blocking)

- **NICE-1 — Dimensions cm rounding.** AKG's object page literally prints "101.6 × **89** cm" alongside 40 × 35 in. The draft uses the unrounded **88.9** cm (35 in = 88.9 cm exactly), which is mathematically correct and the value third-party catalogs use. This is the factpack's own §8 guidance and is fine; only flagging that the museum's own page shows the rounded "89." No change needed. (The user-facing copy never shows cm in the body anyway — it leads with ft/in per house rule, with the parenthetical "101.6 by 88.9 centimeters." Consistent.)
- **NICE-2 — de Chirico nationality descriptor.** Draft calls de Chirico "the Italian painter." He was Greek-born (Volos) and Italian by nationality/career (founded *scuola metafisica* in Italy). "Italian" is the standard descriptor (Tate, Britannica) and is acceptable; "Italian (born in Greece)" would be marginally more precise but is not required.

## Notes for downstream gates
- `heroAspect: 0.85` is a deliberate brief value; true W/H ≈ 88.9/101.6 ≈ 0.875. Within tolerance, flagged in the draft comment. Not a fact issue.
- The Art Story's literal object-naming ("pedal, propeller, clamp," "bowls collecting water," "anthropomorphic shadow") is a documented third-party reading the draft correctly refuses to adopt — keep it that way through any revision; do not let later edits import those identifications.
