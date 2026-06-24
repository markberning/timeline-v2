# FINAL — Andy Warhol, *Campbell's Soup Cans* (1962)

Reconciled from `work-soup-cans-draft.md` against all four gates (fact / read / frame / factpack). Every [BLOCKER] and [FIX] folded. Born-verified facts only. KEY HANDLING per fact pack preserved: the 1962 cans are HAND-PAINTED (projector-traced outlines, hand-stamped gold fleur-de-lis), NOT silkscreened; 32 canvases = the 32 Campbell's condensed-soup varieties then sold; first shown Ferus Gallery, LA, 9 July 1962, on a narrow shelf like a grocery aisle; Warhol did NOT fix the order (MoMA hangs by each variety's introduction date); `rights: 'in-copyright'`; the Swenson "twenty years" lunch quote and the verbatim "It's liking things" stay verbatim. Changes this pass: FACT — the $1,000 was paid in TEN $100 installments (~10 months), fixed in all three spots (cover note, provenance note, afterlife prose). READ — all voice-contract fixes (honesty-labels, reader-commands, meta-narration removed; looking section recast to descriptive register; "liking things" quote re-sequenced tight against the break). FRAME — added the Factory / serial-production payoff beat and the hostile-1962-reception beat (both fact-gate-corroborated via History.com / Wikipedia / MoMA Inside-Out); kept the authorship/originality + commercial-appropriation question as genuine debate; one persona-proportionate clause added. No literal em-dash in rendered TS string fields.

---

