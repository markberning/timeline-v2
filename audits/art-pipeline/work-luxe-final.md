# FINAL — Matisse, *Luxe, calme et volupté* (1904) — WORK read

Reconciled by the RESOLVER/REVISER pass. Fact gate = CLEAN (no edits owed). READ gate
[FIX]es applied (meta-narration tics cut, *Arcadia* glossed once, picnic + shore given
concrete eye-anchors, duplicate sky-vs-body instruction trimmed, command-hedges turned to
narrative attribution). FRAME gate [FIX]es applied (Cézanne *Three Bathers* added as the
better-documented bathers source in prose AND `lineage.parents`; Manet *Déjeuner* echo
demoted to secondary reading; the female-nude-in-Arcadia convention named in period terms,
no anachronistic "male gaze"/"objectification"; "invented Fauvism" → "broke toward Fauvism";
"single best way" superlative cut). Strong NICE applied: *Le Bonheur de vivre* named in prose
as the radical successor. New prose uses parentheses/commas, never the em-dash character;
verbatim quotes preserved; no new unverified facts (the "breaking up colour" line stays
paraphrased).

> **heroAspect note (coordinator, please read):** the brief asked for `heroAspect` "~0.83
> from real dims." But every existing landscape WORK in `art-content.ts` stores heroAspect as
> **W/H** (e.g. STARRY_NIGHT 1.25, GRANDE_JATTE 1.48). 0.83 is **H/W**, which would render this
> landscape canvas in a *portrait* frame and break the hero band. The painting is 118.5w × 98.5h
> → **W/H ≈ 1.20** (landscape, slightly wider than tall). I have used **1.20** to stay
> consistent with the codebase convention and the matching STARRY_NIGHT shape. Flip to 0.83
> only if the frame component actually expects H/W (it does not, per the shipped consts).

---

