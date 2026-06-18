# Guilford Courthouse — Storytelling + Newcomer-Clarity + Framing Gate

**Critic:** Storytelling / Newcomer-Clarity / Framing (combined pass)
**Draft surfaces reviewed:** `src/app/war-revolution/battles/guilford/page.tsx` (dossier
shell: note, stats, sides, commander bios, outcome, section blurbs) and
`src/app/war-revolution/battles/guilford/s/[section]/section-narrative.tsx` (the three
prose sections: race-to-the-dan · the-three-lines · another-such-victory).
**Gate definitions:** `audits/war-content-pipeline.md` §locked-house-voice-rules,
`audits/war-build-standard.md` §2.

---

## Em-Dash Audit (BLOCKER — target 0 outside verbatim quotes / proper titles)

**Total em-dashes found in prose: 0.**

Both files are clean. The dossier shell uses parentheses and commas throughout;
none of the three narrative sections contains an em-dash. The verbatim O'Hara
quote ("In this situation, without Baggage…") is block-quoted with `q: true` and
contains no em-dash; the Fox quote similarly. No instances to list.

**Em-dash verdict: PASS.**

---

## Meta-Narration Audit (BLOCKER)

Scanning for asides about section structure, sibling pointers, or "hold onto that"
language:

**race-to-the-dan:** Clean. No structural asides.

**the-three-lines:** One near-miss that does not trigger the rule: "That was the
difference from Camden, the disaster the August before, where militia had been
thrown into the open with no plan and no permission to leave, and had simply run."
This is a story-beat comparison, not a meta-narrator pointing at a sibling section.
Clean.

