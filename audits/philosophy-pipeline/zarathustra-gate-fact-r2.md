# Zarathustra work read — fact gate r2 findings

Date: 2026-06-17
Gate: r2 targeted fact-check (single [VERIFY] marker + should-fix confirmations)
Source: `src/app/philosophy/work/_reads/zarathustra.ts`

---

## 1. Drunken Song — "All joy wants eternity" (P3)

**Common's exact wording** (ch. LXXIX, "The Drunken Song," Standard Ebooks / Gutenberg #1998):
- "For joys all want eternity"
- "they want deep, profound eternity"

**Draft paraphrase before edit:**
> "that all joy wants eternity, wants deep, deep eternity"

**Issue:** "deep, deep eternity" is the draft's invention; Common has "deep, profound eternity."
"all joy wants" is singular; Common has "joys all want" (plural).

**Verdict:** Paraphrase was faithful in meaning but imprecise on the adjective ("deep, deep" vs.
"deep, profound") and number ("all joy" vs. "joys all"). Tightened to Common's vocabulary:

> "that all joys want eternity, want deep, profound eternity"

No quote marks added (still paraphrase — the surrounding prose is the reader-facing text, not
a block quote). Change is minimal and unambiguous.

---

## 2. Should-fix confirmations

### 2a. "The conscientious man in spirit" (not "man of science")
**Status: CONFIRMED LANDED.** Ch. 7, paragraph 2 reads: "There is the conscientious man in
spirit, a scholar who has narrowed his entire life down to the study of a single tiny subject,
mistaking that shrinkage for honesty." Correct Common chapter title ("The Conscientious Man of
Spirit") and character description intact.

### 2b. "Sils-Maria" (not "St. Moritz")
**Status: CONFIRMED LANDED.** Hook paragraph 1 reads: "summers at Sils-Maria in the Swiss
Alps, winters on the Italian coast." Correct location verified.

### 2c. "barrel-organs" / "cheerful ditty" (replacing "hurdy-gurdy")
**Status: CONFIRMED LANDED.** Ch. 6, paragraph 3 reads: "He gently calls them barrel-organs
and accuses them of having turned his ordeal into a cheerful ditty." Common's actual text
uses "barrel-organs" (confirmed against Standard Ebooks ch. 57: "O ye wags and barrel-organs").
"cheerful ditty" is an acceptable paraphrase of Common's "lyre-lay" — the animals do not
receive a verbatim quote here, so paraphrase is appropriate and the word "ditty" captures the
dismissive tone faithfully.

---

## 3. [VERIFY] marker count

**zarathustra.ts — [VERIFY] markers remaining: 0**
Confirmed via grep; the single marker (ch. 7, paragraph 4) was removed after paraphrase
correction. No other marker text present.

---

## 4. TypeScript check

`npx tsc --noEmit` — clean (zero errors in zarathustra.ts or any file outside the
concurrently-edited monadology.ts, which was explicitly excluded from scope).

---

## Summary

The Drunken Song paraphrase was faithful in intent but had two minor word-level drifts from
Common ("deep, deep" for "deep, profound"; singular "joy" for plural "joys"). Both corrected.
All three r1 should-fixes ("conscientious man in spirit," "Sils-Maria," "barrel-organs"/
"cheerful ditty") are confirmed present in the draft. Zero [VERIFY] markers remain in
zarathustra.ts. tsc clean.
