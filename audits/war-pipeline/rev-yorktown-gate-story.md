# Storytelling + Newcomer-Clarity + Framing gate — Siege of Yorktown (1781)
**Files reviewed:** `src/app/war-revolution/battles/yorktown/page.tsx` (dossier)
and `src/app/war-revolution/battles/yorktown/s/[section]/section-narrative.tsx`
(sections: `the-trap` / `the-parallels` / `the-sword`).
**Gate standard:** `audits/war-content-pipeline.md` + `audits/war-build-standard.md` §2.

---

## Em-dash audit (target: 0 outside verbatim quotes / proper titles)

Scanning ALL prose surfaces: `note`, `sides[].note`, `commanders[].bio`, `outcome.text`,
`sections[].blurb`, `meanwhile.body`, and every `{ p: ... }` block.

**Em-dashes found: 0.**

Every long connector uses commas, parentheses, colons, or restructured clauses.
The only dashes in the file are ordinary hyphens in compounds (`self-imposed`,
`bore-verified`, `side-tags`, etc.). **This axis is clean.**

---

## Meta-narration audit

House rule: tell the story, never narrate the section's own machinery or tell the
reader what to think/remember.

### MUST-FIX — meta-narration (3 instances)

**M-1. `the-trap`, block 1:**
> "The most important thing to understand about Yorktown is that it was won at sea,
> and that the land siege everyone pictures was only the execution of a verdict the
> water had already returned. **Hold that in mind,** because everything that happened
> on the Virginia peninsula in October 1781 was made possible, or impossible, by
> who controlled the bay."

"Hold that in mind" is a reader-management instruction — the locked meta-narrator
tell. Cut it and close with the fact:

> "…the land siege everyone pictures was the execution of a verdict the water had
> already returned. Everything that happened on the Virginia peninsula in October
> 1781 was made possible, or impossible, by who controlled the bay."

**M-2. `the-trap`, block 8:**
> "This is the framing historians of the campaign return to again and again."

Opening a paragraph with "This is the framing" flags the structure — meta-narrator.
The content is good; the opener just needs to lead with the thing, not describe
that a thing is being said:

> "Historians of the campaign return to the same point: for Yorktown to happen,
> every strand had to arrive at once."

**M-3. `the-sword`, block 5:**
> "It is **the page's** signature moment, and it is worth naming plainly: Charleston,
> answered."

"The page's signature moment" is the section referring to itself. Cut the
self-reference; let the moment speak:

> "The symmetry was not an accident and it was not subtle. Charleston, answered."

---

## Storytelling + pacing — per-section grades

### `the-trap` — STRONG

**Hook:** Opens at the heart of the argument (won at sea, not on land) and earns
its length. The ticking-clock structure (de Grasse's self-imposed October deadline,
the parallel marches converging) is well-executed.

**Stakes:** High and clearly stated — "Take away British command of the sea and
Yorktown stopped being a refuge and became a cul-de-sac." The newcomer understands
the mechanism before the action begins.

**Pacing:** Each block carries a discrete beat and propels to the next. The
simultaneity argument (block 8) lands with real force because the section has
built all its strands first.

**Sea/French-fleet hinge:** VERY WELL HANDLED. De Grasse gets a full block. The
Battle of the Chesapeake gets its own block. The "meanwhile" box makes the hinge
explicit in the section footer. The French role is co-equal, not a footnote.
Lafayette's six-month containment job is woven in as the reason the trap had
something to catch.

**Mild concern (SHOULD-FIX):** Block 5 names de Barras before the reader has a
full picture of why the siege guns matter. A one-sentence framing — "Without a
siege train of heavy guns there could be no formal siege, only a blockade" —
before naming de Barras would tighten newcomer comprehension here. The information
appears later in `the-parallels` but this section could be self-contained on that
point.

---

### `the-parallels` — GOOD (close to STRONG)

**Hook:** "A siege in the eighteenth century was a piece of engineering, not a
battle" — strong, clean, immediately positions the reader.

**Stakes:** Well-built. The parallel structure (open first parallel → cannot finish
second → must take redoubts → storm them) is mechanical but the prose keeps it
alive.

**Human dimension:** The Hamilton storming scene (block 5) is the section's best
passage. "His men fixed bayonets and left their muskets unloaded on purpose, a
discipline of silence" is good house voice. Redoubt 9's heavier cost (15 killed
and 77 wounded vs. 9 and 25) is named plainly — the French paid more, which is
fair.

