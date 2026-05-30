# Freedom Seekers & the USCT — Image Manifest

Verified public-domain images for the section "Freedom Seekers & the USCT"
(`audits/war-pipeline/usct-final.md`). 1 hero + 10 inline figures.

**Verification method / rights basis**
- Every image is either (a) a U.S. Library of Congress holding with "no known
  restrictions on publication" *and* published/created pre-1929 (so PD on
  publication-age grounds regardless), or (b) a Wikimedia Commons file whose
  `imageinfo` API record returns `LicenseShortName = Public domain` with a
  pre-1929 publication date.
- **URL verification:** LOC URLs were fetched live and return `200` with the
  stated byte size and content-type (TIFF/JPEG). Commons originals were
  confirmed to exist with their exact pixel dimensions via the Commons
  `imageinfo` API (the authoritative `url` field) *and* the `Special:FilePath`
  redirect. NOTE: direct `curl` of `upload.wikimedia.org` from this sandbox
  returns `429 Too Many Requests` (Wikimedia rate-limit on this IP) — the files
  are confirmed real and the URLs canonical via the API; the 429 is throttling,
  not a missing file. When fetching to download, pace requests (the known
  Wikimedia throttle, see `memory/feedback_wikimedia_rate_limit`).
- **LOC full-res note:** for LOC items the `...v.jpg` (1024px long edge) is the
  guaranteed-resolving largest *service* JPEG. The full master TIFF lives at
  `tile.loc.gov/storage-services/master/pnp/<path>u.tif`. For the two *modern*
  group photos (Cumberland Landing 01005, Company E 04294) the master `u.tif`
  returns a ~7KB stub, so the **1024px `v.jpg` is the real download** for those
  two; for the ambrotype portraits the `u.tif` is the genuine 97–111MB scan.

---

## HERO

### 1. usct-hero-soldier-family
- **key:** hero-soldier-family
- **filename:** `usct-hero-soldier-family.jpg`
- **URL (full master TIFF, 110MB):** https://tile.loc.gov/storage-services/master/pnp/ppmsca/36400/36454u.tif
- **URL (1024px service JPEG):** https://tile.loc.gov/storage-services/service/pnp/ppmsca/36400/36454v.jpg
- **caption:** A United States Colored Troops soldier sits for his portrait in
  Union blue beside his wife and two daughters. The men who freed themselves did
  not march off as anonymous recruits — they were husbands and fathers staking a
  claim, in the most formal way a 19th-century family could, to a country that
  had owned them.
- **credit:** Unidentified photographer · quarter-plate ambrotype, hand-colored · between 1863 and 1865 · Library of Congress, Liljenquist Family Collection (LC-DIG-ppmsca-36454) · public domain (no known restrictions; created 1863–65)
- **placement:** hero (top of section)
- **subject-verification:** LOC title "[Unidentified African American soldier in
  Union uniform with wife and two daughters]," dated 1863–65, Liljenquist
  Collection. Soldier is in a Union sack coat; the four-figure group reads
  exactly as the caption states. URL fetched live → 200, image/tiff, 109,868,628
  bytes.
- **orientation:** **PORTRAIT** (866×1024 service; tall ambrotype). Chosen
  deliberately: a dignified USCT-soldier *portrait* that centers a Black soldier
  (and his family) as the face of the section, per the brief's portrait-hero
  option.

---

## INLINE FIGURES

### 2. usct-rappahannock-fording
- **key:** rappahannock-fording
- **filename:** `usct-rappahannock-fording.jpg`
- **URL (full master TIFF, 23MB):** https://tile.loc.gov/storage-services/master/pnp/cwpb/00200/00218u.tif
- **URL (1024px service JPEG):** https://tile.loc.gov/storage-services/service/pnp/cwpb/00200/00218v.jpg
- **caption:** Self-emancipated families ford the Rappahannock River in Virginia,
  August 1862 — wagons, livestock, and children crossing toward Union lines under
  their own power. This is what "voting with their feet" actually looked like:
  hundreds of thousands of individual decisions to run.
- **credit:** Timothy H. O'Sullivan (Gardner's Gallery) · stereograph / albumen photograph · August 1862 · Library of Congress (LC-B811-/ cwpb.00218) · public domain (no known restrictions; published 1862)
- **placement:** after the heading **## They didn't wait to be freed**
- **subject-verification:** LOC title "[Rappahannock River, Va. Fugitive African
  American
