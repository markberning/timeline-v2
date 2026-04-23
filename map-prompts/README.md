# Map Prompts for Gemini

One file per TL. Copy each prompt one at a time into Gemini. Save output as `public/maps/{civilization}/chapter-{N}.png` where `{civilization}` is the full TL id (e.g. `ancient-nubia`, not `nubia`). After all chapters for a TL are generated, run the non-destructive WebP conversion (keep the PNG originals) to produce `.webp` copies alongside the PNGs at quality 85. The reader loads `.webp` via the image probe in `src/components/chapter-accordion.tsx`.

---

## CRITICAL house style — every prompt MUST open with these rules

The first run of China and Nubia maps produced hallucinations in 11 of 16 maps (duplicate labels, cataract numbering drift, garbled invented words, geographic orientation errors, dropped site names, region-label misplacement). The rewrites in [redo/](redo/) that fixed these all shared the same strict preamble, and it worked. From now on, **every new map prompt — including the first drafts for new TLs, not just redos — must open with the CRITICAL RULES block below**.

Paste this block at the top of every prompt, before the chapter-title directive, before the map requirements, before anything else:

```
**CRITICAL RULES — read carefully before drawing:**

1. **Draw each label exactly once.** Do not repeat any city name, region name, river name, or annotation anywhere on the map. If you see an opportunity to put the same label in two places, choose only one.
2. **Spell every label exactly as written in this prompt.** Do not invent words. Do not abbreviate. Do not generate any word that is not in the prompt text. (On prior runs Gemini invented words like "cononniat", "reachit", and "Kushi" — do not do this.)
3. **Include the exact site name on every label.** The site name is the word or phrase before the first parenthesis or em-dash. Never drop a site name. If this prompt says "Aniba / Miam (the Viceroy's capital)", the rendered label must begin with "Aniba / Miam" — not just "The Viceroy's capital".
4. **North is at the top of the map. East is to the right.** Place every location according to its real-world geography in this orientation. Do not rotate or tilt the map.
5. **All water is light blue.** Seas, bays, lakes, and rivers are rendered in light blue. Do not render water as tan, cream, or white. Deserts are pale yellow. Land is beige/tan. River floodplains are soft green.
6. **Do not invent any labels, annotations, sites, or features that are not in this prompt.** If it is not in the prompt, do not draw it.

---

The chapter title "Chapter N: <Title>" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. The left, right, and bottom edges of the image have NO border or frame — the map geography extends fully to all three of those edges, edge-to-edge. Do not draw a rectangular frame around the map on the left, right, or bottom sides.
```

**Swap in the chapter number and title on the last line.** Do not paraphrase the rules block — use the exact wording above, because Gemini tends to follow literal directives more reliably than paraphrased ones.

## Per-TL orientation preambles (when directional semantics matter)

Some TLs have recurring orientation hazards that Gemini keeps getting wrong. When working on those TLs, paste the relevant orientation preamble **after** the CRITICAL RULES block and before the chapter-title directive.

### Nubia orientation preamble

Use for every `ancient-nubia` prompt and for the forthcoming `kingdom-of-kush` / `aksum` prompts:

```
**NUBIA ORIENTATION RULES:**

1. North is at the top of the map. South is at the bottom. The Mediterranean Sea is at the top. Khartoum and the Sixth Cataract are near the bottom.
2. The Nile flows from south (bottom) to north (top). The river is drawn as a roughly vertical line with a slight eastward lean in the middle. It does NOT run east-to-west and is NOT diagonal.
3. Memphis is far north (near the Mediterranean delta, at the top of the map). Aswan is ~400 miles south of Memphis (roughly a third of the way down the map). Memphis is NEVER at the same latitude as Aswan. Memphis is NEVER west of Aswan.
4. The cataracts are numbered 1–6 from north (downstream) to south (upstream). The First Cataract is at Aswan. The Third Cataract is at Kerma. The Sixth Cataract is near Khartoum. Label each cataract in word-form only: "First Cataract" through "Sixth Cataract". Never use "North Cataract", "Cataract 1", or "1st Cataract".
5. Lower Nubia is the NORTHERN half of Nubia (between the First and Second Cataracts, closer to Egypt, downstream). Lower Nubia appears in the MIDDLE of the map.
6. Upper Nubia is the SOUTHERN half of Nubia (between the Second and Sixth Cataracts, further from Egypt, upstream). Upper Nubia appears LOWER on the map than Lower Nubia. "Upper" means "upstream / further from the Mediterranean", not "higher on a map".
7. Wawat is the Egyptian name for LOWER Nubia. Yam is the Egyptian name for UPPER Nubia. Never swap these.
8. Kerma is at the Third Cataract, in Upper Nubia. Kerma and the Third Cataract are the same geographic point — do not draw them as two separate dots.
```

### Mesopotamia orientation preamble

Use when drawing any multi-cataract / multi-city Mesopotamia map where Gemini has historically confused the Sumer / Akkad / Babylonia / Assyria directional stack:

```
**MESOPOTAMIA ORIENTATION RULES:**

1. North is at the top of the map. The Persian Gulf is at the bottom-southeast. Anatolia and the Taurus Mountains are at the top.
2. The Tigris (east) and Euphrates (west) rivers both flow from north (top) to south (bottom), merging near the Persian Gulf.
3. Sumer is the SOUTHERN Mesopotamian zone, near the Persian Gulf, containing Ur, Uruk, Eridu, Lagash, Umma, Nippur.
4. Akkad / Babylonia is the CENTRAL zone, containing Babylon, Kish, Sippar, Akkad.
5. Assyria is the NORTHERN zone, containing Assur, Nineveh, Nimrud/Kalhu on the upper Tigris.
6. Elam is EAST of the Tigris, across the Zagros, containing Susa (lowland) and Anshan (highland).
```

