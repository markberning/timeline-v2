# French & Indian War (1754–1763) — representative commander-card fallback images

Three born-verified, public-domain, period-accurate **representative** images (one per side)
for use as generic fallbacks on commander cards that have no individual portrait. These are
**not** portraits of any named individual — each reads as "a soldier of this army / a warrior
of this period."

All three byte-verified `HTTP/2 200 image/jpeg` (see end). Do NOT download per task; URLs are
the direct Wikimedia `upload.wikimedia.org` paths confirmed via the Commons API.

---

## 1. British — `fi-rep-british.jpg`

- **Direct URL:** https://upload.wikimedia.org/wikipedia/commons/2/23/Soldier_of_43rd_regiment_1742.jpg
- **Commons file:** `File:Soldier of 43rd regiment 1742.jpg`
- **Orientation / dims:** Portrait, 316 × 600 px
- **Description:** A full-figure British regular infantryman of the 1740s–50s — red coat with green
  facings, tricorne, white breeches and gaiters, shouldering a musket. Reads as a generic British
  redcoat of the F&I-War era, not a named officer.
- **Credit:** Unknown author (plate from the *Representation of the Cloathing of His Majesty's
  Household and of all the Forces*, the 1742 British Army "Cloathing Book") · hand-coloured
  engraving · 1742 (18th c.) · Wikimedia Commons · public domain
- **Subject-verification:** Commons API `extmetadata` returns License = Public domain, Artist =
  Unknown author, Date = "18th century" (QS date 1742). It is one of the standard 1742 Cloathing-Book
  regimental plates — a uniform/type figure, not a portrait of any individual. Period-accurate for the
  1750s–60s British regular (the uniform pattern carried through the war). Visually inspected: a single
  standing soldier figure, dignified, clearly representative.

## 2. French — `fi-rep-french.jpg`

- **Direct URL:** https://upload.wikimedia.org/wikipedia/commons/e/e0/Regiment_de_la_marine_1757.jpeg
- **Commons file:** `File:Regiment de la marine 1757.jpeg`
- **Orientation / dims:** Portrait, 408 × 587 px
- **Description:** A soldier of the French *Régiment de La Marine* in the white French infantry coat,
  tricorne, white waistcoat/breeches/gaiters, shouldering a musket, the regiment's blue-and-white
  colours displayed below. A generic French regular figure contemporary with the war.
- **Credit:** Auteur inconnu (anonymous) · drawing from *Troupes du Roi, infanterie française et
  étrangère, 1757, vol. 1* (Musée de l'Armée) · 1757 · Wikimedia Commons · public domain
- **Subject-verification:** Commons API `extmetadata` returns License = Public domain, Artist =
  "Auteur inconnu", Date = 1757, ImageDescription = "Drawing from the 'King's troops, infantry French
  and foreign, 1757, Volume 1.' Army Museum." Exactly contemporary with the F&I War. It is a regimental
  *type* plate (the regiment "La Marine"), not a portrait of a named person. Visually inspected: a single
  standing French soldier, dignified, clearly representative.
- **Note:** preferred over the modern Wikimedia-user redraws (the "*inf 1757*" PNGs by user
  "L' empereur Charles") and over the Gaston-Roulett (d.1925) Vinkhuijzen reconstructions — those are
  modern illustrations, not period prints, so they fail the born-verified period-source bar even though
  PD-licensed. This 1757 manuscript drawing is the genuine period source.

## 3. Native / Eastern Woodlands warrior — `fi-rep-native.jpg`

- **Direct URL:** https://upload.wikimedia.org/wikipedia/commons/4/43/%22Sauvage_Iroquois%22%2C_Moeurs%2C_loix_et_costumes_des_sauvages_du_Canada.jpg
- **Commons file:** `File:"Sauvage Iroquois", Moeurs, loix et costumes des sauvages du Canada.jpg`
- **Orientation / dims:** Portrait, 590 × 800 px
- **Description:** A dignified full-figure standing Haudenosaunee (Iroquois) warrior — animal-skin
  cloak, breechcloth, leggings and moccasins, war club raised, pipe-tomahawk and arrows in hand. A sober
  18th-century costume-plate figure of an Eastern Woodlands warrior.
- **Credit:** Jacques Grasset de Saint-Sauveur (designer), engraved by J. Laroque · hand-coloured
  copperplate engraving · 1796 (from *Encyclopédie des voyages / Costumes… des sauvages du Canada*) ·
  Wikimedia Commons · public domain
- **Subject-verification:** Commons API `extmetadata` returns License = Public domain, Artist = "Jacques
  Grasset de Saint-Sauveur, 1796", Date = 1796. This is the standard scholarly-used Grasset plate. It is a
  generic *type* figure ("an Iroquois warrior"), not a named individual. Visually inspected: a respectful,
  anatomically-serious standing figure with accurate Eastern Woodlands material culture (war club,
  pipe-tomahawk, skin cloak, leggings) — NOT a caricature, NOT a grotesque "savage" cartoon.

### Honest concerns on the Native image
- **Date:** 1796 — ~30 years after the war ends (1763), vs the British/French plates which sit inside the
  war years. The *material culture depicted* (Eastern Woodlands dress, war club, pipe-tomahawk) is
  consistent with the mid-18th-century period, so it is period-representative for the era of the war even
  though the plate itself is end-of-century. Acceptable for a generic fallback; caption it honestly as a
  1790s costume plate of an Iroquois warrior.
- **The title:** the plate's own period title uses "Sauvage Iroquois" ("Iroquois savage") — 18th-century
  European framing baked into the source label. The **image** is dignified; the **word** is not. Keep the
  dated label on Commons and do NOT surface "savage" in our UI — caption it in our own house voice
  (e.g. "An Eastern Woodlands / Haudenosaunee warrior — 1790s costume plate"). With that re-captioning it
  is appropriate to ship.
- **Recommendation:** USE IT, but only with a house-voice caption that does not repeat the period slur.
  It is the best available dignified, clearly-representative, non-named, PD period figure. If the team is
  uncomfortable surfacing any colonial-gaze costume plate at all, the honest alternative is to leave the
  Native fallback **unset** rather than crop/relabel something worse — but this plate clears the
  dignified + period-accurate + representative + PD bar.

---

## Byte-verification (curl -sI)

| file | URL tail | result |
|---|---|---|
| fi-rep-british.jpg | …/2/23/Soldier_of_43rd_regiment_1742.jpg | HTTP/2 200 · image/jpeg · 31,617 B |
| fi-rep-french.jpg | …/e/e0/Regiment_de_la_marine_1757.jpeg | HTTP/2 200 · image/jpeg · 84,045 B |
| fi-rep-native.jpg | …/4/43/%22Sauvage_Iroquois%22…canada.jpg | HTTP/2 200 · image/jpeg · 62,549 B |

All three also API-confirmed `LicenseShortName = Public domain` in Commons `extmetadata`.
