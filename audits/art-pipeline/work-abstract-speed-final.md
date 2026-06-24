# FINAL — Giacomo Balla, *Abstract Speed + Sound* (1913–14) — WORK read

Reconciled from `work-abstract-speed-draft.md` against the three gates
(`-gate-fact.md`, `-gate-read.md`, `-gate-frame.md`) and the source of truth
`work-abstract-speed-factpack.md`. All [BLOCKER]/[FIX] items folded; the
abstraction-priority handling the frame gate praised is preserved unweakened.

**Fixes applied:**
- **BLOCKER F-1 / FIX-1 (fact + frame gates):** the 1919 Fascist Manifesto was co-authored by Marinetti and the syndicalist **Alceste De Ambris**, NOT "alongside Mussolini." Fixed in the `AbsAbstraction` prose AND reconciled in the fact-ledger row AND the const-header comment.
- **FIX-2 (fact gate):** the Tate's *Lines of Force + Noise* names **this same central panel**, not "a related panel." Corrected in `AbsTriptych`.
- **READ-gate FIXes:** cut meta-narration ("the part this whole chapter exists for"; "because honesty about what we know is part of the picture"); de-duplicated the "runs off its own edge/frame" beat; added a spatial anchor for the noise crisscross.
- **Preserved:** "Among the first, not the first" (Kandinsky/Kupka/Delaunay named, Balla scoped to Italian painting, MoMA *Inventing Abstraction* 2012 cite).

---

