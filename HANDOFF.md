# Session Handoff — 2026-04-15

**Branch:** main
**Last commit:** `92d65be` — Ship all 15 map redos + finish Elam map set
**Auto-deploy:** ✅ working (Cloudflare Workers Builds, git integration live)

---

## TL;DR

**Elamite Civilization is now shipped on prod** at `stuffhappened.com/elamite-civilization`. It's the 5th shipped TL and the first in the `persian-tradition` chain. Every single map across all 5 shipped TLs (China, Nubia, Elam + the already-live Meso and Indus) now has a clean PNG + WebP committed — **47 chapters of maps, all audited, all clean**. The session also produced a strict-rules Gemini prompt workflow that empirically went from 5/8 clean on first-run Ancient China to 15/15 clean on second-run redos, and that workflow is now codified as the house style in `map-prompts/README.md`.

**There are no queued must-do meta-tasks this time** — the handoff from the previous session (summary-writing spec, map-prompts folder split) was fully completed. The next session can pick from the fresh roadmap items without unblocking anything first.

---

## Shipped TLs

| TL | chapters | events | event-links | glossary | cross-links fwd | cross-links back | summaries | maps | nav | shipped |
|---|---|---|---|---|---|---|---|---|---|---|
| mesopotamia | 13 | 89 | 82 | 336 | 11 | 30 | ✅ 121 | ✅ 13 | ✅ | ✅ |
| indus-valley | 10 | 56 | 66 | 226 | 28 | 35 | ✅ 69 | ✅ 10 | ✅ | ✅ |
| ancient-china | 8 | 37 | 37 | 208 | 20 | — | ✅ 52 | ✅ 8 (Ch 4/7/8 redone) | ✅ | ✅ |
| ancient-nubia | 8 | 54 | 52 | 190 | 18 | 11 | ✅ 61 (added this session) | ✅ 8 (all 8 redone) | ✅ | ✅ |
| elamite-civilization | 8 | 51 | 49 | 206 | 22 | 16 | ✅ 63 (added this session) | ✅ 8 (Ch 1/3/7/8 redone) | ✅ | ✅ |

**Totals:** 47 chapters of narrative, 287 reference events, 286 curated event links, 1,166 glossary links, 99 forward cross-links + 92 backward cross-links, 366 summary bullets, 47 chapter maps.

---

## What shipped this session (9 commits)

In order:

1. **`df80b78`** — Map prompts split into per-TL folder (`map-prompts/{mesopotamia,indus-valley,ancient-nubia,ancient-china}.md`) with a `README.md` carrying the house-style note. Ancient China Ch 3–8 prompts got the title-directive suffix they were missing.
2. **`500d14c`** — `WRITING-RULES.md` summary spec (expanded the one-line rule at :310 into a full section: file format, 6–10 bullets density, 25–40 words length, voice rules, content rules, matchText alignment, dateRange format, process, exemplar bullets). `narratives/ancient-nubia.summaries.json` with 61 bullets across 8 chapters, 107 auto-injected links.
3. **`8ba998b`** — Elam forward pipeline: 49 event links, 206 glossary links, 22 forward cross-links, 63 summary bullets, 8 chapter map prompts. Flipped `hasContent: true` on the navigator entry.
4. **`bff71b5`** — Ancient China 8 chapter maps (user-generated, PNG + WebP). Meso Ch 7/Ch 8 audit fixes: Hammurabi-as-Elam-client rewrite, stele looting date correction, Shutruk-Nahhunte expansion. First 2 Elam PNGs moved from the wrong `public/maps/elam/` folder to the correct `public/maps/elamite-civilization/`.
5. **`fb0ba26`** — Created `map-prompts/redo/` with hallucination-proof rewrites for the 11 maps that had factual errors. Each redo opens with a CRITICAL RULES block and, for Nubia, a NUBIA ORIENTATION RULES block, plus per-chapter SPECIFIC REMINDERS naming the exact failure from the prior run.
6. **`12af551`** — Promoted the redo-style strict rules from `map-prompts/redo/` up into `map-prompts/README.md` as the mandatory house style for every future prompt. Added Nubia / Mesopotamia / Elam / China orientation preambles to the README. Retrofit `map-prompts/elamite-civilization.md` with the GLOBAL RULES + ELAM ORIENTATION RULES preamble.
7. **`cceeba0`** — Added `map-prompts/redo/elamite-civilization.md` with Elam Ch 1/3/7/8 redo prompts after the Elam audit found "Brotion" (should be Babylon) and "Tiaati-Tela" (should be Til-Tuba) garbled text hallucinations in Ch 7.
8. **`8a397de`** — Added the edge-to-edge style rule (top header bar only, no left/right/bottom border) to the house style and to the 8 remaining unrun redo prompts (Nubia 5–8, Elam 1/3/7/8). Known loose end: the first 7 redos (China 4/7/8, Nubia 1–4) were already generated under the old bordered style — they're functional but visually inconsistent with the rest.
9. **`92d65be`** — Swapped all 15 passing redos into place: moved PNGs from `public/maps/redos/` into their target civilization folders, regenerated WebP copies, deleted the staging folder, and also WebP-optimized the 3 previously-missing Elam copies (Ch 4/5/6). 36 files changed across the three civilization map folders.

