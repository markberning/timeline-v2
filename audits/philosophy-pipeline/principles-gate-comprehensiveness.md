# Comprehensiveness gate — Descartes, *Principles of Philosophy* (WORK read)

Gate 3 of `audits/philosophy-content-pipeline.md`.
Draft: `src/app/philosophy/work/_reads/descartes-principles.ts`
Ledger: `audits/philosophy-pipeline/principles-work-fact-ledger.md`
Critic: Sonnet (web-enabled), independent checklist.

Verdict columns: **COVERED** / **THIN** / **MISSING**
Action columns: **MUST-ADD** / **SHOULD-CONSIDER** / **OK-SELECTIVE**

---

## 1. Checklist against the brief's required topics

### 1a. The textbook/system ambition — why write it after the *Meditations*?
**COVERED — OK-SELECTIVE**

The draft opens with a throughline that correctly frames the *Principles* as the
"textbook" Descartes wrote to compete with Jesuit college curricula (hook ¶1), the
claim that it lays out "the whole of his thought in one place, in order, as a
system" (hook ¶2), and the distinction from the *Meditations* ("not an argument
staged for drama but a curriculum," ch1 ¶1). The 1637 *Discourse* promise to make
men "masters and possessors of nature" is also invoked (ch1 ¶4) as the motivating
ambition. The audience — the universities, not a literary public — is explicitly
stated (hook ¶1).

One nuance that is lightly touched but not fully unpacked: Descartes had suppressed
*Le Monde* in 1633 after Galileo's condemnation. That suppression is the proximate
reason he had never published a systematic physics, and the *Principles* was the
deferred project finally released. The draft gestures at the Galileo avoidance in
ch7 but does not connect it to why the *Principles* was written when it was (1644 —
three years after the *Meditations* and eleven after *Le Monde*). This is a
SHOULD-CONSIDER enrichment, not a gap that breaks the read.

---

### 1b. Part I: doubt → cogito → God-no-deceiver → clear-and-distinct → substance/attribute/mode
**COVERED — OK-SELECTIVE**

All five nodes are present and given their own full chapter:
- Ch2 (doubt + cogito, with the crucial locus point — *Principles* is where the
  Latin three-word formula lives, not the *Meditations*);
