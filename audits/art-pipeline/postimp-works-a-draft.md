# Post-Impressionism — WORK reads, AUTHOR draft (batch A)

Author draft for three Post-Impressionist WORK reads, written **only** from
`audits/art-pipeline/postimp-works-a-factpack.md`. Mirrors the `BURIAL` /
`IMPRESSION_SUNRISE` shape in `src/lib/art-content.ts` and the `BuTown…BuAfterlife`
JSX pattern in `art-section-reader.tsx`. `accent` inherits POST_IMP's accent
(`ART_ACCENTS.green`). `chain.index` is 1/2/3 within this batch; `total:9`
(renumber across the full 9 at integration). Dimensions ft/in only, in the const
AND the prose. Not committed; not wired into live files.

NOTE on signatures: I kept the live convention where the function param types
`onZoom` but each body only destructures `{ accent }` (matching `BuTown` exactly).
Where a chapter actually calls `onZoom`, the function destructures `{ accent, onZoom }`.

---

## WORK 1 — The Starry Night (`starry-night`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Starry Night (Van Gogh, 1889). The flagship Post-Impressionism
// work read. Authored through the art content pipeline (fact pack → Opus →
// 5 gates → revise). Chapter prose in art-section-reader.tsx NARRATIVES['starry-night']
// (Sn… prefix). LEGENDS handled per fact pack: painted BY DAY in the studio
// (depicts the east-window view, village largely invented), not "from the window
// at night" and not "from memory"; "sold only one painting" is a myth (one
// DOCUMENTED sale, The Red Vineyard).
// ─────────────────────────────────────────────────────────────
export const STARRY_NIGHT: ArtWorkContent = {
  id: 'starry-night',
  name: 'The Starry Night',
  shortName: 'The Starry Night',
  year: 1889,
  artist: 'Vincent van Gogh',
  artistId: 'vangogh',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 5 in × 3 ft 1/4 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Acquired through the Lillie P. Bliss Bequest (by exchange), 1941',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 1, total: 9 },
  hook: 'A swirling night sky over a sleeping village, painted by daylight in an asylum studio, that its own maker called a failure.',
  heroImage: ART_IMG.starryNight,
  heroCredit: 'Van Gogh, The Starry Night, 1889 · Museum of Modern Art, New York',
  heroAspect: 1.25, // 73.7 × 92.1 cm → W/H ≈ 1.25
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: 'June 1889', k: 'Painted' },
    { v: '2′5″ × 3′¼″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'asylum', eyebrow: 'Saint-Rémy · 1889', dateLabel: 'May 1889', title: 'The man at the barred window', blurb: 'After the breakdown in Arles, Van Gogh checks himself into the Saint-Paul asylum and is given a ground-floor room as a studio and an east-facing bedroom that looks out over the valley.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '~17–18 June 1889', title: 'Painted by day, from a dawn he remembered', blurb: 'Not painted at the window at night. Made in the studio in daylight, working up the pre-dawn view he had watched with the morning star big over the hills, the village largely invented.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 5 in × 3 ft ¼ in', title: 'The stars and a rolling sky', blurb: 'The cypress, the crescent moon, the one star he named, the invented steeple, the real Alpilles, and the great curling eddies that have no model in any real sky.', progress: 0.56 },
    { id: 'reception', eyebrow: 'His own verdict', dateLabel: 'Nov 1889', title: 'The picture he called a failure', blurb: 'Van Gogh thought it a near-miss, told Bernard he had reached for stars too big, and it sold no better than the rest. He did not sell only one painting in his life, but he never sold this one.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1890–today', title: 'How a failure became a touchstone', blurb: 'His brother dead within months, the estate carried by Theo’s widow Jo, the canvas passing through dealers to MoMA in 1941, where the 20th century made it one of the most recognizable paintings on Earth.', progress: 0.96 },
  ],
  provenance: [
    { year: '1889–1890', who: 'Vincent van Gogh (the artist)', place: 'Saint-Rémy / Auvers', note: 'Painted in June 1889 at the Saint-Paul-de-Mausole asylum. Never sold in his lifetime; passed to his brother Theo on Vincent’s death in July 1890.', price: null },
    { year: '1890–1900', who: 'Theo van Gogh, then Johanna (Jo) van Gogh-Bonger', place: 'Paris / Netherlands', note: 'Theo died in January 1891; his widow Jo inherited the estate and spent her life building Van Gogh’s posthumous reputation.', price: null },
    { year: '1900–1906', who: 'Julien Leclercq · Émile Schuffenecker · (repurchased by Jo van Gogh-Bonger)', place: 'Paris', note: 'Sold to the poet Leclercq in 1900, to the painter-collector Schuffenecker in 1901, then bought back by Jo in 1905 before passing to the Oldenzeel Gallery, Rotterdam, in 1906.', price: null },
    { year: '1906–1938', who: 'Georgette P. van Stolk', place: 'Rotterdam', note: 'Held in a Rotterdam collection for some three decades.', price: null },
    { year: '1938–1941', who: 'Paul Rosenberg (dealer)', place: 'Paris / New York', note: 'Acquired by the dealer Rosenberg, who fled France for the United States in 1940.', price: null },
    { year: '1941–today', who: 'Museum of Modern Art', place: 'New York', note: 'Acquired through the Lillie P. Bliss Bequest, by exchange (traded for rather than bought with cash). Accession 472.1941. There the 20th century made it canonical. On permanent view.', price: 'by exchange', museum: true },
  ],
  figures: [
    { name: 'Vincent van Gogh', role: 'The painter', palette: ['#2a3a6a', '#c8b84a', '#0e1428'] },
    { name: 'Theo van Gogh', role: 'Brother · first owner', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Jo van Gogh-Bonger', role: 'Built the reputation', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Émile Bernard', role: 'Painter · letter on the “failure”', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Anna Boch', role: 'Bought The Red Vineyard', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
  ],
  annotations: [
    { label: 'The one star he actually named', where: 'The single largest, brightest “star,” out toward the center of the sky, just to the right of the central cypress', detail: 'This is not a star at all but the planet Venus, the morning star, the one celestial body Van Gogh names in his letter to Theo, where he wrote that he had seen the countryside before sunrise with nothing but the morning star, which looked very big. It is the single element on the canvas you can tie to a documented observation, and astronomical records confirm Venus was prominent at dawn in Provence that spring.' },
    { label: 'The moon that is astronomically wrong', where: 'Upper right, the glowing yellow-orange crescent', detail: 'The moon glows as a thin crescent, but on the real date the moon over Saint-Rémy was a waning gibbous, nearly full. So the crescent is an invention, not a record. It is the cleanest proof on the canvas that this is a composed picture, not a transcription of one night’s sky.' },
    { label: 'The flame that is a tree', where: 'Foreground left, the dark spire that climbs the whole left edge', detail: 'A cypress, pushed far larger and closer than life until it reads like a dark green flame licking up into the stars. Cypresses were a Saint-Rémy obsession Van Gogh painted again and again that year. Nothing forces it to that size; he chose to exaggerate it, and the deliberate distortion is the heart of why the picture feels modern rather than observed.' },
    { label: 'The village that was never there', where: 'Lower center, the cluster of houses around a tall, thin church steeple', detail: 'The sleeping town sits under the sky with a tall narrow steeple rising from it, and that steeple is more Dutch and northern than anything in Provence. The village is largely invented, not the actual view from his barred window. It is the tell that the whole picture is synthesized in the studio, the real and the imagined stitched together.' },
    { label: 'The sky that no sky has ever done', where: 'Across the whole upper half, the great curling eddies and the scattered stars', detail: 'The stars (roughly a dozen, by the usual count) sit inside enormous rolling spirals of paint that no real night sky has ever produced. This is pure expressive invention, laid on in thick ridges of pigment (impasto, paint heaped so high the brush leaves standing furrows you can read as texture). The swirls are often read as a vision of his illness, but that is interpretation, not fact; Van Gogh himself denied a romantic or religious program for the picture.' },
    { label: 'The one real thing along the bottom of the sky', where: 'The low band of rolling blue hills along the horizon, behind the village', detail: 'These are the Alpilles, the low mountain range just south of Saint-Rémy, and they are the one topographically real backdrop element in the painting. Everything above them swirls into invention; the hills are the thin thread of the actual valley he could see.' },
  ],
  lineage: {
    parents: [ { label: 'Impressionism', mode: 'art' }, { label: 'Japanese prints', mode: 'art' }, { label: 'The asylum at Saint-Rémy', mode: 'civ' } ],
    children: [ { label: 'Expressionism', mode: 'art' }, { label: 'Fauvism', mode: 'art' }, { label: 'Modern painting', mode: 'art' } ],
  },
}
```

### Chapter functions (Sn… prefix; inner keys = sections[].id)

```tsx
function SnAsylum({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Saint-Rémy · 1889" title="The man at the barred window" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of 1889 a Dutch painter walked, of his own free will, into a mental asylum in the south of France and asked to be let in. He was <strong>Vincent van Gogh</strong> (1853&ndash;1890), and his larger life is told in the Post-Impressionism overview one level up in this app (the school that took the Impressionists&rsquo; bright broken color and pushed it back toward structure and feeling). What matters here is the state he was in. The previous December, in the town of Arles, he had suffered a breakdown so severe that he cut off part of his own ear, the crisis that ended his short, doomed attempt to live and work alongside <strong>Paul Gauguin</strong> (the French painter whose dream of a shared &ldquo;Studio of the South&rdquo; Van Gogh had bought into completely, and who is a major figure in the Post-Impressionism overview one level up). On <strong>8 May 1889</strong> he admitted himself to the <strong>Saint-Paul-de-Mausole asylum</strong> at <strong>Saint-R&eacute;my-de-Provence</strong>, a former monastery in the hills.
      </p>
      <p style={proseStyle}>
        He was not, however, a man who had stopped working. The asylum gave him two rooms: a bedroom with an east-facing window, fitted with iron bars, that looked out over the valley, and a separate ground-floor room he could use as a studio. That arrangement is the whole geography of this painting, so hold it: he <em>saw</em> the night sky from the barred bedroom window, and he <em>painted</em> in the studio downstairs. The two were not the same room.
      </p>

      <SectionHeader accent={accent} label="The view, not the cell" title="What the window actually framed" />
      <p style={proseStyle}>
        Out that east window lay the valley of Saint-R&eacute;my and, low along the horizon, the <strong>Alpilles</strong> (al-PEE), a small rolling mountain range. Before dawn the sky over those hills filled with stars and, that particular spring, with one very bright point of light low in the east. The night sky of this valley became a recurring subject for him through the months he spent locked up here. So the famous story that <em>The Starry Night</em> shows &ldquo;the view from his asylum window&rdquo; is true in one careful sense and badly misleading in another, and untangling that is the next chapter. The short version: he was looking at a real piece of sky, and he was about to do something to it that no window ever showed.
      </p>
    </article>
  )
}

function SnMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="Not at night, not from the window" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the legend, and here is the fact, and they are worth keeping apart, because almost everyone gets this picture&rsquo;s making wrong. The legend says Van Gogh stood at his barred asylum window in the dark and painted the night as he watched it. He did not. <em>The Starry Night</em> was painted <strong>by day, in his ground-floor studio</strong>, in the week of about <strong>17&ndash;18 June 1889</strong>. It depicts a reworked version of the view from his east-facing bedroom window <em>before sunrise</em>, but it was made downstairs, in daylight, from observation and memory and a great deal of invention. It was not painted at the window, it was not painted at night, and it was not simply &ldquo;painted from memory&rdquo; either. The honest description is the dull one: a daytime studio picture worked up from a dawn he had watched.
      </p>
      <p style={proseStyle}>
        We can be this exact because he wrote it down. In a letter to his brother Theo of about 18 June 1889 he described the dawn that fed the picture: <em>&ldquo;this morning I saw the countryside from my window a long time before sunrise, with nothing but the morning star, which looked very big.&rdquo;</em> That &ldquo;morning star&rdquo; is the planet <strong>Venus</strong>, which astronomical records confirm hung bright at dawn over Provence that spring; it is the one thing in the picture you can pin to a documented observation. In the same stretch of letters he mentions, almost in passing, that he now had <em>&ldquo;a new study of a starry sky&rdquo;</em> (a <em>study</em>, note, not a masterpiece).
      </p>

      <SectionHeader accent={accent} label="How long, and what was invented" title="A week, and a village from nowhere" />
      <p style={proseStyle}>
        It came together inside roughly that single week of June 1889. Resist the temptation to make it more romantic than that: there is no evidence it was painted &ldquo;in one night&rdquo; or in one feverish sitting, and the &ldquo;one night&rdquo; story is exactly the kind of thing that gets attached to famous pictures after the fact. It was a daytime studio work, made over days, and the exact hours are simply unknown.
      </p>
      <p style={proseStyle}>
        And it was heavily <em>composed</em>, not transcribed. The valley and the Alpilles were real. The sleeping village beneath the sky, with its tall thin church steeple, was largely <strong>invented</strong>, and the steeple in particular looks more like a northern Dutch church than anything in Provence. The great rolling spirals of the sky have no model in any sky that has ever existed. The cypress in the foreground is pushed far past life-size. Van Gogh took a real dawn and built an unreal night out of it, which is the whole reason the picture matters and the whole reason &ldquo;the view from his window&rdquo; is only half the truth.
      </p>
    </article>
  )
}

function SnLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Eleven stars and a rolling sky" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the size, because it surprises people: <em>The Starry Night</em> is not a wall-filler. It is about <strong>2 feet 5 inches tall and 3 feet a quarter-inch wide</strong> (73.7 by 92.1 centimeters, the museum&rsquo;s measurement), an easel-sized oil on canvas. All of that turbulence is packed into a picture you could carry under one arm. Now walk through it, top to bottom.
      </p>
      <p style={proseStyle}>
        The sky is the event. It is built in thick <strong>impasto</strong> (paint heaped on so heavily that the brush leaves standing ridges and furrows you can read as texture) in deep ultramarine and cobalt blue, with the stars and moon scratched in warm yellow. The whole upper half rolls and curls in enormous spirals, eddies of paint that no real night sky has ever produced. They are pure invention, the single most important fact about the picture: this is a sky <em>felt</em> and <em>made</em>, not a sky observed.
      </p>

      <SectionHeader accent={accent} label="The marks that are real, and the marks that aren't" title="Venus, the wrong moon, the cypress" />
      <p style={proseStyle}>
        Find the brightest point first. Out toward the center of the sky, just to the right of the dark central tree, sits the largest and warmest &ldquo;star.&rdquo; That is not a star but the planet <strong>Venus</strong>, the morning star Van Gogh named in his letter, and the one celestial body here you can tie to something he actually saw. Then look upper right, at the glowing crescent <strong>moon</strong>: it is astronomically wrong. On the real date the moon was a waning gibbous, nearly full, not a thin crescent. The crescent is a choice, not a record, one more proof the picture is composed.
      </p>
      <p style={proseStyle}>
        Down the left edge climbs the <strong>cypress</strong>, a dark green spire pushed far larger and closer than life until it reads like a flame. Cypresses were a Saint-R&eacute;my obsession he painted over and over that year, and they carry an old freight: across Provence the cypress is the tree of graveyards and mourning, the dark spire that stands over the dead. Van Gogh exaggerates its scale on purpose and stands it in the foreground so that the one plant most tied to death rises straight up through the picture, the single living thing tall enough to bridge the sleeping earth and the churning sky.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#2a3a6a', '#c8b84a', '#0e1428']}
        imageUrl={ART_IMG.starryNight}
        ratio="5/4"
        alt="Van Gogh, The Starry Night, the whole canvas"
        caption={<>Van Gogh,{' '}<em>The Starry Night</em>, 1889. Museum of Modern Art, New York.</>}
        rights="Public domain in the US (painting 1889). Wikimedia Commons (Google Art Project)."
      />

      <SectionHeader accent={accent} label="The earth below" title="The invented village, the one real range" />
      <p style={proseStyle}>
        Now the lower band. The sleeping <strong>village</strong> sits in the dead center, small houses with little yellow windows clustered around a <strong>tall, thin church steeple</strong>. The village is largely invented, and the steeple in particular is more northern-Dutch than Proven&ccedil;al, the clearest sign that the picture is synthesized rather than transcribed. Behind the town runs the one topographically real element: the low <strong>rolling blue hills of the Alpilles</strong>, the range just south of Saint-R&eacute;my. Above them, the <strong>stars</strong> (roughly a dozen, by the usual count) blaze inside their spirals. Real range, real planet, real cypress motif; invented village, invented moon-phase, invented sky. That mixture is the whole picture.
      </p>
    </article>
  )
}

function SnReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="His own verdict" title="The picture he called a failure" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he strangest thing about the most reproduced night sky in the world is that the man who painted it did not think it had worked. Van Gogh called it a &ldquo;night study,&rdquo; and in a letter of late November 1889 to his fellow painter <strong>&Eacute;mile Bernard</strong> he described it as a relative <strong>failure</strong>, saying he had &ldquo;reached for stars that are too big.&rdquo; That self-criticism was not modesty; it was a position in a real argument. He and Gauguin had quarreled for months about whether to paint from the imagination or from nature, and Van Gogh, who distrusted painting purely from the head, suspected that in <em>The Starry Night</em> he had drifted too far into invention. The picture we treat as his triumph, he treated as a warning to himself.
      </p>
      <p style={proseStyle}>
        It was certainly no triumph in the market. The Starry Night was <strong>never sold in his lifetime</strong>, and it sold no better than the rest of his work, which is to say not at all. Its entire fame is posthumous; in 1889 it was a study a sick painter half-disowned.
      </p>

      <SectionHeader accent={accent} label="The myth to put down" title="“He only ever sold one painting”" />
      <p style={proseStyle}>
        Which is the moment to kill a famous line, because it always attaches itself here. You will hear that Van Gogh &ldquo;only ever sold one painting in his whole life.&rdquo; That is a <strong>myth</strong>. What is true is narrower: <em>The Red Vineyard</em> is the only painting we can <strong>document</strong> being sold, bought by the Belgian painter Anna Boch for about 400 francs out of the Les XX exhibition in Brussels in early 1890. But the Van Gogh Museum itself records that he also <em>traded</em> works, that an uncle commissioned some, and that there is evidence of at least one other sale. So &ldquo;only one <em>documented</em> sale&rdquo; is fair; the flat &ldquo;he sold only one painting ever&rdquo; is not. Either way, it does not change this picture&rsquo;s fate: nobody bought <em>The Starry Night</em> while he lived.
      </p>
    </article>
  )
}

function SnAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="After" title="How a failure became a touchstone" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he afterlife of <em>The Starry Night</em> is almost entirely a 20th-century story, and it begins with a death and a widow. Van Gogh died in July 1890; his brother <strong>Theo</strong>, who had supported him and held his work, died only six months later, in January 1891. The estate (hundreds of unsold canvases, this one among them) passed to Theo&rsquo;s widow, <strong>Johanna van Gogh-Bonger</strong>, usually called Jo. It is no exaggeration to say she invented Van Gogh&rsquo;s reputation: she spent her life placing, lending, and promoting the work until the world caught up.
        </p>
        <p style={proseStyle}>
          The Starry Night itself then took the long way to the wall it hangs on now. It passed through a chain of European hands: sold to the poet Julien Leclercq in 1900, to the painter Schuffenecker in 1901, bought back by Jo in 1905, then on to a Rotterdam gallery and a Rotterdam collector for three decades, then to the dealer Paul Rosenberg in 1938, who fled France for the United States as the war closed in.
        </p>

        <SectionHeader accent={accent} label="1941" title="To MoMA, by exchange" />
        <p style={proseStyle}>
          In <strong>1941</strong> it reached the <strong>Museum of Modern Art</strong> in New York, acquired &ldquo;through the Lillie P. Bliss Bequest, by exchange,&rdquo; which means MoMA did not pay cash for it but traded other works, funded by a bequest, to get it. And there, in the institution built to canonize modern art, the picture its own maker had called a failure became, in MoMA&rsquo;s own words, a touchstone of modern art and one of the most recognizable paintings in the Western canon.
        </p>
        <p style={proseStyle}>
          That is the whole arc, worth stating flat: a daytime studio study, worked up by a sick man in an asylum from a dawn he had watched through a barred window, half-disowned by its maker as reaching for stars too big, unsold in his lifetime, then carried by a widow&rsquo;s devotion through forty years of European collections to a New York museum, where the century that came after Van Gogh made it immortal. The fame is real. He never saw any of it.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="Paris"
        when="1889 · the same summer"
        title="Paris builds a tower nobody asked for."
        body="As Van Gogh paints his swirling sky in a Provence asylum, Paris opens the 1889 Exposition Universelle, the world’s fair whose centerpiece is Gustave Eiffel’s new iron tower, denounced by critics as a monstrous eyesore and destined to become the symbol of the city. The art world is gathering in the capital a few hundred miles north to celebrate itself, while the painter who will outshine all of it works quietly in a locked institution in the south."
        palette={['#5a6a72', '#2e3a42', '#0e1014']}
        ctaLabel="Read ‘Belle Époque Paris’"
      />
    </>
  )
}
```

### Fact ledger — Starry Night

| Prose / const claim | Fact-pack item |
|---|---|
| Vincent van Gogh, 1853–1890 | §1 Identity / Artist |
| Painted June 1889, week of ~17–18 June | §1 Date; Making |
| Oil on canvas; 73.7×92.1 cm → 2 ft 5 in × 3 ft ¼ in | §1 Medium; Dimensions |
| MoMA; acquired 1941, Lillie P. Bliss Bequest by exchange; acc. 472.1941 | §1 Location/accession/credit |
| Provenance chain (Theo→Jo→Leclercq→Schuffenecker→Jo→Oldenzeel→van Stolk→Rosenberg→MoMA) | §1 Provenance chain |
| Admitted self 8 May 1889 to Saint-Paul-de-Mausole, Saint-Rémy; ear/Gauguin crisis Dec 1888 | §1 Where it came from |
| East-facing barred bedroom window + separate ground-floor studio | §1 Where it came from |
| Painted BY DAY in studio, depicts pre-sunrise east-window view, village invented; NOT "at night/from window/from memory" | §1 The making; LEGEND note |
| "morning star…looked very big" = Venus; confirmed prominent at dawn that spring; positioned toward center of sky just right of cypress (NOT "low") per MoMA/Wikipedia | §1 Making [DOCUMENTED]; pointer 1 (Venus position corrected per fact-check gate) |
| "new study of a starry sky" | §1 Making [DOCUMENTED] |
| Impasto, swirling strokes, ultramarine/cobalt, yellow stars | §1 Making |
| Done within ~the single week; NOT "one night/one sitting" | §1 Making ⚠️ |
| Crescent moon astronomically wrong (real = waning gibbous) | §1 pointer 2 |
| Cypress exaggerated, a Saint-Rémy motif; cypress = traditional Provençal tree of graveyards/mourning | §1 pointer 3 (death-symbol added per comprehensiveness gate; general art-historical knowledge) |
| Village + Dutch/northern steeple largely invented | §1 pointer 4 |
| Stars (count given as "roughly a dozen / eleven by usual count," NOT asserted flat); invented swirls = expressive invention; illness reading is interpretation, he denied a program | §1 pointer 5; LEGEND (star count hedged per fact-check gate — count is disputed) |
| Alpilles = real low range south of Saint-Rémy | §1 pointer 6 |
| Van Gogh called it a failure / "stars too big," Nov 1889 letter to Bernard; imagination-vs-nature argument w/ Gauguin | §1 Reception [DOCUMENTED] |
| Never sold in lifetime; fame posthumous | §1 Reception; LEGEND |
| "only one painting sold" = myth; only documented sale = The Red Vineyard, Anna Boch ~400 fr, Les XX Brussels early 1890; also traded/uncle | §1 LEGEND/MYTH |
| Theo dies Jan 1891; Jo builds reputation; → MoMA 1941, "touchstone of modern art" | §1 Afterlife |
| Eiffel Tower / 1889 Exposition Universelle (Meanwhile) | General knowledge framing only; not a load-bearing work claim |

---

## WORK 2 — Bedroom in Arles (`bedroom-arles`, FIRST / Van Gogh Museum version)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Bedroom (Bedroom in Arles), Van Gogh, FIRST version, Oct 1888,
// Van Gogh Museum, Amsterdam (F482 / JH1608). Three autograph versions exist;
// this read covers ONLY the first. Authored through the art content pipeline.
// Chapter prose in art-section-reader.tsx NARRATIVES['bedroom-arles'] (Bd… prefix).
// LEGEND handled: painted "quickly, mid-Oct 1888," NOT "in one day."
// ─────────────────────────────────────────────────────────────
export const BEDROOM_ARLES: ArtWorkContent = {
  id: 'bedroom-arles',
  name: 'The Bedroom',
  shortName: 'Bedroom in Arles',
  year: 1888,
  artist: 'Vincent van Gogh',
  artistId: 'vangogh',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 4 in × 2 ft 11 1/2 in',
  location: 'Van Gogh Museum, Amsterdam',
  acquired: 'Vincent van Gogh Foundation, 1962 (on permanent loan)',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 2, total: 9 },
  hook: 'His own small room at the Yellow House, painted flat as a Japanese print, where the color was meant to do all the work and make the mind rest.',
  heroImage: ART_IMG.vanGoghBedroomArles,
  heroCredit: 'Van Gogh, The Bedroom (first version), 1888 · Van Gogh Museum, Amsterdam',
  heroAspect: 1.25, // 72 × 90 cm → W/H = 1.25
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: 'Oct 1888', k: 'Painted' },
    { v: '2′4″ × 2′11½″', k: 'Dimensions' },
    { v: 'Van Gogh Museum', k: 'Now at' },
  ],
  sections: [
    { id: 'yellow-house', eyebrow: 'Arles · 1888', dateLabel: 'Oct 1888', title: 'The Yellow House, waiting for Gauguin', blurb: 'Van Gogh has rented a little house on the Place Lamartine and dreams of a “Studio of the South,” a colony of painters. Worn out and bedridden for days, he paints his own bedroom as a picture of rest, just before Gauguin arrives.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'mid-Oct 1888', title: 'Where the color does the job', blurb: 'Painted quickly over a few days, not in one day. Flat, plain tints with the shadows removed, the way of the Japanese prints he loved, with a color scheme he wrote out for Theo line by line.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 4 in × 2 ft 11½ in', title: 'A tilted room for one sleeper', blurb: 'The bed, the two chairs, the two pillows, the friends’ portraits on the wall, the shuttered window, and a floor that tilts up at you, which is part real, because the room itself was a trapezoid.', progress: 0.56 },
    { id: 'flood', eyebrow: 'Why there are three', dateLabel: '1889', title: 'A flood, and two copies', blurb: 'While Van Gogh is hospitalized in 1889, river flooding water-damages this first canvas in storage, and it is relined to save it. That is why he later painted a full-size copy and a smaller one. This is the original.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1890–today', title: 'The room that never left the family', blurb: 'No great sale, no key exhibition in his lifetime; fame built by the estate. The first version passed down through the family to the Van Gogh Foundation in 1962 and the Van Gogh Museum, and is now among the most reproduced images he ever made.', progress: 0.96 },
  ],
  provenance: [
    { year: '1888–1890', who: 'Vincent van Gogh (the artist)', place: 'Arles', note: 'Painted mid-October 1888 in the Yellow House. The first version never left the family estate. To his brother Theo on Vincent’s death in 1890.', price: null },
    { year: '1890s–1962', who: 'Jo van Gogh-Bonger, then V. W. van Gogh (nephew)', place: 'Netherlands', note: 'Theo’s widow Jo, then the artist’s nephew Vincent Willem van Gogh, kept the canvas in the family across two generations.', price: null },
    { year: '1962–today', who: 'Vincent van Gogh Foundation', place: 'Amsterdam', note: 'The nephew established the Vincent van Gogh Foundation in 1962, which has held the painting since and placed it on permanent loan to the Van Gogh Museum (opened 1973). Inv. s0047V1962; catalogue F482 / JH1608. On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Vincent van Gogh', role: 'The painter', palette: ['#c8a72a', '#3a4a8a', '#1a1408'] },
    { name: 'Theo van Gogh', role: 'Brother · received the letters', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Paul Gauguin', role: 'The painter he was waiting for', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'Eugène Boch', role: 'Painter friend, portrait on the wall', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Paul-Eugène Milliet', role: 'Soldier friend, portrait on the wall', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
  ],
  annotations: [
    { label: 'A floor that tilts, for a real reason', where: 'The whole lower half, the red-tiled floor running up toward the bed', detail: 'The floor tips up at you and the walls seem to lean, and the lazy reading is that Van Gogh simply could not do perspective. He could. The real bedroom was not rectangular; it was a trapezoid, with an obtuse angle at the front-left and an acute angle at the right, so part of the “wrong” perspective is the genuinely odd shape of the room, and part is his deliberate flattening. Both at once.' },
    { label: 'A bed for one, framed as rest', where: 'Right side, the wooden bed with two pillows and a turned-down red coverlet', detail: 'Two pillows lie on a bed turned down for a single sleeper. It would be easy to read the empty single bed as loneliness, but that is later interpretation laid over the picture. In his own letter Van Gogh framed the whole room as an image of rest and sleep, made while he was worn out and recovering, not as a portrait of isolation.' },
    { label: 'The butter-yellow furniture he named', where: 'The pair of rush-seated chairs, one at the foot of the bed and one by the wall', detail: 'The two simple chairs with woven rush seats are the “fresh butter” yellow Van Gogh listed by name in his letter to Theo, where he wrote out the color of every object in the room. They let you point straight at his documented palette: the chairs and bed butter-yellow, the floor red tiles, the basin blue, the window green.' },
    { label: 'Two friends on the wall', where: 'Upper right, the pair of small framed portraits above the bed', detail: 'In this first version the pictures on the wall are small portraits of two friends, usually identified as the poet Eugène Boch and the soldier Paul-Eugène Milliet (the exact which-is-which differs between sources, so read them simply as portraits of friends). These wall pictures are the tell that tells the three versions of the Bedroom apart.' },
    { label: 'The room’s one opening', where: 'The back wall, the green shuttered casement window', detail: 'At the back, a shuttered casement window in green looks out onto the Place Lamartine and the public garden outside the Yellow House. It is the single opening to the world in an otherwise closed, snug room, the seam between Van Gogh’s private space of rest and the street.' },
    { label: 'Color instead of shadow', where: 'Everywhere, the broad flat areas of unmodelled color', detail: 'Look for the cast shadows under the bed, the chairs, the table, and you will not find them. Van Gogh wrote that he had removed the shadows and cast shadows and colored the room in flat, plain tints “like the Japanese prints.” The flatness is his own stated technique, not a failing, and it is why the room reads as a pattern of pure color rather than a modelled, three-dimensional box.' },
  ],
  lineage: {
    parents: [ { label: 'Japanese prints', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'The Yellow House, Arles', mode: 'civ' } ],
    children: [ { label: 'Expressionism', mode: 'art' }, { label: 'Fauvism', mode: 'art' }, { label: 'Flat-color modern painting', mode: 'art' } ],
  },
}
```