## PART A — `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Campbell's Soup Cans, Warhol, 1962. MoMA. The 32-canvas set,
// kept intact. Authored through the art content pipeline (fact pack → Opus →
// 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['soup-cans'] (Sup… prefix).
// FACT HANDLING per fact pack: the 1962 cans are HAND-PAINTED (projector-traced
// outlines, hand-stamped gold fleur-de-lis), NOT silkscreened (silkscreens came
// slightly later in 1962). 32 canvases = the 32 Campbell's condensed-soup varieties
// then sold (count tracks the product line). First shown Ferus Gallery, LA, 9 July
// 1962, on a narrow shelf like a grocery aisle. Warhol did NOT fix the order; MoMA
// hangs them by each variety's market-introduction date. RIGHTS in-copyright
// (Warhol d.1987) → hero shown small + credited under fair use, NOT pd-us. Blum
// bought the full set from Warhol for $1,000, a token sum paid in ten monthly
// installments of $100; MoMA acquired it intact 1996 (~$15M, partial gift +
// purchase). KEY STATEMENT = the verbatim Swenson (ARTnews, Nov 1963) "twenty
// years" lunch quote.
// ─────────────────────────────────────────────────────────────
export const SOUP_CANS: ArtWorkContent = {
  id: 'soup-cans',
  name: "Campbell's Soup Cans",
  shortName: "Campbell's Soup Cans",
  year: 1962,
  artist: 'Andy Warhol',
  artistId: 'warhol',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Synthetic polymer paint on thirty-two canvases',
  dimensions: '32 canvases, each 20 × 16 in (50.8 × 40.6 cm)',
  location: 'Museum of Modern Art, New York',
  acquired: 'Gift of Irving Blum; additional funds / purchase, 1996',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 4, total: 9 },
  hook: 'Thirty-two near-identical grocery soup cans, one per variety on the shelf, hand-painted to look machine-made and first propped on a ledge like a supermarket aisle, that put the brand itself on the wall where a Pollock used to hang.',
  heroImage: ART_IMG.warholSoup,
  heroCredit: "Warhol, Campbell's Soup Cans, 1962 · MoMA, New York · in copyright, shown small under fair use",
  heroAspect: 1.72, // the 32-canvas set hung in two rows reads wide; shown small under fair use
  heroFit: 'contain', // the whole set, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '1962', k: 'Painted' },
    { v: '32 cans · 20″ × 16″ each', k: 'The set' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'lunch', eyebrow: 'New York · 1961–62', dateLabel: '1961–62', title: 'A commercial artist, eating the same lunch', blurb: 'Warhol had spent the 1950s as one of New York’s most successful advertising illustrators, drawing shoes and ads. Now he wants in to fine art, and he reaches for the single most ordinary thing in his own kitchen: the Campbell’s soup can he ate for lunch, by his own account, for some twenty years.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1962', title: 'Hand-painted to look mass-produced', blurb: 'Thirty-two canvases, one for each variety of Campbell’s condensed soup the company then sold. Not silkscreens: these early cans are traced from a projector and painted by hand, the little gold band at each base pressed on with a rubber stamp, made to look machine-made but made by hand.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The set', dateLabel: '32 canvases, each 20 × 16 in', title: 'The same can, thirty-two times', blurb: 'The grid reads as one thing first: the identical red-and-white label, the same head-on view, the same scale, repeated thirty-two times, where the only thing that changes is the variety name and the slight wobble of the hand that painted each one.', progress: 0.54 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1962', title: 'The supermarket walks into the museum', blurb: 'Against a generation that prized the heroic, unrepeatable gesture (Pollock, de Kooning), Warhol hangs a grocery commodity, deadpan and serial, with no “best” can and no visible feeling. It collapses the line between an ad and a painting and puts the artist’s unique touch openly in question.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1962–today', title: 'Mocked first, then kept together', blurb: 'First shown at the Ferus Gallery in Los Angeles, propped on a shelf like a grocery aisle, where it was widely lampooned and barely sold. The dealer Irving Blum bought the whole set back to keep it intact, held it for decades, and sold it whole to MoMA in 1996, where the 32 cans still hang together.', progress: 0.96 },
  ],
  provenance: [
    { year: '1962', who: 'Andy Warhol (the artist)', place: 'New York', note: 'Made in 1962 as a set of 32 canvases. First exhibited at the Ferus Gallery, Los Angeles, opening 9 July 1962, Warhol’s first solo painting show, arranged by the gallery’s director Irving Blum. The cans sat in a single row on a narrow ledge, like cans on a grocery-store aisle. The show was widely mocked and only a handful of individual canvases initially sold.', price: null },
    { year: '1962–63', who: 'Irving Blum (Ferus Gallery)', place: 'Los Angeles', note: 'Blum reassembled the set, buying back the few sold canvases and purchasing the full 32 from Warhol to keep the group together. The price was a token $1,000, paid in ten monthly installments of $100, not a market figure.', price: 'a token $1,000, in ten $100 installments' },
    { year: '1987–1996', who: 'Irving Blum, on long-term loan', place: 'Washington, D.C.', note: 'Blum held the intact set, placing it on long-term loan to the National Gallery of Art, Washington, from 1987 (the year of Warhol’s death).', price: null },
    { year: '1996–today', who: 'Museum of Modern Art', place: 'New York', note: 'Acquired by MoMA in 1996 as the intact 32-canvas set, a partial gift of Irving Blum plus museum purchase, deliberately kept together rather than dispersed. (Widely reported at about $15 million for the group.) On permanent view.', price: 'partial gift of Blum + purchase', museum: true },
  ],
  figures: [
    { name: 'Andy Warhol', role: 'The painter', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { name: 'Irving Blum', role: 'Dealer who kept the set whole', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Campbell Soup Company', role: 'The brand, and the subject', palette: ['#bf2f25', '#e8e2d4', '#c79338'] },
    { name: 'Gene Swenson', role: 'Interviewer of the “twenty years” quote', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Dennis Hopper', role: 'Actor; early buyer at Ferus', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
  ],
  annotations: [
    { label: 'Thirty-two near-identical cans in a grid', where: 'The whole set at once, the even rank of canvases, before any single one', detail: 'The entire grid registers first, because the repetition is the subject, not any single can. The same can, the same scale, the same straight-on view, the same red-and-white label, set down thirty-two times. There is no climax and no “best” one; the rhythm of sameness across the wall is the point. Warhol called the picture out of the supermarket and then refused to rank it.' },
    { label: 'The only thing that changes is the name', where: 'The lower band of each label, the script word naming the variety: Tomato, Beef, Onion, Pepper Pot', detail: 'Can to can, the sole variable is the variety name printed on the label’s lower band. There are thirty-two because that was the number of Campbell’s condensed-soup varieties the company then sold, so the product line, not the painter, decides what appears. Tomato, the oldest variety, is usually hung first.' },
    { label: 'The red-and-white label', where: 'Each can, the flat split of the packaging: red lower half, white upper half', detail: 'The flat division (red bottom, white top, the script “Campbell’s” wordmark across the white, a gold medallion at the center) is the real Campbell’s packaging, copied deadpan. There is no painterly interpretation of it, no mood laid over it. The image is the label, reproduced as faithfully as an ad would reproduce it.' },
    { label: 'The gold fleur-de-lis band', where: 'The ring of small gold ornaments running around each can near its base', detail: 'The ring of tiny gold fleur-de-lis (the stylized lily ornament) circles each can near its base. These were not painted freehand and they were not printed: Warhol pressed them on with a rubber hand stamp. It is the quiet tell that the “mechanical” look of the whole thing is, in fact, handwork.' },
    { label: 'Slight hand-painted irregularities', where: 'Two or three cans compared closely, the lettering, the outline, the gold band, can to can', detail: 'Set two cans side by side and the small inconsistencies surface: a letter slightly off, an outline not quite matched, the gold band a hair different. These 1962 cans are individually hand-painted, traced from a projected image rather than silkscreened (the famous silkscreen process came slightly later). The human hand keeps peeking through the machine surface.' },
    { label: 'The grocery-shelf grid', where: 'The way the set hangs, an even two-row rank, recalling the original Ferus ledge', detail: 'The even rank reads like a stretch of supermarket shelving, which is no accident: at the Ferus Gallery in 1962 the canvases were propped in a single row on a narrow ledge, like cans for sale on a grocery aisle. The retail display is imported bodily into the gallery. (The exact order is not fixed by Warhol; MoMA arranges the set by the date each soup variety reached the market.)' },
  ],
  lineage: {
    parents: [
      { label: 'Commercial illustration', mode: 'art' },
      { label: 'Marcel Duchamp’s readymade', mode: 'art' },
      { label: 'The American supermarket', mode: 'civ' },
    ],
    children: [
      { label: 'Pop Art', mode: 'art' },
      { label: 'Warhol’s silkscreens and the Factory', mode: 'art' },
      { label: 'Appropriation and brand art', mode: 'art' },
    ],
  },
}
```

> Coordinator note: register `SOUP_CANS` wherever `STARRY_NIGHT` etc. are exported/collected, and splice the prose registry line:
> `//  'soup-cans': { lunch: SupLunch, making: SupMaking, looking: SupLooking, break: SupBreak, afterlife: SupAfterlife },`

---

## PART B — `Sup`-prefixed section components (absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// Campbell's Soup Cans (Warhol, 1962) — the five sections
// ─────────────────────────────────────────────────────────────
function SupLunch({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1961" title="The most successful illustrator who wanted to be an artist" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y 1960, <strong>Andy Warhol</strong> (1928&ndash;1987) was one of the most sought-after commercial artists in New York. Through the 1950s he had drawn shoes for department stores, illustrated advertisements and record sleeves, and won awards for it, work that paid extremely well and that the fine-art world did not take seriously at all. Commercial art and fine art were two separate countries with a guarded border, and Warhol was a rich, successful citizen of the wrong one. What he wanted was to cross over: to hang in a gallery, to be an <em>artist</em>, not an illustrator-for-hire.
      </p>
      <p style={proseStyle}>
        The problem was subject matter. The reigning American art of the moment was <strong>Abstract Expressionism</strong> (the heroic, gestural abstraction of painters like <strong>Jackson Pollock</strong> and <strong>Willem de Kooning</strong>), where the whole value of a canvas was the record of one artist&rsquo;s unrepeatable hand and inner storm. Warhol&rsquo;s gift ran the opposite way: he was flat, cool, impersonal, a man who could reproduce a label without leaving a fingerprint. So he asked friends what he should paint, and the famous answer, from a gallery owner named Muriel Latow, was blunt: paint something everybody sees every day, paint money, paint a can of soup.
      </p>

      <SectionHeader accent={accent} label="The lunch" title="“The same thing over and over again”" />
      <p style={proseStyle}>
        The soup can was not a random object. It was <em>his</em> object. When an interviewer later asked Warhol why he had painted Campbell&rsquo;s soup, he gave one of the great deadpan answers in modern art:
      </p>
      <p style={{ ...proseStyle, paddingLeft: 16, borderLeft: `3px solid ${accent}`, fontStyle: 'italic' }}>
        &ldquo;I used to drink it. I used to have the same lunch every day, for twenty years, I guess, the same thing over and over again.&rdquo;
      </p>
      <p style={proseStyle}>
        That is from his interview with the critic <strong>Gene Swenson</strong>, published as &ldquo;What is Pop Art?&rdquo; in <em>ARTnews</em> in <strong>November 1963</strong>. (The published interview was edited down from the recordings, so it is the standard, widely-cited version of what Warhol said rather than a raw transcript.) The answer is the whole sensibility in two sentences. No symbolism, no anguish, no deeper meaning offered. He ate the same soup every day for years, and so he painted it, or so the deadpan went. The repetition in his lunch is the repetition in the painting. The picture is not <em>about</em> Campbell&rsquo;s; in a real way, the picture simply <em>is</em> Campbell&rsquo;s, the thing he liked, reproduced.
      </p>
    </article>
  )
}

function SupMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1962" title="Thirty-two cans, because there were thirty-two soups" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1962 Warhol painted not one can but <strong>thirty-two</strong>. The number is not symbolic and it was not chosen for effect: there were thirty-two because that was exactly how many varieties of <strong>Campbell&rsquo;s condensed soup</strong> the company sold at the time, from Tomato to Beef to Onion to Pepper Pot. One canvas per flavor on the grocery shelf. The product line set the count, which is itself the joke and the method: Warhol did not compose a number of cans, he transcribed a catalog.
      </p>
      <p style={proseStyle}>
        Each canvas is the same modest size, <strong>20 by 16 inches</strong> (about 50 by 41 centimeters), and they are separate paintings, thirty-two of them, not one big picture. That separateness matters. They can be hung in any order, and in fact <strong>Warhol never fixed a sequence</strong>; the museum that owns them now arranges them by the date each soup variety first reached the market (Tomato, the oldest, leading), but that is a curator&rsquo;s decision, not the artist&rsquo;s instruction.
      </p>

      <SectionHeader accent={accent} label="Hand-painted" title="Not silkscreens. Made by hand to look machine-made" />
      <p style={proseStyle}>
        The cans are almost always mistaken for silkscreens. They are not, and the correction tells you what the painting is really doing. <strong>These 1962 Soup Cans are not silkscreens.</strong> Warhol is famous for the silkscreen process (the mechanical stencil printing he used for his Marilyns and his Disasters), but that technique came slightly later in 1962 and after. The Soup Cans are among the <em>last</em> works Warhol made substantially by hand. He projected an image of a real can onto each blank canvas, traced the outline, and <strong>painted it in by hand</strong>. The little gold band of ornaments around each can&rsquo;s base he pressed on with a <strong>rubber hand stamp</strong>.
      </p>
      <p style={proseStyle}>
        The strangeness is the point. The whole feeling of the work is mechanical, impersonal, mass-produced, as flat and anonymous as a printed label. And yet Warhol achieved that machine-made look <em>by hand</em>, one careful traced-and-painted can at a time. He was not reproducing a soup can with a machine; he was, painstakingly, by hand, <strong>imitating a machine</strong>. The deadpan uniformity that reads across the set is a performance of the impersonal, and the performer is a human hand. Which is exactly why that hand still shows, in the small slips from can to can.
      </p>
    </article>
  )
}

function SupLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The set" title="The same can, thirty-two times" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first thing the set does is refuse a focal point. Taken whole, all thirty-two together, the <strong>repetition reads as the subject</strong>. The same can, the same scale, the same straight-on view, the same red-and-white label, set down again and again across the wall in an even rank that itself reads like a stretch of supermarket shelving. There is no climax, no &ldquo;best&rdquo; can the eye is meant to settle on. The rhythm of sameness is the whole effect, and it lands before a single word on a label is read.
      </p>

      <SectionHeader accent={accent} label="The only variable" title="The names are all that change" />
      <p style={proseStyle}>
        Can to can, almost nothing changes. Each is the identical red-and-white Campbell&rsquo;s label, the flat split of <strong>red on the bottom and white on top</strong>, the script &ldquo;Campbell&rsquo;s&rdquo; wordmark across the white, the little gold medallion in the center. The <em>only</em> thing that varies from canvas to canvas is the <strong>variety name</strong> printed on the label&rsquo;s lower band: Tomato, Beef, Onion, Pepper Pot, Green Pea, and on through the line. The product, not the painter, decides what differs. That is the deadpan engine of the whole thing: it is a shelf being scanned, and the only news is the flavor.
      </p>

      <SectionHeader accent={accent} label="The gold band" title="The fleur-de-lis ring, stamped on by hand" />
      <p style={proseStyle}>
        At the base of each can runs a thin ring of small gold ornaments. Those are <strong>fleur-de-lis</strong> (a stylized lily shape, the decorative band Campbell&rsquo;s used on its real packaging). Here is the tell: Warhol did not paint that band freehand and he did not print it. He pressed it on with a <strong>rubber stamp</strong>, can after can. So even the most &ldquo;mechanical&rdquo;-looking detail in the whole picture, the part that looks most like factory printing, is the place where Warhol&rsquo;s actual hand is most literally present, pressing a stamp.
      </p>

      <SectionHeader accent={accent} label="The hand in the machine" title="The small slips that give it away" />
      <p style={proseStyle}>
        Set a few cans side by side and the human hand starts to peek through the machine surface: a letter set a touch off, an outline that doesn&rsquo;t quite match its neighbor, the gold band a hair higher or lower, a wobble in a curve. None of this is a flaw; it is the evidence. Because each can was traced and painted individually, no two are perfectly identical, and those tiny irregularities are the proof of thirty-two hand-made paintings dressed up as thirty-two printed labels. The picture argues for the impersonal and the mass-produced, and then quietly betrays the warm, fallible hand that made every inch of it.
      </p>
    </article>
  )
}

function SupBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="What high art was supposed to be" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why a soup can on a wall was a genuine shock, you have to know what serious American painting was supposed to look like in 1962. The reigning style, <strong>Abstract Expressionism</strong>, prized the exact opposite of a soup can. It was abstract, not pictures of things. It was <strong>heroic and individual</strong>, the canvas understood as the record of one artist&rsquo;s unrepeatable gesture, the trace of his hand and his inner life (Pollock&rsquo;s poured skeins, de Kooning&rsquo;s slashing brush). Subject matter was inward, emotional, or pure abstraction. The supermarket aisle, the grocery label, the cheap commodity, those were beneath fine art entirely, the province of the ad men Warhol had just escaped.
      </p>

      <SectionHeader accent={accent} label="The break" title="A grocery commodity on the wall, deadpan and serial" />
      <p style={proseStyle}>
        Into that, Warhol hangs a <strong>mass-market soup can</strong>, the whole subject of the picture, in flat, <strong>deadpan, near-identical repetition</strong> across thirty-two panels. There is no expressive gesture, no visible feeling, no hierarchy, no &ldquo;best&rdquo; can. The image is the packaging, reproduced as coolly as an advertisement reproduces it. At a stroke this collapses the line between commercial illustration and fine art, the country Warhol had spent his whole career stranded on the wrong side of. The lowly, ordinary, commercial thing walks straight into the gallery and hangs where a Pollock used to hang. The supermarket has come into the museum.
      </p>
      <p style={proseStyle}>
        And the content of the picture turns out to be, simply, <strong>liking the thing</strong>. In the same 1963 <em>ARTnews</em> interview, Swenson asked Warhol whether liking ordinary commercial things was what Pop Art was all about, and Warhol&rsquo;s published answer was as flat as the label:
      </p>
      <p style={{ ...proseStyle, paddingLeft: 16, borderLeft: `3px solid ${accent}`, fontStyle: 'italic' }}>
        &ldquo;Yes. It&rsquo;s liking things.&rdquo;
      </p>
      <p style={proseStyle}>
        (It is often rounded to the smoother &ldquo;Pop art is about liking things,&rdquo; but Warhol&rsquo;s published words were &ldquo;It&rsquo;s liking things.&rdquo;) That is the argument the soup cans make: not anguish, not protest, not symbolism, but the open, unembarrassed embrace of a cheap commercial thing as the worthy subject of high art.
      </p>

      <SectionHeader accent={accent} label="What it put in question" title="The artist’s unique touch" />
      <p style={proseStyle}>
        Underneath the shock sits the deeper challenge, aimed straight at the generation Warhol was displacing. If a painting can be a faithful copy of a label, repeated, deliberately impersonal, made to look mechanical (and soon, in the silkscreens, literally mechanical), then what happens to <strong>the value of the unique artist&rsquo;s hand</strong>? That unrepeatable personal touch was the entire claim of Abstract Expressionism, the thing that made a canvas precious. Warhol&rsquo;s soup cans openly question whether it matters at all. They put <strong>authorship and originality themselves</strong> on the table, and propose that the artist might be a deadpan reproducer rather than an expressive originator. It is a real question, not a settled one: the same flatness that reads as a profound challenge to one viewer reads to another as a commercial illustrator dressing up a borrowed label and calling it art, and the picture leaves that argument open rather than winning it. That question, more than the soup, is the break, and it opens the door for Pop Art and for the appropriation and brand art that followed.
      </p>
    </article>
  )
}

function SupAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · July 1962" title="Propped on a shelf, like a grocery aisle" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Soup Cans were first shown not in New York but in <strong>Los Angeles</strong>, at the <strong>Ferus Gallery</strong>, opening <strong>9 July 1962</strong>. It was Warhol&rsquo;s first solo painting exhibition, arranged by the gallery&rsquo;s director, <strong>Irving Blum</strong>, who had seen Warhol&rsquo;s soup-can canvases at his apartment and offered him the show. And the display matched the subject perfectly: the thirty-two canvases were set out in a single row on a <strong>narrow shelf or ledge running along the wall</strong>, exactly like cans for sale on a grocery-store aisle. The retail display was imported, deadpan, into the gallery. Almost nothing sold; a handful of individual canvases went out, one reserved by the actor <strong>Dennis Hopper</strong>.
      </p>
      <p style={proseStyle}>
        The early verdict was not kind. One critic dismissed Warhol as &ldquo;either a soft-headed fool or a hard-headed charlatan,&rdquo; a Los Angeles newspaper ran a cartoon mocking the show, and a rival dealer down the block stacked actual Campbell&rsquo;s cans in his window under a sign that read, in effect, do not be misled, get the original, our low price two for thirty-three cents. The &ldquo;anyone could do this&rdquo; reaction was there from the first day, and it is still the honest objection the picture has to answer.
      </p>

      <SectionHeader accent={accent} label="Kept whole" title="The token $1,000, and a set held together" />
      <p style={proseStyle}>
        Then Blum did something that decided the picture&rsquo;s whole future. He thought the thirty-two cans belonged <em>together</em>, as one work, and should never be split up and scattered. So he <strong>bought back</strong> the few that had sold and purchased the <strong>entire set of thirty-two from Warhol</strong>. The price was almost nothing: a token <strong>$1,000</strong>, paid in <strong>ten monthly installments of a hundred dollars</strong>. It was not a market valuation; it was a handshake to keep the group intact. Blum held the set for decades, eventually placing it on long-term loan to the National Gallery of Art in Washington from 1987.
      </p>

      <SectionHeader accent={accent} label="The Factory" title="The machine the cans only mimed" />
      <p style={proseStyle}>
        Within a year of the soup cans, Warhol made good on what the paintings had only mimed. He gave up the brush for the <strong>silkscreen</strong> and moved the work into a studio he called the <strong>Factory</strong>, where assistants like <strong>Gerard Malanga</strong> pulled the prints alongside him. Warhol said the quiet part out loud: he liked the screen because someone else could reproduce the design as well as he could, and openly wished more people would do his work for him. The soup cans had imitated a machine by hand; the Factory simply became one, and a shared one. The question the cans raised about the artist&rsquo;s unique touch, Warhol now answered with a workshop.
      </p>

      <SectionHeader accent={accent} label="To MoMA · 1996" title="The set that hangs together still" />
      <p style={proseStyle}>
        In <strong>1996</strong>, the <strong>Museum of Modern Art</strong> in New York acquired the <strong>intact thirty-two-canvas set</strong> (a partial gift from Blum plus a museum purchase, widely reported at around fifteen million dollars for the group), and crucially, it kept them <em>together</em>, just as Blum had insisted. So the journey closes neatly: a grocery commodity, painted by hand in 1962 to look mass-produced, lampooned in a Los Angeles gallery, bought whole for a token thousand dollars to keep it from being dispersed, and now hung as one work in the most famous museum of modern art in the world. The supermarket can that walked into the museum never left. All thirty-two flavors are still on the wall, in their even rank, exactly as many as Campbell&rsquo;s happened to sell.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'soup-cans': { lunch: SupLunch, making: SupMaking, looking: SupLooking, break: SupBreak, afterlife: SupAfterlife },
```
