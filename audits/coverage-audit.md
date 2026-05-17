# Corpus-Wide Coverage & Chain-Integrity Audit

**Date:** 2026-05-16
**Scope:** `reference-data/tl-chains.ts`, `src/lib/navigator-tls.ts`, `reference-data/{tlId}.json`, `CLAUDE.md` roadmap
**Method:** Chain handoff years use the **declared `startYear`/`endYear` in `navigator-tls.ts`** (the authoritative editorial span). Raw event-year min/max in the JSON files is unreliable for span detection because most TLs carry archaeological-discovery and modern-legacy "outlier" events (e.g. `indus-valley` events span -7000 to a 1920s rediscovery). A 4th–96th-percentile "core" event range was computed as a cross-check and is cited where it materially disagrees with the declared span.

**Corpus size:** 100 navigator TLs · 19 chains · 12 dangling (non-chain) TLs.

---

## Section 1 — Chain Handoff Gaps & Overlaps

A note on overlaps: many flagged "overlaps" are **intentional editorial design**, not defects. `tl-chains.ts` explicitly documents that contemporaneous civilizations are deliberately routed to a single primary chain (e.g. `persian-empire` and `kingdom-of-kush` are excluded from chains they temporally overlap so the chain chips read cleanly 1/3..3/3). Bronze-Age parallel cultures (Minoan/Mycenaean) genuinely co-existed. These are recorded below but rated INFO. The findings that matter are **temporal gaps in chains presented to the reader as direct succession**, where the transition prose implies continuity across a void the corpus does not cover.

### Finding 1 — Central Asian Steppe: ~460-year gap (KNOWN — listed per instruction, not re-derived)

`gokturk-khaganate` ends **744 CE** → `mongol-empire` starts **1206 CE** = **462-year gap**. The chain transition prose ("The Göktürk Khaganate fragmented and was absorbed by the Tang Chinese and Uighurs. Four centuries later, Temüjin united the Mongol tribes…") openly acknowledges the leap. Candidate fills: Uyghur Khaganate, Karakhanid, Kara-Khitai.
**Severity:** HIGH (acknowledged but large). **Action:** Add a steppe TL (Uyghur Khaganate / Karakhanid) between `gokturk-khaganate` and `mongol-empire`.

### Ranked table of all other flagged gaps (chains presented as succession)

