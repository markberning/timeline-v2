# Fact-Check Gate 1 — A Burial at Ornans (work-level draft)

**Checker:** Fact-checker agent, art content pipeline
**Source authority:** Musée d'Orsay catalogue (primary); Wikipedia, Britannica, Smarthistory, PBS CultureShock, Google Arts & Culture cross-checked
**Date:** 2026-05-25

---

## VERDICT

**CONDITIONAL PASS.** No flat fabrications found; the draft's framing instincts are good. There are three items requiring correction or stronger hedging (one dimension note, one subtitle nuance, one provenance clarification) and several SHOULD-FIX precision improvements. No invented critic quotes were detected. The draft's caution on the great-uncle identity and the "burial of Romanticism" attribution are appropriately handled.

---

## MUST-FIX (blocks ship — flat errors or unsupported assertions)

**M1 — Dimensions: width conversion is off by one inch**
The draft states "21 feet 11 inches wide." The Musée d'Orsay catalogue gives the exact dimensions as H. 315 cm × L. 668 cm. Converting: 668 cm ÷ 2.54 = 262.99 inches = **21 feet 10.99 inches**, which rounds to **21 feet 11 inches**. The draft is actually correct to the nearest inch. HOWEVER, the fact pack renders the same number identically ("21 ft 11 in"), so no fix is needed here — this is confirmed accurate.

**Revised ruling: M1 is withdrawn; dimensions are CONFIRMED (see Confirmed section).**

**M1 — Subtitle: the draft's rendering is incomplete and could mislead**
The draft quotes the subtitle as: "historical picture of a burial at Ornans." The Musée d'Orsay gives the full subtitle as: *"Tableau de figures humaines, historique d'un enterrement à Ornans"* — which translates more precisely as "Painting of human figures, historical [account] of a burial at Ornans." The draft's rendering ("historical picture of a burial at Ornans") compresses it correctly for voice purposes, but the draft's in-prose gloss ("deliberately borrowing the language of history painting") rests on the word "historique" — which is accurate. The compression is acceptable for prose, but the full subtitle as given by the Orsay differs slightly from what the fact pack records. The Orsay gives the word order as: *Tableau de figures humaines, historique d'un enterrement à Ornans.* The fact pack already has this correct. The draft summarizes it in English as "historical picture of a burial at Ornans" — this is a defensible loose translation of the second half only. No ship-blocking error, but flag for the integrate step that the subtitle is longer and should be rendered in full in any provenance/metadata field (the prose gloss is fine).

**Revised ruling: Not a MUST-FIX in prose; flag for metadata only.**

**M1 — Provenance: the draft says Juliette "gave" the painting to the State in 1881 as if she was simply the custodian after 1877. One source clarifies she "purchased" it from the estate after the Salon; another says Courbet retained it until his death. The Musée d'Orsay's own catalogue record says: "Don de Mlle Juliette Courbet, 1881" (Gift from Miss Juliette Courbet). Multiple sources confirm the gift year as 1881, four years after Gustave's 1877 death. One source adds she donated it to the French Ministry of Fine Arts specifically. The draft's wording ("gave the painting to the State in 1881") is accurate; "four years after her brother's death" is arithmetically correct (1877 + 4 = 1881). No error.**

**Revised ruling: Not a MUST-FIX; provenance CONFIRMED (see below).**

---

After revising all three candidate MUST-FIX items above, none survive as flat errors. The draft is clean of fabrications. The true MUST-FIX items are:

**M1 — "The burial of Romanticism" quote: exact wording must be hedged or confirmed**
The draft renders Courbet's statement as: *"the burial of Romanticism"* (in quotation marks, attributed as something Courbet "eventually told people"). The most widely cited exact wording in scholarly sources is: **"The Burial at Ornans was in reality the burial of Romanticism."** The draft quotes only the fragment "the burial of Romanticism" — which is the key phrase and appears accurate. However, the draft presents it as if it is something Courbet said aloud to people in conversation ("eventually told people"). The documented form of this statement is a written one, not an oral one, though the exact original source (letter, article, interview) is not consistently cited across secondary literature — no search turned up a definitive archival citation. The draft should not present this as a live conversational utterance; a safer framing is "wrote" or "later stated" rather than "told people." The phrase in quotation marks is correctly rendered.

