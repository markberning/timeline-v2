# Gate 2 — Storytelling & "Looking" critic
## Subject: Lay of the land — "The world before the revolt" (Modern era, kind: ERA)
### Critic run: 2026-05-25

---

## Overall grade: GOOD (one section NEEDS WORK, one at risk of missing a looking beat)

The draft is solid foundational work — clean voice, accurate structure, genuinely useful
set-up for what follows. No section needs a full REWRITE. But it is playing it slightly
safe: the dry wit is present but often stated and then immediately moved past, the
comparisons are thinner than the established bar, and the Venus description — the draft's
one big "make you look" moment — stops one beat short of landing. The Meanwhile card also
has a voice-lock (C) violation that needs fixing.

---

## Per-section grades

| Section | Grade |
|---|---|
| "One ladder, and the State owned it" | GOOD |
| "Where careers were made and skied" | GOOD |
| "What the jury loved" | NEEDS WORK — looking failure + buried wit |
| "The modern world loads the gun" | GOOD |
| "Who decides what a painting is for?" | GOOD |
| Meanwhile card | NEEDS WORK — voice-lock C violation |

---

## MUST-FIX

---

### 1. LOOKING FAILURE — The Venus description stops just as it gets interesting

**Section:** "What the jury loved"

**The line:**
> "It is technically faultless and slightly too sweet, like a wedding cake."

**What's wrong:** The wedding-cake line is the draft's best single line — dry, earned,
landed cleanly. But the actual *looking* that precedes it is oddly vague for a chapter
whose job is to make the reader SEE. We get: reclining, arm over head, wave, foam, cherubs,
flat blue-green sea, no visible brushstroke. That list is correct, but it reads like a
museum label — accumulation of features rather than an act of looking. The draft never
describes *the feeling of looking* at the surface itself: the Venus's skin has this
uncanny porcelain uniformity, a complexion so perfected it doesn't read as flesh anymore
but as glazed ceramic. That texture IS the ideology — fini as the deliberate erasure of the
painter's hand, producing something that looks more like a cast object than a painting.
The reader should feel slightly disquieted by the Venus, not just intellectually informed
that it is "technically faultless." The draft's one looking beat ends on the right note
("the paint sanded out of existence so nothing comes between you and the illusion") but
never quite makes the reader *feel* that through the surface itself.

**Also:** the cherubs are mentioned but not used — they're actually doing something
slightly strange and dreamlike (tumbling in the air above a reclining goddess), and that
weirdness, that slightly-too-perfect, slightly-too-confected quality, is what the
wedding-cake line is gesturing at. The line would land harder if the visual description
had shown the reader exactly what makes it "slightly too sweet" rather than just
asserting it.

**Suggested fix direction:** Add one beat between the visual inventory and the
wedding-cake punchline that puts the reader *in front of* the surface — the skin's
absence of pores, imperfections, or any sign that a human made this, so the Venus reads
more like a fine-china figurine come to life than a painting. Then let "It is technically
faultless and slightly too sweet, like a wedding cake" land as the verdict the reader
has just arrived at themselves, rather than a judgment handed to them.

---

### 2. VOICE-LOCK C VIOLATION — The Meanwhile card is flagged as muted/italic in the draft, and carries substantive content

**Section:** Meanwhile card

**The relevant text in the draft:**
> [MEANWHILE: region="the Paris art market" | title="A new buyer changes who needs the jury." | body="A rising middle class wanted smaller, cheaper pictures for ordinary walls, not ceiling-high mythologies — and a new kind of private art dealer was beginning to sell to them directly, outside the Salon. It was not yet an alternative to the official machine. But for the first time there was the faint outline of a way to make a living as a painter without ever winning the jury's medal."]

**What's wrong:** Looking at the shipped LandNarrative in `era-narratives.tsx`, the
Meanwhile card in the existing production version reads:

> "A rising middle class wanted smaller, cheaper pictures for ordinary walls, not
> ceiling-high mythologies — and a new kind of private art dealer was starting to sell
> directly to them. The Salon was still the only stage, but for the first time there was
> the faint outline of a way to live without it."

The draft's version is *longer* and uses hedging language ("It was not yet an alternative
to the official machine") that waters down the single clean punch the card needs. The
last clause of the draft — "the faint outline of a way to make a living as a painter
without ever winning the jury's medal" — is weaker than the shipped version's "the faint
outline of a way to live without it." The word "live" is doing more work than "make a
living as a painter." Voice-lock (c) also flags this: the While card carries a genuinely
substantive historical point (the emergence of the private market as an alternative to
state sanction), not a minor aside, and should be phrased with full narrative energy, not
hedged down.

**Required fix:** Use the cleaner, more energetic formulation: trim the hedging sentence
("It was not yet an alternative…") and end on a strong, punchy close. The shipped
production version already models this correctly — the draft's card is a step backward
from it.

---

### 3. BURIED WIT — the "skied" punchline is stated correctly but not given room

**Section:** "Where careers were made and skied"

