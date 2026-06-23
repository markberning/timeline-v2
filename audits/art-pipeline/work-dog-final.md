# FINAL — Giacomo Balla, *Dynamism of a Dog on a Leash* (1912) — WORK read

Resolved + revised (Opus) by folding the three gates (fact / read / frame) into
`work-dog-draft.md`. SOURCE OF TRUTH for facts = `work-dog-factpack.md` AS CORRECTED by the
gates. Key corrections applied:

- **BLOCKER (fact B1 + frame C-1):** the museum's own page DOES name the Contessa Nerazzini —
  Balla painted this "while visiting one of his students, the Contessa Nerazzini," at
  Montepulciano, near Siena, May 1912. The final ASSERTS that (Nerazzini = Balla's student and
  host) and hedges ONLY the narrower leap: whether the walking woman in the picture *is* her and
  the dog is *hers* (the museum says only "his or her owner" — gender-neutral on ownership). The
  depicted-woman identification is NOT asserted.
- **Comprehensiveness (frame C-2):** chronophotography (Marey/Muybridge) is now credited as THE
  documented precedent for the motion toolkit (matching the lineage-block confidence), while the
  honest "no specific copied plate" line stays.
- **Comprehensiveness (frame C-3):** added that Balla is the Futurist signer who pushed furthest
  into pure abstraction, making this legible dog atypically figurative for him.
