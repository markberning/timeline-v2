# Fact pack — WORK: Matisse, *Woman with a Hat (Femme au chapeau)*, 1905 (SFMOMA)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**work-level deep read** (5 chapters + hook + look-closer pointers + provenance + stats
+ figures) ONLY from this pack. Every concrete claim traces to a sourced item here or is
flagged. (Web-verified 2026-06-23 against SFMOMA's own artwork record + curatorial pages,
Wikipedia, the Stein-collection scholarship, and the Fauvism movement fact pack on file.)

**`kind`: work. Movement: Fauvism (`fauv`). Era: Modern (`mod`).** This is the movement's
card image and the natural flagship WORK read for Fauvism.

Dimensions given in cm (museum record) AND converted to **feet/inches** — the app ships
imperial only, never cm (`feedback_art_dimensions_imperial`).

---

## 0. THE LEGEND LEDGER — documented vs charming story (READ FIRST)

The art hallucination trap is the beautiful anecdote. Every juicy claim is marked
**[DOCUMENTED]**, **[LEGEND/REPORTED]**, or **[DISPUTED]**. Do NOT assert any
[LEGEND/REPORTED] or [DISPUTED] item flatly — frame it ("by Stein's own account," "as
the story goes," "sources disagree").

| Claim | Verdict | The real fact + how to write it |
|---|---|---|
| **The famous vertical green stripe down Madame Matisse's face is in THIS painting** | **[DISPUTED — DO NOT CONFLATE]** | The iconic full **face-bisecting vertical green stripe** is a **DIFFERENT painting**: *The Green Stripe (La Raie verte / Portrait of Madame Matisse)*, 1905, SMK Copenhagen. *Woman with a Hat* has plenty of non-naturalistic green on the face, but it is a **horizontal green smear on the forehead** (the hat's shadow) and a **green streak running down the nose** — NOT the full vertical stripe dividing the face into warm/cool halves. The prompt's own hedge was right. **Write the nose-streak and forehead-smear, never "the green stripe down her face."** [WWH-Wiki][AHP-WWH][SFMOMA-art] |
| Leo Stein called it "the nastiest smear of paint I had ever seen" | **[DOCUMENTED — but frame as his first impression]** | SFMOMA quotes Leo Stein: *"a thing brilliant and powerful, but the nastiest smear of paint I had ever seen."* He and Gertrude then went back to the Grand Palais repeatedly for ~five weeks before buying it. Write it as his recoil-then-conversion, not a flat verdict. [SFMOMA-icon] |
| The Steins paid **500 francs** | **[DISPUTED — give the range, don't pin one number]** | Three accounts diverge. (1) Wikipedia's body text says 500 fr. (2) Gertrude Stein's own *Autobiography of Alice B. Toklas* says it was **listed at 500, and Matisse accepted their offer of 400.** (3) The Matisse family's account says the Steins offered 300 and **Matisse held out for the full 500.** Roughly **$100 at the time.** **Write: "around 500 francs (accounts differ — Gertrude later said they talked him down to 400)."** Do NOT state a single price as settled fact. [WWH-Wiki cit.13][Smithsonian-Stein] |
| Matisse, asked what color the dress *really* was, said **"Black, of course"** | **[LEGEND/REPORTED — attribute to Purrmann]** | Traced to the recollection of **Hans Purrmann**, a German painter in Matisse's circle: studio colleagues asked what hat and dress were so loud, and Matisse, exasperated, said "Black, of course" / "Black, obviously" — a joke. Charming and *probably* true, but it is a reported studio anecdote, not a documented record. **Frame: "as Hans Purrmann told the story…" / "he reportedly snapped."** [WWH-Wiki][henrimatisse.org] |
| The president of France refused to inaugurate the 1905 Salon over these pictures | **[LEGEND/REPORTED — keep at movement altitude, hedge if used]** | This is repeated about President Émile Loubet but is not cleanly sourced to a primary record; it lives in the Fauvism movement pack as a "reportedly." For a WORK read it is **optional color** and must be hedged if used at all. Better: the Salon's own organizers/president *reportedly urged Matisse not to show it* "for fear he would embarrass himself" (this version is on SFMOMA's record). [SFMOMA-art][Fauvism-pack] |
| Vauxcelles coined "les fauves" / "wild beasts" about this room | **[DOCUMENTED, with a legend layer]** | Louis Vauxcelles wrote **"Donatello chez les fauves"** ("Donatello among the wild beasts") in **_Gil Blas_, 17 October 1905**, contrasting a Renaissance-style marble bust (by sculptor **Albert Marque**) sitting amid the wild canvases of **Room VII**. *Woman with a Hat* hung in that room. The word stuck; "Fauvism" followed. (Vauxcelles later said in his 1939 book the line may have come from a bystander — note only if depth allows; the *Gil Blas* print is the documented origin.) [WWH-Wiki][Fauvism-pack] |
| Amélie Matisse was a milliner / ran a hat shop | **[DOCUMENTED — and a real irony worth landing]** | Amélie Parayre worked as a milliner in her aunt's Paris boutique, then **ran her own hat shop on the rue de Châteaudun, 1899–1902.** So the woman painted *with a hat* had herself **made and sold hats for a living** — a genuine, sourced irony, not invented. [TheArtBog-Amelie][Masterworks-Amelie] |
| The painting "began" Fauvism / is the first Fauve painting | **[DISPUTED — hedge]** | It is THE scandal-piece of the 1905 Salon and the movement's emblem, but Fauvism was *made* at Collioure that summer across several painters (Matisse + Derain) and *named* by Vauxcelles at the Salon. Say **"the painting that became the face of the scandal,"** not "the first Fauve painting." [Fauvism-pack][Met-Fauvism] |

