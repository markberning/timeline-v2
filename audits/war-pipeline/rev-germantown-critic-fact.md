# FACT-CHECK CRITIC — Battle of Germantown draft (rev-germantown)

*Critic pass 2026-06-11. Draft: `rev-germantown-draft.md` (read in full, 372 lines).
Pack: `rev-germantown-factpack.md` (read in full, 162 lines). 9 independent web
spot-checks run (listed at bottom). In-repo reuse images verified on disk;
Brandywine-final caption precedents verified in `rev-brandywine-final.md`.*

## VERDICT: **PASS-WITH-FIXES**

- **BLOCKER: 2** — both are unflagged out-of-pack facts (the hard rule), both
  web-verified TRUE, both one-word fixes (cut the words or add them to the
  deliberate-gloss ledger).
- SHOULD-FIX: 6 · NIT: 5
- Quote audit: all 12 chained quotes byte-exact as used; all banned quotes absent.
- Myth hygiene: fully compliant (France framing, Stephen at verdict level,
  garrison ~120 everywhere, captured as 400–438 range, Musgrave image warning carried).
- Author's 4 flags: 3 glosses APPROVED; the casualty-arithmetic line APPROVED;
  the LOC-map caption claim **CONFIRMED by direct inspection of the file** (keep it).

---

## BLOCKERS

**B1 · "the largest city in America" — out-of-pack, unflagged (S1 prose, line 188)**
> "…marched on Philadelphia, the rebel capital and the largest city in America."
The pack nowhere says Philadelphia was the largest city in America. It is not one
of the three flagged glosses. Web check: the claim is TRUE (Philadelphia was the
largest city in British North America in 1777), so this is leakage, not error —
but under the zero-hallucination floor an unledgered out-of-pack fact blocks.
**Fix (either):** (a) cut "and the largest city in America"; or (b) add it to the
"Deliberate glosses" ledger as a fourth approved gloss. (b) is fine; the fact is solid.

**B2 · "John" Armstrong — out-of-pack first name, contradicts the draft's own ledger (S1 prose, line 200)**
> "On the far right, Pennsylvania militia under John Armstrong would demonstrate…"
The pack only ever says "Armstrong" (§3.3, §9). The draft's OWN fact ledger (line
303) says "surnames only — first names NOT packed" — and then the prose names him
John. Web check: TRUE (Maj. Gen. John Armstrong Sr. commanded the PA militia), and
the gated `rev-brandywine-final.md` (line 181) already shipped "Pennsylvania
militia under John Armstrong" — so there is even a gated in-corpus precedent.
**Fix (either):** (a) drop "John"; or (b) keep it and correct the ledger line 303 +
add "John Armstrong" to the deliberate-gloss list citing the Brandywine-final precedent.

---

## SHOULD-FIX

**SF1 · Stephen verdict: probable pack transcription error — "behavior" vs "behaviour" (S3 prose line 252; ledger line 329; pack §7.8)**
The draft quotes the verdict byte-verbatim from the pack: "unofficerlike
**behavior**, in the retreat from Germantown, owing to inattention, or want of
**judgement**; and that he has been frequently intoxicated since in the service."
Web check: the Founders Online *General Orders, 20 November 1777*
(founders.archives.gov/documents/Washington/03-12-02-0324) renders it
"unofficerlike **behaviour** … want of judgement" — British spelling. The pack's
mixed "behavior"+"judgement" is itself the tell that one word was silently
Americanized. Founders was unreachable directly from this network (403/timeout),
so this is flagged at high-probability, not certainty. **Fix:** verify the one
word against Founders at integration and amend the quoted verdict (draft + pack)
to "behaviour" if confirmed. PACK ERROR (probable), inherited faithfully by the draft.

