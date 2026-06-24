# GATE READ — Storytelling + Looking + Clarity

**Work:** Leonora Carrington, *Self-Portrait (Inn of the Dawn Horse)* (c.1937–38)
**Draft:** `audits/art-pipeline/work-carrington-self-draft.md`
**Gate:** storytelling (primary) + looking + clarity/voice-contract
**Reviewer role:** read-only; no edits to draft/src, no commit.

---

## VERDICT: PASS WITH FIXES

This is a strong, compelling draft. The through-line the brief asks for lands
cleanly: the young woman entering Surrealism on her own terms (Arrival),
the animal-kin dream-imagery (Making + Looking), and the refusal of the muse
role (Break + the key-statement block) all hit. The looking section guides the
eye to every required feature with prose pointers and no coordinates. Voice is
mostly clean.

Two findings rise to **[FIX]** (one is a factpack contradiction; one is a
clarity/honesty-label tic that recurs). The rest are [NICE]. **No [BLOCKER].**

---

## 1. STORYTELLING (primary)

Overall: compelling and well-paced across all five sections. The opening
("born into exactly the kind of life this painting is trying to get out of")
is a genuinely good hook; the two-horses opposition in Looking is the strongest
beat; the Break section reverses the muse arrangement choice-by-choice without
becoming a list; the afterlife "The horse galloping out the window got where it
was going" pays off the imagery earned earlier. The muse refusal lands as the
spine of the whole read. Nothing dull, listy, or disjointed enough to block.

