# Post-Impressionism — WORK reads, Author Draft B

Author deliverable for three Post-Impressionist WORK reads. Written ONLY from
`postimp-works-b-factpack.md` (zero-hallucination floor). House voice; no em-dashes;
dimensions ft/in only; legends handled per the pack's DISPUTED rules. Three consts +
their five `NarrativeFn` functions each + a fact ledger.

- `BATHERS_ASNIERES` (id `bathers-asnieres`) — sections: `riverbank` · `making` · `salon` · `reception` · `afterlife`
- `CARD_PLAYERS` (id `card-players`) — sections: `estate` · `making` · `reception` · `versions` · `afterlife`
- `MONT_SAINTE_VICTOIRE_LAUVES` (id `mont-sainte-victoire-lauves`) — sections: `lauves` · `making` · `reception` · `death` · `afterlife`

chain.total = 9 throughout (integrator renumbers chain.index app-wide).

---

## 1. const — Bathers at Asnières

```ts
// ─────────────────────────────────────────────────────────────
// Work, Bathers at Asnières (Seurat, 1884). The first POST-IMPRESSIONISM
// work read. Authored through the art content pipeline (fact pack →
// Opus draft → 5 gates → revise); narrative in art-section-reader.tsx
// under 'bathers-asnieres' (Ba… prefix).
// ─────────────────────────────────────────────────────────────
export const BATHERS_ASNIERES: ArtWorkContent = {
  id: 'bathers-asnieres',
  name: 'Bathers at Asnières',
  shortName: 'Bathers at Asnières',
  year: 1884,
  artist: 'Georges Seurat',
  artistId: 'seurat',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 7 in × 9 ft 10 in',
  location: 'The National Gallery, London',
  acquired: 'Acquired for the British national collection through the Courtauld Fund, 1924',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 1, total: 9 },
  hook: 'A working-class riverbank afternoon, painted nearly ten feet wide at the scale the Salon kept for kings, and then rejected by it, which started a jury-free rebel show.',
  heroImage: ART_IMG.seuratBathersAsnieres,
  heroCredit: 'Seurat, Bathers at Asnières, 1884 · The National Gallery, London',
  heroAspect: 1.49, // ~201 × 300 cm → W/H ≈ 1.49
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1883–84', k: 'Painted' },
    { v: '6′7″ × 9′10″', k: 'Dimensions' },
    { v: 'National Gallery', k: 'Now at' },
  ],
  sections: [
    { id: 'riverbank', eyebrow: 'Asnières · 1883', dateLabel: '1883', title: 'A bid at the scale of kings', blurb: 'Seurat, barely 24 and just out of art school, decides his first monumental canvas will be a working-class suburb cooling off in the Seine, with the factory chimneys of Clichy smoking across the water.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1883–84', title: 'Built from cigar-box sketches', blurb: 'About fourteen little oil studies on the riverbank, then a huge studio canvas brushed in long woven strokes Seurat called balayé, and, years later, a few pointillist dots added back in.', progress: 0.34 },
    { id: 'salon', eyebrow: 'Paris · 1884', dateLabel: '1884', title: 'Rejected, so he built his own Salon', blurb: 'The official Salon jury throws it out. In answer Seurat helps found a jury-free, prize-free rebel exhibition, the show that becomes the Salon des Indépendants.', progress: 0.58 },
    { id: 'reception', eyebrow: 'The verdict', dateLabel: '1884–86', title: 'A false Puvis, or a monster', blurb: 'Hung at the Indépendants as no. 261, shown in New York in 1886, and met with the usual mix: one critic calls it a false Puvis de Chavannes, another simply calls it monstrous.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1924–today', title: 'The launch of Neo-Impressionism', blurb: 'The critic who coined Neo-Impressionism owned it; the Courtauld Fund brought it to Britain in 1924; it is now a National Gallery centerpiece and the prelude to La Grande Jatte.', progress: 0.96 },
  ],
  provenance: [
    { year: '1884–c.1900', who: 'Seurat’s family / estate', place: 'Paris', note: 'Rejected by the 1884 Salon and shown instead at the inaugural Indépendants, the canvas stayed with the artist and, after his early death in 1891, with his family and circle. The exact intermediate owners are not fully pinned.', price: null },
    { year: 'c.1900', who: 'Félix Fénéon (the critic who coined “Neo-Impressionism”)', place: 'Paris', note: 'The champion of Seurat’s circle acquired it; he is the key early collector on the chain.', price: null },
    { year: '1924', who: 'The British national collection, via the Courtauld Fund', place: 'London', note: 'Bought for the nation through the fund Samuel Courtauld endowed to bring French modern art into British public collections.', price: 'acquired for the nation', museum: true },
    { year: '1924–1961', who: 'Tate Gallery', place: 'London', note: 'Hung at the Tate after the 1924 acquisition.', price: null, museum: true },
    { year: '1961–today', who: 'The National Gallery, London', place: 'London', note: 'Transferred from the Tate to the National Gallery in 1961, where it is a centerpiece of the collection (NG3908). On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Georges Seurat', role: 'The painter', palette: ['#5a7a8a', '#8a8048', '#1c2630'] },
    { name: 'Félix Fénéon', role: 'Coined “Neo-Impressionism”; early owner', palette: ['#5a7042', '#3a3c28', '#14140e'] },
    { name: 'The Indépendants', role: 'The jury-free show he helped found', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Paul Durand-Ruel', role: 'Dealer who showed it in New York', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Samuel Courtauld', role: 'His fund brought it to Britain', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The two techniques on one canvas', where: 'The boy in the water, right of center, hands cupped at his mouth', detail: 'The orange-red hat on his head carries the clearest patch of pointillist dots, tiny separate touches of orange against blue, that Seurat added back in years later. It is the one spot where you can see his two methods, the early woven brushwork and the later dot, sitting side by side on a single picture.' },
    { label: 'This is not Arcadia', where: 'The far bank, upper-left to center along the horizon', detail: 'Thin factory chimneys at Clichy, smoking. They are the tell that these bathers are not nymphs in a myth but clerks and workers on a hot day off, in an industrial suburb of Paris.' },
    { label: 'Modern infrastructure behind soft bodies', where: 'The bridge spanning the river in the background', detail: 'The railway bridge at Asnières, a hard horizontal of iron and modern transport stretched behind the still, rounded swimmers. The river that carries them is also the river the trains cross.' },
    { label: 'The man who is not swimming', where: 'The seated figure in the foreground, in a bowler hat, fully clothed', detail: 'The most prominent person in the picture is dressed, not bathing: a clerk on his day off, sitting on the bank. He anchors the whole social reading, that this is a picture of who gets to rest, and how.' },
    { label: 'Everyone alone, no one talking', where: 'Across the spaced-out figures along the bank', detail: 'Notice that the bathers do not interact. Each is isolated, still, set apart with the calm spacing of figures on an ancient frieze, which is why people compare the painting’s stillness to Piero della Francesca and to Puvis de Chavannes.' },
    { label: 'Woven strokes, not dabs', where: 'Across the grass and the water', detail: 'Look at the brushwork itself: long, controlled, criss-crossing strokes Seurat called balayé, “swept.” This is the smooth, hatched method he used before he invented the dot, and it is proof the canvas began before pointillism existed.' },
  ],
  lineage: {
    parents: [ { label: 'Puvis de Chavannes', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'Industrial Paris', mode: 'civ' } ],
    children: [ { label: 'Neo-Impressionism', mode: 'art' }, { label: 'A Sunday on La Grande Jatte', mode: 'art' }, { label: 'The Salon des Indépendants', mode: 'art' } ],
  },
}
```

