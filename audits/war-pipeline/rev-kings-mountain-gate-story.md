# Kings Mountain — Storytelling + Newcomer-Clarity + Framing Gate

> Auditing `src/app/war-revolution/battles/kings-mountain/page.tsx` (dossier chrome) and
> `src/app/war-revolution/battles/kings-mountain/s/[section]/section-narrative.tsx`
> (the three narrative sections). Gate definitions: `audits/war-content-pipeline.md` §4
> and voice rules; `audits/war-build-standard.md` §2.

---

## Quick-reference verdict

| Surface | Storytelling | Newcomer-clarity | Framing |
|---|---|---|---|
| Dossier chrome (note, sides, bios, outcome) | GOOD | GOOD | GOOD |
| Section 1 — "A threat over the mountains" | STRONG | GOOD | STRONG |
| Section 2 — "The ring on the ridge" | STRONG | NEEDS WORK | STRONG |
| Section 3 — "Tarleton's quarter, and the oak" | STRONG | GOOD | STRONG |

**Em-dash count in prose: 0.** All em-dashes found are inside comments or the FACT LEDGER block; none in reader-facing text.

**MUST-FIX count: 3.** Two are meta-narration violations (one in section-narrative.tsx, one in page.tsx); one is a newcomer-clarity gap in section 2 (the "Buford's play" cry is unexplained).

---

## Blocker enforcement: em-dashes

**0 em-dashes in any reader-facing prose.** The file uses an en-dash in "sixty-five minutes," "self-appointed," etc., which are correct hyphens in compounds. The FACT LEDGER comment block (post-line 84 in page.tsx) contains several em-dashes but that block is never rendered. **Clean.**

---

## Blocker enforcement: meta-narration

Two violations found. Both are MUST-FIX.

### MUST-FIX M-1 — section-narrative.tsx, the-ridge section (line 58)

> "This is the part of the story **the page will not soften**, because it is **the reason the page exists**."

Rule: "No asides that tell the reader what to think/remember/expect or that narrate the chapter's own machinery." Pointing at what *the page* will or will not do is exactly this. The sentence is also unnecessary: the prose that follows is already unflinching. The meta-statement tells the reader to brace rather than letting the horror land. Cut it and run the paragraph from "He raised a white flag" straight to "It was shot down."

**Suggested fix:**

> He raised a white flag. It was shot down, and the men kept firing into the huddled mass of Loyalists on the crest. Some attackers, it is true, did not understand that a white flag meant surrender. Many understood it perfectly well and went on shooting anyway...

### MUST-FIX M-2 — page.tsx, Alexander Chesney commander bio

> "his very existence is the reason **the page says** 'the only British soldier' and not 'the only British-born man'"

This is a bio about Chesney's role at the battle. The aside is a meta-comment explaining the dossier's own wording choices. A reader encounters this as a commander biography; a sentence that explains the page's editorial decisions breaks that frame. The content is sound — Chesney's Irish birth is meaningful — but the framing must not point back at the document itself.

**Suggested fix:**

> His journal is one of the prime eyewitness accounts of the battle. His very existence is a reminder that "the only British soldier" is the right precision: both armies were full of Ulster- and Britain-born immigrants, and Chesney himself was from County Antrim. He was captured on the ridge. No reliable life portrait survives.

---

## Blocker enforcement: missing inline definitions (newcomer-clarity)

The gate spec: "flag every undefined GENUINE-jargon term." Common English does not need a lecture. The spec also explicitly loosens the gate: "do NOT demand glosses on common English."

Terms that are clean (already defined or common enough):
- **Continental resistance** — immediately self-glossed: "the resistance of the full-time paid regulars of the Continental Army." Clean.
- **Loyalist** — glossed on second-paragraph first use: "American Loyalists (colonists loyal to the king)." Clean.
- **Patriot** — used first as a side-tag noun ("a captured Patriot named Samuel Phillips") in para 3 before the formal side-tag "(Patriot)" appears in para 6. See SHOULD-FIX S-1.
- **militia** — glossed: "part-time citizen soldiers." Clean.
- **musket / rifle / bayonet** — the entire "The ring on the ridge" opening paragraph is a clean comparative gloss. Clean.
- **parole** — used in para 3: "Ferguson paroled a captured Patriot named Samuel Phillips, releasing him on his word." The phrase "releasing him on his word" is a plain-English gloss. Clean.
- **corps** — used in para 2 without a gloss but in context (a named force of soldiers); "corps" is not military jargon at the level this gate targets. Acceptable.
- **Proclamation Line of 1763** — glossed inline: "the boundary Britain had drawn after the French and Indian War forbidding settlement beyond the mountain crest." Clean.
- **Overmountain Men** — the formal term is never used. The text calls them "back-water men" (quoting Ferguson), "the men of the Watauga," and "the settlers of the Watauga, Nolichucky, and Holston." This is not a gap; the text defines the people without requiring the label.
- **Nathanael Greene** — named at the close of section 3 with no role gloss. He is not a figure in the battle; his name appears as a signpost of what comes next. Acceptable at this level of the narrative.
- **Sir Henry Clinton** — named with "(British)" side tag, identified as "writing after the war." His title as British commander-in-chief is not given. See SHOULD-FIX S-2.

