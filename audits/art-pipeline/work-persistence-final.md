# FINAL — Salvador Dalí, *The Persistence of Memory* (1931)

Reconciled + revised from `work-persistence-draft.md`, folding every [BLOCKER]/[FIX] from
the fact gate (`work-persistence-gate-fact.md`), the read gate (`work-persistence-gate-read.md`),
and the frame gate (`work-persistence-gate-frame.md`), against `work-persistence-factpack.md`.

CHANGES FOLDED:
- **FACT FIX (fact gate FIX-1):** camembert anecdote corrected — Gala went out (to the cinema /
  out with friends) while Dalí stayed home alone with a headache. Gala named at first mention.
- **FRAME FIX-1:** the relativity reading now reads "which Dalí himself rejected" (denied intent),
  not "and which is wrong"; added the one-clause Dawn Ades concession (critics still read
  relativity in as an unconscious symbol; what is settled is that Dalí denied it as his source).
- **FRAME FIX-2:** flat superlatives scoped down to the sourced "one of the most recognizable /
  for the general public" — `sections` afterlife blurb and `PerLooking` para 1.
- **READ fixes:** scrubbed reader-commands ("notice it," "Hold that fact," "look closely," "worth
  keeping in your pocket," the "Find… / Now find…" imperative stack), honesty-labels ("Treat this
  as what it is," "the honest way to carry it is," "Hold this as a strong reading"), and the
  over-repeated "this is Dalí's claim, not fact" (collapsed to one clean statement). Glossed away
  "biomorphic"/"automatist." "paranoiac-critical method" stays inline-defined on first use.
- **KEPT:** rights `in-copyright` (NOT pd-us) + fair-use heroCredit; FOUR watches, only THREE soft
  (orange ant-watch hard); central creature "widely read as" a self-portrait; verbatim camembert
  quote with its translation-variant note.

VOICE/FORMAT: no meta-narration / reader-commands / honesty-labels / condescending glosses; no
literal "—" in rendered strings (TS fields use commas/parens/colons; JSX uses `&mdash;`);
verbatim-quote punctuation preserved; dimensions ft/in; heroAspect 1.39, heroFit 'contain'.
Identifiers, section ids, and component names are identical to the draft.

---

## PART A — `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Persistence of Memory (La persistencia de la memoria), Dalí, 1931.
// MoMA, New York (object 162.1934, "Given anonymously," 1934).
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['persistence'] (Per… prefix).
// RIGHTS: in-copyright (1931, NOT pd-us; Dalí d. 1989). Hero shown small + credited
// under fair use; never assert free reproduction.
// FACT HANDLING per fact pack: FOUR pocket-watches, only THREE soft (the orange,
// ant-covered one is HARD/closed), never "all four melt." The Einstein/relativity
// reading is one Dalí REJECTED (a denied source/intent, not a false reading); his
// stated source is runny camembert, given as HIS account, not proven fact. The central
// draped creature is WIDELY READ as a profile self-portrait (kin to The Great
// Masturbator), stated as interpretation. The camembert KEY STATEMENT is a genuine Dalí
// line but its wording is unstable across translations, attributed to Dalí, not
// presented as one canonical original. No invented prices (the $250/Julien Levy first
// sale is secondary → kept out of prices).
// ─────────────────────────────────────────────────────────────
export const PERSISTENCE: ArtWorkContent = {
  id: 'persistence',
  name: 'The Persistence of Memory',
  shortName: 'Persistence of Memory',
  year: 1931,
  artist: 'Salvador Dalí',
  artistId: 'dali',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '9 1/2 in × 1 ft 1 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Given anonymously, 1934',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 4, total: 9 },
  hook: 'The melting watches: four pocket-watches on a deserted Catalan shore, three of them gone soft as wet cheese, painted with academic precision on a canvas smaller than a sheet of paper. The image that taught a mass audience what “surreal” looks like.',
  heroImage: ART_IMG.daliPersistence,
  heroCredit: 'Dalí, The Persistence of Memory, 1931 · MoMA, New York · in copyright, shown small under fair use; rights with the Salvador Dalí estate.',
  heroAspect: 1.39, // 24.1 × 33 cm → W/H ≈ 1.39, landscape
  heroFit: 'contain', // the whole small canvas, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '9½″ × 1′1″', k: 'Dimensions' },
    { v: '4 watches, 3 soft', k: 'On the canvas' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'method', eyebrow: 'Catalonia / Paris · 1931', dateLabel: '1929–1931', title: 'A method for going a little mad on purpose', blurb: 'Dalí joins the Surrealists and brings his own engine: the paranoiac-critical method, a way of courting a near-hallucinatory state to let dream-logic surface, then painting it with the cold exactness of an academic master. He called the results hand-painted dream photographs.', progress: 0.08 },
    { id: 'camembert', eyebrow: 'The making', dateLabel: '1931', title: 'The night the cheese went soft', blurb: 'By Dalí’s own telling, the soft watches arrived one evening over a runny Camembert melting in the heat. He looked from the cheese to the landscape he was painting and saw the limp timepieces. His account, repeated for life, never an externally documented event.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '9 1/2 in × 1 ft 1 in', title: 'Four watches, a fly, and a sleeping face', blurb: 'The three melting watches draped over a block, a dead branch, and a fleshy creature; the fourth watch hard, orange, and swarmed by ants; a single fly; the boneless profile-head at center; the golden Catalan cliffs behind. And the shock of the scale: it is tiny.', progress: 0.54 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1931', title: 'Time made soft, painted as fact', blurb: 'Dalí fused flawless academic illusionism with impossible dream-objects and made time itself sag. The hardest, most rule-bound thing imaginable, a precision watch, melts like cheese, rendered so convincingly the eye accepts it. Not relativity (Dalí rejected that): camembert.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1932–today', title: 'How a tiny canvas became the icon of Surrealism', blurb: 'Shown in New York in 1932, given anonymously to MoMA in 1934, and from there made, for the general public, one of the most recognizable images of Surrealism. The melting watch slipped loose into cartoons and ads, and Dalí became the movement’s public face.', progress: 0.96 },
  ],
  provenance: [
    { year: '1931', who: 'Salvador Dalí (the artist)', place: 'Portlligat / Paris', note: 'Painted in 1931, the small canvas worked up in Dalí’s Catalan-coast milieu and Paris.', price: null },
    { year: '1932', who: 'Julien Levy Gallery', place: 'New York', note: 'Exhibited at the Julien Levy Gallery, New York, in 1932, the painting’s first New York showing. A first sale of about $250 is widely repeated but rests on secondary sources, not a MoMA catalog line.', price: null },
    { year: '1934–today', who: 'Museum of Modern Art', place: 'New York', note: 'Given anonymously to MoMA in 1934; the donor was never publicly named. Object number 162.1934, credit line “Given anonymously.” On permanent view ever since.', price: null, museum: true },
  ],
  figures: [
    { name: 'Salvador Dalí', role: 'The painter', palette: ['#3a6a7a', '#c8a04a', '#1c2422'] },
    { name: 'Gala Dalí', role: 'His wife and lifelong muse', palette: ['#7a3a4a', '#3a2a2e', '#140e10'] },
    { name: 'André Breton', role: 'Surrealism’s founder; let him in', palette: ['#2e3a52', '#23303f', '#0c1018'] },
    { name: 'Julien Levy', role: 'New York dealer; first showed it', palette: ['#5a6a52', '#39402e', '#12140e'] },
    { name: 'Ilya Prigogine', role: 'Chemist; asked if it meant Einstein', palette: ['#6a6354', '#39322a', '#120f0c'] },
  ],
  annotations: [
    { label: 'The three soft watches', where: 'Draped across the scene: one folding over the edge of the hard rectangular block at left, one sagging from the bare branch of the dead tree, one slumping over the fleshy creature in the foreground', detail: 'Three of the four pocket-watches have gone soft, melting and sagging like wet cloth, yet each keeps its hands, its numerals, even the little winding stem. That is the trick: Dalí makes a precision instrument behave like draped fabric while painting it with the cold exactness of an academic master. These are the “soft watches” the whole painting is named for, and there are exactly three of them.' },
    { label: 'The orange watch, swarmed by ants', where: 'Toward the lower left, lying face-down on the hard block', detail: 'The fourth watch is the odd one out: a closed pocket-watch, its case a deep orange, lying face-down and crawling with ants. It is the only watch that has NOT gone soft, hard and shut while the others melt, and the only one being devoured. Ants haunt Dalí’s work as a sign of decay and rot, tied to a childhood horror of decomposition. So the painting is not “four melting clocks”: three melt, this one stays hard and is eaten alive.' },
    { label: 'The single fly', where: 'On the face of one of the soft watches', detail: 'A lone fly rests on one of the limp watches, a tiny, almost photographic touch that rewards a close look. It is the kind of hyper-real detail that makes the impossible objects around it feel like things you could pick up, which is exactly the point of what Dalí called a “hand-painted dream photograph.”' },
    { label: 'The fleshy face-creature at center', where: 'In the foreground center, the soft boneless form lying on the ground, draped by a melting watch', detail: 'A soft, eyelashed, boneless head-form lies on the ground with one watch slung over it. The eyelashes and the long nose give it away as a profile, and it is widely read as a distorted self-portrait of Dalí, a relative of the central head in his earlier The Great Masturbator (1929). Read as a sleeper, it is half the point: a dream-image of someone dreaming. This is the standard scholarly reading, an interpretation rather than a label Dalí signed off on, so it holds as “widely read as,” not as fact.' },
    { label: 'The dead tree and its bare branch', where: 'At left, a leafless, lopped tree growing out of the hard rectangular block', detail: 'A single dead, leafless tree rises at left, almost geometric, growing straight out of the hard block, with one melting watch hanging from its lone drooping limb. The deadness and the bareness deepen the stillness and the sense of decay that runs through the whole scene.' },
    { label: 'The Catalan cliffs, sea, and horizon', where: 'The far background, a band of glowing cliffs and calm sea under a luminous sky', detail: 'Behind everything stretches a band of golden, sunlit cliffs and a still sea: the rocks of Cap de Creus on the Costa Brava, near Dalí’s home at Portlligat (the shadowed height is sometimes identified as Puig Pení, on thinner evidence). The sharp, sunstruck far landscape set against the dim foreground is what makes the impossible objects in front read as hyper-real fact.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealism', mode: 'art' },
      { label: 'Academic illusionism', mode: 'art' },
      { label: 'The Catalan coast', mode: 'civ' },
    ],
    children: [
      { label: 'The melting-watch icon', mode: 'art' },
      { label: 'Pop-culture surrealism', mode: 'civ' },
      { label: 'Dalí, public showman', mode: 'civ' },
    ],
  },
}
```

> Coordinator note: register `PERSISTENCE` wherever `STARRY_NIGHT` etc. are exported/collected (and add it to `ART_WORK_CONTENT`), and splice the prose registry line:
> `//  persistence: { method: PerMethod, camembert: PerCamembert, looking: PerLooking, break: PerBreak, afterlife: PerAfterlife },`
>
> RIGHTS NOTE for the coordinator: this is the first `rights: 'in-copyright'` work-read. The hero must render small/contained with the fair-use credit line above; in-copyright reference figures use the existing `RestrictedFigure` card, never the full inline `PaintingFigure`.

