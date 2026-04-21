# Session Handoff — 2026-04-21

**Branch:** main
**Last commit:** `0363361` — Swap buttons above peek text: buttons first, faded summary preview below
**Auto-deploy:** working (Cloudflare Workers Builds)

---

## TL;DR

This session shipped 4 new TLs and a major reader UI overhaul. The navigator went from 5 to 9 live TLs, and the reader got serif prose, drop caps, summary accordions, solid-fill buttons, background-highlight link styles, chain navigation, and light-mode fixes.

---

## Shipped TLs (9 total, all live on stuffhappened.com)

| TL | Chain | Chapters | Words | Events | Event Links | Glossary | Cross-Links | Summaries | Maps |
|---|---|---|---|---|---|---|---|---|---|
| mesopotamia | Meso Succession | 13 | ~30k | 89 | 82 | 336 | 34 | 121 | 13 |
| indus-valley | Indian Subcontinent | 10 | ~25k | 56 | 66 | 226 | 37 | 69 | 10 |
| ancient-china | Chinese Dynasties | 8 | ~20k | 37 | 37 | 208 | 22 | 52 | 8 |
| ancient-nubia | Nubian Tradition | 8 | ~24k | 54 | 52 | 190 | 20 | 61 | 8 |
| elamite-civilization | Persian Tradition | 8 | ~24k | 51 | 49 | 206 | 24 | 63 | 8 |
| **early-dynastic-egypt** | Nile Valley | 8 | ~25k | 68 | ~55 | ~209 | ~20 | 59 | 8 |
| **early-andean-civilizations** | Andean | 8 | ~16k | 69 | ~61 | ~193 | ~18 | 56 | 8 |
| **persian-empire** | Persian Tradition | 10 | ~15.5k | 71 | 62 | 164 | 15 | 86 | 10 |
| **kingdom-of-kush** | Nubian Tradition | 8 | ~24k | 55 | 58 | 184 | 19 | 64 | 8 |

Bold = new this session.

---

## What shipped this session

### 1. Four new TL narratives + full pipeline

Each went through: v1 data pull → reference data expansion → narrative writing → 5-persona audit → audit fixes → parse registration → summaries → event/glossary/cross links → map prompts → map generation + verification → hasContent flip → push.

- **Before the Pharaohs** (early-dynastic-egypt): Green Sahara refugees through Khasekhemwy. 8 chapters, ~25k words. Cleanest map run (zero redos).
- **Early Andean** (early-andean-civilizations): Caral through Chavín to Paracas. 8 chapters, ~16k words. Zero map redos.
- **Persian Empire**: Cyrus through Arab conquest, three dynasties. 10 chapters, ~15.5k words. Central thesis: "absorb what you conquer." Zero map redos.
- **Kingdom of Kush**: Napatan rise through Aksumite conquest. 8 chapters, ~24k words. One map redo (Ch 6 pyramid count hallucination: 1000→200).

### 2. Backward cross-cultural passes

Two rounds of backward edits to existing TL narratives:
- **Round 1** (Egypt + Andean): 25 edits across 5 existing TLs. Key fixes: corrected "Andes had nothing until 1000 BCE" (Caral is 2900 BCE), updated "four cradles" to five, added Indus as second peaceful anomaly alongside Caral.
- **Round 2** (Persian + Kush): 22 edits across 4 existing TLs. Key fixes: Elam Ch 8 now cross-refs all 10 Persian Empire chapters, Ancient Nubia Ch 8 now points forward to Kingdom of Kush chapters instead of "a future book."

### 3. Reader UI overhaul

Major visual changes to the reader experience:

- **Serif prose** — Lora font for narrative chapters (Geist sans stays for UI/summaries)
- **Drop cap** — accent-colored 2.8em first letter on every chapter opening
- **Diamond separator** — accent ◆ glyph between first paragraph and body prose
- **Summary accordion** — collapsed chapters show Summary + Read Chapter buttons, with ~2 lines of faded peek text below; tapping Summary expands full bullet list
- **Solid-fill buttons** — all buttons use 20% accent background fill instead of outlined borders
- **Link style differentiation** — three distinct treatments: event links = colored underline, glossary = gray background highlight, cross-links = colored background highlight
- **Chain navigation** — prev/next TL links in sub-header above the h1 title
- **Header cleanup** — back link says "← Stuff Happened", home title enlarged to 18px
- **Title line** — h1 + accent dot + chapter count inline, subtitle below in italic
- **Navigator start position** — first TL at 25% from top (FLOW_TOP_PAD_FRAC = 0.25) + tap target fix
- **Light mode notch** — theme-color meta updates on dark/light toggle
- **Label renames** — "Predynastic & Early Dynastic Egypt" → "Before the Pharaohs", "Early Andean Civilizations" → "Early Andean"

### 4. Map prompt improvements

- Fixed all 4 new TL prompt files to paste CRITICAL RULES verbatim (Gemini only sees the prompt text, not README.md)
- Added "phone screen" to the known-bad-phrases list in README.md
- 34 maps generated across 4 TLs with only 1 redo needed (Kush Ch 6 pyramid count)

