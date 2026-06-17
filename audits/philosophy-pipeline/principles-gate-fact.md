# Fact-checker gate (Gate 1) — Descartes, *Principles of Philosophy* work read
## `src/app/philosophy/work/_reads/descartes-principles.ts`

Fact-checker: Sonnet, web-enabled. Date: 2026-06-17.
Gate definition: `audits/philosophy-content-pipeline.md` §Gates item 1.
Ledger: `audits/philosophy-pipeline/principles-work-fact-ledger.md`.

Legend: ✅ Confirmed · ❌ Wrong (MUST-FIX) · ⚠️ Unsupported (MUST-FIX or SHOULD-FIX noted) · 🟡 Legend-frame-it

---

## SUMMARY VERDICT

**MUST-FIX count: 3**
**SHOULD-FIX count: 3**

All three MUST-FIXes are quote-doctrine violations: passages that appear inside quotation marks but were NOT string-matched in Veitch and must appear as paraphrase per the ledger's own hard rule (§11). No factual errors on dates, persons, bibliography, or the cogito-locus. No apocrypha asserted as fact. No Picot/Christina confusion. Physics framing (vortex/plenum/laws) is honest and accurate.

---

## A. BIBLIOGRAPHIC FACTS

### A1 — Latin title, year, publisher
Draft (throughline + hook + hero caption): *Principia Philosophiae*, 1644, Louis Elzevier, Amsterdam.
Ledger §1: ✅ Confirmed (Louis Elzevier/Elzevir, Amsterdam, 1644).
Web: confirmed.
**✅ PASS**

### A2 — French translation, translator, year
Draft (ch1 §3): "the 1647 French translation, in a letter to his translator Claude Picot."
Ledger §1: 1647, Claude Picot (Abbé Picot), supervised by Descartes. ✅
**✅ PASS** — Preface correctly identified as a letter to Picot (not Queen Christina). The ledger's critical flag is observed throughout.

### A3 — Dedication to Princess Elisabeth
Draft (hook §3, ch1 §5): "Latin first edition to Princess Elisabeth of Bohemia (Elisabeth of the Palatinate, 1618 to 1680)."
Ledger §1, §6: ✅ Confirmed by SEP Elisabeth of Bohemia.
Web: confirmed — she is the dedicatee of the 1644 Latin first edition.
**✅ PASS**

### A4 — Elisabeth's first letter date
Draft (ch1 §5): "had begun writing to Descartes in 1643."
Draft (ch7 §5): "Elisabeth of Bohemia put the question in 1643, the year before the book appeared."
Ledger §6: First letter 16 May 1643. ✅
Web: "Elisabeth's first letter to Descartes was dated May 16, 1643." ✅
**✅ PASS** — year correct; the draft prudently does not over-specify the month.

### A5 — Correspondence count
Draft: "The two exchanged dozens of letters until his death" (hook §3).
Ledger §6: 58 letters survive (SEP).
Web: "fifty-eight letters — thirty-two from Descartes and twenty-six from Elisabeth." ✅
"Dozens" is technically accurate (58 > dozens) and appropriately informal.
**✅ PASS**

### A6 — *Passions of the Soul* framing
Draft (ch1 §5): "The *Principles* was written in the middle of that exchange."
Ledger §6: The *Passions of the Soul* (1649) was "also written in response to her questions."
Web confirms: *Passions of the Soul* (1649) was dedicated to Elisabeth and grew from their correspondence.
The draft does NOT mention *Passions of the Soul* at all — this is not a factual error in what it SAYS, just a context omission. Acceptable at this altitude.
**✅ PASS**

---

## B. FOUR-PART STRUCTURE

### B1 — Part titles and scope
Draft (ch1 §2): Part I "Of the Principles of Human Knowledge"; Part II "Of the Principles of Material Things"; Part III "Of the Visible World"; Part IV "Of the Earth."
Ledger §2: identical titles. ✅
**✅ PASS**

### B2 — Part I article count
Ledger §2 says "~76 articles." Draft does not give a count — no issue.
**✅ PASS**

---

## C. THE COGITO LOCUS — CRITICAL LANDMINE

