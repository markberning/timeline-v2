# Map Prompts for Gemini

One file per TL. Map generation is **automated** — `node --env-file=.env.local scripts/generate-maps.mjs {tlId}` parses this file, splits it on `## Chapter N` headers, prepends the per-TL preamble, and calls the Gemini image API (`gemini-3-pro-image-preview`) once per chapter. Output is written to `public/maps/{tlId}/chapter-{N}.png` where `{tlId}` is the full TL id (e.g. `ancient-nubia`, not `nubia`). The script is idempotent (skips chapters that already exist) and resumable with `--chapter N`. After auditing the thumbnails and regenerating any bad chapters, run `node scripts/optimize-maps.mjs` to convert the PNGs to `.webp` at quality 85 — **this deletes the PNG originals** (the `.webp` is the only retained copy). The reader loads `.webp` via the image probe in `src/components/chapter-accordion.tsx`.

This README documents the prompt **house style**. The CRITICAL RULES block and lean spec below are authoritative. As of 2026-05, `generate-maps.mjs` `preprocessPrompt()` also **auto-injects the global defect-prevention rules** (duplicate-label, no modern political geography, no compass words, no ornamental glyphs, frame, water) into *every* chapter prompt at generation time — so even older prompt files that lack the block get them on regen. New/redo prompts must still paste the CRITICAL RULES block, since per-prompt literal directives are followed more reliably than the global injection alone.

---

## CRITICAL house style — every prompt MUST open with these rules

The first run of China and Nubia maps produced hallucinations in 11 of 16 maps (duplicate labels, cataract numbering drift, garbled invented words, geographic orientation errors, dropped site names, region-label misplacement). The rewrites in [redo/](redo/) that fixed these all shared the same strict preamble, and it worked. From now on, **every new map prompt — including the first drafts for new TLs, not just redos — must open with the CRITICAL RULES block below**.

Paste this block at the top of every prompt, before the chapter-title directive, before the map requirements, before anything else:

```
**CRITICAL RULES — read carefully before drawing:**

1. **Label cleanly.** Spell every label correctly. A long river MAY be labeled more than once along its course (normal cartography) as long as each instance is correct and the repeats are well separated — not touching, stacked, or adjacent. Do NOT duplicate a city/site/region label, do NOT place two copies of a label next to each other, and do NOT repeat an annotation/caption.
2. **Spell every label exactly as written in this prompt.** Do not invent words. Do not abbreviate. Do not generate any word that is not in the prompt text. (On prior runs Gemini invented words like "cononniat", "reachit", and "Kushi" — do not do this.)
3. **Include the exact site name on every label.** The site name is the word or phrase before the first parenthesis or em-dash. Never drop a site name. If this prompt says "Aniba / Miam (the Viceroy's capital)", the rendered label must begin with "Aniba / Miam" — not just "The Viceroy's capital".
4. **North is at the top of the map. East is to the right.** Place every location according to its real-world geography in this orientation. Do not rotate or tilt the map.
5. **All water is light blue.** Seas, bays, lakes, and rivers are rendered in light blue. Do not render water as tan, cream, or white. Deserts are pale yellow. Land is beige/tan. River floodplains are soft green.
6. **Do not invent any labels, annotations, sites, or features that are not in this prompt.** If it is not in the prompt, do not draw it.
7. **Geography correct & readable.** Place features in their correct real-world locations. Faint modern country/region outlines or labels as orientation aids are *welcome* (they help the reader place the location). Period and modern reference geography are both fine. Real geography defects = invented/misspelled place names, wrong locations, or labels contradicting the prompt — NOT the presence of reference borders/outlines.
8. **No compass words as labels.** Never print the words North, South, East, West (or the letters N/S/E/W) anywhere on the image. Orientation is north-up by convention only; it must not appear as rendered text.
9. **No ornamental glyphs.** No decorative star, four-point sparkle, twinkle, compass-rose flourish, or corner ornament. A stray sparkle has repeatedly appeared in the bottom-right corner on prior runs — do not draw it.

---

The chapter title "Chapter N: <Title>" should appear at the top of the map image, centered, in a clean serif font, inside a header bar that spans the full width of the image. The header bar is the ONLY bordered element of the image. Draw NO border, outline, frame, rectangle, or hairline anywhere else — the map and its water must bleed off all four outer edges (top beside the title bar, left, right, bottom). Never enclose the map in a rectangle. Render the chapter title **exactly once**, only inside that single full-width header bar — never a second title, a floating title box, or a separately boxed chapter number. (Frame violations were the most common failure in the 2026-05 audit — ~50% on the first re-canary run; the re-canary also showed a recurring duplicate/boxed-title failure.)
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

## LEAN SPECIFICATION — keep prompts small to keep maps clean

The April 2026 11-TL batch review found a strong correlation between **prompt density and failure rate**. Maps with 7+ sites and long parenthetical descriptions on every site failed routinely: duplicated labels, hallucinated words inside parentheticals (`Eastancia`, `cunitural pueblors`, `repurgetorix`, `Volgland`, `Stepids`, `starvoys`), truncated mid-sentence callouts, garbled BCE → `℡` ligatures. The denser the map, the more "filler" Gemini invented.

**The fix is to ask for less.** Every word inside a parenthetical is a chance for the model to garble. Every duplicate site is a chance for the model to label one of them wrong. Move the descriptive content into the chapter prose; let the map do *spatial orientation*.

**Lean specification — apply to every new chapter prompt and every redo:**

1. **4–5 sites per map, maximum.** Pick the sites the chapter actually centers on. Drop any site mentioned only in passing — the reader has the prose for those. Dense maps with 7+ named sites are the #1 source of label garbling.
2. **Site labels are name-only.** No long parentheticals on site dots.
   - Good: `Pueblo Bonito`
   - Bad: `Pueblo Bonito (850–1130 CE — 650+ rooms, 4–5 stories, largest building in North America for 1,000 years)`
   - Every garbled word so far has been *inside* a parenthetical. Strip the parentheticals from site labels and the whole class of failures goes away.
3. **One annotation per map, maximum.** Pick the single most important spatial story (the migration, the route, the trade flow). Drop any second annotation. If the map has both a migration arrow AND a separate "ecological collapse" callout, choose one.
4. **Region labels: orientation only.** Just enough for the reader to know which way is north and what part of the world this is. Typically 3–5 region labels (one or two seas/oceans, the main river, the surrounding land mass). Drop region labels with parenthetical sub-text.
5. **Chapter title bar is the only required text element.** Everything else is optional.

**A clean prompt looks like:**

```
Map of {region} for Chapter N.

