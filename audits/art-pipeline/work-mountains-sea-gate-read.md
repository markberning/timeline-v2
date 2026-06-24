# GATE READ — *Mountains and Sea* (Frankenthaler, 1952) · STORYTELLING + LOOKING + CLARITY

**Gate:** storytelling (primary) + looking + clarity/voice-contract for the work-read
`mountains-sea`. Reviewed `work-mountains-sea-draft.md` against
`work-mountains-sea-factpack.md`. No edits made; findings only.

## VERDICT: REVISE (no BLOCKERs)

The draft is strong storytelling and accurate to the factpack. The 23-year-old
soak-stain breakthrough, the watercolor-at-mural-scale collision, and the path to
Color Field all land. The fact discipline (oil-not-acrylic, pioneered-soak-stain-
not-pouring, Louis-not-Frankenthaler on the "bridge" line, loan-not-acquisition) is
clean. **But the draft repeatedly breaks the voice contract**: it narrates its own
process and its own fact-handling at the reader ("the precise claim to ship,"
"Scope the claim carefully," "Two things to flag, because the line gets mangled"),
leans on a stack of explicit reader-commands in the looking section, and uses several
meta/"it helps to know" framing moves. These are [FIX]-level and concentrated — fixable
without touching structure. No BLOCKERs: nothing is dull, disjointed, or factually off.

---

## 1. STORYTELLING (primary)

Overall: compelling and well-paced across all five sections. The arc reads as a story,
not a list. No listy or disjointed passages of concern. Findings below are about the
intrusions that thin the spell, not the spine.

- **[FIX] Meta/process-narration that talks about the chapter instead of telling it.**
  Several lines step outside the story to announce what the prose is doing or why a fact
  is being handled a certain way. These are exactly the "tell the story, never narrate
  what the chapter is about / how it links" tics.
  - `MtsMaking` ¶1: *"Here is the method, step by step, because the whole importance of
    Mountains and Sea is in the doing of it."* — meta-frame. Suggested rewrite: drop the
    framing clause; open straight on the action: *"Frankenthaler took her oil paint and
    thinned it heavily with turpentine…"*
  - `MtsMaking` ¶4: *"And here is the precise claim to ship, because it is easy to
    overshoot"* — this is pipeline/fact-handling language leaking into reader prose
    ("claim to ship"). Suggested rewrite: *"It is worth being exact here, because the
    point is easy to overshoot: Frankenthaler did not invent pouring…"*
  - `MtsBreak` ¶3: *"Scope the claim carefully, the way the history demands: not the
    first abstract painting, not the first poured painting…"* — same fact-handling
    register aimed at the reader. Suggested rewrite: keep the vivid list, cut the
    instruction: *"It is not the first abstract painting, not the first poured painting,
    not the first to leave canvas bare. It is the first soak-stain, and the bridge that
    built."*
  - `MtsAfterlife` ¶2 parenthetical: *"(Two things to flag, because the line gets
    mangled…)"* — "flag" is reviewer language. The content (Louis not Frankenthaler;
    "was"/"is" variant) is good and should stay, but rephrased as plain narration:
    *"The line is often mis-told. It is Morris Louis's characterization, reported later
    and popularized through the scholar Karen Wilkin — not Frankenthaler's words and not
    Greenberg's; and it circulates in two forms, 'what was possible' and 'what is
    possible.'"*
  - `MtsAfterlife` ¶1 parenthetical: *"…so hold it loosely. 'One weekend in 1953' is the
    safe version."* — "the safe version" is fact-checker register. Suggested rewrite:
    *"…so the precise day is uncertain; 'one weekend in 1953' is as far as the record
    firmly goes."*

- **[FIX] "It helps to know…" framing.** `MtsNovaScotia` ¶2 opens *"It helps to know
  where she is coming from, because the picture she is about to make does not arrive out
  of nowhere."* Mild meta-framing / reader-instruction. Suggested rewrite: cut to the
  backstory directly — *"The picture did not arrive out of nowhere. Frankenthaler had a
  serious schooling…"*

- **[NICE] "hold that, because it matters in a few minutes"** (`MtsNovaScotia` ¶3) is a
  charming, light foreshadow and reads as voice, not as a violation — but it is a cousin
  of the flag-the-reader tic. Acceptable to keep; if trimming the family of moves above,
  consider softening to *"that distinction will matter shortly."* Low priority.

- **[NICE] Strong beats to preserve:** the "live in this land" / "not move into his
  house" turn (`MtsNovaScotia` ¶3); the wine-on-a-tablecloth and fresco analogies
  (`MtsMaking` ¶3); the "intimate medium handled like a monument" collision
  (`MtsLooking` ¶1); the paint-rag reception beat (`MtsAfterlife`); and the
  *Impression, Sunrise* analogy close. These are the spine of why it lands — keep.

---

## 2. LOOKING

The looking section (`MtsLooking`) makes the stained canvas genuinely concrete and uses
**prose pointers, zero coordinates** — the soak-in/feather-and-bleed, the charcoal lines
on view, the bare cloth left breathing, the watercolor-at-wall-scale collision, and the
non-resolving landscape are all there and vivid. The `annotations[]` array mirrors them
correctly with prose-only `where` fields (no pins/crops). On substance: PASS.

