# Session Handoff — 2026-04-22c

**Branch:** main
**Last commit:** `e87094a` — Olmec cross-link matchText fix
**Auto-deploy:** Cloudflare Workers auto-deploy from main. Manual fallback: `npx wrangler deploy`.

## Session Summary
Two new TLs shipped in parallel: New Kingdom Egypt (Nile Valley chain #3) and Olmec (Mesoamerican chain #1). Full pipeline for both: narratives, summaries, 5-persona audits, audit fixes, event reconciliation (46→72 NKE, 37→68 Olmec), curated event/glossary/cross-links, map prompts. Total shipped TLs: 18.

## What Was Built

### New Kingdom Egypt (`new-kingdom-egypt`)
- **9 chapters, ~17.2k words** covering Middle Kingdom through Bronze Age Collapse (-2055 to -1069 BCE)
- Central thesis: three reinventions (literary renaissance, chariot empire, monumental superpower), each more ambitious and more brittle
- 72 reference events, 68 event links, 196 glossary links, 20 cross-links
- 9 summary chapters with subtitles
- 5-persona audit: all 9 chapters STRONG. Must-fix items applied (Paracas anachronism, ma'at definition, Manetho/Kassites intros, Kadesh army numbers qualified)
- Navigator startYear updated from -1550 to -2055 (covers Middle Kingdom)
- Map prompts for all 9 chapters (maps pending Gemini generation)

### Olmec (`olmec-civilization`)
- **8 chapters, ~14.5k words** covering Gulf Coast Olmec from 1862 rediscovery through Epi-Olmec legacy (-1600 to -100 BCE)
- Central thesis: Mesoamerica's forgotten founders — colossal heads, rubber, calendar, writing, zero, ballgame, and the mother culture debate
- 68 reference events, 63 event links, 180 glossary links, 13 cross-links
- 8 summary chapters with subtitles
- 5-persona audit: 7/8 STRONG, 1 GOOD. Must-fix items applied (Tuxtla Statuette 162 BCE→CE, Indus drainage date corrected, Ur→Babylon population, scholar intros, Goodyear date, Spanish conquest dated)
- First TL in Mesoamerican chain (Olmec → Maya → Aztec)
- Map prompts for all 8 chapters with new Mesoamerica orientation preamble

## What Still Needs Doing

### Immediate
1. **Generate 17 chapter maps** — prompts ready in `map-prompts/` for both new TLs (9 NKE + 8 Olmec). Gemini thinking mode, save PNGs, run WebP optimizer.
2. **Generate maps for 7 prior TLs** — 56 maps still pending from last session (minoan, old-kingdom-egypt, ancient-korea, assyrian-empire, hittite-empire, mycenaean, shang-dynasty).
3. **Backward cross-cultural pass** — Persona E audit reports have backward findings for both new TLs (12 per TL). Surgical insertions into reference TL narratives.

### Next TLs
Natural chain progressions: ancient-greece, zhou-dynasty, late-egypt, kingdom-of-aksum, vedic-period, islamic-golden-age, maya-civilization, safavid-persia.

## All 18 Shipped TLs
1. mesopotamia (13 ch, maps done)
2. indus-valley (10 ch, maps done)
3. ancient-china (8 ch, maps done)
4. ancient-nubia (8 ch, maps done)
5. elamite-civilization (8 ch, maps done)
6. early-dynastic-egypt (8 ch, maps done)
7. early-andean-civilizations (8 ch, maps done)
8. persian-empire (10 ch, maps done)
9. kingdom-of-kush (8 ch, maps done)
10. minoan-civilization (8 ch, maps pending)
11. old-kingdom-egypt (8 ch, maps pending)
12. ancient-korea (8 ch, maps pending)
13. assyrian-empire (8 ch, maps pending)
14. hittite-empire (8 ch, maps pending)
15. mycenaean-civilization (8 ch, maps pending)
16. shang-dynasty (8 ch, maps pending)
17. **new-kingdom-egypt (9 ch, maps pending)** ← NEW
18. **olmec-civilization (8 ch, maps pending)** ← NEW

## Key Files Changed This Session
- `narratives/new-kingdom-egypt.md` — 9-chapter narrative
- `narratives/new-kingdom-egypt.summaries.json` — summaries with subtitles
- `narratives/olmec-civilization.md` — 8-chapter narrative
- `narratives/olmec-civilization.summaries.json` — summaries with subtitles
- `reference-data/new-kingdom-egypt.json` — expanded to 72 events
- `reference-data/olmec-civilization.json` — expanded to 68 events
- `content/.event-links-new-kingdom-egypt.json` — 68 curated event links
- `content/.glossary-links-new-kingdom-egypt.json` — 196 glossary links
- `content/.cross-links-new-kingdom-egypt.json` — 20 cross-links
- `content/.event-links-olmec-civilization.json` — 63 curated event links
- `content/.glossary-links-olmec-civilization.json` — 180 glossary links
- `content/.cross-links-olmec-civilization.json` — 13 cross-links
- `map-prompts/new-kingdom-egypt.md` — 9 chapter map prompts
- `map-prompts/olmec-civilization.md` — 8 chapter map prompts
- `scripts/parse-narratives.ts` — both TLs registered in NARRATIVE_FILES
- `src/lib/navigator-tls.ts` — hasContent: true, NKE startYear: -2055
- `audits/new-kingdom-egypt.audit.md` — 5-persona audit report
- `audits/olmec-civilization.audit.md` — 5-persona audit report
