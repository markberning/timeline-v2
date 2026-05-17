# Production-Line Sync Audit

Read-only reconciliation of the content production line. Authoritative TL
registry: `src/lib/navigator-tls.ts` (100 TLs, **all `hasContent: true`**).
No files were modified. `content/.*-links-*.json` and `reference-data/*.json`
were not opened/parsed (presence-only).

Date: 2026-05-16. Branch: main.

---

## (a) Reconciliation Matrix

| Source | Count | Matches navigator (100)? | Discrepancy |
|---|---|---|---|
| `src/lib/navigator-tls.ts` | 100 TL entries, 100 with `hasContent: true` | — (authority) | none |
| `narratives/{tlId}.md` | 100 | ✅ exact 1:1 | none |
| `narratives/{tlId}.summaries.json` | 100 | ✅ exact 1:1 | none |
| `scripts/parse-narratives.ts` NARRATIVE_FILES | 100 | ✅ exact 1:1 | none |
| `reference-data/{tlId}.json` | 101 files | 100 cover all nav ids | **1 orphan: `medieval-europe.json`** (no nav id) |
| `public/maps/{tlId}/` folders | 98 | 97 map to nav ids | **3 nav ids have no map folder; 1 folder (`ancient-japan`) has no nav id** |
| `reference-data/tl-chains.ts` active `TL_CHAINS` | 88 distinct timelineIds | all 88 exist in navigator | **0 broken refs; 12 navigator TLs are dangling (in no chain)** |

Set-comparison results (exact):

- nav ids missing a `narratives/*.md`: **none**
- `narratives/*.md` not a nav id: **none**
- nav ids missing a `*.summaries.json`: **none**
- nav ids missing from `NARRATIVE_FILES`: **none**
- `NARRATIVE_FILES` entries not a nav id: **none**
- nav ids missing a `reference-data/*.json`: **none**
- `reference-data/*.json` not a nav id: **`medieval-europe`**
- nav ids with no `public/maps/<id>/` folder: **`asuka-nara-japan`, `heian-japan`, `prehistoric-japan`**
- `public/maps/*` folders not a nav id: **`ancient-japan`**
- nav ids in no active chain (dangling): **`al-andalus`, `ancestral-puebloans`, `ancient-israel`, `carthage`, `dai-viet`, `majapahit`, `mississippian-culture`, `phoenicia`, `polynesian-voyagers`, `teotihuacan`, `umayyad-caliphate`, `zapotec-civilization`** (12)
- active chain timelineIds not in navigator: **none**

---

## (b) Inconsistencies, by severity

### HIGH

**H1 — Map folders out of sync with the Japan split (4 issues, 1 stale folder).**
CLAUDE.md states the `ancient-japan` omnibus was split into `prehistoric-japan` /
`asuka-nara-japan` / `heian-japan`. Reality on disk:
- The split is COMPLETE for narratives, summaries, reference-data, NARRATIVE_FILES,
  and navigator (all three new ids fully present; no `ancient-japan` narrative or
  `reference-data/ancient-japan.json`).
- The split is INCOMPLETE for maps: there is **no `public/maps/prehistoric-japan/`,
  `public/maps/asuka-nara-japan/`, or `public/maps/heian-japan/`**. The old
  **`public/maps/ancient-japan/` folder still exists** with 8 chapter WebPs
  (`chapter-1.webp` … `chapter-8.webp`) and no matching navigator id.
- Net effect: 3 shipped TLs (`prehistoric-japan`, `asuka-nara-japan`,
  `heian-japan`) have `hasContent: true` but **no chapter maps will be served**.
  `parse-narratives.ts` silently emits an empty `maps: []` for them (it only adds
  a map URL when the WebP exists on disk — lines 599–602), so the reader shows
  no maps and the offline manifest has zero maps for these three TLs.
- This directly contradicts CLAUDE.md line 154: *"Maps pending Gemini
  generation: none — all shipped TLs have chapter maps"*. **At least 3 shipped
  TLs do not.** Maps for the 3 Japan TLs must be generated (Gemini), or the old
  `ancient-japan/` WebPs split/renamed across the three new folders, before the
  ~17 new TLs are added (otherwise the gap is masked by the volume of new work).

