# Impressionism — Born-Verified Image URLs
Resolver: Claude Sonnet 4.6 · 2026-05-25  
Method: every file page fetched from Wikipedia/Commons; each URL confirmed 200 OK via HTTP HEAD or Wikimedia API before listing. 429 rate-limit responses during bulk checking were re-confirmed individually — all are genuine images. 404s were re-investigated with the Commons API to find the correct hash path.

Thumb pattern: `https://upload.wikimedia.org/wikipedia/commons/thumb/X/XX/Filename.jpg/{W}px-Filename.jpg`  
Hero = 1280px · all others = 500px

---

## SECTION 1 — HERO + 9 SIGNATURE WORKS

### Hero
**Monet, *Impression, Sunrise*, 1872** (Musée Marmottan Monet)  
Hash confirmed via Wikipedia infobox URL.  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg
```
500px thumb:
```
https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/500px-Monet_-_Impression%2C_Sunrise.jpg
```
Confirmed: Commons file page verifies oil on canvas, 1872, Musée Marmottan Monet. The painting that named the movement (catalogue No. 98, 1874 exhibition). HTTP 200 confirmed on the 1280px thumb.

---

### Signature Works Rail (9 works)

**1. Monet, *La Grenouillère*, 1869** (Metropolitan Museum of Art)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Claude_Monet_La_Grenouill%C3%A9re.jpg/500px-Claude_Monet_La_Grenouill%C3%A9re.jpg
```
Confirmed: Commons file shows oil on canvas, 1869, 74.6 × 99.7 cm, Metropolitan Museum (acc. 29.100.112). HTTP 200.

**2. Renoir, *La Grenouillère*, 1869** (Nationalmuseum, Stockholm)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Auguste_Renoir_-_La_Grenouill%C3%A8re_-_Google_Art_Project.jpg/500px-Auguste_Renoir_-_La_Grenouill%C3%A8re_-_Google_Art_Project.jpg
```
Confirmed: Commons file shows oil on canvas, 1869, Nationalmuseum Stockholm (acc. NM 2425). Google Art Project scan. HTTP 200.

**3. Monet, *Gare Saint-Lazare*, 1877** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/La_Gare_Saint-Lazare_-_Claude_Monet.jpg/500px-La_Gare_Saint-Lazare_-_Claude_Monet.jpg
```
Confirmed: Commons file shows oil on canvas, 75 × 105 cm, 1877, Musée d'Orsay (acc. RF 2775). Shown at 3rd Impressionist exhibition 1877. HTTP 200.

**4. Renoir, *Bal du moulin de la Galette*, 1876** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg/500px-Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg
```
Confirmed: Commons featured picture; oil on canvas, 131 × 175 cm, 1876, Musée d'Orsay (acc. RF 2739). HTTP 200.

**5. Renoir, *Luncheon of the Boating Party*, 1880–81** (Phillips Collection, Washington)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/500px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg
```
Confirmed: Commons featured picture; oil on canvas, 1880–81, The Phillips Collection Washington (acc. 1637). API confirms hash 8/8d. HTTP 200.

**6. Degas, *The Dance Class*, 1874** (Metropolitan Museum of Art)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edgar_Degas_The_Dance_Class.jpg/500px-Edgar_Degas_The_Dance_Class.jpg
```
Confirmed: Commons file shows oil on canvas, 83.2 × 76.8 cm, 1874, Metropolitan Museum (acc. 1987.47.1). HTTP 200.

**7. Degas, *L'Absinthe (Dans un café)*, 1875–76** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg/500px-Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg
```
Confirmed: Commons featured+valued picture; oil on canvas, 92 × 68.5 cm, 1875–76, Musée d'Orsay (acc. RF 1984). HTTP 200.

**8. Caillebotte, *Paris Street; Rainy Day*, 1877** (Art Institute of Chicago)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/500px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg
```
Confirmed: Commons file shows oil on canvas, 2,122 × 2,762 mm, 1877, Art Institute of Chicago (acc. 1964.336). HTTP 200.

**9. Morisot, *The Cradle (Le Berceau)*, 1872** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Berthe_Morisot_008.jpg/500px-Berthe_Morisot_008.jpg
```
Confirmed: Commons file shows "Berthe Morisot: The Cradle," oil on canvas, 56 × 46 cm, 1873 [museum dates it 1872], Musée d'Orsay. Shown at 1st Impressionist exhibition 1874. HTTP 200.

