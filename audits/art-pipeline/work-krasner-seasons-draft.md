# DRAFT — Lee Krasner, *The Seasons* (1957) · work-read `krasner-seasons`

Authored through the art content pipeline from `work-krasner-seasons-factpack.md`.
Last work in the Abstract Expressionism chain (index 9 / 9). Rights: **in-copyright**
(Krasner d. 1984) — hero + any inline reference render small/credited under fair use
(`RestrictedFigure`, never `PaintingFigure`).

FACT HANDLING (gate-relevant):
- Date is firmly **1957** (Whitney). The barn move + Earth Green series began **1956**; do not backdate the canvas.
- Medium = **oil AND house paint** on canvas (Whitney). Never drop "house paint."
- Dimensions = 235.6 × 517.8 cm = 92 3/4 × 203 7/8 in = **7 ft 8 3/4 in × 17 ft 0 in**, landscape. "Nearly 17 ft" rounds *down*; it is a true ~17 ft.
- Acquisition year **NOT asserted** — the Whitney prints credit line + accession 87.7 but no year; "~1987" is inferred from the "87" prefix, stated as inference only.
- KEY STATEMENT = the "this was my answer" quote, attributed to the AAA Seckler oral history. The transcript could not be opened (403), so it is presented as **reported/attributed**, not hard verbatim, with the source named for the fact gate to confirm. The "damn good painter, thank you" line is used as a recognition pull, also carefully attributed (Pollock-Krasner House / widely quoted).
- "Earth Green" series = c. **1956–59**; do NOT conflate with the later dark "Night Journey"/umber night paintings (c. 1959–62).
- Pollock's death (Aug 1956) is factual context, kept proportionate — she was a committed abstract painter long before Pollock and for ~28 years after; not framed as a widow's catharsis.

---

