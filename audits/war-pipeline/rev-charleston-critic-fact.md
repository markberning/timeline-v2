# FACT-CHECK CRITIC — Siege of Charleston draft (rev-charleston)

*Critic pass 2026-06-12. Draft: `rev-charleston-draft.md` (read in full, 331 lines).
Pack: `rev-charleston-factpack.md` (read in full, 179 lines). 7 independent web
spot-checks run across 14 factual claims (listed at bottom). In-repo reuse images
noted. Fact ledger in the draft cross-checked against all prose surfaces.*

## VERDICT: **PASS-WITH-FIXES**

- **BLOCKER: 3** — (1) Washington's Yorktown quote uses "Charles Town" (two words)
  where the Founders Online original reads "Charlestown" (one word); (2) Woodford's
  march distance contradicts the Morristown origin ("500-mile" describes the
  Petersburg-to-Charleston leg only; the full Morristown march was ~800 miles);
  (3) Ewald paraphrase changes "charred arms and legs" to "charred limbs" and adds
  "even to a veteran" — an editorial interpolation not in the diary.
- POLISH: 4
- Quote audit: all 4 chained quotes checked; 3 byte-exact (Hinrichs, Moultrie meteors,
  Peebles); Washington Yorktown quote has the spelling discrepancy (B1); Ewald is a
  paraphrase-with-two-errors (B3).
- Author's HANDLE-WITH-CARE flags: all correctly enforced — "severest blow" dropped,
  Clinton boast paraphrased/dropped, "Tarleton's quarter"/"Bloody Ban" firewalled to
  the Waxhaws handoff, 5,466 framed "more than 5,000," six hulk names dropped,
  magazine explosion "perhaps two hundred," no surrender-ceremony or prison-hulk image
  invented.
- Blacklist: fully compliant — all 8 items absent from reader-facing surfaces.

---

## BLOCKERS

**B1 · Washington's Yorktown quote: "Charles Town" should be "Charlestown" (one word)**

> (S3 QUOTE, prose near line 251): "The same Honors will be granted to the
> Surrendering Army as were granted to the Garrison of Charles Town."
>
> (fact ledger, near line 321): "QUOTE Washington to Cornwallis, Oct 18, 1781,
> 'The same Honors will be granted to the Surrendering Army as were granted to
> the Garrison of Charles Town.' byte-exact (LOC/Founders) · HIGH (§7.6)"

**The error:** The Founders Online primary source text (founders.archives.gov/
documents/Washington/99-01-02-07192) uses the one-word spelling "Charlestown" —
not "Charles Town." The pack's §7.6 vouches this as "byte-exact (LOC/Founders)"
but has the spelling wrong; the draft faithfully copied the pack's error.

**Fix:** Change to "Charlestown" (one word) in both the QUOTE block and the fact
ledger entry. The rest of the quote is confirmed correct. Also note the pack error in
`rev-charleston-factpack.md` §7.6.

---

**B2 · "500-mile, 28-day march from Morristown" — distance wrong for the stated origin**

> (sides panel, near line 39): "Woodford's ~750 Virginians arrived April 7 after a
> forced march of hundreds of miles from Morristown"
>
> (S1 prose, near line 193): "some 750 Virginians under Brigadier General William
> Woodford (American), who marched in on April 7 after a brutal forced march of
> hundreds of miles from Morristown"
>
> (commander bio, near line 51): "led about 750 Continentals into Charleston on April 7
> after a roughly 500-mile, 28-day march from Morristown"
>
> (fact ledger, near line 278): "led ~750 Virginians in April 7 after a ~500-mile,
> 28-day march from Morristown"

**The error:** "500-mile" describes the Petersburg-to-Charleston leg of the march, not
the full Morristown-to-Charleston distance. The entire march from Morristown, NJ to
Charleston, SC is approximately 800 miles. The draft body text correctly says "hundreds
of miles from Morristown" (hedged, defensible); the commander bio and fact ledger give
the specific "~500-mile, 28-day" figure while naming Morristown as the origin, which
is contradictory. The pack (§3 bio) also states "~500-mile, 28-day march from
Morristown" — the draft inherited a pack error.

