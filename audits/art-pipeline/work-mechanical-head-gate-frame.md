# GATE — Comprehensiveness + Framing/Fairness

**Work:** Raoul Hausmann, *Mechanical Head (The Spirit of Our Time)* (c.1919–20)
**Gate:** Comprehensiveness + Framing/Fairness (two lenses)
**Draft judged:** `audits/art-pipeline/work-mechanical-head-draft.md`
**Fact source:** `audits/art-pipeline/work-mechanical-head-factpack.md`
**Web-checked:** assemblage precedents (Picasso 1912 / Duchamp 1913); photomontage-invention dispute (Grosz/Heartfield vs Hausmann/Höch).

---

## VERDICT: PASS with fixes — **0 BLOCKER, 2 FIX, 4 NICE**

This is a strong, fair draft. Both required risk-axes — genius-myth and first/only overclaim — are already actively managed: Hausmann is situated in a named Berlin Dada group (Höch, Heartfield, Grosz, Baader, Huelsenbeck) rather than as a lone inventor; the photomontage claim is correctly hedged "one of the (disputed) inventors"; the "only one of its kind to survive" claim is explicitly narrowed away from "only assemblage he ever made"; and the lineage is run THROUGH Duchamp/Rauschenberg, never claiming Hausmann originated the form. The two FIX items are both genuine gaps, not errors: (1) the actual ORIGIN of assemblage — Picasso's Cubist constructions, c.1912 — is absent from an otherwise complete before/after lineage, which is the one place the "before" risks reading as if found-object sculpture started with Dada; and (2) the satire's anchoring in a specific 1920s rationalization ideal (Taylorism/the measured efficient worker) is implied but never named, leaving the central meaning slightly under-built.

---

## LENS 1 — COMPREHENSIVENESS

Essential facets and their coverage:

| Facet | Covered? | Where |
|---|---|---|
| Berlin Dada (most-political wing, post-WWI/Weimar context) | YES — strong | MchBerlin ¶1–2 |
| Assemblage / found-object sculpture (define the method) | YES — strong | MchBuilding ¶2; MchBreak |
| Satire of rationalized / measured modern man | YES, but under-named | "looking," "break" |
| Attached measuring-instruments meaning | YES — strong | annotations; MchLooking ¶2 |
| Hausmann's wider photomontage work | YES | MchBerlin ¶3; MchBuilding ¶4 |
| Hausmann's sound / optophonetic poetry | YES (brief) | MchBerlin ¶3 |
| The influence / afterlife | YES | MchBreak "after"; MchAfterlife |

**[FIX] C1 — Name the rationalization ideal the work is satirizing.** The draft repeatedly says "rationalized, quantified modern man" and "measurement, money, time and standardization," which is correct but abstract. The specific historical target c.1920 was the cult of **Taylorism / scientific management** (the measured, efficient, time-and-motion-optimized worker) — exactly the moment Germany was importing American efficiency ideals into Weimar industry. Naming it grounds the satire instead of leaving "rationalized man" as a floating phrase. This is the heart of the work's meaning, so it is a FIX, not a NICE.
*Suggested text (add to MchLooking ¶3 or MchBreak, one sentence):* "What the piece is actually mocking is a real post-war ideal: the dream — Taylorism, scientific management, the efficiency cult crossing from America into Weimar industry — of a man optimized like a machine, timed, measured and standardized. Hausmann answers it with a hollow wooden head wearing exactly those instruments."

**[NICE] C2 — One line on the satire's two-sided target.** The draft reads the work as a verdict on WWI's industrial slaughter ("man as apparatus") — good — but the object-list (ruler, tape, watch, wallet, "22") points as much at *peacetime* bureaucratic-commercial man (the filing-number, the wallet, the clocked workday) as at the soldier. A half-sentence acknowledging both registers would round it out. Optional.

**[NICE] C3 — Höch as a maker, not only a keeper.** Höch appears as "partner/collaborator" and "later its keeper," which is accurate, but she was a major Dada artist in her own right (*Cut with the Kitchen Knife…*, 1919) and a co-claimant of photomontage. The draft already credits her on the photomontage 1918-Baltic story, so this is well-handled; a single clause noting she was "a major Dada artist in her own right" at her first mention would pre-empt any read of her as a mere custodian. Optional, fairness-positive.

No MAJOR facet is missing. Comprehensiveness is otherwise complete.

---

## LENS 2 — FRAMING / FAIRNESS

### Genius-myth — PASS
Hausmann is firmly situated. MchBerlin names the full Berlin Dada core (Höch, Heartfield, Grosz, Baader, Huelsenbeck) and the figures[] array carries "Berlin Dada" as its own entry. He is "the group's restless inventor" but inside a named group, not a solo genius. No correction needed.

### Photomontage-invention claim — PASS (correctly hedged)
The draft says Hausmann "is one of the **(disputed)** inventors of photomontage" and attributes the origin story to "he and Höch." Web research confirms this is exactly right: the claim is genuinely contested (Grosz and Heartfield asserted they invented it in 1916; Hausmann/Höch countered with the 1918 Baltic story; commercial photomontage predates all of them to the 1850s). The draft's hedge is accurate and fair. No change.

