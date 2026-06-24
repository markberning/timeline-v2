# DRAFT — Franz Kline, *Chief* (1950)

Authored from `work-chief-factpack.md` (source of truth). Shape modeled on `STARRY_NIGHT`; component/registry pattern on `CITY_RISES` / `CtyManifestos`; abex sibling reference `AUTUMN_RHYTHM`; voice on `absinthe-narratives.tsx.txt`.

**Fact handling per pack (corrections baked in):**
- **The white is PAINTED, both black and white active.** *Chief* is not black signs on a blank ground; the white is worked as hard as the black, so figure and ground trade places. This is the single most-corrected misreading and it carries the KEY STATEMENT.
- **KEY STATEMENT** = the MoMA-anchored, verbatim Kline line: *"I paint the white as well as the black, and the white is just as important."* Sourced to MoMA's own *Chief* commentary, in its calligraphy-rejection context. No specific year/venue asserted (1958 is unconfirmed across sources).
- **NOT calligraphy / not Zen.** The black-on-white look invites the comparison; Kline rejected it (*"calligraphy is simply the art of writing"*). Presented as a reading he refused, never as fact.
- **The Bell-Opticon projector "discovery" (1948, de Kooning's studio, a small drawing blown up).** Told as the STANDARD ACCOUNT, hedged as likely tidied-up (de Kooning: it "took quite a while to work it out").
- **"Chief" = a LOCOMOTIVE** from Kline's Pennsylvania railroad-town childhood, not a person or a Native American chief. Title points at a feeling of power/speed, not a picture; don't over-specify the rail line.
- **rights: 'in-copyright'** (1950; Kline d. 1962; © Kline estate / ARS). Hero shown small + credited under fair use. Credit line is verbatim **"Gift of Mr. and Mrs. David M. Solinger"** (acc. 2.1952).
- Dimensions ft/in only (148.3 × 186.7 cm → 4 ft 10 3/8 in × 6 ft 1 1/2 in, landscape). No invented prices; Solinger gift → MoMA 1952.
- NEW prose uses no literal em-dash (parens/commas/colons); `&mdash;` reserved for verbatim-quote punctuation; `&ldquo;&rdquo;&rsquo;` in JSX.

---

## PART A — `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Chief (Franz Kline, 1950), Museum of Modern Art, New York
// (accession 2.1952; Gift of Mr. and Mrs. David M. Solinger). Flagship
// Abstract Expressionism work-read. Authored through the art content
// pipeline (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['chief'] (Chf… prefix).
// FACT HANDLING (per work-chief-factpack.md):
//  • The white is PAINTED, not blank ground — black AND white are both
//    active; figure and ground trade places. This is the load-bearing
//    correction and carries the KEY STATEMENT.
//  • KEY STATEMENT = the verbatim MoMA-anchored Kline line, "I paint the
//    white as well as the black, and the white is just as important."
//    No year/venue asserted (the floated "1958" is unconfirmed).
//  • NOT calligraphy / not Zen — a reading Kline REJECTED despite the
//    look ("calligraphy is simply the art of writing"); present as refused.
//  • Bell-Opticon projector "discovery" (1948, de Kooning's studio) =
//    the STANDARD ACCOUNT, hedged (de Kooning: it "took quite a while to
//    work it out"); not a documented single eureka instant.
//  • "Chief" = the name of a LOCOMOTIVE from Kline's Pennsylvania
//    railroad-town childhood; not a person, not a portrait. Don't
//    over-specify the rail line.
//  • Dimensions = 148.3 × 186.7 cm = 4 ft 10 3/8 in × 6 ft 1 1/2 in,
//    LANDSCAPE. Credit line verbatim: "Gift of Mr. and Mrs. David M.
//    Solinger" (acc. 2.1952, acquired 1952). No prices invented.
//  • rights: 'in-copyright' (1950, Kline d. 1962; © Kline estate / ARS) —
//    hero shown small + credited, fair use; NOT pd-us.
// ─────────────────────────────────────────────────────────────
export const CHIEF: ArtWorkContent = {
  id: 'chief',
  name: 'Chief',
  shortName: 'Chief',
  year: 1950,
  artist: 'Franz Kline',
  artistId: 'kline',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 10 3/8 in × 6 ft 1 1/2 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Gift of Mr. and Mrs. David M. Solinger, 1952 (acc. 2.1952)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 3, total: 9 },
  hook: 'A handful of huge black strokes laid across a white field, a tiny brush drawing blown up to the scale of a wall, named after a locomotive Kline knew as a boy. The white is painted as hard as the black, and that is the whole point.',
  heroImage: ART_IMG.klineChief,
  heroCredit: 'Kline, Chief, 1950 · Museum of Modern Art, New York · in copyright, shown small under fair use; rights with the Franz Kline estate / ARS.',
  heroAspect: 1.27, // 148.3 × 186.7 cm → W/H ≈ 1.26, landscape
  heroFit: 'contain', // the whole ~5 × 6 ft canvas, never cropped
  rights: 'in-copyright', // 1950, Kline d.1962; © Kline estate / ARS; NOT pd-us
  stats: [
    { v: '1950', k: 'Painted' },
    { v: '4′10⅜″ × 6′1½″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'railroad', eyebrow: 'New York · 1950', dateLabel: '1950', title: 'The painter who started over in black and white', blurb: 'Kline had spent twenty years as a representational painter, cityscapes, interiors, small ink drawings, and was getting nowhere. Then, around 1949–50, he threw out color and the depicted world and bet everything on a few huge black strokes against white. Chief is from that breakthrough.', progress: 0.08 },
    { id: 'projector', eyebrow: 'The making', dateLabel: '1948–1950', title: 'A small drawing, thrown huge on a wall', blurb: 'The standard story: in de Kooning’s studio Kline projects a tiny brush drawing with a borrowed projector, and the little marks, blown up, become enormous abstract strokes. It is the account MoMA repeats, and it is probably tidied up; de Kooning said it "took quite a while to work it out."', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '4 ft 10 3/8 in × 6 ft 1 1/2 in', title: 'A few black girders, and the white between them', blurb: 'The broad black bars that brace and lean like beams, the dragging, dripped edges that carry the speed of the stroke, the architecture without any building, and the white, which is painted, not blank, and is doing half the work.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Abstract Expressionism', title: 'When the stroke became the structure', blurb: 'Ambitious American abstraction around 1950 still carried color, atmosphere, all-over fields, signs. Kline throws all of it out and bets on a handful of black strokes at wall scale, where the mark is not a contour or a letter but the building itself, and the speed of the body is on the canvas. This is what Rosenberg would call "action painting."', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1950–today', title: 'The locomotive, the calligraphy, and the gift', blurb: 'The title is a train Kline remembered, not a chief and not a Zen character, and he spent years rejecting the calligraphy reading the look invited. The collector David M. Solinger and his wife gave the canvas to MoMA in 1952, where it became one of the defining American paintings of its decade.', progress: 0.96 },
  ],
  // Provenance is short and clean: painted 1950, gift of Mr. and Mrs.
  // David M. Solinger to MoMA, accession 2.1952 (the "1952" suffix = the
  // acquisition year). No auction/dealer chain or price surfaced; a missing
  // figure is left null, never invented. © Franz Kline estate / ARS.
  provenance: [
    { year: '1950–c.1951', who: 'Franz Kline (the artist)', place: 'New York', note: 'Painted in 1950, at the start of the black-and-white breakthrough that made him famous, and first shown in his early-1950s New York exhibitions. Acquired soon after by the collector David M. Solinger.', price: null },
    { year: 'c.1951–1952', who: 'David M. Solinger', place: 'New York', note: 'The New York lawyer and modern-art collector David M. Solinger (later a Whitney Museum figure) acquired the canvas early, while Kline was just becoming known. No purchase figure is documented in the sources.', price: null },
    { year: '1952–today', who: 'Museum of Modern Art', place: 'New York', note: 'Given to MoMA in 1952 by Mr. and Mrs. David M. Solinger. Accession 2.1952. © The Franz Kline estate / Artists Rights Society (ARS), New York. On view.', price: 'Gift of Mr. and Mrs. David M. Solinger', museum: true },
  ],
  figures: [
    { name: 'Franz Kline', role: 'The painter', palette: ['#1c1c1c', '#e8e4dc', '#3a3a3a'] },
    { name: 'Willem de Kooning', role: 'Friend; in whose studio the projector story is set', palette: ['#5a5a5a', '#2a2a2a', '#0e0e0e'] },
    { name: 'Elaine de Kooning', role: 'Painter and writer; told the rocking-chair version of the story', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'Harold Rosenberg', role: 'Critic; coined "action painting," 1952', palette: ['#8a4a2a', '#4a2c18', '#15100a'] },
    { name: 'David M. Solinger', role: 'Collector; gave Chief to MoMA in 1952', palette: ['#5a6354', '#39322a', '#120f0c'] },
  ],
  annotations: [
    { label: 'The broad black bars', where: 'Across the whole canvas, the few wide, loaded black strokes that dominate it', detail: 'A handful of broad black strokes carry the entire picture. They do not outline anything; they are the structure itself. Follow how they cross, brace, and lean on one another like beams or girders bearing weight against each other and spanning the canvas. The painting is almost one big gesture, enlarged, drawing made monumental.' },
    { label: 'The white is painted, not blank', where: 'In and around the black, the worked white field', detail: 'This is the thing most people get wrong about the picture. Look at the white closely: it is brushed, worked, and at the edges it pushes back into and overlaps the black. It is not bare canvas and not a neutral background. Kline painted the white as actively as the black, so figure and ground trade places and both are doing structural work. His own line, "I paint the white as well as the black, and the white is just as important," is a description of exactly this surface.' },
    { label: 'Speed at the stroke edges', where: 'Along the edges of the black bars, the ragged and dripped margins', detail: 'Watch the edges where the loaded brush moved fast: they drag, go dry and broken, and trail drips. Those edges record the velocity of the gesture. The strokes look thrown, and the picture carries the physical act of making them, the trace of a body moving at speed, not a slowly drawn shape.' },
    { label: 'Architecture without a building', where: 'The overall design, the bars framing and spanning like a structure', detail: 'The whole thing reads like framing, trusses, track, or rolling stock, a built, weight-bearing scaffold, even though nothing at all is depicted. The black behaves like architecture: it spans, braces, and holds. That structural feeling, and not any pictured object, is what the marks are about.' },
    { label: 'No depicted object', where: 'The whole canvas, searched for a figure, a thing, a locomotive', detail: 'Hunt for a train, a figure, a scene, and you will not find one. There is no picture of anything here. The forms run off the edges of the canvas, implying motion continuing past the frame, but the title points at a feeling of power and speed, not at an image of the locomotive it is named for. Resist the urge to find the train; the painting refuses to be a picture of it.' },
    { label: 'The scale, and your body', where: 'The full span of the work, about 4 ft 10 in tall and 6 ft 1 in wide', detail: 'At roughly five by six feet, a small drawing’s single gesture has been blown up to room and body scale. The strokes are wider than your arm, so your whole body, not just your eye, reads them. The bigness is the argument: the same mark that would be a flick on a sketchbook page becomes a girder you stand in front of.' },
  ],
  lineage: {
    parents: [
      { label: 'Kline’s small ink drawings', mode: 'art' },
      { label: 'de Kooning’s gestural line', mode: 'art' },
      { label: 'Pennsylvania railroad country', mode: 'civ' },
    ],
    children: [
      { label: 'Action painting', mode: 'art' },
      { label: 'Black-and-white gestural abstraction', mode: 'art' },
      { label: 'Minimalism’s scale and literal mark', mode: 'art' },
    ],
  },
}
```

---

## PART B — narrative components + registry (paste-ready)

```tsx
// ─────────────────────────────────────────────────────────────
// Chief (Franz Kline, 1950) — the five chapters
// ─────────────────────────────────────────────────────────────
function ChfRailroad({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1950" title="The painter who threw out everything but black and white" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or most of his working life, <strong>Franz Kline</strong> (1910&ndash;1962) was a representational painter, and not an especially celebrated one. Through the 1930s and 1940s he painted what painters were supposed to paint: city scenes, crowded interiors, a famous local barroom mural, portraits, the rocking landscape of the coal country he came from. He drew constantly, small and fast, in black ink. He sold a little, won a little, and was, by the end of the 1940s, a skilled and stuck painter in his late thirties, watching younger and louder friends rewrite what American art could be.
      </p>
      <p style={proseStyle}>
        Those friends were the painters later grouped as the <strong>Abstract Expressionists</strong>, or the <strong>New York School</strong>: a loose downtown crowd, <strong>Jackson Pollock</strong> pouring paint on the floor, <strong>Willem de Kooning</strong> tearing the figure apart, <strong>Mark Rothko</strong> stacking great soft rectangles of color. What they shared was a bet that a painting did not have to be a picture <em>of</em> anything, that it could be abstract and still carry real feeling and real seriousness. By 1950 they were the most exciting thing happening in painting anywhere, and New York, not Paris, was suddenly where it was happening.
      </p>
      <p style={proseStyle}>
        Then, around <strong>1949&ndash;1950</strong>, Kline did the thing that made him. He threw out color. He threw out the depicted world, the rooms and streets and faces. And he bet everything on the one thing he had always been good at, the black brush mark, blown up huge: a few enormous black strokes slashed across a white field, fast and loaded and wider than his own arm. <em>Chief</em> is one of the first major paintings of that breakthrough, made in <strong>1950</strong>, and it announced a Kline nobody had seen before: not a painter of things, but a painter of the stroke itself.
      </p>
    </article>
  )
}

function ChfProjector({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1948" title="The story everyone tells about how it started" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is a story about how Kline found his way to the black-and-white style, and it is worth telling, because MoMA itself tells it and almost everyone repeats it. It goes like this. One evening in <strong>1948</strong>, in the studio of his friend <strong>Willem de Kooning</strong> (1904&ndash;1997), Kline borrowed a projector (a <strong>Bell-Opticon</strong>, a device that throws an enlarged image of a small picture onto a wall) and used it to project one of his own tiny brush drawings, a thing only about four or five inches across. (In the most-repeated version, told by de Kooning&rsquo;s wife, the painter <strong>Elaine de Kooning</strong> [1918&ndash;1989], the little drawing was of a rocking chair.) Thrown up onto the wall many times its real size, the small, casual marks <em>changed</em>. They stopped being a drawing of anything and became, in the standard phrasing, gigantic black strokes that wiped out any image, pure abstract force, the swept line made huge. And in that moment, the story says, Kline saw his future and walked into it.
      </p>
      <p style={proseStyle}>
        It is a good story, and the part that matters is true: many of Kline&rsquo;s black-and-white canvases really are a small, improvised drawing brought up to the scale of a wall, the offhand gesture fused with the deliberate decision to enlarge it. That is a real and useful way to understand what you are looking at in <em>Chief</em>.
      </p>
      <p style={proseStyle}>
        But take the eureka-moment framing with some salt, because the people closest to it did. The neat version compresses what was almost certainly a gradual shift into a single overnight conversion. De Kooning himself, asked about it, said the change &ldquo;took quite a while to work it out,&rdquo; which is not the language of a man describing a thunderclap. So hold the projector as the <em>standard account</em>, the one MoMA repeats and the one that genuinely captures the method (a tiny mark made monumental), while remembering it is a story that has been tidied up over the years, not a documented record of one instant when everything changed.
      </p>
    </article>
  )
}

function ChfLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A few black girders, blown up to the size of a wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. <em>Chief</em> is large, roughly <strong>five feet tall by six feet wide</strong> (4 ft 10&frac38; in by 6 ft 1&frac12; in, a wide landscape canvas), and the first thing you register, before any label, is a handful of <strong>broad black strokes</strong> laid across a white field. There are not many of them. A few wide, loaded black bars dominate the whole picture, and the rest is white. That is the entire vocabulary: black, white, and the speed of the brush. After a century of paintings crowded with color and detail, the bareness of it is the shock.
      </p>
      <p style={proseStyle}>
        Look at what the black bars are doing, because they are not doing what marks usually do. They do not outline anything; they do not spell anything. They <strong>cross, brace, and lean on one another like beams or girders</strong>. They bear weight. The thick black forms swell, taper, and run off the edges of the canvas, and the whole thing reads like a built structure, framing or trusses or track or the side of a freight car, a weight-bearing scaffold standing in the room with you. Nothing is depicted. There is no train, no figure, no scene. And yet the picture feels <em>constructed</em>, architectural, as if you were looking at the steel skeleton of something rather than a painting of it. The stroke is not describing a structure. The stroke <em>is</em> the structure.
      </p>

      <SectionHeader accent={accent} label="The white" title="It isn’t blank, and it isn’t background" />
      <p style={proseStyle}>
        Now do the thing that changes the whole painting: stop looking at the black and look at the <strong>white</strong>. The easy assumption, the one nearly everyone makes, is that <em>Chief</em> is black signs drawn on a blank white ground, the way you&rsquo;d write on a clean page. It is not. Look closely and the white is <strong>painted</strong>, brushed and worked, and at the edges of the black bars it pushes back <em>into</em> them and even over them, white laid on top of black to bite a stroke down to the shape Kline wanted. The white is not the paper the black sits on. It is a second set of strokes, fighting the first.
      </p>
      <p style={proseStyle}>
        This is the load-bearing fact about the picture, and it is why the black and the white seem to keep <strong>trading places</strong> as you look: sometimes the black reads as a shape on white, and then the white reads as a shape cutting into black, and there is no settled answer about which is figure and which is ground. Both are doing the structural work. Neither is &ldquo;just background.&rdquo; Kline said this himself, as plainly as he ever said anything about his work, and the line is the key to standing in front of <em>Chief</em>:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>I paint the white as well as the black, and the white is just as important.</p>
      </blockquote>
      <p style={proseStyle}>
        That is not a stray remark; it is MoMA&rsquo;s own anchor for the painting, the line the museum quotes to explain that Kline did not see himself as drawing black signs on a white ground. Take him at his word and the picture opens up. There are two colors here, and <em>both of them are painted</em>, and the bet of the whole canvas is that the white pulls exactly as much weight as the black.
      </p>

      <SectionHeader accent={accent} label="The speed" title="The edges that record how fast the brush moved" />
      <p style={proseStyle}>
        One more thing to look for, and it is at the <strong>edges</strong>. Run your eye along the borders of the black bars and watch how ragged they get: the brush dragged, ran dry, broke into streaks, threw small drips. Those edges are a record of <strong>velocity</strong>. The strokes were not slowly filled in; they were <em>thrown</em>, a wide brush heavy with paint moving fast across the canvas, and the dry-brushed, dripping margins are the fingerprint of that speed. The painting does not just show a structure. It carries the <strong>physical act</strong> of its own making, the trace of a body moving quickly, which is the thing that will matter most when we ask why <em>Chief</em> was a break.
      </p>
    </article>
  )
}

function ChfBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="What ambitious abstraction looked like in 1950" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why <em>Chief</em> was new, picture what serious American abstraction looked like around it. It was, mostly, <strong>full</strong>. <strong>Jackson Pollock</strong> wove whole fields of poured line edge to edge, color and tangle everywhere, no center and no rest. <strong>Mark Rothko</strong> and <strong>Adolph Gottlieb</strong> worked in color and atmosphere, soft glowing rectangles or pictographic signs. <strong>Willem de Kooning</strong> churned the figure into thick, color-loaded paint. Even the most gestural of this painting kept a great deal of <em>stuff</em> on the canvas: color, depth, light, a crowd of marks. The reigning idea of an ambitious abstract picture was richness.
      </p>
      <p style={proseStyle}>
        Kline did the opposite. He performed a <strong>radical subtraction</strong>. Out went color. Out went atmosphere and depth. Out went any depicted object, and out went the crowd of marks. What he kept was a handful of huge black strokes against white, and he bet the entire painting on them, at the scale of a wall. <em>Chief</em> is almost <strong>one gesture, enlarged</strong>: a small drawing&rsquo;s worth of marks blown up until it is monumental. Where his peers added, Kline took away, until almost nothing was left but the stroke and the room it filled.
      </p>
      <SectionHeader accent={accent} label="The break · the stroke as structure" title="A mark that builds instead of describes" />
      <p style={proseStyle}>
        Here is the genuinely new move, the one the looking pointed at. In nearly all painting before this, a mark is in service to something else: it is a <strong>contour</strong> (the outline of a thing), or a <strong>sign</strong> (a letter, a character, a symbol that stands for a thing). Kline&rsquo;s black bar is neither. It does not outline an object and it does not write a word. It is <strong>structure itself</strong>: it spans, braces, bears weight, holds the picture up the way a girder holds up a building. The architecture you feel in <em>Chief</em> is not a depicted building; it is the strokes <em>behaving</em> like architecture. And because the white is painted too, this is a real two-way structure of black and white, the two colors propping and cutting into each other, not signs on a blank.
      </p>
      <SectionHeader accent={accent} label="The break · speed and the body" title="The painting as the trace of an act" />
      <p style={proseStyle}>
        And then there is the speed, which is the deepest part of the break. Because the strokes are thrown, fast and wide and loaded, with those dragging, dripping edges, the painting registers the <strong>physical event</strong> of making it. You are not looking at a careful image so much as at the frozen record of a body moving quickly across a canvas. This is exactly the territory the critic <strong>Harold Rosenberg</strong> (1906&ndash;1978) would name in <strong>1952</strong>, two years after <em>Chief</em>, when he coined the phrase <strong>&ldquo;action painting.&rdquo;</strong> His idea was that for these painters the canvas had become an arena to act in, and the painting was the trace of that act, paint as the record of a bodily event rather than a picture of the world. <em>Chief</em>, made in 1950, is one of the defining early proofs of it: a painting whose real subject is the speed and force of the hand that made it.
      </p>
    </article>
  )
}

function ChfAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The title" title="Named after a train, not a chief" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        o why is it called <em>Chief</em>? Not for a person, and not for a Native American chief, the guess the word invites. <strong>&ldquo;Chief&rdquo; was the name of a locomotive</strong>, a train Kline remembered from his childhood. He grew up in the coal-and-railroad country of <strong>Pennsylvania</strong>, around Wilkes-Barre and Lehighton, and loved the railway, the engines and the speed and the sheer iron weight of it. Many of his black-and-white canvases carry titles of this kind: names of trains, places, mechanical things he knew. Viewers have always read engines and bridges and girders into them, which is fair, given how the strokes look. But the title is not a caption. It does not mean the painting is a picture of the locomotive. It points at a <strong>feeling</strong> of power and speed and built iron, the thing the train and the painting have in common, not at the train itself.
      </p>
      <SectionHeader accent={accent} label="The reading he refused" title="Not calligraphy, not Zen" />
      <p style={proseStyle}>
        There is one reading of <em>Chief</em> that follows it everywhere, and it is one <strong>Kline himself rejected</strong>. Because the paintings are black marks on white, people compared them, endlessly, to <strong>East Asian calligraphy</strong> (the art of beautiful brush-writing in Chinese and Japanese) and to <strong>Zen brushwork</strong>, all that spare, swept ink on a pale ground. The resemblance is real to the eye, and Kline did know the Japanese avant-garde calligraphy world of the day. But he denied the equation flatly. He said he was not &ldquo;painting black signs on a white ground,&rdquo; and in a 1960 interview he pushed back directly, pointing out that <em>&ldquo;calligraphy is simply the art of writing&rdquo;</em>, and his pictures were not writing. The right way to carry this is as a comparison Kline <em>refused</em>, not a fact about the work. Part of why he refused it is the thing we have already seen: calligraphy is black signs on a blank page, and in <em>Chief</em> the white is painted too. Both colors are active, which is precisely <em>not</em> how calligraphy works.
      </p>
      <SectionHeader accent={accent} label="Provenance" title="The collector who gave it to MoMA" />
      <p style={proseStyle}>
        <em>Chief</em> did not wander far. It was painted in 1950, at the very start of Kline&rsquo;s fame, and was acquired early by the New York lawyer and modern-art collector <strong>David M. Solinger</strong> (later a notable figure at the Whitney Museum). In <strong>1952</strong>, Solinger and his wife gave the painting to the <strong>Museum of Modern Art</strong> in New York, where it has hung ever since. MoMA&rsquo;s credit line records it precisely, the way these things should be recorded: <em>Gift of Mr. and Mrs. David M. Solinger.</em> (The <strong>provenance</strong>, the documented chain of who has owned a work and when, is short and clean here: artist to collector to museum, no auction, no recorded price. Where a figure isn&rsquo;t in the record, we leave it blank rather than invent one.)
      </p>
      <p style={proseStyle}>
        What Kline left, in <em>Chief</em> and the canvases like it, was a new thing a painting could be: a few black strokes and a worked white field at the scale of a wall, a tiny drawing made monumental, the speed of the body left on the surface, and not a single thing depicted. He was a stuck representational painter into his late thirties. By 1950 he had found the one move that was entirely his, and a locomotive&rsquo;s name to hang on it.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  chief: { railroad: ChfRailroad, projector: ChfProjector, looking: ChfLooking, break: ChfBreak, afterlife: ChfAfterlife },
```
