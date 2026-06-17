# Gate 4 — Newcomer / Clarity Audit
## *Discourse on the Method* work read (`src/app/philosophy/work/_reads/discourse.ts`)
**Auditor role:** Sharp 15-year-old who has never taken philosophy. Reading cold.
**Gate definition:** `audits/philosophy-content-pipeline.md` gate 4.

Verdict per chapter: CLEAR / NEEDS-GLOSS / LOST
Each finding: MUST-FIX or SHOULD-FIX, exact term/line, suggested one-line gloss.

---

## Throughline (opening summary block)

**NEEDS-GLOSS**

### MF-T1 — MUST-FIX: "foundation of knowledge" — undefined concept, load-bearing phrase
> "it relocated the foundation of knowledge from the authority of the ancients to the thinking of a single mind."

A newcomer has no framework for "foundation of knowledge" as a philosophical concept. The phrase reads as metaphor but is actually the technical claim the book turns on. Add a one-sentence plain gloss the first time it appears: something like "(what a person can justifiably build every other belief on top of)."

### SF-T2 — SHOULD-FIX: "lords and possessors of nature" — significance not flagged in throughline
The phrase appears in the throughline but the 15-year-old doesn't yet know this is a famous and consequential claim (Chapter 6 explains it fully). No fix required in the throughline itself — Chapter 6 handles it — but it reads as slightly mysterious here without context. Acceptable as a hook if the reader trusts they'll get the explanation later; flag only.

---

## "The Break" block (brk)

**NEEDS-GLOSS**

### MF-B1 — MUST-FIX: "syllogism" — used without explanation
> "A position was defended by showing it agreed with the great names and could survive a syllogism."

"Syllogism" is an ancient logical form (if A, then B; A is true; therefore B). A 15-year-old will have no idea what this is. The word appears once, in passing, as though the reader knows it. Either gloss it in parentheses (e.g., "a formal logical argument with two premises and a conclusion") or substitute "a formal logical test."

### SF-B2 — SHOULD-FIX: "Aristotle," "Aquinas," "Averroes" — mentioned without any who-they-are
> "A serious book in the genre was addressed to clergy and scholars... citing authorities: Aristotle above all, then Aquinas, Averroes, and the rest of the inherited canon."

Three names appear as if the reader already knows who they are. At this point in the text a newcomer has not been introduced to any of them. A single clause after each name is enough: "Aristotle (the ancient Greek philosopher whose works dominated European universities)" etc. For Aquinas and Averroes even a two-word tag ("the medieval theologian," "the Islamic commentator") would suffice. This is especially acute for Averroes, who is the least likely to be recognized.

### SF-B3 — SHOULD-FIX: "order of inquiry" / "content of inquiry" — abstract distinction lands late
> "it reverses the order of inquiry... The method comes first; the content is whatever survives the method."

The before/after distinction is the break's whole point and it is explained well — but the abstract labels "order of inquiry" and "the content" could be made concrete with a one-sentence worked example earlier in the explanation (e.g., "Before: start with Aristotle's claim that the earth is the center and use logic to defend it. After: start with 'what can I actually know for certain?' and only then see if the earth-at-center claim survives."). Without that, the logic of the reversal is clear to someone who already knows the tradition, but opaque to a newcomer. SHOULD-FIX rather than MUST-FIX because Part II comes close to providing this.

---

## Chapter 1 — "Everyone thinks they reason well"

**CLEAR** (mostly — one gloss needed)

### SF-1A — SHOULD-FIX: "La Flèche" / "Jesuit college" — no explanation of what Jesuit colleges were
> "Descartes had been schooled at La Flèche, one of the best Jesuit colleges in Europe."

A 15-year-old will not know what a Jesuit college is or why that matters. One clause is enough: "La Flèche, one of the best schools in Europe (run by the Jesuits, the Catholic order famous for rigorous academic training)." Without it, the reader does not understand why the dissatisfaction carries weight — if the reader doesn't know this was a *prestigious* education, the complaint sounds like an entitled whinge.

### SF-1B — SHOULD-FIX: "theology, law" — mentioned without noting these were the peak of the curriculum
> "languages, history, oratory, poetry, philosophy, theology, law."