---

## 1. IDENTITY (stats block — every field the work-read needs)

- **Title (FR):** *Femme au chapeau*
- **Title (EN):** *Woman with a Hat*
- **Artist:** **Henri Matisse** (1869–1954) — French; b. Le Cateau-Cambrésis, d. Nice.
- **Sitter:** **Amélie Matisse**, née Amélie Noélie Parayre (1872–1958), the artist's wife.
- **Date:** **1905** (begun ~September 1905, finished just before the Salon d'Automne opened in October 1905). [WWH-Wiki][SFMOMA-art]
- **Medium:** Oil on canvas.
- **Dimensions:** **80.65 × 59.69 cm** (museum record rounds to 80.8 × 59.7) = **31¾ × 23½ in** → for the app: **`dimensions: '2 ft 7¾ in × 1 ft 11½ in'`**, stats chip **`'2′7¾″ × 1′11½″'`**. (Height × width, app convention. In prose: "a little over two and a half feet tall — an ordinary easel portrait, not a grand machine.") [SFMOMA-art][WWH-Wiki]
- **Current location:** **San Francisco Museum of Modern Art (SFMOMA)**, San Francisco.
- **Credit line (verbatim):** *"Collection SFMOMA / San Francisco Museum of Modern Art, bequest of Elise S. Haas, 1991."*
- **Accession number:** **91.161**. [SFMOMA-art]
- **`acquired` field:** `'Bequest of Elise S. Haas, 1991'`
- **Rights tier:** **PD-US.** Matisse d.1954 → the painting itself entered EU/life+70 public domain only on 1 Jan 2025, BUT the app's gate is **US copyright = first-published-pre-1930 = US-PD**, so a pre-1930 photographic reproduction is inlineable. The app already inlines it as **`ART_IMG.matisseHat`** (Commons file `Matisse-Woman-with-a-Hat.jpg`). `rights: 'pd-us'`. [Fauvism-pack §4]

---

## 2. THE HOOK (one sentence — pick/sharpen one)

The painting matters because it is **the canvas that set off the first modern art
scandal — a small portrait of the painter's wife whose face is built of impossible
green, mauve and orange, hung in the 1905 room a critic christened "the cage of wild
beasts," and rescued by two American collectors who first called it the nastiest paint
they'd ever seen.**

Candidate one-liners for the `hook` field:
- *"A small portrait of the painter's wife, her face built of green and mauve, that detonated the first modern-art scandal — and was bought by the two Americans who first called it the nastiest smear of paint they had ever seen."*
- *"The hat is fine. It's the face — green down the nose, mauve in the cheeks, no shadow where shadow should be — that made 1905 Paris call Matisse a wild beast."*

---

## 3. THE FIVE NARRATIVE SECTIONS (the story arc)

### Ch 1 — The setting: 1905 Paris and the Salon d'Automne
- The **Salon d'Automne** ("Autumn Salon") = a then-young (founded 1903) juried-but-
  independent exhibition, an alternative to the stuffy official Salon, held at the
  **Grand Palais**, Paris. The 1905 edition ran **18 October – 25 November 1905**. [Fauvism-pack][WWH-Wiki]
- Matisse was **35, broke, and not yet famous** — he'd spent 1904 trying out Signac's
  pointillist dots, then spent the summer of 1905 at **Collioure** with Derain pushing
  color off the leash. He needed a sale. [Fauvism-pack]
- Inline-define for the newcomer: a **Salon** (the big public juried art show that made
  or broke a French painter's career); the Salon d'Automne as the *rebel* venue.

### Ch 2 — The making
- Begun ~**September 1905**, finished hastily right before the Salon. SFMOMA's record: he
  **"abandoned a large landscape project"** to make it, and colleagues + the Salon
  president **encouraged him not to show it, "for fear that he would really embarrass
  himself."** [SFMOMA-art]
- The sitter is **Amélie**, his wife — and herself a **former milliner who had run her
  own hat shop (rue de Châteaudun, 1899–1902).** The woman with the hat made hats for a
  living. [TheArtBog-Amelie][Masterworks-Amelie]
- The "Black, of course" anecdote belongs here — frame as Purrmann's story (see ledger):
  the dress she actually wore was black; the riot of color is invention, not record.
- Technique to make the reader SEE: **pure, unmixed color**, loose brushwork, areas left
  sketchy/"unfinished," **arbitrary color** (color chosen for effect, not accuracy).

### Ch 3 — What's on the canvas / how to LOOK at it
(See §5 for the six locatable pointers.) The spine: a half-length portrait of a
fashionable bourgeois woman — **gloved hand, fan, an enormous flowered hat** — painted in
colors that have nothing to do with how she looked. The *subject* is utterly conventional
(a society portrait); the *color* is the bomb. **That gap is the whole point.**

### Ch 4 — The reception: the scandal and the name
- **Room VII** of the 1905 Salon — Matisse, Derain, Vlaminck, Marquet, Manguin, Camoin,
  van Dongen — read as a wall of clashing raw color. A Renaissance-style marble **bust by
  Albert Marque** sat in the middle of it. [Fauvism-pack][WWH-Wiki]
- **Louis Vauxcelles**, in *Gil Blas* (**17 October 1905**), wrote **"Donatello chez les
  fauves"** — "Donatello among the wild beasts." The room became **"la cage aux fauves"**
  (the cage of wild beasts); the movement got its name. *Woman with a Hat* was the most
  notorious single picture in it. [WWH-Wiki][Fauvism-pack]
- Public reaction: the work was called crude, mad, infantile; viewers were **"utterly
  shocking[ed]"** by "colors that didn't correspond to observed reality" on a human face
  (SFMOMA). [SFMOMA-art]

### Ch 5 — The afterlife: the Steins, and the road to SFMOMA
- **Leo & Gertrude Stein** — American expatriate siblings in Paris, about to become the
  avant-garde's first great patrons — bought it **straight out of the Salon.** Leo's first
  reaction: *"a thing brilliant and powerful, but the nastiest smear of paint I had ever
  seen"*; they went back for ~five weeks, then bought it. **Price ~500 fr (disputed — see
  ledger; ≈$100).** The sale steadied a demoralized Matisse and **launched the Steins as
  modern-art collectors.** [SFMOMA-icon][WWH-Wiki][Smithsonian-Stein]
- It then moved within the Stein family and on to San Francisco (see §4 provenance),
  ending as **Elise Haas's 1991 bequest to SFMOMA** — where in 2026 it anchors the
  exhibition *Matisse's Femme au chapeau: A Modern Scandal.* [SFMOMA-icon][SFMOMA-exh]
- The big idea to close on: this small, once-reviled canvas is now read as **the picture
  that freed color from description** — the permission every later painter inherited.

---

## 4. PROVENANCE CHAIN (for the `provenance[]` array)

Owners, places, dates, prices where known. **Verified order.** [SFMOMA-icon][WWH-Wiki][Smithsonian-Stein]

| # | Years | Who | Place | Note | Price |
|---|---|---|---|---|---|
| 1 | 1905 | **Henri Matisse** (the artist) | Paris | Shown at the Salon d'Automne, Oct–Nov 1905; sold straight out of the exhibition. | — |
| 2 | **1905** | **Leo & Gertrude Stein** | Paris | Bought it out of the Salon — their first major modern purchase, the start of the Stein collection. Leo's recoil-then-conversion; price ~500 fr **(disputed: Gertrude's account = listed 500, paid 400; Matisse family = held out for 500)**, ≈$100. | **~400–500 francs (disputed)** |
| 3 | **1915** | **Michael & Sarah Stein** | Paris | After Leo and Gertrude divided the collection (the siblings parted ~1913–14), the painting passed to their brother & sister-in-law Michael and Sarah Stein, devoted Matisse patrons. | — |
| 4 | **1935** | (Michael & Sarah Stein) | → San Francisco Bay Area | The Michael Steins brought it **from France to the Bay Area in 1935.** | — |
| 5 | **1948** | **Elise S. & Walter A. Haas** | San Francisco | Elise Haas (a San Francisco–born grandniece of Levi Strauss) and her husband Walter bought it (with several other Matisses) from the Stein holdings, **1948.** | (purchase) |
| 6 | **1991–today** | **SFMOMA** | San Francisco | **Bequest of Elise S. Haas** (d. 1990; entered the collection 1991), accession **91.161.** On permanent view. | **bequest / gift** |