**Note on the prompt's "98 vs 100" framing:** the difference is *not* the 5
Germanic TLs (those all have map folders — verified `germanic-tribes`,
`the-goths`, `migration-period`, `anglo-saxon-england`, `vendel-scandinavia`
present). It is exactly: −3 missing (the Japan split) +1 stale (`ancient-japan`)
= 99 distinct ids covered out of 100, with one extra non-id folder, giving the
98 folder count. `shang-dynasty/` and `zhou-dynasty/` map folders DO exist (the
old `ancient-china` omnibus split is fully done on the maps side; only Japan is
half-done).

### MEDIUM

**M2 — Orphan reference-data file `reference-data/medieval-europe.json`.**
The `medieval-europe` omnibus was split into `early-medieval-europe` /
`high-medieval-europe` / `late-medieval-europe` (all three present everywhere).
The pre-split `reference-data/medieval-europe.json` was never deleted. It is
inert (no navigator id, no NARRATIVE_FILES entry, never loaded by
`parse-narratives.ts` since it iterates NARRATIVE_FILES), but it is dead weight
that will confuse the next person doing a reference-data pass and inflates the
refdata file count to 101. Recommend deletion (deferred — another session is
mid-edit in `reference-data/`; do NOT delete now).

**M3 — 12 dangling navigator TLs (in no active chain).** Not necessarily a
defect — CLAUDE.md explicitly calls some "standalone". But the set on disk vs.
the set CLAUDE.md *labels* standalone disagree:
- CLAUDE.md "**Standalone:**" line lists only: `phoenicia`,
  `polynesian-voyagers`, `ancient-israel`, `carthage`, `mississippian-culture`
  (5), plus `al-andalus` is called standalone on the Western European line.
- Actually dangling in `tl-chains.ts`: those 6 **plus** `ancestral-puebloans`,
  `dai-viet`, `majapahit`, `teotihuacan`, `umayyad-caliphate`,
  `zapotec-civilization` (12 total).
- `teotihuacan` and `zapotec-civilization` are documented in CLAUDE.md under
  **Mesoamerican** as if chained, but the active `mesoamerican` chain in
  `tl-chains.ts` is only `olmec → maya → aztec` (lines 70–73). They are NOT in
  it. Same for the **SE Asian Maritime** roadmap line listing
  `dai-viet`/`majapahit` as chained — the active `southeast-asian-maritime`
  chain is only `srivijaya → khmer-empire` (lines 170–173).
- `umayyad-caliphate` is described on the CLAUDE.md "Near East" line as
  `umayyad-caliphate → islamic-golden-age` but there is **no chain containing
  `umayyad-caliphate`** in `tl-chains.ts`.
- `ancestral-puebloans` is fully shipped (navigator, narrative, summaries,
  refdata, map folder, `hasContent: true`) but appears **nowhere in CLAUDE.md's
  roadmap** and only in the commented-out PLANNED section of `tl-chains.ts`
  (line 354, `(ancestral-puebloans — NEW)`). It is an undocumented shipped TL.

Severity is MEDIUM because the reader UI degrades gracefully for unchained TLs,
but the roadmap text actively misleads about which TLs are chained.

### LOW

**L4 — CLAUDE.md File Structure comment counts are stale (lines 63–64).**
- Line 63: `navigator-tls.ts — 95 navigator TLs with hasContent flag (76 shipped)`.
  Reality: **100** navigator TLs, **100 shipped** (`hasContent: true` on every
  entry).
- Line 64: `globe2-data.ts — 86 globe civs, 10 region groups`. Not verified
  against `globe2-data.ts` in this audit (out of scope: prompt scoped to the
  named sources), flagged only because it sits in the same stale block; verify
  separately before trusting it.

**L5 — CLAUDE.md roadmap header + "Remaining" + American Republic line stale.**
- Line 128: `89 of 100 navigator TLs shipped.` Reality: **100 of 100**.
- Line 150: American Republic shows `🚧 reconstruction · 🚧 roaring-twenties ·
  🚧 civil-rights-era`. All three are now `hasContent: true` with full
  narrative/summaries/refdata/maps. The 🚧 marks are wrong.