## PART A — the const (splice into `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Seasons (Lee Krasner, 1957), Whitney Museum of American Art,
// New York (accession 87.7). Flagship Abstract Expressionism work-read; last
// in the AbEx chain (9/9). Authored through the art content pipeline
// (fact pack → Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['krasner-seasons'] (Kra… prefix). FACT HANDLING (per
// work-krasner-seasons-factpack.md):
//  • Date = 1957 firmly (Whitney). The barn move + Earth Green series began 1956;
//    do NOT backdate the canvas to 1956.
//  • Medium = "Oil and house paint on canvas" (Whitney's exact line); keep BOTH —
//    not oil alone. Krasner, like Pollock, used commercial house paint.
//  • Dimensions = 235.6 × 517.8 cm = 92 3/4 × 203 7/8 in = 7 ft 8 3/4 in × 17 ft 0 in,
//    LANDSCAPE. Width 517.8 cm is a TRUE ~17 ft 0 in; "nearly 17 feet" rounds down.
//  • acquired: credit line VERBATIM + acc. 87.7; NO hard year — the Whitney page
//    prints no year, "87" prefix only implies ~1987 (inference, never asserted).
//  • rights: 'in-copyright' (Krasner d. 1984; © Pollock-Krasner Foundation / ARS) —
//    shown small + credited, fair use. NOT pd-us.
//  • Part of the "Earth Green" series (c. 1956–59); do NOT conflate with the later
//    dark "Night Journey"/umber night paintings (c. 1959–62).
//  • KEY STATEMENT = the "this was my answer" quote (AAA Seckler oral history) —
//    transcript 403 on fetch, so presented as REPORTED/attributed, not hard verbatim.
// ─────────────────────────────────────────────────────────────
export const KRASNER_SEASONS: ArtWorkContent = {
  id: 'krasner-seasons',
  name: 'The Seasons',
  shortName: 'The Seasons',
  year: 1957,
  artist: 'Lee Krasner',
  artistId: 'krasner',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil and house paint on canvas',
  dimensions: '7 ft 8 3/4 in × 17 ft 0 in',
  location: 'Whitney Museum of American Art',
  acquired: 'Purchase, with funds from Frances and Sydney Lewis by exchange, the Mrs. Percy Uris Purchase Fund and the Painting and Sculpture Committee (acc. 87.7)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 9, total: 9 },
  hook: 'Seventeen feet of swelling pink-and-rose forms, lush green and ochre, drawn together by sweeping black lines: bodies, buds, and fruit in one rolling field. Painted by a woman at full mural scale, in the barn studio that had been Pollock’s, an image of growth and ripeness made out of loss.',
  heroImage: ART_IMG.krasnerSeasons,
  heroCredit: 'Krasner, The Seasons, 1957 · Whitney Museum of American Art (87.7) · in copyright, shown small under fair use.',
  heroAspect: 2.20, // 517.8 × 235.6 cm → W/H ≈ 2.198, landscape
  heroFit: 'contain', // the whole ~7 ft 9 in × 17 ft canvas, never cropped
  rights: 'in-copyright', // Krasner d. 1984; © Pollock-Krasner Foundation / ARS; NOT pd-us
  stats: [
    { v: '1957', k: 'Painted' },
    { v: '7′8¾″ × 17′0″', k: 'Dimensions' },
    { v: 'Whitney', k: 'Now at' },
  ],
  sections: [
    { id: 'barn', eyebrow: 'Springs, Long Island · 1956–57', dateLabel: '1956–57', title: 'Into the big studio, at last', blurb: 'After Pollock’s death in August 1956, Krasner moves her own work out of the small bedroom she had been painting in and into the barn behind the house that had been his studio. For the first time she has the wall and floor to work at mural scale, and she takes it.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1957', title: 'The biggest canvas she had ever attempted', blurb: 'She builds The Seasons at nearly seventeen feet across, the largest work of her life to that point, in oil and the commercial house paint she and Pollock both used. It belongs to her "Earth Green" series, the run of large, vegetal, brightly colored canvases she paints in the barn in these years.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '7 ft 8 3/4 in × 17 ft 0 in', title: 'Bodies, buds, and fruit in one rolling field', blurb: 'Swelling pink-and-rose organic forms, off-white bulbs, passages of lush green and earthy ochre, all wrapped and separated by heavy black contour lines, repeating in a steady allover beat across the whole mural width. A picture of ripeness, not grief.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Abstract Expressionism', title: 'Who gets the big statement, and what it’s about', blurb: 'The heroic mural-scale AbEx canvas was coded male and made almost entirely by men. Krasner claims that scale and wall on her own terms, and answers grief with a green, swelling, life-affirming abstraction built out of body and nature rather than dread or the void.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1957–today', title: 'Out of "Mrs. Jackson Pollock"’s shadow', blurb: 'Critics dismissed the Earth Green works as derivative and "too decorative"; recognition came slowly, through a 1965 London retrospective and a 1973 Whitney show, and full reappraisal in the 1980s. The Seasons enters the Whitney by purchase, accession 87.7, where it hangs as a landmark of the movement.', progress: 0.96 },
  ],
  // Provenance: endpoints only. Made 1957 → Whitney by purchase, accession 87.7,
  // credit line VERBATIM. No hard acquisition year (page prints none; "87" prefix
  // implies ~1987, stated as inference). No prices; no unsourced intermediate chain.
  provenance: [
    { year: '1957', who: 'Lee Krasner (the artist)', place: 'Springs, East Hampton, New York', note: 'Painted in 1957 in the barn studio behind the house in Springs, the room that had been Jackson Pollock’s studio. The centerpiece of Krasner’s "Earth Green" series of c. 1956–59. © The Pollock-Krasner Foundation / Artists Rights Society (ARS), New York.', price: null },
    { year: '~1987–today', who: 'Whitney Museum of American Art', place: 'New York', note: 'Acquired by the Whitney by purchase, accession 87.7 (the "87" accession prefix implies an acquisition of around 1987, but the museum’s record prints no explicit year, so the date is an inference). Credit line: Purchase, with funds from Frances and Sydney Lewis by exchange, the Mrs. Percy Uris Purchase Fund and the Painting and Sculpture Committee. The chain between Krasner’s studio and the Whitney purchase is not detailed in the public record. © The Pollock-Krasner Foundation / ARS, New York.', price: 'Purchase (museum acquisition)', museum: true },
  ],
  figures: [
    { name: 'Lee Krasner', role: 'The painter', palette: ['#bf5a6a', '#3a6a4a', '#15110c'] },
    { name: 'Jackson Pollock', role: 'Husband; whose barn studio she moved into', palette: ['#2a2620', '#a8966a', '#0e0c08'] },
    { name: 'Hans Hofmann', role: 'Her teacher in the late 1930s; the modernist grounding', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Frances and Sydney Lewis', role: 'Collectors; funds by exchange behind the Whitney purchase', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Barbara Rose', role: 'Critic; her 1983 retrospective drove the reappraisal', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The swelling pink and rose forms', where: 'Across the whole field, the dominant note: full, bulbous, ripened pink-and-rose shapes', detail: 'The painting’s engine is a field of full, swelling pink-and-rose forms, read at once as bodies, breasts, buds about to open, and fruit about to fall. They are the emotional center of the picture, and what they carry is ripeness, not mourning. The literal fact on the canvas is the rounded rose-pink shapes; the reading of them as a fertility image, growth answering loss, is a reading, and a fair one.' },
    { label: 'The green and the ochre', where: 'Threaded through and around the pinks, in passages of foliage-green and earthy ochre', detail: 'Lush green and earthy ochre run through and around the pink forms, grounding the bright bodies in something like leaf and soil. This is the "earth green" that names the whole series Krasner painted in these barn-studio years: bodies rooted in vegetation, the warm and the growing together rather than the cool and abstract.' },
    { label: 'The rhythmic, allover repetition', where: 'The composition as a whole, scanned left to right for a place to rest', detail: 'There is no single focal point. The forms recur across the entire seventeen-foot width in a steady, rolling beat, so the eye travels the full canvas the way it would scan a field or a frieze rather than landing on one center. This is allover composition (a term out of Pollock’s drip pictures) bent toward organic, bodily rhythm: the weight spread evenly to all the edges.' },
    { label: 'Body, bud, and fruit at once', where: 'In the individual forms, anywhere the shapes hover between abstraction and a recognizable thing', detail: 'The shapes are kept deliberately un-pinned-down: the same form can be read as a torso, a seed-pod, a piece of fruit, or a sexual organ, and Krasner does not resolve which. That hovering between abstraction and the figurative is on purpose. It is how the picture stays a picture of life-force in general rather than an illustration of any one body.' },
    { label: 'The heavy black contour lines', where: 'Wrapping and dividing the colored forms throughout, the sweeping dark brush-lines', detail: 'Sweeping black brush-lines wrap and separate the colored forms, drawing the bodies and giving the whole surface its swing. This is the drawing inside the painting: the line that organizes the rolling field, sets the rhythm, and keeps the swelling colors from dissolving into one another. Krasner’s training as a draftsman is right here, structuring an otherwise overflowing surface.' },
    { label: 'The mural width', where: 'The full span of the work, about 7 ft 9 in tall and a true 17 ft 0 in wide', detail: 'Step back: the canvas is a true seventeen feet across and more than seven and a half feet tall. It is built to be walked, not glanced at, a wall-sized statement that asks for the same physical scale as the big AbEx canvases of its moment. The size is doing argumentative work, claiming a mural ambition that, in that circle and that year, was almost entirely a man’s preserve.' },
  ],
  lineage: {
    parents: [
      { label: 'Gestural abstraction', mode: 'art' },
      { label: 'Hofmann’s color teaching', mode: 'art' },
      { label: 'Matisse’s cut-out forms', mode: 'art' },
      { label: 'The barn studio at Springs', mode: 'civ' },
    ],
    children: [
      { label: 'Biomorphic abstraction', mode: 'art' },
      { label: 'Feminist art history’s recovery', mode: 'civ' },
      { label: 'Large-scale women’s abstraction', mode: 'art' },
    ],
  },
}
```

---

## PART B — the five chapter components (splice into `art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// The Seasons (Krasner, 1957) — the five chapters
// ─────────────────────────────────────────────────────────────
function KraBarn({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Springs, Long Island · 1956" title="The painter who already had her own work" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ee Krasner (1908&ndash;1984) was a serious abstract painter long before most people had heard her name, and long before the events that frame this picture. Born in Brooklyn to a Russian-Jewish immigrant family, she trained at the National Academy of Design, worked through the 1930s on the federal art projects of the Depression, and in the late 1930s studied under <strong>Hans Hofmann</strong> (1880&ndash;1966), the German &eacute;migr&eacute; teacher who drilled a generation of New York painters in modern color and structure. By the early 1940s she was already showing alongside the artists who would become the Abstract Expressionists, the loose group of postwar American painters (Pollock, de Kooning, Rothko, Newman, the rest) now lumped under that name. She was, in other words, a working modernist with her own decade of pictures behind her before the part of the story everyone knows begins.
      </p>
      <p style={proseStyle}>
        The part everyone knows is the marriage. In 1945 she married <strong>Jackson Pollock</strong> (1912&ndash;1956), and over the next decade he became the most famous painter in America, the man pouring and flinging house paint across canvases on the floor in the barn behind their house in <strong>Springs</strong>, on the east end of Long Island. Krasner kept painting through all of it, in a small upstairs bedroom of the house, in the space and at the scale that were left to her. And she kept being folded into his shadow: a 1949 review of her own work billed her, in print, as &ldquo;Lee Krasner (Mrs. Jackson Pollock).&rdquo; That is the thing she spent her life fighting, and it matters here, because the picture in front of us is one of the answers she gave.
      </p>

      <SectionHeader accent={accent} label="August 1956" title="The crash, and the empty studio" />
      <p style={proseStyle}>
        On <strong>11 August 1956</strong>, Pollock was killed in a car crash near the house in Springs. Krasner was in Europe when it happened and came home to bury him. What follows is factual and it is part of this painting, so it should be said plainly, and then kept in proportion. In the months after his death, Krasner moved her own work <strong>out of the small bedroom and into the barn</strong> behind the house, the far larger room that had been Pollock&rsquo;s studio. For the first time in her life she had the wall and the floor to work at <strong>mural scale</strong>, and she used it.
      </p>
      <p style={proseStyle}>
        The lazy reading of what came next is &ldquo;the grieving widow paints her way through her loss,&rdquo; and that reading is too small. The grief is real and the studio is real; both belong in the story. But Krasner had been a committed abstract painter for nearly twenty years <em>before</em> this moment, and she would go on painting for nearly thirty years <em>after</em> it (she died in 1984). The pictures she began making in that barn are not a catharsis so much as an arrival: a painter who had finally been handed the room she needed, taking the scale and the ambition that had been kept from her, and making something with it. The first great result is the one we&rsquo;re about to walk up to.
      </p>
    </article>
  )
}

function KraMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1957" title="The largest canvas of her life" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the barn, in <strong>1957</strong>, Krasner built <em>The Seasons</em>, and it was the biggest thing she had ever attempted: a canvas nearly <strong>seventeen feet wide and more than seven and a half feet tall</strong>. (Hold the date, because the dust of 1956 clings to it. Pollock died in August 1956, and the move into the barn and the start of this body of work belong to 1956; but the painting itself is a 1957 canvas. It is dated firmly 1957 by the Whitney Museum, which owns it. Do not let the famous death-year pull the picture back a year.)
      </p>
      <p style={proseStyle}>
        The medium is worth getting exactly right, because it ties Krasner to the circle she came out of. It is <strong>oil and house paint on canvas</strong>, not oil alone. Like Pollock, Krasner reached for commercial <strong>house paint</strong>, the cheap industrial enamel sold for walls and doors, alongside her artist&rsquo;s oils. That choice is a quiet piece of the AbEx story in itself: these painters were building heroic pictures out of hardware-store material, and the surface of <em>The Seasons</em> carries both the slow body of oil and the flatter, faster flow of house paint.
      </p>

      <SectionHeader accent={accent} label="The Earth Green series" title="A run of green, swelling pictures" />
      <p style={proseStyle}>
        <em>The Seasons</em> is not a one-off. It is the centerpiece of a body of work now called the <strong>&ldquo;Earth Green&rdquo; series</strong>, the run of large, biomorphic, vegetal, brightly colored canvases Krasner painted in the barn studio in roughly <strong>1956 to 1959</strong> (related canvases include <em>Sun Woman I</em> and the painting that gave the series its name). <em>Biomorphic</em> means built from rounded, organic, living-looking shapes, the curves of bodies and plants rather than the straight lines of geometry; that is the language of these pictures, and <em>The Seasons</em> is the largest and most ambitious of them.
      </p>
      <p style={proseStyle}>
        One thing to keep straight, because it is easy to blur: the Earth Green pictures are the <em>green</em> ones, full of pink and foliage and growth. They are not the dark night paintings. A couple of years after this, Krasner could not sleep, and she began a different series in the same barn, the <strong>&ldquo;Night Journey&rdquo;</strong> or umber paintings of about 1959 to 1962, worked in browns and off-whites by artificial light because she could not face color in the small hours. Those are a separate, darker run. <em>The Seasons</em> belongs to the green ones, the daylight ones, the ones about ripeness and growth.
      </p>
    </article>
  )
}

function KraLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A field of ripe pink forms" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The painting is wide before it is anything else, about <strong>seven feet nine inches tall and a full seventeen feet across</strong> (235.6 by 517.8 cm), a mural-scale landscape canvas you cannot take in with a single glance; you have to walk it. And the first thing that fills your eye, before any label, is a rolling field of <strong>swelling pink and rose forms</strong>: full, bulbous, ripened shapes, with off-white bulbs among them, the color of bodies and of fruit at its peak.
      </p>
      <p style={proseStyle}>
        Look at any one of those forms directly and notice that it refuses to settle into a single thing. The same rounded pink shape reads as a <strong>torso</strong>, then as a <strong>breast</strong>, then as a <strong>bud about to open</strong>, then as a <strong>piece of fruit about to fall</strong>; some read frankly as sexual or plant organs. Krasner keeps them un-pinned-down on purpose, hovering between abstraction and the figurative, so that the picture stays about life-force in general rather than any one body. Against the plain fact of Pollock&rsquo;s death the year before, what the canvas is overwhelmingly <em>about</em> is not grief. It is <strong>ripeness</strong>: growth, fertility, the turn of the seasons toward renewal.
      </p>

      <SectionHeader accent={accent} label="The color" title="The earth green that names the series" />
      <p style={proseStyle}>
        Threaded through and around the pinks are passages of <strong>lush green and earthy ochre</strong>. This is the &ldquo;earth green&rdquo; the whole series is named for, and it does real work: it grounds the bright, fleshy bodies in something like leaf and soil, so the picture reads as bodies <em>in</em> a landscape of growth rather than bodies floating in a void. The warm pinks are the figures; the greens and ochres are the ground they grow out of. Krasner sets them so close in pitch that the field stays warm and overflowing all the way across.
      </p>

      <SectionHeader accent={accent} label="The drawing" title="The black lines that hold it together" />
      <p style={proseStyle}>
        Now look for the structure, because a field this full needs holding. It is held by <strong>heavy black contour lines</strong>: sweeping dark brush-strokes that wrap each form and separate it from its neighbor, drawing the bodies and giving the whole surface its swing. This is the drawing inside the painting, and it is where Krasner&rsquo;s long training as a draftsman shows. Without those black lines the swelling colors would dissolve into one warm blur; with them, the picture has a beat. They are the bones under all that ripe flesh.
      </p>

      <SectionHeader accent={accent} label="The rhythm" title="No center, one rolling beat" />
      <p style={proseStyle}>
        Step back and soften your focus, and notice what the picture refuses to give you: a center. There is no single focal point, no climax, nowhere the eye is meant to land and rest. Instead the forms <strong>recur across the whole width</strong> in a steady, rolling beat, so your eye travels the full seventeen feet left to right the way it would scan a field or read a frieze. This is <strong>allover composition</strong>, a term out of Pollock&rsquo;s drip pictures (where the poured line covers the whole surface evenly, edge to edge, with no middle), but Krasner has bent it toward something living. Pollock&rsquo;s allover field was woven line; hers is bodily rhythm, the same swelling forms repeating like the verses of a season. The huge surface is organized not as a scene but as a <em>pulse</em>, and you read it the way you&rsquo;d watch something grow.
      </p>
    </article>
  )
}

function KraBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="The big statement was men’s territory" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o see what <em>The Seasons</em> broke, you have to see how Abstract Expressionism was carved up by 1957. Its signature gesture was the <strong>heroic, mural-scale, full-arm canvas</strong>, the wall-sized painting made with the whole moving body, and that gesture was coded male and, in practice, made almost entirely by men: Pollock&rsquo;s poured fields, de Kooning&rsquo;s slashing women, Kline&rsquo;s black girders, the great glowing rectangles of Rothko and Newman. A handful of women in the first generation (Krasner among the very few) showed and were taken seriously. But the <em>big</em> statement, the ambitious, museum-scale, wall-claiming painting, was treated as a man&rsquo;s preserve. Krasner herself had been working smaller, partly for lack of a large studio and partly inside Pollock&rsquo;s shadow.
      </p>
      <p style={proseStyle}>
        And the dominant emotional key of that big male statement trended one way: toward the brooding, the sublime, the anxious, the void. The wall-sized AbEx canvas was, again and again, a picture about <strong>dread</strong>, or about nothing at all.
      </p>

      <SectionHeader accent={accent} label="The break" title="A woman, at mural scale, painting growth" />
      <p style={proseStyle}>
        The break of <em>The Seasons</em> is not a new technique. It is <strong>who is allowed the big statement, and what that statement is allowed to be about</strong>. Three things, all at once.
      </p>
      <p style={proseStyle}>
        First: <strong>a woman painting AbEx at full mural scale and ambition</strong>. <em>The Seasons</em> is a seventeen-foot canvas made by a woman, on her own terms, in the very studio where Pollock had made his largest drip paintings. She did not make a reduced, modest, &ldquo;feminine&rdquo; version of the wall-sized picture; she claimed the wall itself, at the full scale the men had reserved for themselves.
      </p>
      <p style={proseStyle}>
        Second: <strong>a life-affirming abstraction</strong>. Where the dominant AbEx mode reached for dread and the void, Krasner answered the worst year of her life with a <strong>green, swelling, fertile</strong> image: abstraction as growth and renewal rather than anxiety. Out of loss she built a picture of ripeness, which is close to the opposite of what the heroic canvas was supposed to be about.
      </p>
      <p style={proseStyle}>
        Third: <strong>the body-and-nature rhythm</strong>. She built the huge surface out of bud-, fruit-, and body-suggesting forms in steady, rolling repetition, a way of organizing a wall that is gestural and abstract yet rooted in living, organic shape. It is not Pollock&rsquo;s poured skein and it is not the color-field stain; it is allover composition bent toward the rhythms of a body and a season. That is a distinct way to fill a mural, and it is hers.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“This was my answer”" />
      <p style={proseStyle}>
        Krasner herself, in an oral-history interview years later, tied the painting directly to the question Pollock&rsquo;s death had forced on her. The line is widely reported in this form:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        &ldquo;Jackson died in &rsquo;56 so the question came up whether one would continue painting at all and I guess this was my answer.&rdquo;
      </blockquote>
      <p style={proseStyle}>
        The remark is attributed to her <strong>oral-history interview for the Archives of American Art</strong> at the Smithsonian (the interviewer was Dorothy Seckler, in sessions of the mid-1960s), and it is reported consistently across the sources, though the primary transcript was not directly accessible to confirm the exact wording. Taken as reported, it says the thing plainly: making this enormous canvas <em>was</em> her answer to whether she would keep painting at all. Not a memorial to Pollock. A painter&rsquo;s declaration that she was still here, and working bigger than ever.
      </p>
    </article>
  )
}

function KraAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After · the critics" title="“Derivative,” “too decorative”" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or all that <em>The Seasons</em> claimed, recognition did not come quickly, and the way it was withheld is part of the picture&rsquo;s story. When the Earth Green canvases were shown, a strand of criticism waved them off as <strong>derivative of Pollock&rsquo;s work and &ldquo;too decorative.&rdquo;</strong> It is worth seeing what &ldquo;decorative&rdquo; was doing in that sentence: in the art writing of the period it functioned as a coded put-down for &ldquo;feminine,&rdquo; a way of filing a woman&rsquo;s large, colorful, ambitious painting under pretty-and-minor rather than serious-and-major. Krasner spent her career under exactly this kind of dismissal, the one that had once printed her name as &ldquo;Mrs. Jackson Pollock.&rdquo; She was blunt about what it cost her, and the line most often quoted has the dryness of someone who had heard it all:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        &ldquo;I was a woman, Jewish, a widow, a damn good painter, thank you, and a little too independent.&rdquo;
      </blockquote>
      <p style={proseStyle}>
        The remark circulates widely (through Pollock-Krasner House materials and the standard accounts), in slightly varying forms, as Krasner&rsquo;s own summary of why the art world kept her at arm&rsquo;s length. Taken as reported, it is the whole fight in one sentence: she knew exactly how good she was, and she knew exactly which of the things on that list were being held against her.
      </p>

      <SectionHeader accent={accent} label="The reappraisal" title="London, the Whitney, and the 1980s" />
      <p style={proseStyle}>
        The independent recognition she had earned arrived slowly and then, in the end, fully. A 1965 retrospective at the <strong>Whitechapel Gallery</strong> in London put her work in front of a serious European audience on its own terms. In 1973 the <strong>Whitney Museum of American Art</strong> in New York mounted <em>Lee Krasner: Large Paintings</em>, a show built precisely around the mural-scale ambition <em>The Seasons</em> embodies. And in the 1980s came the full reappraisal, including a major touring retrospective near the end of her life, that finally set her among the first-generation Abstract Expressionists rather than in the margin beside one of them. Krasner died in <strong>1984</strong>, having lived to see at least the beginning of that turn.
      </p>

      <SectionHeader accent={accent} label="The object" title="Where it lives now" />
      <p style={proseStyle}>
        <em>The Seasons</em> itself entered the <strong>Whitney Museum of American Art</strong> by purchase. The credit line records the museum&rsquo;s purchase &ldquo;with funds from Frances and Sydney Lewis by exchange, the Mrs. Percy Uris Purchase Fund and the Painting and Sculpture Committee,&rdquo; and the work carries the accession number <strong>87.7</strong>. (A note on the date: the Whitney&rsquo;s record prints no explicit acquisition year. The &ldquo;87&rdquo; at the front of the accession number conventionally points to an acquisition around 1987, but that is an inference from the numbering, not a stated fact, so treat it as &ldquo;roughly 1987&rdquo; rather than a hard date.) The painting is still in copyright (Krasner died in 1984; the rights sit with the Pollock-Krasner Foundation and the Artists Rights Society), which is why you see it here small and credited rather than reproduced freely.
      </p>
      <p style={proseStyle}>
        So the picture comes to rest as what it always was: a true seventeen feet of swelling pink and green, made by a woman who had been told, for decades, that the big statement was not hers to make. She made it anyway, in the studio where her husband had made his, the year after he died, and she titled it for the thing it is most about. Not an ending. The seasons turning over, toward growth.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'krasner-seasons': { barn: KraBarn, making: KraMaking, looking: KraLooking, break: KraBreak, afterlife: KraAfterlife },
```
