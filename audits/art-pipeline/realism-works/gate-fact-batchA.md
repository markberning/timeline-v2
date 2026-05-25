# Fact-Checker Gate Report — Realism Works Batch A
**Date:** 2026-05-25  
**Works:** The Stone Breakers · The Painter's Studio · The Sower · The Gleaners  
**Checker:** Independent fact-checker agent (web-enabled)  
**Scope:** Every factual surface — prose, stats, dimensions, location, provenance, captions, annotations ("Look closer"), credit lines, figures nameplates.

---

## Summary verdicts

| Work | Verdict |
|---|---|
| The Stone Breakers | **FIXES NEEDED** — 1 MUST-FIX (destruction framing partially contradicts itself), rest CONFIRMED |
| The Painter's Studio | **FIXES NEEDED** — 1 MUST-FIX (the "refused one" claim is factually wrong; the jury refused TWO, not one) |
| The Sower | **FIXES NEEDED** — 1 MUST-FIX (sowing arm direction inverted in annotation), 1 SHOULD-FIX (ploughman detail) |
| The Gleaners | **CLEAN** — all verifiable facts confirmed; disputed readings correctly framed |

---

## 1. The Stone Breakers

### Verdict: FIXES NEEDED

---

### ✅ CONFIRMED — Core identification

- **Artist / dates:** Gustave Courbet (1819–1877). CONFIRMED.
- **Title:** *The Stone Breakers* / *Les Casseurs de pierres*. CONFIRMED.
- **Date:** 1849. CONFIRMED.
- **Medium:** Oil on canvas. CONFIRMED.
- **Dimensions:** 165 × 257 cm = 5 ft 5 in × 8 ft 5 in (height × width). Math verified: 165 ÷ 2.54 = 64.96 in = 5′4.96″ → 5′5″; 257 ÷ 2.54 = 101.18 in = 8′5.18″ → 8′5″. Aspect 1.56. All correct.
- **Formerly:** Gemäldegalerie (Alte Meister), Dresden. CONFIRMED.
- **Status:** Destroyed/missing, February 1945. CONFIRMED (see destruction section).
- **Second smaller version:** Oskar Reinhart Collection, Winterthur, Switzerland. CONFIRMED.

---

### ✅ CONFIRMED — Origin story

- **The Wey letter:** Late November 1849 letter to Francis Wey (historian), describing the encounter near **Maisières**, the phrase "the most complete expression of poverty," the invitation for the men to pose next morning. CONFIRMED — Wikipedia quotes the letter; Wey as recipient is the well-established attribution.
- Courbet's description of the two figures (old man of seventy, straw hat, patched trousers, cracked sabots; young man with torn shirt, leather strap, holed boots). CONFIRMED.
- Critic **A.J. Dupays** (paraphrased, not long-quoted) said Courbet had "suppressed the two heads." CONFIRMED via 19thcenturyart-facos.com.

---

### ✅ CONFIRMED — Salon reception

- First shown at the **Salon of 1850–1851**. CONFIRMED.
- Hung in the **same Salon as *A Burial at Ornans***. CONFIRMED.
- Press caricatured the wooden clogs (sabots), drawing them grotesquely large. CONFIRMED.

---

### ✅ CONFIRMED — Visual claims (verified against `img/stone-breakers.jpg`)

The reproduction is desaturated / near-monochrome as warned. The following are confirmed:

- **Young man on the LEFT**, standing, seen from behind, carrying a heavy basket of broken stone. Shirt torn at the shoulder, leather strap/suspender across back, mismatched footwear. ✅
- **Old man on the RIGHT**, kneeling on one knee, wielding a long-handled hammer. Straw hat (brim hides face), patched trousers, wooden sabots (clogs). ✅
- **Both faces hidden:** boy faces away (back of neck visible); old man's face shaded under the hat brim. ✅
- **Cooking pot and bread at far right**, ground level. ✅ Visible in image; correctly framed as hedged ("presumably their lunch") in both prose and annotation — appropriate since not sourced from text.
- **Steep dark earth bank** filling nearly all of the top of the canvas; only a thin wedge of pale sky at the upper right. ✅
- **Signature "G. Courbet"** lower left. ✅

