# Gate 3 — Comprehensiveness audit
## Descartes, *Discourse on the Method* — WORK read (`discourse.ts`)

Critic: Comprehensiveness (gate 3, per `audits/philosophy-content-pipeline.md`)
Date: 2026-06-17
Draft read: `src/app/philosophy/work/_reads/discourse.ts`
Fact ledger: `audits/philosophy-pipeline/discourse-work-fact-ledger.md`
Gate scope: Must-cover checklist for a WORK read; COVERED / THIN / MISSING; MUST-ADD vs SHOULD-CONSIDER.

---

## Method

Built an independent must-cover checklist from what a WORK read of the *Discourse* owes a reader:
the structure that makes it intelligible (six parts, their order and logic), every major philosophical
move the text makes, the publication decisions that are themselves arguments, the suppressed-physics
context that shadows Part V, and the historical reception that matters (the Cartesian circle, at
minimum). Then checked every item against the draft.

---

## Independent must-cover checklist

### A. Structural intelligibility

| # | Item | Status | Rating |
|---|---|---|---|
| A1 | Six-part structure named and their sequence explained | COVERED (throughline + ch6 closing synthesis) | — |
| A2 | Discourse as preface, not standalone text — the three companion essays named and described | COVERED (hook ch1, caption) | — |
| A3 | Why the *Dioptrique* / *Météores* / *Géométrie* essays matter — the Discourse is the METHOD, the essays are the PROOF | THIN | MUST-ADD |
| A4 | Autobiographical form as philosophical argument (authority is first-person experience, not tradition) | COVERED | — |
| A5 | Anonymous publication — what it signals and why | COVERED (ch6) | — |

**A3 explanation.** The draft names the three essays and even mentions the coordinate system (hook), but nowhere makes explicit the architectural relationship: the Discourse claims that its four rules, if applied, yield certain knowledge — the three essays are the worked proof of that claim. The reader who finishes the draft does not know this. This is not decorative; it is why the book was structured as it was and why understanding it matters for understanding the Discourse's ambitions. The companion essays are named but not activated.

---

### B. The four rules (Part II)

| # | Item | Status | Rating |
|---|---|---|---|
| B1 | All four rules stated and unpacked | COVERED | — |
| B2 | Rules traced to mathematics as their model | COVERED (ch2) | — |
| B3 | The *Regulae ad Directionem Ingenii* (the 21-rule unpublished precursor) acknowledged | COVERED (final para ch2: "already a distillation") | — |
| B4 | The analogy from architecture / town planning | COVERED (ch2) | — |
| B5 | What "clear and distinct" actually means — the criterion that does the real work throughout the book | THIN | MUST-ADD |

**B5 explanation.** "Clear and distinct perception" is the criterion invoked in Rule 1 and then silently carried through the entire argument: it is how Descartes trusts the cogito, the foundation for his God proof, and the thing the Cartesian circle objection targets (clear perception needs God to be trusted; God was proved by clear perception). The draft gives the four rules, including the "clearly and distinctly" wording, but never stops to explain what "clearly and distinctly" means as a technical test — what marks a perception as meeting it. Without that, the God proof and the circle objection are incompletely grounded in the reader's understanding.

---

### C. Provisional morality (Part III)

| # | Item | Status | Rating |
|---|---|---|---|
| C1 | Three maxims stated and their logic explained | COVERED | — |
| C2 | The "provisional" label and what it means philosophically | COVERED (explicitly flagged ch3) | — |
| C3 | The traveler-in-a-forest analogy | COVERED (second maxim) | — |
| C4 | Stoic parallel (third maxim vs. Epictetus) named but not over-claimed | COVERED ("does not cite them") | — |
| C5 | Why morality is provisionally deferred but action is not — the asymmetry between theory and practice | COVERED (ch3 opening) | — |
| C6 | What the provisional morality is NOT — Descartes is not deriving ethics from the method here; the point that he never did build a permanent ethics from first principles | MISSING | SHOULD-CONSIDER |

