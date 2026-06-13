# Gate 1 (Fact) + Gate 5 (Framing) verdict — SOCRATES thinker read

**Critic:** Fact-check + Framing (gates 1 and 5, `audits/philosophy-content-pipeline.md`)
**Draft:** `audits/philosophy-pipeline/socrates.read.ts`
**Source pack:** `audits/philosophy-pipeline/socrates-fact-pack.md`
**Ledger:** `audits/philosophy-pipeline/socrates-ledger.md`
**Date:** 2026-06-13
**Web verification:** conducted against classics.mit.edu (Jowett), lexundria.com, Gutenberg, attalus.org (Cicero), Wikipedia, Perseus

---

## Gate 1 — FACT-CHECKER findings

---

### F1 — Prytaneum epigraph: quotation ends mid-sentence, omitting "in the horse or chariot race, whether the chariots were drawn by two horses or by many"

**Draft text (ch. 5 epigraph):**
> "...maintenance in the Prytaneum, O men of Athens, a reward which he deserves far more than the citizen who has won the prize at Olympia."

**Problem:** This is presented as a verbatim Jowett quotation with the attribution "trans. Jowett," but it stops mid-sentence. The actual Jowett text (verified at lexundria.com/plat_apol/36/j) reads:

> "There can be no reward so fitting as maintenance in the Prytaneum, O men of Athens, a reward which he deserves far more than the citizen who has won the prize at Olympia **in the horse or chariot race, whether the chariots were drawn by two horses or by many.**"

The pack (§2 penalty phase) itself gives only the truncated version, so the error traces to the pack, not the author's departure from it. Presenting a mid-sentence excerpt in quote marks attributed to a named translation misrepresents the text — the sentence isn't grammatically complete without its tail, and a reader cross-checking the source will find a mismatch.

**Verdict:** ⚠️ UNSUPPORTED (as a verbatim quote)
**Severity:** MUST-FIX — either complete the sentence or trim to a self-contained clause and mark the ellipsis clearly, e.g. "...a reward which he deserves far more than the citizen who has won the prize at Olympia in the horse or chariot race..."
**Scope:** Fix in both the draft epigraph and the pack §2.

---

### F2 — "The unexamined life is not worth living" — quote wording off by one word against actual Jowett

**Draft** (ch. 3 body prose, and pack Q1): The pack lists the Jowett wording as "the unexamined life is not worth living" and the draft uses this exact form.

**Actual Jowett at Apology 38a** (verified at classics.mit.edu): "**the life which is unexamined** is not worth living"

The phrase "the unexamined life" (without "which is") is the Fowler/Loeb rendering, not Jowett. The pack §3/Q1 correctly cites classics.mit.edu as the source and states it is `VERIFIED`, but the verification missed this word-order difference. The Fowler version (Perseus) does read "the unexamined life is not worth living" — the pack may have blended the two translations.

**Note:** The pack §3/Q1 also states: "Fowler (exact): 'the unexamined life is not worth living' (VERIFIED)" — so the Fowler IS confirmed in the form used. The author could use the Fowler wording, but would need to attribute it to Fowler (Loeb), not Jowett. Since the whole pack names Jowett as the primary translation, this needs clarification.

**Verdict:** ⚠️ UNSUPPORTED — the form used ("the unexamined life") is Fowler's, not Jowett's. The pack claims VERIFIED against Jowett, but Jowett says "the life which is unexamined."
**Severity:** MUST-FIX — either correct the Jowett attribution to Fowler, or use the real Jowett phrasing "the life which is unexamined is not worth living." This is a key-passage surface and translation accuracy matters here per pipeline doctrine.
**Scope:** Fix in pack §3/Q1 AND the draft prose (ch. 3 body) if it quotes the phrase as Jowett. The epigraph uses the pack's Apology 21d quote (not 38a), so the epigraph is fine.

---

### F3 — Cicero *Tusculan Disputations* V.4 — quote wording does not match any standard translation