### Chapter functions (Bd… prefix; inner keys = sections[].id)

```tsx
function BdYellowHouse({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Arles · 1888" title="The Yellow House, waiting for Gauguin" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1888 <strong>Vincent van Gogh</strong> (1853&ndash;1890), whose larger story is told in the Post-Impressionism overview one level up, rented a small house at <strong>2, Place Lamartine</strong> in <strong>Arles</strong>, a town in the south of France. He painted its outside walls and called it the <strong>Yellow House</strong>, and he had a dream for it: it would become a &ldquo;Studio of the South,&rdquo; a colony where painters lived and worked together. The first painter he hoped to lure was <strong>Paul Gauguin</strong>, and through the autumn of 1888 Van Gogh furnished and decorated the house to be ready for him.
      </p>
      <p style={proseStyle}>
        It was while preparing the house and waiting for a friend that he painted his own bedroom. By his own account he had just been <strong>worn out and bedridden for several days</strong>, and he conceived the picture as an image of <strong>rest</strong>. This is the detail that corrects every gloomy reading of the painting that came later: he did not paint the room as a cell or a symbol of his loneliness. He painted it as a place to sleep, made by a tired man, just weeks before Gauguin actually arrived (the two months that followed, which ended in the breakdown and the severed ear, are another story; this picture comes <em>before</em> all that).
      </p>

      <SectionHeader accent={accent} label="A note on which Bedroom this is" title="One of three" />
      <p style={proseStyle}>
        One thing to fix before you look. There are <strong>three</strong> versions of this painting, all by Van Gogh&rsquo;s own hand, and they look nearly identical. This read is about the <strong>first</strong> one, painted in mid-October 1888 and now in the <strong>Van Gogh Museum in Amsterdam</strong>. He painted the other two the following year (a full-size copy now in Chicago and a smaller one now in Paris), and a later chapter explains exactly why. For now: everything described here is the original, the one he made in the Yellow House while he still had hopes for it.
      </p>
    </article>
  )
}

function BdMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="Where the color does the job" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        e know more about how Van Gogh made this picture than almost any other, because he wrote it all down for his brother Theo in a letter as he was painting it, in mid-October 1888. (One legend to put down first: you will read that he painted the Bedroom &ldquo;in a single day.&rdquo; That is not firmly documented and is best not asserted. The safe version, the one the record supports, is that he painted it <strong>quickly, over a short span in mid-October 1888</strong>.)
      </p>
      <p style={proseStyle}>
        His stated aim was startlingly simple. The picture, he told Theo, was &ldquo;simply my bedroom, but <strong>the color has to do the job here</strong>,&rdquo; meant &ldquo;to be suggestive of rest or of sleep in general,&rdquo; so that &ldquo;looking at the painting should rest the mind, or rather the imagination.&rdquo; In other words, the room is not really the subject. The <em>color</em> is the subject, and the color&rsquo;s job is to make you feel calm. That is the whole intention of the painting, in his own words.
      </p>

      <SectionHeader accent={accent} label="Flat as a print" title="Shadows off, the Japanese way" />
      <p style={proseStyle}>
        In the same letter he names his technique just as plainly: &ldquo;the shadows and cast shadows are removed; it&rsquo;s colored in flat, plain tints like the <strong>Japanese prints</strong>.&rdquo; This matters. The standard European way to make a room look real is to model every object with light and shadow so it bulges into three dimensions. Van Gogh did the opposite on purpose. He stripped the cast shadows out and laid the room down in broad, flat areas of unmixed color, the way the Japanese woodblock prints he collected and admired handled space: as pattern, not as modeled volume. The flatness people sometimes mistake for clumsiness is a deliberate borrowing, and it is his own description, not a later art-historian&rsquo;s guess.
      </p>
      <p style={proseStyle}>
        He even wrote out the color scheme object by object, which lets us see exactly what he <em>intended</em> (some of it has shifted with age, and the walls now read bluer than the &ldquo;pale violet&rdquo; he names). His list: walls pale violet, floor red tiles, bed and chairs fresh-butter yellow, sheets and pillows a very pale lemon green, the coverlet scarlet, the window green, the washstand orange, the basin blue, the doors lilac. To make sure Theo could picture it, he drew small sketches of the composition right inside the letters, to Theo and to Gauguin both.
      </p>
    </article>
  )
}

function BdLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A tilted room for one sleeper" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it and you feel the tilt before you understand it. The red-tiled floor rushes up toward you as if the whole room were tipping forward to spill its furniture into your lap; the far wall leans; the bed and chairs sit at angles that do not quite agree with one another. It is a small canvas for all that motion, about <strong>2 feet 4 inches tall and 2 feet 11&frac12; inches wide</strong> (72 by 90 centimeters), a picture you could carry under one arm, and yet the little room inside it will not hold still.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#c8a72a', '#3a4a8a', '#1a1408']}
        imageUrl={ART_IMG.vanGoghBedroomArles}
        ratio="5/4"
        alt="Van Gogh, The Bedroom (first version), the whole canvas"
        caption={<>Van Gogh,{' '}<em>The Bedroom</em> (first version), 1888. Van Gogh Museum, Amsterdam.</>}
        rights="Public domain in the US (painting 1888). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The shape of the box" title="Why the corner won't sit square" />
      <p style={proseStyle}>
        Track the line where the two walls meet at the back, then follow each wall forward, and you will see why the box never reads as square: the room narrows and widens at the wrong rate, the corners refusing to behave. The easy verdict is that Van Gogh could not draw perspective. He could. The real bedroom was a <strong>trapezoid</strong> (a four-sided shape with no right angles), wider at the front-left corner and pinched sharper on the right, so the genuine geometry of the room was already odd before he touched it. He then flattened what was left, pressing the depth out of it. The leaning walls are part true measurement, part deliberate squash, and watching the two fight each other is most of the picture&rsquo;s strange energy.
      </p>

      <SectionHeader accent={accent} label="The one way out" title="The window, and the single recession" />
      <p style={proseStyle}>
        Now find the one place the eye is allowed to travel <em>back</em> rather than up. At the rear wall sits a green shuttered <strong>casement window</strong>, and it is the only opening in the room, the single seam where the snug box lets in the outside (it looks onto the Place Lamartine and the public garden). Above the bed hang two small <strong>framed portraits</strong>, in this first version two friends, usually named as the painter Eug&egrave;ne Boch and the soldier Paul-Eug&egrave;ne Milliet (sources disagree on which is which, so read them simply as friends). Those wall pictures are tiny, but they are load-bearing: the pictures on the wall are the detail that tells the three versions of the Bedroom apart.
      </p>

      <SectionHeader accent={accent} label="What flatness looks like" title="No shadow anywhere" />
      <p style={proseStyle}>
        Here is the experiment the last chapter promised, run on the actual paint. Go looking for a cast shadow: under the bed, beneath the two rush-seated chairs, around the legs of the table. You will not find one. Every object is a flat slab of its own color, the bed and chairs in the &ldquo;fresh butter&rdquo; yellow he listed, the basin blue on its orange washstand, the doors lilac, each shape laid down whole with no darkening at its edges to round it out. In description &ldquo;flat, plain tints like the Japanese prints&rdquo; sounds like a technical note; on the canvas it is the thing you see, a room built like a stack of colored paper rather than a modeled three-dimensional box. The bed itself, turned down for one and carrying its <strong>two pillows</strong>, could read as lonely; resist that, because the flatness is not melancholy, it is the calm he was after, the color doing its quiet job.
      </p>
    </article>
  )
}

function BdFlood({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Why there are three" title="A flood, and two copies" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here are three versions of the Bedroom, and the reason is not artistic restlessness. It is water. In the spring of 1889, while Van Gogh was hospitalized and the canvas sat in storage, <strong>river flooding in Arles</strong> reached his stored works, and the first version (the one this read is about) <strong>suffered water damage</strong>. He discovered it in late April as he was packing pictures to send to his brother Theo, who had it <strong>relined</strong> to save it (relining means gluing a fresh canvas to the back of a weakened one to hold it together). The original survived, but only after that rescue.
      </p>
      <p style={proseStyle}>
        Because the first canvas had been hurt, Van Gogh painted a <strong>second, full-size version</strong> in September 1889 as a faithful copy; that one is now in the Art Institute of Chicago. He also made a <strong>smaller third version</strong> the same autumn, for his mother and his sister Wil, and that one is now in the Mus&eacute;e d&rsquo;Orsay in Paris. So the famous &ldquo;three Bedrooms&rdquo; all trace back to a flood: one original, water-damaged and relined, plus a full-size and a small replacement made by the same hand. They are told apart, as the previous chapter noted, by the pictures on the wall. Everything in this read is the first, the original, the one that got wet and was saved.
      </p>
    </article>
  )
}

function BdAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="After" title="The room that never left the family" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>L</DropCap>
          ike <em>The Starry Night</em>, the Bedroom was not sold to acclaim or hung in a famous show in Van Gogh&rsquo;s lifetime. There is no single key exhibition, no headline sale, that made it canonical. Its fame, again, was built after his death, by the family estate, and unlike the Starry Night, this first version <strong>never left the family at all</strong>.
        </p>
        <p style={proseStyle}>
          The chain is short and unbroken. Vincent to his brother <strong>Theo</strong> in 1890; Theo&rsquo;s widow <strong>Jo van Gogh-Bonger</strong>, who built the whole reputation; the artist&rsquo;s nephew <strong>Vincent Willem van Gogh</strong>; and then, in <strong>1962</strong>, the <strong>Vincent van Gogh Foundation</strong> the nephew established, which placed it on permanent loan to the <strong>Van Gogh Museum</strong> in Amsterdam when the museum opened in 1973. It hangs there now.
        </p>

        <SectionHeader accent={accent} label="Why it lasts" title="A small room, endlessly reproduced" />
        <p style={proseStyle}>
          Today the Bedroom is among the most reproduced images Van Gogh ever made, printed on everything, recognized everywhere, the snug tilted room with the yellow bed instantly familiar. The strange thing to hold onto is how plain its ambition was. He did not set out to make an icon. He set out, in his own words, to make a picture where the color does the job and looking at it rests the mind. He flattened the shadows the way a Japanese print would, wrote the whole scheme out for his brother, and painted it quickly in a house he was decorating for a friend. The room outlived the Yellow House, the friendship, and the painter. The calm he was reaching for is still the first thing it gives you.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="Arles"
        when="Late Oct 1888 · weeks later"
        title="Gauguin arrives, and the dream begins to break."
        body="Within weeks of this picture, Paul Gauguin moves into the Yellow House to begin the “Studio of the South.” The two painters work side by side for about nine weeks of mounting tension that ends in December 1888 with Van Gogh’s breakdown and the severed ear. The room painted as an image of rest was made on the very edge of the worst crisis of his life."
        palette={['#6a5a3a', '#332820', '#0e0a06']}
        ctaLabel="Read ‘Van Gogh & Gauguin in Arles’"
      />
    </>
  )
}
```

