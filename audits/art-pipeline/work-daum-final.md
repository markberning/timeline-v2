# FINAL — *"Daum" Marries Her Pedantic Automaton "George" in May 1920, John Heartfield Is Very Glad of It* (Grosz, 1920)

Reconciled work-read for the art vertical, id `daum`. Every [BLOCKER]/[FIX] from the fact, read, and frame gates folded; voice + format contract enforced. **PART A** is the `DAUM` const (drop into `src/lib/art-content.ts`, register in `ART_WORK_CONTENT`); **PART B** is the five `Dau*` chapter components + the NARRATIVES registry line (drop into `art-section-reader.tsx`). Identifiers, section-ids, and component names are identical to the draft. Do not commit.

---

## PART A — the const

```ts
export const DAUM: ArtWorkContent = {
  id: 'daum',
  name: 'Daum Marries Her Pedantic Automaton George',
  shortName: 'Daum Marries',
  year: 1920,
  artist: 'George Grosz',
  artistId: 'grosz',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Watercolour, pen and ink, and collage on watercolour board',
  dimensions: '1 ft 4 1/2 in × 11 7/8 in',
  location: 'Berlinische Galerie, Berlin',
  acquired: 'Acquired by the Berlinische Galerie in 1995, with funds from the Stiftung Deutsche Klassenlotterie Berlin',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 9, total: 9 },
  hook: 'A wedding announcement to a friend, in which Grosz paints himself as a clockwork robot, his half-naked bride beside him, and the machine-husband turns away from her body to do sums.',
  heroImage: ART_IMG.groszDaum,
  heroCredit: 'Grosz, "Daum" Marries Her Pedantic Automaton "George" in May 1920, John Heartfield Is Very Glad of It, 1920 · Berlinische Galerie, Berlin',
  heroAspect: 0.72, // 30.2 × 42 cm → W/H ≈ 0.72, PORTRAIT, a small sheet
  heroFit: 'contain', // the whole portrait sheet, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1920', k: 'Made' },
    { v: '1′4½″ × 11⅞″', k: 'Dimensions' },
    { v: 'Berlinische Galerie', k: 'Now at' },
  ],
  sections: [
    { id: 'berlin', eyebrow: 'Berlin · 1920', dateLabel: 'May 1920', title: 'A wedding announcement, drawn in acid', blurb: 'Grosz comes home from the war to a Berlin of revolution, hyperinflation, and amputees, joins Berlin Dada alongside Heartfield, Hausmann and Höch, and marries Eva Peter the same month he makes this picture about the marriage.', progress: 0.08 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1919–1920', title: 'When Dada stopped playing and started accusing', blurb: 'Zurich Dada laughed and made nonsense. Berlin Dada took the scissors and the man-machine and turned them into a weapon, aimed at the bourgeois male and the militarist order.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The sheet', dateLabel: '1 ft 4½ in × 11⅞ in', title: 'A painted bride beside a pasted machine', blurb: 'Two opposed techniques on one small sheet: a soft hand-painted woman against a groom cut from press photographs, the irreal city behind them, the numbers he does instead of looking at her.', progress: 0.56 },
    { id: 'reading', eyebrow: 'What it says', dateLabel: '1920', title: 'The husband who does sums at his own wedding', blurb: 'The joke, told straight: at the moment the bride bares her body and her desire, the automaton turns to his arithmetic. Sensuality against cold mechanism, with the marriage as the alibi for a portrait of a dead bourgeois man.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1922–today', title: 'From a Malik portfolio to a Berlin museum', blurb: 'Grosz reproduced it in his 1922 portfolio as a meta-mechanical construction; one road from it runs to Heartfield’s anti-Nazi montage, the other into the cold Weimar realism of Neue Sachlichkeit; it surfaced in the Berlinische Galerie in 1995.', progress: 0.96 },
  ],
  provenance: [
    { year: '1920', who: 'George Grosz (the artist)', place: 'Berlin', note: 'Made in 1920, the month of Grosz’s own marriage to Eva “Maud” Peter on 22 May 1920. The work is, among other things, an in-joke wedding announcement dedicated to his closest collaborator, John Heartfield.', price: null },
    { year: '1922', who: 'Grosz / Malik-Verlag', place: 'Berlin', note: 'Reproduced (classed by Grosz as a “meta-mechanical construction”) in his Malik-Verlag portfolio Mit Pinsel und Schere: 7 Materialisationen (“With Brush and Scissors: 7 Materialisations”), which gathered his Dada works of 1919–1922.', price: null },
    { year: '1922–1995', who: 'Owners not documented', place: 'unknown', note: 'The chain between Grosz’s studio and the museum is not documented in accessible sources, so no intervening owners are asserted here.', price: null },
    { year: '1995–today', who: 'Berlinische Galerie', place: 'Berlin', note: 'Acquired by the Berlinische Galerie, the Berlin state museum of modern art, photography and architecture, in 1995, with funds from the Stiftung Deutsche Klassenlotterie Berlin. On view. (Public domain in the US as a work published before 1930; Grosz died in 1959, so any “©” notice on museum pages is an EU claim that runs through 2029.)', price: null, museum: true },
  ],
  figures: [
    { name: 'George Grosz', role: 'The artist · and the automaton groom', palette: ['#8a4a3a', '#3a2018', '#100805'] },
    { name: 'Eva “Maud” Peter', role: 'His bride · “Daum” is the anagram of “Maud”', palette: ['#b08a6a', '#5a3c2a', '#16100a'] },
    { name: 'John Heartfield', role: 'The dedicatee · co-inventor of political photomontage', palette: ['#5a5046', '#2e2820', '#100c08'] },
    { name: 'Berlin Dada', role: 'Grosz, Heartfield, Hausmann, Höch, Huelsenbeck', palette: ['#7a5a2a', '#3a2c14', '#0e0a05'] },
    { name: 'The man-machine', role: 'Grosz’s standing emblem of the mechanised bourgeois male', palette: ['#7a7a72', '#3a3a34', '#101010'] },
  ],
  annotations: [
    { label: 'The automaton groom (Grosz himself)', where: 'Right of centre, the smaller figure, a man with a whitish-grey head like a mask', detail: 'This is the “pedantic automaton ‘George’” of the title, and it is Grosz’s own self-portrait: a man pieced together from body and machine parts, his head a grey mask. What matters is what he does not do. He does not look at his bride. The groom at his own wedding has his attention somewhere else entirely.' },
    { label: 'He is literally collaged', where: 'The groom’s body, set against the hand-painted bride', detail: 'Where the bride is drawn and painted by hand, the husband is assembled from photographs cut out of newspapers and magazines and pasted down (collage, also called photomontage when the scraps are press photographs). The two halves of the picture use two opposed techniques on purpose: living, painted flesh on one side, cut-and-pasted machine-man on the other. The individual clippings cannot be reliably identified, so what matters is the method, not which photo is which.' },
    { label: '“Daum,” the bride', where: 'Beside the groom, a pale woman in underwear and a floppy grey hat', detail: 'The bride is rendered in soft, traditional ink and watercolour: undressed, sensual, turned toward the machine-man who will not turn toward her. “Daum” is an anagram of “Maud,” Grosz’s nickname for his wife, Eva (her surname is recorded as both Peter and Peters). She is a spectacle, not a person, the warm pole of an argument Grosz is making about men. Vivid painted flesh against cold pasted mechanism, the whole tension of the picture in one pairing.' },
    { label: 'The machine parts', where: 'Through and around the groom: gears, fittings, apparatus', detail: 'Clockwork and machine fittings mark the husband as a wind-up mechanism rather than a man. This is the man-machine motif at the centre of Berlin Dada, Grosz’s recurring emblem of a rationalised, emotion-dead modern male (he built faceless robot-men the same year in his Republican Automatons, now at MoMA). The body is not a body; it is an apparatus.' },
    { label: 'The numbers and diagrams', where: 'Near the automaton, figures and calculations', detail: 'The groom attends to what his publisher Wieland Herzfelde called “soberly pedantic arithmetical problems”: numbers, figures, diagrams, set right at the moment of intimacy. The arithmetic stands in for his emotional deadness. The exact sums shown are not the point, and are not reliably transcribed; the point is that a man is doing maths instead of looking at his half-naked bride.' },
    { label: 'The irreal city behind them', where: 'The background: hard-edged architecture and perspective lines', detail: 'Behind the couple is an empty, de-peopled urban backdrop of architectural fragments and steep perspective, openly borrowed from the metaphysical city-and-mannequin paintings of Giorgio de Chirico, the same source Grosz mined for all his 1920 automaton pictures. It is a stage set for machines, not a place where people live.' },
  ],
  lineage: {
    parents: [
      { label: 'Cubist collage', mode: 'art' },
      { label: 'de Chirico’s metaphysical city', mode: 'art' },
      { label: 'The Weimar republic', mode: 'civ' },
    ],
    children: [
      { label: 'Political photomontage', mode: 'art' },
      { label: 'Heartfield’s anti-Nazi work', mode: 'art' },
      { label: 'Neue Sachlichkeit (New Objectivity)', mode: 'art' },
      { label: 'Weimar satire', mode: 'art' },
    ],
  },
}
```

