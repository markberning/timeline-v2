# Gate 1 (Fact) + Gate 5 (Framing) — Descartes thinker deep read

**Draft:** `audits/philosophy-pipeline/descartes.read.ts`
**Fact pack:** `audits/philosophy-pipeline/descartes-fact-pack.md`
**Ledger:** `audits/philosophy-pipeline/descartes-ledger.md`
**Run:** 2026-06-13, Sonnet, web-enabled (Gutenberg texts fetched; SEP, Wikipedia,
UNLV transcript, AT III verified)

---

## Resolution of the 6 [VERIFY] ledger tags

### [VERIFY-1] Mother's death / sickly child
**Ledger question:** "Descartes' mother died ~1 year after his birth; sickly child."

✅ **CONFIRMED — with one word to sharpen.**
SEP: "When Descartes was thirteen and one-half months old, his mother, Jeanne Brochard,
died in childbirth." Wikipedia: "In May 1597, his mother, Jeanne Brochard, died a few days
after giving birth to a still-born child." ~13.5 months = "barely a year" — the draft's
"barely a year old" is accurate. "Sickly child": Wikipedia says "late because of his
fragile health, he entered the Jesuit College"; SEP does not use this wording. "Fragile
health" is documented; "sickly" is close enough to ship.

**Draft text (Ch 1):** "His mother died when he was barely a year old, and he was a
sickly child."
**Verdict:** ✅ CONFIRMED. The exact SEP figure is 13.5 months; "barely a year old"
is acceptable. "Sickly" vs "fragile health" — trivial and shippable; SHOULD note
"fragile health" is the sourced phrase.

---

### [VERIFY-2] Meditation I "now will I shut my eyes…"

**Ledger question:** `"now will I shut my eyes, I will stop my ears, and withdraw all my
senses"` — quoted in era-3 narrative as Molyneux; re-confirm wording and Meditation
placement before keeping in quotes.