### MUST-FIX M-3 — "Give them Buford's play!" (section 2, the-ridge, line 58)

> "the cries that survivors recorded say why: 'Tarleton's quarter!' and 'Give them Buford's play!'"

"Tarleton's quarter" is glossed earlier in section 1 as a cry for no-quarter killing tied to the Waxhaws massacre. But **"Buford's play"** is never explained. A newcomer landing on section 2 directly (which is permitted by the dossier model) hears this cry and has no idea what "Buford" refers to. The next sentence clarifies "the Waxhaws, where Tarleton's men had butchered surrendering Virginians" but never names Buford or explains that he commanded the column at the Waxhaws. Without that link, "Buford's play" is opaque slang. The Waxhaws sentence is already there; it just needs "Colonel Abraham Buford's" inserted.

**Suggested fix:**

> the cries that survivors recorded say why: "Tarleton's quarter!" and "Give them Buford's play!" The Waxhaws, where Tarleton's men had cut down Colonel Abraham Buford's (Patriot) surrendering Virginians five months before, had come home...

---

## Section-by-section grades with rationale

### Dossier chrome (page.tsx): GOOD

The dossier note, side notes, stat strip, and commander bios are strong. The note is concise and grabs the thesis ("every man on both sides was an American") without throat-clearing. The side notes (Patriot / Loyalist) are fair and morally textured: the Patriot note honestly records that "the freedom they marched for included the freedom to take the land they stood on" and that these men "would burn Cherokee towns that December." The Loyalist note gives the provincial regulars their true identity (New York, New Jersey, Connecticut Americans, not British) and handles the Chesney precision correctly. Ferguson's bio is a portrait of a capable, complicated man, not a villain. The outcome text is tight and does not soften the post-surrender killing. The "meanwhile" cards are well-placed.

**Voice and pacing**: excellent throughout the chrome surfaces. No bold, no em-dashes, no over-glossing. The "officer of the day" role is explained clearly in the Campbell bio.

**One MUST-FIX already logged above (M-2)**: the Chesney bio meta-narration.

### Section 1 — "A threat over the mountains": STRONG

**Hook**: opens mid-consequence, not with a date or preamble. "By the autumn of 1780 the regular American war in the South was over." That is a strong opening sentence. The stakes are clear within two paragraphs.

**Pacing and structure**: the section takes its time with the threat itself — three paragraphs on it — and explicitly tells the reader the documentation is thin ("Its first appearance anywhere is Isaac Shelby's own pamphlet of 1823"). This is one of the most important source-critical moments in the whole story and the draft handles it cleanly. The substitution of the documented Ferguson proclamation for the undocumented verbal threat is a fine editorial decision, and the quote ("dregs of mankind") does real work.

**Stakes**: the Watauga settlements' decade of self-governance, the Cherokee land they occupied, the army raised without a government — all set well. The Cherokee subtext ("the same army's leaders would spend that December burning Cherokee towns") is placed without moralizing.

**Dual POV**: Ferguson's point of view is given through his own words (the proclamation, the letter from the ridge) and through a fair reading of why he might have stood rather than run. This is the right register for a civil-war battle: neither side is cartoon.

**Meanwhile card**: "An army nobody ordered" — captures the structural irony cleanly.

**Newcomer clarity**: mostly clean. One SHOULD-FIX (S-1 below).

**Framing**: the fire-and-sword threat is handled exactly as the HANDLE-WITH-CARE note required: as Shelby's later story, hedged, with the better-attested proclamation substituted. No sanitization, no gratuitous dramatization. STRONG.

### Section 2 — "The ring on the ridge": STRONG / NEEDS WORK

**Overall**: the battle section is very well told. The tactical explanation of why the rifle beat the musket on wooded ground is the clearest version of this argument in any battle piece in the app. The human cost in the surrender killing is not flinched from. The Collins witness quote ends the section on the right note.

