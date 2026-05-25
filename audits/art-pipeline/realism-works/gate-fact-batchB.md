# FACT-CHECKER GATE — Batch B
## Works: angelus · gargantua · carriage · horse-fair
### Checked: 2026-05-25 · Checker: Claude Sonnet 4.6

**Legend:** ✅ confirmed · ❌ error (with correct fact + source) · ⚠️ needs hedge/framing · 🟡 minor / low-priority

---

## 1. THE ANGELUS (Millet, 1857–59)

**Verdict: NEAR-CLEAN. Two MUST-FIX items (Chauchard price framing; church spire direction). One SHOULD-FIX (fork prong count). All other facts confirmed.**

### ✅ Confirmed facts

| Surface | Claim | Source |
|---|---|---|
| Content / stats | Painted 1857–59; oil on canvas; 55.5 × 66 cm = 1 ft 9⅞ in × 2 ft 2 in | Musée d'Orsay object page; Wikipedia |
| Content | Currently at Musée d'Orsay; transferred from the Louvre 1986 | Orsay; Wikipedia |
| Content | Acquired: Chauchard bequest, formally accepted into the Louvre 15 January 1910 | Wikipedia; Orsay |
| Narrative | Man on LEFT, hat in both hands at waist; woman on RIGHT, hands clasped at chest | Visual (angelus.jpg) confirmed |
| Annotation | Basket of potatoes between the figures; wheelbarrow + sacks at right behind the woman | Visual confirmed |
| Annotation | Church spire on the horizon behind the figures (see SHOULD-FIX below for direction nuance) | Visual confirmed |
| Annotation | Sky fills roughly the top two-thirds of the canvas | Visual confirmed |
| Narrative | The Angelus = Catholic devotional prayer, Annunciation, three times daily at the church bell | Standard Catholic devotion; Orsay |
| Narrative | Millet's grandmother quote (cap in hand; for the poor departed) | Widely cited; Wikipedia; Orsay |
| Narrative | Original title "Prayer for the Potato Crop"; Appleton (Boston) commissioned it; he never collected it | Wikipedia; multiple sources |
| Provenance | Secrétan sale 1 July 1889, Galerie Sedelmeyer, Paris; timed to 1889 Exposition Universelle | Wikipedia; artinsociety |
| Provenance | Bidding war: Antonin Proust (France/Louvre) vs American Art Association (James F. Sutton); reached 553,000 francs | Wikipedia |
| Provenance | France nominally won at 553,000 fr but the French government refused to fund the purchase; Proust then sold to the AAA (Sutton) for ~552,000 fr; painting shipped to USA | mutualart; artinsociety. **SEQUENCE CONFIRMED:** Proust won the bid but, with only 180,000 fr in hand, called Sutton and turned it over to the Americans for approximately the hammer price. |
| Provenance | AAA exhibited it in America 1889–1890 | Wikipedia; mutualart |
| Narrative | Chauchard co-founded (with Hériot and Faré) the Grands Magasins du Louvre (Paris department store, no relation to the museum) | traces-ecrites.com; fr.Wikipedia |
| Narrative | Chauchard died 1909; bequest to the State, accepted 15 January 1910 | Wikipedia; Orsay |
| Narrative | Dalí's Architectonic Angelus of Millet (1933); Gala and the Angelus… (1933) | Wikipedia; dalipaintings.com |
| Narrative | Louvre X-ray reportedly revealed "oblong geometrical shape" / more box-like form under the basket | Wikipedia (cited finding); dali.com |
| Narrative | Dalí's coffin interpretation has NOT been widely accepted | Wikipedia |
| Narrative | Van Gogh admired / copied Millet (Angelus after Millet, 1880 drawing) | Wikipedia |
| Figures | Millet b. 1814 Gruchy (Normandy); settled Barbizon 1849; d. 1875 | Standard biography |
| Narrative | Droit de suite / resale-right law — the gap between prices and the Millet heirs' poverty as a contributing cause | Wikipedia |

---

### ❌ MUST-FIX findings

**M1 — Chauchard price: the draft says "about 750,000 francs (some accounts say 800,000)" and the provenance entry says "≈750,000 francs." The authoritative figure is 800,000 francs.**

