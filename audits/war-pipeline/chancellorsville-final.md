# Battle of Chancellorsville, FINAL (pipeline step 5: coordinator/reviser)

Reconciled draft. All five critic gates applied; the three comprehensiveness MUST-ADDs
(Stuart's recon, Stoneman's raid, Hooker relieved/Meade) web-verified at this step and
folded in. House voice, side-tags (North=Union, South=Confederate; reset each section),
dual POV, and the slavery-as-cause throughline preserved. Quotes still hedged where the
pack flagged them; Couch's "whipped man" now attributed (on-the-record published quote);
Hooker's General Orders No. 47 boast stated directly.

Format for the integrator: each section is `## id` then a metadata line
(`**eyebrow:**` / `**title:**`), then prose. Image/figure suggestions are flagged
`[FIG: …]`; pull-quote/italic beats are flagged `[Q]` / `[I]`. The integrator wires the
FIG maps and ports this into the `Record<string, Narr>` shape used by `battle-reader`.

---

## the-plan

**eyebrow:** Chancellorsville · Hooker's great gamble
**title:** The Finest Army on the Planet

In the spring of 1863, the Army of the Potomac had a new commander, a fresh plan, and a swagger it had not earned in a long time. Maj. Gen. Joseph Hooker (North) had taken over the largest army on the continent after a winter of disasters, rebuilt its morale, and now intended to do what none of his predecessors had managed: catch Robert E. Lee (South) and his Army of Northern Virginia out in the open and crush them. He had the men to do it. By the best estimates Hooker fielded somewhere around 130,000 soldiers against Lee's roughly 60,000, better than two to one. [VERIFY exact engaged counts differ by source, see ledger.] Hooker is said to have called it the finest army on the planet, and on paper it was hard to argue.

[FIG: portrait, Maj. Gen. Joseph Hooker, North. LANDSCAPE/near-square crop per hero rule, or use inline.]

The plan was genuinely excellent, and that matters, because almost everything that goes wrong from here goes wrong in spite of a good plan, not because of a bad one. Lee was dug in along the Rappahannock River (the broad east–west river line that the town of Fredericksburg sits on, where a Union army had been slaughtered head-on the previous December). Hooker had no intention of repeating that. Instead of hammering the front door, he would slip around the side (around the *flank*, the end of Lee's line, where an army is weakest because it cannot easily turn to face a blow from the side. He sent three entire corps (a corps being one of the big self-contained chunks an army is built from, here anywhere from 10,000 to 30,000 men, several of which together make up the whole army) on a wide swing: cross both rivers far upstream to the west and come down behind Lee's left, into the rear of his position. Meanwhile Maj. Gen. John Sedgwick (North) would stay below Fredericksburg with the VI Corps and mount what soldiers call a demonstration) a loud, faked threat meant to look like the real attack, pinning Lee in place and convincing him the blow was still coming where it had come before.

[FIG: campaign map, Hooker's turning march: Kelly's Ford on the Rappahannock → Germanna and Ely's Fords on the Rapidan → concentration at the Chancellorsville crossroads; Sedgwick demonstrating below Fredericksburg; Stoneman's cavalry riding south toward Gordonsville. Dotted real-geometry rivers per war-map doctrine.]

There was a third arm to the plan, and it would matter more by its absence than anyone expected. While the infantry swung around Lee's flank, Hooker sent his entire cavalry corps (around 10,000 horsemen under Maj. Gen. George Stoneman (North)) on a deep raid far to the south, to get between Lee and the Confederate capital at Richmond and tear up the railroad at Gordonsville that fed Lee's army. The idea was to panic Lee into retreating to protect his supply line, straight into Hooker's waiting infantry. [VERIFY web-sourced at step 5: Stoneman's ~10,000-man cavalry corps, raid toward Gordonsville / the Orange & Alexandria Railroad, Wikipedia *Stoneman's 1863 raid*; ABT.] It was a clever idea that went nowhere, and worse than nowhere: the raiders wrecked a little track, accomplished nothing that lasted, and meanwhile the army they had ridden away from was left with almost no cavalry of its own to scout and screen. An army without its horsemen is an army that cannot see. Hooker had sent away his eyes.

It worked anyway, at first. By April 30 the flanking column had gathered at a place called Chancellorsville, not a town, just a single large brick house at a road junction in the woods, owned by the Chancellor family. Hooker now had a powerful army planted squarely behind Lee's position, with Sedgwick's force still threatening the front. Lee was caught between two fires, enemies on two sides at once, outnumbered everywhere, on ground of Hooker's choosing. In General Orders No. 47 on April 30, Hooker told the army that the enemy must now "ingloriously fly, or come out from behind his defences… where certain destruction awaits him." [Q] For about one day, the boast looked justified.

