# viking-age — Chapter 1 "The World Before the Raids"
## Glossary-coverage BASELINE (before any changes)

Purpose: a frozen snapshot of what is linked vs. what should be, so the fix can be
diffed against it. Bar agreed with user: **proper nouns + concepts**; skip modern
country names and universally-known basics; **no cap**.

---

## 1. CURRENTLY LINKED (the BEFORE state)

### Glossary — 20 entries
Gjermundbu helmet · Harald Bluetooth · Younger Futhark alphabet · Scandinavia ·
Jutland · fjords · Medieval Warm Period · Little Ice Age · chieftain · skalds ·
konungr · clinker-built · keel · Oseberg ship · Gokstad ship · thrall ·
Abbasid Caliphate · Abbasid silver dirhams · Carolingian Empire ·
"Abbasid Caliphate at its high tide"

### Event links — 5
clinker-built (evt-norse-clinker-ships) · Oseberg ship (evt-oseberg-ship-burial) ·
longhouse (evt-norse-longhouse) · Rök runestone (evt-rune-stones) · Birka (evt-birka-trade)

### Cross-links — 3
Carolingian Empire → celtic-cultures Ch8 ·
"Abbasid Caliphate at its high tide" → persian-empire Ch9 ·
Polynesian voyagers → polynesian-voyagers Ch3

> Note: `clinker-built` and `Oseberg ship` are double-registered (glossary + event);
> `Carolingian Empire` / `Abbasid…high tide` are double-registered (glossary + cross).
> Parse precedence already handles this — flagged only for awareness, not a fix here.

---

## 2. GAPS — should be linked, currently are not
Legend: **[B]** = author-bolded (Class A) · plain = unbolded proper noun/concept (Class B)

> **Detection-gap finding (user spotted `moraine`):** Class B as first run only caught
> *capitalized* proper nouns. Lowercase specialist/technical common nouns (`moraine`,
> `caulk`, `portage`) slipped through. Pipeline needs a 3rd pass for jargon, and should
> **prioritize terms the author does NOT inline-define** (`moraine` has zero in-text gloss
> → reader fully stranded; higher priority than terms the author already explains).
>
> **Routing finding (user was right):** many gaps map to existing pool **events**, which
> are richer than glossary (category color + EventSheet image + wiki extract). But routing
> **cannot be a string match** — pool labels diverge from prose ("Battle of Hastings" lives
> under `evt-william-conqueror-normandy`; "Saxon" must *not* grab `evt-great-heathen-army`).
> The script only surfaces *candidates*; final event↔term routing needs semantic judgment.

### A. → EVENT LINKS (pool event exists; richest target — prefer over glossary)
| matchText | [B] | eventId |
|---|---|---|
| Lindisfarne | | evt-lindisfarne-raid |
| Great Heathen Army | | evt-great-heathen-army |
| Battle of Hastings | | evt-william-conqueror-normandy |
| Hedeby | | evt-hedeby-trade |
| Dublin | | evt-dublin-founded |
| Iceland | | evt-settlement-iceland |
| Greenland | | evt-norse-greenland |
| Newfoundland | | evt-lanse-aux-meadows |
| longship | **[B]** | evt-norse-clinker-ships |
| Ladby ship | **[B]** | evt-ladby-ship-burial |
| slave trade | **[B]** | evt-dublin-slave-trade |
| Volga | | evt-volga-trade-route |
| runes | | evt-runestone-memorial-tradition |
| Charlemagne | | evt-charlemagne-coastal-defense *(or cross-link → early-medieval-europe)* |

### B. → CROSS-LINKS (other civs in this app)
| matchText | [B] | target |
|---|---|---|
| Byzantine Empire | **[B]** | byzantine-empire (Iconoclasm era) |
| Tang dynasty | **[B]** | tang-song-china |
| Heian period | **[B]** | heian-japan |
| Classic period (Maya) | **[B]** | maya-civilization |
| Harun al-Rashid | | islamic-golden-age *(or glossary `Harun_al-Rashid`)* |

