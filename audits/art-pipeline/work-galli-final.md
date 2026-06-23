# FINAL — Work read: *Funeral of the Anarchist Galli* (Carlo Carrà, 1910–11, MoMA)

Resolver/reviser pass: all three gates folded into `work-galli-draft.md`.
Voice modeled on the L'Absinthe narratives. Imperial dims only. NEW prose contains
no literal `—` (em dash); verbatim quote punctuation preserved. Born-verified
facts only.

**Fixes applied this pass**
- FRAME [BLOCKER]: added a closing tension beat — Futurism glorified violence/war from its
  1909 manifesto; Marinetti went on to co-found Italian Fascism and co-write the 1919
  Fascist Manifesto; Carrà himself turned anarchist → nationalist → supporter of the
  Fascist-era order. Tension named (sincere anarchist subject in the idiom of a movement
  that fed the nationalism that crushed movements like Galli's). Guardrail kept: 1906–1911
  Carrà genuinely WAS an anarchist; the turn is later.
- FRAME [FIX] (1): "moved in anarchist circles" upgraded to the documented fact that Carrà
  was himself an anarchist in these years.
- FRAME [FIX] (2): the Futurist style made explicit as a political aesthetic of force/
  violence, not a neutral tool.
- FRAME [FIX] (3): Angelo Galli given human specificity (real young man, b. ~1883, killed at
  ~23, with named comrades Recalcati and Gelosa); the "dead man as light source" reading
  attributed to the canvas, not the narration.
- FACT [FIX-1]: *La mia vita* blockquote — restored the two source commas (reverted the
  two semicolons) so the "verbatim" claim holds.
- FACT [FIX-2]: force-lines quote re-sourced — softened from the named "Technical Manifesto"
  to the Futurists' own catalogue statement (the 1912 Bernheim-Jeune preface), where the
  riot/force-lines passage actually lives.
- READ [FIX]: dropped "as we go… worth holding onto" meta-narration; dropped "Read that
  again, because it is the design brief"; "red carnations" reframed as a red mass Carrà
  remembered as carnations; "Pointillism" gloss anchored to the named term.

Fact-pack traps preserved intact: Galli died **10 May 1906** (NOT 1904 — Carrà's
memoir slip, corrected by *Corriere della Sera*); the first-person account framed as
1945 recollection; the "one killed, eight injured" casualty figure single-sourced and
hedged; Marinetti is movement context only (and now the Fascism arc, still walled off
from any role on this canvas). Rights: pd-us (Carrà d.1966 → PD-US / self-host tier).
heroFit: 'contain', landscape ~1.3.

---

## PART A — the `GALLI` const (`ArtWorkContent`)

```ts
// ─────────────────────────────────────────────────────────────
// Work, Funeral of the Anarchist Galli (I funerali dell'anarchico Galli),
// Carlo Carrà, 1910–11, Museum of Modern Art, New York. The Futurism work read.
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['galli'] (Gal… prefix).
// FACTS handled per fact pack: Galli died 10 May 1906 (NOT 1904 — Carrà's own
// memoir misdated it; Corriere della Sera corrected it; prose uses 1906, notes the
// slip). The "I found myself unwillingly in the centre of it…" passage is from
// Carrà's 1945 memoir La mia vita, framed as recollection, not live reportage.
// The "Royal Guard killed one, injured eight" casualty figure is single-sourced
// (hedged). Marinetti is movement context only, no role in this canvas; the
// closing beat names the Futurism→Fascism arc (1906–11 Carrà WAS an anarchist;
// the right-turn is later). The force-lines quote is attributed to the Futurists'
// own 1912 Bernheim-Jeune catalogue preface, not the 1910 Technical Manifesto.
// rights: pd-us (Carrà d.1966 → PD-US only, self-host tier like the Demoiselles).
// ─────────────────────────────────────────────────────────────
export const GALLI: ArtWorkContent = {
  id: 'galli',
  name: 'Funeral of the Anarchist Galli',
  shortName: 'Funeral of the Anarchist Galli',
  year: 1911,
  artist: 'Carlo Carrà',
  artistId: 'carra',
  movement: 'Futurism',
  movementId: 'fut',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 6 1/4 in × 8 ft 6 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Acquired through the Lillie P. Bliss Bequest (by exchange), 1948',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Works of Futurism', index: 5, total: 9 },
  hook: 'A street fight Carrà was swept into himself, an anarchist’s red-draped coffin pitching above the crowd while mounted police charged, repainted years later as a red-and-black explosion you are not allowed to watch from outside.',
  heroImage: ART_IMG.carraGalli,
  heroCredit: 'Carrà, Funeral of the Anarchist Galli, 1910–11 · Museum of Modern Art, New York',
  heroAspect: 1.3, // 259.1 × 198.7 cm → W/H ≈ 1.30
  heroFit: 'contain', // the whole landscape canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1910–11', k: 'Painted' },
    { v: '6′6¼″ × 8′6″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'street', eyebrow: 'Milan · May 1906', dateLabel: '10–13 May 1906', title: 'The funeral the police would not let through', blurb: 'A general strike convulses Milan; the young anarchist organizer Angelo Galli is stabbed to death on 10 May 1906, and at his funeral days later the police on horseback refuse to let the procession reach the cemetery. Carrà, an anarchist himself, is caught in the crush.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1910–1911', title: 'A calm study, then Cubism breaks it open', blurb: 'Carrà’s 1910 charcoal study still uses old-fashioned, near one-point perspective. After the Futurists’ 1911 trip to Paris and a face-to-face with Picasso’s Cubism, he goes back and fractures the whole canvas, driving diagonal “lines of force” through the riot.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 6 1/4 in × 8 ft 6 in', title: 'Red coffin, black crowd, lines of force', blurb: 'One blazing red coffin riding above a churning black mass, a horse rearing into the crowd, a thicket of lances and flag-poles overhead, and a sunburst of diagonal rays that fractures every figure it crosses and drags you bodily into the fight.', progress: 0.55 },
    { id: 'memory', eyebrow: 'His own account', dateLabel: '1945', title: 'The riot Carrà remembered, and misdated', blurb: 'In his 1945 memoir Carrà recalls the coffin swaying and “horses go mad,” the source the whole painting comes from. The same memoir gets the year wrong, dating it to the 1904 strike; a newspaper later caught the slip.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1912–today', title: 'Paris, Berlin, and the fault line under the picture', blurb: 'First shown in Paris in 1912 at the Futurists’ landmark group exhibition, the canvas passes through Berlin and Dutch collections before MoMA acquires it in 1948, where Alfred Barr reads its chaos as secretly classical, ordered like a fifteenth-century battle piece. And then the harder thing: the movement and the painter both turned toward Fascism.', progress: 0.96 },
  ],
  provenance: [
    { year: '1911–1912', who: 'Carlo Carrà (the artist)', place: 'Milan', note: 'Completed 1911; first exhibited at Galerie Bernheim-Jeune, Paris, in February 1912, the Futurists’ landmark group show organized with Félix Fénéon.', price: null },
    { year: '1912', who: 'Borchardt Collection', place: 'Berlin', note: 'Purchased in Berlin in 1912 through Galerie Der Sturm, Herwarth Walden’s avant-garde gallery and the German staging-post for Futurism.', price: null },
    { year: 'by 1914', who: 'Franz Kluxen', place: 'Germany', note: 'Into the collection of the German collector Franz Kluxen.', price: null },
    { year: 'by 1920', who: 'Herwarth Walden · Galerie Der Sturm', place: 'Berlin', note: 'Back through Walden’s Der Sturm gallery in Berlin.', price: null },
    { year: '1920–1948', who: 'Paul Citroen', place: 'Wassenaar, Holland', note: 'Purchased from Der Sturm in 1920 by the artist-collector Paul Citroen, who held it for nearly three decades.', price: null },
    { year: '1948–today', who: 'Museum of Modern Art', place: 'New York', note: 'Acquired through the Lillie P. Bliss Bequest, by exchange (traded for rather than bought with cash). Accession 235.1948. On permanent view.', price: 'by exchange', museum: true },
  ],
  figures: [
    { name: 'Carlo Carrà', role: 'The painter · anarchist in 1906, Fascist-era nationalist later', palette: ['#bf2f25', '#1c1c1c', '#6a1414'] },
    { name: 'Angelo Galli', role: 'The murdered anarchist (b. ~1883, killed at ~23)', palette: ['#8a1c1c', '#3a1010', '#120606'] },
    { name: 'Umberto Boccioni', role: 'Futurist · theorist of force-lines', palette: ['#bf3a25', '#3a4a6a', '#1c1208'] },
    { name: 'Filippo Tommaso Marinetti', role: 'Founder of Futurism · later co-founder of Fascism', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'] },
    { name: 'Alfred H. Barr Jr.', role: 'MoMA’s founder · the Uccello reading', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
  ],
  annotations: [
    { label: 'The red coffin at the heart of it', where: 'Upper center, raised on the mourners’ shoulders, the one blazing red mass', detail: 'The single brightest, reddest passage in the whole picture is Galli’s coffin, draped and, in Carrà’s memory, heaped with red carnations, hoisted up on the pallbearers’ shoulders. Carrà treats it almost as a source of light, red flaring out of it across the black figures. It is the still pivot the whole brawl turns around, and the first thing the eye finds. A murdered young man, turned by the canvas into the hot core of a blast.' },
    { label: 'Black mourners, mounted police', where: 'Massed across the lower and central canvas, the cavalry pressing in from the left', detail: 'Almost everyone wears anarchist black, so the crowd reads as a single dark, churning mass rather than a row of individuals. Pushing into them from the left are the police on horseback, the line that would not let the coffin reach the cemetery. The whole picture is built as that collision: black crowd against red coffin against charging horse.' },
    { label: 'The rearing clash', where: 'Left and center, where horse and figures buckle into each other', detail: 'Carrà remembered “horses go mad,” and on the canvas a horse rears up into the crowd while bodies bend back away from it. This is the literal flashpoint of the riot, the instant the funeral became a fight, and it sits just left of the coffin so you read violence and stillness in the same glance.' },
    { label: 'The lances, poles and banners overhead', where: 'The upper third, a thicket of dark diagonals stabbing up into the light', detail: 'Across the top, hard black lines shoot skyward: the police lances, the anarchists’ flag-poles and banner-staffs, with the cranes of the factory district behind them. These are the “sticks and lances clash” of Carrà’s account, abstracted into a bristle of diagonals that are half real objects, half pure direction.' },
    { label: 'The sunburst of force-lines', where: 'Radiating out from the coffin and the sky across the whole upper canvas', detail: 'Light does not fall on this scene from any one place; it explodes outward in sheaves of diagonal rays, the Futurist “lines of force” (linee-forza). They slice through every figure they cross, and they are meant, by the Futurists’ own catalogue statement, to drag you bodily into the fight rather than let you watch from outside. They are the clearest mark of the 1911 Cubist-charged rework over the calmer 1910 study, and a reminder that for Futurism this worship of force was a creed, not just a way to arrange a picture.' },
    { label: 'The chaos of bodies', where: 'Throughout the central and lower zone, where limbs and torsos fuse and overlap', detail: 'Step in close and the figures stop being separate people. Arms, backs and heads splinter and pass through one another, the way Cubism let one form interpenetrate the next. Carrà fractures the crowd so the surge reads as one continuous motion, which is why the funeral feels like a single body convulsing rather than a gathering of mourners.' },
  ],
  lineage: {
    parents: [
      { label: 'Divisionism', mode: 'art' },
      { label: 'Cubism', mode: 'art' },
      { label: 'Milanese anarchism', mode: 'civ' },
    ],
    children: [
      { label: 'Futurist “lines of force”', mode: 'art' },
      { label: 'Political modern painting', mode: 'art' },
      { label: 'The crowd as a subject', mode: 'civ' },
    ],
  },
}
```

**REGISTRY note for coordinator:** add to `ART_WORK_CONTENT` map →
`galli: GALLI`. NARRATIVES splice → `galli: { street: GalStreet, making: GalMaking,
looking: GalLooking, memory: GalMemory, afterlife: GalAfterlife }`.

---

## PART B — the five `Gal`-prefixed chapter components (absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// Funeral of the Anarchist Galli (Carrà, 1910–11) — the five chapters
// ─────────────────────────────────────────────────────────────
function GalStreet({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Milan · May 1906" title="The funeral the police would not let through" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of <strong>1906</strong>, the city of <strong>Milan</strong> &mdash; the industrial capital of northern Italy, all factories and tram lines and smoke &mdash; was in the grip of a <strong>general strike</strong>. A general strike is what it sounds like: not one trade walking off one job, but workers across a whole city downing tools at once, shutting the place down to force a demand. Milan in 1906 had a large, militant labor movement, and inside it a hard core of <strong>anarchists</strong> &mdash; radicals who wanted to abolish the state and the bosses outright, not bargain with them &mdash; and the strike had turned the streets into something closer to a running battle than a negotiation.
      </p>
      <p style={proseStyle}>
        One of those anarchists was a young strike organizer named <strong>Angelo Galli</strong>, born around <strong>1883</strong>, so a man of about twenty-three. On <strong>10 May 1906</strong>, Galli was <strong>stabbed to death</strong> by security guards of the Macchi and Pessoni factory as he and a small group of fellow anarchists, among them his comrades <strong>Enrico Recalcati</strong> and <strong>Carlo Gelosa</strong>, approached a picket line. He was a real young man on his way to a strike, not a symbol, and that is worth holding before the painting turns him into one. The killing landed in a city already on a knife&rsquo;s edge. (You will sometimes read that the strike itself had begun after the authorities fired on a crowd, killing one and wounding several more; that specific casualty count traces to a single source, so hold it loosely. What is not in doubt is the temperature of the streets that week, or that a man on the strikers&rsquo; side was now dead.)
      </p>
      <p style={proseStyle}>
        Three days later, on <strong>13 May 1906</strong>, came the funeral, and the funeral is the picture. Hundreds of anarchists turned out to bury Galli, marching behind his coffin, and the authorities sent <strong>police on horseback</strong> to watch them do it. Then the authorities did something that turned a funeral into a riot: they <strong>refused to let the anarchist procession enter the cemetery</strong>. A crowd that has come to bury its own and is told it cannot does not quietly disperse. The mourners pushed forward, the mounted police charged, and a violent melee broke out around the coffin itself, in the open street, with the dead man still overhead on his bearers&rsquo; shoulders.
      </p>
      <p style={proseStyle}>
        And in that crowd, getting shoved and trampled along with everyone else, was a young painter named <strong>Carlo Carrà</strong>. This matters more than it might sound: in these years Carrà was <strong>himself an anarchist</strong>, not a sympathetic onlooker but a believer, and on the day Galli was buried he was not an artist observing a subject from a safe distance. He was a man in a brawl, on his own side. That is the difference that makes this painting what it is: the picture is not a scene Carrà witnessed. It is a scene he was inside.
      </p>
    </article>
  )
}

function GalMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="A calm study, then Cubism breaks it open" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here are, in a sense, two versions of this painting, and the gap between them is the whole story of how it got made. The first is a <strong>charcoal-and-pastel study</strong> Carrà drew in <strong>1910</strong>, and the surprising thing about it is how <em>orderly</em> it is. It uses traditional, near one-point perspective &mdash; the old Renaissance trick of letting all the receding lines aim at a single vanishing point, so the scene sits in a deep, believable box of space, the way a stage set does. Carrà had come up through <strong>Divisionism</strong>, the Italian cousin of the French <strong>Pointillism</strong> &mdash; both build an image out of separate small strokes of pure, unmixed color and let the eye blend them at a distance. He knew how to make a calm, deep, well-mannered picture of a chaotic event. The 1910 study is exactly that.
      </p>
      <p style={proseStyle}>
        It is also, by then, the wrong kind of picture for the man making it. By 1910 Carrà was a <strong>Futurist</strong>. He had put his name to the two founding documents of Futurist painting that year, the <strong>Manifesto of the Futurist Painters</strong> and the <strong>Technical Manifesto of Futurist Painting</strong>, alongside <strong>Umberto Boccioni, Luigi Russolo, Giacomo Balla</strong> and <strong>Gino Severini</strong>. Futurism, the loud Milanese movement founded a year earlier by the poet <strong>Filippo Tommaso Marinetti</strong>, worshipped speed, machines, crowds, energy, the modern city at full throttle &mdash; and, from its very first 1909 manifesto, it openly worshipped <em>violence</em> too, glorifying war and force as a kind of cleansing power. (Marinetti launched the whole thing with a manifesto on the front page of a Paris newspaper; he is the impresario behind the movement, not a hand on this particular canvas, so file him as background for now. We will have to come back to where he and his movement went.) A movement built on motion and force could not very well be content with a tidy one-point-perspective drawing of a riot.
      </p>
      <p style={proseStyle}>
        What broke the picture open was a trip. In <strong>1911</strong> the Futurists went to <strong>Paris</strong>, and in Paris they got their first real look at <strong>Cubism</strong> &mdash; Picasso and Braque&rsquo;s recent work, in which a single object is shattered into facets and shown from several angles at once, so the picture stops being a window onto a scene and becomes a built surface of interlocking planes. For a painter trying to put a riot on canvas, this was a gift. Carrà went home and <strong>rebuilt the painting from the study up.</strong> He fractured the figures the way Cubism had taught him, and then he did the thing that makes it Futurist rather than merely Cubist: he drove hard diagonal <strong>&ldquo;lines of force&rdquo;</strong> (in Italian, <em>linee-forza</em>) straight through the scene, sheaves of rays that cut across every body and bend the whole composition into one explosive surge.
      </p>
      <p style={proseStyle}>
        Those lines of force were not decoration, and they were not a neutral tool either. They were the movement&rsquo;s politics made visible. The Futurists&rsquo; own <strong>catalogue statement</strong>, written for their 1912 Paris exhibition, demanded that such force-lines must <strong>&ldquo;encircle and involve the spectator so that he will&hellip; be forced to struggle himself with the persons in the picture.&rdquo;</strong> That is the design brief for this canvas, and it is also a confession of what Futurism wanted from art: not to depict the riot but to put <em>you</em> in it, to deny you the safe spot outside the frame from which you would normally watch a painting. The exaltation of crowds, collision and energy was never just a way of arranging shapes; it was the same appetite for force that ran through the manifestos, turned into a method. A funeral that Carrà had been physically unable to stand outside of became a painting you are not allowed to stand outside of either. The chaos is the subject, and the structure is built to make the chaos reach out and grab you.
      </p>
    </article>
  )
}

function GalLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="Red coffin, black crowd, lines of force" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painting is big &mdash; about <strong>six and a half feet tall by eight and a half feet wide</strong>, a wide landscape canvas roughly the size of a garage door laid on its side. That width matters. A riot is a thing that spreads sideways, surging left and right across a street, and Carrà gave himself a frame shaped like the street. Stand back from it and the first impression is not of a scene at all. It is of an <strong>explosion of red and black</strong>, lit from inside, as if something had gone off in the middle of the canvas and you are seeing it at the instant of the blast.
      </p>
      <p style={proseStyle}>
        Now find the one red thing. Up in the <strong>upper center</strong>, riding above everything on the mourners&rsquo; shoulders, is the single brightest, reddest passage in the picture: <strong>Galli&rsquo;s coffin</strong>, a hot red mass that Carrà remembered as a heap of <strong>red carnations</strong> draped over the box. Here is the move that organizes the whole canvas: Carrà does not light the coffin, he makes the coffin the <em>source</em> of light. Red flares out of it and washes across the bodies below, the way the sun would in an ordinary picture. So on this canvas the dead man is not the still, sad center of a funeral. He is the hot core of an explosion. It is worth being clear-eyed about what that is: a real murdered young man, turned by the painter into a pictorial device, a light source. That coldness is Carrà&rsquo;s choice, not the funeral&rsquo;s, and your eye obeys it &mdash; it goes there first and keeps being pulled back.
      </p>
      <p style={proseStyle}>
        Around and below the coffin, the <strong>crowd</strong>. Almost everyone is in <strong>anarchist black</strong>, and Carrà paints them not as a row of individual mourners but as a single dark, heaving mass, a churn of fractured backs and heads and arms that you read the way you read a real crowd, all at once and a little alarmed, never one face at a time. Pressing into that black mass from the <strong>left</strong> are the <strong>mounted police</strong> &mdash; the line that would not let the coffin through &mdash; and at the flashpoint, just left of the coffin, a <strong>horse rears up</strong> into the bodies while the figures nearest it bend backward away from the hooves. That rearing horse is the literal hinge of the painting, the exact spot where a funeral became a fight, and Carrà has set it close enough to the coffin that you take in the violence and the dead man in the same glance.
      </p>
      <p style={proseStyle}>
        Look up, into the <strong>top third</strong> of the canvas, and the whole upper register bristles with <strong>hard black diagonals stabbing into the light</strong> &mdash; the <strong>lances</strong> of the police, the <strong>flag-poles and banner-staffs</strong> of the anarchists, and behind them the <strong>cranes</strong> of the factory district, the working city that all this is happening in front of. They are half real objects and half pure direction, a thicket of lines pointing every which way, and they keep the violence from settling: even the sky is full of weapons.
      </p>
      <p style={proseStyle}>
        And then the thing that makes it Futurist rather than just a vivid riot picture: the <strong>lines of force</strong>. Light does not arrive in this painting from any one place. It <strong>bursts outward in sheaves of diagonal rays</strong>, a sunburst radiating from the coffin and the sky across the entire upper canvas, and crucially those rays <strong>cut through the figures they cross</strong>, slicing a shoulder here, splintering a head there, so that body and beam and banner are all made of the same fractured stuff. This is the single clearest fingerprint of the 1911 Cubist-charged rework sitting on top of the calmer 1910 drawing. Trace one of those rays with your eye and you will feel it do exactly what the Futurists wanted: it runs off the edge of the canvas, toward you, and pulls your attention into the brawl instead of letting it rest on a tidy scene.
      </p>
      <p style={proseStyle}>
        Last, step in close, right up to the surface, and watch the people dissolve. Down in the central and lower zone the <strong>figures stop being separate</strong> &mdash; an arm runs into a back, a head passes through a shoulder, one body interpenetrates the next the way Cubism allowed. Carrà has fractured the crowd on purpose, so that the surge reads as <strong>one continuous motion</strong> rather than a count of mourners. That is why the funeral feels like a single enormous body convulsing in the street, red at its heart and black at its edges, with lances and light flying off it in every direction. Pull back out to six feet and the explosion reassembles. Walk in close and it comes apart in your hands. The whole argument of the painting &mdash; a funeral that was a battle, a crowd that was one animal, a dead man at the center of a blast &mdash; is made in red, in black, and in the crossing lines, with not one word of caption needed.
      </p>
    </article>
  )
}