**Fix (two options — pick one consistently):**
- If emphasizing the full journey: "an ~800-mile, roughly 28-day march from
  Morristown" (or "a march of some 800 miles from Morristown over roughly 28 days").
- If the 500-mile / 28-day figures are the better-sourced pair: change the origin to
  "from Petersburg [Virginia]" and note that the men had marched down from Morristown
  earlier, arriving at Petersburg first.

Update the commander bio and fact ledger to match whichever fix is chosen. The sides
panel and S1 prose ("hundreds of miles from Morristown") are fine as hedged and need
no change. Also flag the pack error in `rev-charleston-factpack.md` §3.

---

**B3 · Ewald paraphrase: "charred limbs" for "charred arms and legs"; "even to a
veteran" is an interpolation not in the diary**

> (S3 prose, near line 239): "Captain Johann Ewald (British), a Hessian officer a
> hundred yards away, recorded charred limbs scattered in every direction, a deplorable
> sight even to a veteran."
>
> (fact ledger, near line 314): "Ewald (a hundred yds away) 'charred limbs scattered
> in every direction… a deplorable sight' PARAPHRASED-with-fragment"

**The error:** Per Ewald's diary (Tustin translation, Yale UP 1979, p. 239), cited in
the Journal of the American Revolution sourced article, the original text reads "charred
arms and legs scattered in every direction." The draft changes "arms and legs" to
"limbs" — a paraphrase substitution that crosses into slight misquotation when the
surrounding sentence presents it as a near-direct fragment. Additionally, the closing
editorial gloss "even to a veteran" does not appear in the Ewald text; it is an
authorial addition that attributes to Ewald a sentiment he did not express in that form.
The pack's §7.3 correctly renders it as "charred arms and legs scattered in every
direction… a deplorable sight" — the draft diverged from the pack here.

**Fix:** Restore to pack-specified form: "charred arms and legs scattered in every
direction, a deplorable sight." Drop "even to a veteran." The sentence should read:
"Captain Johann Ewald, a Hessian officer a hundred yards away, recorded charred arms
and legs scattered in every direction, a deplorable sight."

---

## POLISH

**P1 · "quarter of a mile" for bodies flung by the explosion — unverified in primary
sources**

> (S3 prose, near line 239): "Bodies were flung a quarter of a mile"
>
> (fact ledger, near line 314): matches

**Issue:** The pack (§5-explosion) includes "Bodies and parts were thrown a quarter-mile"
but this specific distance does not appear to be directly in any of the four named
eyewitness diaries (Ewald, Hinrichs, Peebles, Moultrie). Web research finds it in a
2025–26 South Carolina anniversary narrative. Moultrie's best-documented dramatic detail
is a corpse striking the steeple of the Independent Church — no distance stated. The
figure appears to have entered the pack untethered from a pinned primary source; the
pack itself labels the explosion HIGH on the event, but the quarter-mile figure is
not separately confidence-tagged.

**Fix:** Hedge or cut. Options: "Bodies were flung across the neighborhood"; or "one
body was reportedly thrown as far as the steeple of the Independent Church nearby" (the
steeple detail IS in the eyewitness chain per the pack's §5 footnote). If the quarter-
mile figure is in the print Ewald (p. 239) or Peebles, restore it with "by Ewald's
account" framing.

---

**P2 · Fact ledger: Moultrie described as "brigadier (soon major general)" — rank needs
a word of precision**

> (fact ledger, near line 276): "Lincoln's senior subordinate inside the lines;
> favored evacuation; 1802 Memoirs the key American eyewitness"
>
> (commander bio, near line 49): "In 1780 he was Lincoln's senior subordinate inside
> the lines…"

**Issue:** The pack (§3 bio) says "brigadier (soon major general)." The draft correctly
calls him a brigadier in the bio but the commander bio header says "Brig. (later Maj.)
Gen., American." That is fine for the bio. However, to be precise: Moultrie was
promoted to major general in October 1782, more than two years after Charleston — it
happened during his captivity/parole period. "Soon" in the pack may overstate the
timeline. The draft's "later Maj. Gen." is better and is pack-compliant; no change
required to the draft. This is a pack-level flag only.