### C. → GLOSSARY — people
Wagner `Richard_Wagner` · Carl Emil Doepler `Carl_Emil_Doepler` · Normans `Normans` ·
Saxon `Anglo-Saxons` · Franks/Frankish `Franks` · Rus' `Rus%27_people`
*(Rus'/Constantinople kept glossary not event: their pool events are Ch4-era, not Ch1)*

### D. → GLOSSARY — places (no suitable pool event)
Zealand `Zealand` · Funen `Funen` · Bornholm `Bornholm` · Hebrides `Hebrides` ·
Yorkshire `Yorkshire` · Caspian Sea `Caspian_Sea` · Don `Don_(river)` ·
Northumbria `Northumbria` · Constantinople `Constantinople` · Yucatán `Yucatán_Peninsula`

### E. → GLOSSARY — concepts / terms
| matchText | [B] | wikiSlug |
|---|---|---|
| Icelandic sagas | **[B]** | Sagas_of_Icelanders |
| oaths | **[B]** | Oath |
| Vikings (the word itself) | | Vikings |
| bind-rune | | Bind_rune |
| níðingr | | Nithing |
| outlaw (Norse legal sense) | | Outlaw |
| manumission | | Manumission |
| bride-price | | Bride_price |
| Christendom | | Christendom |
| Iconoclast controversy | | Byzantine_Iconoclasm |

### E2. → GLOSSARY — specialist / technical vocabulary (deliberate sweep, complete)
Lowercase domain jargon a popular-history reader plausibly doesn't know and the author
does **not** inline-define. This is the pass that `moraine` exposed as missing.

**Definite adds (undefined in-text):**
| matchText | wikiSlug |
|---|---|
| moraine | Moraine |
| mast step | Mast_partner *(or Glossary_of_nautical_terms)* |
| vestments | Vestment |
| ship burial / ship burials | Ship_burial |
| freedmen | Freedman |

**Borderline — recommend including (partly self-explained, but zero-knowledge reader benefits; no cap):**
| matchText | wikiSlug | note |
|---|---|---|
| caulked | Caulk | "caulked with tarred wool" |
| portage | Portage | "carry the ship overland… between river systems" |
| pagan | Paganism | loaded concept, undefined |
| diaspora | Diaspora | "Norse diaspora", undefined |
| gable | Gable | "gable openings" |
| amidships | Glossary_of_nautical_terms | "a mast amidships" |
| square sail | Square_rig | function explained, term not |
| Atlantic depressions | Low-pressure_area | meteorological sense |
| knots (unit) | Knot_(unit) | speed unit |

### F. → GLOSSARY — works
Ring Cycle `Der_Ring_des_Nibelungen`

### G. Deliberately SKIPPED (per agreed bar)
- **Modern country names**: Norway, Denmark, Sweden (bolded, but excluded by rule)
- **Modern comparison props**: Phoenix Arizona, Texas, California
- **Universal basics**: Columbus, Christianity, "the Church", North Sea, Baltic, Paris,
  Baghdad, Damascus, Arctic Circle (well-known; revisit if user wants them in)
- **Etymology fragments / inline foreign**: *fara í víking*, *víkingr*, *vík*, *wíc*,
  *blátǫnn*, *goði* (covered via `chieftain`→Gothi), *þræll* (covered via `thrall`)
- **Bold false-positive**: "The word 'Viking' describes a thing you do…" (styled sentence, not a term)

---

## 3. SUMMARY
- Currently linked in Ch1: **~26 distinct terms** (20 glossary + 5 event + 3 cross, minus overlap)
- Proposed additions: **14 event · 5 cross · ~29 glossary concepts/proper · +5 definite
  specialist + ~9 borderline specialist ≈ 60+ new links**
- Author-bolded Class-A gaps split: 4 → event, 4 → cross-civ, 5 → glossary (not all glossary!)
- Post-fix Ch1: ~85+ links — far past the old 20–35 cap, expected & sanctioned ("no cap")
- **Three detection passes confirmed needed:** (1) author-bolded diff, (2) capitalized
  proper nouns, (3) lowercase specialist vocabulary — pass 3 is the one `moraine` proved
  was missing and is the hardest to automate (needs judgment, not regex).
- **Pipeline implication for 86 TLs:** detect (3 passes) → route event/cross/glossary
  (semantic judgment, not string match) → resolve & live-validate every wikiSlug.
