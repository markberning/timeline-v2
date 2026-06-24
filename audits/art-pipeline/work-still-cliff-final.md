# Work FINAL — Clyfford Still, *1957-D No. 1* (1957) — id `still-cliff`

Reconciled from `audits/art-pipeline/work-still-cliff-draft.md` against all four gates:
FACT (PASS clean), READ (PASS w/ FIXes — voice tics + meta + Boccioni), FRAME (PASS w/ FIXes
— add scoped priority claim, soften "most combative" to reputation). Every [BLOCKER]/[FIX]
folded. Voice contract held: no reader-commands (one scale-gesture retained, "stood before it,"
which is an embodied fact of the work's scale), no meta-narration, no honesty-labels; verbatim
color quote ends "…fuse into a living spirit" and is kept SEPARATE from the "life and death"
statement; no literal "—" in any TS string (commas/parens/colons), the lone `&mdash;` sits in a
JSX text node; title is a date-code; "life-lines" stays OUT; rights:'in-copyright';
dimensions ft/in; heroAspect 1.40, heroFit:'contain'. Identifiers/section-ids/component names
identical to draft.

## PART A — const

```ts
// ─────────────────────────────────────────────────────────────
// Work, 1957-D No. 1 (Clyfford Still, 1957), Buffalo AKG Art Museum
// (formerly the Albright-Knox Art Gallery; renamed 2023), accession
// K1959:26. A flagship Abstract Expressionism work read. Authored
// through the art content pipeline (fact pack → Opus → 5 gates →
// revise). Chapter prose in art-section-reader.tsx NARRATIVES['still-cliff']
// (Stl… prefix). FACT HANDLING (gate-corrected):
//   • Title is a DATE-CODE title (year + letter + number), Still's neutral
//     non-referential scheme; it is NOT a "PH" number ("PH" = PHotograph
//     inventory number, the order works were photographed). Do not conflate.
//   • The color quote ends "…fuse into a living spirit" — it is NOT the same
//     statement as "life and death merging in fearful union." Kept separate;
//     the color quote is used verbatim as the KEY STATEMENT, with its source.
//   • "Life-lines" is NOT Still's documented term (it is a 2019 film title);
//     the rifts are described as torn / flame-like / jagged color-edges.
//   • Still's CLAIM TO PRIORITY among the field-painters is folded into StlBreak,
//     strictly SCOPED ("his claim and the field's partial nod, not a scoreboard").
//   • His combativeness is given as REPUTATION, not the narrator's verdict.
//   • Credit line is the 1959 Knox gift, distinct from Still's own 1964 gift
//     of 31 paintings. Image verified against the file: black-dominant field,
//     jagged yellow/beige verticals, white flecks, bare-canvas patches.
//   • IN-COPYRIGHT (Still d. 1980 → not PD) → shown small, credited, fair use.
// ─────────────────────────────────────────────────────────────
export const STILL_CLIFF: ArtWorkContent = {
  id: 'still-cliff',
  name: '1957-D No. 1',
  shortName: '1957-D No. 1',
  year: 1957,
  artist: 'Clyfford Still',
  artistId: 'still',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '9 ft 5 in × 13 ft 3 in',
  location: 'Buffalo AKG Art Museum, Buffalo, New York',
  acquired: 'Gift of Seymour H. Knox, Jr., 1959 (acc. K1959:26)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 6, total: 9 },
  hook: 'A wall of black, nine by thirteen feet, troweled on with a palette knife and torn through by jagged shards of yellow, painted by a man with a reputation as the most combative figure in American art, who refused titles, quit the galleries, and sealed away most of what he made.',
  heroImage: ART_IMG.stillCliff,
  heroCredit: 'Still, 1957-D No. 1, 1957 · Buffalo AKG Art Museum · in copyright, shown small under fair use',
  heroAspect: 1.40, // 287.02 × 403.86 cm → W/H ≈ 1.41, landscape
  heroFit: 'contain', // the whole ~9½ × 13¼ ft canvas, never cropped
  rights: 'in-copyright', // Still d. 1980 → not public domain; shown small under fair use
  stats: [
    { v: '1957', k: 'Painted' },
    { v: '9′5″ × 13′3″', k: 'Dimensions' },
    { v: 'Buffalo AKG', k: 'Now at' },
  ],
  sections: [
    { id: 'independent', eyebrow: 'New York · 1950s', dateLabel: '~1952–1959', title: 'The painter who quit the room', blurb: 'By reputation the most combative of the New York abstractionists. He cut ties with commercial galleries, stopped showing in public for about seven years, refused descriptive titles, and would later seal most of his life’s work away from view entirely.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1957', title: 'Paint laid on with a knife', blurb: 'Not brushed but troweled: thick crusted oil pushed across a wall-sized canvas with a palette knife, the colored areas ending in torn, ragged, flame-like edges rather than drawn lines. A field, not an arrangement of shapes.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '9 ft 5 in × 13 ft 3 in', title: 'A wall of black, torn open to yellow', blurb: 'A predominantly black field jolted through by jagged verticals of yellow and beige, white flecks stranded across the yellow, a few patches of bare unpainted canvas, and a matte surface that swallows the light rather than reflecting it.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1957', title: 'A field built from torn color, and what it refused', blurb: 'No central subject, no balanced design, no figure against a ground: one continuous skin of color punctured by rifts, running to the very edge of the frame. Still pushed abstraction past style into a flat existential statement, and matched it by walking out of the art world.', progress: 0.80 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1959–today', title: 'The city he chose, and the estate he sealed', blurb: 'Bought and given to the museum in Buffalo by Seymour H. Knox, Jr., the start of a bond that brought Buffalo dozens of Still paintings. The rest he willed intact to one American city, unseen until the Clyfford Still Museum opened in Denver in 2011.', progress: 0.96 },
  ],
  provenance: [
    { year: '1957', who: 'Clyfford Still (the artist)', place: 'New York', note: 'Painted in 1957, with one of Still’s deliberately neutral date-code titles (year, letter, number) chosen so nothing would steer the viewer.', price: null },
    { year: '1959', who: 'Seymour H. Knox, Jr.', place: 'Buffalo', note: 'Acquired by Seymour H. Knox, Jr., board president of the Albright-Knox Art Gallery, and given to the museum the same year. Credit line: Gift of Seymour H. Knox, Jr., 1959. This 1959 gift is distinct from Still’s own later gift of 31 paintings in 1964.', price: null },
    { year: '1959–today', who: 'Buffalo AKG Art Museum', place: 'Buffalo, New York', note: 'Held since 1959 by the Albright-Knox Art Gallery, the same institution renamed the Buffalo AKG Art Museum in 2023. Accession K1959:26. In the permanent collection.', price: 'gift', museum: true },
  ],
  figures: [
    { name: 'Clyfford Still', role: 'The painter', palette: ['#1a1814', '#c8a72a', '#0c0a08'] },
    { name: 'Seymour H. Knox, Jr.', role: 'Bought it and gave it to Buffalo', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Gordon M. Smith', role: 'Director who won Still’s trust', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Mark Rothko', role: 'Color-field peer; soft rectangles', palette: ['#8a3a2a', '#3a1c14', '#0e0806'] },
    { name: 'Barnett Newman', role: 'Color-field peer; the vertical “zip”', palette: ['#7a1c1c', '#2a2a2a', '#0d0606'] },
  ],
  annotations: [
    { label: 'The torn color-edges', where: 'Wherever a yellow form meets the black, all across the canvas', detail: 'Where one color ends and the next begins, the boundary is ragged and irregular, like torn paper or the edge of a flame, never a ruled or drawn line. This is Still’s signature move: the field looks ripped open rather than designed, as if a sheet of black were being peeled back to show yellow beneath. The literal fact is the jagged seam; reading it as cliffs, bark, or a wound is interpretation, and a fair one.' },
    { label: 'The palette-knife impasto', where: 'Across the whole surface, strongest in the built-up yellow shards', detail: 'The paint is troweled on in heavy, crusted layers with a palette knife rather than brushed flat, so up close the surface is thick and tactile, the marks of the knife standing in ridges you could read as texture. The picture is as much a built crust of oil as it is an image, and the muscle of the making is left visible.' },
    { label: 'The black field and its rifts', where: 'The whole canvas: a dominant black jolted by yellow and beige', detail: 'A single color dominates, here a deep, encompassing black, and it is pierced by sudden jolts of yellow and beige that run mostly vertically. The largest yellow forms break upward through the dark like sheets pulled apart. The black is not a background behind the yellow so much as the other half of the same torn field; there is no figure sitting in front of a ground.' },
    { label: 'The matte, light-swallowing surface', where: 'Everywhere; clearest in the broad black areas', detail: 'The oil is dry and absorbent rather than glossy, so the picture takes the light in instead of bouncing it back. That dull, non-reflective black is part of the painting’s somber weight: it reads less like a polished object to admire than like a flat, absorbing wall, which is exactly the un-decorative effect Still wanted.' },
    { label: 'The patches of bare canvas', where: 'Near the lower part of the picture, small unpainted areas amid the black', detail: 'In a few places the raw, unpainted canvas is simply left showing, neither black nor yellow but the pale fabric itself. Far from a slip, these bare patches are part of the surface Still let stand, a reminder that the picture is paint pushed across cloth, with the cloth allowed to breathe through in spots.' },
    { label: 'The towering scale, and the absence of any image', where: 'The picture as a whole, at roughly 9½ by 13¼ feet', detail: 'At nearly ten feet tall and over thirteen wide, the canvas exceeds your body and fills your field of vision, meant to be stood before rather than looked at across a room. And there is nothing in it to recognize: no figure, no horizon, no object, no symbol, and no descriptive title to supply one. You are left with color, torn edge, and sheer scale, which is the entire content.' },
  ],
  lineage: {
    parents: [
      { label: 'Abstract Expressionism', mode: 'art' },
      { label: 'The sublime in landscape', mode: 'art' },
      { label: 'A combative independence', mode: 'civ' },
    ],
    children: [
      { label: 'Color Field painting', mode: 'art' },
      { label: 'The all-over abstract field', mode: 'art' },
      { label: 'The Clyfford Still Museum, Denver', mode: 'civ' },
    ],
  },
}
```

## PART B — narrative components

```tsx
// ─────────────────────────────────────────────────────────────
// 1957-D No. 1 (Clyfford Still, 1957) — the five chapters
// ─────────────────────────────────────────────────────────────
function StlIndependent({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1950s" title="The painter who quit the room" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the New York of the late 1940s and 1950s, a loose group of American painters were making the first art movement the United States could call its own, the one we now call <strong>Abstract Expressionism</strong> (abstract, meaning it pictures no recognizable thing; expressionist, meaning the picture is about feeling and force rather than likeness). <strong>Jackson Pollock</strong> dripped and flung paint across canvas on the floor. <strong>Mark Rothko</strong> stacked soft, glowing rectangles of color. <strong>Barnett Newman</strong> split a single field of color with a thin vertical stripe he called a &ldquo;zip.&rdquo; And among them, by reputation the least clubbable and most combative of them, was <strong>Clyfford Still</strong> (1904&ndash;1980), a painter from the rural northern plains who trusted almost no one and explained almost nothing.
      </p>
      <p style={proseStyle}>
        Still was furiously independent, by temperament and on principle. He came to see the whole system that surrounds painting, the commercial galleries that sell it, the critics who interpret it, the collectors who trade it, as a machine that compromised the work and the viewer alike. So in the early 1950s he started pulling out of it. He cut his ties with commercial galleries. He <strong>declined to show his work in public from roughly 1952 to 1959</strong>, nearly seven years of silence in the middle of his most productive decade. He refused to explain his paintings, and he refused to give them descriptive names. In 1961 he would move to a farm near Westminster, Maryland, and step out of the New York scene almost entirely.
      </p>
      <p style={proseStyle}>
        That refusal extended even to the titles. Still would not call a painting <em>Black and Yellow</em> or <em>Sublime</em> or anything that pointed at a subject or a mood. Instead he used flat, neutral codes built from the date: a year, a letter, a number. The painting in front of us is named <strong><em>1957-D No. 1</em></strong>, which tells you only that it was made in 1957 and nothing else. He said so plainly: he wanted his pictures &ldquo;without titles of any kind,&rdquo; because, in his own words, he wanted no <em>&ldquo;allusions to interfere with or assist the spectator.&rdquo;</em> A title is a hint, and Still refused to hint. You were to stand in front of the paint with no story handed to you, and deal with it on its own terms or not at all. These date-codes are not the same as the &ldquo;PH&rdquo; numbers sometimes attached to Still paintings. &ldquo;PH&rdquo; stands for PHotograph, an inventory number for the order in which works were photographed, a librarian&rsquo;s tool, not the artist&rsquo;s title. <em>1957-D No. 1</em> is a date-code, not a PH number.
      </p>
      <p style={proseStyle}>
        So this is the man whose painting we are about to read: someone who walked out of the gallery, padlocked the explanations, stripped the titles down to a date, and dared you to make something of the silence. The picture is the same gesture as the life.
      </p>
    </article>
  )
}

function StlMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1957" title="Paint laid on with a knife, not a brush" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ow it is physically made is half the meaning. Most oil paintings are <strong>brushed</strong>: pigment carried across the canvas in strokes, thin enough that the picture sits more or less flat on the surface. Still did something else. He worked much of this paint on with a <strong>palette knife</strong> (a flat, blunt blade, like a small flexible trowel), pushing thick oil across the canvas in heavy, crusted layers. This is <strong>impasto</strong>, paint laid on so thick it stands up off the surface in ridges, and Still uses it not as an accent but as the whole skin of the picture. Up close the surface is built up, tactile, the drag-marks of the knife frozen in the buildup. The painting is, in a real sense, a crust.
      </p>
      <p style={proseStyle}>
        And the colored areas do not end the way painted shapes usually end. There is no clean outline, no drawn boundary, nothing ruled. Where one color meets another, the edge is <strong>torn</strong>: ragged, irregular, flame-like, the way a sheet of paper rips rather than the way a line is drawn. Still does this on purpose and does it everywhere, so that a field of yellow seems to have been peeled out of the black around it, or the black to have been pulled back to reveal the yellow underneath. The picture reads as one continuous skin of color that has been <em>ripped open</em>, not as a set of shapes arranged on a backdrop.
      </p>

      <SectionHeader accent={accent} label="A field, not an arrangement" title="Why there is no “composition” to find" />
      <p style={proseStyle}>
        That word, <strong>field</strong>, is the one to hold onto, because it marks how different this is from almost everything that came before it. For centuries a picture was an <em>arrangement</em>: things placed within the frame, balanced against one another, a subject set off against a background, the whole worked into a resolved design. Even the abstraction around Still kept some of that logic, Rothko&rsquo;s rectangles hovering in their soft order, Newman&rsquo;s single zip dividing a calm plane. Still threw the arrangement out. He built instead an all-over field, color spread edge to edge with no center to settle on, no figure standing in front of a ground, no balanced design to admire. The eye finds no comfortable place to rest, because there is no arrangement to read, only a surface and its rifts.
      </p>
      <p style={proseStyle}>
        So the making and the meaning are the same fact. The troweled crust, the torn edges, the refusal of a composition: each is a way of insisting that the painting is not a designed picture of anything but a raw, continuous thing in its own right.
      </p>
    </article>
  )
}

function StlLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A wall of black, torn open to yellow" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it, and the first fact is the size. The canvas is roughly <strong>nine and a half feet tall by thirteen and a quarter feet wide</strong>, a wall of a painting that exceeds your own body and fills your field of vision. You cannot take it in with a glance, and you are not meant to. It is built to be stood <em>before</em>, the way you stand before a cliff face, rather than looked <em>at</em> from across the room. The scale is part of the content: the field is large enough to surround you.
      </p>
      <p style={proseStyle}>
        Then the color. The picture is dominated by <strong>black</strong>, a deep, encompassing, matte black that takes up most of the canvas. Torn up through it, mostly vertical, are jagged shards of <strong>yellow and beige</strong>, the largest of them breaking upward like sheets of light pulled apart in the dark. Across the yellow, here and there, are small <strong>flecks of white</strong>, stranded bright against the surrounding color. And in a few places, low down, the raw <strong>unpainted canvas</strong> is simply left showing, pale fabric breathing through the black. That is the whole inventory: black, yellow, beige, a few white flecks, some bare cloth. There is nothing to recognize and nothing to name.
      </p>

      <SectionHeader accent={accent} label="The edges" title="Every boundary is a tear" />
      <p style={proseStyle}>
        Nowhere does the yellow meet the black in a clean line. The boundary is ragged and irregular, like torn paper or the licking edge of a flame, never ruled, never drawn. This is the thing that defines a Still: the field looks <em>ripped</em>, not designed. The yellow does not sit on top of the black like a shape on a background; the two interlock along a torn seam, as if the surface were a single skin that had been pulled apart. People reach for images to describe it, cliffs, peeling bark, a wound, jagged lightning, and any of those can help you feel it, but the plain fact on the canvas is simply the torn edge, repeated all across the picture.
      </p>

      <SectionHeader accent={accent} label="The surface" title="A black that swallows the light" />
      <p style={proseStyle}>
        The surface does something deliberate with light. The black is not glossy. It is <strong>matte</strong>, dry, absorbent, so it takes the light in rather than bouncing it back at you. The picture does not gleam; it sits there and swallows the room&rsquo;s light like a hole. That dullness is deliberate and it is doing work: it gives the black its somber, heavy, anti-decorative weight, more like a flat absorbing wall than a polished object made to be admired. And up close that same surface is thick and crusted, the troweled ridges of the palette knife standing off the canvas, so the painting is felt as a built-up mass of paint as much as it is seen as an image.
      </p>
      <p style={proseStyle}>
        The sum of it: a field of black the size of a wall, torn open by verticals of yellow, matte and light-swallowing, with no figure, no horizon, no object, no symbol, and a title that is only a date. You are left with color, torn edge, scale, and weight, and nothing else to hold. What that refusal of everything else means is the work the next section takes up.
      </p>
    </article>
  )
}

function StlBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A picture had always been an arrangement" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why this counts as a break, set it against what painting had been. For centuries, and right up to the abstraction of Still&rsquo;s own moment, a picture was understood as an <strong>arrangement</strong>: parts placed within a frame and balanced against each other, a subject set off against its background, the whole resolved into a design. That inheritance came down from the European tradition, where the job of a painter was to compose, to arrange a scene so the eye could read it as a balanced, resolved order. Even the new abstraction around him kept that logic in part: Rothko&rsquo;s rectangles hover in their soft hierarchy, Newman divides a single field with his vertical zip. There is still, in each, a sense of parts in relation, of a design you can read.
      </p>

      <SectionHeader accent={accent} label="The break" title="One torn field, running to the edge" />
      <p style={proseStyle}>
        Still threw the arrangement out. He built an <strong>all-over field made of torn, vertical color-shards</strong>, troweled and ripped rather than drawn and composed, so the picture reads as a single continuous skin punctured by rifts rather than as a set of related shapes. And with that, several things that had defined a painting are simply gone. There is <strong>no central motif</strong>, nothing the picture is &ldquo;of.&rdquo; There is <strong>no figure against a ground</strong>, no hierarchy of important shape over backdrop. There is <strong>no balanced design</strong>: the field just runs to the frame, and seems to strain against its edges, as though it would keep going past them if the canvas let it. He refused the European idea of the picture as a composed arrangement, and he refused it completely.
      </p>
      <p style={proseStyle}>
        But the deeper break is in what Still asked abstraction to <em>be</em>. He did not treat it as a new style, one more way of arranging paint. He pushed it past style into an uncompromising existential claim, the painting as a raw, sublime, almost moral force rather than a designed and decorative object. And he matched that claim with his life: walking out of the galleries, refusing the titles, sealing his estate. The painting and the stance are one gesture. Where the European tradition had composed and balanced and resolved, Still rejected both the inherited <strong>composition</strong> and the <strong>art market</strong> at once, and put a wall of torn black in their place.
      </p>
      <p style={proseStyle}>
        Still also believed he had gotten there first. He held that he, not Rothko or Newman, had broken through to the torn, edge-to-edge color field, and that the others were latecomers to ground he had already opened; he even thought Newman&rsquo;s vertical line was lifted from him. Art history half agrees: a real strand of it credits Still as the earliest of the field-painters to arrive at this kind of abstraction, working at a deliberate distance from New York. But it is contested, and it was his grievance as much as a settled fact, so it stands as his claim and the field&rsquo;s partial nod to it, not a scoreboard.
      </p>

      <SectionHeader accent={accent} label="In his own words" title="“Fuse into a living spirit”" />
      <p style={proseStyle}>
        Still rarely explained himself, which makes the one statement he kept returning to worth quoting exactly. He wanted the paint to stop being merely paint and become something more:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        &ldquo;I never wanted color to be color. I never wanted texture to be texture, or images to become shapes. I wanted them all to fuse into a living spirit.&rdquo;
        <span style={{ display: 'block', marginTop: 8, fontStyle: 'normal', fontSize: 14, color: MUTED }}>&mdash; Clyfford Still (Clyfford Still Museum Archives)</span>
      </blockquote>
      <p style={proseStyle}>
        Against the canvas it lines up exactly. Not color as decoration, not texture as effect, not shapes to be arranged, but black and yellow and crusted paint fused into one charged, continuous thing. (His other famous line, that his pictures were &ldquo;life and death merging in fearful union,&rdquo; is a separate statement, made about other work, not this same sentence.) What follows from the break is the movement it helped open: the torn, full-bleed color field, alongside Rothko and Newman, pointed the way to <strong>Color Field painting</strong> and to abstraction as a total environment you stand inside, a moral and existential claim rather than a designed picture.
      </p>
    </article>
  )
}

function StlAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1959" title="The city he decided to trust" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or a man who refused the art world, Still made one large exception, and it explains where this painting hangs. The <strong>provenance</strong>, the documented chain of who has owned a work from the artist&rsquo;s hand to now, is short here. Still painted <em>1957-D No. 1</em> in 1957. Two years later, in <strong>1959</strong>, it was acquired and given to the <strong>Albright-Knox Art Gallery</strong> in Buffalo, New York, by <strong>Seymour H. Knox, Jr.</strong>, the museum&rsquo;s board president, whose name is on the credit line to this day: <em>Gift of Seymour H. Knox, Jr., 1959.</em>
      </p>
      <p style={proseStyle}>
        That gift was the start of a bond between the wary painter and one museum. The Albright-Knox&rsquo;s director, <strong>Gordon M. Smith</strong>, and Knox courted Still&rsquo;s trust over years, and in 1959 Smith handed Still complete control to stage his first large-scale museum survey, the show that broke his seven-year public silence. Satisfied with how Buffalo handled his work, Still later gave the museum <strong>31 of his own paintings in 1964</strong> (a separate event from Knox&rsquo;s 1959 gift, and easy to confuse with it). Between the two, Buffalo became the great public holder of his art for decades. The institution is the same one, expanded and renamed the <strong>Buffalo AKG Art Museum</strong> in 2023, where <em>1957-D No. 1</em> hangs now.
      </p>

      <SectionHeader accent={accent} label="The sealed estate" title="The work he kept from the world" />
      <p style={proseStyle}>
        Buffalo got what it got because Still trusted it. Almost everything else, he sealed away. He kept the bulk of his output out of galleries and out of sale during his lifetime, and willed it intact to a single American city, on the condition it be kept together. So when he died in 1980, the vast majority of what he had made, <strong>roughly 95% of his lifetime output</strong> (something on the order of 825 paintings, plus well over a thousand works on paper), was simply unseen. It stayed that way for three decades, until the <strong>Clyfford Still Museum</strong> opened in <strong>Denver in 2011</strong>, built to house that sealed estate and finally show it.
      </p>
      <p style={proseStyle}>
        It is a fitting end for the painting and the man. The picture refuses to be a designed image, refuses a title, refuses to explain; the painter refused the galleries, refused the critics, and refused to let most of his work be seen at all on anyone&rsquo;s terms but his own. <em>1957-D No. 1</em> is one of the few he let out into the world, and it carries the whole stance in it: a wall of torn black, nine by thirteen feet, that asks nothing of you and hands you nothing, and waits to be stood in front of.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'still-cliff': { independent: StlIndependent, making: StlMaking, looking: StlLooking, break: StlBreak, afterlife: StlAfterlife },
```
