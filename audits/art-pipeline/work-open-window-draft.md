# DRAFT — Henri Matisse, *Open Window, Collioure* (1905)

**kind:** work · **movement:** Fauvism · **chain:** Works of Fauvism, index 4 of 9
**Status:** AUTHORED draft (Opus). Written ONLY from `work-open-window-factpack.md`. NOT gated, NOT built. Awaiting the 5 critic gates + image-rights + nesting.
**Voice:** absinthe house voice. **New prose uses parentheses/commas, never em-dashes** (verbatim quotes preserve their own punctuation). Imperial dimensions only. Born-verified facts only.

---

## PART A — paste-ready const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Open Window, Collioure (Matisse, summer 1905). The Fauvism work-read
// that pairs with Woman with a Hat (the two Matisse lightning rods of the same
// 1905 Salon d'Automne room). Authored through the art content pipeline.
// Chapter prose in art-section-reader.tsx NARRATIVES['open-window'] (Win… prefix).
// PORTRAIT-format canvas (55.3 × 46 cm → heroAspect ≈ 0.83), even though it shows
// a harbor — do NOT default to landscape. heroImage = ART_IMG.matisseOpenWindow
//   (born-verified Commons file Matisse-Open-Window.jpg; the 960px thumb the key
//    already serves is the inline copy).
// LEGENDS handled per fact pack: do NOT pin the naming of Fauvism on this canvas
//   ("Donatello chez les fauves" was about the whole Salle VII / the Marque busts;
//    the "cage with the wild beasts" backstory is Vauxcelles's 1939 retelling).
//   The Stein 500-franc purchase belongs to Woman with a Hat, NOT this. No sale
//   prices documented for this canvas (1906/1949/1952) — none invented. The
//   granular named hues (peacock blue, fuchsia, etc.) are the ngabiographies.org
//   highlight essay's reading, attributed, not asserted as canonical fact.
// ─────────────────────────────────────────────────────────────
export const OPEN_WINDOW: ArtWorkContent = {
  id: 'open-window',
  name: 'Open Window, Collioure',
  shortName: 'Open Window, Collioure',
  year: 1905,
  artist: 'Henri Matisse',
  artistId: 'matisse',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 9 3/4 in × 1 ft 6 1/8 in',
  location: 'National Gallery of Art, Washington',
  acquired: 'Collection of Mr. and Mrs. John Hay Whitney, 1998',
  accent: ART_ACCENTS.rust, // copied from FAUVISM
  chain: { name: 'Works of Fauvism', index: 4, total: 9 },
  hook: 'A small canvas of a window thrown open onto a Mediterranean harbor, painted in colors no harbor ever wore, from the summer that produced Fauvism.',
  heroImage: ART_IMG.matisseOpenWindow,
  heroCredit: 'Matisse, Open Window, Collioure, 1905 · National Gallery of Art, Washington',
  heroAspect: 0.83, // 55.3 × 46 cm → W/H ≈ 0.83 (PORTRAIT — taller than wide)
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1905', k: 'Painted' },
    { v: '1′9¾″ × 1′6⅛″', k: 'Dimensions' },
    { v: 'NGA Washington', k: 'Now at' },
  ],
  sections: [
    { id: 'collioure', eyebrow: 'Collioure · summer 1905', dateLabel: 'Summer 1905', title: 'A fishing port and a younger painter', blurb: 'Matisse, 35, takes rooms over the harbor in a small Mediterranean fishing village near the Spanish border. The younger André Derain joins him in early July, and the two paint side by side through the summer that produced Fauvism.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'Summer 1905', title: 'Color let off the leash', blurb: 'The view straight out of his window, handled zone by zone in a different brushstroke each, the color laid down pure and unmixed and chosen for feeling rather than for what the eye actually saw.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1 ft 9¾ in × 1 ft 6⅛ in', title: 'A harbor framed in a window', blurb: 'Read the small portrait canvas itself: the open casement leaves swinging in, the flower pots on the balcony, the masted boats over their own colored reflections, the flat pink and green side-walls, and the seam where inside dissolves into outside.', progress: 0.56 },
    { id: 'salon', eyebrow: 'The Salon · 1905', dateLabel: 'Oct 1905', title: 'The cage of wild beasts', blurb: 'Shown at the rebel Salon d’Automne in the same room as Woman with a Hat, around a pair of prim marble busts. A critic’s printed line about that room hands a whole movement its name.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1906–today', title: 'The window that never closed', blurb: 'The open window became a subject Matisse returned to for the rest of his life. The canvas itself passed through a Le Havre collector and New York dealers to the Whitneys, and on to Washington by bequest in 1998.', progress: 0.96 },
  ],
  provenance: [
    { year: '1905', who: 'Henri Matisse (the artist)', place: 'Collioure / Paris', note: 'Painted at Collioure in the summer of 1905; shown at the Salon d’Automne in Paris that autumn.', price: null },
    { year: '1906', who: 'Pieter Van der Velde', place: 'Le Havre', note: 'Acquired by the Le Havre collector Van der Velde (1848–1922) in 1906. It did not pass straight from the artist into a museum; this is its first private owner.', price: null },
    { year: '1915–1918', who: 'General Réquin', place: 'Paris', note: 'Probably given to Van der Velde’s son-in-law, General Réquin, between 1915 and 1918 (the National Gallery’s own record hedges the gift as “probably”).', price: null },
    { year: '1949', who: 'A private collection', place: 'Paris', note: 'Entered a Paris private collection in 1949.', price: null },
    { year: '1952', who: 'Carstairs Gallery & Sidney Janis Gallery', place: 'New York', note: 'Bought jointly by the two New York dealers in 1952.', price: null },
    { year: '1952–1998', who: 'Mr. and Mrs. John Hay Whitney', place: 'New York', note: 'Sold by the dealers to the Whitneys on 6 August 1952. John Hay Whitney (1904–1982) and his wife Betsey Cushing Whitney (1908–1998) held it for nearly half a century.', price: null },
    { year: '1998–today', who: 'National Gallery of Art', place: 'Washington, D.C.', note: 'Bequest of the estate of Mrs. John Hay Whitney, 1998. Accession 1998.74.7. Collection of Mr. and Mrs. John Hay Whitney. On view.', price: 'bequest to the museum', museum: true },
  ],
  figures: [
    { name: 'Henri Matisse', role: 'The painter', palette: ['#4a7a4a', '#8a4a2a', '#15110c'] },
    { name: 'André Derain', role: 'Painted beside him at Collioure', palette: ['#bf6a2a', '#3a5a7a', '#140e0a'] },
    { name: 'Louis Vauxcelles', role: 'The critic who named the wild beasts', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
    { name: 'John Hay Whitney', role: 'Owner, 1952–1998', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Betsey Cushing Whitney', role: 'Her 1998 bequest brought it to Washington', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The boats over their own reflections', where: 'Center, the middle band, out on the water beyond the balcony rail', detail: 'Small masted sailing boats ride the harbor, their masts a rust orange-red, their hulls picked out in blue, pink, green and orange, each one sitting over its own smear of colored reflection on the water. They are the one clearly readable “real subject” of the whole view: everything around them loosens toward pure pattern, but the boats stay boats. If you want to prove to yourself that this is a window onto an actual working port and not an abstraction, the boats are where you look.' },
    { label: 'The flower pots on the balcony', where: 'Lower center, on the floor of the shallow balcony just inside the window opening', detail: 'A little cluster of potted plants sits on the balcony floor, the pots themselves dabbed in red, orange and blue. They are a near foreground, the closest thing in the picture to where you’re standing, and they do quiet structural work: by sitting right under your eye they shove the harbor back and turn the middle of the canvas into deep space. A small domestic detail, three pots on a sill, holding open the whole distance to the sea.' },
    { label: 'The open casement window', where: 'The two tall leaves swinging in from the left and right edges, with their cross-bars and small panes', detail: 'A large French window stands open, its two casement leaves swung inward toward you from either edge, carrying scribbled dabs of green that read as climbing vines down their sides. This window frame is the literal skeleton of the picture: the wall holds the window, the window frames the middle ground, the balcony crops the harbor, the harbor runs out to the horizon. It is a structure of frames within frames, and the casement is the frame you look through first.' },
    { label: 'The flat pink and green side-walls', where: 'The flat vertical bands at the far left and far right edges, the interior wall to one side, the window-leaf to the other', detail: 'Down each edge of the canvas runs a flat slab of color, the interior wall on one side and the open leaf on the other, laid in as broad unbroken planes (the National Gallery–affiliated reading names them peacock blue and fuchsia pink). These calm side-bands frame the busy center, and the point to take from them is that the color is invented: this is not the actual paint of an actual room, it is whatever hue Matisse decided the picture needed there.' },
    { label: 'The patchwork of pure, unmixed color', where: 'Across the whole canvas, comparing the broken dashes of sky and water to the flat slabs of the walls and the scribbled dabs of the vines', detail: 'Every zone of the picture is built from a different mark: flat planes for the interior, short broken dashes (the divided touch Matisse borrowed from the dot painters) for the sky and water, quick scribbled strokes for the foliage. The colors go down pure and unmixed, set in complementary pairs that make each other ring, orange against blue in the masts and hulls, red against green in the blossoms and leaves. The whole surface is a patchwork of separate, deliberate, non-naturalistic touches.' },
    { label: 'The dissolved line between inside and outside', where: 'The seam where the balcony rail and window opening meet the water, the middle of the canvas', detail: 'There is no firm line where the room stops and the harbor begins. The same hot pinks and greens run from the interior wall, across the sill and the vines, and straight out onto the water and the sky, so inside and outside fuse into one continuous field of color. That collapse of the threshold is the picture’s core move: the window is wide open, and the painting refuses to treat the view through it as a separate, distant thing.' },
  ],
  lineage: {
    parents: [ { label: 'Post-Impressionism', mode: 'art' }, { label: 'Pointillism', mode: 'art' }, { label: 'The summer at Collioure', mode: 'civ' } ],
    children: [ { label: 'Fauvism', mode: 'art' }, { label: 'Matisse’s window pictures', mode: 'art' }, { label: 'Modern color painting', mode: 'art' } ],
  },
}

// REGISTRY (coordinator splices into ART_WORK_CONTENT):
//   open-window: OPEN_WINDOW,
```

---

## PART B — chapter prose (`Win`-prefixed components)

```tsx
// ─────────────────────────────────────────────────────────────
// Open Window, Collioure (Matisse, 1905) — the five chapters
// ─────────────────────────────────────────────────────────────
function WinCollioure({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Collioure · summer 1905" title="A fishing port and a younger painter" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the <strong>summer of 1905</strong>, <strong>Henri Matisse</strong> (1869&ndash;1954), thirty-five years old and not yet famous, took his family south to a small fishing village called <strong>Collioure</strong> (pronounced &ldquo;koll-YOOR&rdquo;). It sits on France&rsquo;s Mediterranean coast, down near the Spanish border in the old region of Roussillon, where the Pyrenees come down to meet the sea: a working port of red-tiled houses, fishing boats, and a light that is harder and brighter than anything in Paris. He rented an apartment overlooking the harbor. The picture we&rsquo;re going to look at is, quite literally, the view out of one of its windows.
      </p>
      <p style={proseStyle}>
        Matisse did not go down there to be alone. In <strong>early July</strong> he was joined by a younger painter, <strong>André Derain</strong> (1880&ndash;1954; pronounced &ldquo;deh-RANN&rdquo;), then twenty-four. The two of them spent the summer painting side by side, out in the hard southern light, pushing each other further than either would have gone alone. They are the reason Collioure gets called, in nearly every art-history book that mentions it, &ldquo;the birthplace of Fauvism.&rdquo; Treat that phrase gently. Fauvism (we&rsquo;ll get to the name and where it came from in a later chapter) was not born on a particular Tuesday in a particular doorway. It was a way of painting that came together over a summer, in two men working in the same town on the same problem, and Collioure is the place where it happened. It is a where, not a when.
      </p>
      <p style={proseStyle}>
        So hold the setting. A small port. A rented room over the water. The Mediterranean sun. A friend painting in the next street. And a window, thrown open onto the harbor, that Matisse decided to paint exactly as it stood, except in colors that no harbor on Earth has ever actually worn.
      </p>
    </article>
  )
}

function WinMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="The view he chose, and the view he didn’t" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he subject could not be simpler. Matisse stood (or sat) inside his room and painted what was in front of him: a tall French window, its two leaves swung open, framing the harbor below and the sea beyond. People had been painting the view-out-the-window for centuries. What makes this one a turning point is not the motif. It is what he did to the color.
      </p>
      <p style={proseStyle}>
        Up to this summer, the rule of European painting, even the rebel painting, was that color described the world. A sky was some version of blue because skies are blue; a shadow was a darker, cooler version of the thing it fell on. Matisse threw that rule out. He chose his colors for what they did to each other and to you, not for what the harbor actually looked like. The water is laid in with strokes of pale pink. The sky is streaked with green. The walls of his own room are not the color of any plaster. This is the move that defines Fauvism, and it is the thing to carry into the next chapter when you actually look at the canvas: the color here is <em>expressive</em>, picked to carry feeling, not to copy what the eye reports.
      </p>
      <SectionHeader accent={accent} label="Zone by zone" title="A different brush for every part of the picture" />
      <p style={proseStyle}>
        The second thing Matisse did is easy to miss until someone points it out, and then you can&rsquo;t stop seeing it: he painted each area of the picture with a <strong>completely different handling of the brush</strong>. The flat interior walls are laid in as broad, calm planes of unbroken color. The sky and the water are built from short, broken, separate dashes, the divided touch he had picked up from the dot painters (the Neo-Impressionists, who built their pictures out of small separate strokes of pure color). The foliage on the window leaves is quick, scribbled, nervous. The boats and their reflections are dabbed. It is as though four or five different painters worked on one small canvas, each in his own hand, and the picture holds them all together by sheer color.
      </p>
      <p style={proseStyle}>
        And the color goes down <strong>pure and unmixed</strong>, often straight from the tube, set deliberately in <strong>complementary pairs</strong> (the colors that sit opposite each other on the color wheel and make each other vibrate when placed side by side): orange masts over blue hulls, red blossoms among green leaves. A reading published by the National Gallery&rsquo;s own people goes through the canvas hue by hue and names them, peacock blue and fuchsia walls, a band of ultramarine on the balcony, masts of rust orange, a sky of steel blue and seafoam green. Take those named colors as one careful viewer&rsquo;s account rather than gospel. The fact you can stand on, the one anyone can see, is that the color is unnatural, pure, and chosen to clash and ring.
      </p>
      <p style={proseStyle}>
        That is the whole technical argument of the picture, made on a canvas under two feet tall: drop the job of describing the world, give it to color instead, and let color do the describing on its own terms. Now go look at what that produced.
      </p>
    </article>
  )
}

function WinLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A small, vertical, explosive thing" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, the size and shape, because both surprise people. The painting is <strong>small</strong>, under two feet tall, about <strong>one foot nine and three-quarter inches high by one foot six inches wide</strong>, roughly the size of a large open book or a serving tray. And it is a <strong>portrait</strong>, taller than it is wide. That last fact catches almost everyone out: this is a picture of a harbor, and harbors are wide, so the mind expects a long horizontal canvas. It isn&rsquo;t. It stands up tall and narrow, which is the first clue that the real subject here is not the harbor sprawling out sideways but the <em>window</em>, standing upright in the wall, with the harbor seen through it.
      </p>
      <SectionHeader accent={accent} label="Frames within frames" title="The window holding the harbor" />
      <p style={proseStyle}>
        Now let your eye build the picture from the outside in, because that is how it is constructed: as a set of <strong>frames within frames</strong>. The outermost frame is the <strong>wall of the room</strong>, two flat vertical bands of color running down the far left and far right edges of the canvas. Inside those, swinging in toward you from each edge, are the two leaves of an <strong>open French window</strong>, their cross-bars and little panes of glass visible, dabs of green scribbled down their sides like climbing vines. Inside the window opening is a shallow <strong>balcony</strong>, with a low rail, and a cluster of <strong>flower pots</strong> on its floor. And beyond the balcony, framed by all of that, is the <strong>harbor</strong>, with its boats, reaching back to a band of <strong>water and sky</strong> at the top. Wall holds window; window frames balcony; balcony crops harbor; harbor runs to the sea. You are looking through a stack of openings, and the window is the one you look through first.
      </p>
      <SectionHeader accent={accent} label="The boats" title="The one thing that stays a thing" />
      <p style={proseStyle}>
        Out on the water, in the middle band of the picture, ride a few small <strong>sailing boats</strong>. Find them, because they are the anchor of the whole view. Their <strong>masts are rust orange-red</strong>, thin verticals standing up off the water; their <strong>hulls are blue, pink, green and orange</strong>; and each boat sits over its own little smear of <strong>colored reflection</strong>, the same hues doubled and broken on the surface below. They are the one clearly readable real subject in the picture. Everything else, the walls, the vines, the water, loosens toward pure pattern, but the boats stay boats. They are the proof, if you need one, that you are looking through a window at a working harbor and not at an abstraction.
      </p>
      <SectionHeader accent={accent} label="The color, up close" title="Pure patches, set to clash" />
      <p style={proseStyle}>
        Here is the part you have to look at the actual canvas to feel. Get close and watch how the surface is made, because it is made differently in every zone. The <strong>side walls</strong> are flat, calm slabs of pure color, pink on one side, green on the other, no shading, no modeling, just unbroken planes. The <strong>sky and water</strong> are nothing like that: they are built from short, broken <strong>dashes</strong> of separate color laid side by side, pale pink and butter yellow on the water, streaks of blue and green in the sky, so that up close they read as a flicker of separate touches rather than a smooth wash. The <strong>vines</strong> on the window leaves are quick green <strong>scribbles</strong>. The boats are <strong>dabs</strong>. And the colors are chosen to fight: <strong>orange masts against blue hulls, red blossoms against green leaves</strong>, each pair set so the two colors make each other louder. Pull back six feet and the whole small canvas hums. Step in close and it falls apart into dozens of separate, deliberate, pure-color marks. That double life, a coherent harbor far off and a patchwork of raw color near to, is the entire Fauve experiment in one little frame.
      </p>
      <SectionHeader accent={accent} label="The dissolved threshold" title="Where the room and the sea become one color-field" />
      <p style={proseStyle}>
        Now the move that matters most, and the one easiest to walk past. Look at the <strong>seam</strong> in the middle of the canvas, where the balcony rail and the window opening meet the water. You will not find a firm line there between <em>inside</em> and <em>outside</em>. The same hot pinks and greens that paint the interior wall run across the sill, down the vines, and straight out onto the harbor and into the sky. The color does not change its character when it crosses the threshold. So although the picture is built as a window, a literal frame separating a room from a view, the <em>paint</em> refuses to keep them apart. Inside and outside fuse into one continuous field of color. The window is wide open, and Matisse has answered the open window by letting the world flood in until you can&rsquo;t say where the room ends and the sea begins. That collapse, more than any single bright color, is the picture&rsquo;s quiet thesis: a window is not a barrier, it is an invitation, and color is what pours through it.
      </p>
    </article>
  )
}

function WinSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · autumn 1905" title="The rebel autumn show" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        hat autumn the picture went up on a wall in Paris, at the <strong>Salon d&rsquo;Automne</strong> (the &ldquo;Autumn Salon&rdquo;), the young alternative exhibition that had started two years earlier as a looser, more adventurous rival to the stuffy official Salon. It was held at the <strong>Grand Palais</strong>, the great glass-and-iron exhibition hall on the Champs-&Eacute;lys&eacute;es. <em>Open Window, Collioure</em> hung in <strong>Room VII</strong> (Salle VII), and it did not hang there alone.
      </p>
      <p style={proseStyle}>
        Room VII was a concentration of the wildest new painting in France: canvases by Matisse, by his summer companion <strong>Derain</strong>, by <strong>Maurice de Vlaminck</strong> and others, all of them painted in the same off-the-leash color. And in the middle of this roomful of violent canvases stood two small, prim, <strong>Renaissance-style marble busts</strong> by a conventional sculptor named <strong>Albert Marque</strong>, sober little things that looked as if they had wandered in from a different century. Hung in the same room was Matisse&rsquo;s other 1905 lightning rod, <strong>Woman with a Hat</strong> (a portrait of his wife with her face built of green and mauve), which drew the loudest noise of all. The two Matisses, the open window and the woman in the hat, were the room&rsquo;s twin scandals.
      </p>
      <SectionHeader accent={accent} label="The naming" title="Donatello among the wild beasts" />
      <p style={proseStyle}>
        Here is where a famous story gets told badly, so we&rsquo;ll tell it carefully. On <strong>17 October 1905</strong>, the critic <strong>Louis Vauxcelles</strong> (pronounced &ldquo;voh-SELL&rdquo;), reviewing the show in the newspaper <em>Gil Blas</em>, looked at those gentle Marque busts surrounded by all that howling color and wrote a line that stuck: <em>&ldquo;Donatello chez les fauves&rdquo;</em>, &ldquo;Donatello among the wild beasts.&rdquo; (Donatello was a great sculptor of the Italian Renaissance; <em>les fauves</em> is French for &ldquo;the wild beasts.&rdquo;) That printed phrase is what gave the movement its name: <strong>Fauvism</strong>, the art of <em>les fauves</em>, the wild beasts.
      </p>
      <p style={proseStyle}>
        Now the three things people get wrong, and the corrections. <strong>First:</strong> the line was about the <em>whole room</em>, prompted by the contrast between the calm Marque busts and the savage canvases around them. It was not aimed at this one painting. <em>Open Window, Collioure</em> did not personally provoke the phrase; do not let anyone tell you it &ldquo;named Fauvism,&rdquo; because the room did, and the busts did. <strong>Second:</strong> the painters did not coin the word, a hostile critic did, and they only later wore the insult as a badge. <strong>Third,</strong> and subtlest: there is a beloved version of the story in which an unnamed passer-by, seeing the room, supposedly said to Matisse, &ldquo;Donatello in the cage with the wild beasts.&rdquo; That version comes from Vauxcelles himself, but only in a book he wrote in <strong>1939</strong>, thirty-four years later, recalling the scene. So the printed 1905 line is solid, documented history; the live, spoken &ldquo;cage&rdquo; quote is the critic&rsquo;s own much-later retelling, and it should be held at arm&rsquo;s length, framed as a story, not played as a scene that we know happened.
      </p>
      <p style={proseStyle}>
        One more clean separation, because the two pictures get blurred constantly. It was <em>Woman with a Hat</em>, not this canvas, that the American collectors <strong>Leo and Gertrude Stein</strong> bought off the wall at the close of the 1905 Salon, for somewhere around five hundred francs. That purchase belongs to the woman in the hat. <em>Open Window, Collioure</em> went its own quieter way out of the show, which is the next chapter.
      </p>
    </article>
  )
}

function WinAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The motif" title="The window that never closed" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he most important thing about <em>Open Window, Collioure</em> is not what happened to the object afterward, but what happened to the <strong>subject</strong>. The open window turned out to be the one motif Matisse came back to, again and again, for the rest of his long working life. He painted windows in Paris, then in <strong>Nice</strong> on the south coast and at <strong>&Eacute;tretat</strong> on the Channel, on into the late 1940s. The window, the threshold where an interior meets the world outside, became his lifelong subject and, in a way, his lifelong metaphor for what a painting even is: a frame opening onto color. This small 1905 canvas is the early, foundational statement of that idea. It is where the window first swings open.
      </p>
      <SectionHeader accent={accent} label="Provenance" title="From a Le Havre collector to Washington" />
      <p style={proseStyle}>
        The painting&rsquo;s life as an <strong>object</strong>, its <strong>provenance</strong> (the documented chain of who owned a work of art, from the painter&rsquo;s hand to where it hangs now), is short and a little hazy in the middle, and worth getting exactly right because the easy version is wrong. It did <em>not</em> go straight from Matisse into a great museum. In <strong>1906</strong>, the year after the Salon, it was acquired by a collector in <strong>Le Havre</strong> named <strong>Pieter Van der Velde</strong>. Sometime around <strong>1915&ndash;1918</strong> it was, in the National Gallery&rsquo;s own carefully hedged words, <em>probably given</em> to Van der Velde&rsquo;s son-in-law, a <strong>General R&eacute;quin</strong>. (When a museum says &ldquo;probably,&rdquo; keep the &ldquo;probably.&rdquo; The record genuinely isn&rsquo;t certain here.)
      </p>
      <p style={proseStyle}>
        In <strong>1949</strong> it surfaced in a Paris private collection. In <strong>1952</strong> two New York dealers, the <strong>Carstairs Gallery</strong> and the <strong>Sidney Janis Gallery</strong>, bought it jointly, and on <strong>6 August 1952</strong> they sold it to <strong>Mr. and Mrs. John Hay Whitney</strong>. (John Hay Whitney, 1904&ndash;1982, was an American businessman, collector and diplomat; his wife was Betsey Cushing Whitney, 1908&ndash;1998.) Note what that 1952 line tells you: the Whitneys bought it from dealers, not from the artist. No dollar prices survive in the public record for any of these sales, in 1906, 1949, or 1952, so there are no figures to give, and inventing one would be worse than leaving the blank.
      </p>
      <p style={proseStyle}>
        Then, in <strong>1998</strong>, the painting came to rest. The estate of <strong>Mrs. John Hay Whitney</strong> bequeathed it, with the rest of the Whitneys&rsquo; collection, to the <strong>National Gallery of Art</strong> in Washington, D.C. (accession number 1998.74.7), where it hangs today under the credit line &ldquo;Collection of Mr. and Mrs. John Hay Whitney.&rdquo; A small, vertical, under-two-feet canvas of a window thrown open onto a Mediterranean harbor, painted in a single summer in colors no harbor ever wore, that helped earn a roomful of painters the name <em>wild beasts</em>, now hangs quietly on a wall in Washington with the window still open.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  open-window: { collioure: WinCollioure, making: WinMaking, looking: WinLooking, salon: WinSalon, afterlife: WinAfterlife },
```
