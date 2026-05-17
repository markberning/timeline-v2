# Corpus Map-Quality Audit

**Status:** COMPLETE — 98 of 98 TLs inspected (~878 chapter maps). PLUS a separate **generation** gap (not regen): 3 shipped Japan-split TLs (`prehistoric-japan`, `asuka-nara-japan`, `heian-japan`) have **no maps at all** — ~24 chapters to generate; stale `public/maps/ancient-japan/` (8 old WebPs) to delete. See Tier 0.
**Scope:** every `public/maps/{tlId}/chapter-*.webp` vs `map-prompts/{tlId}.md`.

## Headline

- **The corpus is in good shape overall** — the large majority of maps are clean. The original "AI hallucination / garbled text" fear is mostly a *legacy* problem, concentrated in the **April-2026 generation batches**; May-2026 TLs are markedly cleaner (clear pipeline improvement after April).
- **Dominant defect corpus-wide = duplicate labels** (a river/region drawn 2–3×, esp. "Yellow River", "Nile", "Niger River", "Volga", "Euphrates"). Most common single failure, present in nearly every batch.
- **Two TLs need full-series redos:** `mesopotamia` (all 13 — anachronistic modern countries+borders, gray-water palette, forbidden infographic boxes) and `indus-valley` (ch 1, 4–10 — modern PAKISTAN/IRAN/etc. labels+borders, garbled Punjab river names).
- Viewer-scaling false positives ruled out: qin, six-dynasties, soviet-union, timurid "tiny render" reports verified full-resolution and fine.

## Tier 0 — Missing entirely (GENERATE, not regen)
The `ancient-japan` omnibus was split into 3 shipped TLs but maps were never generated for them — the reader serves zero maps for these today:
- **prehistoric-japan** (8 ch) — generate
- **asuka-nara-japan** (8 ch) — generate
- **heian-japan** (8 ch) — generate
- Then **delete** stale `public/maps/ancient-japan/` (no navigator id; 8 orphan WebPs). Source: `audits/production-line-sync.md` H1.

## Tier 1 — Full-series redos
- **mesopotamia** — all 13 chapters. Re-prompt with: no modern countries/borders, light-blue water, no legend/scale/infographic boxes.
- **indus-valley** — ch 1, 4–10. Re-prompt with: no modern country labels/borders, verbatim river spellings (Ravi/Beas/Sutlej).

## Tier 2 — Blockers (regen, severe)
nubia ch1 · kingdom-of-kush ch2, ch3 · minoan-civilization ch8 · mughal-empire ch1, ch7 · mycenaean-civilization ch7 · old-kingdom-egypt ch8 · six-dynasties ch3 · maurya-empire ch7 · maya-civilization ch1 · industrial-revolution ch20 · hittite-empire ch5 · russian-empire ch12 · qing-dynasty ch12

## Tier 3 — Major regen queue (by TL)
- **ancient-greece** ch2,4,7,8 · **ancient-israel** ch3,5,7,8 · **ancient-korea** ch4,7,8 · **ancient-china** ch8 · **ancestral-puebloans** ch4 · **ancient-japan** ch1,3 *(no prompt file — split TL, audit visual-only)*
- **ancient-nubia** ch1(blk),2,4,6,7 · **ancient-rome** ch5,7,8,9,10 · **anglo-saxon-england** ch2,3,4,5,10 · **antebellum-america** ch1,4,7,12 *(frame-violation cluster)* · **assyrian-empire** ch2,5,6,7,8 *(garble+dup+coastline; ch1,3 clean)*
- **carthage** ch1,7,8 · **celtic-cultures** ch8 · **chinese-revolution** ch1,5,6,12,13 *(worst in its batch — illegible white-canvas renders)* · **civil-rights-era** ch15
- **early-american-republic** ch6,13 · **early-andean-civilizations** ch5 · **early-dynastic-egypt** ch8
- **elamite-civilization** ch2,5,8 (+4,6) · **gupta-empire** ch4
- **hittite-empire** ch4,5(blk) · **industrial-revolution** ch13,19,20(blk) · **islamic-golden-age** ch7 · **japanese-economic-miracle** ch2 · **joseon-korea** ch5
- **kingdom-of-aksum** ch4 · **kingdom-of-kush** ch5,7,8 · **late-egypt** ch1,3,5,7,8 *(palette failures — no blue water)*
- **mali-empire** ch6 · **maurya-empire** ch1,5,7(blk) · **maya-civilization** ch1(blk),5,7 · **migration-period** ch9 · **ming-dynasty** ch2 · **minoan-civilization** ch7,8(blk) · **mississippian-culture** ch7,9
- **modern-india** ch3,6,7,10,14 · **mughal-empire** ch1,7(blk) · **mycenaean-civilization** ch2,4,5,7(blk),8 · **new-kingdom-egypt** ch2,3,4,8,9 · **old-kingdom-egypt** ch4,5,6,8(blk)
- **persian-empire** ch1,3 · **phoenicia** ch5 · **polynesian-voyagers** ch4,5,6,7,8 *(5/8 — worst-affected)* · **post-maurya-kingdoms** ch3,6,8
- **qin-dynasty** ch5,7 · **qing-dynasty** ch12(blk) · **rise-of-china** ch1,9 · **roaring-twenties** ch3,4,12,13 · **russian-empire** ch5,6,12(blk)
- **scientific-revolution** ch20 · **scythians** ch2,4,5,6,8 *(1/8 clean — worst-affected)* · **shang-dynasty** ch1,4,5,7,8 · **six-dynasties** ch3(blk),6,8 · **songhai-empire** ch1,2
- **teotihuacan** ch8 · **the-goths** ch8 · **xiongnu-huns** ch1,3 · **zhou-dynasty** ch7,8

## Essentially clean (no action)
yuan-dynasty, olmec-civilization, ottoman-empire, srivijaya, meiji-japan, medieval-india, late-medieval-europe, majapahit, timurid-empire, umayyad-caliphate, byzantine-empire, mongol-empire, enlightenment, gokturk-khaganate, han-dynasty, high-medieval-europe, dai-viet, vendel-scandinavia, zapotec-civilization, delhi-sultanate, safavid-persia, khmer-empire, kievan-rus (minor only) — plus al-andalus, viking-age, reconstruction (minor only) from the pilot.

## Recurring root causes → recommended GLOBAL prompt fixes
1. **Duplicate river/region labels** — strengthen the "draw each label exactly once" rule; call out long rivers explicitly.
2. **Modern countries/borders on ancient maps** — add an explicit anachronism ban (mesopotamia/indus-valley prompts predate it).
3. **Header-bar-only frame** — recurring full-rectangle border (anglo-saxon, antebellum, islamic-golden-age, mississippian).
4. **Water = light blue** — palette regressions (late-egypt, post-maurya, chinese-revolution, ming, rise-of-china).
5. **Compass-word leakage** — stray "North"/"East" rendered as labels (rome, andean, han, teotihuacan, russian-empire).
6. **Decorative sparkle artifact** bottom-right — batch-wide in early-andean, early-dynastic-egypt, maurya, maya, scythians, shang, six-dynasties.

## Next
1. Apply the 6 global prompt fixes before any regen (prevents re-introducing the same defects).
2. **Tier 0:** generate maps for the 3 Japan TLs; delete stale `ancient-japan/`.
3. Execute: Tier 1 full-series → Tier 2 blockers → Tier 3 majors via `generate-maps.mjs --chapter N`, audit regens, `optimize-maps.mjs` on new files only.
