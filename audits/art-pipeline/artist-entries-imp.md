# Impressionism — ART_ARTIST_LIGHT registry entries

LIGHT "why we feature them" artist entries for 10 Impressionism artists. House voice (informal popular-history), why-we-feature, not biography. All dates and Wikipedia slugs web-verified (see ledger below).

```ts
const IMPRESSIONISM_ARTISTS: ArtistLight[] = [
  {
    id: 'monet',
    name: 'Claude Monet',
    years: '1840–1926',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'The light-chaser',
    accent: ART_ACCENTS.blue,
    why: "He gave the whole movement its name by accident: a critic sneered at his hazy harbor sketch called Impression, Sunrise, and the insult stuck as a banner. Monet spent fifty years chasing the same haystacks, cathedrals, and lily ponds across different hours and weathers, painting the light itself rather than the thing the light fell on.",
    workIds: ['impression-sunrise', 'grenouillere', 'gare-saint-lazare'],
    wiki: 'Claude_Monet',
  },
  {
    id: 'renoir',
    name: 'Pierre-Auguste Renoir',
    years: '1841–1919',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'Warmth & crowds',
    accent: ART_ACCENTS.blue,
    why: "Where other Impressionists chased weather, Renoir chased people, packing his canvases with dappled sunlight, flushed cheeks, and the easy pleasure of a Sunday crowd. He started out painting flowers on porcelain in a factory, and that decorative, glowing prettiness never left him.",
    workIds: ['moulin-galette', 'boating-party'],
    wiki: 'Pierre-Auguste_Renoir',
  },
  {
    id: 'pissarro',
    name: 'Camille Pissarro',
    years: '1830–1903',
    nationality: 'Danish-French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'The conscience',
    accent: ART_ACCENTS.blue,
    why: "The oldest of the group and the only one to show in all eight Impressionist exhibitions, Pissarro was the steady center who held the quarreling painters together. A born teacher and a committed anarchist, he mentored Cezanne and Gauguin and stayed loyal to working farms and muddy villages long after the others moved on.",
    workIds: [],
    wiki: 'Camille_Pissarro',
  },
  {
    id: 'degas',
    name: 'Edgar Degas',
    years: '1834–1917',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'The indoor eye',
    accent: ART_ACCENTS.blue,
    why: "Degas hated being called an Impressionist and almost never painted outdoors, working instead from memory and sharp draftsmanship under gaslight. He aimed his eye at rehearsal rooms, racetracks, and laundresses, catching people mid-gesture from odd, cropped angles he borrowed from Japanese prints and the new art of photography.",
    workIds: ['dance-class', 'absinthe'],
    wiki: 'Edgar_Degas',
  },
  {
    id: 'morisot',
    name: 'Berthe Morisot',
    years: '1841–1895',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'Founder not footnote',
    accent: ART_ACCENTS.blue,
    why: "Morisot was not a guest at the Impressionist table, she helped build it, showing in the very first 1874 exhibition and nearly every one after. Barred by her era from the cafes and studios the men used, she turned the world she could reach, drawing rooms, gardens, and nurseries, into some of the loosest and most daring brushwork in the whole group.",
    workIds: ['cradle'],
    wiki: 'Berthe_Morisot',
  },
  {
    id: 'cassatt',
    name: 'Mary Cassatt',
    years: '1844–1926',
    nationality: 'American',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'The American',
    accent: ART_ACCENTS.blue,
    why: "The only American in the inner circle, Cassatt crossed the Atlantic, talked her way into the group at Degas's invitation, and made the private bond between mothers and children her great subject. She also quietly shaped American taste, steering her wealthy friends to buy Impressionist work and seeding the museums back home.",
    workIds: [],
    wiki: 'Mary_Cassatt',
  },
  {
    id: 'sisley',
    name: 'Alfred Sisley',
    years: '1839–1899',
    nationality: 'British',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'Pure landscapist',
    accent: ART_ACCENTS.blue,
    why: "British by passport but French to the bone, Sisley was the one who never wavered, painting skies, rivers, and floods en plein air for his whole career while the others drifted toward figures and fashion. He was also the unlucky one, dying poor and largely unsold just before the prices for his quiet, luminous landscapes finally took off.",
    workIds: [],
    wiki: 'Alfred_Sisley',
  },
  {
    id: 'caillebotte',
    name: 'Gustave Caillebotte',
    years: '1848–1894',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'Painter & patron',
    accent: ART_ACCENTS.blue,
    why: "Rich enough to keep the broke ones afloat, Caillebotte bought his friends' canvases when nobody else would and willed the lot to France, which is how the state ended up with its first great Impressionist collection. As a painter he was the odd one out, trading soft haze for crisp, almost photographic city streets seen from vertigo-inducing angles.",
    workIds: ['paris-street'],
    wiki: 'Gustave_Caillebotte',
  },
  {
    id: 'manet',
    name: 'Édouard Manet',
    years: '1832–1883',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'The patriarch',
    accent: ART_ACCENTS.blue,
    why: "Manet scandalized Paris with flat, modern, unapologetic paintings years before the word Impressionism existed, and the younger rebels treated him as the father of the whole revolt. The irony is that he never once exhibited with them, chasing official Salon approval to the end while the movement he inspired carried on without him.",
    workIds: [],
    wiki: 'Édouard_Manet',
  },
  {
    id: 'bazille',
    name: 'Frédéric Bazille',
    years: '1841–1870',
    nationality: 'French',
    movement: 'Impressionism',
    movementId: 'imp',
    eraId: 'mod',
    role: 'The lost one',
    accent: ART_ACCENTS.blue,
    why: "Bazille was there at the start, sharing studios and paying the rent for Monet and Renoir when they had nothing, and his sunlit figures-in-landscapes pointed straight at what Impressionism would become. He never got to see it happen, killed in battle at twenty-eight in the Franco-Prussian War, four years before the first Impressionist show.",
    workIds: [],
    wiki: 'Frédéric_Bazille',
  },
];
```

## Verified Wikipedia slugs + dates (web-checked)

| id | name | years (verified) | nationality | wiki slug |
|----|------|------------------|-------------|-----------|
| monet | Claude Monet | 1840–1926 | French | Claude_Monet |
| renoir | Pierre-Auguste Renoir | 1841–1919 | French | Pierre-Auguste_Renoir |
| pissarro | Camille Pissarro | 1830–1903 | Danish-French | Camille_Pissarro |
| degas | Edgar Degas | 1834–1917 | French | Edgar_Degas |
| morisot | Berthe Morisot | 1841–1895 | French | Berthe_Morisot |
| cassatt | Mary Cassatt | 1844–1926 | American | Mary_Cassatt |
| sisley | Alfred Sisley | 1839–1899 | British | Alfred_Sisley |
| caillebotte | Gustave Caillebotte | 1848–1894 | French | Gustave_Caillebotte |
| manet | Édouard Manet | 1832–1883 | French | Édouard_Manet |
| bazille | Frédéric Bazille | 1841–1870 | French | Frédéric_Bazille |

Notes:
- All dates matched the prompt's dates exactly; no corrections needed.
- Slugs for Manet and Bazille carry accented characters (Édouard_Manet, Frédéric_Bazille); the live Wikipedia URLs percent-encode them (%C3%89douard_Manet, Fr%C3%A9d%C3%A9ric_Bazille) but the page-title slug form is as listed.
- Pissarro is "Danish-French" (born in the Danish West Indies); Sisley is "British" (British parents/citizenship, lived in France). Captured in the nationality field.
- Apostrophes inside the `why` strings (Degas's, friends', Cassatt's) are kept safe by using double-quoted TS string literals throughout.
```
