# DRAFT — Luigi Russolo, *Dynamism of an Automobile*, 1912–13 (work read)

Authored from `work-automobile-factpack.md` (source of truth) in the absinthe house voice.
Imperial dims only; no literal `—` in new prose (HTML-entity `&mdash;` / `&ndash;` where a dash is wanted);
verbatim quote punctuation preserved; born-verified figures only. Date = **1912–13** (canvas signed 1911 [sic]).
NOT committed, NOT built.

---

## PART A — the const (splice into `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Dynamism of an Automobile (Automobile in corsa / Dynamisme
// d'une automobile), Luigi Russolo, 1912–13, Centre Pompidou (MNAM),
// Paris. The Futurism chain's near-abstract speed canvas, by the painter
// who quit the brush in 1913 to invent noise music (The Art of Noises +
// the intonarumori). Authored through the art content pipeline
// (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['automobile'] (Aut… prefix).
// FACT HANDLING per fact pack: DATE it 1912–13 (canvas signed "1911" [sic],
// museum dates 1912–13 — note the discrepancy); Russolo signed the 1910
// PAINTERS' manifestos, NOT Marinetti's 1909 founding text; quote ONE cited
// Marinetti translation, never a composite; provenance gap Russolo→Sonia
// Delaunay is REAL — do not invent intermediate owners.
// ─────────────────────────────────────────────────────────────
export const AUTOMOBILE: ArtWorkContent = {
  id: 'automobile',
  name: 'Dynamism of an Automobile',
  shortName: 'Dynamism of an Automobile',
  year: 1913,
  artist: 'Luigi Russolo',
  artistId: 'russolo',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 5 3/4 in × 4 ft 7 1/8 in',
  location: 'Centre Pompidou (Musée national d’art moderne), Paris',
  acquired: 'Gift of Sonia Delaunay, 1949 (inv. AM 2917 P)',
  accent: FUTURISM.accent, // ART_ACCENTS.rust
  chain: { name: 'Works of Futurism', index: 7, total: 9 },
  hook: 'A car dissolving into the speed it makes, painted by the Futurist who would soon quit the brush, build machines that howled and roared, and invent noise music.',
  heroImage: ART_IMG.russoloAutomobile,
  heroCredit: 'Russolo, Dynamism of an Automobile, 1912–13 · Centre Pompidou, Paris',
  heroAspect: 1.32, // 106 × 140 cm → W/H ≈ 1.32 (landscape)
  heroFit: 'contain', // the whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1912–13', k: 'Painted' },
    { v: '3′5¾″ × 4′7⅛″', k: 'Dimensions' },
    { v: 'Centre Pompidou', k: 'Now at' },
  ],
  sections: [
    { id: 'painter', eyebrow: 'Milan · 1910', dateLabel: '1910', title: 'The painter who would become the noise man', blurb: 'A boy from a musical family who picked up a brush instead of an organ, befriended Boccioni, and signed the Futurist painters’ manifestos of 1910, joining a movement that worshipped the machine, the city, and above all speed.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1912–13', title: 'Painting the roar', blurb: 'Futurism’s founder said a roaring racing car was more beautiful than an ancient Greek goddess. This canvas is Russolo trying to put that idea in oil paint, using the movement’s own invention, the force-line, to paint not a car but the speed a car makes.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '3 ft 5¾ in × 4 ft 7⅛ in', title: 'Find the car. You can’t.', blurb: 'Nested arrowheads driving across a wide canvas, a body shattered into faceted planes, color laid in flat stepping bands, and a structure built out of one repeated shape, the wedge, until the painting itself becomes a diagram of acceleration.', progress: 0.58 },
    { id: 'noise', eyebrow: 'The bridge', dateLabel: '1913', title: 'He quits painting to play the roar', blurb: 'In 1913 Russolo largely set the brush aside, wrote The Art of Noises, and built the intonarumori, hand-cranked boxes that howled and gurgled and roared. The painting and the noise machines are two attacks on the same target: the modern machine’s energy.', progress: 0.80 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1914–today', title: 'The car, the canvas, and the gift', blurb: 'Shown in Florence and London before the war, signed with a date the museum won’t accept, and given to the French nation in 1949 by a woman who was herself a great painter of speed and color, Sonia Delaunay.', progress: 0.96 },
  ],
  provenance: [
    { year: '1912–13 → ?', who: 'Luigi Russolo (the artist)', place: 'Milan / Italy', note: 'Painted 1912–13 (the canvas is signed and dated “1911,” which the museum marks [sic] and dates the work two years later). Shown at the Florence Futurist exhibition, 1913–14, and the London Futurist exhibition at the Doré Galleries, 1914. The chain of owners between Russolo and Sonia Delaunay is not documented and is left as a gap, not guessed.', price: null },
    { year: '? – 1949', who: 'Sonia Delaunay', place: 'Paris', note: 'Held by the painter Sonia Delaunay-Terk, a co-founder of Orphism, before her gift. How and when she acquired it is not recorded in the museum’s file, so it is left blank rather than invented.', price: null },
    { year: '1949 – today', who: 'Musée national d’art moderne (Centre Pompidou)', place: 'Paris', note: 'Gift of Sonia Delaunay, 1949. Inv. AM 2917 P. On the Pompidou collection.', price: 'gift to the museum', museum: true },
  ],
  figures: [
    { name: 'Luigi Russolo', role: 'The painter, then the noise man', palette: ['#bf2f25', '#3a2a24', '#140d0a'] },
    { name: 'F. T. Marinetti', role: 'Founded Futurism, 1909', palette: ['#8a2018', '#2e2018', '#120c08'] },
    { name: 'Umberto Boccioni', role: 'Lead painter · force-line theory', palette: ['#6a3a2a', '#332420', '#0e0a08'] },
    { name: 'Ugo Piatti', role: 'Co-built the noise machines', palette: ['#7a6a44', '#3e3320', '#12100a'] },
    { name: 'Sonia Delaunay', role: 'Painter · gave it to France, 1949', palette: ['#c79338', '#8a1c1c', '#0d0606'] },
  ],
  annotations: [
    { label: 'The arrow / chevron force-lines', where: 'Repeated across the canvas, the nested V-shaped wedges all pointing the way the car is going', detail: 'These nested arrowheads are the force-lines (linee-forza), the Futurist device for carrying an object’s energy out into the space around it. Stacked like a row of chevrons, they do not describe the car; they describe its push. They are the single most important thing on the canvas, because they are how a still painting is made to move.' },
    { label: 'The dissolved car body', where: 'The denser knot of faceted, overlapping planes from which the wedges spring', detail: 'The actual vehicle is barely a vehicle. Its body shatters into overlapping shards and planes, so you read “car” more from the title and the thrust than from any fender, wheel, or windscreen. The subject is the speed, not the machine, and the machine has been let go almost entirely.' },
    { label: 'The thrust, driving one way', where: 'The overall lean and sweep of the wedges and planes across the wide canvas', detail: 'The whole composition leans and drives in one direction, so your eye is pulled along the very path the car takes. On a canvas wider than it is tall, the landscape format itself becomes a runway, and the picture spends its width the way the car spends a straightaway.' },
    { label: 'The color planes', where: 'The bands and shards of color stepping back from the leading edges', detail: 'Color is laid in flat-ish planes rather than modelled into rounded, solid form, each plane reading like a stage in the car’s passage, one position after another. It is closer to a diagram of motion, a stop-frame stack, than to a portrait of a thing sitting still.' },
    { label: 'The wedge composition', where: 'The way the wedges fan out from the dense core toward the open field ahead', detail: 'The picture is built out of one shape, the wedge, multiplied and rotated and fanned forward, so the structure of the painting is the structure of acceleration itself. Find the repeated wedge and you have found the picture’s skeleton; everything else hangs on it.' },
    { label: 'Speed as form', where: 'Anywhere you try, and fail, to find a recognizable automobile', detail: 'Step back and there is no clear car to point at, only the sensation of one tearing past. That refusal to render the object, in favor of rendering the experience of the object moving, is the whole Futurist wager, and it pushes this canvas right up to the edge of pure abstraction.' },
  ],
  lineage: {
    parents: [
      { label: 'Cubism’s faceted planes', mode: 'art' },
      { label: 'The chronophotograph', mode: 'civ' },
      { label: 'Boccioni’s dynamism', mode: 'art' },
    ],
    children: [
      { label: 'Abstract art', mode: 'art' },
      { label: 'Noise music', mode: 'civ' },
      { label: 'The machine aesthetic', mode: 'civ' },
    ],
  },
}
```

**Note for the coordinator (registry):** add `automobile: { painter: AutPainter, making: AutMaking, looking: AutLooking, noise: AutNoise, afterlife: AutAfterlife }` to `NARRATIVES`, and register `AUTOMOBILE` in `ART_WORK_CONTENT`. (`year: 1913` is the sort key the chain uses; the displayed date string is `1912–13` everywhere prose and stats appear, per the date dispute.)

---

## PART B — the five chapters (JSX, absinthe voice; `Aut`-prefixed)

```tsx
// ─────────────────────────────────────────────────────────────
// Dynamism of an Automobile (Russolo, 1912–13) — the five chapters
// ─────────────────────────────────────────────────────────────
function AutPainter({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Milan · 1910" title="The painter who would become the noise man" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        uigi Russolo was born into sound. His father was a church organist; two of his older brothers studied at the <strong>Milan Conservatory</strong>, the city&rsquo;s great music school. By every reasonable expectation he should have ended up at a keyboard. Instead he picked up a brush, moved to Milan, and trained as a <strong>painter</strong>. Hold that fact in one hand, because in the other hand we are going to put the thing he is famous for, which is not painting at all, and the gap between the two is the whole story of this picture.
      </p>
      <p style={proseStyle}>
        At the very end of <strong>1909</strong> Russolo fell in with a young painter named <strong>Umberto Boccioni</strong> (pronounced &ldquo;boh-CHOH-nee&rdquo;), who would become the most important Futurist artist of them all, and through Boccioni he joined the founding circle of a brand-new movement. The movement was <strong>Futurism</strong>, and it had been launched the way you launch a product, with an announcement, by a poet named <strong>Filippo Tommaso Marinetti</strong> (&ldquo;ma-ree-NET-tee&rdquo;). In <strong>1910</strong> Russolo put his signature on the two documents that turned Futurism from a poet&rsquo;s press release into a painters&rsquo; program: the <em>Manifesto of the Futurist Painters</em> (February 1910) and the <em>Technical Manifesto of Futurist Painting</em> (1910), signing alongside Boccioni and three others, <strong>Carlo Carr&agrave;, Giacomo Balla, and Gino Severini</strong>.
      </p>
      <p style={proseStyle}>
        One small precision, because the popular books get it wrong and you should not. Russolo did <strong>not</strong> sign Marinetti&rsquo;s famous <strong>1909</strong> manifesto, the literary one that launched the whole thing in a Paris newspaper. That was Marinetti&rsquo;s own solo opening shot. Russolo&rsquo;s name is on the <em>painters&rsquo;</em> manifestos of <strong>1910</strong>, a year later. If you ever see &ldquo;Russolo signed the 1909 manifesto,&rdquo; you now know it is sloppy. The poet went first and alone; the painters signed up afterward.
      </p>

      <SectionHeader accent={accent} label="The creed" title="The machine, the city, and above all speed" />
      <p style={proseStyle}>
        So what had Russolo signed up for? Futurism was, in plain terms, a movement in love with the modern industrial world and impatient with everything old. It worshipped the machine, the electric-lit city, the factory, the crowd, and <strong>above all speed</strong>. Its painters wanted to do something painting had never quite managed: to show <em>motion happening over time</em>, not a single frozen instant but the whole rushing passage of a thing through space, a dog&rsquo;s legs blurred into a fan, a building site churning, a body smeared into the lines of its own movement.
      </p>
      <p style={proseStyle}>
        It is worth saying once, plainly, that this was not a gentle program. The 1909 manifesto did not only celebrate cars and cities; it glorified war as &ldquo;the world&rsquo;s only hygiene,&rdquo; sneered at museums and women, and rang with a violence that was part of the appeal. Marinetti would go on, after the First World War, to help found the Italian Fascist movement. The art is genuinely thrilling, the worship of force genuinely ugly, and both are true at the same time, which is the honest way to hold Futurism. For now keep the part that built this painting: the cult of speed, and the conviction that the racing car was the new century&rsquo;s most beautiful object.
      </p>
    </article>
  )
}

function AutMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The idea" title="A racing car, more beautiful than a goddess" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he most quoted line Futurism ever produced is about a car. In the <em>Manifesto of Futurism</em>, published in French on the front page of the Paris newspaper <em>Le Figaro</em> on <strong>20 February 1909</strong>, Marinetti wrote, in point four:
      </p>
      <p style={{ ...proseStyle, margin: '0 0 14px', paddingLeft: 16, borderLeft: `3px solid ${accent}` }}>
        &ldquo;We affirm that the world&rsquo;s magnificence has been enriched by a new beauty: the beauty of speed. A racing car whose hood is adorned with great pipes, like serpents of explosive breath&mdash;a roaring car that seems to ride on grapeshot&mdash;is more beautiful than the <em>Victory of Samothrace</em>.&rdquo;
      </p>
      <p style={proseStyle}>
        Read that the way a Parisian in 1909 would have. The <strong><em>Victory of Samothrace</em></strong> is one of the most beloved sculptures on Earth, a winged marble goddess from the second century B.C. that stands at the top of a grand staircase in the <strong>Louvre</strong>, the great Paris museum, with her robes blown back as if she had just landed. To say a <em>motorcar</em> was more beautiful than <em>her</em> was a calculated outrage, the kind of sentence engineered to make a respectable reader spit out his coffee. (Translators have fought over the exact words ever since, &ldquo;grapeshot&rdquo; or &ldquo;machine-gun fire,&rdquo; &ldquo;Victory&rdquo; or &ldquo;Winged Victory,&rdquo; so the version above is one careful published rendering, not a fact carved in marble.) But the provocation underneath the words is clear enough: the new age has a new beauty, and it has an engine.
      </p>
      <p style={proseStyle}>
        This painting is Russolo taking that sentence at its word. The Futurist program had declared the racing car the most beautiful thing of the modern age; Russolo set out to <strong>paint the car&rsquo;s beauty, which is its speed</strong>. Not a portrait of a car, the way a coachbuilder might want it, gleaming and parked. The opposite. He wanted the thing you cannot photograph, the roar and the rush, the way a car at full throttle stops being an object and becomes a streak of force tearing a hole in the air.
      </p>

      <SectionHeader accent={accent} label="The method" title="The force-line, or how to paint a verb" />
      <p style={proseStyle}>
        To do it, Russolo reached for the device the Futurist painters had invented for exactly this problem: the <strong>force-line</strong>, in Italian the <em>linea-forza</em>. A force-line is a directional line that carries an object&rsquo;s movement and energy out past the edges of the object itself, into the space all around it, so that the painting shows not a frozen pose but the <em>passage</em> of a thing through space. Boccioni&rsquo;s <em>Technical Manifesto</em> of 1910 had called for putting &ldquo;the spectator in the centre of the picture&rdquo; and rendering &ldquo;universal dynamism&rdquo;, by which they meant: stop painting nouns, start painting verbs. A normal painter draws a car. A Futurist draws <em>driving</em>.
      </p>
      <p style={proseStyle}>
        Picture the difference with a humbler example. If you wanted to paint a thrown stone the ordinary way, you would paint a stone, sitting still, and trust the title to tell us it was thrown. The Futurist way is to paint the whole arc, the streak, the wind it shoves aside, so the throw is on the canvas and the stone is almost beside the point. Russolo built this picture out of force-lines the same way, repeated wedges and arrowheads driving across the canvas, each one a little vector of the car&rsquo;s push. By the time he was done, the car had nearly disappeared into the speed it was making, which was precisely the plan.
      </p>
      <p style={proseStyle}>
        And here is the wry footnote the catalogue keeps. Russolo signed and dated the canvas <strong>1911</strong>, in paint, in his own hand. The museum that owns it today does not believe him; it dates the work <strong>1912&ndash;13</strong> and marks his painted date with a flat little scholarly <em>[sic]</em>, the curatorial equivalent of a raised eyebrow. So the picture carries two dates at once, the artist&rsquo;s and the museum&rsquo;s, and we go with the museum&rsquo;s, while enjoying the small fact that even the date on a Futurist painting refuses to sit still.
      </p>
    </article>
  )
}

function AutLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Find the car. You can’t." first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the size and shape, because the shape is doing work before any of the paint does. The canvas is about <strong>three and a half feet tall and four and a half feet wide</strong>, noticeably wider than it is tall, a <strong>landscape format</strong>. That is not an accident. A car drives <em>across</em>, and Russolo gave it a canvas built like a stretch of road, a wide horizontal field for the thing to cross. The format itself is a runway.
      </p>
      <p style={proseStyle}>
        Now try, honestly, to find the car. Go ahead and look for a wheel, a hood, a headlamp, a windscreen, the way you would in any normal picture of an automobile. You will not really find one. The vehicle has been <strong>shattered into faceted planes</strong>, broken into overlapping shards of form the way a sheet of glass breaks, so that there is no clean fender to point at and say <em>there, that is the car</em>. You read &ldquo;car&rdquo; from the title, and from the thrust, and from a denser knot of planes near the heart of the picture, but the machine as a recognizable object has nearly been let go. This is deliberate, and it is the first thing to surrender to: the subject of this painting is not a car. It is what a car <em>does</em>.
      </p>

      <SectionHeader accent={accent} label="The wedges" title="A picture built out of arrowheads" />
      <p style={proseStyle}>
        So what <em>is</em> on the canvas, if not a car? Wedges. Arrowheads. The picture is built, over and over, out of a single repeated shape: a <strong>V-shaped wedge</strong>, a chevron, nested and stacked and fanned out, all of them aimed the same way, in the direction the car is travelling. These are the <strong>force-lines</strong> from the last chapter made visible, the <em>linee-forza</em>, and here is how to actually <em>see</em> them do their job. Pick one wedge near the dense core of the picture. Follow the arrowheads outward from it, the way you would follow a row of road signs, each one a little farther along, a little more open. You are not looking at the shape of a car. You are looking at the shape of its <em>push</em>, the energy peeling off the front of the machine and spraying out into the air ahead of it. The car is not <em>in</em> the picture so much as the picture is the car&rsquo;s <strong>wake</strong>.
      </p>
      <p style={proseStyle}>
        And the wedges all lean. The whole composition tilts and drives one way across that wide canvas, so your eye does not get to sit calmly in the middle and admire; it gets <em>caught</em> by the slant of the wedges and pulled along the same line the car takes, shoved from the denser, busier end toward the open field ahead. You travel the painting the way the car travels the road. That is the trick of the thing. A still image, oil dried hard on cloth a century ago, has been engineered to make your eye accelerate.
      </p>

      <SectionHeader accent={accent} label="The color" title="Motion laid down in steps, like a stack of stills" />
      <p style={proseStyle}>
        Look next at how the color is handled, because it is the other half of the illusion. The hues are laid in <strong>flat-ish bands and planes</strong>, not modelled into rounded, lit, three-dimensional solids the way a traditional painter would shape an apple or a face. Each plane steps back from the leading edges like a stage in the car&rsquo;s passage, one position, then the next, then the next. If you have ever seen a strip of film held up to the light, the same figure caught in a row of slightly-shifted frames, you already understand what Russolo is after. He is stacking the car&rsquo;s positions into a single image, so that one canvas holds several instants at once. It is less a portrait of a thing than a <strong>diagram of motion</strong>, a blueprint of acceleration with the engineering left showing.
      </p>
      <p style={proseStyle}>
        Pull back and take in the whole. There is no automobile to find, only the unmistakable sensation of one tearing past, built out of wedges that push, planes that step, and a slant that drags your eye down the road. That refusal, to drop the recognizable object entirely in favor of the pure experience of speed, is exactly how close this canvas comes to <strong>abstraction</strong>, painting that has stopped showing recognizable things at all. Russolo never quite crosses the line into total abstraction here, but he stands right on it, one foot over, in the same years that other painters were taking the full step.
      </p>

      <SectionHeader accent={accent} label="The point" title="A painting trying to make a noise" />
      <p style={proseStyle}>
        Here is the last thing to feel, standing in front of it, and it is the thing that makes this particular speed painting worth a second look. Most pictures of motion want you to <em>see</em> the motion. This one seems to want you to <em>hear</em> it. The wedges have the quality of a sound spreading out, the planes pile up like a chord, the whole canvas reads like a visual transcription of a <strong>roar</strong>, the noise a car makes at full throttle. That is not a coincidence, and it is not a stretch. The man who painted this was about to stop painting altogether and spend the rest of his life on exactly that problem, how to capture the roar of the modern world, only with the brush put down and machines that actually made the sound picked up instead. That is the next chapter, and once you know it, you cannot un-see it here: this is a painting straining to become a noise.
      </p>
    </article>
  )
}

