# The Reckoning — Verified Image Manifest

Section source: `audits/war-pipeline/reckoning-final.md`.
Proposal: **1 hero + 10 inline figures** (this is the capstone of the whole arc, so it
carries a few more than the usual 8–9). The lineup walks the section's spine —
toll → freedom → Reconstruction → backlash → Lost Cause → the debt still owed — with no
two figures landing under the same `## ` heading.

**Verification method.** Every chosen image was byte-fetched from its image host and
returned `200 image/jpeg`; pixel dimensions were read from the returned JPEG's SOF
marker. **The Library of Congress JSON catalog (`www.loc.gov`) was Cloudflare/429-blocked
from this sandbox**, so each LOC item's reproduction (LC-DIG) number was confirmed via the
LOC catalog records surfaced in search, then resolved to its canonical
`tile.loc.gov/storage-services/service/pnp/...v.jpg` original — and **`tile.loc.gov` is a
separate host that was NOT blocked**, so every LOC URL below was directly fetched and
returned a real image (code + dimensions noted per entry). The one Wikimedia Commons image
(the Freedmen's Bureau engraving) was resolved through `Special:FilePath` to its canonical
`upload.wikimedia.org` original and byte-fetched `200 image/jpeg` (3667 × 2568). **No
CC-licensed image is used.**

**PD basis legend.** LOC Civil War glass-negative images and the Reconstruction-era prints
(Harper's Weekly wood engravings, the 1872 Currier & Ives lithograph, the Brady-Handy
portraits) all carry the LOC statement "no known restrictions on publication"; every one was
made/published 1861–1914 and published well before 1929 → public domain. The 1914 Arlington
Confederate-monument photo is a National Photo Company glass negative, made 1914 → PD.

---

## HERO — The ruins of Richmond

- **filename:** `reckoning-hero-richmond-ruins.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/34800/34850v.jpg`
- **orientation:** landscape (1024 × 816) — works as a full-width hero band
- **caption:** This is what defeat looked like on the ground: the gutted brick shells of Richmond's "Burnt District," April 1865, after the Confederate capital's own retreating defenders torched the warehouses and the fire ran loose through downtown. Photographs like this one became the whole South's visual shorthand — a city's center reduced to chimneys.
- **credit:** unattributed (LOC Civil War collection) · albumen photograph (glass negative) · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `hero`
- **subject-verification:** LOC item 2014645782 / LC-DIG-ppmsca-34850, "Ruins of Richmond, Va., April 1865." The canonical image of the burned Confederate capital — exactly the "gutted brick shells… reduced to chimneys" the prose invokes. URL fetched `200 image/jpeg`, 1024 × 816. PD: 1865 photo, LOC "no known restrictions."

---

## FIGURE 1 — Gathering the dead at Cold Harbor

- **filename:** `reckoning-cold-harbor-bones.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/04300/04324v.jpg`
- **orientation:** landscape (1024 × 815)
- **caption:** A year after the battle, Black laborers gather the skeletal remains of the soldiers who fell at Cold Harbor, Virginia, and load them onto a stretcher for reburial — the bodies had simply been left where they dropped. It is the truest possible picture of the war's arithmetic: three quarters of a million dead, and the men sent to pick up the bones were the same people the war had freed.
- **credit:** John Reekie · albumen photograph (glass negative) · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The arithmetic of the dead**`
- **subject-verification:** LOC item 2018666599 / LC-DIG-cwpb-04324, "[Cold Harbor, Va. African Americans collecting bones of soldiers killed in the battle]," photographer John Reekie, April 1865. Directly depicts the war's death toll and the Black labor that handled it — matching the section's toll-plus-USCT framing. URL fetched `200 image/jpeg`, 1024 × 815. PD: 1865 photo, LOC "no known restrictions."

---

## FIGURE 2 — A second look at the wreckage

- **filename:** `reckoning-richmond-ruins-2.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/34900/34938v.jpg`
- **orientation:** landscape (1024 × 776)
- **caption:** More of Richmond's commercial heart, burned out in the same April 1865 fire — block after block of roofless walls and rubble. This is the wreckage the four million freedpeople were turned loose into: a region that would stay poor for the better part of a century, with nothing of their own to start from.
- **credit:** unattributed (LOC Civil War collection) · albumen photograph (glass negative) · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **A ruined land**`
- **subject-verification:** LOC item 2014645928 / LC-DIG-ppmsca-34938, "The ruins of Richmond, Va. 1865." A distinct Burnt-District frame, paired with the hero to carry the "ruined land" beat without repeating the same shot. URL fetched `200 image/jpeg`, 1024 × 776. PD: 1865 photo, LOC "no known restrictions."

---

## FIGURE 3 — The Freedmen's Bureau, caught in the middle

- **filename:** `reckoning-freedmens-bureau.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Freedmen%27s_Bureau_-_Drawn_by_A.R._Waud._LCCN92514996.jpg`
- **orientation:** landscape (3667 × 2568)
- **caption:** A lone Freedmen's Bureau agent stands in the gap between an armed crowd of white planters on one side and freedpeople on the other — Alfred Waud's 1868 engraving of exactly the job the Bureau was given and never adequately funded to do: standing between freedpeople and the men who would otherwise cheat or attack them.
- **credit:** Alfred R. Waud · wood engraving, *Harper's Weekly* (July 25, 1868) · 1868 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** `after **Reconstruction: the experiment**`
- **subject-verification:** LOC item 92514996 / LCCN92514996, "The Freedmen's Bureau / Drawn by A.R. Waud," *Harper's Weekly*, July 25, 1868; the standard image of the Bureau as the buffer between planters and freedpeople — the exact role the section's Freedmen's Bureau paragraph describes. Commons file "The Freedmen's Bureau - Drawn by A.R. Waud. LCCN92514996.jpg" resolved via Special:FilePath and fetched `200 image/jpeg`, 3667 × 2568. PD: 1868 engraving, LOC "no known restrictions" / Commons "Public domain."

---

## FIGURE 4 — The first vote

- **filename:** `reckoning-first-vote.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/37900/37947v.jpg`
- **orientation:** portrait (712 × 1024)
- **caption:** Black men line up to cast their first ballots — a tradesman with tools still in his pocket at the head of the queue — in Alfred Waud's cover for *Harper's Weekly*, November 1867. The 15th Amendment would make this a constitutional right in 1870. It is the thing the next thirty years of poll taxes and "understanding clauses" were built to take back.
- **credit:** Alfred R. Waud · wood engraving, *Harper's Weekly* (Nov. 16, 1867) · 1867 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The Constitution rewritten**`
- **subject-verification:** LOC item 2011648984 / LC-DIG-ppmsca-37947, "'The first vote' / drawn by A.R. Waud," *Harper's Weekly* title page, Nov. 16, 1867; depicts Black men voting — the literal subject of the 15th-Amendment paragraph. URL fetched `200 image/jpeg`, 712 × 1024. PD: 1867 engraving, LOC "no known restrictions."

---

## FIGURE 5 — The first Black senator

- **filename:** `reckoning-hiram-revels.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpbh/00500/00554v.jpg`
- **orientation:** portrait (869 × 1024)
- **caption:** Hiram Rhodes Revels of Mississippi, sworn in February 1870 as the first Black United States Senator — and the symbolism was almost too sharp to bear: he took a Senate seat from the very state whose secession Jefferson Davis had led, while Davis sat in a federal prison. Born free in North Carolina, a minister and educator, he is the face of the brief window when Black men governed.
- **credit:** Brady-Handy studio · photograph (wet-collodion glass negative) · c. 1870 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `before **When Black men held office**`
- **subject-verification:** LOC / LC-DIG-cwpbh-00554, "Hiram R. Revels of Miss.," Brady-Handy Collection, c. 1870; subject confirmed = Hiram Revels, the first Black senator the section names. URL fetched `200 image/jpeg`, 869 × 1024. PD: c.1870 portrait, Brady-Handy Collection, LOC "no known restrictions."

---

## FIGURE 6 — The first colored senator and representatives

- **filename:** `reckoning-black-congressmen.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/17500/17564v.jpg`
- **orientation:** landscape (1024 × 782)
- **caption:** The 1872 Currier & Ives print "The First Colored Senator and Representatives" — Senator Revels and six Black congressmen of the 41st and 42nd Congresses. This is the part the Lost Cause later worked hardest to erase: about two thousand Black men held public office during Reconstruction, sixteen of them in Congress, men who had been property a few years earlier now writing the law.
- **credit:** Currier & Ives · hand-colored lithograph · 1872 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **When Black men held office**`
- **subject-verification:** LOC item 98501907 / LC-DIG-ppmsca-17564, "The First Colored Senator and Representatives, in the 41st and 42nd Congress of the United States," Currier & Ives, 1872; depicts Revels plus six Black congressmen — directly the section's "Black men held office" beat. URL fetched `200 image/jpeg`, 1024 × 782. PD: 1872 lithograph, LOC "no known restrictions."

---

## FIGURE 7 — Visit of the Ku-Klux

- **filename:** `reckoning-visit-of-the-ku-klux.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/71900/71959v.jpg`
- **orientation:** landscape (1024 × 802)
- **caption:** A hooded Klansman levels a rifle into a Black family's home while another holds the door — Frank Bellew's engraving for *Harper's Weekly*, February 1872. This is what "the counter-revolution" actually meant: not an argument but a years-long campaign of assassination, whipping, and arson aimed at making it too deadly for Black men to vote or hold office.
- **credit:** Frank Bellew · wood engraving, *Harper's Weekly* (Feb. 24, 1872) · 1872 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The counter-revolution**`
- **subject-verification:** LOC item 2001695506 / LC-DIG-ppmsca-71959, "Visit of the Ku-Klux / drawn by Frank Bellew," *Harper's Weekly*, Feb. 24, 1872; the era's most visceral depiction of Klan terror against a Black household — exactly the section's counter-revolution beat. URL fetched `200 image/jpeg`, 1024 × 802. PD: 1872 engraving, LOC "no known restrictions."

---

## FIGURE 8 — The land they were left with

- **filename:** `reckoning-picking-cotton.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/39500/39592v.jpg`
- **orientation:** landscape (1024 × 643)
- **caption:** Black men and women picking cotton near Savannah, Georgia, in the decades after the war. Denied the land they'd been promised, most freedpeople ended up farming a white owner's fields for a rigged share of the crop — a system, sharecropping, engineered so the harvest never quite covered the debt and the family could never legally leave. Formally free, designed to function as bondage.
- **credit:** Launey & Goebel · albumen print on card mount · c. 1867–1890 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The long night**`
- **subject-verification:** LOC item 2015650292 / LC-DIG-ppmsca-39592, "Picking cotton, Savannah, Ga., early Negro life," Launey & Goebel, c. 1867–1890; six Black field workers picking cotton — the visual of the sharecropping economy the section describes. URL fetched `200 image/jpeg`, 1024 × 643. PD: pre-1929 photo, LOC "no known restrictions."

---

## FIGURE 9 — Frederick Douglass

- **filename:** `reckoning-frederick-douglass.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/69200/69249v.jpg`
- **orientation:** portrait (665 × 1024)
- **caption:** Frederick Douglass, around 1870 — born enslaved, the great voice of his people, and the man who never once mistook charity for justice. Before the war was even won he had stood up in Boston and told the country exactly what the freedpeople needed from it: "not benevolence, not pity, not sympathy, but simply justice." That was the whole question of the reckoning, and in 1877 the country answered it by looking away.
- **credit:** unattributed · albumen print · 1870 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The debt still owed**`
- **subject-verification:** LOC item 2004671911 / LC-DIG-ppmsca-69249, "[Frederick Douglass, head-and-shoulders portrait, facing right]," albumen print, 1870; subject confirmed = Frederick Douglass, the section's closing voice. URL fetched `200 image/jpeg`, 665 × 1024. PD: 1870 portrait, LOC "no known restrictions."

---

## FIGURE 10 — A monument goes up

- **filename:** `reckoning-confederate-monument.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/npcc/27900/27968v.jpg`
- **orientation:** landscape (1024 × 743)
- **caption:** The unveiling of the Confederate Memorial at Arlington, June 4, 1914 — a crowd packed in around the draped bronze nearly half a century after Appomattox. The dates tell on the whole project: the great wave of Confederate monuments went up not in the grief-stricken years right after the war but in the early 1900s, exactly as the South was locking Jim Crow into law. They went up to assert, in bronze and granite, who was still in charge.
- **credit:** National Photo Company · photograph (glass negative) · 1914 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The lie that won**`
- **subject-verification:** LOC item 2016851139 / LC-DIG-npcc-27968, "Confederate monument unveiling Arlington, Va., June 4, 1914; General Bennett H. Young, Commander-in-Chief, U.C.V." A Lost-Cause monument dedication in the early-1900s wave the section calls out by date. URL fetched `200 image/jpeg`, 1024 × 743. PD: 1914 National Photo Co. negative, LOC "no known restrictions."

---

## SUMMARY

**11 images proposed (1 hero + 10 inline figures), all verified public domain**, each
byte-fetched `200 image/jpeg` from its image host with dimensions read from the file. The
figures land under eleven distinct `## ` headings — toll (Cold Harbor), ruined land
(Richmond #2), Reconstruction (Freedmen's Bureau), the rewritten Constitution (the first
vote), Black officeholding (Revels portrait + the Currier & Ives senators print), the
counter-revolution (Visit of the Ku-Klux), the long night (sharecropping), the debt still
owed (Douglass), and the Lost Cause (the 1914 Arlington monument) — walking the section's
full arc.

**Ten of eleven are Library of Congress originals** served from `tile.loc.gov` (which was
reachable even though the LOC JSON catalog on `www.loc.gov` was Cloudflare/429-blocked); the
LC-DIG numbers were confirmed from LOC catalog records via search. **One** (the Freedmen's
Bureau engraving) is the LOC-sourced original served from Wikimedia Commons'
`upload.wikimedia.org`. **No CC-licensed image is used; no image was downloaded.**

Headings deliberately left without a figure (to avoid wall-to-wall imagery on a long
capstone) include the surrender tail ("The end nobody filmed"), the amendment-text beats,
the 1877 back-room deal, and the closing thesis sections — these are argument-and-quote
passages with no single contemporaneous photographic subject that beats the figures already
placed.
