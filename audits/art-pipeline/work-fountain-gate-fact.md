# GATE — FACT-CHECK + LEGEND · Duchamp, *Fountain* (1917)

**Gate:** fact-check + legend (art work-read, Dada)
**Target:** `audits/art-pipeline/work-fountain-draft.md` (PART A const + PART B prose)
**Method:** every load-bearing claim independently web-verified (Tate, Wikipedia, Wikimedia Commons file page, the *Blind Man* transcription PDF at mariabuszek.com, Burlington Magazine reporting via Art Newspaper / Atlas Press).

## VERDICT: CLEAN

**0 BLOCKER · 0 FIX · 5 NICE**

The draft is accurate and well-sourced across both the PART A const and the PART B prose. Every trap flagged in the fact pack is handled correctly: suppressed-not-rejected (no jury), original lost (not smashed), the editorial ran unsigned (not "by Duchamp"), the Baroness theory presented as a live contested debate, dimensions named as a replica's in ft/in, and `rights:'pd-us'` correct. No fix is required to ship. The NICE items below are optional polish only.

---

## VERIFIED LOAD-BEARING CLAIMS (all confirmed)

**PART A const**
- `year: 1917`, `artist: Marcel Duchamp`, `movement: Dada` — confirmed.
- Medium = readymade porcelain urinal, signed "R. Mutt 1917"; original lost; museum pieces are later authorized replicas — confirmed (Tate; Wikipedia; Cabinet).
- `dimensions: '1 ft 2 in × 1 ft 7 in × 2 ft (Tate replica, 2/8)'` — confirmed. Tate T07573 is 360 × 480 × 610 mm = 14.2 × 18.9 × 24 in ≈ 1 ft 2 in × 1 ft 7 in × 2 ft. Correctly named as a replica, in ft/in only. ✓
- `location` / `acquired` — Tate holds Schwarz edition 2/8 (1964), **purchased 1999 with assistance from the Friends of the Tate Gallery, accession T07573** — confirmed verbatim against Tate. ✓
- `heroCredit` / hero = Stieglitz's 1917 photograph, the only surviving image, published in *The Blind Man* no. 2 — confirmed (Commons file page; Wikipedia).
- `rights: 'pd-us'` — **correct.** Commons file page carries a public-domain-in-the-US tag (published before 1931 / 1917 publication in *The Blind Man* no. 2). ✓
- `heroAspect: 0.77` — math direction correct (portrait). The actual Commons master is 1,416 × 1,849 (W/H ≈ 0.766 ≈ 0.77); the draft's comment cites 1280 × 1671 (a thumbnail rendition, same ratio 0.766). Ratio is right; see NICE-2.
- Provenance entries (1950 Janis/Philadelphia; 1963 Linde/Stockholm signed 1964; 1964 Schwarz edition of 8 + proofs, ~17 versions; 1999 Tate 2/8; 5/8 sold at Sotheby's 1999) — all confirmed against Cabinet + Tate. ✓
- Stats (1917 original lost; porcelain urinal readymade; replicas only) — confirmed.

**PART B prose / captions / annotations / quote**
- Society of Independent Artists, inaugural show, Grand Central Palace, opened **10 April 1917**, no jury / no prizes, fee **$6 ($1 initiation + $5 dues)** — confirmed (Wikipedia; *Blind Man* opening line).
- **Suppressed, not rejected** — correctly handled; the show had no jury and the board hid it behind a partition. ✓ (the headline trap, passed.)
- Duchamp on the board / hanging committee, **resigned in protest** — confirmed (Wikipedia: "Duchamp resigned from the Board... in protest").
- The "Mutt" pun: "Mutt comes from Mott Works" / **J. L. Mott Iron Works** / **Mutt and Jeff** comic / **"R." = Richard, French slang for a moneybags** — confirmed verbatim sense against Wikipedia's Duchamp quote ("Richard is French slang for money-bags"). The draft also correctly hedges that whether it really came from Mott is disputed. ✓
- Original lost, "probably **thrown out as rubbish**," attributed to biographer **Calvin Tomkins** — confirmed (Wikipedia, citing Tomkins). Draft wisely does NOT specify "by Stieglitz" (Wikipedia's Tomkins wording names Stieglitz; leaving it unattributed is the safer claim, not an error). ✓
- Stieglitz (1864–1946), photographed at **291**; the only surviving image — confirmed.
- Stieglitz quote **"an oriental look about it, a cross between a Buddha and a Veiled Woman"** — confirmed verbatim (Wikipedia, Stieglitz letter 23 Apr 1917). ✓
- **Marsden Hartley's *The Warriors* (1913)** hanging behind — confirmed (Philadelphia Museum of Art; multiple sources).
- **"The Richard Mutt Case"** editorial: ran **unsigned** in *The Blind Man* no. 2 (May 1917), edited by **Duchamp, Henri-Pierre Roché, Beatrice Wood**; draft explicitly notes it is NOT "by Duchamp" and credits the editorial collective / Wood — **handled exactly right.** ✓ (the second headline trap, passed.)
- **The verbatim quote** — checked word-for-word against the mariabuszek.com transcription PDF. Every line matches, including "CHOSE" capitalized, "—created a new thought," and the closing "her plumbing and her bridges." The draft renders the numbered points as "1." / "2." where the PDF shows "1)" / "2)"; the fact pack expressly flags this as an accepted reproduction variant — not an error. ✓
- **Baroness Elsa von Freytag-Loringhoven (1874–1927)** theory: attributed to **Glyn Thompson** and **Julian Spalding**; rests on the **11 April 1917 Suzanne letter** ("one of my female friends"), handwriting, and Philadelphia presence; **contested in *The Burlington Magazine* 2019** (Bradley Bailey; Dawn Adès & Alastair Brotchie, "Marcel Duchamp was not a thief"), citing mistranslation, a contemporaneous account of Duchamp sending it in, and the Baroness never claiming it; documentary weight currently with Duchamp. **Presented as a live, unsettled debate, dismissed in neither direction — exactly per the fact pack's instruction.** ✓ (the third headline trap, passed.)
- 2004 poll: most influential 20th-century artwork, 500 art-world professionals, ahead of Picasso — confirmed (Wikipedia: Dec 2004, 500 British art-world professionals; Picasso's *Demoiselles* second). See NICE-1.

---

## NICE (optional polish — none ship-blocking)

- **[NICE-1]** The 2004 poll respondents were specifically **British** art-world professionals (and the runner-up was Picasso's *Les Demoiselles d'Avignon*). The draft's "five hundred art-world figures... ahead of Picasso" is accurate but under-specified. Optional tightening in `FntAfterlife`:
  - From: `In a 2004 poll, five hundred art-world figures named it the most influential artwork of the twentieth century, ahead of Picasso.`
  - To: `In a 2004 poll, five hundred British art-world professionals named it the most influential artwork of the twentieth century, ahead of Picasso’s Les Demoiselles d’Avignon.`

- **[NICE-2]** `heroAspect` comment cites `1280 × 1671`; the Commons master is `1,416 × 1,849`. Both give W/H ≈ 0.766, so the value `0.77` is correct — only the comment's pixel figures describe a thumbnail, not the master. Optional: update the comment to `1416 × 1849 → W/H ≈ 0.77` for accuracy. No behavioral change.

- **[NICE-3]** Tomkins's actual phrasing (Wikipedia) is that the original "was thrown out as rubbish **by Stieglitz**." The draft leaves the agent unstated, which is the safer claim and fully defensible — flagged only so the omission is a known, deliberate choice, not an oversight.

- **[NICE-4]** Provenance year `1953` replica (Paris) is in the fact pack but intentionally omitted from the draft's provenance list; the "~17 versions" total still holds. Fine as-is; noted for completeness.

- **[NICE-5]** Annotation "R. Mutt 1917" placement says "toward the lower left as photographed." Sources place the signature on the outer rim/flange; "lower left as photographed" is the standard reading and matches the fact pack's looking point — no correction, just confirming it is sourced, not invented.

---

## TRAP CHECKLIST (fact pack §8) — all cleared
- "Smashed/destroyed by the committee" — avoided; draft says lost / thrown out as rubbish. ✓
- "Rejected by jury" — avoided; draft is emphatic that there was no jury and it was suppressed. ✓
- "The Baroness made it" as fact — avoided; presented as live debate. ✓
- "Came from J. L. Mott" as fact — hedged ("Duchamp said... whether it really came from Mott is disputed"). ✓
- "Editorial written by Duchamp" — avoided; explicitly unsigned, collective, Wood credited. ✓
- "Original is in [museum]" — avoided; every museum piece named a replica. ✓
- Dimensions as a single fixed number — avoided; named as the Tate 2/8 replica's, in ft/in. ✓