**Dual-POV:** Present on Cornwallis's side — his fatal outer-line pullback, the
October 16 sortie, the river escape attempt. GOOD.

**One pacing concern (SHOULD-FIX):** The section runs nine blocks, which is long.
Blocks 5 and 6 (the two-storming-columns sequence) could be tightened by
combining the Redoubt 10 and Redoubt 9 descriptions. Each block reads well alone
but the accumulation slows the final third. This is a soft note, not a rewrite.

---

### `the-sword` — STRONG (one MUST-FIX)

**Hook:** "By October 17 there was nothing left to do but quit" — excellent. Blunt,
declarative, earns immediate attention.

**The Lincoln / Charleston reversal:** Beautifully executed. Blocks 3–5 build the
setup (Washington writes the refusal of honors the day before), the ceremony
(O'Hara to Rochambeau to Washington to Lincoln), and the symmetry, in that order.
The section does not rush the payoff.

**The tune:** Block 6 is exactly right — "It should be told as exactly what it is:
a tradition, with a serious evidence problem." The framing is honest without
being precious. Naming Garden's "Anecdotes" (1822/1828), the absent eyewitness
evidence, and Freeman's dismissal gives the reader what they need to hold the
tradition correctly.

**War-goes-on beat:** Block 8 ("And then the war went on. This is the part the
popular memory gets wrong") — STRONG. Naming what Britain still held, the Battle
of the Saintes, de Grasse's capture, the Treaty of Paris, all in proportion. The
final Washington-warning paragraph (block 9) adds real depth and prevents the
section from ending on a triumph note that the historical record does not support.

**MUST-FIX (M-3 above, repeated here for clarity):** "the page's signature moment"
is a meta-narrator tell. See M-3 fix above.

**SHOULD-FIX — the sentence "it is the page's business to guess" (block 4):**
> "Whether disgust also kept him from the field is something no source can settle,
> and it is **not the page's business to guess.**"

"The page's business" is a self-reference. Rewrite:
> "Whether disgust also kept him from the field is something no source can settle,
> and guessing serves no one."

---

## Newcomer-clarity audit — MUST-FIX / SHOULD-FIX

The sections inline-define: redoubt (block 1, `the-parallels`: "a small,
self-contained fort"), parallel (block 3, `the-parallels`: "a long trench dug
parallel to the enemy's lines"), sortie (block 7, `the-parallels`: "a sudden
attacking sally by a besieged garrison"), ship of the line (block 3, `the-trap`:
"the largest warships of the age, the heavy gun-platforms that decided who owned a
stretch of sea"), honors of war (block 3, `the-sword`: "the courtesies a defeated
army that had fought well was traditionally granted"). All five flagged in the
brief are glossed, and in their first-use paragraph. Excellent.

**NC-1 (SHOULD-FIX) — "Hessians" in `the-parallels` block 4:**
> "Redoubt No. 9, to the southeast, was held by about 120 men, mostly Hessians."

Hessian is first used here with no definition. It is defined later in the same
block: "(German auxiliary soldiers hired into British service)" — but this
parenthetical is on a different sentence four lines down and applies to Redoubt 9.
The word appears once before the gloss. Pull the gloss to its first use:

> "…held by about 120 men, mostly Hessians (German auxiliary soldiers hired into
> British service)."

(The current text already has the definition; just confirm it attaches to the first
occurrence, not a later sentence.)

**NC-2 (SHOULD-FIX) — "artillery" used without context in `the-parallels`:**
Several blocks assume the reader knows artillery is large cannon. The term appears
freely from block 3 onward. Given that "155 allied guns" is a striking number, one
phrase — "artillery, the massed cannon that delivered the siege's main killing power"
— would anchor it. Soft note; the word "guns" and "bombardment" together carry
enough meaning for most readers.

**NC-3 (SHOULD-FIX) — "parallels" plural before the sing. is defined:**
`the-parallels` block 1, sentence 1: "the allies arrived on September 28 and
closed around the peninsula." Block 3 then defines "a parallel." This is fine; the
section title is "Digging the lines closed," not "Digging the parallels closed,"
so the jargon word itself does not appear until it is defined.
No action needed.

**NC-4 (SHOULD-FIX) — "article of capitulation" in `the-sword` block 2:**
> "The Articles of Capitulation were finished and signed on October 19…"

Capitulation is close enough to "surrender" that most readers will parse it. A
brief gloss ("the formal surrender terms") would help, but this is soft.

**NC-5 (SHOULD-FIX) — "Gloucester Point" cross-references assume memory across
sections:**
Gloucester Point is introduced in the dossier's `sides` note but not in the section
prose until `the-trap` block 3 (correctly: "with the village of Gloucester Point
directly across the water"). The `the-parallels` and `the-sword` references are
back-references to established content; no action needed. The escape attempt in
`the-parallels` block 8 names "the French and American cavalry penned there" without
explaining who held Gloucester Point; adding "where Tarleton's cavalry was pinned
by the Duc de Lauzun's hussars" (already in the dossier cast) would complete the
picture, but this is a should-fix, not a must.

---

## Framing audit (Framing fairness — the French; the surrender dignity)

### French as co-equal — STRONG

The French role at every level is explicit and prominent:
- De Grasse gets his own block in `the-trap` and the "Meanwhile" box names the
  Battle of the Chesapeake the "battle that won the battle."
- De Barras and the siege train are named and explained.
- The dossier's `sides` note explicitly says "larger on the French side than the
  American once the fleet and its sailors are counted."
- The `outcome.text` opens: "Yorktown was won at sea before it was won on land.
  Remove the French fleet and nothing about the siege works."
- Rochambeau's "extraordinary tact" bio acknowledges he quietly steered the
  campaign to the Chesapeake; the siege guns, engineers, and fleet are all named
  as French.
- The French storming of Redoubt 9 is given equal treatment to Hamilton's
  Redoubt 10, including noting the French took heavier casualties.

**No framing finding here.**

### Surrender dignity — STRONG, one SHOULD-FIX

Cornwallis's illness is handled correctly: stated as his reason, not diagnosed,
with "whether disgust also kept him from the field is something no source can settle"
as the hedge. The surrender ceremony is not jingoistic — O'Hara is described
factually, his possible motive (surrender to a European royal court) is given as
one of two possibilities with no contemporary source, and the Lincoln/Charleston
reversal is presented as "exact, pointed reversal," not a triumphal taunt.

**F-1 (SHOULD-FIX) — "the thing the whole page has been pointing toward"
in `the-sword` block 3:**

> "And here Washington did the thing **the whole page has been pointing toward.**
> He refused the British garrison the honors of war."

"The whole page has been pointing toward" is mild meta-narration AND slightly
triumphalist framing — it telegraphs that Washington's refusal is the climax the
narrative has been building to, rather than letting the action speak. Rewrite:

> "Washington refused the British garrison the honors of war."

Then the next sentence ("He did so for a precise reason") carries the explanation.
The setup in the paragraph following does the dramatic work without the herald.

### Tune framing — STRONG

Block 6 of `the-sword` handles "The World Turned Upside Down" with scrupulous
honesty: tradition, evidence problem stated, Garden named, Freeman cited, "almost
certainly not a fact." No action needed.

---

## Dossier surfaces — non-prose

**`note` (dossier overview):** Clear, accurate, no em-dashes. Side-tags not used
here (correct — overview note, not section prose). No meta-narration. GOOD.

**`stats[]`:** No em-dashes. Casualties language uses the approved "more than
7,000" / "roughly" hedges throughout. GOOD.

**`sides[].note`:** Both sides explained fairly; the British `note` calls out the
contradictory orders from Clinton without romanticizing Cornwallis's campaign.
"Death trap with water at its back" is strong house voice. GOOD.

**`commanders[].bio`:** No em-dashes. Side-tags present (role field carries the
side label). Each bio is per-this-battle (not a general career summary). The
O'Hara bio correctly records no contemporary source for his reasoning when offering
the sword. Lafayette bio: "the direct reason the trap had something to catch" —
good. Washington bio: "In six years he had never won a pitched battle against a
major British force" is appropriately honest. Rochambeau bio: "He exercised command
with extraordinary tact, deferring to Washington in public while privately making
the case to de Grasse for the Chesapeake" — the French co-architect of the victory
is named plainly. GOOD.

**`outcome.text`:** Leads with the sea verdict, then names what Britain still held,
then de Grasse's defeat at the Saintes, then the Commons vote and North's fall,
then the Treaty of Paris. Proportionate, no em-dashes, no meta-narration. STRONG.

**`sections[].blurb` (the three card hooks):**

- `the-trap`: "A textbook three-week siege" — minor inaccuracy risk; the siege
  was twenty-two days, consistent with the stat block, but "three-week" is a loose
  shorthand that could be misleading. SHOULD-FIX: "a three-week siege" → "a
  twenty-two-day siege."
- `the-parallels`: Clean.
- `the-sword`: "with colors cased, the same humiliation Britain had dealt at
  Charleston, returned in kind" — fair framing, not triumphalist. GOOD.

**`meanwhile` cards:**
- `the-trap` "Meanwhile": No em-dashes, strong close: "Every shovelful of earth
  turned in the siege that followed was dug on the credit of those two hours at
  sea." STRONG.
- `the-parallels` "Meanwhile": The Hamilton unloaded-muskets detail is exactly the
  right choice for the sidebar. GOOD.
- `the-sword` "Meanwhile": The Charleston/Lincoln reversal retold here is clean.
  "Of all the gestures in the war it is the most exact" — borderline on the
  superlative ("most exact" is defensible since it's describing the symmetry, not
  a value judgment), but acceptable. GOOD.

---

## Summary table

| Section | Storytelling | Newcomer | Framing | Blockers |
|---|---|---|---|---|
| `the-trap` | STRONG | GOOD | STRONG | M-1, M-2 (meta-narration) |
| `the-parallels` | GOOD | GOOD | STRONG | None additional |
| `the-sword` | STRONG | GOOD | STRONG | M-3 (meta-narration × 2) |
| Dossier (non-prose) | STRONG | STRONG | STRONG | None |

---

## MUST-FIX list (ship-blocking, 4 items)

| # | Location | Issue | Fix |
|---|---|---|---|
| M-1 | `the-trap` block 1 | "Hold that in mind" — meta-narration | Cut the instruction; close with the fact (see M-1 above) |
| M-2 | `the-trap` block 8 | "This is the framing historians…" — meta-narration | Lead with the historians' point, not the announcement that a point is being made (see M-2 above) |
| M-3a | `the-sword` block 5 | "the page's signature moment" — self-reference / meta-narration | Cut; let the symmetry land without the herald (see M-3 above) |
| M-3b | `the-sword` block 4 | "not the page's business to guess" — self-reference | "guessing serves no one" (see should-fix note above — borderline; recommend fixing with M-3a) |

---

## SHOULD-FIX list (non-blocking, quality)

| # | Location | Issue |
|---|---|---|
| S-1 | `the-trap` block 5 | Add one-sentence framing of why the siege train matters before naming de Barras |
| S-2 | `the-parallels` blocks 5–6 | Mild length; consider tightening Redoubt 10 / Redoubt 9 into one block |
| S-3 | `the-parallels` block 4 | Confirm Hessian gloss attaches to first occurrence of the word |
| S-4 | `the-sword` block 3 | "the thing the whole page has been pointing toward" — mild meta + mild triumph herald; cut to plain statement |
| S-5 | `the-sword` block 4 | "not the page's business to guess" — self-reference; see M-3b |
| S-6 | `sections[0].blurb` (the-trap card) | "three-week siege" → "twenty-two-day siege" for precision |
| S-7 | `the-parallels` block 8 | Name "Tarleton's cavalry" and Lauzun at Gloucester Point to close the loop for readers who land on this section alone |

---

## Overall assessment

This is strong, careful writing that has clearly been authored with the voice rules
in mind. Em-dashes: **zero** — a clean pass. The central hinge of the whole
narrative (the sea, the French fleet, the Battle of the Chesapeake) is handled as
a co-equal — not a footnote — throughout the dossier and all three sections. The
surrender ceremony and the Charleston reversal are rendered with dignity and
without triumphalism. The tune tradition is handled with exactly the right
skepticism. The war-goes-on corrective in `the-sword` is one of the best passages
in the Revolution dossiers so far.

The four MUST-FIX items are all the same root defect: the meta-narrator voice
leaking through in four places — "hold that in mind," "this is the framing," "the
page's signature moment," and "not the page's business." All four are one-sentence
fixes that do not require any new research or restructuring.
