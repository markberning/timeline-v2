# Fact pack — FUTURISM (kind: MOVEMENT, Modern era, c.1909–1918, Italy)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces
to a sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-18; the
fact-checker gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Futurism movement** read: `/art/mod/futu` → `…/s/{sectionId}`. (Coordinator
  registers the `futu` const in `src/lib/art-content.ts`: range `1909–1918`, Modern
  era. Card-image candidate = Boccioni, *Unique Forms of Continuity in Space* (the
  movement's single most iconic image — but it is a SCULPTURE photo; if the row wants a
  painting card, use Boccioni *The City Rises* or Balla *Dynamism of a Dog on a Leash*.
  See §4 for the card-rights note: a photo of the **posthumous bronze** is a rights
  edge case — prefer a photo of the **1913 plaster** or a paintings card.)
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Movement-page metadata (the break block, the
  manifesto block, the canon list, lineage, artists row, parallels) the coordinator
  assembles from this pack; per-work DEEP reads come in a later pass.

## Throughline (the one idea)
Futurism is the moment a movement decides to **worship the machine and burn the
past**. Where Fauvism freed color and Cubism shattered form by quiet studio
experiment, Futurism was **born as a press release**: a poet, Filippo Tommaso
Marinetti, bought the front page of a Paris newspaper in 1909 and announced a movement
that did not yet have a single painting. It was the **first movement built manifesto-
first** — the words came before the art. Its subject was modern life at full throttle:
the car, the tram, the electric light, the crowd, the factory, **speed itself**. Its
program was to demolish the museums, scorn the past, and (in its ugliest line)
glorify war as "the world's only hygiene." That last part is not a footnote: Marinetti
went on to **co-write the founding manifesto of Italian Fascism**, and Futurism's
romance with violence, machines and national rebirth fed straight into Mussolini's
movement. So Futurism is two things at once and the read must hold both: a genuinely
electrifying art revolution (it taught painting to show *motion*), and a movement with
a fascism problem at its core. It ran hot from 1909, peaked around 1911–1915, and was
gutted by the very war it cheered for — its best painter, Boccioni, died in it.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| Futurism was "born as a manifesto" / the first manifesto-born movement | **DOCUMENTED — but state it precisely** | Marinetti's *Founding and Manifesto of Futurism* was published on the **front page of *Le Figaro* (Paris), 20 February 1909** — before there was a Futurist *painting* movement at all (the painters' manifestos came in **1910**). It is the canonical "the words came first" case, the opposite of Fauvism's silence. Hedge the superlative: it is widely called the first art movement *launched* by manifesto / the prototype of the 20th-c. manifesto avant-garde — say "the movement that made the manifesto the avant-garde's weapon," not a flat "the first manifesto ever." [W-Manifesto][Guggenheim][MoMA-Futurism] |
| The manifesto first appeared in *Le Figaro* | **MOSTLY — with an earlier-Italian nuance to keep honest** | The famous, complete, front-page launch is *Le Figaro*, **20 Feb 1909**. But the text had **already appeared in Italian newspapers first** — the *Gazzetta dell'Emilia* (Bologna) on **5 February 1909**, and as a preface/leaflet around January 1909. Frame the *Le Figaro* printing as the **launch that mattered** (Paris was the world art capital; that's why Marinetti chose it), while noting it wasn't literally the first ink. [W-Manifesto][HistInfo] |
| The manifesto says a racing car is more beautiful than a Greek statue | **DOCUMENTED (point 4)** | "…a roaring motorcar, which seems to race on like machine-gun fire, is more beautiful than the **Winged Victory of Samothrace**." (Doug Thompson tr., in Berghaus ed.) Verify exact wording against a named translation at gate 1. [BoT-Manifesto][Berghaus] |
| The manifesto glorifies war as "the world's only hygiene" | **DOCUMENTED (point 9) — central honesty axis** | Point 9: "We wish to glorify war — **the sole cleanser of the world** — militarism, patriotism, the destructive act of the libertarian, beautiful ideas worth dying for, and **scorn for women**." The famous English form is "war, the world's **only hygiene**" (the standard R.W. Flint translation renders *sola igiene del mondo* that way). Do NOT soften this. [BoT-Manifesto][Berghaus][W-Manifesto] |
| The manifesto is misogynist ("scorn for woman") | **DOCUMENTED — and answered by a woman, also documented** | Point 9 includes **"scorn for women" / "contempt for woman"** (*il disprezzo della donna*) and point 10 says "fight against moralism, **feminism**…" In **1912 Valentine de Saint-Point** published the **"Manifesto of the Futurist Woman" (Manifeste de la femme futuriste), explicitly "An Answer to F.T. Marinetti."** Don't flatten: she didn't simply rebut him, she out-radicalized him (see §"honesty"). Marinetti later half-walked-back the line as aimed at the *sentimental-muse* cliché, not literal women — note that as **his later gloss**, not exoneration. [W-SaintPoint][LoC-SaintPoint][W-Manifesto] |
| Marinetti helped found Italian Fascism | **DOCUMENTED — the Lost-Cause-analog honesty axis** | Marinetti **co-authored the Fascist Manifesto** (with Alceste De Ambris), published in *Il Popolo d'Italia*, **6 June 1919**, the platform of Mussolini's **Fasci Italiani di Combattimento** (founded Milan, Piazza San Sepolcro, 23 March 1919, which Marinetti attended). He was a genuine founding-era fascist. **But** he also briefly **broke with the fascists in 1920** (walked out of the May 1920 congress calling them "reactionary"), then **reconciled** and served the regime for the rest of his life (Royal Academy 1929; died 1944 still supporting Mussolini's last republic). Tell the full, ugly, non-flat arc. [W-FascistManifesto][W-Marinetti][BoT-Timeline] |
| Boccioni died falling off a horse during WWI | **DOCUMENTED — and a brutal irony** | On **16 August 1916**, near Verona, during a cavalry exercise, Boccioni's horse bolted; he was thrown and dragged, and died the next day, aged 33. He had **volunteered** for the war Futurism glorified. Cruel coincidence: he'd named the horse "Vermiglia" after the red horse in *The City Rises*. The "died gloriously in battle" framing is wrong — it was a **training accident**, not combat. [W-Boccioni][IAS-Boccioni] |
| *Unique Forms of Continuity in Space* is a 1913 bronze | **HALF-TRUE — get the casting right** | Boccioni made it in **1913 as a plaster** (the original 1913 plaster survives at **MAC USP, São Paulo**). It was **never cast in bronze in his lifetime**. All the famous bronzes are **posthumous**: casts in **1931** (one at MoMA), 1933/34 (Marinetti; Museo del Novecento, Milan), 1949–50 (his widow Benedetta), and later. So "Boccioni's 1913 bronze" is shorthand — the sculpture is 1913, the bronze you've seen is a posthumous cast. This matters for image rights (§4). [W-UniqueForms][Met-Boccioni100][MoMA-UF] |
| Futurism just "ended" with the war | **APPROXIMATE — hedge** | The first, greatest phase (the painters' Futurism) is **1909–1918**; WWI gutted it — **Boccioni d.1916, Sant'Elia d.1916** (both that year), Carrà and Severini drifted off, the "heroic" group dissolved by ~1918. But Futurism **did not stop**: a "second Futurism" (Marinetti's *aeropittura*, aerial painting) ran through the 1920s–30s, fused to the Fascist regime, until Marinetti's death in 1944. The v1 movement read covers the **first phase** (1909–1918); note the fascist second phase honestly but don't re-narrate it in full. [W-Futurism][W-Marinetti] |

---

## 1. THE MOVEMENT STORY (rise → peak → spread → afterlife)

### Rise — the manifesto comes first (1909–1910)

- **The launch (20 Feb 1909).** Marinetti, a wealthy, Paris-educated Italian poet
  (born Alexandria, Egypt, 1876), published the ***Founding and Manifesto of
  Futurism*** on the **front page of *Le Figaro*, Paris, 20 February 1909.** It is a
  two-part document: a swaggering prose preamble (a midnight car crash into a ditch,
  reborn) followed by **eleven numbered points**. The text had already run in Italian
  papers (*Gazzetta dell'Emilia*, Bologna, 5 Feb 1909) but the Paris front page is the
  launch that made it world news. Crucially, **there was as yet no Futurist
  painting** — Marinetti announced a movement and *then* recruited the artists.
  [W-Manifesto][Guggenheim][HistInfo]
- **The painters sign on (1910).** Marinetti gathered young Milan and Rome painters:
  **Umberto Boccioni, Carlo Carrà, Luigi Russolo, Giacomo Balla, Gino Severini.**
  They issued the ***Manifesto of the Futurist Painters*** (**11 February 1910**) and
  then the ***Technical Manifesto of Futurist Painting*** (Milan, **11 April 1910**,
  largely written by Boccioni) — the first real *aesthetic* program: paint **"the
  dynamic sensation,"** show motion and "universal dynamism," reject the nude and the
  "bituminous tints" of the old masters. [W-TechManifesto][391-Painters][LoC-Painters]
- **The Italian roots.** These were not Cubists yet. Their starting point was
  **Divisionism** — the Italian descendant of Seurat's pointillism (painting in
  separated dots/strokes of pure color), via **Gaetano Previati, Giovanni Segantini,
  Pellizza da Volpedo**; **Balla** taught the younger ones the technique. Early
  Futurist canvases shimmer with Divisionist strokes before they fracture. [Mapfre-Div][ArtStory]

### Peak — Futurism learns to fracture (1911–1915)

- **The Paris trip (autumn 1911).** **Severini**, who lived in Paris, brought
  **Boccioni, Carrà and Russolo** to the city and introduced them to **Picasso and
  Braque** and Cubism. The encounter transformed them: they grabbed Cubism's
  **fractured, faceted planes** — but, they insisted, to do something Cubism refused
  to do, **show movement and the rush of modern life**, not a static studio still
  life. (They thought Cubism too motionless.) Several reworked their canvases after
  Paris. [ArtStory][MetEssay-Boccioni]
- **The Bernheim-Jeune show (Feb 1912).** The **First Exhibition of Futurist
  Painting** opened at the **Bernheim-Jeune gallery, Paris, February 1912**, then
  toured (London, Berlin, Brussels and on). It announced Futurism to the international
  avant-garde — and provoked the charge, half-fair, that they were Cubist imitators.
  [Pompidou-BJ][ArtStory]
- **The masterpiece years.** This is when the canon lands: Boccioni's ***The City
  Rises*** (1910), the ***States of Mind*** triptych (1911), ***Unique Forms of
  Continuity in Space*** (1913, the great striding bronze-to-be); Balla's ***Dynamism
  of a Dog on a Leash*** (1912); Severini's ***Dynamic Hieroglyphic of the Bal
  Tabarin*** (1912); Carrà's ***Funeral of the Anarchist Galli*** (1910–11). The
  subjects: the building site, the train station, the night club, the riot, the
  speeding body. [MoMA-CityRises][MoMA-StatesI][MoMA-Severini][MoMA-Carra]
- **It spreads past painting.** Futurism became a **total program**: **Russolo's**
  ***The Art of Noises*** manifesto (1913) and his **intonarumori** ("noise
  intoners," a family of cranked noise machines, ~1913) launched **noise music**;
  **Antonio Sant'Elia's** ***Manifesto of Futurist Architecture*** and his *Città
  Nuova* ("New City") drawings (1914) imagined a multi-level machine metropolis;
  there were Futurist manifestos for sculpture, photography, theatre, cooking, even
  clothing. [W-ArtOfNoises][W-Intonarumori][W-SantElia]

### Spread — the international fuse (1912–1914)

- The Bernheim-Jeune show's tour, plus the loud manifestos, made Futurism a **global
  brand** of the avant-garde. It directly lit **Vorticism** in London (Wyndham Lewis's
  *BLAST*, 1914) and fed the energy of **Russian Cubo-Futurism** (Malevich,
  Mayakovsky) and, soon, **Dada** and **Constructivism**. Futurism's real export was
  less a style than a *method*: the manifesto, the provocation, the embrace of the
  machine. [ArtStory][W-Futurism]

### Afterlife — the war it wanted (1915–1918 and beyond)

- **Interventionism.** The Futurists **agitated loudly for Italy to enter WWI** —
  consistent with point 9. Many **volunteered**. The war they cheered then **destroyed
  the movement**: **Boccioni died** (cavalry accident, **Aug 1916**) and **Sant'Elia
  was killed in action** (Monte Ermada, **Oct 1916**) the same year. The heroic group
  did not survive the peace; by ~1918 **Carrà** had moved to a still, classicizing
  *Metaphysical* manner (with de Chirico) and **Severini** toward a more classical
  Cubism. [W-Boccioni][W-SantElia][W-Futurism]
- **Second Futurism + Fascism.** Marinetti rebuilt a "second Futurism" in the 1920s–
  30s — chiefly **aeropittura** (aerial painting), which he called "the daughter of
  Fascist aviation and Italian Futurism" — and bound it ever tighter to **Mussolini's
  regime** (Royal Academy, 1929; Futurist art at fascist exhibitions). Marinetti died
  in 1944 still serving the regime. The v1 movement read should **name this honestly**
  but keep its main story on the 1909–1918 phase. [W-Marinetti][W-Futurism]

**Why it mattered (one paragraph for the writer):** Futurism taught Western art to
show **time and motion** — the blur, the multiplied limb, the line of force — and it
invented the **avant-garde as media campaign**: the manifesto, the scandal, the tour.
Almost every later "ism" that announced itself with a printed program (Dada,
Surrealism, Constructivism, Vorticism) is downstream of Marinetti's *Le Figaro* stunt.
But it is also the movement that **made art a recruiting poster for war and, in
Marinetti's case, for fascism** — the read has to carry both halves without flattening
either into the other.

---

## 2. THE BREAK BLOCK (`whatChanged`) — art learns to show MOTION (and worships the machine)

The concrete change, stated plainly (not "revolutionary"):

> **Before:** a painting froze a single instant. A horse, a dancer, a train were each
> caught in one fixed pose, in one fixed light, the way a photograph stops a clock.
> Even the most modern pictures (Impressionism, Fauvism, early Cubism) showed a
> *still* world, however brightly or oddly. And the proper subjects of "high" art were
> still the old ones: the nude, the portrait, the landscape, the myth.
>
> **After (Futurism):** the picture tries to show **movement happening over time** —
> the dog's legs and the leash multiplied into a fan of repeated shapes; a body
> dissolved into "lines of force"; a train station smeared into the rush of arrival
> and departure. Two moves stack: **(1)** they borrowed **Cubism's fractured planes**
> but used them to depict **speed and dynamism** instead of a static object; **(2)**
> they threw out the old subjects entirely and painted **the machine age** — the car,
> the tram, the electric arc-lamp, the construction site, the rioting crowd, the
> cabaret — as the only fit subjects for modern art. Motion and the machine become the
> content.

### Before/after pair (born-verified candidates)

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — one frozen instant** | A static pre-1909 treatment of a moving subject: **a 19th-c. academic/Romantic horse or battle picture** (e.g. a Géricault or a Salon equestrian piece already used in the era reads), OR a calm **Divisionist** canvas (Segantini / Pellizza da Volpedo) to show Futurism's own *starting point* before it learned to fracture. | The cleanest foil is a moving subject (horse, crowd) held perfectly still in one frozen pose — exactly what Futurism set out to overturn. The Divisionist option doubles as the lineage "parent." | **PD-US** (pre-1900 / pre-1909). |
| **AFTER — motion across time** | **Giacomo Balla, *Dynamism of a Dog on a Leash*, 1912** (Buffalo AKG / former Albright-Knox) — the single most legible "this is the change" image: a dachshund's legs and the leash multiplied into a blur of repeated shapes. Alternatives: **Boccioni, *The City Rises*, 1910** (machine-age subject), or **Boccioni, *Unique Forms…*, 1913** (a striding figure made of speed). | The dachshund picture is the textbook demonstration of painted motion — instantly readable to a phone reader, no glossing needed. | **Painting PD only in life+70 since 2029** (Balla d.1958); **its pre-1930 reproduction is US-PD** — but Balla is long-lived, so **double-check the specific image** (see §4). |

**Recommended pairing for the break block:** a frozen-pose horse/crowd picture **→**
*Balla, Dynamism of a Dog on a Leash* (legs and leash multiplied into motion). That
pair makes the change visible in one glance: still vs. moving. Fall back to *The City
Rises* if you'd rather make the "new subject = the machine age" point instead.

---

## 3. THE MANIFESTO BLOCK (`manifesto`) — PRESENT, and the loudest in art history

**`absent: false`.** Futurism is the **opposite** of the Fauvism case: it did not
slide into existence and get named by an enemy — it was **declared, in print, before
the art existed.** The manifesto is the founding act. The block's job is to quote it
accurately, name the publication exactly, and **not launder the ugly lines.**

### The founding document
- **What it is:** ***Founding and Manifesto of Futurism*** (*Fondazione e Manifesto
  del Futurismo* / *Le Futurisme*), by **Filippo Tommaso Marinetti**.
- **Publication (verified):** front page of ***Le Figaro*, Paris, 20 February 1909.**
  Earlier Italian printings: *Gazzetta dell'Emilia* (Bologna), 5 Feb 1909; a leaflet
  c. January 1909. **Eleven numbered points** after a prose preamble. [W-Manifesto][Guggenheim][HistInfo]

### The painting manifestos (the aesthetic program)
- ***Manifesto of the Futurist Painters***, **11 February 1910** — signed **Boccioni,
  Carrà, Russolo, Balla, Severini.** [391-Painters][LoC-Painters]
- ***Technical Manifesto of Futurist Painting***, Milan, **11 April 1910** — same five
  signatories, mainly written by **Boccioni**; this is the one that says paint **"the
  dynamic sensation"** and "universal dynamism," and rejects the nude. [W-TechManifesto][LoC-TechManifesto]
- (Plus, for the writer's awareness, the cascade: Russolo's *The Art of Noises*, 1913;
  Sant'Elia's *Manifesto of Futurist Architecture*, 1914; Saint-Point's *Manifesto of
  the Futurist Woman*, 1912 — see §honesty.)

### Accurately-quoted lines (verify wording against a named translation at gate 1)

From the **Founding and Manifesto of Futurism** (1909). The two standard English
translations are **R. W. Flint** (*Marinetti: Selected Writings*, 1972) and **Doug
Thompson** (in Günter Berghaus, ed., *F. T. Marinetti: Critical Writings*, FSG, 2006).
Wording below is the Thompson/Berghaus rendering; the Flint forms are noted where they
are the more-quoted phrase. **Gate the chosen wording against ONE named translation.**

  > **Point 4:** "…a roaring motorcar, which seems to race on like machine-gun fire,
  > is more beautiful than the Winged Victory of Samothrace." [BoT-Manifesto][Berghaus]

  > **Point 9:** "We wish to glorify war — the sole cleanser of the world — militarism,
  > patriotism, the destructive act of the libertarian, beautiful ideas worth dying
  > for, and scorn for women." *(The famous English form of the mid-phrase is "war,
  > the world's only hygiene" — Flint.)* [BoT-Manifesto][Berghaus][W-Manifesto]

  > **Point 10:** "We wish to destroy museums, libraries, academies of any sort, and
  > fight against moralism, feminism, and every kind of materialistic, self-serving
  > cowardice." [BoT-Manifesto][Berghaus]

⚠️ **The exact English wording varies by translator** — especially point 9's
hygiene/cleanser phrase. Gate the chosen wording against Flint OR Thompson and name
which. Do NOT mix translations in one quote.

### Born-verified public source URL for the block's "source link"
- **MoMA**, *Words in Freedom: Futurism at 100* (2009 interactive, reproduces the
  manifesto): `https://www.moma.org/interactives/exhibitions/2009/futurism/` —
  reputable, museum-hosted. [MoMA-Futurism]
- **Library of Congress** holds digitized scans of the original Futurist manifesto
  leaflets — catalog item `https://www.loc.gov/item/2021667099` (*Futurist
  Constitution and Manifesto*) and the painters' manifestos at `…/2021667100/` and
  `…/2021667101/`. Born-verified primary scans; a strong corroborating/source link.
  [LoC-Manifesto][LoC-Painters][LoC-TechManifesto]
- **Internet Archive** hosts Flint's *Marinetti: Selected Writings* and the Berghaus
  *Critical Writings* (search the IA for the translation actually quoted).
- **Prefer the MoMA interactive** as the public "read the manifesto" link, with the
  LoC scan as the primary-document backstop. (Do NOT link a random blog PDF — e.g.
  booksontrial.com is fine for *checking* wording but not as the cited source link.)

### How to write the presence (and the rot)
Tell it straight: *"Most movements get named after the fact. Futurism arrived as a
press release. In 1909 a poet who had never picked up a brush bought the front page of
a Paris newspaper and announced a movement — then went and found the painters. The
manifesto is gorgeous, brutal, and not safely quotable: it wants to burn the museums,
it calls a racing car lovelier than a Greek goddess, and in the same breath it
glorifies war as 'the world's only hygiene' and preaches 'scorn for woman.' Those last
lines are not a youthful slip you can skip past — Marinetti meant them, and ten years
later he helped write the founding manifesto of Italian Fascism."* Same template the
art pages use for the **present-manifesto** case (quotes + source link + honest gloss).

---

## 4. THE CANON (~10–12 key works) — with IMAGE-RIGHTS flags for the app gate

**IMAGE-RIGHTS RULE for this vertical (the load-bearing item):** the app inlines only
**US-public-domain** images. The US rule is **published-before-1930 = US-PD**,
regardless of the author's death date. **Every core Futurist PAINTING is 1910–1915 and
was published/exhibited well before 1930, so its pre-1930 photographic reproduction is
US-PD and inlineable.** Three artists are long-lived (**Balla d.1958, Severini
d.1966, Carrà d.1966**); their *paintings'* US status still rests on **pre-1930
publication** (fine), but for these three you should **double-check the specific image
file's date/source** at gate 6 before inlining. **Boccioni d.1916** is the cleanest
case for paintings. The **one genuine edge case is the SCULPTURE** (item 11 below) —
the famous bronzes are **posthumous casts (1931+)**, so a *photo of a posthumous
bronze* is NOT automatically pre-1930; prefer a photo of the **1913 plaster** or treat
the sculpture as a paintings-card alternative. [W-Futurism][Commons-Futurism]

Dimensions in cm (museum record) + ft/in conversion.

### 1. Boccioni — *The City Rises (La città che sale)*, 1910 — STRONG CARD CANDIDATE
- **Museum:** MoMA, New York (Mrs. Simon Guggenheim Fund, acq. 1951).
- **Dimensions:** 199 × 301 cm = **~6 ft 6½ in × 9 ft 10½ in**. Oil on canvas.
- **Blurb fact:** Boccioni's first major Futurist canvas — a building site where men
  and a huge **red dray-horse** dissolve into one churning surge of labor and energy;
  the machine-age city literally "rising." [MoMA-CityRises][W-CityRises]
- **Rights:** PD-US (pre-1930 reproduction). Boccioni d.1916 — cleanest case.
- **Commons candidate:** search `Boccioni The City Rises 1910`.

### 2. Boccioni — *States of Mind (Stati d'animo)* triptych: *The Farewells / Those Who Go / Those Who Stay*, 1911
- **Museum:** MoMA, New York (the 1911 versions; second 1911 set also at MoMA).
- **Dimensions:** each ~70.5 × 96.2 cm = **~2 ft 3¾ in × 3 ft 1¾ in**. Oil on canvas.
- **Blurb fact:** Three panels of a **railway-station parting** — the swirl of
  goodbye, the horizontal speed-lines of those leaving, the drooping verticals of
  those left behind. Futurism trying to paint **emotion as motion**. [MoMA-StatesI][W-StatesI]
- **Rights:** PD-US (pre-1930 reproduction). Boccioni d.1916.
- **Commons candidate:** search `Boccioni States of Mind 1911 Farewells`.

### 3. Balla — *Dynamism of a Dog on a Leash (Dinamismo di un cane al guinzaglio)*, 1912 — BREAK-BLOCK "AFTER"
- **Museum:** Buffalo AKG Art Museum (former Albright-Knox), Buffalo, NY.
- **Dimensions:** 89.85 × 109.85 cm (~91 × 110) = **~2 ft 11½ in × 3 ft 7¼ in**. Oil on canvas.
- **Blurb fact:** A dachshund and a lady's feet on a Turin street, **legs and leash
  multiplied into a fan of motion** — the single most legible image of "painted
  movement." [W-DogLeash][AKG]
- **Rights:** pre-1930 reproduction is US-PD; **Balla d.1958** → ⚠️ verify the
  specific image file at gate 6.
- **Commons candidate:** search `Balla Dynamism of a Dog on a Leash 1912`.

### 4. Severini — *Dynamic Hieroglyphic of the Bal Tabarin (Hiéroglyphe dynamique du Bal Tabarin)*, 1912
- **Museum:** MoMA, New York.
- **Dimensions:** 161.6 × 156.2 cm = **~5 ft 3½ in × 5 ft 1½ in**. Oil on canvas, **with sequins**.
- **Blurb fact:** A Paris night club (the Bal Tabarin) shattered into spinning dancers,
  cancan legs and fragments of text — Cubist faceting put to the service of **noise,
  light and motion**; real sequins glued to the surface. [MoMA-Severini][Smarthistory-Severini]
- **Rights:** pre-1930 reproduction is US-PD; **Severini d.1966** → ⚠️ verify the
  specific image file at gate 6.
- **Commons candidate:** search `Severini Bal Tabarin 1912`.

### 5. Carrà — *Funeral of the Anarchist Galli (I funerali dell'anarchico Galli)*, 1910–11
- **Museum:** MoMA, New York (acq. 1948).
- **Dimensions:** 198.7 × 259.1 cm = **~6 ft 6¼ in × 8 ft 6 in**. Oil on canvas.
- **Blurb fact:** A real event Carrà witnessed — the violent, police-charged funeral of
  anarchist Angelo Galli (1906) — rendered as a clash of red banners and bodies, a riot
  in lines of force. Politics + dynamism. [MoMA-Carra][W-Carra-Galli]
- **Rights:** pre-1930 reproduction is US-PD; **Carrà d.1966** → ⚠️ verify the
  specific image file at gate 6.
- **Commons candidate:** search `Carra Funeral of the Anarchist Galli`.

### 6. Boccioni — *Materia (Matter)*, 1912 (reworked 1913)
- **Museum:** Mattioli Collection, on long-term loan to the Peggy Guggenheim
  Collection, Venice.
- **Dimensions:** ~226 × 150 cm = **~7 ft 5 in × 4 ft 11 in**. Oil on canvas.
- **Blurb fact:** A monumental seated figure of the artist's **mother**, hands huge in
  the foreground, body interpenetrated by the city around her — Futurist
  "interpenetration of planes" at full scale. [Guggenheim-Materia][BrooklynRail-Materia]
- **Rights:** PD-US (pre-1930 reproduction). Boccioni d.1916.
- **Commons candidate:** search `Boccioni Materia 1912`.

### 7. Russolo — *Dynamism of an Automobile (Dynamisme d'une automobile)*, 1912–13
- **Museum:** Centre Pompidou (Musée national d'art moderne), Paris.
- **Dimensions:** ~104 × 140 cm = **~3 ft 5 in × 4 ft 7 in**. Oil on canvas.
- **Blurb fact:** A car driven into a wedge of overlapping blue arcs — pure speed as
  geometry; by the painter who'd soon trade brushes for **noise machines**. [W-Russolo][Pompidou-Russolo]
- **Rights:** pre-1930 reproduction is US-PD; **Russolo d.1947** → EU-PD since 2018;
  verify the file at gate 6.
- **Commons candidate:** search `Russolo Dynamism of an Automobile`.

### 8. Severini — *Suburban Train Arriving in Paris (Train de banlieue arrivant à Paris)*, 1915
- **Museum:** Tate, London.
- **Dimensions:** 88.6 × 116 cm = **~2 ft 10¾ in × 3 ft 9¾ in**. Oil on canvas.
- **Blurb fact:** A steam train cutting through the suburbs in faceted planes of smoke
  and motion — Severini's bridge between Cubist structure and Futurist speed. [Tate-Severini]
- **Rights:** pre-1930 reproduction is US-PD; **Severini d.1966** → ⚠️ verify the
  file at gate 6.
- **Commons candidate:** search `Severini Suburban Train Arriving in Paris`.

### 9. Boccioni — *Dynamism of a Cyclist (Dinamismo di un ciclista)*, 1913
- **Museum:** Peggy Guggenheim Collection, Venice (Mattioli Collection).
- **Dimensions:** ~70 × 95 cm = **~2 ft 3½ in × 3 ft 1½ in**. Oil on canvas.
- **Blurb fact:** A cyclist abstracted almost to pure force-lines — body, bike and air
  fused into one streak of effort and speed. [Guggenheim-Cyclist]
- **Rights:** PD-US (pre-1930 reproduction). Boccioni d.1916.
- **Commons candidate:** search `Boccioni Dynamism of a Cyclist`.

### 10. Carrà — *Interventionist Demonstration (Manifestazione interventista / Patriotic Festival – Free-Word Painting)*, 1914
- **Museum:** Mattioli Collection, on loan to the Peggy Guggenheim Collection, Venice.
- **Dimensions:** ~38.5 × 30 cm = **~1 ft 3¼ in × 1 ft 0 in**. Tempera/collage on board.
- **Blurb fact:** A spinning collage of newspaper fragments and slogans —
  "free-word" Futurism agitating for **Italy to enter WWI** (the literal moment
  Futurism turned its art into war propaganda). Good for the honesty axis. [Guggenheim-Carra][W-Carra]
- **Rights:** pre-1930 reproduction is US-PD; **Carrà d.1966** → ⚠️ verify the file at gate 6.
- **Commons candidate:** search `Carra Interventionist Demonstration 1914`.

### 11. Boccioni — *Unique Forms of Continuity in Space (Forme uniche della continuità nello spazio)*, 1913 — ⚠️ SCULPTURE / RIGHTS EDGE CASE
- **Museum:** **Original 1913 plaster:** MAC USP (Museu de Arte Contemporânea da
  Universidade de São Paulo), Brazil. **Posthumous bronze casts** at MoMA (cast 1931),
  Museo del Novecento Milan (Marinetti cast, 1933/34), Tate, the Met, and others.
- **Dimensions (MoMA bronze):** 111.2 × 88.5 × 40 cm = **~3 ft 7¾ in × 2 ft 10¾ in ×
  1 ft 3¾ in**. Bronze (posthumous cast of a 1913 plaster).
- **Blurb fact:** A striding human figure remade as **flame and wind made solid** —
  muscles peeled back into wings of motion. The single most iconic Futurist object; it
  is on the **Italian 20-cent euro coin**. [MoMA-UF][Met-Boccioni100][W-UniqueForms]
- **Rights:** ⚠️ **The sculpture is 1913 but every bronze is a posthumous cast (1931
  and later).** A photograph of a **post-1930 bronze cast** is NOT automatically a
  pre-1930 US-PD image. **Safer:** use a photograph of the **1913 plaster** (the work
  itself is 1913; a pre-1930 photo of it would be US-PD), or a clearly pre-1930
  reproduction, OR demote it to a card alternative and lead the canon with a painting.
  **Flag this for gate 6 explicitly — do not assume the famous MoMA-bronze photo is
  PD.**
- **Commons candidate:** search `Boccioni Unique Forms of Continuity in Space` and
  **filter to pre-1930 / plaster images**; verify the specific file's licence.

### 12. Balla — *Abstract Speed + Sound (Velocità astratta + rumore)*, 1913–14
- **Museum:** Peggy Guggenheim Collection, Venice.
- **Dimensions:** ~54.5 × 76.5 cm = **~1 ft 9½ in × 2 ft 6 in**. Oil on board.
- **Blurb fact:** A car gone fully abstract — no car left, just the **swoosh of speed
  and the wedge of noise** it leaves behind. Balla pushing Futurism toward pure
  abstraction. [Guggenheim-Balla][W-Balla]
- **Rights:** pre-1930 reproduction is US-PD; **Balla d.1958** → ⚠️ verify the file at gate 6.
- **Commons candidate:** search `Balla Abstract Speed Sound`.

**Rights summary line for the coordinator:** *Every core Futurist PAINTING (1910–1915)
is inlineable as a pre-1930 US-PD reproduction. Boccioni (d.1916) is the clean case;
Balla/Severini/Carrà (d.1958/1966/1966) need a per-image gate-6 check that the file is
genuinely a pre-1930 reproduction. The ONE real trap is the SCULPTURE — the famous
bronzes are posthumous (1931+) casts, so use a pre-1930 / plaster photo or pick a
painting card.*

---

## 5. LINEAGE (the lineage block)

### Parents (what Futurism grew out of)
- **Italian Divisionism** (Previati, Segantini, Pellizza da Volpedo) — **separated
  strokes of pure color**; the Futurists' native technique before Cubism (Balla taught
  it to the others). The shimmer in early Futurist canvases is Divisionist. [Mapfre-Div][ArtStory]
- **Cubism** (Picasso & Braque, 1907–11) — **fractured, faceted planes**, grabbed on
  the 1911 Paris trip and bent to the new job of showing **motion** (the Futurists
  thought Cubism too static). The biggest single visual debt. [ArtStory][MetEssay-Boccioni]
- **The machine age itself** — the car, the train, the tram, electric light, the
  factory, the modern city: not a style but the **subject** Futurism chose over the
  nude and the landscape. [W-Futurism]
- **Marinetti's politics & temperament** — nationalism, the cult of speed and
  violence, anti-clericalism, the worship of the new; the **engine** that pointed the
  movement at war and, later, fascism. [W-Marinetti]
- (Deeper roots, terse callback: **Nietzsche** — the will-to-power / the new man; and
  **photography/chronophotography** — Marey's and Muybridge's motion studies, which
  pre-figure the multiplied limb.)

### Children (what Futurism fed)
- **Vorticism** (London, 1914) — Wyndham Lewis's hard-edged machine art and the
  magazine *BLAST* are a direct, partly-rivalrous response to Futurism. [ArtStory]
- **Russian Cubo-Futurism & Constructivism** — Malevich, Mayakovsky, then the
  Constructivists took up the machine, the manifesto and the speed-lines. [W-Futurism]
- **Dada** (Zurich, 1916) — inherited the **manifesto-as-weapon, the provocation, the
  noise** (Russolo's noise music prefigures sound art and Dada performance). [W-ArtOfNoises]
- **Noise music / sound art** — Russolo's *Art of Noises* and **intonarumori** are a
  founding moment for 20th-c. experimental and electronic music. [W-Intonarumori]
- **Kinetic & speed-obsessed later art** — and, in the ugliest line of descent,
  **Fascist visual culture** (Marinetti's *aeropittura* fused to the regime). [W-Marinetti]
- (The **manifesto method itself** — the avant-garde press release — is Futurism's
  most durable export: Surrealism, De Stijl, every later "ism" that launched in print.)

---

## 6. ARTISTS ROW (~6) — one-line role + portrait-photo candidate

Period photos of these men are 1900s–1940s; **pre-1930 photos are US-PD**, later ones
need checking. **Where no clean born-verified PD portrait exists, use the gradient
fallback** (the row already uses palette gradients).

1. **Filippo Tommaso Marinetti** (1876–1944) — **the impresario; founder, megaphone,
   and money.** A poet who launched the movement in print before it had a painting,
   wrote dozens of manifestos, agitated for war, and **co-wrote the Fascist Manifesto
   (1919)**; tied Futurism to Mussolini for the rest of his life. **Portrait photo:**
   pre-1930 press photos of Marinetti exist on Commons (verify PD at gate 6); else
   gradient. [W-Marinetti]
2. **Umberto Boccioni** (1882–1916) — **the great painter-sculptor and theorist.**
   Wrote the *Technical Manifesto of Futurist Painting*; made *The City Rises*,
   *States of Mind*, *Unique Forms*. **Died young in the war he cheered (1916).**
   Portrait: period photos on Commons (verify); else gradient. [W-Boccioni]
3. **Giacomo Balla** (1871–1958) — **the eldest; taught the others Divisionism, then
   pushed furthest toward abstraction** (the dog on a leash, *Abstract Speed*).
   Portrait: verify; else gradient. [W-Balla]
4. **Carlo Carrà** (1881–1966) — **the painter of crowds and politics** (*Funeral of
   the Anarchist Galli*); later left Futurism for **Metaphysical** painting with de
   Chirico. Portrait: verify; else gradient. [W-Carra]
5. **Gino Severini** (1883–1966) — **the Paris man**; lived among the Cubists, brought
   Futurism to France, painted the night-club and the train (*Bal Tabarin*); later the
   most classicizing. Portrait: verify; else gradient. [W-Severini]
6. **Luigi Russolo** (1885–1947) — **the painter who became a composer**; *The Art of
   Noises* (1913) and the **intonarumori** noise machines — the movement's sound wing
   and a father of noise music. Portrait: verify; else gradient. [W-Russolo]

(Optional 7th if room: **Antonio Sant'Elia**, 1888–1916 — the **architect** of the
*Città Nuova* visionary drawings; *Manifesto of Futurist Architecture* (1914);
**killed in action 1916**. Or **Valentine de Saint-Point**, 1875–1953 — the one woman
who answered Marinetti in his own form, see §honesty.) [W-SantElia][W-SaintPoint]

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **Cubism in full swing — Paris, 1909–1914.** While Marinetti was shouting,
   **Picasso and Braque** were quietly inventing **Analytic then Synthetic Cubism** a
   few streets away. The 1911 Paris trip is where the two movements collide: Futurism
   takes Cubism's broken planes but accuses it of standing still. The era/Cubism reads
   already cover this — **reference, don't re-tell.** [MetEssay-Boccioni][ArtStory]
2. **The run-up to the Great War — Europe, 1909–1914.** Futurism's worship of speed,
   violence and "the world's only hygiene" lands in the exact years Europe is arming
   for **WWI** (begins Aug 1914). The Futurists **campaigned for Italy to join** and
   then **died in it** (Boccioni and Sant'Elia, both 1916). The art and the catastrophe
   are not separable. [W-Futurism][W-Boccioni]
3. **German Expressionism — Der Blaue Reiter, Munich, 1911.** The same years that
   **Kandinsky, Marc and Klee** form **Der Blaue Reiter** and push toward spiritual
   abstraction (*Concerning the Spiritual in Art*, 1911). A useful contrast: where the
   Germans sought the inner/spiritual, the Italians worshipped the outer/mechanical —
   two opposite roads out of the same modern moment. (Franz Marc, like Boccioni and
   Sant'Elia, died in WWI.) [W-Futurism]

---

## 8. NESTING — what the ERA read and the CUBISM read already cover (go DEEPER, don't duplicate)

- **The Modern era read** gives Futurism a thumbnail and covers the broad "art goes
  modern, manifestos and isms multiply" arc. The movement read must go **DEEPER**: the
  manifesto-first launch mechanics, the Divisionist→Cubist→Futurist visual path, the
  specific masterworks, the **fascism honesty axis**, the women's response, and the
  WWI gutting. **Don't re-narrate the era thumbnail; reference it tersely.**
- **The CUBISM movement read** already covers Picasso/Braque, the fractured plane, and
  Analytic/Synthetic Cubism in depth — and almost certainly names Futurism in its own
  parallels/lineage. **The Futurism read should reference Cubism as its parent and
  rival, not re-explain what Cubism is.** When you need "what Cubism did," point to
  that read in one line and move on. (Nesting gate 7.)
- **Coordinator action item:** confirm/add a reciprocal cross-link — Cubism's read
  mentions Futurism; the Futurism read should link back to Cubism (the 1911 Paris
  encounter is the natural hinge). Check `src/lib/art-content.ts` CUBISM const
  parallels/lineage and keep them mutually consistent.

---

## 9. SHAPE (suggested chapters — author may improve)

1. **The press release that started a movement** — Marinetti, *Le Figaro*, 20 Feb
   1909; the manifesto arrives before any Futurist painting; what it demanded (speed,
   the machine, burn the museums) and its ugly core (war, "scorn for woman"). Set up
   that the words came first. (Reference the era read; don't re-narrate it.)
2. **Finding the painters** — Boccioni, Carrà, Russolo, Balla, Severini sign on; the
   1910 painting manifestos; the Divisionist starting point ("the dynamic sensation").
3. **Paris, 1911: stealing Cubism's planes** — the trip, Picasso/Braque, Bernheim-
   Jeune 1912; how they bent fractured planes to show **motion** instead of stillness.
   (Reference the Cubism read for what Cubism *is*.)
4. **Painting speed** — the masterpieces: *The City Rises*, *States of Mind*, the dog
   on a leash, the *Bal Tabarin*, *Unique Forms*; the multiplied limb, the line of
   force, the machine as subject. Make the reader SEE the motion.
5. **A total program — and a woman answers back** — noise music (Russolo,
   intonarumori), Sant'Elia's machine city, the manifesto cascade; **Valentine de
   Saint-Point's 1912 answer** to the misogyny. Futurism as a whole way of life.
6. **The war it wanted** — interventionism, volunteering, **Boccioni and Sant'Elia
   die in 1916**; the heroic group dissolves; then the second Futurism fused to
   **Fascism** (Marinetti co-writes the Fascist Manifesto, 1919; *aeropittura*; serves
   Mussolini to 1944). Hold both halves: the real art revolution **and** the rot.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House dry wit dialled up; comparisons welcome; inline-define every term (manifesto,
avant-garde, Divisionism/pointillism, Cubism's "fractured planes," "lines of force,"
dynamism, "free-word" / *parole in libertà*, intonarumori, *aeropittura*,
interventionism, the Salon, retrospective) — reader has zero prior knowledge, though
some met manifesto/Cubism/Divisionism in the era/Fauvism/Cubism reads (terse callback).
**Make the reader SEE the motion** — the dog's blurred legs, the red horse churning up
the building site, the cancan spinning into sequins. **Framing — the honesty floor:**
do NOT launder the fascism. State plainly that Marinetti co-founded Italian Fascism and
that the manifesto glorifies war and preaches "scorn for woman"; name the women who
answered back (Saint-Point, later Benedetta Cappa); but do NOT flatten every Futurist
into a card-carrying fascist or imply the paintings are worthless because the politics
were vile — hold the contradiction. **No em-dashes in shipping prose** (not the char,
not `&mdash;`). Storytelling first; accuracy a hard floor; the only direct quotes are
the manifesto lines (all gated to one named translation) — no invented quotes.

### HONESTY — the framing-gate axes spelled out (research-locked)
- **Fascism (the Lost-Cause analog):** TRUE — Marinetti **co-wrote the Fascist
  Manifesto** (with Alceste De Ambris), *Il Popolo d'Italia*, **6 June 1919**, the
  platform of Mussolini's Fasci Italiani di Combattimento (founded 23 March 1919,
  Milan; Marinetti present). He was a genuine founding-era fascist and served the
  regime to his death (1944). **Nuance, kept honest:** he briefly **broke with the
  fascists in 1920** ("reactionary"), then reconciled. Futurism's *romance* with
  violence/nationalism/the machine fed fascist aesthetics; **but** not every Futurist
  was a fascist (some Futurists were anarchists or socialists; some later distanced
  themselves), and the early masterpieces (1910–13) predate the Fascist party (1919).
  Say: the founder helped build fascism and the movement's worldview pointed that way —
  **without** retro-painting the 1912 dog picture as a fascist object. [W-FascistManifesto][W-Marinetti][BoT-Timeline]
- **Misogyny:** TRUE — manifesto point 9 ("scorn for women") and point 10 ("fight…
  feminism"). **The women answer (don't omit):** **Valentine de Saint-Point**, *Manifesto
  of the Futurist Woman* (1912, "An Answer to F.T. Marinetti") — she didn't just rebut,
  she out-radicalized him (her *Futurist Manifesto of Lust*, 1913, scandalized further);
  and **Benedetta Cappa Marinetti** (Marinetti's wife) was a serious Futurist painter
  and *aeropittura* figure in the second phase. Marinetti's later gloss (he meant the
  *sentimental-muse* cliché, not literal women) is **his** spin — report it, don't
  endorse it. [W-SaintPoint][LoC-SaintPoint]
- **Boccioni's death:** a **training accident** (thrown from a bolting horse,
  16 Aug 1916, near Verona; died next day), NOT a heroic combat death — but he **had
  volunteered** for the war Futurism demanded. The irony (he'd named the horse after
  the red horse in *The City Rises*) is documented and worth one line. [W-Boccioni][IAS-Boccioni]
- **"First" claims:** hedge. "First movement **launched by manifesto** / the prototype
  of the manifesto avant-garde" — YES, widely accepted. A flat "the first manifesto in
  art" — NO. And the manifesto's *first print* was Italian (Bologna, 5 Feb 1909); the
  *Le Figaro* front page (20 Feb 1909) is the famous launch. [W-Manifesto]

---

## Source key (for the writer & fact-checker)

- **[W-Futurism]** Wikipedia, *Futurism*.
- **[W-Manifesto]** Wikipedia, *Manifesto of Futurism* (publication dates; misogyny/feminism note; Berghaus).
- **[W-Marinetti]** Wikipedia, *Filippo Tommaso Marinetti* (1876–1944; Fascist Manifesto co-author; aeropittura; Royal Academy 1929; 1920 break).
- **[W-Boccioni]** Wikipedia, *Umberto Boccioni* (1882–1916; death 16/17 Aug 1916, Verona, cavalry accident).
- **[W-Balla]** Wikipedia, *Giacomo Balla* (1871–1958).
- **[W-Carra]** Wikipedia, *Carlo Carrà* (1881–1966; later Metaphysical).
- **[W-Carra-Galli]** Wikipedia, *The Funeral of the Anarchist Galli*.
- **[W-Severini]** Wikipedia, *Gino Severini* (1883–1966; Paris).
- **[W-Russolo]** Wikipedia, *Luigi Russolo* (1885–1947).
- **[W-SantElia]** Wikipedia, *Antonio Sant'Elia* (1888–1916; killed Monte Ermada, 10 Oct 1916; Città Nuova; 1914 architecture manifesto).
- **[W-SaintPoint]** Wikipedia, *Valentine de Saint-Point* (1875–1953; *Manifesto of the Futurist Woman*, 1912; *Manifesto of Lust*, 1913).
- **[W-TechManifesto]** Wikipedia, *Futurist Painting: Technical Manifesto* (Milan, 11 April 1910; five signatories; mainly Boccioni; "dynamic sensation").
- **[W-ArtOfNoises]** Wikipedia, *The Art of Noises* (Russolo, 1913).
- **[W-Intonarumori]** Wikipedia, *Intonarumori* (Russolo, ~1913, 16 instruments).
- **[W-FascistManifesto]** Wikipedia, *Fascist Manifesto* (De Ambris + Marinetti; *Il Popolo d'Italia*, 6 June 1919) and *Fasci Italiani di Combattimento* (founded 23 Mar 1919).
- **[W-CityRises]** Wikipedia, *The City Rises* (199 × 301 cm; MoMA; Busoni provenance).
- **[W-StatesI]** Wikipedia, *States of Mind I: The Farewells* (1911; MoMA; railway-station triptych).
- **[W-DogLeash]** Wikipedia, *Dynamism of a Dog on a Leash* (1912; ~91 × 110 cm; Albright-Knox/Buffalo AKG).
- **[W-UniqueForms]** Wikipedia, *Unique Forms of Continuity in Space* (1913 plaster at MAC USP, São Paulo; posthumous bronzes 1931+).
- **[MoMA-Futurism]** MoMA, *Words in Freedom: Futurism at 100* (2009 interactive) — manifesto source link: `moma.org/interactives/exhibitions/2009/futurism/`.
- **[MoMA-CityRises]** MoMA collection record, Boccioni, *The City Rises* (`moma.org/collection/works/79865`).
- **[MoMA-StatesI]** MoMA collection record, Boccioni, *States of Mind* series (`moma.org/collection/works/78648` etc.).
- **[MoMA-Severini]** MoMA collection record, Severini, *Dynamic Hieroglyphic of the Bal Tabarin* (161.6 × 156.2 cm; oil + sequins).
- **[MoMA-Carra]** MoMA collection record, Carrà, *Funeral of the Anarchist Galli* (198.7 × 259.1 cm; acq. 1948).
- **[MoMA-UF]** MoMA collection record, Boccioni, *Unique Forms…* (cast 1931 or 1934; 111.2 × 88.5 × 40 cm).
- **[Met-Boccioni100]** The Metropolitan Museum of Art, *Boccioni 100: A Future Cast in Bronze* (the casting history of *Unique Forms*).
- **[MetEssay-Boccioni]** The Met, essay *Umberto Boccioni (1882–1916)* (the 1911 Paris/Cubism encounter).
- **[Met-Boccioni]** The Met collection record, *Unique Forms of Continuity in Space* (485540).
- **[Smarthistory-Severini]** Smarthistory, *Gino Severini, Dynamic Hieroglyph of the Bal Tabarin*.
- **[Tate-Severini]** Tate collection record, Severini, *Suburban Train Arriving in Paris* (1915; 88.6 × 116 cm).
- **[AKG]** Buffalo AKG Art Museum (former Albright-Knox), Balla, *Dynamism of a Dog on a Leash*.
- **[Pompidou-Russolo]** Centre Pompidou collection, Russolo, *Dynamism of an Automobile*.
- **[Pompidou-BJ]** Centre Pompidou education resource on the 1912 Bernheim-Jeune Futurist exhibition.
- **[Guggenheim]** Guggenheim, *The Manifesto of Futurism* (exhibitions.guggenheim.org/futurism/manifestos).
- **[Guggenheim-Materia]** Peggy Guggenheim Collection, Boccioni, *Materia* (Mattioli loan).
- **[Guggenheim-Cyclist]** Peggy Guggenheim Collection, Boccioni, *Dynamism of a Cyclist* (Mattioli loan).
- **[Guggenheim-Carra]** Peggy Guggenheim Collection, Carrà, *Interventionist Demonstration* (Mattioli loan).
- **[Guggenheim-Balla]** Peggy Guggenheim Collection, Balla, *Abstract Speed + Sound*.
- **[BrooklynRail-Materia]** The Brooklyn Rail, *Boccioni's Materia* (2004, Guggenheim show).
- **[BoT-Manifesto]** Books on Trial, full text of the Futurist Manifesto (Doug Thompson tr., per Berghaus ed.) — for WORDING-CHECK only, not the cited source link.
- **[BoT-Timeline]** Books on Trial, *Mussolini and Marinetti: A Timeline of the Futurist-Fascist alliance*.
- **[Berghaus]** Günter Berghaus (ed.), *F. T. Marinetti: Critical Writings* (FSG, 2006; Doug Thompson translation) — named translation for gate-1 wording check.
- **[Flint]** R. W. Flint (ed./tr.), *Marinetti: Selected Writings* (1972) — the other standard translation ("war, the world's only hygiene").
- **[LoC-Manifesto]** Library of Congress, *Futurist Constitution and Manifesto* scan (`loc.gov/item/2021667099`).
- **[LoC-Painters]** Library of Congress, *Manifesto of the Futurist Painters* scan (`loc.gov/item/2021667100`).
- **[LoC-TechManifesto]** Library of Congress, *Futurist Painting. Technical Manifesto* scan (`loc.gov/item/2021667101`).
- **[LoC-SaintPoint]** Library of Congress, *Manifesto of the Futurist Woman. An Answer to F.T. Marinetti* scan (`loc.gov/item/2021667104`).
- **[391-Painters]** 391.org, *Manifesto of Futurist Painters (1910)* — text + signatories (corroborating).
- **[HistInfo]** historyofinformation.com, *"The Founding and Manifesto of Futurism" by Marinetti* (publication chronology; corroborating).
- **[ArtStory]** TheArtStory, *Futurism Movement Overview* (Paris trip, Bernheim-Jeune, Divisionism, Vorticism — corroborating secondary).
- **[Mapfre-Div]** Fundación Mapfre, *From Divisionism to Futurism: Italian Art and Modernity* (the Divisionist root).
- **[IAS-Boccioni]** Italian Art Society, *Boccioni died 17 August 1916 near Verona after falling from a horse* (death details).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Futurism = worship the machine, show MOTION, burn the past** (~1909–1918, Italy).
   The first movement **born as a manifesto**: Marinetti bought the front page of
   *Le Figaro* (Paris, **20 Feb 1909**) and announced it *before there was a single
   Futurist painting*; the painters (Boccioni, Carrà, Russolo, Balla, Severini) signed
   on in **1910**.
2. **The art:** they grabbed **Cubism's fractured planes** (Paris, 1911) to paint
   **speed and dynamism** — the dog's blurred legs (Balla), the churning building site
   (*The City Rises*), the striding bronze figure (*Unique Forms*, 1913). Plus a total
   program: **noise music** (Russolo's intonarumori), a **machine city** (Sant'Elia).
3. **Manifesto = PRESENT (`absent:false`)** — the loudest in art history. Quote it
   accurately and DON'T launder it: point 4 (a racing car lovelier than the Winged
   Victory of Samothrace), point 9 ("**war, the world's only hygiene**… scorn for
   women"), point 10 (burn the museums, fight feminism). Source link: **MoMA *Words in
   Freedom*** + **LoC scans**. Gate quotes to ONE named translation (Flint or Thompson).
4. **The fascism + misogyny honesty axes (non-negotiable):** Marinetti **co-wrote the
   Fascist Manifesto (1919)** and served Mussolini to 1944 — state it; but he briefly
   broke with fascism in 1920 and not every Futurist was a fascist (hold the
   contradiction, don't flatten). The misogyny is real (point 9/10); the women
   **answered** (Valentine de Saint-Point, 1912; later Benedetta Cappa) — don't omit
   them. **Boccioni died 1916** in a cavalry **training accident** (not combat), in the
   war Futurism cheered.
5. **Image rights (the app gate):** every core **PAINTING** (1910–15) is inlineable as
   a **pre-1930 US-PD reproduction** (Boccioni d.1916 = clean; Balla/Severini/Carrà
   d.1958/66/66 = verify the specific file at gate 6). **THE ONE TRAP: the SCULPTURE**
   *Unique Forms* — the famous bronzes are **posthumous casts (1931+)**, so a photo of
   a post-1930 bronze is NOT auto-PD; use a pre-1930 / **1913-plaster** photo or pick a
   painting card.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **Don't launder the fascism** — this is the framing-gate's central axis. Marinetti
  co-founded Italian Fascism; the manifesto glorifies war and "scorn for woman." State
  it plainly. **But** don't retro-fascistize the 1910–13 paintings or imply every
  Futurist was a fascist (some were anarchists/socialists; the masterpieces predate the
  1919 party; Marinetti himself walked out on the fascists in 1920 before returning).
- ⚠️ **The sculpture's bronze is posthumous (1931+)** — *Unique Forms* is a 1913
  **plaster** (MAC USP, São Paulo); all bronzes are posthumous casts. Use a pre-1930 /
  plaster photo for inlining, or lead the canon with a painting card. Flag for gate 6.
- ⚠️ **Manifesto quotes vary by translator** — point 9's "world's only hygiene" (Flint)
  vs "sole cleanser of the world" (Thompson/Berghaus). Pick ONE named translation and
  gate the exact wording. Cite MoMA/LoC as the source link, not a blog.
- ⚠️ **"First manifesto-born movement"** — true as "the prototype of the manifesto
  avant-garde / first movement launched by manifesto," NOT "the first manifesto in
  art." And the very first print was Italian (Bologna, 5 Feb 1909), not *Le Figaro*
  (20 Feb 1909, the famous launch). Hedge accordingly.
- ⚠️ **Don't duplicate Cubism** — the Cubism read covers the fractured plane and
  Picasso/Braque; reference it for the 1911 Paris encounter, don't re-explain Cubism.
  Coordinator: keep the Cubism↔Futurism cross-links reciprocal in `art-content.ts`.
