# Draft — *Woman I*, Willem de Kooning (1950–52) — work-read

Authored through the art content pipeline from `audits/art-pipeline/work-woman-i-factpack.md` (source of truth). PART A is the `WOMAN_I` const for `src/lib/art-content.ts`; PART B is the five `Wmn*` chapter components for `art-section-reader.tsx` plus the trailing NARRATIVES registry comment. Coordinator splices both.

Gated-surface notes carried from the fact pack: medium = **oil AND metallic paint** (MoMA's line; no enamel/charcoal); dimensions **192.7 × 147.3 cm** = 6 ft 3⅞ in × 4 ft 10 in portrait (Wikipedia's "150 cm" width rejected); rights **in-copyright** (de Kooning d. 1997), shown small under fair use; the Schapiro rescue is the **standard account, presented as account not gospel**; **no "200 studies" count** ("numerous"); the grin was collaged from a Camel "T-Zone" cigarette ad **in the studies, not the final canvas**; the misogyny reading is kept a **debate, not a verdict**; KEY STATEMENT anchors to the sourced *Location* "Mesopotamian idols … with this smile," and the "flesh was the reason oil paint was invented" line is used only **carefully attributed**, not as primary.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, Woman I (Willem de Kooning, 1950–52), Museum of Modern Art, New York
// (object 79810 / accession 478.1953). Flagship Abstract Expressionism work-read.
// Authored through the art content pipeline (fact pack → Opus → 5 gates → revise).
// Chapter prose in art-section-reader.tsx NARRATIVES['woman-i'] (Wmn… prefix).
// FACT HANDLING (gate-corrected, per work-woman-i-factpack.md):
//  • Medium = "Oil and metallic paint on canvas" (MoMA's exact line); do NOT add
//    enamel or charcoal (charcoal was process/underdrawing, not the catalog medium).
//  • Dimensions = 192.7 × 147.3 cm = 6 ft 3 7/8 in × 4 ft 10 in, PORTRAIT. Width is
//    147.3 cm (58 in); Wikipedia's "150 cm" is wrong and is rejected.
//  • rights: 'in-copyright' (de Kooning d. 1997) — shown small + credited, fair use.
//  • Schapiro rescue = the standard, well-attested account, presented as account
//    not verbatim-verified scene (degree of influence has been questioned).
//  • "numerous" preparatory studies, NOT "200" (no reliable source for a count).
//  • Grin collaged from a Camel "T-Zone" cigarette ad in the STUDIES; in the
//    finished canvas the mouth is painted, echoing that source.
//  • "~50 times painted/effaced/repainted" = a documented characterization, not an
//    audited count. Worked 1950 → summer 1952 ≈ two years.
//  • Misogyny reading kept a DEBATE, not adjudicated; de Kooning was ambivalent.
//  • KEY STATEMENT = the sourced "Mesopotamian idols … with this smile" (Sylvester
//    interview, recorded 1960, pub. Location, Spring 1963). The famous "flesh was
//    the reason oil paint was invented" is genuine-but-uncited → attributed
//    cautiously, never as the primary/dated quote.
// ─────────────────────────────────────────────────────────────
export const WOMAN_I: ArtWorkContent = {
  id: 'woman-i',
  name: 'Woman I',
  shortName: 'Woman I',
  year: 1952,
  artist: 'Willem de Kooning',
  artistId: 'de-kooning',
  movement: 'Abstract Expressionism',
  movementId: 'abex',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil and metallic paint on canvas',
  dimensions: '6 ft 3 7/8 in × 4 ft 10 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Purchase, 1953',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Abstract Expressionism', index: 2, total: 9 },
  hook: 'A grinning, more-than-life-size woman with staring eyes and bared teeth, built and destroyed in the same slashing strokes as the pure abstraction all around her, painted and scraped off roughly fifty times over two years, given up for lost, and finished. The painting that refused to drop the human figure when everyone said it was dead.',
  heroImage: ART_IMG.deKooningWoman,
  heroCredit: 'de Kooning, Woman I, 1950–52 · MoMA, New York · in copyright, shown small under fair use.',
  heroAspect: 0.76, // 147.3 × 192.7 cm → W/H ≈ 0.764, PORTRAIT (taller than wide)
  heroFit: 'contain', // the whole portrait canvas, never cropped
  rights: 'in-copyright', // de Kooning d. 1997 → shown small + credited, fair use
  stats: [
    { v: '1950–52', k: 'Painted' },
    { v: '~50×', k: 'Painted over' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'figure', eyebrow: 'New York · 1950', dateLabel: '1950', title: 'Going back to the figure on purpose', blurb: 'With Abstract Expressionism pushing toward total abstraction (Pollock’s drips, Rothko’s and Newman’s color fields), de Kooning does the unthinkable and paints a recognizable woman. To his peers it reads almost as a betrayal of abstraction’s hard-won purity.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1950–1952', title: 'Two years, fifty times over, given up for lost', blurb: 'He paints, scrapes, effaces and repaints the figure on the order of fifty times across roughly two years, working from numerous studies, before pulling the canvas off the stretcher and abandoning it. A single studio visit, the standard account says, brings him back to finish it.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 3 7/8 in × 4 ft 10 in', title: 'The grin, the eyes, the flesh, the violence', blurb: 'The huge staring eyes, the bared toothy smile (echoing a mouth clipped from a cigarette ad in the studies), the massive body in smeared pinks and ochres, and the slashing brushstrokes that keep building the figure and tearing it apart at once.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1950–52', title: 'Figure and paint-violence, the same event', blurb: 'The woman is not drawn and then painted; she is made and unmade in the very same gestural strokes as the abstraction around her, so figure and ground become one violent action. The break is keeping the human image AND the radical action-painting surface, when the orthodoxy said you had to choose.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1953–today', title: 'The picture MoMA found frightening, and bought', blurb: 'The six Women detonate at the Sidney Janis Gallery in 1953; MoMA buys this one that same year over reluctant trustees who called it frightening. Ever since it carries a debate (idol? pin-up? misogyny?) that de Kooning, ambivalent, never settled.', progress: 0.96 },
  ],
  provenance: [
    { year: '1950–1953', who: 'Willem de Kooning (the artist)', place: 'New York', note: 'Worked on the canvas from 1950 into the summer of 1952, painting, scraping and repainting the figure on the order of fifty times, then abandoned and resumed it. First shown publicly in his Women exhibition at the Sidney Janis Gallery, New York, in 1953.', price: null },
    { year: '1953', who: 'Sidney Janis Gallery', place: 'New York', note: 'Debuted with the rest of the Women series at the Sidney Janis Gallery in 1953, the show that launched the series publicly and detonated the New York art world.', price: null },
    { year: '1953–today', who: 'Museum of Modern Art', place: 'New York', note: 'Acquired by The Museum of Modern Art the same year, 1953, by purchase. The acquisition committee approved it only reluctantly, recording that it found the picture quite frightening but felt it had intense vitality and liked the quality of the color. Credit line: Purchase. Accession 478.1953. On view.', price: 'Purchase (museum acquisition)', museum: true },
  ],
  figures: [
    { name: 'Willem de Kooning', role: 'The painter', palette: ['#bf6a5a', '#3a4a6a', '#15110c'] },
    { name: 'Jackson Pollock', role: 'The drip-abstraction orthodoxy he broke from', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'] },
    { name: 'Meyer Schapiro', role: 'The studio visit that, by the standard account, rescued it', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Sidney Janis', role: 'Dealer; showed the Women, 1953', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Elaine de Kooning', role: 'Painter; his wife, in the studio years', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The bared teeth / grin', where: 'Center of the face, the wide toothy smile splitting the head', detail: 'The single most arresting feature: a broad toothy smile that hovers between a billboard’s cheerful American grin and a snarl. In the preparatory studies the mouth was literally a smile clipped from a magazine, a Camel cigarette “T-Zone” advertisement, and pasted on; in the finished canvas the mouth is painted, but it still carries that ad-smile source. De Kooning himself tied the grin to ancient idols rather than to a particular woman.' },
    { label: 'The huge staring eyes', where: 'Upper part of the face, two enormous fixed eyes aimed straight out at you', detail: 'The eyes are oversized, frontal, and unblinking, fixed directly on the viewer. This is the “ferocious,” “frightening” stare the MoMA acquisition committee recoiled from. They are the part of the picture that makes the figure feel confrontational rather than posed, an idol staring you down rather than a sitter being observed.' },
    { label: 'The slashing brushstrokes', where: 'Everywhere, but read them where they cut across the shoulders, arms and background', detail: 'The marks attack the canvas: fast, thick, drippy, scraped. They are the same gestural violence you would see in a purely abstract action painting of the moment, except here they are building a body. Paint is action, not description. The figure is assembled out of the same slashing energy de Kooning’s abstract peers used to leave the figure behind entirely.' },
    { label: 'The body dissolving into the background', where: 'Around the edges of the figure, where the woman meets the space around her', detail: 'There is almost no stable edge between the figure and the room behind her. Arms, shoulders and ground bleed into one another, so the woman keeps coming together and falling apart as you look. Figure and ground are not separated; they are the same churning surface, which is exactly the point of the break.' },
    { label: 'The pink and ochre flesh tones', where: 'Across the body and limbs, the smeared warm pinks, ochres and reds', detail: 'The body is built from insistently fleshly color, smeared pinks, ochres and reds rather than a neutral or abstract palette. De Kooning made the point that, in a moment when serious painting had gone abstract, painting a figure plainly “flesh-colored” had itself become the daring, almost transgressive choice.' },
    { label: 'The scraped, reworked surface', where: 'The whole surface, where thin drippy passages sit next to thick matte slabs and scraped-down areas', detail: 'Years of painting-over leave the surface a record of its own history. Thin drippy passages sit beside thick matte slabs; scraped-down areas show ghosts of effaced earlier states. The picture carries the documented marks of being made and unmade roughly fifty times, so the surface is itself a record of two years of attack and repair.' },
  ],
  lineage: {
    parents: [
      { label: 'Gestural abstraction', mode: 'art' },
      { label: 'Picasso’s distorted figures', mode: 'art' },
      { label: 'The billboard / pin-up', mode: 'civ' },
    ],
    children: [
      { label: 'Figurative action painting', mode: 'art' },
      { label: 'Pop’s use of advertising', mode: 'art' },
      { label: 'The body as paint-violence', mode: 'art' },
    ],
  },
}
```

## PART B — the five chapter components

```tsx
// ─────────────────────────────────────────────────────────────
// Woman I (de Kooning, 1950–52) — the five chapters
// ─────────────────────────────────────────────────────────────
function WmnFigure({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1950" title="Going back to the figure on purpose" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y 1950, <strong>Willem de Kooning</strong> (1904&ndash;1997; a Dutch-born painter who had jumped ship to New York as a young man and become a central figure of the <strong>New York School</strong>, the loose group of postwar American painters now lumped together as the Abstract Expressionists) was at the front of the most aggressive painting in the world. And the front of that painting had a rule. The rule was <strong>pure abstraction</strong>. <strong>Jackson Pollock</strong> was pouring and flinging house paint across canvases on the floor, building all-over webs of dripped line with no figure in them at all. <strong>Mark Rothko</strong> and <strong>Barnett Newman</strong> were floating great soft rectangles and single vertical stripes of pure color, what later got called <em>color-field</em> painting. The recognizable human body was treated as the thing that serious modern painting had finally, triumphantly outgrown. To paint a person, frontally, sitting there, was to be a generation behind.
      </p>
      <p style={proseStyle}>
        De Kooning broke the rule. He went back to <strong>the figure</strong>: a large, frontal, seated <strong>woman</strong>. Not as a study, not as a private exercise, but as the most ambitious picture he had ever attempted. To his peers and to many of the critics who championed the New York School, this looked close to a <strong>betrayal</strong>, a desertion of abstraction&rsquo;s hard-won purity at the exact moment it was winning. The whole avant-garde had agreed the figure was dead. De Kooning sat one down in his studio and started painting her.
      </p>
      <p style={proseStyle}>
        It is worth saying plainly what he was not doing, because it is the heart of everything that follows. He was <strong>not</strong> retreating to old-fashioned figure painting, the calm illusion of a body sitting in a believable room. He kept the whole violent, all-over, paint-flinging surface of the abstraction around him, and he used it on a woman. The figure and the action-painting were going to happen in the same strokes, at the same time, on the same canvas. That collision is the picture. The rest of these chapters are about what it cost him to make it, and what was hanging there when he finally stopped.
      </p>
    </article>
  )
}

function WmnMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1950–52" title="Two years, fifty times over" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he making of <em>Woman I</em> became legendary, and the legend is mostly true. De Kooning worked the canvas from <strong>1950 into the summer of 1952</strong>, roughly <strong>two years</strong>, and he did not work it the way you would imagine a painting being made. He <strong>built the figure, scraped it off, painted over it, and built it again</strong>, over and over. MoMA&rsquo;s own account of the picture describes the canvas being painted, effaced and repainted on the order of <strong>fifty times</strong>. Take that not as an audited tally but as the honest shape of it: this was a surface attacked and rebuilt dozens of times, so that the finished painting sits on top of a stack of destroyed earlier ones.
      </p>
      <p style={proseStyle}>
        He worked from <strong>numerous preparatory studies</strong>, drawings and small works he made and remade as he went, restarting the figure repeatedly. (You will sometimes see a precise count attached to those studies; there is no reliable source for a specific number, so the honest word is simply &ldquo;many.&rdquo;) Charcoal came into it too, but as <em>drawing</em>: he drew and redrew the figure in charcoal directly on the canvas as he worked, an underdrawing that is part of his process rather than part of the finished medium. The catalog medium, MoMA&rsquo;s exact line, is <strong>oil and metallic paint on canvas</strong>, the metallic paint a real, slightly industrial glint mixed into the surface.
      </p>

      <SectionHeader accent={accent} label="Given up for lost" title="The canvas off the stretcher" />
      <p style={proseStyle}>
        Well into the second year, de Kooning <strong>gave up</strong>. He pulled the painting off its stretcher (the wooden frame a canvas is tacked onto) and set it aside, beaten, as a failure. After all that labor, the figure would not resolve, and he abandoned it.
      </p>
      <p style={proseStyle}>
        What happened next is the famous part, and it deserves to be told carefully, because it is the <strong>standard account</strong> rather than a verbatim-recorded scene. The art historian <strong>Meyer Schapiro</strong> (1904&ndash;1996; one of the most respected critics and scholars of the era, a man whose opinion carried real weight) came by the studio. He looked at the abandoned canvas, and he encouraged de Kooning to keep going. De Kooning went back to it and finished it. The critic <strong>Peter Schjeldahl</strong> later called that visit &ldquo;history&rsquo;s luckiest studio visit.&rdquo; The outline of this is well documented; the <em>degree</em> of Schapiro&rsquo;s influence, and exactly what was said, have been questioned over the years, so hold it as the well-attested story it is, not as a transcript. However much credit the visit truly deserves, de Kooning did abandon the picture and did come back, and the painting that hangs in New York is the one he came back to.
      </p>
    </article>
  )
}

function WmnLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="More than life-size, and staring at you" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tand in front of it. The painting is <strong>portrait orientation</strong>, taller than it is wide, about <strong>six feet four inches tall by four feet ten inches across</strong> (192.7 by 147.3 cm), so the woman is <strong>larger than life-size</strong> and looms over you. She is frontal, seated, and she fills the canvas. The first thing the picture does is <em>confront</em> you, not invite you.
      </p>
      <p style={proseStyle}>
        Go to the <strong>face</strong>, because the face is where everyone goes. Two things hit at once: the <strong>enormous staring eyes</strong>, fixed and frontal and aimed straight out at you, and below them the <strong>bared toothy grin</strong>, a wide smile splitting the head. The grin is the strangest thing in the picture. It reads, at first, like the broad cheerful smile off an advertisement, the kind of <strong>American billboard smile</strong> that sells you something. And that is not an accident of resemblance: in the <em>preparatory studies</em>, the mouth was a smile de Kooning <strong>literally clipped from a magazine</strong>, a glistening grin from a Camel cigarette &ldquo;T-Zone&rdquo; advertisement, and pasted onto the figure. In the finished canvas the mouth is painted rather than collaged, but it still carries that ad-smile in its bones. Cheerful pin-up and bared snarl, in the same set of teeth.
      </p>
      <p style={proseStyle}>
        De Kooning&rsquo;s own explanation of the grin reached past the billboard, all the way back to the ancient world:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        &ldquo;Maybe the grin. It&rsquo;s rather like the Mesopotamian idols, you know. They always stand up straight looking to the sky with this smile, like they were just astonished about the forces of nature&hellip; That I was very conscious of.&rdquo;
      </blockquote>
      <p style={proseStyle}>
        That is the key thing he said about her, from a 1960 interview (published in the little magazine <em>Location</em> in 1963). Not a portrait of a particular woman and not, by his own account, an attack on one: an <strong>idol</strong>, a frontal staring grinning figure out of the deep past, set down in the middle of modern New York.
      </p>

      <SectionHeader accent={accent} label="The body" title="Flesh, and the daring of painting it" />
      <p style={proseStyle}>
        Now the <strong>body</strong>. It is massive, frontal, built in smeared <strong>pinks, ochres and reds</strong> that make it insistently <em>fleshly</em>. De Kooning made a sharp point about that color. In the same interview he noted that it had once been daring to paint a figure red or blue, the way the early modernists shocked people, &ldquo;I think now it is just as daring to make it flesh-colored.&rdquo; (You will also see attached to him a more famous one-liner, &ldquo;flesh was the reason oil paint was invented&rdquo; &mdash; a remark genuinely associated with de Kooning but passed down without a fixed source or date, so treat it as a saying often credited to him rather than a documented quotation.) The flesh tones are the point either way: in a moment when serious painting had gone abstract, painting a body plainly as <em>flesh</em> was the transgressive move.
      </p>

      <SectionHeader accent={accent} label="The surface" title="Slashing strokes, and a body that won’t hold still" />
      <p style={proseStyle}>
        Then look at <strong>how it is painted</strong>, because this is where <em>Woman I</em> stops being a picture of a woman and becomes something stranger. The marks <strong>slash</strong>. They are fast, thick, drippy, scraped, the same gestural violence Pollock and the rest used for pure abstraction, here building a body instead of avoiding one. Watch the <strong>edges</strong>: there is almost no stable line between the figure and the space around her. Arms, shoulders and background <strong>bleed into one another</strong>, so the woman keeps coming together and falling apart as your eye moves. She is not sitting calmly inside a room; she is being made and unmade in the same churning paint as everything around her.
      </p>
      <p style={proseStyle}>
        And the whole surface is a <strong>record of its own making</strong>. Thin drippy passages sit beside thick matte slabs; scraped-down areas show the ghosts of earlier states underneath; a metallic glint catches here and there. This is the visible residue of those two years, the painting and effacing and repainting roughly fifty times. The picture does not hide the violence it took to make it. It is the violence it took to make it.
      </p>
    </article>
  )
}

function WmnBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="The figure was supposed to be dead" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o see what <em>Woman I</em> broke, you have to see what the rule was in 1950. The leading edge of Abstract Expressionism had pushed <strong>toward total abstraction</strong>. Pollock&rsquo;s all-over drip canvases had no figure in them at all; the color-field fields of Rothko and Newman were pure floating color and nothing else. The recognizable human figure was treated as the thing modern painting had finally <strong>outgrown</strong> &mdash; serious avant-garde painting was non-objective, meaning it depicted no thing, no person, no scene. The figure was, by common agreement, finished.
      </p>

      <SectionHeader accent={accent} label="The break" title="Figure and paint-violence, one event" />
      <p style={proseStyle}>
        De Kooning <strong>refused to give up the figure</strong>, and then did something more radical than simply keeping it: he <strong>fused the figure with full gestural abstraction</strong>. The woman is not drawn first and painted second, a body set carefully inside an illusion of space. She is <strong>built and destroyed in the very same violent brush-marks as the abstraction around her</strong>, so that figure and ground, image and paint-action, become the <em>same event</em>. The female body turns into a <strong>site of paint-violence</strong> &mdash; scraped, repainted, smeared, half-dissolved &mdash; rather than a subject depicted sitting calmly in a believable room. The abstraction is not the background to the woman; the woman <em>is</em> the abstraction, given a face and teeth and eyes.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="You could keep the figure and the fury both" />
      <p style={proseStyle}>
        What this proved is the whole reason the picture matters. Gestural abstraction did <strong>not</strong> require abandoning the human image. You could keep the figure <em>and</em> keep the radical, all-over, action-painting surface; you did not have to choose. <em>Woman I</em> reopened the figure for a postwar avant-garde that had declared it dead, and it made de Kooning the great <strong>counter-argument</strong> to the idea that abstraction&rsquo;s only honest endpoint was pure non-objectivity. There is one more thread worth pulling: that grin was collaged from an <strong>advertisement</strong>, and an artist building a serious painting out of a clipped cigarette ad was, a few years early, doing exactly what <strong>Pop art</strong> would soon make its whole program. The picture points backward to ancient idols and forward to the billboard at once. That double reach, refusing the orthodoxy of its own moment in both directions, is the break.
      </p>
    </article>
  )
}

function WmnAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="New York · 1953" title="The picture the museum found frightening" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1953</strong>, the six <em>Women</em> went on the wall at the <strong>Sidney Janis Gallery</strong> in New York, and they detonated. This was the show that launched the series publicly, and it split the room: here was the most prominent of the Abstract Expressionists turning his back on pure abstraction and hanging up a row of ferocious grinning women. To the painters who had bet everything on non-objective art it looked like apostasy; to others it looked like the most alive painting in the city.
      </p>
      <p style={proseStyle}>
        The <strong>Museum of Modern Art</strong> bought <em>Woman I</em> that same year. It did not buy it comfortably. The acquisition committee approved it only <strong>grudgingly</strong>, and the record of their decision is one of the great honest moments in museum history: they noted that they <strong>found the picture quite frightening, but felt that it had intense vitality and liked the quality of the color</strong>. They were unsettled, and they bought it anyway, because it was undeniable. The credit line reads simply <em>Purchase</em>; the accession number is 478.1953; it has hung in MoMA ever since.
      </p>

      <SectionHeader accent={accent} label="The debate" title="Idol, pin-up, or attack?" />
      <p style={proseStyle}>
        Ever since, the painting has carried a <strong>controversy</strong> that it has never quite resolved, and the honest thing is to lay out the sides rather than pick one. Later critics, feminist critics especially, read the snarling, devouring, more-than-life-size female as an act of <strong>misogyny</strong>, the woman as a thing torn apart by a male painter&rsquo;s aggression. It is a serious reading and the picture invites it: the violence is real and it is aimed at a female body.
      </p>
      <p style={proseStyle}>
        De Kooning himself was <strong>ambivalent</strong>, and resisted the verdict. He insisted the grin and the figure came partly out of <strong>humor</strong>, and partly out of the whole long image-history of women in art, &ldquo;the idol, the Venus, the nude,&rdquo; rather than out of hatred. He tied the grin to those ancient Mesopotamian idols, astonished at the forces of nature, not to any real woman he wanted to savage. Both of these are on the table at once, and the picture does not settle the question for you. It is genuinely a <strong>debate</strong>, not a solved case: a painting violent enough to read as an attack, made by a man who said it was an idol and a joke, hanging in a museum that admitted it was frightening and bought it anyway. The fact that it can hold all of that at once is a large part of why it never lets you go.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'woman-i': { figure: WmnFigure, making: WmnMaking, looking: WmnLooking, break: WmnBreak, afterlife: WmnAfterlife },
```