---

## Key learnings this session

### 1. Gemini map generation needs strict rules + thinking mode + per-chapter reminders

**Empirical data:**

| Condition | Clean rate |
|---|---|
| First-run Nubia (no strict rules, fast mode) | 0/8 |
| First-run China (no strict rules, fast mode) | 5/8 |
| First-run Elam (no strict rules, fast mode) | 6/8 |
| Strict-rules redos (thinking mode) | **15/15** |

The strict rules work. Skipping them is an expensive mistake. See `feedback_map_strict_rules.md` memory.

**The six recurring Gemini failure modes:**
1. Duplicate labels (9 of 16 first-run maps)
2. Cataract numbering drift ("North Cataract", "Cataract 3" with a "4" next to it)
3. Garbled invented words ("cononniat", "reachit", "Kushi", "Brotion", "Tiaati-Tela")
4. Geographic orientation errors (Memphis west of Aswan, Nile drawn east-west)
5. Dropped site names (Aniba / Miam became just the descriptive text)
6. Label misplacement (Loess Plateau east of Erlitou, Yi River on the Yellow River)

Each failure mode has a specific counter-rule in the CRITICAL RULES block in `map-prompts/README.md`.

### 2. Elam audit produced factual corrections to the shipped Meso narrative

The Elam Persona E cross-cultural review flagged two errors in Meso Ch 7 (Hammurabi framing + stele looting date/location) and one gap in Meso Ch 8 (Shutruk-Nahhunte one-sentence beat). All three were fixed this session. See `project_meso_backward_fixes.md` memory. **Pattern to remember:** backward passes from a new TL's audit aren't just cross-link additions — they can include prose corrections to the reference TL when the new TL's research uncovers a factual error the reference TL got wrong.

### 3. Summary-writing is now formally specified

`WRITING-RULES.md` has a proper summary-bullets section (was just a one-liner before this session). Density, length, voice, content, matchText awareness, process, and exemplar bullets are all documented. See `feedback_summary_spec.md` memory. **Rule of thumb:** 6–10 bullets per chapter, 25–40 words each, one sentence, informal voice intact, concrete named facts only.

### 4. Map prompts folder structure is now canonical

- `map-prompts/README.md` — house style (CRITICAL RULES, orientation preambles, workflow)
- `map-prompts/{tlId}.md` — first-draft prompts per TL
- `map-prompts/redo/{tlId}.md` — rewrites for prompts that hallucinated on first run
- `map-prompts/redo/README.md` — what's in the redo folder and why

