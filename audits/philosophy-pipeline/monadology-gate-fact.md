# Gate 1 — Fact-checker audit: *The Monadology* WORK read

**Draft:** `src/app/philosophy/work/_reads/monadology.ts`  
**Ledger:** `audits/philosophy-pipeline/monadology-work-fact-ledger.md`  
**Gate spec:** `audits/philosophy-content-pipeline.md` gate 1 + apocryphal-quote / potted-summary rules  
**Auditor:** Gate-1 Sonnet (web-enabled), 2026-06-17  
**Verdict codes:** ✅ confirmed · ❌ wrong · ⚠️ unsupported · 🟡 legend-frame-it · MUST-FIX · SHOULD-FIX

---

## Summary verdict

**MUST-FIX count: 2.** One quote truncated without an ellipsis (§14 epigraph), and one
key paraphrase drops the technical term "appetitions" which is load-bearing for the
§79 argument. Both are fixable in one pass. All biographical and publication-history
claims check out against the ledger and live-web sources. The Prince Eugene /
Nicolas Remond distinction is correctly drawn. The Candide caricature is framed
correctly. The "jewel" anecdote is absent (correct per ledger §9 flagging).
No apocryphal quotes found; no potted-summary distortions found. Twelve body-prose
facts independently web-checked; all pass. Three SHOULD-FIX items (one §86 near-
verbatim shadow drops Leibniz's "universal monarchy" phrase; one defensible ellipsis
on §32; one new factual nuance on draft completion site). Draft is otherwise clean.

---

## 1. Epigraphs — quote-by-quote check

All epigraphs are attributed to Robert Latta (1898), checked verbatim against
ledger Q1–Q14 (which were themselves verified against the Wikisource Latta
transcription).

---

### Chapter 1 — §1 epigraph

**Draft text:**
> "The Monad, of which we shall here speak, is nothing but a simple substance,
> which enters into compounds. By 'simple' is meant 'without parts.'"

**Ledger Q1:** identical.  
✅ EXACT MATCH.

---

### Chapter 2 — §7 epigraph

**Draft text:**
> "The Monads have no windows, through which anything could come in or go out."

**Ledger Q2:** This sentence is the middle sentence of the full §7 block. The extracted
sentence is verbatim. Using the famous single sentence as an epigraph (rather than
the full section, which the body prose correctly paraphrases) is editorially
appropriate; no ellipsis is needed for a complete, self-contained sentence.  
✅ EXACT MATCH.

---

### Chapter 3 — §14 epigraph

**Draft text (line ~104):**
> "The passing condition, which involves and represents a multiplicity in the unit
> [unité] or in the simple substance, is nothing but what is called Perception,
> which is to be distinguished from Apperception or Consciousness."

**Ledger Q3 (full Latta):**
> "The passing condition, which involves and represents a multiplicity in the unit
> [unité] or in the simple substance, is nothing but what is called Perception,
> which is to be distinguished from Apperception or Consciousness, **as will
> afterwards appear.**"

**Finding:** The draft silently drops the final clause "as will afterwards appear."
No ellipsis signals the cut. The closing punctuation changes from Latta's comma (a
mid-sentence pause) to the draft's period (a hard stop), altering the character of
the sentence. Latta's trailing clause is not a throwaway filler — it signals that
the distinction will be worked out in subsequent sections (§§19–30), which is
precisely the architecture the chapter builds on.

❌ **MUST-FIX-1:** Restore ", as will afterwards appear." before the closing
quotation mark, matching Latta exactly; OR add a trailing ellipsis "…" after
"Consciousness" to mark the cut. Corrected epigraph:

> "The passing condition, which involves and represents a multiplicity in the unit
> [unité] or in the simple substance, is nothing but what is called Perception,
> which is to be distinguished from Apperception or Consciousness, as will
> afterwards appear."

---

### Chapter 4 — §32 epigraph

**Draft text (line ~127):**
> "…there can be no fact real or existing, no statement true, unless there be a
> sufficient reason, why it should be so and not otherwise, although these reasons
> usually cannot be known by us."

