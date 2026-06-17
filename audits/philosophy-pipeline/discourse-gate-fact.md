# Fact-checker gate — Descartes, *Discourse on the Method* work read

**Gate:** 1 (Fact-checker)
**Draft:** `src/app/philosophy/work/_reads/discourse.ts`
**Ledger:** `audits/philosophy-pipeline/discourse-work-fact-ledger.md`
**Run:** 2026-06-17

Legend: ✅ CONFIRMED · ❌ WRONG · ⚠️ UNSUPPORTED · 🟡 LEGEND-FRAME-IT

---

## Bibliographic facts

✅ CONFIRMED — Title (English and French), date 1637, place Leiden, publisher Jan Maire, anonymous publication, language French.
All match the ledger and are confirmed by Wikipedia + Wikimedia Commons metadata.

✅ CONFIRMED — Three companion essays named correctly: *La Dioptrique* (optics), *Les Météores* (weather/rainbow), *La Géométrie* (geometry). Draft hook paragraph names all three correctly.

✅ CONFIRMED — *La Géométrie* credited as the essay that "founded the coordinate system schoolchildren still call Cartesian." The Cartesian coordinate system originates from *La Géométrie*, not *La Dioptrique*. Correct.

✅ CONFIRMED — Six parts: structure summaries in the draft match the six parts as confirmed against Wikipedia, the fact ledger, and the Wikisource full text.

---

## Quotations — match check against Veitch (Gutenberg #59 / Wikisource)

### Q1 — Part I opening ("Good sense") — epigraph and inline use

✅ CONFIRMED — Exact Veitch wording confirmed by Wikisource Part 1 and Gutenberg. Draft epigraph and inline block both match word-for-word.

### Q2 — Part I ("not enough to have a good mind")

✅ CONFIRMED — "For it is not enough to have a good mind; the main thing is to apply it well. The greatest souls are capable of the greatest vices as well as the greatest virtues; and those who proceed but very slowly can make much greater progress, if they always follow the right path, than those who hurry and stray from it." Confirmed against ledger Q2 and cross-checked via WIST/Wikisource. Exact match in the draft.

### Q3 — Part II four rules — epigraph (Rule 1) and inline block

✅ CONFIRMED — All four rules confirmed verbatim against Wikisource Part 2. The Wikisource version capitalizes Rule 1 as "Never to accept…" (capital N); the draft quotes it in lower case ("never to accept…") as it appears mid-sentence as the epigraph. This is acceptable styling — the quote itself is word-for-word correct.

### Q4 — Part III first maxim

✅ CONFIRMED — "The first was to obey the laws and customs of my country, adhering firmly to the Faith in which, by the grace of God, I had been educated from my childhood, and regulating my conduct in every other matter according to the most moderate opinions, and the farthest removed from extremes, which should happen to be adopted in practice with general consent of the most judicious of those among whom I might be living." Matches ledger Q4 and Wikisource Part 3 verbatim.

### Q5 — Part III second maxim

✅ CONFIRMED — "My second maxim was to be as firm and resolute in my actions as I was able, and not to adhere less steadfastly to the most doubtful opinions, when once adopted, than if they had been highly certain." Matches ledger Q5 and Wikisource Part 3 verbatim.

### Q6 — Part III third maxim — epigraph and inline use

✅ CONFIRMED — "My third maxim was to endeavour always to conquer myself rather than fortune, and change my desires rather than the order of the world, and in general, accustom myself to the persuasion that, except our own thoughts, there is nothing absolutely in our power." Matches ledger Q6 and Wikisource Part 3 verbatim.

### Q7 — Part IV methodic doubt

✅ CONFIRMED — "I was willing to suppose that there existed nothing really such as they presented to us; and because some men err in reasoning, and fall into Paralogisms, even on the simplest matters of Geometry, I, convinced that I was as open to error as any other, rejected as false all the reasonings I had hitherto taken for Demonstrations." Matches ledger Q7 and Gutenberg #59 verbatim.

### Q8 — Part IV cogito — epigraph and inline use

✅ CONFIRMED — "But immediately upon this I observed that, whilst I thus wished to think that all was false, it was absolutely necessary that I, who thus thought, should be somewhat; and as I observed that this truth, I think, therefore I am (COGITO ERGO SUM), was so certain and of such evidence that no ground of doubt, however extravagant, could be alleged by the sceptics capable of shaking it, I concluded that I might, without scruple, accept it as the first principle of the philosophy of which I was in search." Confirmed verbatim by Gutenberg #59. The draft quotes this passage accurately in both its epigraph and inline forms.

