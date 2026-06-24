# DRAFT — Richard Hamilton, *Just what is it that makes today's homes so different, so appealing?* (1956)

Work-level read for the Pop Art chain. Authored through the art content pipeline (fact pack → Opus author → 5 gates → revise). Source of truth: `audits/art-pipeline/work-just-what-is-it-factpack.md`.

Splice notes for the coordinator:
- PART A → `src/lib/art-content.ts` (the const), and add `'just-what-is-it': JUST_WHAT_IS_IT` to `ART_WORK_CONTENT`.
- PART B → `src/app/art/[eraId]/[movementId]/[workId]/[sectionId]/art-section-reader.tsx` (the 5 `Jwi*` components), and splice the trailing NARRATIVES line into the registry.

---

## PART A — the const (art-content.ts)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Just what is it that makes today's homes so different, so
// appealing? (Richard Hamilton, 1956), Kunsthalle Tübingen (Sammlung
// Zundel). Founding image of British Pop art. Authored through the art
// content pipeline (fact pack → Opus → 5 gates → revise). Chapter prose
// in art-section-reader.tsx NARRATIVES['just-what-is-it'] (Jwi… prefix).
// FACT HANDLING (gate-scoped):
//  • rights: 'in-copyright' (Hamilton d. 2011) — shown small + credited,
//    fair use; NOT pd-us. Wired image MUST be the 1956 ORIGINAL collage,
//    not the 1992 digital reworking or the 2004 "upgrade".
//  • The "POP" lollipop as the source of the movement's NAME is a popular
//    claim, NOT settled — scoped as "often cited," never asserted. The term
//    is usually credited to Alloway / the Independent Group, and the first
//    artwork to carry the word "POP" was Paolozzi's 1947 collage.
//  • John McHale supplied the American source images / a rough layout;
//    Hamilton selected, cut, and composed it. Both credited fairly.
//  • The muscleman is the real bodybuilder Zabo Koszewski (a Charles-Atlas
//    TYPE, not Atlas himself). Dimensions in/ft-in only.
// ─────────────────────────────────────────────────────────────
export const JUST_WHAT_IS_IT: ArtWorkContent = {
  id: 'just-what-is-it',
  name: "Just what is it that makes today's homes so different, so appealing?",
  shortName: 'Just what is it…',
  year: 1956,
  artist: 'Richard Hamilton',
  artistId: 'hamilton',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Collage on paper',
  dimensions: '10 1/4 in × 9 3/4 in',
  location: 'Kunsthalle Tübingen (Sammlung Zundel), Germany',
  acquired: 'Sammlung Zundel, held at the Kunsthalle Tübingen',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 1, total: 9 },
  hook: 'A modern living room, the size of a sheet of letter paper, built entirely out of American magazine ads, a bodybuilder, a pin-up, a tinned ham, and a giant lollipop that reads POP. The founding image of British Pop art.',
  heroImage: ART_IMG.hamiltonHomes,
  heroCredit: "Hamilton, Just what is it that makes today's homes so different, so appealing?, 1956 · Kunsthalle Tübingen (Sammlung Zundel) · in copyright, shown small under fair use.",
  heroAspect: 0.94, // 24.8 × 26 cm → W/H ≈ 0.94, portrait
  heroFit: 'contain', // the whole small collage, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '10¼″ × 9¾″', k: 'Dimensions' },
    { v: '1956', k: 'Made' },
    { v: 'Kunsthalle Tübingen', k: 'Now at' },
  ],
  sections: [
    { id: 'tomorrow', eyebrow: 'London · 1956', dateLabel: '1956', title: 'A poster for a show called This Is Tomorrow', blurb: 'A loose circle of artists, designers and critics in London, the Independent Group, were chewing over American advertising and mass culture as if it were serious material. Hamilton built this small collage as the catalogue image and poster for their 1956 Whitechapel exhibition, This Is Tomorrow.', progress: 0.08 },
    { id: 'cutting', eyebrow: 'The making', dateLabel: '1956', title: 'Cut from American magazines, composed by hand', blurb: 'Nothing in it is drawn. John McHale fed Hamilton a stock of American magazines and a rough catalogue layout; Hamilton selected, cut, and arranged the pieces into a single room. The artist’s job here is choosing and placing the mass-produced image, not painting it.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '10 1/4 in × 9 3/4 in', title: 'A living room that is all product', blurb: 'The bodybuilder with the POP lollipop, the pin-up on the couch, the boxy television and the tape recorder on the floor, the framed romance comic on the wall, the brand marks, and a ceiling that is the Earth seen from space.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1956–1957', title: 'When advertising became fine-art material', blurb: 'A finished art object assembled out of nothing but ads, logos, a comic, a pin-up and a tinned ham, with the aspirational home reframed as a catalogue of desire. A year later Hamilton wrote the one-paragraph definition of Pop that reads like a caption to this very picture.', progress: 0.80 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1956–today', title: 'The collage that named, and outlived, a movement', blurb: 'Reproduced in black and white in the catalogue, then claimed for decades as the first iconic work of Pop. Hamilton reworked the subject in 1992 and 2004; the small 1956 original now hangs in Germany, in the Sammlung Zundel at the Kunsthalle Tübingen.', progress: 0.96 },
  ],
  provenance: [
    { year: '1956', who: 'Richard Hamilton (the artist)', place: 'London', note: 'Made in 1956 as the catalogue image and poster for the This Is Tomorrow exhibition, Whitechapel Art Gallery, London, where it was reproduced in black and white. The American source images were supplied by John McHale (with Magda Cordell); Hamilton composed the collage.', price: null },
    { year: '1956–today', who: 'Sammlung Zundel · Kunsthalle Tübingen', place: 'Tübingen, Germany', note: 'Now in the Kunsthalle Tübingen, Tübingen, as part of the Sammlung Zundel (the Zundel Collection) held there. The full chain of ownership from 1956 to Tübingen is not detailed in the public record; the destination is firm. On view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Richard Hamilton', role: 'Composed the collage', palette: ['#7a3a6a', '#3a2a3a', '#140e14'] },
    { name: 'John McHale', role: 'Supplied the American images', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Eduardo Paolozzi', role: 'Put POP in a collage first, 1947', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'Alison & Peter Smithson', role: 'Got the 1957 definition by letter', palette: ['#5a6a52', '#39402e', '#12140e'] },
    { name: 'Lawrence Alloway', role: 'Critic credited with the term', palette: ['#6a6354', '#39322a', '#120f0c'] },
  ],
  annotations: [
    { label: 'The lollipop that reads POP', where: 'Held upright by the bodybuilder, center, the giant disc on a stick angled toward the viewer', detail: 'The muscleman grips an oversized Tootsie Pop lollipop, big as a tennis racket, and its wrapper spells POP in block capitals. It reads at once as a sweet, a sight gag, and a label. It is often pointed to as a likely source of the movement’s name, but that is a celebrated coincidence, not a settled fact: the term “Pop art” is usually credited to the critic Lawrence Alloway and the Independent Group, and the first artwork to contain the word “POP” was Eduardo Paolozzi’s 1947 collage, not this one. So enjoy the pun, but hold the naming as a maybe.' },
    { label: 'The bodybuilder', where: 'Foreground center, the posed muscleman standing on the carpet', detail: 'A flexed, oiled bodybuilder, the male body sold as a sales image. He is a real man, Irvin “Zabo” Koszewski, lifted from a physique magazine (a Charles-Atlas TYPE, not Charles Atlas himself). He is the masculine half of the room’s pairing of bodies as product.' },
    { label: 'The pin-up on the couch', where: 'Left of center, the seated near-nude woman lounging on the sofa', detail: 'A burlesque pin-up reclines on the settee, a fringed lampshade on her head, the female body offered up exactly as the muscleman offers the male one. The two figures mirror each other across the room: both are advertisements made of skin.' },
    { label: 'The TV and the tape recorder', where: 'Right, the boxy television set; lower foreground, the reel-to-reel machine on the floor', detail: 'A television (a Stromberg-Carlson model in the source ad) and a reel-to-reel tape recorder (a Boosey & Hawkes machine) sit in the room as the new domestic gods. Entertainment and recording technology are installed as furniture, as central to the home as the sofa.' },
    { label: 'The romance comic on the wall', where: 'Upper left, the framed picture hung where a painting would go', detail: 'Where a family portrait or a landscape would hang, Hamilton frames a romance-comic cover (a Jack Kirby Young Romance) like a gallery painting. Pulp pinned up where a Rembrandt belongs, the old hierarchy of high and low turned upside down on the wall.' },
    { label: 'The vacuum ad, the brand marks, and the Earth ceiling', where: 'The Hoover ad running its hose up the staircase at right; the badge on the foreground; overhead, the planet filling the ceiling', detail: 'A Hoover vacuum-cleaner ad sends its hose absurdly up the stairs (“Ordinary cleaners reach only this far”); brand marks dot the room; and the ceiling, where plaster should be, is a photograph of the planet seen from space. The cosmos itself is pulled indoors and made part of the décor. Every surface in the room is somebody’s advertisement.' },
  ],
  lineage: {
    parents: [
      { label: 'Dada collage', mode: 'art' },
      { label: 'The Independent Group', mode: 'art' },
      { label: 'American consumer culture', mode: 'civ' },
    ],
    children: [
      { label: 'American Pop art', mode: 'art' },
      { label: 'Appropriation art', mode: 'art' },
      { label: 'The image-saturated home', mode: 'civ' },
    ],
  },
}
```

---

## PART B — the five chapters (art-section-reader.tsx)

```tsx
// ─────────────────────────────────────────────────────────────
// Just what is it that makes today's homes so different, so appealing?
// (Hamilton, 1956) — the five chapters
// ─────────────────────────────────────────────────────────────
function JwiTomorrow({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="London · 1956" title="A poster for a show called This Is Tomorrow" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the years after the Second World War, London was grey, rationed, and broke, and the brightest, most abundant thing on the horizon was <strong>America</strong> &mdash; not the real America, but the one that came over in glossy magazines: refrigerators the size of wardrobes, cars with fins, kitchens full of gadgets, advertisements for a comfort that bombed-out Britain could only read about. A loose circle of young London artists, designers, architects and critics had started meeting at the <strong>Institute of Contemporary Arts</strong> to talk about exactly this stuff &mdash; ads, Hollywood, science fiction, car styling, comic books &mdash; not to sneer at it but to take it seriously, as the real folk culture of the modern world. They called themselves the <strong>Independent Group</strong>, and they are, in hindsight, where Pop art was first thought up.
      </p>
      <p style={proseStyle}>
        One of them was a sharp, methodical painter and teacher named <strong>Richard Hamilton</strong> (1922&ndash;2011). In the summer of <strong>1956</strong>, the group took part in an exhibition at the <strong>Whitechapel Art Gallery</strong> in London with a title that captured the whole mood: <em>This Is Tomorrow</em>. It was a show about the near future &mdash; art, architecture and design teams each building an environment &mdash; and Hamilton was asked to make an image for the <strong>catalogue and the poster</strong>. What he made was a <strong>collage</strong>: a picture assembled by cutting images out of printed sources and pasting them down, rather than by drawing or painting them.
      </p>
      <p style={proseStyle}>
        And here is the first surprising fact, the one that sets the tone for everything after. The picture is <strong>tiny</strong>. People who know it only from posters and book covers imagine something wall-sized; the actual object is about <strong>ten and a quarter inches tall by nine and three-quarter inches wide</strong>, roughly the size of a single sheet of letter paper. A small thing, made for reproduction, that would go on to be called the first iconic work of an entire movement. In the <em>This Is Tomorrow</em> catalogue it was printed in plain <strong>black and white</strong>; the version we know in color is the original collage itself, which is the one we are going to look at.
      </p>
    </article>
  )
}

