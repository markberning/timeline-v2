# NRO Clarity Gate — Newcomer/Clarity Critic Report
**Subject:** Neoclassical & Romantic era (nro, c. 1750–1850)
**Files reviewed:**
- `audits/art-pipeline/nro-era-narrative.tsx.txt`
- `audits/art-pipeline/nro-neoclassicism-narrative.tsx.txt`
- `audits/art-pipeline/nro-romanticism-narrative.tsx.txt`
**Reader persona:** sharp 15-year-old, zero museum experience, zero art history.

Grades: CLEAR / NEEDS-GLOSS / LOST
Severity: MUST-FIX (comprehension breaker) / SHOULD-FIX (smoother with a gloss)

No leftover scaffolding found in reader-visible prose. All `[VERIFY]`, `TODO`, and code-comment blocks are TypeScript comments (`//`) that will not render to the reader.

---

## ERA READ (nro-era-narrative.tsx.txt)

### Ch 0 — Lay of the Land · "A girl on a swing" · Grade: NEEDS-GLOSS

Well-handled: Rococo (inline gloss ✓), Neoclassicism (inline gloss ✓), Enlightenment (inline gloss ✓), the sublime (Burke + one-liner ✓), David intro adequate via action.

**MUST-FIX**
- **Line 78 — "a shallow stage like a Roman frieze"** — "frieze" undefined. A frieze is a carved or painted horizontal band running across the face of a classical building, figures marching across it left to right in a flat row. The comparison is the whole point of the Neoclassical staging idea and appears in every read, but the word is never defined anywhere. MUST-FIX on first use (here).
  > Suggested gloss: *"a shallow stage like a Roman frieze (the carved horizontal band of figures that runs across a classical temple, flat and marching in a row)"*

**SHOULD-FIX**
- **Lines 136–144 — Goya, Géricault, Delacroix** — named in the Feeling section with city but no nationality/role one-liner. They'll get full introductions in the movement reads, but the era read throws four unfamiliar surnames at the reader back-to-back with no handle. Even "the Spanish court painter Francisco Goya" / "the young French painter Théodore Géricault" / "the French painter Eugène Delacroix" would help.
- **Lines 157–162 — Turner, Friedrich, Constable** — same issue. Turner gets "J.M.W." and Britain; Constable gets "John Constable's ordinary fields"; Friedrich gets no nationality or role gloss.
- **Line 243 (Ch 1: Reason) — "He would spend forty years as the academy's defender of drawing"** — first use of "the academy" without any definition. Which academy? What does it control? A 15-year-old needs a one-liner. See Neoclassicism Ch 2 for the definition; it should appear here on first use or at least on first use in this era read.

---

### Ch 1 — Reason · "The case for order" · Grade: NEEDS-GLOSS

**MUST-FIX**
- **Line 243 — "the academy"** — see above. First use in the entire era read, no gloss.
  > Suggested gloss: *"the academy (the official art school and exhibition system, in France the Académie royale, that controlled who got trained, what counted as great art, and who got shown)"*

**SHOULD-FIX**
- **Line 213 — "fini"** — inline gloss given ✓. OK.
- **Line 218 — "history painting"** — DEFINED inline ✓. OK.
- **Line 244 — "odalisque"** — DEFINED inline ✓. OK.

---

### Ch 2 — Feeling · "The case for feeling" · Grade: NEEDS-GLOSS

**SHOULD-FIX**
- Same names issue as Lay of the Land (Goya, Géricault, Delacroix, Friedrich) in summary passages without bios. Since this chapter is largely a re-statement for the era read, brief parenthetical gloss on first name each time is enough.

---

### Ch 3 — The Quarrel · "Two faces of one coin" · Grade: CLEAR

No new terms. "The Paris exhibition" (line ~352) refers to the Salon, defined in Neoclassicism Ch 2 but not yet defined in the era read. If a reader reads this chapter before the movement reads, they won't know what "the Paris exhibition" is.

**SHOULD-FIX**
- **Line ~352 — "the Paris exhibition"** — name it as the Salon and give the one-liner here: "the Salon, the official annual exhibition where French careers were made or broken."

---

### Ch 4 — The Handoff · "The man who refused both" · Grade: NEEDS-GLOSS

**SHOULD-FIX**
- **Line ~395 — "the Impressionists"** — forward reference with no gloss. "the Impressionists (the French painters of the 1860s–80s who would dissolve the firm contour into flecks of direct color)" is all that's needed.

---

## NEOCLASSICISM MOVEMENT READ (nro-neoclassicism-narrative.tsx.txt)