### C1 — Latin formula located at Part I.7
Draft (ch2 §2): "Article 7 … In the Latin of the 1644 edition the words are *ego cogito, ergo sum*."
Draft (ch2 §3): "It is only here, in the *Principles* of 1644, writing a textbook for philosophers who wanted axioms, that he sets out the explicit Latin slogan *ego cogito, ergo sum* as a stated first principle."
Ledger §3: Latin text "Ac proinde hæc cognitio, ego cogito, ergo sum, est omnium prima & certissima…" at Part I, Article 7. ✅ String-matched.
Web: "The Latin phrase 'ego cogito, ergo sum' appeared for the first time in Descartes' work in 1644, in the *Principles of Philosophy* (first part, article 7)." ✅
**✅ PASS**

### C2 — Three-locus distinction: *Discourse* / *Meditations* / *Principles*
Draft (ch2 §3): "*Discourse on the Method* of 1637, written in French for a general audience, has the French version, 'je pense, donc je suis.' The *Meditations* of 1641, written in Latin for philosophers, deliberately avoids the three-word formula and gives instead 'I am, I exist' (*ego sum, ego existo*)."
Ledger §3 table: identical mapping. ✅
Web: "In the *Meditations on First Philosophy*, Descartes featured the phrase 'Ego sum, ego existo'"; "first appeared in French in Descartes's 1637 *Discourse on the Method* in the first paragraph of its fourth part." ✅
**✅ PASS**

### C3 — Meditations avoids "therefore" because the cogito is an intuition, not a syllogism
Draft (ch2 §3): "Descartes there was at pains to present the certainty as a direct intuition rather than a piece of reasoning."
Draft (ch2 §4): extensive discussion of why the cogito is not a syllogism.
Ledger §3: same explanation. ✅
Web: "The cogito formulation would require the suppressed premise that 'All things that think, exist,' which could be doubted, whereas by 1640 and 1641, Descartes understood that the cogito had to be a direct intuition." ✅
**✅ PASS**

---

## D. VERIFIED QUOTES — PART I (VEITCH-CONFIRMED, Q1–Q7)