### Fact ledger — Bedroom in Arles

| Prose / const claim | Fact-pack item |
|---|---|
| This read = FIRST version, mid-Oct 1888, Van Gogh Museum, 72×90 cm; three versions exist | §2 WHICH VERSION / table |
| 72×90 cm → 2 ft 4 in × 2 ft 11½ in | §2 Dimensions |
| Oil on canvas; title The Bedroom / La chambre à coucher | §2 Identity |
| Van Gogh Foundation 1962, permanent loan to Van Gogh Museum (opened 1973); inv. s0047V1962; F482/JH1608 | §2 Location/accession |
| First version never left family estate: Vincent→Theo→Jo→nephew→Foundation 1962 | §2 Provenance |
| Yellow House, 2 Place Lamartine, Arles; "Studio of the South"; painted Oct 1888 before Gauguin arrived | §2 Where it came from |
| Worn out / bedridden several days; conceived as image of rest | §2 Where it came from [DOCUMENTED] |
| Room was a trapezoid (obtuse front-left, acute right) | §2 Where; pointer 1 |
| "color has to do the job"; rest/sleep; "rest the mind…imagination" | §2 Making [DOCUMENTED] |
| "shadows and cast shadows removed…flat plain tints like the Japanese prints" | §2 Making [DOCUMENTED] |
| Color scheme list (violet walls, red floor, butter chairs/bed, scarlet coverlet, blue basin, green window, lilac doors…) | §2 intended color scheme |
| Sketches inside letters to Theo and Gauguin | §2 Making |
| Painted quickly mid-Oct 1888, NOT "in one day" | §2 Making ⚠️; LEGEND |
| Two pillows / single sleeper; rest not loneliness (loneliness = interpretation) | §2 pointer 2; DOCUMENTED vs LEGEND |
| Two rush-seated butter-yellow chairs | §2 pointer 3 |
| Wall portraits = friends (Boch "poet" / Milliet "lover/soldier"), exact ID disputed; tell that distinguishes versions | §2 pointer 4 ⚠️ |
| Green shuttered window onto Place Lamartine / public garden | §2 pointer 5 |
| Flat color, no cast shadows = Japanese-print flatness | §2 pointer 6 |
| Spring 1889 river flooding in Arles (NOT "the Yellow House flooded") damaged v1 in storage while VG hospitalized; discovered late April packing for Theo → relined → v2 (full-size, Sept 1889, Chicago) + v3 (smaller, mother/Wil, Orsay) | §2 Why a second version exists (flood cause/location corrected per fact-check gate) |
| No key sale/exhibition in lifetime; estate-driven canonization; now among most reproduced | §2 Reception & afterlife |
| Gauguin arrives weeks later, ~9 weeks tension, Dec 1888 breakdown/ear (Meanwhile) | §2 Where it came from; §1 Where it came from |

