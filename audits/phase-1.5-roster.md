# Phase 1.5 Roster — the 17 new civilizations

**This file is the source of truth for the "~17 new TLs" backlog.** It was previously
only a *count* scattered across `CLAUDE.md`, `production-line-sync.md`, and the two
HANDOFFs, with no roster — that gap is now closed here. Derived from
`audits/coverage-audit.md` (§1 Finding 1, §2, §4, Recommended Actions).

Status: **DRAFT — pending user lock.** Nothing built. None of these are in
`navigator-tls.ts` yet. Per the agreed per-civ workflow (root `HANDOFF.md`), each
needs chapter/event counts OK'd before writing.

Date: 2026-05-16. Lane: maps/sync/chains (audits/ is in-lane; safe to commit here).

---

## The 17 (locked once user confirms)

| # | Proposed `tlId` | Title | Range | Chain placement | Gap it fills (coverage-audit) | Pri | Est. ch |
|---|-----------------|-------|-------|-----------------|-------------------------------|-----|---------|
| 1 | `world-war-one` | World War I | 1914–1918 | new `modern-conflicts` (1/3) | §4 CRITICAL — no WWI/WWII/Cold-War TL | CRITICAL | 12–15 |
| 2 | `world-war-two` | World War II | 1939–1945 | `modern-conflicts` (2/3) | §4 CRITICAL — incl. Holocaust thread | CRITICAL | 15–18 |
| 3 | `cold-war` | The Cold War | 1947–1991 | `modern-conflicts` (3/3) | §4 CRITICAL | CRITICAL | 15–18 |
| 4 | `medieval-japan` | Medieval Japan | 1185–1603 | Japanese, after `heian-japan` | §4 HIGH — 418-yr samurai-era hole | HIGH | 12–15 |
| 5 | `goryeo-korea` | Goryeo Korea | 918–1392 | Korean, between ancient/joseon | §4 HIGH — 457-yr hole | HIGH | 8–10 |
| 6 | `islamic-persia` | Islamic Persia | 651–1501 | Persian, between empire/safavid | §4 HIGH — 850-yr Persian-thread hole | HIGH | 10–13 |
| 7 | `muscovite-russia` | Muscovite Russia | 1240–1721 | Russian, between kievan/empire | §4 MED — 481-yr hole, Mongol yoke→Moscow | HIGH | 10–13 |
| 8 | `uyghur-steppe` | Uyghur & Qara-Khitai Steppe | 744–1206 | Steppe bridge, gokturk→mongol | §1 Finding 1 HIGH — 462-yr steppe gap | HIGH | 8 |
| 9 | `babylon-to-persia` | Babylon to Persia in Mesopotamia | −626–651 | Mesopotamian bridge | §1 #2 CRITICAL — 1,359-yr gap | CRITICAL | 10–13 |
| 10 | `age-of-exploration` | The Age of Exploration | 1415–1700 | new `atlantic-world` (1/3) | §4 HIGH — colonial/Atlantic void | HIGH | 12–15 |
| 11 | `atlantic-slave-trade` | The Atlantic Slave Trade | 1500–1888 | `atlantic-world` (2/3) | §4 HIGH | HIGH | 10–12 |
| 12 | `latin-american-independence` | Latin American Independence | 1808–1903 | `atlantic-world` (3/3) | §4 HIGH | HIGH | 10–13 |
| 13 | `swahili-coast` | The Swahili Coast | 800–1700 | new East-African thread | §4 HIGH — no Swahili/Kilwa | HIGH | 8 |
| 14 | `great-zimbabwe` | Great Zimbabwe | 1100–1700 | East-African / Southern Africa | §4 HIGH — no Southern Africa | HIGH | 8 |
| 15 | `ethiopian-empire` | The Ethiopian Empire | 1137–1974 | Nubian/Aksum successor thread | §4 HIGH — Zagwe/Solomonic | HIGH | 10–12 |
| 16 | `mainland-southeast-asia` | Mainland Southeast Asia | 849–1767 | SE Asian mainland (Bagan/Ayutthaya/Lan Xang) | §4 MED — Theravada mainland | MEDIUM | 10–13 |
| 17 | `tibetan-empire` | The Tibetan Empire | 618–1642 | standalone (Himalayan) | §4 LOW — no Tibet TL | LOW | 8 |

**Deferred / not in the 17 (LOW, parked):** Eastern North America (Hopewell/Adena +
Haudenosaunee), Oceania beyond Polynesia (Aboriginal Australia / Aotearoa-Māori).
Listed in coverage-audit §4 LOW; cut to keep the count at 17. Re-add by swapping
out a LOW slot if you'd rather.

---

## New chains this introduces (for `reference-data/tl-chains.ts`)

- **`modern-conflicts`** — world-war-one → world-war-two → cold-war. (Note: the
  coverage audit records this chain was *explicitly removed* from `tl-chains.ts`
  because the TLs didn't exist; building #1–3 reinstates it. Phase 2's War module
  per `memory/project_phase2_plan` is a *different* concern — confirm routing.)
- **`atlantic-world`** — age-of-exploration → atlantic-slave-trade →
  latin-american-independence.
- **East-African** thread — swahili-coast + great-zimbabwe + ethiopian-empire:
  decide whether one chain or standalones (they don't form a clean succession).

## Chain insertions into existing chains

- `medieval-japan` into Japanese after `heian-japan`, before `edo-japan`.
- `goryeo-korea` into Korean between `ancient-korea` and `joseon-korea`.
- `islamic-persia` into Persian between `persian-empire` and `safavid-persia`.
- `muscovite-russia` into Russian between `kievan-rus` and `russian-empire`.
- `uyghur-steppe` into Central Asian Steppe between `gokturk-khaganate` and
  `mongol-empire`.
- `babylon-to-persia` into Mesopotamian Succession between `assyrian-empire` and
  `islamic-golden-age`.

## Open scoping questions (need user calls before building)

1. **WWII / Holocaust** — one TL with a Holocaust thread, or split it out (would
   make 18).
2. **East Africa** — one chain or three standalones for #13–15.
3. **`ethiopian-empire` range** — 1137–1974 is wide (Zagwe → Haile Selassie); may
   want to cap earlier or split Solomonic vs modern.
4. **Phase-2 War-module overlap** — #1–3 (the conflicts) vs the planned 4-mode
   App War module (`memory/project_phase2_plan`). Decide whether these are
   reader-TLs in this app or belong to Phase 2.
5. **Granularity swaps** — any LOW item (#17, or the parked Hopewell/Oceania set)
   you'd rather promote in place of a HIGH.

## Build order (proposed once locked)

CRITICAL first (#9 Mesopotamian bridge, #1–3 conflicts), then HIGH chain-bridges
(#6 #7 #8) and the famous national holes (#4 #5), then the Atlantic/African/SE-Asia
thematic set (#10–16), #17 last. Per-civ pipeline is the agreed workflow in root
`HANDOFF.md` §"The per-civ workflow".
