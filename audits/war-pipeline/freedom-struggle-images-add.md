# The Freedom Struggle — Additional Verified Image Manifest

Section source: `audits/war-pipeline/freedom-struggle-final.md` ·
Reader page: `src/app/war-civil-war/off-the-battlefield/freedom-struggle/page.tsx`.

This is an **ADD-ON** manifest. The section already ships a hero + two inline figures:
- `/war-img/freedom-struggle-walker.jpg` — *Freedom's Journal* front page (after **The man in the used-clothing shop**)
- `/war-img/freedom-struggle-tubman.jpg` — Harriet Tubman (in **Stealing themselves free**)

Proposal: **1 replacement LANDSCAPE hero + 7 additional inline figures** → **9 images total**
across the section (within the 8–10 target). None duplicate the two existing figures
(the new Walker image is the *Appeal* title page, a different object from the existing
*Freedom's Journal* front page).

**Why a new hero.** The current hero (`freedom-struggle-hero.jpg`) is a tall Frederick
Douglass portrait that crops badly in the wide hero band. The replacement is a
near-landscape mass-meeting engraving — a hall full of Black delegates *in session* — which
carries the section's whole thesis (agency, self-organization) and fills a wide band.

**Verification method.** All images resolved through the Wikimedia Commons MediaWiki
imageinfo API, which returned the canonical `upload.wikimedia.org` original URL, exact
pixel dimensions, and license. Every chosen direct URL was then HTTP-fetched from this
sandbox and returned **`200 image/*`** (no Wikimedia 429 throttling occurred this pass —
all byte-fetches succeeded). The LOC search/item JSON API is currently behind a Cloudflare
challenge / 429 from this sandbox, so subjects sourced from LOC are used via their Commons
mirrors (canonical upload.wikimedia.org originals, LOC catalog IDs preserved in filenames).

**PD basis.** Every image is a pre-1929 print/photograph/engraving (1829–1869) or a faithful
photographic reproduction of such a public-domain work; Commons license field reads
**"Public domain"** for each. **No CC-licensed image is used.** (The MET's CC0 Sojourner
Truth carte was rejected in favor of the LOC public-domain copy of the same image, to keep
the manifest strictly PD-tagged rather than CC0.)

---

## HERO — A Black national convention in session

- **slug/key:** `hero-ls`
- **filename:** `freedom-struggle-hero-ls.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/2/2a/The_National_Colored_Convention_in_session_at_Washington%2C_D.C._-_sketched_by_Theo._R._Davis._LCCN90715756.jpg`
- **orientation:** landscape (4096 × 3266) — fills a wide hero band; the full hall reads at thumbnail size
- **caption:** This is what the freedom struggle looked like from the inside — a hall packed with Black delegates in session, arguing strategy and drafting a platform for a country that gave them no vote in its real one. They had been holding national conventions like this one since 1830, decades before the war, building a Black political congress the nation pretended did not exist.
- **credit:** sketched by Theodore R. Davis · wood engraving, *Harper's Weekly* · 1869 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** hero
- **subject-verification:** Commons "File:The National Colored Convention in session at Washington, D.C. - sketched by Theo. R. Davis. LCCN90715756.jpg," LOC LCCN 90715756, published *Harper's Weekly* 1869 — a Colored Convention in session, the exact institution the section threads through (Mother Bethel 1830 → "more than sixty gatherings between 1830 and 1864"). Agency-forward mass meeting, not victimhood. PD: 1869 engraving, pre-1929.

---

## FIGURE 1 — David Walker's *Appeal* title page

- **slug/key:** `walker-appeal`
- **filename:** `freedom-struggle-walker-appeal.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/5/57/David_Walkers_Appeal_1830_edition.jpg`
- **orientation:** portrait (800 × 1440)
- **caption:** The title page of *Walker's Appeal* — the pamphlet a free Black shopkeeper sewed into sailors' coats and smuggled south in 1829, two years before any white-led abolition movement existed. The most radical anti-slavery document of the pre-war era came first, and it came from a secondhand-clothing shop.
- **credit:** David Walker · pamphlet, 3rd edition · 1830 · public domain (via Wikimedia Commons)
- **placement:** after **The man in the used-clothing shop**
- **subject-verification:** Commons "File:David Walkers Appeal 1830 edition.jpg," dated 1830 (3rd edition); the title page of *Walker's Appeal in Four Articles*. Matches the section's named document exactly; distinct from the existing *Freedom's Journal* figure. PD: 1830 imprint.

---

## FIGURE 2 — The capture of Nat Turner

- **slug/key:** `nat-turner`
- **filename:** `freedom-struggle-nat-turner.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/d/d0/Nat_Turner_captured.jpg`
- **orientation:** near-square (750 × 720)
- **caption:** Nat Turner taken at last in the Southampton woods, two months after the rising — a hatchet still in his hand, a militiaman's musket leveled at him. The South's deepest fear had a face, and the lesson it drew was to outlaw Black literacy, thought, and assembly by law.
- **credit:** wood engraving after William Henry Shelton · 19th century · Library of Congress (via Wikimedia Commons) · public domain
- **placement:** after **The Prophet**
- **subject-verification:** Commons "File:Nat Turner captured.jpg," described as "Discovery of Nat Turner: wood engraving illustrating Benjamin Phipps's capture of Nat Turner on October 30, 1831," artist William Henry Shelton. Depicts the **capture**, not the killings — deliberately the non-lurid engraving (the gory "Horrid Massacre in Virginia" plate was rejected). PD: 19th-century engraving.

---

## FIGURE 3 — Frederick Douglass, the young firebrand

- **slug/key:** `douglass`
- **filename:** `freedom-struggle-douglass.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/2/2a/Samuel_J._Miller_-_Frederick_Douglass_-_Google_Art_Project.jpg`
- **orientation:** portrait (4786 × 6001)
- **caption:** Frederick Douglass around 1850 — barely a decade out of slavery, already the most commanding voice in the country. He sat for this daguerreotype unsmiling and direct, by design: a man who intended to do his own thinking, and to make the nation listen.
- **credit:** Samuel J. Miller · daguerreotype · c. 1847–52 · Art Institute of Chicago (via Wikimedia Commons / Google Art Project) · public domain
- **placement:** after **The movement and its Black engine**
- **subject-verification:** Commons "File:Samuel J. Miller - Frederick Douglass - Google Art Project.jpg," the Art Institute of Chicago's c.1847–52 Miller daguerreotype — the canonical strong *young* Douglass portrait, matching the section's "towering figure" who "intended to do the thinking himself." PD: pre-1929 daguerreotype. (This is the high-res original; a separate small retouched copy exists but was rejected for resolution.)

---

## FIGURE 4 — Sojourner Truth: "I Sell the Shadow to Support the Substance"

- **slug/key:** `truth`
- **filename:** `freedom-struggle-truth.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/4/44/Sojourner_Truth_LCCN98501244.jpg`
- **orientation:** portrait (1588 × 2474)
- **caption:** Sojourner Truth sold cartes-de-visite like this one to fund her own work, stamping each with her terms: "I Sell the Shadow to Support the Substance." She could not read or write, but she controlled her own image and her own income — a former slave bankrolling her activism by selling pictures of herself.
- **credit:** carte-de-visite · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** after **The movement and its Black engine**
- **subject-verification:** Commons "File:Sojourner Truth LCCN98501244.jpg," LOC LCCN 98501244, 1864 carte-de-visite bearing the printed line "I Sell the Shadow to Support the Substance. SOJOURNER TRUTH." The exact image the brief names; subject confirmed by the printed caption on the card. PD: 1864, LOC public domain. (The MET CC0 copy of this same carte was rejected to keep the manifest strictly PD-tagged.)

---

## FIGURE 5 — The resurrection of Henry "Box" Brown

- **slug/key:** `box-brown`
- **filename:** `freedom-struggle-box-brown.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/e/ec/The_resurrection_of_Henry_Box_Brown_at_Philadelphia%2C_who_escaped_from_Richmond_Va._in_a_bx_3_feet_long_2_1-2_ft._deep_and_2_ft_wide_LCCN2004665363.jpg`
- **orientation:** landscape (5916 × 4558)
- **caption:** Henry "Box" Brown climbing out of the crate in which he had mailed himself out of slavery — twenty-seven hours nailed inside a box three feet long, shipped from Richmond to the abolitionists of Philadelphia. The men around him called it a resurrection. So did the print's title. Stealing yourself free could be an act of sheer audacious engineering.
- **credit:** Samuel W. Rowse · lithograph · 1850 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** after **Stealing themselves free**
- **subject-verification:** Commons "File:The resurrection of Henry Box Brown at Philadelphia...LCCN2004665363.jpg," LOC LCCN 2004665363, 1850 lithograph by Samuel W. Rowse depicting Brown emerging from his shipping crate. Directly illustrates the section's thesis of escape-as-self-liberation ("simply walks out the door"). PD: 1850 lithograph. (Distinct from the existing Tubman figure in the same section.)

---

## FIGURE 6 — William Still, the record-keeper

- **slug/key:** `still`
- **filename:** `freedom-struggle-still.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/7/75/William_Still_portrait.png`
- **orientation:** near-square (688 × 707)
- **caption:** William Still, the free-born Black clerk who chaired Philadelphia's vigilance committee and did the bravest thing a bureaucrat can do: he wrote it all down. Every freedom-seeker who passed through, he interviewed and recorded — then hid the notebooks, so the families slavery tore apart might one day use them to find each other again.
- **credit:** engraving, frontispiece of *The Underground Railroad Records* · 1872 · public domain (via Wikimedia Commons)
- **placement:** after **Stealing themselves free**
- **subject-verification:** Commons "File:William Still portrait.png," described as the frontispiece portrait of William Still, "Father of the Underground Railroad," from his 1872 book *The Underground Railroad Records*. Subject = William Still, named in the section as its "most meticulous" conductor. PD: 1872 engraving.

---

## FIGURE 7 — Anthony Burns, marched back into slavery

- **slug/key:** `anthony-burns`
- **filename:** `freedom-struggle-anthony-burns.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/7/7e/Anthony_Burns_LCCN2003689280.jpg`
- **orientation:** portrait (1124 × 1536)
- **caption:** Anthony Burns at the center of his own story — ringed by vignettes of his arrest in Boston, his "trial," and the bayonet-lined march back to a Virginia ship. It took fifteen hundred militia, federal troops, and a cannon to drag one man half a mile to the water past fifty thousand jeering citizens. The spectacle radicalized moderates no pamphlet ever could.
- **credit:** drawn by Barry from a daguerreotype by Whipple & Black; engraved by John Andrews · 1855 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** after **The hinge**
- **subject-verification:** Commons "File:Anthony Burns LCCN2003689280.jpg," LOC LCCN 2003689280, 1855 print: a central portrait of Burns framed by scenes of his Boston rendition. Subject = Anthony Burns, the section's named "second great flashpoint." Agency-centered (Burns at the center, not a victim tableau). PD: 1855 print.

---

## SUMMARY

**8 images proposed (1 replacement landscape hero + 7 inline figures), all verified public domain**,
joining the 2 existing inline figures for **9 total** across the section.

| heading | new figure(s) |
|---|---|
| *(hero)* | National Colored Convention in session (landscape) |
| The man in the used-clothing shop | Walker's *Appeal* title page *(existing: Freedom's Journal)* |
| The Prophet | Nat Turner captured |
| The movement and its Black engine | young Frederick Douglass · Sojourner Truth carte |
| Stealing themselves free | Henry "Box" Brown resurrection · William Still *(existing: Tubman)* |
| The hinge | Anthony Burns rendition |
| What the struggle had done | *(no figure — closing synthesis, no single PD subject)* |

**Rejected / not sourced:** the MET CC0 Sojourner Truth carte (used the LOC PD copy of the
same image instead, to stay strictly PD-tagged); the lurid "Horrid Massacre in Virginia"
Nat Turner plate (used the non-gory capture engraving instead, per the brief); a low-res
retouched young-Douglass copy (used the high-res Miller daguerreotype original instead).
A standalone Garrison/*Liberator* masthead and a Webber *Underground Railroad* painting were
verified PD and available but **not placed** — the masthead reads thin at figure scale and
the section deliberately frames Garrison as the white ally arriving *after* the Black
movement, while the Webber painting is a white painter's 1893 reconstruction; the
period-Black-led images above carry those beats with stronger agency. (Verified URLs on hand
if a Liberator inline is later wanted:
`https://upload.wikimedia.org/wikipedia/commons/5/55/The_Liberator_15_December_1854.jpg`.)
The **What the struggle had done** closing section (Delany, *Dred Scott*, the Republicans)
has no single contemporaneous PD subject that beats leaving it imageless.
