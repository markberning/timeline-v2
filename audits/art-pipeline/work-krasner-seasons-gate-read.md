# GATE READ — Storytelling + Looking + Clarity/Voice
## Lee Krasner, *The Seasons* (1957) · work-read `krasner-seasons`

**Gate:** STORYTELLING (primary) + LOOKING + CLARITY/VOICE CONTRACT
**Source draft:** `work-krasner-seasons-draft.md` · **Fact pack:** `work-krasner-seasons-factpack.md`
**Reviewer scope:** judge only; no edits to draft/src; no commit.

---

## VERDICT: **PASS with FIXES** (0 BLOCKER · 3 FIX · 4 NICE)

The draft is strong storytelling. All five sections land, the mural-scale-in-Pollock's-barn
leap is dramatized without collapsing Krasner into a grieving widow (the draft explicitly
refuses that reading twice, in proportion, exactly as the fact pack's §8 trap demands), the
pink/green life-affirming forms are made concrete, and the "fight for her own standing" runs as
a through-line from the 1949 "Mrs. Jackson Pollock" billing to the "damn good painter" pull. The
LOOKING section makes all six fact-pack pointers concrete in prose with no coordinates. No voice-
contract BLOCKERs. The FIX items are localized clarity/voice tics, not structural problems.

---

## 1. STORYTELLING (primary)

Overall: compelling, well-paced, five distinct movements (already-a-painter → the crash/empty
studio → the making + Earth Green → looking → the break → afterlife). The widow-trap is handled
exactly right — named as factual context, then explicitly resized ("The lazy reading… is too
small"). No listy/dull stretches in the prose chapters.

- **[NICE] Two near-identical "lazy/grieving widow" rebuttals.** `KraBarn` final para ("The lazy
  reading of what came next is 'the grieving widow paints her way through her loss,' and that
  reading is too small…") and the LOOKING para ("what the canvas is overwhelmingly *about* is not
  grief") and the BREAK ("answered the worst year of her life") all relitigate the same point.
  This is intentional reinforcement and stays in proportion, so it's not a violation — but the
  *third and fourth* restatements risk over-insisting. Consider trimming the LOOKING-section
  "Against the plain fact of Pollock's death the year before" clause, since BARN already did this
  work and LOOKING should stay on the canvas. Storytelling, not accuracy.

- **[NICE] The BREAK's "Three things, all at once" is the one lightly listy beat.** "First… /
  Second… / Third…" with bolded leads is a structured list dressed as prose. It reads fine and the
  fact pack itself enumerates the break as three points, so this is acceptable — but it's the
  flattest passage in an otherwise rolling read. Optional: fold the three into connected prose so
  the break feels argued rather than bulleted.

- **Standing fact-handling, all correct (no finding):** date held firmly at 1957 with the explicit
  "do not let the death-year pull it back" guard; medium keeps "oil and house paint"; Earth Green
  vs. Night Journey kept distinct; dimensions stated as true ~17 ft 0 in (not "nearly"); acquisition
  year flagged as inference; both quotes carried as reported/attributed with the AAA-403 caveat
  surfaced in-prose. Storytelling never trades accuracy for drama.

---

## 2. LOOKING

The LOOKING chapter (`KraLooking`) makes the 17-foot field concrete via prose pointers, no
coordinates. Coverage of the six fact-pack looking points:

- Swelling pink/rose forms → ✓ ("rolling field of swelling pink and rose forms… off-white bulbs… color of bodies and of fruit at its peak").
- Body/bud/fruit hovering → ✓ ("reads as a torso, then as a breast, then as a bud about to open, then as a piece of fruit about to fall").
- Green/ochre → ✓ (dedicated "The color" sub-section, "grounds the bright fleshy bodies in something like leaf and soil").
- Heavy black contours → ✓ ("The drawing" sub-section, "the bones under all that ripe flesh").
- Rhythmic allover repetition → ✓ ("The rhythm" sub-section, "no center… one rolling beat… read it the way you'd watch something grow").
- Mural width → ✓ (opening "about seven feet nine inches tall and a full seventeen feet across… you have to walk it").

All concrete, all prose-pointed, no pins/coordinates. The allover term is inline-defined where it's
load-bearing ("a term out of Pollock's drip pictures (where the poured line covers the whole
surface evenly, edge to edge, with no middle)").

- **[FIX] Reader-command pile-up opens the LOOKING section as instructions, not narration.** The
  chapter is built on second-person imperatives: "**Stand in front of it**" (open), "**Look at any
  one of those forms directly**," "Now look for the structure," "**Step back and soften your
  focus**." One scene-setting "stand in front of it" is fine voice; four stacked commands across
  four paragraphs is the reader-command tic the voice contract flags. Suggested: convert at least two
  to declarative looking-prose, e.g. "Look for the structure" → "The structure is there once you
  hunt for it"; "Step back and soften your focus, and notice what the picture refuses to give you"
  → "Soften the focus and the picture refuses you one thing: a center." Keep the single opening
  "Stand in front of it" as deliberate scene-set.

---

## 3. CLARITY + VOICE CONTRACT

No meta-narration ("this chapter will…"), no honesty-labels ("to be honest"), no condescending
glosses. Jargon (biomorphic, allover, mural scale, Abstract Expressionism, house paint) is inline-
defined on first use. No walls of text — paragraphs are reasonably sized. Quotes use proper
`&ldquo;/&rdquo;` entities, em-dashes are `&mdash;`/`&ndash;` HTML entities inside JSX text (correct,
not literal "—" in a plain string).

- **[FIX] Literal em-dash in a plain TS string field — `hook`.** PART A `hook`:
  `'Seventeen feet of swelling pink-and-rose forms, lush green and ochre, drawn together by sweeping
  black lines: bodies, buds, and fruit in one rolling field. Painted by a woman at full mural scale,
  in the barn studio that had been Pollock's, an image of growth and ripeness made out of loss.'`
  This one happens to use a colon and a comma, no em-dash — OK. **But the `figures[]` role string**
  `'Husband; whose barn studio she moved into'` and several `provenance`/`annotation` strings use
  ASCII hyphens and curly apostrophes consistently. Re-scan for the contract issue: confirmed the
  PART A const strings contain **no literal `—`**. The one to double-check is `acquired`/credit-line
  and `provenance.note` — all use ASCII hyphen or none. **No literal em-dash found in PART A string
  fields.** Downgrading this axis: the only place an em-dash could wrongly land is a TS string, and
  none do. (Kept as a FIX-level callout only so the fact gate re-confirms the credit-line verbatim
  match; the credit line itself has no dash.) — RECLASSIFY to NICE; see below.

- **[FIX] `KraMaking` parenthetical is a 4-sentence aside that over-explains the date.** "(Hold the
  date, because the dust of 1956 clings to it. Pollock died in August 1956, and the move into the
  barn and the start of this body of work belong to 1956; but the painting itself is a 1957 canvas.
  It is dated firmly 1957 by the Whitney Museum, which owns it. Do not let the famous death-year
  pull the picture back a year.)" — "Hold the date" and "Do not let the famous death-year pull the
  picture back" are reader-commands/meta-narration about the *fact-handling* rather than the story;
  it reads like the fact-pack's internal note leaking into reader prose. Suggested rewrite, declarative:
  "The date matters: Pollock died in August 1956, and the barn move and the new body of work began
  that year, but the canvas itself is 1957 — the year the Whitney, which owns it, records." Keeps the
  guard, drops the two commands and the instructional tone.

- **[NICE] "un-pinned-down" (used twice — annotation + LOOKING prose).** Slightly awkward coinage;
  reads fine but appears in both the annotation detail and `KraLooking`. Not a violation; consider
  "kept deliberately unresolved" in one of the two for variety.

- **[NICE] Em-dash audit (reclassified from the FIX above).** Confirmed: PART A const string fields
  contain no literal `—`; PART B JSX uses `&mdash;`/`&ndash;` entities correctly. No violation.
  Logged for the fact gate only.

- **[NICE] `KraAfterlife` "decorative = coded for feminine" reading is asserted twice** (afterlife
  prose + it's pre-flagged in the fact pack §2). It's sourced (fact pack: "decorative functioning as
  a coded put-down for feminine"), so it's content not a violation, but the draft states it as
  settled fact ("It is worth seeing what 'decorative' was doing in that sentence"). Mild reader-
  command ("It is worth seeing"). Optional softening; the claim is fact-pack-supported so it stays.

---

## NOTES FOR ADJACENT GATES (not this gate's call)
- FACT gate: re-confirm the credit-line verbatim string and both attributed quotes (AAA-403 caveat
  already surfaced in-prose at BREAK and AFTERLIFE — good).
- The acquisition year is correctly presented as inference in both prose and the const comment.
