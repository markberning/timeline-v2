# Perryville Draft — FACT-CHECKER Gate (war pipeline step 4)

Web-verified against Wikipedia "Battle of Perryville" (infobox + body), American Battlefield Trust, Wikipedia biographies (Polk, Hardee, James S. Jackson), Confederate Government of Kentucky / Richard Hawes sources, and the National Archives / History.com on the preliminary Emancipation Proclamation. Independent confirmation of every load-bearing date, number, name, rank, place, and quote.

---

## VERDICT (one line)
**PASS with minor fixes** — no hallucinations, no false precision, no verbatim-presented unverified quotes; two small SHOULD-FIX wording slips (Terrill "killed" vs. mortally-wounded-died-next-day; one casualty-range phrasing). Nothing ship-blocking.

---

## ✅ CONFIRMED (the items I was asked to be able to FAIL — all hold)

- **Polk & Hardee were MAJOR GENERALS on Oct 8, 1862 — NOT Lt. Gen.** ✅ CONFIRMED. Polk promoted to Lt. Gen. **Oct 11, 1862 (date of rank Oct 10)**; Hardee to Lt. Gen. **Oct 10, 1862** — both DAYS AFTER the battle. The draft never back-dates the rank; every prose mention of Polk uses "Major General." (Wikipedia *Leonidas Polk*, *William J. Hardee*; ABT bios.)
- **Casualties are RANGES, not false precision.** ✅ CONFIRMED. Draft: combined ~7,600; Union "range of about 4,211 to 4,241"; CSA "around 3,396." Current WP infobox = **Union 4,241 (845 K / 2,851 W / 515 C-M); CSA 3,396 (510 K / 2,635 W / 251 C-M).** ABT = Union 4,211 / CSA 3,401 / combined 7,612. Draft's range brackets the authoritative spread correctly. The draft **explicitly rejects the "4,421" transposition error** — good. ✅
- **The four candidate quotes are NOT presented as verbatim.** ✅ CONFIRMED. Hawes ("the old Union could no longer be put back together") tagged "[paraphrase … exact wording unverified]"; Buell/"artillery drill" tagged "[paraphrase …]"; Noe "high-water mark … the Angle at Gettysburg" tagged "[paraphrase of Kenneth W. Noe …]"; Polk dusk-bluff tagged "[… render as reported]" / "is said to." No quotation marks set around any unverified primary text. Hardee's "boldly undulating" line was **dropped entirely** (Hardee not named in prose) — acceptable. ✅
- **Acoustic shadow.** ✅ CONFIRMED. WP: "Because of an unusual acoustic shadow, few sounds from the battle reached Buell's headquarters only 2 miles (3.2 km) away." Draft's "about two miles," HQ heard nothing, no reserves fed in until late afternoon — all match.
- **Drought.** ✅ CONFIRMED. Wet winter/spring 1862 gave way to dry June through summer; streams shrank; both armies converged on remaining water. Draft says "since around June" — matches. **Mt. Dubbi volcano cause correctly OMITTED** per the [VERIFY] flag. ✅
- **Frankfort / Hawes inauguration Oct 4, 1862.** ✅ CONFIRMED. Hawes inaugurated as Confederate "governor" at Frankfort (Old State Capitol) on **Oct 4, 1862**; Union artillery fired on the town mid-ceremony; Confederates abandoned Frankfort before the inaugural ball; "the only time Confederates seated a government inside a loyal state's capital" is accurate. (Confederate Government of Kentucky / Richard Hawes sources, Kentucky Lantern.)
- **Preliminary Emancipation Proclamation Sept 22, 1862.** ✅ CONFIRMED. Lincoln issued the preliminary EP on **Sept 22, 1862** (100-day notice; effective Jan 1, 1863). (National Archives; History.com.)