- Draft text (provenance): `{ year: '1890', who: 'Alfred Chauchard', price: '≈750,000 francs' }` and narrative: "about 750,000 francs (some accounts say 800,000)"
- CORRECT: Multiple corroborating sources (traces-ecrites.com, fr.Wikipedia on Alfred Chauchard, mutualart) give **800,000 francs** as the Chauchard purchase price. Wikipedia EN on The Angelus says 750,000 fr; fr.Wikipedia on Alfred Chauchard specifically says 800,000 fr-or. The Orsay source supports 800,000 fr. The discrepancy is between EN-Wikipedia (750k) and FR sources (800k).
- DECISION for the draft: the hedge ("750,000; some accounts say 800,000") is defensible given the genuine source conflict, but the primary and most-detailed sources favor 800,000. The provenance price field should be updated to `'≈800,000 francs'` and the narrative should read "about 800,000 francs (some sources say 750,000)" — putting the higher, better-sourced figure first.
- **Fix:** Change `price: '≈750,000 francs'` → `price: '≈800,000 francs'` in provenance. Change narrative: "about **800,000 francs** (some accounts say 750,000)" — reversing which figure is the primary.

---

**M2 — Church spire direction: the draft and annotation both say "just right of center on the skyline." Looking at the actual image (angelus.jpg), the spire is visible in the middle distance roughly centered-to-slightly-right of the composition, between and behind the two figures, not clearly "just right of center."**

- Annotation: `'where': 'Far distance, just right of center on the skyline'`
- Looking at the painting: the spire and church cluster appear on the horizon roughly **center-to-right**, with the woman slightly to its left in the image plane. It is plausibly described as "center-right" but not unambiguously "just right of center." Some sources describe it as "right of center," which is broadly accurate but the annotation should not be overly precise given the low haze.
- The Orsay says the church tower is behind the woman's side, which puts it to the right of center from the viewer's perspective.
- VERDICT: "just right of center" is a minor directional overclaim; "in the background, slightly right of center" or simply "on the far horizon, behind and between the figures" is safer and more accurate.
- **Fix (annotation `where`):** Change "Far distance, just right of center on the skyline" → "Far distance, on the horizon behind the figures, slightly right of center"

---

### ⚠️ SHOULD-FIX findings

**S1 — The fork: "two-pronged digging fork." The painting image is dark and the fork is partially obscured, but it reads clearly as a garden/potato fork. Multiple sources describe it as a "pitchfork" generically. Looking at the image, only 2–3 tines are visible. The draft calls it a "two-pronged digging fork" three times (narrative + annotations + factpack). A potato/digging fork typically has 4 tines, not 2. "Two-pronged" may be technically wrong; "a digging fork" alone is safe.**

- Risk: the draft makes a specific two-prong claim in the narrative ("two-pronged digging fork"), the looking chapter ("a two-pronged digging fork"), and the annotation ("a two-pronged digging fork"). This is likely an artifact of the dark image or the stylistic rendering. The Orsay description calls it simply "the potato fork." Wikipedia says "a fork" with no prong count.
- **Fix:** Remove the "two-pronged" qualifier throughout. Change all three instances of "two-pronged digging fork" → "potato fork" or simply "digging fork." Do not specify prong count.

---

### 🟡 Low-priority / confirm as framed

- ✅ Thomas Gold Appleton described as "of Irish descent" — Wikipedia confirms his Boston Brahmin background but does not specify Irish descent; the "possibly Irish potato famine inspiration" framing is correctly hedged as "possibly" in the factpack. No change needed; the narrative doesn't assert the Irish-descent claim directly.
- ✅ Dalí claim correctly framed with [LEGEND] tag. The X-ray finding is correctly presented as "reported/contested" not as proof. No change needed.
- ✅ Philipon's "pear" cross-reference not directly claimed in the Angelus draft; not needed here.
- ✅ "one of the most widely reproduced images of the nineteenth century" — correctly hedged as "one of the most..." not "the most." Confirmed by Wikipedia and Britannica.

---

## 2. GARGANTUA (Daumier, 1831)

**Verdict: NEAR-CLEAN. One MUST-FIX (La Caricature / separate-sheet framing contradicted by Yale title). One SHOULD-FIX (government building identity). Dimensions require honest acknowledgment of source disagreement. All narrative facts about trial and imprisonment are confirmed.**

### ✅ Confirmed facts