## 1. NarrativeFns — Bathers at Asnières (Ba… prefix)

```tsx
function BaRiverbank({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Asnières · 1883" title="A bid at the scale of kings" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture the most modest thing a summer afternoon contains: a few young men and boys who have walked down to the river, stripped to their underclothes, and flopped on the bank to cool off. Nobody paints that. And nobody, certainly, paints it nearly <em>ten feet wide</em>, at the size the official art world kept locked away for gods, generals, and the deaths of kings. That is the picture you are about to look at. A working-class day at the water, blown up to the dimensions of a coronation.
      </p>
      <p style={proseStyle}>
        The painter was <strong>Georges Seurat</strong> (1859–1891), and in 1883 he was twenty-three years old, freshly out of the École des Beaux-Arts (the official Paris art school) and his military service, with a great deal of ambition and almost no reputation. This was to be his <strong>first monumental canvas</strong>, his bid to walk into serious art at full scale and announce himself. Most young men make that bid with a battle or a goddess. Seurat made it with a riverbank.
      </p>

      <SectionHeader accent={accent} label="The place" title="Asnières, where the factories show" />
      <p style={proseStyle}>
        The spot is real and specific: the bank of the Seine at <strong>Asnières</strong> (ah-nee-AIR), a working-class suburb on the western edge of Paris. This is the detail that makes the picture modern rather than mythical. Across the water, thin <strong>factory chimneys at Clichy</strong> stand smoking on the horizon; a <strong>railway bridge</strong> crosses the river in the background; and off to the right sits the tip of the <strong>Île de la Grande Jatte</strong>, the island that would be the subject of Seurat’s very next huge canvas. These are not nymphs in Arcadia. They are clerks and laborers, some of them still in their day clothes, taking the rest that an industrial city grudgingly allows.
      </p>
      <p style={proseStyle}>
        That is the quiet provocation. Seurat did not dress an ordinary scene up into a myth, and he did not paint a myth and pretend it was ordinary. He took exactly what was there, the smoke and the bridge and the bored bodies on the grass, and granted it the full seriousness and the full square footage that art had always reserved for its betters. The next chapter is how he built a thing that size.
      </p>
    </article>
  )
}

function BaMaking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Built from cigar-box sketches" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the size, because everything else answers to it. <em>Bathers at Asnières</em> is about <strong>6 feet 7 inches tall and 9 feet 10 inches wide</strong>. That is Salon scale, the acreage the official exhibition spent on history’s great moments. Seurat spent it on an afternoon by the river.
      </p>
      <p style={proseStyle}>
        He did not improvise a thing that big. He built it the patient, academic way. Out on the actual riverbank in 1883 he made roughly <strong>fourteen small oil studies</strong> he called <strong>croquetons</strong> (kro-keh-TOHN, “little sketches”), some of them painted on the lids of cigar boxes and other scraps of panel, plus a set of careful drawings in conté crayon (a hard drawing stick of compressed chalk and graphite). Then he carried all of it back to the studio and assembled the giant canvas from the parts, finishing it in the spring of <strong>1884</strong>. The on-the-spot freshness and the studio control are both in the final picture at once.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a7a8a', '#8a8048', '#1c2630']}
        imageUrl={ART_IMG.seuratBathersAsnieres}
        ratio="3/2"
        alt="Seurat, Bathers at Asnières"
        caption={<>Seurat,{' '}<em>Bathers at Asnières</em>, 1883&ndash;84, The National Gallery, London.</>}
        rights="Public domain in the US (published before 1929; Georges Seurat died 1891). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The brushwork" title="Balayé: swept, not dotted" />
      <p style={proseStyle}>
        Look closely at the grass and the water and you will see Seurat’s technique here was <em>not</em> yet the famous dot. He laid the paint in long, controlled, criss-crossing strokes he called <strong>balayé</strong> (bah-lah-YAY, “swept”), a woven, disciplined hatching. That is where the painting’s strange calm comes from: the surface is even and brushed, the figures are smooth and frieze-like, everyone is still. This is a picture about order, built stroke by careful stroke.
      </p>

      <SectionHeader accent={accent} label="The dots he added later" title="Two methods on one canvas" />
      <p style={proseStyle}>
        Here is the part people get wrong, so it is worth getting right. A few years <em>after</em> he finished the Bathers, around 1886 to 1887, Seurat had worked out a new method on his next big canvas, and he went back into this one and added small <strong>pointillist dots</strong> in a few places, most visibly around the orange-red hat of the boy out in the water. (Quick definitions, because the words get muddled: <strong>Pointillism</strong> is the popular name for painting in separate small dots; <strong>Divisionism</strong> is the more precise name for the underlying idea, placing separate touches of unmixed color so the eye, not the palette, does the blending. Seurat himself preferred “Divisionism” for the method. The two are not interchangeable: pointillism describes the dots, divisionism the color theory behind them.)
      </p>
      <p style={proseStyle}>
        But do not let anyone tell you he <em>repainted</em> the Bathers in dots. He did not. This was localized retouching, a hat here, an edge there, dropped into an already-finished canvas, not a conversion. What it leaves you with is rare and lovely: a single picture where you can see both of Seurat’s techniques at once, the early woven sweep across most of it and the later separate dots in a few small patches, the artist’s whole evolution caught on one wall.
      </p>
    </article>
  )
}

function BaSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1884" title="Rejected, so he built his own Salon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>{' '}
        canvas this size is made for one place: the <strong>Salon</strong>, the official annual State exhibition run by the academy, the single show in France where a young painter’s career was made or buried. Seurat submitted the Bathers to the Salon jury of <strong>1884</strong>, and the jury did the thing that turns out to be the pivot of the whole story.
      </p>
      <p style={proseStyle}>
        They rejected it.
      </p>
      <p style={proseStyle}>
        A lesser response would have been to sulk and resubmit something tamer next year. Seurat’s response was to help dismantle the gatekeeper. With a group of other refused and restless artists he became a founding member of a new society, the <strong>Groupe des Artistes Indépendants</strong>, and the Bathers went straight into their <strong>inaugural exhibition</strong> in the spring of 1884, catalogued as no. 261. The principle of the new show was the exact opposite of the Salon’s: no jury, no prizes, anyone could hang. It hardened into a fixture under the name the <strong>Salon des Indépendants</strong>, and for decades afterward it was one of the central stages of the avant-garde (the experimental, rule-breaking edge of the art world). A rejection meant to bury a young painter instead helped him build the room that buried the jury’s monopoly.
      </p>
      <p style={proseStyle}>
        That is the line worth holding from this read: the Bathers matters not only as a picture but as a cause. The thing the official system threw out became the founding exhibit of the system that replaced it.
      </p>
    </article>
  )
}

function BaReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The verdict" title="A false Puvis, or a monster" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        o how did people actually take it? About the way new things usually get taken: with a shrug from most and a snarl from a few. Out from under the Salon’s roof and onto the rebel walls of the Indépendants, the Bathers got mixed early notices rather than instant glory.
      </p>
      <p style={proseStyle}>
        The critic <strong>Paul Alexis</strong> reached for the unkindest comparison he could find and called it a false <strong>Puvis de Chavannes</strong> (a revered older painter of pale, calm, frieze-like murals), though even he conceded the picture had conviction. The insult is also a tell: the stillness and the friezelike spacing that made critics think of Puvis are exactly the qualities people now admire in it. When the painting traveled to New York in <strong>1886</strong>, shown by the dealer <strong>Paul Durand-Ruel</strong> at the National Academy of Design, a reviewer for the <em>Sun</em> reached for blunter words still and called it, in effect, monstrous and vulgar.
      </p>
      <p style={proseStyle}>
        Treat those exact quotes lightly, as the flavor of the reception rather than gospel wording. The shape of it is what counts: a huge, strange, deliberate picture by an unknown young man, landing as a puzzle. People did not quite know what to do with the calm of it, the smoke in it, the seriousness it spent on so plain a scene. The not-knowing is the point. The Bathers was early.
      </p>
    </article>
  )
}

function BaAfterlife({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="From the circle to the nation" title="Fénéon to the Courtauld Fund" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>S</DropCap>
          eurat died young, at thirty-one, in 1891, with the Bathers still essentially in the family’s keeping. Its early champion was <strong>Félix Fénéon</strong>, the critic who actually coined the word “<strong>Neo-Impressionism</strong>” for what Seurat and his circle were doing, and who acquired the canvas around 1900. The intermediate owners between the family and Fénéon are not fully pinned, so treat him as the key early collector rather than the whole chain.
        </p>
        <p style={proseStyle}>
          The picture left France for good in <strong>1924</strong>, bought for the British national collection through the <strong>Courtauld Fund</strong> (the money the textile magnate Samuel Courtauld set aside to bring French modern art into British public galleries). It hung first at the Tate, then crossed to the <strong>National Gallery in London in 1961</strong>, where it is a centerpiece today. You can stand in front of all ten feet of it any day the gallery is open.
        </p>

        <SectionHeader accent={accent} label="Why it still matters" title="The launch of a movement" />
        <p style={proseStyle}>
          The Bathers reads now as the <strong>launch of Neo-Impressionism</strong> and as the prelude to its more famous sibling, <em>A Sunday on La Grande Jatte</em> (1884–86, the Art Institute of Chicago), which Seurat painted next, on the very island you can see at the right edge of this canvas. The two pictures are a matched pair: the same suburb, the same Sunday leisure, the second one carrying the dot technique the first only sampled. They are also a deliberate study in social geography, the Bathers showing working-class men cooling off on the south bank while La Grande Jatte shows the bourgeoisie at their leisure on the island across the same river.
        </p>
        <p style={proseStyle}>
          And the show it helped found outlived everyone. The jury-free Indépendants became, for decades, the place where the new thing in French art could be seen first. A picture the official Salon rejected ended up naming a method, anchoring a museum, and opening a door. Not bad for an afternoon by the river.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="London"
        when="1924 · the year it crossed the Channel"
        title="A British fund goes shopping for French modern art."
        body="The Courtauld Fund, endowed to bring French modernism into British public collections, buys the Bathers for the nation in 1924. The picture that the official Paris Salon had thrown out forty years earlier becomes a fixed point of the British canon."
        palette={['#6b6b6b', '#3a3a3a', '#1c1c1c']}
        ctaLabel="Read the Impressionism overview"
      />
    </>
  )
}
```