- **READ gate:** reconciled the `making` section title (const ⇄ component now match); the
  "lady in black" is no longer implied to be museum-sourced (museum says "the woman," not "in
  black" — kept as secondary-literature detail); reception quotes de-quoted/paraphrased to stop
  asserting verbatim text that isn't; the empty "Read that again…" reader-command cut; the
  Contessa hedge-stacking collapsed to one clean aside; "divided-color" re-anchored in
  `DogMaking`; the eye-direction inconsistency (lady's hand up-right vs feet up-left) resolved by
  acknowledging the leash angles across; tail/ears (not distinctly shown) dropped from the
  dissolving list.
- **Framing precision (F-(a)q):** "the world's only hygiene" anchored to the **1909 founding
  Manifesto of Futurism**, not the 1910 painters' Technical Manifesto. The war/Fascism honesty
  line in `DogAfterlife` is preserved.

Rules held: imperial dims only; NO literal `—` (em-dash) in NEW prose (entities/parentheses
per house rule); verbatim-quote punctuation preserved; museum = **Buffalo AKG Art Museum**; no
invented price.

---

## PART A — the `DOG` const (`art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Dynamism of a Dog on a Leash (Dinamismo di un cane al
// guinzaglio), Giacomo Balla, 1912, Buffalo AKG Art Museum (was the
// Albright-Knox Art Gallery; renamed 2023). A flagship Futurism work
// read. Authored through the art content pipeline (fact pack → Opus →
// 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['dog'] (Dog… prefix). FACT HANDLING (gate-corrected):
// the motion idea ties to the manifesto's HORSE line ("a running horse
// has not four legs, but twenty"), NOT a nonexistent "dogs in movement"
// passage. The museum's own page NAMES the Contessa Nerazzini as the
// student Balla was visiting/staying with at Montepulciano — so that is
// ASSERTED; what is hedged is only whether the walking woman in the
// picture is her and the dog is hers (the museum says "his or her
// owner," gender-neutral). Chronophotography (Marey/Muybridge) is the
// DOCUMENTED precedent for the motion toolkit, but no specific copied
// plate is claimed. PD-US only (Balla d. 1958 → worldwide PD 2029) →
// /en/ tier figure, rights: 'pd-us'.
// ─────────────────────────────────────────────────────────────
export const DOG: ArtWorkContent = {
  id: 'dog',
  name: 'Dynamism of a Dog on a Leash',
  shortName: 'Dynamism of a Dog on a Leash',
  year: 1912,
  artist: 'Giacomo Balla',
  artistId: 'balla',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 11 3/8 in × 3 ft 7 1/4 in',
  location: 'Buffalo AKG Art Museum, Buffalo, New York',
  acquired: 'Bequest of A. Conger Goodyear and Gift of George F. Goodyear, 1964 (acc. 1964:16)',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 3, total: 9 },
  hook: 'A little dachshund out for a walk, its legs blurred into a brown fan of motion and its leash a swarm of swinging arcs, made by the movement that worshipped the racing car and the machine gun. Futurism’s most beloved, and most unexpectedly funny, picture of pure speed.',
  heroImage: ART_IMG.ballaDog,
  heroCredit: 'Balla, Dynamism of a Dog on a Leash, 1912 · Buffalo AKG Art Museum, Buffalo, New York',
  heroAspect: 1.22, // 89.9 × 109.9 cm → W/H ≈ 1.22 (museum dims); en-scan 2304 × 1902 ≈ 1.21
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us', // published 1912 → US public domain; Balla d. 1958 → NOT PD worldwide until 2029 → /en/ tier only
  stats: [
    { v: '1912', k: 'Painted' },
    { v: '2′11⅜″ × 3′7¼″', k: 'Dimensions' },
    { v: 'Buffalo AKG', k: 'Now at' },
  ],
  sections: [
    { id: 'teacher', eyebrow: 'Rome · 1910', dateLabel: '1910', title: 'The teacher who joined his own students’ revolution', blurb: 'Balla was the older, established painter who taught the young Roman avant-garde the divided-color technique, then signed on to the Futurist movement his own pupils, Boccioni and Severini, had started, and would go further into pure abstraction than any of them.', progress: 0.08 },
    { id: 'making', eyebrow: 'Montepulciano · 1912', dateLabel: 'May 1912', title: 'A dachshund, a lady in black, a Tuscan road', blurb: 'Painted while staying with a student, the Contessa Nerazzini, in a Tuscan hill town: a small dog on a leash and the stepping feet of its owner, dissolved into a flicker of repeated forms over the pale summer dust.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 11⅜ in × 3 ft 7¼ in', title: 'Twenty legs on a wiener dog', blurb: 'The blurred multiplied legs, the swinging leash drawn as a fan of arcs, the staccato row of the lady’s feet, the solid sausage body the motion radiates from, and the pink-and-green road underneath.', progress: 0.54 },
    { id: 'science', eyebrow: 'The idea', dateLabel: '1880s–1912', title: 'Persistence of vision, and the cameras that proved it', blurb: 'The manifesto’s program (a running horse has twenty legs, not four) and the chronophotography of Marey and Muybridge, the multiple-exposure motion photographs that are the documented source of the whole motion-painting toolkit, turned into paint.', progress: 0.76 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1913–today', title: 'The charming picture from a violent movement', blurb: 'Debuted in Berlin in 1913, bought from the artist by a MoMA founder, dismissed mid-century as crude, later loved as the friendly face of a movement that openly glorified war. On view in Buffalo.', progress: 0.96 },
  ],
  provenance: [
    { year: '1912', who: 'Giacomo Balla (the artist)', place: 'Montepulciano / Rome', note: 'Painted May 1912 while staying at Montepulciano, near Siena, in Tuscany, as the guest of one of his students, the Contessa Nerazzini.', price: null },
    { year: '1913', who: 'Galerie Der Sturm (Herwarth Walden)', place: 'Berlin', note: 'Shown internationally at the Erster Deutscher Herbstsalon (First German Autumn Salon), Berlin, September–December 1913, hung beside a photograph; Walden’s Sturm-Galerie handled it.', price: null },
    { year: '1938', who: 'A. Conger Goodyear', place: 'Buffalo / New York', note: 'Bought directly from the artist in 1938 by the industrialist A. Conger Goodyear, the first president of the Museum of Modern Art. No purchase price is documented.', price: null },
    { year: '1964', who: 'George F. Goodyear (life interest) & the Albright-Knox Art Gallery', place: 'Buffalo', note: 'A. Conger Goodyear’s 1964 bequest split the work: a life interest to George F. Goodyear and the painting to the gallery. Accession 1964:16 assigned.', price: 'bequest', museum: true },
    { year: '1984', who: 'Albright-Knox Art Gallery (full title)', place: 'Buffalo', note: 'George F. Goodyear gave his life interest to the gallery in December 1984, completing the transfer.', price: 'gift', museum: true },
    { year: '2023–today', who: 'Buffalo AKG Art Museum', place: 'Buffalo, New York', note: 'The same institution reopened in 2023, after a major expansion, renamed the Buffalo AKG Art Museum. Accession unchanged (1964:16). On view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Giacomo Balla', role: 'The painter', palette: ['#8a4a2a', '#4a2c18', '#15100a'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Launched Futurism, 1909', palette: ['#bf2f25', '#3a1410', '#120806'] },
    { name: 'Étienne-Jules Marey', role: 'Chronophotography, the precedent', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Eadweard Muybridge', role: 'The galloping-horse photographs', palette: ['#6a6354', '#39322a', '#120f0c'] },
    { name: 'A. Conger Goodyear', role: 'Bought it from Balla, 1938', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The multiplied dog legs', where: 'Lower center, the dense brown blur beneath the dachshund’s body, where the legs should be', detail: 'The dog’s four short legs are smeared into a fan of maybe twenty overlapping positions, a brown haze of feet. This is the painting’s clearest single illustration of the manifesto’s claim that a running horse has not four legs but twenty: every leg-position the eye would catch in a fast trot, laid down at once. Persistence of vision made paint.' },
    { label: 'The swinging leash arcs', where: 'Center, the curving lines running from the lady’s hand down to the dog', detail: 'The leash is not one line but a set of repeated curves, the arcs of its swing captured together, so a single slack lead becomes a fan of loops. It is the same multiply-the-moving device applied to a thin moving object instead of a body, and it is the easiest place to watch Balla’s whole method work on something simple.' },
    { label: 'The lady’s stepping feet', where: 'Upper register, the row of small dark shoes and the black skirt-hem moving left to right', detail: 'Above the dog, the owner is present only as a flicker of feet and the black hem of her skirt, her steps multiplied into a staccato row of shoes. There is no face, no body, no figure, just the rhythm of the walking. Balla shows the walker by her motion alone.' },
    { label: 'The trotting dachshund body', where: 'Center, the single fairly solid dark sausage-shaped form the legs hang from', detail: 'Unlike the dissolved legs and the smeared leash, the dog’s long low body stays relatively whole and recognizable, the still core the motion-blur radiates out from. That contrast, solid body and exploded legs, is exactly how the eye reads the whole shape as one trotting dog rather than a brown smudge.' },
    { label: 'The pavement, the Tuscan road', where: 'The whole ground plane the figures cross, streaked pink and green', detail: 'The ground is not a flat color but a field of pink-and-green strokes, often read as the pale summer dust of the Montepulciano road catching the light. It also keeps Balla’s old divided-color habit alive: color built from separate strokes meant to mix in the viewer’s eye rather than on the palette.' },
    { label: 'Repetition as the whole method', where: 'Everywhere at once, comparing the blurred legs, leash and feet against the solid body', detail: 'Step back and the trick is the same all over the canvas: anything moving is painted as many overlapping copies of itself, and anything still stays single. Multiply the moving, hold the still. That one rule is the entire engine of the picture, and the simplest demonstration of why Futurism called this dynamism.' },
  ],
  lineage: {
    parents: [
      { label: 'Divisionism', mode: 'art' },
      { label: 'Chronophotography (Marey · Muybridge)', mode: 'civ' },
      { label: 'The Futurist manifestos', mode: 'art' },
    ],
    children: [
      { label: 'Abstraction of motion', mode: 'art' },
      { label: 'Marcel Duchamp’s Nude Descending', mode: 'art' },
      { label: 'The image of speed', mode: 'civ' },
    ],
  },
}
```

**Registry line (coordinator splices into `NARRATIVES`):**
```ts
//  dog: { teacher: DogTeacher, making: DogMaking, looking: DogLooking, science: DogScience, afterlife: DogAfterlife },
```

---

## PART B — the five `Dog`-prefixed chapter components (absinthe voice, no — character)

```tsx
// ─────────────────────────────────────────────────────────────
// Dynamism of a Dog on a Leash (Balla, 1912) - the five chapters
// ─────────────────────────────────────────────────────────────
function DogTeacher({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Rome · 1910" title="The teacher who joined his students’ revolution" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with a fact that the painting itself never lets on: the man who made this giddy little picture of a dog on a walk was the grown-up in the room. <strong>Giacomo Balla</strong> (1871&ndash;1958; pronounced &ldquo;JAH-ko-mo BAH-lah&rdquo;) was born in Turin, in the industrial north of Italy, and by his late thirties he was an established, respectable painter working in Rome. He was the older one. He was the teacher. The hot young avant-garde painters of Rome came to <em>him</em> to learn how to handle paint.
      </p>
      <p style={proseStyle}>
        What he taught them was a technique called <strong>Divisionism</strong> (the Italian cousin of French <strong>Pointillism</strong>). Both are the same basic idea: instead of mixing your colors on the palette and laying down a smooth blended green, you lay down separate little strokes and dots of pure unmixed color, a stroke of yellow next to a stroke of blue, and you let them mix in the viewer&rsquo;s eye when they step back. The painting does its blending at a distance, optically, inside your head. (Hold onto that, because the divided-color habit never quite leaves Balla, and you&rsquo;ll see it again in the dust of the road two chapters from now.) Among the students Balla taught this method were two names that matter a great deal to what happens next: <strong>Umberto Boccioni</strong> (1882&ndash;1916) and <strong>Gino Severini</strong> (1883&ndash;1966), both of whom would become major figures of the movement we&rsquo;re heading toward.
      </p>
      <p style={proseStyle}>
        Now the movement. In <strong>1909</strong>, a Milanese poet named <strong>Filippo Tommaso Marinetti</strong> (1876&ndash;1944) bought himself the front page of the Paris newspaper <em>Le Figaro</em> and published the <strong>Manifesto of Futurism</strong>, a roaring, deliberately outrageous declaration that the past was a tomb, museums were cemeteries, and the future belonged to speed, machines, the racing car, the airplane, the electric age. Futurism, the movement it kicked off, was the loudest of all the early-twentieth-century avant-gardes (the catch-all term for the experimental painters and writers who set out to break with everything that came before; literally French for &ldquo;advance guard,&rdquo; the soldiers who go out ahead of the army). Marinetti was its showman and its theorist. He wasn&rsquo;t a painter. The painters wrote their own document the next year.
      </p>
      <p style={proseStyle}>
        And here is the lovely inversion at the root of this whole picture. In <strong>1910</strong>, Balla&rsquo;s own former students, Boccioni and Severini among them, invited their old teacher to sign on to <em>their</em> new movement. He did. Balla is one of the five painters who signed the <strong>Technical Manifesto of Futurist Painting</strong> (published in April 1910), alongside Boccioni, Severini, <strong>Carlo Carr&agrave;</strong> and <strong>Luigi Russolo</strong>. So the older man who had taught the rebels their craft turned around and joined their rebellion. And of those five painter-signers, Balla would push the furthest of all toward pure abstraction, later canvases (the iridescent compositions, the <em>Abstract Speed</em> series) that drop the object entirely and paint only speed and light. Which is worth holding onto, because it makes the friendly, perfectly legible little dog you are about to meet an early, still-figurative moment from the most abstract painter the movement produced.
      </p>
    </article>
  )
}

function DogMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Montepulciano · May 1912" title="A dachshund, a lady in black, a Tuscan road" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>May 1912</strong>, Balla was not in a city full of motorcars. He was in <strong>Montepulciano</strong> (pronounced &ldquo;mon-teh-pull-CHA-no&rdquo;), a small hilltop town in <strong>Tuscany</strong>, the rolling green region of central Italy near Siena, the kind of place with stone streets and a slow afternoon light and almost nothing the Futurists claimed to love. He was there as the guest of one of his pupils, <strong>the Contessa Nerazzini</strong>, in whose Tuscan house he was staying. And what he chose to paint, in this most un-mechanical of settings, was about the least futuristic subject imaginable: a woman walking her little dog.
      </p>
      <p style={proseStyle}>
        The subject is a <strong>dachshund</strong> (the long-bodied, short-legged German breed, the &ldquo;sausage dog&rdquo;) on a leash, and the stepping feet of its owner, an elegant woman usually described as dressed in black. The museum&rsquo;s own record supports the bones of the scene: the dachshund, the leash, the owner&rsquo;s staccato steps, the month, the Tuscan road. (The black dress is the touch the popular literature adds, not the museum, which says only &ldquo;the woman&rdquo;; it is a fine and widely-repeated detail, just not a curatorial fact.) Where the popular books go further than anyone can is the next step: you will often see the walking lady identified <em>as</em> the Contessa and the dog called hers. That leap the record does not actually make. The museum names the Contessa as Balla&rsquo;s host, not as the figure in the picture, and is careful to call the dog only &ldquo;his or her owner&rsquo;s.&rdquo; So: the host has a name, the scene has a dog and a leash and a lady in black, and whose dog it specifically was is the open part. That is the whole cast. There is no event, no drama, no machine. There is a person taking a small animal for a walk, and a painter watching the feet.
      </p>
      <p style={proseStyle}>
        And then there is the ground they walk on. The bottom of the canvas is not a flat brown floor but a shimmer of <strong>pink-and-green strokes</strong>, which is usually read as the <strong>pale dust of the Tuscan road</strong> caught in the summer sun. This is the place giving itself away. A movement that prided itself on smoke and steel and the boulevard got one of its signature pictures out of country dust on a quiet road, painted by the <strong>divided-color habit</strong> (those separate strokes of pure color, meant to mix in your eye) Balla had been teaching for years. The technique is the avant-garde&rsquo;s; the subject is a wiener dog in the Tuscan afternoon. The gap between those two things is the whole charm of the thing.
      </p>
    </article>
  )
}

function DogLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Twenty legs on a wiener dog" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is not large. It is about <strong>three feet by three and a half feet</strong>, a bit wider than it is tall, roughly the size of a coffee-table top, and it is hung the wide way, landscape orientation, which gives the little dog room to travel across it. Stand in front of it and let your eye go where the picture pulls it, which is straight down to the bottom center, to the dog. So that&rsquo;s where we&rsquo;ll start.
      </p>
      <p style={proseStyle}>
        Look at the <strong>legs</strong> first, because the legs are the whole joke and the whole argument at once. Under the dog&rsquo;s body, where you expect to see four short dachshund legs, there is instead a <strong>dense brown blur</strong>, a fan of feet, a haze of paws, far too many of them, smeared into one another at the bottom of the canvas like the dog has sprouted a centipede&rsquo;s worth of legs and is using all of them. Count them and you can&rsquo;t; that is the point. Balla has painted not the four legs the dog has at any one instant but <strong>every position those four legs pass through</strong> in a fast little trot, all laid down on top of each other at once. The legs nearest the ground go to pure motion-blur, a brown smear; the ones higher up are slightly more distinct. The eye reads the whole fan, correctly, as feet moving too fast to freeze. You are looking at speed itself, painted.
      </p>
      <p style={proseStyle}>
        Now follow the <strong>leash</strong>, the line that climbs up and to the right, from somewhere near the dog&rsquo;s collar, angling across the picture toward the lady&rsquo;s hand. Balla has done the same thing to it. It is not one taut line. It is a <strong>fan of curved arcs</strong>, a set of loops drawn one over another, because a leash on a walking dog swings, and Balla has caught several positions of that swing together. A single slack lead becomes a little nest of curves in the middle of the picture. This is the easiest place to watch the method work on something simple: the leash has no body, no fur, no anatomy to confuse you, just a thin moving line multiplied into the shape of its own motion. Once you see what he did to the leash, you understand what he did to the legs.
      </p>
      <p style={proseStyle}>
        Lift your eye now to the <strong>top of the canvas</strong>, where the <strong>lady</strong> is. Or rather, where the lady almost isn&rsquo;t. There is no face. There is no body. There is no figure standing there at all. There is only a <strong>staccato row of small dark shoes</strong> and the <strong>black hem of a skirt</strong>, the feet multiplied into a quick rhythm of steps moving left to right, the same trick as the dog&rsquo;s legs but slower and tidier, a person&rsquo;s stride rather than a dog&rsquo;s scramble. The leash you just followed climbs from the dog up to her unseen hand, tying the two together across the picture. Balla has shown you a walking woman using nothing but her feet and the swing of her hem. You supply the rest of her yourself. It is a small, witty piece of restraint: he could have painted her whole and chose to paint her only as her motion.
      </p>
      <p style={proseStyle}>
        So why does any of this read as a dog and not as a brown explosion? Because of one steady thing in the middle of all the blur. The dog&rsquo;s <strong>long low body</strong>, the sausage itself, stays <strong>relatively solid and whole</strong>, a single dark recognizable shape, while the legs and the leash dissolve into repeated copies around it. That contrast is the engine of the picture. The still core holds the shape together; the moving parts fly apart into motion-blur around it. Your eye locks onto the solid body, reads &ldquo;dog,&rdquo; and then accepts the surrounding haze as the dog&rsquo;s movement rather than as chaos.
      </p>
      <p style={proseStyle}>
        And under all of it, the <strong>ground</strong>: not a flat color but a field of small <strong>pink-and-green strokes</strong>, the divided color of Balla&rsquo;s Divisionist training (separate touches of color meant to mix in your eye, the thing he&rsquo;d been teaching for years), usually read as the pale road dust of a Tuscan summer shimmering in the heat. The dog and the lady move across it and the road shimmers under them.
      </p>
      <p style={proseStyle}>
        Now pull back and notice the rule, because once you see it the whole picture clicks open. <strong>Anything that moves, Balla paints as many overlapping copies of itself. Anything that stays still, he paints once.</strong> The legs move, so there are twenty of them. The leash swings, so it is a fan of arcs. The feet step, so they are a row of shoes. The body holds steady, so it stays single and solid. Multiply the moving, hold the still. That one rule, applied with a perfectly straight face to a small dog on a leash, is the entire method, and it is the simplest demonstration anywhere in the movement of what the Futurists meant by their favorite word, <strong>dynamism</strong>: not a picture of a moving thing, but a picture of the movement itself.
      </p>
    </article>
  )
}

function DogScience({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The idea" title="A running horse has twenty legs" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he blur of legs wasn&rsquo;t a whim. It was almost a literal illustration of something the Futurist painters had written down two years earlier. The <strong>Technical Manifesto of Futurist Painting</strong> (1910), the one Balla signed, declared, in its own words, that <strong>&ldquo;all things move, all things run, all things are rapidly changing&rdquo;</strong> and, in the line this picture all but acts out, that <strong>&ldquo;a running horse has not four legs, but twenty, and their movements are triangular.&rdquo;</strong> Balla simply swapped the racehorse for a dachshund. (One thing the manifesto does <em>not</em> say, despite what you&rsquo;ll sometimes read, is anything at all about dogs. There is no &ldquo;dog passage&rdquo; the painting illustrates. The documented example is the horse, and the dog is Balla&rsquo;s own affectionate downsizing of it.)
      </p>
      <p style={proseStyle}>
        The idea underneath the slogan is something you can test on yourself right now. It is called <strong>persistence of vision</strong>: a moving object doesn&rsquo;t register on your eye as a clean snapshot but smears, briefly, into the positions it just left, which is why a waved sparkler draws a line of light and a fast-spinning wheel looks like a transparent disc. Your eye holds each image for a fraction of a second after it&rsquo;s gone, so a fast-moving thing piles its recent positions on top of one another. The Futurists took that smear, that pile-up of positions, and decided it was more honest than a frozen outline. A photograph stops time, which is a lie, because nothing in the world actually holds still. They wanted to paint the smear. Balla&rsquo;s swarm of dog-legs is exactly the &ldquo;twenty legs&rdquo; idea: not how the dog looks in one stopped instant, but how its trotting feet pile up in the eye that watches them.
      </p>
      <p style={proseStyle}>
        And here the painters had help from an unlikely place: science. Back in the <strong>1880s</strong>, decades before Futurism, two men had already photographed exactly this pile-up. In France, the scientist <strong>&Eacute;tienne-Jules Marey</strong> (1830&ndash;1904) invented <strong>chronophotography</strong> (from the Greek <em>chronos</em>, &ldquo;time&rdquo;: literally &ldquo;time-photography&rdquo;). He rigged cameras to fire many exposures onto a single photographic plate, so that one running man or one flying bird came out as a row of overlapping ghost-figures across one frame, a single body caught in a dozen successive positions at once. In America, the photographer <strong>Eadweard Muybridge</strong> (1830&ndash;1904) did a related thing with a bank of cameras tripped one after another, and famously settled a bet about whether a galloping horse ever has all four hooves off the ground at once (it does). Marey&rsquo;s single-plate overlap is the closer cousin of what Balla painted: one body, many positions, all on one surface.
      </p>
      <p style={proseStyle}>
        How directly Balla worked from these motion studies is worth being careful about. He was demonstrably fascinated by them, and the dog picture reads like a chronophotograph turned into oil paint, the same overlapping ghost-positions, the same row of phases of one moving body. But whether he sat down with a specific Marey or Muybridge plate and copied from it is not something we can pin to anything Balla himself said, so the dog is not a copy of any one photograph. What is not in doubt, though, is the genealogy. Chronophotography is the documented source of the entire motion-painting toolkit the Futurists worked with: the blur, the multiplication, the overlapping phases all came out of the photographs first. Balla didn&rsquo;t need a particular plate. He inherited the idea the plates had already made visible, and arrived at the same truth in paint, by a man who had clearly looked at the photographs.
      </p>
    </article>
  )
}

function DogAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="Berlin, then a MoMA founder’s wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting&rsquo;s life as an object, the <strong>provenance</strong> (the documented chain of who owned a work, from the painter&rsquo;s hand to where it hangs now), starts where a lot of early Futurism started: <strong>Berlin</strong>. In <strong>1913</strong> the dog made its international debut at the <strong>Erster Deutscher Herbstsalon</strong> (the &ldquo;First German Autumn Salon&rdquo;), a big survey of new European art mounted by the dealer <strong>Herwarth Walden</strong> at his <strong>Galerie Der Sturm</strong>, the gallery and magazine that did more than almost anyone to carry the new movements across Europe. And there is a small perfect irony in where it ended up on that wall: the painting that had learned everything it knew about motion from photography was hung, on its debut, right beside a photograph.
      </p>
      <p style={proseStyle}>
        Then a crossing. In <strong>1938</strong>, the painting was bought <strong>directly from Balla</strong> by <strong>A. Conger Goodyear</strong> (1877&ndash;1964), an American industrialist who happened to be the <strong>first president of the Museum of Modern Art</strong> in New York. (No purchase price is documented, so we won&rsquo;t invent one. The popular shortcut that the painting went straight from the artist to its museum is also wrong: it went through the Berlin gallery and then through Goodyear&rsquo;s private collection first.) When Goodyear died in <strong>1964</strong>, his bequest split the work, a life interest to <strong>George F. Goodyear</strong> and the painting itself to the <strong>Albright-Knox Art Gallery</strong> in <strong>Buffalo, New York</strong>, which assigned it the accession number 1964:16. George F. Goodyear completed the gift, handing over his life interest, in December <strong>1984</strong>. And in <strong>2023</strong> the Albright-Knox reopened after a major expansion under a new name, the <strong>Buffalo AKG Art Museum</strong>, which is where the dog trots today, accession number unchanged.
      </p>

      <SectionHeader accent={accent} label="The verdict" title="Crude, then beloved" />
      <p style={proseStyle}>
        The picture&rsquo;s reputation took a while to settle. Mid-century critics were unimpressed: in the 1940s it was dismissed as crude and as a cliché of modern art, the multiplied legs read by some as a gimmick that had dated. By <strong>2014</strong> the mood had flipped, and the same device was being called one of the most elegant and accurate things ever painted in the Futurist tradition. What didn&rsquo;t change is that this became, by a wide margin, the Futurist painting that ordinary people actually love, the one that gets onto the postcards and the tote bags, which is worth sitting with for a moment, because it is genuinely strange.
      </p>
      <p style={proseStyle}>
        Here is the strangeness, and it should not be sanded off. Futurism was not a gentle movement. Marinetti&rsquo;s <strong>1909 founding Manifesto of Futurism</strong> didn&rsquo;t just praise the racing car; it glorified violence, the machine gun, contempt for the past, and war, which it called <strong>&ldquo;the world&rsquo;s only hygiene.&rdquo;</strong> Several of the Futurists, Marinetti among them, would later attach themselves to Italian Fascism. This was an avant-garde that meant the aggression in its slogans. And out of that same movement, with the same multiply-the-motion technique meant to capture the speed of the modern machine, came a charming, almost comic picture of a <strong>dachshund out for a walk</strong>. The cuteness and the ideology sit in the same body of work, and the honest thing is to hold both: the dog really is delightful, and the movement that made it really did cheer for war. The picture is not innocent of its movement. It is just the friendliest face that movement ever put on.
      </p>
      <p style={proseStyle}>
        And maybe that is exactly why it lasts. Most Futurist paintings ask you to thrill to a force you may not actually want to thrill to, the speeding car, the surging crowd, the war as cleansing. The dog asks nothing of the kind. It takes the movement&rsquo;s one genuinely new idea, that you can paint movement itself rather than a thing that happens to be moving, and spends it on the smallest, most harmless, most universally recognizable scene there is: somebody&rsquo;s little dog, hurrying to keep up, on a leash, on a sunny road. The twenty legs are doing serious avant-garde work. They are also, unmistakably, a wiener dog in a hurry. That is the joke, and it is a good one, and it has outlasted nearly everything louder around it.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  dog: { teacher: DogTeacher, making: DogMaking, looking: DogLooking, science: DogScience, afterlife: DogAfterlife },
```

---

## Fact ledger (every concrete claim → fact-pack item, gate-corrected)

| claim in final | fact-pack item | flag |
|---|---|---|
| Balla 1871–1958, born Turin, Rome teacher, Divisionist | §6, Beat 1 | DOCUMENTED |
| Pupils Boccioni & Severini pulled him into Futurism; he signed the 1910 Technical Manifesto (5 signers, +Carrà, Russolo, pub. April 1910) | Beat 1 | DOCUMENTED |
| Balla pushed furthest of the five signers into pure abstraction (iridescent compositions, *Abstract Speed*); the dog is an early figurative work for him | frame C-3 / Britannica-Artsy | DOCUMENTED |
| Marinetti, 1909 *Manifesto of Futurism*, *Le Figaro*, Paris; not a painter | §6 | DOCUMENTED |
| Painted May 1912 at Montepulciano, near Siena, Tuscany, as guest of his student the Contessa Nerazzini | Beat 4 + Buffalo AKG page (gate B1/C-1) | DOCUMENTED (museum) |
| Contessa Nerazzini = Balla's student/host (ASSERTED); whether the walking woman IS her / the dog is HERS = the open part (hedged) | gate B1 / C-1 correction | DOCUMENTED host + HEDGED ownership |
| Subject = dachshund on leash + stepping feet of owner; "lady in black" kept as secondary-lit detail, NOT implied museum-sourced | Beat 4 / fact F2 | DOCUMENTED (dog/leash/steps) + secondary (black dress) |
| Pink/green ground = pale Tuscan road dust in sun ("usually read as") | annotation 5, Beat 4 | DOCUMENTED (curatorial reading) |
| Manifesto quotes verbatim: "all things move…"; "a running horse has not four legs, but twenty, and their movements are triangular" | Beat 2 | DOCUMENTED (verbatim) |
| NO manifesto "dog passage"; tied to the HORSE line; explicit no-dog-line note | Beat 2 catch / fact N4 | LEGEND-false — refused |
| Persistence of vision explained; "twenty legs" = pile-up of positions | Beat 2 | DOCUMENTED |
| Marey (1830–1904) single-plate chronophotography; Muybridge (1830–1904) galloping-horse | Beat 3, §6 | DOCUMENTED |
| Chronophotography = the documented SOURCE of the motion toolkit (blur/multiplication/phases); but no specific copied plate claimed | Beat 3 + frame C-2 | DOCUMENTED genealogy / UNDOCUMENTED specific plate |
| Debut Erster Deutscher Herbstsalon, Der Sturm (Walden), Berlin, Sept–Dec 1913, beside a photograph | Beat 5, provenance | DOCUMENTED |
| 1938 bought directly from Balla by A. Conger Goodyear (1877–1964), first MoMA president | provenance, §6 | DOCUMENTED |
| No purchase price | provenance catch | UNDOCUMENTED — not invented |
| 1964 bequest split (G.F. Goodyear life interest + Albright-Knox), acc. 1964:16; 1984 gift completes it | provenance | DOCUMENTED |
| 2023 renamed Buffalo AKG Art Museum, accession unchanged | §1 | DOCUMENTED |
| Reception: crude / "a cliché of modern art" (1940s) → among the most elegant and accurate Futurist works (2014), paraphrased not falsely quoted | Beat 5 / fact F3 | DOCUMENTED (paraphrased) |
| Futurism glorified war = "the world's only hygiene" — anchored to the 1909 FOUNDING Manifesto, not the 1910 Technical Manifesto; Fascism tie hedged ("several") | Beat 5 + frame F-(a)q | DOCUMENTED |
| Dimensions 2′11⅜″ × 3′7¼″ (89.9 × 109.9 cm); ~3 ft × 3½ ft; coffee-table top | §1 | DOCUMENTED (imperial-converted) |
| Landscape orientation, heroAspect 1.22 | §1 dims + en-scan 2304×1902 | DOCUMENTED |
| rights pd-us, /en/ tier (pub. 1912; Balla d. 1958 → worldwide PD 2029) | §1 Rights | DOCUMENTED |

**Voice/rule self-checks:** no `—` (em-dash) character anywhere in PART A or PART B new prose
(em-dashes avoided; verbatim manifesto/Marinetti quotes carry only their own commas, no dashes);
all dims imperial; hero is whole canvas (`heroFit: 'contain'`); 5 sections, 6 annotations, 5
figures, lineage present; the verbatim manifesto quotes reproduced exactly; "the world's only
hygiene" reproduced verbatim and attributed to the 1909 founding manifesto; museum = Buffalo AKG;
no invented price; const `making` title now matches the rendered component title.