s fording the Rappahannock]," 1862, the canonical O'Sullivan/Gardner
  image of self-emancipation. Rights line: "No known restrictions on
  publication." URL fetched live → 200, image/tiff, 23,205,222 bytes.
- **orientation:** **LANDSCAPE** (1024×422).

### 3. usct-butler-portrait
- **key:** butler-portrait
- **filename:** `usct-butler-portrait.jpg`
- **URL (Commons original, 4973×7500):** https://upload.wikimedia.org/wikipedia/commons/5/54/Portrait_of_Maj._Gen._Benjamin_F._Butler%2C_officer_of_the_Federal_Army.jpg
- **caption:** Maj. Gen. Benjamin F. Butler — Massachusetts lawyer, no
  abolitionist — whose cold-blooded legal nerve at Fort Monroe in May 1861 turned
  three escaped men into "contraband of war" and cracked the door the rest of the
  section walks through.
- **credit:** Mathew Brady · photograph · between 1860 and 1865 · Wikimedia Commons / Library of Congress (Brady-Handy) · public domain (published pre-1929)
- **placement:** after the heading **## Contraband of war**
- **subject-verification:** Commons File "Portrait of Maj. Gen. Benjamin F.
  Butler, officer of the Federal Army.jpg"; Brady; imageinfo → LicenseShortName
  "Public domain." Standard Brady wartime portrait of Butler in major-general's
  uniform. (If a smaller file is wanted, this is a 7500px original.)
- **orientation:** **PORTRAIT** (4973×7500).

### 4. usct-smalls-portrait
- **key:** smalls-portrait
- **filename:** `usct-smalls-portrait.jpg`
- **URL (Commons original, 4380×5865):** https://upload.wikimedia.org/wikipedia/commons/e/ef/Robert_Smalls_-_Brady-Handy.jpg
- **caption:** Robert Smalls, who before dawn on May 13, 1862, stole the
  Confederate steamer *Planter* out of Charleston harbor — past Fort Sumter's
  guns, in the captain's straw hat — and handed her to the U.S. Navy, freeing
  himself, his family, and his crew in under four hours. He later piloted for the
  Union and won a seat in Congress.
- **credit:** Mathew Brady & Levin C. Handy · photograph · c. 1870s · Wikimedia Commons / Library of Congress, Brady-Handy Collection (LC-DIG-cwpbh-03683) · public domain (published pre-1929)
- **placement:** after the heading **## A ship sailed to freedom**
- **subject-verification:** Commons File "Robert Smalls - Brady-Handy.jpg"; LOC
  Digital ID cwpbh.03683; Commons file page explicitly identifies "Robert Smalls
  … became a naval hero … freed himself and his family in May 1862." Confirmed
  the man, not a misattribution. **Caveat (honest):** this is the standard
  Brady-Handy Smalls portrait but dates to his *Congressional* years (c. 1870s),
  not 1862 — caption is written to avoid implying it's a wartime image.
- **orientation:** **PORTRAIT** (4380×5865).

### 5. usct-sailor-portrait
- **key:** sailor-portrait
- **filename:** `usct-sailor-portrait.jpg`
- **URL (full master TIFF, 112MB):** https://tile.loc.gov/storage-services/master/pnp/ppmsca/36900/36959u.tif
- **URL (1024px service JPEG):** https://tile.loc.gov/storage-services/service/pnp/ppmsca/36900/36959v.jpg
- **caption:** A Black sailor of the Union Navy sits for his portrait in uniform.
  The Navy never barred Black men, and over the war they grew to roughly a sixth
  to a fifth of its crews — a larger share than they ever held in the Army.
- **credit:** Unidentified photographer · tintype/ambrotype portrait · between 1863 and 1865 · Library of Congress, Liljenquist Family Collection (LC-DIG-ppmsca-36959) · public domain (no known restrictions; created 1863–65)
- **placement:** after the heading **## A ship sailed to freedom** (place AFTER
  the Smalls portrait, illustrating the section's closing Navy paragraph)
- **subject-verification:** LOC title "[Unidentified African American sailor in
  Union uniform sitting with arm resting on table]," 1863–65, Liljenquist
  Collection. Sailor's uniform clearly distinct from the soldier portraits. URL
  fetched live → 200, image/tiff, 111,645,888 bytes.
