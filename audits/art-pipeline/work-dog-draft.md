# DRAFT — Giacomo Balla, *Dynamism of a Dog on a Leash* (1912) — WORK read

Authored (Opus) from `work-dog-factpack.md` (SOURCE OF TRUTH) in the absinthe house voice.
Gates next. Fact handling per the pack: tie the motion idea to the **horse** line ("twenty
legs"), NOT a nonexistent manifesto dog passage; the "Contessa Nerazzini" dog-owner is
**legend** (hedged out, only "a lady in black and her dog, Montepulciano, May 1912" asserted);
museum = **Buffalo AKG Art Museum** (was Albright-Knox; older provenance lines keep the old
name); Marey/Muybridge are the **parallel science**, not a proven copy; **no invented price**;
dims **imperial only**; new prose contains **no — character**; `rights: 'pd-us'` (`/en/` tier).

---

## PART A — the `DOG` const (`art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Dynamism of a Dog on a Leash (Dinamismo di un cane al
// guinzaglio), Giacomo Balla, 1912, Buffalo AKG Art Museum (was the
// Albright-Knox Art Gallery; renamed 2023). The flagship Futurism work
// read. Authored through the art content pipeline (fact pack → Opus →
// 5 gates → revise). Chapter prose in art-section-reader.tsx
// NARRATIVES['dog'] (Dog… prefix). LEGENDS handled per fact pack: the
// motion idea ties to the manifesto's HORSE line ("a running horse has
// not four legs, but twenty"), NOT a nonexistent "dogs in movement"
// passage; the owner is NOT asserted as "Contessa Nerazzini" (legend),
// only "a lady in black and her dachshund, Montepulciano, May 1912";
// Marey/Muybridge are the parallel motion-science, not a documented
// copied plate. PD-US only (Balla d. 1958 → worldwide PD 2029) → /en/
// tier figure, rights: 'pd-us'.
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
    { id: 'teacher', eyebrow: 'Rome · 1910', dateLabel: '1910', title: 'The teacher who joined his own students’ revolution', blurb: 'Balla was the older, established painter who taught the young Roman avant-garde the divided-color technique, then signed on to the Futurist movement his own pupils, Boccioni and Severini, had started.', progress: 0.08 },
    { id: 'making', eyebrow: 'Montepulciano · 1912', dateLabel: 'May 1912', title: 'A dachshund, a lady in black, a Tuscan road', blurb: 'Painted while visiting a student in a Tuscan hill town: a small dog on a leash and the stepping feet of its owner, an elegant woman in black, dissolved into a flicker of repeated forms over the pale summer dust.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 11⅜ in × 3 ft 7¼ in', title: 'Twenty legs on a wiener dog', blurb: 'The blurred multiplied legs, the swinging leash drawn as a fan of arcs, the staccato row of the lady’s feet, the solid sausage body the motion radiates from, and the pink-and-green road underneath.', progress: 0.54 },
    { id: 'science', eyebrow: 'The idea', dateLabel: '1880s–1912', title: 'Persistence of vision, and the cameras that proved it', blurb: 'The manifesto’s program (a running horse has twenty legs, not four) and the chronophotography of Marey and Muybridge, the multiple-exposure motion photographs the painting reads like, turned into paint.', progress: 0.76 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1913–today', title: 'The charming picture from a violent movement', blurb: 'Debuted in Berlin in 1913, bought from the artist by a MoMA founder, dismissed mid-century as crude, later loved as the friendly face of a movement that openly glorified war. On view in Buffalo.', progress: 0.96 },
  ],
  provenance: [
    { year: '1912', who: 'Giacomo Balla (the artist)', place: 'Montepulciano / Rome', note: 'Painted May 1912 while staying at Montepulciano, in Tuscany, visiting a pupil.', price: null },
    { year: '1913', who: 'Galerie Der Sturm (Herwarth Walden)', place: 'Berlin', note: 'Shown internationally at the Erster Deutscher Herbstsalon (First German Autumn Salon), Berlin, September–December 1913, hung beside a photograph; Walden’s Sturm-Galerie handled it.', price: null },
    { year: '1938', who: 'A. Conger Goodyear', place: 'Buffalo / New York', note: 'Bought directly from the artist in 1938 by the industrialist A. Conger Goodyear, the first president of the Museum of Modern Art. No purchase price is documented.', price: null },
    { year: '1964', who: 'George F. Goodyear (life interest) & the Albright-Knox Art Gallery', place: 'Buffalo', note: 'A. Conger Goodyear’s 1964 bequest split the work: a life interest to George F. Goodyear and the painting to the gallery. Accession 1964:16 assigned.', price: 'bequest', museum: true },
    { year: '1984', who: 'Albright-Knox Art Gallery (full title)', place: 'Buffalo', note: 'George F. Goodyear gave his life interest to the gallery in December 1984, completing the transfer.', price: 'gift', museum: true },
    { year: '2023–today', who: 'Buffalo AKG Art Museum', place: 'Buffalo, New York', note: 'The same institution reopened in 2023, after a major expansion, renamed the Buffalo AKG Art Museum. Accession unchanged (1964:16). On view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Giacomo Balla', role: 'The painter', palette: ['#8a4a2a', '#4a2c18', '#15100a'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Launched Futurism, 1909', palette: ['#bf2f25', '#3a1410', '#120806'] },
    { name: 'Étienne-Jules Marey', role: 'Chronophotography, the parallel', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
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
        Now the movement. In <strong>1909</strong>, a Milanese poet named <strong>Filippo Tommaso Marinetti</strong> (1876&ndash;1944) bought himself the front page of the Paris newspaper <em>Le Figaro</em> and published the <strong>Manifesto of Futurism</strong>, a roaring, deliberately outrageous declaration that the past was a tomb, museums were cemeteries, and the future belonged to speed, machines, the racing car, the airplane, the electric age. Futurism, the movement it kicked off, was the loudest of all the early-twentieth-century avant-gardes (the catch-all term for the experimental painters and writers who set out to break with everything that came before; literally French for &ldquo;advance guard,&rdquo; the soldiers who go out ahead of the army). Marinetti was its impresario and ideologue. He wasn&rsquo;t a painter. The painters wrote their own document the next year.
      </p>
      <p style={proseStyle}>
        And here is the lovely inversion at the root of this whole picture. In <strong>1910</strong>, Balla&rsquo;s own former students, Boccioni and Severini among them, invited their old teacher to sign on to <em>their</em> new movement. He did. Balla is one of the five painters who signed the <strong>Technical Manifesto of Futurist Painting</strong> (published in April 1910), alongside Boccioni, Severini, <strong>Carlo Carr&agrave;</strong> and <strong>Luigi Russolo</strong>. So the older man who had taught the rebels their craft turned around and joined their rebellion. The dog picture, two years later, comes from a painter who taught the technique the divided color is built on, and then enlisted under the flag of his own pupils.
      </p>
    </article>
  )
}

function DogMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Montepulciano · May 1912" title="A dog, a lady in black, a hill town" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>May 1912</strong>, Balla was not in a city full of motorcars. He was in <strong>Montepulciano</strong> (pronounced &ldquo;mon-teh-pull-CHA-no&rdquo;), a small hilltop town in <strong>Tuscany</strong>, the rolling green region of central Italy near Siena, the kind of place with stone streets and a slow afternoon light and almost nothing the Futurists claimed to love. He was there visiting one of his pupils. And what he chose to paint, in this most un-mechanical of settings, was about the least futuristic subject imaginable: a woman walking her little dog.
      </p>
      <p style={proseStyle}>
        Here is what is actually documented about that woman and that dog, because the popular books like to say more. The subject is a <strong>dachshund</strong> (the long-bodied, short-legged German breed, the &ldquo;sausage dog&rdquo;) on a leash, and the <strong>stepping feet of its owner, an elegant woman dressed in black</strong>. That much the museum and the record support: a lady in black, her dachshund, a leash, the Tuscan road. (You will often see the owner named as a specific countess, &ldquo;the Contessa Nerazzini,&rdquo; and the dog described as hers. By one often-repeated account that is who she was, but it is not on the museum&rsquo;s own page and is not tied to a primary source we can stand behind, so treat the name as a good story rather than a settled fact. What we know is the lady, the black dress, the dog, and the month.) That is the whole cast. There is no event, no drama, no machine. There is a person taking a small animal for a walk, and a painter watching the feet.
      </p>
      <p style={proseStyle}>
        And then there is the ground they walk on. The bottom of the canvas is not a flat brown floor but a shimmer of <strong>pink-and-green strokes</strong>, which is usually read as the <strong>pale dust of the Tuscan road</strong> caught in the summer sun. This is the place giving itself away. A movement that prided itself on smoke and steel and the boulevard got one of its signature pictures out of country dust on a quiet road, painted by separate strokes of color in the divided-color habit Balla had been teaching for years. The technique is the avant-garde&rsquo;s; the subject is a wiener dog in the Tuscan afternoon. The gap between those two things is the whole charm of the thing.
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
        he painting is not large. It is about <strong>three feet by three and a half feet</strong>, a bit wider than it is tall, roughly the size of a coffee-table top, and it is hung the wide way, landscape orientation, which gives the little dog room to travel across it. Stand in front of it and let your eye go where the picture pulls it, which is straight down to the bottom center, to the dog. So go there.
      </p>
      <p style={proseStyle}>
        Look at the <strong>legs</strong> first, because the legs are the whole joke and the whole argument at once. Under the dog&rsquo;s body, where you expect to see four short dachshund legs, there is instead a <strong>dense brown blur</strong>, a fan of feet, a haze of paws, far too many of them, smeared into one another at the bottom of the canvas like the dog has sprouted a centipede&rsquo;s worth of legs and is using all of them. Count them and you can&rsquo;t; that is the point. Balla has painted not the four legs the dog has at any one instant but <strong>every position those four legs pass through</strong> in a fast little trot, all laid down on top of each other at once. The legs nearest the ground go to pure motion-blur, a brown smear; the ones higher up are slightly more distinct. The eye reads the whole fan, correctly, as feet moving too fast to freeze. You are looking at speed itself, painted.
      </p>
      <p style={proseStyle}>
        Now follow the <strong>leash</strong>, the line that runs up and to the right, from somewhere near the dog&rsquo;s collar toward the lady&rsquo;s hand. Balla has done the same thing to it. It is not one taut line. It is a <strong>fan of curved arcs</strong>, a set of loops drawn one over another, because a leash on a walking dog swings, and Balla has caught several positions of that swing together. A single slack lead becomes a little nest of curves in the middle of the picture. This is the easiest place to watch the method work on something simple: the leash has no body, no fur, no anatomy to confuse you, just a thin moving line multiplied into the shape of its own motion. Once you see what he did to the leash, you understand what he did to the legs.
      </p>
      <p style={proseStyle}>
        Lift your eye now, up and a little to the left, to the <strong>top of the dog and above it</strong>, where the <strong>lady</strong> is. Or rather, where the lady almost isn&rsquo;t. There is no face. There is no body. There is no figure standing there at all. There is only a <strong>staccato row of small dark shoes</strong> and the <strong>black hem of a skirt</strong>, the feet multiplied into a quick rhythm of steps moving left to right, the same trick as the dog&rsquo;s legs but slower and tidier, a person&rsquo;s stride rather than a dog&rsquo;s scramble. Balla has shown you a walking woman using nothing but her feet and the swing of her hem. You supply the rest of her yourself. It is a small, witty piece of restraint: he could have painted her whole and chose to paint her only as her motion.
      </p>
      <p style={proseStyle}>
        So why does any of this read as a dog and not as a brown explosion? Because of one steady thing in the middle of all the blur. The dog&rsquo;s <strong>long low body</strong>, the sausage itself, stays <strong>relatively solid and whole</strong>, a single dark recognizable shape, while everything attached to it (the legs, the leash, the tail, the ears) dissolves into repeated copies. That contrast is the engine of the picture. The still core holds the shape together; the moving parts fly apart into motion-blur around it. Your eye locks onto the solid body, reads &ldquo;dog,&rdquo; and then accepts the surrounding haze as the dog&rsquo;s movement rather than as chaos.
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
        he blur of legs wasn&rsquo;t a whim. It was almost a literal illustration of something the Futurist painters had written down two years earlier. The <strong>Technical Manifesto of Futurist Painting</strong> (1910), the one Balla signed, declared, in its own words, that <strong>&ldquo;all things move, all things run, all things are rapidly changing&rdquo;</strong> and, in the line this picture all but acts out, that <strong>&ldquo;a running horse has not four legs, but twenty, and their movements are triangular.&rdquo;</strong> Read that again and then look back at the dog. Balla simply swapped the racehorse for a dachshund. (One thing the manifesto does <em>not</em> say, despite what you&rsquo;ll sometimes read, is anything at all about dogs. There is no &ldquo;dog passage&rdquo; the painting illustrates. The documented example is the horse, and the dog is Balla&rsquo;s own affectionate downsizing of it.)
      </p>
      <p style={proseStyle}>
        The idea underneath the slogan is something you can test on yourself right now. It is called <strong>persistence of vision</strong>: a moving object doesn&rsquo;t register on your eye as a clean snapshot but smears, briefly, into the positions it just left, which is why a waved sparkler draws a line of light and a fast-spinning wheel looks like a transparent disc. Your eye holds each image for a fraction of a second after it&rsquo;s gone, so a fast-moving thing piles its recent positions on top of one another. The Futurists took that smear, that pile-up of positions, and decided it was more honest than a frozen outline. A photograph stops time, which is a lie, because nothing in the world actually holds still. They wanted to paint the smear. Balla&rsquo;s swarm of dog-legs is exactly the &ldquo;twenty legs&rdquo; idea: not how the dog looks in one stopped instant, but how its trotting feet pile up in the eye that watches them.
      </p>
      <p style={proseStyle}>
        And here the painters had help from an unlikely place: science. Back in the <strong>1880s</strong>, decades before Futurism, two men had already photographed exactly this pile-up. In France, the scientist <strong>&Eacute;tienne-Jules Marey</strong> (1830&ndash;1904) invented <strong>chronophotography</strong> (from the Greek <em>chronos</em>, &ldquo;time&rdquo;: literally &ldquo;time-photography&rdquo;). He rigged cameras to fire many exposures onto a single photographic plate, so that one running man or one flying bird came out as a row of overlapping ghost-figures across one frame, a single body caught in a dozen successive positions at once. In America, the photographer <strong>Eadweard Muybridge</strong> (1830&ndash;1904) did a related thing with a bank of cameras tripped one after another, and famously settled a bet about whether a galloping horse ever has all four hooves off the ground at once (it does). Marey&rsquo;s single-plate overlap is the closer cousin of what Balla painted: one body, many positions, all on one surface.
      </p>
      <p style={proseStyle}>
        How directly Balla worked from these motion studies is worth being careful about. He was demonstrably fascinated by them, and the dog picture reads like a chronophotograph turned into oil paint, the same overlapping ghost-positions, the same row of phases of one moving body. But whether he sat down with a specific Marey or Muybridge plate and copied from it is not something we can pin to anything Balla himself said. So think of the cameras as the <strong>parallel science</strong> the painters drew on, the proof from a different field that a moving body really does smear into overlapping positions, rather than as a plate he traced. The dog is not a copy of a photograph. It is the same truth, arrived at in paint, by a man who had clearly looked at the photographs.
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
        he painting&rsquo;s life as an object, the <strong>provenance</strong> (the documented chain of who owned a work, from the painter&rsquo;s hand to where it hangs now), starts where a lot of early Futurism started: <strong>Berlin</strong>. In <strong>1913</strong> the dog made its international debut at the <strong>Erster Deutscher Herbstsalon</strong> (the &ldquo;First German Autumn Salon&rdquo;), a big survey of new European art mounted by the dealer <strong>Herwarth Walden</strong> at his <strong>Galerie Der Sturm</strong>, the gallery and magazine that did more than almost anyone to carry the new movements across Europe. The picture hung there, fittingly, beside a photograph.
      </p>
      <p style={proseStyle}>
        Then a crossing. In <strong>1938</strong>, the painting was bought <strong>directly from Balla</strong> by <strong>A. Conger Goodyear</strong> (1877&ndash;1964), an American industrialist who happened to be the <strong>first president of the Museum of Modern Art</strong> in New York. (No purchase price is documented, so we won&rsquo;t invent one. The popular shortcut that the painting went straight from the artist to its museum is also wrong: it went through the Berlin gallery and then through Goodyear&rsquo;s private collection first.) When Goodyear died in <strong>1964</strong>, his bequest split the work, a life interest to <strong>George F. Goodyear</strong> and the painting itself to the <strong>Albright-Knox Art Gallery</strong> in <strong>Buffalo, New York</strong>, which assigned it the accession number 1964:16. George F. Goodyear completed the gift, handing over his life interest, in December <strong>1984</strong>. And in <strong>2023</strong> the Albright-Knox reopened after a major expansion under a new name, the <strong>Buffalo AKG Art Museum</strong>, which is where the dog trots today, accession number unchanged.
      </p>

      <SectionHeader accent={accent} label="The verdict" title="Crude, then beloved" />
      <p style={proseStyle}>
        The picture&rsquo;s reputation took a while to settle. Mid-century critics were unimpressed: it got called &ldquo;crude&rdquo; and &ldquo;clich&eacute;d&rdquo; in the 1940s, the multiplied legs read by some as a gimmick that had dated. By <strong>2014</strong> the mood had flipped, and the same device was being praised as &ldquo;elegant and accurate.&rdquo; What didn&rsquo;t change is that this became, by a wide margin, the Futurist painting that ordinary people actually love, the one that gets onto the postcards and the tote bags, which is worth sitting with for a moment, because it is genuinely strange.
      </p>
      <p style={proseStyle}>
        Here is the strangeness, and it should not be sanded off. Futurism was not a gentle movement. Its manifestos didn&rsquo;t just praise the racing car; they glorified violence, the machine gun, contempt for the past, and war, which Marinetti called <strong>&ldquo;the world&rsquo;s only hygiene.&rdquo;</strong> Several of the Futurists, Marinetti among them, would later attach themselves to Italian Fascism. This was an avant-garde that meant the aggression in its slogans. And out of that same movement, with the same multiply-the-motion technique meant to capture the speed of the modern machine, came a charming, almost comic picture of a <strong>dachshund out for a walk</strong>. The cuteness and the ideology sit in the same body of work, and the honest thing is to hold both: the dog really is delightful, and the movement that made it really did cheer for war. The picture is not innocent of its movement. It is just the friendliest face that movement ever put on.
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

## Fact ledger (every concrete claim → fact-pack item)

| claim in draft | fact-pack item | flag |
|---|---|---|
| Balla 1871–1958, born Turin, Rome teacher, Divisionist | §6, Beat 1 | DOCUMENTED |
| Pupils Boccioni & Severini pulled him into Futurism; he signed the 1910 Technical Manifesto (5 signers, +Carrà, Russolo, pub. April 1910) | Beat 1 | DOCUMENTED |
| Marinetti, 1909 *Manifesto of Futurism*, *Le Figaro*, Paris; not a painter | §6 | DOCUMENTED |
| Painted May 1912 at Montepulciano, Tuscany, visiting a pupil | Beat 4 | DOCUMENTED |
| Subject = dachshund on leash + stepping feet of owner, a lady in black | Beat 4 / annotations | DOCUMENTED |
| Owner "Contessa Nerazzini" hedged "by one often-repeated account," not asserted | Beat 4 catch | LEGEND — framed |
| Pink/green ground = pale Tuscan road dust in sun ("often / usually read as") | annotation 5, Beat 4 | DOCUMENTED (curatorial reading) |
| Manifesto quotes verbatim: "all things move…"; "a running horse has not four legs, but twenty, and their movements are triangular" | Beat 2 | DOCUMENTED (verbatim) |
| NO manifesto "dog passage"; tied to the HORSE line; explicit no-dog-line note | Beat 2 catch | LEGEND-false — refused |
| Persistence of vision explained; "twenty legs" = pile-up of positions | Beat 2 | DOCUMENTED |
| Marey (1830–1904) single-plate chronophotography; Muybridge (1830–1904) galloping-horse | Beat 3, §6 | DOCUMENTED |
| Influence framed as parallel, not a copied specific plate | Beat 3 catch | DISPUTED — framed as parallel |
| Debut Erster Deutscher Herbstsalon, Der Sturm (Walden), Berlin, Sept–Dec 1913, beside a photograph | Beat 5, provenance | DOCUMENTED |
| 1938 bought directly from Balla by A. Conger Goodyear (1877–1964), first MoMA president | provenance, §6 | DOCUMENTED |
| No purchase price | provenance catch | UNDOCUMENTED — not invented |
| 1964 bequest split (G.F. Goodyear life interest + Albright-Knox), acc. 1964:16; 1984 gift completes it | provenance | DOCUMENTED |
| 2023 renamed Buffalo AKG Art Museum, accession unchanged | §1 | DOCUMENTED |
| Reception: "crude"/"clichéd" (1940s) → "elegant and accurate" (2014) | Beat 5 | DOCUMENTED |
| Futurism glorified war = "the world's only hygiene"; Fascism tie; ideology named honestly | Beat 5 + author note | DOCUMENTED |
| Dimensions 2′11⅜″ × 3′7¼″ (89.9 × 109.9 cm); ~3 ft × 3½ ft; coffee-table top | §1 | DOCUMENTED (imperial-converted) |
| Landscape orientation, heroAspect 1.22 | §1 dims + en-scan 2304×1902 | DOCUMENTED |
| rights pd-us, /en/ tier (pub. 1912; Balla d. 1958 → worldwide PD 2029) | §1 Rights | DOCUMENTED |

**Voice/rule self-checks:** no `—` character anywhere in PART A or PART B new prose (em-dashes
avoided; verbatim manifesto quotes carry only their own commas, no dashes); all dims imperial;
hero is whole canvas (`heroFit: 'contain'`); 5 sections, 6 annotations, ~5 figures, lineage
present; the two verbatim manifesto quotes reproduced exactly as in the fact pack.
