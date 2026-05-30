# Medicine & Disease (1861–1865) — Verified Image Manifest

Section source: `audits/war-pipeline/medicine-final.md`.
Proposal: **1 hero + 11 inline figures** (top of the 9–11 range; three nurse portraits
are kept because the brief named Barton, Dix, and Susie King Taylor as distinct targets).

**Verification method.** LOC images were resolved through the LOC item JSON API
(`loc.gov/item/<id>/?fo=json`), and every chosen `tile.loc.gov/.../<id>v.jpg` URL was
HTTP-fetched and returned `200 image/jpeg`. The one Wikimedia Commons image (Gettysburg
amputation) was resolved through the Commons MediaWiki API, which returned its canonical
`upload.wikimedia.org` original URL, exact pixel dimensions (3000×2388), and license
("Public domain"); a direct byte-fetch from this sandbox was blocked by an
**IP-level Wikimedia 429 rate-limit** (not a missing file) — existence/PD/dimensions are
API-confirmed and the URL is the canonical original. **No CC-licensed image is used.**
Several attractive surgical-kit / Minié-ball photos on Commons were **rejected** because
they are modern photographs of antique objects (CC BY / CC BY-SA), which carry a fresh
photographer copyright and fail the PD-only rule.

**PD basis legend.** LOC Civil War glass-negative & related-print images carry the LOC
statement "no known restrictions on publication"; the underlying photographs were all
made 1861–1865 and published well before 1929 → public domain. The Susie King Taylor
frontispiece was published 1902 (PD, pre-1929). The Gettysburg amputation negative is a
U.S. National Archives holding, photographed 1863 → PD.

---

## HERO — Savage Station field hospital

- **slug/key:** `hero-field-hospital`
- **filename:** `medicine-hero-field-hospital.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/01000/01063v.jpg`
- **orientation:** landscape (near-square, 1024 × 1016) — works as a full-width hero band
- **caption:** This is what the war's dying actually looked like — not a charge, but a hillside of wounded men laid out in the open at Savage's Station, Virginia, two days after the fighting, waiting for care that the army had barely figured out how to give. Most of the men in this frame were captured by Confederate troops the next day.
- **credit:** James F. Gibson · albumen photograph (glass-negative) · 1862 · Library of Congress, Prints & Photographs Division · public domain
- **place:** **hero** (top of section, above "The Killer Was Never the Bullet")
- **subject-verification:** LOC item 2018666198, titled "[Savage Station, Va. Field hospital after the battle of June 27]," created 1862 June 30, photographer Gibson; the canonical field-hospital image of the Peninsula Campaign. Matches a field-hospital hero. PD: 1862 photo, LOC "no known restrictions."

---

## FIGURE 1 — Jonathan Letterman and his medical staff

- **slug/key:** `letterman`
- **filename:** `medicine-letterman.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/03700/03769v.jpg`
- **orientation:** landscape (1024 × 833)
- **caption:** Jonathan Letterman (seated, second from left), the army surgeon history calls the "Father of Battlefield Medicine," photographed with his medical staff at Warrenton, Virginia, in November 1862 — months after he had rebuilt the Army of the Potomac's collapsed medical service from scratch.
- **credit:** Alexander Gardner · albumen photograph (glass-negative) · 1862 · Library of Congress, Prints & Photographs Division · public domain
- **place:** after the paragraph introducing Letterman as Medical Director, in **"The man who got the wounded off the field"** (the paragraph beginning "That man was **Jonathan Letterman (Union)**…")
- **subject-verification:** LOC item 2018666270, "[Warrenton, Va. Dr. Jonathan Letterman, medical director of the Army of the Potomac and staff]," 1862 November, photographer Gardner. Subject = Letterman, exactly the section's named reformer. PD: 1862 photo, LOC "no known restrictions."

---

## FIGURE 2 — The ambulance corps in action

