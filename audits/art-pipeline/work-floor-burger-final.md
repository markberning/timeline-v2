# Work-read FINAL — *Floor Burger (Giant Hamburger)* (1962), Claes Oldenburg

Reconciled from `work-floor-burger-draft.md` against all three gates.
FACT gate PASS clean (no edits). READ gate storytelling/looking/voice fixes folded
(seams in the looking section; FlrBreak opener de-metaed; FlrMaking close de-structured;
break middle un-piled; conservation list trimmed). FRAME gate fairness fixes folded
(Patty Mucha credited for the home-Singer machine she bought for her own clothes and
named as a collaborator whose sewing technique helped the form exist; the Happenings /
Ray Gun Theater origin of the sewn technique added without unverified prop dimensions;
soft-sculpture scoped as one of a set, "this way" qualifier held; "most influential
object in postwar sculpture" narrowed; van Bruggen as co-author; "most quoted" softened).
Voice contract held: no meta-narration / reader-commands / honesty-labels / condescending
glosses; no literal em-dash in TS strings; the Oldenburg "...does something OTHER THAN
sit on its ass in a museum" quote kept verbatim. rights:'in-copyright'; AGO 1967;
dimensions ft/in; heroAspect 1.36. Identifiers, section ids, and component names are
identical to the draft.

---

## PART A — the const (splice into `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Floor Burger (Giant Hamburger), Claes Oldenburg, 1962, Art Gallery of
// Ontario, Toronto (acc. 66/29, credit "Purchase, 1967"). Flagship Pop Art
// work-read, Works of Pop Art chain index 8 of 9. Authored through the art
// content pipeline (fact pack → Opus → 5 gates → reconcile/revise). Chapter prose
// in art-section-reader.tsx NARRATIVES['floor-burger'] (Flr… prefix). FACT HANDLING
// (per work-floor-burger-factpack.md):
//  • Title variants both correct: Giant Hamburger (original) / Floor Burger
//    (current AGO standing title). Don't call either "wrong."
//  • A SOFT SCULPTURE. AGO's exact medium line: "Canvas filled with foam rubber
//    and cardboard boxes, painted with acrylic." Surface paint = acrylic on
//    cotton-duck canvas; fill = foam rubber + cardboard cartons. Avoid "latex"/
//    "vinyl."
//  • Dimensions 132.1 × 226.1 cm → ~4 ft 4 in tall × ~7 ft 5 in across (landscape);
//    describe informally as "about 7 feet across." Don't invent a single diameter.
//  • One of a SET (made with Floor Cake and Floor Cone for the 1962 Store). Not
//    "the first soft sculpture" full stop; one of his defining early floor-scale
//    soft food sculptures. Keep the "this way" qualifier on any "no sculptor had
//    used this way before" line (the technique grew from his 1962 Happenings props).
//  • Acquisition year = 1967 (finalized 27 Jan 1967), despite the "66/29"
//    accession prefix. Bought from the Sidney Janis Gallery for a token sum
//    (US $2,000); no hard price asserted as a market figure.
//  • Sewn + stuffed by Patty Mucha (then Patty Oldenburg) on her own home Singer
//    machine (bought to make her own clothes); the sewn-soft technique came from
//    the costumes she made for Oldenburg's Happenings. Oldenburg painted them.
//    The current pickle is a replacement.
//  • KEY STATEMENT = the verbatim Walker wording "...does something OTHER THAN
//    sit on its ass in a museum" (1961, "I am for an art…," Martha Jackson
//    Gallery), NOT "more than." Oldenburg later resisted calling it a manifesto.
//  • rights: 'in-copyright' (1962, Oldenburg d. 2022) — shown small + credited
//    under fair use; NOT pd-us.
// ─────────────────────────────────────────────────────────────
export const FLOOR_BURGER: ArtWorkContent = {
  id: 'floor-burger',
  name: 'Floor Burger',
  shortName: 'Floor Burger',
  year: 1962,
  artist: 'Claes Oldenburg',
  artistId: 'oldenburg',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Canvas filled with foam rubber and cardboard boxes, painted with acrylic',
  dimensions: '4 ft 4 in × 7 ft 5 in',
  location: 'Art Gallery of Ontario, Toronto',
  acquired: 'Purchase, 1967 (acc. 66/29)',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 8, total: 9 },
  hook: 'The cheapest, most disposable object in America, a fast-food hamburger, blown up to about seven feet across and then made soft, so the monument sags and slumps on the floor under its own weight instead of standing on a pedestal.',
  heroImage: ART_IMG.oldenburgBurger,
  heroCredit: 'Oldenburg, Floor Burger, 1962 · Art Gallery of Ontario · in copyright, shown small under fair use.',
  heroAspect: 1.36, // 132.1 × 226.1 cm → ~226 wide / ~166 visual height of the seated form; landscape
  heroFit: 'contain', // the whole sagging object, never cropped
  rights: 'in-copyright', // 1962, Oldenburg d. 2022; shown small + credited under fair use; NOT pd-us
  stats: [
    { v: '1962', k: 'Made' },
    { v: '~7 ft across · ~4 ft 4 in tall', k: 'Dimensions' },
    { v: 'Art Gallery of Ontario', k: 'Now at' },
  ],
  sections: [
    { id: 'store', eyebrow: 'New York · 1961–62', dateLabel: '1961–62', title: 'A shopkeeper-artist, selling soft food', blurb: 'Oldenburg rents a Lower East Side storefront, fills it with handmade painted copies of the goods in the neighborhood shops, and calls it The Store. For its 1962 uptown run at the Green Gallery he makes a set of room-scale soft food: a giant burger, a giant cake, a giant ice-cream cone.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1962', title: 'Sewn on a home Singer, stuffed with foam and cartons', blurb: 'Not carved or cast: sewn from cotton-duck canvas by the artist Patty Mucha on her own home sewing machine, a technique she brought from the costumes she made for Oldenburg\'s performances, painted in acrylic by Oldenburg, and packed so full it needed upholstery foam and empty cardboard cartons fed in through a zipper underneath. A monument made like a cushion.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The object', dateLabel: '~4 ft 4 in × ~7 ft 5 in', title: 'A burger the size of a sofa, slumping', blurb: 'The swollen hand-painted bun, the thick dark patty wedged between, the findable seams of the sewn forms, the whole thing spreading and sagging on the floor under roughly 700 pounds of its own weight, the sliced pickle perched on top as the punchline. You stand over it and look down.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1962', title: 'The monument that sags', blurb: 'A monument is hard, vertical, heroic, built to ennoble its subject and last. Oldenburg takes the least heroic object imaginable, makes it colossal, and then makes it soft, so it droops on the floor and cannot hold a pose. The everyday object becomes the monument, and the humor is the content, not a garnish.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1967–today', title: 'The whopper that caused a scandal in Toronto', blurb: 'Bought by the Art Gallery of Ontario from the Sidney Janis Gallery in 1967 for a token US $2,000, to public uproar (students built a giant plywood ketchup bottle in protest). Conserved in 2012 and still on view, one of the defining objects of Pop Art\'s move into three dimensions.', progress: 0.96 },
  ],
  provenance: [
    { year: '1962', who: 'Claes Oldenburg (the artist)', place: 'New York', note: 'Made in 1962 for the uptown showing of The Store at the Green Gallery (dealer Richard Bellamy), alongside Floor Cake and Floor Cone. Sewn and stuffed by the artist Patty Mucha (then Patty Oldenburg) on her own home Singer machine, the sewn-soft technique carried over from the costumes she made for Oldenburg\'s performances; painted by Oldenburg.', price: null },
    { year: 'c. 1962–1967', who: 'Sidney Janis Gallery', place: 'New York', note: 'Handled by the Sidney Janis Gallery, New York, the dealer the Art Gallery of Ontario bought it from.', price: null },
    { year: '1967–today', who: 'Art Gallery of Ontario', place: 'Toronto', note: 'Purchased from the Sidney Janis Gallery, finalized 27 January 1967, for a token sum (a reported US $2,000, a handshake figure rather than a market valuation). Credit line "Purchase, 1967"; accession 66/29 (the prefix reflects the 1966 fiscal cycle, but the AGO gives 1967 as the acquisition year). Conserved in 2012 by AGO conservator Sherry Phillips. On view; in copyright.', price: 'a token sum, reported at US $2,000', museum: true },
  ],
  figures: [
    { name: 'Claes Oldenburg', role: 'The artist', palette: ['#a8702a', '#3a2a1c', '#15100a'] },
    { name: 'Patty Mucha', role: 'Collaborator: sewed and stuffed the soft forms', palette: ['#7a5a3a', '#33281c', '#0e0a06'] },
    { name: 'The Store', role: 'His soft-sculpture project, 1961–62', palette: ['#bf3a25', '#5a2a1c', '#15100a'] },
    { name: 'Sidney Janis Gallery', role: 'Dealer the AGO bought it from', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Art Gallery of Ontario', role: 'Bought it in 1967, amid uproar', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
  ],
  annotations: [
    { label: 'The giant sagging bun', where: 'The top of the object, the swollen pale dome capping the burger', detail: 'The top bun is a huge hand-painted dome, and it does not sit crisply the way a real bun does. It bulges and settles, the soft canvas pulling into folds where the stuffing has shifted under it. The freshness a real burger advertises is replaced by slump: the bun reads as something that has been sat on, sagging into its own weight.' },
    { label: 'The patty', where: 'The dark disc wedged in the middle, between the two buns', detail: 'A thick dark disc jammed between the buns, and it is the densest, most solid-looking part of the whole thing. Conservators noted the patty and lower bun kept their shape best over the decades, so it reads as the heavy core the rest of the burger droops around, the one part that holds while everything above and below it gives way.' },
    { label: 'The slump and the soft folds', where: 'The whole object where it meets the floor, the creases and spreading lower edge', detail: 'The burger spreads outward at the bottom, settling on the floor under roughly 700 pounds of its own weight. The creases and sags are not modeled or carved by the artist: they are where gravity, not Oldenburg, finished the shaping. This is the anti-monument in plain view, an object that cannot stand up or strike a pose because it is too soft to.' },
    { label: 'The hand-painted canvas surface', where: 'Across the whole skin of the burger, the worked, slightly grimy finish', detail: 'The color is acrylic brushed onto cotton-duck canvas, not a printed wrapper or a molded plastic shell. There is visible brushwork and a slightly grubby, handled, worked-by-hand finish rather than a slick product render. It looks made, not manufactured, which is part of the joke: the most machine-made food in America, rendered by hand in paint on cloth.' },
    { label: 'The scale you stand over', where: 'The footprint of the whole piece, sitting low and wide on the gallery floor', detail: 'It is about seven feet across and only about four feet tall, so it sits directly on the floor and the viewer looks down at it. A monument is usually something you crane up at on a pedestal; here you tower over a hamburger. It dwarfs you sideways while staying beneath you, which keeps the comedy and the colossal scale in the same object at once.' },
    { label: 'The seams, the stitching, and the pickle', where: 'Along the joins of the sewn forms, and the sliced disc perched on top', detail: 'This thing was sewn. The seams of the stitched-and-stuffed forms are findable along the joins (Patty Mucha ran them up on her own home Singer machine), and the foam and cardboard cartons were packed in through zippers in the underside. Perched on top is a sliced pickle, the comic punctuation of the whole piece; the pickle now on the burger is a later replacement.' },
  ],
  lineage: {
    parents: [
      { label: 'Marcel Duchamp’s readymade', mode: 'art' },
      { label: 'The Store (Oldenburg’s soft objects)', mode: 'art' },
      { label: 'American fast food', mode: 'civ' },
    ],
    children: [
      { label: 'Soft sculpture', mode: 'art' },
      { label: 'Oldenburg’s giant public monuments', mode: 'art' },
      { label: 'The everyday object as colossal monument', mode: 'art' },
    ],
  },
}
```

---

## PART B — the five components (splice into `art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// Floor Burger (Claes Oldenburg, 1962) — the five chapters.
// Flr… prefix. Shared helpers (SectionHeader, DropCap, proseStyle) reused;
// no redefs/imports. In-copyright work: prose only, the wired hero carries the
// rights line; no PD inline figures here.
// ─────────────────────────────────────────────────────────────
function FlrStore({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · December 1961" title="An artist who opened a shop" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n December 1961 a young American sculptor named <strong>Claes Oldenburg</strong> (1929&ndash;2022) rented a cramped storefront on East Second Street, on the Lower East Side of Manhattan, and turned it into something between an art installation and an actual shop. He filled it with handmade objects: rough plaster copies of the goods sold in the surrounding neighborhood stores, pieces of cake, slices of pie, shirts, dresses, hunks of meat, all of them lumpy, brightly painted, and openly fake, propped in the window and on the shelves as if they were for sale. He called the whole multi-year project <em>The Store</em>. It was an art gallery disguised as a cheap shop, and the merchandise was the art.
      </p>
      <p style={proseStyle}>
        The idea behind it was a deliberate insult to good taste. The serious art of the moment looked inward and upward, toward private feeling and pure abstraction; Oldenburg pointed the other way, at the cheap, the greasy, the everyday commercial junk of the American street, and insisted that was the real subject. A few months earlier he had written a furious, joyful list of everything he wanted art to be instead of what it was, and one line of it became famous. He was <em>for</em> an art, he wrote, that did real work in the world:
      </p>
      <p style={{ ...proseStyle, paddingLeft: 16, borderLeft: `3px solid ${accent}`, fontStyle: 'italic' }}>
        &ldquo;I am for an art that is political-erotical-mystical, that does something other than sit on its ass in a museum.&rdquo;
      </p>
      <p style={proseStyle}>
        That line comes from a statement called <em>I am for an art&hellip;</em>, written in <strong>1961</strong> for the catalogue of an exhibition, <em>Environments, Situations, Spaces</em>, at the <strong>Martha Jackson Gallery</strong> in New York. (The wording matters, because it is often misquoted as &ldquo;does something <em>more</em> than&rdquo;; the Walker Art Center, which holds Oldenburg&rsquo;s archive, gives the line as &ldquo;<em>other</em> than.&rdquo; And Oldenburg later shrugged off the idea that it was a manifesto at all, calling it a literary effort, much of it written for the sound of the words.) Whatever he wanted to call it, the burger we are looking at is one of the things that statement produced.
      </p>

      <SectionHeader accent={accent} label="The Green Gallery · fall 1962" title="The Store goes uptown, and grows" />
      <p style={proseStyle}>
        In the fall of <strong>1962</strong>, <em>The Store</em> moved uptown for a show at Richard Bellamy&rsquo;s <strong>Green Gallery</strong> in midtown Manhattan, and for that version Oldenburg made something new and much larger. Instead of plaster objects at roughly life size, he built a set of food sculptures blown up to the scale of furniture: a giant hamburger, a giant slice of cake (<em>Floor Cake</em>), and a giant ice-cream cone (<em>Floor Cone</em>), each one big enough to share a room with. And he made them out of a material no sculptor had used this way before. He made them <strong>soft</strong>.
      </p>
      <p style={proseStyle}>
        That is the word to hold onto, because it is the whole invention. A <strong>soft sculpture</strong> is exactly what it sounds like: a three-dimensional artwork made of pliable, yielding material, sewn from cloth and stuffed, rather than carved from stone or cast in bronze or welded from metal. It has no rigid skeleton. It droops. It can be squashed. Oldenburg did not invent the very idea single-handedly, and the burger was one of a set rather than the lone first example, but these 1962 floor pieces are where the soft sculpture became a serious, room-scale thing, and the hamburger is the most famous of them.
      </p>
    </article>
  )
}

function FlrMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1962" title="Made the way a cushion is made" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he most surprising thing about <em>Floor Burger</em> is how it was built. It was not carved, modeled, or cast, the three ways sculpture had been made for thousands of years. It was <strong>sewn</strong>. The forms (the two buns, the patty, the trimmings) were cut and stitched out of <strong>cotton-duck canvas</strong>, the same heavy cloth a painter stretches for a picture, and the sewing was done by the artist <strong>Patty Mucha</strong> (then Patty Oldenburg) on her own portable <strong>Singer sewing machine</strong>, one she had bought to make her own clothes. Oldenburg designed the shapes and painted them; she sewed and stuffed them. Her sewing was not a service to the project but part of how this kind of object came to exist at all: the soft, sewn form was a technique she brought from the giant costumes and props she made for Oldenburg&rsquo;s <em>Happenings</em>, the staged, semi-improvised performance pieces he was making around the same time. The floor food grew straight out of that stage work, and the giant burger was assembled the way a sofa cushion is assembled, in a New York apartment, on a home machine.
      </p>
      <p style={proseStyle}>
        Then it had to be filled, and at this scale that turned into a problem. The forms were so large that ordinary soft stuffing was not enough to give them their bulk, so the inside was packed with two things at once: <strong>upholstery foam rubber</strong>, the springy stuff inside a cushion, and <strong>empty cardboard cartons</strong> (ice-cream cartons, by most accounts) shoved in to take up the volume. The fill went in through a <strong>zipper sewn into the underside</strong> of each piece, so the whole giant burger could be opened up, stuffed, and closed again. The Art Gallery of Ontario, which owns it, records the materials plainly: canvas filled with foam rubber and cardboard boxes, painted with acrylic.
      </p>
      <p style={proseStyle}>
        The surface is the last layer, and it is painted by hand. Oldenburg brushed <strong>acrylic paint</strong> straight onto the cotton-duck canvas, the toasted brown of the bun, the dark sear of the patty, with visible, worked brushwork rather than any printed or molded finish. (The painting is acrylic on canvas; loose descriptions sometimes call it latex or vinyl, but the gallery&rsquo;s own record says acrylic.) So the object is, oddly, half painting and half sculpture: a hand-brushed canvas surface wrapped around a sewn, stuffed, three-dimensional body.
      </p>
      <p style={proseStyle}>
        And then it sat down. Stuffed with foam and cardboard, the finished burger weighs something like <strong>700 pounds</strong>, and because its skin is soft and its filling shifts, it settles. It cannot hold a crisp shape. The minute it was set on the floor, gravity began finishing what the sewing started, pulling the bun into folds and spreading the base outward. That sagging is not a defect or an accident of age; it is the whole point.
      </p>
    </article>
  )
}

function FlrLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The object" title="A hamburger the size of a sofa" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first fact about <em>Floor Burger</em> is its size, and it lands before anything else. It is about <strong>seven feet across</strong> and only about <strong>four feet four inches tall</strong> (the gallery records it at 132 by 226 centimeters), which means it is wider than a person is tall and sits low and heavy on the floor. The everyday object in the title (a fast-food hamburger, the cheapest hot meal in America) has been blown up to the scale of a piece of furniture. It is unmistakably a burger and unmistakably wrong, an ordinary thing swollen far past any size an ordinary thing should be.
      </p>

      <SectionHeader accent={accent} label="The parts" title="A swollen bun, a heavy patty, a pickle on top" />
      <p style={proseStyle}>
        It is built like a real burger, part for part. There is a <strong>top bun</strong>, a big hand-painted pale dome that bulges and settles rather than sitting crisp and fresh. There is the <strong>patty</strong>, a thick dark disc wedged in the middle, the densest and most solid-looking element of the whole thing (conservators found the patty and lower bun held their shape best over the years). And perched on top is a single sliced <strong>pickle</strong>, a small green disc that works as the comic full stop on the whole giant object. The pickle there now is a later replacement, but its job is the same: it is the one little detail that turns a monument into a joke.
      </p>
      <p style={proseStyle}>
        And once you are close, the surface tells you it was <strong>sewn</strong>. The <strong>seams</strong> of the stitched-and-stuffed forms are findable along the joins where one shape meets the next, the bun against the patty, the trimmings against the bun, the soft canvas puckering slightly where the stitching pulls it. Tucked into the underside are the <strong>zippers</strong> the foam and cardboard were packed in through. This is not the smooth shell of a molded object; it is a giant cushion, and it shows its seams.
      </p>

      <SectionHeader accent={accent} label="The slump" title="Where gravity, not the artist, did the shaping" />
      <p style={proseStyle}>
        The thing that makes it unlike any sculpture before it is that it <strong>sags</strong>. Because the skin is soft canvas and the filling is foam and cardboard, the whole burger spreads and slumps on the floor under its roughly 700 pounds. The bun folds. The base creeps outward. And those creases and droops are not carved or modeled by Oldenburg: they are where <strong>gravity finished the shaping</strong>, settling the soft mass into a slouch. A bronze or a marble holds the exact pose the artist gave it forever; this object is still quietly sinking, doing the opposite of what a monument is supposed to do.
      </p>

      <SectionHeader accent={accent} label="The viewpoint" title="You stand over it, and look down" />
      <p style={proseStyle}>
        There is one more thing the scale does, and it is easy to miss. Because the burger is low and wide and sits directly on the floor, the viewer <strong>looks down at it</strong>. A monument is usually something raised on a pedestal that you crane your neck up toward; here the relationship is flipped. A person stands over a hamburger and gazes down at it the way you would look down at a meal on a table, except the meal is the size of a sofa. The object dwarfs you sideways, by sheer width, while staying entirely beneath you, and that mismatch (huge and yet lowly, overwhelming and yet underfoot) is the strange comic feeling the whole piece runs on.
      </p>
    </article>
  )
}

function FlrBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="What a monument was supposed to be" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        giant soft hamburger only mattered because of the thing it mocked. For most of Western history a <strong>monument</strong> was a fixed set of qualities. It was <strong>hard</strong>, bronze or marble or carved stone. It was <strong>vertical and heroic</strong>, a figure standing tall, usually raised on a pedestal so the viewer had to look up. It was built to <strong>last</strong>, to hold its exact pose for centuries, and built to <strong>ennoble</strong>, to honor a great man, a god, a battle, a myth. Sculpture, by long habit, stood up straight and asked to be admired. And the first wave of Pop Art around Oldenburg, the painters Andy Warhol and Roy Lichtenstein, had stayed flat on the wall, taking the consumer image but keeping it as a picture.
      </p>

      <SectionHeader accent={accent} label="The break" title="The monument becomes a hamburger, and sags" />
      <p style={proseStyle}>
        Oldenburg flips three things at once, and they are worth taking one at a time. First, the <strong>subject</strong>: the thing given the scale and seriousness of important sculpture is a fast-food hamburger, the least heroic, most disposable object in the modern world. The everyday consumer commodity becomes the monument. Second, and stranger, the <strong>medium contradicts the genre</strong>: by making the colossal burger <strong>soft</strong>, Oldenburg makes it <strong>anti-monumental</strong>. It cannot stand on a pedestal or strike a heroic pose. It cannot hold its shape unchanged; it droops on the floor and keeps drooping. A monument is meant to defy time and gravity; this one openly surrenders to both. The softness is not a quirk of materials; it is an argument, made in foam and canvas, against everything a monument claims to be.
      </p>
      <p style={proseStyle}>
        Third, the <strong>humor is the content</strong>, not a decoration on top of a serious idea. The absurd scale and the comic slump are not garnish; they are the whole statement. The piece is funny on purpose, and its funniness is the meaning: the seriousness of a museum and the scale of a war memorial, lavished on a sagging hamburger with a pickle on top. Where an Abstract Expressionist canvas was anguished and inward and Warhol&rsquo;s cans were deadpan and cool, Oldenburg&rsquo;s burger is openly, physically comic, and it asks to be taken seriously precisely because it refuses to be solemn.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The door it opened" />
      <p style={proseStyle}>
        Once a sculpture could be soft, funny, and made of low, everyday stuff, a whole new register opened up. Oldenburg himself walked straight through it, into a long line of <strong>soft objects</strong> (a drooping <em>Soft Toilet</em>, slumping typewriters, sagging drainpipes and light switches) that took the same move and pointed it at the hard machinery of modern life. And from the floor pieces grew the giant public <strong>Pop monuments</strong> he later co-created with <strong>Coosje van Bruggen</strong>, colossal clothespins and shuttlecocks and trowels planted in city plazas, the everyday object as a deflatable, deadpan public statue. The slumping hamburger is the hinge: the moment the monument stopped having to stand up straight.
      </p>
    </article>
  )
}

function FlrAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1967" title="A Toronto museum buys a $2,000 burger" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        fter the Green Gallery, the burger passed through the <strong>Sidney Janis Gallery</strong> in New York, and from there, in early <strong>1967</strong>, it crossed the border to Canada. The <strong>Art Gallery of Ontario</strong> in Toronto bought it, the deal finalized on <strong>27 January 1967</strong>, for a token sum reported at <strong>US $2,000</strong>. (The figure is a handshake price more than a market valuation, and the dates carry a small wrinkle: the accession number is 66/29, reflecting the 1966 fiscal cycle, but the gallery gives 1967 as the acquisition year, and the credit line reads simply &ldquo;Purchase, 1967.&rdquo; The <em>provenance</em>, by the way, is the documented chain of who has owned a work, from the artist&rsquo;s hand to now.)
      </p>
      <p style={proseStyle}>
        The purchase caused an uproar. A public gallery had spent its money, and the public&rsquo;s, on a giant soft hamburger, and a fair share of Torontonians were furious. Students mounted a mocking protest, building their own giant artwork in reply, a roughly nine-foot plywood <strong>ketchup bottle</strong>, to point out the absurdity of the thing the museum had bought. The &ldquo;anyone could make this, and why did you pay for it&rdquo; objection arrived with the burger and has trailed it ever since, which is more or less the reception every one of these breakthrough Pop objects got on its first day.
      </p>

      <SectionHeader accent={accent} label="Conservation · 2012" title="How you repair a 700-pound soft sculpture" />
      <p style={proseStyle}>
        A soft sculpture ages in ways a bronze never does. Over decades the foam inside <em>Floor Burger</em> broke down and the great stuffed shape slowly lost its footing, so in <strong>2012</strong> the gallery&rsquo;s conservator <strong>Sherry Phillips</strong> led a careful restoration: the slumped internal foam and cartons were repositioned and given new support inside (cotton bags filled with a stable foam), and the painted surface was cleaned and re-adhered where it had flaked. It is the kind of repair that has more in common with fixing an old sofa than restoring a statue, which is exactly what you would expect of a monument built like a cushion. (One quieter note from the work&rsquo;s long life: even the pickle on top has been replaced over the years.)
      </p>

      <SectionHeader accent={accent} label="After" title="The slumping monument, still on the floor" />
      <p style={proseStyle}>
        The burger that scandalized Toronto in 1967 is now one of the prized works in the Art Gallery of Ontario&rsquo;s collection, on view as a landmark of Pop Art and of the soft sculpture Oldenburg helped invent. The thing he and Patty Mucha made out of canvas and foam in a New York apartment, the cheapest object in the world blown up huge and then made to sag, turned out to be one of the defining objects of Pop Art&rsquo;s move into three dimensions, and of the soft-sculpture idea it helped launch. It is still there, still on the floor, still slowly settling, exactly as a monument is not supposed to do, with a pickle on top.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'floor-burger': { store: FlrStore, making: FlrMaking, looking: FlrLooking, break: FlrBreak, afterlife: FlrAfterlife },
```
