# Author draft — Francis Picabia, *Ici, c'est ici Stieglitz, foi et amour* (1915)

Work id: `stieglitz`. Movement: Dada. Authored through the art content pipeline (fact pack → Opus → 5 gates → revise). Two parts below: PART A is the `ArtWorkContent` const for `src/lib/art-content.ts`; PART B is the five `Sti*` section components for `art-section-reader.tsx` plus the trailing NARRATIVES registry comment.

Key fact-handling, per the fact pack:
- The Met object is a **drawing/collage**, not a painting and not a print: medium is verbatim "Ink, graphite, and pasted and printed papers on paper."
- It is the cover of ***291*, nos. 5–6 (July–August 1915)**, NOT "No. 1" (the Wikimedia filename is wrong; never repeat it).
- Title is *foi et amour* (not the corrupted "Foit et Amour").
- The satire-vs-homage question is presented as **both at once**, never one to the exclusion of the other.
- KEY STATEMENT = the verbatim 1915 machine quote, sourced to the *New-York Tribune*, Oct 24, 1915, with the article-title and continuous-sentence variants flagged.
- rights: pd-us (published 1915; Picabia d. 1953, so worldwide-PD only since 2024, but US status turns on 1915 publication).

---

## PART A — the const

```ts
export const STIEGLITZ: ArtWorkContent = {
  id: 'stieglitz',
  name: "Ici, c'est ici Stieglitz",
  shortName: 'Ici Stieglitz',
  year: 1915,
  artist: 'Francis Picabia',
  artistId: 'picabia',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Ink, graphite, and pasted and printed papers on paper',
  dimensions: '2 ft 5 7/8 in × 1 ft 8 in',
  location: 'The Metropolitan Museum of Art, New York',
  acquired: 'Alfred Stieglitz Collection, 1949 (acc. 49.70.14)',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 6, total: 9 },
  hook: 'A portrait of the great photographer Alfred Stieglitz that contains no face at all: he is drawn as a folding bellows camera, broken, its lens drooping, straining up toward the word IDEAL and getting nowhere because the gears are in neutral and the brake is on. Affection and mockery in one deadpan machine.',
  heroImage: ART_IMG.picabiaStieglitz,
  heroCredit: "Picabia, Ici, c'est ici Stieglitz, foi et amour, 1915 (cover of 291, nos. 5-6) · The Metropolitan Museum of Art, New York.",
  heroAspect: 0.71, // portrait, 50.8 × 75.9 cm; the whole upright sheet, never cropped
  heroFit: 'contain',
  rights: 'pd-us', // published 1915 as the cover of 291 → US public domain; Picabia d. 1953 → worldwide PD only since 2024
  stats: [
    { v: '1915', k: 'Made' },
    { v: '2′5⅞″ × 1′8″', k: 'Dimensions' },
    { v: 'The Met', k: 'Now at' },
  ],
  sections: [
    { id: 'circle', eyebrow: 'New York · 1915', dateLabel: '1915', title: 'A French painter, a wartime crossing, and the gallery called 291', blurb: 'Picabia flees the war in Europe, lands in New York, and falls in with the circle around the photographer Alfred Stieglitz, whose Fifth Avenue gallery and little magazine, both named 291, were the headquarters of modern art in America. Out of it comes a brand-new kind of portrait.', progress: 0.08 },
    { id: 'machine', eyebrow: 'The idea', dateLabel: '1915', title: 'A man drawn as a machine', blurb: 'Picabia decides to portray the people of the 291 circle not as faces but as machines, copied from advertisements and patent diagrams in a flat, deadpan, commercial style. The object-portrait, or mechanomorph, is his own invention, and Stieglitz gets the cover.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The drawing', dateLabel: '2 ft 5 7/8 in × 1 ft 8 in', title: 'The broken camera that cannot reach the Ideal', blurb: 'The folding camera that is Stieglitz, its limp extended lens, the word IDEAL it strains toward, the automobile gearshift sitting in neutral, the hand-brake set, and the words FOI ET AMOUR (faith and love) that give the whole thing its tone.', progress: 0.54 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1915', title: 'Throwing the human figure out of the portrait', blurb: 'For centuries a portrait meant a likeness: a face, a body, a soul rendered by the artist’s hand. Picabia substitutes a labelled machine lifted from a catalogue, with printed words doing the characterizing. Portraiture becomes ready-made-and-caption, and that rupture feeds straight into Dada.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1915–today', title: 'The sitter who kept his own caricature', blurb: 'Stieglitz, the man gently mocked as a stalled machine, owned the drawing, and it came to the Met from his own collection in 1949. The verbatim machine credo Picabia gave a New York newspaper that same autumn, and the question the picture never quite settles: homage, or satire?', progress: 0.96 },
  ],
  provenance: [
    { year: '1915', who: 'Francis Picabia (the artist) / 291 magazine', place: 'New York', note: 'Made in New York in 1915 as the working mock-up and cover of the little magazine 291, nos. 5–6 (July–August 1915), with its cut-and-pasted strips of printed words and visible pencil corrections. (The Wikimedia file calls it the cover of No. 1; that is wrong, and No. 1 was March 1915.)', price: null },
    { year: 'by the 1940s', who: 'Alfred Stieglitz (the photographer it portrays)', place: 'New York', note: 'The drawing entered the holdings of Alfred Stieglitz himself, the very man it caricatures. How and exactly when he acquired it is not spelled out in the record; what is documented is that it was his.', price: null },
    { year: '1949–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Came to the Met in 1949 as part of the Alfred Stieglitz Collection, distributed from his estate after his death in 1946. Credit line: Alfred Stieglitz Collection, 1949. Accession 49.70.14. The Met catalogues the drawing under the short title "Here, This Is Stieglitz Here."', price: 'Alfred Stieglitz Collection (gift)', museum: true },
  ],
  figures: [
    { name: 'Francis Picabia', role: 'The machine-painter', palette: ['#3a3a44', '#1c1c24', '#0a0a10'] },
    { name: 'Alfred Stieglitz', role: 'The sitter, drawn as a camera', palette: ['#4a4a52', '#26262e', '#0c0c12'] },
    { name: 'The magazine 291', role: 'Gallery, magazine, and circle', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'The machine as man', role: 'Picabia’s whole idea', palette: ['#5a5a64', '#2c2c34', '#0e0e14'] },
    { name: 'New York Dada', role: 'The cell this came out of', palette: ['#6a5a3a', '#332a1a', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The folding bellows camera', where: 'The whole central body of the drawing: the upright accordion-pleated camera that stands in for Stieglitz', detail: 'There is no face anywhere. The figure of Stieglitz is entirely a folding plate camera (read by scholars as the popular Vest Pocket Kodak, copied from a period advertisement), its pleated leather bellows and lens board standing upright like a body. Recognizing it as a real, advertised consumer camera is half the joke: the great artist of photography is drawn as a piece of mass-produced photographic hardware.' },
    { label: 'The limp extended lens', where: 'The lens and bellows, pulled out but slack rather than aimed sharply', detail: 'The bellows are extended but disengaged, the lens drooping rather than focusing, a camera that cannot quite point itself. Scholars read it plainly as broken, even as sexual deflation. Whatever the reading, what is on the sheet is a precise mechanical thing drawn as failing to do the one thing it exists to do.' },
    { label: 'The word IDEAL', where: 'Lettered toward the top, in heavy Gothic blackletter, on the lever plate the camera strains up toward', detail: 'At the top, in a heavy Gothic (blackletter) script, sits the word IDEAL. It is the thing the whole machine reaches for: the camera strains upward toward it. And, per the picture’s own logic, it never gets there. The lettering does the work a halo or an inscription would do in an old portrait, naming the sitter’s aspiration in block capitals.' },
    { label: 'FOI ET AMOUR (faith and love)', where: 'Inscribed with the title phrase, low on the sheet', detail: 'The words FOI ET AMOUR, French for "faith and love," are inscribed along with the title phrase Ici, c’est ici Stieglitz ("Here, this is Stieglitz here"). This is the vocabulary of devotion, attached to a stalled machine, and it is what tips the whole drawing from a gag toward something fonder. The tone of the picture lives in the gap between those tender words and the broken mechanism they are pinned to.' },
    { label: 'The gearshift in neutral', where: 'An automobile shift lever, drawn lodged out of gear', detail: 'An automobile gearshift, the lever that should drive the climb up to IDEAL, is drawn set in neutral (or park), out of gear. The mechanism that would deliver power to the rest of the machine is deliberately disengaged. The picture is built from machine parts that have been arranged, with a straight face, so that none of them can do their job.' },
    { label: 'The engaged hand-brake', where: 'A set brake lever, the second "going nowhere" cue', detail: 'A hand-brake is shown engaged. Together with the neutral gear, it is the deadpan punchline of the drawing: all this faith and love, all this straining toward the Ideal, and the thing is simply parked. The standard reading is a portrait of idealism that has stalled, the 291 circle’s worry that their tireless champion had lost his drive, said gently, in the language of engineering.' },
  ],
  lineage: {
    parents: [
      { label: 'The 291 circle', mode: 'art' },
      { label: 'Commercial advertising', mode: 'civ' },
      { label: 'The machine age', mode: 'civ' },
    ],
    children: [
      { label: 'New York Dada', mode: 'art' },
      { label: 'Duchamp’s readymades', mode: 'art' },
      { label: 'Text-as-image portraiture', mode: 'art' },
    ],
  },
}
```

