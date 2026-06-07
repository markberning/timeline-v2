# Fort Oswego (1756) — born-verified PD image manifest

Public-domain, subject-verified images for the Fort Oswego dossier. No downloads, no
code edits — this is the manifest the serial downloader / editor acts on.

---

## VAUDREUIL — François-Pierre de Rigaud de Vaudreuil (French, led the Canadian militia)
- **filename:** `fi-vaudreuil.jpg`
- **placement:** commander:François-Pierre de Rigaud de Vaudreuil
- **direct URL:** `https://upload.wikimedia.org/wikipedia/commons/f/f0/Francois-Pierre_de_Rigaud_de_Vaudreuil.jpg`
- **orientation:** portrait (543 × 669)
- **caption:** François-Pierre de Rigaud de Vaudreuil, brother of the governor-general, who led the Canadian militia and Native allies in the August 1756 attack that took Oswego.
- **credit:** William Raphael · oil painting (photographed by Wm. Notman & Son, 1916) · McCord Stewart Museum (VIEW-16360) · public domain
- **subject-verification:** Commons MediaWiki API on `File:Francois-Pierre de Rigaud de Vaudreuil.jpg` returns ImageDescription "François-Pierre de Rigaud, Chevalier de Vaudreuil," matching this commander; categorized "Pierre de Rigaud de Vaudreuil / People of New France in art." PD basis: LicenseShortName "Public domain," "Author died more than 70 years ago" + McCord CC-PD-Mark (painter William Raphael d. 1914). NOTE: Raphael was a 19th-century painter, so this is a later painted likeness of Vaudreuil, not a contemporary period portrait — still PD and subject-verified. API-confirmed (url + size + PD); byte-fetch against upload.wikimedia.org deferred to the serial downloader.

---

## SIEGE PLAN — French attack on the Oswego forts, August 1756 (the siege)
- **filename:** `fi-oswego-attaques-1756.jpg`
- **placement:** section:the-siege
- **direct URL:** `https://tile.loc.gov/image-services/iiif/service:gmd:gmd380:g3804:g3804o:ar307300/full/full/0/default.jpg`
- **orientation:** portrait (~3076 × 4592; original plate is taller than wide)
- **caption:** A period plan of Montcalm’s attack on the Oswego forts, drawn for a German atlas of the Seven Years’ War. The title reads "the attacks on the forts of Chouaguen, taken by the French under the Marquis de Montcalm, 14 August 1756," with a key to the batteries and the lines of approach below the image.
- **credit:** L. Therbu (draftsman), engraved by Georg Joseph Cöntgen · engraved plan · from "Les plans de la guerre de sept ans," Mainz, 1789–1791 (depicting the events of August 1756) · Library of Congress · public domain
- **subject-verification:** LOC item 2014585739, title "Attaques des forts de Chouaguen en Amérique : pris par les français commandé par le marquis de Montcalm le 14 août 1756," date 1756 — the exact battle. PD basis: LOC pre-1800 engraving, no known restrictions (same plate also on Commons as `Plan_des_forts_pris_par_Montcalm_en_août_1756._Bataille_d'Oswego.jpg`, tagged Public domain). Byte check: `curl -sI` on the `full/full` URL returns HTTP 200, `content-type: image/jpeg`, content-length 2,297,031. (LOC, safe to byte-check; confirmed.)

---

## REUSE — Oswego on Lake Ontario (the prize on the lake)
- **filename:** `fi-oswego-map.jpg` (already on disk)
- **placement:** section:the-prize-on-the-lake (reuse-on-disk)
- **direct URL:** n/a — existing `/war-img/fi-oswego-map.jpg`
- **orientation:** existing map asset
- **caption:** (use the existing map caption) Oswego’s position on the south shore of Lake Ontario, the lone British foothold on the Great Lakes that made it the prize Montcalm came for in 1756.
- **credit:** (existing on-disk asset — no change)
- **subject-verification:** Reuse only. No new research. The 1727 "South View of Oswego" on Commons (`OswegoFort1727.jpg`) is verified PD but only 300×136 (too small for a section figure), and "A west view of Oswego and Fort Ontario … 1760" depicts Amherst’s rebuilt Fort Ontario AFTER the 1756 siege (wrong fort/period) — rejected on subject grounds. So the existing map stays the best on-subject, landscape-friendly choice here.

---

## REUSE — Montcalm (commander card)
- **filename:** `fi-montcalm.jpg` (already on disk)
- **placement:** commander:Louis-Joseph de Montcalm (reuse-on-disk)
- **direct URL:** n/a — existing `/war-img/fi-montcalm.jpg`
- **note:** Montcalm’s commander card here currently has `img: ''`. **Fill it with `/war-img/fi-montcalm.jpg`.** No research — reuse the existing verified Montcalm portrait.

---

## NO VERIFIED IMAGE — James Mercer (British, Oswego garrison commander, killed by a cannonball)
- **placement:** commander:James Mercer → **leave blank**
- **finding:** No verified contemporary likeness of Colonel James F. Mercer of the French
  and Indian War exists in the searched PD collections. The John Trumbull "death of
  Mercer" painting depicts a DIFFERENT James Mercer (the Revolutionary War general at
  Princeton) — using it would be a wrong-subject substitution. The Huntington holds his
  papers, not a portrait. **NO VERIFIED IMAGE — leave blank.**

---

## NO VERIFIED IMAGE — John Littlehales (British lieutenant colonel who surrendered the fort)
- **placement:** commander:John Littlehales → **leave blank**
- **finding:** No portrait of Lt. Col. John Littlehales found in any PD collection
  (Commons, LOC, museum catalogs). **NO VERIFIED IMAGE — leave blank.**

---

## SUMMARY
- **2 newly verified images to download:**
  1. `fi-vaudreuil.jpg` → commander **François-Pierre de Rigaud de Vaudreuil** (Commons, William Raphael painting, McCord Stewart Museum, PD; API-confirmed, byte-fetch deferred). Portrait. Flag: later painted likeness, not a period portrait.
  2. `fi-oswego-attaques-1756.jpg` → section **the-siege** (LOC, Therbu/Cöntgen 1756 siege plan, PD; byte-checked 200 image/jpeg). Portrait plate.
- **2 reuse-from-disk:**
  - Commander **Montcalm**: fill the currently-empty `img: ''` with `/war-img/fi-montcalm.jpg`.
  - Section **the-prize-on-the-lake**: reuse `/war-img/fi-oswego-map.jpg`.
- **Commanders that STAY BLANK (no verified period likeness):** **James Mercer**, **John Littlehales**.
- **Section that stays without a dedicated scene image:** **the-killings-and-the-cost** — no verified PD print of the Oswego aftermath / ruins found; leave blank (a missing image beats a wrong one).