- Line 152: the entire **Remaining (8)** block is obsolete — its premise
  ("only TLs left without `hasContent: true`") is false; **zero** TLs lack
  `hasContent: true`. Both sub-lists (3 North American + 5 Germanic) are
  shipped. Note line 146 (Northern European) ALREADY shows the Germanic
  sub-chain as ✅ shipped — so line 152 directly contradicts line 146 within
  the same file.

**L6 — Internal CLAUDE.md contradiction on maps.** Line 154 says "none pending /
all shipped TLs have chapter maps" while H1 proves 3 shipped TLs
(`prehistoric-japan`, `asuka-nara-japan`, `heian-japan`) have none. The line is
both internally asserted-true and factually false.

---

## (c) Precise corrective edits

> All edits below are presence-verified against current file content. Do not
> apply the `reference-data/` deletion now (concurrent session). Do not
> git add/commit.

### CLAUDE.md

**Edit 1 — line 63** (File Structure comment):

OLD:
```
    navigator-tls.ts            — 95 navigator TLs with hasContent flag (76 shipped)
```
NEW:
```
    navigator-tls.ts            — 100 navigator TLs with hasContent flag (100 shipped)
```

**Edit 2 — line 128** (roadmap header):

OLD:
```
89 of 100 navigator TLs shipped. Narratives follow chain order from `reference-data/tl-chains.ts`. (medieval-europe omnibus split into early/high/late; ancient-japan omnibus split into prehistoric/asuka-nara/heian; the Northern European chain gained a 5-TL Germanic sub-chain bridging the old 50 BCE–793 CE gap.)
```
NEW:
```
100 of 100 navigator TLs shipped (every navigator entry has hasContent: true). Narratives follow chain order from `reference-data/tl-chains.ts`. (medieval-europe omnibus split into early/high/late — stale reference-data/medieval-europe.json still on disk, slated for deletion; ancient-japan omnibus split into prehistoric/asuka-nara/heian — chapter maps for the 3 new Japan TLs NOT yet generated, stale public/maps/ancient-japan/ folder still on disk; the Northern European chain gained a 5-TL Germanic sub-chain bridging the old 50 BCE–793 CE gap.)
```

**Edit 3 — line 150** (American Republic, clear the 🚧 marks):

OLD:
```
**American Republic:** ✅ early-american-republic (18 ch) · ✅ antebellum-america (18 ch) · 🚧 reconstruction · 🚧 roaring-twenties · 🚧 civil-rights-era — chain: 1776 Declaration → republic finds its feet (1776–1828) → expansion & the slavery crisis to 1865 → Reconstruction → 1920s → Civil Rights
```
NEW:
```
**American Republic:** ✅ early-american-republic (18 ch) · ✅ antebellum-america (18 ch) · ✅ reconstruction · ✅ roaring-twenties · ✅ civil-rights-era — chain: 1776 Declaration → republic finds its feet (1776–1828) → expansion & the slavery crisis to 1865 → Reconstruction → 1920s → Civil Rights
```

**Edit 4 — line 152** (replace the obsolete Remaining block):

OLD:
```
**Remaining (8):** *North American (3):* reconstruction · roaring-twenties · civil-rights-era. *Germanic sub-chain (5, spine laid):* germanic-tribes · the-goths · migration-period · anglo-saxon-england · vendel-scandinavia. These are the only TLs left without `hasContent: true` in `navigator-tls.ts` (the authoritative source; the ✅ marks above can lag behind it).
```
NEW:
```
**Remaining (0):** all 100 navigator TLs have `hasContent: true`. The next work is the ~17 new TLs (not yet added to `navigator-tls.ts`).
```

**Edit 5 — line 154** (maps status — make it true):

