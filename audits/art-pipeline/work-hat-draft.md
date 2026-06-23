# DRAFT — WORK: Matisse, *Woman with a Hat (Femme au chapeau)*, 1905 (SFMOMA)

Authored from `audits/art-pipeline/work-hat-factpack.md` only. Voice matched to
`absinthe-narratives.tsx.txt`. Imperial dimensions only; no em-dashes in new prose.
Every fact-pack flag honored (green-stripe conflation, disputed price, "Black, of course"
as Purrmann's reported story, the Loubet legend dropped in favor of SFMOMA's documented
"urged him not to show it"). Five sections, unique `Hat…` prefix.

---

## PART A — the `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Woman with a Hat (Femme au chapeau), Matisse, 1905, SFMOMA (acc. 91.161).
// The card image + flagship WORK read for Fauvism. Authored through the art content
// pipeline. Chapter prose in art-section-reader.tsx NARRATIVES['hat'] (Hat… prefix).
// CRITICAL legend handling: the famous full vertical face-splitting green stripe is a
// DIFFERENT painting (The Green Stripe, SMK Copenhagen). THIS one has a green streak
// DOWN THE NOSE + a green smear on the forehead. Never write "the green stripe down
// her face" for Woman with a Hat. Price disputed (~500 fr; Gertrude said paid 400) —
// give the range, never one settled number. "Black, of course" = Purrmann's reported
// studio story, framed as such.
// heroImage = ART_IMG.matisseHat → born-verified Commons file Matisse-Woman-with-a-Hat.jpg
//   (full-res https://upload.wikimedia.org/wikipedia/commons/f/fb/Matisse-Woman-with-a-Hat.jpg,
//    load-checked 200 image/jpeg; the 960px thumb the key already serves is the inline copy).
// ─────────────────────────────────────────────────────────────
export const WOMAN_WITH_A_HAT: ArtWorkContent = {
  id: 'hat',
  name: 'Woman with a Hat',
  shortName: 'Woman with a Hat',
  year: 1905,
  artist: 'Henri Matisse',
  artistId: 'matisse',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 7 3/4 in × 1 ft 11 1/2 in',
  location: 'San Francisco Museum of Modern Art',
  acquired: 'Bequest of Elise S. Haas, 1991',
  accent: ART_ACCENTS.rust, // copied from FAUVISM
  chain: { name: 'Works of Fauvism', index: 3, total: 9 },
  hook: 'A small portrait of the painter’s wife, her face built of green and mauve, that detonated the first modern-art scandal, and was bought by the two Americans who first called it the nastiest smear of paint they had ever seen.',
  heroImage: ART_IMG.matisseHat,
  heroCredit: 'Matisse, Woman with a Hat, 1905 · San Francisco Museum of Modern Art',
  heroAspect: 0.74, // 80.65 × 59.69 cm → W/H ≈ 0.74 (portrait)
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1905', k: 'Painted' },
    { v: '2′7¾″ × 1′11½″', k: 'Dimensions' },
    { v: 'SFMOMA', k: 'Now at' },
  ],
  sections: [
    { id: 'salon', eyebrow: 'Paris · 1905', dateLabel: 'Oct 1905', title: 'The rebel autumn show', blurb: 'Matisse is 35, broke, and not yet famous. The young Salon d’Automne, the alternative to the stuffy official show, is about to open at the Grand Palais, and he needs a sale.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '~Sept–Oct 1905', title: 'The woman who made hats, painted with one', blurb: 'Begun in September, finished in a rush. The sitter is his wife Amélie, a former milliner who once ran her own hat shop, painted in pure unmixed color with shadow turned to green and the dress’s real black thrown away.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 7¾ in × 1 ft 11½ in', title: 'A face no face has ever had', blurb: 'A conventional society portrait, gloved hand, fan, an enormous flowered hat, painted in colors that have nothing to do with how she looked: green down the nose, mauve in the cheeks, a tower of orange and blue overhead.', progress: 0.56 },
    { id: 'scandal', eyebrow: 'The reception', dateLabel: 'Oct 1905', title: 'The cage of wild beasts', blurb: 'Hung in Room VII among Derain and Vlaminck and a prim marble bust, the picture is called crude, mad, infantile. A critic christens the room with the word that names a whole movement.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1905–today', title: 'From nastiest smear to icon', blurb: 'Bought straight off the Salon wall by Leo and Gertrude Stein, who first recoiled then converted, and carried by the Stein family across an ocean to Elise Haas and SFMOMA. The picture that freed color from description.', progress: 0.96 },
  ],
  provenance: [
    { year: '1905', who: 'Henri Matisse (the artist)', place: 'Paris', note: 'Shown at the Salon d’Automne, October–November 1905, in the room a critic dubbed the cage of wild beasts. Sold straight out of the exhibition.', price: null },
    { year: '1905', who: 'Leo & Gertrude Stein', place: 'Paris', note: 'The American expatriate siblings bought it out of the Salon, their first major modern purchase and the start of the Stein collection. Leo’s first reaction was recoil, then he went back for weeks and bought it. Price disputed: around 500 francs, though Gertrude later wrote they talked him down to 400, while the Matisse family says he held out for the full 500. Roughly $100 at the time.', price: '~400–500 francs (disputed)' },
    { year: '~1915', who: 'Michael & Sarah Stein', place: 'Paris', note: 'After Leo and Gertrude divided the collection around 1913–14, the painting passed to their brother and sister-in-law, Michael and Sarah Stein, devoted patrons of Matisse.', price: null },
    { year: '1935', who: 'Michael & Sarah Stein', place: 'San Francisco Bay Area', note: 'The Michael Steins carried the painting from France to the San Francisco Bay Area in 1935.', price: null },
    { year: '1948', who: 'Elise S. & Walter A. Haas', place: 'San Francisco', note: 'Elise Haas, a San Francisco–born grandniece of Levi Strauss, and her husband Walter bought it, with several other Matisses, from the Stein holdings.', price: 'purchase' },
    { year: '1991–today', who: 'San Francisco Museum of Modern Art', place: 'San Francisco', note: 'Bequest of Elise S. Haas (d. 1990; entered the collection 1991). Accession 91.161. On permanent view.', price: 'bequest', museum: true },
  ],
  figures: [
    { name: 'Henri Matisse', role: 'The painter', palette: ['#4a7a4a', '#8a4a2a', '#15110c'] },
    { name: 'Amélie Matisse', role: 'The sitter · his wife, a former milliner', palette: ['#7a3a52', '#3a6a5a', '#140e10'] },
    { name: 'Leo Stein', role: 'The buyer who first recoiled', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Gertrude Stein', role: 'The buyer · the writer', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'Louis Vauxcelles', role: 'The critic who named the wild beasts', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
  ],
  annotations: [
    { label: 'The green that runs down her nose', where: 'Center of the face, a vertical streak along the bridge of the nose, with a pale blob at the tip', detail: 'A long green streak defines the nose, capped by a little blot of pale yellow at the tip. This is the painting’s clearest move into arbitrary color, green where a nose has no business being green. Note carefully what it is and is not: it is a streak running down the nose, not the famous full vertical stripe that splits the whole face into a warm half and a cool half. That stripe belongs to a different 1905 portrait of the same sitter, The Green Stripe, in Copenhagen. People mix the two up constantly. They are sisters, not the same picture.' },
    { label: 'The forehead smear, a shadow painted green', where: 'Across the forehead, just under the brim of the hat', detail: 'A horizontal green smear sits on the forehead, most likely the shadow thrown by the wide hat brim. Except a shadow should be a darker, cooler version of the flesh under it, and Matisse painted it green instead. Color is doing the job of shadow without obeying any of the rules of shadow. Once you see it, the whole logic of the picture opens up: every patch of color is chosen for effect, not for accuracy.' },
    { label: 'A face built from colors no face has', where: 'The cheeks, lips and chin', detail: 'The face is assembled from streaks of green and blots of gray, mauve and yellow, with almost no smooth rounding. The upper lip is tomato red, the lower lip a slash of peachy pink, a short strip of light green sits under it, and the chin is another slash of pink. There is barely any modeling, the gentle dark-to-light shading that makes a painted face look like a rounded solid. The face reads as a patchwork of pure color laid flat, which is exactly the thing 1905 viewers could not forgive.' },
    { label: 'The hat, a tower of pure color', where: 'The top half of the canvas, above her forehead', detail: 'A wide blue brim sits straight across, and above it rise exuberant puffs of orange, green and blue swirling around one another, with a small patch of her red hair peeking out beneath. It is the most riotous passage in the picture, which is its own small joke, since the sitter, Amélie, had herself made and sold hats for a living before she married the painter.' },
    { label: 'The glove and the fan, bourgeois props painted wild', where: 'Lower portion, her raised arm and the fan it holds', detail: 'She wears a long green glove speckled with pink, like a row of embroidery, and holds a fan of thick white and peach splashes flecked with violet and green. Gloves and a fan are the standard accessories of a respectable society portrait, which is exactly why painting them in clashing color was so provocative. The subject is utterly conventional. Only the paint is a riot.' },
    { label: 'The background that won’t sit still', where: 'The space around and behind the figure', detail: 'The background is not a described room but broad, loose areas of clashing color, patches of green, violet and orange that refuse to recede into depth. The figure and her surroundings sit on one bright, flat, restless surface instead of in a window-like space, and bare or thinly painted canvas shows through in places, part of the unfinished look that scandalized the Salon. There is nowhere for the eye to rest.' },
  ],
  lineage: {
    parents: [ { label: 'Post-Impressionism', mode: 'art' }, { label: 'Pointillism', mode: 'art' }, { label: 'The summer at Collioure', mode: 'civ' } ],
    children: [ { label: 'Fauvism', mode: 'art' }, { label: 'German Expressionism', mode: 'art' }, { label: 'Modern color painting', mode: 'art' } ],
  },
}

// REGISTRY (coordinator splices into ART_WORK_CONTENT):
//   hat: WOMAN_WITH_A_HAT,
```

---

## PART B — the 5 section React components (`Hat…` prefix)

```tsx
// ─────────────────────────────────────────────────────────────
// Woman with a Hat (Matisse, 1905) — the five chapters
// ─────────────────────────────────────────────────────────────
function HatSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1905" title="The rebel autumn show" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the autumn of <strong>1905</strong>, Henri Matisse was thirty-five years old, broke, the father of three, and not remotely famous. He had been at painting for more than a decade with very little to show for it. He had spent <strong>1904</strong> trying on the dotted technique of the painter <strong>Paul Signac</strong>, covering a canvas in tiny separate touches of pure color, then spent the summer of <strong>1905</strong> in the small Mediterranean port of <strong>Collioure</strong> (pronounced &ldquo;koll-YOOR&rdquo;), near the Spanish border, pushing color further off the leash than he or anyone else had dared. He came back to Paris with a head full of impossible color and an empty bank account. He needed, very badly, to sell something.
      </p>
      <p style={proseStyle}>
        The place to do it was the <strong>Salon</strong>. You should know what that word meant, because in France a painter&rsquo;s whole career ran through it. A Salon was the big public exhibition where paintings were hung for the city to come and judge, and being accepted into one (or rejected from it) could make or break you. For most of the nineteenth century there was one that mattered, the official state Salon, run by a conservative jury that liked its paintings smooth, finished, and well-behaved. By 1905 a rebel alternative had appeared. The <strong>Salon d&rsquo;Automne</strong> (pronounced &ldquo;sa-LOHN doh-TUN,&rdquo; French for &ldquo;the Autumn Salon&rdquo;) had been founded just two years earlier, in 1903, as a show by and for the painters the official Salon would never let in. It was juried, but the jury was sympathetic. It was independent. And it was held in the grandest room in Paris.
      </p>
      <p style={proseStyle}>
        That room was the <strong>Grand Palais</strong>, the enormous glass-and-iron exhibition hall built for the 1900 World&rsquo;s Fair, just off the Champs-Élysées. The 1905 edition of the Salon d&rsquo;Automne ran there from <strong>October into late November</strong>. This is where a painter who had no patron, no reputation, and no money could still, in theory, hang a picture on a wall where the whole art world would walk past it. Matisse decided to hang the picture we are about to look at, a portrait of his wife.
      </p>
      <p style={proseStyle}>
        It was not, by all accounts, an easy decision, and not everyone thought he should. According to the museum that owns the painting today, colleagues and even the Salon&rsquo;s own organizers <strong>urged Matisse not to show it</strong>, by one account &ldquo;for fear that he would really embarrass himself.&rdquo; (You will sometimes read a juicier version, that the President of France refused to inaugurate the show because of pictures like this one. That story floats around but does not rest on solid ground, so set it aside. The documented version is quieter and more telling: the people who knew him best looked at the picture and winced.) He showed it anyway. He had a sale to make, and nothing left to lose.
      </p>
    </article>
  )
}

function HatMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The sitter" title="The woman who made hats, painted with one" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he woman in the picture is <strong>Amélie Matisse</strong>, born Amélie Noélie Parayre (1872&ndash;1958), the painter&rsquo;s wife. They had married in 1898, and for the rest of his early, hungry years she was his household manager, his business partner, and his model. There is a small, perfect irony folded into this particular painting, and it is worth slowing down to land it. Before she married Matisse, Amélie had worked as a <strong>milliner</strong> (a maker and seller of women&rsquo;s hats), first in her aunt&rsquo;s Paris boutique and then in <strong>her own hat shop</strong> on the rue de Châteaudun, which she ran from 1899 to 1902. So the woman in the most famous painting ever titled <em>Woman with a Hat</em> had herself made and sold hats for a living. That is not invented for the sake of a good line. It is in the record.
      </p>
      <p style={proseStyle}>
        Matisse began the portrait around <strong>September 1905</strong> and finished it in a rush, just before the Salon opened. He had been at work on a large, ambitious landscape; by the museum&rsquo;s account he <strong>set that project aside</strong> to make this instead, a smaller, faster, riskier thing. It is not a grand machine of a painting. It is an ordinary easel portrait, a little over two and a half feet tall, the kind of size that hangs in a parlor. The scandal it caused had nothing to do with its scale. It had everything to do with its color.
      </p>
      <p style={proseStyle}>
        Here is the technique, plainly. Matisse used <strong>pure, unmixed color</strong>, laid on in loose, visible strokes, leaving whole areas looking sketchy and half-done. And, crucially, he used what is called <strong>arbitrary color</strong>, color chosen for the effect he wanted rather than for what the eye actually saw. The opposite of arbitrary color is <em>local color</em>, the real color a thing has in daylight (grass is green, a brick is red, a cheek is pinkish). For four centuries European painters had treated local color as the floor under their feet. You could light it dramatically, you could push it warm or cool, but a face was still painted in the colors a face has. Matisse kicked that floor out. He painted Amélie&rsquo;s face in greens and mauves and yellows that no face has ever worn, not to record her, but to make the picture do something.
      </p>
      <p style={proseStyle}>
        There is a famous story about exactly this, and it deserves to be told the way it actually comes down to us, as a story. As <strong>Hans Purrmann</strong>, a German painter in Matisse&rsquo;s circle, later recalled it, studio colleagues looked at the riot of color in the picture and asked what color the dress and hat had really been. Matisse, exasperated, is said to have snapped <strong>&ldquo;Black, of course&rdquo;</strong> (or &ldquo;Black, obviously&rdquo;), as if the question missed the entire point. It is a charming line and probably true, but it is a reported studio anecdote passed down by a colleague, not a thing anyone wrote down at the time, so hold it loosely. What it captures, though, is exactly right. The dress Amélie actually wore was a plain black one. The riot of color is pure invention. The painter was not telling you what she looked like. He was using her as the occasion for an argument about paint.
      </p>
    </article>
  )
}

function HatLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A perfectly ordinary portrait, on fire" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tep back and take in the picture whole before you walk into its details, because the first thing to understand is how <em>conventional</em> the bones of it are. This is a half-length portrait of a fashionable bourgeois woman, turned slightly, looking out at you. She wears a long glove. She holds a fan in her raised hand. On her head sits an enormous flowered hat. Every one of those things, the pose, the glove, the fan, the hat, is the standard furniture of a respectable society portrait, the kind a banker might commission of his wife. If you described the picture over the telephone, element by element, it would sound completely unremarkable. That ordinariness is the trap. The whole bomb of the picture is the gap between what is depicted (a perfectly conventional lady) and how it is painted (in colors from another planet). Hold both halves in your head at once, because the friction between them is the entire point.
      </p>
      <p style={proseStyle}>
        Now walk into the face, where the worst of the offense lives. Start at the nose. A <strong>long green streak runs straight down the bridge of it</strong>, finishing in a little blot of pale yellow at the tip. A nose is not green. Matisse painted this one green anyway. (A caution here, because this is the single most-confused fact about the painting: that nose streak is <strong>not</strong> the famous full vertical green stripe that splits a whole face into a warm half and a cool half. That stripe is in a <em>different</em> Matisse portrait of the same wife from the same year, called <em>The Green Stripe</em>, which lives in Copenhagen. People merge the two into one painting constantly. They are siblings, not twins. <em>Woman with a Hat</em> has a green <em>streak down the nose</em> and a green smear on the forehead, not the face-bisecting stripe.) Move up to the forehead and you find that smear, a <strong>horizontal swipe of green</strong> just under the hat brim. It is almost certainly meant to be the shadow the wide brim throws across her brow, except a shadow should be a darker, cooler flesh tone, and Matisse made it frank green. Color is doing the work of shadow while flatly refusing to behave like shadow.
      </p>
      <p style={proseStyle}>
        Read the rest of the face the same way and it falls apart into pure color. The cheeks and chin are assembled from <strong>streaks of green and blots of gray, mauve and yellow</strong>. The <strong>upper lip is tomato red</strong>; the lower lip is a <strong>slash of peachy pink</strong> with a short strip of light green tucked under it; the chin is another slash of pink. There is almost no smooth modeling, no gentle dark-to-light shading to round the face into a solid head. It reads instead as a patchwork of flat patches, a face built like a mosaic out of colors no face has ever had. This is what made 1905 viewers feel slightly ill. We are wired to read a human face very precisely, and Matisse fed our face-reading machinery a set of wrong signals on purpose.
      </p>
      <p style={proseStyle}>
        Lift your eye to the hat, which takes up the entire top of the canvas and is the most riotous passage in the picture. A <strong>wide blue brim</strong> sits straight across her brow, and above it rises a great mass of <strong>orange, green and blue puffs</strong>, swirling around one another like blown smoke, with a small patch of her <strong>red hair</strong> showing beneath. It is a tower of pure color stacked on her head. And it is, again, that small earned joke: the most extravagant hat in modern painting, sitting on the head of a woman who once made hats for a living.
      </p>
      <p style={proseStyle}>
        Drop back down to her hands and the props of respectability. She wears a <strong>long green glove speckled with pink</strong>, the pink flecks reading almost like embroidery, and her gloved hand holds a <strong>fan</strong>, painted as thick splashes of white and peach flecked with violet and green. A glove and a fan are exactly what a proper society sitter holds. Painting them in this clashing color is what turned a conventional commission into a provocation. The accessories say &ldquo;respectable lady.&rdquo; The paint says something else entirely.
      </p>
      <p style={proseStyle}>
        Finally, notice that there is nowhere for your eye to rest. The <strong>background is not a room</strong>. It is broad, loose areas of clashing color, patches of green and violet and orange that refuse to settle into the back of a space the way a painted wall normally would. The figure and her surroundings sit together on one bright, flat, restless surface, and in places you can see <strong>bare or thinly painted canvas</strong> showing through, part of the unfinished look that horrified the Salon. The usual deal a portrait offers (here is a person, standing in a believable space, lit by believable light) has been quietly torn up. What is left is a flat field of pure color with the shape of a fashionable woman pressed into it. That, in 1905, was the most radical thing in Paris.
      </p>
    </article>
  )
}