**SF2 · Knox caption quotes "a castle" verbatim (IMAGES #12, line 129)**
> "…whose advice not to leave \"a castle\" in the army's rear stopped the reserve…"
The standing rule (pack §7.6 / KU-10, and this brief) is: the castle line is framed
as Knox's argument via Pickering's 1826 memoir, **never verbatim**. The dossier bio
and S2 prose comply; this caption puts quotation marks on the fragment with no
Pickering frame. **Fix:** drop the quotation marks — "whose advice not to leave a
castle in the army's rear…"

**SF3 · Casualty total upper bound understated: "~1,050–1,100" vs pack "~1,050–1,110" (stats line 29; casualties line 37)**
Pack §5: total ~1,050–**1,110**; and the draft's own components top out at
152+521+438 ≈ 1,111. The dossier twice prints "~1,050–1,100."
**Fix:** "~1,050–1,110" in both places. (S3 prose "Call it about 1,100 men" is fine
as-is — pack §10 itself rounds to ≈1,100.)

**SF4 · Locator 2 frame excludes its own Trenton dot (lines 168 + 178)**
Frame lonMax = **-74.85**; the Trenton dot is at lon **-74.743**, i.e. ~0.1° EAST
of (outside) the right frame edge. This is the PACK's own inconsistency (§9 suggests
the same frame and the same Trenton coordinate), inherited. **Fix:** widen lonMax to
~-74.70, or drop the Trenton context dot (the caption already tells the Trenton echo).

**SF5 · Sullivan bio over-attributes the recall to Brandywine (DOSSIER line 43)**
> "…lately so controversial that Congress had moved to recall him after Brandywine turned his flank."
Web check: Congress's move to recall Sullivan (Sept 1777) grew out of the
censure/inquiry over the failed **Staten Island raid** (Aug 1777), with Brandywine
blame piling on after; reading the recall as a Brandywine consequence is the part
the sources don't support. The pack's own phrasing is carefully non-causal: "his
flank was turned at Brandywine three weeks earlier (Congress had even moved to
recall him)." **Fix:** restore the pack's neutral form, e.g. "…exchanged, his flank
turned at Brandywine three weeks before — Congress had even moved to recall him."

**SF6 · Musgrave NYPL print: add a metadata caution for the image agent (IMAGES #4)**
The file is verified live and is the RIGHT man — I inspected the print: it is
engraved "General Sir Thomas Musgrave. Engraved for the Military Panorama by Henry
Richard Cook, from the Picture by L. Abbot, painted in 1786," published 1813 (the
pack itself notes the Abbott oil of our Musgrave, d. 1812). BUT the NYPL/Commons
catalog "Name" field mislinks the sitter to **"Musgrave, Thomas Moore, 1775-1854"**
(a different, non-general Musgrave — bad authority record; the print sits in NYPL's
"The generals of the American Revolution" subcollection). **Fix:** add one line to
IMAGES #4 so the fetch-time verifier trusts the engraved caption + Abbott/1786
provenance and does not bounce the file (or mis-date it) off the wrong NYPL
authority field.

---

## NITS

**N1 · Wayne inline quote terminal punctuation (S3 prose, line 254).** Draft: "…and
flying in all quarters,\" and summed up…" — the pack's quote (§7.4) ends with a
period; the draft swaps it for a comma inside the closing quote. House byte-exact
standard says keep the quote's own punctuation: "…flying in all quarters." Recast
the sentence around it if needed.

**N2 · "they made the famous wrong one" (S2 prose, line 229).** The pack frames the
Chew House halt as "the battle's most argued-over decision" — argued-over, not
settled-wrong. Suggest "the famous one" / "the most argued-over one." (Mood support
exists in pack §1 "the fatal stand," so this is a nit, not an error.)

**N3 · della Gatta "who commissioned it" (hero caption, lines 21/76).** Museum of
the American Revolution says St. George "probably commissioned" the paintings. The
pack asserts "commissioned" flatly, so the draft is pack-compliant — but if the
pack is ever revised, "who had it painted" is the safer verb. No change required.

**N4 · Dossier note "the British line at Mount Airy was driven in two miles" (line 17).**
Compression of two pack facts (line driven in; Sullivan pushed ~2 miles into the
village). Acceptable; "driven in, and the attack pushed two miles into the village"
would be exact.

**N5 · "described to a friend" for John Page (S1 prose, line 204).** Identity kept
at gloss level per the ledger; "a friend" is a mild characterization the pack
doesn't make. Harmless; "described in a letter" would be assumption-free.

---

## AUTHOR FLAGS — ADJUDICATED

1. **Cornwallis "(one of Howe's generals)"** — APPROVED. True; pack has Cornwallis
   garrisoning Philadelphia under Howe.
2. **Vergennes "the French foreign minister"** — APPROVED. True (foreign minister
   1774–1787); needed for the debunk beat to parse.
3. **Lafayette "a young French volunteer, the Marquis de Lafayette"** — APPROVED.
   True (he was 20; a volunteer major general); no age asserted, per the ledger.
