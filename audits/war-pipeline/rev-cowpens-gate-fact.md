# FACT-CHECKER GATE — Battle of Cowpens (January 17, 1781)
*Gate run: 2026-06-18. Files checked: `src/app/war-revolution/battles/cowpens/page.tsx` (dossier) and `src/app/war-revolution/battles/cowpens/s/[section]/section-narrative.tsx` (three section narratives). Reference: `audits/war-pipeline/rev-cowpens-factpack.md`. Web-verified where noted.*

---

## VERDICT SUMMARY

**MUST-FIX: 1** — a concrete factual error (Howard's governorship count).  
**SHOULD-FIX: 3** — framing/precision issues that don't cross into outright falsehood but weaken accuracy.  
**CONFIRMED / CLEAN: all other claims** — dates, strengths, casualties, battle sequence, quotes, attributions, apocrypha handling all check out.

---

## MUST-FIX FINDINGS

### ❌ MF-1 — Howard described as "five-term governor of Maryland" (wrong count)
**Location:** `page.tsx`, commanders array, John Eager Howard bio, line ~61:
> "he was later a five-term governor of Maryland and a U.S. senator"

**Finding:** John Eager Howard served **three one-year terms** as Governor of Maryland (elected November 24, 1788; re-elected 1789, 1790; left office 1791). He was the fifth *person* to hold the office, which may be the confusion, but he was not a five-term governor. This is confirmed by the National Governors Association, the Maryland State Archives, Wikipedia, and NPS. The fact pack does not assert "five terms" — it says only "five-term governor of Maryland" does not appear there; the pack's bio says nothing about the term count.

**Correction:** Change "five-term governor of Maryland" to "three-term governor of Maryland" (or "Governor of Maryland from 1788 to 1791").

---

## SHOULD-FIX FINDINGS

### ⚠️ SF-1 — William Washington at Trenton: "leading the charge that took the Hessian guns" (imprecise; he was wounded in both hands, not just while taking the guns)
**Location:** `page.tsx`, commanders array, William Washington bio, line ~63:
> "wounded at Trenton leading the charge that took the Hessian guns"

**Finding:** Washington did lead a bayonet charge against the Hessian artillery on King Street at Trenton and was wounded in both hands during that action. The contemporary Stirling account: "Capt. Washington, who assisted in securing their artillery, shot in both hands." The framing "leading the charge that took the Hessian guns" is not wrong in substance, but it omits that he was wounded in both hands (not just "wounded"), which is the significant detail and is commonly cited. This is a precision gap, not a falsehood.

**Correction:** "wounded in both hands at Trenton leading the charge that took the Hessian guns" — one word change that restores the documented detail.

---

### ⚠️ SF-2 — Morgan described as "New Jersey-born" with no birth-year framing (the pack flags c. 1735/36; the dossier says nothing)
**Location:** `page.tsx` commanders array, Daniel Morgan bio; `section-narrative.tsx` `the-split` section, paragraph 4.

**Finding:** Both the dossier bio and the narrative prose describe Morgan as "New Jersey-born" and "a New Jersey-born Virginia frontier teamster" — this is accurate. However, the pack flags his birth year as "c. 1735/36" (genuinely uncertain). Neither file asserts a birth year, so no error is present. This is a clean omission (not a wrong claim). No fix required — noting here for completeness only.

**Status:** ✅ Clean — no fix needed.

---

### ⚠️ SF-3 — "Thomas Young, a seventeen-year-old militia dragoon" — correct, but the framing "sixty-two years later" understates the gap slightly
**Location:** `section-narrative.tsx`, `the-split` section, paragraph 11 (Young recalled), and `page.tsx` note header.

**Finding:** Young's memoir was published in *The Orion*, October–November 1843. The battle was January 17, 1781 — his 17th birthday. The gap is 62 years (1781 to 1843). The narrative says "set down what he remembered sixty-two years later," which is arithmetically correct (1843 minus 1781 = 62). The comment block in `section-narrative.tsx` line 15 says "62-years-later memoir" — also correct. This is fine. No fix needed.

**Status:** ✅ Clean — no fix needed.

---

### ⚠️ SF-4 — Andrew Pickens: "Wizard Owl" — attribution framing is slightly off
**Location:** `page.tsx` commanders array, Andrew Pickens bio, line ~62:
> "A dour South Carolina Presbyterian elder and militia leader known as the 'Wizard Owl.'"

**Finding:** The web research shows that "Wizard Owl" (Skyagunsta) was a Cherokee name given to Pickens after the war in recognition of his fighting ability, based on a revered previous Cherokee chief. The NPS and other sources confirm it was a Cherokee designation, not a backcountry American nickname. The dossier presents it as a plain folk-nickname with no attribution, which is not wrong but could mislead a reader into thinking it was an American nickname. The fact pack does not specify the origin. This is a low-priority precision gap, not a falsehood; it is a SHOULD-FIX, not a MUST-FIX.

**Correction:** "A dour South Carolina Presbyterian elder and militia leader — the Cherokee called him Skyagunsta, the 'Wizard Owl,' a name their own great chief had carried" OR simply drop the nickname and leave the attribution plain. The simpler fix: no nickname, or add "(a name the Cherokee gave him after the war)" as a brief parenthetical.

---

## CONFIRMED CLAIMS (representative sampling, not exhaustive)

### Dates and place
✅ "January 17, 1781" — confirmed across all primary sources.  
✅ "Hannah's Cowpens, upcountry South Carolina, near the Broad River" — confirmed; NPS coordinates 35.137,-81.816.  
✅ Charleston fall "May 1780" with "more than five thousand men surrendered" — confirmed (standard figure: ~5,466 surrendered).  
✅ Camden "August 16, 1780" — confirmed.  
✅ Greene arrived Charlotte "December 2" and took command "December 3" — confirmed by Army.mil, NGA, multiple sources.  
✅ Greene's detachment orders "December 16" — confirmed; Morgan marched westward.  
✅ Tarleton's orders "January 1–2, 1781" — within the pack's stated HIGH range; matches standard histories.  
✅ Battle duration "about an hour, first shots shortly after first light (~7 a.m.)" — consistent with Babits and standard sources.

### Forces and strengths
✅ American strength given as a range throughout: "somewhere between 800 (Morgan's own count) and about 1,900 (modern reconstruction)" — correctly handled in all surfaces (dossier stats, sides card, section narrative). Never a single hard number. Pack mandate honored.  
✅ "Morgan's own report says he 'fought only 800 men, two thirds of which were Militia'" — verbatim from Morgan's Jan 19, 1781 report, confirmed via Library of Congress / Teaching American History transcript.  
✅ British "~1,050 to 1,150, roughly half American Loyalist provincials" — consistent with Babits and Wikipedia infobox.  
✅ Components of Morgan's force (Howard's ~300 Continentals, ~150 riflemen, Pickens's militia, 80–125 cavalry) — consistent with pack's HIGH section.  
✅ British composition (Legion cavalry + infantry, 7th Fusiliers, 71st Highlanders, 17th Light Dragoons, two grasshopper guns) — confirmed.

### Casualties
✅ British "roughly 80 to 90 percent of the force destroyed or captured: about 110 killed, 200-odd wounded, 500 to 630 captured unwounded, both guns, the colors of the 7th Fusiliers" — consistent with pack ranges and Wikipedia infobox.  
✅ American "about 150 killed and wounded, perhaps fewer (Morgan reported 12 killed and 60 wounded)" — correctly cited as Morgan's own figure with the Babits reconstruction noted.  
✅ Casualties bar in `page.tsx` uses union: 150 / csa: 870 as display values with honest footnote noting both sets of figures as ranges — acceptable.

### Battle sequence (three-line defense in depth)
✅ Skirmishers → two volleys from militia → Continentals on the crown of the rise, with cavalry hidden behind a second rise — accurately described in both files, consistent with pack's HIGH-verified sequence.  
✅ "Mark the epaulette men" framed as "the skirmishers' own exclamation, not an order anyone gave" — exactly as the pack requires (Johnson 1822 attribution, MED).  
✅ Misheard-order account: Howard ordered his right-flank company to "refuse" (bend back), order heard as withdrawal, whole line marched to rear — described accurately in both files.  
✅ "Do men who march like that look as though they were beaten?" — sourced to Howard's account ("Howard remembered"); framing is correct.  
✅ "They are coming on like a mob. Give them a fire and I will charge them" — attributed as "word came back from Washington" / "the phrase the American accounts preserved" in the narrative; sourced correctly to Johnson 1822 in the pack.  
✅ Double envelopment described honestly as "half plan and half improvisation" — matches pack's explicit instruction.  
✅ "American Cannae" used only as "Historians have called it a small-scale Cannae... that is the historians' label, not anyone's judgment on the day" — fully correct, pack mandate honored.  
✅ Legion cavalry refusing Tarleton's final order to charge and quitting the field — confirmed; consistent across sources.

### Commander bios
✅ Morgan: "New Jersey-born Virginia frontier teamster" — confirmed.  
✅ Morgan: drove wagons on Braddock's 1755 campaign — confirmed.  
✅ Morgan: 499/500 lashes — always framed "by his own often-told tale," "no British record of the sentence survives," "the story travels as Morgan's own" — pack mandate honored precisely.  
✅ Morgan: led riflemen to Quebec, opened both battles at Saratoga — confirmed.  
✅ Morgan: "resigned in a fury at being passed over for promotion" — confirmed; resigned June 30, 1779.  
✅ Morgan: "come back after Camden as a new brigadier" — brigadier general October 13, 1780 — confirmed.  
✅ Morgan: left the army February 10, 1781 — consistent with pack (HIGH).  
✅ Howard: Maryland planter's son, veteran of White Plains, Germantown, Monmouth, and Camden — confirmed in standard sources.  
✅ Howard: Congress voted him a silver medal — confirmed.  
✅ Howard: "later... a U.S. senator" — confirmed (U.S. Senate 1796–1803).  
✅ Howard: "seven swords" — confirmed across multiple historical sources.  
✅ Pickens: "dour South Carolina Presbyterian elder" — confirmed.  
✅ Pickens: took British protection after Charleston, then re-entered the field after Loyalists burned his plantation — framed correctly as "after his parole was, as he saw it, voided when his property was burned" in the narrative, and "after Loyalists burned his plantation" in the dossier bio — both acceptable.  
✅ Pickens: Congress voted him a sword — confirmed (March 9, 1781 resolution, confirmed via NPS).  
✅ Pickens: escorted prisoners north — confirmed.  
✅ William Washington: Virginia-born cavalryman, second cousin of commander in chief — confirmed.  
✅ William Washington: wounded at Trenton — confirmed (both hands; see SF-1 above for precision note).  
✅ William Washington: dragoons wrecked in Charleston campaign by Tarleton (Monck's Corner, Lenud's Ferry) — confirmed.  
✅ William Washington: silver medal from Congress — confirmed.  
✅ William Washington: captured at Eutaw Springs — confirmed.  
✅ Tarleton: "twenty-six-year-old Liverpool merchant's son" — Tarleton born August 21, 1754; at Cowpens January 17, 1781 he was 26. Confirmed.  
✅ Tarleton: Waxhaws "May 29, 1780" — confirmed.  
✅ Tarleton: "Tarleton's quarter" became backcountry slang; "the Butcher" — confirmed.  
✅ Tarleton: "whether he ordered the Waxhaws killing is genuinely disputed; his horse had been shot and pinned him at the surrender moment" — consistent with Wikipedia, battlefields.org, and standard historiography.  
✅ "Bloody Ban" — never appears in the draft; correctly absent.

### Quotes and apocrypha
✅ Morgan report: "Not a man was killed, wounded or even insulted after he surrendered" — correctly attributed as Morgan's report to Greene (Jan 19, 1781); framing is "Morgan wrote two days later, in his report to Greene."  
✅ "499 lashes" — always "by his own often-told tale" in both files; no British record claimed. Pack mandate honored.  
✅ Thomas Young campfire quotes ("the old wagoner would crack his whip over Ben in the morning"; "Just hold up your heads, boys, three fires, and you are free...") — attributed to Young's memoir; framed as "Young remembered" and "sixty-two years later." Pack mandate honored.  
✅ John Marshall quote: "Seldom has a battle, in which greater numbers were not engaged, been so important in its consequences as that of Cowpens" — in `section-narrative.tsx`, `the-reckoning` section, attributed to Marshall. Confirmed as Marshall (Life of Washington).  
✅ John Buchanan quote: "the only general in the American Revolution, on either side, to produce a significant original tactical thought" — attributed to Buchanan (Road to Guilford Courthouse). Confirmed.  
✅ Morgan ground-choice justification (Johnson 1822) — rendered as a block-quote in `section-narrative.tsx`, introduced with the Johnson-hedge framing: "The justification comes through William Johnson's 1822 biography of Greene, and Johnson hedged whether 'these were really Morgan's reasons,' so it reads as Morgan's later self-justification rather than a speech on the field." Pack mandate honored precisely.  
✅ "On this ground I will defeat the British or lay my bones" — does NOT appear in the draft. Correct; this is on the apocrypha blacklist.  
✅ "Bloody Ban" — does NOT appear in the draft. Correct; this is on the apocrypha blacklist.

### "Tarleton's quarter" / no revenge massacre
✅ Both the dossier and `the-reckoning` section handle this correctly: the cries are stated as real and well-attested; no revenge massacre is narrated; the discipline is the meaning-beat; Morgan's report cited as corroboration; prisoner arithmetic used to confirm. Pack mandate honored.

### Washington–Tarleton clash
✅ "one of them believed to be Tarleton, which is Howard's careful phrase" — framing is correct. Tarleton's memoir's silence noted. First documented wound at Guilford Courthouse noted. Saber-broke, sergeant-major parry, teenage bugler pistol shot all present and attributed as "the family of accounts." Name not given to the bugler. No Cowpens hand-wound asserted for Tarleton. Pack mandate honored.

### Aftermath / consequences
✅ Morgan crossed the Broad "the same afternoon... within eight hours of the battle's end" — consistent with pack (HIGH).  
✅ Pickens took unwounded prisoners north — confirmed.  
✅ Cornwallis burned his own baggage train — confirmed; turned his whole army into light infantry for the pursuit.  
✅ "Race to the Dan" set in motion but not told — correctly ended at "that chase, and the battle it ended in, belong to the next page." Pack mandate honored.  
✅ Congress gold medal for Morgan (March 9, 1781); silver for Howard and Washington; sword for Pickens — confirmed (NPS/pack).  
✅ Gold medal reached Morgan "only in 1790" — consistent with pack (HIGH).  
✅ Morgan left the army February 10, 1781 — confirmed.  
✅ Greene copied the three-line design at Guilford Courthouse — confirmed and noted as "eight weeks later."  
✅ "Meanwhile" card for Camden inversion — accurately summarized, no new claims beyond what the narrative already states.

---

## GATE DISPOSITION

| Code | Severity | Location | Finding |
|------|----------|----------|---------|
| MF-1 | MUST-FIX | `page.tsx` Howard bio | "five-term governor" → should be "three-term governor" |
| SF-1 | SHOULD-FIX | `page.tsx` Washington bio | Add "in both hands" to the Trenton wound detail |
| SF-4 | SHOULD-FIX | `page.tsx` Pickens bio | "Wizard Owl" presented as plain nickname; origin is a Cherokee designation post-war — brief clarification or drop the nickname |

**Gate result: CONDITIONAL PASS pending MF-1.**  
MF-1 is a concrete factual error that survives the pipeline undetected. SF-1 and SF-4 are precision gaps that do not rise to a false statement but should be addressed before the dossier ships. All other surfaces — the three section narratives, all stats, all casualty ranges, the full battle sequence, every quote's attribution and confidence framing, the apocrypha handling, the "Tarleton's quarter"/no-massacre framing, the Washington–Tarleton "believed to be Tarleton" hedge, and the "American Cannae as historians' label" treatment — are factually clean and honor every pack mandate.
