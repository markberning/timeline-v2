# DRAFT — Umberto Boccioni, *Dynamism of a Cyclist* (1913)

Authored from the fact pack (`work-cyclist-factpack.md`, source of truth) through the
gated art pipeline. Voice modeled on the L'Absinthe work read. PART A = the
`ArtWorkContent` const for splicing into `src/lib/art-content.ts`. PART B = the five
`Cyc`-prefixed JSX `Narrative` components for `art-section-reader.tsx`.

**Fact handling locked per the pack:** owner = the **Gianni Mattioli Collection**; the
"on long-term loan to the Peggy Guggenheim Collection, Venice" credit describes a loan
that ran 1997 to about 2016 and has ENDED (never asserted present-tense); current wall
hedged (recent sources list Museo del Novecento, Milan). **Marinetti** founded Futurism,
not Boccioni. Dims 70 × 95 cm (H × W) → 2 ft 3½ in × 3 ft 1½ in, landscape ~1.36. No
invented early provenance or prices. The 1910 *Technical Manifesto* "dynamic sensation
itself" line is the one verbatim-safe quotation.

---

## PART A — the const (splice into `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Dynamism of a Cyclist (Boccioni, 1913). The Futurism WORK read.
// Authored through the art content pipeline (fact pack → Opus → 5 gates →
// revise). Chapter prose in art-section-reader.tsx NARRATIVES['cyclist']
// (Cyc… prefix). FACT-TRAPS handled per fact pack: OWNER is the Gianni
// Mattioli Collection — the famous "on long-term loan to the Peggy
// Guggenheim, Venice" credit describes a 1997–c.2016 loan that HAS ENDED
// (never present-tense); current wall hedged (recent sources: Museo del
// Novecento, Milan). Marinetti FOUNDED Futurism, not Boccioni. Dims
// 70 × 95 cm = landscape ~1.36, never flipped portrait. No invented early
// provenance / price. The 1910 Technical Manifesto "dynamic sensation
// itself" line is the one verbatim-safe quotation.
// ─────────────────────────────────────────────────────────────
export const CYCLIST: ArtWorkContent = {
  id: 'cyclist',
  name: 'Dynamism of a Cyclist',
  shortName: 'Dynamism of a Cyclist',
  year: 1913,
  artist: 'Umberto Boccioni',
  artistId: 'boccioni',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 3 1/2 in × 3 ft 1 1/2 in',
  location: 'Gianni Mattioli Collection, Milan (recently shown at the Museo del Novecento, Milan)',
  acquired: 'Gianni Mattioli Collection, Milan; on long-term loan to the Peggy Guggenheim Collection, Venice, 1997–c.2016',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 6, total: 9 },
  hook: 'A racing cyclist, head down and hammering forward, with no man and no bicycle left to find, only a single burst of curving force where rider, machine, and rushing air have fused into one speeding shape.',
  heroImage: ART_IMG.boccioniCyclist,
  heroCredit: 'Boccioni, Dynamism of a Cyclist, 1913 · Gianni Mattioli Collection (on long-term loan to the Peggy Guggenheim Collection, Venice, 1997–c.2016)',
  heroAspect: 1.36, // 70 × 95 cm → W/H = 95/70 ≈ 1.357, LANDSCAPE
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1913', k: 'Painted' },
    { v: '2′3½″ × 3′1½″', k: 'Dimensions' },
    { v: 'Mattioli Coll.', k: 'Owner' },
  ],
  sections: [
    { id: 'milan', eyebrow: 'Milan · 1913', dateLabel: '1913', title: 'A poet’s movement, four years on', blurb: 'A Paris newspaper had announced Futurism in 1909; by 1913 the painter Marinetti recruited is in Milan, in a run of "dynamism" canvases, pushing the recognizable subject closer to vanishing than anyone yet had.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1913', title: 'Force lines and a body coming apart', blurb: 'A Divisionist stroke learned from Balla, Cubist faceting picked up in Paris, and the Futurists’ own "force lines," all aimed at one target: not a cyclist, but cycling itself. The theory, made paint.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 3½ in × 3 ft 1½ in', title: 'Watch the body dissolve into speed', blurb: 'Read the painting itself: the head-down lean that is all that survives of the man, the wheel smeared into the arc of its own spin, the diagonal force lines tearing across, the open edges where the rider bleeds into the air he is cutting.', progress: 0.58 },
    { id: 'boccioni', eyebrow: 'Umberto Boccioni', dateLabel: '1882–1916', title: 'The movement’s best painter, dead at 33', blurb: 'Not the founder of Futurism (that was Marinetti) but its leading visual artist and chief theorist, the man who turned the slogans into pictures and a famous striding bronze, killed in a training accident in 1916.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1913–today', title: 'One short step from abstraction', blurb: 'The near-abstract treatment of motion fed straight into Boccioni’s sculpture of the same year and into a century of trying to paint movement itself; the canvas passed to the great collector Gianni Mattioli, was loaned to Venice for two decades, and now sits with the Mattioli Collection in Milan.', progress: 0.96 },
  ],
  provenance: [
    { year: '1913–1916', who: 'Umberto Boccioni (the artist), then his estate', place: 'Milan', note: 'Painted in 1913 during the run of "dynamism" canvases. Boccioni died in August 1916. The early chain of ownership from the artist to Mattioli is not documented in accessible sources, so it is left as a gap rather than invented.', price: null },
    { year: 'by 1949–1977', who: 'Gianni Mattioli', place: 'Milan', note: 'The Milan textile businessman Gianni Mattioli built one of the great private collections of early-twentieth-century Italian art, especially Futurism, with Boccioni at its center. He assembled it mainly in the late 1930s and 1940s, including a major 1949 purchase of 87 works from the Pietro Feroldi collection. The exact date he acquired the Cyclist is not documented.', price: null },
    { year: '1977–today', who: 'Laura Mattioli (Rossi), heir / Gianni Mattioli Collection', place: 'Milan', note: 'Inherited on her father’s death in 1977. An art historian, she arranged the long-term loan of the family’s Futurist masterpieces to Venice.', price: 'inherited' },
    { year: '1997–c.2016', who: 'On long-term loan to the Peggy Guggenheim Collection', place: 'Venice', note: 'Twenty-six works from the Mattioli Collection went on long-term loan to the Peggy Guggenheim Collection, opening 6 September 1997; the Guggenheim’s curators called this canvas "his most beautiful." The loan ran to about 2016. It was a loan, not a change of ownership: the Mattioli Collection remained the owner throughout.', price: 'loan, not sale', museum: true },
    { year: 'c.2016–today', who: 'Gianni Mattioli Collection', place: 'Milan', note: 'After the Venice loan ended, the painting returned to the Mattioli Collection. Recent sources list it as shown at the Museo del Novecento in Milan (on long-term loan from the Mattioli Collection), but no single museum page confirms the present-day wall, so the current location is given with a hedge.', price: '—', museum: true },
  ],
  figures: [
    { name: 'Umberto Boccioni', role: 'The painter', palette: ['#bf3a25', '#3a4a6a', '#1c1208'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Founded Futurism', palette: ['#6a3a2a', '#33231a', '#0e0a06'] },
    { name: 'Giacomo Balla', role: 'Taught Boccioni the Divisionist stroke', palette: ['#8a6a3a', '#3a3020', '#100c08'] },
    { name: 'Henri Bergson', role: 'Philosopher of constant flux', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Gianni Mattioli', role: 'Collector; built the Futurist collection', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The rider, bent into the speed', where: 'Upper area, center-left: the strongest forward-leaning thrust, reading left to right', detail: 'The one foothold of the human subject. Boccioni’s preparatory drawings show a head-down racer crouched forward, "behind in the air," and on the canvas that pose survives only as a direction and a lean, not as a drawn man. You read the rider the way you read a sprinter from across a stadium, as posture and angle before face: a body folded over the bars, all of it pitched forward into the rush. There is no portrait here, no readable face. The man has been boiled down to the single fact of where he is going.' },
    { label: 'The wheel, smeared into its own spin', where: 'Lower portion: the rounded, repeating arc-forms', detail: 'Curved and circular shapes echo the spinning wheel, but go looking for a complete drawn wheel and you will not find one. The circle has been smeared into the arc of its own rotation, the way a spoked wheel turns into a transparent blur the instant it gets up to speed. This is Boccioni refusing to draw the bicycle as a thing standing still long enough to be drawn. He paints the wheel as it actually appears to a moving eye, which is to say, as no fixed wheel at all but as a sweep of curvature.' },
    { label: 'The diagonal force lines', where: 'Driving across the whole canvas, from the lower left up toward the right', detail: 'These long diagonal and curving strokes are the Futurists’ signature device, the linee-forza, or "force lines": lines they claimed showed how an object would resolve itself if it simply followed the tendencies of its own forces. Forget the jargon and just follow them with your eye. They carry the motion across the picture for you, lower-left to upper-right, so that looking at the painting is itself a small act of speeding. The lines are the engine. They are what makes a still canvas feel like it is already three feet down the road.' },
    { label: 'The near-dissolved body', where: 'The center mass, where figure and machine meet', detail: 'Here is the crux of the whole picture. Rider and bicycle are broken into interlocking planes and cones and fused into one shape, and you cannot cleanly say where the man stops and the machine starts. The sources put it flatly: the bicycle, the figure, and the surrounding space "seemingly fuse together in a single form." Try to trace the outline of the cyclist and your finger keeps wandering off into wedges that could be a knee, a frame, a gust of air. That confusion is not a failure of your looking. It is the entire point. Boccioni has welded man and machine into one speeding object.' },
    { label: 'The color planes of speed', where: 'Throughout: the patches of contrasting, clashing hue', detail: 'The form is built from separate planes and strokes of vivid, often clashing color, the dabbed Divisionist touch Boccioni learned from Balla pushed into Cubist faceting. Do not look for a tidy color scheme; there isn’t one. The Futurists never settled a coherent color theory, and it shows, the hues collide rather than harmonize. But read it as energy and the discord starts to work for you: the blues and ochres jostle and refuse to sit still, exactly like the thing they describe. This is color used as a kind of friction, the visual equivalent of a sound that is loud on purpose.' },
    { label: 'No fixed contour', where: 'The outer edges of the form, where it bleeds into the ground around it', detail: 'Look at the outside edge of the cyclist and notice what is missing: there is no closed outline sealing him off from the space around him. The body opens into, and is continued by, the air it is tearing through. This is the idea Boccioni called "plastic dynamism," the object and its environment treated as one continuous whole rather than a figure parked in front of a background. A still portrait draws a hard line and says "the person stops here." This painting refuses that line on principle. The cyclist does not end. He dissolves into his own motion, which is the closest a flat canvas in 1913 had come to painting speed itself.' },
  ],
  lineage: {
    parents: [
      { label: 'Cubism', mode: 'art' },
      { label: 'Divisionism (Balla)', mode: 'art' },
      { label: 'Bergson’s philosophy', mode: 'civ' },
    ],
    children: [
      { label: 'Unique Forms of Continuity in Space', mode: 'art' },
      { label: 'Painting motion itself', mode: 'art' },
      { label: 'Abstraction', mode: 'art' },
    ],
  },
}
```

**Registry splice (coordinator):** add `cyclist: CYCLIST` to `ART_WORK_CONTENT`, and
`cyclist: { milan: CycMilan, making: CycMaking, looking: CycLooking, boccioni: CycBoccioni, afterlife: CycAfterlife }`
to `NARRATIVES`.

---

## PART B — the five chapters (JSX `Narrative` components, `Cyc` prefix)

```tsx
// ─────────────────────────────────────────────────────────────
// Dynamism of a Cyclist (Boccioni, 1913) — the five chapters
// ─────────────────────────────────────────────────────────────
function CycMilan({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1909" title="A movement announced before it had a single painting" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        uturism began as a press release. On <strong>20 February 1909</strong>, an Italian poet named <strong>Filippo Tommaso Marinetti</strong> (1876&ndash;1944; pronounced &ldquo;ma-ree-NET-tee&rdquo;) bought space on the front page of the big Paris newspaper <em>Le Figaro</em> and published the <strong>Manifesto of Futurism</strong> &mdash; a noisy declaration that the past was a museum to be burned down, that speed and machines and danger were beautiful, and that Italy should stop worshipping its own ruins and start worshipping the motorcar. It is worth being precise about who did what, because popular books get it wrong: <strong>Marinetti founded Futurism. He was a poet, not a painter.</strong> When he launched the movement, it did not yet contain a single Futurist painting. The pictures had to be recruited.
      </p>
      <p style={proseStyle}>
        So Marinetti went and found his painters in <strong>Milan</strong>, the industrial capital of northern Italy, all smoke and trams and electric light &mdash; the most modern city in a country famous for being old. Chief among the recruits was a young artist named <strong>Umberto Boccioni</strong> (1882&ndash;1916; pronounced &ldquo;boh-CHO-nee&rdquo;), who had moved to Milan in 1907 and fallen in with Marinetti&rsquo;s circle. Boccioni would become the movement&rsquo;s best painter and its sharpest thinker &mdash; the man who took Marinetti&rsquo;s slogans about speed and turned them into actual oil paint on actual canvas. He is the one we are following here.
      </p>

      <SectionHeader accent={accent} label="Milan · 1913" title="The year the subject almost vanished" />
      <p style={proseStyle}>
        Now jump four years, to <strong>1913</strong>. By this point Boccioni has stopped painting recognizable scenes. Only a little earlier &mdash; in <em>The City Rises</em> (1910&ndash;11) &mdash; he had painted a legible picture: laborers, rearing horses, a city going up, all of it churning but all of it readable as <em>things</em>. By 1913 the readable thing is nearly gone. He is in the middle of a run of canvases he calls his &ldquo;dynamism&rdquo; pictures &mdash; <em>Dynamism of a Human Body</em>, <em>Dynamism of a Soccer Player</em>, <em>Plastic Dynamism: Horse + Houses</em>, and the one we are here for, <em>Dynamism of a Cyclist</em> (in Italian, <em>Dinamismo di un ciclista</em>). Across the whole series the palette gets more vivid, the paint goes on thicker and denser, and the subject is pushed closer to dissolving than at any earlier point in his work.
      </p>
      <p style={proseStyle}>
        The choice of subject is itself the argument. Not a saint, not a king, not a landscape: <strong>a man on a racing bicycle.</strong> The bicycle, by 1913, was already a decades-old machine, but Futurism had decided the modern world &mdash; the bike, the tram, the car, the crowd &mdash; was the only fit subject for a modern painting. And Boccioni did not want to paint a portrait of a cyclist. He wanted to paint <strong>cycling itself</strong>: the event of speeding, not the person doing the speeding. That distinction is the whole picture, and it is what the next chapter is about &mdash; how you take a man on a bike and turn him into a burst of pure motion without losing the fact that he is a man on a bike.
      </p>
    </article>
  )
}

function CycMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The problem" title="How do you paint speed on a thing that cannot move?" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        painting is, by definition, a frozen thing. It hangs on a wall and does not move. For most of Western art history that was fine, because painters were trying to catch a single perfect instant &mdash; the moment the spear strikes, the second the smile holds. Futurism wanted the opposite. It wanted the <em>blur</em>, the whole duration of a motion smeared into one image, the way a galloping dog looks like it has twenty legs or a spinning wheel looks like a transparent disc. The Futurists had said so in print three years earlier. Their <strong>Technical Manifesto of Futurist Painting</strong> &mdash; published in Milan on <strong>11 April 1910</strong>, signed by Boccioni and four other painters &mdash; declared that the gesture they would paint &ldquo;shall no longer be a fixed moment in universal dynamism. It shall simply be <strong>the dynamic sensation itself.</strong>&rdquo;
      </p>
      <p style={proseStyle}>
        That is a beautiful sentence and a genuinely hard assignment. &ldquo;The dynamic sensation itself&rdquo; &mdash; not the cyclist, but the <em>feeling</em> of speeding &mdash; is not a thing you can point a brush at. The <em>Cyclist</em> is Boccioni&rsquo;s attempt, three years later, to actually deliver on it. To do it he reached for three tools and welded them together.
      </p>

      <SectionHeader accent={accent} label="The toolkit" title="Dots from Balla, planes from Paris, lines of his own" />
      <p style={proseStyle}>
        The first tool was the brushstroke itself. Boccioni had learned from the older painter <strong>Giacomo Balla</strong> (1871&ndash;1958) a technique called <strong>Divisionism</strong> &mdash; building a picture out of small separate dabs and strokes of unmixed color rather than smooth blended areas, so the surface vibrates. (It is the Italian cousin of the French dot-painting you may have met under the name Pointillism.) The second tool came from <strong>Paris</strong>, where Boccioni had gone to look at <strong>Cubism</strong> &mdash; the Picasso-and-Braque method of shattering an object into flat geometric facets and showing several of its angles at once. Boccioni took the faceting and threw away the calm: Cubism broke a guitar or a bottle apart while it sat perfectly still on a table, and Boccioni thought that was a waste of a good idea. He wanted the facets <em>moving</em>.
      </p>
      <p style={proseStyle}>
        The third tool was the Futurists&rsquo; own invention, and it is the key to the whole canvas: <strong>force lines</strong>, in Italian <em>linee-forza</em>. These were lines the Futurists claimed showed &ldquo;how an object would resolve itself if it followed the tendencies of its own forces&rdquo; &mdash; long diagonal and curving strokes that carry an object&rsquo;s motion right out into the space around it. Think of the speed lines a cartoonist draws streaming off a running character, except taken seriously and made the literal structure of the picture. In the <em>Cyclist</em>, the force lines are not decoration added on top of the rider. They <em>are</em> the rider, more than his body is. The motion has become the subject and the man has become a side effect of it.
      </p>

      <SectionHeader accent={accent} label="The theory underneath" title="A philosopher who said nothing stands still" />
      <p style={proseStyle}>
        Boccioni had a word for the goal of all this: <strong>plastic dynamism</strong> (<em>dinamismo plastico</em>). &ldquo;Plastic&rdquo; here is the old art-school sense &mdash; having to do with shaping solid form, nothing to do with the material &mdash; and the phrase means his idea that a moving body and the space it tears through are one continuous solid whole, not a figure parked in front of a background. Behind that idea sat a real philosopher the Futurists admired, the Frenchman <strong>Henri Bergson</strong> (1859&ndash;1941), who argued that material objects are never truly static &mdash; that everything is in constant flux and flow, and that our habit of seeing the world as a set of fixed, separate things is a convenient lie our minds tell us. Paint <em>that</em> &mdash; the world as flow rather than as objects &mdash; and you get something close to the <em>Cyclist</em>: a picture in which the most solid-seeming thing, a man on a bike, has been caught in the act of coming apart into pure energy.
      </p>
      <p style={proseStyle}>
        So that is the recipe. Vivid dabbed color, Cubist facets set in motion, force lines doing the real work, all in the service of a philosophy that says nothing ever holds still. The next chapter is where it all lands &mdash; on the canvas, where you can watch a human body dissolve into speed in real time.
      </p>
    </article>
  )
}

function CycLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Small, wide, and almost without a subject" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is not large. It runs about <strong>two feet three inches tall by three feet one inch wide</strong> &mdash; a <strong>landscape</strong> format, wider than it is tall, roughly the size of a modest framed window. That horizontal shape matters: it gives the motion somewhere to go, a track to run left-to-right across, which a tall format would have choked off. Walk up to it and the first thing to register is how little of it is anything you can name. There is no clear man. There is no clear bicycle. There is a wide, charged tangle of curving and slashing shapes in blues and ochres, and your eye has to go to work to find the rider inside it. That difficulty is not a problem to be solved. It is the experience the painting is built to produce.
      </p>

      <SectionHeader accent={accent} label="Find the rider" title="A lean, not a man" />
      <p style={proseStyle}>
        So start by finding what is left of the human being. Look to the <strong>upper part of the canvas, left of center</strong>, where the strongest forward thrust is. You are not going to find a face, or a torso, or two legs pumping. What you will find is a <strong>direction</strong> &mdash; a steep forward lean, a sense of a body folded down over handlebars and pitched into the rush. Boccioni&rsquo;s preparatory drawings show the cyclist as a head-down racer, crouched and &ldquo;behind in the air,&rdquo; and on the finished canvas that entire human being has been reduced to the single fact of <em>leaning forward fast</em>. You read him the way you read a sprinter glimpsed from the far side of a stadium: as a posture and an angle, recognized before any feature. That is the man. He is a lean. Hold onto him, because everything else in the picture is going to try to pull him apart.
      </p>

      <SectionHeader accent={accent} label="The wheel" title="A circle smeared into the arc of its own spin" />
      <p style={proseStyle}>
        Now drop your eye to the <strong>lower portion</strong> of the canvas and look for the bicycle. Again: do not expect to find one. There is no drawn wheel, no frame, no spokes you can count. What there is, low down, is a cluster of <strong>rounded, repeating arc-forms</strong> &mdash; curves that echo a wheel without ever closing into one. Boccioni has done to the wheel exactly what a real spinning wheel does to itself: at speed, a wheel stops being a circle of spokes and becomes a transparent blur, a sweep of curvature with no edges you can pin. He paints the wheel <em>as the moving eye sees it</em>, not as it sits in a bicycle shop. The most mechanical, most precisely circular object in the world has been smeared into the arc of its own rotation.
      </p>

      <SectionHeader accent={accent} label="The force lines" title="The slashes that carry the speed" />
      <p style={proseStyle}>
        Now stop hunting for objects and just let your eye ride the <strong>long diagonal lines</strong> that drive across the whole picture, running from the lower left up toward the right. These are the <strong>force lines</strong> &mdash; the device from the last chapter, the lines that supposedly trace how the object &ldquo;resolves itself&rdquo; along its own momentum. Here is the thing to actually <em>feel</em>: they move your eye for you. You do not look at this painting so much as get swept across it, lower-left to upper-right, the same way the cyclist is moving. The force lines are the painting&rsquo;s engine. They are what makes a stationary rectangle of canvas feel like it is already a body-length down the road and accelerating. Trace one with your eye and you will notice it does not stay inside the rider &mdash; it carries his motion out past him, into the space he hasn&rsquo;t reached yet.
      </p>

      <SectionHeader accent={accent} label="The dissolve" title="Where the man stops and the machine starts, and you can’t tell" />
      <p style={proseStyle}>
        Now go to the <strong>center mass</strong>, where the lean and the wheel and the force lines all collide, and try to do one simple thing: trace the outline of the cyclist. Trace where the man ends and the bicycle begins. <strong>You will not be able to do it.</strong> Your finger will start on what feels like a shoulder and slide off into a wedge that might be a thigh, might be a section of frame, might be a gust of displaced air. Rider and bicycle have been broken into interlocking planes and cones and fused into a single shape &mdash; the sources say it plainly: the bicycle, the figure, and the surrounding space &ldquo;seemingly fuse together in a single form.&rdquo; This is the heart of the whole canvas, and it is worth sitting with. We are used to a painting telling us, with a clean contour, &ldquo;this is the person; that is the background.&rdquo; This one refuses. Man, machine, and the rushing air have been welded into one speeding object, and the welding is so complete that you cannot reverse it with your eye.
      </p>

      <SectionHeader accent={accent} label="The color and the open edge" title="Clashing planes, and a body with no outline" />
      <p style={proseStyle}>
        Two last things, and they finish the dissolve. First, the <strong>color</strong>. The whole form is built from separate planes and strokes of vivid, clashing hue &mdash; the dabbed Divisionist touch pushed into faceted segments &mdash; and you should not go looking for it to harmonize. It doesn&rsquo;t. The Futurists never worked out a coherent color theory, and you can see them not having one: the blues and ochres jostle and refuse to settle. But read the discord as <em>energy</em>, as a deliberate loudness, and it does its job &mdash; color used as friction, the visual version of a noise that is loud on purpose. Second, and most important, look at the <strong>outer edges</strong> of the whole form, where it meets the ground around it. There is <strong>no closed outline</strong>. Nothing seals the cyclist off from the space he is in. His body opens into, and is continued by, the air he is cutting through. This is Boccioni&rsquo;s &ldquo;plastic dynamism&rdquo; made literal: the object and its environment as one continuous whole. A portrait draws a hard line and says <em>the person stops here</em>. This painting draws no such line on principle. And that is the final move, the one that makes the dissolve complete: <strong>the cyclist does not end. He bleeds out into his own motion.</strong> A flat canvas in 1913 had come about as close as a flat canvas can to painting not a fast thing, but speed itself.
      </p>
    </article>
  )
}

