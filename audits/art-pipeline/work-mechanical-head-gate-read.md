# GATE READ — Hausmann, *Mechanical Head (The Spirit of Our Time)*

**Gate:** Storytelling + Looking + Clarity/Voice (one of the 5 art gates)
**Draft judged:** `audits/art-pipeline/work-mechanical-head-draft.md`
**Fact source:** `audits/art-pipeline/work-mechanical-head-factpack.md`
**Scope:** prose + all reader-facing surfaces (hook, stats, section blurbs, annotations, provenance notes, the break passage, the quote). Did NOT edit draft/src; no commit.

---

## VERDICT: PASS WITH FIXES

Storytelling is strong and well-paced across all five sections. The central
idea — "the man defined by the gadgets stuck to him" — lands vividly and is
restated with escalating force (hook → Looking close → break quote →
afterlife). Looking walks the eye correctly (scale → face → attachments) on
Pompidou's authoritative list with no coordinates. Voice is largely clean.

No BLOCKERS. The fixes below are real but small: two voice-contract reader-command
 tics, one honesty-label tic, a dimensions inconsistency to reconcile, and a few
NICE polish items. None are ship-stopping on their own; clear the [FIX] items and
it ships.

---

## 1. STORYTELLING (primary axis)

Overall: **strong.** Pacing is good — Berlin sets stakes, Building delivers the
conceptual punch (assemblage = "photomontage stood up off the page"), Looking is
concrete and physical, the break states the rupture cleanly with the genuine
Hausmann line as the keystone, and afterlife closes on the same idea it opened on.
The "empty skull / apparatus bolted on" thesis is the spine and it recurs without
feeling repetitive (each restatement adds an angle: satire of measurement, war
verdict, mechanization-of-man).