### Ch 1 — A scholar's creed and a buried city · Grade: NEEDS-GLOSS

Well-handled: Rococo (gloss ✓), Enlightenment (gloss ✓), civic virtue (gloss ✓), antiquity (gloss ✓), Herculaneum/Pompeii (explanation ✓), le goût grec (gloss ✓), Winckelmann (gloss ✓), German quote with English ✓.

**MUST-FIX**
- **Line 107 — "friezelike clarity"** — "frieze" still undefined here (same problem as Era Read). Neoclassicism Ch 1 is where the term most needs a gloss because it's the chapter that establishes the visual look of the whole movement.
  > Suggested gloss: *"friezelike clarity (the flat, left-to-right parade of figures you see on a carved classical frieze, the horizontal sculptural band on a Greek or Roman building)"*

**SHOULD-FIX**
- **Line 98 — "Henry Fuseli's translation of 1765"** — Fuseli introduced with no gloss. A one-liner: "the Swiss-British painter and translator Henry Fuseli" is enough.
- **Line 107 — "ceiling fresco"** — "fresco" unexplained. Many students know a fresco from Leonardo; some don't. "ceiling fresco (a painting applied directly onto wet plaster)" takes eight words.
- **Lines 113–116 — MeanwhileSheet: "finishing academy of European art"** — "academy" carries its technical meaning here (the formal art school and system) but still hasn't been defined for a reader who came straight to the movement read.
- **Lines 113–116 — MeanwhileSheet: Angelica Kauffman, Benjamin West** — Kauffman gets the "one of only two women among the founders of the Royal Academy in 1768" line, which gives enough context. West is "the American-born Benjamin West put a contemporary death into heroic-history form" — the phrase "heroic-history form" is art-speak; SHOULD-FIX with "painted a modern death at the grand scale once kept for ancient heroes."
- **Line 116 — "the Royal Academy"** — not defined. "the Royal Academy of Arts in London, Britain's official training ground and the institution that controlled entry into the art world" is needed.

---

### Ch 2 — David draws the line · Grade: CLEAR

Salon defined cleanly ✓. Line over color defined ✓. Horatii legend explained ✓. History painting explained in era read ✓. One small item:

**SHOULD-FIX**
- **Line 128 — "won the prize that sent young French painters to Rome"** — this is the Prix de Rome, France's most prestigious art prize. Naming it and giving a one-liner ("the Prix de Rome, a state prize that paid for years of study in Italy") rewards a curious reader and explains why Rome was the proving ground.

---

### Ch 3 — The official style of the Revolution · Grade: NEEDS-GLOSS

National Convention defined ✓, Montagnards defined ✓, regicide defined ✓, Jacobin Club glossed ✓, Thermidor defined ✓, pietà defined ✓, deposition defined ✓.

**SHOULD-FIX**
- **Line 231 — "the Festival of the Supreme Being in June 1794"** — named but not explained. One line: "a massive public pageant David designed to replace Christian ritual with a new revolutionary religion based on reason" helps the reader understand why it matters that David staged it.

---

### Ch 4 — Ingres and the cult of line · Grade: NEEDS-GLOSS

Odalisque defined ✓, apotheosis defined ✓.

**SHOULD-FIX**
- **Line 332 — "closer to a gilded Byzantine emperor"** — "Byzantine" unexplained. The comparison is vivid but useless if the reader doesn't know what Byzantine art looks like. "a gilded Byzantine emperor (the rigid, frontal, gold-ground icon style of medieval Eastern Christianity, designed to feel timeless and inhuman rather than lifelike)" is the gloss.
- **Line 400 (MeanwhileSheet) — "the Royal Academy in 1768"** — same as Ch 1 above. First use in the movement read; needs a gloss.

---

### Ch 5 — The rules everyone broke · Grade: CLEAR

Ingristes / colorists both defined ✓. Romanticism cross-referenced well. le goût grec re-defined ✓.

No new terms needing glossing.

---

## ROMANTICISM MOVEMENT READ (nro-romanticism-narrative.tsx.txt)

### Ch 1 — The revolt of feeling · Grade: NEEDS-GLOSS

Neoclassicism re-defined cleanly ✓. Burke and the sublime / beautiful defined ✓.

**MUST-FIX**
- **Line ~100 (MeanwhileSheet) — "the German Sturm und Drang"** — German phrase, zero gloss. A 15-year-old reads three unfamiliar words and has no handle. "Sturm und Drang (German for 'storm and stress,' a 1770s literary movement that prized intense emotion and individualism over Enlightenment reason)" is required. This is in the MeanwhileSheet, but MeanwhileSheet prose is reader-visible.

