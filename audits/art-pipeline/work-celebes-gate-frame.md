# GATE — COMPREHENSIVENESS + FRAMING/FAIRNESS — Ernst, *The Elephant Celebes* (1921)

**Gate:** Comprehensiveness + Framing/Fairness (one of the art work-read critic gates)
**Work:** Max Ernst, *The Elephant Celebes* / *Celebes* (1921), Tate T01988
**Reviewed:** `work-celebes-draft.md` against `work-celebes-factpack.md` + web verification
**Scope:** all reader-facing surfaces (prose, hook, blurbs, annotations, provenance notes, key-statement block, break block, stats, lineage)

---

## VERDICT: PASS (no BLOCKERS) — 1 FIX, several NICE

This is a strong, careful draft. Every facet the gate is required to check for is **present and handled correctly**, and the three highest-risk framing traps (the "first Surrealist masterpiece" overclaim, the contested corn-bin attribution, the 1924 anachronism) are each scoped exactly the way the doctrine demands. The one FIX is a genius-myth/comprehensiveness gap: Cologne Dada is presented as Ernst's solo operation, with no mention of his co-founders Baargeld and Arp. Everything else is NICE-to-have polish.

---

## 1. COMPREHENSIVENESS — essential facets

All required facets present:

| Facet | Present? | Where |
|---|---|---|
| Cologne Dada | YES | `cologne` section, `CelCologne` |
| Found-photo / corn-bin source transformed | YES | `making`, `CelMaking`, annotation 1 |
| Dream-image in oil | YES | `break` block, `CelBreak` ("Collage, painted") |
| Title's schoolboy-rhyme origin | YES | `making`, "A bawdy schoolboy rhyme, not an island" |
| Dada→Surrealism hinge | YES | `break` block + `afterlife` |
| Surrealism founded 1924 (Breton) | YES | `break` "The dating" sub-section |
| The influence (Dalí/Tanguy/Magritte) | YES | `break` close + `CelAfterlife` |
| Key statement (collage def + Lautréamont) | YES | `CelAfterlife` key-statement block |
| Provenance (Éluard→Penrose→Tate) | YES | `provenance[]` + `CelAfterlife` |

### [FIX] Genius-myth / comprehensiveness — Cologne Dada is missing its co-founders
The prose situates Ernst as the sole "engine"/"the man who ran" Cologne Dada and never names **Johannes Theodor Baargeld** or **Hans (Jean) Arp**. Cologne Dada was founded in **1919 by Ernst, Baargeld, and Arp** together (verified: Moderna Museet, DADA Companion, multiple sources). Presenting one figure as the lone operator of a collective movement is exactly the genius-myth the framing gate exists to catch. The `figures[]` array lists "Cologne Dada" as "The movement he ran" — same problem in a metadata surface.

Note this is a real tension with the factpack, which itself repeatedly calls Ernst "the engine of Cologne Dada." The factpack's phrasing is fine as shorthand, but the *reader prose* should name the collaborators at least once.

**Suggested fix** — in `CelCologne` paragraph 2, where the draft says "Ernst ran the Cologne branch of this," expand to name the co-founders:

> Ernst was one of the founders of the Cologne branch of Dada, alongside the painter-poet Johannes Theodor Baargeld and the artist Hans Arp (1886&ndash;1966), who would become a lifelong friend. The three of them made Cologne one of Dada's wildest outposts.

And soften the `figures[]` role from "The movement he ran" to **"The movement he co-founded"** (or "The Cologne group he helped run").

*(Classified FIX, not BLOCKER: the draft never denies others existed and the central claims about Ernst are accurate; but a lone-visionary framing of a collective is a fairness defect the gate is told to flag, and the fix is one sentence.)*

### Minor comprehensiveness notes (NICE)
- **[NICE]** The hook and `cologne` blurb both lean on Ernst as the singular "engine"; once the prose fix above lands, these two metadata strings are technically still solo-framed but are short summaries and acceptable. If touching them, "a driving force of Cologne Dada" reads better than "THE engine."
- **[NICE]** No facet is *missing* beyond the co-founders. The draft is, if anything, more complete than required (it adds the de Chirico mannequin lineage, the flying-fish dream-logic read, and the empty-horizon "stage" reading, all correct).

---

## 2. FRAMING / FAIRNESS

