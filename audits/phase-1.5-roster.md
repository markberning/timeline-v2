# Phase 1.5 Roster — 17 missing civilizations (audit result)

**Source of truth for the missing-civ backlog.** Audit of the 100 shipped
navigator TLs against world-history coverage; gaps drawn from
`audits/coverage-audit.md` §1 Finding 1, §2, §4, and Recommended Actions, then
re-weighted by how thin actual coverage is per region.

**Wars are OUT of this roster.** WWI / WWII / Cold War are owned by the Phase 2
War module (`memory/project_phase2_plan`), not built as reader-TLs here. This
resolves the prior open scoping question.

Target: **exactly 17, no wars.** Status: **✅ LOCKED 2026-05-17** — user agreed
to the 17 as proposed; the four open scoping questions resolve to their proposed
defaults (Africa = 5 TLs incl. benin-and-ife; ethiopian-empire 1137–1855;
mainland-southeast-asia as one TL; slot 17 = haudenosaunee; parked overflow
unused). First build = pipeline trial on one civ. Nothing
built; none in `navigator-tls.ts` yet. Per-civ build follows the gated
**CLAUDE.md "Content Pipeline"** (steps 0–14); the chapter list + throughlines
get OK'd before writing (step 0.5 / G8 gate).

Date: 2026-05-16. Lane: maps/sync/chains (audits/ in-lane, safe to commit).

---

## The 17

### A. Chain-bridge TLs — fill gaps inside chains the reader sees as direct succession (highest structural priority)

| # | Proposed `tlId` | Title | Range | Inserts into | Gap | Pri | Est. ch |
|---|-----------------|-------|-------|--------------|-----|-----|---------|
| 1 | ~~`babylon-to-persia`~~ → `babylonia-under-empire` (RESCOPED) | Babylonia Under Empire | −539→651 | standalone / enrichment (NOT a chain-bridge) | **DROPPED as scoped — see note ▼** | ~~CRITICAL~~ **LOW** | ~~12–15~~ **6–8** |
| 2 | `uyghur-steppe` | The Uyghur & Qara-Khitai Steppe | 744→1206 | Central Asian Steppe, between `gokturk-khaganate` & `mongol-empire` | 462-yr steppe gap | HIGH | 8 |
| 3 | `medieval-japan` | Medieval Japan (the Samurai era) | 1185→1603 | Japanese, between `heian-japan` & `edo-japan` | 418-yr Kamakura–Muromachi–Sengoku hole | HIGH | 12–15 |
| 4 | `goryeo-korea` | Goryeo Korea | 918→1392 | Korean, between `ancient-korea` & `joseon-korea` | 457-yr hole | HIGH | 8–10 |
| 5 | `islamic-persia` | Islamic Persia | 651→1501 | Persian, between `persian-empire` & `safavid-persia` | 850-yr Persian-thread hole | HIGH | 10–13 |
| 6 | `muscovite-russia` | Muscovite Russia | 1240→1721 | Russian, between `kievan-rus` & `russian-empire` | 481-yr hole (Mongol yoke → rise of Moscow) | HIGH | 10–13 |

> **▼ Roster amendment — 2026-05-17 (LOCKED roster, amended by user decision; step-0.5 scoping override).**
> Row 1 `babylon-to-persia` as scoped was a **flawed audit row**: the "1,359-yr Mesopotamian gap" is a *chain-adjacency illusion*, not a content gap. Verified against the corpus:
> - **`persian-empire` (shipped, 10 ch, −559→651)** already tells the full Achaemenid→Parthian→Sasanian→Arab-conquest arc (Ch1 Cyrus … Ch10 The Last Persian Empire; Ctesiphon ×15 — it even covers Mesopotamia-under-Persia).
> - **`mesopotamia` (shipped, 13 ch)** already tells the Neo-Babylonian Empire (Ch12 "Babylon Resurgent", Ch13 "Cyrus and the Long Echo / 539").
> - A −626→651 `babylon-to-persia` would duplicate a shipped 10-ch TL + the tail of another.
>
> **Decision:** (1) **DROPPED** as a CRITICAL chain-bridge. (2) **Closed the perceived Mesopotamian seam with cross-links instead of a TL** — `assyrian-empire`/`mesopotamia` ↔ `persian-empire` ↔ `islamic-golden-age` (logged for the corpus-remediation stream; do NOT assign while its agent is mid-run — coordinator picks it up at merge). (3) **RESCOPED** to `babylonia-under-empire`: the only genuinely-untold residue — Babylonia *as protagonist* 539 BCE→651 CE (Jewish Babylonian diaspora & the Talmudic academies of Sura/Pumbedita, the Church of the East, Seleucia-Ctesiphon as a continuous metropolis). LOW priority, ~6–8 ch, standalone/enrichment, **built late or possibly not at all** — re-decide when reached. (4) The 17 is now effectively **16 firm + 1 demoted**.
>
> **Build order changed: `uyghur-steppe` is civ #1** (true no-overlap gap: `gokturk-khaganate` → *nothing* → `mongol-empire`, the 744–1206 steppe hole; cf. `memory/project_coverage_finding_steppe_gap`). The pipeline-trial slot is already spent (goryeo, shipped); the 17 build begins here.

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
Per-civ pipeline = the gated **CLAUDE.md "Content Pipeline"** (steps 0–14);
`HANDOFF.md` is the cold-start brief that points at it.
