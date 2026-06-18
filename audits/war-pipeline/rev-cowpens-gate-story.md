# Storytelling + Newcomer-Clarity + Framing Critic — Cowpens (January 17, 1781)

**Surfaces reviewed:**
- `src/app/war-revolution/battles/cowpens/page.tsx` (dossier wrapper, stats, sides, commanders, blurbs, outcome)
- `src/app/war-revolution/battles/cowpens/s/[section]/section-narrative.tsx` (three narrative sections)

**Gate definitions applied:**
- `audits/war-content-pipeline.md` (five-gate spec, house-voice rules)
- `audits/war-build-standard.md` §2 (voice rules 1–9, settled/frozen)

---

## EM-DASH AUDIT (target: 0 outside verbatim quotes)

### Methodology
Every `—` character scanned in both files. Instances inside a `q: true` block or inside a clearly demarcated historical quote are exempt; all others are violations.

### Instances found

**page.tsx**

1. **stats[2] / Casualties stat:**
   > `"British about 830 to 970 killed, wounded & captured (roughly 80–90% of the force)"`
   — The `–` here is an en-dash (U+2013) not an em-dash. NOT a violation; this is a numerical range dash. Retain.

2. **sides[1] / British note:**
   > `"the 1st Battalion of the 71st Highlanders, a detachment of the 17th Light Dragoons (mounted soldiers trained to fight from horseback), about two dozen Royal Artillerymen with two light 3-pounder \"grasshopper\" guns, and some Loyalist militia."`
   — No em-dash. Clean.

3. **commanders / Banastre Tarleton bio:**
   > `"so that \"Tarleton's quarter\" became backcountry slang for no quarter at all and \"the Butcher\" his name in the Carolinas."`
   — No em-dash. Clean.

4. **outcome.text:**
   > `"Morgan asked his militia for two volleys instead of miracles, scripted their retreat as bait, and folded Tarleton's exhausted command into a double envelopment that cost Cornwallis the fast quarter of his army."`
   — No em-dash. Clean.

5. **note field (the dossier standfirst):**
   > `"He scripted their flight as bait, hid his cavalry behind a rise, and when Tarleton's exhausted men surged after the \"fleeing\" militia in a disordered mob, Morgan folded them into a double envelopment that destroyed Tarleton's command in about an hour."`
   — No em-dash. Clean.

**section-narrative.tsx**

Scanning all prose blocks for `—`:

1. **'the-split' block 3 — dragoons gloss:**
   > `"about 80 light dragoons (mounted soldiers trained to fight from horseback) under Lieutenant Colonel William Washington (American)."`
   — No em-dash. Parenthetical correctly used. Clean.

2. **'the-split' block 6 — Morgan's retrospective reasoning (q: true):**
   > `"I would not have had a swamp in the view of my militia on any consideration; they would have made for it, and nothing could have detained them from it... As to retreat, it was the very thing I wished to cut off all hope of... When men are forced to fight, they will sell their lives dearly... Had I crossed the river, one half of the militia would immediately have abandoned me."`
   — Verbatim historical quote (q: true). Any em-dash here would be exempt. None present. Clean.

3. **'the-battle' block 4:**
   > `"Tarleton's van came up the Green River Road at first light and he attacked straight off the march, with no rest, no breakfast, and almost no reconnaissance: light infantry on his right, Legion infantry in the center, the 7th Royal Fusiliers on the left, his two light 3-pounder \"grasshopper\" guns opening, fifty-odd dragoons of the 17th Light Dragoons on the flanks, and the 71st Highlanders and the Legion cavalry held in reserve."`
   — No em-dash. Clean.

4. **'the-battle' block 8 (Howard quote, q: true):**
   > `"Do men who march like that look as though they were beaten?"`
   — Verbatim quote. No em-dash. Clean.

5. **'the-battle' block 10:**
   > `"\"They are coming on like a mob. Give them a fire and I will charge them.\""`
   — Verbatim quote embedded in prose. No em-dash. Clean.

