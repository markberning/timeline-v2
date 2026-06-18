# Post-Impressionism — WORK reads, Batch C draft

AUTHOR draft only. Built strictly from `postimp-works-c-factpack.md`. No live source files modified.
Three works: `vision-sermon`, `where-do-we-come-from`, `moulin-rouge`. `chain.index` is 1/2/3 within this batch;
`total:9`; the integrator renumbers against the full POST_IMP works chain.

NO em-dashes anywhere (in const or prose). Dimensions ft/in only. Accent = `ART_ACCENTS.green` (POST_IMP's accent).
Hero keys exist already: `ART_IMG.gauguinVision`, `ART_IMG.gauguinWhereDoWeComeFrom`, `ART_IMG.lautrecMoulinRouge`.

---

## 1. `vision-sermon` — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Vision after the Sermon (Gauguin, 1888). The breakthrough
// Synthetist / Cloisonnist picture. Authored through the art content
// pipeline; narrative under 'vision-sermon' (Vs… prefix).
// ─────────────────────────────────────────────────────────────
export const VISION_SERMON: ArtWorkContent = {
  id: 'vision-sermon',
  name: 'Vision after the Sermon',
  shortName: 'Vision after the Sermon',
  year: 1888,
  artist: 'Paul Gauguin',
  artistId: 'gauguin',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 4 in × 3 ft 0 in',
  location: 'Scottish National Gallery, Edinburgh',
  acquired: 'Purchased by the gallery, 1925',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 1, total: 9 },
  hook: 'Breton women come out of mass with their eyes shut, and the thing they pray about, Jacob wrestling the angel, appears on a field of flat, impossible red.',
  heroImage: ART_IMG.gauguinVision,
  heroCredit: 'Gauguin, Vision after the Sermon, 1888 · Scottish National Gallery, Edinburgh',
  heroAspect: 1.26, // 72.2 × 91 cm → W/H ≈ 1.26
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1888', k: 'Painted' },
    { v: '2′4″ × 3′0″', k: 'Dimensions' },
    { v: 'Edinburgh', k: 'Now at' },
  ],
  sections: [
    { id: 'pont-aven', eyebrow: 'Pont-Aven · 1888', dateLabel: '1888', title: 'A Breton village and a younger painter with theories', blurb: 'Summer in a Brittany artists’ colony, where Gauguin and the younger painter Émile Bernard argue Impressionism into the ground and a new method, Synthetism, comes out of it.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1888', title: 'Two worlds in one frame', blurb: 'Praying women in white coiffes in front, Jacob and the angel wrestling behind, a tree slicing the canvas in two, and a ground of pure flat red that is not a meadow but a vision.', progress: 0.34 },
    { id: 'reception', eyebrow: 'The first viewers', dateLabel: '1888', title: 'A letter to Van Gogh, a parish that said no', blurb: 'Gauguin sketches the picture for Van Gogh by post, and (by Émile Bernard’s later account) offers it to a Breton church, which refuses the gift.', progress: 0.58 },
    { id: 'cloisonnism', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'Painting the inside of a head', blurb: 'Flat color bounded by dark outline, stained-glass and cloisonné enamel made into oil paint, and a picture that puts imagination on the canvas as its own zone instead of describing the world.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1925–today', title: 'Edinburgh buys the heresy', blurb: 'Through private hands after Gauguin’s death, then bought by the Scottish National Gallery in 1925 while British taste still recoiled from Post-Impressionism. Now read as the first complete Synthetist picture.', progress: 0.96 },
  ],
  provenance: [
    { year: '1888', who: 'Paul Gauguin (the artist)', place: 'Pont-Aven, Brittany', note: 'Painted in the summer of 1888. Gauguin offered it as a gift to a local Breton parish church, which turned it down, so it stayed with him.', price: null },
    { year: '1888–1903', who: 'Paul Gauguin', place: 'France / the Pacific', note: 'Retained by the artist through his later years and his move to the Pacific; he died in the Marquesas in 1903.', price: null },
    { year: 'after 1903', who: 'Private hands (chain not fully documented)', place: 'Europe', note: 'Passed through private owners and dealers after Gauguin’s death; the full intermediate chain is not reliably recorded.', price: null },
    { year: '1925–today', who: 'Scottish National Gallery (National Galleries of Scotland)', place: 'Edinburgh', note: 'Purchased by the gallery in 1925, a bold acquisition given the strong British hostility to Post-Impressionism after Roger Fry’s London shows of 1910 and 1912. On permanent view (NG 1643).', price: 'purchased', museum: true },
  ],
  figures: [
    { name: 'Paul Gauguin', role: 'The painter', palette: ['#a8322a', '#5a1c14', '#1a0808'] },
    { name: 'Émile Bernard', role: 'The younger painter with the prior claim on the method', palette: ['#5a6a4a', '#2e3a26', '#0e120a'] },
    { name: 'The Breton women', role: 'The sitters, fresh from a sermon', palette: ['#cfc8bc', '#5a5650', '#1a1814'] },
    { name: 'Jacob and the angel', role: 'The vision, from Genesis 32', palette: ['#a8322a', '#c79338', '#1a0808'] },
  ],
  annotations: [
    { label: 'The red that is not a field', where: 'The entire ground behind and between the figures', detail: 'The whole stretch of ground is one flat, saturated red, not grass, not earth, not a meadow at any hour of any day. Gauguin makes the color itself do the work of telling you this is a vision and not the world. Nothing in nature is this red, which is exactly the point: you are looking at what is happening inside these women’s shut eyes, and inside a head there is no rule that the ground has to be green.' },
    { label: 'A wall of white headdresses', where: 'The foreground, the heads and shoulders of the women', detail: 'The tall, starched white caps the women wear are Breton coiffes, the regional headdress, and Gauguin lines them up across the front of the canvas as a rhythm of pale curved shapes against black dresses. They are painted as flat cut-out forms, not rounded with light and shade, so they read almost like a row of paper sculptures, the largest and nearest things in the picture.' },
    { label: 'The tree that splits the canvas', where: 'A diagonal trunk running corner to corner across the picture', detail: 'A single tree trunk cuts on a diagonal straight across the canvas and divides it into two countries: the real one (the praying women, near and low) and the imagined one (the wrestling match, far and high). It is the seam between the world and the vision, drawn as one bold line. (Some readers call it an apple tree and tie it to the Garden of Eden; that is one interpretation, not something Gauguin spelled out.)' },
    { label: 'The actual subject, shrunk and shoved back', where: 'Upper right area, Jacob and the angel locked together', detail: 'Jacob wrestling the angel is, on paper, the holy subject of the painting, the thing the sermon was about. Gauguin paints the two struggling figures small and pushes them up into the far corner, smaller than the women’s heads and backs in front. The sacred event is deliberately made less important-looking than the ordinary people watching it in their minds. This scale-inversion is exactly what got the picture called irreligious.' },
    { label: 'A cow, wandered in from real life', where: 'Small, near the dividing tree', detail: 'A little cow turns up near the splitting tree, a scrap of ordinary Breton field life that has strayed into the holy vision. It is the kind of small, unbothered animal Gauguin liked to leave in: proof that the everyday world keeps going on, cattle and all, even while a miracle is being imagined a few feet away.' },
    { label: 'Hard outlines around everything', where: 'Every coiffe, face, hand and limb', detail: 'Look at any edge: each shape is bounded by a firm dark contour line, with flat color inside and almost no blended shading. This is the cloisonné and stained-glass effect made literal, the dark lines doing the job that modeling and shadow do in ordinary painting. It is what flattens the whole picture into bright sealed compartments of color.' },
  ],
  lineage: {
    parents: [
      { label: 'Japanese woodblock prints', mode: 'art' },
      { label: 'Stained glass & cloisonné', mode: 'art' },
      { label: 'Émile Bernard', mode: 'art' },
    ],
    children: [
      { label: 'Synthetism', mode: 'art' },
      { label: 'The Nabis', mode: 'art' },
      { label: 'Symbolism', mode: 'art' },
    ],
  },
}
```

---

## 2. `where-do-we-come-from` — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Where Do We Come From? What Are We? Where Are We Going?
// (Gauguin, 1897–98). The twelve-foot Tahitian testament.
// Authored through the art content pipeline; narrative under
// 'where-do-we-come-from' (Wd… prefix).
// ─────────────────────────────────────────────────────────────
export const WHERE_DO_WE_COME_FROM: ArtWorkContent = {
  id: 'where-do-we-come-from',
  name: 'Where Do We Come From? What Are We? Where Are We Going?',
  shortName: 'Where Do We Come From?',
  year: 1898,
  artist: 'Paul Gauguin',
  artistId: 'gauguin',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 7 in × 12 ft 4 in',
  location: 'Museum of Fine Arts, Boston',
  acquired: 'Tompkins Collection, Arthur Gordon Tompkins Fund, 1936',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 2, total: 9 },
  hook: 'A twelve-foot mural Gauguin painted in Tahiti as his last word, three French questions lettered in the corner and no answers anywhere on the canvas.',
  heroImage: ART_IMG.gauguinWhereDoWeComeFrom,
  heroCredit: 'Gauguin, Where Do We Come From? What Are We? Where Are We Going?, 1897–98 · Museum of Fine Arts, Boston',
  heroAspect: 2.69, // 139.1 × 374.6 cm → W/H ≈ 2.69
  heroFit: 'contain', // the work hero shows the WHOLE wide frieze, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1897–98', k: 'Painted' },
    { v: '4′7″ × 12′4″', k: 'Dimensions' },
    { v: 'MFA Boston', k: 'Now at' },
  ],
  sections: [
    { id: 'tahiti', eyebrow: 'Tahiti · 1897', dateLabel: '1897', title: 'A colony Gauguin called paradise', blurb: 'Gauguin’s second and final Tahitian years, sick and broke and grieving, and the romantic "primitive" Tahiti he sold to Europe set honestly against the colonized island it actually was.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1897–98', title: 'A life read right to left', blurb: 'A twelve-foot band of figures meant to be read backwards: a sleeping baby on the right, an adult reaching to pick fruit in the center, an old woman near death on the left, with a blue idol Gauguin called "the Beyond" standing behind it all.', progress: 0.34 },
    { id: 'reception', eyebrow: 'Paris · 1898', dateLabel: '1898', title: 'The suicide story, and a cool room at Vollard’s', blurb: 'Gauguin’s own claim, in a letter, that he tried to poison himself after finishing it, weighed for what it is, and the picture’s mixed reception when it was first shown in Paris.', progress: 0.58 },
    { id: 'symbolism', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'A painting built to ask, not to tell', blurb: 'Symbolism over storytelling, flat decorative color, a deliberately unreadable subject, and an artist who wanted a picture to work like scripture instead of like an illustration.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1898–today', title: 'From Vollard’s wall to a Boston masterpiece', blurb: 'A long chain of dealers and collectors carries it from Paris to Norway to New York, and in 1936 the Museum of Fine Arts, Boston buys it for $80,000. Now the centerpiece of Gauguin’s late myth.', progress: 0.96 },
  ],
  provenance: [
    { year: '1898', who: 'Galerie Vollard · first exhibition', place: 'Paris', note: 'Sent to Paris from Tahiti and shown at Ambroise Vollard’s gallery, 17 November to 10 December 1898, to mixed reviews.', price: null },
    { year: '1901', who: 'Gabriel Frizeau', place: 'Paris', note: 'Bought from the dealer Ambroise Vollard for 2,500 francs.', price: '2,500 fr' },
    { year: 'c.1913', who: 'Galerie Barbazanges', place: 'Paris', note: 'Passed to the Barbazanges gallery around 1913.', price: null },
    { year: 'by 1920', who: 'Jørgen Breder Stang', place: 'Norway', note: 'Owned by the Norwegian collector Jørgen Breder Stang.', price: null },
    { year: '1935', who: 'Alfred Gold (dealer)', place: 'Europe', note: 'Sold through the dealer Alfred Gold in 1935.', price: null },
    { year: '1936', who: 'Marie Harriman Gallery', place: 'New York', note: 'Handled by the Marie Harriman Gallery in New York before its museum sale.', price: null },
    { year: '1936–today', who: 'Museum of Fine Arts, Boston', place: 'Boston', note: 'Acquired by the MFA on 16 April 1936 for $80,000 (Tompkins Collection, Arthur Gordon Tompkins Fund). One of the museum’s signature holdings. On permanent view (36.270).', price: '$80,000', museum: true },
  ],
  figures: [
    { name: 'Paul Gauguin', role: 'The painter', palette: ['#3a5a4a', '#8a7848', '#1c2418'] },
    { name: 'The sleeping infant', role: 'The right edge, where the life begins', palette: ['#e4d6c0', '#a08858', '#3a2a14'] },
    { name: 'The figure picking fruit', role: 'The center, young adulthood', palette: ['#8a7848', '#5a4a2a', '#1c1408'] },
    { name: 'The old woman', role: 'The far left, near death', palette: ['#6a6258', '#3a342c', '#14110c'] },
    { name: 'The blue idol', role: 'Behind the figures, Gauguin’s "Beyond"', palette: ['#3a5a72', '#22384a', '#0c1620'] },
  ],
  annotations: [
    { label: 'The questions, lettered on the canvas', where: 'Upper-left corner, in a pale yellow field', detail: 'Gauguin painted the title straight onto the picture in the top-left corner, the three French questions ("D’où venons-nous / Que sommes-nous / Où allons-nous") in plain capitals, with no question marks. It is rare for a painting to print its own title inside itself; it tells you Gauguin wanted you reading the canvas as a stated riddle, not just looking at a scene.' },
    { label: 'Where the life starts (so read backwards)', where: 'The far right edge, a sleeping baby with three crouched women', detail: 'At the right edge a baby sleeps near three crouching women. This is the beginning of the human life the painting traces, which means the whole frieze is meant to be read right to left, against the direction you normally scan a picture. Start here, at birth, and travel left toward death.' },
    { label: 'The reach for the fruit', where: 'Dead center, a standing figure with an arm raised', detail: 'In the middle a standing figure stretches an arm up to pick fruit. It is the central act of the picture and an old gesture of knowledge and "sin," the Eve reach, dropped into a Tahitian setting. This is the daily life of young adulthood, the busy middle of a life, placed at the literal center of the canvas.' },
    { label: 'The blue idol Gauguin called "the Beyond"', where: 'Left of center, in the background, arms raised', detail: 'Behind the central figures stands a tall blue statue with its arms lifted. Gauguin said it represents "the Beyond," the world past this one. It is worth knowing it is largely an invention: not a real Tahitian deity Gauguin found and recorded, but an image he made up to look ancient and sacred for a European audience.' },
    { label: 'The old woman, folded in on herself', where: 'The far left, hunched, hands near her face', detail: 'At the very left an old woman draws into herself, hands near her face, beside a white bird. She is the end of the life-cycle, death, and Gauguin paints her as resigned rather than terrified. The white bird clutching a small lizard at her feet, he said, stands for the uselessness of empty words, the painting’s quiet shrug at its own grand questions.' },
    { label: 'Corners aged like an old fresco', where: 'The two upper corners, painted gold-yellow', detail: 'Gauguin painted the two top corners a worn gold-yellow, as if the canvas were a damaged old fresco (a painting done straight into wet plaster, the medium of Renaissance church walls) or a faded tapestry. It is a deliberate antiquing effect, meant to make a brand-new painting feel like something dug up from a far older, sacred tradition.' },
  ],
  lineage: {
    parents: [
      { label: 'Symbolism', mode: 'art' },
      { label: 'Synthetism', mode: 'art' },
      { label: 'French colonial Tahiti', mode: 'civ' },
    ],
    children: [
      { label: 'Primitivism', mode: 'art' },
      { label: 'The Fauves', mode: 'art' },
      { label: 'Modern painting', mode: 'art' },
    ],
  },
}
```