function JwiCutting({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1956" title="Nothing in it is drawn" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he most important thing to understand about how this picture was made is that Hamilton <strong>did not paint or draw a single mark of it</strong>. Every element is a photograph or an advertisement, cut out of a magazine with scissors and glued into place. The bodybuilder is a real photo of a real bodybuilder; the pin-up is a real pin-up; the television, the tape recorder, the tinned ham, the comic on the wall &mdash; each is an actual scrap of printed mass culture, lifted whole and reassembled into the shape of a living room.
      </p>
      <p style={proseStyle}>
        The raw material was largely American, and it largely came from a friend. <strong>John McHale</strong> (1922&ndash;1978), a fellow member of the Independent Group, had been in the United States and shipped back a stack of <strong>American magazines</strong> &mdash; the glossy ad-heavy kind Britain didn’t yet produce &mdash; along with a rough page layout for the catalogue. (McHale and the artist <strong>Magda Cordell</strong> are usually credited with feeding Hamilton this American image-bank.) So the picture has, fairly told, two hands behind it: <strong>McHale supplied the images</strong>, and <strong>Hamilton selected, cut, and composed them</strong> into the finished collage. McHale is not a co-author and Hamilton is not erasing him; the source pile was largely McHale’s, the arrangement is entirely Hamilton’s.
      </p>
      <p style={proseStyle}>
        That division of labor is the whole point of how Pop would work. In an older idea of art, the artist’s skill is in the <em>making</em> of the image &mdash; the drawing, the brushwork, the modeling of light. Here the artist’s skill is in the <strong>choosing and the placing</strong>. The images already exist, churned out by the millions by advertisers and printers; what Hamilton does is curate and arrange them so the room adds up to an argument. The hand that used to draw now cuts and pastes. The talent has moved from the wrist to the eye.
      </p>
    </article>
  )
}

function JwiLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A living room that is all product" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>L</DropCap>
        ook at it as what it pretends to be: a fashionable modern <strong>living room</strong>, seen straight on, the kind of aspirational interior a furniture catalogue or a homes magazine would show you. There is a carpet, a sofa, a staircase climbing up at the right, a coffee table, framed pictures on the wall. It looks, at a glance, like an ad for a comfortable life. Then you start naming the things in it, and the room turns into something stranger: a catalogue of <em>everything that was being sold</em> in 1956, crammed into one space.
      </p>
      <p style={proseStyle}>
        Start with the two bodies, because they anchor the room. Standing on the carpet, center, is a flexed, oiled <strong>bodybuilder</strong> &mdash; a real man, the physique-magazine champion <strong>Irvin “Zabo” Koszewski</strong>, the masculine ideal posed for sale. (He is a Charles-Atlas <em>type</em>, the muscle-ad strongman, not Charles Atlas himself.) Reclining on the sofa to his left is a burlesque <strong>pin-up</strong>, near-nude, a fringed lampshade perched on her head &mdash; the feminine ideal, sold the same way. The man and the woman mirror each other across the room: both are advertisements made of skin, the body itself turned into product.
      </p>
      <p style={proseStyle}>
        Now the thing the bodybuilder is holding, because it is the most-pointed-at object in twentieth-century collage. In one hand he grips an enormous <strong>lollipop</strong>, a Tootsie Pop blown up to the size of a tennis racket, and angled toward you so you can read its wrapper. The wrapper says, in fat block capitals, <strong>POP</strong>. It is a sweet; it is a gag; and it is, pointed at the viewer like that, the single word that would come to name a whole movement. We will come back, in a moment, to whether it <em>really</em> named the movement (the honest answer is: maybe, probably not). For now just register that the word is sitting right there in the middle of the picture, three years before “Pop art” became common usage.
      </p>
      <p style={proseStyle}>
        Then the gadgets. A boxy <strong>television set</strong> sits to the right (a Stromberg-Carlson model in the source ad), and a reel-to-reel <strong>tape recorder</strong> (a Boosey &amp; Hawkes machine) sits on the floor in the foreground &mdash; the new household gods, entertainment and recording technology installed as casually as a side table. On the wall, where you’d hang a family portrait or a landscape, Hamilton has framed a <strong>romance-comic cover</strong> (a Jack Kirby <em>Young Romance</em>), pulp pinned up like an old master. Up the staircase runs a <strong>Hoover vacuum-cleaner ad</strong>, its hose stretched absurdly far (“Ordinary cleaners reach only this far”). Brand marks dot the room, a <strong>tinned ham</strong> sits on the coffee table like a centerpiece, and a <strong>Ford emblem</strong> is tucked into the décor.
      </p>
      <p style={proseStyle}>
        And then look up. Where the ceiling should be &mdash; plaster, a light fitting, the top of an ordinary room &mdash; Hamilton has pasted a photograph of the <strong>Earth seen from space</strong>, the curve of the planet filling the room’s lid. It is the most quietly outrageous move in the picture: the cosmos itself pulled indoors and made part of the furnishings, the whole world available as décor. Stand back and take in the sum of it. There is not one surface in this living room that isn’t somebody’s advertisement. The home, the place that’s supposed to be private and warm and yours, has been built entirely out of things for sale.
      </p>
    </article>
  )
}

function JwiBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break" title="When advertising became fine-art material" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why this small collage is a break and not just a clever poster, picture what serious art was still <em>supposed</em> to be made of in 1956. Even the most modern painting drew its imagery from “high” sources: the human figure, landscape, myth, the formal puzzles of abstraction, the long tradition running back through the School of Paris. When modern life did get into art, it was filtered through the artist’s own hand &mdash; a Cubist still life, Léger’s machine forms. Advertising, comics, brand logos, pin-ups: that was “low” material, the province of commercial designers, beneath the dignity of a gallery wall.
      </p>
      <p style={proseStyle}>
        Hamilton walked straight across that line. He made a finished art object out of <strong>nothing but</strong> consumer and advertising imagery &mdash; magazine ads, a comic cover, brand marks, a pin-up, a bodybuilder, a photo of a tinned ham. Nothing is ennobled by being painted; the commercial image is admitted into art exactly as it came off the press. And the subject he chose for it is the sharp twist of the knife: the <strong>aspirational home</strong>, the very dream the ads were selling, reassembled until it reads as a <strong>catalogue of desire</strong> &mdash; every object in the room a thing you are meant to want and buy. The break Pop runs with is right here: that the imagery of advertising and mass culture is now legitimate, even primary, art material, and that the act of <strong>quoting and arranging found commercial images is itself the work</strong>.
      </p>
      <SectionHeader accent={accent} label="The key statement · 1957" title="Hamilton writes down what Pop is" />
      <p style={proseStyle}>
        A year after he made the collage, Hamilton wrote the sentence that reads almost like a caption to it. In a <strong>letter to the architects Alison and Peter Smithson, dated 16 January 1957</strong>, he set down a definition of the new thing he and his friends were after &mdash; not painting, but the <em>popular</em> culture they admired, with a list of the qualities he wanted art to take from it:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>&ldquo;Pop Art is: Popular (designed for a mass audience), Transient (short-term solution), Expendable (easily forgotten), Low cost, Mass produced, Young (aimed at youth), Witty, Sexy, Gimmicky, Glamorous, Big Business.&rdquo;</p>
        <p style={{ margin: 0, fontStyle: 'normal', fontSize: 13, opacity: 0.7 }}>&mdash; Richard Hamilton, letter to Peter and Alison Smithson, 16 January 1957</p>
      </blockquote>
      <p style={proseStyle}>
        Eleven qualities, and every one of them describes the living room you just looked at. (A note on the text, because it travels in slightly different forms: Hamilton wrote it as a stacked list with those little parentheticals; some sources quote it as one running sentence and drop the bracketed asides, and the date is sometimes given just as “1957.” The substance is stable.) Read it back against the collage and the two line up almost item for item: <em>Popular, Mass produced, Sexy, Glamorous, Big Business</em>. The picture is the argument made in scissors and glue; the letter is the same argument made in words.
      </p>
    </article>
  )
}

function JwiAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The name · scope it" title="Did the lollipop name Pop art?" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        ecause the word <strong>POP</strong> sits so boldly on that lollipop, the picture is forever credited with naming the whole movement. It is a lovely story, and it is probably not true. The term <strong>“Pop art”</strong> is usually credited to the British critic <strong>Lawrence Alloway</strong>, who used it in print around 1958 and did the most to popularize it, and to the wider Independent Group circle. And the first artwork to actually contain the word “POP” wasn’t Hamilton’s at all: it was a 1947 collage by <strong>Eduardo Paolozzi</strong>, <em>I Was a Rich Man’s Plaything</em>, where the word puffs out of a toy pistol, nearly a decade earlier. So the “POP” on Hamilton’s lollipop is a celebrated coincidence often pointed to as a source of the name, not a documented christening. Enjoy the pun; don’t bank the etymology.
      </p>
      <SectionHeader accent={accent} label="The versions" title="One original, two later remakes" />
      <p style={proseStyle}>
        Hamilton liked the idea enough to return to it. There are <strong>later versions</strong>, and it matters which one you are looking at. In <strong>1992</strong> he made a digital reworking, <em>Just what is it that makes today’s homes so different?</em>, built on a Quantel Paintbox computer and swapping in a female bodybuilder; in <strong>2004</strong> he made another, the wryly titled <em>Just what was it that made yesterday’s homes so different, so appealing? (upgrade)</em>. Those are separate works. The one in this read &mdash; the famous one, the founding one &mdash; is the small <strong>1956 paper collage</strong>, cut and pasted by hand, the one first printed in black and white for <em>This Is Tomorrow</em>.
      </p>
      <SectionHeader accent={accent} label="Where it went" title="A British icon, hanging in Germany" />
      <p style={proseStyle}>
        And that 1956 original now lives a little improbably far from the London it was made in. It belongs to the <strong>Sammlung Zundel</strong> (the Zundel Collection) and hangs at the <strong>Kunsthalle Tübingen</strong>, a museum in the south-German university town of Tübingen. The exact route it took from Hamilton’s table in 1956 to a German collection isn’t fully laid out in the public record, but the destination is firm: the most reproduced image in British Pop art is, today, a German museum holding.
      </p>
      <p style={proseStyle}>
        It is worth ending on the modesty of the thing. A picture the size of a sheet of letter paper, made of cut-up magazines for the catalogue of one London show, by a method anyone with scissors could copy, became the image that taught people what Pop art was before there was a Pop art to point to. Hamilton took the home, the most private room of modern life, and showed that it had quietly filled up with things for sale &mdash; the bodybuilder, the pin-up, the gadgets, the brands, the planet on the ceiling, and the lollipop in the middle that says, whether or not it named anything, exactly what all of it is.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'just-what-is-it': { tomorrow: JwiTomorrow, cutting: JwiCutting, looking: JwiLooking, break: JwiBreak, afterlife: JwiAfterlife },
```