**Ledger Q5 (full Latta):**
> "And that of sufficient reason, in virtue of which we hold that there can be no
> fact real or existing, no statement true, unless there be a sufficient reason,
> why it should be so and not otherwise, although these reasons usually cannot be
> known by us."

**Finding:** The opening ellipsis correctly signals a cut. The omitted text is "And
that of sufficient reason, in virtue of which we hold that" — Leibniz's framing of
the principle as something "we hold," establishing it as a rational commitment rather
than a bare empirical observation. The fragment that remains is grammatically
complete and the words after the ellipsis are verbatim. The cut is defensible for an
epigraph, since the excerpt forms an independent clause. However, dropping "in virtue
of which we hold that" loses a nuance about the epistemic status of the principle.

⚠️ **SHOULD-FIX-2:** Restore the opening so the epigraph is a fuller extract, or
accept the ellipsis as a defensible truncation. If kept as-is, the ellipsis is
correct and no words are changed — this is the lower of the two SHOULD-FIX concerns.
No misquotation.

---

### Chapter 5 — §38 epigraph

**Draft text (line ~149):**
> "Thus the final reason of things must be in a necessary substance, in which the
> variety of particular changes exists only eminently, as in its source; and this
> substance we call God."

**Ledger Q6:** identical.  
✅ EXACT MATCH.

---

### Chapter 6 — §53 epigraph

**Draft text (line ~171):**
> "Now, as in the Ideas of God there is an infinite number of possible universes,
> and as only one of them can be actual, there must be a sufficient reason for the
> choice of God, which leads Him to decide upon one rather than another."

**Ledger Q7:** identical.  
✅ EXACT MATCH.

---

### Chapter 7 — §57 epigraph

**Draft text (line ~199):**
> "And as the same town, looked at from various sides, appears quite different and
> becomes as it were numerous in aspects [perspectivement]…"

**Ledger Q11 (full Latta):**
> "And as the same town, looked at from various sides, appears quite different and
> becomes as it were numerous in aspects [perspectivement]; even so, as a result of
> the infinite number of simple substances, it is as if there were so many different
> universes, which, nevertheless are nothing but aspects [perspectives] of a single
> universe, according to the special point of view of each Monad."

**Finding:** The draft extracts the opening clause and marks the cut with a trailing
"…". The extracted fragment is verbatim. The trailing ellipsis correctly signals the
rest of the sentence follows. The semicolon after "[perspectivement]" in Latta is
replaced by "…" — standard for a trailing epigraph fragment.  
✅ EXACT (to truncation point, correctly marked).

---

## 2. Body-prose paraphrase checks (§§ cited but not quoted)

### §78 — Chapter 7, block 3 (line ~209)

**Draft (no quotation marks):** "…the soul follows its own laws, and the body follows
its own laws, and they agree with each other in virtue of the pre-established harmony
between all substances, because they are all representations of one and the same
universe."

**Ledger Q12:** "The soul follows its own laws, and the body **likewise** follows its
own laws; **and** they agree with each other in virtue of the pre-established harmony
between all substances, **since** they are all representations of one and the same
universe."

**Finding:** No quotation marks, so not a misquote. The paraphrase drops "likewise"
and substitutes "because" for "since" — both semantically equivalent. The passage is
a very close shadow of Q12. The paraphrase accurately reflects Leibniz's argument.  
✅ PARAPHRASE ACCURATE. No action required.

---

### §79 — Chapter 7, block 4 (line ~212)

**Draft (no quotation marks):** "…souls act by the laws of final causes, through ends
and means, and bodies act by the laws of efficient causes, through motions, and the
two realms are in harmony with one another."

**Ledger Q13:** "Souls act **according to** the laws of final causes through
**appetitions**, ends, and means. Bodies act according to the laws of efficient
causes or motions. And the two realms, **that of efficient causes and that of final
causes**, are in harmony with one another."

**Finding:** No quotation marks. However, the paraphrase **drops "appetitions"
entirely**. "Appetitions" is not a throwaway word — it is Leibniz's technical term
for the internal drive that carries a monad from one perceptual state to the next
(defined at §§15–16 and central to the whole monadology argument). Its omission here
is a substantive inaccuracy in summarizing §79. The draft also drops the appositives
"that of efficient causes and that of final causes" — a minor compression.