---

## PART B — the five section components + registry comment

```tsx
// ─────────────────────────────────────────────────────────────
// Ici, c'est ici Stieglitz, foi et amour (Picabia, 1915) — the five chapters
// ─────────────────────────────────────────────────────────────
function StiCircle({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1915" title="A French painter washes up in New York" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1915 the First World War was a year old and tearing Europe apart, and a great many of its artists were getting out. One of them was <strong>Francis Picabia</strong> (1879&ndash;1953; pronounced &ldquo;pee-kah-BEE-ah&rdquo;), a wealthy, restless, fast-talking French painter who had already cycled through Impressionism, Cubism, and abstraction and was looking for the next thing. He crossed the Atlantic and landed in <strong>New York</strong>, and there he found, already up and running, a small American outpost of advanced modern art. Its center of gravity was a man named <strong>Alfred Stieglitz</strong>.
      </p>
      <p style={proseStyle}>
        <strong>Alfred Stieglitz</strong> (1864&ndash;1946) was a photographer, but more than that he was an impresario, the person who, almost single-handedly, dragged American taste toward the new. He had spent years arguing that photography was a real art, and he ran a tiny, hugely influential gallery on Fifth Avenue called, simply, <strong>&ldquo;291&rdquo;</strong> after its street number (its full name was the Little Galleries of the Photo-Secession). At 291 he showed New Yorkers their first C&eacute;zannes, their first Picassos, their first Matisses, years before any museum would touch them. He also published a companion little magazine, also called <em><strong>291</strong></em>, a thin, beautiful, experimental thing put out by the same circle. Gallery and magazine shared a name, and both meant Stieglitz.
      </p>
      <p style={proseStyle}>
        Around that gallery and that magazine orbited a small group of painters, writers, and collectors, the caricaturist <strong>Marius de Zayas</strong>, the writers <strong>Paul Haviland</strong> and <strong>Agnes Meyer</strong>, and now Picabia, who fit right in. This loose New York cell is what historians later called <strong>New York Dada</strong>, a cooler, wittier, more machine-minded cousin of the Dada that was erupting at the same moment in wartime Zurich. (Dada was the anti-art movement that came up during the war: it answered a civilization that had marched itself into the trenches with deliberate nonsense, provocation, and a refusal to take art’s old pieties seriously.) And in the summer of 1915, for a double issue of the magazine, the circle produced something genuinely new in the history of portraiture.
      </p>
      <p style={proseStyle}>
        The man on the cover would be Stieglitz himself. But there would be no face on that cover, and no body. There would be a broken camera. To understand why, you have to know what Picabia had just invented.
      </p>
    </article>
  )
}

function StiMachine({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The idea" title="The object-portrait, or, a person drawn as a machine" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icabia’s big idea, the thing he is remembered for, arrived almost the moment he reached America: he would draw people as <strong>machines</strong>. Not people surrounded by machines, not people with mechanical parts, but a portrait in which the sitter <em>is</em> a machine and nothing else. He called these <strong>object-portraits</strong>; art historians call them <strong>mechanomorphs</strong> (from the Greek for &ldquo;machine-shaped&rdquo;). For the summer 1915 double issue of <em>291</em>, he made a whole suite of them, one for each of the people who ran the magazine, and put Stieglitz on the cover.
      </p>
      <p style={proseStyle}>
        The style is the first surprise. These are not expressive, hand-wrought, soulful drawings. They are drawn cold and flat, in the deadpan manner of a <strong>commercial catalogue or a patent illustration</strong>, the clean impersonal line you would find in an advertisement or an instruction manual. Picabia even copied his machines from real ads. The source for the Stieglitz portrait is a magazine advertisement for the <strong>Vest Pocket Kodak</strong>, a popular folding camera of the day. (That identification is the standard scholarly reading of where the image came from, not a label written inside the picture, so take it as &ldquo;based on an ad for the Kodak,&rdquo; not as a signed fact on the sheet.) Picabia took the advertising diagram of a consumer camera and turned it into the likeness of the most important photographer in America.
      </p>
      <p style={proseStyle}>
        And the choice of <em>which</em> machine is the joke’s setup. Stieglitz spent his life on photography, so Picabia draws him as the tool of that life, a camera. But not a working camera. A broken one. The portrait is an argument about its sitter, made entirely in mechanical parts: a thing built for one purpose, drawn so that it can no longer perform it. The character of the man is encoded not in a face but in how his machine <em>fails</em>.
      </p>
      <p style={proseStyle}>
        The object the Met holds, by the way, is the working <strong>mock-up</strong> for that cover, and it tells on itself. It is a <strong>drawing and collage</strong>, not a painting and not (in the Met’s case) a print: pen and ink, graphite, and strips of printed paper cut and pasted down, with the artist’s pencil corrections still visible. It is, physically, a magazine layout caught in the act of being made, words pasted in, lines re-drawn, the seams left showing. That, too, is part of the Dada point: the picture refuses to pretend it is a precious, finished, hand-made &ldquo;art object.&rdquo; It admits it is assembly.
      </p>
    </article>
  )
}

function StiLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The drawing" title="A camera that cannot reach the Ideal" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he sheet is modest in size, a little under <strong>two and a half feet tall by twenty inches wide</strong>, an upright portrait format, roughly the proportions of a magazine cover, which is exactly what it was for. And the first thing to take in is what is <em>not</em> there. There is no face. There is no figure. Standing upright in the middle of the sheet, where a person should be, is a <strong>camera</strong>: a folding plate camera with its leather <strong>bellows</strong> (the accordion-pleated tube that connects the lens to the body) pulled out, its lens board forward. The whole likeness of Stieglitz is this one piece of machinery, drawn upright like a standing man.
      </p>
      <p style={proseStyle}>
        Look at how the camera is doing. It is doing badly. The bellows are extended, but they are <strong>slack and disengaged</strong>, the lens <strong>drooping</strong> rather than aimed sharply, hanging at half-mast. This is a camera that cannot quite point itself, cannot focus, cannot take the picture it exists to take. Scholars read that limp lens as broken, and several read it as something more pointedly bodily, a deflation, a loss of potency. You do not have to follow it that far to feel the basic fact on the sheet: the instrument is failing.
      </p>
      <p style={proseStyle}>
        Now go to the top, where there is a word. Lettered in a heavy <strong>Gothic, or blackletter, script</strong> (the dense, spiky, old-fashioned lettering you see on diplomas and beer labels), on what reads as a lever plate, is the word <strong>IDEAL</strong>. It is the thing the machine is straining up toward. The camera reaches for it. And here is the whole picture: it never gets there. Because between the camera and the word, Picabia has drawn two small, deadpan obstacles, and they are the punchline.
      </p>
      <p style={proseStyle}>
        The first is an <strong>automobile gearshift</strong>, the lever that puts a car in gear, and it is drawn set in <strong>neutral</strong>, out of gear. The mechanism that should drive the climb up to IDEAL is disengaged; no power can reach the rest of the machine. The second is a <strong>hand-brake</strong>, and it is <strong>engaged</strong>, set, holding everything in place. Gears in neutral, brake on. The machine strains toward the Ideal with all its might and goes precisely nowhere, because it has been parked. Two ordinary mechanical details, drawn with an engineer’s straight face, deliver a verdict no caption needs to spell out.
      </p>
      <p style={proseStyle}>
        And then the words that change the temperature of the whole thing. Inscribed on the sheet, with the title phrase <em>Ici, c’est ici Stieglitz</em> (&ldquo;Here, this is Stieglitz here&rdquo;), are three more: <strong>FOI ET AMOUR</strong>, French for <strong>&ldquo;faith and love.&rdquo;</strong> This is the vocabulary of devotion, of reverence, hung on a stalled and broken machine. The drawing is built out of the language of love, and it is a portrait of a man who can’t get into gear. Hold that contradiction, because it is the key to what the picture actually means, and we come to it last.
      </p>
    </article>
  )
}

function StiBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A portrait used to mean a face" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or as long as portraits had existed, a portrait meant a <strong>likeness</strong>. You looked at a person and you rendered them: the face, the body, the bearing, and, if you were good, something of the psychology behind the eyes. A portrait’s whole job was resemblance and inner life, the sitter’s features and the sitter’s soul, set down by the artist’s own hand. Even the most violent experiment of the years just before, the Cubist portrait of around 1910 to 1914, which shattered a sitter into facets and angles, still began from a depicted human figure. It fractured a face. Identity still lived in the features.
      </p>
      <p style={proseStyle}>
        Picabia throws the human figure out entirely. In its place he puts a <strong>machine</strong>, a labelled mechanical diagram, lifted from a commercial advertisement and drawn in a cool, flat, impersonal engineering style. The characterizing is done not by features but by <strong>printed words</strong> (IDEAL, FOI ET AMOUR) and by how the mechanism behaves. The sitter’s soul, which a portraitist used to find in a glance, is now encoded in a limp lens and a brake left on. This is a genuine rupture. Portraiture stops being depiction and becomes something nearer to a <strong>ready-made fitted with a caption</strong>: the artist’s celebrated &ldquo;hand&rdquo; and &ldquo;touch&rdquo; replaced by borrowed catalogue line-work and a few words of lettering.
      </p>
      <SectionHeader accent={accent} label="The break · after" title="Where this rupture went" />
      <p style={proseStyle}>
        These 1915 <em>291</em> mechanomorphs turn out to be founding documents of <strong>New York Dada</strong>, and they feed straight into the moves the whole movement would make: appropriating mass-produced imagery instead of inventing it, using the machine as a metaphor for the human (and, repeatedly, the erotic), letting text behave as image, and cultivating a deliberately cool, anti-expressive surface that refuses to perform sincerity. They run exactly parallel to <strong>Marcel Duchamp’s readymades</strong> of these same years, the urinal, the bottle rack, the snow shovel, ordinary manufactured objects promoted to art by an act of choice rather than of making. Picabia and Duchamp were friends and collaborators in this New York circle, working the same vein from two directions: Duchamp choosing the object whole, Picabia drawing it as a portrait.
      </p>
      <p style={proseStyle}>
        The template they set, a person or an idea conveyed by an appropriated image and a caption, in a flat impersonal style that hides the artist’s hand, is one that <strong>Pop art</strong> and <strong>conceptual art</strong> would mine for the rest of the century. A great deal of later twentieth-century art is the working-out of the permission Picabia took here: that you could make a portrait without a face, out of found pictures and printed words, and mean every bit as much by it.
      </p>
    </article>
  )
}

function StiAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The key statement" title="“The machine has become … perhaps the very soul”" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        hat same autumn, Picabia put the whole theory behind this picture into plain words. A New York newspaper, the <em>New-York Tribune</em>, ran an interview with the French artists then in the city, published on <strong>Sunday, October 24, 1915</strong>, under the headline &ldquo;French Artists Spur on an American Art.&rdquo; In it Picabia laid out his man-as-machine credo about as directly as he ever would:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: '0 0 12px' }}>The machine has become more than a mere adjunct of life. It is really a part of human life&hellip; perhaps the very soul.</p>
        <p style={{ margin: 0 }}>Almost immediately upon coming to America it flashed on me that the genius of the modern world is in machinery, and that through machinery art ought to find a most vivid expression&hellip; I have enlisted the machinery of the modern world, and introduced it into my studio.</p>
      </blockquote>
      <p style={proseStyle}>
        That is the engine of the whole 1915 project, in his own voice: the machine is not a prop but a stand-in for the human, even for the soul. A few cautions on the quote, because it travels in slightly different forms. The headline is sometimes shortened to &ldquo;French Artists Spur on American Art,&rdquo; dropping the &ldquo;an&rdquo;; the longer version is correct. The &ldquo;soul&rdquo; line is stable across sources; the second passage is sometimes chained into one continuous sentence, but in the original the &ldquo;genius of the modern world is in machinery&rdquo; and the later vow to reach &ldquo;the pinnacle of mechanical symbolism&rdquo; are separate clauses, so it is honest to keep them apart. And the source is the interview itself, the 1915 <em>Tribune</em>, not some later Dada memoir; this is Picabia speaking in the very year he drew Stieglitz, not a line invented for him afterward.
      </p>
      <SectionHeader accent={accent} label="Provenance" title="The man owned his own caricature" />
      <p style={proseStyle}>
        Here is the detail that complicates any easy reading of the picture as a hatchet job: <strong>Stieglitz kept it.</strong> The drawing entered the holdings of the very man it caricatures, and when his collection was distributed after his death in 1946, this sheet came to <strong>The Metropolitan Museum of Art</strong> in <strong>1949</strong>, as part of the Alfred Stieglitz Collection (accession 49.70.14). The man drawn as a stalled, broken camera owned the drawing of himself as a stalled, broken camera, and saw to it that it survived. The Met catalogues it today under a tidied short title, &ldquo;Here, This Is Stieglitz Here.&rdquo; (The drawing is the working layout; separate photomechanical relief-print copies of the published cover live at the National Portrait Gallery in Washington and the Mus&eacute;e d’Orsay in Paris, which is why you may see the work described as a &ldquo;print.&rdquo; The thing the Met holds, and the thing we have been looking at, is the cut-and-pasted drawing.)
      </p>
      <SectionHeader accent={accent} label="Homage, or satire?" title="The question the picture will not settle" />
      <p style={proseStyle}>
        So which is it: an affectionate tribute, or a takedown? The honest answer is that it is both at once, and the picture is built to be both. The case for <strong>satire</strong> is the one most curators make, and it is strong. The camera is broken, the lens limp, the gears in neutral, the brake on; it strains toward IDEAL and cannot reach it. Within the <em>291</em> inner circle there was a real, specific worry in 1915 that Stieglitz, for years the tireless fighter for modern art in a country that did not want it, was <strong>losing his drive</strong>. Read that way, the drawing is a gentle needle: all your faith and love, old friend, and you are parked.
      </p>
      <p style={proseStyle}>
        But the case for <strong>homage</strong> is just as real. The thing is made of the words <em>faith and love.</em> It was made <em>for</em> Stieglitz’s own magazine, by a friend and ally inside his own circle, and many accounts read it as affectionate caricature among collaborators rather than mockery from outside. The clinching fact is the provenance: Stieglitz himself owned it, which is not what a man does with an insult. The fairest reading holds the two together: this is fond ribbing of a hero’s idealism, a portrait that loves its subject and worries about him in the same deadpan breath. To insist it is only one or the other is to miss what makes it land. It is faith and love, drawn as a machine that has stalled, by someone who meant both words.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  stieglitz: { circle: StiCircle, machine: StiMachine, looking: StiLooking, break: StiBreak, afterlife: StiAfterlife },
```
