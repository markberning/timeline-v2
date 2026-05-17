# Phase 1.5 Roster — 17 missing civilizations (audit result)

**Source of truth for the missing-civ backlog.** Audit of the 100 shipped
navigator TLs against world-history coverage; gaps drawn from
`audits/coverage-audit.md` §1 Finding 1, §2, §4, and Recommended Actions, then
re-weighted by how thin actual coverage is per region.

**Wars are OUT of this roster.** WWI / WWII / Cold War are owned by the Phase 2
War module (`memory/project_phase2_plan`), not built as reader-TLs here. This
resolves the prior open scoping question.

Target: **exactly 17, no wars.** Status: **DRAFT — pending user lock.** Nothing
built; none in `navigator-tls.ts` yet. Per-civ build follows the agreed workflow
in root `HANDOFF.md`; chapter/event counts get OK'd before writing.

Date: 2026-05-16. Lane: maps/sync/chains (audits/ in-lane, safe to commit).

---

## The 17

### A. Chain-bridge TLs — fill gaps inside chains the reader sees as direct succession (highest structural priority)

| # | Proposed `tlId` | Title | Range | Inserts into | Gap | Pri | Est. ch |
|---|-----------------|-------|-------|--------------|-----|-----|---------|
| 1 | `babylon-to-persia` | Babylon to Persia | −626→651 | Mesopotamian, between `assyrian-empire` & `islamic-golden-age` | 1,359-yr gap (Neo-Babylon→Achaemenid→Parthian→Sasanian) | CRITICAL | 12–15 |
| 2 | `uyghur-steppe` | The Uyghur & Qara-Khitai Steppe | 744→1206 | Central Asian Steppe, between `gokturk-khaganate` & `mongol-empire` | 462-yr steppe gap | HIGH | 8 |
| 3 | `medieval-japan` | Medieval Japan (the Samurai era) | 1185→1603 | Japanese, between `heian-japan` & `edo-japan` | 418-yr Kamakura–Muromachi–Sengoku hole | HIGH | 12–15 |
| 4 | `goryeo-korea` | Goryeo Korea | 918→1392 | Korean, between `ancient-korea` & `joseon-korea` | 457-yr hole | HIGH | 8–10 |
| 5 | `islamic-persia` | Islamic Persia | 651→1501 | Persian, between `persian-empire` & `safavid-persia` | 850-yr Persian-thread hole | HIGH | 10–13 |
| 6 | `muscovite-russia` | Muscovite Russia | 1240→1721 | Russian, between `kievan-rus` & `russian-empire` | 481-yr hole (Mongol yoke → rise of Moscow) | HIGH | 10–13 |

### B. New `atlantic-world` chain — the early-modern global thread (currently absent)

| # | Proposed `tlId` | Title | Range | Chain | Pri | Est. ch |
|---|-----------------|-------|-------|-------|-----|---------|
| 7 | `age-of-exploration` | The Age of Exploration | 1415→1700 | `atlantic-world` 1/3 | HIGH | 12–15 |
| 8 | `atlantic-slave-trade` | The Atlantic Slave Trade | 1500→1888 | `atlantic-world` 2/3 | HIGH | 10–12 |
| 9 | `latin-american-independence` | Latin American Independence | 1808→1903 | `atlantic-world` 3/3 | HIGH | 10–13 |

### C. Africa — the largest void (100 TLs cover only Nile/Nubia/Aksum/Kush/Mali/Songhai)

| # | Proposed `tlId` | Title | Range | Chain placement | Pri | Est. ch |
|---|-----------------|-------|-------|-----------------|-----|---------|
| 10 | `swahili-coast` | The Swahili Coast | 800→1700 | new East-African thread | HIGH | 8 |
| 11 | `ethiopian-empire` | The Ethiopian Empire | 1137→1855 | Aksum successor (Nubian/Ethiopian) | HIGH | 10–12 |
| 12 | `great-zimbabwe` | Great Zimbabwe & Southern Africa | 1100→1700 | standalone / Southern-Africa | HIGH | 8 |
| 13 | `kingdom-of-kongo` | The Kingdom of Kongo | 1390→1914 | ties to `atlantic-world` thematically | HIGH | 8–10 |
| 14 | `benin-and-ife` | Benin & Ife | 1180→1897 | West-African forest-kingdom thread | MEDIUM | 8 |

### D. Other conspicuous regional voids

| # | Proposed `tlId` | Title | Range | Chain placement | Pri | Est. ch |
|---|-----------------|-------|-------|-----------------|-----|---------|
| 15 | `mainland-southeast-asia` | Mainland Southeast Asia | 849→1767 | SE-Asian mainland (Bagan/Ayutthaya/Lan Xang) | MEDIUM | 10–13 |
| 16 | `tibetan-empire` | The Tibetan Empire | 618→1642 | standalone (Himalayan) | MEDIUM | 8 |
| 17 | `haudenosaunee` | The Haudenosaunee Confederacy | 1142→1794 | extends `north-american-indigenous` (Hopewell/Adena as deep background) | MEDIUM | 8 |

---

## New chains / insertions for `reference-data/tl-chains.ts`

- **New chain `atlantic-world`** — age-of-exploration → atlantic-slave-trade →
  latin-american-independence.
- **6 insertions into existing chains** — `babylon-to-persia` (Mesopotamian),
  `uyghur-steppe` (Steppe), `medieval-japan` (Japanese), `goryeo-korea` (Korean),
  `islamic-persia` (Persian), `muscovite-russia` (Russian).
- **East-African grouping (#10–12)** — likely standalones, not a clean
  succession; possibly a loose `east-african` chain. Decide at lock.
- `haudenosaunee` extends the existing `north-american-indigenous` chain
  (ancestral-puebloans → mississippian-culture → haudenosaunee).

## Resolved scoping decisions

- **Wars → Phase 2.** WWI/WWII/Cold War are not in this roster.
- **Samurai Japan → IN** as `medieval-japan` (#3). User-confirmed.
- **Count = 17, wars excluded.** Met exactly.

## Open scoping questions (need user calls before lock)

1. **Africa weighting** — 5 African TLs (#10–14) is the biggest single regional
   add. Is that the right depth, or trim one (likely `benin-and-ife`, lowest pri)?
2. **`ethiopian-empire` range** — 1137–1855 stops before modern Ethiopia
   (Tewodros/Menelik/Adwa/Selassie). Cap there, or extend?
3. **Mainland SE Asia** — one TL (#15) covering Bagan + Ayutthaya + Lan Xang, or
   split (would exceed 17)?
4. **#17 slot** — `haudenosaunee` vs. parked alternates below. Oceania
   (Aboriginal Australia / Māori) is currently *not* in the 17.

## Parked overflow (swap candidates for any slot above)

Aboriginal Australia · Māori / Aotearoa · Champa (referenced in `dai-viet`
cross-links) · Sri Lanka / Anuradhapura · Zulu Kingdom · Pacific Northwest
(Haida/Tlingit) · Kanem-Bornu / Hausa city-states. All are real gaps; cut to
hold the count at 17.

## Build order (once locked)

CRITICAL first (#1 Mesopotamian bridge), then the HIGH chain-bridges
(#2–6) and the Atlantic chain (#7–9), then Africa (#10–14), then #15–17.
Per-civ pipeline = root `HANDOFF.md` §"The per-civ workflow".