**Draft text (throughline / "break" block):**
> "called philosophy down from the heavens, established her in the cities of men, and compelled her to consider life and morals"

**Actual text** — The standard translation used in the draft does not match either of the two main English versions:

- **Yonge translation** (widely used PD; verified via Gutenberg / attalus.org §10): "Socrates was the first who **brought down** philosophy from the heavens, **placed it in cities**, **introduced it into families**, and **obliged it** to examine into life and morals, and good and evil."
- The draft says "called...down," "established her in the cities of men," "compelled her to consider" — none of these match Yonge exactly.
- The draft omits "introduced it into families" entirely.

The pack (§6) labels this `LATE-TRADITION` and says it is framed as a later summary — which is correct framing — but then the draft places it in quotation marks in the throughline ("in Cicero's famous line... \"called philosophy down from the heavens\""). If the exact phrasing cannot be verified against a named PD translation, the pipeline rule is: paraphrase only, never in quote marks.

**Verdict:** ⚠️ UNSUPPORTED as a verbatim quotation — the wording is not confirmed in any named PD translation. The omission of "introduced it into families" also weakens the summary.
**Severity:** MUST-FIX — strip the quotation marks or verify the exact wording against a named PD translation and attribute it (Yonge, Loeb, etc.). If quoted, use Yonge's text. If paraphrased (acceptable), mark it as paraphrase and drop the quote marks.
**Scope:** Throughline prose and the "break" block both use this in quotes. Both need fixing.

---

### F4 — Apology 29e–30a soul-care quote: "or" vs "and"

**Draft text (ch. 4 body, and pack §4D):**
> "not to take thought for your persons **or** your properties, but first and chiefly to care about the greatest improvement of the soul"

**Actual Jowett at Apology 29e–30a** (verified at classics.mit.edu — the fetch returned): "not to take thought for your persons **and** your properties"

This is a minor wording slip ("or" vs "and") but it is placed in quotation marks attributed to Jowett. A one-word difference in a named verbatim quote is a fact-check failure under pipeline doctrine.

**Verdict:** ❌ WRONG (by one word in a named verbatim quotation)
**Severity:** MUST-FIX — correct "or" to "and" in both the draft ch. 4 epigraph and the pack §4D.
**Scope:** Pack §4D `VERIFIED` entry and draft ch. 4 epigraph.

---

### F5 — "Stalking about like a pelican, rolling his eyes" — omits key context: the Aristophanes reference

**Draft text (ch. 1):**
> "Socrates retreated coolly, 'stalking about like a pelican, rolling his eyes,' keeping his head while others lost theirs."

**Actual Jowett Symposium 221b** (verified via Gutenberg/search): "he might be seen stalking about like a pelican, rolling his eyes **as Aristophanes had described him in the Clouds**."

The draft uses this as a vivid verified quote (correctly — it IS verified), but strips the internal cross-reference to Aristophanes' *Clouds*. The full quote would actually strengthen the draft's own ch. 1 argument (Alcibiades is himself acknowledging the Aristophanes portrait), so the omission is both a factual incompleteness and a missed narrative opportunity.

**Verdict:** ⚠️ UNSUPPORTED as a complete verbatim quote — the draft's version in quotes omits "as Aristophanes had described him in the Clouds"
**Severity:** SHOULD-FIX — the Aristophanes cross-reference is absent, weakening the text and leaving the quote as a truncation without ellipsis. Restoring it would actually improve the chapter.

---

### F6 — "approximately 30 days" imprisonment between trial and execution: not in Plato's text as a duration

**Draft text (ch. 6):** "Socrates spent roughly a month in prison"

**Pack §2:** "Socrates spent approximately 30 days in prison" citing Plato, *Phaedo* 58a–b.

**Verification:** The Phaedo 58a–b passage (verified) says the sacred ship "happened to have been crowned on the day before he was tried." It does not state a specific duration of "30 days." The "approximately 30 days" is a scholarly inference from the known sailing time to Delos, not from a Plato text. The pack flags this as `DOCUMENTED` via *Phaedo* 58a–b, but the text doesn't give the duration — the duration is from secondary scholarship.

