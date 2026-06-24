# Gate read — STORYTELLING + LOOKING + CLARITY/VOICE
## *Floor Burger* (Claes Oldenburg, 1962) — work-read

**Gate:** storytelling (primary) + looking (concrete via prose pointers) + clarity/voice-contract.
**Source of truth:** `work-floor-burger-factpack.md`. Draft: `work-floor-burger-draft.md`.

---

## VERDICT: PASS (no blockers)

This is a strong, ship-ready draft. The seven-foot soft sagging burger, the
humor-as-content, and the Pop-goes-3D / anti-monumental argument all land across
the five sections. The looking section is concrete and coordinate-free. Voice
contract is clean: no meta-narration, no reader-commands, no honesty-labels, no
condescending glosses; "soft sculpture" is inline-defined on first prose use; no
literal em-dash and no `&mdash;` in any TS string field. Findings below are all
[FIX] / [NICE] polish — none block ship.

---

## 1. STORYTELLING (primary)

**Overall: compelling, well-paced, voice is good.** The five sections build a real
arc (shop → making → the object → why it broke → afterlife/scandal), the humor is
present without being mugged, and the central idea (a monument that sags) is hit
from a fresh angle each section rather than repeated flat. Two soft spots:

- **[FIX] FlrBreak, opening ("To feel why a giant soft hamburger mattered, set it
  against the thing it mocks").** This edges toward telling-the-reader-how-to-read
  ("to feel why… set it against"). It is borderline meta-narration / a soft
  reader-instruction rather than just telling the story. Suggest rewriting to state
  the contrast directly:
  > "A giant soft hamburger only mattered because of the thing it mocked. For most
  > of Western history a **monument** was a fixed set of qualities."
  This keeps the before/after contrast but drops the "to feel why… do X" framing.

- **[NICE] "The break" middle paragraph (line 214) is the densest block in the
  piece** — "First… Second… Third" runs across two paragraphs and the second beat
  ("medium contradicts the genre") packs four clauses ("cannot stand… cannot strike…
  cannot hold… droops and keeps drooping"). It reads well but is the one spot that
  approaches a wall. Optional: break the "Second" sentence's piled clauses into two
  shorter sentences for breathing room. Not required.

- **[NICE] FlrAfterlife is slightly listy in the conservation paragraph** (line 242:
  "the internal foam and cartons were repositioned, new internal support was built
  in…, the painted surface was cleaned, and flaking paint was re-adhered") — a
  four-item procedural list. It is saved by the "fixing an old sofa" payoff line, so
  it works, but it is the most inventory-like sentence in the draft. Optional trim.

No dull or disjointed passages otherwise. The hook, the stats, and the section
blurbs are all live and on-voice.

---

## 2. LOOKING (concrete, prose pointers, no coordinates)

**PASS — this is the strongest section for the gate's purpose.** The looking
material exists in two places and both are concrete and coordinate-free:

- **The `annotations` array (PART A)** covers all six required surfaces — the giant
  sagging bun, the patty, the slump/soft folds, the hand-painted canvas surface, the
  scale-you-stand-over, and the seams/stitching/pickle. Each `where` field is a
  plain-language location pointer ("the top of the object," "the dark disc wedged in
  the middle," "the whole object where it meets the floor"), never a coordinate or
  blind crop. Matches `feedback_no_blind_image_coordinates`.
- **FlrLooking prose** makes the soft sculpture physically real: the bun "bulges and
  settles rather than sitting crisp," the patty "a thick dark disc wedged in the
  middle," the slump where "gravity finished the shaping," and the stand-over-it
  viewpoint ("you look down at it… the way you would look down at a meal on a table").
  The scale (seven feet across, four-feet-four tall, sits on the floor) is concrete.

- **[FIX] The seams / sewn surface is the ONE looking point under-served in the
  rendered prose.** The `annotations` array nails it ("The seams of the stitched-and-
  stuffed forms are findable along the joins"), but FlrLooking's four sub-sections
  (size / parts / slump / viewpoint) never tell the standing viewer to find the
  visible seams and stitching on the object itself — the sewn-ness lives in FlrMaking
  (how it was built) but not in FlrLooking (what you see). Since the seams are a
  required looking surface and they are physically visible, add one or two sentences
  to the "parts" or a short closing beat in FlrLooking pointing to the findable seams
  and the underside zippers. The factpack (§5.6) explicitly lists this as a looking
  point. Low effort, closes the only looking gap.

No coordinates, no pins, no "look at the upper-left" anywhere. Good.

---

## 3. CLARITY + VOICE CONTRACT

Swept the full draft against every banned tic. Result: **clean.**

- **Meta-narration:** none asserting "this chapter will…" / "as we'll see." The two
  self-referential phrases are mild and acceptable: "the burger we are looking at"
  (FlrStore close) and "what the next chapter is really about" (FlrMaking close).
  - **[NICE] "what the next chapter is really about" (line 170)** is the closest
    thing to meta-narration in the draft — it narrates the structure ("the next
    chapter"). It is gentle and functions as a hand-off, but if the framing gate is
    strict on `feedback_no_meta_narration`, consider "and that sagging is the whole
    point" without the "next chapter" pointer. Borderline, not a blocker.
- **Reader-commands:** none. "You stand over it," "you look down," "you tower over a
  hamburger" are descriptive second-person (the viewer's experience), not imperatives
  ("notice," "look at," "imagine"). Acceptable.
- **Honesty-labels:** none ("to be honest," "the truth is," "honestly"). The
  parenthetical fact-handling asides ("The wording matters, because it is often
  misquoted…"; "loose descriptions sometimes call it latex or vinyl, but the
  gallery's own record says acrylic") are substantive accuracy notes, not honesty
  throat-clearing. Fine.
- **Condescending glosses:** none. The two inline definitions ("soft sculpture";
  "provenance") are necessary first-use definitions for a zero-knowledge reader, not
  talking-down.
- **Jargon-before-define:** "soft sculpture" is introduced as "soft" (FlrStore, "He
  made them **soft**"), then inline-defined one paragraph later ("A **soft sculpture**
  is exactly what it sounds like: a three-dimensional artwork made of pliable,
  yielding material, sewn from cloth and stuffed, rather than carved…"). Defined on
  first prose use. PASS. "provenance" is inline-defined where first used (FlrAfterlife).
- **Walls of text:** no paragraph is a true wall. The break middle paragraph (line
  214) is the densest — see [NICE] under Storytelling. Acceptable.
- **Literal "—" in a rendered TS string:** NONE. Em-dashes appear only in markdown
  headers and code comments, never inside a string value (hook / blurb / detail /
  note / where / heroCredit). PASS.
- **`&mdash;` misused inside a plain TS string field:** NONE. The const string fields
  (PART A) use plain prose with no HTML entities. JSX prose (PART B) correctly uses
  `&ndash;` `&hellip;` `&ldquo;` `&rdquo;` `&rsquo;` — these are valid in rendered
  React, not TS string fields. PASS.

---

## ACCURACY SPOT-CHECK (against factpack — not the primary gate, flagging only)

All facts in the draft trace to the factpack and the apocrypha/traps are handled
correctly:
- Title both-correct (not "wrong") — handled (FlrStore implies original/standing).
- Medium = acrylic, not latex/vinyl — explicitly handled (FlrMaking parenthetical).
- Dimensions ~7 ft across × ~4 ft 4 in, AGO 132×226 cm — correct, no invented diameter.
- One-of-a-set, not "the first soft sculpture" — correctly scoped (FlrStore: "one of a
  set rather than the lone first example").
- 1967 acquisition (not 1966) despite 66/29 prefix — correctly explained.
- Quote "**other** than sit on its ass" + the misquote flag + Oldenburg's "not a
  manifesto" gloss — all present and verbatim-correct.
- Patty Mucha credited; pickle = replacement; ~700 lb as approximation; $2,000 as a
  token/handshake figure not a market price — all correct.

- **[FIX — verify, not rewrite] "roughly nine-foot plywood ketchup bottle" (FlrAfterlife,
  line 237).** The factpack (§9 stat 3) gives the protest bottle as "~9-ft / 2-m." 9 ft
  ≈ 2.74 m, not 2 m, so the factpack's own "~9-ft / 2-m" is internally loose. The draft
  picks "nine-foot," which matches the factpack's foot figure — acceptable, but since
  the factpack flags the metric as approximate, keep "roughly nine-foot" (the draft
  already hedges with "roughly"). No change needed; noting the factpack's own slack so a
  later editor doesn't "correct" it to 2 m / ~6.5 ft.

---

## SUMMARY OF ACTIONABLE FINDINGS

| # | Sev | Location | Issue | Fix |
|---|-----|----------|-------|-----|
| 1 | [FIX] | FlrLooking | Sewn seams/zippers (a required looking surface) appear in annotations + FlrMaking but not in the FlrLooking prose the viewer reads while standing over the object | Add 1–2 sentences in "parts" or a closing beat pointing to the findable seams/stitching + underside zippers |
| 2 | [FIX] | FlrBreak open (line 207) | "To feel why… set it against the thing it mocks" edges into reader-instruction / soft meta | Restate the contrast directly (see suggested rewrite) |
| 3 | [NICE] | FlrMaking close (line 170) | "what the next chapter is really about" mild structural meta | Optional: "and that sagging is the whole point" |
| 4 | [NICE] | FlrBreak middle (line 214) | densest block; piled "cannot… cannot… cannot" clauses | Optional: split into two sentences |
| 5 | [NICE] | FlrAfterlife (line 242) | four-item procedural list in conservation para | Optional trim (saved by the "old sofa" payoff) |