6. **'the-reckoning' block 2 (Morgan quote, q: true):**
   > `"Not a man was killed, wounded or even insulted after he surrendered."`
   — Verbatim quote. Clean.

**TOTAL EM-DASHES (non-quote prose): 0**

The em-dash rule is fully satisfied. No violations found in either file.

---

## PER-SECTION GRADES AND FINDINGS

---

### DOSSIER WRAPPER (page.tsx) — At a Glance, Sides, Commanders, Outcome

**Overall grade: GOOD**

#### Hook / standfirst (`note` field)

**Grade: STRONG**

The standfirst is one of the best in the war vertical. It opens with cause-and-effect (Charleston + Camden destroyed armies → Greene made the textbook-forbidden split), introduces both commanders in one breath, names the terrain trap, pivots to Morgan's genius, and lands on the mechanism: "He scripted their flight as bait." All in one unbroken motion. No meta-narration. The "It is studied to this day as a model battle" closer is a clean staking of stakes rather than chest-beating.

No MUST-FIX. No SHOULD-FIX.

#### Stats block

**Grade: GOOD**

Duration: honest about the range (forty minutes to an hour), correctly referenced to Tarleton's march. Clean.

Forces: correctly signals the range dispute ("800 (Morgan's own count) to about 1,900 (modern reconstruction)") and attributes it.

Casualties: gives ranges throughout, not false-precise single numbers.

Winner: "the war's cleanest small-battle destruction of a British force" is a historian's-consensus phrase, not an overreach.

**SHOULD-FIX (non-blocking):**
- The `casualties` object has `union: 150, csa: 870` as numeric inputs to the bar — these are reasonable proxies for the display but "csa" is a Civil War tag surfaced in a Revolution dossier. This is a component concern (not prose), but worth flagging for the technical pass.

#### Sides block

**Grade: STRONG**

Both side notes are the best newcomer-definition work in the dossier. "Continentals (the full-time paid regulars of the Continental Army)" — first use, parenthetical, clean. "militia (part-time citizen soldiers)" — ditto. "light dragoons (mounted soldiers trained to fight from horseback)" — ditto. Morgan's own undercounting acknowledged inline. Tarleton's exhaustion — set up here, not just in the narrative. Both sides get honest characterization. No cartoon on either side.

**One SHOULD-FIX:**
The British side note says "many of them raw recruits" about the 7th Fusiliers but then the narrative (the-battle) does not revisit this fact. The rawness of the 7th is relevant to why they collapsed; it could carry a mention in the battle section. Not a dossier defect, but flag for the comprehensiveness pass.

#### Commanders block

**Grade: STRONG** (with one MUST-FIX)

Morgan bio: the "499 lashes / no British record / by his own telling" caveat is handled correctly. The Saratoga through-line is compressed into one clause — that is the right level of depth for a per-battle bio. "Sciatica broke his health within weeks" lands the cost accurately.

Howard bio: the "misheard order" set-up is planted in the bio, which primes the narrative section well. The seven-swords detail is vivid without being cartoonish.

Pickens bio: "Wizard Owl" identified. The plantation-burning parole-void detail is important context for understanding why the backcountry militia was at Cowpens at all; it carries.

William Washington bio: the "Ships without a portrait" note in parentheses is a meta-structural aside visible to the reader via the `bio` field displayed text. If `bio` renders as visible reader text, this is a **MUST-FIX** (meta-narration rule, rule 1 / rule 2 of war-build-standard §2). It should be editorial/comment only, not prose the reader sees.

> **MUST-FIX** — William Washington bio:
> Current: `"(Ships without a portrait: the only surviving likenesses are weak, and a missing portrait beats a wrong one.)"`
> This is production-code meta-commentary, not a biographical sentence. It reads as talking about the app, not about Washington. Remove or replace with a biographical fact about the blank portrait: e.g., "No reliable period likeness survives; the only candidates are an 1861 engraving and a small Rembrandt Peale portrait too weak to use at scale." That tells the reader something real about the subject, not about the app's image policy.