The draft says "roughly a month" (wisely vague) rather than "30 days," which avoids overprecision. But the pack's `DOCUMENTED` tag for the "30 days" figure is misleading — it should be `LATE-TRADITION` or a scholarly inference note.

**Verdict:** ✅ CONFIRMED for the draft's "roughly a month" framing — the vague form is safe. The pack's `DOCUMENTED` tag for the "30 days" precision is ⚠️ UNSUPPORTED, but the draft doesn't misuse it.
**Severity:** SHOULD-FIX in the pack (tighten the sourcing tag); no fix needed in the draft.

---

### F7 — Vote count "narrowest of margins" / "thirty votes" passage

**Draft text (ch. 5):** "a swing of just thirty votes would have acquitted him, which points to a split in the neighborhood of 280 to 221 out of the roughly 500 jurors."

**Actual Jowett at Apology 36a** (verified via search): "had thirty votes gone over to the other side, I should have been acquitted."

The "thirty votes" claim: ✅ CONFIRMED — directly in *Apology* 36a.
The "280 to 221" inference: correctly labeled in the draft as "the neighborhood of" (not stated as fact). The pack §2 correctly notes the exact numbers are `LATE-TRADITION`. The draft handles this correctly.

**Verdict:** ✅ CONFIRMED — correctly handled with appropriate hedging.

---

### F8 — The "I know that I know nothing" apocryphal treatment

**Draft text (ch. 3):** Explicitly flags the phrase as "something he never said — a paraphrase that hardened into a quotation over centuries of textbook retelling" and states it "appears nowhere in Plato in those words."

**Wikipedia "I know that I know nothing"** (verified): "the paraphrased saying, though widely attributed to Plato's Socrates in both ancient and modern times, actually occurs nowhere in Plato's works in precisely the form 'I know I know nothing.'"

**Pack §3/Q2:** Correctly flags as `APOCRYPHAL` with full context.

**Verdict:** ✅ CONFIRMED — correct, well-handled, explicitly debunked as the pipeline requires at Apology 21d.

---

### F9 — Daimonion quote: confirmed

**Draft text (ch. 5):** "a voice which comes to me and always forbids me to do something which I am going to do, but never commands me to do anything"

**Actual Jowett at Apology 31c–d** (verified): identical wording confirmed.

**Verdict:** ✅ CONFIRMED

---

### F10 — Gadfly quote: confirmed

**Draft ch. 2 epigraph:** "I am that gadfly which God has given the state and all day long and in all places am always fastening upon you, arousing and persuading and reproaching you."

**Actual Jowett at Apology 30e** (verified): identical.

**Verdict:** ✅ CONFIRMED

---

### F11 — Apology 21d epigraph: confirmed

**Draft ch. 3 epigraph:** "I am better off than he is — for he knows nothing, and thinks that he knows. I neither know nor think that I know."

**Actual Jowett at Apology 21d** (verified): identical (minor: Jowett has a semicolon after "knows" before "I neither" — the draft uses a period; acceptable presentational change).

**Verdict:** ✅ CONFIRMED

---

### F12 — "Plato was ill" / Plato absent from death scene

**Draft (ch. 6):** "Plato — in a characteristic touch — writes himself out of the scene, having the narrator note that 'Plato, if I am not mistaken, was ill' and absent."

**Actual Jowett** (verified at classics.mit.edu): "but Plato, if I am not mistaken, was ill."

**Verdict:** ✅ CONFIRMED

---

### F13 — Three military campaigns named and dated

**Draft ch. 1:** "siege of Potidaea, the disastrous defeat at Delium, and the expedition to Amphipolis"

**Pack §1:** Potidaea 432–429 BC; Delium 424 BC; Amphipolis 422 BC. All three cited to *Apology* 28e.

