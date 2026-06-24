# GATE — COMPREHENSIVENESS + FRAMING/FAIRNESS

**Work:** Leonora Carrington, *Self-Portrait (Inn of the Dawn Horse)*, c.1937–38 (work id `carrington-self`)
**Gate role:** comprehensiveness (essential facets) + framing/fairness (gender agency, soft attribution, genius-myth, proportion)
**Inputs:** `work-carrington-self-draft.md`, `work-carrington-self-factpack.md` + targeted web verification.

---

## VERDICT: **PASS** (no BLOCKERs)

The draft is comprehensive on every essential facet and is, frankly, a model of the fairness this gate exists to protect. Carrington is the agent of her own work throughout; the Ernst relationship is factual but proportionate; the animal symbolism is softly attributed everywhere it appears (a dedicated "A reading, held at arm's length" beat plus per-annotation hedges); there is no genius-myth inflation. Findings below are all **[FIX]** (small, optional-leaning) or **[NICE]**. None block the ship.

Per the brief, I did **not** touch the hair color: the draft's "dark hair" is correct (the FACT gate web-verified it; the fact pack's "red" is the unsourced reading), and I make no recommendation to change it.

---

## 1. COMPREHENSIVENESS

Essential facets checklist — all **present**:

- **Carrington as a woman Surrealist painting her own dream-symbolism** — covered, and it is the spine of the whole read (`break`, `looking`'s "A reading, held at arm's length").
- **Animal-kin imagery** (hyena-self, the two horses) — covered in `making`, `looking`, and the annotations.
- **Refusal of the muse role** — covered as the key statement (`afterlife`, the Chadwick quote) and reinforced in `break`.
- **Path Britain → Paris → later Mexico** — covered (`arrival` London/Paris; `afterlife` Spain → Mexico 1942).
- **The influence / why she matters** — covered as legacy via the `lineage.children` ("Mexican Surrealism," "Women Surrealists as authors," "The female dream-self in paint") and the closing of `afterlife`.

No MAJOR facet is missing.

### [FIX] The "influence" facet is asserted only in lineage tags, never said in prose
The reader is told in the `break` that this *was* a break, but the prose never lands the downstream "and this is why she is now read as a founding figure of women's Surrealism / a feminist touchstone" — the influence facet lives only in the `lineage.children` chips. Verified frame for this exists: Carrington is widely described as having "feminized Surrealism" and as the now-canonical anti-muse (Chadwick's *The Militant Muse* takes this very quote as its through-line; the 2022 Venice Biennale "The Milk of Dreams" was named after her). One sentence in `afterlife` (after the Mexico move) would close the loop. Suggested optional add to the "From the dream-room to Mexico" paragraph:

> "The painting itself has had a long second life: as the muse-refusal it makes in paint, it has become a touchstone for the rewriting of Surrealism's story to put its women back behind the easel, not just inside the frame."

Keep it soft and uninflated (no "she single-handedly…"); the point is to state the influence the lineage chips already imply.

### [NICE] Possible exhibition-history detail — do NOT add without firmer sourcing
One secondary source (andelman.com) claims the canvas hung in the 1938 *Exposition Internationale du Surréalisme* in Paris and was seen by ~6,000 people in the first week. This would be a strong "she was a participant from the start" data point — but Wikipedia's exhibition history for this specific painting starts at **MoMA, December 1942**, and does not corroborate the 1938 showing. **Treat as unverified; do not add.** Flagging only so a later pass doesn't "discover" it and bolt it on unsourced.

---

## 2. FRAMING / FAIRNESS

### Gender / agency — **PASS, strong**
Carrington is the agent of her own work end to end. `arrival` pre-empts the exact failure mode this gate guards against, in the draft's own words: "the easy version of this story makes Ernst the headline: Carrington did not arrive as anyone's pupil or anyone's muse. She arrived as an artist." Ernst appears only where load-bearing (her entry into Surrealism; the canvas's physical path to New York) and is figure #4, tagged "Lover · carried it to New York" — not "the master." Proportionate and correct.

#### [FIX] One figure-role label slightly undersells her agency relative to the prose
`figures[0]` for Carrington reads `role: 'The painter, age ~20'`. Fine, but in a card where Ernst is "Lover · carried it to New York," consider tightening hers to foreground authorship, e.g. `role: 'The painter — age ~20, her own self-portrait'`. Minor; the prose already does this work. Optional.

### Soft attribution of the symbolism — **PASS, exemplary**
This is handled better than most works in the corpus. Every symbolic reading carries an explicit "this is interpretation, not artist-stated" hedge:
- `looking` has a whole beat titled "A reading, held at arm's length" that says the decode "is *interpretation*, drawn from her biography and her fiction, not a key Carrington handed down. She left no statement explaining the symbols of this canvas."
- The hyena annotation: "That reading is interpretation, well attested and reasonable, not a meaning Carrington stated about this canvas."
- The `afterlife` muse-quote beat correctly flags that the quote "is a general statement of her stance, not a sentence she ever said about *this* canvas."

No over-pinning ("the hyena *means* X"). The const header comment also encodes the rule. Nothing to fix here.

#### [NICE] One phrase edges toward asserting symbolism as fact
In `figures`, the role labels read flatly: "The female hyena — Her animal-kin self" and "The white horse — Freedom, out the window." In the chip UI these are terse and read as stated fact, slightly out of step with the carefully-hedged prose. Not worth a blocker (chips are read as shorthand), but if a future pass wants total consistency, "Her animal-kin self (the scholars' reading)" or similar would match the prose register. Leave as-is is acceptable.

### Genius-myth — **PASS**
The draft notes she was "about twenty" and that the picture is "assured," "a control that belies her age" — admiring but earned, and it explicitly hedges the "first truly Surrealist painting" claim as "fair as a critical judgment," exactly per the fact pack's apocrypha note. No lone-genius / divine-talent inflation.

### Proportion / over-pinning — **PASS**
Symbolism is offered, not decoded to death; Ernst is in proportion; the Spain breakdown and *Down Below* are mentioned without melodrama. Balanced.

### Hair color (per brief)
Confirmed handled: draft says "dark hair" throughout; this is correct per the FACT gate's web verification (painting shows dark). The fact pack's "red mane" is the unsourced variant. **No change recommended** — flagging only to close the sibling gate's conflict note.

---

## SUMMARY OF FINDINGS

| # | Class | Facet | Action |
|---|---|---|---|
| 1 | [FIX] | Comprehensiveness — influence stated only in lineage chips | Add one soft "second life / touchstone" sentence to `afterlife` |
| 2 | [FIX] | Fairness — Carrington figure-role label | Optionally foreground authorship vs. Ernst's label |
| 3 | [NICE] | Exhibition history (1938 Paris) | Do NOT add — unverified by Wikipedia; flagged so it isn't bolted on later |
| 4 | [NICE] | Figure chips state symbolism flatly | Optional hedge for chip/prose consistency |
| — | NOTE | Hair color | "dark" is correct; no change |

No [BLOCKER]. The work ships once the [FIX] items are weighed (neither is mandatory; #1 is the most worthwhile).
