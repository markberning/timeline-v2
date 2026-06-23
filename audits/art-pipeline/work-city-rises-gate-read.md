# GATE READ — The City Rises (Boccioni, 1910) — Part B prose

Gates run: STORYTELLING · LOOKING · CLARITY. Scope = `audits/art-pipeline/work-city-rises-draft.md` Part B (the five `Cty`-prefixed section components). House-voice reference = `absinthe-narratives.tsx.txt`. No edits made to the draft; this is a findings file only.

Verdict tiers: **[BLOCKER]** = ship-blocking, must fix before integrate · **[FIX]** = should fix, gate-relevant defect · **[NICE]** = optional polish.

---

## SUMMARY

Strong draft, very close to ship. It is genuinely story-first, carries the dry wit the house voice wants, the LOOKING section (`CtyLooking`) does real guided seeing of the red horse / straining men / faint scaffolds / smear / whirl, and the CLARITY discipline is mostly excellent (Futurism, Divisionism, dynamism, provenance all glossed in-line for a zero-knowledge reader).

Two things keep it from a clean pass, and both are CLARITY blockers, not storytelling ones:

1. **"lines of force" is named as a key manifesto term but never actually glossed in plain language** — it is defined once in `CtyManifestos` ("the invisible energy a moving thing throws off into the air around it") which is acceptable, BUT the term is then dropped and never reconnected to anything the reader SEES on the canvas. For a zero-knowledge reader the term floats. See [FIX] CLR-1.
2. **One unglossed Futurist-jargon term: "centrifugal."** Used twice ("one centrifugal whirl," "That centrifugal whirl") in a deliberately plain-spoken zero-knowledge text, leaning on a word a lay reader may not hold precisely. See [FIX] CLR-2.

No meta-narration blockers — the draft is clean on the "tell the story, don't narrate the chapter" rule that the house voice and `feedback_no_meta_narration` demand. There are a few self-referential "we" / "the picture we're about to look at" lines, but the absinthe reference uses the same device ("The picture we're about to look at is essentially him taking notes"), so it is house-sanctioned, not a defect. Noted as [NICE] only.

Nothing in STORYTELLING rises to a blocker. A few flat or slightly over-hedged stretches flagged as [FIX]/[NICE].

---

## CLARITY

### [FIX] CLR-1 — "lines of force" is named, half-glossed, then orphaned
`CtyManifestos`, para 3 (the Technical Manifesto sentence):
> "...and to render what it called **"lines of force,"** the invisible energy a moving thing throws off into the air around it."

The gloss itself is fine. The problem is the term is one of the three the gate specifically requires landing for a zero-knowledge reader, and it is introduced in the *manifesto* section and then **never reconnected to the canvas**. By the time the reader is looking at the actual painting in `CtyLooking`, the prose describes the smear and the whirl beautifully but never says "this is the 'lines of force' the manifesto promised." The reader is left with an abstract phrase from 30 paragraphs earlier and no visual anchor for it.

Compare the absinthe ref, which plants a term (e.g. the *louche*) and then makes the reader SEE it land. "Lines of force" deserves the same payoff.

**Fix (low-effort, high-value):** in `CtyLooking`, "The motion" subsection, where the smear/haze is described, add one clause tying it back, e.g. after "its own motion rubbed into the air":
> "That haze around the horse — the streaks of energy peeling off its body into the air — is the thing the manifesto called 'lines of force.'"
This costs one sentence and converts an orphaned abstraction into guided looking. **Either reconnect it on the canvas or cut the term from the manifesto section** — but a key term named and never cashed is exactly the CLARITY gap.

### [FIX] CLR-2 — "centrifugal" used twice, unglossed, in a zero-knowledge text
`CtyLooking`, "The motion," final para:
> "...all spiral in, like water turning down a drain, toward the surging animal... That **centrifugal** whirl, with no still place for the eye..."

And the annotations (`The swirling composition`, Part A): "one **centrifugal** whirl."

Two issues. First, "centrifugal" is a register-break — a precise physics word in prose that otherwise works hard to stay plain ("like water turning down a drain" is the right register; "centrifugal whirl" is not). Second, and more important for the gate: **"centrifugal" means force flung *outward* from a center; the prose describes everything spiraling *inward* toward the horse.** So the word is not just unglossed, it is arguably the wrong word for the motion described ("everything wheels inward," "spiral in... toward the surging animal"). A zero-knowledge reader who does hold the word will hit a contradiction.

**Fix:** drop "centrifugal" and let the already-excellent plain image carry it — e.g. "That inward whirl, with no still place for the eye..." The "water turning down a drain" simile two sentences earlier already does all the work the word was reaching for, and a drain is centripetal/inward, which matches.