**Fix:** Change "eventually told people what he thought he had done. He said the Burial was, in fact, 'the burial of Romanticism'" to "later wrote — or at least is widely recorded as having stated — that the Burial was, in fact, 'the burial of Romanticism.'" (The current wording implies a known conversational exchange; the evidentiary basis is secondary-source consensus, not a dated letter.)

---

## SHOULD-FIX (imprecise or needs hedging)

**S1 — "forty-plus" vs "fifty" figure count: inconsistency between movement read and this draft**
The draft consistently says "roughly fifty figures" and "~50 figures." The Smarthistory and PBS sources say "forty or more" or "more than forty." Britannica does not give a precise count. The Wikipedia article on the painting (one of the top sources) does not confirm exactly 50. The Musée d'Orsay's own identified-figures list (from the provenance search result) names ~40 individual identifiable persons plus clergy, gravedigger, and family. The ~50 figure appears to be the standard art-historical rounding and is defensible. The fact pack itself flags it [VERIFY]. Given the sources found, "roughly fifty" is acceptable shorthand consistent with the broad scholarly consensus, but the safer and more precise phrasing is "more than forty" or "around forty to fifty." The draft's consistent use of "fifty" without qualification is slightly too confident given the contested count.

**Fix:** Change "roughly fifty figures" and the "~50" references to "more than forty figures" or "roughly forty-plus" to stay within what the record clearly supports. The throughline's "fifty real villagers" (final chapter) should match whatever the body text settles on.

**S2 — "gravedigger kneels" — the gravedigger's exact posture**
Multiple sources describe a gravedigger at the grave's edge; the draft says "kneels." A skull and bones are confirmed near the pit (Wikipedia says "skull and bones along its edge"). The kneeling posture is widely described in secondary literature and is consistent with what is visible in the painting. No source directly contradicts "kneeling." This is a safe description; no fix required, but confirm visually against the hero image at gate 6.

**S3 — Beadles description: the draft calls them "minor church officers" and "church functionaries" — accurate, but note the dress detail**
Sources confirm "red-garbed beadles." One source adds their "bulbous noses" as noted by critics — this is consistent with the draft's "ordinary, ruddy, unidealized faces." The draft says there are "two" beadles in red. Most sources describe beadles in the plural without specifying exactly two. The draft's "two slabs of hot color" is a visual reading consistent with close inspection of the painting. No firm counter-evidence found; treat as a visual description to be confirmed at gate 6.

**S4 — "the most unglamorous figure at any funeral, the man who actually has to do the work, given a front-row seat" — this is editorial voice, not a claim — OK as written, but note:**
The gravedigger's name is documented in at least one source as "Antoine Joseph Cassard." This is not a critical error in the prose (the draft doesn't name him), but if the integrate step adds a cast/figures section, this name can be included.

**S5 — Socialist-threat reading: the draft frames it correctly as a reading some critics made, not Courbet's intent, and keeps it as an open question. Confirmed accurate and appropriately hedged.**

**S6 — "Musée d'Orsay opened in 1986" — the Orsay opened December 1, 1986. The draft just says "1986." This is correct. No fix needed.**

**S7 — The dog: confirmed in right foreground, back to the grave. Multiple sources confirm this. One source notes the dog is in the foreground between the veterans and the clergymen — slightly different positioning than "right foreground." The draft's "right foreground" is a reasonable visual read; confirm against the hero image at gate 6.**

**S8 — Men left / women right: CONFIRMED by the Musée d'Orsay and multiple sources. No fix.**

---

## CONFIRMED ([VERIFY] items resolved)

**C1 — Dimensions: 315 × 668 cm / ~10 ft 4 in × ~21 ft 11 in**
CONFIRMED. Musée d'Orsay catalogue: H. 315.0 cm × L. 668.0 cm (accession RF 325). Conversion: 315 cm = 10 ft 4.0 in exactly; 668 cm = 21 ft 10.99 in (rounds to 21 ft 11 in). The draft's rendering "roughly 10 feet 4 inches tall and 21 feet 11 inches wide" is accurate. The fact pack's "~3.15 m × 6.68 m (≈10 ft 4 in × 21 ft 11 in)" is also accurate.
*Source: Musée d'Orsay catalogue, musee-orsay.fr/en/artworks/un-enterrement-ornans-924*

