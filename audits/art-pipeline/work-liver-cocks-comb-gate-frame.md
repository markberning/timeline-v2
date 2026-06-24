# Gate report — COMPREHENSIVENESS + FRAMING / FAIRNESS
## Work: Arshile Gorky, *The Liver Is the Cock's Comb* (1944) — WORK read

Reviewer scope: completeness of essential facets + framing/fairness (bridge-claim
scoping, biography proportion, genius-myth / first-only overclaim). Source of truth:
`work-liver-cocks-comb-factpack.md` + the draft. Web-checked the bridge claim and the
title anecdote 2026-06-24 (Buffalo AKG, Wikipedia, TheArtStory, Village Preservation).
**No edits made to draft/src; no commit.**

---

## VERDICT: PASS (ship-ready) — 0 BLOCKER, 2 FIX, 4 NICE

The draft is unusually disciplined on exactly the two axes this gate guards. The bridge
claim is scoped as "synthesis and influence, not sole cause" in three separate places
(the `break` const blurb, the registry comment, and the after-block: *"true if you scope
it as influence and synthesis rather than as a one-man invention"*). The genocide / lost-
mother biography is held to a single careful paragraph that explicitly refuses to let the
trauma "unlock each shape." No genius-myth, no clean first/only overclaim survives into
the prose. The two FIX items below are small precision/proportion tightenings, not framing
failures. Nothing here is ship-blocking.

---

## 1. COMPREHENSIVENESS — essential facets

Checklist against the six facets the brief names:

| Facet | Covered? | Where |
|---|---|---|
| Gorky as the Surrealism→AbEx bridge | YES, well-scoped | `break` block; setting "last Surrealist, first of the next thing" |
| Biomorphic automatism | YES | `making` (automatism + drawing two-layer), `looking` (biomorphic defined) |
| Breton's championing + supplying the title | YES | setting, `break` (1945 Julien Levy intro + cryptogram quote + title attribution) |
| Armenian-immigrant background + its memory in the work | YES, proportionate | setting para 2; `making` (remembered gardens fused with Virginia) |
| 1940s peak before 1948 death | YES | setting, `afterlife` (1943–47 window, cascade, 21 July 1948) |
| Influence on de Kooning / NY School | YES | figures, lineage children, `break` after-block (de Kooning + Pollock) |

All six essential facets are present. **No MAJOR missing facet — no BLOCKER.**

**[FIX] — proportion: Pollock and Rothko are under-weighted relative to de Kooning in the
"after" reach.** The factpack (§2, §3-After) names the influence reaching **"Pollock, de
Kooning, Rothko"** / **"De Kooning's biomorphic abstraction, Pollock's all-over automatist
field."** The draft's `break` after-block names de Kooning and Pollock but drops Rothko,
and the const `figures`/`lineage` lists **only de Kooning** as a child. Web check confirms
the standard account names "de Kooning, Jackson Pollock and Mark Rothko" together as the
circle Gorky influenced. This slightly narrows the influence claim to a single heir. Not a
fairness problem, but a small completeness gap on the heir side. **Suggested fix** — in the
const `lineage.children`, the existing `"De Kooning's biomorphic abstraction"` is fine to
keep, but consider widening the after-block's named heirs is already done (de Kooning +
Pollock); the only real gap is the `figures` array, where adding one line keeps the heir
roster honest:

```
{ name: 'The New York School', role: 'De Kooning, Pollock, Rothko — the heirs', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
```

(Optional alternative: leave de Kooning as the single named figure since he is the
closest, most-documented heir, and lean on the after-block, which already names Pollock.
The minimum bar is that the prose not read as "de Kooning alone" — it currently does name
Pollock, so this is a NICE-to-FIX borderline, not a hard gap.)

**[NICE] — the catalogue-raisonné title `The Liver is the Coxcomb` is unmentioned.** The
Gorky Catalogue Raisonné (P281) lists the work as *The Liver is the Coxcomb*. The draft
correctly unpacks "coxcomb / cock's comb" as flower + crest + jester's cap, so the meaning
is covered; noting the variant cataloguing title is optional enrichment, not required.

**[NICE] — French title `Le Foie est la crête du coq` is omitted.** Minor; the title is
Breton's (a French Surrealist), so the French original is a small authenticity detail. Not
required.

**[NICE] — "one of his largest" is asserted without the size-comparison that earns it.**
The draft says "one of Gorky's largest paintings" (true per factpack §1). A one-clause
anchor ("most of his canvases are easel-sized; this one is mural-scale") would let the
reader feel the claim rather than take it. The `making` block half-does this ("the size of
a wall"); fine as-is.

---

## 2. FRAMING / FAIRNESS

### 2a. The "bridge" / "father of AbEx" claim — scoped as synthesis + influence? YES.

This is the highest-risk axis for this work and the draft handles it correctly. The phrase
**"father of Abstract Expressionism" never appears** — good, that is the overclaim to
refuse, and the draft refuses it. The shorthand "last of the Surrealists and first of the
Abstract Expressionists" is used but each time it is immediately fenced:

- `break` block: *"Gorky is **a** decisive hinge … the shorthand … is useful, but he did
  not single-handedly invent the movement, and he never fully swallowed Surrealist
  doctrine."*
- after-block: *"true if you scope it as influence and synthesis rather than as a one-man
  invention. This canvas is one of the doors…"* (note: **"one of"** the doors, not "the"
  door — correctly plural-sourced).
