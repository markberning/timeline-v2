# Pop Art — `ART_ARTIST_LIGHT` registry entries

Eight Pop Art artist entries for the LIGHT "why we feature them" artist page. House voice, not biography. Wikipedia slugs and dates web-verified (June 2026).

## Verified Wikipedia slugs + dates

| id | name | wiki slug | dates | nationality |
|----|------|-----------|-------|-------------|
| hamilton | Richard Hamilton | `Richard_Hamilton_(artist)` | 1922–2011 | English |
| paolozzi | Eduardo Paolozzi | `Eduardo_Paolozzi` | 1924–2005 | Scottish |
| warhol | Andy Warhol | `Andy_Warhol` | 1928–1987 | American |
| lichtenstein | Roy Lichtenstein | `Roy_Lichtenstein` | 1923–1997 | American |
| oldenburg | Claes Oldenburg | `Claes_Oldenburg` | 1929–2022 | Swedish-American |
| rosenquist | James Rosenquist | `James_Rosenquist` | 1933–2017 | American |
| boty | Pauline Boty | `Pauline_Boty` | 1938–1966 | British |
| johns | Jasper Johns | `Jasper_Johns` | 1930– (living) | American |

Notes on corrections / honesty:
- Hamilton is **English**, not generically "British" (Wikipedia: "English painter and collage artist").
- Oldenburg is **Swedish-born American** — born in Stockholm, settled in the US; tagged "Swedish-American."
- Johns is **proto-Pop / Neo-Dada**, kept honest in the `why` (Wikipedia associates him with abstract expressionism, Neo-Dada, and Pop). `years: '1930–'` open-ended.
- All slugs resolve to live en.wikipedia.org pages as of June 2026.

## Paste-ready block

```ts
{
  id: 'hamilton',
  name: 'Richard Hamilton',
  years: '1922–2011',
  nationality: 'English',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The definer',
  accent: ART_ACCENTS.violet,
  why: 'Hamilton wrote down what Pop was before anyone else could name it, and his tiny 1956 collage of a muscleman, a vacuum cleaner, and a giant Tootsie Pop got there first. He treated advertising and appliances as worthy of a frame, which is the whole argument the movement would spend a decade making louder.',
  workIds: ['just-what-is-it'],
  wiki: 'Richard_Hamilton_(artist)',
},
{
  id: 'paolozzi',
  name: 'Eduardo Paolozzi',
  years: '1924–2005',
  nationality: 'Scottish',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The first POP',
  accent: ART_ACCENTS.violet,
  why: 'Paolozzi cut the literal word POP into a 1947 collage, years before the movement had a name to steal. He hoarded American magazines, robots, and pin-ups into scrapbook chaos, and that magpie habit is the engine that later artists tidied into icons.',
  workIds: ['rich-mans-plaything'],
  wiki: 'Eduardo_Paolozzi',
},
{
  id: 'warhol',
  name: 'Andy Warhol',
  years: '1928–1987',
  nationality: 'American',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The factory',
  accent: ART_ACCENTS.violet,
  why: 'Warhol turned a soup label, a movie star, and a scouring-pad box into the most recognizable art of the century, then ran his studio like an assembly line and called it the Factory on purpose. He made the case that repetition, fame, and the supermarket shelf were exactly what painting should be about now.',
  workIds: ['soup-cans', 'marilyn', 'brillo'],
  wiki: 'Andy_Warhol',
},
{
  id: 'lichtenstein',
  name: 'Roy Lichtenstein',
  years: '1923–1997',
  nationality: 'American',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The dot-painter',
  accent: ART_ACCENTS.violet,
  why: 'Lichtenstein blew up a comic-book panel to mural size and hand-painted every printing dot, so a throwaway war strip became a canvas worthy of a museum wall. The nerve of taking the lowest commercial source and treating it with total seriousness is the joke and the point at once.',
  workIds: ['whaam'],
  wiki: 'Roy_Lichtenstein',
},
{
  id: 'oldenburg',
  name: 'Claes Oldenburg',
  years: '1929–2022',
  nationality: 'Swedish-American',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The soft sculptor',
  accent: ART_ACCENTS.violet,
  why: 'Oldenburg dragged Pop off the wall and onto the floor, sewing a hamburger seven feet wide out of canvas and foam so it slumped like something alive. Making the hard things soft and the small things enormous is his whole comedy, and it pulled sculpture into the supermarket aisle.',
  workIds: ['floor-burger'],
  wiki: 'Claes_Oldenburg',
},
{
  id: 'rosenquist',
  name: 'James Rosenquist',
  years: '1933–2017',
  nationality: 'American',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The billboard man',
  accent: ART_ACCENTS.violet,
  why: 'Rosenquist painted billboards above Times Square for a living, then turned that skill on the canvas, splicing car grilles, spaghetti, and bomber jets into wall-sized fragments. He understood scale the way an ad does, so close up the images dissolve and only the overwhelm survives.',
  workIds: [],
  wiki: 'James_Rosenquist',
},
{
  id: 'boty',
  name: 'Pauline Boty',
  years: '1938–1966',
  nationality: 'British',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The only woman',
  accent: ART_ACCENTS.violet,
  why: 'Boty was the only acknowledged woman in British Pop, and she painted desire from the other side of the camera, with a frankness the men around her never risked. Dead at twenty-eight and forgotten for thirty years, she is the proof of how narrow the movement let itself look.',
  workIds: ['its-a-mans-world'],
  wiki: 'Pauline_Boty',
},
{
  id: 'johns',
  name: 'Jasper Johns',
  years: '1930–',
  nationality: 'American',
  movement: 'Pop Art',
  movementId: 'pop',
  eraId: 'mod',
  role: 'The sign-painter',
  accent: ART_ACCENTS.violet,
  why: 'Johns is really a Neo-Dada bridge into Pop, but his flags, targets, and numbers asked the question Pop would run with: what happens when the subject is a thing the mind already knows by heart. By painting the flag as flat and as carefully as a flag itself, he made the everyday sign into the whole event.',
  workIds: ['flag'],
  wiki: 'Jasper_Johns',
},
```
