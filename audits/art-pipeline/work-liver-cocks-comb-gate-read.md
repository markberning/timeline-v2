# Gate read — STORYTELLING + LOOKING + CLARITY — *The Liver Is the Cock's Comb* (Gorky, 1944), WORK read

Gate scope: storytelling (primary), looking (concrete prose pointers, no coordinates),
clarity + voice contract. Source of truth = `work-liver-cocks-comb-factpack.md`. I did NOT
edit the draft or src.

## VERDICT: PASS with minor [FIX]es

This is a strong, gated-quality draft. Storytelling lands across all five sections: Gorky
as the Surrealism→AbEx bridge is scoped (never sole-cause), the biomorphic teeming world is
made concrete, the Breton title is handled as a "spell cast from outside" rather than a key,
and the tragic life is kept proportionate and placed AFTER the painting rather than
swallowing it. The looking section uses clean prose pointers with zero coordinates. No
BLOCKERs. The findings below are a handful of [FIX]es (mostly clarity/voice tics and one
small factpack-fidelity tightening) and a few [NICE]s.

---

## 1. STORYTELLING (primary)

Overall: compelling, varied, not listy. The five sections each have a distinct job and a
distinct shape, and the bridge thesis is carried without the biography taking over. The
strongest move is the structural one — putting the genocide/mother loss in Setting "before
the picture, both quietly" and the suicide cascade in Afterlife, so the painting is read as
a *happy* picture in its own bright window, not a trauma caption. That is exactly what the
factpack §8 asks for.

- **[NICE] Setting, ¶1 ("learning out loud" / "scripture").** The apprentice framing is
  vivid and earns the later payoff ("found his own voice"). Good. Keep.

