# Fact gate R2 — Descartes *Principles of Philosophy* (work read)

Run: 2026-06-17 | Draft: `src/app/philosophy/work/_reads/descartes-principles.ts`
Markers found: **7 `/* [VERIFY] */` tags** | Markers remaining: **0**

---

## Per-claim verdicts

### 1. ~58 surviving letters in the Descartes-Elisabeth correspondence
**✅ CONFIRMED**
The University of Chicago Press edition of *The Correspondence between Princess Elisabeth of Bohemia and René Descartes* (ed. Shapiro) explicitly states "fifty-eight letters: thirty-two from Descartes and twenty-six from Elisabeth." The draft says "nearly sixty" in prose and the verify tag said "roughly 58" — both accurate.
Action: marker deleted, prose unchanged.

### 2. Mersenne dates 1588–1648; circulated Meditations manuscript for 1641 Objections; Descartes corresponded heavily with Mersenne
**✅ CONFIRMED**
Dates confirmed by Britannica, SEP, Wikipedia. Mersenne solicited the Objections at Descartes' request; the resulting Objections + Replies were published with the 1641 Meditations. Mersenne was a Minim friar based at the Minim convent in Paris — the draft's "Paris friar" is accurate. The dense Descartes-Mersenne scientific correspondence during this period is well-documented.
Action: marker deleted, prose unchanged.

### 3. Arnauld raised the Cartesian circle in the 1641 Objections (Fourth Objections); Mersenne also pressed related worries
**✅ CONFIRMED**
Arnauld's Fourth Objections to the Meditations (1641) contain the canonical statement of the Cartesian circle ("we are sure that God exists only because we clearly and distinctly perceive this"). Descartes called Arnauld's objections "the best of all." Mersenne independently raised a version of the circularity worry in the Second Objections (confirmed by a 2018 *Revue Philosophique de Louvain* paper whose title names "Mersenne, Arnauld, Gassendi: trois justifications distinctes d'un même reproche").
Action: marker deleted, prose unchanged.

### 4. Pierre Gassendi dates 1592–1655; French priest reviving Epicurean atomism; authored the Fifth Objections to Descartes' Meditations (1641)
**✅ CONFIRMED**
Dates 1592–1655 confirmed by Britannica and SEP. Gassendi was a canon of the Cathedral of Digne (French cleric, correctly called "priest" in the draft). He wrote the Fifth Objections at Mersenne's request in 1641 — the longest set of objections. His revival of Epicurean-inspired atomism is his signature philosophical project, culminating in the posthumous *Syntagma philosophicum* (1658).
Action: marker deleted, prose unchanged.

### 5. Torricelli's barometric experiment 1643–1644 produced an apparent vacuum; Pascal extended these experiments in the late 1640s
**✅ CONFIRMED**
The Science Museum dates the first experiment to 1643; historian W. E. Knowles Middleton argues 1644 is more precise (Torricelli's first letter describing it is dated 11 June 1644). The range "1643 to 1644" in the draft covers both datings accurately. Mersenne brought the results to Paris in October 1644, where they reached Pascal. Pascal's vacuum experiments followed in 1646–47. All consistent with the draft.
Action: marker deleted, prose unchanged.

### 6. Galileo's Two New Sciences/Discourses (1638) stated rectilinear inertia for horizontal motion; Descartes developed his laws in the unpublished Le Monde (c.1632–1633)
**❌ WRONG — CORRECTED**
The Le Monde dates (c.1632–1633, shelved 1633 after Galileo's condemnation) are confirmed. But the Galileo claim is incorrect: Galileo's inertia principle in the *Two New Sciences* was **circular**, not rectilinear — "horizontal" motion for Galileo meant motion along a spherical surface centered on the Earth, so conserved motion was circular. Multiple sources (SEP Galileo; intellectualmathematics.com; Springer chapter on Galileo's inertia) agree that **Descartes was the first to state inertia in genuinely rectilinear terms**. The original prose said Galileo "independently established rectilinear inertia for horizontal motion."
Correction applied: prose now reads "Galileo's *Discourses* of 1638 had developed a related principle, that a body on a horizontal surface persists in motion, though Galileo conceived of that motion as circular (around the center of the Earth) rather than genuinely straight-line. Descartes was the first to state inertia in strictly rectilinear terms, and he had already done so in the unpublished *Le Monde* written around 1632 to 1633."
Action: prose corrected, marker deleted.

### 7. Descartes' three elements: first and second are the fine/subtle grades filling the plenum, third is coarse visible matter of planets
**✅ CONFIRMED**
SEP Descartes' Physics and the SparkNotes summary of Part III of the *Principles* (derived from the text) describe the three elements as: first = the most finely fragmented matter filling all gaps; second = particles moving rectilinearly from vortex centers (makes up the Sun and stars); third = coarser particles making up the planets and Earth. The draft's summary (first and second fill the plenum as fine particles; third = coarse visible matter of planets) is an accurate shorthand.
Action: marker deleted, prose unchanged.

---

## Summary

| # | Claim | Verdict |
|---|---|---|
| 1 | ~58 Elisabeth letters | ✅ CONFIRMED |
| 2 | Mersenne dates, Objections role, correspondence | ✅ CONFIRMED |
| 3 | Arnauld Fourth Objections / circle; Mersenne variations | ✅ CONFIRMED |
| 4 | Gassendi dates, Fifth Objections, atomism | ✅ CONFIRMED |
| 5 | Torricelli 1643–44; Pascal follow-up | ✅ CONFIRMED |
| 6 | Galileo rectilinear inertia 1638 / Le Monde dates | ❌ WRONG — corrected |
| 7 | Descartes three elements taxonomy | ✅ CONFIRMED |

WRONG corrected: **1** (Galileo's inertia was circular, not rectilinear; Descartes had priority on the rectilinear formulation).
Markers remaining: **0**.
TypeScript check: **clean** (`npx tsc --noEmit` — no errors).
