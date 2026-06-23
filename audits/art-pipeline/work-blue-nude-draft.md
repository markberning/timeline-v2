# DRAFT — Henri Matisse, *Blue Nude (Souvenir de Biskra)*, 1907

Author output for the gated art pipeline. PART A = paste-ready const for
`src/lib/art-content.ts`. PART B = the five `Blu`-prefixed chapter components for
`art-section-reader.tsx`. Born-verified only; new prose uses parentheses/commas, never
em-dashes; imperial dimensions only. The effigy/burning fact is written precisely
(copies of the paintings were burned; the burning of the man in effigy was attempted
and reportedly stopped; the original canvas survives).

---

## PART A — paste-ready const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Blue Nude (Souvenir de Biskra) (Matisse, 1907). Late-Fauve
// proto-primitivist nude. The Baltimore Museum of Art (The Cone Collection).
// Authored through the art content pipeline (fact pack → Opus → 5 gates →
// revise). Chapter prose in art-section-reader.tsx NARRATIVES['blue-nude']
// (Blu… prefix). FACTS handled per fact pack: it began as a CLAY SCULPTURE
// that broke, then was worked out in oil (mechanism of the break DISPUTED →
// "the clay broke," not a cinematic crash); the bronze Reclining Nude I
// (Aurore) was finished later from the same pose. The 1913 Armory anecdote is
// written PRECISELY: Art Institute of Chicago students burned CHEAP COPIES /
// reproductions of three Matisse works (incl. this one) and staged a mock
// trial of "Henri Hairmattress" on April 16, 1913; the attempt to burn
// Matisse himself IN EFFIGY was reportedly stopped, and the ORIGINAL CANVAS
// was never harmed (it later entered the Cone Collection). The Steins, NOT
// Quinn, owned it in 1913 and lent it to the Armory Show (Quinn bought it in
// 1920). Vauxcelles' "ugly … blue grass … palm trees" line is PARAPHRASED,
// not quoted, per the fact pack (wording not letter-for-letter confirmable).
// The indigo-dyers-stained-blue → blue-body link is framed as "some read,"
// not asserted; the body's blue is shadow/modeling.
// ─────────────────────────────────────────────────────────────
export const BLUE_NUDE: ArtWorkContent = {
  id: 'blue-nude',
  name: 'Blue Nude (Souvenir de Biskra)',
  shortName: 'Blue Nude',
  year: 1907,
  artist: 'Henri Matisse',
  artistId: 'matisse',
  movement: 'Fauvism',
  movementId: 'fauv',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 1/4 in × 4 ft 7 1/4 in',
  location: 'The Baltimore Museum of Art',
  acquired: 'The Cone Collection, Baltimore Museum of Art (bequest of Etta Cone, 1950; acc. 1950.228)',
  accent: ART_ACCENTS.rust, // copied from FAUVISM
  chain: { name: 'Works of Fauvism', index: 9, total: 9 },
  hook: 'A reclining nude Matisse painted only because the clay sculpture of her broke in his studio, sent to the 1907 Salon so ugly on purpose that six years later a Chicago crowd burned copies of it and put the painter on mock trial.',
  heroImage: ART_IMG.matisseBlueNude,
  heroCredit: 'Matisse, Blue Nude (Souvenir de Biskra), 1907 · The Baltimore Museum of Art (The Cone Collection)',
  heroAspect: 1.52, // 92.1 × 140.3 cm → W/H ≈ 1.52 (landscape)
  heroFit: 'contain', // the whole landscape canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1907', k: 'Painted' },
    { v: '3′¼″ × 4′7¼″', k: 'Dimensions' },
    { v: 'Baltimore (BMA)', k: 'Now at' },
  ],
  sections: [
    { id: 'biskra', eyebrow: 'Algeria · 1906', dateLabel: 'Spring 1906', title: 'The two weeks in the oasis', blurb: 'Matisse spends about two weeks in French Algeria, including the desert oasis town of Biskra. He paints nothing major there. A year later, back in France, he makes a picture out of the memory and calls it a souvenir.', progress: 0.08 },
    { id: 'sculpture', eyebrow: 'The studio · 1906–07', dateLabel: '1906–07', title: 'The sculpture that broke into a painting', blurb: 'He was modeling a small reclining figure in clay when the fragile thing broke. Rather than repair it at once, he worked the same twisted pose out in oil. Blue Nude is that painting, a sculptor’s problem solved in paint.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '3 ft ¼ in × 4 ft 7¼ in', title: 'A body modeled in blue', blurb: 'Read the painting itself: the wrenched reclining pose that shows front and back at once, the blue that is shadow and not skin, the heavy dark contour, the swelling hip, the remembered palm and the band of blue grass.', progress: 0.56 },
    { id: 'salon', eyebrow: 'Paris · spring 1907', dateLabel: 'March 1907', title: 'The ugliest thing at the Indépendants', blurb: 'Shown at the Salon des Indépendants, the picture is read as gratuitously ugly, savage, unfinished. The critic who had coined “Fauves” sneers at the nude on its blue grass under palm trees. The scandal is the point.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1907–today', title: 'Burned in copy, bought by a sister', blurb: 'The Steins buy it and lend it to the 1913 Armory Show, where Chicago students burn copies and try the painter in absentia. It passes to Quinn, then to the Baltimore sisters Claribel and Etta Cone, and the original survives, unharmed, at the BMA.', progress: 0.96 },
  ],
  provenance: [
    { year: '1907', who: 'Henri Matisse (the artist)', place: 'Paris', note: 'Painted in early 1907 and shown that spring at the Salon des Indépendants, where the public read it as gratuitously ugly. Sold soon after to the Steins.', price: null },
    { year: '1907–1920', who: 'Leo & Gertrude Stein', place: 'Paris (27 rue de Fleurus)', note: 'The American expatriate siblings, Matisse’s earliest serious patrons, bought it not long after the Salon. They still owned it in 1913 and lent it to the Armory Show, which is why older accounts correctly call it “on loan from Leo and Gertrude Stein.”', price: 'acquired early, direct' },
    { year: '1920–1924', who: 'John Quinn', place: 'New York', note: 'Leo Stein sold it to the New York lawyer John Quinn in 1920. Quinn had been the single most important American backer of the 1913 Armory Show.', price: null },
    { year: '1924–1926', who: 'Estate of John Quinn', place: 'New York / Paris', note: 'Quinn died in 1924 and his vast modern collection was dispersed.', price: null },
    { year: '1926', who: 'Quinn estate sale (Hôtel Drouot, Paris) → Dr. Claribel Cone', place: 'Paris → Baltimore', note: 'At the Quinn sale in Paris on 28 October 1926, the Baltimore collector Dr. Claribel Cone bought it for a reported 120,760 francs (about $4,830). (Price reported via secondary sources; kept attributed.)', price: '~120,760 francs (≈ $4,830, reported)' },
    { year: '1929–1949', who: 'Etta Cone', place: 'Baltimore', note: 'Claribel died in 1929; her holdings passed to her sister Etta, who consolidated the Cone Collection of Baltimore.', price: 'inherited' },
    { year: '1950–today', who: 'The Baltimore Museum of Art', place: 'Baltimore', note: 'Bequeathed by Etta Cone (d. 1949) and accessioned in 1950 as part of The Cone Collection. Acc. 1950.228. On view, in one of the world’s largest Matisse holdings.', price: 'bequest', museum: true },
  ],
  figures: [
    { name: 'Henri Matisse', role: 'The painter', palette: ['#4a7a4a', '#3a5a8a', '#15110c'] },
    { name: 'Leo & Gertrude Stein', role: 'First owners · lent it to the 1913 Armory Show', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'John Quinn', role: 'New York lawyer · owned it 1920–24', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Dr. Claribel Cone', role: 'Bought it at the 1926 Quinn sale', palette: ['#7a3a52', '#3a2630', '#140e10'] },
    { name: 'Etta Cone', role: 'Sister · bequeathed the collection to Baltimore', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Pablo Picasso', role: 'The 1907 rival, toward the Demoiselles', palette: ['#bf6a2f', '#5a2c12', '#1a0e06'] },
  ],
  annotations: [
    { label: 'The twisted, impossible pose', where: 'The whole reclining figure, head at upper left, legs at right', detail: 'She lies on her side, but her torso wrenches up and around toward us while her hips stay turned away, so you read the front and the back of one body at the same time. One arm bends up behind the head; the spine makes a long S-curve. This is a sculptor’s pose, not a life-class one, the same twist Matisse was modeling in clay, which is why it feels carved into the canvas rather than observed across a studio.' },
    { label: 'Blue shadow doing the modeling', where: 'Along the underside of the torso, the far breast, the crook of the bent arm, the hollows of the body', detail: 'The “blue” of the title is not her skin; it is the shadow. Matisse pushes passages of blue into the hollows and undersides of the body the way a sculptor pushes shadow into clay with a thumb, so a flat painting reads as something with weight and volume. The same blue bleeds out of the body and into the grass, which ties the figure and the ground into one surface instead of a figure set in front of a background.' },
    { label: 'The remembered palm and the oasis', where: 'Upper right and behind the figure, the fronded plant and the band of “grass”', detail: 'A stylized palm and a strip of vegetation set her in an oasis, the Biskra of the title, remembered rather than observed. The ground she lies on is the “opaque blue grass” the hostile critics fixed on. It is not a window onto a real desert; it is a flat band of color, a memory of a place stitched in behind a studio nude.' },
    { label: 'The swelling hip and the heavy contour', where: 'Center of the canvas, the great upward curve of the hip and buttock, and the dark line around the whole body', detail: 'The hip swells up to the highest point of the whole composition, and a thick, deliberate dark contour rings the figure like a drawn outline. Academic “finish,” the smooth invisible blending of a Salon nude, is simply gone. Look how the curve of the buttock is echoed by the hollow under the palm fronds: body and plant rhyme with each other, the picture built on repeated shapes.' },
    { label: 'The bulked, simplified body and its sources', where: 'The whole mass of the figure, the broad shoulders, the blunt simplified features, the weightiness', detail: 'The body is broadened and simplified into mass over grace, closer to a carved idol than to a graceful Salon nude. This is the moment Matisse and his circle (Picasso, Derain, Vlaminck) were looking hard at African and other non-European sculpture arriving in Paris through colonial channels, their makers unnamed. Scholars split on what Matisse meant by it, whether he is critiquing or reinforcing Western ideals of the nude in the colony, and that reading is a live argument, not a settled fact.' },
    { label: 'Color that recurs across body and plant', where: 'Everywhere, the skin, the plants, the lips and nipples', detail: 'The paint is laid on visibly and roughly, and the colors repeat across the whole surface: red turns up in the palm stem and again in the lips and nipples, pink in both the figure and the base of the palm, blue in both the body’s shadows and the grass. Nothing pretends to be a faithful copy of nature. It is a built surface of a few colors thrown back and forth between the woman and the oasis until the two are made of the same paint.' },
  ],
  lineage: {
    parents: [
      { label: 'Cézanne’s bathers', mode: 'art' },
      { label: 'African & non-European sculpture', mode: 'civ' },
      { label: 'Ingres’ odalisques', mode: 'art' },
    ],
    children: [
      { label: 'Les Demoiselles d’Avignon', mode: 'art' },
      { label: 'Cubism', mode: 'art' },
      { label: 'The modern primitivist nude', mode: 'art' },
    ],
  },
}
```

---

## PART B — the five `Blu`-prefixed chapter components

For `art-section-reader.tsx`. Voice = absinthe. New prose: parentheses/commas, never
em-dashes. The looking chapter makes the reader SEE the twisted pose, the blue
modeling shadow, and the oasis.

```tsx
// ─────────────────────────────────────────────────────────────
// Blue Nude (Souvenir de Biskra) (Matisse, 1907) — the five chapters
// ─────────────────────────────────────────────────────────────
function BluBiskra({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Algeria · spring 1906" title="The two weeks in the oasis" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of <strong>1906</strong>, <strong>Henri Matisse</strong> (the French painter, then thirty-six and a year past the scandal that had made him famous) got on a boat and spent about <strong>two weeks in Algeria</strong>, the French colony across the Mediterranean. Part of that fortnight he spent in <strong>Biskra</strong> (pronounced &ldquo;BIS-kra&rdquo;), a desert oasis town on the northern edge of the Sahara, the kind of place the French press had been selling back home for sixty years as a postcard, a green spot of palms and water in an ocean of sand, taken by French troops in the 1840s and run as a winter resort ever since.
      </p>
      <p style={proseStyle}>
        Here is the thing to fix in your mind before we go any further: <strong>he did not paint this picture there.</strong> He painted very little of consequence in Biskra at all. He looked, he sketched a street, he bought a few local textiles and pots, and then he came home to France. The trip mattered, but it mattered the way a trip matters a year later, when you are back in your own cold studio and the heat and the palms and the light have cooked down in your memory into something simpler and stranger than the actual place.
      </p>
      <p style={proseStyle}>
        That is exactly what the title tells you. The French is <em>Nu bleu, Souvenir de Biskra</em>, and the operative word is <em>souvenir</em>, which in French means a <strong>memory, a recollection</strong>, the thing you carry home, not the trinket you buy. The picture is not a scene of Biskra. It is a <strong>memory of Biskra</strong>, made back in France in early 1907, and the difference is the whole point. A reader who expects a travel painting, an oasis with a figure in it, is going to be confused by what actually arrives. What arrives is a single distorted body on a band of impossible blue grass, with one stylized palm behind it, standing in for a whole country remembered.
      </p>

      <SectionHeader accent={accent} label="The blue, and a guess about it" title="A detail people love, and probably overrun" />
      <p style={proseStyle}>
        One detail about Biskra has attached itself to this painting and refuses to let go, so let us deal with it honestly. The local weavers of the region worked with <strong>indigo</strong>, the deep-blue plant dye, and indigo stains the hands: dyers in indigo towns famously go about with <strong>blue-stained arms and legs</strong>. Some writers connect that blue-stained skin straight to the blue body in the painting, as if Matisse had seen blue people in Biskra and painted what he saw.
      </p>
      <p style={proseStyle}>
        It is a lovely idea and it is almost certainly too neat. The blue in the painting, as we will see when we get up close, is not the color of anyone&rsquo;s skin. It is <strong>shadow</strong>, the blue a sculptor would push into the hollows of a body to make it look carved. So treat the indigo story the way it deserves: a real and vivid fact about a real place, which some people like to read into the picture, not a proven recipe for it. The sure link between the painting and Biskra is the one word in the title. The rest is a memory of heat and a body, worked out in oil paint, in France, the following year.
      </p>
    </article>
  )
}

function BluSculpture({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The studio · 1906–07" title="The sculpture that broke into a painting" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        his is the best story in the painting, and it is true, so it is worth telling carefully. <strong>Blue Nude is a painting that exists because a sculpture broke.</strong>
      </p>
      <p style={proseStyle}>
        Back in his studio after Algeria, Matisse was not, at first, making a painting at all. He was <strong>modeling in clay</strong>, building up a small <strong>reclining figure</strong>, a nude woman lying on her side, working the form with his hands. Clay at that stage is wet and heavy and fragile, held up on an armature, and at some point the thing <strong>broke</strong>. (The exact way it broke is one of those details every account tells slightly differently, dropped, fallen, the stand giving way, so we will not pretend to a cinematic crash; the sure fact is that the clay broke before he had finished it.)
      </p>
      <p style={proseStyle}>
        Most sculptors, faced with a broken figure, would have patched it or started the clay over. Matisse did something stranger and more revealing. Rather than repair it on the spot, he <strong>turned to oil paint and worked out the same figure on a canvas instead</strong>, solving in two dimensions the problem his hands had been solving in three. <em>Blue Nude</em> is that canvas. He did, eventually, go back and finish the sculpture: it survives as a small bronze called <strong><em>Reclining Nude I (Aurore)</em></strong> (in French, <em>Nu couché I</em>; &ldquo;Aurore&rdquo; means &ldquo;dawn&rdquo;), and if you stand the bronze and the painting side by side they are obviously the same body in the same twisted pose. The painting and the sculpture are siblings, born of the same broken lump of clay.
      </p>

      <SectionHeader accent={accent} label="Why this matters" title="A sculptor’s problem, solved in paint" />
      <p style={proseStyle}>
        That origin is not just a charming anecdote; it explains how the picture is actually made, and it is the single most useful thing to carry into the next chapter, when we look. Because this is a body Matisse first tried to build <strong>as a sculptor builds</strong>, by pushing mass around and shoving shadow into hollows with a thumb, he paints it the same way. The blue in <em>Blue Nude</em> is doing a sculptor&rsquo;s job. It is not describing the color of a woman. It is modeling volume, pushing the dark into the underside of a breast or the crook of an arm to make a flat painted shape bulge forward off the canvas like clay.
      </p>
      <p style={proseStyle}>
        So when you hear the picture described as crude, or unfinished, or badly drawn (and in 1907 a great many people described it exactly that way), hold this in mind: it is a painting that is thinking like a sculpture. The heaviness is on purpose. The thick dark outline is on purpose. The body is built, not described. A man who could draw a graceful Salon nude in his sleep chose instead to make something with the blunt weight of a carved object, because that is what the broken clay had taught him to want.
      </p>
    </article>
  )
}

function BluLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A wide canvas with one body in it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The painting is <strong>landscape format</strong>, about <strong>three feet tall by four and a half feet wide</strong>, wider than it is high, and almost the whole of that width is given over to a <strong>single reclining body</strong>. There is no room, no furniture, no story, no other figure. One woman, lying on her side, fills the canvas nearly corner to corner, with a strip of vegetation and a stylized plant behind her. Everything the picture has to say it says through that one body and the few flat bands of color around it. So we will look at the body first, because the body is the whole argument.
      </p>

      <SectionHeader accent={accent} label="The pose" title="Front and back of one body at once" />
      <p style={proseStyle}>
        Find her. Her <strong>head is up at the left</strong>, tipped back, with one <strong>arm bent up and around behind it</strong> so the elbow points to the upper-left corner. From there your eye travels right, along the body, and this is where the picture does the thing that makes it strange. She is lying on her side, which should mean you see one continuous profile of a body, hip and shoulder in a single plane. <strong>But her torso wrenches.</strong> The chest and breasts twist <strong>up and toward you</strong>, turning to face out of the canvas, while the <strong>hips and buttocks stay rolled away</strong>, turned to the back. So in one body, read left to right, you are somehow seeing the <strong>front of her</strong> (the twisted-up chest) and the <strong>back of her</strong> (the rolled-away hip) at the same time. No real person can hold that pose. It is a long, impossible <strong>S-curve</strong> of a spine, and it is exactly the twist Matisse had been pushing around in wet clay (chapter two). Once you see the wrench, you cannot unsee it: the woman is turning two ways at once, and the whole body has the quality of something modeled and revolved in the hand rather than glimpsed across a studio.
      </p>

      <SectionHeader accent={accent} label="The blue" title="The shadow, not the skin" />
      <p style={proseStyle}>
        Now the blue, because the painting is named for it and almost everyone gets it backwards. The title makes you expect a blue woman. <strong>She is not blue.</strong> Her body is a warm, ruddy, pinkish flesh color. The <strong>blue is the shadow.</strong> Look along the <strong>underside of the torso</strong>, the <strong>far breast</strong>, the <strong>crook of that bent arm</strong>, the <strong>hollows where the body folds</strong>, and you will find that every shaded place, every spot that would simply be a darker flesh-tone in an ordinary nude, Matisse has painted a frank, unmixed <strong>blue</strong>. He is using blue the way a sculptor uses shadow, packing it into the hollows to make the lit parts bulge forward. That is why a flat painting reads as something with real weight: the blue does the modeling. And here is the move that ties the whole picture together, so watch for it: <strong>the same blue runs straight out of the body and into the grass.</strong> The shadow under her and the ground she lies on are the same blue paint, so the figure does not sit cleanly in front of a background. She is welded to it. Body and oasis are made of one color.
      </p>

      <SectionHeader accent={accent} label="The hip and the outline" title="Where the academy’s finish goes to die" />
      <p style={proseStyle}>
        Let your eye go to the <strong>center of the canvas</strong>, to the <strong>hip and buttock</strong>. This is the high point of the whole composition, the body&rsquo;s great upward curve, swelling up larger than anything else in the picture. It is exaggerated on purpose, pushed past anatomy into pure swelling shape. And ringing the entire figure, head to feet, is a <strong>thick, dark, deliberate contour line</strong>, a drawn outline you are absolutely meant to see. A Salon nude of 1907 would have hidden every edge in soft blended shadow so the body seemed to melt into air; that smooth invisibility was what &ldquo;finished&rdquo; meant. Matisse threw it out. He drew a heavy line around his nude like a child or a carver would, and let it show. Then look from the curve of the buttock up to the <strong>hollow under the palm fronds</strong> behind her: the two curves <strong>rhyme</strong>. The shape of her body is answered by the shape of the plant. The picture is built out of a few repeated curves bounced between the woman and the oasis.
      </p>

      <SectionHeader accent={accent} label="The oasis behind her" title="A memory of a place, in two bands of color" />
      <p style={proseStyle}>
        Finally, the setting, which is barely a setting at all. Behind her, at the <strong>upper right</strong>, stands a single <strong>stylized palm or palmette</strong>, its fronds curling over, and beneath and around her runs a band of <strong>vegetation</strong>, the <strong>blue grass</strong> the hostile critics could not get past. That is the entire Biskra in this <em>Souvenir de Biskra</em>: one plant and a strip of blue ground. It is not a desert you could walk into. It is flat, frontal, decorative, a couple of color-bands standing in for a remembered country. And the colors there are not new colors; they are the body&rsquo;s colors thrown backward into the plant. <strong>Red</strong> turns up in the palm stem and again in her lips and nipples. <strong>Pink</strong> sits in her flesh and again at the base of the palm. <strong>Blue</strong> is in her shadows and in the grass. Step back and the whole thing reads as one built surface of a handful of colors, traded back and forth between a woman and an oasis until you cannot say where one stops and the other starts. That, and not any blue skin, is what the title is really pointing at: a body and a memory, painted out of the same paint.
      </p>
    </article>
  )
}

