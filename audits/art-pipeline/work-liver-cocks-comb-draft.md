# Draft — The Liver Is the Cock's Comb (Gorky, 1944) — WORK read

Authored through the art content pipeline from `work-liver-cocks-comb-factpack.md` (SOURCE OF
TRUTH). PART A = the `LIVER_COCKS_COMB` const for `src/lib/art-content.ts`. PART B = the five
`Lvr*` chapter components for `art-section-reader.tsx` + the NARRATIVES registry comment.
RIGHTS: `in-copyright` (1944 work, US copyright ~95 yrs from publication → through ~2040;
shown small under fair use, credited to Buffalo AKG and the Gorky estate). The KEY STATEMENT
is Breton's 1945 "nature as cryptogram" line (cleanly sourced per the factpack); the unverified
Breton "most important paintings made in America" line is NOT used.

## PART A — the const

```ts
export const LIVER_COCKS_COMB: ArtWorkContent = {
  id: 'liver-cocks-comb',
  name: "The Liver Is the Cock's Comb",
  shortName: 'The Liver Is the Cock\'s Comb',
  year: 1944,
  artist: 'Arshile Gorky',
  artistId: 'gorky',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 1 in × 8 ft 2 in',
  location: 'Buffalo AKG Art Museum',
  acquired: 'Gift of Seymour H. Knox, Jr., 1956',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 7, total: 9 },
  hook: 'A mural-sized field of soft, teeming, half-organic shapes, drawn over washed and bled color, where Surrealism’s automatic hand and the Armenian gardens of Gorky’s memory turn into one of the seeds of Abstract Expressionism.',
  heroImage: ART_IMG.gorkyLiver,
  heroCredit: 'Gorky, The Liver Is the Cock’s Comb, 1944 · Buffalo AKG Art Museum · in copyright, shown small under fair use.',
  heroAspect: 1.34, // 249.87 × 186.06 cm → W/H ≈ 1.34, landscape
  heroFit: 'contain', // the whole ≈6×8 ft canvas, never cropped
  rights: 'in-copyright',
  stats: [
    { v: '6′1″ × 8′2″', k: 'Dimensions' },
    { v: '1956', k: 'To the museum' },
    { v: 'Buffalo AKG', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'New York / Virginia · 1944', dateLabel: '1944', title: 'The last Surrealist, the first of the next thing', blurb: 'Gorky has spent the 1930s as a brilliant apprentice, painting openly through Cézanne, Picasso and Miró. Married, summering on his wife’s Virginia farm, with the exiled Surrealists arriving in wartime New York, he reaches his own voice at last, in the short bright window before the fall.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1944', title: 'Drawing carried into the paint', blurb: 'On one of his largest canvases he works wet and thin, letting color wash, stain and bleed, then lays a draftsman’s nervous line over the top. Automatism, the free unconscious hand, builds the shapes; the gardens of remembered Armenia and the Virginia present feed them.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 1 in × 8 ft 2 in', title: 'A teeming field, not a scene', blurb: 'No horizon, no ground, no subject: dozens of soft biomorphic shapes scattered across a wide washed field, organic and faintly sexual but kept deliberately indefinable, with a few hot accents flaring against the quieter ground.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1944', title: 'Where Surrealism turns into Abstract Expressionism', blurb: 'Gorky fuses Surrealism’s automatism and biomorphic form with mural-scale, all-over abstraction and his own drawing-into-paint, abstraction fed by the unconscious and by memory rather than by Cubist geometry. Breton, the pope of Surrealism, championed him and supplied this very title.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1946–today', title: 'The short window, then Buffalo', blurb: 'A 1946 studio fire, a cancer diagnosis, a 1948 car crash and a broken marriage close in fast; Gorky takes his own life in 1948 at about forty-four. The canvas passes through two hands to the Albright Art Gallery, given by Seymour H. Knox, Jr. in 1956, and hangs there, now the Buffalo AKG, today.', progress: 0.96 },
  ],
  provenance: [
    { year: '1944–c.1950', who: 'Arshile Gorky (the artist), then Jean Lamson Hebbeln', place: 'New York', note: 'Painted in 1944 in Gorky’s most fertile years. From the artist into the Jean Lamson Hebbeln collection.', price: null },
    { year: 'c.1950–1956', who: 'Sidney Janis Gallery', place: 'New York', note: 'Handled by the dealer Sidney Janis, one of the central New York galleries for the new American painting and the European modernists alike.', price: null },
    { year: '1956–today', who: 'Buffalo AKG Art Museum (then the Albright Art Gallery)', place: 'Buffalo, New York', note: 'Acquired by the Albright Art Gallery on 13 March 1956 as the Gift of Seymour H. Knox, Jr. (accession K1956:4). The Albright Art Gallery became the Albright-Knox Art Gallery and, after its 2023 expansion, the Buffalo AKG Art Museum. On view.', price: 'gift', museum: true },
  ],
  figures: [
    { name: 'Arshile Gorky', role: 'The painter', palette: ['#2a3a6a', '#b44d3b', '#0e1428'] },
    { name: 'André Breton', role: 'Surrealist leader; supplied the title', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Joan Miró', role: 'Biomorphic Surrealist he came through', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Agnes Magruder (“Mougouch”)', role: 'Wife; the Virginia farm', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Willem de Kooning', role: 'Painter who took up his bridge', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
  ],
  annotations: [
    { label: 'A field, not a scene', where: 'The whole canvas: no horizon line, no ground, no single subject', detail: 'The first thing to notice is what is missing. There is no horizon, no floor, no sky, no one thing the picture is "of." Instead the eye finds dozens of soft shapes scattered and clustered across a wide colored field. Read it as a swarm of growing things rather than a place. That refusal of a fixed scene, an all-over field with no center and no story, is half of what makes the picture point forward to Abstract Expressionism rather than back to Surrealist dream-illustration.' },
    { label: 'Drawing laid over color', where: 'Across the surface: thin dark contour lines riding on top of the painted washes', detail: 'Look for thin, dark, nervous contour lines drawn on top of the color, not filled in by it. Gorky was a master draftsman, and here the drawing rides on the painting: line and paint are two separate layers, the line laid last. That carrying of a draftsman’s line straight into a large painting is one of the tells of his late method and one of the moves the next generation took from him.' },
    { label: 'Thin washes, stains and bleeds', where: 'The colored ground, where edges run and the canvas shows through', detail: 'Much of the color is soft and watery, thinned so the weave of the canvas shows through, with edges that seep and run rather than sit in hard shapes. This is automatism left visible: accidents of the flowing paint allowed to stay, the unplanned bleed treated as part of the picture instead of something to tidy.' },
    { label: 'Organic and sexual forms, kept indefinable', where: 'Throughout: petal-, organ-, flame- and limb-like shapes', detail: 'The shapes suggest fertility and the body: petals, organs, flames, limbs. The Buffalo AKG notes clear allusions to female and male genitalia. But every form stays ambiguous, never quite a flower, never quite an organ, and that ambiguity is the point. The picture is not a picture of something so much as growth and the body felt rather than depicted.' },
    { label: 'Bright passages against a quieter field', where: 'Scattered hot accents of red and yellow against the more muted, washed surroundings', detail: 'A few hot, saturated notes (reds, yellows) flare out against the softer, washed-down field around them. Because so much of the canvas is muted, those small bright passages pull the eye and carry it across the long, wide surface, the way Gorky wanted you to travel the whole field rather than rest on one shape.' },
    { label: 'The mural scale', where: 'The size itself: roughly 6 by 8 feet, the intimate marks blown up to a wall', detail: 'Stand back. This is one of Gorky’s largest paintings, roughly 6 by 8 feet, mural-sized. The forms are intimate, doodle-like, the kind of mark you would make small and private; here they are blown up to the scale of a wall. That mismatch, a private organic mark at public monumental size, is part of why the canvas reads as a step toward Abstract Expressionism.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealist automatism', mode: 'art' },
      { label: 'Biomorphism (Miró, Masson)', mode: 'art' },
      { label: 'The gardens of Armenia, remembered', mode: 'civ' },
    ],
    children: [
      { label: 'Abstract Expressionism', mode: 'art' },
      { label: 'De Kooning’s biomorphic abstraction', mode: 'art' },
      { label: 'The all-over field', mode: 'art' },
    ],
  },
}
```