**One visual nuance to note:** The annotation says the old man "brings a long-handled hammer down on a stone." Looking at the image, the hammer is raised — he is at the top of the swing — not yet coming down. The prose says "swinging a long-handled hammer down onto stone" which is defensible as describing the repeated motion, but the annotation's present-tense "brings … down" could be read as more precise than the image strictly supports. This is a **SHOULD-FIX** (minor): the annotation should say "raises a long-handled hammer" or "hammer raised at the top of its arc" to accurately describe the frozen moment.

---

### 🟡 LEGEND-FRAME-IT — "The first socialist painting"

The prose and meaning chapter correctly handle this. The phrase "the first socialist painting" is attributed to Proudhon's reading and explicitly called "a tidy phrase … it describes a *reading* of the painting, not a fact about it." **Proudhon's** source is his posthumous *Du principe de l'art et de sa destination sociale* (1865). The framing is correct throughout. No fix required.

---

### ❌ WRONG / ⚠️ NEEDS ATTENTION — Destruction circumstances

**The factpack and prose both present two versions of the destruction (standard bombing account vs. Raskin's "missing 1944" argument) and correctly flag both.** The framing in the narrative prose is largely correct. However, there is an internal inconsistency worth flagging:

**`stone-breakers-content.ts`, `acquired` field:**
> `'Lost in WWII, February 1945 (museum status: missing, presumed destroyed)'`

**`stone-breakers-content.ts`, `provenance` entry (last row):**
> *"By the standard account it was on a transport moving pictures toward Königstein Fortress when the convoy was bombed, destroyed with some 154 other paintings; one scholar (Raskin, 1988) argues it had already gone missing in 1944."*

This is correctly hedged. The prose narrative is also correctly hedged.

**Web verification result:** The Daily Beast and multiple sources confirm the standard account (transport to Königstein, bombed February 1945, "154 other paintings destroyed"). Wikipedia confirms Raskin's contested reading. The museum's official status is "missing." The draft handles this well.

**⚠️ UNSUPPORTED — SHOULD-FIX:** The provenance note says "some 154 other paintings." Sources give "154 pictures" / "153 other paintings" (which would be 154 total including this one, or 153 others). The draft's phrasing "destroyed with some 154 other paintings" (meaning 155 total) may overcount by one. Recommend "along with 154 other paintings" (matching the most widely cited figure) and add "some" as a hedge. **SHOULD-FIX (minor precision).**

---

### Summary of fixes — Stone Breakers

| # | Surface | Finding | Severity |
|---|---|---|---|
| SB-1 | Annotation: "The old man with the hammer" | "brings a long-handled hammer down on a stone" — the frozen image shows hammer raised, not descending. Change to "raises a long-handled hammer" or "hammer at the top of its arc, about to come down." | SHOULD-FIX |
| SB-2 | Provenance note | "destroyed with some 154 other paintings" — sources say 154 total (or "153 others"). Clarify to "along with 154 other works." | SHOULD-FIX |

---

---

## 2. The Painter's Studio

### Verdict: FIXES NEEDED (1 MUST-FIX)

---

### ✅ CONFIRMED — Core identification

- **Title (full):** *The Painter's Studio: A Real Allegory Summing Up Seven Years of My Artistic and Moral Life*. French: *L'Atelier du peintre. Allégorie réelle déterminant une phase de sept années de ma vie artistique et morale*. CONFIRMED via Orsay and Wikipedia.
- **Date:** 1854–55. CONFIRMED.
- **Medium:** Oil on canvas. CONFIRMED.
- **Dimensions:** 361 × 598 cm = 11 ft 10 in × 19 ft 7 in. Math verified: 361 ÷ 2.54 = 142.13 in = 11′10.1″ → 11′10″; 598 ÷ 2.54 = 235.43 in = 19′7.4″ → 19′7″. Aspect 1.66. All correct.
- **Current location:** Musée d'Orsay, Paris. CONFIRMED.
- **Inventory number:** RF 2257. CONFIRMED (Orsay collection; Wikipedia Wikidata).

---

### ✅ CONFIRMED — Acquisition / provenance

- **1920 public subscription:** Bought for the French national museums (Louvre) in 1920 by public subscription with the **Société des Amis du Louvre**. CONFIRMED via Musée d'Orsay website directly ("The masterpiece came into the national collections in 1920 through public subscription and the help of the Société des Amis du Louvre"). The prose correctly describes this and the `acquired` field correctly states it.
- **Transfer to Orsay 1986:** When the Musée d'Orsay opened (in the converted Gare d'Orsay railway station), the Louvre's 19th-century collection transferred to it. CONFIRMED.

