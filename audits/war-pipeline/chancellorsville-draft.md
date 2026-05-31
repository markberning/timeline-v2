# Battle of Chancellorsville — AUTHOR draft (pipeline step 3)

Storytelling-first narrative drawn ONLY from `chancellorsville-factpack.md`. No facts
from memory. Quotes and contested figures are marked inline; full ledger at the bottom.
Side-tags reset each section (North = Union, South = Confederate).

Format for the integrator: each section is `## id` then a metadata line
(`**eyebrow:**` / `**title:**`), then prose. Image/figure suggestions are flagged
`[FIG: …]`; pull-quote/italic beats are flagged `[Q]` / `[I]`. The integrator ports
this into the `Record<string, Narr>` shape used by `battle-reader`.

---

## the-plan

**eyebrow:** Chancellorsville · Hooker's great gamble
**title:** The Finest Army on the Planet

In the spring of 1863, the Army of the Potomac had a new commander, a fresh plan, and a swagger it had not earned in a long time. Maj. Gen. Joseph Hooker (North) had taken over the largest army on the continent after a winter of disasters, rebuilt its morale, and now intended to do what none of his predecessors had managed: catch Robert E. Lee (South) and his Army of Northern Virginia out in the open and crush them. He had the men to do it. By the best estimates Hooker fielded somewhere around 130,000 soldiers against Lee's roughly 60,000, better than two to one. [VERIFY exact engaged counts differ by source — see ledger.] Hooker is said to have called it the finest army on the planet, and on paper it was hard to argue.

[FIG: portrait — Maj. Gen. Joseph Hooker, North. LANDSCAPE/near-square crop per hero rule, or use inline.]

The plan was genuinely excellent, and that matters, because almost everything that goes wrong from here goes wrong in spite of a good plan, not because of a bad one. Lee was dug in along the Rappahannock River (the broad east–west river line that the town of Fredericksburg sits on, where a Union army had been slaughtered head-on the previous December). Hooker had no intention of repeating that. Instead of hammering the front door, he would slip around the side. He sent three entire corps on a wide swing upriver: cross the Rappahannock far to the west at Kelly's Ford, then cross the Rapidan River (a tributary that joins the Rappahannock from the west) at Germanna and Ely's Fords, and come down behind Lee's left flank. Meanwhile Maj. Gen. John Sedgwick (North) would stay below Fredericksburg with the VI Corps and make a loud demonstration, pinning Lee in place and convincing him the blow was still coming where it had come before.

