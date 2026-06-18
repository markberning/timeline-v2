# Fact pack — POP ART (kind: MOVEMENT, Modern era, c.1956 → c.1970, with proto-Pop from c.1947; Britain FIRST, then the USA)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces to a
sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-18; the
fact-checker gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Pop Art movement** read: `/art/mod/pop` → `…/s/{sectionId}`. (Coordinator
  registers the `pop` const in `src/lib/art-content.ts`: range `c.1956–c.1970`, Modern
  era. **Card-image candidate** = an even WORSE image-rights case than Surrealism. The
  movement is **c.1947–1970**, so **essentially EVERY canonical work is IN COPYRIGHT**
  (Warhol d.1987, Lichtenstein d.1997, Hamilton d.2011, Paolozzi d.2005, Rauschenberg
  d.2008, Johns b.1930 still living 2026, Oldenburg d.2022, Rosenquist d.2017, Wesselmann
  d.2004). **There is NO inlineable canonical Pop artwork.** The card MUST therefore be a
  **US-PD PERIOD PHOTOGRAPH of the consumer culture Pop mirrored** — a 1950s–60s American
  supermarket aisle, a Times Square wall of billboards, a diner, a supermarket shelf of
  branded packaging — clearly captioned as **period context, NOT a Pop artwork.** See §4
  for the rights reality and the candidate PD photos; this is the load-bearing section.)
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Movement-page metadata (the break block, the
  manifesto block, the canon list, lineage, artists row, parallels) the coordinator
  assembles from this pack; per-work DEEP reads come in a later pass.