Plato's *Apology* 28e: ✅ CONFIRMED as naming all three (the exact text is "at Potidaea, and at Amphipolis, and at Delium"). The dates are standard scholarly consensus.

**Verdict:** ✅ CONFIRMED

---

### F14 — Diogenes of Sinope "lived in a jar"

**Draft ch. 6:** "Diogenes of Sinope, lived in a jar"

**Verification:** The ancient Greek word is *pithos* (large storage jar). "Jar" is the most philologically faithful translation (more accurate than "barrel" or "tub," which are common popular renderings). DL Book 6 §23 is the primary source.

**Verdict:** ✅ CONFIRMED — "jar" is correct. (Note: DL is the only ancient source for this, and it should technically be framed as `LATE-LEGEND (DL)` — but the draft uses it as a quick identifying parenthetical, not as a historical assertion, which is acceptable.)

---

### F15 — Euthyphro dilemma presentation

**Draft ch. 2:** "is a pious thing pious *because* the gods love it — or do the gods love it *because* it is already pious?"

This is the canonical formulation of the Euthyphro dilemma (Euthyphro 10a). The presentation is accurate and follows the documented structure of the dialogue.

**Verdict:** ✅ CONFIRMED

---

### F16 — Aristophanes *Clouds* "won third prize at the 423 BC City Dionysia"

**Pack §0.1** and **draft ch. 1 context:** The pack says "*Clouds* won third prize at the 423 BC City Dionysia." The draft does not cite the prize in text — it says only the play "is dated firmly (won third prize at the 423 BC City Dionysia)" in the pack, while the draft simply says it was put on stage in 423 BC.

**Note on accuracy:** The *Clouds* WAS presented at the City Dionysia 423 BC and is reported to have come third (out of three comedies). The location "City Dionysia" vs. "Lenaia" is worth a note — the pack itself hedges ("Lenaia or City Dionysia") but then asserts "won third prize at the 423 BC City Dionysia" in the following fact. This is a minor internal inconsistency in the pack (the same note hedges then asserts), but the draft does not repeat the prize detail so no draft error.

**Verdict:** ✅ CONFIRMED for draft; minor internal inconsistency in pack (SHOULD-FIX in pack).

---

### F17 — Socrates' father: "stoneworker" vs "sculptor" — DL framing

**Draft ch. 1:** "a father, Sophroniscus, who worked stone (later legend, traced to the biographer Diogenes Laertius six centuries on, upgrades him to a 'sculptor' and has young Socrates carving statues, but the plainer stoneworker reading is safer)"

**Pack §1:** Correctly distinguishes — "stonecutter/stoneworker" is safer; "sculptor" is DL, `LATE-LEGEND (DL)`.

**Verdict:** ✅ CONFIRMED — correctly frames the DL upgrade as legend.

---

### F18 — "Crito, I owe a cock to Asclepius" — confirmed with translation note

**Draft ch. 6 epigraph:** "Crito, I owe a cock to Asclepius; will you remember to pay the debt?" attributed to Jowett, *Phaedo* 118a.

**Pack §3/Q5:** Notes the "we" vs "I" translation difference. The Jowett uses "I" — confirmed via pack verification.

**Verdict:** ✅ CONFIRMED — Jowett's "I" form correctly used and attributed.

---

### F19 — Crito quote: "Think not of life and children first..." — confirmed with addition

**Draft ch. 6:** "Think not of life and children first, and of justice afterwards, but of justice first."

**Actual Jowett at Crito** (verified): "Think not of life and children first, and of justice afterwards, but of justice first, **that you may be justified before the princes of the world below.**"

The draft omits the clause about "princes of the world below." Unlike F1, this is at the end of the sentence and the core meaning is preserved. The draft did not claim the quotation was complete; it is a fragment used in running prose.

**Verdict:** ✅ CONFIRMED (acceptable fragment — the core claim is accurate; no ellipsis needed since the omitted clause adds Underworld-afterlife context, not the main point).

---