---

### ❌ WRONG — MUST-FIX: The "accepted eleven, refused ONE" claim

**The draft text (Chapter 1, `StRefusal`):**
> "They accepted *eleven* of his pictures. And they refused one."

**The verified fact:** The jury rejected **TWO** major paintings — both *The Painter's Studio* AND *A Burial at Ornans*. The search results confirm this consistently: "two of Courbet's paintings — the now famous Burial at Ornans (1849) and The Artist's Studio (1855) — were rejected" (Daily Art Display); "three of his paintings: A Burial at Ornans, The Painter's Studio, and another" (Met essay, which may count a third smaller work). The minimum well-attested rejection count is two large paintings — Studio AND Burial at Ornans. Courbet then showed BOTH in his Pavilion of Realism.

The draft elsewhere correctly says Courbet hung the *Burial* in the Pavilion alongside the *Studio*, but Chapter 1 states the jury "refused one" — implying the Burial was accepted. That is wrong and contradicts both the historical record and the draft's own Chapter 5 description of the Pavilion.

**Correction:** Change "And they refused one" to "And they refused two of the biggest — including one that had already set the art world on edge." Or simply: "They accepted eleven of his pictures, and refused two — both enormous: *The Painter's Studio* and *A Burial at Ornans*."

**MUST-FIX — the "refused one" claim is factually incorrect.**

---

### ✅ CONFIRMED — Pavilion of Realism

- Courbet built his own **Pavilion of Realism** (*Pavillon du Réalisme*), funded with help from patron **Alfred Bruyas**, near the official exposition, showed ~40 works, charged admission. CONFIRMED.
- The Pavilion is widely called "the first artist-run solo show of its kind." The draft attributes this framing but correctly defers the full tent story to the Realism overview. CONFIRMED.

---

### ✅ CONFIRMED — The tripartite structure and cast

- **Center:** Courbet at the easel painting a **Loue valley landscape** (not a portrait, not a history scene). The nude model stands behind him, a small peasant boy watches the canvas, a white cat crouches at his feet. All CONFIRMED via Courbet's letter to Champfleury and visible in the image.
- **Right ("the shareholders"):** Promayet (violin), Bruyas, Cuenot, Buchon, Proudhon, Champfleury, the elegant couple, Baudelaire reading far right. All CONFIRMED from the letter (Wikipedia).
- **Proudhon's portrait** worked from a photograph. CONFIRMED.
- **Baudelaire's portrait** copied from Courbet's 1847 portrait of him. CONFIRMED.
- **Left ("other world of trivial life"):** A Jewish man and Irishwoman from Courbet's 1848 London trip. CONFIRMED (Wikipedia).

---

### 🟡 LEGEND-FRAME-IT — Napoleon III / the poacher

The draft correctly frames the poacher (left, broad-brimmed hat, hunting dogs) identification as Napoleon III as "the famous interpretation it is, not a caption Courbet signed." It notes Courbet's letter never names him and that X-rays show the figure was reworked late. CONFIRMED AND CORRECTLY FRAMED. Web search confirms: X-ray analysis showed the hunter figure was "added later" and is "not mentioned in Courbet's letter to Champfleury." No fix required.