---

## 3. `moulin-rouge` — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, At the Moulin Rouge (Toulouse-Lautrec, 1892–95). The
// Montmartre cabaret group portrait. Authored through the art
// content pipeline; narrative under 'moulin-rouge' (Mr… prefix).
// ─────────────────────────────────────────────────────────────
export const MOULIN_ROUGE: ArtWorkContent = {
  id: 'moulin-rouge',
  name: 'At the Moulin Rouge',
  shortName: 'At the Moulin Rouge',
  year: 1895,
  artist: 'Henri de Toulouse-Lautrec',
  artistId: 'lautrec',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 0 in × 4 ft 7 in',
  location: 'Art Institute of Chicago',
  acquired: 'Helen Birch Bartlett Memorial Collection, 1928',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 3, total: 9 },
  hook: 'A cabaret table at midnight, painted by a man who had his own reserved seat there, with a dancer’s face lunging in at the edge lit a poisonous green.',
  heroImage: ART_IMG.lautrecMoulinRouge,
  heroCredit: 'Toulouse-Lautrec, At the Moulin Rouge, 1892–95 · Art Institute of Chicago',
  heroAspect: 1.15, // 123 × 141 cm → W/H ≈ 1.15
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1892–95', k: 'Painted' },
    { v: '4′0″ × 4′7″', k: 'Dimensions' },
    { v: 'Chicago', k: 'Now at' },
  ],
  sections: [
    { id: 'montmartre', eyebrow: 'Montmartre · 1890s', dateLabel: '1892–95', title: 'The cabaret, and the man with his own table', blurb: 'The Moulin Rouge, the Montmartre cabaret (a Paris nightclub with dancing, singing and drink) that defined Paris nightlife in the 1890s, and the aristocratic painter who had his own table there, met plainly, neither romanticized nor sensationalized.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1892–95', title: 'A group portrait of the regulars', blurb: 'Not a generic crowd but specific, nameable people around one table, lit by harsh electric light, pitched at you down a steep diagonal railing in the tipped, cropped framing borrowed from Japanese prints.', progress: 0.34 },
    { id: 'reception', eyebrow: 'The cut canvas', dateLabel: 'then & later', title: 'The piece that was sliced off', blurb: 'For reasons no one has established, an L-shaped strip was cut from the canvas, taking May Milton’s green-lit face with it, and was reattached by 1914. The off-balance right edge is the scar.', progress: 0.58 },
    { id: 'looking', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'Modern night, modern light', blurb: 'A snapshot composition instead of a posed scene, the acid colors of artificial electric light, ordinary nightlife treated as a fit subject, and a painter pointing his eye at the margins of his own city.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1901–today', title: 'A short life, an immortal picture', blurb: 'Lautrec died in 1901 at thirty-six. The painting passed through dealers to Chicago, given to the Art Institute in 1928, and became one of the most reproduced images of fin-de-siècle Paris.', progress: 0.96 },
  ],
  provenance: [
    { year: 'by 1902', who: 'Maurice Joyant', place: 'Paris', note: 'Held by Lautrec’s friend and champion Maurice Joyant after the artist’s death in 1901.', price: null },
    { year: 'through 1926', who: 'Manzi, then Jean Laroche', place: 'Paris', note: 'Passed through the collector Manzi and then to Jean Laroche by 1926.', price: null },
    { year: '1926–1928', who: 'Paul Rosenberg, then Reid & Lefevre', place: 'Paris / London', note: 'Handled by the dealer Paul Rosenberg and then by Reid & Lefevre in London in 1928.', price: null },
    { year: '1928', who: 'Frederick Clay Bartlett', place: 'Chicago', note: 'Bought by the Chicago collector Frederick Clay Bartlett.', price: null },
    { year: '1928–today', who: 'Art Institute of Chicago', place: 'Chicago', note: 'Given to the Art Institute in 1928 as part of the Helen Birch Bartlett Memorial Collection, in memory of Bartlett’s late wife. On permanent view (1928.610).', price: 'gift', museum: true },
  ],
  figures: [
    { name: 'Henri de Toulouse-Lautrec', role: 'The painter (himself, tiny, in the back)', palette: ['#8a7a4a', '#4a3a22', '#15110a'] },
    { name: 'Jane Avril', role: 'Dancer, seen from behind, the red-orange hair', palette: ['#c4602a', '#7a3818', '#1c0e06'] },
    { name: 'La Goulue', role: 'The Moulin Rouge’s star can-can dancer', palette: ['#b08a4a', '#5a4222', '#1a1208'] },
    { name: 'May Milton', role: 'English dancer, the green-lit face at the right edge', palette: ['#5a7a4a', '#2e3a26', '#0e160a'] },
    { name: 'Gabriel Tapié de Céleyran', role: 'Lautrec’s tall cousin, the physician in the back', palette: ['#5a5a52', '#32322c', '#121210'] },
  ],
  annotations: [
    { label: 'The green-lit face at the edge', where: 'Far right foreground, a woman’s face lunging into the frame', detail: 'A woman’s face crowds in at the right edge, her chin and cheek washed a lurid, unnatural acid green by the cabaret’s electric light from below. This is the English dancer May Milton, and the shocking color is not symbolism, it is honest reporting of what artificial light does to skin. The way she is cut off by the frame, mid-lunge, is the most modern thing in the picture.' },
    { label: 'The burst of orange hair', where: 'Center, above the dark table group, seen from behind', detail: 'Rising over the dark-clad people at the table is a head of flaming red-orange hair, seen from behind. It belongs to the dancer and entertainer Jane Avril, and it is the visual anchor of the whole canvas, the one hot note your eye keeps returning to in a scene of murky greens and browns.' },
    { label: 'The painter, tiny, in the back', where: 'Background, a short top-hatted figure beside a very tall one', detail: 'Crossing the back of the room is a short man in a top hat walking just ahead of a conspicuously tall companion. The short one is Lautrec himself, the tall one his cousin, the physician Gabriel Tapié de Céleyran. Lautrec puts himself in his own painting as a small background figure and makes the height gap part of the joke, a dry, unsentimental self-insertion.' },
    { label: 'La Goulue at the mirror', where: 'Back right, a woman fixing her hair, reflected in glass', detail: 'At the back on the right a woman arranges her hair, half-caught in a greenish mirror. She is La Goulue ("The Glutton"), the Moulin Rouge’s famous can-can star, shown not mid-performance but in an offhand, backstage moment, fixing herself up like anyone else.' },
    { label: 'The diagonal that pitches you in', where: 'Lower left, a long balustrade sweeping back into the room', detail: 'A long railing cuts in from the lower-left corner on a steep diagonal and drives your eye back to the table. This tipped-up, cropped, off-center framing comes straight from Japanese woodblock prints, and it throws you into the room as if you had just walked up to the rail yourself, rather than looking at a tidy, posed picture.' },
    { label: 'The off-balance right edge', where: 'The right side, where the canvas feels oddly cut', detail: 'The right edge feels slightly wrong, lopsided, as if part of the composition is missing. It is: an L-shaped strip was cut from the canvas at some point (taking May Milton’s green face with it) and reattached by 1914. Who cut it, and why, is not known. The faint seam and the off-kilter crop are the record of that lost-and-recovered piece.' },
    { label: 'The monogram, lower left', where: 'Lower left corner, a small interlocked mark', detail: 'Down in the lower-left corner is Lautrec’s monogram, his initials stamped together in a small interlocked mark, the period’s version of a signature.' },
  ],
  lineage: {
    parents: [
      { label: 'Japanese woodblock prints', mode: 'art' },
      { label: 'Degas', mode: 'art' },
      { label: 'Belle Époque Montmartre', mode: 'civ' },
    ],
    children: [
      { label: 'The modern poster', mode: 'art' },
      { label: 'Expressionism', mode: 'art' },
      { label: 'Nightlife as a subject', mode: 'art' },
    ],
  },
}
```

---

## NarrativeFn functions

Drop into `art-section-reader.tsx` and register under `NARRATIVES['vision-sermon']`,
`NARRATIVES['where-do-we-come-from']`, `NARRATIVES['moulin-rouge']`. Same JSX pattern as the
`BuTown…BuAfterlife` functions. (`onZoom` is accepted on each signature for the PaintingFigure
zoom contract even where a given chapter does not place an inline figure.)

```tsx
// ─────────────────────────────────────────────────────────────
// Vision after the Sermon (Gauguin, 1888), the five chapters (Vs…)
// ─────────────────────────────────────────────────────────────
function VsPontAven({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Pont-Aven · 1888" title="A Breton village and a younger painter with theories" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the summer of 1888, in a small village called <strong>Pont-Aven</strong> (pohn-ta-VEN) in <strong>Brittany</strong>, a Celtic-rooted region in the far northwest of France with its own old language and costume, a cheap, scenic place where painters gathered because the living was cheap and the local women still wore traditional dress, <strong>Paul Gauguin</strong> (1848 to 1903) was at work and out of patience with Impressionism. The Impressionists had taught everyone to chase the look of light on real things. Gauguin wanted to paint the opposite: not what the eye sees out a window, but what goes on behind it, memory, feeling, belief, the inside of a head.
      </p>
      <p style={proseStyle}>
        He had help arriving at it. That summer the much younger painter <strong>Émile Bernard</strong> (1868 to 1941) turned up at Pont-Aven carrying theories aimed squarely at overturning Impressionism, and out of their arguments came a method called <strong>Synthetism</strong>, of which <em>Vision after the Sermon</em> is generally called the first complete statement. The credit for it would become a lifelong sore point. Bernard had been developing the flat, hard-outlined manner before that summer, and he spent the rest of his life insisting the breakthrough had been his; most accounts grant him the prior claim, even as it was Gauguin’s paintings that became the famous examples and Gauguin’s name the method got attached to.
      </p>

      <SectionHeader accent={accent} label="The new method" title="Synthetism, and the look it borrowed" />
      <p style={proseStyle}>
        <strong>Synthetism</strong> means roughly what it sounds like: instead of copying nature, you <em>synthesize</em>, you boil the scene down and fuse three things into one image, the thing you are looking at, the feeling it gives you, and pure flat decorative shape. The rules that came with it were blunt. Stop trying to reproduce the world faithfully. Build from memory and emotion. Lay down bold, flat areas of pure color. Drop perspective and the careful modeling of light and shade.
      </p>
      <p style={proseStyle}>
        The look that carried all that has its own name: <strong>Cloisonnism</strong>. Picture <em>cloisonné</em> enamelwork, the old craft where thin metal strips are bent into little compartments and each compartment is filled with a single color of glassy enamel, so the finished object is a mosaic of flat colors held apart by hard metal lines. Or picture a <strong>stained-glass window</strong>, flat panes of pure color with dark lead between them. Cloisonnism is painting done that way: flat areas of unmixed color, each one bounded by a firm dark outline, with the outlines doing the work that shadow and shading do in ordinary painting. Bernard had been working in exactly this manner, drawing it partly from Japanese prints and partly from medieval glass and enamel, and it is the direct spur for the picture you are about to look at.
      </p>
    </article>
  )
}

function VsMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Two feet four by three feet" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t is a modest object for so famous a picture, about <strong>2 feet 4 inches tall and 3 feet wide</strong>, oil on canvas, the kind of size you could carry under one arm. What Gauguin does inside that small frame is jam two worlds into it and draw the seam between them in a single tree trunk.
      </p>
      <p style={proseStyle}>
        In the foreground, near and large, a crowd of <strong>Breton peasant women</strong> in tall, starched white headdresses (the regional caps called <em>coiffes</em>) and black Sunday dresses bow their heads with their eyes shut. They have just come out of a sermon, and they are praying about what they heard. Behind and above them, small and pushed up into the corner, is the thing they are praying about: <strong>Jacob wrestling the angel</strong>, the episode from the Book of Genesis where the patriarch Jacob grapples all night with a divine stranger.
      </p>

      <SectionHeader accent={accent} label="The red" title="A ground that is not the ground" />
      <p style={proseStyle}>
        And the whole thing happens on a field of <strong>flat, saturated red</strong>. This is the move that makes the painting. The red is not a meadow, not earth, not a field at sunset; nothing in nature is this red. Gauguin makes the color itself announce that you are no longer in the real world. The praying women are real, standing in real Brittany; the wrestling match is a vision, happening inside their shut eyes; and the impossible red is the color of the boundary between the two. Color here is not describing a place. It is telling you which reality you are in.
      </p>
      <p style={proseStyle}>
        A single <strong>tree trunk</strong> cuts on a hard diagonal straight across the canvas and divides it cleanly: the women and their real world below and near, the vision above and far. (It is often called an apple tree and read as the tree of knowledge from the Garden of Eden; that is an interpretation later viewers added, not something Gauguin himself spelled out, so hold it loosely.) The two wrestling figures are widely said to be borrowed from a print by <strong>Hokusai</strong> (the nineteenth-century Japanese woodblock master whose prints Gauguin and the Paris painters collected and studied); Bernard pointed out the source, so take it as a credible attribution rather than a proven fact.
      </p>

      <SectionHeader accent={accent} label="The inversion" title="The miracle, made small" />
      <p style={proseStyle}>
        Look at the scale and you find the quiet outrage. Jacob and the angel, the <em>holy subject</em> of the picture, are painted <em>small</em> and shoved into the far corner, smaller than the women’s white caps and black backs in front of them. The sacred event is deliberately made to look less important than the ordinary villagers imagining it. Every edge in the painting, every cap, face and hand, is sealed in a dark contour with flat color inside and almost no shading: the cloisonné and stained-glass method made literal. The result is less a window onto a scene than a picture of a state of mind, faith, painted as its own bright, flat, sealed-off zone.
      </p>
    </article>
  )
}