❌ **MUST-FIX-2:** Restore "appetitions" in the §79 paraphrase. Corrected phrasing
(any of these is acceptable):
- "souls act by the laws of final causes through appetitions, ends, and means…"
- "souls act through their appetitions and ends; bodies act through motions…"

---

### §86 — Chapter 7, block 5 (line ~215)

**Draft (no quotation marks):** "Together they form what Leibniz calls, in section
eighty-six, the City of God, a moral world within the natural world, the most
exalted and most divine among the works of God."

**Ledger Q14:** "This City of God, **this truly universal monarchy**, is a moral
world in the natural world, and is the most exalted and most divine among the works
of God."

**Finding:** No quotation marks. The phrasing mirrors Q14 very closely but silently
drops "this truly universal monarchy." That phrase is not incidental — Leibniz's
"universal monarchy" is his political-theological metaphor for the City of God as a
realm with a sovereign (God), and it distinguishes his vision from a mere
congregation or community. Dropping it without signal leaves the paraphrase
technically accurate but thinner than the source, and the near-verbatim shadow
without quote marks or the monarchical metaphor is misleading.

⚠️ **SHOULD-FIX-3:** Either add "this truly universal monarchy" back into the
paraphrase, or rewrite as genuine paraphrase that captures the monarchical register
("Together they form what Leibniz calls the City of God, a moral kingdom with God as
sovereign…"). If quoting Q14 directly, mark with quotation marks and ellipsis.

---

## 3. Biographical and publication-history facts

### Leibniz's age in 1714 (Chapter 1, block 1, line ~59)

**Draft claim:** "He was sixty-eight, out of favor with his own employer…"

**Check:** Leibniz born 1 July 1646; in summer 1714 he was 67 turning 68. The draft
calls him "sixty-eight" which is correct if we understand the text as describing the
period broadly (his 68th year completed in July 1714 before the Monadology was
written in the summer/fall of 1714).  
✅ CONFIRMED (68 is accurate for 1714).

---

### "Last long stretch away from his post at Hanover" (throughline, line ~26; Chapter 1, line ~59)

**Draft throughline:** "an old and out-of-favor Leibniz sat down in Vienna"  
**Draft chapter 1:** "He was sixty-eight, out of favor with his own employer, and
entangled in the bitter dispute with Newton's supporters…"

**Check:** Leibniz was in Vienna from 1712 to September 1714 in the service of the
Holy Roman Emperor Charles VI. Confirmed by ledger and web searches. The calculus
dispute (Commercium Epistolicum, 1712) had damaged his standing in England. Both
claims are solid.  
✅ CONFIRMED.

---

### Monadology written "in Vienna" (throughline + hook + chapter 1)

**Draft:** repeatedly says written "in Vienna" in 1714 "during his last stay in
Vienna."

**Nuance found in web research:** According to Strickland (ResearchGate PDF on the
Monadology) and the Remond-sourced account, the Monadology was likely completed
**after** Leibniz returned to Hanover in mid-September 1714 — not while he was still
in Vienna. The draft says "He wrote it in French in 1714, in Vienna" (hook, line ~34)
and "during his last stay in Vienna" (chapter 1, line ~59).

⚠️ **SHOULD-FIX-4 (new, web-found):** The claim that it was written "in Vienna" is
the standard short-form and is not strictly wrong (it was begun and largely composed
there), but the most careful scholarly account places final completion after the
return to Hanover. The draft's version is the common simplified form and is in the
ledger (§1: "during Leibniz's last stay in Vienna"). Since the ledger does not flag
this as a nuance to communicate, and since all sources agree the composition was the
"Vienna summer 1714," this is a SHOULD-FIX (add a hedge like "written during his
last visit to Vienna, completed in the summer of 1714" rather than asserting
definitively "in Vienna"). The claim is not wrong; it is a common simplification.

---

### "Written for Nicolas Remond" (Chapter 1, block 1; hook lines ~34)

**Draft:** "He wrote it for Nicolas Remond, a philosopher and royal librarian in
Paris who had read Leibniz's *Theodicy* of 1710 and written asking for a condensed
account of the whole system."

**Check:** The ledger confirms: Nicolas-François Remond (Rémond de Montmort), royal
librarian and philosopher in Paris, who had written asking for a condensed exposition
after reading the *Théodicée*. Web search confirms. The description "philosopher and
royal librarian in Paris" matches ("councillor to the Duke of Orleans" is another
description, but "royal librarian" is what the ledger uses and is confirmed).

