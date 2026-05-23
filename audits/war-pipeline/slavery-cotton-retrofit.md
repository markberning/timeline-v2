# Slavery & Cotton — Retrofit (2 comprehensiveness MUST-ADDs, 2026-05-23)

Author agent · source = `slavery-cotton-factpack-addendum.md` only · target =
`src/app/war-civil-war/off-the-battlefield/slavery-cotton/page.tsx`.
Two MUST-ADDs woven into the existing arc as paragraphs (no new sections), in the
file's exact backtick-template-literal block style, with the file's smart quotes.
SHOULD-CONSIDER items folded in cheaply where they fit (resistance clause →
MUST-ADD 1 paragraph; tiny planter class → MUST-ADD 2 paragraph). Northup/Eliza
scene, Hammond quotes, and the arc are untouched.

---

## MUST-ADD 1 — Northern (not just British) economic complicity

**INSERT POINT.** In the `'The boom'` section, immediately AFTER the existing
paragraph that begins:

> "The geography of all this wealth had a name: the Cotton Belt…"

(That is the last paragraph under `{ h: 'The boom' }`, the one ending "…about to
be cut off." Insert the new paragraph between it and the next heading
`{ h: 'The door closes, and the population grows anyway', eyebrow: 'Consequence' }`.)

**Block object to paste** (one new paragraph):

```js
      { p: `And before we follow that demand south, one thing the export figures quietly hide: the North was no horrified bystander to all this. The same cotton that fed Britain’s mills fed America’s own, and America’s mills were Northern. New England’s textile factories ran on Southern cotton — by 1860 they consumed something like two-thirds of all the cotton used inside the country, and Massachusetts alone spun roughly a third of the nation’s cotton thread. Northern banks, meanwhile, were knee-deep in the business: they financed plantations, brokered the crop, and routinely accepted enslaved human beings as collateral on loans — predecessor firms of banks still trading today held thousands of people as security against a planter’s debt. The cloth on a Boston merchant’s back and the ledgers in a New York counting-house were stitched out of the same forced labor as the bales on the New Orleans docks. This is why ending slavery would prove so wrenchingly hard even in the “free” states: it was not a distant Southern sin the North could simply disown. The whole country, North and South, had its hands in the same cotton.` },
```

---

## MUST-ADD 2 — The Slave Power / Three-Fifths political bridge

**INSERT POINT.** In the `'The richest thing in America'` section, immediately
AFTER the existing paragraph that begins:

> "Sit with what that meant, because it explains everything…"

(That is the paragraph ending "That is *why the South would fight.*" — the last
block under `{ h: 'The richest thing in America' }`. Insert the two new
paragraphs between it and the next heading `{ h: '“Cotton is king”' }`.)

**Block objects to paste** (two new paragraphs):

```js
      { p: `That wealth bought something even harder to give up than money: power. Here is the part that turns the South’s economic certainty into a political one. When the Constitution was written, the slave states won a bargain known as the Three-Fifths Compromise — enslaved people, who could not vote and were counted as property in every other respect, were nonetheless counted as three-fifths of a person when it came time to apportion seats in the House of Representatives. The effect was a kind of phantom electorate: the planter class got extra representation in Congress, and extra weight in the Electoral College, on the strength of the very human beings it owned. In the first Congress that handed the slave states roughly a dozen or so extra House seats they would never otherwise have held, and that structural thumb on the scale never let up.` },
      { p: `For decades it tilted the whole federal government South. Enslavers held the presidency for the great bulk of the country’s first seventy years — most of the early presidents owned human beings — and they dominated the Supreme Court and the key committees of Congress besides. Northerners eventually gave this bloc a name: the “Slave Power,” a Southern minority that ran the national government as if slavery were not a local custom but a permanent, federally protected interest of the entire United States. (And it was a remarkably small minority doing the running — by 1860 only a sliver of white Southerners, on the order of one in a hundred, owned enough people to count as planters at all, yet that handful set the policy and told the region who it was.) For most of the nation’s life that arrangement had simply been the way things worked. Which is exactly why, in 1860, an election the South could not control would feel less like an ordinary defeat and more like the loss of a country it had always assumed was its own.` },
```

> Note on the handoff: with MUST-ADD 2 in place, the closing section's line "the
> politics of it, the broken compromises, the road that ran from cotton wealth to
> open war" and the `meanwhile`/`'The Road to War'` card now land as a *payoff*
> of established political machinery rather than a fresh assertion. No edit to the
> closing blocks or the meanwhile card is required.

---

## Fact ledger