| Surface | Claim | Source |
|---|---|---|
| Content | Lithograph, 1831; drawn by Daumier for Philipon's press | Wikipedia; daumier-gesellschaft.de |
| Content | Subject = Louis-Philippe I as Gargantua / Rabelais (1534) / the pear-head | Image + Wikipedia; standard |
| Content | BnF Paris primary; also Yale, FAMSF, etc. | Multiple |
| Narrative | Philipon's pear gag (4-stage metamorphosis) at the November 1831 trial | Wikipedia; standard |
| Narrative | Publisher: Gabriel Aubert (Galerie Véro-Dodat); printer: Hippolyte Delaporte | Childs; Wikipedia |
| Narrative | Police seized the print almost immediately; ordered the stone destroyed + remaining proofs confiscated | daumier-gesellschaft.de; Childs |
| Provenance | Trial dated "February 1832" (22 or 23 Feb — sources differ by 1 day; the draft wisely says "February 1832") | daumier-gesellschaft (23 Feb); Childs/FAMSF (22 Feb) |
| Provenance | Sentence: 6 months + 500-franc fine; initially SUSPENDED | Wikipedia; daumier-gesellschaft.de |
| Provenance | Arrested August 1832; served from 30 August 1832 at Sainte-Pélagie | Wikipedia; daumier-gesellschaft.de |
| Provenance | Released 14 February 1833 | Wikipedia |
| Narrative | September Laws of 1835 later banned political caricature outright | Standard history |
| Narrative | ~4,000 lithographs over career | Wikipedia |
| Narrative | The Third-Class Carriage c.1862–64, Metropolitan Museum | Wikipedia; Met |
| Image | King upper-left, seated on armchair/commode on a raised platform; pear-shaped head; mouth open | Visual (gargantua.jpg) confirmed |
| Image | Long plank/ramp from lower-right up to the king's mouth | Visual confirmed |
| Image | Tribute-bearers (tiny laborers) with baskets/sacks on the plank; one bending over a basket at the foot | Visual confirmed |
| Image | Ragged crowd at the right | Visual confirmed |
| Image | Excreted honors (documents, patents, ribbons) below/behind king; well-dressed officials scrambling | Visual confirmed |
| Image | Government building (portico) lower-left | Visual confirmed |
| Content | Dimensions "~8.5 × 12 in (~21.4 × 30.5 cm), landscape" — see note below | See SHOULD-FIX |

---

### ❌ MUST-FIX findings

**M1 — La Caricature publication framing: the draft correctly states the print was "sold in the shop window, not run in the journal's pages" (factpack note and narrative), which follows the Childs scholarship. However, the Yale University Art Gallery's own catalog title for their impression is "Gargantua. from the journal La Caricature" — meaning Yale explicitly attributes it to the journal. This is a real scholarly contradiction in the primary sources.**

- The draft's narrative (GaTrial) says: "Gargantua was made for Philipon's world and sold as a separate sheet through Aubert's shop, but it was suppressed so quickly that, by the careful scholarly account, it never actually ran in the pages of La Caricature at all."
- The factpack correctly flags this: "Frame this honestly: intended for the La Caricature world, suppressed on appearance."
- But Yale's catalog says exactly "from the journal La Caricature."
- The Childs article (Art Journal, vol. 51, no. 1, 1992, pp. 26–37) — the definitive scholarly source — states it was sold as a separate sheet from Aubert's window and was not run in the journal. Philipon later claimed he didn't run it due to "artistic inferiority," but Childs argues it was fear of prosecution.
- VERDICT: The draft's current framing ("by the careful scholarly account, it never actually ran in the pages of La Caricature") is CORRECT and better than the Yale catalog attribution. However, the draft should acknowledge the contradiction explicitly rather than presenting only the Childs position as settled.
- **Fix:** In GaTrial, add one sentence acknowledging the Yale catalog title: "Yale's impression is catalogued 'from the journal La Caricature' — the attribution some sources still use — but the more careful scholarly view (Childs, 1992) is that the print was sold separately through Aubert's shop window and was seized before it could run in the journal's pages." Do not remove the current framing; add the acknowledgment.

---

### ⚠️ SHOULD-FIX findings