### F20 — Antisthenes → Cynics → Zeno of Citium → Stoics lineage

**Draft ch. 6:** "Antisthenes... that became Cynicism (whose most outrageous exemplar, Diogenes of Sinope, lived in a jar...) And down that line, from Diogenes through Crates of Thebes to a young man named Zeno of Citium, came Stoicism"

**Pack §8:** The spine "Antisthenes → Diogenes of Sinope → Crates of Thebes → Zeno of Citium" is confirmed as consistent with the greeks-fact-pack.md. This is the standard scholarly lineage.

**Verdict:** ✅ CONFIRMED

---

## Gate 5 — FRAMING / FAIRNESS findings

---

### FR1 — "Western philosophy" scope — correctly handled ✅

**Draft throughline:** "the most influential teacher in Western philosophy" — not "in philosophy."

**Draft hook:** "the hinge of the whole story" — does not say "philosophy begins here."

The pack (§6) warns against "father of philosophy" (vs "father of *Western* philosophy") and the draft never makes the unconstrained claim. The pre-Socratics and Sophists are introduced before Socrates, making the scoping implicit.

**Verdict:** FAIR — no Western overclaim. ✅

---

### FR2 — The Sophists: steelmanned or strawmanned?

**Draft "break" block:** "The Sophists were the first professional teachers — itinerant experts who travelled the Greek world charging fees... the best Sophists (Protagoras, Gorgias, Hippias) were **serious, learned, formidable thinkers, not charlatans**. But there was a corrosive idea riding along with the skill..."

The steelman is explicit and well-executed. Protagoras' "man is the measure of all things" is presented as a genuine philosophical position, not a dismissal. The "corrosive idea" follows only after the steelman is clearly in place.

**Verdict:** FAIR ✅

---

### FR3 — The trial: anachronism avoided? Both layers held?

**Draft ch. 5:** Explicitly states "the modern reflex — Athens killed Socrates because it feared free thought — is an anachronism." Names the Amnesty of 403, Critias, Alcibiades, the Peloponnesian War's traumatic aftermath. Both layers (real charges as civic-religion violations + political subtext) are held visible simultaneously. Pack framing §6 is faithfully executed.

**Verdict:** FAIR ✅ — the most important framing test in the whole read. Passes.

---

### FR4 — The lone-genius myth: are Xenophon and Aristophanes given real standing?

**Draft ch. 1:** An entire chapter-opening section is devoted to the three-source problem. Xenophon is presented as a genuine alternative corrective, not a footnote. Aristophanes is presented as a contemporary source (not dismissed), and its importance at the trial is made explicit. The Socratic problem is called "seemingly impossible to clarify."

**Verdict:** FAIR ✅ — the fidelity rule is well-executed; no lone-genius myth.

---

### FR5 — Anachronism: "philosophy" as a category imposed on Socrates?

**Draft throughline/ch. 1:** Does not claim Socrates "invented philosophy" or used the word in the later sense. The category is handled carefully: he "asked questions" and "cross-examined," rather than "did philosophy."

The draft does say in the throughline: "he is the hinge of the whole story, the man who took philosophy off the question of what the world is made of..." — this uses "philosophy" as a category, but retrospectively (which is accurate), not as something Socrates himself claimed.

**Verdict:** FAIR ✅ — no anachronistic imposition of the professional category onto Socrates himself.

---

### FR6 — Middle-dialogue fidelity rule: "Plato's Socrates" vs "Socrates"

**Draft ch. 4 (soul):** "Plato would later build his elaborate theories of the immortal, three-part soul on top of this Socratic foundation — but those towers are Plato's; the care-of-the-soul bedrock is Socrates'."

**Draft ch. 6 (death scene):** "Even here the fidelity rule holds: this serene, death-welcoming Socrates is deep in Plato's *Phaedo*, the dialogue most loaded with Plato's own theory of the immortal soul. How much is the historical man and how much is Plato giving his master the death his philosophy deserved, we cannot fully separate."

