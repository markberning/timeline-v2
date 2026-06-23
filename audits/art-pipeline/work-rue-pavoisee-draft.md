# DRAFT — Raoul Dufy, *La Rue pavoisée* (Street Decked with Flags), 1906 · WORK read

Authored from `work-rue-pavoisee-factpack.md` (source of truth) through the gated art
pipeline shape (matches `STARRY_NIGHT` / `BEDROOM_ARLES`). Imperial dimensions only;
new prose uses parentheses/commas, never em-dashes. Born-verified facts only.

**LEGEND / handling notes baked in:**
- Matisse's *Luxe, calme et volupté* (1905 Indépendants) is stated as **effect** ("turned
  him toward Fauvism / a revelation he later described"), NOT a flat quote.
- The street is **"a Le Havre street decked for the 14th of July,"** never named "Rue des
  Drapiers" (Pompidou record names no street).
- This is the **1906 Pompidou (MNAM) AM 4113 P** canvas only — NOT the 1907 MoMA, NOT the
  NGA Washington July-14 canvases.
- **No lettering/signs annotation** (unconfirmed); the 6th pointer is the high-key palette.
- Monet's 1878 flag-street fête painting named **generically** (not Montorgueil vs Saint-Denis).

---

## PART A — paste-ready `ArtWorkContent` const