function CycBoccioni({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Umberto Boccioni · 1882–1916" title="The painter who turned slogans into pictures" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>U</DropCap>
        mberto Boccioni was born on <strong>19 October 1882</strong> in Reggio Calabria, at the far southern tip of Italy, and moved north to Milan in 1907, where he joined the circle around Marinetti and signed on to Futurism near its very beginning. It is worth repeating the correction from the first chapter, because it is the single most common mistake made about him: <strong>Boccioni did not found Futurism.</strong> Marinetti did, with a newspaper manifesto, in 1909. Boccioni was a <strong>founding signatory of the painters&rsquo; manifestos</strong> &mdash; one of the artists who put his name to the documents &mdash; and he became the movement&rsquo;s leading visual artist and its chief theorist. The difference is real. Marinetti supplied the noise and the philosophy of speed; Boccioni was the one who could actually make a brush do it.
      </p>
      <p style={proseStyle}>
        And he did not stop at painting. The same restless idea that drives the <em>Cyclist</em> &mdash; an object dissolving into its own motion, body and space made one continuous whole &mdash; he carried straight into sculpture, in the same year, 1913. His most famous object is a striding bronze figure whose muscles seem pulled out into wings of wind, a man remade as motion made solid. (We will get to it in the next chapter; it is the three-dimensional twin of the canvas you have just been looking at.) Painter and sculptor at once, writing the theory as he went, Boccioni was the rare artist who was also the movement&rsquo;s best explainer of itself.
      </p>

      <SectionHeader accent={accent} label="The end" title="Killed by a horse, at thirty-three" />
      <p style={proseStyle}>
        The career was short, and it ended with a bitter irony for a man who had spent it glorifying the machine age. When the First World War came, Boccioni &mdash; like Marinetti, who had cheerfully called war &ldquo;the world&rsquo;s only hygiene&rdquo; &mdash; was an enthusiast for it. He enlisted, and was drafted in May 1916. On <strong>17 August 1916</strong>, near Verona, during a cavalry and artillery training exercise, he was <strong>thrown from his horse and trampled</strong>, and died the next day. He was <strong>thirty-three</strong>. The prophet of the motorcar and the speeding bicycle was killed by the oldest machine of war there is, an animal, in a training accident, before the movement he had given its best pictures was a decade old.
      </p>
      <p style={proseStyle}>
        It is hard not to read the <em>Cyclist</em> a little differently once you know that &mdash; a young man&rsquo;s ecstatic painting of speed and force and a body hurtling forward, made by someone who had only three years left. But the picture does not need the biography to work. It needed Boccioni to make it, and then it stood on its own, which is the last part of the story.
      </p>
    </article>
  )
}

function CycAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1913" title="One short step from abstraction" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand back from the <em>Cyclist</em> and you can see how close it is sitting to the edge of a cliff. Strip away the last few clues &mdash; the lean, the arc of the wheel &mdash; and there would be no subject at all, just colored force moving across a rectangle. This is <strong>abstraction</strong> (painting that has given up on showing recognizable things and presents pure shape and color instead), and the <em>Cyclist</em> is one short step away from it. What is fascinating is that Boccioni refused to take that step. He kept the real cyclist in the real modern world, the bicycle as an emblem of modern speed, even as he pushed the figure almost out of existence. The picture insists on being <em>about</em> something even as it nearly becomes about nothing but motion.
      </p>
      <p style={proseStyle}>
        The idea did not stay on the canvas. That same year, 1913, Boccioni took this exact thought &mdash; an object dissolving into its motion, body and space fused &mdash; into three dimensions, in his striding sculpture <em>Unique Forms of Continuity in Space</em>, a walking figure whose body is pulled out into the wind it is making. And the larger ambition behind the <em>Cyclist</em> &mdash; to paint not a fast thing but movement itself &mdash; fed straight into a century of artists trying to do the same: the painting of speed, of the machine, of the world as flow rather than as fixed objects. Whatever else Futurism got wrong (and it got plenty wrong, not least its founder&rsquo;s love affair with war and, later, with Fascism), it taught Western painting a genuinely new trick &mdash; how to show motion happening over time &mdash; and the <em>Cyclist</em> is among the cleanest demonstrations of it.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="From the artist to a great Milan collection" />
      <p style={proseStyle}>
        Now the life of the object. Boccioni painted the <em>Cyclist</em> in 1913 and died in 1916, and the early chain of ownership &mdash; how it traveled from the artist to its great collector &mdash; is not documented in the accessible record, so we will leave that gap honestly empty rather than invent a story to fill it. What is documented is where it ended up: in the hands of <strong>Gianni Mattioli</strong> (1903&ndash;1977), a Milan textile businessman who assembled one of the finest private collections of early-twentieth-century Italian art &mdash; especially Futurism &mdash; with Boccioni at its center. Mattioli built the collection mainly across the late 1930s and 1940s, including a big 1949 purchase of eighty-seven works from another collector, Pietro Feroldi. (The exact date he acquired the <em>Cyclist</em> is, again, not recorded.)
      </p>
      <p style={proseStyle}>
        On Mattioli&rsquo;s death in 1977 the collection passed to his daughter, the art historian <strong>Laura Mattioli</strong>, and it is here that the most famous &mdash; and most misquoted &mdash; line in the painting&rsquo;s record comes from. In <strong>1997</strong>, Laura Mattioli arranged for twenty-six of the family&rsquo;s Futurist masterpieces to go on <strong>long-term loan to the Peggy Guggenheim Collection in Venice</strong>, the small canal-side museum of modern art that the American heiress Peggy Guggenheim had left to the city. The loan opened on 6 September 1997, and the Guggenheim&rsquo;s own curators called this canvas &ldquo;his most beautiful.&rdquo; That is the line you will see attached to the painting everywhere &mdash; &ldquo;on long-term loan to the Peggy Guggenheim Collection, Venice.&rdquo; <strong>It is worth being clear that this describes a loan, not a sale, and that the loan has ended.</strong> The Mattioli Collection remained the owner the whole time, and around <strong>2016</strong> the loan came to a close and the picture left Venice.
      </p>

      <SectionHeader accent={accent} label="Where it is now" title="Back in Milan, with the Mattioli Collection" />
      <p style={proseStyle}>
        So where does the <em>Cyclist</em> hang today? Honestly, the public record is a little soft on this point, and we will not pretend otherwise. The owner is the <strong>Gianni Mattioli Collection</strong>, in Milan. After the Venice loan ended, recent sources list the painting as shown at the <strong>Museo del Novecento</strong> &mdash; Milan&rsquo;s museum of twentieth-century art &mdash; on long-term loan from the Mattioli Collection, though no single authoritative museum page nails down the present-day wall with certainty. What is certain is that the old &ldquo;now at the Peggy Guggenheim, Venice&rdquo; label is out of date: that loan ran from 1997 to about 2016 and is over.
      </p>
      <p style={proseStyle}>
        Which is a fitting place to leave it. A picture about a thing that will not hold still has, true to form, refused to hold still itself &mdash; from a young painter&rsquo;s studio in 1913, through one of the great private collections of Italian modernism, across two decades on the wall of a Venetian palazzo, and back to Milan, the smoky industrial city where Marinetti first went looking for someone who could paint his slogans. He found Boccioni, and Boccioni gave him this: a man on a bicycle abstracted almost out of existence, still hammering forward, more than a century later, and not slowing down.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  cyclist: { milan: CycMilan, making: CycMaking, looking: CycLooking, boccioni: CycBoccioni, afterlife: CycAfterlife },