❌ **WRONG — MUST-FIX.**
Exact Molyneux wording from pg70091.txt, confirmed by fetch:
> "Now will I shut my eyes, I will stop my ears, and withdraw all my senses, I will blot
> out the Images of corporeal things clearly from my mind, or (because that can scarce
> be accomplish'd) I will give no heed to them, as being vain and false."

**This passage is in Meditation III, not Meditation I.** Its context in Med. III is
Descartes re-immersing into pure rational reflection after establishing the cogito — he
is withdrawing his senses to examine the idea of God. The draft uses it in Ch 2
(describing Meditation I's act of radical doubt) as: "The setup is a man alone, withdrawn
from his senses — 'now will I shut my eyes, I will stop my ears, and withdraw all my
senses' — who has decided, once in his life, to tear down everything he believes."

This is a **double misattribution**: (a) the quote is from Meditation III, not Meditation I;
(b) it describes a moment of rational concentration on the idea of God, not the initial
act of tearing down all beliefs. Using it to characterize Meditation I's premise is
factually wrong and misleads the reader about what the Meditations' opening actually says.

**MUST-FIX:** Remove or relocate the quotation. Either (a) drop the quoted line and
paraphrase Meditation I's actual setup in Descartes' own plain terms (the Molyneux
opening: "Some years past I perceived how many Falsities I admitted as Truths in my
Younger years"), or (b) move the "shut my eyes" quote to the point in Ch 5 where
Descartes is examining the idea of God in Meditation III, where it belongs, with
correct attribution. Do not quote it as describing Meditation I.

---

### [VERIFY-3] "Undermine foundations not beliefs one by one"

**Ledger question:** "Undermine the foundations, not each belief one by one" — confirm
Descartes' stated labor-saving move.

✅ **CONFIRMED.**
Exact Molyneux from pg70091.txt:
> "it will be sufficient if I reject all those wherein I find any Occasion of doubt...
> because the Foundation being once undermin'd, whatever is built thereon will of its
> own accord come to the ground"

**Draft text (Ch 2):** "he does not have to examine his beliefs one by one (there are
too many). He only has to undermine the *foundations* they rest on. Knock out a foundation
and everything built on it comes down together."
**Verdict:** ✅ CONFIRMED exactly. The foundation/undermine language is Descartes' own
(Molyneux). The paraphrase is accurate and close in wording.

---

### [VERIFY-4] "Senses deceive / deceived once" wording

**Ledger question:** Wording of the senses-deceive passage — confirm or fully paraphrase.

⚠️ **UNSUPPORTED AS QUOTED — SHOULD-FIX.**
Exact Molyneux wording from pg70091.txt:
> "_Whatever I have hitherto admitted as most true, that I received either from, or by
> my Senses; but these I have often found to deceive me, and 'tis prudence never
> certainly to trust those that I have (tho but once) deceived us._"

**Draft text (Ch 2):** "From time to time I have found that the senses deceive," he
writes, "and it is prudent never to trust completely those who have deceived us even once."

The draft presents this as a direct quotation (inside quotation marks with "he writes").
It is not Molyneux's wording. Key divergences:
- "From time to time" — Molyneux says "I have often found" (not "from time to time")
- "trust completely" — Molyneux says "never certainly to trust" (acceptable paraphrase)
- Overall sentence structure differs

The fact pack (§12 soft spots and [VERIFY-4] note in the ledger) already flagged that
"Molyneux's exact wording differs" and instructed "confirm or fully paraphrase." The
author put it in quotation marks anyway without confirming — that violates the born-verified
doctrine.

**SHOULD-FIX:** Either (a) change to Molyneux's exact wording: "_Whatever I have
hitherto admitted as most true, that I received either from, or by my Senses; but these
I have often found to deceive me, and 'tis prudence never certainly to trust those that
I have (tho but once) deceived us_" — with a note that this is Molyneux's archaic
phrasing — or (b) drop the quotation marks and make it a clean paraphrase: "He had
often found the senses deceive him, he writes, and it is prudent never entirely to trust
what has deceived you even once." Leaving a non-Molyneux string in quote marks does
not ship.

---

### [VERIFY-5] "Sitting by a fire / lying undressed in bed"

**Ledger question:** "Dream example 'sitting by a fire when in fact lying undressed in bed' —
Meditation I's own example; confirm against pg70091.txt."

✅ **CONFIRMED as Meditation I content — wording is acceptable paraphrase.**
Exact Molyneux wording from pg70091.txt:
> "how often am I perswaded in a Dream of these usual occurrences, that I am in this
> place, that I have a Gown on me, that I am sitting by a fire...Tho all the while I am
> lying naked between the Sheets."

**Draft text (Ch 2):** "I have dreamt, with total conviction, that I was sitting by a
fire when in fact I was lying undressed in bed."

The fire/bed example is CONFIRMED as Descartes' own in Meditation I. The draft's version
is a faithful modernizing paraphrase — "naked between the Sheets" → "undressed in bed";
"Gown on me" condensed. The draft does NOT put this in quotation marks in Ch 2 — it is
presented as paraphrase ("I have dreamt, with total conviction...") — so no born-verified
violation.

**Verdict:** ✅ CONFIRMED. No quote marks used; paraphrase is accurate. No fix needed.

---

### [VERIFY-6] Hard problem / "see red" framing as Descartes-shaped

**Ledger question:** "Is the 'hard problem of consciousness' / 'what it's like to see red'
Descartes-shaped characterization fair, not overclaiming a specific 20th-c formulation
onto Descartes?"

🟡 **LEGEND-FRAME-IT — SHOULD-FIX.**
The hard problem term was coined by David Chalmers in 1994 (Tucson conference) /
published 1995. Wikipedia's "hard problem" article does note Descartes' interactionism
as a historical ancestor: the mental-physical causation question is explicitly associated
with Descartes. The framing that the problem is "argued in almost the form Elisabeth
handed Descartes in 1643" is a defensible editorial synthesis — but it is the author's
inference, not a sourced claim, and it subtly elevates Descartes' historical role more
than is strictly warranted (Elisabeth and Descartes identified the interaction problem,
not the full hard problem of consciousness, which encompasses phenomenal experience
generally, not just causation).

**Draft text (Ch 6):** "the question of how conscious experience relates to the physical
brain — how the thing it is like to see red connects to the firing of neurons — is still
one of the genuinely open problems in philosophy, argued in almost the form Elisabeth
handed Descartes in 1643."

The characterization is plausible enough to ship with a slight hedge. The "thing it is
like to see red" is Nagel's formulation (1974 "What Is It Like to Be a Bat?"), not
Descartes' — fine as the author's forward-pointer, but it should be clear it is editorial
framing, not a sourced historical claim.

**SHOULD-FIX:** Add a slight hedge: "...is still one of the genuinely open problems in
philosophy — philosophers today call it the 'hard problem of consciousness,' and while
the exact framing is twentieth-century, the wound at the center of it is the same one
Elisabeth pressed in 1643: how does something immaterial relate to something physical?"
This keeps the insight while flagging it as editorial.

---

## Gate 1 — Fact findings (all draft surfaces)

### F-1: "Shut my eyes" misattributed to Meditation I
**Draft text (Ch 2):** "The setup is a man alone, withdrawn from his senses — 'now will
I shut my eyes, I will stop my ears, and withdraw all my senses' — who has decided, once
in his life, to tear down everything he believes."
**Problem:** This Molyneux passage is from Meditation III (the opening of the God-inquiry),
not Meditation I. Its meaning in context is different: it describes Descartes withdrawing
the senses to examine the idea of God, not initiating radical doubt. The quote is both
mis-placed and mis-contextualized.
**Verdict:** ❌ WRONG. MUST-FIX. (= VERIFY-2 resolution above.)

---

### F-2: "Senses deceive / prudent never to trust" presented as direct quotation
**Draft text (Ch 2):** "\"From time to time I have found that the senses deceive,\" he
writes, \"and it is prudent never to trust completely those who have deceived us even once.\""
**Problem:** In quotation marks with "he writes" — presented as a Molyneux verbatim.
Not Molyneux's wording. Molyneux says "I have often found" not "from time to time";
overall sentence structure differs materially.
**Verdict:** ⚠️ UNSUPPORTED AS QUOTED. SHOULD-FIX. Must use exact Molyneux or drop
quote marks.

---

### F-3: Cogito locus — centerpiece check
**Draft text (Ch 3):**
- *Discourse* (1637, French): "je pense, donc je suis" with Veitch's "(COGITO ERGO SUM)"
  as 19th-c editorial gloss ✅
- *Meditations* (1641, Latin): "ego sum, ego existo" — no "therefore," not the slogan ✅
- *Principles* (1644, Latin): "ego cogito, ergo sum" — explicit axiom ✅
- Molyneux epigraph Ch 3: "Whenever this sentence I am, I exist, is spoken or thought
  of by Me, 'tis necessarily True." ✅ (Verified against pg70091.txt)
- Veitch Discourse passage including "(COGITO ERGO SUM)" ✅ (Verified against pg59.txt)
**Verdict:** ✅ CONFIRMED. The cogito locus precision is exactly right throughout.
No "cogito ergo sum" attributed to the Meditations. The Principles-vs-Discourse-vs-
Meditations distinction is correctly drawn and carefully explained. The centerpiece
check passes.

---

### F-4: Cartesian Circle attribution — Mersenne first, Arnauld fourth
**Draft text (Ch 5):** "The circle was raised *first* by Marin Mersenne — the friar
at the center of Europe's scientific correspondence, who had circulated Descartes'
manuscript to the sharpest minds of the day before publication — in the set of *Second
Objections* printed with the *Meditations*. It was then pressed harder, with more
philosophical precision, by the theologian Antoine Arnauld in the *Fourth Objections*."

Verified: Second Objections = gathered by Mersenne; Fourth Objections = Arnauld. ✅

One nuance: the Second Objections were assembled by Mersenne from "various theologians
and philosophers," not authored solely by Mersenne himself. The draft's "Marin Mersenne
— the friar... who had circulated Descartes' manuscript" implies he is the sole author.
This is slightly imprecise but not materially wrong at popular-history altitude — Mersenne
was the compiler and the circle is standardly attributed to him as assembler.
**Verdict:** ✅ CONFIRMED with 🟡 minor note. SHOULD clarify: "raised first in the
Second Objections, gathered and compiled by Mersenne." Not a MUST-FIX.

---

### F-5: Elisabeth of Bohemia date — May 6, 1643
**Draft text (Ch 5):** "a letter of **6 May 1643**"
**Fact pack §6:** "6 May 1643 (the French original dates it '6.v.1643' — 6th of the
5th month = May 6)."

Wikipedia says May 16; SEP does not specify. However, the UNLV course-packet transcript
(closest to the original manuscript) shows "6.v.1643" = May 6. The AT III, 661 canonical
edition is cited for both dates by different secondary sources; a Portuguese secondary
source appears to be the origin of the May 16 error (digit slip: 6 → 16), propagated
into Wikipedia. Primary manuscript notation "6.v.1643" = May 6 is the correct reading.
**Verdict:** ✅ CONFIRMED. May 6 is correct. Wikipedia's May 16 is a secondary-source
digit error. No fix needed.

---

### F-6: Evil genius passage — Molyneux epigraph (Ch 2)
**Draft epigraph (Ch 2):** "I will suppose... that some Evil Spirit which is very Powerful
and crafty has used all his endeavours to deceive me; I will conceive, the Heavens, Air,
Earth, Colours, Figures, Sounds, and all outward things are nothing else but the
delusions of Dreams."
**Fact pack §4a:** VERIFIED against pg70091.txt.
**Verdict:** ✅ CONFIRMED. The Molyneux epigraph is accurate.

---

### F-7: Wax argument epigraph — Molyneux (Ch 4)
**Draft epigraph (Ch 4):** "Let us chuse for example this piece of Bees-wax... But
behold whilst I am speaking, 'tis put to the Fire... Does it yet continue the same Wax?"
**Fact pack §4c:** VERIFIED against pg70091.txt.
**Verdict:** ✅ CONFIRMED. Molyneux text accurate.

---

### F-8: Principles I.7 epigraph (Ch 5)
**Draft epigraph (Ch 5):** "This cognition, I think, therefore I am, is the first and
most certain of all that occurs to anyone philosophizing in an orderly way."
**Fact pack §3c:** VERIFIED against Wikipedia "Cogito, ergo sum" article (citing the
Latin Principles). The translation given is consistent with the Latin "ego cogito, ergo
sum, est omnium prima & certissima."
**Verdict:** ✅ CONFIRMED.

---

### F-9: Mother's death — "barely a year old"
**Draft text (Ch 1):** "His mother died when he was barely a year old."
**Verified:** 13.5 months = barely a year. ✅ (See VERIFY-1 above.)

---

### F-10: La Flèche date — "about eleven"
**Draft text (Ch 1):** "He went at about eleven to the Jesuit Collège de La Flèche."
**Pack §1:** "c. 1607" (born 1596 → ~11 years old). ✅

---

### F-11: Francine — birth 1635, death 1640, age 5, scarlet fever, Helena Jans
**Draft text (Ch 1):** "He had a daughter, Francine, born in 1635 to a servant named
Helena Jans van der Strom; he acknowledged the child, and when she died of scarlet
fever in 1640, at five years old, it is reportedly the one time in any surviving account
that Descartes was seen openly weeping."
**Pack §1 Daughter Francine:** DOCUMENTED — all details confirmed. ✅

---

### F-12: Stockholm — 5 a.m., three times a week, Swedish winter
**Draft text (Ch 1):** "made to give the Queen her lessons at **five o'clock in the
morning**, three times a week, through a Swedish winter, in what contemporaries described
as a cold and drafty castle."
**Pack §1 Stockholm circumstances:** DOCUMENTED — "the 5 a.m. detail is in multiple
contemporaneous accounts." ✅

---

### F-13: Poison theory framing
**Draft text (Ch 1):** "A fringe academic theory has since claimed he was poisoned with
arsenic by a French priest worried about his influence on the Queen's Catholicism —
it has been published in the scholarly literature but is not accepted by mainstream
scholarship, and poison was never established."
**Pack §1 poison conspiracy:** Correctly names Theodor Ebert of University of Erlangen;
flags as fringe not mainstream. ✅ The draft omits the priest's name (François Viogué)
and the specific Eucharist argument — acceptable at thinker-read altitude.

---

### F-14: Le Monde suppression
**Draft text (Ch 1):** "in 1633, when he heard that the Inquisition had condemned Galileo
for defending the motion of the earth, Descartes took his own completed masterwork of
physics — a book called *Le Monde* (*The World*), which was also heliocentric — and
**suppressed it**. He simply did not publish it; it came out only after his death."
**Pack §1 Le Monde / §2:** Published posthumously 1664. ✅ "Masterwork of physics" is
a slight elevation (it was a comprehensive natural philosophy textbook), but not wrong.

---

### F-15: Analytic geometry — *Géométrie* 1637
**Draft text (Ch 1):** "he published, as an appendix to the *Discourse*, a piece of work
called the *Géométrie* that founded what we now call analytic geometry — the discovery
that you can represent points on a plane as pairs of numbers (coordinates), turn geometric
shapes into algebraic equations, and solve problems of one kind with the tools of the other."
**Pack §5f:** DOCUMENTED. ✅

---

### F-16: Three dreams — Baillet 1691, Olympica lost, Leibniz copied
**Draft text (Ch 1):** "a biography of Descartes written by Adrien Baillet in **1691** —
seventy-two years after the night in question, by a writer setting out to exalt his
subject... the only real surviving account of the dreams comes from Baillet."
**Pack §1 (94b):** LATE-TRADITION — all details confirmed. Olympica lost, Leibniz
copied parts, only source Baillet 1691. ✅ Draft correctly distinguishes stove-room
(Descartes' own Discourse) from dreams (Baillet). Framing is exemplary.

---

### F-17: Stove-room / *poêle* sourcing
**Draft text (Ch 1):** "The first event is the **stove-heated room**, and our source for
it is Descartes himself: in the *Discourse on the Method* of 1637 he writes that he
'remained the whole day shut up alone in a stove-heated room.'"
**Pack §1 (94a):** Veitch translation, Marxists.org version. The epigraph to Ch 1 uses
this wording and attributes Veitch. ✅ Note: the pack notes pg59.txt Gutenberg renders
this slightly differently ("in seclusion" omitting "stove-heated"). Draft correctly uses
the Marxists.org Veitch which has the "stove-heated room" wording.

---

### F-18: "Ogical the man who stayed in bed" — no spurious claim
The "lifelong late riser" / tutors indulged / 5 a.m. death connection is a compelling
narrative thread. Pack §1: "He had been a habitual late riser since childhood; his La
Flèche tutors reportedly indulged this." The "reportedly" qualifies it correctly. The
draft doesn't hedge the tutors detail ("are said to have indulged him") — that phrasing
is fine. ✅

---

### F-19: Discourse was written "in French deliberately — for a wider, non-Latin-reading
public"
**Draft text (Ch 3):** "written in **French** for a wide popular audience"
**Pack §2:** "Written in French deliberately — for a wider, non-Latin-reading public." ✅

---

### F-20: *Passions of the Soul* dedicated to Elisabeth
**Draft text (Ch 5):** "He valued the exchange enough to dedicate his last book, the
*Passions of the Soul*, to her."
**Pack §2:** "Dedicated to Princess Elisabeth." ✅

---

### F-21: Malebranche / occasionalism chip
**Draft text (Ch 6):** "**Malebranche** delegated it to God directly: on his view (called
*occasionalism*) the mind never really moves the body at all — God does, taking each of
your decisions as merely the *occasion* on which He moves your limb."
**Pack §6 / §8c:** DOCUMENTED — Malebranche as occasionalism, mind's decision as
"merely the occasion." ✅

---

### F-22: Leibniz / pre-established harmony / clocks
**Draft text (Ch 6):** "countless clocks wound to keep the same time forever, so your
decision and your arm's motion match without one ever touching the other."
**Pack §8c:** "monads have no windows; pre-established harmony means they appear to
interact but don't." The clocks analogy is a well-established illustration for Leibniz's
pre-established harmony (it is Leibniz's own analogy in the "New System" 1695). ✅

---

### F-23: Locke "blank paper" claim (Ch 6)
**Draft text (Ch 6):** "**John Locke** went after Descartes' innate ideas: where Descartes
held that the mind comes furnished with certain ideas it never learned... Locke argued
the mind starts as blank paper, with *nothing* written on it that experience did not
put there."
**Pack §8c:** "rejected innate ideas; blank paper." Era-3 gate report confirmed "white
paper" not "tabula rasa" for Locke — the draft's "blank paper" is an acceptable
paraphrase. Era-3 noted the exact phrase is "white paper" in Locke's Essay. ✅ (Not
a verbatim quote here, just an editorial descriptor.)

---

### F-24: "Hegel later crowned him 'the father of modern philosophy'"
**Draft text (brk):** "(Hegel later crowned him 'the father of modern philosophy' — a
convention worth flagging as the convention it is, but a fair one.)"
**Pack §9:** "Hegel later called Descartes 'the father of modern philosophy,' a convention
worth flagging as such." ✅ The draft correctly flags it as a convention.

