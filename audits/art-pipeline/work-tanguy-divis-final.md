# Work FINAL — Yves Tanguy, *Indefinite Divisibility (Divisibilité indéfinie)* (1942) · `tanguy-divis`

Reconciled from `work-tanguy-divis-draft.md` against the three gates + factpack. All [BLOCKER]/[FIX] folded.

**Gate dispositions folded:**
- **FACT** — PASS clean (no BLOCKER/FIX). NICE-1 (cm rounding) already satisfied: body uses 88.9 cm. NICE-2 ("Italian painter" de Chirico) accepted as-is (standard descriptor). No edits.
- **READ** — collapsed the three-way "totem/machinery/marble-run = analogy" caveat (full version stays in Looking, compressed in Making, annotation surface kept); scrubbed three reader-commands ("Resist the urge to name it" → declarative; "That is worth holding onto before looking" → declarative; "Step back from the subject and look at the technique" → declarative, in prose + the annotation surface); split the long quote-caveat sentence.
- **FRAME** — "**the** template for illusionistic Surrealism" → "**a** template" (afterlife prose); first-mention de-Chirico conversion now carries "by his own account" + the "jolt" stacking softened so the instant-painter origin reads as self-narration, not asserted fact; Tanguy situated in Surrealism throughout (Breton's circle, the two channels, the Dalí/Magritte vs. Miró/Masson axis). Invented forms held NON-REFERENTIAL ("reads like" / never "is"). Biomorphic chip kept (names a movement, not a depiction claim).

**Voice/format contract honored:** no literal "—" in plain TS string fields (commas/parens/colons); JSX uses `&mdash;`/`&ndash;`; verbatim Tanguy quote preserved with no unverifiable source asserted; `rights:'in-copyright'` with fair-use heroCredit; dimensions ft/in; `heroAspect 0.85`, `heroFit:'contain'`. Identifiers / section-ids / component names identical to draft.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Indefinite Divisibility (Divisibilité indéfinie), Yves Tanguy, 1942,
// oil on canvas, 101.6 × 88.9 cm (40 × 35 in / 3 ft 4 in × 2 ft 11 in), upright
// (portrait) canvas, Buffalo AKG Art Museum (formerly the Albright-Knox Art
// Gallery; the Albright Art Gallery at acquisition), acc. RCA1945:2. American-
// period Surrealist "dream landscape." Authored through the art content pipeline
// (fact pack → Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['tanguy-divis'] (Tan… prefix). FACT HANDLING:
// (1) RIGHTS in-copyright — 1942 work, Tanguy d.1955; © Estate of Yves Tanguy /
// Artists Rights Society (ARS), New York; shown small under fair use, NOT pd-us.
// (2) The invented forms are NON-REFERENTIAL per Tanguy and the AKG ("without
// employing direct references to the real world"); "machine"/"marble-run"/"totem"
// are third-party analogies (Artchive), phrased "reads like," never "is/depicts."
// (3) Title pairing is the museum's own: Divisibilité indéfinie = Indefinite
// Divisibility (indéfinie = "indefinite," not "infinie"/"infinite").
// (4) Dimensions ft/in only; 101.6 cm is HEIGHT, 88.9 cm WIDTH (taller than wide;
// the AKG's "89 cm" is a rounding of 88.9). (5) KEY STATEMENT = Tanguy's "the
// painting develops before my eyes" method statement, attributed to Tanguy; the
// original publication is unverified in the sources, so NO specific venue/date is
// asserted (named as a documented statement of method, source-uncertainty flagged).
// (6) One institution, three names over time (Albright Art Gallery 1945 → Albright-
// Knox → Buffalo AKG, renamed 2023); never presented as different museums.
// (7) Provenance: Pierre Matisse Gallery, NY → Albright Art Gallery June 22, 1945,
// via the Room of Contemporary Art Fund; no prices in the record used here.
// ─────────────────────────────────────────────────────────────
export const TANGUY_DIVIS: ArtWorkContent = {
  id: 'tanguy-divis',
  name: 'Indefinite Divisibility',
  shortName: 'Indefinite Divisibility',
  year: 1942,
  artist: 'Yves Tanguy',
  artistId: 'tanguy',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 4 in × 2 ft 11 in',
  location: 'Buffalo AKG Art Museum',
  acquired: 'Room of Contemporary Art Fund, 1945',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 9, total: 9 },
  hook: 'A vast, evenly lit nowhere-plain under a high horizon, littered with smooth pale objects that look like bone and stone and polished metal but match nothing on Earth, a wholly invented inner landscape painted with the hard, deep-shadowed precision of a thing actually seen.',
  heroImage: ART_IMG.tanguyDivis,
  heroCredit: 'Tanguy, Indefinite Divisibility, 1942 · Buffalo AKG Art Museum · © Estate of Yves Tanguy / ARS, New York · shown small under fair use',
  heroAspect: 0.85, // 101.6 × 88.9 cm → W/H ≈ 0.87, an upright (portrait) canvas
  heroFit: 'contain', // the whole canvas, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '1942', k: 'Painted' },
    { v: '3′4″ × 2′11″', k: 'Dimensions' },
    { v: 'Buffalo AKG', k: 'Now at' },
  ],
  sections: [
    { id: 'world', eyebrow: 'Woodbury, Connecticut · 1942', dateLabel: '1942', title: 'One invented world, painted over and over', blurb: 'A self-taught painter who, by his own account, saw a de Chirico in a Paris window around 1923 and turned to painting builds a single deserted plain, scattered with smooth invented objects, and paints versions of it for the rest of his life. By 1942 he is an émigré in America, married to the painter Kay Sage.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1942', title: 'A place that exists nowhere, painted as fact', blurb: 'Hard-edged, almost academic modeling, convincing weight, convincing recession, long cast shadows, all of it spent on objects that refer to nothing real. The whole effort goes into making a wholly fictitious scene read as a documented site, an American-period picture lit by the wide empty light of the New World.', progress: 0.30 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1942', title: 'Abstraction that looks real', blurb: 'A landscape used to depict a place, real or plausibly assembled from real things. Tanguy keeps the illusionistic finish of academic painting and pours it into a landscape that is wholly invented: the dream made to look like an observed fact, not a sketch or a smear.', progress: 0.54 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '3 ft 4 in × 2 ft 11 in', title: 'The stacked forms and the airless plain', blurb: 'The tall central pile-up of smooth shapes, the bone-and-stone objects scattered across the floor, their long hard shadows, the high horizon opening an endless desert distance, and the still, oppressive light with no visible sun. Plus the key statement: Tanguy on letting the painting surprise him.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1942–today', title: 'The plain that everyone has seen since', blurb: 'Bought by the Albright Art Gallery (now the Buffalo AKG) in 1945, three years after it was made, from the Pierre Matisse Gallery, and held ever since. The invented-yet-solid object on an empty plain becomes a template for illusionistic Surrealism and, after it, a century of fantastic and science-fiction imagery.', progress: 0.96 },
  ],
  provenance: [
    { year: '1942', who: 'Yves Tanguy (the artist)', place: 'Woodbury, Connecticut', note: 'Painted in 1942, about three years after Tanguy emigrated to the United States in 1939 and two years after his 1940 marriage to the American Surrealist painter Kay Sage. Handled by his American dealer.', price: null },
    { year: '1942–1945', who: 'Pierre Matisse Gallery', place: 'New York', note: 'Tanguy’s New York dealer (a son of Henri Matisse), the gallery through which most of his American work reached collectors and museums.', price: null },
    { year: '1945–today', who: 'Buffalo AKG Art Museum (then the Albright Art Gallery)', place: 'Buffalo, New York', note: 'Sold by the Pierre Matisse Gallery to the Albright Art Gallery on June 22, 1945, through the museum’s Room of Contemporary Art Fund, just three years after the picture was made. Accession RCA1945:2. The institution has since been renamed twice (Albright-Knox Art Gallery, then Buffalo AKG Art Museum in 2023); it is one museum, not three. The painting has stayed in the collection ever since.', price: 'Room of Contemporary Art Fund', museum: true },
  ],
  figures: [
    { name: 'Yves Tanguy', role: 'The painter', palette: ['#5a6a6a', '#33403e', '#0e1412'] },
    { name: 'Kay Sage', role: 'His wife · Surrealist painter', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'Giorgio de Chirico', role: 'The window painting that started him', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'André Breton', role: 'Led the Surrealist circle he joined', palette: ['#4a5a3a', '#2a2a1c', '#0e0e08'] },
    { name: 'Pierre Matisse', role: 'His New York dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
  ],
  annotations: [
    { label: 'The central stacked pile-up', where: 'Near the middle of the picture, the tall vertical assembly of smooth forms that rises higher than anything else', detail: 'A column of smooth, balanced shapes climbs near the center of the composition, piled and stacked so that it dominates the foreground and anchors the whole empty plain. It reads, to different viewers, like a totem, like a piece of invented machinery, even like a child’s marble-run, and those are viewers’ analogies, not the thing itself. Tanguy’s method is invention without a real-world source, so the honest description is what it does, not what it is: it is a tall stack of pale, modeled forms that corresponds to no nameable object, giving the deserted plain a single dominant event.' },
    { label: 'The bone-and-stone objects', where: 'Scattered low across the plain, the smaller pale shapes resting on the ground around and below the central stack', detail: 'Across the floor of the scene lie smaller objects with the pale, rounded, weathered look of bones, pebbles, or worn stones, organic-seeming and smooth as if shaped by an invisible sea. Each is modeled with real volume and weight. None of them is actually a bone or a stone; they only resemble such things. They are invented, indeterminate forms, solid-looking and unidentifiable at once, which is exactly the effect Tanguy was after.' },
    { label: 'The long, hard cast shadows', where: 'Stretching across the empty floor from the base of every form, dark and sharp-edged', detail: 'Each form throws a long, dark, hard-edged shadow across the floor of the plain, raked as if by a low, steady light. Those shadows are what make the invented objects feel physically present: they fix each shape to the ground and give it a place in real space. The device of deep, theatrical shadow on an empty plain is one Tanguy carried from Giorgio de Chirico, the painter whose dream-piazzas first turned him toward art.' },
    { label: 'The high horizon and the endless distance', where: 'The line far back and high in the picture where the ground meets the sky', detail: 'The ground recedes a long way back to a horizon set high in the composition, opening an enormous, empty, desert-like distance behind the forms. The museum describes the effect plainly: the space appears infinite, like an endless desert. The high horizon is what gives the picture its sense of a vast nowhere, a plain that runs on past the edge of anything the eye can hold.' },
    { label: 'The airless light with no sun', where: 'Across the whole scene, the even, sourceless glow that fills the plain', detail: 'The atmosphere reads as still and heavy, dense and oppressive, and yet the plain is bathed in a strong, warming light. No sun is visible anywhere. The light comes from nowhere and lands evenly, the way light behaves in a dream rather than in a landscape, and the air feels windless and lifeless. That sourceless, oppressive glow is a large part of why the scene feels unreal even as every object in it is painted as solidly as a stone.' },
    { label: 'The illusionistic finish itself', where: 'Everywhere; the smooth, hard, modeled surface of every form', detail: 'The technique itself is the argument. The forms are rendered with smooth, hard, almost academic modeling, the gradual shading that makes a painted object look like a rounded solid you could pick up. The precision is the whole point of the picture. It is what makes a scene that exists nowhere read as an observed, documented place, and it is the thing that separates Tanguy from the loose, smeared, automatic wing of Surrealism.' },
  ],
  lineage: {
    parents: [
      { label: 'Giorgio de Chirico', mode: 'art' },
      { label: 'Surrealism', mode: 'art' },
      { label: 'Tanguy’s American exile', mode: 'civ' },
    ],
    children: [
      { label: 'Illusionistic Surrealism', mode: 'art' },
      { label: 'Biomorphic abstraction', mode: 'art' },
      { label: 'Science-fiction and fantastic imagery', mode: 'art' },
    ],
  },
}
```

## PART B — the five chapter components + NARRATIVES registry

```tsx
// ─────────────────────────────────────────────────────────────
// Indefinite Divisibility (Tanguy, 1942) — the five chapters
// ─────────────────────────────────────────────────────────────
function TanWorld({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Woodbury, Connecticut · 1942" title="One invented world, painted over and over" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>Y</DropCap>
        ves Tanguy (1900&ndash;1955) built a single world and spent his life painting it. It is always the same place: a vast, deserted plain that recedes to a high horizon, scattered with smooth, pale objects that look like bone or stone or polished metal and resemble nothing that has ever existed. He had no art school behind him &mdash; he was entirely <strong>self-taught</strong> &mdash; and, by his own account, his turn to painting was sudden. Around <strong>1923</strong>, riding past a Paris gallery, he saw a painting by <strong>Giorgio de Chirico</strong> (1888&ndash;1978), the Italian painter of empty, shadow-raked dream-squares, in the shop window, and got off to look at it. As he told the story afterward, he resolved on the spot to become a painter, despite never having trained as one. The deep, theatrical shadow and the haunted emptiness of de Chirico stayed in his work for good.
      </p>
      <p style={proseStyle}>
        He fell in with <strong>Andr&eacute; Breton</strong> (1896&ndash;1966) and the <strong>Surrealist</strong> circle in Paris in the mid-1920s. Surrealism, founded by Breton in 1924, was the movement that tried to put the unconscious mind &mdash; the layer of thought that runs under reason and good manners, in the Freud-soaked thinking of the day &mdash; directly onto the canvas. It ran in two broad channels: one that let the hand move at random and find images in the mess, and one that painted impossible things with hard, photographic precision. Tanguy became one of the purest practitioners of the second kind, the &ldquo;dream landscape&rdquo; painter who rendered an imagined world as crisply as if he had stood in it.
      </p>

      <SectionHeader accent={accent} label="The crossing" title="An émigré on a wider, emptier plain" />
      <p style={proseStyle}>
        With the Second World War closing over Europe, Tanguy <strong>emigrated to the United States in 1939</strong>. In <strong>1940</strong> he married the American Surrealist painter <strong>Kay Sage</strong> (1898&ndash;1963), in a wedding in Reno, Nevada, and the two of them eventually settled in <strong>Woodbury, Connecticut</strong>, where Tanguy would live out his life and become a naturalized American. <em>Indefinite Divisibility</em> is a picture from that American chapter, painted in <strong>1942</strong>: the work of a man who had carried his one invented plain across an ocean and was painting it again, now under the wide, dry, open light of a new country. The plain in it had no model in Connecticut, or anywhere. It never had.
      </p>
    </article>
  )
}

function TanMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1942" title="A place that exists nowhere, painted as fact" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he signature of the picture is a paradox you can state in one line: it is the <strong>meticulous, illusionistic rendering of things that exist nowhere</strong>. Tanguy paints his invented objects with hard, almost academic precision &mdash; convincing weight, convincing shadow, convincing recession into deep space &mdash; so that wholly fictitious shapes read as solidly present as boulders in a field. The Buffalo AKG, which owns the picture, sums up the whole project in a sentence: &ldquo;Without employing direct references to the real world, Yves Tanguy painted surreal landscapes laden with strange, indeterminate forms.&rdquo; The effort goes not into inventing the forms &mdash; that part seems to have come easily &mdash; but into making the invention <em>convincing</em>.
      </p>
      <p style={proseStyle}>
        The objects are deliberately not anything. They are smooth and modeled and weighted, yet the eye keeps reaching for a word &mdash; a machine, a stack of bones, a tower of polished stones &mdash; and the word keeps not fitting. Tanguy worked the other way around from a painter who draws an object and then renders it. He let strange, indeterminate forms surface, and then gave each one the full apparatus of academic painting: highlight, shadow, modeled curve, a cast shadow on the ground. The result is that you believe a place you cannot name, which is exactly the unease the picture trades in.
      </p>

      <SectionHeader accent={accent} label="The de Chirico in it" title="Borrowed shadow on an invented floor" />
      <p style={proseStyle}>
        At the center of the picture a <strong>tall assembly of stacked forms</strong> rises from the plain and dominates the foreground, throwing a long dark shadow across the empty ground. The deep, raking shadow is the clearest trace of de Chirico, the painter who had stopped Tanguy in the street twenty years earlier: that same theatrical, late-afternoon darkness pooling out from solid shapes onto a vacant floor. What it is a shadow <em>of</em> stays open, because Tanguy invented his forms from nothing, so naming them is the viewer&rsquo;s reflex and not the picture&rsquo;s claim. De Chirico had cast his shadows across recognizable arcades and statues. Tanguy casts the same kind of shadow across a floor and a set of objects he made up entirely. The borrowed device is doing new work: it lends the weight of a real, observed scene to a place that was never observed because it was never there.
      </p>
    </article>
  )
}

function TanBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A landscape used to be a place" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or as long as there had been landscape painting, a landscape depicted a <strong>place</strong> &mdash; a real view, or a plausible one stitched together from real things. Even the strangest pre-Surrealist landscapes obeyed this. De Chirico&rsquo;s dream-piazzas, eerie and empty as they are, are built from recognizable architecture: arcades, towers, statues, a train at the edge of the square. You always knew what you were looking <em>at</em>, even when the mood was a nightmare. And when earlier modern painters broke with tradition &mdash; the Cubists fracturing the picture, Kandinsky pushing toward abstraction &mdash; what they broke was the <strong>finish</strong>: they gave up smooth illusionistic rendering, flattened the picture, simplified or shattered it. To leave the real world behind, painting had always had to loosen its grip on convincing, solid description.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="Abstraction that looks real" />
      <p style={proseStyle}>
        Tanguy does the opposite, and that is the whole break. He <strong>keeps the hard, illusionistic finish</strong> &mdash; the deep space, the cast shadows, the modeled solidity of academic painting &mdash; and pours all of it into a landscape that is <strong>wholly invented</strong>. The objects refer to nothing; there is no real-world source to recognize, no arcade or statue to name. It is <strong>abstraction that looks real</strong>: a fully fictitious inner world rendered with the precision of observed fact, so that the eye believes a place it cannot name. The break is not a loosening of technique but its reverse, photographic-seeming precision turned entirely to the service of pure invention. The dream is made to look like a documented site rather than a sketch or a smear.
      </p>
      <p style={proseStyle}>
        That inversion turned out to be a template. This vein of Surrealism &mdash; precision-rendering of the impossible, the line that runs through Tanguy, <strong>Salvador Dal&iacute;</strong>, and <strong>Ren&eacute; Magritte</strong>, as against the loose, automatic wing of <strong>Joan Mir&oacute;</strong> and <strong>Andr&eacute; Masson</strong> &mdash; set the pattern for illusionistic dream-painting, and fed straight into the fantastic, science-fiction, and biomorphic-abstract imagery that came after. The smooth invented object sitting on an empty plain is a visual clich&eacute; now precisely because Tanguy made it convincing first.
      </p>
    </article>
  )
}

function TanLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="The stacked forms and the airless plain" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t is an intimate picture for so vast a space. The canvas stands about <strong>three feet four inches tall by two feet eleven inches wide</strong> (101.6 by 88.9 centimeters), an <strong>upright</strong> format, a little taller than it is wide, roughly the size of a tall window. Holding that near-square, portrait shape against the enormous distance painted inside it is part of the picture&rsquo;s spell: a small object on the wall that opens onto a plain without end.
      </p>
      <p style={proseStyle}>
        Near the middle, a <strong>tall pile-up of smooth forms</strong> rises from the ground, stacked and balanced, climbing higher than anything else and anchoring the whole composition. It is the picture&rsquo;s single dominant event, the one thing the empty plain is built around. The urge is to name it, and the picture refuses every name. It reads, depending on the viewer, like a totem, like a piece of invented machinery, even like a child&rsquo;s marble-run, and every one of those is a viewer&rsquo;s analogy laid over the form, not the form&rsquo;s identity. What is actually there is a stack of pale, modeled, weighty shapes that match no nameable object, which is exactly what Tanguy intended.
      </p>

      <SectionHeader accent={accent} label="The plain and its shadows" title="Bone-pale objects, fixed to the ground by their shadows" />
      <p style={proseStyle}>
        Lower down, scattered across the floor of the scene, lie <strong>smaller objects</strong> with the pale, rounded, weathered look of bones, pebbles, or worn stones, smooth as if shaped by an invisible sea. They too are invented and unidentifiable, modeled with real volume but answering to nothing real. What fixes them, and fixes the central stack as well, are the <strong>shadows</strong>: each form throws a long, dark, hard-edged shadow across the plain, raked by a low, steady light. Those shadows are what make the made-up objects feel physically <em>there</em>, planting each shape on the ground and giving it a place in space. They are the borrowed de Chirico device doing its quiet, load-bearing work.
      </p>
      <p style={proseStyle}>
        The ground runs a long way back to a <strong>horizon set high</strong> in the picture, opening an enormous empty distance behind the forms; the museum says the space appears infinite, like an endless desert. And the <strong>light</strong> is the strangest thing of all. The atmosphere reads as still and heavy, dense and oppressive, yet the whole plain is bathed in a strong, warming glow with <strong>no visible sun anywhere</strong>. The light comes from nowhere and lands evenly, the way light behaves in a dream and not in a landscape, over a windless, lifeless ground.
      </p>
      <p style={proseStyle}>
        The <strong>technique</strong> itself is the argument. The forms are rendered with smooth, hard, almost academic modeling, the gradual shading that turns a painted shape into a solid you feel you could pick up. The precision is the point. It is the thing that makes a scene existing nowhere read as an observed, documented place, and it is what sets Tanguy apart from the loose, smeared, automatic wing of Surrealism. Nothing here is sketched or suggested. Everything is finished to the polish of a thing seen.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“The painting develops before my eyes”" />
      <p style={proseStyle}>
        Tanguy left a description of how he worked that fits this picture exactly, and it explains the strange, unplanned look of the plain. He said he could not begin with a plan or a sketch, because the picture had to surprise him as it went. The line is reproduced again and again and is consistently attributed to him. The catch is that the period source it came from is not pinned down in the available record, so it is given here as a documented statement of his method, attributed to Tanguy, rather than tied to a specific magazine or date:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>The painting develops before my eyes, unfolding its surprises as it progresses. It is this which gives me the sense of complete liberty, and for this reason I am incapable of forming a plan or making a sketch beforehand.</p>
      </blockquote>
      <p style={proseStyle}>
        That method is visible in the result. A plain laid out to a plan would feel arranged; this one feels <em>found</em>, the forms surfacing where they happened to surface, the way images surface in a dream the dreamer is not steering. The hard precision and the unplanned arrangement pull against each other, and the friction between them &mdash; every object painted as solid fact, no object placed by design &mdash; is a large part of why the picture feels both utterly convincing and impossible to be in.
      </p>
    </article>
  )
}

function TanAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="Three years from the easel to a museum wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he picture moved from Tanguy&rsquo;s studio into a public collection unusually fast. Painted in <strong>1942</strong>, it passed through his New York dealer, the <strong>Pierre Matisse Gallery</strong> (run by Pierre Matisse, a son of the painter Henri Matisse, and the main channel for Tanguy&rsquo;s American work), and on <strong>June 22, 1945</strong> it was sold to the <strong>Albright Art Gallery</strong> in Buffalo, New York, through the museum&rsquo;s <strong>Room of Contemporary Art Fund</strong> (accession RCA1945:2). That is the whole <em>provenance</em>, the documented chain of who has owned a work in order: artist, dealer, museum, in three short years, with the painting never passing through a private collector at all.
      </p>
      <p style={proseStyle}>
        One thing to keep straight is that the museum has changed its name twice since, which can make a single picture look as if it has lived in three places. At the 1945 purchase it was the <strong>Albright Art Gallery</strong>; for decades after it was the <strong>Albright-Knox Art Gallery</strong>; and since a renovation and reopening in <strong>2023</strong> it has been the <strong>Buffalo AKG Art Museum</strong>. One institution, three names, one wall. <em>Indefinite Divisibility</em> has hung in it, under one name or another, ever since 1945.
      </p>

      <SectionHeader accent={accent} label="The plain that everyone has seen since" title="A nowhere that became a cliché" />
      <p style={proseStyle}>
        The picture&rsquo;s real afterlife is not in its ownership but in how thoroughly its world got absorbed. The Tanguy formula &mdash; a smooth, invented, solid-looking object sitting on an empty, evenly lit plain under a high horizon &mdash; became <strong>a template for illusionistic Surrealism</strong>, alongside the Dal&iacute; and Magritte vein the break draws on, and, after that, a current in a century of fantastic and science-fiction imagery: airless alien deserts, biomorphic shapes that look organic and are nothing, dream-plains rendered with hard, convincing finish. That image is so familiar now it can be hard to see as an invention. It is a clich&eacute; precisely because Tanguy made it convincing first, and made it stick.
      </p>
      <p style={proseStyle}>
        A note on why this picture is shown small here. It is <strong>still under copyright</strong>: Tanguy painted it in 1942 and died in 1955, and the rights are actively held (© Estate of Yves Tanguy / Artists Rights Society, New York). So unlike the older paintings in these readings, which have passed into the public domain, this one is reproduced small and credited, for the purpose of talking about it. The invented world is free to roam an endless desert; the picture of it is not quite free in the same way.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'tanguy-divis': { world: TanWorld, making: TanMaking, break: TanBreak, looking: TanLooking, afterlife: TanAfterlife },
```
