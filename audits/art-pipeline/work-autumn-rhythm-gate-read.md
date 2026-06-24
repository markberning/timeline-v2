# Gate read — STORYTELLING + LOOKING + CLARITY/VOICE

**Work:** Jackson Pollock, *Autumn Rhythm (Number 30)* (1950) — first Abstract Expressionism work-read.
**Files judged:** `work-autumn-rhythm-draft.md` (PART A const + PART B five chapters), against `work-autumn-rhythm-factpack.md`.
**Gate scope:** storytelling (primary), looking (concrete via prose pointers/no coords), clarity + voice contract.

## VERDICT: PASS (with FIX/NICE polish; no BLOCKERS)

This is a strong, accurate, story-first draft. The five sections build a real arc:
floor → method → the surface itself → why it's a break → afterlife/title. The
three things the gate asked to land all land: the floor-painting method (Floor +
Making), the allover web with no center (Looking), and "the act as the subject"
(Break, sharply). The looking section is concrete and coordinate-free. The
factpack's traps (enamel-not-oil, controlled-not-random, action-painting-is-
Rosenberg-1952, title-came-later, in-copyright) are all handled correctly and even
foregrounded. No blockers. The findings below are tightening, not gates.

---

## 1. STORYTELLING (primary)

**Verdict: strong.** Compelling, varied, not listy. Each section earns its place;
the "literally be *in* the painting" quote is well-placed as the hinge that the
Looking and Break sections both pay off. Good restraint on drama.

- **[FIX] Floor §3 — a forward-reference seam.** Loc: `AutFloor`, para 3:
  "He explained the choice himself, and it is worth hearing in his own words rather
  than a paraphrase, so we'll come to that in the next chapter." This is mild
  meta-narration / table-of-contents talk (also see Clarity finding C1). It also
  slightly deflates the moment. Suggest collapse to the physical image only:
  *"He laid the surface flat and got over it, around it, on every side of it — and
  for now hold just the plain physical fact: the picture we are going to look at
  was made by a man walking around a sheet of canvas on a barn floor, looking down,
  never once stepping back to a wall."* (Drop the "he explained it himself… next
  chapter" sentence; the quote lands fine in Making without being pre-announced.)

- **[NICE] Making is the densest section** (material → tools → all-four-sides →
  Possibilities quote → continuation quote → no-accident quote → action-painting +
  "I am nature" cautions). It reads well but is doing the most lifting. No cut
  required; just the single highest-load section, worth a light pass if anything
  feels long on mobile. The two-part "A caution" block (action painting + I-am-
  nature) is correctly placed and earns its keep.

- **[NICE] Afterlife closing beat is excellent** — "He said he wanted to be *in*
  the painting. Stand close… and you can feel what he meant." Strong, non-corny
  landing that ties back to the Making hinge. Keep.

---

## 2. LOOKING (the abstract web made concrete)

**Verdict: strong — best section of the draft.** Every required pointer is concrete
and prose-only (no coordinates, no blind crops):

