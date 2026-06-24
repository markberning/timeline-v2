# WORK DRAFT — Marcel Duchamp, *L.H.O.O.Q.* (1919)

Authored through the art content pipeline. Two fenced blocks below: PART A (the `ArtWorkContent` const for `src/lib/art-content.ts`) and PART B (the five `Lho…` section components + the `NARRATIVES` registry line for `art-section-reader.tsx`).

## PART A — const

```ts
export const LHOOQ: ArtWorkContent = {
  id: 'lhooq',
  name: 'L.H.O.O.Q.',
  shortName: 'L.H.O.O.Q.',
  year: 1919,
  artist: 'Marcel Duchamp',
  artistId: 'duchamp',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Rectified readymade (pencil on a printed postcard reproduction of the Mona Lisa)',
  dimensions: '7¾ in × 4⅞ in',
  location: 'The 1919 original is privately held, its current location not publicly fixed; museums hold authorized later replicas and editions (Centre Pompidou, Philadelphia Museum of Art, and others).',
  acquired: 'No museum holds the 1919 original. The work survives publicly through Duchamp’s own later replicas, the Boîte-en-valise reproductions, and the 1965 L.H.O.O.Q. Shaved edition.',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 2, total: 9 },
  hook: 'A ten-centime Mona Lisa postcard, a pencil moustache, and a five-letter dirty pun, aimed not at Leonardo but at the worship of the masterpiece.',
  heroImage: ART_IMG.duchampLhooq,
  heroCredit: 'Duchamp, L.H.O.O.Q., 1919.',
  heroAspect: 0.77, // 1742 × 2250 px → W/H ≈ 0.77, portrait postcard
  heroFit: 'contain', // the whole small card, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1919', k: 'Made' },
    { v: '7¾″ × 4⅞″', k: 'Dimensions' },
    { v: 'Five letters', k: 'The whole joke' },
  ],
  sections: [
    { id: 'postcard', eyebrow: 'Paris · 1919', dateLabel: '1919', title: 'A postcard, a pencil, and a pun', blurb: 'Duchamp, back from New York and circling the new Paris Dada crowd, buys a cheap printed Mona Lisa postcard, draws a moustache and goatee on it in pencil, and letters five capitals underneath. He calls the result, with a straight face, his art.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1919', title: 'The rectified readymade', blurb: 'How the object was actually made: a mass-produced reproduction altered with a few pencil strokes, Duchamp’s own term for it, and the gender play that ties it to his alter ego Rrose Sélavy. NOT Leonardo’s panel; a postcard. And the moustache-only version Picabia drew himself.', progress: 0.32 },
    { id: 'pun', eyebrow: 'The key statement', dateLabel: '1919', title: 'Elle a chaud au cul', blurb: 'The whole obscenity hides in how you read the five letters aloud in French. The literal vulgar sense, Duchamp’s own softened gloss, and the sourced interview line about what the moustache does to the face, with the “not” that careless quoters drop.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1919', title: 'Defacing the most revered painting on earth', blurb: 'Why this is a rupture and not a prank: the gesture of altering a sacred image becomes the artwork, the readymade is turned on an existing canonical work, and authorship is claimed over someone else’s finished image. The seed of appropriation art.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1919–today', title: 'Versions, a shave, and where the original isn’t', blurb: 'The 1919 card vanishes into private hands while Duchamp keeps remaking it: the 391 reproduction, the Boîte-en-valise miniatures, and the 1965 Shaved version with the moustache gone. Museums hold the copies; the original’s public location is uncertain.', progress: 0.96 },
  ],
  provenance: [
    { year: '1919', who: 'Marcel Duchamp (the artist)', place: 'Paris', note: 'Made in 1919: a pencil moustache and goatee, plus the lettered title, added to a cheap printed postcard reproduction of the Mona Lisa. A rectified readymade.', price: null },
    { year: '1920', who: 'Reproduced by Francis Picabia in 391 (issue 12)', place: 'Paris', note: 'Picabia ran the image in his Dada magazine 391 in March 1920. He could not wait for Duchamp’s card to arrive, so, with Duchamp’s consent, he drew the moustache himself and forgot the goatee. That 391 image is therefore a separate, moustache-only object, not the 1919 original. Duchamp added the missing goatee by hand to a print in 1942 and inscribed the correction.', price: null },
    { year: '20th century', who: 'Private hands (associated with the Mary Sisler collection)', place: 'Location not publicly fixed', note: 'The 1919 original passed through private collections and is generally described as privately held; no museum holding of the 1919 card is documented in the sources. The safe statement is that the original is in a private collection and its current public location is uncertain.', price: null },
    { year: '1930s–1965', who: 'Duchamp’s own later versions and editions', place: 'Paris / New York', note: 'Duchamp remade the work over the years in differing sizes and media; one version is held at the Musée National d’Art Moderne, Centre Pompidou, Paris. Miniature reproductions appear in his Boîte-en-valise portable-museum boxes (examples at the Philadelphia Museum of Art and elsewhere). In 1965 he issued L.H.O.O.Q. Shaved, a plain unaltered Mona Lisa reproduction whose joke is that the moustache has been removed.', price: null, museum: true },
  ],
  figures: [
    { name: 'Marcel Duchamp', role: 'The artist', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Leonardo da Vinci · the Mona Lisa', role: 'The icon under the pencil', palette: ['#6a5a3a', '#332a1a', '#0e0a06'] },
    { name: 'Francis Picabia · 391', role: 'Ran it first, moustache only', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Rrose Sélavy', role: 'Duchamp’s female alter ego', palette: ['#a87880', '#5a3a4a', '#1a0e10'] },
    { name: 'The masterpiece-cult', role: 'The real target, not Leonardo', palette: ['#7c6f5a', '#3a352a', '#100c08'] },
  ],
  annotations: [
    { label: 'The pencil moustache', where: 'Across the upper lip of the printed face, center of the card', detail: 'Two short pencil strokes sit on top of the smooth printed lip. The graffiti is deliberately crude against the soft mechanical image beneath it. This is the first and most famous of the two added marks, and on the 391 version reproduced by Picabia it is the only one, because Picabia forgot the goatee.' },
    { label: 'The goatee', where: 'At the chin of the figure, just below the famous half-smile', detail: 'A small pointed pencil beard finishes the masculinizing of the face. Moustache plus goatee is the combination that defines the true 1919 original. If a version has the moustache but no goatee, you are looking at the 391 reproduction, not the card Duchamp drew.' },
    { label: 'The Mona Lisa, untouched beneath', where: 'The whole card under the two pencil marks', detail: 'The half-smile, the folded hands, the hazy receding landscape of Leonardo’s portrait are all reproduced unaltered. Duchamp changed almost nothing. The entire work is the moustache, the beard, and the lettering; everything else is Leonardo, printed by a postcard press.' },
    { label: 'The lettering below', where: 'In the margin under the image', detail: 'Five capital letters, L.H.O.O.Q., pencilled in the lower margin and separated by periods. The whole obscene joke lives in how those letters sound when you read them aloud in French. On the card itself they are just five quiet capitals.' },
    { label: 'The cheap postcard print', where: 'The surface and scale of the object as a whole', detail: 'This is not a painting. It is a small commercial postcard reproduction, flat printed ink at roughly 7¾ by 4⅞ inches, the mechanical look of mass reproduction. The cheapness is part of the point: the most famous defacement in modern art is a thing you could hold in one hand and post for a few centimes.' },
    { label: 'The collision of registers', where: 'The card as one whole gesture', detail: 'A sublime Renaissance icon, a schoolyard doodle, and an obscene wordplay all share one tiny card. The humor and the attack are inseparable; you cannot take the gag without taking the argument it carries about what a masterpiece is worth.' },
  ],
  lineage: {
    parents: [
      { label: 'The readymade · Fountain', mode: 'art' },
      { label: 'Paris Dada', mode: 'art' },
      { label: 'Mona Lisa worship', mode: 'civ' },
    ],
    children: [
      { label: 'Appropriation art', mode: 'art' },
      { label: 'Pop’s reuse of mass imagery', mode: 'art' },
      { label: 'Rrose Sélavy', mode: 'art' },
    ],
  },
}
```

