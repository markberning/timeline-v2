# FACT-CHECK + LEGEND gate — Boccioni, *Unique Forms of Continuity in Space* (1913)

**Gate:** Fact / accuracy / legend-vs-documented (art content pipeline).
**Target draft:** `audits/art-pipeline/work-unique-forms-draft.md`
**Fact pack:** `audits/art-pipeline/work-unique-forms-factpack.md`
**Verdict:** PASS with corrections — **no [BLOCKER]s.** The plaster-vs-bronze spine is handled correctly throughout; the draft never implies Boccioni cast a bronze. Two [FIX] items (one internal inconsistency, one over-precise claim) and several [NICE] items below.

Verification done against: Met collection API (object 485540, live), Wikipedia (*Unique Forms…* + *Umberto Boccioni*), MoMA object 81179 title line (via search snippet), numismatic sources. Hero image fetched live (HTTP 200).

---

## Watch-list items (the seven the brief flagged) — all CLEAR

1. **1913 original is PLASTER; all bronzes posthumous; draft never implies Boccioni cast a bronze.** ✅ CLEAR.
   - Wikipedia verbatim: "Boccioni's work was in plaster, and was never cast into bronze in his lifetime." Original plaster at MAC USP, São Paulo — confirmed.
   - The draft states this repeatedly and unambiguously: medium field "Bronze (cast posthumously from the 1913 plaster)"; "He never casts it in metal"; "Every shining bronze you have ever seen of this figure was made after he was dead." No surface implies the artist cast metal. **This is the heart of the ask and it is right.**

2. **Hero = Met cast: "1913, cast 1950", accession 1990.38.3, Bequest of Lydia Winston Malbin 1989; first bronzes 1931 (incl. MoMA); 1972 casts-of-casts (incl. Tate).** ✅ CLEAR — the author's re-fetch correction is CONFIRMED.
   - Met collection API (live, object 485540) returns verbatim: `objectDate: "1913, cast 1950"`, `accessionNumber: 1990.38.3`, `accessionYear: 1990`, `creditLine: "Bequest of Lydia Winston Malbin, 1989"`, dimensions `47 3/4 × 35 × 15 3/4 in., 200 lb.` — matches the draft's stats/provenance EXACTLY (47¾ × 35 × 15¾ in, 200 lb).
   - The draft correctly supersedes the fact pack's generic "1949 Met." Note the credit-line year (1989) and the Met's accession year (1990) differ; the draft surfaces both correctly ("Bequest … 1989 (accession 1990.38.3)"). Not an error.
   - First bronzes 1931, one at MoMA — confirmed. MoMA's own title line is verbatim "1913 (cast 1931 or 1934)" — the draft quotes this correctly.
   - 1972 group incl. Tate, casts-of-casts — confirmed (Wikipedia: "Another eight, in 1972, were made not from the plaster original, but from one of the 1949 bronze casts."). See [FIX-1] for the internal "1949 bronze" inconsistency this creates with the draft's own 1950 Met date.

3. **Boccioni died 1916, age 33, fall from a horse in WWI training.** ✅ CLEAR.
   - Wikipedia *Umberto Boccioni* verbatim: "On 16 August 1916, he was thrown from his horse during a cavalry training exercise and was trampled. He died the following day, aged thirty-three, at Verona Military Hospital." Born 19 Oct 1882 → age 33 is correct.
   - Draft says "thirty-three," near Verona, thrown from a horse in cavalry/military training — all correct. (MoMA's page says "thirty-four" — that is MoMA's error; the draft is right to use 33.)

4. **Italian 20-cent euro coin, from 2002.** ✅ CLEAR. Selected ~1998, in circulation from 2002. Draft says "selected in the late 1990s," "in circulation since 2002" — correct.

5. **Nike of Samothrace / Rodin *Walking Man* = scholarly READING, not documented intent.** ✅ CLEAR. The draft consistently frames it as "is often read against" / "a reading by later scholars, not a documented statement of Boccioni's intent" / "hold it as a likeness, not a confession." Correct legend-vs-documented handling everywhere it appears (annotation, looking section, lineage parents).