```ts
// ─────────────────────────────────────────────────────────────
// Work, La Rue pavoisée (Street Decked with Flags), Raoul Dufy, 1906,
// Musée national d'art moderne, Centre Pompidou (inv. AM 4113 P). The
// Fauvism work read. Authored through the art content pipeline (fact pack
// → Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['rue-pavoisee'] (Rue… prefix). LEGENDS handled per fact pack:
// Matisse's Luxe, calme et volupté turned Dufy toward Fauvism (stated as
// EFFECT, no flat "a revelation" quote); the street is "a Le Havre street,"
// NOT named "Rue des Drapiers"; this is the 1906 Pompidou canvas, NOT the
// 1907 MoMA or NGA Washington versions; no lettering/signs annotation
// (unconfirmed); the Monet flag-street precedent named generically.
// ─────────────────────────────────────────────────────────────
export const RUE_PAVOISEE: ArtWorkContent = {
  id: 'rue-pavoisee',
  name: 'Street Decked with Flags',
  shortName: 'La Rue pavoisée',
  year: 1906,
  artist: 'Raoul Dufy',
  artistId: 'dufy',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 7 7/8 in × 2 ft 1 5/8 in',
  location: 'Musée national d’art moderne, Centre Pompidou, Paris',
  acquired: 'Bequest of Mme Raoul Dufy, 1963 (inv. AM 4113 P)',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Fauvism', index: 8, total: 9 },
  hook: 'His home port’s street dressed for Bastille Day, where Dufy let a wall of tricolor flags do the radical work, flat patches of pure red, white and blue that flatten the whole street into pattern.',
  heroImage: ART_IMG.dufyRuePavoisee,
  heroCredit: 'Dufy, La Rue pavoisée (Street Decked with Flags), 1906 · Musée national d’art moderne, Centre Pompidou, Paris',
  heroAspect: 0.8, // 81 × 65 cm (H × W), portrait → W/H = 65/81 ≈ 0.80
  heroFit: 'contain', // the whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1906', k: 'Painted' },
    { v: '2′8″ × 2′1½″', k: 'Dimensions' },
    { v: 'Pompidou (MNAM)', k: 'Now at' },
  ],
  sections: [
    { id: 'le-havre', eyebrow: 'Le Havre · 1906', dateLabel: '1906', title: 'The painter who came from the port', blurb: 'Dufy was born in Le Havre, the big Norman port at the mouth of the Seine, and grew up among its harbor basins, yachts and regattas. The flag motif came straight out of his sea pictures, and this is his own hometown painted on its festival day.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'summer 1906', title: 'Matisse’s shock, and Marquet at the next window', blurb: 'Seeing Matisse’s Luxe, calme et volupté at the 1905 Indépendants turned Dufy toward Fauvism. The next summer he worked the Normandy coast beside Albert Marquet, the two painting the same flag-decked Le Havre streets side by side for the 14th of July.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 7 7/8 in × 2 ft 1 5/8 in', title: 'A street that is all pure color', blurb: 'The frontal tricolor at the center, the cascade of red-white-blue flag-patches down the street, the green-and-pink houses running back in steep perspective, the festival crowd below, and a high-key holiday palette that builds the space out of flat color, not light.', progress: 0.56 },
    { id: 'break', eyebrow: 'Why it matters', dateLabel: '1906', title: 'The festival doing the Fauve’s work', blurb: 'The Pompidou’s own point: by hanging a French flag frontally at the center, Dufy radically emphasizes the flatness of the picture surface. The subject is already abstract color, and the picture lets that color, independent of the motif, generate the space.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1906–today', title: 'The breakthrough he kept his whole life', blurb: 'Dufy’s Fauve period was brief; Cézanne soon pulled him a different way and the famous decorative style came later. He never sold this canvas. It went to his widow, who bequeathed it to the French national modern-art museum in 1963.', progress: 0.96 },
  ],
  provenance: [
    { year: '1906–1953', who: 'Raoul Dufy (the artist)', place: 'Le Havre / Paris', note: 'Painted in Le Havre for the 14th of July celebrations of 1906. Never sold; kept by Dufy himself his whole life, a painter’s own bookmark of a breakthrough. To his widow on his death on 23 March 1953.', price: null },
    { year: '1953–1963', who: 'Émilienne Dufy (the artist’s widow, “Mme Raoul Dufy”)', place: 'Paris', note: 'Passed to his widow, who held it for the decade after his death.', price: null },
    { year: '1963–today', who: 'Musée national d’art moderne (Centre Pompidou)', place: 'Paris', note: 'Bequest of Mme Raoul Dufy, 1963 (“Legs de Mme Raoul Dufy”). Inv. AM 4113 P. It never went to market; artist → widow → national bequest. On permanent view.', price: 'bequest to the museum', museum: true },
  ],
  figures: [
    { name: 'Raoul Dufy', role: 'The painter; Le Havre native', palette: ['#bf2f25', '#1d4ed8', '#0e0c0a'] },
    { name: 'Henri Matisse', role: 'Turned him toward Fauvism', palette: ['#c8b84a', '#3a6a8a', '#14120a'] },
    { name: 'Albert Marquet', role: 'Painted the same flagged streets beside him', palette: ['#6a6a74', '#2e3a42', '#0e1014'] },
    { name: 'Claude Monet', role: 'Precedent: the 1878 flag-street fête', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Mme Raoul Dufy', role: 'Bequeathed it to the nation, 1963', palette: ['#8a4d3b', '#3e3320', '#12100a'] },
  ],
  annotations: [
    { label: 'The tricolor that flattens the street', where: 'Hung frontally near the center of the composition, a French flag parallel to the canvas', detail: 'This is the documented heart of the picture. By placing a French flag frontally at the center, the Pompidou catalogue says, Dufy “radically emphasizes the flatness of the picture surface.” It is a flat bar of pure blue, white and red, parallel to the canvas, that Dufy does not model in light and shade; he lets it sit as a flat patch. It is the festival’s own ready-made piece of pure color, and it does the most radical thing in the painting.' },
    { label: 'A street that is all flags', where: 'The upper register, the flags strung and hung along the street', detail: 'The whole upper picture is the pavoisement, the act of dressing a street in flags for the national holiday. Run your eye up from the central tricolor and the buildings give way to a scatter of red, white and blue patches, flag after flag, that turns the top of the canvas into a confetti of pure color rather than a row of façades. The subject hands Dufy a whole street’s worth of unmixed color, already cut into shapes.' },
    { label: 'Green-and-pink houses in steep perspective', where: 'The receding houses lining the street, behind and around the central flag', detail: 'Behind the tricolor the houses run back in green and pink (the colors the museum names) along a steep, raised perspective, the street tipping away from a high viewpoint. The cool greens and warm pinks of the buildings set off the foreground flag, so the whole picture is built as broad areas of flat, contrasting color, the houses as much a pattern as the flags.' },
    { label: 'The festival crowd below', where: 'The lower street, beneath the flags', detail: 'Down under the flags is the holiday throng, handled as loose patches rather than drawn-out figures. The high, raised viewpoint, one source notes, “accentuates the animated character” of the scene, looking down onto the crowd from above. They are not portraits; they are the moving life of the festival, brushed in as color and motion.' },
    { label: 'Color making the space, not light', where: 'Across the whole surface, the broad flat areas (aplats) of vivid, unmodelled color', detail: 'There is almost no Impressionist atmosphere here, no shimmer dissolving the edges. Instead, as the French study of the picture puts it, “color, independent of the subject, generates the space.” The street is built from flat areas of vivid color (aplats) laid side by side, each shape its own clean patch. Compare it to Monet’s flag streets, where the flags melt into atmosphere; Dufy’s stay as flat shapes you could cut out with scissors.' },
    { label: 'The high-key holiday palette', where: 'Overall, the saturation across the entire canvas', detail: 'Take in the whole surface at once and the key is bright and festive: vivid reds, blues, greens and pinks at close to full strength, the opposite of muted Impressionist tone. The palette itself carries the celebration; the picture feels like a holiday before you have named a single object in it. This high, saturated chord is the festival’s mood made into paint.' },
  ],
  lineage: {
    parents: [
      { label: 'Matisse’s Fauvism', mode: 'art' },
      { label: 'Monet’s flag streets', mode: 'art' },
      { label: 'The port of Le Havre', mode: 'civ' },
    ],
    children: [
      { label: 'Flat-color modern painting', mode: 'art' },
      { label: 'Dufy’s decorative style', mode: 'art' },
      { label: 'Textile & pattern design', mode: 'civ' },
    ],
  },
}
```

