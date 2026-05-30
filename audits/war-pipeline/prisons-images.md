# The Camps Behind the Lines (Prisons) — Verified Image Manifest

Section source: `audits/war-pipeline/prisons-final.md`.
Proposal: **1 hero + 10 inline figures.** Figures are spread across six different
`## ` headings so none of them stacks (Camp Sumter, the deadline sub-beat, the man
they hanged, the North's own dead, the other Southern camps, and the reckoning).

**Verification method.** Every image was resolved through the **Commons MediaWiki API**
(`commons.wikimedia.org/w/api.php`, `prop=imageinfo`, `iiprop=url|size|mime|extmetadata`),
which returned each file's canonical `upload.wikimedia.org` original URL, exact pixel
dimensions, MIME type, and license. **A direct byte-fetch of every chosen URL from this
sandbox returned an IP-level Wikimedia `429 Too Many Requests`** (HTML, not the image) —
this is a rate-limit on this IP, NOT a missing file. Per the brief, the API-confirmed
canonical original URL + dimensions + license is accepted in that case, and I am flagging
it on every entry. The LOC item JSON API (`loc.gov/item/...`) was additionally
**Cloudflare-challenge-blocked** for the whole session; the `tile.loc.gov` image host was
reachable (a spot HEAD on two ppmsca IDs returned `200 image/jpeg`), but the cleaner,
API-license-confirmed path for every LOC-origin image here is its Wikimedia Commons mirror,
whose filename embeds the exact LOC LCCN / negative number — so each LOC item is still
fully identified.

**PD-only enforcement.** Every entry below is `LicenseShortName = "Public domain"` per the
Commons API. **Two strong-looking candidates were REJECTED for being CC-licensed modern
photographs of an antique object:** `File:Captain Henry Wirz obelisk.JPG` (the 1909 Wirz
Monument) and `File:Captain Henry Wirz obelisk (cropped).JPG` are both **CC BY-SA 4.0,
shot 2014 by Michael Rivera** — a fresh photographer copyright — so the Wirz-Monument beat
in the closing section has **no PD image** and ships text-only. No CC image is used anywhere
in this manifest.

**PD basis legend.** The five LOC-origin Andersonville/Wirz/Belle-Isle images are LOC Civil
War glass-negative or related holdings made 1864–1865, published well before 1929 → public
domain (Commons records "Public domain"). The Point Lookout lithograph (1864), Salisbury
bird's-eye lithograph (1886), Libby Prison stereoview (pre-1910), Clara Barton engraving
(1867), and Dorence Atwater portrait (c. 1870) are all 19th-century works published pre-1929.

---

## HERO — Issuing rations at Andersonville

- **slug/key:** `hero-issuing-rations`
- **filename:** `prisons-hero-issuing-rations.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/a/a8/Andersonville_Prison%2C_Georgia._View_from_the_main_gate_Issuing_rations_to_thirty-three_thousand_prisoners_-_-_Photographed_by_A.J._Riddle._LCCN2017650850.jpg`
- **orientation:** landscape (7512 × 5888)
- **caption:** This is the scale the numbers can't carry — the view from Andersonville's main gate on a single August day in 1864, with thirty-three thousand men packed onto a patch of bare Georgia dirt, lining up for the day's ration of cornmeal and beans. There were no barracks. This is what "five by six feet per man" actually looked like.
- **credit:** A.J. Riddle · albumen photograph · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** **hero** (top of section)
- **subject-verification:** Commons "File:Andersonville Prison, Georgia. View from the main gate Issuing rations to thirty-three thousand prisoners ... Photographed by A.J. Riddle. LCCN2017650850.jpg," LOC item 2017650850; one of A.J. Riddle's Aug. 17 1864 series, the only contemporaneous photographs of the living camp — the iconic crowd-at-the-gate "scale" image the prose's peak-population beat describes. PD: 1864, LOC glass-negative holding. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 1 — The sea of shebangs

- **slug/key:** `shebangs`
- **filename:** `prisons-shebangs.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/9/90/Andersonville_Prison%2C_Georgia._South-east_view%2C_taken_from_the_stockade_Thirty_three_thousand_prisoners_in_bastile_-_-_Photographed_by_A.J._Riddle._LCCN2017650848.jpg`
- **orientation:** landscape (7537 × 5957)
- **caption:** Looking out over the pen from the stockade wall — Riddle's own caption reads "thirty-three thousand prisoners in bastile." Every dark smudge is a "shebang," a hole scraped in the dirt with a scrap of blanket stretched over sticks, the only shelter the men had against the Georgia sun and the winter rain.
- **credit:** A.J. Riddle · albumen photograph · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** after **Camp Sumter**
- **subject-verification:** Commons "File:Andersonville Prison, Georgia. South-east view, taken from the stockade Thirty three thousand prisoners in bastile ... A.J. Riddle. LCCN2017650848.jpg," LOC item 2017650848; Riddle's Aug. 1864 over-the-wall view of the open camp, directly illustrating the no-barracks / "shebangs" beat. PD: 1864 LOC glass negative. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 2 — The dead line

- **slug/key:** `dead-line`
- **filename:** `prisons-dead-line.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/5/59/Andersonville_Prison%2C_Georgia._South-west_view_of_the_stockade_Showing_the_dead_line_-_-_Photographed_by_A.J._Riddle._LCCN2017650869.jpg`
- **orientation:** landscape (4620 × 3764)
- **caption:** Riddle photographed the deadline itself — the low rail run a few feet inside the wall. Cross it, or even reach across it for a cleaner cup of water, and the guards in the elevated sentry boxes shot you without warning. The men learned to read that railing as the literal edge of their world.
- **credit:** A.J. Riddle · albumen photograph · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** after **The line you died for crossing**
- **subject-verification:** Commons "File:Andersonville Prison, Georgia. South-west view of the stockade Showing the dead line ... A.J. Riddle. LCCN2017650869.jpg," LOC item 2017650869; Riddle's titled "Showing the dead line" view — the exact subject of the deadline sub-beat. PD: 1864 LOC glass negative. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 3 — The execution of Henry Wirz

- **slug/key:** `wirz-execution`
- **filename:** `prisons-wirz-execution.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/9/93/Washington%2C_D.C._Adjusting_the_rope_for_the_execution_of_Wirz_LOC_cwpb.04195.jpg`
- **orientation:** landscape (1024 × 819)
- **caption:** Alexander Gardner photographed the whole sequence: here the rope is being adjusted on the scaffold in the courtyard of the Old Capitol Prison, Washington, on the morning of November 10, 1865, with soldiers ranked around the yard. Minutes later the drop failed to break Henry Wirz's neck and he strangled — the only Confederate official executed for what was done to prisoners.
- **credit:** Alexander Gardner · albumen photograph · 1865 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** after **The man they hanged for it**
- **subject-verification:** Commons "File:Washington, D.C. Adjusting the rope for the execution of Wirz LOC cwpb.04195.jpg," LOC negative cwpb.04195, artist "Gardner, Alexander," dated 1865; part of Gardner's documented Nov. 10 1865 Wirz-execution series at the Old Capitol Prison — exactly the event the prose's execution beat narrates. PD: 1865 LOC Civil War negative. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)* *(Tasteful: the scaffold and crowd, before the drop; no body shown. An alternate Gardner frame, "File:Hooded body of Captain Wirz.jpg" (959×780, PD), is available if a different moment is preferred, but is grimmer.)*

