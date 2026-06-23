# FINAL — André Derain, *Charing Cross Bridge, London* (1906) — WORK READ

**Resolver/Reviser (Opus), gated art pipeline step (reconcile + revise).** Folds the
three gates (fact / read / frame) into the step-3 draft. Five sections, six
annotations, ~5 figures, provenance with no invented prices, lineage. PART A =
paste-ready const for `src/lib/art-content.ts`. PART B = five `Crx`-prefixed reader
components (absinthe voice) for `art-section-reader.tsx`.

**Changes folded this pass:**
- **FRAME (main [FIX]):** added a closing beat to `CrxAfterlife` — Derain's Fauve
  moment was brief, he broke with Fauvism by ~1908 toward Cézanne, and after WWI
  became a "return to order" Neoclassical conservative — so the reader doesn't exit
  thinking he stayed a Fauve. "Beat Monet" stays attributed to Vollard's commercial
  aim, never asserted as an achieved verdict.
- **READ [FIX] sensation-vs-record 3×→2×:** trimmed the sky paragraph in `CrxLooking`
  so it carries only the new fog/no-hour point; cut "the sky settles the argument" so
  `CrxBreak` makes the formal case fresh.
- **READ [FIX] "look before you name" collision:** gave one gestalt beat ("It is warm.
  The whole lower half glows.") before naming the hues, so the instruction is honored.
- **READ/CLARITY [FIX] "pointillist" handed as a known synonym:** changed to
  "divisionist dot" (reuse of the just-glossed term) in PART A annotation 6 AND PART B
  `CrxLooking`.
- **READ/CLARITY [FIX] bare "Fauve" in the PART A `assignment` blurb:** changed to
  "young wild-color (Fauve) painter," self-glossing.
- **FACT [FIX] provenance label:** relabeled the "1932–1950" row "1932–Feb 1950" so it
  no longer overlaps the next (Apr 1950) row.
- **Kept (already correct):** series count hedged ("dozens commissioned, around thirty
  delivered"); bridge geography (Charing Cross / Hungerford railway bridge, Westminster
  on the far bank); no invented prices; "translate not reproduce" paraphrased.

New prose uses parentheses/commas, never the em-dash; verbatim-quote punctuation
preserved; no new unverified facts (the afterlife conservatism beat is web-backed per
the frame gate: Britannica / Wikipedia / Thyssen).

---

## PART A — paste-ready const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Charing Cross Bridge, London (Derain, 1906). The Fauve "answer to
// Monet": same Thames, non-natural color. National Gallery of Art, Washington
// (John Hay Whitney Collection, acc. 1982.76.3) — NOT MoMA's Charing Cross
// Bridge and NOT MoMA's London Bridge. Authored through the art content
// pipeline (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['charing-cross'] (Crx… prefix).
// HEDGES handled per fact pack: series = "dozens commissioned, ~30 delivered"
// (never a hard number); trips hedged; the "translate not reproduce" aim is
// PARAPHRASED, never quoted (no dated primary cite). The spanned bridge is the
// Charing Cross / Hungerford railway bridge; Westminster/Big Ben sit on the far
// bank, never the span itself. Afterlife now closes Derain's BRIEF Fauve arc
// (broke w/ Fauvism ~1908 → Cézanne → post-WWI "return to order" classicism).
// ─────────────────────────────────────────────────────────────
export const CHARING_CROSS: ArtWorkContent = {
  id: 'charing-cross',
  name: 'Charing Cross Bridge, London',
  shortName: 'Charing Cross Bridge',
  year: 1906,
  artist: 'André Derain',
  artistId: 'derain',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 7 5/8 in × 3 ft 3 1/2 in',
  location: 'National Gallery of Art, Washington',
  acquired: 'John Hay Whitney Collection, 1982 (accession 1982.76.3)',
  accent: ART_ACCENTS.rust, // copied from FAUVISM
  chain: { name: 'Works of Fauvism', index: 7, total: 9 },
  hook: 'A London the eye never saw, the Thames running pink and the sky burning butter-yellow, painted by a 26-year-old whom a dealer had shipped to England on purpose to beat Monet at his own river.',
  heroImage: ART_IMG.derainCharingCross,
  heroCredit: 'Derain, Charing Cross Bridge, London, 1906 · National Gallery of Art, Washington (John Hay Whitney Collection)',
  heroAspect: 1.25, // 100.3 × 80.3 cm → W/H ≈ 1.25
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1906', k: 'Painted' },
    { v: '2′7⅝″ × 3′3½″', k: 'Dimensions' },
    { v: 'NGA, Washington', k: 'Now at' },
  ],
  sections: [
    { id: 'assignment', eyebrow: 'Paris · 1906', dateLabel: '1906', title: 'A dealer sends him to beat Monet', blurb: 'The Paris dealer Ambroise Vollard ships a 26-year-old young wild-color (Fauve) painter to London on purpose, to paint a Thames series that can rival the Monet London paintings everyone in Paris had just gone mad for.', progress: 0.08 },
    { id: 'subject', eyebrow: 'The Thames', dateLabel: '1906', title: 'Monet’s river, Derain’s vantage', blurb: 'The same stretch of the Thames Monet had painted: the railway bridge, the barges, the far bank bending toward Westminster, with Big Ben in the distance. Same motif, opposite method.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 7⅝ in × 3 ft 3½ in', title: 'A river that exists only in paint', blurb: 'Read the painting itself: the flattened bridge band, the pink-and-yellow Thames laid in dots and dashes over bare canvas, the butter-yellow sky, the dark barges, and Big Ben glowing on the far bank.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1905–06', title: 'Monet painted the air; Derain painted the feeling', blurb: 'Fauvism’s wager on Monet’s own subject: where the Impressionist dissolved London in fog and the moment of light, Derain threw down arbitrary, unblended color meant to stir feeling, not record weather.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1906–today', title: 'Vollard’s bet, and where it landed', blurb: 'Vollard bought the London series and the canvases scattered into the trade over decades, through Quinn, Knoedler and Chrysler, until John Hay Whitney bought this one in 1950 and gave it, through his trust, to Washington in 1982 — long after Derain himself had walked away from the wild-color style that made it.', progress: 0.96 },
  ],
  provenance: [
    { year: '1906', who: 'André Derain (the artist) → Ambroise Vollard (dealer)', place: 'Paris', note: 'From the artist to the Paris dealer Ambroise Vollard in 1906, as part of the London series Vollard had commissioned and effectively bought up entire. No public sale price.', price: null },
    { year: '1918', who: 'John Quinn', place: 'New York', note: 'Sold in December 1918 through Walter Pach and the Carroll Galleries, New York, to the American collector John Quinn.', price: null },
    { year: 'after Quinn', who: 'Paul Guillaume (probably)', place: 'Paris', note: 'From Quinn’s estate, probably acquired by the Paris dealer Paul Guillaume. (The “probably” is the museum’s own hedge.)', price: null },
    { year: '1927–1932', who: 'Alex. Reid & Lefèvre · Galerie Étienne Bignou · G. Keller for M. Knoedler & Co.', place: 'London / Paris', note: 'Through the trade: sold by Alex. Reid & Lefèvre in 1927, by Galerie Étienne Bignou in 1931, and in 1932 to G. Keller in Paris for the New York firm M. Knoedler and Co.', price: null },
    { year: '1932–Feb 1950', who: 'Mme. Kaethe Perls, then Walter P. Chrysler, Jr. (possibly)', place: 'Paris / New York', note: 'Acquired by Mme. Kaethe Perls in Paris between 1932 and 1938, then possibly sold to Walter P. Chrysler, Jr., who owned it by 1939. (The “possibly” is the museum’s own hedge.) Sold at the Chrysler sale, Parke-Bernet Galleries, 16 February 1950, then held by the dealer Julius H. Weitzner.', price: null },
    { year: '1950', who: 'John Hay Whitney', place: 'New York', note: 'Sold on 12 April 1950 to the collector John Hay Whitney.', price: null },
    { year: '1982–today', who: 'National Gallery of Art', place: 'Washington', note: 'Deeded in 1982 to the John Hay Whitney Charitable Trust and given the same year to the National Gallery of Art. Credit line: John Hay Whitney Collection, accession 1982.76.3. On view.', price: 'gift to the museum', museum: true },
  ],
  figures: [
    { name: 'André Derain', role: 'The painter', palette: ['#c87a2a', '#7a3a52', '#1c140a'] },
    { name: 'Ambroise Vollard', role: 'Dealer; sent him to London', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'Claude Monet', role: 'The benchmark, not a participant', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Henri Matisse', role: 'Fellow Fauve', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { name: 'John Hay Whitney', role: 'Collector; gave it to the NGA', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
  ],
  annotations: [
    { label: 'The bridge that names the painting', where: 'The long horizontal band crossing the middle of the canvas, river below, far bank beyond', detail: 'The structure spanning the river is the Charing Cross / Hungerford railway bridge, the painting’s namesake (which is why the picture is also catalogued as “Hungerford Bridge at Charing Cross”). Derain draws it not as modeled iron but as a flattened band laid across the canvas, the architecture asserted rather than described. Note what it is NOT: this is the railway bridge, not Westminster Bridge, and the building you can pick out beyond it is on the far bank, a separate thing entirely.' },
    { label: 'A river with no blue in it', where: 'The broad lower band of water beneath the bridge', detail: 'The Thames is built from short broken horizontal strokes and separate dots, mostly bumblebee yellow shot through with bubblegum pink and pale burnt-orange, much of it laid straight over bare off-white canvas. There is no blue and no gray anywhere in the water. This is the single fact that tells you what kind of painting you are in: a river that exists only in paint, not a river anyone ever looked at and saw.' },
    { label: 'A sky that replaced the weather', where: 'The whole upper band, above the far bank', detail: 'London’s famous gray is gone outright. The sky is built from short and long vertical strokes of butter yellow, rose pink, pale orange, and patches of watermelon pink, a warm glow stretched across the top of the picture. It is the clearest sign that this is sensation set down, not weather recorded. Hold this against Monet’s London, where the whole subject is the fog and the changing light; here there is no fog and no hour of the day, only color.' },
    { label: 'The dark barges that fix the scale', where: 'On the water, in the mid- and foreground', detail: 'Small river craft and barges sit on the colored water (the museum tags the picture “Boats”). They read as dark accents against the pink-and-yellow river, and they do quiet work: they give the bridge its size and tell you this glowing field is a working Thames, a real river of commerce, not an abstract pattern. They are the human, ordinary note inside the unnatural color.' },
    { label: 'Big Ben, the one thing that says “London”', where: 'The far bank, behind and beyond the bridge', detail: 'The riverfront bends away toward Westminster, and among the massed buildings on the far bank you can pick out Big Ben and the Houses of Parliament. They are the single anchor that tells you this is London at all, and Derain paints them glowing orange and turquoise rather than stone-gray. Everything else is color set free; this one landmark is the leash that keeps the picture tied to a real place.' },
    { label: 'Two touches at once: the dot and the patch', where: 'Compare the broken, dotted water and sky against the broader flat color areas', detail: 'Derain mixes two ways of laying down paint. In the water and sky he uses separate spots and lines of pure color, a loosened version of the Neo-Impressionist “divisionism” of Seurat and Signac (small dots of unmixed color meant to blend in the viewer’s eye). Elsewhere he drops that for flatter, broader Fauve patches. In his hands the strict divisionist dot relaxes into intermittent spots and dashes, so the surface flickers between two methods, structure and shimmer at the same time.' },
  ],
  lineage: {
    parents: [
      { label: 'Monet’s London series', mode: 'art' },
      { label: 'Seurat & Signac’s divisionism', mode: 'art' },
      { label: 'Van Gogh’s charged color', mode: 'art' },
    ],
    children: [
      { label: 'German Expressionism', mode: 'art' },
      { label: 'Color as pure feeling', mode: 'art' },
      { label: 'The dealer-made series', mode: 'civ' },
    ],
  },
}
```

**Registry / wiring notes for the coordinator (NOT part of the const):**
- Add `CHARING_CROSS` to the works export map alongside `STARRY_NIGHT`, `BEDROOM_ARLES`, etc.
- `artistId: 'derain'` and `movementId: 'fauv'` assume the standard ids; confirm a Derain artist entry exists or fall back to the movement page (the work prose already routes "up one level" to the Fauvism overview, matching the Sn pattern).
- NARRATIVES registry line: `'charing-cross': { assignment: CrxAssignment, subject: CrxSubject, looking: CrxLooking, break: CrxBreak, afterlife: CrxAfterlife },`
- Gate [NICE] follow-up (wiring, not prose): the prose routes divisionism to "the Post-Impressionism overview a couple of levels up." Verify that is the app section that actually covers Seurat/Signac divisionism (it is usually filed under Neo-Impressionism); re-label the routing target if the app uses a different node name.

---

## PART B — five `Crx`-prefixed reader components (absinthe voice)

```tsx
function CrxAssignment({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1906" title="A dealer sends him to beat Monet" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1906 a 26-year-old French painter named <strong>André Derain</strong> (1880&ndash;1954; pronounced &ldquo;deh-RANN&rdquo;) got on a boat to London because a dealer told him to. The dealer was <strong>Ambroise Vollard</strong> (1866&ndash;1939), one of the great talent-spotters of the Paris art trade, the man who had given Cézanne and Picasso early shows and who made his living betting on painters before the rest of the world caught up. This trip was a business decision, not a holiday. Vollard wanted a series of London paintings, and he wanted them from a young man working in the loudest new style in France.
      </p>
      <p style={proseStyle}>
        That style was <strong>Fauvism</strong> (from the French <em>fauves</em>, &ldquo;wild beasts,&rdquo; the larger story told in the Fauvism overview one level up in this app). The short version you need here: at the Paris Salon of 1905, Derain and his friend <strong>Henri Matisse</strong> and a few others had hung paintings in colors that did not match the world, faces with green stripes, harbors in pink and turquoise, color chosen for effect instead of accuracy. A hostile critic called them wild beasts, and the name stuck. By 1906 Derain was one of the wild beasts in good standing, and that is exactly why Vollard picked him.
      </p>

      <SectionHeader accent={accent} label="The Monet trigger" title="Why London, why now" />
      <p style={proseStyle}>
        To understand the assignment you have to know what had just happened across town. <strong>Claude Monet</strong> (1840&ndash;1926), the most famous of the Impressionists (the older generation who painted light and weather outdoors, also covered one level up), had spent years painting the Thames, the Houses of Parliament and the London fog, over and over, the same views under changing light. In the summer of 1904 a big group of those London canvases went on show at the <strong>Durand-Ruel</strong> gallery in Paris and were a sensation. Everyone who mattered in the Paris art world had just stood in front of Monet&rsquo;s misty, silvery London and been amazed by it.
      </p>
      <p style={proseStyle}>
        So Vollard did the commercially obvious thing: he sent his own young painter to the same river to do it differently. The instruction, in effect, was to go to London, paint the Thames Monet had painted, and come back with something Monet could never have made. Derain went over a couple of stays in this period (sources disagree on whether it was two trips or three, so we will not pretend to know), and he came back with a series. How big a series is itself uncertain, the counts conflict, but the honest shape of it is this: Vollard commissioned <strong>dozens</strong> of views and Derain delivered <strong>around thirty</strong>. The painting in front of you is one of them.
      </p>
    </article>
  )
}

function CrxSubject({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The Thames" title="Standing where Monet stood" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ook first at what Derain chose to paint, because he chose it on purpose. This is the <strong>River Thames</strong> in central London, the wide river that runs through the middle of the city. The painting&rsquo;s title points at a bridge: the <strong>Charing Cross Bridge</strong>, also called the <strong>Hungerford Bridge</strong>, a railway bridge that carries trains across the Thames into Charing Cross station on the north bank. (One word of warning, because the alt-titles cause it: the bridge in the picture is the railway bridge. It is not Westminster Bridge, even though some old catalogues loosely call it that.) On the far bank, in the distance, sits Westminster, and you can pick out the clock tower of <strong>Big Ben</strong> and the <strong>Houses of Parliament</strong>, the seat of the British government.
      </p>
      <p style={proseStyle}>
        Now the point that makes the whole series make sense: this is, more or less, <strong>Monet&rsquo;s river</strong>. The bridge, the barges, the bend of the Thames toward Parliament, these were the same London motifs Monet had painted in his celebrated series. Derain chose similar views and, in some cases, painted from vantage points close to Monet&rsquo;s own. He was not stumbling onto fresh subject matter. He was walking up to a subject another, older, hugely successful painter had just made famous, and standing in nearly the same spot.
      </p>

      <SectionHeader accent={accent} label="On the spot, then in the studio" title="Sketches home to France" />
      <p style={proseStyle}>
        He did not, however, paint most of these on a London riverbank. Like a lot of the series, this kind of canvas was worked up <strong>back in France</strong> from sketches and drawings made in London, with only some of the group painted in front of the motif. That matters, because it tells you the color was never a transcription of what stood in front of him. A painter back in his French studio, building a London out of sketchbooks and memory, is free to make the river any color he likes, and Derain took that freedom all the way, which is the subject of the next section.
      </p>
    </article>
  )
}

function CrxLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A river that exists only in paint" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the size, because it surprises people who know the painting only from a screen. This is not a mural. It is about <strong>2 feet 7 inches tall and 3 feet 3 inches wide</strong> (the museum&rsquo;s measurement, an easel-sized oil on canvas in <strong>landscape</strong> format, wider than it is tall). All of that heat is packed into a picture you could carry under one arm. Now walk into it. Before you sort anything into names, take it in whole: it is warm, the whole lower half glows, and nothing in it is the color London actually is.
      </p>
      <p style={proseStyle}>
        Now look at the <strong>river</strong> across the bottom half of the picture. It is yellow. Not yellow-tinted gray, not yellow where the sun catches it, just yellow, a bumblebee yellow run through with stripes and dots of <strong>bubblegum pink</strong> and pale <strong>burnt-orange</strong>, much of it laid straight over the bare off-white canvas so the weave shows through. There is <strong>no blue in this river. There is no gray.</strong> A real river, on any day, in any weather, gives you some version of blue, green, brown or gray, the colors of water and sky and silt. Derain gives you none of them. He has painted the Thames in colors the Thames does not own, and that single refusal is the whole point of the picture. This is a river that exists only in paint.
      </p>
      <p style={proseStyle}>
        Now lift your eye to the <strong>sky</strong>, the broad band across the top. London is famous for one kind of weather: low gray cloud and fog, the very thing Monet had spent years painting. Here the gray is simply gone. The sky is built from short and long vertical strokes of <strong>butter yellow, rose pink and pale orange</strong>, with patches of watermelon pink, a warm glow with no hour of the day attached to it and no weather in it at all. There is no fog here because the painting was never about fog. It was about color.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#d06a2a', '#3a8a6a', '#d04a7a']}
        imageUrl={ART_IMG.derainCharingCross}
        ratio="5/4"
        alt="Derain, Charing Cross Bridge, London, the whole canvas"
        caption={<>Derain,{' '}<em>Charing Cross Bridge, London</em>, 1906. National Gallery of Art, Washington (John Hay Whitney Collection).</>}
        rights="Public domain in the US (painting 1906). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The structure" title="The bridge, the barges, and one true landmark" />
      <p style={proseStyle}>
        With the color in your eye, find the structure that holds it together. Across the middle of the picture runs the <strong>bridge</strong>, the Charing Cross railway bridge, drawn not as modeled ironwork but as a flattened horizontal band laid across the canvas. The architecture is asserted, not described; Derain tells you a bridge is there and refuses to fuss over its rivets. On the colored water below it sit small dark <strong>barges and river craft</strong>, and they earn their place: they read as dark accents against the pink-and-yellow flood, they give the bridge its scale, and they quietly insist this is a working river, not an abstract pattern.
      </p>
      <p style={proseStyle}>
        Then, on the far bank, the one thing that tells you where you are. Among the massed buildings in the distance you can pick out <strong>Big Ben and the Houses of Parliament</strong>, glowing orange and turquoise instead of stone-gray. They are the painting&rsquo;s single anchor to a real place, the one landmark that turns &ldquo;a yellow river under a pink sky&rdquo; back into &ldquo;London.&rdquo; Everything else in the picture is color let off its leash; this one cluster of buildings is the leash.
      </p>

      <SectionHeader accent={accent} label="How it is painted" title="The dot and the patch, at once" />
      <p style={proseStyle}>
        One last thing to see, in the handling itself. Look closely at the water and the sky and you will find they are built from <strong>separate spots and short dashes</strong> of unmixed color sitting side by side, a loosened version of the technique called <strong>divisionism</strong> (the method of Georges Seurat and Paul Signac, who laid down small dots of pure color meant to mix in the viewer&rsquo;s eye rather than on the palette, covered in the Post-Impressionism overview a couple of levels up). Then look at the broader, flatter areas, and that dotting drops away into solid Fauve <strong>patches</strong> of color. Derain is using two touches at once: the flickering divisionist spot for shimmer, the flat patch for structure. In his hands the strict divisionist dot relaxes into intermittent spots and lines, never quite a system, which is why the surface seems to vibrate between order and freedom.
      </p>
    </article>
  )
}

function CrxBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break" title="Monet painted the air; Derain painted the feeling" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the comparison the whole series was built to provoke, so set the two painters side by side on the same river and let them argue. <strong>Monet</strong> went to the Thames to paint the <em>air</em>. His London is a series about atmosphere, fog, the dissolving moment of light, the same view studied again and again as the weather changed; the bridge and the Parliament half-vanish into mist, and the real subject is the silvery haze itself. Monet was, in a sense, a recording instrument of extraordinary sensitivity, set up to catch exactly how the light fell on one particular afternoon.
      </p>
      <p style={proseStyle}>
        <strong>Derain</strong> stood at nearly the same river and did the opposite. He threw out the weather entirely. There is no fog, no hour, no changing light in his picture, because none of that was the point. He laid down <strong>arbitrary, non-naturalistic color</strong>, the Thames pink, the sky yellow, chosen to stir a feeling in you, not to tell you what London looked like. Where Monet dissolved the city into atmosphere, Derain asserted it in flat patches and bright spots of pure hue, the structure held firm and the color set free. The blunt way to keep them apart, and it holds up: <strong>Monet painted the air; Derain painted the feeling.</strong>
      </p>

      <SectionHeader accent={accent} label="What Derain was after" title="To translate, not to copy" />
      <p style={proseStyle}>
        That is what Fauvism wagered, and Derain&rsquo;s London is one of its clearest test cases, precisely because it picks a fight with a master on the master&rsquo;s own ground. The wager was that a painting&rsquo;s job is not to reproduce how a scene looks but to <strong>translate</strong> how it feels, and that color is the tool for the job, color used to stir emotion rather than to describe a surface. (That is a paraphrase of the idea Derain worked by; the neat sentence you sometimes see quoted has no reliable dated source, so take the idea as real and the exact wording as not his.)
      </p>
      <p style={proseStyle}>
        So the break, the thing that makes this picture matter beyond being a pretty riverscape, is this: Derain took the most respectable subject available, a famous river already claimed by a famous painter, and used it to prove that color no longer had to obey the world. Monet had pushed painting toward the truth of light. Derain pushed it past truth altogether, into a London that no eye ever saw and that exists only because a young man with a pot of pink paint decided it should.
      </p>
    </article>
  )
}

function CrxAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="After" title="Vollard’s bet, and where it landed" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he London series did what Vollard had paid for it to do, in the long run. <strong>Vollard bought the series effectively in its entirety</strong>, and over the following decades the individual canvases scattered out into the international art trade, from dealer to collector to dealer, the way a bought-up series does. Today these London paintings are among Derain&rsquo;s most prized works, and in 2005 and 2006 the Courtauld Gallery in London gathered them for a full exhibition, &ldquo;André Derain: The London Paintings,&rdquo; a century after he made them. The young man Vollard had shipped across the Channel had, it turned out, made something that outlasted the dealer who commissioned it.
        </p>
        <p style={proseStyle}>
          There is one more thing worth knowing, because it changes how you see the picture. Derain&rsquo;s wild-beast period was short. Within about two years he had cooled on Fauvism&rsquo;s pure color entirely, turning toward the more measured, structured painting of <strong>Cézanne</strong> and the new ideas of Cubism stirring nearby. After the First World War he became one of the leaders of a broad &ldquo;return to order,&rdquo; painting careful nudes, portraits and landscapes in a deliberately classical, traditional manner for the rest of his life. The man who burned the Thames pink spent his later decades as one of the more conservative painters of his generation. That is part of what makes this canvas worth standing in front of: it is a high point of a style its own maker treated as a phase and left behind.
        </p>
        <p style={proseStyle}>
          The painting itself, meanwhile, had a long and well-traveled life as an object. It went from Derain to Vollard in 1906, and then began a journey through some of the biggest names in the 20th-century art market. The American collector <strong>John Quinn</strong>, the New York lawyer whose pioneering modern collection helped bankroll the legendary 1913 Armory Show, bought it in 1918. After his estate it probably passed to the Paris dealer Paul Guillaume, then through the London and Paris trade, then to the New York firm <strong>Knoedler</strong>, and possibly into the collection of <strong>Walter P. Chrysler, Jr.</strong> (the &ldquo;probably&rdquo; and &ldquo;possibly&rdquo; are the museum&rsquo;s own honest hedges, kept here on purpose). At the Chrysler sale in New York in February 1950 it changed hands again.
        </p>

        <SectionHeader accent={accent} label="1950 → 1982" title="Whitney, and the gift to Washington" />
        <p style={proseStyle}>
          In <strong>April 1950</strong> the painting was bought by <strong>John Hay Whitney</strong> (1904&ndash;1982), an American businessman, diplomat and one of the great collectors of his generation. It stayed with him for the rest of his life. In <strong>1982</strong> it was deeded to the John Hay Whitney Charitable Trust and given the same year to the <strong>National Gallery of Art</strong> in Washington, where it hangs now under the credit line &ldquo;John Hay Whitney Collection.&rdquo; Notice the honest gap in this record: the museum publishes no sale prices along the chain, so neither will we. &ldquo;From the artist to Vollard,&rdquo; &ldquo;sold to Whitney,&rdquo; with no figures attached, is the true account, and inventing francs and dollars to make it sound exact would be a lie dressed up as scholarship.
        </p>
        <p style={proseStyle}>
          That is the whole arc, worth stating flat. A dealer&rsquo;s commercial bet sent a 26-year-old to London to out-paint Monet; the painter came back with a river the color of a sunrise that never happened; the wild-color style that produced it he abandoned within two years; the canvas wandered for forty years through the great collections of two continents; and it ended up on a wall in Washington, where people who have never heard of Ambroise Vollard stand in front of a pink Thames and feel, exactly as Derain wanted, something the real river could never have made them feel.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="Paris"
        when="1906–07 · the same moment"
        title="A young Spaniard starts breaking the figure apart."
        body="While Derain is painting his pink Thames, a 25-year-old Pablo Picasso is at work in a Montmartre studio on a large, ugly, deliberately shocking canvas of five women, the picture that will become Les Demoiselles d’Avignon. Fauvism’s liberation of color is barely three years old and already the next revolution is starting a few streets away, this one aimed not at color but at form. The wild beasts had freed the palette; Picasso and Braque were about to dismantle the whole idea of a single, fixed view, and Cubism would soon make Fauvism look almost gentle, the same pull toward structure that would soon draw Derain himself away from pure color."
        palette={['#c0a06c', '#3d3a2e', '#8a6b3a']}
        href="/art/mod/cubism"
      />
    </>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'charing-cross': { assignment: CrxAssignment, subject: CrxSubject, looking: CrxLooking, break: CrxBreak, afterlife: CrxAfterlife },
