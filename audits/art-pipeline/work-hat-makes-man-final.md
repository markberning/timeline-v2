# FINAL — Max Ernst, *The Hat Makes the Man* (1920)

Work id: `hat-makes-man` · Movement: Dada · chain index 5 of 9. Reconciled output of
the art work-read pipeline: every [BLOCKER] and [FIX] from the fact / read / frame
gates folded against `work-hat-makes-man-factpack.md`.

KEY FACT-HANDLING (reconciled):
- **Acquisition (FACT B1):** MoMA bought the work in 1935 from the French poet Paul Éluard (accession 242.1935). The draft's "year not confirmed" hedges are replaced everywhere (const `acquired`, provenance row, prose) with the verified 1935 / Éluard provenance. The © 2017 line stays correctly identified as a rights-clearance year, not the acquisition date.
- **Medium support word (FACT F1):** sources split on the final support — MoMA-Tumblr (quoting MoMA) reads "on paper," the live MoMA-record snippet reads "on board," German Wikipedia reads "Karton" (cardboard). The const keeps MoMA's catalogue line; the prose no longer asserts "MoMA says paper, not board" as settled — it states MoMA's line and notes the support is variously recorded.
- Dimensions = MoMA's 13⅞ × 17¾ in (35.2 × 45.1 cm); landscape; the 14 × 18 in figure is a rounding.
- The inscribed German caption is verbatim; MoMA's circulating English is presented AS a translation, with the angiosperm/gymnosperm botany pun named — never as literal seed content, never as the title.
- The Freud / phallic read is framed as interpretation, not documented fact.
- Catalogue source = his father-in-law Jacob Straus's men's-hat sample catalogue.
- Collage definition quote attributed to Ernst, NOT merged with Lautréamont's umbrella/sewing-machine line.
- Ernst situated inside Cologne Dada (Baargeld, Arp); collage credited to prior Cubist practice; Surrealism dated 1924 (postdates the work).
- rights: 'pd-us'.

