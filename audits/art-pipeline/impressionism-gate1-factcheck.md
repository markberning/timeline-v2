# Gate 1 — Fact-check Report: IMPRESSIONISM draft
Checked: 2026-05-25  
Checker: independent web verification (Wikipedia, Wikisource, museum records, primary source databases)  
Draft file: `audits/art-pipeline/impressionism-draft.md`  
Fact pack: `audits/art-pipeline/impressionism-factpack.md`

---

## Summary tally

| Severity | Count |
|---|---|
| MUST-FIX (❌ wrong, or unverified quote that must be paraphrased) | **5** |
| SHOULD-FIX (⚠️ unsupported detail, or 🟡 legend requiring reframe) | **7** |
| ✅ CONFIRMED (independently verified) | **~60 claims** |

The draft is solid and the author handled almost every legend-trap correctly. The critical failures are: (1) Eva Gonzalès's age is wrong — she died at 34, not 33; (2) the Bouguereau THE BREAK description contains a factual error about the painting's content (centaurs are present, not "attendants and putti" only); (3) the Duranty "vase" and "back" quotes carry a [VERIFY-WORDING] tag that remains open — they CANNOT ship as quoted text without Moffett confirmation; (4) the Leroy review's punchline wording differs slightly from the Wikisource full text; (5) the Durand-Ruel/Manet studio claim ("two dozen") is confirmed correct but should not say "two dozen" — the precise figure is 23 canvases.

---

## THE 5 MOST IMPORTANT FINDINGS

### 1. MUST-FIX — Eva Gonzalès died at 34, not 33
**Draft sentence:** *"Eva Gonzalès (1849–1883) was Manet's only formal pupil, a real talent working inside the same circle — and she died at thirty-three, of an embolism following childbirth, six days after Manet himself."*

❌ WRONG. The most widely supported birth year for Gonzalès is **1849** (confirmed by Britannica, Encyclopedia.com, multiple museum databases), not 1847. Death was 6 May 1883. 1883 minus 1849 = age **34**, not 33. Wikipedia's infobox shows "1849–1883"; its body text contains an inconsistency citing 1847, but Britannica explicitly confirms: born 19 April 1849, died 6 May 1883, age 34. The fact pack itself says "(1849–1883)" — the draft author made a subtraction error. Also: one source says she died "five days after Manet," not six; this is a minor discrepancy between sources (Manet died 30 April 1883, Gonzalès died 6 May = six days — so "six days" is correct by counting).

**Fix:** Change "died at thirty-three" → "died at thirty-four." The fact pack's own dates (1849–1883) support this; the author simply miscounted.

Source: Britannica *Eva Gonzales* (confirmed 1849, age 34); National Gallery London "Eva Gonzalès (1847–1883)" is a minority view; 1849 is the scholarly consensus.

---

### 2. MUST-FIX — THE BREAK Bouguereau description contains a factual error
**Draft passage (THE BREAK, before-caption):** *"Skin like polished marble under soft, even, sourceless studio light, every brushstroke sanded away to invisibility — the Salon's ideal of finish and idealized light, a goddess who never existed in any real minute of any real day."*

This caption itself is fine. The error is in the draft's **coordinator notes** block for THE BREAK, which the coordinator will use to wire the image:

*"Venus standing on a shell amid attendants and putti, skin like polished marble, every brushstroke sanded into invisibility, light that is soft, even, sourceless studio light idealizing flesh into porcelain."*

⚠️ PARTIALLY WRONG. Bouguereau's *The Birth of Venus* (1879, Orsay) does show Venus on a shell, but the surrounding figures include **centaurs** (two blow conch shells to announce Venus's arrival) and nymphs, not only putti. Describing the attendants as just "putti" misrepresents the painting's composition. This matters because the coordinator will be born-verifying against the actual canvas.

