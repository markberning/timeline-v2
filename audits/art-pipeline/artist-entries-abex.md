# Abstract Expressionism — ART_ARTIST_LIGHT registry entries

Light "why we feature them" artist-page entries for the 9 Abstract Expressionism
artists. Dates and Wikipedia slugs web-verified (English Wikipedia, cross-checked
against Tate / Britannica / Whitney) on 2026-06-24.

## Verified Wikipedia slugs + dates

| id | name | dates (verified) | wiki slug |
| --- | --- | --- | --- |
| pollock | Jackson Pollock | 1912–1956 (Jan 28 1912 – Aug 11 1956) | `Jackson_Pollock` |
| de-kooning | Willem de Kooning | 1904–1997 (Apr 24 1904 – Mar 19 1997) | `Willem_de_Kooning` |
| rothko | Mark Rothko | 1903–1970 (Sep 25 1903 – Feb 25 1970) | `Mark_Rothko` |
| newman | Barnett Newman | 1905–1970 (Jan 29 1905 – Jul 4 1970) | `Barnett_Newman` |
| krasner | Lee Krasner | 1908–1984 (Oct 27 1908 – Jun 19 1984) | `Lee_Krasner` |
| frankenthaler | Helen Frankenthaler | 1928–2011 (Dec 12 1928 – Dec 27 2011) | `Helen_Frankenthaler` |
| gorky | Arshile Gorky | 1904–1948 (Apr 15 1904 – Jul 21 1948) | `Arshile_Gorky` |
| kline | Franz Kline | 1910–1962 (May 23 1910 – May 13 1962) | `Franz_Kline` |
| still | Clyfford Still | 1904–1980 (Nov 30 1904 – Jun 23 1980) | `Clyfford_Still` |

All nine supplied dates were correct as given; no corrections needed.

## Registry block (paste-ready)

```ts
const ART_ARTIST_LIGHT_ABEX = [
  {
    id: 'pollock',
    name: 'Jackson Pollock',
    years: '1912–1956',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The dripper',
    accent: ART_ACCENTS.blue,
    why: 'Pollock took the brush off the canvas, laid the canvas on the floor, and poured. The drip made the act of painting itself the subject, and that is the move the whole movement is named for.',
    workIds: ['autumn-rhythm'],
    wiki: 'Jackson_Pollock',
  },
  {
    id: 'de-kooning',
    name: 'Willem de Kooning',
    years: '1904–1997',
    nationality: 'Dutch-American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The figure-keeper',
    accent: ART_ACCENTS.blue,
    why: 'When his peers chased pure abstraction, de Kooning refused to let the human figure go, attacking it with the same slashing energy. His women keep the body in the room just as everyone else was clearing it out.',
    workIds: ['woman-i'],
    wiki: 'Willem_de_Kooning',
  },
  {
    id: 'rothko',
    name: 'Mark Rothko',
    years: '1903–1970',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The color-fielder',
    accent: ART_ACCENTS.blue,
    why: 'Rothko stripped painting down to stacked, hovering rectangles of color and asked them to carry the full weight of human feeling. He wanted the viewer close enough to be swallowed, proving abstraction could be an experience rather than a design.',
    workIds: ['orange-yellow'],
    wiki: 'Mark_Rothko',
  },
  {
    id: 'newman',
    name: 'Barnett Newman',
    years: '1905–1970',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The zip',
    accent: ART_ACCENTS.blue,
    why: 'Newman invented the "zip," a single vertical band splitting a vast field of flat color, and built an entire body of work from that one gesture. It turned a sheer expanse of paint into something monumental and pointed straight ahead to Minimalism.',
    workIds: ['vir-heroicus'],
    wiki: 'Barnett_Newman',
  },
  {
    id: 'krasner',
    name: 'Lee Krasner',
    years: '1908–1984',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The equal',
    accent: ART_ACCENTS.blue,
    why: 'Krasner was a first-generation Abstract Expressionist in her own right, restless enough to cut up her old canvases and rebuild them as something new. Long filed under Pollock\'s wife, she belongs in the front rank on the strength of the work alone.',
    workIds: ['krasner-seasons'],
    wiki: 'Lee_Krasner',
  },
  {
    id: 'frankenthaler',
    name: 'Helen Frankenthaler',
    years: '1928–2011',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The soak-stainer',
    accent: ART_ACCENTS.blue,
    why: 'Frankenthaler poured thinned paint straight into raw, unprimed canvas so the color soaked in like a stain rather than sitting on top. That one technique opened the door to Color Field painting and the generation that followed her.',
    workIds: ['mountains-sea'],
    wiki: 'Helen_Frankenthaler',
  },
  {
    id: 'gorky',
    name: 'Arshile Gorky',
    years: '1904–1948',
    nationality: 'Armenian-American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The bridge',
    accent: ART_ACCENTS.blue,
    why: 'Gorky carried European Surrealism across the ocean and let its dream-logic and floating biomorphic shapes loosen into something looser and more American. He is the hinge between the old world and the New York School that came right after him.',
    workIds: ['liver-cocks-comb'],
    wiki: 'Arshile_Gorky',
  },
  {
    id: 'kline',
    name: 'Franz Kline',
    years: '1910–1962',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'Black and white',
    accent: ART_ACCENTS.blue,
    why: 'Kline pared his palette down to black and white and painted huge, girder-like strokes with house-painter brushes. He insisted the white mattered as much as the black, making the empty space pull its own weight.',
    workIds: ['chief'],
    wiki: 'Franz_Kline',
  },
  {
    id: 'still',
    name: 'Clyfford Still',
    years: '1904–1980',
    nationality: 'American',
    movement: 'Abstract Expressionism',
    movementId: 'abex',
    eraId: 'mod',
    role: 'The recluse',
    accent: ART_ACCENTS.blue,
    why: 'Still reached full abstraction earlier than almost anyone, building jagged walls of color that look torn rather than painted. He withdrew from the gallery world on principle and willed his estate to a single museum, so seeing the work means going to him.',
    workIds: ['still-cliff'],
    wiki: 'Clyfford_Still',
  },
];
```