---

## PART B — `Per`-prefixed section components (absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// The Persistence of Memory (Dalí, 1931) — the five sections
// In-copyright: no full inline figure of the work; the hero (shown small, credited
// under fair use) carries the image. References to other in-copyright Dalí works use
// the RestrictedFigure card, never PaintingFigure.
// NARRATIVES['persistence'] = { method: PerMethod, camembert: PerCamembert,
//   looking: PerLooking, break: PerBreak, afterlife: PerAfterlife }
// ─────────────────────────────────────────────────────────────
function PerMethod({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Catalonia · 1929" title="The newcomer with a method for going mad on purpose" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        urrealism, when <strong>Salvador Dal&iacute;</strong> (1904&ndash;1989) walked into it, was already a going concern. It had been founded in Paris in 1924 by the poet <strong>Andr&eacute; Breton</strong> (1896&ndash;1966), who defined it, roughly, as the attempt to put the logic of dreams onto the canvas and the page: to let the unconscious mind, the part that runs your dreams without asking permission, do the talking, and to short-circuit the tidy rational mind that normally keeps it quiet. By the late 1920s the movement&rsquo;s painters had split into two broad camps. One, around <strong>Joan Mir&oacute;</strong> and <strong>Andr&eacute; Masson</strong>, worked loose and abstract, letting the hand wander and seeing what shapes turned up. The other, around <strong>Max Ernst</strong>, <strong>Yves Tanguy</strong>, and <strong>Ren&eacute; Magritte</strong>, painted eerie, dreamlike scenes but in a fairly conventional, recognizable way.
      </p>
      <p style={proseStyle}>
        Dal&iacute;, a young Catalan from the seaside town of Figueres, arrived in Paris around 1929 and was formally welcomed into the group, and he brought something neither camp had: a technique for manufacturing the dream-state on demand. He called it the <strong>paranoiac-critical method</strong>, and the name is more frightening than the idea. In plain terms, it meant this: Dal&iacute; would deliberately work himself into a delirious, near-hallucinatory frame of mind, the kind in which an anxious person &ldquo;sees&rdquo; faces in wallpaper or animals in clouds, and let those unstable, irrational associations come flooding up. (&ldquo;Paranoiac&rdquo; here is borrowed from the psychology of the day, meaning a mind that compulsively reads hidden connections into ordinary things; &ldquo;critical&rdquo; is the cold, controlling half that stands back and judges what surfaced.) Then, crucially, he would paint what he had &ldquo;seen&rdquo; not in a wild, loose hand but with the opposite: the licked, exact, photographic finish of a nineteenth-century academic master, the kind of painter who could render a buckle or a strand of hair so precisely it fooled the eye.
      </p>
      <p style={proseStyle}>
        That combination is the whole of Dal&iacute;. He courted madness to find the image, then used iron craft to make it look like a fact. He had a phrase for the result: he called such pictures <strong>&ldquo;hand-painted dream photographs.&rdquo;</strong> A photograph does not argue with you. It simply records what was in front of the lens. Dal&iacute; wanted his impossible scenes to land with exactly that flat, undeniable authority, so that the eye would accept the impossible the way it accepts a snapshot. The painting made in 1931 is the most famous thing that method ever produced.
      </p>
    </article>
  )
}

