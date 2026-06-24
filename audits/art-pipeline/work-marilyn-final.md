# Reconciled FINAL — Andy Warhol, *Marilyn Diptych* (1962) · id=`marilyn`

Reconciled from `work-marilyn-draft.md` against the four gates (fact / read / frame / factpack). Every [BLOCKER] and [FIX] folded:
- **FACT [FIX]** — `MarMaking` "*Niagara* … in which Monroe had her first starring role" corrected (false; *Don't Bother to Knock*, 1952, was her first lead). Replaced with the true *Niagara* framing.
- **READ [FIX 1/2/3]** — three meta-narration / forward-tour lines cut (MarDeath p1; MarMaking last line; MarLooking last line).
- **READ [FIX 4]** — PART A confirmed em-dash-clean: every reader-facing string field (`hook`, `stats`, `sections[].blurb`, `annotations[].detail`, `provenance[].note`, `figures[].role`) uses commas/colons/parens, no literal "—", no `&ndash;`/`&rsquo;` entities (PART A = Unicode glyphs; PART B = HTML entities, kept separate).
- **FRAME [FIX-1]** — wider Death-and-Disaster (1962–63) context added as one paragraph in `MarBreak`.
- **FRAME [FIX-2]** — the objectification/exploitation question named as an unsettled critical debate (one neutral sentence in `MarDeath`), held with proportion, no moralizing, no side taken.
- **[NICE]** — one of the two stacked Monroe superlatives softened in the opening (kept "the most famous face in the world"; dropped "most photographed woman in the world").
- Voice contract held: no meta-narration / reader-commands / honesty-labels / condescending glosses; verbatim quotes preserved exactly; "I want to be a machine" keeps the Sichel-2018 edited-interview caveat. 50 images from one 1953 *Niagara* still; silkscreen not painting; overall dims (not single-panel) in ft/in; `rights:'in-copyright'`; `heroAspect 1.42`, `heroFit:'contain'`. Identifiers / section-ids / component names unchanged from draft.

## PART A — the work const (splice into `src/lib/art-content.ts`, register in `ART_WORK_CONTENT` as `marilyn: MARILYN`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Marilyn Diptych (Andy Warhol, 1962), Tate, London (T03093,
// "Purchased 1980"). Flagship Pop Art work-read, Works of Pop Art chain
// index 5 of 9. Authored through the art content pipeline (fact pack →
// Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['marilyn'] (Mar… prefix). FACT HANDLING (per
// work-marilyn-factpack.md):
//  • Made within weeks of Monroe's death (5 Aug 1962); one of the late-1962
//    Marilyn silkscreens.
//  • 50 images, 25 + 25, ALL from ONE 1953 publicity still for the film
//    Niagara, photographed by Gene Kornman. Niagara (1953) gave her top
//    billing and pushed her into full stardom; it was NOT her first lead
//    (Don't Bother to Knock, 1952, was). Don't name another source film.
//  • Left panel = color; right panel = black-and-white, printing degrading
//    and fading toward blank canvas at the far edge.
//  • It is a SILKSCREEN on canvas (photo-screened image + acrylic color
//    ground), NOT a hand-painting.
//  • Dimensions = OVERALL 205.4 × 289.6 cm = 6 ft 8 7/8 in × 9 ft 6 in,
//    landscape. Each panel ~205.4 × 144.8 cm; never give a single panel's
//    width as the whole work.
//  • The life/death (celebrity/oblivion) reading is INTERPRETATION, widely
//    held but never fixed by Warhol (Bourdon: he never assigned a definitive
//    meaning) — attributed as a reading, not a stated program.
//  • The objectification/exploitation question is held as an unsettled
//    critical debate, named (not moralized), no side taken.
//  • rights: 'in-copyright' (Warhol d. 1987; © AWF / ARS) — shown small +
//    credited under fair use; NOT pd-us.
//  • KEY STATEMENT = the sourced "the more you look at the same exact thing…"
//    line. The "I want to be a machine" line is used for the artist-as-factory
//    break WITH the Sichel-2018 edited-interview caveat.
// ─────────────────────────────────────────────────────────────
export const MARILYN: ArtWorkContent = {
  id: 'marilyn',
  name: 'Marilyn Diptych',
  shortName: 'Marilyn Diptych',
  year: 1962,
  artist: 'Andy Warhol',
  artistId: 'warhol',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Acrylic and silkscreen ink on canvas (two panels)',
  dimensions: '6 ft 8 7/8 in × 9 ft 6 in',
  location: 'Tate, London',
  acquired: 'Purchased 1980 (acc. T03093)',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 5, total: 9 },
  hook: 'Fifty Marilyns printed from a single publicity still, made within weeks of her death: bright color on the left, the black-and-white right panel fading out toward blank canvas. Not painted by hand but silkscreened, the movie star reproduced like a soup can.',
  heroImage: ART_IMG.warholMarilyn,
  heroCredit: 'Warhol, Marilyn Diptych, 1962 · Tate, London · in copyright, shown small under fair use.',
  heroAspect: 1.42, // 205.4 × 289.6 cm → W/H ≈ 1.41, landscape (two joined panels)
  heroFit: 'contain', // the whole two-panel work, never cropped
  rights: 'in-copyright', // 1962, Warhol d. 1987; © The Andy Warhol Foundation / ARS; NOT pd-us
  stats: [
    { v: '50 faces', k: 'One photo, 25 per panel' },
    { v: '6′8⅞″ × 9′6″', k: 'Dimensions' },
    { v: 'Tate', k: 'Now at' },
  ],
  sections: [
    { id: 'death', eyebrow: 'New York · August 1962', dateLabel: '1962', title: 'A star dies, and a printmaker reaches for her photograph', blurb: 'Marilyn Monroe died on 5 August 1962. Within weeks, Warhol, already silkscreening soup cans and dollar bills, was turning a single old publicity still of her face into picture after picture. The diptych comes out of that burst.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1962', title: 'One photo, a screen, fifty pulls', blurb: 'Every one of the fifty faces comes from the same 1953 publicity still for the film Niagara, cropped tight to her features. Warhol burned it into a silk screen and squeegeed ink through it across two canvases, the same image reproduced by machine, never quite identical twice.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 8 7/8 in × 9 ft 6 in', title: 'Color on the left, the right side fading to nothing', blurb: 'The left panel blazes in flat hot color; the right is black-and-white, the printing clogging and starving and thinning out until the last faces dissolve into blank canvas. Off-register color, smears, the same grid of one cropped face fifty times.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Pop Art', title: 'The star as a mass-produced thing', blurb: 'For five centuries a painting was a thing made by hand. Warhol prints a found photograph by machine, treats a movie star exactly like a consumer product, and presents himself as a factory rather than an author. The key statement: "the more you look at the same exact thing… the better and emptier you feel."', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1962–today', title: 'From the Tremaines’ wall to the Tate', blurb: 'Bought straight off Warhol by the collectors Emily and Burton Tremaine, who reportedly suggested pairing the two canvases as one diptych. Sold to the Tate in 1980, where it hangs as one of the defining images of the century. The life-and-death reading it carries was never Warhol’s stated meaning.', progress: 0.96 },
  ],
  // Provenance endpoints firm (made 1962 → Tate 1980, "Purchased 1980," acc.
  // T03093). The Tremaine ownership and the "Emily Tremaine suggested the
  // diptych pairing" detail are widely reported but anecdotal → kept attributed
  // as reported, not as documented fact. The reported $270,000 1980 price is
  // secondary → kept out of the priced field, noted only as a museum purchase.
  provenance: [
    { year: '1962', who: 'Andy Warhol (the artist)', place: 'New York', note: 'The two canvases were silkscreened in 1962, within weeks of Monroe’s death. They were acquired directly from Warhol, before he had gallery representation, by the collectors below.', price: null },
    { year: '1962–1980', who: 'Emily Hall Tremaine & Burton Tremaine', place: 'Connecticut / New York', note: 'Bought straight from Warhol. By the standard (anecdotal) account, Emily Tremaine suggested the two separate canvases be shown together as a single diptych; Warhol agreed, and from then on they were treated as one work.', price: null },
    { year: '1980–today', who: 'Tate', place: 'London', note: 'The Tremaines sold the work to the Tate Gallery in 1980 (reportedly for about $270,000; the figure is secondary). Tate record: "Purchased 1980," accession T03093. © The Andy Warhol Foundation for the Visual Arts / Artists Rights Society (ARS), New York. On view at Tate Modern.', price: 'Purchased 1980 (museum purchase)', museum: true },
  ],
  figures: [
    { name: 'Andy Warhol', role: 'The artist', palette: ['#7c3aed', '#2a1c3a', '#0e0814'] },
    { name: 'Marilyn Monroe', role: 'The face; died 5 Aug 1962', palette: ['#d6b83a', '#a8485a', '#1a0e10'] },
    { name: 'Gene Kornman', role: 'Photographed the 1953 Niagara still', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Emily & Burton Tremaine', role: 'First owners; paired the panels', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'David Bourdon', role: 'Critic; noted Warhol fixed no meaning', palette: ['#5a6354', '#39322a', '#120f0c'] },
  ],
  annotations: [
    { label: 'Fifty faces, one face', where: 'The whole work, scanned as a single grid of repetition', detail: 'Step back and the two panels read as one field of repetition: fifty Marilyns, twenty-five on each side, every one printed from the same 1953 publicity still. There is no variety to hunt for. Sameness is the subject. The picture is built to be read as a quantity, a stack of the same image, the way you’d read rows of one product on a shelf rather than a gallery of different portraits.' },
    { label: 'The bright color left versus the fading black-and-white right', where: 'The left panel against the right panel, read across the central seam', detail: 'The left panel is printed in flat, saturated color: yellow hair, a pink face, red lips, a band of turquoise over the eyes. Cross to the right panel and the color is gone. It is black-and-white, and as the eye travels right the printing thins, the faces growing fainter until the last ones dissolve toward blank canvas at the far edge. The literal fact is color on one side and a fading grey on the other; the reading of it as life against death, glamour against oblivion, is a widely held interpretation, and a fair one, but Warhol never fixed that meaning.' },
    { label: 'The off-register printing and smears', where: 'Throughout both panels, clearest where the color slips off the face', detail: 'The reproduction is plainly imperfect. Blocks of color slide out of alignment with the features so the lips and eyes don’t sit on their own outlines; some impressions are clogged and over-inked, others starved and broken. This is the machine’s failure left in plain sight, not corrected. In a hand-painted portrait these would be mistakes; here the drift and the smear are the surface, the evidence that the image was pulled through a screen, not drawn.' },
    { label: 'The cropped publicity-still face', where: 'Any single cell of the grid; the framing repeated fifty times', detail: 'The source photo is cropped tight: just hair, heavy-lidded eyes with shadow, and parted lips. It is a headshot, a glamour mask, not a portrait of a person, the face reduced to its few sellable features. Warhol took the public image, the one manufactured to sell a movie, and used exactly that, never reaching past it to anything private.' },
    { label: 'The grid', where: 'The even rows and columns the faces line up in, across both panels', detail: 'The faces sit in regular rows and columns, evenly spaced, like the frames on a strip of film, the cells of a contact sheet, or cans on a supermarket shelf. This is the layout of mass production rather than of a painting, and it does its own quiet work: arranged this way, a movie star becomes a manufactured good, identical units rolling off a line.' },
    { label: 'The two joined panels', where: 'The work as two equal canvases set side by side, the seam down the middle', detail: 'The work is two separate canvases set edge to edge, the historic format of a diptych, the two-panel hinged altarpiece of Christian devotion. That sacred two-panel shape casts the repeated face as something to be venerated. The seam down the center is also the divide the life-and-death reading hangs on, glamour on one side and the fade on the other, though the original two canvases were only paired into one work after the fact.' },
  ],
  lineage: {
    parents: [
      { label: 'Mass-media photography', mode: 'art' },
      { label: 'Duchamp’s readymade', mode: 'art' },
      { label: 'The 1950s consumer boom', mode: 'civ' },
    ],
    children: [
      { label: 'Pop Art’s commodity image', mode: 'art' },
      { label: 'The artist as brand', mode: 'civ' },
      { label: 'Appropriation art', mode: 'art' },
    ],
  },
}
```

## PART B — the five section components + registry (splice into `src/app/art/[eraId]/[movementId]/[workId]/[sectionId]/art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// Marilyn Diptych (Andy Warhol, 1962) — the five chapters.
// Mar… prefix. Shared helpers (SectionHeader, DropCap, proseStyle) reused;
// no redefs/imports. In-copyright work: prose only, the wired hero carries
// the rights line; no PD inline figures here.
// ─────────────────────────────────────────────────────────────
function MarDeath({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · August 1962" title="A star dies, and a printmaker reaches for her photograph" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        n <strong>5 August 1962</strong>, <strong>Marilyn Monroe</strong> (1926&ndash;1962) was found dead in her Los Angeles home. She was thirty-six, and at that moment the most famous face in the world. Within weeks, a thirty-three-year-old New York artist named <strong>Andy Warhol</strong> (1928&ndash;1987) was making picture after picture of that face. The <em>Marilyn Diptych</em> comes straight out of those weeks. It is not a memorial in the ordinary sense; it is something stranger. Warhol had already spent that year doing the thing that explains it.
      </p>
      <p style={proseStyle}>
        Warhol had spent the late 1950s as a wildly successful <strong>commercial illustrator</strong>, drawing shoes and ad work for magazines, and he carried the habits of advertising straight into his fine art. By 1962 he had hit on his method and his subjects at once. That spring he showed thirty-two paintings of <strong>Campbell&rsquo;s Soup cans</strong>, one for each flavor, in a Los Angeles gallery, lining them up like cans on a grocery shelf. He was painting <strong>dollar bills</strong>, <strong>Coca-Cola bottles</strong>, the plain mass-produced stuff of American consumer life, and treating each one with the flat, deadpan attention you&rsquo;d give a product, not a still life. The question hanging over all of it was simple and rude: what happens when you make a painting out of the most common, machine-made, advertised things in the country?
      </p>
      <p style={proseStyle}>
        And then Monroe died, and Warhol saw that a famous person was one more of those things. A movie star, in 1962, was not so different from a soup can: a brand, a package, an image manufactured and reproduced by the millions to be consumed. So he treated her exactly as he had been treating the cans. He did not invent a new image of her, did not sketch her from memory, did not reach for anything private. He went and found an existing photograph, the public, pre-packaged one, and set about reproducing it. The grief, if it is grief, is buried under a process that looks like an assembly line. That is the picture: a star turned into a product the week she stopped being a person. Whether that is a cold indictment of how a culture consumed Monroe, or Warhol coolly doing the same thing himself the week she died, is a question critics have never settled; the diptych refuses to say which, and that refusal is part of why it still unsettles.
      </p>
    </article>
  )
}

function MarMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="One photograph" title="A 1953 publicity still, cropped to a mask" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>E</DropCap>
        very one of the fifty faces in this work comes from a <strong>single photograph</strong>. Not fifty photos, not a sitting, not a range of moods, one image, used over and over. It is a <strong>publicity still</strong> (a posed promotional photo a film studio puts out to advertise a movie) made in <strong>1953</strong> for the film noir <em>Niagara</em>, the thriller that gave Monroe top billing and pushed her into full stardom. The photographer was <strong>Gene Kornman</strong>, a Hollywood studio cameraman. Warhol cropped the still tight, throwing away the rest of it and keeping only the head: the hair, the heavy-lidded eyes with their shadow, the parted lips. What he kept was not really a face so much as a <strong>mask</strong>, the glamour image at its most reducible, the few features that say &ldquo;Marilyn&rdquo; and nothing else.
      </p>

      <SectionHeader accent={accent} label="The technique" title="What a silkscreen is, and how he pulled fifty" />
      <p style={proseStyle}>
        The method is the whole point. The image is not painted. It is <strong>silkscreened</strong>, and that word needs unpacking. A <strong>silkscreen</strong> (or screenprint) is a stencil printing process: you take a fine mesh screen, block out the parts that should stay blank, and push ink through the open mesh onto whatever lies beneath, so the ink prints in the shape of the open areas. Warhol used a <strong>photographic</strong> version of this. As he described it himself: <em>&ldquo;you pick a photograph, blow it up, transfer it in glue onto silk, and then roll ink across it so the ink goes through the silk but not through the glue.&rdquo;</em> The photograph becomes the stencil. Then you press the screen onto the canvas, squeegee ink through it, lift it, move it over, and pull again. Same image, again and again, by hand but by machine logic, as fast as you can reposition the screen.
      </p>
      <p style={proseStyle}>
        So here is how the diptych was built. Warhol took two large canvases. On the <strong>left</strong> one he first laid down blocks of bright <strong>acrylic</strong> color by hand, the patches of yellow for hair, pink for skin, red for the mouth, then printed the black photographic image on top in a grid, <strong>twenty-five times</strong>, five rows of five. On the <strong>right</strong> canvas he printed the same image, the same twenty-five times, but in <strong>black ink alone</strong>, no color underneath. That is the entire work: one photograph, one screen, fifty pulls across two panels. The hand that made it is barely a painter&rsquo;s hand at all. It is a printer&rsquo;s.
      </p>
      <p style={proseStyle}>
        And because it is printing, it goes wrong, on purpose. Roll a screen by hand fifty times and the ink loads up and runs out; the screen lands a hair off-center; an impression clogs solid or starves to a ghost. Warhol did not fix any of this. He let the registration drift and the ink thin and the faces clog or fade, so that the &ldquo;same&rdquo; image is in fact slightly different every single time, never once a clean copy. Two paintings worth of the same dead movie star, reproduced by a process that quietly fails. That failure is not a flaw in the work. It is most of what the work is about.
      </p>
    </article>
  )
}

function MarLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Big, and split down the middle" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first surprise is the <strong>size</strong>. People who know the image from postcards expect something small; in the room it is large, about <strong>six and three-quarter feet tall and nine and a half feet wide</strong> (the two panels joined run over nine feet across), a wall of a picture. The second thing that registers is that it is <strong>two canvases</strong>, set edge to edge, with a clear seam down the middle, and that the two halves are doing opposite things. The whole work hinges on that split, and the two sides are best read one at a time.
      </p>

      <SectionHeader accent={accent} label="The left panel" title="Color, flat and loud" />
      <p style={proseStyle}>
        The <strong>left</strong> panel is in <strong>color</strong>, and the color is hot and flat and slightly off. The hair is a single block of <strong>yellow</strong>, the face a flush of <strong>pink</strong>, the mouth a slash of <strong>red</strong>, the eyelids a band of <strong>turquoise</strong>, each laid down as a patch rather than a modeled, shadowed tone. And the color does not quite line up with the black face printed over it. The yellow of the hair runs past where the hair is; the red lipstick sits a fraction off the lips; the turquoise floats near, but not exactly on, the eyes. This is the <strong>off-register</strong> printing from the last chapter, left visible: color and image slightly misaligned, the way a cheaply printed comic or a smeared magazine ad goes a touch out of true. It reads as garish, mechanical, advertised, the look of mass print, not the look of a portrait.
      </p>

      <SectionHeader accent={accent} label="The right panel" title="Black-and-white, fading to nothing" />
      <p style={proseStyle}>
        Across the seam, on the <strong>right</strong> panel, the color is simply gone. It is <strong>black-and-white</strong>, the same face printed in black ink on bare canvas, and as the eye travels across it the printing <strong>degrades</strong>. Some faces are over-inked, clogged into dark blots where the features disappear. Others are starved, the ink thinning out, the face breaking up, growing fainter and fainter until, toward the <strong>far right edge</strong>, the last impressions all but <strong>dissolve into blank canvas</strong>. A recognizable face thins into a grey smudge and then into almost nothing. The machine is running out.
      </p>
      <p style={proseStyle}>
        It is hard not to read this. The bright, alive, public Marilyn on the left; the same face draining away to nothing on the right. Color as life, fade as death; glamour on one side, oblivion on the other. This is the most widely held reading of the diptych, and it is a fair one. But it is a <strong>reading</strong>, not a stated program. Warhol did not title the panels &ldquo;life&rdquo; and &ldquo;death,&rdquo; and the critic <strong>David Bourdon</strong>, who knew him, noted that Warhol <strong>never assigned a definitive meaning</strong> to the relationship between the two halves. The fade is plainly there on the canvas; what it means is left for you, and Warhol kept his own answer to himself.
      </p>

      <SectionHeader accent={accent} label="The grid" title="Fifty of one face" />
      <p style={proseStyle}>
        The layout, across both panels, is <strong>fifty faces</strong> in even rows and columns, twenty-five a side, every one the same cropped Kornman still. The arrangement is not a gallery of portraits but a <strong>grid</strong>, the regular cells of a contact sheet, a strip of film frames, rows of product on a shelf. And once it reads as a grid, the argument it&rsquo;s making comes through without a word: a star is a <strong>quantity</strong>, an image stamped out by the million, identical units. The thing that makes Marilyn Marilyn, the unrepeatable person, is exactly what the repetition strips away. One face is a glamour shot; fifty is a product run, and the longer you look the emptier each one gets. That emptiness is the point, and Warhol said it out loud.
      </p>
    </article>
  )
}

function MarBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A painting was a thing made by hand" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or roughly five centuries, a painting was a unique object made by an artist&rsquo;s <strong>hand</strong>. Its value lived in the touch, the brushstroke, the trace of one maker doing something no one else could do quite the same way. The movement that ruled New York painting just before Pop, <strong>Abstract Expressionism</strong> (the gestural, large-scale abstraction of Pollock and de Kooning in the 1940s and &rsquo;50s), pushed this idea to its limit: the autographic mark, the spontaneous gesture, was treated as the direct print of the artist&rsquo;s own selfhood on the canvas. The most modern art going, in 1960, still rested on the romantic faith that the hand-made mark carried the soul.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="A photograph, repeated by machine" />
      <p style={proseStyle}>
        The <em>Marilyn Diptych</em> pulls that floor out, in three moves. First, the image is <strong>not made by hand</strong>: it is a <strong>found photograph, mechanically reproduced</strong> across the canvas. The &ldquo;brushwork&rdquo; is squeegee drag and printing error. Second, the subject is not a patron, a saint, or the artist&rsquo;s inner life but a <strong>manufactured media star</strong>, handled exactly like a consumer product, the soup can and the movie star treated as the same kind of thing. High art and mass-culture imagery collapse into one. Third, and most radical, the <strong>artist stops being a hand</strong>. Warhol named his studio <strong>The Factory</strong>, worked with assistants and screens and serial output, and presented himself not as a singular genius but as a <strong>reproducer, a machine</strong>. The romantic artist-self that Abstract Expressionism worshipped is deliberately voided. He even said the quiet part out loud: <em>&ldquo;The reason I&rsquo;m painting this way is that I want to be a machine.&rdquo;</em> (That line comes from a 1963 interview with Gene Swenson in <em>Art News</em>; it is the canonical published quote, though the art historian Jennifer Sichel, working from Swenson&rsquo;s original tape in 2018, showed the printed text was edited, with queer content cut, and what Warhol actually said in context was looser, so take it as the famous edited version, not a clean transcript.)
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“The better and emptier you feel”" />
      <p style={proseStyle}>
        The diptych&rsquo;s real subject, though, is the <strong>repetition itself</strong>, fifty of the same face, and on that Warhol left a sentence that fits the work exactly. He said:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>the more you look at the same exact thing, the more the meaning goes away, and the better and emptier you feel.</p>
      </blockquote>
      <p style={proseStyle}>
        That is the diptych in one line. (The quote is a sourced Warhol statement, collected in <em>Andy Warhol: A Retrospective</em>, 1989; you will occasionally see it printed with a leading &ldquo;Because,&rdquo; but the wording above is the standard form.) Repetition does not deepen the image, it <strong>drains</strong> it. Stare at fifty Marilyns and the face stops meaning a person and starts meaning nothing in particular, the way a word repeated aloud fifty times turns to noise. Overexposure empties the picture out. The dazzling celebrity image and the blank fade on the right are the same fact stated twice: look long enough at the most looked-at face in the world, and there is nothing left inside it. The locus of meaning has moved, from the unique hand-made mark to the mechanically reproduced media image, and from the artist&rsquo;s interior to the empty surface of mass culture.
      </p>
      <p style={proseStyle}>
        That draining-by-repetition was not a one-off. Across 1962 and 1963 Warhol turned the same screen-and-repeat process onto images of actual death, car crashes, the electric chair, suicides, news photographs of catastrophe, his so-called <strong>Death and Disaster</strong> works. The dead movie star sits right at the hinge between the soup cans and the disasters: the celebrity image and the catastrophe image, both reproduced until the feeling wears off. Seen that way, the fade on the right of the diptych is less a poetic accident than the opening of a subject Warhol would work for the next two years.
      </p>
    </article>
  )
}

function MarAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="Two canvases, paired into one work" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the work&rsquo;s life as an object, the <strong>provenance</strong> (the documented chain of who has owned a work of art, in order, from the artist&rsquo;s hand to where it sits now). It starts with a detail that is part of the meaning. The two canvases were bought <strong>directly from Warhol</strong> in 1962, before he had gallery representation, by the American collectors <strong>Emily Hall Tremaine and Burton Tremaine</strong>, who were among the first serious buyers of his work. By the standard account, the two panels were not conceived from the start as a single picture: it was <strong>Emily Tremaine</strong> who suggested the two separate canvases, the colored one and the black-and-white one, be shown together as a <strong>diptych</strong>, and Warhol agreed. (That detail is widely repeated but anecdotal, so hold it as reported rather than documented.) From then on the two were treated as one work, and the life-and-death reading the picture now carries hangs on a pairing that may have been an afterthought.
      </p>

      <SectionHeader accent={accent} label="The word in the title" title="What a diptych is, and what it borrows" />
      <p style={proseStyle}>
        That pairing also handed the work its name and a whole layer of meaning. A <strong>diptych</strong> (pronounced &ldquo;DIP-tik&rdquo;) is, historically, a <strong>two-panel hinged altarpiece</strong>, a Christian devotional object, two painted wooden panels that fold together like a book, set up on an altar or carried for private prayer. By calling this work a <em>Diptych</em> and using that sacred two-panel format, Warhol (or the title that stuck to the work) casts Monroe as a modern, secular <strong>icon</strong>: the repeated face read like a litany of prayers, the gilded star treated as an object of something close to religious devotion. This is criticism, not an artist&rsquo;s statement, but it is hard to unsee once named, the supermarket and the altar in the same frame.
      </p>

      <SectionHeader accent={accent} label="Tate · 1980" title="Where it lives now" />
      <p style={proseStyle}>
        In <strong>1980</strong>, the Tremaines sold the <em>Marilyn Diptych</em> to the <strong>Tate Gallery in London</strong> (reportedly for around $270,000, a figure from secondary accounts). The Tate record reads, simply, <strong>&ldquo;Purchased 1980,&rdquo;</strong> accession <strong>T03093</strong>. It was not donated and not bequeathed; the museum bought it. It hangs today at <strong>Tate Modern</strong>, on the south bank of the Thames, and is one of the most reproduced images in the building, which is its own small joke, a work about the emptiness of reproduction, endlessly reproduced.
      </p>
      <p style={proseStyle}>
        And the work&rsquo;s influence ran exactly along the line it opened. After this, the <strong>commodity image</strong> became fair game for serious art; the <strong>artist could become a brand</strong>, a name and a factory rather than a lone hand; and a whole later practice of <strong>appropriation</strong>, taking an existing photograph or product and re-presenting it as art, traces back through here. The face Warhol screened fifty times is now, half a century on, one of the most familiar images on earth, a picture about a star turned into a product that has itself become a product, sold on mugs and posters and tote bags, which is either the failure of the work&rsquo;s argument or its final proof.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  marilyn: { death: MarDeath, making: MarMaking, looking: MarLooking, break: MarBreak, afterlife: MarAfterlife },
```
