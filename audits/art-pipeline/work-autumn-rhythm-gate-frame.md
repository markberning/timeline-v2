# Gate report — COMPREHENSIVENESS + FRAMING/FAIRNESS

**Work:** Jackson Pollock, *Autumn Rhythm (Number 30)* (1950) — first Abstract Expressionism work-read
**Gate:** Comprehensiveness + Framing/Fairness
**Draft:** `audits/art-pipeline/work-autumn-rhythm-draft.md`
**Fact pack:** `audits/art-pipeline/work-autumn-rhythm-factpack.md`

---

## VERDICT: PASS WITH FIXES

The draft is strong on the core facets and unusually disciplined on the apocrypha
the prompt cares most about: the "action painting"-is-Rosenberg's-label correction
is handled cleanly and repeatedly; the "random splatter / drunk genius" cliché is
explicitly named and refuted with the Wright "no accident" quote plus the Namuth
record; the controlled-not-accidental reading is the spine of the "making" chapter.
Proportion is good and the genius-myth is partly defused (NY School set up, Krasner
present, sources listed in `lineage.parents`).

Two real gaps keep it from a clean pass, both on the **genius-myth / lone-inventor**
axis the prompt explicitly flags:

1. **[FIX] The drip-painting precedents are listed but never narrated, and the most
   load-bearing one (Janet Sobel) is missing entirely.** The lineage const names
   "Surrealist automatism / Native American sand painting / Cubism's flat field,"
   but the *prose* never tells the reader Pollock had sources at all — and the prose
   is where the lone-wild-man myth actually lives or dies. Siqueiros's drip
   experiments and Sobel's documented, Greenberg-acknowledged influence are both
   absent. This is the single biggest framing weakness.
2. **[FIX] Krasner is under-weighted relative to her documented role** — she appears
   as "his wife, in the next studio" and a secondhand-quote source, but the draft
   never tells the reader she was the more established avant-garde painter when they
   met and the one who plugged Pollock into the modernist abstraction and the
   network (Greenberg, Janis) that made his breakthrough legible.

Neither is a BLOCKER (no false claim is shipped; the omissions are of context, not
errors), but both should be fixed before ship because together they leave the
lone-genius framing the prompt asks us to resist standing taller than the evidence.

---

## 1. COMPREHENSIVENESS

**Covered well (no action):**
- Drip/pour **floor method** — central, vivid, accurate (raw unprimed canvas, all
  four sides, poured/flung off sticks/hardened brushes/syringe/trowel). ✓
- **Allover composition, no center** — its own chapter beat and annotation; named
  and explained, not just asserted. ✓
- **"Action painting" as a critics' label** — handled exactly right (Rosenberg,
  *ARTnews* Dec 1952, post-dates the work, never in Pollock's mouth), and reinforced
  in the afterlife chapter. ✓
- **Pollock's place in the NY School** — set up in the "floor" chapter (de Kooning,
  Rothko, Kline, Krasner; New York displacing Paris). ✓
- **The influence / downstream** — Color Field, Minimalism's non-relational surface,
  process/performance art, all named in the break chapter and `lineage.children`. ✓
- Medium (enamel/house paint), title history, provenance, scale-you-stand-inside,
  rights — all present and correct. ✓

**MAJOR missing facet — [FIX]:**

**1a. [FIX] Namuth's *films* are dropped; the draft says only "500-plus
photographs."** The fact pack (§1, §6, §9, §8.6) is explicit that Namuth shot
**500+ stills PLUS two films** in 1950–51, including the famous color film. The
films are arguably the more culturally consequential half of the Namuth record
(they are what fixed the "action" image of Pollock in the public mind). Dropping
them is an under-claim, and it also forfeits a clean chance to make the
controlled-not-random point even harder.
- *Caveat the fact pack already flags (§8.6): do NOT imply the films show* Autumn
  Rhythm *being made — the color film* Jackson Pollock 51 *is the on-glass setup, a
  separate work.* So any film mention must be scoped to "Pollock at work in 1950–51,"
  not "this canvas."
- **Suggested text** (replace the Namuth sentence in `AutMaking`, the para ending
  "...not flung down in a fit"):
  > The photographer **Hans Namuth**, who shot **more than 500 photographs** and
  > **two short films** of Pollock at work in 1950&ndash;51, left a record that
  > scholars have used to reconstruct the order of the layers in *Autumn Rhythm*:
  > the build was **deliberate and methodical**, laid in over months, not flung down
  > in a fit. (The films caught Pollock mid-pour and did as much as anything to fix
  > the public image of him as a painter of pure action &mdash; though, tellingly,
  > the famous color one shows him working on glass, not on this canvas.)
- Also update the const blurb for `making` (currently "Hans Namuth's 500-plus
  photographs show...") and the `figures` entry for Namuth ("Photographed him at
  work, 1950" → "Photographed and filmed him at work, 1950–51") for consistency.

**Everything else essential is present.** No other major facet is missing.

---

## 2. FRAMING / FAIRNESS

### 2a. Genius-myth / lone-inventor — [FIX] (the prompt's priority axis)

The draft does *some* of the work: it situates Pollock in the NY School and lists
his sources in the `lineage.parents` const. But a const field the reader may never
open is not the same as telling the reader, in prose, that the breakthrough had
roots. As written, the running narrative reads close to "a man alone in a barn
arrived at a way of working that had no real precedent" (the `AutFloor` line
literally says **"had no real precedent"**), which is the lone-wild-man frame the
prompt asks us to resist.

**[FIX] — "had no real precedent" overstates and should be softened.** Pollock's
*combination* (allover scale + body-method) was new; pouring/dripping paint was not.