---

### F-25: Augustine "si fallor, sum" — NOT quoted in draft
The pack §5b notes the parallel and says "ship as 'a structural parallel that scholars
note' rather than as documented borrowing." The draft's break block does not use
Augustine's Latin phrase in quotes — it says "for the first time in the Western tradition,
a philosopher makes **first-person certainty** the starting point." The Augustine parallel
is mentioned in §5b as a note for the author, but the draft does not claim Descartes
invented first-person certainty (he "reset the question"). The draft does not assert
Descartes was the "first" — ✅ No overclaim here.

---

## Gate 5 — Framing findings

### FR-1: "Descartes invented mind-body dualism" — debunked ✅
**Draft text (Ch 4):** "Now the potted summary that has to be killed, because you have
certainly heard it: *'Descartes invented mind-body dualism.'* He did not. The idea that
mind (or soul) and body are different things is ancient and was old news long before him.
Plato's *Phaedo* separates soul from body explicitly... Augustine spent the *Confessions*
anatomizing the divided inner life... The Scholastics distinguished the two for a thousand
years."
**Verdict:** ✅ CONFIRMED. The potted-summary debunk is present, thorough, and
correctly names Plato, Augustine, and the Scholastics. The draft then explains exactly
what IS new (two complete substances; body as machine; the interaction problem's new
acuity). The framing gate's central requirement for this thinker is met.