---

## FIGURE 4 — Point Lookout: the North's largest camp

- **slug/key:** `point-lookout`
- **filename:** `prisons-point-lookout.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/1/1e/Point_Lookout%2C_Md_-_U.S._Genl._Depot_for_prisoners_of_war.jpg`
- **orientation:** landscape (1024 × 706)
- **caption:** Point Lookout, Maryland — a wind-blasted spit where the Chesapeake meets the tide flats, and the largest Union prison of the war. This bird's-eye view from 1864 shows the thing the prose names: row on row of tents and no barracks at all, on ground that gave the prisoners no shelter from the winter coming off the water.
- **credit:** E. Sachse & Co. · lithograph · 1864 · Library of Congress (via Wikimedia Commons) · public domain
- **place:** after **The North's own dead**
- **subject-verification:** Commons "File:Point Lookout, Md - U.S. Genl. Depot for prisoners of war.jpg," artist "Sachse E., & Co.," dated 1864-03-02; a contemporaneous bird's-eye lithograph explicitly titled as the U.S. general depot for prisoners of war at Point Lookout — the section's named largest Union camp. PD: 1864 lithograph, pre-1929. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 5 — A living skeleton from Belle Isle

- **slug/key:** `belle-isle-survivor`
- **filename:** `prisons-belle-isle-survivor.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/8/82/Emaciated_prisoner_of_war_from_Belle_Isle%2C_Richmond%2C_Private_William_M._Smith_of_Co._D_of_8th_Kentucky_Volunteers%2C_at_the_U.S._General_Hospital%2C_Div._1%2C_Annapolis_LCCN2013645514.jpg`
- **orientation:** portrait (687 × 1024)
- **caption:** Private William M. Smith of the 8th Kentucky, photographed at the Annapolis military hospital after his release from Belle Isle in Richmond — ribs, joints, and hollow eyes, a man starved to the edge of death. Photographs exactly like this one ran in the Northern papers, horrified the public, and helped drive the deliberate retaliation rations the North then imposed on its own Confederate prisoners.
- **credit:** unattributed (Civil War glass negative) · photograph · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** after **The other Southern camps** (at the Belle Isle paragraph)
- **subject-verification:** Commons "File:Emaciated prisoner of war from Belle Isle, Richmond, Private William M. Smith of Co. D of 8th Kentucky Volunteers, at the U.S. General Hospital, Div. 1, Annapolis LCCN2013645514.jpg," LOC item 2013645514. The caption names the specific Belle Isle survivor — a named subject, not a mislabeled generic, which the factpack warned to check. This is the literal "living skeleton" image the Belle Isle beat invokes. PD: LOC Civil War glass negative. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)* *(A second named survivor, "Private Isaiah G. Bowker, 9th Maine" — File ...LCCN2013645511.jpg, 688×1024, PD — is available as an alternate.)*