## 1. Fact ledger — Bathers at Asnières

| Claim in prose | Pack source |
|---|---|
| Title, oil on canvas, 1883–84 (studies 1883, big canvas finished spring 1884) | §1 Identity, The making |
| ~6 ft 7 in × 9 ft 10 in (Salon scale) | §1 Dimensions (ft/in line) |
| National Gallery London; Courtauld Fund 1924; Tate then NG 1961; NG3908 | §1 Location/accession |
| Seurat ~24, fresh from École des Beaux-Arts + military; first monumental canvas | §1 Where it came from |
| ~14 croquetons (cigar-box lids) + conté drawings, composed in studio | §1 Where it came from / making |
| Setting: Seine bank at Asnières, Clichy chimneys, railway bridge, Grande Jatte at right | §1 Setting depicted (safe phrasing) |
| balayé woven strokes, NOT dots | §1 The making (technique) |
| dots added LATER c.1886–87, localized (boy’s hat/contours), not a repaint | §1 Documented vs legend (handled per DISPUTED #1) |
| Pointillism vs Divisionism distinction; Seurat preferred “Divisionism” | house-rule inline-define (term precision) |
| Rejected by 1884 Salon → founded Groupe/ Salon des Indépendants, no. 261 | §1 Reception |
| Shown NY 1886 by Durand-Ruel; “false Puvis” / “monstrous” attributed loosely | §1 Reception (quotes treated as representative) |
| Fénéon coined Neo-Impressionism, owned it c.1900; chain gaps flagged | §1 Provenance |
| Launch of Neo-Impressionism; prelude to La Grande Jatte (Chicago 1884–86) | §1 Afterlife |

---

## 2. const — The Card Players

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Card Players (Cézanne, c.1894–95). The Musée d'Orsay
// two-player version (smallest, generally read as last of five).
// Authored through the art content pipeline; narrative in
// art-section-reader.tsx under 'card-players' (Cp… prefix).
// ─────────────────────────────────────────────────────────────
export const CARD_PLAYERS: ArtWorkContent = {
  id: 'card-players',
  name: 'The Card Players',
  shortName: 'The Card Players',
  year: 1895,
  artist: 'Paul Cézanne',
  artistId: 'cezanne',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 6½ in × 1 ft 10½ in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Camondo bequest to the French State, 1911',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 2, total: 9 },
  hook: 'Two estate laborers at a small table, a bottle between them, looking at their cards in total silence, the quiet gravity of men at work given the seriousness a history painter would save for a saint.',
  heroImage: ART_IMG.cezanneCardPlayers,
  heroCredit: 'Cézanne, The Card Players, 1894–95 · Musée d’Orsay, Paris',
  heroAspect: 1.2, // ~47.5 × 57 cm → W/H ≈ 1.2
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1894–95', k: 'Painted' },
    { v: '1′6½″ × 1′10½″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'estate', eyebrow: 'Aix-en-Provence', dateLabel: '1890s', title: 'The men from the estate', blurb: 'Cézanne in his fifties at the family estate near Aix, posing the local farm laborers he knew, men he set down playing cards in a plain rustic room with no story and no stakes, only weight.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: 'c.1894–95', title: 'Form built from patches', blurb: 'Over a dozen single-figure studies of seated smokers first, then a canvas built not from line and shadow but from flat modulated planes of color, the smallest, most distilled of five versions.', progress: 0.34 },
    { id: 'reception', eyebrow: 'The verdict', dateLabel: 'Then & now', title: 'The genre painting with the joke removed', blurb: 'Tavern card scenes were comedy, cheating and grimaces. Cézanne drained every anecdote out and left only two men and their concentration, and that stillness became a cornerstone of his late genius.', progress: 0.58 },
    { id: 'versions', eyebrow: 'Five canvases', dateLabel: '1890–95', title: 'Five versions, and the famous price', blurb: 'The series runs from a crowded five-figure canvas down to this stripped two-player one. A different two-player version sold to Qatar around 2011 for a reported sum that made headlines worldwide.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1911–today', title: 'Ancestor of Cubism', blurb: 'Bequeathed to France in 1911, stolen and recovered in the 1960s, reunited with its siblings in a 2010–11 exhibition, and read ever since as a direct ancestor of Cubism.', progress: 0.96 },
  ],
  provenance: [
    { year: 'c.1895', who: 'Ambroise Vollard (Cézanne’s dealer)', place: 'Paris', note: 'Vollard handled most of Cézanne’s late sales after 1895; the exact first-sale date for this canvas is not pinned.', price: null },
    { year: 'before 1911', who: 'Count Isaac de Camondo (collector)', place: 'Paris', note: 'Entered the celebrated Camondo collection in Paris.', price: null },
    { year: '1911', who: 'The French State (Camondo bequest)', place: 'Paris', note: 'Bequeathed to the nation on Camondo’s death and accepted for the national museums in 1911; entered the Louvre, later the Jeu de Paume.', price: 'bequest to the nation', museum: true },
    { year: '1961', who: 'Stolen, then recovered', place: 'Paris', note: 'Stolen in 1961 while in the French national collection (then held at the Jeu de Paume), and recovered after a ransom was paid. (Reported via secondary sources; kept light.)', price: null },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'Crossed into the Musée d’Orsay when it opened in 1986 to hold the national 19th-century collection. On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Paul Cézanne', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'The estate laborers', role: 'The sitters', palette: ['#6a5a3a', '#3a3020', '#14100a'] },
    { name: 'Ambroise Vollard', role: 'His dealer', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Count Isaac de Camondo', role: 'Bequeathed it to France', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Picasso & Braque', role: 'Heirs to the method', palette: ['#5a7042', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The axis of the whole picture', where: 'The wine bottle standing dead-center on the table', detail: 'A single bottle stands upright at the exact middle, splitting the canvas cleanly into two halves and acting as the pivot the two men are balanced around. It is the most pointed-to thing in the painting, a still vertical holding the composition together.' },
    { label: 'A study in balanced opposites', where: 'The left player against the right player', detail: 'On the left, a man sits upright in a dark coat with a taller hat, pipe and posture formal. On the right, a man in lighter, looser clothes and a shorter hat hunches forward over his cards. The two are deliberate opposites, weighed against each other across the table.' },
    { label: 'No stakes, no faces meeting', where: 'The hands and the cards, held low', detail: 'The cards are held close to the body and low; no eyes meet, no money is shown, no winner is hinted. Cézanne has stripped out every bit of anecdote that a tavern card scene usually carries. The stillness itself is the subject.' },
    { label: 'Solidity made from flat patches', where: 'The tablecloth and the table edge', detail: 'Look at how the cloth and table are built: not modeled with smooth gradual shadow but assembled from flat planes of color set side by side. Cézanne makes a thing feel solid out of patches, the method that would feed straight into Cubism.' },
    { label: 'Shapes that rhyme', where: 'The drape or curtain behind the left man', detail: 'The folds of the hanging cloth behind the left player echo the bulk and curve of the seated bodies. Cézanne rhymes shapes across the canvas instead of describing a real, measured room; the picture is built on visual echoes.' },
    { label: 'Weight in concentration, not action', where: 'The downcast eyes of both men', detail: 'Nothing happens, and that is the power of it. Both men look down, completely absorbed, and all the psychological weight of the picture sits in that quiet concentration rather than in any event.' },
  ],
  lineage: {
    parents: [ { label: 'Le Nain brothers', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'Provençal peasant life', mode: 'civ' } ],
    children: [ { label: 'Cubism', mode: 'art' }, { label: 'Picasso', mode: 'art' }, { label: 'Braque', mode: 'art' } ],
  },
}
```

## 2. NarrativeFns — The Card Players (Cp… prefix)

```tsx
function CpEstate({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Aix-en-Provence · 1890s" title="The men from the estate" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        wo men sit at a small table. There is a bottle between them. They are looking at their cards, and they are not speaking, and nothing is going to happen. That is the entire event of this painting, and it is one of the most quietly monumental pictures of the nineteenth century.
      </p>
      <p style={proseStyle}>
        The painter was <strong>Paul Cézanne</strong> (1839–1906), and by the time he made it he was in his fifties, settled at the family estate, the Jas de Bouffan, near <strong>Aix-en-Provence</strong> (eks) in the south of France. His models were the people around him: the <strong>local farm laborers and estate hands</strong>, men he actually knew, including, by tradition, a gardener. He set them down at a table and posed them playing cards in a plain, bare, rustic room. No drama, no narrative, no winner, no cheat. Just weight.
      </p>

      <SectionHeader accent={accent} label="Who they were" title="Real men, lightly named" />
      <p style={proseStyle}>
        It is tempting to name each sitter, and old accounts do, the gardener Père Alexandre among them, but the exact identity of each man is not firmly documented, so the honest version keeps it general: these were men from the estate, working people Cézanne saw every day, including a gardener. What matters is that they were real and ordinary, not hired allegories. Cézanne was not illustrating peasant life; he was painting specific neighbors with the seriousness a history painter (a painter of grand religious, mythological, or historical scenes) would spend on a saint. In doing so he was reaching back to the Le Nain brothers, seventeenth-century French painters of still, monumental peasant scenes, and pulling their dignity into modern painting.
      </p>
      <p style={proseStyle}>
        Hold that mismatch, because it is the engine of the picture, exactly as it was for Courbet a generation earlier (the Realism overview tells that story). Ordinary men, plain room, no story, and a gravity so total it feels almost sacred. The next chapter is how Cézanne built that gravity out of paint.
      </p>
    </article>
  )
}

function CpMaking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Form built from patches" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, the scale, because it is the opposite of the usual story. This version of <em>The Card Players</em> is tiny: about <strong>1 foot 6½ inches tall and 1 foot 10½ inches wide</strong>, the smallest of the whole series and the most distilled. You could carry it under one arm. The monumentality is entirely an effect of how it is built, not of how big it is. Few pictures pack so much gravity into so small a frame.
      </p>
      <p style={proseStyle}>
        Cézanne arrived at it the slow way. He made <strong>over a dozen preparatory studies</strong> first, single-figure oil portraits and drawings of seated players and smokers (the <em>Man with a Pipe</em> studies, now scattered across the Courtauld, the Hermitage, the Pushkin). Those single figures are masterpieces in their own right; the finished card games are what he assembled once he had the figures solved one at a time.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#7a6a4a', '#3a3020', '#100c08']}
        imageUrl={ART_IMG.cezanneCardPlayers}
        ratio="6/5"
        alt="Cézanne, The Card Players (Musée d'Orsay)"
        caption={<>C&eacute;zanne,{' '}<em>The Card Players</em>, 1894&ndash;95, Mus&eacute;e d&rsquo;Orsay, Paris.</>}
        rights="Public domain worldwide (Paul Cézanne died 1906). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The method" title="Solid form out of color planes" />
      <p style={proseStyle}>
        Now look at how the thing is actually painted. Cézanne does not build form the old way, with smooth shading running from light to dark to round a shape out. He builds it from flat, modulated <strong>planes of color</strong>, patches of one tone set firmly beside patches of another, what people call his <strong>constructive stroke</strong> (building an object’s solidity from small patches of flat color set side by side, instead of smooth shading). A coat, a tabletop, a face: each is assembled out of small blocks of color that read as solid because they are placed so deliberately. This is the method that would feed directly into <strong>Cubism</strong> twenty years later, form made of facets rather than described by line and shadow.
      </p>

      <SectionHeader accent={accent} label="Which came first" title="An order that is not settled" />
      <p style={proseStyle}>
        One careful note, because the tidy version is probably wrong. The traditional story is that Cézanne worked from the largest, most crowded card game down to this small, stripped one, big to small, busy to spare. But a conservation study at the Metropolitan Museum, examining the canvases under X-ray and infrared, has <strong>challenged that assumption</strong>: the evidence suggests he may have used some of the smaller versions and studies to prepare the larger ones, which means the real sequence is genuinely uncertain. So treat the famous big-to-small progression as the traditional reading, not a closed fact. We do not actually know the order in which he painted the five.
      </p>
    </article>
  )
}

function CpReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The verdict" title="The genre painting with the joke removed" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel what Cézanne did here, you have to know what a card-playing picture was <em>supposed</em> to be. For centuries, men at cards was a comic subject. It was a piece of genre painting, a painting of everyday life, taverns, kitchens, card games, rather than gods, battles, or saints, and the genre ran on cheating, drunkenness, leering grimaces, a hand of cards held out where the viewer can see the swindle coming, a soldier being fleeced. It was a setup for a joke or a moral, painted to make you smirk.
      </p>
      <p style={proseStyle}>
        Cézanne removed all of it. No cheat, no laugh, no winner, no stakes on the table, no eyes meeting across it. He drained every drop of anecdote out of the oldest comic subject in the book and left only two men, their cards, and their concentration. The result is not a card game; it is a study in stillness and weight, two solid forms balanced around a bottle. He took a subject built for comedy and gave it the gravity of a religious painting.
      </p>
      <p style={proseStyle}>
        That move is exactly why the picture came to be seen as a cornerstone of Cézanne’s late genius. The drama is gone and the seriousness is total. Where another painter saw an excuse for a grin, Cézanne saw the chance to make ordinary men as monumental as saints, by doing almost nothing at all.
      </p>
    </article>
  )
}

function CpVersions({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="Five canvases" title="From a crowd down to two" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          his is not a single picture but the end of a <strong>series of five</strong>. They run, roughly, from crowded to bare. The largest holds five figures, three players plus a standing onlooker and a seated boy, and lives at the Barnes Foundation near Philadelphia. A four-figure version is at the Metropolitan Museum in New York. Then the series pares down to just <strong>two players</strong> facing each other, in three canvases: one at the Courtauld in London, one in a private collection, and the small, distilled one you are reading about, at the Musée d’Orsay.
        </p>
        <p style={proseStyle}>
          The arc is one of subtraction. Figures drop away, the onlookers vanish, the room empties, and what is left grows quieter and more monumental. The Orsay canvas is the smallest of all and the most stripped, the series boiled down to its essence. (Just remember, from the last chapter, that the order in which Cézanne painted them is not actually settled; the move from crowded to spare is how the finished pictures <em>read</em>, not a proven chronology.)
        </p>

        <SectionHeader accent={accent} label="The famous price" title="A different canvas, a record sale" />
        <p style={proseStyle}>
          You have probably heard that <em>The Card Players</em> is one of the most expensive paintings ever sold, and that is true, but you have to keep the canvases straight. The record sale was <strong>not</strong> this Orsay picture. Around <strong>2011</strong>, one of the larger <em>two-player</em> versions, the one that had belonged to the Greek shipping magnate George Embiricos, was sold to the royal family of <strong>Qatar</strong>. The reported price was around <strong>$250 million</strong>, with estimates running as high as $320 million, which at the time made it, reportedly, the highest price ever paid for any painting, a record that stood until 2017.
        </p>
        <p style={proseStyle}>
          Two cautions, because the press almost always blurs both. First, that figure was never officially confirmed; it is a leaked, reported number, so “around $250 million, reportedly” is as firm as anyone can honestly be. Second, and more important: the canvas that fetched it is a <em>different</em> picture from the one in front of you. The Orsay version, the small and distilled last word of the series, is priceless in the literal museum sense, never for sale. The record belongs to its larger cousin in Qatar.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="Doha"
        when="c.2011 · the record sale"
        title="A two-player Card Players sells for a reported fortune."
        body="A larger two-player version, from the Embiricos estate, goes to the Qatari royal family around 2011 for a reported sum near $250 million, by report the highest ever paid for a painting at the time. The figure was never officially confirmed, and the canvas is a different one from the small Orsay version featured here."
        palette={['#7a6a4a', '#3a3020', '#100c08']}
        ctaLabel="Read the Post-Impressionism overview"
      />
    </>
  )
}

function CpAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="From the artist to the nation" title="The Camondo bequest" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Orsay canvas had a calmer life than its famous price suggests, with one alarming interruption. It passed through Cézanne’s dealer, <strong>Ambroise Vollard</strong>, who handled most of the painter’s late sales, and into the great Paris collection of <strong>Count Isaac de Camondo</strong>. On Camondo’s death the painting came to the French State as part of his <strong>1911 bequest</strong>, entering the national museums, the Louvre first and eventually the Musée d’Orsay.
      </p>
      <p style={proseStyle}>
        The interruption: the canvas was <strong>stolen in 1961</strong> and later recovered. The detail is reported through secondary sources, so take it lightly, but it adds a strange footnote to a picture this quiet, that for a while it was simply gone.
      </p>

      <SectionHeader accent={accent} label="Reunited, and rated" title="The ancestor of Cubism" />
      <p style={proseStyle}>
        In 2010 and 2011 the Courtauld in London and the Metropolitan in New York mounted a two-venue exhibition that gathered the <strong>largest grouping of the series ever shown</strong> (the Barnes and Qatar canvases appeared as reproductions, since neither could travel). It let people see, for the first time in one place, the whole arc of subtraction the series performs.
      </p>
      <p style={proseStyle}>
        And the verdict that settled is the one that matters most for this app: <em>The Card Players</em> is read as a <strong>direct ancestor of Cubism</strong>. The way Cézanne builds solid form out of flat planes of color, rather than out of line and modeled shadow, is exactly the door <strong>Picasso</strong> and <strong>Braque</strong> (Georges Braque, who co-invented Cubism with Picasso) walked through a few years later. The two silent men at their small table are, quietly, where modern painting’s next revolution begins.
      </p>
    </article>
  )
}
```

## 2. Fact ledger — The Card Players

| Claim in prose | Pack source |
|---|---|
| Featured = Orsay two-player version, c.1894–95, oil on canvas, smallest/last-read of five | §2 Version note + Identity |
| ~1 ft 6½ in × 1 ft 10½ in (smallest of five) | §2 Dimensions (ft/in line) |
| Musée d’Orsay; Camondo 1911 bequest → Louvre/Jeu de Paume → Orsay 1986 | §2 Location/accession + Provenance |
| Vollard handled late sales; first-sale date not pinned | §2 Provenance |
| Stolen 1961, recovered; kept light, secondary source | §2 Provenance theft note (handled lightly) |
| Cézanne in 50s at Jas de Bouffan near Aix; models = estate laborers incl. a gardener (loosely) | §2 Where it came from / Models (not over-specified) |
| Over a dozen single-figure studies (Man with a Pipe, Courtauld/Hermitage/Pushkin) | §2 The making |
| Constructive stroke; form from flat planes; feeds Cubism | §2 The making + Reception |
| Order big→small CONTESTED by Met conservation; present as traditional | §2 The making (handled per DISPUTED #3) |
| Genre card scenes were comedy/cheating; Cézanne drained anecdote | §2 Look-closer #3 + Reception |
| Five versions table (Barnes 5-fig, Met 4-fig, Courtauld 2, Qatar 2, Orsay 2) | §2 The five versions table |
| Qatar/Embiricos two-player sold ~2011, reported ~$250M (range to $320M), record to 2017, NEVER official | §2 The Qatar sale (handled per DISPUTED #2) |
| Price pinned to Qatar canvas, NOT Orsay | §2 Author rule (explicit) |
| 2010–11 Courtauld + Met two-venue reunion (Barnes/Qatar as repros) | §2 Reception & afterlife |
| Direct ancestor of Cubism (Picasso/Braque) | §2 Reception & afterlife |

---

## 3. const — Mont Sainte-Victoire seen from Les Lauves

```ts
// ─────────────────────────────────────────────────────────────
// Work, Mont Sainte-Victoire seen from Les Lauves (Cézanne, 1902–04).
// The Philadelphia Museum of Art version. Authored through the art
// content pipeline; narrative in art-section-reader.tsx under
// 'mont-sainte-victoire-lauves' (Mv… prefix).
// ─────────────────────────────────────────────────────────────
export const MONT_SAINTE_VICTOIRE_LAUVES: ArtWorkContent = {
  id: 'mont-sainte-victoire-lauves',
  name: 'Mont Sainte-Victoire seen from Les Lauves',
  shortName: 'Mont Sainte-Victoire',
  year: 1904,
  artist: 'Paul Cézanne',
  artistId: 'cezanne',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 4¾ in × 3 ft ¼ in',
  location: 'Philadelphia Museum of Art',
  acquired: 'George W. Elkins Collection, 1936',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 3, total: 9 },
  hook: 'A mountain he painted about eleven times from one hillside, dissolved here into a mosaic of color patches with the bare canvas left showing, the picture the next generation called the start of everything.',
  heroImage: ART_IMG.cezanneMontSainteVictoireLauves,
  heroCredit: 'Cézanne, Mont Sainte-Victoire seen from Les Lauves, 1902–04 · Philadelphia Museum of Art',
  heroAspect: 1.26, // ~73 × 91.9 cm → W/H ≈ 1.26
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1902–04', k: 'Painted' },
    { v: '2′4¾″ × 3′¼″', k: 'Dimensions' },
    { v: 'Philadelphia', k: 'Now at' },
  ],
  sections: [
    { id: 'lauves', eyebrow: 'Les Lauves · 1902', dateLabel: '1902', title: 'A studio on the hill', blurb: 'In 1902 Cézanne built a studio on the rise of Les Lauves above Aix, and from the slope behind it he had a sweeping view east to Mont Sainte-Victoire, the limestone ridge that had been his lifelong motif.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1902–04', title: 'A mountain made of color', blurb: 'Overlapping semi-transparent patches of green, ochre, blue and violet, areas of bare canvas left showing, near and far knit into one plane, the work that read as proto-Cubist to the next generation.', progress: 0.34 },
    { id: 'reception', eyebrow: 'Cézanne’s idea', dateLabel: '1904', title: 'The cylinder, the sphere, the cone', blurb: 'In an April 1904 letter, Cézanne wrote the line that became modern art’s most quoted instruction. This is the period and the method it describes.', progress: 0.58 },
    { id: 'death', eyebrow: 'Aix · October 1906', dateLabel: '1906', title: 'Caught in a storm', blurb: 'On 15 October 1906 Cézanne was caught in a storm while out painting, collapsed, and died of pneumonia a week later. Not, despite the legend, at his easel before the mountain.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1907–today', title: 'The father of modern art', blurb: 'The 1907 retrospective the year after his death hit Picasso, Braque and Matisse; the late Mont Sainte-Victoires became the recognized bridge from Impressionism to Cubism.', progress: 0.96 },
  ],
  provenance: [
    { year: '1906', who: 'Left in Cézanne’s studio at his death', place: 'Aix-en-Provence', note: 'The late Les Lauves canvases were in the studio when Cézanne died in 1906 and were dispersed afterward, largely through Vollard and the heirs.', price: null },
    { year: '1936', who: 'Philadelphia Museum of Art (George W. Elkins Collection)', place: 'Philadelphia', note: 'Entered the Philadelphia Museum of Art through the George W. Elkins Collection in 1936, where it is now part of the permanent collection. On permanent view.', price: 'in the collection', museum: true },
  ],
  figures: [
    { name: 'Paul Cézanne', role: 'The painter', palette: ['#5a7042', '#8a7848', '#1c1a12'] },
    { name: 'Émile Bernard', role: 'Got the “cylinder, sphere, cone” letter', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Mont Sainte-Victoire', role: 'The lifelong motif', palette: ['#6a7a8a', '#3a4250', '#14181e'] },
    { name: 'Picasso & Braque', role: 'Heirs at the 1907 retrospective', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Henri Matisse', role: 'Also marked by the retrospective', palette: ['#b44d3b', '#5a2a20', '#150a08'] },
  ],
  annotations: [
    { label: 'The mountain dissolving into the sky', where: 'The peak, upper right, against the sky', detail: 'The summit is built from blue and violet patches whose edge does not draw a hard line against the sky but breaks up into it. The mountain and the air share the same touches of color, so the solid ridge and the empty sky are made of the same paint.' },
    { label: 'The gaps Cézanne left on purpose', where: 'Small bare spots showing between the strokes, across the canvas', detail: 'Look for patches of unpainted canvas left showing between the color touches. Cézanne stopped before filling them. The picture is openly, deliberately unfinished-looking, and those gaps are a concrete thing you can point to.' },
    { label: 'A valley made of colored blocks', where: 'The plain in the middle ground', detail: 'The fields, houses and viaduct of the valley are reduced to a mosaic of small green and ochre blocks. Representation is boiled down to color-architecture; you read “a plain with buildings” from an arrangement of patches, not from drawn detail.' },
    { label: 'The valley tipped up toward you', where: 'The relationship of near ground to far mountain', detail: 'Try to find a single vanishing point and you cannot. Near and far are pulled into one shallow plane, so the valley seems to tip up toward you instead of receding correctly into depth. This flatness is the proto-Cubist move.' },
    { label: 'The picture as stacked bands', where: 'Read top to bottom: plain, valley, mountain, sky', detail: 'The composition reads as horizontal zones stacked one above another, foreground plain, mid-valley, mountain, sky, like colored bands. That quiet banding is the scaffolding the whole picture hangs on.' },
    { label: 'Strokes that knit everything together', where: 'The repeated parallel diagonal touches across the surface', detail: 'Cézanne’s constructive stroke, parallel diagonal marks, runs across unrelated things, a roof, a tree, the slope, and ties them into one continuous fabric of paint. The same brush-rhythm binds the whole landscape into a single surface.' },
  ],
  lineage: {
    parents: [ { label: 'Impressionism', mode: 'art' }, { label: 'Poussin’s landscape', mode: 'art' }, { label: 'Provence', mode: 'civ' } ],
    children: [ { label: 'Cubism', mode: 'art' }, { label: 'Abstraction', mode: 'art' }, { label: 'Modern painting', mode: 'art' } ],
  },
}
```

## 3. NarrativeFns — Mont Sainte-Victoire seen from Les Lauves (Mv… prefix)

```tsx
function MvLauves({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Les Lauves · 1902" title="A studio on the hill" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is a limestone ridge that dominates the landscape around Aix-en-Provence in the south of France. It is called <strong>Mont Sainte-Victoire</strong> (mohn sant vik-TWAR), and <strong>Paul Cézanne</strong> (1839–1906) painted it <strong>more than thirty times in oil, and dozens more in watercolor</strong>, across his life. It was the single motif (the subject he kept returning to across his career) he came back to more than any other. This read is about the late, most radical group of those pictures, and about one canvas in particular.
      </p>
      <p style={proseStyle}>
        In <strong>1902</strong> Cézanne built himself a <strong>studio on the rise of Les Lauves</strong> (lay LOHV), the hill just north of Aix, and moved his working life there. From the slope above the studio he had a sweeping view east across the plain to the mountain. That vantage gave him the last and most abstract group of Mont Sainte-Victoires: the ridge seen from farther back, the whole valley between flattening out into a field of color.
      </p>

      <SectionHeader accent={accent} label="The featured canvas" title="The Philadelphia version" />
      <p style={proseStyle}>
        The painting in front of you is the version now in the <strong>Philadelphia Museum of Art</strong>, painted in <strong>1902–04</strong>, about <strong>2 feet 4¾ inches tall and 3 feet ¼ inch wide</strong>. It is one of the most reproduced of the late Les Lauves canvases, and it sits among siblings: closely related versions hang in the Pushkin Museum in Moscow, the Kunstmuseum in Basel, the Kunsthaus in Zürich, and elsewhere. Cézanne painted the same view, over and over, chasing something the single picture could never quite hold still.
      </p>
      <p style={proseStyle}>
        Before the next chapter takes the picture apart, just look at it once. The canvas reads as broad bands of color stacked from bottom to top: greens and ochres for the plain and the valley below, then a band of blue-violet for the ridge and the sky above. In the upper part sits the mountain, whose outline will not quite hold, its edge dissolving into the same blue and violet as the air around it. And scattered all across the surface are small patches of bare canvas, spots Cézanne left unpainted, showing through between the strokes. Hold that image, because the next chapter is what that chase looks like in paint.
      </p>
    </article>
  )
}

function MvMaking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A mountain made of color" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand close and the first surprise is that there is almost no drawing in it. The mountain, the plain, the sky: none of them is outlined and filled. The whole picture is built from <strong>overlapping, semi-transparent patches of color</strong>, green and ochre for the fields below, blue and violet for the ridge and the sky above, laid side by side and over one another until a landscape assembles itself out of pure color relationships.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a7042', '#8a7848', '#1c1a12']}
        imageUrl={ART_IMG.cezanneMontSainteVictoireLauves}
        ratio="5/4"
        alt="Cézanne, Mont Sainte-Victoire seen from Les Lauves"
        caption={<>C&eacute;zanne,{' '}<em>Mont Sainte-Victoire seen from Les Lauves</em>, 1902&ndash;04, Philadelphia Museum of Art.</>}
        rights="Public domain worldwide (Paul Cézanne died 1906). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The gaps and the flatness" title="What he left out" />
      <p style={proseStyle}>
        Two things to notice, because they are the whole argument of the picture. First, Cézanne <strong>left areas of bare canvas showing</strong> between the strokes. He simply stopped before he filled them. The painting looks openly, deliberately unfinished, and that is by design: the forms dissolve into a field of color rather than hardening into described objects.
      </p>
      <p style={proseStyle}>
        Second, there is no single vanishing point pulling you back into depth. Near and far are knit into <strong>one shallow plane</strong>; the valley seems to tip up toward you instead of receding correctly the way a textbook landscape should. The mountain and the air in front of it are made of the same touches of paint. This flattening of deep space into a near-single surface is precisely what the next generation would seize on. It is why this canvas, a landscape of a quiet mountain, read to younger painters as <strong>proto-Cubist</strong> (an early, unnamed version of what Cubism would become: breaking a scene into planes of color instead of drawing it as it looks), the first stirrings of the method that would shatter perspective for good.
      </p>
      <p style={proseStyle}>
        The technical name for the key move is <strong>passage</strong>: Cézanne lets adjacent color planes bleed across a contour, so an object and the space beside it share the same patches of paint and the hard edge between them softens away. It is exactly the device Cubism would take up a few years later to lock figure and background into one continuous surface.
      </p>
    </article>
  )
}