- **[FIX] Reader-command stacking.** The section is built almost entirely on imperative
  directives to the reader, several per paragraph: *"Stand in front of it"* / *"Look at
  the color itself"* / *"Watch the edge of any stain"* / *"Now find the charcoal lines"*
  / *"notice how much of the canvas is simply left bare"* / *"let the color resolve."*
  The voice contract treats reader-commands as a flagged tic. A few are idiomatic for a
  looking section, but the current density crosses into hectoring. Suggested fix: keep
  **one or two** anchoring invitations (e.g. the opening *"Stand in front of it"*) and
  convert the rest to declarative observation. Examples:
  - *"Look at the color itself. It does not sit on the surface; it sits in it."* →
    *"The color does not sit on the surface; it sits in it."*
  - *"Watch the edge of any stain and you will see it feather and bleed…"* →
    *"The edge of each stain feathers and bleeds into the bare cloth instead of ending
    in a clean brushed line."*
  - *"Now find the charcoal lines. Loose dark contours wander…"* →
    *"Loose dark charcoal contours wander across and through the color, drawn straight
    onto the canvas."*
  - The annotation *"No impasto, no gesture"* `detail` has the same issue (*"Hunt for a
    ridge of heaped paint… and you will find almost none"*) — soften to declarative:
    *"There is almost no ridge of heaped paint, no scraped drag, no loaded brushstroke."*

- **[NICE] Section sub-heads inside `MtsLooking`** ("Drawing and bare cloth," "The
  landscape that isn't one") are good — they break the wall and structure the looking.
  Keep.

---

## 3. CLARITY + VOICE CONTRACT

- **Jargon inline-defined before use: PASS.** `soak-stain` is named in `MtsNovaScotia`
  ¶4 only as "it has its own name," then fully defined at the moment of coining in
  `MtsMaking` ¶4 ("Paint thinned enough to sink into raw, unprimed canvas and dye the
  cloth…"). `Color Field` is inline-defined on first substantive use in `MtsBreak` ¶2
  ("abstraction built from large, open areas (fields) of flat, soaked color…").
  `impasto`, `unsized`, `unprimed`, `size`, `primer`, `skein`, `Cubism`, `Abstract
  Expressionism` are all inline-defined on first use. Good discipline.

- **Em-dash / `&mdash;` in plain TS string fields: PASS (clean).** Every literal `—` in
  the file is in a markdown heading or a `//` code comment — none in any rendered value
  (`hook`, `blurb`, `stats`, `annotations`, `provenance.note`, `figures`, `lineage`).
  The shipped string fields use commas/colons, not em-dashes; the JSX prose uses HTML
  entities (`&ndash;`, `&rsquo;`, `&ldquo;`), which is correct for rendered markup. No
  `&mdash;` anywhere. Nothing to fix on this axis.

- **[FIX] Honesty-label / hedge register (overlaps §1).** "the safe version," "hold it
  loosely," "claim to ship," "flag" — these read as the author certifying their own
  caution to the reader. Covered in §1 rewrites; flagged here too because the voice
  contract calls out honesty-labels specifically.

- **[NICE] Condescending glosses: mostly clean.** Inline definitions are pitched to a
  smart reader, not talked down ("turpentine (the solvent painters use to loosen oil
  paint)" is fine). No condescending-gloss [FIX]s.

- **[NICE] Walls of text: none.** Paragraphs are well-sized; the looking section is
  broken by sub-heads. No remediation needed.

- **[NICE] `acquired` field length.** The `acquired` string duplicates the `location`
  string almost verbatim (both spell out "on extended loan… not an NGA acquisition").
  Not a voice issue; minor redundancy the integrator may want to trim. Out of this gate's
  scope but noted.

---

## SUMMARY OF ACTIONABLE FINDINGS

| # | Sev | Location | Issue |
|---|---|---|---|
| 1 | FIX | MtsMaking ¶1 | meta-frame "Here is the method, step by step, because…" |
| 2 | FIX | MtsMaking ¶4 | "the precise claim to ship" — pipeline register at reader |
| 3 | FIX | MtsBreak ¶3 | "Scope the claim carefully, the way the history demands" |
| 4 | FIX | MtsAfterlife ¶2 | "(Two things to flag, because the line gets mangled…)" |
| 5 | FIX | MtsAfterlife ¶1 | "hold it loosely / the safe version" honesty-labels |
| 6 | FIX | MtsNovaScotia ¶2 | "It helps to know where she is coming from…" framing |
| 7 | FIX | MtsLooking (all ¶) + "No impasto" annotation | reader-command stacking; keep 1–2, make rest declarative |
| —  | NICE | MtsNovaScotia ¶3 | "hold that… matters in a few minutes" — borderline, keep/soften |
| —  | NICE | const `acquired` | redundant with `location` (integrator trim) |

No BLOCKERs. Story, looking substance, jargon-defs, dimensions/medium/attribution, and
em-dash hygiene all PASS. Revise the meta/command/honesty-label register (findings 1–7),
then ship.
