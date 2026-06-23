# FINAL — WORK: Henri Matisse, *Le Bonheur de vivre (The Joy of Life)*, 1905–06

Revised from `work-bonheur-draft.md` by folding the three gate files:
- **FACT gate** = PASS, no BLOCKER/FIX (two quote-preservation NICE notes honored: the
  Signac quote keeps its closed em-dashes and "two-and-a-half meters" verbatim; no named
  letter recipient added).
- **READ gate** = applied all 4 FIX + 1 FIX-lite + the NICE drop: cut the 3 meta-narration
  clauses; added a bounding-contour brushwork looking beat in `BonLooking` so Signac's "line
  as thick as your thumb" reads as a callback; glossed "cadmium" at first use in `BonSalon`;
  glossed "provenance" at first use in `BonAfterlife`; dropped the weaker of the two
  ring-of-dancers forward-pointers in `BonLooking`.
- **FRAME gate** = applied the BLOCKER + all 5 FIX: added the male-gaze/Arcadian-nude
  naming paragraph at the end of `BonLooking` (historical, non-anachronistic, no verdict);
  added the no-loan reason (Barnes 1922 Indenture of Trust forbidding loans/rehanging,
  loosened only by a 2023 court ruling); added Sarah Stein as Matisse's relentless early
  champion; gave Gertrude real agency (ran the salon, her taste tilted to Picasso, the
  fault line that split the household); cooled the heroic Picasso framing ("stolen the
  season" / "lit a fire" dropped, hedge kept). NICE items left out (sardana, Barnes Dance
  mural) to avoid nesting into the *Dance* story; only firm visual source remains Carracci.

Imperial dimensions only. No em-dashes in new prose. The verbatim Signac quote keeps its
em-dashes and "two-and-a-half meters" exactly.

---