---

## SECTION 2 — ARTIST HEADSHOTS (10 artists)

**Claude Monet** — portrait photograph by Nadar, c.1899  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/500px-Claude_Monet_1899_Nadar_crop.jpg
```
Confirmed: Commons valued + featured picture; portrait of Monet c.1899 by Nadar, public domain. Hash a/a4 confirmed from Wikipedia infobox.

**Pierre-Auguste Renoir** — portrait photograph, c.1875  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg/500px-Pierre_Auguste_Renoir%2C_uncropped_image.jpg
```
Confirmed: Commons file; historical photograph of Renoir c.1875 from Réunion des musées nationaux / Musée d'Orsay. Public domain. Hash confirmed from Wikipedia infobox.

**Camille Pissarro** — portrait photograph, c.1900  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pissarro-portrait.jpg/500px-Pissarro-portrait.jpg
```
Confirmed: Commons file; portrait of Pissarro c.1900, public domain. Used across 5+ Wikipedia language editions. Hash e/ef confirmed from Wikipedia infobox.

**Alfred Sisley** — portrait photograph, March 1863  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Alfred_Sisley_photo_full.jpg/500px-Alfred_Sisley_photo_full.jpg
```
Confirmed: Commons file; photograph of Sisley from March 1863 from Archives Durand-Ruel, public domain. Hash b/bf confirmed from Wikipedia infobox.

**Edgar Degas** — self-portrait painting, c.1863  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Self-portrait_by_Edgar_Degas.jpg/500px-Self-portrait_by_Edgar_Degas.jpg
```
Confirmed: Commons file; oil on canvas self-portrait, c.1863, Calouste Gulbenkian Museum, Lisbon. Public domain. Hash f/f5 confirmed from Wikipedia infobox.

**Berthe Morisot** — portrait photograph, c.1877  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Morisot_berthe_photo.jpg/500px-Morisot_berthe_photo.jpg
```
Confirmed: Commons file; portrait photo of Morisot c.1877, public domain. Hash 9/91 confirmed from Wikipedia infobox.

**Mary Cassatt** — portrait photograph, 1913  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mary_Cassatt_photograph_1913.jpg/500px-Mary_Cassatt_photograph_1913.jpg
```
Confirmed: Commons file; photograph by Durand-Ruel, 1913, "the only photograph for which she ever posed," Frick Collection. Public domain (published before 1931). Hash 1/18 confirmed from Wikipedia infobox.

**Édouard Manet** — portrait photograph by Nadar, c.1866–67  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/500px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg
```
Confirmed: Commons featured picture; portrait of Manet by Nadar c.1866–67, Gallica Digital Library / BnF. Public domain. Hash 2/20 confirmed from Wikipedia infobox.

**Gustave Caillebotte** — self-portrait, c.1892  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Caillebotteautoportrait.jpg/500px-Caillebotteautoportrait.jpg
```
Confirmed: Commons file; "Portrait de l'artiste" self-portrait, c.1892, oil on canvas, 40.5 × 32.5 cm, Musée d'Orsay (acc. RF 1971 14). Hash e/e5 confirmed from Wikipedia infobox.

**Frédéric Bazille** — self-portrait painting, 1865–66  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fr%C3%A9d%C3%A9ric_Bazille_004.jpg/500px-Fr%C3%A9d%C3%A9ric_Bazille_004.jpg
```
Confirmed: Commons file; oil on canvas self-portrait, 1865–66, 108.9 × 71.1 cm, Art Institute of Chicago (acc. 1962/336). Public domain. Hash 4/45 confirmed from Wikipedia infobox.

---

## SECTION 3 — CANON THUMBNAILS (~28 works, §6a list)

Items are numbered to match the fact pack §6a list.

**1. Manet, *Le Déjeuner sur l'herbe*, 1863** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/500px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg
```
Confirmed: Commons featured+valued picture; oil on canvas, 208 × 264.5 cm, 1863, Musée d'Orsay. HTTP 200.

**2. Manet, *Olympia*, 1863** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg/500px-Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg
```
Confirmed: Commons featured picture; oil on canvas, 130.5 × 190 cm, 1863, Musée d'Orsay (acc. RF 644). HTTP 200 (rate-limited in bulk, individually confirmed).

