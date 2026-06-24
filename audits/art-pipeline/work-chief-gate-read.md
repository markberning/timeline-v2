# GATE READ — Franz Kline, *Chief* (1950)

**Gate:** Storytelling + Looking + Clarity/Voice (one of the 5 work-read gates)
**Scope judged:** all five sections (`ChfRailroad`, `ChfProjector`, `ChfLooking`, `ChfBreak`, `ChfAfterlife`), the `CHIEF` const (hook, stats, section blurbs, annotations, provenance, figures, lineage), against `work-chief-factpack.md`.

---

## VERDICT: **PASS (with FIXes)**

No BLOCKERs. The draft is genuinely strong storytelling: the four anchor beats land (black-and-white gesture, the locomotive name, the projector-discovery story, and — best of all — the white-is-painted point, which is built into a real crescendo across the Looking section and paid off again in the Break and the calligraphy refusal). The Looking section makes the field concrete in prose pointers with no coordinates, and the voice is plain and confident throughout. The findings below are a handful of CLARITY/voice tics (a couple of soft reader-commands and one honesty-label), one LIGHT redundancy risk, and a clutch of NICEs. None are ship-blocking; all are cheap to apply.

---

## 1. STORYTELLING (primary)

**Overall: strong.** Each of the five sections has its own job and a clean arc:
- **Railroad** sets up the "stuck representational painter in his late thirties watching louder friends rewrite art" stakes — a real human hook, not a wiki summary.
- **Projector** tells the standard story warmly, then hedges it exactly as the factpack demands (de Kooning's "took quite a while to work it out"), without deflating it. Well handled.
- **Looking** is the centerpiece and earns it (see §2).
- **Break** does NOT just restate Looking — it reframes the same observations as the historical argument (subtraction vs. richness; stroke-as-structure vs. contour/sign; speed → Rosenberg's "action painting"). The three sub-beats build.
- **Afterlife** closes the three loose threads (title, calligraphy refusal, gift) and ends on a clean callback to the "stuck painter" opening. Good ring composition.

No dull/listy/disjointed prose passages. The only listy surfaces are the deliberately telegraphic `blurb` fields and `annotations.where` strings, which is correct for those slots.

### [FIX-1] — Break section risks re-treading Looking (storytelling)
**Location:** `ChfBreak` paragraph 3 ("stroke as structure") and the second half of `ChfLooking` para 2 / the "white is painted" subsection.
The "the stroke *is* the structure" / "girder holds up a building" / "the white is painted too, so it's a two-way structure" material appears in near-identical form in both Looking and Break. It works because Break recasts it as *argument* rather than *observation*, but a reader going section-to-section will feel the echo. **Suggested:** in `ChfBreak` para 3, trim the white-is-painted recap to a single clause that points back ("and because, as we saw, the white is painted too, this is a real two-way structure") rather than re-explaining the mechanism. Keep the fresh contour/sign distinction, which is genuinely new to Break. Low-effort, tightens the read.

---

## 2. LOOKING

**The looking section makes the black-and-white field concrete via prose pointers, no coordinates — PASS.** Every required percept from the factpack §5 is present and made physical:
- **Broad black bars** — "a handful of broad black strokes... A few wide, loaded black bars dominate the whole picture" (concrete count + load).
- **Painted white around/through the black** — "at the edges of the black bars it pushes back *into* them and even over them, white laid on top of black" (the through/over detail, not just "the white matters").
- **Speed/drips at edges** — "Run your eye along the borders... the brush dragged, ran dry, broke into streaks, threw small drips... a record of velocity" (directs the eye to a real location-by-description, no pin).
- **Girder-like structure** — "cross, brace, and lean on one another like beams or girders... a weight-bearing scaffold standing in the room with you."
- **No depicted object** — "There is no train, no figure, no scene."
- **Scale/body** — "roughly five feet tall by six feet wide... your whole body, not just your eye, reads them" (echoed well in the `scale` annotation).

The figure/ground "trading places" idea is explained as a *thing you can watch happen* ("sometimes the black reads as a shape on white, and then the white reads as a shape cutting into black"), which is exactly the right register for a looking pointer. No image coordinates anywhere. The annotations array mirrors these six points faithfully and adds nothing unsourced.

### [NICE-1] — one more concrete white-locator
**Location:** `ChfLooking`, "The white" subsection.
The white-pushes-back claim is strong but stays general. If a born-verified image is wired, a single concrete pointer ("look where a black bar narrows abruptly — that's white bitten in over it") would make it even more findable. Optional; current prose already clears the bar.

---

## 3. CLARITY + VOICE CONTRACT

Checked every section for: meta-narration, reader-commands, honesty-labels, condescending glosses, pre-definition jargon, walls of text, literal "—" in rendered strings, `&mdash;` misused in a plain TS string.

**Em-dash / mdash discipline: CLEAN.** No literal `—` in any rendered string. `&ndash;` is used only for date/lifespan ranges (1910&ndash;1962, 1949&ndash;1950) — correct. `&mdash;` does NOT appear misused inside a plain TS string field; the const's prose uses commas/colons/parens as the contract requires. Inline-definitions use parens correctly ("a device that throws an enlarged image...", "the documented chain of who has owned a work and when"). Jargon is defined on first use: **Abstract Expressionists / New York School**, **Bell-Opticon**, **action painting**, **calligraphy**, **provenance** all inline-defined before or as they're used. Good.

### [FIX-2] — honesty-label / meta-narration: "as plainly as he ever said anything about his work"
**Location:** `ChfLooking`, white subsection, lead-in to the Kline blockquote: *"Kline said this himself, as plainly as he ever said anything about his work, and the line is the key to standing in front of Chief:"*
"the line is the key to standing in front of *Chief*" is mild meta-narration (telling the reader how important the upcoming sentence is / how to read). The voice contract flags "the key to..." framing. **Suggested rewrite:** *"Kline said this himself, as plainly as he ever put it:"* — drop "the line is the key to standing in front of Chief," let the quote land on its own.

### [FIX-3] — reader-command stack: "Now do the thing that changes the whole painting"
**Location:** `ChfLooking`, white subsection opener: *"Now do the thing that changes the whole painting: stop looking at the black and look at the white."*
This is a direct reader-command ("do the thing," "stop looking," "look at"). One imperative for orientation is fine ("Stand in front of it" opening the section reads as voice, not command), but stacking three in a row tips into instructing the reader. **Suggested rewrite:** *"The move that changes the whole painting is to stop reading the black and start reading the white."* — keeps the pivot, drops the command stack.

### [FIX-4] — reader-command: "Hunt for a train... and you will not find one" / "Resist the urge to find the train"
**Location:** `annotations` → "No depicted object" detail: *"Hunt for a train, a figure, a scene, and you will not find one... Resist the urge to find the train; the painting refuses to be a picture of it."*
Two reader-commands ("Hunt for...", "Resist the urge..."). The factpack's own looking-point uses "Resist the urge to find the locomotive," so this is inherited, but in the annotation slot it reads as instruction. **Suggested:** soften to description — *"There is no train, no figure, no scene to find. The forms run off the edges of the canvas, implying motion past the frame, but the title points at a feeling of power and speed, not a picture of the locomotive it's named for."* Keeps the point, drops both commands. (Mirror this in the `ChfAfterlife` title paragraph, which already handles it well as description — that one is fine.)

### [NICE-2] — "the guess the word invites" (mild condescension)
**Location:** `ChfAfterlife`, title subsection: *"Not for a person, and not for a Native American chief, the guess the word invites."*
Borderline — naming the reader's likely wrong guess can read as slightly knowing. It's light and the content (heading off the Native-American-chief misread) is genuinely useful per factpack §8.3. **Suggested if trimming:** *"Not for a person, and not for a Native American chief — though the word invites that read."* Optional. (Note: this is the one spot where the contract's anti-em-dash rule and the suggestion collide — keep it comma'd: *"...not for a Native American chief, though the word invites that read."*)

### [NICE-3] — "you'd write on a clean page" gloss
**Location:** `ChfLooking`, white subsection: *"the way you'd write on a clean page."* Fine as-is; it's a clarifying analogy, not condescension. No change needed — listed only so the gate record shows it was considered and cleared.

### Walls of text: CLEARED
The `ChfProjector` first paragraph is the longest in the draft (the full projector story), but it's a single continuous narrative beat with internal momentum, not a wall — and it's followed by two short paragraphs that break and qualify it. Acceptable. All other paragraphs are reader-sized.

### Accuracy spot-check against factpack (clarity-of-fact, not the fact gate's job, flagged for the fact gate)
All load-bearing facts in this gate's surfaces track the pack: white-is-painted (§2/§4/§8.4), locomotive title not over-specifying the line (§2/§8.3), projector hedge (§8.1), calligraphy-refused framing + "calligraphy is simply the art of writing" + 1960 Sylvester interview (§2/§8.2), Rosenberg "action painting" 1952 (§3), dims as ft/in (§1/§8.5), credit line full "Mr. and Mrs." form (§1/§8.6), in-copyright + ARS (§7). The KEY STATEMENT blockquote is verbatim per §4. No invented price (provenance `price: null`). **One item to hand to the fact gate, not block here:** the draft asserts Solinger as "later a notable figure at the Whitney Museum" / "later a Whitney Museum figure" — the pack marks this as *contextual, not load-bearing* (§6) and softens it to "a Whitney figure"; the draft's "notable figure at the Whitney Museum" is slightly firmer than the pack. Flag for fact gate to confirm wording.

---

## SUMMARY OF FINDINGS
- **BLOCKER:** none.
- **FIX:** FIX-1 (Break re-treads Looking — trim the white recap to a callback); FIX-2 (honesty-label "the key to standing in front of Chief"); FIX-3 (reader-command stack "Now do the thing... stop looking... look at"); FIX-4 (reader-commands "Hunt for a train" / "Resist the urge" in the no-object annotation).
- **NICE:** NICE-1 (one concrete white-locator if image wired); NICE-2 ("the guess the word invites"); NICE-3 (cleared, no change).
- **For the fact gate (not this gate):** confirm "notable figure at the Whitney Museum" vs. pack's softer "a Whitney figure."