**Finding:** No draft error; noting for the pack to correct the "soon" to "later" in
§3 bio to avoid confusing a future reviser.

---

**P3 · Locator 2 — Lenud's Ferry coordinates are ~4–5 miles off from the historical site**

> (Locator 2, near line 165): Lenud's Ferry, on the Santee (Tarleton again, May 6) |
> 33.240, -79.690

**Issue:** Web-verified coordinates for Lenud's Ferry (Jamestown vicinity, Berkeley
County, SC) are approximately 33.305°N, 79.675°W — about 4–5 miles north and slightly
east of the draft's figures. For a small-scale strategic locator this discrepancy is
probably at the edge of visible error, but the pack (§9) gives the same MED-confidence
"~33.24,-79.69" and the draft faithfully used it. At locator scale this is unlikely to
mislead; flagging in case the SVG renderer places a label visibly in the wrong county.

**Fix (optional at this scale):** Update to 33.305, -79.675. The river and town label
will look correct at any reasonable zoom for a strategic map.

---

**P4 · "a Turkish march, the nothing-tune that said nothing" — Moultrie attribution
correctly hedged in fact ledger but the prose presents it without attribution**

> (S3 prose, near line 235): "By Moultrie's account the drums were permitted only a
> Turkish march, the nothing-tune that said nothing."
>
> (fact ledger, near line 312): "Turkish march attributed to Moultrie's account
> (MED-HIGH)"

**Issue:** The prose correctly opens with "By Moultrie's account" — that is sufficient
attribution and the fact ledger is consistent. This is fully pack-compliant. No fix
required; noting as a PASS.

---

## QUOTE AUDIT (byte-exact against pack §7)

| Quote | Where in draft | Verdict |
|---|---|---|
| Hinrichs "Through a wilderness of deep sand…" | S1 QUOTE | PASS byte-exact (§7.2) |
| Moultrie "it was a glorious sight, to see them like meteors…stars were tumbling down…dreadful night!" | S2 QUOTE | PASS byte-exact (§7.1); "tumbling" web-confirmed |
| Ewald "charred limbs…deplorable sight" (paraphrase-fragment) | S3 prose | **BLOCKER B3** — "limbs" for "arms and legs"; "even to a veteran" interpolated |
| Peebles "a melancholy accident…Very Strange Management…" | S3 prose | PASS byte-exact (§7.4) |
| Washington to Cornwallis, Oct 18, 1781 | S3 QUOTE | **BLOCKER B1** — "Charles Town" should be "Charlestown" |

**Blacklisted items — all ABSENT from reader-facing surfaces:**

