# FINAL — Hannah Höch, *Cut with the Kitchen Knife…* (1919–20) — `kitchen-knife`

Reconciled after the 5 gates (fact / read / frame). All [BLOCKER] and [FIX] items folded; no BLOCKERs were raised. Two blocks: PART A = the `KITCHEN_KNIFE` const for `src/lib/art-content.ts`; PART B = the 5 reader components + NARRATIVES registry comment for `art-section-reader.tsx`. Coordinator splices, then integrates. Component prefix `Knf`. Identifiers identical to draft.

**Folded:**
- FACT FIX-1 — `medium` now carries watercolor; PART B "no painting in it at all… Not one brushstroke" softened to "almost no painting / effectively no brushwork."
- READ FIX-1 — diagonal direction named (lower-right to upper-left).
- READ FIX-2 — meta tic "the work we are here to look at" trimmed (named the work instead).
- READ FIX-3 — reader-command "Be careful with that sentence" flipped to statement.
- READ NICE — soft honesty-label "So the honest version is this." trimmed; §1 "our picture is about" hinge de-meta'd.
- FRAME FIX-1 — "founding monuments of the form" scoped to "political photomontage."
- FRAME — invention scoped as contested Höch/Hausmann memoir claim with pre-Dada precedent (kept); speculative figure-IDs flagged as scholarly readings (kept); Höch's feminism + the men's condescension kept as content.