**Nuance:** One web source (Strickland) notes the Monadology was written FOR Remond
but Leibniz actually sent him the *Principles of Nature and Grace* instead on 26
August 1714, and never sent the *Monadology* to Remond directly. The draft's chapter
1 (block 1) says it was "written for" Remond, which is accurate; it does not claim
it was delivered to him. No error.  
✅ CONFIRMED.

---

### Prince Eugene / Principles of Nature and Grace (Chapter 1, block 2)

**Draft:** "In the same Vienna summer Leibniz wrote a companion piece, the *Principles
of Nature and Grace*, a more popular and accessible version of the same system, and
that one was explicitly composed for Prince Eugene of Savoy, the great military
commander. The two pieces were written side by side as parallel condensations, and
the order in which they were drafted is not settled. The Prince Eugene connection
belongs to the *Principles of Nature and Grace*. The *Monadology* itself was
Remond's. Conflating the two, and crediting the *Monadology* to Prince Eugene, is a
common slip."

**Check:** Confirmed in full by ledger §2 and web searches. The *Principles of Nature
and Grace* was sent to Prince Eugene. The Monadology's primary association is with
Remond. The draft correctly identifies Prince Eugene as a "military commander"
(Eugene of Savoy, 1663–1736, the great Habsburg general).  
✅ CONFIRMED.

---

### Title coined by Heinrich Köhler, 1720 German edition (hook, lines ~34; chapter 1, block 3)

**Draft (hook):** "The name *The Monadology* was coined by a German translator,
Heinrich Köhler, who published the first edition in 1720, four years after the
author was in the ground."

**Draft (chapter 1, block 3):** "The name *Monadology* was supplied by Heinrich
Köhler, who brought out the first edition, a German translation, in 1720, calling it
roughly *Propositions on the Monadology*."

**Check:** Confirmed by web searches and ledger. The full German title was *Lehrsätze
über die Monadologie* ("Theses/Propositions on the Monadology"). Köhler is confirmed
as the name-giver.  
✅ CONFIRMED.

---

### Latin edition 1721 (Chapter 1, block 3)

**Draft:** "A Latin version followed in 1721."

**Check:** Confirmed by ledger (Latin edition in 1721, in the *Acta Eruditorum*
supplement, under the title *Principia Philosophiae*) and web searches.  
✅ CONFIRMED.

---

### French original not published until 1840 (hook, line ~34; chapter 1, block 3)

**Draft (hook):** "The original French text Leibniz actually wrote did not appear in
print until 1840."

**Draft (chapter 1, block 3):** "…applying it a century and more after his death."

**Check:** Confirmed by web searches (Erdmann's 1840 anthology of Leibniz's works)
and ledger §1.  
✅ CONFIRMED.

---

### Köhler used an earlier draft, not the final manuscript (Chapter 1, block 4)

**Draft:** "Köhler's 1720 German text seems to have been made not from the final
manuscript but from an earlier draft he may have gotten from Leibniz directly in
1714. Three manuscripts of the final French text survive, one an autograph with the
author's own corrections."

**Check:** Confirmed by ledger §1 (§"The Köhler translation — an important nuance")
and Wikipedia Monadology.  
✅ CONFIRMED.

---

### Leibniz died 1716, of gout, in Hanover (hook; chapter 1, block 3)

**Draft (hook):** "He died two years later, in 1716, with the manuscript
unpublished."  
**Draft (chapter 1, block 3):** "He died in Hanover in November 1716, of gout, with
the manuscript among his papers."

**Check:** Confirmed — died 14 November 1716 in Hanover; gout cited by standard
sources.  
✅ CONFIRMED.

---

### Leibniz's *Theodicy* of 1710 (chapter 1, block 1; chapter 6)

**Draft:** refers to "Leibniz's *Theodicy* of 1710" (chapter 1) and "Leibniz's
earlier *Theodicy* of 1710" (chapter 6).

