# Session Handoff — 2026-04-15 (session 2)

**Branch:** main
**Last commit:** `4b26b34` — Offline: client-side guard on TL taps when offline + not downloaded
**Auto-deploy:** ✅ working (Cloudflare Workers Builds, git integration live)

---

## TL;DR

This session had three major workstreams on top of the 5 already-shipped TLs, all done with no new narrative written:

1. **Cross-link audit + fill** — audited the forward/backward cross-link matrix across the 5 shipped TLs and added 14 new cross-links targeting the biggest structural gaps (Meso→Indus, Indus→Elam, China↔Elam zero-gap, Nubia↔Elam zero-gap). New totals: 137 cross-links across 5 TLs (up from 123).
2. **Accuracy pass** — ran a backward Persona-E fact-check on Meso and Indus against the 3 newer TLs (Elam's earlier audit had flagged 3 Meso errors; the pattern repeated), plus a full summary fact-precision pass on all 5 TLs covering 366 bullets. Applied 6 narrative corrections + 21 summary fixes.
3. **Offline reading feature** — shipped a service-worker-based per-TL offline download system with a header-launched library sheet. Users can download any TL (~15–20 MB) and read it in airplane mode, complete with maps and event thumbnails. Plus the summary-page text-selection bug was fixed in the same span of commits.

No new TL narrative was started; all 5 shipped TLs got stronger cross-references, better accuracy, and offline support.

---

## Shipped TLs (unchanged since last session — all still live on stuffhappened.com)

| TL | chapters | events | event-links | glossary | cross-links fwd | cross-links back | summaries | maps | nav |
|---|---|---|---|---|---|---|---|---|---|
| mesopotamia | 13 | 89 | 82 | 336 | **34** (+4 Meso→Indus, +1 Meso→Elam) | 56 | 121 | 13 | ✅ |
| indus-valley | 10 | 56 | 66 | 226 | **37** (+4 Indus→Elam) | 25 | 69 | 10 | ✅ |
| ancient-china | 8 | 37 | 37 | 208 | **22** (+2 China→Elam) | 19 | 52 | 8 | ✅ |
| ancient-nubia | 8 | 54 | 52 | 190 | **20** (+2 Nubia→Elam) | 13 | 61 | 8 | ✅ |
| elamite-civilization | 8 | 51 | 49 | 206 | **24** (+1 Elam→Nubia +1 Elam→China) | 24 | 63 | 8 | ✅ |

**Totals**: 137 cross-links across 5 TLs (up from 123), 1,166 glossary links, 366 summary bullets, 47 chapter maps. All narratives have been through an accuracy pass against the three newest TLs.

---

## What shipped this session (15 commits)

In order:

1. **`23519ca`** — Cross-link audit + 14 new cross-links filling the matrix gaps (Meso↔Indus, Indus→Elam, China↔Elam, Nubia↔Elam).
2. **`386bbbd`** — Reader bug fix: summary text selection now works. The sticky chapter header previously wrapped the clickable expand handler around the summary bullets, making text unselectable. Split the sticky container into a clickable header row + a non-clickable preview area.
3. **`7024992`** — Accuracy pass: backward Persona-E fact-check on Meso and Indus against Ancient China, Ancient Nubia, Elamite Civilization. Summary fact-precision pass on all 5 TLs. 6 narrative corrections + 21 summary fixes applied.
4. **`568d315`** — Offline reading: per-TL download via service worker. First version with per-row cloud icons.
5. **`7a7182b`** — Move cloud icon to right of chain chip on navigator rows.
6. **`6a9c66e`** — SW bugfix: trailing-slash miss + navigation fallback to `/`.
7. **`2a1968b`** — UI restructure: remove per-row cloud icons, add a header cloud button that opens a bottom-sheet library listing all TLs with per-row download controls.
8. **`04f6c36`** — SW: network-first strategy for navigation requests + bump `SHELL_CACHE` to v2.
9. **`35a2867`** — SW: allow installation on localhost so dev downloads work. Fetch handler bails out on localhost so HMR stays intact.
10. **`112c53f`** — SW: dual-slash cache put (cache every same-origin URL under both trailing-slash variants) + HTML offline-fallback page with 2-second meta refresh back to `/`.
11. **`4b26b34`** — Client-side guard: tapping a non-downloaded TL offline opens the library sheet instead of navigating into a broken URL.

(Plus a few intermediate commits that are covered above — git log has the full sequence.)

---

## Key learnings this session

### 1. Service worker offline reading has sharp edges

Five iterative fixes were needed before the offline feature worked cleanly in production. The failure modes are all well-known SW gotchas in retrospect:

| Bug | Fix |
|---|---|
| Cache-first strategy meant new deploys never reached users | Switched to network-first for navigation requests |
| Manifest URLs stored with trailing slash, navigator taps use no slash | `matchWithSlashVariants` + dual-slash cache put during download |
| iOS Safari showed raw 503 text as a broken page | Proper HTML fallback page with meta refresh |
| "Nothing happens" on non-downloaded TLs offline (iOS short-circuits navigation?) | Client-side guard: check `navigator.onLine` + download status, open library sheet instead |
| Dev-server HMR + runtime cache fight each other | Register SW in both, but SW fetch handler bails out on localhost |

Takeaway: every future SW change needs to be tested on real production + real offline (airplane mode *and* wifi off — loopback on the Mac or LAN to a dev server doesn't count as offline). See `project_offline_reading.md` memory for the canonical architecture and the list of tripwires.

### 2. Backward audits keep finding errors

The Elam session's Persona-E cross-cultural audit surfaced 3 real factual errors in Meso Ch 7/8 that had been shipped for weeks. A second backward audit on Meso (against all three newer TLs) surfaced **7 more** (4 STRONG + 2 CHECK + 1 SOFT), including: Meso Ch 3 misidentified China's first cities (Erlitou instead of Liangzhu); Ch 5 claimed Gudea imported Nubian gold (actually Meluhha); Ch 6 treated Shimashki as a separate allied confederation (Shimashki was the Elamite royal dynasty); Ch 13 attributed Persian administration wholly to Mesopotamian inheritance (erases the Elamite bureaucratic backbone). Indus's backward audit found another 6.

**Pattern to remember:** every new TL's audit data is a fresh lens for re-checking older TLs. The more TLs ship, the more leverage a backward audit has on the earliest ones.

### 3. Summary bullets are a high-density hiding place for errors

A dedicated fact-precision audit of 366 summary bullets across 5 TLs found 31 drifts (7 STRONG + 14 CHECK + 10 SOFT). The recurring pattern: compression drops critical qualifiers (e.g. "first complete code" → "first code"), names get transposed (Sargon II wasn't Tiglath-Pileser III's direct successor — Shalmaneser V sat between), and dates slip by a year (Hammurabi moved in 1763, not 1764). Indus Valley came back clean (0 STRONG, 0 CHECK) — everyone else had at least one STRONG.

**Pattern to remember:** bullets are the highest-signal place to catch accuracy regressions, because they compress 2–3k words of chapter prose into 25–40 words × 6–10 bullets. Worth adding a summary-factcheck pass to every new TL's ship checklist alongside the 5-persona narrative audit.

### 4. Text selection on bullet summaries matters more than expected

The user caught a sticky UX bug on day-one of reading: tapping any non-link area of a summary bullet was collapsing/expanding the chapter, *and* the whole panel had `select-none` so you couldn't even drag to select a quotation to copy. The fix was a simple-but-structural refactor of `chapter-accordion.tsx`: split the sticky container into a clickable "header row" (number + title + date + chevron) and a sibling non-clickable "preview area" (bullets + Read button). The preview area has default text selection and no tap handler.

---

## Known loose ends

### Minor UX polish
- **Indus offline drift**: if a user visited Indus once online, the SW's runtime shell cache still has it, so tapping Indus while offline serves the cached page even though the user never explicitly downloaded it. This is technically "wrong" given the explicit-download model but is actually useful — the user gets more offline content for free. Current client-side guard only kicks in when `navigator.onLine === false` AND the TL isn't in the explicit downloaded list, so runtime-cached content falls through gracefully. If you want stricter behavior, tighten the guard to also check the SW's cache presence via a `list-downloaded` message roundtrip.
- **Offline storage display**: the library sheet doesn't show how much space each TL takes or total consumption. Would be nice to have in a future polish pass.
- **Library sheet polish**: no "delete all downloads" shortcut, no "update available" detection (the per-TL caches are frozen in time — if a narrative is corrected, users with the cached copy need to manually delete + re-download to get the update).

### Pre-existing but known
- **`content/` is gitignored.** New JSON files need `git add -f`.
- **`public/offline/` is now also gitignored.** Regenerated by `npm run parse` → `scripts/parse-narratives.ts` emits `{tlId}.manifest.json` per TL.
- **Dev server must be restarted after `npm run parse`.** `lib/data.ts` caches narratives in-memory.
- **Parse script's matchText regex is word-boundary strict.** No markdown, no parens, no trailing non-word chars.
- **SW registration is conditional in dev.** The SW registers on localhost but its fetch handler bails out to avoid fighting HMR. So you can test the download flow in dev by tapping the library sheet, but you can't test offline reading in dev (fetch handler is a no-op there).
- **Test offline for real, not on localhost.** Airplane mode + wifi off + hit the production URL. Localhost is always reachable via loopback even with wifi off.

---

## Next session priority order

### 1. Choose the next TL to narrate

Four chains are ready for their next TL:

- **Persian Tradition chain** — `persian-empire` (follows Elam). Elam Ch 8 explicitly teases this with the "Cyrus the Great was king of Anshan" thread and the "the Persian Empire's working language was Elamite" central thesis. This is the most thematically loaded handoff in the whole repo.
- **Nubian Tradition chain** — `kingdom-of-kush` (follows Ancient Nubia). Nubia Ch 8 sets up the Kushite 25th-Dynasty pharaohs as "next book in this chain." Second-most obvious continuation.
- **Chinese Dynasties chain** — `shang-dynasty` (follows Ancient China). Has v1 reference data.
- **Indian Subcontinent chain** — `vedic-period` (follows Indus Valley). Has v1 reference data.

**My lean**: **persian-empire**. The narrative-coherence case is strongest — the Elamite "bureaucratic spine" thesis is freshest in memory, and all the setup work for the Achaemenid story is already paid for in Elam Ch 8. Kingdom of Kush is a close second.

**User's pattern from prior sessions**: works chain-by-chain, finishing what's started. Since Elam and Nubia both just shipped, either of those chains' next-TL is the natural move.

### 2. Workflow for a new TL (reference)

1. **Pull v1 reference data** from `~/projects/personal/timeline/src/data/{tlId}.json`. Review events for coverage gaps before writing.
2. **Write narrative** applying `WRITING-RULES.md`. Claude drafts every chapter; user reviews.
3. **5-persona audit** via `.claude/skills/audit-narrative.md`
4. **Apply fixes** from the merged audit report
5. **Reconcile** reference data
6. **Register** with `scripts/parse-narratives.ts` NARRATIVE_FILES map
7. **Curate event + glossary + cross-links** (3 agent passes)
8. **Write summaries** — per the WRITING-RULES summary spec (6–10 bullets per chapter)
9. **Enrich** via `npm run parse`
10. **Backward cross-cultural pass** — add backward cross-links to the reference TL files
11. **Summary fact-precision pass** — new step as of this session; read each bullet against its chapter and flag compression drifts
12. **Draft map prompts** — every prompt must open with the CRITICAL RULES block and TL orientation preamble
13. **Generate maps** — Gemini in thinking mode with strict prompts. Audit, redo hallucinated maps.
14. **Optimize maps** → `.webp` quality 85
15. **Flip navigator toggle** — `hasContent: true`
16. **Push** — Cloudflare auto-deploys

### 3. Optional future work

- **Persian Empire narrative** — the natural next step, see above
- **Kingdom of Kush narrative** — the other natural next step
- **Re-run the 7 old-style map redos** (China Ch 4/7/8, Nubia Ch 1–4) with the edge-to-edge style rule for visual consistency. Very low priority.
- **Offline feature polish** — storage display in the library sheet, delete-all, update detection. Wait until you've actually used the feature on a real trip before deciding what's missing.
- **Backward audit on Ancient China, Nubia, Elam** against each other — the pattern has now proven itself on Meso and Indus, but the three newest TLs were written with only partial awareness of each other's final state. Probably 2–5 new corrections per TL.

---

## Decisions made this session (for continuity)

1. **Network-first for HTML navigations, cache-first for assets.** The service worker must serve fresh HTML to online users so deployments are seen immediately; assets are hash-keyed or stable and can be served from cache. This was the fix for the initial "users see old UI forever after a deploy" problem and is the only correct strategy for a constantly-updated static site.
2. **Offline library is a header-launched sheet, not per-row icons.** Per-row cloud icons added visual noise to every `hasContent` row and didn't scale. A single cloud button in the navigator header opens a bottom-sheet library listing all TLs with their download state and controls.
3. **Client-side guard for offline + not-downloaded navigations.** Rather than relying on the SW to gracefully serve a fallback page, the navigator's tap handler checks `navigator.onLine` and the download state up-front; if the user is offline and the TL isn't downloaded, it opens the library sheet instead of attempting navigation. This dodges iOS Safari's "short-circuit offline navigations" behavior.
4. **Summary fact-precision audits are part of the standard new-TL ship checklist.** Add them after the main 5-persona audit, before parse + map generation. Catches transposition errors that the narrative audit misses because the personas are reading chapter prose, not compressed bullets.
5. **Backward audits scale.** Every new TL gives you fresh audit leverage on every older TL. Don't skip the backward pass, and don't assume older TLs are "done" — Meso has now received three separate rounds of factual corrections from later TLs' audits (first from Elam, then from this session's dedicated backward pass).

---

## File pointer quick-reference

- **Service worker:** `public/sw.js` (hand-rolled, no Workbox)
- **Offline client helper:** `src/lib/offline.ts` (download/delete/status store + hook)
- **Library sheet:** `src/components/tl-navigator/offline-library-sheet.tsx`
- **SW registrar:** `src/components/offline-registrar.tsx` (mounted in `app/layout.tsx`)
- **Offline manifest generator:** bottom of `scripts/parse-narratives.ts`, emits `public/offline/{tlId}.manifest.json`
- **Map prompts house style:** `map-prompts/README.md`
- **Summary writing spec:** `WRITING-RULES.md` "Rule: Chapter summaries"
- **5-persona audit skill:** `.claude/skills/audit-narrative.md`
- **Audit reports from this session:** `audits/*-backward-factcheck.md`, `audits/*-summary-factcheck.md`
- **Navigator TL entries:** `src/lib/navigator-tls.ts`
- **Accent colors:** `src/lib/accent-colors.ts` + `reference-data/tl-chains.ts`
- **Chapter accordion:** `src/components/chapter-accordion.tsx` (summary-selectable fix at the top of the component)

---

## Context the next session needs

- **All 5 TLs are shipped and live** on `stuffhappened.com`, now with offline-download support.
- **Offline feature architecture** — hand-rolled SW (`public/sw.js`), per-TL manifests generated by parse, library sheet in the navigator header. See `project_offline_reading.md` memory for the tripwire list.
- **Strict-rules map prompt workflow is non-negotiable** for any new maps. See `feedback_map_strict_rules.md`.
- **Cloudflare auto-deploy is live** — push to main, CF builds and ships within a few minutes. Don't manually `wrangler deploy` unless something is broken. First-reload-after-deploy typically runs the old SW; second reload picks up the new one.
- **`content/` and `public/offline/` are gitignored** — both are regenerated by `npm run parse`. Use `git add -f` for files inside `content/`.
- **Always provide "Changes made this pass"** numbered summary at the end.
- **Miles first, km in parens** for US reader.
- **Parentheses for inline definitions, not em-dashes.**
- **Discuss plans before writing** them, per `feedback_plan_mode`.
- **Claude writes every narrative; user reviews.**
- **The parse script's matchText regex is word-boundary strict.**
- **Offline tests must run on real production, not localhost.** Airplane mode + wifi off + `stuffhappened.com`. Loopback is always reachable and gives a false positive.
- **Backward Persona-E audits find real errors every time.** Don't skip them when a new TL ships.
- **Summary fact-precision audits catch what the narrative audit misses.** Bullets compress badly when rushed and are a high-signal place for factual drift.
