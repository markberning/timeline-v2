# Gate read — STORYTELLING + LOOKING + CLARITY — Masson, *Automatic Drawing* (`masson-auto`)

Gate scope: storytelling (primary), looking-section concreteness, clarity + voice
contract. Read against `work-masson-auto-draft.md` + `work-masson-auto-factpack.md`.
No edits, no commit.

## VERDICT: PASS WITH FIXES

Strong draft. The hard problem — making an abstract ink tangle carry five sections —
is genuinely solved: the "let the hand outrun the editing mind" idea is the engine and
it never pads. Storytelling is compelling and accurate to the factpack; the looking
section makes the tangle concrete by prose pointers with zero coordinates. The blocking
issues are voice-contract mechanics, not story: a cluster of reader-commands and one
first-person-plural meta-tic ("we are about to look at," "we will read… in the last
chapter") that the contract forbids, plus one honesty-label habit ("the honest
description is," "facts we can stand behind"). None are factual. Fix the reader-address
and meta-narration and this ships.

No factual findings against the factpack: the 38201 disambiguation, the
"largely-automatic-not-pure" correction, the trance/hunger/drugs-as-practice-not-this-
sheet handling, the Breton (not Masson) attribution + named Seaver/Lane translation, the
dimensions-orientation, and the US-PD-by-publication / not-EU caveat are all carried
correctly. The `&mdash;`/`&ndash;` entities inside JSX text are fine (rendered JSX, not
plain TS string fields); I checked the blurb/hook/annotation TS strings separately — see
the CLARITY note on those.

---

## STORYTELLING (primary)

Overall: compelling and well-shaped across all five. Method sets the wager cleanly,
Making lands the crucial "not pure" turn without deflating the romance, Break does real
art-historical work, Looking is vivid, Afterlife earns the Pollock line. Below are the
drag spots.

- **[NICE] Method, ¶1 (draft L112).** The "Freud-soaked thinking of these men…
  supposedly truer for it" gloss on the unconscious is good and earns its keep. The
  closing sentence ("The wager of automatism is simple and large: reason, taste, and
  morality are filters…") then *restates* the same wager the paragraph already made two
  sentences earlier ("comes from below deliberate thought… runs under reason and taste
  and good manners"). Mild redundancy. Consider trimming the final sentence to one
  clause or cutting it — the point already landed.

- **[NICE] Making, "Not pure all the way down" + Looking key-statement closer.** The
  "pure state is the ideal / the sheet is the ideal pursued by a real hand" point is
  made strongly in Making ¶3–4, then made *again* almost verbatim in Looking's final
  parenthetical (L201: "in its *pure* state is Breton's ideal. The drawing is the ideal
  pursued by a real hand…"). It is a genuinely good point but the reader has heard it.
  In Looking, compress to a half-sentence callback rather than re-arguing it.

- **[NICE] Afterlife, Pollock beat.** The Pollock/Abstract-Expressionism line appears in
  the Break section (L166) and again in Afterlife ¶2 (L221), each time noting "Pollock
  said as much / said plainly that he admired Masson's automatism." Two sections, same
  payload. Defensible (Break = the idea, Afterlife = the lineage) but watch the repeat
  phrasing; vary the second or lean it harder on the trans-Atlantic crossing rather than
  re-asserting the admiration.

No dull or listy passages of concern. No BLOCKER/FIX on storytelling.

---

## LOOKING

The looking section (`MsnLooking`) is the strongest part of the draft for this gate's
purposes. It makes the tangle concrete entirely through prose pointers — no coordinates,
no blind crops, consistent with the no-blind-coordinates rule.

- The continuous racing line: "Pick a point anywhere in the ink and follow it… you can
  travel most of the sheet without the pen seeming to lift off" — concrete, verifiable
  by eye, no coordinate. GOOD.
- Speed of the mark: "where the line whips past a turn and overshoots, where it thickens
  into a worried tangle and then shoots across an open patch" — exactly the
  speed-made-visible the brief asked for. GOOD.
- Half-emerged hands/birds/breast/fish: "let your eye go soft, the way you let shapes
  form in a cloud" then names each fragment as a thing *found*, not drawn ("a shape the
  eye *finds* in marks that were not made to depict it"). Matches the factpack's
  "name only the fragments you can actually see — verify at integration" caution; the
  prose stays at "reads as," not "is." GOOD.
- Absence of a fixed ground: "notice what is **not** there: a ground, a floor, a horizon…
  no scene for the drawing to be a view of." GOOD.

One contract issue lives inside this otherwise-clean section — see CLARITY
reader-commands below ("Start with the line," "Now stop following the line and let your
eye go soft"). The *content* of the looking is right; the *grammatical mood* (imperative)
is the violation.

No BLOCKER/FIX on looking concreteness.

---

## CLARITY + VOICE CONTRACT

This is where the fixes are. The voice contract bars reader-commands, meta-narration,
first-person "we'll do X next," and honesty-labels. The draft has a cluster of each.

### Reader-commands (imperative mood addressed at the reader)

- **[FIX] Looking, L181:** "**Start with the** line, because the line is almost the whole
  drawing." → recast without the command, e.g. "The line is almost the whole drawing."
- **[FIX] Looking, L186 (L185 para):** "**Now stop following the line and let your eye go
  soft**, the way you let shapes form in a cloud, and the second layer comes up." →
  "Let the eye go soft, the way shapes form in a cloud, and a second layer comes up."
- **[FIX] Looking, L189:** "**And notice what is not there**: a ground, a floor, a
  horizon." → "What is *not* there matters as much: no ground, no floor, no horizon."
- **[FIX] Annotations TS, L78–83 (PART A const).** Several `where`/`detail` fields are
  written as commands to the viewer and will render as such: "follow the ink anywhere on
  the sheet and try to find where it stops" (L78), "**Look for** the line almost
  settling into a hand" (L79), "**Watch** where the line races past a turn" (L83). These
  are annotation pointers — a gated reader-facing surface. The imperative is arguably
  acceptable as look-closer pointer convention, but it is the same mood the contract
  flags in prose; if the vertical holds annotations to the same bar, recast to
  declarative ("The line almost settles into a hand…", "At the turns the line races past
  and overshoots…"). Flagging for coordinator to rule consistently with sibling works.

### First-person-plural meta-narration ("we are about to / we will read next")

- **[FIX] Method, L112:** "the whole picture **we are about to look at** is one sheet of
  it, so it is worth being plain about what the word means." → drop the forward-reference;
  "The method was automatism, and the whole drawing is one sheet of it — so the word is
  worth being plain about." (The `feedback_no_meta_narration` rule: tell the story, don't
  narrate what the chapter is about / what's coming.)
- **[FIX] Method, L115:** "(**We will read his exact words in the last chapter**, in
  front of the drawing they describe.)" → cut the parenthetical, or convert to a
  non-navigational phrasing. Telling the reader what a later section will do is the
  exact meta-tic the contract bans.
- **[NICE] Looking, L194 / L201 and Afterlife passim** use "we" as house-voice ("the
  standard English translation," "Read it next to the drawing") — the editorial-we for
  *stance* is fine; only the *navigational* we ("we will read… next chapter") is the
  violation. Distinguishing so the reviser doesn't over-correct.

### Honesty-labels (the "to be honest / the facts we can stand behind" tic)

- **[FIX] Making, L143:** "So **the honest description is** not 'pure' automatism but a
  drawing that is *largely* automatic…" → "So the description is not 'pure' automatism
  but…" The point survives intact without labeling itself honest.
- **[FIX] Afterlife, L216:** "so **we will not print a year or a fund we cannot stand
  behind**." → state the absence plainly without the credibility-label: "so no year or
  fund is given." Same at L213 ("we leave that chain unstated rather than guess at it")
  and L224 — the provenance gaps are handled correctly *factually*, but the prose keeps
  narrating its own caution ("we leave… unstated rather than guess," "a year or a fund we
  cannot stand behind"). Convert each to a plain statement of what is and isn't known.
  This is the `feedback_philosophy_voice_plain` / no-honesty-labels rule applied to art.

### Condescending glosses / jargon-before-defined

- **PASS.** "Automatism" is inline-defined on first use (L112: "To work automatically is
  to let the hand move without conscious control…") *before* the word is leaned on.
  "The unconscious" is defined in the same paragraph ("the layer of the mind… that runs
  under reason"). "Provenance" is glossed at L213 ("the documented chain of who has owned
  a work in order"). No jargon-before-definition found. No condescending glosses found —
  the Freud gloss and the cloud-shapes analogy are explanatory, not talking-down.

### Walls of text

- **[NICE] Method ¶1 (L112)** is the densest block — one paragraph carrying the manifesto,
  the definition of automatism, the definition of the unconscious, and the wager. It is
  long but it is the load-bearing setup and it is broken by a sub-header right after.
  Not a blocker; if trimming the redundant closing sentence (storytelling NICE above) it
  tightens on its own.

### Literal "—" / entity hygiene in TS string fields

- **PASS, with one note.** The em/en-dashes in the JSX prose are HTML entities
  (`&mdash;`, `&ndash;`) inside rendered JSX text — correct, not literal "—" in a TS
  string. The **PART A TS string fields** (`hook`, `blurb`, `note`, `annotations.detail`,
  `stats`) use literal commas and the typographic glyphs `″ ¼ ⅛ ’` directly — I found
  **no** literal `—` and **no** `&mdash;` mis-pasted inside a plain TS string field (the
  failure mode the contract calls out). The blurbs use real curly apostrophes (’) and
  spelled "and" lists rather than dashes. Clean.

---

## SUMMARY OF FINDINGS

- BLOCKER: none.
- FIX: 8 — reader-commands (Looking L181/L186/L189 + annotation fields L78–83),
  navigational meta-"we" (Method L112/L115), honesty-labels (Making L143; Afterlife
  L213/L216/L224).
- NICE: 4 — wager restatement (Method ¶1), pure-state point repeated in Looking,
  Pollock beat repeated Break→Afterlife, Method ¶1 density.

All factual handling matches the factpack; the fixes are voice-contract mechanics, not
accuracy. Recast the imperatives to declarative, cut the two "we will read next" /
"about to look at" forward-references, and strip the four honesty-labels, and this read
is ship-ready for this gate.