function VsReception({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The first viewers" title="A letter to Van Gogh" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>G</DropCap>
        auguin knew at once he had made something new, and he said so to the one correspondent who would understand. In late September 1888 he wrote to <strong>Vincent van Gogh</strong>, with whom he was about to go live in Arles in the south of France, and sketched the picture out in the letter: the praying women, the red ground, the wrestling figures. The letter survives, which means we have Gauguin’s own description of the painting from the very year he made it. Among the Pont-Aven painters and the younger circle who would later call themselves the <strong>Nabis</strong> (a group of Paris painters who took Synthetism in a flat, decorative direction; the name means "prophets"), it became an early banner for the new method.
      </p>

      <SectionHeader accent={accent} label="The gift refused" title="The church that said no" />
      <p style={proseStyle}>
        There is a famous story about what Gauguin did next, and it needs telling carefully, because the bones of it are solid and the details are not. The solid part: Gauguin tried to <strong>give the painting to a local Breton parish church</strong>, and the church <strong>turned the gift down</strong>. That much is well attested.
      </p>
      <p style={proseStyle}>
        The colorful version, the one usually retold, comes almost entirely from a single account that <strong>Émile Bernard</strong> wrote down in 1904, sixteen years after the fact. By Bernard’s telling, Gauguin offered it to the priest of a specific nearby parish, who refused it on the grounds that it was not a religious picture at all, objecting that giant peasant bonnets and the backs of villagers filled the canvas while the sacred subject shrank away to nothing. It is a great story, and it is exactly the objection the painting invites, but it rests on one witness recalling it long afterward. So: the refusal happened, take that as fact; the priest’s exact words are Bernard’s memory, not gospel.
      </p>
    </article>
  )
}

function VsCloisonnism({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Why it broke the rules" title="Painting the inside of a head" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Impressionists had trained themselves to record the truth of the eye, the exact color of light on water at a particular minute, the world as it actually looks. Gauguin, in one picture, threw that out and pointed in the opposite direction.
      </p>
      <p style={proseStyle}>
        The break is in four parts. First, the subject is <em>imagination itself</em>: the painting shows not a scene in the world but a vision inside people’s heads, and gives that vision its own zone on the canvas, fenced off by the diagonal tree. Second, the <strong>color is freed from description</strong>: the red ground answers to feeling and meaning, not to anything you could photograph. Third, the form is <strong>flat</strong>, built from sealed areas of pure color bounded by dark lines, the flat physical surface of the canvas (its <strong>picture plane</strong>) frankly admitted as flat instead of faked into deep space. Fourth, it leans on sources the academy despised, Japanese prints, medieval glass, enamel, instead of the Greek-and-Roman tradition.
      </p>
      <p style={proseStyle}>
        Put together, those four moves make the case the rest of modern painting would build on: that a picture does not owe the world a faithful copy, that color and flat shape can carry meaning on their own, and that what happens inside a head is as fit a subject as anything you can see out a window. That is why <em>Vision after the Sermon</em> gets called the first complete statement of Synthetism rather than just one more pretty Brittany scene.
      </p>
    </article>
  )
}

function VsAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="From the artist to a national gallery" title="Edinburgh buys the heresy" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        ecause the church had turned it down, the painting stayed with Gauguin, and after his death in the Marquesas Islands in the Pacific in 1903 it moved through private hands in Europe, by a chain the record does not fully preserve. Its public home arrived in <strong>1925</strong>, when the <strong>Scottish National Gallery</strong> in Edinburgh bought it.
      </p>
      <p style={proseStyle}>
        That was a braver purchase than it sounds. British taste had been openly hostile to Post-Impressionism ever since the English critic Roger Fry put Gauguin, Van Gogh and Cézanne on London walls in 1910 and 1912 and the public recoiled. For a national gallery to spend real money on a flat-red Gauguin in 1925 was to bet, against the prevailing taste, that this odd little picture was a landmark. The bet paid off.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The first Synthetist masterpiece" />
      <p style={proseStyle}>
        It hangs in Edinburgh now, and it is read as exactly what Gauguin hoped: the first fully Synthetist picture, one of the foundational works of the turn away from Impressionism toward flat, symbolic, emotionally charged color. The line that runs out of it is long, the Nabis who flattened color into decorative interiors, the Symbolists (who wanted art to suggest feeling and meaning rather than illustrate stories), and past them the twentieth-century painters who took for granted that a canvas can be a state of mind rather than a copy of a room. It all starts with some Breton women praying with their eyes shut, and a red that exists nowhere on Earth.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// Where Do We Come From? (Gauguin, 1897–98), the five chapters (Wd…)
// ─────────────────────────────────────────────────────────────
function WdTahiti({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Tahiti · 1897" title="A colony Gauguin called paradise" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1897 <strong>Paul Gauguin</strong> was in <strong>Tahiti</strong>, in the South Pacific, on his second and final stay. He was poor, he was sick, and he was grieving a daughter, Aline, who had died early that year. He had built his career on leaving: Europe, his old job, the family he started there. Out of this last stretch he set out to paint a single enormous summing-up, a mural-scale statement he ranked above everything else he had done and described, in his letters, in almost biblical terms.
      </p>
      <p style={proseStyle}>
        Before the painting, a word about the place, because the painting cannot be understood without it. Gauguin sold Europe a picture of Tahiti as an unspoiled "primitive" paradise, a world of innocence outside money and modern life. That picture was largely his invention. The real Tahiti was a <strong>French colony</strong>, and French colonial rule and missionary Christianity were already busy dismantling the island’s own culture. Much of the "authentic" imagery Gauguin painted, the idols and rituals, was made up or imported rather than living Tahitian religion. He was exoticizing a colonized people for a European art audience, and the paradise on his canvases is a romantic fiction laid over a society his own civilization was taking apart.
      </p>
      <p style={proseStyle}>
        And the honest version of Gauguin’s Tahiti has to include this, even if she never appears in this particular canvas. During his Tahitian years he took a series of very young local girls as "wives." <strong>Teha’amana</strong>, the model behind several of his Tahiti pictures, was <strong>about thirteen</strong> by his own account, the arrangement made in a single afternoon. Such arrangements were common among French colonists, which made them ordinary, not innocent: the power gap between a middle-aged European man and a colonized child was total, and whether the girls consented in any meaningful sense is unknowable. The "paradise" this painting depicts is inseparable from that, and the tortured-genius-in-paradise legend should not be allowed to paint over it.
      </p>
    </article>
  )
}

function WdMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A twelve-foot frieze, read backwards" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he picture is huge and wide, about <strong>4 feet 7 inches tall and 12 feet 4 inches across</strong>, painted on a coarse, heavy sackcloth-type canvas. It is a <strong>frieze</strong> (a long horizontal band of figures, the word borrowed from the carved strips that run along the tops of Greek temples), and Gauguin meant it to be read <em>right to left</em>, against the way your eye normally travels. Read that way, it traces a single human life from birth to death.
      </p>
      <p style={proseStyle}>
        Start at the <strong>right edge</strong>: a <strong>sleeping infant</strong> with three crouching women. That is the beginning, birth. Move to the <strong>center</strong> and a standing figure reaches up to <strong>pick a fruit</strong>, an Eve-like gesture of knowledge and "sin," standing for the busy daily life of young adulthood. Move to the <strong>far left</strong> and an <strong>old woman</strong> draws into herself, hands near her face, near death and seemingly reconciled to it. Birth, life, death, laid out across twelve feet.
      </p>

      <SectionHeader accent={accent} label="The symbols" title="The idol, the bird, the questions" />
      <p style={proseStyle}>
        Behind the central figures stands a tall <strong>blue idol</strong> with its arms raised, which Gauguin said represents <strong>"the Beyond"</strong>, the world past this one. (It is one of his inventions, an image built to look ancient and sacred rather than a real deity he found.) Near the old woman a <strong>white bird</strong> clutches a lizard, which he said stands for the uselessness of empty words, the painting’s wry comment on its own grand ambitions.
      </p>
      <p style={proseStyle}>
        And Gauguin lettered the work’s questions directly onto the canvas, in the <strong>upper-left corner</strong>, in a pale yellow field: the three French questions in plain capitals, with no question marks. He <strong>signed and dated</strong> the opposite corner, upper right ("P. Gauguin / 1897"). He even aged the two top corners to a worn gold, as if the whole thing were an old fresco pulled from some older, sacred tradition. Everything about it is built to feel less like a scene and more like scripture.
      </p>
    </article>
  )
}

function WdReception({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The suicide story" title="What Gauguin claimed he did" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he most repeated story about this painting needs handling with tongs. In a letter to his friend and Paris go-between <strong>Daniel de Monfreid</strong> in February 1898, Gauguin <em>wrote that</em> he had finished the picture, gone up into the mountains, and tried to kill himself with arsenic, and that the dose failed because he vomited it back up. He had even foreshadowed the plan in a December 1897 letter. So it is certain that <em>Gauguin said this</em>.
      </p>
      <p style={proseStyle}>
        Whether it happened is another matter. The entire account is <strong>self-reported, written after the fact, and dramatized</strong>, and Gauguin was a relentless self-mythologizer; his biographer noted that few men worked harder at building their own legend. The arsenic story fits the painting’s life-and-death theme almost too neatly. No independent witness ever confirmed the attempt, and modern forensic work on teeth attributed to Gauguin found no arsenic. So the right way to carry it is the careful way: Gauguin <em>claimed</em> he tried to take his own life after finishing the picture, the only source is his own letter, and scholars treat it as part fact and part self-promotion, neither swallowed whole nor waved away.
      </p>

      <SectionHeader accent={accent} label="Paris · 1898" title="A cool room at Vollard’s" />
      <p style={proseStyle}>
        The painting itself was shipped to Paris and first shown at the gallery of the dealer <strong>Ambroise Vollard</strong>, from mid-November to early December 1898, to <strong>mixed reviews</strong>. The deliberate unreadability that Gauguin prized, the refusal to spell out a single clear story, divided the critics from the start. Some saw a masterpiece; others saw a riddle with the answer left out. That split has more or less followed the picture ever since.
      </p>
    </article>
  )
}

function WdSymbolism({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Why it broke the rules" title="A painting built to ask, not to tell" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or centuries a big, serious painting was expected to <em>tell a story</em> you could follow, a clear episode from scripture or myth or history, legible to anyone who knew the tale. Gauguin built a twelve-foot canvas that flatly refuses to do that. There is no single event, no clear plot, no caption that resolves it. It is built to leave you with the three questions it prints in its own corner, not with an answer.
      </p>
      <p style={proseStyle}>
        That is <strong>Symbolism</strong> at full mural scale: the idea that a painting should suggest, evoke and ask rather than describe, that its meaning lives in mood and symbol instead of in a readable scene. Gauguin pairs it with the flat, decorative, non-naturalistic color he had developed years earlier in Brittany, color and shape arranged for feeling rather than for accuracy. He wanted a picture that worked the way a sacred text works, something you return to and never quite finish, rather than an illustration you read once and understand.
      </p>
      <p style={proseStyle}>
        Go back to the old woman at the far left, folded in on herself. She is the death station of the life-cycle, and you expect this figure, of all of them, to deliver something: peace, terror, a verdict on what the whole painting believes. She delivers a posture and nothing more. The white bird at her feet clutches a lizard, and Gauguin even told us what it means, the uselessness of empty words, but knowing the symbol does not close the question; it pries it open wider. The painting hands you its own caption and the caption refuses to settle anything. That refusal to land, right where you most want an answer, is the whole method in one corner.
      </p>
      <p style={proseStyle}>
        The cost and the achievement are the same thing. By refusing to explain itself, the painting frustrates anyone looking for a tidy lesson, which is exactly why some 1898 critics shrugged. But that refusal is also why it became the high-water mark of Symbolist ambition in paint, and why it fed directly into the next generation’s freedom, the Fauves and beyond (the painters who, from about 1905, pushed pure expressive color even further), to treat a canvas as a field of expressive color and symbol rather than a faithful report on the world.
      </p>
    </article>
  )
}

function WdAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="From Vollard’s wall to Boston" title="A long road to a museum" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        fter its first showing the painting changed hands many times. The collector <strong>Gabriel Frizeau</strong> bought it from Vollard for 2,500 francs in 1901; from there it passed through a Paris gallery, then to the Norwegian collector <strong>Jørgen Breder Stang</strong>, then through the dealer Alfred Gold, then to a New York gallery. In <strong>1936</strong> it reached its permanent home: the <strong>Museum of Fine Arts, Boston</strong> bought it on the sixteenth of April for <strong>$80,000</strong>.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The testament, and what hangs beside it" />
      <p style={proseStyle}>
        It is now one of the MFA’s signature holdings and the centerpiece of Gauguin’s late legend, routinely read as his testament, the painting where he tried to put the whole arc of a human life and its unanswerable questions onto a single wall. It is one of the most ambitious pictures of its era.
      </p>
      <p style={proseStyle}>
        And the honest way to stand in front of it is to hold two things at once. It is a masterpiece of Symbolist ambition, and it is the product of a man who built a romantic "paradise" on top of a colonized island and took adolescent girls as partners while he did it. The greatness does not cancel the rest, and the rest does not cancel the greatness. A modern viewer is allowed, and probably required, to see both.
      </p>
    </article>
  )
}

// ─────────────────────────────────────────────────────────────
// At the Moulin Rouge (Toulouse-Lautrec, 1892–95), the five chapters (Mr…)
// ─────────────────────────────────────────────────────────────
function MrMontmartre({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Montmartre · 1890s" title="The cabaret, and the man with his own table" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he <strong>Moulin Rouge</strong> ("Red Mill") opened in <strong>1889</strong> in <strong>Montmartre</strong>, the hilly district on the north edge of Paris that was the city’s nightlife quarter, and it quickly became the icon of <strong>Belle Époque</strong> Paris (the glittering decades before the First World War). It was a <strong>Montmartre cabaret</strong>, a nightclub built around drinking, dancing and stage acts, famous above all for the <strong>can-can</strong>, the high-energy dance in which a line of women kicked their legs above their heads in unison, scandalous and thrilling in equal measure. And one of its fixtures, with his own reserved table, was the painter <strong>Henri de Toulouse-Lautrec</strong>.
      </p>

      <SectionHeader accent={accent} label="The man" title="An aristocrat at the cabaret table" />
      <p style={proseStyle}>
        Lautrec is worth meeting plainly, without legend. He was born in 1864 into an <strong>old aristocratic family</strong>, the counts of Toulouse, at Albi in the south of France; his parents were first cousins. As a teenager he broke both thigh bones, at thirteen and again at fourteen, and they did not heal properly. His legs stopped growing while his torso did not, leaving him an adult of about <strong>five feet</strong> tall. Modern medicine attributes this to a genetic bone disorder rather than to the falls alone. State it for what it is: a condition he lived with, which sharpened rather than caused his eye for the people at the edges of Montmartre society, the performers and night people and outsiders. It is not a freak show and it is not the secret of his genius.
      </p>
      <p style={proseStyle}>
        He trained under serious academic teachers, then spent his short career embedded in the dance halls, cafés and brothels of Montmartre, which became his real subject. <em>At the Moulin Rouge</em>, painted across roughly <strong>1892 to 1895</strong>, is the great picture of that world, and crucially it is a <strong>group portrait of the cabaret’s actual regulars and performers</strong>, not a generic crowd. Lautrec painted the people he drank with.
      </p>

      <SectionHeader accent={accent} label="The street, not the gallery" title="The poster that made him famous" />
      <p style={proseStyle}>
        And here is the thing most people miss about Lautrec: in his own lifetime he was famous less for paintings like this one than for <strong>posters</strong>. He was the man who turned the printed advertising poster into real art, using <strong>lithography</strong> (a printing method that pulls many copies of an image off a prepared stone or metal plate), and in <strong>1891</strong> his first poster, advertising the dancer La Goulue at the Moulin Rouge, went up on walls all over Paris. People stopped in the street to look at it. For most Parisians alive then, Lautrec <em>was</em> the poster artist; the oil paintings were the private, gallery side of the same eye. His posters of La Goulue and Jane Avril did as much to make those performers stars as their own dancing did.
      </p>
      <p style={proseStyle}>
        It is worth holding that alongside the painting, because the two halves explain each other. The flat color, the bold cropping, the figures cut off at the edge, all the moves that make <em>At the Moulin Rouge</em> feel so modern are the same moves a poster needs to grab a passerby from across the street. Lautrec was working out one visual language and using it in two places at once: on the wall of a gallery and on the wall of a building.
      </p>
    </article>
  )
}

function MrMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A tipped-up room full of real people" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he picture is roughly <strong>4 feet tall and 4 feet 7 inches wide</strong>, and the first thing it does is throw you off balance on purpose. A long <strong>balustrade</strong> (a railing) sweeps in from the lower-left corner on a steep diagonal and drives your eye back into the room toward a table of people. Nothing is centered, nothing is posed; the whole scene is tipped up and cropped as if you had just walked up to the rail. This snapshot framing, off-center, cut at the edges, comes from two sources Lautrec had absorbed: <strong>Japanese woodblock prints</strong> (the flat, boldly cropped color prints that flooded into Europe after trade with Japan opened in the 1850s, which his whole generation pored over) and the older painter <strong>Degas</strong>, who had already made the tipped-up floor and the figure sliced by the frame his own.
      </p>

      <SectionHeader accent={accent} label="The cast" title="Naming the table" />
      <p style={proseStyle}>
        These are specific, nameable people. Around the central table sit the writer <strong>Édouard Dujardin</strong>, the dancer La Macarona, the photographers Paul Sescau and Maurice Guibert, and, seen from behind with a burst of flaming <strong>orange-red hair</strong>, the dancer and entertainer <strong>Jane Avril</strong>, the visual anchor of the whole canvas. Crossing the back of the room, a short top-hatted figure walks just in front of a conspicuously tall one: that is <strong>Lautrec himself</strong>, tiny, ahead of his much taller cousin, the physician Gabriel Tapié de Céleyran, the height gap played as a dry joke. At the back on the right, fixing her hair in a greenish mirror, is <strong>La Goulue</strong> ("The Glutton"), the Moulin Rouge’s star can-can dancer. And at the right edge, lunging into the frame, is the face of the English dancer <strong>May Milton</strong>.
      </p>

      <SectionHeader accent={accent} label="The light" title="What electric light does to a face" />
      <p style={proseStyle}>
        The whole room is lit by the harsh <strong>artificial electric light</strong> of the venue, and that, more than any choice of palette, is what gives the picture its acid greens and chalky faces. May Milton’s face at the right edge is washed a shocking, poisonous green, lit from below. It looks expressionistic, almost lurid, but it is really honest reporting: this is what the new electric glare actually did to skin at midnight. Lautrec did not invent the color. He just refused to soften it.
      </p>
    </article>
  )
}

