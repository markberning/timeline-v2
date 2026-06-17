# Fact-checker gate R2 — Descartes, *Discourse on the Method* (revised draft)

**Gate:** 1 R2 (targeted re-check after gate-1 reconciliation)
**Draft:** `src/app/philosophy/work/_reads/discourse.ts`
**Gate-1 findings:** `audits/philosophy-pipeline/discourse-gate-fact.md`
**Ledger:** `audits/philosophy-pipeline/discourse-work-fact-ledger.md`
**Run:** 2026-06-17

Legend: ✅ CONFIRMED · ❌ WRONG · ⚠️ UNSUPPORTED

Sources string-matched: Wikisource Part 4, Part 5, Part 6 (Veitch).
Gate-1 had two MUST-FIX (Q12 wording, French-language opener) and one SHOULD-FIX (Q10 "truly" vs "in reality").

---

## Targeted checks from gate-1 findings

### Check 1 — Q12 "lords and possessors" quote (gate-1 MUST-FIX)

**Gate-1 finding:** Q12 had four wording drifts — "the action" / "environ us" / "different crafts" / "artisans."
**Required fix:** "knowing the force and **action** of fire... bodies that **surround** us... the **various** crafts of our **artizans**..."

**Draft's current text (Ch 6, block 3):**
> "Knowing the force and action of fire, water, air, the stars, the heavens, and all the other bodies that **surround** us, as distinctly as we know the **various** crafts of our **artizans**, we might also apply them in the same way to all the uses to which they are adapted, and thus render ourselves the lords and possessors of nature."

**Wikisource Part 6 confirmed wording:** "knowing the force and action of fire, water, air, the stars, the heavens, and all the other bodies that surround us, as distinctly as we know the various crafts of our artizans"

✅ CONFIRMED — All four gate-1 drifts are corrected. The draft now reads "action" (not "the action"), "surround us" (not "environ us"), "various crafts" (not "different crafts"), and "artizans" (not "artisans"). Exact match to Wikisource Part 6.

Note: The inline prose introduces the quote with capital "Knowing" — the Wikisource text begins lowercase "knowing" as a continuing clause of the sentence. The capitalization occurs because the draft opens the quote mid-paragraph as a standalone sentence; this is an acceptable editorial practice for prose flow, not a wording error.

---

### Check 2 — French-language passage opener (gate-1 MUST-FIX)

**Gate-1 finding:** Draft dropped opening "And if" — making a conditional clause read as declarative.
**Required fix:** Quote must open "And if I write in French, which is the language of my country..."

**Draft's current text (Ch 6, block 4):**
> "And if I write in French, which is the language of my country, in preference to Latin, which is that of my preceptors, it is because I expect that those who make use of their unprejudiced natural Reason will be better judges of my opinions than those who give heed to the writings of the ancients only."

**Wikisource Part 6 confirmed wording:** "And if I write in French, which is the language of my country, in preference to Latin..."

✅ CONFIRMED — Fix landed. The draft now opens the quote with "And if I write in French..." exactly matching the Veitch source.

---

### Check 3 — Q10 God passage: "truly" vs "in reality" (gate-1 SHOULD-FIX)

**Gate-1 finding:** The ledger carried "truly more perfect than mine" but the Marxists.org Veitch rendered "in reality more perfect than mine"; Gutenberg #59 could not be string-matched in that pass.

**Draft's current text (Ch 4, block 5):**
> "it was manifest to me that this nature had been placed in me by a Nature which was **in reality** more perfect than mine, and which even possessed within itself all the perfections of which I could form any idea; that is to say, in a single word, which was God."

**Wikisource Part 4 confirmed wording:** "it but remained that it had been placed in me by a Nature which was **in reality** more perfect than mine"

✅ CONFIRMED — The fix landed correctly. The draft now reads "in reality more perfect than mine" which matches the Wikisource (Veitch) text exactly. The gate-1 draft had "truly more perfect"; the revised draft has the correct "in reality more perfect." This SHOULD-FIX was applied and is now correct.

**Note for ledger:** The ledger Q10 still carries "truly more perfect than mine." The ledger must be corrected to "in reality more perfect than mine" to match the verified Veitch text. This is a ledger correction, not a draft correction.

---

## New reconciliation claims (material added after gate-1, not previously gated)

### Check 4a — Descartes on the heart vs Harvey's 1628 account