⚠️ Verification notes for the fact-check gate: the **1915** Michael/Sarah hand-off date,
the **1935** Bay Area arrival, and the **1948** Haas purchase all come from SFMOMA's own
curatorial text + secondary summaries — confirm them against the SFMOMA provenance record
or the Rebecca Rabinow / *The Steins Collect* catalogue at gate 1 before locking exact
years. The Stein-sibling split is variously dated **1913** or **1914** (Leo took the
Renoirs/Cézannes, Gertrude kept the Picassos) — write "around 1913–14."

---

## 5. SIX "LOOK CLOSER" POINTERS (the `annotations[]` — prose, NOT crops)

Each is a verifiable claim about **what is literally on the canvas.** Verified against the
detailed visual descriptions on file [AHP-WWH] + SFMOMA. **No blind coordinates** — `where`
is a written location phrase; the page shows the whole painting. **CRITICAL: do not call
the nose-streak "the green stripe down her face" — that's the OTHER painting.**

1. **`label`: The green that runs down her nose**
   `where`: Center of the face, a vertical streak along the bridge of the nose.
   `detail`: A **long green streak defines the nose**, with a little blob of pale yellow at
   the tip. This is the painting's clearest "arbitrary color" move — green where a nose has
   no business being green — but note it is a *streak down the nose*, **not** the famous
   full vertical stripe that splits the whole face in two (that's *The Green Stripe*, a
   separate 1905 portrait of the same sitter). [AHP-WWH]