---

## WORK 3 — A Sunday on La Grande Jatte (`grande-jatte`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, A Sunday on La Grande Jatte — 1884 (Seurat, 1884–86). Founding monument
// of Neo-Impressionism / Divisionism / Pointillism. Art Institute of Chicago.
// Authored through the art content pipeline. Chapter prose in
// art-section-reader.tsx NARRATIVES['grande-jatte'] (Gj… prefix).
// PRECISION handled: Pointillism vs Divisionism are NOT synonyms (Seurat preferred
// Divisionism for the method); "~48 figures" / monkey-fishing puns are approximate /
// interpretive; the grass has darkened from a degraded zinc-yellow pigment.
// ─────────────────────────────────────────────────────────────
export const GRANDE_JATTE: ArtWorkContent = {
  id: 'grande-jatte',
  name: 'A Sunday on La Grande Jatte — 1884',
  shortName: 'La Grande Jatte',
  year: 1886,
  artist: 'Georges Seurat',
  artistId: 'seurat',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 9 3/4 in × 10 ft 1 1/4 in',
  location: 'Art Institute of Chicago',
  acquired: 'Helen Birch Bartlett Memorial Collection, 1926',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 3, total: 9 },
  hook: 'Two years of work and countless tiny separate dots of pure color, building a frozen Sunday crowd, the founding monument of a whole new science of painting.',
  heroImage: ART_IMG.seuratGrandeJatte,
  heroCredit: 'Seurat, A Sunday on La Grande Jatte — 1884, 1884–86 · Art Institute of Chicago',
  heroAspect: 1.48, // 207.5 × 308.1 cm → W/H ≈ 1.485
  heroFit: 'contain', // the whole ~7×10 ft panorama, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1884–86', k: 'Painted' },
    { v: '6′9¾″ × 10′1¼″', k: 'Dimensions' },
    { v: 'Art Institute', k: 'Now at' },
  ],
  sections: [
    { id: 'island', eyebrow: 'Paris · 1884', dateLabel: '1884', title: 'A science to replace Impressionism', blurb: 'Seurat, in his mid-20s, is building a rigorous, systematic alternative to Impressionism out of contemporary color theory. His subject: a real leisure island in the Seine where Parisians of every class stroll on Sundays.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1884–1886', title: 'Two years, and the dots', blurb: 'Dozens of preparatory studies, then two years building the surface out of countless small dots meant to mix in the eye, not on the palette. Two names get used for the method, Divisionism and Pointillism, and they do not mean the same thing.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 9¾ in × 10 ft 1¼ in', title: 'A frozen Sunday, seven by ten feet', blurb: 'About forty-eight stiff figures, a woman with a pet monkey, a girl in white at the optical center, the painted dotted border, and grass that has darkened with age from a failing pigment.', progress: 0.56 },
    { id: 'reception', eyebrow: 'May 1886', dateLabel: '15 May 1886', title: 'The eighth and last Impressionist show', blurb: 'It debuts at the final Impressionist exhibition to a divided room, some seeing the future, some put off by its airless, frozen calm. The critic Félix Fénéon champions it and coins the word “Neo-Impressionism.”', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1891–today', title: 'The icon, and the fade', blurb: 'Seurat dies suddenly at 31; the canvas passes through his brother to French collectors and reaches the Art Institute of Chicago in 1926, where it becomes a signature work, even as the sunlit lawn quietly browns.', progress: 0.96 },
  ],
  provenance: [
    { year: '1886–1891', who: 'Georges Seurat (the artist)', place: 'Paris', note: 'Worked 1884–86, with the painted dotted border reworked around 1888–89. Held by Seurat until his sudden death in 1891, then passed to his family.', price: null },
    { year: '1891–1900', who: 'Émile Seurat (the artist’s brother)', place: 'Paris', note: 'The artist’s brother held it, then in 1900 sold it for about 800 francs to Léon-Casimir Bru, who bought on the advice of his daughter, the painter Lucie Cousturier.', price: '~800 francs' },
    { year: '1900–1924', who: 'Léon-Casimir Bru, then Lucie Cousturier', place: 'Paris', note: 'Cousturier inherited it from her father, then sold it in 1924 to the Paris gallery of Charles Vildrac.', price: null },
    { year: '1924', who: 'Charles Vildrac (gallery) → Frederic Clay & Helen Birch Bartlett', place: 'Paris / Chicago', note: 'Vildrac resold it the same year to the Chicago collectors Frederic Clay Bartlett and his wife Helen Birch Bartlett.', price: null },
    { year: '1926–today', who: 'Art Institute of Chicago', place: 'Chicago', note: 'Given to the Art Institute in 1926 as the Helen Birch Bartlett Memorial Collection (acc. 1926.224). A condition reportedly restricts external loans. On permanent view.', price: 'gift in memoriam', museum: true },
  ],
  figures: [
    { name: 'Georges Seurat', role: 'The painter', palette: ['#3a6a4a', '#c8b84a', '#1c2a18'] },
    { name: 'Félix Fénéon', role: 'Coined “Neo-Impressionism”', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Paul Signac', role: 'Painter who worked alongside Seurat with the dot method', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Camille Pissarro', role: 'Older painter who joined the method', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Émile Seurat', role: 'Brother who held / sold it', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Helen Birch Bartlett', role: 'Whose memorial gift it became', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The border that is painted, not framed', where: 'The band of dots running all the way around the edge of the image, just inside the white wooden frame', detail: 'Around the whole picture runs a border made of painted dots, which Seurat added around 1888–89, a few years after the main canvas. It is not the frame; the plain white wooden frame sits outside it. The dotted border is part of the artwork itself, painted to control the transition from the image to the wall, and the Art Institute still shows it that way.' },
    { label: 'The woman with a monkey', where: 'Foreground right, the elegant couple, at the woman’s feet on a leash', detail: 'A fashionably dressed woman stands at the right holding a leash, and at the end of it is a small pet monkey, the detail most viewers miss entirely. In French a monkey is a singe, and in this era the animal carried a sly pun on female impropriety, so some read the monkey as the picture’s quiet social joke. Treat that reading as interpretation, not fact; the monkey on the leash is simply, verifiably there.' },
    { label: 'The girl in white at the center', where: 'Near the middle of the canvas, a small brightly lit child in a white dress', detail: 'Near the center stands a little girl in white, and she is rendered almost without dots, brightly and smoothly lit, so she becomes the one still, clear point in a canvas built entirely from broken color. She is the optical and compositional focus, the eye’s resting place in the dazzle.' },
    { label: 'The dots, up close and far back', where: 'Anywhere across the surface, but easiest to test in the broad sunlit lawn', detail: 'Stand close and the whole picture dissolves into countless separate dots and short strokes of pure, unmixed color. Step back and they fuse: the grass that looked like a confetti of green, yellow, orange, and blue up close reads as one luminous sunlit lawn from across the room. That fusing-in-the-eye is the entire method and the single best demonstration of why the painting was a break.' },
    { label: 'A woman seeming to fish', where: 'Left edge, at the waterline, a standing woman holding a rod', detail: 'At the left, by the water, a standing woman holds a fishing rod. Some scholars make a pun of it, since the French for “to fish” sounds close to the word for “to sin,” and read her as a hint at the area’s reputation. That is a reading, not a fact; at minimum she anchors the left edge of the composition.' },
    { label: 'The grass you see is partly faded', where: 'The broad areas of sunlit lawn, where the green is patched with dull brown', detail: 'Look for dull brownish patches in what should be brilliant sunlit grass. Those are not Seurat’s intention; he used a zinc yellow pigment that has chemically darkened to brown over the decades, so the lawn was meant to be far brighter and more golden than it now appears. What you are seeing is partly faded, a real conservation fact, not the original effect.' },
  ],
  lineage: {
    parents: [ { label: 'Impressionism', mode: 'art' }, { label: 'Color science (Chevreul · Rood)', mode: 'civ' }, { label: 'Bathers at Asnières', mode: 'art' } ],
    children: [ { label: 'Neo-Impressionism', mode: 'art' }, { label: 'Fauvism', mode: 'art' }, { label: 'Abstract color painting', mode: 'art' } ],
  },
}
```

### Chapter functions (Gj… prefix; inner keys = sections[].id)

```tsx
function GjIsland({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1884" title="A science to replace Impressionism" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Impressionists painted fast. They stood in front of a thing and caught the flicker of light on it before it changed, in loose, quick dabs, trusting the hand and the moment. To a serious young Frenchman in his mid-twenties, that looked less like a method than like luck, and he set out to replace the luck with a rule. He was <strong>Georges Seurat</strong> (1859&ndash;1891), and his larger story sits in the Post-Impressionism overview one level up in this app (the generation that came after the Impressionists and tried, each in their own way, to put structure and rigor back into the bright, loose painting they had inherited). Seurat&rsquo;s version of &ldquo;putting it back&rdquo; was the most systematic anyone around him attempted: he wanted painting built on laws, not instinct.
      </p>
      <p style={proseStyle}>
        The laws came from real science. He had read the color research of the French chemist <strong>Michel Eug&egrave;ne Chevreul</strong>, who had shown that any color looks different depending on what sits beside it (a gray next to red drifts greenish; the same gray next to green drifts reddish), and of the American physicist <strong>Ogden Rood</strong>, who had worked out that two colors set side by side and mixed in the eye stay brighter than the same two stirred together on a palette, where they only go muddy. Out of those two findings Seurat built his whole technique: never mix the paint, place the pure colors next to each other, and let the viewer&rsquo;s eye do the blending. He had already tried it at large scale once, in <em>Bathers at Asni&egrave;res</em> (1884), his first big canvas. The Grande Jatte was to be its monumental companion and the full proof of the system.
      </p>

      <SectionHeader accent={accent} label="A real island" title="Where Paris went on Sundays" />
      <p style={proseStyle}>
        For all that theory, the subject was utterly ordinary, and real. <strong>La Grande Jatte</strong> (&ldquo;the big bowl,&rdquo; roughly) is an actual island in the river Seine just west of Paris, a long thin sliver of grass and trees between the suburbs of Neuilly and Levallois. On a hot Sunday it filled up with Parisians of every class let out of the city for the afternoon, the top-hatted and the shop-girl side by side, strolling the shade, lying on the grass, taking a boat out, courting, dozing, fishing off the bank. It was the most unremarkable scene in France: a public park on a day off. Seurat went out to it again and again with small panels and crayons, studying the real light through the real trees and the real bodies arranged across the lawn, and then carried all of it back to the studio to be rebuilt, dot by dot, into something that looks nothing like a snapshot of a lazy afternoon and everything like a cathedral of one.
      </p>
    </article>
  )
}

function GjMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="Two years, and the dots" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his is not a picture anyone painted in an afternoon. Seurat worked on it for roughly <strong>two years</strong> (from May 1884 to March 1885, then again from October 1885 to May 1886), and that was after a long campaign of preparation. He made <strong>dozens of preparatory studies</strong>: small oil panels the French called <em>croquetons</em>, painted out on the island, and conté-crayon drawings (conté is a hard, greasy chalk-and-graphite stick, good for soft dense shading), plus a near-full-size painted study (now at the Met in New York). The huge final canvas was built slowly on top of all that groundwork.
      </p>

      <SectionHeader accent={accent} label="How the surface works" title="Color that mixes in your eye" />
      <p style={proseStyle}>
        Now the famous part, and it needs care. The surface is built from <strong>countless small dots and short strokes of pure, unmixed color</strong>, placed side by side. The idea is that the colors mix not on the palette but in the viewer&rsquo;s <em>eye</em>: put a dot of blue next to a dot of yellow and, from across the room, the eye fuses them into a shimmering green that is more alive than any green you could premix. This is <strong>optical mixing</strong>, and it is the whole engine of the painting.
      </p>
      <p style={proseStyle}>
        Two words get used for this, and they are <em>not</em> the same thing, so it is worth getting right. <strong>Pointillism</strong> names the visible technique (the dots, the facture, the literal business of dotting paint on). <strong>Divisionism</strong> names the underlying <em>principle</em>: dividing each color into its separate components and letting them recombine in the eye. Seurat himself <strong>preferred &ldquo;Divisionism&rdquo;</strong> for what he was doing, because he cared about the method, not the dots for their own sake; &ldquo;Pointillism&rdquo; was a label others pinned on, at first half-mockingly. The Grande Jatte is the founding monument of both terms, and of the movement they belong to, <strong>Neo-Impressionism</strong>, the name the critics would soon give this whole new scientific school of painting (the next-but-one chapter tells exactly who coined it and when).
      </p>

      <SectionHeader accent={accent} label="The border he added later" title="Dots around the dots" />
      <p style={proseStyle}>
        One more making-detail, because it surprises people. A few years after the main canvas, around <strong>1888&ndash;89</strong>, Seurat went back and added a <strong>border of painted dots</strong> all the way around the image itself, to control how the picture met the wall. That dotted border is part of the artwork, framed in turn by a plain white wooden frame, and the Art Institute still displays it exactly that way. The painting, in other words, includes its own painted edge.
      </p>
    </article>
  )
}

function GjLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A frozen Sunday, seven by ten feet" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, the scale, because it is part of the shock. The Grande Jatte is enormous: about <strong>6 feet 9&frac34; inches tall and 10 feet 1&frac14; inches wide</strong> (207.5 by 308.1 centimeters), call it roughly seven feet by ten. It fills a wall. And what fills that wall is, strangely, the calmest, most frozen crowd in art. Roughly <strong>forty-eight people</strong> (the commonly cited count, so call it &ldquo;about forty-eight,&rdquo; not a hard official number) stand and sit across a sunlit lawn, and almost none of them move. Look at how they are posed: nearly every figure stands bolt upright or sits perfectly straight, faces turned in profile or dead away from us, and not one of them is touching, gesturing to, or even looking at another. A real park on a Sunday is full of slouch and motion and people leaning in to talk; here the bodies are spaced out like chess pieces and held in place, each sealed in its own column of air. People in 1886 found that stillness unsettling, and it is still the first thing you feel: a holiday crowd rendered as motionless as a row of statues.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#3a6a4a', '#c8b84a', '#1c2a18']}
        imageUrl={ART_IMG.seuratGrandeJatte}
        ratio="3/2"
        alt="Seurat, A Sunday on La Grande Jatte, the whole panorama"
        caption={<>Seurat,{' '}<em>A Sunday on La Grande Jatte &mdash; 1884</em>, 1884&ndash;86. Art Institute of Chicago.</>}
        rights="Public domain in the US (painting 1886). Wikimedia Commons (Google Art Project)."
      />

      <SectionHeader accent={accent} label="The cast" title="The monkey, the girl, the fisher" />
      <p style={proseStyle}>
        Now hunt for the details. Foreground right: an elegant couple, and at the woman&rsquo;s feet, on a leash, a small pet <strong>monkey</strong>, the thing nearly everyone misses. Some scholars read the monkey as a sly social note (the French <em>singe</em> carried a pun about loose morals), but treat that as interpretation; the animal itself is verifiably there. Among the figures are several dogs, people fishing, a man playing a horn. At the left waterline, a standing woman holds a <strong>fishing rod</strong>, and some make a pun of that too, since the French for &ldquo;to fish&rdquo; sounds like &ldquo;to sin,&rdquo; but again, that is a reading, not a fact. And near the center stands a little <strong>girl in white</strong>, painted almost without dots, brightly lit, the one clear, still point the eye rests on in all the shimmer.
      </p>

      <SectionHeader accent={accent} label="The dots, and the fade" title="Optical mixing, and a darkened lawn" />
      <p style={proseStyle}>
        Get close and the whole picture falls apart into separate dots of pure color; step back and they fuse into solid, glowing form. That is optical mixing in action, and the broad sunlit lawn is the best place to test it: up close it is a confetti of green, yellow, orange, and blue, and from across the room it reads as one luminous field of grass. But a warning about that grass: look for dull <strong>brownish patches</strong> in it. Those are not what Seurat intended. He used a <strong>zinc yellow</strong> pigment that has <strong>chemically darkened to brown</strong> over the decades, so the lawn was meant to be much brighter and more golden than it now appears. What you are looking at is, in part, a faded picture, a real conservation fact, not the original effect.
      </p>
    </article>
  )
}

function GjReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="May 1886" title="The eighth and last Impressionist show" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Grande Jatte made its public debut at a loaded moment: the <strong>eighth and final Impressionist exhibition</strong>, which opened on <strong>15 May 1886</strong>. There is real drama in that timing. The Impressionists had been the rebels; now, at their last group show, a younger painter walked in with a method that quietly proposed to <em>replace</em> them, cooler and more systematic and more frozen. Seurat hung his giant canvas alongside two allies: the painter <strong>Paul Signac</strong>, his closest collaborator in the dot method, and the older <strong>Camille Pissarro</strong>, an established founding Impressionist who had startled everyone by converting to Seurat&rsquo;s scientific system. The three were given a separate room to hang together.
      </p>
      <p style={proseStyle}>
        And the split was not just in the reviews; it ran straight through the group itself. The fracture was so real that two of the founding Impressionists, <strong>Claude Monet</strong> and <strong>Auguste Renoir</strong>, refused to take part in this final show at all, in part because they would not exhibit beside Seurat and the newcomers. So the &ldquo;last Impressionist exhibition&rdquo; was missing two of the original Impressionists, who had walked out of their own movement&rsquo;s farewell rather than share a wall with the thing replacing them. Among those who did come, the verdict was <strong>divided</strong>. Some saw the next step for painting, a rigorous future built on color science. Others were put off by exactly the quality we still feel first: its airless, frozen, emotionless calm, a crowd turned to statues. To a public raised even on the Impressionists&rsquo; warmth, the Grande Jatte could look cold.
      </p>

      <SectionHeader accent={accent} label="The critic who named it" title="Fénéon and “Neo-Impressionism”" />
      <p style={proseStyle}>
        Its great champion was the critic <strong>F&eacute;lix F&eacute;n&eacute;on</strong>, who defended the painting and the circle around it and who, writing about this group in <strong>1886</strong>, <strong>coined the term &ldquo;Neo-Impressionism&rdquo;</strong> for what they were doing. That is the moment a method became a movement with a name. The Grande Jatte did not just join Neo-Impressionism; it was the canvas in front of which the word was invented.
      </p>
    </article>
  )
}

function GjAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="After" title="The icon, and the fade" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>S</DropCap>
          eurat did not live to see the painting become an icon. He died <strong>suddenly in 1891, aged just thirty-one</strong>, with the Grande Jatte still in his hands, and it passed to his family. The canvas went down through Seurat&rsquo;s brother, <strong>&Eacute;mile Seurat</strong>, who held it and then, in <strong>1900</strong>, sold it for about <strong>800 francs</strong> to a collector named L&eacute;on-Casimir Bru, who bought it on the advice of his daughter, the painter Lucie Cousturier.
        </p>
        <p style={proseStyle}>
          Cousturier inherited it, then sold it in <strong>1924</strong> to the Paris gallery of Charles Vildrac, who resold it that same year to the Chicago collectors <strong>Frederic Clay Bartlett and Helen Birch Bartlett</strong>. In <strong>1926</strong> it entered the <strong>Art Institute of Chicago</strong> as the Helen Birch Bartlett Memorial Collection, where it has been a signature work of the museum ever since, with a condition that reportedly keeps it from traveling, so it effectively never leaves.
        </p>

        <SectionHeader accent={accent} label="Why it lasts" title="The monument that is quietly browning" />
        <p style={proseStyle}>
          Today the Grande Jatte is the canonical image of Neo-Impressionism and the dot technique, saturated into popular culture: it anchors a whole Broadway musical (Stephen Sondheim&rsquo;s <em>Sunday in the Park with George</em>) and turns up in the movies. But the honest closing note is the one about the paint. The lawn you stand in front of is not the lawn Seurat made: that zinc-yellow pigment has darkened to brown, so the brilliant golden-green Sunday he built, dot by dot, over two years, is slowly fading toward something duller. The most scientific painting of its age is, in the end, at the mercy of its own chemistry. What you see is a great monument, and a partly faded one, at the same time.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="New York"
        when="1886 · the same year"
        title="A statue of Liberty rises in the harbor."
        body="In the year the Grande Jatte debuts in Paris, France ships another, far larger work across the Atlantic: the Statue of Liberty, dedicated in New York Harbor in October 1886. The same French confidence that produced Seurat’s rigorous color-science is, that very year, handing a colossus of modern engineering to a young republic across the sea."
        palette={['#3a6a8a', '#c8c050', '#1c2a30']}
        ctaLabel="Read ‘The Gilded Age’"
      />
    </>
  )
}
```

### Fact ledger — La Grande Jatte

| Prose / const claim | Fact-pack item |
|---|---|
| Georges Seurat, 1859–1891 | §3 Identity / Artist |
| Title "A Sunday on La Grande Jatte — 1884"; French Un dimanche après-midi…; Wiki long form | §3 Identity |
| Worked 1884–86 (May 1884–Mar 1885; Oct 1885–May 1886); border reworked ~1888–89 | §3 Dates; Making |
| Oil on canvas; 207.5×308.1 cm → 6 ft 9¾ in × 10 ft 1¼ in (~7×10 ft) | §3 Medium; Dimensions |
| Art Institute of Chicago; Helen Birch Bartlett Memorial Collection; acc. 1926.224; Bartletts bought 1924, entered 1926; loan restriction | §3 Location/accession/acquisition |
| Provenance: Seurat→Émile Seurat→Bru (1900, ~800 fr, via Lucie Cousturier)→Cousturier→Vildrac (1924)→Bartletts→AIC 1926 | §3 Provenance chain |
| Passed via brother Émile, NOT Madeleine Knobloch | §3 Provenance ⚠️ |
| Mid-20s; systematic alternative to Impressionism; color science of chemist Michel Eugène Chevreul (simultaneous contrast) + physicist Ogden Rood (optical mix stays brighter than palette mix); followed Bathers at Asnières 1884 | §3 Where it came from (Chevreul/Rood identified per clarity gate; "nobody else attempting" overclaim softened per framing gate) |
| La Grande Jatte = real island in Seine between Neuilly/Levallois; mixed-class Sunday leisure | §3 Where it came from |
| Two years; dozens of studies (croquetons, conté drawings), near-full-size study at the Met | §3 Making [DOCUMENTED] |
| Dots of pure color → optical mixing in the eye | §3 Making |
| Pointillism = the dot facture; Divisionism / chromoluminarisme = the principle; Seurat preferred Divisionism; "Pointillism" applied by others, mockingly; founding monument of Neo-Impressionism | §3 Making technique distinction; PRECISION |
| Painted dotted border added ~1888–89; part of artwork; white wooden frame outside it | §3 The painted border; pointer 1 |
| ~48 figures ("about," not official); woman with monkey on leash; ≥3 dogs; fishing; horn player; girl in white | §3 Figures ⚠️; pointers 2,3,4 |
| Debut 8th & last Impressionist exhibition, opened 15 May 1886; separate room w/ Signac (closest collaborator) + Pissarro (founding Impressionist who converted); divided reception, "frozen/airless" | §3 Reception [DOCUMENTED] |
| Monet & Renoir refused to exhibit at the 8th/final show, partly over Seurat's inclusion (made the "split" structural, not just divided critics) | Added per comprehensiveness gate MUST-ADD — Rewald, *History of Impressionism* (4th ed. 1973) pp.530–535; standard art-history reference |
| Pigment = zinc yellow (zinc chromate), NOT chrome yellow; darkened to brown ("(chrome)" gloss removed) | §3 pointer 6 (pigment name corrected per fact-check gate; ColourLex/Wikipedia) |
| Félix Fénéon championed it; coined "Neo-Impressionism" 1886 | §3 Reception [DOCUMENTED] |
| Seurat died suddenly 1891 at 31 | §3 Provenance / Afterlife |
| Canonical Neo-Imp icon; named Stephen Sondheim's *Sunday in the Park with George* (1984); Ferris Bueller | §3 Afterlife (musical named per clarity gate) |
| Zinc-yellow (chrome) pigment darkened to brown; grass partly faded | §3 pointer 6; DOCUMENTED |
| Monkey/fishing puns + class-satire = interpretation, "some scholars read," not fact | §3 pointers 2,3; DOCUMENTED vs LEGEND |
| Statue of Liberty dedicated NY Harbor Oct 1886 (Meanwhile) | General-knowledge framing only; not a load-bearing work claim |

---

## Integration notes (for the integrator, not gated content)

- Register in `art-content.ts` work lookup and in `NARRATIVES` (reader):
  `'starry-night': { asylum: SnAsylum, making: SnMaking, looking: SnLooking, reception: SnReception, afterlife: SnAfterlife }`,
  `'bedroom-arles': { 'yellow-house': BdYellowHouse, making: BdMaking, looking: BdLooking, flood: BdFlood, afterlife: BdAfterlife }`,
  `'grande-jatte': { island: GjIsland, making: GjMaking, looking: GjLooking, reception: GjReception, afterlife: GjAfterlife }`.
- `artistId`: used `'vangogh'` and `'seurat'` — confirm/author the artist routing entries (artist bios are mostly coming-soon; these may resolve to coming-soon, which is fine).
- `chain.index` 1/2/3 within this batch; renumber across the full 9 at integration.
- Hero filenames per fact pack: Bedroom hero MUST be the **first (Amsterdam) version** —
  the existing `ART_IMG.vanGoghBedroomArles` URL is `…/De_slaapkamer_-_Google_Art_Project.jpg`
  ("De slaapkamer" = the Dutch/Amsterdam title), which is the correct first-version file. Good.
- All three are pre-1931 → `rights: 'pd-us'`.
```
