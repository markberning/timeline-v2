# GATE — Storytelling + Looking + Clarity · Tanguy, *Indefinite Divisibility* (`tanguy-divis`)

**Gate:** Storytelling (primary) + Looking + Clarity/Voice-Contract
**Draft judged:** `work-tanguy-divis-draft.md` · **Factpack:** `work-tanguy-divis-factpack.md`
**Verdict: PASS WITH FIXES.** No blockers. Five FIX items (one storytelling-repetition, one clarity reader-command, three voice/markup), plus NICE polish. The three pillars (invented deep-space dreamworld, hard-precision rendering of nowhere-objects, the self-taught de-Chirico-window path) all land and are accurate to the factpack. Looking is concrete and prose-pointer-only with no coordinates, and holds "reads like" / never "is."

---

## 1. STORYTELLING (primary)

**Strong overall.** The spine is compelling and well-sequenced: World opens on the one-world-painted-forever idea and the de Chirico thunderbolt; Making nails the central paradox ("meticulous, illusionistic rendering of things that exist nowhere"); Break inverts the expected modernist move (everyone else loosened finish to leave the real world; Tanguy kept the finish and invented the world) and earns the "abstraction that looks real" line; Looking makes the dreamscape physical; Afterlife handles the fast provenance + cliché lineage + the in-copyright note gracefully. The self-taught path lands clearly. No dull/listy/disjointed passages of the kind the gate hunts for — the annotations array is by-design list-shaped but the rendered prose (the only reader surface) flows.

### [FIX] Three-way repetition of the "totem / machinery / marble-run, those-are-analogies" beat — `world`?/`making`/`looking` + annotations
The same disclaimer-shaped move ("reads like a totem / invented machinery / child's marble-run, but those are viewers' analogies, not the thing itself") appears in **Making** (TanMaking p3, line 153: "reads to some viewers like a piece of invented machinery, to others like a totem; those are analogies, not identifications"), in **Looking** (TanLooking p2, line 188: "like a totem, like a piece of invented machinery, even like a child's marble-run, and every one of those is a viewer's analogy"), AND in the `annotations` "central stacked pile-up" detail (line 91). Three near-verbatim statements of the same caveat is the listy/repetitive failure mode. The factpack correctly demands the caveat be *made*, but it only needs to land hard **once** as a reader idea.
**Suggested rewrite:** Keep the full analogy-and-caveat in **Looking** (its natural home, beside the form itself). In **Making**, compress to a single clause that does narrative work rather than re-litigating: e.g. "(What it is a shadow *of* stays open — Tanguy invented his forms from nothing, so naming them is the viewer's reflex, not the picture's claim.)" Drop the parallel "to some viewers... to others..." list there. The annotations detail is a separate non-prose surface and can keep its caveat.

### [NICE] "develops before my eyes" key statement — strong, but the source-caveat sentence is long
`looking` line 204 carries the source-uncertainty correctly and honestly (factpack §4/§8.6 require it), but the run-on "The line is reproduced again and again and is consistently attributed to him; the catch is that the period source it came from is not pinned down in the available record, so it is given here as a documented statement of his method, attributed to Tanguy, rather than tied to a specific magazine or date:" is a 50-word single sentence that slightly stalls the momentum into the quote. Optional split into two sentences. Content is accurate — keep the substance.

### [NICE] Afterlife "cliché" payoff is good; "biomorphic shapes that look organic and are nothing" (line 230) is a nice echo of the central thesis. No change.

---

## 2. LOOKING

**Concrete and compliant.** The looking section (`TanLooking`) makes the dreamscape physical through prose pointers only — no coordinates, no blind crops/pins (satisfies `feedback_no_blind_image_coordinates` and the brief). All four required anchors are present and grounded:
- **Central stacked totem** — "Near the middle, a tall pile-up of smooth forms rises from the ground, stacked and balanced, climbing higher than anything else" (line 188). Concrete, placed by relation ("near the middle"), never gridded.
- **Cast shadows on the empty plain** — "each form throws a long, dark, hard-edged shadow across the plain, raked by a low, steady light... planting each shape on the ground" (line 193). Ties shadow to the de Chirico borrowing — good.
- **High horizon / airless deep space** — "the ground runs a long way back to a horizon set high in the picture, opening an enormous empty distance" + "the space appears infinite, like an endless desert" (line 196, museum-attributed). Good.
- **Airless / sourceless light** — "a strong, warming glow with no visible sun anywhere... comes from nowhere and lands evenly" (line 196). Concrete and faithful to factpack §5.5.

**"Reads like" not "is" — held throughout.** Line 188 explicitly: "every one of those is a viewer's analogy laid over the form, not the form's identity. What is actually there is a stack of pale, modeled, weighty shapes that match no nameable object." Bone/stone objects (line 193): "invented and unidentifiable, modeled with real volume but answering to nothing real." Fully compliant with the non-referential lock (factpack §8.4).

### [FIX] Reader-command "Resist the urge to name it" — `looking` line 188 (voice contract; see §3). Flagged in Clarity below; it bears on Looking because the same imperative appears as "Step back from the subject and look at the technique" (line 199) and in the annotations "illusionistic finish" detail ("Step back from the subject and notice the technique," line 96).

---

## 3. CLARITY + VOICE CONTRACT

