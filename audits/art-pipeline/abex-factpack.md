# Fact pack — ABSTRACT EXPRESSIONISM (kind: MOVEMENT, Modern era, c.1943 → c.1960; New York-centered, the first American movement to lead world art)

Coordinator-built ground truth for the art content pipeline. The author drafts the
**movement-level chaptered narrative** ONLY from this. Every concrete claim traces to a
sourced item here or is flagged `⚠️ UNVERIFIED`. (Web-checked 2026-06-18; the
fact-checker gate re-verifies independently against the source key.)

Dimensions are given in cm from the museum record AND converted to **feet/inches**
(this app uses imperial only, never cm — `feedback_art_dimensions_imperial`).

## The section
- The **Abstract Expressionism movement** read: `/art/mod/abex` → `…/s/{sectionId}`.
  (Coordinator registers the `abex` const in `src/lib/art-content.ts`: range
  `c.1943–c.1960`, Modern era.) **Card image = the SECOND-WORST image-rights case in the
  app after Surrealism, and arguably the worst of all for SHOWING THE ART.** The movement
  is c.1943–1960 and **EVERY canonical work is IN COPYRIGHT** (the artists die 1948→2011;
  US-PD needs publication before 1930, and nothing here qualifies). So **NO AbEx painting
  can be inlined as the card** — and unlike Surrealism there is no cleanly-PD *precursor of
  its own* to lean on. The card/break/hero must be handled as in §4 (RestrictedFigure
  cards + prose carry the paintings; for a visible "before," reuse a PD predecessor the app
  already owns, above all the **de Chirico** from the Surrealism read; see §2/§4).
- Deliverable now = the **chaptered movement narrative** (the prose) + its `sections`
  chapter metadata + a Fact ledger. Movement-page metadata (the break block, the manifesto/
  key-texts block, the canon list, lineage, artists row, parallels) the coordinator
  assembles from this pack; per-work DEEP reads come in a later pass.

## Throughline (the one idea)
After the Second World War the center of the art world crossed the Atlantic: **for the
first time an American movement led the world, and Paris ceded the avant-garde to New
York.** A loose group later tagged the **New York School** decided that a painting did not
have to be *of* anything. The canvas became, in critic Harold Rosenberg's phrase, **"an
arena in which to act"** — a place to record the artist's body, gesture, and unconscious
directly, at a scale big enough to swallow the viewer. The idea split into two wings that
look nothing alike. The **gesture / "action" painters** (Pollock dripping and pouring on
the floor, de Kooning slashing his *Woman* into being, Kline's huge black girders of
paint) put the act of painting itself on the wall. The **color-field painters** (Rothko's
floating veils of color, Newman's single vertical "zip," Still's torn cliffs of paint)
went the opposite way toward stillness, vast glowing fields meant to deliver something
like the sublime. Behind it sat the trauma of the war and the atomic age, the émigré
teachers and the exiled Surrealists who brought **automatism** (making marks straight from
the unconscious), the WPA that had kept these artists alive in the 1930s, and Jungian
myth. Two rival critics fought over what it meant: **Harold Rosenberg** ("action
painting," the canvas as an event) and **Clement Greenberg** (formalism, the painting as
pure flat color and shape). And two things the legend leaves out are the heart of the
honest story: the **women** who helped invent it and got written out (Lee Krasner, Helen
Frankenthaler, Joan Mitchell, Elaine de Kooning, Grace Hartigan), and the documented
fact that the **CIA covertly promoted AbEx abroad** as a poster child for American
freedom during the Cold War. Hold both: the most ambitious American painting ever made,
and a myth machine that crowned a few heroic men and buried the rest.

---

## 0. THE LEGEND LEDGER — documented vs myth (READ FIRST)