**SHOULD-FIX**
- **Line ~83 — "the academy had no slot for"** — the Romanticism movement read uses "the academy" assuming the reader already has the definition. If the reader opens the Romanticism read without having read the Neoclassicism read, this is opaque. A brief "(the official art institutions that controlled training and the Salon exhibition)" in parentheses on first use here would close the gap.
- **Line ~63 — "like a Roman frieze"** — yes, again. If this movement read is the reader's entry point, they still won't know what a frieze is.

---

### Ch 2 — Goya, alone in the dark · Grade: NEEDS-GLOSS

Goya introduced with dates and context ✓. Etchings defined ✓. Saturn / Cronus defined ✓. Quinta del Sordo glossed ✓.

**MUST-FIX**
- **Line 113 — "tapestry cartoons"** — "turning out cheerful tapestry cartoons" — in everyday English, a "cartoon" is a funny drawing. In art history it means a full-size preparatory design. A 15-year-old will think Goya spent his early career making animated shows or comic strips. This is an actively misleading false cognate. MUST-FIX.
  > Suggested gloss: *"tapestry cartoons (full-size design drawings made to guide weavers producing decorative tapestries — 'cartoon' here means a preparatory pattern, not a funny picture)"*

**SHOULD-FIX**
- **Lines 144–145 — "a quiet nod to Velázquez doing the same thing in Las Meninas"** — no gloss for Velázquez or for Las Meninas. Most 15-year-olds don't know either. "the great seventeenth-century Spanish court painter Diego Velázquez, who in his masterwork Las Meninas (1656) famously included himself at his easel in the background of the royal portrait" would complete the analogy.
- **Line 139 (credit) — "etching and aquatint"** — "aquatint" is an intaglio technique for producing tone; it appears only in the credit line but readers do read credits. SHOULD-FIX: add a brief explanatory note or parenthetical in the caption.

---

### Ch 3 — Géricault and the raft · Grade: NEEDS-GLOSS

Géricault introduced with dates ✓. The Méduse explained ✓. The Salon defined ✓.

**SHOULD-FIX**
- **Line ~238 — "friends called the place a charnel house"** — "charnel house" (a building where bones and corpses are stored) is not common vocabulary for a 15-year-old. One-word fix: "a charnel house (a room of bones and rotting flesh)" — or just "a slaughterhouse."

---

### Ch 4 — Delacroix, color and revolt · Grade: NEEDS-GLOSS

Delacroix introduced with dates ✓. Allegory defined ✓. Phrygian cap defined ✓. Orientalism defined ✓. Trois Glorieuses defined ✓. Sardanapalus legend explained ✓.

**SHOULD-FIX**
- **Line ~341 — "the figure the French call Marianne"** — named but not fully glossed. "Marianne (France's national allegorical figure, still her official symbol today, appearing on coins and government buildings)" takes one line and closes the "who?" gap.
- **Line ~293 — Lord Byron** — "the Romantic poet" is a sufficient gloss ✓. OK.

---

### Ch 5 — Turner, light eating the world · Grade: NEEDS-GLOSS

Turner introduced with dates ✓. Fighting Temeraire well-described.

**SHOULD-FIX**
- **Line ~382 — "a great warship that had fought at Trafalgar"** — Trafalgar undefined. "Trafalgar (the 1805 sea battle where Britain's Admiral Nelson defeated Napoleon's fleet off the Spanish coast, one of the most famous naval victories in British history)" is essential context for the painting's emotional weight. Without it, the ship is just an old ship.
- **Line ~425 — "the abolitionist Thomas Clarkson"** — "abolitionist" not defined for a reader who may not know the word. "the anti-slavery campaigner Thomas Clarkson" is clearer.
- **Line ~435 — "Brunel's new bridge at Maidenhead"** — Brunel unnamed beyond the surname. "Isambard Kingdom Brunel, the Victorian engineer who built the Great Western Railway" is a one-liner. Minor but SHOULD-FIX.

---

### Ch 6 — Constable's weather · Grade: NEEDS-GLOSS

Constable introduced with dates ✓. Hay wain defined ✓. Barbizon painters defined ✓. Impressionism defined ✓.

**SHOULD-FIX**
- **Line ~498 — "a thousand flecks of broken color"** — "broken color" is a technical term. "broken color (painting with separate dabs and flecks of paint rather than blending them smooth, so the eye mixes them at a distance)" is the gloss. This matters because it's the technique the Impressionists inherit — the narrative point depends on the reader understanding what it means.
- **Line ~609 (Afterlife ch 8, reusing Constable) — "When Monet painted"** — Claude Monet named without any gloss in the Afterlife chapter. "the French Impressionist painter Claude Monet" takes four words.