## Throughline (the one idea)
Where Abstract Expressionism was hot, gestural, heroic, and inward — paint flung from the
soul of a lone genius — **Pop Art turned cool, flat, mechanical, and outward, and it built
art out of the stuff everybody already looked at every day: soup cans, comic strips,
advertising, movie stars, supermarket packaging.** It started in **Britain first**, not
America: a circle of young artists, critics, and architects called the **Independent
Group** met at London's ICA in the early-mid 1950s and got obsessed with the glossy
American mass culture flooding postwar Britain — Hollywood, Detroit cars, Madison Avenue
ads, sci-fi pulp. **Eduardo Paolozzi** glued magazine cuttings into collages (the *BUNK!*
series, from 1947); **Richard Hamilton** made the tiny 1956 collage *Just what is it that
makes today's homes so different, so appealing?* and the next year wrote down a definition
of Pop that reads like an ad slogan: **"Popular, transient, expendable, low cost, mass
produced, young, witty, sexy, gimmicky, glamorous, big business."** Then America took the
idea and made it enormous. **Andy Warhol** silkscreened Campbell's soup cans and Marilyn
Monroe, ran a studio he called **the Factory**, and said **"I want to be a machine."**
**Roy Lichtenstein** blew up comic-book panels, Ben-Day dots and all. **Claes Oldenburg**
made giant soft hamburgers; **James Rosenquist** painted at billboard scale. The deep
question Pop never settles: is it **celebrating** consumer abundance or **criticizing**
it? Hold that open — it is genuinely debated, and the work is deadpan on purpose. Hold the
honesty axes too: Pop was overwhelmingly white and male, its women (Pauline Boty, Marisol,
Rosalyn Drexler, Idelle Weber) were largely written out, and Warhol's "machine" ran on the
uncredited labor of Factory assistants — and on a real commercial designer, **James
Harvey**, whose Brillo box Warhol copied.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| Pop Art started in America with Warhol | **MYTH — Pop started in BRITAIN, years before Warhol** | The term and the first Pop works come out of London's **Independent Group** at the ICA in the **early-mid 1950s** (first convened winter **1952–53**). **Paolozzi**'s pop-source collages run from **1947**; **Hamilton**'s *Just what is it…* and the **"This Is Tomorrow"** show are **1956**. Warhol's soup cans are **1962**. State it plainly: **British Pop came first**, American Pop is the second, bigger wave. The word "Pop art" is usually credited to British critic **Lawrence Alloway** (of the Independent Group), used in the mid-1950s. ⚠️ Verify the exact Alloway coinage date/phrasing at gate 1 — accounts vary on whether he meant the popular culture itself or the art. [Tate-IG][Tate-Pop][Smarthistory-Hamilton] |
| Hamilton wrote a "Pop manifesto" | **HEDGE — it was a PRIVATE LETTER, not a public manifesto** | In **1957** Hamilton listed the "characteristics of pop art" in a **letter to the architects Alison and Peter Smithson** (fellow Independent Group members): *"Pop Art is: Popular … Transient … Expendable … Low cost … Mass produced … Young … Witty … Sexy … Gimmicky … Glamorous … Big business."* It became the de-facto definition, but it was a letter between friends, not a published manifesto. Treat it as the **nearest thing** to a manifesto (§3). [Tate-Pop][ArtUK-Hamilton] |
| Warhol said "In the future everyone will be world-famous for 15 minutes" | **DOCUMENTED in print 1968, but attribution is DISPUTED — flag it** | The line appears in the catalogue of Warhol's **1968 Moderna Museet (Stockholm) retrospective**. But curators **Pontus Hultén** and **Olle Granath** later said the quote may have been **inserted by Hultén**, not actually spoken by Warhol (Hultén: "if he didn't say it, he could very well have said it"). Warhol himself later joked he was tired of it. **Present it as "the line attached to Warhol, first printed 1968, possibly not his own words" — do NOT state flatly that he said it.** [QuoteInvestigator-15min][Smithsonian-15min] |
| Warhol said "I want to be a machine" | **DOCUMENTED (1963 interview) but the published version was EDITED** | From G. R. Swenson's interview **"What Is Pop Art?"** in **ARTnews, November 1963**: *"The reason I'm painting this way is that I want to be a machine."* ⚠️ Art historian **Jennifer Sichel** (2018) published the original tape: the 1963 edit **cut the surrounding queer content** (the "machine" remark sat inside a conversation about sexuality and "liking everything"). Quote it as the 1963 published line, but you may note the editing honestly. [Warholstars-Machine][Wikiquote-Warhol] |
| Warhol invented the Brillo box / Campbell's design | **MYTH — both were existing COMMERCIAL designs Warhol appropriated** | The **Brillo soap-pad box** was designed in **1961 by James Harvey**, a commercial artist (and abstract painter by night); Harvey reportedly walked into Warhol's 1964 Stable Gallery show and saw his own package on display as art. The Campbell's label was the company's. **This is the heart of Pop — and an honesty axis:** Warhol took real commercial design and re-presented it. Name James Harvey. [W-JamesHarvey][Gothamist-Brillo] |
| Pop Art celebrates consumerism | **GENUINELY DEBATED — hold it OPEN, do not resolve it** | Whether Pop **celebrates** mass-consumer abundance or **critiques** it (deadpan, ironic, complicit) is an unsettled, central question — the artists were mostly cool and noncommittal on purpose, and critics split. Present BOTH readings; refuse to flatten it either way. [TheCollector-Consumerism][Tate-Pop] |
| Lichtenstein "just copied" comics | **PARTLY — he copied AND altered, and the source artists went uncredited** | Lichtenstein worked from real comic panels (e.g. *Whaam!* from DC's *All-American Men of War*) but **recomposed, simplified, and recolored** them and hand-painted the Ben-Day dots. The original comic artists (often **Russ Heath**, **Irv Novick**) were **not credited and not paid**, which has become a documented criticism. Name it as an honesty point, not a takedown. [W-Whaam][Tate-Whaam] |
| Johns and Rauschenberg were Pop artists | **HEDGE — they are the BRIDGE, usually classed Neo-Dada, not Pop proper** | **Jasper Johns** (*Flag*, 1954–55) and **Robert Rauschenberg** (the **combines**, e.g. *Bed*, 1955) broke from Abstract Expressionism by bringing the everyday object/image back in, and they **opened the door** to Pop — but they are usually labeled **Neo-Dada**, not Pop. Present them as the bridge from AbEx, not as core Pop. [MoMA-Johns][MoMA-RauschBed] |

---

## 1. THE MOVEMENT STORY (Britain first → America bigger → the idea → the women → the debate)

### Britain first — the Independent Group (London, early-mid 1950s)
- The **Independent Group (IG)** — young artists, critics, and architects — met at the
  **Institute of Contemporary Arts (ICA), London**, first convened **winter 1952–53**,
  again 1953–54. Core figures: **Richard Hamilton, Eduardo Paolozzi, Nigel Henderson,
  John McHale, William Turnbull**, the critics **Lawrence Alloway** and **Reyner Banham**,
  and the architects **Alison and Peter Smithson**. They were fascinated by the glossy
  **American mass culture** pouring into austere postwar Britain — Hollywood, Detroit cars,
  advertising, sci-fi, comics, packaging. [Tate-IG][ICON-IG]
- **Eduardo Paolozzi** had been gluing American magazine/advertising cuttings into
  collages since **1947**; he showed a slide-lecture of them at the ICA in **1952**, later
  collected as the ***BUNK!*** series. ***I was a Rich Man's Plaything*** (**1947**, Tate)
  — a pulp-magazine cover, a Coca-Cola ad, a pin-up, a cherry-pie ad, and a pointing
  hand, with a toy gun firing the word **"POP!"** — is often called the first appearance
  of the very word in this art. [W-RichMansPlaything][DailyArt-Paolozzi]
- **"This Is Tomorrow"** — **Whitechapel Art Gallery, London, August 1956** — twelve
  interdisciplinary teams (38 participants), the core drawn from the IG. For the catalogue,
  **Richard Hamilton** made the small collage ***Just what is it that makes today's homes
  so different, so appealing?*** (1956): a muscle-man holding a giant **Tootsie Pop**
  lollipop ("POP"), a pin-up, a TV, a tape recorder, a Ford lampshade, a tinned ham, a
  comic-book framed as wall art — the whole consumer dream packed into one room. Widely
  called the first iconic Pop work. [W-ThisIsTomorrow][Smarthistory-Hamilton][Wiki-JustWhatIsIt]
- **Hamilton's 1957 letter** to the Smithsons listed the **"characteristics of pop art"**
  (see §3) — the closest thing the movement has to a manifesto. [Tate-Pop][ArtUK-Hamilton]
- A British Pop generation followed: **Peter Blake** (later the *Sgt. Pepper* sleeve, 1967),
  **David Hockney**, **Allen Jones**, **R. B. Kitaj**, **Derek Boshier**, and the one
  prominent woman, **Pauline Boty** (see the women axis). [Tate-Pop][Widewalls-Women]

### The bridge from Abstract Expressionism (USA, mid-1950s)
- By the mid-1950s **Abstract Expressionism** (Pollock, de Kooning, Rothko) ruled American
  art: huge, gestural, emotional, abstract, the heroic lone painter. Two younger New
  Yorkers cracked it open by **bringing the real world back in** (usually classed
  **Neo-Dada**, the door to Pop, NOT Pop proper — §0):
  - **Jasper Johns** — ***Flag*** (**1954–55**, MoMA): the US flag painted in **encaustic**
    (pigment in hot wax) over newsprint on cut bedsheet — a flat, familiar, "already a
    flat thing" image, neither abstract nor expressive. [MoMA-Johns][Smarthistory-Johns]
  - **Robert Rauschenberg** — the **combines** (a term he coined for paintings with found
    objects attached), e.g. ***Bed*** (**1955**, MoMA): a real quilt, sheet, and pillow
    splashed with paint and hung on the wall. Studio-neighbor and close associate of Johns;
    both resisted AbEx at its peak. [MoMA-RauschBed][TheArtStory-Rausch]

### America makes it enormous (early-mid 1960s)
- **Andy Warhol** — the central figure. ***Campbell's Soup Cans*** (**1962**, MoMA): 32
  near-identical canvases (one per soup variety), first shown at the **Ferus Gallery, Los
  Angeles, July 1962**; ***Marilyn Diptych*** (**1962**, Tate): fifty silkscreened Marilyns
  (made just after her August 1962 death), bright on the left fading to ghostly on the
  right. Warhol moved into **the Factory** (his silver-foiled studio) in **1962–64**,
  industrialized art-making with **silkscreen** and assistants, made the ***Brillo
  Boxes*** (**1964**, Stable Gallery — plywood boxes silkscreened to look like the
  shipping cartons), and declared **"I want to be a machine."** [MoMA-SoupCans][SmartH-Marilyn][W-BrilloBoxes][Warholstars-Machine]
- **Roy Lichtenstein** — comic-book paintings in primary colors with hand-painted
  **Ben-Day dots** (the dotted screen of cheap newspaper/comic printing). ***Whaam!***
  (**1963**, Tate, a diptych) and ***Drowning Girl*** (**1963**, MoMA) are the icons.
  [Tate-Whaam][MoMA-DrowningGirl][W-Whaam]
- **Claes Oldenburg** — ***The Store*** (**1961**): a rented Lower East Side storefront
  where he sold painted-plaster hamburgers, cakes, and goods; then the **soft sculptures**
  (giant floppy vinyl/canvas hamburgers, typewriters, fans) and monumental public objects.
  [MoMA-TheStore][TheArtStory-Oldenburg]
- **James Rosenquist** — billboard scale (he'd been a billboard painter); ***F-111***
  (**1964–65**, MoMA): a fighter-bomber the length of the room, spliced with spaghetti, a
  tire, a child under a hair-dryer, an atomic blast. [MoMA-Rosenquist]
- **Tom Wesselmann** — the ***Great American Nude*** series (objectified flat nudes amid
  branded products); **Ed Ruscha** — gas stations, the **Standard Station**, and word-images
  on the West Coast. [Tate-Pop][TheArtStory-PopMovement]

### The idea (what Pop actually argued)
- **Subject:** mass/commercial culture itself — advertising, comics, packaging, celebrity,
  the supermarket, the highway. The lowest, most disposable imagery becomes the content of
  fine art. [Tate-Pop]
- **Manner:** **cool, flat, deadpan, impersonal, mechanical** — the exact opposite of
  AbEx's hot, gestural, soul-baring brushwork. **Silkscreen and Ben-Day dots erase the
  artist's hand** on purpose; Warhol wanted to be "a machine" and used assistants.
  [Warholstars-Machine][Tate-Pop]
- **The blur of high and low:** Pop dissolves the wall between fine art and the commercial
  image — a soup label or a comic panel is now museum art, and the question of whether
  that elevates the everyday or empties out art is the point. [Tate-Pop][TheCollector-Consumerism]

### The women (a framing axis — see §"honesty")
- Pop is remembered as a boys' club, and its women were **largely written out**: **Pauline
  Boty** (1938–1966, the one woman of British Pop, who painted the male gaze and female
  desire and died at 28), **Marisol** (Marisol Escobar, the wood-totem sculptor Warhol
  called "the first girl artist with glamour"), **Rosalyn Drexler** (paint-and-collage film
  scenes), **Idelle Weber** (silhouetted businessmen in plexiglass), plus **Marjorie
  Strider**, **Evelyne Axell**, **Jann Haworth**, and **Letty Lou Eisenhauer**. Name them
  as artists; name the erasure. [Artforum-WomenPop][Artsy-WomenPop][Widewalls-Women]

### The debate Pop never settles (hold it open)
- **Celebration or critique?** Is Pop a love letter to consumer abundance or a deadpan
  indictment of it? The artists were studiously noncommittal; critics split; the work is
  ambiguous on purpose. Do NOT resolve it. [TheCollector-Consumerism][Tate-Pop]

### Afterlife
- Pop made **commercial imagery a permanent subject of art**, normalized **mechanical
  reproduction and appropriation** (straight line to Warhol's later work, to **Photorealism**,
  to **the Pictures Generation** of the late 1970s–80s, and to **Jeff Koons** and Neo-Pop),
  and erased the high/low boundary so thoroughly that the museum and the supermarket now
  speak the same visual language. [Tate-Pop][TheArtStory-PopMovement]

**Why it mattered (one paragraph for the writer):** Pop Art ended Abstract Expressionism's
reign by doing the opposite of everything it stood for: cool not hot, flat not gestural,
mechanical not soulful, and made of the cheapest mass imagery instead of the artist's
private inner life. It started in **Britain** (the Independent Group, Hamilton, Paolozzi)
and got huge in **America** (Warhol, Lichtenstein, Oldenburg). It permanently dissolved the
wall between fine art and the commercial image, made **appropriation and mechanical
reproduction** legitimate, and left a question it deliberately never answers: is this art
celebrating the supermarket or burying us in it? It also shows the era's blind spots — a
near-all-white, mostly-male canon, its women erased, and a star who built "machine" art on
other people's uncredited labor. Both halves are the story. [Tate-Pop][Artforum-WomenPop]

---

## 2. THE BREAK BLOCK (`whatChanged`) — art turns to the supermarket, and goes cool

The concrete change, stated plainly (not "revolutionary"):

> **Before:** Abstract Expressionism owned American art in the 1950s — huge canvases of
> pure gesture and feeling, paint flung or poured straight from the artist's inner life,
> abstract, heroic, deadly serious, the lone genius baring his soul. Even its rebels still
> believed art came from INSIDE the artist.
>
> **After (Pop):** art turns OUTWARD to the most public, disposable images everyone already
> sees every day — soup labels, comic panels, movie stars, billboards, packaging — and
> treats them dead straight. And it goes COOL: flat, deadpan, mechanical, impersonal, the
> artist's hand deliberately erased by silkscreen and Ben-Day dots. Warhol says he wants to
> be "a machine." A Campbell's soup can hangs where a Rothko hung. The subject of art is no
> longer the artist's soul; it is the shared world of advertising and the store — and
> whether that's a celebration or an indictment is left, on purpose, unanswered.

### Before/after pair (born-verified candidates — RIGHTS-FLAGGED)

⚠️ **CRITICAL: the "after" CANNOT be a real Pop work — they are ALL in copyright (see §4).**
Likewise the cleanest "before" (an Abstract Expressionism canvas) is **also in copyright**
(Pollock d.1956, Rothko d.1970, de Kooning d.1997 — all post-1930 work). So the standard
"show two paintings" before/after **cannot be built from images here.** Recommendation
below.

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — art from the artist's inner life (Abstract Expressionism)** | A Pollock drip painting or Rothko color field as the spoken reference. | The thing Pop reacted against: hot, gestural, abstract, soul-baring. | ❌ **IN COPYRIGHT** (Pollock d.1956, Rothko d.1970; all works post-1930). **NOT inlineable** — RestrictedFigure/prose only. |
| **AFTER — art from the supermarket (Pop)** | Warhol's soup cans / Lichtenstein's comics / Hamilton's collage as the spoken reference. | The icons of the turn outward. | ❌ **IN COPYRIGHT** (all Pop artists; see §4). **NOT inlineable.** |

**Recommended handling for the break block (load-bearing):** Build it as a
**RestrictedFigure pairing in prose** (name the AbEx work and the Pop work, describe both,
show neither), OR — better for a *visible* anchor — make the **"after" a US-PD PERIOD
PHOTOGRAPH of consumer culture** (a 1950s–60s **supermarket aisle of branded cans**, a
**Times Square wall of billboards**, a **diner**) captioned clearly as **period context,
NOT a Pop artwork**, with the prose carrying the actual Warhol/Lichtenstein works. The
photo shows the reader *what Pop made art out of*. For the "before," a RestrictedFigure
reference to an AbEx painting (no image) is the honest move; there is no clean PD
abstract-expressionist image. ⚠️ Do NOT build the break block on any inlined painting —
none can ship.

---

## 3. THE MANIFESTO BLOCK (`manifesto`) — PRESENT-ish as a SURROGATE (`absent: false`, with a caveat)

Pop Art had **no single published manifesto.** The honest call: treat it as **PRESENT via
a surrogate** — **Richard Hamilton's 1957 letter** defining Pop is the nearest thing the
movement has, and it is famous, quotable, and verifiable. (Alternative call: mark
`absent: true` and use the Hamilton letter as the "what stood in for a manifesto" text. The
coordinator's recommendation: **PRESENT with the Hamilton letter explicitly framed as a
private letter, not a public manifesto.**) Warhol's interview lines are quotable color but
are NOT a manifesto.

### The document (verified details)
- **Richard Hamilton, letter to Alison and Peter Smithson, 16 January 1957** — Hamilton
  lists the **"characteristics of pop art."** It was a **private letter between Independent
  Group friends**, later widely reprinted; it became the de-facto definition of the
  movement. ⚠️ Date "16 January 1957" is commonly cited — **verify the exact date at gate
  1**; the YEAR (1957) and recipients (the Smithsons) are firm. [Tate-Pop][ArtUK-Hamilton][TheArtStory-Hamilton]

### Accurately-quoted lines (verify wording against ONE named source at gate 1)

From **Hamilton's 1957 letter** (the canonical list; Tate and Art UK both reproduce it):

  > "Pop Art is: Popular (designed for a mass audience); Transient (short-term solution);
  > Expendable (easily forgotten); Low cost; Mass produced; Young (aimed at youth); Witty;
  > Sexy; Gimmicky; Glamorous; Big business." [Tate-Pop][ArtUK-Hamilton]

⚠️ The parenthetical glosses ("designed for a mass audience," etc.) are Hamilton's own and
appear in the standard reproductions, but **punctuation and the exact parentheticals vary
by source** — gate the printed form against ONE named source (Tate or Art UK) and say which.

### Quotable Warhol lines (color, NOT the manifesto — attribute precisely)
- **"I want to be a machine"** — G. R. Swenson interview, **ARTnews, November 1963**;
  full line: *"The reason I'm painting this way is that I want to be a machine."* ⚠️ Note
  the 1963 published version was edited (§0). [Warholstars-Machine][Wikiquote-Warhol]
- **"In the future everyone will be world-famous for fifteen minutes"** — first in print in
  the **1968 Moderna Museet catalogue**, but **attribution disputed** (possibly inserted by
  curator Pontus Hultén). **Do NOT state Warhol said it; say it is the line attached to
  him, first printed 1968, attribution contested.** [QuoteInvestigator-15min][Smithsonian-15min]

### Born-verified OPENLY-READABLE source URL for the block's "source link"
- The Hamilton list is reproduced openly (no paywall) on **Tate's "Pop art" art-term page:**
  `https://www.tate.org.uk/art/art-terms/p/pop-art` ✅ (use as the "read it" link). [Tate-Pop]
- A second open reproduction with the same list: **Art UK,** *"Richard Hamilton: the pioneer
  of British Pop Art"* `https://artuk.org/discover/stories/richard-hamilton-the-pioneer-of-british-pop-art` [ArtUK-Hamilton]
- ⚠️ The original letter is in the Tate Archive / reprinted in Hamilton's *Collected Words*
  (1982); cite that for the canonical printed wording if a quote is challenged.

### How to write the presence
Tell it straight: *"Pop never got a manifesto. What it got instead was a letter. In 1957
Richard Hamilton wrote to his architect friends the Smithsons and listed what 'pop art'
should be, and the list reads exactly like the advertising it was about: 'Popular,
transient, expendable, low cost, mass produced, young, witty, sexy, gimmicky, glamorous,
big business.' That's not a call to arms; it's a product description. Which is the whole
point."*

---

## 4. THE CANON (~18 works) — with IMAGE-RIGHTS flags (THE load-bearing section — WORST in the app)

**IMAGE-RIGHTS RULE for this vertical (the load-bearing item):** the app inlines only
**US-public-domain** images. The US rule is **published-before-1930 = US-PD**, regardless of
the author's death date. **Pop Art is the app's WORST-CASE movement, worse than
Surrealism:** the movement runs **c.1947–1970**, so **EVERY canonical Pop work is post-1930
and IN COPYRIGHT**, and the artists are recent/living (Warhol d.1987, Lichtenstein d.1997,
Hamilton d.2011, Paolozzi d.2005, Rauschenberg d.2008, **Johns b.1930, alive**, Oldenburg
d.2022, Rosenquist d.2017, Wesselmann d.2004, Marisol d.2016). **There is NOT ONE
inlineable canonical Pop artwork.** Every canon entry below is marked **❌ IN-COPYRIGHT —
RestrictedFigure / prose only.** The ONLY inlineable images for this page are **US-PD PERIOD
PHOTOGRAPHS of consumer culture** (the supermarket, Times Square, billboards, diners,
packaging) used as **clearly-captioned period context, NOT as Pop artworks** — see the
boxed section at the end of §4 for verified candidates. Dimensions in cm (museum record) +
ft/in conversion.

### — BRITISH POP (the first wave) — ALL IN COPYRIGHT —

#### 1. Paolozzi — *I was a Rich Man's Plaything*, 1947 (from the *BUNK!* series) — proto-Pop, the word "POP"
- **Museum:** Tate, London (T01462).
- **Dimensions:** 35.9 × 23.8 cm = **~1 ft 2⅛ in × 9⅜ in**. Collage of printed papers on card.
- **Blurb fact:** A pulp-magazine cover, a Coca-Cola ad, a pin-up, a cherry-pie ad, an
  Army recruiting hand, and a toy revolver firing a puff of smoke lettered **"POP!"** —
  often cited as the first appearance of the word in this art, a full decade before the
  American wave. [W-RichMansPlaything][DailyArt-Paolozzi]
- **Rights:** ❌ **IN COPYRIGHT** (1947; Paolozzi d.2005; Tate states "in copyright,
  permission via DACS"). NOT inlineable — RestrictedFigure/prose only.

#### 2. Hamilton — *Just what is it that makes today's homes so different, so appealing?*, 1956 — the first iconic Pop work
- **Museum:** Kunsthalle Tübingen, Germany (Zundel Collection).
- **Dimensions:** 26 × 24.8 cm = **~10¼ in × 9¾ in** (tiny). Collage.
- **Blurb fact:** A bodybuilder holds a giant **Tootsie Pop** lollipop reading "POP," a
  pin-up lounges on the sofa, a TV, a tape recorder, a Ford-logo lampshade, a tinned ham,
  and a framed comic — the entire 1950s consumer dream crammed into one living room. Made
  for the "This Is Tomorrow" catalogue. [Wiki-JustWhatIsIt][Smarthistory-Hamilton]
- **Rights:** ❌ **IN COPYRIGHT** (1956; Hamilton d.2011). NOT inlineable.

#### 3. Hamilton — the 1957 letter (the "manifesto" text) — see §3
- Not a visual work; the defining-list document. ❌ Text in copyright; quote per §3 from an
  open reproduction (Tate / Art UK).

#### 4. Peter Blake — e.g. *On the Balcony*, 1955–57 — British Pop
- **Museum:** Tate.
- **Dimensions:** 121.3 × 90.8 cm = **~3 ft 11¾ in × 2 ft 11¾ in**. Oil on canvas.
- **Blurb fact:** A crowd of figures holding magazines, badges, and pop-culture imagery —
  Blake folding mass culture into painting; he later designed the *Sgt. Pepper* sleeve (1967).
  [Tate-Pop]
- **Rights:** ❌ **IN COPYRIGHT** (1955–57; Blake b.1932, alive). NOT inlineable.

### — THE BRIDGE FROM ABSTRACT EXPRESSIONISM (Neo-Dada, not Pop proper) — IN COPYRIGHT —

#### 5. Johns — *Flag*, 1954–55 — the everyday image goes flat
- **Museum:** MoMA, New York (gift of Philip Johnson).
- **Dimensions:** 107.3 × 153.8 cm = **~3 ft 6¼ in × 5 ft ¾ in**. Encaustic, oil, and
  collage on fabric mounted on plywood (three panels).
- **Blurb fact:** The US flag rendered in hot wax over newsprint on a cut bedsheet —
  neither abstract nor expressive, a familiar flat thing made flatter; the hinge out of
  Abstract Expressionism. [MoMA-Johns][Smarthistory-Johns]
- **Rights:** ❌ **IN COPYRIGHT** (1954–55; Johns b.1930, alive). NOT inlineable.

#### 6. Rauschenberg — *Bed*, 1955 — the first "combine"
- **Museum:** MoMA, New York.
- **Dimensions:** 191.1 × 80 × 20.3 cm = **~6 ft 3¼ in × 2 ft 7½ in × 8 in deep**. Oil and
  pencil on pillow, quilt, and sheet on wood support (a "combine").
- **Blurb fact:** Rauschenberg's own bedding splashed with paint, Pollock-style, and hung
  on the wall — the everyday object dragged into the painting; he coined "combine." [MoMA-RauschBed][TheArtStory-Rausch]
- **Rights:** ❌ **IN COPYRIGHT** (1955; Rauschenberg d.2008). NOT inlineable.

### — AMERICAN POP (the big wave) — ALL IN COPYRIGHT —

#### 7. Warhol — *Campbell's Soup Cans*, 1962 — CARD-SUBJECT (but NOT inlineable)
- **Museum:** MoMA, New York (acquired 1996, from dealer Irving Blum).
- **Dimensions:** 32 canvases, each 50.8 × 40.6 cm = **~1 ft 8 in × 1 ft 4 in**. Synthetic
  polymer (casein) on canvas.
- **Blurb fact:** 32 near-identical canvases, one per Campbell's soup variety; first shown
  at the **Ferus Gallery, LA, July 1962**, propped on a shelf like a grocery aisle. The
  supermarket walks into the museum. [MoMA-SoupCans]
- **Rights:** ❌ **IN COPYRIGHT** (1962; Warhol d.1987). NOT inlineable. (Use a US-PD
  supermarket photo as the visible card; soup cans live in prose/RestrictedFigure.)

#### 8. Warhol — *Marilyn Diptych*, 1962 — celebrity + silkscreen
- **Museum:** Tate, London (purchased 1980).
- **Dimensions:** 205.4 × 289.6 cm = **~6 ft 8⅞ in × 9 ft 6 in** (two panels). Acrylic /
  silkscreen ink on canvas.
- **Blurb fact:** Fifty silkscreened Marilyns from a *Niagara* (1953) publicity still, made
  weeks after her August 1962 death — vivid color on the left, fading to ghostly grays on
  the right; celebrity, repetition, and death by the machine. [SmartH-Marilyn][W-MarilynDiptych]
- **Rights:** ❌ **IN COPYRIGHT** (1962; Warhol d.1987). NOT inlineable.

#### 9. Warhol — *Brillo Boxes*, 1964 — the appropriation lightning rod
- **Museum:** multiple (Stable Gallery debut, April 1964; examples at MoMA, Yale, etc.).
- **Dimensions:** each ~43.2 × 43.2 × 35.6 cm = **~1 ft 5 in × 1 ft 5 in × 1 ft 2 in**.
  Silkscreen ink and house paint on plywood.
- **Blurb fact:** Plywood boxes silkscreened to look exactly like Brillo soap-pad shipping
  cartons — if it's indistinguishable from the store box, what makes it art? The original
  carton was designed by commercial artist **James Harvey** (§0). [W-BrilloBoxes][W-JamesHarvey]
- **Rights:** ❌ **IN COPYRIGHT** (1964; Warhol d.1987). NOT inlineable.

#### 10. Lichtenstein — *Whaam!*, 1963 — the Ben-Day comic blown up
- **Museum:** Tate, London (purchased 1966).
- **Dimensions:** 172.7 × 406.4 cm = **~5 ft 8 in × 13 ft 4 in** (diptych). Acrylic and
  oil on two canvases.
- **Blurb fact:** A fighter plane fires a rocket, "WHAAM!" exploding across the right panel
  — sourced from DC's *All-American Men of War*, recomposed and enlarged with hand-painted
  **Ben-Day dots** (the dotted screen of cheap comic printing). [Tate-Whaam][W-Whaam]
- **Rights:** ❌ **IN COPYRIGHT** (1963; Lichtenstein d.1997). NOT inlineable.

#### 11. Lichtenstein — *Drowning Girl*, 1963 — the comic-melodrama panel
- **Museum:** MoMA, New York.
- **Dimensions:** 171.6 × 169.5 cm = **~5 ft 7½ in × 5 ft 6¾ in**. Oil and synthetic
  polymer on canvas.
- **Blurb fact:** A weeping woman in the waves thinks "I don't care! I'd rather sink than
  call Brad for help!" — soap-opera melodrama frozen and monumentalized, Ben-Day dots and
  all. [MoMA-DrowningGirl]
- **Rights:** ❌ **IN COPYRIGHT** (1963; Lichtenstein d.1997). NOT inlineable.

#### 12. Oldenburg — *The Store*, 1961 — art as a shop
- **Museum:** the installation was a rented storefront (107 East 2nd St, NYC); plaster
  objects now dispersed (MoMA, etc.).
- **Dimensions:** environment; individual painted-plaster objects vary.
- **Blurb fact:** Oldenburg rented a Lower East Side storefront and sold lumpy, brightly
  painted **plaster** hamburgers, cakes, slices of pie, and goods — the gallery literally
  becomes the store. [MoMA-TheStore][TheArtStory-Oldenburg]
- **Rights:** ❌ **IN COPYRIGHT** (1961; Oldenburg d.2022). NOT inlineable.

#### 13. Oldenburg — a soft sculpture, e.g. *Floor Burger (Giant Hamburger)*, 1962
- **Museum:** Art Gallery of Ontario, Toronto.
- **Dimensions:** ~132 × 213 cm dia. = **~4 ft 4 in high × 7 ft across**. Painted canvas
  filled with foam rubber and cardboard boxes.
- **Blurb fact:** A hamburger the size of a sofa, soft and sagging — Oldenburg made the
  hard everyday object huge, floppy, and absurd. [TheArtStory-Oldenburg]
- **Rights:** ❌ **IN COPYRIGHT** (1962; Oldenburg d.2022). NOT inlineable.

#### 14. Rosenquist — *F-111*, 1964–65 — billboard scale
- **Museum:** MoMA, New York.
- **Dimensions:** 304.8 × 2621.3 cm = **~10 ft × 86 ft** (51/59 interlocking panels,
  room-wrapping). Oil on canvas with aluminum.
- **Blurb fact:** A US fighter-bomber stretches the length of the room, spliced with
  spaghetti, a tire, a beach umbrella over an atomic blast, and a child under a salon
  hair-dryer — consumer abundance and the war machine, at the scale of advertising.
  [MoMA-Rosenquist]
- **Rights:** ❌ **IN COPYRIGHT** (1964–65; Rosenquist d.2017). NOT inlineable.

#### 15. Wesselmann — *Great American Nude* series, from 1961
- **Museum:** various (e.g. *Great American Nude #57*, Whitney).
- **Dimensions:** varies (often large).
- **Blurb fact:** Flat, faceless female nudes set among branded products and patriotic
  color — the **objectified female nude** that is Pop's clearest gender-politics problem
  (§"honesty"). [TheArtStory-PopMovement]
- **Rights:** ❌ **IN COPYRIGHT** (from 1961; Wesselmann d.2004). NOT inlineable.

#### 16. Ruscha — *Standard Station, Amarillo, Texas*, 1963
- **Museum:** various (paintings/prints in several collections).
- **Dimensions:** painting 64.8 × 121.9 cm = **~2 ft 1½ in × 4 ft**.
- **Blurb fact:** A gas station rendered in a sharp diagonal like a movie shot — the West
  Coast, the highway, and the brand as American landscape; Ruscha also made word-paintings.
  [TheArtStory-PopMovement]
- **Rights:** ❌ **IN COPYRIGHT** (1963; Ruscha b.1937, alive). NOT inlineable.

### — THE WOMEN OF POP (text-canon, NAME them — all in copyright) —

#### 17. Pauline Boty — e.g. *It's a Man's World I*, 1963–65 — British Pop's lone woman
- **Museum:** various / estate.
- **Blurb fact:** Boty (1938–1966) painted female desire and the male gaze head-on; she
  died at 28 and was nearly erased from the British Pop story for decades. The serious-woman
  anchor for British Pop. [Widewalls-Women][Artsy-WomenPop]
- **Rights:** ❌ **IN COPYRIGHT** (1960s; Boty d.1966). NOT inlineable.

#### 18. Marisol / Drexler / Weber / Strider / Axell — the American women (text-canon, NAME them)
- **Marisol (Escobar)** (d.2016) — boxy carved-wood pop totems (Warhol: "the first girl
  artist with glamour"); **Rosalyn Drexler** (b.1926) — painted-collage film scenes;
  **Idelle Weber** (d.2020) — silhouetted businessmen in plexiglass; **Marjorie Strider**
  (d.2014) — relief "build-out" nudes that pushed off the canvas; **Evelyne Axell**
  (d.1972, Belgian) — female desire from the woman's side. **All post-1930, all IN
  COPYRIGHT, none inlineable.** Name them in the women axis and artists row. [Artforum-WomenPop][Artsy-WomenPop]

---

### — THE ONLY INLINEABLE IMAGES: US-PD PERIOD PHOTOGRAPHS (context, NOT Pop artworks) —

Because **no Pop artwork can ship**, the page's HERO, CARD, and contextual figures must be
**US-PD period photographs of the consumer culture Pop mirrored**, each captioned
explicitly as **PERIOD CONTEXT, not a Pop artwork.** Verified candidate sources (the
Library of Congress holds many photos marked **"no known restrictions on publication"** —
these are the safe pool; ⚠️ **gate-6 must confirm the EXACT rights line on each specific
LoC item page**, since LoC mixes PD and rights-reserved):

- **A 1950s American supermarket aisle / shoppers** — LoC item *"Shopping in supermarket"*
  (Thomas J. O'Halloran, 1957, U.S. News & World Report collection): `https://www.loc.gov/item/2017657527/`
  — strong CARD/HERO candidate (the literal aisle Warhol's soup cans came from). ⚠️ Confirm
  the rights line ("no known restrictions") at gate 6. [LoC-Supermarket]
- **Times Square wall of billboards / marquees (1950s–60s)** — LoC item *"[Marquee in Times
  Square]"*: `https://www.loc.gov/item/2020636211/` and *"Times Square, New York"*:
  `https://www.loc.gov/item/2011635107/` — the advertising-saturated cityscape Pop fed on.
  ⚠️ Confirm rights per item at gate 6. [LoC-TimesSquare][LoC-Marquee]
- **An indoor shopping mall / consumer-goods interior (mid-century)** — LoC Pictures item:
  `https://www.loc.gov/pictures/item/2011634404/` — period retail context. ⚠️ Confirm rights. [LoC-Mall]
- **A diner, a 1950s ad billboard on a highway, branded product shelves** — search the LoC
  Free-to-Use sets (`https://www.loc.gov/free-to-use/`) and U.S. News & World Report and FSA/OWI
  collections for **no-known-restrictions** images; the **FSA/OWI** (1935–44) photos are
  reliably PD (federal work) and include storefronts, ads, and groceries — slightly earlier
  than Pop's exact moment but cleanly captionable as "the consumer culture Pop drew on."
  [LoC-FreeToUse]
- **PD source material Pop appropriated (be honest — almost nothing is PD):**
  - The **Campbell's, Brillo, Coca-Cola** labels/logos are **trademarks and the specific
    designs are in copyright / not PD** — do NOT inline them as "the source." (Very old
    Coca-Cola ads pre-1930 exist in PD, but they are not what Pop used.) ❌
  - **Comic strips:** pre-1930 newspaper comics CAN be US-PD (e.g. early *Krazy Kat*,
    *Little Nemo*), but the comics Lichtenstein used (1950s–60s DC war/romance) are **IN
    COPYRIGHT** — a pre-1930 comic strip could illustrate "the comic-strip tradition" but
    NOT Lichtenstein's actual sources, and must be captioned as such. ⚠️ Treat as a weak,
    clearly-labeled context option only.
  - **No Pop artist work is PD** (no lapsed copyright, no government-poster exception found). ❌

**Rights summary line for the coordinator:** *Pop Art is the app's ABSOLUTE worst
image-rights case: the movement is c.1947–1970 and EVERY canonical work is post-1930 by
recent or living artists, so the ENTIRE canon (British and American, Hamilton, Paolozzi,
Warhol, Lichtenstein, Oldenburg, Rosenquist, Wesselmann, Ruscha, Johns, Rauschenberg, all
the women) is IN COPYRIGHT and ships ONLY as RestrictedFigure/prose. There is NOT ONE
inlineable Pop artwork. The HERO, CARD, and ALL figures must be US-PD period photographs of
consumer culture (a 1950s supermarket aisle is the cleanest CARD/HERO), pulled from the
Library of Congress "no known restrictions" pool and captioned as PERIOD CONTEXT, not Pop
art. Gate-6 must confirm the exact rights line on each specific LoC item. Do NOT plan ANY
image-led chapter around an actual Pop painting — none can ship.*

---

## 5. LINEAGE (the lineage block)

### Parents (what Pop grew out of)
- **Abstract Expressionism** (NY, 1940s–50s) — the **foil/parent by reaction**: Pop is the
  cool, flat, mechanical, outward-looking answer to AbEx's hot, gestural, inward art.
  (Reference the AbEx read for the contrast; don't re-tell it.) [Tate-Pop][MoMA-Johns]
- **Neo-Dada / Johns & Rauschenberg** (mid-1950s) — the **direct bridge**: they brought the
  everyday object and image back into art and opened the door to Pop. [MoMA-Johns][MoMA-RauschBed]
- **Dada** (1916–24) — the **deep ancestor**: collage, the readymade (Duchamp's urinal), and
  appropriation. Paolozzi's and Hamilton's collages descend straight from Dada/Surrealist
  collage. (Reference the Dada read; don't re-explain.) [DADA-pack][Tate-IG]
- **Mass/commercial culture itself** (advertising, comics, packaging, Hollywood, the
  supermarket) — the literal raw material and subject.

### Children (what Pop fed)
- **Photorealism** (1960s–70s) — the cool, mechanical, mass-image surface, made hyper-real.
- **The Pictures Generation** (late 1970s–80s: Sherrie Levine, Richard Prince, Cindy
  Sherman) — appropriation as a critical strategy, straight from Warhol.
- **Neo-Pop / Jeff Koons** (1980s on) — consumer kitsch and branding as fine art.
- **Street art, graphic design, advertising** — Pop dissolved high/low so completely the
  museum and the market now share a visual language. [TheArtStory-PopMovement][Tate-Pop]

### Gave / took notes
- **Took from AbEx:** the scale and the New York gallery world — then inverted everything else.
- **Took from Dada/Neo-Dada:** collage, the readymade, appropriation.
- **Gave to later art:** appropriation, mechanical reproduction, and the everyday brand as
  legitimate art subjects; the death of the high/low boundary.

---

## 6. ARTISTS ROW (~7) — one-line role + portrait-photo candidate

Period photos of these figures are **1950s–1980s → almost all IN COPYRIGHT** (recent/living
artists, professional photographers). **Assume NO clean born-verified PD portrait exists;
use the gradient fallback** unless a specific PD/no-known-restrictions LoC press photo is
confirmed at gate 6. Do NOT inline a copyrighted press/agency portrait.

1. **Richard Hamilton** (1922–2011) — **the father of British Pop.** Made *Just what is
   it…* (1956), wrote the 1957 letter defining Pop; the most deliberate theorist of the
   movement. Portrait: assume gradient (in-copyright). [Smarthistory-Hamilton][Tate-Pop]
2. **Eduardo Paolozzi** (1924–2005) — **the proto-Pop collagist.** Scottish-Italian; the
   *BUNK!* collages from 1947 put American mass imagery into art before anyone called it
   Pop. Portrait: gradient. [W-RichMansPlaything][Tate-IG]
3. **Andy Warhol** (1928–1987) — **the icon and the machine.** Soup cans, Marilyn, Brillo
   boxes, the Factory, silkscreen, "I want to be a machine"; turned celebrity, repetition,
   and appropriation into the center of art. Portrait: gradient (in-copyright). [MoMA-SoupCans][Warholstars-Machine]
4. **Roy Lichtenstein** (1923–1997) — **the comic-strip painter.** Blew up melodrama and
   war comics with hand-painted Ben-Day dots (*Whaam!*, *Drowning Girl*). Portrait: gradient.
   [Tate-Whaam][MoMA-DrowningGirl]
5. **Claes Oldenburg** (1929–2022) — **the maker of giant soft things.** *The Store* (1961),
   floppy hamburgers, monumental everyday objects. Portrait: gradient. [MoMA-TheStore]
6. **James Rosenquist** (1933–2017) — **the billboard painter.** Brought commercial sign-
   painting's scale and splice into fine art (*F-111*). Portrait: gradient. [MoMA-Rosenquist]
7. **Pauline Boty** (1938–1966) — **the woman British Pop nearly erased.** The only
   prominent woman of British Pop; painted female desire and the male gaze; died at 28 and
   was written out for decades. Portrait: gradient. [Widewalls-Women][Artsy-WomenPop]

(Optional 8th if room: **Jasper Johns**, b.1930 — the bridge, *Flag*; **Robert
Rauschenberg**, 1925–2008 — the combines, the bridge; **Marisol**, 1930–2016 — wood pop
totems; **Tom Wesselmann**, 1931–2004 — *Great American Nude*; **Ed Ruscha**, b.1937 — the
West Coast gas stations and word-paintings.) [MoMA-Johns][Artforum-WomenPop]

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **The postwar consumer boom and the advertising age — USA/UK, 1950s–60s.** Pop is
   inseparable from the supermarket, the suburb, the TV set, and Madison Avenue. Postwar
   prosperity flooded America (and, later and hungrier, Britain) with branded goods,
   appliances, and ads; Pop is the art that took that flood as its subject. The British
   fascination was sharper precisely because Britain was still rationed and grey while
   American abundance glittered from across the Atlantic. [Tate-IG][TheCollector-Consumerism]
2. **Abstract Expressionism's reign and fall — NY, 1947–1960s.** While Pop was being born,
   AbEx (Pollock, Rothko, de Kooning) was the establishment avant-garde, championed by
   critic Clement Greenberg. Pop's rise IS the story of AbEx being dethroned — the hot lone
   genius replaced by the cool machine. A sharp contrast for the reader: two New York art
   worlds, one baring its soul, one silkscreening a soup can. [MoMA-Johns][Tate-Pop]
3. **Mass media and celebrity culture exploding — 1950s–60s.** Television, glossy magazines,
   Hollywood's star machine, and the Marilyn/Elvis/Jackie celebrity engine all peaked in
   exactly these years. Warhol's Marilyns (made the month she died) and his celebrity
   portraits ride that wave directly — fame, repetition, and image-as-product. [SmartH-Marilyn][Tate-Pop]

---

## 8. NESTING — what the ERA / adjacent reads already cover (go DEEPER, don't duplicate)

- **The Modern era read** gives Pop its thumbnail hook (soup cans / comics / the supermarket
  as art). The movement read must go **DEEPER**: **British Pop first** (the Independent
  Group, Paolozzi, Hamilton, "This Is Tomorrow"), the **bridge from AbEx** (Johns,
  Rauschenberg), the **American big wave** (Warhol, Lichtenstein, Oldenburg, Rosenquist),
  the **cool/mechanical manner** (silkscreen, Ben-Day dots, "I want to be a machine"), the
  **celebration-vs-critique** debate held open, and the honesty axes (the erased women, the
  uncredited labor/James Harvey, the objectified nude, Pop's whiteness). **Don't re-narrate
  the era thumbnail; reference it tersely.**
- **The Abstract Expressionism read** (if/when built) is the **direct foil/parent** — it
  already tells the gestural, inward, heroic story Pop reacted against. **Reference it for
  the contrast; do NOT re-tell AbEx.** Keep the cross-link reciprocal (AbEx → Pop as the
  reaction that ended its reign).
- **The Dada read** is the **deep ancestor** of Pop's collage and appropriation (the
  readymade). Reference it; don't re-explain Dada. [DADA-pack]
- **Coordinator action item:** add reciprocal cross-links — Pop ← Abstract Expressionism
  (foil/parent, via the bridge of Johns/Rauschenberg) and Pop ← Dada (deep ancestor, via
  collage/readymade); Pop → the Pictures Generation / Neo-Pop (children, via appropriation).
  Check/keep consistent in `src/lib/art-content.ts` (the `pop` const, the future ABEX const,
  the DADA const).

---

## 9. SHAPE (suggested chapters — author may improve)

1. **Britain saw it first** — the **Independent Group** at the ICA (early-mid 1950s); a grey,
   rationed Britain hypnotized by glossy American abundance; **Paolozzi's** *BUNK!* collages
   (the 1947 *Rich Man's Plaything* with its toy-gun "POP!"); **Hamilton's** *Just what is
   it…* (1956) and "This Is Tomorrow"; the **1957 letter** that defined Pop like an ad
   slogan. (Reference the era read; don't re-narrate.)
2. **Killing the lone genius** — the **bridge from Abstract Expressionism**: why AbEx ruled
   (hot, gestural, inward, heroic), and how **Johns** (*Flag*) and **Rauschenberg** (the
   combines) cracked it open by dragging the everyday object and image back in. The turn
   from inside to outside, from hand to thing.
3. **The supermarket walks into the museum** — **American Pop's big wave**: Warhol's soup
   cans and Marilyns, the **Factory**, **silkscreen**, "I want to be a machine," the Brillo
   boxes; Lichtenstein's comic panels and **Ben-Day dots**; Oldenburg's soft giants and *The
   Store*; Rosenquist's billboard scale. The cool, mechanical, deadpan manner. (Flag the
   images as in-copyright; describe in prose, anchor visuals on PD period photos.)
4. **Celebration or indictment?** — the question Pop refuses to answer: is this a love
   letter to consumer abundance or a deadpan burial under it? Lay out both readings; the
   appropriation question (Warhol and **James Harvey's** Brillo box; Lichtenstein's
   uncredited comic artists); hold it open.
5. **Who got left out** — the honesty chapter: the **erased women** (Boty, Marisol, Drexler,
   Weber, Strider, Axell) as serious artists and the erasure named; the **objectified female
   nude** (Wesselmann) and Pop's gender politics; Pop's **near-total whiteness** and the
   later "Black Pop" reading; the **uncredited Factory labor**. Told plainly, not as a
   takedown.
6. **What Pop left us** — appropriation and mechanical reproduction made legitimate; the
   high/low wall gone for good; the line out to **Photorealism, the Pictures Generation,
   Koons/Neo-Pop**, and a world where the museum and the supermarket speak the same visual
   language. Hold both halves: a genuine rethinking of what art can be made of, and a
   movement with real blind spots.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House informal popular-history voice, dry wit, comparisons welcome; inline-define every
term (**Pop Art, the Independent Group, collage, the combine, Neo-Dada, Abstract
Expressionism, silkscreen, Ben-Day dots, encaustic, the readymade, appropriation, soft
sculpture, the Factory, deadpan**) — reader has zero prior knowledge, though some met
collage/Dada/avant-garde/manifesto in adjacent reads (terse callback). **Make the reader
GET it:** Pop is one move — make art out of the cheapest, most public everyday imagery,
and do it COOL and mechanical — and it happened in **Britain first**, then bigger in
America. **Framing — the honesty floor:** present the **celebration-vs-critique** question
as genuinely OPEN (never resolve it); name the **erased women** (Boty, Marisol, Drexler,
Weber, Strider, Axell) as artists AND name the erasure; name the **objectified female nude**
(Wesselmann) and Pop's gender politics; name Pop's **near-total whiteness**; name the
**uncredited labor** behind Warhol's "machine" (the Factory assistants) and the real
designer **James Harvey** behind the Brillo box and the **uncredited comic artists** behind
Lichtenstein; **hedge "firsts"** (British-vs-American Pop priority; the Alloway coinage);
flag **disputed quotes** (the "15 minutes" line is attributed-not-confirmed). **No
em-dashes in shipping prose** (not the char, not `&mdash;`). Storytelling first; accuracy a
hard floor; the only direct quotes are the **Hamilton 1957 list** (gated to ONE named open
source) and clearly-attributed Warhol remarks ("I want to be a machine," 1963 ARTnews; the
"15 minutes" line flagged as disputed/1968) — no invented quotes.

### HONESTY — the framing-gate axes spelled out (research-locked)
- **Celebration vs critique (central, hold OPEN):** whether Pop celebrates or criticizes
  consumerism is genuinely unsettled — the artists were deadpan and noncommittal on
  purpose. Present BOTH; do not resolve. [TheCollector-Consumerism][Tate-Pop]
- **The erased women of Pop:** the movement is remembered as a boys' club and its women
  were written out. Name **Pauline Boty** (British Pop's only prominent woman, d.28 in 1966),
  **Marisol**, **Rosalyn Drexler**, **Idelle Weber**, **Marjorie Strider**, **Evelyne
  Axell** as serious artists; name the erasure. [Artforum-WomenPop][Artsy-WomenPop][Widewalls-Women]
- **The objectified female nude / gender politics:** Wesselmann's *Great American Nude* and
  much of Pop reduced women to flat, faceless objects among products. Present it honestly. [TheArtStory-PopMovement]
- **Whiteness:** Pop's canon is near-totally white; note the gap and the later reading of
  "Black Pop" / Pop's racial blind spots. Present honestly, don't overclaim a counter-canon. [Artsy-WomenPop]
- **Uncredited labor and appropriation:** Warhol's "machine" ran on Factory assistants
  (Gerard Malanga and others; Brigid Berlin; the films' performers); the Brillo box was
  designed by commercial artist **James Harvey**; Lichtenstein's comic sources (Russ Heath,
  Irv Novick) went uncredited and unpaid. Name them. [W-JamesHarvey][Gothamist-Brillo][W-Whaam]
- **Disputed quotes — flag:** the **"15 minutes of fame"** line is attributed-not-confirmed
  (first printed 1968 Moderna Museet catalogue; possibly inserted by curator Pontus Hultén).
  The **"I want to be a machine"** line is real (1963 ARTnews) but its published version was
  edited. [QuoteInvestigator-15min][Smithsonian-15min][Warholstars-Machine]
- **"First" claims — hedge:** **British Pop came first** (Independent Group early-mid 1950s,
  Paolozzi from 1947) — say so plainly; but hedge the precise "first Pop work" (Paolozzi
  1947 vs Hamilton 1956) and the exact Alloway coinage of the term. [Tate-IG][Smarthistory-Hamilton]

---

## Source key (for the writer & fact-checker)

- **[Tate-Pop]** Tate, art term *Pop art* (Hamilton's 1957 letter list "Popular, transient, expendable…"; Independent Group; British→American Pop; Alloway). `https://www.tate.org.uk/art/art-terms/p/pop-art`
- **[Tate-IG]** Tate, art term *Independent Group* (ICA London, convened winter 1952–53; Hamilton, Paolozzi, Henderson, McHale, Turnbull, Alloway, Banham, the Smithsons; American mass culture). `https://www.tate.org.uk/art/art-terms/i/independent-group`
- **[ICON-IG]** ICON Magazine, *What is the Independent Group?* (membership, ICA meetings, mass-culture focus).
- **[ArtUK-Hamilton]** Art UK, *Richard Hamilton: the pioneer of British Pop Art* (reproduces the 1957 "characteristics of pop art" list to the Smithsons). `https://artuk.org/discover/stories/richard-hamilton-the-pioneer-of-british-pop-art`
- **[TheArtStory-Hamilton]** TheArtStory, *Richard Hamilton* (the 1957 letter; British Pop).
- **[Smarthistory-Hamilton]** Smarthistory, *Richard Hamilton, Just What is It That Makes Today's Homes So Different, So Appealing?* (1956 collage; This Is Tomorrow catalogue; "first work of Pop art to achieve iconic status"). `https://smarthistory.org/richard-hamilton-just-what-is-it/`
- **[Wiki-JustWhatIsIt]** Wikipedia, *Just what is it that makes today's homes so different, so appealing?* (1956; 26 × 24.8 cm; Kunsthalle Tübingen; Tootsie Pop "POP"; This Is Tomorrow).
- **[W-ThisIsTomorrow]** Wikipedia, *This Is Tomorrow* (Whitechapel Art Gallery, Aug 1956; 12 teams, 38 participants; IG core).
- **[W-RichMansPlaything]** Wikipedia + Tate (T01462), *I Was a Rich Man's Plaything* (Paolozzi, 1947; 35.9 × 23.8 cm; BUNK series; "POP!"; Tate: in copyright, DACS). `https://www.tate.org.uk/art/artworks/paolozzi-i-was-a-rich-mans-plaything-t01462`
- **[DailyArt-Paolozzi]** DailyArt Magazine, *I was a Rich Man's Plaything by Eduardo Paolozzi* (the collage's elements; the word POP; proto-Pop).
- **[MoMA-Johns]** MoMA collection record, Jasper Johns, *Flag* (1954–55; encaustic, oil, collage on fabric on plywood, three panels; 107.3 × 153.8 cm). `https://www.moma.org/collection/works/78805`
- **[Smarthistory-Johns]** Smarthistory, *Jasper Johns, Flag* (encaustic over newsprint on bedsheet; the flat familiar image).
- **[MoMA-RauschBed]** MoMA collection record, Robert Rauschenberg, *Bed* (1955; "combine"; oil and pencil on pillow, quilt, sheet on wood; 191.1 × 80 × 20.3 cm). `https://www.moma.org/collection/works/78712`
- **[TheArtStory-Rausch]** TheArtStory, *Robert Rauschenberg* (combines; bridge from AbEx; Johns next-door studio).
- **[MoMA-SoupCans]** MoMA collection record, Andy Warhol, *Campbell's Soup Cans* (1962; 32 canvases, each 50.8 × 40.6 cm; synthetic polymer; Ferus Gallery July 1962; acquired 1996 from Irving Blum). `https://www.moma.org/collection/works/79809`
- **[SmartH-Marilyn]** Smarthistory + Tate (T03093), Andy Warhol, *Marilyn Diptych* (1962; 205.4 × 289.6 cm; silkscreen on canvas; Niagara still; made after Aug 1962 death). `https://www.tate.org.uk/art/artworks/warhol-marilyn-diptych-t03093`
- **[W-MarilynDiptych]** Wikipedia, *Marilyn Diptych* (50 images; two panels; dimensions; Tate 1980 purchase).
- **[W-BrilloBoxes]** Wikipedia, *Brillo Boxes* (Warhol, 1964; Stable Gallery debut April 1964; silkscreen + house paint on plywood; James Harvey designed the original carton).
- **[W-JamesHarvey]** Wikipedia, *James Harvey (artist)* (1929–1965; commercial artist who designed the original 1961 Brillo Pad box; abstract painter by night; saw his design in Warhol's 1964 show).
- **[Gothamist-Brillo]** Gothamist, *Behind Warhol's Brillo Boxes* (James Harvey designed the real box; the appropriation story).
- **[Tate-Whaam]** Tate (T00897), Roy Lichtenstein, *Whaam!* (1963; 172.7 × 406.4 cm; diptych; acrylic+oil; DC's All-American Men of War; Ben-Day dots; purchased 1966). `https://www.tate.org.uk/art/artworks/lichtenstein-whaam-t00897`
- **[W-Whaam]** Wikipedia, *Whaam!* (1963; source comic; Ben-Day dots; dimensions).
- **[MoMA-DrowningGirl]** MoMA collection record, Roy Lichtenstein, *Drowning Girl* (1963; 171.6 × 169.5 cm; oil and synthetic polymer; "I'd rather sink than call Brad…"). `https://www.moma.org/collection/works/80249`
- **[MoMA-TheStore]** MoMA collection record + TheArtStory, Claes Oldenburg, *The Store* (1961; rented storefront; painted-plaster goods). `https://www.moma.org/collection/works/61054`
- **[TheArtStory-Oldenburg]** TheArtStory, *Claes Oldenburg* (The Store; soft sculptures; giant everyday objects).
- **[MoMA-Rosenquist]** MoMA collection record, James Rosenquist, *F-111* (1964–65; 304.8 × 2621.3 cm; room-wrapping panels; fighter-bomber + consumer/atomic imagery; Castelli Gallery). `https://www.moma.org/collection/works/79805`
- **[TheArtStory-PopMovement]** TheArtStory, *Pop Art Movement Overview* (Warhol, Lichtenstein, Rosenquist, Oldenburg, Wesselmann; Ruscha; high/low; appropriation). `https://www.theartstory.org/movement/pop-art/`
- **[Warholstars-Machine]** warholstars.org, *Did Andy Warhol want to be a machine?* + the Swenson ARTnews Nov 1963 "What Is Pop Art?" interview ("I want to be a machine"; Sichel 2018 on the edited tape).
- **[Wikiquote-Warhol]** Wikiquote, *Andy Warhol* (sourced quotations incl. the 1963 "machine" line and the disputed 1968 "15 minutes" line).
- **[QuoteInvestigator-15min]** Quote Investigator, *In the Future Everyone Will Be Famous for 15 Minutes* (first in print 1968 Moderna Museet catalogue; Hultén/Granath insertion account; attribution disputed). `https://quoteinvestigator.com/2012/04/04/famous-15-minutes/`
- **[Smithsonian-15min]** Smithsonian Magazine, *Andy Warhol Probably Never Said His Celebrated "Fifteen Minutes of Fame" Line* (the disputed attribution).
- **[TheCollector-Consumerism]** TheCollector, *Consumerism in Pop Art: Was It Celebrated or Criticized?* (the open debate). `https://www.thecollector.com/consumerism-pop-art/`
- **[Artforum-WomenPop]** Artforum, *The Women of Pop* (Boty, Marisol, Drexler, Weber, Strider, Axell, Haworth; the erasure).
- **[Artsy-WomenPop]** Artsy, *Women Pop Artists Are Finally Getting Their Due* + *11 Female Artists Who Left Their Mark on Pop Art* (Weber, Strider, Axell; rediscovery).
- **[Widewalls-Women]** Widewalls, *Who Are the Pop Art Women We Should Know?* (Pauline Boty profile; the women of Pop).
- **[LoC-Supermarket]** Library of Congress, *Shopping in supermarket* (Thomas J. O'Halloran, 1957, U.S. News & World Report coll.) `https://www.loc.gov/item/2017657527/` — ⚠️ confirm exact rights line ("no known restrictions") at gate 6.
- **[LoC-TimesSquare]** Library of Congress, *Times Square, New York, New York* `https://www.loc.gov/item/2011635107/` — ⚠️ confirm rights at gate 6.
- **[LoC-Marquee]** Library of Congress, *[Marquee in Times Square]* `https://www.loc.gov/item/2020636211/` (noted "no known restrictions on publication") — ⚠️ confirm at gate 6.
- **[LoC-Mall]** Library of Congress Pictures, *Indoor shopping mall* `https://www.loc.gov/pictures/item/2011634404/` — ⚠️ confirm rights at gate 6.
- **[LoC-FreeToUse]** Library of Congress, *Free to Use and Reuse* sets `https://www.loc.gov/free-to-use/` (PD/no-known-restrictions image pools; FSA/OWI federal photos reliably PD).
- **[DADA-pack]** This repo, `audits/art-pipeline/dada-factpack.md` (deep ancestor; collage + readymade + appropriation).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Pop Art = art made from mass/commercial culture, done COOL** (Britain c.1956 / proto
   from 1947 → America to c.1970): soup cans, comics, ads, celebrity, the supermarket, the
   exact opposite of Abstract Expressionism's hot gestural inwardness. **British Pop came
   FIRST** — the **Independent Group** at London's ICA (early-mid 1950s), **Paolozzi's**
   1947 *BUNK!* collages, **Hamilton's** 1956 *Just what is it…* — THEN America made it
   enormous (Warhol, Lichtenstein, Oldenburg, Rosenquist).
2. **The bridge from AbEx is Johns (*Flag*, 1954–55) and Rauschenberg (the combines,
   *Bed*, 1955)** — usually called Neo-Dada, not Pop proper; they dragged the everyday image
   back into art. Then Warhol's soup cans (1962), Marilyn (1962), the **Factory**,
   silkscreen, "I want to be a machine," Brillo boxes (1964); Lichtenstein's Ben-Day comic
   panels (*Whaam!*, *Drowning Girl*, 1963); Oldenburg's soft giants and *The Store*.
3. **Manifesto = PRESENT via SURROGATE (`absent:false` with a caveat).** Pop had no
   published manifesto; the nearest thing is **Hamilton's 1957 LETTER** to the Smithsons:
   *"Pop Art is: Popular, transient, expendable, low cost, mass produced, young, witty,
   sexy, gimmicky, glamorous, big business."* Frame it as a private letter, not a public
   manifesto. **Open source link:** Tate's Pop-art page (and Art UK). Warhol's quotes are
   color: "I want to be a machine" (1963 ARTnews, real); "15 minutes of fame"
   (1968 print, **attribution DISPUTED — flag it, don't say he said it**).
4. **Honesty axes (non-negotiable):** (a) **celebration vs critique of consumerism** —
   hold OPEN, never resolve; (b) **the erased women** — name **Boty, Marisol, Drexler,
   Weber, Strider, Axell** as artists AND the erasure; (c) **objectified female nude /
   gender politics** (Wesselmann); (d) **Pop's near-total whiteness**; (e) **uncredited
   labor + appropriation** — Warhol's Factory assistants, the real Brillo-box designer
   **James Harvey**, Lichtenstein's uncredited comic artists; (f) **hedge "firsts"**
   (British-vs-American priority, the Alloway coinage).
5. **IMAGE RIGHTS = the app's ABSOLUTE worst case — worse than Surrealism.** The movement is
   **c.1947–1970, so EVERY canonical Pop work (British + American) is post-1930 and IN
   COPYRIGHT by recent/living artists. There is NOT ONE inlineable Pop artwork.** Everything
   ships as **RestrictedFigure/prose only.** The **HERO, CARD, and ALL figures must be
   US-PD PERIOD PHOTOGRAPHS of consumer culture** (a **1950s supermarket aisle** is the
   cleanest CARD/HERO; also Times Square billboards, malls, diners), pulled from the
   **Library of Congress "no known restrictions" pool**, captioned explicitly as **PERIOD
   CONTEXT, not Pop art**. ⚠️ Gate-6 must confirm the exact rights line on each LoC item.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **NOTHING in the Pop canon is inlineable** — do NOT plan ANY image-led chapter around an
  actual Pop painting (soup cans, Marilyn, *Whaam!*, the collages — all in copyright).
  Describe them in prose; the only ships are PD period photos as captioned context.
- ⚠️ **The break block "after" cannot be a real Pop work AND the "before" cannot be a real
  AbEx work** (Pollock/Rothko/de Kooning all in copyright). Build it as a RestrictedFigure
  prose pairing, OR use a PD supermarket/billboard photo as the visible "after" (captioned
  as context) with the prose carrying the actual works.
- ⚠️ **British Pop came first** — state the priority plainly (Independent Group, Paolozzi
  1947, Hamilton 1956 all predate Warhol's 1962 soup cans); but hedge the precise "first
  Pop work" and the exact Alloway coinage of the term "Pop art."
- ⚠️ **The "15 minutes of fame" quote is attributed-not-confirmed** (first printed 1968,
  possibly inserted by curator Pontus Hultén) — do NOT state Warhol said it.
- ⚠️ **Name the uncredited people:** James Harvey (the real Brillo-box designer), the Factory
  assistants behind Warhol's "machine," the uncredited comic artists (Russ Heath, Irv
  Novick) behind Lichtenstein — this IS the appropriation story, not a footnote.
- ⚠️ **Johns and Rauschenberg are the BRIDGE (Neo-Dada), not Pop proper** — present them as
  the door from AbEx, don't mislabel them as core Pop.
- ⚠️ **Coordinator:** add reciprocal cross-links Pop ← Abstract Expressionism (foil/parent,
  via the Johns/Rauschenberg bridge), Pop ← Dada (deep ancestor, via collage/readymade), and
  Pop → Pictures Generation / Neo-Pop (children, via appropriation).