- black/white/brown/tan skeins — ✓ ("nearly colorless palette… no red, no blue, no
  green… autumnal browns and creamy buffs").
- the no-center rhythm — ✓ ("try to find the focal point… you will fail, and the
  failure is the point… top as busy as the bottom").
- nothing depicted / figure-ground collapse — ✓ ("hunt now for a thing… there is
  none… resist it. There is nothing to find. The marks are the subject.").
- drips/pools/spatters as readable physics — ✓ (streamed-off-a-stick vs flung-arc
  vs pooled-blot vs flicked-spatter — exactly the factpack's §5.4).
- raw/unprimed canvas in the gaps — ✓ ("the untouched fabric, doing the job an
  artist usually fills in").
- the scale you stand inside — ✓ (opens the section, ties to Pollock-on-the-floor).

The `annotations[]` array in PART A mirrors these six and is also coordinate-free
and prose-pointered — good (this is a gated surface; it passes).

- **[NICE] One small repetition across surfaces.** The "stand inside it" / "the way
  Pollock stood within it on the floor" beat appears in the hook, the Looking prose
  open, AND the `scale` annotation. It's a good idea, but it's now stated three+
  times nearly verbatim. Consider varying the wording in at least one of the three
  so it doesn't read as a refrain. Not blocking.

---

## 3. CLARITY + VOICE CONTRACT

Voice is plain and confident; jargon is inline-defined on first use (allover
composition, figure/ground, focal point, raw/unprimed canvas, drip/pour period are
all glossed in-prose). Findings:

- **[FIX] C1 — meta-narration / chapter-signposting.** Several "this chapter does
  X, the next does Y" seams:
  - `AutFloor` §3: "so we'll come to that in the next chapter." (see Storytelling FIX)
  - `AutFloor` "Why this is a beginning" close: "So this chapter sets the room, the
    floor, and the year; the next four get into the paint." — textbook meta-
    narration (telling the reader what the chapter is doing). Suggest cut the
    sentence; end on "*Autumn Rhythm* is one of the clearest."
  - `AutLooking` §1: "which, as the last chapter showed, is exactly where Pollock
    stood" and `AutLooking` skeins para: "though, as we'll see, the title was an
    afterthought." These back/forward refs are mild; the "as the last chapter
    showed" can stay (it's a genuine callback, not signposting), but trim "as we'll
    see" — just state it or drop it.

- **[FIX] C2 — reader-command imperatives, slightly heavy.** The Looking section
  leans on a string of commands: "Stand in front of it," "Now try to find," "Hunt
  now for a thing," "Resist it," "So look at the marks," "And look, finally, at the
  gaps." Individually fine and effective for a looking-walkthrough; collectively
  it's a lot of imperative mood. This is a judgment call, not a hard violation —
  the looking genre invites "look at X." Recommend softening 1–2 (e.g. the bare
  "Resist it." could become "The instinct is to read them as something; there's
  nothing there to find."). Keep most; just dial back the pile-up.

- **[PASS] No honesty-labels of the banned kind.** The draft flags uncertainty
  about *the artwork's facts* (title attribution, the compressed quote, the price) —
  that is required factual hedging, not the self-conscious "to be honest / I'll
  admit" narrator tic. Correctly handled; e.g. "it is fairest to say the painting
  was *later retitled*" is fact-precision, not a voice tic.

- **[PASS] No condescending glosses.** Definitions are matter-of-fact parentheticals
  ("plain cloth, never stretched on a frame…"), not talking-down.

- **[PASS] Em-dash / `&mdash;` handling is correct.**
  - In JSX prose (PART B), em-dashes render via `&ndash;`/`&mdash;`/`&hellip;`
    entities and curly quotes via `&ldquo;`/`&rdquo;` — correct for rendered TSX,
    not literal "—" characters in a string.
  - In PART A plain-string fields (`hook`, `blurb`, `detail`, `note`, `role`,
    `heroCredit`), I find **no literal "—" and no stray `&mdash;`**; these fields
    use plain text, commas, semicolons, and colons. The one place an entity appears
    inside a string is the const header **comment** (`fact pack → Opus → 5 gates`),
    which is a TS comment, not a shipped string — fine. **No violation.**
  - Note for integrator: the `&ndash;`/`&mdash;`/`&hellip;`/`&ldquo;` entities are
    only valid because they sit in JSX text nodes. If any PART B line is ever moved
    into a plain string literal, those entities must become real characters. Not a
    current defect.

- **[NICE] C3 — "walls of text."** Floor §1 and Making §2 are long single
  paragraphs for mobile (portrait). Content is good; consider one paragraph break
  each (Floor §1 after "walked around it."; Making §2 after "the speed of his
  arm."). Readability only.

---

## ACCURACY SPOT-CHECK (against factpack — not the fact gate's job, but flagged if seen)

All consistent with the factpack: enamel/house paint (not oil) ✓; "there is no
accident" presented as a *condensation* of the Wright 1950 transcript ✓; "action
painting" = Rosenberg, *ARTnews* Dec 1952, post-dating the work ✓; "I am nature"
flagged as secondhand Krasner anecdote, not shipped as sourced ✓; title = *Number
30* first, *Autumn Rhythm* by the 1955 Janis show, "later retitled" not "Pollock
titled it" ✓; dimensions 8 ft 9 in × 17 ft 3 in, larger figure noted as same canvas
with depth ✓; rights in-copyright / fair-use small ✓; Namuth 500+ photos ✓ (draft
does not conflate the glass-painting film with this canvas — trap #6 avoided). No
accuracy findings for this gate to raise.

---

## SUMMARY OF FINDINGS
- BLOCKERS: 0
- FIX: 2 — C1 chapter-signposting meta-narration (Floor "next chapter" + "this
  chapter sets… the next four get into the paint"; trim Looking "as we'll see");
  C2 imperative-command pile-up in Looking (soften 1–2).
- NICE: 3 — densest-section note (Making); "stand inside it" stated 3×; two long
  paragraphs could split for mobile.
