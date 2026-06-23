# DRAFT — Umberto Boccioni, *The City Rises* (La città che sale), 1910

Authored from `audits/art-pipeline/work-city-rises-factpack.md` (source of truth) for the gated Art content pipeline. Voice modeled on `absinthe-narratives.tsx.txt`. Born-verified facts only; date is 1910 (1911 = the *Il lavoro* exhibition); "first major Futurist painting" kept Futurism-scoped; no invented prices; the horse-death stated plainly, framed as irony not prophecy. NEW prose uses no em-dash character (parentheses/commas); verbatim-quote punctuation preserved where quotes are used.

---

## PART A — `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The City Rises (La città che sale), Boccioni, 1910. MoMA.
// Boccioni's first major Futurist canvas (scope: Futurism, not a universal first).
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['city-rises'] (Cty… prefix).
// FACT HANDLING per fact pack: DATE 1910 (1911 = the Il lavoro exhibition only).
// Manifesto: do NOT write "first published in Le Figaro" (Italian printings preceded
// the 20 Feb 1909 Le Figaro front page). Marinetti FOUNDED Futurism (1909); Boccioni
// wrote the Technical Manifesto of Futurist Painting (1910). 1912 Busoni purchase
// price UNDOCUMENTED → price: null, never invented. Death-by-horse (1916) stated as
// fact and framed as irony, never as prophecy the paintings "foretold."
// ─────────────────────────────────────────────────────────────
export const CITY_RISES: ArtWorkContent = {
  id: 'city-rises',
  name: 'The City Rises',
  shortName: 'The City Rises',
  year: 1910,
  artist: 'Umberto Boccioni',
  artistId: 'boccioni',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 6 1/2 in × 9 ft 10 1/2 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Mrs. Simon Guggenheim Fund, 1951',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 1, total: 9 },
  hook: 'A nine-foot building site where a giant red workhorse lunges out of the dust and drags the men trying to hold it, Boccioni’s first all-out Futurist canvas, painting labor and the rising city with the violence the academy saved for battle scenes.',
  heroImage: ART_IMG.boccioniCity,
  heroCredit: 'Boccioni, The City Rises (La città che sale), 1910 · Museum of Modern Art, New York',
  heroAspect: 1.51, // 301 × 199.3 cm → W/H ≈ 1.51, landscape
  heroFit: 'contain', // the whole ~6½ × 10 ft canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1910', k: 'Painted' },
    { v: '6′6½″ × 9′10½″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'manifestos', eyebrow: 'Milan · 1909–1910', dateLabel: '1909–1910', title: 'A movement before it had a single painting', blurb: 'The poet Marinetti launches Futurism with a press release on the front page of a Paris newspaper, then recruits the painters. Boccioni and four others sign two 1910 manifestos and have to go and prove, in paint, what the words promised.', progress: 0.08 },
    { id: 'site', eyebrow: 'The making', dateLabel: '1910', title: 'Boccioni paints the theory: a building site', blurb: 'He takes the most modern subject he can find, a suburb of Milan under construction, men and horses straining at heavy work amid scaffolding and chimneys, and gives it the heroic scale a history painter saved for a battle. When it was shown in 1911 he titled it, plainly, Il lavoro: “The Work.”', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 6 1/2 in × 9 ft 10 1/2 in', title: 'The great red horse, and work made into motion', blurb: 'The huge red dray-horse lunging at the center, the small men hauling against it, the faint scaffolds rising behind, and the long feathered strokes that smear the whole thing into one churning surge of movement.', progress: 0.56 },
    { id: 'divisionism', eyebrow: 'The break', dateLabel: '1910', title: 'Old dots, new speed', blurb: 'The surface is still Divisionism, the small separate strokes of pure color Boccioni came up in, the Italian heir of Seurat’s dot. But here he stretches the stroke long and directional so the optical-color method stops vibrating in place and starts moving. That bend is the hinge of the picture.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1912–today', title: 'The doorway into Futurism', blurb: 'It headlined Futurism’s 1912 tour of Europe, was bought in London by a famous composer, passed to his son in New York, and reached MoMA in 1951. The man who put a violent horse at the center of it would be killed by one in 1916.', progress: 0.96 },
  ],
  provenance: [
    { year: '1910–1912', who: 'Umberto Boccioni (the artist)', place: 'Milan', note: 'Painted in 1910. Shown as Il lavoro (“The Work”) at the Mostra d’arte libera, Milan, 1911, then sent on Futurism’s touring European exhibitions of 1912.', price: null },
    { year: '1912', who: 'Ferruccio Busoni (composer and pianist)', place: 'London', note: 'Bought from the Futurists’ London showing at the Sackville Gallery in March 1912 by the composer-pianist Ferruccio Busoni; it then lived with the Busoni family. No purchase figure is documented in the sources.', price: null },
    { year: 'c. 1950–1951', who: 'Raffaello Busoni (the composer’s son)', place: 'New York', note: 'Passed to Ferruccio’s son, Raffaello Busoni, who had emigrated to the United States.', price: null },
    { year: '1951–today', who: 'Museum of Modern Art', place: 'New York', note: 'Purchased from Raffaello Busoni in 1951, Mrs. Simon Guggenheim Fund. Accession 507.1951. On view.', price: 'Mrs. Simon Guggenheim Fund (museum purchase)', museum: true },
  ],
  figures: [
    { name: 'Umberto Boccioni', role: 'The painter', palette: ['#bf3a25', '#3a4a6a', '#1c1208'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Founded Futurism', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'] },
    { name: 'Giacomo Balla', role: 'His teacher; brought him Divisionism', palette: ['#5a4a2a', '#2a2218', '#0e0a06'] },
    { name: 'Gaetano Previati', role: 'Italian Divisionist he came out of', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'Ferruccio Busoni', role: 'Composer; first private owner', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
  ],
  annotations: [
    { label: 'The great red horse', where: 'Center / center-left, the massive animal lunging forward and to the left, filling the heart of the canvas', detail: 'The picture’s engine: a huge red-brown draft horse, far larger than any worker, caught mid-surge. It is not a true horse-color so much as a charge of energy, and everything in the composition is dragged into its motion. The literal fact on the canvas is the lunging red horse; the reading of it as the city’s own growth, a power the men can barely hold, is a reading, and a fair one.' },
    { label: 'The straining workers', where: 'Clustered around and below the horse, in the foreground, leaning hard against it', detail: 'Small human figures grip harness and rope and throw their whole weight backward, hauling against the animal. Boccioni shrinks the men and enlarges the beast so that the labor reads as force against force. (You will see it described as the horse “knocking the workers down”; what is plainly on the canvas is men leaning back and hauling while the horse lunges, so keep the knock-down as interpretation.) The dignity and the danger of modern work, given the scale of a battle scene.' },
    { label: 'The construction scaffolding', where: 'Background, to the right and upper-right, behind the dust', detail: 'Thin scaffolds, the skeleton of buildings going up, with factory chimneys behind them. This is the literal “city rising”: a Milan suburb under construction. Notice that the architecture is kept faint and hazed against the horse, deliberately secondary to the energy in front of it. The title is not a metaphor; the city is physically being built in the background.' },
    { label: 'The blurred motion', where: 'Throughout, strongest around the horse’s body and the workers’ limbs', detail: 'Edges dissolve and the figures smear into the air around them. Boccioni is not painting a frozen instant but the passage of movement, the idea from his Technical Manifesto of Futurist Painting that a body in motion multiplies and merges with its surroundings. A horse in mid-lunge is shown as a haze of force, not a snapshot.' },
    { label: 'The Divisionist strokes', where: 'Anywhere across the surface; clearest in the open ground and the horse’s flank', detail: 'The whole picture is built from countless small, separate strokes of bright, often complementary color. This is Divisionism, the Italian heir of Seurat’s dot: up close it is a flicker of distinct touches, and from a few steps back they fuse into a vibrating glow. Here the strokes are pulled long and directional so the optical-color method also carries the motion.' },
    { label: 'The swirling composition', where: 'The overall design, figures, dust, and color wheeling around the central horse', detail: 'Rather than a calm horizontal scene, everything spirals inward toward the lunging horse: diagonals of rope, hauling bodies, and feathered strokes all curve into one centrifugal whirl. There is no still place for the eye to rest. The design itself enacts dynamism, which is the whole Futurist point.' },
  ],
  lineage: {
    parents: [
      { label: 'Divisionism', mode: 'art' },
      { label: 'Marinetti’s manifesto', mode: 'art' },
      { label: 'The industrial city', mode: 'civ' },
    ],
    children: [
      { label: 'Futurist dynamism', mode: 'art' },
      { label: 'Boccioni’s States of Mind', mode: 'art' },
      { label: 'The machine age in art', mode: 'civ' },
    ],
  },
}
```

> Coordinator note: register `CITY_RISES` wherever `STARRY_NIGHT` etc. are exported/collected, and splice the prose registry line:
> `//  'city-rises': { manifestos: CtyManifestos, site: CtySite, looking: CtyLooking, divisionism: CtyDivisionism, afterlife: CtyAfterlife },`

---

## PART B — `Cty`-prefixed section components (absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// The City Rises (Boccioni, 1910) — the five sections
// ─────────────────────────────────────────────────────────────
function CtyManifestos({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Milan · 1909" title="A movement that announced itself before it could paint" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        uturism is the rare art movement that arrived as a press release. On <strong>20 February 1909</strong>, the front page of the Paris newspaper <em>Le Figaro</em> carried a furious, ecstatic text by an Italian poet named <strong>Filippo Tommaso Marinetti</strong> (1876&ndash;1944), the <em>Manifesto of Futurism</em>. It declared that a racing automobile was more beautiful than an ancient Greek statue, that museums were graveyards, and that art should worship speed, machines, danger, and the modern city. (One detail worth getting right, because popular accounts garble it: that famous <em>Le Figaro</em> front page was not the manifesto&rsquo;s first appearance. It had already run in Italian printings in January and February of 1909. The Paris splash is the version everyone remembers, but it was the loud second act, not the debut.)
      </p>
      <p style={proseStyle}>
        Here is what made it strange. <strong>Marinetti was a poet, not a painter.</strong> He launched a movement of painting (and, eventually, sculpture, music, architecture, and cooking) without, as yet, a single Futurist painting in the world. The manifesto was pure ambition with no canvases under it. So Marinetti did the next thing an impresario does: he went and recruited the painters who would have to make the words true.
      </p>

      <SectionHeader accent={accent} label="February–April 1910" title="The painters sign, twice" />
      <p style={proseStyle}>
        The man who answered most seriously was <strong>Umberto Boccioni</strong> (1882&ndash;1916), a young painter trained in Rome under <strong>Giacomo Balla</strong> (1871&ndash;1958), the older artist who had introduced him to the modern color techniques we&rsquo;ll come to in a moment. On <strong>11 February 1910</strong>, Boccioni and four others (Balla, plus <strong>Carlo Carr&agrave;, Luigi Russolo</strong>, and <strong>Gino Severini</strong>) signed the <em>Manifesto of the Futurist Painters</em>, first read aloud to a rowdy theater crowd in Turin that March. Two months later, on <strong>11 April 1910</strong>, the same five signed a second, more practical document, the <em>Technical Manifesto of Futurist Painting</em>. This one was the how-to. It is largely Boccioni&rsquo;s thinking, and it asked for things painting had never quite managed: to put the spectator <em>inside</em> the picture, to paint not a frozen pose but a body still moving, and to render what it called <strong>&ldquo;lines of force,&rdquo;</strong> the invisible energy a moving thing throws off into the air around it.
      </p>
      <p style={proseStyle}>
        (Keep these straight, because the internet does not. The <em>Manifesto of the Futurist Painters</em>, February 1910, is the loud declaration. The <em>Technical Manifesto of Futurist Painting</em>, April 1910, is the recipe. A third document with a similar name, the <em>Technical Manifesto of Futurist Sculpture</em>, comes two years later, in 1912, and is Boccioni&rsquo;s alone. The painting we&rsquo;re about to look at belongs to the 1910 pair.)
      </p>
      <p style={proseStyle}>
        So by spring 1910 the theory was complete and the manifestos were stacked up like promissory notes. What did not yet exist was the painting that would cash them. Marinetti had announced a revolution in pictures; the pictures had to follow. The first big one was Boccioni&rsquo;s, and he made it that same year.
      </p>
    </article>
  )
}

function CtySite({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1910" title="The most modern subject he could find" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        occioni had spent his twenties painting in a careful, dappled, modern-but-polite manner. Now he had signed his name to a manifesto demanding speed, machines, and the present tense. So he went looking for a subject that was, in 1910, the most aggressively modern thing in Italy, and he found it on the edge of his own city. <strong>Milan was under construction.</strong> Out past the old center, in the growing industrial suburbs, fields were becoming factories, and the painting&rsquo;s subject is exactly this: a <strong>building site</strong>, men and horses doing heavy labor amid scaffolding, smokestacks, and the raw skeleton of buildings going up.
      </p>
      <p style={proseStyle}>
        This was a daring choice, and it&rsquo;s worth saying why. For four centuries, a canvas this big (it is nearly ten feet wide) was reserved for important subjects: a battle, a coronation, a saint, a myth. A construction site full of sweating workmen and dray-horses was the opposite of important. It was the kind of scene a respectable academic painter would never have stretched ten feet of canvas for. Boccioni took that lowly, ordinary, modern subject (men at heavy work, building the future) and gave it the scale, the violence, and the seriousness the old academy had saved for war.
      </p>

      <SectionHeader accent={accent} label="Il lavoro" title="A title that says it plainly: “The Work”" />
      <p style={proseStyle}>
        We should be careful about dates, because the painting carries two. The canvas was painted in <strong>1910</strong>. The following year, in <strong>1911</strong>, Boccioni showed it at an exhibition in Milan called the Mostra d&rsquo;arte libera, and there he gave it a different, blunter title: <em>Il lavoro</em>, which is simply Italian for <strong>&ldquo;The Work&rdquo;</strong> or <strong>&ldquo;Labour.&rdquo;</strong> (You&rsquo;ll sometimes see the painting dated &ldquo;1910&ndash;11&rdquo; because of this, but that 1911 is the exhibition, not a second year of painting. The picture is a 1910 picture.)
      </p>
      <p style={proseStyle}>
        That early title is a useful key, because it tells you what Boccioni thought the painting was about before any critic decided for him. Not &ldquo;the city,&rdquo; not yet. <em>The Work.</em> Labor itself, the physical job of dragging the modern world into being, made monumental. The grander title we use now, <em>The City Rises</em>, came later and points at the scaffolding in the back; Boccioni&rsquo;s own first title points at the straining bodies in the front. Both are in the picture. Hold the second one (the labor) as you walk up to the canvas, because the men are easy to miss next to the thing standing over them.
      </p>
      <p style={proseStyle}>
        Because the thing standing over them is a horse. And it is enormous, and it is red, and it is the whole reason the painting works. That is what we look at next.
      </p>
    </article>
  )
}

function CtyLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A horse the color of energy" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The painting is large, about <strong>six and a half feet tall by nearly ten feet wide</strong>, a wide landscape canvas you cannot take in with a glance. And the first thing that happens, before you read a single label, is that your eye is seized by the center and dragged left. There is a <strong>horse</strong> there, and it is the largest single thing in the picture, and it is <strong>red</strong>.
      </p>
      <p style={proseStyle}>
        Look at it directly. It is a huge draft horse (the heavy work-breed that hauls loads), reared up and lunging forward and to the left, its neck straining, its body caught mid-surge. It is far bigger than any human in the painting, out of all natural proportion. And the color is the tell: it is not a horse-color. Real workhorses are brown and grey and black. This one is a hot red-brown, the red of a forge, the red of effort. Boccioni hasn&rsquo;t painted the horse&rsquo;s <em>appearance</em>; he&rsquo;s painted what the horse <em>is doing</em>. The red is not skin. It is energy made visible, a charge of force given the shape of an animal. Once you&rsquo;ve seen that, you can&rsquo;t un-see it: the painting&rsquo;s subject is not a horse at all but raw power, and the horse is just where the power is standing.
      </p>

      <SectionHeader accent={accent} label="The workers" title="Small men, hauling against a thing too big to hold" />
      <p style={proseStyle}>
        Now find the people, because they are easy to lose. Clustered around the horse and below it, in the foreground, are <strong>small human figures</strong> (the workers), and they are tiny next to the animal, deliberately so. Watch what they&rsquo;re doing: they grip the harness and the ropes and lean their entire body weight backward, heels dug in, hauling against the lunging horse like men in a tug-of-war they are losing. Their bodies make a counter-pull to the horse&rsquo;s surge. The whole drama of the picture is right here, in that strain: force against force, a few small men trying to control a power far larger than they are. (You&rsquo;ll read elsewhere that the horse is &ldquo;knocking the workers to the ground.&rdquo; What&rsquo;s literally painted is men leaning back and hauling while the horse lunges; whether they&rsquo;re winning or being dragged is left for you to feel.) This is the &ldquo;work&rdquo; of <em>Il lavoro</em>: labor painted not as a peaceful trade but as a wrestling match with the energy of the modern age.
      </p>

      <SectionHeader accent={accent} label="The city behind" title="The faint scaffolds, doing the title’s job" />
      <p style={proseStyle}>
        Behind the horse and the men, mostly to the right and up, the city is going up. You can make out <strong>thin scaffolding</strong>, the bare skeletons of buildings under construction, and <strong>factory chimneys</strong> rising into the haze. Notice the choice Boccioni made here: the architecture is faint, blurred, drained of color, kept far quieter than the blazing horse in front of it. The literal &ldquo;city rising&rdquo; of the title is back there, in the scaffolds, but he has refused to let it compete with the energy in the foreground. The building of the city is the setting. The <em>force</em> of it is the subject.
      </p>

      <SectionHeader accent={accent} label="The motion" title="Not a moment, but a movement" />
      <p style={proseStyle}>
        Now soften your focus and look at the painting as a whole, the way you&rsquo;d watch something move rather than read something still. Notice that almost nothing in it has a hard edge. The horse&rsquo;s legs, the men&rsquo;s arms, the dust at the bottom: it all <strong>smears</strong>, dissolving into the air around it. This is the manifesto made visible. Boccioni did not want to paint a single frozen instant the way a photograph freezes one. He wanted to paint the <em>passage</em> of movement, the idea (straight from his Technical Manifesto) that a thing in motion blurs and multiplies and merges with the space it&rsquo;s tearing through. So a lunging horse is shown not as a sharp snapshot but as a haze of force, its own motion rubbed into the air.
      </p>
      <p style={proseStyle}>
        And the whole composition obeys this. There is no calm horizontal where your eye can come to rest. Instead, everything <strong>wheels inward</strong> toward the central horse: the diagonal lines of the ropes, the leaning bodies of the workers, the long curving strokes of the dust and ground all spiral in, like water turning down a drain, toward the surging animal at the heart of it. The picture has a current. You don&rsquo;t look at <em>The City Rises</em> so much as get caught in it. That centrifugal whirl, with no still place for the eye, is the thing the manifesto called <strong>dynamism</strong>: not a picture <em>of</em> motion, but a picture that <em>moves</em>. Step back from the canvas and the horse, the men, the scaffolds, and the dust stop being separate objects and become one churning surge, which is exactly what Boccioni was after. Not a scene. A force.
      </p>
    </article>
  )
}