### Elam orientation preamble

Use for every `elamite-civilization` prompt and the forthcoming Persian / Achaemenid prompts:

```
**ELAM ORIENTATION RULES:**

1. North is at the top. East is to the right.
2. Elam has TWO halves. Susa is in the lowland plain of Khuzestan, east of the Tigris. Anshan (modern Tall-i Malyan) is in the highlands of Fars, ~160 miles EAST of Susa, across the Zagros. Never draw Susa and Anshan as the same point.
3. The Zagros Mountains run NORTHWEST-to-SOUTHEAST as a long parallel ridge system separating Mesopotamia (to the west) from the Iranian plateau (to the east).
4. The Karun and Karkheh rivers flow from the Zagros west and south into the Persian Gulf — they do NOT join the Tigris or Euphrates.
```

### China orientation preamble

Use for every `ancient-china` prompt:

```
**CHINA ORIENTATION RULES:**

1. North is at the top. East is to the right.
2. The Yellow River (Huang He) is the MAIN northern river, flowing west-to-east with a large loop around the Ordos Desert. The Yangtze (Chang Jiang) is the MAIN southern river, flowing west-to-east further south.
3. The Loess Plateau is in the NORTH-CENTRAL region (Shaanxi, Shanxi, northern Henan). It is NEVER east of central Henan and NEVER south of the Qinling Mountains.
4. The Yi River and Luo River are small tributaries that join the Yellow River from the south near modern Luoyang. They are NOT the Yellow River itself — they are thin lines branching up from the south, not the main horizontal river line.
```

---

## Per-chapter SPECIFIC REMINDERS

When a particular chapter has a known failure mode from a prior run (e.g., "Hongshanhou was drawn twice" or "Memphis was placed west of Aswan"), add a short **SPECIFIC REMINDERS** block after the orientation preamble naming the exact failure:

```
**SPECIFIC REMINDERS for this chapter:**
- Kerma appears EXACTLY ONCE on this map. Previously Gemini drew it twice.
- Tombos is a DIFFERENT site from Kerma and appears once.
- Write "Third Cataract" as the literal string "Third Cataract". Do not invent variants.
```

This is what the redo files in [redo/](redo/) use, and it's the only reliable way to stop Gemini from repeating a specific failure it made on the prior run.

---

## Known bad phrases — never include these in prompts

- **"phone screen"** — causes Gemini to render the map at phone-screen dimensions (tiny, cramped labels, wrong aspect ratio). The maps are displayed on phones but should be generated at full resolution. Use "Landscape orientation, match series style." instead.
- **"designed to be viewed on a phone screen"** — same problem, longer form.

---

## Per-TL files

- [mesopotamia.md](mesopotamia.md) — 13 chapters (1–13)
- [indus-valley.md](indus-valley.md) — 8 chapters (2, 4–10; Ch 1 and Ch 3 not drafted)
- [ancient-nubia.md](ancient-nubia.md) — 8 chapters (1–8, first-run; see redo/ for rewrites)
- [ancient-china.md](ancient-china.md) — 8 chapters (1–8, first-run; see redo/ for Ch 4/7/8 rewrites)
- [elamite-civilization.md](elamite-civilization.md) — 8 chapters (1–8)
- [early-dynastic-egypt.md](early-dynastic-egypt.md) — 8 chapters (1–8)
- [kingdom-of-kush.md](kingdom-of-kush.md) — 8 chapters (1–8)
- [persian-empire.md](persian-empire.md) — 10 chapters (1–10)
- [early-andean-civilizations.md](early-andean-civilizations.md) — 8 chapters (1–8)
- [old-kingdom-egypt.md](old-kingdom-egypt.md) — 8 chapters (1–8)
- [minoan-civilization.md](minoan-civilization.md) — 8 chapters (1–8)
- [ancient-korea.md](ancient-korea.md) — 8 chapters (1–8)
- [assyrian-empire.md](assyrian-empire.md) — 8 chapters (1–8)
- [hittite-empire.md](hittite-empire.md) — 8 chapters (1–8)
- [mycenaean-civilization.md](mycenaean-civilization.md) — 8 chapters (1–8)
- [shang-dynasty.md](shang-dynasty.md) — 8 chapters (1–8)
- [olmec-civilization.md](olmec-civilization.md) — 8 chapters (1–8)
- [new-kingdom-egypt.md](new-kingdom-egypt.md) — 9 chapters (1–9)
- [vedic-period.md](vedic-period.md) — 7 chapters (1–3, 5–8; Ch 4 skipped — thematic, no geography)
- [zhou-dynasty.md](zhou-dynasty.md) — 9 chapters (1–9)

## Redos

First-run Gemini output had hallucinations on some maps — see [redo/](redo/) for tightened rewrites of the problem prompts. Specifically:
- [redo/ancient-china.md](redo/ancient-china.md) — Ch 4, 7, 8 (the three China maps with real errors)
- [redo/ancient-nubia.md](redo/ancient-nubia.md) — Ch 1–8 (all eight Nubia maps need redos)
- [redo/elamite-civilization.md](redo/elamite-civilization.md) — Ch 1, 3, 7, 8 (Ch 7 is priority-1; others are minor)
- [redo/kingdom-of-kush.md](redo/kingdom-of-kush.md) — Ch 6 (pyramid count hallucination)

The redos are the live reference for "how a prompt should look when it actually has to work." When drafting new TL prompts, copy the redo style, not the first-run style.
