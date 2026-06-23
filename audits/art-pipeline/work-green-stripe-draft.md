# Author draft — THE GREEN STRIPE (kind: WORK, Modern era, Fauvism, 1905)

Matisse, *The Green Stripe (Portrait of Madame Matisse / La Raie verte)*, 1905,
Statens Museum for Kunst, Copenhagen. Drafted from
`audits/art-pipeline/work-green-stripe-factpack.md` ONLY; every concrete claim
traces to a fact-pack item. Component prefix `Grn`.

---

## PART A — the `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Green Stripe (Portrait of Madame Matisse / La Raie verte),
// Matisse, 1905, Statens Museum for Kunst (SMK), Copenhagen (inv. KMSr171).
// Authored through the art content pipeline. Chapter prose in
// art-section-reader.tsx NARRATIVES['green-stripe'] (Grn… prefix).
// LEGEND handled: NOT a "Rump bequest" — SMK BOUGHT it in 1936 at the
//   Tetzen-Lund estate sale, paid from the Rump fund (KMSr = Rump collection).
//   The 1905 Salon Room-VII scandal piece is Woman with a Hat, NOT this; dated
//   to autumn 1905 in Paris (after Collioure), not "painted at Collioure".
//   The 500-franc Salon purchase belongs to Woman with a Hat (Leo & Gertrude
//   Stein); The Green Stripe went to Michael & Sarah Stein via Druet, 1906.
//   The "punishment of Amélie" / troubled-marriage reading is interpretation
//   (Burgess 1910, Klein) — framed, never asserted.
// ─────────────────────────────────────────────────────────────
export const GREEN_STRIPE: ArtWorkContent = {
  id: 'green-stripe',
  name: 'The Green Stripe',
  shortName: 'The Green Stripe',
  year: 1905,
  artist: 'Henri Matisse',
  artistId: 'matisse',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 4 in × 1 ft 1 in',
  location: 'Statens Museum for Kunst, Copenhagen',
  acquired: 'Purchased 1936 at the Tetzen-Lund estate sale, by the Ingeniør J. Rump and Elisabeth Rump Fund',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Fauvism', index: 2, total: 9 },
  hook: 'A small portrait of his wife with a band of pure green straight down her face, where Matisse used color to do the work of light and shadow, so it stops describing the face and starts building it.',
  heroImage: ART_IMG.matisseGreenStripe,
  heroCredit: 'Matisse, The Green Stripe (Portrait of Madame Matisse), 1905 · Statens Museum for Kunst, Copenhagen',
  heroAspect: 0.8, // 32.5 × 40.5 cm → W/H ≈ 0.80 (portrait canvas)
  heroFit: 'contain', // the whole small portrait, never cropped
  rights: 'pd-us',
  stats: [
    { v: 'Autumn 1905', k: 'Painted' },
    { v: '1′4″ × 1′1″', k: 'Dimensions' },
    { v: 'SMK Copenhagen', k: 'Now at' },
  ],
  sections: [
    { id: 'collioure', eyebrow: 'Collioure & Paris · 1905', dateLabel: '1905', title: 'A breakthrough summer, and the autumn after', blurb: 'Matisse and Derain spend the summer at Collioure firing color off its leash. Most likely that autumn, back in Paris, he turns the new method on a portrait of his own wife, Amélie.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'Autumn 1905', title: 'A green stripe as the spine of a face', blurb: 'One structural idea: a vertical band of pure green runs down the center of the face, splitting it into a warm half and a cool half, and doing the job a shadow does — turning the form, giving volume — with no shading anywhere.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1 ft 4 in × 1 ft 1 in', title: 'How to see the stripe as structure', blurb: 'The green meridian, the two-tone face, the blue hair, the teal collar, and a background split warm-and-cool just like the head — a whole picture organized by color, on a canvas the size of a sheet of legal paper.', progress: 0.56 },
    { id: 'reception', eyebrow: 'The reception', dateLabel: '1905–1910', title: 'A mask the friends recoiled from', blurb: 'Part of the Fauve color uproar, and harder than its famous companion Woman with a Hat. A friend of the Steins called it a demented caricature; in 1910 a critic called it Matisse’s punishment of Amélie. Both are readings, not facts.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1906–today', title: 'The road to Copenhagen', blurb: 'Bought by the American collectors Michael and Sarah Stein through a Paris gallery in 1906, then across war-time Europe into a great Danish collection, and finally to SMK in 1936 — bought at an estate sale, paid for by the Rump fund.', progress: 0.96 },
  ],
  provenance: [
    { year: '1905–1906', who: 'Henri Matisse (the artist)', place: 'Paris', note: 'Painted in 1905, most likely that autumn back in Paris after the Collioure summer. Sold within months through the Paris dealer Galerie Druet.', price: null },
    { year: '1906–c.1914', who: 'Michael and Sarah Stein', place: 'Paris', note: 'The American collectors (Michael was Gertrude and Leo Stein’s eldest brother) bought it through Galerie Druet, in the spring of 1906. The Steins were the avant-garde’s key American patrons; the portrait hung in their Paris flat. (Keep distinct from Leo and Gertrude, who bought Woman with a Hat for 500 francs off the Salon wall.)', price: null },
    { year: 'c.1914–1919', who: 'Stored in Germany (the Moll circle, Berlin)', place: 'Berlin', note: 'With the outbreak of the First World War the painting was left in Germany; sale negotiations in 1917–18 led to a temporary seizure by the dealer Fritz Gurlitt before it returned to Paris around 1919. (The German-storage years are the least documented link in the chain.)', price: null },
    { year: 'c.1920–1936', who: 'Christian Tetzen-Lund', place: 'Copenhagen', note: 'The Danish grain merchant and major collector of French modernism brought it to Copenhagen around 1920. He dispersed most of his collection in the 1920s but kept this portrait until his death in 1936.', price: null },
    { year: '1936–today', who: 'Statens Museum for Kunst', place: 'Copenhagen', note: 'Purchased at the Tetzen-Lund estate auction in 1936, financed by the Ingeniør J. Rump and Elisabeth Rump Fund (the Rump fund). Inv. KMSr171 — the KMSr prefix marks the Rump collection. This was a fund-financed purchase, not part of Johannes Rump’s own 1928 gift. On permanent view.', price: 'estate-sale purchase', museum: true },
  ],
  figures: [
    { name: 'Henri Matisse', role: 'The painter', palette: ['#4a7a4a', '#8a4a7a', '#15110c'] },
    { name: 'Amélie Matisse', role: 'His wife · the sitter', palette: ['#3a7a5a', '#8a5a3a', '#14110a'] },
    { name: 'Michael & Sarah Stein', role: 'Bought it through Druet, 1906', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Christian Tetzen-Lund', role: 'Danish collector · owned it to 1936', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Johannes Rump', role: 'Namesake of the fund that bought it', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The green stripe down the nose and forehead', where: 'Dead center of the face, a vertical band running from the hairline, down the bridge of the nose, to the top lip', detail: 'This green band is the painting’s title and its whole structure. It splits the face into two halves and does the job a shadow would do in an ordinary portrait — turning the form, giving it volume — except there is no shading anywhere on the canvas, just a stripe of flat green standing in for the modelling (the gradual light-to-dark shading painters use to fake a round, solid form). It is the single clearest example in early modern art of color taking over a job that drawing and tonal shading used to own.' },
    { label: 'The two-tone face: a warm half and a cool half', where: 'Either side of the green stripe — the side carrying the orange-and-red chin and ear reads as the lit, warm half; the other side is a cooler yellow-ochre', detail: 'One side of the face is keyed warm, pink with orange and red worked along the chin and the ear, reading as the side in direct light. The other side is a cooler yellow-ochre, reading as half-light. There is no gradual blend between them; the green stripe is the only seam. Light and shadow have been translated entirely into two flat temperatures of color, side by side, with the stripe as the hinge.' },
    { label: 'The background split warm and cool', where: 'The flat field behind the head, divided into a warm zone on one side and a cool zone on the other', detail: 'The background is not a single backdrop but is divided like the face: pink and orange on one side, teal-green on the other. Matisse carries the warm-and-cool split of the head out into the whole picture, so the room behind her echoes the structure of her face. Color is organizing the entire surface, not just describing a wall — there is nothing behind her to describe at all.' },
    { label: 'The hair, brows and eyes in deep blue', where: 'The hair piled up top, plus the eyebrows and the eyes', detail: 'Hair, brows and eyes are all a deep blue, a color no hair is, set against the green stripe and the warm flesh. It is the clearest tell that Matisse is choosing colors for how they ring against their neighbors, not for what the thing actually looks like. The blue cools and anchors the top of the head against the heat of the cheeks.' },
    { label: 'The high collar in teal', where: 'At the base of the portrait, the neckline of her blouse or dress', detail: 'She wears an orange-and-pink blouse or dress closed with a teal (blue-green) neckline — the same blue-green family as the green stripe and the cool side of the background, tying the bottom of the picture back to its top. And note what is not here: no hat. The hat belongs to the other 1905 portrait of Amélie, Woman with a Hat.' },
    { label: 'The brushwork: flat blocks, not blended modelling', where: 'Anywhere across the face and background — the broad areas of unbroken color', detail: 'The paint is laid in firm, flat sections of pure unmixed color, each one defining a feature or a zone, with hard edges between them rather than soft, blended transitions. This is closer to the flat color-areas of Gauguin and Van Gogh than to Impressionism’s flicker, and it is why the head reads as a built construction — almost a mask — rather than a soft, rounded, lifelike face.' },
  ],
  lineage: {
    parents: [ { label: 'Fauvism', mode: 'art' }, { label: 'Van Gogh', mode: 'art' }, { label: 'Gauguin', mode: 'art' } ],
    children: [ { label: 'Color cut loose from description', mode: 'art' }, { label: 'German Expressionism', mode: 'art' }, { label: 'Matisse alone', mode: 'art' } ],
  },
}
```

---

## PART B — the 5 section React components (`Grn` prefix, absinthe format)

```tsx
// ─────────────────────────────────────────────────────────────
// The Green Stripe (Matisse, 1905) — the five chapters
// ─────────────────────────────────────────────────────────────
function GrnCollioure({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Collioure · summer 1905" title="The summer color slipped its leash" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the summer of <strong>1905</strong>, <strong>Henri Matisse</strong> (the painter who would lead the movement called Fauvism) took his family south to <strong>Collioure</strong> &mdash; a small fishing port on the French Mediterranean coast, almost at the Spanish border &mdash; and spent the season painting beside a younger painter named <strong>André Derain</strong>. What the two of them did there is the subject of the movement read, so we will be brief: they pushed color off its leash. Pigment straight from the tube, bare canvas left showing between the strokes, and above all color chosen for the feeling it gave rather than the thing it described &mdash; a pink boat, a turquoise hillside, a road run orange because the picture wanted it orange. This is where <strong>Fauvism</strong> &mdash; from <em>les fauves</em>, &ldquo;the wild beasts,&rdquo; an insult a hostile critic was about to coin &mdash; is actually made.
      </p>
      <p style={proseStyle}>
        Hold one fact lightly, because the popular books muddle it: <em>The Green Stripe</em> was most likely <strong>not</strong> painted at Collioure. The Statens Museum for Kunst in Copenhagen, which owns it, dates it to <strong>the autumn of 1905</strong>, after Matisse had returned to <strong>Paris</strong>. So picture the sequence. A summer on the coast inventing a method out of harbors and hillsides. Then the trip home. Then, back in the Paris studio, the painter turns that brand-new, sunstruck way of using color away from boats and rocks and onto the one face he knew best in the world &mdash; his wife&rsquo;s.
      </p>

      <SectionHeader accent={accent} label="The sitter" title="Amélie, who was not a passive prop" />
      <p style={proseStyle}>
        The face is <strong>Amélie Matisse</strong>, born Amélie Noellie Parayre, whom Matisse had married in 1898. It is worth saying plainly who she was, because the picture is going to do something a little merciless to her and the temptation is to read her as a victim of it. She was not a passive prop. Before the marriage she had run her own hat shop in Paris. For some four decades she was Matisse&rsquo;s business manager, his household manager, his most frequent model, and his fiercest advocate &mdash; the person who kept the enterprise of being Matisse afloat in the years when almost nobody was buying. She was, in short, the most-painted face of early Matisse and a full partner in his career, and you should keep both of those facts in your head while you look at what he did to her here.
      </p>

      <SectionHeader accent={accent} label="The Salon, that same autumn" title="The scandal next door" />
      <p style={proseStyle}>
        That same autumn, the <strong>1905 Salon d&rsquo;Automne</strong> &mdash; one of the big annual juried art exhibitions in Paris, this one founded to give newer painting a wall &mdash; opened at the Grand Palais and put Matisse&rsquo;s Collioure canvases in a room the critic <strong>Louis Vauxcelles</strong> mocked as a cage of wild beasts. That is the show that gave the movement its name. But the picture at the center of that scandal, the one of Amélie that the public recoiled from, was a different portrait: <em>Woman with a Hat</em>, her face stroked in green and violet and orange, which Matisse&rsquo;s American patrons <strong>Leo and Gertrude Stein</strong> bought off the wall for 500 francs. <em>The Green Stripe</em> is its quieter, harder, more intimate companion &mdash; same wife, same year, same idea taken further. It belongs to that moment, in dialogue with it. It just was not the painting on the wall that caused the uproar. Keep the two straight; almost everyone gets them tangled.
      </p>
    </article>
  )
}

function GrnMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="One idea" title="A green stripe down the middle of a face" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he whole picture turns on a single structural decision, and you can state it in one sentence: a <strong>vertical band of pure green runs down the center of the face</strong>, from the hairline, down the bridge of the nose, to the top lip. That is the title &mdash; <em>The Green Stripe</em>, in French <em>La Raie verte</em> &mdash; and it is also, literally, the skeleton the rest of the painting hangs on. Everything else in the picture is arranged around that stripe.
      </p>
      <p style={proseStyle}>
        To see why it matters, you have to know the job it is quietly doing. In a normal portrait, a painter gives a face its roundness and weight through <strong>modelling</strong> &mdash; the gradual shading from light into shadow, lit cheek easing into shaded jaw, that fools the eye into reading a flat patch of paint as a solid, three-dimensional head. It is the oldest trick in Western painting. Matisse throws it out. There is no gradual shading anywhere on this canvas. Instead, the green stripe does the modelling&rsquo;s work: it marks the turn of the form, the ridge of the nose where a face catches and loses the light, and it splits the head into a <strong>warm half and a cool half</strong> the way light and shadow would split a real face. Color is doing the structure that shading used to do. The stripe is not a green shadow that was really there on Amélie&rsquo;s nose &mdash; nobody&rsquo;s nose is green &mdash; it is color standing in for the whole apparatus of light and modelling.
      </p>

      <SectionHeader accent={accent} label="The two halves" title="Warm light, cool shadow, no blend" />
      <p style={proseStyle}>
        Look at the two halves the stripe creates. One side of the face is keyed <strong>warm</strong> &mdash; pink, with orange and red worked along the chin and the ear &mdash; and reads as the side in direct light. The other side is a cooler <strong>yellow-ochre</strong>, and reads as half-light, the side turned away. In an ordinary portrait those two would melt into each other across the curve of the face. Here they do not melt at all. They sit side by side as two flat temperatures of color, and the only seam between them is the green stripe. Light and shadow have been translated, completely, into two patches of color with a green line down the join. That is the entire engine of the picture.
      </p>

      <SectionHeader accent={accent} label="The method" title="Collioure, applied to a head" />
      <p style={proseStyle}>
        The technique is the Collioure method turned on a portrait. The paint is laid in firm, flat <strong>blocks</strong> of pure, unmixed, deliberately arbitrary color &mdash; each block defining a feature or a zone &mdash; rather than blended into the soft, broken light the Impressionists chased. It is much closer to the flat saturated color-areas of <strong>Gauguin</strong> and <strong>Van Gogh</strong> (the two painters whose example stands behind all of Fauvism) than to anything Impressionist. Matisse has stepped fully past painting the flicker of real light. He is building a head out of slabs of color the way you might build a small stained-glass window: piece against piece, each one chosen for how it sounds against its neighbor.
      </p>
      <p style={proseStyle}>
        And this, more than any other single picture, is the textbook demonstration of the thing Fauvism is famous for &mdash; color cut loose from description. A harbor painted in colors it does not own is striking. A living human face, split top to bottom by a stripe of green that no face has ever worn, is unforgettable. It is the clearest, most legible proof that color had quit its old job of telling you what things look like and taken up a new one: building the picture.
      </p>
    </article>
  )
}

function GrnLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A face you could carry under one arm" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the scale, because it is genuinely surprising. The most famous green stripe in modern art sits on a tiny canvas: about <strong>sixteen inches tall by thirteen wide</strong>, roughly the size of a sheet of legal paper. You could carry it under one arm. There is no grand machine here, no wall-filling statement; it is a small, intense, portrait-shaped picture, taller than it is wide, and all of its force is packed into that small surface. Hold the size in mind as you look, because part of the shock is how much disruption Matisse gets out of so little real estate.
      </p>
      <p style={proseStyle}>
        Now let your eye go where the picture sends it, which is straight down the middle. The first thing it hits is <strong>the green stripe</strong> &mdash; a vertical band running from the hairline, down the ridge of the nose, to the top lip. Do not read it as decoration laid over the face. Read it as the <em>spine</em> of the face. Everything to the left of it is one country and everything to the right of it is another, and the stripe is the border between them. Once you have seen it that way &mdash; as structure, not as a green smear &mdash; the whole picture clicks into place, because the entire canvas is organized around it.
      </p>

      <SectionHeader accent={accent} label="The two halves" title="A warm country and a cool one" />
      <p style={proseStyle}>
        Travel across that border. On one side of the stripe the face is <strong>warm</strong> &mdash; flushed pink, with hotter notes of orange and red along the chin and the ear &mdash; the side that reads as catching the light. Cross the green seam and the face goes <strong>cool</strong>: a flat, dry <strong>yellow-ochre</strong>, the side in half-shadow. These are not blended. There is no transition. If you covered the stripe with your thumb the two halves would simply collide, two unrelated patches of color stuck against each other. The green is what makes the collision read as a face turning in light instead of a mistake. That is the thing to actually see: the stripe is not describing a feature, it is performing the join between light and shadow, doing in pure color what a lifetime of painters did in graduated grays.
      </p>

      <SectionHeader accent={accent} label="The blue and the teal" title="Colors chosen for their neighbors" />
      <p style={proseStyle}>
        Now the smaller shocks, which all confirm the same logic. The <strong>hair, the eyebrows, and the eyes</strong> are a deep <strong>blue</strong> &mdash; a color no hair is &mdash; set hard against the green stripe and the warm flesh below. It is the clearest single tell that Matisse is choosing every color for how it rings against the ones beside it, not for what the object actually is; the blue cools and weights the top of the head against the heat in the cheeks. Drop to the bottom of the picture and you reach the <strong>collar</strong>: she wears an orange-and-pink blouse closed with a <strong>teal</strong> (blue-green) neckline &mdash; the same blue-green family as the stripe and the cool side of the room, rhyming the bottom of the picture with its top. (And note what is absent: there is no hat. The hat is the <em>other</em> 1905 portrait of Amélie.)
      </p>

      <SectionHeader accent={accent} label="The background" title="The room repeats the face" />
      <p style={proseStyle}>
        Then step back and take in the <strong>background</strong>, and watch it do the most telling thing in the whole picture. It is not a single backdrop. It is <strong>split</strong>, exactly the way the face is split: pink and orange on one side, teal-green on the other. The warm-and-cool division of her head is carried straight out into the room behind her, so the wall echoes the structure of the face. There is nothing back there to describe &mdash; no furniture, no window, no place &mdash; only color, organizing the surface. The face sets up a warm side and a cool side, and the room obediently answers in the same two temperatures. The whole little canvas, edge to edge, is governed by one idea.
      </p>
      <p style={proseStyle}>
        Pull back one last time and feel the total effect. It is intense, flat, and frankly <strong>mask-like</strong> &mdash; almost nonhuman. There is no soft, rounded, breathing likeness here, no flattery, barely a personality. And yet it is unmistakably <em>alive</em>, and the life does not come from resemblance. It comes from the purity of the colors and the tension between them &mdash; the green against the pink, the blue against the ochre, the warm half straining against the cool. This is the picture&rsquo;s whole argument, made in oil paint and nothing else: that a face can be built entirely out of color set against color, and that the result can be more arresting than any careful likeness. You read it without a word of caption. You just have to let the stripe be the spine.
      </p>
    </article>
  )
}

function GrnReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1905–1906" title="The wild color, and a face that would not flatter" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Fauve color was attacked, that autumn and after, as outrageous and unnatural &mdash; the whole point of the &ldquo;wild beasts&rdquo; insult. But <em>The Green Stripe</em> carried an extra offense beyond the color, and it unsettled even people on Matisse&rsquo;s side. It is a portrait of a real, living woman that makes no attempt whatsoever to flatter her, or even to be warm about her. The mask-like flatness we have been looking at &mdash; the refusal of likeness, the green stripe down the nose &mdash; reads, to a viewer expecting a portrait, as something close to an assault on the sitter. A friend of the Steins, the American collectors who would soon own it, reportedly called the picture <strong>&ldquo;a demented caricature of a portrait.&rdquo;</strong>
      </p>

      <SectionHeader accent={accent} label="1910 · the &ldquo;punishment&rdquo; reading" title="A reading, not a fact" />
      <p style={proseStyle}>
        Then, in <strong>1910</strong>, the American critic <strong>Gelett Burgess</strong> reached for the most loaded reading of all. He wrote that <em>The Green Stripe</em> was Matisse&rsquo;s <strong>&ldquo;punishment&rdquo;</strong> of Amélie &mdash; that the painter had made the viewer &ldquo;see in her a strange and terrible aspect,&rdquo; as if the portrait were an act of marital revenge dressed up as art. It is a vivid line, and it has clung to the picture ever since. Treat it as exactly what it is: <strong>one 1910 critic&rsquo;s interpretation</strong>, not anything Matisse said or recorded. Much later, the art historian <strong>John Klein</strong> <em>suggested</em> that strain in the marriage might lie behind the portrait&rsquo;s cold, impersonal, mask-like character. That too is a suggestion, carefully hedged in the scholarship, and it is worth flagging plainly: there is no documented basis for reading this canvas as a record of a failing marriage. The phrase &ldquo;the painting shows their troubled marriage&rdquo; is something people say; it is not something we know.
      </p>
      <p style={proseStyle}>
        The reading that <em>is</em> documented is the artistic one, and it is colder in a different way. In these portraits Amélie was, as far as the painting&rsquo;s logic is concerned, simply a model &mdash; a face to hang the color experiment on. Matisse put the idea ahead of the person; the green stripe matters more, on this canvas, than the woman&rsquo;s mood. That is not cruelty so much as a painter following a discovery wherever it leads, even straight down his wife&rsquo;s nose.
      </p>

      <SectionHeader accent={accent} label="The record on Amélie" title="Not the long-suffering wife" />
      <p style={proseStyle}>
        And because the &ldquo;punishment&rdquo; story makes it so easy to flatten Amélie into a long-suffering wife who got a green stripe for her trouble, it is worth ending the chapter with the rest of her. She was, for some four decades, Matisse&rsquo;s business manager, household manager, model and chief advocate &mdash; the engine that kept his career running through the lean years &mdash; and she had run her own Paris hat shop before they married. She sat for this picture; she was not done to by it. Whatever a critic in 1910 decided he could see in her face, the woman behind the face was a full partner in the enterprise that made Matisse possible.
      </p>
    </article>
  )
}

function GrnAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1906" title="The other Steins, and the other transaction" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the picture&rsquo;s life as an object &mdash; its <strong>provenance</strong>, the documented chain of who owned it from the painter&rsquo;s hand to where it hangs now &mdash; and the first step is the one most often confused. <em>The Green Stripe</em> was <strong>not</strong> the painting the Steins bought off the Salon wall for 500 francs; that was <em>Woman with a Hat</em>, and the buyers were <strong>Leo and Gertrude Stein</strong>. <em>The Green Stripe</em> went to a different pair of Steins entirely &mdash; <strong>Michael and Sarah Stein</strong>, Michael being Leo and Gertrude&rsquo;s eldest brother &mdash; and it came to them not off a Salon wall but through a Paris gallery, <strong>Galerie Druet</strong>, in the spring of <strong>1906</strong>. The Michael Steins were among the most important American patrons of the new painting, and the portrait hung in their Paris flat. Two Stein households, two Matisse portraits of the same wife, two separate purchases &mdash; keep them apart and the rest of the story stays clear.
      </p>

      <SectionHeader accent={accent} label="Across war-time Europe" title="Germany, then Copenhagen" />
      <p style={proseStyle}>
        From the Steins the picture made an unsettled journey across war-time Europe, and this is the least-documented stretch of its life, so we will keep it to what is reasonably held. With the outbreak of the First World War it ended up <strong>stored in Germany</strong>; sale negotiations in 1917&ndash;18 led to a temporary seizure by a German dealer before it found its way back to <strong>Paris</strong> around <strong>1919</strong>. Then it went north. Around <strong>1920</strong> the Danish grain merchant and collector <strong>Christian Tetzen-Lund</strong> &mdash; one of the serious buyers of French modern painting in Copenhagen &mdash; acquired it. He sold off most of his collection over the 1920s, but he kept this small portrait. He held it until his death in <strong>1936</strong>.
      </p>

      <SectionHeader accent={accent} label="1936 · SMK" title="A purchase, not a bequest" />
      <p style={proseStyle}>
        And here we must correct the story you will most often hear, because it is wrong in a specific and tidy way. <em>The Green Stripe</em> did <strong>not</strong> come to the Statens Museum for Kunst &mdash; SMK, the National Gallery of Denmark &mdash; as a gift or bequest. When Tetzen-Lund died in 1936, his collection went to auction, and SMK <strong>bought</strong> the painting at that estate sale. The money came from the <strong>Ingeniør J. Rump and Elisabeth Rump Fund</strong> &mdash; the Rump fund &mdash; which is why the painting&rsquo;s inventory number carries the prefix <strong>KMSr</strong> (it is KMSr171), the &ldquo;r&rdquo; standing for the Rump collection.
      </p>
      <p style={proseStyle}>
        The confusion is understandable, because there really was a great Danish collector named <strong>Johannes Rump</strong>, and his roughly one-hundred-work donation in <strong>1928</strong> is the spine of SMK&rsquo;s whole collection of French modernism. So the museum&rsquo;s French rooms are, broadly, the house that Rump built. But <em>this</em> picture is not part of Rump&rsquo;s own gift &mdash; he never owned it. It entered the museum in 1936 as a <strong>fund-financed purchase</strong> from someone else&rsquo;s estate, paid for with money from the foundation that bears Rump&rsquo;s name. A purchase, not a bequest. The distinction is small and the picture hangs in the same rooms either way, but it is the kind of thing this pipeline exists to get right.
      </p>
      <p style={proseStyle}>
        It is there still, on permanent view, one of SMK&rsquo;s signature works of French modernism. The museum&rsquo;s chief curator, <strong>Dorthe Aagesen</strong>, has put its quality plainly: &ldquo;Every brush stroke is very deliberately placed, and the painting is a good example of how you can experiment with the portrait format.&rdquo; Which is, in the end, the whole story of the green stripe &mdash; a deliberately placed band of color, in a small experiment on a portrait, that turned out to be one of the most legible breaks in the history of painting.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'green-stripe': { collioure: GrnCollioure, making: GrnMaking, looking: GrnLooking, reception: GrnReception, afterlife: GrnAfterlife },
```
