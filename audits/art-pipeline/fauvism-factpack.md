# Fact pack — FAUVISM (kind: MOVEMENT, Modern era, c.1905–1908, France)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces
to a sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-18; the
fact-checker gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Fauvism movement** read: `/art/mod/fauv` → `…/s/{sectionId}`. Already
  registered in `src/lib/art-content.ts` (id `fauv`, range `1905–1908`, accent rust,
  size `s`, card image = `ART_IMG.matisseHat` = *Woman with a Hat*, portrait:true,
  credit "Matisse, Woman with a Hat, 1905 · SFMOMA"). The next unbuilt Modern
  movement after Realism / Post-Impressionism / (Cubism shipped).
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Movement-page metadata (the break block, the
  manifesto-absent block, the canon list, lineage, artists row, parallels) the
  coordinator assembles from this pack; per-work DEEP reads come in a later pass.

## Throughline (the one idea)
Fauvism is the moment **color comes off the leash**. For ~400 years European color
*described* — it told you the dress is blue, the apple red, the shadow cool. The
Fauves cut color loose from that job: a face can have a green stripe down it, a tree
trunk can be red, a sky can be pink, not because nature is that color but because the
picture *wants* it. Color becomes the subject, not the servant. It ran roughly three
years (1905–1908), had no manifesto and no membership card, was named by a hostile
critic, and then half its own painters walked away from it into Cubism. The shortest
of the great modern movements — and the one that made every later painter feel free
to use any color, anywhere.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| The "green stripe down Madame Matisse's face" is in *Woman with a Hat* | **⚠️ CONFLATION — the prompt mixes two paintings; correct before drafting** | The famous **vertical green stripe bisecting the face** is **a separate painting**: ***The Green Stripe (Portrait of Madame Matisse / La Raie verte)*, 1905, Statens Museum for Kunst (SMK), Copenhagen**, 40.5 × 32.5 cm. *Woman with a Hat* (SFMOMA) *also* has green on the face — but it's a green **smear** on the forehead/along the nose, not the iconic full vertical stripe. **Use *The Green Stripe* when you want "the green line down the face"; use *Woman with a Hat* for the 1905 scandal.** [W-WWH][W-GreenStripe][SMK] |
| Vauxcelles coined "les fauves" / "wild beasts" | **DOCUMENTED, with nuance** | He wrote ***« Donatello chez les fauves »*** ("Donatello among the wild beasts") in the supplement to ***Gil Blas*, 17 October 1905**, contrasting a Renaissance-style marble **bust by sculptor Albert Marque** sitting in the middle of Room VII with the "orgy of pure tones" on the walls. The word *fauves* stuck; "Fauvism" followed. In his 1939 book *Le Fauvisme* Vauxcelles said the comparison may have been sparked by **an unknown bystander** who said to Matisse "Donatello among the wild beasts" — so even the coinage has a legend layer. Treat the *Gil Blas* line as the documented origin; flag the bystander story as Vauxcelles's own later recollection. [W-Fauvism][Grok-Marque][FB-Salon] |
| The room was called "la cage aux fauves" | **DOCUMENTED** | The nickname for **Room VII (Salle VII)** of the 1905 Salon d'Automne — "the cage of wild beasts" — followed from Vauxcelles's quip and passed into use. [GrandPalais][W-Fauvism] |
| "A pot of paint flung in the public's face" was said about the Fauves | **PARTLY — attribute carefully** | The "pot of paint" insult is most famously **Ruskin on Whistler (1877)**. A *similar* phrase — *« un pot de peinture jeté à la face du public »* — is attributed to critic **Camille Mauclair** about the 1905 Salon. ⚠️ Mauclair attribution is repeated in secondary sources but I could not source it to a primary 1905 article; **frame as "critics reached for the old 'pot of paint flung in the public's face' insult" rather than pin it on one named critic** unless the fact-checker confirms. [W-Fauvism] |
| Fauvism had a founding manifesto | **FALSE — this is the `absent:true` case** | No manifesto, no founding meeting, no membership list, no signed statement. The group was named *by an enemy* and never named itself. The nearest document, Matisse's **"Notes of a Painter" (Dec 1908)**, appeared *as the movement was already dissolving* and is a **personal** statement, not a group platform. (See §4.) [W-Fauvism][Benjamin] |
| Vlaminck "loved Van Gogh more than his own father" | **DOCUMENTED as a reported remark** | Vlaminck's reaction to the **1901 Van Gogh retrospective** at Galerie Bernheim-Jeune (Paris), where he met Derain. Widely quoted; frame as his famous remark, not flat biography. [W-Fauvism] |
| Picasso painted *Les Demoiselles d'Avignon* to "out-shock" Matisse's *Bonheur de vivre* | **PLAUSIBLE / over-tidy — hedge** | A common art-historical reading: *Le Bonheur de vivre* (Salon des Indépendants, spring 1906) was the sensation, and Picasso's *Demoiselles* (1907) is often read as his answer. Real rivalry, real chronology — but "in order to out-do Matisse" is **interpretation, not a documented intent**. Say "many read the *Demoiselles* as Picasso's answer to it," not "Picasso set out to beat Matisse." [W-Bonheur] |
| Fauvism "ended" cleanly in 1908 | **APPROXIMATE — hedge the endpoint** | The intense group phase is **1905–1908**; the last group-ish showing trails to ~1908, and individual "Fauve" pictures appear a bit later (some sources stretch the label to ~1910). The *cause* of the dissolution is real: the **1907 Cézanne retrospective** + **Picasso's *Demoiselles*** pulled the avant-garde toward structure/Cubism, and Braque, Derain, Dufy, Friesz, Braque drifted off. Matisse alone carried the color project forward (but had moved past "Fauvism" as a label). [W-Fauvism][Met-Fauvism] |

