# Monadology Work Read — R2 Fact-Check Gate
`src/app/philosophy/work/_reads/monadology.ts` · Run 2026-06-17

13 `[VERIFY]` markers found and resolved. 0 markers remain. `npx tsc --noEmit` clean.

---

## Claim-by-Claim Verdicts

### CONFIRMED (11)

**1. Spinoza's *Ethics* published posthumously 1677; one-substance/modes thesis**
*Ethics* written 1661–1675, published posthumously 1677. Core thesis: one infinite substance (God or Nature); all finite things are modes. ✅ Marker deleted, prose untouched.
Source: Wikipedia "Spinoza's Ethics"; IEP "Spinoza."

**2. Leibniz visited Spinoza in The Hague in 1676 and read the *Ethics* in manuscript**
November 1676. Confirmed via multiple sources (Jonathan Gray blog citing primary scholarship; IEP; ResearchGate papers). Spinoza showed him the manuscript directly. ✅ Marker deleted, prose untouched.

**3. Sophia of Hanover was Leibniz's primary patron and longtime philosophical correspondent**
Well established. Described universally as Leibniz's patron and decades-long philosophical correspondent. Her Wikipedia article and the "Leibniz and the Two Sophies" volume both confirm. ✅ Marker deleted, prose untouched.

**4. Sophie Charlotte died 1705; *Theodicy* grew from conversations with Leibniz**
Died 1 February 1705 of pneumonia. The *Theodicy*'s origin in courtly conversations with Sophie Charlotte at Lützenburg is confirmed by encyclopedia.com, gwleibniz.com, and SEP. The draft had said "dedicated to her memory" — this specific phrasing could not be verified from the preface text, so I softened the prose (see CORRECTIONS below). The core claim (1705 death + Theodicy connection) is ✅ CONFIRMED.

**5. Caroline of Ansbach was intermediary for the Leibniz-Clarke correspondence**
Confirmed explicitly: Leibniz wrote to Caroline (then Princess of Wales) in 1715; she showed the letter to Clarke, initiating the exchange. She remained an active participant throughout. ✅ Marker deleted, prose untouched.
Source: Wikipedia "Leibniz–Clarke correspondence"; Project MUSE "Caroline, Leibniz, and Clarke."

**6. Sophia of Hanover died in June 1714**
Died 8 June 1714 at Herrenhausen. ✅ Marker deleted, prose untouched.
Source: Britannica; Wikipedia "Sophia of Hanover"; History Today.

**7. "Roar of the sea" petites perceptions illustration — from the *New Essays***
Confirmed. Leibniz uses the roar-of-the-sea / individual wave-sounds illustration explicitly in the preface to the *New Essays on Human Understanding*. This is his own example, not borrowed. ✅ Marker deleted; prose enhanced to name the *New Essays* preface explicitly as the source.

**9. Leibniz's possibility-premise critique of Descartes' ontological argument**
Confirmed. Leibniz held Descartes' version incomplete because it does not first prove that the concept of a supremely perfect being is possible (contains no hidden contradiction). This is Leibniz's distinctive refinement. ✅ Marker deleted, prose untouched.
Source: SEP "Descartes' Ontological Argument"; Academia.edu "Leibniz's Ontological Argument."

**10. Princess Elisabeth of Bohemia pressed Descartes on mind-body interaction in letters**
Confirmed. Elisabeth corresponded with Descartes 1643–1650 (58 surviving letters); the opening question about how an immaterial mind can move a material body is the most famous part. ✅ Marker deleted, prose untouched.
Source: SEP "Elisabeth, Princess of Bohemia"; Project MUSE.

**11. Malebranche's occasionalism: God is sole true cause, acts on every occasion**
Confirmed. All created things are devoid of causal power; God is the direct and efficacious cause of every event; on every occasion when the soul wills a bodily movement, God makes the body move. ✅ Marker deleted, prose untouched.
Source: SEP "Nicolas Malebranche"; IEP "Occasionalism."

**12. Leibniz-Clarke correspondence 1715–16; Newton's side held God intervenes**
Confirmed. Exchange ran 1715–1716 (five letters each side, published 1717). Clarke (speaking for Newton's position) defended the view that God's ongoing providential action in the cosmos was necessary; Leibniz objected that a perfect God's creation would need no repair. ✅ Marker deleted, prose untouched.
Source: Wikipedia "Leibniz–Clarke correspondence"; Newton Project.

**13. "City of God" is the title of Augustine's work**
Confirmed. *De Civitate Dei contra paganos* (*The City of God Against the Pagans*), written 413–426 CE. ✅ Marker deleted, prose untouched.
Source: Wikipedia "The City of God"; Britannica; Library of Congress.

---

### CORRECTIONS MADE (2)

**4. Sophie Charlotte — "dedicated to her memory" phrasing (⚠️ UNSUPPORTED)**
The draft said the *Theodicy* was "written in connection with their conversations and **dedicated to her memory** after her early death in 1705." Multiple sources confirm the *Theodicy* grew from conversations with Sophie Charlotte at Lützenburg and was published in 1710 (five years after her 1705 death), but the specific claim that the published book carries a formal dedication *to her memory* could not be verified from the preface text. The phrase "dedicated to her memory" is a step beyond what the sources confirm.

**Fix applied:** Prose changed to "the *Theodicy* grew directly out of their long conversations, and was published in 1710, five years after her early death in 1705." This is fully supported without overstating the dedication claim.

**8. "Panpsychism" as a post-Leibniz coinage (⚠️ NUANCED — softened)**
The draft's prose said panpsychism was "a label Leibniz himself never used" (✅ true) and the `[VERIFY]` comment tagged it as "a later (post-Leibniz) coinage." The reality is more complex: the Italian Renaissance philosopher Francesco Patrizi da Cherso used the variant *pampsychia* in his *Nova de universis philosophia* (1591), predating Leibniz (born 1646). The modern English term "panpsychism" entered English c.1874 (OED), from German *Panpsychismus*. So the term as a modern label is post-Leibniz, but a cognate variant predates him. "Post-Leibniz coinage" was the marker's claim and is not accurate.

**Fix applied:** Changed "much later writers would name panpsychism" → "later writers would name panpsychism." This removes the assertion about when the term was coined while keeping the accurate facts: (a) Leibniz did not use the term, (b) the label came from later writers.

---

## Summary

- **13 markers found and resolved**
- **11 CONFIRMED** — markers deleted, prose untouched
- **2 required edits:**
  - Sophie Charlotte "dedicated to her memory" → softened to "grew directly out of their long conversations, published in 1710, five years after her early death in 1705" (⚠️ UNSUPPORTED → defensible)
  - "post-Leibniz coinage" → "later writers would name panpsychism" (⚠️ INACCURATE → softened; Patrizi's variant predates Leibniz by a century)
- **0 WRONG facts** requiring a correction to a specific claim (no claim was flatly false; the 2 fixes were precision/supportability issues)
- **0 `[VERIFY]` markers remaining** (grep confirms)
- **`npx tsc --noEmit` clean**

One additional enhancement made: the petites-perceptions sea-roar illustration now explicitly names the *New Essays on Human Understanding* preface as its source, making the attribution more useful to the reader.
