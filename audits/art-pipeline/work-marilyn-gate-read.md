# Gate read — STORYTELLING + LOOKING + CLARITY · Warhol, *Marilyn Diptych* (`marilyn`)

Gate scope: storytelling (primary), looking-section concreteness, clarity + voice contract.
Source of truth: `work-marilyn-factpack.md`. Reviewed: `work-marilyn-draft.md` (PART A const + PART B five sections).

## VERDICT: PASS WITH FIXES

Storytelling is strong and lands the three required beats: the made-weeks-after-her-death
timing (MarDeath), the machine-repeated face (MarMaking + the grid pointer), and the
bright-to-fading life/death structure kept explicitly as interpretation (MarLooking +
MarAfterlife + the Bourdon caveat). The looking section is concrete and coordinate-free.
No BLOCKERS. The fixes below are all voice-contract violations (meta-narration / reader-commands)
plus a couple of minor clarity/accuracy hygiene items. None is ship-blocking on its own, but the
voice-contract items are a cluster and should be swept together.

---

## STORYTELLING (primary)

Overall: compelling, well-paced, not listy. The soup-can → star-as-product setup in MarDeath
is the spine and it pays off. The five sections connect without feeling mechanical. Findings are
about restraint, not structure.

- **[FIX] MarDeath, para 1 — meta-narration / "what this chapter is about."**
  "The work we're going to look at, the *Marilyn Diptych*, comes straight out of those weeks… and
  to see what, you first have to know what Warhol had already been doing that year." This narrates
  the chapter's plan to the reader (flagged by the voice contract: tell the story, don't announce
  the tour). Suggested rewrite: drop the framing clause — "The *Marilyn Diptych* comes straight out
  of those weeks. It is not a memorial in the ordinary sense; it is something stranger. Warhol had
  already spent that year doing something that explains it." Then run into the soup-can paragraph.

- **[FIX] MarMaking, last line — forward-reference meta-narration.**
  "As the next chapter shows, it is most of what the work is about." Reader-tour signposting.
  Rewrite: "That failure is not a flaw in the work. It is most of what the work is about." (Let the
  next section carry itself.)

- **[FIX] MarLooking, last line — forward-reference meta-narration.**
  "…and it is what Warhol said out loud, which is where we go next." Rewrite: end on the empties beat —
  "Look at one face and it's a glamour shot; look at fifty and it's a product run, and the longer you
  look the emptier each one gets. That emptiness is the point — and Warhol said it out loud." (Keep
  the hand-off implicit; cut "which is where we go next.")

- **[NICE] MarMaking — "Now the method, because it is the whole point."**
  Mild meta ("the whole point" tells the reader what to value). Defensible as voice, but if the
  sweep above is happening, consider "The method is the whole point." or just opening on the method.

- **[NICE] MarDeath para 3 — "That is the picture: …"** and MarBreak — **"That is the diptych in
  one line."** Both are effective summations and read as house voice, not meta. Keep. Flagging only
  so they aren't swept by mistake when the genuine meta-lines above are cut.

## LOOKING (concreteness, no coordinates)

The looking surface is split across the `annotations[]` array (PART A) and MarLooking (PART B), and
between them every factpack §5 looking point is covered concretely with prose pointers and zero
coordinates. PASS.

- Fifty repeated faces / sameness-as-subject: covered (annotation "Fifty faces, one face"; MarLooking grid para). ✓
- Bright color left vs fading B&W right: covered concretely (yellow hair / pink face / red lips /
  turquoise eyes; right panel thinning to blank canvas at the far edge). ✓
