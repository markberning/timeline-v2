# WORK-READ DRAFT — Leonora Carrington, *Self-Portrait (Inn of the Dawn Horse)* (c.1937–38)

Authored through the art content pipeline (work id `carrington-self`). Source of
truth: `audits/art-pipeline/work-carrington-self-factpack.md`. NOT in src/, not
committed.

Shape mirrors `STARRY_NIGHT` / `CITY_RISES` (const) and the `Cel*` / `Cty*`
component family + NARRATIVES registry comment (reader). Shared helpers only
(`SectionHeader`, `DropCap`, `proseStyle`, `SERIF`, `INK`, `ART_ACCENTS`,
`ART_IMG`) — no redefs, no imports. Em-dash rule observed: no literal `—` in
rendered strings; plain TS fields use commas/parens/colons; JSX text uses
`&mdash;`. Dimensions ft/in only. Every `<SectionHeader>` has a `label`, the
first per component carries `first`. NARRATIVES keys = section ids.

**RIGHTS NOTE (load-bearing):** this work is `in-copyright` (c.1937–38; Carrington
d.2011, so it is NOT public domain). The hero image is shown small, credited,
under fair use. Date in prose is always **c.1937–38** (Met's "ca. 1937-38": begun
London 1937, finished Paris 1938); `year: 1938` is the integer sort field only.

---

