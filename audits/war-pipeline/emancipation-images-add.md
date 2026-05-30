# The Emancipation Proclamation (`emancipation`) — ADDITIONAL Verified Image Manifest

Section source page: `src/app/war-civil-war/off-the-battlefield/emancipation/page.tsx`.
Fact pack: `audits/war-pipeline/emancipation-factpack.md` (+ `-factpack-addendum.md`).

**What this adds.** The shipped section has only a **hero** (`/war-img/emancipation-hero.jpg`,
the Carlton "Waiting for the Hour," 720×540) + **ONE inline figure** (the Carpenter "First
Reading," `/war-img/emancipation-cabinet.jpg`, under "A covenant, a deadline…"). This manifest
sources **7 ADDITIONAL verified public-domain figures** + proposes a **higher-res landscape
hero replacement** (same image/credit, 7× the resolution). Final section would carry
**hero + 8 inline figures (9 images)** — inside the 8–10 target. The existing Carpenter figure
is NOT duplicated.

**Verification method.** Wikimedia Commons originals were resolved through the Commons
MediaWiki API (`prop=imageinfo&iiprop=url|size|extmetadata`), which returned the canonical
`upload.wikimedia.org` original URL, exact pixel dimensions, and license; every chosen Commons
URL was then HTTP-fetched from this sandbox and returned **`200 image/jpeg`** (no 429). The
LOC images were resolved through LOC search JSON; the `www.loc.gov` *item-detail* API was
**IP-429-throttled** during this session, so each LOC subject/date was cross-confirmed via
web search against the canonical LOC item record, and each chosen `tile.loc.gov/.../<id>v.jpg`
URL was **HTTP-fetched and returned `200 image/jpeg`** (the image host is NOT throttled).
**No CC-licensed image is used** (one attractive Cumberland-Landing contrabands print tagged
"No restrictions" was used; it is a U.S. National Archives/period photo, PD, not a CC grant).

**PD basis legend.** LOC Civil War glass-negative/stereo images carry "no known restrictions
on publication"; all the period photographs/prints here were made 1862–1865 and the prints
published 1863–1864 → public domain (pre-1929). The Nast print, the engraved Proclamation
reproduction, and the 20th-USCT Harper's Weekly print are all 1863–1864 publications. The
Gardner Lincoln portrait (Nov 8, 1863) and the Merrill & Crosby Douglass (1860s) are PD by date.

---

## HERO (PROPOSED REPLACEMENT) — Waiting for the Hour, high-resolution

- **filename:** `emancipation-hero-ls.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/8/86/Watch_meeting%2C_Dec._31%2C_1862-Waiting_for_the_hour_-_Heard_%26_Moseley%2C_Cartes_de_Visite%2C_10_Tremont_Row%2C_Boston._LCCN98501210.jpg`
- **orientation:** landscape (5194 × 3050) — full-width hero band, 7× the current 720×540
- **caption:** Watch Night, December 31, 1862 — enslaved and free Black families gathered around a single timepiece, waiting out the last hours before the Emancipation Proclamation took effect at the stroke of midnight. The old man reading by candlelight holds the news the whole room is counting down to.
- **credit:** "Watch Meeting — Dec. 31st 1862 — Waiting for the Hour" · after William Tolman Carlton, 1863 · Heard & Moseley carte-de-visite, Boston · Library of Congress (via Wikimedia Commons) · public domain
- **placement:** hero
- **subject-verification:** Commons "File:Watch meeting, Dec. 31, 1862-Waiting for the hour - Heard & Moseley… LCCN98501210.jpg" (LOC LCCN 98501210); it is the **same image and same credit** the page already declares in `heroCredit` ("Watch Meeting — Dec. 31st 1862 — Waiting for the Hour · W. T. Carlton, 1863"), only at 5194×3050 instead of 720×540 — a clean, no-risk resolution upgrade of the identical subject. API license = "Public domain"; URL fetched 200 image/jpeg. *(If the current hero crop/palette is preferred, leave it — this is strictly a higher-res swap of the same picture.)*

---

## FIGURE 1 — Fugitives fording the Rappahannock (self-emancipation)

- **filename:** `emancipation-contraband-rappahannock.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/stereo/1s00000/1s02000/1s02800/1s02891v.jpg`
- **orientation:** landscape (1024 × 508)
- **caption:** August 1862: enslaved families ford the Rappahannock River in wagons and on horseback, fleeing toward Union lines as Confederate forces close in — the most famous photograph of the war's true first emancipators, the enslaved freeing themselves on their own two feet, more than a year before Lincoln drafted a word of the Proclamation.
- **credit:** Timothy H. O'Sullivan (Gardner's Gallery) · stereograph, albumen · August 1862 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** after **The president who said one thing — and was already doing another**
- **subject-verification:** LOC item 2011646157, "Fugitive negroes fording Rappahannock"; the O'Sullivan series of Aug 19, 1862 ("Fugitive Negroes fording the Rappahannock during Pope's retreat"), widely cited as the first photographic evidence of slaves emancipating themselves. Directly illustrates the section's contraband / Fort Monroe self-emancipation beat. Tile fetched 200 image/jpeg. PD: 1862 photo, LOC "no known restrictions."

