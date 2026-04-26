# Xiongnu / Huns — Map Prompt Redos

See [README.md](../README.md). Ch 3, 4, 6 are clean. Ch 1, 2, 5, 7, 8 need redos. Ch 8 has the most severe garbling.

---

## Chapter 1 — REDO

**What went wrong:** `Great Wall` was rendered TWICE — once correctly along the wall in the northeast, once at the bottom with a stray word `steppe` appended (`Great Wall (Qin, connecting earlier walls) steppe`).

**CRITICAL RULES:**

1. **`Great Wall (Qin, connecting earlier walls)` appears EXACTLY ONCE** — drawn along the wall line in the north. Do not duplicate it at the bottom of the map.
2. **No stray words like `steppe` may follow the Great Wall label.** The label is `Great Wall (Qin, connecting earlier walls)`, full stop.
3. **Spell every label exactly once.**

---

(Use the Chapter 1 prompt from [`../xiongnu-huns.md`](../xiongnu-huns.md) verbatim with the rules above.)

---

## Chapter 2 — REDO

**What went wrong:** `Qin Great Wall` appears as a small extra label between `Xiongnu Empire (expanded)` and `Ordos Loop`, duplicating the larger `Great Wall (Qin, connecting earlier walls)` already drawn along the wall in the northeast.

**CRITICAL RULES:**

1. **The Great Wall is drawn EXACTLY ONCE**, with one label: `Great Wall (Qin, connecting earlier walls)`. Do not also draw `Qin Great Wall` as a second label.
2. **Spell every label exactly once.**

---

(Use the Chapter 2 prompt from [`../xiongnu-huns.md`](../xiongnu-huns.md) verbatim with the rule above.)

---

## Chapter 5 — REDO

**What went wrong:** `Great Wall` appears as TWO parallel labels along the wall line.

**CRITICAL RULES:**

1. **`Great Wall` appears EXACTLY ONCE** as a label along the wall line. Do not draw a second parallel `Great Wall` label.
2. **Spell every label exactly once.**

---

(Use the Chapter 5 prompt from [`../xiongnu-huns.md`](../xiongnu-huns.md) verbatim with the rule above.)

---

## Chapter 7 — REDO

**What went wrong:** Aquileia callout reads `Aquileia (452 CE — destroyed so thoroughly it nevver recovered, refugees found Venice)` — `nevver` has a doubled `v`.

**CRITICAL RULES:**

1. **Spell `never` correctly — one `v`.** The Aquileia label must read EXACTLY: `Aquileia (452 CE — destroyed so thoroughly it never recovered, refugees found Venice)`.
2. **Do not double-letter any word.**

---

(Use the Chapter 7 prompt from [`../xiongnu-huns.md`](../xiongnu-huns.md) verbatim with the rule above.)

---

## Chapter 8 — REDO (severe)

**What went wrong (multiple severe issues):** The middle annotation reads:

> `Empire dissolves in one year — Gepids, Ostrogoths, Stepids, Heruli, starvoys Heruli, Slavs up the Hunnic territory`

Issues:
- `Stepids` is a hallucinated tribe name (probably a corruption of `Sciri` or a duplication of `Gepids`).
- `starvoys` is a hallucinated nonsense word.
- `Heruli` appears TWICE in one sentence.
- The whole sentence is ungrammatical.

**CRITICAL RULES:**

1. **The annotation must read EXACTLY:** `Empire dissolves in one year — Gepids, Ostrogoths, Sciri, Heruli, and Slavs carve up the former Hunnic territory`. Do not invent tribe names like `Stepids`. Do not write nonsense words like `starvoys`. Do not duplicate `Heruli`.
2. **Each tribe is named exactly ONCE in this annotation.** The five tribes are: Gepids, Ostrogoths, Sciri, Heruli, Slavs. (Some sources list more — but these five are the canonical post-Hunnic successor groups for this annotation. Do not add others.)
3. **Spell every word exactly as written. Do not invent any word that is not in this prompt.**

---

(Use the Chapter 8 prompt from [`../xiongnu-huns.md`](../xiongnu-huns.md) verbatim with the rules above.)
