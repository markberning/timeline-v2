# Fact pack — SURREALISM (kind: MOVEMENT, Modern era, 1924 → c.1950s; Paris-centered, with a WWII exile chapter in New York)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces to a
sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-18; the
fact-checker gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Surrealism movement** read: `/art/mod/surr` → `…/s/{sectionId}`. (Coordinator
  registers the `surr` const in `src/lib/art-content.ts`: range `1924–c.1950`, Modern
  era. **Card-image candidate** = the single biggest IMAGE-RIGHTS headache of any
  movement in this app, so the card MUST be a US-PD work. The cleanest iconic card =
  **Giorgio de Chirico, *The Song of Love*, 1914** (MoMA; the metaphysical precursor that
  is the visual DNA of Surrealism and is cleanly US-PD, published well before 1930). A
  strong second = **Joan Miró, *Harlequin's Carnival*, 1924–25** (the automatist-stream
  founding picture) — BUT Miró d.1983, so verify the specific Commons file is a genuine
  pre-1930 reproduction at gate 6. Do NOT default the card to Dalí's *Persistence of
  Memory* (1931, in-copyright) or Magritte's pipe (1929, borderline) — they are NOT
  inlineable. See §4.)
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Movement-page metadata (the break block, the
  manifesto block, the canon list, lineage, artists row, parallels) the coordinator
  assembles from this pack; per-work DEEP reads come in a later pass.

## Throughline (the one idea)
Where Dada burned art down with a laugh, Surrealism rebuilt on the ashes with a program:
**the unconscious mind is a place worth painting, and the way in is the dream and the
accident.** In 1924 the poet **André Breton** wrote a manifesto declaring Surrealism to
be **"pure psychic automatism"** — making art with the rational mind switched off, the
hand or pen running free, the way Freud's patients free-associated on the couch. Out of
that one idea grew two streams that look nothing alike. The **automatists** (Miró,
Masson, early Ernst) let the line wander and chance do the composing, and ended up at
abstraction. The **dream-image painters**, also called **veristic** Surrealists (Dalí,
Magritte, Tanguy), painted impossible scenes with photographic, hyper-real precision: a
clock melting over a branch, a pipe that says it is not a pipe. The movement idolized
"the marvelous," "convulsive beauty," desire, and the irrational, and it treated **woman**
as muse and dream-object while too often shutting real women artists out of the room.
Breton ran it like a church, with himself as "the Pope of Surrealism," handing out
excommunications (Dalí, Artaud, Soupault) and convening kangaroo-court trials. The war
scattered the group into exile in New York, where their automatism lit the fuse for
**Abstract Expressionism**. Surrealism never really ended; it leaked into film,
advertising, magical realism, and pop culture so completely that "surreal" is now an
everyday word. Hold both halves: a genuine attempt to map the unconscious, and a
personality cult with a manifesto.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| Breton invented/coined the word "surréalisme" | **MYTH — Breton ADOPTED it; the poet Guillaume Apollinaire coined it in 1917** | Apollinaire used "sur-réalisme / surréalisme" in **March 1917** in the program note for the ballet ***Parade*** and as the subtitle ("**drame surréaliste**") of his play ***Les Mamelles de Tirésias*** (premiered Paris, 24 June 1917). Breton took the existing word and gave it his own definition in 1924, explicitly tipping his hat to Apollinaire in the manifesto. State it as: Breton **founded the movement** and **wrote the manifesto**, but the **word is Apollinaire's, 1917**. [W-SurrManifesto][Tate-Surr][Brit-Manifeste] |
| Dalí said "I am Surrealism" | **DOCUMENTED (the gist), exact wording varies** | When Breton's group moved to expel him, Dalí retorted **"Le surréalisme, c'est moi"** ("Surrealism, it's me" / "I myself am Surrealism"), echoing Louis XIV's "L'État, c'est moi." Present it as the famous Dalí line; the precise English varies by translation. [Collector-Dali][NWEnc-Dali] |
| Breton expelled Dalí; "Avida Dollars" | **DOCUMENTED** | Breton **expelled Dalí from the Surrealist group** (the break built through the 1930s, formalized by **1939**) over Dalí's refusal to condemn — even his apparent fascination with — Hitler and his support for Franco, plus his open commercialism. Breton coined the mocking anagram **"Avida Dollars"** (rearranges the letters of **Salvador Dalí**; reads in French as *avide à dollars*, "eager for dollars"). Dalí's quip: the anagram had "a certain magical value," because after he got it "the rain of dollars has not stopped." [Collector-Dali][Artnet-Avida][NWEnc-Dali] |
| Breton = "the Pope of Surrealism" | **DOCUMENTED nickname (mocking), not a self-title to state as fact** | A widely-used **epithet** for Breton, reflecting his disciplinarian control of who was "in" and his serial expulsions (sharpest in the **Second Manifesto of Surrealism, 1930**, which purged members). Present it as the nickname he EARNED, attributed; don't assert he literally crowned himself (one early account, Victor Crastre, does say he half-styled himself that way in 1924 — keep that as a colorful aside, attributed). [Cake-Pope][Surrealists-Pope][Artforum-Breton] |
| Magritte's *Ceci n'est pas une pipe* "proves" the pipe isn't real | **DOCUMENTED title + reading** | ***The Treachery of Images*** (*La trahison des images*), 1929: a painted pipe over the cursive line **"Ceci n'est pas une pipe"** ("This is not a pipe"). Magritte's point: the painting is an *image* of a pipe, not a pipe — you cannot stuff it. Tell it straight; it is the cleanest one-line lesson in the gap between word, image, and thing. ⚠️ **Image-rights: 1929, Magritte d.1967 → IN COPYRIGHT, not inlineable.** [Smarthistory-Pipe][LACMA-Pipe][W-Pipe] |
| Dalí's melting clocks were inspired by Camembert cheese | **DOCUMENTED as Dalí's OWN account — flag it as his story, not neutral fact** | Dalí himself said the soft watches in ***The Persistence of Memory*** (1931) came from contemplating runny **Camembert** at the end of a meal. It's a great anecdote, but it is **Dalí's self-mythologizing** (he was a relentless self-promoter), so attribute it to him, don't state it as plain cause. [ArtObj-Dali][W-Persistence] |
| The lobster-telephone / Mae West lips sofa stories | **DOCUMENTED objects, but they post-date v1's core and are IN COPYRIGHT** | Dalí's ***Lobster Telephone*** (1938, with Edward James; Tate) and the ***Mae West Lips Sofa*** (c.1937–38) are real Surrealist objects, often retold. Mention only in passing if at all; **both are 1937–38 and in copyright (Dalí d.1989) → NOT inlineable.** Don't lean a chapter on them. [Tate-Surr] |
| Automatism = Breton's invention | **HEDGE — it has roots in Freudian free association + earlier automatic writing/spiritualism** | "Automatic writing" predates Surrealism (19th-c. spiritualist mediums; and Freud's free-association method is the direct model). Breton's contribution was to make **"psychic automatism"** the defining method of an ART movement. State it as: Breton borrowed the idea (from Freud's couch and earlier automatic writing) and turned it into a studio technique. [Tate-Surr][PoetsMod-Manifesto] |
| There is one "first Surrealist painting" | **HEDGE every "first"** | Candidates get tossed around (Ernst's *Celebes* 1921 as proto; Miró's *Harlequin's Carnival* 1924–25; Masson's 1924 automatic drawings). Surrealism as an organized movement starts with the **1924 manifesto**, but the *painting* grew out of Dada and de Chirico, so don't crown a single "first" canvas. [W-Harlequin][MoMA-Masson] |

---

## 1. THE MOVEMENT STORY (Dada → manifesto → two streams → the women → exile → afterlife)

### Out of Dada (the handoff — reference the DADA read, don't re-tell it)
- Paris Dada split between **Tristan Tzara** (keep it pure nonsense) and **André Breton**
  (make it serious). Breton won the Paris circle. **Dada effectively ends c.1923–24,
  absorbed by the movement it hatched.** Surrealism keeps Dada's chance, collage, and
  provocation but aims them at the **unconscious and the dream** instead of pure
  negation. (The DADA read covers this break in full — just hand off; do not re-narrate.)
  [DADA-pack][Tate-Surr]