function PerCamembert({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1931" title="The night the cheese went soft" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is how <strong>Dal&iacute; said</strong> the painting came to him. By his own telling, repeated across his writings and interviews for the rest of his life, the soft watches arrived one evening in 1931. He and his wife, <strong>Gala</strong>, had finished dinner; she had gone out with friends to the cinema, and he had stayed home alone with a headache, contemplating, of all things, the remains of a <strong>Camembert</strong> (a soft French cheese) that had been sitting out and gone runny and over-ripe in the heat, sagging into a puddle on its plate. Pondering this &ldquo;super-soft&rdquo; cheese, he then walked back to the landscape he had been painting that day, a bare Catalan shore under a luminous sky, already finished but waiting for its subject. And he &ldquo;saw&rdquo; the limp watches draped across it. He added them, he said, in a couple of hours, and went to bed.
      </p>
      <p style={proseStyle}>
        It is Dal&iacute;&rsquo;s account, not an externally documented event: there is no second witness to the cheese, and Dal&iacute; spent his career building his own legend with a showman&rsquo;s relish. He told the story, told it consistently, and the leap it describes (seeing one soft thing inside another) is exactly the kind the paranoiac-critical method runs on. But the only source for how it happened is Dal&iacute;, one of the great self-mythologizers of the twentieth century, on the subject of his own painting.
      </p>

      <SectionHeader accent={accent} label="The reading he denied" title="It is not about Einstein, and he said so" />
      <p style={proseStyle}>
        Which brings us to the thing almost everyone &ldquo;knows&rdquo; about this painting, and which <strong>Dal&iacute; himself rejected.</strong> Look up the melting watches and you will be told, confidently, that they are about <strong>Albert Einstein</strong> and the theory of relativity: that the drooping clocks are Dal&iacute;&rsquo;s vision of time made flexible, bent and slowed by physics, a painted illustration of how relativity dissolved the old absolute clockwork time. It is the single most common interpretation of the picture. It is also one that Dal&iacute; explicitly disavowed.
      </p>
      <p style={proseStyle}>
        The cleanest evidence is on the record. When the chemist <strong>Ilya Prigogine</strong> (1917&ndash;2003), a future Nobel laureate, asked Dal&iacute; directly whether the soft watches had been inspired by relativity, Dal&iacute; said no. They were inspired, he answered, by &ldquo;the surrealist perception of a Camembert melting in the sun.&rdquo; That is, by the cheese, not the physics. Some critics still read relativity into the picture as an unconscious symbol of time made elastic; what is settled is that Dal&iacute; denied it as his source. People see Einstein in the soft watches, and it is easy to see why. But Dal&iacute; said it was camembert, and on the question of his own painting he gets the last word. If anything resists time in this picture, it is not the clocks. It is the painting&rsquo;s grip on the public, which has not loosened in ninety years.
      </p>
    </article>
  )
}

function PerLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="First, the shock of the scale" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        eople who only know this painting from posters and coffee mugs are almost always startled when they meet it at <strong>MoMA</strong> in New York, and the reason is its size. They expect a wall-sized masterpiece, the way an icon &ldquo;should&rdquo; be big. The real canvas is roughly <strong>nine and a half inches tall by a little over a foot wide</strong>, smaller than an ordinary sheet of letter paper. You could cover it with a place mat. Everything Dal&iacute; does here is done at jewel scale, with a tiny brush, in a space you could hide under one hand. One of the most reproduced images in Surrealism is a miniature.
      </p>
      <p style={proseStyle}>
        Now the scene. A bare, sun-flooded coastal plain runs back to a luminous sky. The foreground is in shadow; the far distance is in hard, golden sunlight. And lying across this empty stage are <strong>four pocket-watches</strong> (the kind that live on a chain in a waistcoat, not clocks on a wall, a small distinction worth getting right). Here is the count that matters, because nearly everyone gets it wrong: there are four watches, and <strong>only three of them are soft.</strong>
      </p>

      <SectionHeader accent={accent} label="The three soft ones" title="A precision instrument behaving like cloth" />
      <p style={proseStyle}>
        The three melting watches come first. One folds limply over the edge of a <strong>hard rectangular block</strong> at the left (a plinth, or a table). One sags off the bare <strong>branch of the dead tree</strong>. One slumps over the strange fleshy form lying in the foreground. They droop and pool like wet fabric, like the runny cheese itself, and yet each one keeps every working part: its hands, its numbered face, even the little winding stem on top. That is the disquiet of the thing. A pocket-watch is the hardest, most rule-bound object you can name, a precision instrument whose entire job is to stay exact and never bend. Dal&iacute; paints it sagging like a slice of melting cheese while leaving it perfectly, legibly a watch. The impossible is rendered as fact.
      </p>

      <SectionHeader accent={accent} label="The hard one, and the fly" title="The watch that stayed shut, and is being eaten" />
      <p style={proseStyle}>
        The fourth watch breaks the rule the other three follow. Toward the lower left, lying face-down on the hard block, is a <strong>closed pocket-watch, deep orange</strong>, its lid shut. It has not gone soft at all. It is hard, and it is crawling with <strong>ants.</strong> This is the detail people miss when they call the painting &ldquo;four melting clocks&rdquo;: three melt, and the fourth stays rigid and shut and is being devoured. Ants run all through Dal&iacute;&rsquo;s work as a sign of decay and rot, rooted in a childhood horror of decomposition, so the one hard watch is also the one rotting. Near it, on the face of one of the soft watches, sits a single <strong>fly</strong>, a tiny, near-photographic touch that rewards the close look and quietly insists, again, on the &ldquo;dream photograph&rdquo; realism.
      </p>

      <SectionHeader accent={accent} label="The sleeping face" title="A boneless profile, widely read as Dalí himself" />
      <p style={proseStyle}>
        At the center of the foreground lies the strangest form of all: a soft, fleshy, <strong>eyelashed creature</strong>, boneless, draped by one of the melting watches, lying on the ground like something asleep. The long lashes and the heavy nose mark it as a <strong>profile head</strong>, seen from the side. Art historians have long read it as a <strong>distorted self-portrait of Dal&iacute;</strong>, an approximation of his own face in profile, kin to the very similar boneless head at the center of his earlier painting <em>The Great Masturbator</em> (1929). This is the standard scholarly reading rather than a certainty: what art historians see, an interpretation, not a caption Dal&iacute; signed. Read as a sleeper, it gives the whole picture its frame. This is a dream-image, and at its center lies someone dreaming.
      </p>

      <SectionHeader accent={accent} label="The far shore" title="The real Catalan coast, doing the heavy lifting" />
      <p style={proseStyle}>
        Behind the watches and the sleeping head, the one stretch of solid, recognizable reality: a band of <strong>glowing golden cliffs and a still sea</strong> under a clear sky. This is a real place. It is the rugged coast Dal&iacute; grew up beside, the rocks of <strong>Cap de Creus</strong> on the Costa Brava, near his home at <strong>Portlligat</strong> (the shadowed height in the distance is sometimes identified as Puig Pen&iacute;, though on thinner evidence). The choice is what sells the whole illusion. Set the soft, impossible watches against a faithfully painted real coastline, in real sunlight, and the eye, having accepted the cliffs, has no foothold to reject the watches. The realism of the place is what makes the impossibility of the objects feel like simple fact.
      </p>
    </article>
  )
}

function PerBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Time was the one thing nobody touched" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o see what Dal&iacute; broke, you have to see what painting still took for granted in 1931. Surrealist painting at that moment ran in two lanes, neither of which had done this. Mir&oacute; and Masson made loose, abstract, blobby organic shapes; Ernst, Tanguy, and Magritte made dream-scenes that were eerie but painted in a recognizable, even gentle way. And underneath both lanes sat an assumption so old nobody questioned it: in Western painting, <strong>solid objects were solid, and time was a given.</strong> A clock was a clock. It was the very emblem of order, measure, and reason, the most reliable object in the room. Nobody melted it, because there was no reason a painter would ever want a clock to behave like anything but a clock.
      </p>

      <SectionHeader accent={accent} label="The break · what he did" title="He made time go soft, and painted it like a photograph" />
      <p style={proseStyle}>
        Dal&iacute;&rsquo;s move was to fuse two things that had no business together. From the academic tradition he took <strong>flawless illusionism</strong>: the licked, photographic, fool-the-eye finish of a salon master, every surface convincing. From Surrealism he took the <strong>impossible dream-object.</strong> And he aimed the first at the second. He took the hardest, most rule-bound thing imaginable, a precision watch, and made <strong>time itself go soft</strong>, the clock drooping like wet cheese, while painting the impossibility so convincingly that the eye simply accepts it. That is the whole break in one image: not a clock that <em>symbolizes</em> the collapse of time, but a clock you are made to <em>believe</em> has gone soft, because it is rendered with the same flat authority as the real cliffs behind it. This is the &ldquo;hand-painted dream photograph&rdquo; doing its work. The method lets dream-logic surface, the canvas becoming a kind of inkblot where a soft head can also read as terrain, and the academic craft makes that dream-logic look like reportage.
      </p>
      <p style={proseStyle}>
        And here is the line that ties it all together, in Dal&iacute;&rsquo;s own words. His signature explanation of the soft watches reached straight back to the paranoiac-critical method and the cheese:
      </p>
      <blockquote style={{ margin: '4px 0 16px', padding: '2px 0 2px 16px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 19, fontStyle: 'italic', lineHeight: 1.5, color: INK }}>
        &ldquo;the soft watches are nothing more than the soft, extravagant, solitary, paranoiac-critical Camembert of time and space.&rdquo;
      </blockquote>
      <p style={proseMutedStyle}>
        The line is genuinely Dal&iacute;&rsquo;s, the sentence that fuses his soft watches to his method and his cheese in one breath. But it circulates in several translations, and the exact wording shifts from source to source: you will also find it as &ldquo;nothing but the tender, extravagant and solitary paranoiac-critical Camembert of time and space,&rdquo; and as the &ldquo;paranoiac-critical camembert cheese of space and time.&rdquo; It reads, then, as Dal&iacute;&rsquo;s known formulation rather than one fixed, canonical original. The thought is firmly his; the precise phrasing is a translator&rsquo;s.
      </p>
    </article>
  )
}

function PerAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1932" title="A New York gallery, then a museum, anonymously" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he tiny canvas did not stay long in Europe. In <strong>1932</strong> it was shown at the <strong>Julien Levy Gallery</strong> in New York, the dealer who was busy introducing Surrealism to America, and that was the painting&rsquo;s first New York appearance. (A first sale of about $250 is often repeated, but it rests on secondary sources rather than a museum record, so take the figure loosely.) Two years later, in <strong>1934</strong>, the painting entered the <strong>Museum of Modern Art</strong> in New York, where it has hung ever since. The credit line is one of the most evocative in the building, because it names no one: <strong>&ldquo;Given anonymously.&rdquo;</strong> The donor who handed Dal&iacute;&rsquo;s melting watches to MoMA was never publicly identified, and the museum still lists the work, object number 162.1934, simply as an anonymous gift.
      </p>
      <p style={proseStyle}>
        One more practical note, since this is one of the few works in this whole series still under copyright. <em>The Persistence of Memory</em> was painted in 1931, which puts it after the cutoff for the public domain in the United States (works published from the late 1920s on are still protected), and Dal&iacute; did not die until 1989, so the image is not free to reproduce: the rights sit with the Dal&iacute; estate and the physical painting with MoMA. That is why, on this page, it appears small and credited rather than full-bleed. The picture earns its fame; the law still owns its copy.
      </p>

      <SectionHeader accent={accent} label="The icon" title="The painting that taught a mass audience the word “surreal”" />
      <p style={proseStyle}>
        From that anonymous gift, something rare happened: a single small painting became the public face of an entire movement. More than any Mir&oacute; or Ernst or Magritte, <em>The Persistence of Memory</em> is the image that taught a mass audience what <strong>&ldquo;surreal&rdquo; looks like.</strong> If you have ever called a strange dream or an uncanny coincidence &ldquo;surreal,&rdquo; the picture in the back of your mind, whether you know it or not, is probably this one. The melting watch slipped its frame entirely and became a free-floating cultural sign, copied into cartoons, parodied in advertisements, printed on every gift-shop surface a museum sells. And Dal&iacute;, with his waxed mustache and his appetite for cameras, leaned into it, becoming Surrealism&rsquo;s great public showman, the artist the general public could actually name.
      </p>
      <p style={proseStyle}>
        There is a small irony in the title to close on. The painting is called <em>The Persistence of Memory</em>, and almost everything Dal&iacute; said about it points to softness, melting, decay, the runny cheese, the dissolving of time. Yet the one thing that has genuinely refused to melt is the painting&rsquo;s hold on us. Nine and a half inches of canvas, painted in an afternoon by a young Catalan who claimed a cheese showed him the way, have outlasted many a grander, larger, more &ldquo;important&rdquo; picture of its century. The watches went soft. The memory persisted.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  persistence: { method: PerMethod, camembert: PerCamembert, looking: PerLooking, break: PerBreak, afterlife: PerAfterlife },
```
