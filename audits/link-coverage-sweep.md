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
- **Excluded (other instance, IN PROGRESS):** the 5 newly-added Germanic civs
  (tlIds TBD — confirm before touching anything Germanic/new). Do NOT touch until shipped.
- **NOW IN SCOPE (shipped 2026-05-16 by other instance):** mississippian-culture,
  early-american-republic, antebellum-america, reconstruction, roaring-twenties,
  civil-rights-era — add to sweep queue (do when reaching the Americas/US chain).
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
| industrial-revolution | 20 | **DONE** | ad2ebf5 |
| indus-valley | 10 | **DONE** | d52cdb4 |
| vedic-period | 8 | **DONE** | 0dcf350 |
| maurya-empire | 8 | **DONE** | 39ed1b3 |
| post-maurya-kingdoms | 8 | **DONE** | fdfefda |
| gupta-empire | 8 | **DONE** (pre-existing malformed cross) | f03e13d |
| medieval-india | 8 | **DONE** | c3b2810 |
| delhi-sultanate | 8 | **DONE** | 6bb8df5 |
| mughal-empire | 9 | **DONE** | 4ad4f69 |
| modern-india | 15 | **DONE** | 6742d42 |
| ancient-china | 8 | **DONE** | 710f4c9 |
| shang-dynasty | 8 | **DONE** | a7affe5 |
| zhou-dynasty | 9 | **DONE** | a29a40c |
| qin-dynasty | 8 | **DONE** | 9766b20 |
| han-dynasty | 8 | **DONE** | 50d7a8e |
| six-dynasties | 8 | **DONE** | 0a094b9 |
| tang-song-china | 9 | **DONE** (pre-existing malformed cross) | ccde888 |
| yuan-dynasty | 8 | **DONE** | 9f82ef9 |
| ming-dynasty | 8 | **DONE** Chinese chain COMPLETE | 8299674 |
| early-dynastic-egypt | 8 | **DONE** | 33fbd53 |
| old-kingdom-egypt | 8 | **DONE** | d877787 |
| new-kingdom-egypt | 9 | **DONE** | 83962a8 |
| late-egypt | 8 | **DONE** Nile chain COMPLETE | a5ad68a |
| ancient-nubia | 8 | **DONE** | e06f4aa |
| kingdom-of-kush | 8 | **DONE** | 7d8974b |
| kingdom-of-aksum | 8 | **DONE** Nubian chain COMPLETE | 35812ff |
| mali-empire | 8 | **DONE** | 88177c8 |
| songhai-empire | 8 | **DONE** West African chain COMPLETE | b3d827d |
| elamite-civilization | 8 | **DONE** | a4c8b1e |
| persian-empire | 10 | **DONE** | f9ba14d |
| safavid-persia | 8 | **DONE** Persian chain COMPLETE | a79bbd8 |
| early-andean-civilizations | 8 | **DONE** | f881a6c |
| andean-kingdoms | 8 | **DONE** | 23aeea7 |
| middle-horizon-empires | 8 | **DONE** | d20e360 |
| inca-empire | 8 | **DONE** Andean chain COMPLETE | 026026c |
| olmec-civilization | 8 | **DONE** | b4afdb7 |
| maya-civilization | 8 | **DONE** | 0e32a86 |
| zapotec-civilization | 8 | **DONE** | 3f7b0c3 |
| teotihuacan | 8 | **DONE** | a22badf |
| aztec-empire | 8 | **DONE** Mesoamerican chain COMPLETE | d32e187 |
| srivijaya | 8 | **DONE** | +this |
| _Indian Subcontinent chain COMPLETE; next: Chinese Dynasties chain_ | | pending | |
| _next: mughal-empire, modern-india (finish Indian chain), then roadmap_ | | pending | |
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


## Pending-sweep queue additions
- US-history chain (now shipped, owe a sweep): mississippian-culture,
  early-american-republic, antebellum-america, reconstruction, roaring-twenties,
  civil-rights-era. PENDING SWEEP — newly shipped US civs.