- **slug/key:** `ambulance-corps`
- **filename:** `medicine-ambulance-corps.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/03900/03950v.jpg`
- **orientation:** landscape (1024 × 848)
- **caption:** A Zouave ambulance crew demonstrates lifting a wounded man into a horse-drawn ambulance — the kind of trained, medically-controlled stretcher work that did not exist until Letterman invented the Ambulance Corps in August 1862. Getting the wounded off the field had finally become somebody's actual job.
- **credit:** unattributed (Brady studio) · albumen photograph (glass-negative) · c. 1862–1865 · Library of Congress, Prints & Photographs Division · public domain
- **place:** after the paragraph describing the **Ambulance Corps**, in "The man who got the wounded off the field" (the paragraph beginning "His first move, in August 1862, was to create the army's first organized **Ambulance Corps**…")
- **subject-verification:** LOC item 2018667143, "[Unknown location. Zouave ambulance crew demonstrating removal of wounded soldiers from the field]," c. 1860–1865. Directly depicts ambulance-corps evacuation. PD: Civil War glass negative, LOC "no known restrictions."

---

## FIGURE 3 — Amputation under chloroform

- **slug/key:** `amputation-anesthesia`
- **filename:** `medicine-amputation-anesthesia.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/3/32/Amputation_being_performed_in_a_hospital_tent%2C_Gettysburg%2C_07-1863_-_NARA_-_520203.jpg`
- **orientation:** landscape (3000 × 2388)
- **caption:** The myth says the soldier was awake, biting a bullet. The photograph says otherwise: an amputation staged for the camera outside a Gettysburg hospital tent in July 1863, with an officer at the head of the table holding a cloth of chloroform over the patient's face. They had solved the pain. They had not yet solved the dirt on the surgeon's hands.
- **credit:** attributed to Charles J. & Isaac G. Tyson · albumen photograph · 1863 · U.S. National Archives and Records Administration (via Wikimedia Commons) · public domain
- **place:** in **"They had the anesthesia. They didn't have the soap."** — after the paragraph that busts the "bite the bullet" myth (the paragraph beginning "The popular picture of Civil War surgery…" or the chloroform paragraph that follows)
- **subject-verification:** Commons "File:Amputation being performed in a hospital tent, Gettysburg, 07-1863 - NARA - 520203.jpg," NARA 520203; the man at the patient's head administering chloroform is exactly what the section's anesthesia myth-bust describes. Tasteful: staged, no visible gore. PD: 1863, NARA, Commons license = "Public domain." *(Direct byte-fetch blocked by Wikimedia IP 429; URL/dimensions/PD confirmed via Commons API.)*

---

## FIGURE 4 — Empty sleeves: the maimed come home

- **slug/key:** `empty-sleeves`
- **filename:** `medicine-empty-sleeves.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/04100/04166v.jpg`
- **orientation:** landscape (1024 × 824)
- **caption:** Maimed soldiers — empty sleeves pinned across their coats, men on crutches and missing legs — gathered outside a relief office in Washington in April 1865. Roughly 70,000 men came home from this war missing a limb, and what the country built to replace those limbs founded the American prosthetics industry.
- **credit:** unattributed (Brady studio) · albumen photograph (glass-negative) · 1865 · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"After the saw: a nation of empty sleeves"** — after the opening paragraph ("Roughly 70,000 soldiers lost a limb…")
- **subject-verification:** LOC item 2018667097, "[Washington, D.C. Maimed soldiers and others before office of U.S. Christian Commission]," 1865 April; shows actual amputee veterans with pinned/empty sleeves and crutches — the literal "empty sleeve" image the section invokes. PD: 1865 photo, LOC "no known restrictions."

---

## FIGURE 5 — Chimborazo: a hospital the size of a town