---

## PART B — five `Rue`-prefixed React components (absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// La Rue pavoisée (Street Decked with Flags), Dufy, 1906 — the five chapters
// ─────────────────────────────────────────────────────────────
function RueLeHavre({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Le Havre · 1906" title="The painter who came from the port" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        ome painters have to go looking for a subject. <strong>Raoul Dufy</strong> (pronounced &ldquo;ra-OOL doo-FEE&rdquo;; 1877&ndash;1953) was handed his on the day he was born, because he was born in <strong>Le Havre</strong> (pronounced &ldquo;luh AHV-ruh&rdquo;), the big Norman port that sits where the river Seine empties into the English Channel. Le Havre in 1877 was France&rsquo;s great transatlantic harbor, a working city of basins and dry docks and warehouses, where the masts of cargo ships and the white sails of yachts crowded the water and the whole town faced the sea. Dufy grew up inside that picture. The harbor, the regattas (the sailing races held offshore on holidays), the rows of signal flags strung up a yacht&rsquo;s rigging, the sea itself, that was the world he could see from the end of his own street, and it became the thing he painted for the rest of his life.
      </p>
      <p style={proseStyle}>
        He came up the way a poor, talented provincial boy came up. He took evening classes at <strong>Le Havre&rsquo;s own School of Fine Arts</strong> starting in 1895, won a scholarship to the senior national art school in <strong>Paris</strong> around 1900 (the <strong>École nationale supérieure des beaux-arts</strong>, the official academy where French painters were trained), and learned to paint the way everyone learned to paint. None of that is what we&rsquo;re here for. We&rsquo;re here for one canvas he made back home, in his home port, on a single summer holiday in 1906, when everything he knew how to do collided with something he had just learned how to see.
      </p>

      <SectionHeader accent={accent} label="The flag motif" title="It started on the water" />
      <p style={proseStyle}>
        Here is a small fact that explains a great deal about the painting. The word in its French title is <em>pavoisée</em> (pronounced &ldquo;pav-wah-ZAY&rdquo;), which means &ldquo;decked&rdquo; or &ldquo;dressed&rdquo; with flags. It comes from <em>pavois</em>, the naval term for the long run of signal flags a ship hoists from stem to stern to &ldquo;dress&rdquo; itself for a celebration. The word is a sailor&rsquo;s word, and that is the right pedigree, because Dufy&rsquo;s love of the flag did not begin in a street at all. It began on the water, in his yacht and regatta pictures, where a boat dressed overall in bright pennants gave him exactly what a painter dreams of: rows of pure, flat color, hung up in the open air, ready to paint. The flag was already doing his work for him out on the harbor before he ever brought it ashore.
      </p>
      <p style={proseStyle}>
        So when Le Havre dressed its <em>streets</em> in flags for the national holiday, Dufy was looking at his own favorite subject moved indoors, so to speak, off the water and into the town. <em>La Rue pavoisée</em> (&ldquo;the street decked with flags&rdquo;) is a port painter&rsquo;s picture of his port city on the one day a year it turns itself into a regatta on land. It is a hometown picture, and the home is a harbor, and the flags are the same flags he had been painting on boats all along.
      </p>
    </article>
  )
}

function RueMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1905" title="The picture that turned him around" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1905 Dufy was a competent young painter doing competent young paintings, soft and atmospheric in the leftover Impressionist manner. Then he walked into the <strong>Salon des Indépendants</strong> (the &ldquo;Independents&rsquo; Salon,&rdquo; a big open exhibition any artist could show in, no jury, no gatekeepers) and stood in front of a single canvas by <strong>Henri Matisse</strong> (1869&ndash;1954), the older painter who was about to become the most important colorist in France. The picture was <em>Luxe, calme et volupté</em> (the title, &ldquo;luxury, calm and pleasure,&rdquo; comes from a Baudelaire poem), a beach scene built out of high-keyed, unmixed, almost shadowless color. Dufy later described the encounter as a turning point, the moment he understood what painting could now do, and from that day his interests turned hard toward what would shortly be called <strong>Fauvism</strong>.
      </p>
      <p style={proseStyle}>
        A word on that name, because we&rsquo;re going to lean on it. <strong>Fauvism</strong> (pronounced &ldquo;FOH-vism,&rdquo; from the French <em>fauve</em>, &ldquo;wild beast&rdquo;) was the first big shock of twentieth-century painting, a brief, hot movement in which a loose band of painters around Matisse threw out the rule that color had to describe the real world. A tree could be red. A face could have a green stripe down it. Color came off the leash and became the whole point, laid on flat and pure and loud. A hostile critic, seeing a roomful of it at the 1905 autumn salon, sneered that the painters were <em>fauves</em>, wild beasts, and the insult stuck as the name. Matisse&rsquo;s beach scene was the door Dufy walked through into all of that.
      </p>

      <SectionHeader accent={accent} label="Le Havre · summer 1906" title="Marquet at the next window" />
      <p style={proseStyle}>
        The conversion did not happen in a single afternoon; it matured over the next year, and it came to a head back home in the summer of <strong>1906</strong>, when Dufy went to work the Normandy coast in the company of a friend and fellow Fauve, the painter <strong>Albert Marquet</strong> (pronounced &ldquo;mar-KAY&rdquo;; 1875&ndash;1947). The two of them set up shop together along the harbor, painting, by one account, side by side from the windows of hotel bedrooms: the basins, the open sea, the poster-plastered walls, and the city streets dressed in flags for the holiday. They were two painters chasing the same subjects out the same windows, and the flag-decked street was a motif they both seized that summer. Marquet painted his own version of the flagged Le Havre; Dufy painted ours. (If you ever meet Marquet&rsquo;s <em>14th of July at Le Havre</em>, that is the brother canvas, a separate painter&rsquo;s separate take on the same festival.)
      </p>
      <p style={proseStyle}>
        The holiday they were painting is the <strong>14th of July</strong>, the French national day, the rough equivalent of the American Fourth of July, when the whole country hangs out the <strong>tricolor</strong>, the blue-white-red flag of the French Republic. A French town on the 14th of July strings flags across its streets and down its façades until you can barely see the buildings for the bunting. For a Fauve painter, that is not a backdrop. That is a gift: a whole street pre-loaded with patches of pure red, white and blue, the festival itself doing the color work. Dufy did not have to invent a reason to paint flat planes of unmixed primary color. His hometown handed him a street full of them, one day a year, for free.
      </p>
    </article>
  )
}

function RueLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A street that is all pure color" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is small and upright, about <strong>two feet eight inches tall by two feet one and a half wide</strong>, taller than it is wide, the size of a smallish window, which is fitting, because it more or less is one. It is <strong>portrait orientation</strong>, and that matters: a street seen down its own length, the buildings closing in on either side, is naturally a tall, narrow view, and Dufy uses the upright shape to send the street climbing up the canvas away from you. Stand back from it before you read a single object and the first thing that hits you is not a street at all. It is a wall of color: bright reds and blues and whites and greens and pinks, loud and flat and festive, more like a hung carpet or a scatter of confetti than a picture of a place. The holiday is in the painting before you have found anything in it.
      </p>

      <SectionHeader accent={accent} label="The center" title="One flag, hung flat, doing everything" />
      <p style={proseStyle}>
        Now let your eye settle on the middle of the picture, because that is where Dufy put the most radical thing in it: a <strong>French flag, hung frontally near the center</strong>, facing you square, parallel to the surface of the canvas. This is the heart of the whole painting, and it is worth slowing down for. Most painters, handed a flag, would let it ripple and twist and catch the light, modelling it round in light and shade so it sits in real space, a cloth object hanging in air. Dufy refuses. He paints it as what it physically is at this angle: a <strong>flat bar of pure blue, white and red</strong>, three clean stripes, lying on the canvas like a label stuck to the glass. He does not round it. He does not shade it. He lets it be flat. And because he lets that one flag be flat, the whole street behind it goes flat too, pressed up against the surface like a poster. The museum that owns the picture makes exactly this point: by placing the flag frontally at the center, Dufy &ldquo;radically emphasizes the flatness of the picture surface.&rdquo; One hung flag, and the depth of the world drains out of the painting on purpose.
      </p>
      <p style={proseStyle}>
        Think about what the festival has handed him here. A flag is already an abstract design, three blocks of pure color in a fixed pattern, made by somebody else, hung up by somebody else, before the painter ever arrives. Dufy doesn&rsquo;t have to invent his patch of flat color; he just has to be honest about the one already hanging in the street. The subject is <em>already</em> abstract. The 14th of July did the Fauve&rsquo;s job for him, and he was clever enough to leave it alone.
      </p>

      <SectionHeader accent={accent} label="Up the street" title="The cascade of flag-patches" />
      <p style={proseStyle}>
        Now follow the street upward from that central flag, and watch the whole top of the picture come apart into color. The <em>pavoisement</em>, the dressing of the street in flags, runs the length of the view, flag after flag strung and hung along the way, so that the upper register of the canvas stops being a row of buildings and becomes a <strong>cascade of red, white and blue patches</strong> tumbling down toward you. You read it less as cloth than as confetti, a shower of pure-color shapes, each one a clean little block that Dufy has refused to soften or round or sink into shadow. It is the same flatness as the central flag, multiplied up the street, until the top of the picture is a field of bright patches with the festival rattling through it.
      </p>

      <SectionHeader accent={accent} label="The houses and the crowd" title="Green and pink, running back" />
      <p style={proseStyle}>
        Behind and around the flags, the <strong>houses</strong> line the street and run back into the distance in a steep, raised perspective, the view tipping down on the scene from somewhere high up. And here Dufy keeps coloring against nature, because the houses are not house-colored. They are <strong>green and pink</strong>, cool green and warm pink set side by side, the colors the museum itself names in describing the picture. The greens and pinks of the buildings push against the red, white and blue of the flags, so that the whole canvas is organized as broad areas of flat, contrasting color, the architecture as much a pattern as the bunting. Down below, in the lower part of the street under all that flagging, is the <strong>festival crowd</strong>, the holiday throng, brushed in not as drawn-out figures but as loose patches of life. The high viewpoint, looking down onto the crowd, &ldquo;accentuates the animated character&rdquo; of the scene, as one study of the picture puts it: you are above the festival, watching it move.
      </p>

      <SectionHeader accent={accent} label="The whole surface" title="Color builds the space, not light" />
      <p style={proseStyle}>
        Pull back one more time and notice what is missing. There is almost no <strong>atmosphere</strong> in the painting, none of the soft Impressionist haze where edges dissolve and a street melts into light and air. That was the older way, the way Dufy himself had painted a year or two before, and the way <strong>Claude Monet</strong> (1840&ndash;1926), the great Impressionist, had painted his own famous flag-decked Paris streets back in 1878, the festival flags shimmering and breaking up into dabs of bright weather. Dufy had clearly looked hard at Monet&rsquo;s flag streets; this picture is partly an answer to them. But where Monet lets the flags melt into atmosphere, Dufy holds them as flat shapes you could cut out with scissors. The study of the picture by the French national museums puts the difference in one line: here, &ldquo;color, independent of the subject, generates the space.&rdquo; That is the whole modern move in a sentence. The space in this painting is not made by light and shadow and distance. It is made by where Dufy puts which patch of which color. Color is no longer describing the street. Color <em>is</em> the street.
      </p>
      <p style={proseStyle}>
        And the key the color is pitched in is the last thing to take in: a <strong>high, festive register</strong>, vivid reds, blues, greens and pinks at close to full strength, the opposite of muted Impressionist tone. The palette itself is the celebration. You can feel the holiday in the painting before you have named a single object in it, because the brightness is doing the talking. That is a Fauve picture: a street remade as a chord of pure, loud, flat color, struck once, on a summer holiday, in a port town that happened to have raised the painter who could hear it.
      </p>
    </article>
  )
}

function RueBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Why it matters" title="The festival doing the Fauve’s work" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hy does a small upright picture of a flagged street count for so much? Because of what it figured out about the relationship between a subject and its color, and it figured it out almost by luck, by being honest about a flag. Run the Fauve problem in your head for a second. The Fauve wanted to free color from its old job of describing the real look of things, to let red be red for its own sake and not because a tomato happens to be red. The trouble with that program is that it can feel arbitrary, a painter simply deciding to make a tree blue. Dufy found a subject where the freedom was not arbitrary at all, because the subject was <em>already</em> made of pure, flat, arbitrary color: a national flag, three stripes of unmixed pigment, hung frontally in the street.
      </p>
      <p style={proseStyle}>
        That is why the museum that owns the picture singles out the one move at its center. By placing a French flag frontally, square to the canvas, Dufy &ldquo;radically emphasizes the flatness of the picture surface.&rdquo; A flag seen flat-on is a flat thing; paint it honestly and you have painted a flat patch of pure color, and once the flag is flat the whole street pressed behind it goes flat with it. The picture stops pretending to be a window you look <em>through</em> and admits it is a surface you look <em>at</em>, a thing made of paint, covered in shapes. The festival handed Dufy the cleanest possible argument for everything the Fauves were trying to say, and he had the wit to take the gift and add nothing.
      </p>
      <p style={proseStyle}>
        Set it against the older way to see the size of the break. <strong>Monet&rsquo;s</strong> flag-decked street of 1878, the obvious ancestor of this picture, is a marvel of atmosphere: the tricolors caught mid-flutter, dissolved into shivering dabs of paint, the whole street a haze of breeze and light, color used to capture a fleeting <em>moment</em>. Dufy keeps the same motif, the same holiday, the same flags, and does the opposite. He freezes the flags into flat planes, drains out the atmosphere, and uses color not to record a passing instant of light but to build the space of the picture outright. As the French study of the canvas puts it, the color here is &ldquo;independent of the subject&rdquo; and &ldquo;generates the space&rdquo; on its own. That is the move that points past Impressionism altogether, toward a painting that is frankly about its own flat colored surface, and a small flagged street in Le Havre is where Dufy made it, plainly, on a holiday afternoon.
      </p>
    </article>
  )
}

function RueAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After Fauvism" title="A door he walked back out of" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>D</DropCap>
        ufy&rsquo;s Fauve moment was short. He ran hot with pure flat color for only a few years, roughly 1905 to 1909, and then contact with the work of <strong>Paul Cézanne</strong> (1839&ndash;1906), the painter who built his pictures out of solid, weighed-up structure, pulled him a different way, toward a subtler, more constructed handling. He flirted briefly with <strong>Cubism</strong> (the movement that broke objects into faceted planes), and then, from about 1920, he settled into the light, quick, decorative style that actually made him famous: thin washes of bright color floating over a skeletal pen drawing, regattas and racecourses and the Riviera, the manner most people picture when they hear the name Dufy. He went on to enormous decorative commissions, most spectacularly a huge mural about electricity, <em>La Fée Électricité</em>, in 1937.
      </p>
      <p style={proseStyle}>
        So <em>La Rue pavoisée</em> catches him at a white heat he soon left behind, one of the high points of a phase that lasted only a handful of years. And he seems to have known it. The Pompidou calls this version the most innovative of his flag streets, the flat tricolor foreground set against the green-and-pink perspective of the houses, and there is a quiet piece of evidence that Dufy agreed: <strong>he never sold it</strong>. He kept this canvas, by the museum&rsquo;s own phrase, &ldquo;his whole life.&rdquo; A painter keeps a picture for many reasons, but a painter keeps <em>this</em> one, the breakthrough, the day the festival showed him what color could do, the way you keep the thing you can&rsquo;t make twice.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="Artist, widow, nation" />
      <p style={proseStyle}>
        The painting&rsquo;s life as an object, its <strong>provenance</strong> (the documented chain of who has owned a work, from the painter&rsquo;s hand to wherever it hangs now), is about as short and clean as a famous picture&rsquo;s can be, precisely because it never went to market. Dufy painted it in Le Havre for the 14th of July, 1906, and held it himself until he died on 23 March <strong>1953</strong>. It passed to his widow, <strong>Émilienne Dufy</strong> (in the records, &ldquo;Mme Raoul Dufy&rdquo;), who kept it for another decade. Then, in <strong>1963</strong>, she gave it to the French state: a <strong>bequest</strong> (a gift made by will or donation) to the <strong>Musée national d&rsquo;art moderne</strong>, the national museum of modern art in Paris, now housed at the <strong>Centre Pompidou</strong>. There it has stayed, catalogued as <strong>AM 4113 P</strong>, on permanent view. Three owners in all, and two of them were Dufy and his wife. The canvas went straight from the painter who couldn&rsquo;t part with it to the country he painted it in.
      </p>
      <p style={proseStyle}>
        It is worth holding the dates straight, because Dufy painted several flag-decked Le Havre scenes in these years and the world has shuffled them ever since. The one we have been looking at is the <strong>1906</strong> canvas in the <strong>Pompidou</strong>, the one he kept. It is not the later 14th-of-July Le Havre painting in New York, and not the one in Washington. This is the one a port painter made of his own port on its festival day, in the brief season when color came off the leash, and then carried with him for the rest of his life.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'rue-pavoisee': { 'le-havre': RueLeHavre, making: RueMaking, looking: RueLooking, break: RueBreak, afterlife: RueAfterlife },
```