- **[NICE] Arrival, ¶2–3 — the "muse" point is previewed, then fully delivered
  in the Break + key statement.** This is fine, but Arrival ¶2 ("Carrington did
  not arrive as anyone's pupil or anyone's muse") slightly front-loads the
  thesis the Break section exists to make. Not a problem — it reads as a
  promissory note the later sections cash — but if trimming is wanted, the
  Arrival version could be softened by a hair so the Break lands fresher.

- **[NICE] Making, "How it is painted" — "belies her age" appears here and the
  age-20 marvel ("That is young to make a picture this assured" in Arrival;
  "made it at about twenty" in Break) is hit three times.** The youth point is
  load-bearing and worth repeating, but three near-identical phrasings risks
  feeling like a refrain. Consider varying one.

---

## 2. LOOKING

The looking section ("What is in the room") guides the eye to **every** required
feature via prose pointers, no coordinates:

- spotted hyena with teats — ✓ ("follow her arm… toward a spotted hyena," human
  eyes, "heavy, pendulous teats… nursing female")
- white rocking-horse on the wall — ✓ ("Lift your eyes to the wall behind her
  head… hanging in the air with nothing holding it up")
- galloping horse outside the window — ✓ ("look to the right, through the parted
  curtain… a second white horse gallops free")
- riding clothes — ✓ ("pale white jodhpurs… and a jacket, androgynous riding
  clothes")
- wild hair — ✓ ("her dark hair springs out around her head in a loose, untamed
  mane")
- blue chair — ✓ ("the very front edge of a blue armchair, knees together")

Eye-path is well-managed: "Start with the woman → follow her arm → lift your
eyes → look to the right." The rhyme paragraph (mane ↔ hyena bristle ↔ horses'
manes) is exactly the kind of form-before-meaning observation this gate wants.
The "held at arm's length" subsection correctly fences the symbolism as
interpretation per factpack §8. No coordinates anywhere. Strong.

- **[FIX] HAIR COLOR — draft says "dark hair / dark mane"; factpack says "wild
  RED mane."** Looking ¶1 ("her dark hair springs out"), the const `hook`/
  `blurb`s ("wild dark hair"), and the "Her wild dark hair" annotation all say
  **dark**. The factpack (§2 "wild **red** mane of hair," §5 point 5 "Her wild
  **red** hair," const-comment lineage) says **red**. This is a direct draft↔
  factpack contradiction on a concrete, checkable visual fact. Carrington's hair
  in the canvas does read dark/auburn, and "red" in the factpack may itself be
  the looser term — but the gate's job is to flag the inconsistency, not adjudge
  the pigment. **Recommend:** reconcile against the actual image; "dark" or
  "dark auburn" is defensible and may be the safer call, but the author + fact
  gate must agree and the factpack point 5 wording should be squared with
  whatever ships. Appears in: Looking ¶1; const `hook`; const `looking` section
  blurb; annotation "Her wild dark hair." Fix all occurrences together.

- **[NICE] Looking ¶2, "This is no decorative pet."** Slightly editorializing
  ("no … pet") where the surrounding prose is doing fine on its own; could go,
  but it's harmless and in-voice.

---

## 3. CLARITY + VOICE CONTRACT

Generally clean. Inline definitions are handled well and at first use:
*debutante*, *Surrealism*, *jodhpurs*, *provenance* are all defined inline in
parens/clauses before or as they're used. Drop caps, SectionHeader labels, the
blockquote, and `&mdash;`/`&ndash;`/`&hellip;`/`&rsquo;` entity usage are all
correct — **no literal `—` in any rendered string, no `&mdash;` misused inside
a plain TS field** (TS string fields use commas/parens/colons throughout;
checked `hook`, `blurb`, `note`, `detail`, `stats`). Em-dash rule observed.

### Honesty-labels / hedging meta — the one recurring tic

- **[FIX] Honesty-label phrasing clusters in two spots and reads as the narrator
  reassuring the reader about its own sourcing.** The voice contract bans
  honesty-labels. Two passages tip into it:
  - **Arrival ¶2:** "But it is worth saying plainly at the start, because the
    easy version of this story makes Ernst the headline…" — this narrates the
    telling ("worth saying plainly at the start") rather than just saying it.
    *Suggested rewrite:* cut "But it is worth saying plainly at the start,
    because the easy version of this story makes Ernst the headline:" and open
    the sentence directly — "Carrington did not arrive as anyone's pupil or
    anyone's muse. She arrived as an artist, and the proof is this canvas."
  - **Afterlife / key-statement ¶2 ("A note on the wording"):** "The line is
    genuine and well attested (Chadwick is the scholarly source) … the short
    form above is the safe display version." The variant-flag content is correct
    and required by the factpack, but "genuine and well attested," "the safe
    display version" speak in production/sourcing language to the reader. This
    is the borderline case — it's defensible as the manifesto/key-statement
    transparency the art pipeline allows — but the phrase **"the safe display
    version"** in particular is internal-process wording. *Suggested rewrite:*
    keep the two-forms fact, drop the process gloss — e.g. "It circulates in two
    forms: the short one above and a blunter, longer version the Met quotes,
    opening *'I thought it was bullshit…'* Same statement, fuller and shorter
    dress." Then proceed to "And note what the line is and is not…".

### Reader-commands

- **[NICE] Looking uses second-person imperatives** — "Start with the woman,"
  "Now follow her arm," "Lift your eyes," "look to the right," "Hold that
  detail." In the looking section this is the accepted guide-the-eye convention
  (it's how the gate wants the eye led) and reads naturally, so this is **not**
  flagged as a violation. Noted only so the distinction is on record: these are
  looking-pointers, not the banned meta reader-commands.

### Meta-narration

- **[NICE] Arrival ¶3 closing:** "The rest of this read is about what is in that
  room, and why a woman painting it, in 1937, was doing something the men around
  her were not." This narrates what the read will do ("The rest of this read is
  about…"), which is the meta-narration pattern the contract discourages. It's
  mild and functions as a transition, but if strict, recast to state the thing
  rather than announce it — e.g. "What is in that room, and why a woman painting
  it in 1937 was doing something the men around her were not, is the rest of the
  story." Borderline; classified [NICE] not [FIX].

### Condescending glosses / jargon

- None found. Definitions are pitched to a smart reader, not condescending.
  "convulsive beauty" is attributed to Breton and used in context (Break) rather
  than over-explained. No jargon used before being defined.

### Walls of text

- None. Paragraphs are broken by sub-headers (Making and Looking each split with
  a second SectionHeader); no single paragraph runs long enough to wall.

---

## SUMMARY OF FINDINGS

| # | Class | Location | Issue |
|---|---|---|---|
| 1 | **[FIX]** | Looking ¶1; const hook + looking blurb; "Her wild dark hair" annotation | "dark hair/mane" contradicts factpack "wild RED mane"; reconcile across all occurrences |
| 2 | **[FIX]** | Arrival ¶2; Afterlife key-statement ¶2 | Honesty-label / process-language meta ("worth saying plainly at the start," "the safe display version") — keep the facts, drop the self-narration |
| 3 | [NICE] | Arrival ¶2 vs Break | muse thesis slightly front-loaded |
| 4 | [NICE] | Arrival/Making/Break | age-20 marvel hit ~3× in near-identical phrasing |
| 5 | [NICE] | Arrival ¶3 | "The rest of this read is about…" mild meta-narration |
| 6 | [NICE] | Looking ¶2 | "This is no decorative pet" lightly editorial |

No [BLOCKER]. Two [FIX] (one factual contradiction with the factpack, one
recurring voice-contract tic). Storytelling, looking-pointers, and overall
clarity all pass.
