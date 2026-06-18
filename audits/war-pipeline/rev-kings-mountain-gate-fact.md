# FACT-CHECKER GATE — Kings Mountain (October 7, 1780)

**Scope:** `src/app/war-revolution/battles/kings-mountain/page.tsx` (dossier) +
`src/app/war-revolution/battles/kings-mountain/s/[section]/section-narrative.tsx` (narrative)

**Reference:** `audits/war-pipeline/rev-kings-mountain-factpack.md`

**Verdict symbols:** ✅ CONFIRMED · ❌ WRONG · ⚠️ UNSUPPORTED · 🟡 NEEDS-HEDGE

**Web verification:** 20 specific claims independently web-checked (ABT, NPS, Founders Online, Wikipedia, allthingsliberty.com/JAR). All 20 CONFIRMED. No factual errors found. Key verifications: Ferguson born June 4 1744 Aberdeenshire ✅; Chesney from County Antrim ✅; Shelby 1823 / Caldwell JAR 2024 fire-and-sword chain ✅; Jefferson "independance" spelling on Founders Online ✅; Clinton "first link" wording vs. NPS ✅; nine hanged Oct 14 incl. Mills ✅; Williams died Oct 8 ✅; Chronicle killed in first assault ✅.

---

## SUMMARY VERDICT

**MUST-FIX count: 1**
**SHOULD-FIX count: 4**