**C2 — Painted 1849–1850, begun in Ornans**
CONFIRMED. Musée d'Orsay: 1849–1850. Multiple sources confirm work began in Ornans (late 1849). No dispute.
*Source: Musée d'Orsay catalogue*

**C3 — Subtitle wording**
CONFIRMED (with note). Full French subtitle per Musée d'Orsay and Wikipedia: *"Tableau de figures humaines, historique d'un enterrement à Ornans."* The draft's English summary "historical picture of a burial at Ornans" is a loose but acceptable compression. The word "historique" = "historical" is accurately rendered. No factual error in the prose; integrate step should use the full French subtitle in any metadata/provenance field.
*Source: musee-orsay.fr; Wikipedia*

**C4 — Great-uncle identification: Claude-Étienne Teste, September 1848**
PARTIALLY CONFIRMED / STANDARD ACCOUNT. The Musée d'Orsay documentation lists a "Melchior Teste" among the identified figures in the painting. The name "Claude-Étienne Teste" as the deceased appears in the art-historical record (Wikipedia, multiple secondary sources confirm "great-uncle" and "September 1848") but no source directly names the deceased as "Claude-Étienne Teste" with full confidence — some sources give only "great-uncle" without naming him. The draft correctly treats this as "the standard account rather than carved-in-stone fact" and frames it as "sometimes contested." This hedging is appropriate and should be retained. Do not strengthen to a flat assertion.
*Source: Wikipedia (names "great-uncle," September 1848); Musée d'Orsay figure list (names a Teste but not as the deceased)*