Scanned for: meta-narration, reader-commands, honesty-labels, condescending glosses, jargon-before-define, walls of text, literal "—" in plain TS strings, `&mdash;` misused inside plain TS string fields.

### [FIX] Reader-commands (imperative addressed at the reader) — multiple
The voice contract bans commanding the reader. Instances:
1. `looking` line 188: **"Resist the urge to name it."** Direct imperative.
   **Rewrite:** "The urge is to name it — and the picture refuses every name." (states the same, not as a command)
2. `making` line 148: **"That is worth holding onto before looking, because..."** — soft meta-command + meta-narration about the act of looking.
   **Rewrite:** "The objects are deliberately not anything: smooth and modeled and weighted, yet the eye keeps reaching for a word — a machine, a stack of bones, a tower of polished stones — and the word keeps not fitting."
3. `looking` line 199: **"Step back from the subject and look at the technique itself, because the technique is the argument."** — imperative.
   **Rewrite:** "The technique itself is the argument. The forms are rendered with smooth, hard, almost academic modeling..."

(The annotations "illusionistic finish" detail at line 96, "Step back from the subject and notice the technique," is the same tic on a non-prose surface — lower priority but worth aligning for consistency.)

### [FIX] `&mdash;` / `&ndash;` HTML entities inside JSX — VERIFY THESE ARE JSX, NOT PLAIN STRING FIELDS
The voice contract (draft line 13) says: literal "—" banned in plain TS string fields; **JSX uses `&mdash;`**. The PART B prose is JSX (inside `<p style={proseStyle}>...`), so `&mdash;` and `&ndash;` there are **correct** (e.g. lines 125, 128, 145, 153, 165, 170, 173). **No fix needed in PART B.** Confirmed: the PART A const object string fields (`hook`, `blurb`, `note`, `detail`, `where`, `label`, etc.) use commas/parens/colons and contain **no literal "—" and no `&mdash;`** — compliant. Flagging only as a verify-pass: any later hand-edit must keep entities in JSX and out of the const strings.

### [NICE] Inline-define discipline — clean
Jargon is defined before/at first use: **Surrealism** is defined inline ("the movement that tried to put the unconscious mind... directly onto the canvas," line 128) at first reader-facing use; **provenance** defined inline ("the documented chain of who has owned a work in order," line 222); **self-taught**, **émigré**, **biomorphic** are either glossed or plain-English-clear. No jargon-before-define violations.

### [NICE] No honesty-labels / no condescending glosses
The quote source-caveat (line 204) is substantive scholarship, not a throat-clearing honesty-label ("to be fair," "honestly," "I'll admit") — it belongs and is fine. No "as you can see," no "simply," no talking-down glosses found.

### [NICE] No walls of text
Paragraphs are reader-sized; longest is `looking` line 210 and it's within range. Section headers break the chapters well. No fix.

### [NICE] Meta-narration — essentially absent
No "in this chapter we will" / "as we'll see" / "this section is about" narration. The closest is the soft "That is worth holding onto before looking" (line 148, already flagged as a reader-command above) and "A note on why this picture is shown small here" (line 232) — the latter is acceptable framing of a real rights fact, not banned meta-narration. Keep.

---

## ACCURACY SPOT-CHECK (against factpack — gate is not the fact gate, but flagging anything seen)
- Title pairing *Divisibilité indéfinie* / *Indefinite Divisibility* — correct (not "Infinite"). ✓
- Dimensions: prose "101.6 by 88.9 centimeters" (line 185), const "3 ft 4 in × 2 ft 11 in" — matches factpack §8.3 precise figure; ft/in primary per `feedback_art_dimensions_imperial`. ✓
- 101.6 = HEIGHT, 88.9 = WIDTH, upright/portrait — draft says "three feet four inches tall by two feet eleven inches wide... upright" (line 185). ✓
- de Chirico window c.1923, self-taught, Breton mid-1920s, emigrated 1939, married Kay Sage 1940 (Reno), Woodbury CT, 1942 — all match factpack §2. ✓
- Provenance: Pierre Matisse Gallery → Albright Art Gallery, June 22 1945, RCA1945:2, Room of Contemporary Art Fund; one institution / three names; 2023 rename — all match §6/§8.5. ✓
- Rights in-copyright, © Estate of Yves Tanguy / ARS — correct, NOT pd-us. ✓
- Quote rendered verbatim (line 207) matches factpack §4 primary quote exactly; companion variant not fused in. ✓
- Non-referential forms held as analogy, never "is/depicts" — ✓ (see Looking).
No accuracy defects found by this gate. (Fact gate owns final say.)

---

## SUMMARY OF ACTIONABLE ITEMS
- **[FIX] storytelling/repetition:** collapse the three-way "totem/machinery/marble-run = analogy" caveat to land once (keep in Looking; compress in Making). — line 153 + line 188 (+annotations 91)
- **[FIX] reader-commands ×3:** "Resist the urge to name it" (188), "That is worth holding onto before looking" (148), "Step back... look at the technique" (199) → declarative rewrites.
- **[VERIFY] markup:** PART B `&mdash;`/`&ndash;` are in JSX = correct; PART A const strings are entity/dash-free = correct. No change; guard on future edits.
- **[NICE]:** split the long quote-caveat sentence (204); optional polish only.