## PART A — the const (append to `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Self-Portrait (Inn of the Dawn Horse), Leonora Carrington, c.1937-38,
// The Metropolitan Museum of Art (2002.456.1). IN COPYRIGHT (Carrington d.2011):
// rights 'in-copyright', hero shown small/credited under fair use. DATE TRAP:
// always "c.1937-38" in prose (Met's "ca. 1937-38"; begun London 1937, finished
// Paris 1938); year:1938 is the sort field only. The animal symbolism (hyena =
// wild kindred self, white horse = freedom, rocking-horse = childhood) is
// SCHOLARLY READING, attributed softly, never asserted as Carrington's stated
// fact. KEY STATEMENT = the muse refusal (Whitney Chadwick source); the short
// form is the display quote, the longer "I thought it was bullshit..." variant
// flagged. Max Ernst kept proportionate (it explains her entry into Surrealism
// and the canvas's path to New York; this is HER self-portrait).
// Chapter prose in art-section-reader.tsx NARRATIVES['carrington-self'] (Car… prefix).
// ─────────────────────────────────────────────────────────────
export const CARRINGTON_SELF: ArtWorkContent = {
  id: 'carrington-self',
  name: 'Self-Portrait',
  shortName: 'Self-Portrait (Inn of the Dawn Horse)',
  year: 1938,
  artist: 'Leonora Carrington',
  artistId: 'carrington',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 1 5/8 in × 2 ft 8 in',
  location: 'The Metropolitan Museum of Art',
  acquired: 'The Pierre and Maria-Gaetana Matisse Collection, 2002 (2002.456.1)',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 7, total: 9 },
  hook: 'A 20-year-old woman paints herself in riding clothes in a locked dream-room, hand out to a lactating hyena, a rocking-horse floating on the wall and a real horse galloping free out the window: a female Surrealist as the dreamer, not the dreamed-of muse.',
  heroImage: ART_IMG.carringtonSelf,
  heroCredit: 'Carrington, Self-Portrait (Inn of the Dawn Horse), c.1937-38 · The Metropolitan Museum of Art · in copyright, shown small under fair use.',
  heroAspect: 1.25, // 65 × 81.2 cm → W/H ≈ 1.25, landscape
  heroFit: 'contain', // the whole canvas, never cropped
  rights: 'in-copyright', // c.1937-38, Carrington d.2011; NOT public domain
  stats: [
    { v: 'c.1937–38', k: 'Painted' },
    { v: '2′1⅝″ × 2′8″', k: 'Dimensions' },
    { v: 'The Met', k: 'Now at' },
  ],
  sections: [
    { id: 'arrival', eyebrow: 'London → Paris · 1937–38', dateLabel: 'c.1937–38', title: 'A runaway debutante picks up a brush', blurb: 'At about twenty, a rebellious daughter of a wealthy Lancashire textile family has just walked out of that life, met the Surrealist painter Max Ernst, and crossed to France. She begins this canvas in London and finishes it in Paris, a participant in Surrealism from the start, not a bystander.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'c.1937–38', title: 'A dream-room, furnished from her own head', blurb: 'Not a record of a real room. Carrington builds an enclosed interior and fills it with a private bestiary, the same creatures that walk through her stories of these years, painted with a flat, exact, storybook clarity that asks you to believe it.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 1 5/8 in × 2 ft 8 in', title: 'What is in the room', blurb: 'Carrington on the edge of a blue chair in white riding clothes, wild dark hair, one hand reaching toward a spotted hyena with heavy teats and human eyes; a white rocking-horse floating on the wall behind her, and through the curtain a white horse galloping free.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Surrealism', title: 'The dreamer, not the dream', blurb: 'In most Surrealism the woman is the object, the muse, the dreamed-of body men paint. Here a young woman Surrealist paints her own dream-symbolism and her own animal-kin self, in androgynous clothes, staring back: the seer, not the seen.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1939–today', title: 'The escape it predicted came true', blurb: 'War broke, Ernst was interned, Carrington fled to Spain and a breakdown, then reached Mexico in 1942 to become a central figure of its Surrealism. The canvas she left behind travelled to New York with Ernst and ended, in 2002, at the Met.', progress: 0.96 },
  ],
  // Provenance: endpoints firm (Carrington/Ernst → Met 2002, 2002.456.1, credit
  // line verbatim). The Pierre Matisse handoff is "after December 1942" per the
  // factpack, so stated as approximate. No prices known or asserted.
  provenance: [
    { year: 'c.1938–1941', who: 'Leonora Carrington, then Max Ernst', place: 'France', note: 'Carrington left the painting with Ernst in France at the outbreak of the Second World War, when she fled the country.', price: null },
    { year: '1941', who: 'Max Ernst', place: 'New York', note: 'Ernst carried the canvas to New York when he emigrated to the United States in 1941.', price: null },
    { year: 'after 1942', who: 'Pierre Matisse (dealer)', place: 'New York', note: 'Ernst gave it to the art dealer Pierre Matisse (youngest son of Henri Matisse), reportedly after December 1942.', price: null },
    { year: '1989', who: 'Maria-Gaetana Matisse', place: 'New York', note: 'Inherited on the death of Pierre Matisse in 1989.', price: null },
    { year: '2002–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Given by the Pierre and Maria-Gaetana Matisse Foundation. Credit line: The Pierre and Maria-Gaetana Matisse Collection, 2002. Accession 2002.456.1. On view in the Modern wing.', price: null, museum: true },
  ],
  figures: [
    { name: 'Leonora Carrington', role: 'The painter, age ~20', palette: ['#3a5a4a', '#8a7a52', '#15140e'] },
    { name: 'The female hyena', role: 'Her animal-kin self', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'The white horse', role: 'Freedom, out the window', palette: ['#d8d2c4', '#6a7250', '#14140e'] },
    { name: 'Max Ernst', role: 'Lover · carried it to New York', palette: ['#8a6b3a', '#3a2e1c', '#0e0a06'] },
    { name: 'Whitney Chadwick', role: 'Historian · the muse quote', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
  ],
  annotations: [
    { label: 'The spotted hyena, facing her', where: 'Lower center, between Carrington and the viewer, turned toward her', detail: 'A striped, spotted hyena stands in front of the chair, its head turned up toward Carrington and mirroring her outstretched hand. Look at two things: its eyes, which are unsettlingly human, and the row of heavy, pendulous teats along its belly, which read as engorged or lactating. Scholars read this female hyena as Carrington’s self-surrogate, the wild, sexually-ambiguous animal she chose to stand for herself (the same creature stars in her story The Debutante of these years, where a hyena takes a young woman’s place at a society ball). That reading is interpretation, well attested and reasonable, not a meaning Carrington stated about this canvas.' },
    { label: 'The white rocking-horse, floating on the wall', where: 'Behind and above her head, hung against the back wall', detail: 'A pale rocking-horse, a child’s toy, hangs weightless on the wall behind her, with no rockers touching any floor. It floats. Scholars tie it to childhood and to Carrington’s own play Pénélope, about a girl in love with a rocking horse. Whatever it points to, on the canvas it simply hovers, the first sign that this room obeys dream-rules and not gravity.' },
    { label: 'The white horse galloping outside', where: 'Through the parted curtain at the right, out in the open landscape', detail: 'Past a curtained window, set deliberately outside the enclosed room, a white horse runs free across a green landscape. It rhymes with the still rocking-horse indoors, the captive toy and the loose animal, and is widely read as Carrington’s image of liberty and escape, placed pointedly beyond the walls she has painted herself inside of.' },
    { label: 'Carrington in riding clothes', where: 'The seated central figure, dressed in pale jodhpurs and jacket', detail: 'She wears white jodhpurs (close-fitting riding breeches) and a jacket: androgynous riding dress, not the eroticized female nude that fills so much Surrealist painting. The choice is the argument. She presents herself as a rider, poised to move, clothed in her own terms rather than arranged as an object of desire.' },
    { label: 'Her wild dark hair', where: 'Framing her face, loose and untamed', detail: 'A loose, untamed mane of dark hair springs out around her head and visually rhymes with the coats of the animals around her. The human figure and her bestiary are braided together by the paint itself, her hair answering the hyena’s bristle and the horses’ manes.' },
    { label: 'The blue chair', where: 'The seat beneath her, near the corner of the room', detail: 'She perches on the very front edge of a blue armchair rather than settling back into it, knees together, body tipped forward and alert. It is a domestic seat in a domestic room, and she sits in it like someone about to stand up and leave. The unease is the point: this is an interior she looks ready to walk out of.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealist painting', mode: 'art' },
      { label: 'Max Ernst', mode: 'art' },
      { label: 'de Chirico’s dream-interiors', mode: 'art' },
      { label: 'An aristocratic life she fled', mode: 'civ' },
    ],
    children: [
      { label: 'Mexican Surrealism', mode: 'art' },
      { label: 'Women Surrealists as authors', mode: 'art' },
      { label: 'The female dream-self in paint', mode: 'art' },
    ],
  },
}
```

---

## PART B — the reader components (splice into `art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// Self-Portrait (Inn of the Dawn Horse) (Carrington, c.1937-38) — five chapters
// ─────────────────────────────────────────────────────────────
function CarArrival({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="London → Paris · 1937–38" title="A runaway debutante picks up a brush" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        eonora Carrington (1917&ndash;2011) was born into exactly the kind of life this painting is trying to get out of. Her father ran a wealthy Lancashire textile fortune; she was a <em>debutante</em> (a young upper-class woman formally presented to high society, the whole point of which was to be looked at, approved of, and married well). She hated it. She was expelled from convent schools, presented at court and bored stiff by it, and by her late teens she had decided, against ferocious family pressure, to become a painter instead of an ornament.
      </p>
      <p style={proseStyle}>
        In <strong>1937</strong>, in London, she met the German Surrealist painter <strong>Max Ernst</strong> (1891&ndash;1976), then in his mid-forties and married. They became lovers, and she left England to live with him, first in Paris and then in a village in the south of France. This matters for reading the picture in one specific way: it is how she walked into <strong>Surrealism</strong>, the movement, launched in Paris in the 1920s, that set out to paint the contents of dreams and the unconscious mind. But it is worth saying plainly at the start, because the easy version of this story makes Ernst the headline: Carrington did not arrive as anyone&rsquo;s pupil or anyone&rsquo;s muse. She arrived as an artist, and the proof is this canvas. She began it in London and finished it in Paris, around <strong>1937 to 1938</strong>, when she was about <strong>twenty</strong>.
      </p>
      <p style={proseStyle}>
        That is young to make a picture this assured. And it is often called her first truly Surrealist painting, which is fair as a critical judgment, the moment her private world and the movement&rsquo;s methods locked together. What she made was not a portrait in any ordinary sense. It is a self-portrait that is also a dream, a sealed room she built and then put herself inside, surrounded by animals of her own choosing. The rest of this read is about what is in that room, and why a woman painting it, in 1937, was doing something the men around her were not.
      </p>
    </article>
  )
}

function CarMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · c.1937–38" title="A dream-room, furnished from her own head" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first thing to understand about the making of this picture is that it is <strong>not a record of a real place</strong>. Carrington did not set up an easel in a room and paint what was there. She <em>built</em> the room, an enclosed interior of two walls meeting at a corner, a tiled floor, a curtained window, and then furnished it with things that obey the logic of a dream rather than the logic of a house: a rocking-horse that floats, a hyena that stands in the middle of the floor like a guest, a real horse running loose just outside the glass. Everything in it was chosen. The room is a stage she assembled to hold a set of private symbols.
      </p>
      <p style={proseStyle}>
        Those symbols were not invented for the canvas either. The same creatures walk through the <strong>stories Carrington was writing in these very years</strong>. The hyena is the clearest case: in her short story <em>The Debutante</em>, written around 1937 to 1938, a young woman about to be presented at a society ball sends a hyena to take her place, dressed in her clothes, so she can stay home and read. The horse runs all through her later writing and her play <em>P&eacute;n&eacute;lope</em>, about a girl in love with a rocking horse. So the painting is not an isolated puzzle. It is one room in a private world she was building in words and paint at the same time, and the animals are its recurring cast.
      </p>

      <SectionHeader accent={accent} label="How it is painted" title="Flat, exact, and asking to be believed" />
      <p style={proseStyle}>
        Notice the <em>finish</em>. Carrington paints this impossible room with a flat, clean, almost storybook exactness: clear outlines, even light, every object set down with the patient solidity of an old illuminated manuscript or a tarot card. That precision is doing a job. The more matter-of-factly the floating rocking-horse and the human-eyed hyena are rendered, the more the eye accepts them as simply, calmly <em>there</em>. This is the shared trick of Surrealist painting at large, paint the irrational with hard, convincing conviction so the impossible reads as fact, and Carrington handles it with a control that belies her age. The dream is delivered deadpan, which is exactly what makes it convincing.
      </p>
    </article>
  )
}

function CarLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="What is in the room" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the woman. Carrington sits near the corner of the room on the very front edge of a <strong>blue armchair</strong>, knees together, body tipped slightly forward. She is not reposing; she perches, alert, like someone about to stand up and go. She wears pale <strong>white jodhpurs</strong> (close-fitting riding breeches) and a jacket, androgynous riding clothes, and her dark hair springs out around her head in a loose, untamed mane. Hold that detail of the hair, because it is going to rhyme with everything else in the room.
      </p>
      <p style={proseStyle}>
        Now follow her arm. Her hand reaches out, low and open, toward a <strong>spotted hyena</strong> standing in the middle of the floor and facing her, mirroring her pose. Look closely at the animal and two things register. Its eyes are <strong>unsettlingly human</strong>. And along its belly hang a row of heavy, pendulous <strong>teats</strong>, engorged, plainly those of a nursing female. This is no decorative pet. The woman and the animal face each other like two halves of one thing, hand to muzzle, gaze to gaze.
      </p>

      <SectionHeader accent={accent} label="Above and outside" title="A horse that floats, a horse that runs" />
      <p style={proseStyle}>
        Lift your eyes to the wall behind her head, and you find a <strong>white rocking-horse</strong>, a child&rsquo;s toy, hanging in the air with nothing holding it up and no floor under its rockers. It floats. Then look to the right, through the parted <strong>curtain of the window</strong>, and out in the open green landscape a second <strong>white horse gallops free</strong>. The painting has set the two horses in deliberate opposition: the toy one, captive and weightless, trapped indoors on the wall; the living one, loose and running, placed pointedly <em>outside</em> the room. One is play and childhood; the other is escape. They face each other across the glass.
      </p>
      <p style={proseStyle}>
        And see how the whole room rhymes. The woman&rsquo;s wild mane answers the hyena&rsquo;s bristling coat and the horses&rsquo; manes; the human figure and her animals are braided together by the paint itself, the same loose, springing line running through hair and hide. That visual kinship between the woman and the beasts is the painting&rsquo;s argument, made in form before anyone reaches for what it means.
      </p>

      <SectionHeader accent={accent} label="What the symbols are, and are not" title="A reading, held at arm’s length" />
      <p style={proseStyle}>
        Here the read has to slow down, because this is a picture people love to decode too confidently. The common scholarly reading goes like this: the sealed domestic room is the constrained aristocratic life she fled; the <strong>female hyena</strong> is a wild, sexually-ambiguous animal-self, a creature she used as her surrogate in her writing too; the <strong>galloping white horse</strong> is freedom and escape; the <strong>floating rocking-horse</strong> ties the dream to childhood. That reading is widely repeated, and it is reasonable, and it fits the stories she was writing. But it is <em>interpretation</em>, drawn from her biography and her fiction, not a key Carrington handed down. She left no statement explaining the symbols of this canvas. So take the hyena-as-self, horse-as-freedom reading as the best account we have, offered softly, rather than as a code the painting confesses to. The picture is more alive for not fully telling.
      </p>
    </article>
  )
}

function CarBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="In Surrealism, the woman was the object" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o see why this self-portrait is a break, look at where women stood in Surrealism before it. Overwhelmingly, they stood inside the frame, not behind the easel. The woman in mainstream Surrealist painting was the <strong>object</strong>: the muse, the dreamed-of body, the male artist&rsquo;s living symbol of desire and the unconscious. The movement&rsquo;s founder, the writer <strong>Andr&eacute; Breton</strong>, made a slogan of &ldquo;convulsive beauty,&rdquo; and the women of Ernst, Magritte, Dal&iacute; and Man Ray are, again and again, beautiful bodies arranged to mean something for the man who painted them. Women appeared <em>in</em> Surrealist pictures far more often than they made them. The dreamer was a man; the woman was the dream.
      </p>

      <SectionHeader accent={accent} label="The break" title="The dreamer, not the dream" />
      <p style={proseStyle}>
        And here is a young woman Surrealist painting <strong>her own dream-symbolism and her own animal-kin self</strong>. She is both the one who sees and the thing seen, the seer rather than the object. Read off the choices, because each one reverses the usual arrangement. She dresses herself in androgynous <strong>riding clothes</strong> instead of the eroticized nude. She <strong>stares back out</strong> of the canvas instead of being arranged for a viewer&rsquo;s pleasure. She pairs herself not with a man&rsquo;s symbol but with a <em>female</em> animal of her own choosing, the lactating hyena, a creature she had already made her surrogate in her own stories. The picture quietly asserts authorship and autonomy: the woman is the maker of the dream, not a figure inside someone else&rsquo;s. That is the break, and Carrington made it at about twenty, in a movement that had cast her sex in the opposite role.
      </p>
    </article>
  )
}

function CarAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The key statement" title="“I didn’t have time to be anyone’s muse”" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he sharpest gloss on this painting is a line Carrington said long after she painted it, when the art historian <strong>Whitney Chadwick</strong> asked her what it had been like to be a Surrealist muse. Carrington&rsquo;s answer was a flat refusal of the whole premise:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>I didn&rsquo;t have time to be anyone&rsquo;s muse&hellip; I was too busy rebelling against my family and learning to be an artist.</p>
      </blockquote>
      <p style={proseStyle}>
        A note on the wording. The line is genuine and well attested (Chadwick is the scholarly source), and it circulates in two forms: the short one above, and a blunter, longer version the Met itself quotes, which opens <em>&ldquo;I thought it was bullshit. I didn&rsquo;t have time to be anyone&rsquo;s muse&hellip;&rdquo;</em> Those are the same statement in fuller and shorter dress, not two different quotes; the short form above is the safe display version. And note what the line is and is not: it is a general statement of her stance, not a sentence she ever said about <em>this</em> canvas. But it names exactly what the painting does. The picture is the refusal made in paint, four years or so before she put it into words, the woman who would not be the muse painting herself as the artist instead.
      </p>

      <SectionHeader accent={accent} label="The escape comes true" title="From the dream-room to Mexico" />
      <p style={proseStyle}>
        The escape this painting forecasts turned literal, and fast. When the <strong>Second World War</strong> broke out, Ernst, a German national in France, was interned as an enemy alien. Carrington fled south to <strong>Spain</strong>, where she suffered a severe breakdown and was institutionalized, an ordeal she later set down in her memoir <em>Down Below</em>. She left this canvas behind with Ernst, and he carried it to <strong>New York in 1941</strong> when he emigrated. Carrington&rsquo;s own road ran differently: she reached <strong>Mexico in 1942</strong> and stayed for the rest of her long life, becoming one of the central figures of Mexican Surrealism. The horse galloping out the window got where it was going.
      </p>

      <SectionHeader accent={accent} label="Provenance · c.1938–2002" title="How it reached the Met" />
      <p style={proseStyle}>
        The canvas&rsquo;s own travels are short and a little melancholy. (The <em>provenance</em> is the documented chain of owners from the artist&rsquo;s hand to now.) Left with Ernst in France, it went with him to New York in 1941. Sometime after December 1942 Ernst gave it to the dealer <strong>Pierre Matisse</strong> (the youngest son of the painter Henri Matisse), in whose family it then stayed: it passed to <strong>Maria-Gaetana Matisse</strong> on Pierre&rsquo;s death in 1989, and in <strong>2002</strong> the Pierre and Maria-Gaetana Matisse Foundation gave it to <strong>The Metropolitan Museum of Art</strong>, where it hangs today under the credit line &ldquo;The Pierre and Maria-Gaetana Matisse Collection, 2002&rdquo; and the accession number <strong>2002.456.1</strong>. The young woman&rsquo;s dream-room of escape ended on a wall in the Modern wing, a long way from the Lancashire drawing room she painted her way out of.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'carrington-self': { arrival: CarArrival, making: CarMaking, looking: CarLooking, break: CarBreak, afterlife: CarAfterlife },
```