function MvReception({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Cézanne’s idea" title="The cylinder, the sphere, the cone" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his is the period of the most quoted sentence Cézanne ever wrote. In a letter dated <strong>15 April 1904</strong> to <strong>Émile Bernard</strong> (a younger painter who corresponded with Cézanne), he set down the instruction that the whole twentieth century would chew on. In one standard English translation it runs: <em>treat nature by means of the cylinder, the sphere, the cone, with everything put in perspective, so that each side of an object or a plane is directed toward a central point.</em>
      </p>
      <p style={proseStyle}>
        A word of caution on the wording: that is a <strong>translation</strong> of his French, and several English versions exist (some say “deal with” or “interpret” for “treat”). The idea is firmly his, the date and the letter are documented, and the original autograph survives in the Courtauld’s collection. But quote it as one translation among several, not as a fixed scripture.
      </p>
      <p style={proseStyle}>
        What the line means is exactly what this canvas is doing. Cézanne is telling Bernard to see past the surface accidents of a thing to the simple solid geometry underneath, and to build a picture from those underlying volumes. Look back at the mountain: that is a landscape reduced toward its basic forms, assembled from color-blocks that stand for the architecture of a valley rather than its details. The sentence and the painting are the same thought, one in ink and one in oil. And in the hands of the young men who read it after his death, that instruction became one of the seeds of Cubism.
      </p>
    </article>
  )
}

