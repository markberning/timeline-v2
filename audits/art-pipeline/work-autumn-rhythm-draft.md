# Work-read draft — Jackson Pollock, *Autumn Rhythm (Number 30)* (1950)

Authored through the art content pipeline (fact pack → Opus draft → 5 gates → revise).
Source of truth: `audits/art-pipeline/work-autumn-rhythm-factpack.md`.

Gate-corrected facts baked in:
- **Medium is enamel / house paint**, never "oil on canvas" (Met: *Enamel on canvas*).
- **"Action painting" is HAROLD ROSENBERG's term** (*ARTnews*, Dec 1952), coined two
  years AFTER this work; it is never put in Pollock's mouth.
- **The drip method is CONTROLLED, not random** — Pollock: "there is no accident"
  (Wright interview, 1950), flagged as a condensation of the longer transcript.
- **The title came later** — made and first shown as *Number 30* (1950–52);
  retitled *Autumn Rhythm* only by the 1955 Sidney Janis show; "later retitled,"
  never "Pollock titled it."
- **"I am nature"** is anecdotal/secondhand (Krasner's recollection) — flagged, not
  shipped as a sourced quote.
- **Rights: in-copyright** (1950 work, Pollock d.1956; © Pollock-Krasner Foundation /
  ARS) — shown small under fair use, NOT pd-us.
- Dimensions ft/in only: 266.7 × 525.8 cm → **8 ft 9 in × 17 ft 3 in** (the larger
  269.9 × 528.3 cm figure is the SAME canvas measured with depth, not a second work).

---

## PART A — the const (`src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Autumn Rhythm (Number 30) (Jackson Pollock, 1950), The Metropolitan
// Museum of Art (object 488978 / acc. 57.92). The FIRST Abstract Expressionism
// work read. Authored through the art content pipeline (fact pack → Opus → 5
// gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['autumn-rhythm'] (Aut… prefix).
// FACT HANDLING (gate-corrected):
//  • MEDIUM is enamel / commercial house paint (Met "Enamel on canvas"), NOT oil.
//  • "Action painting" is Harold Rosenberg's term (ARTnews, Dec 1952), POST-dating
//    the work — never attributed to Pollock.
//  • The pour is CONTROLLED, not accidental: Pollock, "there is no accident"
//    (William Wright interview, summer 1950), flagged as a condensation of the
//    longer transcript.
//  • TITLE added later: made/shown as Number 30 (1950–52), retitled Autumn Rhythm
//    by the 1955 Sidney Janis show ("later retitled," not "Pollock titled it").
//  • "I am nature" is anecdotal/secondhand (Krasner) — flagged, not asserted.
//  • Dimensions: 266.7 × 525.8 cm → 8 ft 9 in × 17 ft 3 in (the 269.9 × 528.3 cm
//    figure is the SAME canvas measured with depth, not a different work).
// rights: in-copyright (1950, Pollock d.1956; © Pollock-Krasner Foundation / ARS,
// New York) → hero shown small under fair use, NOT pd-us.
// ─────────────────────────────────────────────────────────────
export const AUTUMN_RHYTHM: ArtWorkContent = {
  id: 'autumn-rhythm',
  name: 'Autumn Rhythm (Number 30)',
  shortName: 'Autumn Rhythm',
  year: 1950,
  artist: 'Jackson Pollock',
  artistId: 'pollock',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Enamel on canvas',
  dimensions: '8 ft 9 in × 17 ft 3 in',
  location: 'The Metropolitan Museum of Art',
  acquired: 'George A. Hearn Fund, 1957 (acc. 57.92)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 1, total: 9 },
  hook: 'A wall of poured and dripped line, almost nine feet tall and over seventeen wide, made on the studio floor from all four sides. No figure, no center, nothing depicted: the subject is the act of painting itself.',
  heroImage: ART_IMG.pollockAutumn,
  heroCredit: 'Pollock, Autumn Rhythm (Number 30), 1950 · The Metropolitan Museum of Art · in copyright, shown small under fair use.',
  heroAspect: 1.98, // 266.7 × 525.8 cm → W/H ≈ 1.97, landscape
  heroFit: 'contain', // the whole ~9 × 17 ft canvas, never cropped
  rights: 'in-copyright', // 1950, Pollock d.1956; © Pollock-Krasner Foundation / ARS — NOT pd-us
  stats: [
    { v: '1950', k: 'Painted' },
    { v: '8′9″ × 17′3″', k: 'Dimensions' },
    { v: 'The Met', k: 'Now at' },
  ],
  sections: [
    { id: 'floor', eyebrow: 'Springs, Long Island · 1950', dateLabel: '1950', title: 'The painter who took the canvas off the wall', blurb: 'In a barn studio on Long Island, at the peak of his drip years, Pollock unrolls a length of raw, unprimed canvas onto the floor and walks around it. The picture is not made at an easel; it is made on the ground, from all four sides.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1950', title: 'Poured, flung, and controlled', blurb: 'No brush touches the cloth in the usual way. Pollock trails liquid house paint off sticks and hardened brushes, letting it drip, pool, and spatter. Hans Namuth’s 500-plus photographs show the build was deliberate and methodical, not a random splatter.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '8 ft 9 in × 17 ft 3 in', title: 'A web with no center', blurb: 'Black, white, brown, and tan skeins looping edge to edge in one allover field. No figure, no horizon, nothing depicted; the raw canvas shows through the gaps, and at over seventeen feet wide you stand inside it.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Abstract Expressionism', title: 'When the act became the subject', blurb: 'Western painting was built on a window: a figure on a ground, a focal point, paint describing a thing. Pollock dissolves all of it. There is no center and nothing depicted; the paint is the record of his body moving, and the act of painting is the content.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1950–today', title: 'Number 30 becomes Autumn Rhythm', blurb: 'Shown first as Number 30, retitled only by 1955. Pollock died in a car crash in 1956; a year later the Met bought it from his estate, where it became one of the defining American paintings of the century. The "action painting" label arrived after he was gone.', progress: 0.96 },
  ],
  // Provenance endpoints firm (made 1950 → Met 1957, George A. Hearn Fund, acc.
  // 57.92, credit line verbatim). The ~$20,000-plus-trade purchase figure is
  // well-sourced but secondary, so kept out of the priced field and noted only as
  // an estate purchase. No prices asserted as fact.
  provenance: [
    { year: '1950–1956', who: 'Jackson Pollock (the artist)', place: 'Springs, East Hampton, New York', note: 'Painted in 1950 in his Long Island studio. Shown as Number 30 at the Betty Parsons Gallery (Nov.–Dec. 1950) and at MoMA’s 15 Americans (1952); shown as Autumn Rhythm at the Sidney Janis Gallery (1955). Held until Pollock’s death on 11 August 1956.', price: null },
    { year: '1956–1957', who: 'The estate of Jackson Pollock', place: 'New York', note: 'Held by the estate after Pollock’s death; the Met’s Robert Beverly Hale arranged the purchase from the estate, reportedly for about $20,000 plus a trade of another Pollock (the price is well-sourced but secondary).', price: null },
    { year: '1957–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Acquired in 1957, the year after Pollock’s death, through the George A. Hearn Fund. Accession 57.92. © The Pollock-Krasner Foundation / Artists Rights Society (ARS), New York. On permanent view.', price: 'George A. Hearn Fund (museum purchase)', museum: true },
  ],
  figures: [
    { name: 'Jackson Pollock', role: 'The painter', palette: ['#2a2620', '#a8966a', '#0e0c08'] },
    { name: 'Lee Krasner', role: 'Painter; his wife, in the next studio', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Hans Namuth', role: 'Photographed him at work, 1950', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Clement Greenberg', role: 'Critic; champion of the field picture', palette: ['#5a6354', '#39322a', '#120f0c'] },
    { name: 'Harold Rosenberg', role: 'Critic; coined "action painting," 1952', palette: ['#8a4a2a', '#4a2c18', '#15100a'] },
    { name: 'Robert Beverly Hale', role: 'Met curator; arranged the 1957 purchase', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The skeins of black, white, brown, and tan', where: 'Everywhere across the surface, the looping tangle of poured lines', detail: 'The whole field is a web of looping lines in a tight, almost colorless palette: black, white, brown, and a creamy tan. There are no bright hues; the autumnal browns and buffs are where the later title "Autumn" came from. Trace any one black line and watch it dive under and over the others, and you are reading the order of the layers, the last skeins laid on top of the first.' },
    { label: 'The rhythm with no center', where: 'The composition as a whole, scanned for a place to rest', detail: 'Look for a focal point and there isn’t one. Every region is as busy, and as finished, as every other; there is no top-to-bottom or near-to-far hierarchy, no climax, nowhere for the eye to land. The looping lines set up an even, continuous pulse across the entire field. This is what gets called allover composition: weight spread equally to all four edges, the picture with no middle.' },
    { label: 'Nothing is depicted', where: 'The whole canvas, searched for a figure, a horizon, a thing', detail: 'Hunt for a person, a landscape, an object, a window onto any scene, and you will find none. Nothing sits in front of anything else; foreground and background have collapsed into one continuous woven surface. The picture is not of anything. The paint refers only to itself and to the act that put it there, which is the hardest and most important thing to see in it.' },
    { label: 'The drips, pools, and spatters', where: 'Throughout, readable up close as the physics of how it was made', detail: 'You can read how each mark was made. Thin trailed lines are where paint streamed off a stick; fatter, propulsive arcs are where it was flung; small pools are where it puddled and dried; fine spatters are flicked off a loaded brush. Liquid commercial enamel, house paint, behaving as liquid. Each mark is the frozen track of one movement of his arm or his whole body.' },
    { label: 'The raw canvas showing through', where: 'In the gaps between the skeins, the bare tan cloth', detail: 'The pale tan canvas left exposed between the poured lines is not a painted background. It is the untouched, unprimed cloth itself, doing the job a painted "ground" usually does. Pollock never primed or stretched it before working; that bare fabric is part of the picture, not something hidden under it. Where most paintings bury the canvas, this one leaves it in plain sight.' },
    { label: 'The scale you stand inside', where: 'The full span of the work, about 8 ft 9 in tall and 17 ft 3 in wide', detail: 'At roughly nine feet tall and over seventeen feet wide, the picture fills your whole field of vision when you stand close. You don’t look at it so much as stand within it, the way Pollock stood within it on the floor while he made it. The size is doing argumentative work: it puts your body where his was, inside the field rather than in front of a framed view.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealist automatism', mode: 'art' },
      { label: 'Native American sand painting', mode: 'civ' },
      { label: 'Cubism’s flat field', mode: 'art' },
    ],
    children: [
      { label: 'Color Field painting', mode: 'art' },
      { label: 'Minimalism’s non-relational surface', mode: 'art' },
      { label: 'Performance and process art', mode: 'art' },
    ],
  },
}
```

---

## PART B — the five chapter components (`art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// Autumn Rhythm (Number 30) (Pollock, 1950) — the five chapters
// ─────────────────────────────────────────────────────────────
function AutFloor({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Springs, Long Island · 1950" title="The painter who took the canvas off the wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the summer of <strong>1950</strong>, in a converted barn behind a small farmhouse in <strong>Springs</strong>, a hamlet at the eastern end of Long Island, New York, <strong>Jackson Pollock</strong> (1912&ndash;1956) was doing the strangest thing in American painting, which was painting on the floor. He had moved out from New York City with his wife, the painter <strong>Lee Krasner</strong>, a few years earlier, fixed up the barn as a studio, and arrived at a way of working that had no real precedent. He did not stand at an easel. He unrolled a long length of <strong>raw, unprimed canvas</strong> (plain cloth, never stretched on a frame or sealed with the white primer painters normally lay down first) straight onto the studio floor, and he walked around it.
      </p>
      <p style={proseStyle}>
        This was the height of what gets called his <strong>drip</strong> or <strong>pour</strong> period, roughly <strong>1947 to 1950</strong>, the few years in which he made the pictures he is remembered for. <em>Autumn Rhythm</em> is one of the largest and best of them, made near the end of that run, when he had complete command of the method and had not yet started to doubt it.
      </p>
      <p style={proseStyle}>
        To feel why the floor mattered, you have to picture the alternative. For five centuries a Western painter stood in front of a canvas hung upright, the way you stand in front of a window, and worked into a vertical surface at arm’s length, brush in hand. Pollock laid the surface flat and got <em>over</em> it, around it, on every side of it. He explained the choice himself, and it is worth hearing in his own words rather than a paraphrase, so we’ll come to that in the next chapter. For now hold the plain physical fact: the picture we are going to look at was made by a man walking around a sheet of canvas on a barn floor, looking down at it, never once stepping back to a wall.
      </p>

      <SectionHeader accent={accent} label="Why this is a beginning" title="The first canvas of a new American painting" />
      <p style={proseStyle}>
        This is the first work in our walk through <strong>Abstract Expressionism</strong>, the loose group of painters working in New York in the late 1940s and 1950s (Pollock, Krasner, <strong>Willem de Kooning, Mark Rothko, Franz Kline</strong>, and more) who made the city, for the first time, the center of advanced Western painting, a place that role had always belonged to Paris. They did not share a single style. What they shared was a conviction that a painting could be a direct, unplanned, emotionally charged act rather than a depiction of something out in the world. Pollock’s poured canvases are the most extreme version of that idea, and <em>Autumn Rhythm</em> is one of the clearest. So this chapter sets the room, the floor, and the year; the next four get into the paint.
      </p>
    </article>
  )
}

function AutMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1950" title="House paint, off the end of a stick" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the material, because the first surprise of <em>Autumn Rhythm</em> is what it is made of. It is not oil paint. The Met records the medium plainly as <strong>enamel on canvas</strong>, and that means <strong>commercial enamel, ordinary house paint</strong>, the glossy liquid stuff you would buy in a can to paint a porch railing. Pollock used it because it was cheap, because it poured, and because it dried hard and bright. So when you read &ldquo;painting&rdquo; here, picture the consistency of thin syrup, not the buttery paste an oil painter pushes around with a brush.
      </p>
      <p style={proseStyle}>
        And he did not push it around with a brush, not in the usual sense. He <strong>poured and flung it</strong>, straight from the can or trailed off the end of a <strong>stick, a hardened dried-out brush, a basting syringe, or a trowel</strong>, holding the tool above the canvas and letting the liquid fall. The paint drips, streams, pools, and spatters onto the cloth under its own weight and the speed of his arm. Because the canvas was flat on the floor, he could move all the way around it and work from <strong>all four sides</strong>, with no fixed up or down, no top edge, no bottom. The finished picture records the motion of his <em>whole body</em> moving over and around the surface, walking, crouching, stepping back in, rather than the small motion of a hand at an easel.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“On the floor I am more at ease”" />
      <p style={proseStyle}>
        He wrote down why, three years earlier, in a short statement called &ldquo;My Painting&rdquo; for the little one-issue magazine <strong><em>Possibilities</em></strong> (no. 1, Winter 1947&ndash;48). It is the cleanest thing he ever said about the method, and it is the key to everything in this picture:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>My painting does not come from the easel. I hardly ever stretch my canvas before painting. I prefer to tack the unstretched canvas to the hard wall or the floor&hellip;</p>
        <p style={{ margin: 0 }}>On the floor I am more at ease. I feel nearer, more a part of the painting, since this way I can walk around it, work from the four sides and literally be <em>in</em> the painting.</p>
      </blockquote>
      <p style={proseStyle}>
        Read that last line twice, because it is the whole program: <em>literally be in the painting</em>. Not in front of it, looking at a scene through it. Inside it, standing where the marks land. (The statement runs on into the often-quoted line that follows: &ldquo;When I am <em>in</em> my painting, I&rsquo;m not aware of what I&rsquo;m doing&hellip; the painting has a life of its own. I try to let it come through.&rdquo;)
      </p>

      <SectionHeader accent={accent} label="Not random" title="“There is no accident”" />
      <p style={proseStyle}>
        Here is the single most common thing said about this picture, and it is wrong: that it is a random splatter, paint thrown at a canvas by chance. Pollock denied exactly this, on the record. In an interview with <strong>William Wright</strong> in the summer of <strong>1950</strong> (the same year he made <em>Autumn Rhythm</em>), he insisted he <strong>controlled</strong> the pour. The most-quoted form of what he said is a compressed one:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px', color: INK }}>
        &ldquo;I can control the flow of paint: there is no accident.&rdquo;
      </p>
      <p style={proseStyle}>
        (That punchy sentence is a condensation of a longer passage in the transcript, where he said that with experience it is possible to control the flow of paint to a great extent, and that he denied the accident. It is fairly quoted as his statement on control, just not a single unbroken sentence.) The point stands either way. He had spent years learning how a given height of pour, a given speed of arm, a given thickness of paint would land. The photographer <strong>Hans Namuth</strong>, who shot <strong>more than 500 photographs</strong> of Pollock at work in 1950, left a record that scholars have used to reconstruct the order of the layers: the build was <strong>deliberate and methodical</strong>, laid in over months, not flung down in a fit. Call it controlled, or choreographed. Do not call it accidental.
      </p>

      <SectionHeader accent={accent} label="A caution" title="What he didn’t quite say" />
      <p style={proseStyle}>
        Two careful notes, because the legends crowd in fast here. First, you will see the phrase <strong>&ldquo;action painting&rdquo;</strong> attached to Pollock as if it were his word. It was not. The critic <strong>Harold Rosenberg</strong> coined it in &ldquo;The American Action Painters,&rdquo; an essay in <em>ARTnews</em> in <strong>December 1952</strong>, two years <em>after</em> this canvas was made; it is a label the critics put on the work, not a thing Pollock said while painting it. Second, you will see the line <strong>&ldquo;I am nature&rdquo;</strong> quoted as Pollock’s manifesto. That one is anecdotal, remembered second-hand by Lee Krasner long afterward, with no contemporary document behind it. It is a nice story, but it is hearsay, and we are not going to lean a reading of the painting on it.
      </p>
    </article>
  )
}

function AutLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A web that fills the wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it, and the first thing the picture does is refuse to be taken in at a glance. It is enormous: <strong>about 8 feet 9 inches tall by 17 feet 3 inches wide</strong> (a yard taller than a person, and the width of a small room). At that size, standing close, it fills your whole field of vision, edge to edge, with no border of wall to frame it. You do not look <em>at</em> <em>Autumn Rhythm</em> so much as stand <em>inside</em> it, which, as the last chapter showed, is exactly where Pollock stood while he made it.
      </p>
      <p style={proseStyle}>
        And what fills it is a <strong>web</strong>: an allover tangle of looping, poured lines in a tight, nearly colorless palette of <strong>black, white, brown, and tan</strong>. There are no bright hues anywhere, no red, no blue, no green. The autumnal browns and creamy buffs are the only warmth, and they are where the later title &ldquo;Autumn&rdquo; comes from, though, as we&rsquo;ll see, the title was an afterthought. The lines loop and cross and dive under and over one another in rhythmic, layered skeins, laid down in pass after pass until the whole surface hums.
      </p>

      <SectionHeader accent={accent} label="No center" title="Look for the focal point. There isn’t one." />
      <p style={proseStyle}>
        Now try to find the <strong>focal point</strong>, the place the picture wants your eye to go. You will fail, and the failure is the point. There is <strong>no center</strong>. Every square inch of the canvas carries roughly equal weight; the top is as busy as the bottom, the left as the right, the corners as the middle. There is no important area and no background area, no near and no far, no climax. Your eye keeps moving and never settles, because there is nowhere built for it to rest. This is what gets called an <strong>allover composition</strong>: the design spread evenly to all four edges, with the weight distributed everywhere at once. It is one of the most genuinely new things in twentieth-century painting, and you are looking right at it.
      </p>

      <SectionHeader accent={accent} label="No object" title="Nothing in here is a picture of anything" />
      <p style={proseStyle}>
        Hunt now for a <strong>thing</strong>: a figure, a face, a horizon, a tree, a window onto any scene at all. There is none. The picture is not <em>of</em> anything. Nothing sits in front of anything else; the usual relationship of a figure standing out against a background (what painters call <strong>figure and ground</strong>) has collapsed entirely, so that foreground and background are one continuous woven surface. The paint refers only to itself and to the act that put it there. This is the part that is genuinely hard to do in front of an unfamiliar painting, because every instinct trained on five centuries of pictures is to read the marks <em>as</em> something. Resist it. There is nothing to find. The marks are the subject.
      </p>

      <SectionHeader accent={accent} label="The marks themselves" title="Drips, pools, spatters, and the bare cloth" />
      <p style={proseStyle}>
        So look at the marks as marks, and you can read the <em>physics</em> of how each one was made. The thin, even, trailing lines are where the liquid enamel streamed off a stick held above the canvas. The fatter, propulsive arcs are where it was flung with a snap of the arm. The small dark blots are <strong>pools</strong>, where paint puddled and dried thick. The fine flecks are <strong>spatters</strong>, flicked off a loaded brush. Each one is the frozen track of a single movement of his arm or his body, which is why people say the painting is a record of an action: it literally is, mark by mark.
      </p>
      <p style={proseStyle}>
        And look, finally, at the gaps. Between the skeins you can see the <strong>raw, unprimed canvas</strong> itself, the pale tan cloth, left bare. That is not a painted background; it is the untouched fabric, doing the job an artist usually fills in. Pollock left it showing on purpose. It means the &ldquo;ground&rdquo; of the picture, the thing everything sits on, is the real material of the picture, in plain sight, not an illusion painted over it. The cloth is part of the work, not under it.
      </p>
    </article>
  )
}

function AutBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Painting had always been a window" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o see why <em>Autumn Rhythm</em> counts as a break and not just an oddity, you have to picture clearly what it broke from. Since the Renaissance, a Western painting was understood as a kind of <strong>window</strong>. You looked through the flat surface into an illusion of space, and inside that space sat a <strong>subject</strong>: a body, a saint, a landscape, a bowl of fruit. The picture had a <strong>figure and a ground</strong> (a thing, and the background it stood out against), a <strong>focal point</strong> the composition was built around, and a clear hierarchy of important areas and lesser ones. Paint described <em>something</em>. Even most earlier abstraction kept a composed center, an edge, a top and bottom, a sense of forms arranged in a space. The window stayed.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The window dissolves" />
      <p style={proseStyle}>
        <em>Autumn Rhythm</em> dissolves all of it at once, and that combination is the break. There is the <strong>allover field</strong> with no focal point, every inch weighted the same, the eye with nowhere to land. There is <strong>no figure and ground</strong>: foreground and background have fused into one continuous woven surface, with nothing in front of anything. And there is <strong>no depicted object</strong> at all: the picture is not of a thing, so there is no window and nothing on the far side of it. Take away the center, take away figure and ground, take away the subject, and what is a painting then? Pollock’s answer is the whole point of him.
      </p>

      <SectionHeader accent={accent} label="The act, made visible" title="The painting is the record of an event" />
      <p style={proseStyle}>
        His answer is that the painting becomes the <strong>record of an act</strong>. With nothing depicted, what the canvas actually carries is the trace of <em>the body that made it</em>: every poured line is the frozen track of a movement, a fling, a step around the canvas on the floor. The subject of the picture is the <strong>act of painting it</strong>. It is, in effect, the physical residue of Pollock moving through time and space over the cloth, painting as a kind of recorded performance. (This is the insight the critic <strong>Harold Rosenberg</strong> reached for, a couple of years later in 1952, when he wrote that for these painters the canvas had become &ldquo;an arena in which to act&rdquo; rather than a space in which to reproduce a thing. The phrase is his, and it came after; but it names what is already happening here.)
      </p>
      <p style={proseStyle}>
        That is the hinge, and it is enormous. Once a painting can be the record of an act rather than the image of a thing, the door is open: to the great fields of pure color the next generation would pour, to the bare non-relational surfaces of Minimalism, to the whole later idea that the <em>process</em> of making could itself be the art. The allover field, the loss of figure and ground, and the act made into the subject, all at once, in one seventeen-foot canvas on a barn floor, is why <em>Autumn Rhythm</em> sits at the front of this story and not in a footnote.
      </p>
    </article>
  )
}

function AutAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The title · 1950–1955" title="It started life as Number 30" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ne thing to clear up before anything else, because the title misleads almost everyone: this painting is <strong>not</strong> a picture of autumn. It does not depict a season, or anything else. And it did not begin life with that name. When Pollock first showed it, at the <strong>Betty Parsons Gallery</strong> in New York in late <strong>1950</strong>, and again at the Museum of Modern Art’s <em>15 Americans</em> show in <strong>1952</strong>, it was simply <strong><em>Number 30</em></strong>. From 1947 on, Pollock <strong>numbered</strong> his pictures instead of naming them, precisely so a title would not tell you what to see or impose a meaning the paint did not contain.
      </p>
      <p style={proseStyle}>
        The lyrical title <strong><em>Autumn Rhythm</em></strong> attached only <strong>later</strong>, by the time of the <strong>Sidney Janis Gallery</strong> show in <strong>1955</strong>. (Some scholars argue the poetic title was Pollock’s own choice; the exact circumstances of the renaming are not pinned to a document, so it is fairest to say the painting was <em>later retitled</em>, not that Pollock sat down and named it in 1955.) Either way, the warm browns and tans that earned it the word &ldquo;Autumn&rdquo; were already on the canvas; the name came afterward, to a picture that was never of a season at all.
      </p>

      <SectionHeader accent={accent} label="The painter · 1956" title="The crash" />
      <p style={proseStyle}>
        Pollock did not have long after this. The drip pictures of 1947&ndash;50 were the peak; the years after were harder, with more drinking and less work. On <strong>11 August 1956</strong>, driving near his home in Springs, drunk, he crashed his car and was killed, at the age of <strong>forty-four</strong>. He had become famous in his own lifetime, splashed across magazines as the wild American painter, but he never made anything that surpassed the canvases of those three or four years, and he never sold most of them for much.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="To the Met, a year after he died" />
      <p style={proseStyle}>
        A year after his death, in <strong>1957</strong>, <em>Autumn Rhythm</em> entered <strong>The Metropolitan Museum of Art</strong>. The Met’s curator <strong>Robert Beverly Hale</strong> arranged the purchase from Pollock’s estate (the price is reported at around $20,000 plus a trade of another Pollock, a figure that is well-sourced but secondary), and it came in through the museum’s <strong>George A. Hearn Fund</strong>, accession number <strong>57.92</strong>. It has hung at the Met ever since, one of the defining American paintings of the century, on permanent view in New York.
      </p>
      <p style={proseStyle}>
        And the label everyone uses for it, <strong>&ldquo;action painting,&rdquo;</strong> only really stuck after the man himself was gone, coined by Harold Rosenberg in 1952 and cemented over the decade that followed. It fits the picture better than most labels fit most pictures: a canvas that is, genuinely, the frozen record of an action. But it arrived from outside, from a critic, after the fact. Pollock’s own word for what he did was plainer. He said he wanted to be <em>in</em> the painting. Stand close to the seventeen-foot web of black and tan and white, with no center and no edge to hold onto, and you can feel what he meant.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'autumn-rhythm': { floor: AutFloor, making: AutMaking, looking: AutLooking, break: AutBreak, afterlife: AutAfterlife },
```