## PART A — `ArtWorkContent` const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Abstract Speed + Sound (Velocità astratta + rumore), Balla, 1913–14.
// The 9th and final work of the Futurism chain. Authored through the art content
// pipeline (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['abstract-speed'] (Abs… prefix).
// FACT-HANDLING per fact pack: this is the CENTRAL panel of a THREE-PART work (a
// narrative triptych) — framed as the leading scholarly reconstruction, NOT settled
// fact (the Guggenheim itself hedges: the triptych "has been proposed"). The Tate
// holds the right panel (Abstract Speed — The Car has Passed) and names this same
// central panel "Lines of Force + Noise". Panel titles + the left panel's
// whereabouts are DISPUTED. The PAINTED FRAME is part of the work. PURE
// ABSTRACTION: no car is depicted; speed is implied by landscape, force-lines and
// noise. NO "first abstract painting" overclaim (abstraction had simultaneous
// origins — Kandinsky, Kupka, Delaunay). Marinetti later co-wrote the 1919 Fascist
// Manifesto with the syndicalist Alceste De Ambris (NOT with Mussolini, who founded
// the movement and published it). The Philadelphia "Velocità astratta + rumore" is
// a SEPARATE related work, never conflated with this Guggenheim panel.
// ─────────────────────────────────────────────────────────────
export const ABSTRACT_SPEED: ArtWorkContent = {
  id: 'abstract-speed',
  name: 'Abstract Speed + Sound',
  shortName: 'Abstract Speed + Sound',
  year: 1914,
  artist: 'Giacomo Balla',
  artistId: 'balla',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on millboard, in the artist’s painted frame',
  dimensions: '1 ft 9½ in × 2 ft 6 in',
  location: 'Peggy Guggenheim Collection, Venice',
  acquired: 'Peggy Guggenheim Collection (Solomon R. Guggenheim Foundation), accession 76.2553 PG 31',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 9, total: 9 },
  hook: 'A speeding car you never see: only the green earth, the blue sky, the white road and the buzzing crisscross of its noise, painted right out onto the frame so the motion never stops at the edge.',
  heroImage: ART_IMG.ballaAbstractSpeed,
  heroCredit: 'Balla, Abstract Speed + Sound, 1913–14 · Peggy Guggenheim Collection, Venice',
  heroAspect: 1.4, // 76.5 × 54.5 cm → W/H ≈ 1.40 (landscape)
  heroFit: 'contain', // whole work including the painted frame, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1913–14', k: 'Painted' },
    { v: '1′9½″ × 2′6″', k: 'Dimensions' },
    { v: 'Peggy Guggenheim', k: 'Now at' },
  ],
  sections: [
    { id: 'dog', eyebrow: 'Rome · 1912', dateLabel: '1912', title: 'From the dog to nothing you can name', blurb: 'A year earlier Balla had painted a dachshund’s blurred legs to show a thing in motion. By 1913–14 the thing is gone and only the motion is left, the eldest Futurist racing past his own dog toward pure abstraction.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1913–14', title: 'A car implied, never shown', blurb: 'The subject is an automobile tearing down a white road past green earth and blue sky. Balla paints not the car but everything the car disturbs, so the picture becomes forces and planes with no machine in it at all.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1 ft 9½ in × 2 ft 6 in', title: 'How to see speed and hear noise with no car present', blurb: 'The green band, the white road slashing through, the swept blue arcs, the buzzing crisscross that is the “+ Sound,” the directional thrust, and the painted frame that refuses to let the picture stop.', progress: 0.56 },
    { id: 'triptych', eyebrow: 'One landscape, three panels', dateLabel: '1913–14', title: 'The middle of a picture that runs off its own frame', blurb: 'This is, by the leading reconstruction, the central section of a three-part work, one continuous landscape across all three, with the Tate holding the right-hand panel. The story is proposed, not settled, and the frames are part of the picture.', progress: 0.78 },
    { id: 'abstraction', eyebrow: 'After', dateLabel: '1914–today', title: 'Among the first, and the politics underneath', blurb: 'These speed pictures are among the earliest fully abstract works in Western painting, arriving at the same moment as Kandinsky, Kupka and Delaunay elsewhere. The movement that drove them also glorified war, a half of the story the picture can’t leave out.', progress: 0.96 },
  ],
  provenance: [
    { year: '1913–14', who: 'Giacomo Balla (the artist)', place: 'Rome', note: 'Painted in Rome in 1913–14, the painted frame made as part of the work. No documented intermediate owner or sale is recorded between Balla and the Peggy Guggenheim collection.', price: null },
    { year: '?', who: 'Peggy Guggenheim', place: 'Europe / New York', note: 'Entered Peggy Guggenheim’s collection of modern European art (assembled chiefly 1939–1942, advised by Herbert Read and Marcel Duchamp). The exact year, seller and price for this panel are not documented in the museum’s public record.', price: null },
    { year: '1976–today', who: 'Peggy Guggenheim Collection (Solomon R. Guggenheim Foundation)', place: 'Venice', note: 'Held under the Solomon R. Guggenheim Foundation (master accession 76.2553), full effect on Peggy Guggenheim’s death in 1979; on view at the Peggy Guggenheim Collection, Venice. Accession 76.2553 PG 31.', price: null, museum: true },
  ],
  figures: [
    { name: 'Giacomo Balla', role: 'The painter', palette: ['#5a4a2a', '#2a2218', '#0e0a06'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Founder of Futurism', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'] },
    { name: 'Umberto Boccioni', role: 'Co-signatory; painter-sculptor', palette: ['#bf3a25', '#3a4a6a', '#1c1208'] },
    { name: 'Peggy Guggenheim', role: 'Collector', palette: ['#3a5a6a', '#22323a', '#0c1216'] },
    { name: 'Étienne-Jules Marey', role: 'Motion photographer behind the Dog', palette: ['#6b6354', '#39322a', '#120f0c'] },
  ],
  annotations: [
    { label: 'The green landscape band', where: 'The lower zone, the broad green forms beneath the speed-lines', detail: 'The green stands for the earth the car races across, one of the two landscape colors (green for land, blue for sky) carried through all three panels of the triptych. It is a form, not a depicted field, no furrows, no fence, no farm. This is the giveaway that you are looking at abstraction and not scenery: the land has been reduced to the single fact of its color.' },
    { label: 'The white road and the lines of force', where: 'The pale diagonal channel cutting through the composition', detail: 'The pale channel slicing across the picture is the white road the unseen car travels, and the long directional strokes laid along it are Balla’s lines of force, his name for the trajectory of speed itself. Follow them with your eye and you are following the car, because the strokes are all the car you are ever going to get.' },
    { label: 'The swept sky arcs', where: 'The upper zone, the curving blue forms', detail: 'Blue is the second landscape color, the sky, but it does not sit still like a real horizon. The arcs read as atmosphere bent and swept by the car’s passage, the air itself dragged into curves by something moving through it fast. You are seeing wind, in a picture with no flag and no leaf to show it.' },
    { label: 'The painted frame that won’t stop the picture', where: 'The border all the way around the panel', detail: 'This is the single most distinctive thing in the work, and it is easy to miss because we are trained to ignore frames. Balla painted his own frame as a continuation of the picture’s forms and colors, so the composition runs off the canvas and onto its border, what the museum describes as implying the overflow of the painting’s reality into the spectator’s own space. The motion is not allowed to end at the edge. That is the whole Futurist point about speed, built into the carpentry.' },
    { label: 'The directional thrust', where: 'Across the whole field, the repeated lines and planes all leaning the same way', detail: 'Almost every line and plane leans the same direction, and the repetition does the work: multiply a tilt enough times and the eye is shoved along it whether it wants to go or not. The museum’s own phrase for how this central panel differs from its flanking ones is the multiplication of the number of lines and planes. More repetitions, more velocity. The picture pushes you down the road.' },
    { label: 'The car that is not there', where: 'Look for the car, and there isn’t one', detail: 'The entire subject is a speeding automobile, and there is no car. No wheel, no headlamp, no road-sign, no driver, no figure of any kind. Speed is carried only by the force-lines, the disturbed green and blue, and the crisscross of noise, with pinkish exhaust appearing on the Tate’s right-hand panel. This absence is the proof the work is pure abstraction and not a stylized picture of a thing: Balla painted the event without painting the object.' },
  ],
  lineage: {
    parents: [
      { label: 'Dynamism of a Dog on a Leash', mode: 'art' },
      { label: 'Marey’s motion photography', mode: 'civ' },
      { label: 'Marinetti’s cult of speed', mode: 'civ' },
    ],
    children: [
      { label: 'Pure abstraction', mode: 'art' },
      { label: 'Constructivism’s speed-line', mode: 'art' },
      { label: 'The machine aesthetic', mode: 'civ' },
    ],
  },
}
```

> Registration: add `ABSTRACT_SPEED` to `ART_WORK_CONTENT` under key `'abstract-speed'`,
> and `NARRATIVES['abstract-speed'] = { dog: AbsDog, making: AbsMaking, looking: AbsLooking, triptych: AbsTriptych, abstraction: AbsAbstraction }`.

---

## PART B — chapter components (`Abs`-prefix, absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// Abstract Speed + Sound (Balla, 1913–14) — the five chapters
// ─────────────────────────────────────────────────────────────
function AbsDog({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Rome · 1912" title="From the dog to nothing you can name" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1912</strong>, Giacomo Balla painted a dog. Not a noble dog, not a hunting dog &mdash; a <strong>dachshund</strong>, a little long-bodied sausage of a dog, trotting along on a leash beside its owner&rsquo;s feet. He called it <em>Dynamism of a Dog on a Leash</em> (<em>Dinamismo di un cane al guinzaglio</em>; it hangs today in the <strong>Buffalo AKG Art Museum</strong> in New York State). And it is one of the clearest pictures ever made of what it means to paint <em>motion</em>. The dog&rsquo;s four little legs are blurred into a fan of repeated legs, the swinging chain of the leash is multiplied into a smear of arcs, the owner&rsquo;s skittering feet are doubled and tripled. Balla had been looking hard at <strong>Étienne-Jules Marey</strong>, a French scientist who in the 1880s photographed animals and people in motion by catching many phases of one movement on a single plate &mdash; <strong>chronophotography</strong>, the ancestor of the flip-book and the film strip. The dog is Balla doing in oil paint what Marey did with a camera: showing a moving thing as all its positions at once.
      </p>
      <p style={proseStyle}>
        Here is the thing to hold onto, because the whole story of the painting we are about to look at is in the gap. The dog is a picture of <em>a thing in motion</em>. You can still see the thing. It is recognizably a dachshund; you could pick it out of a line-up. Within roughly a year, Balla does something that sounds small and is in fact enormous: he keeps the motion and throws away the thing. By <strong>1913&ndash;14</strong> the dog is gone, the leash is gone, the feet are gone. The car is gone too, as we will see, which is a problem, because the picture is about a car. What is left is the motion itself, lifted clean off any object &mdash; pure forces, pure lines, pure planes. That arrival point is the painting in front of us, <em>Abstract Speed + Sound</em>.
      </p>
      <p style={proseStyle}>
        Balla was, at this point, the eldest of the Futurist painters. <strong>Futurism</strong> was the Italian art movement launched in 1909 that worshipped the modern machine age &mdash; the car, the tram, the electric light, the racing crowd &mdash; and demanded that painting stop showing gods and goddesses and start showing speed. (We will come to the uglier half of what else it demanded.) Balla had signed its painting manifestos in 1910 alongside younger men like <strong>Umberto Boccioni</strong> and <strong>Gino Severini</strong>. He was past forty, the patient one, the one who taught the others as much as he learned. And he was the one who took the movement&rsquo;s slogan &mdash; paint speed &mdash; further toward its logical end than anyone else. The dog was a long stride in that direction. <em>Abstract Speed + Sound</em> is where he runs out of road and keeps going anyway.
      </p>
    </article>
  )
}

function AbsMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="A car implied, never shown" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        o here is the subject of the painting, stated plainly: <strong>a car, speeding along a road.</strong> An automobile in 1913 was still a loud, expensive, slightly dangerous novelty, the exact emblem of everything Futurism loved &mdash; new, fast, mechanical, a little reckless. Balla wanted to paint one going fast. And then he did the thing that makes the picture what it is. <strong>He did not paint the car.</strong>
      </p>
      <p style={proseStyle}>
        Think about how strange that is. If I ask you to paint a fast car, you paint a car, and then you add some speed-lines behind it, the way a comic strip does, little marks trailing off the bumper to say <em>this is moving</em>. That is painting the thing and labeling it fast. Balla did the opposite. He kept the speed-lines and deleted the car. What he painted instead was <strong>everything the car disturbs</strong>: the white road it tears down, the green earth it races across, the blue sky it sweeps through, and the buzzing trail of noise it drags behind it. The car is present in the picture the way a stone is present in a pond ten seconds after it sank &mdash; not as the stone, but as the rings still spreading on the water.
      </p>
      <p style={proseStyle}>
        It helps to think of it as the difference between a <strong>photograph of a runner</strong> and a <strong>recording of footsteps in an empty hallway</strong>. The photograph shows you the runner; you know exactly what made the motion. The recording gives you only the consequence, the sound left in the air, and your mind builds the runner backward from the evidence. Balla&rsquo;s picture is the second kind. The forces are all there &mdash; the trajectory, the wind, the disturbed ground &mdash; and the object that caused them has stepped out of the frame. You assemble the car yourself, out of its own wake.
      </p>
      <p style={proseStyle}>
        And then there is the second word in the title, the one people skip: <strong>Sound</strong> (<em>rumore</em>, Italian for &ldquo;noise&rdquo;). The <strong>+ Sound</strong> is not decoration. Balla genuinely tried to <em>paint the noise the car makes</em> &mdash; the roar and rattle of an early engine &mdash; by laying a buzzing <strong>crisscross of lines</strong> over the speed-forms, a kind of visual static, like the texture of a sound rather than its picture. This was a very Futurist ambition. The movement wanted a painting to deliver <em>all</em> the sensations of a modern moment at once &mdash; the speed and the noise and even the smell of it &mdash; fused into one image, the way the moment itself hits you all at once on a real street. (Around the same time, the Futurist painter Luigi Russolo took this idea out of paint entirely and began building noise-instruments to compose music out of engine-roar and factory-clatter.) So the title is doing exactly what it says: <em>velocità astratta + rumore</em>, abstract speed plus noise. Two things you cannot normally see, both made visible, in a picture with no car in it.
      </p>
    </article>
  )
}

function AbsLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A small board, about a foot and a half by two and a half feet" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is <strong>small</strong> &mdash; about <strong>a foot and a half tall by two and a half feet wide</strong>, roughly the size of a large drawing board you might prop on your knees. It is painted in oil, not on canvas but on <strong>millboard</strong> (a stiff, heavy paperboard), and it is <strong>landscape orientation</strong>, wider than it is tall, which matters: a road runs sideways, and so does this picture. This is not a wall-sized declaration. It is a hand-sized one, and most of its force is packed into how the marks are laid down rather than into any grand scale.
      </p>
      <p style={proseStyle}>
        Now the hard part: <strong>there is no car.</strong> You are going to look at a picture called <em>Abstract Speed + Sound</em>, about an automobile, and you will not find an automobile. So we have to learn to read it the way Balla built it &mdash; from the wake backward. Let your eye settle, and we&rsquo;ll find the speed and the noise one piece at a time.
      </p>

      <SectionHeader accent={accent} label="Earth and sky" title="Green below, blue swept above" />
      <p style={proseStyle}>
        Start with the two big color zones, because they are the only steady ground you get. Low across the picture runs a <strong>band of green</strong>. That green is the <strong>earth</strong> &mdash; not a field, not a meadow, no grass or furrow you could name, just the single fact of <em>land</em>, reduced to its color. Above it, the <strong>blue</strong> is the <strong>sky</strong>. These are the same two landscape colors that, as we&rsquo;ll see, run unbroken across all three panels of the larger work: green for ground, blue for air. But look at what the blue is <em>doing</em>. It does not lie flat like a real horizon. It bends. It curves into <strong>arcs</strong>, as if the sky itself has been grabbed and dragged into sweeping curves by something rushing through it. That is your first piece of the car: the air is bent. Something fast went through here and pulled the atmosphere out of shape behind it.
      </p>

      <SectionHeader accent={accent} label="The road" title="The white channel, and the lines of force" />
      <p style={proseStyle}>
        Now find the <strong>white</strong>. A pale channel cuts diagonally through the composition, and that is the <strong>road</strong> &mdash; the road the car you cannot see is traveling. (The road runs sideways across this landscape-format board, but Balla paints the channel itself as a diagonal slash, so the eye reads both at once: a sideways route, raked on a slant.) Laid along and around it are long, hard, <strong>directional strokes</strong>, all leaning the same way, all pointing down the road&rsquo;s line. Balla called these the <strong>lines of force</strong> &mdash; his term for the trajectory of speed itself, the path the motion takes drawn as a thing you can see. This is the most important move in the picture, so let it land: those strokes <em>are the car</em>. Not a picture of the car &mdash; the car&rsquo;s motion, made into marks. Follow the lines of force with your eye and you are physically tracing the route of the automobile, because the route is all that&rsquo;s left of it.
      </p>

      <SectionHeader accent={accent} label="The thrust" title="Why your eye gets pushed down the road" />
      <p style={proseStyle}>
        Pull back and notice that <strong>almost everything in the picture leans the same direction.</strong> The lines lean; the planes &mdash; the flat shape-facets the forms break into &mdash; lean; the arcs of sky curve the same way the road runs. And here is the trick of it &mdash; it is a trick about repetition. One tilted line is just a tilted line. But Balla multiplies them, dozens of marks all raked the same way, and the repetition does something to your eye that a single mark never could: it <em>shoves</em> the gaze along, faster and faster, the way a row of evenly spaced posts seen from a moving train seems to accelerate. The museum&rsquo;s own description of what sets this central panel apart from its neighbors is exactly this, &ldquo;the multiplication of the number of lines and planes.&rdquo; More repetitions, more velocity. You are not being shown speed; you are being made to feel it, because your eye cannot rest and keeps getting flung forward.
      </p>

      <SectionHeader accent={accent} label="The noise" title="The crisscross that is the “+ Sound”" />
      <p style={proseStyle}>
        Now look for where the lines stop agreeing with each other. Look for the marks that <em>cross</em> the speed-lines rather than running with them &mdash; a <strong>buzzing crisscross</strong> lattice, densest across the busiest stretch of the board where the forms pile up thickest. That crisscross is the <strong>noise</strong> &mdash; the &ldquo;+ Sound&rdquo; of the title, the roar of the engine made visible. It works precisely because it cuts against the grain: the speed-lines all flow one way, smooth, fast, and then this gridded buzz interrupts them, the way a loud noise interrupts a smooth motion in real life. You read it as <em>texture</em> rather than as picture, a kind of visual hum laid over the rush. The speed is in the strokes that flow; the sound is in the strokes that snag.
      </p>

      <SectionHeader accent={accent} label="The frame" title="The picture that runs off its own edge" />
      <p style={proseStyle}>
        Last, do the thing nobody does: <strong>look at the frame.</strong> We are trained to treat a frame as the wall the painting lives behind, a neutral border, furniture. This one is not furniture. Balla <strong>painted his own frame</strong>, continuing the picture&rsquo;s forms and colors right out onto it, so the green and the lines and the thrust do not stop at the canvas edge &mdash; they spill over onto the border and keep going. The museum describes the effect as implying &ldquo;the overflow of the painting&rsquo;s reality into the spectator&rsquo;s own space.&rdquo; Think about why that is the perfect ending for <em>this</em> picture. Everything in it is about motion that will not be contained &mdash; speed, the car that won&rsquo;t hold still long enough to be drawn, sound leaking everywhere. So the painting refuses to be contained either. It climbs out of its frame and into your room.
      </p>
      <p style={proseStyle}>
        Pull all the way back now and take it in as one thing. No car, and yet a car &mdash; assembled out of the bent sky, the white road, the raking lines of force, the buzzing noise, the thrust that pushes your eye down the road and off the frame. This is the proof that the picture is <strong>pure abstraction</strong> and not a stylized drawing of an object: Balla painted the <em>event</em> &mdash; a fast loud thing passing &mdash; without painting the thing at all. You read the speed and you hear the noise, and there is nothing there to make either one except the marks.
      </p>
    </article>
  )
}

function AbsTriptych({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="One landscape, three panels" title="The middle of a picture that runs off its own frame" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is a fact that changes how you see everything we just looked at, and it comes with a warning attached. By the <strong>leading scholarly reconstruction</strong>, this is not a standalone picture at all. It is the <strong>central panel of a three-part work</strong> &mdash; a <strong>triptych</strong> (a picture made of three panels meant to be read together, a format that goes back to medieval altarpieces). The three panels show <em>one continuous landscape</em> &mdash; the same green earth, the same blue sky, the same white road &mdash; with a car passing through all three. This middle panel is the stretch where the multiplied lines and planes pile up thickest, which is exactly why it reads as the most intense of the three.
      </p>
      <p style={proseStyle}>
        Now the warning. <strong>The triptych reading is proposed, not proven.</strong> The Peggy Guggenheim itself hedges carefully: it says the three-panel arrangement &ldquo;has been proposed&rdquo; and that this work &ldquo;may have been&rdquo; the central section. The titles wobble too. This panel is usually called <em>Abstract Speed + Sound</em>, but the Tate&rsquo;s catalogue calls <strong>this same central panel</strong> <em>Lines of Force + Noise</em>, and the various panels get named differently from source to source. The whereabouts of the left-hand panel are not firmly documented. So treat the triptych the way you should treat any elegant reconstruction of something a century old &mdash; as the best current account, told by careful people, not as a fact carved in stone.
      </p>
      <p style={proseStyle}>
        What <em>is</em> solid is the right-hand panel, and it is worth knowing about. It is called <strong><em>Abstract Speed &mdash; The Car has Passed</em></strong> (<em>Velocità astratta &mdash; l&rsquo;auto è passata</em>), and it hangs in the <strong>Tate</strong> in London. The title alone tells you how the sequence reads: the car has <em>passed</em>, it is already gone, and on that panel the Tate notes <strong>pinkish areas that suggest the exhaust fumes</strong> the vanished car left hanging in the air. Read the three together and you get a little narrative of an automobile crossing a landscape &mdash; the car coming, the car at full pitch, the car gone but for its fumes &mdash; told entirely without ever drawing the car. The wake on the left, the roar in the middle, the smell on the right.
      </p>
      <p style={proseStyle}>
        And this is where the painted frame, the thing we ended the last chapter on, stops being a clever flourish and becomes the structural idea of the whole work. <strong>Balla painted the frames of the panels too</strong>, carrying the forms and colors out across the borders, so that the landscape does not break at each frame edge but flows on &mdash; panel to frame to next panel &mdash; one unbroken sweep of speed across all three. The frames, which would normally <em>divide</em> three pictures, instead <em>connect</em> them. The most distinctive feature of the single panel turns out to be the engineering of the whole.
      </p>
      <p style={proseStyle}>
        (One more thing to keep straight, because it is a genuine trap. Balla painted a <em>whole group</em> of these abstract-speed pictures in 1913&ndash;14, not one canvas, and the <strong>Philadelphia Museum of Art</strong> owns a different <em>Velocità astratta + rumore</em> from the same years &mdash; a related work, not this one. They are cousins, not the same painting. The one we are reading is the Venice panel.)
      </p>
    </article>
  )
}

function AbsAbstraction({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="After" title="Among the first, not the first" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        o how big a deal is this picture? Big, and it pays to be exact about why, because the easy claim is the wrong one. Balla is the Futurist who went furthest toward <strong>pure abstraction</strong> earliest, and these 1913&ndash;14 speed pictures are <strong>among the first fully abstract works in Italian painting</strong> &mdash; works with no recognizable object in them at all, built entirely from line, color and force. That is a real distinction and worth saying clearly.
      </p>
      <p style={proseStyle}>
        What it is <em>not</em> is &ldquo;the first abstract painting.&rdquo; You will see that claim made, for this picture and for a dozen others, and it is always too neat. <strong>Abstraction did not have one inventor; it arrived in several places at nearly the same moment.</strong> In Munich, <strong>Wassily Kandinsky</strong> was pushing toward paintings of pure color and shape around 1910&ndash;13. In Paris, <strong>František Kupka</strong> and <strong>Robert Delaunay</strong> were doing their own versions of the same leap in the same years. (A generation of later artists &mdash; Malevich and others &mdash; would carry it further still.) Abstraction was less a single door someone opened than a tide that came in along the whole European coast at once. Balla&rsquo;s speed pictures are one of the earliest waves, the Italian one, the one driven by the worship of the machine rather than by Kandinsky&rsquo;s spiritual searching. When New York&rsquo;s Museum of Modern Art mounted its great 2012 survey <em>Inventing Abstraction</em>, mapping all these simultaneous origins, <em>this very work</em> was in it &mdash; as one of many beginnings, which is the honest place to put it.
      </p>
      <p style={proseStyle}>
        There is a harder half of the story that this picture cannot quite leave behind, and it would be dishonest to end on the pure beauty of the speed-lines without it. Futurism was not only an art movement; it was an ideology, and a violent one. Its founder, the poet <strong>Filippo Tommaso Marinetti</strong>, launched it in 1909 with a manifesto that did not just celebrate speed and the machine &mdash; it <strong>glorified war as the world&rsquo;s only hygiene</strong>, exalted danger and aggression, and sneered at museums as graveyards. That cult of speed-and-violence did not stay on the page. The Futurists campaigned for Italy to enter the First World War, and several of them died in it. And Marinetti himself went on, a decade later, to <strong>help write the 1919 founding manifesto of Italian Fascism</strong> (with the syndicalist Alceste De Ambris, for Mussolini&rsquo;s new movement). The thrill of the racing car in Balla&rsquo;s picture &mdash; the worship of pure forward motion, the impatience with everything old and slow and human &mdash; runs out of the same engine that powered all of that. The beauty is real. So is what it was harnessed to.
      </p>
      <p style={proseStyle}>
        The painting itself, mercifully, can be allowed to be itself. It hangs now in the <strong>Peggy Guggenheim Collection</strong> in Venice &mdash; the modern-art museum the American collector Peggy Guggenheim built in her palazzo on the Grand Canal &mdash; a small board, about a foot and a half by two and a half feet, with its painted frame intact, on view. Stand in front of it and the politics fall away for a moment and you are left with the original astonishment: a man in 1913 looked at a noise and a speed, two things you cannot see, and found a way to make you see them both, in a picture of a car with no car in it, that refuses to stop at its own edge.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'abstract-speed': { dog: AbsDog, making: AbsMaking, looking: AbsLooking, triptych: AbsTriptych, abstraction: AbsAbstraction },
```

