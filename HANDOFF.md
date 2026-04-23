# Session Handoff — 2026-04-23b

**Branch:** main
**Last commit:** `b8f9758` — Civ list dark mode brightness
**Auto-deploy:** Cloudflare Workers auto-deploy from main.

## Session Summary
Shipped 2 new TLs (Qin Dynasty, Maurya Empire) with full pipeline. Generated and installed chapter maps for 10 TLs (Minoan, Old Kingdom Egypt, Ancient Korea, New Kingdom Egypt, Assyrian, Hittite, Mycenaean, Olmec, Shang, Vedic, Zhou). Added 10 new civ icons. Home page UI polish (icon sizing, shuffling, dark mode brightness). 24 commits. Total: 22 shipped TLs, 20 with maps.

## What Was Built

### New Narratives (full pipeline)
- **Qin Dynasty** — 8 ch, ~16k words, 66 events, 60 event links, 173 glossary links, 17 cross-links. Maps pending Gemini generation.
- **Maurya Empire** — 8 ch, ~16k words, 69 events, 60 event links, 195 glossary links, 17 cross-links. Maps pending Gemini generation.

### Maps Generated + Installed (10 TLs, 81 maps)
- Minoan (8), Old Kingdom Egypt (8), Ancient Korea (8), New Kingdom Egypt (9), Assyrian Empire (8), Hittite Empire (8), Mycenaean (8), Olmec (8), Shang Dynasty (8), Vedic Period (7), Zhou Dynasty (9)
- All audited for accuracy — zero hallucinations, zero factual errors across spot-checked maps
- Folder naming fixes: Assyria→assyrian-empire, hittities→hittite-empire, mycenaean→mycenaean-civilization, olmec→olmec-civilization, shang→shang-dynasty, vedic→vedic-period, zhou→zhou-dynasty, new-egypt→new-kingdom-egypt
- Old PNG originals cleaned up from 6 legacy TLs (58 PNGs removed, WebPs retained)

### Home Page UI
- **Civ icons**: 11→21 icons (added triskelion, horseman, menorah, quetzalcoatl, olmec-head, angkor, junk, mosque, dhow, pagoda)
- **Mobile**: shows 7 random icons; tap reshuffles from full 21
- **Desktop**: repeats all 21 to fill row width
- **Dark mode**: icon opacity 60%→80%, chain label 60%→85%, subtitle 55%→70%, dates 35%→50%

## What Still Needs Doing

### Immediate
1. **Generate maps for Qin + Maurya** — prompts ready, 15 maps total (7 Qin + 8 Maurya)
2. **Backward cross-cultural pass** — Persona E findings accumulated across all new TLs

### Next TLs
Natural chain progressions: han-dynasty, post-maurya-kingdoms, ancient-greece, late-egypt, kingdom-of-aksum, islamic-golden-age, maya-civilization, safavid-persia.

## All 22 Shipped TLs

| # | TL | Ch | Maps |
|---|----|----|------|
| 1 | mesopotamia | 13 | 13 |
| 2 | indus-valley | 10 | 10 |
| 3 | ancient-china | 8 | 8 |
| 4 | ancient-nubia | 8 | 8 |
| 5 | elamite-civilization | 8 | 8 |
| 6 | early-dynastic-egypt | 8 | 8 |
| 7 | early-andean-civilizations | 8 | 8 |
| 8 | persian-empire | 10 | 10 |
| 9 | kingdom-of-kush | 8 | 8 |
| 10 | minoan-civilization | 8 | 8 |
| 11 | old-kingdom-egypt | 8 | 8 |
| 12 | ancient-korea | 8 | 8 |
| 13 | assyrian-empire | 8 | 8 |
| 14 | hittite-empire | 8 | 8 |
| 15 | mycenaean-civilization | 8 | 8 |
| 16 | shang-dynasty | 8 | 8 |
| 17 | new-kingdom-egypt | 9 | 9 |
| 18 | olmec-civilization | 8 | 8 |
| 19 | vedic-period | 8 | 7 |
| 20 | zhou-dynasty | 9 | 9 |
| 21 | qin-dynasty | 8 | **pending** |
| 22 | maurya-empire | 8 | **pending** |
| | **Total** | **185** | **178** |
