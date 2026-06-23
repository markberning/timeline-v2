# FINAL — Maurice de Vlaminck, *The Seine at Chatou* (1906), The Metropolitan Museum of Art

**Resolver/Reviser pass (Opus).** Built from `work-chatou-draft.md` with the three gates
folded in (fact / read / frame). Two parts below:
PART A = paste-ready `CHATOU` const for `src/lib/art-content.ts`; PART B = the five
`Cha`-prefixed narrative components for `art-section-reader.tsx`.

**Resolution notes (what changed, by gate):**
- **RIGHTS — `rights: 'pd-us'` kept (adjudicated correct).** Published 1906 = US public
  domain; the Met's "© ARS" line is the EU life+70 term (to 2029) / ARS reproduction
  license, not US copyright status; the app already inlines this exact image in the Fauvism
  works strip. The over-characterizing "superseded by the brief" author note has been
  removed; the const comment now states the status plainly without asserting a flat legal
  characterization. (FACT FIX-1.)
- **PROVENANCE — Vollard buyout trimmed out of the provenance ledger** (it lives only in
  the afterlife prose, correctly framed as commercial backdrop). Row 0 is now the bare
  painted-in-1906 fact. (FACT FIX-2.)
- **READ — "loud / top of its voice / at full volume" varied down to ≤2 per chapter;**
  duplicate "ended up in New York / far from home" sign-off cut (van-Gogh-symmetry landing
  kept); concrete VERIFIED spatial layout added to the looking opener (trees/bank LEFT,
  river opening RIGHT, houses far bank upper-right, yellow rowboat lower-left foreground —
  confirmed against the actual canvas); "primaries" glossed once and white no longer folded
  into the primaries; "local colour" glossed on first use; "milky" dropped from the looking
  card title (the prose describes broken colour, not a milky river). (READ FS-1, FS-2, FL-1,
  FL-2, FC-1, FC-2.)
- **FRAME — Derain introducing Vlaminck to Matisse at the 1901 van Gogh retrospective
  added** (the room that assembled the core Fauve trio); the rebel self-fashioning made
  EXPLICIT and sourced (deliberately propagated untaught-outsider image modeled on van
  Gogh's own outsider-genius myth; 2024–25 Barberini retrospective titled "Modern Art
  Rebel"); the color turn softened to a GRADUAL evolution toward Cézanne (the separate,
  real later anti-Cubism/anti-Picasso hostility kept as the "turned hostile" content;
  section retitled "The man who turned on modern painting"); the "where Fauvism's color had
  first been tried out" birthplace overclaim dropped (School of Chatou = a precursor).
  (FRAME FIXes 1–4.)
- **Quotes** still handled as legend/boast, undated, no clean-primary asserted. New prose
  never types the — character; imperial dimensions only.

---

