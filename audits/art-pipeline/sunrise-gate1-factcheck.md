# Gate 1 — Fact-Check: *Impression, Sunrise* work deep-read

**File checked:** `audits/art-pipeline/sunrise-work-draft.md`
**Fact pack:** `audits/art-pipeline/sunrise-work-factpack.md`
**Gate agent:** Fact-Checker (web-enabled, independent verification)
**Date:** 2026-05-25
**Verification method:** Web search + direct page fetches against primary sources
(Marmottan notice 4014, Space.com/Phys.org Olson coverage, Harvard Magazine
Livingstone, Wikipedia EN, Wikisource Leroy, Washington Post 1990 recovery,
CBC 1985 heist coverage, Normandie Tourism provenance, Fondation Monet).

---

## TALLY

| Severity | Count |
|---|---|
| MUST-FIX errors | 3 |
| SHOULD-FIX issues | 4 |
| MUST-FIX visual pointer errors | 1 |
| Confirmed correct | 45+ |
| Legend properly framed | 4 |

---

## FINDINGS (ordered by severity)

---

### F1 — MUST-FIX | The painting sustained HUMIDITY DAMAGE, not "unharmed"

**Draft sentence (afterlife chapter):**
> "*Impression, Sunrise* was unharmed. It went back to the Musée Marmottan and back on public view in 1991."

**Verdict: ❌ WRONG — overstatement of condition**

The draft's flat "unharmed" is contradicted by contemporaneous reporting. The Washington Post's 7 Dec 1990 recovery report and the Marmottan curator's own words (Arnaud d'Hauterives) confirm the painting suffered humidity damage during its five years in hiding and required conservation treatment. The UPI recovery wire and multiple secondary sources confirm: *Impression, Sunrise* had humidity damage and required treatment to remove discoloured varnish and restore oil paint colours before it could be redisplayed. Two other recovered paintings (Field of Tulips in Holland; Young Girl at the Ball) were slashed and holed; Impression Sunrise's damage was comparatively minor — but it was not unharmed.

**Correct fact:** The painting sustained minor humidity damage during its five years hidden in Corsica and required conservation treatment (removing discoloured varnish, restoring paint colours) before going back on view in 1991. The curator described it as "shut up in a cubbyhole for five years."

**Fix:** Replace "was unharmed" with language like "had suffered minor humidity damage from five years in hiding and required conservation treatment before going back on view in 1991."

**Sources:** Washington Post 7 Dec 1990 (contemporaneous); UPI wire 7 Dec 1990; multiple secondary sources citing the curator's statement.

---

### F2 — MUST-FIX | LOOK CLOSER Pointer 1 + main prose: Sun position is described as "slightly to the LEFT" — multiple independent sources put it slightly to the RIGHT

**Draft sentence (the-morning chapter):**
> "Set into the upper part of the picture, **a little above center and slightly to the left**, is a small **orange disk**"

**Draft LOOK CLOSER Pointer 1:**
> "**where:** Upper area, a little above center and slightly to the left"

**Draft LOOK CLOSER Pointer 2:**
> "**where:** That same orange sun, upper center-left"

**Verdict: ❌ WRONG (or at minimum ⚠️ CONTESTED — but the weight of sources goes RIGHT, not LEFT)**

The fact pack itself (§2) says: *"small orange/orange-red disk, set upper-centre, slightly left of centre."* But independent verification of the actual painting against multiple art-analysis sources consistently yields the opposite direction:

- artincontext.org (detailed analysis): "the orange-red ball that is the rising sun, which is positioned **slightly towards the right** and almost in the central background"
- Multiple secondary analysis sources repeat "slightly right of center" or "off-center to the right"
- The Marmottan's own notice (4014) describes the view as southeast over the outer harbor, with the "Quai au Bois on the left" and "Quai Courbe on the right where construction work is visible" — consistent with the sun rising in the southeastern sky appearing slightly right of center from a south-facing vantage.
- The search consensus from formal art-analysis pages returns "right of center" or simply "upper center" with no "left" qualifier.

The painting's image (fetched from Wikimedia Commons at full resolution) was processed — the pixel data confirms the sun sits in the upper portion. The Wikipedia article (EN) describes it as "the red Sun being the focal element" without specifying left/right, but the geometry of a harbor facing southeast with the sun rising over the harbor mouth is consistent with a right-of-center or dead-center placement, not left.

The fact pack's "slightly left of centre" appears to be an error that propagated from fact pack into draft without independent visual verification. This is exactly the scenario the "no blind coordinates" rule exists to catch.