## ✅ Other facts spot-verified and clean
- Date Oct 8, 1862; Battle of Chaplin Hills; Boyle County; town pop ~300. ✅
- Army of the Ohio (Buell, Maj. Gen.) vs. Army of the Mississippi (Bragg, Gen.). ✅
- Force asymmetry: Union ~55,000–61,000 present / ~22,000 engaged; CSA ~16,000 engaged. ✅ (WP 55,000 present / 22,000 engaged; ABT lists 71,000 combined — draft's "running higher still" covers it.)
- En echelon sequence: Cheatham's artillery ~12:30; Donelson ~2:00 (~20% losses); center brigade ~2:45; Maney ~3:00 → broke through on 3rd assault → stopped at Starkweather's ridge ~5:30. ✅ (WP times match; Maney's withdrawal "around 5:30 p.m." confirmed.)
- Cleburne entered ~3:40, horse killed, ankle wound, kept going. ✅
- James S. Jackson = **Brigadier General**, division commander, killed Oct 8. ✅ (Draft correct — an earlier search aggregation mislabeled him "Maj. Gen."; WP body + his own Wikipedia bio both say Brig. Gen.)
- Sheridan = Brig. Gen.; seized Peters Hill, held back by Gilbert. ✅
- Gilbert = acting/unconfirmed Maj. Gen., reverted later. ✅ (Draft's "acting/contested" handling is correct.)
- Rousseau = Brig. Gen. (see SHOULD-FIX below — draft is ambiguous, not wrong). 
- Starkweather = **Colonel** (28th Brigade, 2,200 men, 12 guns). ⚠️ (see SHOULD-FIX.)
- Polk dusk bluff into the 22nd Indiana, posing as a Union officer, bluffing out, calling off the attack at dark. ✅ (WP confirms; draft renders "is said to / as reported" — correct discipline.)
- Bragg withdrew in the night, abandoned ~900 wounded, joined Kirby Smith, retreated SE via Cumberland Gap toward Knoxville. ✅
- Outcome: tactical Confederate / strategic Union victory; Kentucky kept in the Union. ✅
- Buell relieved → commission → resigned 1864; Dept. of the Cumberland under Rosecrans; army renamed Army of Tennessee Nov 1862; Stones River ~10 weeks later. ✅

---

## ❌ MUST-FIX
**None.** No hallucination, no false precision, no Lost-Cause omission (slavery named in §1 and §5), no verbatim unverified quote. Nothing blocks ship.

---

## ⚠️ SHOULD-FIX (precision/wording — not ship-blocking)

1. **Terrill "killed" → "mortally wounded."** Draft §the-acoustic-shadow and §the-reckoning state Brig. Gen. William R. Terrill "was killed." Per WP, Terrill was **mortally wounded by an artillery shell and died at 2 a.m. the following day** (Oct 9), not killed outright on the field. Jackson was killed outright; Terrill was not. Recommend "mortally wounded" (or "mortally wounded, dead within hours") for Terrill while keeping "killed" for Jackson. Minor, but it's a name+fact precision slip the gate should flag.
   - Source: Wikipedia, *Battle of Perryville* ("mortally wounded … died at 2 a.m. the following day").

2. **Rousseau rank — make it explicit.** Draft's "Meanwhile · McCook's corps" sidebar names "the division of Lovell Rousseau (North)" with no rank and carries a "[fact pack §2 — rank VERIFY]" flag. Resolved: **Brigadier General Lovell H. Rousseau** (3rd Division, McCook's I Corps). No rank is asserted in prose so nothing is *wrong*, but the carried [VERIFY] should be closed — if a rank is ever added, it is Brig. Gen. (per the war side-tag rule, a rank is not required, only the side tag, so this is optional.)
   - Source: Wikipedia, *Battle of Perryville* ("the 3rd Division, under Brig. Gen. Lovell H. Rousseau").

3. **Starkweather rank — resolve the [VERIFY] to Colonel.** Draft names "John Starkweather (North)" with "[fact pack §2 — Starkweather's rank noted VERIFY]." Resolved: **Colonel John C. Starkweather** (28th Brigade) at Perryville — NOT a Brigadier General at this date. The draft asserts no rank in prose, so again nothing is wrong, but if a rank is added it must be "Colonel," not "Brig. Gen." Close the flag.
   - Source: Wikipedia, *Battle of Perryville* ("the 2,200 men in the Union 28th Brigade of Col. John C. Starkweather").

4. **Casualty-range internal consistency (cosmetic).** The draft's Union range "4,211 to 4,241" is correct, but note the two endpoints come from different source families (ABT 4,211 vs. WP infobox sum 4,241) — the prose presents it cleanly as a range, which is the right call. No change required; flagging only so the reconcile step knows the spread is real and intentional, not an error.

---

## Notes for reconcile step
- **Hardee** is correctly omitted from prose (named only in the fact ledger) — no side-tag obligation triggered, no "boldly undulating" quote risk. Fine to leave omitted or add a sequenced Left-Wing beat; either is factually safe.
- Every carried [VERIFY] flag in the draft's Fact Ledger is now resolved: Hawes wording (paraphrase OK), Buell wording (paraphrase OK), Noe wording (paraphrase OK), Polk anecdote (as-reported OK), ranks (Starkweather=Col, Rousseau=Brig.Gen, Gilbert=acting-Maj.Gen all handled), volcano (correctly omitted), Polk/Hardee=Maj.Gen on Oct 8 (correct).