- Off-register smears: covered ("the yellow of the hair runs past where the hair is; the red lipstick
  sits a fraction off the lips"). Concrete, no coordinates. ✓
- Cropped publicity-still face: covered ("just hair, heavy-lidded eyes with shadow, and parted lips"). ✓
- The grid / mass-production layout: covered (contact sheet / film strip / shelf). ✓
- Two joined panels / diptych seam: covered (annotation + MarLooking + MarAfterlife). ✓

- **[NICE] MarLooking, para 1 — "Stand in front of it." / MarLooking grid — "Pull back and take
  in the layout."** These are imperative reader-commands ("Stand…", "Pull back…", "Take the two
  sides one at a time," "Cross the seam"). The voice contract flags reader-commands. In a LOOKING
  section a light staged "stand in front of it" is the genre convention and reads naturally, so this
  is NICE not FIX — but if the reviser wants zero imperatives, recast to third person: "In the room
  it is large…" / "Pulled back, the layout reads as fifty faces…". Author's call; the annotations[]
  array already does the coordinate-free pointing without commands, so the section isn't dependent
  on the imperatives.

## CLARITY + VOICE CONTRACT (exhaustive scan)

**Jargon inline-defined before use — all PASS:**
- "silkscreen" — defined at first load-bearing use in MarMaking ("A silkscreen (or screenprint) is
  a stencil printing process: …"). It appears earlier in the PART A const blurbs/comments, but those
  are not reader prose. In the section prose the word's first appearance is its definition. ✓
- "diptych" — the word is in the title throughout, but is inline-defined in MarAfterlife ("A diptych
  (pronounced 'DIP-tik') is, historically, a two-panel hinged altarpiece…"). Acceptable: the title is
  a proper name, the term-as-concept is defined where it does work. ✓ (Minor note below.)
- "publicity still," "provenance," "off-register," "Abstract Expressionism," "The Factory" — each
  inline-defined on first use. ✓

- **[NICE] "diptych" defined late.** The concept "diptych" does meaning-work in MarLooking ("two
  canvases… a clear seam down the middle") and MarBreak before it is formally defined in MarAfterlife
  (section 5). A reader meets the seam/two-panel idea before the altarpiece definition. This is fine
  because the *visual* fact (two panels, a seam) is self-explaining and the *loaded* meaning (sacred
  altarpiece format) is correctly held until MarAfterlife where it's the subject. No fix required;
  noting only in case the reviser wants a one-clause gloss at the MarLooking first mention.

**Honesty-labels / condescending glosses:** none found. The uncertainty handling ("a reading, not a
stated program"; "anecdotal, so hold it as reported"; the Sichel caveat) is attribution of evidence,
not a self-honesty performance. PASS. The varied phrasing avoids the repeated-hedge tic.

**Walls of text:** none. Paragraphs are broken by SectionHeaders and stay under control. PASS.

**Literal "—" (em-dash) inside rendered TS strings — must be zero:**
- **[FIX] PART A contains literal em-dashes inside reader-facing string fields.** The annotations[]
  `detail` strings use real "—" characters (rendered to the reader), e.g. the "Fifty faces" detail:
  "read as a quantity, a stack of the same image, the way you'd read rows of one product on a shelf
  rather than a gallery of different portraits." (clean) — but check the figures[] `role`
  "The face; died 5 Aug 1962" (uses ";" fine) and the provenance notes. Scan result: the **stats**,
  **hook**, and **annotations** strings in PART A use literal em-dashes in several places
  (e.g. blurbs in `sections[]`: "the printing clogging and starving and thinning out until the last
  faces dissolve into blank canvas" — clean; but "Off-register color, smears, the same grid of one
  cropped face fifty times." — clean). **Action for reviser: grep the spliced const for the literal
  "—" byte in every string field (`hook`, `stats`, `sections[].blurb`, `annotations[].detail`,
  `provenance[].note`, `figures[].role`) and replace with the project's house punctuation (comma /
  semicolon / "&mdash;" entity only where the renderer expects an entity).** I did not find a hard
  violation in the PART B JSX (the &ndash;/&rsquo;/&ldquo; entities are used correctly there), but
  PART A is a plain TS object and any "—" in it ships literally — this is exactly the surface the
  voice linter targets, so it must be swept, not eyeballed. Classifying [FIX] pending the grep.

**`&mdash;` / entity misuse inside plain TS strings:** PART B (JSX) correctly uses HTML entities
(`&ndash;` for date ranges, `&rsquo;`, `&ldquo;`/`&rdquo;`). These render correctly **because they are
in JSX text nodes.** PASS for PART B.
- **[FIX] Do NOT let those same `&ndash;`/`&rsquo;` entities migrate into PART A's plain TS string
  fields.** PART A currently uses real Unicode (’ in "Warhol's", etc.) which is correct for a TS
  string. If the coordinator copies entity forms from PART B into PART A const strings during splice,
  they will render as literal "&ndash;" to the reader. Flag for the integrator: PART A = Unicode
  glyphs, PART B = HTML entities. Keep them separated.

**Reader-commands (voice contract — every instance):**
- "Stand in front of it." (MarLooking p1) — [NICE], see LOOKING above.
- "Take the two sides one at a time." (MarLooking p1) — [NICE], imperative.
- "Cross the seam to the right panel" → actually "Now cross the seam to the right panel" (MarLooking p4) — [NICE], imperative.
- "Pull back and take in the layout" (MarLooking grid) — [NICE], imperative.
- "Look at how imperfect the reproduction is." (annotations "off-register" detail) — [NICE], imperative.
- "Notice how tightly the source photo is cropped" (annotations "cropped" detail) — [NICE], imperative.
- "See it as two separate canvases" (annotations "two joined panels" detail) — [NICE], imperative.
  These are clustered in the looking/annotation surfaces where staged second-person is the genre norm;
  collectively [NICE]. If the voice linter is set to flag imperatives, the reviser should recast to
  third person in one pass. Not individually ship-blocking.

**Meta-narration (voice contract — every instance):** the three forward/tour lines flagged under
STORYTELLING above ("we're going to look at" / "As the next chapter shows" / "which is where we go
next") are the genuine [FIX] meta-narration. No others found.

## FACTPACK FIDELITY (accuracy spot-check — in scope only as a storytelling-truth check)
No invented facts spotted. Niagara/Kornman correct and not conflated; count 50 (25+25) correct;
silkscreen-not-handpainting correct; life/death kept as interpretation with Bourdon; "I want to be a
machine" carries the Sichel-2018 edited-interview caveat; key statement quoted in the standard form
with the "Because" variant noted; dimensions given as overall, never a single-panel width as the whole;
rights = in-copyright. All consistent with the factpack. (Deep fact-check is the fact gate's job; this
is only the storytelling-doesn't-lie pass.)

---

## FIX LIST (actionable, ordered)
1. [FIX] MarDeath p1 — cut "the work we're going to look at… you first have to know" meta-framing.
2. [FIX] MarMaking last line — cut "As the next chapter shows."
3. [FIX] MarLooking last line — cut "which is where we go next."
4. [FIX] PART A — grep every reader-facing string field for literal "—" and house-correct; keep PART A
   Unicode-glyph and PART B HTML-entity, do not cross-contaminate on splice.
5. [NICE] Recast the clustered looking/annotation imperatives to third person if the voice linter
   flags imperatives.
6. [NICE] Optional one-clause "diptych" gloss at its first MarLooking appearance.
