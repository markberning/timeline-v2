# Zapotec Civilization — Map Prompt Redos

See [README.md](../README.md). Ch 6, 8 are clean. Ch 1, 2, 3, 4, 5, 7 need redos. The recurring failure on this TL is **the `Mountains (surrounding ring)` label being drawn twice** and other duplicate region labels.

---

## Chapter 1 — REDO

**What went wrong:** `Mountains (surrounding ring)` appears TWICE — once at the top of the map, once on the left middle.

**CRITICAL RULES:**

1. **`Mountains (surrounding ring)` appears EXACTLY ONCE** as a region label on the surrounding hill ring. Do not draw it a second time.
2. **Spell every region label exactly once.**

---

(Use the Chapter 1 prompt from [`../zapotec-civilization.md`](../zapotec-civilization.md) verbatim with the rule above.)

---

## Chapter 2 — REDO

**What went wrong:** Same as Ch 1 — `Mountains (surrounding ring)` is drawn twice.

**CRITICAL RULES:**

1. **`Mountains (surrounding ring)` appears EXACTLY ONCE** as a region label. Do not duplicate it.
2. **Spell every region label exactly once.**

---

(Use the Chapter 2 prompt from [`../zapotec-civilization.md`](../zapotec-civilization.md) verbatim with the rule above.)

---

## Chapter 3 — REDO

**What went wrong:**
- `Maya (~300℡, most sophisticated)` — the date `BCE` was rendered as the Unicode telephone-symbol ligature `℡`. Should be `~300 BCE`.
- The Building L description trails off mid-sentence: `Building L — 300+ Danzantes carved in stone, the earliest large-scale conquest propaganda in` — no ending word.

**CRITICAL RULES:**

1. **Date abbreviations are written as plain ASCII letters: `BCE` and `CE`.** Do not use Unicode ligatures. The Maya date must read `~300 BCE`, not `~300℡` or any symbol substitution.
2. **The Building L callout must END with a complete word and matched parens:** `Monte Albán (Building L — 300+ Danzantes carved in stone, the earliest large-scale conquest propaganda in Mesoamerica)`. Do not truncate after `propaganda in`.
3. **Every label must end with a complete sentence and a closing parenthesis.**

---

(Use the Chapter 3 prompt from [`../zapotec-civilization.md`](../zapotec-civilization.md) verbatim with the rules above.)

---

## Chapter 4 — REDO

**What went wrong:** Teotihuacan label reads `(Oaxacan Barrio — Zapotec community, Zapotec grayware pottery, **pottery,** Zapotec tombs)`. The word `pottery` was duplicated.

**CRITICAL RULES:**

1. **The Teotihuacan label must read EXACTLY:** `Teotihuacan (Oaxacan Barrio — Zapotec community, Zapotec grayware pottery, Zapotec tombs)`. The word `pottery` appears once.
2. **Spell every word exactly once. Do not duplicate any word.**

---

(Use the Chapter 4 prompt from [`../zapotec-civilization.md`](../zapotec-civilization.md) verbatim with the rule above.)

---

## Chapter 5 — REDO

**What went wrong:** `Etla arm` was drawn TWICE — once as `Etla arm (irrigated maize fields)`, once as `Etla arm (irrigated fields)`. Two slightly different versions of the same label on the same valley arm.

**CRITICAL RULES:**

1. **`Etla arm` appears EXACTLY ONCE** as a region label on the northern valley arm. Use the single label `Etla arm (irrigated maize fields)`. Do not draw a second `Etla arm` anywhere.
2. **Spell every region label exactly once.**

---

(Use the Chapter 5 prompt from [`../zapotec-civilization.md`](../zapotec-civilization.md) verbatim with the rule above.)

---

## Chapter 7 — REDO

**What went wrong:**
- `Zaachila` callout reads `Zaachila Albán 7 — Mixte gold treasure reusing an ancient Zapotec tomb, 1350 CE`. The word `Albán` is wrongly inserted (a stray duplication of part of `Monte Albán` from elsewhere on the map). The callout should be about Tomb 7 at Zaachila.
- Marginal labels `(northeast edge)` (after Gulf of Mexico) and `(southwest edge)` (after Pacific Ocean) — leaked positioning suffixes.

**CRITICAL RULES:**

1. **The Zaachila callout must read EXACTLY:** `Zaachila (Tomb 7 — Mixtec gold treasure reusing an ancient Zapotec tomb, 1350 CE)`. The word `Albán` does not appear in this label — Monte Albán is a separate site. The word is `Mixtec`, not `Mixte`.
2. **Do NOT render positioning suffixes like `(northeast edge)` or `(southwest edge)`.** Region labels are simply `Gulf of Mexico` and `Pacific Ocean`.
3. **Spell every label exactly as written. Do not insert words from other labels.**

---

(Use the Chapter 7 prompt from [`../zapotec-civilization.md`](../zapotec-civilization.md) verbatim with the rules above.)