function BluSalon({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · spring 1907" title="The ugliest thing at the Indépendants" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of <strong>1907</strong>, around March, Matisse hung the new picture at the <strong>Salon des Indépendants</strong> in Paris, the big jury-free, prize-free annual show where any artist could exhibit by paying a fee, the open exhibition the avant-garde used to put its rawest work in front of the public. And the public recoiled. The reaction was not bafflement; it was something closer to disgust. The painting was read as <strong>gratuitously ugly</strong>, savage, brutal, unfinished, a deliberate insult, a competent painter throwing away everything that made a nude beautiful in order to shock.
      </p>
      <p style={proseStyle}>
        It helps to remember what a Salon nude was supposed to be in 1907. It was supposed to be <strong>smooth, idealized, graceful, flattering</strong>, a beautiful woman painted beautifully, with every edge softened and every shadow tucked away. That was the whole long tradition of the academic nude, and audiences read it almost without thinking. Matisse&rsquo;s nude was the opposite of all of it: a heavy, twisted, ungainly body, drawn around with a thick black line, modeled in blunt blue shadow, lying on grass that was the wrong color, under a flat cardboard palm. To a viewer trained on the academic nude it did not look like a failed attempt at beauty. It looked like an <strong>attack</strong> on beauty, and it was taken personally.
      </p>

      <SectionHeader accent={accent} label="The critic" title="Blue grass and palm trees" />
      <p style={proseStyle}>
        The line that has stuck to the painting ever since came from <strong>Louis Vauxcelles</strong> (pronounced &ldquo;voh-SELL&rdquo;), the Paris critic with a real gift for the wounding phrase: he is the same man who, two years earlier, had christened Matisse and his circle the <em>Fauves</em>, the &ldquo;wild beasts,&rdquo; and who would later hand Cubism its name too. Faced with the <em>Blue Nude</em>, he reached for ridicule, and his jeer fastened on exactly the three things a hostile eye saw first: <strong>that the woman was ugly</strong>, that she was <strong>stretched out on blue grass</strong>, and that the whole thing sat <strong>under palm trees</strong>. (The exact wording of his line varies from translation to translation, so take that as the gist of his sneer rather than a quotation carved in stone. The contempt is not in doubt; the precise syllables are.) The detail to notice is that his insults were accurate. There <em>is</em> a frankly ugly-on-purpose body. The grass <em>is</em> blue. There <em>is</em> a flat palm. He named the picture&rsquo;s real features and meant every one as a crime. Matisse had simply decided those features were not crimes.
      </p>
      <p style={proseStyle}>
        And that is the thing about the 1907 scandal: <strong>the ugliness was the point, not an accident.</strong> Matisse was not failing to paint a pretty nude. He was deliberately refusing to, building a body out of weight and blue shadow and a hard outline because that, and not prettiness, was what he was after. The Salon read a refusal as an incompetence, and a deliberate provocation as a tantrum. Six years later, across an ocean, a crowd of Chicago students would read it exactly the same way, and act on it.
      </p>
    </article>
  )
}

function BluAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris → New York" title="The Steins, and the rivalry on one wall" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        traight off the scandal, the picture found the best possible owners. <strong>Leo and Gertrude Stein</strong>, the American brother-and-sister collectors living in Paris at <strong>27 rue de Fleurus</strong>, bought it. The Steins were Matisse&rsquo;s earliest serious patrons, and they were also Picasso&rsquo;s, and they hung the two men in the same rooms, which means the rivalry that ran through twentieth-century painting was, for a while, literally on one wall of one Paris apartment.
      </p>
      <p style={proseStyle}>
        That matters here because of a date. <em>Blue Nude</em> is from <strong>1907</strong>. So is <strong><em>Les Demoiselles d&rsquo;Avignon</em></strong>, the savage, faceted brothel scene Picasso was making across town, the picture usually called the doorway to Cubism. Both are nudes pushed through deliberate distortion and the same new pressure of African and other non-European sculpture then entering Paris. Picasso saw the <em>Blue Nude</em>; it is commonly said to have <strong>fed into</strong> the <em>Demoiselles</em>. Be careful with the chain of cause, because Picasso&rsquo;s picture was largely worked out that same year and you cannot cleanly say one made the other. The honest version is a <strong>rivalry</strong>: two men, the same year, the same city, the same dealers and patrons, each watching the other shove the human body further than anyone thought a painting could take it.
      </p>

      <SectionHeader accent={accent} label="Chicago · April 16, 1913" title="The copies that were burned" />
      <p style={proseStyle}>
        Now the famous part, which gets garbled almost every time it is told, so we will tell it precisely. In <strong>1913</strong>, the Steins lent <em>Blue Nude</em> to the <strong>Armory Show</strong> (the International Exhibition of Modern Art), the giant exhibition that opened in New York in February and detonated American modern art. (Note the lender: in 1913 the painting was still the <strong>Steins&rsquo;</strong>. John Quinn, whom we will meet in a moment, did not own it yet.) From New York the show traveled to the <strong>Art Institute of Chicago</strong>, where the students were, to put it mildly, not persuaded.
      </p>
      <p style={proseStyle}>
        On <strong>April 16, 1913</strong>, around the show&rsquo;s last day, Art Institute students staged a protest, and this is the fact to get exactly right. They <strong>burned cheap copies, reproductions, of three Matisse paintings</strong>, the <em>Blue Nude</em> among them. They <strong>did not burn the painting.</strong> The original canvas, the actual oil the Steins had lent, hung untouched; what went up in flames were photographic copies. They also held a <strong>mock trial</strong> of the painter, whom they nicknamed <strong>&ldquo;Henri Hairmattress,&rdquo;</strong> indicting him for a long string of joke crimes (artistic murder, pictorial arson, criminal misuse of line, total degeneracy of color), a student jury &ldquo;condemned&rdquo; him, and a student &ldquo;chaplain&rdquo; intoned that they regretted he had only one life to give for his principles. There was also an attempt to <strong>burn Matisse himself in effigy</strong>, a stuffed figure of the man, but by the local reports that effigy was <strong>stopped before it was lit.</strong> So the accurate sentence, the one to hold onto past every breathless retelling, is this: <strong>copies of the paintings were burned; the burning of the artist in effigy was attempted and reportedly halted; and the original <em>Blue Nude</em> was never harmed.</strong> It is alive and well, which is the whole reason you can go look at it today.
      </p>

      <SectionHeader accent={accent} label="Quinn, and the Quinn sale" title="From a New York lawyer to a Paris auction" />
      <p style={proseStyle}>
        After the Armory Show, the painting changed hands. In <strong>1920</strong>, Leo Stein sold it to <strong>John Quinn</strong>, the New York lawyer who had been the single most important American backer of the 1913 show. Quinn died in <strong>1924</strong>, and his enormous modern collection was broken up and sold. <em>Blue Nude</em> came up at the <strong>Quinn estate sale in Paris</strong>, at the <strong>Hôtel Drouot</strong> auction house, on <strong>28 October 1926</strong>.
      </p>

      <SectionHeader accent={accent} label="The Cone sisters" title="Two women from Baltimore" />
      <p style={proseStyle}>
        And the buyer at that Paris sale is how the painting ends up where it is: a city not many people would guess, <strong>Baltimore</strong>. The buyer was <strong>Dr. Claribel Cone</strong> (1864–1929), and her story is worth a paragraph, because she is not a footnote. Claribel was a <strong>Johns Hopkins-trained pathologist</strong>, a practicing scientist at a time when that was almost unheard of for a woman, and she and her younger sister <strong>Etta Cone</strong> (1870–1949) had been friends of Gertrude Stein back in their shared Baltimore-and-Hopkins days. Through the Steins, the Cone sisters had started buying Matisse early, and they kept at it for decades, with a seriousness and a checkbook that most museums of the time could not match. At the Quinn sale, Claribel bought the <em>Blue Nude</em> for a reported <strong>120,760 francs</strong> (about <strong>$4,830</strong>; that figure comes from secondary accounts, so hold it loosely). Claribel died in 1929, her holdings passed to Etta, and Etta spent the rest of her life consolidating what the two of them had built into one of the great private collections of modern art in the world.
      </p>
      <p style={proseStyle}>
        When Etta died in <strong>1949</strong>, she left the whole thing, <strong>the Cone Collection</strong>, to her hometown museum, the <strong>Baltimore Museum of Art</strong>, which accessioned it the next year. That bequest is the reason a mid-sized American city holds <strong>one of the largest Matisse collections on Earth</strong>, and the reason the <em>Blue Nude</em>, the picture a Paris Salon called gratuitously ugly and a Chicago crowd burned in cheap copy, hangs today in Baltimore, the original paint intact, gathered up and saved by two sisters who saw, long before the crowds did, exactly what it was.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'blue-nude': { biskra: BluBiskra, sculpture: BluSculpture, looking: BluLooking, salon: BluSalon, afterlife: BluAfterlife },
```