---

## 1. THE MOVEMENT STORY (rise → peak → spread → afterlife)

### Rise — where it came from (1899–1905)

- **The Moreau studio.** Matisse, **Albert Marquet**, **Charles Camoin**, **Henri
  Manguin**, **Jean Puy** were fellow students under **Gustave Moreau** at the
  École des Beaux-Arts in the 1890s — a teacher unusually willing to let students
  paint freely. This is one of the two cores of the future group. [W-Fauvism][Britannica]
- **The Chatou core.** **Maurice de Vlaminck** and **André Derain** met in **1900**
  (a train derailment near Chatou, the riverside town west of Paris where they shared
  a studio) and painted together on the banks of the Seine. The **1901 Van Gogh
  retrospective at Bernheim-Jeune** electrified them — Vlaminck's "loved Van Gogh more
  than my own father" line dates from here, and it's where **Matisse met Derain**.
  [W-Fauvism]
- **The hinge: Matisse + Signac, summer 1904, Saint-Tropez.** Matisse spent the
  summer with **Paul Signac** (the surviving evangelist of Seurat's pointillism) and
  came back having tried **Divisionism** — *Luxe, calme et volupté* (1904) is painted
  in dabs of pure pigment. Fauvism is partly Matisse **breaking out of** pointillism:
  he keeps the pure, unmixed color but throws away the tidy dots for big, loose,
  emotional strokes. [W-Fauvism][Met-Fauvism]

### Peak — Collioure and the scandal (summer–autumn 1905)

- **The Collioure summer (1905) — the birthplace.** In **early summer 1905** Matisse
  invited **Derain** to join him in **Collioure**, a small fishing port on the
  Mediterranean near the Spanish border. Working side by side in the southern light
  for a few weeks, they pushed color past description entirely — squeezing **pure
  color straight from the tube**, letting the white canvas show through, painting the
  port in non-naturalistic hot color keyed to sensation, not fact. This is where
  Fauvism is actually *made*. Pictures: Matisse's ***Open Window, Collioure*** and
  ***Woman with a Hat***; Derain's Collioure harbor scenes. [Met-Collioure][W-Fauvism]
- **The Salon d'Automne, 1905 (18 Oct – 25 Nov, Grand Palais, Paris).** The new
  pictures went into **Room VII** alongside Vlaminck, Marquet, Manguin, Camoin,
  **Kees van Dongen**, and others. The room read as a wall of raw, clashing,
  unmixed color. Critic **Louis Vauxcelles** (*Gil Blas*, 17 Oct 1905) dubbed it
  **"Donatello chez les fauves"** — the name was born. Public reaction was hostile:
  the work was called infantile, mad, a "pot of paint." President Émile Loubet
  reportedly declined to formally inaugurate the Salon. [W-Fauvism][GrandPalais][FB-Salon]
- **The Steins buy in.** **Leo and Gertrude Stein** bought *Woman with a Hat* out of
  that very Salon for **500 francs** — a turning point for the demoralized Matisse and
  the start of the Steins' role as the avant-garde's key American patrons. [W-WWH]
- **1906 — the high-water canvas.** Matisse's ***Le Bonheur de vivre*** (*The Joy of
  Life*) at the **Salon des Indépendants, spring 1906** — a large arcadian scene of
  nudes in saturated, flattened color — was the movement's grandest statement (and the
  picture often read as the spark for Picasso's *Demoiselles*). [W-Bonheur]

### Spread — the wider band (1905–1907)

- The label pulled in more painters than the Collioure two: **Vlaminck** (the most
  violent colorist — pure cobalt, vermilion, chrome straight from the tube),
  **Marquet** (the most restrained, quickly back toward tonal harmony), **Raoul Dufy**
  and **Othon Friesz** (both from Le Havre, swept up after seeing Matisse), **Kees
  van Dongen** (Dutch; Fauve color on fashionable Parisian portraits and cabaret),
  **Georges Braque** (a *late* and brief Fauve, ~1906–07), **Georges Rouault**,
  **Louis Valtat**, **Béla Czóbel**. [W-Fauvism][Britannica]
- **Derain's London series, 1906.** Dealer **Ambroise Vollard** sent Derain to London
  to paint the Thames; he produced ~30 canvases (Charing Cross Bridge, the Pool of
  London, Big Ben) in flaming Fauve color — a Fauve answer to Monet's misty London.
  [NGA-Derain][W-Fauvism]

### Afterlife — why it died so fast (1907–1908)

