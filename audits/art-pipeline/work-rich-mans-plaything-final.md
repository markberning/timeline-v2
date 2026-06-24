# FINAL (reconciled) — *I was a Rich Man's Plaything* (Eduardo Paolozzi, 1947)

Reconciler/reviser pass. Folds every [BLOCKER] (none) and [FIX] from the three gates
(fact, read, frame) plus the coordinator-confirmed calls:
- FACT-1: dropped the contested "46-print" portfolio count (sources split 45/46).
- FACT-2: softened Coca-Cola "Lower right" → "in a lower corner" (prose + annotation).
- The Paolozzi "patterns of irony" quote is now sourced (Studio International, Paolozzi /
  Ballard / Whitford) and is stated as a real, attributed quote; the "carved in stone" hedge
  is removed from prose and the provenance moved to a code comment.
- READ: redundant Making¶3/Looking inventory trimmed; reader-commands made declarative;
  honesty-labels struck; "people assume / surprises people" framings eased.
- FRAME: "first POP" kept scoped (first known appearance of the word in this context; the
  movement came later and was NOT named from it; the "POP!" is toy-gun packaging); made-1947
  vs shown-1952 kept distinct; "Bunk" qualified as a mostly-wordless image presentation;
  "almost nobody thought of as art at all" rescoped to the *material*, not to collage itself;
  sculptor weighting added; "dozens" of collages noted; IG "inaugural meeting" softened, not
  strengthened.

VOICE/FORMAT: no literal `—` in any rendered string; PART A const + MeanwhileSheet props use
plain ASCII commas/parens/colons and straight or curly typographic quotes only (zero
`&`-entities); JSX prose keeps `&mdash;`/`&ndash;`/`&ldquo;`/`&rsquo;`. rights:'in-copyright';
"Presented by the artist, 1971"; dimensions in inches; heroAspect 0.67; heroFit 'contain'.
Identifiers, section ids, and component names are identical to the draft.

Section ids (ascending): `setting` → `making` → `looking` → `reception` → `legacy`.

---

