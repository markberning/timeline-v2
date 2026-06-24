# Work FINAL (reconciled) — Jasper Johns, *Flag* (1954–55) · id `flag`

Reconciler pass over `work-flag-draft.md`. Every [BLOCKER]/[FIX] from the three
gates folded; trivially-correct NICEs applied. Identifiers, section ids, and
component names unchanged from the draft.

Folded:
- **FACT (PASS clean):** Pearl St / Fulton St tightened to "adjacent, not the same
  building" (NICE-2); dream-quote reader restraint kept.
- **READ:** cut the "Two small honesties about that quote" meta/honesty-label block
  in FlgDream (kept substance as plain story; dropped the alternate-wording
  apparatus + "Which story?" aside); FlgLooking "the first thing to do is the thing
  nobody does" reworked to invitation, not judgment; FlgAfterlife provenance
  definition de-chattied ("by the way" cut); FlgBreak "One honest caveat" softened
  to plain prose.
- **FRAME:** dropped the false "no purchase figure survives / figures aren't in the
  public record" absence — replaced with the documented ~$1,000 Castelli-deal figure
  (reported), preserving the true point that MoMA paid nothing; added one clause
  situating Johns alongside Rauschenberg (parallel, shared milieu, not lone genius);
  let the Duchamp/readymade lineage surface once in prose.

Voice/format contract honored: no literal "—" anywhere in any rendered string
(PART A const fields use Unicode "–"; PART B JSX text uses `&mdash;`/`&ndash;`
entities, matching the live `art-section-reader.tsx` convention). Encaustic defined
on first use; 48-star flag; `rights:'in-copyright'`; dimensions in ft/in;
`heroAspect 1.43`, `heroFit:'contain'`.

---