Note: The Wikisource rendering uses "I think, hence I am" in one partial quotation — this appears to be a variant rendering on Wikisource. The Gutenberg #59 text (the ledger's declared primary) reads "I think, therefore I am (COGITO ERGO SUM)" — confirmed. The draft is correct against Gutenberg #59.

### Q9 — Part IV mind/body distinction

✅ CONFIRMED — "I thence concluded that I was a substance whose whole essence or nature consists only in thinking, and which, that it may exist, has need of no place, nor is dependent on any material thing; so that 'I,' that is to say, the mind by which I am what I am, is wholly distinct from the body." Confirmed by Gutenberg #59. (Gutenberg adds "and is even more easily known than the latter" after this — the draft correctly omits the continuation since it is not in quote marks.)

### Q10 — Part IV God passage

⚠️ UNSUPPORTED — SHOULD-FIX

The draft (Chapter 4, block 5) quotes: "it was manifest to me that this nature had been placed in me by a Nature which was **truly** more perfect than mine, and which even possessed within itself all the perfections of which I could form any idea; that is to say, in a single word, which was God."

The ledger Q10 has the identical wording ("truly more perfect than mine"). However, web verification of the Marxists.org Veitch text (the second attested Veitch edition, which the ledger acknowledges as a variant source for the stove passage) renders this as "a nature which was **in reality** more perfect than mine." The Gutenberg #59 wording could not be directly string-matched for this specific phrase in the web-check pass.

The ledger explicitly flags Q10 as "VERIFIED (paraphrase confirmed)" — meaning the idea was verified but the exact wording was not string-matched. The quote is used with full quotation marks in the draft.

**Action:** If the Gutenberg #59 exact text reads "truly," the draft is fine. If it reads "in reality," this is a wrong-word quote. The coordinator must string-match this phrase in Gutenberg #59 before ship. Until confirmed, tag ⚠️ UNSUPPORTED for the exact word "truly."

**Ledger update needed:** Q10 should be upgraded from "paraphrase confirmed" to a string-matched VERIFIED entry, and the two-edition wording difference noted.

### Q11 — Part V animal/language tests

✅ CONFIRMED — "they could never use words or other signs arranged in such a manner as is competent to us in order to declare our thoughts to others." Confirmed against Wikisource Part 5 verbatim (exact match).

"Although such machines might execute many things with equal or perhaps greater perfection than any of us, they would, without doubt, fail in certain others from which it could be discovered that they did not act from knowledge." Confirmed against Wikisource Part 5 verbatim.

### Q12 — Part VI "lords and possessors of nature"

❌ WRONG (wording drift) — MUST-FIX

The draft quotes: "Knowing the force and **the** action of fire, water, air, the stars, the heavens, and all the other bodies that **environ** us, as distinctly as we know the **different** crafts of our **artisans**, we might also apply them in the same way to all the uses to which they are adapted, and thus render ourselves the lords and possessors of nature."

The Veitch translation (confirmed via multiple secondary sources including Bartleby and web references to the Veitch text) reads: "knowing the force and **action** of fire, water, air, the stars, the heavens, and all the other bodies that **surround** us, as distinctly as we know the **various** crafts of our **artizans**, we might also apply them in the same way to all the uses to which they are adapted, and thus render ourselves the lords and possessors of nature."

Divergences:
- "the action" → "action" (extra "the" in draft)
- "environ us" → "surround us"
- "different crafts" → "various crafts"
- "artisans" → "artizans" (spelling)

**Note:** The ledger itself (§10 soft spot 4) explicitly flags Q12 as "the exact Veitch wording was not string-matched against the Gutenberg file in this pass." Both the draft and the ledger carry unverified wording here. The draft inherited these drifts from an unverified ledger entry.

**Correction:** Replace the quoted passage in the draft with the confirmed Veitch wording: "knowing the force and action of fire, water, air, the stars, the heavens, and all the other bodies that surround us, as distinctly as we know the various crafts of our artizans, we might also apply them in the same way to all the uses to which they are adapted, and thus render ourselves the lords and possessors of nature."

**Also:** The ledger Q12 must be string-matched and corrected to match the verified Veitch text before the next draft pass.

### Part VI French-language passage

❌ WRONG (quote truncated / opener omitted) — MUST-FIX

The draft (Chapter 6, block 4) quotes: "I write in French, which is the language of my country, in preference to Latin, which is that of my preceptors, it is because I expect that those who make use of their unprejudiced natural Reason will be better judges of my opinions than those who give heed to the writings of the ancients only."

The confirmed Veitch wording (verified by web search against Wikisource Part 6 and secondary sources) begins: "**And if I write in French**, which is the language of my country, in preference to Latin, which is that of my preceptors, it is because I expect…"

The draft drops the opening "And if" — making a conditional clause ("And if I write in French…it is because…") read as a declarative statement ("I write in French…it is because…"). This changes the grammatical structure of the sentence. It is not correct as a quotation inside quotation marks.