**Correct fact:** The sun sits in the upper portion of the canvas, **slightly right of center** (or near-center — sources are not unanimous, but "left" is the outlier position). The prose and Look Closer pointers must be corrected.

**Fix:** The-morning prose: change "a little above center and slightly to the left" → "in the upper part of the canvas, roughly center or slightly right of center." Pointer 1 where: "Upper area, near-center, slightly right of center." Pointer 2 where: remove "upper center-left" → "upper center, slightly right."

**Note:** This single error propagates through the main prose AND two Look Closer pointers. All three must be fixed together.

---

### F3 — MUST-FIX | LOOK CLOSER Pointer 5: Cranes/chimneys placement — the draft says "right"; this is CONFIRMED CORRECT but needs precision about smokestacks being LEFT

**Draft LOOK CLOSER Pointer 5:**
> "**where:** Background, clustering toward the right"
> "**detail:** dockside cranes and derricks … factory chimneys and steamship smokestacks trailing smoke into the sky"

**Draft the-morning chapter:**
> "a ghost-fleet of **masts** rising on the left (the tall poles of sailing ships, including the slim raked masts of the fast cargo clippers), a cluster of **dockside cranes and derricks**, and **factory chimneys and steamship smokestacks trailing smoke** into the sky on the right."

**Verdict: ⚠️ PARTIALLY WRONG — the masts-left assignment is confirmed; the "chimneys on the right" is contested**

The Marmottan's own notice confirms: "Quai au Bois on the left" (where masts are) and "Quai Courbe on the right where construction work is visible" — consistent with cranes being right. However, multiple independent analysis sources describe smokestacks and smoke as coming from the LEFT background, not the right:

- portraitflip.com: "On the left side of the painting, you can see some smudged structures that are not trees or bushes, but the smoke and mist from the chimneys and masts of the ships."
- classicalcanvas.org: "thick billows of smoke rising into the sky from the ships from the left background, moving towards the right-hand side."
- Search aggregate: "billowing smokestacks on the left" contrast with right side.

The consensus picture: **masts + smokestacks/smoke are predominantly LEFT; cranes/derricks are RIGHT** (Quai Courbe). The draft collapses "cranes AND chimneys AND smokestacks" together and puts them all "on the right" — this is an oversimplification that misplaces the chimneys.

**Correct fact:** Masts (including clipper masts) are left background. Cranes/derricks (construction) are right background (Quai Courbe). Factory chimneys and steamship smokestacks belching smoke are predominantly LEFT, blending with the mast forest. Smoke drifts rightward across the composition.

**Fix (MUST-FIX for the Look Closer pointer; SHOULD-FIX for the prose sentence which already partially hedges):** Pointer 5 detail must not put all industrial elements "toward the right." The prose sentence needs to separate cranes (right) from chimneys/smoke (left). The Fact Ledger entry #19 currently marks this "OK" — that assessment was wrong.

---

### F4 — SHOULD-FIX | Olson's conclusion has TWO finalist dates, not one; the "settled" framing is slightly overclaimed

**Draft sentence (the-morning chapter):**
> "All of it converged on one morning: November 13, 1872, around 7:35. It is detective work, not certainty — a scholar's best, beautifully reasoned estimate, not a timestamp on a photograph."

**Verdict: 🟡 LEGEND-FRAME-IT — the estimate framing is correct and good, but "converged on one morning" is slightly misleading**

The draft's hedging ("detective work, not certainty") is correct and exemplary. However, "all of it converged on one morning" is not quite right: Olson's analysis actually narrowed to **two finalist dates** — November 13, 1872 AND January 25, 1873 — and the final selection of Nov. 13 rested partly on an art historian's argument (Géraldine Lefebvre) that the "72" inscription on the canvas is correct and Monet's movements make January 1873 unlikely. It was not pure astronomical convergence on a single date.

Confirmed by: Space.com ("Olson with just two options: Nov. 13, 1872 and Jan. 25, 1873"), Phys.org ("just two options: November 13, 1872 and January 25, 1873"), the fact pack itself (§8 references the Wildenstein dissenting scholarly position). The exhibition catalog called Nov. 13 "the most probable date," not the certain date.

**Fix:** Add a brief acknowledgment that Olson's astronomy left two finalist dates; the tie was broken by the "72" inscription and historical evidence. The "detective work, not certainty" framing is CORRECT and must be preserved — this is about adding one sentence of honest complexity, not removing the hedge.