When drafting new TL map prompts, **copy the redo style, not the first-run style.** The redos are the live reference for "how a prompt should look when it actually has to work."

---

## Known loose ends

### Minor: map style inconsistency

The first 7 redos (China Ch 4/7/8, Nubia Ch 1–4) were generated before the edge-to-edge style rule was added mid-session, so they still have the old bordered frame (border on all 4 sides). The 8 later redos (Nubia 5–8, Elam 1/3/7/8) have the new edge-to-edge style (top header bar only, map extending fully to left/right/bottom edges).

Not a functional problem — all 15 redos fix the factual errors they were meant to fix. Only an issue if you want visual consistency across all chapters. A future session could re-run the 7 older redos with the new style rule baked in.

### Pre-existing but known

- **`content/` is gitignored.** New JSON files need `git add -f`.
- **Dev server must be restarted after `npm run parse`.** `lib/data.ts` caches narratives in-memory.
- **Parse script's matchText regex is word-boundary strict.** No markdown, no parens, no trailing non-word chars. Verify before writing event/glossary/cross-link JSON files.
- **`public/maps/{tlId}/` is the correct folder name** — use the full TL id (`ancient-nubia`, `elamite-civilization`), not a shortened form. This bit the Elam maps once this session (user saved to `public/maps/elam/`, I had to move them).

---

## Next session priority order

### 1. Choose the next TL to narrate

Three chains are ready for their next TL:

- **Nubian Tradition chain:** `kingdom-of-kush` (the post-Ancient-Nubia successor that would eventually rule Egypt as the 25th Dynasty). This is the most narratively obvious continuation because Ancient Nubia explicitly sets up the Kushite pharaohs as "next book in this chain" in its Ch 8 outro.
- **Indian Subcontinent chain:** `vedic-period` (follows Indus Valley). Has v1 reference data to pull from.
- **Chinese Dynasties chain:** `shang-dynasty` (follows Ancient China). Has v1 reference data.
- **Persian Tradition chain:** `persian-empire` (follows Elam). The Achaemenid → Alexander story. Elam explicitly sets this up in Ch 8.

**User preference from prior sessions:** works chain-by-chain, finishing what's started. Since Nubia just shipped and Elam just shipped, the next move is probably Kingdom of Kush or Persian Empire (continuing the chains whose first TL is freshest in memory).

### 2. Workflow for a new TL (reference)

1. **Pull v1 reference data** from `~/projects/personal/timeline/src/data/{tlId}.json` if it exists. Review events for coverage gaps before writing.
2. **Write narrative** applying `WRITING-RULES.md`. Claude drafts every chapter; user reviews and directs. ~20–24k words over 8 chapters is the norm.
3. **5-persona audit** via `.claude/skills/audit-narrative.md`
4. **Apply fixes** from the merged audit report
5. **Reconcile** reference data with any new events/terms introduced in the narrative
6. **Register** with `scripts/parse-narratives.ts` NARRATIVE_FILES map
7. **Curate event links** — `content/.event-links-{tlId}.json`
8. **Curate glossary links** — `content/.glossary-links-{tlId}.json` (target ~200 per TL)
9. **Curate cross-links** — `content/.cross-links-{tlId}.json` (target ~20 forward)
10. **Write summaries** — `narratives/{tlId}.summaries.json` per the WRITING-RULES spec (6–10 bullets per chapter)
11. **Enrich** via `npm run parse` (fetches thumbnails + extracts)
12. **Backward cross-cultural pass** — add backward cross-link entries to the reference TL files
13. **Draft map prompts** in `map-prompts/{tlId}.md` — **every prompt must open with the CRITICAL RULES block and the TL's orientation preamble**
14. **Generate maps** — user runs Gemini in **thinking mode** with the prompts. Audit every map against its prompt. Maps with factual errors go to `map-prompts/redo/{tlId}.md` with per-chapter SPECIFIC REMINDERS blocks.
15. **Optimize maps** — non-destructive PNG → WebP conversion at quality 85
16. **Flip navigator toggle** — `hasContent: true` on the TL's entry in `src/lib/navigator-tls.ts`
17. **Push** — Cloudflare auto-deploy ships it

