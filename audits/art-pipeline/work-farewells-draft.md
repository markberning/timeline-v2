# Work-read draft — Umberto Boccioni, *States of Mind: The Farewells* (1911, MoMA)

Authored through the gated art pipeline from `work-farewells-factpack.md` (sole source
of truth). Voice modeled on the absinthe narratives. Imperial dims only; no literal
hyphen-minus em-dashes in new prose (`&mdash;` / parens / commas); verbatim quotes left
unaltered; born-verified facts only.

Fact guardrails honored: MoMA holds the **second** (post-Paris, Cubist-inflected)
version, the first (Divisionist) version is in Milan; locomotive number **6943** given
"by the usual reading"; *linee-forza* / lines of force NOT pinned to 1911 (the formal
catalogue is the **1912** Paris show); the "loneliness, anguish, dazed confusion" quote
kept on *Those Who Go*, never on *The Farewells*; Futurism's ideology kept proportionate
with the Boccioni-died-1916-before-Fascism guardrail.

---

## PART A — the `FAREWELLS` const (for `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, States of Mind: The Farewells (Stati d'animo: Gli addii),
// Boccioni, 1911, MoMA (acc. 64.1979, gift of Nelson A. Rockefeller, 1979).
// Panel 1 of the three-part States of Mind triptych (The Farewells /
// Those Who Go / Those Who Stay). Authored through the art content pipeline
// (fact pack -> Opus -> 5 gates -> revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['farewells'] (Far... prefix).
// TWO-VERSION FINDING handled per fact pack: MoMA holds the SECOND version,
// reworked AFTER Boccioni's autumn-1911 Paris trip with a Cubist faceting;
// the FIRST, Divisionist, pre-Paris version is in Milan (exact museum left
// open, sources split GAM vs Museo del Novecento). "Lines of force"
// (linee-forza) is the 1912 Paris-catalogue term, NOT dated to 1911. The
// "loneliness, anguish, dazed confusion" line belongs to Those Who Go,
// not The Farewells. Locomotive number 6943 given "by the usual reading."
// ─────────────────────────────────────────────────────────────
export const FAREWELLS: ArtWorkContent = {
  id: 'farewells',
  name: 'States of Mind: The Farewells',
  shortName: 'The Farewells',
  year: 1911,
  artist: 'Umberto Boccioni',
  artistId: 'boccioni',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 3 3/4 in × 3 ft 1 7/8 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Gift of Nelson A. Rockefeller, 1979',
  accent: ART_ACCENTS.rust, // Futurism's movement accent
  chain: { name: 'Works of Futurism', index: 2, total: 9 },
  hook: 'A railway-station goodbye painted not as a scene but as a feeling, the figures swept into a vortex of steam around the one cold-sober thing in it, a locomotive’s stencilled number, and the version in New York is the second one Boccioni painted, redone after Paris taught him Cubism.',
  heroImage: ART_IMG.boccioniStatesFarewells,
  heroCredit: 'Boccioni, States of Mind: The Farewells (second version), 1911 · Museum of Modern Art, New York',
  heroAspect: 1.36, // 70.5 × 96.2 cm → W/H ≈ 1.36
  heroFit: 'contain', // the whole landscape canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1911', k: 'Painted' },
    { v: '2′3¾″ × 3′1⅞″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'station', eyebrow: 'Milan · 1911', dateLabel: '1911', title: 'Paint the feeling, not the train', blurb: 'A young Futurist sets out to paint a railway-station goodbye as a state of mind rather than a scene, and builds it as a three-panel set: the embrace, those who leave, those who stay behind.', progress: 0.08 },
    { id: 'paris', eyebrow: 'Paris · autumn 1911', dateLabel: 'autumn 1911', title: 'The trip that made the second version', blurb: 'Boccioni, Carrà and Russolo go to Paris on Severini’s urging, see Cubism in the flesh, and come home. Boccioni reworks the whole triptych, and that reworked, Cubist-inflected set is the one that hangs in New York.', progress: 0.3 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 3 3/4 in × 3 ft 1 7/8 in', title: 'Emotion drawn as lines', blurb: 'Read the painting: the embrace dissolving into the haze, the half-buried engine with its number, the swirling lines that carry the feeling, the poles and wires, the faceted station spun into one vortex.', progress: 0.56 },
    { id: 'futurism', eyebrow: 'Futurism', dateLabel: '1909–1916', title: 'Speed, machines, and a darker creed', blurb: 'What Futurism wanted, the speed and the machine and the noise, and the harder edge under it, the 1909 manifesto’s love of war, with the line carefully drawn at Boccioni’s own death in 1916.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1911–today', title: 'From Marinetti’s wall to New York', blurb: 'The panels go straight to Marinetti, pass to his widow, are bought by Nelson Rockefeller after the war, and reach MoMA as his gift in 1979, while the first version stays behind in Milan.', progress: 0.96 },
  ],
  provenance: [
    { year: '1911', who: 'Umberto Boccioni (the artist)', place: 'Milan', note: 'Painted the second version in late 1911, reworked after his autumn trip to Paris. This is the Cubist-inflected version; the first, Divisionist version stayed in Italy and is now in Milan.', price: null },
    { year: 'from 1911', who: 'Filippo Tommaso Marinetti', place: 'Milan / Rome', note: 'The poet who founded Futurism acquired the three panels directly from Boccioni. No price is recorded.', price: null },
    { year: 'to 1949', who: 'Benedetta Cappa Marinetti (Marinetti’s widow)', place: 'Italy', note: 'Held the triptych after Marinetti’s death in 1944, then sold it on. (The exact 1949 transfer detail is from a secondary source; the Marinetti-to-Rockefeller spine is firm.)', price: null },
    { year: '1949–1979', who: 'Nelson A. Rockefeller', place: 'New York', note: 'The collector and politician acquired the panels from Marinetti’s widow around 1949 and held them in his New York collection. No price is recorded.', price: null },
    { year: '1979–today', who: 'Museum of Modern Art', place: 'New York', note: 'Gift of Nelson A. Rockefeller, 1979. Accession 64.1979. On view, with the two companion panels of the triptych.', price: 'gift to the museum', museum: true },
  ],
  figures: [
    { name: 'Umberto Boccioni', role: 'The painter', palette: ['#b44d3b', '#5a2418', '#160a07'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Futurism’s founder · first owner', palette: ['#9a4a36', '#4a2018', '#14090a'] },
    { name: 'Gino Severini', role: 'The Paris-based Futurist who urged the trip', palette: ['#8a5a44', '#3e2820', '#120c0a'] },
    { name: 'The Cubists in Paris', role: 'What the autumn-1911 trip exposed him to', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'Nelson A. Rockefeller', role: 'Bought the panels · gave them to MoMA', palette: ['#7a6a44', '#3e3320', '#12100a'] },
  ],
  annotations: [
    { label: 'The embracing couple, fused into the haze', where: 'Center, low, the densest knot of figures, locked together and bleeding into the waves around them', detail: 'Find the clasped pair at the heart of the picture, two figures bent into a parting embrace. The thing to notice is what Boccioni refuses to do: he does not stand them clear of the scene like actors on a stage. He lets the curving waves of paint run straight through them, so the bodies and the steam and the station are the same substance, a vortex that looks like it is about to crumble. They are not people in a setting; they are people dissolving into one.' },
    { label: 'The locomotive, and its number', where: 'Center-right, the dark mechanical mass half-buried in the swirl, carrying a row of painted digits', detail: 'The one solid, mechanical thing in the picture is the train engine, sunk to its shoulders in steam and curved line. On its body sits the single coldest, steadiest mark on the canvas: a stencilled number, read by the usual account as 6943. Everything else is in motion; the number is not. It is the one element that holds still while the world around it spins, the painting’s fixed point. (The digits are small and worked into the paint, so the exact reading is the standard one rather than a thing you can count off cleanly from a photograph.)' },
    { label: 'The swirling lines of departure', where: 'Sweeping across the whole picture, the long curved arcs of paint that carry the figures up and around', detail: 'These long, curving, swirling arcs are the painting’s engine of feeling. Across the three panels Boccioni gives each its own kind of line: here in The Farewells the lines swirl and curve, the chaos of a goodbye; in Those Who Go they slant oblique, the pull of leaving; in Those Who Stay they fall strictly vertical, the dead weight of being left. Trace these curves and you are reading the emotion directly, drawn as a direction rather than described as a face.' },
    { label: 'The telegraph poles and wires', where: 'Rising through the upper haze, the thin straight verticals of the station’s ironwork against the curved storm', detail: 'Look up through the swirl and you find the thin, hard, straight uprights of the station’s infrastructure, its poles and wires, cutting against the curving waves. They are the man-made grid of the railway, the proof that this storm of feeling is happening at a real platform and not in pure abstraction. (Sources describe a “railway post” here; on the canvas it reads as the pole-and-wire ironwork rising through the steam.)' },
    { label: 'The fragmented, faceted station', where: 'Throughout, the platform and its structures broken into hard intersecting planes inside the curves', detail: 'Notice that the station itself is not drawn as solid architecture but broken into hard, intersecting, faceted shards, planes that cut across the curves. This faceting is the tell that you are looking at the second version. It is what Boccioni brought back from Paris and Cubism, laid over the softer Divisionist haze of the original. The whole environment, platform and building and crowd, is swept into one tumbling vortex.' },
    { label: 'The radiating composition', where: 'The overall design, everything wheeling outward from the calm of the engine’s number', detail: 'Step back and read the whole picture as one shape. It is organized as a vortex, waves and lines radiating out, and the still center they wheel around is the engine and its number. Everything in the painting has been set spinning except that one stencilled mark. The composition itself is the argument: a parting felt as a whirlpool of motion with a single cold, unmoved point at its heart.' },
  ],
  lineage: {
    parents: [
      { label: 'Divisionism', mode: 'art' },
      { label: 'Cubism', mode: 'art' },
      { label: 'The railway age', mode: 'civ' },
    ],
    children: [
      { label: 'Painting motion itself', mode: 'art' },
      { label: 'Boccioni’s sculpture', mode: 'art' },
      { label: 'The machine aesthetic', mode: 'civ' },
    ],
  },
}
```

---

## PART B — chapter prose (for `art-section-reader.tsx`, `NARRATIVES['farewells']`)

Five `Far`-prefixed components in the absinthe house voice. New prose uses `&mdash;`,
parens, and commas in place of literal em-dashes; HTML entities for quotation marks and
apostrophes; verbatim quotes preserved.

```tsx
// ─────────────────────────────────────────────────────────────
// States of Mind: The Farewells (Boccioni, 1911, MoMA) — five chapters
// ─────────────────────────────────────────────────────────────
function FarStation({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Milan · 1911" title="Paint the feeling, not the train" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1911</strong>, in Milan, a twenty-eight-year-old painter named <strong>Umberto Boccioni</strong> (1882&ndash;1916) set out to do something most painters would have called a contradiction in terms. He wanted to paint a goodbye at a railway station. Not the station, though. Not the train. The <em>goodbye</em>. The actual feeling of it, the lurch in the chest when someone you love climbs onto a train and you do not, painted directly onto canvas as if a feeling were a thing you could see.
      </p>
      <p style={proseStyle}>
        That ambition is sitting right there in the title. The whole set is called <em>Stati d&rsquo;animo</em> &mdash; Italian for <strong>States of Mind</strong>, meaning, quite literally, the conditions of the soul, the inner weather of a person. The title is a promise and a dare at once: this picture is not going to show you an event, it is going to show you a mood. A train station is just the place Boccioni chose because, in 1911, nothing in modern life was more loaded with arrivals and partings than a platform under a great iron shed.
      </p>
      <p style={proseStyle}>
        Boccioni belonged to a brand-new movement called <strong>Futurism</strong>, an Italian avant-garde &mdash; that is, a self-consciously radical art group out ahead of the mainstream &mdash; that had announced itself two years earlier and was in love with everything fast, loud, and mechanical: motorcars, electric light, factories, and trains. (We will come back to Futurism, and to its harder edges, in a later chapter.) A railway goodbye was the perfect Futurist subject. It is built out of a machine, and it is drenched in feeling, and Boccioni wanted both at once.
      </p>

      <SectionHeader accent={accent} label="One feeling in three panels" title="The embrace, those who go, those who stay" />
      <p style={proseStyle}>
        He did not try to cram the whole experience into one picture. He built it as a <strong>triptych</strong> &mdash; a single work made of three separate panels meant to hang together, the format old altarpieces used. The three panels split the goodbye into its three movements. <em>Gli addii</em> (<strong>The Farewells</strong>) is the embrace and the chaos of the parting itself. <em>Quelli che vanno</em> (<strong>Those Who Go</strong>) is the ones who board and are carried off into the dark. <em>Quelli che restano</em> (<strong>Those Who Stay</strong>) is the ones left standing on the platform, watching the train shrink.
      </p>
      <p style={proseStyle}>
        It is a small, exact piece of psychology. A station goodbye really does have those three parts, and they really do feel different from the inside: the swirl of the last hug, the wrench of being taken away, the heavy stillness of staying behind. Boccioni gave each its own panel, and, as we will see when we get to the canvas, its own kind of line. <em>The Farewells</em>, the panel this read is about, is the first of the three and the most turbulent: it is the moment of the embrace, when the parting is still happening and nobody has gone anywhere yet.
      </p>
      <p style={proseStyle}>
        And here is the strange fact that the rest of this story turns on. The version of <em>The Farewells</em> that hangs in New York, the famous one, is not the first one Boccioni painted. It is the <strong>second</strong>. He painted the whole triptych twice in a single year, and the reason he did it is a train trip of his own.
      </p>
    </article>
  )
}

function FarParis({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Milan, then Paris" title="The first version, and why it wasn’t enough" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        occioni painted the first version of <em>States of Mind</em> in the late summer of <strong>1911</strong>, before he had ever really seen the newest art coming out of Paris. He painted it in the style he had grown up in, called <strong>Divisionism</strong> &mdash; a technique of building a picture out of many small, separate strokes of pure color set side by side, so the eye mixes them at a distance. (It is a close Italian cousin of the dotted French method behind Seurat&rsquo;s <em>Grande Jatte</em>.) That first <em>Farewells</em> is a swirling, hazy, atmospheric thing, all shimmer and steam, pure Futurism before any outside influence got to it.
      </p>
      <p style={proseStyle}>
        Then, in the <strong>autumn of 1911</strong>, Boccioni got on a train himself. He went to Paris with two fellow Futurist painters, <strong>Carlo Carr&agrave;</strong> and <strong>Luigi Russolo</strong>, urged on and shown around by a fourth, <strong>Gino Severini</strong>, who actually lived in Paris and knew the scene. (Sources split on whether the trip was October or November, so call it late 1911.) Severini wanted his Italian friends to see what was happening in the French capital with their own eyes, because something was happening there that no description could quite carry.
      </p>

      <SectionHeader accent={accent} label="Cubism, in the flesh" title="A new way to take a thing apart" />
      <p style={proseStyle}>
        What they saw was <strong>Cubism</strong>. This was the radical Paris invention of <strong>Pablo Picasso</strong> and <strong>Georges Braque</strong>, and the simplest way to describe it is this: instead of painting an object from one fixed viewpoint, the Cubists broke it into flat, hard, intersecting planes, faceted shards, and showed several of its angles at once, as if you could see around a thing and through it in the same glance. It looked like reality run through a cracked pane of glass. To a young painter obsessed with motion, that fracturing was electric, because a thing seen from several angles at once is, in a sense, a thing caught moving.
      </p>
      <p style={proseStyle}>
        Boccioni came home and did something a less restless painter would never have done. He had a finished triptych already. He painted the whole thing <strong>again</strong>. The second version keeps the same scene, the same embrace, the same engine, but it rebuilds the soft Divisionist haze with the hard Cubist faceting he had just seen: the swirling waves are now cut across by sharp intersecting planes, the station broken into shards. He took the feeling of the first version and gave it a new skeleton.
      </p>

      <SectionHeader accent={accent} label="Two cities, two pictures" title="Which one is which, and where they are now" />
      <p style={proseStyle}>
        So there are two <em>Farewells</em>, and the difference between them is the whole point. The <strong>first</strong>, Divisionist, pre-Paris version &mdash; the haze without the faceting &mdash; stayed in Italy and is now <strong>in Milan</strong>. (Sources disagree on exactly which Milan museum, so we will leave it at the city.) The <strong>second</strong>, post-Paris, Cubist-inflected version &mdash; the one with the hard cut planes &mdash; is the more famous one, and it is the one that hangs in the <strong>Museum of Modern Art in New York</strong>. When you stand in front of the MoMA <em>Farewells</em>, you are looking at a picture that records, inside its own surface, a young painter&rsquo;s mind being changed by a trip to Paris. The faceting is the souvenir.
      </p>
    </article>
  )
}

function FarLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Emotion drawn as lines" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is small, about <strong>two feet three inches tall by three feet two inches wide</strong>, a modest landscape rectangle a little wider than a serving tray laid flat. That smallness matters, because what is packed into it is the opposite of modest: a whole emotional weather system, a parting felt as a storm, compressed into less than a yard of canvas. Stand close. This is a picture you read by following lines, not by naming objects, and the first thing to do is let your eye stop trying to find the edges of things.
      </p>
      <p style={proseStyle}>
        Because the edges are mostly gone. The whole surface is swept into long, <strong>curving, swirling arcs</strong> of paint, great waves that wheel across the canvas, and almost everything in the picture &mdash; people, steam, station &mdash; is caught up in them and dissolving. This is the engine of the whole thing, so look at it directly: those curves are not decoration around the scene, they <em>are</em> the scene. Boccioni is drawing the feeling itself. A swirling line is what a chaotic goodbye feels like from the inside, and he has put the feeling on the canvas as a direction your eye is forced to travel, round and round, with no resting place. You do not look at a sad picture here. You get pulled into a spinning one, and the spin is the sadness.
      </p>

      <SectionHeader accent={accent} label="The line is the whole argument" title="Curves here, slants and verticals next door" />
      <p style={proseStyle}>
        Here is the device that makes this work, and once you see it you cannot unsee it. Boccioni gave each of the three panels its <strong>own kind of line</strong>, matched to its own feeling. In <em>The Farewells</em>, the panel in front of you, the lines <strong>swirl and curve</strong> &mdash; the churning confusion of the embrace. In its neighbor <em>Those Who Go</em>, the lines slant <strong>oblique</strong>, all leaning one way, the pull and rush of departure. In the third, <em>Those Who Stay</em>, the lines fall <strong>strictly vertical</strong>, straight down like rain or bars, the dead heavy weight of the people left on the platform. Three feelings, three geometries. The emotion is in the direction of the strokes before it is in anything you could call a picture of a person.
      </p>
      <p style={proseStyle}>
        (This idea later got a formal name in Futurist theory, the <strong>lines of force</strong> &mdash; in Italian <em>linee-forza</em> &mdash; directional lines that carry an object&rsquo;s energy and feeling out into everything around it. The term was nailed down in the catalogue of the Futurists&rsquo; big Paris exhibition the following year, in 1912, so it is the name that arrived just after these pictures, not the slogan Boccioni was painting under. But the thing the name describes is exactly what your eye is doing right now.)
      </p>

      <SectionHeader accent={accent} label="The embrace" title="Two people, dissolving into the storm" />
      <p style={proseStyle}>
        Now find the people. At the heart of the picture, low and central, is the densest knot of paint: the <strong>embracing couple</strong>, two figures bent into each other in the parting hug. But notice how Boccioni paints them, because it is the opposite of how a normal painter would. He does not set them cleanly in front of the scene like actors on a stage. He lets the swirling waves run <em>straight through them</em>, so their bodies and the steam and the station are all made of the same churning stuff. They are not standing in the vortex; they are coming apart into it, a knot that is about to be pulled loose. The composition tells you the goodbye has already half-happened: the two people are dissolving even as they hold on.
      </p>

      <SectionHeader accent={accent} label="The one cold thing" title="A number that refuses to move" />
      <p style={proseStyle}>
        And then, in the middle of all that motion, there is one thing that does not move. Toward the center-right, half-buried in the swirl, sits the dark mechanical mass of the <strong>locomotive</strong>, the train engine, sunk to its shoulders in steam and curved line. On its body Boccioni painted the single steadiest, coldest mark on the whole canvas: a <strong>stencilled number</strong>, read by the usual account as <strong>6943</strong>. (The digits are small and worked into the paint, so that reading is the standard one rather than something you can crisply count off a photograph.) This is the trick of the picture, and it is worth slowing down for. Everything in the painting is spinning &mdash; the people, the air, the building &mdash; except four cold machine-stamped numerals, which sit there perfectly still. The number is the one thing in the goodbye that feels nothing. It is the indifferent machine in the middle of all the human feeling, and Boccioni makes it the calm eye of the whole storm.
      </p>

      <SectionHeader accent={accent} label="The grid and the shards" title="Poles, wires, and the Paris souvenir" />
      <p style={proseStyle}>
        Two last things to find. Look up through the haze and you will catch the thin, hard, straight uprights of the station&rsquo;s ironwork, the <strong>telegraph poles and wires</strong>, cutting against the curving waves. They are the man-made grid of the railway, the proof that this whole emotional storm is happening at a real platform and not in pure abstraction. And then look at how the <strong>station itself</strong> is built: not as solid walls and roof but broken into hard, intersecting, faceted shards, sharp planes slicing across the curves. That faceting is the souvenir from Paris, the Cubism Boccioni brought home and laid over the haze. The curves are the feeling; the shards are the new structure he found to carry it.
      </p>
      <p style={proseStyle}>
        Pull all the way back now and read the whole thing as one shape. It is a <strong>vortex</strong>, a whirlpool, waves and lines radiating outward, and the still point they all wheel around is the engine and its number. That is the picture&rsquo;s entire thesis, made in paint and needing no caption: a parting is a storm of motion with one cold, unmoved machine at its heart. You feel it before you can explain it, which is exactly what a <em>state of mind</em> is supposed to do.
      </p>
    </article>
  )
}

function FarFuturism({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Futurism · 1909" title="A movement in love with the machine" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o understand why a man would paint a train station as a spiritual event, you have to know the movement he belonged to. <strong>Futurism</strong> was launched in <strong>1909</strong> by an Italian poet named <strong>Filippo Tommaso Marinetti</strong> (1876&ndash;1944), who published a fiery <em>Manifesto of Futurism</em> &mdash; a manifesto being a public declaration of what a movement believes and intends &mdash; on the front page of a Paris newspaper. Its message was a kind of intoxicated worship of the modern, machine-driven world: speed, electricity, the motorcar, the factory, the roar of engines. The Futurists thought the museums were tombs and the past was a weight, and they wanted an art made of energy and velocity instead of marble and nostalgia.
      </p>
      <p style={proseStyle}>
        That is why a goodbye at a railway station, of all the human partings there are, became <em>this</em> goodbye. The train is not just the vehicle in <em>The Farewells</em>; it is the whole reason the subject appealed to Boccioni at all. A station is where modern feeling and modern machinery meet, where the speed the Futurists loved reaches into ordinary lives and pulls people apart. Boccioni was the movement&rsquo;s sharpest painter and its leading theorist of how to do all this in pictures, and the lines of force we traced on the canvas are his contribution to it: a method for putting pure motion and pure feeling onto a flat surface.
      </p>

      <SectionHeader accent={accent} label="The darker edge" title="What the manifesto also said" />
      <p style={proseStyle}>
        It would be dishonest to leave Futurism as a cheerful festival of fast cars, because its founding document had a genuinely ugly side, and it is part of the honest history of this picture. Marinetti&rsquo;s 1909 manifesto did not only glorify speed and machines; it also <strong>glorified war and violence</strong>, calling war (in the famous phrase) the world&rsquo;s only hygiene, and sneered at the weak and the old. That worship of force and destruction was woven into Futurism from the start, and Marinetti would later, in 1919, help found the Italian <strong>Fascist</strong> movement, tying the avant-garde he had created to one of the catastrophes of the century.
      </p>
      <p style={proseStyle}>
        One line of fairness has to be drawn carefully here. <strong>Boccioni did not live to see any of that.</strong> He died in <strong>1916</strong>, at thirty-three, after a fall from a horse during military training in the First World War &mdash; the same war the manifesto had romanticized, which is its own bleak irony. He was gone three years before Marinetti turned toward Fascism, and well over a decade before it took power. So the ideology is real and it belongs in the story, but it is the movement&rsquo;s later road, not a verdict on the man who painted this particular parting. What Boccioni himself put on this canvas is not a politics; it is a feeling, the oldest human one there is, of watching someone you love be carried away.
      </p>
    </article>
  )
}

function FarAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="Straight to the man who started it all" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the painting&rsquo;s life as an object, its <strong>provenance</strong> &mdash; meaning the documented chain of who has owned a work, from the artist&rsquo;s hand to wherever it hangs now. The MoMA <em>Farewells</em> has a short, clean one, and it begins with the most fitting owner imaginable. The three panels went straight from Boccioni to <strong>Filippo Tommaso Marinetti</strong>, the poet who had invented Futurism in the first place. The founder of the movement bought the movement&rsquo;s masterpiece of feeling directly from the painter. No price is recorded, and we will not invent one.
      </p>
      <p style={proseStyle}>
        After Marinetti died in 1944, the triptych passed to his widow, <strong>Benedetta Cappa Marinetti</strong>, who held it until she sold it on around <strong>1949</strong>. (That last detail comes from a secondary source rather than a museum record, so treat the year lightly; the Marinetti-to-Rockefeller backbone of the story is solid.) The buyer was the American collector and politician <strong>Nelson A. Rockefeller</strong> (1908&ndash;1979), who had a deep appetite for modern art and the fortune to indulge it, and he kept the panels in his New York collection for the next three decades.
      </p>

      <SectionHeader accent={accent} label="MoMA · 1979" title="The gift, and the panel left in Milan" />
      <p style={proseStyle}>
        In <strong>1979</strong>, the panels entered the <strong>Museum of Modern Art</strong> in New York as the <strong>Gift of Nelson A. Rockefeller</strong> (accession number 64.1979), where the three of them hang together to this day, the embrace and those who go and those who stay, reunited on one wall. It is a tidy ending for a set of pictures about being parted: the triptych, at least, never has to say goodbye to itself.
      </p>
      <p style={proseStyle}>
        Except, of course, for its twin. Remember that there are two of everything here. While the second, Cubist version made its way to New York, the <strong>first</strong>, Divisionist version &mdash; the hazy pre-Paris original &mdash; stayed behind <strong>in Milan</strong>, where it remains. So the two <em>States of Mind</em> triptychs are themselves parted across an ocean, the before and the after of a single year in a young painter&rsquo;s life, hanging in two cities that never see each other. Boccioni painted a picture about separation, twice, and the two pictures ended up separated. He would, one suspects, have appreciated the symmetry.
      </p>
      <p style={proseStyle}>
        And there is the harder grace note under it. Boccioni was dead by 1916, at thirty-three, with most of his career still ahead of him. The painter who wanted, above all, to put pure motion onto a still canvas was stopped almost before he had started, and yet this small, swirling goodbye outlived him by more than a century, still spinning, still holding its one cold number perfectly still at the center of all that motion. It turns out you can paint a feeling after all. He proved it, and then he was carried away himself, on the very kind of machine he had spent his short life trying to make beautiful.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  farewells: { station: FarStation, paris: FarParis, looking: FarLooking, futurism: FarFuturism, afterlife: FarAfterlife },
```

---

## Fact ledger (every concrete claim → fact-pack item)

| Claim in prose / const | Fact-pack source | Flag |
|---|---|---|
| Boccioni 1882–1916, age 28 in 1911, died at 33 in a 1916 fall from a horse in WWI training | §⑥ Key figures; §① | DOCUMENTED |
| Title *Stati d'animo* / States of Mind; literal "states of mind / conditions of the soul" program | §① ; §③ beat 1; "states of mind" quote | DOCUMENTED |
| Triptych = The Farewells / Those Who Go / Those Who Stay (Gli addii / Quelli che vanno / Quelli che restano) | §① ; §③ beat 2 | DOCUMENTED |
| The Farewells = the embrace/chaos panel | §③ beat 2; §④ annot 1 | DOCUMENTED |
| Painted TWICE in 1911; first = Divisionist pre-Paris; second = Cubist-inflected post-Paris | ⚑ Two-version finding | DOCUMENTED |
| First version now in Milan, exact museum left open (GAM vs Museo del Novecento split) | ⚑ ; LEGEND/DISPUTED #1 | DISPUTED museum → city only |
| MoMA holds the SECOND version | ⚑ | DOCUMENTED |
| Autumn 1911 Paris trip with Carrà and Russolo, urged/guided by Severini | §③ beat 3; §⑥ | DOCUMENTED (month Oct/Nov → "late/autumn 1911") |
| Cubism = Picasso & Braque; faceted planes / several angles at once | general movement fact; FUTURISM movement card; CUBISM read | DOCUMENTED |
| Divisionism = small separate strokes of pure color; cousin of Seurat's dotted method | general; cross-ref to Grande Jatte | DOCUMENTED |
| Lines of force / linee-forza; per-panel line direction (curve/oblique/vertical) | §③ beat 4; "lines of force" section | DOCUMENTED; term dated to **1912** Paris catalogue, NOT 1911 |
| Locomotive number 6943 "by the usual reading" | §③ beat 5; §④ annot 2; quotes §6943 | DOCUMENTED, hedged per instruction |
| Dimensions 2 ft 3 3/4 in × 3 ft 1 7/8 in (70.5 × 96.2 cm), landscape, ~2'3" tall | §① ; ft/in strings | DOCUMENTED |
| Medium oil on canvas; MoMA; acc. 64.1979; Gift of Nelson A. Rockefeller 1979; pd-us | §① | DOCUMENTED |
| Provenance: Boccioni → Marinetti (direct) → widow Benedetta Cappa Marinetti (to ~1949) → Rockefeller (1949–1979) → MoMA (1979) | §⑤ | spine DOCUMENTED; 1949/widow-name DISPUTED (hedged in prose) |
| No prices recorded at any transfer | §⑤ ; DO-NOT-INVENT | DOCUMENTED (left null) |
| Futurism launched 1909 by Marinetti; manifesto on front page of a Paris newspaper | §⑥ ; general | DOCUMENTED |
| Manifesto glorified war/violence ("war, the world's only hygiene"); Marinetti co-founded Fascism (1919) | instruction guardrail; general | DOCUMENTED, kept proportionate |
| Boccioni died 1916, before Fascism | §① ; instruction guardrail | DOCUMENTED |
| Annotations: embracing couple fused; engine + number; swirling departure lines; telegraph poles/wires; faceted station; radiating vortex | §④ 1–6 | DOCUMENTED; "green" color claim from §④ NOT asserted (VERIFY-AT-IMAGE); poles-vs-oil-tower hedged in prose |

### Notes for the gates / coordinator
- **VERIFY-AT-IMAGE owed (gate 1):** confirm the **6943** digits, the embrace placement (center-low), the engine at center-right, the poles/wires reading (vs an "oil tower"/signal upright per L'Art en Tête), and the faceted-station faceting against the born-verified canvas before locking the six `where` phrases. The fact pack flags all of these as eyeball-at-image.
- **"green" deliberately dropped.** §④ annot 3 flagged the color "green" as unconfirmed; the annotation describes the lines by character (swirling/curved), not color, until the image is checked.
- **"loneliness, anguish, dazed confusion"** quote is NOT used here (it belongs to *Those Who Go*, per §quotes).
- **`acquired` vs prose:** const `acquired` = "Gift of Nelson A. Rockefeller, 1979" (mirrors STARRY_NIGHT's `acquired` field shape).
- **`heroAspect` 1.36** from 96.2/70.5; `heroFit: 'contain'` shows the whole landscape canvas.
- **Hero image:** `ART_IMG.boccioniStatesFarewells` already exists in art-content.ts (line 98). Coordinator should load-check it at integration and confirm it is the **oil painting** (MoMA v2), not a *Studies for States of Mind* charcoal (fact-pack CAUTION #2).
- **`accent`:** `ART_ACCENTS.rust` matches the Futurism movement card's accent (art-content.ts `fut` row).
```
