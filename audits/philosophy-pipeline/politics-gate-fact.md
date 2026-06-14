# Gate report — FACT-CHECK + FRAMING critic (Aristotle's *Politics* WORK read)

**Gate:** Fact-check + Framing (ship-blocking).
**Draft audited:** `audits/philosophy-pipeline/politics-work.read.ts` (PhiNarr export `POLITICS`).
**Source of truth:** `audits/philosophy-pipeline/politics-work-fact-pack.md` (Jowett PD only).
**Cross-ref (must-not-contradict):** `src/app/philosophy/thinker/_reads/aristotle.ts`.
**Method:** every reader-facing surface checked — title/throughline, hero (textual only), hook, break block, all 8 chapters (epigraph text + attribution, every `{p}` block). Every quotation-marked passage matched word-for-word to a `VERIFIED` pack entry; every Bekker locus checked; the three named framing traps confirmed honored.

---

## SUMMARY

The draft is clean. Every quotation in quote marks traces to a `VERIFIED` Jowett entry in §2/§7 with the correct wording; no `PARAPHRASE-ONLY` item (the 158 figure, the I.13 1260a women "deliberative part" mechanism, the Book V preservation maxims) is ever placed inside quotation marks. Every Bekker locus printed in the draft is correct. All three ship-gate framing requirements are honored — natural slavery is presented head-on and unsoftened (Chapter 2), "democracy" is flagged as a deviant form every time the six-fold scheme appears (Chapter 4), and the six constitutions are classified by who-rules × for-whose-benefit. BCE is used throughout; no BC/AD. No contradiction with the thinker read.

Findings below are all MINOR (quote-capitalization convention + two out-of-pack interpretive asides). None block ship.

---

## FINDINGS

### 1. MINOR — sentence-start capitalization inside quotes where Jowett is lowercase
**Locations:**
- Ch5 b2: `"The middle class is least likely to shrink from rule, or to be over-ambitious for it"` — pack Q-Z reads `"the middle class is least likely…"` (lowercase "the").
- Ch5 b2: `"Where the middle class is large, there are least likely to be factions and dissensions."` — pack Q-Y reads `"where the middle class is large…"` (lowercase "where").
- Ch7 b2: `"The best life, both for individuals and states, is the life of virtue…"` — pack Q-FF reads `"the best life…"` (lowercase "the").

**Problem:** Each quote opens a sentence in the prose and the author has uppercased the first letter, where the verified Jowett wording is mid-sentence lowercase. This is standard editorial practice and not a meaning change, but it is technically an alteration of the quoted character. Note that other quotes that open mid-sentence are correctly left lowercase (Ch5 b2 `"the mean condition of states…"` Q-W; Ch1 b2 `"the state comes into existence…"` Q-B), so the file is internally inconsistent on the convention.

**Concrete fix (optional, author/style call):** either (a) lowercase the first letter to match Jowett exactly (`"the middle class is least likely…"`, `"where the middle class…"`, `"the best life…"`), or (b) bracket the capital (`"[T]he middle class…"`). (a) is cleaner. Lowest priority — purely typographic.

### 2. MINOR — Ch6 b4 interpretive aside on Plato's regime-decay is outside this pack's verified material
**Location:** Ch6 b4: "Plato's account of how regimes decay was a grand, almost moral allegory — each constitution corrupting into a worse one as its ruling principle rots, marching down to tyranny."

**Problem:** This characterization of *Republic* Book VIII's degeneration sequence is accurate and is consistent with the cross-ref *Republic* pack, but it is not drawn from `politics-work-fact-pack.md` (which contains no Plato regime-decay material). It is presented as plain narration, not quoted. No factual error — *Republic* VIII does run timocracy→oligarchy→democracy→tyranny — but flagging per the "every claim traceable to the pack" rule.

**Concrete fix:** No change required if the coordinator accepts the cross-pack *Republic* basis (the draft is explicitly licensed to stage the Plato-vs-Aristotle contrast, fact-pack §5.8). If strict-to-pack is preferred, soften to a contrast that doesn't assert the specific decay chain. Recommend leave as-is.

### 3. MINOR — Ch6 b3 "the first systematic political how-to"
**Location:** Ch6 b3: the Book V preservation half is called "the first systematic political how-to," and Ch6 b1 calls Book V "one of the earliest works of practical political science anywhere."

**Problem:** The pack supports "one of the earliest works of practical political science" verbatim (§1 Book V: "one of the earliest works of practical political science"). The superlative "the first systematic political how-to" is the author's gloss, slightly stronger than the pack's hedged "one of the earliest." Not contradicted, but a notch firmer than the source.

**Concrete fix:** Optional — soften "the first systematic political how-to" to "an early, systematic political how-to" to track the pack's hedge. Low priority.

---

## CLEAN SURFACES (verified, no action)

