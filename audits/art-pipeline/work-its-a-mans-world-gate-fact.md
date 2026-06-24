# FACT-CHECK + LEGEND GATE — Pauline Boty, *It's a Man's World I* (Pop Art work-read)

Gate: FACT + LEGEND. Web-verified against the Boty estate site (paulineboty.org — the artist's own catalogue + figure source key), Wikipedia, TheArtStory, WikiArt. Draft reviewed: `work-its-a-mans-world-draft.md`. Fact pack: `work-its-a-mans-world-factpack.md`.

## VERDICT: PASS WITH FIXES

No [BLOCKER]s. The draft is factually careful and clears every trap the brief flagged (I-vs-II, the "diptych" garble, Ali = Cassius Clay one person, dates not 1963, thymoma not leukemia, in-copyright not pd-us, dimensions ft/in, private collection). Two [FIX] items below correct one estate-attribution mismatch (Thelonious Monk's certainty status) and one image-credit date inconsistency. The rest are [NICE].

---

## CONFIRMED CORRECT (load-bearing claims that web-verify clean)

- **Two separate canvases, NOT a diptych.** Draft (PART A header, `ManThePair`) explicitly states "two separate canvases… NOT a single diptych" and names the garbled secondary source. Verified: paulineboty.org and Wikipedia treat them as two paintings (153×122 cm rectangular *I*; 125×125 cm square *II*); TheArtStory is the source that wrongly calls it "Boty's diptych… left panel nude female imagery… right panel male figures" — exactly the error the draft inoculates against. The draft's correction stands. ✓
- **Dimensions of *I*: 153 × 122 cm → "5 ft 0 1/4 in × 4 ft 0 in" (5′0¼″ × 4′0″).** Verified against paulineboty.org (153 × 122 cm). 153 cm = 60.24 in = 5 ft 0.24 in ✓; 122 cm = 48.03 in = 4 ft 0.03 in ✓. Conversion correct and imperial-only per house rule. ✓
- **Medium: "Oil on canvas with collage" for *I*.** Verbatim match to paulineboty.org ("oil on canvas with collage"). Draft's "oil on canvas with collage… some figures painted, some pasted in as clippings" is accurate. ✓
- **Rights: `in-copyright` (Boty d. 1966), NOT pd-us.** Correct. Boty d. 1 July 1966 → UK life+70 = 2036; US 95-yr term on a 1964 work. Draft's credit line and `rights` field are right; comment "NOT pd-us" present. ✓
- **Location: private collection, no recorded price.** Verified — paulineboty.org marks the works private; no public-museum home or sale price documented. All `price: null` correct. ✓
- **Dates 1964–65 for the pair (NOT 1963).** Verified: *I* = 1964; *II* = "1964/5" (paulineboty.org). Draft uses "1964–65" throughout and never says 1963. The `year: 1965` const field is acceptable for the pair-title (draft leads on *I* = 1964 but titles the read on the pair); stats correctly read "1964–65." ✓ (See NICE-1 on the const `year`.)
- **Ali = Cassius Clay, ONE person.** Draft states he "changed his name from Cassius Clay in 1964… one man, not two." Correct (name change Feb–Mar 1964). ✓
- **Cancer = malignant thymoma, NOT leukemia; d. 1 July 1966 at 28; daughter Katy b. Feb 1966; Royal Marsden.** All verified against Wikipedia. Daughter born 12 Feb 1966 (draft says "February 1966" — fine). Refused abortion + radiotherapy — confirmed. ✓
- **The Nell Dunn quote** — "Lots of women are intellectually more clever than lots of men. But it's difficult for men to accept the idea." — **verified VERBATIM** against TheArtStory, traced to the 1965 Nell Dunn *Talking to Women* interview (MacGibbon & Kee). Wording, attribution, and 1965 publication date all confirmed (paulineboty.org confirms "originally published by MacGibbon and Kee in 1965"). ✓
- **Pop Goes the Easel (1962, Ken Russell, BBC), 16 works, never asked about her own work.** Verified (aired 22 March 1962; she features with Blake, Boshier, Phillips). ✓
- **"Wimbledon Bardot" nickname; Boty 1938–1966.** Verified. ✓
- **The Stupinigi estate is Italian.** Draft says "grand Italian estate" / "grand European estate" — verified: the building atop *I* is the Palazzina di caccia di Stupinigi (Italy). Draft is CORRECT to call it Italian. (NB: the gate brief's mention of "Royal Albert Hall + Wilton House facades" is NOT supported by any source found — the estate key and Wikipedia name only Stupinigi for *I* and the Pantheon at Stourhead for *II*. The draft wisely does not assert Royal Albert Hall / Wilton House. No change needed.) ✓
- **JFK/Zapruder = the 1963 Dallas killing.** Draft's parenthetical "the 1963 killing in Dallas" verified (22 Nov 1963). ✓
- **Certain figures: Einstein, Proust, Lenin, Elvis, Lennon + Ringo Starr, Fellini + Mastroianni, Muhammad Ali, Hermes-and-infant-Dionysus statue, B-52 + X-15, the rose, the JFK/Zapruder frame.** All present on paulineboty.org's "certain" list. ✓
- **Rediscovery: barn on her brother's farm in Kent → David Alan Mellor (c.1990) → Barbican *The Sixties Art Scene in London* 1993 → Dr. Sue Tate scholarship.** Verified against Wikipedia + The Art Newspaper. ✓
- **The break framing** (Nell Dunn 1965, *The Feminine Mystique* "only just reached Britain," feminist Pop before the vocabulary). Supportable; no over-claim. ✓

---

## [FIX] — correct before ship

### FIX-1 — Thelonious Monk is CERTAIN per the estate, not "possibly… other names proposed."
**Where:** `ManLooking` ("a **jazz musician** (possibly **Thelonious Monk**, though other names have been proposed)"); also the PART A `annotations` block ("a jazz musician (possibly Thelonious Monk, though other names are proposed)"); and the PART A `// HANDLED TRAPS` and annotation comment listing the "jazz musician" among the estate-tentative IDs.

**Problem:** paulineboty.org's own source key lists **Thelonious Monk in the CONFIRMED/certain column** (alongside Einstein, Proust, Lenin, Elvis, etc.). It is a *separate, unidentified* "jazz musician [TBC]" entry to which the alternative names attach — the estate note reads "**Sonny Boy Williamson and Lester Young have also been put forward as suggestions**" for that *other, still-unidentified* musician, NOT as competing IDs for Monk. The draft conflates the confirmed Monk with the open second-musician slot and so wrongly demotes Monk to "possibly." The fact pack (§5.6, §8.4) repeated the same conflation; the draft inherited it.

**Corrected text (ManLooking, the tentative-faces paragraph):** keep the matador and Plains Indian as tentative, move Monk to the certain set:
> "A few figures in the field are genuinely uncertain, and the estate that holds the work flags them as such, so it is worth pointing at them gently rather than over-naming them. There is a **matador** (probably the bullfighter **El Cordobés**); a second **jazz musician** the estate has not pinned down (names like Sonny Boy Williamson and Lester Young have been floated); and an American **Plains Indian** in a warbonnet…"

And in the preceding certain-figures register, **Thelonious Monk** may be named as a confirmed face (e.g. add to the "thinkers and stars" sweep, or to the closing "named, certain figures" list). At minimum, **remove Monk from the tentative list.**

Apply the same correction to the PART A `annotations` "grand facades / tentative faces" entry and the two `//` comments that bucket the jazz musician as tentative.

### FIX-2 — Hero credit date vs. const `year` inconsistency (cosmetic but factual).
**Where:** `heroCredit: 'Boty, It's a Man's World I, 1964 …'` (correct — *I* is 1964) vs. the const `year: 1965` and `name: 'It's a Man's World I'`.
**Problem:** The const carries `year: 1965` while the hero credit and the work's actual date are **1964** (*I* = 1964; only *II* is 1964/5). A reader-facing stat could surface 1965 as *I*'s date. The stats array already shows "1964–65 / Painted, the pair," which is fine, but the bare `year: 1965` on a const titled *It's a Man's World I* is internally inconsistent with the verified 1964 date for *I*.
**Fix:** set `year: 1964` (the date of *I*, the lead canvas and hero), keeping the "1964–65" pair language in stats/prose. If the field is deliberately the pair's late bound, add a comment, but 1964 is the safer, source-true value for a const named *…I*.

---

## [NICE] — optional, non-blocking

- **NICE-1 — `acquired` string mild redundancy.** "Held by the estate of Pauline Boty; in a private collection (never publicly sold for a recorded price)" is accurate but slightly belt-and-suspenders; fine to keep.
- **NICE-2 — "the Beatles (John Lennon and Ringo Starr)."** Accurate per the estate key (only Lennon + Ringo are identified, not all four). The draft never claims all four Beatles — good. No change; just confirming the two-member naming is deliberate and correct.
- **NICE-3 — *II* setting.** Draft names "the Pantheon at Stourhead, in Wiltshire" for *II* — verified correct (the brief/fact pack and Wikipedia agree). Nicely specific.
- **NICE-4 — daughter Katy's fate.** Wikipedia notes Katy was later adopted by poet Adrian Mitchell and died 1995; the draft sensibly omits this as out of scope. No action.
- **NICE-5 — "I am the greatest" slogan.** The fact pack lists slogan-text ("I am the greatest," "The creative adventure") on the canvas; the draft references "I am the greatest" in `ManThePair`. Plausibly present (Ali's catchphrase, fitting his inclusion) but only loosely sourced — keep as-is since it is hedged into the men-have-slogans point, not asserted as a transcribed canvas label.

---

## SUMMARY
- **VERDICT: PASS WITH FIXES** — 0 blockers, 2 fixes, 5 nice-to-haves. Every trap the brief named is handled correctly (diptych, I/II, Ali=Clay, 1964 not 1963, thymoma not leukemia, in-copyright, dimensions, private collection, verbatim Dunn quote).
- **FIX-1 (real error inherited from the fact pack):** Thelonious Monk is CONFIRMED by the estate, not tentative — the draft wrongly demotes him; the "Sonny Boy Williamson / Lester Young" alternatives belong to a *different, unidentified* second jazz musician. Move Monk to the certain set.
- **FIX-2:** const `year: 1965` contradicts the verified 1964 date of canvas *I* (and the hero credit's "1964"); set `year: 1964`.
