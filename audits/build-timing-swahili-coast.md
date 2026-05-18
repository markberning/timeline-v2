# Build timing ledger — swahili-coast — first build the optimized way (wall start 9:34am 2026-05-18)

Started: 2026-05-18T16:37:02.382Z

| wall clock | step duration | step |
|---|---|---|
| 09:38:22 | 1m 20.4s | Setup: worktree+deps+timer+topology+reference-pattern study |
| 09:39:51 | 1m 29.0s | Study WRITING-RULES + all file formats (writer brief inputs) |
| 09:42:23 | 2m 32.1s | Author spec part 1/2: chapter-movement map + framing notes (SERIAL — single-author bottleneck, measured) |
| 09:47:06 | 4m 42.2s | Author spec part 2/2: 106-event pool + 5 spans across 8 categories (SERIAL — measured) |
| 09:48:45 | 1m 39.5s | Register civ (navigator-tls + NARRATIVE_FILES) — end of SERIAL spec phase |
| 10:02:45 | 13m 59.9s | PARALLEL chapter drafting: 8 chapters by 4 writers concurrent (wall=longest writer; serial-sum would be ~3x) |
| 10:03:38 | 52.64s | Coordinator assemble: 8 drafts -> narratives/swahili-coast.md, cleanup |
| 10:13:07 | 9m 29.3s | PARALLEL audit: 4 personas (A/B/D/E) concurrent, each wrote its report file |
| 10:15:11 | 2m 4.6s | Coordinator: merge 4 persona reports + triage into ONE batched fix list (Pillar 1) |
| 10:23:19 | 8m 7.9s | PARALLEL apply: 4 fixers concurrent (batched fix list, per-chapter isolated copies) |
| 10:33:37 | 10m 17.9s | Coordinator voice/continuity pass (1 agent, whole-book: de-dup defs, vary source-codas, seams, khums) |
| 10:33:53 | 15.98s | ONE scoped rebuild: npm run parse --tl=swahili-coast (Pillar 2 — 5.2s vs full-corpus minutes) |
| 10:45:40 | 11m 46.3s | PARALLEL links+summaries (4 agents) + coordinator assemble + born-verified batch fix (0 dead, lint 0 ERR) |
| 10:49:58 | 4m 18.5s | PARALLEL backward cross-cultural pass: 21 findings into 7 reference TLs (5 agents, step-11 gate, 0 new lint err) |
| 10:52:10 | 2m 12.4s | Author map-prompt spec (8 chapters, SERIAL coordinator — like the chapter spec) |
| 11:09:29 | 17m 18.0s | G4 maps: Gemini gen + vision-QA + auto-regen + optimize (background, exit 0) |
| 11:20:39 | 11m 10.2s | G4 maps regen ch2 + full re-audit: 8/8 PASS, optimized to webp (background) |
| 11:28:37 | 7m 58.5s | Full corpus parse (step 10, SERIAL — search index + all manifests, 7m31s, before ship) |
| 11:32:53 | 4m 15.7s | Coverage curation (waivers: link load-bearing / waive context-and-already-linked) + ship-check CLEAR + hasContent flip |
| 11:40:53 | 7m 59.9s | Full corpus parse #2 (post-flip, swahili-coast in search index) + ship-check re-confirm CLEAR |

## Summary — swahili-coast — first build the optimized way (wall start 9:34am 2026-05-18)

Total wall clock: **123m 51.1s**

Steps, slowest first:

| step duration | % of total | step |
|---|---|---|
| 17m 18.0s | 14.0% | G4 maps: Gemini gen + vision-QA + auto-regen + optimize (background, exit 0) |
| 13m 59.9s | 11.3% | PARALLEL chapter drafting: 8 chapters by 4 writers concurrent (wall=longest writer; serial-sum would be ~3x) |
| 11m 46.3s | 9.5% | PARALLEL links+summaries (4 agents) + coordinator assemble + born-verified batch fix (0 dead, lint 0 ERR) |
| 11m 10.2s | 9.0% | G4 maps regen ch2 + full re-audit: 8/8 PASS, optimized to webp (background) |
| 10m 17.9s | 8.3% | Coordinator voice/continuity pass (1 agent, whole-book: de-dup defs, vary source-codas, seams, khums) |
| 9m 29.3s | 7.7% | PARALLEL audit: 4 personas (A/B/D/E) concurrent, each wrote its report file |
| 8m 7.9s | 6.6% | PARALLEL apply: 4 fixers concurrent (batched fix list, per-chapter isolated copies) |
| 7m 59.9s | 6.5% | Full corpus parse #2 (post-flip, swahili-coast in search index) + ship-check re-confirm CLEAR |
| 7m 58.5s | 6.4% | Full corpus parse (step 10, SERIAL — search index + all manifests, 7m31s, before ship) |
| 4m 42.2s | 3.8% | Author spec part 2/2: 106-event pool + 5 spans across 8 categories (SERIAL — measured) |
| 4m 18.5s | 3.5% | PARALLEL backward cross-cultural pass: 21 findings into 7 reference TLs (5 agents, step-11 gate, 0 new lint err) |
| 4m 15.7s | 3.4% | Coverage curation (waivers: link load-bearing / waive context-and-already-linked) + ship-check CLEAR + hasContent flip |
| 2m 32.1s | 2.0% | Author spec part 1/2: chapter-movement map + framing notes (SERIAL — single-author bottleneck, measured) |
| 2m 12.4s | 1.8% | Author map-prompt spec (8 chapters, SERIAL coordinator — like the chapter spec) |
| 2m 4.6s | 1.7% | Coordinator: merge 4 persona reports + triage into ONE batched fix list (Pillar 1) |
| 1m 39.5s | 1.3% | Register civ (navigator-tls + NARRATIVE_FILES) — end of SERIAL spec phase |
| 1m 29.0s | 1.2% | Study WRITING-RULES + all file formats (writer brief inputs) |
| 1m 20.4s | 1.1% | Setup: worktree+deps+timer+topology+reference-pattern study |
| 52.64s | 0.7% | Coordinator assemble: 8 drafts -> narratives/swahili-coast.md, cleanup |
| 15.98s | 0.2% | ONE scoped rebuild: npm run parse --tl=swahili-coast (Pillar 2 — 5.2s vs full-corpus minutes) |

Finished: 2026-05-18T18:40:53.443Z
