# Teotihuacan — Map Prompt Redos

See [README.md](../README.md). Ch 3, 4, 6 are clean. Ch 1, 2, 5, 7, 8 need redos.

---

## Chapter 1 — REDO

**What went wrong:** A region label reads `Volgland Mexico` — `Volgland` is a hallucinated word that has replaced `Valley of`. The intended label is `Valley of Mexico`.

**CRITICAL RULES:**

1. **The region label is `Valley of Mexico`** (alternatively `Basin of Mexico`). There is no place called `Volgland`. Do not invent words.
2. **Spell every label exactly as written. Do not invent words.**

---

(Use the Chapter 1 prompt from [`../teotihuacan.md`](../teotihuacan.md) verbatim with the rule above.)

---

## Chapter 2 — REDO

**What went wrong:** `Ciudadela` was rendered as TWO labels — once as a bare label `Ciudadela`, once as the descriptive callout `Ciudadela (walled compound, ~38 acres — administrative and political center)`. Only the descriptive version is needed.

**CRITICAL RULES:**

1. **`Ciudadela` appears EXACTLY ONCE** — as the descriptive callout `Ciudadela (walled compound, ~38 acres — administrative and political center)`. Do not also draw a bare `Ciudadela` label nearby.
2. **Spell every label exactly once.**

---

(Use the Chapter 2 prompt from [`../teotihuacan.md`](../teotihuacan.md) verbatim with the rule above.)

---

## Chapter 5 — REDO

**What went wrong:** Top-left label reads `Teotihuacan Gull site (multiethnic city — Zapotec, Maya, Gulf Coast, and other communities living permanently)`. The phrase `Gull site` is a hallucinated insertion (likely a corruption of an editing artifact). It is not in the prompt.

**CRITICAL RULES:**

1. **The Teotihuacan annotation must read EXACTLY:** `Teotihuacan (multiethnic city — Zapotec, Maya, Gulf Coast, and other communities living permanently)`. Do not insert `Gull site` or any other invented words.
2. **Spell every label exactly as written. Do not invent words.**

---

(Use the Chapter 5 prompt from [`../teotihuacan.md`](../teotihuacan.md) verbatim with the rule above.)

---

## Chapter 7 — REDO

**What went wrong:**
- `Pyramid of the Moon` label appears TWICE — once correctly at the top of the map, once misplaced near the Ciudadela at the bottom.
- `Ciudadela` label appears TWICE — once as a small label below the bottom structure, once as a gray region label slightly offset.

**CRITICAL RULES:**

1. **`Pyramid of the Moon` appears EXACTLY ONCE**, attached to the structure at the NORTH end of the Street of the Dead (top of the map). Do not draw a second `Pyramid of the Moon` near the Ciudadela. The structure at the SOUTH end of the Street of the Dead is the Ciudadela / Temple of the Feathered Serpent, NOT another Pyramid of the Moon.
2. **`Ciudadela` appears EXACTLY ONCE** — as a single label on the southern compound.
3. **Spell every label exactly once.**

---

(Use the Chapter 7 prompt from [`../teotihuacan.md`](../teotihuacan.md) verbatim with the rules above.)

---

## Chapter 8 — REDO

**What went wrong:**
- Cacaxtla label trails off mid-sentence: `Cacaxtla (Maya-style battle murals — cultural blending after`. Missing closing parenthesis and trailing words.
- Bottom callout `(Epiclassic period ~550–900 CE — regional centers fill the power vacuum, no successor achieves comparable scale` — missing closing parenthesis.

**CRITICAL RULES:**

1. **Cacaxtla label must read EXACTLY:** `Cacaxtla (Maya-style battle murals — cultural blending after Teotihuacan's fall)`. Do not truncate after `cultural blending after`.
2. **Bottom annotation must close its parenthesis:** `(Epiclassic period ~550–900 CE — regional centers fill the power vacuum, no successor achieves comparable scale)`. Every parenthesis must close.
3. **Every label must end with a complete sentence and matched parentheses.**

---

(Use the Chapter 8 prompt from [`../teotihuacan.md`](../teotihuacan.md) verbatim with the rules above.)
