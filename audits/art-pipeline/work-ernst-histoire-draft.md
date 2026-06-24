# DRAFT — Max Ernst, *Histoire Naturelle* (Natural History) (1926)

Work-read for the Surrealism chain. Authored through the art content pipeline from `work-ernst-histoire-factpack.md` (source of truth). Two parts below: PART A is the `ERNST_HISTOIRE` const for `src/lib/art-content.ts`; PART B is the five `Ern*` section components + the NARRATIVES registry comment for `art-section-reader.tsx`.

Notes for the wirer / coordinator:
- `heroImage: ART_IMG.ernstHistoire` already exists in `art-content.ts` (line 182, `/art/ernst-histoire-fugitive.jpg`) — a single representative plate, *The Fugitive (L'Évadé)*, plate 30. The looking section describes THAT plate; the read as a whole is the portfolio + the frottage method.
- `rights: 'pd-us'` is a fact about the work's US status only (published 1926). The factpack flags that no born-verified Commons asset exists (Ernst d. 1976; in copyright in France/EU until 2047). The hero is treated as a fair-use editorial plate scan per the wirer's separate decision; not a Commons-hosted asset.
- Medium is a print portfolio (collotype reproductions of frottage drawings), NOT a painting and NOT the rubbings themselves. Frottage ≠ grattage. Plate count = 34. Arp wrote the preface.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Histoire Naturelle (Natural History), Max Ernst, 1926. Portfolio of 34
// collotypes (phototypie) AFTER frottage — photomechanical reproductions of
// Ernst's pencil-rubbing drawings, NOT a single painting and NOT the original
// rubbings. Frottages executed 1925 (technique discovered 10 Aug 1925, on the
// floorboards of a seaside inn at Pornic); portfolio published 1926, Paris, by
// Galerie Jeanne Bucher, preface by Hans (Jean) Arp. Edition ~300 (+6 hors-
// commerce). Authored through the art content pipeline (fact pack → Opus → 5
// gates → revise). Chapter prose in art-section-reader.tsx NARRATIVES
// ['ernst-histoire'] (Ern… prefix). FACT HANDLING (gate-guarded):
//   • frottage = RUBBING a pencil over paper laid on a textured surface; grattage
//     (1927) = SCRAPING wet paint — do NOT blur the two. This is frottage.
//   • the plates are collotype REPRODUCTIONS after frottage, not "34 frottages."
//   • the hero is one representative plate, The Fugitive (L'Évadé), plate 30,
//     held by the National Gallery of Victoria, Melbourne; the looking section
//     describes that plate.
//   • KEY STATEMENT = Ernst's own account of the floorboard discovery from
//     "Beyond Painting" (Au-delà de la peinture, 1936; English ed. Motherwell,
//     Wittenborn, Schultz, 1948), quoted verbatim with a translation-variant flag.
//   • PD-US only (published 1926); in copyright France/EU to 2047, so no Commons
//     asset — rights: 'pd-us' is the US status, not a hosting license.
// ─────────────────────────────────────────────────────────────
export const ERNST_HISTOIRE: ArtWorkContent = {
  id: 'ernst-histoire',
  name: 'Histoire Naturelle',
  shortName: 'Histoire Naturelle',
  year: 1926,
  artist: 'Max Ernst',
  artistId: 'ernst',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Portfolio of 34 collotypes after frottage',
  dimensions: '10 1/4 in × 16 3/4 in (each plate, orientation varies)',
  location: 'Edition of ~300; examples at MoMA, Tate, the National Gallery of Victoria and elsewhere',
  acquired: 'A published portfolio, not a unique object; examples held across major print rooms, our hero plate at the National Gallery of Victoria, Melbourne',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 8, total: 9 },
  hook: 'A mock natural-history atlas whose 34 plates were not drawn but rubbed: pencil dragged over the grain of old floorboards until forests, feathers and staring eyes surfaced out of pure chance, and Ernst, who called himself a spectator of his own pictures, simply read them out.',
  heroImage: ART_IMG.ernstHistoire,
  heroCredit: 'Ernst, The Fugitive (L’Évadé), plate 30 from Histoire Naturelle, 1926 · National Gallery of Victoria, Melbourne',
  heroAspect: 1.63, // a single landscape plate, ~26 × 42.5 cm → W/H ≈ 1.63
  heroFit: 'contain', // the whole plate, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1925–26', k: 'Made / published' },
    { v: '34 plates', k: 'Collotypes after frottage' },
    { v: 'Jeanne Bucher', k: 'Published by' },
  ],
  sections: [
    { id: 'floorboards', eyebrow: 'Pornic · 10 Aug 1925', dateLabel: '10 Aug 1925', title: 'The rainy night the floor started drawing', blurb: 'Stuck in a seaside inn on a wet evening, Ernst is transfixed by the grooved floorboards of his room, lays paper over them, rubs a pencil across, and watches the wood grain turn into images. A childhood vision in a panel of false mahogany had primed him for it. Frottage is born.', progress: 0.08 },
    { id: 'method', eyebrow: 'The making', dateLabel: '1925–1926', title: 'A pencil, a grainy surface, and a reader of accident', blurb: 'What frottage is, plainly: rub a soft pencil over paper laid on grained wood, leaves, sacking, breadcrust, until chance patterns surface, then read creatures and landscapes into them. Ernst gathers the drawings into a mock scientific atlas, and in 1926 Jeanne Bucher publishes 34 collotype reproductions, with a preface by Arp.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The plate', dateLabel: '10 1/4 in × 16 3/4 in', title: 'The Fugitive: an eye on a wheel, floating over wood', blurb: 'One representative plate, The Fugitive (L’Évadé), plate 30: a spoked disc like an eye or a wheel set into a finned, whiskered body, floating over a cross-hatched wood-grain ground, all in soft graphite-gray rubbing. Trace the grain and you are looking at floorboard, not landscape.', progress: 0.52 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1925', title: 'When the image stopped coming from the hand', blurb: 'For centuries a drawing was something the artist invented and executed; the marks came from the will. Frottage moves the image-source out into the chance texture of the world and turns the artist into someone who reads accident rather than inventing form, the visual cousin of Surrealist automatic writing.', progress: 0.76 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1926–today', title: 'The grain that ran forward into Surrealism', blurb: 'A 300-copy edition that scattered into the world’s print rooms, the proof-of-concept for chance and found texture as an engine for fine art. The line runs on to grattage, décalcomania, and the automatist abstraction that followed, with Ernst recast from author to spectator of his own pictures.', progress: 0.96 },
  ],
  provenance: [
    { year: '1925', who: 'Max Ernst (the artist)', place: 'Pornic / Paris', note: 'Frottages executed in 1925, the technique discovered on 10 August 1925 on the floorboards of a seaside inn at Pornic. The original rubbings are separate works; the portfolio reproduces a selection of them.', price: null },
    { year: '1926', who: 'Galerie Jeanne Bucher (publisher)', place: 'Paris', note: 'Published the portfolio in 1926 as 34 collotypes (phototypie) after frottage, with a preface by Hans (Jean) Arp. An edition of about 300 (plus 6 hors-commerce), printed on Japan and vellum papers; all but the hors-commerce copies signed by the artist.', price: null },
    { year: '1926–today', who: 'Museum print rooms worldwide', place: 'New York · London · Melbourne · elsewhere', note: 'As a published edition, examples are held across major institutions: the Museum of Modern Art, New York (full portfolio, plus plates catalogued individually), Tate, London, the National Gallery of Victoria, Melbourne (which holds the plate shown here, The Fugitive), and German Ernst collections at Bonn and Brühl. Numbered copies still circulate at auction. No single acquisition; no canonical price.', price: null, museum: true },
  ],
  figures: [
    { name: 'Max Ernst', role: 'The artist', palette: ['#5a5346', '#332e26', '#12100c'] },
    { name: 'Hans (Jean) Arp', role: 'Wrote the preface', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'Jeanne Bucher', role: 'Published the portfolio', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'André Breton', role: 'Led the Surrealists; automatism', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Sigmund Freud', role: 'The unconscious frottage taps', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The spoked eye, or wheel', where: 'Upper center of the plate, the round disc with radiating spokes set into the creature’s body', detail: 'The plate’s engine: a circular disc crossed by radiating spokes, so it reads at once as a single staring eye and as a wheel. The single eye is a recurring motif across the portfolio. Look at how the spokes are not drawn so much as found, ridges of rubbed graphite that the eye assembles into a rim and hub. Whether it is eye or wheel is left for you; the picture lets it flip between the two.' },
    { label: 'The finned creature-body', where: 'Wrapped around and below the disc, the soft tapering form the “eye” sits inside', detail: 'The disc is lodged in a body: a fish-or-beast shape, finned and tapering, that gives the floating eye a creature to belong to. It is the “organism” the deadpan title (The Fugitive) asks you to read it as, a specimen in Ernst’s invented natural history. Nothing here is observed from life; the body is grain coaxed into anatomy.' },
    { label: 'The whisker and blade forms', where: 'Springing out from the body, the thin curved spines and leaf-like blades around the creature', detail: 'Fine whisker-like spines and longer blade or feather shapes radiate from the body. Trace any one of them and it dissolves back into the parallel striations of the wood it was rubbed from. This is the portfolio’s vocabulary, leaves, feathers, stalks, antennae, all conjured from the same grain.' },
    { label: 'The cross-hatched wood-grain ground', where: 'The whole field behind the creature, the striated, cross-hatched ground it floats over', detail: 'The “sky” or “ground” the creature floats over is the literal rubbing of grained, cross-hatched wood, the floorboard itself surfacing as texture. Follow the parallel striations and you are looking at the seam between board and image: it is landscape and lumber at the same time, and the picture never quite lets you forget the second.' },
    { label: 'Frottage, the method itself', where: 'Everywhere, in the soft, even, graphite-gray rubbing that builds every form on the plate', detail: 'There is no outline, no hand-laid shading, no observed contour anywhere on the sheet. Every form is built from pencil dragged over a textured surface (frottage, from the French frotter, “to rub”) and then nudged into legibility. The “drawing” is found, not laid down, the accident does the drawing.' },
    { label: 'It is a reproduction, and it shows', where: 'In the even, slightly velvety tone of the print, with none of the bite of an engraved line', detail: 'The plate has the smooth, faintly velvety tonality of a collotype, a photomechanical print, rather than the tooth of an original graphite rubbing or the bite of an etched line. Histoire Naturelle publishes the frottages; it is not the rubbings. What you are looking at is a photograph of a drawing, printed.' },
  ],
  lineage: {
    parents: [
      { label: 'Dada collage', mode: 'art' },
      { label: 'Surrealist automatism', mode: 'art' },
      { label: 'Chance and the unconscious', mode: 'civ' },
    ],
    children: [
      { label: 'Grattage and décalcomania', mode: 'art' },
      { label: 'Automatist abstraction', mode: 'art' },
      { label: 'Chance as a method in art', mode: 'civ' },
    ],
  },
}
```

## PART B — the five section components + registry

```tsx
// ─────────────────────────────────────────────────────────────
// Histoire Naturelle (Ernst, 1926) — the five chapters
// ─────────────────────────────────────────────────────────────
function ErnFloorboards({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Pornic · 10 August 1925" title="The rainy night the floor started drawing" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        n a wet evening in <strong>August 1925</strong>, a German-born painter named <strong>Max Ernst</strong> (1891&ndash;1976) was stuck indoors at a small seaside inn at <strong>Pornic</strong>, a fishing town on the Atlantic coast of France. He had nothing to do and a head full of nothing, and he found himself staring at the <strong>floor</strong>. The boards of his room were old and scrubbed, their grain worn into deep grooves by a thousand washings, and in the low light he could not stop looking at them. By his own account the grain began to behave like a picture, the way a water stain on a ceiling will start, if you let it, to look like a face.
      </p>
      <p style={proseStyle}>
        He had felt this before. As a child Ernst had lain in bed in front of a panel of <strong>imitation mahogany</strong>, a cheap painted wood-grain, and watched it conjure half-asleep visions, faces and creatures swimming up out of the fake grain as he drifted off. The floorboards at Pornic woke that old habit of seeing. So he did the obvious experimental thing: he laid <strong>sheets of paper</strong> over the boards and <strong>rubbed a soft pencil</strong> back and forth across them, so that the ridges of the grain printed themselves onto the paper as a pattern of dark and light. (The technique he had just stumbled into is called <strong>frottage</strong>, pronounced &ldquo;fro-TAHZH,&rdquo; from the French <em>frotter</em>, &ldquo;to rub.&rdquo; We will come to exactly how it works in a moment.)
      </p>
      <p style={proseStyle}>
        What came up off the boards startled him. The rubbings did not look like wood any more. In his telling they &ldquo;lost the character of the material being studied&rdquo; and turned into something else entirely, forests, leaves, eyes, beasts, the sea. The grain of a floorboard had become a window onto a whole imaginary natural world, and all he had done was rub a pencil over it. He went on rubbing, that night and after, and out of the drawings he eventually assembled a kind of mock scientific picture-book of invented nature. He called it <em>Histoire Naturelle</em> &mdash; <strong>Natural History</strong>.
      </p>
      <p style={proseStyle}>
        Two dates are worth keeping apart, because popular accounts collapse them. The <strong>frottages were made in 1925</strong>; the discovery on the floorboards is Ernst&rsquo;s own dated moment, <strong>10 August 1925</strong>. The <strong>portfolio was published a year later, in 1926</strong>, in Paris. Frottages 1925, portfolio 1926, two separate things, and the difference between them turns out to matter more than it sounds, as we will see.
      </p>
    </article>
  )
}