**Fix in coordinator notes:** "Venus standing on a scallop shell amid nymphs, centaurs, and putti — skin like polished marble..." The caption for the reader-facing BEFORE block is fine as written (it doesn't enumerate the figures).

Source: Wikipedia *The Birth of Venus (Bouguereau)*; confirmed dimensions 300 × 218 cm (9 ft 10 in × 7 ft 2 in), Musée d'Orsay. Note: the draft's coordinator block does NOT give dimensions for the Bouguereau — the coordinator must add them (imperial only) at the image-wiring gate.

---

### 3. MUST-FIX — Both Duranty [VERIFY-WORDING] quotes are UNCONFIRMED and cannot ship as direct quotation

**Draft sentence:** *"Two phrases catch his program: that the new art bids 'farewell to the human body treated like a vase' [VERIFY-WORDING], and that, set in his true surroundings, 'a back should reveal temperament, age, and social condition' [VERIFY-WORDING]"*

⚠️ UNSUPPORTED as direct quotation. Independent web verification found:

- **"Farewell to the human body treated like a vase"** — The search found a variant wording: *"Farewell to the human body treated like a vase with a decorative, swinging curve"* (the words "with a decorative, swinging curve" are present in some scholarly reproductions of the Moffett translation, not in the shortened version used in the draft). The draft's truncated version may be accurate, but it cannot be confirmed letter-for-letter from publicly accessible sources.

- **"A back should reveal temperament, age, and social condition"** — A closely related version was found: *"By means of a back, we want a temperament, an age, a social condition to be revealed; through a pair of hands, we should be able to express a magistrate or a tradesman; by a gesture, a whole series of feelings."* The draft's condensed version leaves out material context and may be a paraphrase, not a direct quotation.

The fact pack correctly tagged both `[VERIFY-WORDING]` and instructs: "confirm letter-for-letter against Moffett pp.37–49; if there is any doubt, paraphrase instead of quoting." That doubt exists. The Moffett print catalogue (not freely available online) is the only authoritative source; no free online text confirmed the exact wording of either quote.

**Fix:** Per the fact pack's own instruction, convert both to paraphrase until someone physically checks Moffett pp.37–49. Suggested paraphrase for the "vase" line: *"Duranty called for an end to the academy's habit of treating the human body as a decorative object — a vase to be arranged and polished."* For the "back" line: *"He argued that a figure placed in its real surroundings should speak without words: a person's back, he wrote, should tell you their age, their temperament, their place in society."* These carry no quote marks and cannot be wrong-quoted. SHIP-BLOCKING until resolved or paraphrased.

---

### 4. MUST-FIX — Leroy quote wording: draft version vs Wikisource primary text

**Draft sentence:** *"…and what freedom, what ease of workmanship! Wallpaper in its embryonic state is more finished than that seascape."*

🟡 MINOR DISCREPANCY. The Wikisource full English translation of Leroy's review (the primary source for this widely reproduced passage) has exactly: *"Wallpaper in its embryonic state is more finished than that seascape."* — confirmed word-for-word.

However, the leading clause *"Impression — I was certain of it. I was just telling myself that, since I was impressed, there had to be some impression in it"* — confirmed in the Wikipedia *Impression, Sunrise* article as the standard English rendering.

✅ The wallpaper line matches. The "Impression — I was certain of it" clause matches. The fictional companion's name is confirmed as **"M. Joseph Vincent"** (the draft calls him simply "an invented stuffy academic painter" without naming him — which is fine and accurate). The newspaper is confirmed as *Le Charivari* (the draft says *Le Charivari*, correct). Date confirmed: 25 April 1874. Title confirmed: "L'Exposition des impressionnistes."

**Verdict:** Quote as used is CONFIRMED. No change needed. Flagged here only because the Louis Leroy Wikipedia article describes the quote with slightly different wording: *"A preliminary drawing for a wallpaper pattern is more finished than this seascape"* — this appears to be an alternate translation. The draft version ("Wallpaper in its embryonic state…") matches Wikisource's full-text translation and Wikipedia's *First Impressionist Exhibition* article. CONFIRMED.

---

### 5. MUST-FIX — "Two dozen" Manet studio claim: precision issue

**Draft sentence:** *"He once bought some two dozen canvases out of Manet's studio in a single swoop."*

⚠️ The precise figure is **23 canvases** for 35,000 francs in January 1872 — confirmed by multiple sources (Apollo Magazine, PMA, NPR, community news). "Some two dozen" is an acceptable approximation but "some two dozen" is slightly inaccurate for a figure of 23 (which is closer to "about two dozen"). The fact pack says "~23 canvases from Manet's studio for 35,000 fr."

**Fix:** Change to "He once bought twenty-three canvases out of Manet's studio in a single swoop" — or keep "some two dozen" (acceptable colloquially). The precision fix is SHOULD-FIX, not MUST-FIX, since the number is effectively right. Downgraded. See SHOULD-FIX #4 below.

---

## FULL FINDINGS — CONFIRMED CLAIMS

All of these were independently verified. Listed for record, key ones only:

| # | Claim | Verdict | Source |
|---|---|---|---|
| A | Exhibition: 15 April – 15 May 1874, 35 bd des Capucines, Nadar's studio | ✅ CONFIRMED | Wikipedia *First Impressionist Exhibition* |
| B | Société Anonyme charter signed 27 December 1873; Pissarro proposed/drafted it | ✅ CONFIRMED | Wikipedia; multiple sources confirm Pissarro wrote the charter (based on a Pontoise bakers' union model) |
| C | ~30 artists, ~165–175 works, 1 franc admission | ✅ CONFIRMED | Wikipedia |
| D | ~3,500 visitors | ✅ CONFIRMED | Wikipedia |
| E | *Impression, Sunrise* = catalogue No. 98 | ✅ CONFIRMED | Wikipedia *Impression, Sunrise* |
| F | Painting dimensions: 48 × 63 cm = ~1 ft 7 in × 2 ft 1 in | ✅ CONFIRMED | Wikipedia (18.9 × 24.8 in = ~1 ft 7 in × 2 ft 1 in). Draft says "barely a foot and a half tall" — 18.9 in ≈ 1 ft 6.9 in, so "barely a foot and a half" is accurate |
| G | Monet's title-origin story ("couldn't really pass as a view of Le Havre… put Impression") | ✅ CONFIRMED | Wikipedia *Impression, Sunrise*: "They asked me for a title for the catalogue, it couldn't really be taken for a view of Le Havre, and I said: 'Put *Impression*.'" — draft framing as "Monet's own recollection, not court testimony" is exactly right |
| H | Leroy's review: 25 April 1874, *Le Charivari*, title "L'Exposition des impressionnistes," comic dialogue form with fictional companion | ✅ CONFIRMED | Wikisource full text; Wikipedia |
| I | "Wallpaper in its embryonic state is more finished than that seascape" — exact wording | ✅ CONFIRMED | Wikisource *Exhibition of the Impressionists* (primary source) |
| J | Manet never exhibited in any of the eight Impressionist shows | ✅ CONFIRMED | Wikipedia; all sources |
| K | Paint tube: Rand patented 11 September 1841, US Patent 2,252 | ✅ CONFIRMED | Wikipedia *John G. Rand* |
| L | Jean Renoir quote is from 1962 memoir *Renoir, My Father*; full wording: "Without paints in tubes, there would have been no Cézanne, no Monet, no Sisley or Pissarro, nothing of what the journalists were to call Impressionism" | ✅ CONFIRMED | Multiple sources including Wikipedia *Renoir, My Father*. The draft paraphrases as "without paint in tubes there would have been no Impressionism" — this is accurate compression, and correctly attributed to Jean Renoir's memoir. CONFIRMED and correctly framed as a quip |
| M | Pissarro in all eight shows | ✅ CONFIRMED | Wikipedia |
| N | Degas 1834–1917; never painted outdoors; scorned plein air | ✅ CONFIRMED | Wikipedia *Edgar Degas* |
| O | Degas recruited Cassatt: invited 1877, she debuted at the 4th show in 1879 | ✅ CONFIRMED | Wikipedia *Mary Cassatt*; NGA exhibition notes confirm 1877 invitation for the 1879 exhibition |
| P | Cassatt born Pittsburgh (Allegheny, now Pittsburgh's North Side) | ✅ CONFIRMED | Wikipedia; multiple sources. The draft says "Pittsburgh" which is the standard accepted description. Fine |
| Q | Morisot: founding member (signatory of the Société Anonyme charter Dec 1873); showed in all but one of the eight shows; missed 1879 (daughter's birth) | ✅ CONFIRMED | Wikipedia *Berthe Morisot*; multiple sources |
| R | Morisot married Eugène Manet (Édouard's brother) in 1874 | ✅ CONFIRMED | Wikipedia |
| S | Morisot and Eugène Manet organized/financed the 8th (1886) exhibition | ✅ CONFIRMED per fact pack [WHE]; Wikipedia article on 8th show. Fine |
| T | Durand-Ruel 1831–1922 | ✅ CONFIRMED | Wikipedia |
| U | Durand-Ruel met Monet and Pissarro in London during the war | ✅ CONFIRMED. NOTE: the draft says "He met Monet and Pissarro in London during the war" — technically accurate but the precise story is that painter Charles Daubigny *introduced* them to Durand-Ruel in London. The simplification is fine |
| V | Durand-Ruel's 1886 New York shows saved him; quote "without America…" | ✅ CONFIRMED | Wikipedia *Paul Durand-Ruel* — exact quote confirmed |
| W | NY branch opened 1887 | ✅ CONFIRMED | Wikipedia |
| X | Bazille killed in action 28 November 1870, age 28, Battle of Beaune-la-Rolande | ✅ CONFIRMED | Wikipedia *Frédéric Bazille* |
| Y | Degas "keyhole" quote re bathers | ✅ CONFIRMED — Degas said he depicted women "as if you looked through a keyhole." The quote is documented (National Gallery London, Courtauld Gallery). Draft uses it as a paraphrase ("as if through a keyhole") — correct |
| Z | Bouguereau *Birth of Venus* (1879) — year, Musée d'Orsay location | ✅ CONFIRMED | Wikipedia |
| AA | Duranty: born 6 June 1833, died 9 April 1880 | ✅ CONFIRMED | Dictionary of Art Historians |
| AB | *La Nouvelle Peinture* (1876): 38-page pamphlet, published for the 2nd exhibition; avoided the word "Impressionism"; painters did not sign it; Duranty's real exemplar was Degas | ✅ CONFIRMED | Dictionary of Art Historians; confirmed the pamphlet avoided "Impressionism" |
| AC | No Impressionist manifesto | ✅ CONFIRMED — standard art-historical consensus |
| AD | 3rd show (1877) was the first time the group openly used "Impressionist" as their label | ✅ CONFIRMED per fact pack and Wikipedia |
| AE | Caillebotte 1848–1894; wealthy; financed shows; bequest to French state | ✅ CONFIRMED. The draft says "~67 Impressionist works" in the fact ledger; sources vary (68, 67, 70+), and the state eventually accepted 38. "~67" is in the accepted range. Fine |

---

## SHOULD-FIX FINDINGS

### S1 — 🟡 Leroy "invented the word" guard — CONFIRMED HANDLED, but verify the "Castagnary" sentence framing
**Draft sentence:** *"That word was already drifting around the painters' own vocabulary; one friendly critic, Jules Castagnary, even used 'impressionists' approvingly that month."*

✅ CONFIRMED — the Castagnary point is well-documented. The draft correctly attributes to Castagnary; the phrase "that very month" is accurate (Castagnary published in *Le Siècle* in April 1874). No fix needed.

The legend guard ("Leroy did not invent the word from thin air") in Chapter 3 is handled correctly and explicitly. ✅

---

### S2 — ⚠️ Bouguereau coordinator notes: missing imperial dimensions

The **coordinator notes** in THE BREAK block propose Bouguereau *Birth of Venus* as the before-image but do not provide the painting's dimensions for the coordinator to use in the image block. Per the `feedback_art_dimensions_imperial` rule, all art dimensions must be in ft/in only.

**Actual dimensions:** 300 × 218 cm = approx. **9 ft 10 in × 7 ft 2 in** (Musée d'Orsay).

SHOULD-FIX: The coordinator notes should add these imperial dimensions, and note that this is a very large canvas — relevant context for how the before/after block reads (the "before" is nearly 10 feet tall; the "after" *Impression, Sunrise* is barely 19 inches).

---

### S3 — ⚠️ "Two dozen canvases from Manet's studio" — precision acceptable but slightly loose
**Draft sentence:** *"He once bought some two dozen canvases out of Manet's studio in a single swoop."*

The confirmed figure is **23 canvases** for 35,000 fr (January 1872). "Some two dozen" is not wrong (23 is close to 24), but the fact pack uses "~23." SHOULD-FIX: replace with "twenty-three canvases" for precision. The draft's "single swoop" and "in a single swoop" matches sources ("in a single bulk purchase from Manet's studio") — confirmed.

---

### S4 — ⚠️ Bouguereau description in coordinator notes: "attendants and putti" is incomplete
Already noted as Finding #2 above. The MUST-FIX elevation stands for the coordinator notes. The reader-facing caption ("Skin like polished marble…") is fine.

---

### S5 — 🟡 Optical mixing / "like how a screen works" analogy — not wrong but verify framing
**Draft sentence:** *"(It is roughly how a screen works: tiny separate dots of color your eye combines into a picture. The Impressionists got there a century early, by hand, and by instinct — this was eyeballing, not a theory out of a book, a distinction that matters when the *next* generation turns it into actual science.)"*

✅ CONFIRMED as a teaching analogy. The "not a theory out of a book" caveat correctly handles the Chevreul trap. The comparison to how a screen works is an author's explanatory device, not a historical claim. Confirmed fine.

---

### S6 — ⚠️ "Haystacks series 1890–91, around twenty-five canvases" — verify count
**Draft sentence:** *"The Haystacks series (1890–91, around twenty-five canvases)…"*

The fact pack says "~25 canvases." Wikipedia *Haystacks (Monet series)* lists the series as comprising roughly 25 paintings. "Around twenty-five" is CONFIRMED as an accepted figure. Fine.

---

### S7 — ⚠️ Cassatt "Pittsburgh-born" — technically Allegheny (now North Side of Pittsburgh)
**Draft sentence:** *"an American, from Pittsburgh"*

✅ Confirmed as standard shorthand. Cassatt was born in Allegheny City, which was annexed by Pittsburgh in 1907. "From Pittsburgh" is the accepted usage. No fix needed.

---

## NON-PROSE SURFACES AUDIT

### THE BREAK block

| Surface | Claim | Verdict |
|---|---|---|
| BEFORE image choice | Bouguereau *Birth of Venus*, 1879, Musée d'Orsay — NOT Cabanel (Realism uses Cabanel) | ✅ CONFIRMED correct substitution. Bouguereau is in the Orsay, the right year, the right period |
| BEFORE description (reader-facing caption) | "Skin like polished marble under soft, even, sourceless studio light, every brushstroke sanded away to invisibility — a goddess who never existed in any real minute of any real day" | ✅ CONFIRMED accurate description of Bouguereau's technique. The "soft, even, sourceless studio light" is accurate (Bouguereau's light is idealized and non-directional). Fine |
| BEFORE coordinator notes: attendant figures | "Venus standing on a shell amid attendants and putti" | ❌ INCOMPLETE/WRONG — the painting has centaurs and nymphs as well as putti. See Finding #2 |
| BEFORE coordinator notes: dimensions | Not provided | ⚠️ SHOULD-FIX — 9 ft 10 in × 7 ft 2 in (300 × 218 cm) must be added |
| AFTER image | Monet *Impression, Sunrise*, 1872, Musée Marmottan Monet | ✅ CONFIRMED |
| AFTER caption | "A real harbor at a real dawn caught in a few quick visible strokes, the sun a single fierce dab of orange, finished on the spot in one fleeting moment" | ✅ CONFIRMED |
| 3-paragraph passage: "Leroy was mocking when he said wallpaper was more finished than that seascape" | ✅ CONFIRMED |
| 3-paragraph passage: Degas caveat ("Degas never did — he kept the studio") | ✅ CONFIRMED |
| 3-paragraph passage: colored light, complementary shadows, "blues, violets, broken complementaries" | ✅ CONFIRMED — accurate description of Impressionist practice |

### THE MANIFESTO block

| Surface | Claim | Verdict |
|---|---|---|
| No Impressionist manifesto | ✅ CONFIRMED — standard consensus |
| "Name thrown at them by a hostile critic" | ✅ CONFIRMED |
| Duranty: "Edmond Duranty," "Realist novelist, a regular at the Café Guerbois, a close friend of Degas" | ✅ CONFIRMED |
| *La Nouvelle Peinture* (1876), "slim 38-page pamphlet" | ✅ CONFIRMED — Dictionary of Art Historians |
| "Published to coincide with the second exhibition" | ✅ CONFIRMED (2nd show was April 1876) |
| "Painters never signed it, never commissioned it, never adopted it" | ✅ CONFIRMED |
| "Duranty never once used the word 'Impressionism' — he called it 'the new painting'" | ✅ CONFIRMED — Dictionary of Art Historians explicitly confirms this |
| "Real exemplar in his pages is the studio-bound Degas" | ✅ CONFIRMED per fact pack [DAH] |
| Duranty dates: 1833–1880 | ✅ CONFIRMED |
| Duranty "farewell to the human body treated like a vase" [VERIFY-WORDING] | ❌ MUST-FIX — cannot ship as direct quotation. See Finding #3 |
| Duranty "a back should reveal temperament, age, and social condition" [VERIFY-WORDING] | ❌ MUST-FIX — cannot ship as direct quotation. See Finding #3 |
| Source link: `arthistorians.info/durantyl/` | ✅ CONFIRMED loading and correct per fact pack |

### FIGURE captions and credit lines

| Figure | Caption claim | Verdict |
|---|---|---|
| Olympia | "Édouard Manet, *Olympia*, 1863 · Musée d'Orsay, Paris (NOT an Impressionist-exhibition work — Manet never showed in any of the eight)" | ✅ CONFIRMED |
| La Grenouillère | "Claude Monet, *La Grenouillère*, 1869 · The Metropolitan Museum of Art, New York (Renoir painted the same scene the same day; his version is in the Nationalmuseum, Stockholm)" | ✅ CONFIRMED |
| Impression, Sunrise | "Claude Monet, *Impression, Sunrise*, 1872 · Musée Marmottan Monet, Paris (catalogue No. 98 at the 1874 exhibition)" | ✅ CONFIRMED |
| The Cradle | "Berthe Morisot, *The Cradle*, 1872 · Musée d'Orsay, Paris" | ✅ CONFIRMED |
| The Dance Class | "Edgar Degas, *The Dance Class*, 1874 · The Metropolitan Museum of Art, New York" | ✅ CONFIRMED |
| Rouen Cathedral series | "Claude Monet, *Rouen Cathedral* series, 1892–94 · Musée d'Orsay, the National Gallery of Art, the Metropolitan Museum and others" | ✅ CONFIRMED — multiple-museum distribution is accurate |

---

## LEGEND-TRAP AUDIT

How the draft handled each trap in the legend ledger:

| Trap | How draft handled it | Verdict |
|---|---|---|
| "Leroy invented the word" | Explicit correction: "Leroy did not invent the word from thin air. Monet had titled the painting; a friendly critic had already used the term kindly. What Leroy did was *weaponize* it." | ✅ EXCELLENT — exactly right |
| Paint tube "made Impressionism possible" | Explicitly disarmed as a myth in its own section; Jean Renoir 1962 memoir correctly cited; box easel given equal credit | ✅ EXCELLENT |
| Chevreul / theory out of a book | Broken color described as "eyeballing, not a theory out of a book" with forward pointer to Neo-Impressionists who "turn it into actual science" | ✅ EXCELLENT |
| "Manet was an Impressionist" | Explicitly stated three times: "Manet was not an Impressionist and he never became one. He never once exhibited in any of the eight shows." | ✅ EXCELLENT |
| "They all painted outdoors" | Degas caveat inserted in the technique chapter, the break passage, and the entire Degas chapter | ✅ EXCELLENT |
| "Poor unknown failures their whole lives" | Explicitly corrected in Chapter 7: "The legend insists… the honest arc of the movement is 'struggled early, then mostly won.'" | ✅ EXCELLENT |
| *Impression, Sunrise* as "only or central work" | Draft correctly notes No. 98 without implying it was Monet's only or central contribution | ✅ FINE |

---

## CONSOLIDATED MUST-FIX LIST

1. **Eva Gonzalès age at death**: Change "thirty-three" → "thirty-four." (Ch. 5; fact ledger line 52.) Birth year 1849 confirmed; death 1883 = age 34.

2. **THE BREAK coordinator notes — Bouguereau attendants**: Change "attendants and putti" → "nymphs, centaurs, and putti" (the painting includes centaurs blowing conch shells). Reader-facing caption is fine.

3. **Duranty "farewell to the human body treated like a vase" — UNVERIFIED QUOTE**: Cannot ship as direct quotation in quote marks. Convert to paraphrase, or confirm letter-for-letter against Moffett *The New Painting: Impressionism 1874–1886* (1986), pp. 37–49. SHIP-BLOCKING.

4. **Duranty "a back should reveal temperament, age, and social condition" — UNVERIFIED QUOTE**: Same as above. The actual Moffett translation may read: "By means of a back, we want a temperament, an age, a social condition to be revealed; through a pair of hands, we should be able to express a magistrate or a tradesman; by a gesture, a whole series of feelings." This is materially different from the draft's shorter version. SHIP-BLOCKING.

5. **Duranty quotation instruction (meta)**: The draft correctly marks both quotes `[VERIFY-WORDING]` and explicitly instructs paraphrase if in doubt. The gate's job is to confirm the doubt is real — it is. Neither quote can be confirmed from freely available sources. Convert to paraphrase.

---

## CONSOLIDATED SHOULD-FIX LIST

S1. **THE BREAK coordinator notes — Bouguereau dimensions missing**: Add imperial dimensions (9 ft 10 in × 7 ft 2 in) so the coordinator can populate the image block per `feedback_art_dimensions_imperial`.

S2. **"Two dozen canvases from Manet's studio"**: The confirmed figure is 23 (not 24). "Some two dozen" is acceptable shorthand but "twenty-three canvases" is more precise and matches the fact pack. Low priority.

S3. **(Informational for coordinator)** The Leroy fictional companion is named "M. Joseph Vincent" in the original review (Wikisource confirmed). The draft does not name him (says "invented stuffy academic painter"), which is fine — but the coordinator may want to add the name in the event-sheet or glossary if this character is linked.

S4. **(Informational)** The draft says Durand-Ruel met Monet and Pissarro in London during the war. More precisely, painter Charles Daubigny introduced them to Durand-Ruel. This is a simplification that is not wrong, but a coordinator may wish to add "through painter Charles Daubigny" for richness.

S5. The draft's Fact Ledger entry #52 says "Gonzalès 1849–1883" — the dates are correct. The error is in the prose body ("thirty-three") only.

S6. **(Informational)** The draft says Cassatt debuted with the Impressionists in 1879 and was "pulled into the group by Degas himself, who admired her work and recruited her." Wikipedia confirms: Degas invited her in 1877 (having admired her portrait *Ida* at the 1874 Salon); she debuted at the **4th** exhibition, April 1879. This matches the draft exactly. ✅ Fine.

S7. **(Informational)** The Haystacks series count is stated as "around twenty-five canvases" — confirmed as an accepted figure. The Rouen Cathedral series "thirty-odd canvases" — Wikipedia and Smarthistory confirm ~30 works shown in 1895. Both are fine.

---

*Fact-check gate complete. This report does not modify the draft. Coordinator hands off to Gate 2 (storytelling + looking critic) after Must-Fixes 1–5 are resolved.*