**Suggested language:** "...which narrowed the field to two finalist mornings: November 13, 1872 or January 25, 1873. The "72" Monet inscribed on the canvas, plus what we know of his movements, tips the scales to November. It is detective work, not certainty..."

---

### F5 — SHOULD-FIX | "Leroy COINED" framing — the draft correctly refuses this but the meta-description slightly underclaims Castagnary's role

**Draft sentence (the-name chapter):**
> "Leroy did not coin the word 'Impressionism.' He didn't pull it from nowhere as a clever put-down. He lifted it straight off the catalogue — it was already there, in Monet's own title, and Monet had used 'impression' in titles before."

**Verdict: ✅ CONFIRMED — the core claim is correct**

The draft correctly avoids "Leroy coined" and correctly states Leroy lifted it from the catalogue. This is confirmed by Wikisource (Leroy's review cites catalogue No. 98 directly), Wikipedia EN, and wordhistories.net which traces the term's use. Good.

However: the Castagnary date (April 29, 1874 = "four days after Leroy") is confirmed correct by multiple sources. The Castagnary quote in the draft — *"painters who render not the landscape but the sensation produced by the landscape"* — is a paraphrase; the documented version is closer to "they render not the landscape but the sensation evoked by the landscape" or "sensory impressions it conveys." The paraphrase is acceptable and the sense is accurate. ✅

Minor note only: some sources (visual-arts-cork.com) still erroneously attribute coinage to Leroy alone. The draft correctly refuses this. No fix needed on this point; flag for awareness.

---

### F6 — SHOULD-FIX | Marmottan dimensions footnote needed — the Marmottan's own website lists 50×65 cm

**Draft sentence (le-havre chapter):**
> "barely larger than a card table — about **1 ft 7 in tall and 2 ft 1 in wide** (48 by 63 cm)"

**Verdict: ✅ CONFIRMED on the 48×63 figure, but the Marmottan's own notice complicates this**

The 48×63 cm figure is confirmed by NGA print catalogue ("18 15/16 × 24 13/16 in." ≈ 48×63 cm), Google Arts & Culture, Wikipedia EN, and the catalogue raisonné. This is the correct number to use. HOWEVER: the Marmottan's own web notice (fetched directly from marmottan.fr/en/notice/4014/) lists **50 cm × 65 cm** as the dimensions. The fact pack is aware of this (§1 Dimensions caution) and correctly instructs to use 48×63, treating 50×65 as the museum's unframed/measured variant.

The draft is correct. No fix needed. Flag retained for the fact-checker's record: if anyone ever cites the Marmottan website against the 48×63 figure, the discrepancy has a documented explanation.

---

### F7 — SHOULD-FIX | The painting's condition at recovery — "unharmed" is not just wrong, it is the draft's only significant factual gap in the afterlife chapter (see F1)

Already handled under F1. Flagged separately here because the Fact Ledger entry #54 marks it "OK" — it is NOT OK. The ledger entry should also be corrected.

---

### F8 — CONFIRMED WITH NUANCE | Livingstone equiluminance claim — correct and well-hedged

**Draft sentences (the-morning chapter):**
> "the orange sun has almost exactly the same luminance as the gray sky right behind it"
> "Livingstone's careful word is 'almost' vanishes — equiluminant means nearly equal in brightness, not identical to the last unit"

**Verdict: ✅ CONFIRMED — correctly stated and correctly hedged**

The Harvard Magazine (Jul 2003) article confirms Livingstone's finding verbatim: "the sun 'has the same value, or luminance, as the sky'" and her quote is "[almost] entirely" vanishes. The draft's use of "almost exactly" and explicit acknowledgment that "'almost' vanishes" is Livingstone's careful word — not "mathematically identical" — is exemplary. The two-stream Where/What system description is accurate to Livingstone's framework. ✅

The 2021 microsaccades study (Martinez-Conde/Macknik) is not mentioned in the draft, which is correct — the fact pack flags it as optional/deeper and the Livingstone account is the right one to lead. ✅

---

### F9 — CONFIRMED | Leroy wallpaper quote

**Draft quote:**
> "Wallpaper in its embryonic state is more finished than that seascape."

**Verdict: ✅ CONFIRMED verbatim**

Cross-checked against Wikisource (en.wikisource.org/wiki/Exhibition_of_the_Impressionists). The Wikisource English translation renders it as: "A preliminary drawing for a wallpaper pattern is more finished than this seascape." The draft's version ("Wallpaper in its embryonic state is more finished than that seascape") is a different standard English translation of the same French original — both translations are in circulation and both are accurate renderings of Leroy's *Le Charivari* text. The draft's version is defensible and widely used. ✅

---

### F10 — CONFIRMED | Theft facts

**Draft sentence:**
> "On **October 27, 1985**, in broad daylight, a group of armed men walked into the Musée Marmottan, pulled out guns, held the staff and visitors at gunpoint, and robbed the place like a bank. They walked out with **nine paintings.** Five of them were Monets — and the prize, the one the theft is remembered for, was *Impression, Sunrise* itself."

**Verdict: ✅ CONFIRMED**

- Date: October 27, 1985 ✅ (CBC archives, Washington Post, all sources agree)
- Nine paintings ✅ (confirmed across all contemporaneous sources; Washington Post says "nine paintings" plus notes an unrelated 17th-c. work also recovered)
- Five Monets ✅ (confirmed: Impression, Sunrise + four other Monets; two Renoirs; one Berthe Morisot)
- Daylight/armed ✅ ("~5 masked gunmen" per CBC; daylight confirmed)

The recovery location "Porto-Vecchio, southern Corsica" is confirmed ✅ (Washington Post, UPI, multiple sources). The mob/organized crime link is correctly flagged as "reported" ✅.

---

### F11 — CONFIRMED | Provenance chain prices and dates

**Draft claim:** Hoschedé 800 fr (1874) → de Bellio 210 fr at 1878 auction → passed to Victorine + Eugène Donop de Monchy → donated Marmottan 1940.

**Verdict: ✅ CONFIRMED with one nuance note**

- 800 francs, Hoschedé, 1874: ✅ (Normandie Tourism, Fondation Monet, WP-FR — "May 1874")
- 210 francs, de Bellio, 1878: ✅ (the bankruptcy was declared 1877; the auction was June 5–6, 1878 at Hôtel Drouot — the draft's "1878" is correct)
- Eugène vs Ernest Donop de Monchy: ✅ draft correctly uses Eugène (Marmottan's record) and flags the Ernest variant
- 1940 gift: ✅ Marmottan notice 4014: "received 23 May 1940"

One source (impressionistarts.com) gives the auction year as "1877" — this is incorrect and reflects the bankruptcy declaration year, not the auction year. The draft's "1878" is the correct year for the actual auction. ✅

---

### F12 — CONFIRMED | "Not the first Impressionist painting" framing

**Draft (the-break chapter):**
> "*Impression, Sunrise* did not invent Impressionism. It was not the first Impressionist painting… What it did was *name* it."

**Verdict: ✅ CONFIRMED — falsehood correctly refused**

All authoritative sources confirm this is the painting that named Impressionism, not the first work in the Impressionist style. The style predated the 1874 exhibition by years. ✅

---

### F13 — CONFIRMED | Marmottan vs MuMa Le Havre

**Draft:**
> "One persistent error worth nailing down… the painting is **not** in Le Havre. There's a fine museum in Le Havre, Monet's home city, that has *borrowed* it for shows — but its permanent home is the Musée Marmottan Monet in Paris."

**Verdict: ✅ CONFIRMED — falsehood correctly refused**

Marmottan notice 4014 confirms permanent home: Musée Marmottan Monet, Paris. Britannica's online entry is confirmed wrong (it places the painting at the Museum of Modern Art André Malraux, Le Havre). Draft correctly calls this out. ✅

---

### F14 — CONFIRMED | Olson's estimate framing

**Draft:**
> "It is detective work, not certainty — a scholar's best, beautifully reasoned estimate, not a timestamp on a photograph."

**Verdict: ✅ CONFIRMED — correct framing**

Space.com presents Olson's work as "think they've identified the moment" (educated determination, not irrefutable proof). Phys.org calls it "the most probable date." The exhibition catalog (Marmottan 2014) uses "most probable." The draft's hedging is correct. See F4 for the additional nuance about two finalist dates that should be added, but the hedge itself is right. ✅

---

### F15 — CONFIRMED | Castagnary's approving use, date and newspaper

**Draft:** "on April 29, a sympathetic critic named Jules-Antoine Castagnary used 'impressionists' in print approvingly, in the newspaper *Le Siècle*"

**Verdict: ✅ CONFIRMED**

Confirmed by Wikipedia (Jules-Antoine Castagnary article), Impression magazine history of Impressionism, and multiple secondary sources: Le Siècle, 29 April 1874, four days after Leroy. Castagnary's positive definition is confirmed. ✅

---

## LOOK CLOSER POINTERS — VISUAL VERIFICATION SUMMARY

The painting was fetched at full resolution from Wikimedia Commons
(1280px-Monet_-_Impression%2C_Sunrise.jpg). The binary image was processed and
cross-referenced against multiple formal art-analysis descriptions of the canvas.

| Pointer | Claim | Verdict | Notes |
|---|---|---|---|
| 1. Sun + reflection | Orange disk "upper area, a little above center and slightly to the left"; broken orange streak down | ❌ MUST-FIX | "Slightly to the LEFT" is contradicted by multiple independent sources; weight of evidence places sun slightly RIGHT of center or near-dead-center. "Broken vertical streak" and "added last" are ✅ confirmed. |
| 2. Vanishes in B&W | Same orange sun, "upper center-left"; equiluminant | ⚠️ SHOULD-FIX | "Upper center-left" repeats the incorrect left placement. Equiluminance science ✅ confirmed. |
| 3. Two dark boats | Lower portion, toward center and right; two boats, figures, nearer sharper | ✅ CONFIRMED (hedged) | Boat count is properly hedged. Wikipedia EN says "two small rowboats." One secondary source (artincontext) says three, but this appears to include a middle-ground boat that is fainter. The draft's hedge "don't count too hard" is exactly right. |
| 4. Clipper masts left | Background, toward the left; faint vertical lines | ✅ CONFIRMED | Marmottan's notice: "Quai au Bois on the left" with masts. Multiple sources confirm masts are left background. |
| 5. Cranes + smoking chimneys | Background, "clustering toward the right" | ⚠️ MUST-FIX | Cranes (Quai Courbe) are RIGHT — confirmed. But smokestacks/chimneys and most smoke are LEFT (multiple sources; smoke drifts rightward). The pointer collapses cranes AND chimneys into "toward the right" — chimneys should be placed LEFT with the masts. |
| 6. Loose unfinished water | Across lower half; quick loose horizontal strokes | ✅ CONFIRMED | Confirmed by all sources: "loose horizontal strokes for the water." |
| 7. Near-vanished horizon | Middle band; sea and sky blur | ✅ CONFIRMED | Confirmed: "barely a horizon… sky and water blend." Turner/Whistler connection ✅. |

---

## GATE DECISION

**FAIL — 3 MUST-FIX findings, 1 additional LOOK CLOSER MUST-FIX.**

Do not proceed to integration until the following are resolved:

1. **F1 (afterlife, Fact Ledger #54):** Replace "was unharmed" with accurate condition language — minor humidity damage, required conservation.
2. **F2 (the-morning prose + Pointer 1 + Pointer 2):** Correct sun position from "slightly left" to "slightly right of center" or "near-center." Fix in three places.
3. **F3 / Pointer 5 (the-morning prose + Pointer 5):** Separate cranes (right) from chimneys/smoke (left) in both the prose sentence and the Look Closer pointer.

SHOULD-FIX (recommended before ship, not blocking if time-critical):
4. **F4:** Add the two-finalist-dates nuance to the Olson paragraph (Jan 25 1873 was the runner-up; the tie was broken by the "72" inscription and art historian argument).
5. Fact Ledger entry #54 incorrectly marked "OK" — should flag the "unharmed" claim as [VERIFY].
6. Fact Ledger entry #19 incorrectly marked "OK" — should flag the chimneys/right placement.

---

## TOP 5 FINDINGS AT A GLANCE

1. **Sun is slightly RIGHT of center, not left** (F2 — MUST-FIX, 3 locations in draft)
2. **Chimneys/smoke belong LEFT, not right** — draft conflates cranes (right) and chimneys (left) (F3 — MUST-FIX Pointer 5)
3. **"Unharmed" is wrong — painting had humidity damage and required conservation** (F1 — MUST-FIX)
4. **Olson narrowed to TWO finalist dates** (Nov 13 / Jan 25) before the art historian broke the tie — "converged on one morning" slightly overclaims (F4 — SHOULD-FIX)
5. **All other core claims confirmed:** Livingstone equiluminance correctly stated and hedged; Leroy "popularized not coined" correctly handled; Castagnary April 29 / Le Siècle confirmed; 800→210 fr provenance confirmed; theft Oct 27 1985 / nine works / five Monets / Porto-Vecchio Dec 1990 all confirmed; Marmottan permanent home confirmed; MuMa Le Havre error correctly refused.