```

---

## FACT LEDGER (every concrete claim → fact-pack item / gate source)

| Claim in prose | Source | Flag |
|---|---|---|
| Derain b. 1880, d. 1954; age 26 in 1906 | §6 Key Figures | DOCUMENTED |
| Vollard (1866–1939) sent him to London in 1906, deliberate commercial move | Beat 1 / §6 | DOCUMENTED |
| Vollard early shows Cézanne/Picasso | Vollard standard; fact gate confirmed | DOCUMENTED-general |
| Fauvism = "wild beasts," 1905 Salon, arbitrary color; Matisse alongside | Beat 3 / §6 | DOCUMENTED |
| Monet London series shown Durand-Ruel summer 1904, sensation | Beat 1 | DOCUMENTED |
| "couple of stays," trips two-vs-three hedged | Beat 1 [DISPUTED] | HEDGED per pack |
| "dozens commissioned, around thirty delivered" | §7 [DISPUTED] | HEDGED — no hard number |
| Charing Cross / Hungerford railway bridge; Westminster + Big Ben on far bank; NOT Westminster Bridge | Beat 2 / §0 / [WATCH] | DOCUMENTED + decoy guarded |
| Same motifs as Monet, similar vantage; most painted back in France from sketches | Beat 2 / Beat 4 | DOCUMENTED |
| Dimensions 2 ft 7⅝ in × 3 ft 3½ in, landscape ~1.25, oil on canvas | §0 | DOCUMENTED, imperial |
| River yellow/pink/orange, no blue/gray, over bare canvas | Annotation 2 / Beat 3 | DOCUMENTED-color (gate-6 confirm by eye) |
| Sky butter-yellow/rose/orange/watermelon, no fog | Annotation 3 | DOCUMENTED-color (gate-6 confirm) |
| Barges/boats present, dark accents | Annotation 4 | DOCUMENTED ("Boats" tag); count/placement hedged |
| Big Ben/Parliament pickable on far bank, orange/turquoise | Annotation 5 | DOCUMENTED (gate-6 confirm) |
| Divisionism (Seurat/Signac) loosened spots + flat Fauve patches; "divisionist dot" (not "pointillist") | Annotation 6 / Beat 3 | DOCUMENTED (read-gate gloss fix) |
| "translate not reproduce" PARAPHRASED, no quote marks | Beat 3 [DISPUTED-as-verbatim] | PARAPHRASE only |
| "Monet painted the air; Derain painted the feeling" spine | Beat 4 (pack-supplied line) | DOCUMENTED framing |
| Vollard bought series entire; Courtauld 2005–06 "The London Paintings" | Beat 5 | DOCUMENTED |
| **Derain's Fauve moment brief; broke w/ Fauvism ~1908 → Cézanne/Cubism; post-WWI "return to order" classicism + conservatism** | **Frame gate [FIX] #1** (Britannica / Wikipedia / Thyssen) | **DOCUMENTED (web-backed, added this pass)** |
| John Quinn the NY lawyer-collector, backer of the 1913 Armory Show | Read-gate [NICE] #3 (Quinn standard) | DOCUMENTED-general (one color clause) |
| Provenance chain (Quinn 1918, Guillaume probably, Reid/Bignou/Keller-Knoedler 1927–32, Perls, Chrysler possibly, Chrysler sale 16 Feb 1950, Weitzner, Whitney 12 Apr 1950, NGA 1982, 1982.76.3) | §5 | DOCUMENTED, hedges preserved, no prices |
| Provenance row relabeled "1932–Feb 1950" (no overlap w/ Apr 1950 row) | Fact gate [FIX] | DONE this pass |
| No public sale prices anywhere | §5 | DOCUMENTED (anti-invention) |
| Whitney 1904–1982, collector/diplomat/businessman | §6 + standard | DOCUMENTED-general |
| Meanwhile: Picasso Les Demoiselles 1906–07, Montmartre, next revolution = form | cross-vertical, matches DEMOISELLES const | DOCUMENTED (app-internal) |

**Gate-6 confirm-by-eye list (coordinator):** bridge placement; river hues (no blue/gray,
over bare canvas; river orange genuinely *burnt*/browner vs sky *pale*); sky hues; barge
count/placement (prose hedges to "small dark barges," safe); Big Ben/Parliament
identifiable in the chosen scan; both touches (divisionist dots + flat patches) visibly
coexist. Use the higher-resolution correct-color scan (the fact pack flags the `.png`
resolution as unconfirmed and offers the NGA open-access JPG as an alternate).

**Open follow-ups handed to the coordinator (not prose):**
- Fact gate [FIX]: verify Julius H. Weitzner's city against the live NGA provenance
  string (one snippet says "London," fact pack says "New York"). No reader-facing prose
  names his city, so this is a const-note check only; if the NGA gives no city, drop the
  claim rather than assert one.
- Read gate [NICE] #9 / PART A wiring note: confirm the divisionism cross-reference
  routes to the app section that actually covers Seurat/Signac (Neo- vs Post-Impressionism
  label).