---

### Ch 7 — Friedrich and the silence · Grade: CLEAR

Friedrich introduced with dates ✓. Rückenfigur defined ✓ (German + English).

**SHOULD-FIX**
- **Line ~544 — "The writer Heinrich von Kleist"** — minimal gloss, but it's a passing quote attribution. Adding "the German Romantic playwright Heinrich von Kleist" makes the voice a real person rather than a floating name.

---

### Ch 8 — What feeling left behind · Grade: NEEDS-GLOSS

Barbizon painters cross-referenced ✓. Impressionism cross-referenced ✓. Baudelaire glossed ✓.

**SHOULD-FIX**
- **Line ~628 — "Wordsworth defining poetry"** — William Wordsworth introduced with no gloss. "the English Romantic poet William Wordsworth" takes five words.
- **Line ~629 — "Friedrich telling painters to shut the bodily eye"** — Friedrich already defined, fine ✓.

---

## SCAFFOLDING / AUTHOR REMNANTS

None found in reader-visible prose. All TypeScript `//` comments, the `const` declarations (NRO_ERA_SECTIONS, palette arrays, PD_* rights strings), and the pasted `// PASTE TARGET` / `// NOTE TO COORDINATOR` blocks are code-level and will not render to the reader.

No `[VERIFY]`, `[LEGEND]`, `TODO`, broken cross-references, or placeholder text found in any of the three files.

---

## SUMMARY

| Read | MUST-FIX | SHOULD-FIX | Grade |
|------|----------|------------|-------|
| Era — Lay of the Land | 1 (frieze) | 5 (names, academy, Salon) | NEEDS-GLOSS |
| Era — Reason | 1 (academy) | 0 | NEEDS-GLOSS |
| Era — Feeling | 0 | 2 (names) | NEEDS-GLOSS |
| Era — The Quarrel | 0 | 1 (Salon name) | CLEAR |
| Era — The Handoff | 0 | 1 (Impressionists) | NEEDS-GLOSS |
| Neo — Creed | 1 (friezelike) | 4 (Fuseli, fresco, Benjamin West, Royal Academy) | NEEDS-GLOSS |
| Neo — David draws the line | 0 | 1 (Prix de Rome) | CLEAR |
| Neo — The Revolution | 0 | 1 (Festival of Supreme Being) | NEEDS-GLOSS |
| Neo — Ingres | 0 | 2 (Byzantine, Royal Academy) | NEEDS-GLOSS |
| Neo — The rules | 0 | 0 | CLEAR |
| Ro — The revolt | 1 (Sturm und Drang) | 2 (the academy, frieze) | NEEDS-GLOSS |
| Ro — Goya | 1 (tapestry cartoons) | 2 (Velázquez/Las Meninas, aquatint) | NEEDS-GLOSS |
| Ro — Géricault | 0 | 1 (charnel house) | NEEDS-GLOSS |
| Ro — Delacroix | 0 | 1 (Marianne) | NEEDS-GLOSS |
| Ro — Turner | 0 | 3 (Trafalgar, abolitionist, Brunel) | NEEDS-GLOSS |
| Ro — Constable | 0 | 2 (broken color, Monet) | NEEDS-GLOSS |
| Ro — Friedrich | 0 | 1 (von Kleist) | CLEAR |
| Ro — Afterlife | 0 | 1 (Wordsworth) | NEEDS-GLOSS |

**Total MUST-FIX: 4 terms across 5 hits**
1. **"frieze" / "friezelike"** — first hit Era Read line 78; recurs in Neoclassicism Ch 1 line 107 and Romanticism Ch 1. Never defined anywhere. The core visual concept of Neoclassical staging. Highest priority.
2. **"the academy"** — first hit Era Read Ch 1 line 243. The institution that controlled the whole art world of this era; used 10+ times before ever being defined.
3. **"tapestry cartoons"** — Romanticism Ch 2 line 113. "Cartoon" actively misleads. Comprehension-blocker.
4. **"Sturm und Drang"** — Romanticism Ch 1 MeanwhileSheet. German phrase, zero gloss, zero handle.

**Total SHOULD-FIX: ~30 items** (mostly one-liner parentheticals; nothing requires restructuring).

No LOST chapters. The prose is strong and the core concepts are mostly well-handled. The MUST-FIX items are fixable with one-line inline glosses at first use.