function CtyDivisionism({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · technique" title="Up close, it’s made of dots" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        alk right up to the surface, closer than is polite in a museum, and the churning haze you just saw breaks apart into something surprising: <strong>thousands of small, separate strokes of bright color</strong>, set down side by side and not blended. A patch of the horse&rsquo;s flank is not one red; it is dabs of red and orange and pink and even green and blue, laid next to each other so your eye, from a few steps back, mixes them into a single vibrating tone. This technique has a name. It is <strong>Divisionism</strong>: the Italian descendant of the French method called Pointillism, which the painter <strong>Georges Seurat</strong> had built in the 1880s out of color science. Instead of mixing colors on the palette, you &ldquo;divide&rdquo; them into separate touches on the canvas and let the eye do the mixing, which keeps the color brighter and gives the whole surface a faint, restless shimmer.
      </p>
      <p style={proseStyle}>
        This was not new to Boccioni; it was where he came from. He had been raised in this technique through his teacher Balla and the older Italian Divisionists, painters like <strong>Gaetano Previati</strong> (1852&ndash;1920), who theorized the method, and <strong>Giovanni Segantini</strong> (1858&ndash;1899). When Boccioni signed the Futurist manifestos in 1910, the Divisionist dab was still the only language his hand really knew. So <em>The City Rises</em> is painted, surprisingly, in a slightly old technique, the careful optical color he&rsquo;d been doing for years.
      </p>

      <SectionHeader accent={accent} label="The hinge" title="The same dots, pulled into speed" />
      <p style={proseStyle}>
        Here is the move that makes the painting matter, and it is small and enormous at once. <strong>Boccioni took the Divisionist stroke and stretched it.</strong> In Seurat&rsquo;s pictures, and in Boccioni&rsquo;s own earlier work, the touches are short, dotty, and static; they sit in place and shimmer, building calm, sunlit, frozen scenes. In <em>The City Rises</em>, the strokes are pulled <strong>long, feathered, and directional</strong>. They run with the motion. They follow the lunge of the horse and the curve of the dust and the haul of the men&rsquo;s arms, so the very brushwork is moving in the direction the picture is moving.
      </p>
      <p style={proseStyle}>
        That is the whole break, in one technical decision. Boccioni didn&rsquo;t throw out the old method; he bent it to a new purpose. The optical-color trick that used to make a sunlit lawn vibrate in place was now made to carry <em>speed</em>. The flicker that had served stillness was set to serve motion. So the painting stands with one foot in each world: it is still made of Divisionist dabs (the past Boccioni came from) and it is already doing Futurist dynamism (the future the manifesto demanded). That hinge, an old surface bent to a new energy, is why this picture, and not the manifesto, is where Futurist painting actually begins.
      </p>
      <p style={proseStyle}>
        Which is exactly the claim that follows it around, and the claim is true if you scope it carefully: this is <strong>Boccioni&rsquo;s first major Futurist painting</strong>, the first time the theory became a monumental picture. Not the first modern painting, not the first painting of motion in all of art, just the first big one of <em>this</em> movement. From here Boccioni would go much further, fracturing his subjects far more violently in the <em>States of Mind</em> series of 1911 and the sculpture <em>Unique Forms of Continuity in Space</em> of 1913. <em>The City Rises</em> is the doorway, still half in the old technique, that all of that walks through.
      </p>
    </article>
  )
}

function CtyAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1912" title="The composer who bought it in London" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1912, three years after Marinetti&rsquo;s manifesto, Futurism went on tour. The painters mounted a travelling exhibition that moved through Paris, London, Berlin, and beyond, carrying their canvases to audiences who had read about the movement but never seen it. <em>The City Rises</em> was one of the headline pictures. And at the London stop, at a gallery called the Sackville Gallery in <strong>March 1912</strong>, the painting found its first private owner, and an unexpected one. The buyer was <strong>Ferruccio Busoni</strong> (1866&ndash;1924), one of the most famous concert pianists and composers in Europe. (The <em>provenance</em>, by the way, is the documented chain of who has owned a work of art, in order, from the artist&rsquo;s hand to now. We can&rsquo;t give you what Busoni paid, because no figure for the 1912 sale survives in the record. Better to leave that blank than to invent it.)
      </p>
      <p style={proseStyle}>
        From Busoni the painting passed, by around 1950, to his son <strong>Raffaello Busoni</strong>, who had emigrated to <strong>New York</strong>. And in <strong>1951</strong>, the <strong>Museum of Modern Art</strong> bought it from the son, with money from a fund called the Mrs. Simon Guggenheim Fund. That is where it hangs today: a Milan building site, by way of a London gallery and a composer&rsquo;s family, on permanent view in New York. For a painting about the modern industrial city, it is fitting that it ended up in the city that, by 1951, was the modern industrial city.
      </p>

      <SectionHeader accent={accent} label="The painter" title="The horse, and the irony history hands out" />
      <p style={proseStyle}>
        And then there is Boccioni himself, who did not live to see any of that. When Italy entered the First World War, Boccioni (who, like the other Futurists, had loudly glorified war as a cleansing modern force) volunteered. He was stationed near Verona. On <strong>17 August 1916</strong>, during a cavalry training exercise, he was <strong>thrown from his horse and trampled</strong>. He died the next day, in a military hospital, at the age of <strong>thirty-three</strong>.
      </p>
      <p style={proseStyle}>
        It is hard not to notice. The man who put a violent, surging horse at the dead center of his first great painting (and another charging horse in his last great one, the <em>Charge of the Lancers</em> of 1915) was killed by a horse. But let&rsquo;s be plain about what that is and isn&rsquo;t. It is not a prophecy. The painting did not foretell his death, and reading it that way is the kind of romance that flatters the storyteller more than it honors the painter. It is, instead, the blunt and meaningless kind of irony that real history hands out: a coincidence with no author. The horse in <em>The City Rises</em> was always a symbol of the city&rsquo;s raw energy and the danger of modern force. That its maker would later die under a real one is a fact, and a sad one, and nothing more than that.
      </p>
      <p style={proseStyle}>
        What he left is the doorway. <em>The City Rises</em> is the first big Futurist painting, the one where a movement that had announced itself in a newspaper finally proved, in nine feet of straining red and churning dust, that you could paint not a thing but its motion, not a moment but a force. Everything Futurism did afterward came through this canvas. The man was gone at thirty-three; the surge he painted is still moving.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'city-rises': { manifestos: CtyManifestos, site: CtySite, looking: CtyLooking, divisionism: CtyDivisionism, afterlife: CtyAfterlife },
```