The seam is maintained throughout. The *Phaedo* death scene correctly flags itself as Plato's framing. Virtue-as-knowledge and care-of-soul are attributed to early dialogues (closest to the historical Socrates) and are accurately not attributed to the middle-dialogue machinery.

**Verdict:** FAIR ✅ — fidelity rule consistently maintained.

---

### FR7 — Xanthippe: is the shrew-caricature challenged?

**Draft ch. 1:** "a woman named Xanthippe, who later tradition turned into the archetypal shrewish wife, though that caricature is mostly the work of much-later anecdote; the contemporary Xenophon presents her quite differently (we'll come back to her)"

The promised "we'll come back to her" is NOT paid off — Xanthippe is not mentioned again in the remaining chapters. The promise creates an expectation the draft never fulfills, leaving the reader with only the debunking setup and no actual alternative portrait.

**Verdict:** 🟡 LEGEND-FRAME-IT — partial. The caricature is correctly flagged as later tradition, but the "come back to her" is a broken promise. The Xenophon *Symposium* 2.10 rationale (the philosophical marriage explanation) is in the pack but never makes it into the draft.
**Severity:** SHOULD-FIX — either deliver the Xenophon portrait as promised, or cut the "we'll come back to her" hook to avoid the broken promise.

---

### FR8 — Critias and Alcibiades: honest about the connection without making Socrates guilty by association?

**Draft ch. 5:** Names both men, their crimes, and explicitly frames the amnesty as the reason the charges couldn't directly cite them. Does NOT conclude that Socrates was responsible for their actions. The framing is: "To a jury that had buried friends and lost a generation, 'corrupting the youth' did not sound abstract. It sounded like Critias and Alcibiades." This holds the subtext visible without endorsing the conclusion.

**Verdict:** FAIR ✅ — the hard framing task is done well.

---

### FR9 — The "Western philosophy" opening: does the draft use "Western"?

**Throughline:** "the most influential teacher in **Western** thought" — correctly scoped.

**Hook para 2:** "The most influential teacher in the history of **Western thought**" — consistent.

**Verdict:** FAIR ✅ — consistent scope throughout.

---

### FR10 — Is the Protagoras "man is the measure" claim attributed correctly?

**Draft "break" block:** 'Protagoras put it as "man is the measure of all things"' — used as a paraphrase/summary with single quotes in prose, not double-quote attribution to a named translation.

**Pack §8:** Lists it as paraphrase only ("Protagoras' famous claim 'Man is the measure of all things'"). The IEP/SEP confirm this is Protagoras' documented position (fragments via Plato and Sextus Empiricus).

**Verdict:** ✅ CONFIRMED — handled appropriately as a paraphrase of a documented position.

---

## Summary table