4. **Casualty-arithmetic line "lost roughly twice what they inflicted" (S3 line 250)** —
   APPROVED. ~1,050–1,110 vs ~520–535 ≈ 2.0×. Sound derivation from pack totals only.
5. **LOC-map caption "long straight spine = Germantown Road" (IMAGES #2, line 80)** —
   **RESOLVED: CONFIRMED — keep the clause.** I downloaded and inspected the actual
   Commons file (`…LOC gm71000931.jpg`): a long, straight road lined with the
   village's red-marked houses runs through the middle of the sheet (upper-left to
   lower-center), with "Chew's House" labeled on it and GERMANTOWN lettered along
   its course; the title cartouche reads exactly "…where the REBELS were repulsed."
   Optional precision: "running diagonally through the middle." Bonus, optional:
   LOC/Commons attribute the map to **John Montrésor**, Howe's chief engineer — the
   caption could say so, but "period British manuscript map" is verified as-is.

## QUOTE AUDIT (byte-exact against pack §7)

| Quote | Where in draft | Verdict |
|---|---|---|
| Washington→Hancock "The Morning was extremely foggy…" | S2 inline (l.225) | ✅ byte-exact |
| Washington→Hancock "rather unfortunate than injurious" | S3 inline (l.254) | ✅ byte-exact |
| Washington→Page "Unfortunately, the day was overcast by a dark & heavy fog…" | S1 QUOTE (l.206) | ✅ byte-exact incl. "&" and capitals |
| Wayne "Upon the whole it was a Glorious day — …" | S3 QUOTE (l.256) | ✅ byte-exact incl. em-dashes/capitals |
| Wayne "Fortune smiled on our arms.…flying in all quarters." | S3 inline (l.254) | ✅ wording exact; terminal period→comma = N1 |
| Howe "For shame, light infantry! I never saw you retreat before." | S2 QUOTE (l.221) | ✅ byte-exact, short form only; no "Form! form!" |
| Knox "castle" | bio l.47 + S2 l.229 unquoted, Pickering-framed | ✅ compliant; caption slip = SF2 |
| Pickering 1826 "impudent obstacle" passage | not quoted (debate paraphrased) | ✅ fine |
| Stephen verdict | S3 inline (l.252) | ✅ byte-exact to PACK; pack itself probably off by one letter = SF1 |
| Stewart "I engaged the 5th and 38th…" | S2 inline (l.237) | ✅ byte-exact, attributed by name |
| Trevelyan "of great and enduring service to the American cause" | S3 (l.258) | ✅ byte-exact, as Trevelyan |
| Fiske "is said to have been influenced almost as much…" | S3 (l.258) | ✅ byte-exact, hedge kept |