## PART A — const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Cut with the Kitchen Knife Dada Through the Last Weimar
// Beer-Belly Cultural Epoch of Germany (Schnitt mit dem Küchenmesser
// DADA durch die letzte Weimarer Bierbauchkulturepoche Deutschlands),
// Hannah Höch, 1919–20, Nationalgalerie, Berlin (Staatliche Museen,
// inv. NG 57/61). Photomontage and collage, with watercolor; PD-US
// (published 1920, before 1931) but still under EU copyright to 2048
// (Höch d. 1978) → EN-tier image, rights: 'pd-us'. Authored through the
// art content pipeline. Chapter prose in art-section-reader.tsx
// NARRATIVES['kitchen-knife'] (Knf… prefix). FACT HANDLING (kept hedged
// per fact pack):
//  • Dimensions 114 × 90 cm (H×W) → PORTRAIT; "144 cm" / "90 × 144" are
//    Wikipedia transcription errors, use 114.
//  • Medium is canonically photomontage; catalogue records (lumen/SUNY,
//    museum-aligned) add watercolor → carried in the medium string, and
//    the prose says "almost no painting / effectively no brushwork,"
//    never an absolute "not one brushstroke."
//  • "Höch invented photomontage" is a CONTESTED memoir feud (Grosz,
//    Heartfield, Baader each claimed it; cut-and-paste predates Dada to
//    the 1850s) → framed as "pioneered as a fine-art/political medium."
//  • "Kitchen knife = her scissors / a woman's domestic tool" is
//    INTERPRETATION (Smarthistory/Khan Academy), NOT a Höch quote.
//  • The verbatim Höch quote shipped is the "None of these men…"
//    statement, cited as an English TRANSLATION (NMWA/Lavin).
//  • Head-on-body pairings (Hindenburg-on-dancer; Lenin/Baader/Radek
//    on performer bodies; Niddy Impekoven balancing Kollwitz; Pavlova/
//    Pola Negri/Asta Nielsen as sources) are SCHOLARLY READINGS, flagged.
//    Certain: two camps; Kaiser + wrestler-moustache; "die grosse Welt
//    dada" (revised from "Weltrevolution"); suffrage map; Höch's self-
//    portrait by the map.
//  • Acquisition mechanism for NG 57/61 NOT confirmed → hedged in
//    provenance (the "57" implies c. 1957; route not asserted).
// ─────────────────────────────────────────────────────────────
export const KITCHEN_KNIFE: ArtWorkContent = {
  id: 'kitchen-knife',
  name: 'Cut with the Kitchen Knife',
  shortName: 'Cut with the Kitchen Knife',
  year: 1919,
  artist: 'Hannah Höch',
  artistId: 'hoch',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Photomontage and collage (cut paper, with watercolor)',
  dimensions: '3 ft 9 in × 2 ft 11 in',
  location: 'Nationalgalerie, Berlin (Staatliche Museen)',
  acquired: 'Nationalgalerie, Berlin (inv. NG 57/61); the inventory number points to a late-1950s acquisition, in Höch’s lifetime',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 3, total: 9 },
  hook: 'A poster-sized photomontage that shreds and reassembles the whole Weimar republic out of the illustrated press, generals and dancers and machine parts, made by the only woman in Berlin Dada, with a corner map of where women could vote and her own face pasted where a painter would sign.',
  heroImage: ART_IMG.hochKnife,
  heroCredit: 'Höch, Cut with the Kitchen Knife…, 1919–20 · Nationalgalerie, Berlin',
  heroAspect: 0.79, // 715 × 900 source → W/H ≈ 0.79, PORTRAIT (work is 114 × 90 cm, H×W)
  heroFit: 'contain', // the whole portrait montage, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1919–20', k: 'Made' },
    { v: '3′9″ × 2′11″', k: 'Dimensions' },
    { v: 'Nationalgalerie', k: 'Now at' },
  ],
  sections: [
    { id: 'fair', eyebrow: 'Berlin · 1919–1920', dateLabel: '1919–1920', title: 'The one woman in Berlin Dada', blurb: 'Postwar Berlin is in open political war and a circle of artists is using scissors and glue as weapons. Hannah Höch is the only woman among them, nearly barred from the group’s own 1920 fair until Raoul Hausmann threatens to pull his work, and she answers with a picture that maps the whole republic.', progress: 0.08 },
    { id: 'making', eyebrow: 'The break', dateLabel: '1919–1920', title: 'A picture built from the mass-media stream', blurb: 'Almost no paint and no invented figure. Höch cuts every scrap from illustrated magazines, newspapers, catalogues, and journals, and reassembles the machine-made image-world itself into art, photomontage turned from a commercial trick into a political weapon and a critique of how women are pictured.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '3 ft 9 in × 2 ft 11 in', title: 'A republic torn into two camps', blurb: 'A nearly four-foot kaleidoscope that only looks like chaos, organized as two warring sides, anti-dada and dada, with the Kaiser and the generals against the revolutionaries and the Dadaists, dancers’ bodies carrying men’s heads, gears and wheels everywhere.', progress: 0.56 },
    { id: 'reading', eyebrow: 'What it says', dateLabel: '1919–1920', title: 'The suffrage map, and the men who wanted a New Woman', blurb: 'In the lower-right corner a tiny map of where women could vote, with Höch’s own self-portrait pasted at its upper-left, planted where a painter signs. And her own words on the Dada men who demanded a New Woman but would not change themselves.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1920–today', title: 'From the Dada fair to the national collection', blurb: 'It hung as one of the most prominent pieces at the 1920 First International Dada Fair, stayed with Höch through her long Berlin life, and entered the Nationalgalerie around 1957, where it is now the most famous photomontage of the movement.', progress: 0.96 },
  ],
  provenance: [
    { year: '1919–1920', who: 'Hannah Höch (the artist)', place: 'Berlin', note: 'Made in 1919–20 from cut press photographs and printed type. First shown publicly at the First International Dada Fair (Erste Internationale Dada-Messe), Berlin, summer 1920, at Dr. Otto Burchard’s gallery, where it was among the most prominent works.', price: null },
    { year: '1920–1950s', who: 'Hannah Höch', place: 'Berlin', note: 'The montage stayed associated with Höch through her long life in Berlin (she died there in 1978). No intervening sale is documented in the sources.', price: null },
    { year: 'c. 1957–today', who: 'Nationalgalerie, Staatliche Museen zu Berlin', place: 'Berlin', note: 'Held by the Nationalgalerie, Staatliche Museen zu Berlin (Preußischer Kulturbesitz), inventory NG 57/61. The number points to an acquisition around 1957, during Höch’s lifetime; the exact route (purchase, from the artist, or via a dealer) is not documented here, so none is asserted. On view. (Public domain in the US as a work published in 1920; any “©” notice on museum pages is an EU claim that runs to 2048.)', price: null, museum: true },
  ],
  figures: [
    { name: 'Hannah Höch', role: 'The artist · the one woman in Berlin Dada', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'The Berlin Dada men', role: 'Hausmann, Grosz, Heartfield, Baader, Herzfelde', palette: ['#5a5046', '#2e2820', '#100c08'] },
    { name: 'The Kaiser and the generals', role: 'The “anti-dada” camp · the old empire and the army', palette: ['#5a3a2a', '#2e2018', '#0e0806'] },
    { name: 'The radicals and dancers', role: 'The “dada” camp · Lenin, Marx, the performers', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
    { name: 'The women of the suffrage map', role: 'Those who had won the vote · and Höch’s own face', palette: ['#6a7250', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The Kaiser, with a wrestler moustache', where: 'Upper right, the large head of Kaiser Wilhelm II in the “anti-dada” camp', detail: 'The deposed emperor Wilhelm II anchors the establishment corner, and his famous upturned moustache has been snipped off and replaced with a pair of tiny upside-down wrestlers. It is the whole montage in miniature: take the most pompous symbol of authority and deflate it with a cheap clipping from a sports page. This identification is certain and universally cited.' },
    { label: 'The military around him', where: 'Upper right, the generals and Weimar government men ringing the Kaiser, including Hindenburg', detail: 'The old army and the new republic’s officials cluster in the upper-right “anti-dada” zone, the field marshal Paul von Hindenburg among them. Scholars (Maud Lavin, Smarthistory) read his head as set on a belly-dancer’s body, one of Höch’s recurring head-swaps that strips a man of his dignity. Treat the exact body-pairing as a scholarly reading; the camp and the figures are certain.' },
    { label: 'The “dada” camp of radicals and Dadaists', where: 'Lower left and across the picture, the revolutionary and Dada figures opposite the establishment', detail: 'The other side gathers the revolution: the Communists and radicals Lenin, Karl Marx, Karl Liebknecht, and Karl Radek, the Dadaists themselves (Hausmann, Grosz, Herzfelde, Baader), and Albert Einstein nearby as the new science. The split into two warring camps is certain; some individual head-on-body matches are scholarly identifications, not labels on the work.' },
    { label: 'The dancers carrying men’s heads', where: 'Across the lower and central field, small cut-out performer bodies topped with political and cultural heads', detail: 'A defining device: the cut-out bodies of dancers and film stars carry the heads of serious men, deflating their authority by sticking them on a chorus girl. Scholars identify the dancer Niddy Impekoven’s body balancing the artist Käthe Kollwitz’s head, and read Anna Pavlova, Pola Negri, and Asta Nielsen among the sources. These name-to-figure matches are partly inferential; the head-swapping motif itself is plain on the work.' },
    { label: 'The lettering: “Die grosse Welt dada”', where: 'Lower right, the cut-out type reading roughly “the great Dada world,” with “dada” and “anti-dada” used as camp labels', detail: 'The printed words act as the picture’s captions, sorting the figures into “dada” and “anti-dada.” At the lower right the phrase “Die grosse Welt dada” (“the great Dada world”) reads out, and there is a documented edit here: Höch first had “Weltrevolution” (World Revolution) in this spot and replaced it with the milder Dada wording, softening an open call to revolution into a Dada slogan.' },
    { label: 'The suffrage map, and Höch’s own face', where: 'Lower-right corner, a small map of Europe with her self-portrait pasted at its upper-left', detail: 'In the corner where a painter signs, Höch pasted a little map of Europe marking the countries where women had won the vote (Germany itself had just granted it in the 1919 Weimar constitution), and at the map’s upper-left she pasted a photograph of her own face. A woman, and the question of women’s political power, occupy the signature spot inside a movement that nearly shut her out. That the self-portrait sits with the map is certain (Khan Academy); the best-sourced placement is the lower right.' },
  ],
  lineage: {
    parents: [
      { label: 'Cubist collage', mode: 'art' },
      { label: 'The illustrated mass press', mode: 'civ' },
      { label: 'The Weimar revolution', mode: 'civ' },
    ],
    children: [
      { label: 'Political photomontage', mode: 'art' },
      { label: 'John Heartfield’s anti-Nazi work', mode: 'art' },
      { label: 'Feminist art', mode: 'art' },
    ],
  },
}
```

## PART B — components

```tsx
// ─────────────────────────────────────────────────────────────
// Cut with the Kitchen Knife (Höch, 1919–20) — the five chapters
// ─────────────────────────────────────────────────────────────
function KnfFair({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Berlin · 1919" title="A city at war with itself" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        erlin in <strong>1919</strong> was not a calm place to make a calm picture. Germany had just lost the <strong>First World War</strong>; the Kaiser, <strong>Wilhelm II</strong>, had abdicated and fled in November 1918; and in his place a shaky new democracy, the <strong>Weimar Republic</strong> (named for the small city of Weimar, where its constitution was written because Berlin was too dangerous to meet in), was trying to govern a country in open revolt. That January, a Communist uprising, the <strong>Spartacist revolt</strong>, was crushed in the streets, and its two leaders, <strong>Karl Liebknecht</strong> and <strong>Rosa Luxemburg</strong>, were murdered by right-wing paramilitaries. Soldiers home from the trenches, generals from the old empire, street-fighting revolutionaries, and a wobbling new government were all crammed into one furious city. This is the Berlin the picture is literally cut from.
      </p>
      <p style={proseStyle}>
        Into that city came <strong>Dada</strong>, the anti-art movement that had begun in neutral Zurich in 1916 as a howl of disgust at the war and the respectable culture that had marched into it. (The name <em>Dada</em> means nothing on purpose: a piece of baby-talk, a hobby-horse, a noise, chosen precisely because it refused to mean anything sensible.) By 1918 a Berlin branch had formed, and it was the most nakedly political of all the Dada chapters. Where Zurich Dada played nonsense games, <strong>Berlin Dada</strong> took the same scissors-and-nonsense spirit and aimed it straight at German militarism, the generals, and the new republic. Its weapons were the cabaret stunt, the leaflet, and a new visual technique we are about to meet.
      </p>

      <SectionHeader accent={accent} label="The circle" title="The men, and the one woman" />
      <p style={proseStyle}>
        The Berlin Dada circle was a band of brilliant, quarrelsome men: the painter and provocateur <strong>Raoul Hausmann</strong>; the savage caricaturist <strong>George Grosz</strong>; the brothers <strong>John Heartfield</strong> and <strong>Wieland Herzfelde</strong>, who ran a left-wing press; the self-appointed &ldquo;Oberdada&rdquo; (chief Dada) <strong>Johannes Baader</strong>. And there was <strong>Hannah Höch</strong> (1889&ndash;1978; pronounced &ldquo;HAH-nah HURK,&rdquo; the <em>ö</em> roughly like the vowel in &ldquo;her&rdquo;), the <strong>only woman in the group</strong>. (Say <em>Berlin</em> Dada specifically: other Dada cities, Zurich, Paris, New York, had women of their own. In Berlin, there was Höch.)
      </p>
      <p style={proseStyle}>
        Her position in the circle was precarious in a way none of the men&rsquo;s was. She was Hausmann&rsquo;s partner for seven years, and she earned the rent the rest of them mostly didn&rsquo;t: from 1916 she worked at the giant <strong>Ullstein</strong> publishing house, designing patterns for embroidery and handicraft magazines aimed at women. That day job mattered, because it steeped her in exactly the world, mass-printed pictures, illustrated magazines, the cut-and-paste of layout, that she would turn into art. The men treated her, in the words she later wrote, as a sort of charming amateur. Grosz and Heartfield actively opposed letting her show with the group at all. When the group mounted its big public event in 1920, she was admitted only because <strong>Hausmann threatened to withdraw his own work</strong> if she was kept out. Hausmann himself later wrote, dismissively, that &ldquo;she was never a member of the club.&rdquo;
      </p>

      <SectionHeader accent={accent} label="Summer 1920" title="The First International Dada Fair" />
      <p style={proseStyle}>
        That big public event was the <strong>First International Dada Fair</strong> (the <em>Erste Internationale Dada-Messe</em>), held in the summer of <strong>1920</strong> at the gallery of a Berlin art dealer, Dr. Otto Burchard. It was a deliberate provocation, walls crammed with photomontages and slogans, a stuffed German officer with a pig&rsquo;s head hung from the ceiling, posters declaring &ldquo;Art is dead.&rdquo; And hanging in it, the woman who had nearly been barred from the room, was <em>Cut with the Kitchen Knife</em>, reportedly one of the most prominent and talked-about pieces in the whole show.
      </p>
      <p style={proseStyle}>
        Its title is a sentence in itself: <em>Cut with the Kitchen Knife Dada Through the Last Weimar Beer-Belly Cultural Epoch of Germany</em> (in German, <em>Schnitt mit dem Küchenmesser DADA durch die letzte Weimarer Bierbauchkulturepoche Deutschlands</em>). Unpack it slowly. A <strong>kitchen knife</strong> is cutting; <strong>Dada</strong> is doing the cutting; what is being cut through is the <strong>&ldquo;beer-belly cultural epoch&rdquo;</strong> of Weimar Germany, the fat, complacent, militaristic old order. The picture is the cut. And a woman, the one the men nearly kept out, is the one holding the knife.
      </p>
    </article>
  )
}

function KnfMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · medium" title="A picture with almost no paint in it" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is the first thing that makes this work a break, and it is so basic it is easy to walk past: <strong>there is almost no painting in it at all</strong>, no invented figures, effectively no brushwork (a little watercolor tints a few edges, and that is the whole of the paint). Every face, every wheel, every letter, every scrap of map was <strong>cut from something already printed</strong>: illustrated magazines, newspapers, broadsides, product catalogues, journals. Höch went through the mass-produced picture-stream of 1919 Germany with a pair of scissors, lifted out the pieces she wanted, and pasted them onto paper into a new arrangement. This technique is <strong>photomontage</strong>: a picture assembled from cut-up photographs and printed type instead of drawn or painted from life.
      </p>
      <p style={proseStyle}>
        Think about how strange that was as a thing to call art. For four hundred years a serious picture meant the trace of an artist&rsquo;s own hand: paint laid down by a skilled person to invent an image that did not exist before. Photomontage threw all of that out. The raw material was not pigment but the <strong>machine-made, mass-reproduced image</strong>, the same photographs millions of people were seeing in their newspapers. The artist&rsquo;s job was no longer to invent the image but to <strong>cut it out and rearrange it</strong>, to take the modern media stream and turn it against itself. The flood of printed pictures that the new century had unleashed became, in Höch&rsquo;s hands, the paint.
      </p>

      <SectionHeader accent={accent} label="Who invented it" title="A memoir feud, not a settled fact" />
      <p style={proseStyle}>
        You will read, often, that &ldquo;Höch and Hausmann invented photomontage.&rdquo; That sentence is contested. The two of them told an origin story from a <strong>1918 holiday on the Baltic Sea</strong>, where they saw a cheap commercial souvenir: a print of a uniformed soldier with a blank space for a head, so a customer could paste in his own photograph and own a picture of his &ldquo;heroic military life.&rdquo; They said they grasped, in that moment, the strange power of cut-and-paste. It is a good story. But cutting and pasting photographs together was a <strong>commercial trick going back to the 1850s</strong>, decades before Dada, and inside the Berlin group at least three other men, George Grosz, John Heartfield, and Johannes Baader, each separately claimed to have invented it too. No early works survive to prove any of the claims.
      </p>
      <p style={proseStyle}>
        The Berlin Dadaists, with Höch and Hausmann at the front, did not invent cutting and pasting out of nothing; what they did was take a commercial novelty and make it a <strong>serious medium for art and for politics</strong>. The &ldquo;who was first&rdquo; argument inside the group is a memoir feud between rival old men, not a fact anyone can settle. What is not in dispute is that this picture is one of the founding monuments of political photomontage.
      </p>

      <SectionHeader accent={accent} label="The break · what it’s for" title="Collage as a political weapon" />
      <p style={proseStyle}>
        The second part of the break is what the medium is <em>aimed at</em>. Collage already existed: a decade earlier, Picasso and Braque had glued scraps of newspaper and oilcloth onto their Cubist canvases (Chapter on Cubism). But they used those scraps as neutral <strong>texture and form</strong>, a piece of caned chair, a fragment of headline, chosen for how it looked, not for what it said. Höch does the opposite. She keeps the photographs <strong>legible</strong>, the Kaiser is recognizably the Kaiser, Lenin is recognizably Lenin, and arranges them into a <strong>partisan map of a real political moment</strong>. This is not abstract play. It names the establishment, names the revolution, and physically takes a knife to the old order. Art has become agitprop.
      </p>

      <SectionHeader accent={accent} label="The break · who’s looking" title="A woman turning the scissors on the image-world" />
      <p style={proseStyle}>
        And the third part of the break is who is making it, and what she points the scissors at. Inside a movement that nearly shut her out, Höch used the same technique to ask a question the men were not asking: <strong>how were women being pictured</strong> in this new flood of mass media? The dancers, the film stars, the fashion plates, the cheerful magazine ideal of the modern &ldquo;New Woman&rdquo;: all of it was raw material she could cut up and re-aim. The standard reading of the title plays on this, treating the <strong>kitchen knife</strong> as a wink at a woman&rsquo;s domestic tool, scissors and shears doing the work that brushes and chisels did for the men. That reading is widespread and it is a fair one, but it is an interpretation, not something Höch ever said, so hold it as a reading and not a quote. What is plain is that the break here is double: photomontage as a new medium, and photomontage turned by a woman onto the question of who gets to make, and who gets pictured by, the modern image.
      </p>
    </article>
  )
}

function KnfLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The work" title="Big, busy, and only pretending to be chaos" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The montage is large, about <strong>three feet nine inches tall by two feet eleven inches wide</strong> (roughly 114 by 90 centimeters), a <strong>portrait-shaped</strong> sheet, taller than it is wide, near poster size and one of the biggest photomontages anyone in Berlin Dada made. (You will sometimes see it listed as &ldquo;144 cm&rdquo; or with the width and height flipped; those are transcription slips. The long side is about 114 centimeters, and the work stands taller than it is wide.) The first impression is overwhelming: dozens of cut-out heads, bodies, gears, wheels, words, and machine parts packed edge to edge, a kaleidoscope that looks, at a glance, like pure chaos.
      </p>
      <p style={proseStyle}>
        It is not chaos. It only performs chaos. Spend a minute and an organization rises out of it. The picture is built as a <strong>map of two warring camps</strong>, and once you see the division you cannot un-see it. The cut-out words <strong>&ldquo;dada&rdquo;</strong> and <strong>&ldquo;anti-dada&rdquo;</strong> act as labels, sorting the figures into two sides, with the knife&rsquo;s cut running as a rough diagonal <strong>from the lower right up to the upper left</strong> between them. One half is the old order; the other is the revolution. Everything in the picture belongs to one team or the other.
      </p>

      <SectionHeader accent={accent} label="Anti-dada" title="The Kaiser, the generals, the beer-belly order" />
      <p style={proseStyle}>
        The <strong>&ldquo;anti-dada&rdquo;</strong> camp, the establishment, gathers in the <strong>upper right</strong>. Its anchor is a large head of the deposed emperor, <strong>Kaiser Wilhelm II</strong>, and Höch has played her best joke on him: his famous upturned moustache has been snipped away and replaced with a pair of tiny <strong>upside-down wrestlers</strong>, two cut-out strongmen standing in for the bristling whiskers of imperial authority. Around him cluster the men of the old empire and the new republic, generals and government officials, the field marshal <strong>Paul von Hindenburg</strong> among them. (Scholars who have mapped the picture closely, above all the art historian <strong>Maud Lavin</strong>, read Hindenburg&rsquo;s head as set onto a belly-dancer&rsquo;s body, one of Höch&rsquo;s recurring tricks of sticking a pompous man&rsquo;s head on an absurd body. Take that exact pairing as a careful scholarly reading, not a label printed on the work; the picture is dense, and some of the identifications are interpretation.)
      </p>

      <SectionHeader accent={accent} label="Dada" title="Lenin, the radicals, the Dadaists, and Einstein" />
      <p style={proseStyle}>
        The <strong>&ldquo;dada&rdquo;</strong> camp, the revolution, spreads across the <strong>lower left</strong> and through the picture. Here are the Communists and radicals: <strong>Lenin</strong>, the founder of the new Soviet state; <strong>Karl Marx</strong>; the murdered Spartacist leader <strong>Karl Liebknecht</strong>; the Bolshevik <strong>Karl Radek</strong>. Here too are the Dadaists themselves, <strong>Hausmann, Grosz, Herzfelde, Baader</strong>, the men of Höch&rsquo;s own circle, planted firmly on the side of the cut. And nearby floats <strong>Albert Einstein</strong>, whose theory of relativity had just made him world-famous, standing in for modern science as another force overturning the old certainties. The division of the picture into these two camps is certain; some of the individual head-on-body pairings within each camp are scholarly readings, so trust the sides more than any single face-to-figure match.
      </p>

      <SectionHeader accent={accent} label="The dancers" title="Men’s heads on chorus-girl bodies" />
      <p style={proseStyle}>
        Now watch one device that runs through the whole picture, because it is Höch&rsquo;s sharpest tool. Again and again, a <strong>cut-out dancer&rsquo;s or performer&rsquo;s body carries the head of a serious man</strong>. The effect is instant deflation: take a general or a politician and stick his head on a leaping chorus girl, and his authority simply drains out of him. Scholars identify, among these swaps, the body of the celebrated dancer <strong>Niddy Impekoven</strong> juggling or balancing the head of the artist <strong>Käthe Kollwitz</strong>, and read the ballerina <strong>Anna Pavlova</strong> and the film stars <strong>Pola Negri</strong> and <strong>Asta Nielsen</strong> among the cut-up performers, all of them aligned on the Dada side. (The head-swapping is plain on the work; the specific name-to-figure matches are partly inferential, so hold the names loosely.) Through the whole thing run <strong>gears, ball bearings, and wheels</strong>, cut from machine catalogues, the cogs of the modern industrial world threaded between the people like the teeth of the city itself.
      </p>
    </article>
  )
}