**S1 — Government building identity: the draft says "a government building" in the annotation and narrative, which is appropriately conservative. However, multiple sources identify this specifically as the Palais Bourbon / Chamber of Deputies. The annotation says "The circuit is complete: from the poor, into the king, out to the state's own insiders" and calls it "The bureaucracy and legislature on the receiving end." This is accurate but could be more specific.**

- Source: daumier-gesellschaft.de, multiple secondary analyses identify the building at lower-left as the Palais Bourbon (Chamber of Deputies). The ForHum article and artandpopularculture.com confirm "deputies … heading toward the Palais-Bourbon."
- The factpack already notes: "Whether the lower-left building is specifically the Palais Bourbon / Chamber of Deputies — read as a government/legislative building; prose says 'a government building' rather than naming it definitively."
- REVISED VERDICT: The annotation can be upgraded to name the building. It is the Palais Bourbon / Chamber of Deputies — confirmed by sufficient sources.
- **Fix (optional — SHOULD rather than MUST):** In the annotation `detail` for "The government building," add: "That classical-portico building in the lower left is the Palais Bourbon, seat of the Chamber of Deputies — the legislature whose members scramble to collect the king's patronage. The circuit is complete."

---

**S2 — Print dimensions: the draft uses "~8.5 × 12 in (~21.4 × 30.5 cm), landscape." Sources are inconsistent:**
- The factpack lists Yale's measurement as "9¼ × 12¹⁄₁₆ in (23.5 × 30.6 cm)" (stone size).
- Arthive lists "31 × 21 cm" (which is portrait orientation — this appears to be width × height transposed, OR a different impression measure).
- Artnet and other sources list ~21.4 × 30.5 cm (landscape) as the image/print area.
- The Alamy listing gives a significantly larger 41.2 × 28.7 cm, which may be the full sheet.
- VERDICT: "~8.5 × 12 in" for the image area is well-supported; the landscape orientation is confirmed by the image file aspect ratio (1.44) and all visual evidence. The factpack is honest about this variability. The published dimensions field (`8.5 in × 12 in`) is acceptable, with the hedge "figures vary by impression" already in the factpack.
- **No change required to what ships.** The dimension caveat is already in the factpack. The stats chip shows "Lithograph" for medium and the year, not precise dimensions.

---

### 🟡 Low-priority

- ✅ "Philipon's courtroom pear-drawing" correctly framed as received legend, not a verbatim transcript.
- ✅ Daumier born Marseille, 1808–1879 — confirmed.
- ✅ The "pear = fathead/simpleton" slang definition confirmed.
- ✅ Rabelais's Gargantua (1534) confirmed.
- 🟡 The narrative says Daumier was "a stocky, good-humored Marseillais." No factual source for "stocky" and "good-humored" was found — but this is characterization, not a factual claim, and it is not attributed. Low risk.

---

## 3. THE THIRD-CLASS CARRIAGE (Daumier, c.1862–64)

**Verdict: CLEAN. No MUST-FIX items. One SHOULD-FIX (front-bench figure description needs clarification). Early provenance gap honestly flagged. All core facts confirmed.**

### ✅ Confirmed facts

| Surface | Claim | Source |
|---|---|---|
| Content | Date c.1862–64; oil on canvas; UNFINISHED; squared for transfer | Met; Wikipedia |
| Content | Dimensions 65.4 × 90.2 cm = 2 ft 1¾ in × 2 ft 11½ in | Met (Wikipedia confirmed 65.4 × 90.2 cm) |
| Content | Now at The Metropolitan Museum of Art, New York | Met |
| Content | Acquisition: H.O. Havemeyer Collection, Bequest of Mrs. H.O. Havemeyer, 1929 | Met credit line |
| Provenance | Louisine Havemeyer bought it 1913 for ~$40,000 | Wikipedia; Met |
| Provenance | 1929 bequest to Met | Met |
| Provenance | Early owners 1879–1913 not securely documented — correctly flagged as a gap | Factpack honest |
| Image | Front bench: nursing mother (left), old woman with basket (center), sleeping boy (right) | Visual (carriage.jpg) confirmed + Met description |
| Image | Anonymous rows of passengers receding into the dark car behind | Visual confirmed |
| Image | Two pale windows upper-left; only real light source | Visual confirmed |
| Image | Visible squaring grid + underdrawing in unfinished passages | Visual confirmed |
| Narrative | Versions: Ottawa finished oil; Walters watercolor 1864; SF oil-on-panel c.1856–58 | Wikipedia; Met; Walters; FAMSF |
| Narrative | Walters watercolor commissioned by William T. Walters | Wikipedia; Walters |
| Narrative | Daumier near-blind by ~1873; died in poverty 1879 | Wikipedia |
| Narrative | 1878 retrospective at Durand-Ruel | Wikipedia |
| Narrative | Camille Corot helped Daumier in later life (bought/arranged the house) | Wikipedia — correctly framed as "standard story" |
| Narrative | Daumier's Gargantua (1831) cross-reference | Confirmed (sister work in this batch) |