| # | Chain | Handoff | Gap | Transition prose covers it? | Severity |
|---|-------|---------|-----|------------------------------|----------|
| 2 | Mesopotamian Succession | `assyrian-empire` (ends 609 BCE) → `islamic-golden-age` (starts 750 CE) | **1,359 y** | Partly — one sentence compresses Persian + Hellenistic + Parthian + Sasanian + Arab conquest into a clause | **CRITICAL** |
| 3 | Persian Tradition | `persian-empire` (ends 651 CE) → `safavid-persia` (starts 1501 CE) | **850 y** | Partly — "After Alexander's conquest and centuries of Parthian and Sassanid rule, the Safavid dynasty reunified Persia in 1501" skips the entire Islamic Persia / Seljuk / Ilkhanid / Timurid-in-Iran era | **HIGH** |
| 4 | Russian Civilization | `kievan-rus` (ends 1240 CE) → `russian-empire` (starts 1721 CE) | **481 y** | Yes — transition narrates Mongol yoke → Muscovy → Peter the Great | **MEDIUM** (the entire Mongol-Rus'/Muscovy/Ivan-the-Terrible era — ~480 yrs of Russian state formation — has no TL) |
| 5 | Korean Civilization | `ancient-korea` (ends 935 CE) → `joseon-korea` (starts 1392 CE) | **457 y** | Partly — "The Goryeo dynasty unified the peninsula in 936 CE… In 1392 General Yi Seong-gye… founded Joseon" — the **entire Goryeo dynasty (918–1392)** is summarized in one transition sentence and has no TL | **HIGH** |
| 6 | Andean | `middle-horizon-empires` (ends 1000 CE) → `inca-empire` (starts 1438 CE) | **438 y** | Yes — transition names the post-Tiwanaku/Wari fragmentation and Inca rise; but the **Late Intermediate Period** (Chimú, Chancay, Kingdom of Cusco pre-1438) is a real ~440-yr hole | **MEDIUM** |
| 7 | Japanese Civilization | `heian-japan` (ends 1185 CE) → `edo-japan` (starts 1603 CE) | **418 y** | Yes — transition names Genpei War + "centuries of warrior rule and civil war" + Tokugawa 1603. But the **Kamakura + Muromachi/Ashikaga + Sengoku shogunates (1185–1603)** — arguably the most iconic samurai era — have **no TL at all** | **HIGH** |
| 8 | Nile Valley | `new-kingdom-egypt` (ends 1069 BCE) → `late-egypt` (starts 664 BCE) | **405 y** | Yes — transition names the Third Intermediate Period (Libyan/Nubian) but the **Third Intermediate Period** itself has no dedicated TL (covered partly by Kush in the Nubian chain) | **MEDIUM** |
| 9 | Greco-Roman | `mycenaean-civilization` (ends 1100 BCE) → `ancient-greece` (starts 800 BCE) | **300 y** | Yes — transition explicitly names the "Greek Dark Age" | **LOW** (acknowledged; dark-age-by-definition has little to narrate) |

### Intentional / structural overlaps (recorded, rated INFO unless noted)

| Chain | Handoff | "Overlap" | Verdict |
|-------|---------|-----------|---------|
| Mesopotamian Succession | `mesopotamia` (−5000→−539) vs `assyrian-empire` (−2500→−609) | 1,961 y | INFO — Assyria is a sub-region of Mesopotamia running in parallel; by-design routing per chain comments |
| Greco-Roman | `ancient-greece` (−800→−146) vs `ancient-rome` (−753→476) | 607 y | INFO — Greece and Rome genuinely co-existed; transition handles the cultural handoff |
| Mesoamerican | `olmec` (−1500→−400) vs `maya` (−1000→1697) | 600 y | INFO — Olmec/Maya overlap is real history |
| SE Asian Maritime | `srivijaya` (650→1377) vs `khmer-empire` (802→1431) | 575 y | INFO — contemporaneous maritime vs mainland powers; transition acknowledges the parallelism |
| Greco-Roman | `minoan` (−7000→−1100) vs `mycenaean` (−1600→−1100) | 500 y | INFO — Minoan/Mycenaean genuine overlap; transition handles it |
| Mesoamerican | `maya` (…→1697) vs `aztec` (1345→1521) | 352 y | INFO — Maya outlived the Aztec; transition acknowledges Maya persistence in Yucatán |
| Nubian Tradition | `kingdom-of-kush` (−1070→350) vs `kingdom-of-aksum` (80→940) | 270 y | INFO — Aksum rose while Kush declined; transition acknowledges it |
| Northern European | germanic/goths/migration/anglo-saxon/vendel mutual overlaps (63–243 y) | up to 243 y | INFO — by-design: a deliberately interleaved 5-TL "Germanic sub-chain" of parallel peoples, documented in `tl-chains.ts` and CLAUDE.md |
| West African Empires | `mali` (1235→1670) vs `songhai` (1464→1591) | 206 y | INFO — Songhai broke away from Mali while Mali survived in rump form; transition acknowledges it |
| Indian Subcontinent | `indus-valley` (−3300→−1300) vs `vedic-period` (−1500→−322) | 200 y | INFO — Indo-Aryan arrival overlaps late Harappan decline; transition acknowledges it |
| Western European Ideas | `late-medieval-europe` (1300→1500) vs `renaissance-italy` (1300→1600); `renaissance` vs `scientific-revolution`; `enlightenment` vs `industrial-revolution` | 55–200 y | INFO — an explicitly thematic "ideas" chain; movements deliberately overlap and the transitions narrate the intellectual handoff |
| Persian Tradition | `elamite` (−3100→−500) vs `persian-empire` (−559→651) | 59 y | INFO — minor; Elam absorbed into Achaemenid Persia |
| Chinese Dynasties | `zhou-dynasty` (−1046→−256) vs `qin-dynasty` (−356→−206) | 100 y | INFO — Qin was a Zhou vassal state before unification; standard historiography |
| Greco-Roman | `ancient-rome` (−753→476) vs `byzantine-empire` (330→1453) | 146 y | INFO — East/West Roman overlap is the textbook framing; transition handles it |

---

## Section 2 — Dangling TLs (members of no chain)

12 TLs belong to no chain. Cross-checked against the "PERMANENT ORPHANS" and standalone notes in `tl-chains.ts` and CLAUDE.md.

| TL | Range | Verdict | Notes |
|----|-------|---------|-------|
| `phoenicia` | −1500→−300 | **Intentional standalone** | CLAUDE.md "Standalone". Reasonable — Phoenician city-states have no clean successor TL. |
| `ancient-israel` | −1020→−586 | **Intentional standalone** | CLAUDE.md "Standalone". Defensible. |
| `carthage` | −814→−146 | **Intentional standalone** | CLAUDE.md "Standalone". Defensible (Phoenician colony → destroyed by Rome). |
| `polynesian-voyagers` | −1500→1500 | **Intentional standalone** | Explicitly a "PERMANENT ORPHAN" in `tl-chains.ts`. Correct. |
| `al-andalus` | 711→1492 | **Intentional standalone** | CLAUDE.md explicitly "standalone (not in a chain)". Defensible. |
| `umayyad-caliphate` | 632→750 | **Likely chain-omission — FLAG** | `tl-chains.ts` PLANNED notes an "Islamic Civilization" chain (umayyad → islamic-golden-age → mamluk → ottoman) that was never implemented. `umayyad-caliphate` is fully shipped and is the natural predecessor of `islamic-golden-age` (which sits in Mesopotamian Succession). Strong candidate for a new chain or insertion. |
| `dai-viet` | 939→1804 | **Likely chain-omission — FLAG** | CLAUDE.md's roadmap lists `dai-viet` under "SE Asian Maritime", but the **`tl-chains.ts` `southeast-asian-maritime` chain only contains `srivijaya → khmer-empire`**. `dai-viet` (and `majapahit`) are silently absent from the chain definition — roadmap/code mismatch. |
| `majapahit` | 1293→1527 | **Likely chain-omission — FLAG** | Same as above. CLAUDE.md groups it under SE Asian Maritime; `tl-chains.ts` does not include it. Natural successor to `srivijaya` in the maritime/Java thread. |
| `zapotec-civilization` | −1500→1521 | **Likely chain-omission — FLAG** | Core Mesoamerican civilization (Monte Albán) contemporaneous with Olmec/Maya. The `mesoamerican` chain is `olmec → maya → aztec`; Zapotec (and Teotihuacan) are conspicuously excluded despite being central to the Mesoamerican story. |
| `teotihuacan` | −100→550 | **Likely chain-omission — FLAG** | Same as Zapotec — "the Americas' first great metropolis," dominant in the Mesoamerican Classic period, yet not in the `mesoamerican` chain. |
| `ancestral-puebloans` | −100→1300 | **Intentional standalone (but flag)** | `tl-chains.ts` PLANNED notes a "North American Indigenous" chain (ancestral-puebloans → cahokia-mississippian → haudenosaunee). `ancestral-puebloans` + `mississippian-culture` are both shipped and could form a real North American chain now. |
| `mississippian-culture` | 800→1600 | **Intentional standalone (but flag)** | CLAUDE.md "Standalone"; but pairs naturally with `ancestral-puebloans` for a North American Indigenous chain (planned in `tl-chains.ts`, never built). |

**Summary:** 5 of the 12 dangling TLs are sound standalones (Phoenicia, Ancient Israel, Carthage, Polynesian Voyagers, Al-Andalus). 7 are credible chain-omissions: an unbuilt **Islamic Civilization** chain (umayyad), a **roadmap/code mismatch** for the SE Asian Maritime chain (dai-viet, majapahit), Mesoamerican exclusions (zapotec, teotihuacan), and an unbuilt **North American Indigenous** chain (ancestral-puebloans, mississippian-culture).

---

## Section 3 — Consistency Drift (`navigator-tls.ts` vs CLAUDE.md roadmap)

| Mismatch | Detail | Severity |
|----------|--------|----------|
| **Global ship count wrong** | CLAUDE.md line 128: *"89 of 100 navigator TLs shipped."* Actual: **100/100 have `hasContent: true`**. | **HIGH** |
| **"Remaining (8)" list is fully stale** | CLAUDE.md line 152 says reconstruction, roaring-twenties, civil-rights-era, germanic-tribes, the-goths, migration-period, anglo-saxon-england, vendel-scandinavia are *"the only TLs left without `hasContent: true`"*. **All 8 now have `hasContent: true`**, narratives written (257–343 lines each), registered in `parse-narratives.ts`, and maps generated (8–18 each). Zero TLs remain unshipped. | **HIGH** |
| **🚧 marks stale (8)** | Lines 150 & 152 mark the same 8 TLs with 🚧 ("spine laid, narrative pending"). All are fully shipped. | **MEDIUM** |
| **File-structure comment wrong** | CLAUDE.md line 63: *"navigator-tls.ts — 95 navigator TLs with hasContent flag (76 shipped)"*. Actual: **100 TLs, 100 shipped**. | **MEDIUM** |
| **Roadmap vs chain-definition disagreement (SE Asia)** | CLAUDE.md "SE Asian Maritime" line lists `srivijaya · khmer-empire · dai-viet · majapahit`, implying a 4-TL chain. `tl-chains.ts` `southeast-asian-maritime` chain contains **only `srivijaya → khmer-empire`**. dai-viet and majapahit are not in any chain. | **MEDIUM** |
| **No name disagreements** | All TL `id`s referenced in `tl-chains.ts` resolve to entries in `navigator-tls.ts`; no orphaned chain references; no label contradictions found. | INFO |

**Net:** the codebase is *ahead* of the documentation — the project is effectively complete (100/100 shipped) but CLAUDE.md still presents it as 89/100 with 8 outstanding. The roadmap section needs a wholesale refresh.

---

## Section 4 — Editorial Whitespace ("world history" holes a knowledgeable reader would notice)

Despite 100 TLs, several conspicuous regional/temporal voids remain for a product implicitly promising world history:

| Hole | What's missing | Severity |
|------|----------------|----------|
| **The 20th-century World Wars / Cold War** | There is **no WWI, WWII, Cold War, or Holocaust TL**. `tl-chains.ts` explicitly removed a `modern-conflicts` chain because those TLs "don't exist in the navigator yet." The single most-expected topic in any world-history product is absent — covered only obliquely inside national TLs (soviet-union, modern-india, japanese-economic-miracle, civil-rights-era). | **CRITICAL** |
| **Medieval Japan (samurai era)** | Kamakura / Muromachi-Ashikaga / Sengoku (1185–1603) — the shogun-and-samurai period most readers associate with Japan — is a 418-year hole between `heian-japan` and `edo-japan`. | **HIGH** |
| **Goryeo Korea** | The entire Goryeo dynasty (918–1392) — celadon, the Tripitaka Koreana, Mongol invasions — is a 457-year hole between `ancient-korea` and `joseon-korea`. | **HIGH** |
| **Medieval / Islamic Persia** | Between Sasanian collapse (651) and the Safavids (1501): no coverage of Islamic Persia, the Samanids, Seljuks, Ilkhanate-in-Iran, or Timurid-Persia as a Persian thread (850-year hole in the Persian chain). | **HIGH** |
| **Post-Kievan / Muscovite Russia** | 1240–1721: Mongol yoke, rise of Moscow, Ivan the Terrible, Time of Troubles — 481-year hole; Russian state formation has no TL. | **MEDIUM** |
| **Colonial / Atlantic World** | Age of Exploration, Spanish/Portuguese/British/Dutch empires, the Atlantic slave trade, Latin American independence — a planned "Colonial / Atlantic World" chain in `tl-chains.ts` was never built. A vast early-modern global theme is absent as a connective thread. | **HIGH** |
| **Sub-Saharan & East Africa** | No Great Zimbabwe, Swahili Coast / Kilwa, Zulu Kingdom, Ethiopian highland (Zagwe/Solomonic), or Kongo. African coverage is Nile + Nubia + 2 West African empires only; the entire eastern and southern African record is missing. | **HIGH** |
| **Mainland Southeast Asia** | Only maritime SE Asia + Khmer. No Bagan/Burma, Ayutthaya/Siam, or Lan Xang; Theravada mainland SE Asia is unrepresented (planned in `tl-chains.ts`, unbuilt). | **MEDIUM** |
| **Tibet & the Himalaya** | No Tibetan Empire / Tibetan Buddhism TL (planned, unbuilt). | **LOW** |
| **Pre-Columbian North America east of the Pueblos** | Beyond Mississippian + Ancestral Puebloans, no Hopewell/Adena, no Haudenosaunee/Iroquois Confederacy, no Pacific Northwest. | **LOW** |
| **Oceania beyond Polynesian voyaging** | No Aboriginal Australia, no Māori-specific or Aotearoa TL, no Lapita-as-its-own-thread. | **LOW** |

---

## Recommended Actions (consolidated, prioritized)

1. **CRITICAL — Refresh CLAUDE.md roadmap.** Update line 63, line 128 ("100 of 100 shipped"), and delete/rewrite the stale "Remaining (8)" block and all 🚧 marks. The project is complete; the docs say it is 89% done.
2. **CRITICAL — Decide on a 20th-century-conflict track.** A world-history product with no WWI/WWII/Cold-War TL is the largest editorial gap. Either build the planned `modern-conflicts` chain or document the deliberate omission.
3. **CRITICAL — Mesopotamian Succession 1,359 y gap.** The Assyria→Islamic-Golden-Age jump is the largest succession gap; consider inserting a Neo-Babylonian/Achaemenid-in-Mesopotamia bridge or re-scoping the chain.
4. **HIGH — Fill the three biggest "famous era" national gaps:** Medieval/samurai Japan (1185–1603), Goryeo Korea (918–1392), Medieval Islamic Persia (651–1501).
5. **HIGH — Steppe gap (Finding 1):** add Uyghur Khaganate / Karakhanid between Göktürk and Mongol.
6. **MEDIUM — Reconcile SE Asian Maritime chain:** either add `dai-viet`/`majapahit` to the `southeast-asian-maritime` chain in `tl-chains.ts` or correct the CLAUDE.md roadmap line that implies they're chained.
7. **MEDIUM — Build the two ready-to-go chains from existing shipped TLs:** Islamic Civilization (`umayyad-caliphate → islamic-golden-age → …`) and North American Indigenous (`ancestral-puebloans → mississippian-culture`).
8. **MEDIUM — Add Zapotec/Teotihuacan to the Mesoamerican chain** or document why the mother-culture line is Olmec→Maya→Aztec only.
9. **LOW/INFO — Intentional overlaps need no action;** they are by-design and documented in `tl-chains.ts`.