5 sites, name-only labels:
- Site A — at {position}
- Site B — at {position}
- Site C — at {position}
- Site D — at {position}
- Site E — at {position}

3 region labels (gray, orientation only):
- {Sea or ocean}
- {Main river}
- {Surrounding region}

One annotation: {single short caption attached to a single arrow or shaded zone}.

Title at top: "Chapter N: <Title>"
```

That's it. If you find yourself writing a fourth annotation or an eighth site, cut it. The chapter narrative carries the detail; the map carries the geography.

---

## Per-TL files

One `{tlId}.md` per TL in this directory — the directory listing is the index (a hand-maintained list here drifted out of date and was removed). Chapter count per file = the number of `## Chapter N` headers; the generator derives it automatically. A few TLs intentionally skip map-less chapters (reflection/thematic chapters with no geography) — those are simply absent from that TL's prompt file.

## Redos

First-run Gemini output had hallucinations on some maps — see [redo/](redo/) for tightened rewrites of the problem prompts. The earliest redos (Mesopotamia / Nubia / China / Elam / Kush) were narrow surgical rewrites; the **April 2026 11-TL batch** review then produced a much larger redo set covering ~40 chapters across 11 TLs. **As of 2026-04-28, the entire redo backlog is shipped** — every chapter listed in [redo/README.md](redo/README.md) has been replaced with a clean lean-spec render.

The redos are the live reference for "how a prompt should look when it actually has to work." When drafting new TL prompts, copy the redo style, not the first-run style.

If a chapter still hallucinates even at the lean tier (especially when the annotation is long or contains multiple clauses), apply the **split-annotation v2** pattern documented in [redo/README.md](redo/README.md) — break the annotation into two short separate boxes and cite prior gibberish words by name. This pattern was developed for Teotihuacan ch 1 and ch 7 in [redo/teotihuacan-ch1-ch7-v2.md](redo/teotihuacan-ch1-ch7-v2.md) after the lean spec alone wasn't enough.
