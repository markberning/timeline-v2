# Lincoln Assassinated — Verified Image Manifest

Section source: `audits/war-pipeline/assassination-final.md`.
Proposal: **1 hero + 7 inline figures**, distributed across 8 distinct headings.
**PUBLIC DOMAIN ONLY — no CC-licensed image is used.** Every period photo/print here was
made 1860–1865 and published well before 1929.

**Verification method.** Six of the eight images resolve to `tile.loc.gov` originals; every
one of those URLs was HTTP-fetched from this sandbox and returned `200 image/jpeg` (sizes
noted per entry). The LOC item-JSON endpoint (`www.loc.gov/item/<id>/?fo=json`) confirmed
the Currier & Ives shooting print directly (title/date/rights); the remaining LOC items were
resolved via the Wikimedia Commons MediaWiki API, which returned each file's canonical LOC
download path, exact pixel dimensions, date, and a "Public domain" license — and those
`tile.loc.gov` paths were then byte-verified 200. The two non-LOC originals (Booth-as-hero is
LOC; the **Seward portrait** is a U.S. National Archives holding) are confirmed via the Commons
API for URL / dimensions / PD; a direct byte-fetch of `upload.wikimedia.org` from this sandbox
is blocked by an **IP-level Wikimedia 429 rate-limit** (a network block, not a missing file) —
existence/PD/dimensions are API-confirmed and the URL is the canonical original. The
modern color "Lincoln box at Ford's Theatre" photo and similar present-day shots were
**rejected** (CC BY-SA, fresh photographer copyright — fail PD-only).

**PD basis legend.** LOC Civil War glass negatives and the LOC popular-graphic-arts / cph
prints all carry the LOC statement "No known restrictions on publication"; the underlying
photographs/prints were made 1860–1865 and published before 1929 → public domain. The Seward
portrait is a Brady-studio NARA photograph, c. 1860–1862 → PD.

---

## HERO — John Wilkes Booth, the matinee idol

- **filename:** `assassination-hero-booth.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/23800/23892v.jpg`
- **orientation:** portrait (3915 × 6022)
- **caption:** This is the face the whole country knew. John Wilkes Booth — one of the most famous actors in America, handsome, athletic, a star pulling in a fortune on the stage — in a studio portrait taken years before Good Friday, 1865. It was exactly this celebrity that let him walk up the stairs of a Washington theater unquestioned and step into the President's box.
- **credit:** unattributed studio portrait · albumen carte-de-visite photograph · c. 1860 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `hero`
- **subject-verification:** Commons "File:John Wilkes Booth, half-length studio portrait, sitting LCCN2009634256.jpg," LOC LCCN 2009634256 → LOC download path `ppmsca/23800/23892v.jpg`; dated 1860, a pre-assassination studio portrait of Booth the actor — the celebrity face the prose's hero calls for. Tile URL byte-verified `200 image/jpeg` (156 KB). PD: c.1860 photograph, LOC "no known restrictions."

---

## FIGURE 1 — Lewis Powell, manacled

- **filename:** `assassination-powell.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/04200/04208v.jpg`
- **orientation:** portrait (6050 × 7500)
- **caption:** Lewis Powell — alias "Paine" — photographed in custody at the Washington Navy Yard, seated and manacled in a dark sweater, staring straight down the lens. The biggest and most dangerous of Booth's cell, he was the man sent to knife Secretary of State Seward in his sickbed. Alexander Gardner's prison portraits of the conspirators are among the most arresting photographs of the entire war.
- **credit:** Alexander Gardner · albumen photograph (glass negative) · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **Three Knives at Once**`
- **subject-verification:** Commons "File:Washington Navy Yard, D.C. Lewis Payne, in sweater, seated and manacled LOC cwpb.04208.jpg," LOC cwpb.04208; subject = Lewis Powell/Paine, the conspirator the prose names in this section as the one assigned to Seward. Tile URL byte-verified `200 image/jpeg` (123 KB). PD: 1865 Gardner glass negative, LOC "no known restrictions."

---

## FIGURE 2 — William H. Seward

- **filename:** `assassination-seward.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/7/75/Hon._William_H._Seward%2C_N.Y._Secretary_of_State_-_NARA_-_528347.jpg`
- **orientation:** portrait (2562 × 3000)
- **caption:** Secretary of State William H. Seward, the cabinet officer who ran the nation's foreign affairs — and the man Powell was sent to kill. On the night of April 14 he lay bedridden, his jaw shattered in a carriage accident and bound in a metal-and-leather splint. That splint, by the likeliest reading, is what turned Powell's knife away from his throat and saved his life.
- **credit:** Mathew Brady studio · photograph · c. 1860–1862 · U.S. National Archives and Records Administration (via Wikimedia Commons) · public domain
- **placement:** `after **Seward's House**`
- **subject-verification:** Commons "File:Hon. William H. Seward, N.Y. Secretary of State - NARA - 528347.jpg," NARA 528347; subject = William H. Seward, the section's target. URL/dimensions/PD confirmed via Commons API (license "Public domain," c.1860–1862). *(Direct byte-fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed, canonical original.)*

---

## FIGURE 3 — Currier & Ives: the shot