The list passes too quickly. For a newcomer to feel the force of the disappointment, they need one phrase acknowledging these were the highest-status subjects of the day, not hobbies. Something like "...theology and law (the two most prestigious professions a graduate could enter)." Currently the list reads as noise.

### SF-1C — SHOULD-FIX: "Paralogisms" capitalised in the Chapter 4 epigraph reference — see below
(Not a Chapter 1 issue; noted here to track that the word appears first unglossed in Ch 4.)

---

## Chapter 2 — "Four rules: the method itself"

**NEEDS-GLOSS**

### MF-2A — MUST-FIX: "precipitancy" — archaic word, never glossed
> "carefully to avoid precipitancy and prejudice"

This word appears in the Veitch translation quote and is the first rule's key prohibition. "Precipitancy" means rushing to a conclusion; most 15-year-olds will not know this archaic form (modern usage: "precipitousness" or more commonly just "haste"). The quote is verified and cannot be changed, but a parenthetical gloss immediately after is needed: e.g., "('precipitancy' here means jumping to a conclusion before you have enough reason)."

### MF-2B — MUST-FIX: "clearly and distinctly" — technical phrase introduced as if self-evident
> "what was presented to my mind so clearly and distinctly as to exclude all ground of doubt"

"Clearly and distinctly" is Descartes's technical standard for what the mind can trust — it matters enormously because Part IV's God proof relies on it. The text quotes it but never defines it. At minimum a parenthetical: "(by 'clearly and distinctly' Descartes means something very specific: an idea so vivid and sharp that the mind cannot even entertain doubt about it — the way 2+2=4 is clear and distinct, not just 'obvious')." Without this, Chapter 4's Cartesian circle issue is completely unintelligible.

### MF-2C — MUST-FIX: "axioms" / "lemmas" — used without explanation
> "A proof accepts only what is self-evident or already proven (certainty), breaks a theorem into the lemmas it needs (analysis), proceeds from axioms through simple results to harder ones..."

"Axiom" and "lemma" are technical mathematical vocabulary. A reader who does not take mathematics will not know these. "Axiom" gets a parenthetical elsewhere in the published pipeline ("a starting fact so basic you can't prove it, only accept it") — it needs one here. "Lemma" is the harder case: "a smaller, already-proved sub-result the main proof depends on." Both are MUST-FIX because the paragraph's entire argument — that the four rules are just mathematics-style reasoning extended — collapses if the reader doesn't follow what mathematics-style reasoning actually is.

### SF-2D — SHOULD-FIX: "accrual" analogy for beliefs — the metaphor is clear, but the reader may miss that "beliefs accumulated from childhood" is a technical claim in Descartes, not just a personal complaint
> "They had been accumulated since childhood, from teachers and custom and habit, never examined as a whole, and he could not trust a structure assembled that way."

This is clear as prose. A SHOULD-FIX note: later (Chapter 4) when "methodic doubt" arrives, the reader would benefit from a verbal anchor planted here — something like "...never examined as a whole for whether they were actually *certain*, only for whether they were *conventional*." Without that planted idea, the transition from Chapter 2's architectural analogy to Chapter 4's doubt move feels like a jump. Not MUST-FIX because Chapter 4 works adequately on its own, but the seam could be smoother.

### SF-2E — SHOULD-FIX: "twenty-one rules" reference — creates a minor loose end
> "Descartes had written some twenty-one rules years earlier in an unpublished work"

Good note; it establishes authenticity of the four rules. But "an unpublished work" deserves a title (the *Regulae ad Directionem Ingenii*, "Rules for the Direction of the Mind," written circa 1628, never published in his lifetime) — not because a 15-year-old needs the Latin but because "an unpublished work" sounds like it's being mentioned and then hidden. A single clause: "...in an unfinished manuscript he called the *Rules for the Direction of the Mind*, left unpublished when he died" resolves this minor mystery without adding weight.

---

## Chapter 3 — "A house to live in while the old one is torn down"

**CLEAR**