---

### FR-2: Elisabeth of Bohemia as genuine philosophical interlocutor ✅
**Draft treatment:** She appears across Ch 5 as the thinker who identified the structural
flaw in the system. The draft explicitly says: "She was not a fan writing to a great man.
She had read Descartes' physics closely enough to find the exact load-bearing beam it
could not carry." The final paragraph of Ch 5 says: "Elisabeth of Bohemia did not pose
a curious question to a famous man who graciously addressed it. She identified the
*structural flaw in the most influential philosophical system of the seventeenth century*."
The section gives her the full objection (paraphrase-only, as instructed), Descartes'
weak reply, and her identification of his self-contradiction. She is NOT a sidebar.
**Verdict:** ✅ CONFIRMED. The framing gate's Elisabeth requirement is fully met.

---

### FR-3: Animals-as-automata — cost named honestly ✅
**Draft text (Ch 4):** "One cost of this system has to be named, not as a gotcha but
because it follows so directly from the logic and is now so clearly wrong: Descartes held
that non-human **animals are automata** — pure machines, without minds, and therefore
without genuine feeling... The conclusion was contested in his own time and is regarded
today as plainly false, and it is worth seeing because it shows the *cost* of the
system, the price the clean two-substance picture exacts when you run it all the way out."
**Verdict:** ✅ CONFIRMED. Named honestly, connected to the logic, framed as a
cost not a gotcha. Gate requirement met.