Tarleton bio: "twenty-six-year-old Liverpool merchant's son" — specific and humanizing. The Waxhaws is handled carefully: "Whether he ordered the Waxhaws killing is genuinely disputed; his horse had been shot and pinned him at the surrender moment." This is exactly right — Tarleton is not a cartoon. The closing "watched it destroyed" is a clean, non-gloating ending.

#### Outcome block

**Grade: STRONG**

The outcome text carries the John Marshall quote with correct attribution ("John Marshall later wrote"). The Race to the Dan set-up is correct. The Guilford Courthouse foreshadow is placed as a consequence, not a spoiler. "Morgan never fought another battle: his health broke, and he left the army in February" — the human cost lands. The pill link to the southern-turn chapter is the natural place for the handoff.

No MUST-FIX. No SHOULD-FIX.

---

### SECTION 1: 'the-split' — "The textbook sin"

**Overall grade: GOOD** (close to STRONG; one MUST-FIX, two SHOULD-FIX)

#### Hook

**Grade: STRONG**

"By the end of 1780 the American cause in the South had lost two whole armies in eight months." This is a hard, specific, stakes-setting opening sentence. It does not begin with Morgan's biography or a weather report. The reader is placed in crisis immediately.

#### Stakes-setting and Camden context

**Grade: STRONG**

The Camden inversion (blocks 8–9) is the most important structural beat in this section, and it lands. "The failure at Camden, he decided, was the ask, not the men" — this is the correct restatement of Morgan's logic and it is in house voice. The contrast (militia ran at Camden without firing / at Cowpens their flight is the machine) is earned, not asserted.

#### Pacing

**Grade: GOOD**