---

## Key learnings this session

### 1. Map prompt structure matters more than content
The first batch of Andean maps was generated from prompts that *referenced* CRITICAL RULES without pasting them. Gemini never saw the rules and produced maps without the edge-to-edge/header-bar treatment. The fix: every prompt must paste the full CRITICAL RULES block verbatim. "Apply the rules above" only works if the rules are literally above in the same prompt text.

### 2. Parallel agent pipelines work well
Running audit agents, link curation agents, and map prompt agents in parallel cut the per-TL pipeline time dramatically. The pattern: launch 4-5 background agents for independent tasks, fix issues as results come back, commit in batches.

### 3. Persian Empire is thin
At ~15.5k words across 10 chapters (~1550/ch), Persian Empire has the lowest word density of any shipped TL. The later chapters (4-10) are particularly compressed. The content is accurate and the structure is strong (8 STRONG + 2 GOOD from the story editor), but it would benefit from expansion in a future session — particularly Ch 4 (Long Afternoon), Ch 6 (Parthian Rise), and Ch 9 (Golden Age).

### 4. Summary accordion improves scanning
The old always-visible summary bullets made collapsed chapters look like prose pages. The new accordion (buttons → peek text → expandable bullets) creates a clear visual hierarchy: scanning mode (buttons), preview mode (peek), reading mode (full bullets), and narrative mode (serif prose). The three-state design tested well on phone.

---

## Next session priority order

### 1. Start more TLs

Three chains are ready for their next TL:
- **Old Kingdom Egypt** (follows Before the Pharaohs in the Nile Valley chain — Djoser, Imhotep, Khufu, the great pyramids)
- **Shang Dynasty** (follows Ancient China in the Chinese Dynasties chain — oracle bones, bronze vessels)
- **Vedic Period** (follows Indus Valley in the Indian Subcontinent chain)

### 2. Persian Empire expansion (optional)
Chapters 4-10 average ~1550 words vs. the ~3000 target. The Sassanid Golden Age chapter (Ch 9) especially deserves more space — Gundishapur, Khosrow I's reforms, the knowledge chain to Baghdad.

### 3. Image review on new TLs
`/review/{tlId}` for the 4 new TLs. Needs dev server running locally.

---

## File pointer quick-reference

- **New narrative files:** `narratives/early-dynastic-egypt.md`, `narratives/early-andean-civilizations.md`, `narratives/persian-empire.md`, `narratives/kingdom-of-kush.md`
- **New summary files:** same paths with `.summaries.json` suffix
- **New reference data:** `reference-data/early-dynastic-egypt.json`, `reference-data/early-andean-civilizations.json`, `reference-data/persian-empire.json`, `reference-data/kingdom-of-kush.json`
- **Map prompts:** `map-prompts/early-dynastic-egypt.md`, `map-prompts/early-andean-civilizations.md`, `map-prompts/persian-empire.md`, `map-prompts/kingdom-of-kush.md`
- **Map prompt rules (updated):** `map-prompts/README.md` (added known-bad-phrases section)
- **Map redo:** `map-prompts/redo/kingdom-of-kush.md` (Ch 6 pyramid count)
- **Audit reports:** `audits/` — 4 new audit files + 4 summary factchecks
- **Reader page (chain nav + subtitle):** `src/app/[civilizationId]/page.tsx`
- **Chapter accordion (summary toggle + serif + drop cap):** `src/components/chapter-accordion.tsx`
- **Link styles (glossary bg, cross-link bg):** `src/app/globals.css`
- **Serif font + drop cap CSS:** `src/app/globals.css` + `src/app/layout.tsx` (Lora import)
- **Navigator start position:** `src/components/tl-navigator/tl-flow.tsx` (FLOW_TOP_PAD_FRAC)
- **Dark mode toggle (theme-color fix):** `src/components/dark-mode-toggle.tsx`

---

## Context the next session needs

- **9 TLs are shipped and live** on `stuffhappened.com` with maps and offline download support.
- **Map folder naming** must match the tlId exactly (e.g. `public/maps/persian-empire/` not `public/maps/persia/`). Three times this session the folder was named wrong and had to be renamed.
- **Map prompts must paste CRITICAL RULES verbatim** — Gemini doesn't see README.md. Never reference rules without pasting them.
- **"phone screen" is banned** from map prompts — causes Gemini to render at phone dimensions.
- **Cloudflare auto-deploy is live** — push to main, CF builds within minutes.
- **Persian Empire is thin** at ~15.5k words (10 chapters). Expansion recommended before writing the next Persian chain TL.
- **Summary accordion** is the new UX — collapsed chapters show buttons + peek text, not full bullets.
- **Three link styles** are now visually distinct: event = colored underline, glossary = gray bg, cross-link = colored bg.
- **All buttons are solid fill** (20% accent) — no outlined/border-2 buttons remain.
- **Lora serif** for prose, Geist sans for UI — loaded via next/font/google in layout.tsx.
- **`content/` is gitignored**, use `git add -f` for curated link files.
- **Always provide "Changes made this pass"** numbered summary at the end.