## PART A — the `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Le Bonheur de vivre (The Joy of Life), Matisse, 1905–06.
// The high-water canvas of Fauvism. The Barnes Foundation, Philadelphia (BF719).
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['bonheur'] (Bon… prefix).
// FLAGS handled per fact pack: provenance is NOT Stein → Barnes direct, it ran
// Stein → Christian Tetzen-Lund, Copenhagen (1919) → Albert Barnes via dealer
// Paul Guillaume (forced sale after the 1922 Landmandsbanken collapse; recorded
// Jan 1923). Signac's "gone to the dogs" IS documented (letter, 14 Jan 1906) and is
// quoted WITH attribution. Picasso "answered it with the Demoiselles" is DISPUTED
// interpretation and is hedged. Of the visual sources only Carracci's engraving
// "Love in the Golden Age" is firmly documented (Cuno/Puttfarken); Ingres/Cézanne are
// "drew on / in the tradition of"; Bellini dropped. The back-center ring of dancers
// PREFIGURES The Dance (1909–10), it is not "The Dance."
// FRAME pass: male-gaze/Arcadian-nude convention named historically in BonLooking;
// no-loan reason (1922 Barnes indenture, loosened 2023) added; Sarah Stein restored
// and Gertrude given real agency; Picasso heroics cooled (hedge intact).
// ─────────────────────────────────────────────────────────────
export const BONHEUR: ArtWorkContent = {
  id: 'bonheur',
  name: 'Le Bonheur de vivre',
  shortName: 'The Joy of Life',
  year: 1906,
  artist: 'Henri Matisse',
  artistId: 'matisse',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '5 ft 9 1/2 in × 7 ft 10 3/4 in',
  location: 'The Barnes Foundation, Philadelphia',
  acquired: 'Acquired by Albert C. Barnes through the dealer Paul Guillaume, 1922–23 (recorded January 1923); BF719',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Fauvism', index: 6, total: 9 },
  hook: 'A wall-sized Arcadia of nudes lounging, piping, and dancing in colors no real meadow ever wore, the canvas Leo Stein called the most important picture of its moment and the one Picasso is said to have answered with Les Demoiselles d’Avignon.',
  heroImage: ART_IMG.matisseBonheur,
  heroCredit: 'Matisse, Le Bonheur de vivre, 1905–06 · The Barnes Foundation, Philadelphia',
  heroAspect: 1.36, // 176.5 × 240.7 cm → W/H ≈ 1.36
  heroFit: 'contain', // the whole ~6 × 8 ft canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1905–06', k: 'Painted' },
    { v: '5′9½″ × 7′10¾″', k: 'Dimensions' },
    { v: 'The Barnes', k: 'Now at' },
  ],
  sections: [
    { id: 'salon', eyebrow: 'Paris · 1906', dateLabel: 'Salon des Indépendants, spring 1906', title: 'After the wild beasts, the statement', blurb: 'A year after the “wild beasts” scandal, Matisse answers not by retreating but by going enormous: one deliberate, wall-sized canvas, unveiled at the jury-free Salon des Indépendants, where it becomes the sensation and the outrage of the season.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'Oct 1905 – Mar 1906', title: 'A built picture, not an improvised one', blurb: 'Many sketches, a full-size cartoon, and a small dotted oil study that you can watch turn into the flat-color final. Old masters stand behind the wild surface, one of them documented: Carracci’s engraving of a golden-age idyll, with the same ring of dancers in the back.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '5 ft 9½ in × 7 ft 10¾ in', title: 'Hot-pink ground, violet trees, a ring of dancers', blurb: 'Read the painting itself: the reclining nudes, the piper at the bottom, the embracing couple, the little round-dance far back, the dark contour fencing each figure, the trees that arch like a stage curtain, and a meadow painted in colors that answer to feeling, not to any real place.', progress: 0.56 },
    { id: 'reception', eyebrow: 'The reception', dateLabel: '1906', title: 'The dogs, the dazzle, and the Steins’ rescue', blurb: 'The public jeers; some critics fear the end of French painting. Matisse’s old pointillist mentor Paul Signac, in a private letter, writes that Matisse has “gone to the dogs.” Then the Steins buy it and hang it in the most famous room in the avant-garde.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1906–today', title: 'From the Steins to the Barnes', blurb: 'A Copenhagen collector, a bank collapse, and a Philadelphia chemist carry the picture to a museum whose own trust kept it fixed in place and out of print for decades. Matisse spins its ring of dancers into The Dance; Picasso’s Demoiselles is widely read as the answer; and the cadmium yellow quietly decays.', progress: 0.96 },
  ],
  provenance: [
    { year: '1905–1906', who: 'Henri Matisse (the artist)', place: 'Paris', note: 'Painted between October 1905 and March 1906, then first shown at the Salon des Indépendants in spring 1906, where it was the season’s great scandal.', price: null },
    { year: '1906–1914', who: 'Leo & Gertrude Stein', place: 'Paris (27 rue de Fleurus)', note: 'The American expatriate siblings, the avant-garde’s key early patrons, bought it from the 1906 Salon; Matisse himself installed it in their apartment, turning a scandal into the centerpiece of the most famous salon in modern art. Leo is widely quoted calling it “the most important painting done in our time.” Gertrude ran that salon as much as Leo did; her taste later tilted toward Picasso, his toward Matisse, a fault line that eventually split the household and the collection.', price: null },
    { year: '1914–1919', who: 'Leo Stein', place: 'Paris', note: 'On the 1914 division of the Stein collection, Leo kept it; in these years it is recorded as on deposit at / handled through the Galerie Bernheim-Jeune.', price: null },
    { year: '1919–1922', who: 'Christian Tetzen-Lund', place: 'Copenhagen', note: 'Acquired in 1919 (through Bernheim-Jeune and the dealer Paul Guillaume) by the Danish grain merchant Tetzen-Lund, a major collector of Matisse and Picasso. The painting did NOT pass straight from the Steins to Barnes; a Copenhagen owner sat between them.', price: null },
    { year: '1922–1923', who: 'Albert C. Barnes (through the dealer Paul Guillaume)', place: 'Philadelphia', note: 'The 1922 collapse of the Danish Landmandsbanken forced Tetzen-Lund to break up his collection; he wrote to Barnes offering Matisse and Picasso works. Bought through Paul Guillaume for roughly 45,000 francs (about $3,700 at the 1922 rate); the official Barnes purchase is recorded January 27, 1923.', price: '~45,000 francs (≈ $3,700)' },
    { year: '1923–today', who: 'The Barnes Foundation', place: 'Merion, PA → Philadelphia (2012)', note: 'BF719. Albert Barnes’s 1922 Indenture of Trust forbade the Foundation from lending or rehanging its works, and for decades it barred color reproductions; the no-loan rule was loosened only by a 2023 court ruling. Held first in suburban Merion, then moved to central Philadelphia in 2012. On permanent view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Henri Matisse', role: 'The painter', palette: ['#d08a3a', '#3a8a5a', '#1c2218'] },
    { name: 'Leo Stein', role: 'Buyer; called it the picture of its time', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Gertrude Stein', role: 'Co-host of the rue de Fleurus salon', palette: ['#7a6a44', '#3e3320', '#12100a'] },
    { name: 'Sarah Stein', role: 'Matisse’s most relentless early champion', palette: ['#7a5a4a', '#3e2c22', '#12100a'] },
    { name: 'Paul Signac', role: 'The mentor who recoiled', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Albert C. Barnes', role: 'Bought it for Philadelphia, 1922–23', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'Pablo Picasso', role: 'The rival said to have answered it', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
  ],
  annotations: [
    { label: 'The ring of dancers that became a painting', where: 'Center background, on the far meadow: a small circle of figures joining hands', detail: 'Far back in the meadow, a little round-dance turns, figures linked hand to hand. This is the seed of an entire other canvas. Matisse pulled the motif out, blew it up, and made it The Dance (1909–10), one of the most famous images he ever painted. It is also the element art historians tie most firmly to his documented source: Agostino Carracci’s engraving Love in the Golden Age, which has the same ring of dancers off in the back of a pastoral idyll.' },
    { label: 'The piper in the foreground', where: 'Bottom center, a seated nude playing a double pipe', detail: 'A figure sits and plays a double pipe, the kind of double flute that signals Arcadia, the mythic countryside of shepherds and ease. It is the pastoral note that tells you the whole scene is a golden-age dream, not a real afternoon. Watch the scale: read the player as a child and it sits comfortably beside the couple to the right; read it as an adult and the figures just behind become giants. The mismatch is on purpose.' },
    { label: 'The reclining nudes', where: 'Foreground, left and center, figures stretched out on the rose-and-orange ground', detail: 'The lounging nudes are pure leisure, and that is the point. The “joy of life” in the title is bodily ease, not a story with a moral. They are also, like nearly every figure here, women, painted by a man for the male connoisseurs who would buy the canvas, squarely inside the old European convention of the idealized female nude. Their bodies are drawn as long serpentine curves, what art historians call arabesques, a flowing snaking line, and each is fenced by a single dark contour. Matisse cared more about that line than about anatomy, which is why limbs lengthen and bend past anything a real body does.' },
    { label: 'Color that answers to nothing in nature', where: 'Everywhere: the orange-and-pink earth, the violet and green tree trunks, the lemon-and-rose sky', detail: 'There is no real meadow this color. The ground runs hot pink and orange, tree trunks go violet, the sky shades from lemon to rose, all in big flat fields with no modeling. Color here serves feeling and the design of the surface, not the look of any actual place. This is the core Fauve move, the wild-beast freedom Matisse had been mocked for the year before, now carried out at wall scale.' },
    { label: 'The embracing couple', where: 'Bottom right, a pair of nudes locked together', detail: 'Down in the lower-right corner two figures embrace, the frankly sensual note that, with all the lounging and the piping, makes the picture a hymn to pleasure. Their small size against the looming figures just behind them is one of the clearest places to catch Matisse sizing his figures for the composition rather than for distance. Nothing in this picture obeys perspective; everything obeys the design.' },
    { label: 'The trees that arch like a curtain', where: 'Upper edges, left and right, two large trees whose foliage bends inward over the scene', detail: 'The big trees do not recede into depth. Their curved trunks and overhanging branches arc inward and frame the meadow like a stage curtain, pressing the whole scene flat against the surface. The same snaking line that shapes the bodies shapes the trees, so figure and landscape rhyme. The canvas reads as one woven, shallow pattern, a decorated surface, not a deep window you look through.' },
  ],
  lineage: {
    parents: [
      { label: 'Carracci · the golden-age idyll', mode: 'art' },
      { label: 'Cézanne’s Large Bathers', mode: 'art' },
      { label: 'Ingres · the arabesque', mode: 'art' },
    ],
    children: [
      { label: 'The Dance (1909–10)', mode: 'art' },
      { label: 'Les Demoiselles d’Avignon', mode: 'art' },
      { label: 'Flat-color modern painting', mode: 'art' },
    ],
  },
}
```

---

## PART B — the 5 section React components (absinthe format, `Bon` prefix)

```tsx
// ─────────────────────────────────────────────────────────────
// Le Bonheur de vivre (Matisse, 1905–06) — the five chapters
// ─────────────────────────────────────────────────────────────
function BonSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · autumn 1905" title="The year after the wild beasts" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the autumn of <strong>1905</strong>, Henri Matisse had just survived the worst public mauling of his life. At that year&rsquo;s big Paris art show, the <strong>Salon d&rsquo;Automne</strong>, he and a few friends had hung a roomful of paintings done in raw, unmixed, screaming color, and a critic, walking through the room and spotting a tame little classical sculpture marooned among them, had quipped that it was like a Donatello among <em>les fauves</em>, the wild beasts. The name stuck to the painters, and the laughter stuck to Matisse. (The Fauvism movement read tells that story.) Most people, after a public drubbing, get cautious. Matisse did the opposite. He decided his answer to the mockery would be to go <em>bigger</em>: one enormous, deliberate, planned-to-the-inch canvas that would carry the wild color further than anyone, including the wild beasts, had dared.
      </p>
      <p style={proseStyle}>
        That canvas is <em>Le bonheur de vivre</em>, French for <strong>&ldquo;the joy of life&rdquo;</strong> (and that is the title in lowercase, the way the French write it; in English it is usually called simply <em>The Joy of Life</em>). He painted it over the winter, between roughly October 1905 and March 1906, and when it was finished it was nearly <strong>six feet tall and almost eight feet wide</strong>, a wall-sized field of naked figures lazing, kissing, piping music, and dancing in a meadow lit by colors no meadow has ever worn. It is, in plain terms, a picture of careless pleasure, painted at the size museums reserve for battles and saints.
      </p>

      <SectionHeader accent={accent} label="The jury-free show" title="Where there was no jury to throw it out" />
      <p style={proseStyle}>
        Matisse unveiled it in the spring of <strong>1906</strong> at the <strong>Salon des Indépendants</strong>, and where he chose to show it is part of the story. In Paris there were two kinds of art show. There was the official, juried <strong>Salon</strong>, where a committee of established painters decided what got hung and what got rejected, the gatekeeper that had set French taste for two centuries. And there was the <strong>Salon des Indépendants</strong>, founded in 1884 by painters tired of being thrown out: no jury, no prizes, no committee. Pay your fee and your picture goes on the wall. It was the natural home for work too new or too rude for the official jury, which is exactly what Matisse had made. The show ran from about March 20 to April 20, 1906.
      </p>
      <p style={proseStyle}>
        It became the sensation of the season, and not in a flattering way. The <strong>cadmium</strong> colors (the intense, modern, factory-made pigments, cadmium yellows and reds, that let painters hit a brightness older paints could not) and the warped, perspective-free space drew a public outcry; visitors protested, critics fumed, and some genuinely worried that this kind of thing was the <em>end</em> of French painting, that the great national tradition was being thrown overboard for a children&rsquo;s-paintbox dream. Which, in a sense, it was. That was the point. Matisse had not made a peace offering. He had doubled the bet.
      </p>
    </article>
  )
}

function BonMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Studio · 1905–06" title="It looks improvised. It was built." first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first thing to get straight about <em>Le bonheur de vivre</em> is that, for all its loose, dreamy ease, it is one of the most carefully constructed pictures Matisse ever made. The casual look is engineered. He worked it up through many preparatory sketches of the individual figures, and then drew a <strong>cartoon</strong> of the whole thing, which in painting does not mean anything funny: a cartoon is a full-size preparatory drawing, the entire composition mapped out at the scale of the final canvas before a drop of color goes down. He was not splashing out a vision. He was assembling a machine, piece by piece, to look like a vision.
      </p>

      <SectionHeader accent={accent} label="From dots to flat fields" title="A small study you can watch turn into the painting" />
      <p style={proseStyle}>
        The single best window into how he got there is a little oil sketch, the <strong>Sketch for &ldquo;Le Bonheur de vivre&rdquo;</strong> (1905&ndash;06), now at the San Francisco Museum of Modern Art. The final painting is more than four times its size, and the two look strikingly different. The sketch is still painted in loose dabs of broken color, the technique of <strong>Neo-Impressionism</strong> (the method, also called pointillism, of building an image out of small separate touches of pure color meant to mix in the viewer&rsquo;s eye). The big final canvas has thrown all that out: flat, wide expanses of color and clean, linear figures. You can stand the two side by side and literally watch Matisse move, between study and painting, from dots to flat fields. (A second study is held by the Barnes itself.) That shift, from broken color to flat color, is the whole drama of the picture in miniature.
      </p>

      <SectionHeader accent={accent} label="The old masters behind it" title="One documented source, and a crowd of likely ones" />
      <p style={proseStyle}>
        A picture this radical did not come from nowhere, and art historians have spent a century naming its ancestors. Here it pays to be careful, because some of those ancestors are documented and some are educated guesses. The one source that is genuinely nailed down, argued by the historian James Cuno in 1980 and Thomas Puttfarken soon after, is an old engraving: <strong>Agostino Carracci&rsquo;s <em>Love in the Golden Age</em></strong> (after the painter Paolo Fiammingo). It shares the very same setup, a pastoral golden-age idyll with naked figures at ease and, crucially, <strong>a ring of dancers in the background</strong>, the exact motif Matisse uses. That one is a real lineage, not a hunch.
      </p>
      <p style={proseStyle}>
        The others are reasonable family resemblances rather than proven debts, so the honest words are &ldquo;drew on&rdquo; and &ldquo;in the tradition of.&rdquo; In its form and date the painting sits closest to <strong>Cézanne&rsquo;s last great <em>Bathers</em></strong>, nudes built into a landscape, a picture Matisse revered. The long sensual curve of the bodies belongs to the world of <strong>Ingres</strong> and his odalisques (the reclining harem nudes Ingres painted, all flowing contour). And behind all of it stands the whole old <strong>pastoral</strong> tradition, the dream of Arcadia, the mythic carefree countryside, painted for centuries by Titian, Poussin, and Watteau. Since the 1980s, though, scholars have warned that chasing sources can become a parlor game that distracts from what matters, which is what Matisse actually <em>did</em> with all of it. He took the oldest, most respectable subject in European art, the golden-age idyll, and painted it in colors that would have made Titian drop his brush.
      </p>
    </article>
  )
}

function BonLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A meadow in impossible color" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The first thing that hits you, before you can sort out a single figure, is the <strong>color</strong>, and the fact that none of it is true. The ground is not green; it runs hot <strong>pink and orange</strong>, the color of a sunset spread out under your feet. The tree trunks are not brown; they go <strong>violet and green</strong>. The sky is not blue; it shades from lemon-yellow to rose. There is no shading, no careful light-and-dark to round the forms out, just big flat areas of saturated color butted up against each other. This is the <strong>Fauve move</strong> at full volume: color set free from the job of describing the world, free to answer only to feeling and to the design of the surface. The mockery Matisse had taken the year before for one small green stripe down a face, he has here turned into an entire luminous world.
      </p>
      <p style={proseStyle}>
        Now find the people, because the meadow is full of them. This is an <strong>Arcadia</strong>, an idealized, dreamlike countryside out of myth, and it is populated with nude figures both at rest and in motion. There is no story, no event, nothing happening that you could narrate. There is only ease. The &ldquo;joy of life&rdquo; of the title is not a plot; it is a mood, the pure bodily pleasure of lying in the sun with nowhere to be.
      </p>

      <SectionHeader accent={accent} label="The cast" title="Loungers, a piper, a kiss, and a distant dance" />
      <p style={proseStyle}>
        Let your eye move through them. In the <strong>foreground</strong>, at the left and center, figures <strong>recline</strong> on the rose-and-orange ground, stretched out in pure leisure. Their bodies are drawn as long, snaking, sinuous curves, what artists call <strong>arabesques</strong> (a flowing serpentine line, the visual equivalent of a slow exhale). Look closely and you will see that the limbs lengthen and bend past anything a real body does. That is not a mistake. Matisse cared more about the music of that curving line than about anatomy, and he rhymes it everywhere, so that a hip and a tree branch and the edge of the sky all seem to belong to the same slow rhythm.
      </p>
      <p style={proseStyle}>
        Now look at how each body is held. Every figure is fenced by a single dark <strong>contour line</strong>, drawn thick, the way the leading in a stained-glass window holds a pane of color. There is no soft, brushy modeling inside that line, no shadow rounding the form; Matisse lets the bounding outline do all the work that shading used to do, and then fills it with one flat, even field of paint. Once you see those heavy dark edges you cannot unsee them, and they will matter when we get to what one furious viewer said about them.
      </p>
      <p style={proseStyle}>
        At the <strong>bottom center</strong>, a seated nude plays a <strong>double pipe</strong>, a kind of double flute, the unmistakable signal of the pastoral, the music of shepherds. Off in the <strong>lower-right corner</strong>, a pair of figures <strong>embrace</strong>, the frankly sensual note that, together with all the lounging and the piping, makes the picture a hymn to pleasure rather than a polite mythology. And far back, in the <strong>center distance</strong>, on the open meadow, a small <strong>ring of figures dances</strong>, joined hand to hand in a circle. Hold that little round-dance in your mind; it is going to grow up into one of the most famous paintings of the twentieth century.
      </p>

      <SectionHeader accent={accent} label="The deliberate wrongness" title="Why the piper might be a giant or a child" />
      <p style={proseStyle}>
        Here is where the picture rewards a slow look. Compare the piper at the bottom center to the kissing couple at the bottom right. Their relative sizes only make sense if you decide the piper is a small child. But then look at the figures standing just <em>behind</em> them, who are suddenly enormous, giants by comparison. The scale does not hold together, and it is not supposed to. Matisse sized his figures for the <strong>composition</strong>, for how they balance and rhyme across the surface, not for where they stand in space. A painter obeying perspective makes far things small. Matisse makes things whatever size the design wants them. The embracing couple, tiny against the looming figures behind, is the clearest single spot to catch him doing it.
      </p>
      <p style={proseStyle}>
        And the space itself is flattened on purpose. Notice the two big <strong>trees</strong> at the upper left and right, whose curved trunks and heavy foliage bend <em>inward</em> over the scene, arching across the top like a <strong>stage curtain</strong>. They do not open a deep view into the distance; they close the picture off and press everything forward, flat against the surface. The same serpentine line that shapes the bodies shapes the trees, so the whole canvas reads as one woven, shallow, decorative pattern. You are not looking through a window at a real meadow. You are looking at a beautifully designed flat surface that has been <em>made</em> to feel like joy. That is the radical thing under the pretty thing: Matisse has taken the most traditional subject in European painting and rebuilt it as pure decoration in the highest sense, a surface tuned for pleasure, color, and line.
      </p>
      <p style={proseStyle}>
        It is worth naming plainly what this Arcadia is made of. Almost every figure in it is a nude woman, and the picture belongs to a long European line of male painters staging the female body as an emblem of ease and pleasure, the same line that runs back through the Titian, Ingres, and Cézanne nudes Matisse was drawing on. The buyers were men too: Leo Stein first, then Christian Tetzen-Lund, then Albert Barnes, the male connoisseurs for whom such pictures had long been made. Matisse was working squarely inside that convention rather than questioning it. What was radical here was the color and the design, not the choice of subject.
      </p>
    </article>
  )
}

function BonReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Spring 1906" title="Jeers, and a fear for French painting" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hen the picture went up at the Indépendants, the public reaction was loud and hostile. Visitors jeered; critics recoiled. As we saw, some of them genuinely feared they were watching the death of French painting, the abandonment of everything that had made the tradition great. A wall-sized field of pink-and-violet nudes painted with no respect for color, light, or perspective looked, to a great many serious people in 1906, less like a masterpiece than like vandalism. What is striking, looking back, is that the most wounding verdict came not from the conservative enemies you would expect, but from inside Matisse&rsquo;s own camp.
      </p>

      <SectionHeader accent={accent} label="The mentor recoils" title="Signac says he has gone to the dogs" />
      <p style={proseStyle}>
        Two summers earlier, in 1904 at the Mediterranean town of Saint-Tropez, Matisse had spent a season learning the dot-by-dot Neo-Impressionist method from its leading practitioner, the painter <strong>Paul Signac</strong>. (That apprenticeship is told in the Fauvism movement read.) Signac had been a mentor and a champion. And when he saw what Matisse had done with <em>Le bonheur de vivre</em>, throwing the careful pure-color dots overboard for great flat slabs of tint, he turned. In a private letter dated <strong>January 14, 1906</strong>, Signac wrote:
      </p>
      <p style={proseStyle}>
        <em>&ldquo;Matisse, whose attempts I have liked up to now, seems to me to have gone to the dogs. Upon a canvas of two-and-a-half meters, he has surrounded some strange characters with a line as thick as your thumb. Then he has covered the whole thing with flat, well-defined tints, which&mdash;however pure&mdash;seem disgusting.&rdquo;</em>
      </p>
      <p style={proseStyle}>
        It is one of the very few juicy quotes in this whole story that is securely documented, a real letter, not a legend, which is why it is worth quoting in full and attributing precisely: this is Signac, in private, to a fellow painter. And read it closely. The &ldquo;line as thick as your thumb&rdquo; is the very dark bounding contour you just traced around every figure, and the &ldquo;flat, well-defined tints&rdquo; are the unmodeled fields of color it fences in. Signac was naming the two exact moves that make the picture what it is, and recoiling from both. You can feel the personal injury under the insult, too. Signac&rsquo;s entire art was built on those small pure dots of color. Matisse had spent a summer learning the method at Signac&rsquo;s feet, and then used a vast canvas to declare that he was done with it, that the future was flat fields, not dots. The mentor was not just criticizing a picture. He was watching his own method get thrown out by his most gifted student.
      </p>

      <SectionHeader accent={accent} label="The Steins step in" title="A scandal becomes a centerpiece" />
      <p style={proseStyle}>
        And then, against the jeering, came the rescue. <strong>Leo and Gertrude Stein</strong>, the American brother and sister who had moved to Paris and become the avant-garde&rsquo;s sharpest and earliest patrons, bought it. Leo, the connoisseur of the pair, is widely quoted as calling it <strong>&ldquo;the most important painting done in our time.&rdquo;</strong> Gertrude, the writer, ran the salon as much as Leo did, and made it the room where modern writing and modern painting met; her own taste tilted toward Picasso while Leo&rsquo;s tilted toward Matisse, a fault line that would eventually split both the household and the collection. Together the two made their apartment at <strong>27 rue de Fleurus</strong> the single most important room in modern art, the place where, on a given evening, you might find Matisse and Picasso in the same crowd, looking at the newest pictures in Paris on the Steins&rsquo; own walls. Matisse himself installed <em>Le bonheur de vivre</em> there at the close of the Salon.
      </p>
      <p style={proseStyle}>
        And it was not only Leo and Gertrude. Of the wider Stein circle, it was their sister-in-law <strong>Sarah Stein</strong>, married to the third Stein sibling, Michael, who became Matisse&rsquo;s most relentless early champion, promoting him from her own salon nearby and helping launch the short-lived school where he taught. The picture that the public had jeered and Signac had called disgusting now hung as the prize of the most influential private collection in the city, with a circle of believers around it. The scandal had become the centerpiece.
      </p>
    </article>
  )
}

function BonAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="Not the Steins to the Barnes" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        f you read the short version of this picture&rsquo;s life, it usually says the Steins owned it and then it went to the Barnes Foundation in Philadelphia. That skips a country and a bankruptcy. The full <strong>provenance</strong> (the documented chain of who owned a work, hand to hand) runs through Copenhagen. When the Stein siblings divided their collection in 1914, Leo kept <em>Le bonheur de vivre</em>; over the next few years it was handled through the Paris dealers, and in <strong>1919</strong> it was bought by a Danish grain merchant named <strong>Christian Tetzen-Lund</strong>, one of the great early collectors of Matisse and Picasso, who took it home to Copenhagen. For three years the most important Fauve painting in the world hung in Denmark.
      </p>
      <p style={proseStyle}>
        Then a bank failed. In <strong>1922</strong> the Danish <strong>Landmandsbanken</strong>, the country&rsquo;s largest bank, collapsed, and Tetzen-Lund, caught in the wreckage, had to break up his collection. He wrote to a wealthy American chemist who was buying modern pictures by the trainload: <strong>Albert C. Barnes</strong> of Philadelphia, who had made a fortune on an antiseptic and was assembling one of the greatest private collections of modern art anywhere. Barnes bought it through the Paris dealer <strong>Paul Guillaume</strong> for roughly <strong>45,000 francs</strong> (about $3,700 at the time), and the purchase was recorded in <strong>January 1923</strong>. So the honest sentence is not &ldquo;the Steins sold it to Barnes.&rdquo; It is: a Copenhagen collector sat between them, and a bank collapse, not a sale at the Salon, is what carried the picture to America.
      </p>

      <SectionHeader accent={accent} label="The least familiar masterpiece" title="Hidden in plain sight for decades" />
      <p style={proseStyle}>
        Where it landed is its own small irony. The <strong>Barnes Foundation</strong>, in suburban Merion, Pennsylvania (it moved into central Philadelphia in 2012), was a famously closed and idiosyncratic place, and that was written into law. Barnes&rsquo;s founding <strong>1922 trust</strong> (the indenture that governs the Foundation) forbade it from ever lending its pictures or even rehanging them, fixing every work in its assigned spot in perpetuity as a teaching ensemble; for decades it also barred color reproductions of the works in its care. That meant one of the pillars of modern painting was effectively bolted to a single wall and almost impossible to see in print. The critic <strong>Hilton Kramer</strong> called <em>Le bonheur de vivre</em> &ldquo;the least familiar of modern masterpieces.&rdquo; The no-loan rule was loosened only by a 2023 court ruling; for most of the twentieth century, a picture that had once been the loudest scandal in Paris sat where almost no one could see it, by the order of one collector&rsquo;s will.
      </p>

      <SectionHeader accent={accent} label="What it grew into" title="A dance, a rivalry, and a fading yellow" />
      <p style={proseStyle}>
        And yet its influence ran everywhere. Remember the little ring of dancers far back in the meadow. Matisse pulled that single motif out of the crowded canvas, blew it up, and made it the whole subject of <strong>The Dance</strong> (1909&ndash;10), one of the most famous images he ever painted. <em>Le bonheur de vivre</em> was the seedbed of his next forty years, the source he kept mining all the way to the late paper cut-outs.
      </p>
      <p style={proseStyle}>
        It also fed the rivalry that would define the next decade of painting. <strong>Picasso&rsquo;s <em>Les Demoiselles d&rsquo;Avignon</em></strong> (1907) is widely read as his answer to the sensation Matisse had made. (That reading is interpretation, not documented intent, so take it as the way the rivalry is usually told, not as Picasso&rsquo;s stated plan; the <em>Demoiselles</em> work read covers the picture itself.) The split ran right through the Stein household, where Gertrude came down on Picasso&rsquo;s side and Leo on Matisse&rsquo;s. Together, the two men and their two canvases are usually counted as the twin poles early modern painting in the West was built between.
      </p>
      <p style={proseStyle}>
        One last, oddly moving fact. The color you see today is already not quite the color of 1906. Some of Matisse&rsquo;s heavy <strong>cadmium-yellow</strong> passages are slowly degrading, the bright pigment turning chalky and brown as its chemistry breaks down, a decay that conservators have studied closely. (It is the same quiet tragedy that has dulled the sunlit grass of Seurat&rsquo;s <em>Grande Jatte</em>.) The great hymn to the joy of life is, very gently, fading, which only makes the loud, impossible color we can still see feel more worth looking at.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  bonheur: { salon: BonSalon, making: BonMaking, looking: BonLooking, reception: BonReception, afterlife: BonAfterlife },
```