**3. Monet, *La Grenouillère*, 1869** (Metropolitan Museum)  
→ See Section 1, work #1. Same URL.

**4. Renoir, *La Grenouillère*, 1869** (Nationalmuseum, Stockholm)  
→ See Section 1, work #2. Same URL.

**5. Monet, *Impression, Sunrise*, 1872** (Musée Marmottan Monet)  
→ See Section 1 Hero. Same URL.

**6. Morisot, *The Cradle (Le Berceau)*, 1872** (Musée d'Orsay)  
→ See Section 1, work #9. Same URL.

**7. Pissarro, *Hoarfrost (Gelée blanche)*, 1873** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Camille_Pissarro%2C_Gelee_blanche_%28Hoarfrost%29%2C_1873.jpg/500px-Camille_Pissarro%2C_Gelee_blanche_%28Hoarfrost%29%2C_1873.jpg
```
Confirmed: Commons file verified; oil on canvas, 65.5 × 93.2 cm, 1873, Musée d'Orsay (Salle 31). Shown at 1st Impressionist exhibition 1874. HTTP 200.

**8. Degas, *The Dance Class*, 1874** (Metropolitan Museum)  
→ See Section 1, work #6. Same URL.

**9. Monet, *Boulevard des Capucines*, 1873–74** (Nelson-Atkins Museum, Kansas City)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Claude_Monet%2C_1873-74%2C_Boulevard_des_Capucines%2C_oil_on_canvas%2C_80.3_x_60.3_cm%2C_Nelson-Atkins_Museum_of_Art%2C_Kansas_City.jpg/500px-Claude_Monet%2C_1873-74%2C_Boulevard_des_Capucines%2C_oil_on_canvas%2C_80.3_x_60.3_cm%2C_Nelson-Atkins_Museum_of_Art%2C_Kansas_City.jpg
```
Confirmed: Commons file; oil on canvas, 80.3 × 60.3 cm, 1873–74, Nelson-Atkins (acc. F72-35). Shown at 1st Impressionist exhibition 1874. HTTP 200 (rate-limited in bulk, API+individual confirmed).

**10. Caillebotte, *The Floor Planers (Les Raboteurs de parquet)*, 1875** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg/500px-Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg
```
Confirmed: Commons featured picture; oil on canvas, 102 × 146.5 cm, 1875, Musée d'Orsay (acc. RF 2718). Shown at 2nd Impressionist exhibition 1876. HTTP 200.

**11. Renoir, *Bal du moulin de la Galette*, 1876** (Musée d'Orsay)  
→ See Section 1, work #4. Same URL.

**12. Degas, *L'Absinthe (Dans un café)*, 1875–76** (Musée d'Orsay)  
→ See Section 1, work #7. Same URL.

**13. Monet, *Gare Saint-Lazare*, 1877** (Musée d'Orsay)  
→ See Section 1, work #3. Same URL.

**14. Caillebotte, *Paris Street; Rainy Day*, 1877** (Art Institute of Chicago)  
→ See Section 1, work #8. Same URL.

**15. Renoir, *Luncheon of the Boating Party*, 1880–81** (Phillips Collection)  
→ See Section 1, work #5. Same URL.

**16. Manet, *A Bar at the Folies-Bergère*, 1882** (Courtauld Gallery, London)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg/500px-%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg
```
Confirmed: Commons file; oil on canvas, 96 × 130 cm, 1882, Courtauld Gallery (acc. P.1934.SC.234). HTTP 200 (rate-limited in bulk, individually confirmed).

**17. Degas, *The Little Dancer Aged Fourteen*, 1878–81** (National Gallery of Art, Washington)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Edgar_Degas%2C_Little_Dancer_Aged_Fourteen%2C_1878-1881%2C_NGA_110292.jpg/500px-Edgar_Degas%2C_Little_Dancer_Aged_Fourteen%2C_1878-1881%2C_NGA_110292.jpg
```
Confirmed: Commons file; mixed-media sculpture (beeswax, fabric, hair, ribbon), 1878–81, National Gallery of Art Washington (acc. 1999.80.28, CC0). HTTP 200.
NOTE: This is the NGA bronze/wax cast. The original wax debuted at the 6th Impressionist exhibition 1881; posthumous bronze editions exist at multiple museums. The NGA cast is the most cleanly documented free image.

**18. Degas, *The Tub (Le Tub)*, 1886** (Musée d'Orsay) — pastel  
UNRESOLVED. No clean Commons file found for this specific work during this session. Recommend using the Orsay collection page as the citation only, or substituting another late Degas nude from the 1886 show (e.g., a documented pastel at the Hill-Stead Museum). Coordinator to swap.

**19. Cassatt, *Little Girl in a Blue Armchair*, 1878** (National Gallery of Art, Washington)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Cassat_-_Blue_Armchair_NGA.jpg/500px-Cassat_-_Blue_Armchair_NGA.jpg
```
Confirmed: Commons file; oil on canvas, 89.5 × 129.8 cm, 1878, National Gallery of Art (acc. 1983.1.18). Shown at 4th Impressionist exhibition 1879. HTTP 200.

**20. Cassatt, *The Child's Bath*, 1893** (Art Institute of Chicago)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg/500px-Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg
```
Confirmed: Commons featured picture; oil on canvas, 39 × 26 in, 1893, Art Institute of Chicago (acc. 1910.2). API confirmed hash 7/72. HTTP 200.

**21. Morisot, *Eugène Manet on the Isle of Wight*, 1875** (Musée Marmottan Monet)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Berthe_Morisot_-_Eug%C3%A8ne_Manet_%C3%A0_l%27%C3%AEle_de_Wight.jpg/500px-Berthe_Morisot_-_Eug%C3%A8ne_Manet_%C3%A0_l%27%C3%AEle_de_Wight.jpg
```
Confirmed: Commons file; oil on canvas, 38.1 × 46 cm, 1875, Musée Marmottan (acc. 6029). Subject confirmed: seated male figure (Eugène Manet) near a window with garden view. HTTP 200.

**22. Pissarro, *Boulevard Montmartre* (representative: *Boulevard Montmartre, sunny afternoon*), 1897** (Hermitage Museum, St. Petersburg)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Camille_Pissarro_-_Boulevard_Montmartre_-_Eremitage.jpg/500px-Camille_Pissarro_-_Boulevard_Montmartre_-_Eremitage.jpg
```
Confirmed: Commons file; oil on canvas, 74 × 92.8 cm, 1897, Hermitage (acc. ГЭ-9002). HTTP 200.
NOTE: The fact pack references the 1897 series — this is the Hermitage's "sunny afternoon" canvas, one of the series. A fair representative.

**23. Sisley, *The Bridge at Villeneuve-la-Garenne*, 1872** (Metropolitan Museum)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_Bridge_at_Villeneuve-la-Garenne_MET_DT1040.jpg/500px-The_Bridge_at_Villeneuve-la-Garenne_MET_DT1040.jpg
```
Confirmed: Commons file; oil on canvas, 49.5 × 65.4 cm, 1872, Metropolitan Museum (acc. 64.287, CC0). HTTP 200 (rate-limited in bulk, individually confirmed).

**24. Sisley, *Floods at Port-Marly*, 1876** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Sisley%2C_Alfred_-_L%27Inondation_%C3%A0_Port-Marly_RF_2020.jpg/500px-Sisley%2C_Alfred_-_L%27Inondation_%C3%A0_Port-Marly_RF_2020.jpg
```
Confirmed: Commons file; oil on canvas, 60 × 81 cm, 1876, Musée d'Orsay (acc. RF 2020). HTTP 200.

**25. Monet, *Haystacks (Wheatstacks, End of Summer)*, 1890–91** (Art Institute of Chicago)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/500px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg
```
Confirmed: Commons file; oil on canvas, 60 × 100.5 cm, 1890–91, Art Institute of Chicago (acc. 1985.1103). HTTP 200.

**26. Monet, *Rouen Cathedral, Portal and Tower Saint-Romain in the Sun*, 1893** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/RouenCathedral_Monet_1894.jpg/500px-RouenCathedral_Monet_1894.jpg
```
Confirmed: Commons file; oil on canvas, 107 × 73.5 cm, 1893 (file title says 1894 — date per Orsay record is 1893), Musée d'Orsay. HTTP 200 (rate-limited in bulk, individually confirmed).
NOTE: Wikipedia article says the work dates to 1893; the file is titled 1894 — the Orsay records it as 1893. Use "1893" in prose per museum record.

**27. Gonzalès, *A Box at the Théâtre des Italiens (Une loge aux Italiens)*, c.1874** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Eva_Gonzal%C3%A8s_-_Une_loge_aux_Italiens.jpg/500px-Eva_Gonzal%C3%A8s_-_Une_loge_aux_Italiens.jpg
```
Confirmed: Commons file; clean reproduction confirmed by Commons API (hash e/e9). Title matches the Orsay catalogue title. HTTP 200 confirmed.
NOTE: The larger Wikipedia-infobox version uses a gallery snapshot (`...22-8-2017...JPG`) — the above is the cleaner reproduction file.

**28. Monet, *Woman with a Parasol (Madame Monet and Her Son)*, 1875** (National Gallery of Art, Washington)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/500px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg
```
Confirmed: Commons featured picture; oil on canvas, 100 × 82 cm, 1875, National Gallery of Art Washington. HTTP 200 (rate-limited in bulk, individually confirmed).

---

## SECTION 4 — THE BREAK (before/after)

### BEFORE: Academic Painting

**Cabanel, *The Birth of Venus*, 1863** (Musée d'Orsay)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg/500px-Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg
```
Confirmed: Commons valued picture; oil on canvas, 130 × 225 cm, 1863, Musée d'Orsay (acc. RF 273). Bought by Napoleon III at the 1863 Salon — the same year Manet's Déjeuner was rejected. HTTP 200.

**FALLBACK — Gérôme, *Pygmalion and Galatea*, c.1890** (Metropolitan Museum of Art)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pygmalion_and_Galatea_MET_DT1969.jpg/500px-Pygmalion_and_Galatea_MET_DT1969.jpg
```
Confirmed: Commons file (CC0); oil on canvas, 35 × 27 in (~89 × 69 cm), c.1890, Metropolitan Museum (acc. 27.200). HTTP 200.
NOTE: This is the preferred fallback. However, the Cabanel 1863 pairing is sharper for The Break (same Salon year as Manet's rejected Déjeuner). The Gérôme is c.1890 — after the movement, so less clean as a "before."

### AFTER: Impressionism

**Monet, *Impression, Sunrise*, 1872** — see Section 1 Hero. Same URL.

---

## SECTION 5 — LINEAGE CHIPS + PARALLELS

### Lineage Parents (what Impressionism grew out of)

**A. Barbizon/Realist precedent — Corot, *View of the Forest of Fontainebleau*, 1830** (National Gallery of Art, Washington)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Forest_of_Fontainebleau-1830-Jean-Baptiste-Camille_Corot.jpg/500px-Forest_of_Fontainebleau-1830-Jean-Baptiste-Camille_Corot.jpg
```
Confirmed: Commons file; oil on canvas, 175.6 × 242.6 cm, 1830, National Gallery of Art (acc. 1963.10.109). HTTP 200.
NOTE: Large-scale academic Barbizon landscape — establishes the "painting outdoors" precursor. The earlier Realism era chapter already covers Courbet; this Corot provides visual continuity without overlap.

**B. Manet as the bridge — *Le Déjeuner sur l'herbe*, 1863** (Musée d'Orsay)  
→ See Canon #1. Same URL. Manet's rejection at the 1863 Salon galvanized the circle.