function MvDeath({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Aix · October 1906" title="Caught in a storm" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is a romantic story that Cézanne died at his easel, in front of Mont Sainte-Victoire, brush in hand, painting the mountain to the last. It is a lovely image and it is not what happened, so here is the documented version, which is moving enough without the embroidery.
      </p>
      <p style={proseStyle}>
        On <strong>15 October 1906</strong>, Cézanne was <strong>out painting and was caught in a storm</strong>. He worked on for a couple of hours, then started for home, <strong>collapsed</strong> on the way, and was carried back by a passing laundry-cart driver. He developed <strong>pneumonia</strong>. He rallied enough to go out and paint once more, a portrait of his gardener Vallier, fainted again, was put to bed, and <strong>died on 22 October 1906</strong>, aged sixty-seven. He was buried in Aix.
      </p>
      <p style={proseStyle}>
        Notice what the record does and does not say. He was out painting in the field near Les Lauves when the storm caught him; the documents do not say he was painting Mont Sainte-Victoire at that exact moment, and it is the fusion of those two facts that produced the legend of the death at the easel before the mountain. The true account is plainer and just as good: an old man who would not stop working got caught in the weather, and it killed him within the week.
      </p>
    </article>
  )
}

function MvAfterlife({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="From the studio to the world" title="The retrospective that landed like a bomb" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>I</DropCap>
          n his lifetime Cézanne was largely shrugged off by the official art establishment and worshipped by the young. The turning point came the year after he died. The <strong>1907 retrospective</strong> (a large show surveying a dead artist’s whole career) at the <strong>Salon d’Automne</strong> (the Autumn Salon, a progressive yearly Paris exhibition founded in 1903 as a rival to the official Salon) put his work in front of the rising generation all at once, and it hit them like a revelation. <strong>Picasso</strong>, <strong>Braque</strong>, and <strong>Matisse</strong> (Henri Matisse, another painter who would reshape 20th-century art) all came away marked by it, and the late Mont Sainte-Victoire canvases, with their flattened space and their architecture of color, especially.
        </p>
        <p style={proseStyle}>
          That is how a quiet provincial painter of one mountain became what Western art history calls the <strong>father of modern art</strong>, the direct ancestor of Cubism and the abstraction that followed. The thing he was doing alone on a hill above Aix, dissolving a landscape into planes of color and tipping deep space up onto a single surface, turned out to be the exact problem the next revolution wanted to solve.
        </p>

        <SectionHeader accent={accent} label="Why it still matters" title="The bridge to Cubism" />
        <p style={proseStyle}>
          The late Les Lauves Mont Sainte-Victoires are now seen as the <strong>bridge from Impressionism to Cubism and abstraction</strong>. The Impressionists had broken light into color; Cézanne took the next step and broke <em>form</em> into planes of color, building solid structure back out of those planes. The Philadelphia canvas, in front of you, sits right on that hinge.
        </p>
        <p style={proseStyle}>
          And the throughline is worth saying flat. A man painted the same mountain more than thirty times in oil, chasing a way to make a picture out of pure relationships of color and shape rather than out of drawing and illusion, and he never quite finished the chase, which is why he left the canvas open and bare in places. He died with the work still unfinished, and the work was modern art’s starting gun. The next chapters of this app, all of Cubism, begin on that hill.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="Paris"
        when="1907 · the year after his death"
        title="The Salon d’Automne shows Cézanne to the young."
        body="The 1907 Cézanne retrospective in Paris reaches Picasso, Braque and Matisse. Within a couple of years, the planes of color and flattened space of the late Mont Sainte-Victoires feed directly into the invention of Cubism."
        palette={['#5a7042', '#3a3c28', '#14140e']}
        ctaLabel="Read the Cubism overview"
      />
    </>
  )
}
```

## 3. Fact ledger — Mont Sainte-Victoire seen from Les Lauves

| Claim in prose | Pack source |
|---|---|
| Featured = Philadelphia version, 1902–04, oil on canvas | §3 Version note + Identity |
| ~2 ft 4¾ in × 3 ft ¼ in | §3 Dimensions (ft/in line) |
| Philadelphia Museum of Art; acquisition kept general (donor/credit UNVERIFIED) | §3 Location/accession (handled per ⚠️ rule, no donor asserted) |
| ~11 oils from Les Lauves; “about thirty times” over his life is the broader oil count | §3 making (~11 Les Lauves) + general thirty-versions framing per movement-const “about thirty”; phrased as life-total vs Les-Lauves count |
| 1902 studio built on Les Lauves hill north of Aix; sweeping east view to the mountain | §3 Where it came from |
| Siblings: Pushkin, Basel, Zürich, etc. | §3 Sibling versions table |
| Built from overlapping semi-transparent color planes; bare canvas left showing; one shallow plane | §3 The making (technique) |
| Read as proto-Cubist | §3 The making + afterlife |
| “Cylinder, sphere, cone,” letter to Émile Bernard 15 Apr 1904, autograph at Courtauld | §3 The making (handled per DISPUTED #5, flagged as translation) |
| Translation varies (treat/deal with/interpret); quote one, note it is translated | §3 The making + DISPUTED #5 |
| Caught in storm 15 Oct 1906, collapsed, laundry-cart, pneumonia, painted Vallier once more, died 22 Oct 1906, aged 67, buried Aix | §3 Cézanne’s death |
| Explicitly NOT “died at easel painting the mountain” (legend named and refused) | §3 Author rule + DISPUTED #4 |
| 1907 Salon d’Automne retrospective hit Picasso/Braque/Matisse; “father of modern art” | §3 Reception & afterlife |
| Bridge from Impressionism to Cubism/abstraction | §3 Reception & afterlife |

---

### Author notes for the integrator

- All three consts use `accent: ART_ACCENTS.green` (inherited from POST_IMP).
- `artistId` values used: `seurat`, `cezanne` — confirm these resolve in the art
  routing/artist lookup, or set to `undefined`/coming-soon if no artist page exists yet.
- `chain.index` is 1/2/3 within this batch and `chain.total: 9`; integrator renumbers
  app-wide.
- NARRATIVES map keys to add (mirroring the `burial:` block):
  - `'bathers-asnieres': { riverbank: BaRiverbank, making: BaMaking, salon: BaSalon, reception: BaReception, afterlife: BaAfterlife }`
  - `'card-players': { estate: CpEstate, making: CpMaking, reception: CpReception, versions: CpVersions, afterlife: CpAfterlife }`
  - `'mont-sainte-victoire-lauves': { lauves: MvLauves, making: MvMaking, reception: MvReception, death: MvDeath, afterlife: MvAfterlife }`
- `MeanwhileSheet` uses `accent` (the work’s green) rather than a hardcoded color, since
  no Realism-style AMBER cross-reference applies; integrator may swap to a destination
  accent if house pattern prefers it.
```
