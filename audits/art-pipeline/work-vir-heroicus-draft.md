# Draft — *Vir Heroicus Sublimis* (Barnett Newman, 1950–51), `vir-heroicus`

Authored through the art content pipeline (fact pack → Opus author → 5 gates → revise). Source of truth: `audits/art-pipeline/work-vir-heroicus-factpack.md`. **Rights: in-copyright** (Newman d. 1970) — hero shown small under fair use, never `pd-us`. Section ids ascending. Five sections; ~6 prose-pointer annotations; provenance Heller → MoMA 1969, no prices. Key statement = the Tate-confirmed *The Sublime Is Now* fragment (the "I declare the space" line is unsourced and is NOT used as a hard quote).

## PART A — const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Vir Heroicus Sublimis (Barnett Newman, 1950–51), MoMA, New York
// (acc. 240.1969). Flagship Abstract Expressionism color-field work read.
// Authored through the art content pipeline (fact pack → Opus → 5 gates →
// revise). Chapter prose in art-section-reader.tsx NARRATIVES['vir-heroicus']
// (Nwm… prefix). RIGHTS: in-copyright (Newman d.1970) — hero shown small,
// fair use; NEVER pd-us. FACT HANDLING (gate-locked): "zip" is Newman's OWN
// term; FIVE zips; meant to be seen CLOSE (the 1951 Betty Parsons notice is a
// real artifact, quoted verbatim, not a modern interpretation); height 242.2
// cm (MoMA label), NOT the Wikipedia 242.3; the key statement is the
// Tate-confirmed "The Sublime Is Now" fragment, NOT the unsourced "I declare
// the space" line. Do not call it a "stripe painting."
// ─────────────────────────────────────────────────────────────
export const VIR_HEROICUS: ArtWorkContent = {
  id: 'vir-heroicus',
  name: 'Vir Heroicus Sublimis',
  shortName: 'Vir Heroicus Sublimis',
  year: 1951,
  artist: 'Barnett Newman',
  artistId: 'newman',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '7 ft 11 3/8 in × 17 ft 9 1/4 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Gift of Mr. and Mrs. Ben Heller, 1969',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 5, total: 9 },
  hook: 'An almost eighteen-foot wall of pure red, broken by five thin vertical bands Newman called zips, built to be stood inches from so the color floods your whole field of vision and the painting stops being a thing you look at and becomes a space you stand inside.',
  heroImage: ART_IMG.newmanVir,
  heroCredit: 'Newman, Vir Heroicus Sublimis, 1950–51 · MoMA, New York · in copyright, shown small under fair use',
  heroAspect: 2.24, // 541.7 × 242.2 cm → W/H ≈ 2.24, wide landscape
  heroFit: 'contain', // the whole ~8 × 18 ft canvas, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '1950–51', k: 'Painted' },
    { v: '~18 ft wide', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'sublime', eyebrow: 'New York · 1948', dateLabel: 'Dec 1948', title: 'A painter writes that the sublime is now', blurb: 'Two years before he begins the canvas, Newman publishes a short, fierce essay arguing that American abstraction can reach the exalted directly, without myth or beauty or the weight of European tradition, by making it here, now, out of ourselves. The painting is the essay turned into red.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1950–51', title: 'One enormous red, and five marks', blurb: 'Newman strips a painting down to almost nothing: a single saturated red stretched nearly eighteen feet, broken only by five thin vertical bands he called zips, no two alike. The zip is the heart of his whole language, the single human mark asserted against an undivided field.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '7 ft 11 3/8 in × 17 ft 9 1/4 in', title: 'The field, the five zips, and the break', blurb: 'The immense red, the five differing verticals that cut it, the slight inflections in the surface, the total absence of any image, and the way the zips divide the field yet charge it into a measured, living space. This is where the break is: scale and immersion become the content.', progress: 0.56 },
    { id: 'parsons', eyebrow: 'Betty Parsons Gallery · 1951', dateLabel: 'Apr–May 1951', title: 'Stand close, the notice said', blurb: 'When the painting was first shown, Newman tacked a typed instruction to the gallery wall telling visitors to view the big pictures from a short distance, not across the room. The immersion was not a later interpretation; he asked for it, in writing, on the wall.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1961–today', title: 'Heller’s wall, then MoMA’s', blurb: 'Bought from Newman around 1961 by the collector Ben Heller, who lived with it, then given by the Hellers to the Museum of Modern Art in 1969, where it hangs now, still asking to be stood close to.', progress: 0.96 },
  ],
  provenance: [
    { year: '1950–1961', who: 'Barnett Newman (the artist)', place: 'New York', note: 'Painted 1950–51 and first shown at the Betty Parsons Gallery, New York, 23 April–12 May 1951, the show where Newman posted the close-viewing notice. Held by the artist into the early 1960s.', price: null },
    { year: 'c. 1961', who: 'Ben (and Sally) Heller', place: 'New York', note: 'Bought directly from Newman by the collector Ben Heller, who hung it at home. The exact purchase figure is not documented in the sources, so none is given here.', price: null },
    { year: '1969–today', who: 'Museum of Modern Art', place: 'New York', note: 'Given to MoMA in 1969 by Ben and Sally Heller, credited "Gift of Mr. and Mrs. Ben Heller." Accession 240.1969. On view. © Barnett Newman Foundation / Artists Rights Society (ARS), New York.', price: 'Gift of Mr. and Mrs. Ben Heller', museum: true },
  ],
  figures: [
    { name: 'Barnett Newman', role: 'The painter', palette: ['#bf2f25', '#3a1410', '#1c0a08'] },
    { name: 'Betty Parsons', role: 'Dealer; the 1951 show', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Mark Rothko', role: 'Color-field peer, different idiom', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
    { name: 'Clyfford Still', role: 'Fellow field painter, friend', palette: ['#3a3a3a', '#1c1c1c', '#0a0a0a'] },
    { name: 'Ben Heller', role: 'Collector; gave it to MoMA', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
  ],
  annotations: [
    { label: 'The immense red field', where: 'Almost the entire surface, edge to edge', detail: 'Nearly the whole canvas is one saturated red, close to a cadmium red, spanning roughly eighteen feet, over a hundred square feet of it. Let it register first as sheer color and quantity. There is no image to hunt for in it, no figure and no horizon. The amount of red is itself the first fact, and Newman wants the quantity to hit you before anything else does.' },
    { label: 'The five zips', where: 'Five thin vertical bands crossing the red, spaced unevenly across the width', detail: 'Count them: five thin vertical bands cut the red top to bottom. Zip is Newman’s own word for them, not a critic’s; he coined it for these marks. They are not a tidy pattern. Each is only an inch or two wide, and no two are the same in width, in color, or in the firmness of their edges.' },
    { label: 'How the five zips differ', where: 'Reading across the verticals, left to right', detail: 'Near the center a pale, light zip reads almost like a gap, a seam of light between two planes of red; close to it a darker maroon band seems to sink slightly behind the surface; others sit crisp and flat on top of it. Some edges are clean, taped sharp; some waver and bleed. The differences are the point: each zip is its own event, not a repeat.' },
    { label: 'The slight variations in the red', where: 'Across the whole field, visible only up close', detail: 'The red is not a dead, flat, machine color. Stand near it and the enormous field has subtle shifts and brushed inflection moving across its span, faint changes in density and warmth. The "monochrome" is alive with handwork; it rewards looking at the paint itself, not just at the marks crossing it.' },
    { label: 'The absence of any image', where: 'Everywhere; the thing that is not there', detail: 'There is no figure, no landscape, no symbol, nothing depicted. The content is the red field and the five marks that assert themselves against it, not an arrangement of recognizable things. Newman has taken away everything a painting was once supposed to contain and kept only color, scale, and the single human gesture of the zip.' },
    { label: 'How the zips divide yet activate the field', where: 'The intervals between the verticals, across the whole width', detail: 'The zips slice the red into uneven zones, and the intervals are measured, not random: they set up a near-perfect square at the center and looser, asymmetrical spaces toward the edges. That measuring stops the empty field from going inert. The marks do not decorate the red; they make it register as charged space and human presence, which is why this is a color-field painting about the sublime, not a "red painting with stripes."' },
  ],
  lineage: {
    parents: [
      { label: 'The Sublime Is Now (1948)', mode: 'art' },
      { label: 'Color-field painting', mode: 'art' },
      { label: 'Postwar New York', mode: 'civ' },
    ],
    children: [
      { label: 'Color Field abstraction', mode: 'art' },
      { label: 'Minimalism', mode: 'art' },
      { label: 'Scale as content', mode: 'art' },
    ],
  },
}
```

## PART B — section components + registry comment

```tsx
// ─────────────────────────────────────────────────────────────
// Vir Heroicus Sublimis (Barnett Newman, 1950–51) — the five chapters.
// Nwm… prefix. NARRATIVES keys = section ids (sublime/making/looking/
// parsons/afterlife). Key statement = Tate-confirmed The Sublime Is Now
// fragment (1948); "zip" is Newman's own word; FIVE zips; the 1951 Betty
// Parsons close-viewing notice is quoted verbatim as a real artifact.
// ─────────────────────────────────────────────────────────────
function NwmSublime({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · December 1948" title="A painter writes that the sublime is now" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        wo years before he laid a brush on this canvas, <strong>Barnett Newman</strong> (1905&ndash;1970) published a short, combative essay. It ran in a little New York art magazine called <em>The Tiger&rsquo;s Eye</em> in December 1948, and it was titled <em>The Sublime Is Now</em>. Newman was a New York painter, the son of Polish-Jewish immigrants, in his early forties and not yet famous, working among the loose group of artists later called the <strong>Abstract Expressionists</strong> (Jackson Pollock, Mark Rothko, Willem de Kooning, and the rest, the first American painters to matter to the wider art world on their own terms). The essay was his manifesto, and the painting we&rsquo;re about to look at is that essay turned into red.
      </p>
      <p style={proseStyle}>
        To feel the argument you need the word in the title. The <strong>sublime</strong> is an old idea in European art and philosophy: not mere beauty, which is pleasant and well-proportioned, but the <em>overwhelming</em>, the exalted, the sense of something vast and terrible and larger than yourself, the feeling you get standing under a thunderhead or at the lip of a canyon. For two centuries European painters had reached the sublime by <em>depicting</em> it, painting storms and Alps and shipwrecks inside a frame, a vastness shown to you through a window. Newman&rsquo;s claim was that this whole apparatus, the myth, the storm, the borrowed European grandeur, was no longer needed.
      </p>
      <p style={proseStyle}>
        Here is the line that matters, the one the painting sets out to prove. Newman wrote that American painters were
        {' '}<em>&ldquo;asserting man&rsquo;s desire for the exalted, for a&hellip; relationship to the absolute emotions.&rdquo;</em>{' '}
        Strip the philosophy off it and the wager is simple and enormous: the exalted does not have to be inherited from Europe or pictured through nature. It can be <em>made</em>, here and now, out of nothing but pure painting and the encounter you have with it standing in the room. The sublime is not back then or over there. It is now.
      </p>
      <p style={proseStyle}>
        That is a large promise for an essay to make, and Newman knew it sat there as a promissory note, the way Futurism&rsquo;s manifesto had sat unbacked until someone painted a canvas to cash it. He had to make a painting that produced the exalted directly, with no storm to lean on. In 1950 he started the biggest one he had ever attempted, and he gave it a Latin title that says the theme out loud: <em>Vir Heroicus Sublimis</em>, which translates as <strong>&ldquo;Man, Heroic and Sublime.&rdquo;</strong>
      </p>
    </article>
  )
}

function NwmMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1950–51" title="One enormous red, and five marks" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hat Newman built over 1950 and 1951 is, on paper, almost nothing. A single field of saturated <strong>red</strong>, close to a cadmium red, stretched across a canvas nearly <strong>eighteen feet wide and almost eight feet tall</strong>, over a hundred square feet of it. And running down through that red, five thin <strong>vertical bands</strong>, each only an inch or two wide. That is the entire painting. No figure. No horizon. No image of anything. The red, and the five marks.
      </p>
      <p style={proseStyle}>
        The bands have a name, and it is Newman&rsquo;s own. He called them <strong>zips</strong>. Not a critic&rsquo;s coinage tacked on later, his word, for the vertical mark that had become the whole engine of his art. He had hit on it a few years earlier, around 1948, when a single band of tape down a small red canvas stopped being a division of the field and started being the thing the field was <em>about</em>. From then on the zip was his signature and his subject: a single upright mark, the trace of one human presence asserted against an undivided expanse. Newman tied it to the first act of creation, the first separating gesture, light divided from dark, a single figure standing up in an empty world. It is why the painting&rsquo;s title is about heroic man. The zip is the man.
      </p>
      <p style={proseStyle}>
        Crucially, the five zips here are not a pattern. No two are alike. They differ in width, in color, and in how their edges are made: some are taped clean and sit crisp and flat on the surface; some are brushed and waver; one reads pale, almost like a gap of light, and another, darker, seems to sink a little behind the red. Newman placed them at uneven intervals, measured by eye, so that the spaces between them are charged, not regular. He cared about exactly where each one fell the way a composer cares about exactly where a beat lands.
      </p>
      <p style={proseStyle}>
        And the red itself is worked. It looks, from across a room, like one flat machine-made wall of color. It is not. Up close it carries faint shifts and brushed inflection across its whole span, slight changes of density and warmth that are the mark of a hand moving a brush over a hundred square feet. Newman is not a Rothko, whose color floats and feathers; his red is flatter and harder, his zips crisp where Rothko&rsquo;s rectangles dissolve. But neither is the surface dead. It was made to be looked at as paint, which means it was made to be looked at from close. That last fact, how near you are meant to stand, turns out to be the whole point, and it is what we look at next.
      </p>
    </article>
  )
}

function NwmLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A wall of red, and five marks in it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it, and the first thing to do is the hardest: let the red register as red. Almost the entire surface, edge to edge, nearly eighteen feet of it, is one saturated field of color, and your instinct will be to look <em>for</em> something in it, the way you look for the subject in a normal painting. There is nothing to find. No figure, no scene, no horizon. The quantity of red is itself the fact. Take it in as sheer color and sheer amount before you look at anything else, because the scale is doing work that a glance from across the room will miss.
      </p>
      <p style={proseStyle}>
        Now find the marks. Five thin <strong>vertical bands</strong>, the zips, cut the red from top to bottom, spaced unevenly across the width. Count them; there are five, and they are easy to undercount because they are quiet against all that red. And once you have them, look at how unalike they are. Near the center, a pale, light zip reads almost like a seam of light, a gap between two planes of red. Close to it, a darker maroon band seems to slip slightly <em>behind</em> the surface. Others sit crisp and flat on top of it; some edges are razor-clean, some waver and bleed. Each zip is its own event. None is a repeat of the one before.
      </p>
      <p style={proseStyle}>
        Look harder at the red between them. It is not the dead flat color it pretends to be from a distance. Across its enormous span the surface carries subtle inflection, faint shifts in warmth and density where the brush moved, so that the field has a quiet life of its own. The painting rewards looking at the paint, not just at the marks crossing it.
      </p>

      <SectionHeader accent={accent} label="The break · scale" title="Why this is new: you stand inside it" />
      <p style={proseStyle}>
        Here is where the painting breaks with everything before it, and the break is worth stating plainly. Even the most radical European abstraction, Cubism&rsquo;s shards, Mondrian&rsquo;s grids, Kandinsky&rsquo;s color, still <strong>composed within the frame</strong>: an arrangement of forms balanced against each other, a designed object you read at a contemplative distance, a picture to stand back from. And the sublime, in that older tradition, was something a painter <em>depicted</em>, a storm or an Alp shown to you through the window of the canvas. Newman threw out both halves of that. There is almost nothing here to "read," no composition of parts, just one immense color and a handful of upright marks. And he made the painting so large, and asked you to stand so near, that it stops being an object across the room and becomes a space you are standing <em>inside</em>.
      </p>
      <p style={proseStyle}>
        That is the move: <strong>scale and immersion become the content</strong>, not the framing. At eighteen feet wide and seen from a few feet away, the red floods your entire field of vision until there is no edge, no "outside" the picture, nothing but the color and you in it. Your own bodily relation to the surface, the sense of being engulfed, <em>is</em> the subject. The size is not grandeur for show; it is the mechanism that produces the feeling. This is the wager of <em>The Sublime Is Now</em> made physical: the exalted is not pictured for you to look at, it is generated in the here-and-now encounter with the paint. Newman makes the sublime out of pure painting and your standing body, with no storm, no myth, and none of the borrowed weight of European tradition.
      </p>
      <p style={proseStyle}>
        And the five zips are what keep the field from going inert. Their intervals are measured: they set up a near-perfect square at the center of the canvas and looser, asymmetrical spaces toward the edges, so the empty red stops being a blank and becomes a charged, articulated space. The marks do not decorate the red. They make it <em>register</em> as space and as human presence. Which is exactly why it misses the entire painting to call it a red picture with stripes. The verticals are not stripes; they are zips, charged with everything Newman packed into that word, and the red is not a background; it is the field they bring to life.
      </p>
    </article>
  )
}

