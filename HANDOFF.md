# Session Handoff — 2026-04-22

**Branch:** main
**Last commit:** `8cd6ac1` — Shang audit fixes
**Total commits this session:** 97
**Auto-deploy:** Cloudflare Workers auto-deploy from main. Manual fallback: `npx wrangler deploy`.

## Session Summary
Massive content session: **7 new TLs shipped** (#10-16), bringing the total to **16 live TLs**. Also fixed a UI bug (duplicate date display) and a label alignment issue.

## TLs Shipped This Session

| # | TL ID | Chain | Words | Events | Maps |
|---|-------|-------|-------|--------|------|
| 10 | minoan-civilization | Greco-Roman #1 | 17.5k | 66 | prompts ready |
| 11 | old-kingdom-egypt | Nile Valley #2 | 17.7k | 67 | prompts ready |
| 12 | ancient-korea | Korean Civ #1 | 16k | 65 | prompts ready |
| 13 | assyrian-empire | Meso Succession #2 | 16.4k | 67 | prompts ready |
| 14 | hittite-empire | Anatolian #1 | 18.5k | 70 | prompts ready |
| 15 | mycenaean-civilization | Greco-Roman #2 | 17.4k | 67 | prompts ready |
| 16 | shang-dynasty | Chinese Dynasties #2 | 17.4k | 69 | prompts ready |

Each TL went through the full pipeline: v1 data copy → expand to 65-70 events → label alignment check → 8-chapter narrative → 4-persona audit → must-fix application → event/glossary/cross-civ link curation → summary bullets → chapter map prompts → parse/enrich → ship toggle → push.

## UI Fixes
- **Duplicate date display** removed from chapter headers (was showing years twice — once in dateRange italic below title, once calculated on the right side). Fixed in `chapter-accordion.tsx`.
- **Label mismatches** fixed: Old Kingdom Egypt ("Age of the Pyramids" → "Old Kingdom Egypt"), Minoan ("Minoan Civilization" → "Minoan"). Re-parsed to update content JSONs.

## Pipeline Improvements
- **CLAUDE.md step 0** now mandates 60-70 event target density AND label alignment check between ref data and navigator-tls.ts.

## What Still Needs Doing

### Immediate
1. **Generate 56 chapter maps** — prompts ready in `map-prompts/` for all 7 new TLs. Gemini thinking mode, save PNGs, run WebP optimizer.
2. **Backward cross-cultural pass** — Persona E audit reports have backward findings for all 7 new TLs (cross-refs to add to the 9 older TLs). Terse parenthetical insertions only.

### Next TLs
Natural chain progressions: ancient-greece, zhou-dynasty, new-kingdom-egypt, kingdom-of-aksum, vedic-period, islamic-golden-age, safavid-persia.

## All 16 Shipped TLs
1. mesopotamia (13 ch, maps ✅)
2. indus-valley (10 ch, maps ✅)
3. ancient-china (8 ch, maps ✅)
4. ancient-nubia (8 ch, maps ✅)
5. elamite-civilization (8 ch, maps ✅)
6. early-dynastic-egypt (8 ch, maps ✅)
7. early-andean-civilizations (8 ch, maps ✅)
8. persian-empire (10 ch, maps ✅)
9. kingdom-of-kush (8 ch, maps ✅)
10. minoan-civilization (8 ch, maps pending)
11. old-kingdom-egypt (8 ch, maps pending)
12. ancient-korea (8 ch, maps pending)
13. assyrian-empire (8 ch, maps pending)
14. hittite-empire (8 ch, maps pending)
15. mycenaean-civilization (8 ch, maps pending)
16. shang-dynasty (8 ch, maps pending)