**Note:** The ledger Q12 area and §1 also render it as "I write in French…" without "And if." The ledger is wrong here too. The coordinator must correct both the draft quote and the ledger.

**Correction:** The quote must read "And if I write in French, which is the language of my country, in preference to Latin, which is that of my preceptors, it is because I expect that those who make use of their unprejudiced natural Reason will be better judges of my opinions than those who give heed to the writings of the ancients only."

---

## Factual claims — positions, attributions, dates

### Stove-room / poêle framing

✅ CONFIRMED — The draft correctly explains that a *poêle* is "a room heated by a stove, not a stove" and correctly attributes this to Descartes' own account in the Discourse. The draft correctly notes that "the popular story of three revelatory dreams that night comes from a much later biography, Adrien Baillet's of 1691." All verified against the ledger §5 and the fact pack.

The draft says "he spent a whole day alone with his own thoughts in what the French calls a *poêle*." The Gutenberg #59 translation (the ledger's stated primary) renders the passage as "I remained the whole day in seclusion, with full opportunity to occupy my attention with my own thoughts" — omitting explicit mention of the stove room in the English. A translator's footnote in the Gutenberg text clarifies "Literally, in a room heated by means of a stove." The draft's framing ("a room heated by a stove") matches this footnote. ✅

The Marxists.org Veitch version explicitly reads "stove-heated room." The draft's handling is correct.

### Winter 1619 / Germany setting

✅ CONFIRMED — Draft says "he was in Germany in the winter of 1619." The ledger says winter of 1619–1620, in Germany (Bavaria); the exact date November 10, 1619 comes from private notebooks, not the Discourse. The draft says "winter of 1619" which is consistent. ✅

### The cogito locus (French vs. Latin, 1637 vs. 1644)

✅ CONFIRMED — The draft handles the cogito locus correctly throughout. Chapter 4, block 3 explicitly states: the Discourse was written in French as "je pense, donc je suis"; the uppercase "COGITO ERGO SUM" in Veitch is "the translator John Veitch's parenthetical Latin gloss, not Descartes's own words on the 1637 page"; "the formal Latin axiom that everyone now quotes belongs to a different and later book, the *Principles of Philosophy* of 1644"; and the *Meditations* (1641) says "I am, I exist" with no "therefore." All three distinctions are correct per the cogito-locus ruling (ledger §4).

### Mind-body dualism — potted summary trap

✅ CONFIRMED — The draft correctly avoids the potted-summary trap. Chapter 5, block 5 explicitly states: "Descartes did not invent the idea that mind and body are distinct. Plato had separated soul from body centuries before, and the medieval philosophers all had elaborate doctrines of the soul. What is genuinely new in Descartes is sharper and more troublesome than that. He makes mind and body two complete substances, each able to exist without the other, and he makes the body so thoroughly a machine that it becomes a mystery how the two could possibly interact." This matches the ledger §6f potted-summary flag exactly. ✅

### God proof / Cartesian circle

✅ CONFIRMED — Draft (Chapter 4, block 5) frames the God argument as a "sketch" and explicitly notes "critics pounced at once on an apparent circle: clear and distinct perception is trusted because God guarantees it, but God's existence was reached by clear and distinct perception. Descartes argued for God's existence; he did not close the debate." This matches the ledger §7 potted-summary trap 3 ("he argued for it; the Cartesian circle… was noted before the ink was dry"). ✅

### "even women" / Vatier framing

✅ CONFIRMED — Draft (Chapter 6, block 4) correctly states: "A note on a phrase often attached to this passage: the line about wanting 'even women' to be able to understand his work does not appear in the *Discourse*. It comes from a letter Descartes wrote to a Jesuit, Père Vatier, in February 1638, after publication." The Vatier letter is confirmed dated February 22, 1638 (web-verified); Antoine Vatier was a Jesuit (verified). The draft correctly identifies Vatier as "a Jesuit" and correctly keeps the phrase out of the Discourse text. ✅

### *Le Monde* suppressed 1633

✅ CONFIRMED — Draft (Chapter 5, block 1): "Descartes had written a whole treatise on physics, *Le Monde*, and then suppressed it in 1633 when he learned that Galileo had been condemned in Rome for teaching that the earth moves, which *Le Monde* also implied." This is correct. Galileo's condemnation occurred in 1633; Descartes suppressed the completed *Le Monde* as a result. ✅

### Unpublished rules precursor — "some twenty-one rules"