---

### FR-4: Scholastics steelmanned, not strawmanned ✅
**Draft text (brk):** "Steelman what Descartes was breaking from first, because the
textbook caricature of 'the Scholastics' as dusty fools counting angels on pinheads
is exactly backwards... And their way of doing philosophy was not naive; it was a
deliberate decision about *foundations*. You start from what is most certain and best
established — revelation, the authoritative texts, Aristotle (whom they simply called
'the Philosopher') — and you reason carefully outward from there to understand the
world. And why not? If God is rational and gives reliable revelation, then starting from
revelation is starting from the firmest ground there is."
**Verdict:** ✅ CONFIRMED. The pinhead-angels caricature is explicitly rejected; the
Scholastic position is steelmanned as a coherent decision about foundations. Meets the
gate requirement.

---

### FR-5: Western-overclaim check ✅
The draft operates entirely within the stated v1 scope (Western philosophy). The break
block says "modern philosophy" with the Hegel convention flagged as a convention. No
claim that Descartes is the start of "philosophy" tout court — only of "modern" (in the
conventional historiographical sense). Avicenna's "Flying Man" parallel is in the fact
pack but is not in this draft (the thinker read at this altitude appropriately defers to
the era-2 pack for that parallel).
**Verdict:** ✅ No overclaim.