The provisional morality is the most accessible chapter and is explained exceptionally well. The "rents a place to stay" metaphor is exact and newcomer-friendly. The Epictetus comparison lands.

### SF-3A — SHOULD-FIX: "the Stoics... Epictetus" — no who-they-are for Epictetus
> "The resemblance to the Stoics is strong, in particular to Epictetus's division of things into those in our power and those not, though Descartes does not cite them."

"Epictetus" appears without a tag. A 15-year-old who has not met the Greeks section of this app will not know who this is. One phrase: "the Stoic philosopher Epictetus (a formerly enslaved Greek thinker of the first century AD who argued that peace of mind requires focusing only on what you control)" — or at minimum "the Stoic philosopher Epictetus." The observation that Descartes resembles him carries more weight if the reader knows who Epictetus is. SHOULD-FIX, not MUST-FIX, because the chapter's own explanation is complete without it.

---

## Chapter 4 — "The one thing that survives doubt: I think, therefore I am"

**LOST** (on two specific moves — the rest is clear)

This chapter is the heart of the book and the hardest for a newcomer. The prose is good but two argument gaps are significant enough to render the whole philosophical maneuver opaque.

### MF-4A — MUST-FIX: "methodic doubt" — never named as a concept
Part IV describes what scholars call "methodic doubt" (or "Cartesian doubt" or "hyperbolic doubt"), but the text never gives this move a name or defines what is distinctive about it. The chapter says Descartes "resolves to treat as flatly false anything he can find the least reason to doubt," which is accurate, but a newcomer will not know whether this is:
- Normal scepticism ("I don't believe things easily")
- A weird thought experiment he's doing on purpose ("pretend it's all false even if you can't genuinely believe it's false")
- Actual sincere belief that everything is false

The text hints at the answer in the last sentence of the first block ("The aim is not to actually believe nothing is real. It is to find out whether anything at all can withstand the strongest possible attack") but this comes *after* the methodology is described, not before. A one-sentence setup before the first quote is needed: something like "This is a deliberate thought experiment: Descartes does not actually believe the world is fake, but by *treating* as false everything he *could* doubt, he can test which beliefs, if any, survive the harshest possible scrutiny."

Without this, the cogito's conclusion that "even the extreme act of doubting proves a doubter exists" reads as a clever word-game rather than a philosophically serious move.

### MF-4B — MUST-FIX: The cogito step skips its own logic — the "therefore" is not explained
> "To doubt is to think, and thinking cannot be done by nothing; a thought requires a thinker."

This is the most important argument step in the book and it is compressed into a single sentence that contains a hidden assumption: that thoughts require thinkers in the way that punches require punchers. A 15-year-old will accept this easily — but the point of the gate is precisely to catch the unexplained leap, because smart newcomers will later hear that Lichtenberg objected ("it only follows that *there is thinking happening*, not that an 'I' is doing it") and will feel cheated if the text slid past the gap. The gate does not require defending Descartes against Lichtenberg — it requires *naming the step*. Something like: "...a thought requires a thinker — Descartes's assumption here is that thinking cannot float free without a subject; there must be an 'I' doing it, not just a process occurring." That one clause transforms the argument from a verbal flourish into a philosophical move a newcomer can engage with.

### MF-4C — MUST-FIX: "substance" — introduced without definition
> "I was a substance whose whole essence or nature consists only in thinking"

"Substance" in philosophy does not mean "material" or "stuff" (the way a 15-year-old uses the word). It is a technical term: an independently existing thing, something that needs nothing else in order to exist. Without this gloss, the sentence reads as "I am a stuff whose nature is thinking," which is meaningless. The next sentence ("...is wholly distinct from the body") depends on understanding "substance" as "a fully independent thing." This needs a parenthetical: "(a 'substance' in philosophical vocabulary is an independently existing thing — not a property of something else, but a thing in its own right)."

### MF-4D — MUST-FIX: "essence" — used as a technical term without flagging it is one
> "whose whole essence or nature consists only in thinking"