**The line:**
> "A picture hung up near the rafters was said to be 'skied,' and a skied canvas was,
> for all practical purposes, an invisible one: nobody craned their neck three storeys
> up to discover a genius."

**What's wrong:** "nobody craned their neck three storeys up to discover a genius" is
good, but it's followed immediately by a section break and then the figure. There's no
brief beat of landing — the reader gets the joke and is immediately moved on. The
production version of this section in `era-narratives.tsx` handles this with a lighter
touch (no "three storeys" elaboration, just the clean "a canvas 'skied' up in the
rafters was a canvas nobody would ever really see"), which actually works better: it
trusts the image to land without spelling out the height.

The bigger issue is the opening of this section: **"All of it funnelled into a single
event"** is fine, but the Salon deserved a slightly stronger hook than "the only theatre
in town." The production version nails this with "This was the only theatre in town —
the one place where hundreds of thousands of Parisians came to look at, fight over, and
buy new art." Note "fight over" — the draft has "argue over and actually *buy* new art"
which is less vivid. "Fight over" is better: it introduces the emotional temperature
that everything following will depend on.

**Required fix (minor):** Change "argue over" to "fight over" (matching the production
version's stronger phrasing, which also better sets up the umbrellas line in Ch 1).

This is a minor fix but it's a voice-level issue — the draft's energy is slightly below
the bar set by the existing production chapters.

---

## SHOULD-FIX

---

### 4. COMPARISONS THIN — the hierarchy-of-genres paragraph has no analogy

**Section:** "One ladder, and the State owned it"

**The line:**
> "The principle was blunt: gods at the top, a bowl of fruit at the bottom, with the
> more ordinary subjects strung out in between."

**What's missing:** Voice-lock (b) calls for a healthy dose of comparisons as the #1
comprehension tool. The hierarchy-of-genres is one of those pieces of art-world machinery
that needs an analogy to land. The draft correctly limits it to the two endpoints (history
painting / still life) per the fact-pack note, but it never gives the reader an analogy
for *why* this hierarchy existed or what it felt like to be a genre painter in the wrong
category. Something brief — e.g., likening it to the way law or medicine ranked their own
subdisciplines (surgeons below physicians in pre-modern medicine; plumbers below
architects) — would give the reader a physical sense of the indignity, not just the
abstract structure.

**Suggested fix direction:** One parenthetical analogy after "A young painter who wanted
respect painted gods, not greengrocers." Something like: "(Think of it the way a
Victorian law firm treated its clerks versus its barristers: same building, completely
different futures.)" or a simpler, shorter hook. This need not be long — one half-sentence
of analogy is the voice-lock requirement.

---

### 5. WIT NOT GIVEN ROOM — the fini definition is too clinical

**Section:** "One ladder, and the State owned it"

**The line:**
> "The house style this machine produced prized *fini* (a surface blended so smoothly
> that you could not find a single brushstroke if you went looking)"

**What's missing:** The *fini* definition is factually correct but reads like a
glossary entry. The production version in `era-narratives.tsx` has "a surface blended
so smoothly you could not find a single brushstroke" — cleaner, and appropriately
concise given that the concept is picked up and amplified later in the Venus paragraph.
The draft's "if you went looking" is a small extra clause that adds nothing. More
importantly, the *wit opportunity* here — that this was the style's only real criterion
for greatness, that the entire aspiration was to make paint disappear — is left on the
table. The draft does note "The paint was supposed to disappear, leaving only the
picture" at the end of that paragraph, which is good; but the placement (end of a long
paragraph rather than following directly on the fini definition) reduces the impact.

**Suggested fix:** Move "The paint was supposed to disappear, leaving only the picture"
to directly follow the *fini* parenthetical, as the ironic payoff: "The house style
prized *fini* (a surface blended so smooth you could not find a brushstroke — the paint
was supposed to disappear, leaving only the picture). Clean line beat loose colour."
This is a minor structural tightening, but it gives the wit the "half-sentence of room
to land" the voice-lock calls for.

---

### 6. LOOKING OPPORTUNITY MISSED — the Salon hang figure caption doesn't make the reader look

**Section:** "Where careers were made and skied"

**The draft caption:**
> "The whole game in one room. Paintings packed frame to frame from near the floor to
> the rafters, and a crowd come to judge — and to buy. Where your canvas landed on this
> wall decided whether it had a career."

**What's missing:** The caption correctly explains the stakes, but it doesn't direct the
reader's eye to anything *specific in the image* — a particular cluster of paintings
jammed together, the tiny-looking people at the base of an immense wall of frames, the
sheer physical implausibility of anyone seeing anything hung above the third row. Compare
to the shipped `era-narratives.tsx` caption: "The whole game in one room: paintings
packed from knee height to the rafters, and a crowd come to judge. The hang barely
changed for a century." It's shorter and the "knee height" is a precise physical anchor
("from knee height to the rafters" makes you feel the vertical scale immediately). The
draft has "from near the floor" which is weaker.

**Suggested fix:** "from near the floor" → "from knee height." And consider one
directional beat: "Look at the top third — that's where careers went to die."