- **slug/key:** `chimborazo`
- **filename:** `medicine-chimborazo.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/33600/33629v.jpg`
- **orientation:** landscape (1024 × 713)
- **caption:** Chimborazo Hospital sprawling across its hill in Richmond in April 1865 — roughly 90 long, low wards spread over nearly 150 buildings, one of the largest military hospitals in the world. It admitted nearly 78,000 patients, and the labor that kept it running was done in large part by enslaved people hired out by their owners.
- **credit:** unattributed · albumen print on card mount · photographed 1865 (printed 1880s) · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"Cities of the sick"** — after the paragraph introducing **Chimborazo Hospital** (the enslaved-labor paragraph can sit just below it)
- **subject-verification:** LOC item 2012650183, "Chimborazo Hospital, (Confederate) Richmond, Va., April, 1865." Subject = Chimborazo, the section's named Confederate mega-hospital. PD: 1865 photograph, LOC "no known restrictions."

---

## FIGURE 6 — Inside a Union hospital ward

- **slug/key:** `armory-square-ward`
- **filename:** `medicine-armory-square-ward.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/ppmsca/33700/33750v.jpg`
- **orientation:** landscape (1024 × 720)
- **caption:** A ward at Armory Square Hospital in Washington — the long, high-ceilinged, well-ventilated "pavilion" design that the Union built by the dozen. Beds line both walls under flags and greenery; the spacing and the open air were meant to carry off "bad airs." The theory was wrong, but the clean, airy practice happened to work, and these hospitals kept death rates surprisingly low.
- **credit:** unattributed · albumen print · photographed 1862–1865 (printed 1880s) · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"Cities of the sick"** — after the **Satterlee / pavilion-design** paragraphs (the Union counterpart to the Chimborazo figure; pairs with the "pavilion design" discussion)
- **subject-verification:** LOC item 2013645505, "A Ward in Armory Square Hospital, Washington, D.C." Interior ward view illustrating the pavilion design the section describes. PD: wartime photograph, LOC "no known restrictions."

---

## FIGURE 7 — The Sanitary Commission's Home Lodge

- **slug/key:** `sanitary-commission`
- **filename:** `medicine-sanitary-commission.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/04100/04155v.jpg`
- **orientation:** landscape (1024 × 830)
- **caption:** Workers of the United States Sanitary Commission outside the Home Lodge in Washington in June 1863. The Commission — run by volunteers, bankrolled by public "Sanitary Fairs," and famously managed day-to-day by Central Park designer Frederick Law Olmsted — inspected the filthy camps, supplied what the army lacked, and helped seed modern public health almost by accident.
- **credit:** unattributed (Brady studio) · albumen photograph (glass-negative) · 1863 · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"The amateurs who organized the war's mercy"** — after the paragraph introducing the **United States Sanitary Commission** and its leaders
- **subject-verification:** LOC item 2018667094, "[Washington, D.C. Group of Sanitary Commission workers at the entrance of the Home Lodge]," 1863 June. Subject = the Sanitary Commission, the section's named civilian relief body. PD: 1863 photo, LOC "no known restrictions."

---

## FIGURE 8 — Susie King Taylor

- **slug/key:** `susie-king-taylor`
- **filename:** `medicine-susie-king-taylor.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cph/3a00000/3a03000/3a03500/3a03575r.jpg`
- **orientation:** portrait (315 × 640)
- **caption:** Susie King Taylor, born into slavery near Savannah and freed at fourteen, served four years and three months with the 33rd United States Colored Troops as laundress, teacher, and nurse — walking straight into a smallpox outbreak because she'd been vaccinated and the soldiers hadn't. She was never paid a dollar, and she became the only Black woman to publish a memoir of her Civil War service.
- **credit:** unattributed · photograph reproduced as the frontispiece of *Reminiscences of My Life in Camp* · 1902 · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"The women who walked into the wards"** — beside the paragraph introducing **Susie King Taylor (Union)**
- **subject-verification:** LOC item 2003653538, "[Susie King Taylor, known as the first African American Army nurse]," from her 1902 book. Subject confirmed = Susie King Taylor. PD: published 1902 (pre-1929), LOC "no known restrictions."