**Check:** The *Essais de Théodicée* was published 1710. Confirmed.  
✅ CONFIRMED.

---

## 4. Key argument-structure facts

### 90 sections (throughline, hook, chapter 1)

**Draft:** "ninety numbered paragraphs" / "ninety short numbered paragraphs" /
"sections three through six" / "Section thirty-one" etc.

**Check:** Confirmed: the *Monadology* has 90 numbered sections. Ledger §1 confirms.
Web sources confirm ("ninety paragraphs" — Wikipedia).  
✅ CONFIRMED.

---

### Two principles: contradiction (§31) and sufficient reason (§32) (Chapter 4)

**Draft:** correctly assigns §31 to the principle of contradiction and §32 to the
principle of sufficient reason.  
✅ CONFIRMED against ledger §3, Block 4.

---

### §38 names God as necessary substance (Chapter 5)

**Draft:** "Section thirty-eight names the destination…"  
✅ CONFIRMED against ledger §3, Block 5 and Q6.

---

### §45 — ontological argument (Chapter 5, block 2)

**Draft:** "in section forty-five Leibniz states the ontological argument almost in
passing, as a thing that simply follows: God alone has the privilege that, if such a
being is possible, then it must exist, because its existence follows from its
essence."  
✅ CONFIRMED against ledger §3, Block 5 and §5, position 9.

---

### §53–55 — best of all possible worlds argument (Chapter 6)

**Draft:** correctly cites §53 for the "infinite number of possible universes"
premise, §54 for "fitness / degrees of perfection," and §55 for the wisdom/
goodness/power conclusion. The draft also correctly notes that the phrase "best of
all possible worlds" belongs most prominently to the *Theodicy* (1710) rather than
being a direct quote from the *Monadology*.  
✅ CONFIRMED against ledger §3, Block 6 and Q7–Q9.

---

### §56 — perpetual living mirror (Chapter 7, block 1)

**Draft cites §56** for the "perpetual living mirror" image. The ledger Q10 confirms
this is §56.  
✅ CONFIRMED.

---

### §57 — town-from-many-sides image (Chapter 7, block 2)

**Draft cites §57.** Confirmed against Q11.  
✅ CONFIRMED.

---

### §78 — pre-established harmony (Chapter 7, block 3)

**Draft cites §78.** Confirmed against Q12.  
✅ CONFIRMED.

---

### §79 — final vs. efficient causes (Chapter 7, block 4)

**Draft cites §79.** Confirmed against Q13 (subject to the MUST-FIX-2 note above
about "appetitions" being dropped from the paraphrase).

---

### §86 — City of God (Chapter 7, block 5)

**Draft cites §86.** Confirmed against Q14 (subject to the SHOULD-FIX-3 note about
"universal monarchy" being dropped from the near-verbatim shadow).

---

## 5. Candide / Pangloss / Voltaire framing (Chapter 6, blocks 5–6)

**Draft:** "In 1759, four years after the Lisbon earthquake of 1755 had killed tens
of thousands on a church holiday and shaken Europe's confidence in a benevolent
order, Voltaire published *Candide*."

**Check:**
- *Candide* published 1759: confirmed.
- "four years after the Lisbon earthquake of 1755": confirmed (1759 − 1755 = 4).
- "on a church holiday": confirmed (All Saints' Day, 1 November 1755).
- "killed tens of thousands": confirmed as within the scholarly range (10,000–50,000;
  modern estimates frequently cite 30,000–40,000 for Lisbon alone). "Tens of
  thousands" is accurate.
- The book was "banned at once and sold everywhere": the draft says "The book was
  banned at once and sold everywhere" — confirmed. Banned in Geneva, Paris, and
  placed on the Vatican's Index; 20,000+ copies sold by end of 1759.

**Caricature framing:** The draft frames Pangloss explicitly AS Voltaire's caricature,
states Leibniz's actual position fairly (comparative holism, not event-by-event
endorsement), and correctly distinguishes explanation from prescription. This matches
the ledger §6 requirement and the pipeline's potted-summary gate.  
✅ CONFIRMED. Framing is correct.