No dull/listy/disjointed passages of concern. The one place that flirts with a
list — the Building "parts list" subsection — is *intentionally* a list and is
framed by a strong reason-to-care ("this is the single fact most often shipped
wrong"), so it reads as argument, not inventory.

- **[NICE]** PART A, Berlin blurb vs MchBerlin prose. The blurb is good; no change
  needed. The Zürich→Berlin "grew teeth" opening in MchBerlin is the best line in
  the piece — keep it.
- **[NICE]** MchBuilding, last paragraph — "*Mechanical Head* is photomontage
  stood up off the page" is the standout idea-sentence. Storytelling-wise this could
  arguably move *earlier* (it's the hook for why Hausmann specifically made this),
  but it also works as a closing button on the section. Leave as-is; flagging only
  as an option.

---

## 2. LOOKING

Does the looking section walk the eye over the assemblage to the real attached
objects and the blank wooden face via prose pointers, no coordinates? **Yes.**

- Three clean beats: **scale** ("a little over a foot tall... the size of an
  ornament") → **the face** ("the features carved shut... empty") → **the
  attachments** (cup/case/pipe, then ruler/tape/22/watch-gear/type-roller).
- All identifications follow **Pompidou's authoritative list** (factpack §1). The
  camera + typewriter are correctly flagged as "the popular telling, not the
  catalogue" in BOTH Building and Looking — exactly the §8.1 trap handling required.
- No coordinates, no blind crops, no pins. Pointers are spatial-by-prose
  ("the ring of objects fixed to the head," "bolted on," "attached where thought
  should be") — compliant with the no-blind-coordinates rule.
- The closing "Take in the whole of it at once... The man is not the head. The man
  is the gadgets bolted to it." is the payoff the looking walk should build to. It
  lands.

- **[FIX]** MchLooking, "The attachments" paragraph: *"here is what is attached and
  roughly where it sits."* The prose then does NOT actually say where anything sits
  (no "near the temple," "at the crown," etc.) — it lists what is attached and what
  each means. The phrase over-promises a spatial walk it doesn't deliver, and
  "roughly where it sits" is the kind of hedge that reads as a placeholder.
  **Suggested rewrite:** *"Following the museum's caption, here is what is attached."*
  (Drop "and roughly where it sits.") This is honest to what the prose does and
  avoids implying coordinate-level placement the source can't support.

---

## 3. CLARITY + VOICE CONTRACT

Mostly clean. Jargon is defined on first use (photomontage, assemblage,
provenance, readymade, sound poet, Weimar Republic all inline-glossed). No walls
of text — paragraphs are reader-sized. No `&mdash;` misuse in plain string fields;
em-dashes in prose are rendered as real "—" inside JSX/quoted prose (acceptable in
narrative), and the entity-escaped curly quotes/accents (`&uuml;`, `&ldquo;`,
`&ndash;`, `&rsquo;`) are correctly used in JSX text — not raw `—` in a bare TS
string field. The quote block uses `&ldquo;...&rdquo;`, single variant, no splice —
compliant with §4.

### Reader-commands (voice contract violation — flag every)

- **[FIX]** MchLooking, "The object" opening: *"**Stand in front of it** and the
  first surprise is the scale."* Direct command to the reader. **Suggested
  rewrite:** *"The first surprise is the scale."* or *"In the room, the first
  surprise is the scale."*
- **[FIX]** MchLooking, "The face" opening: *"**Look at the face.** It is a
  smooth, expressionless wooden dummy head..."* Reader-command. **Suggested
  rewrite:** *"The face is a smooth, expressionless wooden dummy head..."* (Merge
  into the next sentence.)
- **[NICE]** MchBuilding, "The parts list" para: *"Here is where care matters..."*
  Borderline — it's narrator-framing of why the fact is hard, not a command, and it
  earns the list that follows. Acceptable. Leave.

### Honesty-labels / meta-narration (flag every)

- **[FIX]** MchBuilding opening: *"First, the date, because it is genuinely
  uncertain and **you will see it stated three different ways.**"* The "you will
  see it stated" is mild reader-address + meta. The *content* (date is uncertain,
  use c.1919–20) is required by §8.2 and must stay — only the framing tic should go.
  **Suggested rewrite:** *"First, the date, which is genuinely uncertain — it is
  stated three different ways."* Keeps the fact, drops the "you will see."
- **[NICE]** MchAfterlife, "only one of its kind" para: *"(Say it precisely: the
  only one of its kind to survive, not 'the only assemblage he ever made.' The
  narrower claim is the safe one.)"* This is the factpack §8.5 trap surfacing as
  visible editorial-process narration ("the safe one") — a mild honesty-label /
  behind-the-curtain aside. The *distinction* is correct and worth keeping in the
  prose; the meta-commentary about why is the tic. **Suggested rewrite:** *"Precisely:
  the only one of its kind to survive — not the only assemblage he ever made."*
  Drop "The narrower claim is the safe one."
- **[NICE]** "the single fact most often shipped wrong" (Building) — "shipped"
  is faintly internal-process vocabulary. Reads fine to a lay reader as "gotten
  wrong"; low priority. Optional swap: "the single fact most often gotten wrong."

### Condescending glosses

- None found. Glosses are genuine first-use definitions, not over-explaining of
  common words.

### Undefined jargon on first use

- None. "double-decimetre" is given as a ruler in context; "optophonetic" is in
  scare-quotes and contextualized as sound-poetry. Fine.

---

## ACCURACY CROSS-CHECK (within this gate's lane — flagging for the fact gate too)

- **[FIX] Dimensions inconsistency — reconcile before ship.** PART A `dimensions`
  field = `1 ft 0 3/4 in × 8 1/4 in × 7 7/8 in` (height = 12.75 in). The stats
  array and prose are consistent with this (~1 ft tall). BUT MchLooking prose says
  *"about 1 ft 3/4 in, roughly 32 cm."* Factpack §1/§9 = **32.5 cm = ~12.8 in =
  ~1 ft 0.8 in.** Two problems: (a) "1 ft 3/4 in" in Looking ≠ "1 ft 0 3/4 in" in
  PART A — the "0" is dropped, so "1 ft 3/4 in" reads ambiguously as 1 ft + 3/4 in,
  which is actually correct numerically but visually inconsistent with the field
  string; (b) "roughly 32 cm" rounds 32.5 down — factpack is 32.5 cm. **Suggested
  fix:** make Looking read "about 1 ft ¾ in, roughly 32.5 cm (≈12.8 in)" and keep
  PART A's string identical in form. Per `feedback_art_dimensions_imperial`,
  imperial is primary; the cm parenthetical is fine as an aid but should match the
  source (32.5, not 32). Defer final call to the fact gate, but the internal
  inconsistency is a clarity issue in this lane.
- The quote handling is **correct** per §4: single variant, quoted as "one careful
  translation," explicitly flagged as varying, attributed to Hausmann's
  retrospective account. Good.
- Camera/typewriter trap (§8.1) handled correctly in all three places it appears.
- Date (§8.2), title distinctness (§8.3), "only one of its kind" (§8.5) all handled.
- Provenance Höch 1922–1966 correctly hedged as "Pompidou-linked account... not
  independently confirmed" (§6).
- Rights pd-us / EU-© split correct (§7).

---

## SUMMARY OF ACTIONABLE ITEMS

| # | Class | Location | Issue |
|---|-------|----------|-------|
| 1 | FIX | MchLooking "The object" | reader-command "Stand in front of it" |
| 2 | FIX | MchLooking "The face" | reader-command "Look at the face." |
| 3 | FIX | MchBuilding opening | meta/reader-address "you will see it stated" |
| 4 | FIX | MchLooking "The attachments" | "roughly where it sits" over-promises placement it never gives |
| 5 | FIX | MchLooking prose vs PART A | dimensions inconsistency (1 ft 3/4 in vs 1 ft 0 3/4 in; 32 vs 32.5 cm) |
| 6 | NICE | MchAfterlife | honesty-label aside "The narrower claim is the safe one" |
| 7 | NICE | MchBuilding | "shipped wrong" / "most often shipped" — internal-process vocab |

No BLOCKERS. Clear the five [FIX] items (all small) and the read ships.