**C. Japanese ukiyo-e — Hokusai, *The Great Wave off Kanagawa*, c.1831** (Metropolitan Museum / multiple)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/500px-Great_Wave_off_Kanagawa2.jpg
```
Confirmed: Commons file (restored version); woodblock print, c.1826–1833, copies at Met/AIC/HMA. HTTP 200.
NOTE: The definitive Japonisme reference. Hokusai's death 1849 = public domain.

**D. Haussmann's Paris / modern city as subject — Caillebotte, *Paris Street; Rainy Day*, 1877**  
→ See Canon #14 / Section 1 work #8. Same URL. This is also a Lineage parent (Haussmann built the subject) and a core Impressionist work.

### Lineage Children (what Impressionism led to)

**E. Post-Impressionism/Pointillism — Seurat, *A Sunday on La Grande Jatte*, 1884–86** (Art Institute of Chicago)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/500px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg
```
Confirmed: Commons featured picture; oil on canvas, 207.5 × 308.1 cm, 1884–86, Art Institute of Chicago (acc. 1926.224). Debuted at the 8th (final) Impressionist exhibition 1886 — the handoff moment. HTTP 200.

**F. Van Gogh — *The Starry Night*, 1889** (Museum of Modern Art, New York)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/500px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg
```
Confirmed: Commons featured picture; oil on canvas, 73 × 92 cm, 1889, MoMA. HTTP 200.

**G. Cézanne — *Mont Sainte-Victoire with Large Pine*, c.1887** (Courtauld Institute of Art, London)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mont_Sainte-Victoire_with_Large_Pine%2C_by_Paul_C%C3%A9zanne.jpg/500px-Mont_Sainte-Victoire_with_Large_Pine%2C_by_Paul_C%C3%A9zanne.jpg
```
Confirmed: Commons file; oil on canvas, 67 × 92 cm, c.1887, Courtauld Institute of Art London. API confirmed hash 9/92. HTTP 200.