What Hooker had not reckoned with was the ground itself. The Chancellorsville crossroads sits in the middle of the Wilderness of Spotsylvania, a dense, tangled second-growth scrub forest grown up over abandoned charcoal and iron furnaces. It was the kind of country that swallows artillery (the heavy cannons that win battles in the open) and breaks up any large body of men trying to maneuver through it, the kind of country where you cannot see fifty yards and cannot bring your numbers to bear. Hooker's two-to-one advantage was only an advantage in the open. In the Wilderness, the woods were about to do the work of an extra Confederate corps.

> **OUTCOME:** Hooker's turning march was one of the best-conceived operations the Army of the Potomac ever attempted — and it set the table for the army's most humiliating defeat, because it marched the bigger army into a forest that erased the very edge the plan was built to exploit.

**Meanwhile [sidebar].** *The war this army was fighting had changed under its feet.* Four months earlier, on January 1, 1863, the Emancipation Proclamation had taken effect, declaring enslaved people in the rebelling states free and binding the Union war effort, openly and on the record, to the destruction of slavery. The men marching toward Chancellorsville were no longer fighting only to hold the country together. They were fighting to end the thing the Confederacy had been built to protect. That was now the stake on the table, whatever any soldier in the ranks thought of it.

---

## lee-divides

**eyebrow:** Chancellorsville · The audacity of the outnumbered
**title:** Splitting an Army That Was Already Too Small

Here is the situation Robert E. Lee (South) woke up to on the first of May: a Union army of perhaps 130,000 men had gotten behind him, a second Union force was pressing his front at Fredericksburg, and his own army numbered around 60,000 all told. [VERIFY counts.] The textbook answer to being outnumbered two to one, with enemies on two sides, is to retreat and save the army. Lee did the opposite, twice, in a way that has been studied by soldiers ever since as either reckless or perfect, and possibly both.

The first thing that saved him was that Hooker (North) flinched. On May 1, Union columns pushed east out of the Wilderness toward the open ground where their numbers and their guns would finally count. Lee's lead elements, with Lt. Gen. Thomas "Stonewall" Jackson (South) driving them forward, met that advance and pushed back. The fighting was sharp but not decisive, and by every measure Hooker still held the advantage. Then Hooker ordered his men to stop and pull back into the Wilderness, surrendering the open ground he had marched all that way to reach. Maj. Gen. Darius Couch (North), his senior subordinate, came away from that order shaken; he later wrote that he left Hooker's presence "with the belief that my commanding general was a whipped man." [Q] The battle had been fought for one afternoon, and already the psychology had flipped: the bigger army was digging in to defend, and the smaller army was coming on.

[FIG: map, May 1, Union advance out of the Wilderness meets Jackson's lead elements; Hooker's pullback to the Chancellorsville defensive line. Note this is where the initiative changes hands.]

With Hooker hunkered down, Lee did the first audacious thing. He split his army in front of a superior enemy. He left a small holding force of somewhere between 9,000 and 11,000 men under Maj. Gen. Jubal Early (South) to watch Fredericksburg and hold off Sedgwick, and took everyone else west to deal with Hooker. That alone would have been bold. What he and Jackson decided to do next was, by the standards of military prudence, close to insane.