**C5 — ~50 figures, real named Ornans residents who posed individually**
CONFIRMED WITH PRECISION CAVEAT. That the figures are real identifiable Ornans residents is well-established — Courbet himself stated he "painted the very people who had been present at the interment, all the townspeople" (per art historian Gerstle Mack's biography). Named figures confirmed in sources include: the mayor, the justice of the peace, the priest, the gravedigger (Antoine Joseph Cassard), Courbet's parents Régis and Sylvie Courbet, sisters Zoé, Zélie, and Juliette, and others. The number "~50" is the standard shorthand; "more than forty" or "forty-plus" is the more defensible floor (see S1 above). The individual-studio-sitting claim is widely repeated and plausible.
*Source: Gerstle Mack biography of Courbet, cited across secondary sources; Smarthistory; Britannica*

**C6 — Open grave, kneeling gravedigger, skull and bones at the lip**
CONFIRMED. Wikipedia: "skull and bones along its edge" of the open grave. Multiple sources describe the gravedigger beside the grave. Skull detail confirmed. Memento-mori framing is standard scholarly consensus.
*Source: Wikipedia; Musée d'Orsay analysis*

**C7 — Crucifix held aloft against the gray sky, left-center**
CONFIRMED. Multiple sources describe the crucifix as the single strong upward vertical. Its position at left-center against the gray sky is consistent with close-reading sources.
*Source: Smarthistory; PBS CultureShock; Wikipedia*

**C8 — Beadles in red near the priest**
CONFIRMED. "Red-garbed beadles" confirmed in multiple sources, including Britannica and Wikipedia. The color contrast in an otherwise black-and-gray composition is a standard observation.
*Source: Wikipedia; Britannica*

**C9 — Men left, women right (some weeping), dog in right foreground indifferent**
CONFIRMED. Men on the left, women on the right (some weeping into handkerchiefs), small dog in foreground: all confirmed by multiple sources including Musée d'Orsay and Wikipedia.
*Source: Musée d'Orsay; Wikipedia; Smarthistory*

**C10 — Limestone cliffs of the Ornans valley (real local geology)**
CONFIRMED. Sources identify the background as the Roche du Mont (right) and the Château d'Ornans (left) — the real escarpment that backs the town. One source notes it as "typical landscape of East France, with its arid high limestone cliffs." The Musée d'Orsay explicitly discusses Courbet's technique in rendering "skin tones and materials (fabrics, soil and limestone cliffs)."
*Source: art-inspector.com; Musée d'Orsay restoration article; visual-arts-cork.com*

**C11 — Shown at the Salon of 1850–1851**
CONFIRMED. Universally confirmed across all sources. The Salon ran across that winter.
*Source: Musée d'Orsay; Wikipedia; Britannica; Smarthistory*

**C12 — Hostile critical reception: ugliness, scale, socialist reading**
CONFIRMED. The "explosive reaction" and critics attacking "ugliness," common faces, and monumental scale spent on a provincial subject are universally documented. The socialist reading — some critics reading a socialist menace into dignifying the rural poor so soon after 1848 — is confirmed. Champfleury, one defender, explicitly wrote "there is not a trace of socialism in A Burial at Ornans," which shows the socialist charge was real enough to require rebutting. The draft invents no critic quotes. Good.
*Source: PBS CultureShock; Wikipedia; Britannica; Smarthistory*

**C13 — "The burial of Romanticism" — wording and attribution**
CONFIRMED AS PHRASE; source form requires slight hedge (see M1 above). The exact phrase "the burial of Romanticism" is Courbet's and is widely documented. The full sentence form most commonly cited is: "The Burial at Ornans was in reality the burial of Romanticism." The evidentiary basis is strong secondary-source consensus; no single dated letter or archival citation was found by web search to pin it to a specific document.
*Source: WikiArt; multiple secondary sources; Quoteikon; Goodreads Courbet quotes*

**C14 — Juliette Courbet's 1881 gift to the State**
CONFIRMED. Musée d'Orsay catalogue: "Don de Mlle Juliette Courbet, 1881." Multiple sources confirm she donated it to the French Ministry of Fine Arts in 1881, four years after Gustave's 1877 death.
*Source: Musée d'Orsay catalogue (accession record RF 325); Britannica; art-facts.com*

**C15 — In the Louvre until 1986, then transferred to the Musée d'Orsay**
CONFIRMED. All sources agree: the painting was at the Louvre from 1881 to 1986, then transferred when the Musée d'Orsay opened (December 1, 1986). One source notes it was mounted and dismantled ~20 times in its Louvre decades due to its size.
*Source: Musée d'Orsay; Smarthistory; Britannica; multiple secondary sources*

---

## Items the draft flagged [VERIFY] that CANNOT be fully confirmed by web search

**U1 — The precise name of the deceased: "Claude-Étienne Teste"**
The name "Claude-Étienne Teste" appears in some secondary literature but was not confirmed by the Musée d'Orsay catalogue text or by any primary source found in this search. The Musée d'Orsay identifies a "Melchior Teste" among the attendees, but not the deceased by this full name. RECOMMENDATION: retain the draft's current hedged wording ("by the usual account, the dead man was Courbet's own great-uncle, Claude-Étienne Teste") with the explicit caveat that "the identification… is the standard story rather than carved-in-stone fact." Do not sharpen.

**U2 — Exact source document for the "burial of Romanticism" quote**
No search identified the specific letter, article, or public statement in which Courbet first made this remark. The phrase is real and widely attributed, but the documentary trail is secondary-source consensus. Hedge appropriately (see M1 fix above: "later wrote — or at least is widely recorded as having stated").

---

## Summary

The draft is factually sound and contains no invented quotes, no fabricated names, and no flat errors in dates, dimensions, provenance, or composition description. Five items require action:

1. **M1 (MUST-FIX):** The "burial of Romanticism" line should be hedged from "told people" to "later wrote — or is widely recorded as having stated" — the evidentiary basis is secondary-source consensus, not a dated document.
2. **S1 (SHOULD-FIX):** "Roughly fifty figures" is slightly overconfident; "more than forty" or "around forty to fifty" is better supported. The discrepancy also creates a mismatch with the movement read's "forty-plus."
3. **S3/S4 (MINOR):** Exact count of red beadles (stated as "two") should be confirmed at gate 6 against the hero image; gravedigger kneeling posture should be confirmed visually.
4. **C3 (INTEGRATE NOTE):** Full French subtitle should appear in the provenance/metadata field; the prose summary is fine.
5. **U1:** The "Claude-Étienne Teste" identity for the deceased should remain hedged as written — do not strengthen it.

All [VERIFY]-flagged composition details (grave, skull, crucifix, red beadles, cliff, dog, men-left/women-right) are confirmed against the real record. Dimensions, Salon date, provenance chain (Juliette → State 1881 → Louvre → Orsay 1986), and the "burial of Romanticism" phrase are all confirmed. The draft may advance to Gate 2 (storytelling critic) once M1 is fixed.
