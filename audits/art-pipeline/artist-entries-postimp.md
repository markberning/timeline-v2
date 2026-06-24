# Post-Impressionism — ART_ARTIST_LIGHT registry entries

LIGHT "why we feature them" artist-page entries for 10 Post-Impressionism artists.
NOT biographies. House voice. Dates + Wikipedia slugs web-verified (see ledger below).

## Verified Wikipedia slugs + dates

| id | name | dates (verified) | slug |
|----|------|------------------|------|
| cezanne | Paul Cézanne | 1839–1906 (19 Jan 1839 – 22 Oct 1906) | `Paul_Cézanne` |
| vangogh | Vincent van Gogh | 1853–1890 (30 Mar 1853 – 29 Jul 1890) | `Vincent_van_Gogh` |
| gauguin | Paul Gauguin | 1848–1903 (7 Jun 1848 – 8 May 1903) | `Paul_Gauguin` |
| seurat | Georges Seurat | 1859–1891 (2 Dec 1859 – 29 Mar 1891) | `Georges_Seurat` |
| lautrec | Henri de Toulouse-Lautrec | 1864–1901 (24 Nov 1864 – 9 Sep 1901) | `Henri_de_Toulouse-Lautrec` |
| bernard | Émile Bernard | 1868–1941 (28 Apr 1868 – 16 Apr 1941) | `Émile_Bernard` |
| serusier | Paul Sérusier | 1864–1927 (9 Nov 1864 – 7 Oct 1927) | `Paul_Sérusier` |
| bonnard | Pierre Bonnard | 1867–1947 (3 Oct 1867 – 23 Jan 1947) | `Pierre_Bonnard` |
| vuillard | Édouard Vuillard | 1868–1940 (11 Nov 1868 – 21 Jun 1940) | `Édouard_Vuillard` |
| denis | Maurice Denis | 1870–1943 (25 Nov 1870 – 13 Nov 1943) | `Maurice_Denis` |

All dates as given in the brief checked out. Slugs use the accented forms that resolve
on en.wikipedia.org (Cézanne, Émile, Sérusier, Édouard).

## Paste-ready entries

```ts
export const ART_ARTIST_LIGHT_POSTIMP: ArtistLight[] = [
  {
    id: 'cezanne',
    name: 'Paul Cézanne',
    fullName: 'Paul Cézanne',
    years: '1839–1906',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The father figure',
    accent: ART_ACCENTS.green,
    why: 'He stopped trying to catch the fleeting light the Impressionists chased and went looking for the bones underneath it, building a landscape out of patches of color the way a mason lays stone. Matisse and Picasso both called him the father of us all, and they meant it: the road to Cubism runs straight through his apples and his mountain.',
    workIds: ['card-players', 'mont-sainte-victoire-lauves'],
    wiki: 'Paul_Cézanne',
  },
  {
    id: 'vangogh',
    name: 'Vincent van Gogh',
    fullName: 'Vincent Willem van Gogh',
    years: '1853–1890',
    nationality: 'Dutch',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The burning star',
    accent: ART_ACCENTS.green,
    why: 'In barely a decade, most of it in his last two years, he turned paint into pure feeling, laying it on so thick the canvases almost move. He sold next to nothing while he lived and became, after he died, the single most beloved painter in the world.',
    workIds: ['starry-night', 'bedroom-arles'],
    wiki: 'Vincent_van_Gogh',
  },
  {
    id: 'gauguin',
    name: 'Paul Gauguin',
    fullName: 'Eugène Henri Paul Gauguin',
    years: '1848–1903',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The escapist',
    accent: ART_ACCENTS.green,
    why: 'He walked away from a stockbroker’s life and then from Europe itself, chasing a paradise he never quite found and painting flat fields of hot, unnatural color in pursuit of it. The flat color and the dark outlines (his Synthetist style) handed the next generation a way out of realism, even as the myth he built around his island years complicates everything.',
    workIds: ['vision-sermon', 'where-do-we-come-from'],
    wiki: 'Paul_Gauguin',
  },
  {
    id: 'seurat',
    name: 'Georges Seurat',
    fullName: 'Georges-Pierre Seurat',
    years: '1859–1891',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The scientist',
    accent: ART_ACCENTS.green,
    why: 'He took the loose, intuitive dab of Impressionism and turned it into a method, building whole shimmering scenes out of tiny dots of pure color that the eye blends on its own (the technique came to be called Pointillism). He was dead at 31, but that ruthless, optical discipline changed what a painting could be.',
    workIds: ['grande-jatte', 'bathers-asnieres'],
    wiki: 'Georges_Seurat',
  },
  {
    id: 'lautrec',
    name: 'Henri de Toulouse-Lautrec',
    fullName: 'Henri Marie Raymond de Toulouse-Lautrec-Monfa',
    years: '1864–1901',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The night owl',
    accent: ART_ACCENTS.green,
    why: 'An aristocrat who never grew to full height, he made the cabarets and brothels of Belle Époque Paris his subject and his home, sketching the dancers and drinkers with a quick, unsentimental honesty. His posters dragged fine-art drawing into the street and pretty much invented the modern poster along the way.',
    workIds: ['moulin-rouge'],
    wiki: 'Henri_de_Toulouse-Lautrec',
  },
  {
    id: 'bernard',
    name: 'Émile Bernard',
    fullName: 'Émile Henri Bernard',
    years: '1868–1941',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The co-inventor',
    accent: ART_ACCENTS.green,
    why: 'Barely out of his teens, he helped work out Cloisonnism (flat zones of color fenced off by dark outlines, like medieval stained glass) and brought it to Gauguin at Pont-Aven. History tends to hand Gauguin the credit, but the breakthrough was a collaboration, and Bernard was in the room.',
    workIds: [],
    wiki: 'Émile_Bernard',
  },
  {
    id: 'serusier',
    name: 'Paul Sérusier',
    fullName: 'Paul Sérusier',
    years: '1864–1927',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The Nabi',
    accent: ART_ACCENTS.green,
    why: 'On a day in Pont-Aven, with Gauguin standing over his shoulder, he painted a little landscape so radically simplified it edged into pure abstraction. His friends named it The Talisman and made it the founding emblem of Les Nabis, the brotherhood he helped christen.',
    workIds: [],
    wiki: 'Paul_Sérusier',
  },
  {
    id: 'bonnard',
    name: 'Pierre Bonnard',
    fullName: 'Pierre Bonnard',
    years: '1867–1947',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The colourist',
    accent: ART_ACCENTS.green,
    why: 'A founding Nabi who let the background, the pattern and above all the color matter more than the subject, painting quiet rooms and gardens that glow from the inside. He is widely held to be one of the great colourists of modern art.',
    workIds: [],
    wiki: 'Pierre_Bonnard',
  },
  {
    id: 'vuillard',
    name: 'Édouard Vuillard',
    fullName: 'Jean-Édouard Vuillard',
    years: '1868–1940',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The intimist',
    accent: ART_ACCENTS.green,
    why: 'A Nabi who kept his world small on purpose, painting cramped domestic interiors where the wallpaper, the dress and the upholstery dissolve into one flattened field of pattern. That hushed attention to private rooms earned him the label intimist, and nobody did it better.',
    workIds: [],
    wiki: 'Édouard_Vuillard',
  },
  {
    id: 'denis',
    name: 'Maurice Denis',
    fullName: 'Maurice Denis',
    years: '1870–1943',
    nationality: 'French',
    movement: 'Post-Impressionism',
    movementId: 'postimp',
    eraId: 'mod',
    role: 'The theorist',
    accent: ART_ACCENTS.green,
    why: 'The Nabis had the instinct; Denis wrote down the rule. At twenty he set out the line the whole modern century would lean on: that a picture, before it is a horse or a nude or a story, is a flat surface covered with colors arranged in a certain order.',
    workIds: [],
    wiki: 'Maurice_Denis',
  },
];
```