2. **`label`: The forehead smear (a shadow painted green)**
   `where`: Across the forehead, just under the hat brim.
   `detail`: A **horizontal green smear** sits on the forehead — most likely the shadow
   cast by the wide hat brim, except Matisse painted that shadow *green* instead of a
   darker flesh tone. Color is doing the job of shadow without obeying the rules of shadow.
   [AHP-WWH]

3. **`label`: A face built from colors no face has**
   `where`: The cheeks, lips and chin.
   `detail`: The face is assembled from **streaks of green and blots of gray, mauve and
   yellow.** The upper lip is **tomato red**, the lower lip a **slash of peachy pink**, a
   short strip of **light green** under it, the chin another slash of pink. There is almost
   no smooth modeling — the face reads as a patchwork of pure color, not a rounded form.
   [AHP-WWH]

4. **`label`: The hat — a tower of pure color**
   `where`: The top half of the canvas, above her forehead.
   `detail`: A **wide blue brim** sits straight across, topped by **exuberant puffs of
   orange, green and blue** swirling around each other; a small patch of her **red hair**
   peeks out beneath. The hat is the most riotous passage in the picture — fitting, since
   the sitter was herself a former hat-maker. [AHP-WWH][TheArtBog-Amelie]

5. **`label`: The glove and the fan — bourgeois props, painted wild**
   `where`: Lower portion: her raised arm and the fan it holds.
   `detail`: She wears a **long green glove speckled with pink** (like embroidery), and
   holds a **fan of thick white and peach splashes flecked with violet and green.** These
   are the standard accessories of a respectable society portrait — gloves, a fan — which
   is exactly why painting them in clashing color was so provocative: a conventional
   subject in unconventional paint. [AHP-WWH]