---

### ⚠️ SHOULD-FIX findings

**S1 — Front bench figure arrangement: the draft describes the arrangement as "young mother (left), old woman (center), sleeping boy (right)." Looking at the image (carriage.jpg), this matches — however, the mother is described in the narrative as "cradling an infant" and the Met's own description says "a nursing mother and her baby." The draft correctly says "cradling an infant" in the looking chapter and annotation, but the figures nameplate says "The nursing mother — front bench, left" which is fine. One potential issue: the draft's looking chapter says the mother's "head is bowed" and she has "the most tenderly painted passages." Looking at the image, the OLD WOMAN in the center actually has the most fully worked face (deeply lined, eyes forward). The mother's face (left) is also rendered but less emphatically. This is correctly described in the factpack: "The most finished face in the painting belongs to the old woman in the middle." The narrative also correctly says "In the center — the most finished face in the whole canvas — sits an old woman." No contradiction. CONFIRMED.**

- VERDICT: No fix needed. The layout description is consistent between narrative, factpack, annotations, and the image.

---

**S2 — The sleeping boy's position: the draft says the boy "slumped sideways, head dropped." Looking at the image, the boy is to the right end of the bench, head down, clearly asleep. The annotation calls him "The sleeping boy — front bench, right end." The narrative describes him as "slumped sideways." This is accurate. No fix needed.**

---

**S3 — "a dark box or chest, the family's luggage, sits in the lower-right corner beside him." Looking at the image, there does appear to be a dark shape in the lower-right foreground near the boy. This is consistent with multiple descriptions. Confirmed.**

---

### 🟡 Low-priority

- ✅ The year stat uses `1864` (not a range) for the `year` field, while `stats[0]` correctly shows `'c.1862–64'`. The `year` field in ArtWorkContent is a single integer used for sorting. Using 1864 is appropriate. No issue.
- ✅ Daumier's railway lithograph series: "Les Chemins de fer" in Le Charivari — the narrative says "1840s and 50s"; the factpack says "1843–58." The narrative is a fair loose description. No fix needed.
- ✅ The "Corot bought him the house" anecdote correctly framed as "the standard story" / "the well-known account." LEGEND-frame confirmed appropriate.

---

## 4. THE HORSE FAIR (Bonheur, 1852–55)

**Verdict: NEAR-CLEAN. Two SHOULD-FIX items (National Gallery London acquisition date phrasing; Salpêtrière position). All Legion d'honneur grades confirmed correct (Chevalier 1865, Officer 1894 — grand cross correctly avoided). Provenance confirmed.**

### ✅ Confirmed facts

