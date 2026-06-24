# Cubism — `ART_ARTIST_LIGHT` registry entries (Picasso excluded)

Light "why we feature them" artist pages, not biographies. 5 artists, all Cubism (`movementId: 'cubism'`, `eraId: 'mod'`), all `accent: ART_ACCENTS.violet`.

## Verified Wikipedia slugs + dates

All slugs and dates web-verified against English Wikipedia. No corrections needed — every date in the brief matched.

| id | slug (`wiki`) | dates (verified) | nationality |
|----|---------------|------------------|-------------|
| braque | `Georges_Braque` | 1882–1963 (b. 13 May 1882, d. 31 Aug 1963) | French |
| gris | `Juan_Gris` | 1887–1927 (b. 23 Mar 1887, d. 11 May 1927) | Spanish |
| leger | `Fernand_Léger` | 1881–1955 (b. 4 Feb 1881, d. 17 Aug 1955) | French |
| delaunay | `Robert_Delaunay` | 1885–1941 (b. 12 Apr 1885, d. 25 Oct 1941) | French |
| metzinger | `Jean_Metzinger` | 1883–1956 (b. 24 Jun 1883, d. 3 Nov 1956) | French |

Full names from Wikipedia: Braque has none beyond the common name; Juan Gris = José Victoriano González-Pérez; Léger = Joseph Fernand Henri Léger; Delaunay = Robert-Victor-Félix Delaunay; Metzinger = Jean Dominique Antony Metzinger.

## Paste-ready entries

```ts
{
  id: 'braque',
  name: 'Georges Braque',
  years: '1882–1963',
  nationality: 'French',
  movement: 'Cubism',
  movementId: 'cubism',
  eraId: 'mod',
  role: 'Co-pioneer',
  accent: ART_ACCENTS.violet,
  why: 'Cubism had two inventors, and Braque was the other one. He and Picasso worked so closely for a few years that even they had trouble telling their canvases apart, and it was Braque who first glued real paper onto a painting and called it art.',
  workIds: ['violin-jug', 'the-portuguese'],
  wiki: 'Georges_Braque',
},
{
  id: 'gris',
  name: 'Juan Gris',
  fullName: 'José Victoriano González-Pérez',
  years: '1887–1927',
  nationality: 'Spanish',
  movement: 'Cubism',
  movementId: 'cubism',
  eraId: 'mod',
  role: 'The synthesist',
  accent: ART_ACCENTS.violet,
  why: 'If Braque and Picasso broke the world into fragments, Gris put it back together with a ruler and a clear head. His crisp, almost architectural canvases are the tidiest, most legible version of Cubism anyone made.',
  workIds: ['gris-breakfast'],
  wiki: 'Juan_Gris',
},
{
  id: 'leger',
  name: 'Fernand Léger',
  fullName: 'Joseph Fernand Henri Léger',
  years: '1881–1955',
  nationality: 'French',
  movement: 'Cubism',
  movementId: 'cubism',
  eraId: 'mod',
  role: 'The machinist',
  accent: ART_ACCENTS.violet,
  why: 'Léger fell in love with the machine age and painted people who look like they were assembled from pistons, tubes, and gleaming cylinders. His bold, factory-bright version of Cubism feels less like a still life and more like a power plant.',
  workIds: [],
  wiki: 'Fernand_Léger',
},
{
  id: 'delaunay',
  name: 'Robert Delaunay',
  fullName: 'Robert-Victor-Félix Delaunay',
  years: '1885–1941',
  nationality: 'French',
  movement: 'Cubism',
  movementId: 'cubism',
  eraId: 'mod',
  role: 'The Orphist',
  accent: ART_ACCENTS.violet,
  why: 'Most early Cubists drained the color out of their work to focus on form. Delaunay went the opposite way, flooding the Cubist grid with pure spinning color until the style practically turned into pure light, an offshoot a poet nicknamed Orphism.',
  workIds: [],
  wiki: 'Robert_Delaunay',
},
{
  id: 'metzinger',
  name: 'Jean Metzinger',
  fullName: 'Jean Dominique Antony Metzinger',
  years: '1883–1956',
  nationality: 'French',
  movement: 'Cubism',
  movementId: 'cubism',
  eraId: 'mod',
  role: 'The theorist',
  accent: ART_ACCENTS.violet,
  why: 'Braque and Picasso made Cubism, but they never bothered to explain it. Metzinger did, co-writing the first book on the movement with Albert Gleizes and giving the whole experiment its argument and its name in print.',
  workIds: [],
  wiki: 'Jean_Metzinger',
},
```