---

## PART B — the five chapter components + registry line

```tsx
// ─────────────────────────────────────────────────────────────
// "Daum" Marries Her Pedantic Automaton "George" (Grosz, 1920) — five chapters
// ─────────────────────────────────────────────────────────────
function DauBerlin({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Berlin · 1920" title="A wedding announcement, drawn in acid" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he title is a whole sentence, and worth reading start to finish: <em>&ldquo;Daum&rdquo; Marries Her Pedantic Automaton &ldquo;George&rdquo; in May 1920, John Heartfield Is Very Glad of It</em>. It announces a wedding. The bride is &ldquo;Daum,&rdquo; the groom is a &ldquo;pedantic automaton&rdquo; (an automaton is a clockwork machine built to move like a living thing) named &ldquo;George,&rdquo; the date is May 1920, and a man named <strong>John Heartfield</strong> is glad about it. Every piece of that is true, and every piece is also a joke, because the man who painted it was getting married himself that month, and the automaton named George is <strong>George Grosz</strong>, the painter, drawing himself as a robot at his own wedding.
      </p>
      <p style={proseStyle}>
        <strong>George Grosz</strong> (1893&ndash;1959) had come home from the <strong>First World War</strong> to a Berlin that had lost it. Germany was defeated; the Kaiser had fled; a shaky new democracy, the <strong>Weimar Republic</strong> (named for the town where its constitution was written, because Berlin itself was too violent to meet in safely), was trying to hold a country that kept erupting into street-fighting. The pavements were full of war-cripples, men rebuilt from crutches and prosthetic limbs, begging beside well-fed profiteers. Grosz hated all of it: the generals, the war, and above all the comfortable, hypocritical German middle class he held responsible for the whole catastrophe. His drawings were already notorious for their venom.
      </p>

      <SectionHeader accent={accent} label="The circle" title="Berlin Dada, and the friend in the title" />
      <p style={proseStyle}>
        In 1919 Grosz joined <strong>Berlin Dada</strong>. <strong>Dada</strong> was the anti-art movement born in neutral Zurich in 1916 as a howl of disgust at the war (the name <em>Dada</em> means nothing on purpose, a scrap of baby-talk chosen because it refused to mean anything sensible). But the Berlin branch was different in temper from the Zurich original. Where Zurich Dada played nonsense games, the Berlin circle, Grosz, Raoul Hausmann, Hannah H&ouml;ch, Richard Huelsenbeck, and the brothers <strong>John Heartfield</strong> and Wieland Herzfelde, aimed the same scissors-and-nonsense spirit straight at German militarism and the bourgeoisie.
      </p>
      <p style={proseStyle}>
        This was not a safe pose. The summer of 1920 brought the <strong>First International Dada Fair</strong>, the movement&rsquo;s loudest moment, and it ended with Grosz and his fellow organisers hauled into court and fined for <strong>insulting the German army</strong>. Berlin Dada&rsquo;s enemies were real enough to prosecute it.
      </p>
      <p style={proseStyle}>
        The friend named in the title, <strong>John Heartfield</strong>, was Grosz&rsquo;s closest ally in that circle. (He was born <em>Helmut Herzfeld</em>; he anglicised his name to <em>John Heartfield</em> in protest against German anti-British war fever, a small act of Dada in itself.) Heartfield and Grosz were pioneering <strong>political photomontage</strong> together, the art of making pictures by cutting up and reassembling printed photographs, and Heartfield&rsquo;s brother Wieland ran the left-wing Malik-Verlag that published Grosz. So the title&rsquo;s closing clause, &ldquo;John Heartfield is very glad of it,&rdquo; is an inside joke between collaborators: a wedding announcement aimed at a friend, the way you might dedicate a private cartoon.
      </p>

      <SectionHeader accent={accent} label="May 1920" title="The bride called Daum" />
      <p style={proseStyle}>
        And there was a real wedding. On <strong>22 May 1920</strong>, Grosz married <strong>Eva Peter</strong> (the surname is recorded as both Peter and Peters). His pet name for her was <strong>Maud</strong>, and the bride in the title, <strong>&ldquo;Daum,&rdquo; is an anagram of &ldquo;Maud&rdquo;</strong>, the same four letters, rearranged. So the picture is, on its surface, a wedding portrait: Maud, scrambled into Daum, marrying her automaton George, in the very month it happened. What makes it a Dada picture rather than a keepsake is what Grosz does with that occasion, which is to turn his own marriage into a savage diagram of everything he thought was wrong with the men of his class.
      </p>
    </article>
  )
}

function DauBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Dada that played, and collage that only built a surface" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        wo things came before this picture and set it off. The first is the kind of Dada it reacts against. <strong>Zurich Dada</strong>, the original, was abstract and playful: sound-poems, chance arrangements, nonsense performed at the Cabaret Voltaire, an anti-art that refused meaning on principle. It laughed; it did not accuse. The second is the kind of collage that existed before. A decade earlier Picasso and Braque had glued scraps of newspaper and oilcloth onto their Cubist pictures, but they used those scraps as neutral <strong>texture and form</strong>, a fragment chosen for how it looked on the surface, not for what it said.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="The man-machine, and the scissors aimed at a target" />
      <p style={proseStyle}>
        Berlin Dada, and this picture, weaponise both of those tools. Take the <strong>man-machine</strong> first. Grosz casts himself, and through himself the respectable bourgeois male, as a <strong>clockwork automaton</strong>: emotionless, rationalised, sexually dead, kin to the war-veteran rebuilt from prosthetics that Grosz drew on the streets outside. This is the opposite of the Italian Futurists, who a few years earlier had <em>celebrated</em> the machine as speed and glory (Chapter on Futurism). Grosz turns the body-as-machine into a diagnosis: the modern man has been hollowed into an apparatus, and that is an accusation, not a hymn.
      </p>
      <p style={proseStyle}>
        Then take the <strong>collage</strong>. The groom is literally cut out of press photographs and reassembled, the technique Grosz and Heartfield were pioneering, but here it is pointed at a target. Pasted reality, the actual printed image-world of 1920 Germany, is turned against the society that produced it. Collage stops being a formal game about a picture&rsquo;s surface and becomes <strong>political and sexual montage</strong>. Dada stops playing and starts shooting: the man-machine and the scissors become a satirical weapon aimed at the bourgeoisie.
      </p>

      <SectionHeader accent={accent} label="Grosz, in general" title="Drawings done as an act of protest" />
      <p style={proseStyle}>
        Grosz left no documented statement about this particular picture. But he said plenty, again and again, about why he drew at all, and it is worth hearing in his own words, kept as a <strong>general statement of his aims</strong> rather than a caption for this one sheet. Recalling his early work in his own memoirs and quoted ever since, Grosz described it like this:
      </p>
      <p style={italicStyle}>
        &ldquo;My drawings expressed my despair, hate and disillusionment. I drew drunkards; puking men; men with clenched fists cursing at the moon&hellip;&rdquo;
      </p>
      <p style={proseStyle}>
        That is the engine behind the wedding picture. Grosz also said, in much-quoted form, that he drew &ldquo;as an act of protest,&rdquo; trying to convince the world that it was ugly, sick and hypocritical; and he liked to say his art should serve as a kind of weapon in a political fight (the wording of that last claim circulates in several versions, so take the sense and not a quoted sentence). All of it is Grosz&rsquo;s standing creed, not a remark about Daum. The despair, the hate, the disillusionment is what he poured into a portrait of his own marriage.
      </p>
    </article>
  )
}

function DauLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The sheet" title="Small, and built from two opposite techniques" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first thing is scale. For all its fame this is a <strong>small sheet</strong>, about <strong>one foot four and a half inches tall by just under a foot wide</strong> (roughly 42 by 30 centimetres), <strong>portrait-shaped</strong>, taller than it is wide. It is not a wall-sized canvas. In fact it is not a canvas at all: it is a work on paper, made in <strong>watercolour, pen and ink, and collage on watercolour board</strong>. (It is sometimes described as &ldquo;on canvas,&rdquo; but the owning museum records a drawing-and-collage on board, and the museum is the authority.) That matters, because the whole picture turns on a contrast between two techniques, and both are visible on the surface.
      </p>
      <p style={proseStyle}>
        The two techniques sit side by side. The <strong>bride is painted</strong>, by hand, in soft ink and watercolour: a pale, living woman. The <strong>groom is pasted</strong>, cut from photographs and reassembled into a machine. One half of the picture is drawn flesh; the other half is glued apparatus. Grosz did that on purpose, and it is the first thing to register, because the meaning of the whole image is carried by that split between a hand-made woman and a machine-made man.
      </p>

      <SectionHeader accent={accent} label="The groom" title="A robot with a mask for a head" />
      <p style={proseStyle}>
        The groom stands right of centre, the smaller of the two figures. He is the <strong>&ldquo;pedantic automaton &lsquo;George&rsquo;&rdquo;</strong> of the title, and he is Grosz&rsquo;s self-portrait: a man assembled from body parts and machine parts, his head a <strong>whitish-grey mask</strong>, gears and fittings marking him as a wind-up mechanism. His attention is <strong>not</strong> on his bride. The whole drama of the picture is in that turning-away: a husband at his own wedding who will not look at the woman beside him.
      </p>
      <p style={proseStyle}>
        Around and behind the figures runs an <strong>irreal city</strong>: empty, hard-edged architecture and steep perspective lines, a place with no people in it. Grosz lifted this directly from <strong>Giorgio de Chirico</strong>, the Italian painter whose eerie, depopulated piazzas and faceless mannequins (his &ldquo;metaphysical&rdquo; pictures) Grosz drew on all through 1920. It is a stage set built for machines, not a street where anyone lives, and it presses the couple forward against a backdrop as cold as the groom himself.
      </p>

      <SectionHeader accent={accent} label="The clippings" title="A man you cannot read scrap by scrap" />
      <p style={proseStyle}>
        A collage like this is easy to over-read. The groom is built from photographs cut out of newspapers and magazines, but the <strong>individual clippings cannot be reliably identified</strong>, which paper, which photo, which machine, and the sources do not pin them down. The technique is the meaning here, not the inventory: a body made of pasted press-images, set against a bride made of paint. What the scraps add up to is a man assembled from the mass-media stream, not a man at all.
      </p>
    </article>
  )
}

function DauReading({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The joke" title="He does sums while she undresses" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>N</DropCap>
        ow the bride. &ldquo;Daum&rdquo; stands beside the machine-man, painted soft and pale in ink and watercolour: <strong>largely undressed</strong>, in underwear and a floppy grey hat, sensual, turned toward her husband. She is all living flesh and present desire. And the husband, at the very moment she offers herself, <strong>turns away to do arithmetic</strong>. Numbers, figures, calculations cluster around the automaton; he attends, as Grosz&rsquo;s publisher Wieland Herzfelde put it, to &ldquo;soberly pedantic arithmetical problems.&rdquo; That is the joke, told without a punchline: a wedding night in which the groom does sums.
      </p>
      <p style={proseStyle}>
        The contrast is the entire point. <strong>Warm painted flesh against cold pasted mechanism.</strong> Desire on one side, calculation on the other. The marriage, as Herzfelde put it, comes between bride and groom &ldquo;like a shadow,&rdquo; because the groom is a machine and a machine cannot want anything; it can only compute. Grosz is not drawing a difficult marriage. He is drawing the impossibility of one, when the husband has been hollowed out into an apparatus.
      </p>
      <p style={proseStyle}>
        It is worth saying that the bride is a spectacle here, not a person. The half-undressed woman offered up to the viewer&rsquo;s eye was the default visual grammar of the period, and Grosz reaches for it without questioning it: her body is a device in an argument about men. His own Berlin Dada colleague <strong>Hannah H&ouml;ch</strong> was, in these same years, turning her scissors on exactly that convention, cutting up the bride and the male gaze as her own subject. Grosz does not.
      </p>

      <SectionHeader accent={accent} label="The target" title="The marriage is the alibi" />
      <p style={proseStyle}>
        And the man being skewered is not really &ldquo;George&rdquo; the individual; he is a type. The <strong>man-machine</strong> was Grosz&rsquo;s standing emblem for the whole <strong>bourgeois male</strong> of postwar Germany: rationalised, emotion-dead, sexually finished, the respectable husband as a wind-up doll. The same year, Grosz painted two faceless robot-men in his <em>Republican Automatons</em> (now at the Museum of Modern Art) to make the same charge about the new republic&rsquo;s obedient citizens. (That picture, not this one, is the one sometimes wrongly tied to &ldquo;Marshal P&eacute;tain&rdquo;; this wedding picture has nothing to do with P&eacute;tain, and the short title for it is <em>&ldquo;Daum&rdquo; Marries Her Pedantic Automaton &ldquo;George.&rdquo;</em>)
      </p>
      <p style={proseStyle}>
        So the wedding is the <strong>alibi</strong>. The real subject is the anti-bourgeois, anti-militarist satire that drove all of Grosz&rsquo;s work: the diagnosis that the comfortable German man had become a machine, dead to feeling, fit only to calculate, and that he carried that deadness into the most intimate room in his life. Grosz aimed the charge at his whole class, and, with characteristic nerve, cast himself, the groom, as its specimen.
      </p>
    </article>
  )
}

function DauAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1922" title="Brush and scissors, gathered in a portfolio" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n <strong>1922</strong> Grosz gathered his Dada works of the previous years into a portfolio published by the family press, the Malik-Verlag, under a title that names the whole method: <em>Mit Pinsel und Schere: 7 Materialisationen</em>, &ldquo;With Brush and Scissors: 7 Materialisations.&rdquo; <strong>Brush and scissors</strong>, paint and collage, the two techniques the wedding picture sets against each other, are right there in the name. The work was reproduced inside it, classed by Grosz as one of his <strong>&ldquo;meta-mechanical constructions&rdquo;</strong> (in German, <em>metamechanische Konstruktionen</em>), his own genre-tag for the man-machine assembly, not a second line painted onto the picture. After that, the trail goes quiet.
      </p>

      <SectionHeader accent={accent} label="Provenance · 1995" title="Surfacing in a Berlin museum" />
      <p style={proseStyle}>
        The picture&rsquo;s ownership history (its <strong>provenance</strong>, the documented chain of who has held a work, from the artist&rsquo;s hand to now) has a long gap in the middle. Between Grosz&rsquo;s studio in 1920 and the museum, the accessible sources name no intervening owners, so none are invented here. Where the record picks up again is <strong>1995</strong>, when the work was acquired by the <strong>Berlinische Galerie</strong>, Berlin&rsquo;s state museum of modern art, photography and architecture, with funds from the <strong>Stiftung Deutsche Klassenlotterie Berlin</strong> (a Berlin lottery foundation that supports the city&rsquo;s cultural purchases). That is roughly seventy-five years after Grosz made it. It hangs in that collection today.
      </p>
      <p style={proseStyle}>
        A note on the rights, because museum pages will show a &ldquo;&copy;&rdquo; on this image. The work was <strong>published in 1920</strong>, which makes it <strong>public domain in the United States</strong> (US copyright on a work this old turns on the date of publication). In Germany and the European Union, where copyright runs for the artist&rsquo;s life plus seventy years, it stays protected until the end of <strong>2029</strong> (Grosz died in 1959). The copyright notice you see is a European claim; it does not govern use in the United States.
      </p>

      <SectionHeader accent={accent} label="After" title="Two roads out of one small sheet" />
      <p style={proseStyle}>
        The collaborator named in the title, <strong>John Heartfield</strong>, went on to turn the cut-and-paste technique he and Grosz pioneered into the most ferocious <strong>anti-Nazi photomontages</strong> of the 1930s, the line of political collage that runs straight out of pictures like this one. Grosz&rsquo;s own road led the other way, into paint. The clinical, unsentimental Weimar realism that art history calls <strong>Neue Sachlichkeit</strong> (&ldquo;New Objectivity&rdquo;) took the cold diagnostic eye of this picture and dropped the Dada scissors; Grosz became one of its central figures, and you can already see it here in the surgical way the marriage is laid open. He himself, his name on a Nazi blacklist, left Germany for the United States in 1933, just before Hitler took power, and lived out most of his career in New York before dying in Berlin in 1959.
      </p>
      <p style={proseStyle}>
        The wedding picture has aged into one of the defining images of <strong>Berlin Dada</strong>: a small sheet, barely a foot and a half tall, that holds the whole bitterness of the movement in a single domestic joke. A man marries a woman and turns away from her to do sums; the husband is a machine and the artist is the husband. It is one of the sharpest small things Berlin Dada made, Grosz&rsquo;s despair, hate and disillusionment, the creed he drew by, pointed for once not at the generals or the profiteers but at himself, at his own wedding, in the month it happened.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  daum: { berlin: DauBerlin, break: DauBreak, looking: DauLooking, reading: DauReading, afterlife: DauAfterlife },
```