function KnfReading({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Lower right" title="The signature corner, given to women’s votes" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>N</DropCap>
        ow go down to the <strong>lower-right corner</strong>, the small quiet spot where a painter would normally sign the canvas, because what Höch put there is the heart of the whole work. She pasted in a tiny <strong>map of Europe marking the countries where women had won the right to vote</strong>. This was a live, burning question in 1919: Germany itself had just granted women the vote in the new Weimar constitution that year, and across Europe the map of who could and could not vote was being redrawn. Putting that map in the corner turns the signature spot into a political statement: instead of &ldquo;made by Höch,&rdquo; the picture is signed, in effect, &ldquo;here is where women have power, and here is where they do not.&rdquo;
      </p>
      <p style={proseStyle}>
        And then, at the <strong>upper-left of that little map</strong>, she pasted a photograph of <strong>her own face</strong>. A woman&rsquo;s self-portrait and a map of women&rsquo;s votes, together, occupying the exact corner where the artist signs, inside a picture made for a movement that nearly refused to let her exhibit. It is the most deliberate gesture in the work. (That the small self-portrait sits with the suffrage map is certain; the best-sourced placement of the map is the lower right, though a few accounts say only &ldquo;a corner.&rdquo;) Höch did not sign her name. She signed her face, and she put it next to the question of women&rsquo;s power.
      </p>

      <SectionHeader accent={accent} label="The lettering" title="A world revolution, softened into a Dada world" />
      <p style={proseStyle}>
        Look at the cut-out words again, because one of them was changed. At the lower right, near the map, the type reads <em>&ldquo;Die grosse Welt dada&rdquo;</em> (&ldquo;the great Dada world&rdquo;), and that phrasing is a second thought. Höch first had the word <strong>&ldquo;Weltrevolution&rdquo;</strong> (World Revolution) in this spot, an open call to overturn everything, and then replaced it with the milder, more playful Dada slogan. It is one of the few edits we can actually document in the work, and it tells you something about the moment: a picture that maps a revolution, pulling back at the last second from naming it outright, settling for Dada instead of Welt-revolution.
      </p>

      <SectionHeader accent={accent} label="Her own words" title="The men who wanted a New Woman, and would not change" />
      <p style={proseStyle}>
        For everything else in this picture we are reading, but on one subject we have Höch&rsquo;s own voice, and it is worth quoting because it is the key to why a woman&rsquo;s self-portrait is wedged into the corner of a Dada manifesto. Reflecting on the Dada men and their fashionable enthusiasm for the liberated modern woman, Höch wrote (here in English translation):
      </p>
      <p style={proseStyle}>
        <em>&ldquo;None of these men were satisfied with just an ordinary woman. But neither were they inclined to abandon the (conventional) male / masculine morality toward the woman. Enlightened by Freud, in protest against the older generation &hellip; they all desired this &lsquo;New Woman&rsquo; and her groundbreaking will to freedom. But &hellip; they more or less brutally rejected the notion that they, too, had to adopt new attitudes &hellip;&rdquo;</em>
      </p>
      <p style={proseStyle}>
        (The statement comes down to us as a translation and is excerpted, the ellipses are in the quoted source, so treat it as her sense rather than a polished sentence.) Read it against the picture and the whole thing snaps into focus. The men cut around her demanded a New Woman, free and modern, while keeping every old habit of treating women as lesser. Höch, the one woman they nearly barred from their own fair, answered with a picture that cuts up their generals and their revolutionaries alike, and then, in the corner, plants women&rsquo;s votes and her own face where the artist&rsquo;s name belongs. The kitchen knife in the title is cutting through the beer-belly culture of Weimar; it is also, quietly, cutting through the men in her own circle.
      </p>
    </article>
  )
}

function KnfAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1920 onward" title="From the fair to a long, quiet career" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        fter the <strong>1920 Dada Fair</strong>, where it had been one of the most-noticed pieces, the picture went where Höch went, which was nowhere far. Berlin Dada burned out within a couple of years; the men scattered and feuded. Höch kept working, in collage and photomontage, for another half-century. The years were not kind to that work&rsquo;s reputation in Germany: under the Nazis, who came to power in 1933, modern art of exactly this kind was branded <strong>&ldquo;degenerate,&rdquo;</strong> and Höch, blacklisted, spent the Third Reich living quietly on the edge of Berlin, keeping her own pictures and those of friends hidden. She survived the war, kept making art, and died in Berlin in <strong>1978</strong>, at the age of eighty-nine.
      </p>

      <SectionHeader accent={accent} label="Provenance · c. 1957" title="Into the national collection" />
      <p style={proseStyle}>
        The picture&rsquo;s ownership history (its <strong>provenance</strong>, the documented chain of who has held a work, from the artist&rsquo;s hand to now) is short and stayed close to Höch. It remained associated with her through her long Berlin life, and then entered the <strong>Nationalgalerie</strong>, the national gallery of (then West) Berlin, under the inventory number <strong>NG 57/61</strong>. That &ldquo;57&rdquo; points to an acquisition around <strong>1957</strong>, in Höch&rsquo;s own lifetime, while she was still living and working in the city. (The exact route into the collection, whether the gallery bought it, took it from the artist, or acquired it through a dealer, is not documented in the sources we have, so we will not guess at a buyer or a price.) It hangs there today, in the Staatliche Museen zu Berlin.
      </p>
      <p style={proseStyle}>
        One note on the rights, because museum pages will show a &ldquo;©&rdquo; on this image. The work was <strong>published in 1920</strong>, which makes it <strong>public domain in the United States</strong> (US copyright on a work this old turns on the date of publication, not on when the artist died). In Germany and the rest of the European Union, where copyright runs for the artist&rsquo;s life plus seventy years, it stays protected until the end of <strong>2048</strong> (Höch died in 1978). The copyright notice you see is a European claim; it does not govern use in the United States.
      </p>

      <SectionHeader accent={accent} label="After" title="The picture that outgrew the men who nearly shut her out" />
      <p style={proseStyle}>
        For decades Höch was filed away as a minor figure, a footnote to the more famous Dada men, the girlfriend who did collages. That verdict has been almost entirely overturned. <em>Cut with the Kitchen Knife</em> is now read as the central masterpiece of Berlin Dada photomontage and one of the founding works of <strong>political collage</strong>, the technique that her circle-mate <strong>John Heartfield</strong> would soon turn into ferocious anti-Nazi photomontages, and that artists have used as a weapon ever since. It is also read as a landmark of <strong>feminist art</strong>, a woman cutting up the image-world to ask who controls it, decades before that question had a name.
      </p>
      <p style={proseStyle}>
        There is a neatness to where it ended up. The men of Berlin Dada nearly kept Höch out of their own fair; one of them sniffed that she had &ldquo;never been a member of the club.&rdquo; A century later, the picture she made for that fair, with her own face pasted into the signature corner beside a map of women&rsquo;s votes, hangs in the national gallery as the work the whole movement is best remembered by. The knife cut through more than the beer-belly order. It cut her name into the center of a story that had tried to leave her at the edge.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  kitchen-knife: { fair: KnfFair, making: KnfMaking, looking: KnfLooking, reading: KnfReading, afterlife: KnfAfterlife },
```