function HatScandal({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Grand Palais · Room VII" title="The cage of wild beasts" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        hen the Salon d&rsquo;Automne opened, <em>Woman with a Hat</em> did not hang alone. It hung in <strong>Room VII</strong>, a single gallery that had become, more or less by accident, the loudest room in the building. On its walls were Matisse and a loose band of like-minded painters, <strong>André Derain, Maurice de Vlaminck, Albert Marquet, Henri Manguin, Charles Camoin, Kees van Dongen</strong>, all of them working in the same key of raw, unmixed, untruthful color. Walk into Room VII and the wall hit you as a single blaze of clashing pigment. To a public raised on the smooth, brown-gravy finish of the official Salon, it looked less like an exhibition than an accident in a paint factory.
      </p>
      <p style={proseStyle}>
        And then there was the bust. Sitting in the middle of all that visual noise was a small, demure marble bust of a child, carved in a polite Renaissance manner by an unrelated sculptor named <strong>Albert Marque</strong>. The contrast, a prim classical sculpture marooned in a sea of wild color, was too good for a critic to pass up. The critic in question was <strong>Louis Vauxcelles</strong> (1870&ndash;1943; pronounced &ldquo;voh-SELL&rdquo;), writing in the newspaper <em>Gil Blas</em> on <strong>17 October 1905</strong>. Looking at the gentle marble surrounded by the savage canvases, he wrote a line that would name a movement: <strong>&ldquo;Donatello chez les fauves&rdquo;</strong>, &ldquo;Donatello among the wild beasts.&rdquo; (Donatello was a great Renaissance sculptor; the gentle bust stood in for him. <em>Les fauves</em> is French for &ldquo;the wild beasts.&rdquo;)
      </p>
      <p style={proseStyle}>
        The word stuck. The room became known as <strong>&ldquo;la cage aux fauves&rdquo;</strong>, the cage of wild beasts, and the painters in it became <strong>the Fauves</strong>, and their way of working became <strong>Fauvism</strong>. It is worth noticing that they never chose the name. It was an insult, coined by a hostile critic, and they wore it for the rest of art history because the insult was too vivid to shake. (Vauxcelles would do it again three years later, sneering at &ldquo;little cubes&rdquo; in a Braque show and accidentally naming Cubism too. He had a real talent for it.) Of all the canvases in that cage, <em>Woman with a Hat</em> was the single most notorious. It was the picture people stopped in front of, the one they argued about.
      </p>
      <p style={proseStyle}>
        The arguments were not kind. The public found the painting crude, mad, even infantile, the work of someone who either could not paint or was mocking the people who could. What undid them was precisely the thing we have been looking at: <strong>colors that did not correspond to anything they could see</strong>, smeared across a human face. A green nose, a mauve cheek, no shadow where shadow belonged. Viewers were, in the museum&rsquo;s flat summary, &ldquo;utterly shocked.&rdquo; This was not the gentle bafflement that had greeted the Impressionists a generation earlier. It was closer to insult, as if the painter had walked up to the idea of a respectable portrait and spat on it.
      </p>
      <p style={proseStyle}>
        One thing to be careful about, because the histories sometimes overreach. It is tempting to call this &ldquo;the first Fauve painting&rdquo; or to say it &ldquo;began Fauvism,&rdquo; and you should resist both. Fauvism was not born in this one canvas. It was worked out over the summer of 1905 at Collioure, across several painters, Matisse and Derain chief among them, and it was <em>named</em> here at the Salon by Vauxcelles&rsquo;s jibe. What <em>Woman with a Hat</em> truly was is the picture that became <strong>the face of the scandal</strong>, the single image the whole uproar gathered around. That is a large enough claim, and it has the advantage of being true.
      </p>
    </article>
  )
}

function HatAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The Steins" title="The nastiest smear of paint they had ever seen" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        nto this hostile room walked the two people who would change everything for the painting and for Matisse: <strong>Leo and Gertrude Stein</strong>, American brother and sister, expatriates living in Paris, about to become the avant-garde&rsquo;s first great patrons. Leo (1872&ndash;1947) was the family&rsquo;s connoisseur, the one with the eye and the opinions; Gertrude (1874&ndash;1946) was the writer, whose memoir would later become one of the famous accounts of these years. They saw <em>Woman with a Hat</em> hanging in the cage of wild beasts, and Leo&rsquo;s first reaction was not love. By his own description it was a thing <strong>&ldquo;brilliant and powerful, but the nastiest smear of paint I had ever seen.&rdquo;</strong>
      </p>
      <p style={proseStyle}>
        That is the detail worth dwelling on, because it is the whole story in miniature. The Steins did not buy the picture in a flash of taste. They <strong>recoiled</strong> from it first, then could not stop coming back. By the accounts that survive they returned to the Salon again and again over something like five weeks, standing in front of the thing they had called the nastiest paint they had ever seen, until the recoil curdled into conviction and they bought it. They bought it <strong>straight off the Salon wall</strong>, the first major modern picture they ever owned and the cornerstone of what became one of the most important private collections of modern art in the world.
      </p>
      <p style={proseStyle}>
        What they paid is genuinely unsettled, so here is the honest version rather than a tidy one. The headline figure is <strong>around 500 francs</strong> (roughly $100 at the time). But the accounts diverge. In her own memoir, <em>The Autobiography of Alice B. Toklas</em>, Gertrude wrote that the picture was listed at 500 and that Matisse <strong>accepted their offer of 400</strong>. The Matisse family told it the other way around: that the Steins offered 300 and Matisse <strong>held out for the full 500</strong>. Each party, you will notice, remembered the haggle in the way that flattered them. So the truthful thing to say is that it sold for somewhere in the neighborhood of 400 to 500 francs, and that the exact number depends on whose memory you trust.
      </p>
      <p style={proseStyle}>
        Whatever the figure, the sale mattered enormously. It put money in the pocket of a demoralized painter at the lowest moment of his career, and it <strong>launched the Steins as collectors of modern art</strong>. They would go on to buy Matisse and Picasso by the wall-full, and their Saturday-evening apartment became the room where the future of painting got introduced to itself. A single small portrait, jeered at by the public and called nasty by its own buyers, turned out to be the hinge of several careers at once.
      </p>
      <p style={proseStyle}>
        From there the painting traveled, and the journey is its own quiet story. Around 1913 or 1914 Leo and Gertrude divided their collection (Leo took the older pictures, Gertrude kept the Picassos), and <em>Woman with a Hat</em> passed to their brother and sister-in-law, <strong>Michael and Sarah Stein</strong>, who were the most devoted Matisse patrons in the family. In <strong>1935</strong> the Michael Steins carried the painting across the Atlantic to the <strong>San Francisco Bay Area</strong>. In <strong>1948</strong> it was bought, along with several other Matisses, by <strong>Elise S. Haas</strong>, a San Francisco–born collector who happened to be a grandniece of Levi Strauss, the blue-jeans manufacturer, and her husband Walter. And on Elise Haas&rsquo;s death the painting came at last to the <strong>San Francisco Museum of Modern Art</strong> as her <strong>1991 bequest</strong> (a <em>bequest</em> is a gift made through a will), accession number 91.161, where it hangs on permanent view.
      </p>
      <p style={proseStyle}>
        It is a strange arc to sit with. The picture that respectable Paris called crude and mad, that its own buyers first called the nastiest smear of paint they had ever seen, is now read as one of the founding documents of modern art, the canvas where <strong>color was finally freed from the job of describing things</strong>. After Matisse, a face could be green and a shadow could be any color the picture wanted, and no one had to apologize for it. Every painter who came after inherited that permission, whether they knew his name or not. Not bad for a hasty portrait of a former hat-maker, painted to make a sale.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  hat: { salon: HatSalon, making: HatMaking, looking: HatLooking, scandal: HatScandal, afterlife: HatAfterlife },