**Pacing**: the paragraph structure follows the battle's actual shape — terrain → weapons contrast → the ring → the fighting → the charges → Ferguson killed → the surrender killing → the colonels stopping it → the aftermath. The reader follows the battle. No tactical play-by-play tedium.

**Dual POV**: present. De Peyster's protest ("damned unfair") is humanizing. The Loyalists are not passive props; their bayonet charges are tactical choices made by real soldiers. Ferguson's final ride is dignified.

**One MUST-FIX logged above (M-3)**: "Buford's play" unexplained.

**One MUST-FIX logged above (M-1)**: meta-narration ("the page will not soften") in the de Peyster paragraph.

**The name-list paragraph (para 4, starting "About a mile from the ridge")**: the list of eight colonels with "(Patriot)" tags is functional but borders on a name-dump. Not a gate blocker — the intent is to establish that the ring was multi-directional — but it is the section's weakest sentence for a reader who cannot yet place the McDowells, Chronicle, Hambright, Lacey, or Winston. See SHOULD-FIX S-3.

**Meanwhile card**: "Why the rifle won" — a genuine analytical beat, not a recap. Earns its place.

### Section 3 — "Tarleton's quarter, and the oak": STRONG

**Hook**: opens with movement ("The victors did not linger") and immediately establishes what makes this section different from a standard aftermath: the prisoners are the story. Strong.

**Pacing**: the march → the court → the hangings → the justification → the dissolution of both armies → the strategic consequences → the quotes → the Ferguson grave. Each beat is a real pause point. The section does not compress the aftermath into a verdict paragraph; it lives in the aftermath.

**The Bickerstaff court**: handled with care. The court is called real ("convened under a real North Carolina statute by officers who really were magistrates") and the verdict is called "vengeance dressed as law." That is the honest reading. The Allaire perspective ("He was not a neutral witness. He was also not wrong") is the best framing in the draft — it holds two things at once without false balance.

**The dissolution paragraph**: the prisoner march dissolving to almost nothing (seven hundred driven off, barely sixty arrived) is a vivid example of what a militia war looked like from the losing side. This is the draft's strongest compression of the messy aftermath.

**Strategic consequences**: the Cornwallis retreat, the Loyalist-manpower theory's death, the road to Cowpens — told plainly and correctly ordered. The Clinton / Jefferson retrospective quotes earn their place by being contrasted: both are "looking back at a hinge they could see only afterward."