function GalMemory({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="His own account · 1945" title="The riot Carrà remembered, and misdated" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>W</DropCap>
        e know what Carrà saw in that crowd because, late in his life, he wrote it down. In his <strong>1945 autobiography</strong>, <em>La mia vita</em> (&ldquo;My Life&rdquo;), the painter looked back on the day of Galli&rsquo;s funeral and described being swept into the heart of the riot:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', paddingLeft: '14px', borderLeft: `3px solid ${accent}` }}>
        &ldquo;I found myself unwillingly in the centre of it, before me I saw the coffin, covered in red carnations, sway dangerously on the shoulders of the pallbearers; I saw horses go mad, sticks and lances clash, it seemed to me that the corpse could have fallen to the ground at any moment and the horses would have trampled it.&rdquo;
      </p>
      <p style={proseStyle}>
        You can read the painting straight off that paragraph. The red carnations are the red coffin. The horses gone mad are the rearing clash. The sticks and lances are the black diagonals overhead. The terror that the body might pitch off its bearers and under the hooves is the whole vertiginous, off-balance feel of the canvas, the sense that the coffin up there is one shove from falling. He went home, he tells us, and <strong>made a drawing immediately.</strong>
      </p>
      <p style={proseStyle}>
        It is a memoir, though, not a notebook. It is not a reporter&rsquo;s account written in 1906; it is a memory of the riot set down in <strong>1945</strong>, some thirty-nine years after the fact, by the same man who had turned that memory into a famous painting in between. It is vivid and it is his, and it is the documented source the picture comes from, but it is recollection, not transcript. Read it as Carrà telling you, decades later, what the day felt like to him &mdash; which is, conveniently, also what the painting is for.
      </p>
      <p style={proseStyle}>
        And memory, as memory does, slipped. In the very same memoir, Carrà attributes Galli&rsquo;s death to the <strong>general strike of 1904</strong>, not the 1906 one in which it actually happened. The error is documented; <em>Corriere della Sera</em>, the Milan newspaper, was first to flag the slip. Some have since suggested that Carrà conflated the killing with the larger, more famous <strong>1904</strong> general strike &mdash; a bigger, nationwide walkout &mdash; in order to hitch his picture to a more historic moment; but that is a guess at his motive, not an established fact, and the simpler explanation, that a man in his sixties misremembered a date from his twenties, will do fine. Either way, the picture itself is not in question. It is the funeral of Angelo Galli, killed on <strong>10 May 1906</strong> and buried three days later. The painter got the year wrong in print; the painting got the day right.
      </p>
    </article>
  )
}

function GalAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · February 1912" title="The riot goes on the wall, and the fault line under it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he finished painting made its public debut not in Milan but in <strong>Paris</strong>, in <strong>February 1912</strong>, at the <strong>Galerie Bernheim-Jeune</strong>. This was the Futurists&rsquo; landmark group exhibition, the show that introduced the Italians to the French avant-garde &mdash; the experimental new art &mdash; organized with help from the critic <strong>Félix Fénéon</strong>, the same sharp-eyed dealer-critic who turns up all over this period of modern art. Carrà&rsquo;s riot, hung in Paris a year after Paris had handed him the Cubism that rebuilt it, went out into the world.
      </p>
      <p style={proseStyle}>
        From there the canvas took the route a lot of early modern art took, which runs through <strong>Germany</strong>. By later in 1912 it had been bought in <strong>Berlin</strong> through <strong>Galerie Der Sturm</strong>, the gallery of <strong>Herwarth Walden</strong>, who was to German modernism roughly what an evangelist is to a faith, the man tirelessly putting the new art in front of new audiences. It passed into the German collection of <strong>Franz Kluxen</strong>, back through Walden&rsquo;s Der Sturm, and then in 1920 to the artist-collector <strong>Paul Citroen</strong> in Holland, who held it for nearly thirty years.
      </p>
      <p style={proseStyle}>
        In <strong>1948</strong> it crossed to New York, to the <strong>Museum of Modern Art</strong>, acquired through the <strong>Lillie P. Bliss Bequest, by exchange</strong> &mdash; meaning MoMA traded other works for it rather than paying cash, the same quiet mechanism that brought the museum its <em>Starry Night</em>. It hangs there still, and it is at MoMA that the painting picked up its most durable reading. That reading came from <strong>Alfred H. Barr Jr.</strong>, MoMA&rsquo;s founding director and one of the people who effectively wrote the standard story of modern art in the twentieth century. Barr looked at all that red-and-black chaos and saw, underneath it, something almost paradoxically calm. He called the painting <strong>&ldquo;as classically organized as a fifteenth-century battle piece by Paolo Uccello,&rdquo;</strong> likening it to Uccello&rsquo;s famous <em>Battle of San Romano</em>, the Renaissance war picture in which a tangle of lances and rearing horses is in fact pinned to a strict, almost geometric order. Keep that labeled as <em>Barr&rsquo;s</em> observation rather than the artist&rsquo;s stated plan; the scholar Rosalind McKever has since argued Carrà likely did know the Uccello. The point that lands is the one Barr was making: the riot only <em>looks</em> like pure pandemonium. Hold the canvas at arm&rsquo;s length and you can feel the diagonals bracing each other, the explosion held in a frame as taut as an old master&rsquo;s.
      </p>
      <p style={proseStyle}>
        There is a harder thing to say about this painting, though, and it is worth saying plainly. In 1906 Carrà meant it. He was an anarchist, he was in that crowd, and the grief on the canvas is real. But the movement whose language he used to paint it did not stay where it started. <strong>Futurism</strong>, from its first 1909 manifesto, had openly glorified violence and war as a kind of cleansing energy, and its founder, <strong>Marinetti</strong>, went on to help launch <strong>Italian Fascism</strong> &mdash; founding a Futurist political party, folding it into Mussolini&rsquo;s movement, and co-writing the <strong>1919 Fascist Manifesto</strong>. <strong>Carrà himself made the same turn.</strong> The young anarchist of 1906 became an ultranationalist around the First World War and then a supporter of the Fascist-era order, lending his name in the 1930s to art in the service of the state. So the picture sits on a fault line. It is a sincere monument to a murdered worker, painted in the idiom of a movement that would soon supply the aesthetics of the very nationalism that crushed movements like Galli&rsquo;s. Both halves are true, and the painting is more honest, not less, once you hold them at the same time. That is finally the trick of it: Carrà took the most disordered thing he had ever lived through and gave it a structure, and the structure outlasted the politics that he and his movement carried into much darker rooms. It is why a street fight from 1906 still stops you a century on, and why it should also unsettle you.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  galli: { street: GalStreet, making: GalMaking, looking: GalLooking, memory: GalMemory, afterlife: GalAfterlife },