---

### FR-6: Lone-genius myth — correspondents, Beeckman, Mersenne
**Draft text:** The draft names Isaac Beeckman as the mathematician who "turned his
attention toward mathematical natural philosophy"; names Mersenne as the friar who
assembled the Second Objections; names Arnauld as the Fourth Objections. The
correspondence that shaped his thought is not ignored.
**Verdict:** ✅ No lone-genius myth. The intellectual context is present.

---

### FR-7: Anachronism check — "hard problem" framing
**See VERIFY-6 above.** The "hard problem" framing is a mild anachronism (term coined
1994/1995) presented without acknowledgment.
**Verdict:** 🟡 LEGEND-FRAME-IT. SHOULD-FIX. (See VERIFY-6 resolution.)

---

### FR-8: Stove-room and dreams properly distinguished ✅
The draft devotes an entire paragraph (Ch 1) to disambiguating the stove-room
(Descartes' own Discourse) from the three dreams (Baillet 1691, late tradition, lost
Olympica). This is textbook correct framing.
**Verdict:** ✅ CONFIRMED.

---

### FR-9: Cartesian circle — published IN the same volume as objections
**Draft text (Ch 5):** "(These objections, and Descartes' replies, were printed *in the
same volume* as the *Meditations* from the 1642 edition onward — a remarkable thing
in itself.)"
**Pack §2:** "The Objections and Replies are philosophically essential — printed in the
same volume from 1642." ✅ Correctly noted.