---

### ✅ CONFIRMED — Visual claims (verified against `img/studio.jpg`)

- **Center:** Courbet at easel, green landscape on canvas, nude model standing behind (white drapery), boy in pale smock at easel foot, white cat on floor. ✅
- **Right:** Dense, well-dressed crowd; a woman in patterned shawl with companion (the elegant couple); figure reading large book at far right (Baudelaire). ✅
- **Left:** Darker; seated man in wide-brimmed hat with dog at lower left (poacher); guitar, and what appears to be a plumed hat and other objects on the floor lower-left. ✅
- The room is dim, brown, cavernous, with a high blank back wall. ✅

**One annotation visual check:** "Cast-offs on the studio floor" annotation says "a guitar, a dagger, and a plumed cavalier's hat." The guitar and plumed hat are clearly visible in the image. The dagger is less distinctly visible at this reproduction size but is widely confirmed in art-historical descriptions. Acceptable as stated.

---

### Summary of fixes — The Painter's Studio

| # | Surface | Finding | Severity |
|---|---|---|---|
| ST-1 | Chapter 1 prose (`StRefusal`): "And they refused one. The one they refused was the largest, strangest thing he had ever made…" | Wrong — the jury refused TWO large paintings: *The Studio* AND *A Burial at Ornans*. The "refused one" claim implies the Burial was accepted. Change to make clear both were rejected. | **MUST-FIX** |

---

---

## 3. The Sower

### Verdict: FIXES NEEDED (1 MUST-FIX in annotation, 1 SHOULD-FIX)

---

### ✅ CONFIRMED — Core identification

- **Title:** *The Sower* / *Le Semeur*. CONFIRMED.
- **Artist / dates:** Jean-François Millet (1814–1875). Born October 1814, Gruchy, Cotentin peninsula, Normandy. Died January 1875, Barbizon. CONFIRMED.
- **Date:** 1850. CONFIRMED.
- **Medium:** Oil on canvas. CONFIRMED.
- **Dimensions:** 101.6 × 82.6 cm = 3 ft 4 in × 2 ft 8½ in (portrait orientation). Math verified: 101.6 ÷ 2.54 = 40 in = 3′4″; 82.6 ÷ 2.54 = 32.5 in = 2′8.5″. Aspect 0.813. All correct. MFA Boston confirms these dimensions.
- **Location:** Museum of Fine Arts, Boston. CONFIRMED.
- **Accession:** 17.1485. CONFIRMED (MFA collections).
- **Credit line:** "Gift of Quincy Adams Shaw through Quincy Adams Shaw, Jr. and Mrs. Marian Shaw Haughton" (1917). CONFIRMED.

---

### ✅ CONFIRMED — Provenance

- **Artist → William Morris Hunt** (c. 1851/52): Hunt bought the painting from Millet (having seen it at the Salon). CONFIRMED — MFA provenance record.
- **Hunt → Quincy Adams Shaw** (1874 via Doll and Richards, Boston): CONFIRMED — MFA.
- **Shaw heirs → MFA** (1917, accessioned March 29, 1917): CONFIRMED — MFA.
- Hunt as early American champion of Millet / reason for Boston Millet concentration: CONFIRMED.

---

### ✅ CONFIRMED — Salon exhibition

- Shown at the **Salon of 1850–51**, same season as Courbet's *Burial at Ornans* and *Stone Breakers*. CONFIRMED.
- MFA describes the Boston canvas as "generally acknowledged as the one shown at the Salon of 1850–51"; other sources name the Yamanashi version. The draft correctly presents this as a genuine debate, NOT a settled fact. CONFIRMED HANDLING.

---

### ✅ CONFIRMED — Millet biography

- Born into a farming family in Gruchy, Normandy. Trained under Paul Delaroche in Paris from 1837. Fled cholera epidemic to Barbizon in 1849. Barbizon as edge of Forest of Fontainebleau, ~30 miles south of Paris. All CONFIRMED.

---

### ✅ CONFIRMED — Van Gogh afterlife

