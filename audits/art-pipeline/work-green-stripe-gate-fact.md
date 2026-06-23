# FACT-CHECK + LEGEND gate — THE GREEN STRIPE (Matisse, 1905, SMK)

Gate run 2026-06-23 against the draft `work-green-stripe-draft.md` (Part A const +
Part B prose) and the fact pack `work-green-stripe-factpack.md`. Every factual surface
checked: dates, dimensions (imperial + vs real cm), names, life dates, titles, verbatim
quotes + attribution, provenance chain, prices, acquisition, first/only/most claims, and
all six look-closer annotations. Web-reverified independently against SMK (open.smk.dk /
Google Arts & Culture mirror of the SMK record), Wikipedia *The Green Stripe*, Wikipedia
*Woman with a Hat*, and the sitter biography sources.

**VERDICT: NO BLOCKERS.** The draft is accurate across the board and — notably — gets
every one of the four watch-item traps RIGHT. Two [FIX] items below are low-stakes
attribution/precision tightenings, not errors of fact. Three [NICE]s. Everything else is
clean.

---

## WATCH ITEMS (the four traps the prompt flagged) — all handled correctly

**(1) Acquisition = 1936 PURCHASE at the Tetzen-Lund estate sale from the Rump FUND, NOT a
Rump bequest — CORRECT.**
- Draft Part A `acquired`: `'Purchased 1936 at the Tetzen-Lund estate sale, by the Ingeniør
  J. Rump and Elisabeth Rump Fund'`. ✓
- Provenance row 5: "Purchased at the Tetzen-Lund estate auction in 1936, financed by the
  Ingeniør J. Rump and Elisabeth Rump Fund… Inv. KMSr171 — the KMSr prefix marks the Rump
  collection. This was a fund-financed purchase, not part of Johannes Rump's own 1928
  gift." ✓
- Part B GrnAfterlife: "did **not** come to the Statens Museum for Kunst… as a gift or
  bequest… SMK **bought** the painting at that estate sale. The money came from the
  Ingeniør J. Rump and Elisabeth Rump Fund… A purchase, not a bequest." ✓
- VERIFIED: SMK's own record (via Google Arts & Culture mirror) — "acquired by SMK at the
  estate sale of Christian Tetzen in 1936." Inv. KMSr171 confirmed. Johannes Rump's 1928
  ~100-work donation is the spine of SMK's French collection but did not include this
  picture. The draft's distinction is exactly right and well-explained. CLEAN.

**(2) The Salon d'Automne Room VII scandal belongs to *Woman with a Hat*, NOT this canvas —
CORRECT.**
- Draft GrnCollioure: "the picture at the center of that scandal, the one of Amélie that the
  public recoiled from, was a different portrait: *Woman with a Hat*… *The Green Stripe* is
  its quieter, harder, more intimate companion… It just was not the painting on the wall
  that caused the uproar. Keep the two straight." ✓
- The draft never asserts *The Green Stripe* hung in Room VII or caused the scandal; it
  frames it as "in dialogue with" the moment. ✓
- VERIFIED: Wikipedia *Woman with a Hat* — "exhibited at the 1905 Salon d'Automne and became
  central to the Fauvist controversy… Vauxcelles's phrase… emerged from this exhibition."
  Wikipedia *The Green Stripe* does NOT claim a 1905 Salon appearance. CLEAN. (See [FIX-1]
  below for one secondary-source counterclaim worth noting, which the draft correctly does
  NOT adopt.)

**(3) The 500-franc Salon purchase = *Woman with a Hat* (Leo & Gertrude Stein); this canvas
went to Michael & Sarah Stein via Galerie Druet, 1906 — CORRECT.**
- Draft GrnCollioure: "*Woman with a Hat*… which Matisse's American patrons **Leo and
  Gertrude Stein** bought off the wall for 500 francs." ✓
- GrnAfterlife: "*The Green Stripe* was **not** the painting the Steins bought off the Salon
  wall for 500 francs; that was *Woman with a Hat*, and the buyers were **Leo and Gertrude
  Stein**. *The Green Stripe* went to a different pair of Steins entirely — **Michael and
  Sarah Stein**… through a Paris gallery, **Galerie Druet**, in the spring of **1906**." ✓
- VERIFIED: Wikipedia *Woman with a Hat* — "Gertrude and Leo Stein bought the controversial
  *Woman with a Hat* for 500 francs." Provenance reverify confirms *The Green Line* acquired
  by Michael & Sarah Stein via Galerie Druet, March–April 1906. The two transactions are
  kept cleanly separate. CLEAN.