- **The word is Apollinaire's (1917), not Breton's** — see §0. [W-SurrManifesto]

### The 1924 manifesto and the program
- **The *Manifesto of Surrealism* is published 15 October 1924, Paris** (Éditions du
  Sagittaire), bound with Breton's prose-poem *Poisson soluble* (*Soluble Fish*). It
  defines Surrealism as **"pure psychic automatism"** (see §3 for the exact text).
  [W-SurrManifesto][Brit-Manifeste]
- **The Bureau of Surrealist Research** (the "Centrale Surréaliste," 15 rue de Grenelle)
  opens in Paris in **October 1924**, and the journal ***La Révolution surréaliste***
  begins in December 1924 — the movement has an HQ, an organ, and a pope. [W-SurrManifesto]
- **Freud is the patron saint.** Breton, a former medical orderly who used Freud's methods
  on shell-shocked soldiers in WWI, builds the whole program on **Sigmund Freud's**
  psychoanalysis: the unconscious, dreams as the "royal road" to it, and **free
  association** (the model for automatism). [Tate-Surr][PoetsMod-Manifesto]

### The two streams
- **Stream 1 — Automatism (the wandering hand → abstraction).** Let the unconscious draw.
  - **André Masson** — pioneered **automatic drawing** from 1924: pen running with no plan,
    no conscious control; *La Révolution surréaliste* published them from 1925. [MoMA-Masson]
  - **Joan Miró** — *Harlequin's Carnival* (1924–25), painted (he said) out of hunger
    hallucinations, dancing biomorphic shapes; the founding picture of the automatist
    stream. [W-Harlequin][Buffalo-Harlequin]
  - **Max Ernst** — invented **frottage** (1925; French *frotter*, "to rub"): laying paper
    over textured wood/floor and rubbing with graphite so an image "surfaces" by chance,
    codified in the portfolio ***Histoire Naturelle*** (1926). Also **grattage** (scraping
    paint) and his Dada-bred **collage**. [MoMA-ErnstHistNat][UO-Frottage]
- **Stream 2 — Dream image / "veristic" (impossible scenes, hyper-real finish).** Paint
  the dream as if it were a photograph.
  - **Salvador Dalí** — joined ~1929; his **"paranoiac-critical method"** (deliberately
    inducing a paranoid, double-image way of seeing). ***The Persistence of Memory***
    (1931), the melting clocks. [W-Persistence][ArtObj-Dali]
  - **René Magritte** — Belgian; deadpan, sign-painter-flat scenes that short-circuit
    logic. ***The Treachery of Images*** (1929, the pipe); later ***The Son of Man***
    (1964, the green apple over a bowler-hatted face). [Smarthistory-Pipe][W-SonOfMan]
  - **Yves Tanguy** — self-taught; took up painting after seeing a de Chirico in a window
    in 1923; eerie deep-space "landscapes" of biomorphic stones. Breton thought him the
    artist "most faithful to Surrealist precepts." [Brit-Tanguy]