---

## FIGURE 9 — Clara Barton

- **slug/key:** `clara-barton`
- **filename:** `medicine-clara-barton.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cph/3c00000/3c08000/3c08500/3c08564v.jpg`
- **orientation:** portrait (805 × 1024)
- **caption:** Clara Barton, the "Angel of the Battlefield," who carried nursing care and supplies directly into the danger at Antietam and Fredericksburg — and who wasn't a trained nurse at all, but a former teacher and Patent Office clerk running a relief operation she built by sheer will. In 1881 she founded the American Red Cross. This is the wartime portrait she chose as the one she wished to be remembered by.
- **credit:** Mathew Brady studio (later print) · photograph · Civil War era (print c. 1890–1910) · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"The women who walked into the wards"** — beside the paragraph introducing **Clara Barton (Union)**
- **subject-verification:** LOC item 93513623, "Clara Barton - from portrait taken in Civil War and authorized by her as the one she wished to be remembered by." Subject confirmed = Clara Barton. PD: wartime Brady portrait, LOC "no known restrictions."

---

## FIGURE 10 — Dorothea Dix

- **slug/key:** `dorothea-dix`
- **filename:** `medicine-dorothea-dix.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cph/3a10000/3a12000/3a12200/3a12244r.jpg`
- **orientation:** portrait (475 × 640)
- **caption:** Dorothea Dix, appointed Superintendent of Army Nurses in June 1861 — the first woman ever to hold so senior a federally appointed post. She got the job because decades of reorganizing the nation's asylums had taught her, better than almost anyone alive, how to build an institution from nothing. She vetted the Union's nurses with a famously stern hand, preferring plain, older, sober women.
- **credit:** unattributed · photograph (b&w copy negative) · mid-19th century · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"The women who walked into the wards"** — beside the paragraph introducing **Dorothea Dix (Union)**
- **subject-verification:** LOC item 2004671913, "Dorothea Lynde Dix," head-and-shoulders portrait. Subject confirmed = Dorothea Dix. PD: pre-1929 portrait, LOC "no known restrictions."

---

## FIGURE 11 — The embalming surgeon

- **slug/key:** `embalming`
- **filename:** `medicine-embalming.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/cwpb/01800/01887v.jpg`
- **orientation:** landscape (1024 × ~835)
- **caption:** Dr. Richard Burr, an embalming surgeon with the Army of the James, demonstrating his trade over a dead soldier. Before the war, embalming was rare in America; the need to ship sons home recognizable, over long distances, created a brand-new commercial industry almost overnight — one that got its biggest advertisement when Lincoln's embalmed body toured the country by funeral train in 1865.
- **credit:** unattributed (Brady studio) · albumen photograph (glass-negative) · c. 1860–1865 · Library of Congress, Prints & Photographs Division · public domain
- **place:** in **"What the war wrote down"** — after the paragraph on **embalming** and Thomas Holmes (before the *Medical and Surgical History* paragraph)
- **subject-verification:** LOC item 2018667145, "[Dr. Richard Burr, an embalming surgeon in the Army of the James demonstrating the procedure on a dead soldier]," c. 1860–1865; the standard period image of wartime embalming. Tasteful: the body is fully clothed, no wound shown. PD: Civil War glass negative, LOC "no known restrictions."

---

## SUMMARY

**12 images proposed (1 hero + 11 inline figures), all verified public domain.**
Could **not** source a PD image for: the **Minié ball / surgeon's amputation kit as a stand-alone object** ("The soft lead ball that shattered bone") — the only good Commons photos of bullets and instrument cases are modern CC-licensed shots, so that beat is instead carried visually by Figure 3 (the amputation under chloroform). No PD photo was sought for the abstract beats (disease catalog, USCT disparity, Confederate drug-smuggling under blockade), which have no contemporaneous photographic subject.