---

## 6. "Jewel in a case" anecdote

**Check:** Absent from the draft. The draft comment block (lines 20–21) explicitly
records: "The 'jewel in a case' anecdote is left out (Latta-only, uncorroborated)."
The ledger (§9, item 2) flags this anecdote as appearing in Latta's 1898 introduction
but not independently corroborated, and recommends legend-framing if used.
✅ CORRECT OMISSION — no action required.

---

## 7. Two-clocks image attribution (Chapter 7, block 4)

**Draft:** "Leibniz's own picture for this, used across his writings though the
famous version sits in an earlier work and is paraphrased here rather than quoted, is
two clocks."

**Check:** The famous two-clocks statement is from Leibniz's 1696 clarification to
Basnage de Beauval of his *New System* (1695). The ledger (§5, position 4) confirms:
"this is Leibniz's own clock image, from his 1696 *New System* clarification;
paraphrased, not quoted, since no PD English of the 1696 text is available." The
draft correctly paraphrases (no quotation marks) and correctly signals it is "an
earlier work." The year reference ("1696") and work title ("New System") do not
appear in the draft — the draft is vaguer ("an earlier work"), which is safe since
it doesn't assert an unchecked date.  
✅ CONFIRMED (paraphrase, correctly handled).

---

## 8. Voice — em-dash check

The gate spec (gate 2, locked 2026-06-14) requires: no em-dashes in narration;
em-dashes only inside verified quotes or epigraph attribution "— Author" lines.
This is gate 2's domain, not gate 1's. Logged here for the gate 2 agent.

**Spot check (not exhaustive):** The draft's epigraph attributions use "— Leibniz,
The Monadology, §N, trans. Robert Latta (1898)" — correct use. No em-dashes were
found in the main prose blocks in spot-checking. **Full em-dash audit is gate 2's
responsibility.**

---

## 9. "Best of all possible worlds" as Theodicy vs. Monadology phrase

**Draft (Chapter 6, block 2):** "The phrase the book is remembered by, the best of
all possible worlds, belongs most prominently to Leibniz's earlier *Theodicy* of
1710; the *Monadology* states the same doctrine through section fifty-five's wisdom,
goodness, and power."

**Check:** This is exactly the ledger's instruction (§9, item 4 and §4, Q9 note) and
is confirmed by web research: the phrase "best of all possible worlds" is most
prominently associated with the *Theodicy* (1710), while the *Monadology* §§53–55
carries the argument without that exact English formulation. The handling is correct
— the Monadology argument is described by its own terms (§55 paraphrased), and the
*Theodicy* is not quoted (Huggard 1951 is not PD).  
✅ CONFIRMED. Correctly handled.

---

## 10. Summary of all findings

| # | Verdict | Location | Issue |
|---|---------|----------|-------|
| MUST-FIX-1 | ❌ | Ch.3 epigraph (~line 104) | §14 epigraph truncated without ellipsis; closing comma changed to period; "as will afterwards appear." dropped silently |
| MUST-FIX-2 | ❌ | Ch.7 block 4 (~line 212) | §79 paraphrase drops "appetitions" — a defined technical term central to the argument |
| SHOULD-FIX-2 | ⚠️ | Ch.4 epigraph (~line 127) | §32 leading ellipsis cuts "in virtue of which we hold that" — defensible but strips epistemic framing; consider restoring |
| SHOULD-FIX-3 | ⚠️ | Ch.7 block 5 (~line 215) | §86 near-verbatim shadow drops "this truly universal monarchy" without signal; either restore phrase or rewrite as genuine paraphrase |
| SHOULD-FIX-4 | ⚠️ | Throughout / hook (~line 34) | "Written in Vienna" is the standard account but the most careful scholarship places final completion after Leibniz's return to Hanover in Sept 1714; consider a hedge |
| ✅ | All other factual claims | — | Confirmed: biographical dates, age, death, Köhler/title history, 1720/1721/1840 publication dates, Remond as recipient, Prince Eugene / *Principles* distinction, 90 sections, §§ assignments for all arguments, Candide 1759, Lisbon 1755, "jewel" anecdote correctly absent, two-clocks attribution correctly paraphrased |