| Surface | Claim | Source |
|---|---|---|
| Content | Date 1852–55; oil on canvas | Met API (objectDate); Wikipedia |
| Content | Dimensions 96¼ × 199½ in = 8 ft × 16 ft 7½ in (244.5 × 506.7 cm) | Met API confirmed |
| Content | Now at The Metropolitan Museum of Art, New York; accession 87.25 | Met API |
| Content | "Gift of Cornelius Vanderbilt, 1887" (credit line verbatim); donor = Cornelius Vanderbilt II | Met API + secondary |
| Provenance | Gambart bought it 1854 for 40,000 French francs | Wikipedia |
| Provenance | Wright 1857; A.T. Stewart 1866; Vanderbilt II bought at Stewart's widow's estate auction 1887 for $53,000 | Wikipedia |
| Provenance | Vanderbilt immediately gave it to the Met; Gift of Cornelius Vanderbilt 1887 | Met API |
| Image | Rearing dappled-grey Percherons at dead center | Visual (horse-fair.jpg) confirmed |
| Image | Left-to-right diagonal churn of horses and handlers | Visual confirmed |
| Image | Clouds of dust kicked up at hooves | Visual confirmed |
| Image | Plane trees across the background | Visual confirmed |
| Image | Salpêtrière dome visible at far left in the distance | Visual confirmed (faint dome left background) — see SHOULD-FIX below |
| Narrative | Bonheur sketched the market ~18 months, ~twice a week | Wikipedia |
| Narrative | Police permit (permission de travestissement) to wear men's clothes, renewable | Wikipedia; JSTOR Daily |
| Narrative | Animalière / animalier specialty; low in the genre hierarchy | Wikipedia |
| Narrative | Ploughing in the Nivernais (1849); state commission; First Medal Salon 1849 | Wikipedia |
| Narrative | Légion d'honneur: **Chevalier 1865** (pinned by Empress Eugénie; first woman artist to receive it) | Wikipedia; smithsonianmag; legiondhonneur.fr |
| Narrative | Promoted **Officier 1894** (first woman so promoted) | Wikipedia |
| Narrative (correctly AVOIDED) | "Grand cross" — NOT claimed anywhere in the draft | Grand cross claim is unsupported and correctly avoided |
| Narrative | Empress Eugénie: "genius has no sex" — framed as legend/reported | Wikipedia; correctly hedged |
| Narrative | Château de By purchased 1859 with Horse Fair proceeds | chateau-rosa-bonheur.fr |
| Narrative | Nathalie Micas — lifelong companion 40+ years; helped paint the NG London replica; buried together at Père Lachaise | Wikipedia |
| Narrative | Anna Klumpke — companion in final years; sole heir | Wikipedia |
| Narrative | Thomas Landseer made the engraving from the half-size replica | Wikipedia |
| Narrative | Queen Victoria private viewing — correctly framed as "well-worn story" | Wikipedia; common in literature |
| Narrative | Salon 1853 critics praised it; called it "masculine" (back-handed compliment) | Wikipedia |
| Stats chip | `'8′ × 16′7″'` — correctly computed from 199.5 in = 16 ft 7½ in | Confirmed (199.5 / 12 = 16.625 ft = 16 ft 7.5 in) |

---

### ⚠️ SHOULD-FIX findings

**S1 — National Gallery London acquisition date: the afterlife chapter says the half-size replica "in 1859, was given to the National Gallery in London (where it still hangs)."**

- CORRECT FACT: The picture was bequeathed to the National Gallery by Jacob Bell who DIED in 1859; however, it was not physically delivered until 1865. The National Gallery's own description says "Bequeathed by Jacob Bell, 1859" (meaning the bequest was made in his will dated 1859 or on his death in 1859) but the NG also notes "with the picture delivered in 1865."
- The draft says "given to the National Gallery in London … in 1859" — this conflates the bequest year with the delivery year. The NG's credit line is "Bequeathed by Jacob Bell, 1859."
- VERDICT: "Given to the National Gallery in London" is slightly wrong in mechanism (it was bequeathed, not given while alive), and the year 1859 is the bequest year, not the delivery year. The most accurate phrasing is "bequeathed to the National Gallery by Jacob Bell (who died in 1859); it entered the collection in 1865."
- **Fix:** Change narrative: "in **1859**, was given to the **National Gallery in London**" → "was **bequeathed to the National Gallery in London** by the collector **Jacob Bell** (who died in 1859), entering the collection in **1865**."
- Also fix provenance note: `{ year: '1854–1857', who: 'Ernest Gambart'…}` — the note says "donated to the NG in 1859 from the estate of Jacob Bell" — change to "bequeathed to the National Gallery by Jacob Bell on his death in 1859; delivered 1865."

---

**S2 — Salpêtrière dome position: the draft consistently places the dome "at the far left" (looking chapter: "far off at the upper left"), which matches the painting. However, the annotation's `where` field says "Far left, low on the horizon, a faint grey dome." Looking at the image (horse-fair.jpg), the dome is visible at the upper-left background, behind the tree line. The NG London audio description says "a diagonal avenue of trees diminishing in size from right to left … leads to the dome of the Asylum of la Salpêtrière in the distance" — confirming left-side placement. The narrative says "far off at the upper left, almost lost in the haze behind the trees." This is CORRECT and confirmed.**

