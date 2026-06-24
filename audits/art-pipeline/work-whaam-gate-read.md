# Gate read — STORYTELLING + LOOKING + CLARITY — *Whaam!* (Lichtenstein, 1963)

Gate scope: storytelling (primary), looking-section concreteness, clarity + voice contract.
Not judged here: fact accuracy (fact gate owns that), image-rights, nesting.

## VERDICT: PASS with fixes

The draft is strong across all five sections. The three required beats all land hard:
the comic-panel-blown-up (source + making), the hand-painted Ben-Day dots (the "part
everyone gets wrong" payoff in making, echoed in break and looking), and the flattened
cartoon violence ("a killing, painted like an advertisement" / "rendered like a logo").
The uncredited-comic-artist question is handled honestly and held in tension, not
smoothed over. The looking section is concrete and coordinate-free. No BLOCKERS.

Fixes below are one age-mismatch reconciliation (carried from the fact gate), two
voice-contract reader-command tics, and one literal em-dash inside a TS string. Plus
a few NICEs.

---

## 1. STORYTELLING (primary)

The narrative arc is compelling and well-sequenced: a serious painter slumming in the
funny pages → the structural surgery (one frame split into two) → the deadpan looking →
the three-way break → the afterlife + the credit reckoning. No dull/listy/disjointed
passages of note; transitions hand off cleanly ("How he did that is the next chapter").

### [FIX] Age mismatch — const blurb vs prose (carried from fact gate, flagged NICE there, raised to FIX)
- **Location:** PART A, `sections[0].blurb` (line 53) says **"A forty-year-old abstract
  painter switches…"**; PART B `WhamSource` prose (line 106) says **"a thirty-seven-year-old
  painter"**. Born 1923, the 1961 switch makes him **37–38**; the painting (1963) makes him **39–40**.
- **Why it matters:** same person, same event (the 1961 switch), two different ages on
  two reader-facing surfaces. Self-contradiction the reader can hit.
- **Suggested rewrite:** reconcile to the 1961 switch = **thirty-seven**. Change the
  blurb to "A thirty-seven-year-old abstract painter switches, almost overnight…".
  (If instead they want to anchor the blurb to the 1963 painting, "thirty-nine-year-old"
  is correct — but the prose and the blurb both reference the *switch*, so 37 is the
  clean fix.)

### [NICE] Hook age-cue consistency
- **Location:** `hook` (line 41) avoids an age, good. No change needed; just confirming
  the hook doesn't add a third number.

### [NICE] "Star Jockey" issue-date phrasing
- **Location:** `WhamSource` line 114 — "cover-dated early **1962**." Factpack §2 notes the
  cover date appears as both "Jan–Feb 1962" and "Feb 1962" (trivial spread). "early 1962"
  safely straddles both — good call, no change. Flagging only so the fact gate sees it was
  a deliberate hedge, not a guess.

### [NICE] The credit-question payoff is the draft's best storytelling move
- **Location:** `WhamAfterlife` lines 211–215. "You can admire the break and still keep
  Novick's name in the room" is a genuinely strong close — holds both truths without
  preaching. No change; noting it as the section that most rewards the honesty brief.

---

## 2. LOOKING

The looking section (`WhamLooking`, lines 146–172) makes the diptych concrete entirely
through prose pointers — zero coordinates, zero blind pins. Every required element is
present and locatable by description:

- **Two panels / diptych** — established in `WhamMaking` and reinforced by the "Stand at
  the left end" / "Walk to the right canvas" spatial walk. ✓
- **Firing plane left** — "A fighter plane cuts diagonally down across the left canvas." ✓
- **Exploding plane right** — "The enemy plane erupts in a red-and-yellow fireball that
  fills the panel." ✓
- **"WHAAM!"** — "bursts across the upper right in bold yellow-edged comic lettering." ✓
- **Red/yellow caption box** — "A yellow caption box runs across the upper edge of the
  left panel." ✓ (See LOOKING note below on red-vs-yellow.)
- **Hand-painted dots** — covered in `WhamMaking`'s payoff paragraph and the `annotations`
  array, not re-narrated in `WhamLooking`. Acceptable: the looking *experience* (panels,
  planes, word, caption) is in the prose walk; the dots live in making + the annotation
  pointers. ✓
- **Flat primaries + black outlines** — "flat color, hard outlines, mechanical dots" in
  the handling paragraph (line 168). ✓

The "Why the detachment is the subject" closer (line 167–168) does the interpretive lift
without telling the reader what to feel in a commanding way — it explains the mechanism
("drains it of all drama in the handling") rather than asserting the verdict.

### [NICE] Caption box color: factpack hedges "red/yellow," prose commits to "yellow"
- **Location:** `WhamLooking` line 155 + annotation line 76 + blurb line 55, all say
  **"yellow caption box."** Factpack LOOKING point 5 (line 76) labels it **"The red/yellow
  caption box,"** and STATS point references red+yellow. This is a fact-gate call, not a
  storytelling defect, so flagging as NICE for that gate to confirm the box color. The
  prose is internally consistent (always yellow), so no clarity problem either way.

---

## 3. CLARITY + VOICE CONTRACT

Jargon discipline is good: **"diptych"** is inline-defined on first use ("two separate
canvases (the word just means a picture made of two joined panels)"); **"Ben-Day dots"**
is inline-defined ("named for the 19th-century printer Benjamin Day: a mechanical
dot-screen used to shade…"); **"Magna"** is inline-defined ("an early solvent-based acrylic
resin"); **"Abstract Expressionism"** is inline-defined on first use. No jargon-before-gloss
violations.

No walls of text — paragraphs are reader-sized. No meta-narration of the
"in this chapter we will" kind. No honesty-labels ("to be honest," "frankly"). The one
borderline gloss ("the word just means…") reads as a natural inline definition, not a
condescending talk-down — keep.

### [FIX] Reader-command / "don't let anyone tell you" tic — voice contract
- **Location:** `WhamLooking` line 152: **"so don't let anyone tell you firmly which it is."**
- **Why:** this is a reader-command (instructs the reader's behavior / argues at an
  imagined third party) — the voice contract bars commanding the reader. It's also a small
  drop in register vs the surrounding prose.
- **Suggested rewrite:** state it flatly — "…popular write-ups often call it a P-51
  Mustang. The exact model was never the point." (Delete the "don't let anyone tell you"
  clause; the preceding sentence already carries the uncertainty.)

### [FIX] Literal em-dash inside a rendered TS string — voice contract / typography
- **Location:** PART A, `sections[0].blurb` (line 53): **"…copying comic strips and ads at
  huge scale. For Whaam! he reaches…"** — actually clean. The live literal "—" is in
  `annotations[1].detail` and a few blurbs use a comma. Re-scan: the literal em-dash
  character "—" appears in **`stats`/`blurb` prose as " — "** is NOT present; **but**
  `figures`/`annotations` are clean. The one true hit:
  - **`annotations` line 73** uses parenthetical, fine.
  - **Confirmed literal "—" in a string:** PART A blurbs and prose use HTML entities or
    commas throughout; PART B prose uses `&ndash;`/`&mdash;` entities (JSX, rendered) which
    is correct for JSX. **No literal "—" found in a plain TS string field.** Downgrading
    this to: see the `&mdash;` note below.

### [FIX] `&mdash;` used inside the blockquote attribution — check render context
- **Location:** `WhamBreak` line 192: `<p>&mdash; Roy Lichtenstein, in <em>Roy
  Lichtenstein</em>…</p>`. This is **JSX text**, where `&mdash;` renders correctly as "—".
  This is the right usage, NOT the banned case. **No fix needed** — flagging only to
  confirm it was checked: the voice-contract ban is on literal "—" (and on `&mdash;`
  misused inside a plain TS *string* field where it would render as the literal text
  "&mdash;"). Here every `&mdash;`/`&ndash;`/`&hellip;`/`&ldquo;` sits in JSX children, so
  all render correctly. **PART A string fields** use curly quotes "" '' and real
  ellipses/commas, no entity leakage. Clean.

### [NICE] PART A blurb punctuation — em-dash-as-entity audit
- **Location:** all `sections[].blurb`, `provenance[].note`, `annotations[].detail`,
  `hook`. These are **TS string literals** (PART A), so any `&mdash;`/`&ndash;` here WOULD
  render as literal text. Scan result: they use real curly quotes and commas, with **no
  HTML entities and no literal "—"** in any PART A string. Clean — confirming the author
  correctly kept entities to the JSX (PART B) and plain typography to the TS strings (PART A).

### [NICE] "Spotters argue about the plane" register
- **Location:** `WhamLooking` line 152: "Spotters argue about the plane." Light and
  house-voice — keep. (Only the trailing command clause flagged above needs cutting.)

---

## SUMMARY OF ACTIONABLE ITEMS
- **[FIX]** Age mismatch: blurb "forty-year-old" vs prose "thirty-seven-year-old" — reconcile
  to thirty-seven (the 1961 switch). PART A line 53 ↔ PART B line 106.
- **[FIX]** Reader-command "so don't let anyone tell you firmly which it is" — cut. Line 152.
- **[NICE]** Caption-box color (yellow vs factpack's red/yellow) — confirm with fact gate.
- **[NICE]** All entity/em-dash usage checked: correct (entities in JSX only, plain
  typography in TS strings). No literal "—" or misused `&mdash;` found.
- No BLOCKERS. Looking section passes (concrete, coordinate-free). Jargon all inline-defined.