**(4) The "punishment of Amélie" / troubled-marriage reading = interpretation (Burgess 1910,
Klein), NOT documented fact — CORRECT.**
- Draft GrnReception: "Treat it as exactly what it is: **one 1910 critic's interpretation**,
  not anything Matisse said or recorded… [Klein] *suggested*… That too is a suggestion,
  carefully hedged… there is no documented basis for reading this canvas as a record of a
  failing marriage. The phrase 'the painting shows their troubled marriage' is something
  people say; it is not something we know." ✓
- Part A blurb (reception section): "Both are readings, not facts." ✓
- VERIFIED: Wikipedia — "in 1910 the critic Gelett Burgess wrote" the painting was Matisse's
  "punishment" of Amélie; "The art historian John Klein has suggested that difficulties in
  the Matisses' marriage may have contributed to the portrait's impersonal and mask-like
  character" (the Klein line is even flagged citation-needed on WP — so the draft's careful
  hedging is well-judged). CLEAN — this is a model of how to frame a legend.

---

## VERIFIED-CLEAN AXES

**Identity / stats**
- Artist "Henri Matisse" / `artistId: 'matisse'`; year 1905; medium "Oil on canvas". ✓
  (Medium note: several secondary sources, incl. Wikipedia's lead, say "oil and tempera on
  canvas." But SMK's OWN record lists it as "Oil on canvas." The draft follows the museum
  record — correct call. See [NICE-1].)
- Titles: "The Green Stripe / Portrait of Madame Matisse / La Raie verte" — all confirmed;
  SMK's preferred English is "Portrait of Madame Matisse. The Green Line," which the hero
  credit and prose nod to. ✓
- Location "Statens Museum for Kunst, Copenhagen"; inv. KMSr171. ✓ VERIFIED.
- "Autumn 1905" painted / Paris dating: SMK and multiple sources confirm "presumably painted
  in the autumn of 1905, when Matisse had returned to Paris after… Collioure." The draft's
  "most likely that autumn, back in Paris" hedging is correct. ✓
- `chain: { index: 2, total: 9 }` — pipeline-internal, not a factual claim; not gate-checked.

**Dimensions / scale**
- Real museum record: 40.5 × 32.5 cm (H × W). VERIFIED (SMK, Wikipedia, Google A&C all
  agree). ✓
- Conversion: 40.5 cm = 15.94 in ≈ 1 ft 4 in; 32.5 cm = 12.80 in ≈ 1 ft 1 in. Draft's
  `'1 ft 4 in × 1 ft 1 in'` and `'1′4″ × 1′1″'` are correct (matches Wikipedia's "15.9 ×
  12.8 in"). ✓
- `heroAspect: 0.8` (32.5/40.5 = 0.802, portrait). ✓
- Prose "about sixteen inches tall by thirteen wide" (GrnLooking) and "roughly the size of a
  sheet of legal paper": 15.94 in ≈ 16; 12.80 in ≈ 13. ✓ Legal paper is 8.5 × 14 in — the
  canvas (≈13 × 16 in) is in the same ballpark; this is a loose size analogy, acceptable as
  voice, not a precise claim. (Carried consistently in Part A blurbs and annotation framing.)

**Names / life dates / biography**
- Amélie Matisse, née Amélie Noellie Parayre, married Matisse 1898, ran her own Paris hat
  shop, was his business/household manager + model + advocate "for some four decades."
  VERIFIED: married 1898 (b. 16 Feb 1872); opened a hat shop on rue de Chateaudun in 1899;
  primary model + business manager who handled dealer correspondence and exhibitions. The
  draft's "some four decades" / "~41 years" framing is sound (1898 marriage → separation
  1939 ≈ 41 yrs). ✓
- André Derain at Collioure summer 1905. ✓ VERIFIED.
- Michael Stein = "Gertrude and Leo Stein's eldest brother." ✓ VERIFIED (Michael was the
  eldest of the Stein siblings).
- Christian Tetzen-Lund, Danish grain merchant/collector, owned it to his death 1936. ✓
  VERIFIED. (Good catch in the fact pack that loose sources shorten to "Christian Tetzen";
  the draft uses the correct full "Tetzen-Lund" throughout.)
- Johannes Rump, Danish collector, ~100-work 1928 donation = backbone of SMK's French
  modernism; namesake of the fund; did not own this picture. ✓ VERIFIED.
- Louis Vauxcelles coined the "fauves"/wild-beasts insult at the 1905 Salon. ✓ VERIFIED.
- Gelett Burgess, American critic, 1910. ✓ VERIFIED. (His 1910 "Wild Men of Paris" piece in
  *The Architectural Record* is the documented source.)
- John Klein, art historian (*Matisse Portraits*, Yale, 2001). ✓ VERIFIED.
- Dorthe Aagesen, SMK chief curator. ✓ VERIFIED.