"Essence" here means "the property that makes something what it is, without which it would not be that thing." Descartes is making a specific claim: thinking is not something Descartes *does*, it is what Descartes *is*. Strip away the body, the location, the shape, the memory — what remains is a thinking thing and nothing else. The text uses "essence" and immediately appends "or nature" as a half-gloss, which is helpful but not quite enough. A newcomer will think "essence" just means "main feature." The technical claim ("what you are, not what you do") needs one explicit sentence. MUST-FIX because the mind-body distinction in Chapter 5 rests directly on this claim.

### MF-4E — MUST-FIX: The God argument — the move from "I have an idea of perfection" to "God put it there" is presented as obvious; the inferential step is not explained
> "Where could that idea have come from? Not from himself, he argues, because an imperfect thing cannot generate the idea of perfection out of its own limited resources; the lesser cannot manufacture the greater."

The text identifies the premise ("the lesser cannot manufacture the greater") correctly, but does not explain why Descartes thinks this premise is true. A newcomer will immediately wonder: "Why not? I can imagine a beach bigger than any beach I've seen, so I can imagine things more perfect than me — what's the problem?" The inference relies on a causal principle Descartes takes as a clear-and-distinct truth: that a cause must contain at least as much reality as its effect. The text does not name or explain this principle. Without it, "an imperfect thing cannot generate the idea of perfection" reads as an unsupported assertion. One sentence is needed: "His assumption is that you cannot get more out of a cause than is already in it — a shadow cannot be brighter than the thing casting it — so an idea of a being with unlimited perfection must have come from a source that actually *is* unlimited."

### MF-4F — MUST-FIX: "the Cartesian circle" — named but not explained
> "critics pounced at once on an apparent circle: clear and distinct perception is trusted because God guarantees it, but God's existence was reached by clear and distinct perception."

The Cartesian circle is named and described correctly. But a newcomer reading this for the first time will not understand *why* this is a problem. The text states the circularity but does not say what circularity means as a logical defect — namely, that if you need God to trust your reasoning, and you used your reasoning to prove God, you have assumed what you were supposed to prove. One sentence: "A circular argument is one where you assume the thing you're trying to prove — if Descartes needs God's guarantee before he can trust his reasoning, and he used that same reasoning to prove God exists, neither the reasoning nor the God proof is independently supported." Without this, the "circle" reads as a word critics use, not a comprehensible flaw.

### SF-4G — SHOULD-FIX: "Paralogisms" — appears in the first block of Ch. 4 (in the quote), never glossed
> "because some men err in reasoning, and fall into Paralogisms, even on the simplest matters of Geometry"

This is a Veitch translation word for "fallacies" (technically: invalid arguments that appear valid). The quote cannot be changed, but a parenthetical gloss immediately after — "(a 'paralogism' is an unintentional logical mistake, a proof step that seems valid but isn't)" — is needed. Without it, the word sits there as imposing jargon in the middle of the most critical chapter.

### SF-4H — SHOULD-FIX: "deduction" vs "inference" — the word "deduction" is not used but the move is deductive; the nature of the cogito as an inference vs a self-evident truth is a famous debate the text silently passes by
This is a SHOULD-FIX rather than MUST-FIX. The text handles the cogito well; flagging only because some readers will encounter the debate about whether "therefore" (donc) signals a deduction or a direct intuition, and the text does not address it. Not essential for clarity at this level; leave for the reviser's judgment.

---

## Chapter 5 — "The body as a machine: animals, the heart, and the two tests"

**NEEDS-GLOSS**

### MF-5A — MUST-FIX: "automaton" / "automata" — never used but the concept is introduced via circumlocution; the word "automaton" appears in the gate spec and the concept is central
The text uses "machine," "very sophisticated machine," and "clockwork" to describe what Descartes means, but never introduces the word "automaton" (Descartes's own term for animals as mechanical self-movers). This is not strictly a MUST-FIX for undefined terms since the word isn't in the text — but the *concept* is introduced without enough precision. The specific Cartesian claim is that animals are automata (self-moving machines), distinguishing them from simple tools. The text says "machine" throughout, which a 15-year-old may read as "robot" or "appliance." A brief clarifying clause would sharpen this: "...what Descartes calls an automaton — a self-moving machine that produces complex behavior through its own physical organization, not through thought."

### MF-5B — MUST-FIX: "rational soul" — introduced without definition, and the distinction between it and the bodily soul is not explained
> "Animals have no rational soul on this view"

"Rational soul" is used as if the reader already knows what a soul is in Descartes's framework and why there are different kinds. For a newcomer who has just spent Chapter 4 learning Descartes thinks the thinking self is a substance with no body, "soul" and "thinking thing" appear to be two different vocabularies for the same claim — but the relationship is not made explicit. A one-sentence gloss: "('soul' in this context is Descartes's word for the thinking substance of Chapter 4 — the non-physical thing that thinks; a 'rational soul' is specifically one capable of genuine reasoning and language, as distinct from the animal functions of digestion, movement, and sensation that run without it)."

