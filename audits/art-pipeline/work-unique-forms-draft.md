# DRAFT — Umberto Boccioni, *Unique Forms of Continuity in Space* (1913)

Authored through the gated Art content pipeline (fact pack → Opus author → 5 critic gates → revise → integrate). This is the AUTHOR output: PART A is the `ArtWorkContent` const for `src/lib/art-content.ts`; PART B is the five `Unq`-prefixed section components for `art-section-reader.tsx`.

**HERO IMAGE (born-verified):** `https://upload.wikimedia.org/wikipedia/commons/5/5e/Unique_Forms_of_Continuity_in_Space_MET_DT6411.jpg` — a clean Metropolitan Museum studio photograph of the Met bronze cast (the striding, armless, flame-flanged figure on its two block footings), verified to load (HTTP 200, image/jpeg, 2978×3722, W/H ≈ 0.80) and verified by eye to be this work. The design is PD-US (Boccioni d. 1916). `heroFit: 'contain'`, `heroAspect: 0.8`.

**FACT LEDGER (verified at author time):**
- Original 1913 is **plaster** (now MAC USP, São Paulo); "wax" is a disputed minority claim — used plaster. [DOCUMENTED]
- **No bronze cast in Boccioni's lifetime.** ALL bronzes are posthumous: first two in 1931 (MoMA's cast dated by MoMA "1913, cast 1931 or 1934"); later casts 1949–1950 and 1972; some 1972 casts are casts-of-a-1949-bronze (cast-of-a-cast). Never imply Boccioni cast the bronze. [DOCUMENTED]
- **Met cast** corrected against the live Met record: object 485540, accession **1990.38.3**, **"1913, cast 1950"**, **Bequest of Lydia Winston Malbin, 1989**, 47¾ × 35 × 15¾ in, 200 lb. (Supersedes the fact pack's generic "1949 Met"; the fact pack flagged the Met page as rate-limited and to re-fetch — done.) [DOCUMENTED — Met collection API]
- Boccioni died **1916, age 33**, of injuries after being thrown from a horse in WWI military training (near Verona). [DOCUMENTED, standard account]
- Figure ≈ **3 ft 8 in** tall (43⅞ in); Met bronze with base ≈ **3 ft 11¾ in**. Imperial only. [DOCUMENTED]
- Nike of Samothrace / Rodin *Walking Man* = scholarly **reading**, framed "is often read against," never asserted as Boccioni's stated homage intent. [LEGEND/INTERPRETATION]
- On the Italian **20-cent euro coin** (selected late 1990s; in circulation from 2002). [DOCUMENTED]
- Quotes verified against the fact pack ledger; punctuation preserved verbatim.

---

## PART A — the const (paste into `src/lib/art-content.ts`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Unique Forms of Continuity in Space (Boccioni, 1913). The flagship
// Futurism work read — and the only SCULPTURE in the art works so far.
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['unique-forms'] (Unq… prefix).
// FACTS handled per fact pack: the 1913 original is PLASTER (now MAC USP, São Paulo);
// Boccioni NEVER cast it in metal — ALL bronzes are POSTHUMOUS (first two 1931;
// Met cast 1950, into the Met 1990 via the Malbin bequest; 1972 group incl. Tate,
// some casts-of-casts). Boccioni d. 1916, age 33, after a fall from a horse in WWI
// training. The Nike of Samothrace / Rodin "Walking Man" link is a SCHOLARLY READING,
// framed "is often read against," not documented homage intent. On the Italian
// 20-cent euro coin since 2002. Hero = a born-verified Commons photo of the Met
// bronze cast (design PD-US); heroFit 'contain', portrait aspect.
// ─────────────────────────────────────────────────────────────
export const UNIQUE_FORMS: ArtWorkContent = {
  id: 'unique-forms',
  name: 'Unique Forms of Continuity in Space',
  shortName: 'Unique Forms',
  year: 1913,
  artist: 'Umberto Boccioni',
  artistId: 'boccioni',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Bronze (cast posthumously from the 1913 plaster)',
  dimensions: 'About 3 ft 8 in tall (figure); 3 ft 11¾ in with base (Met bronze)',
  location: 'Casts at MoMA and the Metropolitan Museum, New York; the Tate, London; the Museo del Novecento, Milan; and elsewhere. Original 1913 plaster at MAC USP, São Paulo.',
  acquired: 'Met bronze: Bequest of Lydia Winston Malbin, 1989 (accession 1990.38.3)',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 8, total: 9 },
  hook: 'A bronze man caught mid-stride, his body torn open into wings of flame by his own speed, built in plaster in 1913 by an artist who died three years later and never saw it cast in metal, and now small enough to ride in your pocket on the Italian 20-cent coin.',
  heroImage: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Unique_Forms_of_Continuity_in_Space_MET_DT6411.jpg',
  heroCredit: 'Boccioni, Unique Forms of Continuity in Space, modeled 1913, this bronze cast 1950 · The Metropolitan Museum of Art, New York',
  heroAspect: 0.8, // 2978 × 3722 → W/H ≈ 0.80, a tall striding figure (portrait)
  heroFit: 'contain', // a sculpture in the round — show the whole figure, never crop
  rights: 'pd-us',
  stats: [
    { v: '1913', k: 'Modeled' },
    { v: '~3 ft 8 in', k: 'Figure height' },
    { v: 'Bronze (posthumous)', k: 'Now known as' },
  ],
  sections: [
    { id: 'manifesto', eyebrow: 'Milan · 1909–12', dateLabel: '1909–12', title: 'The movement that wanted to sculpt speed', blurb: 'Marinetti launches Futurism with a front-page manifesto worshipping the machine and the racing car, and Boccioni, the movement’s chief sculptor, writes the theory of a statue with no closed surface and no pedestal before he ever makes one.', progress: 0.08 },
    { id: 'making', eyebrow: 'The studio', dateLabel: '1913', title: 'Plaster, not bronze', blurb: 'Boccioni models the figure in plaster in 1913: a striding human form with no fixed outline, the arms stripped away, the surfaces peeling back into flame-shaped flanges. He never casts it in metal. He calls what he is after “plastic dynamism.”', progress: 0.32 },
    { id: 'looking', eyebrow: 'The figure', dateLabel: '~3 ft 8 in tall', title: 'A man with no outline', blurb: 'Read the sculpture itself: the heavy striding legs, the flame- and wind-like flanges streaming off the body, the missing arms, the aerodynamic torso, the wake of motion made solid, and the two block footings instead of a grand plinth.', progress: 0.56 },
    { id: 'death', eyebrow: 'Verona · 1916', dateLabel: '1916', title: 'Dead at thirty-three', blurb: 'Boccioni goes to war, and the man who glorified speed and the machine is killed not by a machine but by a horse, thrown during a cavalry training exercise, dead of his injuries at thirty-three, with the figure still only plaster.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1931–today', title: 'The bronzes he never saw, and the coin in your pocket', blurb: 'The first bronzes are cast in 1931, fifteen years after his death; more follow, some cast from other bronzes. The version the world knows is one the artist never authorized, and Italy put it on the 20-cent euro coin, so the most reproduced Futurist sculpture rides in millions of pockets.', progress: 0.96 },
  ],
  provenance: [
    { year: '1913', who: 'Umberto Boccioni (the artist)', place: 'Milan', note: 'Modeled in plaster in 1913. Boccioni never cast the work in bronze in his lifetime; the only version he made was the plaster.', price: null },
    { year: '1916', who: 'Boccioni dies', place: 'near Verona', note: 'Killed at thirty-three of injuries after being thrown from a horse during a military training exercise in the First World War. The work still existed only as plaster.', price: null },
    { year: '1913–today', who: 'The original plaster', place: 'São Paulo', note: 'The surviving 1913 plaster is at the Museu de Arte Contemporânea da Universidade de São Paulo (MAC USP), Brazil. It is the only version Boccioni himself made.', price: 'the original', museum: true },
    { year: '1931', who: 'First bronzes (posthumous)', place: 'New York', note: 'The first two bronze casts are made in 1931, fifteen years after Boccioni’s death. One is at the Museum of Modern Art, which dates its cast “1913, cast 1931 or 1934,” keeping its own hedge on the exact year.', price: 'posthumous cast', museum: true },
    { year: '1950', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'The Met’s bronze, cast in 1950, came to the museum as the Bequest of Lydia Winston Malbin, 1989 (accession 1990.38.3): 47¾ × 35 × 15¾ in, 200 lb. A second mid-century cast went to the Museo del Novecento, Milan.', price: 'bequest', museum: true },
    { year: '1972–today', who: 'Further casts, and the euro coin', place: 'London / Milan / Rome', note: 'A further group of bronzes was cast in 1972. The Tate, London, cast is associated with this batch, and several 1972 casts were taken not from the plaster but from a 1949 bronze, a cast of a cast. In the late 1990s Italy chose the figure for the 20-cent euro coin, in circulation since 2002.', price: 'posthumous casts', museum: true },
  ],
  figures: [
    { name: 'Umberto Boccioni', role: 'The sculptor; Futurism’s chief artist', palette: ['#bf3a25', '#3a4a6a', '#1c1208'] },
    { name: 'F. T. Marinetti', role: 'Founded Futurism, 1909', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'] },
    { name: 'The 1913 plaster', role: 'The only version he made', palette: ['#cabfa6', '#8a7a5a', '#3a3020'] },
    { name: 'The posthumous bronzes', role: 'Cast 1931 onward, never by him', palette: ['#8a7448', '#5a4a2a', '#1c1408'] },
    { name: 'The 20-cent euro coin', role: 'The figure in your pocket', palette: ['#b8902c', '#7a5e1c', '#2a1e08'] },
  ],
  annotations: [
    { label: 'The striding muscular legs', where: 'The lower half: the two thick legs, one driving forward, one trailing behind.', detail: 'The legs are the engine of the whole figure: heavy, frankly muscular, mid-stride with the weight thrown forward onto the leading foot. Everything above them is being dragged and reshaped by that motion. This is where the sculpture is most plainly a body walking rather than an abstract shape, so start here, and the rest of the figure reads as what the walking does to a body.' },
    { label: 'The flame- and wind-like flanges', where: 'The torso, back, and thighs, where curved fins and blades of metal peel off the body’s surface and stream backward.', detail: 'The figure’s skin does not close. It splits open into wing- or flame-shaped flanges that flare and stream behind the body, as if the air is carving the man as he pushes through it. This is the work’s signature feature, and it is the literal form Boccioni’s manifesto demanded: no finished line, no sealed surface, the body opened out into the space around it.' },
    { label: 'The arms that aren’t there', where: 'The shoulders and sides, where arms would hang, there are none.', detail: 'Boccioni left the figure armless. The flanges flare from the torso and thighs where arms should be. The work is often read against two famous armless precedents, the ancient Greek Winged Victory (Nike) of Samothrace and Rodin’s striding Walking Man, though that is a reading by later scholars, not a documented statement of Boccioni’s intent. The effect of cutting the arms is to turn a man into pure forward force.' },
    { label: 'The wake of motion', where: 'Behind and around the figure, the trailing curves that seem to belong to the air, not the man.', detail: 'These backward-streaming forms are not clothing and not anatomy. They are the trail of the stride made solid, Boccioni’s “plastic dynamism,” the idea that a moving body and the space it disturbs are one continuous form. The “continuity in space” of the title is exactly this: the figure does not stop at its own edge.' },
    { label: 'The aerodynamic torso', where: 'The chest and midsection, swept and streamlined as if built to move through air.', detail: 'The torso reads less like a ribcage than like a hull or a fuselage: streamlined, faceted, shoved by speed. Futurism loved the machine, and the body here is half man, half engine. On the polished bronze casts the metal sharpens that machine quality further, which is one more reason the bronze, however unauthorized, fits the work so well.' },
    { label: 'The two block footings, not a plinth', where: 'The base, where the figure rises off two small block-like supports rather than a single grand pedestal.', detail: 'Boccioni’s manifesto attacked the statue sealed onto its pedestal, shut off from the world. Here the figure strides off two small blocks, one under each foot, not a grand plinth, so it reads as going somewhere rather than posed for display. It is not floating or baseless; it has those minimal footings. But the difference from a traditional statue on its column is the whole point.' },
  ],
  lineage: {
    parents: [
      { label: 'The Nike of Samothrace', mode: 'art' },
      { label: 'Rodin’s Walking Man', mode: 'art' },
      { label: 'The Technical Manifesto of Futurist Sculpture', mode: 'art' },
    ],
    children: [
      { label: 'Sculpture of motion', mode: 'art' },
      { label: 'The machine age in art', mode: 'civ' },
      { label: 'The euro coin', mode: 'civ' },
    ],
  },
}
```

**Registry wiring (coordinator):** add `UNIQUE_FORMS` to the `ART_WORK_CONTENT` record under key `'unique-forms'`, and splice the section components into `NARRATIVES` (see PART B footer).

---

## PART B — the five `Unq`-prefixed section components (paste into `art-section-reader.tsx`)

```tsx
// ─────────────────────────────────────────────────────────────
// Unique Forms of Continuity in Space (Boccioni, 1913) — the five chapters
// ─────────────────────────────────────────────────────────────
function UnqManifesto({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Milan · 1909" title="The movement that announced itself before it had any art" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        n <strong>20 February 1909</strong>, the front page of the Paris newspaper <em>Le Figaro</em> carried a manifesto by an Italian poet named <strong>Filippo Tommaso Marinetti</strong>. It announced a movement called <strong>Futurism</strong> (Italian <em>Futurismo</em>), and it was less an art program than a war cry. It worshipped the new century&rsquo;s machines, its speed, its electric cities, and its noise, and it sneered at everything old, slow, and revered. Its single most famous line declares that &ldquo;a roaring car&hellip; is more beautiful than the Victory of Samothrace&rdquo; &mdash; meaning the <strong>Nike of Samothrace</strong>, the celebrated headless, winged, striding Greek statue in the Louvre that stood, in 1909, for the unquestioned glory of ancient art. Hold that statue in mind. We are going to walk straight back into it later.
      </p>
      <p style={proseStyle}>
        Marinetti was the impresario. The man who would become Futurism&rsquo;s leading visual artist, and its only real sculptor, was <strong>Umberto Boccioni</strong> (1882&ndash;1916). Boccioni was a painter first, and a furiously ambitious one, but he came to believe that the thing Futurism most needed to do &mdash; show <em>motion</em>, show a moving body fused with the air and the speed around it &mdash; might be done even better in three dimensions than on a flat canvas. So he turned to sculpture, a medium that, in 1912, looked to him completely exhausted: marble nudes and bronze generals standing dead still on tall pedestals, exactly the kind of revered, frozen thing the manifesto had declared war on.
      </p>

      <SectionHeader accent={accent} label="The theory before the object" title="A statue with no closed surface and no pedestal" />
      <p style={proseStyle}>
        Boccioni did the theory first. On <strong>11 April 1912</strong> he published the <strong>Technical Manifesto of Futurist Sculpture</strong>, and it reads like a demolition order. He called for &ldquo;the complete abolition of the finished line and the closed statue&rdquo; &mdash; meaning a sculpture should no longer be a sealed, self-contained lump that stops cleanly at its own outline. He wanted to &ldquo;open up the figure like a window and enclose within it the environment in which it lives.&rdquo; He wanted, in his own phrase, to &ldquo;model the atmosphere&rdquo; &mdash; to make the air around a thing part of the thing itself. A traditional statue was a solid object sitting in space, sealed off from it. Boccioni wanted a sculpture that grabbed the space it moved through and dragged it along.
      </p>
      <p style={proseStyle}>
        That is a lot to ask of a chunk of bronze, and on the page it sounds like the kind of thing manifestos say and objects never deliver. The remarkable thing about the figure we are about to look at is that it actually does it. Before that, two facts to carry in, because both get garbled constantly. First: the version Boccioni made in 1913 was <strong>plaster</strong>, not bronze. Second: he <strong>never cast it in metal himself</strong>. Every shining bronze you have ever seen of this figure was made after he was dead. We will get to how, and why that matters. For now: theory in 1912, plaster in 1913, and the artist gone by 1916.
      </p>
    </article>
  )
}

function UnqMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The studio · 1913" title="Plaster, not bronze" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1913</strong>, with the manifesto a year behind him, Boccioni made the figure. He modeled it in <strong>plaster</strong> &mdash; a soft white material you build up wet and let set hard, the standard way a sculptor works out a form before it is ever cast into permanent metal. (You will occasionally see it claimed that he made it in wax; that is a minority story, and the strong consensus, including the original that actually survives, is plaster.) This matters more than a footnote, because plaster is the version Boccioni himself shaped with his own hands, and it is the only version he ever saw. It survives, today, in a museum in <strong>São Paulo, Brazil</strong>. The famous gleaming metal ones came later, and not from him.
      </p>
      <p style={proseStyle}>
        What he built was a single human figure in mid-stride &mdash; and then he attacked the human figure with his own manifesto. He gave it <strong>no fixed outline</strong>. Its surfaces do not close over the body the way skin does; they peel back and stream off it in curved fins and blades, as if the air the figure is pushing through is carving it as it goes. And he <strong>stripped the arms away entirely</strong>. There are no arms. Where they should hang, there are flanges of metal flaring out into the space behind. A walking man, opened up like a window, with the environment he moves through built right into him: the manifesto, made solid.
      </p>

      <SectionHeader accent={accent} label="The word he wanted" title="“Plastic dynamism”" />
      <p style={proseStyle}>
        Boccioni had a name for what he was reaching for: <strong>dynamism</strong>, and specifically <em>plastic dynamism</em> &mdash; &ldquo;plastic&rdquo; here in its old art-school sense, meaning <em>to do with shaping and modeling form</em>, not the material plastic, which did not yet exist as we mean it. Plastic dynamism was not a snapshot of a moving thing, the way a photograph freezes a runner. It was the <strong>fusion of a body with the motion and the space it generates</strong> &mdash; the moving man and the rushing air and the trailing wake all made into one continuous form.
      </p>
      <p style={proseStyle}>
        He was clear that this was not done by piling up more body parts. Writing about exactly this work, he said the continuity he wanted was &ldquo;not to be found in repetition of legs, arms and faces&rdquo; but was achieved &ldquo;through the intuitive search for the unique form which gives continuity in space.&rdquo; Read those last words again, because they are not a description of the sculpture. They <em>are</em> the sculpture. <strong>Forme uniche della continuità nello spazio</strong> &mdash; <em>Unique Forms of Continuity in Space</em>. The title is lifted, almost word for word, out of the artist&rsquo;s own statement of what he was after. The flanges streaming off the figure are not decoration and not damage. They are the wake of the stride, motion made solid, the one unique form that gives a body continuity into the space around it.
      </p>
    </article>
  )
}

function UnqLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The figure" title="A man with no outline" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his is a <strong>sculpture in the round</strong>, so there is no single front the way there is with a painting; you walk around it. But there is a standard view &mdash; the three-quarter striding profile, the one the museums photograph and the one on the coin &mdash; and it is the view to hold in your head while you read. The figure is not large: a little under four feet tall, roughly chest height on an adult, small enough to stand on a table. Picture it the size of a striding child, cast in heavy bronze, and start, as the figure itself does, from the ground up.
      </p>
      <p style={proseStyle}>
        Begin with the <strong>legs</strong>, because the legs are the engine. They are thick, frankly muscular, planted in a deep mid-stride: one driving leg forward with the weight thrown onto it, the other trailing behind, the whole posture caught at the instant of pushing off. This is the most human part of the figure, the part that reads, unmistakably, as a body walking. Everything above the legs is what that walking <em>does</em> to a body, so you have to feel the stride first or the rest looks like abstraction for its own sake. It is not. It is a man, mid-step, going somewhere with force.
      </p>

      <SectionHeader accent={accent} label="The flanges" title="The skin that won’t close" />
      <p style={proseStyle}>
        Now look at what is happening to the <strong>body</strong>. The figure&rsquo;s surface does not seal over it. Off the torso, the back, and the thighs, the metal splits open and streams backward into curved <strong>flanges</strong> &mdash; fins and blades that flare out like wings, or like flame bent flat by a wind, or like the wake peeling off the hull of a boat. This is the single most important thing to see in the whole sculpture, and it is the literal form Boccioni&rsquo;s manifesto demanded: <strong>no finished line, no closed surface</strong>. The body is opened up and the air it is shoving through has been built right into it. Trace one flange with your eye from where it leaves the thigh to where it streams off behind, and you are tracing the path of the air around a running man, frozen in bronze.
      </p>
      <p style={proseStyle}>
        And here is the thing your eye keeps reaching for and not finding: the <strong>arms</strong>. There are none. Boccioni cut them off. Where a striding figure would swing its arms, this one has only the flanges flaring from the torso. The missing arms are the reason the figure is so often <strong>read against</strong> two famous armless ancestors &mdash; the ancient <strong>Nike of Samothrace</strong>, the winged, headless, striding Greek Victory in the Louvre that Marinetti had sneered at next to a racing car, and <strong>Rodin&rsquo;s <em>Walking Man</em></strong>, a striding bronze with no arms and no head. That comparison is a reading by later scholars, not something Boccioni is documented to have intended &mdash; so hold it as a likeness, not a confession. But the effect of removing the arms is plain enough: with nothing to gesture or balance or reach, the figure becomes <strong>pure forward force</strong>, a body that is nothing but the act of moving.
      </p>

      <SectionHeader accent={accent} label="The wake, and the torso" title="Half man, half engine" />
      <p style={proseStyle}>
        Look behind and around the figure, at the curves that seem to belong to the air rather than the man. Those backward-streaming forms are not clothing and not muscle. They are the <strong>wake of the stride</strong> made solid &mdash; the trail a moving body leaves in the space it disturbs, which Boccioni insisted was part of the body itself. This is &ldquo;continuity in space&rdquo; you can see: the figure does not stop at its own edge. It bleeds into the air. Where a normal statue ends cleanly at its outline and the world begins, this one has no clean edge at all; man and motion and space are one continuous shape.
      </p>
      <p style={proseStyle}>
        Last, the <strong>torso</strong> and chest &mdash; and read them as machinery. The midsection is swept and streamlined, faceted into hard planes, less a ribcage than a <strong>hull or a fuselage</strong>, a thing built to part the air. Futurism was in love with the machine, and this figure is half man and half engine: a human body redesigned by speed until it looks aerodynamic. On the polished bronze casts, the metal makes that machine quality glint and sharpen &mdash; which is a small irony worth holding, because the metal that suits the work so perfectly is metal the artist never chose. Then drop your eye to the very bottom. The figure does not rise from a grand pedestal. It strides off <strong>two small block footings</strong>, one under each foot &mdash; not floating, not baseless, but deliberately denied the tall plinth of a traditional statue, so that it reads as a man going somewhere, not a monument standing still. Boccioni&rsquo;s manifesto had declared war on the sealed statue on its column. Here, at the figure&rsquo;s feet, is the war won.
      </p>
    </article>
  )
}