- Ch3 (God-no-deceiver at Pr I.29–30, Cartesian circle named and handled honestly);
- Ch3 (clear and distinct perception defined at Pr I.45, the *Principles*' own
  service vs. the *Meditations*' implicit use);
- Ch4 (substance/attribute/mode at Pr I.51–53, with the downstream influence on
  Spinoza and Leibniz).

The argument chain within Part I is complete: cogito → proofs of God → God as
guarantor → clear-and-distinct rule → definition of substance as the tool for
the physics. No silent gaps.

One thing that is THIN: the **analysis of error** (Pr I.29–43, Articles on will
vs. intellect and why we err only when will outruns intellect). This is Part I's
third major contribution alongside the cogito and God-guarantee, and it does not
appear in the draft. The Meditations read presumably covered this, so the omission
may be a deliberate differentiation — but since the draft does not flag the omission,
it reads as an accidental gap. This is a **SHOULD-CONSIDER**: a single sentence
in ch3 noting that Part I also explains error (will exceeding intellect), with a
cross-ref to the *Meditations* read rather than re-running the argument.

---

### 1c. Part II: matter = extension, plenum/no vacuum, conservation of motion + laws of nature
**COVERED — OK-SELECTIVE**

All four nodes covered in chs 5 and 6:
- Matter = extension (ch5 ¶1–2, clearly derived from Part I);
- No atoms (ch5 ¶3 — correctly stated);
- Plenum/no vacuum (ch5 ¶4–5 — the argument from the identity of extension and
  body is spelled out, not just asserted; Pascal and von Guericke named as the
  empirical counter);
- Conservation of motion (ch6 ¶1–2, the scalar vs. vector distinction with Huygens
  and Leibniz named as correctors);
- Three laws of nature (ch6 ¶3–4, law 1 = inertia correctly flagged as the earliest
  clear statement; law 3 failures stated honestly).

The honest-warts axis (`§9` of the ledger) is carried throughout: the collision
rules were wrong, the conservation quantity was wrong in direction, the three-law
survival summary credits what held and what fell. Good.

One gap in Part II: **the three types of matter** (Descartes' first, second, and
third elements — the "subtle" fluid matter that fills the plenum and carries the
planets). The ledger flags this in §2 (structure) and §5e (plenum), but the draft
does not name the elements at all. The reader of ch5 learns the world is full of
invisible matter but never learns that Descartes gave it a taxonomy. This is a
**SHOULD-CONSIDER** (a clause in ch5 ¶4 or ch7 ¶1), not a MUST-ADD, because
the three-element model is deeply entangled with the vortex cosmology (ch7) and
is primarily a Part III apparatus — the draft is not wrong to defer it.

---

### 1d. Part III: vortex cosmology
**COVERED — OK-SELECTIVE**

Ch7 ¶1 covers the vortex model adequately: planets embedded in a fluid whirlpool
around the Sun; other stars = centers of their own vortices; comets = bodies
wandering between vortices. The connection to the plenum is made explicit (no empty
space → something must carry the planets). Newton's *Principia* (1687) is named as
the kill shot, with the precise reason (vortices cannot produce Kepler's
period-distance relations), and the lag of French Cartesian defense into the 1730s
is noted.

**THIN: The Galileo-hedge paragraph (ch7 ¶2)** covers the Earth "does not move"
device adequately (relational motion definition, Copernican results without the
dangerous claim). This is the famous sophism and it is handled fairly. No gap here.

---

### 1e. Part IV: earth, magnetism
**COVERED (magnetism) / THIN (earth)**

Magnetism is named in ch7 ¶3 as "the most admired stretch" of Part IV, with the
correct substance: "streams of specially shaped screw-like particles threading
through channels in the iron." The read also correctly notes this was the "first
systematic mechanical theory" of magnetism — the ledger's §5g supports this claim.

The rest of Part IV (mountains, seas, tides, fire) is compressed to a three-item
list in ch7 ¶3 with no worked example. For a WORK read this is thin but defensible:
the draft's stated strategy is to show the *shape* of the enterprise (everything
by matter + motion) rather than to walk every one of the 207 articles in Part IV.
The mechanization of sensory qualities (color, warmth, smell) is correctly treated
as the through-line of Part IV rather than any single topic.

