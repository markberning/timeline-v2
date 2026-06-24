# GATE READ — Storytelling + Looking + Clarity

**Work:** Max Ernst, *The Elephant Celebes* (1921), work id `celebes`
**Gate:** STORYTELLING (primary) + LOOKING + CLARITY/VOICE CONTRACT
**Draft judged:** `audits/art-pipeline/work-celebes-draft.md`
**Date:** 2026-06-24

---

## VERDICT: PASS WITH FIXES

The draft is strong on storytelling and looking. The corn-bin → monster
transformation lands hard (Making section), and the Dada → dream-logic →
Surrealism arc is well-paced across the five sections with a clear through-line
("the picture where Dada tips over into something that did not yet have a name"
seeded in §1, paid off in §4 break and §5 afterlife). The looking section walks
the eye over every real feature via prose pointers, no coordinates.

It does NOT ship as-is. The voice contract is violated repeatedly — the draft is
laced with **reader-commands** ("Stand in front of it," "Now find," "Now step
back," "Look up," "Follow how it loops"), **honesty-labels** ("The honest
version," "the safe statement," "it is worth scoping honestly," "the accurate way
to put it"), **meta-narration** ("That is the thing to hold onto," "which is
exactly the right preparation for standing in front of the thing itself"), and a
**condescending gloss** ("you accept it while you sleep"). These are exactly the
tics the philosophy/art voice linter is built to catch. None are BLOCKERs
individually, but the density is a FIX-level pattern that must be swept before
integration. No factual drift from the factpack found. No literal `—` in a
rendered string found; `&mdash;` usage is correct (JSX text only).

---

## STORYTELLING (primary)

**Overall: strong.** Five sections each do distinct work and hand off cleanly.
The transformation beat and the dream-logic-into-Surrealism hinge both land.

### [NICE] §1 Cologne — the urinal anecdote is a great concrete hook
`CelCologne` para 2: "the public reached by walking through a pub urinal, and
that the police briefly shut down." Vivid, true, earns its place. No change.

### [NICE] §1 → §3 → §4 through-line is well-seeded
"the picture where Dada tips over into something that did not yet have a name"
(§1) → "a step past the movement Ernst was running" (§3) → "the hinge from Dada
into Surrealism" (§4). Good spine. No change.

### [FIX] §2 Making — the "careful note" paragraph slightly stalls the momentum
`CelMaking` para 2 ("Here a careful note is worth making, because popular
accounts pin this down too hard…"). The corn-bin reveal in para 1 is the
showpiece beat; para 2 immediately pivots to scholarly hedging and the energy
dips. The hedge is factually necessary (factpack §8.1), but its FRAMING is the
problem — see the honesty-label finding below. Keep the content, recast it so the
contested attribution reads as intrigue ("scholars still argue over which
corn-bin") rather than a throat-clearing disclaimer.

### [NICE] §2 title beat — "Both halves of the title are a kind of misdirection"
Clean, satisfying close to the Making arc. No change.

---

## LOOKING

**Overall: passes.** The looking section (`CelLooking`) walks the eye over every
real feature the factpack §5 lists, via prose pointers, no coordinates:
boiler/corn-bin body ✓, tusked snout-trumpet on a hose ✓, horned mechanical head
✓, headless mannequin lower-right ✓ (correctly placed via de Chirico lineage),
flying fish ✓, bare horizon ✓, plus the tower/totem and smoking airplane as a
parenthetical glance ✓. Vivid and concrete ("the color of a coal furnace,"
"bolted on like an afterthought"). The eye-path is logical: body → wrong parts →
mannequin → sky → emptiness.

### [FIX] §3 Looking — the reader-commands stack up (voice contract)
The section opens "Stand in front of it" and then drives the eye with imperatives:
"Now find the parts that do not belong," "Look to the lower right," "Then look
up," "Now step back and notice." This is the looking-section reader-command tic.
Recast to declarative observation. Suggested rewrites:
- "Stand in front of it. The canvas is a little over four feet tall" →
  "The canvas is a little over four feet tall"
- "Now find the parts that do not belong. Reaching out from the front…" →
  "The parts that do not belong reach out from the front…" / "Reaching out from
  the front of the body is a long flexible tube…"
- "Look to the lower right and you will find a headless female mannequin" →
  "In the lower right stands a headless female mannequin"
- "Then look up. In the sky…" → "In the sky, toward the upper left, fish are
  swimming through the air"
- "Now step back and notice what is not in the picture." → "What is not in the
  picture matters as much." / "Behind the monster there is almost nothing"

### [FIX] §3 Looking — "Follow how it loops back" (annotation echoes this too)
`CelLooking` para 2 and `annotations[1].detail` both use "Follow how it loops/
curls back toward the body." Reader-command. Recast to "it loops back toward the
body" / "the tube curls back on itself."

### [FIX] §3 Looking — condescending gloss
`CelLooking` para 3: "in a dream the impossible arrives fully furnished and
unexplained, and you accept it while you sleep." The "and you accept it while you
sleep" tail explains the obvious to the reader. Cut it: end on "the impossible
arrives fully furnished and unexplained." Stronger.

---

## CLARITY + VOICE CONTRACT (flag EVERY instance)

### Reader-commands — [FIX] (multiple)
- §3 `CelLooking`: "Stand in front of it." / "Now find the parts…" / "Look to the
  lower right…" / "Then look up." / "Now step back and notice…" / "Follow how it
  loops back" — see Looking findings above for rewrites.
- §1 `CelCologne` para 3: "That is the thing to hold onto." — meta-narration +
  command hybrid; cut the sentence, the point stands on its own.

### Honesty-labels — [FIX] (multiple; this is the densest tic)
- §2 `CelMaking` para 2: "The honest version is the general one" → state it
  plainly: "The general version is the safe one: a clay grain-bin on two legs,
  from an anthropological publication." Better still: "What's solid is the general
  picture…"
- §4 `CelBreak` dating para: "it is worth scoping honestly: it is a critical
  assessment, not a date-stamp" AND "The accurate way to put it:" — two honesty-
  labels in one paragraph. Recast: drop "it is worth scoping honestly" and "The
  accurate way to put it" and just say it: "It is a critical judgment, not a date-
  stamp. Ernst painted this in 1921, three years before Surrealism had a name."
- §5 `CelAfterlife` quote para: "We quote one of them, cleanly, rather than
  stitching phrases…into a Frankenstein 'quote.'" — this is process-narration
  about the authoring method; the reader does not need it. See meta-narration
  below.
- §5 `CelAfterlife` provenance para: "so the safe, honest statement is simply
  that it entered the Tate from Penrose in 1975." — honesty-label. Recast: "It
  entered the Tate from Penrose in 1975; the records disagree only on whether he
  sold it or gave it."

### Meta-narration / process-narration — [FIX]
- §5 `CelAfterlife` para 1: "any line you see captioned 'Ernst on Celebes' should
  be treated as unverified" AND para 2's whole "A word about that quote: it
  circulates in several English renderings… We quote one of them, cleanly… The
  verbatim wording above should be locked against a printed Ernst source at
  integration." This is an authoring/QA note addressed to the pipeline, not the
  reader. The "locked against a printed Ernst source at integration" sentence
  especially must NOT ship in reader prose — it is an integration instruction
  leaking into the body. [BLOCKER for that one sentence — it is internal pipeline
  text in a reader-facing string.] Move the verification instruction to a code
  comment; keep at most a light reader-facing note that competing translations
  exist. Suggested reader-facing version: "The line circulates in several English
  translations of the same French sentence (you'll also see 'the chance meeting of
  two distant realities on an unfamiliar plane'); they're renderings of one
  statement, not different claims."
- §1 `CelCologne` para 3: "That is the thing to hold onto. Most Dada pulled the
  picture apart… This one builds a whole impossible world and dares you to walk
  into it." — "dares you to walk into it" is fine (image, not command); "That is
  the thing to hold onto" is meta-narration, cut.

### Condescending gloss — [FIX]
- §3 `CelLooking` para 3: "and you accept it while you sleep" — see Looking.

### Jargon-before-definition — clean (no findings)
"Collage" is inline-defined on first use (§1 "pictures assembled by gluing
together cut-up pieces of other printed images"). "Provenance" is inline-defined
(§5 "the documented chain of owners from the artist's hand to now"). "Dada,"
"Surrealism," "metaphysical painting," "mannequin" all introduced with gloss.
Good.

### Walls of text — [NICE]
§1 para 1 and §2 para 1 are long but well-built and earn the length (scene-set
and reveal respectively). Not flagged. Watch that §1 para 1 stays under the
anti-wall ceiling at render; if it crowds, split after "ended in slaughter."

### Em-dash / `&mdash;` rule — clean
No literal `—` found in any rendered string. `&mdash;` appears only in JSX text
nodes (`CelMaking`, `CelLooking`, `CelBreak`, `CelAfterlife`), correctly. Plain
TS string fields (`hook`, `blurb`, `annotations[].detail`, `provenance[].note`,
const comment) use commas/parens/colons — verified, no em-dash leakage. ✓
One nuance to confirm at integration: the const comment block uses "—" inside a
`//` comment line (PART A header), which is fine (comment, not a rendered string).

---

## SUMMARY OF FINDINGS BY CLASS

- **[BLOCKER] ×1** — §5 `CelAfterlife`: "The verbatim wording above should be
  locked against a printed Ernst source at integration." is an internal pipeline
  instruction sitting in reader-facing prose. Move to a code comment.
- **[FIX] ×8 patterns** — reader-commands (§3 stack), honesty-labels (§2/§4/§5),
  meta/process-narration (§5 quote para, §1), condescending gloss (§3), the §2
  "careful note" momentum stall. All voice-contract sweeps, no factual rework.
- **[NICE] ×4** — urinal hook, through-line seeding, title-misdirection close,
  watch §1 para-1 length at render.

No factual drift from the factpack. Looking section passes (all six features +
extras, prose pointers, no coordinates). Storytelling spine is sound.
