# WORK FINAL — *Dynamic Hieroglyphic of the Bal Tabarin* (Gino Severini, 1912)

Reconciled from `work-bal-tabarin-draft.md` after folding every [BLOCKER] / [FIX]
from the three gates (fact, read, frame) against `work-bal-tabarin-factpack.md`.
Mechanical splice: identical ids / keys / component names. PART A = the
`BAL_TABARIN` const; PART B = the five `Bal`-prefixed JSX chapters.

---

## PART A — the const (`BAL_TABARIN`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Dynamic Hieroglyphic of the Bal Tabarin (Severini, 1912). The flagship
// Futurism work read. Authored through the art content pipeline (fact pack →
// Opus → 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['bal-tabarin'] (Bal… prefix). FACTS handled per fact pack + gates:
// title spelling "Hieroglyphic" (MoMA owns it); the figure rides an open pair of
// SCISSORS (NOT a goose), placed high in the upper jumble (NOT pinned left, per
// fact gate F1); the only verified painted words are VALSE + POLKA (NO "bowling");
// real sequins are fixed into the paint; NATIONAL FLAGS / streamers are draped
// across the upper portion (firmly documented, added per frame BLOCKER); the
// camel-rider is left open between cabaret-gag and a topical glance at Italy's
// 1911–12 colonial war in North Africa (the war attribution hedged as scholars'
// reading per the frame gate); the hall is in Pigalle at the FOOT of Montmartre;
// the "self-portrait in a straw hat" reading is a disputed scholars' guess; the
// documented provenance is Marinetti(consignment)→Wyndham→MoMA, Rosenberg account
// UNCONFIRMED per MoMA; venue closed 1953 / demolished after a 1963 gala (fact B1).
// ─────────────────────────────────────────────────────────────
export const BAL_TABARIN: ArtWorkContent = {
  id: 'bal-tabarin',
  name: 'Dynamic Hieroglyphic of the Bal Tabarin',
  shortName: 'Bal Tabarin',
  year: 1912,
  artist: 'Gino Severini',
  artistId: 'severini',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas with sequins',
  dimensions: '5 ft 3 5/8 in × 5 ft 1 1/2 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Acquired through the Lillie P. Bliss Bequest (by exchange), 1949',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 4, total: 9 },
  hook: 'A Paris dance hall remembered from the inside out, with real sequins glued into the paint, the words VALSE and POLKA floating in the spin, national flags strung across the top, and a tiny nude riding an open pair of scissors.',
  heroImage: ART_IMG.severiniBalTabarin,
  heroCredit: 'Severini, Dynamic Hieroglyphic of the Bal Tabarin, 1912 · Museum of Modern Art, New York',
  heroAspect: 0.97, // 156.2 × 161.6 cm → W/H ≈ 0.97, very slightly taller than wide
  heroFit: 'contain', // near-square; the whole canvas, never cropped, stays on top
  rights: 'pd-us',
  stats: [
    { v: '1912', k: 'Painted' },
    { v: '5′3⅝″ × 5′1½″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'paris', eyebrow: 'Paris · 1906–11', dateLabel: '1906–11', title: 'The one Futurist who lived in Paris', blurb: 'Severini leaves Italy for Paris at twenty-three, falls in with Picasso and Braque and Apollinaire, co-signs the Futurist manifestos from a distance, and becomes the bridge between Italian speed-worship and French Cubist grammar.', progress: 0.08 },
    { id: 'hall', eyebrow: 'Pigalle', dateLabel: '1904 on', title: 'A dance hall at the foot of the hill', blurb: 'The Bal Tabarin was a real cabaret on the rue Victor-Massé, in the Pigalle district below Montmartre. Costume balls, floor shows, electric light, the cancan. This is the night Severini is remembering, and he is not painting it from a chair in the room.', progress: 0.3 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '5 ft 3⅝ in × 5 ft 1½ in', title: 'The whole night shattered into one sign', blurb: 'Read the painting itself: the two whirling dancers at the core, the looping lines of real sequins, the painted words VALSE and POLKA, the nude on the scissors, the broken blaze of the lights, the flags across the top, the camel and the cat and the glasses, all happening at once.', progress: 0.54 },
    { id: 'simultaneity', eyebrow: 'The idea', dateLabel: '1912', title: 'Painted from memory, all at once', blurb: 'Severini did not sketch at the hall. He built the memory of it, fusing many moments of the same night into a single field, the Futurist idea called simultaneity. He named the result a hieroglyph, one packed sign that stores the whole sensation.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1912–today', title: 'From Marinetti to MoMA', blurb: 'Held on consignment to the Futurist impresario Marinetti in Milan, then into a British collection, then sold at Sotheby’s after the owner’s death, the canvas reached MoMA in 1949, where it is Futurism’s friendliest masterpiece and a movement’s warning label both.', progress: 0.96 },
  ],
  provenance: [
    { year: '1912–c.1925', who: 'On consignment to Filippo Tommaso Marinetti (Futurism’s founder)', place: 'Milan', note: 'Held on consignment in Milan to the impresario who wrote the 1909 Founding Manifesto, until around 1925. Severini also later said he first sold the picture to the Paris dealer Léonce Rosenberg, who sold it on to Richard Wyndham, but MoMA states that account could not be confirmed.', price: null },
    { year: 'by 1935–1948', who: 'Richard Wyndham (British painter and collector)', place: 'London', note: 'In Wyndham’s English collection by 1935. (Severini’s contract with the dealer Rosenberg was real, signed 1919, but the claimed Rosenberg sale of this canvas is the unconfirmed part of the chain.)', price: null },
    { year: '24 Nov 1948', who: 'Estate of Richard Wyndham → MoMA, via Sotheby’s, London', place: 'London → New York', note: 'On Wyndham’s death in 1948 his estate sold the painting through Sotheby’s in London, where MoMA acquired it. (The auction price is not published in the MoMA record.)', price: null },
    { year: '1949–today', who: 'Museum of Modern Art', place: 'New York', note: 'Accessioned 1949; credit line “Acquired through the Lillie P. Bliss Bequest (by exchange).” Acc. 288.1949. Department of Painting and Sculpture. On view.', price: 'by exchange', museum: true },
  ],
  figures: [
    { name: 'Gino Severini', role: 'The painter', palette: ['#bf6a3a', '#5a2e1a', '#1a0f08'] },
    { name: 'F. T. Marinetti', role: 'Futurism’s founder; held it on consignment', palette: ['#bf2f25', '#5a1c18', '#160a08'] },
    { name: 'Picasso & Braque', role: 'The Cubists whose lettering he borrowed', palette: ['#c0a06c', '#3d3a2e', '#14110a'] },
    { name: 'Henri Bergson', role: 'Philosopher of memory behind “simultaneity”', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Richard Wyndham', role: 'British collector; his estate sold it to MoMA', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The two dancers at the heart of it', where: 'Center, the pair of whirling women in a flounced dress', detail: 'Two dancing women hold the middle of the canvas, one with light, blond curls toward the left and one with darker hair toward the right, caught mid-whirl in a swirling, flounced dress (sources read its color as pink-and-purple, or as white, blue and pink, so trust the spin more than any one swatch). They are the still-turning core the whole picture flies apart from, and they are doing what the hall did best, dancing. The Bal Tabarin’s signature act, the high-kicking French cancan, is the world they belong to, even if no single set of legs here is captioned “the cancan.”' },
    { label: 'The real sequins, set into the paint', where: 'Across the center, in looping lines over the dancers’ dress', detail: 'Look closely at the dress and the looping patterns over it are not painted dots. They are actual sequins, small reflective discs fixed into the wet paint, so the surface physically catches and throws the room’s light back at you as you move past it. This is the work’s signature trick and the reason its full medium line reads “oil on canvas with sequins.” Most painters render glamour. Severini glued it on. The shimmer of a dance-hall gown is not described here; it is the literal, three-dimensional truth of the object on the wall.' },
    { label: 'The words floating in the spin', where: 'Scattered through the swirl; “VALSE” reads toward the lower right', detail: 'Painted words drift through the chaos, the Cubist lettering device Severini lifted straight from Picasso and Braque, who had started gluing and stenciling real type into their canvases a year or two earlier. The two clearest are VALSE (French for waltz) and POLKA, two dances named right on the surface, sound made into something you can read. They turn the picture into a kind of score: not just the look of the night but the names of the music it moved to. (No other word is reliably legible here; read these two and resist the urge to find more.)' },
    { label: 'The small nude riding an open pair of scissors', where: 'High in the upper jumble, a small, realistic figure', detail: 'Up in the upper jumble, far smaller and far more lifelike than anything around it, a realistic nude woman sits astride an open pair of scissors, riding them like a hobbyhorse. It is the strangest of all the dream-fragments, a jolt of plain figurative drawing dropped into the abstraction, and it reads the way the night itself ran, as a cabaret turn or a costume-ball gag remembered through several drinks. (Yes, scissors. Not a goose, not a bird, an open pair of scissors, which every source that reads the figure agrees on.)' },
    { label: 'The broken blaze of the lights', where: 'Throughout the upper field, the brilliant shattered facets', detail: 'The hall’s electric lighting is everywhere and nowhere, splintered into bright faceted shards that ricochet off mirrors, glasses and spangles across the whole upper half of the picture. There is no single chandelier you can point to and name; the light has been broken into pieces and scattered, which is exactly the point, a remembered glare rather than one fixture. And because the sequins are real, part of that light is not depicted at all. It is actually bouncing off the canvas, the only painting in this movement where the glare is partly the room’s and partly yours.' },
    { label: 'The night’s odd cast: flags, a camel, a cat, the glasses', where: 'Across the top, national flags and streamers; among the fragments a camel-rider, a cat’s head, martini glasses', detail: 'Strung across the top of the canvas are national flags and streamers, the kind of bunting a festive hall hangs up. Hunt through the rest of the swirl and more legible little incidents surface: a North-African man riding a camel, a black cat’s head, and the slim stems of martini glasses, the night’s drink. The cat and the glasses are plainly the night’s nonsense, snapshots shuffled together. But the flags, and the man on the camel with them, also let the world outside the hall leak in: 1912 sat in the middle of Italy’s colonial war against the Ottomans in North Africa, and Severini was a committed Italian nationalist, so scholars often read the camel as a topical glance at that war rather than a pure cabaret gag. (Some also read the straw-hatted figure at lower right as Severini himself. Treat that as a reading the experts float, not a fact the canvas confirms.)' },
  ],
  lineage: {
    parents: [
      { label: 'Cubist lettering (Picasso · Braque)', mode: 'art' },
      { label: 'Futurist “lines of force”', mode: 'art' },
      { label: 'Paris nightlife', mode: 'civ' },
    ],
    children: [
      { label: 'Collage and mixed media', mode: 'art' },
      { label: 'Words on the canvas', mode: 'art' },
      { label: 'Painting motion itself', mode: 'art' },
    ],
  },
}
```

**heroAspect note:** the fact pack gives 161.6 × 156.2 cm (H × W) = 63 5/8 × 61 1/2 in.
W/H = 156.2 / 161.6 ≈ **0.97**, very slightly taller than wide → near-square, `heroFit: 'contain'`, stays on top.

**Register** (coordinator): add `BAL_TABARIN` to `ART_WORK_CONTENT` keyed `'bal-tabarin'`,
and `NARRATIVES['bal-tabarin'] = { paris: BalParis, hall: BalHall, looking: BalLooking, simultaneity: BalSimultaneity, afterlife: BalAfterlife }`.

---

## PART B — chapter prose (`Bal`-prefixed components, absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// Dynamic Hieroglyphic of the Bal Tabarin (Severini, 1912) — the five chapters
// ─────────────────────────────────────────────────────────────
function BalParis({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · November 1906" title="The one Futurist who lived in Paris" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        uturism &mdash; the loud, fast, machine-mad Italian art movement &mdash; was Italian. Its painters lived in Milan and Rome and Turin. Its founder banged the drum from Italy. And the one Futurist who painted the picture in front of you was living, the entire time, in <strong>Paris</strong>. His name was <strong>Gino Severini</strong> (1883&ndash;1966; pronounced &ldquo;JEE-no seh-veh-REE-nee&rdquo;), he was born in the Tuscan hill town of Cortona, and in <strong>November 1906</strong>, at twenty-three, he packed up and moved to France. He once said the two cities he felt most bound to were Cortona and Paris, and that he was born physically in the first and intellectually and spiritually in the second. Take him at his word, because it was Paris, not Italy, that taught his hand what to do.
      </p>
      <p style={proseStyle}>
        Understand what he walked into. Paris in 1906 was the laboratory where modern painting was being invented, week by week, in a few cheap studios on the hill of <strong>Montmartre</strong>. Within a couple of years Severini knew, and drank with, more or less everyone who mattered: <strong>Pablo Picasso</strong> and <strong>Georges Braque</strong>, the two young men who were taking the visible world apart and rebuilding it as faceted planes in the style soon called <strong>Cubism</strong>; the poet and critic <strong>Guillaume Apollinaire</strong>, the movement&rsquo;s loudest cheerleader; the painter <strong>Amedeo Modigliani</strong>. He had a studio in the same building cluster as Braque and the painter Suzanne Valadon. He was, in other words, a Parisian insider years before the Italian movement he would join even existed.
      </p>
      <p style={proseStyle}>
        Then the movement found him. In <strong>February 1910</strong> Severini co-signed the <em>Manifesto of the Futurist Painters</em>, and that April the <em>Technical Manifesto of Futurist Painting</em> (a manifesto being a public declaration in which a movement announces its program and picks its fights; Futurism announced itself in print before it had any paintings to show). He signed alongside four men working back in Italy: <strong>Giacomo Balla</strong> (who had been his teacher), <strong>Umberto Boccioni</strong>, <strong>Carlo Carr&agrave;</strong> and <strong>Luigi Russolo</strong>. Futurism wanted to paint the modern world&rsquo;s <strong>speed and energy</strong>: motorcars, electric light, the crowd, the machine, the city in motion. Its founder, the poet <strong>Filippo Tommaso Marinetti</strong>, had launched it in 1909 with a manifesto that didn&rsquo;t just love the racing car. It glorified war as &ldquo;the world&rsquo;s only hygiene,&rdquo; sneered at museums as graveyards, and, in the same breath, professed &ldquo;scorn for woman.&rdquo; Hold those two things together, because they led somewhere dark and they bear on this very painting. The friendliest, most sequinned thing the movement ever made is a glittering picture of women, painted by a member of a movement whose founding text held women in contempt. We&rsquo;ll come back to where that worship of violence led, because Severini went part of the way down the road himself.
      </p>

      <SectionHeader accent={accent} label="The bridge" title="He chose the dancer over the machine" />
      <p style={proseStyle}>
        Severini&rsquo;s peculiar position, an Italian Futurist living among the French Cubists, made him the single most important <strong>bridge</strong> between the two movements, and the painting in front of you is what that bridge looks like in oil. Futurism supplied the <em>ambition</em>: paint motion, paint energy, dissolve the solid world into force. But it was Cubism, watched up close in Paris, that handed Severini the <em>grammar</em> to do it, the faceting that shatters a form into planes, and one trick in particular that you will see all over this canvas: <strong>collaging real words and letters into the picture</strong>, a device Picasso and Braque had just started using. In 1911 Severini helped bring his Italian colleagues to Paris to see Cubism for themselves. He was the connector.
      </p>
      <p style={proseStyle}>
        And here is where he split from the rest of them. Boccioni and the Italians loved the <strong>machine</strong>, the engine, the girder, the speeding car, hard metal in motion. Severini, living in the city of cabarets, loved something softer and just as fast: the <strong>dancer</strong>. The body in a crowd, light breaking on a spinning gown, the blur of a quadrille, this was his way of painting energy, and it is a far warmer way than a steel chassis. So while his friends were painting factories rising and trains charging, Severini went, in his memory, back to a Paris dance hall. He went back to the Bal Tabarin.
      </p>
    </article>
  )
}

function BalHall({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Pigalle, not quite Montmartre" title="A dance hall at the foot of the hill" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he <strong>Bal Tabarin</strong> was a real place, and you could have walked into it. It sat at <strong>36 rue Victor-Mass&eacute;</strong>, in the district called <strong>Pigalle</strong> (pronounced &ldquo;pee-GAL&rdquo;), at the foot of the Montmartre hill rather than up on it. People loosely say &ldquo;Montmartre,&rdquo; and the spirit is right (this is the cheap, raffish, painters-and-pleasure quarter on the city&rsquo;s northern edge), but the hall itself stood just below the hill, in Pigalle proper. Worth being precise, since the address is the point: this is the nightlife belt, the strip of cabarets and dance halls where Paris went after dark. A <strong>bal</strong>, in this period, simply meant a public dance hall, a room you paid to enter and dance in, with a band and a bar and, at the fancy ones, a floor show.
      </p>
      <p style={proseStyle}>
        It opened on <strong>20 December 1904</strong>, run by a composer and bandleader named <strong>Auguste Bosc</strong>, and it was an instant hit. Costume balls. Floor shows. Electric light, which in 1904 was still novel enough to be a draw in itself. And dancing, of every kind the era did: the waltz, the polka, and the high-kicking, skirt-flinging <strong>cancan</strong>, the riotous chorus-line dance that was Montmartre&rsquo;s signature export and that the Bal Tabarin took on more fully after the nearby Moulin Rouge burned down in 1915. This was a loud, bright, slightly disreputable, thoroughly modern room, exactly the kind of place a young painter in love with motion and light would haunt. The hall ran until <strong>1953</strong>, when the owners of the nearby Moulin Rouge bought it and shut it down; the building was pulled down after a final gala in <strong>1963</strong>. By then it was the painting, not the building, that kept the name alive.
      </p>

      <SectionHeader accent={accent} title="He is not painting it from a chair in the room" />
      <p style={proseStyle}>
        Now the move that makes this a Futurist painting and not a postcard. Severini did <strong>not</strong> set up an easel at the Bal Tabarin and paint what he saw. He painted what he <em>remembered</em>, the whole sensation of a night there, recalled and reassembled in the studio. A snapshot of a dance hall would freeze the dancers at a single beat. Severini wanted the opposite: the spin <em>and</em> the music <em>and</em> the lights <em>and</em> the drink <em>and</em> the odd thing you half-saw across the room, all of it, all at once. The picture is not a record of one instant. It is a record of an experience that happened over an evening, compressed into one image.
      </p>
      <p style={proseStyle}>
        He had philosophy on his side for this. The ideas of the French thinker <strong>Henri Bergson</strong> (1859&ndash;1941) were everywhere in Severini&rsquo;s Paris circle. Bergson argued that real lived time isn&rsquo;t a row of separate frozen instants but a continuous, flowing <strong>duration</strong> that memory holds all together, the past bleeding into the present. You don&rsquo;t experience a dance as a series of stills; you experience it as one swimming whole, and your memory of it later is even more fused than that. Severini set out to paint exactly that fused whole. Which is why, instead of a tidy scene, you are about to get a controlled explosion.
      </p>
    </article>
  )
}

function BalLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Roughly five feet square" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it first and just take the size and shape. It is big, about <strong>five feet three inches tall by five feet one and a half inches wide</strong>, so call it a five-foot square, very slightly taller than it is wide. Square is the right shape for this picture, because a square has no built-in direction. A wide canvas wants to be read left to right, like a sentence; a tall one wants to be read top to bottom. A square just sits there and spins, and that is what this one does. There is no obvious place to start, no line to follow to the end. Your eye is dropped into the middle of a whirl and left to find its own way out. That disorientation is not a flaw. It is the subject.
      </p>
      <p style={proseStyle}>
        Now let your eye land where the picture wants it to: dead center, on the <strong>two dancing women</strong>. They are the one piece of the canvas that holds still enough to read. Two figures, mid-whirl, one with pale blond curls a little to the left, one with darker hair a little to the right, locked together in a swirling <strong>flounced dress</strong>, pink and purple, mostly, though the sources squabble over whether there&rsquo;s white and blue in there too, and frankly the squabble is the right response to a dress painted in motion. These two are the still-turning hub. Everything else in the picture is the energy thrown off them, flung out to the corners like water off a spun umbrella. Those flung diagonals are the cancan&rsquo;s own move, the high kick and the whipped skirt, broken loose from any one pair of legs and thrown across the whole canvas.
      </p>

      <SectionHeader accent={accent} label="The shimmer is real" title="He didn't paint the spangles. He glued them on." />
      <p style={proseStyle}>
        Lean in on that dress, because this is the thing about the painting nobody warns you about and everybody remembers. Running over the gown in <strong>looping lines</strong> are small bright discs that flash and shift as you move your head, and they are not painted. They are <strong>actual sequins</strong>, real reflective spangles, fixed into the paint while it was wet. The official medium line of the work is, word for word, <em>oil on canvas with sequins</em>, and that &ldquo;with sequins&rdquo; is doing enormous work. Severini didn&rsquo;t want to <em>depict</em> the glitter of a dance-hall gown under electric light. He wanted the glitter itself, the literal bouncing of real light off real metal, on the wall of the gallery, in your eyes, a hundred years later.
      </p>
      <p style={proseStyle}>
        Think of how strange and how right that is. A painting is normally a flat surface pretending to be a deep world, pretending the light in it is real. Severini cut out the pretending. He made part of the light real. It is the difference between a photograph of a disco ball and a disco ball, and once you know the sequins are physically there, the whole picture changes: it stops being a picture of a glamorous night and becomes, in one small region, a piece of the glamour itself. The medium is the subject. That is about as Futurist as a quiet idea can get: the energy isn&rsquo;t represented, it&rsquo;s delivered.
      </p>

      <SectionHeader accent={accent} label="The words" title="VALSE and POLKA, floating in the spin" />
      <p style={proseStyle}>
        Now hunt for letters, because they&rsquo;re in here. Scattered through the swirl, painted right into the picture, are <strong>words</strong>, the trick Severini took from Picasso and Braque, who had recently started gluing and stenciling real type into their Cubist canvases. The two you can actually read are <strong>VALSE</strong> (French for waltz) and <strong>POLKA</strong>, toward the lower right. Two dances, named on the canvas. And think about what that does: a painting can show you motion, but it cannot make a sound, and a dance is half music. By writing the names of the dances into the spin, Severini smuggles the <em>music</em> into a silent medium. You see VALSE, and somewhere behind your eyes a three-beat rhythm starts up. The picture becomes a kind of score for a night you weren&rsquo;t at. (Read only those two. There&rsquo;s a temptation to find more words in the chaos, but VALSE and POLKA are the ones that are really there.)
      </p>

      <SectionHeader accent={accent} title="The nude on the scissors, and the rest of the odd cast" />
      <p style={proseStyle}>
        Here is where the painting gets genuinely weird, and you have to go looking for it. High up in the <strong>upper jumble</strong>, much smaller and much more carefully, realistically drawn than anything around it, is a <strong>nude woman astride an open pair of scissors</strong>, riding them like a child on a hobbyhorse. No, that is not a typo, and no, it is not a goose or a swan, whatever you may have read; it is a small realistic nude sitting on an open pair of scissors, dropped into the abstraction like a single sharp photograph pasted into a smear of paint. What is it doing there? Nobody is certain, and the useful way to read it is the way you&rsquo;d read the whole night: a cabaret turn, a costume-ball gag, a flash of nonsense remembered through several drinks. It is the jolt of the plainly figurative inside the swirl, and it&rsquo;s the detail that tells you this is a remembered night and not a designed pattern.
      </p>
      <p style={proseStyle}>
        It&rsquo;s worth remembering what kind of room this was. A commercial dance hall lived by its floor shows, the high-kicking cancan, the costume turns, and those shows put women on display for a paying crowd that was largely men. Severini paints the dancers and the nude with real delight, but they belong to that older convention of woman-as-spectacle, the body staged as entertainment, and the painting takes the convention as a given rather than questioning it.
      </p>
      <p style={proseStyle}>
        Once your eye is tuned to find the odd things, the rest of the cast surfaces. Strung across the top of the canvas are <strong>national flags and streamers</strong>, festive bunting of the kind a hall hangs up for a party. Lower down: a small <strong>North-African man riding a camel</strong>, a <strong>black cat&rsquo;s head</strong>, and the slim stems of <strong>martini glasses</strong>, the night&rsquo;s drink. The cat and the glasses are plainly the night&rsquo;s nonsense, separate sights from across one evening shuffled together like a deck of snapshots and dealt face-up at once. But the flags, and the camel-rider with them, let the world outside the hall leak in. 1912 fell in the middle of Italy&rsquo;s colonial war against the Ottomans in North Africa, and Severini was a committed Italian nationalist, so scholars often read the man on the camel as a topical glance at that war rather than a pure cabaret gag. The picture isn&rsquo;t only a happy blur; some of the era&rsquo;s nationalism drifts through it too. (Some scholars also read the man in the <strong>straw hat at lower right</strong> as Severini himself, sneaking into his own memory. Treat that as a clever guess, not a settled fact; the canvas doesn&rsquo;t sign it.)
      </p>

      <SectionHeader accent={accent} label="The lights" title="A glare broken into a thousand pieces" />
      <p style={proseStyle}>
        Pull back one last time and look at the whole upper half, where the picture turns into a storm of <strong>bright, splintered facets</strong>. This is the hall&rsquo;s electric lighting, but Severini refuses to give you a single lamp or a named chandelier to fix on. Instead the glare is shattered, broken into shards that ricochet off mirrors and glasses and spangles and spread across the whole top of the canvas, so the light feels less like a thing in the room and more like a condition of the room, a brilliance you&rsquo;re inside of. And here is the closing trick, the one that ties the looking together: because the sequins down in the dress are <em>real</em>, part of all this light is not painted at all. It is the gallery&rsquo;s own light, bouncing off the canvas and back at you. Severini built a painting of dazzle that actually dazzles. You don&rsquo;t just see the night&rsquo;s light. A little of it is genuinely in your eyes.
      </p>
    </article>
  )
}

function BalSimultaneity({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The Futurist idea" title="Many moments at once" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here&rsquo;s a word for what you were just looking at: <strong>simultaneity</strong>. It was Futurism&rsquo;s favorite idea, and it is the key that unlocks why this picture doesn&rsquo;t behave like an ordinary one. Most paintings show you a single instant, a frozen second, a window onto one moment of one place. Simultaneity threw that out. The Futurists wanted to pack <em>many</em> moments, and many viewpoints, of the same subject into one canvas at the same time, the dancer as she was a beat ago and a beat from now and right now, all overlaid, plus the lights and the music and the crowd, all happening together. A night, not a second.
      </p>
      <p style={proseStyle}>
        The tool they used to organize that flood was something they called <strong>lines of force</strong>, the idea that every object throws off invisible lines of energy and movement, and that a painting should show those lines rather than the still, solid object. Look back at the canvas with that in mind and the diagonal shards stop looking like random debris. They are the dancers&rsquo; motion drawn out into the air, the spin made visible as streaks of energy radiating from the center. Severini isn&rsquo;t painting where the dancers <em>are</em>. He&rsquo;s painting where their movement is going. It is the difference between a photograph of a sparkler and a long-exposure photograph of a sparkler, where you see the whole loop the light traced. He gives you the loop.
      </p>

      <SectionHeader accent={accent} title="Why he called it a hieroglyph" />
      <p style={proseStyle}>
        Which brings us, finally, to the strange word in the title: <em>Dynamic <strong>Hieroglyphic</strong> of the Bal Tabarin</em>. That word is Severini&rsquo;s own, not a museum&rsquo;s later label, and it is exactly chosen. A <strong>hieroglyph</strong> is a single picture-sign that stands for a whole word or idea, one compact symbol that stores a great deal of meaning, the way ancient Egyptian writing packed a concept into one carved image. Severini is telling you what his painting <em>is</em>: not a scene of the Bal Tabarin but a single dense <strong>sign</strong> that encodes the entire sensation of a night there. Dynamic, because it&rsquo;s in motion. Hieroglyphic, because it&rsquo;s one packed symbol, not a description. He has compressed an evening into a glyph and handed it to you to decode, which, looking at it, is precisely what you find yourself doing.
      </p>
      <p style={proseStyle}>
        And this is where the two halves of Severini meet: Cubism gave him the means, Futurism the goal. Boccioni used the same toolkit to paint a city under construction and a man striding through space like a wind-blasted bronze. Severini used it to paint a dance. The remarkable thing is that the dance survived the theory. You can know nothing about Bergson or lines of force or simultaneity and still stand in front of this picture and feel, immediately, the spin and the noise and the glare of a good night out. The ideas built it. The night is what comes off it.
      </p>
    </article>
  )
}

function BalAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="From Marinetti's hands to a London collection" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the painting&rsquo;s life as an object, its <strong>provenance</strong>, the documented chain of who owned it, from the studio to the wall it hangs on now. It starts where a lot of Futurist things start: with <strong>Filippo Tommaso Marinetti</strong>, the movement&rsquo;s founder and tireless impresario, the man who wrote the 1909 manifesto and ran Futurism like a one-man publicity machine. The canvas was held on <strong>consignment</strong> to Marinetti in <strong>Milan</strong> (meaning he kept it to show and to sell on the artist&rsquo;s behalf, not as his outright property) from 1912 until around <strong>1925</strong>.
      </p>
      <p style={proseStyle}>
        There is a wrinkle worth flagging, because museums are usually too proud to print this kind of thing and MoMA, to its credit, does. Severini himself later told a different early story: that he first sold the painting to the Paris dealer <strong>L&eacute;once Rosenberg</strong>, who then sold it on to its next owner. Severini did sign a contract with Rosenberg, in 1919, so the names aren&rsquo;t invented. But MoMA states plainly that this part of the artist&rsquo;s account <strong>could not be confirmed</strong>. So we do what a careful record does: we follow the documented chain, Marinetti&rsquo;s consignment, and we keep Severini&rsquo;s Rosenberg version where it belongs, as the artist&rsquo;s own unverified recollection. Memory, fittingly for this painting, is not quite the same as the record.
      </p>

      <SectionHeader accent={accent} label="London · 1935–1948" title="Richard Wyndham, and a sale after a death" />
      <p style={proseStyle}>
        By <strong>1935</strong> the painting was in <strong>England</strong>, in the collection of <strong>Richard Wyndham</strong> (1896&ndash;1948), a British painter and collector. It stayed with him until he died in 1948, and then his estate did what estates do: it sold. On <strong>24 November 1948</strong>, the canvas went up at <strong>Sotheby&rsquo;s</strong> in London, and it was there that the <strong>Museum of Modern Art</strong> in New York acquired it. (The hammer price isn&rsquo;t published in MoMA&rsquo;s record, so we won&rsquo;t guess at one.) The museum dates the <strong>accession</strong> to <strong>1949</strong>, the year just after the sale closed, under a credit line you will see on other great MoMA pictures: <em>Acquired through the Lillie P. Bliss Bequest (by exchange)</em>, meaning it was funded not by fresh cash but by trading away or selling other works from a founding donor&rsquo;s gift. Its accession number is <strong>288.1949</strong>, and it has hung in New York ever since.
      </p>

      <SectionHeader accent={accent} title="Futurism's friendliest picture, and the road it didn't take" />
      <p style={proseStyle}>
        It is worth ending honestly, because Futurism does not have a clean afterlife and this picture is the gentle face of a movement that turned ugly. Marinetti&rsquo;s founding manifesto had glorified <strong>war</strong> as &ldquo;the world&rsquo;s only hygiene&rdquo; and sang the praises of violence and contempt for the past; the worship of force was baked in from the first sentence. When the First World War came, the Futurists cheered it on, and several of them marched into it. Boccioni, the movement&rsquo;s strongest painter, died in 1916 after a fall from a horse in training. Marinetti himself went further still: in <strong>1919 he helped found</strong> the political movement that became Italian <strong>Fascism</strong>, the authoritarian, violence-celebrating nationalist movement Mussolini would ride to power in 1922. Marinetti co-wrote its first manifesto and tied Futurism&rsquo;s name to Mussolini&rsquo;s. The cult of speed and force found its terrible logical home in politics.
      </p>
      <p style={proseStyle}>
        Severini&rsquo;s own path was milder but not clean. He drifted away from Futurism after the war, swung back toward a calmer, more classical kind of painting, and lived a long, productive, much-honored life; in the 1920s and &rsquo;30s he took official commissions, murals and mosaics, from the Fascist state, as many Italian artists of his generation did. None of that is in the painting on the wall. <em>Dynamic Hieroglyphic of the Bal Tabarin</em> was made in 1912, before the war, before the fascism, by a young man in Paris remembering a good night dancing, and it remains the warmest thing the whole hard-edged movement ever produced. A movement that loved machines and war left, as its friendliest monument, a picture of a dance hall with real sequins in the paint. There are worse epitaphs, and there are far worse paintings to be remembered by.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'bal-tabarin': { paris: BalParis, hall: BalHall, looking: BalLooking, simultaneity: BalSimultaneity, afterlife: BalAfterlife },
```