## PART B — section components + NARRATIVES line

```tsx
// ─────────────────────────────────────────────────────────────
// L.H.O.O.Q. (Duchamp, 1919) — the five sections. Lho… prefix.
// Dada work-read. Authored through the art content pipeline.
// FLAGS handled: it is a POSTCARD, not Leonardo’s panel; the 391 version is
// moustache-only (Picabia forgot the goatee); the literal vulgar sense vs
// Duchamp’s softened “fire down below” gloss; the sourced interview line keeps
// the “not”; the attack is on masterpiece-worship, NOT on Leonardo; the 1919
// original is privately held, museums hold replicas/editions.
// ─────────────────────────────────────────────────────────────
function LhoPostcard({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1919" title="A postcard, a pencil, and a pun" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1919</strong>, in Paris, <strong>Marcel Duchamp</strong> (1887&ndash;1968) bought a postcard. Not a special one: a cheap, mass-produced printed reproduction of the most famous painting on earth, Leonardo da Vinci&rsquo;s <em>Mona Lisa</em> (in French, <em>La Joconde</em>), the sort of card you could buy by the rack near the Louvre for a few centimes. He took a pencil. On the printed face he drew a <strong>moustache</strong> and a small <strong>goatee</strong>, and underneath the image he lettered five capital letters: <strong>L.H.O.O.Q.</strong> Then he called the result his art, and he meant it.
      </p>
      <p style={proseStyle}>
        To feel how much nerve that took, you have to know who Duchamp already was. By 1919 he was the man who, two years earlier in New York, had bought a factory-made urinal, laid it on its back, signed it &ldquo;R. Mutt,&rdquo; titled it <em>Fountain</em>, and submitted it to an exhibition as sculpture. That was the <strong>readymade</strong>: Duchamp&rsquo;s idea that the artist&rsquo;s <em>choice</em>, not the artist&rsquo;s <em>hand</em>, is what makes a thing art. Pick an ordinary manufactured object, declare it art, and the declaring is the whole creative act. The urinal was a found object he barely touched. The <em>Mona Lisa</em> postcard would be something one notch stranger, and we&rsquo;ll get to exactly what.
      </p>
      <p style={proseStyle}>
        He had come back to Paris and into the orbit of the new <strong>Paris Dada</strong> circle. <strong>Dada</strong> was the anti-art movement born in neutral Zurich in 1916, in the middle of a world war chewing up a generation, by a handful of exiled poets and painters who decided that the civilization which had produced both the <em>Mona Lisa</em> and the machine gun no longer deserved to be taken seriously. Their answer was an art of nonsense, accident, and provocation. By 1919 Dada was crystallizing in Paris around figures like the poet <strong>Tristan Tzara</strong>, the writer <strong>André Breton</strong>, and Duchamp&rsquo;s old friend the painter <strong>Francis Picabia</strong>. Defacing the supreme sacred object of European art with a graffiti moustache was, in that company, exactly the right kind of joke: light on the surface and a bomb underneath.
      </p>

      <SectionHeader accent={accent} label="Jocondisme" title="Why the Mona Lisa was the perfect victim" />
      <p style={proseStyle}>
        Duchamp did not pick the <em>Mona Lisa</em> at random. By 1919 the painting was the object of something close to religious devotion in French culture, a worship the period itself nicknamed <strong>Jocondisme</strong> (Mona-Lisa-ism). It had a built-in cult and a fresh scandal: in <strong>1911</strong> the picture had been stolen from the Louvre in a sensational theft that ran in newspapers across the world, and its <strong>1913</strong> recovery turned it into front-page celebrity. By the end of the war it was less a painting than a relic, the thing you made a pilgrimage to and revered.
      </p>
      <p style={proseStyle}>
        That made it the ideal target for a gesture the French called <em>&eacute;pater le bourgeois</em>, &ldquo;to shock the middle class.&rdquo; Take the one image a respectable Parisian held most sacred, scribble a moustache on a cheap copy of it, attach a dirty pun, and call it art. The point was never that Leonardo was a bad painter. The point was the <em>worship</em>, the gilt-framed, hushed-museum reverence that the Dadaists thought was a fraud. Keep that distinction; the whole work depends on it. The attack is on the cult, not on the canvas.
      </p>
    </article>
  )
}

function LhoMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1919" title="The rectified readymade" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, the single most important fact about the object, because almost everyone gets it wrong: <strong>this is not Leonardo&rsquo;s painting.</strong> Duchamp did not deface the <em>Mona Lisa</em> itself, which never left the Louvre. He defaced a <strong>cheap printed postcard reproduction</strong> of it, a mass-produced copy you could buy for pocket change. The thing he altered was already a commercial product, a piece of the throwaway world of shops and tourist racks. That matters as much as the moustache.
      </p>
      <p style={proseStyle}>
        Duchamp had a precise term for what he made. A plain readymade, like the urinal, is a found object he chose and barely touched. This one he <em>altered</em>, so he called it a <strong>rectified readymade</strong>: a found, mass-produced object that the artist has marked or changed. The change here is tiny. A moustache and a goatee in pencil on the printed face, five lettered capitals in the margin below. That is the entire intervention. He took a manufactured image and added a few graphite strokes, and the choosing-plus-marking is the whole of the art. The skill is not in the drawing; a child could draw that moustache. The skill is in the idea.
      </p>

      <SectionHeader accent={accent} label="The gender play" title="Rrose Sélavy and the man in the picture" />
      <p style={proseStyle}>
        The moustache and goatee do something beyond vandalism: they turn the world&rsquo;s icon of female beauty into a man, or at least into something androgynous. That was not idle. Around exactly this period Duchamp was inventing a <strong>female alter ego</strong> for himself, a persona named <strong>Rrose S&eacute;lavy</strong>, a name that, said aloud in French, sounds like <em>&ldquo;Eros, c&rsquo;est la vie&rdquo;</em> (&ldquo;Eros, that&rsquo;s life&rdquo;). He would have himself photographed in drag as her and would sign works in her name. So a man putting a male moustache on a famously female face, while building himself a female second self, is all one tangled game about gender and identity, played across the same few years.
      </p>

      <SectionHeader accent={accent} label="1920" title="Picabia’s version, and the missing goatee" />
      <p style={proseStyle}>
        Here is a trap worth disarming now, because it produces two different objects that get muddled. In <strong>March 1920</strong>, Duchamp&rsquo;s friend <strong>Francis Picabia</strong> wanted to run the image in his Dada magazine, <em>391</em>. He could not wait for Duchamp&rsquo;s actual card to reach him, so, with Duchamp&rsquo;s consent, <strong>Picabia drew the moustache himself</strong>, straight onto his own reproduction, and printed it. He forgot the goatee. So the famous <em>391</em> version is <strong>moustache only</strong>, and it is a separate thing from Duchamp&rsquo;s 1919 card, which has both moustache and goatee. (Decades later, in 1942, Duchamp added the missing goatee by hand to a print and inscribed it, in French, &ldquo;Moustache by Picabia, goatee by Marcel Duchamp, April 1942.&rdquo;) The rule to carry: moustache <em>and</em> goatee is the 1919 original; moustache alone is Picabia&rsquo;s 1920 reproduction.
      </p>
      <p style={proseStyle}>
        And one more date to keep clean, because popular accounts slide it: the work was made in <strong>1919</strong>. Picabia&rsquo;s <em>391</em> printing is <strong>1920</strong>. The picture is a 1919 picture.
      </p>
    </article>
  )
}

function LhoPun({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The key statement · the title" title="Elle a chaud au cul" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he title is the joke, and the joke is in your mouth, not on the card. <strong>L.H.O.O.Q.</strong> is a <strong>gramogram</strong>, a &ldquo;word&rdquo; spelled out by the sound of its letters rather than by what they spell on the page. Read the five letters aloud in French, one at a time, and the sounds run together into a sentence: <strong>&ldquo;Elle a chaud au cul.&rdquo;</strong> Nothing about the card tells you this. You have to pronounce the capitals in French to hear the obscenity hiding inside them, which is exactly why it can sit, innocent-looking, in a museum margin.
      </p>
      <p style={proseStyle}>
        Now the meaning, in two registers, because they are different things and both are true. The <strong>literal</strong> sense is vulgar: <em>cul</em> is coarse French for the backside, the arse, so the line reads, bluntly, &ldquo;She has a hot ass,&rdquo; or &ldquo;She is hot in the arse,&rdquo; a crude way of saying the woman is sexually aroused, restless, randy. That is the obscenity the schoolboy hears. Duchamp himself, late in life and in English, offered a deliberately <em>softer</em> gloss: he rendered the line as <em>&ldquo;there is fire down below.&rdquo;</em> That is Duchamp being polite. His &ldquo;fire down below&rdquo; is a tidy translation of the same idea, not a literal rendering of <em>cul</em>; the actual word is rude. Hold both: the vulgar literal sense and Duchamp&rsquo;s own genteel paraphrase are two registers of one line, not two competing facts.
      </p>

      <SectionHeader accent={accent} label="His own words" title="“It becomes a man”" />
      <p style={proseStyle}>
        There is one more thing Duchamp said about the work that is worth quoting exactly, because careless quoters mangle it. Asked years later about the moustache, he described what it did to the face:
      </p>
      <p style={italicStyle}>
        &ldquo;The curious thing about that moustache and goatee is that when you look at the <em>Mona Lisa</em> it becomes a man. It is not a woman disguised as a man; it is a real man, and that was my discovery, without realizing it at the time.&rdquo;
      </p>
      <p style={proseStyle}>
        He said it in conversation with the critic <strong>James Johnson Sweeney</strong>, in an interview filmed in 1955 and broadcast in 1956, later reprinted in <em>The Writings of Marcel Duchamp</em>. Watch the word <strong>&ldquo;not.&rdquo;</strong> A widely circulated version drops it and has Duchamp say it <em>is</em> &ldquo;a woman disguised as a man,&rdquo; which reverses his whole point. His point is the opposite: the figure does not merely look like a woman pretending; the moustache turns her into a genuine man. The pencil does not put on a costume; it changes the sex of the face. Quote the line with the &ldquo;not.&rdquo;
      </p>
      <p style={proseStyle}>
        And notice what neither register of the joke does: neither one insults Leonardo. The pun is about the woman in the picture; the gender line is about what two pencil marks can do. The thing being mocked is the reverence, the idea that this image is too holy to touch. Duchamp touches it, makes it dirty, makes it male, and dares you to be scandalized, which was always the test.
      </p>
    </article>
  )
}

function LhoBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A masterpiece was a sacred original" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore Duchamp drew on it, here is what a masterpiece <em>was</em>. It was something you copied, revered, framed in gilt, and made pilgrimages to. The artwork was the one irreproducible original object, touched by the hand of a genius; the artist&rsquo;s job was to make beautiful, skilled, original things; and reproductions were lesser shadows of the real thing. The <em>Mona Lisa</em> was the supreme example of that whole order, the most sacred original of them all. To improve yourself, you studied it. To honor it, you kept your hands off.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The desecration is the art" />
      <p style={proseStyle}>
        Then Duchamp takes a ten-centime postcard of that sacred original, draws a graffiti moustache on it with a dirty pun underneath, and calls the result his art. Three ruptures land in one small gesture, and they are worth separating.
      </p>
      <p style={proseStyle}>
        First, <strong>defacement becomes a creative act.</strong> The work is not a thing Duchamp made; it is a thing he <em>marked</em>. The gesture of altering, even of desecrating, a revered image is itself the artwork. Iconoclasm, the smashing of sacred images, becomes a medium you can work in. The damage is the painting.
      </p>
      <p style={proseStyle}>
        Second, <strong>the readymade is turned on art itself.</strong> Duchamp had already declared a bottle rack and a urinal to be art by the act of choosing them. Here he aims that same move at <em>an existing canonical artwork</em>. Choosing a finished masterpiece and altering it collapses the line between making art and selecting it, between the original and the copy. The most revered object in the system is treated as just one more found object to pick up off the rack.
      </p>
      <p style={proseStyle}>
        Third, <strong>appropriation.</strong> Duchamp takes someone else&rsquo;s already-finished, world-famous image, recontextualizes it, and signs the result as his own work. He authors a picture he did not draw. That is the move, and it had a long future. <em>L.H.O.O.Q.</em> is widely cited as an early seed of <strong>appropriation art</strong>, the practice of making new art out of existing images: Pop&rsquo;s reuse of soup cans and comic strips, and later artists like <strong>Sherrie Levine</strong> and <strong>Elaine Sturtevant</strong> who re-photographed and remade other people&rsquo;s pictures outright. <em>L.H.O.O.Q.</em> is one of the first proofs that the source image can <em>be</em> the medium.
      </p>
      <p style={proseStyle}>
        And keep the target straight to the end, because it is the easiest thing to get wrong. The break is not an attack on Leonardo, whose skill no Dadaist doubted. It is an attack on <strong>masterpiece-worship</strong>: the museum hush, the gilt frame, the bourgeois reverence that treats a painting as a relic. Duchamp did not think the <em>Mona Lisa</em> was bad. He thought the way people knelt to it was ridiculous, and he found the cheapest, funniest, most precise way to say so.
      </p>
    </article>
  )
}

function LhoAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After · the versions" title="A work he kept on remaking" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he afterlife of <em>L.H.O.O.Q.</em> is genuinely confusing, and the confusion is the point of the next few paragraphs, because it goes to the heart of what a readymade even is. There is no single, stable original sitting safely in one museum. There is, instead, a small crowd of versions, and telling them apart is half the story.
      </p>
      <p style={proseStyle}>
        Start with what we already met. The <strong>1919 original</strong> is the small pencil-on-postcard card with both moustache and goatee. The version printed in Picabia&rsquo;s <em>391</em> in <strong>1920</strong> is a separate object, moustache only. Then Duchamp kept going. Over the following decades he made several further versions in differing sizes and media; one of these is held at the <strong>Mus&eacute;e National d&rsquo;Art Moderne, Centre Pompidou</strong>, in Paris. In the 1930s and 1940s he also folded miniature reproductions of the work into his <em>Bo&icirc;te-en-valise</em>, the &ldquo;box in a valise,&rdquo; a portable museum of tiny copies of his own art that he issued in editions; examples are at the <strong>Philadelphia Museum of Art</strong> and elsewhere.
      </p>

      <SectionHeader accent={accent} label="1965" title="The shave" />
      <p style={proseStyle}>
        The strangest sequel is the one with no moustache at all. In <strong>1965</strong> Duchamp issued <strong><em>L.H.O.O.Q. Shaved</em></strong> (in French, <em>L.H.O.O.Q. ras&eacute;e</em>): a plain, completely unaltered black-and-white <em>Mona Lisa</em> reproduction, mounted on card and put out as an invitation and an edition. The joke is that the moustache has been &ldquo;shaved off.&rdquo; It is a separate, later work, and it has no pencil marks on it whatsoever; do not confuse the bare 1965 <em>Shaved</em> with the mustachioed 1919 card. After half a century, Duchamp made a sequel to a graffiti gag whose entire content is the absence of the graffiti, which is about as Duchamp a thing as exists.
      </p>

      <SectionHeader accent={accent} label="Where the original isn’t" title="Museums hold the copies" />
      <p style={proseStyle}>
        So where is the 1919 original now? Honestly: not pinned down. It passed through private hands (it is usually associated with the Mary Sisler collection) and is generally described as privately held, its current public location uncertain. The crucial thing to say plainly is that <strong>the museum pieces are not the 1919 original.</strong> The works at the Centre Pompidou, Philadelphia, and others are Duchamp&rsquo;s own later replicas, the <em>Bo&icirc;te-en-valise</em> reproductions, or the 1965 <em>Shaved</em> edition. No museum holds the little 1919 card itself, or at least none that the record reliably confirms.
      </p>
      <p style={proseStyle}>
        Which is, in the end, the perfect ending for this particular object. Duchamp&rsquo;s whole life&rsquo;s argument was that the artist&rsquo;s <em>choice</em>, not the precious unique original, is what makes art. A work that survives mainly as a swarm of copies, editions, and remakes, with the &ldquo;real&rdquo; one lost somewhere in private hands, is a work that practices what it preached. The moustache on the postcard mocked the cult of the irreplaceable masterpiece. It is fitting that it never quite became one.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  lhooq: { postcard: LhoPostcard, making: LhoMaking, pun: LhoPun, break: LhoBreak, afterlife: LhoAfterlife },
```
