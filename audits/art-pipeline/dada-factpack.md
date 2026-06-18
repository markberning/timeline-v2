# Fact pack — DADA (kind: MOVEMENT, Modern era, c.1916–1924; Zurich · New York · Berlin · Hannover · Cologne · Paris)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces to a
sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-18; the
fact-checker gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Dada movement** read: `/art/mod/dada` → `…/s/{sectionId}`. (Coordinator
  registers the `dada` const in `src/lib/art-content.ts`: range `1916–1924`, Modern
  era. **Card-image candidate** = the **Stieglitz 1917 photograph of Duchamp's
  *Fountain*** — the single most iconic Dada image AND cleanly US-PD (the photo was
  published in *The Blind Man* no. 2, 1917). It is a photograph of a now-lost object,
  which is perfect: no replica-rights trap. A painting/collage alternative for the card
  = **Höch, *Cut with the Kitchen Knife…*** (1919–20) — but that one is a rights edge
  case, see §4. Default the card to the Fountain photo.)
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Movement-page metadata (the break block, the
  manifesto block, the canon list, lineage, artists row, parallels) the coordinator
  assembles from this pack; per-work DEEP reads come in a later pass.

## Throughline (the one idea)
Dada is the moment art turns on **itself**. Born in neutral **Zurich in 1916**, in the
middle of a war that was feeding a generation into the mud, a handful of refugee poets
and painters decided that the civilization which had produced both the Mona Lisa and
the machine gun did not deserve to be taken seriously any more. So they made an art of
**nonsense, accident, and provocation**: sound poems with no words, poems pulled out of
a hat, a urinal signed and called sculpture, a portrait of the Mona Lisa with a
mustache. The name they chose means nothing on purpose. Where Futurism worshipped the
machine and the war, Dada looked at the same machine age and the same war and answered
with a horse-laugh. It was anti-everything: anti-art, anti-bourgeois, anti-logic. But
under the clowning was a deadly serious move that changed art permanently: **the idea
that the artist's choice, not the artist's hand, is what makes a thing art** (the
readymade), plus two techniques that outlived the joke entirely (**photomontage** and
**chance**). Dada had no single style and barely a single city. It jumped from Zurich
to New York, Berlin (where it turned savagely political), Hannover, Cologne, and
finally Paris, where it burned out around 1923–24 and was swallowed by the movement it
had hatched: **Surrealism**. Hold both halves: a prank that genuinely felt like the end
of art, and the seedbed for Duchamp's readymade, Pop, Conceptual art, Fluxus, and punk.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| The word "Dada" was found by stabbing a knife/paper-knife blindly into a French–German dictionary at the Cabaret Voltaire | **LEGEND — present it AS legend, do not state as fact** | This is the most-disputed origin fact in the movement. The usual claimant is **Richard Huelsenbeck** (he said he and Hugo Ball plunged a knife into a dictionary and hit "dada," French for a child's **hobby-horse**). **Tzara later also claimed to have invented the name**, which fueled a lifelong Huelsenbeck–Tzara feud over who "owned" Dada. TheArtStory states flatly there is "little agreement" on how the word was coined. Tzara's own *Chronique Zurichoise* says, under June 1916, **"a word was born no one knows how."** Frame it as the famous legend, name Huelsenbeck as usual claimant + Tzara's rival claim, and quote "a word was born no one knows how." **Do NOT cite Tate for the knife story — Tate's term page doesn't repeat it.** [W-CabVoltaire][ArtStory-Dada][Brit-Dada] |
| "Dada" means nothing | **DOCUMENTED — but it also has dictionary meanings** | The Dadaists chose it precisely because it was childish/empty, and Tzara's 1918 manifesto declares "DADA DOES NOT MEAN ANYTHING." But Ball's 1916 manifesto lists real meanings: French = **hobby-horse**; German = "good-bye / get off my back"; Romanian (da, da) = "yes, yes." Both are true: it has trivial meanings in several languages, and the movement insisted it "means nothing." [Ball-Manifesto][Tzara-1918] |
| Duchamp personally submitted *Fountain* to the 1917 show | **CONVENTIONAL ATTRIBUTION — not airtight; hedge** | What IS documented: Duchamp was **on the board** of the Society of Independent Artists, the urinal was entered under the pseudonym **"R. Mutt,"** and Duchamp (with Walter Arensberg) **resigned in protest** when it was excluded. That he *personally* submitted it is the standard account but not a signed fact — his own 1917 letter attributes the submission to "a female friend" (see Baroness row), and a go-between (Louise Norton, whose address connects to the entry) handled logistics. State board-membership + resignation as fact; hedge sole personal authorship. [Tate-Fountain][Phila-Fountain][W-Fountain] |
| "R. Mutt" — where the name came from | **DOCUMENTED (Duchamp's own words)** | Duchamp: *"Mutt comes from Mott Works, the name of a large sanitary equipment manufacturer. But Mott was too close so I altered it to Mutt, after the daily cartoon strip Mutt and Jeff."* (i.e. **J.L. Mott Iron Works** plumbing supplier + the **Mutt and Jeff** comic.) The "Richard" is sometimes glossed as French slang *richard* = moneybags — treat that as a weaker add-on. [W-Fountain] |
| The Baroness Elsa von Freytag-Loringhoven, not Duchamp, was behind *Fountain* | **GENUINELY DISPUTED — present BOTH sides, resolve NEITHER** | A vocal scholarly minority (**Glyn Thompson & Julian Spalding**, *The Art Newspaper* 2014; building on **Irene Gammel's** 2002 biography *Baroness Elsa*) argues the artist-poet **Baroness Elsa** submitted *Fountain*, citing Duchamp's 11 April 1917 letter to his sister Suzanne: *"One of my female friends under a masculine pseudonym, Richard Mutt, sent in a porcelain urinal as a sculpture."* The counter-case (**Dawn Ades, Alastair Brotchie, Francis Naumann, Bradley Bailey**) reads the SAME letter as evidence *against* theft (Duchamp openly told his sister a woman fronted the entry) and identifies the "female friend" as **Louise Norton**, not the Baroness. Mainstream museum attribution stays with Duchamp; the Baroness case rests on stylistic affinity + circumstantial ties. **The honesty move is to present the debate, not settle it.** [ArtNews-Fountain][Artsy-Baroness][W-Fountain][Gammel] |
| *Fountain*'s original survives | **MYTH — it is LOST** | The 1917 original was soon lost or destroyed. The **only surviving image is Alfred Stieglitz's 1917 photograph** (taken at his "291" gallery, printed in *The Blind Man* no. 2). What museums hold are **authorized replicas** — chiefly the **1964 edition of eight made by Arturo Schwarz (Galleria Schwarz, Milan)**; **Tate's is no. 2 of that edition**. (A 1950 Duchamp replica is at the Philadelphia Museum.) [Tate-Fountain][SFMOMA-Fountain][Phila-Fountain] |
| *L.H.O.O.Q.* (Mona Lisa with a mustache) — what the letters mean | **DOCUMENTED** | Read aloud in French the letters L-H-O-O-Q sound out **"Elle a chaud au cul,"** roughly **"she has a hot ass / she's horny."** Duchamp's own later loose gloss: "there is fire down below." It's a **rectified readymade** (a found object — a cheap Mona Lisa postcard — altered), 1919. [W-LHOOQ] |
| Dada was the first to invent photomontage | **HEDGE HEAVILY — Dada politicized it, didn't strictly invent it** | Berlin Dada's signature technique, but "who invented it" is unprovable: **Grosz & Heartfield** vs **Hausmann & Höch** both claimed it (Höch and Hausmann said they got the idea from a framed commercial soldier-photomontage on a 1918 Baltic holiday). And **photomontage as a technique predates Dada** — commercial/Victorian "combination printing" goes back to the 1850s. Dada's real innovation was claiming it as a **political weapon**, not inventing the cut-and-paste. [ArtStory-Photomontage][AHUnstuffed] |
| Dada coined "anti-art" | **HEDGE — the term is associated with Duchamp but is slippery** | Dada is the textbook "anti-art" movement, but be precise about WHAT it rejected (the gallery/museum cult, bourgeois taste, the idea that art needs skill or beauty or sense) and that "anti-art" is as much a **later critical label** as a Dada self-description. Don't assert the Dadaists branded themselves "anti-art" without hedging. [Tate-Dada][ArtStory-Dada] |
| The Cologne Dada show you entered through a toilet, with an axe to smash the art | **DOCUMENTED in core, much-retold in detail** | Cologne's **"Dada-Vorfrühling" (Dada Early Spring), April 1920**, in a pub courtyard: visitors entered past the men's urinal where a girl in a communion dress recited lewd verse; an Ernst sculpture came with a **hatchet** so viewers could destroy it; police **closed it for obscenity**, then charges were dropped when the "obscene" image turned out to be **Dürer's 1504 *Adam and Eve***, and it reopened ("Dada siegt!" — Dada triumphs). Core corroborated by Smithsonian; staging details vary in the retelling, so hedge the embroidery. [Smith-Dada][Moderna-Ernst] |

---

## 1. THE MOVEMENT STORY (rise → spread across cities → afterlife into Surrealism)

### Rise — Zurich and the Cabaret Voltaire (1916)

- **The Cabaret Voltaire opens (5 February 1916).** The German writer-director **Hugo
  Ball** and his partner, the dancer-singer **Emmy Hennings**, both refugees from
  wartime Germany, opened a nightclub-cum-art-cabaret at **Spiegelgasse 1, Zurich**, in
  a back room of the Holländische Meierei tavern. Zurich was in **neutral Switzerland**,
  an island in a Europe at war, which is why the avant-garde washed up there. A press
  notice invited "young Zurich artists of all tendencies." [W-CabVoltaire][Met-Ball]
- **The Zurich circle.** Around the Cabaret gathered the Romanian poet **Tristan
  Tzara**, the Romanian painter **Marcel Janco**, the Alsatian artist **Hans (Jean)
  Arp**, the German writer **Richard Huelsenbeck**, and the Swiss artist **Sophie
  Taeuber** (later Taeuber-Arp). ⚠️ Frame these as the **early Zurich Dada circle**, not
  as all literally on stage opening night (5 Feb) — the opening line-up is usually given
  loosely. [W-CabVoltaire][mital-u]
- **What happened on the little stage.** Simultaneous poems shouted in three languages
  at once, African-inspired chants and drumming, **Arp's** abstract collages, **Janco's**
  cardboard masks, **Hennings'** chansons, and Ball's **sound poems** ("verses without
  words"). In **June 1916** Ball recited his sound poem **"Karawane"** dressed in a
  **cubist cardboard costume** (blue cardboard tubes for legs, a huge gold cardboard
  collar he flapped like wings, a tall shaman's hat) and had to be carried off stage.
  [Dartmouth-Karawane][ArtStory-Ball]
- **The name and the first manifesto.** The group adopted the nonsense word **"Dada"**
  (origin a legend, see §0). On **14 July 1916** (Bastille Day), at the first public
  Dada soirée at **Waag Hall (Zur Waag guildhall)**, Ball read the **first Dada
  manifesto** (see §3). [W-CabVoltaire][Ball-Manifesto][W-DadaManifesto]

### Spread — the movement jumps cities (1916–1921)

- **New York Dada (concurrent, ~1915–1921).** Even before Zurich, **Marcel Duchamp**
  and **Francis Picabia** had landed in New York (escaping the war), where with the
  American photographer **Man Ray** and the patronage/gallery of **Alfred Stieglitz**
  they ran a parallel proto-Dada. Duchamp had already begun the **readymade** — an
  ordinary manufactured object declared to be art (*Bicycle Wheel*, 1913; *Bottle
  Rack*, 1914). The flashpoint was **1917**: the urinal ***Fountain*** signed "R. Mutt,"
  submitted to the **Society of Independent Artists** show (which advertised "no jury,
  no prizes," yet excluded it). The **Baroness Elsa von Freytag-Loringhoven**, a wild
  performance-artist-before-the-term, was central to this circle (see §"honesty" and §0).
  [W-Fountain][Tate-Fountain][Artsy-Baroness]
- **Berlin Dada (1918–1920) — the political wing.** When Huelsenbeck carried Dada to a
  defeated, revolutionary, near-starving Berlin, it turned **savagely political**, aimed
  at the militarists and the new Weimar establishment. Its weapon was **photomontage**
  (cut-up photos and newsprint reassembled). The figures: **Raoul Hausmann** (the
  "Dadasoph"), **Hannah Höch**, **John Heartfield** (anglicized his name in protest at
  German nationalism; later the great anti-Nazi photomontagist), **George Grosz**,
  **Johannes Baader**, and the publisher **Wieland Herzfelde**. They staged the **First
  International Dada Fair (Erste Internationale Dada-Messe), 30 June – 25 August 1920**,
  at Dr. Otto Burchard's gallery — ~200 works, a stuffed-dummy "Prussian archangel" with
  a pig's head hung from the ceiling in an officer's uniform. [W-DadaFair][AHUnstuffed][Smith-Dada]
- **Hannover Dada — Schwitters and "Merz" (1919 on).** **Kurt Schwitters** wanted into
  Berlin Dada but **Huelsenbeck blackballed him** (the timing/motive is disputed — see
  §0/§"honesty"), so he founded his **own one-man movement, "Merz,"** named from a
  fragment of **"Commerzbank"** that turned up in one of his collages. He made
  assemblages from literal street trash and built the **Merzbau**, an architectural
  growth of plaster grottoes that ate through his Hannover house. He also wrote the comic
  love poem **"An Anna Blume"** (1919). [W-Merz][Tate-Merzbau][W-AnnaBlume]
- **Cologne Dada (1919–1920).** **Max Ernst**, **Hans Arp**, and **Johannes Theodor
  Baargeld** ran a Cologne cell, famous for the toilet-entrance, axe-the-art show of
  April 1920 (see §0). Ernst's collages here pointed straight toward Surrealism. [Smith-Dada][Moderna-Ernst]

### Afterlife — Paris, and the bridge to Surrealism (1920–1924)

- **Paris Dada (1920–1923).** **Tzara moved to Paris in 1920** (Picabia was already
  there) and joined the young writers around the journal ***Littérature*** — **André
  Breton, Louis Aragon, Philippe Soupault**, with **Paul Éluard** in the circle. Paris
  Dada was all provocation: nonsense theater, the staged **mock "Trial of Maurice
  Barrès"** (13 May 1921, with Breton presiding as judge), riots in the audience.
  [Cabinet-Barres][Breton-Litterature][W-Dada]
- **The split, and Surrealism takes over.** Breton wanted Dada to become a **serious**
  instrument; Tzara wanted it to stay pure nonsense. Breton's attempt to organize a
  **Congress of Paris (1922)** collapsed when Tzara refused; Breton attacked him in
  print, and a 1923 Tzara soirée ended in a Breton-led riot. The break was total.
  Breton then launched **Surrealism** with his **Surrealist Manifesto in 1924** — keeping
  Dada's collage, chance, and provocation but pointing them at the **unconscious and the
  dream** instead of pure negation. **Dada effectively ends c. 1923–24**, absorbed by the
  movement it had hatched. [Cabinet-Barres][PMLA-Congress][W-Dada]

**Why it mattered (one paragraph for the writer):** Dada looks like a prank, and it was,
but it permanently changed what "art" can be. Three things outlived the joke: the
**readymade** (Duchamp's claim that *choosing* an object can make it art — the seed of
all Conceptual art and most of what came after), **photomontage** (the political
cut-and-paste that runs through Heartfield to punk graphics and the protest poster), and
**chance** as a working method (Arp's torn-paper collages, poems pulled from a hat — the
seed of Surrealist automatism, Cage, Fluxus). And it bred **Surrealism** outright. When
a 2004 poll of 500 art-world professionals (commissioned by Gordon's, then the Turner
Prize sponsor) named the single most influential artwork of the 20th century, they did
not pick a Picasso — they picked Duchamp's urinal. [W-Fountain][Artforum-Poll]

---

## 2. THE BREAK BLOCK (`whatChanged`) — art turns on the idea of art

The concrete change, stated plainly (not "revolutionary"):

> **Before:** for centuries, a work of art was something an artist **made with skill** —
> a painting painted, a sculpture carved — that aimed at beauty, meaning, or at least
> craft, and earned its place by hanging in a gallery the public took seriously. Even the
> wildest pre-1916 modern art (Fauvism's colors, Cubism's broken planes, Futurism's
> speed) still believed in the picture, in the artist's hand, and in art itself.
>
> **After (Dada):** art attacks the idea of art. Four moves stack: **(1) the readymade**
> — Duchamp buys a urinal, signs it "R. Mutt," calls it sculpture, and argues that the
> artist's *choice*, not the artist's *hand*, is what makes it art (the most disruptive
> single idea in modern art). **(2) chance** — Arp tears up paper, lets the scraps fall,
> and glues them where they land, handing the composition to accident instead of the
> trained eye. **(3) photomontage** — Berlin Dada cuts up news photographs and reassembles
> them into political weapons, an art made of scissors and the daily paper. **(4)
> nonsense** — sound poems with no words, a name that means nothing, a mustache on the Mona
> Lisa. The skill, the beauty, the seriousness, even the made-by-hand part are all thrown
> out. What's left is the idea and the gesture.

### Before/after pair (born-verified candidates)

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — art as a made, beautiful, serious thing** | Any pre-1916 "masterpiece" the era reads already use — cleanest is **Leonardo's *Mona Lisa*** itself (which Dada literally defaced in *L.H.O.O.Q.*), or a Cubist/Futurist canvas from the adjacent reads to show that even radical modern art still believed in the picture. | The Mona Lisa is the perfect foil because Dada attacked *it by name*: the before/after is the masterpiece, then the masterpiece with a mustache. | **PD-US** (Leonardo; any pre-1930 reproduction). |
| **AFTER — art attacks art** | **Duchamp, *Fountain*, 1917** — via the **Alfred Stieglitz 1917 photograph** (the only surviving image of the original). The urinal-as-sculpture is the single clearest "this is the change" image. Alternative: **Höch, *Cut with the Kitchen Knife…*** (photomontage as political weapon). | A factory-made urinal declared art makes the readymade visible in one glance — no glossing needed for a phone reader. | **Stieglitz 1917 photo = PD-US** (published 1917 in *The Blind Man*); this dodges the replica-rights trap entirely. The Höch alternative is a rights edge case (see §4). |

**Recommended pairing for the break block:** *Mona Lisa* (or its *L.H.O.O.Q.* defacement)
**→** *Fountain* via the **Stieglitz 1917 photo**. That pair makes the change visible:
the made, revered masterpiece, then a bought urinal called art. Fall back to a Höch
photomontage if you'd rather make the "art becomes a political cut-and-paste weapon"
point.

---

## 3. THE MANIFESTO BLOCK (`manifesto`) — PRESENT, and Dada is manifesto-rich

**`absent: false`.** Dada is one of the most manifesto-heavy movements in art history —
it has Ball's 1916 founding statement, Tzara's famous 1918 manifesto, Huelsenbeck's
Berlin manifestos, and a flood of journals. The block's job is to quote it **accurately**,
name the document exactly, and pin every quote to a named translation.

### A note on translation (load-bearing for the fact-checker)
The standard English source for both manifestos is **Robert Motherwell (ed.), *The Dada
Painters and Poets: An Anthology*** (Wittenborn, Schultz, 1951; 2nd ed. 1967). The Tzara
1918 translation in that volume is widely credited to **Ralph Manheim**, but some
catalog records credit Motherwell himself. ⚠️ **FLAG: confirm the translator line against
a physical copy/library catalog before printing "translated by Ralph Manheim."** The
exact-wording quotes below come from **open-access web reproductions** (391.org / The
Anarchist Library), which can differ slightly from the printed Manheim text — gate any
printed quote against ONE named source and do not mix them.

### The founding documents
- **Hugo Ball's first Dada manifesto** — read by Ball at **Waag Hall, Zurich, 14 July
  1916** (Bastille Day), at the first public Dada soirée. [Ball-Manifesto][W-DadaManifesto]
- **Tristan Tzara, "Dada Manifesto 1918"** — written/read at a Zurich soirée **23 March
  1918**; published in the journal ***Dada* no. 3 (December 1918)**, Zurich. The most
  famous Dada manifesto. [Tzara-1918]

### Accurately-quoted lines (verify wording against ONE named translation at gate 1)

From **Hugo Ball's Dada Manifesto (1916)** — wording per the open-access full text at The
Anarchist Library (Wikisource-derived; confirm against the Manheim/Motherwell print for
canonical English):

  > "Dada is a new tendency in art. One can tell this from the fact that until now
  > nobody knew anything about it, and tomorrow everyone in Zurich will be talking about
  > it." [Ball-Manifesto]

  > "How does one achieve eternal bliss? By saying dada. How does one become famous? By
  > saying dada." [Ball-Manifesto]

From **Tristan Tzara, "Dada Manifesto 1918"** — wording per the open-access full text at
391.org (no translator credit shown; capitalization as on the page):

  > "DADA DOES NOT MEAN ANYTHING." *(French: "Dada ne signifie rien"; the more common
  > English form is "Dada means nothing.")* [Tzara-1918]

  > "I write a manifesto and I want nothing, yet I say certain things, and in principle I
  > am against manifestos, as I am also against principles." [Tzara-1918]

  > "I am against systems, the most acceptable system is on principle to have none."
  > [Tzara-1918]

⚠️ **The exact English wording varies by source/translator** (391.org capitalizes "DADA
DOES NOT MEAN ANYTHING"; the Manheim/Motherwell print may differ). **Gate the chosen
wording against ONE named translation and name which.** Do NOT mix sources in one quote.

### Born-verified OPENLY-READABLE source URLs for the block's "source link"
- **Tzara, *Dada Manifesto 1918* — FULL TEXT, opens freely, no login/paywall:**
  `https://391.org/manifestos/1918-dada-manifesto-tristan-tzara/` ✅ (fetched and
  confirmed open 2026-06-18; contains all three Tzara quotes above). [Tzara-1918]
- **Hugo Ball, *Dada Manifesto 1916* — FULL TEXT, opens freely, no login/paywall:**
  `https://theanarchistlibrary.org/library/hugo-ball-dada-manifesto` ✅ (fetched and
  confirmed open 2026-06-18; contains the Ball quotes above). [Ball-Manifesto]
- Both are **open reproductions**, NOT the canonical Manheim/Motherwell print — fine for
  "read it in full," but cite the **Motherwell anthology** for canonical printed wording.
  **Prefer 391.org** as the public "read the manifesto" link (it's the Dada-journal
  successor site and reputable in the field).

### How to write the presence (and the joke)
Tell it straight: *"Most movements explain themselves earnestly. Dada wrote manifestos to
prove manifestos were worthless. In 1916 Hugo Ball stood up in a Zurich guildhall and
announced 'Dada is a new tendency in art' — and then explained that the whole point was
that it meant nothing: 'How does one achieve eternal bliss? By saying dada.' Two years
later Tzara wrote the most famous one of all, which opens by declaring 'DADA DOES NOT MEAN
ANYTHING' and admits, a few lines in, that he is writing a manifesto while being against
manifestos and against principles. It is a manifesto that argues itself out of
existence — which is exactly the joke, and exactly the point."*

---

## 4. THE CANON (~14 key works) — with IMAGE-RIGHTS flags for the app gate

**IMAGE-RIGHTS RULE for this vertical (the load-bearing item):** the app inlines only
**US-public-domain** images. The US rule is **published-before-1930 = US-PD**, regardless
of the author's death date. **Every Dada work here is 1913–1924 and was
published/exhibited before 1930, so its pre-1930 photographic reproduction is US-PD and
inlineable.** BUT almost every Dada artist is **long-lived** (Arp d.1966, Ernst d.1976,
Höch d.1978, Schwitters d.1948, Man Ray d.1976, Hausmann d.1971, Duchamp d.1968), so the
*non-US* (life+70) status is still in copyright and Commons files can be mislabeled.
**For every work below: confirm the SPECIFIC file is a genuine pre-1930 reproduction at
gate 6.** Two structural traps: **(a) the readymades and 3D objects only survive as later
replicas** (*Fountain*, *Bicycle Wheel*, *Bottle Rack*, Man Ray's *Gift*) — a photo of a
**1950s/1960s replica is NOT pre-1930** and is a rights trap; for *Fountain* use the
**Stieglitz 1917 photo** (PD), and for the others prefer a pre-1930 image or treat them
as "object survives only as replica" in the caption. **(b) Schwitters' Merzbau is
destroyed** — only photographs survive (Redemann's 1933 photos), and those photos have
their own rights.

Dimensions in cm (museum record) + ft/in conversion.

### 1. Duchamp — *Fountain*, 1917 — CARD CANDIDATE (via the Stieglitz photo)
- **Museum:** Original LOST. Museums hold replicas — chiefly the **1964 Schwarz edition
  of eight** (Tate's is **no. 2 of 8**, glazed earthenware, Galleria Schwarz, Milan, Oct
  1964); a 1950 Duchamp replica is at the **Philadelphia Museum of Art**. The only image
  of the original is the **Alfred Stieglitz 1917 photograph**.
- **Dimensions (Tate replica):** ~36 × 48 × 61 cm = **~1 ft 2 in × 1 ft 7 in × 2 ft 0
  in**. Porcelain urinal (replica: glazed earthenware), laid on its back, signed "R.
  Mutt 1917."
- **Blurb fact:** The most influential prank in modern art — a mass-produced urinal
  declared sculpture, submitted under the fake name **R. Mutt** to a "no jury, no prizes"
  show that excluded it anyway. Voted the most influential artwork of the 20th century in
  a 2004 poll. [Tate-Fountain][SFMOMA-Fountain][W-Fountain][Artforum-Poll]
- **Rights:** ✅ **Use the Stieglitz 1917 photo (PD-US, published 1917 in *The Blind
  Man*).** ⚠️ Do NOT use a photo of a 1950s/1964 replica — not pre-1930.
- **Commons candidate:** search `Stieglitz Fountain Duchamp 1917 Blind Man`.

### 2. Duchamp — *L.H.O.O.Q.*, 1919 — rectified readymade
- **Museum:** 1919 original in a private collection; a 1930 replica at **Centre
  Pompidou**, later versions/editions at the **Norton Simon Museum** and the Met. First
  published in the journal *391* no. 12 (March 1920).
- **Dimensions (1919 original):** 19.7 × 12.4 cm = **~7¾ in × 4⅞ in**. Pencil on a cheap
  printed *Mona Lisa* postcard.
- **Blurb fact:** The *Mona Lisa* with a mustache and goatee, captioned with five letters
  that sound out a dirty French pun (**"Elle a chaud au cul"**). A "rectified readymade":
  a found object (a cheap postcard) altered. Defaces the most revered painting in the
  world to attack the cult of the masterpiece. [W-LHOOQ]
- **Rights:** pre-1930 reproduction is US-PD; **Duchamp d.1968** → ⚠️ verify the specific
  file at gate 6.
- **Commons candidate:** search `Duchamp L.H.O.O.Q. 1919`.

### 3. Duchamp — *Bicycle Wheel*, 1913 — THE FIRST READYMADE
- **Museum:** MoMA (and replicas elsewhere). Original lost; the MoMA version is a **1951
  replica** ("third version, after a lost original of 1913").
- **Dimensions (MoMA 1951 replica):** 129.5 × 63.5 × 41.9 cm = **~4 ft 3 in × 2 ft 1 in
  × 1 ft 4½ in**. Metal wheel on a painted wooden stool. (Duchamp's own term for it: an
  "assisted readymade.")
- **Blurb fact:** A bicycle wheel bolted upside-down on a kitchen stool — Duchamp's first
  "readymade," made in 1913, **two years before he coined the word "readymade" (c.
  1915)**. The object that started the whole idea that choosing can be art. [MoMA-BicycleWheel][W-Readymade]
- **Rights:** ⚠️ **3D object survives only as later replicas (1951+) — a photo of a
  replica is NOT pre-1930.** Prefer a pre-1930 image if one exists, or caption it as
  "1913 original lost; later replica." Flag for gate 6.
- **Commons candidate:** search `Duchamp Bicycle Wheel 1913` (filter for rights).

### 4. Höch — *Cut with the Kitchen Knife Dada through the Last Weimar Beer-Belly Cultural Epoch of Germany*, 1919–20 — CARD ALTERNATIVE
- **Museum:** Nationalgalerie, Staatliche Museen zu Berlin (inv. NG 57/61). ⚠️ NOT the
  Berlinische Galerie (which holds a *different* Höch, *Dada-Rundschau*).
- **Dimensions:** 114 × 90 cm = **~3 ft 8¾ in × 2 ft 11½ in**. Collage/photomontage on
  cardboard, cut from the *Berliner Illustrirte Zeitung*.
- **Blurb fact:** The great Berlin Dada photomontage — a teeming cut-up of Weimar
  Germany, generals and dancers and machine parts, splitting the new republic into "Dada"
  and "anti-Dada" camps; one of the few works to insert the women of Dada (a map of where
  women could vote sits in the corner). Shown at the 1920 Dada Fair. [Smarthistory-Hoch][MoMA-HochCat]
- **Rights:** pre-1930 reproduction is US-PD; **Höch d.1978** → ⚠️ verify the specific
  file at gate 6 (long-lived artist; the Nationalgalerie image may carry a modern
  reproduction claim).
- **Commons candidate:** search `Höch Cut with the Kitchen Knife 1919`.

### 5. Hausmann — *The Spirit of Our Time (Mechanical Head) / Mechanischer Kopf*, c.1919–20
- **Museum:** Centre Pompidou (Musée national d'art moderne), Paris (acq. 1974).
- **Dimensions:** 32.5 × 21 × 20 cm = **~1 ft 0¾ in × 8¼ in × 7⅞ in**. Assemblage
  (wooden hairdresser's dummy head + attached objects: tape measure, ruler, watch cog,
  beaker, etc.).
- **Blurb fact:** A wig-maker's dummy head studded with measuring devices and junk —
  Hausmann's icon of "the spirit of our time": a head whose only thoughts are the objects
  literally screwed to it, an indictment of a war-machine society. [Pompidou-Hausmann (via search)]
- **Rights:** pre-1930 reproduction is US-PD; **Hausmann d.1971** → ⚠️ 3D assemblage,
  verify the specific photo file at gate 6.
- **Commons candidate:** search `Hausmann Mechanical Head Spirit of Our Time`.

### 6. Schwitters — *Merz Picture 32 A. The Cherry Picture (Merzbild 32 A. Das Kirschbild)*, 1921
- **Museum:** MoMA, New York.
- **Dimensions:** 91.8 × 70.5 cm = **~3 ft 0 in × 2 ft 3¾ in**. Cut-and-pasted paper,
  cloth, wood, metal, cork, oil, pencil, ink on board.
- **Blurb fact:** A "Merz" collage built from Hannover street trash — candy wrappers,
  newspaper, a flashcard of cherries, a broken pipe protruding from the surface, the
  penciled ungrammatical line "Ich liebe dir!" Schwitters making art out of literal
  garbage. [MoMA-CherryPicture]
- **Rights:** PD-US (pre-1930 reproduction). **Schwitters d.1948** → relatively clean
  (life+70 cleared 2019), but still verify the specific file at gate 6.
- **Commons candidate:** search `Schwitters Cherry Picture Merzbild 32A`.

### 7. Schwitters — *Merzbau (Merz Building)*, Hannover, begun mid-1920s (main room c.1927), DESTROYED 1943 — ⚠️ DESTROYED / PHOTO-ONLY
- **Museum:** **Destroyed** (Allied air raid, Hannover, October 1943). Survives only as
  photographs (notably Wilhelm Redemann's 1933 photos); reconstructions exist (Sprengel
  Museum, Hannover; Tate's research).
- **Blurb fact:** An architectural sculpture that grew through Schwitters' own house — a
  cave of white plaster grottoes and niches, each a shrine to a friend or an idea, that
  eventually broke through walls, floors, and the roof. The most ambitious Dada/Merz
  object, and a casualty of the war. [Tate-Merzbau][MoMA-Merzbau (via search)]
- **Rights:** ⚠️ **Object destroyed; only photographs survive, and those photos
  (Redemann 1933) have their own rights.** Treat as a special case — caption that only
  photos survive; verify any photo's PD status at gate 6.
- **Commons candidate:** search `Schwitters Merzbau Hannover Redemann 1933`.

### 8. Ernst — *The Hat Makes the Man (C'est le chapeau qui fait l'homme)*, 1920
- **Museum:** MoMA, New York.
- **Dimensions:** 35.2 × 45.1 cm = **~1 ft 1⅞ in × 1 ft 5¾ in**. Gouache, pencil, oil,
  and ink on cut-and-pasted printed paper on board. (Note the medium **includes oil** —
  MoMA's full title is *C'est le chapeau qui fait l'homme*.)
- **Blurb fact:** Rows of catalogue-cut hats stacked into wobbly, faintly phallic
  "figures," captioned with the title pun — Cologne Dada collage edging toward the dream
  logic of Surrealism. [MoMA-HatMan]
- **Rights:** pre-1930 reproduction is US-PD; **Ernst d.1976** → ⚠️ verify the specific
  file at gate 6 (long-lived; MoMA reproduction claim possible).
- **Commons candidate:** search `Max Ernst The Hat Makes the Man 1920`.

### 9. Ernst — *Celebes (The Elephant Celebes)*, 1921 — proto-Surrealist
- **Museum:** Tate, London (acq. 1975).
- **Dimensions:** 125.4 × 107.9 cm = **~4 ft 1⅜ in × 3 ft 6½ in**. Oil on canvas.
- **Blurb fact:** A monstrous boiler-bodied "elephant" looming on an empty plain —
  Cologne Dada tipping fully into the uncanny; widely called the first masterpiece of
  Surrealist painting in the de Chirico line. Good for the "Dada hatches Surrealism"
  hinge. [Tate-Celebes][W-Celebes]
- **Rights:** pre-1930 reproduction is US-PD; **Ernst d.1976** → ⚠️ verify the specific
  file at gate 6.
- **Commons candidate:** search `Max Ernst Celebes 1921`.

### 10. Arp — *Untitled (Collage with Squares Arranged according to the Laws of Chance)*, 1916–17 — THE "CHANCE" PRINCIPLE
- **Museum:** MoMA, New York.
- **Dimensions:** 48.5 × 34.6 cm = **~1 ft 7 in × 1 ft 1⅝ in**. Torn-and-pasted paper and
  colored paper on colored paper. ⚠️ MoMA holds a *distinct* 1917 Arp "Squares Arranged"
  collage (object 37166) — cite the right one (this is 37013, 1916–17).
- **Blurb fact:** Squares of torn colored paper dropped and glued where they fell —
  Zurich Dada handing the composition to **accident** instead of the trained eye. The
  founding object of "chance" as an art method. (Note: the orderly result suggests Arp
  didn't fully surrender control — a useful honest caveat.) [MoMA-ArpChance]
- **Rights:** pre-1930 reproduction is US-PD; **Arp d.1966** → ⚠️ verify the specific file
  at gate 6.
- **Commons candidate:** search `Arp Squares Arranged Laws of Chance 1916`.

### 11. Picabia — *Here, This Is Stieglitz Here (Ici, c'est ici Stieglitz / Foi et amour)*, 1915 — machine style (PREFER THIS over *Parade amoureuse*)
- **Museum:** The Metropolitan Museum of Art (Alfred Stieglitz Collection, 1949;
  objectID 488364). **Use this — it has a clean museum record;** *Parade amoureuse*
  (1917) is in a private collection with no citable museum page.
- **Dimensions:** 75.9 × 50.8 cm = **~2 ft 6 in × 1 ft 8 in**. Ink, graphite, and
  pasted/printed papers on paper.
- **Blurb fact:** A portrait of Alfred Stieglitz as a broken bellows camera — Picabia's
  signature dead-pan **mechanomorphic** style, drawing a person as an absurd machine
  schematic. Made as a mock cover for the journal *291* (July–Aug 1915). [Met-Picabia][W-Picabia]
- **Rights:** PD-US (pre-1930 reproduction). **Picabia d.1953** → cleared life+70 in
  2024; verify the file at gate 6.
- **Commons candidate:** search `Picabia Ici c'est ici Stieglitz 1915`.

### 12. Man Ray — *Gift (Cadeau)*, 1921 — readymade
- **Museum:** MoMA (the version held is a **c.1958 replica of the 1921 original**; the
  1921 original is lost).
- **Dimensions (MoMA c.1958 replica):** 15.3 × 9 × 11.4 cm = **~6 in × 3⅝ in × 4½ in**.
  Painted flatiron with a row of 14 tacks glued to its sole.
- **Blurb fact:** A clothes-iron made useless (and menacing) by a row of tacks on its
  face — built on the afternoon of Man Ray's first Paris show as a gift for the gallerist
  poet Philippe Soupault. Pure Dada object-sabotage. [MoMA-Gift]
- **Rights:** ⚠️ **3D object survives only as a c.1958 replica — a photo of the replica is
  NOT pre-1930.** Prefer a pre-1930 image or caption "original lost, later replica." Flag
  for gate 6.
- **Commons candidate:** search `Man Ray Gift Cadeau 1921` (filter for rights).

### 13. Man Ray — *Indestructible Object (Object to Be Destroyed)*, 1923/1964
- **Museum:** MoMA (a **1964 replica** of the 1923 original).
- **Dimensions (MoMA 1964 replica):** 22.5 × 11 × 11.6 cm = **~8⅞ in × 4⅜ in × 4⅝ in**.
  Metronome with a cut-out photograph of an eye clipped to the pendulum. (Made 1923 as
  *Object to Be Destroyed*, the eye that of Lee Miller; literally destroyed by protesters
  in 1957, then remade and renamed.)
- **Blurb fact:** A metronome ticking under the gaze of a single cut-out eye — Man Ray's
  joke about time, surveillance, and obsessive love (he later invited viewers to smash
  it, renaming it *Object to Be Destroyed*). [MoMA-Indestructible]
- **Rights:** ⚠️ object survives as 1964 replica — photo of replica NOT pre-1930. Flag for
  gate 6.
- **Commons candidate:** search `Man Ray Indestructible Object metronome`.

### 14. Janco / Taeuber-Arp — Zurich Dada objects (the painting + the Dada Head) — note
- **Marcel Janco (1895–1984), *Cabaret Voltaire*, 1916** (oil on canvas) — a painting of
  a Dada performance night (Janco later identified Ball at the piano, Tzara with arms
  outstretched). ⚠️ **ORIGINAL LOST** (disappeared ~1925); known only from a b/w
  photograph + later replicas (the Janco-Dada Museum, Ein Hod, Israel, holds a
  reproduction). No verified museum dimensions for the lost painting. Janco also made the
  African-mask-style **cardboard masks** worn in Cabaret Voltaire performances. ⚠️ Do not
  confuse with a later 60 × 42 cm lithograph also titled *Cabaret Voltaire*. [W-Janco]
- **Sophie Taeuber-Arp (1889–1943), *Tête dada (Dada Head / Dada-Kopf)*, 1920** (Centre
  Pompidou, MNAM, inv. AM 2003-332; **H 29.43 cm, diameter 14 cm** = ~11⅝ in tall;
  turned and painted wood) — a lathe-turned wooden head with "DADA" and the date painted
  on its face like a miniature manifesto; abstract and serene, a counterweight to the male
  Dadaists' aggression and proof the movement had serious women artists. ⚠️ Three
  different 1920 Taeuber-Arp heads exist (Pompidou / MoMA object 88254 / SFMOMA); the
  canonical "DADA"-lettered one is the **Pompidou *Tête dada***. [W-Taeuber]
- **Rights:** Janco d.1984, Taeuber-Arp d.1943 → both pre-1930 reproductions US-PD;
  Taeuber-Arp (d.1943) is cleaner (EU-PD since 2013). For the lost Janco painting, only
  the historic b/w photo is usable (likely PD by age); the museum replica is a new object.
  ⚠️ For the 3D wooden head, the museum photograph is the rights surface — verify at gate 6.

**Rights summary line for the coordinator:** *Every Dada PAINTING/COLLAGE (1916–1924) is
inlineable as a pre-1930 US-PD reproduction, but nearly every artist is long-lived so the
SPECIFIC file must be gate-6 checked. The TWO real traps: (1) the READYMADES and 3D
objects survive only as 1950s/1960s replicas — a photo of a replica is NOT pre-1930; for
*Fountain* use the Stieglitz 1917 photo (clean PD), and caption the others as "original
lost, later replica." (2) Schwitters' Merzbau is DESTROYED — only photos survive, with
their own rights.*

---

## 5. LINEAGE (the lineage block)

### Parents (what Dada grew out of)
- **Futurism** (Italy, 1909) — Dada took the **manifesto as a weapon**, the **provocation
  evening / scandal as art**, and the noisy total assault on the past. (Reference the
  Futurism read — don't re-tell it; the Futurism read should name Dada as a child.)
  [W-Dada][ArtStory-Dada]
- **Cubism** (Picasso & Braque, 1907–14) — Dada took **collage** (the cut-and-pasted
  fragment), the technique Berlin Dada turned political as photomontage. (Reference the
  Cubism read.) [W-Dada]
- **The First World War and its trauma** — the engine. Dada is unthinkable without the
  slaughter of WWI: a generation watching the most "civilized" nations butcher each other
  decided reason and beauty were a fraud. Zurich was a refugee island in the war; Berlin
  Dada is post-defeat rage. [Smith-Dada][ArtStory-Dada]
- **Duchamp's proto-readymades** — *Bicycle Wheel* (1913) and *Bottle Rack* (1914)
  predate Zurich Dada and feed straight into the movement's most durable idea. [W-Readymade]

### Children (what Dada fed)
- **Surrealism** (Paris, 1924) — the direct heir: Breton kept Dada's collage, chance, and
  provocation but pointed them at the **unconscious and the dream**. Dada's Paris wing
  simply became Surrealism. (gave: chance, collage, automatism, the readymade attitude.)
  [W-Dada][PMLA-Congress]
- **Pop Art** (1950s–60s) — took the **found commercial image** and the deadpan
  appropriation. (gave: the readymade logic, the everyday object as art.) [ArtStory-Dada]
- **Conceptual art** (1960s on) — the whole field flows from Duchamp's **readymade**: the
  idea matters more than the made object. (gave: art is a decision, not a craft.) [W-Readymade]
- **Fluxus** and **performance/happenings** (1960s) — took Dada's **chance, nonsense
  events, and anti-art attitude** wholesale. (gave: the event-as-art, chance procedures.) [ArtStory-Dada]
- **Punk** (1970s) — took the **cut-up photomontage**, the DIY collage aesthetic, and the
  nihilist provocation (the name "Dada" is name-checked by punk and its graphics descend
  from Heartfield). (gave: collage graphics, provocation, anti-everything.) [ArtStory-Photomontage]

---

## 6. ARTISTS ROW (~6) — one-line role + portrait-photo candidate

Period photos of these figures are 1900s–1940s; **pre-1930 photos are US-PD**, later ones
need checking. **Where no clean born-verified PD portrait exists, use the gradient
fallback.**

1. **Tristan Tzara** (1896–1963) — **the ringmaster and chief propagandist.** Romanian
   poet at the Cabaret Voltaire; wrote the famous **"Dada Manifesto 1918,"** ran the
   journal *Dada*, carried the movement to Paris in 1920, and feuded with both
   Huelsenbeck and Breton over who "owned" Dada. **Portrait:** verify a pre-1930 photo on
   Commons; else gradient. [W-Dada][Tzara-1918]
2. **Hugo Ball** (1886–1927) — **the founder.** German writer-director who opened the
   **Cabaret Voltaire** (1916) with Emmy Hennings, wrote the **first Dada manifesto**, and
   performed sound poems in a cardboard costume — then quit Dada within a couple of years
   for Catholic mysticism. (d.1927 = the only clearly life+70-cleared figure here.)
   Portrait: verify; else gradient. [Met-Ball][Ball-Manifesto]
3. **Hans (Jean) Arp** (1886–1966) — **the gentle abstractionist.** Alsatian artist who
   pioneered **chance** collages in Zurich, worked across Zurich and Cologne Dada, and
   bridged into Surrealism and biomorphic sculpture. Portrait: verify; else gradient. [MoMA-ArpChance]
4. **Marcel Duchamp** (1887–1968) — **the most consequential.** Invented the
   **readymade** (*Bicycle Wheel* 1913; *Fountain* 1917; *L.H.O.O.Q.* 1919) and reframed
   what art could be; central to New York and Paris Dada. Portrait: verify; else gradient.
   [W-Fountain][W-Readymade]
5. **Francis Picabia** (1879–1953) — **the machine-painter and provocateur.** Wealthy,
   restless; ran the journal **391**, painted humans as absurd machines, and helped link
   New York, Zurich, and Paris Dada. Portrait: verify; else gradient. [W-Picabia]
6. **Hannah Höch** (1889–1978) — **the great photomontagist, and the woman the men
   sidelined.** Berlin Dada's sharpest cut-and-paste satirist (*Cut with the Kitchen
   Knife*), kept out of the 1920 Dada Fair until Hausmann threatened to pull his work,
   and reduced by Hans Richter to "the sandwiches, beer and coffee." Portrait: verify;
   else gradient. [Smarthistory-Hoch][Artsy-Hoch]

(Optional 7th if room: **Kurt Schwitters**, 1887–1948 — the **one-man "Merz" movement**,
collages of street trash and the lost Merzbau. Or **Raoul Hausmann**, 1886–1971 — the
Berlin "Dadasoph" and *Mechanical Head*. Or **Sophie Taeuber-Arp**, 1889–1943 — the
serious Zurich abstractionist too often left off the list.) [W-Merz][W-Taeuber]

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **The First World War — Europe, 1914–1918.** Dada is born inside the war and is a
   direct reaction to it: while the Western Front fed millions into the trenches, the
   Dadaists in neutral Zurich answered the "civilization" that built the machine gun with
   nonsense and ridicule. The war is not background to Dada — it is the cause. [Smith-Dada][ArtStory-Dada]
2. **The Russian Revolution and Constructivism — 1917 on.** The same years Dada was
   clowning in Zurich and raging in Berlin, the Bolshevik Revolution (1917) and the rise
   of **Constructivism** (Tatlin, Rodchenko) were trying to build a brand-new
   machine-age art *for* a new society. A sharp contrast: where Berlin Dada used
   photomontage to **attack**, the Constructivists used it (and abstraction) to
   **build** — Dada's nihilism vs Constructivism's utopian engineering. [W-Dada]
3. **The birth of Surrealism — Paris, early 1920s.** Not so much "meanwhile" as "next":
   Paris Dada's split (Breton vs Tzara) gave way directly to **Surrealism** (Breton's
   1924 manifesto), which kept Dada's chance and collage but aimed them at the
   unconscious. The two overlap and hand off around 1922–24. [Cabinet-Barres][W-Dada]

---

## 8. NESTING — what the ERA / CUBISM / FUTURISM reads already cover (go DEEPER, don't duplicate)

- **The Modern era read** gives Dada a thumbnail with the hook **"A war in the background
  and a urinal in the foreground."** The movement read must go **DEEPER**: the
  Zurich-to-Paris city-hopping, the readymade/chance/photomontage mechanics, the specific
  works, the women-of-Dada honesty axis, and the Fountain authorship debate. **Don't
  re-narrate the era thumbnail; reference it tersely.**
- **The FUTURISM read** already covers the manifesto-as-weapon and the provocation
  evening in full. **Dada took both FROM Futurism** — reference Futurism as the parent for
  "the manifesto and the scandal," don't re-explain what Futurism is. The Futurism read's
  lineage already names Dada as a child; keep that reciprocal. [W-Dada]
- **The CUBISM read** already covers collage and the fractured plane. **Dada took collage
  FROM Cubism** (Berlin Dada turned it into political photomontage) — reference Cubism for
  "where collage came from," don't re-explain Cubism. [W-Dada]
- **Coordinator action item:** add reciprocal cross-links — Dada ← Futurism (manifesto +
  provocation) and Dada ← Cubism (collage); Dada → Surrealism (the direct child).
  Check/keep these mutually consistent in `src/lib/art-content.ts` (FUTU, CUBI, and a
  future SURR const).

---

## 9. SHAPE (suggested chapters — author may improve)

1. **The cabaret at the end of the world** — Zurich 1916, neutral ground in a Europe at
   war; Ball and Hennings open the Cabaret Voltaire; the sound poems, the masks, the
   cardboard costume; the name "Dada" (tell the dictionary legend AS legend); Ball's first
   manifesto and the gleeful "it means nothing." (Reference the era read; don't re-narrate
   it.)
2. **A urinal in New York** — the parallel New York scene (Duchamp, Picabia, Man Ray,
   Stieglitz); the readymade explained from *Bicycle Wheel* to **Fountain** (the "R.
   Mutt" submission, the "no jury" show that excluded it, the lost original and the
   Stieglitz photo); present the **Baroness Elsa authorship debate** honestly; *L.H.O.O.Q.*
   and the mustache on the Mona Lisa.
3. **Berlin cuts it up** — Dada turns political in a defeated Germany; **photomontage** as
   weapon (hedge the "who invented it" claim); Höch's *Cut with the Kitchen Knife*,
   Heartfield, Grosz; the 1920 Dada Fair; and the women of Dada sidelined by the men.
4. **Trash and one-man movements** — Hannover and Schwitters' **Merz** (collage from
   street garbage, the lost Merzbau); Cologne's Ernst and Arp and the axe-the-art show;
   **chance** as a method (Arp's torn paper). Dada with no single style and barely a
   single city.
5. **Paris, and the family feud** — Tzara arrives; the *Littérature* group (Breton,
   Aragon, Soupault, Éluard); the provocations and the mock Barrès trial; Breton vs Tzara,
   the failed Congress of Paris; Dada burns out around 1923.
6. **What Dada left** — Surrealism inherits it directly (1924); then the long afterlife —
   the readymade into Conceptual art, photomontage into Heartfield and punk, chance into
   Fluxus; and the 2004 poll that named a urinal the most influential artwork of the
   century. Hold both halves: a prank that felt like the end of art, and the seedbed of
   everything after.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House dry wit dialled up (Dada rewards it); comparisons welcome; inline-define every term
(manifesto, avant-garde, readymade, "rectified readymade," photomontage, collage,
assemblage, "anti-art," chance/aleatory, sound poem, mechanomorphic, the Salon/jury) —
reader has zero prior knowledge, though some met manifesto/collage/Cubism/Futurism in the
adjacent reads (terse callback). **Make the reader GET the joke AND the seriousness** —
that a urinal called sculpture is both a gag and the most consequential idea in modern
art. **Framing — the honesty floor:** present the **Fountain authorship debate** (Duchamp
vs Baroness Elsa) without resolving it; name the **women of Dada** (Höch, Taeuber-Arp,
Hennings, Baroness Elsa) and the documented sexism they faced; tell the dictionary
name-origin AS a legend, not fact; hedge every "first" (first readymade, first
photomontage); be precise about "anti-art" (a label as much as a self-description). **No
em-dashes in shipping prose** (not the char, not `&mdash;`). Storytelling first; accuracy
a hard floor; the only direct quotes are the manifesto lines (all gated to one named
translation) — no invented quotes.

### HONESTY — the framing-gate axes spelled out (research-locked)
- **The women of Dada (the central framing axis):** Dada had serious women artists whom
  the male members sidelined. **Hannah Höch** was kept out of the 1920 Berlin Dada Fair
  until Hausmann (her partner) threatened to withdraw, and Hans Richter later reduced her
  to "the sandwiches, beer and coffee… despite the shortage of money"; her retort: "I paid
  for them! I couldn't do magic. I worked." Höch herself wrote the men "continued… to look
  on us women artists as charming and gifted amateurs, denying us any real professional
  status." **Sophie Taeuber-Arp** (serious Zurich abstractionist), **Emmy Hennings**
  (co-founder of the Cabaret Voltaire, usually credited only as a performer), and the
  **Baroness Elsa von Freytag-Loringhoven** (New York performance-artist-before-the-term)
  belong in the story, not the footnotes. Name them; name the sexism. [Artsy-Hoch][Artnet-Hoch][W-CabVoltaire]
- **Fountain — documented vs legend (do not flatten):** documented = porcelain urinal,
  "R. Mutt 1917," submitted to the 1917 Society of Independent Artists "no jury, no
  prizes" show and excluded from view, original lost, only the Stieglitz photo survives,
  later authorized replicas, Duchamp + Arensberg resigned the board. **Disputed** = whether
  Duchamp *personally* submitted it, and the **Baroness Elsa authorship** argument (his
  1917 letter: "one of my female friends under a masculine pseudonym, Richard Mutt, sent in
  a porcelain urinal as a sculpture"). Present the debate; resolve neither. The "Richard
  Mutt Case" defense in *The Blind Man* (May 1917, anonymous, generally attributed to
  Beatrice Wood / the Duchamp circle): "Whether Mr Mutt with his own hands made the
  fountain or not has no importance. He CHOSE it." [Tate-Fountain][Phila-Fountain][W-Fountain][ArtNews-Fountain]
- **"Anti-art":** be precise. Dada rejected the gallery/museum cult, bourgeois taste, and
  the idea that art needs skill, beauty, or sense — but "anti-art" is as much a **later
  critical label** as a Dada banner; don't assert the Dadaists branded themselves that
  way without hedging. [Tate-Dada][ArtStory-Dada]
- **"First" claims — hedge all of them:** "first readymade" (Duchamp's *Bicycle Wheel*
  1913, but he coined "readymade" only ~1915); "first photomontage" (Grosz/Heartfield vs
  Hausmann/Höch both claimed it, and the technique predates Dada — Dada politicized it);
  the dictionary name-origin (a legend, Huelsenbeck usual claimant, Tzara rival claim,
  "a word was born no one knows how"). [W-Readymade][ArtStory-Photomontage][ArtStory-Dada]

---

## Source key (for the writer & fact-checker)

- **[W-Dada]** Wikipedia, *Dada* (cities, journals, Paris split, Surrealism handoff).
- **[W-CabVoltaire]** Wikipedia, *Cabaret Voltaire (Zurich)* (opened 5 Feb 1916, Spiegelgasse 1, Ball + Hennings; early circle).
- **[W-DadaManifesto]** Wikipedia, *Dada Manifesto* (Ball, 14 July 1916, Waag Hall, Bastille Day).
- **[Ball-Manifesto]** The Anarchist Library, Hugo Ball, *Dada Manifesto* (full open text) — `theanarchistlibrary.org/library/hugo-ball-dada-manifesto` (confirmed open, no wall, 2026-06-18).
- **[Tzara-1918]** 391.org, *Dada Manifesto (1918) – Tristan Tzara* (full open text) — `391.org/manifestos/1918-dada-manifesto-tristan-tzara/` (confirmed open, no wall, 2026-06-18). Print source: Motherwell anthology (translator Manheim vs Motherwell ambiguous — verify).
- **[Motherwell]** Robert Motherwell (ed.), *The Dada Painters and Poets: An Anthology* (Wittenborn, Schultz, 1951; 2nd ed. 1967) — the canonical English source for both manifestos; gate printed wording here.
- **[ArtStory-Dada]** TheArtStory, *Dada* movement overview ("little agreement" on the name; anti-art; the war).
- **[Brit-Dada]** Britannica, *Dada* (knife-into-dictionary legend; Huelsenbeck/Tzara rivalry) — *note: live page 403'd; corroborated via search snippet, re-verify.*
- **[Tate-Dada]** Tate, art term *Dada* (does NOT repeat the knife story — don't cite it for that).
- **[mital-u]** mital-u.ch, Zurich Dada / Cabaret Voltaire (corroborating).
- **[Met-Ball]** The Met, Leonard A. Lauder Research Center, *Hugo Ball and Emmy Hennings* — *note: 429/403 on fetch; corroborated via snippet, re-verify.*
- **[Dartmouth-Karawane]** Dartmouth Dada project, *Karawane* (sound poem, costume, June 1916).
- **[ArtStory-Ball]** TheArtStory, *Hugo Ball* (costume, sound poems).
- **[W-Fountain]** Wikipedia, *Fountain (Duchamp)* (R. Mutt/Mott origin; Duchamp's letter French+English; resignation; lost original; 1964 Schwarz edition).
- **[Tate-Fountain]** Tate, *Fountain* record (replica no. 2 of 8, Galleria Schwarz 1964) — `tate.org.uk/art/artworks/duchamp-fountain-t07573`.
- **[SFMOMA-Fountain]** SFMOMA, *Fountain* (1917/1964).
- **[Phila-Fountain]** Philadelphia Museum of Art, *Marcel Duchamp and the Fountain Scandal* (excluded/voted down; 1950 replica; Blind Man quote; Duchamp + Arensberg resigned).
- **[ArtNews-Fountain]** *The Art Newspaper*, letters on the Baroness-Elsa authorship debate (2014/2020) — present BOTH sides.
- **[Artsy-Baroness]** Artsy, *Elsa von Freytag-Loringhoven, the Dada Baroness Who Invented the Readymade—before Duchamp*.
- **[Gammel]** Irene Gammel, *Baroness Elsa: Gender, Dada, and Everyday Modernity* (MIT Press, 2002) — scholarly anchor for the Baroness case (verify page before quoting).
- **[Artforum-Poll]** Artforum, *Duchamp's Fountain Voted Most Influential Artwork* (2 Dec 2004; 500 art professionals; Gordon's/Turner Prize; ahead of *Demoiselles* and *Marilyn Diptych*).
- **[W-LHOOQ]** Wikipedia, *L.H.O.O.Q.* (1919; "Elle a chaud au cul"; rectified readymade; Duchamp's "fire down below" gloss).
- **[MoMA-BicycleWheel]** MoMA collection record, Duchamp, *Bicycle Wheel* (1951 replica of lost 1913 original).
- **[W-Readymade]** Wikipedia, *Readymades of Marcel Duchamp* (1913 *Bicycle Wheel*; term coined ~1915; *Bottle Rack* 1914).
- **[Smarthistory-Hoch]** Smarthistory, *Hannah Höch, Cut with the Kitchen Knife…* (114 × 90 cm; Nationalgalerie Berlin).
- **[MoMA-HochCat]** MoMA, *The Photomontages of Hannah Höch* (1997 catalogue PDF) — dimensions.
- **[Artsy-Hoch]** Artsy, *Hannah Höch, a Female Dada Pioneer* (sidelining by male peers).
- **[Artnet-Hoch]** Artnet News, words/wisdom on Höch (Richter "sandwiches, beer and coffee" line; her retort).
- **[Pompidou-Hausmann]** Centre Pompidou collection, Hausmann, *Mechanical Head (Spirit of Our Time)* (32.5 × 21 × 20 cm; acq. 1974) — via search; re-verify live page.
- **[MoMA-CherryPicture]** MoMA collection record, Schwitters, *Merz Picture 32 A. The Cherry Picture* (91.8 × 70.5 cm; 1921) — `moma.org/collection/works/33356`.
- **[Tate-Merzbau]** Tate Papers, *Kurt Schwitters: Reconstructions of the Merzbau* (begun mid-1920s, main room c.1927; destroyed Oct 1943; only photos survive).
- **[MoMA-Merzbau]** MoMA, *In Search of Lost Art: Schwitters's Merzbau* (destruction; Redemann photos) — via snippet; re-verify.
- **[W-Merz]** Wikipedia, *Merz (art style)* ("Commerzbank" fragment origin).
- **[W-AnnaBlume]** Wikipedia, *An Anna Blume* (Schwitters poem, 1919).
- **[MoMA-HatMan]** MoMA collection record, Ernst, *The Hat Makes the Man* (35.2 × 45.1 cm; 1920) — `moma.org/collection/works/35478`.
- **[Tate-Celebes]** Tate, *Celebes* record (Ernst, 1921; 125.4 × 107.9 cm; oil on canvas; acq. 1975) — `tate.org.uk/art/artworks/ernst-celebes-t01988`.
- **[W-Celebes]** Wikipedia, *The Elephant Celebes* (proto-Surrealist; "first masterpiece of Surrealist painting").
- **[MoMA-ArpChance]** MoMA collection record, Arp, *Untitled (Collage with Squares Arranged according to the Laws of Chance)* (1916–17) — `moma.org/collection/works/37013`.
- **[W-Picabia]** Wikipedia, *Francis Picabia* (machine/mechanomorphic style; *391*; *Parade amoureuse* 1917).
- **[Met-Picabia]** The Met collection record, Picabia, *Here, This Is Stieglitz Here (Ici, c'est ici Stieglitz)* (1915; 75.9 × 50.8 cm; ink/graphite/pasted paper; objectID 488364; Alfred Stieglitz Collection).
- **[MoMA-Gift]** MoMA collection record, Man Ray, *Gift* (c.1958 replica of 1921 original; flatiron + 14 tacks) — `moma.org/collection/works/81212`.
- **[MoMA-Indestructible]** MoMA collection record, Man Ray, *Indestructible Object* (1964 replica of 1923; metronome + eye).
- **[W-Janco]** Wikipedia, *Marcel Janco* (Cabaret Voltaire masks; lost 1916 *Cabaret Voltaire* painting).
- **[W-Taeuber]** Wikipedia, *Sophie Taeuber-Arp* (Zurich Dada; *Dada Head*; d.1943).
- **[W-DadaFair]** Wikipedia, *First International Dada Fair* (Berlin, 30 June–25 Aug 1920; Burchard gallery; Höch inclusion / Hausmann threat).
- **[AHUnstuffed]** Art History Unstuffed, *The Photo-Montage Revolution: Dada in Berlin* (the invention dispute).
- **[ArtStory-Photomontage]** TheArtStory, *Photomontage* (rival claims; predates Dada).
- **[Smith-Dada]** Smithsonian Magazine, *A Brief History of Dada* (the war; Cologne toilet/axe/Dürer show; Merz).
- **[Moderna-Ernst]** Moderna Museet, *Max Ernst in Germany* (Cologne Dada; Ernst).
- **[Cabinet-Barres]** Cabinet Magazine, Colby Chamberlain, *Dada on Trial* (Barrès trial 13 May 1921; Breton–Tzara rift).
- **[Breton-Litterature]** André Breton official site, *Littérature* (founded March 1919; Breton/Aragon/Soupault).
- **[PMLA-Congress]** *PMLA* (Cambridge Core), *Federating the Modern Spirit: The 1922 Congress of Paris* (the split; death of Paris Dada).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Dada = art turning on the idea of art** (~1916–1924), born in neutral **Zurich** as
   a horse-laugh at the civilization that produced WWI. The **Cabaret Voltaire** (Ball +
   Hennings, opened **5 Feb 1916**) is the seedbed; the name "Dada" is deliberately
   meaningless (the knife-in-the-dictionary origin is a **LEGEND**, present it as one).
2. **Three things outlived the joke and changed art permanently:** the **readymade**
   (Duchamp: choosing, not making, is what makes art — *Bicycle Wheel* 1913, **Fountain**
   1917, *L.H.O.O.Q.* 1919), **photomontage** (Berlin Dada's political cut-and-paste —
   Höch, Heartfield, Grosz), and **chance** (Arp's torn paper). Multi-city: Zurich, New
   York, Berlin (political), Hannover (Schwitters' Merz), Cologne (Ernst), Paris.
3. **Manifesto = PRESENT (`absent:false`)** and Dada is manifesto-rich. Quote accurately:
   **Ball 1916** ("Dada is a new tendency in art"; "How does one achieve eternal bliss? By
   saying dada") and **Tzara 1918** ("DADA DOES NOT MEAN ANYTHING"; "I am against systems,
   the most acceptable system is on principle to have none"). Open source links:
   **391.org** (Tzara) + **Anarchist Library** (Ball), both confirmed open. Gate wording
   to ONE named translation (Motherwell anthology; translator Manheim-vs-Motherwell is
   **ambiguous — verify**).
4. **The honesty axes (non-negotiable):** (a) the **women of Dada** — Höch sidelined by
   the men (the "sandwiches, beer and coffee" line), plus Taeuber-Arp, Hennings, Baroness
   Elsa — name them and the sexism; (b) the **Fountain authorship debate** (Duchamp vs the
   **Baroness Elsa von Freytag-Loringhoven**, via his 1917 "female friend" letter) —
   present both sides, **resolve neither**; (c) hedge every **"first"** (first readymade,
   first photomontage — the technique predates Dada) and the **dictionary name legend**;
   (d) be precise that **"anti-art"** is partly a later label.
5. **Image rights (the app gate):** every Dada **painting/collage** (1916–24) is
   inlineable as a **pre-1930 US-PD reproduction**, BUT nearly every artist is **long-lived**
   (Arp '66, Ernst '76, Höch '78, Schwitters '48, Man Ray '76, Hausmann '71, Duchamp '68)
   so the **specific file must be gate-6 checked**. **TWO TRAPS:** (1) the **readymades/3D
   objects survive only as 1950s/60s replicas** — a photo of a replica is NOT pre-1930
   (for **Fountain** use the **Stieglitz 1917 photo**, clean PD; caption the others
   "original lost, later replica"); (2) Schwitters' **Merzbau is DESTROYED** — only photos
   survive, with their own rights.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **The dictionary knife-origin of "Dada" is a LEGEND** — name Huelsenbeck (usual
  claimant) + Tzara's rival claim, quote "a word was born no one knows how," and do NOT
  state it as fact. Do NOT cite Tate for the knife story (Tate doesn't repeat it).
- ⚠️ **Fountain authorship (Duchamp vs Baroness Elsa) is genuinely disputed** — present
  both sides with sources; resolve neither. Mainstream attribution is still Duchamp, but
  the Baroness case (Thompson/Spalding/Gammel) is serious and the "female friend" letter
  is read both ways.
- ⚠️ **Manifesto quotes vary by source/translation** — 391.org capitalizes "DADA DOES NOT
  MEAN ANYTHING"; the Motherwell/Manheim print may differ. Pick ONE named source per quote
  and don't mix. The translator credit (Manheim vs Motherwell) is ambiguous — verify
  before printing a name.
- ⚠️ **Replica trap** — *Fountain*, *Bicycle Wheel*, *Bottle Rack*, Man Ray's *Gift* and
  *Indestructible Object* all survive only as **later replicas**; their famous museum
  photos are post-1930. Use pre-1930 images (or the Stieglitz Fountain photo) and caption
  the replica status. Schwitters' Merzbau is destroyed (photo-only).
- ⚠️ **Don't duplicate Futurism or Cubism** — Dada took the manifesto/provocation from
  Futurism and collage from Cubism; reference those reads, don't re-explain them.
  Coordinator: add reciprocal cross-links Dada ← Futurism, Dada ← Cubism, Dada → Surrealism.
- ⚠️ **A few museum/Britannica/Met pages 403'd the fetcher** (Britannica *Dada*, Met
  *Ball and Hennings*, MoMA Merzbau, Pompidou Hausmann) — those facts are snippet-backed
  + corroborated by a fully-fetched source; have the fact-checker pull those single pages
  by hand to harden (esp. the Nationalgalerie *Cut with the Kitchen Knife* object record
  and the Pompidou *Mechanical Head* record).