### MF-5C — MUST-FIX: "vital forces" — used as the thing Descartes *rejects*, but never defined
> "he explains the body's workings as one would explain a pump or a clock, with no need to appeal to mysterious vital forces."

"Vital forces" is the older, pre-Cartesian explanation the text is contrasting against Descartes's mechanism. The 15-year-old does not know what a "vital force" is or why anyone believed in one. One phrase: "(the idea, common before Descartes, that living things are animated by a special non-physical life-energy distinct from matter)." Without this, "no need to appeal to vital forces" is meaningless — the reader doesn't know what was supposedly being appealed to.

### SF-5D — SHOULD-FIX: "Le Monde" / "Galileo's condemnation" — Galileo mentioned without who-he-is
> "Descartes had written a whole treatise on physics, *Le Monde*, and then suppressed it in 1633 when he learned that Galileo had been condemned in Rome for teaching that the earth moves"

A 15-year-old in 2026 probably knows "Galileo" but may not know "condemned in Rome" means the Inquisition put him under house arrest for heliocentrism. One clause resolves the mystery: "...condemned in Rome by the Church's Inquisition for teaching that the earth moves around the sun, which was then considered heresy." Without this, the fear motivating Descartes's suppression is not fully legible.

### SF-5E — SHOULD-FIX: "dualism" — the word is never used, but the concept is introduced in the final paragraph
> "What is genuinely new in Descartes is sharper and more troublesome than that. He makes mind and body two complete substances..."

