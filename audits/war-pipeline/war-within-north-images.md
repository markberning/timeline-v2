# The War Within the North — Verified Image Manifest

Section source: `audits/war-pipeline/war-within-north-final.md`.
Proposal: **1 hero + 7 inline figures**, distributed across seven different section
headings. Every image is **public domain only** — no CC-licensed file is used.

**Verification method.** Library of Congress items were resolved through the LOC item
JSON API (`loc.gov/item/<id>/?fo=json`), which returns the canonical
`tile.loc.gov/.../<id>v.jpg` original. Wikimedia Commons portraits and prints were
resolved through the Commons MediaWiki `imageinfo` API, which returned the canonical
`upload.wikimedia.org` original URL, exact pixel dimensions, MIME type, and the
`LicenseShortName` / `DateTimeOriginal` license fields (every one reported
**"Public domain"**). Each chosen direct URL was then HTTP-fetched from this sandbox.
**Eight of nine URLs returned `200 image/jpeg` on direct byte-fetch** (the LOC "True
Issue" hero, plus all six Commons originals used as figures, plus the Burnside
portrait). One *alternative* candidate (the Grand National Democratic banner, **not
used** in the final slate) tripped a Wikimedia IP-level 429 on byte-fetch but is
API-confirmed; it is noted only in REJECTED/ALTERNATES below.

**PD basis legend.** LOC Civil War prints and the Currier & Ives 1864 lithographs
carry "no known restrictions on publication"; all were made/published 1861–1864, well
before 1929 → public domain. The Brady-Handy portraits (Vallandigham, Taney, Burnside)
were photographed 1855–1880, published pre-1929, and are tagged "Public domain" on
Commons. The Lincoln O-77 collodion is dated 8 November 1863. The Waud soldier-voting
wood engraving ran in *Harper's Weekly*, 29 October 1864.

---

## HERO — "The True Issue, or 'That's What's the Matter'"

- **filename:** `war-within-north-true-issue.jpg`
- **direct URL:** `https://tile.loc.gov/storage-services/service/pnp/pga/10000/10037v.jpg`
- **orientation:** landscape (1024 × 772)
- **caption:** The whole election in one cartoon. McClellan, the war hero, stands in the middle physically prying apart Abraham Lincoln ("No peace without Abolition!") and Confederate president Jefferson Davis ("No peace without Separation!!"), each yanking at a map of the Union — while McClellan insists "The Union must be preserved at all hazards." It was a fantasy of a candidate above the fight; the trouble was that the man under it had been handed a platform that called the war a failure, and a cartoon could not square that circle.
- **credit:** Currier & Ives · hand-colored lithograph · 1864 · Library of Congress, Prints & Photographs Division · public domain
- **placement:** `hero`
- **subject-verification:** LOC item 2003656580, "The true issue or 'That's what's the matter,'" published by Currier & Ives, c1864; the canonical pro-Democrat 1864 campaign print named directly in the fact pack image leads. Matches the section's peace-vs-war framing exactly (McClellan between Lincoln and Davis over the map of the Union). PD: 1864 lithograph, LOC "no known restrictions." Direct fetch returned `200 image/jpeg`.

---

## FIGURE 1 — Clement L. Vallandigham

- **filename:** `war-within-north-vallandigham.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/9/9b/Clement_Vallandigham_-_Brady-Handy.jpg`
- **orientation:** portrait (2712 × 4232)
- **caption:** Clement L. Vallandigham of Ohio — the Copperheads' fearless mouthpiece, the man who called the president "King Lincoln" and all but dared the government to arrest him. A lame-duck congressman with no power left to lose, he turned out to be right that arresting him was a trap: it handed the peace movement a martyr the administration spent the next year trying not to make.
- **credit:** Brady-Handy studio · photograph · between 1855 and 1865 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** `after **King Lincoln's most dangerous critic**`
- **subject-verification:** Commons "File:Clement Vallandigham - Brady-Handy.jpg," Brady-Handy Photograph Collection, subject = Clement L. Vallandigham, the section's named Copperhead leader. PD: Commons license field = "Public domain," 1855–1865 photo. Direct fetch returned `200 image/jpeg`.

---

## FIGURE 2 — Ambrose Burnside