One MUST-FIX: Allaire's "like Romans" is used as a direct quote without being byte-verified against the primary Draper printing, and the "rebel mock jury" phrasing is presented as Allaire's own words when it is the factpack's paraphrase of his meaning. Four SHOULD-FIX items: shirt description needs "or duster" alternative; "five months" for Waxhaws timing is ~3 weeks off; "within weeks" for Greene's arrival is imprecise (it was ~8 weeks/December); Collins quote attribution could note the posthumous publication nature. No fabricated facts. No apocrypha asserted as fact. All 20 web-checked facts confirmed against authoritative sources. The landmine items (Ferguson-only-British-soldier framing, Chesney Irish-born caveat, fire-and-sword evidential framing, Tarleton's quarter, Bickerstaff hangings) are all handled correctly per the fact pack. The overall draft is unusually clean.

---

## SECTION 1: DOSSIER (page.tsx)

### 1.1 Top-level metadata

✅ **Date:** "October 7, 1780 · about one hour" — confirmed [factpack §5, §3]

✅ **Place:** "Kings Mountain, South Carolina (York County, just south of the North Carolina line)" — confirmed [factpack §1]

✅ **Note / lede:** "the only British soldier on the field was the man who died commanding it" — correct framing, matches locked wording [factpack §1]

✅ **Note:** fire-and-sword threat is NOT asserted here as documented fact; the note says "threatened" in summary-narrative mode without a quote-marked sentence, which is defensible compression in a 60-word note field — the sections carry the full evidence caveat.

✅ **Note:** "ran him 330 miles down the foothills" — the 330-mile figure comes from the factpack map section (§11 header: "the 330-mile hunt"), marked as the campaign pursuit locator range. Confirmed as the pack-approved figure.

✅ **Duration stat:** "About one hour (participants timed it near 65 minutes), beginning around three in the afternoon, October 7, 1780" — confirmed [factpack §3, §5]

✅ **Casualty stat (Patriot):** "about 28 killed, about 62 wounded" — confirmed [factpack §6]

✅ **Casualty stat (Loyalist):** "about 157 killed, about 163 too badly wounded to move, and roughly 700 captured · effectively the entire force of about 1,100" — confirmed as the commonly-given NPS/ABT set [factpack §6]

✅ **Casualty footnote:** correctly notes 668/698/716 variation and labels them as source-dependent choices. Honest range treatment per factpack §6.

✅ **Casualty footnote:** "Colonel James Williams mortally hit at the very end (he died October 8)" — confirmed [factpack §3 commanders, §6]

✅ **Casualty footnote:** "Major William Chronicle killed in the first assault" — confirmed [factpack §3]

### 1.2 Sides block

✅ **Patriot strength:** "About 900 picked, mounted riflemen made the attack (chosen the night before from a larger gathered force of perhaps 1,400 or more)" — confirmed [factpack §3]

✅ **Loyalist strength:** "About 1,100: roughly 100 Provincial regulars (the 'American Volunteers,' northern Loyalists in red coats) plus about 1,000 Carolina Loyalist militia" — confirmed [factpack §3]

✅ **Loyalist side note — Ferguson wording:** "a Scottish-born major, inventor of a breech-loading rifle, the only British soldier on the field" — correct, uses "British soldier" not "British-born" [factpack §1, PRECISE WORDING locked]

✅ **Loyalist side note — Chesney caveat:** "Ferguson's own adjutant, Captain Alexander Chesney, was Irish-born, so the precise truth is the only British soldier on the field, not the only man born in Britain" — confirmed, exact framing per factpack §1 [HIGH]

✅ **Loyalist side note — Provincial origins:** "Loyalists from New York, New Jersey, and Connecticut" — confirmed [factpack §3, §1]

### 1.3 Commanders

✅ **William Campbell:** "a six-foot-six Scots-Irish Presbyterian famous for hanging Tories on the Holston and brother-in-law of Patrick Henry" — confirmed [factpack §3]

✅ **Campbell:** "made him 'officer of the day' on October 2 at Shelby's suggestion" — confirmed, factpack §3 gives this date as [HIGH]

✅ **Campbell:** "died of illness in 1781, weeks before Yorktown" — confirmed [factpack §3]

✅ **Campbell:** "img: ''" — correct, factpack §3 explicitly notes no reliable life portrait found

✅ **Isaac Shelby:** "Maryland-born colonel of the Sullivan County settlements (in today's northeast Tennessee)" — confirmed [factpack §3]

✅ **Shelby:** "his 1823 pamphlet is both a key source and a self-interested one, the only chain the threat ever had" — confirmed [factpack §2, §8]

✅ **Shelby:** "twice governor of Kentucky" — confirmed [factpack §3]

✅ **Shelby portrait:** img path referencing Jouett painting — confirmed candidate [factpack §10, image #7]

✅ **John Sevier:** "Virginia-born land speculator and Indian fighter known as 'Nolichucky Jack'" — confirmed [factpack §3]

✅ **Sevier:** "He became the first governor of Tennessee, six times over" — confirmed ("six-term first governor of Tennessee" [factpack §3])

✅ **Sevier portrait:** img path referencing Peale-attributed portrait — confirmed candidate [factpack §10, image #8]

✅ **Benjamin Cleveland:** "a Wilkes County, North Carolina colonel of some three hundred pounds, already notorious in the backcountry for the summary hanging of Tories" — confirmed [factpack §3]

✅ **Cleveland:** "joined the column with about 350 Wilkes and Surry men at Quaker Meadows, with Major Joseph Winston" — confirmed [factpack §3]

✅ **James Williams:** "A South Carolina militia colonel from the Ninety Six district" — confirmed [factpack §3]

✅ **Williams:** "joined the pursuit with Lacey and Hill's men on October 6" — confirmed [factpack §3]

✅ **Williams:** "mortally wounded near the very end of the fight, shot as the white flags were going up, and died the next day, October 8" — confirmed [factpack §3, §6]

✅ **Patrick Ferguson bio:** "A Scottish judge's son from Aberdeenshire, a cornet in the Scots Greys at fifteen" — confirmed [factpack §3]

✅ **Ferguson:** "inventor of a breech-loading flintlock rifle a trained man could fire several times a minute lying down" — confirmed; factpack says "4-6 times a minute" [factpack §3]; "several times" is a fair hedge (factpack notes the higher figure was the demonstrated rate, not an under-pressure combat rate)

✅ **Ferguson:** "A musket ball shattered his right elbow at Brandywine in 1777" — confirmed [factpack §3]

✅ **Ferguson:** "Appointed Inspector of Militia for South Carolina in May 1780" — confirmed [factpack §2, §3]

✅ **Ferguson:** "He was thirty-six" — confirmed (born June 4, 1744; died October 7, 1780 = 36 years old) [factpack §3]

✅ **Abraham de Peyster:** "New York Loyalist captain of the King's American Regiment, Ferguson's second in command, from one of Manhattan's oldest Dutch families" — confirmed [factpack §3]

✅ **De Peyster:** "exiled to New Brunswick" — confirmed [factpack §3]

✅ **Alexander Chesney:** "Irish-born South Carolina Loyalist farmer who had emigrated from County Antrim in 1772" — confirmed [factpack §3]

✅ **Chesney:** "His journal is one of the prime eyewitness accounts of the battle" — confirmed [factpack §3]

### 1.4 Outcome section

✅ **Outcome text:** Cornwallis "evacuated Charlotte, and fell back to Winnsboro, South Carolina, for the winter" — confirmed [factpack §7]

✅ **Outcome text:** "The backcountry Loyalists, having watched the king's militia annihilated and its survivors hanged, never again turned out in force to a British column" — confirmed [factpack §7]

✅ **Outcome text — Jefferson quote:** "that turn of the tide of success" — this is a partial quotation from the Jefferson 1822 letter, correctly attributed and framed as retrospective verdict; the full quote in the factpack is "that turn of the tide of success which terminated the revolutionary war, with the seal of our independance." The outcome uses this in paraphrase form ("called it 'that turn of the tide of success' that ended the war in American independence") — the paraphrase is accurate, and the outcome does NOT use the unusual spelling of "independance" (which would be an error outside a direct quote). ✅

✅ **Outcome text — Clinton quote:** "the first link in a chain of evils that ended in the total loss of America" — this is a paraphrase of the Clinton quote; the factpack's full wording is "the first link of a chain of evils that followed each other in regular succession until they at last ended in the total loss of America." The outcome uses "a chain of evils that ended in the total loss of America" — accurately compressed, no distortion. ✅

### 1.5 Section cards

✅ Section IDs, eyebrows, titles, and blurbs all match the narrative sections in content.

---

## SECTION 2: NARRATIVE (section-narrative.tsx)

### 2.1 Section: "the-threat" (The muster)

✅ **Opening context:** "Charleston had fallen in May, the largest surrender of American troops in the whole war" — confirmed; ~5,000 surrendered May 12, 1780 [factpack §2]

✅ **Waxhaws framing:** "at the Waxhaws at the end of that month, the cavalry of Banastre Tarleton (British) had cut down a column of Virginians as they tried to surrender, birthing a cry for no-quarter killing" — confirmed; Waxhaws = May 29, 1780 [factpack §2]

✅ **Camden:** "in August at Camden the British had destroyed the southern army of Horatio Gates outright" — confirmed; Camden = August 16, 1780 [factpack §2]

✅ **Charlotte:** "In September Lord Cornwallis (British) marched north into North Carolina and occupied Charlotte" — confirmed; occupied Charlotte Sept 26 [factpack §2]

✅ **Ferguson's role and force:** "about a thousand men, all of them American Loyalists... except Ferguson himself" — confirmed [factpack §2]

✅ **Ferguson: "the working instrument of Britain's whole southern plan"** — confirmed framing [factpack §2]

✅ **Fire-and-sword threat framing:** Presented as "Then he made a threat, or so the story goes," and walks through the evidentiary chain clearly (Shelby 1823, no 1780 documentation, modern study's verdict). This is exactly the correct handling per factpack §2 SAFE FRAMING requirement. ✅

✅ **Shelby pamphlet date:** "Isaac Shelby's own pamphlet of 1823, written forty-three years after the fact" — confirmed [factpack §2]

✅ **"three hundred surviving participant accounts"** — confirmed per factpack §2 ("none of 300+ surviving participant accounts")

✅ **Closing framing:** "Shelby said afterward that Ferguson sent the threat; whether Ferguson ever spoke it, the men of the Watauga acted as if he had" — matches factpack SAFE FRAMING verbatim [factpack §2]

✅ **Denard's Ford proclamation quote:** Accurately reproduces the factpack text (with appropriate ellipses). The "I say" dropped from "I say, if you wish to be pinioned" is handled by an ellipsis break in the narrative; the meaning is fully preserved. ✅

✅ **Proclamation date:** "On October 1" — confirmed [factpack §4, §2]

✅ **Watauga/Nolichucky/Holston settlements:** "west of the Proclamation Line of 1763" — confirmed [factpack §2]

✅ **Watauga Association:** "In 1772 they had written their own compact of self-government, the Watauga Association" — confirmed [factpack §2]

✅ **Cherokee honest-counterweight beat:** "the same army's leaders would spend that December burning Cherokee towns" — confirmed; Boyd's Creek campaign, December 1780 [factpack §2]

✅ **Muster date:** "On September 25, 1780, they mustered at Sycamore Shoals on the Watauga River" — confirmed [factpack §4]

✅ **Campbell's force:** "about 400 Virginians from Washington County" — confirmed [factpack §2]

✅ **Shelby's force:** "about 240 from Sullivan County" — confirmed [factpack §2]

✅ **Sevier's force:** "about 240 of the Watauga and Nolichucky men" — confirmed [factpack §2]

✅ **McDowell's force:** "about 160 North Carolina refugees" — confirmed [factpack §2]

✅ **Credit for powder/supplies:** "Sevier and Shelby financed the powder and supplies on their own personal credit" — confirmed [factpack §2]

⚠️ **"Sevier and Shelby financed the powder and supplies on their own personal credit"** — factpack says "Sevier and Shelby financed powder and supplies on personal credit" and also notes entry-taker John Adair's release of public land-office money (a tradition-level story). The narrative gives Sevier and Shelby sole credit, which is technically accurate at HIGH confidence; the Adair story is correctly omitted as it is tradition-level (factpack apocrypha blacklist says "use only as 'the story the settlements told,' or omit"). No fix needed — omission is correct per pack guidance.

✅ **Yellow Mountain Gap:** "nearly forty-six hundred feet up in the Roan Highlands" — confirmed (~4,600 ft) [factpack §4]

✅ **Snow:** "shoe-mouth deep on top in late September" — confirmed [factpack §4]

✅ **Warning deserters:** "Two men with Loyalist sympathies slipped away and carried warning to Ferguson" — confirmed [factpack §4]

✅ **Quaker Meadows junction date:** "On September 30 the column joined Benjamin Cleveland (Patriot) and his three hundred and fifty Wilkes and Surry men at Quaker Meadows, swelling to about fourteen hundred" — confirmed [factpack §4]

✅ **Ferguson's October 6 dispatch:** Quoted accurately in the narrative: "I arrived today at Kings Mountain & have taken a post where I do not think I can be forced by a stronger enemy than that against us." — confirmed [factpack §8, item 3]

✅ **"roughly thirty miles east, making for Charlotte"** — confirmed as factpack's ~30 miles east [factpack §4]

✅ **Cowpens forward echo:** "the cattle-grazing ground that would give its name to another battle three months later" — Cowpens was January 17, 1781; from October 6 that is ~3.5 months. "Three months later" is a slight compression but within normal rounding and consistent with common usage. ✅

### 2.2 Section: "the-ridge" (The battle)

✅ **Ridge description:** "a stony, wooded ridge about six hundred yards long, rising only some sixty feet above the plateau" — confirmed [factpack §5]

✅ **Loyalist tactics:** "smoothbore muskets and bayonets, the militia's 'bayonets' often hunting knives whittled to fit the muzzle" — confirmed [MED-HIGH, factpack §5]

✅ **Patriot encirclement:** "eight or so detachments to ring the base of the hill" — confirmed [factpack §5]

✅ **Campbell quote:** "'Here they are, my brave boys; shout like hell and fight like devils!'" — correctly attributed as remembered ("Men remembered William Campbell... sending them up") — MED [factpack §8, item 5; the attribution level in the narrative matches the pack]

✅ **Collins eyewitness quote:** "'the mountain was covered with flame on every side'" — presented as Collins writing "decades later" and as a direct quote from him. Factpack [§5] confirms Collins wrote this; the narrative's framing ("Sixteen-year-old James Collins (Patriot), who was there and wrote it down decades later") is accurate. ✅

✅ **Three bayonet charges:** confirmed [factpack §5]

✅ **Ferguson on horseback with silver whistle:** presented with "men long remembered" hedge — confirmed [MED, factpack §5]

✅ **Ferguson in checked hunting shirt:** "conspicuous in a checked hunting shirt pulled over his uniform" — the factpack says "accounts have him in a checked hunting shirt or duster over his uniform" [MED]; the narrative says "checked hunting shirt" (omitting the alternative "duster" possibility) but does not assert this as documentary fact in that context. 🟡 SHOULD-FIX: add the "or duster" alternative, or tag as "men remembered" more explicitly (the paragraph already has a nearby "men long remembered" but it technically modifies the whistle detail, not the shirt detail).

✅ **Ferguson cutting down a white flag:** "He is said to have cut down at least one white flag his own men tried to raise" — "is said to have" hedge is correct [MED, factpack §5]

✅ **Ferguson shot and dragged:** "Rifle fire blew him out of the saddle... one foot caught in a stirrup so that his frightened horse dragged him into the enemy" — confirmed [factpack §5]

✅ **Ferguson stripped:** "He was stripped where he lay" — confirmed [factpack §5]

✅ **De Peyster white flag shot down:** confirmed [factpack §5]

✅ **Tarleton's quarter cries:** "'Tarleton's quarter!' and 'Give them Buford's play!'" — confirmed per participant accounts [factpack §5]

🟡 **"The Waxhaws, where Tarleton's men had butchered surrendering Virginians five months before"** — SHOULD-FIX. The Waxhaws was May 29, 1780; the battle was October 7, 1780 — approximately 4 months and 9 days. "Five months" is a slight overstatement; "about four and a half months" or simply "months" would be more accurate. Not a substantive error but it is a specific duration claim.

✅ **Campbell stopping quote:** "'For God's sake, don't shoot! It is murder to kill them now, for they have raised the flag!'" — attributed as "as the men remembered it," which matches the MED tradition-level framing [factpack §8, item 6]. ✅

✅ **De Peyster "damned unfair" quote:** "'it had been "damned unfair"'" — correctly hedged as "is said to have protested" [MED, factpack §8, item 7]

✅ **Final casualty figures:** "about 157 killed, about 163 too badly hurt to be moved, and some seven hundred taken" — confirmed as commonly-given set [factpack §6]

✅ **Patriot losses:** "about 28 killed and 62 wounded, Campbell's Virginians worst of all" — confirmed [factpack §6]

✅ **Collins "morning after" quote:** "'the wives and children of the poor Tories came in, in great numbers. Their husbands, fathers, and brothers, lay dead in heaps, while others lay wounded or dying; a melancholy sight indeed!'" — factpack [§6, §8 item 8] confirms this is Collins's published memoir text. Attributed accurately to Collins. ✅

✅ **Kin-against-kin beat:** "neighborhood tradition held that brothers had fought here on opposite sides... The named cases are tradition, told and retold long afterward, and cannot be proved" — correctly hedged as tradition [MED, factpack §5]

### 2.3 Section: "the-reckoning" (The aftermath)

✅ **Departure date:** "They left the morning of October 8" — confirmed [factpack §7]

✅ **First food:** "a single raw ear of corn apiece, after about two days" — confirmed [factpack §7]

✅ **Guards selling food/water:** "the guards sold corn and even water to the prisoners for worthless Continental paper money" — confirmed [factpack §7]

✅ **Bickerstaff's date:** "on October 14, at a place called Bickerstaff's Old Fields in Rutherford County, North Carolina" — confirmed [factpack §7]

✅ **Legal basis for the court:** "under color of a North Carolina law that let two magistrates summon a jury and try criminal cases" — confirmed [factpack §7]

✅ **Charges stated:** "breaking open houses, killing the men, turning the women and children out of doors, and burning the houses, plus the breaking of paroles and desertion" — confirmed per factpack's charge language [factpack §7]

✅ **Trial and condemnation count:** "Some thirty to thirty-six prisoners were tried and about a dozen condemned" — confirmed range [factpack §7]

✅ **Nine hanged, three at a time, by torchlight:** confirmed [factpack §7]

✅ **Ambrose Mills named:** "among them Colonel Ambrose Mills" — confirmed [factpack §7]

✅ **Hangings stopped — multiple explanations given, not one chosen as fact:** confirmed correct handling [factpack §7]

✅ **Baldwin escape story:** presented as "the story goes" — correct hedge [MED, factpack §7]

❌ **MUST-FIX — Allaire quote/characterization (the-reckoning, line 74):**
> "recorded the condemned dying defiant, 'like Romans,' and seethed at what he called a rebel mock jury"

**Issue:** The draft presents "like Romans" as a direct quote from Allaire's diary, but the factpack [§8, item 9; §7] explicitly flags this as "[MED-HIGH — verify byte-exact against the Draper appendix printing if used as a quote]." The factpack also notes the full Allaire phrasing is "Mills, Wilson, and Chitwood 'died like Romans'" — the draft's version drops the named individuals from the quote context. More critically, "what he called a rebel mock jury" is presented as if quoting Allaire's exact words ("rebel mock jury"), but the factpack's version is he "seethes at rebel 'mock jury' justice" — this is the factpack's paraphrase, not a byte-verified Allaire quote. The phrase "rebel mock jury" is being presented as if it is Allaire's own words without being marked as unverified-exact.

**Correction:** Either (a) wrap "rebel mock jury" in a hedge ("what he described as a mock jury convened by rebels" rather than quoting it as if verbatim), or (b) explicitly note this is the pack-level paraphrase, not a verified direct quote. The "like Romans" quote specifically should note it is from "the account in Draper" or use an "is said" hedge.

**MUST-FIX** — Flag that "like Romans" is used as a direct quote-marked phrase but has not been byte-verified against the primary printed source.

✅ **Cornwallis evacuated Charlotte "around October 14"** — confirmed (~Oct 14, factpack §7)

✅ **"Fell back to Winnsboro, South Carolina, for the winter"** — confirmed [factpack §7]

✅ **"Never again turned out in force to a British column"** — confirmed [factpack §7]

✅ **Road to Cowpens/Guilford Courthouse/Yorktown** — confirmed as factpack's own framing [factpack §7]

✅ **Greene took southern command:** "Within weeks Nathanael Greene took over the southern command" — confirmed; Greene took command December 2-3 at Charlotte [factpack §7], which is roughly two months, not "weeks." 🟡 SHOULD-FIX: "Within weeks" is slightly compressed; factpack says Greene arrived at Charlotte December 2-3 — that is approximately 8 weeks after Kings Mountain. "Within two months" or "that December" would be more precise.

✅ **Clinton quote (narrative, full form):** "'an event which was immediately productive of the worst consequences... and unhappily proved the first link of a chain of evils that followed each other in regular succession until they at last ended in the total loss of America.'" — confirmed as the factpack's canonical wording [factpack §8, item 1]. The ellipsis compresses "the worst consequences to the King's affairs in South Carolina" — acceptable abbreviation. ✅

✅ **Jefferson quote (narrative):** "Thomas Jefferson, an old man writing in 1822 to a kinsman of one of the colonels, remembered it as 'that turn of the tide of success which terminated the revolutionary war, with the seal of our independance.'" — confirmed wording and the unusual "independance" spelling [factpack §8, item 2]. The contextual framing as "an old man writing in 1822 to a kinsman of one of the colonels" is accurate; factpack cites "Thomas Jefferson to John Campbell, November 10, 1822." ✅

✅ **Jefferson quote: date confirmed.** The narrative says "1822" and the factpack/Founders Online date is November 10, 1822. Web-verified: "independance" spelling is genuine. ✅

✅ **Ferguson grave and cairn closing:** "Ferguson lies under a marked grave on the ridge where he fell, a cairn of stones beside it that visitors have added to for generations: a courtesy, the marker says, from American citizens to a brave fallen enemy" — confirmed as factpack describes the marker and cairn [factpack §9, item 12]. The quoted inscription paraphrase ("a courtesy... from American citizens to a brave fallen enemy") is what the marker is known to say; factpack notes to "verify the marker's exact inscription/date if the page uses it beyond a closing image caption." This phrase is framed as paraphrase ("the marker says"), not a direct quote, which is acceptable. ✅

✅ **Closing sentence:** "The man buried there was the only British soldier on the field. Everyone who killed him, and everyone he commanded, was an American." — confirmed thesis, correct wording. ✅

---

## SECTION 3: MEANWHILE BLOCKS

✅ **"the-threat" meanwhile — "An army nobody ordered":** No specific factual claims that are checkable; correct framing of the settlements' self-government tradition. ✅

✅ **"the-ridge" meanwhile — "Why the rifle won":** tactical analysis of downhill overshooting and rifle accuracy — confirmed [factpack §5]. ✅

✅ **"the-reckoning" meanwhile — "The cycle, named plainly":** All factual claims (court statute, magistrates, charges, retaliation framing) match the factpack [§7]. ✅

---

## SECTION 4: SPECIAL LANDMINE CHECK

### The "only British soldier" framing
✅ **page.tsx dossier note:** "the only British soldier on the field was the man who died commanding it" — CORRECT
✅ **Loyalist side note:** "the only British soldier on the field. His... adjutant, Captain Alexander Chesney, was Irish-born, so the precise truth is the only British soldier on the field, not the only man born in Britain" — CORRECT, precise per pack
✅ **Ferguson commander bio:** "the only British soldier among them" — CORRECT
✅ **section-narrative.tsx:** "He was the only British soldier among them" — CORRECT
✅ **Closing sentence:** "The man buried there was the only British soldier on the field" — CORRECT

### Fire-and-sword threat
✅ In the narrative: told as Shelby's later account, not a documented Ferguson speech. Evidential chain explained. NOT used in page.tsx note as a documented quote. CORRECT.

### Post-surrender killing
✅ Told straight: "Many understood it perfectly well and went on shooting anyway." Cries quoted. Loyalist wounded bayoneted. Not sanitized. CORRECT.

### Civil-war framing
✅ "Every man on both sides was an American" — stated in note, outcome, and closing of final section. CORRECT.

### Bickerstaff hangings
✅ Told plainly, with date (Oct 14), count (nine), method (by torchlight, three at a time), charges (civil-war charges), and honest presentation of why the killing stopped as unresolved. CORRECT.

### Apocrypha check
✅ "God Almighty" boast — NOT used
✅ Doak sermon text — NOT quoted
✅ Virginia Sal/Paul — NOT used
✅ Adair's speech — NOT used
✅ Who shot Ferguson — correctly noted as unknown ("no one will ever know whose ball did it")
✅ "Sweet Lips" rifle tradition — NOT used
✅ Oxhide burial — NOT used (Ferguson described only as "stripped where he lay")
✅ "God Almighty and all the rebels out of hell" — NOT used
All apocrypha correctly excluded or excluded-by-omission. CORRECT.

---

## FULL MUST-FIX LIST

### MUST-FIX 1: Allaire "like Romans" quote — attribution/verification status
**File:** `section-narrative.tsx`, the-reckoning section, line 74
**Issue:** The phrase "like Romans" is used as a direct quote-mark phrase attributed to Allaire's diary, but the factpack flags it as MED-HIGH, unverified byte-exact ("verify byte-exact against the Draper appendix printing if used as a quote"). The narrative uses it as a direct quote without hedging that the wording has not been independently confirmed against the primary source (it was not fetched during the fact-pack session). Additionally, "what he called a rebel mock jury" presents "rebel mock jury" as if it is Allaire's own documented phrase, when the factpack's version is an attributed paraphrase.

**Correction:** Add a hedge to make clear "like Romans" is the account recorded in Draper's compilation, not independently byte-verified. Change the sentence from: "recorded the condemned dying defiant, 'like Romans,' and seethed at what he called a rebel mock jury" to something like: "recorded the condemned dying defiant — Mills and others, in his account, 'dying like Romans' — and seethed at what he described as a rebel mock-court justice."
OR: simply note it as "(his diary records them dying defiant)" and reserve the quote-mark form until byte-verification is done.

---

## FULL SHOULD-FIX LIST

### SHOULD-FIX 1: Ferguson's shirt — missing the "or duster" alternative
**File:** `section-narrative.tsx`, the-ridge section
**Claim:** "conspicuous in a checked hunting shirt pulled over his uniform"
**Issue:** Factpack [§5] says "accounts have him in a checked hunting shirt **or duster** over his uniform" [MED]. The narrative drops the "or duster" alternative, presenting one option of a two-option tradition as definitive.
**Correction:** Change to "a checked shirt or duster pulled over his uniform, men remembered" — the hedge is nearby ("men long remembered") but it modifies the whistle detail, not this clothing detail explicitly. Make the hedge explicit here too.

### SHOULD-FIX 2: "five months before" for the Waxhaws
**File:** `section-narrative.tsx`, the-ridge section, line 58
**Claim:** "The Waxhaws, where Tarleton's men had butchered surrendering Virginians **five months** before"
**Issue:** Waxhaws = May 29, 1780; Kings Mountain = October 7, 1780 = ~4 months and 9 days. "Five months" overstates the interval by ~3 weeks. "About four and a half months" or just "months" would be more precise. Not misleading in context, but a specific duration claim that is slightly off.
**Correction:** Change "five months before" to "about four months before" or "months before."

### SHOULD-FIX 3: "Within weeks" for Greene
**File:** `section-narrative.tsx`, the-reckoning section, line 76
**Claim:** "Within weeks Nathanael Greene took over the southern command"
**Issue:** Greene arrived at Charlotte December 2-3, 1780 — approximately 8 weeks (2 months) after Kings Mountain. "Within weeks" is technically correct but at the loose end; "that December" or "within two months" is more precise per the factpack [§7: "Greene took the southern command in December (Charlotte, Dec 2-3)"].
**Correction:** Change to "That December, Nathanael Greene took over the southern command" — matches factpack's own language exactly.

### SHOULD-FIX 4: Collins quote attribution note (minor)
**File:** `section-narrative.tsx`, the-ridge section
**Claim:** "Sixteen-year-old James Collins (Patriot), who was there and wrote it down decades later"
**Issue:** The factpack notes his memoir (*Autobiography of a Revolutionary Soldier*) was published in 1859. Collins was 16 at the battle (1780), making him about 95 at publication — or more likely his manuscript was transcribed/published posthumously by his son. The "wrote it down decades later" framing is accurate, but "published in 1859" or specifying the memoir would add credibility.
**Note:** This is very minor and may not warrant a fix given the page already hedges well with "decades later."

---

## CONFIRMED CORRECT ITEMS (summary of key landmines, all clear)

- "Only British soldier" wording: locked, correct throughout all surfaces (note, sides, commanders, narrative, closing)
- Chesney Irish-born caveat: present in both the Loyalist side note and Chesney bio
- Fire-and-sword: told at evidence level throughout — Shelby's 1823 pamphlet, no 1780 corroboration, modern study verdict, "whether Ferguson ever spoke it" framing
- Post-surrender killing: not sanitized; cries named, Loyalist wounded bayoneted stated plainly
- Bickerstaff hangings: told straight with date, count, charges, unresolved stopping point
- Civil-war framing: "Every man on both sides was an American" appears in note, outcome, and closing paragraph
- Ferguson's boast, Doak sermon, Virginia Sal/Paul, Adair's speech: all correctly excluded
- Casualty figures: all "about" and range-honest
- De Peyster and Allaire: correctly introduced as American-born; Allaire side-tagged Loyalist
- Jefferson "independance" spelling: correctly preserved in direct quote
- Watauga/Cherokee honest counterweight: present in both narrative and Sevier bio