### [PASS] "First Surrealist masterpiece" overclaim — correctly scoped
This is the single highest-risk framing trap and the draft handles it **exactly to doctrine**. In `CelBreak` "The dating":
- It is attributed ("so often called," "a real and widely repeated art-historical judgment"), never asserted flat.
- It is explicitly scoped as "a critical assessment, not a date-stamp."
- The 1921-vs-1924 gap is stated plainly twice.
The const-header comment and `making`-era metadata carry the same scoping. **No change required.**

- **[NICE]** The phrase is genuinely attributable to a named source: **Simon Wilson, *The Burlington Magazine*, March 1978** ("undoubtedly the first masterpiece of Surrealist painting in the de Chirico tradition"). The draft's "often called / widely repeated" is fully sufficient for the gate, but if integration wants to harden it, naming the Wilson/Burlington source converts a generic "often called" into a sourced attribution. Optional polish only.

### [PASS] Genius-myth — see FIX above
The "first Surrealist masterpiece" half of the genius-myth risk is handled (it's framed as a judgment, and the high-Surrealist successors are credited). The remaining genius-myth defect is the missing co-founders, captured as the [FIX] in section 1.

### [PASS] Corn-bin attribution fairness — kept generic, correctly
The factpack flags the source attribution as genuinely contested (Craxton→Konkombwa/southern Sudan vs Schomburgk→Konkomba/West Africa). **Verified live:** English Wikipedia now states it as settled fact — "modeled after Robert Schomburgk's photograph of a two-legged clay guinea corn bin from a West African culture, the Konkomba" (cited to Simon Wilson, 1978). That is precisely the kind of confident single pin the gate is told to refuse.

The draft **does not pin it.** It says "a clay grain silo on two legs, from an anthropological publication," and `CelMaking` paragraph 2 explicitly tells the reader *why* the specifics are withheld ("scholars disagree about which corn-bin... the specific tribe and region you will sometimes see asserted as settled fact are not settled, so we leave them out"). Annotation 1 carries the same caution. This is the correct, defensible call even though a major source (Wikipedia) pins it — and the draft is right to be more careful than Wikipedia here. **No change. Flagged as a model handling of a contested attribution.**

- **[NICE]** If a reviewer ever wants to acknowledge the contestation more concretely without pinning, the safe addition is naming it as a dispute between two named scholarly framings — but the current generic handling is preferable for a reader surface and should be the default. Leave as is.

### [PASS] Anachronism / Surrealism dated 1924 — correct throughout
Surrealism is dated to Breton's 1924 manifesto every place it appears (const comment, `break` block, `figures[]` "The next step, 1924," lineage). The 1921-vs-1924 three-year gap is the spine of the break block. No anachronism. **No change.**

### Provenance fairness (NICE)
- **[NICE]** The draft hedges Éluard ("c. 1921") and Penrose ("c. 1938," "late 1930s") and the Tate credit-line mechanism ("entered from," not "purchased"/"presented"). **Verified:** Wikipedia states Éluard *purchased* it in 1921 and held it until 1938, when Penrose *purchased* it; Penrose later *sold* it to the Tate (proceeds funded the Elephant Trust). The draft's extra caution is defensible given the factpack rated these MEDIUM and the Tate credit line was unconfirmed. No defect — the hedging is honest, not wrong. If integration confirms the Tate record, the dates could be firmed, but the cautious version ships safely.

### Proportion (PASS)
Proportion is good: the break/hinge and the corn-bin transformation get the most room (correct — they are the reasons the work matters), the title and provenance get appropriate secondary weight, and no minor detail (flying fish, totem-pole, airplane shape) is over-inflated into a thesis. **No change.**

---

## SUMMARY OF FINDINGS

| # | Class | Surface | Issue |
|---|---|---|---|
| 1 | **FIX** | `CelCologne` prose + `figures[]` | Cologne Dada framed as Ernst's solo operation; name co-founders Baargeld + Arp (founded 1919) |
| 2 | NICE | `CelBreak` "The dating" | Could name the Wilson/Burlington 1978 source for "first masterpiece" (already correctly scoped) |
| 3 | NICE | hook / `cologne` blurb | "THE engine of Cologne Dada" → "a driving force" once co-founders are named |
| 4 | NICE | provenance | Éluard/Penrose dates + Tate mechanism could be firmed against confirmed records; current hedge ships safely |

**No BLOCKERS.** The required scoping (first-masterpiece, 1924 anachronism, generic corn-bin attribution) is all correct. Ship after the one-sentence co-founder FIX.