---

### 7. HOOK — the opening line is strong but the second sentence is a gear-shift

**Section:** "One ladder, and the State owned it"

**The lines:**
> "Before anybody breaks anything, look at what there was to break. In France around
> 1850 there was exactly one way to become a painter, and it was less a profession than
> a single narrow staircase with the State standing at the top of it."

**Issue:** The opening sentence is great. "Before anybody breaks anything" — clean hook,
appropriate promise. The second sentence is also good ("less a profession than a single
narrow staircase") but slightly over-explains by adding "with the State standing at the
top of it" — we already got "the State owned it" in the section header, and "and it was
less a profession than a single narrow staircase" would be more vivid on its own. The
"with the State standing at the top of it" extends the metaphor just slightly past the
point where the image is doing its best work.

**Suggested fix (very minor):** "it was less a profession than a single narrow staircase
with the State standing at the top of it" → "it was less a profession than a single
narrow staircase — climb it or you did not have a career. You had a hobby." (This also
tightens the move to "You had a hobby," which the draft defers to the end of the
paragraph and loses some of its punch by doing so.) The shipped production version nails
this by putting "You had a hobby" in its own sentence directly after the staircase
image. The draft's version buries it at the end of a longer paragraph.

---

### 8. STAKES LANDING — the closing section is good but the question is posed rather than earned

**Section:** "Who decides what a painting is for?"

**The line:**
> "So the table was set, and underneath every costume change to come — the loose
> brushwork, the wild colour, the shattered perspective — it stayed the same fight for
> a hundred years: *who gets to decide what a painting is for?*"

**What's missing:** This is the right question and it's correctly placed. But it is
*stated* as the stakes rather than making the reader *feel* them. The production version
in `era-narratives.tsx` handles this slightly better: "underneath the costume changes it
stayed the same fight for a hundred years: *who gets to decide what a painting is for?*
The Académie's answer was settled and serene…" — and then immediately pivots to the
rebels answering with "make it new," which gives the reader two positions in brief
collision. The draft's closing paragraph is longer and somewhat more explanatory
(two full paragraphs versus one in the production version), which makes the handoff to
Chapter 1 land a little softer.

Specifically: the draft explains the Académie's position ("Beauty, in this view, has
rules; the Académie knows them; and the Salon is simply where you prove you have learned
them") and then explicitly flags it as an authorial characterisation, not a quotation.
The parenthetical flag is correct and necessary, but it momentarily pulls the reader out
of the story. The production version avoids this by paraphrasing more lightly and moving
faster. The draft's version is not wrong, but it's slightly more lecture-y than the bar
established by the production chapters.

**Suggested fix:** Light trim of the characterisation paragraph; move faster to the
rebels' answer and the Courbet hand-off. The detail about the new buyer / rising middle
class is already covered in the Meanwhile card, so the second paragraph of this section
is doing some redundant work.

---

## Summary of grades

| Section | Grade | Blocker? |
|---|---|---|
| "One ladder, and the State owned it" | GOOD | No — SHOULD-FIX only |
| "Where careers were made and skied" | GOOD | No — minor fix |
| "What the jury loved" | NEEDS WORK | YES — looking failure |
| "The modern world loads the gun" | GOOD | No |
| "Who decides what a painting is for?" | GOOD | No — SHOULD-FIX |
| Meanwhile card | NEEDS WORK | YES — voice-lock C violation |

### MUST-FIX list (2 items)
1. **"What the jury loved" — looking failure**: the Venus description is correct but
   never makes the reader feel the surface. Add one beat that conveys the uncanny
   porcelain uniformity of the fini surface — the disappearance of the painter's hand —
   before the wedding-cake punchline. The line is good; the setup needs to earn it.
2. **Meanwhile card — voice-lock C violation**: the hedging sentence ("It was not yet
   an alternative to the official machine") dilutes the card's point. Trim to the cleaner
   formulation closer to what the production version ships (the faint outline of a way
   to live without the Salon — not "make a living as a painter without ever winning the
   jury's medal," which is both longer and weaker).

### SHOULD-FIX list (6 items, roughly ranked by impact)
3. **Hierarchy of genres — no analogy**: add one brief comparison for why the hierarchy
   felt humiliating to a still-life painter (not just that it existed).
4. **"argue over" → "fight over"** in the Salon section — matches the production version's
   energy and introduces the emotional temperature the umbrella story needs.
5. **fini definition — move the payoff line**: "The paint was supposed to disappear" is
   strongest directly after the *fini* definition, not at the end of the paragraph.
6. **Salon hang caption — "from knee height" not "from near the floor"**: the physical
   anchor is more vivid; consider one line directing the reader's eye in the image.
7. **Hook paragraph — "You had a hobby" earlier**: currently buried at end of opening
   paragraph; punchier directly after the staircase image (as in the production version).
8. **Closing stakes — light trim**: the authorial-characterisation parenthetical is
   correct but momentarily lecture-y; move faster to the rebels' answer and the
   Courbet hand-off.
