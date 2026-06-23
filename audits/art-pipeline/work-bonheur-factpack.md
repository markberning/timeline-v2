# Fact pack — WORK: Henri Matisse, *Le Bonheur de vivre (The Joy of Life)*, 1905–06

Coordinator-built ground truth for the art content pipeline (kind: **WORK**, Modern era,
Fauvism movement). The author drafts the deep work-read ONLY from this. Every concrete
claim traces to a sourced item here or is flagged. Anecdotes are explicitly marked
**[DOCUMENTED] / [LEGEND] / [DISPUTED]** per the art pipeline's "documented fact vs
charming legend" axis (`audits/art-content-pipeline.md` §"the beautiful anecdote").
The fact-checker gate re-verifies independently. Web-checked 2026-06-23.

Dimensions are given in cm (museum record) AND converted to **feet/inches** — the app
ships imperial only (`feedback_art_dimensions_imperial`).

This feeds the `ArtWorkContent` shape (cf. `STARRY_NIGHT`/`GRANDE_JATTE` in
`src/lib/art-content.ts`): identity, hook, stats, ~5 `sections`, `provenance[]`,
`figures[]`, 6 `annotations[]`, `lineage`.

---

## 0. LEGEND LEDGER — documented vs legend (READ FIRST)

| Claim | Verdict | The real fact + source |
|---|---|---|
| Signac said Matisse "has gone to the dogs" | **[DOCUMENTED]** | Signac wrote it in a **letter dated January 14, 1906** (recipient usually given as fellow painter **Charles Angrand** / the Neo-Impressionist circle). Full quote below in §Reception. Sourced: quoted in **Alfred H. Barr Jr., *Matisse: His Art and His Public* (MoMA, 1951), p. 82**, cited via Yves-Alain Bois, "Matisse and 'Arche-Drawing'," *Painting as Model* (MIT, 1993), p. 18, n. 41. This is the rare juicy quote that IS securely documented — quote it, but attribute it (Signac, in a private letter). [W-Bonheur][Bois] |
| Picasso painted *Les Demoiselles d'Avignon* "to out-do / out-shock Matisse's *Bonheur*" | **[DISPUTED — interpretation, frame it]** | A standard art-historical reading, stated most directly by **Martha Lucy** (Barnes associate curator): Picasso, "in an effort to outdo Matisse in terms of shock value, immediately began work on … *Les Demoiselles d'Avignon*," which "irritated" Matisse. Real rivalry, real chronology (*Bonheur* spring 1906 → *Demoiselles* 1907). But "in order to beat Matisse" is **a reading of intent, not documented intent.** Write "many read the *Demoiselles* as Picasso's answer to it," NOT "Picasso set out to beat Matisse." [W-Bonheur][Barnes-Lucy] |
| Leo Stein called it "the most important painting done in our time" | **[DOCUMENTED-as-attribution, attribute loosely]** | Widely repeated across the literature as Leo Stein's verdict. It is a real, oft-quoted attribution but I could not pin it to a single primary transcription in this pass; frame as "Leo Stein called it" / "is widely quoted as calling it," and let gate 1 confirm the exact wording against a Stein source if quoted verbatim. [Singulart][matissepaintings] |
| Stein → Barnes directly (the prompt's framing) | **[CORRECTION — there is an intermediary owner]** | The chain is NOT Stein → Barnes. It is **Leo & Gertrude Stein (1906) → Leo alone (after the 1914 split) → on deposit / through Bernheim-Jeune & Paul Guillaume (1919) → Christian Tetzen-Lund, Copenhagen (1919) → Albert C. Barnes (through Paul Guillaume), purchase recorded Jan 27, 1923.** Do NOT write "Barnes bought it from the Steins." See §Provenance — this is exactly the kind of dropped-intermediary error the pipeline flags (cf. the *Demoiselles* Shchukin/La Roche catch). [Barnes-prov][Met-TL] |
| Barnes bought it in 1922 | **[DISPUTED date — give 1922–23]** | Tetzen-Lund's collection was forced apart by the **1922 collapse of the Danish Landmandsbanken**; he wrote to Barnes that year. Secondary sources say "1922, ~45,000 francs"; the **official Barnes record dates the purchase Jan 27, 1923**. Write "acquired by Barnes in 1922–23" or "purchase recorded January 1923," noting the bank-collapse trigger was 1922. [Met-TL][Barnes-prov] |
| The painting "began French modernism" / "is the first modern masterpiece" | **[FRAME — Western-scoped, paired claim]** | The defensible claim is the Barnes/Wikipedia one: "**Along with Picasso's *Les Demoiselles d'Avignon*, *Le bonheur de vivre* is regarded as one of the pillars of early modernism.**" Keep it paired and Western-scoped (the framing gate flags lone-genius / Eurocentric overclaim). [W-Bonheur] |
| The central ring of dancers "is" *The Dance* | **[DOCUMENTED-with-care]** | Correct to say the back-center ring of dancers **prefigures / becomes the basis for** Matisse's later painting ***The Dance* (1909–10)** — Wikipedia and SFMOMA both make this link. Don't say it *is* The Dance; say he later spun that one motif out into its own canvas. [W-Bonheur][SFMOMA] |
| The exact sources (Ingres, Cézanne, Bellini) | **[MIXED — one is firmly sourced, the rest are common attributions]** | The **firmly documented** source is **Agostino Carracci's engraving *Reciproco Amore* (Love in the Golden Age)** after Paolo Fiammingo — argued by **James Cuno** (*Burlington Magazine*, 1980) and **Thomas Puttfarken** (1982) on close compositional similarity (pastoral theme + the ring of dancers). **Cézanne's *Large Bathers* and Ingres's odalisques** (*Le Bain turc*, *La Grande Odalisque*) are very commonly cited and reasonable, but are **art-historical attribution, not Matisse-documented** — write "drew on" / "in the tradition of," not "Matisse copied." **Bellini is NOT in the standard records for this work** — drop it unless gate 1 sources it. [W-Bonheur][Cuno][lumen][grok] |
| It is US public domain / safe to inline | **[CONFIRMED — PD-US]** | Published 1906 (Salon des Indépendants, spring 1906) → pre-1930 → **US public domain**, regardless of Matisse's 1954 death (life+70 only governs EU reuse). A pre-1930 photographic reproduction is inlineable; the app already inlines other 1905–06 Matisse works on this basis. **NOTE:** the Barnes restricts *its own* photography and for decades barred color reproductions (Hilton Kramer called it "the least familiar of modern masterpieces" for this reason) — use a **Commons PD reproduction**, never a Barnes-licensed file. `rights: 'pd-us'`. [W-Bonheur][PD-rule] |

---

## 1. IDENTITY (stats block + header fields)

- **Title (FR):** *Le bonheur de vivre* — lowercase b/d/v in the French (Wikipedia/Barnes
  style). **Title (EN):** *The Joy of Life* (Barnes form: "*Le Bonheur de vivre, also
  called The Joy of Life*").
- **Artist:** **Henri Matisse** (French, **1869–1954**). `artistId: 'matisse'`.
- **Year:** **1905–06** — specifically painted **between October 1905 and March 1906**
  (Wikipedia infobox; Barnes "1905–1906"). Use **1905–06**; `year: 1906` for the numeric
  field (year of completion / first exhibition), matching the Cubism/Post-Imp convention
  of tagging the finished year. [W-Bonheur][Barnes]
- **Medium:** **Oil on canvas.**
- **Dimensions:** **176.5 × 240.7 cm = 69.5 × 94.75 in ≈ 5 ft 9½ in × 7 ft 10¾ in.**
  - `dimensions:` `'5 ft 9 1/2 in × 7 ft 10 3/4 in'` (H × W, the app's convention).
  - stats chip: `'5′9½″ × 7′10¾″'`.
  - `heroAspect`: W/H = 240.7 / 176.5 ≈ **1.36** (landscape). `heroFit: 'contain'`.
  - In-prose size cue: "roughly **six feet tall and nearly eight feet wide**" / "a wall-
    sized canvas." [W-Bonheur][Barnes]
- **Current location:** **The Barnes Foundation, Philadelphia, Pennsylvania** (moved from
  suburban Merion, PA, to central Philadelphia in **2012**). `location: 'The Barnes
  Foundation, Philadelphia'`. [W-Bonheur][Barnes]
- **Accession:** **BF719.**
- **Acquired (acquisition line):** "Acquired by Albert C. Barnes (through the dealer Paul
  Guillaume) in 1922–23; The Barnes Foundation, BF719." (Full chain in §Provenance.)
- **stats[]** (3 chips, STARRY_NIGHT pattern):
  - `{ v: '1905–06', k: 'Painted' }`
  - `{ v: '5′9½″ × 7′10¾″', k: 'Dimensions' }`
  - `{ v: 'The Barnes', k: 'Now at' }`
- **rights:** `'pd-us'`.

---

## 2. HOOK (one sentence — the reason it matters)

Pick / adapt one (storytelling-first, no overclaim):

> The grand Fauve Arcadia: a wall-sized field of nude figures lounging, piping, and
> dancing in colors no landscape ever wore — the canvas Leo Stein bought as the most
> important picture of its moment, and the one Picasso is said to have answered with
> *Les Demoiselles d'Avignon*.

Alt (tighter): *"A six-foot dream of careless pleasure painted in impossible color — the
high-water mark of Fauvism and the seedbed Matisse spent the next forty years mining."*

Load-bearing facts in the hook are all sourced below; the "Picasso answered it" clause is
**[DISPUTED]** → keep the hedge ("is said to have"). [W-Bonheur][Barnes-Lucy]

---

## 3. THE ~5 NARRATIVE SECTIONS (sourced beats per chapter)

### Section A — The setting: after the scandal, the statement (Salon, spring 1906)
- After the **1905 Salon d'Automne** Fauve scandal (the "wild beasts" room — covered in
  the Fauvism movement read; **reference, don't re-tell**, per nesting), Matisse answers
  not by retreating but by going **bigger**: one enormous, deliberate canvas. Wikipedia:
  "This painting seems to be Matisse's considered response to the hostility his Fauvist
  work had met with in the Salon d'Automne in 1905." [W-Bonheur]
- **Debut:** **Salon des Indépendants, Paris, spring 1906** — the un-juried show (no jury,
  no prizes; gloss it for the newcomer). Shown **~March 20 – April 20, 1906**. [W-Bonheur][Singulart]
- It was **the** sensation/scandal of that Salon — "cadmium colors and spatial distortions
  caused a public expression of protest and outrage"; some critics "even worried that this
  was the end of French painting." [W-Bonheur]
- `eyebrow: 'Paris · 1906'`, `dateLabel: 'Salon des Indépendants, spring 1906'`.

### Section B — The making: studies, a cartoon, and old masters behind a wild surface
- **Process:** Matisse "made many preparatory sketches of the figures and a **cartoon**
  (full-size compositional drawing — gloss it) of the composition." He built this picture;
  it is not improvised. [W-Bonheur]
- **The oil sketch (a great looking/teaching beat):** a ***Sketch for "Le Bonheur de
  vivre"*, 1905–06, is at SFMOMA** (acc. **91.160**, bequest of Elise S. Haas). SFMOMA's
  own note: the final painting is "**over four times as large**" as the study, and the
  sketch "looks toward **Neo-Impressionism** with its loose dabs of broken color, while the
  painting features **flat expanses of color** and a more linear treatment of the figures"
  — i.e. you can watch Matisse move from dots to flat fields between sketch and canvas.
  **A second sketch is held by the Barnes itself.** [SFMOMA]
- **Sources (use the [MIXED] verdict from §0):**
  - **DOCUMENTED:** Agostino **Carracci's engraving *Reciproco Amore* (Love in the Golden
    Age)**, after Paolo Fiammingo — argued by James **Cuno** (*Burlington Magazine*, 1980)
    + **Puttfarken** (1982): same pastoral-Golden-Age theme, same **ring of dancers in the
    background**. [W-Bonheur][Cuno]
  - **COMMON ATTRIBUTION (frame as "drew on / in the tradition of"):** **Cézanne's *Large
    Bathers*** (nudes in a built landscape — "in form and date, *Bonheur* is closest to
    Cézanne's last great bathers"); **Ingres's odalisques** (*Le Bain turc*, *La Grande
    Odalisque*) for the sensual arabesque; the **pastoral / Golden Age tradition** of
    Titian, Poussin, Watteau; Japanese woodcuts and Persian miniatures for flatness.
    [lumen][grok]
  - Since the 1980s historians (Werth, Bois, Wright) argue **source-hunting can distract
    from Matisse's own intervention** — note it lightly so the chapter isn't a citation
    contest. [W-Bonheur]
- `eyebrow: 'The making'`, `dateLabel: 'Oct 1905 – Mar 1906'`.

### Section C — What's on the canvas / how to LOOK (the core "make them see it" chapter)
- An **Arcadian landscape** — "brilliantly colored forest, meadow, sea, and sky and
  populated by nude figures both at rest and in motion." [lumen]
- **The cast (verifiable elements — see §6 annotations for placement):**
  - **Reclining nudes** lounging in the foreground left and center.
  - A **double-flute / pipe player** at **bottom center** (a piping figure — pan-pipes /
    aulos type). [lumen]
  - An **embracing / kissing couple** at **bottom right.** [lumen]
  - The **ring of dancers** in the **central background** — the motif that becomes *The
    Dance* (1909–10). [W-Bonheur][lumen]
  - A standing figure with **garlands of flowers**; a figure with **goats**; seated and
    standing nudes scattered through the meadow. (Common in the descriptions; verify each
    against the image at gate 1.)
- **The deliberate scale shifts** — a documented, findable feature: "The shift of scale
  between the **player of the double flute (bottom center)** and the **smooching couple
  (bottom right)** is plausible, if we take the musician to be a child, but what of the
  **giants just behind them**?" — figures are sized for composition, not perspective.
  [lumen]
- **Color cut loose:** "**Color is responsive only to emotional expression and the formal
  needs of the canvas, not the realities of nature**" — pink/orange ground, green and
  violet trees, a yellow-and-rose sky; large flat fields, no modeling. [lumen]
- **The arabesque / flattened space:** "serpentine **arabesques** that define the contours
  of the women" are "reiterated in the curvilinear lines of the trees"; the trees arch over
  like a stage curtain; space is shallow and decorative, not a deep window. [lumen][grok]
- `eyebrow: 'The canvas'`, `dateLabel: '5 ft 9½ in × 7 ft 10¾ in'`.

### Section D — Reception: the dogs, the dazzle, and Leo Stein's rescue
- **Public:** outrage, jeers, "the end of French painting." (§A.) [W-Bonheur]
- **Signac [DOCUMENTED quote — the centerpiece]:** the Neo-Impressionist who had mentored
  Matisse through pointillism (the 1904 Saint-Tropez summer; covered in the movement read —
  reference tersely) turned on this canvas in a private letter, **January 14, 1906**:
  > "Matisse, whose attempts I have liked up to now, seems to me to have gone to the dogs.
  > Upon a canvas of two-and-a-half meters, he has surrounded some strange characters with
  > a line as thick as your thumb. Then he has covered the whole thing with flat, well-
  > defined tints, which—however pure—seem disgusting."

  Frame it as Signac's reaction; the sting is that his *own* pure-color method had just
  been thrown overboard for flat fields. Source: Barr, *Matisse: His Art and His Public*
  (1951), p. 82, via Bois (1993), p. 18 n. 41. **Quote verbatim only this wording**; if the
  author trims, trim cleanly (don't paraphrase-as-quote). [W-Bonheur][Bois]
- **Leo Stein [DOCUMENTED-as-attribution]:** Leo and Gertrude Stein bought it; Leo is
  widely quoted as calling it **"the most important painting done in our time."** Matisse
  himself installed it in their apartment at **27 rue de Fleurus** at the close of the
  Salon — turning a scandal into the centerpiece of the avant-garde's most famous salon.
  Attribute loosely ("Leo Stein called it"); gate the exact wording. [Singulart][matissepaintings]
- `eyebrow: 'The reception'`, `dateLabel: '1906'`.

### Section E — Afterlife: from the Steins to the Barnes, and the answer Picasso made
- **Provenance arc** (full chain in §4) — Stein collection → the 1914 Stein split → Leo →
  Copenhagen (Tetzen-Lund) → **Albert Barnes, 1922–23.** Stress the Tetzen-Lund
  intermediary; do NOT collapse Stein→Barnes.
- **Barnes's wall:** held at the Barnes (Merion until 2012, then Philadelphia), which for
  decades barred color reproductions — **Hilton Kramer** called it "**the least familiar of
  modern masterpieces.**" A great irony: one of modernism's pillars, kept half-hidden.
  [W-Bonheur]
- **The Picasso answer [DISPUTED — frame it]:** many read **Picasso's *Les Demoiselles
  d'Avignon* (1907)** as his answer to the *Bonheur* sensation. Martha Lucy: Picasso, "in
  an effort to outdo Matisse in terms of shock value, immediately began work on …
  *Demoiselles*"; it "irritated" Matisse. **Cross-link, don't re-tell** — the *Demoiselles*
  work-read covers it (nesting). Phrase as "is widely read as," not "Picasso set out to
  beat Matisse." [Barnes-Lucy][W-Bonheur]
- **What Matisse did with it:** he spun the **back-center ring of dancers** out into its own
  canvas, ***The Dance* (1909–10)** — *Bonheur* is the seedbed of his next forty years.
  [W-Bonheur][SFMOMA]
- **Conservation footnote (optional, but a real fact):** the picture's heavy **cadmium-
  yellow** passages are chemically degrading (turning whitish/brown — cadmium sulfide →
  cadmium carbonate), studied by Barnes/Winterthur/UDelaware conservators. The color we see
  is already not quite the color of 1906. (Parallels the Grande Jatte zinc-yellow fade — a
  good cross-work comparison.) [W-Bonheur][UDaily]
- `eyebrow: 'After'`, `dateLabel: '1906–today'`.

---

## 4. PROVENANCE CHAIN (the `provenance[]` array — owners, places, dates, prices)

**Handle with care: NOT a direct Stein → Barnes sale.** Verified chain (Barnes record +
Met Tetzen-Lund index; minor date discrepancies noted inline). [Barnes-prov][Met-TL][W-Bonheur][Grok-prov]

1. **1906 — Henri Matisse (the artist), Paris.** Painted Oct 1905 – Mar 1906; first shown
   at the Salon des Indépendants, spring 1906. `price: null`.
2. **1906–1914 — Leo & Gertrude Stein, Paris (27 rue de Fleurus).** Bought from / at the
   1906 Salon; Matisse installed it in their apartment. The American expatriate siblings
   were the avant-garde's key early patrons. Leo is widely quoted calling it "the most
   important painting done in our time." `price: null` (purchase price from the artist not
   firmly recorded in this pass).
3. **1914–1919 — Leo Stein (after the siblings divided the collection).** On the 1914
   Stein split Leo took it; sources indicate it was **on deposit at / handled through
   Galerie Bernheim-Jeune, Paris (c.1914–19)**. `price: null`.
4. **1919 — Bernheim-Jeune → Paul Guillaume (dealer), Paris (August 1919) → Christian
   Tetzen-Lund, Copenhagen (1919).** The Danish grain merchant and major Matisse/Picasso
   collector acquires it. `price: null` (not firmly sourced here). [Met-TL][Barnes-prov]
5. **1922–23 — Albert C. Barnes, through the dealer Paul Guillaume.** The **1922 collapse
   of the Danish Landmandsbanken** forced Tetzen-Lund to break up his collection; he wrote
   to Barnes offering Matisse and Picasso works. Secondary sources: "1922, **~45,000 francs**
   (≈ **$3,700** at the 1922 rate)"; **official Barnes record: purchase recorded January
   27, 1923.** Render as "acquired 1922–23 (bank-collapse forced sale; recorded Jan 1923),
   ~45,000 francs." `price: '~45,000 francs (≈ $3,700)'`. [Met-TL][Barnes-prov]
6. **1923–today — The Barnes Foundation** (Merion, PA → Philadelphia, 2012). **BF719.** On
   permanent view. `museum: true`, `price` from prior row, or `note` carries the move.

> Author note: rows 3–4 (the Leo-alone / Bernheim-Jeune / Guillaume / Tetzen-Lund segment)
> have the softest dates — keep them factual but lightly hedged ("on deposit," "by 1919");
> the load-bearing correction is simply that **a Copenhagen collector sat between the Steins
> and Barnes**, and the **1922 bank collapse** is the documented trigger. Gate 1 should
> confirm the Jan-27-1923 vs "1922" date against the Barnes record.

---

## 5. KEY FIGURES (the `figures[]` nameplates)

1. **Henri Matisse** (1869–1954) — *The painter.* The Fauve leader making his biggest,
   most deliberate statement. [W-Bonheur]
2. **Leo Stein** — *Buyer; called it the painting of its time.* The connoisseur half of
   the Stein siblings; the early eye that grabbed it from the Salon. [Singulart]
3. **Gertrude Stein** — *Co-owner; the rue de Fleurus salon.* Writer; with Leo made 27 rue
   de Fleurus the meeting-ground of Matisse, Picasso, and modern art's first audience.
   (Framing: give her agency as collector/host, not a prop.) [W-Bonheur][Singulart]
4. **Paul Signac** — *The mentor who recoiled.* Neo-Impressionist; had guided Matisse into
   pointillism, then wrote the "gone to the dogs" letter when Matisse abandoned it. [W-Bonheur][Bois]
5. **Albert C. Barnes** — *Bought it for Philadelphia (1922–23).* Chemist-collector; placed
   it at the Barnes, where it stayed half-hidden for decades. [Barnes-prov]
6. **Pablo Picasso** — *The rival who answered it.* Read (disputed-intent) as having taken
   up the gauntlet with *Les Demoiselles d'Avignon*, 1907. [Barnes-Lucy]

(Optional 7th: **Christian Tetzen-Lund**, Danish collector / the intermediary owner —
include if the provenance beat wants a face.)

`palette` values: author may reuse the warm Fauve register (rose/orange/green/violet) per
the STARRY_NIGHT pattern; not load-bearing facts.

---

## 6. "LOOK CLOSER" — 6 annotations (`{label, where, detail}`)

**Each is a verifiable claim about what is literally on the canvas** — gate-1 must check
`where` (left/right/center) against the actual painting image, exactly like prose
(`audits/art-content-pipeline.md`: the *Demoiselles* "two faces in profile" miss). `where`
is a written location phrase; NO crop coordinates. Placements below are from the standard
descriptions and the SFMOMA/lumen accounts — **re-confirm each against the Commons image at
gate 1.**

1. **The ring of dancers that became a painting** — `where:` "Center background, on the far
   meadow, a circle of small figures joining hands." `detail:` This little round-dance in
   the distance is the seed of an entire other canvas: Matisse pulled it out and blew it up
   into *The Dance* (1909–10), one of the most famous images he ever made. It is also the
   element art historians tie most firmly to his documented source — Carracci's engraving
   *Love in the Golden Age*, which has the same ring of dancers in the back. [W-Bonheur][SFMOMA][Cuno]

2. **The piper at the bottom** — `where:` "Bottom center, a seated nude playing a double
   pipe / flute." `detail:` A figure plays a double flute — the pastoral note that places
   the whole scene in Arcadia, the mythic countryside of shepherds and ease. Watch the
   scale: read as a child, the player makes sense beside the couple to the right; read as an
   adult, the figures behind become giants. The mismatch is deliberate. [lumen]

3. **The reclining nudes** — `where:` "Foreground, left and center, figures lying stretched
   out on the rose-and-orange ground." `detail:` The lounging nudes are pure leisure — the
   "joy of life" of the title is bodily ease, not narrative. Their contours are long
   serpentine curves (arabesques); Matisse cared more about that flowing line than about
   anatomy, which is why limbs lengthen and bend past what a real body does. [lumen][grok]

4. **Color that answers to nothing in nature** — `where:` "Everywhere — the orange-and-pink
   earth, the violet and green tree trunks, the lemon-and-rose sky." `detail:` There is no
   real meadow this color. The ground runs hot pink and orange, tree trunks go violet, the
   sky is yellow shading to rose. Color here serves feeling and the design of the surface,
   not the look of any real place — the core Fauve move, at its grandest scale. [lumen]

5. **The embracing couple** — `where:` "Bottom right, a pair of nudes locked together."
   `detail:` Off in the lower-right corner two figures embrace — the frankly sensual note
   that, with the lounging and the piping, makes the picture a hymn to pleasure. Their small
   size against the looming figures just behind them is one of the clearest spots to catch
   Matisse sizing figures for the composition, not for distance. [lumen]

6. **The trees that arch like a curtain** — `where:` "Upper edges, left and right, two large
   trees whose foliage bends inward over the scene." `detail:` The big trees don't recede
   into depth; their curved trunks and overhanging branches arc inward and frame the meadow
   like a stage curtain, pressing the whole scene flat against the surface. The same
   serpentine line that shapes the bodies shapes the trees — Matisse rhymes figure and
   landscape so the canvas reads as one woven, shallow pattern, not a deep window. [grok][lumen]

> Annotation alternates if any of the above fails the image check at gate 1: the **garland-
> bearing standing figure** (commonly center-left), and the **goats / standing figure with
> animals** (often upper area). Verify presence/placement before substituting.

---

## 7. LINEAGE (the `lineage` block)

**Parents (what fed it):**
- **Cézanne's *Large Bathers*** (`mode: 'art'`) — nudes constructed into landscape;
  closest in form and date. [lumen]
- **Ingres / the odalisque & arabesque** (`mode: 'art'`) — the sensual flowing contour.
  [lumen][grok]
- **The pastoral / Golden Age tradition** (`mode: 'art'`) — Carracci/Fiammingo (documented),
  Titian, Poussin, Watteau; the Arcadia subject. [W-Bonheur][Cuno]
- (Deeper: Signac/Neo-Impressionism is the thing he's reacting *against* by going flat —
  good for the prose, optional as a chip.)

**Children (what it led to):**
- ***The Dance* (1909–10)** (`mode: 'art'`) — the dancers' ring grown into its own canvas.
  [W-Bonheur][SFMOMA]
- **Picasso's *Les Demoiselles d'Avignon* (1907)** (`mode: 'art'`) — read as the rival's
  answer (disputed intent — keep the lineage chip but hedge in prose). [Barnes-Lucy]
- **Matisse's flat-color modern painting** / the next forty years (`mode: 'art'`) — *The Red
  Studio*, the cut-outs; the seedbed claim.

---

## 8. NESTING — what the era/movement reads already cover (go DEEPER, don't duplicate)

- The **Modern era** read and the **Fauvism movement** read both already narrate the **1905
  Salon d'Automne** scandal and the "wild beasts" naming. **Reference tersely; this work
  read opens AFTER the scandal**, on the *answer* to it. (Nesting gate 7.)
- The **Fauvism movement** read already lists *Le Bonheur de vivre* as the movement's "high-
  water canvas" (see `fauvism-factpack.md` §canon #5) — the work read goes DEEPER:
  the studies/cartoon + SFMOMA sketch, the Carracci source argument, the full Stein →
  Tetzen-Lund → Barnes provenance, the deliberate scale shifts, the cadmium-yellow decay.
- The ***Les Demoiselles d'Avignon* work read** covers Picasso's canvas in depth —
  **cross-link, do not re-tell** the Demoiselles itself; only carry the "answer to *Bonheur*"
  beat (hedged). (Consistency: state the *Demoiselles* date as **1907** to match.)

---

## 9. VOICE / FRAMING NOTES (WRITING-RULES + art voice locks)

- **Make the reader SEE the color** — the hot-pink ground, the violet trees, the ring of
  dancers; this is the "joy" the title promises. Looking is the point of the work read.
- **Inline-define** for the zero-knowledge reader: *Salon des Indépendants* (un-juried open
  show), *Fauvism* (terse callback), *Arcadia / pastoral* (mythic idyllic countryside),
  *arabesque* (a flowing serpentine line), *cartoon* (full-size preparatory drawing),
  *odalisque* (a reclining harem-nude motif), *Neo-Impressionism / pointillism* (terse
  callback), *cadmium yellow*.
- **Framing (the gate's targets):** give **Gertrude Stein** real agency (collector/host, not
  a prop — the framing gate caught this on the Horta work). Keep "pillar of early modernism"
  **paired with the *Demoiselles* and Western-scoped** — don't let it become "modern art
  begins here." The Picasso-rivalry beat is **interpretation** — hedge it. No invented
  quotes: the **only verbatim quotes** are **Signac's "gone to the dogs" letter** (gated to
  the Barr/Bois wording) and, if used, **Leo Stein's "most important painting of our time"**
  (attribute loosely / let gate 1 confirm wording) and **Kramer's "least familiar of modern
  masterpieces."**
- Storytelling first; accuracy a hard floor.

---

## Source key

- **[W-Bonheur]** Wikipedia, *Le bonheur de vivre* (raw wikitext pulled 2026-06-23): infobox
  dims/dates, Salon 1906, Signac quote + Barr/Bois footnote, Carracci/Cuno/Puttfarken
  inspiration, *The Dance* link, Picasso/Lucy "outdo Matisse" + "irritated," "pillar of early
  modernism," Kramer "least familiar," cadmium-yellow conservation.
- **[Barnes]** Barnes Foundation collection online, *Le Bonheur de vivre, also called The Joy
  of Life*, BF719 (collection.barnesfoundation.org/objects/7199). (Record page is JS-rendered;
  identity facts corroborated via Wikipedia infobox + Barnes press text.)
- **[Barnes-Lucy]** Martha Lucy (Barnes assoc. curator), *Matisse Mystery* (Barnes Foundation),
  archived — the Picasso "outdo Matisse … shock value" + "irritated" reading.
- **[Barnes-prov] / [Grok-prov]** Provenance chain (Stein → Leo → Bernheim-Jeune/Guillaume →
  Tetzen-Lund 1919 → Barnes via Guillaume, Jan 27 1923): Barnes record as summarized in
  search returns + Grokipedia *Le bonheur de vivre* provenance section.
- **[Met-TL]** The Met, Leonard A. Lauder Research Center, Modern Art Index Project —
  *Christian Tetzen-Lund* (metmuseum.org/.../tetzen-lund): the 1922 Landmandsbanken collapse,
  forced dispersal, sale to Barnes via Guillaume. (Fetch 429'd this pass; facts come through
  search summary — gate 1 should re-fetch to confirm dates/price.)
- **[SFMOMA]** SFMOMA, *Sketch for "Le Bonheur de vivre,"* 1905–06, acc. 91.160 (Haas bequest):
  study is Neo-Impressionist/dotted, painting flat; painting "over four times as large"; a
  second sketch at the Barnes; influences of academic painting + Greek vases.
- **[lumen]** Lumen Learning / SUNY Art History II, *Matisse, Bonheur de Vivre* (mirrors
  Smarthistory): figure descriptions (flute player bottom center, kissing couple bottom right,
  giants behind), scale-shift quote, "color responsive only to emotional expression," arabesque,
  Cézanne/Ingres/Titian sources.
- **[Cuno]** James B. Cuno, "Matisse and Agostino Carracci: A Source for the *Bonheur de
  Vivre*," *The Burlington Magazine* 122, no. 928 (Jul. 1980): 503–505; with Thomas Puttfarken,
  "Mutual Love and Golden Age," *Burlington Magazine* 124 (Apr. 1982): 203–208.
- **[Bois]** Yves-Alain Bois, "Matisse and 'Arche-Drawing,'" in *Painting as Model* (MIT Press,
  1993), p. 18, n. 41 — sources the Signac quote to a letter of 14 Jan 1906, quoted in Barr,
  *Matisse: His Art and His Public* (MoMA, 1951), p. 82.
- **[Singulart]** Singulart Magazine, *The Joy of Life: Matisse's Early Modern Masterpiece* —
  Salon dates (Mar 20–Apr 20, 1906), rue de Fleurus install, Leo Stein "most important painting."
- **[matissepaintings]** matissepaintings.org / henrimatisse.org, *Le Bonheur de Vivre / Joy of
  Life* — corroborating (Leo Stein quote, Picasso response). Secondary; use only as corroboration.
- **[grok]** Grokipedia, *Le bonheur de vivre* — corroborating on sources (Ingres, Cézanne,
  Watteau, Japanese/Persian) and arabesque/trees; secondary.
- **[UDaily]** University of Delaware Daily, "Materials science reveals clues about pigment
  degrading on painting" — the cadmium-sulfide → cadmium-carbonate degradation study.
- **[PD-rule]** US copyright: published pre-1930 = US public domain (life+70 governs EU only);
  cf. `fauvism-factpack.md` §4 image-rights rule. The Barnes restricts its own photography → use
  a Commons PD reproduction.

---

## SUMMARY + HANDLE-WITH-CARE (return to caller)

**The fact pack covers all required surfaces** (identity, hook, 5 sections, 6 look-closer
annotations, provenance, key figures, lineage) — all sourced; quotes flagged
DOCUMENTED/LEGEND/DISPUTED.

**Two notable legend-vs-fact catches:**
1. **Provenance is NOT Stein → Barnes.** A Copenhagen collector, **Christian Tetzen-Lund**,
   owned it between the Steins and Barnes (1919–22); Barnes bought it via dealer **Paul
   Guillaume** after the **1922 Landmandsbanken bank collapse** forced the sale (recorded
   **Jan 27, 1923**, ~45,000 francs). Do not write a direct Stein-to-Barnes sale.
2. **Signac "gone to the dogs" = DOCUMENTED** (private letter, 14 Jan 1906, via Barr/Bois —
   quote it, but attribute it); **Picasso "out-shocking Matisse" with the *Demoiselles* =
   DISPUTED interpretation** (Barnes curator Martha Lucy's reading, not documented intent —
   hedge as "is widely read as"). Bonus: of the named sources, only **Carracci's *Love in
   the Golden Age*** is firmly documented (Cuno/Puttfarken); **Ingres/Cézanne** are common
   attributions, and **Bellini is not in the records** — drop it.
