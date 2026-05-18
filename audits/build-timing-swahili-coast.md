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