## PART A — paste-ready const

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Seine at Chatou (Vlaminck, 1906). A Fauvism work read.
// The Metropolitan Museum of Art, Jacques and Natasha Gelman Collection,
// 1998 (acc. 1999.363.84). NOT the Whitney gift, NOT one of the other
// near-named Chatou canvases. Authored through the art content pipeline
// (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['chatou'] (Cha… prefix).
// LEGENDS: the "burn down the École des Beaux-Arts with my cobalts and
// vermilions" line and the "loved van Gogh better than my own father" line
// are FRAMED as reported boasts, never quoted-and-dated.
// Provenance MINIMAL: only Gelman→Met is confirmed; Vollard is NOT asserted
// as an owner of this canvas (the Vollard studio-buyout lives only in the
// afterlife prose, as commercial backdrop).
// RIGHTS: rights:'pd-us' (adjudicated). Published 1906 → US public domain;
// the app already inlines this image. The Met records the object as in
// copyright (© ARS, the EU life+70 term to 2029) — a reproduction/EU-term
// status, not US copyright; US display tier = pd-us.
// ─────────────────────────────────────────────────────────────
export const CHATOU: ArtWorkContent = {
  id: 'chatou',
  name: 'The Seine at Chatou',
  shortName: 'The Seine at Chatou',
  year: 1906,
  artist: 'Maurice de Vlaminck',
  artistId: 'vlaminck',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 8 1/8 in × 3 ft 3 3/4 in',
  location: 'The Metropolitan Museum of Art, New York',
  acquired: 'Jacques and Natasha Gelman Collection, 1998',
  accent: ART_ACCENTS.rust, // copied from FAUVISM
  chain: { name: 'Works of Fauvism', index: 5, total: 9 },
  hook: 'A self-taught ex-bicycle-racer squeezing cobalt and vermilion straight from the tube onto a quiet bend of the Seine outside Paris, turning a Sunday-painters’ river town into the highest-pitched landscape of the Fauve year.',
  heroImage: ART_IMG.vlaminckChatou,
  heroCredit: 'Vlaminck, The Seine at Chatou, 1906 · The Metropolitan Museum of Art, New York',
  heroAspect: 1.24, // 81.6 × 101 cm → W/H ≈ 1.238
  heroFit: 'contain', // the whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1906', k: 'Painted' },
    { v: '2′8⅛″ × 3′3¾″', k: 'Dimensions' },
    { v: 'The Met', k: 'Now at' },
  ],
  sections: [
    { id: 'chatou-town', eyebrow: 'Chatou · 1906', dateLabel: 'Summer 1906', title: 'A river town just outside Paris', blurb: 'Chatou sits on the Seine about nine miles west of central Paris, a Sunday-leisure spot the Impressionists had painted a generation earlier. Vlaminck lived nearby and spent the summer of 1906 painting its tugboats, sailboats, and riverbank houses.', progress: 0.08 },
    { id: 'tube-color', eyebrow: 'The making', dateLabel: '1906', title: 'Color straight from the tube', blurb: 'A self-taught ex-bicycle-racer and bandstand violinist who shunned the academy, Vlaminck applied his pigment, by the Met’s own account, directly from the tube in daubs and swirls, with the expressive touch he took from the van Gogh he had seen in 1901.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 8 1/8 in × 3 ft 3 3/4 in', title: 'Reddish-orange trees and a river of broken color', blurb: 'Reddish-orange tree trunks up the left bank, white houses on the far shore, a blue-red-and-white boat on the water, and a river built from the same broken coloured strokes as the bank, all laid on near full strength.', progress: 0.56 },
    { id: 'school-of-chatou', eyebrow: 'The two-man school', dateLabel: '1900–1906', title: 'Vlaminck and Derain on the riverbank', blurb: 'Met after a train accident in 1900, sharing a studio at Chatou, the two are remembered as the informal “School of Chatou,” a precursor to Fauvism, both in the 1905 room where the critic Louis Vauxcelles named the wild beasts.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1906–today', title: 'The high key, then the turn against modern art', blurb: 'The Fauve years were Vlaminck’s peak; within a year or two his palette darkened toward Cézanne, and decades later he turned openly hostile to Cubism and Picasso. The canvas reached the Met in 1998 with the Gelman Collection.', progress: 0.96 },
  ],
  provenance: [
    { year: '1906', who: 'Maurice de Vlaminck (the artist)', place: 'Chatou / Paris', note: 'Painted in 1906, during the summer Vlaminck spent working in and around Chatou.', price: null },
    { year: '…', who: 'Earlier owners (not documented here)', place: '—', note: 'The full owner-by-owner chain between the artist and the Gelmans is not established in the source record and is deliberately left blank rather than invented.', price: null },
    { year: 'by 1998', who: 'Jacques and Natasha Gelman', place: 'Mexico City / New York', note: 'The film producer Jacques Gelman and his wife Natasha assembled a major collection of European modern art in the mid-20th century. The canvas was part of the Gelman holdings that came to the Met.', price: null },
    { year: '1998–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Entered the Met as the Jacques and Natasha Gelman Collection, 1998 (accession 1999.363.84).', price: 'collection gift', museum: true },
  ],
  figures: [
    { name: 'Maurice de Vlaminck', role: 'The painter', palette: ['#bf2f25', '#1d4ed8', '#1c1c14'] },
    { name: 'André Derain', role: 'The other half of the School of Chatou', palette: ['#d06a2a', '#3a8a6a', '#15110a'] },
    { name: 'Vincent van Gogh', role: 'The decisive influence (1901 retrospective)', palette: ['#2a3a6a', '#c8b84a', '#0e1428'] },
    { name: 'Louis Vauxcelles', role: 'Critic who named the “fauves”', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Jacques & Natasha Gelman', role: 'Collectors; their gift to the Met', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The reddish-orange tree trunks', where: 'Rising up the near bank along the left edge of the canvas', detail: 'The tree trunks are a frank reddish-orange, a colour no tree wears, chosen for force rather than accuracy. This is the cleanest single proof on the canvas that Vlaminck is using colour as a feeling, not a fact. The Met names the “reddish-orange tree trunks” outright in its own description of this picture, so it is documented, not interpretation.' },
    { label: 'Paint laid straight from the tube', where: 'Across the whole surface, thickest on the bank and the foliage', detail: 'The paint sits in thick, separate touches, what the Met calls “daubs and swirls of pigment,” squeezed on, by its account, directly from the tube. That is impasto, paint heaped so high the brush leaves standing ridges you can read as texture. It is the van-Gogh-style touch: each stroke stays visibly itself instead of blending into its neighbours, so the surface reads as built rather than smoothed.' },
    { label: 'The boats, a tugboat and sailboats', where: 'Out on the water, the larger dark vessel to the right, a yellow rowboat in the near foreground at lower left', detail: 'Out on the Seine sits a remorqueur (the French word for a tugboat) along with sailboats. The Met singles out a small boat in the background painted in blue, red, and white. These are working river craft on a real commercial river, not pleasure boats dressed up for a picture.' },
    { label: 'A river of broken colour, not a mirror', where: 'The Seine’s surface, opening across the centre of the canvas below the boats and bank', detail: 'The water is built from the same short, separate, coloured strokes as the riverbank, so the reflections read as bands of pure colour rather than a smooth mirror. There is no glassy surface here; the river is as worked and as visibly brushed as the land, which keeps the whole picture sitting on one flat, active plane.' },
    { label: 'The high-key sky', where: 'The upper register, above the trees and the far-bank houses', detail: 'The sky is kept light and bright, the “high key” of Fauve painting, meaning colours held near full intensity instead of being darkened or greyed down to imitate distance and air. Nothing in the upper register recedes into a soft haze; the top of the canvas stays as charged as the bottom.' },
    { label: 'White houses and green leaves at full strength', where: 'The cluster of houses on the far bank and the foliage around them', detail: 'The white riverbank houses and the green leaves are the places the Met points to where ordinary local colour is laid on raw and bright. Vlaminck combined the primaries of blue and red with white, the Met writes, using these conventional hues for the white houses, the green leaves, the reddish-orange trunks, and the boat. The whole canvas is a demonstration of pigment used at near-full saturation, a quiet river town painted at the top of its voice.' },
  ],
  lineage: {
    parents: [
      { label: 'Vincent van Gogh', mode: 'art' },
      { label: 'The School of Chatou', mode: 'art' },
      { label: 'Pure tube color', mode: 'art' },
    ],
    children: [
      { label: 'Fauvism', mode: 'art' },
      { label: 'Expressionism', mode: 'art' },
      { label: 'Color cut loose from description', mode: 'art' },
    ],
  },
}
```

**Registry / wiring notes (for the integrator, not gated prose):**
- Add `CHATOU` to `ART_WORK_CONTENT` keyed `'chatou'`.
- Splice into `NARRATIVES`: `chatou: { 'chatou-town': ChaTown, 'tube-color': ChaTube, looking: ChaLooking, 'school-of-chatou': ChaSchool, afterlife: ChaAfterlife }`.
- `artistId: 'vlaminck'` matches the existing `FAUVISM.artists` entry id.

---

## PART B — narrative components (`Cha`-prefixed, absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// The Seine at Chatou (Vlaminck, 1906) — the five chapters
// ─────────────────────────────────────────────────────────────
function ChaTown({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Chatou · 1906" title="A river town just outside Paris" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>C</DropCap>
        hatou (pronounced &ldquo;sha-TOO&rdquo;) is a small town on the <strong>Seine</strong>, the river that runs through Paris, about <strong>nine miles</strong> (roughly fourteen kilometers) west of the city center. It was, in <strong>1906</strong>, the kind of place a Parisian went on a Sunday to get out of the city: a riverside town with boats and a bend of green water and an island in the middle of the river, the <strong>Île de Chatou</strong>, where you could rent a skiff, eat lunch by the water, and pretend for an afternoon that you did not live in a city of three million people. This was leisure infrastructure, more or less, for the working and middle classes of Paris, fifteen minutes out on the train.
      </p>
      <p style={proseStyle}>
        Painters had been here before. A generation earlier, in the 1870s and early 1880s, this exact stretch of the Seine had been the Impressionists&rsquo; outdoor studio. <strong>Pierre-Auguste Renoir</strong> painted his great river-party picture, the <em>Luncheon of the Boating Party</em>, at the <strong>Maison Fournaise</strong>, a boating restaurant on the Île de Chatou, with the same bridge and the same water in the background. So when our painter set up his easel on this riverbank in 1906, he was not discovering virgin ground. He was painting a postcard view that other, gentler painters had already made famous. The whole point of what he did to it is that he did not paint it gently.
      </p>

      <SectionHeader accent={accent} label="The subject" title="Tugboats, sailboats, and white houses" />
      <p style={proseStyle}>
        The painter is <strong>Maurice de Vlaminck</strong> (1876&ndash;1958; pronounced &ldquo;vla-MANK&rdquo;), and he was not visiting. He lived in the area, and he <strong>spent the summer of 1906 painting in and around Chatou</strong>, the river and its traffic over and over. The same handful of things turn up across his canvases of these two years: the Seine itself, the <strong>tugboats</strong> hauling barges up and down a working commercial river, the <strong>sailboats</strong>, and the white riverbank houses with trees rising behind them. He painted this view so many times that the museums now hold several near-identical canvases with near-identical names, which is a problem for cataloguers and a sign of how hard he was hammering one motif. The one we are looking at, the version that hangs in <strong>New York</strong>, shows a tugboat and sailboats on the water, white houses on the bank, and a stand of trees, all of it rendered in colours that the river never actually wore.
      </p>
      <p style={proseStyle}>
        Hold the place in your mind before we get to the paint: a quiet, pretty, well-worn leisure spot, the sort of view a hundred Sunday painters had set down in tasteful greens and silvery blues. That is the room Vlaminck walked into. What he did with it is the rest of this story.
      </p>
    </article>
  )
}

function ChaTube({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The man" title="The ex-cyclist who would not be taught" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o understand the paint you have to understand the man holding the tube, because Vlaminck made a point of being unlike every other serious painter in France. He was <strong>self-taught</strong>, and proud of it to the point of belligerence. He took a few drawing lessons and studied briefly with a local painter as a young man, but he <strong>refused formal academic training</strong> and built a whole identity out of being the untaught outsider, the man who never went to the schools. Before he painted for a living he had two earlier lives: he was a <strong>professional racing cyclist</strong> (a career ended by a bout of typhoid in his early twenties), and he was a <strong>violinist and music teacher</strong> who played in bands for money. He came to painting as a big, physical, self-made man with no patience for the academy, and it shows in every stroke.
      </p>
      <p style={proseStyle}>
        It is worth being honest that this was partly a performance. Of all the Fauves, Vlaminck leaned hardest into the wild-man label, and he cultivated the untaught-rebel image as deliberately as he lived it. A 2024&ndash;25 retrospective at the Museum Barberini in Potsdam even took the title <em>Maurice de Vlaminck: Modern Art Rebel</em>, the persona made into a show. And he modeled that persona, knowingly, on <strong>van Gogh</strong>, the unschooled outsider whose own legend, the genius nobody recognised, he had fallen for in 1901. Vlaminck did not just admire van Gogh&rsquo;s painting; he borrowed van Gogh&rsquo;s myth and wore it.
      </p>
      <p style={proseStyle}>
        He is famous for a line about the academy. By his own telling, Vlaminck wanted to <strong>burn down the École des Beaux-Arts</strong>, the official state art school in Paris, the gatekeeper of respectable French painting, and burn it down specifically with his colours, with his cobalts and his vermilions. It is the sort of thing he said, and it has been quoted of him for a century, though the exact words drift from book to book and no clean original source pins them down, so take it as the boast it was rather than a verbatim manifesto. The feeling behind it, though, is real and is right there on the Chatou canvas: a man who thought the way to attack good taste was to out-colour it.
      </p>

      <SectionHeader accent={accent} label="Paris · 1901" title="The van Gogh that hit him" />
      <p style={proseStyle}>
        The thing that turned that temperament into a method was a show. In <strong>1901</strong>, a large early retrospective of <strong>Vincent van Gogh</strong> (1853&ndash;1890), the Dutch painter who had died unknown and unsold a decade earlier, opened at the <strong>Bernheim-Jeune gallery</strong> in Paris, around seventy of his canvases hung together. Vlaminck saw it, and it knocked him sideways. Van Gogh painted with undisguised, expressive brushwork and colour pushed past the truth for the sake of feeling, and that was exactly the permission Vlaminck had been looking for. He is widely reported to have said, of that day, that he <strong>loved van Gogh better than his own father</strong>, a line that gets repeated everywhere without a clean original behind it, so read it as the kind of thing he said rather than a sourced quotation. The point it carries is solid: van Gogh, more than any living teacher, is the painter standing behind the Chatou canvas. The Met says as much of this exact picture, that Vlaminck emulated the undisguised brushwork and the intuitive application of paint of van Gogh&rsquo;s late, expressive style, which he so admired.
      </p>
      <p style={proseStyle}>
        That same room did something else, too. It was here that <strong>André Derain</strong>, the friend Vlaminck already painted alongside at Chatou, introduced him to <strong>Henri Matisse</strong>. So the show that lit Vlaminck up also, in passing, assembled the three painters, Matisse, Derain, and Vlaminck, who would be the core of Fauvism four years later. The movement&rsquo;s social origin and its deepest influence are the same afternoon.
      </p>

      <SectionHeader accent={accent} label="The method" title="Straight from the tube" />
      <p style={proseStyle}>
        So here is the method, and it is gloriously simple. Vlaminck did not labour over delicate mixtures on a palette to find the exact right grey-green of a real riverbank. He took the <strong>colour straight from the tube</strong> and put it on the canvas. The Met&rsquo;s own catalogue says of this painting that he <strong>applied the colours directly from the tube in daubs and swirls of pigment</strong>, combining the primaries of blue and red with white, and using those frank, unmixed hues for the white houses, the green leaves, the reddish-orange tree trunks, and the small boat in the distance. That is the whole technical engine of the picture. No careful local colour (the true, observed colour of a thing under ordinary light), no atmospheric softening, no greying-down to suggest distance and air. Squeeze, daub, swirl. The pigment goes on at nearly the strength it had in the tube, and the brush leaves its ridges where it passed.
      </p>
      <p style={proseStyle}>
        It is worth saying plainly what that buys him. Working straight from the tube is fast, and it keeps every colour at its maximum voltage instead of letting it settle into the muted truth of a real landscape. A painter trained at the École would have called it crude, and that was, more or less, the idea. Vlaminck was not trying to record the Seine at Chatou. He was trying to hit you with it.
      </p>
    </article>
  )
}

function ChaLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A landscape painted at full volume" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The painting is a <strong>landscape format</strong>, wider than it is tall, about <strong>two feet eight inches high by three feet four inches wide</strong>, a comfortable easel size, nothing monumental. The layout under all the colour is ordinary, almost humble, and it helps to map it before the colour takes over. The near <strong>riverbank rises up the left edge</strong>, with the trees and a yellow rowboat stacked in the lower-left foreground; the broad surface of the <strong>Seine</strong> opens out across the center and to the right; a larger dark <strong>boat</strong> sits on the water toward the right, the white houses cluster on the far bank in the upper right, and a bright sky runs across the top. If you squint past the colour, it is a perfectly conventional river view, the kind of thing you have seen on a thousand calendars. Now stop squinting, because the colour is the entire point, and it is doing things no calendar river ever did.
      </p>

      <SectionHeader accent={accent} label="The bank" title="Reddish-orange trees that no tree ever wore" />
      <p style={proseStyle}>
        Go first to the <strong>left bank and the trees</strong>. This is where the picture announces what it is. The <strong>tree trunks are a frank reddish-orange</strong>, the colour of hot embers, not of bark. No tree on the actual Chatou riverbank was ever that colour. Vlaminck chose it because orange against the blues and greens around it <em>burns</em>, because it carries force the true brown could never carry. This is the cleanest single thing to point at on the whole canvas if you want to understand Fauvism in one stroke: a tree painted the wrong colour <em>on purpose</em>, because the right colour was too quiet. The Met names these &ldquo;reddish-orange tree trunks&rdquo; outright, so you are not imagining the choice; it is documented, deliberate, and the heart of the picture.
      </p>
      <p style={proseStyle}>
        And look at <em>how</em> the paint is laid down, because the touch matters as much as the colour. The bank is not smoothed into a tidy surface. It is built from <strong>thick, separate daubs and swirls of pigment</strong>, the paint squeezed on nearly straight from the tube and dragged across the canvas in short, visible strokes. This is <strong>impasto</strong>, paint heaped so high the brush leaves standing ridges, little furrows of colour you could almost read with your fingertips. Each stroke stays itself. The orange does not melt into the green beside it; it sits next to it, raw, so the whole bank reads as a mosaic of separate loaded touches rather than a blended scene. That broken, ridged, restless surface is the van-Gogh inheritance made physical, and it is everywhere on the canvas: the bank, the foliage, the houses, even the water.
      </p>

      <SectionHeader accent={accent} label="The river" title="A Seine of broken colour, and the boats on it" />
      <p style={proseStyle}>
        Now the <strong>water</strong>, opening out across the center of the canvas. A timid painter would have made the Seine a smooth pane, a calm grey-blue mirror to settle the busy bank against. Vlaminck would not give you the rest. The <strong>river is built from the same short, separate, coloured strokes as the bank beside it</strong>, so its surface reads as a field of broken colour, bands and dashes of blue and green and pale light, not a glassy reflection. The reflections do not mirror; they vibrate. The result is that the whole picture sits on one flat, active, worked plane, with no quiet patch for your eye to rest in. The water is as busy as the land.
      </p>
      <p style={proseStyle}>
        Out on that water are the <strong>boats</strong>. Toward the right sits a <strong>remorqueur</strong>, which is the French word for a tugboat, the kind that hauled barges along a working commercial river, plus <strong>sailboats</strong>, and a yellow rowboat is pulled up in the near foreground at lower left. The Met singles out one small craft in the background painted in <strong>blue, red, and white</strong>, which is worth noticing because blue and red are two of the <strong>primary colours</strong> (the basic hues you cannot mix from any others), the very ones the whole canvas runs on. The boat is a little knot where the painting&rsquo;s charged palette is concentrated. These are not pleasure yachts prettied up for the picture; they are the actual traffic of a real river, set down in the same hot colour as everything else.
      </p>

      <SectionHeader accent={accent} label="Houses and sky" title="White houses, green leaves, and a sky that will not recede" />
      <p style={proseStyle}>
        On the far bank, upper right, sit the <strong>white houses</strong> and, around them, the <strong>green leaves</strong>. These are the places the Met points to where ordinary, expected local colour, white for a house, green for a leaf, is laid on raw and bright instead of softened. Even the colours that happen to be &ldquo;correct&rdquo; here are pushed to full strength, so the white blazes and the green is a green you would call charged. Nothing in the picture is allowed to be muted.
      </p>
      <p style={proseStyle}>
        And above all of it, the <strong>sky</strong>. This is where you can feel the Fauve idea of <strong>high key</strong>, which means keeping colours near their full intensity rather than darkening or greying them down to fake distance and atmosphere. The top of the canvas does not soften into a hazy pale blue the way a traditional landscape sky recedes into air. It stays bright, stays charged, stays as present as the bank below it. That refusal to let the top of the picture calm down is a big part of why the whole thing feels intense from edge to edge instead of building to a quiet horizon.
      </p>
      <p style={proseStyle}>
        Pull back and take the whole canvas at once. There is no soothing passage anywhere in it, no smooth water, no soft sky, no true colour to rest on. A quiet Sunday river town has been painted at the absolute top of its voice, with the paint squeezed straight from the tube, the trees on fire, the water broken into dashes, and the sky refusing to fade. That is the picture&rsquo;s whole argument, made in nothing but colour and the marks of a loaded brush: that a landscape does not have to be the colour of the world, and that the feeling of a place can be louder than its facts.
      </p>
    </article>
  )
}

function ChaSchool({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="A train, 1900" title="How Vlaminck met Derain" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>V</DropCap>
        laminck did not paint Chatou alone, and the second name in this story is <strong>André Derain</strong> (1880&ndash;1954; pronounced &ldquo;duh-RANN&rdquo;). The two met, by the standard account, in <strong>1900</strong>, after a <strong>train accident</strong>: their train derailed near Chatou, and the two young men got to talking. They became close, and for a stretch around 1900 and 1901 they <strong>shared a studio at Chatou</strong>, painting the same river you have just been looking at. Derain was the younger of the two and would soon become a central Fauve in his own right, but for a few years he and Vlaminck were a two-man operation on this exact riverbank.
      </p>
      <p style={proseStyle}>
        That pairing has a nickname. The two of them are remembered together as the <strong>&ldquo;School of Chatou&rdquo;</strong> (in French, <em>l&rsquo;École de Chatou</em>), which is an art-historian&rsquo;s tidy label for what was really just two friends with two easels. It was never a formal school with members and a doctrine; it was a nickname for a two-man precursor to Fauvism, the pair of them painting the Seine&rsquo;s riverbanks in bold, anti-naturalistic colour before the movement had a name. Several years before the wild beasts were christened, the School of Chatou was already doing the thing.
      </p>

      <SectionHeader accent={accent} label="Paris · autumn 1905" title="The room where the wild beasts got their name" />
      <p style={proseStyle}>
        The name came at a show. In the autumn of <strong>1905</strong>, both Vlaminck and Derain exhibited at the <strong>Salon d&rsquo;Automne</strong>, an annual Paris exhibition, in a room full of painters working in this same hot, unnatural colour, Matisse and Derain among them. A critic named <strong>Louis Vauxcelles</strong> (pronounced &ldquo;voh-SELL&rdquo;), looking at the room, called these bright-colour painters <strong>&ldquo;fauves,&rdquo;</strong> French for <strong>&ldquo;wild beasts.&rdquo;</strong> It was an insult, and it stuck the way good insults do. The painters never chose the name, never signed a manifesto under it, and never quite shook it. <strong>Fauvism</strong> takes its name from that one critic&rsquo;s jab in that one room, and Vlaminck, with his tube colour and his burning trees, was about as wild a beast as the room contained.
      </p>
      <p style={proseStyle}>
        So the Chatou canvas of 1906 sits one year on from the naming, painted by one of the two men of the School of Chatou, at the very peak of the brief movement that the room of 1905 had accidentally christened. It is, in a real sense, a Fauve painting made on the home ground where this kind of bold, anti-naturalistic colour had been worked out early, years before anyone thought to call it anything.
      </p>
    </article>
  )
}

function ChaAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1905–1907" title="The short, bright peak" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he Chatou pictures came at the top of a very short arc. Vlaminck&rsquo;s high-key, pure-colour landscapes belong almost entirely to the years <strong>1905 to 1907</strong>, and the Chatou canvases are his signature output from that peak. There was a commercial reason he could paint so freely in 1906: the powerful dealer <strong>Ambroise Vollard</strong> had, around 1905 and 1906, <strong>reportedly bought out Vlaminck&rsquo;s studio stock</strong> (the figures get quoted as several thousand francs, but treat the amount as reported, not carved), along with an option on future work. With his back catalogue sold in one stroke, Vlaminck could paint full-time, and the loudest Chatou canvases are partly the product of that freedom.
      </p>

      <SectionHeader accent={accent} label="After 1907" title="The man who turned on modern painting" />
      <p style={proseStyle}>
        And then, almost as fast as it had arrived, the brightness drained out of his work. From around <strong>1907 and 1908</strong> Vlaminck&rsquo;s <strong>palette darkened</strong>. He moved gradually toward the sober, structured influence of <strong>Paul Cézanne</strong> (the older painter had died in 1906, and a wave of attention to his work followed), and left behind the high-key Fauve colour that the Chatou pictures live in. This was an evolution, not a public recantation; the man who had wanted to burn down the academy with his vermilions simply put the vermilions away as his eye changed.
      </p>
      <p style={proseStyle}>
        The real turn to hostility came later, and against a different target. In his later decades Vlaminck became openly <strong>hostile to modern painting</strong>, and to <strong>Cubism and Picasso</strong> in particular, blaming Picasso for dragging French art into a dead end. The wild beast of 1906 ended up one of modernism&rsquo;s loudest scolds. The Chatou canvas, then, is a snapshot of a man at a moment he would not stay in, the brief year or two when he believed, completely, that colour straight from the tube was the whole future of painting.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="To New York, with the Gelmans" />
      <p style={proseStyle}>
        The painting&rsquo;s life as an object is the <strong>provenance</strong>, the documented chain of who owned a work from the artist&rsquo;s hand to where it hangs now, and for this canvas the honest version of that chain is short, because the middle of it is not securely documented and we are not going to invent it. What is certain is the end. The picture came to the <strong>Metropolitan Museum of Art</strong> in New York as part of the <strong>Jacques and Natasha Gelman Collection</strong> in <strong>1998</strong>, accession number 1999.363.84.
      </p>
      <p style={proseStyle}>
        There is a quiet symmetry in where it landed. The same museum holds <strong>van Gogh</strong>, the painter whose 1901 retrospective had set Vlaminck on fire in the first place, and whose late, expressive style the Met itself names as the engine behind this very canvas. The Chatou riverbank now hangs a few rooms from its own ancestor, in a city its painter never needed to see, still squeezed straight from the tube, still burning.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  chatou: { 'chatou-town': ChaTown, 'tube-color': ChaTube, looking: ChaLooking, 'school-of-chatou': ChaSchool, afterlife: ChaAfterlife },
```