**H. Fauvism — Matisse, *Woman with a Hat*, 1905** (San Francisco Museum of Modern Art)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Matisse-Woman-with-a-Hat.jpg/500px-Matisse-Woman-with-a-Hat.jpg
```
Confirmed: Commons file; oil on canvas, 79.4 × 59.7 cm, 1905, SFMOMA (acc. 91.161). Exhibited Salon d'Automne 1905 — defining Fauvist work. API confirmed hash f/fb. HTTP 200.

### Parallels (~1874–1886 contemporaneous)

**Seurat, *A Sunday on La Grande Jatte*, 1884–86** — see Lineage E above. The 1886 debut in the final Impressionist show makes it both parallel and successor.

**Whistler, *Nocturne: Blue and Gold – Old Battersea Bridge*, c.1872–75** (Tate Britain, London)  
```
https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/James_Abbot_McNeill_Whistler_006.jpg/500px-James_Abbot_McNeill_Whistler_006.jpg
```
Confirmed: Commons file; oil on canvas, 66.6 × 50.2 cm, c.1872–75, Tate Britain (acc. N01959). HTTP 200.
NOTE: Whistler was a trans-Atlantic peer working atmospheric/tonal painting at the same moment — a genuine parallel not in the Impressionist circle.

---

## SUMMARY

| Section | Verified | Unresolved |
|---|---|---|
| Hero | 1 | 0 |
| Signature works (9) | 9 | 0 |
| Headshots (10) | 10 | 0 |
| Canon list §6a (28) | 27 | 1 |
| The Break (before + fallback + after) | 3 | 0 |
| Lineage parents (4) | 4 | 0 |
| Lineage children (4) | 4 | 0 |
| Parallels (2) | 2 | 0 |
| **TOTAL** | **60** | **1** |

**Unresolved (1):**
- **Canon #18: Degas, *The Tub (Le Tub)*, 1886, Musée d'Orsay** (pastel) — no clean Commons file found. The Orsay's own page confirms the work exists but no free-license digital reproduction was located during this session. Coordinator should either waive this card or substitute another late Degas pastel from the 1886 show (e.g., a bath-series work at the Hill-Stead Museum, Farmington CT, which has issued open-access images).

---

## NOTABLE NOTES FOR THE COORDINATOR

1. **Pissarro Boulevard Montmartre** (canon #22): the fact pack cites the series; the verified image here is the Hermitage "sunny afternoon" canvas (1897). If a different canvas (e.g., the National Gallery version) is preferred, the Hermitage is a safe representative.

2. **Rouen Cathedral date** (canon #26): the Commons filename says 1894; the Orsay museum record dates it 1893. Use 1893 in prose per museum record.

3. **Degas Little Dancer** (canon #17): the free image is the NGA bronze cast (CC0). The original wax is at the Musée d'Orsay but no free reproduction was found. The NGA version is the standard reference image used by Wikipedia and is visually identical to the wax.

4. **Cabanel *Birth of Venus*** (Section 4): the verified painting is 1863, not 1879. The fact pack mentions both; 1863 is the correct date for the Orsay version bought by Napoleon III. Do not cite 1879.

5. **Gonzalès *Une loge aux Italiens*** (canon #27): two Commons files exist. The one linked here (`Eva_Gonzal%C3%A8s_-_Une_loge_aux_Italiens.jpg`) is a clean reproduction. The other (`...een_loge...22-8-2017...JPG`) is an in-gallery photo taken at Orsay — use the clean version.

6. **Matisse *Woman with a Hat***: this is at SFMOMA, not Orsay. It post-dates the Impressionist period (1905) but is the canonical first Fauvist flashpoint for the lineage-children slot.