## PART A — the const (append to `src/lib/art-content.ts`, register in `ART_WORK_CONTENT`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Flag (Jasper Johns, 1954–55), MoMA, New York (object 78805).
// The Pop-Art chain's work-read, though Johns is art-historically
// PROTO-Pop / Neo-Dada, NOT a card-carrying Pop artist; Flag PREDATES
// Pop and helped make it possible. Authored through the art content
// pipeline (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['flag'] (Flg… prefix).
// FACT HANDLING (gate-checked): it is a 48-STAR flag, which is CORRECT
// for 1954 (48 stars 1912–1959), NOT an error, a looking-point, never
// "50 stars." MEDIUM is encaustic + oil + collage on fabric mounted on
// plywood, three panels, NOT "oil on canvas." ENCAUSTIC = pigment in
// hot/melted wax; defined on first use. The DREAM origin is Johns's OWN
// account but the wording varies across his retellings, so it is
// attributed loosely ("Johns has said" / per MoMA), never pinned to one
// interview/date. The 1964 "Take an object…" note is a LATER statement
// of method and is omitted from the reader. RIGHTS = in-copyright
// (Johns b.1930, living): /en/ thumb, shown small under fair use, NOT
// pd-us. Provenance carries the documented Castelli-deal figure (Flag
// listed at ~$1,000 in the 1958 deal; Johnson bought it privately at
// that order, gave it to MoMA in 1973), so MoMA itself never paid for it.
// ─────────────────────────────────────────────────────────────
export const FLAG: ArtWorkContent = {
  id: 'flag',
  name: 'Flag',
  shortName: 'Flag',
  year: 1955,
  artist: 'Jasper Johns',
  artistId: 'johns',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Encaustic, oil, and collage on fabric mounted on plywood (three panels)',
  dimensions: '3 ft 6 1/4 in × 5 ft 0 5/8 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Gift of Philip Johnson in honor of Alfred H. Barr, Jr., 1973',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 3, total: 9 },
  hook: 'The Stars and Stripes, life-size and edge to edge, built up in pigmented hot wax over strips of newspaper, by a 24-year-old who said the picture came to him in a dream. The bridge out of Abstract Expressionism: is it a painting of a flag, or just a flag?',
  heroImage: ART_IMG.johnsFlag,
  heroCredit: 'Johns, Flag, 1954–55 · Museum of Modern Art, New York · in copyright, shown small under fair use',
  heroAspect: 1.43, // 107.3 × 153.8 cm → W/H ≈ 1.43, landscape
  heroFit: 'contain', // the whole three-panel flag, never cropped
  rights: 'in-copyright', // Johns b.1930, living → /en/ thumb, fair-use only, NOT pd-us
  stats: [
    { v: '1954–55', k: 'Painted' },
    { v: '48', k: 'Stars (right for 1954)' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'dream', eyebrow: 'New York · 1954', dateLabel: '1954', title: 'The painting that began in a dream', blurb: 'A 24-year-old from South Carolina destroys nearly all the art he owns and starts over with images he calls things the mind already knows: flags, targets, numbers. He has said the flag came to him in a dream, and the next morning he went out and bought the materials.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1954–55', title: 'Built in hot wax over newspaper', blurb: 'Not oil on canvas. Strips of newsprint dipped in molten wax, laid on a cut bedsheet over plywood, then worked in encaustic, pigment in hot wax, so each stroke freezes in place and the surface comes out lumpy, crusted, and handmade.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '3 ft 6 1/4 in × 5 ft 0 5/8 in', title: 'A flag that is also a painting of a flag', blurb: 'The 48-star field filling the panel edge to edge, the wax texture, the newsprint reading through the red and white, the brushy hand under the official design, the three joined panels, and the total absence of any background.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1954–55', title: 'A known sign as the whole subject', blurb: 'After Abstract Expressionism made the canvas a field of private feeling, Johns took a flat, common, already-known sign and painted it cool and deadpan, so the picture and its image become the same rectangle. The door it opened led to Pop.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1958–today', title: 'Too risky to buy, then a gift to MoMA', blurb: 'It debuts at Johns’s first solo show at Leo Castelli in 1958. MoMA’s Alfred Barr wants it but his trustees fear a painted flag could read as unpatriotic, so Philip Johnson buys it privately and gives it to the museum in Barr’s honor in 1973.', progress: 0.96 },
  ],
  provenance: [
    { year: '1954–1958', who: 'Jasper Johns (the artist)', place: 'New York', note: 'Painted 1954–55 (the canvas is dated 1954 on the reverse). Held by Johns until his first solo exhibition.', price: null },
    { year: '1958', who: 'Leo Castelli Gallery', place: 'New York', note: 'Shown in Johns’s first solo exhibition at the Leo Castelli Gallery, January 1958, the show that made his reputation overnight.', price: null },
    { year: '1958–1973', who: 'Philip Johnson (architect)', place: 'New York / New Canaan', note: 'MoMA’s founding director Alfred H. Barr, Jr. wanted Flag for the museum, but trustees worried a painted American flag could read as unpatriotic in the Cold War. Barr’s workaround: the architect Philip Johnson bought it privately, with the understanding it would come to MoMA later. Flag was listed at around $1,000 in the 1958 Castelli deal, and Johnson is generally said to have paid on that order; the exact private terms are reported rather than firmly documented.', price: '~$1,000 (reported, 1958 Castelli deal)' },
    { year: '1973–today', who: 'Museum of Modern Art', place: 'New York', note: 'In 1973, as Barr retired, Johnson gave Flag to MoMA, “Gift of Philip Johnson in honor of Alfred H. Barr, Jr.” The museum itself never paid for it. Object 78805. On view.', price: 'gift in honor of Barr', museum: true },
  ],
  figures: [
    { name: 'Jasper Johns', role: 'The painter', palette: ['#a83232', '#3a4a8a', '#15110c'] },
    { name: 'Robert Rauschenberg', role: 'Partner · fellow Neo-Dadaist', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'Leo Castelli', role: 'The dealer · 1958 solo show', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Alfred H. Barr, Jr.', role: 'MoMA director who wanted it', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
    { name: 'Philip Johnson', role: 'Bought it · gave it to MoMA', palette: ['#1c1c1c', '#a0a0a0', '#8a7a52'] },
  ],
  annotations: [
    { label: 'The 48-star field, filling the panel', where: 'The blue canton, top-left, with its grid of white stars, and the whole flag running clean to all four edges', detail: 'Count the stars: there are forty-eight, not fifty, and that is correct, not a mistake. The U.S. flag carried forty-eight stars from 1912 until 1959, when Alaska and Hawaii were admitted, so a 1954 flag has exactly this canton. The deeper point is where the flag sits: it is not in a picture, with sky or a pole or a wall around it. It is the picture, edge to edge, with no border and no room left over. That coextensiveness, the flag exactly filling the rectangle, is the whole engine of the work.' },
    { label: 'The encaustic, a surface of hardened wax', where: 'Everywhere across the colored field; clearest where the red and white stripes catch the light', detail: 'The thick, uneven, crusted surface is encaustic: pigment suspended in hot, melted wax. Because the wax cools and sets within seconds of touching the support, each stroke freezes where it lands instead of blending into the next, so the red, white, and blue stay separate and the whole surface builds up into ridges, drips, and lumps. It is the opposite of a flat, machine-printed flag: a national sign rendered in one of the oldest, slowest, most physically handmade techniques in painting.' },
    { label: 'Newspaper reading through the paint', where: 'Under the stripes and the blue canton, where scraps of printed text show through the wax', detail: 'Look into the colored areas and you can make out fragments of newsprint, actual strips of newspaper, dipped in the molten wax and collaged onto the fabric before the encaustic went over them, so the print stays half-visible through the translucent wax. Johns reportedly avoided headlines and political stories, using inconsequential clippings and ads, so the everyday printed word of the culture literally underlies the national symbol without commenting on it.' },
    { label: 'A handmade hand under an official design', where: 'The contrast between the flag’s rigid geometry and the loose, brushy way every inch of it is worked', detail: 'The flag’s design is fixed and official: the stripes are a set width, the stars a set grid, none of it Johns’s to invent. But the way it is painted is anything but rigid, the touch is loose, irregular, openly by hand. That tension, between the regular known pattern and the obviously handmade surface, is the painting’s quiet drama: the most impersonal image imaginable, made by the most personal and laborious means.' },
    { label: 'Three panels, joined', where: 'The two faint vertical seams where the three separate supports meet', detail: 'It is not one continuous sheet. The picture is built on three separate panels mounted on plywood, part of MoMA’s official medium line, not a guess. The flag is fabricated, in sections, the way a real flag is sewn together, which quietly reinforces the question the whole work poses: is this a depiction of a flag, or a constructed object that is itself a kind of flag?' },
    { label: 'No background, no depth, no scene', where: 'The entire surface, there is nothing behind, around, or in front of the flag', detail: 'Nothing recedes. Nothing sits in front of anything else. There is no setting, no horizon, no space for a figure to stand and look at a flag. The flag is frontal, flat, and exactly the size and shape of the thing you are looking at. That refusal of any background is what forces the famous question, is it a flag, or a painting of a flag?, because the image and the object have collapsed into one.' },
  ],
  lineage: {
    parents: [
      { label: 'Abstract Expressionism', mode: 'art' },
      { label: 'Marcel Duchamp’s readymade', mode: 'art' },
      { label: 'Cold War America', mode: 'civ' },
    ],
    children: [
      { label: 'Pop Art', mode: 'art' },
      { label: 'Minimalism', mode: 'art' },
      { label: 'Conceptual art', mode: 'art' },
    ],
  },
}
```

Register in `ART_WORK_CONTENT` (add `flag: FLAG,` to the existing map at the
Pop-Art position).

---

## PART B — the section components (append to `art-section-reader.tsx`, splice into NARRATIVES)

```tsx
// ─────────────────────────────────────────────────────────────
// Flag (Jasper Johns, 1954–55), the five sections
// ─────────────────────────────────────────────────────────────
function FlgDream({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1954" title="A 24-year-old burns it all and starts over" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1954, a young painter named <strong>Jasper Johns</strong> (born in Augusta, Georgia, in 1930, and raised in South Carolina) was living in lower Manhattan, in a loft on Pearl Street, a few doors from another young artist, <strong>Robert Rauschenberg</strong> (1925&ndash;2008), who lived nearby on Fulton Street and would become his closest companion and partner for the next years. The two were in and out of each other&rsquo;s studios, working their way past the reigning style in parallel; what Johns did was not a lone-genius flash but a move he and Rauschenberg were pushing toward together. Johns was twenty-four, mostly unknown, and supporting himself with odd jobs. And around this time he did something drastic: he <strong>destroyed essentially every piece of art he then owned</strong>, clearing the decks so he could start over and find out what kind of painter he actually wanted to be.
      </p>
      <p style={proseStyle}>
        What he started over with was a small set of ready-made, public images he didn&rsquo;t have to invent: <strong>flags, targets, numbers, letters, maps.</strong> He had a phrase for the kind of thing he was after &mdash; images that are <em>&ldquo;things the mind already knows.&rdquo;</em> The idea is that some pictures are so common, so completely fixed in everyone&rsquo;s head, that you stop actually looking at them: a target, a row of numerals, the Stars and Stripes. They are seen constantly and examined never. The instinct was close to <strong>Marcel Duchamp</strong>&rsquo;s readymade, the ordinary, already-made object the artist simply chooses rather than fashions; Johns took an image he hadn&rsquo;t composed and made it the whole subject of a painting, so that you would be forced to look hard at the thing you thought you already knew.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="The flag that arrived in his sleep" />
      <p style={proseStyle}>
        And the first of those signs, the one that started it, came to him &mdash; by his own account &mdash; in a dream. Johns has told the story many times, and the wording everyone now repeats, the version enshrined in MoMA&rsquo;s own text for the painting, goes like this:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>One night I dreamed that I painted a large American flag, and the next morning I got up and I went out and bought the materials to begin it.</p>
      </blockquote>
      <p style={proseStyle}>
        It is genuinely his own account, not a critic&rsquo;s invention, though the wording has shifted across his retellings over the years. What it tells you is plain enough: he did not labor toward the flag as a clever idea. The most loaded public image in America simply showed up, ready-made, in his sleep, and he went out the next morning and bought what he needed to build it.
      </p>
    </article>
  )
}

function FlgMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="Why it is not oil on canvas" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he single most common thing said about this painting is also wrong, and getting it right unlocks the whole work. <em>Flag</em> is <strong>not &ldquo;oil on canvas.&rdquo;</strong> MoMA&rsquo;s own catalogue line reads: <strong>encaustic, oil, and collage on fabric mounted on plywood, three panels.</strong> Every part of that is a fact you can see, and the surprising one is the first word.
      </p>
      <p style={proseStyle}>
        <strong>Encaustic</strong> is one of the oldest painting techniques there is: <strong>pigment suspended in hot, melted wax.</strong> You keep the wax molten on a heat source, mix your color into it, and brush it on while it&rsquo;s liquid &mdash; and here is the crucial part, because it controls everything about how the painting looks: the wax <strong>cools and hardens within seconds</strong> of touching the surface. So each stroke <em>freezes where it lands</em>. It does not flow into the next stroke, it does not blend, it does not smooth out. The red sets before it can run into the white. The result is a surface that builds up thick and uneven, full of <strong>drips, ridges, and crusts</strong> of pigmented wax. Where a normal oil painting wants to look seamless, an encaustic painting keeps the record of every separate touch.
      </p>

      <SectionHeader accent={accent} label="Newspaper and a bedsheet" title="A flag made of the everyday" />
      <p style={proseStyle}>
        Now the rest of the recipe, which is just as physical. Johns started not with a fresh canvas but with <strong>fabric</strong> &mdash; widely described as a <strong>cut bedsheet</strong> &mdash; which he mounted on plywood and penciled the flag&rsquo;s outline onto. Then, before the color, he laid down <strong>collage</strong>: strips of ordinary <strong>newspaper</strong>, dipped in the molten wax and pressed onto the fabric. Only then did the encaustic go over the top. Because the wax stays slightly translucent, the newsprint never fully disappears; you can still read scraps of printed words and ads through the red, white, and blue. He reportedly used inconsequential clippings, steering clear of headlines and political stories, so the literal stuff underneath the national symbol is just the throwaway printed paper of an ordinary day.
      </p>
      <p style={proseStyle}>
        And it was built in <strong>three separate panels</strong>, mounted side by side on the plywood, not one continuous sheet. That is in MoMA&rsquo;s medium line, and it is part of the point: the flag is <em>fabricated</em>, assembled in sections, the way a real flag is sewn together rather than painted in one go. So the picture is constructed at every level &mdash; bedsheet, newsprint, wax, three joined panels. It is less a painting <em>of</em> a flag than a flag <em>made</em>, by hand, out of the slowest materials available. (The canvas is dated 1954 on the back; MoMA dates the finished work 1954&ndash;55, which is why you see both years.)
      </p>
    </article>
  )
}

function FlgLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Count the stars" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The picture is modest in size for how famous it is &mdash; about <strong>three and a half feet tall by five feet wide</strong>, a wide landscape rectangle. And here is what the famous image never gets: its stars. Count them &mdash; there are <strong>forty-eight</strong>, not fifty. A modern eye half-registers that as a mistake. It isn&rsquo;t. The United States flag carried <strong>forty-eight stars from 1912 until 1959</strong>, when Alaska and Hawaii were admitted as the forty-ninth and fiftieth states. Johns painted this in 1954&ndash;55, so a forty-eight-star canton is exactly, historically correct. The flag is right. It is your memory of <em>today&rsquo;s</em> flag that is wrong, and that little jolt &mdash; looking hard at the thing you were sure you knew &mdash; is the whole experience Johns was after.
      </p>
      <p style={proseStyle}>
        Notice next where the flag <em>sits</em>, which is everywhere. The blue field is up in the top-left corner, where it always is, but the flag is not hung <em>inside</em> a picture. There is no sky, no pole, no wall, no shadow, no room around it. The flag runs <strong>clean to all four edges</strong> and fills the rectangle exactly. The thing depicted and the object you are looking at are the same size and the same shape. <strong>There is no background at all.</strong> Nothing recedes; nothing stands in front of anything. That absence is not an oversight; it is the entire move, and we&rsquo;ll come back to what it does in the next section.
      </p>

      <SectionHeader accent={accent} label="The surface" title="A handmade thing under a machine-made design" />
      <p style={proseStyle}>
        Now look <em>into</em> the surface rather than at the image, and a second painting appears under the first. The colored field is <strong>thick, lumpy, and crusted</strong> &mdash; ridges and drips of pigmented wax, each stroke frozen in place by the cooling encaustic. And down inside it, under the stripes and the canton, you can read <strong>scraps of newspaper</strong>: actual printed text, collaged on and left half-visible through the translucent wax. The everyday word-fabric of the city, literally underneath the national symbol.
      </p>
      <p style={proseStyle}>
        Hold those two things together, because their friction is the painting. The flag&rsquo;s <em>design</em> is rigid, official, and impersonal &mdash; a fixed grid of stars, a set count of stripes, none of it Johns&rsquo;s to invent or arrange. But the <em>handling</em> is the opposite: loose, brushy, openly worked by hand, every touch left showing. The most impersonal image in American life, made by the most personal and laborious possible means. And the seams of the <strong>three joined panels</strong> are faintly there too, the reminder that this flag was assembled in pieces, like a real one. The regular known pattern pulling one way, the irregular human surface pulling the other &mdash; that tension is the engine of the whole picture.
      </p>
    </article>
  )
}

function FlgBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="What Johns was painting against" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why this small flag mattered so much, you have to know what filled the New York galleries when Johns made it. The reigning style was <strong>Abstract Expressionism</strong>: huge, non-representational canvases by painters like <strong>Jackson Pollock</strong>, <strong>Willem de Kooning</strong>, and <strong>Mark Rothko</strong>, meant to register the artist&rsquo;s inner state and the very act of painting &mdash; Pollock&rsquo;s poured skeins, de Kooning&rsquo;s slashing strokes, Rothko&rsquo;s floating fields of color. The whole program pointed <em>inward</em>, toward private feeling and the drama of the gesture, and <em>away</em> from any recognizable subject. A painting was supposed to be a window onto the artist&rsquo;s soul, and emphatically <em>not</em> a picture of an ordinary thing.
      </p>

      <SectionHeader accent={accent} label="The break" title="A known sign as the whole subject" />
      <p style={proseStyle}>
        Johns broke with all of that in the calmest way imaginable: he made the entire subject a <strong>common, flat, already-known sign.</strong> Not his inner state &mdash; the U.S. flag, a design he didn&rsquo;t invent, rendered at full size, frontal, edge to edge. There was nothing to <em>compose</em>; the flag&rsquo;s arrangement is given. There was no expressive scene, no feeling to externalize, no background to fall away into. And so something strange and specific happens that does not happen in an Abstract Expressionist canvas: the <strong>depiction and the object collapse into one rectangle.</strong> A Rothko is unmistakably a painting <em>of</em> nothing in particular; Johns&rsquo;s <em>Flag</em> is so flat, so frontal, and so exactly coextensive with its own image that you genuinely cannot say whether you are looking at <em>a painting of a flag</em> or simply <em>a flag.</em> The picture <em>is</em> its image. That collapse is the break.
      </p>
      <p style={proseStyle}>
        And the <em>tone</em> of it was the other half of the shock. Where Abstract Expressionism was hot, anguished, and personal, Johns&rsquo;s touch with this loaded national symbol was <strong>cool, detached, deadpan</strong> &mdash; he simply set the flag down and let it be a flag, refusing to tell you whether it meant patriotism, irony, or nothing at all. (That detachment is real, even though, paradoxically, the wax surface is one of the most intensely hand-worked in modern painting. The <em>handling</em> is laborious; the <em>attitude</em> is impassive. Both at once.)
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The door it opened, and where Johns really stands" />
      <p style={proseStyle}>
        By treating a flat, mass-culture sign as a perfectly good thing to paint, <em>Flag</em> opened a door. Within a few years <strong>Pop Art</strong> walked through it &mdash; <strong>Andy Warhol</strong> with his soup cans and <strong>Roy Lichtenstein</strong> with his blown-up comic panels, taking images straight from the culture with the same deadpan. And the work&rsquo;s flatness, literalness, and seriality fed forward into <strong>Minimalism</strong> and <strong>Conceptual art</strong> as well. It is routinely named one of the hinge pictures of postwar art.
      </p>
      <p style={proseStyle}>
        There is one thing to place correctly. <strong>Johns is not, strictly, a Pop artist.</strong> Art historians usually file him under <strong>Neo-Dada</strong>, or call him <strong>proto-Pop</strong> &mdash; a forerunner rather than a card-carrying member like Warhol or Lichtenstein. <em>Flag</em> (1954&ndash;55) actually <em>predates</em> Pop&rsquo;s arrival by several years; it is one of the things that <em>made Pop possible</em>. So the right way to place this picture is as a <strong>bridge</strong>: it leads out of Abstract Expressionism and toward Pop, standing in the doorway between them. Not the first Pop painting, but the one that cleared the ground.
      </p>
    </article>
  )
}

function FlgAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Castelli · 1958" title="An overnight reputation" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or a few years <em>Flag</em> sat mostly unseen. Then, in <strong>January 1958</strong>, the dealer <strong>Leo Castelli</strong> (1907&ndash;1999) gave Johns his <strong>first solo exhibition</strong>, and it made him famous almost at once. The show was a sensation; one of the most influential galleries of the era launched one of the defining careers of the era, and <em>Flag</em> was at the center of it. (Provenance is the documented chain of who has owned a work, in order, from the artist&rsquo;s hand to now.)
      </p>

      <SectionHeader accent={accent} label="Provenance · 1958–1973" title="Too patriotic, or not patriotic enough?" />
      <p style={proseStyle}>
        What happened next is the best story in the painting&rsquo;s life, and it turns on the flag itself. <strong>Alfred H. Barr, Jr.</strong> (1902&ndash;1981), the founding director of the <strong>Museum of Modern Art</strong>, saw the Castelli show and wanted <em>Flag</em> for MoMA. But his trustees balked. This was the <strong>Cold War</strong>, and a committee worried that a painted American flag &mdash; a flag, made strange, hung in an art museum &mdash; might be read as <strong>&ldquo;unpatriotic,&rdquo;</strong> as if Johns were doing something disrespectful to the national symbol. The very loadedness that made the picture powerful made the museum nervous to own it.
      </p>
      <p style={proseStyle}>
        Barr found a way around the problem. He persuaded the architect <strong>Philip Johnson</strong> (1906&ndash;2005) to <strong>buy <em>Flag</em> privately</strong>, with the understanding that it would come to MoMA later, once the heat had passed. It changed hands twice &mdash; Johnson bought it (for a sum reported at the time as around a thousand dollars, the figure attached to <em>Flag</em> in the 1958 Castelli deal) and then gave it to the museum &mdash; so MoMA never paid a cent for the painting it had been too cautious to buy. In <strong>1973</strong>, as Barr was retiring, Johnson <strong>gave the painting to the museum in Barr&rsquo;s honor</strong>, which is precisely what the credit line still records: <em>&ldquo;Gift of Philip Johnson in honor of Alfred H. Barr, Jr.&rdquo;</em> The painting MoMA had been too cautious to buy in 1958 it received, free, fifteen years later.
      </p>

      <SectionHeader accent={accent} label="After" title="The first of many flags" />
      <p style={proseStyle}>
        <em>Flag</em> was also a beginning for Johns himself. He returned to the motif again and again over the following years &mdash; <em>White Flag</em> (1955), <em>Three Flags</em> (1958), and a long line of later flag paintings and prints &mdash; but the MoMA picture, the one that came out of the dream, is the <strong>first</strong>. It hangs in New York today, in copyright and still owned by a living artist, the small wax-and-newspaper flag that walked American painting out of one era and into the next without ever raising its voice.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  flag: { dream: FlgDream, making: FlgMaking, looking: FlgLooking, break: FlgBreak, afterlife: FlgAfterlife },
```
