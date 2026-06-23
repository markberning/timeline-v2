# FINAL — Umberto Boccioni, *Dynamism of a Cyclist* (1913)

Resolved from `work-cyclist-draft.md` by folding the three gates (fact, read, frame).
Frame gate = CLEAN. Applied: the fact-gate location FIX (current wall stated with
confidence — Museo del Novecento, Milan, renewable loan from spring 2022 — with the
Venice loan still noted as ended ~2015/16); all read-gate FIXes/BLOCKERs (3
meta-narration hand-offs removed, "plastic dynamism" glossed as a unit, "universal
dynamism" glossed, "faceting" anchored, the two lecture-y correction framings
tightened); and the strong frame-gate NICEs ("best painter"→"foremost painter"; a
one-clause nod that abstraction had multiple simultaneous origins). Kept: Mattioli as
owner, Marinetti as founder, the war/Fascism honesty line, no "first abstract painting"
overclaim. PART A = the `ArtWorkContent` const. PART B = the five `Cyc` chapters.

---

## PART A — the const (splice into `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Dynamism of a Cyclist (Boccioni, 1913). The Futurism WORK read.
// Authored through the art content pipeline (fact pack → Opus → 5 gates →
// revise). Chapter prose in art-section-reader.tsx NARRATIVES['cyclist']
// (Cyc… prefix). FACT-TRAPS handled per fact pack + gates: OWNER is the
// Gianni Mattioli Collection — the famous "on long-term loan to the Peggy
// Guggenheim, Venice" credit describes a 1997–c.2016 loan that HAS ENDED
// (never present-tense). CURRENT WALL is now firmly documented: the
// Mattioli Collection's Futurist works (this one included) moved to the
// Museo del Novecento, Milan, on a renewable long-term loan from spring
// 2022 (The Art Newspaper; Wikipedia infobox). Marinetti FOUNDED Futurism,
// not Boccioni. Dims 70 × 95 cm = landscape ~1.36, never flipped portrait.
// No invented early provenance / price. The 1910 Technical Manifesto
// "dynamic sensation itself" line is the one verbatim-safe quotation.
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
  location: 'Museo del Novecento, Milan (long-term loan from the Gianni Mattioli Collection)',
  acquired: 'Gianni Mattioli Collection, Milan; on long-term loan to the Peggy Guggenheim Collection, Venice, 1997 to c.2016; on long-term loan to the Museo del Novecento, Milan, from 2022',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 6, total: 9 },
  hook: 'A racing cyclist, head down and hammering forward, with no man and no bicycle left to find, only a single burst of curving force where rider, machine, and rushing air have fused into one speeding shape.',
  heroImage: ART_IMG.boccioniCyclist,
  heroCredit: 'Boccioni, Dynamism of a Cyclist, 1913 · Gianni Mattioli Collection, on long-term loan to the Museo del Novecento, Milan',
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
    { id: 'boccioni', eyebrow: 'Umberto Boccioni', dateLabel: '1882–1916', title: 'The movement’s foremost painter, dead at 33', blurb: 'Not the founder of Futurism (that was Marinetti) but its leading visual artist and chief theorist, the man who turned the slogans into pictures and a famous striding bronze, killed in a training accident in 1916.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1913–today', title: 'One short step from abstraction', blurb: 'The near-abstract treatment of motion fed straight into Boccioni’s sculpture of the same year and into a century of trying to paint movement itself; the canvas passed to the great collector Gianni Mattioli, was loaned to Venice for two decades, and now hangs at the Museo del Novecento in Milan.', progress: 0.96 },
  ],
  provenance: [
    { year: '1913–1916', who: 'Umberto Boccioni (the artist), then his estate', place: 'Milan', note: 'Painted in 1913 during the run of "dynamism" canvases. Boccioni died in August 1916. The early chain of ownership from the artist to Mattioli is not documented in accessible sources, so it is left as a gap rather than invented.', price: null },
    { year: 'by 1949–1977', who: 'Gianni Mattioli', place: 'Milan', note: 'The Milan textile businessman Gianni Mattioli built one of the great private collections of early-twentieth-century Italian art, especially Futurism, with Boccioni at its center. He assembled it mainly in the late 1930s and 1940s, including a major 1949 purchase of 87 works from the Pietro Feroldi collection. The exact date he acquired the Cyclist is not documented.', price: null },
    { year: '1977–today', who: 'Laura Mattioli (Rossi), heir / Gianni Mattioli Collection', place: 'Milan', note: 'Inherited on her father’s death in 1977. An art historian, she arranged the long-term loan of the family’s Futurist masterpieces to Venice.', price: 'inherited' },
    { year: '1997–c.2016', who: 'On long-term loan to the Peggy Guggenheim Collection', place: 'Venice', note: 'Twenty-six works from the Mattioli Collection went on long-term loan to the Peggy Guggenheim Collection, opening 6 September 1997; the Guggenheim’s curators called this canvas "his most beautiful." The loan ran to about 2015 or 2016. It was a loan, not a change of ownership: the Mattioli Collection remained the owner throughout.', price: 'loan, not sale', museum: true },
    { year: '2022–today', who: 'On long-term loan to the Museo del Novecento (Gianni Mattioli Collection)', place: 'Milan', note: 'After the Venice loan ended, the Mattioli Collection’s 26 Futurist works, this canvas among them, went to the Museo del Novecento in Milan on a renewable long-term loan beginning in spring 2022. The Mattioli Collection remains the owner; the painting hangs in Milan.', price: 'loan, not sale', museum: true },
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
    { label: 'The color planes of speed', where: 'Throughout: the patches of contrasting, clashing hue', detail: 'The form is built from separate planes and strokes of vivid, often clashing color, the dabbed Divisionist touch Boccioni learned from Balla pushed into Cubist faceting. Do not look for a tidy color scheme; there isn’t one. The Futurists never settled a coherent color theory, and it shows, the hues collide rather than harmonize. But read it as energy and the discord starts to work for you: the cool tones and the warm earth tones jostle and refuse to sit still, exactly like the thing they describe. This is color used as a kind of friction, the visual equivalent of a sound that is loud on purpose.' },
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
        uturism began as a press release. On <strong>20 February 1909</strong>, an Italian poet named <strong>Filippo Tommaso Marinetti</strong> (1876&ndash;1944; pronounced &ldquo;ma-ree-NET-tee&rdquo;) bought space on the front page of the big Paris newspaper <em>Le Figaro</em> and published the <strong>Manifesto of Futurism</strong>, a noisy declaration that the past was a museum to be burned down, that speed and machines and danger were beautiful, and that Italy should stop worshipping its own ruins and start worshipping the motorcar. Popular books get this backwards, so be precise: <strong>Marinetti founded Futurism. He was a poet, not a painter.</strong> When he launched the movement, it did not yet contain a single Futurist painting. The pictures had to be recruited.
      </p>
      <p style={proseStyle}>
        So Marinetti went and found his painters in <strong>Milan</strong>, the industrial capital of northern Italy, all smoke and trams and electric light, the most modern city in a country famous for being old. Chief among the recruits was a young artist named <strong>Umberto Boccioni</strong> (1882&ndash;1916; pronounced &ldquo;boh-CHO-nee&rdquo;), who had moved to Milan in 1907 and fallen in with Marinetti&rsquo;s circle. Boccioni would become the movement&rsquo;s foremost painter and its sharpest thinker, the man who took Marinetti&rsquo;s slogans about speed and turned them into actual oil paint on actual canvas. He is the one we are following here.
      </p>

      <SectionHeader accent={accent} label="Milan · 1913" title="The year the subject almost vanished" />
      <p style={proseStyle}>
        Now jump four years, to <strong>1913</strong>. By this point Boccioni has stopped painting recognizable scenes. Only a little earlier, in <em>The City Rises</em> (1910&ndash;11), he had painted a legible picture: laborers, rearing horses, a city going up, all of it churning but all of it readable as <em>things</em>. By 1913 the readable thing is nearly gone. He is in the middle of a run of canvases he calls his &ldquo;dynamism&rdquo; pictures, <em>Dynamism of a Human Body</em>, <em>Dynamism of a Soccer Player</em>, <em>Plastic Dynamism: Horse + Houses</em>, and the one we are here for, <em>Dynamism of a Cyclist</em> (in Italian, <em>Dinamismo di un ciclista</em>). They came in a concentrated burst across 1913, and across the series the readable subject thins out canvas by canvas: the palette gets more vivid, the paint goes on thicker and denser, and the subject is pushed closer to dissolving than at any earlier point in his work.
      </p>
      <p style={proseStyle}>
        The choice of subject is itself the argument. Not a saint, not a king, not a landscape: <strong>a man on a racing bicycle.</strong> The bicycle, by 1913, was already a decades-old machine, but Futurism had decided the modern world, the bike, the tram, the car, the crowd, was the only fit subject for a modern painting. And Boccioni did not want to paint a portrait of a cyclist. He wanted to paint <strong>cycling itself</strong>: the event of speeding, not the person doing the speeding. That distinction, cycling rather than the cyclist, is the whole picture. The hard part was making it: how do you take a man on a bike and turn him into a burst of pure motion without losing the fact that he is a man on a bike?
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
        painting is, by definition, a frozen thing. It hangs on a wall and does not move. For most of Western art history that was fine, because painters were trying to catch a single perfect instant, the moment the spear strikes, the second the smile holds. Futurism wanted the opposite. It wanted the <em>blur</em>, the whole duration of a motion smeared into one image, the way a galloping dog looks like it has twenty legs or a spinning wheel looks like a transparent disc. The Futurists had said so in print three years earlier. Their <strong>Technical Manifesto of Futurist Painting</strong>, published in Milan on <strong>11 April 1910</strong> and signed by Boccioni and four other painters, declared that the gesture they would paint &ldquo;shall no longer be a fixed moment in universal dynamism. It shall simply be <strong>the dynamic sensation itself.</strong>&rdquo;
      </p>
      <p style={proseStyle}>
        That is a beautiful sentence and a genuinely hard assignment. &ldquo;The dynamic sensation itself,&rdquo; not the cyclist but the <em>feeling</em> of speeding, the world taken as motion rather than as still things, is not a thing you can point a brush at. The <em>Cyclist</em> is Boccioni&rsquo;s attempt, three years later, to actually deliver on it. To do it he reached for three tools and welded them together.
      </p>

      <SectionHeader accent={accent} label="The toolkit" title="Dots from Balla, planes from Paris, lines of his own" />
      <p style={proseStyle}>
        The first tool was the brushstroke itself. Boccioni had learned from the older painter <strong>Giacomo Balla</strong> (1871&ndash;1958) a technique called <strong>Divisionism</strong>, building a picture out of small separate dabs and strokes of unmixed color rather than smooth blended areas, so the surface vibrates. (It is the Italian cousin of the French dot-painting you may have met under the name Pointillism.) The second tool came from <strong>Paris</strong>, where Boccioni had gone to look at <strong>Cubism</strong>, the Picasso-and-Braque method of shattering an object into flat geometric facets and showing several of its angles at once. Boccioni took that faceting, the breaking-into-flat-planes, and threw away the calm: Cubism broke a guitar or a bottle apart while it sat perfectly still on a table, and Boccioni thought that was a waste of a good idea. He wanted the facets <em>moving</em>.
      </p>
      <p style={proseStyle}>
        The third tool was the Futurists&rsquo; own invention, and it is the key to the whole canvas: <strong>force lines</strong>, in Italian <em>linee-forza</em>. These were lines the Futurists claimed showed &ldquo;how an object would resolve itself if it followed the tendencies of its own forces,&rdquo; long diagonal and curving strokes that carry an object&rsquo;s motion right out into the space around it. Think of the speed lines a cartoonist draws streaming off a running character, except taken seriously and made the literal structure of the picture. In the <em>Cyclist</em>, the force lines are not decoration added on top of the rider. They <em>are</em> the rider, more than his body is. The motion has become the subject and the man has become a side effect of it.
      </p>

      <SectionHeader accent={accent} label="The theory underneath" title="A philosopher who said nothing stands still" />
      <p style={proseStyle}>
        Boccioni had a word for the goal of all this: <strong>plastic dynamism</strong> (<em>dinamismo plastico</em>). &ldquo;Plastic&rdquo; here is the old art-school sense, having to do with shaping solid form, nothing to do with the material. <strong>Plastic dynamism</strong>, then, is his name for a single idea: that a moving body and the space it tears through are one continuous solid form, not a figure parked in front of a background. Behind that idea sat a real philosopher the Futurists admired, the Frenchman <strong>Henri Bergson</strong> (1859&ndash;1941), who argued that material objects are never truly static, that everything is in constant flux and flow, and that our habit of seeing the world as a set of fixed, separate things is a convenient lie our minds tell us. Paint <em>that</em>, the world as flow rather than as objects, and you get something close to the <em>Cyclist</em>: a picture in which the most solid-seeming thing, a man on a bike, has been caught in the act of coming apart into pure energy.
      </p>
      <p style={proseStyle}>
        So that is the recipe. Vivid dabbed color, Cubist facets set in motion, force lines doing the real work, all in the service of a philosophy that says nothing ever holds still. The canvas is where it lands, and on it you can watch a human body dissolve into speed in real time.
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
        he painting is not large. It runs about <strong>two feet three inches tall by three feet one inch wide</strong>, a <strong>landscape</strong> format, wider than it is tall, roughly the size of a modest framed window. That horizontal shape matters: it gives the motion somewhere to go, a track to run left-to-right across, which a tall format would have choked off. Walk up to it and the first thing to register is how little of it is anything you can name. There is no clear man. There is no clear bicycle. There is a wide, charged tangle of curving and slashing shapes in vivid, clashing color, and your eye has to go to work to find the rider inside it. That difficulty is not a problem to be solved. It is the experience the painting is built to produce.
      </p>

      <SectionHeader accent={accent} label="Find the rider" title="A lean, not a man" />
      <p style={proseStyle}>
        So start by finding what is left of the human being. Look to the <strong>upper part of the canvas, left of center</strong>, where the strongest forward thrust is. You are not going to find a face, or a torso, or two legs pumping. What you will find is a <strong>direction</strong>, a steep forward lean, a sense of a body folded down over handlebars and pitched into the rush. Boccioni&rsquo;s preparatory drawings show the cyclist as a head-down racer, crouched and &ldquo;behind in the air,&rdquo; and on the finished canvas that entire human being has been reduced to the single fact of <em>leaning forward fast</em>. You read him the way you read a sprinter glimpsed from the far side of a stadium: as a posture and an angle, recognized before any feature. That is the man. He is a lean. Hold onto him, because everything else in the picture is going to try to pull him apart.
      </p>

      <SectionHeader accent={accent} label="The wheel" title="A circle smeared into the arc of its own spin" />
      <p style={proseStyle}>
        Now drop your eye to the <strong>lower portion</strong> of the canvas and look for the bicycle. Again: do not expect to find one. There is no drawn wheel, no frame, no spokes you can count. What there is, low down, is a cluster of <strong>rounded, repeating arc-forms</strong>, curves that echo a wheel without ever closing into one. Boccioni has done to the wheel exactly what a real spinning wheel does to itself: at speed, a wheel stops being a circle of spokes and becomes a transparent blur, a sweep of curvature with no edges you can pin. He paints the wheel <em>as the moving eye sees it</em>, not as it sits in a bicycle shop. The most mechanical, most precisely circular object in the world has been smeared into the arc of its own rotation.
      </p>

      <SectionHeader accent={accent} label="The force lines" title="The slashes that carry the speed" />
      <p style={proseStyle}>
        Now stop hunting for objects and just let your eye ride the <strong>long diagonal lines</strong> that drive across the whole picture, running from the lower left up toward the right. These are the <strong>force lines</strong>, the device from the last chapter, the lines that supposedly trace how the object &ldquo;resolves itself&rdquo; along its own momentum. Here is the thing to actually <em>feel</em>: they move your eye for you. You do not look at this painting so much as get swept across it, lower-left to upper-right, the same way the cyclist is moving. The force lines are the painting&rsquo;s engine. They are what makes a stationary rectangle of canvas feel like it is already a body-length down the road and accelerating. Trace one with your eye and you will notice it does not stay inside the rider; it carries his motion out past him, into the space he hasn&rsquo;t reached yet.
      </p>

      <SectionHeader accent={accent} label="The dissolve" title="Where the man stops and the machine starts, and you can’t tell" />
      <p style={proseStyle}>
        Now go to the <strong>center mass</strong>, where the lean and the wheel and the force lines all collide, and try to do one simple thing: trace the outline of the cyclist. Trace where the man ends and the bicycle begins. <strong>You will not be able to do it.</strong> Your finger will start on what feels like a shoulder and slide off into a wedge that might be a thigh, might be a section of frame, might be a gust of displaced air. Rider and bicycle have been broken into interlocking planes and cones and fused into a single shape; the sources say it plainly: the bicycle, the figure, and the surrounding space &ldquo;seemingly fuse together in a single form.&rdquo; This is the heart of the whole canvas, and it is worth sitting with. We are used to a painting telling us, with a clean contour, &ldquo;this is the person; that is the background.&rdquo; This one refuses. Man, machine, and the rushing air have been welded into one speeding object, and the welding is so complete that you cannot reverse it with your eye.
      </p>

      <SectionHeader accent={accent} label="The color and the open edge" title="Clashing planes, and a body with no outline" />
      <p style={proseStyle}>
        Two last things, and they finish the dissolve. First, the <strong>color</strong>. The whole form is built from separate planes and strokes of vivid, clashing hue, the dabbed Divisionist touch pushed into faceted segments, and you should not go looking for it to harmonize. It doesn&rsquo;t. The Futurists never worked out a coherent color theory, and you can see them not having one: the cool tones and the warm earth tones jostle and refuse to settle. But read the discord as <em>energy</em>, as a deliberate loudness, and it does its job, color used as friction, the visual version of a noise that is loud on purpose. Second, and most important, look at the <strong>outer edges</strong> of the whole form, where it meets the ground around it. There is <strong>no closed outline</strong>. Nothing seals the cyclist off from the space he is in. His body opens into, and is continued by, the air he is cutting through. This is Boccioni&rsquo;s &ldquo;plastic dynamism&rdquo; made literal: the object and its environment as one continuous whole. A portrait draws a hard line and says <em>the person stops here</em>. This painting draws no such line on principle. And that is the final move, the one that makes the dissolve complete: <strong>the cyclist does not end. He bleeds out into his own motion.</strong> A flat canvas in 1913 had come about as close as a flat canvas can to painting not a fast thing, but speed itself.
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
        mberto Boccioni was born on <strong>19 October 1882</strong> in Reggio Calabria, at the far southern tip of Italy, and moved north to Milan in 1907, where he joined the circle around Marinetti and signed on to Futurism near its very beginning. It is the single most common mistake made about him, so it is worth saying flatly: <strong>Boccioni did not found Futurism.</strong> Marinetti did, with a newspaper manifesto, in 1909. Boccioni was a <strong>founding signatory of the painters&rsquo; manifestos</strong>, one of the artists who put his name to the documents, and he became the movement&rsquo;s leading visual artist and its chief theorist. The difference is real. Marinetti supplied the noise and the philosophy of speed; Boccioni was the one who could actually make a brush do it.
      </p>
      <p style={proseStyle}>
        And he did not stop at painting. The same restless idea that drives the <em>Cyclist</em>, an object dissolving into its own motion, body and space made one continuous whole, he carried straight into sculpture, in the same year, 1913. His most famous object is a striding bronze figure whose muscles seem pulled out into wings of wind, a man remade as motion made solid. Painter and sculptor at once, writing the theory as he went, Boccioni was the rare artist who was also the movement&rsquo;s best explainer of itself.
      </p>

      <SectionHeader accent={accent} label="The end" title="Killed by a horse, at thirty-three" />
      <p style={proseStyle}>
        The career was short, and it ended with a bitter irony for a man who had spent it glorifying the machine age. When the First World War came, Boccioni, like Marinetti, who had cheerfully called war &ldquo;the world&rsquo;s only hygiene,&rdquo; was an enthusiast for it. He enlisted, and was drafted in May 1916. On <strong>17 August 1916</strong>, near Verona, during a cavalry and artillery training exercise, he was <strong>thrown from his horse and trampled</strong>, and died the next day. He was <strong>thirty-three</strong>. The prophet of the motorcar and the speeding bicycle was killed by the oldest machine of war there is, an animal, in a training accident, before the movement he had given its best pictures was a decade old.
      </p>
      <p style={proseStyle}>
        It is hard not to read the <em>Cyclist</em> a little differently once you know that, a young man&rsquo;s ecstatic painting of speed and force and a body hurtling forward, made by someone who had only three years left. But the picture does not need the biography to work. It needed Boccioni to make it, and then it stood on its own, which is the last part of the story.
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
        tand back from the <em>Cyclist</em> and you can see how close it is sitting to the edge of a cliff. Strip away the last few clues, the lean, the arc of the wheel, and there would be no subject at all, just colored force moving across a rectangle. This is <strong>abstraction</strong> (painting that has given up on showing recognizable things and presents pure shape and color instead), a frontier several painters were crossing at almost the same moment, among them Kandinsky, Kupka, and Delaunay, and the <em>Cyclist</em> is one short step away from it. What is fascinating is that Boccioni refused to take that step. He kept the real cyclist in the real modern world, the bicycle as an emblem of modern speed, even as he pushed the figure almost out of existence. The picture insists on being <em>about</em> something even as it nearly becomes about nothing but motion.
      </p>
      <p style={proseStyle}>
        The idea did not stay on the canvas. That same year, 1913, Boccioni took this exact thought, an object dissolving into its motion, body and space fused, into three dimensions, in his striding sculpture <em>Unique Forms of Continuity in Space</em>, a walking figure whose body is pulled out into the wind it is making. And the larger ambition behind the <em>Cyclist</em>, to paint not a fast thing but movement itself, fed straight into a century of artists trying to do the same: the painting of speed, of the machine, of the world as flow rather than as fixed objects. Whatever else Futurism got wrong (and it got plenty wrong, not least its founder&rsquo;s love affair with war and, later, with Fascism), it taught Western painting a genuinely new trick, how to show motion happening over time, and the <em>Cyclist</em> is among the cleanest demonstrations of it.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="From the artist to a great Milan collection" />
      <p style={proseStyle}>
        Now the life of the object. Boccioni painted the <em>Cyclist</em> in 1913 and died in 1916, and the early chain of ownership, how it traveled from the artist to its great collector, is not documented in the accessible record, so we will leave that gap honestly empty rather than invent a story to fill it. What is documented is where it ended up: in the hands of <strong>Gianni Mattioli</strong> (1903&ndash;1977), a Milan textile businessman who assembled one of the finest private collections of early-twentieth-century Italian art, especially Futurism, with Boccioni at its center. Mattioli built the collection mainly across the late 1930s and 1940s, including a big 1949 purchase of eighty-seven works from another collector, Pietro Feroldi. (The exact date he acquired the <em>Cyclist</em> is, again, not recorded.)
      </p>
      <p style={proseStyle}>
        On Mattioli&rsquo;s death in 1977 the collection passed to his daughter, the art historian <strong>Laura Mattioli</strong>, and it is here that the most famous, and most misquoted, line in the painting&rsquo;s record comes from. In <strong>1997</strong>, Laura Mattioli arranged for twenty-six of the family&rsquo;s Futurist masterpieces to go on <strong>long-term loan to the Peggy Guggenheim Collection in Venice</strong>, the small canal-side museum of modern art that the American heiress Peggy Guggenheim had left to the city. The loan opened on 6 September 1997, and the Guggenheim&rsquo;s own curators called this canvas &ldquo;his most beautiful.&rdquo; That is the line you will see attached to the painting everywhere: &ldquo;on long-term loan to the Peggy Guggenheim Collection, Venice.&rdquo; <strong>It is worth being clear that this describes a loan, not a sale, and that the loan has ended.</strong> The Mattioli Collection remained the owner the whole time, and around <strong>2015 or 2016</strong> the loan came to a close and the picture left Venice.
      </p>

      <SectionHeader accent={accent} label="Where it is now" title="Back in Milan, at the Museo del Novecento" />
      <p style={proseStyle}>
        So where does the <em>Cyclist</em> hang today? In <strong>Milan</strong>, where it started. After the Venice loan ended, the Mattioli Collection&rsquo;s twenty-six Futurist works, this canvas among them, went on a renewable long-term loan to the <strong>Museo del Novecento</strong>, Milan&rsquo;s museum of twentieth-century art, beginning in the spring of <strong>2022</strong>. The owner is still the <strong>Gianni Mattioli Collection</strong>; the painting simply hangs in the city it was made in rather than across the water in Venice. The old &ldquo;now at the Peggy Guggenheim, Venice&rdquo; label you may still see is out of date: that loan ran from 1997 to about 2015 and is over.
      </p>
      <p style={proseStyle}>
        Which is a fitting place to leave it. A picture about a thing that will not hold still has, true to form, refused to hold still itself: from a young painter&rsquo;s studio in 1913, through one of the great private collections of Italian modernism, across two decades on the wall of a Venetian palazzo, and back to Milan, the smoky industrial city where Marinetti first went looking for someone who could paint his slogans. He found Boccioni, and Boccioni gave him this: a man on a bicycle abstracted almost out of existence, still hammering forward, more than a century later, and not slowing down.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  cyclist: { milan: CycMilan, making: CycMaking, looking: CycLooking, boccioni: CycBoccioni, afterlife: CycAfterlife },
```

---

## Resolution ledger (gate finding → action)

**FACT gate (PASS + 1 FIX):**
- [FIX] Current-location over-hedge → RESOLVED. `location` now states "Museo del Novecento, Milan (long-term loan from the Gianni Mattioli Collection)" with confidence; `acquired` + heroCredit + provenance updated; the soft "no single page nails it down" framing replaced with the documented spring-2022 renewable loan. Venice loan still bounded and stated as ended ~2015/16. Owner stays the Mattioli Collection (not Laura personally, per the sub-note).
- [NICE] "6 September 1997" exact day → kept (named primary source, low risk).
- [NICE] death sequence, Feroldi 87 works → unchanged, already correct.

**READ gate (PASS WITH FIXES):**
- [BLOCKER] Meta-narration, CycMilan end → RESOLVED (rewritten to "That distinction… is the whole picture. The hard part was making it: how do you…", no chapter-pointer).
- [BLOCKER] Meta-narration, CycMaking end → RESOLVED ("The canvas is where it lands, and on it you can watch…", "the next chapter" dropped).
- [BLOCKER] "plastic dynamism" under-glossed as a unit → RESOLVED (added "Plastic dynamism, then, is his name for a single idea: that a moving body and the space it tears through are one continuous solid form…").
- [FIX] "popular books get it wrong" lecture-y → RESOLVED ("Popular books get this backwards, so be precise:").
- [FIX] "the correction from the first chapter" narrates structure → RESOLVED ("It is the single most common mistake made about him, so it is worth saying flatly:").
- [FIX] Forward-pointer + redundant sculpture intro (CycBoccioni parenthetical) → RESOLVED (parenthetical removed; sculpture stays unnamed here, named as payoff in CycAfterlife).
- [FIX] "universal dynamism" rides in the quote unglossed → RESOLVED (post-quote unpacking now reads "the world taken as motion rather than as still things").
- [FIX] "faceting" half-step past its anchor → RESOLVED ("Boccioni took that faceting, the breaking-into-flat-planes, and threw away the calm").
- [FIX/LOOKING] "blues and ochres" asserted 3× as a specific palette → softened to "vivid, clashing color" / "cool tones and warm earth tones" in chapter + annotation, so no specific palette is asserted as fact.

**FRAME gate (CLEAN):**
- [NICE-2] one-clause nod to abstraction's simultaneous origins → APPLIED in CycAfterlife (Kandinsky, Kupka, Delaunay), the gate's web-verified safe wording.
- [NICE-3] "best painter" → "foremost painter" → APPLIED in the boccioni section title + blurb (and "best painter" in CycMilan changed to "foremost painter"). "best explainer of itself" kept (not a painting-rank superlative).
- [NICE-1] dynamism-series "concentrated burst" → APPLIED in CycMilan.
- Kept (no change): Mattioli owner, Marinetti founder, war/Fascism honesty line (both instances), no "first abstract painting" overclaim.

**Style invariants honored:** imperial dimensions only; no literal em-dash in new prose (JSX uses `&mdash;`/`&ndash;` entities only inside the verbatim hyphenated-life-date spans and the existing pronunciation glosses; new connective punctuation uses commas/colons); verbatim manifesto quote punctuation preserved exactly ("shall no longer be a fixed moment in universal dynamism. It shall simply be the dynamic sensation itself.").
