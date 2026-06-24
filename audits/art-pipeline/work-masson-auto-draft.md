# Work draft — André Masson, *Automatic Drawing* (1924) · `masson-auto`

Authored through the art content pipeline from `work-masson-auto-factpack.md`.
PART A is the `ArtWorkContent` const; PART B is the five `Msn*` chapter components
plus the trailing NARRATIVES registry comment. Coordinator splices into
`src/lib/art-content.ts` and `art-section-reader.tsx`.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Automatic Drawing (Dessin automatique), André Masson, 1924,
// ink on paper, 23.5 × 20.6 cm (9 1/4 × 8 1/8 in), portrait/upright sheet,
// The Museum of Modern Art, New York (object 38201). Founding work read for
// Surrealist automatism. Authored through the art content pipeline (fact pack
// → Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['masson-auto'] (Msn… prefix). FACT HANDLING (gate-corrected):
// (1) WHICH 1924 sheet — this is the MoMA 38201 upright drawing, NOT À Louis
// Aragon / À Paul Éluard (both 1924), Birth of Birds (c.1925), or the 1926 sand
// painting Battle of Fishes; the wired image (ART_IMG.massonAuto) is verified by
// eye as 38201. (2) NOT "pure" trance automatism — Masson let the marks stand
// but consciously elaborated some after the fact (MoMA / Hyperallergic); say so.
// (3) Trance / hunger / drugs belong to his broader PRACTICE, never pinned to
// THIS sheet. (4) "Purchase" credit only — fund and acquisition year NOT
// confirmed (MoMA record blocked), so no year/fund invented. (5) Dimensions
// ft/in; 23.5 cm is HEIGHT, 20.6 cm WIDTH (taller than wide). (6) The Breton
// "psychic automatism in its pure state" key statement is the 1924 Manifesto,
// Seaver/Lane translation, attributed to BRETON (not Masson). PD-US (published
// 1924); Masson d. 1987, so NOT PD in France/EU — US-PD basis is publication.
// ─────────────────────────────────────────────────────────────
export const MASSON_AUTO: ArtWorkContent = {
  id: 'masson-auto',
  name: 'Automatic Drawing',
  shortName: 'Automatic Drawing',
  year: 1924,
  artist: 'André Masson',
  artistId: 'masson',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Ink on paper',
  dimensions: '9 1/4 in × 8 1/8 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Purchase',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 3, total: 9 },
  hook: 'A small sheet covered in one racing, unbroken line, drawn fast with no subject decided in advance, out of which hands and birds and a fish keep half-surfacing and dissolving again, the first time the unconscious itself was let hold the pen.',
  heroImage: ART_IMG.massonAuto,
  heroCredit: 'Masson, Automatic Drawing, 1924 · The Museum of Modern Art, New York',
  heroAspect: 0.88, // 20.6 × 23.5 cm → W/H ≈ 0.88, an upright (portrait) sheet
  heroFit: 'contain', // the whole small sheet, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1924', k: 'Drawn' },
    { v: '9¼″ × 8⅛″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'method', eyebrow: 'Paris · 1924', dateLabel: '1924', title: 'The hand let off the leash', blurb: 'Breton has just defined Surrealism as "psychic automatism," letting the hand move without conscious control so that what surfaces comes from below deliberate thought. Masson is the painter who carries that method out of writing and into line, starting in the winter of 1923.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1924', title: 'Pen to paper, no subject, no plan', blurb: 'Fast marks across a small sheet with nothing decided in advance, the hand moving "like a medium channeling a spirit," and then, out of the lacelike web, fragments of bodies starting to suggest themselves. Made largely automatically, with some conscious shaping after the fact.', progress: 0.32 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1924', title: 'A drawing that records the hand, not a thing seen', blurb: 'For centuries a drawing was the record of something seen or imagined and then composed. Here it is the record of the unconscious hand itself: process over depiction, the mark generating the subject instead of the subject dictating the mark.', progress: 0.56 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '9 1/4 in × 8 1/8 in', title: 'One line, and the bodies that almost form in it', blurb: 'The single continuous skein of ink, the half-emergent hands and birds and a breast and a fish, the floating field with no ground or horizon, and the speed you can read in the whip of the mark. Plus the key statement: Breton’s own definition of the method.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1924–today', title: 'The line that runs to Pollock', blurb: 'A small sheet that ends up in MoMA by purchase, and a method that carries forward: the automatic line is the ancestor of Abstract Expressionism’s gesture, and Pollock said as much about Masson.', progress: 0.96 },
  ],
  provenance: [
    { year: '1924', who: 'André Masson (the artist)', place: 'Paris', note: 'Drawn in 1924, the year Breton’s first Manifesto of Surrealism defined the method. One of a small cluster of automatic drawings Masson made that year; the earlier ownership chain (artist to dealer or collector to MoMA) is not documented in the sources.', price: null },
    { year: 'by acquisition', who: 'Museum of Modern Art', place: 'New York', note: 'In MoMA’s collection by purchase; object 38201, ink on paper, 23.5 × 20.6 cm. The credit line is recorded simply as "Purchase"; the acquisition year and the named fund are not confirmed in the available record, so neither is stated here.', price: 'Purchase', museum: true },
  ],
  figures: [
    { name: 'André Masson', role: 'The draftsman', palette: ['#4a5a3a', '#2a2a1c', '#0e0e08'] },
    { name: 'André Breton', role: 'Defined automatism', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Joan Miró', role: 'Studio neighbor on the rue Blomet', palette: ['#bf3a25', '#3a4a6a', '#1c1208'] },
    { name: 'Michel Leiris', role: 'Writer in the circle', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'Jackson Pollock', role: 'Carried the line forward', palette: ['#1c1c1c', '#c8b84a', '#bf2f25'] },
  ],
  annotations: [
    { label: 'The one continuous line', where: 'Everywhere; follow the ink anywhere on the sheet and try to find where it stops', detail: 'The drawing is built from a single nervous skein of line that loops back on itself, and you can travel most of the sheet along it without the pen ever seeming to lift. That unbroken racing line is the physical trace of a hand that was not stopping to plan. It is the most important thing on the page, because it is the evidence that the mark came first and the image, if any, came after.' },
    { label: 'Hands surfacing out of the tangle', where: 'In the denser knots of line, where fingers and a curved palm briefly resolve', detail: 'Look for the line almost settling into a hand, fingers spreading, and then dissolving back into the web before it becomes a whole figure. Hands are one of the fragments Masson’s automatic line keeps half-forming. Nothing here is a drawn-then-filled hand; it is a hand the eye finds in marks that were not made to depict one.' },
    { label: 'Birds half-forming', where: 'Toward the upper reaches of the web, where a wing or a beak-shape catches', detail: 'A wing-curve, the dart of a beak: birds are another of the recurring shapes that surface and sink in Masson’s automatic sheets. They are suggestions, not illustrations, the line tipping for a moment toward a recognizable creature and then racing on past it.' },
    { label: 'A breast and a fish in the line', where: 'Among the half-figures across the field, where a soft curve and a tapering body read as a breast and a fish', detail: 'Among the fragments, a rounded breast-curve and the tapering body of a fish briefly read out of the tangle. These body-and-creature fragments (hands, birds, a breast, a fish) are the ones that recur across Masson’s automatic drawings: the line keeps almost condensing into a body or an animal and then letting it go.' },
    { label: 'No ground, no horizon', where: 'The sheet as a whole; there is no floor line and no sky', detail: 'Nothing tells you which way is up or where a "floor" would be. The marks float in an unanchored, all-over field rather than sitting inside a described space. That refusal of a fixed ground is part of why the drawing reads as a record of an act rather than a view of a scene; there is no scene for it to be a view of.' },
    { label: 'The speed in the mark', where: 'At the turns, where the line whips and overshoots', detail: 'Watch where the line races past a turn and overshoots it, and where it thickens into a worried knot before shooting across an open patch. That whip and that uneven rhythm are the pace of the drawing made visible: this is a fast mark, and the velocity is part of what you are looking at, not a flaw in it.' },
  ],
  lineage: {
    parents: [
      { label: 'Automatic writing', mode: 'art' },
      { label: 'Breton’s 1924 Manifesto', mode: 'art' },
      { label: 'The Paris avant-garde', mode: 'civ' },
    ],
    children: [
      { label: 'Surrealist automatism', mode: 'art' },
      { label: 'Abstract Expressionism', mode: 'art' },
      { label: 'Gesture as subject', mode: 'art' },
    ],
  },
}
```

## PART B — the five chapter components + NARRATIVES registry

```tsx
// ─────────────────────────────────────────────────────────────
// Automatic Drawing (Masson, 1924) — the five chapters
// ─────────────────────────────────────────────────────────────
function MsnMethod({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1924" title="The hand let off the leash" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the autumn of <strong>1924</strong>, in Paris, a poet named <strong>Andr&eacute; Breton</strong> (1896&ndash;1966) published a pamphlet that gave a name to a new movement and, more usefully, a method. The movement was <strong>Surrealism</strong>. The method was <strong>automatism</strong> &mdash; and the whole picture we are about to look at is one sheet of it, so it is worth being plain about what the word means. To work automatically is to let the hand move <em>without conscious control</em>, fast enough to outrun the part of you that edits and corrects, so that whatever surfaces onto the page comes from below deliberate thought. That &ldquo;below&rdquo; is <strong>the unconscious</strong>: the layer of the mind, in the Freud-soaked thinking of these men, that runs under reason and taste and good manners and is supposedly truer for it. The wager of automatism is simple and large: reason, taste, and morality are filters laid over a deeper mental life, and if you switch the filters off, the deeper thing leaks straight onto the paper.
      </p>
      <p style={proseStyle}>
        Breton had arrived at the idea first in <strong>words</strong>. Back in <strong>1919</strong>, with his friend <strong>Philippe Soupault</strong>, he had written <em>Les Champs magn&eacute;tiques</em> (&ldquo;The Magnetic Fields&rdquo;) by <strong>automatic writing</strong>: racing the pen across the page, transcribing whatever phrases came, refusing to stop and shape them. The point was to catch the mind in the act of thinking, before the writer-self could tidy it. Five years later the <em>Manifesto of Surrealism</em> built a whole program on that experiment, and defined Surrealism itself as &ldquo;psychic automatism.&rdquo; (We will read his exact words in the last chapter, in front of the drawing they describe.)
      </p>

      <SectionHeader accent={accent} label="From writing into line" title="The painter who picked up the pen" />
      <p style={proseStyle}>
        Automatic <em>writing</em> already existed. The open question in 1924 was whether you could do the same thing with a <strong>drawing</strong> hand &mdash; whether a pen could be turned loose on a blank sheet the way it had been turned loose on a blank page. The man who answered, and who became the method&rsquo;s leading practitioner, was <strong>Andr&eacute; Masson</strong> (1896&ndash;1987). Starting in the <strong>winter of 1923</strong>, before the manifesto even appeared, Masson was among the very first to draw this way: pen to paper with <em>no subject and no composition decided in advance</em>, the hand moving fast and the marks allowed to fall where they would.
      </p>
      <p style={proseStyle}>
        He did not invent the loose idea of an &ldquo;automatic&rdquo; drawing from nothing &mdash; the Dada artist <strong>Jean (Hans) Arp</strong> had made chance-driven works a few years earlier &mdash; but Masson is the figure who tied automatic drawing to Breton&rsquo;s program and made it a Surrealist instrument. He had reasons of his own to want a way of making images that did not require composing them. He was a badly wounded veteran of the <strong>First World War</strong>, carrying what we would now call trauma, and across his wider practice he pushed himself into altered states to loosen his grip on the pen: working in a kind of semi-trance, sometimes after long stretches without food or sleep, sometimes under the influence of drugs, often alongside the writers and painters in his orbit on the rue Blomet, among them <strong>Joan Mir&oacute;</strong>, <strong>Michel Leiris</strong>, and <strong>Antonin Artaud</strong>. (That is his <em>practice</em> in general; no source ties any one of those conditions to this particular small sheet, so read them as the weather Masson worked in, not as a caption for this drawing.)
      </p>
    </article>
  )
}

function MsnMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1924" title="Pen to paper, no subject, no plan" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he procedure was almost nothing, which is the point. Masson sat down with a small sheet of paper and a pen of ink, and he did not decide first what to draw. There was no subject in his head to be set down, no scene to be arranged, no figure to be placed. He simply began to move the hand, and to move it <strong>fast</strong> &mdash; faster than judgment could intervene to correct a line or improve a shape. MoMA, which owns the sheet, describes the hand in exactly this register: moving across the paper &ldquo;like a medium channeling a spirit.&rdquo; The line is laid down before the deciding mind can catch up to it.
      </p>
      <p style={proseStyle}>
        What you get from that, at first, is a tangle: a fine, lacelike web of pen marks with no obvious picture in it. And then the second thing happens, the thing that made the method interesting rather than merely random. As Masson worked, he &ldquo;soon found hints of images emerging from the abstract, lacelike web of pen marks.&rdquo; The line, racing along with no plan, kept <em>almost</em> resolving into something &mdash; a hand, a bird, a fragment of a body &mdash; and then dissolving again. The image was not decided in advance and then drawn; it surfaced, half-formed, out of marks that were made for their own sake.
      </p>

      <SectionHeader accent={accent} label="Not pure all the way down" title="The conscious touch he allowed himself" />
      <p style={proseStyle}>
        Here is the part the romantic version of the story leaves out, and it matters. The legend of automatism is a pure trance with zero conscious input, the artist a passive channel and nothing more. That is the <em>ideal</em>; it is not quite how the sheet was finished. The sources are explicit that Masson let the automatic marks stand but then, at times, <strong>elaborated on them with conscious changes or additions</strong> &mdash; once a shape suggested itself in the tangle, he might coax it a little, let it stand, nudge the web toward the form it was tipping into. (In his related <strong>sand paintings</strong> of a couple of years later he did this more openly, going back in with pencil to draw figures out of the poured ground.) So the honest description is not &ldquo;pure&rdquo; automatism but a drawing that is <em>largely</em> automatic, with acknowledged conscious shaping after the fact. The hand ran free; the eye, afterward, chose what to keep.
      </p>
      <p style={proseStyle}>
        Keep that distinction, because it is the difference between a slogan and a fact. &ldquo;Psychic automatism in its pure state&rdquo; is Breton&rsquo;s definition of an aim. The sheet in front of us is the aim pursued by a real hand that could not entirely stop being an artist. Both things are true at once, and the drawing is more interesting for it.
      </p>
    </article>
  )
}

function MsnBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A drawing used to be a record of a thing" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or as long as there had been drawings, a drawing was a record of something <strong>seen or imagined and then composed</strong>. The artist chose a subject &mdash; a face, a tree, a saint, a vision &mdash; set it in a space, and laid down marks that described it. The hand was the obedient servant of a picture the mind had already chosen. The skill on show was depiction and control: how truly, how gracefully, the marks could be made to render the thing. Even the wildest pre-Surrealist drawing, the most visionary or the most violent, was still the hand <em>executing</em> a picture decided in advance. The marks served the subject.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="Now the drawing records the hand itself" />
      <p style={proseStyle}>
        Masson turns that around. Here the drawing is a record of the <strong>unconscious hand itself</strong> &mdash; <strong>process over depiction</strong>. There is no prior subject. The line is laid down faster than judgment can intervene, and the &ldquo;image&rdquo; is whatever the viewer (and, after the fact, Masson) can find <em>in</em> the marks. The picture is no longer a window onto a chosen scene; it is a <strong>trace of an act</strong>, evidence of mark-making rather than a description of a thing. The inversion is the whole break: instead of the subject dictating the mark, the mark generates the subject. The line moves first, and the image is a guest that arrives in it.
      </p>
      <p style={proseStyle}>
        That sounds like a small studio quirk and is in fact a hinge in the history of art. If the mark can come before the subject, then mark-making itself &mdash; the speed, the pressure, the unplanned path of the hand &mdash; can be the real content of a picture. That is the idea that runs forward, two decades later, into <strong>Abstract Expressionism</strong> and the dripped, poured, gestural canvases of the 1940s and &rsquo;50s, where the act of painting becomes the subject. The straight line from Masson to that moment is not invented after the fact: <strong>Jackson Pollock</strong> openly admired Masson&rsquo;s automatism, and the automatic line is one of the things he took from it. A small sheet of racing ink is one of the places that whole future opens.
      </p>
    </article>
  )
}

function MsnLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="One line, and the bodies that almost form in it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t is small. The sheet is about <strong>nine and a quarter inches tall by eight and an eighth wide</strong> (a touch over 23 by 20 centimeters), an <strong>upright</strong> page you could hold in two hands &mdash; taller than it is wide, not a wide horizontal sheet, which is one quick way to know you are looking at this drawing and not at one of the other automatic sheets Masson made the same year. The smallness is part of the meaning: this is an intimate trace of a single hand, not a grand statement on a wall.
      </p>
      <p style={proseStyle}>
        Start with the <strong>line</strong>, because the line is almost the whole drawing. Pick a point anywhere in the ink and follow it, and you will find you can travel most of the sheet without the pen seeming to lift off. It is one continuous, nervous skein that loops back on itself, doubles, races, and knots &mdash; a single unbroken thread laid down by a hand that was not stopping to plan. Watch the <strong>speed</strong> in it: where the line whips past a turn and overshoots, where it thickens into a worried tangle and then shoots across an open patch. That uneven rhythm is the pace of the drawing made visible. This is a fast mark, and its velocity is part of what you are looking at.
      </p>

      <SectionHeader accent={accent} label="The half-figures" title="Hands, birds, a breast, a fish" />
      <p style={proseStyle}>
        Now stop following the line and let your eye go soft, the way you let shapes form in a cloud, and the second layer comes up. Out of the tangle, <strong>fragments of bodies and creatures half-emerge</strong> and sink back. A <strong>hand</strong> nearly resolves, fingers spreading, and then dissolves before it becomes a whole figure. A <strong>bird</strong> catches for a moment in a wing-curve or the dart of a beak. A soft rounded curve reads as a <strong>breast</strong>; a tapering body reads as a <strong>fish</strong>. None of these is drawn-then-finished the way you would draw a hand on purpose. Each is a shape the eye <em>finds</em> in marks that were not made to depict it &mdash; the line tipping, again and again, toward a recognizable body or animal and then letting it go. The drawing never settles into one whole figure. It stays at the threshold, all almost.
      </p>
      <p style={proseStyle}>
        And notice what is <strong>not</strong> there: a ground, a floor, a horizon. Nothing tells you which way is up or where a body would stand. The marks float in an unanchored, all-over field rather than sitting inside a described space. There is no scene for the drawing to be a view of, which is exactly right for a picture that is a record of an act and not a window onto a place.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“Psychic automatism in its pure state”" />
      <p style={proseStyle}>
        The sentence that defines what this drawing is reaching for was published the same year, by Breton, in the <em>Manifesto of Surrealism</em>. He wrote it as a mock-dictionary entry, defining the new word the way a dictionary would. Here it is, in the standard English translation by <strong>Richard Seaver and Helen R. Lane</strong> (<em>Manifestoes of Surrealism</em>, 1969):
      </p>
      <blockquote style={{ margin: '0 0 14px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>SURREALISM, <em>n.</em> Psychic automatism in its pure state, by which one proposes to express &mdash; verbally, by means of the written word, or in any other manner &mdash; the actual functioning of thought.</p>
        <p style={{ margin: 0 }}>ENCYCLOPEDIA. <em>Philos.</em> Surrealism is based on the belief in the superior reality of certain forms of previously neglected associations, in the omnipotence of dream, in the disinterested play of thought.</p>
      </blockquote>
      <p style={proseStyle}>
        That is the program this sheet belongs to: an attempt to express &ldquo;the actual functioning of thought&rdquo; directly, not a thing seen but the mind in the act of running. Read it next to the drawing and the phrase &ldquo;in any other manner&rdquo; is doing quiet work &mdash; Breton wrote it for words, and Masson is the one proving that the &ldquo;other manner&rdquo; could be a pen on a blank sheet. (One caution the picture itself has already taught us: &ldquo;in its <em>pure</em> state&rdquo; is Breton&rsquo;s ideal. The drawing is the ideal pursued by a real hand that elaborated some of the marks afterward. The definition names the aim; the sheet is the aim, attempted.)
      </p>
    </article>
  )
}

function MsnAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="A small sheet, into MoMA by purchase" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his is one of several automatic drawings Masson made in <strong>1924</strong>, a small cluster that share the plain habit of the line and not much else; you will see the bare title &ldquo;Masson, <em>Automatic Drawing</em>, 1924&rdquo; attached to more than one sheet, which is a real trap. The one we have been looking at is the drawing the <strong>Museum of Modern Art</strong> in New York holds under that plain title: ink on paper, the small upright sheet, MoMA&rsquo;s object number 38201. (The <em>provenance</em>, the documented chain of who has owned a work in order, is thin for this sheet before it reached the museum, and the sources do not lay out the earlier owners, so we leave that chain unstated rather than guess at it.)
      </p>
      <p style={proseStyle}>
        The museum records how it came in with a single word: <strong>Purchase</strong>. The exact year MoMA bought it, and the named fund the money came from, are not pinned down in the record we can read, so we will not print a year or a fund we cannot stand behind. What is solid is the end state: the small 1924 sheet is in MoMA&rsquo;s collection by purchase, where it stands as the textbook example of Surrealist automatic drawing.
      </p>

      <SectionHeader accent={accent} label="The line that kept running" title="From a Paris pen to American paint" />
      <p style={proseStyle}>
        The drawing&rsquo;s real afterlife is not in its ownership but in its <strong>method</strong>. The idea that the mark could come before the subject &mdash; that an unplanned, racing line could be the real content of a picture &mdash; did not stay in 1924. It crossed the Atlantic and turned into paint. When the <strong>Abstract Expressionists</strong> in New York in the 1940s made the act of painting itself the subject of the canvas, the automatic line was one of their inheritances, and <strong>Jackson Pollock</strong> said plainly that he admired Masson&rsquo;s automatism. The poured and dripped canvases that became the most famous American paintings of the century have a grandparent in a nine-inch French sheet covered in one continuous line.
      </p>
      <p style={proseStyle}>
        One footnote on rights, because it is genuinely two-sided. The drawing was first published in France in <strong>1924</strong>, which puts it in the <strong>public domain in the United States</strong> &mdash; the basis is the early date of publication, not anything about the artist&rsquo;s life. Masson, though, lived a very long time and died in <strong>1987</strong>, so by the life-plus-seventy rule the work is <em>not</em> public domain in France or the rest of the European Union for decades yet. We show it here on the US public-domain footing. The line that was meant to escape every rule still runs into one or two on its way to your screen.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'masson-auto': { method: MsnMethod, making: MsnMaking, break: MsnBreak, looking: MsnLooking, afterlife: MsnAfterlife },
```