- **filename:** `assassination-fords-theatre.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/pga/06000/06090v.jpg`
- **orientation:** landscape (1024 × 739)
- **caption:** The popular print of the murder, rushed out by Currier & Ives within days of the killing: Booth's pistol at the back of the President's head, Mary Todd Lincoln beside him, Major Rathbone half-risen, Clara Harris recoiling. It is a dramatization, not a witness's record — but it is the image of that night that millions of Americans first carried in their heads.
- **credit:** Currier & Ives · hand-colored lithograph · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **Ford's Theatre**`
- **subject-verification:** LOC item 90708801, item-JSON confirmed title "The assassination of President Lincoln: at Ford's Theatre, Washington, D.C., April 14th, 1865," Currier & Ives 1865, rights_advisory "No known restrictions on publication"; reproduction `pga.06090` (the factpack's LC-DIG-pga-06090). Tile URL `06090v.jpg` byte-verified `200 image/jpeg` (365 KB). Matches the section's depiction of the shooting in the box.

---

## FIGURE 4 — The deathbed, the Nation's Martyr

- **filename:** `assassination-deathbed.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/19400/19484v.jpg`
- **orientation:** landscape (1024 × ~775)
- **caption:** "Death of President Lincoln" — the Currier & Ives deathbed print of the small back room in the Petersen boardinghouse across Tenth Street, where the six-foot-four President was laid diagonally across a bed too short for him and never woke. Cabinet members, doctors, and family crowd the bedside through the long night; he died at 7:22 the next morning.
- **credit:** Currier & Ives · hand-colored lithograph · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The House Across the Street**`
- **subject-verification:** Commons "File:Death of President Lincoln- At Washington, D.C. April 15th 1865. The Nation's Martyr LCCN91794821.jpg," LOC LCCN 91794821 → LOC download path `ppmsca/19400/19484v.jpg`; subject = the Petersen House deathbed vigil the section narrates. Tile URL byte-verified `200 image/jpeg` (157 KB). PD: 1865 print, LOC "no known restrictions."

---

## FIGURE 5 — The $100,000 reward broadside

- **filename:** `assassination-reward.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cph/3g00000/3g05000/3g05300/3g05341v.jpg`
- **orientation:** portrait (1145 × 1463)
- **caption:** The War Department's wanted broadside of April 20, 1865, its photographic portraits of John H. Surratt, John Wilkes Booth, and David Herold staring out above the line "The murderer of our late beloved President, Abraham Lincoln, is still at large." Fifty thousand dollars for Booth, twenty-five thousand each for the other two — the bait that drove the largest manhunt the country had ever mounted.
- **credit:** War Department (Alfred Whital Stern Collection) · broadside with mounted photographs · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **Twelve Days**`
- **subject-verification:** Commons "File:$100,000 reward! ... is still at large LCCN96521960.jpg," LOC LCCN 96521960 → LOC download path `cph/3g.../3g05341v.jpg` (the factpack's cph.3g05341). Subject = the reward poster the section quotes verbatim. Tile URL byte-verified `200 image/jpeg` (the cph reference scan, ~7 KB). PD: 1865 primary document, LOC "no known restrictions."

---

## FIGURE 6 — The arrival on the scaffold

- **filename:** `assassination-gallows.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/stereo/1s00000/1s02000/1s02900/1s02931v.jpg`
- **orientation:** landscape (4855 × 2399)
- **caption:** Alexander Gardner's photograph of the four condemned arriving at the scaffold in the yard of the Old Arsenal Penitentiary on July 7, 1865 — Mary Surratt under a parasol at the left, Powell, Herold, and Atzerodt beside her, soldiers ringing the yard. This is the moment before the drop; minutes later Surratt became the first woman the federal government ever executed. Gardner's series is the only photographic record of the hanging.
- **credit:** Alexander Gardner · albumen photograph · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **The Gallows**`
- **subject-verification:** Commons "File:Execution of the conspirators. The arrival on the scaffold. July 7, 1865 LCCN2010648748.jpg," LOC LCCN 2010648748 → LOC download path `stereo/.../1s02931v.jpg`; this is the pre-drop "arrival on the scaffold" frame the brief specifically requested (not the post-drop hanging-bodies image). Tile URL byte-verified `200 image/jpeg` (96 KB). PD: 1865 Gardner photograph, LOC "no known restrictions."

---

## FIGURE 7 — The funeral catafalque

- **filename:** `assassination-funeral.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/pga/11500/11520v.jpg`
- **orientation:** landscape (7080 × 5504)
- **caption:** The towering black-draped catafalque and hearse of Lincoln's funeral procession, plumed and canopied, the centerpiece of the mourning that swept the country as "The Lincoln Special" carried the embalmed body 1,700 miles home to Springfield. Something like 1.5 million people filed past the coffin; the man half the country had hated was being buried as a martyr.
- **credit:** unattributed · lithograph · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `after **Father Abraham**`
- **subject-verification:** Commons "File:The catafalque, or hearse, as seen in the funeral procession of President Lincoln LCCN2003671415.jpg," LOC LCCN 2003671415 → LOC download path `pga/11500/11520v.jpg`; subject = the funeral hearse/catafalque of the 1865 mourning the section describes. Tile URL byte-verified `200 image/jpeg` (419 KB). PD: 1865 print, LOC "no known restrictions."

---

## SUMMARY

**8 images proposed (1 hero + 7 inline figures), all verified public domain, across 8 distinct
headings** (hero; Three Knives at Once; Seward's House; Ford's Theatre; The House Across the
Street; Twelve Days; The Gallows; Father Abraham). Six resolve to `tile.loc.gov` originals
byte-verified `200 image/jpeg`; the hero is likewise a LOC tile (200). The one
`upload.wikimedia.org` original (Seward, NARA 528347) is API-confirmed PD with exact
dimensions — its direct byte-fetch is blocked only by an IP-level Wikimedia 429, as flagged.
The execution image is the requested **pre-drop "arrival on the scaffold" frame**, not the
post-drop bodies. No CC-licensed image is used; modern color photos of the Ford's box were
rejected on the PD-only rule.