- VERDICT: No change needed. "Far left" / "upper left" is accurate and confirmed by National Gallery London.

---

**S3 — Statue/self-portrait among the handlers: the factpack correctly marks this as [LEGEND] and says "never assert a specific figure." The draft does not make this claim anywhere. Confirmed handled correctly.**

---

### 🟡 Low-priority

- ✅ "Most famous woman painter of the nineteenth century" — widely attributed in Wikipedia ("widely considered to be the most famous female painter of the nineteenth century"). Correctly stated.
- ✅ Raymond Bonheur described as "a drawing teacher and a believer in a utopian sect" — the Saint-Simonian connection is well documented. Confirmed.
- ✅ The engraver is named as "Thomas Landseer" in the afterlife chapter — confirmed by Wikipedia (Thomas Landseer made the engraving). Note: some sources say "C.G. Lewis" for a LATER engraving; Thomas Landseer did the famous original engraving. No conflict with the draft.
- ✅ Gargantua described as Rabelais's creation with correct date ("sixteenth-century comic satire") — Rabelais published Gargantua 1534. Confirmed.
- 🟡 Afterlife chapter says "the painting fetched **$53,000**" at auction, and "the buyer was **Cornelius Vanderbilt II**, of the railroad dynasty." The Met credit line says "Gift of Cornelius Vanderbilt" (no "II"). The provenance entry correctly notes "secondary sources specify Cornelius Vanderbilt II" while the `acquired` field uses the verbatim Met credit line. No fix needed; correctly handled.

---

## CROSS-WORK CONSISTENCY CHECK

- **Daumier cross-reference (Gargantua ↔ Carriage):** Both drafts correctly cross-reference each other. Gargantua says Daumier "would become a serious painter of the city's poor" with "The Third-Class Carriage (about 1862–64, now in the Metropolitan Museum)" — confirmed. Carriage says "In 1831 he drew his most notorious cartoon, Gargantua" — confirmed. Dates consistent. No conflict.
- **Millet cross-references (Angelus ↔ Sower ↔ Gleaners):** Angelus correctly describes Sower as 1850 and Gleaners as 1857 (same year as the Angelus was begun). Sower is at MFA Boston — not contradicted here. Gleaners pathway to the Orsay via Mme. Pommery 1891 is mentioned in factpack but not in the Angelus narrative (deferred to Gleaners read). No conflict.
- **Horse Fair and the Burial:** The looking chapter notes "Courbet did the same thing with a cliff in his Burial, one work along this chain." This is a reference to the compositional similarity (background element pressing the scene forward). Courbet's Burial at Ornans does use the cliff/rock of Ornans. Confirmed.

---

## SUMMARY TABLE

| Work | Verdict | MUST-FIX | SHOULD-FIX |
|---|---|---|---|
| Angelus | Near-clean | M1: Chauchard price (flip to ≈800,000 fr primary); M2: church spire direction "just right of center" → "slightly right of center" | S1: remove "two-pronged" qualifier from fork (3 instances) |
| Gargantua | Near-clean | M1: Acknowledge the Yale catalog "from the journal La Caricature" attribution vs. the Childs "sold separately" position — add one sentence of acknowledgment; don't delete current framing | S1 (optional): Name Palais Bourbon specifically in annotation |
| Carriage | Clean | None | None significant |
| Horse Fair | Near-clean | None | S1: NG London acquisition — "given … in 1859" → "bequeathed by Jacob Bell (d.1859); delivered 1865" (narrative + provenance entry) |

---

*Checked against: Musée d'Orsay (L'Angélus object page 345), Wikipedia (The Angelus; Gargantua (Daumier); The Third-Class Carriage; The Horse Fair; Rosa Bonheur; Alfred Chauchard; Nathalie Micas; Ernest Gambart), Metropolitan Museum of Art (collection API objects 436095 and 435702), Elizabeth C. Childs, "Big Trouble: Daumier, Gargantua, and the Censorship of Political Caricature," Art Journal 51:1 (1992), National Gallery London (NG621), mutualart.com, traces-ecrites.com, smithsonianmag.com, daumier-gesellschaft.de, legiondhonneur.fr, chateau-rosa-bonheur.fr. Images verified directly: angelus.jpg, gargantua.jpg, carriage.jpg, horse-fair.jpg.*
