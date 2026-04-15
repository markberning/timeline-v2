# Session Handoff — 2026-04-15

**Branch:** main
**Last commit:** `f687aec` — Elam BCCP: 16 backward cross-links + register with parse pipeline
**Auto-deploy:** ✅ working (Cloudflare Workers Builds, git integration reconnected this session — see CLAUDE.md deploy notes for recovery if it breaks again)

---

## TL;DR

**Ancient Nubia is fully shipped to production** at `stuffhappened.com/ancient-nubia` with one loose end — the summary bullets file was never written. **Elam is halfway through the pipeline**: narrative drafted and audited and fix-passed, reference data expanded, backward cross-cultural pass applied, but **none of the forward link curation is done yet** (event links, glossary links, cross-links, summary bullets, chapter maps, navigator toggle all pending).

**There are also three meta-tasks the user explicitly queued for the next session:**

1. Per-prompt rewrite of every existing entry in `map-prompts.md` so each explicitly says `The chapter is called "Chapter N: Title" and should go at the top of the map, centered` (the house-style note I added at the top of the file isn't enough — each prompt needs the line baked in).
2. Split `map-prompts.md` into a **per-TL folder**, one file per TL (e.g. `map-prompts/ancient-nubia.md`, `map-prompts/elamite-civilization.md`).
3. **Create a summary-writing directions file** — there isn't one yet, only a one-line rule in `WRITING-RULES.md:310`. The user wants proper directions documented, using Meso/Indus/China summaries as the style reference. Then apply it to Nubia (missing) and Elam (missing).

---

## Pipeline status by TL

| TL | ref data | narrative | audit | fixes | parse | event-links | glossary | cross-links fwd | cross-links back | summaries | maps | navigator | shipped |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| mesopotamia | ✅ 89 | ✅ 13ch | ✅ | ✅ | ✅ | ✅ 82 | ✅ 336 | ✅ 11 | ✅ 30¹ | ✅ 121 | ✅ 13 | ✅ | ✅ |
| indus-valley | ✅ 56 | ✅ 10ch | ✅ | ✅ | ✅ | ✅ 66 | ✅ 226 | ✅ 28 | ✅ 33¹ | ✅ 69 | ✅ 10 | ✅ | ✅ |
| ancient-china | ✅ 37 | ✅ 8ch | ✅ | ✅ | ✅ | ✅ 37 | ✅ 208 | ✅ 20¹ | — | ✅ 51 | ❌ | ✅ | ✅ |
| ancient-nubia | ✅ 54 | ✅ 8ch | ✅ | ✅ | ✅ | ✅ 52 | ✅ 190 | ✅ 18 | ✅ 11¹ | ❌ | ✅ 8 | ✅ | ✅ |
| elamite-civilization | ✅ 51 | ✅ 8ch | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ 16² | ❌ | ❌ | ❌ | ❌ |

¹ Includes entries added during later TL backward passes (e.g. Meso now has 30 cross-links because Nubia's pass added 5 and Elam's pass added 14).
² Elam's "backward pass" is into Meso + Indus only (no Nubia/China overlap of note) — 14 Meso + 2 Indus.

### Pending items that show up as ❌ in the table above

**Ancient China:**
- Chapter maps — `map-prompts.md` now has 8 China prompts drafted (Ch 1–8) but no Gemini run yet. Hand-off to user for Gemini; then optimize and drop in `public/maps/ancient-china/`.

**Ancient Nubia:**
- **Summary bullets** — `narratives/ancient-nubia.summaries.json` is missing. The reader currently falls back to placeholder-generated summaries in the collapsed chapter cards. Needs a write pass: 6–10 factual-outline sentences per chapter, matching the style of `ancient-china.summaries.json`.

**Elam (biggest remaining work):**
- **Event links** — `content/.event-links-elamite-civilization.json` doesn't exist. Need to read each chapter and place event-link spans for the 51 reference events. Target: ~50 links across 8 chapters.
- **Glossary links** — `content/.glossary-links-elamite-civilization.json` doesn't exist. Target: ~180–220 entries.
- **Forward cross-links** — `content/.cross-links-elamite-civilization.json` doesn't exist. Target: ~15–25 entries pointing into Meso/Indus/China/Nubia. The Persona E forward findings in `audits/elamite-civilization.audit.md` have the candidate list (26 forward findings).
- **Summary bullets** — `narratives/elamite-civilization.summaries.json` doesn't exist.
- **Chapter map prompts** — not drafted yet. Add 8 prompts to `map-prompts.md` following the established format.
- **Chapter maps** — Gemini run by user, then optimize and drop in `public/maps/elamite-civilization/`.
- **Navigator toggle** — flip `hasContent: true` in `src/lib/navigator-tls.ts` only after everything above is done.

---

## What shipped this session (committed + pushed)

1. **Ancient Nubia pipeline completion** — narrative draft, 5-persona audit, must/should fix pass, reference data reconciliation (51 → 54 events), 52 event links, 190 glossary links, 18 forward cross-links + 11 backward pass (Meso +5, Indus +3, China +3), parse registration with matchText stripping to kill silent failures, 8 Gemini-generated chapter maps (PNG + WebP), navigator `hasContent` toggle, and a no-op deploy push that landed Nubia on production.
2. **Cloudflare Workers Builds git integration was re-authorized by the user** during this session — previously the project showed as "disconnected from your Git account" and every push since then had been triggering canceled builds. Reconnection fixed auto-deploy; all pushes since now deploy automatically.
3. **Map prompts structure updates** — added house-style note at top of `map-prompts.md` requiring the chapter title centered in serif above the map frame, and 8 new Ancient China chapter map prompts following that format. **NOTE: per-prompt explicit title directive and per-TL folder split are NOT yet done.**
4. **Elam pipeline start** — reference data copied from v1 and expanded 35 → 51 events (16 new: Puzur-Inshushinak, Eparti I, Siwe-palar-hupak, Kudur-Nahhunte I, pantheon entries for Humban/Kiririsha/Nahhunte, Igihalkid dynasty, Humban-Numena I, Kutir-Nahhunte III, Hutelutush-Inshushinak, Te-Umman/Til-Tuba, Shamash-shum-ukin alliance, King of Anshan title, Behistun Elamite version, Persepolis Fortification Archive). 8-chapter narrative drafted (22k → 24k words), full 5-persona audit run, must/should fix pass applied (~25 edits). Registered in the parse pipeline. Backward cross-cultural pass added 14 Meso + 2 Indus entries pointing at Elam chapters.

**Commits this session (newest first):**
- `f687aec` — Elam BCCP: 16 backward cross-links + register with parse pipeline
- `82fa982` — Elam: first draft + audit + fix pass
- `b4f65f2` — Map prompts: add house-style note + 8 Ancient China prompts
- `3cf963a` — Ancient Nubia: 8 chapter maps (PNG originals + WebP optimized)
- `fed0a2d` — HANDOFF: bump last-commit pointer, document deploy flow
- `170872b` — Navigator: flip ancient-nubia hasContent to true
- `befc5ef` — Backward cross-cultural pass: add 11 Ancient Nubia cross-links to reference TLs
- `f872ea2` — Ancient Nubia: add 8 chapter map prompts
- `e410c2f` — Ancient Nubia: register with parse pipeline + strip markdown from matchText
- `e733cc0` — Ancient Nubia: curated cross-civ links
- `6d2d653` — Ancient Nubia: curated glossary links
- `b7efdc4` — Add HANDOFF.md for ancient-nubia work-in-progress
- `7cadd2d` — Ancient Nubia: curated event links
- `069bedd` — Ancient Nubia: reconcile reference data with narrative
- `06cd20c` — Ancient Nubia: first draft + audit + fix pass

---

## Next session priority order

### 1. Create summary-writing directions (NEW — explicit user request)

Right now there's only a one-liner at `WRITING-RULES.md:310` that says summaries should be "factual outlines, not polished prose." The user wants a proper directions document. Draft options:

- Add a `.claude/skills/write-summaries.md` skill (can be invoked via `/write-summaries {tlId}`)
- OR add a substantial section to `WRITING-RULES.md` with style rules, examples, density targets

**Style profile from existing good summaries (ancient-china / indus-valley / mesopotamia-rewrite):**
- Chapter count: 8 / 10 / 13
- Bullets per chapter: **6–10** (China 6–7, Indus 6–8, Meso 7–12)
- Average bullet length: **29–36 words** — one tight sentence, not a paragraph
- Voice: matches the narrative's informal tone, keeps the standout phrases ("China's Sorrow", "the black-headed people"), but cuts all transitions, scene-setting, and cross-references
- Content: chronological outline of what the chapter actually covers, named people and dates included
- No citations, no "Mesopotamia Ch X" refs (the summary is a standalone view that wouldn't render the cross-ref anyway)
- File format: JSON **list** (not object), each entry `{chapter: int, title: string, dateRange: string, bullets: [string, ...]}`
- Title and dateRange usually match the chapter header format; `dateRange` is a compact era string like `"7000–5000 BCE"` or `"Geographic setting + pre-7000 BCE"` for framing chapters
- Parse script auto-injects event/glossary/cross-link anchors into the bullet text at build time, so bullets should use the same plain-text phrasing as the narrative

Once the directions are written, apply them to Nubia and Elam (both currently missing summaries.json files).

### 2. Map prompt meta-tasks (user-requested, blocking further map work)

- Go through every existing entry in `map-prompts.md` and explicitly insert the line: `The chapter title "Chapter N: <Title>" should appear at the top of the map, centered, in a clean serif font, above the map frame — not inside the map area itself.` The top-of-file house-style note I added this session is not enough; user wants it inline in each prompt.
- Split `map-prompts.md` into a folder `map-prompts/` with one `.md` per TL: `map-prompts/mesopotamia.md`, `map-prompts/indus-valley.md`, `map-prompts/ancient-nubia.md`, `map-prompts/ancient-china.md`, and (once Elam's are drafted) `map-prompts/elamite-civilization.md`. Keep the top-of-folder house-style note as `map-prompts/README.md`.

### 3. Elam forward link curation (biggest remaining task)

Work through steps 6–9 of the pipeline for `elamite-civilization`:

- **Event links** — curate `.event-links-elamite-civilization.json`. Target ~50 links across 8 chapters. Use plain-text matchText (no bold wrappers, no trailing parens). Verify each matchText passes word-boundary regex before writing. See `scripts/parse-narratives.ts` `replaceOutsideAnchors` for the exact matcher.
- **Glossary links** — curate `.glossary-links-elamite-civilization.json`. Target ~180–220 entries. Heaviest clusters will be in Ch 1 (geographic setup, language isolates, trade commodities), Ch 3 (Ur III fall, Elamite pantheon introduction), Ch 4 (Mari letters, Hammurabi-era diplomacy), Ch 6 (the sack of Babylon and the trophy list), Ch 7 (Neo-Assyrian political terms), and Ch 8 (Persian/Achaemenid terms).
- **Forward cross-links** — curate `.cross-links-elamite-civilization.json`. The Persona E forward report in `audits/elamite-civilization.audit.md` already lists the 26 candidate forward findings — use those as the starting list, pick the 15–20 strongest, and write blurbs pointing at the specific reference TL chapters. Highest-value cross-links: Ch 5 → Ancient China Ch 3 (Houmuwu Ding parallel), Ch 3 → Ancient China Ch 3 (Shang fraternal succession), Ch 1 → Mesopotamia Ch 2 (Eridu as older city), Ch 5 → Ancient Nubia Ch 7 (Ramesses II contemporary), Ch 6 → Mesopotamia Ch 8 (Kassite context), Ch 7 → Mesopotamia Ch 11 (Neo-Assyrian campaigns).
- **Summary bullets** — `narratives/elamite-civilization.summaries.json`, 6–10 per chapter, informal voice, standalone factual outline. Do this after the summary-writing directions file is written.

### 4. Nubia summary bullets (missing, small task)

Write `narratives/ancient-nubia.summaries.json` — 8 chapters, 6–10 bullets each, factual outline style. Do this after the summary-writing directions file is written.

### 5. Elam chapter maps (user-generated via Gemini)

Draft 8 Elam chapter map prompts and append to `map-prompts/elamite-civilization.md` (after the per-TL folder split). Then hand off to user for Gemini. Then optimize via the non-destructive WebP script and drop in `public/maps/elamite-civilization/`. Target key visual beats: Two-Elam geography (Susa + Anshan), Zagros trade routes, Middle Kingdom fortress chain parallels, Chogha Zanbil + Napir-Asu, the 1158 BCE sack of Babylon, Til-Tuba battle, Achaemenid Persepolis/Behistun.

### 6. Elam navigator toggle

Only after everything above is done, flip `hasContent: true` on the `elamite-civilization` entry in `src/lib/navigator-tls.ts`. Push. Auto-deploy will ship it.

---

## Decisions made this session (for continuity)

1. **Nubia "hasContent" toggle was flipped before chapter maps were ready** — the user opted to ship Nubia without a full chapter map run and then add maps retroactively. Both work fine; the reader image probe auto-loads maps if present and silently hides the map area if not.
2. **Nubia chapter maps were user-generated via Gemini with the prompts I drafted**, placed into `public/maps/nubia/` (wrong folder name, since `civilizationId` in the reader is `ancient-nubia`). I renamed the folder to `ancient-nubia/` during the review pass and optimized the PNGs to WebP while keeping the PNG originals. The **non-destructive optimize step is important** — the user explicitly said not to delete PNG originals, so I wrote a one-off node script inline rather than using `scripts/optimize-maps.mjs` (which deletes PNGs).
3. **Cloudflare auto-deploy was broken at the start of the Nubia shipping step** because the GitHub OAuth was stale — the Worker's Build tab showed "disconnected from your Git account." The user reconnected via the dashboard during the session. Manual `wrangler deploy` from the user's terminal was the unblock while the integration was down.
4. **matchText stripping for event/glossary/cross-link files** — the parse script uses `\b(escaped)\b` regex, which silently fails on matchText starting or ending with non-word characters. This was a source of ~20 silent failures on the first Nubia parse run before I diagnosed it. **Convention: matchText must be plain ASCII, no `**bold**` wrappers, no leading/trailing parens.** I added this rule to CLAUDE.md step 6. When spanning a bold boundary is unavoidable in the source prose, pick a non-overlapping substring (e.g. "coming into their own as fortified proto-state centers" instead of "stone-walled hill complex called **Shimao**").
5. **Elam narrative's central thesis is "Elam never died, it became the bureaucratic spine of Persia"** — the Persepolis Fortification Archive is in Elamite, Cyrus's title was "king of Anshan," the Behistun inscription has an Elamite version carved first. This is the surprise payoff in Ch 8 and the thing that differentiates Elam from "another defeated ancient kingdom."
6. **Elam audit identified a factual error in the existing Meso narrative** — Mesopotamia Ch 7 currently presents Hammurabi as "the master strategist from day one," but the Mari letters show he was Elam's diplomatic client (addressing Siwe-palar-hupak as "father") for his first 15 years. The Elam BCCP added a cross-link to Meso Ch 7 adding that context, but **the Meso narrative prose itself is still wrong** — a future surgical fix is warranted.
7. **Backward cross-cultural pass format** — add entries directly to the reference TL's `.cross-links-{tlId}.json` file with `targetTl: '{new-tl-id}'`, verify matchText with word-boundary regex, re-run parse to confirm zero warnings, commit. No narrative prose edits required.

---

## Known issues / gotchas

- **`content/` is gitignored** but existing files under it are tracked. New JSON files need `git add -f` to be committed.
- **Dev server must be restarted after `npm run parse`** because `lib/data.ts` caches narratives in-memory.
- **The parse script's `\b\b` regex silently skips failing matches for event and glossary links** — only cross-links produce a warning. When curating new JSON files, simulate the regex in a Python check before writing, or the file may look correct but fail silently.
- **Ancient China still has no chapter maps.** CLAUDE.md's civilization roadmap notes this as "chapter maps pending." The prompts are drafted in `map-prompts.md` but no Gemini run.
- **The Mesopotamia narrative has at least two factual issues Elam's research uncovered** — the Hammurabi/Elam-client error in Ch 7, and the Code of Hammurabi looting date in Ch 7 ("around 1200 BCE" should be 1158 BCE; loot came from Sippar not Babylon itself). These are flagged in the BCCP blurbs but not yet corrected in the Meso prose.
- **There's no summary-writing directions file** — this was user-flagged this session and queued for the next. The only guidance is `WRITING-RULES.md:310`.
- **The per-prompt map title directive and per-TL folder split are not done.** User flagged them this session; I added the house-style note at the top of the single file but did not rewrite each prompt or split into folders. These are blocking items before drafting more TL map prompts.

---

## Context the next session needs

- **Nubia is live, Elam is halfway.** Don't restart either from scratch.
- **Both Ancient Nubia and Elam are missing summary bullets files.** This needs to happen before either feels "fully shipped." Nubia is live without them, Elam can't ship without them.
- **The user prefers that Claude writes everything and the user reviews**, per `feedback_claude_writes_narratives` memory.
- **Discuss plans before writing**, per `feedback_plan_mode` memory. For big tasks (summary-writing directions, map prompt restructure) surface the plan and wait for green light.
- **Always provide "Changes made this pass"** at the end of every response, per `feedback_session_summary` memory.
- **Miles first, km in parens** for US reader.
- **No em-dashes for definitions; use parens.** See `feedback_parens_style`.
- **Cloudflare auto-deploy is live** — don't manually `wrangler deploy` unless something is broken. Let the git push do it.
- **The `content/` directory is gitignored** — always `git add -f` new JSON files.
- **The parse script's matchText regex is word-boundary-strict** — no markdown, no parens, no trailing non-word chars. Verify before writing.
- **Parent shell environment has no `CLOUDFLARE_API_TOKEN`** — Claude can't deploy from sandbox bash. If deploy is broken again, either fix it in the Cloudflare dashboard or have the user run `wrangler deploy` from their own terminal.
- **Elam's chain is `persian-tradition`**, which already has an accent color registered. Don't need to add one.
- **Elam's label in the navigator is "Elam" not "Elamite Civilization"** — the navigator-tls entry is `id: 'elamite-civilization', label: 'Elam'`. The reference data originally had `label: "Elamite Civilization"` from v1; I normalized it to "Elam" during reference data expansion.

---

## Files touched this session

**Added:**
- `narratives/ancient-nubia.md` + its audit
- `narratives/elamite-civilization.md` + its audit
- `reference-data/ancient-nubia.json` (imported from v1, expanded)
- `reference-data/elamite-civilization.json` (imported from v1, expanded)
- `content/.event-links-ancient-nubia.json`
- `content/.glossary-links-ancient-nubia.json`
- `content/.cross-links-ancient-nubia.json`
- `content/ancient-nubia.json` (generated by parse)
- `content/elamite-civilization.json` (generated by parse)
- `public/maps/ancient-nubia/chapter-{1..8}.png`
- `public/maps/ancient-nubia/chapter-{1..8}.webp`
- `audits/ancient-nubia.audit.md`
- `audits/elamite-civilization.audit.md`
- `HANDOFF.md` (this file — rewrite from the previous Nubia-WIP version)

**Modified:**
- `scripts/parse-narratives.ts` (added ancient-nubia and elamite-civilization to NARRATIVE_FILES)
- `content/.cross-links-mesopotamia.json` (+5 Nubia, +14 Elam → 30 total)
- `content/.cross-links-indus-valley.json` (+3 Nubia, +2 Elam → 33 total)
- `content/.cross-links-ancient-china.json` (+3 Nubia → 20 total)
- `src/lib/navigator-tls.ts` (ancient-nubia hasContent: true)
- `map-prompts.md` (house-style note + 8 Nubia + 8 Ancient China prompts)
- `CLAUDE.md` (civilization roadmap updated, pipeline expanded, deploy notes)

---

## File pointer quick-reference

- **Style references for summary bullets:** `narratives/ancient-china.summaries.json`, `narratives/indus-valley.summaries.json`, `narratives/mesopotamia-rewrite.summaries.json`
- **Audit skill:** `.claude/skills/audit-narrative.md`
- **Writing rules:** `WRITING-RULES.md` (310-line summary rule needs expansion)
- **Reader image path convention:** `src/components/chapter-accordion.tsx:37` — `/maps/${civilizationId}/chapter-${chapter.number}.webp`
- **Parse script:** `scripts/parse-narratives.ts` (NARRATIVE_FILES at line 106; replaceOutsideAnchors at line 298)
- **Map optimizer:** `scripts/optimize-maps.mjs` — destructive, deletes PNGs. Use a manual inline node script for non-destructive conversion.
- **Navigator TL entries:** `src/lib/navigator-tls.ts`
- **Accent colors:** `src/lib/accent-colors.ts` + `reference-data/tl-chains.ts` for chain lookup