## PART B — the five chapter components + registry comment

```tsx
// ─────────────────────────────────────────────────────────────
// The Liver Is the Cock's Comb (Gorky, 1944) — the five chapters.
// In-copyright: no full inline figure of the work; the hero (shown small,
// credited under fair use) carries the image. The title was SUPPLIED BY
// BRETON (evocative, not a description, never decoded as a key). The
// Surrealism→AbEx claim is a SYNTHESIS, scoped, never sole-cause. Key
// statement = Breton's 1945 "nature as cryptogram" intro (cleanly sourced);
// the unverified "most important paintings made in America" line is not used.
// Genocide/lost-mother biography kept proportionate.
// ─────────────────────────────────────────────────────────────
function LvrSetting({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York / Virginia · 1944" title="The apprentice who took twenty years to become himself" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        rshile Gorky spent most of his painting life openly learning out loud. Born <strong>Vosdanig Manoug Adoian</strong> around 1904 near Lake Van, in the Armenian provinces of the Ottoman Empire, he reached the United States as a young immigrant and remade himself, new name and all, into a New York painter. (He sometimes hinted he was kin to the Russian writer Maxim Gorky. He was not.) Through the 1930s he painted, frankly and on purpose, <em>through</em> the masters he loved: a long C&eacute;zanne phase, then a long Picasso phase, then Joan Mir&oacute;, the Spanish Surrealist whose soft floating shapes Gorky studied like scripture. For two decades he was the most gifted apprentice in America, and he knew it, and it bothered him.
      </p>
      <p style={proseStyle}>
        Two things have to be set down before the picture, both quietly, because the picture is not a caption to either. The first is a wound. Gorky lived the <strong>Armenian genocide</strong>, the mass killing and forced expulsion of Ottoman Armenians during the First World War, and in <strong>1919</strong> his mother died of starvation in his arms in its aftermath. That loss runs underneath his art for the rest of his life. But it is not a key that unlocks each shape, and the museum that holds this canvas is careful to frame the homeland in it as <em>remembered gardens</em>, not literal autobiography. State the loss once, with care, and let the forms stay open.
      </p>
      <p style={proseStyle}>
        The second thing is a stretch of happiness, which matters because this is a happy picture. In <strong>1941</strong> Gorky married <strong>Agnes Magruder</strong>, whom everyone called &ldquo;Mougouch,&rdquo; and the couple began spending long stretches on her family&rsquo;s <strong>farm in Virginia</strong>. Out in that countryside, drawing plants and dirt and light, Gorky finally stopped painting through other men and started painting through himself. The early-to-mid 1940s were his breakthrough years. <em>The Liver Is the Cock&rsquo;s Comb</em>, made in <strong>1944</strong>, sits right in the middle of them.
      </p>
      <p style={proseStyle}>
        And he had company that pushed him. The Second World War had driven the leading European <strong>Surrealists</strong> into exile, and a good number of them, including their leader Andr&eacute; Breton, were in New York during the war years. (Surrealism is the movement, launched in 1920s Paris, that tried to put the unconscious mind directly into art, dreams, accidents, free association, the parts of the self that reason does not police.) Gorky met them. They took him seriously. Breton in particular decided that this Armenian American was a genuine Surrealist discovery, and began to champion him. So in 1944 Gorky stands at a hinge: a fully formed draftsman who has finally found his own voice, encouraged by the very Europeans whose method he was bending to a new purpose.
      </p>
    </article>
  )
}

function LvrMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1944" title="Two layers: the wash, then the line" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he making of this picture is really the meeting of two habits Gorky had spent twenty years building separately, finally allowed to happen on the same surface. The first is <strong>automatism</strong>. The word comes straight out of Surrealism, and it means letting the hand move freely, fed by the unconscious, without a plan: you start drawing or painting and you follow where the marks go rather than deciding in advance what to depict. The Surrealists used automatism to fish images up out of the parts of the mind that conscious control keeps quiet. Gorky took the technique and made it his own engine. The teeming shapes in this canvas were not designed and then executed; they were found, in the act, by a free hand.
      </p>
      <p style={proseStyle}>
        The second habit is the opposite of free: it is <strong>drawing</strong>, the most disciplined thing Gorky did. He was a superb draftsman, and in his late work he carried that line directly into the painting rather than burying it. The mechanics on this canvas are unusually clear once you know to look. He worked the color <strong>thin and wet</strong>, letting it wash, stain, soak and bleed into the canvas so that edges run and the weave shows through, much closer to watercolor than to thick oil paint. Then, over that flowing colored ground, he laid a <strong>nervous, dark, drawn line</strong> that defines the shapes. The painting is built in two passes: the unconscious wash underneath, the drawing on top. Neither cancels the other.
      </p>
      <p style={proseStyle}>
        What those shapes are <em>made of</em> is the part everyone wants to pin down, and the honest answer is two things fused. The Buffalo AKG describes the work as joining the artist&rsquo;s <strong>physical surroundings</strong>, the Virginia farm and its plants, with his <strong>memories of the gardens of his homeland</strong>, the remembered Armenia of his childhood. So the forms are organic, fertile, growing things, half-recalled and half-seen, neither a portrait of Virginia nor an illustration of Armenia but a single image-world distilled out of both. The thinning, the staining, the freely found shapes and the drawn line all serve that one aim: to get growth and memory onto the canvas as feeling rather than as a depicted place.
      </p>
      <p style={proseStyle}>
        This is also one of the <strong>largest canvases Gorky ever painted</strong>, roughly six by eight feet, mural-scale. That decision is not incidental to the making. The intimate, doodled, watercolor-like marks he was discovering are blown up here to the size of a wall, and holding that scale steady across a surface built from free, accidental, bleeding shapes is most of the difficulty and most of the achievement.
      </p>
    </article>
  )
}

function LvrLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A field with no horizon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it, and the first thing that should register is what the picture refuses to give you. There is <strong>no horizon line</strong>, no floor, no sky, no single object the painting is &ldquo;of.&rdquo; A traditional picture hands you a scene to stand in. This one hands you a wide colored field with <strong>dozens of soft shapes</strong> scattered and clustered across it, and lets you wander. Read it as a swarm of growing things rather than a place. The eye has nowhere fixed to land, which is the point: the whole surface is alive and equally weighted, edge to edge.
      </p>
      <p style={proseStyle}>
        The shapes themselves are <strong>biomorphic</strong>, a useful word that just means &ldquo;shaped like living things&rdquo;: soft, rounded, organic forms that suggest bodies, plants and organs without being any of them exactly. You will find petal-like forms, flame-like forms, limb-like and organ-like forms, drifting and overlapping. The Buffalo AKG notes that some carry clear allusions to <strong>female and male genitalia</strong>, and the picture is frankly about fertility and the body. But notice how every shape stays just shy of being nameable: never quite a flower, never quite an organ. That deliberate indefiniteness is not failure or shyness. It is the subject. Gorky wanted growth and the body <em>felt</em>, not catalogued.
      </p>
      <p style={proseStyle}>
        Now look at how it is painted, because the surface tells you how it was made. Much of the color is <strong>thin and watery</strong>, washed on so the canvas shows through, with edges that <strong>run, seep and bleed</strong> rather than sit in hard outlines. Over that soft flooded ground rides a separate layer: <strong>thin, dark, nervous drawn lines</strong>, the draftsman&rsquo;s contour laid on top of the painting rather than filled in by it. Once you see those two layers, the wash below and the drawing above, you can read the whole picture as the meeting of Gorky&rsquo;s free unconscious hand and his trained one.
      </p>
      <p style={proseStyle}>
        Finally, the color. The field is mostly soft and muted, but a few <strong>hot accents</strong>, reds and yellows, flare out against the quieter surroundings. Because so much of the canvas is washed-down and pale, those small bright passages carry real weight: they pull the eye and walk it across the long, wide surface. Step back to take the whole thing in at mural scale and the doodled, intimate forms become a single teeming wall of growth. There is no scene, no story, no fixed thing. There is a field, and it is full of life.
      </p>
    </article>
  )
}

function LvrBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Two things that sat apart" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        efore this canvas, two strands of modern painting sat in separate rooms. On one side was <strong>Surrealism</strong>, with its automatism and its soft biomorphic dream imagery: Mir&oacute;, Andr&eacute; Masson, Yves Tanguy, Matta. It had the free hand and the organic shape, but it stayed largely European, often small in scale, and often illustrative, a depicted dream, a scene from the unconscious. On the other side was <strong>American abstraction</strong>, which before the war was mostly geometric, derived from Cubism (the Picasso-and-Braque method of breaking objects into faceted planes), or else it was plain regionalist realism. Gorky himself had spent the 1930s as a magnificent apprentice inside all of this, painting openly through C&eacute;zanne, Picasso and Mir&oacute; in turn. The pieces existed. Nobody had fused them.
      </p>
      <SectionHeader accent={accent} label="The break" title="Automatism, biomorphism, scale, drawing, memory, fused" />
      <p style={proseStyle}>
        Gorky put them together. He kept Surrealism&rsquo;s <strong>automatism</strong> (the free unconscious hand) and its <strong>biomorphic form</strong> (the soft organic shape), but he scaled them up to <strong>mural-size, all-over abstraction</strong> with no fixed scene, and he carried his draftsman&rsquo;s <strong>line drawing directly into the painting</strong>, thin contours laid over washed, bled, stained color. The result is <strong>abstraction fed by the unconscious and by personal memory</strong> rather than by Cubist geometry. That particular hybrid, organic form plus automatism plus scale plus drawing-into-paint plus the unconscious-and-memory as the actual subject, is one of the seeds of the movement that would shortly be called <strong>Abstract Expressionism</strong>.
      </p>
      <p style={proseStyle}>
        The painter who put all this in motion had a champion to name it, and the cleanest words about Gorky&rsquo;s method are Breton&rsquo;s. In <strong>March 1945</strong> Andr&eacute; Breton, the founder of Surrealism, wrote the introduction to Gorky&rsquo;s first solo show at the <strong>Julien Levy Gallery</strong> in New York, and described what Gorky was doing this way:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        &ldquo;Here for the first time nature is treated as a cryptogram. The artist has a code by reason of his own sensitive anterior impressions, and can decode nature to reveal the very rhythm of life.&rdquo;
      </blockquote>
      <p style={proseStyle}>
        That is Breton, in his introduction to Gorky&rsquo;s 1945 Julien Levy show, and it is almost a description of how <em>The Liver Is the Cock&rsquo;s Comb</em> works. A <strong>cryptogram</strong> is a coded message, something written so that only a holder of the key can read it. Breton&rsquo;s claim is that Gorky carries the key, his own &ldquo;anterior impressions,&rdquo; the gardens and bodies and losses already inside him, and uses it to turn nature into a private code on the canvas: not a picture of the world but a decoding of it into the rhythm of life itself. That is exactly the memory-into-form move the painting makes.
      </p>
      <p style={proseStyle}>
        Two cautions keep this honest, both from the record. First, the bridge is a <strong>synthesis</strong>, not a sole cause. Gorky is <em>a</em> decisive hinge between Surrealism and Abstract Expressionism, the shorthand &ldquo;last of the Surrealists and first of the Abstract Expressionists&rdquo; is useful, but he did not single-handedly invent the movement, and he never fully swallowed Surrealist doctrine: he kept its automatism and its forms while rejecting its dream-illustration and its pure-unconscious dogma, bending the method toward his own memory-and-nature abstraction. Second, the very <strong>title</strong> you have been reading is Breton&rsquo;s, not Gorky&rsquo;s. The Surrealists liked to hand works poetic, deliberately strange names, and Breton supplied this one. &ldquo;Liver&rdquo; carries old associations with the soul and the seat of life; &ldquo;cock&rsquo;s comb&rdquo; is at once a flower, a rooster&rsquo;s crest, and a jester&rsquo;s cap, with a crude pun underneath. They are layered allusions, not a key. Do not read the title as a label for particular shapes; it is a spell cast over the picture from outside it.
      </p>
      <SectionHeader accent={accent} label="The break · after" title="The doorway the next generation walked through" />
      <p style={proseStyle}>
        What came after is the proof. The younger New York painters took exactly these moves. <strong>Willem de Kooning</strong> built his biomorphic abstraction out of them; <strong>Jackson Pollock</strong> ran with the all-over automatist field, the large unhierarchical canvas of pure feeling with no fixed scene. The standard line, that <em>Gorky is where Surrealism becomes Abstract Expressionism</em>, is true if you scope it as influence and synthesis rather than as a one-man invention. This canvas is one of the doors that the whole next movement walked through.
      </p>
    </article>
  )
}

function LvrAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1946–1948" title="The short, bright window, and the fall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his picture sits inside a window that did not stay open long. The years <strong>1943 to 1947</strong> were Gorky&rsquo;s breakthrough, the stretch in which he finally painted as himself. Then a cascade of disasters closed over him in barely two years. In <strong>1946</strong> a fire in his studio destroyed many of his works. Around the same time came a diagnosis of <strong>rectal cancer</strong> and the surgery that followed. In <strong>1948</strong> a car accident broke his neck and, for a time, paralyzed his painting arm. His marriage broke down. On <strong>21 July 1948</strong>, at roughly forty-four, Gorky hanged himself in Sherman, Connecticut, leaving the chalked words &ldquo;Goodbye My Loveds.&rdquo; The 1944 canvas was painted, then, in the last clear light before all of that.
      </p>
      <SectionHeader accent={accent} label="Provenance" title="Through two hands to Buffalo" />
      <p style={proseStyle}>
        The painting&rsquo;s life as an object, its <strong>provenance</strong> (the documented chain of who has owned a work, in order, from the artist&rsquo;s hand to now), is short and clean. From Gorky it went into the collection of <strong>Jean Lamson Hebbeln</strong>, and then to the <strong>Sidney Janis Gallery</strong> in New York, one of the central dealers of the new American painting. On <strong>13 March 1956</strong> the picture was acquired by the <strong>Albright Art Gallery</strong> in Buffalo as the <strong>Gift of Seymour H. Knox, Jr.</strong> (accession K1956:4). Knox was the museum&rsquo;s great modern-art patron, the man who funded much of its postwar collection. The Albright Art Gallery later became the Albright-Knox Art Gallery, and after a 2023 expansion the <strong>Buffalo AKG Art Museum</strong>, where the canvas hangs today.
      </p>
      <SectionHeader accent={accent} label="A note on the image" title="Why this one is shown small" />
      <p style={proseStyle}>
        A word on why this picture is reproduced small here. It is <strong>still under copyright</strong>: Gorky painted it in 1944, and a published work of that era holds US copyright for about ninety-five years from publication, which keeps this one protected through roughly 2040. (The term is keyed to the publication date, not the artist&rsquo;s death, so Gorky&rsquo;s death in 1948 does not free it.) The rights are actively held by the Gorky estate (&copy; Estate of Arshile Gorky / Artists Rights Society, New York). So unlike the older paintings in these readings, which have passed into the public domain, this one is shown small and credited to the Buffalo AKG and the estate, for the purpose of talking about it. The teeming field is free to grow without end; the picture of it is not quite free in the same way.
      </p>
      <p style={proseStyle}>
        What Gorky left, in the few good years before the fall, is the door. <em>The Liver Is the Cock&rsquo;s Comb</em> is the canvas most often used to show the turn, the picture where Surrealism&rsquo;s free hand and the gardens of a lost homeland become a wide, mural-sized field of pure organic life, and where the next great American movement finds one of its beginnings. The man was gone at forty-four. The field he painted is still teeming.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'liver-cocks-comb': { setting: LvrSetting, making: LvrMaking, looking: LvrLooking, break: LvrBreak, afterlife: LvrAfterlife },
```
