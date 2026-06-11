# FACT-CHECK CRITIC — rev-lexington draft (Battles of Lexington & Concord)

Critic: fact-check (hard floor: accuracy, zero hallucination)
Draft: `audits/war-pipeline/rev-lexington-draft.md`
Pack: `audits/war-pipeline/rev-lexington-factpack.md` (the draft's only permitted source)
Date: 2026-06-10

## VERDICT: PASS-WITH-FIXES — 2 BLOCKERS (both one-line fixes), 2 SHOULD-FIX, 4 NIT

The draft is exceptionally tight against the pack: every dossier stat, casualty figure,
commander-bio fact, caption, and MEANWHILE beat traces to the pack at the pack's confidence
level, every verbatim quote is byte-exact, the banned Barker verdict is absent from all
reader surfaces, and all 10 web spot-checks confirm the pack (no pack errors found). The two
blockers are (1) one hallucinated synthesis sentence in the section-2 MEANWHILE that the
pack's own bridge narrative contradicts, and (2) a caption claim ("witness interviews")
that is web-verified true but absent from the pack and mis-tagged in the draft's own fact
ledger as pack-HIGH.

---

## STAGE 1 — PACK TRACEABILITY (every surface)

### Dossier
- Forces British ~1,700–1,900 / American ~3,500–4,000 in relays — pack §3 ✓
- Duration ~15 hours / 16-mile (26 km) running battle — pack §1, §3 ✓
- Winner: American strategic victory — pack §1 ✓
- Sides: Smith ~700 + Percy ~1,000–1,400 w/ two 6-pounders; cmd Parker/Barrett/Heath (American, "no single commander") — pack §3 ✓; "under arms about 21 hours / roughly 35 to 40 miles" hedged per pack MED ✓
- Casualties: British 273 (73/174/26) of ~1,700–1,900 (~15%); American ~93–95 (49 k / 39–41 w / ~5 m) of ~3,500–4,000; Menotomy ~40 GB / ~25 US dead — pack §5 ✓ exactly, labels match the pack's "spine uses 93–95" instruction ✓

### Commander bios
- Parker: farmer/mechanic, F&I veteran (no specific engagements used — correct, those are MED), 45 + dying of TB, whisper hedged "some accounts," ~77 on the green, Parker's Revenge rally, too ill for Bunker Hill, d. Sept 1775 age 46, NO likeness (img NONE) — all pack §3 ✓
- Smith: 30 years 10th Foot, seniority/steadiness, criticized for slowness, reinforcement call saved column, thigh wound placed loosely ("east of Concord" — correct hedge for the MED spot), later brigade commands + lieutenant general, d. 1791 — pack §3 ✓
- Pitcairn: Fife, marines, ~600 from late 1774, respected by Bostonians, led advance onto the green, Fiske Hill horse/pistols → Israel Putnam, killed at Breed's Hill in his son's arms, NO authentic portrait (img NONE) — pack §3 ✓
- Percy: heir to Northumberland, MP, opposed coercive policy, met column east of Lexington, Charlestown swerve dodging Great Bridge ambush, April-20 letter; botched-order delay correctly NOT used (MED) — pack §3 ✓
- Heath: Roxbury farmer, first American general officer on a Revolution battlefield, arrived mid-afternoon with Warren, skirmisher-ring direction hedged "by his own later account" exactly as the pack's MED tag requires; Warren-hairpin correctly NOT used — pack §3 ✓

### Quotes (byte-exact check against pack §7)
1. Gage orders "with the utmost expedition and Secrecy to Concord, where you will seize and distroy all Artillery, Ammunition, Provisions, Tents, Small Arms, and all Military Stores whatever" — VERBATIM ✓ (incl. "distroy")
2. Gage restraint clause "But you will take care that the Soldiers do not plunder the Inhabitants, or hurt private property." — VERBATIM ✓
3. Parker deposition QUOTE — VERBATIM ✓ (matches pack §7.2 word-for-word incl. parenthetical and capitalization)
4. Emerson diary "This morning, between 1 and 2 o'clock, we were alarmed by the ringing of the bell." — verbatim substring of pack §7.6 ✓
5. Percy "Whoever looks upon them as an irregular mob will find himself much mistaken. They have men amongst them who know very well what they are about..." — VERBATIM ✓; follow-ons "determined to go through with it" / "turn out so despicable as it is perhaps imagined at home" — verbatim fragments ✓
6. Mackenzie QUOTE "Many houses were plundered... I have no doubt this inflamed the Rebels... Some soldiers who stayed too long in the houses were killed in the very act of plundering." — VERBATIM vs pack §7.4 ✓ (pack's re-verify-at-integration caveat is carried in the draft's fact ledger ✓)
7. Barker inline "The plundering was shameful" + "All that were found in the houses were put to death" — VERBATIM vs pack §7.5 ✓, MED caveat carried in ledger ✓
8. Smith sneer "Notwithstanding the enemy's numbers, they did not make one gallant attempt during so long an action" — verbatim vs pack §7.7 ✓, re-verify note carried ✓
9. Burial-party denial "neither of those persons were scalped, nor their ears cut off" — verbatim vs pack §4d ✓
10. "Disperse, you rebels!" — correctly badged "in the colonial accounts" (MED) ✓
11. Buttrick "Fire, fellow soldiers, for God's sake, fire!" — correctly badged "by tradition" ✓
12. Parker boulder line "Stand your ground; don't fire unless fired upon" — used ONLY as a myth-hygiene debunk, badged as much-later inscription ✓
13. **BANNED Barker "ill plann'd and ill executed":** does NOT appear in any reader-facing surface. It appears twice in authoring metadata only (the draft's header note line 7 and fact ledger line 295), both times as "NOT used" documentation. This is the correct place to record the ban; no violation.
14. DO-NOT-USE list audit: Hosmer goad, Davis "afraid to go," "tongues hanging out like dogs," Munroe-Revere exchange, church-silver theft, Warren hairpin, Harvey as addressee, Laurie's name — ALL correctly absent from prose ✓

### Myth-hygiene (the care list)
- First shot: presented as irreducibly unknown; deposition campaigns presented as propaganda instruments ("produced as weapons, not as evidence"); Gould's could-not-say line used as the honest anchor — exactly per pack ✓
- Margaret Gage: "unproven suspicion, nothing more," "several specialists call the spy story a myth" — never asserted ✓
- North Bridge: hatchet killing real, Ammi White badged "tradition names," scalping = propaganda entering Gage's account, burial-party denial quoted, Menotomy-rage link attributed ("some historians read...") ✓
- "Shot heard round the world" = Emerson 1837, about the BRIDGE volley, badged twice (section 2 + section 3 "sixty-two years after the fact" — arithmetic correct) ✓
- "The regulars are coming out" vs anachronistic "British are coming" — handled ✓; lanterns = backup signal ✓; Prescott reached Concord, Revere captured in Lincoln ✓
- No minuteman romance: "None of this was spontaneous. It was a system" + minute companies ¼–⅓ of rolls ✓
- Pitcairn/Parker likenesses: both cards img NONE with honest notes; Plate II spyglass crop and Kitson statue fallbacks carry mandatory not-a-portrait captions ✓
- Heath hedged per his own later account ✓
- Whittemore ages: "in his late 70s" / "lived into his nineties" — exactly the pack's DISPUTED instruction ✓

### Locator geography (plausibility check, Boston–Lexington–Concord corridor)
All coordinates match pack §9 digit-for-digit, and all are independently plausible:
- Lexington Battle Green real-world ≈ 42.4496, −71.2310 ✓ (HIGH, matches)
- Concord Monument Square ≈ 42.4604, −71.3489 ✓; North Bridge ≈ 42.4692, −71.3505 ✓ (bridge correctly N-NW of town center)
- Menotomy/Arlington center ≈ 42.4154, −71.1565 ✓; Boston ≈ 42.3601, −71.0589 ✓; Charlestown Neck ≈ 42.3776, −71.0680 (~) plausible; Lechmere Point ≈ 42.371, −71.077 (~) plausible
- Retreat-strip dots run monotonically W→E along Route 2A as they should: Meriam's Corner −71.3218 → Bloody Angle −71.292 → Parker's Revenge −71.266 → Fiske Hill −71.252 → Lexington −71.2310 → Munroe Tavern −71.217 ✓
- Tildes on all MED road-fight sites carried, "positions are approximate" in caption B ✓; frames A and B contain all their dots ✓

---

## STAGE 2 — WEB SPOT-CHECKS (10 run; anchor = NPS Minute Man NHP)

1. **British casualties 273 = 73 killed / 174 wounded / 26 missing** — NPS Minute Man
   ("April 19, 1775" page): exact match. ✓
2. **American casualties** — NPS: "95 — 49 killed, 41 wounded, 5 missing." Draft's
   "~93–95 / 39–41 wounded / about 5 missing" is the pack-instructed range containing the
   NPS figures. ✓
3. **Day timeline** — NPS: muster 10 p.m., march 2 a.m., Lexington 5 a.m., Concord 7 a.m.,
   North Bridge 9:30 a.m., depart noon, Percy at Lexington 3 p.m., Charlestown Neck 7:30 p.m.
   Draft matches at every point (draft's "between 2 and 3 p.m." for Percy is the pack's range
   and contains the NPS time). ✓
4. **Forces engaged** — NPS: "some 1,700 British regulars and over 4,000 Colonial militia."
   Draft's ~1,700–1,900 / ~3,500–4,000 consistent. ✓
5. **Parker's Revenge archaeology** — NPS news releases + American Battlefield Trust +
   Friends of Minute Man report: project recovered 29 musket balls within ~80 yards and fixed
   the engagement site at the Lincoln–Lexington line; Parker rallied survivors of the green.
   Draft's framing (single late account, site fixed by 2010s archaeology) confirmed. ✓
6. **Doolittle engraving date + method** — American History Central / Concord sources:
   Doolittle and Ralph Earl visited Lexington/Concord in early May 1775, examined the
   terrain, and **talked to colonial eyewitnesses**; Doolittle engraved from Earl's paintings
   and offered the four plates for sale in the Connecticut Journal in **December 1775**; they
   are "the only contemporary illustrations" of April 19. So the draft's "witness interviews"
   caption claim is TRUE — but it is NOT in the pack (see BLOCKER 2). Bonus: Yale's own
   catalog title indeed mislabels Plate III "the South Bridge," confirming the pack/draft
   mislabel note. ✓(web)
7. **Revere ride mechanics** — paulreverehouse.org: Warren dispatched Revere; Dawes by Boston
   Neck; Revere rowed across to Charlestown past HMS Somerset; "The regulars are coming out!"
   (not "the British are coming"); captured by a patrol after meeting Prescott and Dawes,
   horse confiscated, returned on foot; Prescott escaped the patrol (Concord delivery is
   standard elsewhere). All as drafted. Nuance: the Revere House frames the two lanterns as
   the predetermined by-sea/by-land signal; the pack/draft "backup in case neither rider got
   out" is the standard Fischer framing and compatible (it was a route signal arranged as
   insurance) — not a pack error. ✓
8. **Menotomy / Jason Russell** — Arlington Historical Society, Battle of Menotomy sources:
   58-year-old Russell + 11 other Americans shot/bayoneted in house and yard; ~25 colonial
   and at least ~40 British dead in Menotomy; bloodiest engagement of the day. Exact match. ✓
9. **Pitcairn likeness** — multiple sources confirm no portrait of Pitcairn is known to
   exist and Trumbull used his son David as the model. Draft's img: NONE handling correct. ✓
10. **Percy quote + Whittemore** — "Whoever looks upon them as an irregular mob will find
    himself much mistaken" confirmed verbatim, in Percy's April 20 letter to a fellow
    general. Whittemore age discrepancies confirmed (78 vs 80 at the fight; 96 vs 98 at
    death) — the draft's "late 70s" / "lived into his nineties" hedges are exactly right. ✓

**No web finding contradicts the pack.** Zero pack errors detected.

---

## BLOCKER (2)

1. **Section 2 MEANWHILE ("The flankers' war") — hallucinated synthesis, contradicted by the
   pack itself.** Draft: "After dawn the militia never once stood in the open against the
   regulars, and never needed to." Not in the pack anywhere — and the pack's own narrative
   refutes it twice: at ~9:30 a.m. (well after dawn) ~400 militia advanced **in column, in
   the open**, on the North Bridge (§4d), and Percy's cannon "scattered the **massed** militia
   pursuing through Lexington" (§4e). FIX: delete the sentence (the MEANWHILE reads cleanly
   ending at "...the column bled"), or replace with a pack-supported line such as: "Where the
   flankers could not reach them, the militia fired from walls and woodlots and were gone
   before the column could answer."
