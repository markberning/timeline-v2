# Gate read — STORYTELLING + LOOKING + CLARITY — *The Harlequin's Carnival* (Miró)

Gate over `audits/art-pipeline/work-harlequin-draft.md`, scoped against the factpack.
Three axes: STORYTELLING (primary), LOOKING, CLARITY + VOICE CONTRACT. No edits made.

## VERDICT: PASS with minor fixes

The draft is strong on all three axes. The teeming dream-room lands, the hunger-
hallucination origin is the spine of the making section and pays off, and the
biomorphic world reads playful, not clinical. The looking section steers the eye
across the crowded canvas in prose with no coordinates. No BLOCKERs. A cluster of
voice-contract reader-commands and a couple of honesty-labels are the only real
findings, plus a small accuracy-touching caption claim to confirm. None are
ship-blocking; all are [FIX]/[NICE].

---

## 1. STORYTELLING (primary) — PASS

Compelling across all five sections. The radishes detail planted in Paris ("Hold
that fact, because it is going to climb straight into the painting, hole and all")
and paid off in the harlequin's belly-hole is the draft's best storytelling move —
a real through-line, not a list. The making section's two-correction structure
(hunger-not-dream, then looks-automatic-was-composed) is genuinely interesting and
true to the factpack's central trap (§8). The break section earns "from the still
life on the table to the dream in the air." The afterlife lands the Room of
Contemporary Art Fund as a small piece of art history rather than a dry accession
note. No dull/listy/disjointed passages of consequence.

- **[NICE]** `HrqMaking`, the fourth paragraph ("One more guard against over-telling
  it…"). This is the third consecutive caveat paragraph in the section (hunger-not-
  dream caveat, composed-not-automatic caveat, then this don't-overstate caveat). It
  is accurate and factpack-faithful (§8), but back-to-back-to-back hedging slightly
  drags the momentum at the section's end. Consider compressing it into one or two
  sentences folded onto the prior paragraph rather than a standalone fourth beat.
  Storytelling-only note; not required.

- **[NICE]** `HrqLooking` closing line and `HrqBreak` both reach for "weightless party
  / boiling party" imagery, and `HrqAfterlife` closes on "the party never really
  ended." The party motif is good but used four+ times across the read; trimming one
  instance would keep it fresh. Optional.

---

## 2. LOOKING — PASS

The looking section (`HrqLooking`) is navigable for a busy image and hits every real
feature the prompt and factpack §5 name, with prose pointers and zero coordinates:

- **Moustached harlequin with pipe** — "Center-left stands the harlequin… tall and
  guitar-shaped," with red/blue face, diamond tunic, moustache, pipe, belly-hole.
  Steered by relative position + shape, not coordinates. Good.
- **Ladder with eye and ear** — "To the left, a ladder stands on its own… carries a
  single eye and a single ear." Good.
- **Cat and ball of yarn** — "Lower right, a cat-like sprite bats at a round,
  threaded shape." Good.
- **Musical notes** — "Through the whole upper room drift small black musical notes."
  Good.
- **Window with black triangle and globe** — "Upper right, an opening reads as a
  window… a dark triangle and a round dark sphere," with the Eiffel/globe readings
  correctly hedged as "commonly read as," matching factpack §5.5 and §8.
- **Swarm of creatures** — "Everything left over teems… hybrid sprites… insects,
  fish, and winged things."

The section is broken into sub-headed beats (the host / the objects that came alive /
the window and the crowd), which makes a crowded canvas walkable. The PaintingFigure
of the whole canvas is placed mid-section so the reader can match prose to image. No
blind crops or pins (complies with the no-blind-coordinates rule).

- **[FIX]** `HrqLooking`, PaintingFigure `caption` vs `rights` split. The `rights`
  prop text says "still in copyright in many countries" — accurate per factpack §7 —
  but verify this renders in a rights/credit slot and not as reader-facing caption
  body. Content is correct; just confirm placement so the copyright hedge does not
  read as part of the artwork caption. (Placement check, not a wording change.)

---

## 3. CLARITY + VOICE CONTRACT

No jargon-before-definition issues: "automatism," "biomorphic," "harlequin,"
"carnival," "commedia," "Surrealism," and "Cubism" are each inline-defined on first
use. No walls of text (longest paragraphs are reasonable). Em-dash check: the prose
is in TSX/JSX text nodes (not plain TS string fields), and dashes render via
`&ndash;`/`&mdash;` entities — no literal "—" inside a plain TS string field, no
misused `&mdash;` in a string field. Date range "1924&ndash;25" handled correctly.

### Reader-commands (VOICE CONTRACT — flag every)

- **[FIX]** `HrqParis` ¶1: "**Hold that fact**, because it is going to climb straight
  into the painting." Reader-command. (It is also the draft's best setup line, so
  rewrite rather than cut — e.g. "That fact climbs straight into the painting, hole
  and all" — to keep the payoff without commanding the reader.)
- **[FIX]** `HrqMaking` ¶3: "**Read that carefully**, because it does two jobs at
  once." Reader-command. Suggest: "The line does two jobs at once."
- **[FIX]** `HrqMaking` final ¶: "So **keep the two halves apart** and you have the
  whole truth of how it was made." Reader-command. Suggest: "Held apart, the two
  halves give the whole truth of how it was made."
- **[FIX]** `HrqLooking` ¶1: "**Start with the size**, because it surprises people."
  Reader-command. Suggest: "The size surprises people."
- **[FIX]** `HrqLooking` ¶1: "(**You may see** the width given as 90.5 centimeters
  elsewhere…)". Borderline reader-address; the parenthetical is fine in substance
  (factpack §8 dimensions trap) but consider "The width is sometimes given as 90.5
  centimeters elsewhere; the museum that owns it says 93." Lower priority.
- **[FIX]** `HrqLooking` ¶2: "**Let's pick out** the ones worth finding." First-person-
  plural reader-command. Suggest: "A few are worth finding." Also `HrqBreak` ¶1:
  "**stand it next to** what came before it" — softer, but same family ("To feel why
  this little room mattered, set it beside what came before").
- **[NICE]** `HrqLooking` harlequin beat: "Look at his stomach and **you'll find** a
  dark hole." Mild reader-direction; acceptable as looking-section pointer, but could
  be "A dark hole is punched through his stomach."

### Honesty-labels (VOICE CONTRACT — flag every)

- **[FIX]** `HrqMaking` ¶1: "Here is the part **everyone gets slightly wrong**, and
  Miró himself was at pains to correct it." Honesty/meta framing about the discourse.
  The correction itself is good and factpack-grounded (§8); just open on the substance:
  "Miró himself was at pains to correct the easy story…"
- **[NICE]** `HrqBreak` ¶3: "That is the break, **stated plainly**." Borderline self-
  labeling. Minor; the block's job is to state the break, so saying so is redundant.
  Could drop "stated plainly."

### Meta-narration / condescending glosses

- **[NICE]** `HrqParis` ¶2 and `HrqBreak` ¶1: "(the broader story is told in the
  Surrealism overview one level up in this app)" / "(its story is two levels up in
  this app)." These are navigational meta-references to app structure. Useful as
  cross-level signposting, but they narrate the app rather than the history. If the
  reader/nesting layer already surfaces parent links, consider trimming to keep the
  prose in-world. Judgment call for the coordinator; not blocking.
- No condescending glosses found — inline definitions ("meaning life-shaped,"
  "the museum's catalogue tag") are tight and non-patronizing.

### Accuracy-touching note (within this gate's remit to flag)

- **[FIX]** `HrqLooking` PaintingFigure `caption` reads "1924&ndash;25" (correct), but
  the `HARLEQUIN` const sets `year: 1925`. Factpack §1/§8 is explicit that the date is
  the range **1924–25** and warns against clipping to a single clean year. The body
  prose and stats correctly use "1924–25," so the lone `year: 1925` field is an
  inconsistency. Defer the const-field fix to the fact/clarity reconcile, but flag it
  here as a voice/consistency mismatch the reader could notice (hero credit says
  1924–25, metadata says 1925).

---

## Summary of findings
- BLOCKER: none.
- FIX: 6 reader-commands, 1 honesty-label, 1 caption/rights placement check,
  1 year-field consistency mismatch (1925 vs 1924–25).
- NICE: caveat-stacking in `HrqMaking`, party-motif repetition, app-structure meta-
  references, two soft self-labels.
