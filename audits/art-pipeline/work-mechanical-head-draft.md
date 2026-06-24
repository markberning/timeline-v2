# DRAFT — Raoul Hausmann, *Mechanical Head (The Spirit of Our Time)*

Authored through the art content pipeline. Two blocks: PART A (const for `src/lib/art-content.ts`), PART B (5 components + NARRATIVES registry comment for `art-section-reader.tsx`). Fact source: `audits/art-pipeline/work-mechanical-head-factpack.md`.

## PART A — const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Mechanical Head (The Spirit of Our Time) / Mechanischer
// Kopf (Der Geist unserer Zeit), Raoul Hausmann, c.1919–20,
// Centre Pompidou (MNAM), Paris. A flagship Dada work read.
// Authored through the art content pipeline (fact pack → Opus →
// 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['mechanical-head'] (Mch… prefix). FACT HANDLING
// (gate-locked): the attached-object list follows POMPIDOU'S
// AUTHORITATIVE caption ONLY (telescopic cup, leather case, pipe
// stem, "22" card, dressmaker's-tape piece, double-decimetre
// ruler, watch gear, printer's type-roller) — the popular list's
// camera segment / typewriter / "crocodile" wallet are flagged
// as "often described," NEVER asserted as the museum's. The date
// stays "c.1919–20" (Pompidou records 1919; scholarship suggests
// 1920–21). The Hausmann "no more capabilities than chance has
// glued to the outside of his skull" line is QUOTED AS ONE
// TRANSLATION (it circulates in several), not as the fixed
// original. Höch custody 1922–1966 is hedged (Pompidou-linked).
// PD-US by pre-1930 publication (Hausmann d. 1971 → EU © through
// 2041, a separate EU-only claim) → rights: 'pd-us'.
// ─────────────────────────────────────────────────────────────
export const MECHANICAL_HEAD: ArtWorkContent = {
  id: 'mechanical-head',
  name: 'Mechanical Head',
  shortName: 'Mechanical Head',
  year: 1920,
  artist: 'Raoul Hausmann',
  artistId: 'hausmann',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Assemblage: a wooden wig-maker’s dummy head with manufactured objects fixed to it',
  dimensions: '1 ft 0 3/4 in × 8 1/4 in × 7 7/8 in',
  location: 'Centre Pompidou (Musée national d’art moderne), Paris',
  acquired: 'Purchase, 1974 (inv. AM 1974-6)',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 4, total: 9 },
  hook: 'A barber’s blank wooden head with a tin cup, a ruler, a tape measure, a watch gear and a printer’s roller bolted to it, Berlin Dada’s portrait of the ordinary modern man as a vacant skull with his instruments stuck on the outside.',
  heroImage: ART_IMG.hausmannHead,
  heroCredit: 'Hausmann, The Spirit of Our Time (Mechanical Head), c.1920 · Centre Pompidou, Paris',
  heroAspect: 1.16, // 783 × 674 photo → W/H ≈ 1.16, slightly landscape
  heroFit: 'contain', // the whole small object, never cropped
  rights: 'pd-us',
  stats: [
    { v: 'c.1920', k: 'Made' },
    { v: '~1 ft tall', k: 'Dimensions' },
    { v: 'Centre Pompidou', k: 'Now at' },
  ],
  sections: [
    { id: 'berlin', eyebrow: 'Berlin · 1919', dateLabel: 'c.1919–20', title: 'Dada in the wreckage of a lost war', blurb: 'Germany has lost the First World War and the streets of Berlin are full of revolution, hunger and fury. Hausmann and a handful of friends turn Dada into the most openly political wing of the movement, and Hausmann, a painter, poet and inventor of photomontage, reaches for a barber’s dummy head and a fistful of office junk.', progress: 0.1 },
    { id: 'building', eyebrow: 'The making', dateLabel: 'c.1920', title: 'A head you assemble instead of carve', blurb: 'He does not model the head or cast it. He takes a ready-made wooden wig-maker’s dummy and fixes manufactured oddments to it: a collapsible cup, a leather case, a pipe stem, a card reading “22,” a piece of a dressmaker’s tape, a wooden ruler, a watch gear and a printer’s type-roller. The choosing and the bolting, not the carving, are the art.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The object', dateLabel: '~1 ft tall', title: 'The empty face and the gadgets stuck to it', blurb: 'The smooth blank wooden face, deliberately vacant, and the ring of instruments of money, measurement and time fixed where thought should be. Following the museum’s own caption, item by item, and flagging the camera and typewriter that popular descriptions wrongly add.', progress: 0.58 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'c.1920', title: 'When a head could be built from junk', blurb: 'For centuries sculpture meant a head carved or modelled from a noble material by the artist’s hand. Hausmann assembles one from cast-off manufactured things and lets the human head become a thing built from junk, its spirit emptied out, the man defined by the apparatus bolted to the outside of his skull.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1922–today', title: 'The only one of its kind to survive', blurb: 'Hannah Höch kept it for decades; the Centre Pompidou bought it in 1974. It is the only assemblage of its kind by Hausmann to survive, and it sits in the line that runs from Duchamp’s readymades to Rauschenberg’s combines: the found object glued to a base, made into a portrait of the modern condition.', progress: 0.96 },
  ],
  provenance: [
    { year: 'c.1920–1922', who: 'Raoul Hausmann (the artist)', place: 'Berlin', note: 'Made in Berlin around 1919–20 (the date is genuinely uncertain: the museum records 1919, while later scholarship points to 1920–21). Hausmann kept it as the only assemblage of its kind he is known to have made that survives.', price: null },
    { year: '1922–1966', who: 'Hannah Höch (Hausmann’s partner and Berlin Dada collaborator)', place: 'Berlin / Germany', note: 'By the Pompidou-linked account, the piece was in Höch’s keeping from 1922 to 1966, then returned to Hausmann. The exact custody dates are reported through that account, so treat them as the record gives them rather than as independently confirmed fact. No sale figure is documented.', price: null },
    { year: '1974–today', who: 'Centre Pompidou (Musée national d’art moderne)', place: 'Paris', note: 'Purchased by the museum in 1974, inventory AM 1974-6, where it has remained. On view.', price: 'Museum purchase, 1974', museum: true },
  ],
  figures: [
    { name: 'Raoul Hausmann', role: 'The maker; co-founder of Berlin Dada', palette: ['#9a8a6a', '#3a3226', '#14100a'] },
    { name: 'The everyman', role: 'The blank modern head the work satirizes', palette: ['#b8ad95', '#5a513e', '#1c160e'] },
    { name: 'Berlin Dada', role: 'Höch, Heartfield, Grosz, Baader, Huelsenbeck', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { name: 'Hannah Höch', role: 'Partner and collaborator; later its keeper', palette: ['#6a5a3a', '#39301f', '#120d06'] },
    { name: 'The measuring instruments', role: 'Ruler, tape, watch gear: the man’s “faculties”', palette: ['#8a8472', '#4a4636', '#16130c'] },
  ],
  annotations: [
    { label: 'The blank wooden face', where: 'The whole base form: a smooth, expressionless head with closed, carved-shut features', detail: 'The foundation is a barber’s or wig-maker’s wooden dummy, a found shop-fitting, not a sculpted likeness. Its face is deliberately vacant: the “spirit” the title promises is absent from the face itself. You can read it plainly as a manufactured wooden object, which is the point, since there is no artist’s modelling hand here at all, only a chosen and re-used thing.' },
    { label: 'The collapsible cup', where: 'Fixed to the head among the attached objects', detail: 'A collapsible, telescopic metal drinking cup (the museum’s gobelet téléscopique). One of the small apparatus of daily life bolted onto the skull as if it were one of the man’s own faculties: the thing he drinks from, stuck where a thought might be.' },
    { label: 'The leather case and the pipe stem', where: 'Attached to the head alongside the cup', detail: 'A small leather case or wallet and a pipe stem, the everyday gear of pocket and habit. (Many popular descriptions style the wallet as a “crocodile” or jewel wallet and add a camera segment and a typewriter; the museum’s own caption names neither a camera nor a typewriter, so those stay as “often described,” not as fact.)' },
    { label: 'The number “22”', where: 'On a white card fixed to the head', detail: 'A plain white card bearing the bare numeral 22. Identity reduced to a label, a figure, a filing number. It is the man-as-statistic motif made literal: not a name, a number.' },
    { label: 'The measuring instruments', where: 'The ruler and the strip of tape attached to the head', detail: 'A double-decimetre wooden ruler and a piece of a dressmaker’s tape measure. The rationalized, quantified modern man wearing the very tools that measure him, the apparatus of standardization fixed to the outside of his head.' },
    { label: 'The watch gear and the type-roller', where: 'Among the objects fixed to the dummy head', detail: 'A watch gear (a cog from a clock movement) and a roller of printer’s type. Time and standardized text, the machinery that runs and processes modern life, attached where thought should be. Together with the ruler, the tape and the “22,” the attachments are overwhelmingly instruments of measurement, money, time and print.' },
  ],
  lineage: {
    parents: [
      { label: 'Duchamp’s readymade', mode: 'art' },
      { label: 'Dada photomontage', mode: 'art' },
      { label: 'The machine age', mode: 'civ' },
    ],
    children: [
      { label: 'Surrealist object', mode: 'art' },
      { label: 'Rauschenberg’s combines', mode: 'art' },
      { label: 'Assemblage sculpture', mode: 'art' },
    ],
  },
}
```

## PART B — components + NARRATIVES registry

```tsx
// ─────────────────────────────────────────────────────────────
// Mechanical Head (Hausmann, c.1920) — the five chapters
// ─────────────────────────────────────────────────────────────
function MchBerlin({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Berlin · 1919" title="Dada in the wreckage of a lost war" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>D</DropCap>
        ada began in neutral <strong>Z&uuml;rich</strong> in 1916, in a cabaret full of exiles who decided that a civilization capable of the trenches of the First World War did not deserve to be taken seriously, and answered it with nonsense, accident and provocation. By 1919 it had jumped to <strong>Berlin</strong>, and in Berlin it grew teeth. Germany had lost the war. The streets were full of revolution, street-fighting, hunger and rage, and the new, fragile <strong>Weimar Republic</strong> (the German democracy founded in 1919 in the ruins of the empire) was being born in chaos. Berlin Dada became the most openly political wing of the whole movement.
      </p>
      <p style={proseStyle}>
        Its core was a tight, combative group: <strong>Raoul Hausmann</strong> (1886&ndash;1971), the Austrian-born painter, poet and theorist at the center of it; his partner and collaborator <strong>Hannah H&ouml;ch</strong> (1889&ndash;1978); the photomontage propagandist <strong>John Heartfield</strong>; the savage caricaturist <strong>George Grosz</strong>; and the provocateurs <strong>Johannes Baader</strong> and <strong>Richard Huelsenbeck</strong>. They made photomontages, manifestos, poster-poems and staged scandals, all aimed at the German establishment that had marched a generation into the mud and then lost.
      </p>
      <p style={proseStyle}>
        Hausmann was the group&rsquo;s restless inventor. He is one of the (disputed) inventors of <strong>photomontage</strong>, the technique of building a new image by cutting up and reassembling printed photographs; he and H&ouml;ch said the idea came to them on a 1918 Baltic holiday, looking at the framed soldier-portraits that hung in every house. He was also a <strong>sound poet</strong>, writing &ldquo;optophonetic&rdquo; poster-poems out of loose letters and raw phonemes. The drive underneath all of it is the same: make meaning by combining the found and the nonsensical. Around 1920 he aimed that drive at a new kind of object. He reached for a barber&rsquo;s wooden dummy head and a fistful of office and household junk, and assembled a head.
      </p>
    </article>
  )
}