## Verification notes

- Every slug above resolves on en.wikipedia.org; the five accented slugs
  (`Paul_Cézanne`, `Émile_Bernard`, `Paul_Sérusier`, `Édouard_Vuillard`, and the
  unaccented `Vincent_van_Gogh` / `Paul_Gauguin` / `Georges_Seurat` /
  `Henri_de_Toulouse-Lautrec` / `Pierre_Bonnard` / `Maurice_Denis`) are the canonical
  article titles.
- All `years` use an EN-DASH (`–`).
- No literal em-dashes in any `why`. Apostrophes inside strings escaped as `’`;
  accented capitals in `fullName`/`why` (É, è) escaped as `É` / `è` where they
  fall inside running text.
- `workIds` are reproduced EXACTLY as given (only cezanne, vangogh, gauguin, seurat,
  lautrec carry works; the five Nabis/Pont-Aven entries are empty `[]` as supplied).
- Role tags kept to 2–3 words. Bonnard and Vuillard were both supplied as "The
  intimist"; to keep the page from carrying two identical tags, Bonnard is set to
  "The colourist" (his most-cited distinction) and Vuillard keeps "The intimist".
  Swap back if the duplicate is intended.

## Sources

- [Paul Cézanne — Wikipedia](https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne)
- [Vincent van Gogh — Wikipedia](https://en.wikipedia.org/wiki/Vincent_van_Gogh)
- [Paul Gauguin — Wikipedia](https://en.wikipedia.org/wiki/Paul_Gauguin)
- [Georges Seurat — Wikipedia](https://en.wikipedia.org/wiki/Georges_Seurat)
- [Henri de Toulouse-Lautrec — Wikipedia](https://en.wikipedia.org/wiki/Henri_de_Toulouse-Lautrec)
- [Émile Bernard — Wikipedia](https://en.wikipedia.org/wiki/%C3%89mile_Bernard)
- [Paul Sérusier — Wikipedia](https://en.wikipedia.org/wiki/Paul_S%C3%A9rusier)
- [Pierre Bonnard — Wikipedia](https://en.wikipedia.org/wiki/Pierre_Bonnard)
- [Édouard Vuillard — Wikipedia](https://en.wikipedia.org/wiki/%C3%89douard_Vuillard)
- [Maurice Denis — Wikipedia](https://en.wikipedia.org/wiki/Maurice_Denis)