2. **Hero caption (DOSSIER heroCaption + IMAGES item 1): "…and from witness interviews" —
   claim absent from the pack, and the draft's FACT LEDGER mis-attributes it as pack-HIGH**
   ("from on-site sketches with Ralph Earl + witness interviews — HIGH"). Pack §8 says only
   "engraved by Amos Doolittle from on-site sketches with Ralph Earl, published Dec 1775."
   The claim is web-verified TRUE (Doolittle and Earl interviewed colonial eyewitnesses in
   early May 1775 — American History Central; Concord sources), so the content is safe, but
   it fails born-from-pack traceability and the ledger entry is false as written. FIX (either):
   (a) add the eyewitness-interview fact to the pack §8 with the web source, keeping the
   caption; or (b) cut "and from witness interviews" from both captions and correct the
   ledger line. Option (a) is better — the fact strengthens the caption and is solid.

## SHOULD-FIX (2)

1. **"Engraved … in December 1775" overstates the pack and the record.** heroCaption says
   Doolittle "engraved his four plates of the day months after the battle, in December 1775";
   credits say "engraving, December 1775." Pack §8 and the web say the plates were
   **published/offered for sale** December 1775 (engraved from Earl's paintings in the
   preceding months). FIX: "published in December 1775" in the heroCaption, and credits as
   "engraving, published December 1775" (or keep the credit's date as plain "1775").
2. **FACT LEDGER claims the Danvers detail is in the prose; it is not.** Ledger: "Danvers
   company 16 miles in ~4 hours — MED ('about four hours' in prose)." No Danvers sentence
   exists anywhere in the draft prose (section 2 says only "fresh companies from Essex
   County"). Either the intended sentence was dropped or the ledger is wrong. FIX: correct
   the ledger to "NOT used," or restore the sentence with its MED hedge. (Ledger accuracy is
   load-bearing for downstream gates.)

## NIT (4)

1. **Locator A caption:** "Smith's column rowed from Boston to Lechmere Point … and marched
   the ~11 miles to Lexington" — the pack's ~11 mi is the Boston–Lexington distance; the
   march started at Lechmere Point (≈10–11 mi). Harmless, but "marched the roughly 11 miles
   to Lexington" reads as from-the-landing. Suggest "marched some 11 miles to Lexington."
2. **Section 2 MEANWHILE:** "The battle was decided a hundred yards either side of the road"
   — "a hundred yards" is invented specificity (pack says only "sweep wide of the road").
   Clearly figurative; fine to keep, better as "decided in the fields either side of the road."
3. **Section 3:** "about one man in seven" for the British casualty rate; pack says ~15%
   (1 in 7 = 14.3%; 273/1,700–1,900 = 14.4–16.1%). Within tolerance — flagging only so nobody
   "corrects" it to one in six later without re-checking.
4. **Inline generic definitions not in the pack** (grenadiers = biggest men for assaults /
   light infantry = fastest for skirmishing; trunnions gloss; deposition gloss; 6-pounder
   gloss; Provincial Congress gloss): all dictionary-level glosses of generic terms required
   by house writing rules, all verified accurate, none battle-specific factual claims. No
   action; recorded so the traceability exception is explicit and bounded.

## VERIFIED-CLEAN NOTES (for the reviser's confidence)

- All five commander cards, the outcome block, all three section blurbs, both PILL targets'
  framing, all image captions/credits, and all three MEANWHILE blocks (minus BLOCKER 1's one
  sentence) trace fully to the pack.
- Date/number drift: none found (every figure in the draft matches the pack digit-for-digit
  or sits inside the pack's instructed range).
- "Six days later Parker swore a deposition" — correct (April 19 → April 25). "Sixty-two
  years after the fact" for Emerson — correct (1837 − 1775). Bunker Hill "just two months in"
  — correct (June 17). Ward "the next day" — correct (April 20).
- The draft's handling of every DISPUTED/MED item (first shot, Margaret Gage, Whittemore
  ages, Smith's wound spot, Percy strength, Heath's role, Buttrick/White/boulder-line
  traditions, Barker/Mackenzie/Smith-report re-verify caveats) follows the pack's
  instructions exactly.

Sources used for spot-checks: [NPS Minute Man — April 19, 1775](https://www.nps.gov/mima/learn/historyculture/april-19-1775.htm) · [NPS — Parker's Revenge report](https://www.nps.gov/mima/learn/news/archaeology-report-released-on-parkers-revenge.htm) · [American Battlefield Trust — Parker's Revenge archaeology](https://www.battlefields.org/learn/articles/archaeology-pinpoints-site-parkers-revenge-near-lexington) · [Friends of Minute Man — archaeology report (PDF)](https://friendsofminuteman.org/wp-content/uploads/2021/09/Parkers-Revenge-Archaeology-Report-Redacted.pdf) · [American History Central — Doolittle engravings](https://www.americanhistorycentral.com/entries/amos-doolittle-engravings-lexington-and-concord/) · [Yale University Art Gallery — Doolittle plates catalog](https://artgallery.yale.edu/collections/objects/2482) · [Paul Revere House — The Real Story](https://www.paulreverehouse.org/the-real-story/) · [Arlington Historical Society — Battle of Menotomy](https://arlingtonhistorical.org/learn/articles/the-battle-of-menotomy/) · [Jason Russell House — Wikipedia](https://en.wikipedia.org/wiki/Jason_Russell_House) · [John Pitcairn — Wikipedia](https://en.wikipedia.org/wiki/John_Pitcairn) · [The American Catholic — Percy letter text](https://the-american-catholic.com/2025/04/19/general-percy-thoughts-on-lexington-and-concord/) · [Samuel Whittemore — Wikipedia](https://en.wikipedia.org/wiki/Samuel_Whittemore)