6. **Hero image URL loads.** ✅ CLEAR. `…/commons/5/5e/Unique_Forms_of_Continuity_in_Space_MET_DT6411.jpg` → HTTP 200, content-type image/jpeg, 1.42 MB. (Could not re-confirm pixel dims 2978×3722 in this pass — Met page rate-limited 429 — but the file is the standard Met Commons DT6411 plate and loads; the draft's W/H≈0.80 is consistent with a portrait sculpture shot.)

7. **Bonus — Marinetti / 1909 *Le Figaro* / Technical Manifesto 1912 / quotes.** ✅ Founding Manifesto front-page *Le Figaro* 20 Feb 1909 — correct. Technical Manifesto of Futurist Sculpture 11 April 1912 — matches fact pack [DOCUMENTED]. All quoted manifesto phrases match the fact pack's verified ledger verbatim. The title-source quote ("not to be found in repetition of legs, arms and faces… intuitive search for the unique form which gives continuity in space") matches the fact pack ledger.

---

## [FIX] — should fix before ship (not blocking, but factual/consistency)

### [FIX-1] Internal date contradiction: Met cast "1950" vs. the cast-of-a-cast "1949 bronze"
The draft (correctly, per the live Met record) dates the **Met** cast **1950**. But it also says the 1972 casts were taken "**from a 1949 bronze**" (provenance row 1972; afterlife section: "several of the 1972 bronzes were made not from Boccioni's plaster but from one of the existing bronzes"). The source of the "1949" figure is Wikipedia, which dates the **Met and Milan casts to 1949** — i.e., in Wikipedia's account the cast-of-a-cast source bronze IS the Met/Milan 1949 cast. The draft has split the difference: it took the Met's own "1950" for the hero cast but kept Wikipedia's "1949" for the cast-of-a-cast source. As written, a reader gets a "1949 bronze" that the draft never otherwise identifies (the draft has no 1949 cast — it has a 1950 Met cast and a mid-century Milan cast).

- **Exact text (provenance 1972 row):** "several 1972 casts were taken not from the plaster but from a 1949 bronze, a cast of a cast."
- **Exact text (afterlife §):** "several of the 1972 bronzes were made not from Boccioni's plaster but from one of the existing bronzes — a cast taken from a cast."
- **Correction:** Make the two consistent. Cleanest: in the provenance row, say the 1972 casts were taken "from one of the existing mid-century bronzes (a cast of a cast)" and drop the bare "1949" — OR reconcile to the source by noting the Met/Milan casts are dated 1949 by some accounts and 1950 by the Met's own record. Do NOT assert a standalone "1949 bronze" the draft never places. The afterlife-section phrasing ("from one of the existing bronzes") is already the safe form; the provenance row's "a 1949 bronze" is the one to soften.
- **Source:** Wikipedia (*Unique Forms…*): Met/Milan casts "1949," 1972 casts "from one of the 1949 bronze casts." Met collection API: Met cast "1950." The conflict is real in the sources, so don't assert a precise year the draft can't anchor.

### [FIX-2] Over-precise: "the first two bronze casts were made from the plaster" (1931)
The afterlife section and provenance row state the 1931 casts were made "from the plaster." Wikipedia confirms two 1931 casts but does not, in the text checked, explicitly state the 1931 casts were taken from the plaster (the explicit cast-source statement in sources is the **1972**-from-1949 one). The 1931 casts being from the plaster is a reasonable inference (there was no earlier bronze in 1931), but it is stated as flat fact.

- **Exact text (afterlife §):** "That year the first two bronze casts were made from the plaster."
- **Correction:** Either keep (defensible — there was no other source in 1931) or soften to "the first two bronze casts were made" / "cast from the plaster original" if you want it source-anchored. Low severity; flagging because the gate enforces no-assert-beyond-source. Recommend keep but be aware it's inference, not a quoted source line.

---

## [NICE] — optional polish, not errors

- **[NICE-1] "47¾ × 35 × 15¾ in, 200 lb" Met dims** — verified verbatim against the live Met API. No change. (Recording the pass for the audit trail.)
- **[NICE-2] Figure height ~3 ft 8 in (43⅞ in / 111.4 cm)** — verified against Wikipedia (111.44 cm). The draft cleanly distinguishes the bare figure (~3 ft 8 in) from the Met bronze with base (3 ft 11¾ in). Correct and well-handled. The "a little under four feet — roughly chest height" prose matches the fact pack's sanctioned phrasing.
- **[NICE-3] Plaster vs. wax** — draft correctly calls "wax" a disputed minority claim and uses plaster. Matches fact pack. Good.
- **[NICE-4] MoMA "purchased from Benedetta Marinetti in 1948"** — the draft says only that the MoMA cast "is now in the Museum of Modern Art" and quotes the dating hedge; it does not state MoMA's acquisition route. Fine to omit; no error. (Available if a provenance row wants it.)
- **[NICE-5] "two block footings, not a plinth"** — the fact pack flags this as a near-truth (it has minimal integral footings, is NOT baseless/floating). The draft phrases it carefully every time ("not floating, not baseless, but deliberately denied the tall plinth"). Correctly handled per the fact pack caution.
- **[NICE-6] Hero pixel dimensions** — could not re-confirm 2978×3722 this pass (Met page 429); the file loads and is the right plate. If a later vision pass runs, confirm the dims; not gate-blocking.

---

## Summary
- **[BLOCKER]: 0**
- **[FIX]: 2** (FIX-1 internal 1949/1950 inconsistency; FIX-2 "from the plaster" 1931 over-precision)
- **[NICE]: 6**

The draft's central accuracy obligation — never let the prose imply Boccioni cast a bronze, all bronzes posthumous, original is plaster in São Paulo — is met cleanly across every surface (medium, stats, provenance, all five sections, annotations, lineage). The author's live re-fetch correction of the Met cast to **"1913, cast 1950," accession 1990.38.3, Bequest of Lydia Winston Malbin, 1989** is independently CONFIRMED against the Met collection API. The only substantive fix is reconciling the leftover "1949 bronze" reference (FIX-1) so the cast-of-a-cast claim doesn't reference a year the draft never otherwise establishes.