- **Two events pulled the air out.** (1) The **1907 Cézanne retrospective** at the
  Salon d'Automne (the year after Cézanne's death) re-centered the avant-garde on
  **structure** — planes, geometry, the picture as architecture — the opposite of
  Fauvism's hot emotional color. (2) **Picasso's *Les Demoiselles d'Avignon* (1907)**
  opened the door to **Cubism**. [W-Fauvism][Met-Fauvism]
- **The Fauves scatter.** **Braque** spent **summer 1908** at L'Estaque shedding
  Fauve color and painting the cube-like landscapes that Matisse himself reportedly
  described as little *cubes* (to Vauxcelles — who then coined "Cubism") — Braque
  became Picasso's Cubist partner. **Derain** moved toward a darker, more structured,
  near-classical manner. **Dufy** and **Friesz** also took up Cézanne's structure.
  By ~1908 the group, as a group, was over. [W-Fauvism][Met-Fauvism]
- **Matisse alone carries it forward.** Matisse never went Cubist; he kept developing
  expressive flat color for the next 45 years (*Dance*, *The Red Studio*, the late
  cut-outs). Fauvism the *movement* ended ~1908, but its *idea* — color as autonomous,
  expressive, free — became one of the founding permissions of all modern art and fed
  straight into **German Expressionism**. [Met-Fauvism]

**Why it mattered (one paragraph for the writer):** Fauvism is the first 20th-century
movement and the first to be *made by scandal*. It's short, it's loose, it has no
theory — but it does one enormous thing once and for all: it severs color from
description. After 1905 a painter no longer owes the world its real colors. Every
later use of arbitrary, expressive, structural, or pure decorative color — German
Expressionism, abstraction, color-field — inherits that permission.

---

## 2. THE BREAK BLOCK (`whatChanged`) — color cut loose from description

The concrete change, stated plainly (not "revolutionary"):

