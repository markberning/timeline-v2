# FINAL (reconciled) — Helen Frankenthaler, *Mountains and Sea* (1952) · work-read `mountains-sea`

Reconciled from `work-mountains-sea-draft.md` against all four gates
(fact / read / frame) + `work-mountains-sea-factpack.md`. Every [BLOCKER] and
[FIX] folded. PART A = the `ArtWorkContent` const (splice into
`src/lib/art-content.ts`, register in `ART_WORK_CONTENT`). PART B = the five
`Mts*` section components (splice into `art-section-reader.tsx`, register in
`NARRATIVES`). Shared helpers (`SectionHeader`, `DropCap`, `proseStyle`,
`ART_ACCENTS`, `ART_IMG`) are used, not redefined or imported.

Changes folded this pass:
- **FACT FIX-1 / FRAME §2(b):** the "bridge" line is Morris Louis describing
  **Frankenthaler the artist** ("**the** bridge between Pollock and what was
  possible"), NOT the painting and NOT "a bridge". Fixed in the const `afterlife`
  blurb and in `MtsAfterlife` ¶2; the verbatim quote now attaches to her.
- **FACT FIX-2:** "second solo exhibition" wording kept everywhere; the wrong
  "first professionally exhibited work" phrasing is never imported.
- **READ gate (7 FIXes):** stripped meta/process-narration ("Here is the method…",
  "the precise claim to ship", "Scope the claim carefully", "Two things to flag",
  "the safe version / hold it loosely", "It helps to know…"); de-stacked the
  looking-section reader-commands (kept the one anchoring "Stand in front of it,"
  converted the rest to declarative); softened the "Hunt for a ridge…" annotation.
- **FRAME §2(a):** soak-stain kept scoped as PIONEERED (Pollock pour precedent
  c.1947, scoped everywhere).
- **FRAME §1:** added one-paragraph young-woman-in-the-male-coded-AbEx-scene
  context to `MtsNovaScotia`, tied to the work's break, not tokenized.
- **FRAME §2(d):** trimmed the "single afternoon's kind of move" prodigy flourish.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Mountains and Sea (Helen Frankenthaler, 1952), Helen Frankenthaler
// Foundation, on extended loan to the National Gallery of Art, Washington.
// Flagship Abstract Expressionism → Color Field work-read. Authored through the
// art content pipeline (fact pack → Opus → 5 gates → reconcile/revise). Chapter
// prose in art-section-reader.tsx NARRATIVES['mountains-sea'] (Mts… prefix).
// FACT HANDLING (gate-corrected, per work-mountains-sea-factpack.md + gates):
//  • She PIONEERED the soak-stain; she did NOT invent pouring (Pollock precedent,
//    c.1947 on) — scoped everywhere it appears.
//  • Medium = "Oil and charcoal on unprimed canvas" (Foundation's exact line is
//    "oil and charcoal on unsized, unprimed canvas"). This 1952 work is
//    turpentine-thinned OIL, NOT acrylic (acrylic is her LATER work) — never
//    soften "unsized/unprimed" to "on canvas," never call this one acrylic.
//  • Dimensions = 219.4 × 297.8 cm = 7 ft 2 3/8 in × 9 ft 9 1/4 in, LANDSCAPE
//    (Foundation figures, not Wikipedia's rounded 220 cm / 87 in).
//  • The "bridge between Pollock and what was possible" line is MORRIS LOUIS's
//    reported description OF FRANKENTHALER THE ARTIST ("the bridge…"), popularized
//    via Karen Wilkin; variant "was"/"is" — do NOT attribute to Frankenthaler or
//    Greenberg as speaker, and do NOT attach it to the painting as the referent.
//  • The Louis/Noland studio visit dated "1953"; the April 4, 1953 date is widely
//    repeated but not nailed down.
//  • First public showing = her SECOND solo show (Tibor de Nagy, early 1953); never
//    call it her "first professionally exhibited work" (her first solo was 1951).
//  • rights: 'in-copyright' (Frankenthaler d. 2011; © Helen Frankenthaler
//    Foundation / ARS, New York) — hero shown small + credited, fair use.
//  • Owned by the Foundation, on long-term loan to the NGA — NOT an NGA
//    acquisition; no purchase, no price.
// ─────────────────────────────────────────────────────────────
export const MOUNTAINS_SEA: ArtWorkContent = {
  id: 'mountains-sea',
  name: 'Mountains and Sea',
  shortName: 'Mountains and Sea',
  year: 1952,
  artist: 'Helen Frankenthaler',
  artistId: 'frankenthaler',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil and charcoal on unprimed canvas',
  dimensions: '7 ft 2 3/8 in × 9 ft 9 1/4 in',
  location: 'Helen Frankenthaler Foundation (on extended loan to the National Gallery of Art, Washington)',
  acquired: 'On extended loan to the National Gallery of Art, Washington, from the Helen Frankenthaler Foundation (not an NGA acquisition)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 8, total: 9 },
  hook: 'A 23-year-old pours turpentine-thinned paint onto raw, unprimed canvas on the floor, and instead of sitting on top it soaks in and stains the cloth like watercolor at mural scale. The soak-stain she pioneered here became the bridge from Pollock to Color Field.',
  heroImage: ART_IMG.frankenthalerMtns,
  heroCredit: 'Frankenthaler, Mountains and Sea, 1952 · Helen Frankenthaler Foundation (on loan to the National Gallery of Art) · in copyright, shown small under fair use.',
  heroAspect: 1.37, // 219.4 × 297.8 cm → W/H ≈ 1.357, landscape
  heroFit: 'contain', // the whole ~7 × 10 ft canvas, never cropped
  rights: 'in-copyright', // Frankenthaler d. 2011; © Helen Frankenthaler Foundation / ARS, New York; NOT pd-us
  stats: [
    { v: '1952', k: 'Painted' },
    { v: '7′2⅜″ × 9′9¼″', k: 'Dimensions' },
    { v: 'On loan to the NGA', k: 'Now at' },
  ],
  sections: [
    { id: 'nova-scotia', eyebrow: 'New York · 1952', dateLabel: 'Fall 1952', title: 'A 23-year-old back from the coast', blurb: 'Fresh from a summer painting the cliffs and water of Cape Breton, Nova Scotia, Helen Frankenthaler returns to her New York studio carrying the landscape in her head. She is 23, schooled on Cubism and on Pollock’s floor-bound pours, and a young woman entering a scene whose reigning style prized exactly the muscular gesture she was about to drop.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'Fall 1952', title: 'Thin the paint, lay the canvas flat, let it soak', blurb: 'She thins her oil paint with turpentine until it runs like watercolor, lays an unprimed, unsized (raw) canvas on the floor, and pours. With no gesso ground to stop it, the color sinks into the weave and stains the cloth. This is the first soak-stain painting.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '7 ft 2 3/8 in × 9 ft 9 1/4 in', title: 'Watercolor washes at the scale of a wall', blurb: 'Thin translucent stains of blue, green, and pink soaking into raw fabric; loose charcoal lines drawn straight on the canvas; large stretches of bare cloth left showing; a remembered shoreline that never resolves into a real view.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Abstract Expressionism → Color Field', title: 'When the stain became the image', blurb: 'Pollock poured paint onto the surface as a raised skein of line. Frankenthaler thins it until it sinks in and fuses with the canvas. No impasto, no brush “handwriting,” color and cloth one flat plane. That single move opens the door from action painting to Color Field.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1953–today', title: 'The studio visit that seeded a school', blurb: 'In 1953 the critic Clement Greenberg brings the Washington painters Morris Louis and Kenneth Noland to see it; both go home and begin staining raw canvas, launching Color Field and the Washington Color School. Louis later called Frankenthaler the bridge between Pollock and what was possible.', progress: 0.96 },
  ],
  // Provenance: made 1952, held by the artist, debuted at her SECOND solo show at
  // Tibor de Nagy (1953), now owned by the Helen Frankenthaler Foundation and on
  // extended loan to the NGA. It is a LOAN, not an NGA acquisition. No prices: the
  // work has not been sold on the open market, so every price field is null.
  provenance: [
    { year: '1952–2011', who: 'Helen Frankenthaler (the artist)', place: 'New York', note: 'Painted in the fall of 1952. First publicly shown at her second solo exhibition at the Tibor de Nagy Gallery, New York, in early 1953 (catalogue dates flagged for primary confirmation). Held by Frankenthaler until her death in 2011.', price: null },
    { year: '2011–today', who: 'Helen Frankenthaler Foundation, Inc.', place: 'New York', note: 'The artist’s estate foundation. It owns the painting; the work has not been sold on the open market, so no purchase figure exists. © Helen Frankenthaler Foundation, Inc. / Artists Rights Society (ARS), New York.', price: null },
    { year: 'present', who: 'National Gallery of Art (on extended loan)', place: 'Washington, D.C.', note: 'On long-term loan to the National Gallery of Art from the Foundation. It is a loan, not an NGA acquisition, and is not in the NGA’s owned collection.', price: null, museum: true },
  ],
  figures: [
    { name: 'Helen Frankenthaler', role: 'The painter', palette: ['#7aa6c8', '#d6a87a', '#2a3640'] },
    { name: 'Jackson Pollock', role: 'The floor-bound pour she built on', palette: ['#2a2620', '#a8966a', '#0e0c08'] },
    { name: 'Clement Greenberg', role: 'Critic; brought Louis and Noland to see it', palette: ['#5a6354', '#39322a', '#120f0c'] },
    { name: 'Morris Louis', role: 'Took the stain home to Washington', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Kenneth Noland', role: 'The other Washington visitor', palette: ['#6a7250', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The thin, translucent stains soaking into raw canvas', where: 'Everywhere the color lies, the soft veils of blue, green, and pink', detail: 'The paint is not laid on top; it sits in the cloth as a dyed, matte wash, the way ink soaks into blotting paper. The edge of each color feathers and bleeds into the bare fabric instead of stopping at a hard brushed line. The pigment is embedded in the weave itself, which is why nothing in the picture casts the small shadow a ridge of brushed paint would. This soaking-in is the soak-stain, and it is what Frankenthaler pioneered with this canvas.' },
    { label: 'The visible charcoal drawing lines', where: 'Loose dark contours running across and through the stained color', detail: 'Sketched directly onto the canvas in charcoal, these lines read as drawing left in plain view, not erased under paint. They wander over and through the washes so that line and stain coexist on the same surface rather than one hiding the other. That is part of why the medium line is “oil and charcoal,” not oil alone: the drawing is a finished element of the picture, not buried scaffolding.' },
    { label: 'The bare canvas left showing', where: 'The large untouched stretches of pale raw fabric between the stained passages', detail: 'Wide areas of the cloth are simply left alone, the natural color of the unprimed fabric. This empty ground is not a gap waiting to be filled; it breathes between the pools of color and does real work in the composition. Leaving raw canvas active and on view, rather than covering it, is one of the quiet shocks of the picture, and a direct inheritance from the bare fabric Pollock let show through his poured webs.' },
    { label: 'The watercolor-like washes at large scale', where: 'The pooled, diaphanous color across the whole roughly 7-by-10-foot canvas', detail: 'The pours behave like watercolor: pooled, luminous, see-through. But they are blown up to mural size, about 7 feet tall by nearly 10 feet wide (219 × 298 cm). That collision is the surprise of the work, an intimate, fragile medium handled at the scale Abstract Expressionism reserved for its biggest statements. The wash stays see-through to the cloth, the way a watercolor stays see-through to the paper.' },
    { label: 'The landscape suggestion of blue, green, and pink', where: 'The green passage descending toward a band of blue, with pinks scattered through', detail: 'A green area dropping to a blue band reads as a rocky shore meeting water; pinks and blues scatter like spray and sky. It hovers between abstraction and a remembered coast and never resolves into a literal view. The picture grew from cliffs and sea Frankenthaler had painted that summer in Nova Scotia; she said the landscapes “were in my arms” as she made it, meaning the place is carried in the body of the painting, not depicted in it.' },
    { label: 'No impasto, no gesture', where: 'The surface as a whole, the absence of any raised paint, drag, or brush “handwriting”', detail: 'There is almost no ridge of heaped paint, no scraped drag, no loaded brushstroke. The surface is flat and stained, color fused into the plane of the cloth. That flatness is exactly the break from Pollock’s raised drips and de Kooning’s troweled, gestural paint: the drama of the painter’s touch is gone, and attention shifts to pure color and field.' },
  ],
  lineage: {
    parents: [
      { label: 'Pollock’s poured canvases', mode: 'art' },
      { label: 'Cubism (her early training)', mode: 'art' },
      { label: 'The cliffs of Cape Breton, Nova Scotia', mode: 'civ' },
    ],
    children: [
      { label: 'Color Field painting', mode: 'art' },
      { label: 'The Washington Color School (Louis · Noland)', mode: 'art' },
      { label: 'Stained, flat-field abstraction', mode: 'art' },
    ],
  },
}
```

## PART B — the five `Mts*` section components + NARRATIVES registry comment

```tsx
// ─────────────────────────────────────────────────────────────
// Mountains and Sea (Frankenthaler, 1952) — the five chapters
// ─────────────────────────────────────────────────────────────
function MtsNovaScotia({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1952" title="A twenty-three-year-old back from the coast" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the fall of <strong>1952</strong>, a painter who is <strong>twenty-three years old</strong> walks back into her New York studio carrying a coast in her head. Her name is <strong>Helen Frankenthaler</strong> (1928&ndash;2011). That summer she had traveled up to <strong>Cape Breton, on the Atlantic shore of Nova Scotia, Canada</strong>, and painted from nature there, in front of the rock and the water. She is not going to paint what she saw. She is going to paint what it left in her.
      </p>
      <p style={proseStyle}>
        The picture did not arrive out of nowhere. Frankenthaler had a serious schooling. She had absorbed <strong>Cubism</strong> (the Picasso-and-Braque way of breaking a subject into flat, overlapping planes) and the lessons of modern abstraction, and she had been taken up by the critic <strong>Clement Greenberg</strong> (1909&ndash;1994), the most powerful art writer in New York, who was both her champion and, for several years, her companion. Through that world she had watched the reigning giants of the new American painting at close range.
      </p>
      <p style={proseStyle}>
        She was also, at twenty-three, a young woman entering a New York scene whose reigning style prized exactly the things she was about to drop, the big, muscular, visibly male gesture of <strong>Willem de Kooning</strong>&rsquo;s brush and <strong>Jackson Pollock</strong>&rsquo;s flung arm. The move she made here ran the other way, toward soaked, quiet, drawn color, and it is part of why the picture read as a break.
      </p>
      <p style={proseStyle}>
        Of the giants she had watched, one mattered most: <strong>Pollock</strong> (1912&ndash;1956). In 1951 Frankenthaler had seen Pollock&rsquo;s poured paintings and been knocked sideways by them. Pollock did something nobody before him had quite done: he took the canvas off the easel, tacked it to the floor, and walked around it, trailing and flinging liquid house paint off sticks so the picture was built from his whole body moving over it rather than a hand at a wall. Pouring paint was Pollock&rsquo;s precedent, not Frankenthaler&rsquo;s invention, and that distinction will matter shortly. She wanted in on what he had opened, but she did not want to copy it. She later said of Pollock&rsquo;s work that she wanted to <em>&ldquo;live in this land,&rdquo;</em> not move into his house but find her own way across the same ground.
      </p>
      <p style={proseStyle}>
        So here is the situation in the studio. A young painter, fluent in abstraction, stirred by Pollock&rsquo;s floor-bound pours, and freshly full of the cliffs and sea of Nova Scotia, is standing over a length of canvas looking for a way to get the landscape out of her arms and into the cloth. What she did next was so simple, and so consequential, that it has its own name.
      </p>
    </article>
  )
}

function MtsMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1952" title="Thin the paint until it runs like watercolor" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        rankenthaler took her <strong>oil paint and thinned it heavily with turpentine</strong> (the solvent painters use to loosen oil paint) until it stopped behaving like paint and started behaving like watercolor or dye, runny enough to pour and flow. In <strong>1952</strong> she was working in <strong>thinned oil</strong>. Her stain pictures are often described as acrylic, which is true of her <em>later</em> work, once acrylics became available, but wrong for this one. <em>Mountains and Sea</em> is turpentine-thinned oil and charcoal, full stop.
      </p>
      <p style={proseStyle}>
        Next, she laid the canvas <strong>flat on the studio floor</strong>, the way Pollock did. And then, the move that changes everything, she did it on <strong>raw canvas</strong>. The full, exact description from the people who own the picture is <em>&ldquo;oil and charcoal on unsized, unprimed canvas.&rdquo;</em> Both technical words matter. <strong>Unsized</strong> means the cloth has no <em>size</em>, the glue-like sealant that is normally brushed into raw fabric to stop it drinking up liquid. <strong>Unprimed</strong> means it has no <em>primer</em>, no white gesso ground laid on top to give paint a smooth, sealed surface to sit on. So this is bare, thirsty cloth, sealed by nothing.
      </p>
      <p style={proseStyle}>
        Pour the thinned color onto that bare cloth and the result is the whole point. On a normal primed canvas the paint would sit on the surface as a film you could see and touch. Here there is nothing to hold it on top, so the color <strong>soaks down into the weave of the fabric and stains it</strong>, the way wine soaks a tablecloth. The pigment becomes part of the cloth itself rather than a layer resting on it. It is a little like <em>fresco</em>, the old wall-painting method where pigment is laid into wet plaster and fuses with the wall as it dries, becoming the wall instead of a coat on it. To steer the color once it was down, she <strong>tilted and lifted the canvas</strong> so the pools ran, and worked them with sponges, squeegee-like wipers, and rollers, drawing into and around it all in charcoal.
      </p>
      <p style={proseStyle}>
        That technique has a name: the <strong>soak-stain</strong>. Paint thinned enough to sink into raw, unprimed canvas and dye the cloth, rather than lie on the surface. The scope of it is easy to overshoot, so be exact: Frankenthaler did <strong>not</strong> invent pouring. Pollock had been pouring enamel for years, and she worked from his precedent openly. What she pioneered is the <strong>soak-stain</strong>, the pour that sinks in and becomes a stain. <em>Mountains and Sea</em> is the first painting she made this way. She was twenty-three.
      </p>
    </article>
  )
}

function MtsLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Watercolor, at the size of a wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The first surprise is the scale. The picture is large, about <strong>seven feet two inches tall by nine feet nine inches wide</strong> (219 × 298 cm), a wide landscape canvas you cannot take in at a glance. The second surprise is that, at that mural size, the color behaves like the most delicate thing in painting: <strong>watercolor</strong>. The stains are thin, pooled, see-through, luminous, the kind of diaphanous wash you expect on a small sheet of paper, blown up to the scale of a wall. That collision, an intimate medium handled like a monument, is the whole effect.
      </p>
      <p style={proseStyle}>
        The color does not sit on the surface; it sits <em>in</em> it. The edge of each stain <strong>feathers and bleeds</strong> into the bare cloth instead of ending in a clean brushed line. There is no ridge, no glint, no raised film. The color is dyed into the weave, matte and flat, so the eye seems to look <em>through</em> the wash to the fabric underneath. That is the soak-stain made visible: paint fused with cloth into a single plane.
      </p>

      <SectionHeader accent={accent} label="Drawing and bare cloth" title="Charcoal lines, and the canvas left to breathe" />
      <p style={proseStyle}>
        Loose dark <strong>charcoal contours</strong> wander across and through the color, drawn straight onto the canvas. They are not hidden under the paint and they are not erased; they sit on the same surface as the stains, so drawing and color coexist in plain view. This is why the official medium reads <em>&ldquo;oil and charcoal&rdquo;</em>: the drawing is a finished part of the picture, not scaffolding to be painted over.
      </p>
      <p style={proseStyle}>
        And much of the canvas is simply <strong>left bare</strong>. Large stretches of pale, untouched raw fabric run between the stained passages. This empty ground is not unfinished and it is not a gap waiting to be filled; it breathes between the pools of color and is part of the composition. Leaving raw canvas active and on view is one of the quiet radical moves here, and it is a direct inheritance: Pollock, too, let bare cloth show through the gaps in his poured webs.
      </p>

      <SectionHeader accent={accent} label="The landscape that isn’t one" title="A shore you can feel but not point to" />
      <p style={proseStyle}>
        And the color resolves, gently, into a place. A <strong>green passage descends toward a band of blue</strong> and reads as a rocky shore meeting water; <strong>pinks and blues</strong> scatter through like spray and sky. It hovers between pure abstraction and a remembered coast, and it never quite settles into a literal view: there is no horizon line you could measure, no rock you could name. This is the Nova Scotia of the first chapter, carried in the body of the painting rather than drawn in it. Frankenthaler put it best when she said, of making this picture, <em>&ldquo;The landscapes were in my arms as I did it.&rdquo;</em> Not a view out a window. A place that had soaked into her, poured back out into the cloth.
      </p>
    </article>
  )
}

function MtsBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="When paint sat on top of the canvas" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why this picture was a break, set it against what came right before it. <strong>Abstract Expressionism</strong> (the bold, large-scale American abstraction that dominated New York painting after the Second World War) had two great modes, and both kept paint <em>on top of</em> the surface, and both put the painter&rsquo;s body and touch front and center. <strong>Willem de Kooning</strong> worked in loaded, slashing brushstrokes, paint heaped up thick (<em>impasto</em>, paint piled so high it stands in ridges), dragged and scraped, every gesture of the hand left visible. <strong>Jackson Pollock</strong> poured liquid enamel, but it dried as a raised <em>skein</em>, a tangle of line lying on top of the cloth like dried glue. In both, paint was a worked, three-dimensional, surface event, and the canvas underneath was a support to be covered.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="When the stain became the image" />
      <p style={proseStyle}>
        <em>Mountains and Sea</em> makes the <strong>stain itself the image</strong>. Because the thinned color soaks into raw, unprimed cloth and fuses with it, there is essentially <strong>no raised paint, no impasto, no visible brush &ldquo;handwriting.&rdquo;</strong> Color and ground stop being two things and become one flat optical plane; the eye looks through the wash to the fabric; whole areas of bare canvas are left active rather than &ldquo;unfinished.&rdquo; The picture flattens out, and the painterly drama, the loaded stroke, the heroic gesture, drains away. Attention shifts from the <em>act</em> of painting to the thing itself: <strong>color, and field</strong>. This is the door into what gets called <strong>Color Field painting</strong>: abstraction built from large, open areas (fields) of flat, soaked color, with the artist&rsquo;s touch all but invisible.
      </p>

      <SectionHeader accent={accent} label="The hinge" title="Pollock’s pour, pushed one step further" />
      <p style={proseStyle}>
        Here is the hinge, and it is one decisive move. Frankenthaler took Pollock&rsquo;s breakthrough, <strong>paint poured rather than brushed</strong>, and pushed it a single step past him: from <em>pour-on-surface</em> to <em>pour-as-stain-into-surface</em>. Pollock&rsquo;s enamel sat on the cloth; her thinned oil sinks into it. That one decision, the pour that becomes a stain, is what opened the path from Pollock&rsquo;s action painting (the canvas as a record of the body in motion) to Color Field (the canvas as a soaked plane of pure color). It is not the first abstract painting, not the first poured painting, not the first to leave canvas bare. It is the first <strong>soak-stain</strong>, and the bridge it built. The painter who would put that most memorably was on his way to her studio, and he is the next chapter.
      </p>
    </article>
  )
}

function MtsAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1953" title="The visitors Greenberg let into the studio" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he year after she made it, the painting did something paintings rarely do: it changed other painters on sight. In <strong>1953</strong>, the critic <strong>Clement Greenberg</strong> brought two visitors from Washington, D.C., to see <em>Mountains and Sea</em>: the painters <strong>Morris Louis</strong> (1912&ndash;1962) and <strong>Kenneth Noland</strong> (1924&ndash;2010). The visit is commonly dated to <strong>4 April 1953</strong>, and several accounts say Greenberg let the two men into Frankenthaler&rsquo;s studio while she was out; the precise day is uncertain, and &ldquo;one weekend in 1953&rdquo; is as far as the record firmly goes. Both men were struck hard by what they saw.
      </p>
      <p style={proseStyle}>
        They took it home and ran with it. Back in Washington, Louis and Noland began <strong>staining thinned color into raw canvas</strong> themselves, and out of that work grew <strong>Color Field painting</strong> and the loose group known as the <strong>Washington Color School</strong>. The technique Frankenthaler had pioneered in one studio in New York became a whole strand of postwar American abstraction. Louis later gave her the line her work has carried ever since, calling Frankenthaler <em>&ldquo;the bridge between Pollock and what was possible.&rdquo;</em> The line is often mis-told. It is <strong>Morris Louis</strong>&rsquo;s characterization of Frankenthaler herself, reported later and popularized through the scholar Karen Wilkin, not a saying of Frankenthaler&rsquo;s and not Greenberg&rsquo;s; and it circulates in two forms, &ldquo;what <em>was</em> possible&rdquo; and &ldquo;what <em>is</em> possible.&rdquo;
      </p>

      <SectionHeader accent={accent} label="Reception · later" title="The picture some people called a paint rag" />
      <p style={proseStyle}>
        It was not loved on contact by everyone. Frankenthaler herself, with characteristic dryness, noted that the picture <em>&ldquo;looks to many people like a large paint rag, casually accidental and incomplete.&rdquo;</em> The thinness, the bare canvas, the absence of heroic brushwork, all the things that made it new, read to some early viewers as a picture that had not been finished. That charge, that a soaked, flat, understated canvas was somehow not a real painting, is exactly the resistance every genuine break runs into, and exactly what Louis and Noland saw past.
      </p>

      <SectionHeader accent={accent} label="Where it lives now" title="Owned by the Foundation, on loan to the nation" />
      <p style={proseStyle}>
        Frankenthaler kept the painting through her long life; it first went on public view at her second solo show at the <strong>Tibor de Nagy Gallery</strong> in New York in early 1953. After her death in 2011, it passed to the <strong>Helen Frankenthaler Foundation</strong>, her estate foundation, which owns it today. The Foundation has placed it on <strong>extended loan to the National Gallery of Art in Washington, D.C.</strong>, so that is where you can stand in front of it, though it is a loan, not a museum purchase, and the painting has never been sold on the open market. The standard line on its importance is the cleanest one: <em>Mountains and Sea</em> is to Color Field roughly what Monet&rsquo;s <em>Impression, Sunrise</em> is to Impressionism, the painting the whole thing is dated from. A twenty-three-year-old poured it onto the floor, and a strand of American painting walked through the door she had opened.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'mountains-sea': { 'nova-scotia': MtsNovaScotia, making: MtsMaking, looking: MtsLooking, break: MtsBreak, afterlife: MtsAfterlife },
```