6. **`label`: The background that won't sit still**
   `where`: The space around the figure, behind and beside her.
   `detail`: The background is **broad, loose areas of clashing color** rather than a
   described room — patches of green, violet and orange that refuse to recede into depth,
   so the figure and her surroundings sit on one bright, flat, restless surface instead of
   in a window-like space. Bare or thinly-painted canvas shows in places, part of the
   "unfinished" look that scandalized 1905. [AHP-WWH][SFMOMA-art]

(All six re-verify against the actual `ART_IMG.matisseHat` image at gate 1 before
locking — counts, left/right, which-feature-is-what are exactly where pointers go wrong.)

---

## 6. KEY FIGURES (the `figures[]` nameplates)

- **Henri Matisse** (1869–1954) — *The painter.* 35 and unknown in 1905; this canvas made
  him notorious, then made him the leader of the Fauves and, for the rest of his life, the
  great champion of expressive flat color.
- **Amélie Matisse** (Amélie Parayre, 1872–1958) — *The sitter; the painter's wife.* A
  former milliner who ran her own Paris hat shop, then his lifelong household manager,
  business partner and model.
- **Leo Stein** (1872–1947) — *The buyer who first recoiled.* The connoisseur of the
  Stein siblings; called it "the nastiest smear of paint," then bought it.
- **Gertrude Stein** (1874–1946) — *The buyer; the writer.* Co-bought it; her
  *Autobiography of Alice B. Toklas* is a (self-interested) source for the price.
- **Louis Vauxcelles** (1870–1943) — *The critic who named the wild beasts.* His *Gil
  Blas* line, 17 Oct 1905, gave Fauvism its name.
- **Albert Marque** (1872–1939) — *The sculptor in Room VII.* His Renaissance-style marble
  bust amid the wild canvases prompted Vauxcelles's "Donatello among the wild beasts."
- (Optional, for the afterlife/provenance beat) **Sarah & Michael Stein** — the Matisse
  patrons who carried it to San Francisco; **Elise S. Haas** — the collector whose 1991
  bequest gave it to SFMOMA.

---

## 7. NESTING — what other reads already cover (go DEEPER, don't duplicate)

- The **Fauvism movement read** (`/art/mod/fauv`) uses this exact painting as its card and
  narrates the 1905 Salon scandal, Vauxcelles's coinage, the Marque bust, and the Steins'
  purchase at *movement* altitude. This WORK read must **reference that tersely and go
  deeper on the canvas itself**: the specific colors feature-by-feature, the
  Amélie-the-milliner irony, the price dispute, and the full SFMOMA provenance chain. [Fauvism-pack §8]
- The **Modern era read** gives Fauvism a thumbnail with *Dance (I)* as its image —
  reference, don't re-narrate. [Fauvism-pack §8]
- The **green-stripe** picture (*The Green Stripe*, SMK) is the Fauvism break-block "after"
  image — do not blur the two works; this read should, if anything, point out the
  difference (the iconic stripe is its *sister* painting). [Fauvism-pack §0]

---

## 8. VOICE (WRITING-RULES + art voice locks)