What made it possible was a piece of intelligence that arrived that night. Jeb Stuart (South), Lee's cavalry chief, rode in with a report from his scouts under Brig. Gen. Fitzhugh Lee (South) (Robert E. Lee's own nephew) who had ridden out along the Union line and found its far western end hanging open. Hooker's right flank, out past the XI Corps, was unanchored: it leaned on no river, no hill, no obstacle of any kind, the soldier's nightmare condition called being "in the air," a flank with nothing to lean on and nothing to stop an enemy from getting around the end of it. [VERIFY web-sourced at step 5: Stuart's report from Fitzhugh Lee's recon, night of May 1, that Howard's XI Corps right was "in the air" on the Orange Turnpike, Wikipedia *Battle of Chancellorsville*; eARMOR.] Lee and Jackson did not intuit the weak spot. Their cavalry found it for them, and handed them the whole battle.

That night, the two men sat on cracker boxes by a fire in the woods and worked out a plan to split the army *again*. If a force could march clear around the Union army through the concealing Wilderness and come in on that exposed flank from the side, it could roll the whole line up like a carpet. The catch was the size of the force required and the distance it would have to travel. Jackson proposed taking his entire Second Corps, around 28,000 to 30,000 men, on a march of roughly twelve miles around the Union army's front.

[I] Do the arithmetic the way Lee's staff officers must have done it that night, and it is staggering. Lee was already outnumbered better than two to one. He had just peeled off a third of what remained to hold Fredericksburg. Now he proposed to send the larger part of what was *left* on a half-day march around the enemy, leaving himself with perhaps 14,000 men directly in front of Hooker's 70,000-odd. If Hooker attacked the thin force in front of him during those hours, Lee's army would simply cease to exist. [VERIFY the ~14,000 holding figure and the ~70,000-odd facing figure, both derived/approximate from pack totals; keep them framed as estimates, not hard counts.]

The road existed because the country knew it and the army did not. Jackson's mapmaker, Jedediah Hotchkiss (South), the topographer whose careful maps were one of the Confederacy's quiet advantages, was shown a concealed route by Charles C. Wellford (South), the proprietor of an iron furnace called Catharine Furnace south of the crossroads, who knew the local roads the way only a man who hauls iron over them can. That hidden road, looping south and west out of sight of the Union lines, was the whole plan. Without it there is no flank march, no surprise, no masterpiece. Lee bet his army on a furnace owner's knowledge of his own back roads.

> **OUTCOME:** Lee chose, twice in two days, the single riskiest option available to a general — dividing his force in the face of a stronger enemy, the textbook recipe for being beaten in detail, destroyed one piece at a time — and got away with it twice in forty-eight hours, partly because his subordinates were good enough to execute it, and largely because the man across the field had already decided he was beaten.

**Meanwhile [sidebar].** *What the Confederate army was fighting for, behind the audacity.* It is worth being plain about what this brilliant maneuver was in the service of. The Army of Northern Virginia existed to defend the Confederacy, and the Confederacy existed to preserve a society built on the enslavement of Black people. The army that marched those twelve miles through the Wilderness ran, at the front and behind it, on enslaved labor: cooks, teamsters, blacksmiths, hospital hands, and officers' body servants, men held in bondage who shadowed the columns and dug the works. Lee's generalship at Chancellorsville was extraordinary. The cause it served was the ownership of human beings, and the victory it won was, within two months, the springboard for an invasion of the free North.

---

## the-flank-march

**eyebrow:** Chancellorsville · Dusk on the Orange Turnpike
**title:** Jackson Comes Out of the Woods

At around seven or eight in the morning on May 2, Stonewall Jackson (South) put his Second Corps on the road, and for most of the day the most dangerous column in the Confederacy more or less disappeared. Twenty-eight to thirty thousand men, with their guns and wagons, threaded south and then west along Wellford's hidden road, past Catharine Furnace, through woods thick enough to hide an army from an enemy a few miles away. It was slow, exposed, terrifying work. A march like that has no good answer if it is caught strung out on a forest track, and for hours it was strung out on a forest track. And the one force that should have caught it (Union cavalry, ranging ahead to scout the woods) was hundreds of miles south on Stoneman's raid. Hooker had sent his eyes away, and now a Confederate army was crossing his front and almost no one was watching the ground.

It was very nearly caught anyway. Maj. Gen. Daniel Sickles (North), whose III Corps held high ground at a place called Hazel Grove, spotted the column moving across his front and sent troops to probe at Catharine Furnace. For a moment the whole plan teetered. But the 23rd Georgia (South), thrown out as a rear guard, fought a delaying action that bought Jackson the time he needed, and the moment passed. Worse, Hooker (North) read the moving column exactly backward. A long gray line trailing south and west out of his front looked, to a commander who had already convinced himself Lee was beaten, like a Confederate army in retreat. Hooker chose to believe Lee was running. Lee was not running. Lee was reaching around his neck.

[FIG: the flank-march map, Jackson's ~12-mile loop south past Catharine Furnace, then north up to the Orange Turnpike opposite the Union right. Several beats per the dense-map rule; label Catharine Furnace, Wilderness Church, Howard's XI Corps, Orange Turnpike. Source: ABT flank-attack map.]

What was waiting at the end of that march was the XI Corps under Maj. Gen. Oliver O. Howard (North), and it was waiting the wrong way. Howard's men held the far western end of the Union line, the flank that hung in the air, and they were facing south, toward where the trouble was supposed to come from, with their right end open to the west and unprotected. They were not entrenched. As the long spring evening came on, around 5:30, they were cooking supper, stacking arms, settling in. They had been warned that something was moving out beyond their flank, and the warnings had been waved off up the chain as the nervousness of green troops, new soldiers who jump at shadows. Most of the corps was made up of German-American regiments, immigrant soldiers the rest of the army half-dismissed as the "Dutch," and no one with the authority to bend the line back and face west had taken their reports seriously.

[I] The first thing many of them saw was the wildlife. Deer and rabbits and turkeys came bolting out of the western woods ahead of the line, driven from cover by the advance of an army the men had been told was not there. [VERIFY the wildlife-fleeing detail, attested at the preserved flank-attack site (deer/rabbits/turkeys); keep the "according to accounts" register, do not assert as certain.] Then the trees themselves seemed to come apart, and out of them came Jackson's corps at a dead run, the high keening rebel yell carrying ahead of a battle line a mile wide, hitting the open end of Howard's corps from exactly the direction no one was facing.

The division of Brig. Gen. Robert Rodes (South) led the assault and, in the words that have followed it ever since, rolled completely over the XI Corps. There is no other honest way to describe what happened. A line of unentrenched men, facing the wrong way, with their suppers half-cooked, was simply overrun from the side, where almost no one could even turn a weapon to meet the enemy. The corps came apart. Some units, Maj. Gen. Carl Schurz's (North) division among them, managed a stand in the chaos and made the Confederates pay for ground. Most of it dissolved into a stampede back toward the Chancellorsville crossroads. In a matter of minutes the XI Corps lost around 2,500 men, killed, wounded, and captured, and the Union right ceased to exist as a fighting line.

Jackson's men drove forward through the wreckage, pushing roughly a mile and a quarter toward Chancellorsville before the dark and their own disorder (the inevitable tangle of a victorious assault in thick woods at night) finally brought them to a halt. The flank march had worked exactly as drawn on the cracker box. Lee had now cut his army into three pieces in front of a force twice his size (Early at Fredericksburg, Lee's own sliver in front of Hooker, and Jackson's corps swinging in from the west) and the gamble had paid the biggest dividend of the war.

> **OUTCOME:** Jackson's flank attack is the single most famous maneuver of the Civil War — a twelve-mile march that should never have gone undetected, undetected because the ground hid it, the Union cavalry was gone, and the Union commander misread what was left in plain sight; it shattered an entire Union corps in under an hour.

**Meanwhile [sidebar].** *The scapegoats.* In the weeks after, the broken XI Corps was nailed to the wall by the rest of the army and the Northern press, mocked as the "Flying Dutchmen" for breaking and running. The label stuck, and it was unfair. These were largely German-American immigrant regiments who had been strung out on an unanchored flank, told to face the wrong direction, and denied reinforcement after their own lookouts reported the enemy massing. They lost roughly 2,500 men in minutes because of where they were placed, not because of who they were. The army needed someone to blame for the rout, and the immigrants were the easiest target.

---

## jackson-falls

**eyebrow:** Chancellorsville · The cost of the masterpiece
**title:** Shot by His Own Men

It was Jackson's own aggression that killed him, and the manner of it is one of the cruelest accidents in American military history. With the XI Corps shattered and night fallen, Stonewall Jackson (South) was not satisfied. He wanted to push on in the dark, to get between the broken Union army and its escape routes across the river and finish the job before morning. So he rode forward of his own lines on the Orange Plank Road with his staff, scouting the ground ahead for a night attack, out past the point where his own jumpy soldiers expected anyone friendly to be.

[FIG: portrait (Lt. Gen. Thomas "Stonewall" Jackson, South. Inline portrait (do not stretch a tall portrait into a landscape hero band) see hero-must-be-landscape rule).]

In the black confusion of the woods, his own men opened fire on him. The 18th North Carolina (South) heard horsemen coming back toward their line in the dark, took them for Union cavalry, and let go a volley. Three balls struck Jackson, shattering his left arm. He was carried off the field under fire, and the next day, May 3, surgeons amputated the arm. Lee (South), when word reached him of the amputation, is said to have answered that Jackson had lost his left arm but the army had lost its right arm. [Q, VERIFY exact wording; widely attributed but frequently paraphrased; render indirectly, not as a hard quote.]

With Jackson down, command of the Second Corps fell to the most unlikely man on the field. Maj. Gen. J.E.B. "Jeb" Stuart (South), Lee's flamboyant cavalry chief, the plumed-hat scout whose horsemen had spent the war riding rings around Union armies, had never in his life commanded infantry in a pitched battle. He took over Jackson's corps overnight and renewed the assault at first light on May 3, and he did it well, which was not at all guaranteed.

[FIG: map, May 3 morning: Stuart's renewed assault from the west, Hazel Grove / Fairview artillery duel, Union line collapsing inward on the Chancellorsville crossroads. Dense per the map rule.]

May 3 was decided by a hilltop and a blunder. Hazel Grove was commanding high open ground southwest of the crossroads, one of the few places in all that forest where cannons could see and be massed, and Sickles's (North) men held it. On the morning of the third, Hooker (North) ordered Sickles off it to tighten his line. It was a gift, and the Confederates took it instantly: Col. E. Porter Alexander (South), Lee's gifted young artillerist, rushed thirty-odd guns up onto Hazel Grove and pounded the Union position to pieces, and by half past nine the whole Union line around Chancellorsville was buckling inward.

In the middle of that collapse, the Union army effectively lost its commander. Around 9:15 that morning (at almost the same minute Alexander's guns were taking Hazel Grove) Hooker (North) was standing on the porch of the Chancellor house, leaning against one of its pillars, when a Confederate cannonball struck the pillar and knocked him senseless, very likely a concussion. So at the exact moment one army was seizing the high ground and pressing its advantage, the other army's commander was being carried off his own porch, dazed and incapacitated for over an hour. And here the day's last hinge turned: even half-conscious, Hooker refused to hand command over to his senior subordinate, Couch (North). The 130,000-man army was paralyzed at the top while its line came apart.

> **OUTCOME:** Lee won the field on May 3 — and paid for it with the one subordinate he could not replace.

But the price of the night before was Stonewall Jackson, the most aggressive corps commander Lee had, the engine of the whole flank attack, now lying in a shattered ruin in a borrowed bed while Stuart finished the work he had started.

**Meanwhile [sidebar].** *Sedgwick breaks through at the other end.* While Chancellorsville burned, the second Union force finally moved. On May 3, Sedgwick's (North) VI Corps stormed Marye's Heights above Fredericksburg, the same stone wall and sunken road that had butchered the Union attackers the previous December, drove Jubal Early (South) off it in the Second Battle of Fredericksburg, and pushed west toward Lee's rear. For a few hours there was a real chance to catch Lee between two fires after all. Then, a few miles on, at a country meetinghouse called Salem Church, Maj. Gen. Lafayette McLaws's (South) division, detached by Lee to plug exactly this hole, stopped Sedgwick cold. The pincer closed on nothing.

---

## hooker-quits

**eyebrow:** Chancellorsville · A victory too expensive to keep
**title:** The General Loses His Nerve

What broke at Chancellorsville, in the end, was not the Union army. It was Joseph Hooker's (North) will to use it. He still had tens of thousands of men who had barely fired a shot. He still outnumbered Lee (South). But after the porch and the concussion and the collapse of his line, the fight had gone out of the man at the top, and an army cannot be braver than the general commanding it.

Lee, astonishingly, was now the one dividing his attention. With Hooker passive and pulled back into a tight defensive horseshoe near the river, Lee turned part of his army *around*, away from Hooker, to deal with Sedgwick's (North) breakthrough in his rear. He was now fighting in two directions at once and winning in both (against a combined force more than twice his size) because the larger force had stopped believing it could win. McLaws (South) and the returning Early (South) hemmed Sedgwick in at Salem Church, and on the night of May 4 into the 5th Sedgwick gave it up and pulled his corps back north across the Rappahannock over pontoon bridges (temporary floating bridges thrown across the river) at Banks' Ford. [VERIFY Banks' Ford vs. Scott's Ford crossing distinction if either is labeled on a map.]

[FIG: campaign map, the second phase: Sedgwick's storm of Marye's Heights, advance to Salem Church, the repulse, withdrawal across Banks'/Scott's Ford; Lee facing two ways. Dotted real-geometry map.]

That left only Hooker, dug in with his back to the river, and on the night of May 5 into May 6 he quit. With Sedgwick repulsed and his own nerve gone, Hooker recrossed the Rappahannock to the north bank and ended the campaign. He had brought roughly twice Lee's numbers across the rivers and behind the Confederate army, and he carried them back across beaten by an enemy he had outnumbered the entire time. It is, fairly, called Lee's masterpiece, his perfect battle, by the historians who have studied it. Outnumbered two to one, he had divided his army twice, out-thought and out-nerved a larger and better-positioned foe, and sent it packing.

[I] But the word *masterpiece* hides the bill. Read the casualty lists side by side and a darker story shows up underneath the brilliance.

The two armies between them lost somewhere around 30,000 men in roughly six days of fighting in tangled woods that hid the dead and trapped the wounded. The horror of that ground had its own signature: brush fires, set off by shellfire and musketry in the dry second-growth scrub, swept through the thickets, and wounded men of both sides who could not crawl clear were burned where they lay. [VERIFY the Wilderness-fire toll and extent, documented recurring horror of this terrain; print no specific figure.] In raw numbers the North lost more, around 17,300 to the South's roughly 13,000. But measure each loss against the army it came out of, and the brilliance curdles: out of Hooker's roughly 130,000, the North's dead and wounded were about one in eight; out of Lee's roughly 60,000, the South's were better than one in five. [Figures: North ~17,300 of ~130k; South ~13,000 of ~60k; ranges in the ledger.] Lee bled a far heavier share of a far smaller army. It was a victory, and it was a victory his army could not really afford to keep winning.

And one of the 13,000 was Jackson. He had been carried roughly twenty-seven miles south to an outbuilding on the Chandler plantation near Guinea Station to recover away from the front. There the wound did not kill him; pneumonia did. On May 10, 1863, eight days after his own men shot him in the dark, Stonewall Jackson died, thirty-nine years old. His reported last words were that they should cross over the river and rest under the shade of the trees. [Q, VERIFY: source Dr. Hunter McGuire admitted he was not present at the exact moment; print only with "reportedly," the accepted-but-uncertain version.]

That death reorganized both armies and the war. Lee, with no one who could fill Jackson's shoes, broke his two corps into three and handed two of them to men who had never carried that weight (and at Gettysburg, eight weeks later, the new commanders would hesitate on the first evening exactly where Jackson would have pressed. And on the other side, the defeat finished Hooker. Within weeks Lee was marching north into the free states, into the teeth of the new emancipation policy; Hooker quarreled with Washington over reinforcements, offered his resignation in a temper, and Lincoln took it. On June 28, 1863) three days before Gettysburg (Maj. Gen. George G. Meade (North) was woken in the dark and told he now commanded the Army of the Potomac. [VERIFY web-sourced at step 5: Hooker resigned over the Harpers Ferry reinforcement dispute; Meade appointed June 28, 1863, three days before Gettysburg) Wikipedia *Joseph Hooker*; NPS; ABT.]

> **OUTCOME:** Confederate victory — Lee's tactical masterpiece in the Wilderness, won by sheer audacity, and the most expensive win of his career: a fifth of his army gone, Stonewall Jackson dead, and a reorganized command that would falter two months later at Gettysburg. The perfect battle was the launching pad for the campaign that broke the Confederacy in the East.

**Meanwhile [sidebar].** *What the victory marched toward.* Buoyed by Chancellorsville, Lee turned his army north within weeks for a second invasion of the United States, the Gettysburg campaign of June and July 1863. The army that crossed into Pennsylvania did so shadowed by an estimated 6,000 to 10,000 enslaved people, serving as cooks, teamsters, blacksmiths, and body servants, who kept the Confederate war machine running, and who on free soil were at risk of liberation. Some Confederate units, on that same march, seized free Black Pennsylvanians and sent them south into slavery. The masterpiece in the Wilderness was the launching pad for all of it, and it ended, two months later, at Gettysburg.

---

# Fact ledger, [VERIFY] flags and figure handling (step 5 reconciled)

Carried forward from the draft ledger; updated for the step-5 fixes. Nothing here ships as
a hard direct quote or precise count unless cleared.

## Step-5 reconciliation log (what changed and why)
- **FACT must-fix #1 (casualty share):** the fragile "a fifth vs an eighth" precise-fraction
  contrast is re-anchored explicitly to the ~130k / ~60k strength framing the prose already
  uses ("out of Hooker's roughly 130,000… about one in eight; out of Lee's roughly 60,000…
  better than one in five"). The contrast no longer floats free of a stated denominator, so
  it can't collapse against the lower ABT strength figure. §hooker-quits.
- **FACT must-fix #2 (whipped man):** now attributed to **Maj. Gen. Darius Couch (North)**
  by name, as a first-person published recollection (*Battles and Leaders*), quoted directly
  ("with the belief that my commanding general was a whipped man"); the "a subordinate
  reportedly" hedge is gone, it is an on-the-record citable quote. §lee-divides. Side-tag
  note: Couch is now first-introduced here (with side-tag), and re-tagged on first mention
  again in §jackson-falls per the reset-each-section rule.
- **FACT should-fix (Hooker's boast):** upgraded from "reportedly boasted" to a direct
  statement of **General Orders No. 47, April 30, 1863**, verbatim ("ingloriously fly, or
  come out from behind his defences… where certain destruction awaits him"). §the-plan.
- **STORY must-improve:** §the-plan triple-landing collapsed, the Wilderness "extra
  Confederate corps" line now stands as the gut-punch, and the OUTCOME absorbs the closer
  (one landing, not three). §jackson-falls May-3 artillery duel compressed (Hooker's "It was
  a gift" blunder is the pivot; Alexander's gun bookkeeping reduced to one clause) and the
  South-ascendant / North-decapitated cut sharpened to the same minute. §hooker-quits stacked
  endings ordered to ONE climax, Jackson's death → the 2→3 reorg + Gettysburg pivot + the
  Union half (Hooker out / Meade in) → ONE OUTCOME; "beginning of the end" repetition removed.
  KEEP lines preserved verbatim: "Lee was reaching around his neck," the furnace-owner bet,
  the cracker-box scene, "an army cannot be braver than the general commanding it," "the word
  *masterpiece* hides the bill."
- **CLARITY must-fix:** **corps** and **flank** now defined on first use in §the-plan;
  **demonstration** glossed as the military feint (not a protest); **artillery** glossed
  ("the heavy cannons") on first mention; **pickets** swapped to "lookouts," **green troops**
  glossed, **pontoon bridges** glossed, **two fires** glossed. The four-fords gazetteer
  sentence de-densified (prose says "cross both rivers far upstream"; the map carries the ford
  names). "Three pieces" payoff given a one-clause reminder. Note for integration: prose does
  NOT rely on compass orientation the FIG maps must supply, but the spatial sections DO need
  their maps shipped (clarity gate's conditional MUST-FIX #4).
- **COMP must-add (all 3, web-verified at step 5):**
  (1) **Stuart's recon**, added to §lee-divides: Stuart's report from Fitzhugh Lee's scouts,
  night of May 1, that the XI Corps right was "in the air"; this is *how* Lee/Jackson knew.
  (2) **Stoneman's raid**, added to §the-plan (the cavalry leg of Hooker's double envelopment,
  ~10,000 horsemen toward Gordonsville, failed) and §the-flank-march (the resulting Union
  cavalry blindness that let the flank march cross unseen).
  (3) **Hooker relieved / Meade appointed**, added to §hooker-quits closing (resignation over
  the Harpers Ferry dispute; Meade installed June 28, three days before Gettysburg). The
  Jackson→2-to-3-corps-reorg→Gettysburg-hesitation causal line (comp SHOULD-CONSIDER #5) also
  made explicit there.
- **COMP should-consider NOT added (deliberate):** the burning Chancellor house (#4) and the
  May-1 local-imbalance nuance (#7) were left out to avoid padding, both are "strengthens,
  not blocking." Flag for the integrator if room allows; not ship-blocking.
- **FRAMING:** 0 must-fix. Slavery named in the section's own voice in three sections; the
  "masterpiece" reverence stays attributed to historians and priced in blood + the slave
  system; Lee–Jackson partnership and Jackson's death are not mythologized in the narrative
  voice. The "a wound the Confederacy never healed" elegiac-edge line (framing S1) was
  rewritten to a plain command-capacity statement ("no one who could fill Jackson's shoes…
  the new commanders would hesitate") to be safe.

## Quotes
- **Couch, "my commanding general was a whipped man"**, §lee-divides. NOW a direct quote,
  attributed to Couch (his published *Battles and Leaders* recollection). Cleared at step 5,
  on-the-record first-person source. ✓ (was a [VERIFY] anonymous "reportedly" in the draft)
- **Hooker, General Orders No. 47** ("ingloriously fly… where certain destruction awaits
  him"), §the-plan. NOW stated directly as the published April 30, 1863 order. Cleared at
  step 5, verbatim text and date confirmed. ✓
- **Lee, "lost my right arm"**, §jackson-falls. STILL indirect ("is said to have answered
  that…"), NOT a hard quote. [VERIFY] exact wording vs. a primary source; widely attributed,
  frequently paraphrased.
- **Jackson's last words** ("cross over the river… shade of the trees"), §hooker-quits.
  STILL hedged "reportedly." [VERIFY], Dr. Hunter McGuire (the source) admitted he was not
  present at the exact moment; Anna Jackson recalled "pass over." Accepted-but-uncertain.
- **"Rolled completely over them"** (Rodes/XI Corps), §the-flank-march. Attested phrasing,
  not a personal quote; lower risk; fact gate CONFIRMED.
- **"Lee's perfect battle" / "masterpiece"**, §hooker-quits. Attributed to *historians*
  (Sears [S1][S2][S9]), never to a participant. Framing-clean.

## Atmospheric details
- **Wildlife (deer/rabbits/turkeys) bolting from the woods**, §the-flank-march, [I] beat,
  kept in the "according to accounts" register. Fact gate confirmed the attested trio is
  deer/rabbits/turkeys (draft's "deer and rabbits" corrected to add turkeys). [VERIFY] kept as
  the soft register, not asserted certain.
- **Wilderness brush fires burning the wounded of both sides**, §hooker-quits. Documented
  recurring horror; NO specific toll printed. [VERIFY] on extent only. Framing-clean (both
  sides = battlefield reality, not false equivalence).

## Figures (ranges / framing, never single precise counts asserted)
- **Strengths ~130,000 (North) vs ~60,000 (South), "two to one"**, pack range North
  ~97,382 (ABT)–133,868 (Wiki/Sears); South ~57,352 (ABT)–60,298 (Wiki). [VERIFY] inline that
  engaged counts differ by source. No single number asserted.
- **Casualty share contrast**, §hooker-quits. NOW explicitly anchored to the ~130k/~60k
  framing ("about one in eight" of ~130k North; "better than one in five" of ~60k South).
  Robust against source choice as written because the denominator is stated. Underlying:
  North ~17,300 (12.9% of 133,868); South ~13,000 (~21% of 60,298). FACT must-fix #1 cleared.
- **~14,000 Confederates in front of Hooker; ~70,000-odd Union facing Lee**, §lee-divides,
  both kept as flagged approximations in the [I] arithmetic beat, not hard counts. [VERIFY].
- **Stoneman's cavalry ~10,000** (§the-plan. [VERIFY web-sourced at step 5]) Wikipedia
  *Stoneman's 1863 raid* / ABT. Framed as "around 10,000 horsemen."
- **XI Corps ~2,500 lost in minutes**, §the-flank-march / Meanwhile. Pack §3 (259 k / 1,173
  w / 994 m). Solid, fact gate CONFIRMED.
- **Jackson: 3 balls, LEFT arm, 18th North Carolina, amputated May 3, moved ~27 mi to the
  Chandler plantation near Guinea Station, pneumonia, died May 10, age 39**, fact gate
  CONFIRMED all. Distance tightened to "twenty-seven miles" per the fact gate's lean.
- **Hazel Grove: Alexander ~30+ guns; line buckling ~9:30 a.m.; Hooker concussed ~9:15 a.m.**
  — §jackson-falls. Fact gate CONFIRMED.

## Geography flagged for map labeling
- **Banks' Ford vs. Scott's Ford** (Sedgwick's withdrawal crossing), §hooker-quits, "Banks'
  Ford" (the standard label) with inline [VERIFY]; confirm if labeled on a map.
- **23rd Georgia rear guard at Catharine Furnace; Wellford/Hotchkiss concealed road**, unit
  named, no number printed. OK.
- **Spatial-orientation dependency**, the prose deliberately avoids load-bearing compass
  orientation the maps must supply, but the spatial sections (the-plan, lee-divides,
  the-flank-march, jackson-falls, hooker-quits) all still need their FIG maps shipped, with
  prose place-names matched to map labels (clarity gate conditional MUST-FIX). Integrator: wire
  every FIG.

## SHIP-BLOCKING throughline, slavery named in own prose (CONFIRMED present)
- **§the-plan Meanwhile**, Emancipation Proclamation in effect Jan 1, 1863; the war now
  openly bound to ending slavery.
- **§lee-divides Meanwhile**, Confederacy a society "built on the enslavement of Black
  people"; army running on enslaved labor.
- **§hooker-quits Meanwhile + closing prose**, 6,000–10,000 enslaved people shadowing Lee's
  army north; free Black Pennsylvanians seized into slavery; victory marching "into the teeth
  of the new emancipation policy." Named in the section's OWN voice in three places.
  (feedback_name_the_cause satisfied; framing gate PASS.)

## Side-tags (reset each section, North=Union / South=CSA)
Each section first-mentions and tags its named figures. New at step 5: Stoneman (North) in
§the-plan; Fitzhugh Lee (South) in §lee-divides; Meade (North) in §hooker-quits; Couch (North)
now first-tagged in §lee-divides AND re-tagged in §jackson-falls (per the per-section reset).
Verify at integration that no tagged person appears un-tagged on first mention within a
section, and none is double-tagged within one section.