---

### What changed from the draft (gate fold)

**FACT gate**
- **B1 (BLOCKER):** Bal Tabarin closure 1952 → **1953**; demolition "1966, the same
  year Severini died" → **pulled down after a final 1963 gala** (the tidy
  death-year coincidence cut). Applied in BalHall and the const comment.
  *Note for coordinator: the upstream fact pack §3 Beat 3 still reads "1952" / "1966"
  and should be corrected there too.*
- **F1:** scissors-nude relocated from "upper-left" to **"upper jumble"** (sources
  group it in the upper portion, don't pin it left) in annotation #4, the const
  comment, and BalLooking. Annotation #3 `where` softened "anchors" → "reads toward."
- **F2:** "born intellectually" expanded to the fuller verbatim sense ("born
  physically in [Cortona], intellectually and spiritually in [Paris]"), recast so the
  three-word clip no longer stands in quotes as the whole quote.
- N1/N2/N3 left as the pack supports (VALSE lower-right softened to "reads toward";
  martini glasses kept per pack + Sartle).

**FRAME gate**
- **BLOCKER (flags + camel):** national flags / streamers across the top now
  **asserted as fact** in the hook, the §looking section blurb, annotation #6, and
  BalLooking prose. The camel-rider is no longer "the incoherence is the point"
  nonsense; it&rsquo;s opened to the **nationalist / 1911–12 Turco-Italian colonial-war
  reading**, hedged as "scholars often read" with Severini&rsquo;s nationalism stated.
- **FIX (b) spectacle:** added one non-anachronistic woman-as-spectacle line in
  BalLooking (period dance-hall convention, no 21st-c. "male gaze" verdict).
- **NICE (4) scorn for woman:** Marinetti&rsquo;s verified "scorn for woman" clause
  from the same 1909 manifesto sentence added in BalParis, bridged to the dancers.
- **NICE (6):** "most purely joyful" softened to "warmest" so it sits well beside the
  spectacle line.
- KEPT (frame praised, unchanged): proportionate war-cult framing; Marinetti 1919
  Fascism + Severini&rsquo;s Mussolini-era commissions named and fairly weighted;
  self-portrait / provenance / dress-color hedges intact.

**READ gate**
- Cut the structural meta-narration: "Here is the fact that explains the whole
  painting, so let&rsquo;s put it first" (BalParis opens on the paradox), "the entire
  engine of the picture, so before we look at it" (BalHall), "Now that you&rsquo;ve
  looked, here is the word…" → "There&rsquo;s a word for what you were just looking
  at" (BalSimultaneity), and "we&rsquo;re about to wade into" (cut).
- Glossed **manifesto** on first use; cut bare **arrondissement**; dropped
  **"(also called the quadrille)"**; glossed **Fascism**; "Mussolini&rsquo;s Italy"
  → **"the Fascist state"** for the commissions beat.
- Added the **cancan-in-the-legs** sentence in BalLooking (flung diagonals = the high
  kick / whipped skirt) per the looking NICE.
- Compressed the "two halves of Severini" recap in BalSimultaneity to a single clause
  so the "the dance survived the theory" payoff carries the paragraph.

**Voice/format:** no literal em-dashes in new prose (parens/commas or `&mdash;` in
JSX, verbatim quotes untouched); dimensions ft/in; heroAspect 0.97, heroFit
'contain', rights 'pd-us'; all ids / section-ids / component names identical to the
draft.