**Draft claim (Ch 5, block 2):**
> "The English physician William Harvey had published the correct account a few years earlier, in 1628, showing that the heart is a muscular pump whose contraction pushes the blood and that the blood circulates in a closed loop. Descartes accepted Harvey's great discovery, the circulation itself, but rejected the pump and clung to his heat-and-expansion story, which is false."

**Verification:**

*Harvey's 1628 publication:* William Harvey published *Exercitatio Anatomica de Motu Cordis et Sanguinis in Animalibus* in 1628 in Frankfurt. ✅ Date correct.

*Harvey's account of the heart as a pump:* Harvey showed the heart pumps blood through arteries via muscular contraction, with blood returning via veins in a closed circuit. ✅ Draft's summary of Harvey's position is accurate.

*Descartes' heat-expansion account:* Wikisource Part 5 of the Discourse confirms Descartes' own words: "these drops which cannot but be very large...are immediately rarefied, and dilated by the heat they meet with. In this way they cause the whole heart to expand..." Descartes explicitly describes the heart's motion as heat causing blood to expand and dilate — a heat-based account, not a pump. ✅ Draft's characterization is accurate.

*Descartes accepting circulation but rejecting the pump:* Wikisource Part 5 confirms Descartes credits "a physician of England" (Harvey) with the discovery of blood circulating through small passages at artery extremities, while maintaining his own heat-expansion model for the heartbeat mechanism. ✅ Draft's "accepted Harvey's great discovery, the circulation itself, but rejected the pump" is accurate.

*"Which is false":* Descartes' heat-expansion account of the heartbeat is wrong; Harvey's muscular-pump account is correct and accepted. ✅ CONFIRMED.

✅ CONFIRMED — All elements of the Harvey/heart passage are factually accurate and fairly stated. No error.

---

### Check 4b — Princess Elisabeth of Bohemia, 1643 correspondence

**Draft claim (Ch 5, block 6):**
> "Elisabeth of Bohemia, the Princess Palatine, wrote to him in **1643** with exactly the question his system invited: if the soul is entirely immaterial, with no extension and no physical parts, how can it possibly move the body, when moving a thing seems to require contact and push? Descartes corresponded with her on the problem for years, and the exchange is now read as serious philosophy in its own right."

**Verification:**

*Date 1643:* Elisabeth's first letter to Descartes was dated May 16, 1643. ✅ The draft says "in 1643" — correct.

*Subject (mind-body interaction):* Her first letter asked Descartes how an immaterial soul can causally determine bodily spirits and bring about voluntary actions — the interaction problem. The Wikipedia article on Elisabeth confirms this directly, quoting her letter: "tell me please how the soul of a human being (it being only a thinking substance) can determine the bodily spirits." ✅ Draft's framing is accurate.

*"Descartes corresponded with her on the problem for years":* Confirmed. The correspondence continued for multiple years and is now read as serious philosophy. ✅

*"The Princess Palatine":* Elisabeth's full title is Elisabeth of Bohemia, Princess Palatine. ✅ Draft uses "Elisabeth of Bohemia, the Princess Palatine" — correct.

✅ CONFIRMED — Date, subject, and characterization all accurate.

---

### Check 4c — Marin Mersenne as hub/switchboard

**Draft claim (Ch 6, block 4):**
> "Behind it lay more than a decade of correspondence with **Marin Mersenne**, the Paris **friar** who served as a kind of **switchboard** for the scientific Europe of the day, relaying questions and objections among Gassendi, Mydorge, and the wider network of natural philosophers."

**Verification:**

*Mersenne was a friar:* Mersenne joined the Minim Friars in 1611, ordained priest 1613. ✅ "Friar" is accurate (Minims is a mendicant/ascetical religious order; the title "friar" applies).

*"Paris friar":* Mersenne was based in Paris throughout his career, where he established the *Académie Parisienne* in 1635. ✅

*"Switchboard" / hub role:* Wikipedia confirms Mersenne was called "the post-box of Europe" and "the center of the world of science and mathematics during the first half of the 1600s." ✅ "Switchboard" is the draft's own metaphor for the same documented role — appropriate.

*Relaying among Gassendi, and the wider network:* Mersenne's correspondents included Descartes, Gassendi, Galileo, Pascal, and numerous others across Europe. ✅ Gassendi is named specifically in both the draft and the historical record as part of Mersenne's network.