The section covers a lot of ground (the strategic context, Greene's decision, Morgan's biography, Tarleton's approach, the choice of ground, and the campfire briefing), but the narrative never feels like a fact dump. The Morgan biography block (block 4) is the only place pacing slips slightly — the "499 lashes" digression is interesting but it arrives in a long block that also covers Quebec, Saratoga, the resignation, and Camden. A paragraph break after "now he camped his flying army on the Pacolet River from Christmas Day" would help the militia-arrival beat land as its own moment.

**SHOULD-FIX (non-blocking):**
> Block 4 is carrying three distinct beats (Morgan's pre-war biography / his Saratoga career / his return and current position + Pickens's arrival). Consider splitting after "and come back after Camden as a new brigadier" with the Pacolet/Pickens arrival as a separate paragraph. Not a rewrite — a single paragraph break.

#### Newcomer-clarity

Continentals: defined in block 3 ("the full-time paid regulars of the Continental Army"). ✓
Dragoons (light): defined in block 3 ("mounted soldiers trained to fight from horseback"). ✓
Militia: defined in block 3 ("part-time citizen soldiers"). ✓
Continental Army: defined in block 3. ✓

**One MUST-FIX — "skirmish line" / "skirmishers" not yet introduced here.** The term first appears in section 2, which is fine. But "a skirmish line: about 150 picked Georgia and North Carolina riflemen in loose order among the trees" in the-battle section is the first appearance, and by that point the reader has already been told in the-split's Morgan-campfire section that the militia were told to fire "two volleys." The reader reaching the-battle cold via a direct link (which is the design) will encounter "skirmishers" and "skirmish line" without a prior definition. Flag for the newcomer/clarity gate; raised here as a cross-section awareness note.

**SHOULD-FIX (non-blocking):**
Block 7 ends with Morgan's retrospective justification (the Johnson 1822 source) and then block 8 explains Camden. The Johnson-hedge sentence ("so it reads as Morgan's later self-justification rather than a speech on the field") is good handling of source reliability. No change needed there.

#### Voice and framing

Morgan is not hagiographed — his biography is presented with the "by his own often-told tale" and "no British record" hedges. The British side is introduced fairly: Tarleton is "the most feared man in the southern war," a description that is accurate and neutral, not flattering or dismissive. The Waxhaws is named and the "Tarleton's quarter" phrase explained. No Lost Cause framing concerns in this section (this is the Revolution, not the Civil War; the framing gate's slavery-omission rule does not apply here).

No MUST-FIX on voice/framing in this section beyond the William Washington bio note in the dossier.

**Meanwhile card:** The Camden inversion summary is an accurate restatement of the section's own thesis and adds the comparative context a reader might want. Clean.

---

### SECTION 2: 'the-battle' — "Three lines, and a scripted retreat"

**Overall grade: STRONG** (one MUST-FIX, one SHOULD-FIX)

#### Hook

**Grade: STRONG**

"Morgan's plan was the battle." Short, declarative, and true. It immediately tells the reader what this section is going to prove rather than describing what it will cover. Opens into the three-line setup cleanly.

#### Tactics (the core test — does the reader GET the three-line defense-in-depth and the double envelopment?)

**Grade: STRONG**

This is the hardest part of a Cowpens telling to get right, and the draft handles it better than most published accounts.

The three-line breakdown (blocks 2–4) is presented in sequence, and each line's role is stated in one sentence:
- Skirmishers: "fire at about fifty yards and then fall back"
- Militia: "two deliberate volleys at fifty yards, and then licensed in advance to retire"
- Continentals: "take the charge of an enemy already bled and disordered by the first two lines"

The reader understands the logic before the battle starts — the briefing paragraph (block 1) explicitly says Morgan spent the night making sure every line knew what the others would do.

The "scripted retreat" concept — the single most counterintuitive idea in the battle — is named and explained: "The retreat was not a contingency. It was scripted." Two short declarative sentences. This is exactly right.

The envelopment sequence (blocks 5–10) unfolds step by step:
1. Skirmishers fire and fall back. ✓
2. Militia two volleys, then shoulder off around the left. ✓
3. 17th Light Dragoons pursue the "fleeing" militia. ✓
4. Washington's hidden cavalry breaks the dragoons off the militia's backs. ✓ ("the man who took it had just lost his light dragoons to a counterstroke he never saw coming" — good payoff)
5. The misheard-order withdrawal. ✓ (handled honestly as "half plan and half improvisation")
6. British break ranks and surge — the mob moment. ✓
7. Continental face-about volley at thirty yards. ✓
8. Washington strikes British right and rear. ✓
9. Pickens's reformed militia closes on the British left. ✓
10. Three sides at once. ✓

The "American Cannae" label is correctly placed: "Historians have called it a small-scale Cannae, after Hannibal's classic double envelopment, though that is the historians' label, not anyone's judgment on the day." Framing is correct.

The envelopment does land step by step, not as a blur. The double envelopment mechanism is clear.

**One MUST-FIX — "skirmishers" / "skirmish line" not glossed for newcomers:**

The term "skirmish line" (block 2) and "skirmishers" (block 2 again) appear without a parenthetical gloss. "In loose order among the trees" is good context but does not tell a zero-knowledge reader what "skirmish" means as a tactical term (a loose screen of individual shooters ahead of the main body, whose job is to harass, delay, and draw fire rather than stand and trade volleys). All other military jargon in this section is glossed. This is the one gap.

> **MUST-FIX** — Block 2:
> Current: `"The first line was a skirmish line: about 150 picked Georgia and North Carolina riflemen in loose order among the trees, told to fire at about fifty yards and then fall back."`
> Proposed: `"The first line was a skirmish line (a loose screen of individual shooters placed ahead of the main body to harass the advancing enemy, draw their fire, and fall back before close contact): about 150 picked Georgia and North Carolina riflemen in loose order among the trees, told to fire at about fifty yards and then fall back."`
> — Parenthetical gloss, house style, zero added wordiness to the narrative.

**SHOULD-FIX — "envelopment" never defined:**

The word "envelopment" appears twice ("double envelopment" in the standfirst and the-battle block 10). "Historians have called it a small-scale Cannae, after Hannibal's classic double envelopment" — the Cannae parenthetical explains the reference but does not define the tactical term for a reader who does not know what an envelopment is (attack from two or more sides simultaneously, closing a trap). A brief gloss at first use would complete the newcomer-clarity pass.

> **SHOULD-FIX** — Block 10:
> Current: `"Historians have called it a small-scale Cannae, after Hannibal's classic double envelopment, though that is the historians' label, not anyone's judgment on the day."`
> Proposed: `"Historians have called it a small-scale Cannae, after Hannibal's classic double envelopment (an attack that closes in from two sides simultaneously to encircle and destroy), though that is the historians' label, not anyone's judgment on the day."`

#### Pacing

**Grade: STRONG**

The battle unfolds at the reader's pace. No block is a wall. The misheard-order pivot (block 7) is a highlight — the Howard quote lands exactly right: one line, delivered cold, followed immediately by Morgan accepting it. This is the best single beat in the draft.

The "word came back from Washington to the rear line" is the right structure for the Washington quote — presented as received report, not direct speech from the narrator.

#### Human dimension

**Grade: GOOD**

Young's scars (block 6: "his memoir's list of scars is real") is a brief, grounded anchor to human cost. The combat-shock reading of the British collapse (block 11: "the modern reading is combat shock") names the human reality of men who had not slept or eaten. The artillerymen fighting to the last around the guns is a specific, documented detail that honors their effort without glorifying the British cause.

No MUST-FIX. The section could carry one more specific human detail on the American side (a named private, a company's loss), but this is a SHOULD-CONSIDER for the comprehensiveness gate, not this one.

#### Meanwhile card

"Why exhaustion mattered" is a tight, useful companion. The phrase "because attacking straight off the march was how he had always won" is exactly the right characterization of Tarleton's decision-making pattern — honest to Tarleton's experience and not a cartoonish dismissal.

---

### SECTION 3: 'the-reckoning' — "The quarter that was the answer"

**Overall grade: STRONG** (no MUST-FIX; three SHOULD-FIX)

#### Hook

**Grade: STRONG**

"As the British line collapsed, men in the American ranks began shouting 'Tarleton's quarter,' the Waxhaws coming home, and for a moment the battle could have ended as a massacre, payback in kind for the men cut down trying to surrender the previous spring." This is the best opening line in any of the three sections. It names the tension, names the cause (the Waxhaws), names what was at stake, and pivots immediately to the resolution. No delay.

#### The "quarter" meaning-beat

**Grade: STRONG**

"That is the true meaning-beat of the Cowpens, and it is worth being exact about, because it would be easy to write the battle as revenge and get it wrong." Wait — this phrase ("that is the true meaning-beat") has a faint meta-narrator odor. It is telling the reader what they should take from the section rather than letting the events deliver it. The evidence that follows (the prisoner arithmetic, the Morgan quote, the restraint documented) is actually strong enough to land the point without the herald sentence.

> **SHOULD-FIX** — The-reckoning block 3, first sentence:
> Current: `"That is the true meaning-beat of the Cowpens, and it is worth being exact about, because it would be easy to write the battle as revenge and get it wrong."`
> This sentence announces the meaning rather than stating the thing. Consider: `"The cries were real and are well attested. The restraint is just as well attested: against roughly 600 to 830 prisoners taken alive, Morgan's army killed about 100 British, the proportions of a battle that ended in surrender, not slaughter."` (i.e., lead directly into the evidence). The "it would be easy to write it as revenge" clause is the narrator judging other potential writers, which is meta.

#### Washington-Tarleton clash

**Grade: STRONG**

This is a model of handling contested/uncertain evidence. "One of them believed to be Tarleton, which is Howard's careful phrase and should set the confidence here." The phrase "which is Howard's careful phrase and should set the confidence here" edges toward meta — it is telling the reader how to read the phrase rather than letting "believed to be Tarleton" carry its own epistemic weight.

> **SHOULD-FIX** — The-reckoning block 4:
> Current: `"...one of them believed to be Tarleton, which is Howard's careful phrase and should set the confidence here."`
> Proposed: `"...one of them believed to be Tarleton (Howard's own phrase, not a confident identification)."`
> More compact, same epistemic caution, no meta-narrator voice.

#### Numbers and aftermath

**Grade: STRONG**

The numbers block (block 4) is a clean, honest summary of the range dispute. "The contest over the number is itself part of the story" is a legitimate observation at narrative level — it explains why the reader has seen conflicting numbers — and it does not feel like meta-narration because it is making a claim about history, not about the app.

#### Marshall quote and Buchanan quote

The Marshall quote is correctly placed and correctly attributed. The Buchanan quote is labeled as "The historian John Buchanan" — correct, and the claim ("perhaps the only general in the American Revolution, on either side, to produce a significant original tactical thought") is a strong specific claim that the fact-checker should verify (is this actually from Buchanan's *Road to Guilford Courthouse*?).

#### Closing paragraph

"He had asked his militia for two volleys instead of miracles, scripted their flight as bait, and folded an army onto an anvil, and a battle that lasted under an hour has been studied ever since as a model of how to win." — This is a clean, satisfying close. No inflation. No meta-narration. The "two volleys instead of miracles" callback to the standfirst and the campfire scene is earned.

**SHOULD-FIX (non-blocking) — Guilford Courthouse pill position:**

> The pill `{ pill: '/war-revolution/southern-turn', plabel: 'The southern war that followed: Greene, the chase, and the road to Yorktown' }` sits between block 6 (the Morgan afterword) and the closing paragraph. By the house rule (war-build-standard §2, rule 8), a pill is a standalone link line that the builder turns into a between-paragraph "Read the full story" pill. The placement is structurally correct. However, the label "The southern war that followed: Greene, the chase, and the road to Yorktown" describes the destination section better than it describes the natural handoff beat. The label could be tightened. Non-blocking.

#### Meanwhile card

"The battle that copied the battle" is a strong title. The Guilford Courthouse parallel is stated accurately. "The surest measure of Cowpens is that the best general in the southern war studied it and used it" — this is a judgment that belongs in the main narrative (it is in fact in the outcome block). Having it also in the Meanwhile card is mild redundancy. Acceptable.

---

## FRAMING ASSESSMENT

**This is a Revolution section, not a Civil War section. The "name the cause / slavery" ship-blocking rule does not apply here.**

#### Morgan's genius

The tactics are explained mechanically, not just asserted. The reader understands *why* the three-line design worked (each line asked for what it could deliver; the retreat was scripted; the Continental's discipline was its own weapon; the cavalry reserve was invisible). "It is studied to this day as a model battle" is the conclusion, not the opening premise.

#### Tarleton's portrayal

**Grade: FAIR**

Tarleton is not a cartoon. The draft does the following correctly:
- Acknowledges he was "the most feared man in the southern war" — accurate, neutral.
- The Waxhaws: "Whether he ordered the Waxhaws killing is genuinely disputed; his horse had been shot and pinned him at the surrender moment." This is the honest historiographical position.
- His force reached the field "after less than four hours' sleep in 48 hours, and out of food" — this explains his decision-making without excusing the outcome.
- "Because attacking straight off the march was how he had always won" — accurate. Not contemptuous.
- "a twenty-six-year-old Liverpool merchant's son" — humanizes him without romanticizing.

The portrayal passes the fairness test. Tarleton is not reduced to a villain; his competence is acknowledged (the pattern that had won everywhere else), and his defeat is attributed to the plan meeting an enemy it was designed to defeat.

#### "American Cannae" label

Handled correctly in two places. The dossier standfirst does not use it; it appears in the battle narrative only with the explicit historian-label caveat. No overclaiming.

#### Side-tags (ARW-specific rule: battle content only, combatants only)

Checked throughout section-narrative.tsx:

- Block 3 (the-split): "Greene (American)" ✓, "Morgan (American)" ✓, "Howard (American)" ✓, "Washington (American)" ✓
- Block 4 (the-split): "Pickens's (American)" ✓
- Block 5 (the-split): "Tarleton (British)" ✓
- The-reckoning block 1: `"(British)"` and `"(American)"` appear in the very first sentence: "As the British (British) line collapsed, men in the American (American) ranks..."

> **SHOULD-FIX** — The-reckoning block 1:
> `"As the British (British) line collapsed, men in the American (American) ranks..."` — these tags are redundant given that "British" and "American" are the WORDS THEMSELVES being tagged. The tag is for a named combatant's side, not for the demonym. "As the British line collapsed, men in the American ranks" needs no tags; the sides are already named. This pattern also appears to be a first-mention-per-section check triggering on the collective nouns rather than individual combatants. Remove both `(British)` and `(American)` tags from this sentence.

---

## SUMMARY OF ALL FINDINGS

### MUST-FIX (ship-blocking)

| # | Location | Issue |
|---|---|---|
| 1 | `page.tsx` — William Washington bio | Meta-narration: "(Ships without a portrait: the only surviving likenesses are weak, and a missing portrait beats a wrong one.)" is app-policy commentary visible as reader-facing prose. Replace with a biographical sentence about the absent likeness. |
| 2 | `section-narrative.tsx` — 'the-battle' block 2 | "skirmish line" / "skirmishers" undefined for newcomers. Add parenthetical gloss: "(a loose screen of individual shooters placed ahead of the main body to harass the advancing enemy and fall back before close contact)". |

### SHOULD-FIX (non-blocking, quality improvements)

| # | Location | Issue |
|---|---|---|
| 3 | `section-narrative.tsx` — 'the-battle' block 10 | "double envelopment" undefined for newcomers. Add brief parenthetical: "(an attack that closes in from two sides simultaneously to encircle and destroy)". |
| 4 | `section-narrative.tsx` — 'the-reckoning' block 3, first sentence | Faint meta-narrator: "That is the true meaning-beat of the Cowpens..." announces the meaning rather than stating the thing. Lead directly into the evidence. |
| 5 | `section-narrative.tsx` — 'the-reckoning' block 4 | "which is Howard's careful phrase and should set the confidence here" is meta-narrator explaining how to read the evidence. Replace with compact parenthetical: "(Howard's own phrase, not a confident identification)". |
| 6 | `section-narrative.tsx` — 'the-reckoning' block 1 | Side-tags `(British)` and `(American)` tagging the demonyms themselves, not named combatants. Remove both. |
| 7 | `section-narrative.tsx` — 'the-split' block 4 | Single long paragraph carrying three beats (biography / Saratoga career / current position + Pickens). One paragraph break after "come back after Camden as a new brigadier" would improve pacing. |

---

## OVERALL ASSESSMENT

**The draft is in very good shape.** Em-dashes: **0** (rule fully satisfied). MUST-FIX count: **2**. SHOULD-FIX count: **5**.

The tactics section — the hardest test for a Cowpens telling — passes. The three-line defense-in-depth is explained line by line, the scripted retreat concept is named and explained as a design choice (not a contingency), and the double envelopment unfolds step by step in a way a reader with no military background can follow. Morgan's genius is shown through the mechanics, not just asserted. Tarleton is not a cartoon: his experience, his pattern, and the specific conditions (exhaustion, no reconnaissance) that made his pattern fail are all on the page. The framing is fair throughout.

The two MUST-FIXes are both small and mechanical: the William Washington bio needs one sentence of prose replacing an app-policy note, and the "skirmish line" needs a two-clause parenthetical gloss. Neither requires a section rewrite.