function AutNoise({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1913" title="He puts down the brush" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1913</strong>, the same stretch of years he painted this car, Russolo did something almost no painter at the peak of a movement ever does. He largely <strong>set the brush aside</strong>. Not forever, he painted again late in life, but as his main work, for the next decade or more, he stopped being a painter. The man who had just figured out how to paint the roar of a car decided that paint could not actually <em>make</em> the roar, and went looking for something that could.
      </p>
      <p style={proseStyle}>
        On <strong>11 March 1913</strong> he wrote it down, in the form of a letter to the Futurist composer <strong>Francesco Balilla Pratella</strong>. The letter became a manifesto, and the manifesto has a title you should remember: <strong><em>The Art of Noises</em></strong> (in Italian <em>L&rsquo;arte dei rumori</em>). Its argument was simple and, in 1913, startling. The industrial age, Russolo wrote, had remade the human ear. We now lived among engines, factories, trams, crowds, machine guns, a whole new orchestra of <em>noise</em> that no symphony contained. Music, he argued, had to &ldquo;break out of this limited circle of [pure] sounds and conquer the infinite variety of noise-sounds.&rdquo; In other words: the same machine age that gave the painters the racing car had given music a whole new palette, and nobody was using it.
      </p>

      <SectionHeader accent={accent} label="The intonarumori" title="Boxes that howled, roared, gurgled, and hummed" />
      <p style={proseStyle}>
        Then, with a fellow painter named <strong>Ugo Piatti</strong>, Russolo did the thing that makes him a genuine ancestor instead of just a manifesto-writer. He <strong>built the instruments</strong>. They were called <strong>intonarumori</strong> (&ldquo;in-toh-nah-roo-MOH-ree&rdquo;), which means roughly &ldquo;noise-tuners&rdquo;, plain wooden boxes, each with a horn out the front and a hand-crank and a lever on top. Turn the crank, work the lever, and the box produced a tuned family of noises. He gave the families names that tell you exactly what they did: <strong>howlers, roarers, cracklers, hummers, gurglers</strong>, and more, more than twenty of them in the end. They were, by every account including his own, rudimentary, mechanical things, but they were the first instruments ever built deliberately to play <em>noise</em> as music.
      </p>
      <p style={proseStyle}>
        The first concert of these noise instruments was given in <strong>Modena</strong>, in Italy, on <strong>2 June 1913</strong>; a bigger, rowdier series followed in <strong>London in 1914</strong>. Audiences did roughly what you would expect audiences to do when a man cranks a box of howls at them and calls it a symphony, and the noise on the stage was sometimes outdone by the noise in the hall. But the door was open. Russolo is now counted a founding ancestor of <strong>noise music</strong>, of <em>musique concr&egrave;te</em> (music built from recorded real-world sounds), and of <strong>electronic music</strong>, cited as an influence on composers from <strong>Edgard Var&egrave;se</strong> to <strong>John Cage</strong> to <strong>Pierre Schaeffer</strong>. Half a century before a synthesizer, an Italian painter cranked the future out of a wooden box.
      </p>

      <SectionHeader accent={accent} label="The through-line" title="Two attacks on the same target" />
      <p style={proseStyle}>
        Now go back, for a moment, and stand in front of the painting again with all this in your head. The wedges that push, the planes that step, the whole canvas straining to <em>sound</em>, this is the same man, in the same year, hunting the same thing from two directions at once. The painting is an attempt to put the roar of a machine into oil and cloth. The intonarumori were an attempt to put the same roar into the air, where a roar actually lives. The car canvas and the noise machines are not two careers; they are <strong>two attacks on a single target</strong>, the energy of the modern machine, one with a brush and one with a crank. He just decided, in 1913, that the crank stood a better chance.
      </p>
    </article>
  )
}

function AutAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="The picture’s life as an object" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting&rsquo;s <strong>provenance</strong>, meaning the documented chain of who has owned it from the artist&rsquo;s hand to where it hangs now, is mostly a clean line with one honest hole in the middle, and we are going to leave the hole as a hole rather than fill it with a guess. Before the war the picture was alive in the world: it was shown at the <strong>Futurist exhibition in Florence</strong> in 1913&ndash;14 and at the <strong>Futurist exhibition in London</strong>, at the Dor&eacute; Galleries, in 1914, the same London season that met Russolo&rsquo;s howling instruments. Over those years it also picked up and shed a small drift of titles, <em>Velocit&agrave;</em> (&ldquo;Speed&rdquo;), <em>Composition</em>, <em>Full Speed</em>, before settling, more or less, on the dynamism of a car.
      </p>
      <p style={proseStyle}>
        Then comes the gap. Somewhere between Russolo&rsquo;s studio and the year <strong>1949</strong>, the painting passed into the hands of the painter <strong>Sonia Delaunay</strong>, and exactly how and when it got there is simply not recorded in the museum&rsquo;s file. The honest thing, and the rule we hold to, is that a missing link in a provenance beats a wrong one. So rather than invent a dealer or a sale or a date to bridge the years, we say plainly: the record has two ends and an empty middle, and we are not going to make the middle up.
      </p>

      <SectionHeader accent={accent} label="Sonia Delaunay" title="A gift, from one painter of speed to a nation" />
      <p style={proseStyle}>
        The end of the line, though, is documented and worth dwelling on. In <strong>1949</strong>, Sonia Delaunay <strong>gave the painting to the French nation</strong>, to the Mus&eacute;e national d&rsquo;art moderne, now part of the <strong>Centre Pompidou</strong> in Paris, where it has lived ever since under the inventory number AM 2917 P. And the donor is not a footnote. <strong>Sonia Delaunay</strong> (1885&ndash;1979) was a major painter in her own right, a co-founder, with her husband Robert Delaunay, of <strong>Orphism</strong>, an offshoot of Cubism that built whole pictures out of pure color and rhythm and, like the Futurists, was hungry to paint modern speed and light. So the canvas that tried to paint a car&rsquo;s roar was handed to France by a woman who had spent her own life painting motion and color, one speed-painter passing another speed-painter&rsquo;s work into a great public collection. It is a quietly perfect custody.
      </p>

      <SectionHeader accent={accent} label="The verdict" title="The car that drove into the future" />
      <p style={proseStyle}>
        A small closing thought. Russolo was a painter who decided painting was not loud enough, and walked away from it into a wooden box full of howls. It would be easy to read this canvas as the work he abandoned, a road not taken. It is the opposite. This is the painting where he had already half-left, where the car is dissolving into pure force and the whole picture is leaning toward a sound it cannot quite make. The intonarumori are not a break from this painting; they are this painting finishing its sentence. Stand in front of it in Paris today and you are looking at the exact moment a painter felt the limits of paint, the canvas straining at the edge of abstraction and the edge of noise at once, a year before he picked up the crank and made the future audible.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  automobile: { painter: AutPainter, making: AutMaking, looking: AutLooking, noise: AutNoise, afterlife: AutAfterlife },