Every concrete claim in the two new blocks → addendum item, with `[VERIFY]`
flags carried forward. New material introduces no figure not present in the
addendum. Hedged language ("something like," "roughly," "on the order of," "a
dozen or so," "most of") is deliberate per the conservative-phrasing rule.

### MUST-ADD 1 — Northern complicity

| Claim (as written) | Source (addendum) | Verify? |
|---|---|---|
| New England mills consumed "something like two-thirds of all the cotton used inside the country" (1860) | MUST-ADD 1, bullet: ~67% of domestically-used U.S. cotton in 1860 | `[VERIFY]` — confirm the ~two-thirds figure and that the denominator is *domestically-used* cotton (not total crop). Phrased as "something like two-thirds" / "all the cotton used inside the country" to preserve that scope. |
| "Massachusetts alone spun roughly a third of the nation’s cotton thread" | MUST-ADD 1, bullet: MA ran ~30% of the nation's cotton spindles | `[VERIFY]` — confirm ~30%. Hedged to "roughly a third." "Spindles" rendered in lay terms as spinning thread; confirm the gloss is fair. |
| Northern banks financed plantations, brokered the crop, "accepted enslaved human beings as collateral on loans" | MUST-ADD 1, bullet on Northern bank financing + collateral | Not flagged for the general claim (well-supported: Murphy, *Banking on Slavery*; TIME 2024). |
| "predecessor firms of banks still trading today held thousands of people as security against a planter’s debt" | MUST-ADD 1, bullet: J.P. Morgan Chase lineage accepted ~13,000 enslaved people as collateral | `[VERIFY — keep general if the precise institution can't be pinned]`. Per the addendum's own instruction I kept this general: no bank named, "thousands" instead of "~13,000." Fact-checker may tighten to the named institution + count if pinned, or leave as is. |
| Closing takeaway: ending slavery "so wrenchingly hard even in the 'free' states… The whole country, North and South, had its hands in the same cotton." | MUST-ADD 1, "Takeaway sentence the section needs" | Interpretive synthesis of the addendum's required takeaway; no figure. |
| SHOULD-CONSIDER (resistance) | — | Not used in MUST-ADD 1 (no natural cheap fit here without disturbing the boom→trade beat). Carried to MUST-ADD 2 region instead — see below. Net: resistance clause ultimately NOT inserted; flagged as a deliberate omission, see "SHOULD-CONSIDER disposition." |

### MUST-ADD 2 — Slave Power / Three-Fifths

| Claim (as written) | Source (addendum) | Verify? |
|---|---|---|
| Three-Fifths Compromise: enslaved people "counted as three-fifths of a person… apportion seats in the House" | MUST-ADD 2, bullet: Three-Fifths Compromise (1787), House apportionment | Not flagged (settled constitutional fact). |
| Also gave "extra weight in the Electoral College" | MUST-ADD 2, bullet: "and proportional electoral-college weight" | Not flagged (follows from House apportionment). |
| "roughly a dozen or so extra House seats" in the first Congress | MUST-ADD 2, bullet: "roughly 14 extra House seats in the first Congress" | `[VERIFY seat figure]`. Hedged down to "a dozen or so" to stay conservative around the cited ~14. Fact-checker confirm exact figure + the "first Congress" framing. |
| Enslavers "held the presidency for the great bulk of the country’s first seventy years — most of the early presidents owned human beings" | MUST-ADD 2, bullet: 11 of the first 15 presidents were enslavers | `[VERIFY count]`. I avoided stating "11 of 15" and used "most of the early presidents" / "great bulk of the first seventy years" to hedge the contested count (enslaver-at-some-point vs. while-in-office differ across sources). Fact-checker may restore the precise count if confident. |
| "dominated the Supreme Court and the key committees of Congress" | MUST-ADD 2, bullet: dominated SCOTUS and key committees | Not flagged for the general claim (American Battlefield Trust). |
| "the 'Slave Power'" — Northern name for the bloc; slavery as nationally protected interest | MUST-ADD 2, bullet: "Slave Power" by 1840s–50s | Not flagged (well-attested term/concept). Date ("by the 1840s–50s") implied via "eventually," not asserted as a hard year. |
| 1860 election "feel less like an ordinary defeat and more like the loss of a country it had always assumed was its own" | MUST-ADD 2, bullet: "why Lincoln's 1860 election felt to the South like losing a system it had always controlled" | Interpretive bridge to the handoff; no figure. (Lincoln not named in-block — kept generic "an election the South could not control" since this is the causes phase and the next section names him.) |
| SHOULD-CONSIDER (tiny planter class): "only a sliver of white Southerners, on the order of one in a hundred, owned enough people to count as planters" | SHOULD-CONSIDER bullet: ~1.4% owned 20+ enslaved people in 1860 | `[VERIFY %]`. Hedged to "on the order of one in a hundred" / "a sliver" around the cited ~1.4% (20+ threshold). Confirm the threshold definition (20+ = "planter") and the percentage. |

### SHOULD-CONSIDER disposition
- **Tiny planter class** — INCLUDED (parenthetical in MUST-ADD 2, para 2). Fits
  naturally and sharpens the "Slave Power = small minority running the country"
  point. Flagged `[VERIFY %]` above.
- **Resistance clause (work slowdowns / flight / Nat Turner 1831)** — NOT
  inserted. There was no cheap, non-disruptive home for it in either MUST-ADD's
  beat without bolting on a clause that would dilute the focused economics→politics
  bridge, and the brief says weave "only where they fit naturally and cheaply."
  Recorded here as a deliberate omission for the gate's awareness; it remains a
  candidate for a future revision if the comprehensiveness critic re-raises it.
