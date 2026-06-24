# WORK-READ DRAFT — Max Ernst, *The Elephant Celebes* (1921)

Authored through the art content pipeline (work id `celebes`). Source of truth:
`audits/art-pipeline/work-celebes-factpack.md`. NOT in src/, not committed.

Shape mirrors `STARRY_NIGHT` / `CITY_RISES` (const) and the `Cty*` component
family + NARRATIVES registry comment (reader). Shared helpers only
(`SectionHeader`, `DropCap`, `proseStyle`, `PaintingFigure`, `ART_ACCENTS`,
`ART_IMG`) — no redefs, no imports. Em-dash rule observed: no literal `—` in
rendered strings; plain TS fields use commas/parens/colons; JSX text uses
`&mdash;`. Dimensions ft/in only. Every `<SectionHeader>` has a `label`, the
first per component carries `first`.

---

## PART A — the const (append to `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Elephant Celebes (1921), Max Ernst, Tate, London (T01988). The
// Cologne-Dada canvas that tips Dada into Surrealism: collage logic carried
// into oil paint. Painted 1921, three years before the 1924 Surrealist
// manifesto, so "first Surrealist masterpiece" is scoped as a later judgment,
// never a date-stamp. Title from a bawdy German schoolboy rhyme; "Celebes" is
// the old name for Sulawesi. Corn-bin source is TRUE but its people/region
// attribution is contested, so kept generic. KEY STATEMENT = Ernst's general
// collage definition (no reliable Ernst quote about Celebes itself exists),
// quoted in ONE translation, with Lautréamont named as the source he expands.
// Chapter prose in art-section-reader.tsx NARRATIVES.celebes (Cel… prefix).
// ─────────────────────────────────────────────────────────────
export const CELEBES: ArtWorkContent = {
  id: 'celebes',
  name: 'The Elephant Celebes',
  shortName: 'Celebes',
  year: 1921,
  artist: 'Max Ernst',
  artistId: 'ernst',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 1 3/8 in × 3 ft 6 1/2 in',
  location: 'Tate, London',
  acquired: 'Entered the Tate from Roland Penrose, 1975 (T01988)',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 7, total: 9 },
  hook: 'A monstrous boiler-bodied beast (built from a photograph of an African corn-bin) stands alone on a bare plain under flying fish, the Cologne Dada canvas where collage stops being scissors and glue and becomes a way of painting.',
  heroImage: ART_IMG.ernstCelebes,
  heroCredit: 'Ernst, The Elephant Celebes, 1921 · Tate, London',
  heroAspect: 0.86, // 107.9 × 125.4 cm → W/H ≈ 0.86, portrait
  heroFit: 'contain', // the whole portrait canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1921', k: 'Painted' },
    { v: '4′1⅜″ × 3′6½″', k: 'Dimensions' },
    { v: 'Tate', k: 'Now at' },
  ],
  sections: [
    { id: 'cologne', eyebrow: 'Cologne · 1921', dateLabel: '1921', title: 'Dada, and the picture that tips out of it', blurb: 'Max Ernst is the engine of Cologne Dada, the anti-art movement born out of the wreckage of the First World War. Most Dada was provocation: cut, mock, deny that anything is art. Celebes is the strange exception, a still, almost silent dream-scene, painted with a straight face, that points past Dada toward something with no name yet.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1921', title: 'A corn-bin becomes a monster', blurb: 'The “elephant” is not invented from nothing. Ernst built its body from a photograph of an African communal corn-bin (a clay grain silo on two stubby legs) found in an anthropological publication, gave it a riveted metal skin, and bolted on a tusked snout and a tiny horned head it never had. The title comes from a bawdy German schoolboy rhyme, not from the island the word once named.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '4 ft 1 3/8 in × 3 ft 6 1/2 in', title: 'What is standing on the plain', blurb: 'The boiler body, the trunk that is a hose ending in a tusked trumpet, the too-small horned head, the headless female mannequin beckoning from the lower right, the fish swimming through the sky, and the bare flat horizon that turns the whole thing into a silent stage.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1921 → 1924', title: 'Collage, painted', blurb: 'Ernst takes the collage operation (the chance collision of unrelated things) and executes it in oil, with a smooth, photographic finish that makes the impossible monster read as solidly, physically there. The seams vanish. That is the hinge from Dada into Surrealism, three years before André Breton’s 1924 manifesto gave the movement its name.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1921–today', title: 'From the studio to the Tate', blurb: 'The canvas passed through the poet Paul Éluard to the English Surrealist Roland Penrose, and entered the Tate from Penrose in 1975. It is the proof-of-concept the high Surrealists (Dalí, Tanguy, Magritte) would build on: paint the irrational with hard realist conviction so the impossible reads as fact.', progress: 0.96 },
  ],
  // Provenance: endpoints firm (Ernst → Tate 1975, T01988). The Éluard and 1938
  // Penrose dates are reported-but-verify (factpack §6); credit-line mechanism
  // ("purchased" vs "presented") is unsettled, so hedged to "entered from."
  provenance: [
    { year: '1921', who: 'Max Ernst (the artist)', place: 'Cologne', note: 'Painted in 1921 while Ernst was the driving force of Cologne Dada.', price: null },
    { year: 'c. 1921', who: 'Paul Éluard (poet, patron)', place: 'Paris', note: 'Acquired early by Ernst’s close friend the poet Paul Éluard, who took it to Paris. Widely reported; the exact year is not firmly documented.', price: null },
    { year: 'c. 1938', who: 'Roland Penrose (artist, collector)', place: 'London', note: 'Acquired by the English Surrealist artist and collector Roland Penrose (later Sir Roland Penrose). Reported as the late 1930s; the precise year is uncertain in the sources.', price: null },
    { year: '1975–today', who: 'Tate', place: 'London', note: 'Entered the Tate collection from Roland Penrose in 1975. Accession T01988. The sources split on whether it was purchased or presented, so the safe statement is that it entered the Tate from Penrose. On view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Max Ernst', role: 'The painter', palette: ['#8a6b3a', '#3a2e1c', '#0e0a06'] },
    { name: 'Cologne Dada', role: 'The movement he ran', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { name: 'The corn-bin photograph', role: 'The body’s real source', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Lautréamont', role: 'The chance-meeting idea', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Surrealism', role: 'The next step, 1924', palette: ['#1c3a6a', '#c8a72a', '#0e1224'] },
  ],
  annotations: [
    { label: 'The boiler / corn-bin body', where: 'The huge rounded mass at the center, standing on two stubby legs', detail: 'The “elephant” itself. Its true source is a photograph of an African communal corn-bin (a clay grain silo that stands on a squat pair of legs), which Ernst found in an anthropological publication and gave a riveted, metallic, boiler-like skin. The two legs are the silo’s legs. The fact is that it is a corn-bin refigured; the exact people, region, and photographer behind that photo are contested in the scholarship, so do not pin it to one tribe or place. It reads as machine and animal at once.' },
    { label: 'The tusked snout, a trunk that is a hose', where: 'Reaching out from the front of the body and curling back toward it', detail: 'A long, flexible tube ends in a tusked, trumpet-like mouth: the “elephant’s trunk” that is plainly not a trunk but a length of hose with a horn on the end. Follow how it loops back toward the body. This is where the “elephant” of the title meets the thing on the canvas, and they do not match.' },
    { label: 'The little horned mechanical head', where: 'At the top of the form, small against the bulk below it', detail: 'A small horned head with a frilly metal collar sits where a head would go, but it is far too small for the body, like a bolt-on afterthought. The mismatch of scale is deliberate; it is part of what makes the creature feel wrong rather than merely invented.' },
    { label: 'The headless female mannequin', where: 'Lower right, a pale figure standing apart from the beast', detail: 'A pale, headless female figure stands at the right with one gloved hand raised, as if beckoning or directing the monster. It is the classic de Chirico mannequin (human, but blank and dismembered) that Ernst had absorbed from reproductions, and it pulls the painting toward dream and dread rather than Dada joke.' },
    { label: 'The flying fish', where: 'Up in the sky, toward the upper left', detail: 'Fish swim through the air. It is the single cleanest dream-logic violation in the picture: the wrong creatures in the wrong medium, stated flatly, with no explanation offered. Nothing in the scene reacts to them, which is the point.' },
    { label: 'The bare horizon', where: 'A low, empty line under a flat, washed sky, across the whole lower background', detail: 'The emptiness does the work. A low horizon and a featureless sky isolate the beast, give it scale and silence, and turn the plain into a stage. (Also worth a glance back there: a tower or totem-pole at the right and a small dark airplane-like shape trailing smoke.) The calm is exactly what separates this from a Dada provocation.' },
  ],
  lineage: {
    parents: [
      { label: 'Dada photo-collage', mode: 'art' },
      { label: 'de Chirico’s metaphysical painting', mode: 'art' },
      { label: 'Lautréamont’s chance meeting', mode: 'art' },
      { label: 'Europe after the First World War', mode: 'civ' },
    ],
    children: [
      { label: 'Surrealist painting', mode: 'art' },
      { label: 'Dalí, Tanguy, Magritte', mode: 'art' },
      { label: 'The painted dream-image', mode: 'art' },
    ],
  },
}
```

---

## PART B — the reader components (splice into `art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// The Elephant Celebes (Ernst, 1921) — the five chapters
// ─────────────────────────────────────────────────────────────
function CelCologne({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Cologne · 1921" title="Dada, and the picture that tips out of it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1921</strong>, in the German city of <strong>Cologne</strong>, a 30-year-old painter named <strong>Max Ernst</strong> (1891&ndash;1976) was the engine of one of the strangest movements art has produced. It was called <strong>Dada</strong>, and it had been born a few years earlier, in the middle of the <strong>First World War</strong>, out of disgust. A generation of young European artists had watched the supposedly civilized nations of Europe feed millions of men into the machine-guns and the mud, and concluded that the whole edifice of bourgeois culture (its manners, its logic, its idea of beautiful art) was a fraud that had ended in slaughter. So Dada set out to mock all of it. It was anti-art and anti-sense on purpose, a movement whose whole posture was to disrupt: cut things up, jam them together wrong, stage nonsense, and deny that anything was &ldquo;art&rdquo; at all.
      </p>
      <p style={proseStyle}>
        Ernst ran the Cologne branch of this. He made <em>collages</em> (pictures assembled by gluing together cut-up pieces of other printed images) that spliced engravings from old catalogues and science manuals into impossible, deadpan machines. He co-organized a Dada show in 1920 that the public reached by walking through a pub urinal, and that the police briefly shut down. The mode was provocation. You were supposed to be unsettled, or offended, or made to laugh at the joke that art was over.
      </p>
      <p style={proseStyle}>
        And then, in 1921, Ernst painted <em>The Elephant Celebes</em>, and it does not behave like that at all. It is not a provocation. It is <strong>quiet</strong>. A single monstrous form (part animal, part machine, part idol) stands alone on a bare plain under a flat, washed sky, and the longer you look at it the less sense it makes and the more inevitable it feels. There is no joke being told at you. There is a still, dreamlike <em>scene</em>, painted with a perfectly straight face, asking to be believed. That is the thing to hold onto. Most Dada pulled the picture apart to show you it was a trick. This one builds a whole impossible world and dares you to walk into it. It is the picture where Dada tips over into something that did not yet have a name.
      </p>
    </article>
  )
}

function CelMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1921" title="A corn-bin becomes a monster" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he beast at the center is the most famous fact about this painting, and the fact is surprising: the &ldquo;elephant&rdquo; is not invented out of Ernst&rsquo;s head. Its body began as a <strong>photograph of an African communal corn-bin</strong> &mdash; a large clay grain-storage silo that stands on a squat pair of legs &mdash; which Ernst came across in an <strong>anthropological publication</strong>. He took that hollow clay container, gave it a <strong>riveted, metallic, boiler-like skin</strong>, and bolted onto it appendages it never had: a tusked snout on a flexible hose, a frilly metal collar, a small horned head. The corn-bin&rsquo;s two stubby legs became the &ldquo;elephant&rsquo;s&rdquo; legs. So the monster is a real, ordinary, photographed object &mdash; a grain silo &mdash; refigured into something that reads as machine and animal at the same time.
      </p>
      <p style={proseStyle}>
        Here a careful note is worth making, because popular accounts pin this down too hard. Ernst himself confirmed the corn-bin source, but scholars disagree about <em>which</em> corn-bin: different accounts attribute the original photograph to different photographers and place it with different peoples in different parts of Africa. The honest version is the general one: it is a clay grain-bin on two legs, from an anthropological publication. The specific tribe and region you will sometimes see asserted as settled fact are not settled, so we leave them out.
      </p>

      <SectionHeader accent={accent} label="The title" title="A bawdy schoolboy rhyme, not an island" />
      <p style={proseStyle}>
        The title needs the same care, because it points two ways. <strong>&ldquo;Celebes&rdquo;</strong> is the old, Dutch-colonial-era name for the Indonesian island now called <strong>Sulawesi</strong>. But the painting is not about Indonesia, and Ernst did not arrive at the word through geography. He told the collector Roland Penrose (who would later own the canvas) that the title came from the opening line of a <strong>bawdy German schoolboys&rsquo; rhyme</strong>: <em>&ldquo;Der Elefant von Celebes&hellip;&rdquo;</em> (&ldquo;The elephant from Celebes&hellip;&rdquo;), a nonsense verse with sexual undertones that rhymes Celebes against other faraway-sounding place-names. So the word is the <em>title&rsquo;s</em> origin by way of a dirty rhyme remembered from childhood; the island is only what the word happens to mean. Knowing that keeps you from the trap of reading the picture as being &ldquo;about&rdquo; a place. It is about the rhyme, and the rhyme is just sound and mischief.
      </p>
      <p style={proseStyle}>
        And it is not really about an elephant either. There is no elephant here. There is a grain silo with a hose for a trunk, given a name from a rhyme. Both halves of the title are a kind of misdirection &mdash; which is exactly the right preparation for standing in front of the thing itself.
      </p>
    </article>
  )
}

function CelLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="What is standing on the plain" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The canvas is a little over <strong>four feet tall</strong>, a portrait shape, and almost the whole of it is given over to one thing: a huge, rounded, <strong>boiler-like body</strong> filling the center, standing on a stubby pair of legs. This is the &ldquo;elephant.&rdquo; Read its surface: it is metallic, riveted, the color of a coal furnace, and it looks heavy and solidly <em>there</em> in a way that the impossible details around it have no right to be. Remember as you look that its real source is a photographed clay corn-bin; Ernst has kept the silo&rsquo;s squat two-legged stance and swapped its clay for iron.
      </p>
      <p style={proseStyle}>
        Now find the parts that do not belong. Reaching out from the front of the body is a long <strong>flexible tube</strong> that ends in a <strong>tusked, trumpet-like mouth</strong> and curls back toward the body: the &ldquo;trunk&rdquo; that is plainly a hose with a horn on the end. Up at the top sits a small <strong>horned head</strong> with a frilly metal collar, far too small for the bulk beneath it, bolted on like an afterthought. None of these pieces agrees with the others about what animal, or machine, or creature this is meant to be. That disagreement is the engine of the picture&rsquo;s unease.
      </p>

      <SectionHeader accent={accent} label="The dream-logic around it" title="A headless woman, and fish in the sky" />
      <p style={proseStyle}>
        Look to the lower right and you will find a <strong>headless female mannequin</strong>: a pale figure, blank where the head should be, standing apart from the beast with one <strong>gloved hand raised</strong>, as if summoning it or pointing the way. This figure is borrowed: the blank, dismembered tailor&rsquo;s-dummy mannequin comes straight from <strong>Giorgio de Chirico</strong> (1888&ndash;1978), the Italian painter whose still, dread-filled empty plazas Ernst knew from reproductions and who is the clearest ancestor of this whole mood. Her presence pulls the picture out of Dada&rsquo;s loud register and into something colder and stranger.
      </p>
      <p style={proseStyle}>
        Then look up. In the sky, toward the upper left, <strong>fish are swimming through the air</strong>. It is the single clearest violation of sense on the canvas: the wrong creatures in the wrong element, stated without comment. Nothing reacts to them. (Look further back and you can find a tower or totem-pole at the right edge, and a small dark <strong>airplane-like shape trailing smoke</strong>. None of it connects to anything else.) That refusal of things to connect <em>is</em> the subject. This is dream-logic: in a dream the impossible arrives fully furnished and unexplained, and you accept it while you sleep.
      </p>

      <SectionHeader accent={accent} label="The emptiness" title="A bare horizon, doing the heavy lifting" />
      <p style={proseStyle}>
        Now step back and notice what is <em>not</em> in the picture. Behind the monster there is almost nothing: a <strong>low, empty horizon</strong> under a flat, drained sky. Ernst gives you no setting, no buildings, no crowd, nothing for scale except the bare line of the ground. And that emptiness is doing enormous work. It isolates the beast, lends it size and silence, and turns the whole canvas into a kind of stage with a single actor on it. Compare the noise of Dada (the cut-up urinals, the staged provocations) with this: a vast quiet, a monster, and a horizon. The calm is precisely what marks this picture as a step <em>past</em> the movement Ernst was running. It is not a joke about images anymore. It is a place.
      </p>
    </article>
  )
}

function CelBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="The dream-image lived in two separate rooms" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore <em>Celebes</em>, the strange and the dreamlike lived in modern art in two places that had not yet met. One was <strong>de Chirico&rsquo;s</strong> metaphysical painting: uncanny, hand-painted scenes of empty plazas, long shadows, and mannequins, full of dread, but plainly invented and plainly painted. The other was <strong>Dada photo-collage</strong>, including Ernst&rsquo;s own: machine-creatures scissored out of printed pages and glued together, where the cuts and seams were left obvious on purpose, so that you always knew you were looking at a trick. Dada&rsquo;s whole stance was disruption. A painted dream that asked you to <em>believe</em> it as a single, coherent, solid scene was not yet anyone&rsquo;s program.
      </p>

      <SectionHeader accent={accent} label="The break" title="Collage, painted" />
      <p style={proseStyle}>
        Here is what <em>Celebes</em> does, and why it matters. Ernst takes the <strong>collage operation</strong> &mdash; the chance collision of unrelated things (a corn-bin, a hose, fish, a headless woman) &mdash; and instead of cutting and gluing, he <strong>executes it in oil paint</strong>, with a smooth, even, photographic finish. The seams vanish. There are no visible cuts, no torn edges; the impossible creature is rendered as solidly and convincingly as if a camera had found it standing on a real plain. The viewer&rsquo;s eye, given that deadpan realist finish, accepts the monster as physically <em>there</em>. That is the whole move: the same impossible juxtaposition Dada made out of scissors and glue, now made to look as real as a photograph.
      </p>
      <p style={proseStyle}>
        That is the hinge from Dada into <strong>Surrealism</strong> &mdash; the movement, named a few years later, that set out to paint the contents of dreams and the unconscious mind. In <em>Celebes</em> the dream stops being a joke about images and becomes a believable world. The collage-mind stops being scissors and glue and becomes a way of <em>painting</em>.
      </p>

      <SectionHeader accent={accent} label="The dating" title="Three years before the word existed" />
      <p style={proseStyle}>
        This is why <em>Celebes</em> is so often called <strong>&ldquo;the first masterpiece of Surrealist painting.&rdquo;</strong> It is a real and widely repeated art-historical judgment, and it is worth scoping honestly: it is a critical assessment, not a date-stamp. Ernst painted this canvas in <strong>1921</strong>. <strong>Surrealism did not yet exist as a named movement.</strong> It was the writer <strong>Andr&eacute; Breton</strong> who founded and named it three years later, in his <em>Surrealist manifesto of 1924</em>. So <em>Celebes</em> predates the movement it is said to launch. The accurate way to put it: this is often called the first masterpiece of Surrealist painting, though Ernst made it in 1921, three years before Surrealism had a name. It is the proof-of-concept, painted ahead of the theory &mdash; and the high Surrealists who followed (<strong>Salvador Dal&iacute;, Yves Tanguy, Ren&eacute; Magritte</strong>) all took up its lesson: paint the irrational with hard realist conviction, so the impossible reads as fact.
      </p>
    </article>
  )
}

function CelAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The key statement" title="Ernst on collage (no quote survives about Celebes itself)" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is no reliable statement by Ernst about <em>Celebes</em> in particular &mdash; any line you see captioned &ldquo;Ernst on <em>Celebes</em>&rdquo; should be treated as unverified. But there is a load-bearing statement that fits the painting exactly, because the painting <em>is</em> collage-logic carried into paint: Ernst&rsquo;s own general definition of collage. He described it as
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>the systematic exploitation of the coincidental or artificially provoked encounter of two or more unrelated realities on an apparently inappropriate plane, and the spark of poetry created by the proximity of these realities.</p>
      </blockquote>
      <p style={proseStyle}>
        A word about that quote: it circulates in several English renderings (you will also see &ldquo;the chance meeting of two distant realities on an unfamiliar plane,&rdquo; and other phrasings). Those are competing <em>translations of the same French text</em>, not different statements. We quote one of them, cleanly, rather than stitching phrases from several into a Frankenstein &ldquo;quote.&rdquo; The verbatim wording above should be locked against a printed Ernst source at integration.
      </p>
      <p style={proseStyle}>
        And Ernst was not claiming to have invented the idea. He was generalizing a famous image from the 19th-century French writer who called himself <strong>Lautr&eacute;amont</strong>, whose book <em>Les Chants de Maldoror</em> praised something as <em>&ldquo;beautiful as the chance encounter of a sewing machine and an umbrella on a dissecting table.&rdquo;</em> That line &mdash; two ordinary, unrelated objects forced together on a third surface where neither belongs &mdash; is the whole recipe of <em>Celebes</em>: a corn-bin, a hose, and a headless woman, met on a bare plain that suits none of them. Ernst is the painter who turned Lautr&eacute;amont&rsquo;s sentence into oil.
      </p>

      <SectionHeader accent={accent} label="Provenance · 1921–1975" title="From a poet to a knight to the Tate" />
      <p style={proseStyle}>
        The painting&rsquo;s own travels are a small map of how Surrealism spread. (The <em>provenance</em>, again, is the documented chain of owners from the artist&rsquo;s hand to now.) Early on it passed to the poet <strong>Paul &Eacute;luard</strong> (1895&ndash;1952), Ernst&rsquo;s close friend and patron, who carried it to Paris &mdash; reported widely, though the exact year is not nailed down. By the late 1930s it had reached the English Surrealist painter and collector <strong>Roland Penrose</strong> (1900&ndash;1984), the man who did more than anyone to bring Surrealism to Britain and who later wrote that Ernst gave him the title&rsquo;s schoolboy-rhyme origin. In <strong>1975</strong> it entered the <strong>Tate</strong> in London from Penrose, where it hangs today with the accession number <strong>T01988</strong>. (The Tate&rsquo;s own records and the secondary sources do not fully agree on whether Penrose sold it or gave it, so the safe, honest statement is simply that it entered the Tate from Penrose in 1975.)
      </p>

      <SectionHeader accent={accent} label="The afterlife" title="A doorway, and what walked through it" />
      <p style={proseStyle}>
        What Ernst built in 1921 turned out to be a door. The thing he proved on this one canvas &mdash; that you could paint a dream with the deadpan realism that makes the impossible look solid &mdash; became the working method of high Surrealist painting. <strong>Dal&iacute;&rsquo;s</strong> melting clocks, <strong>Tanguy&rsquo;s</strong> still alien plains, <strong>Magritte&rsquo;s</strong> tidy impossibilities are all paintings that ask you to believe an irrational scene because it is rendered with hard, convincing conviction. They are the children of the move Ernst made when he stopped cutting paper and started painting the dream straight. <em>The Elephant Celebes</em> is a Cologne Dada canvas that turned out to be standing, quietly, on the far side of a line nobody had drawn yet &mdash; the line into Surrealism &mdash; three years before the line had a name.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  celebes: { cologne: CelCologne, making: CelMaking, looking: CelLooking, break: CelBreak, afterlife: CelAfterlife },
```