| Claim | Verdict | The real fact |
|---|---|---|
| AbEx had a manifesto | **MYTH — it had no single manifesto; it had key TEXTS and rival critics** | Abstract Expressionism never issued a founding manifesto the way Surrealism did. What it had: the **1943 Gottlieb/Rothko letter to the *New York Times*** (a quasi-manifesto), **Pollock's "My Painting" statement** (1947–48), **Newman's "The Sublime Is Now"** (1948), and **Rosenberg's "The American Action Painters"** (1952). Treat the block as **ABSENT-with-surrogates** (key-texts), not a manifesto. [NYT-Letter][Pollock-MyPainting][Newman-Sublime][Rosenberg-AAP] |
| "Action painting" is the movement's own self-chosen name | **MYTH — it's a CRITIC'S term (Rosenberg, 1952), and contested** | **Harold Rosenberg** coined "action painting" in *ARTnews*, Dec 1952 ("The American Action Painters"); he disliked the label "Abstract Expressionism." It describes the GESTURE wing (Pollock, de Kooning, Kline), NOT the color-field wing. Don't apply "action painting" to Rothko or Newman. [Rosenberg-AAP][Britannica-AAP] |
| Pollock invented the drip/pour technique from nothing | **HEDGE — he made it his own c.1947, but pouring/automatism had precedents** | Pollock arrived at the poured "drip" method **c.1947**, working on unstretched canvas **on the floor**, flinging and dripping thinned enamel. The unconscious-mark idea came from **Surrealist automatism** (the émigrés) and earlier experiments (Hofmann, Siqueiros's workshop). State it as: he turned automatism into a whole new way of painting, not that he invented mark-making by chance. [MoMA-Pollock][Pollock-MyPainting][Artforum-Emigres-Surr] |
| "On the floor I am more at ease… I am literally IN the painting" | **DOCUMENTED (Pollock's own words, *Possibilities*, Winter 1947–48)** | From Pollock's statement **"My Painting,"** *Possibilities* no. 1 (Winter 1947–48): "On the floor I am more at ease. I feel nearer, more a part of the painting, since this way I can walk around it, work from the four sides and literally be *in* the painting." Quote it as his statement; gate the exact wording. [Pollock-MyPainting] |
| "There is no such thing as good painting about nothing" | **DOCUMENTED — Gottlieb & Rothko, NYT letter, June 1943 (Newman a co-author/editor)** | Signed by **Adolph Gottlieb and Mark Rothko**, with **Barnett Newman** a co-author/editor; written 7 June, published **13 June 1943** in the *New York Times*, replying to critic Edward Alden Jewell. The line: "There is no such thing as good painting about nothing. We assert that the subject is crucial and only that subject matter is valid which is tragic and timeless." Attribute it to **Gottlieb/Rothko (with Newman)**, not to one man. [NYT-Letter][Gottlieb-Foundation] |
| The CIA secretly promoted Abstract Expressionism in the Cold War | **DOCUMENTED — present accurately, neither conspiracy nor denial** | Documented by Frances Stonor Saunders, *The Cultural Cold War* (1999), and others: the CIA, largely through the **Congress for Cultural Freedom** (and front foundations), covertly funded exhibitions and journals that showcased AbEx abroad **as evidence of American freedom** vs Soviet socialist realism, roughly **1950–67**. Most of the artists **did not know.** State it as covert state patronage that USED the art; do NOT say the CIA created the movement or that the artists were agents. [Saunders-CCW][Independent-CIA] |
| Pollock died in a drunk-driving crash | **DOCUMENTED** | Pollock, a lifelong **alcoholic**, died **11 August 1956** at age **44** in a single-car crash near his home in **Springs, East Hampton, NY**, driving drunk; a passenger (Edith Metzger) also died, Ruth Kligman survived. [W-Pollock][Mystic-Pollock] |
| AbEx is one unified style | **MYTH — two opposite wings under one umbrella** | It's an umbrella over a **gesture/"action"** wing (Pollock, de Kooning, Kline) and a **color-field** wing (Rothko, Newman, Still). They share scale, abstraction, ambition, and the New York scene, not a look. Don't write it as a single style. [Britannica-AAP][W-AbEx] |
| Greenberg and Rosenberg said the same thing | **MYTH — they were RIVALS** | **Clement Greenberg** = formalist ("American-Type Painting," 1955): the painting is pure **flatness**, color, and shape, the next step in modernism. **Harold Rosenberg** = "action painting": the canvas is the **record of an event**, the artist's act. They championed different readings (and partly different artists). Name both, and the rivalry. [Greenberg-ATP][Rosenberg-AAP][ArtStory-Rosenberg] |
| The women were minor / "just wives" | **MYTH — major painters written out of the story** | **Lee Krasner, Helen Frankenthaler, Joan Mitchell, Elaine de Kooning, Grace Hartigan** were central. Frankenthaler's **soak-stain** (*Mountains and Sea*, 1952) is the literal bridge from AbEx to Color Field (Morris Louis, Kenneth Noland). Krasner is a major painter who kept working three decades after Pollock. Name them as artists AND name the erasure (the framing-gate axis). [Wiki-MountainsSea][OpenCulture-Women][LOC-DeanPrints] |

---

## 1. THE MOVEMENT STORY (roots → two critics → two wings → the women → the CIA → afterlife)

### Roots — why New York, why now
- **The center of art moves to New York.** Before WWII the avant-garde was Parisian. The
  war emptied Europe and **brought the avant-garde to New York as refugees** (Surrealists
  Breton, Ernst, Masson, Matta; Mondrian; Léger), and after 1945 New York, not Paris,
  led world art for the first time. (Reference the **Surrealism read** for the émigrés'
  arrival; don't re-tell it.) [Artforum-Emigres-Surr][W-AbEx]
- **Surrealist automatism** is the most important inheritance: making marks straight from
  the unconscious, with the editing mind switched off. The young Americans (Pollock,
  Gorky, Motherwell) turned **automatism into gesture.** [Artforum-Emigres-Surr][W-AbEx]
- **The émigré teachers — above all Hans Hofmann** (1880–1966), who left Germany and ran a
  hugely influential school in New York and Provincetown, preaching his **"push and pull"**
  theory (color and shape creating depth and tension on a flat surface). Nearly every
  important American modernist passed through Hofmann; Krasner studied with him. [Artnews-Hofmann][Greenberg-ATP]
- **The WPA Federal Art Project** (1935–1943) kept these artists fed during the Depression
  by paying them to make art (murals, easel painting). Pollock, de Kooning, Gorky, Krasner,
  Rothko all worked on it; it built the New York scene that became AbEx. [WPA-FAP][W-AbEx]
- **The war, the atomic age, and Jungian myth.** Trauma and the bomb pushed the painters
  toward "tragic and timeless" subjects (the 1943 letter), primitive myth, and the
  unconscious — Pollock was in **Jungian** analysis; early titles invoke totem and ritual.
  [NYT-Letter][W-AbEx]

### The two critics (a framing axis — name BOTH and the rivalry)
- **Harold Rosenberg** — **"The American Action Painters,"** *ARTnews*, **Dec 1952.** The
  canvas became "**an arena in which to act**"; what goes on the wall is not a picture but
  the **record of an event**, the trace of the artist's gesture and existential act.
  Rosenberg disliked the term "Abstract Expressionism." [Rosenberg-AAP][ArtStory-Rosenberg]
- **Clement Greenberg** — **"American-Type Painting,"** *Partisan Review*, **1955** (and his
  broader **formalism**). The point of the painting is its own medium: **flatness**, color,
  and shape; AbEx is the next logical step in modernism's purification, not a record of a
  personal drama. Greenberg backed Pollock, then the color-field/post-painterly line. [Greenberg-ATP][TheCollector-Greenberg]
- **The contrast for the reader:** one critic says the painting is an *event* (Rosenberg);
  the other says it is an *object*, pure optical form (Greenberg). They fought over the same
  pictures and helped MANUFACTURE reputations — part of the honesty story (the critics, not
  just the painters, made the canon). [ArtStory-Rosenberg][TheCollector-Greenberg]

### Wing 1 — GESTURE / "action painting"
- **Jackson Pollock** (1912–1956) — the drip/pour. From **c.1947** he laid unstretched
  canvas on the floor and flung, dripped, and poured thinned enamel from all four sides
  ("**Autumn Rhythm**," "**One: Number 31**," both 1950). His statement "My Painting"
  (1947–48): "On the floor I am more at ease… literally *in* the painting." The **Hans
  Namuth films/photos** (1950) of him painting made him famous and helped fix the
  "heroic male genius" image (⚠️ Namuth's images are IN COPYRIGHT — see §4). Died drunk
  at the wheel, 1956, age 44. [MoMA-Pollock][Pollock-MyPainting][Met-AutumnRhythm][W-Pollock]
- **Willem de Kooning** (1904–1997) — Dutch émigré; the violent brush. The **Woman series**
  (*Woman I*, 1950–52, MoMA) keeps the human figure when his peers ditched it: a ferocious,
  toothy, more-than-life-size woman built from slashing strokes — savaged at the time for
  being figurative AND abstract at once. [MoMA-WomanI][Smarthistory-WomanI]
- **Franz Kline** (1910–1962) — the big black-and-white strokes. Huge calligraphic girders
  of black house-paint on white (*Chief*, 1950, MoMA), like architecture or a blown-up
  brush-mark; abstraction at the scale of a wall. [MoMA-Kline]

### Wing 2 — COLOR FIELD
- **Mark Rothko** (1903–1970) — the floating rectangles. Soft-edged stacked blocks of
  glowing color on big canvases meant to **envelop** the viewer up close ("a place," not a
  picture). The **Seagram murals** (1958–59; he refused the Four Seasons commission and
  gave nine canvases to the **Tate**) and the **Rothko Chapel** (Houston, 14 canvases,
  dark, completed before his death). Rejected the "color-field/abstraction" framing — he
  said his subject was basic human emotion, tragedy, ecstasy. **Suicide, 25 Feb 1970.**
  [Tate-Rothko][NGA-Seagram][SFMOMA-Rothko14]
- **Barnett Newman** (1905–1970) — the **"zip."** A single vertical stripe of color running
  the full height of the canvas, dividing and activating a vast field (*Onement I*, 1948,
  the breakthrough; *Vir Heroicus Sublimis*, 1950–51, MoMA, ~8 × 18 ft). Wrote **"The
  Sublime Is Now"** (1948). [MoMA-VHS][TheArtStory-Newman][Newman-Sublime]
- **Clyfford Still** (1904–1980) — torn, ragged "cliffs" of thick paint in dark colors;
  the most reclusive and anti-market of the group (kept most of his work, now a dedicated
  museum in Denver). [W-AbEx][Britannica-AAP]

### The bridges and the second voices
- **Arshile Gorky** (1904–1948) — the BRIDGE from Surrealism. Armenian-American, survivor
  of the **Armenian Genocide**; fused Surrealist automatism with abstraction (*The Liver
  Is the Cock's Comb*, 1944, which Breton praised). **Suicide, 1948**, just as AbEx broke;
  often called the last Surrealist and the first Abstract Expressionist. [Tate-Gorky][W-Gorky]
- **Robert Motherwell** (1915–1991) — the intellectual; the **Elegies to the Spanish
  Republic** (begun 1948, 100+ works), big black ovoid-and-bar forms mourning the
  Republic's defeat (e.g. *Elegy to the Spanish Republic, 108*, MoMA). [MoMA-Elegy][W-AbEx]
- **Adolph Gottlieb** (1903–1974) — co-author of the 1943 letter; "Pictographs," then
  "Bursts." A founding theorist-voice of the movement. [Gottlieb-Foundation][NYT-Letter]

### The women (a framing axis — see §"honesty")
- The myth crowned a few **heroic men**; serious women painters were sidelined, dismissed
  as wives or "lady painters," and largely written out until recent decades. Name them as
  major artists: **Lee Krasner** (1908–1984; Pollock's wife, a major painter in her own
  right who kept working 30 years after his death), **Helen Frankenthaler** (1928–2011;
  the **soak-stain** in *Mountains and Sea*, 1952 — the bridge to Color Field, directly
  inspiring **Morris Louis** and **Kenneth Noland**), **Joan Mitchell** (1925–1992; lush
  gestural landscapes-as-abstraction), **Elaine de Kooning** (1918–1989; painter AND a
  sharp critic), **Grace Hartigan** (1922–2008). [OpenCulture-Women][Wiki-MountainsSea][W-Frankenthaler][LOC-DeanPrints]

### The CIA and the Cold War (a framing axis — present accurately)
- Documented covert state patronage: through the **Congress for Cultural Freedom** and
  front foundations the **CIA secretly funded exhibitions and journals** that sent AbEx
  abroad **as proof of American freedom and individualism** against Soviet socialist
  realism, roughly **1950–67** (Saunders, *The Cultural Cold War*, 1999). Most artists
  **did not know.** Present it straight: the state USED the art as a Cold-War showcase; the
  CIA did NOT invent the movement and the painters were not agents. [Saunders-CCW][Independent-CIA]

### Afterlife
- AbEx made **New York the center of the art world** and set the terms — scale, abstraction,
  the heroic gesture, the market and critic machine — that everything after had to answer.
  Its direct children: **Color Field / Post-Painterly Abstraction** (Frankenthaler →
  Louis, Noland; Greenberg's line), and, by reaction, **Pop Art and Minimalism**, which
  rejected the heroic-gesture, expressive-self model for the cool, the impersonal, and the
  mass-produced. [W-AbEx][Britannica-AAP][TheCollector-Greenberg]

**Why it mattered (one paragraph for the writer):** Abstract Expressionism is the moment
American painting stopped following Paris and started leading. It pushed abstraction to
its largest, most ambitious scale, insisted a painting could be a direct record of the
body and the unconscious or a vast field that delivers the sublime, and produced two of
the most recognizable looks in modern art (Pollock's poured webs, Rothko's glowing
blocks). It also shows how reputations get made: two warring critics, a press machine that
crowned a handful of "heroic" men, a documented covert Cold-War promotion campaign, and a
whole cohort of women painters written out of the legend. Both are the story. [W-AbEx][Saunders-CCW][OpenCulture-Women]

---

## 2. THE BREAK BLOCK (`whatChanged`) — painting stops depicting and becomes the act / the field

The concrete change, stated plainly (not "revolutionary"):

> **Before:** even the most radical European modernism still organized a picture around
> something — a fractured figure (Cubism), a dream-image (Surrealism), a composition with
> a focal point. The painting was a window or a design you read. And the avant-garde lived
> in Paris.
>
> **After (Abstract Expressionism):** in New York after the war, painting drops the
> subject entirely and gets very big. The canvas becomes, in Rosenberg's phrase, "an arena
> in which to act." Two opposite ways of doing it. **(1) Gesture / "action":** the painting
> is the record of the artist's body and unconscious moving — Pollock pouring from all four
> sides of a canvas on the floor, de Kooning slashing a figure into being, Kline's wall-
> sized black strokes. There is no focal point; the marks run edge to edge ("all-over").
> **(2) Color field:** the painting is a vast, enveloping field of color meant to deliver
> something like the sublime — Rothko's floating rectangles, Newman's single vertical
> "zip" splitting an open expanse. The subject of the painting is no longer what you see;
> it is the act of painting, or the field itself, at a scale that surrounds you.

### Before/after pair (born-verified candidates — RIGHTS-FLAGGED)

| Side | Work | Why it's the right one | Image-rights |
|---|---|---|---|
| **BEFORE — painting still organizes around a subject/focal point; the avant-garde is European** | Reuse a PD predecessor the app ALREADY owns: cleanest is **Giorgio de Chirico, *The Song of Love*, 1914** (MoMA) from the Surrealism read — a composed dream-image with clear objects and a focal arrangement — OR a Cubism/Surrealism canvas already inlined elsewhere. | Shows that European modernism, however radical, still built a picture around recognizable things and a composition; AbEx threw that out. | **PD-US** (de Chirico 1914, pre-1930). Already verified/used in the Surrealism read — safe to reuse. |
| **AFTER — painting is the act / the field, edge-to-edge, no subject** | The natural "after" is **Pollock, *Autumn Rhythm (Number 30)*, 1950** (Met) or **Rothko's floating rectangles** or **Newman's zip** — but **ALL are IN COPYRIGHT and CANNOT be inlined.** Carry the "after" in **PROSE + a RestrictedFigure card**, not an image. | These are the actual break; the reader must SEE them described, not shown. | ❌ **IN COPYRIGHT, NOT inlineable** (Pollock d.1956; Rothko d.1970; Newman d.1970). RestrictedFigure / prose only. |

**Recommended handling for the break block:** use a cleanly-PD **"before"** image (the
**de Chirico** the app already owns is the safest single choice; a Cubist canvas also
works), and carry the **"after"** entirely in **prose + RestrictedFigure cards** for
*Autumn Rhythm*, a Rothko, and a Newman zip. ⚠️ **Do NOT attempt to inline any AbEx work
as the "after" image — none of it is showable.** The break is the rare case where the
visible "after" is a degraded reference card, and the words do the work.

---

## 3. THE MANIFESTO / KEY-TEXTS BLOCK (`manifesto`) — ABSENT-with-surrogates (`absent: true`, with key texts)

AbEx had **NO single manifesto.** Set `absent: true` and tell the silence honestly: this
was a movement of individual statements and rival critics, not one rulebook. Then surface
the KEY TEXTS as the surrogate (the "key-passage" analog). The block's job is to quote
them **accurately**, name each document exactly, and give an openly-readable source URL.

### The key texts (verified)
1. **Gottlieb & Rothko (with Newman), letter to the *New York Times*, written 7 June,
   published 13 June 1943** — the closest thing to a founding statement; a reply to critic
   Edward Alden Jewell. [NYT-Letter][Gottlieb-Foundation]
2. **Jackson Pollock, "My Painting," *Possibilities* no. 1 (Winter 1947–48)** — the
   on-the-floor / in-the-painting statement. [Pollock-MyPainting]
3. **Barnett Newman, "The Sublime Is Now," *The Tiger's Eye* no. 6 (Dec 1948)** — the
   color-field wing's credo: a new American art seeking the sublime, free of European
   "beauty." [Newman-Sublime][TheArtStory-Newman]
4. **Harold Rosenberg, "The American Action Painters," *ARTnews* (Dec 1952)** — the
   critic's text that named "action painting" and the "arena." [Rosenberg-AAP]

### A note on attribution (load-bearing for the fact-checker)
- The 1943 letter is **Gottlieb and Rothko's**, with **Newman a co-author/editor** — do NOT
  credit it to Rothko alone or call it "Rothko's manifesto." [NYT-Letter][Gottlieb-Foundation]
- "Action painting" / "arena" is **Rosenberg's** critic's phrase, **not a self-description
  by the painters**, and applies to the gesture wing only. [Rosenberg-AAP][Britannica-AAP]

### Accurately-quoted lines (verify wording at gate 1)

From the **Gottlieb/Rothko NYT letter (1943):**
  > "There is no such thing as good painting about nothing. We assert that the subject is
  > crucial and only that subject matter is valid which is tragic and timeless." [NYT-Letter]

From **Pollock, "My Painting" (Possibilities, 1947–48):**
  > "On the floor I am more at ease. I feel nearer, more a part of the painting, since this
  > way I can walk around it, work from the four sides and literally be in the painting."
  [Pollock-MyPainting]

From **Rosenberg, "The American Action Painters" (ARTnews, 1952):**
  > "At a certain moment the canvas began to appear to one American painter after another as
  > an arena in which to act — rather than as a space in which to reproduce, re-design,
  > analyze or 'express' an object, actual or imagined." ⚠️ This printed line contains an
  > em-dash; in SHIPPING PROSE the author must paraphrase or recast (no em-dashes, even in
  > a quote — restructure the sentence or quote only the clean fragment "an arena in which
  > to act"). [Rosenberg-AAP]

⚠️ **Quote-precision:** these are widely reproduced; gate each against the named original
publication, not a blog. The Rosenberg line in particular is often truncated — quote the
short fragment ("an arena in which to act") to stay accurate and em-dash-clean.

### Born-verified OPENLY-READABLE source URLs for the block's "source link"
- **Rosenberg, "The American Action Painters" (1952)** — Britannica overview + full-text
  reprints circulate; cite the **Britannica entry** as the stable open reference and the
  *ARTnews* Dec 1952 original as canonical print: `https://www.britannica.com/topic/The-American-Action-Painters`
  ✅ (open). The phrase + date verified there. [Britannica-AAP]
- **1943 NYT letter** — the **Adolph & Esther Gottlieb Foundation** site carries the text +
  history: `https://www.gottliebfoundation.org/about-the-artist` ✅ (open; the "tragic and
  timeless" passage). For canonical print, cite the **NYT, 13 June 1943.** [Gottlieb-Foundation]
- ⚠️ **Pollock's "My Painting" and Newman's "The Sublime Is Now"** are anthologized
  (e.g., Herschel B. Chipp, *Theories of Modern Art*) — cite the anthology/original journal
  for canonical wording; the open web copies are not authoritative for exact text. Gate to
  the print source. [Pollock-MyPainting][Newman-Sublime]

### How to write the absence
Tell it straight: *"Surrealism got a manifesto and a pope. Abstract Expressionism got
neither. It was never a club with a rulebook — it was a loose set of New York painters who
mostly distrusted programs, plus two critics who fought over what they were doing. The
nearest thing to a founding statement is a 1943 letter two of them sent the* New York
Times*: 'There is no such thing as good painting about nothing.' After that the texts come
one at a time — Pollock saying he wanted to be 'literally in the painting,' Newman
declaring 'the sublime is now,' and the critic Harold Rosenberg calling the canvas 'an
arena in which to act.' Four voices, no manifesto."* Set `absent: true`.

---

## 4. THE CANON (~16 works) — with IMAGE-RIGHTS flags (THE load-bearing section)

**IMAGE-RIGHTS RULE for this vertical (the load-bearing item):** the app inlines only
**US-public-domain** images. The US rule is **published-before-1930 = US-PD.** Abstract
Expressionism is **c.1943–1960**, so **EVERY canonical work in this movement is IN
COPYRIGHT and NOT inlineable** — full stop. The artists die **1948→2011** (Gorky 1948,
Pollock 1956, Kline 1962, Hofmann 1966, Newman 1970, Rothko 1970, Gottlieb 1974, Still
1980, Krasner 1984, de Kooning 1997, Mitchell 1992, Motherwell 1991, Frankenthaler 2011),
and their estates/foundations (Pollock-Krasner Foundation/ARS, ARS, etc.) actively assert
copyright; museums (Met, MoMA) explicitly EXCLUDE these works from Open Access. So **EVERY
work below is RestrictedFigure / prose-only.** There is **no de-Chirico-style cleanly-PD
anchor inside the movement itself.**

For EACH work: museum, dimensions (cm + ft/in), one-line blurb, and the **IN-COPYRIGHT
verdict.** Dimensions in cm (museum record) + ft/in conversion.

### — GESTURE / "action painting" wing —

#### 1. Pollock — *Autumn Rhythm (Number 30)*, 1950 — CARD/BREAK CANDIDATE *if* a card could ship (it can't)
- **Museum:** The Metropolitan Museum of Art, New York (George A. Hearn Fund, 1957).
- **Dimensions:** 266.7 × 525.8 cm = **~8 ft 9 in × 17 ft 3 in**. Enamel on canvas.
- **Blurb fact:** A vast web of poured and dripped black, white, and tan, edge to edge with
  no focal point, made on the floor from all four sides — Pollock's "all-over" drip at full
  scale. One of his largest pictures. [Met-AutumnRhythm][W-AutumnRhythm]
- **Rights:** ❌ **IN COPYRIGHT** (1950; Pollock d.1956; Pollock-Krasner Foundation/ARS).
  **NOT inlineable** — Met EXCLUDES it from Open Access. RestrictedFigure / prose only.

#### 2. Pollock — *One: Number 31, 1950*, 1950
- **Museum:** MoMA, New York.
- **Dimensions:** 269.5 × 530.8 cm = **~8 ft 10 in × 17 ft 5⅝ in**. Oil and enamel on canvas.
- **Blurb fact:** A companion mural-scale drip painting from Pollock's peak year, a dense
  skein of poured line. [MoMA-Pollock][W-AbEx]
- **Rights:** ❌ **IN COPYRIGHT** (1950; Pollock d.1956). NOT inlineable.

#### 3. de Kooning — *Woman I*, 1950–52
- **Museum:** MoMA, New York.
- **Dimensions:** 192.7 × 147.3 cm (≈193 × 147) = **~6 ft 3⅞ in × 4 ft 10 in**. Oil on canvas.
- **Blurb fact:** A ferocious, toothy, more-than-life-size woman built from slashing
  strokes — de Kooning kept the human figure when his peers abandoned it, and was attacked
  for being figurative AND abstract at once. [MoMA-WomanI][Smarthistory-WomanI]
- **Rights:** ❌ **IN COPYRIGHT** (1950–52; de Kooning d.1997). NOT inlineable.

#### 4. Kline — *Chief*, 1950
- **Museum:** MoMA, New York (gift of Mr. and Mrs. David M. Solinger).
- **Dimensions:** 148.3 × 186.7 cm = **~4 ft 10⅜ in × 6 ft 1½ in**. Oil on canvas.
- **Blurb fact:** Huge black calligraphic girders of paint on white, named for a
  locomotive Kline knew as a boy — abstraction at the scale of a wall, like a brush-mark
  blown up to architecture. [MoMA-Kline][W-AbEx]
- **Rights:** ❌ **IN COPYRIGHT** (1950; Kline d.1962). NOT inlineable.

### — COLOR FIELD wing —

#### 5. Rothko — *No. 14, 1960*, 1960
- **Museum:** SFMOMA (San Francisco Museum of Modern Art).
- **Dimensions:** 290.8 × 268.3 cm (≈290 × 268) = **~9 ft 6½ in × 8 ft 9⅝ in**. Oil on canvas.
- **Blurb fact:** A field of bright orange over deep cobalt blue, soft-edged blocks
  floating on an eggplant ground — the mature "floating rectangle" Rothko meant the viewer
  to stand close to and be enveloped by. [SFMOMA-Rothko14][W-AbEx]
- **Rights:** ❌ **IN COPYRIGHT** (1960; Rothko d.1970). NOT inlineable.

#### 6. Rothko — *Orange and Yellow*, 1956
- **Museum:** Buffalo AKG Art Museum (Albright–Knox), Buffalo, NY.
- **Dimensions:** 231.1 × 180.3 cm = **~7 ft 7 in × 5 ft 11 in**. Oil on canvas.
- **Blurb fact:** A glowing yellow block above an orange block — the signature Rothko
  format at its most luminous and serene. [Artchive-OrangeYellow][Buffalo-OrangeYellow]
- **Rights:** ❌ **IN COPYRIGHT** (1956; Rothko d.1970). NOT inlineable.

#### 7. Rothko — the *Seagram murals* (1958–59) / the *Rothko Chapel* (Houston, completed 1971)
- **Museum:** Seagram murals split across **Tate** (London, the nine he gave), Kawamura
  (Japan), and the Rothko estate/NGA; the Chapel canvases are in the **Rothko Chapel,
  Houston.**
- **Blurb fact:** Rothko walked away from the lucrative Four Seasons restaurant commission,
  refusing to let his art decorate wealthy diners, and gave nine of the wine-dark "portal"
  canvases to the Tate (they arrived the day he died). The dark Houston **Chapel** (14
  canvases) is his final, near-black environment — a "place," not a group of pictures. [Tate-Rothko][NGA-Seagram]
- **Rights:** ❌ **IN COPYRIGHT** (1958–71; Rothko d.1970). NOT inlineable.

#### 8. Newman — *Vir Heroicus Sublimis*, 1950–51 — the big "zip" field
- **Museum:** MoMA, New York.
- **Dimensions:** 242.3 × 541.7 cm = **~7 ft 11⅜ in × 17 ft 9¼ in**. Oil on canvas.
- **Blurb fact:** A vast red field crossed by thin vertical "zips," Latin title meaning
  roughly "Man, Heroic and Sublime" — meant to be stood in front of so close it fills your
  vision; Newman's claim that abstract American painting could reach the sublime. [MoMA-VHS][W-VHS]
- **Rights:** ❌ **IN COPYRIGHT** (1950–51; Newman d.1970). NOT inlineable.

#### 9. Newman — *Onement I*, 1948 — the breakthrough zip
- **Museum:** MoMA, New York.
- **Dimensions:** 69.2 × 41.2 cm = **~2 ft 3¼ in × 1 ft 4¼ in**. Oil on canvas + oil on
  masking tape.
- **Blurb fact:** A modest maroon canvas split by a single ragged orange vertical band —
  the moment Newman found the "zip" and his whole future art. Title from an archaic root of
  "atonement," the state of being made one. [TheArtStory-Newman][Newman-Sublime]
- **Rights:** ❌ **IN COPYRIGHT** (1948; Newman d.1970). NOT inlineable.

#### 10. Still — a mature "cliff" painting, e.g. *1957-D No. 1*, 1957
- **Museum:** Buffalo AKG Art Museum (and the Clyfford Still Museum, Denver, holds most of
  his work).
- **Dimensions (1957-D No. 1):** 287 × 403.9 cm = **~9 ft 5 in × 13 ft 3 in**. Oil on canvas.
- **Blurb fact:** Torn, ragged cliffs of thick dark paint with jagged flashes of color — the
  most reclusive Abstract Expressionist, who hoarded his own work and despised the market.
  ⚠️ Verify the SPECIFIC titled work the author cites at gate 1. [W-AbEx][Britannica-AAP]
- **Rights:** ❌ **IN COPYRIGHT** (1957; Still d.1980). NOT inlineable.

### — THE BRIDGES & SECOND VOICES —

#### 11. Gorky — *The Liver Is the Cock's Comb*, 1944 — the bridge from Surrealism
- **Museum:** Buffalo AKG Art Museum, Buffalo, NY.
- **Dimensions:** 186 × 249 cm = **~6 ft 1¼ in × 8 ft 2 in**. Oil on canvas.
- **Blurb fact:** A teeming, biomorphic field of color and line that fuses Surrealist
  automatism with abstraction — Breton called it one of the most important paintings made
  in America. Gorky is the hinge: last Surrealist, first Abstract Expressionist. [Tate-Gorky][W-Gorky]
- **Rights:** ❌ **IN COPYRIGHT** (1944; Gorky d.1948). NOT inlineable.

#### 12. Motherwell — *Elegy to the Spanish Republic* (series, begun 1948)
- **Museum:** examples at MoMA (e.g., *...108*, 1965–67, 208.2 × 351.1 cm = **~6 ft 10 in ×
  11 ft 6¼ in**) and many collections; the series runs 100+ works.
- **Blurb fact:** Big black ovoid forms crushed between black bars on white — a decades-long
  abstract elegy for the defeated Spanish Republic, AbEx as political mourning. ⚠️ Specify
  WHICH numbered Elegy the author cites; the series spans 1948 into the 1980s. [MoMA-Elegy][W-AbEx]
- **Rights:** ❌ **IN COPYRIGHT** (Motherwell d.1991). NOT inlineable.

#### 13. Gottlieb — a "Burst," e.g. *Blast, I*, 1957
- **Museum:** MoMA, New York.
- **Dimensions (Blast, I):** 228.6 × 114.3 cm = **~7 ft 6 in × 3 ft 9 in**. Oil on canvas.
- **Blurb fact:** A floating red disc above an explosive black tangle — Gottlieb, co-author
  of the 1943 letter, distilled to a sun and a blast. ⚠️ Verify the specific work. [Gottlieb-Foundation][W-AbEx]
- **Rights:** ❌ **IN COPYRIGHT** (1957; Gottlieb d.1974). NOT inlineable.

### — THE WOMEN (NAME them even though no image ships) —

#### 14. Frankenthaler — *Mountains and Sea*, 1952 — the soak-stain, the bridge to Color Field
- **Museum:** on long-term loan to the National Gallery of Art from the Helen Frankenthaler
  Foundation.
- **Dimensions:** 219.4 × 297.8 cm = **~7 ft 2½ in × 9 ft 9¼ in**. Oil and charcoal on canvas.
- **Blurb fact:** Frankenthaler poured thinned paint straight into raw, unprimed canvas so
  it soaked in like a stain — soft veils of color suggesting a landscape — inventing the
  **soak-stain** that launched Color Field and directly inspired **Morris Louis** and
  **Kenneth Noland.** Painted at age 23. The single most consequential work by a woman in
  this movement. [Wiki-MountainsSea][W-Frankenthaler]
- **Rights:** ❌ **IN COPYRIGHT** (1952; Frankenthaler d.2011). NOT inlineable. (Crucial to
  NAME in the women axis even though it can't ship as an image.)

#### 15. Krasner — a mature work, e.g. *The Seasons*, 1957
- **Museum:** Whitney Museum of American Art, New York.
- **Dimensions (The Seasons):** 235.6 × 517.8 cm = **~7 ft 8¾ in × 16 ft 11⅞ in**. Oil and
  house paint on canvas.
- **Blurb fact:** A huge, surging field of pink-and-green organic forms — Krasner painted
  some of her boldest work after Pollock's death, a major artist long miscast as just his
  wife. ⚠️ Verify the specific work + museum at gate 1. [OpenCulture-Women][LOC-DeanPrints]
- **Rights:** ❌ **IN COPYRIGHT** (1957; Krasner d.1984). NOT inlineable.

#### 16. Mitchell / E. de Kooning / Hartigan — the other serious women (text-canon, NAME them)
- **Joan Mitchell** (d.1992; lush gestural abstraction, later worked in France), **Elaine
  de Kooning** (d.1989; painter and critic), **Grace Hartigan** (d.2008). All central New
  York School painters; **all post-1930 work → IN COPYRIGHT, not inlineable.** Name them in
  the women axis and the artists row even though no image ships. [OpenCulture-Women][LOC-DeanPrints]

**Rights summary line for the coordinator:** *Abstract Expressionism is, for SHOWING THE
ART, the worst image-rights case in the whole app: the movement is c.1943–1960 and the US
public-domain line is publication-before-1930, so **EVERY canonical work — without
exception — is IN COPYRIGHT and ships only as RestrictedFigure/prose.** Worse than
Surrealism, there is **no cleanly-PD precursor inside the movement** to lean on, and even
the famous CONTEXT PHOTOS are encumbered (Hans Namuth's Pollock films/photos, Nina Leen's
1951 "Irascibles" LIFE photo, Wilfrid Zogbaum/Herbert Matter/Tony Vaccaro studio shots are
ALL in copyright, held by estates/agencies). The honest answer: **essentially nothing of
the art and very little of the milieu is inlineable.** The card, hero, and break "after"
must be carried by prose + RestrictedFigure cards; for a visible "before," REUSE a PD
predecessor the app already owns — the **de Chirico *The Song of Love* (1914)** from the
Surrealism read is the cleanest single choice. Do NOT plan any image-led chapter around
the drips, the Woman, or a Rothko field — none of it can ship.*

### Image-rights: the hunt for ANY inlineable PD context image (reported honestly)
- **PD government/LoC photos of the artists or scene:** searched LoC Prints & Photographs,
  Smithsonian, NPS, Wikimedia Commons. **No confirmed PD/CC0/no-known-restrictions
  photograph of a named Abstract Expressionist at work or of the New York gallery scene was
  found.** The well-known images are by named living-estate photographers (Namuth, Leen,
  Zogbaum, Matter, Vaccaro) and are **in copyright.** The LoC's "Charles Randall Dean
  Collection" is of **prints BY the artists** (still in copyright), not free photos.
  [LOC-DeanPrints][Met-AutumnRhythm]
- **Any AbEx work somehow PD:** checked — **none.** The earliest relevant works (Gorky
  1944, the 1943 letter era) are still decades short of the pre-1930 line.
- **What the app CAN inline:** only PD predecessors it already owns from adjacent reads —
  above all **de Chirico (1914)**, and any Cubism/Surrealism/Mondrian-precursor canvas
  already verified pre-1930. Use those ONLY for the "before"/lineage, never to stand in for
  an AbEx work.
- **Bottom line:** treat this movement as a **prose-and-RestrictedFigure read.** If a
  single PD context image is wanted as a hero, the safest is a **public-domain photo of
  postwar New York / a 1950s NYC streetscape** from LoC (verify the specific file's PD
  status at gate 6) used purely as atmosphere, captioned honestly as context, NOT as a
  picture of the art or the artists. Do not assert it shows the scene; it sets the city.

---

## 5. LINEAGE (the lineage block)

### Parents (what AbEx grew out of)
- **Surrealism — esp. automatism** (the DIRECT method-parent): the exiled Surrealists in
  New York brought "marks straight from the unconscious"; the young Americans turned
  automatism into gesture. (Reference the **Surrealism read** for the émigrés; don't
  re-tell it.) [Artforum-Emigres-Surr][W-AbEx]
- **Arshile Gorky** as the human bridge: he carried Surrealist automatism into abstraction.
  [Tate-Gorky]
- **The émigré teachers, esp. Hans Hofmann** ("push and pull"; nearly every American
  modernist passed through his school). [Artnews-Hofmann][Greenberg-ATP]
- **Cubism and European abstraction** (Picasso, Miró, Mondrian, Kandinsky) — the formal
  vocabulary the Americans absorbed and then blew up to mural scale. [W-AbEx][Greenberg-ATP]
- **The WPA Federal Art Project** — the New Deal program that kept the future AbEx painters
  alive and working together in 1930s New York. [WPA-FAP][W-AbEx]

### Children (what AbEx fed)
- **Color Field / Post-Painterly Abstraction** — the direct heir via **Frankenthaler's
  soak-stain** → **Morris Louis, Kenneth Noland**; Greenberg's formalist line. (gave:
  staining, the pure field, flatness.) [Wiki-MountainsSea][TheCollector-Greenberg]
- **Pop Art** (by reaction) — rejected the heroic expressive self for mass-culture imagery
  and cool impersonality. [W-AbEx]
- **Minimalism** (by reaction) — kept the scale and the field, dumped the gesture and the
  drama for the impersonal and the literal. [W-AbEx]
- **The whole postwar New York art world** — AbEx set the terms: scale, the market, the
  critic machine, the studio-hero image. [W-AbEx][Saunders-CCW]

### Gave / took notes
- **Took from Surrealism:** automatism, the unconscious as source.
- **Took from Cubism/European abstraction + Hofmann:** the formal language and "push/pull."
- **Took from the WPA:** the milieu and the survival that made a New York scene possible.
- **Gave to Color Field:** the soak-stain and the pure field.
- **Gave to Pop and Minimalism:** something big to react against.

---

## 6. ARTISTS ROW (~7) — one-line role + portrait-photo candidate

⚠️ **Portraits are almost all IN COPYRIGHT.** These figures are photographed 1940s–1990s by
named (often living-estate) photographers; **no confirmed PD portrait of any of them was
found** in the search. **Default to the gradient fallback** for every portrait unless a
specific file is independently verified PD/CC0 at gate 6 (do not assume).

1. **Jackson Pollock** (1912–1956) — **the drip, the face of "action painting."** Poured
   and dripped enamel on canvas on the floor ("Autumn Rhythm," "One"); the Namuth films
   made him a star; the heroic-male-genius myth and the alcoholism both center on him; died
   drunk at the wheel, 1956. **Portrait: gradient** (Namuth etc. in copyright). [MoMA-Pollock][W-Pollock]
2. **Willem de Kooning** (1904–1997) — **the figure that wouldn't die.** Dutch émigré; the
   violent *Woman* series kept the human body when others dropped it; the supreme painter's-
   painter of the gesture wing. Portrait: gradient. [MoMA-WomanI]
3. **Mark Rothko** (1903–1970) — **the color-field mystic.** Floating rectangles meant to
   envelop; the Seagram refusal and the Houston Chapel; insisted his subject was raw human
   emotion, not "abstraction"; suicide 1970. Portrait: gradient. [Tate-Rothko][SFMOMA-Rothko14]
4. **Barnett Newman** (1905–1970) — **the man with one stripe.** The "zip"; "Onement,"
   "Vir Heroicus Sublimis"; wrote "The Sublime Is Now"; turned a single vertical band into
   a whole art. Portrait: gradient. [MoMA-VHS][TheArtStory-Newman]
5. **Lee Krasner** (1908–1984) — **the major painter written out as "the wife."** Studied
   with Hofmann; a force in her own right who did some of her boldest work after Pollock's
   death; the central case for the women-erased axis. Portrait: gradient. [OpenCulture-Women][LOC-DeanPrints]
6. **Helen Frankenthaler** (1928–2011) — **the inventor of the soak-stain.** *Mountains and
   Sea* (1952) poured thinned paint into raw canvas and launched Color Field, inspiring
   Louis and Noland; the most consequential bridge-figure among the women. Portrait:
   gradient. [Wiki-MountainsSea][W-Frankenthaler]
7. **Arshile Gorky** (1904–1948) — **the bridge from Surrealism.** Armenian-Genocide
   survivor; fused automatism with abstraction (*The Liver Is the Cock's Comb*); suicide
   1948 as the movement broke. Portrait: gradient. [Tate-Gorky][W-Gorky]

(Optional 8th if room: **Franz Kline**, 1910–1962 — the big black-and-white strokes; or
**Clyfford Still**, 1904–1980 — the reclusive cliffs; or **Robert Motherwell**, 1915–1991 —
the Elegies and the movement's intellectual; or **Joan Mitchell**, 1925–1992 — lush
gestural abstraction. Also NAME the two rival critics, **Harold Rosenberg** and **Clement
Greenberg**, as the figures who made the reputations.) [MoMA-Kline][MoMA-Elegy][ArtStory-Rosenberg]

---

## 7. PARALLELS ("meanwhile") — 2–3 contemporaneous threads

1. **The early Cold War — c.1947–1960.** AbEx's whole life runs through the opening of the
   US–Soviet standoff: the Marshall Plan, NATO, the Korean War, McCarthyism, the bomb. It's
   not background — the documented **CIA covert promotion of AbEx abroad** (via the Congress
   for Cultural Freedom) made these paintings a Cold-War showcase of "American freedom"
   against Soviet socialist realism. The politics are inside the story. [Saunders-CCW][Independent-CIA]
2. **Postwar New York becomes the world's art capital — c.1945–1960.** The war broke
   Europe and emptied Paris of its avant-garde (many to New York); American money, a booming
   gallery and museum scene (MoMA, the new critics, the dealers), and a confident superpower
   culture shifted the center of art across the Atlantic for the first time. AbEx is both
   cause and proof. [W-AbEx][Artforum-Emigres-Surr]
3. **Existentialism and the anxious 1950s.** Sartre and Camus, the bomb, and a culture of
   anxiety and individual authenticity ran in parallel with Rosenberg's idea of the canvas
   as an existential "act" — the painting as a record of a self facing the void. A sharp
   tie-in for the reader: the same decade that built suburbs and TV also produced the most
   anxious, heroic painting in American history. [Rosenberg-AAP][W-AbEx]

---

## 8. NESTING — what the ERA / SURREALISM reads already cover (go DEEPER, don't duplicate)

- **The Modern era read** gives AbEx its thumbnail (the center of art crosses to New York;
  painting becomes pure act/field). The movement read must go **DEEPER**: the roots (émigré
  automatism, Hofmann, the WPA, the war/atomic age, Jungian myth), the **two critics**
  (Rosenberg vs Greenberg), the **two wings** (gesture vs color field) with their methods
  and key works, the **women** axis, the **CIA/Cold-War** axis, Pollock's death and the
  reputation machine, and the handoff to Color Field/Pop/Minimalism. **Don't re-narrate the
  era thumbnail; reference it tersely.**
- **The Surrealism read (already built)** is the **direct method-parent** — it already tells
  the WWII exile of the Surrealists to New York and names **Abstract Expressionism as its
  child via automatism.** **Reference it for the handoff; do NOT re-tell Surrealism.** Keep
  the cross-link reciprocal (Surrealism → AbEx is its named child; AbEx ← Surrealism is its
  named parent). [Artforum-Emigres-Surr]
- **Coordinator action item:** add reciprocal cross-links — AbEx ← Surrealism (direct
  method-parent, via automatism + Gorky) and AbEx ← (Hofmann/Cubism/WPA precursor notes);
  AbEx → **Color Field / Post-Painterly Abstraction** (direct child, via Frankenthaler's
  soak-stain) and AbEx → **Pop / Minimalism** (children by reaction). Check/keep consistent
  in `src/lib/art-content.ts` (the SURR const's child pointer, a new ABEX const).

---

## 9. SHAPE (suggested chapters — author may improve)

1. **The center of art crosses the ocean** — why New York, why now: the war empties Paris,
   the Surrealist émigrés arrive with **automatism**, Hofmann teaches, the WPA had kept the
   painters alive, and the bomb and Jungian myth push toward "tragic and timeless"
   subjects. The 1943 Gottlieb/Rothko letter: "no such thing as good painting about
   nothing." (Reference the era + Surrealism reads; don't re-narrate Surrealism.)
2. **The canvas as an arena** — the **gesture / "action" wing**: Pollock's drip on the
   floor ("Autumn Rhythm," "One"; "literally *in* the painting"), the all-over composition
   with no focal point, de Kooning's violent *Woman*, Kline's wall-sized black strokes.
   (Flag every work as in-copyright; carry it in prose + RestrictedFigure.)
3. **Fields of color** — the **color-field wing**: Rothko's floating rectangles and the
   refusal of the Seagram money / the Houston Chapel, Newman's single "zip" and "the
   sublime is now," Still's torn cliffs. Stillness and scale instead of gesture; the same
   ambition aimed the opposite way.
4. **Two critics, one fight** — **Rosenberg** ("action painting," the canvas as an event)
   vs **Greenberg** (formalism, pure flatness and color); how the critics, not just the
   painters, manufactured the canon — and which artists each one crowned.
5. **The half that got cut** — the honesty chapter: the heroic-male-genius myth and the
   women written out; name **Krasner, Frankenthaler (the soak-stain → Color Field),
   Mitchell, Elaine de Kooning, Hartigan** as major artists, with the erasure told plainly.
6. **A weapon and a wreck** — the documented **CIA/Cold-War promotion** of AbEx abroad
   (present accurately, no conspiracy), Pollock's alcoholism and his **1956 death at 44**,
   and the afterlife: New York as the new center, Color Field as the heir, Pop and
   Minimalism as the reaction. Hold both halves: the most ambitious American painting ever
   made, and a myth machine that crowned a few and buried the rest.

---

## 10. VOICE (WRITING-RULES + art voice locks)
House informal popular-history voice, dry wit, comparisons welcome; inline-define every
term (avant-garde, **abstract / abstraction, automatism, gesture / "action painting,"
color field, the "zip," all-over composition, soak-stain, the sublime, formalism,
flatness, picture plane, the New York School, the WPA, émigré**) — reader has zero prior
knowledge, though some met automatism/Surrealism/Cubism/manifesto in the adjacent reads
(terse callback). **Make the reader GET it:** that AbEx is one big idea (a painting need
not be *of* anything; the canvas is an arena or a field) that split into two opposite-
looking wings, and that it's the moment American art started leading the world.
**Framing — the honesty floor:** present the **women of AbEx** as major artists AND name
the erasure; present the **CIA covert promotion** accurately (state patronage USED the art;
the CIA did NOT create it and the artists were not agents — no conspiracy-mongering, no
denial); present the **heroic-male-genius myth** as a myth; present **Pollock's alcoholism
and 1956 death** plainly; present the **critics' role in manufacturing reputations**
honestly. **Hedge** the "first" claims (Pollock didn't invent mark-by-chance from nothing;
"the first American movement to lead" is broadly true but say it carefully). **No em-dashes
in shipping prose** (not the char, not `&mdash;`) — including inside the Rosenberg quote
(quote the clean fragment "an arena in which to act" or recast). Storytelling first;
accuracy a hard floor; the only direct quotes are the gated key-text lines (the 1943
letter, Pollock's "in the painting," Newman's "the sublime is now," Rosenberg's "arena")
and clearly-attributed remarks — no invented quotes, no quoting from memory.

### HONESTY — the framing-gate axes spelled out (research-locked)
- **The women of AbEx (central framing axis):** the legend crowned a handful of **heroic
  men** and wrote the women out as wives or "lady painters." But **Lee Krasner, Helen
  Frankenthaler, Joan Mitchell, Elaine de Kooning, Grace Hartigan** were central;
  **Frankenthaler's soak-stain (*Mountains and Sea*, 1952) is the literal bridge to Color
  Field** (Louis, Noland). Name them as artists; name the erasure. [OpenCulture-Women][Wiki-MountainsSea][LOC-DeanPrints]
- **The CIA / Cold War (present accurately, do not soften OR sensationalize):** documented
  covert promotion of AbEx abroad via the **Congress for Cultural Freedom** and front
  foundations, c.1950–67 (Saunders, *The Cultural Cold War*, 1999), as a showcase of
  "American freedom" vs Soviet socialist realism; **most artists did not know.** The CIA
  did NOT invent the movement and the painters were not agents. State both the fact and its
  limits. [Saunders-CCW][Independent-CIA]
- **The heroic-male-genius myth + the critics' machine:** the Namuth films, the press, and
  two warring critics (**Rosenberg** and **Greenberg**) MADE the reputations; the canon is
  partly a manufacture. Name that honestly, don't take the myth at face value. [Rosenberg-AAP][Greenberg-ATP][ArtStory-Rosenberg]
- **Pollock's alcoholism and death:** lifelong alcoholic; **died drunk driving, 11 Aug
  1956, age 44**, killing a passenger. Present plainly, not romantically. [W-Pollock][Mystic-Pollock]
- **"First" claims — hedge:** Pollock made the drip his own (c.1947) but built on
  Surrealist automatism + earlier pouring; "action painting" is **Rosenberg's** critic's
  term, not the painters' self-name and not for the color-field wing; "the first American
  movement to lead world art" is broadly accepted but say it as the widely-held judgment,
  not a law. [Rosenberg-AAP][MoMA-Pollock][W-AbEx]

---

## Source key (for the writer & fact-checker)

- **[W-AbEx]** Wikipedia, *Abstract expressionism* (New York School; gesture vs color-field wings; roots in Surrealism/WPA/émigrés; Greenberg vs Rosenberg; first American movement to gain international influence; key artists list).
- **[Britannica-AAP]** Britannica, *The American Action Painters* (Rosenberg essay; "arena in which to act"; ARTnews Dec 1952; action-painting term applies to gesture wing): `https://www.britannica.com/topic/The-American-Action-Painters`.
- **[Rosenberg-AAP]** Harold Rosenberg, *The American Action Painters*, ARTnews, Dec 1952 ("At a certain moment the canvas began to appear … as an arena in which to act …"); Rosenberg disliked "Abstract Expressionism." (Quote-gate against original ARTnews print.)
- **[ArtStory-Rosenberg]** TheArtStory, *Harold Rosenberg overview* (action painting; canvas as event; rivalry with Greenberg; coined the term): `https://www.theartstory.org/critic/rosenberg-harold/`.
- **[Greenberg-ATP]** Clement Greenberg, *American-Type Painting*, Partisan Review, Spring 1955 (formalism; flatness; promoted Pollock, de Kooning, Hofmann, Newman, Still); open scan at Monoskop: `https://monoskop.org/File:Greenberg_Clement_1955_1961_American-Type_Painting.pdf`.
- **[TheCollector-Greenberg]** TheCollector, *How Clement Greenberg Shaped Modernist Art* (formalist criticism; flatness; backed AbEx then Color Field).
- **[NYT-Letter]** Adolph Gottlieb & Mark Rothko (with Barnett Newman), letter to the Art Editor, *New York Times*, written 7 June / published 13 June 1943, replying to Edward Alden Jewell ("There is no such thing as good painting about nothing … tragic and timeless"). The quasi-manifesto.
- **[Gottlieb-Foundation]** Adolph & Esther Gottlieb Foundation, *About the Artist* (the 1943 letter text + history; Gottlieb co-author): `https://www.gottliebfoundation.org/about-the-artist`.
- **[Pollock-MyPainting]** Jackson Pollock, *My Painting*, statement in *Possibilities* no. 1 (Winter 1947–48) ("On the floor I am more at ease … literally be in the painting"); anthologized in Chipp, *Theories of Modern Art* (gate exact wording to print).
- **[Newman-Sublime]** Barnett Newman, *The Sublime Is Now*, *The Tiger's Eye* no. 6 (Dec 1948) (American art seeking the sublime, free of European "beauty").
- **[MoMA-Pollock]** MoMA, *Jackson Pollock* artist page + *One: Number 31, 1950* (poured/dripped enamel; drip method c.1947; on the floor, all four sides): `https://www.moma.org/artists/4675-jackson-pollock`.
- **[Met-AutumnRhythm]** The Metropolitan Museum of Art, *Autumn Rhythm (Number 30)*, 1950 (266.7 × 525.8 cm; enamel on canvas; Hearn Fund 1957; rights Pollock-Krasner Foundation/ARS; NOT Open Access, not downloadable): `https://www.metmuseum.org/art/collection/search/488978`.
- **[W-AutumnRhythm]** Wikipedia, *Autumn Rhythm (Number 30)* (1950; 266.7 × 525.8 cm; ~17 ft wide; Met; among Pollock's largest).
- **[MoMA-WomanI]** MoMA, *Willem de Kooning, Woman I, 1950–52* (192.7 × 147.3 cm; oil on canvas; ferocious figure): `https://www.moma.org/audio/playlist/3/186`.
- **[Smarthistory-WomanI]** Smarthistory, *Willem de Kooning, Woman, I* (figurative + abstract; the Woman series).
- **[MoMA-Kline]** MoMA, *Franz Kline, Chief, 1950* (148.3 × 186.7 cm; oil on canvas; gift of Mr. & Mrs. David M. Solinger; named for a locomotive): `https://www.moma.org/collection/works/78319`.
- **[Tate-Rothko]** Tate, *Mark Rothko* (Seagram murals; refused the Four Seasons commission; gave nine to Tate, arrived 25 Feb 1970, the day he was found dead; suicide): `https://www.tate.org.uk/art/artists/mark-rothko-1875`.
- **[NGA-Seagram]** National Gallery of Art, *Mark Rothko: Seagram Murals* (1958 commission; ~30 canvases; wine-dark "closed space"; withdrawal; Harvard + Houston Chapel commissions; death 1970): `https://www.nga.gov/exhibitions/mark-rothko-seagram-murals`.
- **[SFMOMA-Rothko14]** SFMOMA, *Mark Rothko, No. 14, 1960* (290.8 × 268.3 cm; oil on canvas; orange over blue on eggplant; Color Field): `https://www.sfmoma.org/artwork/97.524/`.
- **[Artchive-OrangeYellow]** Artchive, *Orange and Yellow* (Rothko, 1956; 231.1 × 180.3 cm; Buffalo AKG/Albright–Knox; yellow block over orange).
- **[Buffalo-OrangeYellow]** Buffalo AKG Art Museum, *Orange and Yellow* record (Rothko, 1956).
- **[MoMA-VHS]** MoMA, *Barnett Newman, Vir Heroicus Sublimis, 1950–51* (242.3 × 541.7 cm; oil on canvas; "Man, Heroic and Sublime"; the zips): `https://www.moma.org/audio/playlist/3/169`.
- **[W-VHS]** Wikipedia, *Vir Heroicus Sublimis* (1950–51; 242.3 × 541.7 cm; MoMA; overwhelming scale; zips).
- **[TheArtStory-Newman]** TheArtStory, *Barnett Newman* (the "zip" 1948; *Onement I* 1948, "atonement"/being made one; *The Sublime Is Now* Tiger's Eye Dec 1948): `https://www.theartstory.org/artist/newman-barnett/`.
- **[Tate-Gorky]** Tate, *Arshile Gorky* (Armenian-American; Surrealist automatism → abstraction; bridge to AbEx): `https://www.tate.org.uk/art/artists/arshile-gorky-1191`.
- **[W-Gorky]** Wikipedia, *Arshile Gorky* (b. Vostanik Manoug Adoian 1904; Armenian Genocide survivor; *The Liver Is the Cock's Comb* 1944, Breton praise; suicide 21 July 1948).
- **[MoMA-Elegy]** MoMA, *Robert Motherwell, Elegy to the Spanish Republic, 108* (1965–67; 208.2 × 351.1 cm; the 100+ work series begun 1948): `https://www.moma.org/collection/works/79007`.
- **[Wiki-MountainsSea]** Wikipedia, *Mountains and Sea* (Frankenthaler, 1952; soak-stain debut; poured thinned oil into raw canvas; influenced Louis & Noland; painted at 23).
- **[W-Frankenthaler]** Wikipedia, *Helen Frankenthaler* (1928–2011; soak-stain; bridge from AbEx to Color Field).
- **[OpenCulture-Women]** Open Culture, *Three Female Artists Who Helped Create Abstract Expressionism: Lee Krasner, Elaine de Kooning & Helen Frankenthaler* (the women central; reassessment; Krasner worked decades after Pollock): `https://www.openculture.com/2022/08/three-female-artists-who-helped-create-abstract-expressionism.html`.
- **[LOC-DeanPrints]** Library of Congress, *Charles Randall Dean Collection of American Abstract Prints* (1940s–60s prints BY the artists incl. Krasner, Hartigan, Sterne, Guston — note: PRINTS by the artists, still in copyright; NOT free photos): `https://www.loc.gov/item/prn-09-056/`.
- **[Artnews-Hofmann]** ARTnews, *The Case for Loving Hans Hofmann, Pioneering Teacher to the Abstract Expressionists* ("push and pull"; émigré teacher; nearly every important American modernist studied with him).
- **[WPA-FAP]** Federal Art Project / WPA (1935–43) context (kept Pollock, de Kooning, Gorky, Krasner, Rothko employed making art in 1930s NY; built the scene).
- **[Saunders-CCW]** Frances Stonor Saunders, *The Cultural Cold War: The CIA and the World of Arts and Letters* (1999) / *Who Paid the Piper?* (CIA covert funding via the Congress for Cultural Freedom; AbEx promoted abroad as "American freedom"; "Pollock became a weapon in the Cold War"; most artists unaware; c.1950–67).
- **[Independent-CIA]** Frances Stonor Saunders, *Modern art was CIA 'weapon'*, The Independent, 1995 (the covert promotion summarized; the Congress for Cultural Freedom; Tom Braden/Michael Josselson).
- **[W-Pollock]** Wikipedia, *Jackson Pollock* (1912–1956; lifelong alcoholism; died 11 Aug 1956, single-car crash, Springs/East Hampton, age 44; passenger Edith Metzger killed, Ruth Kligman survived).
- **[Mystic-Pollock]** Mystic Stamp / This Day in History, *Death of Jackson Pollock, August 11, 1956* (drunk-driving crash; age 44).
- **[Artforum-Emigres-Surr]** Artforum, *The Surrealist Émigrés in New York* (the WWII exile of the Surrealists to New York; automatism → American abstraction/AbEx). [Cross-ref the repo SURREALISM read for the handoff.]
- **[SURR-pack]** This repo, `audits/art-pipeline/surrealism-factpack.md` (the direct method-parent read; automatism; the de Chirico PD anchor reused here for the break "before"; Surrealism → AbEx named child).

---

## 5-LINE SUMMARY + HANDLE-WITH-CARE (return to caller)

1. **Abstract Expressionism = the first American movement to lead world art** (New York,
   **c.1943–1960**): after WWII the avant-garde crosses from Paris to New York. One big
   idea — a painting need not be *of* anything; the canvas is, in Rosenberg's phrase, **"an
   arena in which to act"** — splits into two opposite wings. Roots: Surrealist
   **automatism** (the émigrés; reference the Surrealism read, don't re-tell it), the
   émigré teacher **Hofmann**, the **WPA**, the war/atomic age, Jungian myth.
2. **Two wings:** **gesture / "action painting"** (Pollock's drip — *Autumn Rhythm*, *One*,
   1950; de Kooning's *Woman I*; Kline's black strokes — *Chief*) and **color field**
   (Rothko's floating rectangles + Seagram/Chapel; Newman's "zip" — *Vir Heroicus Sublimis*,
   *Onement I*; Still's cliffs). Bridges/voices: **Gorky** (from Surrealism), **Motherwell**
   (Elegies), **Gottlieb**.
3. **Manifesto = ABSENT (`absent:true`), with KEY TEXTS as surrogates.** No single
   manifesto; quote accurately, gated: the **1943 Gottlieb/Rothko NYT letter** ("no such
   thing as good painting about nothing"), **Pollock's "My Painting"** (1947–48, "literally
   *in* the painting"), **Newman's "The Sublime Is Now"** (1948), **Rosenberg's "American
   Action Painters"** (1952, "an arena in which to act"). Two RIVAL critics: **Rosenberg**
   (action/event) vs **Greenberg** (formalism/flatness, "American-Type Painting," 1955).
4. **The honesty axes (non-negotiable):** (a) **the women written out** — name **Krasner,
   Frankenthaler (the soak-stain → Color Field), Mitchell, Elaine de Kooning, Hartigan** as
   major artists AND the erasure; (b) **the CIA covert Cold-War promotion** of AbEx abroad
   (Congress for Cultural Freedom; documented; the artists mostly unaware; the CIA did NOT
   create it — no conspiracy, no denial); (c) **the heroic-male-genius myth + the critics'
   reputation machine**; (d) **Pollock's alcoholism and 1956 death** at 44 (drunk driving);
   (e) **hedge "first"** claims and the "action painting" label (Rosenberg's, gesture-wing
   only).
5. **Image rights = the WORST case in the app for SHOWING THE ART.** The movement is
   1943–1960 and US-PD needs pre-1930 publication, so **EVERY canonical work is IN
   COPYRIGHT and NOT inlineable** (Pollock, de Kooning, Rothko, Newman, Kline, Still,
   Gorky, Motherwell, Frankenthaler, Krasner — all RestrictedFigure/prose). Unlike
   Surrealism there is **no cleanly-PD precursor inside the movement.** Even the famous
   CONTEXT PHOTOS are in copyright (Namuth, Leen's *Irascibles*, Zogbaum, Matter, Vaccaro).
   **Card + hero + break "after" = prose + RestrictedFigure cards.** For a visible "before,"
   REUSE the **de Chirico *The Song of Love* (1914)** the app already owns from the
   Surrealism read.

**HANDLE-WITH-CARE, additional:**
- ⚠️ **There is essentially NOTHING inlineable.** No AbEx work, and no confirmed PD/CC0
  photo of an artist or the scene, was found. The read is a **prose + RestrictedFigure**
  read. If a hero image is wanted, the only option is a separately-verified **PD 1950s New
  York streetscape** (LoC) used as atmosphere and captioned as context, never as a picture
  of the art or the artists. Verify any such file's PD status at gate 6.
- ⚠️ **There is NO manifesto** — set `absent: true` and surface the four key texts. Don't
  call the 1943 letter a "manifesto" in the strict sense, and don't credit it to Rothko
  alone (Gottlieb + Rothko, with Newman).
- ⚠️ **"Action painting" is Rosenberg's critic's term (1952), gesture-wing only** — never
  apply it to Rothko or Newman, and never present it as the painters' self-chosen name.
- ⚠️ **The CIA axis must be precise:** documented covert PROMOTION (Congress for Cultural
  Freedom), c.1950–67, artists mostly unaware — NOT "the CIA invented AbEx" and NOT a
  denial. Cite Saunders. This is a framing-gate trap in both directions.
- ⚠️ **No em-dashes in shipping prose, INCLUDING inside the Rosenberg quote** — quote the
  clean fragment "an arena in which to act" or recast the sentence; do not paste the printed
  em-dash line.
- ⚠️ **Two wings, not one style** — write the gesture and color-field wings as opposites
  that share scale/ambition/the NY scene, not a single look.
- ⚠️ **Don't re-tell Surrealism** — AbEx is its direct method-child via automatism;
  reference the Surrealism pack/read for the handoff. Coordinator: add reciprocal
  cross-links AbEx ← Surrealism (parent) + Hofmann/Cubism/WPA precursor notes; AbEx →
  Color Field (child via soak-stain) and AbEx → Pop/Minimalism (children by reaction).
