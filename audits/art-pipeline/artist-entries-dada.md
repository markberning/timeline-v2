# Dada — `ART_ARTIST_LIGHT` registry entries

LIGHT "why we feature them" artist page (not biographies). All 8 Wikipedia slugs and dates web-verified against English Wikipedia, June 2026.

## Verified Wikipedia slugs + dates

| id | name | slug | dates (verified) |
|----|------|------|------------------|
| tzara | Tristan Tzara | `Tristan_Tzara` | 1896–1963 |
| ball | Hugo Ball | `Hugo_Ball` | 1886–1927 |
| arp | Jean (Hans) Arp | `Jean_Arp` | 1886–1966 |
| duchamp | Marcel Duchamp | `Marcel_Duchamp` | 1887–1968 |
| picabia | Francis Picabia | `Francis_Picabia` | 1879–1953 |
| hoch | Hannah Höch | `Hannah_Höch` | 1889–1978 |
| hausmann | Raoul Hausmann | `Raoul_Hausmann` | 1886–1971 |
| grosz | George Grosz | `George_Grosz` | 1893–1959 |

Notes on corrected/confirmed slugs:
- Arp's article lives at `Jean_Arp` (the English-name form), not `Hans_Arp`.
- Höch's article is `Hannah_Höch` (with the umlaut), as expected.
- All dates as given in the brief match Wikipedia exactly.

## Paste-ready entries

```ts
export const ART_ARTIST_LIGHT_DADA: ArtistLight[] = [
  {
    id: 'tzara',
    name: 'Tristan Tzara',
    years: '1896–1963',
    nationality: 'Romanian-French',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'The ringmaster',
    accent: ART_ACCENTS.amber,
    why: 'Tzara turned Dada from a Zurich cabaret act into an international scandal. He wrote the manifestos, edited the magazine, and staged the riots, so wherever Dada provoked, his fingerprints were on it.',
    workIds: [],
    wiki: 'Tristan_Tzara',
  },
  {
    id: 'ball',
    name: 'Hugo Ball',
    years: '1886–1927',
    nationality: 'German',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'The founder',
    accent: ART_ACCENTS.amber,
    why: 'Ball opened the Cabaret Voltaire in 1916, the room where Dada was born, and is the man usually credited with naming it. His sound poems, chanted in a cardboard costume, threw out meaning itself and set the terms for everything Dada did next.',
    workIds: [],
    wiki: 'Hugo_Ball',
  },
  {
    id: 'arp',
    name: 'Jean (Hans) Arp',
    fullName: 'Hans Peter Wilhelm Arp',
    years: '1886–1966',
    nationality: 'German-French',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'Chance',
    accent: ART_ACCENTS.amber,
    why: 'Arp let go of the artist as decider. He tore up paper, dropped the scraps, and glued them where they fell, making chance itself the composer and giving Dada its quietest, most radical idea.',
    workIds: [],
    wiki: 'Jean_Arp',
  },
  {
    id: 'duchamp',
    name: 'Marcel Duchamp',
    years: '1887–1968',
    nationality: 'French',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'The readymade',
    accent: ART_ACCENTS.amber,
    why: 'Duchamp signed a urinal, called it sculpture, and reset what art could be. By choosing an object instead of making one, he moved the act of art from the hand to the idea, and the whole century followed him.',
    workIds: ['fountain', 'lhooq'],
    wiki: 'Marcel_Duchamp',
  },
  {
    id: 'picabia',
    name: 'Francis Picabia',
    years: '1879–1953',
    nationality: 'French',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'The machine-painter',
    accent: ART_ACCENTS.amber,
    why: 'Picabia drew people as machines: a spark plug for a lover, a diagram for a portrait. He carried Dada between Paris and New York and made the cold, mechanical drawing one of the movement’s signature jokes about the modern world.',
    workIds: ['stieglitz', 'sainte-vierge'],
    wiki: 'Francis_Picabia',
  },
  {
    id: 'hoch',
    name: 'Hannah Höch',
    years: '1889–1978',
    nationality: 'German',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'Photomontage',
    accent: ART_ACCENTS.amber,
    why: 'Höch cut up the illustrated press and reassembled it into a sharp, funny attack on Weimar Germany and its idea of the modern woman. She was a founder of photomontage and the one Berlin Dadaist who pointed the scissors at gender itself.',
    workIds: ['kitchen-knife'],
    wiki: 'Hannah_Höch',
  },
  {
    id: 'hausmann',
    name: 'Raoul Hausmann',
    years: '1886–1971',
    nationality: 'Austrian',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'The monteur',
    accent: ART_ACCENTS.amber,
    why: 'Hausmann called himself a monteur, an assembler, not a painter, and built Dada from found parts: photomontages, sound poems, and a wig dummy bolted with a ruler and a tin cup. That assemblage gave Berlin Dada its hardest image of a head emptied and refilled by the machine age.',
    workIds: ['mechanical-head'],
    wiki: 'Raoul_Hausmann',
  },
  {
    id: 'grosz',
    name: 'George Grosz',
    years: '1893–1959',
    nationality: 'German',
    movement: 'Dada',
    movementId: 'dada',
    eraId: 'mod',
    role: 'The savage pen',
    accent: ART_ACCENTS.amber,
    why: 'Grosz drew Weimar Berlin as a city of fat profiteers, crooked officers, and ruined veterans, with a line so cruel it reads like a verdict. He aimed Dada’s contempt straight at the people he held responsible and made political rage look like draftsmanship.',
    workIds: ['daum'],
    wiki: 'George_Grosz',
  },
];
```

## Sources

- [Tristan Tzara — Wikipedia](https://en.wikipedia.org/wiki/Tristan_Tzara)
- [Hugo Ball — Wikipedia](https://en.wikipedia.org/wiki/Hugo_Ball)
- [Jean Arp — Wikipedia](https://en.wikipedia.org/wiki/Jean_Arp)
- [Marcel Duchamp — Wikipedia](https://en.wikipedia.org/wiki/Marcel_Duchamp)
- [Francis Picabia — Wikipedia](https://en.wikipedia.org/wiki/Francis_Picabia)
- [Hannah Höch — Wikipedia](https://en.wikipedia.org/wiki/Hannah_H%C3%B6ch)
- [Raoul Hausmann — Wikipedia](https://en.wikipedia.org/wiki/Raoul_Hausmann)
- [George Grosz — Wikipedia](https://en.wikipedia.org/wiki/George_Grosz)
