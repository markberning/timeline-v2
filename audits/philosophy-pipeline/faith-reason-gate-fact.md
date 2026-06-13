# Gate 1 — Fact-checker report: "Faith meets reason" (philosophy era 2)

**Critic:** Fact-checker (Sonnet, web-enabled)
**Date:** 2026-06-12
**Draft:** `audits/philosophy-pipeline/faith-reason-draft.md`
**Pack:** `audits/philosophy-pipeline/faith-reason-fact-pack.md`
**Ledger:** `audits/philosophy-pipeline/faith-reason-fact-ledger.md`

Web sources consulted during this pass: Wikipedia articles on Hypatia, Augustine, Boethius, al-Kindi, Avicenna, al-Ghazali, Averroes, Maimonides, Peter Abelard, Council of Sens, Council of Soissons, Sic et Non, William of Ockham, Occam's Razor, the 1277 condemnations; Stanford Encyclopedia of Philosophy entries on al-Kindi, al-Farabi, Avicenna, al-Ghazali, Abelard, Aquinas, Ockham; the H. R. James Boethius text; the Deane Anselm text at Fordham sourcebooks; Thorburn 1918 via Wikisource; Gaunilo text via Notre Dame academic web.

---

## MUST-FIX LIST (ship-blocking)

### MF-1 — Gaunilo quote: "richer" is not the Deane translation (Ch 5, line 499)

**Draft:** "imagine the most perfect island conceivable, richer 'than all other countries.'"