[FIG: campaign map — Hooker's turning march: Kelly's Ford → Germanna/Ely's Fords → concentration at Chancellorsville crossroads, Sedgwick demonstrating below Fredericksburg. Dotted real-geometry rivers per war-map doctrine.]

It worked. By April 30 the flanking column had concentrated at a place called Chancellorsville — not a town, just a single large brick house at a road junction in the woods, owned by the Chancellor family. Hooker now had a powerful army planted squarely behind Lee's position, with Sedgwick's force still threatening the front. Lee was caught between two fires, outnumbered everywhere, on ground of Hooker's choosing. Hooker reportedly boasted in an order to his troops that Lee must now "ingloriously fly" or come out and be destroyed [VERIFY exact wording and date of the order — attribute as "reportedly" until confirmed]. For about one day, the boast looked justified.

What Hooker had not reckoned with was the ground itself. The Chancellorsville crossroads sits in the middle of the Wilderness of Spotsylvania, a dense, tangled second-growth scrub forest grown up over abandoned charcoal and iron furnaces. It was the kind of country that swallows artillery and breaks up any large body of men trying to maneuver through it, the kind of country where you cannot see fifty yards and cannot bring your numbers to bear. Hooker's two-to-one advantage was only an advantage in the open. In the Wilderness, the woods were about to do the work of an extra Confederate corps.

> **OUTCOME:** Hooker's turning march was one of the best-conceived operations the Army of the Potomac ever attempted — and it set the table for the army's most humiliating defeat.

A brilliant plan got the bigger army into a winning position. But the position was deep inside a forest that erased the very edge the plan had been built to exploit, and the commander who had conceived the maneuver was about to lose his nerve the moment Lee refused to behave like a beaten man.

**Meanwhile [sidebar].** *The war this army was fighting had changed under its feet.* Four months earlier, on January 1, 1863, the Emancipation Proclamation had taken effect, declaring enslaved people in the rebelling states free and binding the Union war effort, openly and on the record, to the destruction of slavery. The men marching toward Chancellorsville were no longer fighting only to hold the country together. They were fighting to end the thing the Confederacy had been built to protect. That was now the stake on the table, whatever any soldier in the ranks thought of it.

---

## lee-divides

**eyebrow:** Chancellorsville · The audacity of the outnumbered
**title:** Splitting an Army That Was Already Too Small

Here is the situation Robert E. Lee (South) woke up to on the first of May: a Union army of perhaps 130,000 men had gotten behind him, a second Union force was pressing his front at Fredericksburg, and his own army numbered around 60,000 all told. [VERIFY counts.] The textbook answer to being outnumbered two to one, with enemies on two sides, is to retreat and save the army. Lee did the opposite, twice, in a way that has been studied by soldiers ever since as either reckless or perfect, and possibly both.

The first thing that saved him was that Hooker (North) flinched. On May 1, Union columns pushed east out of the Wilderness toward the open ground where their numbers and their guns would finally count. Lee's lead elements, with Lt. Gen. Thomas "Stonewall" Jackson (South) driving them forward, met that advance and pushed back. The fighting was sharp but not decisive, and by every measure Hooker still held the advantage. Then Hooker ordered his men to stop and pull back into the Wilderness, surrendering the open ground he had marched all that way to reach. A subordinate reportedly came away convinced that "my commanding general was a whipped man" [VERIFY exact wording and speaker]. The battle had been fought for one afternoon, and already the psychology had flipped: the bigger army was digging in to defend, and the smaller army was coming on.

[FIG: map — May 1, Union advance out of the Wilderness meets Jackson's lead elements; Hooker's pullback to the Chancellorsville defensive line. Note this is where the initiative changes hands.]

With Hooker hunkered down, Lee did the first audacious thing. He split his army in front of a superior enemy. He left a small holding force of somewhere between 9,000 and 11,000 men under Maj. Gen. Jubal Early (South) to watch Fredericksburg and hold off Sedgwick, and took everyone else west to deal with Hooker. That alone would have been bold. What he and Jackson decided to do next was, by the standards of military prudence, close to insane.

That night, Lee and Jackson sat on cracker boxes by a fire in the woods and worked out a plan to split the army *again*. The reasoning ran like this: Hooker's line had a weak spot. His right flank, out at the western end, was hanging in the air, unanchored to any river or hill, "in the air" being the soldier's term for a flank with nothing to lean on and nothing to stop an enemy from getting around the end of it. If a force could march clear around the Union army through the concealing Wilderness and come in on that exposed flank from the side, it could roll the whole line up like a carpet. The catch was the size of the force required and the distance it would have to travel. Jackson proposed taking his entire Second Corps, around 28,000 to 30,000 men, on a march of roughly twelve miles around the Union army's front.

[I] Do the arithmetic the way Lee's staff officers must have done it that night, and it is staggering. Lee was already outnumbered better than two to one. He had just peeled off a third of what remained to hold Fredericksburg. Now he proposed to send the larger part of what was *left* on a half-day march around the enemy, leaving himself with perhaps 14,000 men directly in front of Hooker's 70,000-odd. If Hooker attacked the thin force in front of him during those hours, Lee's army would simply cease to exist. [VERIFY the ~14,000 holding figure — derived from pack totals, confirm before printing as a hard number.]

The road existed because the country knew it and the army did not. Jackson's mapmaker, Jedediah Hotchkiss (South), the topographer whose careful maps were one of the Confederacy's quiet advantages, was shown a concealed route by Charles C. Wellford (South), the proprietor of an iron furnace called Catharine Furnace south of the crossroads, who knew the local roads the way only a man who hauls iron over them can. That hidden road, looping south and west out of sight of the Union lines, was the whole plan. Without it there is no flank march, no surprise, no masterpiece. Lee bet his army on a furnace owner's knowledge of his own back roads.

> **OUTCOME:** Lee chose, twice in two days, the single riskiest option available to a general — and the choices were the reason an outnumbered army won.

Dividing a force in the face of a stronger enemy is the textbook recipe for getting beaten in detail, destroyed one piece at a time. Lee did it twice in forty-eight hours and got away with it, partly because his subordinates were good enough to execute it, and largely because the man across the field had already decided he was beaten.

**Meanwhile [sidebar].** *What the Confederate army was fighting for, behind the audacity.* It is worth being plain about what this brilliant maneuver was in the service of. The Army of Northern Virginia existed to defend the Confederacy, and the Confederacy existed to preserve a society built on the enslavement of Black people. The army that marched those twelve miles through the Wilderness ran, at the front and behind it, on enslaved labor: cooks, teamsters, blacksmiths, hospital hands, and officers' body servants, men held in bondage who shadowed the columns and dug the works. Lee's generalship at Chancellorsville was extraordinary. The cause it served was the ownership of human beings, and the victory it won was, within two months, the springboard for an invasion of the free North.

---

## the-flank-march

**eyebrow:** Chancellorsville · Dusk on the Orange Turnpike
**title:** Jackson Comes Out of the Woods

At around seven or eight in the morning on May 2, Stonewall Jackson (South) put his Second Corps on the road, and for most of the day the most dangerous column in the Confederacy more or less disappeared. Twenty-eight to thirty thousand men, with their guns and wagons, threaded south and then west along Wellford's hidden road, past Catharine Furnace, through woods thick enough to hide an army from an enemy a few miles away. It was slow, exposed, terrifying work. A march like that has no good answer if it is caught strung out on a forest track, and for hours it was strung out on a forest track.

It was very nearly caught. Maj. Gen. Daniel Sickles (North), holding high ground at a place called Hazel Grove, spotted the column moving across his front and sent troops to probe at Catharine Furnace. For a moment the whole plan teetered. But the 23rd Georgia (South), thrown out as a rear guard, fought a delaying action that bought Jackson the time he needed, and the moment passed. Worse, Hooker (North) read the moving column exactly backward. A long gray line trailing south and west out of his front looked, to a commander who had already convinced himself Lee was beaten, like a Confederate army in retreat. Hooker chose to believe Lee was running. Lee was not running. Lee was reaching around his neck.

[FIG: the flank-march map — Jackson's ~12-mile loop south past Catharine Furnace, then north up to the Orange Turnpike opposite the Union right. Several beats per the dense-map rule; label Catharine Furnace, Wilderness Church, Howard's XI Corps, Orange Turnpike. Source: ABT flank-attack map.]

What was waiting at the end of that march was the XI Corps under Maj. Gen. Oliver O. Howard (North), and it was waiting the wrong way. Howard's men held the far western end of the Union line, the flank that hung in the air, and they were facing south, toward where the trouble was supposed to come from, with their right end open to the west and unprotected. They were not entrenched. As the long spring evening came on, around 5:30, they were cooking supper, stacking arms, settling in. They had been warned that something was moving out beyond their flank, and the warnings had been waved off up the chain as the nervousness of green troops. Most of the corps was made up of German-American regiments, immigrant soldiers the rest of the army half-dismissed as the "Dutch," and no one with the authority to refuse the order had taken their reports seriously.

[I] The first thing many of them saw was the wildlife. Deer and rabbits came bolting out of the western woods ahead of the line, driven from cover by the advance of an army the men had been told was not there. [VERIFY the wildlife-fleeing detail — common in accounts but needs a cited source before printing as fact; soften to "according to accounts of the rout" if unconfirmed.] Then the trees themselves seemed to come apart, and out of them came Jackson's corps at a dead run, the high keening rebel yell carrying ahead of a battle line a mile wide, hitting the open end of Howard's corps from exactly the direction no one was facing.

The division of Brig. Gen. Robert Rodes (South) led the assault and, in the words that have followed it ever since, rolled completely over the XI Corps. There is no other honest way to describe what happened. A line of unentrenched men, facing the wrong way, with their suppers half-cooked, was simply overrun from the flank, and a flanked line cannot fight back, because almost no one in it can bring a weapon to bear on an enemy coming from the side. The corps came apart. Some units, Maj. Gen. Carl Schurz's (North) division among them, managed a stand in the chaos and made the Confederates pay for ground. Most of it dissolved into a stampede back toward the Chancellorsville crossroads. In a matter of minutes the XI Corps lost around 2,500 men, killed, wounded, and captured, and the Union right ceased to exist as a fighting line.

Jackson's men drove forward through the wreckage, pushing roughly a mile and a quarter toward Chancellorsville before the dark and their own disorder, the inevitable tangle of a victorious assault in thick woods at night, finally brought them to a halt. The flank march had worked exactly as drawn on the cracker box. Lee had cut his army into three pieces in front of a force twice his size, and the gamble had paid the biggest dividend of the war.

> **OUTCOME:** Jackson's flank attack is the single most famous maneuver of the Civil War, and it shattered an entire Union corps in under an hour.

A twelve-mile march that should never have gone undetected went undetected, because the ground hid it and the Union commander misread it. The XI Corps was annihilated as a unit less for any failure of its soldiers than for being posted in the air, facing the wrong way, by a high command that ignored its own warnings.

**Meanwhile [sidebar].** *The scapegoats.* In the weeks after, the broken XI Corps was nailed to the wall by the rest of the army and the Northern press, mocked as the "Flying Dutchmen" for breaking and running. The label stuck, and it was unfair. These were largely German-American immigrant regiments who had been strung out on an unanchored flank, told to face the wrong direction, and denied reinforcement after their own pickets reported the enemy massing. They lost roughly 2,500 men in minutes because of where they were placed, not because of who they were. The army needed someone to blame for the rout, and the immigrants were the easiest target.

---

## jackson-falls

**eyebrow:** Chancellorsville · The cost of the masterpiece
**title:** Shot by His Own Men

It was Jackson's own aggression that killed him, and the manner of it is one of the cruelest accidents in American military history. With the XI Corps shattered and night fallen, Stonewall Jackson (South) was not satisfied. He wanted to push on in the dark, to get between the broken Union army and its escape routes across the river and finish the job before morning. So he rode forward of his own lines on the Orange Plank Road with his staff, scouting the ground ahead for a night attack, out past the point where his own jumpy soldiers expected anyone friendly to be.

[FIG: portrait — Lt. Gen. Thomas "Stonewall" Jackson, South. Inline portrait (do not stretch a tall portrait into a landscape hero band — see hero-must-be-landscape rule).]

In the black confusion of the woods, his own men opened fire on him. A North Carolina regiment, the 18th North Carolina (South), heard horsemen coming back toward their line in the dark, took them for Union cavalry, and let go a volley. Three balls struck Jackson, shattering his left arm. He was carried off the field under fire, and the next day, May 3, surgeons amputated the arm. Lee (South), when word reached him of the amputation, is said to have answered that Jackson had lost his left arm but the army had lost its right arm [VERIFY exact wording — widely attributed but frequently paraphrased; attribute as "Lee is said to have…" until a primary source confirms it].

With Jackson down, command of the Second Corps fell to the most unlikely man on the field. Maj. Gen. J.E.B. "Jeb" Stuart (South), Lee's flamboyant cavalry chief, the plumed-hat scout who had spent the war riding rings around Union armies, had never in his life commanded infantry in a pitched battle. He took over Jackson's corps overnight and renewed the assault at first light on May 3, and he did it well, which was not at all guaranteed.

[FIG: map — May 3 morning: Stuart's renewed assault from the west, Hazel Grove / Fairview artillery duel, Union line collapsing inward on the Chancellorsville crossroads. Dense per the map rule.]

May 3 was decided by a hilltop and a blunder. Hazel Grove was commanding high open ground southwest of the crossroads, one of the few places in all that forest where artillery could see and be massed, and it was held by Sickles's (North) men. On the morning of the third, Hooker (North) ordered Sickles off it, pulling back to tighten his line. It was a gift. Col. E. Porter Alexander (South), Lee's gifted young artillerist, immediately rushed thirty-odd guns up onto Hazel Grove and opened on the Union artillery posted at Fairview, the height just to the northeast. For once in Virginia, Confederate guns dominated the duel. The Federal artillery at Fairview was overpowered and the position fell around half past nine in the morning, and with it the whole Union line around Chancellorsville buckled inward.

In the middle of that collapse, the Union army effectively lost its commander. Around 9:15 that morning, Hooker (North) was standing on the porch of the Chancellor house, leaning against one of its pillars, when a Confederate cannonball struck the pillar and knocked him senseless, very likely a concussion. He was out for more than an hour, dazed and incapacitated for longer, and here the day's last hinge turned: he refused to hand command of the army over to his senior subordinate, Maj. Gen. Darius Couch (North). So at the exact moment the army most needed a clear head, it had a concussed one that would not let go. The 130,000-man army was paralyzed at the top while its line came apart.

> **OUTCOME:** Lee won the field on May 3 — and paid for it with the one subordinate he could not replace.

Stuart's assault and Alexander's guns broke the Union position around Chancellorsville and drove Hooker's army back on itself. But the price of the night before was Stonewall Jackson, the most aggressive corps commander Lee had, the engine of the whole flank attack, now lying in a shattered ruin in a borrowed bed.

**Meanwhile [sidebar].** *Sedgwick breaks through at the other end.* While Chancellorsville burned, the second Union force finally moved. On May 3, Sedgwick's (North) VI Corps stormed Marye's Heights above Fredericksburg, the same stone wall and sunken road that had butchered the Union attackers the previous December, drove Jubal Early (South) off it in the Second Battle of Fredericksburg, and pushed west toward Lee's rear. For a few hours there was a real chance to catch Lee between two fires after all. Then, a few miles on, at a country meetinghouse called Salem Church, Maj. Gen. Lafayette McLaws's (South) division, detached by Lee to plug exactly this hole, stopped Sedgwick cold. The pincer closed on nothing.

---

## hooker-quits

**eyebrow:** Chancellorsville · A victory too expensive to keep
**title:** The General Loses His Nerve

What broke at Chancellorsville, in the end, was not the Union army. It was Joseph Hooker's (North) will to use it. He still had tens of thousands of men who had barely fired a shot. He still outnumbered Lee (South). But after the porch and the concussion and the collapse of his line, the fight had gone out of the man at the top, and an army cannot be braver than the general commanding it.

Lee, astonishingly, was now the one dividing his attention. With Hooker passive and pulled back into a tight defensive horseshoe near the river, Lee felt free to turn part of his army *around*, away from Hooker, to deal with Sedgwick's (North) breakthrough in his rear. Through May 3 and 4, McLaws (South) and then Early (South), coming back into the fight, hemmed Sedgwick in at Salem Church and pressed him hard. Lee was now fighting in two directions, and winning in both, against a combined force more than twice his size, because the larger force had stopped believing it could win. On the night of May 4 into the 5th, Sedgwick gave it up and pulled his corps back north across the Rappahannock over pontoon bridges at Banks' Ford. [VERIFY Banks' Ford vs. Scott's Ford crossing distinction if either is labeled on a map.]

[FIG: campaign map — the second phase: Sedgwick's storm of Marye's Heights, advance to Salem Church, the repulse, withdrawal across Banks'/Scott's Ford; Lee facing two ways. Dotted real-geometry map.]

That left only Hooker, dug in with his back to the river, and on the night of May 5 into May 6 he quit. With Sedgwick repulsed and his own nerve gone, Hooker recrossed the Rappahannock to the north bank and ended the campaign. He had brought roughly twice Lee's numbers across the rivers and behind the Confederate army, and he carried them back across beaten by an enemy he had outnumbered the entire time. It is, fairly, called Lee's masterpiece, his perfect battle, by the historians who have studied it. Outnumbered two to one, he had divided his army twice, out-thought and out-nerved a larger and better-positioned foe, and sent it packing.

[I] But the word *masterpiece* hides the bill. Read the casualty lists side by side and a darker story shows up underneath the brilliance.

The two armies between them lost somewhere around 30,000 men in roughly six days of fighting in tangled woods that hid the dead and trapped the wounded. The horror of that ground had its own signature: brush fires, set off by shellfire and musketry in the dry second-growth scrub, swept through the thickets, and wounded men of both sides who could not crawl clear were burned where they lay. [VERIFY the Wilderness-fire toll and extent — documented as a recurring horror of this terrain but confirm a cited source before printing specifics.] In raw numbers the North lost more, around 17,300 to the South's roughly 13,000. But Lee's 13,000 came out of an army half the size of Hooker's. That was something like a fifth of his entire force, against roughly an eighth of Hooker's, a far heavier share of a much smaller body of men. [Figures: North ~17,300, South ~13,000; ranges in the ledger.] It was a victory, and it was a victory Lee's army could not really afford to keep winning.

And one of the 13,000 was Jackson. He had been carried roughly twenty-seven to thirty miles south to an outbuilding on the Chandler plantation near Guinea Station to recover away from the front. There the wound did not kill him; pneumonia did. On May 10, 1863, eight days after his own men shot him in the dark, Stonewall Jackson died, thirty-nine years old. His reported last words were that they should cross over the river and rest under the shade of the trees [VERIFY — Jackson's physician Dr. Hunter McGuire, the source, admitted he was not present at the exact moment; print only with "reportedly," as the accepted-but-uncertain version].

> **OUTCOME:** Confederate victory — Lee's tactical masterpiece, and a wound the Confederacy never healed.

Lee won the battle outright, turning back a larger, well-placed army by sheer audacity. But he lost a fifth of his men he could not replace and Stonewall Jackson he could *never* replace, and the confidence the win bought him sent him north in June into the free states, into the teeth of the new emancipation policy, toward a town called Gettysburg where the reorganized army that had lost its right arm would meet its decisive defeat. The perfect battle was the beginning of the end.

**Meanwhile [sidebar].** *What the victory marched toward.* Buoyed by Chancellorsville, Lee turned his army north within weeks for a second invasion of the United States, the Gettysburg campaign of June and July 1863. The army that crossed into Pennsylvania did so shadowed by an estimated 6,000 to 10,000 enslaved people, serving as cooks, teamsters, blacksmiths, and body servants, who kept the Confederate war machine running, and who on free soil were at risk of liberation. Some Confederate units, on that same march, seized free Black Pennsylvanians and sent them south into slavery. The masterpiece in the Wilderness was the launching pad for all of it, and it ended, two months later, at Gettysburg.

---

# Fact ledger — [VERIFY] flags and figure handling

Every claim below traces to `chancellorsville-factpack.md`. Flags carried forward for the
fact-check gate (step 4). Nothing here should ship as a hard direct quote or precise count
until cleared.

## Quotes (ALL four marquee quotes flagged in the pack — handled as "reportedly/said to")
- **Lee, "lost my right arm"** ("He has lost his left arm, but I have lost my right arm.") — §jackson-falls. Rendered as indirect ("Lee… is said to have answered that…"), NOT a direct quote. [VERIFY] exact wording vs. a primary source; pack S2, frequently paraphrased.
- **Jackson's last words** ("Let us cross over the river and rest under the shade of the trees.") — §hooker-quits. Rendered indirectly with "reportedly." [VERIFY] — source Dr. Hunter McGuire admitted he was not present at the exact moment; accepted-but-uncertain (pack S5).
- **Hooker's pre-battle boast** ("must ingloriously fly… certain destruction awaits him") — §the-plan. Rendered as "reportedly boasted… 'ingloriously fly'," partial-quoted with the [VERIFY] caveat. [VERIFY] exact text + date of the General Order (~Apr 30, pack S1/S2/§8).
- **"My commanding general was a whipped man"** — §lee-divides. Rendered as "reportedly… 'a whipped man'." [VERIFY] exact wording AND speaker (pack §5 item 2).
- **"Rolled completely over them"** (Rodes/XI Corps) — §the-flank-march. Used as attested phrasing from the pack (S1) describing Rodes's assault; not a personal quote, lower risk, but confirm at gate.
- **"Lee's perfect battle" / "masterpiece"** — §hooker-quits. Attributed to *historians* (Sears/[S1][S2][S9]), never to a participant, per pack §8.

## Atmospheric details flagged in the pack as needing a citation
- **Wildlife (deer/rabbits) bolting from the woods ahead of Jackson's line** — §the-flank-march, set as an [I] beat with an inline [VERIFY] and a soften-to "according to accounts of the rout." Common in accounts; confirm a cited source before printing as fact (pack §7).
- **Wilderness brush fires burning the wounded of both sides** — §hooker-quits, [VERIFY] before printing specifics/figures. Documented recurring horror of the terrain, exact extent uncited (pack §7).

## Figures — given as the pack's ~ranges / "~2:1" framing, never single precise counts
- **Strengths ~130,000 (North) vs ~60,000 (South), "two to one"** — used throughout. Pack: North ~97,400 (ABT)–~133,868 (Wiki/Sears); South ~57,400 (ABT)–~60,892 (Wiki). [VERIFY] — flagged inline in §the-plan and §lee-divides that engaged counts differ by source. Did NOT assert a single number.
- **~14,000 Confederates left in front of Hooker during the flank march** — §lee-divides, explicitly flagged [VERIFY] as derived from pack totals (60k − ~10k Early − ~29k Jackson), not a sourced figure. Confirm or cut the hard number; the *point* (Lee left a sliver in front of the bulk of Hooker's army) is solid.
- **~70,000 Union directly facing Lee** — §lee-divides, "70,000-odd," approximate from the ~106k-at-Chancellorsville-proper minus the routed/repositioned; soften or cut if unconfirmed. [VERIFY]
- **Casualties ~30,000 total; North ~17,300 (Wiki 17,287 / ABT 17,304), South ~13,000 (Wiki 12,764 / ABT 13,460)** — §hooker-quits, given as "around 17,300 / roughly 13,000." Proportional framing (~⅕ of Lee's army vs ~⅛ of Hooker's) traces to pack §3. The pack says "~21–22% vs ~13%"; I rendered as "about a fifth vs about an eighth" (≈20% vs ≈12.5%) — slightly rounded; gate may tighten to the pack's 21–22%/13%.
- **XI Corps ~2,500 lost in minutes** — §the-flank-march / Meanwhile. Pack §3 (259 k / 1,173 w / 994 m). Solid.
- **Jackson: 3 balls, LEFT arm, 18th North Carolina, amputated May 3, moved ~27–30 mi to Chandler plantation near Guinea Station, pneumonia, died May 10, age 39** — §jackson-falls / §hooker-quits. All consistent across pack sources (pack §6/§7); pack notes one primary cross-check owed on the wounding mechanics.
- **Hazel Grove: Alexander massed ~30+ guns; Fairview fell ~9:30 a.m.; Hooker concussed ~9:15 a.m.** — §jackson-falls. Pack §5 items 8–9. Solid.

## Geography flagged for map labeling
- **Banks' Ford vs. Scott's Ford** (Sedgwick's withdrawal crossing) — §hooker-quits, used "Banks' Ford" with an inline [VERIFY]. Pack §4/S4 notes the distinction was not deep-verified; confirm if labeled on a map.
- **23rd Georgia rear guard at Catharine Furnace; Wellford/Hotchkiss concealed road** — §lee-divides / §the-flank-march. Pack §4 flags the 23rd GA numbers as not deep-verified; I named the unit but no number. OK.

## SHIP-BLOCKING throughline — slavery named in own prose (confirmed present)
- **§the-plan Meanwhile** — Emancipation Proclamation in effect Jan 1, 1863, four months prior; the war now openly bound to ending slavery.
- **§lee-divides Meanwhile** — names the Confederacy as a society "built on the enslavement of Black people," army running on enslaved labor (cooks/teamsters/blacksmiths/body servants).
- **§hooker-quits Meanwhile + closing prose** — 6,000–10,000 enslaved people shadowing Lee's army into the North; free Black Pennsylvanians seized into slavery; victory as the springboard into "the teeth of the new emancipation policy." Throughline named in the section's OWN voice in three places, not just a sidebar. (feedback_name_the_cause satisfied.)

## Side-tags (reset each section, North=Union / South=CSA)
Each section first-mentions and tags its named figures: Hooker/Lee/Jackson/Stuart/Howard
plus Sedgwick, Sickles, Couch, Schurz, Early, McLaws, Rodes, Alexander, Hotchkiss,
Wellford, the 23rd Georgia, the 18th North Carolina. Verify at gate that no tagged person
appears un-tagged on first mention within a section, and none is double-tagged.