### First / only-assemblage overclaim — PASS, with one precedent gap (see F1)
The draft does NOT claim Hausmann invented assemblage. It runs the form through Duchamp's readymade (correctly dated "a few years earlier") and forward to Rauschenberg, presenting Hausmann as an *adopter* of the readymade idea, not its originator. The "only one of its kind to survive" claim is explicitly and carefully narrowed ("not 'the only assemblage he ever made'"). This is model handling. The single gap is below.

**[FIX] F1 — The "before" lineage omits the actual origin of assemblage (Picasso's Cubist constructions, c.1912).** The "break · before" section says sculpture "for as long as there had been sculpture" meant carving/modelling, then jumps straight to Hausmann assembling. But assemblage / found-object sculpture did **not** start with Dada — Picasso's Cubist constructions (e.g. *Guitar*, 1912–14; *Still Life with Chair Caning*, 1912) and Duchamp's readymades (*Bicycle Wheel*, 1913) both precede the *Mechanical Head* by 6–8 years. The draft credits Duchamp but never Picasso, and the lineage[].parents array lists "Duchamp's readymade" and "Dada photomontage" but **not** Cubist construction. Without it, the "before/after" implicitly makes Dada the start of found-object sculpture, which is the precise overclaim this gate guards against. The fix is one clause, not a rewrite — the draft's claim is really "Hausmann pushed assemblage into *portraiture / the human head*," which IS defensible and specific; it just needs the precedent acknowledged.
*Suggested text (MchBreak "what changed," after the Duchamp sentence):* "Assemblage itself was not new — Picasso had been gluing found materials into Cubist constructions since around 1912, and Duchamp had declared a bicycle wheel art in 1913. What Hausmann does that is new is turn the method on the **human head**, the most traditionally hand-carved subject of all, and make it carry a portrait of the age."
*And add to PART A `lineage.parents`:* `{ label: 'Picasso’s Cubist construction', mode: 'art' },` (the genuine origin of the form belongs in the parents list alongside Duchamp).

### Proportion — PASS
Coverage is well-balanced: the making/object/break/afterlife get proportional weight; the rights and provenance hedges are appropriately sized to their uncertainty; no single sub-claim is over-inflated. The "only one to survive" framing is given exactly the caution it warrants.

### Anachronism — PASS (one micro-check, NICE)
The Weimar/post-WWI context is kept accurate to c.1920: "fragile Weimar Republic… founded in 1919," revolution and street-fighting, defeat and hunger — all correct for 1919–20. Critically, the draft does **not** import Fascism or Nazism into a c.1920 reading; the Nazi seizure of power (1933) is correctly absent, and the work is read against the *immediate* post-war chaos, not the later catastrophe. Good discipline.

**[NICE] F2 — Optional guard on the "industrial slaughter" line.** MchBreak reads the piece as "a flat verdict on the war just ended… men reduced to machines and lives to statistics." This is a legitimate critical reading but is the draft's interpretation, not a documented Hausmann statement (his own quoted line is about the *empty everyday man*, not specifically the war). The draft already frames it as a reading ("reads, too, as…"), so it is fine; if tightening, ensure it stays "reads as" rather than hardening into "Hausmann meant." Currently acceptable.

---

## SUMMARY OF FINDINGS

- **[FIX] C1** — Name Taylorism / scientific-management efficiency cult as the specific rationalization ideal being satirized (currently abstract "rationalized man").
- **[FIX] F1** — Add Picasso's Cubist construction (c.1912) as the actual origin of assemblage in the "before" lineage and in `lineage.parents`; reframe Hausmann's novelty as applying the method to the human head (defensible) rather than letting Dada read as the start of found-object sculpture.
- **[NICE] C2** — Acknowledge the satire's peacetime-bureaucratic target alongside the war reading.
- **[NICE] C3** — One clause flagging Höch as a major Dada artist in her own right at first mention.
- **[NICE] F2** — Keep the "verdict on the war" line as interpretation ("reads as"), not asserted intent. Currently OK.

No blockers. Genius-myth and first/only-overclaim axes are both already well-managed; the two FIX items are precedent/specificity gaps, not factual errors.

---

## SOURCES (web-checked this pass)
- Assemblage origin (Picasso Cubist constructions c.1912; Duchamp *Bicycle Wheel* 1913): https://en.wikipedia.org/wiki/Assemblage_(art) ; https://www.theartstory.org/definition/assemblage/
- *Mechanical Head* as objet-trouvé assemblage in the Duchamp readymade line: https://www.britannica.com/biography/Raoul-Hausmann ; https://smarthistory.org/hausmann-head/
- Photomontage-invention dispute (Grosz/Heartfield 1916 vs Hausmann/Höch 1918; commercial precedent 1850s): https://arthistoryunstuffed.com/the-photo-montage-revolution-dada-in-berlin/ ; https://en.wikipedia.org/wiki/Raoul_Hausmann ; https://www.britannica.com/biography/Hannah-Hoch