### [NICE] CLR-3 — "Pointillism" introduced as the thing Divisionism descends from, but Pointillism itself isn't glossed
`CtyDivisionism`, para 1:
> "It is **Divisionism**: the Italian descendant of the French method called **Pointillism**, which the painter **Georges Seurat** had built in the 1880s out of color science."

Divisionism is then fully glossed ("divide them into separate touches... let the eye do the mixing"). That gloss effectively explains Pointillism too, so a careful reader gets it. But the sentence names two -isms in a row and only explicitly defines the second one's *method* a beat later. Minor; the reader is not actually left stranded. Optional tighten: "...the Italian descendant of French Pointillism, the dot-by-dot method the painter Georges Seurat built in the 1880s out of color science" folds the gloss into the naming.

### CLARITY — what passes (no action)
- **Futurism** — fully landed in `CtyManifestos` ("art should worship speed, machines, danger, and the modern city").
- **Divisionism** — exemplary gloss, given twice (manifesto-adjacent mention + the full close-up "thousands of small, separate strokes... let the eye do the mixing").
- **dynamism** — glossed exactly where the reader needs it, on the canvas: "not a picture *of* motion, but a picture that *moves*."
- **provenance** — glossed in-line in `CtyAfterlife` ("the documented chain of who has owned a work of art, in order, from the artist's hand to now"). Matches the absinthe-ref pattern.
- **dray-horse / draft horse** — glossed ("the heavy work-breed that hauls loads").
- **engraver/printmaker, mazagran, louche** — N/A (absinthe terms); none carried over wrongly.
- **Technical Manifesto of Futurist Painting** vs **Manifesto of the Futurist Painters** — the draft pre-empts the exact confusion a reader would have ("the loud declaration" vs "the recipe"). Good.

---

## LOOKING

`CtyLooking` is the strongest section and largely a model of the gate. It does the five required canvas facts as concrete, sequenced, guided looking:

- **The huge red horse** — landed hard and well ("the red of a forge, the red of effort... He's painted what the horse *is doing*"). The "color is the tell" move is exactly the house technique.
- **The straining workers** — landed ("heels dug in, hauling against the lunging horse like men in a tug-of-war they are losing"). The tug-of-war simile makes it physical.
- **The scaffolding** — landed, with the *interpretive* point made visual ("faint, blurred, drained of color, kept far quieter than the blazing horse").
- **The blurred motion** — landed ("almost nothing in it has a hard edge... it all smears").
- **The swirling composition** — landed ("everything wheels inward... like water turning down a drain").

Findings:

### [FIX] LOOK-1 — the "Divisionist strokes" are NOT made visible in the LOOKING section
The gate brief explicitly asks whether the reader is made to SEE "the divisionist strokes." In `CtyLooking` they are not — the surface is described as smear and haze, but the close-up "it's made of dots / dabs of red and orange and pink and even green and blue" looking happens only in the *next* section, `CtyDivisionism`. That is a defensible structural choice (the technique gets its own "break" section), and `CtyDivisionism` does the close-up looking superbly ("Walk right up to the surface, closer than is polite in a museum... a patch of the horse's flank is not one red; it is dabs of red and orange and pink and even green and blue"). So the SEEING does happen — just not in the section labeled "the canvas."

This is a [FIX] not a [BLOCKER] because the looking is present in the work, well done, and adjacent. But flag for the integrator: if the two sections can be read out of order, `CtyLooking` should plant a one-line forward hook ("up close, all of this breaks into separate dabs of color — we'll get to that") so the "the canvas" section doesn't read as if the surface is only ever a smear. Right now `CtyLooking` never tells the reader the smear is *built from discrete strokes*, which is half the point of the canvas.

### [NICE] LOOK-2 — "look at the painting as a whole, the way you'd watch something move rather than read something still"
`CtyLooking`, "The motion," opening. This is a lovely instruction and it works. No fix. Noting it as a high point so the integrator preserves it.

### [NICE] LOOK-3 — annotations (Part A) are out of gate scope but echo the prose well
The Part A `annotations[]` cover the same six canvas facts (red horse, workers, scaffolding, blurred motion, Divisionist strokes, swirling composition) and each carries an honest "literal vs. interpretation" hedge (the horse-as-energy reading, the "knocking the workers down" caveat). Consistent with the prose. No action; flagging that prose and annotations agree, which the framing/comprehensiveness gates will want.

---

## STORYTELLING

Story-first throughout. The structural spine is excellent: a movement that arrived as a press release with no paintings under it → the painter who had to go cash the promissory notes → the building site as the most-modern subject → the canvas → the technical hinge → the afterlife and the horse-death irony. That is a narrative, not a label-stack.