- **Suggested edit** (`AutFloor`, first para): change
  > "...arrived at a way of working that had no real precedent."

  to
  > "...arrived at the way of working he is remembered for. Pouring and dripping
  > paint was not itself new &mdash; he had seen it done &mdash; but no one had built
  > a whole picture this way, at this scale, with the body moving around it on the
  > floor."

**[FIX] — add a short "where it came from" beat so the sources live in the prose,
not just the const.** Best home is the end of `AutMaking` (after the technique is
established) or a short addition to `AutFloor`'s "Why this is a beginning" section.
Suggested insert (new short paragraph):
  > None of the ingredients was invented from nothing. Pollock had worked in the New
  > York workshop of the Mexican muralist **David Alfaro Siqueiros** in 1936, where
  > artists dripped and poured industrial paint in "controlled accidents." He had
  > watched **Navajo sand-painters** work flat on the ground, building an image from
  > all sides &mdash; his own "literally be *in* the painting" line nods directly to
  > them. He had absorbed the Surrealists' **automatism** (letting the hand move
  > before the mind catches up) and **Cubism's** flat, edge-to-edge field. And in
  > 1946 he and Greenberg saw the allover drip canvases of **Janet Sobel**; Greenberg
  > later wrote that Pollock admitted they "had made an impression on him." What was
  > Pollock's own was the leap to scale, and to making the moving body the method and
  > the subject.

> **Note for reviser:** the Sobel fact is well-documented (Greenberg, *American-Type
> Painting*) and materially changes the fairness picture — she is the named woman
> Pollock's allover technique is most directly indebted to, and she is currently
> absent from both draft and fact pack. Recommend the fact-checker confirm the
> Greenberg-attribution wording before ship; "Pollock admitted that these pictures
> had made an impression on him" is Greenberg's paraphrase, so attribute it to
> Greenberg, not to Pollock as a quote. If kept tight, "Greenberg credited Sobel's
> allover canvases as an influence on Pollock" is the safe, scoped form.

### 2b. "Invented drip painting" overclaim — [PASS, with one nudge]

The draft does **not** claim Pollock invented drip painting — good. It carefully says
*Autumn Rhythm* is "one of the largest and best" of the drip works and frames the
*combination* as the break, not the technique. That is correctly scoped. The only
residual risk is the "no real precedent" line in 2a; fixing that closes the gap.
No first/only overclaim ships. ✓

### 2c. "Drunk genius / random splatter" cliché — [PASS, exemplary]

This is the draft's strongest framing move. The `AutMaking` chapter opens the "Not
random" section with "Here is the single most common thing said about this picture,
and it is wrong," then refutes it with the Wright quote (correctly flagged as a
condensation) and the Namuth-reconstruction evidence: "Call it controlled, or
choreographed. Do not call it accidental." No notes. ✓

One adjacent **[NICE]**: the afterlife chapter mentions the 1956 crash, "drunk," and
"more drinking and less work." This is accurate and fairly proportioned (it is one
sentence, factual, not used to explain the *art*). It does not feed the drunk-genius
cliché because the art-method chapter has already firmly separated the man's drinking
from the controlled method. No change needed — just confirming it was checked and is
in proportion.

### 2d. Krasner proportion — [FIX]

Krasner currently appears only as "his wife, in the next studio" (`figures`) and as
the secondhand source for the "I am nature" quote. Given her documented role —
the more-established avant-garde painter when they met, the one who introduced
Pollock to Greenberg, de Kooning, Hofmann and Janis and to the modernist abstraction
his breakthrough built on — "his wife, in the next studio" is thin to the point of
being a fairness problem in a piece that is otherwise careful about credit.

- **Suggested const edit** (`figures`, Krasner role): change
  > "Painter; his wife, in the next studio"

  to
  > "Painter; the more-established artist when they met; brought him into the scene"
- **Suggested prose** (one clause in `AutFloor`, where Krasner is first named):
  change "with his wife, the painter **Lee Krasner**," to
  > "with the painter **Lee Krasner** &mdash; when they met the more established of
  > the two, and the one who pulled him into the New York avant-garde and its
  > critics &mdash; whom he had married,"
- *Proportion caution (keep it fair both ways):* this is a work-read of a Pollock
  painting, not a Krasner profile. One clause + a fixed role tag is the right dose;
  do **not** expand into a Krasner mini-biography. The goal is to stop the prose
  from erasing her, not to relitigate the marriage.

### 2e. Proportion overall — [PASS]

Length, emphasis, and tone are well-judged: the looking-chapter does the most work
(correct for an art work-read), the apocrypha are corrected without the corrections
swallowing the story, and the price/dimension uncertainties are handled with exactly
the right restraint. The break chapter earns its claims. No proportion BLOCKER.

---

## SUMMARY OF ACTIONS

| # | Class | Item |
|---|-------|------|
| 1a | **[FIX]** | Restore Namuth's **two films** (currently photos-only); scope so the color film isn't implied to show *this* canvas. |
| 2a | **[FIX]** | Soften "had no real precedent" — pouring wasn't new; the allover scale/body-method is the scoped claim. |
| 2a | **[FIX]** | Add a prose "where it came from" beat (Siqueiros / Navajo sand-painting / automatism / Cubism / **Janet Sobel**) so the sources live in the narrative, not just the `lineage` const. |
| 2d | **[FIX]** | Give Krasner her documented weight — fix the `figures` role tag + one clause in prose (do not over-expand). |
| 2c | **[NICE]** | Crash/"drunk" line is in proportion — confirmed, no change. |

No BLOCKERS. No false claim ships. Apply the four FIXES, route the Sobel/Greenberg
attribution through the fact-checker for exact wording, then ship.