```

---

## Fact ledger (every concrete claim → fact-pack item)

| Claim in prose | Fact-pack source | Flag |
|---|---|---|
| Father organist, two brothers at Milan Conservatory; trained as painter | Beat 1 (§3) | DOCUMENTED |
| Befriended Boccioni end of 1909; joined founding circle | Beat 1, §7 | DOCUMENTED |
| Signed the 1910 painters’ manifestos (Manifesto of the Futurist Painters Feb 1910 + Technical Manifesto 1910), w/ Boccioni, Carrà, Balla, Severini | Beat 1, §7 | DOCUMENTED |
| Did NOT sign Marinetti’s 1909 manifesto | Beat 1 precision flag, §8 | DOCUMENTED correction |
| Futurism worshipped machine/city/speed; show motion over time | Beat 2/3 | DOCUMENTED |
| Manifesto glorified war as “world’s only hygiene”; Marinetti later co-founded Fascism | brief + FUTURISM hookLong | DOCUMENTED (one proportionate line) |
| Marinetti point-4 quote (verbatim, one translation) | Beat 2 ⟦S6⟧/⟦S7⟧ | DOCUMENTED; ONE cited translation, not composite |
| Victory of Samothrace = 2nd-c. BC Hellenistic marble, Louvre | Beat 2 WORDING FLAG | DOCUMENTED |
| Translation variants noted (grapeshot/machine-gun; Victory/Winged) | ⟦S7⟧ | DISPUTED → framed as such |
| Force-line / linea-forza = directional energy line; “spectator in centre,” “universal dynamism” | Beat 3 ⟦S5⟧ | DOCUMENTED |
| Date 1912–13; canvas signed “1911” [sic] | §1, §6 | DISPUTED → handled both in stats + prose |
| Car shattered into faceted planes; near-abstraction; subject = speed | Beat 4, annotations 2/6 | DOCUMENTED interpretive; image-verify at gate |
| Wedges/arrowheads driving one way; landscape format | annotations 1/3/5 | descriptive — VERIFY ON IMAGE at gate-1 |
| Color in flat stepping planes, stack-of-stills | annotation 4 | VERIFY ON IMAGE |
| Largely set painting aside 1913 (not “abandoned forever”) | Beat 5, ledger §8 | DOCUMENTED (softened) |
| The Art of Noises, letter to Pratella, 11 March 1913; the quoted line | Beat 5 ⟦S3⟧ | DOCUMENTED |
| Intonarumori with Ugo Piatti; howlers/roarers/cracklers/hummers/gurglers; “more than twenty” | Beat 5, ledger | DOCUMENTED (“more than twenty,” count not asserted) |
| First noise concert Modena 2 June 1913; London 1914 | Beat 5 | DOCUMENTED |
| Influence on Varèse, Cage, Schaeffer; ancestor of noise/musique concrète/electronic | Beat 5 ⟦S3⟧⟦S4⟧ | DOCUMENTED |
| Shown Florence 1913–14 + London (Doré Galleries) 1914; variant titles | §5, §1 | DOCUMENTED |
| Provenance gap Russolo→Sonia Delaunay left empty | §5 GAP flag | GAP — not filled |
| Gift of Sonia Delaunay 1949; MNAM/Pompidou; inv. AM 2917 P | §1, §5 | DOCUMENTED |
| Sonia Delaunay (1885–1979), co-founder of Orphism (w/ Robert Delaunay) | §7 | DOCUMENTED |

**Outstanding for coordinator (gate-time):** every left/right/which-shape `where` in the six annotations AND the looking chapter (wedge direction, dense-core location, landscape thrust) must be re-checked against the born-verified hero image (`ART_IMG.russoloAutomobile`) before lock — flagged exactly as the fact pack §4 gate note requires. Confirm the Marinetti translation matches the single cited published source (⟦S6⟧/⟦S7⟧) letter-for-letter, or convert to paraphrase per born-verified doctrine.