The text correctly avoids crediting Descartes with "inventing dualism" (good, per the pipeline's potted-summary flag), but it never gives the reader the word "dualism" at all. A newcomer who hears "dualism" elsewhere will not be able to connect it to what they just read. One sentence is enough: "This two-substance picture is what later philosophers called 'mind-body dualism.'" SHOULD-FIX: the avoidance of the word is slightly over-corrected.

---

## Chapter 6 — "Lords and possessors of nature: why he published, and in French"

**CLEAR**

Chapter 6 is the most accessible in the book. The practical ambitions of the *Discourse* — a science for human mastery, medicine, a collective enterprise — come through clearly. The French-vs-Latin argument is explained well and the Vatier-letter note is handled correctly.

### SF-6A — SHOULD-FIX: "preceptors" — archaic word in the closing direct quote
> "I write in French, which is the language of my country, in preference to Latin, which is that of my preceptors"

"Preceptors" means "teachers" or "instructors" (literally those who give precepts). This is a Veitch translation word. As with "precipitancy" in Chapter 2, the quote cannot be changed, but a post-quote parenthetical gloss is needed: "('preceptors' = his teachers, specifically the scholars trained in Latin)." Without it, a 15-year-old either guesses correctly, guesses wrong, or is distracted.

### SF-6B — SHOULD-FIX: "the ancients" — used throughout without ever defining who they are
> "those who give heed to the writings of the ancients only"

"The ancients" appears several times across the book (throughline, brk block, Chapter 6) meaning the classical Greek and Roman writers, primarily Aristotle. A newcomer may understand this intuitively but it is worth one clean definition the first time it appears (which is actually in the throughline/brk, not Chapter 6 — so this is a retroactive flag for an earlier placement). SHOULD-FIX in whichever chapter first uses the phrase.

---

## Cross-chapter observations

### MF-X1 — MUST-FIX: "a priori" — not used in this text, but "clear and distinct perception" functions as the rationalist analog; the concept of reason-independent-of-experience is assumed throughout but never named or explained
Gate spec explicitly flags "a priori" as a term to watch. The draft is careful to avoid the jargon, but the concept it names — that some knowledge can be reached by pure reason without sensory experience — is doing load-bearing work in the argument from Part II onward (the method is about what reason alone can establish). The text does not need to use "a priori" but it does need, somewhere in Chapter 2 or 4, one sentence distinguishing "what reason can work out for itself" from "what the senses tell us" — because the whole Cartesian project depends on the primacy of the former. Currently the reader picks this up by feel rather than by explicit statement.

### MF-X2 — MUST-FIX: "deduction" — not used but the method IS a deductive procedure; the gate spec lists this term
The gate spec flags "deduction" as a term to watch. The draft uses "reasoning," "proof," "inference," "certainty" but never "deduction." Given that the four-rules chapter is centrally about a deductive procedure (start from certainties, follow valid steps, reach conclusions), a 15-year-old would benefit from one explicit sentence at the point where the method is described: "This style of reasoning — where you start from things you're certain of and derive conclusions that *must* follow — is called deduction." The word cannot be left to the reader's guesswork when it is the method's fundamental structure.

### SF-X3 — SHOULD-FIX: "scholastic" / "scholastics" — the word appears in the brk block and nowhere else; it is not defined
> "...than a syllogism. French-language books existed, but scholarly ones..."

Actually "scholastic" does not appear explicitly in the main text — the brk block uses "natural philosophy," "clergy and scholars," "university curriculum" to describe the tradition. This is handled well. Flag retracted. No issue.

### SF-X4 — SHOULD-FIX: The reader is never told what the book's title literally means
> "the *Discourse on the Method of Rightly Conducting One's Reason and of Seeking Truth in the Sciences*"

The full title appears once (Chapter 1) but no note is made of what "Method" refers to or why it was a significant word in 1637. A one-sentence gloss in Chapter 1: "The title does not mean a method like a recipe; Descartes means a *procedure for reasoning itself*, a way to use your mind that will yield certainty instead of confusion." Currently the reader has to reverse-engineer this from Chapter 2. Not MUST-FIX since Chapter 2 gets there, but the gap is real.

---

## Summary counts

| Severity | Count | Chapters |
|---|---|---|
| MUST-FIX | 13 | Throughline (1), brk (1), Ch 2 (3), Ch 4 (6), Ch 5 (3), Cross (2*) |
| SHOULD-FIX | 11 | Throughline (1†), brk (2), Ch 1 (2), Ch 2 (2), Ch 3 (1), Ch 4 (2), Ch 5 (2), Ch 6 (2) |

*MF-X1 and MF-X2 are cross-chapter findings without a single home; the reviser should pick the placement.
†SF-T2 is a flag-only, no change required.

**Chapter-level verdicts:**

| Chapter | Verdict |
|---|---|
| Throughline | NEEDS-GLOSS |
| The Break (brk) | NEEDS-GLOSS |
| Ch 1 — Dissatisfied student | CLEAR |
| Ch 2 — Four rules | NEEDS-GLOSS |
| Ch 3 — Provisional morality | CLEAR |
| Ch 4 — Cogito | LOST (on the argument steps) |
| Ch 5 — Body as machine | NEEDS-GLOSS |
| Ch 6 — Lords and possessors | CLEAR |

---

## Priority reading order for the reviser
Fix Chapter 4's six MUST-FIX findings first (MF-4A through MF-4F) — they are the reason Chapter 4 is rated LOST. Then MF-2A, MF-2B, MF-2C (Chapter 2 technical vocabulary), then MF-5A, MF-5B, MF-5C (Chapter 5). Then the two cross-chapter MUSTs (MF-X1, MF-X2). Finally the should-fixes in order above.

The draft's strengths are real: the autobiographical framing, the architecture analogy, the provisional morality, and Chapter 6 are all newcomer-clear without condescension. The failures concentrate exactly where they should: the hardest philosophical moves in Chapter 4, where clarity is most needed and most difficult.
