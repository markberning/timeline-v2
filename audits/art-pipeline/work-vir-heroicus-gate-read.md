# Gate read — STORYTELLING + LOOKING + CLARITY — *Vir Heroicus Sublimis* (Newman, `vir-heroicus`)

**Gate:** storytelling (primary) + looking + clarity/voice-contract. Read-only; no edits, no commit.
**Verdict: PASS WITH FIXES.** No blockers. Strong, genuinely compelling draft — the "zip as the man," the close-viewing immersion, and the reach for the sublime all land, and it never reads as an apology for minimalism (the "red painting with stripes" trap is named and refused, not conceded). The fixes are a cluster of voice-contract tics (reader-address "we/you'll", two honesty-labels, a section-title mismatch) plus one looking-section thinness. All accurate to the factpack.

---

## 1. STORYTELLING (primary)

Compelling across all five sections. The spine — essay-as-promissory-note → the painting that cashes it → look at it → the documented "stand close" notice → the bet paid in full — is a real arc, not five disconnected panels. The "zip is the man" payoff in `NwmMaking` and the Parsons-notice reveal as *documented fact, not theory* are the two best beats and they earn the sublime claim. Not dull, not listy, not an apology for minimalism. Findings are small.

- **[FIX] Repetition across sections — "flood/floods your whole field of vision" recurs verbatim-ish 4×.** Hook (`hook:`, line 38: "floods your whole field of vision"), `NwmLooking` (line 165: "the red floods your entire field of vision"), `NwmParsons` (line 185: "until the red filled your vision"), `NwmAfterlife` (line 209: "Let the red close over your field of vision"). The image is the right one, but landing it four times in near-identical words dulls it. Keep the hook + the `looking` "break" instance (those are the payoffs); vary or trim the `parsons` and `afterlife` echoes. Suggested: in `afterlife` swap to "until the edges fall away" alone (already there) and cut the second "field of vision."
- **[NICE] `NwmMaking` ¶4 and `NwmLooking` ¶3 both make the same "the red is not the dead flat color it pretends to be from a distance" point in close-to-identical terms** (line 139 vs line 157). Within-section it's fine, but reading them back to back the `making` version pre-spends the `looking` reveal. Consider making the `making` mention glancing ("and the red itself is worked — more on that when you stand close") so `looking` keeps the full surface-variation beat fresh. Optional.
- **[NICE] "the long years of being misread" / "Newman's reputation took years to catch up" appears in both `parsons` (line 191) and `afterlife` (line 206).** Two mentions of the slow-reputation theme is fine and even earns the redemption note; flag only so the reconciler knows it's deliberate-or-trim.

The five-section split (essay / making / looking+break / Parsons notice / afterlife) is well-judged for "a red field with five stripes" — the danger was thin material spread thin, and the draft avoids it by giving each section a distinct job.

---

## 2. LOOKING

`NwmLooking` makes the field concrete through prose pointers, no coordinates. It hits every required surface from factpack §5: the immense red (¶1), the five zips of varying width/color/edge (¶2), the surface variations (¶3), the no-image (¶1), the way the zips divide yet activate (the "break" ¶3, line 168), and the close-viewing immersion (the "break" ¶1–2). Pointers are directional-not-coordinate ("near the center," "close to it," "across its enormous span") — clean.

- **[FIX] The pure-looking block (the first SectionHeader, lines 149–158) is thinner than the "break" block that follows it, and the surface-variation pointer (¶3, lines 156–157) is one short paragraph that mostly restates `making`.** The factpack §5 #5 has more to give (density/warmth shifts, brushed inflection rewarding looking "at the paint itself"). Either lengthen ¶3 with one concrete pointer (e.g. where the brush-drag reads warmest/coolest, or that the inflection is invisible from across the room and only resolves up close) or accept it as deliberately brief — but right now the looking-proper is the shortest of the three blocks while carrying the most "make it concrete" load.
- **[FIX] Annotation/prose redundancy the reconciler should de-dupe.** The six `annotations[]` (PART A, lines 69–74) and `NwmLooking`'s prose cover the same six points in nearly the same words ("each zip is its own event, not a repeat" appears in both annotation 3 and line 154; "the marks do not decorate the red" appears in both annotation 6 and line 168). If the annotations render as pointer-pins beside the looking prose, the reader gets each observation twice. Confirm the render model; if both are on-screen together, tighten one.
- **[NICE] Annotation "How the five zips differ" (line 71) and prose line 154 both place "a pale, light zip near the center" and "a darker maroon band close to it."** Factpack §5 #3 says the pale zip is "center-LEFT" and the maroon is "just to its right." The draft says "near the center" (both prose and annotation), dropping the left/right specificity. Not wrong, but the factpack's more-specific placement would make the pointer land harder and is verified. Optional tightening, not a correction.