"Tarleton's quarter" / massacre ☑ (firewalled to Waxhaws handoff — prose stops at "ran
them down") · "Bloody Ban" / "the Butcher" ☑ · Adams "severest blow" (§7.9) ☑
(dropped entirely) · Clinton "few men in South Carolina" boast (§7.10) ☑ (dropped
entirely) · clean "5,466 soldiers" ☑ (always framed "more than 5,000 + regulars
range") · Sgt. Jasper / 1776 flag ☑ · Bataan superlative ☑ · "Long live Congress"
sword-confiscation ☑ (omitted entirely).

---

## HANDLE-WITH-CARE FLAG COMPLIANCE

All author-noted HANDLE-WITH-CARE flags correctly enforced:

- Captured total: never a clean 5,466; always "more than 5,000…about half of them
  regulars" with the 5,466 vs ~2,650 split glossed in the footnote ✅
- Magazine explosion: "perhaps two hundred" with "disputed" framing ✅
- Adams "severest blow": dropped entirely ✅
- Clinton's boast: dropped entirely ✅
- "Tarleton's quarter" / "Bloody Ban": Waxhaws handoff only; no massacre content on
  this page ✅
- Hulk ship names: dropped ✅
- Prison-hulk and surrender-ceremony images: not invented ✅
- Ferguson's threat: framed as reported speech via McIntosh's journal, not verbatim ✅
- Lincoln April 10 refusal: paraphrased ✅
- Turkish march: attributed to Moultrie ✅

---

## SURFACE COVERAGE (all checked against pack; no unlisted deviations)

Dossier stats/sides/casualties ✅ (strength arc correct — "~10,000 rising to
~12,800–14,000" present in sides panel; British ~100 k / ~few hundred w and American
~89 k / ~138 w pack-exact) · 7 commander bios ✅ (Lincoln/Moultrie/Gadsden/Woodford/
Clinton/Cornwallis/Tarleton — all from §3 bio material; no uninvented facts found
except B2 Woodford distance) · outcome ✅ · 3 section blurbs ✅ · both MEANWHILE
blocks in S1 (Savannah ✓) and S2 (the horses ✓) ✅ · MEANWHILE in S3 (Gadsden's
reckoning ✅) · S1/S2/S3 prose claim-by-claim ✅ except B2/B3/P1 above · all image
captions ✅ (Chappel "history painting" caveat ✓; 1774 date on Leitch engraving ✓;
Cornwallis eyeball-warning carried ✓; Gadsden flag as portrait-substitute with
search-at-build-time instruction ✓; Woodford imageless per pack ✓) · all 12 image
files identified (in-repo reuses noted with cp instruction) ✅.

---

## LOCATOR PLAUSIBILITY (all coordinates checked against pack §9)

Locator 1 (tactical): 8 dots — all within pack-specified coordinates ✓ (Charleston
32.776,-79.931 ✓; Hornwork ~32.788,-79.937 ✓; Fort Moultrie 32.760,-79.857 ✓; Drayton
Hall 32.870,-80.075 ✓; Simmons Island ~32.577,-80.170 ✓) · frame contains all dots ✓.

Locator 2 (strategic): 3 heavy dots — Charleston ✓; Monck's Corner 33.196,-80.013 ✓;
Lenud's Ferry 33.240,-79.690 (POLISH P3 — ~4–5 miles south of historical site) · river
confirmed as Santee ✓ · escape-road narrative geometry correct ✓.

Strategic inset: Savannah/Camden/Waxhaws coordinates checked against pack §9 — all
pack-exact ✓.

---

## WEB SPOT-CHECKS RUN (7 searches, 14 claims tested)

1. **Founders Online, Washington to Cornwallis Oct 18, 1781** — "Charlestown" (one
   word) in the primary text; rest of quote confirmed → **B1 confirmed**.
2. **American Battlefield Trust + Charleston Museum citing Moultrie Memoirs** —
   "stars were tumbling down" confirmed; no variant wording found → PASS.
3. **Wikipedia, William Woodford + Morristown march distance** — 500-mile figure
   describes Petersburg-to-Charleston leg; full Morristown-to-Charleston ~800 miles →
   **B2 confirmed**.
4. **Wikipedia, Lenud's Ferry** — on the Santee River ✓; coordinates ~33.305°N 79.675°W
   → river PASS; coordinate discrepancy → P3 flagged.
5. **Wikipedia + Emerging Revolutionary War, Christopher Gadsden** — ~10 months
   (42 weeks) at Castillo de San Marcos, St. Augustine ✓ → PASS.
6. **Journal of the American Revolution, May 15 explosion / Ewald diary** — "charred
   arms and legs scattered in every direction"; closing phrase "Never in my life…
   a more deplorable sight" (no "even to a veteran") → **B3 confirmed**; "quarter-mile"
   figure not found in any of the four named eyewitness diaries → P1 flagged.
7. **Wikipedia, Peebles diary / Siege of Charleston (1780)** — April 8 fleet passage
   under two hours ✓; Fort Moultrie surrendered May 7 ✓; Cornwallis east of Cooper
   ~2,300+ ✓; Tarleton Monck's Corner April 14 ✓; Lenud's Ferry May 6 ✓; June 3
   proclamation voiding paroles ✓ → all pack-consistent.

**Pack errors found (2, inherited by draft):** "Charles Town" spelling in the Yorktown
quote (B1 — pack §7.6) · "~500-mile, 28-day march from Morristown" distance/origin
contradiction (B2 — pack §3 bio).