- **orientation:** **PORTRAIT** (899×1024 service).

### 6. usct-cumberland-contrabands
- **key:** cumberland-contrabands
- **filename:** `usct-cumberland-contrabands.jpg`
- **URL (1024px service JPEG — the real full-res for this item):** https://tile.loc.gov/storage-services/service/pnp/cwpb/01000/01005v.jpg
- **caption:** A group of self-emancipated people — the army's word was
  "contrabands" — gathered at Foller's farm near Cumberland Landing, Virginia, in
  May 1862. Settlements like this swelled into the contraband camps: at once a
  cradle of free Black life and, between disease and hunger, a graveyard.
- **credit:** James F. Gibson (Gardner's Gallery) · albumen photograph · May 14, 1862 · Library of Congress (cwpb.01005) · public domain (no known restrictions; published 1862)
- **placement:** after the heading **## Misery and the first taste of free life**
- **subject-verification:** LOC title "[Cumberland Landing, Va. Group of
  'contrabands' at Foller's house]," May 14, 1862, Gibson/Gardner — the canonical
  contraband-group photograph. URL fetched live → 200, 186,889 bytes (1024px).
  Master `u.tif` is a stub for this item, so the `v.jpg` is the download.
- **orientation:** **LANDSCAPE** (1024×891 — nearly square, wide-ish).

### 7. usct-company-e-4th-usci
- **key:** company-e-4th-usci
- **filename:** `usct-company-e-4th-usci.jpg`
- **URL (1024px service JPEG — the real full-res for this item):** https://tile.loc.gov/storage-services/service/pnp/cwpb/04200/04294v.jpg
- **caption:** Men of Company E, 4th U.S. Colored Infantry, in formation at Fort
  Lincoln outside Washington. By 1865 roughly 180,000 Black men had put on Union
  blue — about one in ten of the entire army that won the war.
- **credit:** William Morris Smith · albumen photograph · 1863–1866 · Library of Congress (cwpb.04294) · public domain (no known restrictions; created 1863–66)
- **placement:** after the heading **## One in ten**
- **subject-verification:** LOC title "[District of Columbia. Company E, 4th U.S.
  Colored Infantry, at Fort Lincoln]" — a documented USCT company in formation
  with arms. URL fetched live → 200, 151,487 bytes (1024px). Master `u.tif` is a
  stub, so the `v.jpg` is the download.
- **orientation:** **LANDSCAPE** (1024×821).

### 8. usct-dutch-gap-canal
- **key:** dutch-gap-canal
- **filename:** `usct-dutch-gap-canal.jpg`
- **URL (Commons original, 800×745):** https://upload.wikimedia.org/wikipedia/commons/1/13/DiggingDutchGapCanalNov1864.jpg
- **caption:** USCT regiments dig the Dutch Gap Canal on the James River,
  November 1864 — handed the shovel after white troops fell sick, laboring for
  hours under live Confederate fire. The "fatigue duty" insult made plain: men
  who enlisted to be soldiers, used as a uniformed labor gang.
- **credit:** Unidentified photographer · photograph · November 1864 (published 1911) · Wikimedia Commons · public domain (published pre-1929)
- **placement:** after the heading **## Soldiers, not shovels**
- **subject-verification:** Commons File "DiggingDutchGapCanalNov1864.jpg";
  imageinfo → "Public domain," date "Published 1911 (photo November 1864)" —
  matches the section's named Dutch Gap example exactly. **Caveat:** only an
  800px original is on Commons; a larger LOC scan of the Dutch Gap series exists
  if higher res is needed later.
- **orientation:** **LANDSCAPE / near-square** (800×745).

### 9. usct-fort-wagner-charge
- **key:** fort-wagner-charge
- **filename:** `usct-fort-wagner-charge.jpg`
- **URL (Commons original, 1520×1135):** https://upload.wikimedia.org/wikipedia/commons/8/86/The_Storming_of_Ft_Wagner-lithograph_by_Kurz_and_Allison_1890.jpg
- **caption:** The 54th Massachusetts storms Battery Wagner at twilight, July 18,
  1863 — a Black soldier driving the national colors up the parapet at the center
  of the charge. This is the print that fixed the image in the national memory:
  the regiment that proved its point in the only currency the doubters accepted.