---

## FIGURE 6 — Salisbury, the second-worst camp

- **slug/key:** `salisbury`
- **filename:** `prisons-salisbury.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/f/f9/Bird%27s_Eye_View_of_the_Confederate_Prison_Pen_Salisbury_North_Carolina_1864.jpg`
- **orientation:** landscape (2956 × 2180)
- **caption:** Salisbury, North Carolina — survivable for years as a small camp, then a death machine the moment the exchanges stopped and nine thousand men were crammed inside. This bird's-eye view (here showing prisoners at a ball game in the yard) captures the calm before the collapse that buried three to four thousand men in eighteen long trench graves dug across a former cornfield.
- **credit:** C.A. Kraus · chromolithograph · 1886 (after an 1864 scene) · Library of Congress (via Wikimedia Commons) · public domain
- **place:** after **The other Southern camps** (at the Salisbury paragraph)
- **subject-verification:** Commons "File:Bird's Eye View of the Confederate Prison Pen Salisbury North Carolina 1864.jpg," artist C.A. Kraus, a widely reproduced 1886 lithograph (from John Omenhausser's prisoner art) of the Salisbury prison pen — the section's named second-worst Confederate camp. PD: 1886 lithograph, pre-1929. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)* *(Note: the print's date is 1886, depicting the 1864 camp; cited as a period depiction, not a photograph.)*

---

## FIGURE 7 — Libby Prison

- **slug/key:** `libby-prison`
- **filename:** `prisons-libby-prison.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/3/3d/Libby_Prison%2C_Richmond%2C_Va%2C_by_Kilburn_Brothers.jpg`
- **orientation:** landscape (2737 × 1400)
- **caption:** Libby Prison in Richmond — a converted riverfront warehouse that held captured Union officers, notorious for its overcrowding and vermin, and famous for the February 1864 tunnel escape that got 109 officers out the floor and 59 of them clean away.
- **credit:** Kilburn Brothers · stereographic photograph · c. 1865 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** after **The other Southern camps** (at the Libby Prison paragraph)
- **subject-verification:** Commons "File:Libby Prison, Richmond, Va, by Kilburn Brothers.jpg," photographer Kilburn Brothers, a period stereoview of the Libby Prison building in Richmond — the section's named officers' prison. PD: 19th-century photograph, pre-1929. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 8 — The graveyard at Andersonville

- **slug/key:** `andersonville-graves`
- **filename:** `prisons-andersonville-graves.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/9/99/Grave_yard_at_Andersonville%2C_Georgia_Dead_men%2C_they_tell_no_tales_-_but_look_at_this_picture_and_a_tale_is_told_that_will_never_be_forgotten_-_-_Photographed_by_A.J._Riddle._LCCN2017650853.jpg`
- **orientation:** landscape (7620 × 5900)
- **caption:** Riddle titled this one himself: "Dead men, they tell no tales — but look at this picture and a tale is told that will never be forgotten." This is the ground that nearly 13,000 men went into — and that one prisoner's smuggled list, and one woman's expedition, turned from anonymous trenches into the most completely identified mass grave of the century.
- **credit:** A.J. Riddle · albumen photograph · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **place:** before **The clerk, the angel, and the war over the war**
- **subject-verification:** Commons "File:Grave yard at Andersonville, Georgia Dead men, they tell no tales ... A.J. Riddle. LCCN2017650853.jpg," LOC item 2017650853; Riddle's Aug. 1864 cemetery view — the literal graves the reckoning beat is about. PD: 1864 LOC glass negative. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 9 — Dorence Atwater

- **slug/key:** `dorence-atwater`
- **filename:** `prisons-dorence-atwater.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/a/a9/DorenceAtwaterProfile1.jpg`
- **orientation:** portrait (1127 × 1524)
- **caption:** Dorence Atwater, the young Union prisoner paroled to clerk duty who secretly copied Andersonville's death register one name at a time, convinced the Confederacy would destroy it — then smuggled it out. The government rewarded him by court-martialing him for refusing to hand over his own list; Clara Barton's lobbying got him pardoned.
- **credit:** unattributed · photograph · c. 1870 · Connecticut State Library (via Wikimedia Commons) · public domain
- **place:** after **The clerk, the angel, and the war over the war** (at the Atwater paragraph)
- **subject-verification:** Commons "File:DorenceAtwaterProfile1.jpg," held by the Connecticut State Library, identified as Dorence Atwater, c. 1870 — the section's named clerk who saved the death list. PD: 19th-century portrait, pre-1929. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## FIGURE 10 — Clara Barton

- **slug/key:** `clara-barton`
- **filename:** `prisons-clara-barton.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/0/01/Clara_Barton_1865.jpg`
- **orientation:** portrait (600 × 702)
- **caption:** Clara Barton, the "Angel of the Battlefield," who took Atwater's smuggled list and the camp's captured hospital records to Andersonville in the summer of 1865 and marked 12,461 graves with the dead man's name, rank, unit, and date — leaving only 451 "unknown." At the cemetery's dedication she was given the honor of raising the flag over the dead.
- **credit:** John Sartain (engraver) · engraving · 1867 · Library of Congress (via Wikimedia Commons) · public domain
- **place:** after **The clerk, the angel, and the war over the war** (at the Barton paragraph)
- **subject-verification:** Commons "File:Clara Barton 1865.jpg," engraver John Sartain, 1867 — a Civil-War-era portrait of Clara Barton, the section's named relief leader. PD: 1867 engraving, pre-1929. *(Direct fetch blocked by Wikimedia IP 429; URL/dimensions/PD API-confirmed.)*

---

## SUMMARY

**11 images proposed (1 hero + 10 inline figures), all verified public domain via the
Commons MediaWiki API.** Figures distributed across six headings: Camp Sumter (F1), the
deadline sub-beat (F2), "The man they hanged for it" (F3), "The North's own dead" (F4),
"The other Southern camps" (F5–F7), and the reckoning (F8–F10).

**Could not source a PD image for:** the **1909 Wirz Monument** — the only Commons photos of
the obelisk are modern (2014) **CC BY-SA 4.0** shots, rejected under the PD-only rule, so
the closing memory-war beat ships text-only. **Elmira ("Hellmira")** also has no clean PD
photograph of the camp itself on Commons (the one hit, "long may it wave," is a flag-themed
rendezvous print with a weak subject match), so the Union-camp visual is carried by Point
Lookout (F4) instead, which the prose covers in the same beat.

**Caveat on verification:** all 11 direct byte-fetches returned a Wikimedia IP-level
`429 Too Many Requests` from this sandbox; existence, canonical `upload.wikimedia.org`
original URL, exact pixel dimensions, MIME (image/jpeg), and `LicenseShortName = "Public
domain"` are **API-confirmed** for every entry, as the brief permits.