function NwmParsons({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Betty Parsons Gallery · 1951" title="A typed notice on the wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting was first shown in the spring of 1951, at the <strong>Betty Parsons Gallery</strong> in New York, the dealer who handled most of the Abstract Expressionists in those early years, in a Newman solo show that ran from 23 April to 12 May. And there Newman did something that takes the immersion out of the realm of interpretation and turns it into documented fact. He <strong>tacked a typed notice to the gallery wall.</strong>
      </p>
      <p style={proseStyle}>
        The notice read:
        {' '}<em>&ldquo;There is a tendency to look at large pictures from a distance. The large pictures in this exhibition are intended to be seen from a short distance.&rdquo;</em>{' '}
        That is the whole instruction, in Newman&rsquo;s own deadpan. He was not asking you to admire the canvas from across the gallery like a normal big painting. He was telling you to walk up to it, close, closer than feels comfortable, until the red filled your vision and the painting became the environment you were standing in. The engulfment you read about in the last chapter is not a clever modern theory laid on the work afterward. Newman asked for it, in writing, on the wall, the first time anyone saw the picture.
      </p>
      <p style={proseStyle}>
        It is worth pausing on how odd that was. Painters do not usually post operating instructions. The notice tells you Newman knew the painting could fail if you treated it wrong, that taken in at a glance from twenty feet it really would flatten into a red wall with a few lines, the very thing his detractors accused it of being. Seen from a few feet, the same canvas does the thing it was built to do. The distance is not incidental to the work. It is part of the work, and Newman cared enough to spell it out.
      </p>
      <p style={proseStyle}>
        Most viewers in 1951 did not get it. Color-field abstraction this severe, a single hue and a handful of marks, baffled even sympathetic critics, and Newman&rsquo;s reputation took years to catch up to the paintings. But the few who stood where he told them to stand reported the thing he was after: not a picture admired, but a space entered. That experience, the red closing over your whole field of view, is what the notice was protecting.
      </p>
    </article>
  )
}

function NwmAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · c. 1961" title="The collector who lived with it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or its first decade the painting stayed with Newman. Then, around <strong>1961</strong>, it found the owner who would carry it the rest of the way: the New York collector <strong>Ben Heller</strong>, who bought it directly from the artist. (The <strong>provenance</strong>, the documented chain of who has owned a work of art from the artist&rsquo;s hand to now, is short and clean for this picture. We can&rsquo;t tell you what Heller paid, because no figure for the sale survives in the record, and a blank is better than an invention.) Heller was one of the most committed private champions of the Abstract Expressionists, and he did the thing the painting most wanted: he <em>lived with it</em>, hung it at home, at the scale and the distance Newman intended.
      </p>
      <p style={proseStyle}>
        In <strong>1969</strong>, Ben and Sally Heller gave the painting to the <strong>Museum of Modern Art</strong> in New York, where it has hung ever since. The credit line on the wall still reads, plainly, <em>&ldquo;Gift of Mr. and Mrs. Ben Heller.&rdquo;</em> Newman lived to see it enter the museum; he died the next year, in 1970, his standing as a major painter finally secure after the long years of being misread.
      </p>
      <p style={proseStyle}>
        What the picture asks of the people who pass it at MoMA is exactly what the 1951 notice asked. Stand close. Let the red close over your field of vision until the edges fall away and you are not in front of a painting but inside a field of color held taut by five quiet marks. Newman bet, in an essay, that the exalted could be made now, out of pure paint and a standing body, with none of Europe&rsquo;s old machinery. <em>Vir Heroicus Sublimis</em> is the bet paid in full: man, heroic and sublime, not pictured for you, but produced in the room, the moment you walk up close.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'vir-heroicus': { sublime: NwmSublime, making: NwmMaking, looking: NwmLooking, parsons: NwmParsons, afterlife: NwmAfterlife },
```