- registry comment: *"The Surrealism→AbEx claim is a SYNTHESIS, scoped, never sole-cause."*

Web check (Village Preservation, Wikipedia, TheArtStory) confirms "bridge / presaged /
seminal influence on" is the mainstream framing, and that Gorky is consistently described
as influencing a *circle* (de Kooning, Pollock, Rothko), never as sole inventor. **The
draft's scoping matches the source consensus. No FIX.**

One sentence to watch (not a defect, a precision note logged for the fact gate, not this
one): the afterlife close calls it *"the canvas most often used to show the turn."* That is
a true and well-hedged claim ("most often used," not "the painting that caused the turn").
Keep as written.

### 2b. Genocide / lost-mother biography kept proportionate? YES.

The factpack (§8) flags this as the second-biggest trap: *"do not turn the read into a
trauma caption that explains every shape."* The draft is exemplary here. The genocide and
the mother's 1919 starvation death appear in **exactly one paragraph** (setting para 2),
which then explicitly does the proportioning work itself:

> *"That loss runs underneath his art for the rest of his life. But it is not a key that
> unlocks each shape, and the museum … is careful to frame the homeland in it as remembered
> gardens, not literal autobiography. State the loss once, with care, and let the forms
> stay open."*

This is the correct move: name the wound once, refuse to let it become the whole reading,
and hand the interpretive weight back to "remembered gardens fused with the Virginia
present." The `making` block reinforces this (memory + present, "neither a portrait of
Virginia nor an illustration of Armenia"). **Proportion is correct. No FIX.**

**[FIX] — "died of starvation in his arms" slightly over-dramatizes a single uncertain
detail.** The factpack states only *"his mother died of starvation in 1919 during the
Armenian genocide's aftermath"* — it does **not** assert she died *in his arms*. The "in his
arms" detail is part of the Gorky legend (and appears in some secondary tellings) but is not
in the gated ground truth and is the kind of vivid, unverifiable biographical flourish this
gate should keep proportionate. It tips one sentence from "state the loss once, with care"
toward melodrama. **Suggested text** — change:

> *"his mother died of starvation in his arms in its aftermath"*

to:

> *"his mother died of starvation in 1919, in its aftermath"*

(This also surfaces for the FACT gate as an unsourced detail; flagged here because the
*effect* is a proportion/framing one — it is the single most "trauma-caption" beat in an
otherwise well-restrained paragraph.)

### 2c. Genius-myth / first-only overclaim / proportion — clean? MOSTLY.

- **Genius-myth:** the draft resists hagiography. Gorky is framed as "the most gifted
  apprentice in America … and it bothered him" — i.e. the long apprenticeship and the
  derivative decades are stated plainly, not airbrushed. The suicide is handled as
  biography, not as romantic genius-tragedy. Good.
- **"For the first time":** the only "first time" in the read is **inside the Breton quote**
  (*"Here for the first time nature is treated as a cryptogram"*) — that is Breton's claim,
  correctly attributed to Breton, not asserted in house voice. **Acceptable** (a quoted
  source's superlative is not a house overclaim).
- **[NICE] — "the most gifted apprentice in America" is a soft house-voice superlative.**
  Unsourced and unfalsifiable ("most gifted … in America"). It is clearly rhetorical and the
  surrounding text undercuts any genius-myth, so it is low-risk, but a strict reading flags
  it. Optional soften to *"one of the most gifted apprentices in America"* or *"a brilliant
  apprentice"* (the const blurb already uses "brilliant apprentice," which is the safer
  register — align the prose to it). Not blocking.

---

## SUMMARY OF FINDINGS

| # | Class | Axis | Finding |
|---|---|---|---|
| 1 | FIX | proportion | "died of starvation **in his arms**" — unsourced dramatization; cut to match factpack |
| 2 | FIX | comprehensiveness | heir roster leans on de Kooning; Rothko dropped, Pollock only in after-block — widen `figures` or accept (borderline) |
| 3 | NICE | comprehensiveness | catalogue-raisonné title *The Liver is the Coxcomb* / French title unmentioned |
| 4 | NICE | comprehensiveness | "one of his largest" could be anchored with an easel-vs-mural contrast |
| 5 | NICE | framing | "the most gifted apprentice in America" — soft superlative; align to const's "brilliant apprentice" |
| 6 | NICE | framing | (logged, no change) afterlife "most often used to show the turn" is correctly hedged — keep |

**0 BLOCKER.** The two FIX items are precision/proportion tightenings; both can be applied
in one revise pass without disturbing structure. The bridge-claim scoping and the
genocide-proportion handling — the two things this gate exists to catch — are already done
right.