```

---

### Resolver notes for the coordinator

- **Section ids match the const** (`street`, `making`, `looking`, `memory`,
  `afterlife`); the 5 `Gal`-prefixed components map 1:1.
- **All three gates folded:** FRAME blocker + 3 frame fixes; FACT FIX-1 (comma
  restore) + FIX-2 (catalogue re-attribution); all 4 READ fixes (two meta-narration
  cuts, the carnations looking-honesty reframe, the Pointillism gloss anchor).
- **Fact-pack traps intact:** 1906 (not 1904); 1945-memoir framing; hedged casualty
  count; Marinetti context-only on the canvas (the Fascism arc is movement/biography,
  never a claimed hand on this painting).
- **Quote punctuation now verbatim:** the *La mia vita* passage carries the two
  source commas ("centre of it**,**" and "lances clash**,**"); the force-lines line
  is attributed to the Futurists' 1912 catalogue statement, not the Technical
  Manifesto.
- **No em dash typed in NEW prose** — all dashes are `&mdash;` HTML entities.
- **Imperial dims only** throughout (6 ft 6 1/4 in × 8 ft 6 in; chip 6′6¼″ × 8′6″).
- **rights: 'pd-us'** — gate-6 image resolve: `ART_IMG.carraGalli` points at an
  en.wikipedia PD-US file (Carrà d.1966, not on Commons), Demoiselles en-tier
  precedent.
```