**Banned items — all ABSENT from reader-facing surfaces (grep-verified):**
Hunter "first time we had ever retreated" ☑ · Washington "victory was declaring
herself" ☑ · Wayne "full three hours" variant ☑ · any direct Vergennes utterance ☑
(the "was of small importance…fought at all" fragment appears ONLY inside the
debunk, explicitly as Trevelyan's misattributed prose — exactly the permitted use) ·
`File:MajGenMusgrave.jpg` never used, warning carried in bold ☑ · Chew garrison
"400" never appears (every "400" in the draft is the captured-prisoners figure) ☑ ·
no British-losses-inside-the-house number invented ☑ · Stephen "drunk during the
battle" never asserted (told as the legend, contrasted with the narrower verdict) ☑.

## MYTH-HYGIENE VERDICTS
- **France claim:** compliant everywhere it appears (dossier outcome l.53, S3 l.258,
  MEANWHILE-free). Saratoga explicitly owns the alliance (Oct 17 surrender, Feb 6,
  1778 treaties — both pack-exact; "thirteen days after" is correct arithmetic);
  Fiske quoted inside his own "is said" hedge; persuasion asserted only inside the
  story-as-usually-told, then debunked. "Historians since Trevelyan have credited…
  the impression Saratoga sealed" = pack §10's sanctioned ceiling, not exceeded.
- **Stephen:** verdict-level everywhere; bio (l.46) paraphrases without quotes, S3
  quotes the verdict and explicitly contrasts the "one bottle on one morning"
  legend. "Only Continental major general dismissed by court-martial in the war" —
  pack §4 sanctioned; Wikipedia concurs ("the only Continental Army general
  court-martialed and immediately dismissed"). Lafayette succession web-confirmed.
- **Chew House:** ~120 / "six depleted companies" at every mention (bio, S2 prose,
  blurb, MEANWHILE, IMAGES captions); >50 dead / "over a third" = pack's safe form
  (Wikipedia: 53 dead on the lawn — consistent).

## SURFACE COVERAGE (all checked against pack, no unlisted deviations)
Dossier stats/sides/casualties ✅ (KU-1 hedge carried; Hessians "about two dozen"
with no causal inference) · 8 commander bios ✅ (Knox "overland" gloss = ledgered,
true, accepted; Stephen card correctly imageless) · outcome ✅ · 3 blurbs ✅ · both
MEANWHILE blocks ✅ (Philadelphia: Lancaster→York ✓; Valley Forge: Whitemarsh probe,
Dec 19 ✓) · S1/S2/S3 prose claim-by-claim ✅ except B1/B2/SF5 above (notably: the
draft silently FIXES the pack's internal "half of them militia" slip in §2 by
writing "including 3,000 part-time militia," which matches the pack's own force
figures — right call) · all image captions ✅ (E.L. Henry century-later caveat
present; Sullivan imagined-likeness caveat verbatim per the gated Brandywine final;
Peale 1776/1783 dates match the Brandywine-final born-verified captions; HABS doors
"nearly 250 years" arithmetic ✓; Rothermel treated as nonexistent ✓) · all 7 in-repo
reuse files exist on disk ✓.

## LOCATOR PLAUSIBILITY (all coordinates checked)
Locator 1: Cliveden 40.0461,-75.1822 = exact (6401 Germantown Ave) ✓ · Mount Airy,
Chestnut Hill, Luken's Mill, Wissahickon mouth, Market Square dots all pack-exact
and geographically plausible (Market Square ~0.3 mi east of the true square — fine
at MED/locator scale) · collision marker correctly flagged APPROX and sits
plausibly NE of Cliveden between the Limekiln and Germantown roads · frame contains
every dot ✓ · Philadelphia off-frame arrow direction ✓.
Locator 2: Head of Elk/Elkton, Chadds Ford, Paoli, Philadelphia, Methacton Hill,
Germantown, Valley Forge all plausible ✓ · **Trenton dot falls outside the frame —
SF4** (pack-inherited).

## WEB SPOT-CHECKS RUN (9)
1. **Wikipedia, Battle of Germantown** — casualties (152/521/438 vs 71/448/14),
   11,000 vs 9,000, four columns on the four named roads, 5 a.m. attack, white
   paper in hats, 16-mile march, fog, ~120 garrison, 53 dead at the house, Smith
   died of his flag-of-truce wound → corroborates pack/draft on every point.
2. **Museum of the American Revolution + explorePAhistory** — della Gatta 1782,
   St. George the eyewitness light-infantry veteran who directed/"probably
   commissioned" it, MoAR collection → corroborates (N3 hedge noted).
3. **Founders Online (General Orders, Nov 20, 1777, via search)** — Stephen verdict
   text + date → corroborates content; raised the "behaviour" spelling (SF1).
4. **Wikipedia, Adam Stephen** — only general court-martialed and dismissed;
   "drunk during the battle" is the popular telling → draft's verdict-level
   handling is the more accurate one.
5. **Mount Vernon / search corpus** — Lafayette received Stephen's division →
   corroborates.
6. **RevolutionaryWarJournal + Warfare History Network** — Pickering 1826 memoir,
   Knox's castle argument, Pickering+Hamilton for masking, Washington siding with
   Knox, surrender summons → corroborates the whole Chew House decision beat.
7. **LOC map (direct image inspection of the Commons file)** — caption's
   compositional claim CONFIRMED; Montrésor attribution per LOC metadata.
8. **NYPL Digital Collections + Commons + direct print inspection** — Musgrave
   print verified as the right man (engraved title; after Abbott's 1786 portrait);
   NYPL authority-record mislink found (SF6).
9. **Sullivan recall (American Heritage / myrevolutionarywar / Founders)** — recall
   motion grew from the Staten Island inquiry, not Brandywine → SF5.

**Pack errors found (3, all minor):** the verdict's probable "behaviour"
Americanization (SF1) · the §2 "half of them militia" internal slip (draft already
routed around it) · the Locator-2 frame/Trenton coordinate mismatch (SF4).