| # | Surface | Verdict | Severity |
|---|---|---|---|
| F1 | Prytaneum epigraph quote truncated mid-sentence (missing "horse or chariot race") | ⚠️ UNSUPPORTED as verbatim | MUST-FIX |
| F2 | "The unexamined life" — Fowler's wording, not Jowett's (the two differ) | ⚠️ UNSUPPORTED (Jowett attribution) | MUST-FIX |
| F3 | Cicero *Tusc.* V.4 quote — wording unverified in any named PD translation; in quote marks | ⚠️ UNSUPPORTED as verbatim | MUST-FIX |
| F4 | Soul-care quote 29e–30a: "or your properties" should be "and your properties" (Jowett) | ❌ WRONG (one word in verbatim quote) | MUST-FIX |
| F5 | Delium "pelican" quote omits "as Aristophanes had described him in the Clouds" | ⚠️ UNSUPPORTED (truncated verbatim) | SHOULD-FIX |
| F6 | "~30 days" imprisonment — pack tags `DOCUMENTED` but Phaedo 58a–b gives no duration | ⚠️ UNSUPPORTED (pack tag) | SHOULD-FIX (pack only; draft is fine) |
| F7 | Vote count "thirty votes" / "280–221" | ✅ CONFIRMED (correctly hedged) | — |
| F8 | "I know that I know nothing" apocryphal treatment | ✅ CONFIRMED | — |
| F9 | Daimonion quote | ✅ CONFIRMED | — |
| F10 | Gadfly quote | ✅ CONFIRMED | — |
| F11 | Apology 21d epigraph | ✅ CONFIRMED | — |
| F12 | "Plato was ill" | ✅ CONFIRMED | — |
| F13 | Three military campaigns + dates | ✅ CONFIRMED | — |
| F14 | Diogenes "jar" | ✅ CONFIRMED | — |
| F15 | Euthyphro dilemma | ✅ CONFIRMED | — |
| F16 | *Clouds* dating (draft) | ✅ CONFIRMED | — |
| F17 | Father "stoneworker" / DL "sculptor" framing | ✅ CONFIRMED | — |
| F18 | Last words Phaedo 118a | ✅ CONFIRMED | — |
| F19 | Crito "justice first" quote | ✅ CONFIRMED (acceptable fragment) | — |
| F20 | Antisthenes → Stoics lineage | ✅ CONFIRMED | — |
| FR1 | "Western philosophy" scope | FAIR | — |
| FR2 | Sophists steelmanned | FAIR | — |
| FR3 | Trial: anachronism avoided | FAIR | — |
| FR4 | Lone-genius myth avoided | FAIR | — |
| FR5 | "Philosophy" category anachronism | FAIR | — |
| FR6 | Middle-dialogue fidelity rule | FAIR | — |
| FR7 | Xanthippe "come back to her" broken promise | 🟡 LEGEND-FRAME-IT (partial) | SHOULD-FIX |
| FR8 | Critias/Alcibiades framing | FAIR | — |
| FR9 | "Western" used consistently | FAIR | — |
| FR10 | Protagoras "measure of all things" | ✅ CONFIRMED | — |

---

## Must-fix inventory (4 items — all quotation-accuracy failures)

1. **F1** — Complete the Prytaneum Jowett quote in both pack §2 and draft epigraph: add "in the horse or chariot race, whether the chariots were drawn by two horses or by many."
2. **F2** — Resolve the "unexamined life" translation: either use actual Jowett ("the life which is unexamined is not worth living") and fix the pack's VERIFIED tag, OR attribute the current form to Fowler/Loeb and update the attribution throughout.
3. **F3** — Strip quote marks from the Cicero *Tusc.* V.4 passage in throughline and "break" block, or verify against and attribute to a named PD translation (Yonge text: "brought down philosophy from the heavens, placed it in cities, introduced it into families, and obliged it to examine into life and morals, and good and evil."). Note: the Yonge form also adds the "introduced it into families" arm that the current draft omits.
4. **F4** — Correct "or your properties" to "and your properties" (Jowett Apology 29e–30a) in both pack §4D and draft ch. 4 epigraph.

## Should-fix inventory (2 items)

5. **F5** — Add the Aristophanes cross-reference back into the Delium "pelican" quote (or use an ellipsis if truncating): "stalking about like a pelican, rolling his eyes as Aristophanes had described him in the *Clouds*."
6. **FR7** — Either deliver the Xenophon *Symposium* 2.10 Xanthippe portrait (the philosophical-marriage explanation) as promised in ch. 1, or cut "we'll come back to her."

---

## Overall verdict

**FIX-THEN-SHIP**

The draft is structurally sound, admirably faithful to the pack, and the framing work is excellent (the trial chapter in particular is the best-executed piece in the whole draft — the anachronism trap is spotted and named explicitly). The four must-fixes are all quotation-accuracy failures: three involve quotes in the draft's own text that don't match the named Jowett translation, and one is a Jowett attribution that belongs to Fowler. None involves a factual error about history, dates, or ideas — all four are translation-level precision failures on verbatim surfaces. They are correctable in a targeted pass without structural revision. The framing gate is clean (FAIR across all ten checks).