OLD:
```
**Maps pending Gemini generation:** none — all shipped TLs have chapter maps, including the 5 Germanic sub-chain TLs (48 maps generated, audited, optimized). New TLs go through `scripts/generate-maps.mjs <tlId>` (gemini-3-pro-image-preview), audit, regen if needed, then `scripts/optimize-maps.mjs`.
```
NEW:
```
**Maps pending Gemini generation:** prehistoric-japan, asuka-nara-japan, heian-japan — the ancient-japan omnibus split has no chapter-map folders for the 3 new TLs (stale public/maps/ancient-japan/ still holds the old 8 WebPs). All other 97 shipped TLs have chapter maps (incl. the 5 Germanic sub-chain TLs). New/split TLs go through `scripts/generate-maps.mjs <tlId>` (gemini-3-pro-image-preview), audit, regen if needed, then `scripts/optimize-maps.mjs`.
```

**Edit 6 — line 142** (SE Asian Maritime: stop implying dai-viet/majapahit are chained). The active `southeast-asian-maritime` chain is only `srivijaya → khmer-empire`.

OLD:
```
**SE Asian Maritime:** ✅ srivijaya (8 ch) · ✅ khmer-empire (10 ch) · ✅ dai-viet (13 ch) · ✅ majapahit (10 ch)
```
NEW:
```
**SE Asian Maritime:** ✅ srivijaya (8 ch) · ✅ khmer-empire (10 ch) — active `southeast-asian-maritime` chain is srivijaya → khmer-empire only · ✅ dai-viet (13 ch) · ✅ majapahit (10 ch) — dai-viet & majapahit are shipped but DANGLING (in no chain in tl-chains.ts)
```

**Edit 7 — line 139** (Mesoamerican: teotihuacan/zapotec are dangling, not chained). Active `mesoamerican` chain is only `olmec → maya → aztec`.

OLD:
```
**Mesoamerican:** ✅ olmec-civilization (8 ch) · ✅ maya-civilization (8 ch) · ✅ zapotec-civilization (8 ch) · ✅ teotihuacan (8 ch) · ✅ aztec-empire (8 ch)
```
NEW:
```
**Mesoamerican:** ✅ olmec-civilization (8 ch) · ✅ maya-civilization (8 ch) · ✅ aztec-empire (8 ch) — active `mesoamerican` chain is olmec → maya → aztec only · ✅ zapotec-civilization (8 ch) · ✅ teotihuacan (8 ch) — shipped but DANGLING (in no chain)
```

**Edit 8 — line 130** (Near East: umayyad-caliphate is not actually in a chain).

OLD:
```
**Near East:** ✅ umayyad-caliphate (8 ch) → islamic-golden-age (links via Abbasid revolution)
```
NEW:
```
**Near East:** ✅ umayyad-caliphate (8 ch) — shipped but DANGLING (no chain in tl-chains.ts; the umayyad → islamic-golden-age link is prose/cross-link only). islamic-golden-age is chained under Mesopotamian Succession.
```

**Edit 9 — line 149** (Standalone: list the real dangling set, add ancestral-puebloans which is shipped but undocumented).

OLD:
```
**Standalone:** ✅ phoenicia (8 ch) · ✅ polynesian-voyagers (8 ch) · ✅ ancient-israel (8 ch) · ✅ carthage (8 ch) · ✅ mississippian-culture (10 ch) — Cahokia & the mound-builder world 800–1600, archaeological discovery-frame structure
```
NEW:
```
**Standalone / dangling (in no tl-chains.ts chain):** ✅ phoenicia (8 ch) · ✅ polynesian-voyagers (8 ch) · ✅ ancient-israel (8 ch) · ✅ carthage (8 ch) · ✅ mississippian-culture (10 ch) — Cahokia & the mound-builder world 800–1600 · ✅ ancestral-puebloans (Mesa Verde & Chaco, -100–1300) — shipped but absent from this roadmap until now · ✅ al-andalus (also listed under Western European) · plus teotihuacan, zapotec-civilization, dai-viet, majapahit, umayyad-caliphate (cross-listed under their region rows above). Full dangling set = 12 TLs.
```

### reference-data/tl-chains.ts

No broken references (every active chain timelineId exists in navigator). The
following are *recommended additions* to eliminate the dangling-TL roadmap
mismatch — apply only if these TLs should be chained (product decision):