function MrReception({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The cut canvas" title="The piece that was sliced off" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is something faintly wrong with the right side of this painting, and once you see it you cannot unsee it. The composition feels lopsided on the right, as if a chunk is missing. A chunk <em>was</em> missing. At some point an <strong>L-shaped strip</strong> was cut from the bottom and right of the canvas, and that strip contained the green-lit face of <strong>May Milton</strong> lunging in at the edge, along with part of the foreground.
      </p>
      <p style={proseStyle}>
        The strip was later <strong>reattached</strong>, and by 1914 the canvas had been put back to the full extent you see today. The honest gap in the record is the <em>why</em> and the <em>who</em>: nobody has established who cut it down or for what reason. A common guess is that it was trimmed to make the picture easier to sell, by Lautrec or a dealer, but that is a guess, not a documented fact. The right way to say it is the plain way: for reasons that are not known, the canvas was cut down and then, by 1914, rejoined. The slightly off-balance crop on the right is the scar of that surgery.
      </p>
      <p style={proseStyle}>
        It is a useful thing to notice, because the off-center edge is also exactly the kind of cropped, unbalanced framing Lautrec liked on purpose, which is partly why the damage went unremarked for so long. The cut accident and the deliberate Japanese-print crop happen to pull in the same direction.
      </p>
    </article>
  )
}

function MrLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Why it broke the rules" title="Modern night, modern light" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        et this against a proper Salon picture, the official, polished, idealized painting the French art establishment rewarded, and the breaks line up fast. A Salon picture posed its figures, lit them flatteringly, set them in a clear stage space and finished every surface to a porcelain smoothness. <em>At the Moulin Rouge</em> does the opposite on every count.
      </p>
      <p style={proseStyle}>
        The break is fourfold. First, the <strong>composition is a snapshot</strong>, tipped, cropped and off-center, pitched in from a diagonal rail, instead of a balanced, posed arrangement. Second, the <strong>color is the truth of modern light</strong>: the acid greens and chalky faces are what electric glare really does, not what the eye finds flattering. Third, the <strong>subject is ordinary nightlife</strong>, cabaret regulars and performers caught off guard, treated as worth a serious four-foot canvas, where the academy reserved that seriousness for gods and history. Fourth, the <strong>painter aims his eye at the margins</strong> of his own city, the entertainers, the night people, the social edges, and paints them as individuals rather than types.
      </p>
      <p style={proseStyle}>
        Together those moves make it one of the truest pictures of its moment, <strong>fin-de-siècle</strong> Paris (literally "end of the century," the giddy, restless Paris of the 1890s) seen from the inside by someone who was there every night. It points forward, too: the flattened, cropped, expressive handling of color and edge here runs straight into Lautrec’s own posters and on into <strong>Expressionism</strong>, the early-twentieth-century approach that distorted and intensified color to project inner feeling rather than copy reality, where the honest, unlovely color of modern life becomes the whole point.
      </p>
    </article>
  )
}

function MrAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="A short life" title="Dead at thirty-six" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        autrec did not get old. He <strong>died on the ninth of September 1901, aged thirty-six</strong>, at his mother’s estate, of the combined toll of alcoholism and syphilis. State it plainly and humanely: a brilliant, hard-living man burned out young, having packed an entire vision of a city’s nightlife into about fifteen working years. He left behind a body of paintings, prints and posters that more or less define how we picture Belle Époque Paris.
      </p>

      <SectionHeader accent={accent} label="Chicago" title="The picture’s permanent home" />
      <p style={proseStyle}>
        After his death the painting passed through the hands of his friend and champion Maurice Joyant and then a chain of dealers, from Paris to London to the United States. In <strong>1928</strong> the Chicago collector <strong>Frederick Clay Bartlett</strong> gave it to the <strong>Art Institute of Chicago</strong>, as part of the Helen Birch Bartlett Memorial Collection, named for his late wife. It has been a cornerstone of the museum’s Post-Impressionist holdings ever since.
      </p>

      <SectionHeader accent={accent} label="Why it still matters" title="The night, from the inside" />
      <p style={proseStyle}>
        It is now one of the most reproduced images of fin-de-siècle Paris, and for good reason. It is not a tourist’s idea of the Moulin Rouge but an insider’s, a group portrait of named regulars under the real, unflattering electric light, framed like a glance rather than a pose, with the painter himself slipped into the back of the room. It took the most modern subject available, the artificial-lit city at midnight, and treated it with the seriousness art had saved for far grander things, which is exactly the Post-Impressionist bet: that the real, contemporary, ordinary world, seen clearly, was the great subject after all.
      </p>
    </article>
  )
}
```

### NARRATIVES registry entries (for the integrator to add)

```ts
  'vision-sermon': {
    'pont-aven': VsPontAven,
    making: VsMaking,
    reception: VsReception,
    cloisonnism: VsCloisonnism,
    afterlife: VsAfterlife,
  },
  'where-do-we-come-from': {
    tahiti: WdTahiti,
    making: WdMaking,
    reception: WdReception,
    symbolism: WdSymbolism,
    afterlife: WdAfterlife,
  },
  'moulin-rouge': {
    montmartre: MrMontmartre,
    making: MrMaking,
    reception: MrReception,
    looking: MrLooking,
    afterlife: MrAfterlife,
  },
