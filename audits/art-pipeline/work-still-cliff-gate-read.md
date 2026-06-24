# Gate read — STORYTELLING + LOOKING + CLARITY/VOICE — Clyfford Still, *1957-D No. 1* (`still-cliff`)

**Gate:** storytelling (primary) · looking · clarity + voice contract
**Draft:** `audits/art-pipeline/work-still-cliff-draft.md`
**Fact pack:** `audits/art-pipeline/work-still-cliff-factpack.md`

## VERDICT: PASS WITH FIXES

The read is strong and accurate. Story lands across all five sections, the looking
section is concrete and coordinate-free, and the fact handling (date-code vs PH,
the un-spliced quotes, the 1959 vs 1964 gifts, in-copyright rights) is faithful to
the fact pack. **No BLOCKERS.** But the voice contract is breached repeatedly: a
recurring reader-command / stage-direction tic ("Stand in front of it," "Walk up
close," "Look at any place," "Now notice," "Pull back," "Read it against the
canvas") and a cluster of meta-narration ("Now to the paint," "the next, and
central, question," "so we keep them apart"). These are [FIX]-level and should be
cleared before ship per the voice linter doctrine. Details below.

---

## 1. STORYTELLING (primary)

Compelling and well-shaped across the five sections. The throughline — the man who
quit the room, the paint as the same gesture as the life, the sealed estate — is
the spine and it holds. The jagged torn color-fields, Still's fierce independence
and withdrawal, and the uncompromising scale all land.

- **[NICE] Strong hook + close.** The hook (`hook:` field) and the closing paragraph
  ("a wall of torn black… that asks nothing of you and hands you nothing, and waits
  to be stood in front of") are the same image bookending the read — earned, not
  cute. Keep.
- **[NICE] The "field, not an arrangement" beat (making §)** does real conceptual
  work and sets up the break cleanly. No listy passages.
- **[FIX] One slightly forced cross-reference — break §, ¶3** (draft line 190):
  "Where Boccioni and the Futurists had glorified the modern machine, and where the
  European tradition had composed and balanced and resolved, Still rejected both…"
  The Boccioni/Futurist clause is a chain-callback that lands as a non-sequitur
  here — the Futurists weren't the foil this read built (the foil it built is
  Rothko/Newman + the European composition tradition). It dilutes a strong
  paragraph. *Suggested:* cut the Boccioni clause and let the sentence stand on the
  composition-vs-market opposition the section actually earned: "Where the European
  tradition had composed and balanced and resolved, Still rejected both the
  inherited composition and the art market at once, and put a wall of torn black in
  their place."

No dull / listy / disjointed passages flagged beyond the above.

## 2. LOOKING

Passes. The looking section makes the field concrete through prose pointers, with
**no coordinates** and no over-asserted side-placement. All six fact-pack looking
points are present and rendered as things to notice, not a feature list:

- jagged torn color-edges → "the boundary is ragged and irregular, like torn paper
  or the licking edge of a flame" (looking §, "The edges")
- palette-knife impasto → "thick and crusted, the troweled ridges of the palette
  knife standing off the canvas" (looking §, "The surface")
- dominant black field with sudden rifts → "dominated by black… Torn up through it…
  jagged shards of yellow and beige"
- matte / light-swallowing surface → "It is matte, dry, absorbent, so it takes the
  light in rather than bouncing it back"
- the no-image → "no figure, no horizon, no object, no symbol, and a title that is
  only a date"
- towering scale → "roughly nine and a half feet tall by thirteen and a quarter
  feet wide… built to be stood before… rather than looked at"

- **[NICE] Side-placement restraint is correct.** The draft does NOT assert a
  specific side for the largest yellow form in the rendered prose. The fact pack says
  "the largest yellow form runs the full height of the canvas along the right edge,"
  but the looking section keeps it to "the largest of them breaking upward like
  sheets of light pulled apart in the dark" — safe, since the gate brief warns
  against asserting a side unless certain. Good call to soft-pedal it. (The
  `annotations` const echoes the same restraint: "run mostly vertically," no side
  claimed.) No change needed.

- **[NICE]** The metaphor discipline is right: cliffs/bark/wound/lightning are
  explicitly flagged as interpretation ("any of those can help you feel it, but the
  plain fact on the canvas is simply the torn edge"), so the looking stays anchored
  to what is literally there. Matches fact-pack §5 and the annotation hedging.

## 3. CLARITY + VOICE CONTRACT

The substance is clear and jargon is inline-defined on first use (Abstract
Expressionism, abstract/expressionist, zip, palette knife, impasto, field,
provenance — all defined where introduced). But the voice contract has a recurring
breach pattern that the deterministic voice linter would catch.

### Reader-commands / stage-directions [FIX — recurring tic]
The read repeatedly tells the reader what to do with their body/eyes. Per the voice
contract (`feedback_philosophy_voice_plain`, applied across reads) this is the
top-flagged tic. Instances:

- making §, ¶1 (line 131): **"Start with how it is physically made"** — reader-command / meta.
- making §, ¶1 (line 131): **"Walk up close and the surface is built up"** — reader-command.
- making §, ¶4 (line 142): **"stand in front of it and look at what is actually there."** — reader-command.
- looking §, ¶1 (line 154): **"Stand in front of it, and the first fact is the size."** — reader-command.
- looking §, "The edges" (line 162): **"Look at any place where the yellow meets the black"** — reader-command.
- looking §, "The surface" (line 166): **"Now notice what the surface does to light."** — reader-command.
- looking §, ¶ last (line 170): **"Pull back one more time and take in the sum of it."** — reader-command.
- break §, key-statement ¶ (line 201): **"Read it against the canvas and it lines up exactly."** — reader-command.

*Suggested fix:* convert each to a declarative statement of fact. E.g.
"Walk up close and the surface is built up" → "Up close the surface is built up";
"Stand in front of it, and the first fact is the size" → "The first fact is the
size"; "Look at any place where the yellow meets the black, and you will not find a
clean line" → "Nowhere does the yellow meet the black in a clean line"; "Now notice
what the surface does to light" → "The surface does something deliberate with
light"; "Pull back one more time and take in the sum of it" → "The sum of it:";
"Read it against the canvas and it lines up exactly" → "Against the canvas it lines
up exactly." Note: one or two scene-setting "stand before it" gestures are
defensible because *scale* is literally an embodied fact of this work — if any are
kept, keep at most one (e.g. the looking-§ opener), not eight.

### Meta-narration (narrating the read itself) [FIX]
- independent §, ¶4 (line 119): **"So this is the man whose painting we are about to
  read… Now to the paint."** — narrates the structure of the read. *Suggested:* cut
  "Now to the paint"; the sentence "The picture is the same gesture as the life" is
  the real close and stands alone.
- independent §, ¶3 (line 116): **"(A note for later, because the cataloguing of his
  work gets garbled…)"** — narrator housekeeping aside. The PH-vs-date-code
  distinction is worth keeping (it's a fact-pack trap), but the framing "A note for
  later, because the cataloguing… gets garbled" narrates at the reader. *Suggested:*
  drop the meta-frame and state it plainly: "These date-codes are not the same as
  the 'PH' numbers sometimes attached to Still paintings. 'PH' stands for
  PHotograph…".
- looking §, ¶ last (line 170): **"What that refusal of everything else means is the
  next, and central, question."** — meta-narration sign-posting the next section.
  *Suggested:* cut, or replace with a non-structural sentence about the painting.
- break §, key-statement ¶ (line 202): **"…so we keep them apart."** — narrates the
  authoring decision. *Suggested:* "…is a separate statement, made about other work,
  not this same sentence." (Drop "so we keep them apart.")

### Honesty-labels / condescending glosses
- **[NICE] None egregious.** "the cataloguing of his work gets garbled" brushes the
  edge of an honesty-label but is acceptable once de-meta'd per above. No
  condescending glosses found; inline definitions are sized right, not
  over-explained.

### Jargon-before-definition
- **[NICE] Clean.** Every technical term is defined at first use (impasto, palette
  knife, field, zip, provenance, Abstract Expressionism). No jargon used before
  inline-defined.

### Walls of text
- **[NICE] None.** Paragraphs are broken by sub-headers within sections; no
  single-block wall.

### Literal "—" in a rendered TS string / `&mdash;` misuse
- **[PASS] Clean.** The only literal `—` occurrences are in the markdown
  headings/comment block (draft lines 1, 5, 18, 98, 102) — not in any rendered TS
  string field (`blurb`, `note`, `detail`, `hook`, etc.). The single `&mdash;`
  (line 199) sits inside a **JSX text node** (the blockquote attribution span),
  where it renders correctly as an em-dash — that is the allowed usage, NOT a
  `&mdash;` buried in a plain TS string. No fix needed.

---

## SUMMARY OF FINDINGS
- **[BLOCKER]** none.
- **[FIX]** reader-command tic ×8 (convert to declaratives, keep ≤1); meta-narration
  ×4 ("Now to the paint," "A note for later…", "the next, and central, question,"
  "so we keep them apart"); forced Boccioni/Futurist callback in break §.
- **[NICE]** strong hook/close bookend; correct side-placement restraint in looking;
  metaphor-as-interpretation discipline; clean jargon-definition; em-dash handling
  correct.