```ts
export const HAT_MAKES_MAN: ArtWorkContent = {
  id: 'hat-makes-man',
  name: 'The Hat Makes the Man',
  shortName: 'The Hat Makes the Man',
  year: 1920,
  artist: 'Max Ernst',
  artistId: 'ernst',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Gouache, pencil, oil, and ink on cut-and-pasted printed paper on paper',
  dimensions: '1 ft 1⅞ in × 1 ft 5¾ in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Purchase, 1935 (from Paul Éluard)',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 5, total: 9 },
  hook: 'Rows of men’s hats clipped from a sales catalogue, stacked into wobbly columns and wired together with painted tubes, so that merchandise alone adds up to a person, the joke that turns out to be the hinge from Dada to Surrealism.',
  heroImage: ART_IMG.ernstHatMan,
  heroCredit: 'Ernst, The Hat Makes the Man, 1920 · Museum of Modern Art, New York',
  heroAspect: 1.28, // 35.2 × 45.1 cm → W/H ≈ 1.28, landscape; image 2000 × 1566
  heroFit: 'contain', // the whole small sheet, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1920', k: 'Made' },
    { v: '13⅞ × 17¾ in', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'cologne', eyebrow: 'Cologne · 1920', dateLabel: '1919–1920', title: 'A Dada cell in a defeated city', blurb: 'A discharged German painter founds the local Dada group in a Cologne wrecked by a lost war, mocking the bourgeois order that produced it, and already drifting toward dream-logic while the other Dadaists stay angry.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1920', title: 'A page of hats, scissors, and a brush', blurb: 'Ernst works over a single printed sample-page of men’s hats from his father-in-law’s catalogue, cuts the hats out, stacks them into teetering towers, and paints colored tubes between them so the stacks read as standing bodies.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The sheet', dateLabel: '13⅞ × 17¾ in', title: 'Merchandise that adds up to a man', blurb: 'The stacked catalogue hats as wobbly columns, the painted blue-red-green-yellow tubes that join them into figures, the flat advertising look of the cut hats, and the handwritten pseudo-scientific caption along the bottom.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1920', title: 'The ready-made advertisement, made to dream', blurb: 'A picture built not from drawing but from mass-produced print, recombined into an absurd figure and labeled in deadpan nonsense. That is the turn that carries Dada’s anti-art collage over into Surrealism’s collage-as-dream.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'The record', dateLabel: '1935–today', title: 'The inscription, the sources, and a place in the canon', blurb: 'The caption read word for word, Ernst on what collage actually was, and the sheet’s life as an object: bought by Paul Éluard, sold to MoMA in 1935, and made a fixed point in the official story of modern art.', progress: 0.96 },
  ],
  provenance: [
    { year: '1920', who: 'Max Ernst (the artist)', place: 'Cologne', note: 'Made in 1920 in Cologne, the year Ernst’s Cologne Dada group was at its height. Built over a single printed hat-catalogue page with cut-and-pasted hats and added gouache, pencil, oil, and ink.', price: null },
    { year: '1935', who: 'Museum of Modern Art (purchased from Paul Éluard)', place: 'New York', note: 'MoMA bought the work in 1935 from the French poet and Surrealist Paul Éluard, who had owned it; the museum’s credit line reads simply “Purchase,” so it was bought rather than received as a gift or bequest (accession 242.1935). (The “© 2017 Artists Rights Society / ADAGP” on the museum’s record is a rights-clearance year, not the acquisition date.) Long a foundation stone of MoMA’s Dada and Surrealism holdings.', price: 'Purchase', museum: true },
  ],
  figures: [
    { name: 'Max Ernst', role: 'The maker; a founder of Surrealism', palette: ['#8a6b3a', '#3a2820', '#100c08'] },
    { name: 'Cologne Dada', role: 'Ernst’s local Dada cell, 1919–1920', palette: ['#5a4a8a', '#2a2440', '#100c1c'] },
    { name: 'Jacob Straus', role: 'Father-in-law; the hat catalogue’s source', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'The bourgeois “man”', role: 'The commodity the joke is aimed at', palette: ['#9a8458', '#4a3f28', '#15110a'] },
    { name: 'Surrealism', role: 'The movement this collage points to', palette: ['#1c3a6a', '#c8a72a', '#0e1224'] },
  ],
  annotations: [
    { label: 'The stacked catalogue hats', where: 'The four vertical “figures,” read top to bottom: each column is nothing but men’s hats piled one on another', detail: 'The towers are merchandise, not anatomy: bowlers, toppers, and soft felts cut from a printed sales-catalogue page and stacked into teetering columns. The literal fact on the sheet is a column of hats; the body is something the eye assembles, which is exactly the trick. The stacks lean and wobble rather than stand square, so the “men” look unstable, as if a stiff breeze would topple the whole product line.' },
    { label: 'The painted connecting tubes', where: 'Between and around the printed hats, the smooth drawn cylinders running through the gaps', detail: 'Ernst has drawn and painted slick tubes, cylinders, and a few cubes into the spaces between the cut hats, and these read as necks, spines, and legs that fuse the stacked merchandise into single standing bodies. They are the only hand-made “anatomy” in the picture; everything else is clipped print. Where the hats are flat and mechanical, the tubes are rounded and bodily, so the join between found object and painted limb is where the figure actually comes alive.' },
    { label: 'The colored vertical bodies', where: 'The connective passages, washed in clear blue, red, green, and yellow', detail: 'The painted joins are tinted in bright, clean gouache, so the grey catalogue hats appear to be built from, or wearing, vivid cylindrical torsos. The color does not sit on the hats; it lives in the made parts between them. That contrast, dull product against bright invention, is part of why the figures feel half-manufactured and half-dreamed.' },
    { label: 'The handwritten caption', where: 'Along the lower edge, in Ernst’s own hand', detail: 'A line of deadpan pseudo-scientific German, followed by a bracketed French proverb. It labels the stacked figures as if they were botanical specimens in a field guide, fake-precise and absurd, and it is where the title comes from: c’est le chapeau qui fait l’homme, “the hat makes the man.” The caption is part of the work, not a wall label; it is the joke’s punchline written onto the picture itself.' },
    { label: 'The catalogue-cut quality', where: 'The hats themselves, anywhere across the sheet', detail: 'The hats are flat, evenly lit, repetitive, and uniformly rendered in the giveaway style of commercial product illustration. That found, mechanical look is the whole point: these are advertising images lifted from print, not things Ernst drew. Once the rendering registers, the figures stop reading as portraits and start reading as a recombined order form.' },
    { label: 'The phallic, Freudian read', where: 'The towers overall, swelling and upright', detail: 'The stacked, bulging columns are unmistakably bodily and erect, and the title is often tied to Freud’s writing on jokes, with the hat as a symbol of repressed bourgeois male desire. So the consumer gag (you are what you buy) doubles as a sexual one. This is interpretation, likely-inspired rather than documented by Ernst, so it sits beside the picture rather than inside it.' },
  ],
  lineage: {
    parents: [
      { label: 'Cubist collage', mode: 'art' },
      { label: 'Duchamp’s readymade', mode: 'art' },
      { label: 'Cologne Dada', mode: 'art' },
      { label: 'A defeated, mass-producing Germany', mode: 'civ' },
    ],
    children: [
      { label: 'Surrealism', mode: 'art' },
      { label: 'Ernst’s Celebes', mode: 'art' },
      { label: 'Photomontage', mode: 'art' },
    ],
  },
}
```