**Verbatim quotes + attribution**
- "a demented caricature of a portrait" — attributed in the draft to "A friend of the
  Steins" (Part A blurb + GrnReception). VERIFIED wording. Attribution is correct in spirit
  (see [FIX-2] for a precision tightening: Wikipedia specifies "a friend of the painting's
  owners **Michael and Sarah Stein**").
- Burgess "punishment" + "see in her a strange and terrible aspect" — VERIFIED verbatim
  against Wikipedia. The draft quotes "strange and terrible aspect" exactly and frames
  "punishment" as Burgess's word. ✓
- Aagesen: "Every brush stroke is very deliberately placed, and the painting is a good
  example of how you can experiment with the portrait format." — VERIFIED verbatim. ✓
- NOTE: The fact pack offered the Matisse "when I apply green, that does not mean grass…"
  color credo as an option; the draft does NOT use it. Not a problem — no obligation to
  include it, and not using an unsourced-in-draft quote is the safe choice. (No quote is
  asserted that isn't verified.)

**Provenance chain**
- Row 1 Matisse 1905–06, Paris, sold via Galerie Druet. ✓
- Row 2 Michael & Sarah Stein via Galerie Druet, spring 1906. ✓ VERIFIED (March–April 1906).
- Row 3 WWI Germany storage / temporary Gurlitt seizure / return to Paris ~1919 — VERIFIED
  by reverify (stored in Berlin 1914–17 with Greta & Oskar Moll; 1917–18 sale negotiations →
  temporary seizure by dealer Fritz Gurlitt; returned to Paris 1919). The draft hedges this
  as "the least documented link" / "the least-documented stretch" and names "the Moll
  circle, Berlin" + "the dealer Fritz Gurlitt" in Part A but keeps Part B prose to "a German
  dealer" — appropriately cautious. ✓ (See [NICE-2] re: naming Gurlitt in prose too.)
- Row 4 Tetzen-Lund, Copenhagen, ~1920 → death 1936; dispersed most of his collection in the
  1920s but kept this. ✓ VERIFIED.
- Row 5 SMK 1936 purchase, Rump fund, KMSr171, permanent view, "not a Rump bequest." ✓
  VERIFIED.
- Prices: all `null` except row 5 "estate-sale purchase" (price unrecorded). Correct — no
  invented prices. The only stated price anywhere (500 francs) is correctly pinned to *Woman
  with a Hat*, not this canvas. ✓

**Look-closer annotations (all 6) + the L/R warm-side caution**
- Stripe down center hairline→nose→top lip; splits face into warm/cool halves doing the work
  of light/shadow without modelling. ✓ Matches SMK's documented reading ("a sense of light,
  shadow, and volume without using traditional shading").
- Two-tone face (warm pink/orange/red at chin & ear = lit side; cooler yellow-ochre = half-
  light). ✓ Crucially, the draft describes the warm side by a LANDMARK ("the side carrying
  the orange-and-red chin and ear") rather than asserting viewer-left vs viewer-right — this
  is exactly the fact pack's required handling of the classic L/R look-closer trap. CLEAN.
- Background split warm/cool echoing the face. ✓
- Hair, brows, eyes deep blue. ✓
- Teal/blue-green high collar; "no hat here — the hat is the *other* 1905 portrait." ✓
- Brushwork: flat blocks of unmixed color, hard edges, closer to Gauguin/Van Gogh than
  Impressionism. ✓
- All six are literal, verifiable, image-consistent features described in prose with no blind
  crop coordinates (`feedback_no_blind_image_coordinates` respected). CLEAN.

**"First / only / most" claims**
- "the single clearest example in early modern art of color taking over a job… that drawing
  and tonal shading used to own"; "the textbook demonstration of… color cut loose from
  description"; "the most famous green stripe in modern art"; "one of the most legible breaks
  in the history of painting." These are art-historical superlatives of EMPHASIS, well
  within consensus framing for this canvas (it is the canonical poster-child of Fauve
  arbitrary color), and consistent with the movement read. Not falsifiable factual claims;
  acceptable as voice. ✓
- "one of SMK's signature works of French modernism" / "one of SMK's ten main highlights"
  (implied) — VERIFIED (SMK lists it among its main highlights). ✓

**Lineage**
- parents Fauvism / Van Gogh / Gauguin; children "color cut loose from description" / German
  Expressionism / "Matisse alone" — defensible art-historical lineage, consistent with the
  movement read. No factual error. ✓

**Image / rights**
- `rights: 'pd-us'` — first published 1905, US public domain. ✓ Correct.
- (Image load-check is gate 6's job, not this gate.)

**Nesting consistency (cross-checked against the stated fact-pack movement read)**
- Placement "Paris" (autumn 1905) matches the movement card's `place: 'Paris'`. ✓
- The 500-franc Salon purchase stays attached to *Woman with a Hat* (Leo & Gertrude); *Green
  Line* = Druet 1906 (Michael & Sarah) — does not contradict the movement read. ✓

---

## ISSUES

### [FIX-1] One secondary source DOES claim a 1905 Salon appearance — note for the record (draft is RIGHT to omit it)
- Context: a web summary of Grokipedia states "*The Green Stripe* was first exhibited at the
  1905 Salon d'Automne." The fact pack already flagged this as DISPUTED and unconfirmed by
  Wikipedia/SMK; the autumn-Paris dating makes an 18 Oct 1905 Salon hang tight.
- The draft correctly does NOT assert a Salon/Room VII appearance for this canvas — it pins
  the scandal to *Woman with a Hat*. No change needed to the draft.
- This is logged as a [FIX] only as a standing caution: **do not** let any later edit pull in
  the Grokipedia "first exhibited at the 1905 Salon" line — it is not corroborated by SMK or
  Wikipedia. Source: Wikipedia *The Green Stripe* (no Salon claim); SMK record (autumn-Paris
  dating). The draft as written is clean.

### [FIX-2] Tighten the "demented caricature" attribution to Michael & Sarah Stein
- Draft text (Part A reception blurb): "A friend of the Steins called it a demented
  caricature."
- Draft text (GrnReception): "A friend of the Steins, the American collectors who would soon
  own it, reportedly called the picture **'a demented caricature of a portrait.'**"
- The quote is verified. The attribution is correct but slightly loose: Wikipedia specifies
  "a friend of the painting's owners **Michael and Sarah Stein**" (i.e., the actual owners,
  not the generic "Steins" — which in this article also names Leo & Gertrude as the *Woman
  with a Hat* buyers a few lines earlier). The GrnReception phrasing "the American collectors
  who would soon own it" already points at Michael & Sarah, so this is minor.
- Suggested tightening (optional): "A friend of Michael and Sarah Stein… called it 'a
  demented caricature of a portrait.'" Source: Wikipedia, *The Green Stripe*.
- Severity: low — current text is not wrong, just one notch less precise than the source.

---

## [NICE] items (polish, not required)

### [NICE-1] Medium variant worth a one-time awareness note
- The draft's "Oil on canvas" follows SMK's own catalogue record (Google A&C mirror confirms
  "Oil on canvas"). Several secondary sources (Wikipedia lead, WikiArt) say "oil and tempera
  on canvas." The draft made the right call by deferring to the museum. No change — just be
  aware a reader cross-checking Wikipedia may see the longer descriptor; the museum record
  governs.

### [NICE-2] Gurlitt named in Part A but not Part B prose
- Part A provenance names "the dealer Fritz Gurlitt"; GrnAfterlife prose says only "a German
  dealer." This is a defensible caution choice (the WWI-Germany row is the least-documented
  link). Since the detail IS now corroborated, you *could* name Gurlitt in the prose too —
  but leaving it hedged is also fine. No factual issue either way.

### [NICE-3] "legal paper" size analogy is loose
- Canvas ≈ 13 × 16 in; US legal paper is 8.5 × 14 in. The analogy conveys "small, carry it
  under one arm" correctly and reads as voice, not measurement. Fine as is; flagged only so
  no one mistakes it for a precise equivalence.

---

## BOTTOM LINE
No blockers. The draft nailed all four named traps (purchase-not-bequest, Salon scandal =
*Woman with a Hat*, 500-franc/Stein split, punishment-reading-as-interpretation) and every
verifiable date, dimension, name, quote, price, and provenance link checks out against SMK
and Wikipedia. Two low-stakes [FIX]es (a standing caution against importing the unconfirmed
Salon claim; a one-notch attribution tightening on "demented caricature") and three [NICE]s.
Ship-ready on the fact axis.

---

### Sources consulted (reverify, 2026-06-23)
- SMK record via Google Arts & Culture: https://artsandculture.google.com/asset/portrait-of-madame-matisse-the-green-line-henri-matisse/pQER-gMjYy2etA
- SMK highlight page (redirects to open.smk.dk/en/artwork/image/KMSr171): https://www.smk.dk/en/highlight/portrait-of-madame-matisse-the-green-line-1905/
- Wikipedia, *The Green Stripe*: https://en.wikipedia.org/wiki/The_Green_Stripe
- Wikipedia, *Woman with a Hat*: https://en.wikipedia.org/wiki/Woman_with_a_Hat
- theartbog.com, *Love Story: Henri Matisse and Amélie Noellie Parayre* + masterworksfineart Amélie bio (sitter dates/biography)