function ErnMethod({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1925" title="What frottage actually is" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        rottage is so simple a child does it on a coin and a piece of paper. You take a <strong>grainy, textured surface</strong> &mdash; weathered floorboards, the grain of a plank, a leaf, a piece of sacking, the crust of a loaf of bread &mdash; lay a sheet of paper over it, and <strong>rub a soft pencil across the paper</strong> so that the texture underneath surfaces as a pattern of marks. The high ridges come up dark; the grooves stay pale. What you get is not a drawing of the surface but a direct imprint of it, the texture itself transferred straight onto the page.
      </p>
      <p style={proseStyle}>
        The ordinary part ends there. Ernst&rsquo;s move was what he did <em>after</em> the rubbing. He looked at the field of accidental marks and <strong>read images into them</strong>, the way you find a dog or a ship in a passing cloud, and then worked them up, nudging a grain pattern here, sharpening a shape there, until a forest or a feathered beast or a single staring eye stood clearly out of the chance texture. He was not inventing the forms out of his own head; he was <strong>finding</strong> them already latent in the marks the surface had handed him. The wood did half the work and the eye did the other half.
      </p>
      <p style={proseStyle}>
        He extended it past floorboards fast. Any grained or rough surface would do, and the portfolio&rsquo;s plates are rubbed from a whole catalogue of them. The result is a mock <strong>natural-history atlas</strong>: the frottages are presented as if they were the engraved plates of a straight-faced scientific book about nature, complete with deadpan, taxonomic-sounding titles &mdash; <em>The Habit of Leaves</em>, <em>The Wheel of Light</em>, <em>Seismic Plants</em>, <em>The Fugitive</em>. Wood grain stands in for nature itself, and the joke and the uncanny both live in the gap between the solemn caption and the accident that produced the image.
      </p>

      <SectionHeader accent={accent} label="A book, not the rubbings" title="What got published, and who put it out" />
      <p style={proseStyle}>
        Now the distinction that matters for what you are actually looking at on this page. <em>Histoire Naturelle</em> is <strong>not</strong> the original rubbings. In <strong>1926</strong> the Paris gallery of <strong>Jeanne Bucher</strong> published the portfolio as a set of <strong>34 plates</strong> (numbered I&ndash;XXXIV), and those plates are <strong>collotypes</strong> &mdash; photomechanical reproductions, a printing process that photographs a drawing and prints it with an even, slightly velvety tone &mdash; <em>after</em> the frottages. So the portfolio reproduces Ernst&rsquo;s pencil rubbings; it does not contain them. The original frottage drawings are separate works. Calling the portfolio &ldquo;34 frottages,&rdquo; as if the sheets were the rubbings themselves, gets it wrong: they are prints of the rubbings. The poet <strong>Hans Arp</strong> (also known as Jean Arp), Ernst&rsquo;s old Dada comrade, wrote the preface.
      </p>
      <p style={proseStyle}>
        One more thing not to confuse, because the two words rhyme and the techniques are cousins. <strong>Frottage</strong> (1925) is <em>rubbing</em> a pencil over paper laid on a textured surface &mdash; a drawing technique, and the whole basis of <em>Histoire Naturelle</em>. <strong>Grattage</strong>, which Ernst developed a couple of years later, in 1927, is <em>scraping</em> wet paint off a canvas laid over a textured object &mdash; the oil-paint cousin of the same idea. <em>Histoire Naturelle</em> is frottage. Rubbing, not scraping. Keep them apart.
      </p>
    </article>
  )
}

function ErnLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The plate" title="One sheet out of the thirty-four" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he portfolio has thirty-four plates; the one shown here is a single representative sheet, <strong>plate 30</strong>, titled <em>The Fugitive</em> (in French, <em>L&rsquo;&Eacute;vad&eacute;</em>, &ldquo;the escapee&rdquo;). It is a small, <strong>landscape-format</strong> plate, roughly <strong>ten and a quarter inches tall by sixteen and three-quarters inches wide</strong>, and the first thing to register is how quiet it is: no color, no hard outline, just a soft, even <strong>graphite-gray</strong> field, the look of pencil dragged over something grained. Everything on it was rubbed up, not drawn.
      </p>

      <SectionHeader accent={accent} label="The eye, or the wheel" title="A spoked disc at the heart of the sheet" />
      <p style={proseStyle}>
        At the center is the thing that holds the plate together: a round <strong>disc crossed by radiating spokes</strong>. It reads two ways at once. It is a single <strong>staring eye</strong> &mdash; a lone eye is one of the recurring motifs across the whole portfolio &mdash; and it is just as plainly a <strong>wheel</strong>, a rimmed hub with spokes running out to the edge. Look at how it is made: the spokes are not ruled lines but ridges of rubbed grain that your eye assembles into a rim and a hub. The picture never decides between eye and wheel, and it does not have to. Letting the shape flip between the two is the whole pleasure of it.
      </p>

      <SectionHeader accent={accent} label="The creature" title="A finned body for the floating eye" />
      <p style={proseStyle}>
        The disc does not float free. It is lodged inside a <strong>body</strong> &mdash; a soft, tapering, <strong>finned</strong> form, something between a fish and a beast, that gives the eye-wheel a creature to belong to. This is the &ldquo;organism&rdquo; the deadpan title asks you to take it for: a fugitive specimen in Ernst&rsquo;s invented natural history, the kind of thing a straight-faced atlas would caption and number. Nothing about it was observed from any animal. It is grain coaxed into anatomy, a body built out of the wood&rsquo;s own pattern.
      </p>
      <p style={proseStyle}>
        Springing off the body are thin curved <strong>whisker-like spines</strong> and longer <strong>blade or feather shapes</strong>. Follow any one of them with your eye and it dissolves, after an inch, back into the parallel striations of the wood it was rubbed from. That is the portfolio&rsquo;s whole vocabulary in miniature &mdash; whiskers, blades, leaves, feathers, antennae &mdash; and all of it is the same trick: a recognizable natural part conjured out of nothing but rubbed grain.
      </p>

      <SectionHeader accent={accent} label="The ground" title="The floorboard, never quite hidden" />
      <p style={proseStyle}>
        The creature floats over a field of <strong>cross-hatched, striated grain</strong> &mdash; the &ldquo;ground&rdquo; or &ldquo;sky&rdquo; of the plate, and the literal rubbing of grained wood, the floorboard itself surfacing as texture. Trace the parallel striations across the lower half of the sheet and you are looking straight at the seam where board becomes image: it is a landscape and a plank at the same instant, and the plate will not let you settle on one. That oscillation, the eye flipping between &ldquo;this is texture&rdquo; and &ldquo;this is a creature in a place,&rdquo; is exactly the effect Ernst was after. It makes you do the seeing.
      </p>
      <p style={proseStyle}>
        And keep one fact in view as you look: this is a <strong>reproduction</strong>. The plate has the smooth, faintly velvety tone of a collotype print, none of the bite of an engraved line and none of the tooth of an original graphite rubbing. You are looking at a photograph of a drawing, printed in a book. <em>Histoire Naturelle</em> publishes the frottages; the sheet in front of you is not the rubbing, but its careful, even-toned echo.
      </p>
    </article>
  )
}

function ErnBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="The image used to come from the hand" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or as long as there had been drawing, a drawing was something an artist <strong>invented and executed</strong>. The marks began in the hand and the will: you decided what to put down and then you put it down, with skill, observing the world or composing from imagination, but in either case <em>originating</em> the picture. Even Dada collage, Ernst&rsquo;s own earlier mode, still worked by <strong>choosing and assembling</strong> fragments &mdash; the artist picked the pieces. Whatever else changed across the centuries, the <strong>source of the image was the artist.</strong> That was the floor under the whole practice. Nobody thought to question it because there was nothing obviously else for an image to come from.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The artist becomes a reader of accident" />
      <p style={proseStyle}>
        Frottage moved the source. In <em>Histoire Naturelle</em> the image does not begin in the hand; it begins in the <strong>chance texture of the world</strong>, the grain of a floorboard the artist did not make and cannot control. The pencil only transfers it. The artist&rsquo;s real job shifts from <strong>inventing form to reading accident</strong> &mdash; from author to, in Ernst&rsquo;s own word, <strong>spectator</strong> of his own pictures. He watches what the grain hands up and chooses what to see in it. Three things follow, and together they are the break:
      </p>
      <p style={proseStyle}>
        First, <strong>chance and found texture become a legitimate engine for fine art</strong> &mdash; not a party trick but a generative method, a line that runs straight forward to grattage, to d&eacute;calcomania (pressing and peeling paint), and on to the chance-driven abstraction that came after. Second, it gives Surrealism a <strong>repeatable visual method for tapping the unconscious</strong>: the eye reading shapes into random marks is the picture-making cousin of <strong>automatic writing</strong>, the technique the poet <strong>Andr&eacute; Breton</strong> and his Surrealist circle used to let the unconscious mind write without the conscious mind censoring it. Frottage is automatism with a pencil. Third, it quietly demolishes the old idea of <strong>drawing skill</strong>: there is no modeling, no observed contour, no conventional draftsmanship anywhere on the sheet, and yet legible creatures and forests appear. The accident does the drawing.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="Ernst, on the floorboards" />
      <p style={proseStyle}>
        Ernst set the discovery down himself, years later, in an essay called <em>Beyond Painting</em> (in French, <em>Au-del&agrave; de la peinture</em>, first published 1936; the English version appeared in 1948). It is the closest thing the technique has to a founding statement:
      </p>
      <blockquote style={{ margin: '4px 0 16px', padding: '2px 0 2px 16px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, fontStyle: 'italic', lineHeight: 1.55, color: INK }}>
        &ldquo;&hellip; finding myself one rainy evening in a seaside inn, I was struck by the obsession that showed to my excited gaze the floor-boards upon which a thousand scrubbings had deepened the grooves. I decided then to investigate the symbolism of this obsession, and, in order to aid my meditative and hallucinatory faculties, I made from the boards a series of drawings by placing on them, at random, sheets of paper which I undertook to rub with black lead.&rdquo;
      </blockquote>
      <p style={proseStyle}>
        And on what the rubbings turned into:
      </p>
      <blockquote style={{ margin: '4px 0 16px', padding: '2px 0 2px 16px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, fontStyle: 'italic', lineHeight: 1.55, color: INK }}>
        &ldquo;The drawings thus obtained steadily lost &hellip; the character of the material being studied &mdash; wood &mdash; and assumed the aspect of unbelievably clear images.&rdquo;
      </blockquote>
      <p style={proseMutedStyle}>
        The words are genuinely Ernst&rsquo;s, from <em>Beyond Painting</em> (English edition, ed. Robert Motherwell, 1948), and the dated discovery (a rainy evening, the seaside inn at Pornic, 10 August 1925) is his own and repeated by the museums. The exact wording, though, drifts between translations: &ldquo;black lead&rdquo; (graphite) is sometimes rendered &ldquo;soft pencil,&rdquo; &ldquo;floor-boards&rdquo; sometimes &ldquo;floorboards,&rdquo; the &ldquo;obsession&rdquo; phrased a few different ways. Read it, then, as Ernst&rsquo;s known account in the standard 1948 English text rather than one fixed, canonical original. The thought is firmly his; the precise phrasing is a translator&rsquo;s.
      </p>
    </article>
  )
}

function ErnAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1926" title="An edition, not an object" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        ecause <em>Histoire Naturelle</em> is a <strong>published portfolio</strong> and not a unique painting, its &ldquo;provenance&rdquo; &mdash; the chain of who has owned a work of art &mdash; is not a single trail but a scatter. In <strong>1926</strong> the Paris gallery of <strong>Jeanne Bucher</strong> printed an edition of about <strong>300 copies</strong> (plus six set aside as hors-commerce, &ldquo;not for sale&rdquo;), on Japan and vellum papers, nearly all of them signed by Ernst. The portfolio went out into the world as a multiple, the way a book does, so that instead of one owner there are hundreds, and instead of one wall there are print rooms across several countries.
      </p>
      <p style={proseStyle}>
        Where they landed is a list of the great collections. The <strong>Museum of Modern Art</strong> in New York holds the full portfolio and catalogues many of its plates individually. <strong>Tate</strong> in London holds it; German Ernst collections at <strong>Bonn</strong> and at the <strong>Max Ernst Museum</strong> in Br&uuml;hl have shown it; and the <strong>National Gallery of Victoria</strong> in Melbourne holds the very plate reproduced on this page, <em>The Fugitive</em>. Numbered copies of the edition still surface at auction now and again, which is exactly what you would expect of a published portfolio rather than a one-of-a-kind object. There is no headline sale, no single price to quote, no dramatic chain of hands. The work simply dispersed.
      </p>

      <SectionHeader accent={accent} label="The line forward" title="Chance, turned into a method everyone could use" />
      <p style={proseStyle}>
        What did not disperse was the idea. Frottage was a <strong>proof of concept</strong>: it showed that <strong>chance and found texture could be a real engine for serious art</strong>, not a novelty. Ernst himself carried it straight into <strong>grattage</strong> in 1927 (the scraping-paint cousin) and later into <strong>d&eacute;calcomania</strong>; the broader Surrealist program of letting accident and the unconscious supply the image runs through these techniques and on into the chance-driven abstraction that followed the war. The eye reading creatures out of random marks &mdash; cloud-gazing made into a discipline &mdash; turned out to be one of the twentieth century&rsquo;s most portable ideas.
      </p>
      <p style={proseStyle}>
        And it leaves the artist in a strange new posture, which is really the point of the whole thing. Ernst stopped describing himself as the <strong>author</strong> of his pictures and started calling himself their <strong>spectator</strong>: the one who watches the floorboards draw and decides what he is looking at. The forms in <em>The Fugitive</em> &mdash; the eye that is also a wheel, the finned body, the whiskers that melt back into grain &mdash; were not, in his account, invented by him at all. They were already in the wood. He just rubbed a pencil over it and read them out.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'ernst-histoire': { floorboards: ErnFloorboards, method: ErnMethod, looking: ErnLooking, break: ErnBreak, afterlife: ErnAfterlife },
```