- **filename:** `war-within-north-burnside.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/9/9b/Ambrose_Burnside_-_Brady-Handy.jpg`
- **orientation:** portrait (2074 × 2959)
- **caption:** Major General Ambrose Burnside, commander of the Department of the Ohio, whose General Order No. 38 announced that an army general could put civilians on trial for political speech. It was Burnside's soldiers who broke down Vallandigham's door at twenty minutes to three in the morning — and Burnside again, weeks later, who shut down the *Chicago Times*, only to have Lincoln overrule him both times.
- **credit:** Brady-Handy studio · photograph · c. 1865 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** `after **Arrested in the night, tried by soldiers, banished to the enemy**`
- **subject-verification:** Commons "File:Ambrose Burnside - Brady-Handy.jpg," Brady-Handy Collection, subject = Maj. Gen. Ambrose E. Burnside, the general who issued General Order No. 38 and ordered the arrest in the section. PD: Commons license field = "Public domain," pre-1929. Direct fetch returned `200 image/jpeg`.

---

## FIGURE 3 — Abraham Lincoln, November 1863

- **filename:** `war-within-north-lincoln-1863.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg`
- **orientation:** portrait (2200 × 2835)
- **caption:** The "King Lincoln" his critics raged against: Abraham Lincoln photographed in November 1863, the same year he answered the Copperheads in the Corning letter with the line that has outlived the whole episode — "Must I shoot a simple-minded soldier boy who deserts, while I must not touch a hair of a wiley agitator who induces him to desert?" The misspelling is his own.
- **credit:** Alexander Gardner · collodion print · 8 November 1863 · (via Wikimedia Commons) · public domain
- **placement:** `after **"Must I shoot a simple-minded soldier boy?"**`
- **subject-verification:** Commons "File:Abraham Lincoln O-77 matte collodion print.jpg," Ostendorf catalog O-77, dated 8 November 1863; subject confirmed = Abraham Lincoln, the section's central figure and author of the quoted Corning letter. PD: Commons license field = "Public domain," 1863. Direct fetch returned `200 image/jpeg`.

---

## FIGURE 4 — Chief Justice Roger B. Taney

- **filename:** `war-within-north-taney.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/6/66/Roger_B._Taney_-_Brady-Handy.jpg`
- **orientation:** portrait (4413 × 6402)
- **caption:** Roger B. Taney, Chief Justice of the United States and author of the despised *Dred Scott* decision — the man who, in the war's first weeks, told the president flatly that suspending habeas corpus was Congress's power, not his, and ordered the prisoner released. Lincoln simply ignored him. The Chief Justice had said no, and there was no machinery on earth to make the president obey.
- **credit:** Brady-Handy studio · photograph · between 1855 and 1860 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** `after **The Great Writ and the Chief Justice who said no**`
- **subject-verification:** Commons "File:Roger B. Taney - Brady-Handy.jpg," Brady-Handy Collection, subject = Chief Justice Roger B. Taney, the *Ex parte Merryman* author named in the heading. PD: Commons license field = "Public domain," 1855–1860 photo. Direct fetch returned `200 image/jpeg`.

---

## FIGURE 5 — The Lincoln–Johnson National Union banner, 1864

- **filename:** `war-within-north-union-banner.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/9/97/Grand_national_union_banner_for_1864._Liberty%2C_union_and_victory_LCCN2003674567.jpg`
- **orientation:** portrait (5280 × 7120)
- **caption:** The pairing *was* the message. The 1864 National Union banner sets a Republican president, Abraham Lincoln, beside a Southern War Democrat, Andrew Johnson of Tennessee — the lone senator from a seceding state who refused to leave the Union. Lincoln ran not as a Republican at all but under this broadened "Union" label, a man building the widest possible alliance because he privately believed he would need every last vote.
- **credit:** Currier & Ives · hand-colored lithograph · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** `after **The president who expected to lose**`
- **subject-verification:** Commons "File:Grand national union banner for 1864. Liberty, union and victory LCCN2003674567.jpg," LCCN 2003674567, Currier & Ives 1864; the jugate Lincoln–Johnson "Union" ticket banner named in the fact pack leads — matches the section's National Union ticket / Hamlin-dropped-for-Johnson beat. PD: Commons license field = "Public domain," 1864. Direct fetch returned `200 image/jpeg`.

---

## FIGURE 6 — George B. McClellan

