# Image manifest — Forbes Expedition / Fall of Fort Duquesne (1758)

Born-verified, public-domain image research for the French & Indian War battle dossier
`src/app/war-french-indian/battles/fort-duquesne/page.tsx`. Manifest only — no downloads,
no code edits. Wikimedia entries verified via the Commons/enwiki `imageinfo` API
(`prop=imageinfo&iiprop=url|size|extmetadata`); per house rule, byte-fetches against
`upload.wikimedia.org` are deferred (URLs reported, not curled).

Section ids read from the page `sections:` array:
- `the-forks-the-prize` — already has `/war-img/fi-washington-1772.jpg` (keep).
- `forbess-road-and-grants-defeat` — already has `/war-img/fi-forbes-road-map.jpg` (keep).
- `easton-and-the-empty-fort` — NO image. Needs one (handled below).

---

## John Forbes (commander, British)
- **filename:** `fi-forbes.jpg`
- **placement:** commander:John Forbes
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/a/ae/General_John_Forbes_from_the_Darlington_Digital_Collection_University_of_Pittsburgh.JPG`
- **orientation:** portrait (431 × 551)
- **caption:** John Forbes, the Scottish-born brigadier who cut the new road west and took the Forks. Too sick to ride, he ran the campaign from a litter, renamed the place Pittsburgh, and was dead within months.
- **credit:** <unknown artist · portrait · 18th c. · Darlington Digital Library, University of Pittsburgh · public domain>
- **subject-verification:** Commons file page identifies "General John Forbes (1710–1759)," Scottish-born general of the French and Indian War, "responsible for capturing Fort Duquesne, renaming it Fort Pitt," who "selected George Washington as an aide" — the John Forbes of the Forbes Road. This is the man. PD basis: file page states "in the public domain in its country of origin and other countries… author's life plus 70 years or fewer" (artist died well before 1956). API: LicenseShortName "Public domain," Artist "Unknown author." Byte-fetch deferred per rule (upload.wikimedia.org).

## James Grant (commander, British — led the reconnaissance)
- **filename:** `fi-grant.jpg`
- **placement:** commander:James Grant
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/e/ef/British_Major_General_James_Grant%2C_circa_1770.jpg`
- **orientation:** portrait (600 × 734)
- **caption:** James Grant of Ballindalloch, who turned a scout of Fort Duquesne into an attack and a defeat. His Highlanders were cut apart on the hill that still bears his name, and Grant himself was carried off a prisoner to Montreal.
- **credit:** <unknown artist · portrait, oil · circa 1770 · State Archives of Florida (Florida Memory) · public domain>
- **subject-verification:** Same man. The enwiki article "James Grant (British Army officer, born 1720)" — James Grant, 4th of Ballindalloch (1720–1806), who "led an advance party of around 800 men to determine the French strength at Fort Duquesne" in Sep 1758 — uses this exact infobox file. The c.1770 portrait shows him later as first British governor of East Florida; same individual. PD basis: API LicenseShortName "Public domain," Artist "Unknown" (18th-century lifetime), date "circa 1770," source State Archives of Florida. Byte-fetch deferred per rule.

## François-Marie Le Marchand de Lignery (commander, French)
- **filename:** `fi-lignery.jpg`
- **placement:** commander:François-Marie Le Marchand de Lignery
- **direct URL:** NO VERIFIED IMAGE — leave blank
- **orientation:** —
- **caption:** —
- **credit:** —
- **subject-verification:** No verified contemporary likeness located on Commons or LOC. No portrait is attached to his biographical entries (Dictionary of Canadian Biography carries text only). Per the hard rule, a missing image beats a wrong one — leave the commander image blank. No substitute.

## Teedyuscung (Lenape diplomat, Treaty of Easton)
- **filename:** `fi-teedyuscung.jpg`
- **placement:** commander:Teedyuscung (sideLabel LENAPE)
- **direct URL:** NO VERIFIED IMAGE — leave blank
- **orientation:** —
- **caption:** —
- **credit:** —
- **subject-verification:** The image used in the Wikipedia infobox (`File:Teedyuscung.jpg`, hosted on en.wikipedia not Commons) is tagged **Fair use**, NOT public domain — it fails Hard Rule 1. The widely reproduced "portrait" of Teedyuscung is a **1949 engraving by Lenni Lenape artist William Sauts Netamuxwe Bock** (cover of Wallace's *King of the Delawares*), a 20th-century work whose creator died in 2022 — not PD by age, and not freely licensed. Commons holds only modern statues/plaques (copyrighted photos) and text PDFs. No verified PD likeness exists. Leave blank. No substitute.

---

## easton-and-the-empty-fort (section figure)
- **filename:** `fi-ohio-fort-duquesne-plan-1755.jpg`  (reuse-on-disk)
- **placement:** section:easton-and-the-empty-fort
- **direct URL:** already on disk at `/war-img/fi-ohio-fort-duquesne-plan-1755.jpg`
- **orientation:** landscape (period engraved plan; on-disk asset)
- **caption:** A period plan of Fort Duquesne, the prize at the Forks. Once the Ohio nations took the Easton promise and walked away, the warriors went home, and Lignery blew up and abandoned this fort on November 24, 1758.
- **credit:** <see on-disk asset provenance for fi-ohio-fort-duquesne-plan-1755.jpg>
- **subject-verification:** No contemporary painting or engraving of the Treaty of Easton signing exists in the public domain — the only period Easton artifacts are the printed treaty *minutes* (a document scan, not a scene). No verified PD image of the burning/abandoned fort survives either; the "British retake Fort Duquesne, 25 Nov 1758" wood engravings are 19th-century commercial reproductions (Granger and similar), not subject- or rights-verified for our use. Per the prompt's fallback order, reuse the on-disk period plan of the fort that was emptied (`fi-ohio-fort-duquesne-plan-1755.jpg`), which is the strongest verified figure for this section. Alternate on-disk fallback: `fi-pitt-offensives-map.jpg` (1758 offensives map).

---

## SUMMARY
- `fi-forbes.jpg` → commander:John Forbes — VERIFIED PD (Darlington/Pitt, 431×551 portrait).
- `fi-grant.jpg` → commander:James Grant — VERIFIED PD (Florida Memory, c.1770, 600×734 portrait; confirmed same man via enwiki infobox).
- `fi-lignery.jpg` → commander:Lignery — **BLANK, NO VERIFIED IMAGE** (no contemporary likeness).
- `fi-teedyuscung.jpg` → commander:Teedyuscung — **BLANK, NO VERIFIED IMAGE** (only "portrait" is a 1949 Bock engraving, fair-use / not PD).
- `easton-and-the-empty-fort` → **REUSE on disk** `fi-ohio-fort-duquesne-plan-1755.jpg` (alt: `fi-pitt-offensives-map.jpg`); no PD Easton-treaty or burned-fort scene exists.
- Reuse kept as-is: `fi-washington-1772.jpg` (the-forks-the-prize), `fi-forbes-road-map.jpg` (forbess-road-and-grants-defeat).