No coordinate/blind-pin violations anywhere. Compliant with the no-blind-coordinates rule.

---

## 3. CLARITY + VOICE CONTRACT

Jargon ("zip", "sublime", "provenance", "Abstract Expressionists") is each inline-defined on first rendered use — **good**: "sublime" defined in `NwmSublime` ¶2 before the title is translated; "zip" defined in `NwmMaking` ¶2 ("The bands have a name, and it is Newman's own... He called them zips") before any naked use in rendered prose; "provenance" defined in `NwmAfterlife` ¶1. No jargon-before-definition violations.

**Em-dash / entity hygiene: CLEAN.** Every literal "—" in the file is in markdown header prose (lines 1, 3) or `//` JS comments (lines 13, 95) — none inside a rendered TS/JSX string. Rendered prose uses `&ndash;`/`&mdash;`/`&hellip;`/`&ldquo;`/`&rdquo;`/`&rsquo;` entities correctly (e.g. `(1905&ndash;1970)`). The `blurb:` / `hook:` / `detail:` / `note:` / `where:` string fields contain **zero** literal em-dashes (verified by grep). No `&mdash;` misused inside a plain string.

Voice-contract tics to fix:

- **[FIX] Reader-address / "we" meta-narration — 4 instances.**
  - `NwmSublime`, line 107: "the painting **we're about to look at** is that essay turned into red." → cut to "the painting is that essay turned into red," or "this painting is that essay turned into red."
  - `NwmMaking`, line 139: "...turns out to be the whole point, and it is **what we look at next.**" → drop the forward-reference ("...turns out to be the whole point."). This is the no-meta-narration "narrate what the next chapter is about" tic.
  - `NwmParsons`, line 185: "The engulfment **you read about in the last chapter**..." → "The engulfment of standing close..." (state the thing, don't cross-reference the reading order).
  - `NwmAfterlife`, line 203: "**We can't tell you** what Heller paid, because no figure for the sale survives..." → "No figure for the sale survives in the record, so none is given here." (the const `provenance` note already phrases it exactly this neutral way at line 58 — match it).
- **[FIX] Honesty-labels — 2 instances** (self-narrating that the prose is being honest/plain):
  - `NwmLooking`, line 162: "...the painting breaks with everything before it, **and the break is worth stating plainly.**" → cut the clause; just state the break. The sentence is stronger without the throat-clear.
  - `NwmAfterlife`, line 203: "...**and a blank is better than an invention.**" → cut. It's an honesty-label about the missing price; the neutral "no figure survives, so none is given" already does the work.
- **[NICE] Mild reader-command "do the hardest thing first / take it in."** `NwmLooking` line 151: "the first thing to do is the hardest: let the red register as red... Take it in as sheer color." This is the looking-section imperative ("stand in front of it") which is idiomatic for a looking block and broadly acceptable, but it's the densest cluster of commands in the draft (let / take it in / look / count / find the marks). It reads as guided-looking, not bossing, so I'm leaving it NICE — flag only if the clarity gate wants the imperatives thinned.
- **[NICE] No condescending glosses found.** Definitions ("the sublime is an old idea...", "provenance, the documented chain...") are pitched to a smart reader, not talking down. Good.

Cross-part consistency (for the reconciler, not a voice issue but it surfaces here):

- **[FIX] Section-title mismatch between PART A and PART B for the `looking` section.** PART A `sections[]` (line 52) titles it **"The field, the five zips, and the break"**; PART B `NwmLooking`'s `SectionHeader` (line 148) titles it **"A wall of red, and five marks in it."** The eyebrow also differs ("The canvas" both — OK). Whichever the reader sees in nav vs. on the section must be reconciled to one title (the PART A `sections[]` `title` typically drives the nav/summary; the in-component `SectionHeader` drives the on-page header). Pick one.

---

## Accuracy spot-check vs factpack (no drift found)

FIVE zips (✓, stated as five and "count them"), "zip" as Newman's own coinage (✓, line 133), close-viewing notice quoted verbatim matching factpack §8.3 (✓, line 184), key statement = Tate-confirmed *Sublime Is Now* fragment "asserting man's desire for the exalted, for a... relationship to the absolute emotions" (✓, line 114 — uses the truncated Tate-safe form, does NOT stitch the long version, does NOT use the unsourced "I declare the space"), translation "Man, Heroic and Sublime" (✓), dimensions 7 ft 11⅜ in × 17 ft 9¼ in (✓ const line 33, matches MoMA-label figure not the 242.3 Wikipedia variant), Heller c.1961 → MoMA 1969, no price (✓), in-copyright/fair-use (✓), refuses the "red painting with stripes" flattening (✓, lines 168 + annotation 6). The "first man / Genesis" creation theme is handled as paraphrase (line 133), not a fabricated quote — fine.