```tsx
// ─────────────────────────────────────────────────────────────
// The Hat Makes the Man (Max Ernst, 1920) — the five chapters
// ─────────────────────────────────────────────────────────────
function HmkCologne({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Cologne · 1919–1920" title="A Dada cell in a defeated city" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>Cologne</strong> in <strong>1920</strong>, the First World War has been over for two years, and Germany lost it. The old empire has collapsed into the shaky new <strong>Weimar Republic</strong> (the democratic German state set up in 1919, named for the town where its constitution was written), the economy is sliding toward ruin, and a generation of young men has come home from the trenches convinced that the respectable bourgeois world that marched them off to die was a fraud from top to bottom. One of those men is a painter named <strong>Max Ernst</strong> (1891&ndash;1976), born near Cologne, trained loosely in philosophy and art, and back from four years in the German artillery with no patience left for the culture that produced the slaughter.
      </p>
      <p style={proseStyle}>
        Ernst&rsquo;s answer was <strong>Dada</strong>, the international anti-art movement that had begun in neutral <strong>Zurich</strong> in 1916, in a nightclub called the Cabaret Voltaire, among artists and poets sitting out the war. Dada&rsquo;s whole program was refusal. If the civilized order had produced the trenches, then reason, good taste, beauty, and the very idea of a serious work of art were all suspect, and the right response was nonsense, provocation, and mockery. (The name itself is nonsense: depending on who you ask, &ldquo;dada&rdquo; is French baby-talk for a hobbyhorse, or just two syllables picked at random from a dictionary. The pointlessness was the point.) By 1919&ndash;1920 Dada had spread to Berlin, to Paris, to New York, and to Cologne, where Ernst founded the local cell with his friend <strong>Johannes Theodor Baargeld</strong> and, in close dialogue, the Alsatian artist <strong>Jean (Hans) Arp</strong>.
      </p>
      <p style={proseStyle}>
        <strong>Cologne Dada</strong> shared the general project (ridicule the bourgeoisie, ridicule the war, ridicule the idea of modern man as an obedient, off-the-peg conformist), but Ernst&rsquo;s branch had a private tilt the others didn&rsquo;t. Where Berlin Dada was loud and political and Zurich Dada was performance, Ernst was quietly fascinated by chance, by accident, and by the strange logic of dreams. That fascination is why he is counted, a few years later, as a <strong>founder of Surrealism</strong>, the movement of the dreaming unconscious that grows directly out of work like this one. He is, in the standard telling, the first major visual artist to carry Dada over into the dream.
      </p>
      <p style={proseStyle}>
        And the work that shows the crossing most clearly is almost too small and too modest to bear the weight: a sheet of paper about the size of a place mat, covered with hats clipped out of a mail-order catalogue.
      </p>
    </article>
  )
}

function HmkMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The raw material" title="A page of hats for sale" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>E</DropCap>
        rnst began with a single printed page from a commercial <strong>sales catalogue of men&rsquo;s hats</strong>. The catalogue came from his father-in-law, <strong>Jacob Straus</strong>, a Cologne hat manufacturer, and the page was the ordinary thing such a page always is: neat rows of orderable hat forms (bowlers, top hats, soft felts), each one drawn flat and evenly, the way merchandise is drawn so a customer can pick a model and a size. This is advertising. It is the lowest, most disposable kind of printed image there is. Ernst chose it on purpose, because the gap between &ldquo;a hat catalogue&rdquo; and &ldquo;a work of art&rdquo; was exactly the gap he wanted to leap.
      </p>
      <p style={proseStyle}>
        Working over that page (in MoMA&rsquo;s accounting, with <strong>gouache, pencil, oil, and ink on cut-and-pasted printed paper</strong>, mounted on a second sheet), Ernst did three things. First he <strong>cut the hats out</strong>. Then he <strong>stacked them</strong>, one on top of another, into tall, teetering vertical towers, four of them across the sheet. Then he reached for a brush.
      </p>

      <SectionHeader accent={accent} label="From stack to figure" title="Wiring the merchandise into a body" />
      <p style={proseStyle}>
        Between and around the stacked hats, in the gaps the scissors left, Ernst drew and painted smooth <strong>tubes, cylinders, and a few cubes</strong>, washed in clear <strong>blue, red, green, and yellow</strong> gouache. These painted shapes do the connecting work. They run through the columns like necks and spines and legs, joining the separate cut hats into single standing things. And that is the moment the trick fires: stack enough merchandise into a vertical pile, wire it together with a bit of painted anatomy, and the eye reads it as a <strong>person</strong>. The hats become heads and torsos; the tubes become limbs; four piled-up towers of product become four figures standing in a row.
      </p>

      <SectionHeader accent={accent} label="The joke" title="You are what you buy" />
      <p style={proseStyle}>
        The joke is the whole work. Take the off-the-peg uniform of the respectable bourgeois man (the hat, the single most class-coded thing he wears), pile it up, and you have literally <strong>&ldquo;made the man.&rdquo;</strong> Identity, in Ernst&rsquo;s deadpan, is just the merchandise piled into a body shape. The figures have no faces, no hands, no selves; they are their hats and nothing else. It is a flat, withering little gag about a society that had decided a man was the sum of what he could be sold, aimed straight at the bourgeoisie that Dada blamed for the war.
      </p>
      <p style={proseStyle}>
        There is a second reading running under the first, and it is a reading rather than a fact. The stacked, swelling towers are unmistakably bodily and upright, and the title has long been tied to <strong>Sigmund Freud</strong>, specifically to Freud&rsquo;s 1905 book on jokes and the unconscious, in which the hat turns up as a symbol of repressed masculine desire. By that read the consumer gag (you are what you buy) doubles as a sexual one (the hat as a stand-in for what the buttoned-up bourgeois cannot say). Ernst never spelled this out, so it is an interpretation the picture invites, not a meaning he documented. Either way, the figures are absurd, and the absurdity is the point: this is what happens when you build a human being out of an order form.
      </p>
    </article>
  )
}

function HmkLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The sheet" title="Small, flat, and full of hats" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he work is tiny. It is about <strong>fourteen inches tall by eighteen inches wide</strong> (roughly 13⅞ by 17¾ in, the size of a place mat), and it is a flat <strong>sheet of paper</strong>, not a canvas. It reads <strong>landscape</strong>, wider than it is tall, and across that small horizontal field stand <strong>four vertical figures</strong> in a loose row, like specimens lined up for inspection. This is something you could pick up in both hands, not a wall-sized statement, and its modesty is part of its nerve.
      </p>

      <SectionHeader accent={accent} label="The towers" title="Columns that are nothing but hats" />
      <p style={proseStyle}>
        Top to bottom, each figure is a <strong>column of men&rsquo;s hats</strong> (bowlers, toppers, soft felts) cut from the catalogue and piled one on the next into a teetering tower. There is no anatomy in them at all; there is merchandise. The stacks lean and wobble rather than stand square, so the &ldquo;men&rdquo; look unstable, as if the whole product line might topple in a breeze. The hats themselves give away exactly what they are: <strong>flat, evenly lit, repetitive</strong>, rendered in the uniform style of commercial product illustration. That found, mechanical look is not a flaw. It is the announcement that these are advertising images, lifted whole, not things anyone sat down and drew.
      </p>

      <SectionHeader accent={accent} label="The joins" title="Painted tubes and colored bodies" />
      <p style={proseStyle}>
        Between the cut hats run the <strong>painted tubes</strong>, smooth drawn cylinders that act as necks, spines, and legs and fuse the stacks into single standing bodies. These are the only hand-made parts of the picture, and they are tinted in clear <strong>blue, red, green, and yellow</strong>, so the grey catalogue hats appear to be built from, or wearing, bright cylindrical torsos. The contrast does the work: the hats are dull, flat, mechanical; the joins are rounded, bodily, vivid. The seam between the found object and the painted limb is where the figure actually comes to life, which is to say it comes to life in exactly the place Ernst added by hand.
      </p>

      <SectionHeader accent={accent} label="The caption" title="A field guide written in nonsense" />
      <p style={proseStyle}>
        Along the lower edge, in Ernst&rsquo;s own handwriting, runs the <strong>caption</strong>, not a wall label added later but part of the work, the punchline written onto the picture. It is a line of deadpan, fake-scientific German that labels the stacked figures as if they were plant specimens in a botanical field guide, followed by a bracketed French proverb. The figures have been <em>filed</em>, classified, named in a register, as though a catalogue of merchandise were a catalogue of species. The flat bureaucratic deadpan is the comedy.
      </p>
      <p style={proseStyle}>
        At full-sheet scale the argument is plain. Four men, and not one of them is anything but the hats he is wearing. The picture has reached into a sales catalogue, pulled out the most ordinary objects it could find, and proven that you can build a person out of them, which is, of course, a way of saying the person was never more than the objects to begin with.
      </p>
    </article>
  )
}

function HmkBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Before" title="A picture was something you made by hand" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or all of the long history of Western painting up to this point, a picture was something an artist <strong>made</strong>, drew or painted, with the hand as the origin of every mark, working from observation or from imagination. Collage already existed: the Cubists <strong>Picasso</strong> and <strong>Braque</strong> had glued bits of newspaper and printed oilcloth into their canvases around 1912 (they called it <em>papier collé</em>, &ldquo;pasted paper&rdquo;). But in Cubism the pasted scrap was mostly a fragment, a patch of texture or pattern set into a picture that was still, fundamentally, composed by the painter&rsquo;s hand. The found material was an ingredient, not the dish.
      </p>

      <SectionHeader accent={accent} label="After" title="The advertisement, recombined into a figure" />
      <p style={proseStyle}>
        <em>The Hat Makes the Man</em> does something different in kind. The image is <strong>built from ready-made commercial print</strong>, illustrations lifted whole from a mail-order catalogue, recombined, not drawn. The &ldquo;subject&rdquo; of the picture is mass-produced advertising matter. And the recombination is <strong>absurd and figure-making</strong>: stacked merchandise becomes a person, glued together with a little painted anatomy and captioned in deadpan pseudo-scientific nonsense. This is the logic of <strong>Marcel Duchamp&rsquo;s readymade</strong> (the idea, a few years earlier, that an artist could simply <em>choose</em> a manufactured object, a bottle rack, a urinal, and declare it art) carried up off the gallery floor and into the picture plane.
      </p>
      <p style={proseStyle}>
        The hinge is this. Take that same cut-and-paste, that same chance recombination of found commercial images, and read the uncanny figure it produces not as a joke about consumer society but as a glimpse of a <strong>dream</strong>, and you have walked out of Dada and into <strong>Surrealism</strong> (the movement, founded in Paris in 1924, of the dreaming unconscious). The mechanism is identical: irreconcilable images forced together on a surface that does not suit them. What changes is the destination. For the Dadaist, the dislocation is iconoclasm, an attack on art and reason. For the Surrealist who comes next, the very same dislocation becomes, in the standard account, a direct manifestation of unconscious thinking, a window onto the desires reason keeps locked away. <em>The Hat Makes the Man</em> stands exactly on that line. It is anti-art collage that has already started to dream.
      </p>
      <p style={proseStyle}>
        Ernst said as much about these overpaintings of catalogue and textbook pages. His aim, he wrote, was &ldquo;to transform what previously had been merely banal pages of advertising into dramas that contained my most secret desires.&rdquo; Banal pages of advertising; secret desires. That sentence is the whole crossing in miniature: the lowest commercial print, turned into the theater of the unconscious. Within a year Ernst would paint <em>Celebes</em>, a looming dream-monster with a boiler for a body, often called the first masterpiece of Surrealist painting; within four years he would be a founding member of the Surrealist movement in Paris. The road to all of it runs through a page of hats.
      </p>
    </article>
  )
}

function HmkAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The inscription" title="The caption, word for word" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he line Ernst wrote along the bottom of the sheet is the work&rsquo;s own statement of itself. In German it reads:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic' }}>
        &ldquo;bedecktsamiger stapel-mensch nacktsamiger wasserformer (&lsquo;edelformer&rsquo;) kleidsame nervatur auch !umpressnerven! (c&rsquo;est le chapeau qui fait l&rsquo;homme) (le style c&rsquo;est le tailleur)&rdquo;
      </p>
      <p style={proseStyle}>
        The museum&rsquo;s circulating English rendering runs: &ldquo;seed-covered stacked-up man seedless waterformer (&lsquo;edelformer&rsquo;) well-fitting nervous system also tightly-fitted nerves! (the hat makes the man) (style is the tailor).&rdquo; That translation flattens what the German is doing. <strong>bedecktsamig</strong> and <strong>nacktsamig</strong> are real botanical terms: they mean <em>angiosperm</em> (a covered-seed plant, seeds enclosed in fruit) and <em>gymnosperm</em> (a naked-seed plant, like a conifer).
      </p>
      <p style={proseStyle}>
        The common English &ldquo;seed-covered&rdquo; and &ldquo;seedless&rdquo; loses that covered-seed-versus-naked-seed pun entirely; the line is deliberate fake-botanical nonsense, classifying the stacked hat-men as if they were two species of plant. The English is a translation in circulation, not the literal content and not the title.
      </p>
      <p style={proseStyle}>
        The title itself comes from the bracketed French at the end. <em>C&rsquo;est le chapeau qui fait l&rsquo;homme</em> (&ldquo;it is the hat that makes the man&rdquo;) turns the old cliché &ldquo;clothes make the man&rdquo; into something literal and a little sinister: here the man really <em>is</em> the hat, nothing more. And <em>le style c&rsquo;est le tailleur</em> (&ldquo;the style is the tailor&rdquo;) twists the famous saying that style is the man into a flat consumer joke: the style isn&rsquo;t the person at all, it&rsquo;s whoever cut the cloth. The caption is the picture confessing what it has done.
      </p>

      <SectionHeader accent={accent} label="Ernst on collage" title="Two realities that don’t belong together" />
      <p style={proseStyle}>
        Ernst kept returning, in his writing, to what collage actually was. His standard formulation describes it as <strong>&ldquo;the coupling of two realities, irreconcilable in appearance, upon a plane which apparently does not suit them.&rdquo;</strong> That is the whole method in one line: take two things that have no business together (a hat catalogue and a human figure, a boiler and an elephant), force them onto one surface, and let the shock of the mismatch do the work. (Ernst&rsquo;s idea here descends from a line he loved by the poet Lautréamont, about the chance meeting of an umbrella and a sewing machine on a dissecting table; the umbrella line is Lautréamont&rsquo;s, not Ernst&rsquo;s, but the taste for the impossible pairing is the same.) The hats and the man are exactly that coupling, and the caption files the result as a new species.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="Made in Cologne, bought by MoMA in 1935" />
      <p style={proseStyle}>
        Ernst made it in <strong>Cologne in 1920</strong>. It is now in the <strong>Museum of Modern Art</strong> in New York, which bought it in <strong>1935</strong> from the French poet <strong>Paul Éluard</strong>, an early owner; the museum&rsquo;s credit line reads simply <strong>&ldquo;Purchase,&rdquo;</strong> meaning it was bought rather than given. (The &ldquo;© 2017&rdquo; on the museum&rsquo;s record is a rights-clearance date, not the date of acquisition.) The little hat-collage has been one of the foundation stones of MoMA&rsquo;s great holdings of Dada and Surrealism ever since.
      </p>
      <p style={proseStyle}>
        A note on the materials, since the records do not all agree. MoMA&rsquo;s catalogue line gives the medium as <strong>gouache, pencil, oil, and ink on cut-and-pasted printed paper on paper</strong>; the support at the back is variously recorded as paper, as board, and (in German sources) as cardboard. What is not in doubt is the method: clipped commercial print, stacked and overpainted, on a small mounted sheet.
      </p>

      <SectionHeader accent={accent} label="Rights" title="Free here, still owned there" />
      <p style={proseStyle}>
        Because the collage was published in <strong>1920</strong>, it is in the <strong>public domain in the United States</strong>, which is why we can show it freely. Ernst died in 1976, so the work is <em>still in copyright in Europe</em> (the European term runs for the artist&rsquo;s life plus seventy years), and European and museum reproductions carry a rights line from the artists&rsquo; societies that manage his estate. The image is free where we are, in other words, but not free everywhere.
      </p>
      <p style={proseStyle}>
        The sheet itself went on to a quiet kind of fame. Bought by the Museum of Modern Art, it became one of the anchor objects of the collection that, more than any other, taught the postwar English-speaking world what Dada and Surrealism even were: reproduced in the textbooks, hung as a touchstone, taught on MoMA&rsquo;s own learning pages. The angry little joke a discharged soldier cut out of his father-in-law&rsquo;s order forms is now a fixed point in the official story of modern art, the place where, by the standard account, the cut-and-paste of protest first tipped over into the cut-and-paste of dream.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  hat-makes-man: { cologne: HmkCologne, making: HmkMaking, looking: HmkLooking, break: HmkBreak, afterlife: HmkAfterlife },
```