## PART A — const (splice into `art-content.ts`, register in `ART_WORK_CONTENT`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, I was a Rich Man's Plaything (Eduardo Paolozzi, 1947) — the unique 1947
// paper collage (Tate T01462), NOT the 1972 BUNK! screenprint edition. One of the
// collages later gathered as Ten Collages from BUNK. Pop Art works chain, index 2
// of 9. rights: in-copyright (Paolozzi d. 2005) — hero shown SMALL + credited under
// fair use; chapters carry no inline reproductions of the collage. Chapter prose in
// art-section-reader.tsx NARRATIVES['…'] (Rmp… prefix). Authored gates-first.
// TRAPS handled: the printed "POP!" is cut from TOY POP-GUN packaging (coincidence,
// NOT the source of the movement's name); title lifted from the Intimate Confessions
// pulp cover; made 1947, first shown 1952 (the "Bunk" presentation, inaugural
// Independent Group, ICA London, via epidiascope, mostly wordless); presented by the
// artist 1971 (not purchased).
// ─────────────────────────────────────────────────────────────
export const RICH_MANS_PLAYTHING: ArtWorkContent = {
  id: 'rich-mans-plaything',
  name: "I was a Rich Man's Plaything",
  shortName: "Rich Man's Plaything",
  year: 1947,
  artist: 'Eduardo Paolozzi',
  artistId: 'paolozzi',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Collage (printed papers on card)',
  dimensions: '14 1/8 in × 9 3/8 in',
  location: 'Tate, London',
  acquired: 'Presented by the artist, 1971 (acc. T01462)',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 2, total: 9 },
  hook: 'A letter-paper-sized scrapbook of American ads and pulp covers, glued together in austerity Britain, with a printed "POP!" in it a decade before anyone called the movement that.',
  heroImage: ART_IMG.paolozziPlaything,
  heroCredit: "Paolozzi, I was a Rich Man's Plaything, 1947 · Tate, London · in copyright, shown small under fair use.",
  heroAspect: 0.67, // support 359 × 238 mm, W/H = 238/359 ≈ 0.66 → 0.67 (portrait)
  heroFit: 'contain', // the whole collage, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '1947', k: 'Made' },
    { v: '14⅛″ × 9⅜″', k: 'Dimensions' },
    { v: 'Tate', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Austerity Britain · 1947', dateLabel: '1947', title: 'A window onto a country he had never seen', blurb: 'Two years after the war, Britain is still on ration books, and a young Scottish-Italian sculptor is collecting the bright American magazines that GIs leave behind, the cheap printed proof of a richer world across the Atlantic.', progress: 0.08 },
    { id: 'making', eyebrow: 'Paris · 1947–49', dateLabel: '1947', title: 'Cutting up the American dream', blurb: 'In a Paris attic Paolozzi scissors apart ads, pulp covers and toy packaging and glues the scraps onto a single sheet of card, lifting the whole title straight off a magazine cover.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The collage', dateLabel: '14 1/8 in × 9 3/8 in', title: 'What is actually stuck to the card', blurb: 'The pin-up in red, the pistol firing "POP!", the Coca-Cola fragment, the bomber, the slice of cherry pie, all of it readymade commercial print, butted and overlapped with the seams left showing.', progress: 0.56 },
    { id: 'reception', eyebrow: 'The "Bunk" presentation', dateLabel: '1952', title: 'Thrown on a wall at the ICA', blurb: 'Made in 1947, shown to no one for five years, then projected by epidiascope when the Independent Group, the London circle that would think Pop Art into being, first convened.', progress: 0.78 },
    { id: 'legacy', eyebrow: 'After', dateLabel: '1952–today', title: 'The "POP!" that came a decade early', blurb: 'Often cited as the first appearance of the word inside a work of this kind, gathered into the BUNK! series, given by the artist to the Tate in 1971, and read backward as the moment the supermarket first walked into the gallery.', progress: 0.96 },
  ],
  provenance: [
    { year: '1947', who: 'Eduardo Paolozzi (the artist)', place: 'Paris', note: 'Made during his Paris years (1947–49) out of American magazines, much of the raw material given to him by American servicemen. Kept by the artist; not exhibited at the time.', price: null },
    { year: '1947–1952', who: 'Eduardo Paolozzi', place: 'Paris / London', note: 'One of a growing group of collages from cheap print. First shown publicly only in 1952, projected by epidiascope in the "Bunk" presentation at the ICA, London, when the newly formed Independent Group first convened.', price: null },
    { year: '1952–1971', who: 'Eduardo Paolozzi', place: 'London', note: 'Held by the artist; later gathered with the others as the group Tate catalogues as Ten Collages from BUNK (dated 1947–52).', price: null },
    { year: '1971–today', who: 'Tate', place: 'London', note: 'Presented to the Tate Gallery by the artist around his 1971 retrospective (given, not purchased). Accession T01462. Held in the Prints and Drawings collection, view by appointment.', price: 'presented by the artist', museum: true },
  ],
  figures: [
    { name: 'Eduardo Paolozzi', role: 'The maker', palette: ['#7c3aed', '#2a1c3a', '#0e0814'] },
    { name: 'American servicemen', role: 'Supplied the magazines', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Lawrence Alloway', role: 'Named "Pop art," later', palette: ['#b44d3b', '#3a2018', '#140a08'] },
    { name: 'The Independent Group', role: 'Its first audience, 1952', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Henry Ford', role: 'Gave the BUNK! its name', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
  ],
  annotations: [
    { label: 'The pulp-romance pin-up', where: 'The largest clipping, filling most of the sheet: a woman in red', detail: 'The biggest fragment is the cover of a pulp confessions magazine, Intimate Confessions, a woman in red ringed by its own sensational cover lines ("Daughter of Sin," "Woman of the Streets"). The title of the whole collage is lifted word for word off this cover, so even the name of the picture is a found object, not a phrase Paolozzi wrote.' },
    { label: 'The "POP!" pistol burst', where: 'Over the pin-up: a man’s hand and pistol, firing a white cartoon burst', detail: 'A hand holding a pistol fires the word "POP!" in a white comic-strip burst. The "POP!" was not lettered by Paolozzi; it was cut intact from the packaging of a toy pop-gun, where it meant nothing more than the bang the toy makes. That printed 1947 "POP" is the famous detail, the word sitting inside a picture roughly a decade before "Pop art" was a phrase, and it is a coincidence: the movement was not named after this burst.' },
    { label: 'The Coca-Cola logo', where: 'In a lower corner, a fragment of a soda advertisement', detail: 'A piece of a Coca-Cola advertisement is dropped in whole, the single most recognizable badge of American consumer culture, glued down without comment. To a Briton on ration books in 1947, a Coke logo read as a small bright emblem of a country with everything to spare.' },
    { label: 'The WWII bomber', where: 'Lower left, an aircraft carrying a wartime slogan', detail: 'A wartime aircraft (usually identified as a Lockheed Hudson or Ventura type) flies across the lower left under the slogan "Keep ’em flying!" The war that had only just ended is still bleeding into the consumer imagery, the same printed stream selling both the bomber and the soda.' },
    { label: 'The cherry pie', where: 'A cherry and a slice of pie, set among the rest', detail: 'A glossy cherry and a slice of cherry pie, the food-ad shorthand for American domestic plenty, sit jarringly close to the gun and the pin-up. Abundance, glamour and violence are all cut from the same magazines and pressed flat onto the same card.' },
    { label: 'The magazine-cutting texture', where: 'Across the whole sheet, the visible edges where scraps meet', detail: 'Separate printed scraps, each with its own paper edge, typeface and color registration, are butted and overlapped on card. The seams are left showing on purpose. The picture is openly an assembly of mass-produced print, not a smooth illustration pretending to be one image.' },
  ],
  lineage: {
    parents: [ { label: 'Dada photomontage', mode: 'art' }, { label: 'American advertising', mode: 'civ' }, { label: 'Post-war austerity Britain', mode: 'civ' } ],
    children: [ { label: 'The Independent Group', mode: 'art' }, { label: 'British Pop Art', mode: 'art' }, { label: 'American Pop Art', mode: 'art' } ],
  },
}
```

---

## PART B — narrative components (splice into `art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// I was a Rich Man's Plaything (Paolozzi, 1947) — the five chapters.
// rights: in-copyright — no inline reproduction of the collage; prose pointers only.
// Reception ¶3 quote: "...unless one emphasises and arranges the images into patterns
// of irony the point will be lost." Source: Eduardo Paolozzi in conversation with
// J. G. Ballard and Frank Whitford, Studio International (tied to his Tate retrospective).
// ─────────────────────────────────────────────────────────────
function RmpSetting({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Austerity Britain · 1947" title="A window onto a country he had never seen" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1947</strong>, Britain was two years past the war and still living on <strong>ration books</strong> &mdash; the little coupon booklets that capped how much food, clothing and fuel a household could buy, because so much was still in short supply. Meat was rationed, sweets were rationed, and would stay that way for years. Into this gray, careful country leaked something bright and excessive from across the Atlantic: <strong>American magazines</strong>. Glossy ads for cars and soda, lurid pulp-fiction covers, full-color packaging for things you could not get here &mdash; the printed exhaust of a society that, to a young Briton queuing for bread, looked impossibly rich.
      </p>
      <p style={proseStyle}>
        The young man cutting them up was <strong>Eduardo Paolozzi</strong> (1924&ndash;2005), born in <strong>Leith</strong>, the dock district of Edinburgh, to Italian immigrant parents who ran an ice-cream shop. He had trained as a sculptor, and would become one of post-war Britain&rsquo;s major ones &mdash; the <em>Newton</em> outside the British Library and the Tottenham Court Road tube mosaics are his &mdash; so these glued-up sheets were a private side-channel, not his day job. But he was a magpie for printed images, and he was hungry for exactly the material the magazines were full of. He had never been to America. He knew it only the way the rest of Britain did, through this stream of advertising, and to him it read as an &ldquo;exotic society, bountiful and generous&rdquo; &mdash; a place glimpsed entirely through its own salesmanship.
      </p>
      <p style={proseStyle}>
        Where did the magazines come from? Largely from <strong>American servicemen</strong>, who had them and passed them on. (The collecting really got going during Paolozzi&rsquo;s years in <strong>Paris</strong>, 1947&ndash;49, where he was living when he made this collage; some of the material was picked up in London shops too.) The point is simply that this stuff was not freely on sale to him. It arrived as a gift or a leftover, secondhand, the way anything desirable arrived in 1947. He hoarded it &mdash; and then he did something almost no one had yet done with <em>this</em> material, the throwaway commercial print of the American magazine. He started gluing it down.
      </p>
    </article>
  )
}

function RmpMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1947–49" title="Cutting up the American dream" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he method could not be simpler, which is part of why it was so radical. Paolozzi took scissors to the magazines, cut out the fragments he liked, and pasted them onto a single sheet of <strong>card</strong> &mdash; a <strong>collage</strong> (from the French <em>coller</em>, &ldquo;to glue&rdquo;: a picture assembled from glued-on scraps rather than painted). No oil, no canvas, no drawing of his own to speak of. The picture is made of other people&rsquo;s printed pictures, rearranged. The Tate, which owns it, describes the object plainly as &ldquo;printed papers on card.&rdquo;
      </p>
      <p style={proseStyle}>
        And it is <strong>small</strong>. It is about <strong>fourteen inches by nine</strong> (35.9 by 23.8 cm), smaller than a sheet of letter paper, a thing you could hold on your lap. Everything in it is packed into that little portrait-format sheet, which is its own kind of surprise for a picture this famous.
      </p>
      <p style={proseStyle}>
        Even the <em>title</em> is a found object. <em>I was a Rich Man&rsquo;s Plaything</em> is not a phrase Paolozzi coined &mdash; he lifted it, word for word, off the largest clipping in the collage: the cover of a pulp confessions magazine called <strong><em>Intimate Confessions</em></strong>, a woman in red surrounded by sensational teaser lines like &ldquo;Daughter of Sin&rdquo; and &ldquo;Woman of the Streets.&rdquo; The title of the artwork is just the headline of the trashy magazine it is partly made of. The rest of what is stuck to the card &mdash; the pistol, the soda logo, the bomber, the pie &mdash; comes next.
      </p>
    </article>
  )
}

function RmpLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The collage" title="What is actually stuck to the card" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he biggest thing on the sheet is the <strong>pin-up in red</strong>, and it sets the terms for everything else. She is the cover girl of <em>Intimate Confessions</em>, and the magazine&rsquo;s own cover lines are still printed around her &mdash; &ldquo;Daughter of Sin,&rdquo; &ldquo;Woman of the Streets,&rdquo; and the line that became the title. This is the anchor of the whole picture, and the first lesson in how it works: Paolozzi did not draw a glamorous woman, he <em>cut one out</em>, lines of cover-copy and all, and let the printed scrap do the work.
      </p>
      <p style={proseStyle}>
        Then the famous detail. Over her, a man&rsquo;s <strong>hand and pistol</strong> fire the word <strong>&ldquo;POP!&rdquo;</strong> in a white comic-strip burst. It is worth being exact about, because it gets mythologized. Paolozzi did not letter that &ldquo;POP&rdquo; himself; he cut it, already printed, off the <strong>packaging of a toy pop-gun</strong>, where it meant nothing grander than the noise the toy makes. It is a gunshot sound effect, lifted whole. That it reads, decades later, like a prophecy of &ldquo;Pop art&rdquo; is a genuine coincidence, and the coincidence is worth getting right.
      </p>
      <p style={proseStyle}>
        Around these two, the rest of the American hoard. In a lower corner, a fragment of a <strong>Coca-Cola</strong> advertisement &mdash; the single most recognizable badge of American consumer culture, dropped in whole, no comment attached. Lower left, a <strong>wartime bomber</strong> (usually identified as a Lockheed Hudson or Ventura type) under the slogan &ldquo;Keep &rsquo;em flying!&rdquo;, the just-ended war still leaking into the consumer pictures. A citrus-juice logo (&ldquo;Real Gold&rdquo;). And tucked among them, a cherry and a slice of <strong>cherry pie</strong> &mdash; the food-ad shorthand for American plenty &mdash; sitting unnervingly close to the gun and the pin-up.
      </p>
      <p style={proseStyle}>
        The easiest thing to miss is <strong>how it is built</strong>. These are separate printed scraps, each with its own paper edge, its own typeface, its own slightly different color registration, butted and overlapped on the card with the <strong>seams left showing</strong>. Paolozzi did not blend them into one smooth image; the joins stay visible. The picture is openly an <em>assembly of mass-produced print</em>, and that visible, scrapbook construction is the point as much as any single fragment. It is not an illustration of consumer culture. It is consumer culture, cut up and glued down.
      </p>
    </article>
  )
}

function RmpReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="The &ldquo;Bunk&rdquo; presentation" title="Thrown on a wall at the ICA" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>P</DropCap>
          aolozzi made this in <strong>1947</strong> and showed it to essentially no one for <strong>five years</strong>. It was not painted to hang in a gallery. It was private material, part of a growing pile of these glued-up sheets. The collage only met an audience in <strong>1952</strong> &mdash; and not on a wall, but on one. Paolozzi projected it, with a run of dozens of his other collages, using an <strong>epidiascope</strong> (a projector that throws an enlarged image of a flat object, like a magazine page, onto a screen) in what became known as his <strong>&ldquo;Bunk&rdquo; presentation</strong> &mdash; mostly a wordless flood of projected images, with little spoken commentary. The pictures did the arguing.
        </p>
        <p style={proseStyle}>
          The setting matters. That session, at the <strong>ICA</strong> (the Institute of Contemporary Arts) in London, opened the <strong>Independent Group</strong> &mdash; a small, restless circle of British artists, architects and critics who met through the early 1950s to argue about exactly this: the flood of American advertising, science fiction, Hollywood and product design, and whether it was beneath serious attention or the most alive thing going. Paolozzi flicking up images of soda ads and pulp covers was, in effect, the opening shot. The name &ldquo;Bunk&rdquo; he took from the American industrialist <strong>Henry Ford</strong>, who had once said &ldquo;history is more or less bunk&rdquo; &mdash; a fittingly all-American shrug for a body of work made of all-American trash.
        </p>
        <p style={proseStyle}>
          On his own method, Paolozzi put it this way: where a classical artist might make hundreds of drawings, he was choosing among hundreds of ready-made images, picking one to act as a <em>metaphor</em> for a feeling, but, as he warned, &ldquo;unless one emphasises and arranges the images into patterns of irony the point will be lost.&rdquo; That is the key to it. The cutting is easy. The <em>arranging</em> &mdash; gun over pin-up, pie beside bomber &mdash; is where the meaning lives.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="London"
        when="1956 · four years later"
        title="The Independent Group puts Pop on a poster."
        body="That same London circle staged the show 'This Is Tomorrow' in 1956, where Richard Hamilton's tiny collage of a muscle-man holding a giant lollipop reading 'POP' became the other founding image of British Pop. The argument Paolozzi opened in 1952 had become a movement."
        palette={['#7c3aed', '#2a1c3a', '#0e0814']}
        ctaLabel="Read 'Pop Art'"
      />
    </>
  )
}