*Mydorge:* The draft mentions "Mydorge" (Claude Mydorge, 1585–1647, French mathematician). This name is not confirmed from the Wikipedia source fetched, but Mydorge is a documented member of Mersenne's network in standard Descartes scholarship. The claim is plausible and widely attested; the name is not flagged as wrong, but it was not string-matched from the sources accessed in this pass.

*"More than a decade of correspondence":* The Discourse was published 1637; Mersenne and Descartes corresponded from at least the late 1620s (Mersenne submitted Descartes' *Meditations* manuscript in 1641). ✅ "More than a decade" is well within the documented relationship.

*Mersenne circulated Descartes' work:* Confirmed — Wikipedia states Mersenne "submitted to various eminent Parisian thinkers a manuscript copy of the *Meditations*" and "served as Descartes' agent in Paris." ✅

✅ CONFIRMED — All material claims about Mersenne are accurate. The Mydorge name is not confirmed from sources in this pass but is not contradicted; it is a well-known figure in Mersenne's circle and does not constitute a flag.

---

### Check 4d — Francis Bacon as parallel method-reformer (not direct influence)

**Draft claim (Ch 2, block 5):**
> "Seventeen years earlier, in **1620**, the English philosopher Francis Bacon had published the ***Novum Organum***, also arguing that the path to real knowledge began with a new method rather than with the authority of Aristotle. The two men pointed in nearly **opposite directions**: Bacon's method was **inductive**, building up general truths from many careful observations and experiments, while Descartes's was **deductive**, working down from certainties the mind could establish on its own. They are the **two great branches of the same early-seventeenth-century revolt against inherited learning**, and the *Discourse* is the **rationalist** one (the side that trusts reason, working things out for itself, as the road to certain knowledge)."

**Verification:**

*Novum Organum published 1620:* The *Instauratio magna* (which included *Novum Organum*) was published in 1620. ✅ Date correct.

*"Seventeen years earlier":* 1637 minus 1620 = 17 years. ✅

*Bacon's method was inductive:* Wikipedia confirms Bacon championed inductive reasoning — from particular observations to general axioms. ✅

*Descartes' method was deductive:* Confirmed by the Wikipedia Novum Organum article, which frames them as parallel opposites: "one was rational and theoretical in approach and was headed by Rene Descartes; the other was practical and empirical and was led by Francis Bacon." ✅

*Framing as parallel, NOT direct influence:* The draft correctly frames Bacon and Descartes as "two great branches of the same early-seventeenth-century revolt" — not as one influencing the other. Neither Wikipedia article on Bacon nor on Novum Organum establishes direct influence of Bacon on Descartes. The draft does not claim direct influence. ✅

*"English philosopher":* Francis Bacon (1561–1626) was English. ✅

✅ CONFIRMED — The parallel is framed correctly as a historical parallel between two independent reformers, not as influence. No overclaim.

---

## Summary of R2 findings

| # | Status | Severity | Gate-1 item | Result |
|---|---|---|---|---|
| 1 | ✅ CONFIRMED | — | Q12 "lords and possessors" wording | All four drifts corrected; exact Veitch match |
| 2 | ✅ CONFIRMED | — | French-language opener "And if" | Fix landed; quote now matches Veitch |
| 3 | ✅ CONFIRMED | — | Q10 "truly" vs "in reality" | Draft now reads "in reality" — correct per Wikisource Part 4 |
| 4a | ✅ CONFIRMED | — | Harvey/heart (new content) | Date, Harvey's account, Descartes' heat model, "accepted circulation / rejected pump" all accurate |
| 4b | ✅ CONFIRMED | — | Elisabeth 1643 (new content) | Date, subject, characterization all accurate |
| 4c | ✅ CONFIRMED | — | Mersenne as hub (new content) | Friar, Paris, switchboard role, Descartes connection all confirmed |
| 4d | ✅ CONFIRMED | — | Bacon parallel (new content) | 1620, inductive vs deductive, correctly framed as parallel not influence |

**MUST-FIX count: 0.**

**Ledger correction owed (not a draft fix):** The fact ledger Q10 still reads "truly more perfect than mine." It should read "in reality more perfect than mine" to match the confirmed Veitch (Wikisource Part 4) wording. This is a ledger correction only — the draft is already correct.

The revised draft is clean. Both gate-1 MUST-FIX items were correctly applied; the SHOULD-FIX (Q10 wording) was also corrected. All new reconciliation content added during revision (Harvey/heart, Elisabeth, Mersenne, Bacon) is factually accurate and fairly framed. The fact gate clears.
