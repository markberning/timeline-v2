# FINAL — Mark Rothko, *No. 61 (Rust and Blue)* (1953) · slug `orange-yellow`

Reconciled work-read. Every [BLOCKER]/[FIX] from the fact, read, and frame gates folded; all PASS items preserved (emotion-not-color in Rothko's sourced voice; "colorist/abstractionist/color-field" refused as self-description, Color Field kept as a museum category only). Name stays **No. 61 (Rust and Blue)**. `rights: 'in-copyright'`. Dimensions ft/in. heroAspect 0.80, heroFit `contain`.

**Folded fixes:**
- FACT FIX 1 — Rodman figure-card year reconciled to `(conversation 1956, pub. 1957)`.
- FACT FIX 2 — Rodman quote kept singular "relationship" throughout (blockquote + note agree); not regressed to plural.
- READ FIX 1 — §looking "glow" re-points to §making instead of re-teaching the wash mechanism.
- READ FIX 2 — §looking close varied (lands on the optical fact, not the thesis closer); "felt before understood / stand inside" no longer 4×.
- READ FIX 3 — author-facing "Anchor to the Rodman text above" removed from shipped break prose.
- READ FIX 4 — §looking imperative openers varied (2 converted to declarative).
- FRAME FIX C-1 — Seagram murals 1958 commission-and-refusal added to §afterlife.
- FRAME FIX C-2 — Rothko Chapel fixed to 1964-commissioned, died 1970 before 1971 opening (both §break and §afterlife).
- FRAME FIX F-3 — NY School quiet-wing / opposite-Pollock sentence added to §idiom.

---

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, No. 61 (Rust and Blue) (Rothko, 1953), ArtWorkContent. The MOCA / Panza
// Collection canvas — rust/brown rectangles on a blue field, NOT the 1956
// "Orange and Yellow" at Buffalo AKG (the slug `orange-yellow` is misleading;
// see audits/art-pipeline/work-orange-yellow-factpack.md §8). Dimensions FT/IN
// only. rights: in-copyright (Rothko d.1970) — figures render as degraded
// reference cards, hero shown small under fair use. Chapter prose in
// art-section-reader.tsx NARRATIVES['orange-yellow'] (Rth… prefix).
// FRAMING handled: Rothko HATED "colorist"/"abstractionist"/"color-field" — the
// work is about emotion, color is the vehicle; the titles are descriptive tags,
// not names Rothko gave; the means are physical (thinned washes), not mystical.
// ─────────────────────────────────────────────────────────────
export const ORANGE_YELLOW: ArtWorkContent = {
  id: 'orange-yellow',
  name: 'No. 61 (Rust and Blue)',
  shortName: 'No. 61 (Rust and Blue)',
  year: 1953,
  artist: 'Mark Rothko',
  artistId: 'rothko',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '9 ft 7 in × 7 ft 8 in',
  location: 'The Museum of Contemporary Art, Los Angeles (MOCA)',
  acquired: 'The Panza Collection (acc. 84.9), entered MOCA in 1984',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 4, total: 9 },
  hook: 'Three soft slabs of rust and blue, floating on a blue field at nine feet tall, built to make you feel something before you can name it (by the painter who hated being called a colorist).',
  heroImage: ART_IMG.rothkoNo61,
  heroCredit: 'Rothko, No. 61 (Rust and Blue), 1953 · MOCA, Los Angeles · in copyright, shown small under fair use',
  heroAspect: 0.8, // 233.7 × 292.7 cm → W/H ≈ 0.80 (tall / portrait)
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '9 ft 7 in', k: 'Tall' },
    { v: '~18 in', k: 'Meant to stand from' },
    { v: 'MOCA', k: 'Now at' },
  ],
  sections: [
    { id: 'idiom', eyebrow: 'New York · 1953', dateLabel: '1953', title: 'The format he would paint for the rest of his life', blurb: 'By 1953 Rothko had spent four or five years on one idea: two or three soft-edged rectangles of color, stacked and hovering in a colored field. No. 61 is a classic instance, and the point was never the color.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'How it was built', title: 'Thin washes, and a glow from underneath', blurb: 'Layer over layer of heavily thinned oil, scrubbed on so the under-colors shine up through the top ones and no edge is ever hard. The plain physical recipe behind what he called inner light.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '9 ft 7 in × 7 ft 8 in', title: 'A rust block, a blue block, and the room they make', blurb: 'The stack top to bottom, the feathered edges, the planes that advance and recede, the ground seeping through, and a scale built for the body, not the wall. There are no objects in it at all.', progress: 0.56 },
    { id: 'break', eyebrow: 'Why this is a break', dateLabel: 'What changed', title: 'Handing the whole emotional job to color', blurb: 'Before, color described an object or set a mood for a scene. Rothko removes the object, the line, the horizon, and asks pure color at enveloping scale to carry the feeling by itself: felt close, felt bodily, felt before it is understood. His own words on what the pictures are for.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1953 to today', title: 'From the Panza Collection to a wall in Los Angeles', blurb: 'No early sale story to tell; the canvas passed to the great Milanese collector Giuseppe Panza and, in 1984, into MOCA with the rest of his holdings. The idea behind it (a field of color that does what a figure used to do) outran the man.', progress: 0.96 },
  ],
  provenance: [
    { year: '1953', who: 'Mark Rothko (the artist)', place: 'New York', note: 'Painted in 1953, four or five years into the mature, "classic" idiom of stacked soft rectangles. Carried, descriptively, as No. 61 (Rust and Blue), and also as Brown, Blue, Brown on Blue; Rothko favored numbers, not titles.', price: null },
    { year: 'by the 1970s to 80s', who: 'Count Giuseppe Panza di Biumo', place: 'Varese / Milan', note: 'Acquired by the Milanese collector whose Abstract Expressionist and Minimalist holdings became "The Panza Collection," one of the most important private collections of postwar American art in Europe.', price: null },
    { year: '1984 to today', who: 'The Museum of Contemporary Art, Los Angeles', place: 'Los Angeles', note: 'Entered MOCA in 1984 as part of the museum’s acquisition of the Panza Collection. Credit line: "The Museum of Contemporary Art, Los Angeles, The Panza Collection." Accession 84.9. Copyright is held by the artist’s heirs (© Kate Rothko Prizel & Christopher Rothko / Artists Rights Society, New York).', price: null, museum: true },
  ],
  figures: [
    { name: 'Mark Rothko', role: 'The painter', palette: ['#7a2a1c', '#2a3a72', '#140c14'] },
    { name: 'Selden Rodman', role: 'Recorded the key statement (conversation 1956, pub. 1957)', palette: ['#5a4a3a', '#2e261c', '#0e0a06'] },
    { name: 'Giuseppe Panza di Biumo', role: 'Collector · first known owner', palette: ['#4a5a4a', '#28301c', '#0e120a'] },
    { name: 'Jackson Pollock', role: 'The other pole of the movement', palette: ['#1c1c1c', '#c8a72a', '#0e0e0a'] },
    { name: 'Helen Frankenthaler', role: 'Carried the stained field forward', palette: ['#3a6a7a', '#c87a52', '#142028'] },
  ],
  annotations: [
    { label: 'The stack', where: 'Top to bottom, the major blocks: a warm rust-maroon rectangle up high, a paler bridging band, and a deep blue-violet block below, all set on a blue ground', detail: 'The whole "subject" of the painting is these few soft slabs of color and the room they make between them. There is no figure, no horizon, no object anywhere in it. Read the blocks in order, top to bottom, and you have seen essentially everything that is depicted: the picture is the stack and the field, and nothing else.' },
    { label: 'The feathered edges', where: 'Anywhere two areas meet (none of the rectangles has a ruled border)', detail: 'No block has a hard, drawn edge. Each one frays and breathes into the color around it, as if it had been exhaled onto the canvas rather than outlined. That softness is doing real work: it is what keeps the rectangles from reading as flat panels stuck on a wall and makes them seem to float instead.' },
    { label: 'Color that advances and recedes', where: 'Hold your eye on the warm block, then the blue, for a few seconds each', detail: 'Look steadily and the warm rust block seems to float forward while the blue drops back, then the two trade places. Nothing on the canvas actually moves, but the planes will not hold still; they pulse and breathe. That instability is built into the picture, not imagined into it.' },
    { label: 'The glow from underneath', where: 'Inside the blocks, where one hue seems lit from within rather than painted on', detail: 'The surface is built from many thin, scrubbed-on washes of thinned paint, so the lower layers shine up through the top ones. The color looks lit from behind, an effect Rothko called inner light. Hunt for the places where one color bleeds up through another; that is the physical recipe, not a trick of the eye.' },
    { label: 'The ground showing through', where: 'In the gaps where the blue field seeps around and between the rectangles', detail: 'The blocks do not sit on top of a background. The blue ground pushes up around and between them, so the rectangles dissolve into the field rather than resting on it. That is why the whole picture reads as one continuous breathing surface instead of shapes-on-a-backdrop.' },
    { label: 'The scale, and where you stand', where: 'The sheer height: the canvas is over nine feet tall, taller than a person', detail: 'At more than nine feet, the painting is built for the body, not the wall. Rothko wanted it seen close, roughly eighteen inches away, so the color fills your whole field of vision and you stand inside it. The absence of any object is the point: with nothing to look at, there is only the field to be in.' },
  ],
  lineage: {
    parents: [ { label: 'The "multiforms"', mode: 'art' }, { label: 'Abstraction (Kandinsky)', mode: 'art' }, { label: 'Postwar New York', mode: 'civ' } ],
    children: [ { label: 'Color Field painting', mode: 'art' }, { label: 'Helen Frankenthaler', mode: 'art' }, { label: 'The Rothko Chapel', mode: 'art' } ],
  },
}
// REGISTRY (coordinator splices into ART_WORK_CONTENT):
//  'orange-yellow': ORANGE_YELLOW,
```

---

## PART B — the five narrative chapters

```tsx
// ─────────────────────────────────────────────────────────────
// No. 61 (Rust and Blue) (Rothko, 1953) — the five chapters
// ─────────────────────────────────────────────────────────────
function RthIdiom({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1953" title="The format he would paint for the rest of his life" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y <strong>1953</strong>, <strong>Mark Rothko</strong> (1903&ndash;1970) had been painting the same kind of picture, with endless small variations, for four or five years, and he would go on painting it until his death. It is one of the most recognizable formats in twentieth-century art, and it is very simple to describe: <strong>two or three soft-edged rectangles of glowing color, stacked one above another, hovering against a colored ground</strong> that shows through and around them. <em>No. 61 (Rust and Blue)</em> is a textbook instance of it &mdash; a rust-maroon block up high, a paler band, and a deep blue-violet block below, all breathing against and within a blue field.
      </p>
      <p style={proseStyle}>
        He did not arrive there in one step. Rothko was born <strong>Marcus Rothkowitz</strong> in the city of Dvinsk in the Russian Empire (now Daugavpils, in Latvia), came to the United States as a child, and spent the 1930s and early 1940s painting recognizable things &mdash; city scenes, figures in subway stations, then, under the influence of the Surrealists who fled to New York during the war, strange mythic and biomorphic shapes. After the war he passed through a phase the literature calls the <strong>&ldquo;multiforms&rdquo;</strong>: clusters of soft, fuzzy, blotted patches of color floating against a single-hued background, with the drawn line already gone. Then he pared even those down. By <strong>1949&ndash;50</strong> the blots had resolved into the stacked rectangles, and the format was set.
      </p>
      <p style={proseStyle}>
        He was one figure in a crowded postwar scene in New York &mdash; the loose group later called <strong>Abstract Expressionism</strong>, or the <strong>New York School</strong> &mdash; and he sat on its quiet, contemplative wing, about as far as you could get from the flung-paint &ldquo;action painting&rdquo; of <strong>Jackson Pollock</strong> at the opposite pole. What follows is his move, not the whole movement&rsquo;s.
      </p>
      <p style={proseStyle}>
        A word on the name, because three different things tangle here. Rothko mostly <strong>numbered</strong> his canvases rather than naming them; he distrusted titles as labels that told a viewer what to think. The parenthetical color tags &mdash; <em>Rust and Blue</em>, and the alternate <em>Brown, Blue, Brown on Blue</em> the museum also carries &mdash; are <strong>descriptive, after-the-fact</strong> ways of telling his many numbered, near-identical pictures apart. They are not titles he handed the work. (And because he numbered year by year, there is more than one Rothko &ldquo;No. 61&rdquo; floating around; this is specifically the 1953 rust-on-blue canvas now at MOCA.) The route slug for this read happens to read <em>orange-yellow</em>, which points at a different, brighter Rothko entirely &mdash; a 1956 picture in Buffalo. This is not that one. This is the rust and blue.
      </p>

      <SectionHeader accent={accent} label="Not a picture of anything" title="Why there is nothing in it to look at" />
      <p style={proseStyle}>
        The thing that throws people first is that there is <strong>no subject</strong>. No figure, no landscape, no horizon, no object, not even a recognizable shape with a name. The whole of what is depicted is a handful of soft color slabs and the field they sit in. To a viewer trained on five centuries of painting-as-a-window &mdash; onto saints, battles, fruit, a face &mdash; this can look like a picture with the picture removed, or like decoration: a nicely colored panel for a nicely colored wall.
      </p>
      <p style={proseStyle}>
        Rothko spent a good deal of his life insisting it was the opposite of that, and getting irritated when people missed it. He was, by every account, allergic to the idea that these were exercises in pretty color. He rejected the label <strong>&ldquo;colorist.&rdquo;</strong> He rejected <strong>&ldquo;abstractionist.&rdquo;</strong> He was no fonder of the art-historical tag that later got pinned to him, <strong>&ldquo;color-field painter&rdquo;</strong>; what the museums file his movement under is not how he thought of the work at all. As far as he was concerned the rectangles were not the point and the color relationships were not the point. They were a <strong>vehicle</strong>, and what they carried was raw human feeling. We will come to his own blunt words for it later. For now, the thing to carry into the next chapter is that the format is simple, the intent is not, and the two should not be confused.
      </p>
    </article>
  )
}

function RthMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The recipe" title="Thin paint, laid on in layers" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he look of a Rothko is the result of a plain, physical method, and it is worth getting the method straight before reaching for any words about transcendence. He did not lay down flat, opaque slabs of color. He built each area from <strong>many thin, scrubbed-on washes of heavily thinned oil paint</strong> &mdash; pigment let down with a lot of solvent and binder until it was closer to a stain than a coat &mdash; brushed on layer over layer, sometimes a great many layers, each one fairly transparent.
      </p>
      <p style={proseStyle}>
        Because every layer is thin enough to see through, the <strong>colors underneath shine up through the ones on top</strong>. A red is not just red; it is a red sitting over an orange sitting over a darker ground, all of them faintly visible at once, the way you can see a few inches down into water. That is what produces the quality people describe as a glow, a sense that the color is <strong>lit from within</strong> rather than painted on the surface. Rothko himself reached for the phrase <strong>&ldquo;inner light.&rdquo;</strong> There is nothing supernatural in the mechanism, though: it is layered, semi-transparent paint, and you can name exactly why it does what it does.
      </p>

      <SectionHeader accent={accent} label="The edges" title="Why nothing is ever drawn" />
      <p style={proseStyle}>
        The second decision is what happens at the borders. Rothko never <strong>drew</strong> the rectangles &mdash; there is no ruled line, no taped edge, no hard boundary anywhere. He let each block <strong>bleed into the ground</strong> instead of sitting on top of it, feathering the wash out at the margins until the rectangle dissolves into the field around it. This is why the forms seem to <strong>advance, recede, and pulse</strong> rather than stay put: a hard-edged shape reads as a flat object pinned to a backdrop, but a soft-edged one, sharing its color with the field, refuses to settle at any one distance from your eye. Stare and the warm block floats forward; look again and it drops back. The instability is engineered, brushstroke by feathered brushstroke.
      </p>

      <SectionHeader accent={accent} label="The size" title="Big on purpose, and meant to be seen close" />
      <p style={proseStyle}>
        And then there is the scale, which was deliberate and which Rothko stated plainly. This canvas stands over <strong>nine feet tall</strong> &mdash; taller than the person standing in front of it. That is not grandeur for its own sake. In a statement he wrote in 1951 he put it directly: <em>&ldquo;I paint very large pictures&hellip; precisely because I want to be very intimate and human. To paint a small picture is to place yourself outside your experience&hellip; However if you paint the larger picture, you are in it.&rdquo;</em> A small picture is a thing across the room you look <em>at</em>; a picture this size, seen close, is a field you stand <em>inside</em>. He reportedly wanted these works hung low and viewed from about <strong>eighteen inches away</strong>, so the color fills your whole field of vision and there is no &ldquo;outside&rdquo; the painting left to stand in. The absence of any object is what makes that possible: with nothing in the field to point at, there is only the field to be in.
      </p>
    </article>
  )
}

function RthLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A tall field, and three soft slabs" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is large and <strong>tall</strong> &mdash; about <strong>nine feet seven inches high by seven feet eight inches wide</strong>, portrait orientation, a standing rectangle taller than you are. Before any color registers, the format alone tells you something: this is built to be a presence in a room, not a panel you glance at in passing. Stand close, the way it wants you to, and the edges of the canvas drop out of your vision and there is only the field.
      </p>
      <p style={proseStyle}>
        Now read the <strong>stack</strong>, top to bottom. High up sits a warm <strong>rust-maroon rectangle</strong>. Below it runs a <strong>paler bridging band</strong>. Below that sits a deep <strong>blue-violet block</strong>. All three float against a <strong>blue ground</strong> that surrounds them and shows between them. That is the entire cast of the picture: a few soft slabs of color and the field they hang in. There is nothing else &mdash; no object, no figure, no line, no horizon to anchor it. The &ldquo;subject&rdquo; is the stack and the room it makes.
      </p>

      <SectionHeader accent={accent} label="The edges" title="Exhaled, not drawn" />
      <p style={proseStyle}>
        Where two areas meet, there is no <strong>line</strong>. Every block frays softly into the color around it, the edges feathered and breathing, as if the rectangle had been <strong>exhaled onto the canvas</strong> rather than outlined on it. That softness is the difference between a Rothko and a flag. A hard edge would make these read as flat colored panels stuck to a wall; the feathered edge lets them hover.
      </p>

      <SectionHeader accent={accent} label="The motion that isn’t there" title="Color that advances and recedes" />
      <p style={proseStyle}>
        Hold your eye on the warm rust block for a few seconds, then on the blue. The warm color seems to <strong>float forward</strong> while the blue <strong>drops back</strong> &mdash; and then, if you keep looking, the two quietly trade places. Nothing on the canvas is moving. But the planes will not stay at a fixed distance from your eye; they advance and recede and pulse against one another. Warm colors tend to come forward and cool ones to fall back, and Rothko sets a warm block and a cool one in the same field precisely so they cannot agree on which is nearer. The picture breathes.
      </p>

      <SectionHeader accent={accent} label="The glow" title="Lit from underneath" />
      <p style={proseStyle}>
        Inside the blocks, the color does not sit flat; it seems <strong>lit from behind</strong>, as if a light were burning a few layers down. That is the <strong>inner light</strong> from the last chapter, the visible result of those thin scrubbed washes. The looking work here is just to find it: hunt for the spots where one hue clearly bleeds up through another. That is the physical fact of the surface, and it is why the color reads as luminous rather than painted.
      </p>

      <SectionHeader accent={accent} label="The field" title="Where the blocks dissolve into the blue" />
      <p style={proseStyle}>
        Finally, the <strong>ground</strong> &mdash; the blue that seeps around and between the rectangles. The blocks are not floating on top of a backdrop; the blue pushes up around their feathered edges so that they <strong>dissolve into it</strong>. That is why the whole picture reads as one continuous, breathing surface rather than shapes arranged on a background. Pull back the eighteen inches Rothko wanted, and the rust, the band, the blue-violet, and the blue field stop being four colored areas and become a single luminous wall.
      </p>
    </article>
  )
}

function RthBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Color was the servant of something else" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or most of the history of Western painting, <strong>color did a job for something else</strong>. It described an object, modeled the roundness of a body, filled in a drawn composition, set the mood for a scene. Whatever a picture made you feel was carried by what it <strong>depicted</strong>: a grieving face, a storm over a valley, a crucifixion. Even the first wave of abstraction kept this priority quietly in place. <strong>Kandinsky</strong> and <strong>Mondrian</strong> took recognizable things out of the picture, but they kept <strong>structure</strong> &mdash; line, geometry, balanced composition &mdash; as the load-bearing element, with color still functioning as an attribute of the shapes. The shape held the picture up; the color colored it in.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The whole emotional job, handed to color" />
      <p style={proseStyle}>
        Rothko takes out the object, the line, the drawn composition, and the horizon, and asks <strong>pure color, at enveloping scale, to carry the emotional content by itself</strong>. Three soft rectangles dissolving into a field are not a &ldquo;picture of&rdquo; anything. The composition isn&rsquo;t so much <em>balanced</em> as <em>dissolved</em> &mdash; edges feather, planes float, the ground pushes through. What is left is not an image to read but an <strong>encounter</strong>: you stand close, the color surrounds you, and the work is built to produce a felt state &mdash; awe, grief, elevation &mdash; rather than to be admired for its arrangement. The decisive claim is that a field of color, with nothing in it, can do the emotional work that a depicted figure used to do, and can be <strong>felt before it is understood</strong>.
      </p>
      <p style={proseStyle}>
        That reframes abstraction itself. It stops being a <strong>formal exercise</strong> &mdash; an interesting problem in shape and balance &mdash; and becomes something closer to a <strong>spiritual or emotional event</strong>. This is the high statement of what the museums call Color Field painting, and it feeds straight into the next generation: the stained, soaked canvases of <strong>Helen Frankenthaler</strong> and <strong>Morris Louis</strong>, and the immersive rooms of color that reach their endpoint in the <strong>Rothko Chapel</strong> in Houston, a single dark space he was commissioned to design in 1964 and did not live to see open.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“Tragedy, ecstasy, doom”" />
      <p style={proseStyle}>
        The clearest account of what the pictures are <em>for</em> came from Rothko himself, in a conversation the critic <strong>Selden Rodman</strong> recorded in 1956 and published in his 1957 book <em>Conversations with Artists</em>. It is the canonical statement, and it is worth having in full, because it refuses the very reading most people reach for first:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>I am not an abstractionist&hellip; I am not interested in the relationship of color or form or anything else. I&rsquo;m interested only in expressing basic human emotions &mdash; tragedy, ecstasy, doom and so on &mdash; and the fact that a lot of people break down and cry when confronted with my pictures shows that I communicate those basic human emotions&hellip; The people who weep before my pictures are having the same religious experience I had when I painted them. And if you, as you say, are moved only by their color relationships, then you miss the point.</p>
      </blockquote>
      <p style={proseStyle}>
        That last line is the whole argument with the art history wrapped around him. <em>If you are moved only by their color relationships, then you miss the point.</em> The viewer he wanted was the one who broke down weeping in front of the canvas; the connoisseur admiring the lovely rust-against-blue was, in his view, looking straight past the thing the painting was made to do. It is also why the labels grate so badly: to call him a <strong>colorist</strong> is to praise him for exactly the surface he said was beside the point. The color is the means. The feeling is the end.
      </p>
      <p style={proseStyle}>
        The line is misquoted constantly. Versions drop the &ldquo;and so on,&rdquo; or swap em-dashes for commas, or render the opening as &ldquo;the relationship of color <em>to</em> form&rdquo; &mdash; the reprinted Rodman wording is &ldquo;the relationship of color <strong>or</strong> form or anything else.&rdquo; And it comes from the 1956 Rodman conversation, not, as is sometimes claimed, from a 1947 essay or a wall text at the Museum of Modern Art.
      </p>
    </article>
  )
}

function RthAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="No sale story, and one great collector" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>U</DropCap>
        nlike a nineteenth-century picture with a long, gossipy chain of dealers and scandals, <em>No. 61</em> has a short and quiet life as an object: no famous first buyer, no auction-room drama, no renaming fight. It was painted in <strong>1953</strong>, in New York, in the middle of Rothko&rsquo;s most productive run of the stacked-rectangle pictures, and its history is mostly the history of one collection.
      </p>
      <p style={proseStyle}>
        That collection belonged to <strong>Count Giuseppe Panza di Biumo</strong> (1923&ndash;2010), a Milanese collector who, from the late 1950s onward, assembled one of the most important private holdings of postwar American art anywhere in Europe &mdash; Abstract Expressionism first, then Pop and Minimalism. &ldquo;The Panza Collection&rdquo; became a name in its own right. Panza bought across the New York School with real conviction at a time when much of Europe still wasn&rsquo;t sure this work mattered, and the rust-and-blue Rothko was one of the pictures he held.
      </p>

      <SectionHeader accent={accent} label="MOCA · 1984" title="Into a museum that barely existed yet" />
      <p style={proseStyle}>
        In <strong>1984</strong>, the painting entered <strong>The Museum of Contemporary Art, Los Angeles</strong> &mdash; MOCA &mdash; as part of the museum&rsquo;s acquisition of a large block of the Panza Collection. MOCA was then a brand-new institution (founded in 1979, its permanent Grand Avenue building not yet open), and the Panza purchase was the foundational coup that gave the young museum a serious permanent collection overnight. The canvas carries the credit line &ldquo;The Museum of Contemporary Art, Los Angeles, The Panza Collection,&rdquo; accession number <strong>84.9</strong>, and it has been a MOCA picture ever since.
      </p>
      <p style={proseStyle}>
        Because Rothko died in <strong>1970</strong>, the painting is still under copyright; it is administered by the artist&rsquo;s heirs, Kate Rothko Prizel and Christopher Rothko, through the Artists Rights Society in New York. (That is why you will see it reproduced small and credited, here and elsewhere, rather than splashed full-bleed: it is a living copyright, not a public-domain image.)
      </p>

      <SectionHeader accent={accent} label="What he refused" title="The murals he gave back" />
      <p style={proseStyle}>
        Two things from his last decade say more about what he thought these pictures were than any statement does. In <strong>1958</strong> he took a commission to paint a cycle of murals for the <strong>Four Seasons</strong> restaurant in the new Seagram Building in Manhattan &mdash; and then, after roughly two years of work and a dinner in the room, he handed the money back and withdrew the paintings, unable to stomach the idea of his work hanging as expensive decoration over the meals of the rich. (Nine of those murals became a quiet room of their own at the Tate in London.) The refusal is the clearest thing he ever did: if the paintings were only handsome color, there would have been nothing to refuse.
      </p>

      <SectionHeader accent={accent} label="The afterlife" title="The idea that outran the man" />
      <p style={proseStyle}>
        Rothko&rsquo;s own end was bleak &mdash; he took his life in his New York studio in 1970, at the height of his fame &mdash; but the move he made in pictures like this one only grew. The claim that a field of color, with nothing in it, could carry the emotional weight that a depicted figure used to carry turned out to be one of the most consequential ideas in postwar painting. It runs straight through the stained fields of <strong>Frankenthaler</strong> and the soaked veils of <strong>Morris Louis</strong>, and it reaches its purest form in the <strong>Rothko Chapel</strong> in Houston &mdash; an octagonal, non-denominational room of fourteen of his darkest canvases that he was commissioned to design in <strong>1964</strong> and controlled down to the architecture, the scale, and the light, building not a wall of pictures but a single space to stand inside. He did not live to see it open: it was dedicated in <strong>1971</strong>, a year after his death. People still enter it, sit, and weep &mdash; which was, by his own account, always the point.
      </p>
      <p style={proseStyle}>
        And it is worth ending where the labels began, because the picture argues against them every time someone stands close to it. It is not, finally, a study in color relationships, however beautiful the rust against the blue happens to be. It is a tall, breathing field built to be felt before it is understood &mdash; one of the clearest cases anyone ever made that abstraction could be an emotional encounter and not just a formal one.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'orange-yellow': { idiom: RthIdiom, making: RthMaking, looking: RthLooking, break: RthBreak, afterlife: RthAfterlife },
```