function RmpLegacy({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After" title="The &ldquo;POP!&rdquo; that came a decade early" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he reason this small sheet of glued paper is in the textbooks is the printed <strong>&ldquo;POP!&rdquo;</strong> &mdash; but the easy version of the claim is wrong. What this 1947 collage actually holds is the <strong>first known appearance of the word &ldquo;pop&rdquo; inside a work of this kind</strong>, roughly <strong>a decade before</strong> the movement got the name. What it did <em>not</em> do is invent or name Pop Art. The term &ldquo;Pop art&rdquo; was coined and popularized later, in the 1950s (the critic <strong>Lawrence Alloway</strong> is usually credited). And the movement was emphatically <em>not</em> named after this burst &mdash; the &ldquo;POP!&rdquo; is a toy-gun sound effect, a coincidence, not a baptism. It prefigures Pop; it does not found it.
      </p>
      <p style={proseStyle}>
        Two other things often get tangled with this one. There is also a <strong>1972 screenprint</strong> with this same title &mdash; a printed reproduction issued as part of Paolozzi&rsquo;s 1972 <em>BUNK!</em> screenprint portfolio, copies of which live in the V&amp;A and elsewhere. That is not this. <em>This</em> is the <strong>unique 1947 paper collage</strong>, the one-of-one original, and everything here describes the collage, not the print. And the two dates do not merge: <strong>made 1947, first shown 1952</strong>.
      </p>
      <p style={proseStyle}>
        The collage&rsquo;s own afterlife was quiet. It was gathered with the others into the group the Tate catalogues as <em>Ten Collages from BUNK</em>, and in <strong>1971</strong>, around his Tate retrospective, Paolozzi <strong>gave</strong> them to the gallery &mdash; presented, not sold. It hangs today in the <strong>Tate</strong> in London as accession T01462, held in the prints and drawings collection, viewable by appointment. Up close, the real surprise is still the smallness: one of the most consequential gestures in twentieth-century art is a letter-paper-sized scrapbook of someone else&rsquo;s advertisements.
      </p>
      <p style={proseStyle}>
        What makes it a <strong>break</strong> is what it treats as raw material. Serious art in 1940s Britain still filed pulp covers, soda ads, toy packaging and pin-ups under <em>throwaway</em> &mdash; beneath art. Collage itself was nothing new; the Cubists were gluing paper in 1912, and the Dada photomonteurs a generation earlier already cut commercial print &mdash; but they used it for shock or political montage, not as a celebration of consumer abundance. Paolozzi did the unthinkable thing: he treated the <strong>ready-made commercial image as the actual material and subject of art</strong>, lifting an ad, a pulp cover, a pop-gun wrapper intact and arranging them into a picture about glamour, consumption and the American mass-culture dream. He did it in <strong>austerity Britain in 1947</strong>, when those American goods were objects of longing, and he did it years before Pop Art existed as a named movement and roughly a decade before Warhol and Lichtenstein. The everyday printed surface of consumer capitalism had become, all at once, a legitimate thing to make a picture out of. The supermarket walked into the gallery, and it walked in here.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'rich-mans-plaything': { setting: RmpSetting, making: RmpMaking, looking: RmpLooking, reception: RmpReception, legacy: RmpLegacy },
```