- **filename:** `war-within-north-mcclellan.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/3/30/%22Major-General_George_B._McClellan.%22.jpg`
- **orientation:** portrait (5909 × 7796)
- **caption:** George B. McClellan — "Little Mac," the former commander of the Army of the Potomac and a genuine favorite of the troops before Lincoln relieved him for chronic slowness. In 1864 the Democrats nominated this *War* Democrat to run on a *peace* platform that called the war a failure, a ticket at war with itself. McClellan publicly repudiated his own platform's peace plank; it was a hard contradiction to sell to voters.
- **credit:** Frank Leslie's Illustrated Newspaper · wood engraving (after a photograph) · 1861 · (via Wikimedia Commons) · public domain
- **placement:** `after **A war hero on a peace platform**`
- **subject-verification:** Commons "File:\"Major-General George B. McClellan.\".jpg," a half-length uniformed portrait captioned "MAJOR-GENERAL GEORGE B. McCLELLAN." from *Frank Leslie's Illustrated Newspaper*, 15 June 1861; subject = George B. McClellan, the section's Democratic nominee. PD: Commons license field = "Public domain," 1861 publication. Direct fetch returned `200 image/jpeg`.

---

## FIGURE 7 — Pennsylvania soldiers voting in the field, 1864

- **filename:** `war-within-north-soldiers-voting.jpg`
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/b/bc/Head-quarters%2C_Army_of_the_James-Pennsylvania_soldiers_voting_-_sketched_by_William_Waud._LCCN90713202.jpg`
- **orientation:** landscape (4096 × 3288)
- **caption:** The most remarkable vote of the whole election. Pennsylvania soldiers of the Army of the James line up outside their tents to cast ballots in November 1864 — the army that could have ended Lincoln's power simply by voting him out instead chose, overwhelmingly, to keep the man sending it into battle. 1864 was the first U.S. election with widespread field voting, and the men with the most reason to be sick of the war re-elected the man waging it.
- **credit:** William Waud · wood engraving, *Harper's Weekly* · 1864 · Library of Congress, Prints & Photographs Division (via Wikimedia Commons) · public domain
- **placement:** `after **Atlanta, the soldier vote, and 212 to 21**`
- **subject-verification:** Commons "File:Head-quarters, Army of the James-Pennsylvania soldiers voting - sketched by William Waud. LCCN90713202.jpg," LCCN 90713202, *Harper's Weekly* 29 October 1864, sketched by William Waud; directly depicts the 1864 soldier field-vote that the heading and prose center on. PD: Commons license field = "Public domain," 1864. Direct fetch returned `200 image/jpeg`.

---

## SUMMARY

**8 images proposed (1 hero + 7 inline figures), all verified public domain**, spread
across seven distinct section headings (HERO/top, then "King Lincoln's most dangerous
critic," "Arrested in the night…," "Must I shoot a simple-minded soldier boy?," "The
Great Writ and the Chief Justice who said no," "The president who expected to lose," "A
war hero on a peace platform," and "Atlanta, the soldier vote, and 212 to 21").

**REJECTED / ALTERNATES (not used):**

- **Grand National Democratic banner (McClellan–Pendleton peace ticket)** — Commons
  LCCN 2003656577, PD/1864, API-confirmed (5568 × 6928) but its direct byte-fetch
  tripped a Wikimedia IP-level 429. Dropped anyway because it is near-identical in form
  to the Union banner (Figure 5) and would have been visually redundant; the
  McClellan *portrait* (Figure 6) serves the peace-platform heading better.
- **"Oppression!! Suppressing the press" press-suppression cartoon** (LOC 2008661649,
  a fact-pack lead) — the LOC item JSON API began returning a Cloudflare challenge page
  during this session and the print is not mirrored on Commons under a findable title,
  so a canonical direct URL could not be born-verified. Left out rather than guessed.
- **No PD image was sought** for the two headings with no clean contemporaneous subject:
  "More than thirteen thousand…" (the arrest-statistics beat) and "The secret army that
  mostly wasn't" (the secret-societies beat) — these are analytical, not depictive, and
  the surviving Sons-of-Liberty material on Commons is text pamphlets, not illustration.
- **Modern CC-licensed** photographs of Copperhead "Liberty-head" cent badges and snake
  specimens were **rejected** for carrying a fresh photographer copyright (CC), failing
  the PD-only rule.