---

## FIGURE 2 — Frederick Douglass

- **filename:** `emancipation-frederick-douglass.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/a/a8/Frederick_Douglass_by_Merrill_%26_Crosby%2C_1860s.jpg`
- **orientation:** portrait (1166 × 1907)
- **caption:** Frederick Douglass, who had freed himself from slavery and become the most powerful Black voice in America — and who spent 1861 and 1862 hammering Lincoln in print to stop fighting slavery with one hand tied: free the enslaved, and put muskets in their hands. The pressure on the president did not come from editors and Congress alone. It came from the people the war was about.
- **credit:** Merrill & Crosby studio · photograph · 1860s · public domain (via Wikimedia Commons)
- **placement:** after **The Greeley letter, read correctly**
- **subject-verification:** Commons "File:Frederick Douglass by Merrill & Crosby, 1860s.jpg"; head-and-shoulders portrait of Douglass dated 1860s — the era of his editorials demanding Black enlistment (the heading's exact subject: Douglass as a pressure-applier on Lincoln). API size 1166×1907, license "Public domain"; URL fetched 200 image/jpeg. PD: 1860s photograph, pre-1929.

---

## FIGURE 3 — The Proclamation itself (engraved reproduction)

- **filename:** `emancipation-proclamation-print.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/f/f9/Emancipation_Proclamation.jpg`
- **orientation:** portrait (6063 × 7833)
- **caption:** The document itself — an ornately engraved 1864 reproduction of the full text of the Emancipation Proclamation, sold to a North that wanted the words on its wall. The fine print is the whole story: signed as a "war measure," it named ten rebel states and pointedly exempted the loyal slaveholding ones, so it freed enslaved people only where the Union army could not yet reach them.
- **credit:** engraved by W. Roberts · printed reproduction of the Emancipation Proclamation · 1864 · public domain (via Wikimedia Commons)
- **placement:** after **What it actually said — and the hole at its center**
- **subject-verification:** Commons "File:Emancipation Proclamation.jpg," described as "Photograph of a reproduction of the Emancipation Proclamation," engraving by W. Roberts, dated 1864 — a printed broadside/engraving of the Proclamation text, exactly the document the heading dissects. API size 6063×7833, license "Public domain"; URL fetched 200 image/jpeg. PD: 1864 print, pre-1929.

---

## FIGURE 4 — Thomas Nast, "Emancipation"

- **filename:** `emancipation-nast-print.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/8/8b/The_emancipation_of_the_negroes%2C_January%2C_1863_-_The_past_and_the_future_-_Drawn_by_Mr._Thomas_Nast._LCCN2002695553.jpg`
- **orientation:** landscape (4096 × 3268)
- **caption:** Thomas Nast's "Emancipation," published in Harper's Weekly weeks after the Proclamation took effect: the horrors of slavery on the left, a hopeful free future on the right — a Black family at its own hearth, children walking to school, wages honestly paid. It is the visual argument for why people who understood slavery best celebrated a document that, on paper, had freed almost no one yet.
- **credit:** Thomas Nast · "The emancipation of the negroes, January, 1863 — the past and the future," Harper's Weekly · 1863 · Library of Congress (via Wikimedia Commons) · public domain
- **placement:** after **Why it landed like thunder anyway**
- **subject-verification:** Commons "File:The emancipation of the negroes, January, 1863 - The past and the future - Drawn by Mr. Thomas Nast. LCCN2002695553.jpg" (LOC LCCN 2002695553); the canonical Nast "Emancipation" composition, the past/future allegory of freedom — exactly the print named in the brief and the right visual for the "why it landed like thunder" celebration beat. API size 4096×3268, license "Public domain"; URL fetched 200 image/jpeg. PD: 1863 print, pre-1929.

---

## FIGURE 5 — Black soldiers: the 20th U.S. Colored Troops receive their colors

- **filename:** `emancipation-usct-colors.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/4/43/The_Twentieth_United_States_colored_troops_receiving_their_colors_on_Union_Square%2C_March_5%2C_1864_LCCN89716295.jpg`
- **orientation:** landscape (2028 × 1426)
- **caption:** The 20th United States Colored Troops receive their regimental colors before a vast crowd in New York's Union Square, March 5, 1864. The Proclamation had authorized Black men to enlist; roughly 180,000 would serve — about one in ten of all Union manpower. Men who had been property a year earlier now wore the uniform and bled for the freedom of the rest.
- **credit:** published in Harper's Weekly · wood engraving · 1864 · Library of Congress (via Wikimedia Commons) · public domain
- **placement:** after **One signature, four ways the world tilted**
- **subject-verification:** Commons "File:The Twentieth United States colored troops receiving their colors on Union Square, March 5, 1864 LCCN89716295.jpg" (LOC LCCN 89716295), Harper's Weekly 1864; depicts a United States Colored Troops regiment receiving its colors — directly illustrates the section's "rifles in the hands of the formerly enslaved" / USCT consequence. API size 2028×1426, license "Public domain"; URL fetched 200 image/jpeg. PD: 1864 print, pre-1929.

---

## FIGURE 6 — Abraham Lincoln, November 1863

- **filename:** `emancipation-lincoln-1863.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/2/21/Abraham_Lincoln_O-77_by_Gardner%2C_1863.jpg`
- **orientation:** portrait (4322 × 5441)
- **caption:** Abraham Lincoln, photographed by Alexander Gardner on November 8, 1863 — the same season he was telling the artist Francis Carpenter that if his name ever went into history it would be for the Proclamation: "my whole soul is in it." He signed it slow and firm on New Year's Day, worried only that a hand stiff from holiday handshaking would be misread as a hand that trembled with doubt.
- **credit:** Alexander Gardner · albumen photograph (Ostendorf O-77) · November 8, 1863 · public domain (via Wikimedia Commons)
- **placement:** after **“My whole soul is in it”**
- **subject-verification:** Commons "File:Abraham Lincoln O-77 by Gardner, 1863.jpg," the well-known Gardner sitting of Nov 8, 1863 (Ostendorf catalog O-77). Subject confirmed = Lincoln, in the exact period the signing beat describes. API size 4322×5441, date 1863-11-08, license "Public domain"; URL fetched 200 image/jpeg. PD: 1863 photo, pre-1929.

---

## FIGURE 7 — Freedom's human face: contrabands at Cumberland Landing

- **filename:** `emancipation-freedpeople-group.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/1/10/A_Group_of_%27Contrabands.%27_%2826973805415%29.jpg`
- **orientation:** portrait (852 × 1000)
- **caption:** A group of self-emancipated people — "contrabands" — photographed on a Virginia farm in May 1862. These were the faces of the "general strike" against slavery: families who walked toward freedom from the war's first spring, by the hundreds of thousands, faster than any government could keep up. For many of them the Proclamation's promise would not be made real until a Union army physically arrived — in Texas, not until June 1865.
- **credit:** James F. Gibson · albumen photograph · May 1862 · Library of Congress (via Wikimedia Commons) · public domain
- **placement:** after **Freedom at the speed of an army**
- **subject-verification:** Commons "File:A Group of 'Contrabands.' (26973805415).jpg," titled "Contrabands on Mr. Toller's Farm, Cumberland, May 14, 1862," creator James F. Gibson — a period LOC/NARA photograph of self-emancipated people, illustrating that closing beat's "the enslaved had walked toward that freedom from the war's first spring." Visually distinct from Figure 1 (a seated group portrait vs. the river crossing) and tied to a different prose beat. API size 852×1000, license "Public domain"; URL fetched 200 image/jpeg. PD: 1862 photo.

---

## SUMMARY

**8 images proposed: 1 hero replacement + 7 additional inline figures, all verified public domain.**
With the existing Carpenter "First Reading" figure retained, the section would carry
**hero + 8 inline figures = 9 images** (inside the 8–10 target).

Heading coverage:
- **The president who said one thing — and was already doing another** → Fig 1 (Rappahannock contrabands)
- **The Greeley letter, read correctly** → Fig 2 (Frederick Douglass)
- *A covenant, a deadline…* → existing Carpenter figure (unchanged)
- **What it actually said — and the hole at its center** → Fig 3 (engraved Proclamation)
- **Why it landed like thunder anyway** → Fig 4 (Nast "Emancipation")
- **One signature, four ways the world tilted** → Fig 5 (20th USCT colors)
- **“My whole soul is in it”** → Fig 6 (Lincoln, Nov 1863)
- **Freedom at the speed of an army** → Fig 7 (Cumberland Landing contrabands)

**Hero:** a higher-res landscape replacement IS proposed — the identical Carlton "Waiting for
the Hour" image the page already credits, at 5194×3050 vs. the current 720×540 (same subject,
same credit; no-risk resolution swap).

**Could not source a contemporaneous PD photo for:** the Juneteenth moment itself (Granger
reading General Order No. 3 at Galveston, June 19, 1865) — no period photograph of that scene
exists; that beat is instead carried honestly by Figure 7 (period contrabands, tied to the
paragraph's own "walked toward freedom from the war's first spring" line). No PD image sought
for the purely abstract consequence beats (foreign policy / British recognition; USCT pay
disparity; 13th Amendment text), which have no single contemporaneous photographic subject.