House dry wit dialed up a notch; comparisons welcome; inline-define every term (the Salon
d'Automne, the Salon, Fauves/Fauvism, "arbitrary color," "local color," milliner,
provenance, bequest) — reader has zero prior knowledge (terse callback if met in the era /
Fauvism reads). **Make the reader SEE the color** — green down the nose, mauve in the
cheeks, the tower of an orange-and-blue hat. The single best wry beat is earned and true:
**the woman painted with a hat had run a hat shop.** Storytelling first; accuracy a hard
floor; the only quotes are **Vauxcelles's "Donatello chez les fauves"** (documented),
**Leo Stein's "nastiest smear of paint"** (documented, frame as first impression), and the
**"Black, of course"** anecdote (frame as Purrmann's reported story) — all gated. Never
write "the green stripe down her face"; never state a single Stein purchase price as
settled.

---

## Source key

- **[SFMOMA-art]** SFMOMA collection record, *Femme au chapeau (Woman with a Hat)*, 1905,
  acc. 91.161 — `sfmoma.org/artwork/91.161/` (title, date, medium, dimensions, accession,
  credit line, the "abandoned a large landscape" / "encouraged him not to show it" curatorial text).
- **[SFMOMA-icon]** SFMOMA, *Matisse's Femme au chapeau: From Scandal to Icon* —
  `sfmoma.org/read/matisses-femme-au-chapeau-from-scandal-to-icon/` (Leo Stein "nastiest
  smear of paint" quote; the Stein → Michael & Sarah Stein → Haas → SFMOMA chain).
- **[SFMOMA-exh]** SFMOMA, exhibition *Matisse's Femme au chapeau: A Modern Scandal* (2026)
  — `sfmoma.org/exhibition/matisse-femme-au-chapeau/` + press release (the 1915 / 1935 /
  Haas chain; "shockwaves through the art world"; Elise Haas as Levi Strauss grandniece).
- **[WWH-Wiki]** Wikipedia, *Woman with a Hat* (dimensions; Vauxcelles date/quote; the
  price dispute footnote — Gertrude's *Toklas* account 500-listed/400-paid vs Matisse
  family 300-offer/held-for-500; "Black, of course"; the green line on the face).
- **[AHP-WWH]** Obelisk / Art History Project + corroborating descriptions, *The Woman with
  a Hat* (the feature-by-feature color reading: green nose streak, forehead smear, lips,
  glove, fan, hat, background — the source for the six look-closer pointers).
- **[Smithsonian-Stein]** Smithsonian Magazine, *An Eye for Genius: The Collections of
  Gertrude and Leo Stein* (the ~$100 / five-weeks-of-looking purchase story; the Steins as
  first patrons).
- **[TheArtBog-Amelie]** *Love Story: Henri Matisse and Amélie Noellie Parayre* (Amélie's
  milliner career; the rue de Châteaudun hat shop 1899–1902; married Jan 1898).
- **[Masterworks-Amelie]** Masterworks Fine Art, *Amélie Matisse Biography* (b. 16 Feb
  1872 Beauzelle, d. 12 Nov 1958 Paris; milliner; 41-year partnership; model for WWH).
- **[henrimatisse.org]** henrimatisse.org, *Woman with a Hat* (the "Black, of course"
  anecdote via Hans Purrmann; the scandal summary) — secondary, corroborating.
- **[Met-Fauvism]** The Met, essay *Fauvism* (Collioure as the movement's making; the
  "first Fauve painting" hedge).
- **[Fauvism-pack]** Sibling fact pack on file, `audits/art-pipeline/fauvism-factpack.md`
  (the green-stripe conflation catch §0; Room VII / Marque / Vauxcelles; the Steins;
  US-PD image-rights reasoning §4; nesting §8).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Identity all verified:** *Femme au chapeau / Woman with a Hat*, 1905, oil on canvas,
   **80.65 × 59.69 cm = 2′7¾″ × 1′11½″**, SFMOMA, **acc. 91.161, bequest of Elise S. Haas
   1991.** Sitter = his wife **Amélie Matisse** (1872–1958), a former milliner.
2. **The story:** painted hastily Sept–Oct 1905, hung in **Room VII** of the **Salon
   d'Automne**, named by **Vauxcelles** ("Donatello chez les fauves," *Gil Blas*, 17 Oct
   1905), bought out of the Salon by **Leo & Gertrude Stein**, and carried via Michael &
   Sarah Stein (Paris 1915 → Bay Area 1935) to **Elise Haas** (1948) and SFMOMA (1991).
3. **Image rights:** PD-US (pre-1930 reproduction); already inlined as `ART_IMG.matisseHat`.
4. **Six look-closer pointers** authored from a sourced feature-by-feature color reading
   (green nose streak, green forehead smear, mauve/red/pink face, the color-tower hat, the
   green glove + fan, the flat clashing background) — re-verify against the image at gate 1.

**HANDLE-WITH-CARE (the legend-vs-fact catches):**
- ⚠️ **GREEN-STRIPE CONFLATION (biggest trap):** the iconic **full vertical green stripe
  down the face is a DIFFERENT painting** — *The Green Stripe* (SMK Copenhagen), 1905. This
  one has a green **nose streak** + a green **forehead smear**, not the face-splitting
  stripe. Never write "the green stripe down her face" for *Woman with a Hat*.
- ⚠️ **PRICE IS DISPUTED:** ~500 fr is the headline, but Gertrude Stein's own memoir says
  listed-500/paid-400, and the Matisse family says they held out for 500 after a 300 offer.
  Give the range, don't assert one number.
- ⚠️ **"Black, of course"** = a **reported** Hans Purrmann studio anecdote, not a documented
  record — frame it as a story.
- ⚠️ **Loubet refusing to inaugurate the Salon** = thinly-sourced legend; either drop it or
  hedge hard. SFMOMA's documented version is that organizers urged Matisse *not to show it.*