```

---

## Fact ledger

Every load-bearing claim is traceable to `postimp-works-c-factpack.md`. Confidence tags carried from the pack.

### Vision after the Sermon
- Title / artist (Gauguin, 1848–1903) / 1888 / Pont-Aven / oil on canvas / Scottish National Gallery / NG 1643 / 1925 purchase — **High–Med** (pack §1 identity).
- Dimensions 72.2 × 91 cm → rendered **2 ft 4 in × 3 ft 0 in** (28.4 × 35.8 in); heroAspect 1.26 = 91/72.2. **High.**
- Synthetism / Cloisonnism definitions and Bernard’s role — **High** (pack §1 making, defines both terms; cloisonné + stained-glass analogy taken verbatim from pack).
- Breton women in white coiffes; flat red ground = vision not landscape; diagonal tree splitting real/vision; Jacob and angel small & pushed back; hard outlines — **High** (pack look-closer 1–4, 6).
- Cow near the tree — **Med** (pack look-closer 5; written as a soft detail).
- "Apple tree / tree of knowledge" + "red = river Jabbok" flagged as interpretation, not Gauguin’s stated intent — **Med/Low** (pack: interpretive, attribute as one reading). Handled: prose says "some readers call it… not something Gauguin spelled out."
- Hokusai wrestlers as source — **Med**, attributed to Bernard. Handled: "widely said… take it as a credible attribution rather than a proven fact."
- Letter to Van Gogh c. 26 Sept 1888 — **High** (pack reception; van Gogh letters archive).
- **Church refusal** — refusal stated as fact (**High**); priest’s words / specific parish attributed to **Bernard’s 1904 account, 16 yrs later** (**Med**). Handled exactly per pack: refusal asserted, details attributed to Bernard, no village/priest named as fact.
- 1925 Edinburgh purchase against post-Fry British hostility (1910/1912 shows) — **Med**. Provenance intermediate owners left as "chain not fully documented" per pack ⚠️ UNVERIFIED.

### Where Do We Come From?
- Title / Gauguin / 1897–98 / Tahiti / oil on (coarse) canvas / MFA Boston / 36.270 / acquired 16 Apr 1936 / $80,000 — **High** (pack §2; "jute/sackcloth" softened to "coarse, heavy sackcloth-type" per Med tag).
- Dimensions 139.1 × 374.6 cm → **4 ft 7 in × 12 ft 4 in** (54.8 × 147.5 in); heroAspect 2.69 = 374.6/139.1. **High.**
- Read right-to-left life cycle: infant (right) → fruit-picker (center) → old woman (left); blue idol = "the Beyond"; white bird + lizard = futility of vain words; title lettered upper-left no question marks; signed/dated upper-right; aged gold corners — **High/Med** (pack making + look-closer 1–6; bird Med, corners Med).
- Blue idol described as Gauguin’s invention — **High** (pack framing: "invented or imported, not living Tahitian religion").
- Provenance chain Frizeau(2,500fr,1901) → Barbazanges → Stang → Gold → Marie Harriman → MFA — **Med–High** (pack §2 provenance).
- First shown Galerie Vollard 17 Nov–10 Dec 1898, mixed reviews — **High** (pack).
- **Suicide attempt** — written strictly as SELF-REPORTED: "Gauguin wrote that…", "claimed", only source his own Feb 1898 letter to Monfreid, no witness, teeth study found no arsenic, self-mythologizer. **High that he wrote it; [LEGEND] that it happened.** Never asserted as fact (framing-gate item, pack §2).
- **Colonial framing (REQUIRED axis):** named plainly in `tahiti` and reinforced in `afterlife` — Tahiti was a French colony whose culture colonialism was dismantling; Gauguin’s "primitive paradise" a romantic invention; idols invented/imported; and Teha’amana "about 13" by Gauguin’s own account in Noa Noa, marriage arranged in an afternoon, total power gap. Surfaced although Teha’amana is not in this canvas, per pack instruction. Two-plus plain sentences, neither sanitized nor turned into a tribunal; the "tortured genius in paradise" myth explicitly refused. **High** (pack framing flags).

### At the Moulin Rouge
- Title / Toulouse-Lautrec (1864–1901) / 1892–95 (AIC display) / oil on canvas / Art Institute of Chicago / 1928.610 / Helen Birch Bartlett Memorial Collection / monogram lower left — **High** (pack §3, artic.edu JSON API verbatim).
- Dimensions 123 × 141 cm → **4 ft 0 in × 4 ft 7 in** (48 7/16 × 55 1/2 in); heroAspect 1.15 = 141/123. **High.**
- Moulin Rouge opened 1889; Montmartre cabaret; Lautrec a fixture with his own reserved table; group portrait of real regulars — **High** (pack §3 + AIC).
- Cast: Dujardin, La Macarona, Sescau, Guibert, Jane Avril (orange-red hair, from behind); Lautrec tiny + tall cousin Tapié de Céleyran in back; La Goulue at mirror back right; May Milton green-lit right edge — **High** (pack making + look-closer; AIC list).
- Acid greens / chalky faces from artificial electric light — **High** (pack: AIC).
- **Cut-down canvas** — L-shaped strip removed (took May Milton’s face), reattached by 1914; WHO/WHY **⚠️ UNVERIFIED**. Handled exactly: "for reasons that are not known, the canvas was cut down and… rejoined"; the saleability motive flagged as a guess, not asserted (pack §3).
- Provenance Joyant(by1902) → Manzi → Laroche(1926) → Rosenberg → Reid & Lefevre(1928) → F.C. Bartlett → AIC 1928 — **Med** (chain), Bartlett-memorial detail **High** (pack §3).
- **Lautrec the man (dignity axis):** aristocratic family (counts of Toulouse), parents first cousins; broke both femurs at 13 & 14, legs stopped growing, ~5 ft, attributed to a genetic bone disorder not the falls alone; died 9 Sept 1901, age 36, of alcoholism + syphilis. Stated plainly and humanely, explicitly NOT as freak-show and NOT as the "reason" for his genius (pack §3 framing guidance). **High.**

### Cross-cutting compliance
- **No em-dashes** anywhere in consts or prose (commas/periods/parens only); no `&mdash;` entities in captions — credit lines use the existing "·" separator pattern, no dashes added.
- **Dimensions ft/in only**, in both const `dimensions` field and prose; cm appears only as a code comment to justify `heroAspect`.
- All "look closer" annotations are **prose pointers only** (`label`/`where`/`detail`), no coordinates.
- Inline-defined on first use: Synthetism, Cloisonnism (with cloisonné + stained-glass analogy), the picture plane, frieze, the Salon, Montmartre cabaret, Belle Époque, balustrade, coiffe, beadle-not-applicable. `avant-garde` not needed (not used in these reads).
- `accent: ART_ACCENTS.green` on all three (POST_IMP’s accent).
- No MeanwhileSheet placed (BURIAL itself uses none; optional and not required by the shape). Integrator may add per-work "Meanwhile in…" sheets at integration if desired.

---

## Gate reconciliation (5 critic gates, applied)

All five gates ran. Fixes applied; the few declined items are logged with the reason.

**Gate 2 — storytelling/looking (was: STRONG / GOOD / STRONG).**
- VsCloisonnism: folded the `picture plane` parenthetical into the sentence (kept the required inline definition as a light apposition); cut the throat-clearing opener "To feel why this small canvas matters…".
- VsMaking: tightened "jam two completely different worlds… see the seam" → "jam two worlds into it and draw the seam between them in a single tree trunk."
- WdSymbolism (the one MUST-FIX): added a concrete looking-anchor paragraph sending the reader back to the old woman + the white bird/lizard, so the "why it broke the rules" chapter is no longer all-history-no-looking. Built only from pack content (old woman = death/reconciled; bird = "uselessness of vain words").
- WdAfterlife: cut filler "genuinely." WdMaking: cut "far older" redundancy.
- WdTahiti: softened the defensive "even though she is not in this particular canvas" hedge while keeping the required surfacing.
- MrMontmartre: "unusually clear eye" → concrete "his eye for the people at the edges… performers and night people and outsiders"; reworded the coy `montmartre` blurb.

**Gate 5 — framing/fairness (was: FAIR, 2 should-fix).**
- WdTahiti: the "such arrangements were common among French colonists" clause was pulling toward normalizing; rewritten to name the harm ("ordinary, not innocent… the power gap… was total, and whether the girls consented in any meaningful sense is unknowable"), using only pack-supported language.
- WdTahiti: the family Gauguin left in Europe — the critic asked for a sentence. The **fact pack does not contain** the wife/children detail (Mette Gad, the Copenhagen family), so per the hallucination floor it was NOT asserted as a sourced fact. Instead the "why Tahiti" opening was de-amplified (cut "his life was coming apart," "favorite," "Out of that low point") and given the pack-safe line "He had built his career on leaving: Europe, his old job, the family he started there," which removes the sympathetic tilt the critic flagged without inventing specifics. **Flag for the integrator:** if the family-abandonment fact is wanted explicitly, add it to the fact pack first.

**Gate 1 — fact-check (2 MUST-FIX).**
- WdMaking annotation: removed the question marks from the quoted French ("D’où venons-nous / Que sommes-nous / Où allons-nous") to match the canvas inscription (which has none).
- MrMaking prose + annotation: Lautrec is "in front of / ahead of" Tapié de Céleyran, not "next to/beside" (consistent AIC + Wikipedia description).
- **Fact-pack discrepancy logged (no draft change):** pack §1 names the priest's parish "Nizon"; external sources name "Névez." Draft names neither parish (attributes the whole episode to Bernard), so it is clean either way. The pack should be reconciled before reuse.

**Gate 3 — comprehensiveness (1 blocking MUST-ADD + should-considers).**
- MrMontmartre: added a full subsection, "The street, not the gallery / The poster that made him famous" (two paragraphs) — Lautrec reinvented the lithographic poster, the 1891 La Goulue poster made him famous in his own lifetime, his posters made the performers stars, and the poster language and the painting language are the same eye. This also defines `lithography` on first use. Sourced to the museum-grade refs the critic supplied (MoMA 1891 poster; NGS "golden age of the poster"); the unverifiable "3,000 copies / woke up famous overnight" flourish was deliberately NOT asserted.
- VsPontAven: added the honest Bernard-priority sentence (Bernard developed the manner before that summer and claimed it for life; most accounts grant him the prior claim) replacing the misleading "equals fighting over credit" framing; figures card updated from "co-architect" to "the younger painter with the prior claim on the method." Sourced to SLAM / TheArtStory / Wikipedia per the critic.
- MrMaking: added Degas as the second source (alongside Japanese prints) for the tipped/cropped composition.
- Hiroshige second-source for Vision: DECLINED (not in pack; the Hokusai-for-the-wrestlers attribution is the specific, pack-supported one and is already correctly hedged).

**Gate 4 — clarity (2 MUST-FIX + should-fixes).**
- MUST-FIX: glossed `Hokusai` (VsMaking) and removed bare `frieze` from the where-do-we-come-from `making` blurb ("A twelve-foot band of figures").
- Glosses added on first use: Brittany (region placement), the Nabis, the Marquesas Islands, "English critic" Roger Fry, the Symbolists (VsAfterlife), fresco (WdMaking annotation), the Fauves (WdSymbolism), the can-can (MrMontmartre), lithography/poster (new MrMontmartre subsection), Japanese woodblock prints (MrMaking), Expressionism + fin-de-siècle (MrLooking), Daniel de Monfreid ("friend and Paris go-between"). Removed undefined "Belle Époque" from the `montmartre` blurb (still defined in the narrative).

**Net new prose vs. the original draft:** WdSymbolism +1 paragraph; MrMontmartre +1 subsection (2 paragraphs); plus inline glosses. No section count changed (still 5 per work); all section ids unchanged.
```
