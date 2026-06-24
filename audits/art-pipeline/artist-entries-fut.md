# Futurism — `ART_ARTIST_LIGHT` registry entries

LIGHT "why we feature them" artist page. Not biographies. Web-verified dates + Wikipedia slugs (verified 2026-06-24).

## Verified Wikipedia slugs

| id | name | dates (verified) | slug |
|----|------|------------------|------|
| marinetti | Filippo Tommaso Marinetti | 22 Dec 1876 – 2 Dec 1944 | `Filippo_Tommaso_Marinetti` |
| boccioni | Umberto Boccioni | 19 Oct 1882 – 17 Aug 1916 | `Umberto_Boccioni` |
| balla | Giacomo Balla | 18 Jul 1871 – 1 Mar 1958 | `Giacomo_Balla` |
| carra | Carlo Carrà | 11 Feb 1881 – 13 Apr 1966 | `Carlo_Carrà` |
| severini | Gino Severini | 7 Apr 1883 – 26 Feb 1966 | `Gino_Severini` |
| russolo | Luigi Russolo | 30 Apr 1885 – 4 Feb 1947 | `Luigi_Russolo` |

All six given birth/death years matched the verified records exactly; no corrections needed. Carrà's article URL is encoded as `Carlo_Carr%C3%A0`, which decodes to the accented slug `Carlo_Carrà`.

## Paste-ready entries

```ts
{
  id: 'marinetti',
  name: 'Filippo Tommaso Marinetti',
  years: '1876–1944',
  nationality: 'Italian',
  movement: 'Futurism',
  movementId: 'fut',
  eraId: 'mod',
  role: 'The ringmaster',
  accent: ART_ACCENTS.rust,
  why: 'He is here because Futurism is the one movement that began as a sentence before it was a single painting, and Marinetti wrote that sentence: the 1909 manifesto that told artists to worship speed, machines, and noise and to burn the museums down. He did not paint the canvases, he conjured the whole crowd that did. The same appetite for force later carried him into the politics that became Fascism, and that line runs straight out of the manifesto, so we keep it in view.',
  workIds: [],
  wiki: 'Filippo_Tommaso_Marinetti',
},
{
  id: 'boccioni',
  name: 'Umberto Boccioni',
  years: '1882–1916',
  nationality: 'Italian',
  movement: 'Futurism',
  movementId: 'fut',
  eraId: 'mod',
  role: 'The strongest painter',
  accent: ART_ACCENTS.rust,
  why: 'If the manifesto was the dare, Boccioni was the one who actually made it look like something, the hand and the head of the movement at once. He worked out how to put motion itself on the canvas and then poured it into bronze, and his striding figure stayed the single most convincing object Futurism ever produced. He died at thirty-three after a fall from a horse, which is why the work feels like a sprint cut short.',
  workIds: ['city-rises', 'cyclist', 'unique-forms', 'farewells'],
  wiki: 'Umberto_Boccioni',
},
{
  id: 'balla',
  name: 'Giacomo Balla',
  years: '1871–1958',
  nationality: 'Italian',
  movement: 'Futurism',
  movementId: 'fut',
  eraId: 'mod',
  role: 'The teacher',
  accent: ART_ACCENTS.rust,
  why: 'He was the older man in the room, the one Boccioni and Severini had already studied under before any of them signed a thing, so the movement learned some of its craft from him. Where the others chased violence, Balla chased pure motion and got playful with it, fanning a trotting dog into a blur of legs. He shows the gentler, wittier edge of an art that mostly wanted to shout.',
  workIds: ['dog', 'abstract-speed'],
  wiki: 'Giacomo_Balla',
},
{
  id: 'carra',
  name: 'Carlo Carrà',
  years: '1881–1966',
  nationality: 'Italian',
  movement: 'Futurism',
  movementId: 'fut',
  eraId: 'mod',
  role: 'The convert',
  accent: ART_ACCENTS.rust,
  why: 'He signed the painters’ manifesto and gave Futurism one of its loudest canvases, a funeral that turns into a riot of clashing reds and black. Then he walked away, traded all that speed for stillness, and helped invent the dreamlike calm of metaphysical painting. He is the case study in how briefly even a true believer could stand the noise.',
  workIds: ['galli'],
  wiki: 'Carlo_Carrà',
},
{
  id: 'severini',
  name: 'Gino Severini',
  years: '1883–1966',
  nationality: 'Italian',
  movement: 'Futurism',
  movementId: 'fut',
  eraId: 'mod',
  role: 'The Parisian',
  accent: ART_ACCENTS.rust,
  why: 'He was the Futurist who actually lived in Paris, elbow to elbow with the Cubists, and he became the movement’s window between Italy and the French avant-garde. He had little use for machines and reached instead for dancers and nightclubs, splintering a Montmartre dance hall into shards of light and sequins. His work is where Futurist energy meets Parisian glamour.',
  workIds: ['bal-tabarin'],
  wiki: 'Gino_Severini',
},
{
  id: 'russolo',
  name: 'Luigi Russolo',
  years: '1885–1947',
  nationality: 'Italian',
  movement: 'Futurism',
  movementId: 'fut',
  eraId: 'mod',
  role: 'The noise-maker',
  accent: ART_ACCENTS.rust,
  why: 'He started as a painter and then took the movement to its logical extreme, deciding the future belonged to noise and building machines to make it. His manifesto on the art of noises argued that the racket of the modern city was the real music to come, and his hand-cranked noise boxes proved he meant it. He shows how far Futurism pushed past the frame, all the way into sound.',
  workIds: ['automobile'],
  wiki: 'Luigi_Russolo',
},
```
