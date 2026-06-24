# FINAL — René Magritte, *The Treachery of Images* (Ceci n'est pas une pipe), 1929

Reconciled from `work-treachery-draft.md` against the four gates (fact / read / frame).
kind = WORK, Modern era, Surrealism movement. All [BLOCKER]/[FIX] items folded; voice
contract enforced (no reader-commands / meta-narration / honesty-labels / condescending
glosses). 1929 LACMA oil is canonical and wired. Dimensions imperial. American spelling.

**Changes folded:**
- **FACT FIX-1** — *L'air et la chanson* corrected to **1964 gouache, Art Institute of
  Chicago** (was "1948–1952"); the "later cousin" aside reworded; const comment + header
  note updated.
- **FACT FIX-2** — `heroAspect: 1.43` KEPT (the wired image file is 500×349 → ratio
  ~1.43; `heroFit:'contain'` fits it without letterboxing). Inline comment now cites the
  IMAGE file dimensions, not the artwork's 60.3×81.1 cm.
- **READ gate (REVISE)** — every reader-command, structure/meta-narration, and
  honesty-label flattened to declaratives; over-long parentheticals cut.
- **FRAME FIX-A** — Magritte's real commercial-art career (poster/ad/sheet-music
  designer until the 1926 gallery contract) added to `TrcLooking` as the antidote to the
  lone-philosopher framing; lineage `parents` "Commercial illustration" tag now cashed.
- **FRAME FIX-B** — Dada/Picabia mislabeled-object precedent (propeller captioned *âne*)
  added to `TrcMaking` so the word-image idea isn't sui generis; `TrcAfterlife` close
  softened to "realistic pictures" so it no longer tips into a first-ever overclaim.

---

## PART A — `ArtWorkContent` const (paste-ready)