**Closer (Ferguson's grave)**: the closer is strong as content ("a courtesy, the marker says, from American citizens to a brave fallen enemy"), but the sentence "It is the right note to end on, and the honest one" is a gentle meta-narration. It tells the reader the writer endorses this note, rather than trusting the reader to feel it. It is softer than the MUST-FIX M-1 instance, but it is the same pattern. Flagged as SHOULD-FIX S-4.

**Meanwhile card**: "The cycle, named plainly" — this is the best meanwhile card in the set. It names the structural truth of the southern civil war in a single sentence: "each side hanged the other's men and called it justice, and the rope went back and forth across the backcountry until there was almost nobody left who had not lost someone to it."

**Framing**: STRONG. The atrocity is not hidden, not softened, and not sensationalized. The post-surrender killing is told in section 2 with specificity (men bayoneted and shot where they lay) and the Bickerstaff hangings are told in section 3 with specificity (nine men, by torchlight, three at a time, named). The reader is given the Loyalist perspective (Allaire's diary), the complexity of the Patriot justification ("retaliation, plainly stated"), and the structural reality (both armies dissolved and went home). Loyalists are treated as Americans with reasons, not as traitors.

---

## SHOULD-FIX items (non-blocking)

### S-1 — "a captured Patriot named Samuel Phillips" (section 1, para 3)

"Patriot" first appears as a common noun before the term has been defined in this section. The second paragraph defines "Loyalist" ("colonists loyal to the king") but the first side-tagged Patriot with an explanation does not appear until para 6. A reader encountering para 3 before the muster paragraph might ask: what is a Patriot? A simple parenthetical fix when the word first appears as a noun:

> Ferguson paroled a captured Patriot (a colonist opposing the king) named Samuel Phillips...

Or restructure para 2 to briefly name both sides when Loyalists are first defined.

### S-2 — "Sir Henry Clinton (British)" (section 3, para 7)

His role is not given. He is described as "writing after the war" — fine — but a newcomer does not know whether he is a general, a politician, or an observer. Adding "British commander-in-chief in America" takes five words and grounds the quote.

> Sir Henry Clinton (British), British commander-in-chief in America, writing after the war, called Kings Mountain...

### S-3 — The colonels name-dump in section 2 (para 4)

> "Campbell's Virginians (Patriot) and Shelby's men (Patriot) took one end; Sevier (Patriot), the McDowells' Burke County men, Joseph Winston (Patriot), the Lincoln County 'South Fork boys' under Frederick Hambright (Patriot) and William Chronicle (Patriot), Cleveland (Patriot), Edward Lacey (Patriot), and James Williams (Patriot) closed the long sides and the far end."

Eight names and five or six (Patriot) tags in one sentence — functional, but it is the draft's one prose stumbling-block. A reader who has been introduced to Campbell, Shelby, Sevier, and Cleveland in section 1 can absorb their names here; Winston, Hambright, Chronicle, and Lacey are new. Not a comprehension blocker (the reader understands that multiple columns closed the ring), but consider trimming to the primary commanders and noting the others exist: "Sevier, Cleveland, and several South Carolina contingents under Lacey and Williams closed the long sides and the far end."

### S-4 — "It is the right note to end on, and the honest one" (section 3, para 9)

Softer than MUST-FIX M-1 but the same pattern: the writer stepping in to endorse the material. The preceding sentence ("a courtesy, the marker says, from American citizens to a brave fallen enemy") is complete on its own. Remove "It is the right note to end on, and the honest one" and the closer is stronger. The final two sentences then do the whole work:

> The man buried there was the only British soldier on the field. Everyone who killed him, and everyone he commanded, was an American.

---

## Framing audit (specific checks requested)

### Are Loyalists treated as Americans, not cartoon villains?

Yes. The dossier's Loyalist side note establishes that "every man in the corps was an American colonist except Ferguson himself" and identifies the provincial regulars as New York, New Jersey, and Connecticut men. In the narrative, de Peyster's Dutch Manhattan ancestry is noted to reinforce that the "British" officers here were Americans too. Ferguson is treated with dignity throughout: his invention, his crippled arm, his choice of ground, his death refusing to surrender. The Collins quote ending section 2 ("the wives and children of the poor Tories came in, in great numbers") is a verbatim witness account and it humanizes the Loyalist losses without any editorial.

### Is the post-surrender atrocity neither hidden nor sensationalized?

Neither hidden nor sensationalized. It is reported in section 2 with specificity ("Loyalist wounded were bayoneted and shot where they lay") and context (Tarleton's quarter, Williams's mortal wounding feeding revenge firing). The colonels stopping it is noted. The Bickerstaff hangings are told in section 3 with the same specificity: nine men, by torchlight, three at a time, named leaders. The word "murder" appears in Campbell's actual quote. The meanwhile card names it plainly ("vengeance dressed as law"). The draft threads the needle — the atrocity is the thesis of the page (as the file comment states), not a footnote, but it is not exploited for shock.

### Does Ferguson get a fair portrait?

Yes. Ferguson's bio is the most detailed commander portrait on either side: his invention, Brandywine wound, left-handed adaptation, summer's work raising militia, choice to stand on the ridge, command style under fire (silver whistle, conspicuous checked shirt), refusal to surrender. The narrative does not editorialize against him. His death is reported without triumphalism. The grave closer elevates him explicitly: "a courtesy, the marker says, from American citizens to a brave fallen enemy."

### Is the "civil war" character of the battle stated plainly?

Yes, repeatedly and in varied registers: the dossier note ("every man on both sides was an American"), section 2 (brothers on opposite sides, guards knowing prisoners by name), section 3 ("Americans killing Americans"), and the closer. The meanwhile cards reinforce it. This is the most consistently executed thematic beat in the draft.

---

## Summary

Three MUST-FIX items block ship:

1. **M-1** (meta-narration): "This is the part of the story the page will not soften, because it is the reason the page exists" — section-narrative.tsx, the-ridge, line 58.
2. **M-2** (meta-narration): "his very existence is the reason the page says 'the only British soldier'" — page.tsx, Chesney bio.
3. **M-3** (newcomer gap): "Give them Buford's play!" unexplained in section-narrative.tsx, the-ridge, line 58.

Four SHOULD-FIX items (non-blocking): S-1 (first Patriot use), S-2 (Clinton's role), S-3 (colonels name-list), S-4 (closer meta-endorsement).

All three sections are otherwise strong storytelling: clean dual POV, the thesis ("Americans killing Americans") stated and demonstrated rather than preached, the atrocity material handled honestly, Ferguson given a full and fair portrait, the Loyalists treated as Americans with coherent reasons. Pacing is good across all three sections and the meanwhile cards earn their place. The em-dash rule is clean across every reader-facing surface.