### 3. Optional future work

- **Re-run the 7 old-style redos** (China Ch 4/7/8, Nubia Ch 1–4) with the edge-to-edge style rule for visual consistency across all 47 chapter maps. Low priority.
- **Review older TL narratives** for similar factual errors the way Elam's audit flagged Meso Ch 7/8. Mesopotamia and Indus Valley never got a post-ship audit against the new TLs' reference data.
- **Finish first-pass content pipeline for existing TLs that are behind:** none, actually — all 5 shipped TLs are complete with map + summary coverage as of this session.

---

## Decisions made this session (for continuity)

1. **The strict rules format is the ONLY acceptable map prompt format going forward.** Do not draft a new prompt without the CRITICAL RULES block. Do not run Gemini in fast mode for map generation. Do not skip the per-TL orientation preamble if one exists. The empirical evidence (0/8 Nubia first-run vs 15/15 redo success) is decisive.
2. **Edge-to-edge map style is the new default** — single header bar at the top for the chapter title, map extending fully to the left/right/bottom edges.
3. **Backward narrative corrections are in scope** when a new TL's audit finds factual errors in a shipped TL. Not just cross-link additions — actual prose edits to the reference TL.
4. **The summary-writing spec in `WRITING-RULES.md` is now canonical.** Use it verbatim for new TL summaries. Skip the legacy `summary` prose field that only Mesopotamia has — bullets are enough.
5. **Elam's central thesis** ("Elam became Persia's bureaucratic spine — it never actually died") should be preserved in any future narration of the Persian Empire TL, which will lean heavily on the Anshan lineage continuity Cyrus the Great claimed in his own Cylinder.

---

## File pointer quick-reference

- **Map prompts house style:** `map-prompts/README.md` (CRITICAL RULES, orientation preambles)
- **Map prompt redo folder:** `map-prompts/redo/`
- **Summary writing spec:** `WRITING-RULES.md` section starting at "Rule: Chapter summaries — how to write them"
- **5-persona audit skill:** `.claude/skills/audit-narrative.md`
- **Parse script:** `scripts/parse-narratives.ts` (NARRATIVE_FILES map at line ~106, `replaceOutsideAnchors` matcher at line ~298)
- **Non-destructive WebP optimizer:** Use inline Node + sharp, NOT `scripts/optimize-maps.mjs` (that one deletes PNG originals)
- **Navigator TL entries:** `src/lib/navigator-tls.ts`
- **Accent colors:** `src/lib/accent-colors.ts` + `reference-data/tl-chains.ts`
- **Reader image probe:** `src/components/chapter-accordion.tsx:37`

---

## Context the next session needs

- **All 5 TLs are shipped and live.** Don't restart any of them.
- **The strict-rules map prompt workflow is non-negotiable** for any new maps. See `feedback_map_strict_rules.md`.
- **Thinking mode for Gemini, always.** Fast mode hallucinates.
- **Cloudflare auto-deploy is live** — push to main, CF builds and ships within a few minutes. Don't manually `wrangler deploy` unless something is broken.
- **`content/` is gitignored** — `git add -f` new JSON files.
- **Always provide "Changes made this pass"** numbered summary at the end, per `feedback_session_summary`.
- **Miles first, km in parens** for US reader.
- **Parentheses for inline definitions, not em-dashes.** See `feedback_parens_style`.
- **Discuss plans before writing** them, per `feedback_plan_mode`.
- **Claude writes every narrative; user reviews.** See `feedback_claude_writes_narratives`.
- **The parse script's matchText regex is word-boundary strict.** Verify matchText strings before writing link JSON files.