```ts
// ─────────────────────────────────────────────────────────────
// Work, The Treachery of Images (La trahison des images / Ceci n'est pas une pipe),
// Magritte, 1929. LACMA, acc. 78.7. The CANONICAL 1929 oil and the wired image
// (ART_IMG.magrittePipe) — NOT the 1964 L'air et la chanson gouache (Art Institute
// of Chicago), NOT the 1966 Les deux mystères. Authored through the art content pipeline.
// Chapter prose in art-section-reader.tsx NARRATIVES['treachery'] (Trc… prefix).
// FACT HANDLING per fact pack: dimensions = LACMA 60.3 × 81.1 cm (23 3/4 × 31 15/16 in);
// the 63.5 × 93.98 cm figure is stale → refused. Caption verbatim "Ceci n'est pas une
// pipe" (period; apostrophe in n'est). Magritte gloss attributed to Torczyner (1977)
// p. 71, NOT over-specified as to occasion. Foucault essay 1968 (journal) / book 1973.
// Provenance has NO prices (the ~$115,000 auction figure is secondary → omitted).
// rights pd-us via 1929 publication; the Magritte-d.1967 / EU-copyright caveat does
// not block US use.
// ─────────────────────────────────────────────────────────────
export const TREACHERY: ArtWorkContent = {
  id: 'treachery',
  name: 'The Treachery of Images',
  shortName: 'The Treachery of Images',
  year: 1929,
  artist: 'René Magritte',
  artistId: 'magritte',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 11 3/4 in × 2 ft 7 15/16 in',
  location: 'Los Angeles County Museum of Art (LACMA)',
  acquired: 'Purchased with funds provided by the Mr. and Mrs. William Preston Harrison Collection, 1978',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 5, total: 9 },
  hook: 'A pipe painted as plainly as a catalogue illustration, set over the tidy line “Ceci n’est pas une pipe,” this is not a pipe, and the sentence is true: what hangs on the wall is an image of a pipe, not a pipe, which is the whole argument.',
  heroImage: ART_IMG.magrittePipe,
  heroCredit: 'Magritte, The Treachery of Images, 1929 · LACMA',
  heroAspect: 1.43, // wired image file (MagrittePipe.jpg) measures 500 × 349 px → W/H ≈ 1.43; heroFit contain fits it whole
  heroFit: 'contain', // the whole modest canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1929', k: 'Painted' },
    { v: '1′11¾″ × 2′7¹⁵⁄₁₆″', k: 'Dimensions' },
    { v: 'LACMA', k: 'Now at' },
  ],
  sections: [
    { id: 'proposition', eyebrow: 'Brussels · 1929', dateLabel: '1929', title: 'A picture that turns into a sentence', blurb: 'Magritte paints a single ordinary pipe and writes underneath it, in a tidy hand, “Ceci n’est pas une pipe” (“this is not a pipe”). The contradiction is not a trick. The sentence is literally true, and that is the point.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1929', title: 'The word-and-image experiments', blurb: 'By 1929 Magritte had spent two years prying apart the thing, the picture of the thing, and the word for the thing. The same year he laid the idea out as a diagram-essay, “Words and Images.” The pipe is that idea at its cleanest.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1 ft 11 3/4 in × 2 ft 7 15/16 in', title: 'A pipe, a blank ground, a line of schoolroom script', blurb: 'A plainly painted brown pipe floating on an empty tan field, no shadow, no room, and below it the cursive caption, the whole thing laid out like a teaching plate that refuses to confirm its own lesson.', progress: 0.54 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1929', title: 'Word and image at war on one surface', blurb: 'For centuries a realistic picture quietly asserted “this is that.” Magritte sets the picture and the sentence against each other on the same canvas, and turns a painting into a philosophical proposition about representation itself.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1932–today', title: 'From a dealer’s wall to Foucault to LACMA', blurb: 'It passed through the Brussels Surrealists, crossed to an American artist-collector, and reached Los Angeles in 1978. Along the way the philosopher Michel Foucault wrote a whole essay on it, and the captioned pipe became one of the most reproduced images in modern art.', progress: 0.96 },
  ],
  provenance: [
    { year: '1929–c. 1932', who: 'René Magritte (the artist), via Galerie Le Centaure', place: 'Brussels', note: 'Painted in 1929 and handled by the Brussels gallery Galerie Le Centaure, which represented Magritte in this period.', price: null },
    { year: 'c. 1932', who: 'E. L. T. Mesens', place: 'Brussels', note: 'Acquired by the Belgian Surrealist artist and dealer Edouard Léon Théodore Mesens, a close associate of Magritte who built a major Surrealist collection.', price: null },
    { year: '1957', who: 'William N. and Noma Copley', place: 'New York / Paris', note: 'Acquired by the American painter and collector William (“Bill”) Copley and his wife Noma; Copley was both an artist and an energetic dealer-collector of Surrealism.', price: null },
    { year: '1978', who: 'Los Angeles County Museum of Art', place: 'Los Angeles', note: 'Sold at auction in 1978 and acquired by LACMA, accession 78.7, “Purchased with funds provided by the Mr. and Mrs. William Preston Harrison Collection.” No reliable purchase figure is published, so none is given.', price: 'museum purchase (Harrison Collection funds)', museum: true },
    { year: '1978–today', who: 'Los Angeles County Museum of Art', place: 'Los Angeles', note: 'On view at LACMA, where it has remained since 1978 as the canonical version of the captioned-pipe motif.', price: null, museum: true },
  ],
  figures: [
    { name: 'René Magritte', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'E. L. T. Mesens', role: 'Brussels Surrealist; early owner', palette: ['#5a5042', '#2e281f', '#0e0a06'] },
    { name: 'William Copley', role: 'American artist; later owner', palette: ['#3a4a6a', '#2a2218', '#0e0a06'] },
    { name: 'Michel Foucault', role: 'Wrote the essay on it', palette: ['#1c1c1c', '#a0a0a0', '#5a5040'] },
  ],
  annotations: [
    { label: 'The pipe', where: 'Center of the canvas, bowl to the right, stem to the left', detail: 'A single brown briar tobacco pipe sits in the middle of the canvas. It is painted plainly and competently, smoothly modeled, evenly lit, with no painterly flourish, the way a pipe would be drawn in a smoker’s catalogue. The literal fact is exactly this: it is a painted pipe, which is to say a picture of a pipe and not a pipe.' },
    { label: 'No shadow, no anchor', where: 'Under and around the pipe', detail: 'The pipe casts no shadow and rests on nothing. It floats on the ground rather than sitting on a surface, which strips away any sense of a real place or a real object and leaves only the depicted thing, the sign by itself.' },
    { label: 'The empty ground', where: 'The whole field behind the pipe', detail: 'Behind the pipe is a flat, neutral light-brown field. No table, no room, no horizon, no context of any kind. The blankness removes everything that would make this a scene and isolates the image so the eye has nothing to read but the pipe and the words.' },
    { label: 'The caption', where: 'Below the pipe, centered', detail: 'Under the pipe runs the line “Ceci n’est pas une pipe” (“This is not a pipe”) in a tidy, handwritten-looking cursive. The lettering deliberately recalls a copybook or a labeled diagram, the visual grammar of a school lesson.' },
    { label: 'The lesson-plate layout', where: 'The overall arrangement: object on top, label beneath', detail: 'Object above, words below: the whole picture is laid out like an educational chart, the kind that says “this is a ___.” Magritte borrows that format precisely so he can break its promise, because the label here refuses to confirm the object above it.' },
    { label: 'The deadpan handling', where: 'The flat, even finish across the whole surface', detail: 'Nothing in the painting signals a joke or a wink. The contradiction is delivered with a completely straight face, in calm, illustrational paint. That flatness is the argument: a plain picture and an outright denial sit, untroubled, on one surface.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealist word-images', mode: 'art' },
      { label: 'de Chirico’s dream-worlds', mode: 'art' },
      { label: 'Commercial illustration', mode: 'civ' },
    ],
    children: [
      { label: 'Conceptual art', mode: 'art' },
      { label: 'Pop’s sign-play', mode: 'art' },
      { label: 'The image-as-sign', mode: 'civ' },
    ],
  },
}
```