### The women (a framing axis — see §"honesty")
- The movement **worshipped "woman"** as muse, the **femme-enfant** (woman-child), and
  dream-object, while largely treating women as **lovers and models, not colleagues.** Yet
  there were serious women artists, mostly arriving via relationships with the men and then
  far outgrowing the label: **Leonora Carrington**, **Leonor Fini**, **Remedios Varo**,
  **Dorothea Tanning**, **Kay Sage**, **Meret Oppenheim**, **Claude Cahun**, and **Frida
  Kahlo** (whom Breton claimed for Surrealism but who **rejected the label**: "I never
  painted dreams. I painted my own reality."). Name them as artists; name the sidelining.
  [Sothebys-Women][Artsy-Women][Tate-Surr]

### War and exile in New York (1939–1945)
- The fall of France scattered the group. With money from **Peggy Guggenheim** and others
  (and the rescue network of **Varian Fry** in Marseille), Breton, **Ernst, Masson,
  Tanguy, Matta, Seligmann, Dalí** and more reached **New York**. [Artforum-Emigres][Princeton-Surr]
- **"First Papers of Surrealism"** (New York, autumn 1942) — the émigré show whose title
  evokes an immigrant's first citizenship papers; **Marcel Duchamp** webbed the galleries
  with a mile of string (*His Twine*) so visitors peered at the art through it.
  [Breton-FirstPapers][Artforum-Emigres]
- The exiles' **automatism** — making marks straight from the unconscious — landed on young
  Americans (Pollock, Gorky, Motherwell) and helped ignite **Abstract Expressionism**:
  automatism became gesture. [Artforum-Emigres][Tate-Surr]

### Afterlife
- Breton returned to Paris in 1946 and kept the group going, but its center of gravity had
  shifted; postwar, **Abstract Expressionism** eclipsed it as the avant-garde. Surrealism's
  real victory is diffusion: it soaked into **film** (Buñuel & Dalí's *Un Chien andalou*
  1929; later Lynch, etc.), **advertising and fashion**, **magical realism** in literature,
  and the everyday word "surreal." [Tate-Surr][Artforum-Emigres]

**Why it mattered (one paragraph for the writer):** Surrealism took Dada's wreckage and
gave it a destination — the unconscious. It legitimized the **dream, the accident, and
the irrational** as serious artistic subjects, invented working methods (automatic
drawing, frottage, the paranoiac-critical) that fed straight into Abstract Expressionism's
gesture, and produced the most quoted images in modern art (a melting clock, a pipe that
denies being a pipe). It also shows the avant-garde at its worst: a charismatic leader
running a movement like a sect, idolizing "woman" while shutting women out, and tangling
with the politics of the 1930s. Both are the story. [Tate-Surr][Artforum-Breton]

---

## 2. THE BREAK BLOCK (`whatChanged`) — art turns inward, to the unconscious

The concrete change, stated plainly (not "revolutionary"):

> **Before:** even the radical pre-1924 movements painted the OUTSIDE world or the
> picture itself. Cubism broke the visible world into planes; the Impressionists chased
> light; even Dada's targets were public — the gallery, the war, the bourgeois. Whatever
> they did, they worked with the conscious, deciding mind in charge.
>
> **After (Surrealism):** art goes after the INSIDE — the unconscious, the dream, desire,
> the irrational — and deliberately switches off the conscious mind to get there. Two
> methods do it. **(1) Automatism:** let the hand or pen run with no plan and no
> editing, the way Freud's patients free-associated, so chance and the unconscious do the
> composing (Masson's automatic drawings, Miró, Ernst's rubbed-and-scraped *frottage*).
> **(2) The dream image:** paint an impossible scene with hyper-real, photographic
> precision, so the irrational looks utterly convincing (Dalí's melting clocks, Magritte's
> pipe-that-is-not-a-pipe, Tanguy's stone-littered nowhere-lands). The subject of art is
> no longer what you see; it is what you dream.

### Before/after pair (born-verified candidates — RIGHTS-FLAGGED)

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — art works the visible world / the picture, conscious mind in charge** | Cleanest is a work the adjacent reads already use: a **Cubism** canvas (broken visible world) OR the **de Chirico** itself read as the hinge — but for a clean "before the dream" foil, point to a CUBIST work (visible world fractured but still the outside world). | Shows that even radical modern art before 1924 was about the seen world or the picture, not the dreaming mind. | **PD-US** if pre-1930 (verify the specific file). |
| **AFTER — art works the unconscious / the dream** | **Giorgio de Chirico, *The Song of Love*, 1914** (MoMA) as the metaphysical doorway, OR **Joan Miró, *Harlequin's Carnival*, 1924–25** (automatist stream). **Avoid** Dalí's *Persistence of Memory* (1931) here — it is the obvious icon but it is **IN COPYRIGHT and NOT inlineable.** | De Chirico's eerie, dreamlit empty square is the literal visual DNA of Surrealism and is cleanly US-PD; Miró's carnival shows automatism's playful chance. | **De Chirico 1914 = PD-US (pre-1930), inlineable** (de Chirico d.1978, so verify the file is a genuine pre-1930 reproduction). **Miró 1924–25 = pre-1930 reproduction US-PD but Miró d.1983 → gate-6 verify.** |

**Recommended pairing for the break block:** a **Cubist canvas (the outside world,
fractured)** → **de Chirico, *The Song of Love*, 1914 (the dream world)**. That pair makes
the inward turn visible with two cleanly US-PD images and DODGES the in-copyright Dalí/
Magritte icons. If you want the "let chance compose it" point instead, use **Miró's
*Harlequin's Carnival*** as the after (rights-verify the file). ⚠️ Do NOT build the break
block on *Persistence of Memory* or *The Treachery of Images* — they cannot ship as images.

---

## 3. THE MANIFESTO BLOCK (`manifesto`) — PRESENT (`absent: false`)

Surrealism is a manifesto movement by definition: Breton wrote the document that named and
founded it. The block's job is to quote it **accurately**, name the document exactly, pin
every quote to a named translation, and give an openly-readable source URL.

### The document (verified publication details)
- **André Breton, *Manifeste du surréalisme* (*Manifesto of Surrealism*)** — published
  **15 October 1924, Paris**, by **Éditions du Sagittaire**, bound with the prose-poem
  *Poisson soluble* (*Soluble Fish*). The founding document of the movement. [W-SurrManifesto][Brit-Manifeste]
- **Define automatism precisely:** Breton's term is **"psychic automatism"** (*automatisme
  psychique*) — producing art (writing, drawing, "any other manner") with the conscious,
  rational, editing mind switched off, so thought flows unsupervised. Modeled on Freudian
  **free association**. [PoetsMod-Manifesto][Tate-Surr]

### A note on translation (load-bearing for the fact-checker)
The standard scholarly English is **Richard Seaver & Helen R. Lane, trans., *Manifestoes
of Surrealism*** (University of Michigan Press, 1969 — the volume the coordinator brief
names). ⚠️ **The exact-wording quotes below come from the openly-readable A. S. Kline
translation** (poetsofmodernity.xyz, confirmed open), which differs in wording from
Seaver/Lane. **Gate any PRINTED quote against ONE named translation and name which** —
do NOT mix Kline and Seaver/Lane in one quote. (Seaver/Lane renders the core definition
as: "Pure psychic automatism, by which one proposes to express … the actual functioning
of thought.") [SeaverLane][PoetsMod-Manifesto]

### Accurately-quoted lines (verify wording against ONE named translation at gate 1)

From **Breton, *Manifesto of Surrealism* (1924)** — wording per the open-access A. S. Kline
translation at poetsofmodernity.xyz (the dictionary-style definition Breton wrote into the
manifesto):

  > "SURREALISM, n. m. Pure psychic automatism by means of which one intends to express,
  > either verbally, or in writing, or in any other manner, the actual functioning of
  > thought. Dictated by thought, in the absence of any control exercised by reason, free
  > of any aesthetic or moral concern." [PoetsMod-Manifesto]

  > "Surrealism is based on the belief in the superior reality of certain forms of
  > previously neglected association, in the omnipotence of dream, in the disinterested
  > play of thought." [PoetsMod-Manifesto]

⚠️ **Wording varies by translator.** Kline says "Pure psychic automatism **by means of
which one intends to express**"; Seaver/Lane says "**by which one proposes to express**";
both are legitimate, but pick ONE named source per quote and SAY which one. Do not mix.

### Born-verified OPENLY-READABLE source URL for the block's "source link"
- **Breton, *Manifesto of Surrealism* (1924), FULL English text, opens freely, no
  login/paywall:** `https://www.poetsofmodernity.xyz/POMBR/French/Manifesto.php` ✅
  (fetched and confirmed open 2026-06-18; full text; translator **A. S. Kline**; contains
  both quotes above). [PoetsMod-Manifesto]
- A second openly-readable copy (a university course PDF) is
  `https://www2.hawaii.edu/~freeman/courses/phil330/MANIFESTO%20OF%20SURREALISM.pdf` —
  this is the **Seaver/Lane** translation; useful as the canonical-print check, but PREFER
  poetsofmodernity.xyz as the public "read the manifesto" link (clean HTML, named
  translator). [SeaverLane-PDF]
- The open web copies are NOT the canonical printed Seaver/Lane book; cite the
  **University of Michigan edition** for canonical printed wording.

### How to write the presence
Tell it straight: *"Most movements got a manifesto after the fact. Surrealism got its name
and its rulebook in one document. In October 1924 André Breton published the* Manifesto of
Surrealism*, and in it he wrote a mock-dictionary definition of the word: 'SURREALISM, n.
m. Pure psychic automatism …, in the absence of any control exercised by reason, free of
any aesthetic or moral concern.' The whole movement is in that sentence: art made with the
reasoning mind switched off. He'd borrowed the word from the poet Apollinaire, who coined
it in 1917, and the method from Freud's couch — but the program was his, and so was the
power that came with writing the rules."*

---

## 4. THE CANON (~18 works) — with IMAGE-RIGHTS flags (THE load-bearing section)

**IMAGE-RIGHTS RULE for this vertical (the load-bearing item):** the app inlines only
**US-public-domain** images. The US rule is **published-before-1930 = US-PD**, regardless
of the author's death date. **Surrealism is the WORST-CASE movement for this app:** the
movement starts in **1924** and most of its famous works are **1930+**, and the artists
are **very long-lived** (Dalí d.1989, Magritte d.1967, Miró d.1983, Ernst d.1976, Tanguy
d.1955, Masson d.1987, Man Ray d.1976, Delvaux d.1994, Carrington d.2011, Oppenheim
d.1985, Tanning d.2012, Kahlo d.1954). So the MAJORITY of the canon is **IN COPYRIGHT and
NOT inlineable** — use a **RestrictedFigure degraded reference only** (text/credit, not an
inlined image). The **inlineable visual anchors are the pre-1930 works**: above all the
**precursor de Chirico (1909–1919)**, plus **early Ernst/Miró/Masson/Man Ray (1921–1929)**.
For EACH work: museum, dimensions (cm + ft/in), one-line blurb, and **US-PD / IN-COPYRIGHT
verdict + reason**. ⚠️ Even for the "US-PD" works, **verify the SPECIFIC Commons file is a
genuine pre-1930 reproduction at gate 6** (long-lived artists → Commons mislabels common;
museum sites assert modern reproduction rights).

Dimensions in cm (museum record) + ft/in conversion.

### — THE INLINEABLE ANCHOR: precursor de Chirico (pre-1919, US-PD) —

#### 1. de Chirico — *The Song of Love (Le Chant d'amour)*, 1914 — CARD CANDIDATE
- **Museum:** MoMA, New York (Nelson A. Rockefeller Bequest).
- **Dimensions:** 73 × 59.1 cm = **~2 ft 4¾ in × 1 ft 11¼ in**. Oil on canvas.
- **Blurb fact:** A classical Greek head and a red surgeon's rubber glove nailed side by
  side to a wall, a green ball below, a train on the horizon — de Chirico's "metaphysical"
  dream-logic a decade before Surrealism had a name. The literal visual DNA of the
  movement. [W-SongOfLove][MoMA-SongOfLove]
- **Rights:** ✅ **US-PD** (published 1914, pre-1930). ⚠️ de Chirico d.1978 → verify the
  specific file at gate 6.
- **Commons candidate:** search `de Chirico Song of Love 1914 MoMA`.

#### 2. de Chirico — *The Disquieting Muses (Le Muse inquietanti)*, 1916 (some sources 1916–18)
- **Museum:** long in the **Gianni Mattioli Collection, Milan** (and versions/replicas
  exist — de Chirico famously back-dated and repainted versions, a known trap). ⚠️ Confirm
  WHICH version a candidate image is.
- **Dimensions:** 97.16 × 66 cm = **~3 ft 2¼ in × 2 ft 2 in**. Oil on canvas.
- **Blurb fact:** Two faceless mannequin "muses" on a stage-like floor before a Ferrara
  castle — the empty square, the long shadow, the dressmaker's dummy as a person. [W-DisquietingMuses]
- **Rights:** ✅ **US-PD** for a genuine pre-1930 (original 1916) reproduction. ⚠️ de Chirico
  d.1978 AND multiple back-dated versions → gate-6 verify the version + the file.
- **Commons candidate:** search `de Chirico Disquieting Muses 1916`.

#### 3. de Chirico — *Mystery and Melancholy of a Street (Mistero e malinconia di una strada)*, 1914
- **Museum:** Private collection. (Use as a text-canon entry; no clean museum page.)
- **Dimensions:** 87.5 × 71.5 cm = **~2 ft 10½ in × 2 ft 4⅛ in**. Oil on canvas.
- **Blurb fact:** A little girl rolls a hoop toward a long shadow cast by an unseen figure,
  down an empty arcaded street — dread built from pure geometry and light. [W-MysteryMelancholy]
- **Rights:** ✅ **US-PD** (1914) for a pre-1930 reproduction; ⚠️ de Chirico d.1978 → gate-6.
- **Commons candidate:** search `de Chirico Mystery and Melancholy of a Street 1914`.

### — INLINEABLE early Surrealist-proper works (pre-1930) —

#### 4. Miró — *The Harlequin's Carnival (Carnaval d'Arlequin)*, 1924–25 — automatist founding picture
- **Museum:** **Buffalo AKG Art Museum** (formerly Albright–Knox), Buffalo, NY.
- **Dimensions:** 66 × 90.5 cm = **~2 ft 2 in × 2 ft 11⅝ in**. Oil on canvas.
- **Blurb fact:** A teeming nursery-bright room of dancing biomorphs, a winged die, a
  guitar-cat, a ladder, an eye — Miró said he painted it out of hunger hallucinations;
  the founding picture of the automatist stream. [W-Harlequin][Buffalo-Harlequin]
- **Rights:** ⚠️ **Pre-1930 reproduction = US-PD, BUT Miró d.1983** → the museum/Commons
  file very likely carries a modern reproduction claim; **gate-6 verify hard, treat as
  rights-fragile.** If a clean pre-1930 reproduction can't be confirmed, treat as
  RestrictedFigure.
- **Commons candidate:** search `Miro Harlequin's Carnival 1924 1925`.

#### 5. Ernst — *Two Children Are Threatened by a Nightingale (Deux enfants sont menacés par un rossignol)*, 1924
- **Museum:** MoMA, New York.
- **Dimensions:** 69.8 × 57.1 × 11.4 cm (it's a relief/box with attached wooden gate +
  knob) = **~2 ft 3½ in × 1 ft 10½ in × 4½ in deep**. Oil with painted wood elements and
  cut-and-pasted printed paper on wood, with a wooden frame/gate.
- **Blurb fact:** A painted sky and grass with a real little gate and door-knob attached: a
  girl swings a knife at a tiny nightingale, another lies fainted — Ernst staged a childhood
  fever-dream as a real-and-painted object. [MoMA-Nightingale]
- **Rights:** ⚠️ Pre-1930 reproduction = US-PD; **Ernst d.1976** → gate-6 verify the file;
  it's a 3D-ish object so the museum photo is the rights surface.
- **Commons candidate:** search `Max Ernst Two Children Threatened by a Nightingale 1924`.

#### 6. Ernst — *Histoire Naturelle (Natural History)*, frottages c.1925, published 1926 — the FROTTAGE method
- **Museum:** Portfolio of 34 collotype reproductions after frottage; copies at MoMA and
  elsewhere (orig. publisher Éditions Jeanne Bucher, Paris, 1926).
- **Dimensions:** sheets approx. 26 × 42.5 cm = **~10¼ in × 16¾ in** (orientation varies).
- **Blurb fact:** Thirty-four "natural history" plates conjured by **frottage** — rubbing
  graphite over paper laid on grainy wood and floors so leaves, forests, and creatures
  "surface" by chance. The method-defining work of the automatist stream. [MoMA-ErnstHistNat][UO-Frottage]
- **Rights:** ⚠️ Published 1926 = pre-1930 = US-PD for the original plates; **Ernst d.1976**
  → gate-6 verify any specific file.
- **Commons candidate:** search `Max Ernst Histoire Naturelle frottage 1926`.

#### 7. Masson — *Automatic Drawing (Dessin automatique)*, 1924 — the AUTOMATISM method
- **Museum:** MoMA, New York (and related sheets in several collections).
- **Dimensions:** ~23.5 × 20.6 cm = **~9¼ in × 8⅛ in** (sheet sizes vary by drawing). Ink
  on paper.
- **Blurb fact:** A pen let loose with no plan, the line tangling into half-figures only
  after the fact — Masson's automatic drawings are the purest demonstration of Breton's
  "psychic automatism." [MoMA-Masson]
- **Rights:** ⚠️ 1924 = pre-1930 = US-PD; **Masson d.1987 (long-lived)** → gate-6 verify
  the file hard; rights-fragile.
- **Commons candidate:** search `Andre Masson Automatic Drawing 1924`.

#### 8. Man Ray — *Le Violon d'Ingres (Ingres's Violin)*, 1924 — photograph
- **Museum:** Getty Museum (and editions elsewhere); a gelatin silver print.
- **Dimensions (print, varies by edition):** ~31 × 24.7 cm = **~1 ft 0¼ in × 9¾ in**.
- **Blurb fact:** Kiki de Montparnasse's bare back painted with the two f-holes of a violin
  — a body turned into an instrument, a visual pun (the French idiom *violon d'Ingres* means
  a hobby/second talent). Surrealism's most famous photograph. [Tate-Surr]
- **Rights:** ⚠️ Made 1924, but **Man Ray d.1976** and PHOTOGRAPHS have their own
  publication/rights history; **gate-6 verify the specific print's US-PD status — treat as
  rights-fragile** (a famous Man Ray print is unlikely to be cleanly free; consider
  RestrictedFigure if no pre-1930 publication can be confirmed).
- **Commons candidate:** search `Man Ray Violon d'Ingres 1924` (filter rights carefully).

### — IN-COPYRIGHT icons (NOT inlineable — RestrictedFigure / text reference only) —

#### 9. Dalí — *The Persistence of Memory*, 1931 — the melting clocks
- **Museum:** MoMA, New York (anonymous gift, 1934).
- **Dimensions:** 24.1 × 33 cm = **~9½ in × 1 ft 1 in** (famously tiny). Oil on canvas.
- **Blurb fact:** Soft watches draped over a branch, a table edge, and a sleeping-face form
  on a bare Catalan shore — Dalí said runny Camembert inspired the melting (his story, §0).
  The single most famous Surrealist image. [W-Persistence][ArtObj-Dali]
- **Rights:** ❌ **IN COPYRIGHT** (1931; Dalí d.1989). **NOT inlineable** —
  RestrictedFigure/text reference only. Do NOT use as card or break image.

#### 10. Magritte — *The Treachery of Images (La trahison des images)*, 1929 — "Ceci n'est pas une pipe"
- **Museum:** LACMA (Los Angeles County Museum of Art).
- **Dimensions:** 60.33 × 81.12 cm = **~1 ft 11¾ in × 2 ft 7⅞ in**. Oil on canvas.
- **Blurb fact:** A painted pipe over the words "This is not a pipe" — because it's a
  picture of a pipe, not a pipe. The cleanest lesson in art on the gap between word, image,
  and thing. [Smarthistory-Pipe][LACMA-Pipe][W-Pipe]
- **Rights:** ❌ **IN COPYRIGHT.** ⚠️ **1929 is borderline by date** (just pre-1930 for US
  publication), BUT **Magritte d.1967** and LACMA asserts active copyright (ADAGP/ARS), so
  **treat as IN COPYRIGHT / NOT inlineable** absent proof of a clean pre-1930 US
  publication. RestrictedFigure/text only.

#### 11. Magritte — *The Son of Man (Le fils de l'homme)*, 1964 — bowler hat + green apple
- **Museum:** Private collection.
- **Dimensions:** 116 × 89 cm = **~3 ft 9¾ in × 2 ft 11 in**. Oil on canvas.
- **Blurb fact:** A bowler-hatted man whose face is blocked by a floating green apple — a
  self-portrait by hiding, about the seen and the hidden. [W-SonOfMan]
- **Rights:** ❌ **IN COPYRIGHT** (1964; Magritte d.1967). NOT inlineable.

#### 12. Tanguy — a mature dream-landscape, e.g. *Indefinite Divisibility (Divisibilité indéfinie)*, 1942
- **Museum:** Buffalo AKG Art Museum (the 1942 work).
- **Dimensions:** 101.6 × 88.9 cm = **~3 ft 4 in × 2 ft 11 in**. Oil on canvas.
- **Blurb fact:** A vast, lit nowhere-land littered with smooth biomorphic bones/stones
  receding to a far horizon — Tanguy's signature interior landscape. [Brit-Tanguy]
- **Rights:** ❌ **IN COPYRIGHT** (1942; Tanguy d.1955). NOT inlineable. (No Tanguy mature
  work is pre-1930; he started painting in 1923 and joined in 1925.)

#### 13. Oppenheim — *Object (Le Déjeuner en fourrure / Object / Breakfast in Fur)*, 1936 — the fur teacup
- **Museum:** MoMA, New York.
- **Dimensions:** cup 10.9 cm dia. (**~4⅜ in**); saucer 23.7 cm dia. (**~9⅜ in**); spoon
  20.2 cm long (**~8 in**); overall height 7.3 cm (**~2⅞ in**). Fur-covered cup, saucer,
  and spoon.
- **Blurb fact:** A teacup, saucer, and spoon wrapped in gazelle fur — the most-cited
  Surrealist object, born of a Paris café joke with Picasso; turns a refined domestic ritual
  into something animal and unsettling. By a woman the men loved to muse on. [MoMA-Oppenheim][Smarthistory-Oppenheim]
- **Rights:** ❌ **IN COPYRIGHT** (1936; Oppenheim d.1985). NOT inlineable. RestrictedFigure
  only. (Important to NAME in the women axis even though it can't ship as an image.)

#### 14. Dalí — *Lobster Telephone*, 1938 (with Edward James)
- **Museum:** Tate (and versions elsewhere).
- **Dimensions:** ~17.8 × 33 × 17.8 cm = **~7 in × 1 ft 1 in × 7 in**. Telephone + plaster
  lobster.
- **Blurb fact:** A working telephone with a lobster for a handset — Surrealist desire
  joining two things that have no business together. [Tate-Surr]
- **Rights:** ❌ **IN COPYRIGHT** (1938; Dalí d.1989). NOT inlineable.

#### 15. Carrington — *Self-Portrait (Inn of the Dawn Horse)*, c.1937–38
- **Museum:** The Metropolitan Museum of Art (Pierre and Maria-Gaetana Matisse Collection).
- **Dimensions:** 65 × 81.3 cm = **~2 ft 1⅝ in × 2 ft 8 in**. Oil on canvas.
- **Blurb fact:** Carrington seated in jodhpurs, a lactating hyena beside her and a white
  rocking-horse floating behind, a horse galloping free out the window — a woman painting
  her own dream-world, not posing in a man's. The serious-woman-artist anchor. [Sothebys-Women]
- **Rights:** ❌ **IN COPYRIGHT** (c.1937–38; Carrington d.2011). NOT inlineable.

#### 16. Tanning — *Birthday*, 1942
- **Museum:** Philadelphia Museum of Art.
- **Dimensions:** 102.2 × 64.8 cm = **~3 ft 4¼ in × 2 ft 1½ in**. Oil on canvas.
- **Blurb fact:** Tanning bare-breasted before an endless line of opening doors, a winged
  griffin-creature at her feet — she subverted the domestic interior and the femme-enfant
  trope from inside. [Sothebys-Women]
- **Rights:** ❌ **IN COPYRIGHT** (1942; Tanning d.2012). NOT inlineable.

#### 17. Kahlo — e.g. *The Two Fridas (Las dos Fridas)*, 1939 — and her REJECTION of the label
- **Museum:** Museo de Arte Moderno, Mexico City.
- **Dimensions:** 173.5 × 173 cm = **~5 ft 8¼ in × 5 ft 8 in**. Oil on canvas.
- **Blurb fact:** Two Fridas, hearts exposed and joined by a vein — Breton claimed her for
  Surrealism; she rejected it: "I never painted dreams. I painted my own reality." Use her
  to complicate the label, honestly. [Artsy-Women]
- **Rights:** ❌ **IN COPYRIGHT** (1939; Kahlo d.1954; works also under Mexican estate
  control). NOT inlineable. (Mexican PD term is life+100.)

#### 18. Varo / Sage / Fini / Cahun — the other serious women (text-canon, NAME them)
- **Remedios Varo** (d.1963), **Kay Sage** (d.1963), **Leonor Fini** (d.1996), **Claude
  Cahun** (d.1954, the gender-bending photographer-writer). All key women of the movement;
  **all post-1930 work → IN COPYRIGHT, not inlineable.** Name them in the women axis and the
  artists row even though no image ships. [Sothebys-Women][Artsy-Women]

**Rights summary line for the coordinator:** *Surrealism is the app's worst image-rights
case: the movement is 1924+ and most icons are 1930+ by very long-lived artists, so the
MAJORITY of the canon (Dalí, Magritte, Tanguy mature, Oppenheim, Carrington, Tanning,
Kahlo, Varo, Sage, Fini) is IN COPYRIGHT and ships only as RestrictedFigure/text. The
INLINEABLE visual anchors are PRE-1930: above all the **precursor de Chirico (1914–1916)**
— cleanest by far — plus rights-fragile early Ernst/Miró/Masson/Man Ray (1924–26) that
need hard gate-6 verification because the artists are long-lived. **Card + break block
should be built on de Chirico's *The Song of Love* (1914).** Do NOT plan an image-led
chapter around the melting clocks or the pipe — they cannot ship.*

---

## 5. LINEAGE (the lineage block)

### Parents (what Surrealism grew out of)
- **Dada** (1916–1924) — the DIRECT parent. Surrealism is Paris Dada's serious wing: it
  kept Dada's **chance, collage, and provocation** and aimed them at the unconscious
  instead of pure negation. (Reference the DADA read for the handoff — don't re-tell it.)
  [DADA-pack][Tate-Surr]
- **Giorgio de Chirico's Metaphysical painting** (*Pittura metafisica*, c.1909–1919) — the
  visual parent: the empty square, the long shadow, the mannequin, dread built from
  ordinary things. Ernst, Tanguy, Dalí, and Magritte all drank from it. [W-SongOfLove][Brit-Tanguy]
- **Sigmund Freud and psychoanalysis** — the intellectual parent: the unconscious, dreams,
  and **free association** (the model for automatism). Breton built the program on Freud.
  [Tate-Surr][PoetsMod-Manifesto]
- **Symbolism** (late 19th c.) — the dream, the mythic, the inner vision over the seen
  world; a deeper ancestor of Surrealism's mood. (Reference, don't re-explain.) [Tate-Surr]

### Children (what Surrealism fed)
- **Abstract Expressionism** (NY, 1940s–50s) — the direct heir of **automatism**: the
  émigrés' "marks from the unconscious" became Pollock's drip and gesture. (gave:
  automatism → gesture, the unconscious as source.) [Artforum-Emigres][Tate-Surr]
- **Magical realism** (literature, mid-20th c.) — the dream folded into the everyday.
- **Pop-surreal / lowbrow** and later figurative dream-painting — took the hyper-real
  impossible image.
- **Film** — Buñuel & Dalí (*Un Chien andalou*, 1929), then a long line through Lynch,
  Jodorowsky, and music video. [Tate-Surr]
- **Advertising and fashion** — the surreal juxtaposition is now a default sales grammar
  (Dalí himself went commercial — part of why Breton expelled him).

### Gave / took notes
- **Took from Dada:** chance, collage, the journal/manifesto, provocation.
- **Took from de Chirico & Freud:** the dream image and the unconscious as subject.
- **Gave to AbEx:** automatism as a working method.
- **Gave to pop culture:** the word "surreal" and a whole grammar of impossible images.

---

## 6. ARTISTS ROW (~7) — one-line role + portrait-photo candidate

Period photos of these figures are 1920s–1950s; **pre-1930 photos are US-PD**, later ones
need checking. **Where no clean born-verified PD portrait exists, use the gradient
fallback.** (Most of these are long-lived, so later portraits are likely in copyright.)

1. **André Breton** (1896–1966) — **the founder and "Pope of Surrealism."** Poet,
   ex-medical-orderly; wrote the **1924 manifesto**, ran the group like a church
   (manifestos, a journal, a research bureau, and serial **expulsions**). Defined
   Surrealism as "psychic automatism." **Portrait:** verify a pre-1930 photo; else gradient.
   [W-SurrManifesto][Artforum-Breton]
2. **Max Ernst** (1891–1976) — **the inventor-technician.** Bridged Dada to Surrealism;
   invented **frottage** and **grattage**, master of collage and the proto-Surreal
   (*Celebes*). German; later exiled to New York. Portrait: verify; else gradient.
   [MoMA-ErnstHistNat][UO-Frottage]
3. **Salvador Dalí** (1904–1989) — **the showman of the dream image.** Spanish; the
   melting clocks, the **paranoiac-critical method**, the waxed mustache and relentless
   self-promotion; **expelled by Breton** ("Avida Dollars") over politics and money.
   Portrait: verify; else gradient. [W-Persistence][Collector-Dali]
4. **René Magritte** (1898–1967) — **the deadpan philosopher.** Belgian; flat, sign-painter
   scenes that short-circuit logic (the pipe, the apple-face); the quietest and most quoted
   Surrealist. Portrait: verify; else gradient. [Smarthistory-Pipe][W-SonOfMan]
5. **Joan Miró** (1893–1983) — **the automatist poet of shape.** Catalan; let chance and
   the unconscious compose biomorphic, nursery-bright worlds (*Harlequin's Carnival*);
   pushed toward abstraction. Portrait: verify; else gradient. [W-Harlequin][Buffalo-Harlequin]
6. **Leonora Carrington** (1917–2011) — **the serious woman artist the movement first saw
   as a muse.** British-Mexican painter and writer; arrived via Ernst, then built her own
   alchemical dream-world (*Self-Portrait / Inn of the Dawn Horse*); outlived and outgrew
   the label. Portrait: verify (likely in-copyright → gradient). [Sothebys-Women]
7. **Meret Oppenheim** (1913–1985) — **the maker of the era's defining object.** Swiss-German;
   the fur teacup (*Object*, 1936) is the single most-cited Surrealist sculpture — and a
   pointed answer to a movement that wanted women as muses, not makers. Portrait: verify;
   else gradient. [MoMA-Oppenheim][Smarthistory-Oppenheim]

(Optional 8th if room: **André Masson**, 1896–1987 — pioneer of **automatic drawing**; or
**Yves Tanguy**, 1900–1955 — the deep-space dream-landscapes Breton called the most
faithful Surrealist; or **Man Ray**, 1890–1976 — the camera Surrealist, *Le Violon
d'Ingres*; or **Frida Kahlo**, 1907–1954 — claimed by Breton, REJECTED the label.)
[MoMA-Masson][Brit-Tanguy]

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **The interwar years and the rise of fascism — Europe, 1922–1939.** Surrealism's whole
   life runs between the two world wars, against the rise of **Mussolini, Hitler, and
   Franco**. The group was militantly left (many flirted with or joined the Communist
   Party), which is exactly why **Dalí's refusal to condemn fascism — and his support for
   Franco — got him expelled.** The politics aren't background; they fractured the group.
   [Collector-Dali][Artforum-Breton]
2. **Freud and psychoanalysis going mainstream — 1900s–1930s.** *The Interpretation of
   Dreams* (1900) and Freud's ideas spread through Europe in exactly these decades.
   Surrealism is the art movement that took Freud most literally — the unconscious, the
   dream, free association — turning a clinical theory into a studio program. (Freud
   himself, met by Dalí in 1938, was bemused by them.) [Tate-Surr][PoetsMod-Manifesto]
3. **The drive to pure abstraction elsewhere — 1920s–30s.** While the Surrealists chased
   the dream and the figure, **De Stijl** (Mondrian), the **Bauhaus**, and the geometric
   abstractionists were pushing the opposite way: pure form, no story, no unconscious. A
   sharp contrast for the reader — two avant-gardes, one mining the inner mind, one
   purging it for pure geometry. [Tate-Surr]

---

## 8. NESTING — what the ERA / DADA reads already cover (go DEEPER, don't duplicate)

- **The Modern era read** gives Surrealism the hook **"The unconscious gets a paintbrush.
  Freud and a clock that won't hold its shape."** The movement read must go **DEEPER**:
  Breton's manifesto and "psychic automatism," the **two streams** (automatist vs
  dream-image), the techniques (automatic drawing, frottage, paranoiac-critical), the
  **women** axis, the **Dalí/fascism and Breton/authoritarianism** honesty axes, the New
  York exile, and the AbEx handoff. **Don't re-narrate the era thumbnail; reference it
  tersely.**
- **The DADA read (just built)** is the **direct parent** — it already tells the Paris
  Dada split (Breton vs Tzara) and the Dada-to-Surrealism handoff in full. **Reference it
  for the handoff; do NOT re-tell Dada.** Keep the cross-link reciprocal (Dada → Surrealism
  is its named child). [DADA-pack]
- **Coordinator action item:** add reciprocal cross-links — Surrealism ← Dada (direct
  parent) and a precursor note to **de Chirico / Metaphysical painting**; Surrealism →
  **Abstract Expressionism** (the direct child, via automatism). Check/keep these
  consistent in `src/lib/art-content.ts` (DADA const, a future ABEX const).

---

## 9. SHAPE (suggested chapters — author may improve)

1. **A word, a pope, and a manifesto** — Paris 1924; Breton turns Dada's serious wing into
   a program; the **1924 manifesto** and "psychic automatism"; the word is **Apollinaire's
   (1917)**, the method is **Freud's**, the power is Breton's; the Bureau and the journal.
   (Reference the era + Dada reads; don't re-narrate Dada.)
2. **Letting the hand run** — the **automatist stream**: Masson's automatic drawing, Miró's
   *Harlequin's Carnival*, Ernst's **frottage** (*Histoire Naturelle*) and grattage. Chance
   and the unconscious as the composer; how this stream slides toward abstraction.
3. **Painting the dream like a photograph** — the **veristic / dream-image stream**: Dalí's
   melting clocks and the **paranoiac-critical method** (flag the images as in-copyright,
   describe in prose), Magritte's pipe-that-is-not-a-pipe and the word/image game, Tanguy's
   stone deserts.
4. **Woman as muse, woman as artist** — the honesty chapter: the movement idolized "woman"
   and the **femme-enfant** while sidelining real women; name **Carrington, Oppenheim,
   Varo, Tanning, Sage, Fini, Cahun, Kahlo** (who rejected the label) as serious artists,
   with the sidelining told plainly.
5. **The pope and the purges** — Breton's authoritarianism: the **excommunications**
   (Artaud, Soupault, then **Dalí** and "Avida Dollars"), the kangaroo-court trials, the
   group's recorded **homophobia** (the 1928 sex sessions), the tangle with Communism and
   **Dalí's fascism**, and the colonial **primitivism** of collecting "tribal" art (tell it
   honestly, not romanticized).
6. **Exile, and what leaked out** — the war scatters the group to **New York** ("First
   Papers of Surrealism," 1942; Duchamp's string); automatism lights the fuse for
   **Abstract Expressionism**; then the long afterlife in film, advertising, magical
   realism, and the everyday word "surreal." Hold both halves: a real attempt to map the
   unconscious, and a movement run like a sect.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House informal popular-history voice, dry wit, comparisons welcome; inline-define every
term (manifesto, avant-garde, **automatism / "psychic automatism," automatic drawing,
frottage, grattage, the paranoiac-critical method, veristic, biomorphic, femme-enfant,
the marvelous, free association, the unconscious**) — reader has zero prior knowledge,
though some met manifesto/collage/chance/Dada/Cubism in the adjacent reads (terse
callback). **Make the reader GET it:** that Surrealism is one idea (paint with reason
switched off) that split into two opposite-looking streams. **Framing — the honesty
floor:** present the **women of Surrealism** as artists AND name the sidelining; present
**Dalí's fascism flirtation and expulsion** accurately; present **Breton's
authoritarianism, the excommunications, and the recorded homophobia** honestly; present the
**colonial primitivism** without romance; **hedge every "first"** and the automatism
origin stories; attribute Dalí's self-myths (the Camembert clocks) to Dalí. **No em-dashes
in shipping prose** (not the char, not `&mdash;`). Storytelling first; accuracy a hard
floor; the only direct quotes are the manifesto lines (gated to ONE named translation) and
clearly-attributed remarks (Dalí "Surrealism, it's me"; Kahlo "I painted my own reality")
— no invented quotes.

### HONESTY — the framing-gate axes spelled out (research-locked)
- **The women of Surrealism (central framing axis):** the movement **idolized "woman"** as
  muse, dream-object, and **femme-enfant** (woman-child) while largely keeping women out of
  the room as colleagues. But there were serious women artists — **Leonora Carrington,
  Leonor Fini, Remedios Varo, Dorothea Tanning, Kay Sage, Meret Oppenheim, Claude Cahun**,
  and **Frida Kahlo** (claimed by Breton, **rejected the label**: "I never painted dreams.
  I painted my own reality."). Most arrived via relationships with the men and then
  outgrew the label. Name them as artists; name the sidelining. [Sothebys-Women][Artsy-Women][Tate-Surr]
- **Dalí and fascism (do not soften):** Dalí **refused to condemn — and seemed fascinated
  by — Hitler**, and **supported Franco** after the Spanish Civil War, which split him from
  his Marxist Surrealist peers. Breton put him on "trial" and **expelled him (formalized
  by 1939)**, coining **"Avida Dollars."** Dalí's retort: **"Le surréalisme, c'est moi."**
  Present accurately; don't excuse and don't flatten into mere eccentricity. [Collector-Dali][Artnet-Avida][NWEnc-Dali]
- **Breton's authoritarianism (present honestly):** the **"Pope of Surrealism"** ran the
  group with **excommunications** (Artaud and Soupault expelled 1926; Dalí later; the 1930
  Second Manifesto purged more) and **kangaroo-court "trials."** The group's recorded
  **homophobia** is documented in the **1928 "Recherches sur la sexualité" sessions**
  (published in *La Révolution surréaliste*), where Breton repeatedly denounced male
  homosexuality. Name it; don't airbrush. [Artforum-Breton][Cake-Pope][RSrch-Homophobia]
- **Colonial primitivism:** the Surrealists avidly **collected non-Western "tribal" art and
  Oceanic/Native American objects** and drew on them for "the marvelous" — admiration tangled
  with the colonial gaze of the era. Present honestly, not romanticized. [Tate-Surr]
- **"First" claims and automatism origins — hedge all:** no single "first Surrealist
  painting" (Dada + de Chirico feed it; candidates 1921–25); **automatism is borrowed**
  (Freud's free association + earlier automatic writing/spiritualism), not Breton's
  invention; the word **"surréalisme" is Apollinaire's (1917)**, not Breton's. [Tate-Surr][W-SurrManifesto][PoetsMod-Manifesto]

---

## Source key (for the writer & fact-checker)

- **[W-SurrManifesto]** Wikipedia, *Surrealist Manifesto* (Breton; published 15 Oct 1924, Éditions du Sagittaire, with *Poisson soluble*; Apollinaire coined the word; rival groups; Second Manifesto 1930 purge).
- **[Brit-Manifeste]** Britannica, *Manifeste du surréalisme* (Breton, 1924; founding document).
- **[Tate-Surr]** Tate, art term *Surrealism* ("pure psychic automatism, by which one proposes to express … the real functioning of thought"; automatism; dream worlds vs automatic methods; Apollinaire coined "surrealist" 1917; key artists incl. Carrington, Magritte, Miró, Ernst, Dalí; "a way of life").
- **[PoetsMod-Manifesto]** poetsofmodernity.xyz, Breton, *First Manifesto of Surrealism* (1924), trans. **A. S. Kline** — FULL open text, no login/paywall: `https://www.poetsofmodernity.xyz/POMBR/French/Manifesto.php` (confirmed open 2026-06-18; "SURREALISM, n. m. Pure psychic automatism …" + "superior reality … omnipotence of dream").
- **[SeaverLane]** Richard Seaver & Helen R. Lane (trans.), *Manifestoes of Surrealism* (University of Michigan Press, 1969) — the canonical English PRINT translation; gate printed wording here.
- **[SeaverLane-PDF]** Open course PDF of the Seaver/Lane *Manifesto of Surrealism*: `https://www2.hawaii.edu/~freeman/courses/phil330/MANIFESTO%20OF%20SURREALISM.pdf` (the print-translation cross-check copy).
- **[W-SongOfLove]** Wikipedia, *The Song of Love* (de Chirico, 1914; 73 × 59.1 cm; MoMA; "precursor to all of Surrealism"; Apollinaire and the rubber glove).
- **[MoMA-SongOfLove]** MoMA collection record, de Chirico, *The Song of Love* (1914) — `moma.org/collection/works/80419`.
- **[W-DisquietingMuses]** Wikipedia, *The Disquieting Muses* (de Chirico, 1916; 97.16 × 66 cm; Mattioli Collection, Milan; de Chirico's back-dated versions trap).
- **[W-MysteryMelancholy]** Wikipedia, *Mystery and Melancholy of a Street* (de Chirico, 1914; 87.5 × 71.5 cm; private collection).
- **[W-Harlequin]** Wikipedia, *The Harlequin's Carnival* (Miró, 1924–25; 66 × 90.5 cm; Albright–Knox / Buffalo AKG; automatism).
- **[Buffalo-Harlequin]** Buffalo AKG Art Museum, *Carnaval d'Arlequin* record — `buffaloakg.org/artworks/rca19408-carnaval-darlequin-carnival-harlequin`.
- **[MoMA-Nightingale]** MoMA collection record, Ernst, *Two Children Are Threatened by a Nightingale* (1924; 69.8 × 57.1 × 11.4 cm; oil with wood + collage) — `moma.org/collection/works/79293`.
- **[MoMA-ErnstHistNat]** MoMA, Ernst, *Histoire Naturelle / Natural History* (c.1925, published 1926; 34 collotypes after frottage; ~26 × 42.5 cm) — `moma.org/collection/works/10056`.
- **[UO-Frottage]** Univ. of Oregon scholarship, *History of a Natural History: Max Ernst's Histoire Naturelle, Frottage, and Surrealist Automatism* (frottage discovered 1925; codified 1926).
- **[MoMA-Masson]** MoMA collection record, André Masson, *Automatic Drawing* (1924; ink on paper) — `moma.org/collection/works/38201`; Breton invited Masson 1924; *La Révolution surréaliste* published the drawings from 1925.
- **[W-Persistence]** Wikipedia, *The Persistence of Memory* (Dalí, 1931; 24.1 × 33 cm; MoMA since 1934, anonymous donor; melting clocks).
- **[ArtObj-Dali]** Art & Object, *A Brief Overview of Salvador Dalí's 'Melting Clocks'* (Dalí's Camembert account — his own story).
- **[Smarthistory-Pipe]** Smarthistory, *René Magritte, The Treachery of Images* (1929; word/image/object).
- **[LACMA-Pipe]** LACMA collection record, *The Treachery of Images (Ceci n'est pas une pipe)* (1929; 60.33 × 81.12 cm; oil on canvas; copyright Charly Herscovici / ADAGP / ARS).
- **[W-Pipe]** Wikipedia, *The Treachery of Images* (1929; Magritte; dimensions; reading).
- **[W-SonOfMan]** Wikipedia, *The Son of Man* (Magritte, 1964; 116 × 89 cm; bowler hat + green apple; commissioned self-portrait via Harry Torczyner).
- **[Brit-Tanguy]** Britannica, *Yves Tanguy* (took up painting after a de Chirico in 1923; joined Surrealists 1925; Breton thought him most faithful to Surrealist precepts; biomorphic dream-landscapes).
- **[MoMA-Oppenheim]** MoMA collection record, Meret Oppenheim, *Object* (Paris, 1936; cup 10.9 cm dia., saucer 23.7 cm dia., spoon 20.2 cm, overall H 7.3 cm; fur-covered) — `moma.org/collection/works/80997`.
- **[Smarthistory-Oppenheim]** Smarthistory, *Meret Oppenheim, Object (Fur-covered cup, saucer, and spoon)* (the Picasso café joke; most-cited Surrealist sculpture).
- **[Collector-Dali]** TheCollector, *Why Was Salvador Dalí Expelled From the Surrealist Group?* (the trials; expelled by 1939; fascism/Franco; "Le surréalisme, c'est moi"; "Avida Dollars").
- **[Artnet-Avida]** Artnet News, *Did Salvador Dalí's Nickname Help Make Him Rich?* ("Avida Dollars" anagram of Salvador Dalí = *avide à dollars*; Dalí's "magical value" quip).
- **[NWEnc-Dali]** New World Encyclopedia, *Salvador Dalí* (support for Franco; expulsion; "I myself am Surrealism").
- **[Artforum-Breton]** Artforum, *Dispensable Friends, Indispensable Ideologies: André Breton's Surrealism* (Breton's expulsions; ideological control).
- **[Cake-Pope]** cakeordeathsite, *The Pope of Surrealism* (the nickname; Breton's disciplinarian role).
- **[Surrealists-Pope]** thesurrealists.org, *André Breton: The Pope of Surrealism* (the epithet; Victor Crastre attribution).
- **[RSrch-Homophobia]** ResearchGate, *Surrealism's Homophobia* + Art and Popular Culture Encyclopedia, *Investigating Sex: Surrealist Discussions 1928–1932* (the 1928 "Recherches sur la sexualité" sessions in *La Révolution surréaliste*; Breton denounced male homosexuality; participants list).
- **[Sothebys-Women]** Sotheby's, *More Than a Muse: Female Surrealists Dorothea Tanning and Kay Sage*; + Carrington *Self-Portrait (Inn of the Dawn Horse)* (Met) and Tanning *Birthday* (Philadelphia) context.
- **[Artsy-Women]** Artsy, *The Market for Female Surrealists Has Finally Reached a Tipping Point* (Carrington, Varo, Fini, Kahlo; "more than muses"; femme-enfant); Kahlo "I never painted dreams. I painted my own reality."
- **[Artforum-Emigres]** Artforum, *The Surrealist Émigrés in New York* (Breton to NY 1941 via Peggy Guggenheim; Masson via Saidie May; "First Papers of Surrealism" 1942, Reid Mansion, Duchamp's string; automatism → American abstraction/AbEx).
- **[Breton-FirstPapers]** andrebreton.fr, *First Papers of Surrealism* (the 1942 NY exhibition record).
- **[Princeton-Surr]** Princeton Univ. Library, *Surrealism at One Hundred* (exile network; Varian Fry context).
- **[DADA-pack]** This repo, `audits/art-pipeline/dada-factpack.md` (the direct-parent read; Paris Dada split Breton vs Tzara; Dada → Surrealism handoff).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Surrealism = the art of the unconscious** (Paris, **1924**→c.1950): Breton's
   *Manifesto of Surrealism* (15 Oct 1924, Éditions du Sagittaire) defines it as **"pure
   psychic automatism"** — make art with the reasoning mind switched off, modeled on
   **Freud's** free association. The word is **Apollinaire's (1917)**, NOT Breton's; the
   movement is **Dada's direct child** (reference the Dada read, don't re-tell it).
2. **Two streams:** **automatist** (Masson's automatic drawing, Miró's *Harlequin's
   Carnival*, Ernst's **frottage**/*Histoire Naturelle*) sliding toward abstraction; and
   **veristic / dream-image** (Dalí's melting clocks + paranoiac-critical, Magritte's
   pipe-that-is-not-a-pipe, Tanguy's stone deserts) painted hyper-real. War scattered the
   group to **New York** (1942 "First Papers"); their automatism helped ignite **Abstract
   Expressionism**.
3. **Manifesto = PRESENT (`absent:false`).** Quote accurately from ONE named translation:
   the Kline open text says "SURREALISM, n. m. **Pure psychic automatism** … in the absence
   of any control exercised by reason …" (Seaver/Lane says "by which one proposes to
   express"). **Open source link:** `poetsofmodernity.xyz/POMBR/French/Manifesto.php`
   (A. S. Kline, confirmed open). Gate printed wording to the **Seaver/Lane** Michigan
   edition; don't mix translations.
4. **The honesty axes (non-negotiable):** (a) **women of Surrealism** — idolized as muse/
   femme-enfant but sidelined as artists; name **Carrington, Fini, Varo, Tanning, Sage,
   Oppenheim, Cahun, Kahlo** (Kahlo rejected the label) AND the sidelining; (b) **Dalí and
   fascism** — refused to condemn Hitler, backed Franco, **expelled by Breton ("Avida
   Dollars")**, retorted "Le surréalisme, c'est moi"; (c) **Breton's authoritarianism** —
   "Pope of Surrealism," excommunications (Artaud, Soupault, Dalí), kangaroo trials, the
   recorded **homophobia** (1928 sex sessions); (d) **colonial primitivism** of collecting
   "tribal" art; (e) **hedge every "first"** + the automatism origin (borrowed from Freud).
5. **Image rights = the WORST case in the app.** Movement is 1924+ and most icons are 1930+
   by long-lived artists → **the MAJORITY of the canon is IN COPYRIGHT, NOT inlineable**
   (Dalí *Persistence* 1931, Magritte pipe 1929/*Son of Man* 1964, Oppenheim *Object* 1936,
   Carrington, Tanning, Kahlo, Varo, Sage, Tanguy mature) — ships only as **RestrictedFigure/
   text**. The **INLINEABLE anchors are PRE-1930**: above all precursor **de Chirico
   1914–1916** (cleanest), plus rights-fragile early **Ernst/Miró/Masson/Man Ray 1924–26**
   (gate-6 verify hard). **Card + break block = build on de Chirico, *The Song of Love*
   (1914).**

**HANDLE-WITH-CARE, additional:**
- ⚠️ **DO NOT plan an image-led chapter around the melting clocks or the pipe** — both are
  in copyright and cannot ship as inlined images. Describe them in prose; use de Chirico
  for the visible anchors.
- ⚠️ **"Surréalisme" is Apollinaire's word (1917), not Breton's** — Breton founded the
  movement and wrote the manifesto, but state the coinage correctly.
- ⚠️ **Manifesto wording varies by translator** (Kline vs Seaver/Lane) — pick ONE named
  source per quote and SAY which; don't mix.
- ⚠️ **de Chirico back-dated and repainted his own works** (esp. *The Disquieting Muses*) —
  confirm WHICH version and that the file is a genuine pre-1930 reproduction at gate 6.
- ⚠️ **The "US-PD early works" are RIGHTS-FRAGILE** because the artists are long-lived
  (Miró '83, Ernst '76, Masson '87, Man Ray '76) — a pre-1930 reproduction IS US-PD, but
  Commons/museum files frequently assert modern reproduction rights or are mislabeled.
  Gate-6 verify each specific file; if no clean pre-1930 reproduction confirms, demote to
  RestrictedFigure. **Man Ray's *Violon d'Ingres* is especially likely to be encumbered.**
- ⚠️ **Attribute Dalí's self-myths** (the Camembert clocks; "Le surréalisme, c'est moi") to
  Dalí, not as neutral fact — he was a relentless self-mythologizer.
- ⚠️ **Don't re-tell Dada** — Surrealism is its direct child; reference the Dada pack/read
  for the handoff. Coordinator: add reciprocal cross-links Surrealism ← Dada (parent) and
  a de Chirico precursor note; Surrealism → Abstract Expressionism (child via automatism).