## PART A — paste-ready `ArtWorkContent` const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Luxe, calme et volupté (Matisse, 1904). The Divisionist threshold of
// Fauvism: painted in pointillist dabs after the summer of 1904 at Saint-Tropez
// with Signac, debuted at the spring 1905 Salon des Indépendants, BEFORE "fauves"
// was coined that autumn. POINTS TOWARD Fauvism; is NOT itself a Fauve painting.
// Authored through the art content pipeline. Chapter prose in
// art-section-reader.tsx NARRATIVES['luxe'] (Lux… prefix).
// FACT HANDLING (honor every flag):
//   - Owner is the CENTRE POMPIDOU (inv. AM 1982-96, dation 1982), ON DEPOSIT at
//     the Musée d'Orsay since 1985. Say both.
//   - Title from Baudelaire, "L'Invitation au voyage" (Les Fleurs du mal, 1857).
//   - Neo-Impressionist / Divisionist (pointillist); never "first Fauve painting."
//   - The "breaking up of colour leads to breaking up of form" line is UNVERIFIED
//     → PARAPHRASE only, never quote.
//   - No purchase price documented (Signac's buy OR the 1982 dation) → invent none.
//   - Marks are short blocky DASHES, coarser than Seurat's neat dots.
//   - The MoMA oil study is a DIFFERENT object; don't bleed its stats in.
//   - Bathers' best-documented source = Cézanne's Three Bathers (Matisse OWNED it,
//     Vollard 1899, kept ~30 yrs); Manet Déjeuner echo is SECONDARY interpretation.
//   - "broke toward Fauvism," never "invented Fauvism" (group, critic-named).
// heroImage = ART_IMG.matisseLuxe (Commons file Matisse-Luxe.jpg, load-checked).
// ─────────────────────────────────────────────────────────────
export const LUXE: ArtWorkContent = {
  id: 'luxe',
  name: 'Luxe, calme et volupté',
  shortName: 'Luxe, calme et volupté',
  year: 1904,
  artist: 'Henri Matisse',
  artistId: 'matisse',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 2 3/4 in × 3 ft 10 5/8 in',
  location: 'Musée d’Orsay, Paris (on deposit from the Centre Pompidou)',
  acquired: 'Centre Pompidou (Musée national d’art moderne), by dation 1982; on deposit at the Musée d’Orsay since 1985',
  accent: ART_ACCENTS.rust, // copied from FAUVISM
  chain: { name: 'Works of Fauvism', index: 1, total: 9 },
  hook: 'A naked picnic on a golden Mediterranean shore, built entirely from separate flecks of color after one summer at Signac’s elbow, and the last picture Matisse made before he threw the dot away and broke toward Fauvism.',
  heroImage: ART_IMG.matisseLuxe,
  heroCredit: 'Matisse, Luxe, calme et volupté, 1904 · Musée d’Orsay, Paris (on deposit from the Centre Pompidou)',
  heroAspect: 1.2, // 118.5 × 98.5 cm → W/H ≈ 1.20 (landscape; see note in draft header)
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1904', k: 'Painted' },
    { v: '3′2¾″ × 3′10⅝″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'saint-tropez', eyebrow: 'Saint-Tropez · 1904', dateLabel: 'Summer 1904', title: 'The summer at Signac’s elbow', blurb: 'Matisse, 34 and restless, leaves Paris for the Côte d’Azur and works beside Paul Signac, the leading living Neo-Impressionist, learning to build a picture out of separate touches of pure color. He arrives already primed by Signac’s book on the method.', progress: 0.08 },
    { id: 'making', eyebrow: 'The method', dateLabel: 'Autumn–Winter 1904', title: 'Divisionism, and a coarser dot', blurb: 'Neo-Impressionism, Divisionism, Pointillism, three words for one idea kept carefully distinct. Matisse paints an on-the-spot study, then works the full canvas up over the winter, laying it down not in Seurat’s neat dots but in short blocky dashes of unmixed color.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '3 ft 2¾ in × 3 ft 10⅝ in', title: 'An Arcadian shore, made of dashes', blurb: 'A group of nudes on a spread cloth at the water’s edge, a teapot and a picnic, a calm bay with a sailboat, and skin that already carries green and blue, the whole golden-age daydream assembled from thousands of separate strokes.', progress: 0.56 },
    { id: 'independants', eyebrow: 'Paris · spring 1905', dateLabel: 'Spring 1905', title: 'The debut, before the wild beasts', blurb: 'Shown at the jury-free Salon des Indépendants in the spring of 1905, where it read as an ambitious Neo-Impressionist picture. This is months BEFORE the autumn Salon where a critic’s jibe gave Fauvism its name, so at its debut this is not yet a Fauve painting.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1905–today', title: 'Signac buys it, and the door opens', blurb: 'Signac himself bought the homage to his own method, and it stayed in his family. Within months Matisse abandoned the systematic dot, finding it broke up the very form he wanted, and the break led straight into Fauvism, which is why this picture is called its starting point.', progress: 0.96 },
  ],
  provenance: [
    { year: '1904–1905', who: 'Henri Matisse (the artist)', place: 'Saint-Tropez / Paris', note: 'Begun after the summer 1904 stay near Signac at Saint-Tropez and finished over the winter of 1904–05. Shown at the Salon des Indépendants in the spring of 1905.', price: null },
    { year: 'from 1905', who: 'Paul Signac', place: 'Paris / Saint-Tropez', note: 'Signac, the older master whose method the picture honors, bought it from Matisse around its 1905 debut. No purchase price is documented. (Popularly said to have hung it in his Saint-Tropez villa, La Hune; that detail is reported, not confirmed by the museum record.)', price: null },
    { year: 'to mid-20th c.', who: 'Mme Cachin-Signac (Ginette Signac, Signac’s daughter)', place: 'France', note: 'The painting stayed in Signac’s family; the Centre Pompidou records the prior owner as the former collection of Mme Cachin-Signac, Signac’s daughter.', price: null },
    { year: '1982', who: 'Centre Pompidou (Musée national d’art moderne)', place: 'Paris', note: 'Entered the French national collections by dation, the payment of inheritance tax with an artwork instead of cash, in 1982. Inv. AM 1982-96. No cash price.', price: 'dation (no cash price)', museum: true },
    { year: '1985–today', who: 'Musée d’Orsay (on deposit from the Centre Pompidou)', place: 'Paris', note: 'Placed on long-term deposit at the Musée d’Orsay in 1985, a year before that museum opened, where it normally hangs as a cornerstone of the Neo-Impressionist and Fauve rooms. The Centre Pompidou remains the legal owner.', price: null, museum: true },
  ],
  figures: [
    { name: 'Henri Matisse', role: 'The painter · 34 that summer', palette: ['#3a6a8a', '#c8a04a', '#1c2a30'] },
    { name: 'Paul Signac', role: 'Mentor · theorist of Divisionism · first owner', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Henri-Edmond Cross', role: 'Neo-Impressionist who drew him south', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Georges Seurat', role: 'Founder of the dot method, learned second-hand', palette: ['#3a6a4a', '#c8b84a', '#1c2a18'] },
    { name: 'Charles Baudelaire', role: 'The poet whose refrain gave the title', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
  ],
  annotations: [
    { label: 'The bathers on the shore', where: 'Center and right foreground, the cluster of nude women on and around a spread cloth at the water’s edge', detail: 'The subject is a group of nude bathers relaxing on a Mediterranean beach, a timeless golden-age idyll rather than a real moment. The poses, toweling off, reclining, standing, descend from the long tradition of bathers in a landscape, and they owe most to a picture Matisse actually owned: Cézanne’s small Three Bathers, bought from the dealer Vollard in 1899 and kept for some thirty years as a touchstone. Matisse stages them as a pastoral fantasy, not a Saint-Tropez snapshot.' },
    { label: 'The picnic spread', where: 'Lower center, the cloth laid on the sand with figures gathered around it', detail: 'A picnic on the shore, a teapot and food set out on a white cloth, turns the scene into a leisure ritual. Later scholars often read it as Matisse answering Manet’s Le Déjeuner sur l’herbe (1863) and the whole bather-picnic theme, though that is a critics’ reading rather than anything Matisse said, and a secondary one beside the Cézanne source.' },
    { label: 'The divisionist marks (really dashes)', where: 'Everywhere across the surface, easiest to test in the sand and sky', detail: 'The whole picture is built from separate touches of unmixed color meant to blend in the eye rather than on the palette. But Matisse’s marks are short, blocky dashes, coarser than Seurat’s neat round dots. Stand back and they fuse into shimmering light; step close and the surface is a mosaic of distinct strokes.' },
    { label: 'Arbitrary color creeping in', where: 'The figures’ skin (greens, blues and pinks no body is) and the heightened sand and water', detail: 'The color has already slipped its leash from description: the flesh carries green and blue, and the shore and sky run hotter and stranger than nature. This is the Fauvist impulse, color chosen for feeling rather than accuracy, already at work inside the orderly dot, the tendency that would soon burst the method even though this is not yet a settled Fauve picture.' },
    { label: 'The Arcadian shore and the boat', where: 'The background, the bay, the distant sailboat, and the line of hills meeting the sky', detail: 'A calm bay with a single sailboat and a low line of hills sets the scene in an idealized, sun-struck nowhere, the calm and luxury of Baudelaire’s refrain turned into a place. The landscape is a generalized golden-age coast (an Arcadia, the ancient poets’ name for an imagined pastoral paradise), not a topographic view of Saint-Tropez.' },
    { label: 'The painted touch on display', where: 'Compare a tightly stippled passage in the sky or water against the looser, larger strokes on the bodies', detail: 'Matisse varies the stroke, denser and smaller touches in the atmosphere, broader ones on the figures, so the method itself is on show. The unevenness reads as a young painter testing a borrowed system rather than a doctrinaire pointillist, which fits the fact that he would abandon it within months.' },
  ],
  lineage: {
    parents: [ { label: 'Neo-Impressionism', mode: 'art' }, { label: 'Cézanne, Three Bathers', mode: 'art' }, { label: 'A Sunday on La Grande Jatte', mode: 'art' }, { label: 'Baudelaire’s “L’Invitation au voyage”', mode: 'civ' } ],
    children: [ { label: 'Fauvism', mode: 'art' }, { label: 'Le Bonheur de vivre', mode: 'art' }, { label: 'Arbitrary color', mode: 'art' } ],
  },
}

// REGISTRY (coordinator splices into ART_WORK_CONTENT):
//   luxe: LUXE,
```

---

## PART B — five `Lux`-prefixed React components (absinthe format)

```tsx
// ─────────────────────────────────────────────────────────────
// Luxe, calme et volupté (Matisse, 1904) — the five chapters
// ─────────────────────────────────────────────────────────────
function LuxSaintTropez({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Saint-Tropez · 1904" title="The summer at Signac&rsquo;s elbow" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the summer of <strong>1904</strong>, <strong>Henri Matisse</strong> (1869&ndash;1954), thirty-four years old and not yet famous, packed up and left Paris for the south. He went to <strong>Saint-Tropez</strong>, then a small fishing town on the <strong>Côte d&rsquo;Azur</strong> (the French Mediterranean coast), and he went there for a specific reason. Living and working in Saint-Tropez was <strong>Paul Signac</strong> (1863&ndash;1935), the leading living practitioner of a method of painting that Matisse wanted to learn from the inside. Nearby lived <strong>Henri-Edmond Cross</strong> (1856&ndash;1910), another painter of the same school. Matisse spent the summer working at their elbow.
      </p>
      <p style={proseStyle}>
        The method had a founder who was already dead. <strong>Georges Seurat</strong> (1859&ndash;1891) had invented it in the 1880s and died young; <strong>Signac</strong> had carried it forward as its chief living theorist. The idea was to build a picture not by mixing colors on the palette but by laying down small, separate touches of <em>unmixed</em> color side by side, on the theory that the eye, at a distance, would blend them into something brighter and more luminous than any mixed paint could be. The movement had a name, <strong>Neo-Impressionism</strong> (literally &ldquo;new Impressionism&rdquo;), and the labels around it (Divisionism, Pointillism) get used so loosely that they are worth pulling apart on their own. For now, hold the picture of it: a canvas covered in thousands of tiny separate dabs of pure color that fuse, when you step back, into shimmering light.
      </p>
      <p style={proseStyle}>
        Matisse did not arrive cold. He had already read Signac&rsquo;s book on the subject, a treatise with the heavy title <em>D&rsquo;Eugène Delacroix au néo-impressionnisme</em> (&ldquo;From Eugène Delacroix to Neo-Impressionism,&rdquo; serialized in 1898, published as a book in 1899). It was, in effect, the method&rsquo;s manifesto, an argument for divided color dressed up as art history. So Matisse came to Saint-Tropez primed by the theory; the summer was where he finally <em>practiced</em> it, under the eye of the man who had written the rulebook. The picture that came out of that summer is one of the strangest things in his whole career, because it is both a faithful piece of homework and the door he was about to walk through and slam behind him.
      </p>
    </article>
  )
}

function LuxMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Three words for one idea" title="Neo-Impressionism, Divisionism, Pointillism" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore we look at the canvas, three words, because they get used as if they mean the same thing and they do not. The first is <strong>Neo-Impressionism</strong>, the name of the whole <em>movement</em>, the loose group around Seurat and then Signac. The second is <strong>Divisionism</strong>, the name of the <em>theory</em>: divide each color into its components and lay the parts side by side so the eye, not the brush, does the mixing. (Signac himself preferred this word.) The third is <strong>Pointillism</strong>, the name of the <em>technique</em>, strictly the business of doing all that with regular round <strong>dots</strong>. People throw &ldquo;pointillist&rdquo; around as a synonym for the whole thing, but it really describes only the look.
      </p>
      <p style={proseStyle}>
        And here is the catch that makes Matisse&rsquo;s picture odd: he did not use neat round dots. Look closely at the surface and the marks are <strong>short, blocky dashes</strong>, little squarish strokes of color, much coarser and looser than Seurat&rsquo;s fine, even points. So the most precise way to describe the picture is this. The method is Divisionism; the word &ldquo;pointillist&rdquo; fits the look but not the marks, because the marks are dashes, not points. A small distinction, but it is the visible fingerprint of a painter who is borrowing a system rather than living inside it.
      </p>

      <SectionHeader accent={accent} label="Autumn–Winter 1904" title="A summer study, a winter canvas" />
      <p style={proseStyle}>
        Matisse made the picture in two stages. That summer at Saint-Tropez he painted an <strong>oil study</strong> on the spot, a smaller working version (it survives, in the collection of the Museum of Modern Art in New York, and it is a <em>different object</em> from the painting we are looking at, so do not let the two get confused). Then, back in Paris over the following autumn and winter, he worked the full canvas up to its finished size. The museum that owns it dates the finished picture to <strong>&ldquo;Autumn&ndash;Winter 1904,&rdquo;</strong> which is why we call it a 1904 painting, with the understanding that the brush was still moving over the winter of 1904&ndash;05.
      </p>
      <p style={proseStyle}>
        The finished canvas is not large for what it attempts, a little over three feet tall and just under four feet wide (about <strong>3 ft 2¾ in by 3 ft 10⅝ in</strong>). Onto that modest surface Matisse laid an entire imagined world, stroke by separate stroke. It is worth pausing on the sheer labor of the method: every patch of sand, every inch of sky, every limb is built from individual dabs, none of them blended into the next. That is the discipline Signac&rsquo;s theory demanded, and Matisse, the dutiful summer student, gave it to him, just barely.
      </p>
    </article>
  )
}

function LuxLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Stand back, then walk in" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart from across the room. From a distance the picture reads instantly: a sun-struck Mediterranean beach, a calm bay, a scatter of pale nude figures resting at the water&rsquo;s edge under a high golden light. It looks, from there, like a dream of a perfect afternoon, which is exactly what it is. The title, lifted from a Baudelaire poem, means roughly &ldquo;luxury, calm and pleasure,&rdquo; and the whole canvas glows with all three. Now walk toward it, because up close it becomes something else entirely.
      </p>
      <p style={proseStyle}>
        Up close, the beach dissolves. There is no smooth sand and no smooth sky. There is, instead, a <strong>mosaic of separate dabs</strong>, thousands of short, blocky strokes of unmixed color set side by side and never blended: a stroke of orange next to a stroke of pink next to a stroke of pale violet, all of which, from six feet back, your eye had fused into &ldquo;sunlit sand.&rdquo; This is the divisionist trick made visible. The picture is two pictures at once, a serene golden idyll from across the room and a shimmering field of distinct colored marks at arm&rsquo;s length, and the round trip between them is the clearest way to see what the whole Neo-Impressionist method was for.
      </p>

      <SectionHeader accent={accent} label="The shore" title="A naked picnic in a golden nowhere" />
      <p style={proseStyle}>
        Now read the scene. In the <strong>center and right foreground</strong>, on and around a cloth spread on the sand, sits a cluster of <strong>nude women</strong>, one toweling off, one reclining, one standing, arranged in the relaxed poses of bodies at rest. They are not portraits of real bathers caught on a real beach; they descend from the long European tradition of <em>bathers in a landscape</em>, and most directly from a picture Matisse actually owned, Cézanne&rsquo;s small <em>Three Bathers</em>, which he had bought from the dealer Vollard in 1899 and would keep for some thirty years, later saying he drew from it his faith and his perseverance. Cézanne&rsquo;s awkward, monumental nudes are the real ancestor of these poses. It is worth naming the convention squarely: a male painter setting idealized female nudes in an imagined golden-age landscape was, by 1904, a centuries-old European genre, a tradition built by men and aimed first at male viewers, and Matisse is working inside it, not inventing it.
      </p>
      <p style={proseStyle}>
        Drop your eye to the <strong>lower center</strong>, to the white cloth on the sand: a <strong>teapot</strong> stands on it, with food set out around it, the small still-life of a picnic that turns this from a row of nudes into people who came to spend an idle afternoon. (This bathers-and-picnic setup is widely read as Matisse&rsquo;s answer to Manet&rsquo;s notorious <em>Le Déjeuner sur l&rsquo;herbe</em> of 1863, the picnic with the clothed men and the naked woman, though that is the verdict of later scholars rather than anything Matisse said, and a secondary echo beside the Cézanne behind the figures.)
      </p>
      <p style={proseStyle}>
        Behind the figures, in the <strong>background</strong>, a calm bay opens out. A single small <strong>sailboat</strong> sits far out on the flat water, and the bay closes at the back with a low line of hills meeting the sky, no town, no harbor wall, nothing to fix it to a real place. This is the &ldquo;calm&rdquo; of the title made into a place, an idealized, sun-struck nowhere, an <strong>Arcadia</strong> (the ancient poets&rsquo; name for an imagined pastoral paradise, a perfect countryside out of time), the golden-age daydream the poem promised.
      </p>

      <SectionHeader accent={accent} label="The color that won&rsquo;t behave" title="Green and blue in the skin" />
      <p style={proseStyle}>
        Here is the thing to look hardest for, because it is the reason this picture matters beyond being a pretty beach. Look at the <strong>skin of the figures</strong>. It is not flesh-colored. It carries <strong>green and blue and pink</strong>, colors no body actually is, and the sand and water around them run hotter and stranger than any real shore. Even working inside Signac&rsquo;s strict, orderly method, Matisse has let the color slip its leash from description. The green in a thigh, the blue in a shoulder, these are chosen for <em>feeling</em>, not accuracy. That impulse, color picked for effect rather than truth, is the seed of <strong>Fauvism</strong>, the movement Matisse would help launch, and you can watch it here, already restless inside the discipline that was supposed to contain it.
      </p>
      <p style={proseStyle}>
        One last look, at the marks themselves. Compare a tightly stippled patch of sky or water, where the dabs are tiny and dense, against the bodies, where the strokes grow broad and loose. Matisse varies the touch across the canvas, which means the <em>method</em> is on display, not hidden. That unevenness is the tell of a painter testing a borrowed system rather than a true believer in it, which is precisely what he was. He would keep the freed color. The dots, he was about to throw away.
      </p>
    </article>
  )
}

