# Link-Coverage Sweep — every chapter of every civ

Goal: bring glossary/event/cross-link coverage to the agreed bar (proper nouns +
concepts, no cap) across **all 89 shipped civs**, chapter by chapter, using the
3-pass detector. viking-age Ch1 is the validated template (see
`viking-age.glossary-baseline.ch1.md`).

## Method (per chapter)
1. **Detect** — 3 passes: (a) author-bolded terms with no link of any type;
   (b) capitalized proper nouns unlinked; (c) lowercase specialist/jargon vocab
   the author does NOT inline-define.
2. **Route** — semantic judgment, not string match: cross-civ subject → cross-link;
   matching pool event → event link; else → glossary. Generic concept slugs
   (Longhouse, Mask, Temple…) get a culture-specific image sanity check.
3. **Validate** — every wikiSlug against live Wikipedia (User-Agent required).
4. **Apply** — merge into `content/.{glossary,event,cross}-links-<tlId>.json` (dedupe).
5. **Parse + verify** anchors in `content/<tlId>.json`.
6. **Commit per civ immediately**, file-scoped; `git pull --rebase` before push.

## Coordination (anti-clobber)
- **Excluded (other instance):** mississippian-culture, early-american-republic,
  antebellum-america, reconstruction, roaring-twenties, civil-rights-era. Do NOT touch.
- Never stage `public/search-index.json` or `CLAUDE.md` (other instance owns).
- Never `git add -A` / `commit -a` / `checkout`/`reset` the tree. Stage exact files only.
- `content/<tlId>.json` is gitignored (build artifact) — never commit it.

## Status ledger
Order = roadmap chain order. `done` = all chapters swept + committed.

| TL | chapters | status | commit |
|---|---|---|---|
| viking-age | 8 | Ch1–2 done; Ch3–8 pending | 6791a73 (Ch1) |
| _next: viking-age Ch3–8, then roadmap order (excl. 6 US-history civs)_ | | pending | |

### Method refinements learned
- Event apply must dedupe on **(eventId, matchText) pair**, not eventId alone —
  pre-existing non-ASCII matchTexts (e.g. `mycel haethen here` vs body `hæþen`)
  silently leave the event unlinked; add a parallel ASCII entry to fix.
- Known dead pool slug: `evt-iona-second-raid` → `Martyrdom_of_Blathmac` (404).
  Event link still works (covered via "Second Sack of Iona"); flag for a
  reference-data slug-repair pass later.

_(table filled as the sweep proceeds; one row per civ)_