**SHOULD-CONSIDER:** one specific worked example from Part IV beyond magnetism (fire
or tides — both are among Descartes' most discussed mechanical reductions) would
demonstrate the pattern more vividly than a list. Not a MUST-ADD.

---

### 1f. The "tree of philosophy" image
**COVERED — OK-SELECTIVE**

Present in ch1 ¶2–4 (three full paragraphs) and in the `brk` section ¶2. The
source is correctly identified as the 1647 French preface letter to Picot (the
"Letter from the Author"), not the 1644 Latin edition, and the ledger (§4/Q13)
carries the correct attribution. The draft paraphrases rather than quotes (correct
per ledger §11: CSM wording only, Veitch may not cover the preface, so paraphrase
is the gated choice). The two-part image (roots/trunk/branches + fruit at the tips)
is both present. Fruit/payoff angle (medicine, mechanics, morals) is in ch1 ¶4.

One fine point: the draft introduces the tree in ch1 before telling the reader that
the preface was written three years after the 1644 Latin edition. The chronology is
stated ("three years after the Latin edition, in the preface to the 1647 French
translation") but comes in the middle of the discussion rather than upfront. This
is a framing observation, not a comprehensiveness gap.

---

### 1g. Elisabeth of Bohemia and the interaction problem
**COVERED — OK-SELECTIVE**

Elisabeth appears in three places: the throughline (a sentence on "the deepest
unsolved problem"), the hook (¶3, nearly a full paragraph with her dates, the
correspondence, and the objection stated in Descartes' own terms — "causation
works by contact and contact needs extension, and the mind has none"), and ch1 ¶5
(the "deepest crack" framing, plus the note that the *Passions of the Soul* 1649
also grew from her questions).

The closing paragraph of ch7 (¶5) returns to her: "the deepest unsolved problem,
how an unextended mind could ever move an extended body, came from the princess to
whom the book was dedicated." And: "Elisabeth of Bohemia put the question in 1643,
the year before the book appeared; Descartes never answered it; and it is still open."

This is excellent. The ledger (§6) flags the potted-summary risk ("Elisabeth is NOT
a sidebar") and the draft obeys it fully. Her philosophical standing is clear; the
objection is stated precisely; Descartes' non-answer is acknowledged. The framing
gate's requirement (women as genuine thinkers, not sidebars — §gate 5 of the
pipeline) is satisfied here.

One small gap: the draft never mentions that 58 letters survive or quantifies the
correspondence at all, which would help the reader grasp its depth. This is a
SHOULD-CONSIDER (a clause, not a paragraph).

---

### 1h. Supersession by Newton
**COVERED — OK-SELECTIVE**

Newton's 1687 *Principia Mathematica* appears in ch7 ¶4 as the explicit kill of
the vortex theory, with the mechanism named (Kepler's laws + ellipses + period-
distance relations incompatible with vortex drag). The plenum falls to Pascal and
Newton's requirement for void space. The collision rules fall to Huygens. No-atoms
falls to chemistry (unnamed but gestured at as "the nineteenth century"). The honest
summary in ch7 ¶5 separates what was wrong (the details) from what survived (the
ambition, the inertia laws, the mechanistic framing).

The honest-warts framing is very good throughout and matches the ledger's standing
requirement (§9: "The Principles is the most complete statement … and it was wrong
in almost all its empirical claims").

---

## 2. Silent argument-chain gaps

The draft's argument chain within Part I runs: doubt → cogito → proofs of God →
God as guarantor → clear-and-distinct rule → substance taxonomy → matter =
extension. Each link is present and the transitions are explicit. No silent gaps.

The derivation of the laws of nature (ch6 ¶1: "he derives it not from observation
but from the nature of God") is correctly stated and connected back to the Part I
metaphysics (God's immutability). The connection from Part II physics to Part III
cosmology (ch7 ¶1: "because the world is a plenum with no empty space, the planets
cannot coast through a void") is explicit. The connection from Part III back to
Part II (plenum drives the vortex) is also stated.

One chain link is implicit rather than stated: **why the existence of God (Part I)
entails that God created matter with a fixed quantity of motion (Part II)**. The
argument in ch6 ¶1 jumps from "God is immutable" to "God conserves the total motion
he first gave the world," without the middle step that God's immutability means God
acts in the same way always, and an immutable creator who set the world in motion
would not vary the total. This is a **SHOULD-CONSIDER** (one sentence to close the
gap), not a MUST-ADD — the causal logic is implicit enough that a careful reader
follows it.

---

## 3. Duplication checks (vs. *Meditations* read and *Discourse* read)

The draft is explicitly written to go deeper than the other Descartes reads and
not duplicate them. Checking against what the Meditations read covers (per the
ledger's references and the pipeline's structure):

- The cogito is handled here differently and correctly: ch2 ¶3 explains that the
  *Principles* is where the Latin three-word formula lives, contrasting it with
  both the Discourse (French) and the *Meditations* ("I am, I exist" without
  "ergo"). This is the distinctive contribution of the *Principles* read, and it
  is well done.

- The God proofs: the draft covers them quickly ("Articles 14 through 28 run the
  proofs," end of ch2 ¶5) without walking them, on the assumption the Meditations
  read does that. This is correct differentiation — the *Principles* adds no new
  God proofs not in the *Meditations*, so a pointer is the right depth.

- The substance/attribute/mode vocabulary is something the *Meditations* uses but
  does not define formally. The draft correctly identifies this as the *Principles*'
  own service (ch3 ¶3 on clear and distinct; ch4 on substance/attribute/mode),
  and goes deeper here than the Meditations read would need to. The downstream
  influence on Spinoza (ch4 ¶5) adds something neither the Meditations nor the
  Discourse read would supply.

- The physics of Parts II–IV is absent from both the *Meditations* (stops at "the
  material world in general") and the *Discourse* (programmatic, not technical).
  The draft is correct that this is the *Principles*' distinctive territory.

No problematic duplication found. The draft has done a good job of using the
Descartes reads as a ladder rather than re-climbing the same rungs.

---

## 4. MUST-ADD items

**MUST-ADD count: 0**

There are no gaps that qualify as must-add under the gate's definition ("genuinely
essential gaps"). Every item on the brief's required checklist is at least covered
and most are well covered. The should-considers below are real but not blockers.

---

## 5. SHOULD-CONSIDER items (selective is correct — these are improvements, not blockers)

**SC-1 — The analysis of error (Part I)**
Part I has three major contributions: the cogito, the God-guarantee, and the theory
of error (will exceeds intellect when we rush to judge). The draft covers the first
two fully but omits the third. One sentence in ch3 noting the existence of the
error theory and cross-referencing the Meditations read would close the gap without
re-walking the argument. Low effort, adds completeness.

**SC-2 — Why 1644? The suppressed *Le Monde* backstory**
The *Principles* was partly the deferred physics Descartes had shelved after
Galileo's 1633 condemnation. The draft covers the Galileo hedge in ch7 but does
not connect it to the book's origins. A clause in ch1 (e.g., "the book Descartes
had been unable to publish for eleven years, once Galileo's fate made the
heliocentric physics dangerous") would deepen the "why this book, why now" frame.

**SC-3 — The three elements of matter**
Descartes' taxonomy of subtle matter (first, second, third elements) is named in
the ledger (§2, Part II summary) but absent from the draft. It underlies the
plenum (ch5) and the vortex cosmology (ch7). A clause in the plenum section
(ch5 ¶4 or ch7 ¶1) naming the elements and what they do would complete the bridge
between the abstract plenum argument and the concrete cosmological mechanism.

**SC-4 — The correspondence depth with Elisabeth**
Fifty-eight letters over six years is a substantial intellectual exchange — enough
to say it was genuinely formative, not a courtesy. The draft treats it correctly
in character but a brief quantification ("their letters, nearly sixty of them,
ran until his death") would sharpen the scale.

**SC-5 — A worked Part IV example beyond magnetism**
The draft covers Part IV by listing mountains/seas/fire/magnetism and then giving
magnetism its full treatment. A second concrete mechanism (fire = fast surface
particles; tides = vortex pressure on the sea floor) would let the reader see the
*pattern* rather than inferring it from a list. Low priority given the draft's
stated compression strategy.

---

## 6. Overall verdict

The draft is **substantively complete**. Every item in the required checklist is
present. The argument chain is intact with no silent missing links. The differentiation
from the *Meditations* and *Discourse* reads is well executed — the draft goes
deeper where the *Principles* goes further (the physics, the vocabulary, the cogito
locus) and correctly delegates to those reads what they cover (the Meditations' God
proofs, the Discourse's biographical arc). Elisabeth of Bohemia is handled at full
philosophical weight, not as a sidebar. The honest-warts treatment of the physics
failures is thorough and matched to the ledger's standing requirement.

**MUST-ADD count: 0. SHOULD-CONSIDER count: 5** (none blocking; SC-1 and SC-2
are the highest-value additions if any revision pass is run). The draft passes
Gate 3.