> Coordinator note: register `TREACHERY` wherever `STARRY_NIGHT` / `CITY_RISES` etc. are exported/collected, and splice the prose registry line:
> `//  treachery: { proposition: TrcProposition, making: TrcMaking, looking: TrcLooking, break: TrcBreak, afterlife: TrcAfterlife },`

---

## PART B — `Trc`-prefixed section components (absinthe voice)

```tsx
// ─────────────────────────────────────────────────────────────
// The Treachery of Images (Magritte, 1929) — the five sections
// ─────────────────────────────────────────────────────────────
function TrcProposition({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Brussels · 1929" title="A picture that turns into a sentence" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first thing in the painting is the plainest thing in the world: a <strong>pipe</strong>. A single brown tobacco pipe, bowl on the right, stem on the left, painted with the cool, even competence of an illustration in a catalogue. Underneath it, in a tidy, almost schoolroom hand, runs a line, and the line says: <em>&ldquo;Ceci n&rsquo;est pas une pipe.&rdquo;</em> That is French for <strong>&ldquo;This is not a pipe.&rdquo;</strong> A picture of a pipe, captioned, in careful cursive, with the words <em>this is not a pipe.</em>
      </p>
      <p style={proseStyle}>
        The instinct is to call it a joke, or a riddle, or some clever Surrealist nonsense. It is none of those. The sentence is <strong>literally true.</strong> The thing hanging on the wall of the museum in Los Angeles really is not a pipe. You cannot pick it up. You cannot fill it with tobacco. You cannot light it or smoke it. It is paint arranged on canvas in the shape of a pipe, which is to say it is an <em>image</em> of a pipe. And an image of a pipe is not a pipe, any more than a photograph of your mother is your mother, or the word &ldquo;water&rdquo; is something you can drink. Magritte has written a true sentence under a picture, and it only feels like a contradiction because we are so used to looking <em>through</em> a painted pipe to an imagined real one that we forget we are looking at paint.
      </p>
      <p style={proseStyle}>
        The painter is <strong>René Magritte</strong> (1898&ndash;1967), a Belgian artist who, by 1929, had settled into the deadpan style that would define his Surrealism. <strong>Surrealism</strong> was the art movement, launched in Paris in 1924, that set out to unsettle ordinary reality, often by dredging up dream-logic and the unconscious mind. Most Surrealists did this with melting, fantastical, hallucinatory images. Magritte did the opposite. He painted ordinary objects with the bland clarity of a department-store ad, and then arranged them into a situation that quietly short-circuits the eye. <em>The Treachery of Images</em> is the purest thing he ever made in that vein, because there is no fantasy in it at all, just a pipe, a blank background, and a true sentence that feels like a lie.
      </p>
      <p style={proseStyle}>
        The work travels under several names. Its formal title is <em>The Treachery of Images</em>, in French <em>La trahison des images</em>. The line painted across the bottom, <em>Ceci n&rsquo;est pas une pipe</em>, is so famous that people often use it as the title too. The proper title is <em>The Treachery of Images</em>; the painted line is its most famous caption, and the two are different things. Magritte returned to this captioned pipe more than once across his career, so several pictures carry that line. The original and canonical one is the <strong>1929 oil now in Los Angeles</strong>, and that distinction matters once the other versions come up.
      </p>
      <p style={proseStyle}>
        Everything in this painting depends on one move that has to be felt before it can be thought about: the gap between a thing and the picture of a thing. The picture holds that gap open with both hands. The plain fact that started it is this: a true sentence, written under a picture, and the truth of it is the whole point.
      </p>
    </article>
  )
}

function TrcMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1929" title="Prying three things apart" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he pipe did not arrive out of nowhere. By 1929 Magritte had spent the better part of two years in Paris, working through a run of pictures that scholars now call his <strong>word-image</strong> paintings, all of them probing one stubborn little gap. The gap is this. When you think about a pipe, three completely different things get fused in your mind so fast you never notice the seam: there is the <strong>thing</strong> itself (a real pipe you could smoke), there is the <strong>picture</strong> of the thing (a painted or drawn pipe), and there is the <strong>word</strong> for the thing (the letters p-i-p-e, or the sound &ldquo;pipe&rdquo;). We treat all three as if they were the same. They are not. None of them is the others. A drawing of a pipe is not a pipe; the word &ldquo;pipe&rdquo; is not a pipe; and a picture of a pipe with the word underneath is not a pipe twice over.
      </p>
      <p style={proseStyle}>
        Magritte made that gap the subject of a whole series. He would paint an object and then label it with the wrong word, or paint a word where the object should be, or set image and text side by side so they argued. The raw move, a word that fights the object it labels, was not invented here. The Dadaists had already mislabeled things to jam the machinery of sense: Francis Picabia, in his mechanical drawings for the journal <em>391</em> around 1917, drew a propeller and captioned it <em>&acirc;ne</em> (&ldquo;donkey&rdquo;). What Magritte added was rigor and calm. He narrowed the prank into a single clean proposition about representation and painted it with a straight face. The captioned pipe is the cleanest and most ruthless of his word-image works, because it strips the experiment down to one object, one sentence, and a blank field, and then refuses to blink.
      </p>

      <SectionHeader accent={accent} label="Words and Images" title="The same year, the idea written out as a diagram" />
      <p style={proseStyle}>
        The clearest proof of what he was after sits in another document from the very same year. In 1929 Magritte published a short illustrated essay, <em>Les mots et les images</em> (&ldquo;Words and Images&rdquo;), in the Surrealist journal <em>La R&eacute;volution surr&eacute;aliste</em> (&ldquo;The Surrealist Revolution&rdquo;). It is not a painting. It is a page of small diagrams and blunt propositions about exactly this gap, and one of its lines is the key to the whole pipe: <em>an object never performs the same function as its name or its image.</em> That is the captioned pipe in a sentence. The picture and the essay are twins, made in the same year by a man who had decided, very deliberately, to put the thing and the picture and the word in front of you at once and let them fail to line up.
      </p>

      <SectionHeader accent={accent} label="What the painter said" title="“Could you stuff my pipe?”" />
      <p style={proseStyle}>
        Magritte was usually cool and unhelpful when people asked him to explain his pictures, but he did once explain this one, and it is worth quoting in full because it is the painting talking. The remark is recorded by the collector and writer Harry Torczyner, in his book <em>Magritte: Ideas and Images</em> (1977), and it runs:
      </p>
      <p style={proseStyle}>
        <em>&ldquo;The famous pipe. How people reproached me for it! And yet, could you stuff my pipe? No, it&rsquo;s just a representation, is it not? So if I had written on my picture &lsquo;This is a pipe,&rsquo; I&rsquo;d have been lying!&rdquo;</em>
      </p>
      <p style={proseStyle}>
        That is the whole defense, and it is airtight. The painted pipe cannot be stuffed, cannot be smoked, because it is a <strong>representation</strong> (a stand-in, an image of a thing, not the thing). So the only honest caption is the one that denies it. To have written &ldquo;This is a pipe&rdquo; under a picture of a pipe would have been the lie. &ldquo;This is not a pipe&rdquo; is the truth. Magritte repeated the point in different words over the years; this wording is the one recorded by Torczyner. He was not playing a trick on the viewer. He was refusing to play the trick that every other picture of a pipe plays automatically: the silent, confident lie that says <em>this is the thing,</em> when it never is.
      </p>
    </article>
  )
}

function TrcLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A pipe, painted as plainly as possible" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he size surprises people. The painting is small and wide: about <strong>two feet across and just under two feet tall</strong> (the kind of modest, near-tabletop canvas you could carry under one arm), painted in <strong>oil on canvas</strong>, the standard mix of pigment in linseed oil that European painters had used for centuries. For all that it looks printed, it is the brushed, hand-painted thing, not a poster or a print. Everything that follows happens inside that small landscape frame, and the modesty is part of the deadpan. This is not a grand statement-sized picture. It is the size of a diagram.
      </p>
      <p style={proseStyle}>
        In the center of the canvas sits a single <strong>brown briar tobacco pipe</strong>, bowl to the right, stem reaching off to the left. The way it is painted is the first half of the argument. It is rendered with smooth, even, unglamorous clarity: gentle modeling on the bowl, a soft sheen along the stem, no visible brushwork to speak of, no flourish, no drama. It looks less like a &ldquo;painting&rdquo; of a pipe than like an <strong>illustration</strong> of one, the kind you would find in a smoker&rsquo;s mail-order catalogue or pinned up as a teaching plate in a classroom. That choice is deliberate. The plainer and more matter-of-fact the pipe, the more it reads as a generic <em>example</em> of a pipe, a sign rather than a portrait, which is exactly what Magritte needs it to be.
      </p>
      <p style={proseStyle}>
        It is no accident that he could paint like an advertisement. Before he painted full-time, Magritte earned his living as a commercial artist in Brussels: a spell as a wallpaper-factory draughtsman, then years designing posters, advertisements, and sheet-music covers in the crisp Art Deco style of the 1920s, until a 1926 contract with the Galerie Le Centaure freed him to paint. The flat, even, ad-man&rsquo;s finish was a trade he already owned, and he turned it on the pipe on purpose.
      </p>

      <SectionHeader accent={accent} label="The ground" title="Floating on nothing" />
      <p style={proseStyle}>
        The pipe is sitting on nothing. There is <strong>no shadow</strong> under it, no table, no shelf, no surface of any kind. The pipe simply floats in the middle of a flat, neutral, <strong>light tan-brown field</strong> that fills the whole rest of the canvas. No room, no horizon, no window, no context. Magritte has scrubbed away everything that would tell you this is a scene, a place, a moment. What is left is the bare image, hung in a void. That emptiness does quiet, heavy work: it stops the pipe from reading as &ldquo;a pipe on a table in a room&rdquo; and leaves it as what it actually is on the canvas, a depicted object, a sign with nothing around it but blank ground.
      </p>

      <SectionHeader accent={accent} label="The caption" title="A line in schoolroom cursive" />
      <p style={proseStyle}>
        Below the pipe, centered, runs the famous line: <em>Ceci n&rsquo;est pas une pipe.</em> The <em>style</em> of the writing matters as much as the words. It is a tidy, even, handwritten-looking <strong>cursive</strong>, the kind of careful schoolroom script a teacher would chalk on a board or a copybook would print at the top of a page for a child to copy out. It is not a painter&rsquo;s flourish and not a printed label. It is the handwriting of a <em>lesson.</em> And that is the trap closing, because the whole painting is built in the shape of an educational chart: an object on top, a label underneath, exactly the layout of every &ldquo;this is a ___&rdquo; teaching plate from childhood. Magritte borrows that format precisely so he can break its promise. The chart format swears that the label below names the thing above. This one refuses. The lesson-plate says, in its neat little hand, that the thing above is <em>not</em> what it so plainly looks like.
      </p>

      <SectionHeader accent={accent} label="The deadpan" title="Calm illustration and flat denial on one surface" />
      <p style={proseStyle}>
        The final effect is in the <strong>tone.</strong> Nothing anywhere in the picture signals that a joke is being told. There is no wink, no exaggeration, no surreal melting or distortion, none of the lurid dream-imagery the word &ldquo;Surrealism&rdquo; might lead you to expect. The pipe is calm. The ground is calm. The lettering is calm. The contradiction (a clear picture of a pipe, captioned <em>this is not a pipe</em>) is delivered with a completely straight face, in the most untroubled paint imaginable. That flatness <em>is</em> the argument. By making the picture so cool and so plain, Magritte makes a perfectly ordinary illustration and an outright denial of that illustration share one small canvas without any visible strain at all. The two things that should not be able to sit together (the image that says &ldquo;pipe&rdquo; and the sentence that says &ldquo;not a pipe&rdquo;) sit together perfectly calmly, because, once you see it, they were never actually in conflict. The picture was never a pipe. The caption just says so out loud.
      </p>
    </article>
  )
}

function TrcBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Five hundred years of the silent “this is that”" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why this small brown picture is a turning point, you have to know the contract it broke. For centuries, a realistic painting made a promise so quietly that nobody noticed it was a promise. The picture <em>resembled</em> a thing, and by resembling it, the picture silently <strong>asserted</strong> that thing. A painted apple said, under its breath, &ldquo;here is an apple.&rdquo; A portrait said &ldquo;here is the duke.&rdquo; Resemblance and assertion traveled together, locked, and the whole point of the picture was that you looked <em>through</em> the painted surface to the real thing it stood for, as if the canvas were a window. Words, on the rare occasions they appeared in a painting at all (a title, an inscription on a scroll, a motto carved into stone), only reinforced the image. Text was the picture&rsquo;s servant. It agreed.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The picture and the sentence pulled apart" />
      <p style={proseStyle}>
        Magritte severs the two with one stroke. He puts the word and the image on the <strong>same surface</strong> and sets them at war. The picture says &ldquo;pipe.&rdquo; The sentence says &ldquo;not a pipe.&rdquo; And the unbearable, brilliant thing is that <em>both are correct,</em> because the painted pipe was never a pipe to begin with. The old contract, where the picture both resembles and affirms, is broken in two places at once. First, the canvas stops being a window onto a thing and becomes an <strong>argument about the gap</strong> between a sign and the thing it stands for, between representation and reality. Second, the text is no longer the image&rsquo;s obedient servant; it has become the image&rsquo;s <strong>adversary,</strong> a caption that contradicts instead of confirming. The label and the picture, which had agreed for five hundred years, are caught in the act of disagreeing, and the disagreement is the whole work.
      </p>

      <SectionHeader accent={accent} label="The proposition" title="A painting that argues" />
      <p style={proseStyle}>
        That is the break: Magritte turns a painting into a <strong>philosophical proposition about representation itself.</strong> Not a picture of something, but a claim about what pictures are. It is the moment representation is caught looking at its own machinery, the moment a painting stops pointing at the world and starts pointing at the act of pointing. And it left a long fuse. The idea that a work of art can be, at bottom, an <em>idea</em> about signs, that a picture can argue rather than depict, is the conceptual seed that later movements would harvest directly: <strong>Conceptual art</strong> a generation on (which made the idea the artwork), <strong>Pop art</strong>&rsquo;s play with logos and labels and brand-signs, the appropriation artists who treated every image as a quotable sign. They all run back, in part, to a man in Brussels who painted a pipe as plainly as he could and then told the truth about it underneath. Decades later the French philosopher <strong>Michel Foucault</strong> wrote an entire essay on this picture, using it to pick apart the old marriage of resemblance and assertion in Western art. The painting was so clean a piece of philosophy that a philosopher could build a book on it.
      </p>
    </article>
  )
}

function TrcAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance" title="Out of Brussels, across the Atlantic" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the picture&rsquo;s life as an object, its <strong>provenance</strong> (the documented chain of who has owned a work of art, in order, from the painter&rsquo;s hand to wherever it sits now). It is a tidy chain. Magritte painted it in <strong>1929</strong>, and in this period his work in Brussels was handled by the <strong>Galerie Le Centaure</strong>, the gallery that represented him. Around <strong>1932</strong> the painting passed to <strong>E. L. T. Mesens</strong> (Edouard L&eacute;on Th&eacute;odore Mesens), a Belgian Surrealist who was both an artist and a dealer and a close associate of Magritte, and who assembled one of the important early Surrealist collections.
      </p>
      <p style={proseStyle}>
        In <strong>1957</strong> it crossed the Atlantic, to the American painter and collector <strong>William Copley</strong> (1919&ndash;1996) and his wife <strong>Noma</strong>. Copley is a fine figure to have on a provenance line, because he was not a banker buying trophies; he was a working Surrealist painter himself, and an energetic, generous dealer-collector who did as much as anyone to carry European Surrealism into American art. Then, in <strong>1978</strong>, the painting was sold at auction and bought by the <strong>Los Angeles County Museum of Art</strong>, LACMA, &ldquo;purchased with funds provided by the Mr. and Mrs. William Preston Harrison Collection,&rdquo; accession number 78.7. Figures sometimes cited for that 1978 sale come from secondary reports, not LACMA&rsquo;s own record. It has hung at LACMA ever since.
      </p>

      <SectionHeader accent={accent} label="Which pipe is THE pipe" title="One original, several later cousins" />
      <p style={proseStyle}>
        A point worth pinning down, because Magritte muddied it himself. He liked this idea so much that he came back to the captioned pipe more than once across his life. There is a later version, a <strong>1964</strong> gouache (paint with a chalky, opaque finish) sometimes titled <em>L&rsquo;air et la chanson</em> (&ldquo;The Tune and Also the Words&rdquo;), now at the Art Institute of Chicago, with the same line in it. And in <strong>1966</strong>, near the end of his life, he painted <em>Les deux myst&egrave;res</em> (&ldquo;The Two Mysteries&rdquo;), which cheekily shows the captioned-pipe picture itself, sitting on an easel, with a second, larger pipe floating beside it. So more than one Magritte pipe says &ldquo;this is not a pipe.&rdquo; The one that counts, the original and the canonical, the one this whole story is about, is the <strong>1929 oil now at LACMA.</strong> That is the picture wired into this page. The 1964 gouache and the 1966 easel-painting are its later cousins, not it.
      </p>

      <SectionHeader accent={accent} label="Foucault, and the second life" title="When a painting became a piece of philosophy" />
      <p style={proseStyle}>
        The picture&rsquo;s deepest afterlife, though, is not about owners at all. It is about a philosopher. The Frenchman <strong>Michel Foucault</strong> (1926&ndash;1984), one of the most influential thinkers of the twentieth century, was so taken with Magritte&rsquo;s pipe that he wrote a short essay on it and borrowed its line for the title: <em>Ceci n&rsquo;est pas une pipe.</em> The essay first appeared in a journal in <strong>1968</strong> and was expanded into a small book in <strong>1973</strong>; the English translation, by James Harkness, carries the plain title <em>This Is Not a Pipe.</em> Foucault used the pipe to take apart the old assumption that a picture both resembles its subject and silently asserts &ldquo;this is that.&rdquo; Magritte, he argued, had pried resemblance and assertion apart and left them lying on the table for everyone to see.
      </p>
      <p style={proseStyle}>
        Partly through Foucault, and partly through sheer endless reproduction (the painting has been parodied, T-shirted, and quoted more than almost any image in modern art), the captioned pipe became a permanent fixture. It is now the stock emblem of a single idea that has long since escaped the painting: that a representation is not the reality it stands for, that the map is not the territory, that the picture of the thing is not the thing. A small brown pipe over a tidy line of schoolroom cursive, painted in Brussels in 1929 and hanging today in Los Angeles, turned out to be one of the most quietly consequential arguments ever made in paint. It said, plainly and truthfully, the one thing realistic pictures had spent five hundred years quietly not saying: <em>this is not a pipe.</em>
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  treachery: { proposition: TrcProposition, making: TrcMaking, looking: TrcLooking, break: TrcBreak, afterlife: TrcAfterlife },
```
