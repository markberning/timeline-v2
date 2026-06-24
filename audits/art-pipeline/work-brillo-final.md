# FINAL — Andy Warhol, *Brillo Boxes* (1964) · work-read `brillo`

Reconciled from `work-brillo-draft.md` against the three gates
(`work-brillo-gate-fact.md`, `work-brillo-gate-read.md`, `work-brillo-gate-frame.md`)
and `work-brillo-factpack.md`. Every [BLOCKER] and [FIX] folded; the load-bearing
[NICE] items (honesty-label cut, Eleanor Ward color) applied. Two parts: PART A is the
`BRILLO` const for `src/lib/art-content.ts`; PART B is the five `Bril*` section
components for `art-section-reader.tsx` plus the trailing NARRATIVES registry comment.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Brillo Boxes (Andy Warhol, 1964). Works of Pop Art chain index 6 of 9.
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['brillo'] (Bril… prefix).
// FACT HANDLING (per work-brillo-factpack.md + the three gates):
//  • NOT a unique object: a series/type. Warhol's studio built hundreds across
//    several campaigns and multiple carton designs (Brillo, Mott's, Heinz,
//    Kellogg's, Del Monte, Campbell's). Anchored to MoMA's 1964 representative box.
//  • NOT cardboard and NOT a readymade: each is a CARPENTER-BUILT PLYWOOD box,
//    house-painted and silkscreened to imitate the printed cardboard carton.
//  • The original Brillo carton graphic was designed by JAMES HARVEY (1929–1965),
//    a commercial/package designer who was also an Abstract Expressionist painter,
//    the authorship irony. Harvey took the appropriation with good humor; the
//    "running away with my box" line was his gallery's tongue-in-cheek press
//    release, not Harvey nursing a grudge. He died of cancer in 1965, at 35.
//  • Carton design year best attested as 1961 (firm Stuart and Gunn formed 1959);
//    "around 1960" acceptable only as a round figure.
//  • KEY STATEMENT = the confirmed first sentence of Arthur C. Danto, "The
//    Artworld," Journal of Philosophy, 15 Oct 1964, p. 581. The "…takes it up
//    into the world of art…" continuation is UNVERIFIED, do NOT extend it.
//  • 1968 Stockholm boxes were ~500 EMPTY CARDBOARD cartons sent flat-packed by
//    the Brillo company and assembled by museum staff, NOT a Warhol-built
//    "campaign/batch" and NOT genuine Warhols. The 1990 Malmö posthumous copies
//    (ruled "copies," 2010) affect only that later batch, not the 1964 originals.
//  • rights: 'in-copyright' (Warhol d. 1987; © AWF / ARS), shown small +
//    credited under fair use; NOT pd-us. No prices in provenance.
// ─────────────────────────────────────────────────────────────
export const BRILLO: ArtWorkContent = {
  id: 'brillo',
  name: 'Brillo Boxes',
  shortName: 'Brillo Boxes',
  year: 1964,
  artist: 'Andy Warhol',
  artistId: 'warhol',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Synthetic polymer paint and silkscreen ink on wood',
  dimensions: 'Each box 17 1/8 × 17 × 14 in (43.3 × 43.2 × 36.5 cm); shown as many boxes stacked',
  location: 'Museum of Modern Art, New York (a representative example; many exist)',
  acquired: 'A representative original of 1964; Brillo Boxes exist in many examples across major museums',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 6, total: 9 },
  hook: 'Plywood boxes carpenter-built and silkscreened to look exactly like Brillo grocery cartons, stacked like a stockroom. If the art is identical to a shipping box, what is left to decide it is art? (The real carton was designed by an Abstract Expressionist, James Harvey.)',
  heroImage: ART_IMG.warholBrillo,
  heroCredit: 'Warhol, Brillo Boxes, 1964 · in copyright, shown small under fair use.',
  heroAspect: 1.0, // a freestanding cube; the box reads roughly square
  heroFit: 'contain', // the whole object, never cropped
  rights: 'in-copyright', // 1964, Warhol d. 1987; © The Andy Warhol Foundation / ARS; NOT pd-us
  stats: [
    { v: 'April 1964', k: 'First shown' },
    { v: '17″ × 17″ × 14″ each', k: 'Per box' },
    { v: 'MoMA (one of many)', k: 'Representative' },
  ],
  sections: [
    { id: 'factory', eyebrow: 'New York · 1963–64', dateLabel: '1963–64', title: 'A studio turned into a box factory', blurb: 'Warhol turns his studio, the Factory, into a small assembly line. Carpenters build plywood boxes to the exact size of supermarket shipping cartons; he and his assistants house-paint them and silkscreen brand graphics onto the sides, not just Brillo but Heinz, Mott’s, Del Monte, Kellogg’s, Campbell’s.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1963–64', title: 'Wood pretending to be cardboard', blurb: 'Not cardboard, not a found object. Each box is solid plywood, hand-built, house-painted white, then silkscreened to imitate a printed carton. The graphic Warhol copied was itself designed by an Abstract Expressionist painter, James Harvey, in 1961, the irony folded into the work.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The object', dateLabel: '17 1/8 × 17 × 14 in each', title: 'The carton, on the floor, by the hundred', blurb: 'The red-white-and-blue logo, the wholesale line “24 GIANT SIZE PKGS,” the silkscreen ink sitting flat on hard wood, the tiny handmade imperfections a real carton would not have, and the box as a freestanding sculpture you walk around, stacked into a warehouse.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1964', title: 'When the art object becomes the grocery box', blurb: 'For centuries you judged a sculpture by looking. Here the art object is made visually indistinguishable from the commercial object it copies, so the question that decides whether it is art moves off the eye and onto theory and context. The philosopher Arthur Danto built a whole philosophy of art on this box.', progress: 0.80 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1964–today', title: 'The boxes, the philosopher, and the fakes', blurb: 'First stacked across both rooms of the Stable Gallery in April 1964. There are many genuine examples, spread across major museums, and one later scandal: a 1990 batch made in Malmö, three years after Warhol’s death, that was ruled “copies.” That affects the later copies, not the 1964 originals.', progress: 0.96 },
  ],
  // Brillo Box is a series, not a unique object. Provenance is given as the work's
  // public life (Stable Gallery 1964 → many genuine examples → the 1990 Malmö copies
  // controversy), kept proportionate. No prices: the figures that survive are
  // secondary and attach to specific examples / the faked batch, not the work.
  provenance: [
    { year: '1964', who: 'Andy Warhol (the artist)', place: 'New York', note: 'Hundreds of boxes built at the Factory in late 1963 and early 1964, across several consumer-carton designs. First shown at the Stable Gallery, New York, opening 21 April 1964, Warhol’s second solo show there, with the boxes stacked in rows several feet high across both rooms like a grocery stockroom (estimates run to about 400 boxes).', price: null },
    { year: '1964–today', who: 'Many museums and collections', place: 'Worldwide', note: 'Not a single object: genuine examples are spread across major museums (the Museum of Modern Art and the Andy Warhol Museum among them) and private collections. For Warhol’s 1968 Stockholm retrospective the museum used roughly 500 empty cardboard Brillo cartons sent flat-packed by the Brillo company and assembled on-site, cardboard, not Warhol-built wood. The wired image is a representative original.', price: null, museum: true },
    { year: '1990–2010', who: 'The Malmö “copies” controversy', place: 'Sweden', note: 'Three years after Warhol’s 1987 death, the museum director Pontus Hultén commissioned about 105 plywood Brillo boxes from a carpenter in Malmö, then certified and sold some as 1968 “originals” made to Warhol’s instructions. In 2010 the Andy Warhol Art Authentication Board classified them as “copies.” This concerns only that posthumous batch and does not touch the genuine 1964 originals.', price: null },
  ],
  figures: [
    { name: 'Andy Warhol', role: 'The artist', palette: ['#7c3aed', '#2a1c3a', '#0e0814'] },
    { name: 'James Harvey', role: 'Designed the real Brillo carton', palette: ['#bf2f25', '#3a4a8a', '#1a1010'] },
    { name: 'Arthur C. Danto', role: 'Philosopher; built “The Artworld” on it', palette: ['#5a6354', '#39322a', '#120f0c'] },
    { name: 'The Stable Gallery', role: 'Where the boxes were first stacked', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'The American supermarket', role: 'The carton’s real home', palette: ['#bf2f25', '#e8e2d4', '#3a4a8a'] },
  ],
  annotations: [
    { label: 'The red-white-and-blue Brillo design', where: 'The face of any box, the logo band across the upper half', detail: 'A white ground (literally white house paint) carries the word BRILLO, the consonants printed navy and the vowels cherry red, with a swooping red wave arcing over the top of the logo. It is a deliberately patriotic, all-American supermarket palette, and Warhol reproduced it deadpan, exactly as it sat on the grocery shelf, with no painterly interpretation laid over it.' },
    { label: 'The wholesale line, “24 GIANT SIZE PKGS”', where: 'Across the top of the side panel, in blue capitals', detail: 'Blue capitals advertise the carton’s contents: “24 GIANT SIZE PKGS.” That is wholesale-shipping language, not gallery language. It is the tell that the thing on the floor is a bulk delivery carton, the kind a stockboy slits open in the back of a store, not a single retail box and certainly not, by its own surface, a sculpture.' },
    { label: 'The silkscreened logo, on solid wood', where: 'The printed surface itself, where the ink meets the box', detail: 'The graphics are not printed cardboard. They are silkscreen ink laid onto a solid wooden box, so the matte, slightly flattened ink sits on a hard painted surface rather than on the sheen and give of real corrugated card. This is the whole material joke: a hand-fabricated wooden object dressed, by printing, as a mass-produced paper one.' },
    { label: 'The handmade imperfections a real carton lacks', where: 'Comparing two boxes closely, the registration and edges of the print', detail: 'Because each box was hand-painted and hand-pulled through a screen, no two are perfectly identical, and the print registration sits subtly off from a machine-printed shipping carton. The near-perfection is the point, and the small slips are where the human hand leaks back in. A real Brillo carton would be more uniform than the artwork pretending to be one.' },
    { label: 'The stacking', where: 'The boxes en masse, ranked in rows on the floor', detail: 'A single box is striking; many boxes stacked in rows are the work. At the Stable Gallery in 1964 the boxes filled both rooms, piled several feet high like a grocery warehouse, so the “art” arrived as inventory. Quantity, repetition, and retail display became the form, and a viewer walking in met what looked like a delivery bay of merchandise.' },
    { label: 'The box as sculpture', where: 'A single box, freestanding on the floor', detail: 'This is not a picture on a wall but a freestanding cube on the floor, a thing you walk around. That alone changes the question. A painted soup can is plainly a picture of a product; a three-dimensional box on the gallery floor occupies the exact same space and shape as the real carton, which is what lets it pass, by eye, for the everyday object itself.' },
  ],
  lineage: {
    parents: [
      { label: 'Marcel Duchamp’s readymade', mode: 'art' },
      { label: 'Commercial package design', mode: 'art' },
      { label: 'The American supermarket', mode: 'civ' },
    ],
    children: [
      { label: 'Conceptual art', mode: 'art' },
      { label: 'Institutional theories of art', mode: 'civ' },
      { label: 'Appropriation art', mode: 'art' },
    ],
  },
}
```

## PART B — the five section components + registry comment

```tsx
// ─────────────────────────────────────────────────────────────
// Brillo Boxes (Warhol, 1964) — the five chapters
// ─────────────────────────────────────────────────────────────
function BrilFactory({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1963–64" title="A studio that became a box factory" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y late 1963 Andy Warhol had a problem most artists would envy: he was famous, and he needed to keep being startling. He had already shown his hand-painted <strong>Campbell&rsquo;s soup cans</strong> in Los Angeles in 1962 and started silkscreening Marilyns and dollar bills. His studio on East 47th Street, soon to be lined floor to ceiling in silver foil, was about to get the name it kept: <strong>the Factory</strong>. And in the winter of 1963 into 1964, Warhol turned the Factory into exactly that, a small factory, this time for boxes.
      </p>
      <p style={proseStyle}>
        Here is what he made there. He hired <strong>carpenters to build plywood boxes</strong> to the exact dimensions of the cardboard shipping cartons that supermarkets received their stock in. Then he and his Factory assistants, chief among them <strong>Gerard Malanga</strong>, his principal silkscreen hand in these years, <strong>house-painted</strong> the bare wood and <strong>silkscreened the brand graphics</strong> onto the sides. (A <em>silkscreen</em>, the process at the center of all Warhol&rsquo;s work in these years, prints an image by pushing ink through a fine mesh stencil onto a surface below; it is how T-shirts and posters are mass-printed, which is exactly why he liked it.) They did this hundreds of times.
      </p>
      <p style={proseStyle}>
        And not only Brillo. The Factory turned out boxes printed as <strong>Mott&rsquo;s Apple Juice, Kellogg&rsquo;s Corn Flakes, Del Monte Peach Halves, Campbell&rsquo;s Tomato Juice,</strong> and <strong>Heinz Tomato Ketchup</strong> as well. The Brillo box, the carton for the soap-and-steel-wool scouring pads that scrubbed American kitchen pots, simply became the one everyone remembered, partly because of how good its red-white-and-blue label looked stacked into a wall, and partly because of an argument it was about to start. &ldquo;Brillo Boxes&rdquo; is really the name for a whole grocery aisle of these things.
      </p>
      <p style={proseStyle}>
        He unveiled them in April 1964 at his second solo show at the <strong>Stable Gallery</strong> in New York, and he did not hang a few on pedestals. He filled both rooms, floor to chest height, with the boxes <strong>stacked in rows like a stockroom</strong>. A visitor walked in off the street and met what looked, for a confused second, like a grocery warehouse, or a delivery bay where the truck had just unloaded. Except every carton was hand-built wood, painted and printed to look like cardboard. First, how the boxes were actually made, because almost everything people assume about that is wrong.
      </p>
    </article>
  )
}

function BrilMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · not cardboard" title="Wood, dressed as cardboard" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he single most common mistake is the key to the whole work. People assume the Brillo boxes are <strong>cardboard cartons Warhol found and signed</strong>, the way <strong>Marcel Duchamp</strong> had taken a factory-made urinal in 1917, set it on a plinth, and called it art (the <em>readymade</em>, an ordinary manufactured object presented unchanged as a work). That is not what these are. Warhol&rsquo;s boxes are <strong>not cardboard, and they are not readymades.</strong>
      </p>
      <p style={proseStyle}>
        Each one is a <strong>box of solid wood</strong>, plywood, built by a carpenter to the size of a real Brillo shipping carton. It was then <strong>painted</strong>, the ground laid in white house paint, and <strong>silkscreened</strong> with the Brillo graphics to imitate the look of the printed cardboard original. So the object is not a piece of grocery packaging promoted into art. It is a piece of sculpture, hand-fabricated in the studio, painstakingly disguised <em>as</em> grocery packaging. The work is the disguise. Duchamp took a real object and said it was art; Warhol built a fake object that looks like a real one, which is a different and stranger move, closer to simulation than to a found thing.
      </p>

      <SectionHeader accent={accent} label="James Harvey" title="The Abstract Expressionist who designed the real box" />
      <p style={proseStyle}>
        Now the irony that sits at the heart of the work. The famous Brillo design, that red-white-and-blue label with the swooping wave, was not invented by Warhol. It was designed, as ordinary commercial work, by a man named <strong>James Harvey</strong> (1929&ndash;1965). And Harvey was not just a packaging man. He was a working <strong>Abstract Expressionist painter</strong>, shown by a New York gallery, who paid the bills with a day job in commercial design, the way many painters did. He drew the Brillo carton in <strong>1961</strong> (he had joined the design firm Stuart and Gunn, formed in 1959; some accounts round the design to &ldquo;around 1960&rdquo;).
      </p>
      <p style={proseStyle}>
        The commercial graphic Warhol &ldquo;appropriated&rdquo; as a deadpan found image had itself been <strong>made by an artist</strong>, a painter working in exactly the heroic, hand-made tradition Pop was reacting against. So when a Pop artist got the gallery show, the credit, and the money for reproducing Harvey&rsquo;s box, the art world noticed the irony. Harvey himself reportedly took it with good humor; the famous protest, &ldquo;Andy is running away with my box,&rdquo; came from a tongue-in-cheek press release his gallery put out, not from Harvey nursing a grudge. (He died of cancer the next year, in 1965, at thirty-five.) But the tangle the release pointed at is exactly what the whole work is secretly about: who made this image, and which version of it counts as art, the painter&rsquo;s design for a soap company, or the soap company&rsquo;s carton remade by a painter?
      </p>

      <SectionHeader accent={accent} label="The assembly line" title="Made by hand to look machine-made" />
      <p style={proseStyle}>
        The contradiction runs right down into the labor. Warhol&rsquo;s whole pose was to be a <strong>machine</strong>, to make art the impersonal way a factory makes cans, so the boxes were produced on something like an assembly line, in quantity, by assistants. And yet each one was <strong>built and printed by hand</strong>. The result is an object caught between two states: it is mass-production as performance, handwork pretending to be machine-work. Look closely at two boxes and you can find the small slips that prove a person did this, no two exactly alike. The boxes are hand-made objects whose entire subject is the look of not being hand-made. That is the engine of everything they go on to do.
      </p>
    </article>
  )
}

function BrilLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The object" title="A carton on the floor" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of one. It is a <strong>cube on the floor</strong>, not a picture on a wall, about <strong>17 inches tall and 17 wide and 14 deep</strong>, the size of a real supermarket carton you could pick up with both arms. (MoMA&rsquo;s box measures 17 1/8 by 17 by 14 inches, which is 43.3 by 43.2 by 36.5 centimeters; examples vary slightly, since each was built by hand.) That alone is worth pausing on. This is a <strong>sculpture you walk around</strong>, occupying the exact space and shape a grocery carton occupies. It is not a painting <em>of</em> a box. It is a box.
      </p>

      <SectionHeader accent={accent} label="The design" title="A patriotic supermarket palette" />
      <p style={proseStyle}>
        The surface is faithfully the real Brillo carton. The ground is <strong>white</strong> (literally white house paint), and across it runs the word <strong>BRILLO</strong> printed so the consonants read navy blue and the vowels cherry red, with a <strong>swooping red wave</strong> arcing over the top of the logo. It is a deliberately patriotic, all-American red-white-and-blue, the colors a soap brand reaches for to look wholesome and national. Along the top of the side panel, blue capitals read <strong>&ldquo;24 GIANT SIZE PKGS,&rdquo;</strong> the carton&rsquo;s contents stated in wholesale-shipping language; along the bottom runs the product promise, <strong>&ldquo;SHINES ALUMINUM FAST,&rdquo;</strong> and a small white <strong>&ldquo;New!&rdquo;</strong> with an exclamation point sits in a corner. Advertising copy, reproduced deadpan as the surface of a sculpture.
      </p>

      <SectionHeader accent={accent} label="The tells" title="Ink on wood, and the human slip" />
      <p style={proseStyle}>
        Two things give the disguise away, and both reward a close look. First, the <strong>print sits on wood</strong>. The graphics are silkscreen ink laid onto a hard painted wooden surface, so the ink reads matte and slightly flattened, sitting <em>on</em> the box rather than printed <em>into</em> corrugated card. There is no give, no fold, none of the soft sheen of real cardboard. Second, the <strong>imperfections</strong>. Because each box was hand-painted and hand-pulled through a screen, the print registration sits subtly off from a machine-printed carton, and no two are quite identical. Set two side by side and the tiny inconsistencies surface. The near-perfection is the point, and those small slips are exactly where the human hand leaks back in.
      </p>

      <SectionHeader accent={accent} label="The stack" title="Art that arrives as inventory" />
      <p style={proseStyle}>
        And then there is the multiplication, which is half the work and the half a single photograph cannot give you. A lone box is a clever object. The boxes by the hundred, <strong>stacked in rows several feet high</strong> the way they filled both rooms of the Stable Gallery, are something else. The &ldquo;art&rdquo; arrives as a <strong>warehouse of merchandise</strong>: quantity, repetition, retail display. There is no single masterwork box, no &ldquo;best&rdquo; one to single out; the rhythm of sameness across a stockroom is the form. A picture hangs alone and asks to be contemplated. These ask to be counted, like cans on a shelf, and that shift, from the unique object to the indistinguishable multiple, is what the box does next.
      </p>
    </article>
  )
}

function BrilBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A sculpture was something you judged by looking" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>U</DropCap>
        ntil this box, a sculpture was something you judged by <strong>looking</strong>. Its form, its surface, the handling of the material, the composition, all told you it was art and told you whether it was good. Even Pop&rsquo;s painted soup cans were still <strong>pictures of</strong> products, hung on a wall as obvious paintings; the art object and the everyday object stayed visibly distinct, however ordinary the subject. You could always tell the work of art from the thing it depicted, because one was a painting and the other was a can.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="When the art is identical to the grocery box" />
      <p style={proseStyle}>
        <em>Brillo Box</em> closes that gap. It makes the art object <strong>visually indistinguishable from the commercial object it copies</strong>. Standing in the gallery, you cannot tell the Warhol from a real stockroom carton by eye, because in size, shape, and surface it <em>is</em> one. And the moment that is true, something strange happens to the whole question. If looking can no longer tell the art from the non-art, then the thing that <strong>decides</strong> whether it is art has to move <strong>off the retina</strong>, away from how it looks, and onto something you cannot see: who made it, why, where it stands, what idea it carries, what theory holds it up. Warhol weaponized <em>sameness</em> where every artist before had relied on <em>difference</em>.
      </p>
      <p style={proseStyle}>
        This is a founding move of <strong>Conceptual art</strong> (art constituted by an idea rather than by a special appearance) and of the contextual and institutional theories that followed, the notion that what makes something art is an idea and an &ldquo;artworld&rdquo;, not a particular look. After this box, the old taunt &ldquo;but is it art?&rdquo; is permanently a question about <strong>framework</strong> rather than <strong>craft</strong>. You can no longer settle it by stepping closer and admiring the workmanship, because the workmanship is hidden inside a thing built to look like it has none.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="A certain theory of art" />
      <p style={proseStyle}>
        The person this happened to, in the most consequential way, was a philosopher. <strong>Arthur C. Danto</strong> (1924&ndash;2013) walked into a show of these boxes and could not get past exactly the problem above: a thing that <em>is</em> art looked identical to a thing that is <em>not</em>. He worked the question into an essay, <strong>&ldquo;The Artworld,&rdquo;</strong> published in <em>The Journal of Philosophy</em> on <strong>15 October 1964</strong>, the same year as the show. The sentence that became foundational reads:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>What in the end makes the difference between a Brillo box and a work of art consisting of a Brillo box is a certain theory of art.</p>
      </blockquote>
      <p style={proseStyle}>
        (That first sentence is the verified quotation, from page 581 of the 1964 essay. It is often extended in later books with a line about theory taking the box &ldquo;up into the world of art,&rdquo; but that continuation is not reliably confirmed against the original text, so we leave it where Danto&rsquo;s confirmed sentence ends.) The claim is the whole break stated as philosophy: the difference between the carton and the artwork is <strong>not visible</strong>. It is not in the object at all. It is in a <strong>theory and a context</strong>, what Danto called &ldquo;the artworld,&rdquo; the surrounding web of ideas and history and institutions that lets a thing count as art. The encounter turned Danto into a philosopher of art for the rest of his life, and he built from it his later, larger argument about the &ldquo;end of art,&rdquo; the idea that once art could look like anything at all, its long search for its own definition had reached a philosophical finish line. A grocery box did that.
      </p>
    </article>
  )
}

function BrilAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Stable Gallery · April 1964" title="The boxes go on the floor" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he boxes first met the public at the <strong>Stable Gallery</strong> in New York, at Warhol&rsquo;s second solo show there, opening <strong>21 April 1964</strong>. He did not arrange a tasteful handful. He packed both rooms with the cartons <strong>stacked in rows several feet high</strong>, by some estimates around four hundred of them, so the gallery read as a grocery stockroom. Some visitors loved it; some left baffled; the gallery struggled to sell objects that looked exactly like free cardboard. The dealer <strong>Eleanor Ward</strong> later remembered the problem exactly: &ldquo;We all had visions of people walking down Madison Avenue with these boxes under their arms, but we never saw them.&rdquo; The show is the moment the work entered the world, and it is the show the philosopher Arthur Danto encountered.
      </p>

      <SectionHeader accent={accent} label="Not one object" title="A series, spread across the world" />
      <p style={proseStyle}>
        It helps to be clear about what kind of thing we are tracking, because <em>Brillo Box</em> has no single <strong>provenance</strong> (the documented chain of who has owned a work, from the artist&rsquo;s hand to now) the way a unique painting does. The Factory made <strong>hundreds</strong> of these boxes, across several campaigns and several carton designs, so genuine examples are <strong>spread across major museums and private collections</strong> rather than gathered in one place, the Museum of Modern Art and the Andy Warhol Museum among them. For Warhol&rsquo;s 1968 Moderna Museet retrospective in Stockholm, the museum could not afford to ship the heavy New York originals, so it had the Brillo company send roughly five hundred empty cardboard cartons, flat-packed, assembled on the spot: printed cardboard, not Warhol-built wood, and not counted as genuine Warhols. So when this read points at &ldquo;the&rdquo; Brillo box, it means a representative original of 1964, not a lone object you could go and stand in front of as the one true work.
      </p>

      <SectionHeader accent={accent} label="The Malmö copies" title="A scandal that touches the fakes, not the originals" />
      <p style={proseStyle}>
        There is one provenance scandal worth naming, and worth keeping in proportion. In <strong>1990</strong>, three years after Warhol&rsquo;s death in 1987, the museum director <strong>Pontus Hultén</strong> commissioned about <strong>105 plywood Brillo boxes</strong> from a carpenter in <strong>Malmö, Sweden</strong>, then certified and sold some as 1968 &ldquo;originals&rdquo; made to Warhol&rsquo;s instructions. The Swedish press exposed the affair, and in <strong>2010 the Andy Warhol Art Authentication Board ruled the Malmö batch &ldquo;copies.&rdquo;</strong> This matters as a caution, not a headline: it concerns a <strong>posthumous batch made by other hands</strong> long after Warhol was dead, and it does <em>not</em> impugn the genuine boxes Warhol&rsquo;s own studio built in 1964. The originals are exactly what they have always been.
      </p>

      <SectionHeader accent={accent} label="What it opened" title="The box that moved the question" />
      <p style={proseStyle}>
        What the boxes left behind is bigger than any one of them. They are the literal object on which a philosopher built a theory that art is constituted by an idea and a context rather than by a special look. Through that door came much of <strong>Conceptual art</strong>, the institutional and contextual theories of art, and a whole later practice of <strong>appropriation</strong> that takes an existing product or image and re-presents it as art. The deepest joke is one the work could not have planned: a sculpture built to be indistinguishable from a disposable grocery carton is now a treasured museum piece worth a great deal of money, the most precious thing in the room and the one that looks the most like trash. The carton was never the point. The question it forces, about what makes a thing art when looking can no longer tell you, has never since gone away.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  brillo: { factory: BrilFactory, making: BrilMaking, looking: BrilLooking, break: BrilBreak, afterlife: BrilAfterlife },
```
