# Gate 1 — Fact-checker report: "Plato" (philosophy thinker deep read)

**Critic:** Fact-checker (Sonnet, web-enabled)
**Date:** 2026-06-12
**Draft:** `audits/philosophy-pipeline/plato-draft.md`
**Pack:** `audits/philosophy-pipeline/plato-fact-pack.md`
**Ledger:** `audits/philosophy-pipeline/plato-fact-ledger.md`

Web sources consulted during this pass: Stanford Encyclopedia of Philosophy (Plato entry), Internet Encyclopedia of Philosophy (Plato entry), Project Gutenberg texts of the Jowett translations (Meno #1643, Republic #1497, Phaedo #1658, Phaedrus #1636, Symposium #1600), Wikisource Jowett Parmenides, classics.mit.edu Aristotle NE Ross translation, Wikipedia entries on Amicus Plato, Roger Bacon, Berengar of Poitiers, the Third Man argument, the Ring of Gyges, Whitehead's Process and Reality.

---

## MUST-FIX LIST (ship-blocking)

### MF-1 — Third Man ellipsis drops a logically load-bearing clause (Ch 2, body quote)

**Draft:** "another idea of greatness now comes into view over and above absolute greatness, and the individuals which partake of it; and then another, over and above all these... and so each idea instead of being one will be infinitely multiplied."

**Problem:** The ellipsis silently excises the key logical step. The full Jowett text (Wikisource Parmenides 132b, Jowett) reads:

> "Then another idea of greatness now comes into view over and above absolute greatness, and the individuals which partake of it; and then another, over and above all these, **by virtue of which they will all be great,** and so each idea instead of being one will be infinitely multiplied."

The bolded clause — "by virtue of which they will all be great" — is the pivot of the regress: it states WHY a further Form is required each time. Without it the reader sees a list of more-and-mores, not the argument that each new collection of greats forces a new explainer. The start and end of the quoted passage are word-for-word accurate; the middle is load-bearing and must not be elided or must be signaled with an honest editorial bracket note. The pack's §3 Ch2 records the complete passage; this is a drift at the quoting stage.

**Fix (two options):**
- Restore the full unelided text: "...and then another, over and above all these, by virtue of which they will all be great, and so each idea instead of being one will be infinitely multiplied."
- Keep the ellipsis but add an editorial gloss in the prose immediately after: "—that is, each new collection of great things demands yet another Form to explain it, spinning an infinite regress."

---

### MF-2 — "Roger Bacon around 1267" is not the earliest attestation of the "amicus" formula (Ch 7, body)

**Draft:** "That snappy Latin sentence is a medieval paraphrase (it first turns up in Roger Bacon around 1267, using Socrates rather than Plato, and Newton later wrote the Plato version in a notebook)."

**Problem:** Web verification establishes that Berengar of Poitiers used a Socrates-version of the formula around 1150 — roughly a century before Roger Bacon. Bacon's c. 1267 version also uses Socrates, so that detail is correct, but the "first turns up" attribution is wrong. The claim that Bacon is the earliest attestation is false; Berengar of Poitiers is the standard scholarly citation for the earliest Latin form. The overall point (it is a medieval Latin paraphrase, not a verbatim Aristotle quotation) is completely correct and must be preserved — only the "first turns up" date needs repair.

**Fix:** Change to something like: "That snappy Latin sentence is a medieval Latin paraphrase — the earliest known version, using Socrates rather than Plato, appears in the 12th-century theologian Berengar of Poitiers, and it circulated in various forms through the 13th century; Newton wrote the Plato version in a student notebook." Alternatively, simply cut the "first turns up" dating and say: "it is a medieval Latin paraphrase, with Socrates rather than Plato in the oldest versions, and Newton put the Plato version in a notebook."

The pack §9 #5 correctly identifies Bacon without claiming priority; the error is in the draft, not the pack.

---

### MF-3 — Pack §2 slip propagated: the Meno paradox-speaker is Meno himself, not Glaucon (Ch 3)

**Status:** This is a pack error (§2 labels the speaker "Glaucon," who is a Republic character, not a Meno character), and the DRAFT correctly avoids repeating it by attributing the paradox neutrally to "the Meno" and "Meno." The LEDGER [VERIFY-3] correctly flagged this as a suspected pack slip. However, the fact-checker's obligation is to resolve it for the record.

**Verdict:** ✅ Draft is clean on this point. The paradox is posed by Meno himself (Jowett, confirmed against Gutenberg #1643: "How will you enquire, Socrates, into that which you do not know? What will you put forth as the subject of enquiry?"). The draft says "it comes up in the Meno" — accurate. No edit needed in the draft. The coordinator should correct the pack §2 slip ("Glaucon poses the 'Meno's paradox'" → "Meno himself poses the paradox") for future reference.

---

### MF-4 — Plato's age at Socrates' death: draft says "about twenty-eight," pack says "~29" — web confirms 28 (Ch 1)

**Draft (Ch 1):** "Plato was about twenty-eight when Athens, in 399 BC, put Socrates on trial."

**Pack §1:** "Plato was ~29" at Socrates' death.

**Verdict:** The DRAFT is right; the PACK contains an error. Web verification: SEP Plato entry says "around 28 when Socrates was killed." IEP cites Diogenes Laertius: "Plato was twenty-eight when Socrates was put to death." The standard SEP/IEP figure is 28, not 29. The discrepancy arises because the pack gives birth year as "c.429?" and death date as 399 BC (429 − 399 = 30; but ancient age-reckoning and the "28" from DL reflect either a 427 BC birth or ancient reckoning conventions). In any case, the scholarly consensus reported in the main reference tools is 28, not 29.

**Status for the draft:** ✅ DRAFT IS CORRECT AS WRITTEN ("about twenty-eight"). No change needed. The pack §1 should be corrected, but the draft need not change.

This resolves [VERIFY-1] from the ledger: "about twenty-eight" is defensible and matches the leading scholarship.

---

## SHOULD-FIX LIST

### SF-1 — "Snarling at his own eyes the whole time" slightly overstates the Leontius passage (Ch 5)

**Draft:** "He feels a disgusting urge to look, and he's ashamed of the urge and tries to resist it, and finally he can't, and he runs over and stares, furious at himself the whole time, snarling at his own eyes."

**Jowett text (Republic IV, confirmed):** "He felt a desire to see them, and also a dread and abhorrence of them; for a time he struggled and covered his eyes, but at length the desire got the better of him; and forcing them open, he ran up to the dead bodies, saying, Look, ye wretches, take your fill of the fair sight."

**Issue:** The Jowett text shows the self-rebuke ("Look, ye wretches, take your fill of the fair sight") as the final act after capitulating, addressed to his own eyes in that moment — not a running internal commentary "the whole time." "Furious at himself the whole time" implies continuous self-directed rage during the entire episode. The text describes a struggle phase (covering his eyes), followed by capitulation, followed by a single bitter address to his eyes when he runs up. The draft's "the whole time" is a small but genuine overstatement.

**Fix (SHOULD):** Change "furious at himself the whole time, snarling at his own eyes" to "and when he does, turns on his own eyes — 'Take your fill of the fair sight,' he snarls." This is more accurate and actually more vivid. Alternatively: "furious at himself, snarling at his own eyes as he gives in" (locating the self-disgust at the moment of capitulation, not throughout).

Name is correctly given as Leontius. The illustration of spirit's role is philosophically accurate. This is a paraphrase-precision issue, not a structural error.

---

### SF-2 — Aristotle NE paraphrase drops the word "piety" (a substantive element) (Ch 7)

**Draft:** "both the friends and the truth are dear to us, but that our duty is to prefer the truth."

**Ross text (NE 1096a, confirmed at classics.mit.edu):** "while both are dear, piety requires us to honour truth above our friends."

**Issue:** The draft paraphrases correctly at the level of sentiment but loses the word "piety" (pietas in the Latin tradition), which is substantive: Aristotle is framing truth-telling as a quasi-religious moral obligation — not merely rational preference or abstract duty. "Piety" is also specifically ironic here, given that Socrates was executed partly for impiety. The draft says "our duty is to prefer the truth," which is accurate but misses the weight of the religious framing. The draft correctly ships this as paraphrase with no quotation marks — pack-compliant — but a sharper paraphrase would include the piety element.

Additionally, the draft says Aristotle is "visibly torn about turning on his teacher's central idea" and that it's "painful." The word "painful" does not appear in the Ross text. The sentiment is implied by the language of piety and dear friendship but is the draft's own addition.

**Fix (SHOULD):** Change the paraphrase to something like: "both the friends and the truth are dear to us, he says, but piety — and he means that word — requires us to honour truth above our friends." Or: "both are dear to us, but piety requires honouring truth above friendship." Either preserves the Ross text's actual weight without requiring quotation marks. The addition of "painful" can stay as an interpretive gloss if clearly framed as such.

---

### SF-3 — Phaedrus chariot quote: "shag-eared" vs. "shag-eared" — pack VERIFIED, but draft formatting check

**Draft (Ch 5):** quotes the chariot passage with "shag-eared and deaf, hardly yielding to whip and spur."

**Pack §3 Ch7:** VERIFIED from Jowett Phaedrus: "shag-eared and deaf, hardly yielding to whip and spur."

**Verdict:** ✅ CONFIRMED. Both the white horse and dark horse descriptions in the draft match the pack §3 Ch7 VERIFIED passages word-for-word. Pack §10.2 flagged the Phaedrus Gutenberg URL (#1636) as needing a load-check before ship — the coordinator should confirm `https://www.gutenberg.org/cache/epub/1636/pg1636.txt` resolves and is the Jowett Phaedrus before integration. No draft change needed.

---

### SF-4 — The Parmenides source URL: unresolved at pack stage (coordinator action item)

**Pack §10.3:** explicitly flags that no single Gutenberg file number was pinned for the Parmenides; the recommended source is Wikisource: `https://en.wikisource.org/wiki/Parmenides_(Plato)`.

**Verdict:** The Third Man passage was confirmed against the Wikisource Jowett Parmenides during this pass (the passage at ~132b is there and is Jowett translation). The coordinator should add this URL as the born-verified sourceUrl for the Third Man passage before ship.

---

## VERIFIED CLEAN — by surface

### 1. Quotations — word-for-word vs. pack §3 + real texts

| Quote | Source | Status |
|---|---|---|
| "Plato, if I am not mistaken, was ill." — Phaedo 59b, Jowett | Pack §3 Ch1; Gutenberg #1658 | ✅ CONFIRMED |
| "the good is not only the author of knowledge to all things known, but of their being and essence, and yet the good is not essence, but far exceeds essence in dignity and power." — Republic VI, Jowett | Pack §3 Ch2; Gutenberg #1497 | ✅ CONFIRMED |
| "And I am certain that no one ever did teach him." — Meno, Jowett | Pack §3 Ch3; Gutenberg #1643 | ✅ CONFIRMED |
| "before we began to see or hear or perceive in any way, we must have had a knowledge of absolute equality" + "of beauty, goodness, justice, holiness" — Phaedo, Jowett | Pack §3 Ch3; Gutenberg #1658 | ✅ CONFIRMED |
| true opinions "are beautiful and fruitful, but they run away out of the human soul, and do not remain long" — Meno, Jowett | Pack §3 Ch3; Gutenberg #1643 | ✅ CONFIRMED |
| "The true philosophers… are always occupied in the practice of dying." — Phaedo, Jowett | Pack §3 Ch3; Gutenberg #1658 | ✅ CONFIRMED |
| Cave epigraph: "Behold! human beings living in a underground den…" — Republic VII (514a), Jowett | Pack §3 Ch4; Gutenberg #1497 | ✅ CONFIRMED — "a underground" is authentic Jowett; the in-text note is accurate |
| Ring of Gyges: "Let us suppose that the just and unjust have two rings…for every one will do evil if he can." — Republic II, Jowett | Pack §3 Ch5; Gutenberg #1497 | ✅ CONFIRMED |
| Justice: "the quality, I mean, of every one doing his own work, and not being a busybody…" — Republic IV, Jowett | Pack §3 Ch5; Gutenberg #1497 | ✅ CONFIRMED |
| Philosopher-kings: "Until philosophers are kings, or the kings and princes of this world have the spirit and power of philosophy… cities will never have rest from their evils." — Republic V (473d), Jowett | Pack §3 Ch5; Gutenberg #1497 | ✅ CONFIRMED |
| Royal lie: "just one royal lie which may deceive the rulers, if that be possible, and at any rate the rest of the city." — Republic III, Jowett | Pack §3 Ch5; Gutenberg #1497 | ✅ CONFIRMED — "royal lie" is Jowett; "noble lie" correctly glossed as the editorial convention |
| Diotima culmination: "He who has been instructed thus far in the things of love… a nature of wondrous beauty…everlasting, not growing and decaying, or waxing and waning." — Symposium ~211a, Jowett | Pack §3 Ch6; Gutenberg #1600 | ✅ CONFIRMED |
| Diotima ladder opening: "He who would proceed aright… to love one such form only" — Symposium ~210a, Jowett | Pack §3 Ch6; Gutenberg #1600 | ✅ CONFIRMED |
| Phaedrus white horse: "upright and cleanly made… a lover of honour and modesty and temperance… needs no touch of the whip, but is guided by word and admonition only" — Phaedrus, Jowett | Pack §3 Ch7; Gutenberg #1636 | ✅ CONFIRMED (pack VERIFIED) |
| Phaedrus dark horse: "a crooked lumbering animal, put together anyhow… flat-faced and of a dark colour… shag-eared and deaf, hardly yielding to whip and spur" — Phaedrus, Jowett | Pack §3 Ch7; Gutenberg #1636 | ✅ CONFIRMED (pack VERIFIED) |
| Third Man quote (body) — "another idea of greatness now comes into view…" | Pack §3 Ch2; Wikisource Jowett Parmenides | ⚠️ ELLIPSIS DROPS LOAD-BEARING CLAUSE — see MF-1 |
| Whitehead: "The safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato." — Process and Reality (1929) | Pack §3 Ch7; web confirmation | ✅ CONFIRMED — exact wording verified |

**Quote pass: 15 of 16 CONFIRMED; 1 ellipsis problem (MF-1).**

---

### 2. The nine [VERIFY] tags from the ledger — resolved

| Tag | Claim | Verdict | Notes |
|---|---|---|---|
| **[VERIFY-1]** | "about twenty-eight" at Socrates' death | ✅ DRAFT CORRECT | SEP: "around 28"; IEP (via DL): "twenty-eight." Pack §1's "~29" is the error. No change to draft. |
| **[VERIFY-2]** | Third Man ellipsis — does it drop a load-bearing clause? | ❌ YES — MUST-FIX | See MF-1. The "by virtue of which they will all be great" clause is the logical pivot. |
| **[VERIFY-3]** | Who poses Meno's paradox — Glaucon (pack) or Meno (draft)? | ✅ DRAFT CORRECT | Meno poses it in the Meno (Gutenberg confirmed). Pack §2 has the error. Draft attribution to "the Meno" / "Meno" is right. No change to draft. |
| **[VERIFY-4]** | Slave-boy geometry figures (2 ft / 4 sq ft / 16 / 9 / diagonal = 8) | ✅ CONFIRMED | All four figures match Jowett's Meno exactly (Gutenberg #1643). |
| **[VERIFY-5]** | Gyges chasm: "golden ring on a corpse" vs. pack's "bronze horse, hollow interior, dead body" | 🟡 ACCEPTABLE COMPRESSION | Jowett: "hollow brazen horse… dead body… gold ring." Draft's "among other wonders a golden ring on a corpse" omits the brazen horse but adds no false detail. Acceptable for pace; the full apparatus could be added if desired. Not a must-fix. |
| **[VERIFY-6]** | Conflict-of-desire proof for three soul-parts | ✅ CONFIRMED | "Want and refuse to drink at once → different parts" is the canonical Republic IV argument (principle of opposites / principle of non-contradiction applied to the soul). Draft does not overstate it. |
| **[VERIFY-7]** | Leontius/corpses example — accurate to Republic IV? | ✅ CONFIRMED (with SF-1 precision note) | Name, book, and purpose all correct. "The whole time" is a slight overstatement of when self-disgust fires; see SF-1. |
| **[VERIFY-8]** | "Same staircase, two engines" ladder = Cave/Line — author synthesis? | 🟡 AUTHOR SYNTHESIS, CORRECTLY FRAMED | The parallel is interpretive, not a direct Plato statement. The draft presents it as the chapter's own reading ("And notice how neatly this ladder is the same staircase"), not as a Plato quote. No false attribution. Flagged for what it is. |
| **[VERIFY-9]** | Aristotle NE 1096a Ross wording | 🟡 PARAPHRASE ACCURATE IN SUBSTANCE; loses "piety" | See SF-2. Ross: "piety requires us to honour truth above our friends." Draft: "our duty is to prefer the truth." The religious framing ("piety") is dropped. Draft correctly ships this with no quotation marks. SF-2 recommends a sharper paraphrase. |

---

### 3. Socratic-problem fidelity check (this read's #1 trap)

The draft handles the Socratic problem consistently and correctly. Specific confirmations:

- **Throughline / break block:** "Plato never says any of this in his own voice. He writes plays, and the man doing the talking is usually Socrates." ✅ Set up in the frontmatter before the reader enters.
- **Ch 1:** The three dialogue groups (early / middle / late) are explained explicitly with the correct dialogues named in each group, and the key framing given: "when we walk the theory of Forms or the tripartite soul or the just city, we are walking the doctrine of Plato's middle-period Socrates, dramatized through a character." ✅
- **Middle-dialogue doctrine:** The draft does not flatly assert "Plato believed X" for middle-period content; it consistently says "Plato argues, through Socrates" or "Socrates says" or "Plato's Socrates." ✅
- **Late-period self-criticism:** The Parmenides' Third Man is explicitly identified as "old Parmenides cross-examines a young Socrates" and described as Plato staging his own theory's demolition. ✅
- **No flat over-attribution found:** The draft does not anywhere assert that Plato in propria persona held the Forms, the philosopher-king doctrine, or the tripartite soul without the dialogue frame visible. The hedge is kept throughout without being repetitive. ✅

**Socratic-problem check: PASSES.**

---

### 4. Dates + biographical facts

| Claim | Verdict | Notes |
|---|---|---|
| "born in Athens in the late 420s BC" | ✅ CONFIRMED | SEP: "429?"; IEP: "428-7 BC." "Late 420s" covers all plausible values. |
| "died in 347 BC, around eighty" | ✅ CONFIRMED | SEP and IEP both give 347; IEP: "eighty or eighty-one." |
| "about twenty-eight when Athens, in 399 BC, put Socrates on trial" | ✅ CONFIRMED | SEP: "around 28"; IEP (via DL): "twenty-eight." Pack §1 mistakenly gives ~29; draft is right. |
| "Aristocles" / "Plato" = broad, from Diogenes Laertius ~600 years later, three versions, treat as late tale | ✅ CONFIRMED | DL III.4; multiple DL versions; pack §1 and §4 LATE-LEGEND (DL). "Plato" was also an ordinary Athenian name. Framed correctly. |
| Academy in "the 380s, by the usual reckoning" — draft says the Academy is implicit in Ch 1 + Ch 7 without a specific founding year | ✅ CONFIRMED | The draft does not assign a specific founding year; pack §1 flags no primary source pins 387 BC. Clean. |
| Dialogue groupings (early/middle/late) with the dialogue titles listed | ✅ CONFIRMED | Standard scholarly classification; dialogues named in each group are correctly assigned. Meno is at the "early/middle transition" (pack §2) and the draft places it in early material (Ch 3) — defensible. |
| Plato's Socrates: "almost certainly became Plato's mouthpiece" in middle dialogues | ✅ CONFIRMED | Scholarly consensus; correctly hedged ("the consensus is that 'Socrates' has quietly become Plato's mouthpiece, saying things the real Socrates probably never said"). |
| Diotima of Mantinea: "almost certainly not a real person" | ✅ CONFIRMED | Pack §4: "PLATO'S INVENTION (the scholarly consensus)." Draft: "A real person? Almost certainly not; most scholars think Plato invented her." Correctly framed. |
| Popper, *The Open Society and Its Enemies*, vol. I "The Spell of Plato" (1945) | ✅ CONFIRMED | Title, date, and quoted phrases ("philosophical champion of the closed society," "purely totalitarian") verified against the pack's VERIFIED phrasings, which were in turn drawn from Popper's text. |
| Aristotle joined the Academy "around seventeen, stayed for twenty years" | ✅ CONFIRMED | Standard scholarly claim (SEP Aristotle entry); defensible. |
| Arcesilaus turned the Academy Skeptic "around the 260s BC" | ✅ CONFIRMED | Pack §6 gives "~c. 268 BC"; "around the 260s BC" in the draft is a light hedge. Consistent. |
| Whitehead, *Process and Reality* (1929) | ✅ CONFIRMED | Date, attribution, exact wording all verified. |

**Date and biography check: ALL CONFIRMED.**

---

### 5. Position summaries — potted-summary trap check

| Position | Assessment |
|---|---|
| Theory of Forms: "perfect, changeless originals… the Beautiful itself, the Equal itself… the mind can grasp by reasoning and the senses can never reach" — not "copies in heaven" | ✅ CORRECT — and the "perfect copies floating in heaven" cartoon is explicitly killed in Ch 2 with the correct explanation that the Forms are non-spatial and non-temporal |
| Participation (methexis): recipe/dinners analogy — Form is master recipe, beautiful things are individual dinners | ✅ CORRECT — participation is the right technical term (Phaedo); the analogy is the author's illustration, clearly so |
| Cave: "not a story about reality being an illusion" — about education, epistemic access | ✅ CORRECT — explicitly anti-Matrix framing; the philosophy pipeline's #1 cave trap is addressed directly in Ch 4. "The shadows are real shadows of real statues lit by a real fire moved by real people" — accurate |
| Recollection (anamnesis): "you don't learn anything new; learning is recollection" | ✅ CORRECT — the Meno's own argument; the slave-boy demonstration run as a full worked example with the geometry figures confirmed |
| Tripartite soul: reason (logistikon) / spirit (thymos) / appetite (epithumia) | ✅ CORRECT — the Phaedrus chariot version and the Republic argument both given; correctly described as a PARAPHRASE-LEVEL presentation with no invented quotation marks |
| Philosopher-king: "not a politician who reads philosophy on the side, but a ruler whose whole authority comes from having seen the Form of the Good" | ✅ CORRECT — the draft gives the argument's logic clearly and does not skip the step that connects Cave → philosopher-king |
| "Platonic love": "a kind of love that starts with physical desire and uses it as the first rung of a ladder" | ✅ CORRECT — the folk usage ("sex-removed friendship") is named as the caricature and replaced with the actual Diotima ladder, which is walked rung by rung |
| Third Man: "Plato's own self-criticism, staged in the Parmenides" | ✅ CORRECT — the argument is walked correctly; Aristotle's label for it ("Third Man") noted; the draft correctly notes that the example in Plato's own text is "greatness" not "man" |
| Forms "not in a location": "non-spatial and non-temporal… 'The realm of the Forms' is a way of talking about a kind of reality, not a location you could fly to" | ✅ CORRECT — addresses the §2 trap exactly |
| "Amicus Plato" is a medieval Latin paraphrase, not verbatim Aristotle | ✅ CORRECT — framed as "a medieval paraphrase (it first turns up in Roger Bacon around 1267...)" but see MF-2: the dating of "first turns up" is wrong; the core claim (medieval paraphrase, not Aristotle) is correct |

**Position summary check: ALL CORRECT except MF-2 dating of "amicus" formula.**

---

### 6. §9 Blacklist sweep — confirmed fake "Plato" quotes

| Item | Status |
|---|---|
| "Be kind, for everyone you meet is fighting a hard battle." | ✅ ABSENT from draft |
| "Only the dead have seen the end of war." | ✅ ABSENT from draft |
| "Music is a moral law. It gives soul to the universe…" | ✅ ABSENT from draft |
| "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light." | ✅ ABSENT from draft |
| "Amicus Plato, sed magis amica veritas" as verbatim Aristotle | ✅ CORRECTLY HANDLED — framed as a medieval Latin paraphrase, never as a direct Aristotle quote. See MF-2 for the date correction needed. |
| Any first-person "Plato said, 'I believe…'" attributions | ✅ ABSENT — Plato never speaks in first person in the draft; all doctrine routes through the dialogue/Socrates frame |

**Zero blacklist leaks.** ✅

---

## Structural and surface checks

### Epigraphs (all 7 chapters)

| Chapter | Epigraph | Status |
|---|---|---|
| Ch 1 | "Plato, if I am not mistaken, was ill." — Phaedo 59b, Jowett | ✅ CONFIRMED word-for-word |
| Ch 2 | "the good is not only the author of knowledge…far exceeds essence in dignity and power." — Republic VI, Jowett | ✅ CONFIRMED word-for-word |
| Ch 3 | "And I am certain that no one ever did teach him." — Meno, Jowett | ✅ CONFIRMED word-for-word |
| Ch 4 | "Behold! human beings living in a underground den…" — Republic VII (514a), Jowett | ✅ CONFIRMED — including the authentic "a underground" (archaic Jowett grammar); in-text note is accurate |
| Ch 5 | "Let us suppose that the just and unjust have two rings, like that of Gyges…every one will do evil if he can." — Republic II, Jowett | ✅ CONFIRMED word-for-word |
| Ch 6 | "He who has been instructed thus far in the things of love… a nature of wondrous beauty… everlasting, not growing and decaying, or waxing and waning." — Symposium (~211a), Jowett | ✅ CONFIRMED word-for-word |
| Ch 7 | "The safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato." — Whitehead, Process and Reality (1929) | ✅ CONFIRMED exact wording |

**All 7 epigraphs confirmed clean.** ✅

### "Why this is a break" block

The break block correctly sets up the Heraclitus/Parmenides deadlock, the Sophist-relativism consequence, the Platonic two-level solution, and the claim that the Forms are the price of knowledge being possible. The "abstract original more real than the touchable copy" framing is accurate and explicitly anti-commonsense in the right direction. ✅

The dialogue-form caveat is placed in the break block (before Ch 1), not buried — correct placement given the pipeline requirement. ✅

### Influence chain (Ch 7)

| Claim | Verdict |
|---|---|
| Aristotle joined Academy ~17, stayed ~20 years | ✅ Standard (SEP Aristotle) |
| Aristotle objected: Forms park everything in a separate realm, double the problem, break the link between Form and particular | ✅ Accurate statement of the main Aristotelian objection |
| Academy turned Skeptic under Arcesilaus | ✅ CONFIRMED |
| Middle Platonism (Plutarch): Plato + Aristotle + Stoics blended | ✅ CONFIRMED |
| Plotinus (3rd c. AD): Good-beyond-being → the One; Forms as contents of divine Intellect; mystical ascent | ✅ CONFIRMED (consistent with era 1 ch7 already gated) |
| Augustine read "the books of the Platonists" (Plotinus, Latin) in the 380s | ✅ CONFIRMED (SEP Augustine: Plotinus + Porphyry via Marius Victorinus; the era 2 pack cross-reference) |

**Influence chain check: ALL CONFIRMED.**

---

## Final counts

| Severity | Count | Items |
|---|---|---|
| MUST-FIX (❌) | 2 | MF-1 (Third Man ellipsis drops load-bearing logical clause), MF-2 ("first turns up in Roger Bacon" — earliest attestation is Berengar of Poitiers ~1150, not Bacon ~1267) |
| SHOULD-FIX (⚠️/🟡) | 4 | SF-1 (Leontius "whole time" overstatement), SF-2 (NE paraphrase loses "piety"), SF-3 (Phaedrus URL coordinator load-check), SF-4 (Parmenides born-verified sourceUrl needed) |
| PACK CORRECTIONS needed (not draft changes) | 2 | Pack §2 "Glaucon poses the Meno paradox" → Meno poses it; Pack §1 "~29 at Socrates' death" → ~28 (draft already correct on both) |
| CONFIRMED CLEAN (✅) | balance | All 7 epigraphs word-for-word; 14 of 15 body quotes confirmed; all 9 [VERIFY] tags resolved; all biographical dates; Socratic-problem fidelity throughout; all 4 blacklisted quotes absent; position summaries accurate; break block accurate; influence chain consistent |

**Overall assessment: very clean draft with 2 targeted must-fixes.** The pipeline discipline held: zero blacklist leaks, zero wrong-dialogue attributions, every verified quote matched its PD source word-for-word except for the one load-bearing ellipsis. The Socratic-problem hedge (the read's #1 trap) is handled correctly and consistently throughout all seven chapters without being pedantic. The two must-fixes are both in Ch 2 / Ch 7 body prose — one a dropped clause in a direct quotation, one a wrong date on an accurate point. Neither is a structural error in positions or arguments. The four should-fixes are paraphrase-precision issues. This draft can reach clean in a targeted pass.
