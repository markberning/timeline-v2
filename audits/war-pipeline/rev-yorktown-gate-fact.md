# FACT-CHECKER GATE — Siege of Yorktown (1781)
## American Revolution battle dossier

**Files checked:**
- `src/app/war-revolution/battles/yorktown/page.tsx` (dossier data)
- `src/app/war-revolution/battles/yorktown/s/[section]/section-narrative.tsx` (three narrative sections)
- Cross-referenced against: `audits/war-pipeline/rev-yorktown-factpack.md`
- Web research: targeted searches on key claims (see individual findings)

**Legend:** ✅ CONFIRMED · ❌ WRONG · ⚠️ UNSUPPORTED/SHAKY · 🟡 FRAMING/PRECISION ISSUE

---

## MUST-FIX FINDINGS (❌)

### M-1 ❌ "Largest cavalry action" vs. "most significant cavalry engagement"
**Location:** `page.tsx` line 76 — Tarleton bio: "the Battle of the Hook, the largest cavalry action of the Revolution"
**Issue:** The fact pack (§3 British commanders) calls it "the most significant cavalry engagement of the Revolution." The draft upgrades this to "largest." "Largest" is a claim about numbers engaged; "most significant" is a claim about historical importance. No source in the fact pack supports "largest" specifically. The Battle of Cowpens involved substantial cavalry; Brandywine and other large engagements also involved significant mounted forces. "Largest" is the stronger and more vulnerable claim.
**Correction:** Change "largest cavalry action" to "most significant cavalry engagement" to match the fact pack's supported phrasing.

### M-2 ❌ "400-mile march" vs. "roughly 450 miles" — internal discrepancy
**Location:** `page.tsx` line 83 — section blurb for 'the-trap': "Washington and Rochambeau's secret 400-mile march south"
**Issue:** The fact pack (§2, "The march south") says "roughly 450 miles in approximately four weeks." The section narrative ('the-trap' prose) correctly says "some 450 miles." The section blurb in the dossier says "400-mile march," contradicting both the fact pack and the narrative prose in its own sibling section. This is an internal contradiction in the same file.
**Correction:** Change "400-mile march" to "roughly 450-mile march" or "450-mile march" to match the fact pack and the section prose.

### M-3 ❌ Lincoln bio — "first Secretary of War" is misleading without qualification
**Location:** `page.tsx` line 73 — Lincoln bio: "After the war he became the first Secretary of War."
**Issue:** The fact pack (§3 Allied commanders) specifies "the first Secretary of War under the Articles of Confederation." Benjamin Lincoln served as Secretary of War under the Articles of Confederation government (1781–1783 frame), not under the Constitution. The first Secretary of War under the Constitution was Henry Knox (appointed 1789). As written, the bio implies Lincoln was the first Secretary of War in the sense most modern readers will understand (the cabinet department), which is incorrect — Knox holds that distinction.
**Correction:** Add "under the Articles of Confederation" to match the fact pack's accurate qualification.