> **Before:** color's job was to *describe* — to tell you the local color of things
> (the flesh is pink, the sea is blue-green) and to model light and shadow so objects
> look round and real. Even the Impressionists, who broke color into bright touches,
> were still chasing **the real light on real things**.
>
> **After (Fauvism):** color is **chosen for effect, not for accuracy**. A face gets a
> green stripe; a road runs orange; the shadow on a cheek is painted *vermilion*
> because the picture needs it there, not because any shadow is red. Three concrete
> moves: **(1) arbitrary/non-naturalistic color** (the green stripe down Madame
> Matisse's face); **(2) pure unmixed color straight from the tube**, often with bare
> canvas showing between strokes — no blending toward "realistic" hues; **(3) flatness**
> — the modeling that made things look round is abandoned, so the canvas reads as a
> bright patterned surface, not a window.

### Before/after pair (born-verified candidates)

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — color describes light** | **Claude Monet, *Regatta at Argenteuil*, c.1872** (Musée d'Orsay), OR any pre-1900 Impressionist canvas where color still chases real light — alternative: an academic Salon portrait where color models flesh smoothly (e.g. a Bouguereau or Cabanel already used in the era read). | Monet shows color already *liberated into bright touches* but still **describing the real light on real water** — the cleanest "color still does its day-job" foil. If the writer wants a starker (smooth, descriptive) foil, a Bouguereau/Cabanel academic nude is the maximal contrast. | **PD-US** (pre-1900). |
| **AFTER — color cut loose** | **Henri Matisse, *Woman with a Hat (Femme au chapeau)*, 1905** (SFMOMA) — already the movement card image; OR **Matisse, *The Green Stripe (Portrait of Madame Matisse)*, 1905** (SMK) for the literal "green line down the face"; OR **Matisse, *Open Window, Collioure*, 1905** (NGA). | Madame Matisse's face built of impossible greens/violets/oranges; clothes and background slabs of pure color. *The Green Stripe* is the textbook "arbitrary color" demonstration. | **Painting PD only in life+70 countries since 2025** (Matisse d.1954); **its pre-1930 photographic reproduction is PD-US.** App already inlines *Woman with a Hat* via `matisseHat`. See §4-rights. |

**Recommended pairing for the break block:** *Monet, Regatta at Argenteuil* (color still
describes the light on the water) **→** *Matisse, The Green Stripe* (color does whatever
it wants — a green stripe down a living face). The green-stripe picture is the single
most legible "this is the change" image. Fall back to *Woman with a Hat* (the card image)
if a self-host of *The Green Stripe* proves harder to source.

---

## 3. THE MANIFESTO BLOCK (`manifesto`) — ABSENT (the silence to tell)

**`absent: true`.** Fauvism had **no founding manifesto, no founding meeting, no
program, no membership list.** It was a **loose, short-lived group named by a hostile
critic** — the painters never called themselves "Fauves" until the insult was already
theirs. There is nothing to quote *as the group's statement* because the group never
made one. **That silence is the block's content.**

### The nearest thing — Matisse's "Notes of a Painter" (1908)

- **What it is:** a **personal** statement of Matisse's aims, written **in reply to
  critics** of the new painting — NOT a Fauve platform and NOT spoken for the group.
- **Real publication details (verified):** ***« Notes d'un peintre »***, by Henri
  Matisse, published in ***La Grande Revue*, Paris, 25 December 1908.** [Benjamin][TutArt]
- **The timing is the point:** December 1908 is *after* the 1907 Cézanne retrospective
  and Braque's Cubist summer of 1908 — i.e. the essay appears **as Fauvism is already
  dissolving**, and it reads more as Matisse-the-individual than Fauvism-the-movement.
- **Accurately-quoted lines (verify wording against a reputable translation at gate 1
  before publishing):**

  > "What I am after, above all, is expression."

  > "Composition is the art of arranging in a decorative manner the various elements
  > at the painter's disposal for the expression of his feelings."

  (Both are from the standard English translation of "Notes of a Painter"; the
  most-cited modern source translations are **Jack Flam, *Matisse on Art*** and
  **Alfred H. Barr Jr., *Matisse: His Art and His Public***.) ⚠️ The exact English
  wording varies by translator — gate the chosen wording against one named translation.
  [Flam][Benjamin]

- **Born-verified public source URL for the block's "source link":**
  the Roger Benjamin scholarly edition (*Matisse's "Notes of a painter": criticism,
  theory, and context, 1891–1908*) is on the **Internet Archive**:
  `https://archive.org/details/matissesnotesofp0000benj` — and **Jack Flam's
  *Matisse on Art*** is on the Internet Archive at
  `https://archive.org/details/matisseonart0000mati_h0y9`. Either is an acceptable
  born-verified link; **prefer the Flam volume** as the standard scholarly source for
  the translation. (Do NOT link a random blog PDF.) [Benjamin][Flam]

### How to write the absence
The block does **not** claim Fauvism had a manifesto. It tells the silence: *"The
Fauves never wrote a manifesto, never held a founding meeting, never even chose their
own name — a critic chose it for them, as an insult. The closest thing to a creed is
one essay, Matisse's 'Notes of a Painter,' and it landed in December 1908 just as the
movement was breaking apart — one painter's private aims, published too late to be a
flag."* Same template the Cubism and Post-Impressionism pages use for the absent case.

---

## 4. THE CANON (~8–12 key works) — with IMAGE-RIGHTS flags for the app gate

**IMAGE-RIGHTS RULE for this vertical (the load-bearing item):** the app inlines only
**US-public-domain** images. **Matisse and Derain both died in 1954**, so under the
*life+70* rule the **paintings themselves only entered the public domain (in France/EU
etc.) on 1 Jan 2025.** BUT the app's gate is **US copyright**, where the rule is
**published-before-1930 = US-PD** regardless of the author's death date. **Every core
Fauve painting (1905–1908) was published well before 1930, so its pre-1930
photographic reproduction is US-PD and inlineable** — which is exactly why the app
already uses *Woman with a Hat*. **Net: all the 1905–08 works below are OK to inline
as US-PD pre-1930 reproductions.** Flag any post-1929-first-published item separately
(none of the core canon below is). [PD-2025][Commons-Matisse][Artnet-PD]

Dimensions in cm (museum record) + ft/in conversion.

### 1. Matisse — *Woman with a Hat (Femme au chapeau)*, 1905 — THE CARD IMAGE
- **Museum:** SFMOMA, San Francisco (bequest of Elise S. Haas, 1991, acc. 91.161).
- **Dimensions:** 80.6 × 59.7 cm = **~2 ft 7¾ in × 1 ft 11½ in**. Oil on canvas.
- **Blurb fact:** The 1905 Salon scandal-piece; portrait of his wife **Amélie**, her
  face built of green, violet and orange. **Leo & Gertrude Stein** bought it from the
  Salon for **500 francs**. [W-WWH]
- **Rights:** PD-US (pre-1930 reproduction). Already inlined as `ART_IMG.matisseHat`.
- **Commons candidate:** `Matisse-Woman-with-a-Hat.jpg` (the file the app already uses).

### 2. Matisse — *The Green Stripe (Portrait of Madame Matisse / La Raie verte)*, 1905
- **Museum:** Statens Museum for Kunst (SMK), Copenhagen.
- **Dimensions:** 40.5 × 32.5 cm = **~1 ft 4 in × 1 ft 1 in**. Oil on canvas.
- **Blurb fact:** The textbook "arbitrary color" picture — a **vertical green stripe
  runs down the center of his wife's face**, dividing a cool side from a warm side.
  The single most legible image for the break block. [W-GreenStripe][SMK]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Henri Matisse The green stripe` / `Raie verte`.

### 3. Matisse — *Open Window, Collioure*, 1905
- **Museum:** National Gallery of Art, Washington (Whitney gift, 1998).
- **Dimensions:** 55.3 × 46 cm = **~1 ft 9¾ in × 1 ft 6 in**. Oil on canvas.
- **Blurb fact:** Painted at Collioure that decisive summer; a window onto pink and
  turquoise boats — the whole picture is patches of pure color, no modeling. A
  career-long Matisse motif (the open window) begins here. [Smarthistory-OW][NGA-OW]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Matisse Open Window Collioure 1905`.

### 4. Matisse — *Luxe, calme et volupté*, 1904
- **Museum:** Musée d'Orsay, Paris.
- **Dimensions:** 98.5 × 118.5 cm = **~3 ft 2¾ in × 3 ft 10¾ in**. Oil on canvas.
- **Blurb fact:** The **proto-Fauve** picture — painted after the 1904 Saint-Tropez
  summer with Signac, in pointillist dabs of pure color. Title from Baudelaire. Shows
  Matisse *passing through* Neo-Impressionism on the way to Fauvism. [W-Fauvism]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Matisse Luxe calme et volupté`.

### 5. Matisse — *Le Bonheur de vivre (The Joy of Life)*, 1905–06
- **Museum:** Barnes Foundation, Philadelphia (BF719).
- **Dimensions:** 175 × 241 cm = **~5 ft 9 in × 7 ft 11 in**. Oil on canvas.
- **Blurb fact:** The movement's grandest statement — an arcadian field of nudes in
  flat, saturated, clashing color, shown at the **Salon des Indépendants, spring
  1906**. Widely read as the canvas that goaded Picasso toward *Les Demoiselles
  d'Avignon* (hedge: read-as, not proven-intent). [W-Bonheur][Barnes]
- **Rights:** PD-US (pre-1930 reproduction). NOTE the Barnes restricts *its own*
  photography — use a Commons PD reproduction, not a Barnes-licensed image.
- **Commons candidate:** search `Matisse Bonheur de vivre`.

### 6. Matisse — *Blue Nude (Souvenir de Biskra)*, 1907
- **Museum:** Baltimore Museum of Art (Cone Collection).
- **Dimensions:** 92.1 × 140.4 cm = **~3 ft 0¼ in × 4 ft 7¼ in**. Oil on canvas.
- **Blurb fact:** A reclining nude in harsh blue, distorted and angular — late-Fauve
  Matisse already pushing past pretty color toward something rougher; scandalized the
  1907 Salon des Indépendants and later traveled in the 1913 Armory Show (where it was
  burned in effigy in Chicago). [W-Fauvism]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Matisse Blue Nude Souvenir de Biskra`.

### 7. Derain — *Charing Cross Bridge, London*, 1906
- **Museum:** National Gallery of Art, Washington (a version; others at MoMA, Orsay).
- **Dimensions:** 80.3 × 100.3 cm = **~2 ft 7½ in × 3 ft 3½ in**. Oil on canvas.
- **Blurb fact:** From the ~30-canvas London series Vollard commissioned; the Thames
  in flaming orange, pink and green — Fauvism's answer to Monet's grey London. [NGA-Derain]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Derain Charing Cross Bridge`.

### 8. Derain — *The Turning Road, L'Estaque (Route tournante à L'Estaque)*, 1906
- **Museum:** Museum of Fine Arts, Houston.
- **Dimensions:** 129.5 × 194.9 cm = **~4 ft 3 in × 6 ft 4¾ in**. Oil on canvas.
- **Blurb fact:** A southern road exploding in red, green and yellow — every bit as
  audacious as *Bonheur de vivre*, painted the same year; the maximal Derain Fauve. [MFAH-Derain]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Derain Turning Road L'Estaque`.

### 9. Vlaminck — *Restaurant de la Machine at Bougival (Le Restaurant de la Machine à Bougival)*, c.1905
- **Museum:** Musée d'Orsay, Paris.
- **Dimensions:** 60 × 81.5 cm = **~1 ft 11½ in × 2 ft 8 in**. Oil on canvas.
- **Blurb fact:** A Seine-side town painted in pure, rhythmic, tube-fresh color;
  shown at the 1905 Salon among the future Fauves. Vlaminck was the most violent
  colorist — and proudly **self-taught**, hostile to museums. [Vlaminck-Orsay][W-Fauvism]
- **Rights:** PD-US (pre-1930 reproduction).
- **Commons candidate:** search `Vlaminck Restaurant de la Machine Bougival`.
- **Note:** **Vlaminck d.1958** → painting only EU-PD from 2029; **its pre-1930
  reproduction is still US-PD** (the gate that matters). Same logic, later death.

### 10. Dufy — *Street Decked with Flags, Le Havre (La Rue pavoisée)*, 1906
- **Museum:** Centre Pompidou (Musée national d'art moderne), Paris.
- **Dimensions:** ~81 × 65 cm = **~2 ft 8 in × 2 ft 1½ in**. Oil on canvas.
- **Blurb fact:** A street of French tricolor flags dissolved into bright Fauve
  patches — Dufy's signature buoyant, decorative take on the style (the "carefree
  ornamental" Fauve). [W-Fauvism][Britannica]
- **Rights:** **Dufy d.1953** → EU-PD since 2024; **pre-1930 reproduction is US-PD.**
- **Commons candidate:** search `Dufy Rue pavoisée 1906`.

### 11. Kees van Dongen — *(a 1905–08 Fauve portrait / cabaret scene)*, e.g. *Modjesko, Soprano Singer*, 1908
- **Museum:** *Modjesko, Soprano Singer* (1908) is at MoMA, New York.
- **Blurb fact:** Van Dongen brought Fauve color to fashionable Parisian portraits,
  dancers and cabaret performers — the social/glamour wing of the movement. **Dutch**,
  and a member of Die Brücke for a time, linking the French and German strands. [W-Fauvism]
- **Rights:** **van Dongen d.1968** → NOT EU-PD until 2039; **a pre-1930 reproduction
  (e.g. of a 1908 work) is US-PD**. ⚠️ Verify the *specific image's* US-PD status
  (pre-1930 first publication) at gate 6 before inlining — van Dongen is the riskiest
  rights case in the row because of the 1968 death.
- **Commons candidate:** verify case-by-case.

### 12. Marquet — *(a 1905–06 Fauve view)*, e.g. *The Beach at Sainte-Adresse* / a Paris quay, c.1906
- **Blurb fact:** Marquet was a Fauve only briefly and the most restrained of them —
  he kept the bright key for a season, then settled into calm, tonal harbor and river
  views for the rest of his life. Good as the "Fauve who stepped back" example. [Britannica]
- **Rights:** **Marquet d.1947** → EU-PD since 2018; **pre-1930 reproduction US-PD.**
- **Commons candidate:** verify a specific 1905–06 title at gate 6.

**Rights summary line for the coordinator:** *Every core Fauve canvas (1905–08) is
inlineable as a pre-1930 US-PD reproduction. The death-date life+70 status only
matters for EU reuse, not the app's US gate. The one to double-check per-image is
van Dongen (d.1968).*

---

## 5. LINEAGE (the lineage block)

### Parents (what Fauvism grew out of)
- **Vincent van Gogh** (d.1890) — **emotional, arbitrary color**. The 1901 Van Gogh
  retrospective at Bernheim-Jeune is the literal spark for Vlaminck & Derain. Van Gogh:
  "I use color more arbitrarily in order to express myself forcibly." [W-Fauvism]
- **Paul Gauguin** (d.1903) — **flat areas of saturated, symbolic color** (Synthetism,
  Tahiti); especially shaped Derain. [W-Fauvism]
- **Georges Seurat / Neo-Impressionism** (Divisionism/pointillism) — **pure unmixed
  pigment**, reached the Fauves through **Signac** (Matisse's 1904 Saint-Tropez
  summer; *Luxe, calme et volupté*). The Fauves keep the pure color, drop the dots. [W-Fauvism]
- **Paul Cézanne** (d.1906) — present as **structure**; matters most as the force that
  *ends* Fauvism (the 1907 retrospective). [Met-Fauvism]
- (Deeper root: **Delacroix's** Romantic color and the long French argument about
  color vs. drawing — terse callback only.)

### Children (what Fauvism led to)
- **Cubism** (Picasso & Braque, 1907–14) — direct: **Braque was a Fauve** who walked
  straight into Cubism in 1908; and Matisse's word "cubes" (to Vauxcelles, of Braque's
  L'Estaque pictures) is one origin of the *name* "Cubism." [W-Fauvism]
- **German Expressionism** — **Die Brücke** (Dresden, founded **7 June 1905**:
  Kirchner, Heckel, Schmidt-Rottluff, Bleyl) and later **Der Blaue Reiter** (Munich,
  1911) took up Fauve/Van Gogh/Gauguin color as raw emotional expression. Van Dongen
  literally bridged the two (briefly a Brücke member). [W-Fauvism]
- **The road to abstraction** — color cut free from description is one of the
  preconditions for Kandinsky's move to non-representation (*Concerning the Spiritual
  in Art*, 1911). [Met-Fauvism]
- **Matisse's own 45-year career** — *Dance*, *The Red Studio*, the cut-outs — the
  longest single line out of Fauvism, carried by one painter.

---

## 6. ARTISTS ROW (~5–6) — one-line role + portrait-photo candidate

For the artists row. Portrait *photographs* of these men: most period photos are
1900s–1930s; pre-1930 photos are US-PD, later ones need checking. **Where no clean
born-verified PD portrait exists, use the gradient fallback** (the row already uses
palette gradients).

1. **Henri Matisse** (1869–1954) — **the leader; color set free.** The theorist-in-
   spite-of-himself (*Notes of a Painter*); the only Fauve who kept the project for
   life. **Portrait photo:** Carl Van Vechten's 1933 portrait is **PD-US** (LoC, "no
   known restrictions"); Commons `File:Henri Matisse photo taken by Carl Van Vechten.jpg`.
   Earlier 1900s studio photos exist on Commons (verify PD at gate 6). [LoC-VanVechten]
2. **André Derain** (1880–1954) — **co-leader; the Collioure & London partner.** The
   most experimental early on, the most classicizing later. Portrait: period photos on
   Commons (verify PD at gate 6); else gradient.
3. **Maurice de Vlaminck** (1876–1958) — **the wild man; pure color from the tube,
   self-taught, anti-museum.** Portrait: period photos on Commons (verify); else gradient.
4. **Albert Marquet** (1875–1947) — **the restrained one** who passed through Fauvism
   and settled into calm tonal harbor views. Portrait: verify; else gradient.
5. **Raoul Dufy** (1877–1953) — **the decorative, buoyant Fauve** (flags, regattas,
   sunlit streets). Portrait: verify; else gradient.
6. **Kees van Dongen** (1877–1968) — **Dutch; Fauve color on Parisian glamour** —
   society portraits, dancers, cabaret; a human bridge to German Expressionism.
   ⚠️ d.1968 → portrait-photo and works both need careful US-PD checking. Else gradient.

(Optional 7th if room: **Othon Friesz**, 1879–1949, Le Havre — found Fauve color "a
relief" and then went back toward Cézanne's structure.)

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **Die Brücke / German Expressionism — Dresden, founded 7 June 1905.** The *same
   year* as the Paris scandal, four German architecture students (Kirchner, Heckel,
   Schmidt-Rottluff, Bleyl) form Die Brücke and start pushing **the same idea** —
   raw, anti-naturalistic, emotional color and crude force — independently. The
   German parallel to Fauvism, lit by the same fuses (Van Gogh, Gauguin). [W-Fauvism]
2. **Cubism brewing — Paris, 1906–08.** While the Fauves peak, **Picasso** is
   building toward *Les Demoiselles d'Avignon* (1907), and the **1907 Cézanne
   retrospective** is about to swing the avant-garde from *color* to *structure* —
   the very shift that kills Fauvism and births Cubism. The two movements overlap by
   only a year or two. [Met-Fauvism]
3. **The dealers & collectors that made it possible — Paris, 1905–07.** **Ambroise
   Vollard** (Derain's London commission), and the American **Steins** (Leo & Gertrude,
   then Michael & Sarah) buying Matisse out of the 1905 Salon — the patronage network
   that turned a scandal into a market. Sergei Shchukin (Moscow) soon follows for
   Matisse. [W-WWH][W-Fauvism]

---

## 8. NESTING — what the ERA read already covers (go DEEPER, don't duplicate)

The Modern **era read** (`era-narratives.tsx`) already gives Fauvism a thumbnail:
*"At the Salon d'Automne of 1905 a room of canvases by Henri Matisse and his friends…
A critic called them les fauves — the wild beasts. Fauvism barely lasted three years…"*
— with **Matisse's *Dance (I)*, 1909, MoMA** as the era image. The **movement read
must go DEEPER**: the Moreau-studio + Chatou pre-history, the Collioure summer as the
actual birthplace, the Marque-sculpture origin of the name, the full cast beyond
Matisse/Derain, the rights story, and the precise mechanism of the 1907–08 death.
**Don't re-narrate the era thumbnail; reference it tersely.** Also: the **Cubism /
Demoiselles work-reads** already cover Braque-the-Fauve-turned-Cubist and the
*Demoiselles* in depth — **reference, don't re-tell.** (Nesting gate 7.)

---

## 9. SHAPE (suggested chapters — author may improve)

1. **Color's old job** — for centuries color *described*; even the Impressionists
   chased real light. Set up what's about to break. (Terse; the era read primed this.)
2. **Two studios, one fuse** — the Moreau circle (Matisse, Marquet, Manguin) + the
   Chatou pair (Derain, Vlaminck); the 1901 Van Gogh show; Matisse's 1904 detour
   through Signac's dots.
3. **Collioure, summer 1905** — Matisse + Derain in the southern light; pure color
   from the tube; the movement is *made* before it's named.
4. **The cage of wild beasts** — the 1905 Salon d'Automne, Room VII, the Marque bust,
   Vauxcelles's "Donatello chez les fauves," the scandal, the Steins' rescue purchase.
5. **The wild band** — Vlaminck's violence, Marquet's restraint, Dufy & Friesz from
   Le Havre, van Dongen's glamour, Derain's flaming London; *Le Bonheur de vivre* as
   the high-water mark.
6. **The air goes out (1907–08)** — Cézanne's retrospective + the *Demoiselles* swing
   everyone toward structure; Braque, Derain, Dufy walk into Cubism/Cézanne; Matisse's
   *Notes of a Painter* (1908) arrives as a personal coda, not a flag; the afterlife —
   Matisse alone, German Expressionism, the permission color never gives back.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House dry wit dialled up a notch; comparisons welcome; inline-define every term (the
Salon d'Automne, the Salon des Indépendants, Divisionism/pointillism, Synthetism,
"local color," *fauves*, retrospective, manifesto) — reader has zero prior knowledge,
though some met these in the era/Post-Imp reads (terse callback). **Make the reader
SEE the color** — the green stripe, the orange road, the pink-and-turquoise harbor.
Framing: the Fauves weren't a club with a creed — say so; the name was an insult they
kept; Matisse and Derain led but the band was real and various; don't flatten Vlaminck
into "the angry one" or Marquet into "the quiet one." Storytelling first; accuracy a
hard floor; no invented quotes — the Vauxcelles line and the *Notes of a Painter* lines
are the only quotes, both gated.

---

## Source key (for the writer & fact-checker)

- **[W-Fauvism]** Wikipedia, *Fauvism*.
- **[W-WWH]** Wikipedia, *Woman with a Hat*.
- **[W-GreenStripe]** Wikipedia, *The Green Stripe*.
- **[W-Bonheur]** Wikipedia, *Le bonheur de vivre*.
- **[SMK]** Statens Museum for Kunst (smk.dk), *Portrait of Madame Matisse. The Green
  Line, 1905*.
- **[Met-Fauvism]** The Metropolitan Museum of Art, essay *Fauvism* (metmuseum.org/essays/fauvism).
- **[Met-Collioure]** The Metropolitan Museum of Art, *Vertigo of Color: Matisse,
  Derain, and the Origins of Fauvism* exhibition (2023–24) + "Collioure in Color."
- **[MFAH-Derain]** Museum of Fine Arts, Houston, collection record, Derain, *The
  Turning Road, L'Estaque* (emuseum.mfah.org/objects/1549).
- **[NGA-Derain]** National Gallery of Art, Washington, *Charing Cross Bridge, London*.
- **[NGA-OW]** National Gallery of Art, Washington, *Open Window, Collioure* (nga.gov/artworks/106384).
- **[Smarthistory-OW]** Smarthistory, *Henri Matisse, Open Window, Collioure*.
- **[Vlaminck-Orsay]** Musée d'Orsay / Gallery Intell, *Restaurant de la Machine at Bougival*.
- **[Barnes]** Barnes Foundation collection online, *Le Bonheur de vivre* (BF719).
- **[GrandPalais]** Grand Palais, *Le scandale du Salon d'Automne de 1905* / *Le fauvisme*.
- **[FB-Salon]** Salon d'Automne official page (re: 18 Oct 1905, Loubet, Room VII,
  the Marque bust, Vauxcelles quote) — corroborating, secondary.
- **[Grok-Marque]** Grokipedia, *Albert Marque* / *Salon d'Automne* (re: the two
  Renaissance-style busts in Room VII; corroborating only).
- **[Benjamin]** Roger Benjamin, *Matisse's "Notes of a painter": criticism, theory,
  and context, 1891–1908* — Internet Archive `matissesnotesofp0000benj`.
- **[Flam]** Jack Flam, *Matisse on Art* — Internet Archive `matisseonart0000mati_h0y9`
  (standard English translation of "Notes of a Painter").
- **[TutArt]** Tutt'Art / secondary (re: La Grande Revue, 25 Dec 1908 publication date)
  — corroborating; the date is also in Benjamin.
- **[Britannica]** Encyclopædia Britannica, *Fauvism* (re: the Moreau circle; Dufy,
  Friesz, Marquet, van Dongen one-line roles).
- **[LoC-VanVechten]** Library of Congress, Carl Van Vechten portrait of Henri Matisse,
  1933 ("no known restrictions"); Commons `Henri Matisse photo taken by Carl Van Vechten.jpg`.
- **[PD-2025]** Hyperallergic / Artnet / ARTnews (Jan 2025): Matisse, Derain (d.1954)
  works enter EU/life+70 public domain on 1 Jan 2025 — with the US "pre-1930 = PD"
  caveat noted.
- **[Artnet-PD]** ARTnews, "Works by Matisse, Frida Kahlo… Are Entering the Public
  Domain, With Some Caveats."
- **[Commons-Matisse]** Wikimedia Commons, *Category:Henri Matisse* (PD-US tags on
  pre-1931-published reproductions).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Fauvism = color cut loose from description** (~1905–1908): non-naturalistic,
   pure-from-the-tube, flat, expressive color. Made at **Collioure, summer 1905**
   (Matisse + Derain); named by a hostile critic at the **1905 Salon d'Automne**.
2. **The name:** Vauxcelles, *Gil Blas*, 17 Oct 1905 — **"Donatello chez les fauves"**
   — contrasting a Renaissance **bust by Albert Marque** in Room VII ("la cage aux
   fauves") with the wild color around it.
3. **Why it died fast:** the **1907 Cézanne retrospective** + **Picasso's *Demoiselles*
   (1907)** swung the avant-garde to *structure*; **Braque, Derain, Dufy** walked into
   Cubism/Cézanne by **1908**. Matisse alone carried color forward.
4. **Manifesto = ABSENT (`absent:true`)** — no manifesto, no meeting, no self-chosen
   name. Nearest thing: Matisse's **"Notes of a Painter," *La Grande Revue*, 25 Dec
   1908** — a *personal* statement, published *as the movement dissolved*. Source link:
   Flam, *Matisse on Art* (Internet Archive). Quotes gated; "What I am after, above
   all, is expression."
5. **Image rights (the app gate):** Matisse & Derain **d.1954** → paintings only EU-PD
   since **2025**, BUT the app's gate is **US copyright = published-pre-1930 = PD**, so
   **every 1905–08 Fauve canvas is inlineable as a pre-1930 US-PD reproduction**
   (which is why the app already uses *Woman with a Hat*). **Watch-item: van Dongen
   (d.1968)** — verify the specific image's pre-1930 publication before inlining.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **Prompt conflation to fix:** the "green stripe down Madame Matisse's face" is
  ***The Green Stripe* (SMK Copenhagen), 1905**, NOT *Woman with a Hat*. Use the right
  picture for the right claim. *The Green Stripe* is the best break-block "after" image.
- ⚠️ **"Pot of paint flung in the public's face"** is most securely **Ruskin on
  Whistler (1877)**; the 1905-Mauclair version is repeated in secondary sources but I
  couldn't pin it to a primary article — attribute loosely or let gate 1 confirm.
- ⚠️ ***Bonheur de vivre* → *Demoiselles* "to out-shock Matisse"** is a popular reading,
  not documented intent — phrase as "read as," not "Picasso set out to beat Matisse."
- ⚠️ **Notes of a Painter quotes** — exact English wording varies by translator; gate
  the chosen wording against one named translation (Flam or Barr).