✅ CONFIRMED — Draft (Chapter 2, block 5): "Descartes had written some twenty-one rules years earlier in an unpublished work." The confirmed fact is that the *Rules for the Direction of the Mind* (c. 1628, posthumous) contains 21 rules as written (of a planned 36). The draft's "some twenty-one" is an acceptable hedge that correctly conveys the number. The ledger note says "21 rules." ✅

### *Principles of Philosophy* date

✅ CONFIRMED — Draft correctly identifies it as "1644." Confirmed by Wikipedia and multiple sources.

### *Meditations* date

✅ CONFIRMED — Draft correctly identifies the *Meditations* as "1641." ✅

### Stoics / Epictetus — influence on third maxim

✅ CONFIRMED — Draft (Chapter 3, block 4): "The resemblance to the Stoics is strong, in particular to Epictetus's division of things into those in our power and those not, though Descartes does not cite them." The ledger §6d confirms this Stoic flavor and notes Descartes does not cite the Stoics. The parallel is well-attested by scholars. The draft correctly frames it as a resemblance, not a citation. ✅

### Autobiographical framing — "eighteen years after"

✅ CONFIRMED — Draft (Chapter 2, block 1): "written eighteen years after the day it describes." If the stove-room episode was winter 1619 and the Discourse was published 1637, that is 18 years. ✅

### La Flèche as "one of the best Jesuit colleges in Europe"

✅ CONFIRMED — La Flèche (the Collège Royal Henry-Le-Grand) was indeed a leading Jesuit college. Descartes attended it. This is documented in every major Descartes biography. ✅

### "fourth reflection" / fourth maxim

✅ CONFIRMED — Draft (Chapter 3, block 4) mentions a "fourth reflection too, less a formal rule than a result" (the resolution to devote his life to truth), and distinguishes this from the three formal maxims. This matches the ledger §10 soft spot 2 and §6d note: "a fourth maxim is sometimes cited… Ship as three maxims unless the draft requires four." The draft uses three formal maxims and treats the fourth as a reflection. ✅

### Aristotle as primary authority in scholastic tradition

✅ CONFIRMED — Draft (Chapter 1, block 2): "A position was defended by showing it agreed with the great names and could survive a syllogism" and "it argued by citing authorities: Aristotle above all, then Aquinas, Averroes, and the rest of the inherited canon." Historically accurate. ✅

### "Cartesian circle" — not attributed by name in draft

✅ CONFIRMED — The draft describes the Cartesian circle without naming it (Chapter 4, block 5): "critics pounced at once on an apparent circle: clear and distinct perception is trusted because God guarantees it, but God's existence was reached by clear and distinct perception." It does not name Mersenne or Arnauld as the critics who raised this — the ledger §6e mentions them but the draft merely says "critics pounced." Not naming them is fine at this altitude; the claim that the debate "began in the same decade" is accurate. ✅

---

## Apocrypha / potted-summary check

✅ No apocryphal quote asserted as fact.
✅ Three-dreams story correctly kept out of the Discourse account.
✅ "Descartes invented mind-body dualism" correctly refuted inline.
✅ "Cogito ergo sum in the Discourse" correctly handled (French formulation, Veitch's Latin gloss explained).
✅ "proved God's existence" avoided — draft uses "argued for."
✅ "even women" correctly attributed to the Vatier letter.
✅ Animals as automata claim: draft (Chapter 5, block 2) correctly avoids asserting "animals feel nothing" and instead says "the claim the text supports is the mechanistic one." ✅

---

## Summary of findings

| # | Status | Severity | Location | Issue |
|---|---|---|---|---|
| 1 | ❌ WRONG | MUST-FIX | Ch 6 block 4; quote | Q12 "lords and possessors" quote has wording drift: "the action" should be "action"; "environ us" should be "surround us"; "different crafts" should be "various crafts"; "artisans" should be "artizans" |
| 2 | ❌ WRONG | MUST-FIX | Ch 6 block 4; quote | French-language passage drops opening "And if" — changes a conditional clause to a declarative statement; must read "And if I write in French…it is because I expect…" |
| 3 | ⚠️ UNSUPPORTED | SHOULD-FIX | Ch 4 block 5; quote | Q10 God passage: "truly more perfect than mine" — Marxists.org Veitch renders "in reality more perfect than mine"; Gutenberg #59 exact wording not string-matched. Coordinator must verify "truly" vs "in reality" against the Gutenberg #59 source before ship. |

**MUST-FIX count: 2.**

Both must-fixes are quote-wording errors in Part VI. They do not affect any factual claim, structural argument, or apocrypha framing — every philosophical position in the draft is correctly stated, all verified quotes in Parts I–V are accurate, and all potted-summary traps are correctly handled. The draft is otherwise a clean, well-sourced work read. Fix items 1 and 2 against the confirmed Veitch wording, confirm item 3 against Gutenberg #59, and the fact gate clears.