```

---

## Fact ledger (every concrete claim → fact-pack item)

| Claim in prose | Fact-pack source | Flag handling |
|---|---|---|
| Matisse 35, broke, father of three, 1905 | §1, §3 Ch1 | DOCUMENTED |
| 1904 Signac dots → summer 1905 Collioure | §3 Ch1 | DOCUMENTED |
| Salon d’Automne founded 1903, Grand Palais, Oct–Nov 1905 | §3 Ch1 | DOCUMENTED |
| Colleagues/organizers urged him not to show it ("embarrass himself") | §3 Ch2, [SFMOMA-art] | DOCUMENTED; Loubet legend DROPPED + hedged-away |
| Amélie Parayre 1872–1958, married 1898, milliner, own shop rue de Châteaudun 1899–1902 | §6, §0 | DOCUMENTED (the earned irony) |
| Begun ~Sept 1905, finished hastily; abandoned a large landscape | §3 Ch2, [SFMOMA-art] | DOCUMENTED |
| ~2.5 ft tall, ordinary easel portrait | §1 | DOCUMENTED (imperial) |
| Pure unmixed color, arbitrary vs local color | §3 Ch2, §8 | DOCUMENTED |
| "Black, of course" via Purrmann | §0, §3 Ch2 | LEGEND/REPORTED — framed "as Purrmann recalled it / is said to have snapped" |
| Green streak DOWN THE NOSE + yellow tip | §5.1 | DOCUMENTED; explicit non-conflation with The Green Stripe |
| The Green Stripe = different 1905 portrait, Copenhagen | §0, §7 | DISPUTED-conflation handled directly |
| Green forehead smear = shadow painted green | §5.2 | DOCUMENTED |
| Face: green/gray/mauve/yellow; tomato upper lip, pink lower lip + green strip | §5.3 | DOCUMENTED |
| Hat: blue brim, orange/green/blue puffs, red hair | §5.4 | DOCUMENTED |
| Green glove speckled pink; fan white/peach/violet/green | §5.5 | DOCUMENTED |
| Flat clashing background, bare canvas showing | §5.6 | DOCUMENTED |
| Room VII; Derain/Vlaminck/Marquet/Manguin/Camoin/van Dongen | §3 Ch4 | DOCUMENTED |
| Albert Marque marble bust | §0, §6 | DOCUMENTED |
| Vauxcelles "Donatello chez les fauves," Gil Blas, 17 Oct 1905 | §0, §3 Ch4 | DOCUMENTED |
| "la cage aux fauves" → Fauves → Fauvism, name never chosen | §0, §3 Ch4 | DOCUMENTED |
| Vauxcelles later named Cubism too | Cubism literature / Kahnweiler proof-run note | DOCUMENTED (terse aside) |
| Public called it crude/mad/infantile; "utterly shocked"; colors not matching reality | §3 Ch4, [SFMOMA-art] | DOCUMENTED |
| NOT "first Fauve painting" → "face of the scandal" | §0, §3 Ch5 | DISPUTED — hedged exactly as instructed |
| Leo Stein "nastiest smear of paint" (first impression, then conversion, ~5 weeks) | §0, §3 Ch5, [SFMOMA-icon] | DOCUMENTED, framed as recoil-then-convert |
| Price ~500 fr; Gertrude said paid 400; family said held for 500; ≈$100 | §0, §3 Ch5 | DISPUTED — range given, no single settled number |
| Sale steadied Matisse + launched Steins as collectors | §3 Ch5 | DOCUMENTED |
| Stein split ~1913–14 → Michael & Sarah Stein → Bay Area 1935 → Haas 1948 → SFMOMA bequest 1991, acc. 91.161 | §4 | DOCUMENTED (years flagged for gate-1 re-confirm in fact pack) |
| Elise Haas = grandniece of Levi Strauss | §4, [SFMOMA-exh] | DOCUMENTED |
| Big idea: color freed from description | §3 Ch5 | DOCUMENTED |

Open `[VERIFY]` for the coordinator at gate 1 (already flagged in fact pack §4): the
1915 Michael/Sarah hand-off, 1935 Bay Area arrival, and 1948 Haas purchase years against
SFMOMA's provenance record / *The Steins Collect* catalogue; the Stein-sibling split
written as "around 1913–14" per the pack.