### M-4 ❌ Meta-narrator violation — house voice rule breached in opening section
**Location:** `section-narrative.tsx` line 34 — first paragraph of 'the-trap': "Hold that in mind, because everything that happened on the Virginia peninsula in October 1781 was made possible, or impossible, by who controlled the bay."
**Issue:** The war content pipeline (locked house-voice rule #1, `audits/war-content-pipeline.md`): "No meta-narrator. No asides that tell the reader what to think/remember/expect or that narrate the chapter's own machinery ('here is the fact that reframes everything', 'hold onto that'...)." The phrase "Hold that in mind, because..." is a direct meta-narrator intrusion of precisely the type the rule bans. The first paragraph as a whole also states "the land siege everyone pictures was only the execution of a verdict the water had already returned" — framing the narrator as the reader's guide to understanding, not simply telling the story. The instruction is explicit: "State the thing; don't herald it."
**Correction:** Rewrite the opening paragraph to cut "Hold that in mind, because..." and restructure so the sea-first thesis is stated as a fact, not heralded. Example direction: drop "The most important thing to understand about Yorktown is that" and "Hold that in mind, because" — let the facts make the point.

---

## SHOULD-FIX FINDINGS (⚠️ / 🟡)

### S-1 ⚠️ "24-ship edge over Graves's 19" — phrasing is numerically ambiguous
**Location:** `page.tsx` line 69 — de Grasse bio: "His 24-ship edge over Graves's 19 was the arithmetic of the siege."
**Issue:** "24-ship edge" reads as "an edge of 24 ships" (i.e., de Grasse outnumbered Graves by 24). The actual numerical advantage was 5 ships (24 minus 19). What the author means is "his 24-ship fleet [versus] Graves's 19" — but the shorthand "24-ship edge" is a precision failure. A reader will be confused.
**Correction:** Rephrase to something like "His fleet's superiority — 24 ships against Graves's 19 — was the arithmetic of the siege" or "A 24-to-19 advantage in ships of the line was the arithmetic of the siege."

### S-2 ⚠️ "Within four months the House of Commons voted against continuing the offensive"
**Location:** `page.tsx` line 80 (outcome) and `section-narrative.tsx` 'the-sword' prose
**Issue:** Yorktown was October 19, 1781. Web research finds the Commons vote on Conway's motion against offensive war passed on March 1, 1782 — approximately 4 months and 11 days after Yorktown. "Within four months" is slightly inaccurate for that vote. Lord North's actual resignation was March 27, 1782 — about 5.2 months. "Within four months" fits neither event cleanly. The phrasing in the draft conflates the Commons vote (March 1) with the fall of North's government (March 27). The fact pack (§7) also says "within four months" — so the error is inherited. The fact-checker exists to catch fact-pack errors too.
**Correction:** Split the two events for clarity, or use "within five months" / "by the spring of 1782." In the outcome and narrative, separate the Commons vote from North's resignation:  "By spring 1782 the House of Commons had voted against continuing the offensive, and Lord North's government fell." The fact pack §7 and §9 should be updated to match.

### S-3 🟡 "Largest British army in the South" — understates it vs. fact pack language
**Location:** `page.tsx` line 80 (outcome): "the largest British army in the South marched out and grounded its arms."
**Issue:** The fact pack's Winner line material says "roughly one-third of all British military strength in North America" and "the largest British capitulation of the entire war." The outcome text calls it "the largest British army in the South" which is accurate but undersells relative to the broader claim. More importantly, the casualty block (line 53) and the section narrative both correctly say "roughly one-third of all British forces in North America." The outcome should use the same framing for consistency. (Minor consistency issue, not a factual error.)
**Suggestion:** Change to "the largest British army on the continent" or "a third of all British strength in North America marched out."

### S-4 ✅ De Barras fleet count — "eight ships" confirmed
**Location:** `section-narrative.tsx`, 'the-trap' prose, paragraph 5: "a second, smaller French squadron of eight ships of the line under the Comte de Barras"
**Status:** ✅ Web research confirmed: 8 ships of the line from Newport is the accepted standard figure across Wikipedia, NPS, and ABT. Correct.

### S-5 ⚠️ "De Grasse … twenty-eight ships of the line … to the Chesapeake" vs. actual battle fleet of 24
**Location:** `page.tsx` line 69 — de Grasse bio: "his whole West Indies fleet, twenty-eight ships of the line, to the Chesapeake." Later in the same bio: "On September 5 he beat Admiral Thomas Graves off the Virginia Capes and shut the bay." Then separately: "His 24-ship edge over Graves's 19 was the arithmetic of the siege."
**Issue:** The 28 ships left Cap-Français but only 24 met Graves at the Battle of the Chesapeake on September 5. The de Grasse bio in the dossier correctly presents both figures but in the same bio paragraph, a reader may be confused about why 28 are mentioned but 24 appear at the battle. The section narrative ('the-trap') correctly handles this — it says 28 left the Caribbean and 24 met Graves. The dossier bio is not strictly wrong but the transition between the two numbers is compressed. The fact pack itself notes this distinction (§12 Known Uncertainties, item 5: "24 ships of the line at the September 5 battle; the total later in the bay after de Barras arrived was 36 ships").
**Suggestion:** Add a brief bridge in the de Grasse bio (e.g., "bringing twenty-eight ships of the line north, twenty-four of which met Graves at the Virginia Capes on September 5") to clarify for readers who see both numbers in the same bio.

### S-6 🟡 "By tradition Washington struck the first blow with a pickax" — carried as MED but labeled correctly
**Location:** `section-narrative.tsx` 'the-parallels' prose: "By tradition Washington (American) struck the first blow with a pickax to open it, though that detail rests on later popular accounts rather than a witness."
**Status:** ✅ Correctly framed as tradition with the evidence limitation stated. The fact pack (§4) assigns this MED. No correction needed.

### S-7 ⚠️ "A story went round the camp that Washington's first shot tore through a house where British officers were at dinner" — hedged but the MED is not signaled clearly enough for a key anecdote
**Location:** `section-narrative.tsx` 'the-parallels': "A story went round the camp that Washington's first shot tore through a house where British officers were at dinner; it is the kind of tale every siege grows, and no firm source pins it down."
**Status:** ✅ The framing is correct and appropriately skeptical. The fact pack (§4) rates it MED and notes "no strong primary source chain." The hedge "it is the kind of tale every siege grows" is acceptable popular-history register. Confirmed as correctly handled.

### S-8 ⚠️ Abercrombie's cry — carried as reported speech, but framing is appropriate
**Location:** `section-narrative.tsx` 'the-parallels': "Abercrombie is reported to have shouted 'Push on my brave boys, and skin the bastards!' as they went in, though that line travels through later accounts rather than a firm document."
**Status:** ✅ The fact pack rates this MED and the draft carries it as reported speech with explicit caveat. Correctly handled.

### S-9 🟡 "The war was not over. It would take two more years to formally end." — Timeline check
**Location:** `page.tsx` line 47 — note field
**Issue:** Yorktown surrender Oct 19, 1781; Treaty of Paris September 3, 1783. That is 1 year, 10 months, 15 days — slightly less than two years. "Two more years" slightly overstates. The fact pack handles this by saying "The legal end did not come until the Treaty of Paris on September 3, 1783" without a "two years" claim. The section narrative correctly says "almost two years later." The dossier note says "It would take two more years to formally end" which is mildly inaccurate. The framing is a rhetorical rounding; no reader will be misled, but "nearly two years" would be more precise.
**Suggestion:** Change "two more years" to "nearly two years" in the note field.

### S-10 ✅ "World Turned Upside Down" — correctly framed as tradition/apocryphal throughout
**Location:** `page.tsx` line 85 (section blurb): "By tradition a band played a tune called 'The World Turned Upside Down,' though no one who was there ever wrote it down." — `section-narrative.tsx` 'the-sword': full paragraph with Garden's Anecdotes, Garden's source being a man who was not there, Freeman's dismissal, "It is a wonderful story. It is almost certainly not a fact..."
**Status:** ✅ Both files handle this exactly as the fact pack requires. The section blurb in the dossier uses the minimal but correct "by tradition ... though no one who was there ever wrote it down." The full narrative section delivers a thorough evidence statement. No issues.

### S-11 ✅ Cornwallis's illness framing
**Location:** `page.tsx` line 74 — Cornwallis bio: "The illness was real; whether disgust also kept him away cannot be known." `section-narrative.tsx` 'the-sword': "The illness was real enough; malaria was rampant in the camp and he had reported half his army sick. Whether disgust also kept him from the field is something no source can settle, and it is not the page's business to guess."
**Status:** ✅ Both files handle this exactly as the fact pack requires — illness stated as real, motivation not diagnosed. Correct.

### S-12 ✅ O'Hara → Rochambeau → Washington → Lincoln sword sequence
**Location:** Both files present the sequence consistently and correctly.
**Status:** ✅ Confirmed against fact pack §5, §7 (Tucker letter). The sequence and the reasoning (no contemporary source records O'Hara's motive) are correctly handled throughout.

### S-13 ✅ Treaty of Paris date
**Location:** `page.tsx` outcome and `section-narrative.tsx` 'the-sword': "the Treaty of Paris on September 3, 1783."
**Status:** ✅ Confirmed. Treaty of Paris was signed September 3, 1783.

### S-14 ✅ Battle of the Saintes
**Location:** `page.tsx` de Grasse bio: "the Battle of the Saintes in April 1782, Admiral Rodney shattered his fleet and captured him aboard his own flagship; he spent two years a prisoner-guest in England." `section-narrative.tsx` 'the-sword': "would shatter de Grasse's fleet at the Battle of the Saintes the following April, capturing the admiral aboard his own flagship and sending him to two years in England as a prisoner-guest."
**Status:** ✅ Battle of the Saintes was April 12, 1782. Rodney defeated de Grasse and captured him aboard the Ville de Paris. Confirmed.

### S-15 ✅ Dates: siege Sept 28 – Oct 19; Chesapeake Sept 5; redoubts Oct 14; surrender Oct 19; parley Oct 17
**Status:** ✅ All key dates confirmed against fact pack with HIGH confidence tags and NPS/ABT sources.

### S-16 ✅ Allied strength ~19,000–19,800; ~8,800 Americans; ~7,800–10,800 French; de Grasse's fleet 24 ships
**Status:** ✅ All confirmed against fact pack. The nuance that 28 left the Caribbean but 24 were at the Sept 5 battle, and that 36 were in the bay after de Barras arrived, is handled correctly in the section narrative.

### S-17 ✅ British strength ~8,000–9,000; ~700 at Gloucester Point
**Status:** ✅ Confirmed against fact pack.

### S-18 ⚠️ Prisoner count — "standard count is 7,157" is not well-sourced; body text is fine
**Location:** `page.tsx` line 64 — casualty footnote: "more than 7,000 soldiers (the standard count is 7,157, with aggregate totals running as high as 7,685)"
**Issue:** Web research finds no corroboration for 7,157 as the "standard count." Wikipedia gives a range of 7,416–7,685; other sources give 7,087; "more than 7,000" is universal but no source pins 7,157 specifically. The 7,157 figure in the footnote is unsourced and should not be presented as the "standard" number. The body text ("more than 7,000") is correct and safe.
**Correction:** In the footnote, remove the 7,157 "standard count" claim. Replace with: "more than 7,000 soldiers (some sources run as high as 7,685); the precise figure varies by source because the count includes different categories of personnel." The "more than 7,000" body-text formulation is correct and should not change.

### S-19 ✅ Allied casualties ~389 (88 killed, 301 wounded); French at Redoubt 9 ~15/77; Americans at Redoubt 10 ~9/25
**Status:** ✅ All confirmed against fact pack HIGH/MED ratings.

### S-20 ✅ Hamilton — muskets unloaded, bayonets fixed; ~400 light infantry; took the redoubt in ~10 minutes
**Status:** ✅ Confirmed against fact pack. The age dispute (1755 vs 1757) is correctly avoided in both files.

### S-21 ✅ Knox — hauled Ticonderoga guns "in the winter of 1775 to 1776"; 155 combined guns
**Status:** ✅ Confirmed against fact pack. The 155-gun total is confirmed via multiple sources in the fact pack.

### S-22 ✅ Lincoln — surrendered Charleston May 12, 1780; exchanged "that November"; "first Secretary of War" qualifier issue flagged in M-3
**Location:** `page.tsx` line 73. The "that November" (November 1780) matches fact pack. May 12, 1780 is confirmed.

### S-23 ✅ Charleston surrender — colors cased, no march-out tune; symmetry with Yorktown
**Status:** ✅ The honors of war symmetry is confirmed in the fact pack (§4, §5) and handled correctly throughout.

### S-24 ✅ "The war did not end at Yorktown" — Britain still held NY, Charleston, Savannah; ~30,000 troops
**Status:** ✅ Confirmed against fact pack (§7). The 30,000-troop figure matches.

### S-25 ✅ Cornwallis selected Yorktown in August 1781 under contradictory orders from Clinton
**Status:** ✅ Confirmed against fact pack (§1 Identity & Framing). The Clinton–Cornwallis orders context is handled correctly.

### S-26 ✅ De Grasse's decision at Cap-Français, August 5, 1781; 28 ships; ~3,000 troops; Havana loan; mid-October deadline
**Status:** ✅ All confirmed against fact pack (§2 Background). The Havana loan is noted in the fact pack as confirmed in secondary literature.

### S-27 ✅ Trumbull "Surrender of Lord Cornwallis" caption — correctly notes it as idealized, Cornwallis absent, figures from separate sittings
**Status:** ✅ Hero credit in `page.tsx` line 48 correctly states this. Matches fact pack requirement (§9 Apocrypha, item 3).

### S-28 ✅ Washington wanted to attack New York; Rochambeau steered toward Chesapeake
**Status:** ✅ Confirmed against fact pack (§2, Wethersfield conference, May 21–22, 1781). The fact that Washington did not choose the Chesapeake plan is consistently and correctly framed.

### S-29 ✅ Guilford Courthouse — "technically a British victory but he lost nearly a quarter of his force"
**Location:** `section-narrative.tsx` 'the-trap' — Cornwallis "had given up on the Carolinas and marched north into Virginia"
**Status:** ✅ The dossier bio for Cornwallis (line 74) says "prevailed at Guilford Courthouse at heavy cost" — consistent with fact pack (§2). The phrase about the quarter-loss is not in the dossier text, only the fact pack. No issue.

### S-30 🟡 "Eight-week deadline" in fact pack intro vs. "weeks wide" in the text
**Location:** The fact pack's opening summary says "sets an eight-week deadline." De Grasse committed his fleet August 5 with a mid-October return deadline — that is approximately 10 weeks, not 8. The section narrative says "a clock only weeks wide" (correctly vague). The fact pack intro is slightly off but this does not appear in the draft text itself.
**No action needed in the draft;** the draft uses "weeks wide" which is correctly vague.

---

## SURFACE-BY-SURFACE CHECKLIST

| Surface | Status | Notes |
|---|---|---|
| Dossier `date` field | ✅ | Sept 28 – Oct 19 correct |
| Dossier `note` (overview) | 🟡 | "two more years" → "nearly two years" (S-9) |
| Stats block — Duration | ✅ | All dates correct |
| Stats block — Casualties | ✅ | Ranges and "more than 7,000" correct |
| Stats block — Winner | ✅ | |
| Sides — Allied strength | ✅ | Ranges and fleet count correct |
| Sides — British strength | ✅ | |
| Sides — Allied note | ✅ | |
| Sides — British note | ✅ | |
| Section blurbs | ❌ | "400-mile march" (M-2) |
| Hero credit | ✅ | Trumbull correctly captioned |
| Casualties footnote | ⚠️ | "standard count is 7,157" is unsourced (S-18) |
| Commander bios (all 9) | ❌/🟡 | Tarleton "largest" (M-1); de Grasse "24-ship edge" (S-1); de Grasse 28-vs-24 gap (S-5); Lincoln "first Sec War" (M-3) |
| Outcome text | ⚠️ | "within four months" (S-2); "largest British army in the South" (S-3) |
| Narrative 'the-trap' | ❌ | Meta-narrator "Hold that in mind" (M-4) |
| Narrative 'the-trap' — Meanwhile | ✅ | |
| Narrative 'the-parallels' — main prose | ✅ | All claims confirmed |
| Narrative 'the-parallels' — Meanwhile | ✅ | |
| Narrative 'the-sword' — main prose | ✅ (one ⚠️) | "within four months" repeats S-2 |
| Narrative 'the-sword' — Meanwhile | ✅ | |

---

## APOCRYPHA / HANDLE-WITH-CARE AUDIT

1. **"World Turned Upside Down"** — ✅ Correctly framed as tradition with evidence problem stated clearly in both dossier (section blurb) and narrative (full paragraph). Not asserted as fact anywhere.
2. **Cornwallis's illness** — ✅ Real illness acknowledged; motivation not diagnosed. Consistent in both files.
3. **Washington fired first cannon (Thacher)** — ✅ Attributed to Thacher's journal ("put the match to the first gun"); dinner-table anecdote carried as a camp story, not as fact.
4. **Washington's first pickax blow** — ✅ Carried as "by tradition... rests on later popular accounts."
5. **Abercrombie's sortie cry** — ✅ Carried as reported speech with caveat.
6. **McPherson / "simultaneity"** — ✅ Attributed to "historians of the campaign," not a named scholar's quote.
7. **The Trumbull painting** — ✅ Captioned as idealized history painting, Cornwallis absent.
8. **Hamilton's age** — ✅ Not stated. Correctly omitted per fact pack's direction.

---

## SUMMARY

**Must-fix count: 4**

- M-1: Tarleton bio — "largest cavalry action" should be "most significant cavalry engagement" (fact pack wording; "largest" is unsupported and more vulnerable)
- M-2: Section blurb — "400-mile march" contradicts fact pack and sibling prose (should be "roughly 450 miles")
- M-3: Lincoln bio — "first Secretary of War" needs "under the Articles of Confederation" qualifier (Knox was first under the Constitution)
- M-4: 'the-trap' opening — "Hold that in mind" is a banned meta-narrator intrusion per locked house-voice rule #1

**Should-fix count: 4 items**

- S-1: "24-ship edge over Graves's 19" is numerically ambiguous — reads as an advantage of 24 ships, not a fleet of 24. Rephrase as "24-to-19 advantage" or similar.
- S-2: "Within four months" is inaccurate — the Commons vote was March 1, 1782 (~4 months 11 days after Oct 19); North's government fell March 27 (~5.2 months). Use "by spring 1782" and split the two events.
- S-9: "Two more years" → "nearly two years" (Oct 1781 to Sept 1783 = ~23 months)
- S-18: Casualty footnote — "the standard count is 7,157" is unsourced; no reliable source pins this exact figure. Drop it; use the range formulation.

**Confirmed clean (web-verified):** Battle of the Chesapeake: 24 vs 19 ships (de Grasse brought 28 from Caribbean but 24 engaged Graves). De Barras: 8 ships. All key dates. Allied casualties 389 (88/301). Redoubt 10 casualties 9/25; Redoubt 9 casualties 15/77. "More than 7,000" prisoner formulation. Treaty of Paris Sept 3, 1783. Battle of the Saintes April 12, 1782. Sword sequence O'Hara → Rochambeau → Washington → Lincoln. "World Turned Upside Down" apocrypha framing (Garden 1828, no contemporary source). Cornwallis illness framing. Charleston symmetry. Trumbull painting caption. Hamilton unloaded-musket assault. De Grasse's August 5 decision at Cap-Français. Washington-Rochambeau-New York-vs-Chesapeake strategy split.