---

## Fact ledger (claim → fact-pack item; flags)

| Claim in prose | Fact-pack source | Flag |
|---|---|---|
| 1912 *Dog*, Buffalo AKG; Marey chronophotography 1880s | Beat 1 §3, §9 | — |
| Balla eldest Futurist; signed 1910 manifestos w/ Boccioni, Severini | §6 | — |
| Subject = car on white road, green earth / blue sky, **no car shown** | Beat 2, §4.6 | — |
| "+rumore" = noise as crisscross lattice; Futurist all-sensation aim | Beat 3, §4.7 | — |
| Russolo → noise music ("around the same time," contemporaneous 1913–14) | Movement const (Russolo) | tone fixed per READ NICE-2 (was "shortly") |
| Dims ≈ 1 ft 9½ in × 2 ft 6 in; oil on millboard; landscape | §1 | — |
| Green = earth, blue = sky, both across all 3 panels | §4.1, §4.3 | — |
| White road = lines of force / trajectory; road runs sideways, channel reads diagonal | §4.2 | orientation reconciled per READ NICE |
| Swept blue arcs = bent atmosphere | §4.3 | hedged ("read as") |
| Noise crisscross located: densest across busiest stretch of the board | §4.7 | spatial anchor added per READ FIX-4 (hedged, not "center") |
| Multiplication of lines/planes = museum phrase for centre panel; "planes" glossed | §4.5 | quoted museum phrase; gloss added per READ NICE |
| Painted frame continues image; "overflow… into the spectator's own space" | §4.4 | verbatim museum quote |
| Triptych = **leading reconstruction, NOT settled** ("has been proposed"/"may have been") | ⚑ Headline, §8 | hedged throughout |
| Tate names **this central panel** *Lines of Force + Noise* (not "a related panel") | Headline table, §8 | FIX-2 applied: centre-panel name corrected |
| Right panel = *The Car has Passed*, Tate; pinkish = exhaust | Headline table, §8 | exhaust scoped to Tate panel |
| Left panel whereabouts undocumented | Headline, §8 | DISPUTED, stated as such |
| Philadelphia *Velocità astratta + rumore* = separate work | §Headline disambiguation | not conflated |
| "Among the first," Western-scoped; Kandinsky/Kupka/Delaunay simultaneous; MoMA *Inventing Abstraction* 2012 | Beat 5, §8 | NO "first" overclaim (preserved, unweakened) |
| Marinetti 1909 manifesto glorified war as "world's only hygiene"; Futurists → WWI; Marinetti **co-wrote the 1919 founding Fascist Manifesto with the syndicalist Alceste De Ambris, for Mussolini's new movement** (NOT "alongside Mussolini") | §6, movement hookLong | **BLOCKER F-1 / FIX-1 applied: De Ambris is the co-author; Mussolini = movement founder/publisher, not co-writer** |
| Provenance: Balla → [undocumented] → Peggy Guggenheim → Foundation/Venice; accession 76.2553 PG 31; no price/year invented | §5 | all `price: null`; year hedged |
| Peggy Guggenheim collection assembled chiefly 1939–42, Read/Duchamp advisors | §5 | — |

**No invented quotes.** The only quotations are the museum's own ("overflow… into the spectator's own space"; "the multiplication of the number of lines and planes") and Marinetti's documented "war… the world's only hygiene" gloss (framed as the manifesto's claim, not a verbatim block quote — softened to paraphrase wording per the fact pack's no-unverified-quote rule).

**Fascist-Manifesto authorship reconciliation (BLOCKER F-1):** the prose now reads "help write the 1919 founding manifesto of Italian Fascism (with the syndicalist Alceste De Ambris, for Mussolini's new movement)"; the const-header comment names De Ambris and explicitly notes Mussolini founded/published but did not co-write; this ledger row names De Ambris as the textual co-author. All three surfaces agree. No "alongside Mussolini" / "with Mussolini" anywhere.