```

---

## Fact ledger (every concrete claim → fact-pack item)

- Marinetti founded Futurism, *Le Figaro*, 20 Feb 1909, a poet not a painter → §3, §8.2 [DOCUMENTED]
- Boccioni b. 19 Oct 1882 Reggio Calabria, moved to Milan 1907, leading painter/theorist, founding signatory NOT founder → §3 [DOCUMENTED]
- Boccioni d. 17 Aug 1916 near Verona, thrown/trampled by horse in training, age 33, drafted May 1916 → §3 [DOCUMENTED]
- 1913 "dynamism" series (Human Body, Soccer Player, Plastic Dynamism: Horse+Houses), vivid palette / thicker paint / near-dissolution → Beat 1 [DOCUMENTED]
- *The City Rises* 1910–11 as the legible earlier work → Beat 4 [DOCUMENTED]
- Aim = "dynamic sensation of a cyclist moving through time and space rather than a snapshot"; figure/bicycle/space "fuse together in a single form" → Beat 2 [DOCUMENTED]
- Plastic dynamism / *dinamismo plastico*; force lines / *linee-forza* = "how an object would resolve itself if it followed the tendencies of its own forces"; head-down racer "behind in the air" → Beat 3 [DOCUMENTED]
- Bergson, material objects in constant flux → Beat 3 [DOCUMENTED]
- Divisionism from Balla + Cubist plane-segmentation from Paris, Cubism's static calm rejected → Beat 4 [DOCUMENTED]
- Futurists had NO coherent color theory; palette described as vivid/discordant/energetic, never a system → Beat 4, §8.6 [DOCUMENTED]
- *Unique Forms of Continuity in Space*, 1913, sculpture twin → Beat 5 [DOCUMENTED]
- 1910 *Technical Manifesto*, Milan, 11 Apr 1910, signed Boccioni + 4: "the dynamic sensation itself" → §7 [DOCUMENTED, VERBATIM-SAFE]
- Guggenheim curators "his most beautiful" → §7 [DOCUMENTED, attributed not house voice]
- Dims 70×95 cm H×W = 2 ft 3½ in × 3 ft 1½ in, landscape ~1.36 → §1 [DOCUMENTED, converted]
- Owner = Gianni Mattioli Collection; loan to Peggy Guggenheim Venice 1997–c.2016 ENDED; current wall hedged (Museo del Novecento, Milan, unconfirmed) → §0, §6, §8.1 [DOCUMENTED loan / DISPUTED current location — HEDGED, never present-tense]
- Mattioli (1903–77) collection built late 1930s–40s + 1949 Feroldi purchase of 87 works; daughter Laura Mattioli arranged 1997 loan; 26 works, opened 6 Sep 1997 → §3, §6 [DOCUMENTED / DISPUTED formation span, broad framing used]
- Early Boccioni→Mattioli provenance + acquisition date/price = NOT documented → left as explicit gap, no invention → §6, §8.5
- Marinetti "war = the world's only hygiene," later Fascism → FUTURISM hookLong (movement-level, consistent) [DOCUMENTED]

No invented quotes, prices, dates, or provenance links. The only verbatim quotation is the 1910 manifesto line.