**Problem:** The phrase in quotation marks is wrong. The Deane translation (the pack's VERIFIED wording, and the only PD text verified for this draft) reads **"more excellent than all other countries"** — not "richer." The full Deane sentence is: "this island has an inestimable wealth of all manner of riches and delicacies in greater abundance than is told of the Islands of the Blest; and... it is more excellent than all other countries." The word "richer" appears in describing the island's contents (riches and delicacies) but is NOT used as the comparative descriptor for the island itself. The draft puts "richer than all other countries" inside quotation marks attributed to Gaunilo. That is a misquote.

**Fix:** Replace with **"more excellent than all other countries"** (the Deane wording in the pack §3 Ch5). Or rephrase as paraphrase outside quotation marks.

---

### MF-2 — Sens condemnation: "around 1140" is the traditional erroneous date (Ch 5, line 573)

**Draft:** "pushed by the powerful monk Bernard of Clairvaux, again at Sens around 1140."

**Problem:** The Council of Sens convened on **25 May 1141** — the 1140 date is the older, erroneous convention (Wikipedia's Council of Sens article: "various sources date this to 1140, although that appears mistaken"). The papal bull followed on 16 July 1141. This is not a trivial rounding: the "around 1140" wording repeats a known wrong date. The pack table (§1) gives the facts correctly as "condemned at Sens 1140/41" — a hedge the draft should match.

**Fix:** Change to **"again at Sens in 1141"** (or "in 1140–41," which at least signals the uncertainty honestly). "Around 1140" alone is the wrong year.

---

### MF-3 — Boethius eternity quote: "Eternity" (draft) vs. "Now, eternity" (James translation) (Ch 2, line 169)

**Draft:** `"Eternity," he writes, "is the possession of endless life whole and perfect at a single moment."`

**Problem:** The H. R. James translation (the VERIFIED pack source, Gutenberg #14328, Book V, Prose VI) opens this sentence with **"Now, eternity is the possession of endless life whole and perfect at a single moment."** The draft uses the quotation inside quotation marks attributed to James but silently drops the opening word "Now." Since this is attributed as a direct quote from a named translation, the word should either be preserved or an ellipsis used. Minor, but the rules of this vertical are that every quotation is matched word-for-word to its verified source.

**Fix:** Change to **"'Now, eternity,'" he writes, "'is the possession of endless life whole and perfect at a single moment.'"** OR recast as: `Boethius calls eternity "the possession of endless life whole and perfect at a single moment"` (turning it into a fragment rather than a full-sentence quote, which lets the "Now" drop cleanly). Either solution works.

---

### MF-4 — Hubbard: "invented whole" implies the quote was attributed to Hypatia in Hubbard's text; it was not (Ch 1, lines 93–95)

**Draft:** "the dignified quotations you will find attached to her ('even to think wrongly is better than not to think at all') are not hers at all. They were invented whole, along with the serene portrait that usually accompanies them, by an American essayist named Elbert Hubbard in 1908."

**Problem:** This is accurate that the quote is not Hypatia's, and that Hubbard is the fabrication source — but slightly misleading as stated. In Hubbard's actual 1908 essay, the "even to think wrongly" line is attributed not to Hypatia but to **her father Theon**, giving her advice. Later tradition re-attributed the line to Hypatia herself. The draft implies Hubbard invented a quote "attached to her" — but Hubbard put it in her father's mouth. This is a second-order inaccuracy: the fabrication attribution is correct (Hubbard 1908), but the draft doesn't capture the transmission step (Theon → Hypatia in the later popular re-attribution).

**Severity assessment:** This is MUST-FIX because the pack §9.8 says "the first is even given to Theon, her father, in Hubbard's own text" — the pack knew this, the draft didn't honor it. The description in the draft slightly misrepresents the fabrication mechanism.

**Fix:** Revise to something like: "They were invented in 1908, by an American essayist named Elbert Hubbard — the most famous of them ('even to think wrongly is better than not to think at all') appears in Hubbard's essay in the mouth of her father Theon, giving her advice, and was subsequently re-attached to Hypatia herself." The point stands; the chain needs honesty.

---

## SHOULD-FIX LIST (quality issues, not ship-blockers alone)

### SF-1 — Averroes break-block quote: "it being established that" frame dropped (break block, line 51)

**Draft:** "Averroes, a Muslim judge in Spain, would insist the Law itself 'makes the observation and consideration of creation by reason obligatory.'"

**Issue:** The VERIFIED Jamil-ur-Rehman wording is: "Now, it being established that the Law makes the observation and consideration of creation by reason obligatory..." — the fragment the draft quotes is a subordinate clause inside a larger sentence whose main-clause structure is different. The meaning is accurate (Averroes is affirming that the Law commands rational inquiry) and the isolated fragment is substantively fair. But using quotation marks around a fragment clipped from mid-sentence, without indicating the trim, is a precision issue in a vertical where quotes are matched word-for-word.

**Fix:** Either quote the full sentence from "it being established that..." (a bit awkward), or convert to paraphrase: "Averroes, a Muslim judge in Spain, would insist the Law itself requires rational observation and inquiry — 'truth cannot contradict truth.'" (The full Decisive Treatise quote in the ch4 epigraph carries the weight.)

---

### SF-2 — Maimonides birth year 1138: defensible but the competing date (1135) is not acknowledged (Ch 4, line 410)

**Draft:** "Moses ben Maimon, known as Maimonides (pronounced 'my-MON-ih-deez,' 1138 to 1204)"

**Issue:** Wikipedia and some standard sources give 1135 as a competing birth year (alongside 1138). The pack table (§1) gives 1138 without flagging the 1135 variant. Web verification found that 1138 is one of two commonly cited dates. At era altitude this is not a MUST-FIX, but adding "around" would be more accurate: "around 1138 to 1204" or "1135–1138 to 1204."

**Fix (SHOULD):** Change to "around 1138" or note both dates in the same light way the pack notes Avicenna's "around 970 to 980."

---

### SF-3 — Aquinas described as "around 1225" but pack says c. 1224/25 (Ch 6, line 606)

**Draft:** "around 1225 to 1274"

**Issue:** The pack says "c. 1224/25." The standard SEP entry gives c. 1224/25. Using only "around 1225" omits the 1224 option. Minor, but "around 1224/25 to 1274" is the more accurate hedge.

**Fix (SHOULD):** "around 1224/25 to 1274" or "around 1225 to 1274" with the understanding this is within the uncertainty range. Low priority.

---

## CONFIRMED CLEAN — by surface

### 1. Quotations (word-for-word vs. pack §3)

| Quote | Source | Status |
|---|---|---|
| Socrates Scholasticus, HE VII.15 (Hypatia epigraph + murder) | Zenos/NPNF | ✅ CONFIRMED — exact wording matches VERIFIED pack entry |
| "Thou madest us for Thyself..." — Conf. I.1, Pusey | §3 Ch1 | ✅ CONFIRMED — exact Pusey wording |
| "Thou procuredst for me... books of the Platonists" — Conf. VII, Pusey | §3 Ch1 | ✅ CONFIRMED |
| "give me chastity and continency, only not yet" — Conf. VIII | §3 Ch1 | ✅ CONFIRMED |
| Fortune epigraph, Boethius II, James | §3 Ch2 | ✅ CONFIRMED — wording matches James |
| "Eternity... possession of endless life" — Boethius V, James | §3 Ch2 | ⚠️ NEAR-MISS — "Now," dropped (MF-3 above) |
| al-Kindī quote — SEP rendering | §3 Ch3 | ✅ CONFIRMED — credited "as rendered in SEP" |
| "truth cannot contradict truth" — Averroes, Jamil-ur-Rehman | §3 Ch4 | ✅ CONFIRMED |
| "makes the observation and consideration of creation by reason obligatory" — Averroes | §3 Ch4 | 🟡 FRAMING ISSUE — quoted as direct fragment; subordinate clause (SF-1) |
| Guide mission statement "lost in perplexity and anxiety" — Friedländer | §3 Ch4 | ✅ CONFIRMED |
| "our knowledge consists in knowing that we are unable truly to comprehend Him" | §3 Ch4 | ✅ CONFIRMED |
| "Silence is praise to Thee" / "include derogatory expressions" | §3 Ch4 | ✅ CONFIRMED |
| Anselm motto — *Proslogion* 1, Deane | §3 Ch5 | ✅ CONFIRMED — identical in break block and Ch5 (check 5 below passes) |
| Anselm argument — "a being than which nothing greater can be conceived" | §3 Ch5 | ✅ CONFIRMED |
| Gaunilo lost island — "richer than all other countries" | §3 Ch5 | ❌ WRONG WORD — "more excellent" (MF-1 above) |
| "By doubting we come to examine" — Sic et Non prologue, Robinson | §3 Ch5 | ✅ CONFIRMED |
| "The master key of knowledge..." — Robinson | §3 Ch5 | ✅ CONFIRMED |
| Abelard castration — Bellows | §3 Ch5 | ✅ CONFIRMED |
| "between books or tablets and distaffs" — Bellows | §3 Ch5 | ✅ CONFIRMED |
| "far sweeter for her to be called my mistress" / "love alone would hold me" — Bellows | §3 Ch5 | ✅ CONFIRMED — "mistress" version used; "empress" (Hughes 1722) correctly avoided |
| "grace does not destroy nature but perfects it" — ST I q.1 a.8, Dominican | §3 Ch6 | ✅ CONFIRMED |
| First Way — "staff moves only because it is put in motion by the hand... first mover... God" — ST I q.2 a.3 | §3 Ch6 | ✅ CONFIRMED |
| Aquinas self-objections (evil; parsimony) — same article | §3 Ch6 | ✅ CONFIRMED |
| "All that I have written seems to me like straw" — canonization testimony | §3 Ch6 | ✅ CONFIRMED — framed with hearsay chain visible |
| Ockham epigraph "Pluralitas non est ponenda sine necessitate" — Thorburn 1918 | §3 Ch7 | ✅ CONFIRMED |

### 2. Paraphrase-only thinkers — no quotation marks used (Era-2 specific check 2)

| Thinker / Work | Check |
|---|---|
| Avicenna (flying man, essence/existence) | ✅ — both passages shipped as explicit paraphrase; draft states "faithfully restated, not quoted" and "no public-domain English of Avicenna's text exists" |
| al-Fārābī | ✅ — no quotes attributed to him; positions in paraphrase |
| al-Ghazālī's *Incoherence* (fire-cotton) | ✅ — explicitly "ships as paraphrase; no PD English of that text exists" |
| Hildegard | ✅ — not used at era altitude (cleanly omitted, §9) |
| Bernard of Chartres "dwarfs" | ✅ — reported speech frame, no direct quotation marks around the giants line |
| Héloïse's own letters | ✅ — positions carried via Abelard's verified report (Bellows); draft states "reliable public-domain translations of her letters are scarce" |

All PARAPHRASE-ONLY items confirmed clear of quotation marks. **Check 2 PASSES.**

### 3. Worked examples — philosophical accuracy (Era-2 specific check 3)

| Example | Assessment |
|---|---|
| **Augustine two cities** — "two cities formed by two loves" (love of self / love of God) | ✅ — pack §3 Ch1 VERIFIED; draft presents it accurately as orientations of desire, not church-vs-state (anti-caricature framing correct) |
| **Avicenna flying man** — created mid-air, blindfolded, no sensation; affirms self, not body; Descartes contrast (isolating vs. doubting) | ✅ — philosophically accurate per pack §2; properly framed as paraphrase; the Descartes contrast is correctly stated ("Descartes gets there by doubting; Avicenna gets there by isolating") |
| **Al-Ghazālī fire-cotton occasionalism** — fire then burning; necessity not observed; God creates both side by side | ✅ — accurate per pack §2; PARAPHRASE-ONLY correctly flagged; Hume forward-link accurate |
| **Anselm ontological argument** — premise-by-premise: definition grants, fool understands, only in understanding ⟹ contradiction ⟹ exists in reality | ✅ — run accurately and clearly; Gaunilo's objection given full force; Anselm's reply (only works for the maximal being, any island can be out-islanded) correctly stated |
| **Gaunilo island counter** | ⚠️ — argument accurate; the "richer" misquote is the only flaw (MF-1) |
| **Universals / whiteness and humanity** | ✅ — realism vs. nominalism distinction accurate; "realism" here-means counterintuitive flagged for reader; Abelard's position ("near the nominalist side," universality merely linguistic) accurately hedged |
| **Aquinas First Way** | ✅ — the dependence-right-now reading (not a long-ago first push) correctly emphasized; the honest seam ("everyone understands to be God" doing announced work) preserved; Five Ways as compressed sketches not knockdown proofs correctly stated |
| **Ockham's razor on a real case** (universals) | ✅ — the razor applied to shave away the realist universal (why posit "humanity" when individual humans + the mind's grouping suffice) is philosophically accurate; the "Sufficiunt singularia" line used correctly |

All worked examples philosophically accurate and clearly flagged as our illustrations where they extend beyond attributed text. **Check 3 PASSES** (with MF-1 the only flaw, affecting the Gaunilo quote not the argument itself).

### 4. Two Bernards — attribution check (Era-2 specific check 4)

- **Bernard of Clairvaux** (line 572–573): correctly identified as the powerful monk who pushed Abelard's second condemnation. No doctrine attributed to him beyond his role.
- **Bernard of Chartres** (lines 582–586): correctly identified as a separate person ("a master of the age"), correctly attributed the dwarfs/giants saying (via John of Salisbury), correctly framed in reported speech ("used to say, as his student's student reported it").
- The two Bernards are not conflated anywhere in the draft.

**Check 4 PASSES.**

### 5. Anselm motto — consistency between break block and Ch 5 (Era-2 specific check 5)

- **Break block (lines 44–46):** `"I do not seek to understand that I may believe," Anselm would put it, "but I believe in order to understand" (*Proslogion*, trans. Deane).`
- **Ch 5 (lines 479–480):** `"I do not seek to understand that I may believe, but I believe in order to understand."`

Wording is identical in both instances. Attribution correct in both (Proslogion, Deane translation named in the break block; implicit in Ch 5 as the era's motto). **Check 5 PASSES.**

### 6. Other surface checks (hook, break block, epigraphs, chapter titles)

**Hook (era hook):** The framing — Greeks argued to argument alone; then the Western world changed its mind about books — is accurate to the era's historical trajectory. The three-religion scope ("Christianity, then Islam, then a renewed Judaism") is accurate as a broad sequence. No factual claims in the hook that are wrong.

**Break block:** The Aristotle quote ("ALL men by nature desire to know," *Metaphysics*, Ross translation) is correct — VERIFIED in the era-1 pack, re-used accurately here. The Anselm quote accurate (check 5 above). The Averroes quote has the SF-1 framing issue. The Maimonides "lost in perplexity" reference accurate (VERIFIED). Overall the break block is factually sound except for SF-1.

**Chapter epigraphs (all 7):**
- Ch1: Socrates Scholasticus, HE VII.15, Zenos — ✅ VERIFIED exact wording, correct attribution
- Ch2: Boethius, Consolation II, H. R. James — ✅ VERIFIED (note: epigraph correctly clips at "low ascend" — the rest of Fortune's speech in the James text continues further; the clip is honest and not misrepresenting)
- Ch3: al-Kindī, On First Philosophy, "as rendered in SEP" — ✅ VERIFIED (credit chain correct)
- Ch4: Averroes, Decisive Treatise, Jamil-ur-Rehman — ✅ VERIFIED; lowercased "truth" at epigraph start matches the pack (this is a mid-sentence extract; lowercasing is fine)
- Ch5: Abelard, Sic et Non prologue, Robinson — ✅ VERIFIED
- Ch6: Aquinas, ST I q.2 a.3, Dominican Province — ✅ CONFIRMED
- Ch7: Ockham, Commentary on the Sentences I, Thorburn 1918 — ✅ CONFIRMED; Latin and English translation both present and correct

**Chapter titles:** All seven chapter titles ("The handoff," "Boethius and the quiet centuries," "The thread moves to the Islamic world," "Córdoba and the handback," "The schools," "Aquinas," "Ockham and the fraying") are descriptive, not factual claims. No issues.

---

## Date and biographical fact audit

| Figure | Claim in draft | Verdict |
|---|---|---|
| Hypatia | "born around 355, killed in 415" | ✅ — 355 is within the scholarly range (c. 350–370); 415 CONFIRMED via Socrates Scholasticus |
| Augustine | "354 to 430" | ✅ CONFIRMED (SEP: 13 Nov 354 – 28 Aug 430) |
| Augustine | Confessions "written around 397, a decade after his conversion" | ✅ CONFIRMED — conversion 386, Confessions c. 396–400; "around 397" is accurate |
| Boethius | "born around 477, executed around 525" | ✅ NEAR-CONFIRMED — SEP says "died 526?" with uncertainty; "around 525" is within the uncertainty window |
| John Scotus Eriugena | "around 800 to around 877" | ✅ CONFIRMED (standard range) |
| al-Kindī | "around 800 to around 870" | ✅ CONFIRMED (Wikipedia: c. 801–873) |
| al-Fārābī | "around 870 to 950" | ✅ CONFIRMED (SEP: probably 870 – Dec 950/Jan 951) |
| Avicenna | "born around 970 to 980 by competing reckonings, died 1037" | ✅ CONFIRMED — competing reckonings framing accurate; 1037 death confirmed |
| al-Ghazālī | "around 1056 to 1111" | ✅ CONFIRMED (sources conflict on 1055/56–1058/59; 1111 death confirmed) |
| al-Ghazālī breakdown year | "in 1095" | ✅ CONFIRMED — AH 488 = AD 1095; SEP and IEP concur; Field's "1096" is the outlier |
| Anselm | "1033 to 1109" | ✅ CONFIRMED (SEP) |
| Anselm | "monk and later abbot at Bec in Normandy who became Archbishop of Canterbury" | ✅ CONFIRMED |
| Proslogion | "1077–78" (implied; not stated in prose but consistent with dates) | ✅ CONFIRMED (SEP) |
| Peter Abelard | "1079 to 1142" | ✅ CONFIRMED |
| Condemned at Soissons | "1121" | ✅ CONFIRMED |
| Condemned at Sens | "around 1140" | ❌ WRONG — should be 1141 (MF-2 above) |
| Héloïse | "around 1100 to 1163/64" | ✅ CONFIRMED (pack §1: c. 1098–1101 birth; May 1163/64 death) |
| Averroes | "1126 to 1198" | ✅ CONFIRMED |
| Maimonides | "1138 to 1204" | 🟡 DEFENSIBLE — 1138 is one of two conventional dates (1135 also used); see SF-2 |
| Albertus Magnus | "around 1200 to 1280" | ✅ CONFIRMED |
| Aquinas | "around 1225 to 1274" | ✅ NEAR-CONFIRMED — pack says c. 1224/25; "around 1225" is within range; see SF-3 |
| Aquinas | "died in 1274, at forty-nine or so" | ✅ CONFIRMED — c. 1225 to 1274 = approximately 49 |
| Aquinas | "at a Cistercian abbey" (Fossanova) | ✅ CONFIRMED |
| 1277 condemnation | "seventh of March, 1277, three years to the day after Aquinas died" | ✅ CONFIRMED — Aquinas died March 7, 1274; 1277 is exactly three years to the day |
| Duns Scotus | "around 1266 to 1308" | ✅ CONFIRMED (SEP) |
| Ockham | "born around 1287, died in April 1347" | ✅ CONFIRMED (SEP: night of 9/10 April 1347) |
| Ockham death vs. Black Death | died before the Black Death reached Munich | ✅ CONFIRMED — Wikipedia: "just before the outbreak in Munich of the Black Death" |

---

## Blacklist audit — §9 items

| Item | Status |
|---|---|
| §9.1 "angels on a pinhead" | ✅ Not used |
| §9.2 "entities must not be multiplied" as Ockham's | ✅ Used ONLY as the debunk; Punch 1639 named; real Ockham phrasings given |
| §9.3 "Dark Ages" framing | ✅ Named as "the wrong name" — used correctly |
| §9.4 medieval flat earth | ✅ Not invoked |
| §9.5 "Five Ways = five easy steps" | ✅ Explicitly refused; Five Ways called "compressed sketches" |
| §9.6 "al-Ghazālī killed Islamic philosophy" | ✅ Framed AS caricature then refuted |
| §9.7 Averroes "double truth" | ✅ Attributed correctly to Tempier's makers; Averroes himself cleared |
| §9.8 Hubbard Hypatia quotes | ✅ Named as fakes; key-passage absent; HOWEVER: the Theon attribution slip (MF-4) needs fixing |
| §9.10 "credo quia absurdum" | ✅ Not used |
| §9.11 "ora et labora" as Benedict's motto | ✅ Not used |
| §9.12 Duns Scotus buried alive | ✅ Not used |
| §9.13 Hughes 1722 "empress" | ✅ Avoided; "mistress" (Bellows) used correctly |
| §9.14 Hypatia destroyed the Library | ✅ Explicitly refused; Serapeum fall (391) and Hypatia's death (415) correctly separated |
| §9.15 Ockham died of plague 1349 | ✅ Avoided; April 1347 used; Black Death correctly framed as "the year after" |
| §9.16 Maimonides decision-quote | ✅ Not used |

**Zero blacklist leaks.** ✅

---

## Era-2 specific check rulings (summary)

| Check | Result |
|---|---|
| **Check 1** — Cross-tradition names/dates/sequence (Hunayn, al-Kindī, al-Fārābī, Avicenna, al-Ghazālī, Averroes, Maimonides; Aristotle→...→Aquinas chain) | ✅ PASSES — all dates confirmed; the Aristotle→Baghdad→Toledo→universities→Aquinas chain accurately stated; each thinker's role correctly described |
| **Check 2** — Paraphrase-only thinkers: no quotation marks on Avicenna, al-Fārābī, al-Ghazālī's Incoherence, Hildegard, Bernard of Chartres, Héloïse's own letters | ✅ PASSES — confirmed above |
| **Check 3** — Worked examples philosophically accurate AND flagged as our illustrations where extended | ✅ PASSES — confirmed above (Gaunilo misquote in MF-1 affects the quote, not the argument's accuracy) |
| **Check 4** — Two Bernards (Clairvaux vs. Chartres) not conflated | ✅ PASSES |
| **Check 5** — Anselm motto identical in break block and Ch 5 | ✅ PASSES |
| **Check 6** — All surfaces (hook, break block, 7 epigraphs + attributions, chapter titles) | ✅ PASSES except SF-1 (Averroes fragment framing) and the MF issues listed above |

---

## Final counts

| Severity | Count | Items |
|---|---|---|
| MUST-FIX (❌) | 4 | MF-1 (Gaunilo quote word), MF-2 (Sens 1140→1141), MF-3 (Boethius "Now" clipped), MF-4 (Hubbard/Theon attribution slip) |
| SHOULD-FIX (⚠️) | 3 | SF-1 (Averroes fragment subordinate-clause framing), SF-2 (Maimonides 1138 vs 1135), SF-3 (Aquinas 1225 vs 1224/25) |
| CONFIRMED CLEAN (✅) | balance | All other dates, biographical facts, quotations, worked examples, blacklist items, paraphrase-only compliance, legend-frames |

**Overall assessment: near-clean draft with 4 fixable must-fixes.** The pack and ledger discipline held up under adversarial web verification — zero blacklist leaks, zero wrong-thinker attributions, every paraphrase-only item correctly unquoted, legend-frames uniformly applied. The four must-fixes are all small precision issues (one wrong word in a Gaunilo quote, one traditional-but-wrong date, one silently clipped word in a direct attribution, one slightly incomplete Hubbard chain), not structural errors in positions or arguments. The three should-fixes are hedging questions about birth-year uncertainty. This draft can be revised to clean in a targeted pass.