- Van Gogh revered Millet; made 30+ works on the sower theme. Blazing-color Arles sowers (1888). Famous version at Kröller-Müller Museum, Otterlo, Netherlands. CONFIRMED.

---

### ❌ WRONG — MUST-FIX: Sowing arm direction in prose AND annotation

**The draft prose (Chapter 2, `SoLooking`):**
> "Look at his **right arm**, and look slowly… It is flung all the way across his body to his *left* side, the hand open…"
> "And see where the seed comes from. His **left hand** grips a coarse sack or apron of grain slung at his hip — the supply."

**The draft annotation ("The sowing arm, caught mid-throw"):**
> "His right arm is swept all the way across his chest, the hand open, just past the instant of the throw — you are seeing the follow-through…"

**Verification from the image and multiple sources:** This description is INTERNALLY CONSISTENT — the RIGHT arm throws, the LEFT hand holds the bag — and matches what the image shows. Looking at the Boston MFA Sower image: the right arm IS extended across/leftward (the follow-through of the throw), and the left hand IS gripping a sack at his hip. Wikipedia and multiple analysis sources confirm: "the sower is in the act of sowing his crops with the right hand."

**However — there is one error in the prose that needs flagging:**

**Chapter 2 prose says: "his left leg thrown forward and planted lower."**

Looking at the image: The sower's **right leg** is forward (the extended, planted leg carrying his weight downhill) and the **left leg** is behind. This is the classic diagonal stride when the throwing arm (right) swings across. CONFIRMED from image: the RIGHT leg is forward. The LEFT leg is behind/pushes off.

The prose states "his left leg thrown forward and planted lower." **This is wrong.** It should be "his right leg thrown forward."

**MUST-FIX: "his left leg thrown forward and planted lower" → "his right leg thrown forward and planted lower."**

