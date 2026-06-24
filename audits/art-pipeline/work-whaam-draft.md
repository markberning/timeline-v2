# Work draft — Roy Lichtenstein, *Whaam!* (1963)

Authored through the art content pipeline. PART A = the `WHAAM` const for `src/lib/art-content.ts`. PART B = the five `Wham*` chapter components for `art-section-reader.tsx`, with the trailing NARRATIVES registry comment. Shared helpers only (SectionHeader, DropCap, proseStyle, PaintingFigure) — no redefs, no imports. Section ids: `source`, `making`, `looking`, `break`, `afterlife`.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Whaam! (1963), Roy Lichtenstein, Tate, London (T00897). Flagship
// Pop Art work-read. Authored through the art content pipeline (fact pack →
// Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['whaam'] (Wham… prefix). FACT HANDLING (per fact pack):
// RIGHTS in-copyright — 1963, Lichtenstein d.1997; hero shown small +
// credited under fair use, © Estate of Roy Lichtenstein, work Tate-owned.
// SOURCE is a real, named panel: Irv Novick's art for "Star Jockey,"
// DC Comics' All-American Men of War #89 (1962) — name it, and state the
// appropriation/credit question honestly (Lichtenstein credited the comic,
// not the artist). BEN-DAY DOTS are HAND-PAINTED here (through a screen),
// not printed — the single most-misstated fact. Medium = Magna, an early
// solvent-based acrylic resin, alongside oil. Give the OVERALL diptych size
// (two panels), ≈ 5 ft 8 in × 13 ft 4 in. Plane model is unsettled (F-86 in
// the comic, often called a P-51) — not asserted in the body.
// ─────────────────────────────────────────────────────────────
export const WHAAM: ArtWorkContent = {
  id: 'whaam',
  name: 'Whaam!',
  shortName: 'Whaam!',
  year: 1963,
  artist: 'Roy Lichtenstein',
  artistId: 'lichtenstein',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Magna acrylic and oil on canvas (two panels)',
  dimensions: '5 ft 8 in × 13 ft 4 in',
  location: 'Tate, London',
  acquired: 'Purchased 1966',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 7, total: 9 },
  hook: 'A throwaway war-comic panel, blown up to thirteen feet and hand-painted dot for dot: a fighter fires a rocket, the enemy plane bursts into a yellow-and-red “WHAAM!”, and a picture of a man being killed is rendered as clean, bright, deadpan as an advertisement.',
  heroImage: ART_IMG.lichtWhaam,
  heroCredit: 'Lichtenstein, Whaam!, 1963 · Tate, London · in copyright, shown small under fair use; rights with the Estate of Roy Lichtenstein.',
  heroAspect: 2.35, // ≈ 172.7 × 406.4 cm → W/H ≈ 2.35, a wide two-panel diptych
  heroFit: 'contain', // both panels whole, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '1963', k: 'Painted' },
    { v: '≈ 13 ft wide', k: 'Dimensions' },
    { v: 'Tate', k: 'Now at' },
  ],
  sections: [
    { id: 'source', eyebrow: 'New York · 1961–1963', dateLabel: '1961–1963', title: 'A painter who found his subject in the funny pages', blurb: 'A forty-year-old abstract painter switches, almost overnight, to copying comic strips and ads at huge scale. For Whaam! he reaches for the lowest source he can find: a single panel of a cheap DC war comic, drawn by Irv Novick.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1963', title: 'How a comic panel becomes thirteen feet of canvas', blurb: 'Lichtenstein splits one comic frame into two big canvases, tightens the drawing, flattens the color to flat primaries inside hard black outlines, and lays the printer’s dots down by hand through a metal screen. The mechanical look is hand-labor.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '5 ft 8 in × 13 ft 4 in', title: 'A killing, painted like an advertisement', blurb: 'Left panel: a fighter fires a rocket, with the pilot’s caption box along the top. Right panel: the enemy plane erupting, and the giant “WHAAM!” The violence is real; the handling is flat, bright, and deadpan, and that detachment is the content.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1963', title: 'The worst of commercial art, hung as fine art', blurb: 'A war-comic panel on a mural-scale canvas, the Ben-Day dot turned into a high-art surface, a painting hand-made to look machine-made. Lichtenstein wanted the work to look “programmed,” and to hide the record of his hand.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1963–today', title: 'From the Castelli wall to the Tate, and a credit still owed', blurb: 'Shown at Leo Castelli in 1963, bought by the Tate in 1966, and now one of the most recognized images in modern art. And the question that trails it: the comic artists it copied were never named or paid.', progress: 0.96 },
  ],
  provenance: [
    { year: '1963', who: 'Roy Lichtenstein (the artist)', place: 'New York', note: 'Painted in 1963 and shown that autumn in Lichtenstein’s second solo exhibition at the Leo Castelli Gallery, New York (28 September – 24 October 1963), handled by the dealer Leo Castelli.', price: null },
    { year: '1966', who: 'Ileana Sonnabend (dealer)', place: 'Paris / New York', note: 'Passed through the dealer Ileana Sonnabend, Castelli’s former wife and a major early champion of Pop Art, who handled the sale to the Tate. (A negotiated figure of about £3,940 is reported in secondary sources but is not on the Tate’s own record, so we leave it out of the price column.)', price: null },
    { year: '1966–today', who: 'Tate', place: 'London', note: 'Purchased by the Tate Gallery in 1966; accession T00897. Now at Tate Modern, one of the most recognized works of Pop Art. On view.', price: 'Purchased 1966', museum: true },
  ],
  figures: [
    { name: 'Roy Lichtenstein', role: 'The painter', palette: ['#d6cf3f', '#bf2f25', '#1c1c1c'] },
    { name: 'Irv Novick', role: 'Drew the source comic panel', palette: ['#bf2f25', '#2a3a6a', '#14110c'] },
    { name: 'DC Comics', role: 'Published All-American Men of War', palette: ['#1d4ed8', '#bf2f25', '#0e1014'] },
    { name: 'The Ben-Day dot', role: 'The printer’s screen, painted by hand', palette: ['#d6cf3f', '#3a3c28', '#14140e'] },
    { name: 'Leo Castelli', role: 'Dealer · showed it in 1963', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
  ],
  annotations: [
    { label: 'Two panels, one action', where: 'The whole work: a left canvas and a right canvas, hung side by side with a seam between them', detail: 'This is a diptych, two separate canvases shown as one picture. Read it left to right: the firing plane on the left, the explosion on the right. The rocket’s long smoke trail is what stitches the two halves together, carrying your eye across the gap. Lichtenstein took a single comic frame and split it in two, so the cause sits on one canvas and the effect on the other.' },
    { label: 'The firing plane (left)', where: 'The left panel, a fighter aircraft cutting diagonally down across the canvas', detail: 'A fighter plane angles down from the upper left, a rocket streaking away from it. This is the cause, the trigger pulled. (Which plane it is depends on who you ask: the source comic shows an F-86 Sabre, while popular descriptions often call it a P-51 Mustang, so the exact model is not worth asserting.) What matters is the clean diagonal: the whole left canvas is built around that single line of fire shooting toward the next panel.' },
    { label: 'The exploding plane (right)', where: 'The right panel, the enemy aircraft erupting in a red-and-yellow fireball', detail: 'The enemy plane bursts into a red-and-yellow fireball that fills the right canvas. This is the effect, and it is a man being killed, but you would never know it from the handling: there is no gore, no smoke-blackened wreckage, just a clean graphic explosion in flat primary color. The horror of the subject and the cheerfulness of the picture are the whole tension of the work.' },
    { label: 'The word “WHAAM!”', where: 'Across the upper right panel, the giant onomatopoeia in bold yellow-and-black lettering', detail: 'The blast is spelled out, comic-book style, in a huge yellow-edged “WHAAM!” detonating across the top of the right panel. The painting’s title is literally painted into the painting. Lichtenstein keeps the comic’s own device, the sound effect drawn as a picture, and lets it carry the violence the image refuses to.' },
    { label: 'The yellow caption box (left)', where: 'Along the top edge of the left panel, a boxed line of hand-lettered text', detail: 'Across the top of the left panel runs a caption box carrying the pilot’s line, kept from the comic almost word for word: “I PRESSED THE FIRE CONTROL … AND AHEAD OF ME ROCKETS BLAZED THROUGH THE SKY …” It is the comic’s narrative voice, the breathless first-person of a war story, lifted intact and blown up to gallery scale. The text is part of the picture, not a label on it.' },
    { label: 'The hand-painted Ben-Day dots', where: 'Anywhere across the flat color areas, especially the lighter passages of sky', detail: 'Look at the even areas of color and you will see a regular grid of dots. These are Ben-Day dots, the cheap printer’s dot-screen used to shade newsprint, named for the printer Benjamin Day. The crucial thing: here they are not printed. Lichtenstein laid every one down by hand, dabbing paint through a perforated metal screen, to imitate the look of mass reproduction. The most mechanical-looking surface in the painting is the most hand-made part of it.' },
  ],
  lineage: {
    parents: [
      { label: 'Comic-strip illustration', mode: 'art' },
      { label: 'Abstract Expressionism', mode: 'art' },
      { label: 'Postwar consumer America', mode: 'civ' },
    ],
    children: [
      { label: 'Pop Art', mode: 'art' },
      { label: 'Appropriation art', mode: 'art' },
      { label: 'The image as readymade', mode: 'art' },
    ],
  },
}
```

## PART B — the chapter components

```tsx
// ─────────────────────────────────────────────────────────────
// Whaam! (Lichtenstein, 1963) — the five chapters
// ─────────────────────────────────────────────────────────────
function WhamSource({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1961" title="A serious painter walks into the funny pages" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1961</strong>, <strong>Roy Lichtenstein</strong> (1923&ndash;1997) was a thirty-seven-year-old painter and art teacher whose work nobody much wanted. He had been painting in the going style of the day, a loose, gestural abstraction in the long shadow of <strong>Abstract Expressionism</strong> (the dominant American movement of the 1950s, all big canvases and visible, emotional brushwork, the artist&rsquo;s own hand and feeling smeared across the surface). It was the serious thing to do, and Lichtenstein was not making a dent doing it. Then, the story goes, he painted a Disney character for his children, looked at it, and saw a way out. Almost overnight he switched to the most disreputable source material in America: <strong>comic strips and advertisements</strong>, copied straight, at the scale of fine-art paintings.
      </p>
      <p style={proseStyle}>
        This was close to a provocation. The whole point of the comic strip and the ad was that they were <em>throwaway</em>: cheap, mass-printed, glanced at, and binned. They were commercial craft, the opposite of art, beneath the gallery wall by definition. Lichtenstein walked straight at that line. He later put his program bluntly: he was, he said, interested in what would normally be considered the worst aspects of commercial art. Not the prettiest, not the cleverest. The worst. The flattest, cheapest, most disposable printed images the culture produced, taken seriously and made big.
      </p>

      <SectionHeader accent={accent} label="The source" title="One panel of a cheap war comic, by Irv Novick" />
      <p style={proseStyle}>
        For the picture that would become <em>Whaam!</em>, he reached into exactly that bin. The source is a single panel from a war comic: a story called <em>&ldquo;Star Jockey,&rdquo;</em> printed in <strong>DC Comics&rsquo; <em>All-American Men of War</em> No. 89</strong>, cover-dated early <strong>1962</strong>. The artist who actually drew that panel was <strong>Irv Novick</strong> (1916&ndash;2004), a working comic-book illustrator turning out war stories on a deadline. (His name matters, and we&rsquo;ll come back to it, because the question of credit is one of the real arguments around this painting.) The original is a small frame on a newsprint page: a fighter plane firing, an enemy plane exploding, a caption, a sound effect. Cheap ink on cheap paper, meant to be read in a second and forgotten.
      </p>
      <p style={proseStyle}>
        That is the raw material. Not a myth, not a saint, not a battle out of history, the high subjects fine-art painting had drawn on for centuries. A two-bit war comic, the kind a kid bought for a dime. Lichtenstein&rsquo;s whole move is what he does with it next: he takes that disposable little frame and treats it as if it were worth thirteen feet of canvas and the seriousness of a history painting. How he did that is the next chapter.
      </p>
    </article>
  )
}

function WhamMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1963" title="One frame, split into two canvases" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ichtenstein did not simply enlarge Novick&rsquo;s panel like a photocopy. He rebuilt it. The first big decision was structural: he took the single comic frame and split it into a <strong>diptych</strong>, two separate canvases (the word just means a picture made of two joined panels). The firing plane went on the left canvas, the explosion on the right, and the rocket&rsquo;s smoke trail was stretched across the gap between them to tie the two halves into one action. That split is not in the comic. It is Lichtenstein pulling the cause and the effect apart and giving each its own wall-sized field, so the eye has to travel from the trigger to the blast.
      </p>
      <p style={proseStyle}>
        Then there is the size. The finished work is roughly <strong>five feet eight inches tall and thirteen feet four inches wide overall</strong> (the two panels together), about thirteen feet of canvas. That is mural scale, the scale an old academic painter reserved for a coronation or a battle. A throwaway comic panel, meant to be inches across on a newsprint page, is here blown up until it dominates a room. The simple act of enlargement is half the work: at that size the cheap graphic clich&eacute;s of the comic stop being invisible and become the subject.
      </p>

      <SectionHeader accent={accent} label="The surface" title="Flat color, hard outlines, and dots laid down by hand" />
      <p style={proseStyle}>
        Up close, the surface is a careful imitation of cheap printing. Everything is reduced to <strong>flat primary color</strong> (red, yellow, blue) inside <strong>thick black outlines</strong>, with no modelling, no shadow, no shading, the visual economy of a comic page. The paint is mostly <strong>Magna</strong>, an early solvent-based acrylic resin (a forerunner of the water-based acrylics painters use now), worked alongside ordinary oil. It dries flat and even, with none of the loaded, expressive brushwork Lichtenstein had just walked away from. The hand is gone on purpose.
      </p>
      <p style={proseStyle}>
        And then the part everyone gets wrong. Across the flat color areas runs a regular grid of dots, the texture you see if you put a comic page under a magnifying glass. These are <strong>Ben-Day dots</strong>, named for the 19th-century printer <strong>Benjamin Day</strong>: a mechanical dot-screen used to shade and tint cheap printing without paying for more ink. In a real comic the dots are <em>printed</em>, stamped on by a press. In <em>Whaam!</em> they are <strong>painted by hand</strong>. Lichtenstein laid down each field of dots himself, dabbing or scrubbing paint through a <strong>perforated metal screen</strong> held against the canvas, the way you&rsquo;d use a stencil. The single most mechanical-looking thing in the painting, the dot, is the most laborious hand-work in it. The picture only <em>looks</em> machine-printed. It was made slowly, by hand, to fake the machine.
      </p>
    </article>
  )
}

function WhamLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas · left panel" title="The plane, the rocket, and the pilot’s voice" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand at the left end, where the action starts. A <strong>fighter plane</strong> cuts diagonally down across the left canvas, and a <strong>rocket</strong> streaks away from it on a long trail of smoke. This is the cause: the trigger pulled, the shot fired. (Spotters argue about the plane. The source comic shows an F-86 Sabre; popular write-ups often call it a P-51 Mustang. The exact model was never the point, so don&rsquo;t let anyone tell you firmly which it is.) The whole left panel is built around that one clean diagonal of fire, aimed across the gap at the next canvas.
      </p>
      <p style={proseStyle}>
        Now read the box along the top. A <strong>yellow caption box</strong> runs across the upper edge of the left panel, carrying the pilot&rsquo;s line in black hand-lettering, kept almost exactly from the comic: <em>&ldquo;I pressed the fire control&hellip; and ahead of me rockets blazed through the sky&hellip;&rdquo;</em> This is the comic&rsquo;s narrative voice, the breathless first-person of a war story, lifted intact and blown up to gallery scale. The words are part of the picture, not a label on the wall, and they do something sly: they hand you the drama in print, so the image itself doesn&rsquo;t have to act it out.
      </p>

      <SectionHeader accent={accent} label="The canvas · right panel" title="The explosion, and the word for it" />
      <p style={proseStyle}>
        Walk to the right canvas and the rocket arrives. The <strong>enemy plane erupts</strong> in a <strong>red-and-yellow fireball</strong> that fills the panel. This is the effect, and it is worth saying plainly what it depicts: a man is being killed, his aircraft blown apart in the air. But look at how it is painted. There is no gore, no twisted metal, no smoke-blackened horror, just a clean, bright, almost cheerful graphic burst in flat primary color. The deadliest thing in the picture is rendered like a logo.
      </p>
      <p style={proseStyle}>
        And over the top of it detonates the painting&rsquo;s title. The giant onomatopoeia <strong>&ldquo;WHAAM!&rdquo;</strong> bursts across the upper right in bold yellow-edged comic lettering, the sound effect drawn as a picture, the way comics have always done it. The word is doing the work the image refuses to: it supplies the noise, the violence, the punch, all of it kept safely in lettering. The title of the painting is painted into the painting.
      </p>

      <SectionHeader accent={accent} label="The handling" title="Why the detachment is the subject" />
      <p style={proseStyle}>
        Step back and take in the whole thirteen feet. What you are looking at is a scene of sudden death rendered with total cool: flat color, hard outlines, mechanical dots, not a flicker of feeling in the paint. This is the deadpan that <em>is</em> the content. Lichtenstein takes the most violent kind of imagery, war, killing, an aircraft exploding with a man inside it, and drains it of all drama in the handling, presenting it with the same flat, bright neutrality an advertisement uses to sell soap. The painting does not mourn the death or thrill to it. It just shows you how completely a culture had learned to package even killing as a clean, disposable graphic. The flatness is not a failure of feeling. It is the point.
      </p>
    </article>
  )
}

function WhamBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="What was beneath the gallery wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or as long as there had been fine-art painting, it drew on <strong>high sources</strong>: myth, history, religion, the human figure, landscape, and, by the middle of the 20th century, the artist&rsquo;s own raw feeling poured out in visible brushwork. Abstract Expressionism, the style Lichtenstein came out of, prized exactly that, the gesture, the drip, the trace of the hand, paint as the record of a soul at work. Comic strips, advertising, and pulp illustration sat on the other side of an unspoken line. They were <strong>commercial craft</strong>: cheap, anonymous, machine-printed, made to sell and be thrown away. They did not hang in museums, and the line between the two was not supposed to be crossed.
      </p>
      <p style={proseStyle}>
        <em>Whaam!</em> crosses it three ways at once. First, the <strong>source</strong>: the worst of commercial art, a throwaway war comic, becomes legitimate raw material for a serious painting. Second, the <strong>surface</strong>: the Ben-Day dot, the cheap mechanical texture of newsprint, becomes a deliberate fine-art surface, the look of mass reproduction turned into a thing you paint by hand and hang on a wall. Third, the <strong>hand</strong>: the work is made to look impersonal, machine-printed, &ldquo;programmed,&rdquo; the exact opposite of the expressive brushstroke it grew up next to. Hand-made to look machine-made. That inversion, human labor disguised as the machine, is the Pop break in a single image.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“I want to hide the record of my hand”" />
      <p style={proseStyle}>
        Lichtenstein said what he was after about as clearly as an artist ever does. In the catalogue for his 1967 retrospective at the Pasadena Art Museum, in conversation with the curator <strong>John Coplans</strong>, he put it this way:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>&ldquo;I want my painting to look as if it has been programmed. I want to hide the record of my hand.&rdquo;</p>
        <p style={{ margin: 0, fontStyle: 'normal', fontSize: 13.5, color: MUTED }}>&mdash; Roy Lichtenstein, in <em>Roy Lichtenstein</em> (Pasadena Art Museum, 1967), interview by John Coplans</p>
      </blockquote>
      <p style={proseStyle}>
        Read it against everything we just saw being made. He wanted the painting to look <em>programmed</em>, as if a machine had output it, with no person visible in the doing. And he wanted to <strong>hide the record of his hand</strong>, the very thing Abstract Expressionism had built its whole religion on showing. The deep joke of <em>Whaam!</em> is that hiding the hand took an enormous amount of hand: every flat field, every black outline, every grid of dots laid down through a screen, all of it slow handwork performed to erase the evidence of handwork. The machine look is the most human thing about it.
      </p>
    </article>
  )
}

function WhamAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1963–1966" title="From the Castelli wall to a national collection" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        ithin a few years <em>Whaam!</em> traveled a long way fast. In the autumn of <strong>1963</strong> it hung in Lichtenstein&rsquo;s second solo show at the <strong>Leo Castelli Gallery</strong> in New York (Castelli being the dealer who, more than anyone, made the market for American Pop Art). Three years later, in <strong>1966</strong>, it crossed the Atlantic: the <strong>Tate Gallery</strong> in London bought it, handled by the dealer <strong>Ileana Sonnabend</strong>, Castelli&rsquo;s former wife and another of Pop&rsquo;s great early champions. (You will see a price of about &pound;3,940 quoted for that sale; it comes from secondary sources rather than the Tate&rsquo;s own record, so treat it as a footnote, not a fact.) Within three years of being painted, a copied war-comic panel had entered a national collection, where it remains, accession T00897, now at Tate Modern and one of the most recognized images in all of modern art.
      </p>

      <SectionHeader accent={accent} label="The credit question" title="The artists who were never named" />
      <p style={proseStyle}>
        There is an argument that follows <em>Whaam!</em> around, and it deserves to be stated straight rather than smoothed over. Lichtenstein built the painting on someone else&rsquo;s drawing, <strong>Irv Novick&rsquo;s</strong> panel in <em>All-American Men of War</em> #89, and he did so the way he did across his comic-based work: he credited the genre, sometimes the comic, but <strong>not the artist</strong>. He sought no permission, named no illustrator, and paid no royalties. Novick was not alone in this; the comic artists Lichtenstein drew from also included <strong>Russ Heath, Tony Abruzzo, Jerry Grandenetti</strong>, and <strong>Jack Kirby</strong>, working professionals whose panels became famous paintings without their names attached. Decades later the comics artist <strong>Dave Gibbons</strong> called the practice &ldquo;copycat,&rdquo; arguing the work should really read <em>&ldquo;Whaam!, by Roy Lichtenstein, after Irv Novick.&rdquo;</em>
      </p>
      <p style={proseStyle}>
        Lichtenstein&rsquo;s defense was that he transformed what he took: that enlarging, splitting, recomposing, and recoloring a panel changed its purpose so completely that the result was a new thing, a comment on the image rather than the image. There is real truth in that; a thirteen-foot deadpan painting about how culture packages violence is plainly not a war comic, and that is the work&rsquo;s whole achievement. But both things are true at once, and the honest version of this picture holds them together: it is a landmark that opened high art to the everyday image, and it is built on the uncredited labor of working illustrators who never shared in the fame or the money. You can admire the break and still keep Novick&rsquo;s name in the room. The best way to look at <em>Whaam!</em> is to do both.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  whaam: { source: WhamSource, making: WhamMaking, looking: WhamLooking, break: WhamBreak, afterlife: WhamAfterlife },
```
