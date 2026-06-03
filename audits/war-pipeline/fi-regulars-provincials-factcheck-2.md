# Fact-Check 2 (focused re-check) — "Regulars & Provincials" (French and Indian War)

Target: `audits/war-pipeline/fi-regulars-provincials-final.md`
Scope: confirm ONLY the three corrected text errors + screen the should-fix edits for any NEW unverified claim. Everything else verified in the prior fact-check pass (not re-checked here).

## Overall: PASS

All three corrections applied correctly in every required location. No new unverified factual claim introduced by the should-fix edits.

---

## A. Washington quote ("or", not "nor") — PASS

- Inline prose (line 27): reads `...where I once did, or thought I had a right to, command.` ✅
- `> quote:` block (line 29): reads `...where I once did, or thought I had a right to, command." — George Washington, 1754` ✅
- Standalone-word grep (`\bnor\b`) returns ZERO matches in the file (the only "nor" hits are substrings inside other words such as "honored"/"another"). ✅
- Primary wording web-verified: Founders Online, Washington to William Fitzhugh, 15 Nov 1754, gives "where I once did, or thought I had a right to, command." The corrected text matches the source exactly.

## B. Gibson Clough Louisbourg duty-refusal quote (original double negative) — PASS

- Line 82: `the men, as Clough wrote, "all swore that we would not do no more duty here."` ✅ The original double negative ("do no more") is preserved inside quote marks; the incorrect grammar-corrected "any more" no longer appears anywhere (`grep -i "any more"` → no match). ✅
- This is the correct fix: the section restored the authentic double-negative wording rather than the silently-modernized "any more". The November 1759 Louisbourg duty-refusal is documented in Clough's journal and in Fred Anderson's account; the double-negative form is the form quoted in the scholarship.

## C. Gibson Clough hometown ("Salem, Massachusetts", not "Lynn") — PASS

- Prose (line 61): `Private Gibson Clough (British colonial), a soldier from Salem, Massachusetts` ✅
- Figure caption (line 73): `Private Gibson Clough of Salem, Massachusetts kept a journal through 1759-60` ✅
- `grep -i "Lynn"` → ZERO matches anywhere in the file. ✅
- Primary-source verified: Clough's own journal opens "I was born in Salem in New England in ye year 1738" (American Yawp Reader transcription). Salem is correct; the prior "Lynn" was wrong.

---

## New-claim screen on the should-fix edits — CLEAR (no new unverified specifics)

1. **Pitt 30 Dec 1757 rank warrant (line 118)** — "a warrant of 30 December 1757 lifted provincial generals and colonels to rank 'next after' the regular colonels who had once outranked them all." Web-verified: Pitt's late-1757 warrant gave provincial field officers (colonel and above) standing immediately junior to / "next after" regulars of the same rank. Date and "next after" framing are accurate. Not a new unverified claim. ✅

2. **Militia-rolls sentence (line 120)** — "the provincial regiments swelling once again off the same militia rolls the colonies had drawn on from the start." This restates a relationship already established earlier in the same section (lines 10 and 12: provincial quotas/ranks drawn off the militia rolls). No new specific number, name, or date; standard and internally consistent. ✅

3. **Ohio Company cross-ref pill (line 16)** — `[The Ohio Country & the Ohio Company](/war-french-indian/off-the-battlefield/ohio-company)` is an internal navigation link, not a factual assertion in prose. It introduces no checkable claim. (Link-target validity is a links-gate concern, not a fact-check one, and is out of scope here.) ✅

## ❌ items: none.
