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
| viking-age | 8 | **DONE** (Ch1–8) | 6791a73, 52c83c9, 7fcbf5b |
| celtic-cultures | 8 | **DONE** | 23619c7 |
| scythians | 8 | **DONE** (cross-civ focus) | 1bbd2e3 |
| xiongnu-huns | 8 | **DONE** (cross-civ focus) | 1aebfc0 |
| gokturk-khaganate | 8 | **DONE** (cross-civ focus) | 556d57c |
| mongol-empire | 9 | **DONE** (cross + ~44 glossary) | 481de5a |
| timurid-empire | 8 | **DONE** (cross 54 + glossary) | cb8dfac |
| minoan-civilization | 8 | **DONE** | f14d5f0 |
| mycenaean-civilization | 8 | **DONE** | 3505232 |
| ancient-greece | 8 | **DONE** (cross + Greek-vocab glossary) | 42c4be9 |
| ancient-rome | 10 | **DONE** | 319c994 |
| byzantine-empire | 12 | **DONE** | 4ccf60e |
| early-medieval-europe | 8 | **DONE** | 8596786 |
| high-medieval-europe | 8 | **DONE** | 16da4dd |
| late-medieval-europe | 8 | **DONE** | b2dd12b |
| renaissance-italy | 8 | **DONE** | ad23d3b |
| scientific-revolution | 20 | **DONE** | 88c507f |
| enlightenment | 20 | **DONE** | 3476a12 |
| industrial-revolution | 20 | **DONE** (cross top-up) | +this |
| _Western European chain COMPLETE_ | | | |
| _next: scientific-revolution (20ch), enlightenment (20ch), industrial-revolution (20ch)_ | | pending | |
| _Greco-Roman chain COMPLETE; next: roadmap order_ | | pending | |
| _next: byzantine-empire, then roadmap order_ | | pending | |
| _next: ancient-greece (Greco-Roman chain), then roadmap order_ | | pending | |
| _next: roadmap chain order (excl. 6 US-history civs)_ | | pending | |

> Benign-warning note: when a pre-existing cross-link has a longer matchText
> covering the same span (e.g. "rise of the Persian Empire" vs my "Persian
> Empire"), the redundant shorter entry no-ops with a "not found" warning.
> Harmless — the link still renders via the longer entry. Not worth cleaning per-civ.

### viking-age note
Norse-cosmology chapters (esp. Ch5) have many non-ASCII Old Norse terms
(Ragnarök, Mjölnir, seiðr, Æsir, blót…) intentionally NOT linked: matchText
ASCII rule + author already inline-defines them. Cross-civ + events + clean
ASCII proper nouns were the focus (cross-link coverage roughly doubled per ch).

### Method refinements learned
- Event apply must dedupe on **(eventId, matchText) pair**, not eventId alone —
  pre-existing non-ASCII matchTexts (e.g. `mycel haethen here` vs body `hæþen`)
  silently leave the event unlinked; add a parallel ASCII entry to fix.
- Known dead pool slug: `evt-iona-second-raid` → `Martyrdom_of_Blathmac` (404).
  Event link still works (covered via "Second Sack of Iona"); flag for a
  reference-data slug-repair pass later.

_(table filled as the sweep proceeds; one row per civ)_

> mongol-empire has many PRE-EXISTING malformed cross-link matchTexts
> (full-sentence fragments that never match) — flagged for a future
> cross-link-repair pass; not my regressions, left as-is.