---

## Summary table

| # | Issue | Severity | Status | Notes |
|---|---|---|---|---|
| F-1 / V-2 | "Shut my eyes" passage attributed to Meditation I — it is Meditation III | ❌ WRONG | MUST-FIX | Different Meditation, different context entirely |
| F-2 / V-4 | "Senses deceive" presented in quote marks but wording ≠ Molyneux | ⚠️ UNSUPPORTED | SHOULD-FIX | Use exact Molyneux or drop quote marks |
| V-6 / FR-7 | "Hard problem" framing as Descartes-shaped — anachronism, not flagged | 🟡 | SHOULD-FIX | Hedge as editorial; flag Chalmers 1994/1995 |
| F-4 | Mersenne as "sole author" of Second Objections slightly imprecise | 🟡 | SHOULD-FIX | Add "gathered by Mersenne" precision |
| V-1 | "Sickly child" — exact sourced phrase is "fragile health" | ✅ | Shippable | Trivial wording difference |
| V-3 | "Undermine foundations" paraphrase | ✅ | CONFIRMED | Accurate |
| V-5 | Dream-by-fire paraphrase | ✅ | CONFIRMED | Not quoted; paraphrase faithful |
| F-3 | Cogito locus — Discourse / Meditations / Principles correctly distinguished | ✅ | CONFIRMED | Centerpiece check passes |
| F-5 | Elisabeth date May 6, 1643 | ✅ | CONFIRMED | Wikipedia May 16 is a digit-slip error |
| FR-1 | "Descartes invented dualism" potted-summary debunk | ✅ | CONFIRMED | |
| FR-2 | Elisabeth as genuine philosophical interlocutor | ✅ | CONFIRMED | |
| FR-3 | Animals-as-automata cost | ✅ | CONFIRMED | |
| FR-4 | Scholastics steelmanned | ✅ | CONFIRMED | |

---

## Verdict

**FIX-THEN-SHIP.**

One MUST-FIX (F-1): the "shut my eyes" quotation is from Meditation III, not Meditation I.
It currently sits in Ch 2 characterizing Meditation I's initial act of radical doubt — that
is factually wrong (the passage describes Descartes withdrawing senses to examine the idea
of God, a Meditation III moment), and it is the first quoted line in Ch 2, making it
prominent. Remove it from Ch 2 and either (a) attribute it correctly to Med. III when
describing that passage in Ch 5, or (b) replace the Ch 2 framing with a paraphrase of
what Molyneux's Meditation I actually says at the outset. This is a surgical fix — it
does not require structural revision.

Two SHOULD-FIXes: the senses-deceive wording (F-2) needs the quotation marks dropped or
replaced with exact Molyneux; the hard-problem framing (FR-7) needs a light hedge. Both
are one-line fixes.

Everything else passes: the draft's cogito locus precision is excellent and exactly
right; the Elisabeth framing is exemplary; the dualism debunk is thorough; the Scholastic
steelman is present and explicit; the stove-room / dreams disambiguation is a model of
how to handle legendary material. The hard work on the centerpiece was done right.

**After the three fixes are applied (one MUST, two SHOULD), this draft is clean for
Gates 2–4 and 6–7.**