function LuxIndependants({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · spring 1905" title="The debut, in a jury-free room" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of <strong>1905</strong>, the finished picture went on the wall at the <strong>Salon des Indépendants</strong> in Paris. A word on that venue, because it matters. The official Salon, the state-backed annual exhibition, had a jury that decided who got in, and it had a long history of throwing out anything new. In answer, a group of artists (Seurat and Signac among the founders) had set up in 1884 a rival show with no jury and no prizes: anyone who paid the small fee could hang. That was the <strong>Salon des Indépendants</strong>, the &ldquo;independents,&rdquo; and it was where the new painting got seen. Matisse&rsquo;s big divisionist beach hung there in the spring of 1905, and it read as exactly what it was: an ambitious, accomplished <strong>Neo-Impressionist</strong> picture by a serious painter working in Signac&rsquo;s manner.
      </p>

      <SectionHeader accent={accent} label="The timeline that matters" title="This is not the first Fauve painting" />
      <p style={proseStyle}>
        Here is the fact this picture is most often gotten wrong. It is constantly called the doorway to Fauvism, and that is fair. But it is <strong>not itself a Fauve painting</strong>, and it was not received as one, for a simple reason of the calendar. <strong>Fauvism</strong> got its name later that same year, in the <em>autumn</em> of 1905, at a different exhibition, the Salon d&rsquo;Automne (the &ldquo;autumn Salon&rdquo;). There, Matisse and his friends hung canvases of hot, arbitrary, undisguised color, and a critic named <strong>Louis Vauxcelles</strong>, seeing a conventional marble sculpture standing among them, quipped that it was like <em>&ldquo;Donatello parmi les fauves,&rdquo;</em> &ldquo;Donatello among the wild beasts.&rdquo; The phrase stuck. <strong>Les fauves</strong>, the wild beasts, became the name of the movement.
      </p>
      <p style={proseStyle}>
        But all of that happened in the <em>autumn</em>. <em>Luxe, calme et volupté</em> had debuted in the <em>spring</em>, months earlier, painted in careful divisionist dabs and read as Neo-Impressionism. So the honest way to place it is this: it points <em>toward</em> Fauvism, it does not yet belong to it. It is the doorway Matisse was about to step through, photographed just before he opened the door. Call it the first Fauve painting and you have your seasons backwards.
      </p>
    </article>
  )
}

function LuxAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The title" title="A line borrowed from Baudelaire" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he title is not Matisse&rsquo;s invention. It comes straight out of a poem by <strong>Charles Baudelaire</strong> (1821&ndash;1867), the great French poet of modern city life, whose 1857 collection <em>Les Fleurs du mal</em> (&ldquo;The Flowers of Evil&rdquo;) is one of the founding books of modern poetry. In one of its most famous poems, <em>L&rsquo;Invitation au voyage</em> (&ldquo;Invitation to the Voyage&rdquo;), a man dreams of carrying his beloved away to a perfect, ordered, sensual elsewhere, and the dream closes on a refrain: <em>&ldquo;Là, tout n&rsquo;est qu&rsquo;ordre et beauté, / Luxe, calme et volupté&rdquo;</em> (&ldquo;There, all is order and beauty, / luxury, calm and pleasure&rdquo;). Matisse took the last line whole and made it the name of his picture. The painting is that dreamed elsewhere, rendered in paint: the calm, the luxury, the pleasure, an invented Arcadia on a Mediterranean shore.
      </p>

      <SectionHeader accent={accent} label="from 1905" title="The mentor buys the homage" />
      <p style={proseStyle}>
        The painting&rsquo;s first owner was the one person who would most appreciate it: <strong>Signac</strong> himself bought it, around the time of its 1905 debut, directly out of the avant-garde&rsquo;s own show. There is a quiet pleasure in that, the older master buying the younger man&rsquo;s homage to his own method, his rulebook turned into a beach. (No purchase price is recorded, so we will not invent one. A popular detail has Signac hanging it in his Saint-Tropez villa, named <em>La Hune</em>; that is reported rather than confirmed by the museum record, so take it lightly.) The picture then stayed in Signac&rsquo;s family; the museum that owns it today lists its earlier home as the former collection of <strong>Mme Cachin-Signac</strong>, Signac&rsquo;s daughter.
      </p>

      <SectionHeader accent={accent} label="1982 · 1985" title="Into the nation, by dation" />
      <p style={proseStyle}>
        It entered the French national collections in <strong>1982</strong> by a mechanism worth glossing, because it explains why two museums have a claim on it. The painting came to the state by <strong>dation</strong>, a French arrangement that lets an heir pay inheritance tax with a work of art instead of cash. By that route it became the property of the <strong>Centre Pompidou</strong>, Paris&rsquo;s national museum of modern art (inventory number AM 1982-96), which is the painting&rsquo;s legal owner to this day. Then, in <strong>1985</strong>, just before the <strong>Musée d&rsquo;Orsay</strong> opened, the Pompidou placed the picture on long-term <strong>deposit</strong> at the Orsay, the museum on the Left Bank devoted to nineteenth-century and early-modern French art. So the situation is a little unusual: the Centre Pompidou owns it; the Musée d&rsquo;Orsay shows it, where it normally hangs among the Neo-Impressionist and Fauve pictures it helped bridge.
      </p>

      <SectionHeader accent={accent} label="After" title="The door Matisse closed behind him" />
      <p style={proseStyle}>
        And then Matisse walked away from the very method he had just mastered. Within months of finishing this picture he <strong>abandoned the systematic dot</strong>, and his reason was as much about form as about color. He found that dividing the color also divided the <em>form</em>: all those separate dabs dissolved the firm outline and the flat, solid area of color he was beginning to want. The discipline that made the surface shimmer also broke up the very shapes he was trying to hold together. (He later put the idea something like this, that the broken-up color broke up the form along with it. The exact wording is not securely his, so we will keep it as the substance of his complaint rather than a quotation.)
      </p>
      <p style={proseStyle}>
        So he dropped the dots and kept the freed color, and that combination, flat areas of pure, arbitrary, emotional color with firm shapes, is <strong>Fauvism</strong>. The next year he made it whole in <em>Le Bonheur de vivre</em> (&ldquo;The Joy of Life,&rdquo; 1905&ndash;06), the same Arcadian-bather dream painted now in broad sheets of unbroken color, the fully radical canvas that <em>Luxe</em> only points toward. Which is why this earlier painting, for all that it is built in someone else&rsquo;s technique, is repeatedly called the <em>starting point of Fauvism</em>: not because it is Fauve, but because making it taught Matisse exactly what he had to leave behind. He learned the dot in order to throw it away. The picture is the doorway, painted just before he stepped through it and closed it for good.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  luxe: { 'saint-tropez': LuxSaintTropez, making: LuxMaking, looking: LuxLooking, independants: LuxIndependants, afterlife: LuxAfterlife },
```