- **Title / throughline** — "a hundred and fifty-eight real Greek cities" matches the pack's traditional figure; "most sustained defense of slavery" + "achievement and the grave error are in the same book" matches the §0/§4 discipline. Clean.
- **Hero** — no textual factual claim asserted; image + caption + alt all carry `[VERIFY]` for the media gate, and no URL is asserted. Correct handling.
- **Hook** — Lyceum / 4th century BCE / eight books of lecture notes / *Politika* gloss all match §0; the 158 figure is hedged ("the figure is the traditional one, reported in antiquity… only one… the *Constitution of the Athenians*, survives nearly whole"), never quoted — correct per §5.3. *polis* gloss correct (TRAP 3). Plato-as-idealist / Aristotle-as-political-science contrast matches §0/§4.
- **Break block** — before/after labels, the three welded moves (natural city / two-axis taxonomy / middle-class polity), the Book II critique-by-name, and the explicit "shadow on the break" (natural slavery + women) all match §4 and honor the §4 "state it in the same breath" discipline. "twenty years… in Plato's Academy" matches the thinker read (no contradiction). Clean.
- **Ch1 (city is natural)** — Q-A (epigraph + body), Q-B, Q-C, Q-D, Q-E, Q-F all verbatim-correct. *zōon politikon* gloss + "social animal" correction (TRAP 3) honored. The "prior to the individual" line (Q-F) is glossed exactly as §3 TRAP 4 requires — priority by nature/completion, body-and-hand analogy, explicit "not a license for the state to override our rights." Clean.
- **Ch2 (slavery by nature)** — **ship-gate framing requirement PASSED.** Q-K (epigraph + body), Q-G, Q-H ("a living possession"), Q-I, Q-J, Q-L, Q-M all verbatim-correct. The real argument is shown (Q-I→Q-J→Q-K), the claim is placed at the foundation of Book I where the text places it, marked "one of the most indefensible arguments in the entire Western canon," "there is no version of this that survives… it is wrong," with an explicit refusal of the "flattering edit." The convention-vs-nature nuance is recorded and explicitly *not* used to soften ("not about the doctrine itself… *Natural* slavery, he insists, is just"). NO apologizing on Aristotle's behalf, NO sanding-down. The women claim (Q-M + the I.13 1260a mechanism as paraphrase, never quoted) is included with the correct Plato-contrast ("the student is more confining than the teacher"). Fully honored.
- **Ch3 (answering Plato)** — Q-N (epigraph + body), Q-O, Q-P all verbatim-correct. "private ownership, common use" matches §1 Book II. Clean.
- **Ch4 (citizen + six constitutions)** — **ship-gate framing requirement PASSED.** Q-Q (epigraph + body, uses corrected "a citizen of"), Q-R, Q-S, Q-T, Q-U all verbatim-correct. Both classification axes (who rules × for whose benefit) stated explicitly; the participatory-citizenship exclusion (slaves, women, foreigners, laborers) is named (matches §1 Book III + thinker ch.5). The "democracy is a trap for a modern reader" block (b5) flags the anachronism in full — democracy = deviant popular form, polity = the good popular form, "modern liberal democracy maps closer to Aristotle's *polity*," plus the oligarchy/aristocracy corrections. TRAP 2 fully honored.
- **Ch5 (middle class)** — Q-X (epigraph + body), Q-V, Q-W, Q-Y, Q-Z, Q-AA all word-correct (modulo Finding 1 capitalization). Doctrine-of-the-mean carryover from the *Ethics* matches §1 Book IV / thinker ch.4. Q-AA locus (IV.8 1293b) handled correctly as the polity-as-fusion line. Clean.
- **Ch6 (revolution)** — Q-DD (epigraph + body), Q-BB, Q-CC all verbatim-correct; Q-CC's ellipsis + bracketed "[is]" is legitimate editorial practice. *stasis* gloss correct. Preservation maxims are paraphrase only, never quoted (correct per §5.2). See Findings 2–3 for two minor interpretive asides.
- **Ch7 (best state / best life)** — Q-EE (epigraph + body), Q-FF (body) verbatim-correct (modulo Finding 1 capitalization). "politics is downstream of ethics" + the TRAP 4 re-handling (the state does not swallow the individual; the end is the citizen's flourishing) matches §1 VII–VIII and §3 TRAP 4. Clean.
- **Ch8 (education)** — Q-GG (epigraph + body, uses corrected "No one"), Q-HH, Q-II, Q-JJ, Q-KK all verbatim-correct. The Q-II "citizens belong to the state" line is presented as it reads then correctly framed (purpose = citizen's own virtue, not statism) per TRAP 4. The "*leisure*" gloss is correct (not idleness). Book VIII breaking off mid-discussion of music is stated, matching §1 VIII / §6(c). Clean.
- **Bekker loci** — every locus printed in the draft (I.1 1252a, I.2 1253a, I.5 1255a, II.2 1261a, III.1 1275b, IV.11 1295b, V.2 1302a, VII.1 1323a, VIII.1 1337a) matches the pack. NOTE: the pack itself carries an internal typo at Q-J (lists I.5 "1252a"; the slavery passage is in the 1253b–1255b range, and 1252a is the Book-I-chapter-1 page used by Q-A). The author did NOT propagate this — the draft attaches no Bekker number to the Q-J body quote (only the Ch2 epigraph Q-K carries I.5 1255a, which is correct). No draft defect; flagged only so the coordinator can correct the pack's Q-J locus before any future reuse.
- **Translation discipline** — all quotes are Jowett; the two coincident lines with the thinker read's Rackham ("man is by nature a political animal"; the male/female line) are identical, no conflict. No in-copyright translation wording appears. The two corrected MIT OCR typos ("a citizen of", "No one") are used. Clean.
- **BCE/CE** — used throughout (hook, break); no BC/AD anywhere. Correct per the WORK-read convention lock.

---

## VERDICT

**PASS**
