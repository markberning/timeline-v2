# Six Dynasties — Map Prompt Redos

See [README.md](../README.md). Ch 1, 3, 5, 8 are clean. Ch 2, 4, 6, 7 need redos.

A common failure mode across this TL: **positioning instructions in parentheses (like `(top edge)`, `(bottom edge)`, `(top)`) leaked from prompt text into the rendered map labels.** These are author-side staging notes, not text the reader should see.

---

## Chapter 2 — REDO

**What went wrong:** The label `Steppe Frontier (top)` appears at the top of the map. The `(top)` parenthetical was a positioning instruction to the model and should not have been rendered.

**CRITICAL RULES:**

1. **Positioning instructions in parentheses must NOT appear in rendered labels.** The label is `Steppe Frontier`, with no `(top)` suffix. If a region is meant to be at the top of the map, place it at the top — but do not render the words `(top)`, `(top edge)`, `(bottom)`, `(bottom edge)`, `(secondary)`, `(north)`, `(south)`, `(east)`, `(west)`, etc. as visible text.
2. **Spell every label exactly as written, with no positioning suffixes.**

---

(Use the Chapter 2 prompt from [`../six-dynasties.md`](../six-dynasties.md) verbatim with the rule above.)

---

## Chapter 4 — REDO

**What went wrong (multiple severe issues):**
- `Yellow River (top edge)` — positioning suffix leaked into label.
- `Eastern Jin` appears TWICE on the map — once at top labeled `(south)`, once at the bottom unlabeled.
- The Orchid Pavilion callout reads `Emperor Taizong buried the **Taizong buried the** original with him` — phrase `Taizong buried the` was duplicated mid-sentence.
- The Jiankang label has nested parentheses: `Jiankang (Eastern Jin capital — (Orchid Pavilion — Wang Xizhi writes the greatest calligraphy in Chinese history, 353 CE)`. The Orchid Pavilion content belongs in its OWN top-right callout, not nested inside the city label.

**CRITICAL RULES:**

1. **`Eastern Jin` appears EXACTLY ONCE**, as a single shaded political-region label, NOT twice. Do not draw a duplicate at the bottom of the map.
2. **Positioning instructions like `(top edge)`, `(south)`, `(secondary)` must NOT appear in rendered labels.** The river label is `Yellow River`, the region label is `Eastern Jin`, full stop.
3. **The Orchid Pavilion callout must read EXACTLY:** `Orchid Pavilion Preface, 353 CE — 324 characters of running script. Emperor Taizong buried the original with him.` Do not duplicate any phrase. Do not write `Taizong buried the Taizong buried the`.
4. **Jiankang label must be simple:** `Jiankang (Eastern Jin capital — Wang Xizhi composes the Orchid Pavilion Preface here, 353 CE)`. Do not use nested parentheses inside parentheses.
5. **Spell every label exactly as written. Do not duplicate any phrase.**

---

(Use the Chapter 4 prompt from [`../six-dynasties.md`](../six-dynasties.md) verbatim with the rules above.)

---

## Chapter 6 — REDO

**What went wrong:** Multiple positioning suffixes leaked into rendered labels: `Steppe (top)`, `Southern Dynasties (bottom edge)`, `Yangtze River (bottom edge)`.

**CRITICAL RULES:**

1. **Do NOT render positioning suffixes.** Labels are: `Steppe`, `Southern Dynasties`, `Yangtze River`. No `(top)`, `(bottom edge)`, etc. is to appear as visible text.
2. **Spell every label exactly as written, with no suffix.**

---

(Use the Chapter 6 prompt from [`../six-dynasties.md`](../six-dynasties.md) verbatim with the rule above.)

---

## Chapter 7 — REDO

**What went wrong:**
- `Yangtzze River` (extra `z`) — typo, should be `Yangtze River`.
- `Northern Dynasties (top edge)` and `Southeast Asia (bottom edge)` — leaked positioning suffixes.

**CRITICAL RULES:**

1. **Spell `Yangtze` correctly — one `z`.** Not `Yangtzze`.
2. **Do NOT render positioning suffixes.** Labels are: `Northern Dynasties`, `Southeast Asia`, `Yangtze River`. No `(top edge)`, `(bottom edge)`, etc.
3. **Spell every label exactly as written.**

---

(Use the Chapter 7 prompt from [`../six-dynasties.md`](../six-dynasties.md) verbatim with the rules above.)