**C6 explanation.** The draft correctly frames these maxims as provisional. It does not note that Descartes never replaced them — he planned a gated ethics (see *Les Passions de l'Âme*, 1649) but the foundational ethics he promised never materialized in the rationalist mode. Mentioning this is SHOULD-CONSIDER rather than MUST-ADD because the draft's job is the *Discourse*, not the whole career; but even at the WORK level, an honest reader might wonder whether "provisional" means "to be replaced by better rules later" — and the honest answer is complicated.

---

### D. Part IV — cogito, God proof, mind-body (the philosophical heart)

| # | Item | Status | Rating |
|---|---|---|---|
| D1 | The scope and purpose of methodic doubt explained | COVERED | — |
| D2 | The argument step: senses can deceive, therefore untrustworthy | COVERED (ch4) | — |
| D3 | The argument step: even mathematics falls, because one might be wrong in every proof | COVERED (ch4) | — |
| D4 | The **evil demon** (or deceiving God) as the strongest skeptical hypothesis | MISSING | MUST-ADD |
| D5 | The cogito as discovery, not syllogism — and the "therefore" debate | THIN | MUST-ADD |
| D6 | What Descartes infers he IS from the cogito (a thinking thing; no body required) | COVERED | — |
| D7 | The God proof: from idea of a perfect being in an imperfect mind | COVERED | — |
| D8 | The Cartesian circle objection named and stated | COVERED (last para ch4) | — |
| D9 | The silent argument step: God's non-deception licenses clear and distinct perception | THIN | MUST-ADD |
| D10 | The claim that the external world therefore exists, and why this depends on God's non-deception | COVERED (implied but thin) | SHOULD-CONSIDER |

**D4 explanation.** The draft says Descartes "tries to suppose that everything is false" but never introduces the evil demon (or the deceiving God), the device that makes the doubt maximally radical. The doubt the draft describes is epistemically weaker — it relies on the possibility of sense-deception and mathematical errors. The full Cartesian doubt goes further: what if a supremely powerful being is systematically making me wrong about everything, including mathematics? The Discourse version is admittedly less developed than the *Meditations* (no Meditation I), but the draft's ch4 implies the doubt reaches mathematics only because "people sometimes make mistakes in proofs" — which is a much weaker argument. The real force of the demolition is a hypothetical powerful deceiver, and the draft omits it. This is a silent missing link: the reader is told everything falls, but not told the mechanism that fells mathematics.

**D5 explanation.** The draft presents the cogito as "the very act of doubting refutes the doubt" but does not address whether "I think, therefore I am" is an inference (a syllogism with "whatever thinks exists" as the suppressed premise) or an immediate intuition. This matters because if it is a syllogism, it already presupposes that thinking things exist — which begs the question. Descartes himself insisted it was not an inference but an immediate perception. The draft's phrasing ("a thought requires a thinker") is actually the syllogistic reading. It plants the most common misunderstanding of the cogito without flagging the debate. This is a silent missing link in the argument chain.

**D9 explanation.** The draft narrates the God proof and the Cartesian circle but does not fully close the loop on why God matters for the epistemology: God's non-deception is the license for trusting clear and distinct perceptions, which is what allows Descartes to rebuild knowledge of the external world. The draft mentions God "cannot be a deceiver" and "the faculties God gave him can be trusted when used carefully" but the connection to clear and distinct perception — the thing that makes the circle circular — is left implicit.

---

### E. Part V — body-machine, animal automata, suppressed Le Monde

| # | Item | Status | Rating |
|---|---|---|---|
| E1 | Suppression of *Le Monde* and the Galileo context | COVERED (ch5 opening) | — |
| E2 | The body as machine: mechanical account of circulation and the heart | COVERED (ch5) | — |
| E3 | The dispute with Harvey — Descartes' account of blood circulation is WRONG by Harvey's discovery | MISSING | MUST-ADD |
| E4 | Animal automata: the documented position (no rational soul; behavior mechanically explicable) | COVERED | — |
| E5 | The stronger claim Descartes did NOT straightforwardly make (animals feel nothing whatever) | COVERED (framed as "debated by scholars") | — |
| E6 | Two tests distinguishing humans from machines: language and flexible reason | COVERED | — |
| E7 | The human rational soul as specially created, surviving bodily death | COVERED | — |
| E8 | Descartes "did not invent dualism" — the corrective is present | COVERED (end of ch5) | — |
| E9 | The interaction problem as DESCARTES' invention — the new difficulty the body-as-machine creates | COVERED | — |

**E3 explanation.** Part V contains Descartes' mechanical account of how the heart works (expansion by heat, not by muscular contraction as Harvey argued). Descartes explicitly defends his account against Harvey. This is important for a WORK read because: (a) it is an extended passage in Part V, not a footnote; (b) it is factually wrong, and the *Discourse* was already being written after Harvey's 1628 *De Motu Cordis*; (c) the dispute with Harvey is one of the places Descartes' mechanistic commitments led him to a false result — which is directly relevant to the larger claim about how far a priori mechanical reasoning can take you in physics. Omitting the Harvey dispute leaves the reader with no example of the method's failure modes inside the book itself.

---

### F. Publication decisions and the Galileo context

| # | Item | Status | Rating |
|---|---|---|---|
| F1 | The decision to write in French rather than Latin — what it argues | COVERED | — |
| F2 | The verified Vatier letter on "even women" — correctly sourced to the letter, not the text | COVERED (end of ch6) | — |
| F3 | The Galileo condemnation of 1633 and why *Le Monde* was suppressed | COVERED (ch5) | — |
| F4 | The anonymous title page — named and its function explained | COVERED | — |
| F5 | The "lords and possessors of nature" program — science as mastery, medicine as crowning application | COVERED | — |
| F6 | The cooperative science argument — why one man cannot do it alone; the public request for experimental assistance | COVERED (ch6) | — |
| F7 | The tension between the intensely first-person cogito at the book's center and the collective science program at its close | COVERED (ch6, last para) | — |
| F8 | Why the Discourse prefaced the essays specifically (not a separate publication) — the rhetorical/argumentative function | THIN | SHOULD-CONSIDER |

**F8 explanation.** The draft establishes that the Discourse IS the preface to the three essays, but never quite explains WHY Descartes chose this packaging. The essays prove the method works on real problems; publishing them together was the proof-of-concept argument. The draft covers this only obliquely in the hook; making it explicit once would complete the architecture.

---

### G. Reception and afterlife (minimum for a WORK read)

| # | Item | Status | Rating |
|---|---|---|---|
| G1 | The Cartesian circle — named and stated | COVERED (ch4) | — |
| G2 | The objectors (Mersenne, Arnauld) named as the debate's immediate participants | MISSING | SHOULD-CONSIDER |
| G3 | The *Meditations* as the fuller working-out — cross-link present | COVERED | — |
| G4 | The *Principles of Philosophy* (1644) as the formal Latin axiom's home | COVERED | — |
| G5 | The Elisabeth of Bohemia challenge (the interaction problem pushed back on Descartes) | MISSING | SHOULD-CONSIDER |
| G6 | The *Discourse* as the document that made Descartes' scientific program public — and why it was a personal risk | COVERED (ch6) | — |

**G2 note.** The draft mentions the Cartesian circle and says "critics pounced at once" and "Mersenne raised it in the Second Objections; Arnauld pressed it in the Fourth" — this is correctly in the text (last para, ch4). COVERED; my initial read missed this.

**G5 explanation.** Elisabeth of Bohemia is the canonical figure who challenged Descartes on exactly the problem the draft raises at the end of ch5 — how does the mind move the body if they are categorically separate? She wrote to him in 1643, and the correspondence pushed him toward the *Passions of the Soul*. The framing gate (gate 5) has this as a required framing surface (women the canon dropped). It does not need to be long, but a single sentence noting that Elisabeth's correspondence pressed Descartes on exactly the interaction problem the draft names at ch5's close would be meaningful. Rated SHOULD-CONSIDER rather than MUST-ADD because the pipeline framing gate (gate 5) is the primary enforcer here; the comprehensiveness gate can flag it but defers.

---

### H. Meditations differentiation check

The gate specifically asks to note any place that duplicates the *Meditations* work read instead of going its own way.

| # | Item | Assessment |
|---|---|---|
| H1 | Cogito treatment | Goes its own way — correctly frames it as French discovery in autobiography, not systematic withdrawal; flags that "je pense, donc je suis" is the 1637 text and Veitch's COGITO ERGO SUM is a gloss. Distinct from what the Meditations read would owe. |
| H2 | God proof | Correct differentiation — explicitly says "this is a sketch; the full version is the work of the *Meditations*" and cross-links. |
| H3 | Mind-body | Correctly marks the Discourse as the seed and the Meditations as the full treatment. |
| H4 | Methodic doubt | The Discourse treatment (ch4) is weaker than the Meditations treatment but the draft does not adequately explain WHY — the evil demon is the device that makes the Meditations doubt maximally radical and the Discourse doubt less so. Without naming the evil demon, the reader cannot understand what the Meditations does differently. This absence reinforces the D4 gap above. |
| H5 | "I am, I exist" vs "I think therefore I am" | The draft correctly distinguishes the *Discourse* formulation from the *Meditations* formulation (last para ch4). |

No duplication found — the draft is correctly Discourse-centric. The main risk is omission (D4, D5) rather than importing the Meditations' concerns.

---

## Summary of findings

### MUST-ADD (4)

| # | Item | Where in draft | Why blocking |
|---|---|---|---|
| MA-1 | **The three companion essays as proof-of-concept for the method** (A3) | Hook / ch6 mention the essays but never activate the architectural relationship | The Discourse is a preface AND an argument that the method works; the essays are the evidence; without this the reader cannot understand why the book was packaged this way |
| MA-2 | **The evil demon / deceiving God hypothesis** (D4) | Ch4 — methodic doubt section | The draft's doubt fells only the senses and mathematics-by-human-error; the device that makes the demolition complete (and that the God proof answers) is a supremely powerful deceiver; its absence is a silent gap in the argument chain between "I doubt everything" and the cogito |
| MA-3 | **The cogito as intuition, not syllogism — the "therefore" debate** (D5) | Ch4 — cogito section | The draft's gloss ("a thought requires a thinker") is the syllogistic reading; Descartes explicitly rejected this framing; shipping the syllogistic reading without flagging the debate plants the most common misunderstanding of the cogito |
| MA-4 | **Descartes' mechanical account of the heart vs. Harvey — and that Descartes was wrong** (E3) | Ch5 — body-machine section | The dispute with Harvey is an extended passage in Part V; Descartes was factually wrong; the error is the most concrete example inside the book of the method's limits, and leaving it out allows the body-machine chapter to read as if the mechanical program was uniformly successful |

### SHOULD-CONSIDER (4)

| # | Item | Priority |
|---|---|---|
| SC-1 | **"Clear and distinct" as a technical criterion** — what it actually means and why it is the load-bearing test throughout the God proof and the circle objection (B5) | High — readers who don't know what it means cannot follow the circle |
| SC-2 | **The permanent ethics Descartes never wrote** — the provisional morality was never replaced (C6) | Medium |
| SC-3 | **Elisabeth of Bohemia's correspondence and the interaction problem** — the woman who pushed Descartes hardest on exactly the gap ch5 names (G5) | Medium (framing gate is primary enforcer) |
| SC-4 | **Why the preface-to-essays packaging was the proof-of-concept argument** — more explicit than the current hook (F8) | Low (partially addressed in A3 / MA-1) |

---

## No duplication with Meditations work read found

The draft correctly differentiates by foregrounding the Discourse's autobiographical form, French language, and popular-preface register. Cross-links to the *Meditations* and *Principles* are used correctly to orient the reader rather than to import those texts' content. The differentiation is clean.

---

## Gate verdict

4 MUST-ADD findings. The draft is strong on structure, voice, and the provisional morality chapter; weak on the argument-chain links inside Part IV (the evil demon omission and the syllogism trap in the cogito passage are the two load-bearing gaps). The Harvey error in Part V is both a factual gap and the book's own most instructive self-critique — its omission leaves the body-machine chapter cleaner than the text warrants.