1. **`southeast-asian-maritime` chain (lines 165–174)** currently ends at
   `khmer-empire`. If `dai-viet` and `majapahit` belong here, append entries
   after `khmer-empire` (currently the last, no transition). Suggested:
   - change `{ timelineId: 'khmer-empire' }` →
     `{ timelineId: 'khmer-empire', transition: '<1-2 sentences bridging Khmer decline to Đại Việt / Majapahit>' }`
   - add `{ timelineId: 'dai-viet', transition: '...' }` and
     `{ timelineId: 'majapahit' }`
   (Order/transitions are a writing task — not auto-generatable from data.)

2. **`mesoamerican` chain (lines 65–75)**: if `teotihuacan` / `zapotec-civilization`
   belong, decide insertion order against year ranges (teotihuacan -100→550,
   zapotec -1500→1521, olmec -1500→-400, maya -1000→1697, aztec 1345→1521) and
   add entries with transitions. Year ranges overlap heavily, so chain order is
   an editorial call, not derivable mechanically.

3. **`umayyad-caliphate`**: no chain exists. Either create an "Islamic
   Civilization" chain (the commented PLANNED block lines 304–308 sketches
   `umayyad-caliphate → islamic-golden-age → (mamluk — NEW) → ottoman-empire`;
   note `islamic-golden-age` and `ottoman-empire` would then be multi-chain),
   or accept umayyad as permanently standalone and fix CLAUDE.md (Edit 8) only.

4. **`ancestral-puebloans` / `mississippian-culture`**: the PLANNED block
   (lines 353–357) sketches a `North American Indigenous` chain
   `(ancestral-puebloans) → (cahokia-mississippian) → (haudenosaunee — NEW)`.
   Both component TLs now exist and are shipped (`mississippian-culture` is the
   real id, not `cahokia-mississippian`). Could be promoted to an active chain
   with 2 entries now (haudenosaunee is the only NEW one needed).

No edits are *required* in tl-chains.ts for correctness — all current entries
resolve. The above are roadmap-alignment options; the chain-vs-year-range check
found no ordering contradiction inside any *existing* active chain.

### src/lib/navigator-tls.ts

No corrective edits needed. All 100 entries are well-formed, all have
`hasContent: true`, every id has a matching narrative, summaries, reference-data,
and NARRATIVE_FILES entry. (The only navigator-adjacent defect is the missing
map folders for the 3 Japan TLs, which is a `public/maps/` problem, not a
navigator-tls.ts problem.)

### public/maps/ (not edited — recorded for the fix owner)

- Generate maps for `prehistoric-japan`, `asuka-nara-japan`, `heian-japan` via
  `node --env-file=.env.local scripts/generate-maps.mjs <tlId>` then
  `node scripts/optimize-maps.mjs` (per CLAUDE.md pipeline step 12), OR
  re-slice the 8 `public/maps/ancient-japan/chapter-*.webp` across the three new
  folders if the old omnibus maps still match the new chapter splits.
- After the new folders exist, delete the stale `public/maps/ancient-japan/`
  folder (no navigator id references it).

### reference-data/ (not edited — concurrent session active)

- Delete `reference-data/medieval-europe.json` (orphan; superseded by
  early/high/late split). Defer until the concurrent reference-data edit
  session finishes.

---

## Summary of severities

| ID | Severity | One-line |
|---|---|---|
| H1 | HIGH | 3 shipped Japan TLs have no map folders; stale `ancient-japan/` folder remains; CLAUDE.md line 154 falsely says "all shipped TLs have chapter maps" |
| M2 | MEDIUM | Orphan `reference-data/medieval-europe.json` (split superseded it) |
| M3 | MEDIUM | 12 dangling TLs; CLAUDE.md roadmap mislabels teotihuacan/zapotec/dai-viet/majapahit/umayyad as chained; `ancestral-puebloans` shipped but undocumented |
| L4 | LOW | CLAUDE.md line 63 stale ("95 navigator TLs (76 shipped)" → 100/100) |
| L5 | LOW | CLAUDE.md line 128/150/152 stale ("89 of 100", 🚧 marks, obsolete Remaining(8) block — contradicts line 146) |
| L6 | LOW | CLAUDE.md line 154 internally contradicted by H1 |
