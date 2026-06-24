# GATE — Comprehensiveness + Framing/Fairness — Picabia, *La Sainte Vierge* (1920)

**Gate:** Comprehensiveness + Framing/Fairness (2 lenses)
**Work:** Francis Picabia, *La Sainte Vierge (The Blessed Virgin)*, 1920, Centre Pompidou (AM 2008-91)
**Draft:** `audits/art-pipeline/work-sainte-vierge-draft.md`
**Fact pack:** `audits/art-pipeline/work-sainte-vierge-factpack.md`

## VERDICT: PASS WITH FIXES

No comprehensiveness or framing **BLOCKER** found in my two lenses. (A separate FACT-gate
BLOCKER stands: the *Manifeste Cannibale Dada* venue — Salle Gaveau is wrong; it was the
Théâtre de la Maison de l'Œuvre, 27 March 1920. I did not re-verify it; it is flagged for the
reconciler, and it touches one of my surfaces, see FIX-1.) The draft is unusually well-framed:
it situates the work in Paris Dada and in *391*, treats the blasphemy as historical content
not editorial, keeps the making-method hedged, and — importantly — does NOT import the fact
pack's riskier "most minimal possible provocation" absolute into the prose. The findings below
are two real FIXes (one shared with the FACT gate, one a soft scope-claim) and several NICEs.

---

## 1. COMPREHENSIVENESS — essential facets

All six required facets are present and substantively developed:

| Facet | Where | Verdict |
|---|---|---|
| Paris Dada provocation | `SvgParisDada` ¶1–2, ¶5–6; `break`/`after` | ✅ covered, well-situated |
| The magazine *391* | `SvgParisDada` ¶3 (history, 1917–24, cities, "291" trap) + issue-12 framing | ✅ covered |
| Blasphemy / anti-Church gesture | `SvgLooking` ¶5 (immaculate/stain pun), hook, `figures` (Church as target) | ✅ covered, handled as content (see Framing) |
| Chance / gesture as content | `SvgMaking` ¶1–2; `SvgBreak` ¶2; annotations (drips) | ✅ covered |
| Drawing-vs-*391*-plate distinction | `SvgMaking` "One image, two versions"; `looking`; `after`; annotations | ✅ covered thoroughly (a strength) |
| Influence on informel / action painting / Conceptual gesture | `SvgBreak` ¶2–3; `lineage.children` | ✅ covered (3-way split: tachisme/informel, Action Painting, Conceptual) |

**No MAJOR missing facet.** The draft also volunteers two facets beyond the required list that
strengthen it: the multiple-objects problem (Yale lithograph + two-drawings argument) and the
PD/rights status. Both are correct to include.

### [NICE] One genuinely thin facet: the "not writing / not drawing" reading
The fact pack's strongest art-historical insight — Dawn Ades's reading that the mark is "at once
both not writing and not drawing," refusing to privilege word over image — is the one substantive
scholarly idea the draft drops. The draft leans entirely on the immaculate/stain pun (which it
does very well) but never lands the word-vs-image point, which is *why* a hand-lettered caption on
a blot is more than a one-line gag. Optional addition to `SvgLooking` after the signature ¶:

> Suggested insert: "There is one more turn here. The lettered title is writing; the blot is a
> picture; and the joke sits exactly between them, refusing to be either. The mark is, as one
> scholar puts it, *at once both not writing and not drawing* — which is its own small attack on
> the idea that a work has to commit to being one or the other."

Classified NICE, not FIX: the required comprehensiveness facets are all met; this is enrichment.

---

## 2. FRAMING / FAIRNESS