**another-such-victory:** The closing sentence of the section ("But that is another
page.") could be read as a structural pointer. On balance it reads as a narrative
flourish, not a structural directive ("this dossier will cover that topic" — which
would be the failing form). Marginal; flagged as SHOULD-FIX below.

**Meta-narration verdict: PASS with one SHOULD-FIX.**

---

## Per-Section Grades

### Section 1 — The dossier shell (note, stats, sides, bios, outcome, section blurbs)

**Grade: STRONG**

**Hook / stakes.** The dossier note is the strongest single piece of framing prose
in the package. "He took the field. He took it at a cost of about a quarter of
everyone he had left." is punchy, concrete, and sets the pyrrhic paradox without
announcing it. The Fox quote as the close lands well.

**Stats block.** The casualty footnote is unusually good: it explains the misleading
"missing" column (dispersed militia vs. killed/captured), names the pension-record
caveat, and lands the punch line ("The winner bled four times as hard as the loser")
that should govern the reader's understanding before they open a section. This is
a gated surface and it handles the key disambiguation correctly.

**Sides / commander bios.** All side-tags appear on first mention per section.
Full rank on first use. The bios are the right length and tell the right story
(what each person did at THIS battle, not a career summary). Webster correctly
labeled "mortally wounded" throughout (never "killed at Guilford"). O'Hara's
"Born in Lisbon, the illegitimate son of a baron" is vivid and serves the
character. Tarleton's hand wound ("costing him at least two fingers") is
appropriately hedged.

**One MUST-FIX in bios (newcomer clarity):** The Otho Holland Williams bio reads:
"his 1st Maryland delivered the sharpest Continental blow of the afternoon,
stopping the elite British Guards cold and throwing them back with the bayonet."
The term **Continentals** is used here but not defined in the bio. It IS defined
in the sides block (American side note: "the Continentals (the full-time paid
regulars of the Continental Army)") and in two of the narrative sections, so a
reader who has read the sides block first has the definition. Since commander bios
are a separate reader surface and may be read in isolation, the term should be
glossed in the bio itself (one parenthetical).

> **MUST-FIX (bio, Williams):** Add a parenthetical on first use of "Continental":
> "his 1st Maryland delivered the sharpest Continental (full-time regular) blow of
> the afternoon…" — or restructure as "his 1st Maryland, the veteran regulars of
> the Continental line, delivered…"

**One SHOULD-FIX in bios:** The Henry Lee bio says "the source chain for the famous
account of Cornwallis ordering grapeshot into his own men, and the reason that scene
must be read as Lee's telling rather than settled fact." The phrase "source chain"
is insider language. Simpler: "the memoir's account is the source of the famous
scene, and the reason that scene…"

**Outcome.** Tight, correctly framed (tactical win / strategic catastrophe). The
Fox/Pyrrhus attribution double-confirmed: "echoing Plutarch on the ancient king
Pyrrhus" — correct. Cornwallis marching "against Henry Clinton's wishes" is a
well-sourced detail that adds real stakes to the strategic ruin. Length (4 sentences)
is right for this surface.

---

### Section 2 — race-to-the-dan

**Grade: STRONG**

**Hook.** Opens on Cowpens as the premise (one sentence, one punch: "in under an
hour") and immediately shifts to Cornwallis's reaction. The move from Cowpens
devastation → Cornwallis's decision to chase → what that decision reveals about him
is clean and purposeful. The O'Hara block-quote arrives at exactly the right beat
and is the best single moment in the section.

**Stakes.** Clear throughout: Greene must survive; Cornwallis must catch him; the
army that cannot be replaced must be kept in being. The restatement of Greene's
winter strategy — "fight, lose, recover, and fight again" — is one of the sharpest
lines in the whole dossier. The meanwhile card ("the chase had already taken from
him the one thing a pyrrhic victory cannot spare: the margin to bleed") is
excellent and earns its place.

**Pacing.** Moves well. The geographic beat from Ramsour's Mill (baggage burning)
to the Dan crossing is compressed just right. The return crossing on February 22 is
handled efficiently without belaboring it.

**Newcomer clarity.**
- **Continentals** and **militia** are both defined inline on their first appearance in
  this section. Clean.
- "Lee's Legion" is introduced as "a fast mixed corps of cavalry and infantry called
  Lee's Legion" — adequate.
- The Dan River is named and its role explained (flooded, impassable, boats taken
  across). Clean.
- "Light Horse Harry Lee (American)" — side-tag present. Clean.
- "dragoons" is not defined here (it is defined in section 2's third-line description),
  but this section does not use the word. Not an issue.

**One MUST-FIX (framing / accuracy):** The section introduces "Lord Cornwallis
(British), the British general charged with conquering the South" — this is
technically sound but the parenthetical "(British)" doubles as an already-obvious
side-tag since "Lord" is English. More importantly, the phrase "charged with
conquering the South" is mildly loaded. It is accurate and not distorted, but the
stronger and more precise framing used in the dossier note is "the British general."
Minor, not a blocker.

**No em-dashes.** Confirmed clean.

**Framing:** Fair. The section presents Cornwallis as a formidable, committed
soldier who made a rational decision that ultimately cost him the campaign. No
romanticization, no false balance. Greene's strategy is explained clearly and
fairly.

---

### Section 3 — the-three-lines

**Grade: STRONG**

**Hook.** Opens with the structural comparison to Cowpens — correct and essential
context. The framing of the militia not being asked to stand but to fire and leave
is the key strategic insight and it lands clearly.

**Pacing.** The progression through the three lines is well-paced. Each line gets
the right weight: first line (fence, volleys, fall back — brief), second line
(thick timber, officer-heavy losses — medium), third line (the Guards, the
Marylanders, the crisis around the guns — longest and most intense). The escalation
is correct.

**The grapeshot paragraph.** This is the highest-stakes prose in the entire dossier
and it is handled correctly. The draft separates what is established fact (the guns
fired, the grape hit both sides, it broke the assault) from what is memorialized
later (Lee's account, the O'Hara-begging-Cornwallis scene). It does not fall into
either the "Cornwallis cold-bloodedly ordered it" error OR the "it definitely did
not happen" overcorrection. The honest framing ("the honest account is the narrow
one") is strong and fair. This paragraph passes the framing gate.

**Newcomer clarity.**
- **grapeshot** is defined: "clusters of small iron balls packed into a charge that turn
  a cannon into an enormous shotgun." Clean.
- **dragoons** defined: "mounted soldiers." Clean.
- "jägers" appears without a gloss: "Webster on the right with the 23rd and 33rd
  Foot, jägers, and light infantry." A reader with zero prior knowledge will not know
  what jägers are.

  > **MUST-FIX (jägers):** Add a parenthetical: "jägers (German light infantry
  > sharpshooters in British service)" — or simply "German light infantry called
  > jägers."

- "the Hessian Regiment von Bose (German soldiers in British service)" — correctly
  glossed. Clean.
- "salient" and "enfilade" do not appear. "Light infantry" is common English-military
  enough to pass the loosened newcomer rule.
- **The Guards** (Brigade of Guards): the section refers to "the 2nd Battalion of Foot
  Guards, O'Hara's elite" but earlier uses "the Guards" without always specifying.
  In context this is clear (O'Hara's Guards have been introduced in the sides block),
  but a reader entering this section first might not have seen that. The first use of
  "the Guards" in this section is in the dossier note, and "Brigade of Guards" is
  used in the sides block. Within the section itself "O'Hara coming on with the
  Guards on the left" at the first appearance — since O'Hara is introduced in the
  commander section as "commander of the elite Brigade of Guards," a reader who read
  straight through will have the gloss. Marginal pass; SHOULD-FIX to add a brief
  parenthetical on the first standalone use of "the Guards" in this section.

  > **SHOULD-FIX (the Guards):** On first standalone use: "O'Hara (British) coming
  > on with the Guards (the elite Brigade of Guards, the best infantry in
  > Cornwallis's army) on the left."

- **"Macleod"** appears without any introduction or side-tag: "three or four pieces
  under Lieutenant John Macleod." As a named person, he needs a side-tag on first
  mention.

  > **MUST-FIX (Macleod side-tag):** "three or four pieces under Lieutenant John
  > Macleod (British)"

**Em-dashes.** None found. Clean.

**Framing.** The retreat order is presented as a rational decision (saving the
army, the pattern established all winter) rather than defeat or cowardice. Correct.
Greene's decision to withdraw is given its own strategic logic. The meanwhile card
("The fight in the third line is where the battle was won on paper and lost in
fact") is excellent framing for the pyrrhic arc.

---

### Section 4 — another-such-victory

**Grade: STRONG**

**Hook.** Opens on the morning-after reckoning — the morning-after is exactly the
right structural move for this section. The four facts that define Cornwallis's
situation (killed, wounded, missing, Webster dying, O'Hara down, Guards wrecked,
cannot pursue) land in a compressed list that never feels like a list.

**Pacing.** The section moves across three distinct beats: the casualty reckoning
(morning after), the strategic decision to march to Virginia (the real disaster),
and the Fox/Pyrrhus verdict. The Hobkirk's Hill / Ninety Six / Eutaw Springs
summary is essential and the draft includes it; the sentence "He lost most of the
battles he fought doing it… and won the campaign anyway" is one of the two or
three best in the dossier.

**The Race-to-the-Dan / three-lines arc closure.** The final two paragraphs of the
section tie the whole arc together: from Cowpens to the march to Yorktown, with
Fox's quote as the last word. The Pyrrhus context is given fully (the paragraph
explaining Heraclea and Asculum, the cost that bled him out of the war) — this
serves the newcomer reader who does not know classical history. Correct decision to
include it.

**Newcomer clarity.**
- "Sir Henry Clinton, the British commander in chief up in New York" — named and
  side-contextualized. Clean.
- "Hobkirk's Hill, at Ninety Six, at Eutaw Springs" — named battles cited without
  explanation. A newcomer reader will not know what these are. These are not jargon
  terms; they are proper nouns that need the lightest touch: "at Hobkirk's Hill and
  Ninety Six and Eutaw Springs (battles for the South Carolina interior posts)" or
  similar. This is a SHOULD-FIX, not a MUST-FIX, because the surrounding context
  ("reducing them one by one," "each fight cost the British a garrison") is
  sufficient for comprehension.

  > **SHOULD-FIX (battle names):** "He lost most of the battles he fought doing it,
  > at Hobkirk's Hill, Ninety Six, and Eutaw Springs, battles for the South Carolina
  > interior posts, and won the campaign anyway…"

- "Pyrrhus of Epirus" and the pyrrhic-victory etymology are fully explained in the
  preceding paragraph. Clean.
- **"a small tobacco port called Yorktown"** — this is a very slight shorthand; Yorktown
  is Virginia, which the prose already named ("marched north into Virginia"). The phrase
  "a tobacco-field surrender" in the dossier stat block is the same device and is fine.
  Clean in context.

**One SHOULD-FIX (meta-narration flag — borderline):** "He had marched 240 miles in
a winter, burned everything he owned, and beaten an enemy twice his size, and at the
end of it all he had emptied his army into the Carolina mud for a courthouse he could
not keep and a province he had to abandon. The road from the Cowpens, through the Race
to the Dan, through the three bloody lines at Guilford, led him at last to a tobacco
field where he would hand over his sword. But that is another page." — The final
sentence "But that is another page" is a meta-aside. It is mild (a classical
historiographical flourish rather than a structural pointer) but the house voice rule
says to state the thing, not signal it. The paragraph is already complete without it;
cut it or absorb the thought.

  > **SHOULD-FIX:** Delete "But that is another page." The preceding sentence ("The
  > road from the Cowpens, through the Race to the Dan, through the three bloody
  > lines at Guilford, led him at last to a tobacco field where he would hand over
  > his sword.") is a complete and strong close.

**Framing.** The strategic-catastrophe framing is explicit, fair, and non-cartoonish.
Cornwallis's Virginia-march logic is presented ("his reasoning had a logic to it")
before the outcome. The section does not present him as a fool; it presents him as
a general whose reasoning led to ruin. Correct. Fox's opposition-politics context
(Whig opposition to the war) is briefly noted. The Fox/Pyrrhus attribution is fully
explained and correctly hedged ("He was not coining a fresh phrase; he was reaching
back across two thousand years to Plutarch"). Clean.

---

## Framing Gate — Overall

**Verdict: PASS.**

This is a Revolution (American Revolutionary War) battle, not a Civil War section.
The "name the cause" slavery rule does not apply. The framing gate's job here is:
no romanticization of the British army, fair handling of Cornwallis, fair
grapeshot debate, no false balance.

All four framing surfaces pass:
1. **Pyrrhic win as strategic catastrophe.** Explicit throughout. No cartoon ("the most
   damning fact of all was the simplest: Cornwallis could not pursue"). Cornwallis is
   shown as capable and resolute; the catastrophe is structural, not personal failure.
2. **Grapeshot debate.** Correctly bifurcated: cannonade as fact, deliberate-order
   narrative as Lee's memoir account. The phrase "the honest account is the narrow one"
   is the right register.
3. **Greene's 'lose the battle, win the campaign' logic.** Stated plainly and twice
   (the meanwhile card "Each fight cost the British a garrison they could not replace
   and gained Greene ground he could" and the explicit "Greene lost the battle and won
   the war in the South"). No ambiguity.
4. **The ~1,000 militia as dispersal, not casualties.** Explicitly explained in both the
   stats block footnote and the another-such-victory prose. Clean.

---

## Summary of Findings

### MUST-FIX (4 total — ship-blocking)

1. **[dossier / Williams bio]** "Continentals" unglossed in the commander bio. Add
   parenthetical: "the Continental (regular army) 1st Maryland" or equivalent.
2. **[the-three-lines / jägers]** "jägers" unglossed on first use. Add:
   "jägers (German light infantry sharpshooters)."
3. **[the-three-lines / Macleod]** "Lieutenant John Macleod" introduced with no
   side-tag. Add "(British)."
4. **[the-three-lines / the Guards]** First standalone use of "the Guards" in the
   section prose lacks a gloss — a reader entering the section cold will not have it.
   Add a brief parenthetical: "(Cornwallis's elite Brigade of Guards)."

   *(Item 4 is on the line between MUST-FIX and SHOULD-FIX; treating it as MUST-FIX
   because the section can be reached directly without having read the commander
   bios.)*

### SHOULD-FIX (3 — non-blocking, improve before next revision)

1. **[another-such-victory]** "But that is another page." is a meta-aside; cut it.
   The paragraph closes cleanly without it.
2. **[another-such-victory / battle names]** Hobkirk's Hill, Ninety Six, Eutaw
   Springs should get a one-phrase tag: "(battles for the South Carolina interior
   posts)."
3. **[dossier / Lee bio]** "the source chain" is inside language. Rewrite as
   "the source of the famous scene."

---

## Overall Dossier Grade

| Surface | Grade |
|---|---|
| Dossier shell (note, stats, sides, bios, outcome) | STRONG |
| race-to-the-dan | STRONG |
| the-three-lines | STRONG |
| another-such-victory | STRONG |

**Overall: STRONG. 0 em-dashes. 4 MUST-FIX items, all newcomer-clarity (missing
glosses/side-tags on jägers, Macleod, the Guards, and Continentals in the Williams
bio). 3 SHOULD-FIX items. Framing passes cleanly. The storytelling arc — chase /
battle / meaning — is well-built: the O'Hara quote, the grapeshot handling, and the
Fox/Pyrrhus close are the three strongest moments. Fixes required before ship.**
