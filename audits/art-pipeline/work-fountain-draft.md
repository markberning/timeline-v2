# DRAFT — Duchamp, *Fountain* (1917)

Authored through the art content pipeline from `work-fountain-factpack.md`. Two blocks below: PART A is the `FOUNTAIN` const; PART B is the five `Fnt*` section components plus the NARRATIVES registry line.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Fountain, Marcel Duchamp, 1917, Dada. The original (a mass-produced
// porcelain urinal signed "R. Mutt 1917") is LOST; every museum Fountain is a
// later authorized replica. The hero is Alfred Stieglitz's 1917 photograph, the
// only surviving image of the original (PD-US, published 1917 in The Blind Man
// no. 2). Authored through the art content pipeline (fact pack → Opus → 5 gates
// → revise). Chapter prose in art-section-reader.tsx NARRATIVES['fountain']
// (Fnt… prefix). FACT HANDLING (gate-corrected):
//  - SUPPRESSED, not "rejected by jury" — the 1917 Independents show had NO jury;
//    the board hid it behind a partition despite the no-jury pledge.
//  - The original was LOST (probably discarded as trash, per Tomkins), NOT smashed.
//  - "The Richard Mutt Case" editorial ran UNSIGNED in The Blind Man no. 2;
//    commonly credited to the editors (Duchamp / Roché / Beatrice Wood) and often
//    to Wood specifically. NOT captioned "by Duchamp."
//  - The Baroness von Freytag-Loringhoven authorship theory is presented as a
//    LIVE, contested debate, never as settled fact in either direction.
//  - Dimensions = the Tate replica (2/8), named as a replica; ft/in only.
// ─────────────────────────────────────────────────────────────
export const FOUNTAIN: ArtWorkContent = {
  id: 'fountain',
  name: 'Fountain',
  shortName: 'Fountain',
  year: 1917,
  artist: 'Marcel Duchamp',
  artistId: 'duchamp',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Readymade: a mass-produced porcelain urinal, laid on its back, signed “R. Mutt 1917.” The original is lost; every museum Fountain is a later authorized replica.',
  dimensions: '1 ft 2 in × 1 ft 7 in × 2 ft (Tate replica, 2/8)',
  location: 'No original survives; the Tate, London holds replica 2/8 (Schwarz edition, 1964)',
  acquired: 'Tate replica purchased 1999 with assistance from the Friends of the Tate Gallery (T07573); the 1917 original was lost soon after it was made',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 1, total: 9 },
  hook: 'A factory-made urinal laid on its back, signed with a fake name, and entered as sculpture into a show that had promised to refuse nothing, which then hid it. The whole work of art is the choosing.',
  heroImage: ART_IMG.duchampFountain,
  heroCredit: 'Alfred Stieglitz, photograph of Duchamp’s Fountain, 1917 · The Blind Man no. 2 (the only surviving image of the lost original)',
  heroAspect: 0.77, // Stieglitz photo 1280 × 1671 → W/H ≈ 0.77, portrait
  heroFit: 'contain', // the whole photograph, never cropped
  rights: 'pd-us', // Stieglitz photo published 1917 → US public domain (PD-US-expired)
  stats: [
    { v: '1917', k: 'Original (now lost)' },
    { v: 'Porcelain urinal', k: 'Medium (readymade)' },
    { v: 'Replicas only', k: 'No original survives' },
  ],
  sections: [
    { id: 'case', eyebrow: 'New York · 1917', dateLabel: 'April 1917', title: 'The show that promised to refuse nothing', blurb: 'The first Society of Independent Artists exhibition opens on the French promise of no jury and no prizes: pay six dollars and hang anything. Someone signing “R. Mutt” sends in a urinal, and the board, caught in its own rule, hides it.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1917', title: 'A urinal, a fake name, and a photograph', blurb: 'There is almost no “making.” Duchamp bought a fixture, turned it on its back, brushed “R. Mutt 1917” on the rim, and had Alfred Stieglitz photograph it. Then the object vanished, and the photograph became the work.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The photograph', dateLabel: 'May 1917', title: 'What is actually in the one surviving image', blurb: 'The inverted form, the painted signature, the silhouette critics read as a seated Buddha, the pedestal that quietly says “sculpture,” and the avant-garde painting hanging behind it in Stieglitz’s gallery.', progress: 0.52 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1917', title: 'Choosing instead of making', blurb: 'For centuries art was a thing made by hand with skill. Fountain proposes that the artist’s real act is to choose, name, and reframe, and that an untouched factory object can become art by decision alone. The defense ran in The Blind Man.', progress: 0.74 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1917–today', title: 'The lost object that conquered the century', blurb: 'The original was thrown out as trash; authorized copies of it now hang in the world’s great museums and sell for millions. A poll of the art world once named this missing urinal the most influential artwork of the twentieth century.', progress: 0.96 },
  ],
  provenance: [
    { year: '1917', who: 'Marcel Duchamp (submitted as “R. Mutt”)', place: 'New York', note: 'Entered to the Society of Independent Artists exhibition in April 1917, suppressed by the board, then photographed by Alfred Stieglitz at his 291 gallery and reproduced in The Blind Man no. 2 (May 1917). The original object disappeared shortly after; biographer Calvin Tomkins’s best guess is that it was thrown out as rubbish.', price: null },
    { year: '1950', who: 'Replica signed at Sidney Janis’s request', place: 'New York', note: 'No original survives. Duchamp authorized a sequence of full-size reproductions. The 1950 replica (the dealer Sidney Janis bought a urinal at a Paris flea market and Duchamp signed it) went to the Philadelphia Museum of Art.', price: null },
    { year: '1963', who: 'Ulf Linde replica (Duchamp’s permission)', place: 'Stockholm', note: 'Made by Ulf Linde with Duchamp’s permission and signed by Duchamp the following year; now at the Moderna Museet, Stockholm.', price: null },
    { year: '1964', who: 'Galleria Schwarz edition of 8 (Arturo Schwarz)', place: 'Milan', note: 'An edition of 8 glazed earthenware replicas, painted to resemble the lost porcelain original, fabricated to scaled drawings under Duchamp’s supervision and signed by him, plus proofs and a prototype (about 17 versions of Fountain now exist in total). These are the copies that filled the museums.', price: null },
    { year: '1999', who: 'Tate (Schwarz replica 2/8)', place: 'London', note: 'The Tate purchased the 1964 Schwarz replica numbered 2/8 with assistance from the Friends of the Tate Gallery (accession T07573). At the same Sotheby’s sale that year, replica 5/8 changed hands, so authorized copies of a lost object now command serious money.', price: null, museum: true },
  ],
  figures: [
    { name: 'Marcel Duchamp', role: 'Chose and submitted it', palette: ['#b8b4ac', '#6a665e', '#2a2824'] },
    { name: '“R. Mutt”', role: 'The fake name on the entry form', palette: ['#9a8a5a', '#4a4232', '#14110a'] },
    { name: 'Society of Independent Artists board', role: 'Suppressed it, despite the no-jury rule', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'Alfred Stieglitz', role: 'Photographed it (the only surviving image)', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Beatrice Wood', role: 'Co-editor of The Blind Man; often credited with the defense', palette: ['#8a4a3a', '#3a2620', '#120c0a'] },
    { name: 'Baroness Elsa von Freytag-Loringhoven', role: 'Authorship claim on her behalf (contested)', palette: ['#7a6a72', '#3a3242', '#120f14'] },
  ],
  annotations: [
    { label: 'The inverted urinal', where: 'The whole object, laid on its back rather than mounted on a wall', detail: 'The fixture has been rotated about ninety degrees from the way it normally hangs and set down on its back, so the flat back and the row of drain holes face you. Tipped out of its usual position, the everyday plumbing job is hard to read at a glance, and the smooth white shape starts to look like sculpture rather than hardware. That single turn, with no carving and no paint beyond a signature, is most of what Duchamp actually did to the thing.' },
    { label: 'The “R. Mutt 1917” signature', where: 'Brushed in black paint on the outer rim of the form, toward the lower left as photographed', detail: 'The only authorial mark on a factory object is a fake name. Duchamp said “Mutt” came from the J. L. Mott Iron Works, a well-known New York plumbing manufacturer, which he altered to “Mutt” with a nod to the popular comic strip Mutt and Jeff, and that “R.” stood for Richard, French slang for a moneybags. (Whether the urinal really came from Mott is itself disputed.) The signature is the entire claim of authorship, painted onto something the artist did not make.' },
    { label: 'The seated-figure silhouette', where: 'The smooth, rounded, symmetrical outline of the upturned bowl', detail: 'Read the curved white shape on its own and it stops being plumbing. Stieglitz himself saw “an oriental look about it, a cross between a Buddha and a Veiled Woman,” and critics have echoed the seated-Buddha or Madonna reading ever since. The resemblance is an accident of an industrial mold, but it is a large part of why the photograph, and not only the idea, became iconic.' },
    { label: 'The pedestal', where: 'The plinth or base Stieglitz stood the object on', detail: 'Stieglitz set the urinal on a pedestal, the standard furniture of sculpture display. It is a quiet, deliberate argument made by staging alone: put a thing on a plinth, light it, and frame it, and you are insisting it be treated as sculpture. The presentation does part of the persuading that the object cannot do for itself.' },
    { label: 'The painting behind it', where: 'On the wall in the background of the photograph, the angular abstract composition', detail: 'The dark, jagged abstract picture hanging behind the urinal is Marsden Hartley’s The Warriors (1913). Its presence places the photograph at Stieglitz’s 291 gallery and surrounds the fixture with real avant-garde company, so the urinal is photographed not as a joke object but as one art work among others.' },
    { label: 'The glaze and the light', where: 'Across the white porcelain, glowing against the dark wall', detail: 'Stieglitz lit the white surface so that it glows out of a dark ground, smoothing the hard industrial object into something almost reverent. The framing does real work: the photographer’s soft, careful light is a large part of why a urinal can look, in this single image, like a thing worth looking at.' },
  ],
  lineage: {
    parents: [
      { label: 'Duchamp’s Bicycle Wheel', mode: 'art', note: 'his first readymade, 1913: an ordinary object chosen, not made' },
      { label: 'Cubist collage', mode: 'art', note: 'pasting real scraps into art opened the door to the found object' },
      { label: 'The First World War', mode: 'civ', note: 'the carnage that made Dada distrust “high” art and reason itself' },
    ],
    children: [
      { label: 'Conceptual art', mode: 'art', note: 'art as idea and decision rather than craft' },
      { label: 'Pop and the found object', mode: 'art', note: 'Warhol’s mass-produced things, Minimalism’s industrial objects' },
      { label: 'The art institution as subject', mode: 'civ', note: 'who confers art-status, and how, becomes the question itself' },
    ],
  },
}
```

## PART B — the section components

```tsx
// ─────────────────────────────────────────────────────────────
// Fountain (Duchamp, 1917) - the five chapters
// ─────────────────────────────────────────────────────────────
function FntCase({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · April 1917" title="A show built on a promise it could not keep" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of 1917, a group of New York artists opened a brand-new exhibition with a deliberately radical rule. The <strong>Society of Independent Artists</strong> modeled itself on the French <em>Soci&eacute;t&eacute; des Artistes Ind&eacute;pendants</em>, and it made a single, ringing promise: <strong>no jury, no prizes</strong>. There would be no panel of experts deciding what was good enough to hang. Anyone who paid the fee, six dollars (a one-dollar initiation plus five dollars of dues), could exhibit anything they liked, and it would be shown. The first exhibition opened on <strong>10 April 1917</strong> at the Grand Central Palace in Manhattan. It was meant to be the most open art show in America.
      </p>
      <p style={proseStyle}>
        <strong>Marcel Duchamp</strong> (1887&ndash;1968), a French artist who had moved to New York two years earlier and was already notorious for his fractured, machine-like paintings, sat on the Society&rsquo;s board and ran its hanging committee. He had, in other words, helped write the no-jury rule. And he decided to test it. Under a fake name, he submitted the least &ldquo;artistic&rdquo; object he could think of.
      </p>
      <p style={proseStyle}>
        The entry came in signed <strong>&ldquo;R. Mutt&rdquo;</strong> and titled <em>Fountain</em>. It was an ordinary <strong>urinal</strong>, a mass-produced porcelain plumbing fixture, laid on its back. Duchamp later said the name was a small joke stacked on a small joke: &ldquo;Mutt comes from Mott Works,&rdquo; the <strong>J. L. Mott Iron Works</strong>, a famous New York plumbing maker, which he twisted to &ldquo;Mutt&rdquo; with a wink at the popular comic strip <em>Mutt and Jeff</em>; and &ldquo;R.&rdquo; was for Richard, French slang for a man with money. (Whether the fixture actually came from Mott is, it turns out, disputed, but that was Duchamp&rsquo;s stated source.)
      </p>

      <SectionHeader accent={accent} label="The suppression" title="Hidden, not rejected" />
      <p style={proseStyle}>
        Here is the part the story usually gets wrong, and it matters. The show had <strong>no jury</strong>. That was its whole point. So <em>Fountain</em> could not be, and was not, formally &ldquo;rejected.&rdquo; What happened instead was quieter and, in its way, worse for the Society: the board <strong>suppressed</strong> it. The object was put out of sight, hidden behind a partition, and never shown to the public, even though the rules guaranteed acceptance to anyone who paid the fee. The Society broke its one promise the moment that promise was inconvenient.
      </p>
      <p style={proseStyle}>
        Duchamp, who had submitted the urinal anonymously precisely to see whether the &ldquo;anything goes&rdquo; pledge was real, now had his answer. He <strong>resigned from the board in protest</strong>. The scandal was not that a urinal had been turned away by a panel of judges. It was that a show which swore it had no judges had quietly judged anyway. The whole episode was an experiment, and the Society had failed it.
      </p>
    </article>
  )
}

function FntMaking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1917" title="Almost nothing was made" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he strangest thing about <em>Fountain</em> is how little there is to describe under &ldquo;the making.&rdquo; There is no canvas, no carving, no casting, no studio labor of the usual kind. Duchamp acquired a <strong>factory-made porcelain urinal</strong>, the sort sitting in any plumber&rsquo;s show window, turned it onto its back, and brushed the words <strong>&ldquo;R. Mutt 1917&rdquo;</strong> onto the rim in black paint. That is the sum of the physical work: a fixture bought, a fixture rotated, a fake name signed. He called objects like this <strong>readymades</strong>, a word he had been using since around 1915 for ordinary manufactured things he selected and declared to be art without altering them in any meaningful way. <em>Fountain</em> is the most famous of them.
      </p>
      <p style={proseStyle}>
        And then the object did the thing that makes its whole history peculiar: it <strong>disappeared</strong>. After the 1917 show, the urinal was lost. There is no surviving original. Duchamp&rsquo;s biographer Calvin Tomkins offered the most likely explanation, which is also the most ordinary: it was probably <strong>thrown out as rubbish</strong>, the common fate of Duchamp&rsquo;s early readymades, which nobody at the time treated as precious. The single most influential object in modern art was almost certainly carted off with the trash.
      </p>

      <SectionHeader accent={accent} label="The photograph" title="Stieglitz makes the only record" />
      <p style={proseStyle}>
        Before it vanished, though, one thing saved it. Duchamp had the photographer <strong>Alfred Stieglitz</strong> (1864&ndash;1946), the most important photographer in America and a champion of modern art, photograph the urinal at his gallery, known as <strong>291</strong>. Stieglitz set it on a pedestal, lit it carefully so the white porcelain glowed, and made a single image. That photograph, reproduced in the spring of 1917, is the <strong>only surviving picture of the original object</strong>. Everything we know about how the lost <em>Fountain</em> actually looked, we know from this one photograph.
      </p>
      <PaintingFigure
        imageUrl={ART_IMG.duchampFountain}
        palette={['#b8b4ac', '#6a665e', '#2a2824']}
        ratio="3/4"
        alt="Alfred Stieglitz's 1917 photograph of Duchamp's Fountain, an inverted porcelain urinal on a pedestal"
        caption={<>Alfred Stieglitz&rsquo;s 1917 photograph of <em>Fountain</em>, the only surviving image of the lost original. A 1917 public-domain photograph, first published in <em>The Blind Man</em> no. 2.</>}
        rights={<>Public domain (US): the Stieglitz photograph was published in 1917, so its US copyright has expired.</>}
        onZoom={onZoom}
      />
      <p style={proseStyle}>
        So the situation is genuinely odd, and worth holding onto as the story goes on. The thing that became the most discussed art object of the century is <strong>a photograph of a lost urinal</strong>, and everything that hangs in museums today carries the same fingerprint of absence. We will come back to that. First, look at what is actually in the picture.
      </p>
    </article>
  )
}

function FntLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The photograph" title="A urinal that has stopped looking like one" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ook at the photograph and the first thing to register is the <strong>turn</strong>. The urinal is not mounted on a wall the way you have seen one a thousand times. It has been rotated about ninety degrees and laid on its back, so the flat rear and the row of drain holes face you. That single rotation does a surprising amount of work. Tipped out of its everyday position, the object is hard to read at a glance; the function drains out of it, and the smooth white shape starts to register as form rather than fixture. Duchamp did almost nothing to the thing, and yet by simply turning it he made it strange.
      </p>
      <p style={proseStyle}>
        Now find the only mark of a human hand anywhere on it. On the outer rim, toward the lower left as the photograph is framed, the signature <strong>&ldquo;R. Mutt 1917&rdquo;</strong> is brushed in black paint. It is worth sitting with how little that is. On a mass-produced factory object, the entire claim of authorship is a fake name in paint, the one gesture that is not the manufacturer&rsquo;s. The signature is the whole argument, and it is a lie about who made it, signed onto a thing nobody made by hand at all.
      </p>

      <SectionHeader accent={accent} label="The accidental figure" title="A cross between a Buddha and a Veiled Woman" />
      <p style={proseStyle}>
        Let the white shape settle and it quietly stops being plumbing. The rounded, symmetrical curve of the upturned bowl reads, to a lot of viewers, as a <strong>seated figure</strong>. Stieglitz himself caught it, writing that the urinal had &ldquo;an oriental look about it, a cross between a Buddha and a Veiled Woman,&rdquo; and critics have seen a seated Buddha or a robed Madonna in it ever since. The resemblance is an accident of an industrial mold, nobody designed it, but it is a real part of why the <em>photograph</em> became iconic and not just the idea behind it. The object got lucky in its own shape.
      </p>

      <SectionHeader accent={accent} label="The staging" title="The pedestal, the painting, and the light" />
      <p style={proseStyle}>
        Notice that Stieglitz set the urinal on a <strong>pedestal</strong>, the plinth that sculpture stands on. That is an argument made entirely by staging: put a thing on a base, light it, and frame it, and you are insisting it be treated as sculpture before a single word is said. Behind it, on the gallery wall, hangs an angular abstract painting, <strong>Marsden Hartley&rsquo;s <em>The Warriors</em></strong> of 1913, which places the photograph at the 291 gallery and surrounds the urinal with genuine avant-garde company. And the light itself persuades: Stieglitz lit the white porcelain so it <strong>glows out of a dark ground</strong>, smoothing the hard industrial object into something almost reverent. The framing is doing a great deal of the convincing the object cannot do for itself, which is precisely the point about where art-status actually comes from.
      </p>
    </article>
  )
}

function FntBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Art was a thing you made" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or roughly five centuries before 1917, the word &ldquo;art&rdquo; pointed at something an artist <strong>made</strong>, by hand, with skill, in a medium: paint on canvas, marble under a chisel, bronze poured into a mold. Value flowed from craft, from beauty, from the originality of the execution and the difficulty of the subject. Even the most radical modern movements before this moment kept that floor. The Cubists shattered the way a face was drawn and the Futurists smeared motion across a canvas, but they were still <strong>painting and sculpting</strong>. They changed how the hand worked. They never questioned that the hand worked at all. A Renaissance altarpiece asked, in effect, <em>how skillfully was this made?</em>
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The artist’s real act is choosing" />
      <p style={proseStyle}>
        <em>Fountain</em> proposes something that pulls the floor out. It says the artist&rsquo;s essential act is not making but <strong>choosing</strong>. A manufactured object, untouched by the artist&rsquo;s hand, becomes art because an artist <strong>selected it, re-titled it, and re-framed it</strong> until its ordinary use fell away. This is the whole logic of the readymade: art as <strong>idea and decision</strong> rather than skill and craft. It cuts art loose from beauty and technique and relocates it in concept and context, in the choice, the title, the signature, the pedestal, the gallery, the institutions that quietly confer the status of &ldquo;art.&rdquo; Where the altarpiece asked how well a thing was made, <em>Fountain</em> asks a colder question: <em>who decided this is art, and why?</em>
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“The Richard Mutt Case”" />
      <p style={proseStyle}>
        The defense of that idea was published, fast and in print, in the spring of 1917. A small Dada magazine called <strong><em>The Blind Man</em></strong> (no. 2, May 1917), edited by <strong>Marcel Duchamp, Henri-Pierre Roch&eacute;, and Beatrice Wood</strong>, ran the Stieglitz photograph opposite a short, unsigned editorial titled <strong>&ldquo;The Richard Mutt Case.&rdquo;</strong> A note on authorship, because it gets garbled: the piece ran <strong>unsigned</strong>. It is often attributed to Duchamp, but it was the work of the magazine&rsquo;s editors, and scholarship frequently credits <strong>Beatrice Wood</strong> in particular. It is not, as you will sometimes see it captioned, simply &ldquo;by Duchamp.&rdquo; Here it is in full:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>They say any artist paying six dollars may exhibit.</p>
        <p style={{ margin: '0 0 12px' }}>Mr. Richard Mutt sent in a fountain. Without discussion this article disappeared and never was exhibited.</p>
        <p style={{ margin: '0 0 12px' }}>What were the grounds for refusing Mr. Mutt&rsquo;s fountain:&mdash;</p>
        <p style={{ margin: '0 0 6px' }}>1. Some contended it was immoral, vulgar.</p>
        <p style={{ margin: '0 0 12px' }}>2. Others, it was plagiarism, a plain piece of plumbing.</p>
        <p style={{ margin: '0 0 12px' }}>Now Mr. Mutt&rsquo;s fountain is not immoral, that is absurd, no more than a bathtub is immoral. It is a fixture that you see every day in plumbers&rsquo; show windows.</p>
        <p style={{ margin: '0 0 12px' }}>Whether Mr. Mutt with his own hands made the fountain or not has no importance. He CHOSE it. He took an ordinary article of life, placed it so that its useful significance disappeared under the new title and point of view&mdash;created a new thought for that object.</p>
        <p style={{ margin: 0 }}>As for plumbing, that is absurd. The only works of art America has given are her plumbing and her bridges.</p>
      </blockquote>
      <p style={proseStyle}>
        Read it again and the manifesto is right there in the middle: <em>He CHOSE it.</em> The capital letters are in the original. The whole new theory of art is in that one line. The hands did not matter; the choosing did. The text even names the mechanism, &ldquo;placed it so that its useful significance disappeared under the new title and point of view,&rdquo; which is exactly what the turn, the title, and the pedestal had done. After this, an artist could make art by deciding, and a great deal of the rest of the century is the working-out of that single sentence.
      </p>

      <SectionHeader accent={accent} label="The debate" title="Whose idea was it?" />
      <p style={proseStyle}>
        One open question runs underneath all of this, and the honest thing is to leave it open. Some scholars, the art historians <strong>Glyn Thompson</strong> and <strong>Julian Spalding</strong> chief among them, argue that <em>Fountain</em> did not originate with Duchamp at all but with <strong>Baroness Elsa von Freytag-Loringhoven</strong> (1874&ndash;1927), a German Dada poet and artist active in New York. Their case rests on a letter Duchamp wrote his sister Suzanne on 11 April 1917 (&ldquo;one of my female friends&rdquo; sent in the urinal), on a reading of the handwriting, and on the Baroness&rsquo;s presence in Philadelphia, where they argue this urinal model was sold. The claim has been strongly contested, notably in <em>The Burlington Magazine</em> in 2019 (essays by Bradley Bailey and by Dawn Ad&egrave;s and Alastair Brotchie), which argue the letter was mistranslated, surface a contemporary account that has Duchamp sending the urinal in himself, and note that the Baroness, famously outspoken to the end of her destitute life, <strong>never once claimed it</strong>. The documentary weight currently sits with Duchamp&rsquo;s authorship. The debate is live, and it deserves to be named rather than tidied away in either direction.
      </p>
    </article>
  )
}

function FntAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · the missing original" title="Every museum Fountain is a replica" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the fact that catches almost everyone out: <strong>there is no original</strong>. The 1917 urinal is lost. So when you see <em>Fountain</em> in a museum, in London or Philadelphia or San Francisco, you are looking at a later, authorized copy. Duchamp sanctioned a string of full-size reproductions over the decades. In <strong>1950</strong> the dealer Sidney Janis bought a urinal at a Paris flea market and Duchamp signed it; that one went to the Philadelphia Museum of Art. In <strong>1963</strong> Ulf Linde made a version in Stockholm with Duchamp&rsquo;s blessing. And in <strong>1964</strong>, the Milan gallerist <strong>Arturo Schwarz</strong> fabricated an <strong>edition of eight</strong>, plus proofs, made to scaled drawings and signed by Duchamp. Counting all of them, about <strong>seventeen versions</strong> of <em>Fountain</em> now exist. The original is not among them.
      </p>
      <p style={proseStyle}>
        The Schwarz copies are not even quite the same material as the thing they replace. The lost original was <strong>porcelain</strong>; the 1964 replicas are <strong>glazed earthenware, painted to resemble porcelain</strong>, with the &ldquo;R. Mutt 1917&rdquo; signature reproduced in black. So the museum object is a careful imitation, in a different clay, of a photograph of a thing that was thrown away. And those imitations are now treated as treasures. The <strong>Tate</strong> in London bought replica 2 of 8 in 1999; at the same Sotheby&rsquo;s sale that year, another of the eight changed hands for well over a million dollars. Authorized copies of a discarded urinal command the prices of masterpieces, which is its own quiet last joke on the whole question of where value comes from.
      </p>

      <SectionHeader accent={accent} label="The afterlife" title="The most influential object of the century" />
      <p style={proseStyle}>
        For something hidden in 1917 and lost soon after, <em>Fountain</em>&rsquo;s reach is hard to overstate. In a 2004 poll, five hundred art-world figures named it the <strong>most influential artwork of the twentieth century</strong>, ahead of Picasso. The reason is the idea it planted. <em>Fountain</em> is the foundation stone of <strong>Conceptual art</strong>, the art that lives in ideas rather than objects, and the direct ancestor of a great deal that followed: Andy Warhol and Pop art&rsquo;s embrace of the mass-produced, Minimalism&rsquo;s plain industrial objects, the found object dropped into a gallery and called a work. Each of them runs on the permission Duchamp took here, that the choosing is the art.
      </p>
      <p style={proseStyle}>
        And the absence at the center never quite goes away. The thing itself is gone. What survives is a single photograph, an unsigned editorial, a handful of replicas in a different clay, and a question that will not close. That, in the end, is exactly the shape of what <em>Fountain</em> argued: not that a urinal is beautiful, but that art was never really in the object at all. It was in the choice, and the choice outlived the thing.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  fountain: { case: FntCase, making: FntMaking, looking: FntLooking, break: FntBreak, afterlife: FntAfterlife },
```