### [FIX] FIX-1 — *Manifeste Cannibale Dada* venue (shared surface with FACT gate)
`SvgAfter` ¶ "At a Dada festival at the **Salle Gaveau** on 27 March 1920" and the muted
attribution line beneath the cannibal-manifesto quote both name the **Salle Gaveau**. The FACT
gate found this is wrong (correct: Théâtre de la Maison de l'Œuvre, 27 March 1920). This is a
framing/fairness surface too, because the quote's attribution line is a gated factual surface —
flagging it here so the reconciler corrects **both** the prose sentence and the parenthetical
source line, not just one. Suggested text once the FACT gate confirms:

> "At a Dada matinée at the Théâtre de la Maison de l'Œuvre on 27 March 1920, Picabia's
> *Manifeste Cannibale Dada* ('Cannibal Dada Manifesto') was performed…"
> and the muted line: "(From the *Manifeste Cannibale Dada*, performed at the 27 March 1920 Dada
> matinée at the Théâtre de la Maison de l'Œuvre…)"

### [FIX] FIX-2 — soft scope-claim in the hook / Paris-Dada superlative
The prose mostly avoids first/only overclaims, but two phrasings edge toward an unearned
superlative against real precedents (Arp's chance collages "according to the Laws of Chance,"
1916–17; Duchamp's readymades from 1913; Tzara's cut-up chance poem):

- **`hook`** (PART A): "No skill, no subject, no labor: just a flick of ink…" — this is fine as
  description. But paired with —
- **`SvgParisDada` ¶6**: "*La Sainte Vierge* is that program in its most compressed form: the
  smallest possible gesture aimed at the biggest possible target."

"The smallest possible gesture" reads as an absolute. Chance-as-content was **not** invented here
— Arp was tearing and dropping paper "according to the laws of chance" by 1916–17, and Duchamp had
made naming-as-art the readymade move by 1913. The draft is *aware* of this (it credits Duchamp's
readymades as a parent in `lineage` and `SvgLooking`/`SvgBreak`), so the fix is small: hedge the
superlative to a within-Picabia/within-*391* claim rather than an absolute. Suggested:

> Replace "the smallest possible gesture aimed at the biggest possible target."
> with: "Picabia's most compressed gesture yet, aimed at the biggest possible target — chance and
> the readymade's naming-move, which Dada had been circling since Arp's chance collages and
> Duchamp's readymades, fired at the one subject guaranteed to give maximum offense."

(If the reconciler prefers minimal surgery: just change "the smallest possible gesture" to "his
smallest, most compressed gesture" — drops the absolute, keeps the rhythm.)

**Note for reconciler:** the fact pack §2/§3 carries the harder phrasing — "the most minimal
possible provocation" — which the draft *correctly did not import*. Do not reintroduce it.

### [PASS] Genius-myth — well handled
The draft does **not** present Picabia as a lone iconoclast. It opens by naming Dada (Zurich 1916,
the movement), routes the work through *391* and "Paris Dada," lists "Paris Dada" and "391" as
`figures`, and credits Duchamp's readymades as a parent. `SvgBreak` ¶3 explicitly disclaims
prophecy ("None of that is a claim that Picabia sat down in 1920 and planned the next
half-century. He made a one-off insult for a magazine"). This is the correct anti-genius-myth
posture. No fix.

### [PASS] Fairness on the blasphemy — well handled
The anti-Church gesture is consistently framed as **historical Dada provocation / content**, never
editorialized for or against religion. The draft says the title "performs the provocation," calls
it "a homage in the exact form of an insult," and explains the immaculate/stain theology as the
mechanism of the joke — analytic, not approving or condemning. It does not valorize the
blasphemy as brave truth-telling, nor moralize against it. `figures` lists "The Catholic Church"
as "The target of the blasphemy," which is descriptive, not a side-taking. No fix.

### [NICE] NICE-1 — proportion: the rights paragraph is slightly oversized
`SvgAfter`'s closing rights paragraph is a full, well-written paragraph, but on a one-blot work
it competes with the art-historical payload for the reader's last impression. Proportion is fine
as-is; if trimming is wanted, the EU museum-photo-© sentence could compress to a clause. NICE only.

### [PASS] Making-method kept hedged — correct
`SvgMaking` ¶2 keeps "flung vs ink-dropper" explicitly hedged ("popular accounts answer more
confidently than they should"; "we'll keep the dramatic 'flung across the room' version at arm's
length, because the sources do not actually support it"). The `break` section's "flung or dripped
mark" phrasing preserves the hedge by naming both. This matches the fact pack §8.4 directive. Good.

### [NICE] NICE-2 — one residual unhedged "flung" echo
`SvgBreak` ¶3 says "a mark made by chance and named by the artist" (clean), but ¶2 uses "Let the
**flung or dripped mark** be the work itself." The "or dripped" keeps it honest, so this is not a
FIX — but for full consistency with the careful §Making hedge, consider "the chance-made mark"
to avoid even the echo of "flung." NICE only.

---

## SUMMARY OF FINDINGS
- **BLOCKER:** none in my two lenses. (FACT gate's Salle Gaveau BLOCKER stands; see FIX-1 — it
  also lives on a framing surface, so fix the prose sentence AND the source line together.)
- **FIX-1:** correct the cannibal-manifesto venue on **both** the prose sentence and the muted
  attribution line (Salle Gaveau → Théâtre de la Maison de l'Œuvre), per the FACT gate.
- **FIX-2:** hedge the absolute "the smallest possible gesture" to a within-Picabia/within-Dada
  claim; chance-as-content predates this (Arp 1916–17, Duchamp 1913). Do NOT reimport the fact
  pack's "most minimal possible provocation."
- **NICE:** add the Ades "not writing / not drawing" reading (thin facet); trim rights ¶ for
  proportion; smooth one residual "flung" echo in `break` ¶2.