function UnqDeath({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Verona · 1916" title="The man who worshipped the machine, killed by a horse" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        uturism had glorified war. Marinetti&rsquo;s manifesto had called it &ldquo;the world&rsquo;s only hygiene,&rdquo; and when the First World War came, several of the Futurists, Boccioni among them, volunteered. It is one of the bleak facts of the movement that the men who had spent years celebrating speed, force, and violence got the real thing, and it killed some of them. Boccioni enlisted, served, and in <strong>1916</strong> was in a military training unit near <strong>Verona</strong>, in northern Italy.
      </p>
      <p style={proseStyle}>
        He died in a way that reads almost as a grim joke at the movement&rsquo;s expense. The artist who had remade the human body as an aerodynamic engine, who had put a racing car above a Greek goddess, was not killed by any machine. He was <strong>thrown from a horse</strong> during a cavalry training exercise, and died of his injuries. He was <strong>thirty-three</strong>. The most modern artist in Italy, the prophet of the machine age, was undone by the oldest transport there is.
      </p>
      <p style={proseStyle}>
        And here is what he left behind, where this figure is concerned. He left the <strong>plaster</strong>. That was all. He had modeled <em>Unique Forms</em> in 1913, exhibited his Futurist sculptures, written the theory that the figure fulfilled &mdash; and then he was gone, at thirty-three, with the most important sculpture of his career still a white plaster cast, never once committed to permanent bronze by the hand that made it. Whatever the figure was going to become in metal, he would have no part in it. The version of this sculpture that hangs in the world&rsquo;s great museums, the gleaming bronze on the coin, is a thing he never saw and never made.
      </p>
    </article>
  )
}

function UnqAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1931" title="The bronzes begin, fifteen years too late" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he bronze story starts in <strong>1931</strong> &mdash; fifteen years after Boccioni&rsquo;s death. That year the first two bronze casts were made from the plaster. One of them is now in the <strong>Museum of Modern Art</strong> in New York, which dates its cast, with admirable honesty, &ldquo;1913, cast 1931 or 1934&rdquo; &mdash; the museum itself is not certain of the exact year. Note what that means: the most famous version of this sculpture is a posthumous metal copy whose own owner cannot pin its birthday to the year. This is normal for posthumous casts, and it is exactly the kind of thing the careful version of art history says out loud rather than smoothing over.
      </p>
      <p style={proseStyle}>
        More casts followed. Around mid-century there were further bronzes &mdash; the one in the <strong>Metropolitan Museum of Art</strong> in New York was cast in <strong>1950</strong> and came to the museum in 1989 as a bequest; another went to the <strong>Museo del Novecento</strong> in Milan. Then in <strong>1972</strong> a larger group was cast, and this is where it gets genuinely thorny: several of the 1972 bronzes were made <strong>not from Boccioni&rsquo;s plaster but from one of the existing bronzes</strong> &mdash; a cast taken from a cast. The <strong>Tate</strong> in London holds one of the 1972 casts. So &ldquo;the Boccioni in the museum&rdquo; may be one step, or two steps, removed from anything the artist ever touched.
      </p>

      <SectionHeader accent={accent} label="The wrinkle" title="The most famous version is the one he never made" />
      <p style={proseStyle}>
        It is worth sitting with the strangeness of this for a moment, because it is real and it is rarely said plainly. Every bronze of <em>Unique Forms</em> is <strong>posthumous</strong>. Not one was cast, finished, or approved by Boccioni. Some are copies of copies. The version the entire world recognizes &mdash; the gleaming, museum-lit, machine-perfect bronze &mdash; is precisely the version the artist had no hand in. The thing he actually made, the plaster, sits comparatively unseen in São Paulo, while its metal afterimages stand in New York, London, and Milan.
      </p>
      <p style={proseStyle}>
        And there is a deeper irony folded inside that one. Futurism prized the <strong>new</strong>, the <strong>unique</strong>, the once-only burst of modern life &mdash; the title of this very work begins with the word <em>unique</em>. Yet the work survives, and is loved, through <strong>mechanical bronze multiples</strong>: a dozen-odd identical metal copies, manufactured after the fact, several of them copied from each other. A movement that hated the museum and the monument is now famous through monuments in museums. The artist would have had opinions.
      </p>

      <SectionHeader accent={accent} label="The coin" title="A striding bronze, small enough to spend" />
      <p style={proseStyle}>
        The last chapter of the figure&rsquo;s afterlife is the smallest and the widest. In the late 1990s, when Italy was choosing the designs for its new <strong>euro coins</strong>, it put <em>Unique Forms of Continuity in Space</em> on the <strong>20-cent coin</strong> &mdash; the striding figure, in profile, on a piece of metal you can carry loose in a pocket. The coins entered circulation in <strong>2002</strong>. So the most reproduced Futurist sculpture in the world is now reproduced again, by the hundreds of millions, in a soft gold-colored alloy, riding around in the change of anyone who has ever bought a coffee in Italy.
      </p>
      <p style={proseStyle}>
        It is a fitting and faintly absurd resting place for the work. A figure built to embody pure forward motion now travels constantly, hand to hand, across a whole currency union. A sculpture that began as one fragile plaster, made by an artist who died at thirty-three and never cast it, ended up as one of the most widely held images of the twentieth century &mdash; and you can still feel, in the small striding figure on the coin, the legs driving forward and the body torn open into wings of speed, exactly as Boccioni shaped it in plaster, more than a century ago, before he had any idea where it would go.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'unique-forms': { manifesto: UnqManifesto, making: UnqMaking, looking: UnqLooking, death: UnqDeath, afterlife: UnqAfterlife },
```

---

### Section ↔ component map (for the coordinator)

| `sections[].id` | component |
|---|---|
| `manifesto` | `UnqManifesto` |
| `making` | `UnqMaking` |
| `looking` | `UnqLooking` |
| `death` | `UnqDeath` |
| `afterlife` | `UnqAfterlife` |

All five `id`s in PART A match the registry keys in PART B. `medium`, `dimensions`, `rights`, `heroImage`/`heroFit`/`heroAspect`, `stats`, `sections`, `provenance`, `figures`, `annotations` (6), and `lineage` are all populated per the STARRY_NIGHT field set. New prose contains no `—` characters (em dashes are rendered via `&mdash;` entities only, matching the absinthe house style); verbatim quotes preserve their original punctuation.