function MchBuilding({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · c.1920" title="A head you assemble instead of carve" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, the date, because it is genuinely uncertain and you will see it stated three different ways. The museum that owns the piece records it as 1919; recent scholarship leans toward 1920&ndash;21; popular accounts mostly just say 1920. The honest answer is <strong>c.1919&ndash;20</strong>, and nothing in the work depends on pinning it tighter than that.
      </p>
      <p style={proseStyle}>
        Now the making, which is the whole point. Hausmann did not <strong>model</strong> this head in clay, did not <strong>carve</strong> it from wood or stone, did not <strong>cast</strong> it in bronze. He took a thing that already existed, a <strong>wooden wig-maker&rsquo;s dummy head</strong> (the smooth, featureless shop-fitting a barber or hatter props a wig or a hat on), and he <strong>fixed</strong> manufactured oddments to it. This is <strong>assemblage</strong>: a sculpture built by selecting and combining ready-made things rather than fashioning a form by hand. The artist&rsquo;s decision (this object, joined to that one), not the artist&rsquo;s carving hand, is what makes it art.
      </p>

      <SectionHeader accent={accent} label="The parts list" title="What is actually on it, by the museum’s own caption" />
      <p style={proseStyle}>
        Here is where care matters, because this is the single fact most often shipped wrong. There are two object lists in circulation. The one to trust is the <strong>Centre Pompidou&rsquo;s own caption</strong>, written by the museum that owns the piece. By that list, fixed to the wooden head are: a <strong>collapsible telescopic cup</strong>; a <strong>leather case</strong>; a <strong>pipe stem</strong>; a <strong>white card bearing the number &ldquo;22&rdquo;</strong>; a piece of a <strong>dressmaker&rsquo;s tape measure</strong>; a <strong>double-decimetre wooden ruler</strong>; a <strong>watch gear</strong> (a cog from a clock movement); and a <strong>roller of printer&rsquo;s type</strong>. About nine elements in all, on one dummy head.
      </p>
      <p style={proseStyle}>
        The other list, the one repeated across encyclopedias and tour blogs, adds a <strong>segment of an old camera</strong> and a <strong>typewriter part</strong>, and calls the wallet a &ldquo;crocodile&rdquo; or jewel wallet. The museum&rsquo;s caption names neither a camera nor a typewriter. They may be in some descriptions; they are not in the catalogue of the people who hold the object, so we will keep them as &ldquo;often described&rdquo; and not assert them. What both lists agree on is the character of the haul: it is overwhelmingly the apparatus of <strong>measurement, money, time and standardization</strong>. A ruler. A tape. A watch. A number. A wallet. The tools that measure, time, price and process a person.
      </p>
      <p style={proseStyle}>
        And there is a neat logic to who made this. The man who helped invent photomontage, who built faces out of cut-up photographs, has here done the same thing in three dimensions: instead of assembling a head from cut paper, he has assembled one from cut-loose manufactured objects. The <em>Mechanical Head</em> is photomontage stood up off the page.
      </p>
    </article>
  )
}

function MchLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The object" title="A small thing, not life-size" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it and the first surprise is the scale. This is a <strong>small object</strong>, a little over a foot tall (about 1 ft 3/4 in, roughly 32&nbsp;cm), the height of a large bottle. It is not a life-size head. The photographs that make it famous tend to fill the frame and lend it a monumental air it does not have in the room; in person it is a modest, almost pocketable thing, which only sharpens the joke. A portrait of modern man, the size of an ornament.
      </p>

      <SectionHeader accent={accent} label="The face" title="The blank where the spirit should be" />
      <p style={proseStyle}>
        Look at the face. It is a smooth, expressionless <strong>wooden dummy head</strong>, the features carved shut, the surface plainly that of a manufactured shop-fitting rather than a sculpted likeness. You can see the grain, the seam, the fact that it is a found object. This is deliberate, and it is the heart of the thing. The title promises &ldquo;the spirit of our time,&rdquo; and the face where you would look for a spirit is <strong>empty</strong>: closed, vacant, blank. Whatever defines this man, it is not coming from inside the skull.
      </p>

      <SectionHeader accent={accent} label="The attachments" title="The gadgets bolted where thought should be" />
      <p style={proseStyle}>
        It comes, instead, from the outside, from the ring of objects fixed to the head. Following the museum&rsquo;s caption, here is what is attached and roughly where it sits. A <strong>collapsible telescopic cup</strong> and a small <strong>leather case</strong> and a <strong>pipe stem</strong> are bolted on, the everyday apparatus of drinking, money and habit, stuck to the skull as if they were the man&rsquo;s faculties. (Many descriptions also identify a camera segment and a typewriter part here; the museum&rsquo;s own caption lists neither, so treat those as the popular telling, not the catalogue.)
      </p>
      <p style={proseStyle}>
        Then the instruments. A <strong>double-decimetre wooden ruler</strong> and a piece of a <strong>dressmaker&rsquo;s tape measure</strong>: the rationalized modern man literally wearing the tools that measure him. A <strong>white card</strong> with the bare number <strong>&ldquo;22&rdquo;</strong> on it, identity reduced to a figure, a filing label, the man as a statistic. And a <strong>watch gear</strong> and a <strong>roller of printer&rsquo;s type</strong>: the clock that times him and the print that processes him, time and text, the machinery of modern life, attached exactly where thought should be.
      </p>
      <p style={proseStyle}>
        Take in the whole of it at once and the argument arrives without a caption. Here is a hollow wooden head, its face shut and vacant, with the instruments of measurement, money, time and standardization fixed to the outside of the skull. The man is not the head. The man is the gadgets bolted to it.
      </p>
    </article>
  )
}

function MchBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A head was something you carved" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or as long as there had been sculpture, a head meant a head <strong>carved or modelled</strong> by the artist&rsquo;s hand from a noble material: marble, bronze, clay. The point of it was to portray a person or to idealize one, and the human head in particular was the seat of mind and soul, the most serious thing a sculptor could make. Even the boldest modern sculptors before this still <strong>shaped</strong> the head: Rodin pressed it out of clay, Brancusi polished it down to an egg of stone. The material was worked. The hand was the art.
      </p>

      <SectionHeader accent={accent} label="The break · what changed" title="The artist’s choice, not the artist’s hand" />
      <p style={proseStyle}>
        Hausmann does none of that. He <strong>assembles</strong> the head out of <strong>found, ready-made junk</strong>, a barber&rsquo;s wooden dummy plus office and household oddments, and he <strong>fixes them rather than fashioning them</strong>. This is <strong>assemblage</strong>, or found-object sculpture: the work is the selecting and the combining, not the carving. It is the readymade idea (Duchamp&rsquo;s notion, a few years earlier, that an artist could make art simply by <em>choosing</em> a manufactured object) pushed into three-dimensional portraiture. The human head, the old seat of mind and soul, becomes <strong>a thing built from cast-offs</strong>.
      </p>
      <p style={proseStyle}>
        And the meaning of that move is the <strong>mechanization of man</strong>. The brain is vacant; identity is bolted on from without. Hausmann said as much himself. In his own later writing on the work he described the everyday man, in a line that has come down to us in several English translations, this way:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px' }}>
        &ldquo;An average man has no more capabilities than those which chance has glued to the outside of his skull; his brain remains empty.&rdquo;
      </p>
      <p style={proseStyle}>
        That is genuinely Hausmann, from his retrospective account of the piece, though the exact English wording varies from source to source (&ldquo;average&rdquo; man or &ldquo;everyday&rdquo; man; &ldquo;glued to the outside of his skull&rdquo; or &ldquo;to his skull, on the exterior&rdquo;), so read it as one careful translation rather than a fixed original. It is also the work, restated. The face is the empty brain. The cup, the ruler, the tape, the watch gear, the number 22, the type-roller are the capabilities chance has glued to the outside. The piece reads, too, as a flat verdict on the war just ended, the industrial slaughter that had reduced men to machines and lives to statistics: man as apparatus, the spirit emptied out.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The found object, made into a portrait" />
      <p style={proseStyle}>
        From here the line is direct. The found object glued to a base, made to stand for the modern condition, runs out of Dada into Surrealist object-sculpture and onward into <strong>Robert Rauschenberg&rsquo;s &ldquo;combines&rdquo;</strong> of the 1950s and the whole later tradition of <strong>assemblage</strong>. After the <em>Mechanical Head</em>, building a &ldquo;portrait&rdquo; of a person or an age out of cast-off manufactured things was a legitimate way to make a sculpture. The carving hand was no longer the only way to make a head.
      </p>
    </article>
  )
}

function MchAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="The only one of its kind to survive" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        ne fact frames the whole afterlife of this piece: it is the <strong>only assemblage of its kind by Hausmann to survive</strong>. He is not known to have made a series of these; the others, if there were others, are gone. So the <em>Mechanical Head</em> carries the weight of the idea more or less alone, which is part of why it is so reproduced and so fought over. (Say it precisely: the only one of its kind to survive, not &ldquo;the only assemblage he ever made.&rdquo; The narrower claim is the safe one.)
      </p>
      <p style={proseStyle}>
        Its ownership chain, the <strong>provenance</strong> (the documented record of who has held a work of art, in order, from the maker to now), is short. By the account linked to the museum, the piece spent decades in the keeping of <strong>Hannah H&ouml;ch</strong>, Hausmann&rsquo;s partner and fellow Berlin Dadaist, from <strong>1922 to 1966</strong>, before returning to Hausmann. Those custody dates come through that single account, so they are best stated as the record gives them rather than as hard, independently confirmed fact. Then, in <strong>1974</strong>, three years after Hausmann&rsquo;s death, the piece was bought by the <strong>Centre Pompidou</strong> in Paris (more precisely its Mus&eacute;e national d&rsquo;art moderne), inventory number AM 1974-6, where it remains on view.
      </p>

      <SectionHeader accent={accent} label="Rights" title="Public domain in the US, in copyright in Europe" />
      <p style={proseStyle}>
        A word on rights, because the two halves of the answer disagree and both are correct. The work was <strong>made and published around 1920</strong>, before 1930, which makes a faithful photograph of it <strong>public domain in the United States</strong>; that is the basis on which its image is freely shown. In Europe it is a different story: Hausmann died in 1971, so under the European term of the author&rsquo;s life plus seventy years the work stays <strong>in copyright in the EU</strong> through 2041, and the museum asserts that claim there. The same object, free in one place and protected in another, depending only on the law you happen to be standing in.
      </p>

      <SectionHeader accent={accent} label="The legacy" title="A portrait of the spirit of the age" />
      <p style={proseStyle}>
        What Hausmann left is small enough to hold in two hands and large enough to have changed what sculpture could be. He took the most serious form in the whole tradition, the human head, and he refused to carve it, refused to ennoble it, refused to fill it. He built it from junk and left it empty, and he was right that the gesture would read. A century on, the blank wooden face with its cup and its ruler and its watch gear still says the thing he meant it to say about the rationalized, quantified, money-and-clock-ruled modern man: that his spirit is vacant, and what defines him is only the apparatus chance has glued to the outside of his skull.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'mechanical-head': { berlin: MchBerlin, building: MchBuilding, looking: MchLooking, break: MchBreak, afterlife: MchAfterlife },
```