- **[FIX] Setting title vs. Part-A section title drift.** PART A `sections[0].title` is
  "The last Surrealist, the first of the next thing"; the PART B component renders "The
  apprentice who took twenty years to become himself." These are two different titles for
  the same section. Not wrong, but the reader's section nav (Part A) and the chapter header
  (Part B) will disagree. Pick one. Suggest keeping the Part B header (it's the better line)
  and updating Part A `sections[0].title` to match, OR consciously keep them as
  eyebrow-vs-header if the reader chrome supports that — flag to coordinator to confirm
  which field renders where.

- **[NICE] Break section structure (before / break / after) with the Breton quote nested in
  the middle.** Reads well and the "two cautions keep this honest" paragraph scopes both the
  synthesis claim and the title-authorship cleanly. This is the heart of the read and it
  delivers.

- **[FIX] Afterlife, ¶1 — date drift inside the same draft.** Part A `setting.blurb` and
  the Break/Afterlife prose use "1943–47" / "1943 to 1947" for the breakthrough window, but
  the factpack §2/§9 says "1943–47" — consistent there. HOWEVER the Afterlife
  `dateLabel` in Part A is `'1946–today'` while the rendered section eyebrow is "1946–1948"
  and the body opens on "1943 to 1947." Three different ranges in one section's furniture.
  Not a storytelling failure, but tighten so the eyebrow/dateLabel don't fight the prose.
  Suggest eyebrow "1946–1948 · then Buffalo" or similar, and confirm the Part A `dateLabel`
  intent (the '1946–today' likely wants to signal "the fall, then the long afterlife").

- **[NICE] Afterlife close ("The man was gone at forty-four. The field he painted is still
  teeming.").** Lands the tragedy without melodrama and ties back to the title's "growth"
  reading. Strong ending.

- **[FIX] Setting ¶4 mild over-glossing risk.** The Surrealism definition is good and
  needed (reader has zero prior knowledge), but "the parts of the self that reason does not
  police" is doing the same work as "the unconscious mind directly into art, dreams,
  accidents, free association" earlier in the same sentence. Slightly redundant. Trim to one
  formulation. Minor.

No dull/listy/disjointed passages of concern. The prose varies sentence length and avoids
the "list of facts" failure mode the factpack §2 bullets could have produced.

---

## 2. LOOKING

The `LvrLooking` component and the `annotations[]` both deliver the teeming abstraction as
concrete, named, no-coordinate prose pointers. Checked against factpack §5's six points:

- ✓ **Teeming field, not a scene** — "no horizon line, no floor, no sky, no single object"
  → "wide colored field with dozens of soft shapes." Concrete, no coordinates.
- ✓ **Biomorphic, inline-defined** — "biomorphic, a useful word that just means 'shaped
  like living things'" defined AT first prose use in the looking section. Good (but see
  Clarity finding on first-use across sections).
- ✓ **Thin washes / stains / bleeds** — "thin and watery, washed on so the canvas shows
  through, with edges that run, seep and bleed." Concrete surface description.
- ✓ **Drawing over color** — "thin, dark, nervous drawn lines... laid on top of the
  painting rather than filled in by it." Two-layer reading is the best looking move here.
- ✓ **Organic/sexual forms kept indefinable** — petal/flame/limb/organ, "clear allusions
  to female and male genitalia" sourced to Buffalo AKG, "never quite a flower, never quite
  an organ." Faithful to factpack §5.4 and kept ambiguous as instructed.
- ✓ **Bright passages against quieter field** — "a few hot accents, reds and yellows, flare
  out... pull the eye and walk it across the long, wide surface." Good.
- ✓ **No coordinates anywhere** — the `annotations[].where` fields use prose locations
  ("Across the surface", "Throughout", "The whole canvas") not pixel/grid positions, per
  `feedback_no_blind_image_coordinates`. Compliant.

- **[NICE] Looking ¶1 "Read it as a swarm of growing things rather than a place."** Gives
  the reader a concrete way to SEE the abstraction. This is exactly the looking-gate's job.

No looking findings rise above [NICE]. The section makes the abstraction concrete.

---

## 3. CLARITY + VOICE CONTRACT

Swept for: meta-narration, reader-commands, honesty-labels, condescending glosses,
jargon-before-definition, walls of text, literal "—" in rendered strings, `&mdash;` misused
in plain TS string fields.

### Em-dash / &mdash; in TS string fields — CHECK

- **[FIX] Part A `hook` (line 31) contains a literal em-dash.** The `hook` string reads
  "...the Armenian gardens of Gorky's memory turn into one of the seeds of Abstract
  Expressionism." — wait, re-check: the hook does NOT contain "—". Confirmed clean. The
  `annotations` and `stats` strings also use no literal em-dash. **Good — no literal "—" in
  any Part A plain-string field.** (Part B JSX prose is rendered markup, where em-dash is
  fine, but the draft consistently avoids it there too, using commas/"the" instead. This
  matches the art em-dash-restraint backlog item.) Downgrade: this is a PASS, noted for the
  record, not a fix.

- **[FIX] HTML entities inside Part A plain-string fields.** Part A uses curly quotes via
  literal `’` `“` `”` (e.g. `hook`, `heroCredit`, `sections[].blurb`) — those are literal
  Unicode curly chars, fine in a TS string. But verify the reader renders Part A strings as
  PLAIN TEXT (not HTML) — if it does, the literal curly Unicode is correct and there is no
  `&rsquo;`/`&mdash;` entity leakage in Part A. I confirmed **no `&...;` HTML entities appear
  in any Part A string field** (they only appear in Part B JSX, where they render correctly).
  This is the correct split. PASS — noted only because this is the exact axis the gate
  flags; nothing to fix.

  Net: the `&mdash;`/entity-in-plain-string trap is NOT present. The draft got the
  Part-A-plain-string vs Part-B-JSX-entity boundary right.

### Jargon before inline-definition

- **[FIX] "automatism" first appears in Setting ¶4? No — check order.** "automatism" is
  first used and BOLD-defined in `LvrMaking` ¶1 ("**automatism**. The word comes straight
  out of Surrealism, and it means letting the hand move freely..."). It does NOT appear in
  Setting prose. Good. But it DOES appear UNDEFINED earlier in Part A metadata: `hook`
  ("Surrealism's automatic hand"), `sections[].blurb` (making blurb: "Automatism, the free
  unconscious hand"), and `lineage.parents` ("Surrealist automatism"). The making *blurb*
  self-defines ("Automatism, the free unconscious hand"), so the blurb is fine. The `hook`
  says "automatic hand" not the bare term, also fine. **No true jargon-before-definition
  violation** — every bare occurrence is either self-glossed in place or uses the plain
  phrase "automatic/unconscious hand." PASS.

- **[FIX] "biomorphic" first prose use.** Appears in `LvrLooking` ¶2 with an inline
  definition ("a useful word that just means 'shaped like living things'"). BUT it also
  appears earlier, undefined, in `LvrBreak`? Check: `LvrBreak` ¶1 uses "biomorphic dream
  imagery" and ¶2 uses "biomorphic form" — and in the reader's section ORDER, Looking
  (progress 0.56) comes BEFORE Break (progress 0.78), so the definition in Looking precedes
  the bare uses in Break. **Order is correct.** Also defined-in-passing in `lineage` and
  Part A blurbs, but those are furniture, not reading-order prose. PASS — but **[NICE]**:
  consider a two-word gloss the first time "biomorphic" appears in the `looking` BLURB (Part
  A, `sections[2].blurb` says "soft biomorphic shapes" with no gloss) in case a reader hits
  the section nav blurb before the prose. Low priority.

- **[NICE] "cryptogram", "provenance", "Cubism", "Surrealism" all inline-defined** at first
  prose use ("A cryptogram is a coded message...", "provenance (the documented chain of who
  has owned a work...)", "Cubism (the Picasso-and-Braque method of breaking objects into
  faceted planes)"). Reader-has-zero-knowledge rule satisfied. Good.

### Meta-narration / reader-commands / honesty-labels / condescending glosses

- **[FIX] Honesty-label tic — "the honest answer is two things fused" (Making ¶3) and "Two
  cautions keep this honest" (Break ¶6).** Per `feedback_philosophy_voice_plain` /
  `feedback_no_meta_narration`, framing your own prose as "the honest answer" / "keep this
  honest" is a soft honesty-label — it narrates the narration's trustworthiness instead of
  just telling the story. Suggest:
  - Making ¶3: "What those shapes are *made of* is two things fused." (drop "the part
    everyone wants to pin down, and the honest answer is").
  - Break ¶6: "Two things to keep in view, both from the record." or just "Two things from
    the record:" (drop "keep this honest"). Low-severity but it's the exact axis the voice
    linter targets.

- **[FIX] Reader-command density — imperatives "Stand in front of it" / "Stand back" /
  "Read it as" / "look at how it is painted" / "notice how" / "Look for".** The looking
  section leans on second-person imperatives. A few are the natural idiom of a looking
  section and are fine, but the cluster reads as instruction-stack. The voice contract flags
  reader-commands. Suggest thinning: keep one framing imperative per paragraph, convert the
  rest to declaratives. E.g. Looking ¶3 "Now look at how it is painted, because the surface
  tells you how it was made" → "The surface tells you how it was made." And Making's "once
  you know to look" can go. This is a [FIX] not a BLOCKER because the looking genre tolerates
  some "stand back," but the current count is above the voice-contract comfort line.

- **[NICE] No condescending glosses found.** Definitions are matter-of-fact, not "as you
  might imagine" / "simply put" talking-down. Good.

- **[NICE] No "this chapter will show..." / "as we'll see" meta-narration.** The draft
  tells the story directly. The one borderline line — "Two things have to be set down before
  the picture, both quietly, because the picture is not a caption to either" (Setting ¶2) —
  reads as authorial staging but is doing real work (it justifies WHY the biography is brief)
  and is well-earned. Keep. (If trimming, "the picture is not a caption to either" alone
  carries it.)

### Walls of text

- **[NICE] Paragraph lengths are within the mobile-reader comfort band.** Each section is
  3–4 paragraphs, no single paragraph runs past ~6 sentences. No wall-of-text. The Break
  section is the longest (6 prose paragraphs + a blockquote across three sub-headers) but
  the sub-headers (before / break / after) break it correctly. PASS.

---

## FACTPACK-FIDELITY CROSS-CHECK (accuracy floor, within this gate's lens)

- ✓ Title = Breton's, handled as evocative/layered, never decoded. (§8)
- ✓ Genocide/mother kept to one careful mention, framed as "remembered gardens." (§8)
- ✓ Bridge claim scoped as "*a* decisive hinge," synthesis not sole-cause; Surrealist
  dogma-rejection noted. (§8)
- ✓ KEY STATEMENT = Breton's "nature as cryptogram" (Option B), sourced to the Julien Levy
  1945 intro; the unverified "most important paintings made in America" line is NOT used. (§4)
- ✓ Dimensions "6 ft 1 in × 8 ft 2 in" / 186 × 250 cm, ft/in first, "one of his largest"
  not "ten feet wide." (§8) — **[FIX] minor:** Part A `dimensions` says "6 ft 1 in × 8 ft
  2 in" but factpack precise value is "6 ft 1¼ in × 8 ft 2⅜ in." The rounded form is fine
  for display; just confirm the coordinator is OK with the rounding (the `stats` block uses
  "6′1″ × 8′2″" consistently). Not a content error.
- ✓ Rights = in-copyright, shown small under fair use, credited Buffalo AKG + ARS/estate,
  ~2040 term keyed to publication not death. (§7) Afterlife ¶3 states this plainly.
- ✓ "Cubist painting" bare label avoided; treated as biomorphic Surrealist abstraction. (§8)
- ✓ Born-name Vosdanig Manoug Adoian, "ca. 1904," Maxim Gorky kinship flagged false. (§8)
- ✓ Provenance chain artist → Hebbeln → Sidney Janis → Knox gift 1956, accession K1956:4. (§6)
- ✓ Pollock added in the "after" alongside de Kooning — consistent with §3 "after." (Note:
  the `figures[]` and `lineage.children` name de Kooning but not Pollock; Pollock appears
  only in Break prose. Not an error — just flag to coordinator that the cast list omits
  Pollock while the prose credits him. [NICE].)

No factual drift from the factpack detected within this gate's surfaces.

---

## SUMMARY OF FINDINGS

- BLOCKERs: none.
- [FIX] (6): (1) Setting title mismatch Part A vs Part B; (2) Afterlife eyebrow/dateLabel vs
  prose date-range drift; (3) Setting ¶4 redundant Surrealism gloss; (4) honesty-label tics
  "the honest answer" / "keep this honest"; (5) reader-command/imperative density in Looking
  (and Making "once you know to look"); (6) confirm rounded dimensions are intended.
- [NICE] (several): biomorphic gloss in the looking blurb; cast list omits Pollock though
  prose credits him; minor gloss trims. All optional.
- Em-dash-in-plain-string and `&mdash;`-misuse traps: NOT present (the Part-A-plain vs
  Part-B-JSX-entity boundary is correctly handled).
