# Fact pack — THE GREEN STRIPE (kind: WORK, Modern era, Fauvism, 1905)

Henri Matisse, **_The Green Stripe (Portrait of Madame Matisse)_ / _La Raie verte_ /
SMK's preferred English title _Portrait of Madame Matisse. The Green Line_**, 1905,
oil on canvas, **Statens Museum for Kunst (SMK), Copenhagen**.

Coordinator-built ground truth for the art content pipeline. The author drafts the
**work-level deep read** ONLY from this. Every concrete claim traces to a sourced item
here or is flagged `[LEGEND]` / `[DISPUTED]` / `⚠️ UNVERIFIED`. Web-checked 2026-06-23;
the fact-checker gate re-verifies independently against the source key.

Dimensions are given in cm (museum record) AND converted to **feet/inches** — the app
ships imperial only, never cm (`feedback_art_dimensions_imperial`).

This is the per-work DEEP read promised in the Fauvism movement fact pack
(`audits/art-pipeline/fauvism-factpack.md`, canon item #2). The movement read already
covers The Green Stripe in a card + one line ("A vertical green stripe straight down a
living face… the single most legible picture of color cut loose from description") and
in the break block. **Go DEEPER here; reference the movement read tersely, do not
re-narrate Fauvism's whole story.** (Nesting gate 7.)

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

Art's signature hallucination trap is the beautiful anecdote. Every juicy/interpretive
claim is tagged.

| Claim | Verdict | The real fact / how to write it |
|---|---|---|
| The acquisition was a **"Johannes Rump bequest"** to SMK | **[DISPUTED — the prompt's premise is loose; correct it]** | Rump did NOT bequeath *this* painting. SMK **purchased** *The Green Line* in **1936** at the estate auction of the Danish collector **Christian Tetzen-Lund**, financed by the **Ingeniør J. Rump og hustru Elisabeth Rumps Fond** (the Rump fund/foundation). Johannes Rump (1861/1866–1932) WAS the great Danish collector of French modernism — his ~100-work **1928 donation** is the spine of SMK's French collection, and the painting's SMK inventory prefix **KMSr** = "Rump collection." But *The Green Line* came in as a **fund-financed 1936 purchase from the Tetzen-Lund estate**, not as part of Rump's own gift. **Write: "bought by SMK in 1936 at the Tetzen-Lund estate sale, paid for by the Rump fund," NOT "the Rump bequest."** [SMK][Grok][Met-TL] |
| **Painted at Collioure, summer 1905** | **[DISPUTED — lean to autumn/Paris]** | SMK states the picture was "**probably painted in the autumn of 1905, following Matisse's return to Paris** after… Collioure." Several sources loosely date it "1905" or fold it into "the breakthrough summer." **Write: painted in 1905, most likely that autumn back in Paris, right after the Collioure summer — its method (pure arbitrary color) is the Collioure breakthrough applied to a portrait.** Do not assert "painted at Collioure." [SMK][Grok] |
| **Exhibited in Room VII at the 1905 Salon d'Automne** (the "cage of wild beasts") | **[DISPUTED — do NOT assert flatly]** | The painting firmly tied to Room VII / the Vauxcelles "fauves" scandal is **_Woman with a Hat_** (also Amélie, also 1905). Some secondary write-ups (e.g. Grokipedia) say *The Green Stripe* was *also* shown at the 1905 Salon d'Automne, but Wikipedia and SMK do **not** confirm it hung in Room VII, and the autumn-Paris dating makes a 18 Oct 1905 Salon appearance tight. **Write: it belongs to the same Fauve moment and is "in dialogue with" _Woman with a Hat_ (the actual Salon scandal-piece); do NOT state The Green Stripe itself caused the Salon scandal unless gate 1 finds a primary exhibition record.** [W][SMK] |
| The green stripe **"is the shadow / a meridian of light down the nose"** | **[DOCUMENTED as Matisse's structural device — but state it as device, not as literal observed shadow]** | The documented reading: the green band divides the face into a **cool half and a warm half**, doing the work of light/shadow/volume **without traditional modelling** — "by which Matisse sought to produce a sense of light, shadow, and volume without using traditional shading." It is color **standing in for** modelling, not a green shadow that was actually there. Frame as Matisse's structural choice. [SMK][classicalcanvas][Wikiart] |
| Matisse's color quote: **"When I put a green, it is not grass; when I put a blue, it is not the sky…"** | **[DOCUMENTED — verify exact wording at gate 1]** | Real Matisse statement, widely cited; the wording the app should use, per the Met's 2023 *Vertigo of Color* catalogue: *"My paintings consist of four or five colors which clash with one another expressively. When I apply green, that does not mean grass. When I apply blue, that does not mean sky. It is their accord or their opposition which opens in the viewer's mind an illusory space."* ⚠️ Translation varies; gate the chosen wording against the **Amory et al., _Vertigo of Color_, Met, 2023** translation (the Wikipedia source). [W (Amory 2023)] |
| The portrait is **"a punishment of Amélie" / shows a troubled marriage** | **[LEGEND / INTERPRETATION — frame, never assert]** | Documented as *period and later opinion*, not fact: a friend of the Steins called it "a demented caricature of a portrait"; in **1910 the critic Gelett Burgess** wrote it was Matisse's "punishment" of Amélie, making the viewer "see in her a strange and terrible aspect"; art historian **John Klein** *suggested* marital strain may underlie its mask-like impersonality. **Write: "critics reached for…", "Klein has suggested…" — never "the painting shows their failing marriage."** [W (Klein 2001, Burgess 1910)] |
| The Steins bought *The Green Line* "off the Salon wall for 500 francs" | **[CONFLATION — that's _Woman with a Hat_]** | The 500-franc Salon purchase is **_Woman with a Hat_** (Leo & Gertrude Stein). *The Green Line* was acquired by **Michael & Sarah Stein**, via **Galerie Druet, Paris, March–April 1906** — a gallery purchase, not a price-known Salon rescue. Keep the two transactions separate. [Grok][Met-TL][fauvism-factpack] |
| Amélie was a **milliner; designed the hat in _Woman with a Hat_** | **[DOCUMENTED — but that's the OTHER painting; useful background only]** | Amélie Parayre ran a hat shop (~1899–1902); the millinery detail belongs to *Woman with a Hat*. In *The Green Stripe* she wears a blouse/dress with a high teal-edged collar — no hat. Use the millinery fact only as sitter background, not as a Green Stripe pointer. [SFMOMA][artbog] |

---

## 1. IDENTITY (the stats block)

- **Artist:** Henri Matisse, French, **1869–1954** (b. Le Cateau-Cambrésis, 31 Dec 1869;
  d. Nice, 3 Nov 1954). App `artistId` for the figure nameplate: `matisse` (matches the
  Fauvism movement artists row). [W-Matisse]
- **Titles:**
  - English (SMK preferred): **_Portrait of Madame Matisse. The Green Line_**
  - Common English: **_The Green Stripe_** / **_The Green Line_** / **_Madame Matisse_**
  - French: **_La Raie verte_** (lit. "the green stripe"; also seen as _Portrait de
    Madame Matisse, la raie verte_).
  - Danish (museum): **_Portræt af Madame Matisse. Den grønne stribe_**
  - For the app: `name: 'The Green Stripe'`, `shortName: 'The Green Stripe'`, and note
    the **"Portrait of Madame Matisse"** alt in the hook/prose. [W][SMK]
- **Year:** **1905** (most likely autumn 1905, Paris — see Legend Ledger). [SMK]
- **Medium:** **Oil on canvas.** [W][SMK]
- **Dimensions (museum record):** **40.5 × 32.5 cm** (height × width).
  - Convert to imperial (app ships ft/in): 40.5 cm = **15 15/16 in ≈ 1 ft 4 in**;
    32.5 cm = **12 13/16 in ≈ 1 ft 0 13/16 in**.
  - **`dimensions` field:** `'1 ft 4 in × 1 ft 1 in'` (rounded, height × width — matches
    the app's height×width convention and the fauvism-factpack's "~1 ft 4 in × 1 ft 1 in").
  - **`stats` chip:** `'1′4″ × 1′1″'`. (Wikipedia's "15.9 × 12.8 in" rounds the same.)
  - **It is SMALL** — about sixteen by thirteen inches, roughly the size of a sheet of
    legal paper. Worth surfacing in the prose: the most famous green stripe in modern art
    sits on a canvas you could carry under one arm. [W][SMK]
  - **`heroAspect`** (W/H for the contain-fit hero): 32.5 / 40.5 ≈ **0.80** (a portrait /
    taller-than-wide canvas → portrait hero, NOT the landscape hero band;
    `feedback_hero_must_be_landscape` → put it in a portrait-aware frame, never crop).
- **Current location:** **Statens Museum for Kunst (SMK) — the National Gallery of
  Denmark, Copenhagen.** `location: 'Statens Museum for Kunst, Copenhagen'`. [SMK]
- **Inventory / accession number:** **KMSr171** (the **KMSr** prefix = the **Rump**
  collection at SMK). [SMK-Open][Grok]
- **Acquisition (the `acquired` line):** **Purchased by SMK in 1936** at the estate
  auction of **Christian Tetzen-Lund**, financed by the **Ingeniør J. Rump og Elisabeth
  Rumps Fond** (the Rump fund). `acquired: 'Purchased 1936 at the Tetzen-Lund estate
  sale, by the Ingeniør J. Rump and Elisabeth Rump Fund'`. **NOT a Rump bequest.**
  [SMK][Grok][Met-TL]

---

## 2. THE HOOK (one sentence)

The portrait of his wife Amélie split top to bottom by a band of green — Matisse using a
stripe of pure color to do the work of light and shadow, so color stops describing the
face and starts building it.

Alt phrasings (author picks/improves):
- "A small portrait of his wife with a green stripe down the middle of her face, where
  color quit describing the world and started constructing it."
- The app movement-card line (don't duplicate verbatim in the work hook): "A vertical
  green stripe straight down a living face, cool side against warm."

---

## 3. NARRATIVE SECTIONS (~5 chapters — author may improve)

### Ch 1 — The setting: Collioure, summer 1905, and the autumn that followed
- Summer 1905: Matisse + **André Derain** at **Collioure**, a fishing port on the
  Mediterranean near the Spanish border, painting side by side and pushing color off its
  leash — pure pigment from the tube, bare canvas showing, color keyed to sensation not
  fact. This is where Fauvism is *made*. (Terse — the movement/era reads own this; do not
  re-narrate the whole summer.) [W][Met-Collioure]
- **Autumn 1905, back in Paris:** Matisse most likely paints *The Green Line* here, after
  Collioure — the breakthrough method turned on a portrait of his own wife. [SMK]
- The same autumn, the **1905 Salon d'Automne** (opened 18 Oct, Grand Palais) put
  Matisse's Fauve canvases in **Room VII**; critic **Louis Vauxcelles** dubbed it
  "Donatello chez les fauves," and the name stuck. The Salon scandal-piece of Amélie is
  **_Woman with a Hat_** — *The Green Line* is its quieter, harder, more intimate
  companion (same wife, same year). **Frame the Salon as context, not as this picture's
  own scandal** (Legend Ledger). [W][fauvism-factpack]

### Ch 2 — The making: a green stripe as the central axis
- The single structural idea: a **vertical green band runs down the center of the face**,
  from hairline down the nose to the upper lip, **dividing the face into a cool half and a
  warm half.** The stripe does the job of a shadow / the turn of the form — it gives light,
  shadow and volume **without any traditional modelling** (no gradual shading). Color
  *is* the structure. [SMK][classicalcanvas][Wikiart]
- The two halves: one side of the face is in **direct light** — pink with orange and red
  along the chin and ear; the other side is **half-light** — yellow/ochre. The green
  meridian is the seam between them. [W (Leymarie)]
- The method is the Collioure method applied to a head: **pure, unmixed, arbitrary color**
  laid in **blocks/sections** (close to Gauguin's and Van Gogh's flat areas of saturated
  color), each block defining a feature or a zone of the room. Matisse has moved fully past
  Impressionism's broken light. [W (Watkins 1985)]
- This is THE textbook demonstration of color cut loose from description — the line that
  belongs in the break block of the movement read.

### Ch 3 — What's on the canvas / how to LOOK (the looking chapter — weight it)
The whole picture is **blocks of bold, flat color**. Reading it (all from SMK / Wikipedia /
Wikiart, eyeball-verified against `ART_IMG.matisseGreenStripe`):
- **The green meridian** — a vertical green stripe, hairline → down the nose → to the top
  lip; the picture's title and its structural spine.
- **The two-tone face** — warm/lit side (pink, with orange and red at chin and ear) vs the
  cooler/half-lit side (yellow-ochre).
- **Hair, brows, eyes** — a deep **blue**.
- **The blouse/dress** — orange and pink, with a **teal (blue-green) neckline/high
  collar**.
- **The background** — split: **pink and orange on one side, teal/green on the other** —
  the same warm/cool division as the face, carried into the room behind her.
- Net effect: intense, mask-like, "almost nonhuman" — the life comes from the **purity of
  the colors and the tension between them**, not from likeness. [W][SMK][Wikiart]

### Ch 4 — The reception: part of the Fauve scandal, and the "punishment" reading
- The Fauve color was attacked as outrageous and unnatural; this picture's mask-like
  refusal to flatter unsettled even friends. **A friend of the Steins** called it "a
  demented caricature of a portrait." In **1910 the critic Gelett Burgess** wrote *The
  Green Stripe* was Matisse's "punishment" of Amélie, making the viewer "see in her a
  strange and terrible aspect." [W (Klein 2001)]
- Art historian **John Klein** has *suggested* marital strain may lie behind its
  impersonal, mask-like character — **flag as a suggestion, not fact.** Counter-frame: the
  documented point is artistic — Amélie was, in these portraits, "nothing but a model";
  Matisse put his color idea ahead of the personality of the sitter. [W (Klein 2001)]
- (Framing-gate note: Amélie was no passive prop — for ~41 years she was Matisse's business
  manager, household manager, model and chief advocate; she ran her own hat shop before
  marriage. Give her agency; do not reduce her to "the wife who got a green stripe."
  [SFMOMA][artbog])

### Ch 5 — The afterlife: the route to Copenhagen
- The painting travels from the Stein circle in Paris, through wartime Germany, into a
  great Danish collection, and finally to SMK — see the full provenance in §4. The arc:
  **Steins (Paris) → wartime storage in Berlin → back to Paris → Christian Tetzen-Lund
  (Copenhagen) → SMK, 1936, by the Rump fund.**
- It now hangs at SMK as one of the museum's signature works of French modernism, the
  jewel of a French collection built largely on **Johannes Rump's** 1928 donation — even
  though this picture itself entered by fund-purchase, not Rump's gift. SMK chief curator
  **Dorthe Aagesen**: "Every brush stroke is very deliberately placed, and the painting is
  a good example of how you can experiment with the portrait format." [SMK][Grok]

---

## 4. PROVENANCE CHAIN (for the `provenance` array — owners, places, dates, prices)

Assembled from SMK + Grokipedia's detailed chain + the Met Tetzen-Lund index. Prices are
mostly unrecorded (`price: null`). ⚠️ The WWI Berlin-storage / Gurlitt-seizure detail is
from Grokipedia and should be **re-confirmed at gate 1** before it ships as fact; the
spine (Steins → Tetzen-Lund → SMK 1936, Rump fund) is corroborated by SMK itself.

| # | Years | Owner | Place | Note | Price |
|---|---|---|---|---|---|
| 1 | 1905–1906 | **Henri Matisse** (the artist) | Paris | Painted 1905 (most likely autumn, after Collioure). Sold within months via the dealer Galerie Druet. | null |
| 2 | 1906–c.1914 | **Michael and Sarah Stein** | Paris | The American collectors (Michael was Gertrude & Leo Stein's eldest brother) bought it through **Galerie Druet, March–April 1906**. The Steins were the avant-garde's key American patrons; *The Green Line* hung in their Paris flat. ⚠️ Druet detail = Grok; re-verify. | null |
| 3 | 1914–1917/19 | **(stored) Greta & Oskar Moll, Berlin** | Berlin | With the outbreak of WWI the painting was left/stored in Germany with the Molls (Matisse pupils/collectors); 1917–18 sale negotiations led to a temporary seizure by the dealer **Fritz Gurlitt**; returned to Paris **1919**. ⚠️ Whole row = Grok; **gate-1 re-verify or downgrade to a hedged single sentence.** | null |
| 4 | c.1919/20–1936 | **Christian Tetzen-Lund** | Copenhagen | The Danish businessman/grain merchant and major collector of French modernism brought it to Copenhagen (~1920). His collection was largely dissolved in the 1920s, but he **kept this portrait until his death in 1936.** (Note: some loose sources shorten his name to "Christian Tetzen" — the correct name is **Tetzen-Lund**.) | null |
| 5 | 1936–today | **Statens Museum for Kunst (SMK)** | Copenhagen | **Purchased at the Tetzen-Lund estate auction in 1936**, financed by the **Ingeniør J. Rump og Elisabeth Rumps Fond** (the Rump fund). Inv. **KMSr171** (KMSr = the Rump collection). On permanent view. **Not a Rump bequest — a fund-financed purchase.** | (estate-sale purchase) |

`museum: true` on row 5. Figures/people to nameplate from this chain: Michael Stein,
Sarah Stein, Christian Tetzen-Lund, Johannes Rump (as the fund's namesake / the man behind
SMK's French collection).

---

## 5. SIX "LOOK CLOSER" ANNOTATIONS (`{label, where, detail}` — prose, never crops)

All six are **literal, verifiable features** of the canvas, checked against
`ART_IMG.matisseGreenStripe` and SMK/Wikipedia descriptions. `where` is a written location
phrase — the page shows the whole painting; do NOT author x/y/w/h coordinates
(`feedback_no_blind_image_coordinates`).

1. **The green stripe down the nose and forehead**
   - `where`: "Dead center of the face, a vertical band running from the hairline down the
     bridge of the nose to the top lip."
   - `detail`: This green band is the painting's title and its whole structure. It splits
     the face into two halves and does the job a shadow would do in a normal portrait —
     turning the form, giving it volume — except there is no shading anywhere, just a stripe
     of flat green color standing in for the modelling. It is the single clearest example in
     early modern art of color taking over a job (describing light and shape) that drawing
     and tonal shading used to own. [SMK][classicalcanvas]

2. **The two-tone face: a warm half and a cool half**
   - `where`: "Either side of the green stripe — the proper-right side (viewer's left) warm,
     the other side cooler/yellow."
   - `detail`: One side of the face is keyed warm — pink, with orange and red worked along
     the chin and the ear — reading as the side in direct light. The other side is a cooler
     yellow-ochre, reading as half-light. There is no gradual blend between them; the green
     stripe is the only seam. Light and shadow have been translated entirely into two flat
     temperatures of color. [W (Leymarie)][SMK]

3. **The three-color background**
   - `where`: "The flat field behind the head — split into a warm zone and a cool zone."
   - `detail`: The background is not a single backdrop but is divided like the face: pink and
     orange on one side, teal/green on the other. Matisse carries the warm/cool split of the
     face out into the whole picture, so the room behind her echoes the structure of her
     head — color organizing the entire surface, not just describing a wall. [SMK]

4. **The hair, brows and eyes in deep blue**
   - `where`: "The hair piled up top, plus the eyebrows and eyes."
   - `detail`: Hair, brows and eyes are all painted a deep blue — a color no hair is, set
     against the green stripe and the warm flesh. It's the clearest tell that Matisse is
     choosing colors for how they ring against their neighbors, not for what the thing
     actually looks like; the blue cools and anchors the top of the head against the heat of
     the cheeks. [W][Wikiart]

5. **The high collar / neckline in teal**
   - `where`: "At the base of the portrait, the neckline of her blouse or dress."
   - `detail`: She wears an orange-and-pink blouse or dress closed with a **teal (blue-green)
     neckline** — the same blue-green family as the green stripe and the cool side of the
     background, tying the bottom of the picture back to its top. (No hat here — the hat is
     the *other* 1905 portrait of Amélie, *Woman with a Hat*.) [W][SMK]

6. **The brushwork: flat blocks, not blended modelling**
   - `where`: "Anywhere across the face and background — the broad areas of unbroken color."
   - `detail`: The paint is laid in firm, flat sections of pure unmixed color, each one
     defining a feature or a zone, with hard edges between them rather than soft blended
     transitions. This is closer to the flat color-areas of Gauguin and Van Gogh than to
     Impressionism's flicker, and it is why the head reads as a built construction — almost a
     mask — rather than a soft, rounded, lifelike face. [W (Watkins 1985)]

⚠️ **Annotation 2's left/right (which side is warm):** state the warm side by a clear
landmark (chin/ear with orange-red = the warm/lit side) and let gate 1 confirm
viewer-left vs viewer-right against the actual image before locking — the L/R call is the
classic look-closer error (cf. the Demoiselles/Three Musicians retro pass).

---

## 6. KEY FIGURES (the `figures` nameplates)

1. **Henri Matisse** (1869–1954) — the painter; the leader of Fauvism; here turning the
   Collioure color breakthrough onto a portrait of his own wife. [W-Matisse]
2. **Amélie Matisse** (née **Amélie Noellie Parayre**, b. 1872) — **the sitter**, Matisse's
   wife (married 10 Jan 1898). A former milliner who ran her own Paris hat shop (~1899–1902);
   for ~41 years his business manager, household manager, model and fiercest advocate; she
   adopted and helped raise his daughter Marguerite and bore their sons Jean (1899) and
   Pierre (1900). The most-painted face of early Matisse (also *Woman with a Hat*). [SFMOMA][artbog]
3. **Michael & Sarah Stein** — the American collectors who bought *The Green Line* through
   Galerie Druet in 1906 and carried the avant-garde into private American patronage. (Keep
   distinct from Leo & Gertrude, who bought *Woman with a Hat*.) [Grok][Met-TL]
4. **Christian Tetzen-Lund** (d. 1936) — the Danish businessman-collector who owned it in
   Copenhagen and kept it to his death; SMK bought it from his estate. [Met-TL][SMK]
5. **Johannes Rump** (Danish engineer-collector, d. 1932) — the man behind SMK's French
   modernist collection (his ~100-work **1928 donation**); the **Rump fund** named for him
   financed the museum's 1936 purchase of *The Green Line*. (He did not own this picture
   himself.) [SMK][Grok]

---

## 7. IMAGE & RIGHTS (gate 6)

- **US public-domain status: CONFIRMED PD-US.** First published **1905** → pre-1930 → US
  public domain regardless of Matisse's 1954 death. **Inlineable** as the hero + the
  look-closer base image. (`rights: 'pd-us'`.) The death-date life+70 rule (EU-PD only from
  1 Jan 2025) does not bind the app's US gate. [PD-2025][Commons]
- **Born-verified image already in the app:** `ART_IMG.matisseGreenStripe` =
  `https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Matisse_-_Green_Line.jpeg/1280px-Matisse_-_Green_Line.jpeg`
  (Commons `File:Matisse - Green Line.jpeg`; Commons-hosted PD reproduction). Load-check it
  at gate 6; it is the same file the movement read uses.
- **Hero aspect / fit:** portrait canvas, W/H ≈ **0.80** → `heroAspect: 0.8`,
  `heroFit: 'contain'` (whole canvas, never cropped; portrait-aware frame, not the landscape
  hero band).
- **Hero credit line:** `'Matisse, The Green Stripe (Portrait of Madame Matisse), 1905 ·
  Statens Museum for Kunst, Copenhagen'`.

---

## 8. NESTING (gate 7) — go DEEPER than the movement read, don't duplicate

- The **Fauvism movement read** (`movement-narratives.tsx`, `fauv`) already: lists *The
  Green Stripe* as a canon card ("a vertical green stripe straight down a living face, cool
  side against warm"); uses it as the most-legible break image; tells the Vauxcelles /
  Room VII / *Woman with a Hat* / Stein-500-francs Salon story; sets the work in "Paris."
  **Reference these tersely.** The WORK read goes deeper: Amélie as a person and a recurring
  sitter, the warm/cool-axis mechanism feature by feature, the small physical scale, the
  full Steins→Tetzen-Lund→SMK provenance, the Burgess "punishment" reception, and the
  Rump-fund-not-Rump-bequest acquisition.
- **Consistency to hold:** "Paris" placement (autumn 1905) must match the movement card's
  `place: 'Paris'`; the *Woman with a Hat* = the 500-franc Salon piece (Leo & Gertrude),
  *Green Line* = Druet 1906 (Michael & Sarah) split must not contradict the movement read's
  "the Steins bought it off the wall for 500 francs" line (that line is about *Woman with a
  Hat* — keep it there, do not attach 500 francs to *Green Line*).

---

## 9. VOICE (WRITING-RULES + art voice locks)
House dry wit dialled up a notch; comparisons welcome; inline-define every term (Fauvism,
the Salon d'Automne, modelling, local color, *les fauves*, the Steins). **Make the reader
SEE the color** — the green meridian, the warm vs cool halves, the blue hair, the teal
collar, the split background. Storytelling first; accuracy a hard floor. The only quotes
are Matisse's color statement and the Burgess "punishment" line — both gated, both framed
(Matisse's as his documented credo; Burgess's as one 1910 critic's reading). Don't flatten
Amélie into "the long-suffering wife"; don't assert the marriage reading as fact; don't
claim the picture itself was the Salon scandal.

---

## Source key

- **[W]** Wikipedia, *The Green Stripe* (en.wikipedia.org/wiki/The_Green_Stripe). Cites:
  Leymarie, *Fauves and Fauvism* (Rizzoli, 1988); Klein, *Matisse Portraits* (Yale, 2001);
  Watkins, *Matisse* (Oxford, 1985); Amory et al., *Vertigo of Color* (Met, 2023); the SMK
  highlight page; Gelett Burgess (1910).
- **[SMK]** Statens Museum for Kunst, highlight page *Portrait of Madame Matisse. The Green
  Line, 1905* (smk.dk → open.smk.dk/en/artwork/image/KMSr171). Curator quote: Dorthe Aagesen.
- **[SMK-Open]** SMK Open collection record, inv. **KMSr171**, Danish title *Portræt af
  Madame Matisse. Den grønne stribe*.
- **[Grok]** Grokipedia, *The Green Stripe* (detailed provenance: Druet 1906, Moll/Berlin
  storage, Gurlitt seizure, Tetzen-Lund, 1936 SMK purchase via the Rump fund) —
  **corroborating only; gate-1 re-verify the WWI-Germany rows.**
- **[Met-TL]** The Metropolitan Museum of Art, Leonard A. Lauder Research Center, Modern
  Art Index Project, *Christian Tetzen-Lund* entry.
- **[Met-Collioure]** The Met, *Vertigo of Color: Matisse, Derain, and the Origins of
  Fauvism* (2023–24).
- **[Wikiart]** WikiArt, *The Green Line / Portrait of Madame Matisse* (color reading,
  warm/cool halves).
- **[classicalcanvas]** classicalcanvas.org, "A Complete Analysis of 'The Green Line'"
  (the green band as light/shadow/volume without traditional shading — corroborating,
  secondary).
- **[SFMOMA]** SFMOMA, "Matisse's *Femme au chapeau*: From Scandal to Icon" (Amélie's
  millinery background; the Stein purchases).
- **[artbog]** theartbog.com, "Love Story: Henri Matisse and Amélie Noellie Parayre"
  (sitter biography — secondary).
- **[W-Matisse]** Wikipedia, *Henri Matisse* (life dates 1869–1954).
- **[PD-2025]** ARTnews / Hyperallergic (Jan 2025): Matisse (d.1954) works enter EU/life+70
  PD on 1 Jan 2025; US "pre-1930 = PD" caveat — confirms US-PD for the 1905 reproduction.
- **[Commons]** Wikimedia Commons, *File:Matisse - Green Line.jpeg* (PD-US tag).

---

## SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Identity locked:** Matisse, *The Green Stripe (Portrait of Madame Matisse / La Raie
   verte)*, 1905, oil on canvas, **40.5 × 32.5 cm → ~1 ft 4 in × 1 ft 1 in** (a SMALL,
   portrait-format canvas), SMK Copenhagen, inv. **KMSr171**, PD-US, image already in the
   app as `ART_IMG.matisseGreenStripe`.
2. **The stripe = structure:** a vertical green band splits the face into a documented
   **warm half / cool half**, doing the work of light-and-shadow modelling with flat color
   instead of shading. The one documented Matisse quote ("when I apply green, that does not
   mean grass…") is the credo to anchor it; gate the wording to the Met 2023 translation.

**TWO NOTABLE LEGEND-vs-FACT CATCHES (the prompt's own premises need correcting):**
- ⚠️ **"Johannes Rump bequest" is wrong.** SMK *bought* the painting in **1936 at the
  Christian Tetzen-Lund estate sale**, paid by the **Rump fund** (inv. prefix KMSr = Rump
  collection). Rump's own 1928 gift built SMK's French collection but did **not** include
  this picture. Write "fund-financed 1936 purchase," not "Rump bequest."
- ⚠️ **The Salon-d'Automne-Room-VII and "painted at Collioure" premises are DISPUTED.** SMK
  dates it to **autumn 1905 in Paris** (after Collioure), and the firmly-Room-VII scandal
  piece is **_Woman with a Hat_**, not *The Green Stripe*; don't assert this canvas caused
  the 1905 scandal or was painted at Collioure unless gate 1 finds a primary record. (Also:
  the "Steins bought it for 500 francs off the Salon wall" line belongs to *Woman with a
  Hat* / Leo & Gertrude — *Green Line* went to **Michael & Sarah Stein via Galerie Druet,
  1906**.) The "punishment of Amélie" / troubled-marriage reading is **interpretation**
  (Burgess 1910; Klein) — frame it, never assert it.