- **credit:** Kurz & Allison · chromolithograph · 1890 · Wikimedia Commons / Library of Congress · public domain (published pre-1929)
- **placement:** after the heading **## The battles that proved them** (illustrates
  the Fort Wagner / Carney passage)
- **subject-verification:** Commons File "The Storming of Ft Wagner-lithograph by
  Kurz and Allison 1890.jpg"; imageinfo → "Public domain," Kurz & Allison, 1890.
  Depicts the 54th Mass. assault on Fort/Battery Wagner with a Black color-bearer
  — matches the Carney/flag beat. (Dramatized 1890 print, not a photo; standard
  and unambiguously PD.)
- **orientation:** **LANDSCAPE** (1520×1135).

### 10. usct-fort-pillow-massacre
- **key:** fort-pillow-massacre
- **filename:** `usct-fort-pillow-massacre.jpg` *(note: source is PNG; convert to JPG on import, or keep as `.png`)*
- **URL (Commons original PNG, 1375×950):** https://upload.wikimedia.org/wikipedia/commons/b/bf/Fort_Pillow_Massacre%2C_Kurz_and_Allison%2C_Chicago%2C_1885.png
- **caption:** Kurz & Allison's print of the Fort Pillow massacre, April 12, 1864,
  where Confederate cavalry under Nathan Bedford Forrest killed surrendering Black
  soldiers — the atrocity that turned "Remember Fort Pillow!" into a USCT battle
  cry.
- **credit:** Kurz & Allison · chromolithograph · 1885 · Wikimedia Commons · public domain (published pre-1929)
- **placement:** after the heading **## Remember Fort Pillow**
- **subject-verification:** Commons File "Fort Pillow Massacre, Kurz and Allison,
  Chicago, 1885.png"; imageinfo → "Public domain," Kurz & Allison, 1885. Subject
  is the Fort Pillow massacre — matches the section. (Dramatized period print; the
  app's caption frames it as the contemporary *memory*-image, which is honest.)
- **orientation:** **LANDSCAPE** (1375×950).

### 11. usct-douglass-portrait
- **key:** douglass-portrait
- **filename:** `usct-douglass-portrait.jpg`
- **URL (Commons original, 2089×3000):** https://upload.wikimedia.org/wikipedia/commons/c/c5/Frederick_Douglass_%28circa_1879%29.jpg
- **caption:** Frederick Douglass — formerly enslaved, now the most famous Black
  man in America — who recruited for the 54th Massachusetts (two of his own sons
  enlisted) and argued that a Black man with "an eagle on his button, and a musket
  on his shoulder" had earned a claim to the Republic no power could deny.
- **credit:** George Kendall Warren · photograph · c. 1879 · Wikimedia Commons · public domain (published pre-1929)
- **placement:** after the heading **## An eagle on his button**
- **subject-verification:** Commons File "Frederick Douglass (circa 1879).jpg";
  imageinfo → "Public domain," George K. Warren, c. 1879. Unmistakable Douglass
  portrait. **Caveat:** dated c. 1879 (post-war) — caption makes no wartime claim
  about the photo itself, only about Douglass's wartime role. (If a strictly
  wartime Douglass is preferred, Commons has 1860s CDVs; this Warren portrait is
  the highest-quality PD studio image.)
- **orientation:** **PORTRAIT** (2089×3000).

---

## SUMMARY

11 images verified (1 portrait hero + 10 inline figures), all public domain
(LOC "no known restrictions" + pre-1929, or Commons "Public domain" pre-1929),
each mapped to a specific `## heading`. Mix: 5 LOC period photographs, 3 Commons
period photographs, 3 Kurz & Allison / period prints; orientation split 5
portrait / 6 landscape (hero is **portrait**).

**Subjects I could NOT find a clean PD image for:** none were left unfilled —
every brief-named subject is covered EXCEPT the **Shaw Memorial (Saint-Gaudens
relief)**, which I deliberately omitted: a photograph of that 1897 sculpture
carries its own potential photo/derivative-work rights and is not cleanly PD, and
the Fort Wagner / 54th Massachusetts beat is already covered by the
unambiguously-PD Kurz & Allison charge print (#9). No other gaps.