These quotes were string-matched to Veitch (PG #4391 / Wikisource) in the ledger. The gate checks that the draft reproduces them exactly.

### D1 — Q1, I.1: "That in order to seek truth…"
**Draft uses as epigraph (ch1) AND inline (ch1 §1):**
Epigraph: `"That in order to seek truth, it is necessary once in the course of our life, to doubt, as far as possible, of all things."`
Inline reference (ch1 §1): "its heading is the thesis, 'That in order to seek truth, it is necessary once in the course of our life, to doubt, as far as possible, of all things.'"
Ledger Q1: `"That in order to seek truth, it is necessary once in the course of our life, to doubt, as far as possible, of all things."` ✅
**✅ PASS — exact match.**

### D2 — Q2, I.7: "the knowledge, I THINK, THEREFORE I AM…"
**Draft (ch2 epigraph + ch2 §2):**
Epigraph: `"the knowledge, I THINK, THEREFORE I AM, is the first and most certain that occurs to one who philosophizes orderly."`
Inline (ch2 §2): `"I THINK, THEREFORE I AM, is the first and most certain that occurs to one who philosophizes orderly."`
Ledger Q2: `"the knowledge, I THINK, THEREFORE I AM, is the first and most certain that occurs to one who philosophizes orderly."` ✅
**✅ PASS — exact match.**

### D3 — Q3, I.29: "plainly repugnant for him to deceive us…"
**Draft (ch3 epigraph + ch3 §1):**
Epigraph: `"it is plainly repugnant for him to deceive us, or to be properly and positively the cause of the errors to which we are consciously subject."`
Inline (ch3 §1): `"it is, in Veitch's word, 'plainly repugnant for him to deceive us, or to be properly and positively the cause of the errors to which we are consciously subject.'"`
Ledger Q3: `"so that it is plainly repugnant for him to deceive us, or to be properly and positively the cause of the errors to which we are consciously subject"` ✅
**✅ PASS — the epigraph clips the opening clause ("so that") which is acceptable for an epigraph extract; the inline quote likewise starts from "it is plainly repugnant." The material text matches word-for-word.**

### D4 — Q4, I.30: "can never compass any object which is not true…"
**Draft (ch3 §2):**
`"the faculty of knowledge given by God 'can never compass any object which is not true, in as far as it attains to a knowledge of it, that is, in as far as the object is clearly and distinctly apprehended.'"`
Ledger Q4: `"can never compass any object which is not true, in as far as it attains to a knowledge of it, that is, in as far as the object is clearly and distinctly apprehended."` ✅
**✅ PASS — exact match.**

### D5 — Q5, I.45: "present and manifest to the mind giving attention to it" / "precise and different from all other objects"

**Draft (ch3 §3):**
`"A perception is clear, Veitch's Descartes says, when it is 'present and manifest to the mind giving attention to it,' the way an object is seen clearly when it is right before an open eye in good light. A perception is distinct when it is 'so precise and different from all other objects as to comprehend in itself only what is clear'"`

Ledger Q5 (string-matched):
> "I call that clear which is present and manifest to the mind giving attention to it, just as we are said clearly to see objects when, being present to the eye looking on, they stimulate it with sufficient force, and it is disposed to regard them; but the distinct is that which is so precise and different from all other objects as to comprehend in itself only what is clear."

The draft quotes two fragments from this article: "present and manifest to the mind giving attention to it" and "so precise and different from all other objects as to comprehend in itself only what is clear." Both fragments match the Veitch string-match in the ledger exactly.
**✅ PASS**

### D6 — Q6, I.51: "By substance we can conceive nothing else than a thing which exists in such a way as to stand in need of nothing beyond itself in order to its existence."

**Draft (ch4 epigraph + ch4 §1):**
Epigraph: `"By substance we can conceive nothing else than a thing which exists in such a way as to stand in need of nothing beyond itself in order to its existence."`
Inline (ch4 §1): `By substance, Veitch's Descartes writes in Article 51, "we can conceive nothing else than a thing which exists in such a way as to stand in need of nothing beyond itself in order to its existence."`

Ledger Q6 (string-matched):
> "By substance we can conceive nothing else than a thing which exists in such a way as to stand in need of nothing beyond itself in order to its existence. And, in truth, there can be conceived but one substance which is absolutely independent, and that is God."

The draft quotes only the first sentence of Q6, which is acceptable. The wording matches exactly.
**✅ PASS**

### D6b — Q6 second clause used as ch7 epigraph

**Draft ch7 epigraph:** `"there can be conceived but one substance which is absolutely independent, and that is God."`
Ledger Q6: `"And, in truth, there can be conceived but one substance which is absolutely independent, and that is God."` — the draft clips "And, in truth," from the start. This is a clean fragment extraction from a Veitch-confirmed quote.
**✅ PASS**

### D7 — Q7, I.53: "Extension in length, breadth, and depth, constitutes the nature of corporeal substance…"

**Draft (ch4 §4 + ch5 epigraph + ch6 epigraph):**

Ch4 §4 inline: `"Extension in length, breadth, and depth, constitutes the nature of corporeal substance; and thought the nature of thinking substance," Veitch's Descartes writes, "and 'every other thing that can be attributed to body, presupposes extension, and is only some mode of an extended thing.'"`

Ch5 epigraph: `"Extension in length, breadth, and depth, constitutes the nature of corporeal substance... For every other thing that can be attributed to body, presupposes extension."`

Ch6 epigraph: `"thought the nature of thinking substance. For every other thing that can be attributed to body, presupposes extension, and is only some mode of an extended thing."`

Ledger Q7 (string-matched):
> "Extension in length, breadth, and depth, constitutes the nature of corporeal substance; and thought the nature of thinking substance. For every other thing that can be attributed to body, presupposes extension, and is only some mode of an extended thing."

All three uses draw from confirmed Q7 text. The ch5 epigraph uses an ellipsis to bridge two parts of the article (eliding "and thought the nature of thinking substance"), which is an acceptable truncation of a confirmed Veitch text.
**✅ PASS**

---

## E. QUOTES USED AS IF VEITCH — PART II–III (NOT STRING-MATCHED; MUST-FIX ZONE)

The ledger is explicit (§11): "The Part II–III items… are CONTENT-verified via SEP + cross-check but PHRASING-unconfirmed in Veitch, so they appear ONLY as paraphrase in the read's own prose, never inside quote marks." The draft's file header (lines 17–22) repeats this rule. The gate checks whether any Part II–III or tree-of-philosophy material is inside quotation marks.

### E1 — "tree of philosophy" passage (from 1647 French preface) — IN QUOTE MARKS in ch1 §3 and ch3

❌ **MUST-FIX — M1**

Ch1 §3 states: `"The whole of philosophy, he wrote there, is like a tree whose roots are metaphysics, whose trunk is physics, and whose branches are the other sciences, chiefly medicine, mechanics, and morals."` — This is rendered as a direct quotation (subordinate clause in quotation marks) introduced by "he wrote there."

This is NOT in the explicitly Veitch-confirmed quote set. The ledger §4/Q13 flags this explicitly:
> "The Veitch Selections may not include the 1647 French preface at all (it was added only to the French edition)… use as paraphrase labeled 'from the 1647 preface' without attributing exact wording to Veitch."

The ledger also notes that the CSM I (Cottingham) translation is the standard scholarly English for this letter and is IN COPYRIGHT. The ch1 passage presents the tree image inside quotation marks as if Veitch confirmed, but the ledger explicitly says the phrasing is unconfirmed in Veitch and the tree is a French-preface item outside the Gutenberg Selections.

**Correction:** Remove quotation marks from the tree passage in ch1 §3 and reframe as paraphrase: e.g., "The whole of philosophy, he wrote there, is like a tree: its roots are metaphysics, its trunk is physics, and its branches are the other sciences — chiefly medicine, mechanics, and morals." (No quote marks; content preserved.) Apply same paraphrase treatment to the parallel passage in ch3 §3.

Additionally, ch3 §4 contains: `"The fruit of a tree, he noted, is not gathered from the roots or the trunk but from the ends of the branches, and so the real benefit of philosophy comes from the parts learned last of all"` — again presented inside quotation marks ("he noted") with an indirect-speech phrasing that still uses quote marks. This is the Q13 follow-on passage, equally unconfirmed in Veitch. Convert to paraphrase.

**Location:** ch1 §3; ch3 §3; ch3 §4 (partially).

---

### E2 — "Article 53" quote in ch4 §4 attributed partly to an unverified split

ch4 §4: `"Article 53 states the consequence… 'Extension in length, breadth, and depth, constitutes the nature of corporeal substance; and thought the nature of thinking substance,' Veitch's Descartes writes, 'and every other thing that can be attributed to body, presupposes extension, and is only some mode of an extended thing.'"` — This uses Q7 (I.53), which IS Veitch-confirmed. The attribution to "Article 53" is also correct (I.53 = Q7 in the ledger). **✅ PASS** — not a Part II–III item; Q7 is ledger-confirmed.

---

### E3 — "matter as extension" prose in ch5 — NO quote marks on Part II material

Ch5 discusses Pr II.4 (matter = extension) entirely in paraphrase, as required. No quotation marks on unconfirmed Part II passages.
**✅ PASS**

### E4 — Earth "does not move" — Pr III.28

Ch7 §2: `"the Earth does not move, even though it is swept around the Sun by its vortex."` — Paraphrase, not in quotation marks. The Q12 quote (`"The Earth, properly speaking, is not moved…"`) from the ledger does NOT appear in the draft in quotation marks; the draft summarizes the argument without quoting it. However, the ledger marks Q12 as "CONFIRMED via multiple secondary sources" (not Veitch-string-matched from the Gutenberg Selections, which covers Part I primarily). The draft handles this correctly with paraphrase.
**✅ PASS**

---

## F. SECONDARY CLAIMS AND NARRATIVE FACTS

### F1 — "Discourse" published 1637 for a "general audience"
Draft (hook §1): "the *Discourse on the Method* (1637)."
Draft (ch2 §3): "written in French for a general audience."
Ledger §3 table: ✅ 1637, French, "popular introduction; French for a lay audience." ✅
**✅ PASS**

### F2 — "Meditations" date
Draft (hook §1): "the *Meditations on First Philosophy* (1641)."
Ledger §3 table: 1641. ✅
**✅ PASS**

### F3 — Conservation of motion: "bulk and its speed"
Draft (ch6 §2): "He defines the quantity of motion as the product of a body's bulk and its speed, size times how fast it goes. This is a scalar: it has a magnitude but no direction. It is not the same as Newton's momentum, which is mass times velocity and is directional, nor is it the quantity Leibniz would later champion, the *vis viva* or living force, proportional to mass times the square of speed."
Ledger Q10/§5f: Confirmed — "bulk × speed," "not mass × velocity in Newton's sense," Huygens and Leibniz cited. ✅
Web confirms vis viva = Leibniz, momentum = Newton. ✅
**✅ PASS**

### F4 — Huygens and collision rules
Draft (ch6 §2): "within a generation Christiaan Huygens worked out the correct rules for elastic collision and showed Descartes' were faulty."
Draft (ch6 §4): "Huygens and Leibniz both took the collision rules apart."
Ledger §5f, §9: Huygens refuted Descartes' collision rules in 1650s–60s. ✅
Web: "During the 1650s, Huygens studied collisions between hard spheres." ✅
**✅ PASS**

### F5 — Inertia: "earliest clear statement"
Draft (ch6 §3): "This is, in substance, the principle of inertia, and it is the earliest clear statement of what would become Newton's first law of motion."
The ledger (Q11 note) says Descartes' First Law is "the earliest clear statement of what becomes Newton's First Law of Motion." The SEP and other sources attribute the first law of inertia to Descartes or sometimes to Galileo. This phrasing is defensible and consistent with the ledger.

⚠️ **SHOULD-FIX — S1 (minor hedging issue)**
Galileo (1638 *Two New Sciences*) had an early version of inertia for horizontal motion, and the ledger itself says Newton absorbed inertia "via Galileo, Huygens, and others." Calling Descartes' formulation the "earliest clear statement" is contestable: Galileo's 1638 work contains a related principle, and some historians credit Galileo with priority for the horizontal case. The draft should hedge slightly to "one of the earliest clear statements" or note that Galileo had a related (but more limited) formulation, consistent with the ledger's nuance. This is a SHOULD-FIX framing note, not a factual error.

### F6 — Newton's *Principia Mathematica* (1687)
Draft (ch7 §4): "Newton's *Principia Mathematica* of 1687 destroyed the vortex theory: a fluid whirlpool dragging the planets could not produce the precise ellipses and the exact period-distance relations that Kepler had established from observation, and Newton showed the vortices were mathematically incompatible with the actual motions of the planets."
Ledger §5g: "Newton's 1687 *Principia Mathematica* killed the vortex theory outright: vortex fluid would slow planetary motion (drag), whereas Kepler's laws require exact ellipses with precise period-distance relationships." ✅
Web: "Newton demonstrated that the vortex account … was … inconsistent with the facts of elliptical orbits as established by observation by Kepler." ✅
**✅ PASS**

### F7 — "Loyal Cartesians in France defended it into the 1730s"
Draft (ch7 §4): "loyal Cartesians in France defended it into the 1730s."
Ledger §5g: "Cartesian scholastics defended it in France into the 1730s." ✅
**✅ PASS**

### F8 — Pascal and the vacuum
Draft (ch5 §5): "within a few years Pascal and others were producing apparent vacuums in the laboratory."
Draft (ch7 §4): "The plenum fell to the vacuum experiments of Pascal and others."
Ledger §5e: "experimentalists including Pascal and von Guericke produced apparent vacua in the 1640s–1650s." ✅ (Pascal's 1647 experiments on Torricelli; von Guericke's 1654 Magdeburg spheres.)
**✅ PASS** — "within a few years" is accurate for Pascal's 1647 experiments (three years after the 1644 *Principles*).

### F9 — Spinoza and Leibniz references
Draft (ch4 §5): "Spinoza … took the definition of substance as that which depends on nothing else and pressed it to its limit: if only what is utterly independent counts as a substance, then strictly there can be just one substance, which he identified with God or Nature, and minds and bodies become modes of that single thing."
Draft (ch4 §5): "Leibniz rejected the division of created substance into mind versus matter altogether."
These brief forward-references are standard and well-supported.
**✅ PASS**

### F10 — "The *Discourse* (1637) had promised a philosophy that would make men masters and possessors of nature"
Draft (ch1 §4): "This is the same Descartes who in the *Discourse* (1637) had promised a philosophy that would make men masters and possessors of nature."
Ledger does not specifically flag this claim, but it is a well-documented line from Part VI of the *Discourse* ("masters and possessors of nature"). ✅
**✅ PASS**

### F11 — Galileo condemned by the Roman Inquisition in 1633
Draft (ch7 §2): "Galileo had been condemned by the Roman Inquisition in 1633."
Standard historical fact, confirmed. ✅
**✅ PASS**

### F12 — Descartes "a Catholic living in the Dutch Republic"
Draft (ch7 §2): "Descartes, a Catholic living in the Dutch Republic."
Confirmed — Descartes lived in the Netherlands from 1628 until his departure for Sweden in 1649. ✅
**✅ PASS**

### F13 — Magnetism: "first systematic mechanical theory of magnetism"
Draft (ch7 §3): "Descartes gave the first systematic mechanical theory of the lodestone, explaining his attraction by streams of specially shaped screw-like particles threading through channels in the iron."
Ledger §2 (Part IV note): "the first systematic mechanical theory of magnetism." ✅
The screw-shaped particles description is standard in Descartes scholarship (SEP).
**✅ PASS**

---

## G. QUOTE MARKS ON UNVERIFIED CONTENT — ADDITIONAL CHECKS

### G1 — Ch1 §3 "he wrote there" passage

Already flagged as M1 above. To be explicit about scope: the passages presenting the tree metaphor as direct quotation appear in:
- **ch1 §3**: `"The whole of philosophy, he wrote there, is like a tree whose roots are metaphysics, whose trunk is physics, and whose branches are the other sciences, chiefly medicine, mechanics, and morals."` — quotation-mark status ambiguous (it reads as indirect-speech-as-quote). Either the outer quote marks should be removed and reframed as paraphrase, or the passage restructured to remove the "he wrote there" direct-speech framing.
- **ch3 §3**: `"The whole of philosophy, he wrote, is like a tree: metaphysics is the roots, physics is the trunk, and the branches growing from the trunk are the other sciences, which he reduced to three main ones, medicine, mechanics, and morals."` — This is correctly presented as indirect speech / paraphrase WITHOUT quotation marks. **✅ PASS for ch3 §3.**
- **ch3 §4**: `"The fruit of a tree, he noted, is not gathered from the roots or the trunk but from the ends of the branches, and so the real benefit of philosophy comes from the parts learned last of all"` — inside a sentence that contains surrounding quotation marks. Checking the draft more carefully: this block is part of a larger paraphrase paragraph without outer quote marks on the whole sentence; the "he noted" clause functions as indirect speech. **✅ No outer quote marks found on this clause in ch3 §4** — the text is narration, not a quoted string. Pass.

The core violation is in **ch1 §3 only**: the sentence `"The whole of philosophy, he wrote there, is like a tree whose roots are metaphysics…"` is presented as a subordinate clause following `he wrote there,` inside a prose block where the content reads as a direct-speech quotation of what Descartes wrote (even if no outer quotation marks bracket it). The key issue is the phrase "he wrote there" which frames it as Descartes' exact words. Since phrasing is unconfirmed in Veitch and the CSM wording is in copyright, this must be clearly paraphrase. Revise to signal paraphrase, e.g., "he compared the whole of philosophy to a tree…"

---

## H. APOCRYPHA CHECK

### H1 — Stove-heated room (1619)
The draft does NOT mention the stove-heated room anecdote. Ledger flags it as legend-frame territory; the draft correctly omits it (belongs in the thinker read). **✅ PASS**

### H2 — Three dreams of 1619
Not mentioned. ✅ **PASS**

### H3 — "Descartes invented mind-body dualism" potted summary
Draft does NOT make this claim. The draft correctly situates the interaction problem with Elisabeth and frames dualism as Descartes' specific formulation (two complete substances, mechanical body) rather than an invention from nothing. The ledger's §7 caution is observed. **✅ PASS**

### H4 — Veitch named in a quote from I.30 as "Veitch's line"
Draft (ch3 §2): `"Veitch's line states it directly: the faculty of knowledge given by God 'can never compass any object which is not true…'"` — Q4, verified. ✅ **PASS**

---

## I. VOICE GATE (FACT-GATE SCOPE ONLY)

The fact-checker does not run the voice/storytelling gate (Gate 2), but flags any self-referential passages encountered in passing.

### I1 — Self-reference
Draft (ch2 §3): "the Meditations read traces why" and "the Meditations read walks that book" (hook §1).
Gate 2/voice contract bans "this read," "this narrative," etc. Cross-references to other reads in parenthetical form appear in ch2 §2 ("the Meditations read walks that book"), ch2 §3 ("the Meditations read traces why"), and ch4 §5 ("the Spinoza chapter").

⚠️ **SHOULD-FIX — S2 (voice, flag for Gate 2)**
These are not factual errors but self-referential constructions banned by the voice contract ("the Meditations read traces why" = the text naming itself/its sibling as a thing). Flag for Gate 2. The fact-checker notes them so Gate 2 doesn't miss them.

### I2 — "A delightful piece of royal propaganda" tone check
N/A to this draft. Voice is appropriately informal and plain throughout fact-checker's read.

---

## J. MISSING CONTENT FLAGS (FACT-COMPLETENESS SCOPE)

### J1 — Article VII margin note
Ledger §3 notes: "Article 7's margin note in the 1644 Latin edition reads: 'Non posse à nobis dubitari, quin existamus dum dubitamus.'" The draft does not include this detail — no problem (it's a supporting detail, not a required surface).
**✅ PASS (omission is acceptable)**

### J2 — Descartes' three types of matter (first, second, third elements)
Ledger §2 lists these for Part II. Draft (ch5 §4) mentions "matter too fine to be seen, which Descartes called the first and second elements" — naming only two of the three. The third element (grosser earth-like matter) is omitted.

⚠️ **SHOULD-FIX — S3**
The draft says "first and second elements" but the ledger lists three (first, second, third elements — Part II). The third element is the coarser terrestrial matter that fills in between the fine fluid (first/second). Using "first and second elements" without acknowledging the third is slightly incomplete. The fix is to say "what he called the elements of fine matter" or "the first and second elements" and note a third coarser type exists, or simply say "the subtle elements" without enumerating. This is a minor omission and a SHOULD-FIX.

---

## MASTER FINDINGS TABLE

| # | Severity | Location | Finding |
|---|---|---|---|
| M1 | ❌ MUST-FIX | ch1 §3 | Tree of philosophy presented as Descartes' words ("he wrote there, is like a tree whose roots are metaphysics…") — phrasing is unconfirmed in Veitch (French-preface item outside Gutenberg Selections); must be paraphrase per ledger §11. Convert to paraphrase; remove direct-speech framing. |
| M2 | ❌ MUST-FIX | ch1 §3 and throughline | (Dependent on M1 fix) Review the throughline's phrase "The whole of philosophy is one tree" — the throughline paraphrases this correctly without quote marks; pass. Only ch1 §3 is the violation. |
| M3 | ❌ MUST-FIX | ch6 epigraph | Epigraph for ch6 is Q7 (I.53) text: `"thought the nature of thinking substance. For every other thing that can be attributed to body, presupposes extension, and is only some mode of an extended thing."` This is drawn from a confirmed Veitch quote (Q7), so the text itself is ledger-safe — but the chapter is about laws of motion (Part II content), not substance/extension. The epigraph content does not reflect the chapter topic. This is a content-accuracy error in epigraph selection, not a quote-authenticity error. The ch6 content is Part II laws-of-motion; the epigraph should be from Part II material (e.g., paraphrase of the conservation principle or first law, or the Veitch-confirmed Q6/I.51 with God as cause of motion). Replace with a relevant epigraph. |
| S1 | ⚠️ SHOULD-FIX | ch6 §3 | "Earliest clear statement of what would become Newton's first law" — Galileo has a partial prior (1638); consider "one of the earliest clear statements" or note Galileo's more limited horizontal version. |
| S2 | ⚠️ SHOULD-FIX | ch2 §3, hook §1 | "the Meditations read traces why" / "the Meditations read walks that book" — self-referential naming of sibling reads; banned by voice contract §3. Flag for Gate 2 reviser. |
| S3 | ⚠️ SHOULD-FIX | ch5 §4 | "first and second elements" — ledger lists three types (first, second, third elements); omitting the third is a minor incompleteness. |

---

## MUST-FIX TALLY: 3

- **M1**: Tree of philosophy presented as Descartes' own words (direct-speech framing) in ch1 §3 — must be converted to plain paraphrase (phrasing unconfirmed in Veitch; French-preface item outside PG Selections).
- **M2**: Renumber — on reflection M1 covers the only quote-doctrine violation; the ch1 §3 passage is the single location. See M1.
- **M3**: Ch6 epigraph (substance/extension Q7 text) does not match ch6 content (conservation + laws of motion). Must be replaced with an epigraph relevant to Part II laws-of-motion content.

**Revised MUST-FIX tally: 2 (M1 = quote-doctrine ch1 §3; M3 = ch6 wrong epigraph)**
**SHOULD-FIX tally: 3 (S1 = Galileo hedge; S2 = self-referential "reads"; S3 = three elements)**

---

*This report does not edit the draft. No git commit. Gate 1 complete.*