Dry wit is present and on-register:
- "Futurism is the rare art movement that arrived as a press release."
- "the manifestos were stacked up like promissory notes. What did not yet exist was the painting that would cash them."
- "closer than is polite in a museum."
- "the kind of romance that flatters the storyteller more than it honors the painter."

Comparisons / scene-setting are doing real work (the horse "the red of a forge"; the workers "like men in a tug-of-war they are losing"; the composition "like water turning down a drain"; the academy's ten-foot canvas "reserved for a battle, a coronation, a saint, a myth").

The Futurist-manifesto fervor DOES come alive in `CtyManifestos` ("a furious, ecstatic text... a racing automobile was more beautiful than an ancient Greek statue, that museums were graveyards"). Good.

Findings:

### [FIX] STORY-1 — the horse-death irony close is over-hedged and loses its punch
`CtyAfterlife`, "The painter," para 2:
> "But let's be plain about what that is and isn't. It is not a prophecy. The painting did not foretell his death, and reading it that way is the kind of romance that flatters the storyteller more than it honors the painter. It is, instead, the blunt and meaningless kind of irony that real history hands out: a coincidence with no author."

The *content* is exactly right per the fact pack (irony, not prophecy — locked in the Part A authoring note). But the execution spends three sentences telling the reader how NOT to read it before letting them feel it, which is a soft form of the "honesty-labeling" tic the house voice dislikes (`feedback_philosophy_voice_plain`: no honesty-labels / meta on how to read). "Let's be plain about what that is and isn't" is the narrator stepping out to manage the reader's response.

**Fix:** state the irony plainly and trust the reader, trimming the meta-instruction. Keep the "not a prophecy" beat (it's the locked fact-handling) but lead with the image, not the disclaimer. E.g.:
> "The man who put a violent, surging horse at the dead center of his first great painting — and another charging horse in his last — was killed by a horse. It is not a prophecy; the painting foretold nothing. It is the blunt, authorless kind of irony real history hands out, and it is a sad fact and nothing more."
Same facts, same restraint, one less layer of the narrator coaching the reader.

### [FIX] STORY-2 — flat / slightly inert stretch in CtySite para 2
`CtySite`, "The most modern subject," para 2:
> "This was a daring choice, and it's worth saying why. For four centuries, a canvas this big... was reserved for important subjects..."

"This was a daring choice, and it's worth saying why" is a flat throat-clear — it announces that an explanation is coming instead of just giving it. Compare the absinthe ref, which never says "it's worth saying why," it just says the thing. The paragraph that follows is good; the opener is the weak link.

**Fix:** cut the throat-clear, open on the point: "For four centuries a canvas this big was reserved for the important subjects: a battle, a coronation, a saint, a myth. A construction site full of sweating workmen and dray-horses was the opposite of important."

### [NICE] STORY-3 — mild forward-reference / "we'll" scaffolding
Several "the painting we're about to look at" / "That is what we look at next" / "we'll come to in a moment" transitions (`CtyManifestos` end, `CtySite` end, `CtyDivisionism` "we'll get to"). These are house-sanctioned (the absinthe ref uses the identical device — "We'll get to that," "in two chapters Victorian critics will..."), so NOT a meta-narration blocker. But they cluster a little denser here than in the reference. Optional: thin one or two so the device stays a spice, not a habit. The `CtySite` → `CtyLooking` handoff ("Because the thing standing over them is a horse. And it is enormous, and it is red... That is what we look at next.") is the best of them — keep that one; it's earned.

### [NICE] STORY-4 — "small and enormous at once" / "small and enormous"
`CtyDivisionism`, "The hinge": "it is small and enormous at once." Nice line, no fix — flagging only because the same paradox structure ("the move that makes the painting matter") is a high point worth preserving through revision.

---

## META-NARRATION CHECK (explicit, per brief)

Scanned for the banned pattern (narrating what the chapter/section is about, or how it links, rather than telling the story — `feedback_no_meta_narration`).

- **No blocker-level meta-narration.** The draft does not open sections by announcing their own structure ("In this section we will examine...") and does not narrate the linking ("this connects to the next movement because...").
- The "let's be plain about what that is and isn't" line (STORY-1) is the closest thing to the honesty-labeling tic — handled above as a [FIX].
- The forward-reference "we'll" device (STORY-3) is present but house-sanctioned by the reference text. [NICE].

---

## SHIP RECOMMENDATION

**Conditional pass.** No [BLOCKER]s. Clear the two CLARITY [FIX]es (CLR-1 reconnect or cut "lines of force"; CLR-2 drop the wrong/unglossed "centrifugal") and the two LOOKING/STORY [FIX]es worth doing (LOOK-1 forward-hook the dabs in `CtyLooking`; STORY-1 trim the horse-death meta-coaching; STORY-2 cut the throat-clear), and this section is ship-clean on all three gates. The [NICE]s are polish, integrator's discretion.