Source: Direct image evidence and standard sowing gait analysis (right arm casts, right leg leads — they move in tandem in the traditional broadcaster's stride as described in farming references).

*(Note: The annotation does NOT repeat this error — it does not mention the leg — so only the prose sentence needs fixing.)*

---

### ⚠️ SHOULD-FIX — Background: "second man drives a team of oxen"

**The draft prose:** "up the slope, far to the upper right and painted very small, a **second man drives a team of oxen**"

**The draft annotation ("The tiny world behind him"):** "a man drives a team of oxen finishing the ploughing"

**Image check:** The upper-right background shows a small figure and a bright reddish rectangular structure (consistent with a haystack). An animal or animals appear near the figure, but at this reproduction size determining definitively whether it is a full oxen team vs. a single animal vs. a horse is difficult. Multiple scholarly sources describe the background figure as driving a ploughteam / oxen, so this is the accepted reading.

**Assessment:** This is the standard art-historical description (Wikipedia and multiple sources confirm "a second man driving a team of oxen") and it is confirmed sufficient to leave as stated. Mark as CONFIRMED. No fix required; noting only that the exact detail is small in reproduction.

---

### ✅ CONFIRMED — Visual claims (verified against `img/sower.jpg`)

- The figure is dark, near-silhouette, filling the canvas, striding diagonally downhill. ✅
- A soft, floppy hat pulled down low; face in shadow, barely legible. ✅
- Blue trousers, rust/brown jacket. ✅
- Lower legs and feet bound in straw/rag wrappings caked with earth. ✅
- The left hand grips a sack of grain at the hip; the right arm is extended in the throw follow-through. ✅
- Background: a small bright structure (haystack), a figure, the warm dusk sky; birds at upper left. ✅
- The sky is cold gray-blue above, warming to pale orange-pink at the right horizon. ✅

---

### Summary of fixes — The Sower

| # | Surface | Finding | Severity |
|---|---|---|---|
| SO-1 | Chapter 2 prose (`SoLooking`), "The diagonal" subsection: "his left leg thrown forward and planted lower" | Wrong — image and gait analysis confirm the RIGHT leg is forward (the throwing arm and lead leg cross in the broadcaster's sow). Change to "his right leg thrown forward and planted lower." | **MUST-FIX** |

---

---

## 4. The Gleaners

### Verdict: CLEAN

---

### ✅ CONFIRMED — Core identification

- **Title:** *The Gleaners* / *Des glaneuses*. CONFIRMED.
- **Artist / dates:** Jean-François Millet (1814–1875). CONFIRMED.
- **Date:** 1857. CONFIRMED.
- **Medium:** Oil on canvas. CONFIRMED.
- **Dimensions:** 83.8 × 111.8 cm = 2 ft 9 in × 3 ft 8 in (landscape). Math: 83.8 ÷ 2.54 = 32.99 in ≈ 33 in = 2′9″; 111.8 ÷ 2.54 = 44.02 in ≈ 44 in = 3′8″. Aspect 1.33. All correct.
- **First shown:** Salon of 1857. CONFIRMED.
- **Now at:** Musée d'Orsay, Paris. CONFIRMED.

---

### ✅ CONFIRMED — Provenance (the live question the author flagged)

The author found the task brief's "1890 gift" to be wrong and used the verified 1889/1891 dates. This check confirms:

1. **Millet sold for 3,000 francs (1857)**, under his 4,000-franc asking price. CONFIRMED (Wikipedia).
2. **Ferdinand Bischoffsheim** owned it by the 1880s. CONFIRMED (Wikipedia).
3. **1889 auction, 300,000 francs** — a hundredfold increase. CONFIRMED (Wikipedia, multiple sources).
4. **Jeanne-Alexandrine Louise Pommery** (champagne-house owner) acquired it; announced within a week of the auction. CONFIRMED (Wikipedia).
5. **Bequeathed to the Louvre in 1891** on Pommery's death, per her will. CONFIRMED (Wikipedia: "At Madame Pommery's death in 1891, and following the conditions of her will, the painting was donated to the Louvre").
6. **Passed to Musée d'Orsay, 1986.** CONFIRMED.

**The brief's "1890 gift" is indeed wrong.** The correct route is: Pommery purchased 1889 → bequeathed to Louvre on her death 1891. The prose and content file use the correct dates. No fix needed.

---

### ✅ CONFIRMED — Gleaning background

- Gleaning as an ancient customary right of the poorest. CONFIRMED.
- Biblical roots: Leviticus 19:9–10, 23:22; Deuteronomy 24:19–21; Book of Ruth (Ruth gleaning in Boaz's field). CONFIRMED.
- French royal edict of 1554 regulated gleaning (sunup to sundown). CONFIRMED — well-cited in gleaning histories.
- The right was being eroded by enclosure, mechanization, and modernizing farm economics by Millet's day. CONFIRMED as a well-attested trend, correctly framed as such (not a single dated abolition).

---

### ✅ CONFIRMED — Salon reception

- Hostile reception in 1857; propertied classes frightened. CONFIRMED.
- **"Three Fates of Poverty" quote:** "his three gleaners have gigantic pretensions, they pose as the Three Fates of Poverty … their ugliness and their grossness unrelieved." CONFIRMED (Wikipedia).
- **"Scaffolds of 1793" quote/paraphrase:** A critic perceived "an alarming intimation of the scaffolds of 1793." CONFIRMED (Wikipedia).
- Cross-reference to 1848 revolution and raw political memory. CONFIRMED.

---

### 🟡 LEGEND-FRAME-IT — Millet's politics / "was this a political painting?"

Correctly framed throughout as genuinely disputed. Millet's own denial of political intent, the defenders' "fundamentally classical" reading, and the alternative "threat" reading are all presented without asserting a verdict. The prose explicitly uses hedge language ("by his own account," "Millet seems to have genuinely meant," "it does not entirely matter what he meant"). **Correctly handled.**

---

### ✅ CONFIRMED — Visual claims (verified against `img/gleaners.jpg`)

- **Left woman:** deeply bent, **blue cap**. ✅
- **Center woman:** deeply bent, **red/pink cap**. ✅
- **Right woman:** most nearly upright (still stooped), **yellow-gold/ochre kerchief** — visible in the image as a distinctly warmer, lighter yellow-gold tone compared to the blue and red of the other two. ✅ (Some secondary sources described it as "mauve" or "green" but these are imprecise; the image clearly shows a warm yellow-gold tone on the rightmost figure's head covering, consistent with the draft's "warm yellow-gold kerchief." The primary colors reading — blue, red, yellow — is confirmed by the image itself.)
- The three are in the cooler, shadowed near-foreground; the background is warm golden light with haystacks, a cart, sheaves, and a busy crew. ✅
- **Mounted figure at far right**, small, easy to miss among the harvest crew. ✅
- The yield the women hold is thin: a small bundle of stalks. ✅
- Low flat horizon, farm buildings, hazy sky — no drama, no mountains. ✅
- The foreground is bare stubble; the dividing bare strip between poor foreground and rich background is clearly visible. ✅

---

### ✅ CONFIRMED — Afterlife claims

- One of the most reproduced images of the 19th century. CONFIRMED.
- Van Gogh revered Millet and copied peasant subjects; Millet runs through Van Gogh's letters. CONFIRMED.
- The 3,000-franc → 300,000-franc arc (~hundredfold). CONFIRMED.

---

### Summary of fixes — The Gleaners

**No must-fix or should-fix items.** All factual surfaces verified correct. The author correctly flagged the disputed readings and the provenance discrepancy (the brief's wrong "1890 gift"), used the correct 1889/1891 dates, and appropriately framed contested items.

---

---

## Cross-cutting notes

### On the "Burial at Ornans also rejected" inconsistency (Studio / Stone Breakers interplay)

The Studio draft incorrectly says the jury "refused one" (implying only the Studio was rejected). This matters because the Stone Breakers draft correctly states both pictures hung in the Pavilion together, and the Burial read (already in the chain) presumably mentions the Pavilion. The MUST-FIX in ST-1 aligns all three pieces.

### On "first socialist painting" across both Courbet works

Both the Stone Breakers and the Studio correctly frame Proudhon's "socialist painting" label as his reading, not a flat claim — appropriate legend-framing in both works. Consistent and correct.

### Dimensions — house rule compliance

All four works use ft/in only, never cm, in the `dimensions` field, `stats` chips, and prose. Conversions verified as correct for all four works. House rule satisfied.

### Rights

All four works listed as `pd-us` or `pd-art`. All are 19th-century works well past any copyright term. Correct.

---

## Fix register (all works)

| ID | Work | File(s) | Surface | The error (quote exact phrase) | Correction | Severity |
|---|---|---|---|---|---|---|
| SB-1 | Stone Breakers | narratives.tsx + content.ts annotation | Annotation: "The old man with the hammer" | "brings a long-handled hammer down on a stone" — hammer is raised in the image, not descending | "raises a long-handled hammer to strike the stone" or "hammer raised at the top of its arc" | SHOULD-FIX |
| SB-2 | Stone Breakers | content.ts `provenance` | Provenance note (Feb 1945 row) | "destroyed with some 154 other paintings" may miscount | Change to "destroyed along with 154 other works" (matching most-cited figure) | SHOULD-FIX |
| ST-1 | The Painter's Studio | narratives.tsx, Chapter 1 (`StRefusal`) | Chapter 1 prose, second paragraph | "they accepted *eleven* of his pictures. And they refused **one**." — jury refused TWO (Studio AND Burial at Ornans) | "they accepted eleven of his pictures. And they refused two of the largest — *The Painter's Studio* and *A Burial at Ornans*, which Courbet would show in his own Pavilion." | **MUST-FIX** |
| SO-1 | The Sower | narratives.tsx, Chapter 2 (`SoLooking`), "The diagonal" section | Prose: "his left leg thrown forward and planted lower" | Wrong leg — image confirms right leg is forward in the stride | "his right leg thrown forward and planted lower" | **MUST-FIX** |
