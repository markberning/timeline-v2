# Surrealism — ART_ARTIST_LIGHT registry entries (10 artists)

Light "why we feature them" artist-page entries (not biographies). House voice; no
curly quotes (straight apostrophes escaped as `\'` or contractions avoided); no
literal em-dash; no meta-narration / reader-commands / honesty-labels.

All slugs + dates web-verified against English Wikipedia (June 2026).

## Verified Wikipedia slugs + dates

| id | name | dates (verified) | wiki slug |
|----|------|------------------|-----------|
| breton | André Breton | 1896-02-19 to 1966-09-28 | `André_Breton` |
| ernst | Max Ernst | 1891-04-02 to 1976-04-01 | `Max_Ernst` |
| dali | Salvador Dalí | 1904-05-11 to 1989-01-23 | `Salvador_Dalí` |
| magritte | René Magritte | 1898-11-21 to 1967-08-15 | `René_Magritte` |
| miro | Joan Miró | 1893-04-20 to 1983-12-25 | `Joan_Miró` |
| carrington | Leonora Carrington | 1917-04-06 to 2011-05-25 | `Leonora_Carrington` |
| oppenheim | Méret Oppenheim | 1913-10-06 to 1985-11-15 | `Méret_Oppenheim` |
| de-chirico | Giorgio de Chirico | 1888-07-10 to 1978-11-20 | `Giorgio_de_Chirico` |
| masson | André Masson | 1896-01-04 to 1987-10-28 | `André_Masson` |
| tanguy | Yves Tanguy | 1900-01-05 to 1955-01-15 | `Yves_Tanguy` |

Notes:
- All ten given dates were correct as supplied; none needed fixing.
- de Chirico's Wikipedia result surfaced as `Chirico,_Giorgio_de`, but the canonical
  article slug is `Giorgio_de_Chirico` (verified by direct fetch).
- de Chirico is kept honest as a forerunner, not a card-carrying Surrealist: his
  metaphysical paintings predate Breton's 1924 manifesto by a decade and fed the
  movement rather than belonging to it.

## Paste-ready entries

```ts
{
  id: 'breton',
  name: 'André Breton',
  years: '1896–1966',
  nationality: 'French',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The ringleader',
  accent: ART_ACCENTS.green,
  why: 'Breton wrote the 1924 manifesto that gave Surrealism its name and its rulebook, then spent forty years deciding who was in the club and who got thrown out of it. He was more impresario than painter, but without his organizing (and his feuds) the loose crowd of dreamers never becomes a movement.',
  workIds: [],
  wiki: 'André_Breton',
},
{
  id: 'ernst',
  name: 'Max Ernst',
  years: '1891–1976',
  nationality: 'German-French',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The shape-shifter',
  accent: ART_ACCENTS.green,
  why: 'Ernst was the technical inventor of the bunch, forever finding new ways to let chance do the drawing: collage that stitched old engravings into nightmares, and frottage, rubbing pencil over textured surfaces to coax out monsters. If a Surrealist trick looks like magic, odds are Ernst worked it out first.',
  workIds: ['hat-makes-man', 'celebes', 'ernst-histoire'],
  wiki: 'Max_Ernst',
},
{
  id: 'dali',
  name: 'Salvador Dalí',
  fullName: 'Salvador Domingo Felipe Jacinto Dalí i Domènech',
  years: '1904–1989',
  nationality: 'Spanish',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The showman',
  accent: ART_ACCENTS.green,
  why: 'Dalí is the face everyone pictures when they hear the word Surrealism: the melting clocks, the waxed moustache, the gift for making a scene. He painted his hallucinations with the slick precision of an old master, which is exactly what makes them so unsettling.',
  workIds: ['persistence'],
  wiki: 'Salvador_Dalí',
},
{
  id: 'magritte',
  name: 'René Magritte',
  years: '1898–1967',
  nationality: 'Belgian',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The deadpan',
  accent: ART_ACCENTS.green,
  why: 'Magritte skipped the fever dreams and went for the quiet jolt instead: a pipe that insists it is not a pipe, a man in a bowler hat with an apple for a face. He painted everything in a flat, ordinary style, so the weirdness sneaks up on you.',
  workIds: ['treachery'],
  wiki: 'René_Magritte',
},
{
  id: 'miro',
  name: 'Joan Miró',
  years: '1893–1983',
  nationality: 'Spanish (Catalan)',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The dreamer',
  accent: ART_ACCENTS.green,
  why: 'Miró took Surrealism somewhere lighter, inventing a private alphabet of blobs, stars, and squiggly creatures that float on bright fields of color. He was an early hand at automatic drawing, letting the line wander wherever it wanted, and the results feel less like nightmares than like a child\'s cosmos.',
  workIds: ['harlequin'],
  wiki: 'Joan_Miró',
},
{
  id: 'carrington',
  name: 'Leonora Carrington',
  years: '1917–2011',
  nationality: 'British-Mexican',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The escapee',
  accent: ART_ACCENTS.green,
  why: 'Carrington walked out on a wealthy English upbringing to paint a world of hyenas, horses, and alchemical rituals all her own, then built a second life in Mexico when the war scattered the movement. For decades the men got the headlines; she outlived nearly all of them and turned out to be one of the most original imaginations the group ever had.',
  workIds: ['carrington-self'],
  wiki: 'Leonora_Carrington',
},
{
  id: 'oppenheim',
  name: 'Méret Oppenheim',
  years: '1913–1985',
  nationality: 'German-Swiss',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The object-maker',
  accent: ART_ACCENTS.green,
  why: 'At twenty-three Oppenheim lined a teacup, saucer, and spoon with fur, and made one of the most famous objects of the whole movement: an everyday thing turned faintly disturbing by a single wrong material. The fame nearly swallowed the rest of her long, restless career, which ran from jewelry to fountains.',
  workIds: ['object-fur'],
  wiki: 'Méret_Oppenheim',
},
{
  id: 'de-chirico',
  name: 'Giorgio de Chirico',
  years: '1888–1978',
  nationality: 'Italian',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The forerunner',
  accent: ART_ACCENTS.green,
  why: 'De Chirico got there first. His eerie empty piazzas, long shadows, and headless mannequins were painted a decade before anyone said the word Surrealism, and the young dreamers treated them like scripture. He was never really one of them, but his deserted city squares are the dream they all kept chasing.',
  workIds: ['song-of-love'],
  wiki: 'Giorgio_de_Chirico',
},
{
  id: 'masson',
  name: 'André Masson',
  years: '1896–1987',
  nationality: 'French',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'Automatism',
  accent: ART_ACCENTS.green,
  why: 'Masson pushed automatic drawing as far as it would go, letting his hand race across the page before his mind could catch up, then pouring glue and sand on canvas to see what shapes the accident handed him. He was chasing pictures straight out of the unconscious, with no editing in between, and decades later that loose, spontaneous gesture helped light the fuse for Jackson Pollock.',
  workIds: ['masson-auto'],
  wiki: 'André_Masson',
},
{
  id: 'tanguy',
  name: 'Yves Tanguy',
  years: '1900–1955',
  nationality: 'French-American',
  movement: 'Surrealism',
  movementId: 'sur',
  eraId: 'mod',
  role: 'The inner landscape',
  accent: ART_ACCENTS.green,
  why: 'A self-taught sailor who saw a de Chirico and decided on the spot to paint, Tanguy spent his life rendering one impossible place: vast, lonely plains scattered with soft bonelike forms that exist nowhere on Earth. Nobody else made the inside of a head feel so much like a real, far-off country.',
  workIds: ['tanguy-divis'],
  wiki: 'Yves_Tanguy',
},
```
