# FINAL — Pauline Boty, *It's a Man's World I* (with companion *II*)

id: `its-a-mans-world` · work-read, Pop Art · 54th and final work-read.
Reconciled from the draft + the three gates (fact / read / frame). Every [BLOCKER] and [FIX] folded.
Source of truth: `audits/art-pipeline/work-its-a-mans-world-factpack.md`.

## PART A — the const

```ts
// ─────────────────────────────────────────────────────────────
// Work, It's a Man's World I (Boty, 1964) with its companion It's a Man's World II
// (1964–65). TWO SEPARATE CANVASES read as a pair, NOT a single diptych (common
// error, per factpack §8). I = the field of famous MEN; II = the field of nameless
// female NUDES. Boty was the only prominent woman of British Pop; died 1966 at 28
// (malignant thymoma, NOT leukemia), her work lost for ~30 years then rediscovered.
// In copyright (Boty d.1966) → shown small, fair use. Authored through the art
// content pipeline. Chapter prose in art-section-reader.tsx
// NARRATIVES['its-a-mans-world'] (Man… prefix).
// HANDLED TRAPS: I-vs-II swap; "diptych"/one-canvas error; Ali = Cassius Clay (one
// person); year = 1964 (the date of canvas I, the lead/hero; the PAIR runs 1964–65);
// Thelonious Monk is a CERTAIN figure per the estate key, NOT tentative; the tentative
// IDs are the matador, a SECOND unidentified jazz musician (Sonny Boy Williamson /
// Lester Young floated), the Plains Indian and the USAF pilot; cancer = malignant
// thymoma.
// ─────────────────────────────────────────────────────────────
export const ITS_A_MANS_WORLD: ArtWorkContent = {
  id: 'its-a-mans-world',
  name: 'It’s a Man’s World I',
  shortName: 'It’s a Man’s World',
  year: 1964, // the date of canvas I (the lead + hero); the PAIR runs 1964–65 (stats/prose)
  artist: 'Pauline Boty',
  artistId: 'boty',
  movement: 'Pop Art',
  movementId: 'pop',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas with collage',
  dimensions: '5 ft 0 1/4 in × 4 ft 0 in',
  location: 'Private collection',
  acquired: 'Held by the estate of Pauline Boty; in a private collection (never publicly sold for a recorded price)',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Pop Art', index: 9, total: 9 },
  hook: 'The only prominent woman of British Pop assembles a field of the world’s famous men, JFK, Lenin, Einstein, Elvis, and answers it on a second canvas with a stack of nameless female nudes. A feminist Pop voice years before the word, then lost in a barn for thirty years.',
  heroImage: ART_IMG.botyManWorld,
  heroCredit: 'Boty, It’s a Man’s World I, 1964 · The estate of Pauline Boty · in copyright, shown small under fair use.',
  heroAspect: 0.81, // 122 × 153 cm → W/H ≈ 0.80, portrait
  heroFit: 'contain', // the whole portrait canvas, never cropped
  rights: 'in-copyright', // Boty d. 1966; in copyright in the US and UK (through 2036); NOT pd-us
  stats: [
    { v: '1964–65', k: 'Painted, the pair' },
    { v: '5′0¼″ × 4′0″', k: 'Dimensions, I' },
    { v: 'Private', k: 'Now in' },
  ],
  sections: [
    { id: 'sole-sister', eyebrow: 'London · 1962–64', dateLabel: 'c. 1962', title: 'The only woman in the room', blurb: 'British Pop by the early 1960s was a celebrated, all-male enterprise. Pauline Boty, blonde, glamorous, and written off as a face, was one of its founders and the single prominent woman in it, and the one painter in the group filming whose own work nobody on screen asked her to explain.', progress: 0.08 },
    { id: 'the-pair', eyebrow: 'The making', dateLabel: '1964–65', title: 'Two canvases, one title', blurb: 'Not one diptych but two separate paintings made as counterparts. It’s a Man’s World I gathers the world’s famous men, painted and collaged from media; It’s a Man’s World II answers with a field of nameless female nudes. Hold both, or the point goes missing.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '5 ft 0 1/4 in × 4 ft 0 in', title: 'A field of the men who run the world', blurb: 'On Canvas I: JFK and the Zapruder frame, Lenin, Einstein and Proust, Elvis and the Beatles, Muhammad Ali, a Greek statue, grand facades, and a nuclear bomber overhead. Genius, glamour, power, and violence, all of it male.', progress: 0.54 },
    { id: 'break', eyebrow: 'The break', dateLabel: 'Pop Art', title: 'A woman turns Pop’s own gaze around', blurb: 'British Pop put women on the canvas as imagery and almost never behind the brush. Boty takes Pop’s exact toolkit, the appropriated media face, and aims it at the system that made it, asking why men get to be people and women only get to be looked at. A feminist Pop voice years before the vocabulary existed.', progress: 0.76 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1966–today', title: 'A barn in Kent, and the recovery', blurb: 'Boty died of cancer in 1966 at 28, and her paintings went into a barn on her brother’s farm and were forgotten for nearly thirty years, until a curator tracked them down and a scholar rebuilt the case. The pair survives in private hands, the erasure now part of how the work reads.', progress: 0.96 },
  ],
  // Both canvases are in private collections (paulineboty.org marks each "private
  // collection unless otherwise noted"); neither has a recorded permanent museum
  // home and no purchase prices are documented, so every price field stays null.
  // The provenance IS the rediscovery story (factpack §6): barn → Mellor → Barbican
  // 1993 → Tate's scholarship → the art market into private hands.
  provenance: [
    { year: '1964–1966', who: 'Pauline Boty (the artist)', place: 'London', note: 'Painted 1964–65 as a pair, It’s a Man’s World I and II. Boty died on 1 July 1966, age 28; the bulk of her output passed to her family.', price: null },
    { year: '1966–c.1990', who: 'The Boty family (storage)', place: 'Kent', note: 'After her death most of her paintings went into a barn on her brother’s farm in Kent and sat, largely forgotten, for nearly thirty years. The work effectively dropped out of the story of British Pop.', price: null },
    { year: 'c.1990–1993', who: 'Rediscovery: David Alan Mellor', place: 'England', note: 'The curator David Alan Mellor sought out the surviving family, located and conserved a body of work, and showed it in The Sixties Art Scene in London at the Barbican, 1993. The scholar Dr. Sue Tate then built the art-historical reassessment.', price: null },
    { year: '1993–today', who: 'Private collection (the estate)', place: 'Various', note: 'Through 1990s–2010s exhibitions (Brighton 1996–97; Christie’s "When Britain Went Pop" 2013; the Thyssen-Bornemisza Madrid "Pop Myths" 2014; Lugano 2018) and the art market the works re-entered view and settled largely into private hands. No public-museum permanent home and no recorded purchase price for either canvas.', price: null },
  ],
  figures: [
    { name: 'Pauline Boty', role: 'The painter; British Pop’s sole woman', palette: ['#bf3a6a', '#3a5a4a', '#15140e'] },
    { name: 'British Pop’s male founders', role: 'Hamilton & Paolozzi (the older Independent Group), then Blake, Boshier, Phillips, the all-male scene', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'The icons of Canvas I', role: 'The famous men she assembled', palette: ['#7c3aed', '#2a1c3a', '#0e0814'] },
    { name: 'It’s a Man’s World II', role: 'The answering canvas of nameless nudes', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Mellor & Sue Tate', role: 'Rediscovered and reassessed the work', palette: ['#5a6354', '#39322a', '#120f0c'] },
  ],
  // Annotations are on Canvas I (the hero). Thelonious Monk is a CONFIRMED figure per
  // the estate's source key. The matador, a SECOND (unidentified) jazz musician, the
  // Plains Indian and the USAF pilot are estate-flagged TENTATIVE and hedged in the
  // prose. Ali = Cassius Clay are the SAME man (he changed his name in 1964), listed
  // once. Prose pointers only, no coordinates.
  annotations: [
    { label: 'The packed field of famous men', where: 'The whole canvas, read as a single crowded grid of male faces and figures', detail: 'The picture is a packed field of male faces and bodies, each one lifted from print or photographic media and re-painted or collaged in. Read it as a ranking of the world’s men, genius, glamour, power, and violence gathered into one frame, every position on it filled by a man. The crowdedness is the argument: this is the world, and it is entirely his.' },
    { label: 'Cut and re-painted from the media', where: 'Throughout, in the way each face sits as a clipped image rather than a posed portrait', detail: 'These are not figures Boty drew from life. They are appropriated images, the same celebrity-and-media raw material the men of British Pop used, some pasted in as collage and some re-painted from the source. The work is oil on canvas with collage, the magazine page and the painted hand mixed on one surface, which is exactly the Pop method turned to a new purpose.' },
    { label: 'The thinkers and the stars', where: 'Among the crowd of faces', detail: 'Look for Albert Einstein and Marcel Proust, the intellect, set beside Elvis Presley and the Beatles (John Lennon and Ringo Starr), the jazz pianist Thelonious Monk, and the film director Federico Fellini with the actor Marcello Mastroianni, the glamour. These are men Boty openly admired and desired, and naming them as admiration is part of the honesty of the picture, it is a fan’s love-letter as much as an indictment.' },
    { label: 'Power, violence, and the jet overhead', where: 'The hardware and the political faces among the figures', detail: 'A Boeing B-52 nuclear bomber flies over a grand Italian estate; Lenin stands for revolution; and the frame of John F. Kennedy’s assassination, lifted from the Zapruder home movie, sits in the field. The world’s men, the picture says, also run its wars and its killings. Muhammad Ali, the boxer, appears too (he had just changed his name from Cassius Clay in 1964, the year of the painting) alongside a classical Greek statue (Hermes with the infant Dionysus), the physical ideal.' },
    { label: 'The rose, the soft counter-note', where: 'A recurring painted flower threading through the canvas', detail: 'A painted rose recurs across the surface, Boty’s signature soft, sensual motif running against all the male hardware and politics. It is the one note in the picture that is hers rather than the world’s, a quiet floral counter-voice set among the bombers and the statesmen.' },
    { label: 'The grand facades, and the tentative faces', where: 'The architecture behind the figures, and a handful of uncertain identifications', detail: 'Grand architectural facades back the crowd, the kind of stately European frontage that signals inherited power. A few figures the estate itself flags as uncertain, so point at them gently: a matador (probably the bullfighter El Cordobés), a second jazz musician it has not pinned down (Sonny Boy Williamson and Lester Young have both been floated), an American Plains Indian in a warbonnet, and a uniformed military pilot. Describe them by type rather than over-naming them; the estate’s own source key keeps these tentative.' },
  ],
  lineage: {
    parents: [
      { label: 'British Pop’s appropriated image', mode: 'art' },
      { label: 'Mass-media photography', mode: 'art' },
      { label: 'The male-run 1960s', mode: 'civ' },
    ],
    children: [
      { label: 'Feminist art', mode: 'art' },
      { label: 'The critique of the male gaze', mode: 'civ' },
      { label: 'Rediscovered women of modernism', mode: 'art' },
    ],
  },
}
```

## PART B — the five chapter components + NARRATIVES registry comment

```tsx
// ─────────────────────────────────────────────────────────────
// It's a Man's World I & II (Boty, 1964–65) — the five chapters
// ─────────────────────────────────────────────────────────────
function ManSoleSister({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="London · 1962–64" title="The only woman in the room" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y the early <strong>1960s</strong>, British <strong>Pop art</strong> (the movement that pulled its imagery straight out of advertising, comics, film stars, and the consumer world, treating mass culture as fit subject for a painting) was a recognized, celebrated, and almost entirely <strong>male</strong> enterprise. Its founders and stars were men: <strong>Richard Hamilton</strong> and <strong>Eduardo Paolozzi</strong> of the older Independent Group (a loose London circle of artists and critics who first chewed over American mass culture in the 1950s), then the younger wave of <strong>Peter Blake</strong>, <strong>Derek Boshier</strong>, and <strong>Peter Phillips</strong>. Women turned up in Pop almost only as <em>imagery</em>, Monroe, pin-ups, ad-bodies, the object painted on the canvas. They were rarely the hand holding the brush.
      </p>
      <p style={proseStyle}>
        <strong>Pauline Boty</strong> (1938&ndash;1966) was the exception, the one widely acknowledged <strong>woman</strong> of British Pop and one of its co-founders. Her name was in the title of one of the movement&rsquo;s first shows, the November <strong>1961</strong> &ldquo;Blake, Boty, Porter, Reeve&rdquo; exhibition at the A.I.A. gallery; she was there at the founding, not a latecomer. And her gifts cut against her. She was blonde, glamorous, and photogenic, nicknamed &ldquo;the Wimbledon Bardot&rdquo; by her art-school classmates for her resemblance to the French film star <strong>Brigitte Bardot</strong>, and the art world treated her as a face more than a painter. The asymmetry was made literal on film. In <strong>1962</strong> the director <strong>Ken Russell</strong> made a BBC documentary, <em>Pop Goes the Easel</em>, featuring Boty alongside Blake, Boshier, and Phillips. Sixteen of her works appear on screen, yet, unlike her three male co-stars, <strong>she is never once asked to talk about her own work</strong>. That gap, the woman whose paintings are shown but whose voice is withheld, is the exact subject she would turn into a pair of pictures.
      </p>
      <p style={proseStyle}>
        It would be easy to flatten Boty into a tidy proto-feminist martyr, blonde genius, early death, and she has been. The truer picture has more friction in it: real ambition, real inner conflict, conventional middle-class pulls alongside the radical ones. But the bare facts of how the world handled her, glamorous woman painter taken for a model, are not invented, and they are the soil the work grows out of. She had watched, from inside the room, exactly who got to be a person and who got to be looked at. Around <strong>1964</strong> she set out to paint it.
      </p>
    </article>
  )
}

function ManThePair({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Not a diptych" title="Two canvases, one title" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        irst, clear up a confusion that haunts this work, because the meaning depends on getting it right. <em>It&rsquo;s a Man&rsquo;s World</em> is <strong>not a single painting</strong> and not a <strong>diptych</strong> (a single work made of two hinged or joined panels). It is <strong>two separate canvases</strong>, painted as counterparts under one shared title: <em>It&rsquo;s a Man&rsquo;s World I</em> and <em>It&rsquo;s a Man&rsquo;s World II</em>. One secondary source garbles this badly, describing a single &ldquo;diptych&rdquo; with nudes on one side and men on the other; that is wrong. They are two distinct pictures, made to be read as a pair. Boty built them as a question and its answer, and the answer only lands if you hold both.
      </p>
      <p style={proseStyle}>
        <em>It&rsquo;s a Man&rsquo;s World I</em>, the canvas this read leads on, is the world <strong>of men</strong>. It is a packed field of famous, admired, powerful, dangerous <strong>male</strong> faces and figures, lifted from print and photographic media and worked into one surface. The medium itself is mixed: <strong>oil on canvas with collage</strong>, some figures painted, some pasted in as clippings, exactly the appropriated-media technique the male Pop artists used. The canvas is tall, a touch over <strong>five feet by four</strong> (about 153 by 122 cm), portrait orientation, a vertical field crowded with men.
      </p>
      <p style={proseStyle}>
        <em>It&rsquo;s a Man&rsquo;s World II</em>, the slightly later companion (the pair runs <strong>1964&ndash;65</strong>, with <em>II</em> the later of the two), is the answer: the world&rsquo;s <strong>image of women</strong>. It is a stacked field of <strong>female nudes</strong>, re-painted, not pasted, from two sources at once, the soft-porn magazine and the old-master life-class tradition, set against the blue sky of an 18th-century English landscape garden (specifically the <strong>Pantheon at Stourhead</strong>, in Wiltshire).
      </p>
      <p style={proseStyle}>
        The square canvas (about 125 by 125 cm) shows the women headless or anonymous, defined by their &ldquo;parts,&rdquo; interchangeable. The pairing flattens the supposed gap between the &ldquo;high&rdquo; art nude and the &ldquo;low&rdquo; pin-up, because <strong>both</strong>, the picture says, treat a woman as a thing to be looked at. Set side by side, the two canvases make a single sentence. In <em>I</em>, the men have <strong>names</strong>, achievements, slogans (&ldquo;I am the greatest&rdquo;). In <em>II</em>, the women have <strong>none</strong>: no names, no faces, no acts, just bodies. That contrast is the whole work. The men get to be people; the women get to be looked at. Boty is not adding women painters to Pop. She is using Pop&rsquo;s own raw material to ask why the line between person and object falls exactly where it does.
      </p>
    </article>
  )
}

function ManLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A crowd of the men who run the world" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he first fact about <em>It&rsquo;s a Man&rsquo;s World I</em> is sheer density. The tall canvas is <strong>packed</strong> with male faces and figures, dozens of them, each one a clipped or re-painted scrap of media tiled and overlapped into a single crowded field. There is no single subject to settle on, because the crowd <em>is</em> the subject. Read it as a ranking, an inventory of the world&rsquo;s men, in which every slot is filled by one. Genius, fame, power, and violence are all here, and all of them wear a man&rsquo;s face.
      </p>

      <SectionHeader accent={accent} label="The thinkers and the stars" title="Einstein and Elvis, openly admired" />
      <p style={proseStyle}>
        Among the crowd are the faces she knew by name. Here is <strong>Albert Einstein</strong> and the novelist <strong>Marcel Proust</strong>, the life of the mind. Beside them, the glamour: <strong>Elvis Presley</strong>; the Beatles <strong>John Lennon</strong> and <strong>Ringo Starr</strong>; the jazz pianist <strong>Thelonious Monk</strong>; the Italian film director <strong>Federico Fellini</strong> with the actor <strong>Marcello Mastroianni</strong>, the suave faces of 1960s cinema. These are not men Boty is sneering at. They are men she openly <strong>admired and desired</strong>, and the picture wears that admiration plainly. That doubleness is the heart of it: the canvas is at once a fan&rsquo;s love-letter to the men who make the things she loves <em>and</em> a flat statement that the making is entirely theirs.
      </p>

      <SectionHeader accent={accent} label="Power, violence, the jet" title="Lenin, the bomber, the Zapruder frame" />
      <p style={proseStyle}>
        Then the harder register sits lower. A <strong>Boeing B-52</strong>, the era&rsquo;s nuclear bomber, flies overhead, the hardware of the Cold War, set above a grand Italian estate. <strong>Lenin</strong> stands for revolution. And lifted into the field is one of the most loaded images of the decade: a frame of <strong>John F. Kennedy&rsquo;s assassination</strong>, taken from the <strong>Zapruder film</strong> (the amateur home-movie footage that captured the 1963 killing in Dallas). The world&rsquo;s men, the picture says without a word, also run its wars and order its deaths. The physical ideal joins them too, the boxer <strong>Muhammad Ali</strong> (who had changed his name from <strong>Cassius Clay</strong> in 1964, the very year of the painting) beside a classical <strong>Greek statue</strong> of <strong>Hermes</strong> holding the infant <strong>Dionysus</strong>. Strength and intellect and power, the full catalogue of male achievement, gathered onto one wall.
      </p>

      <SectionHeader accent={accent} label="The rose, and the uncertain faces" title="One soft note, and a few she leaves open" />
      <p style={proseStyle}>
        Threading through all the hardware is a recurring painted <strong>rose</strong>, Boty&rsquo;s signature soft, sensual motif, the one note on the canvas that is hers and not the world&rsquo;s, a quiet floral counter-voice running against the bombers and the statesmen. Behind the crowd rise grand architectural <strong>facades</strong>, the stately European frontages that read as inherited power, the world&rsquo;s rooms built and owned by its men.
      </p>
      <p style={proseStyle}>
        A handful of figures in the field stay genuinely uncertain, and the estate that holds the work flags them as such, so it is worth pointing at them gently rather than over-naming them. There is a <strong>matador</strong> (probably the bullfighter <strong>El Cordobés</strong>); a second <strong>jazz musician</strong> the estate has not pinned down (names like <strong>Sonny Boy Williamson</strong> and <strong>Lester Young</strong> have been floated); an American <strong>Plains Indian</strong> in a warbonnet; and a uniformed <strong>military pilot</strong>. The estate&rsquo;s own source key keeps these open, so read them by type, the bullfighter, the unnamed jazzman, the warbonneted figure, the pilot, and leave the exact names loose. The named, certain figures, Einstein, Proust, Lenin, Elvis, the Beatles, Monk, Ali, Fellini and Mastroianni, the Kennedy frame, the bomber, the Hermes, carry the picture on their own.
      </p>
    </article>
  )
}

function ManBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Pop put women on the canvas, not behind the brush" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y <strong>1962&ndash;64</strong>, British Pop had a settled shape, and it was a man&rsquo;s shape. Hamilton, Paolozzi, Blake, Boshier, and Phillips were clipping ads, comics, film stars, and consumer imagery into a knowing celebration-and-critique of mass culture. Within that language, women appeared almost exclusively <strong>as imagery</strong>: Monroe&rsquo;s lips, the pin-up, the advertising body, the figure on the canvas to be looked at. The appropriated-media toolkit Pop had built was brilliant at consuming the female image and had no built-in place at all for a woman speaking about the <em>position</em> of women. The brush was a man&rsquo;s; the body on the canvas was hers.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="A woman aims Pop’s own gaze back" />
      <p style={proseStyle}>
        Boty takes that exact toolkit, the appropriated, re-painted media image, the celebrity face, the deadpan field, and turns it back on the system that produced it. What makes the move sharp is that it comes from <em>inside</em>. She is not an outsider lobbing a critique at Pop; she is one of its founders, using the movement&rsquo;s own celebrated method against the world it flattered. <em>It&rsquo;s a Man&rsquo;s World I</em> names and ranks the men who run the world; <em>II</em> shows what that world does with women. And she did it <strong>before the vocabulary existed</strong>. Second-wave feminism had barely arrived in Britain: <strong>Nell Dunn&rsquo;s</strong> book of interviews with women, <em>Talking to Women</em>, came out in <strong>1965</strong>; <strong>Betty Friedan&rsquo;s</strong> <em>The Feminine Mystique</em> had only just reached the country. Boty was painting a fully feminist Pop argument years before there was a movement to name it. That this critique was then literally lost in a barn for thirty years is why it reads as a break recovered, rather than a break absorbed in its own time.
      </p>

      <SectionHeader accent={accent} label="The key statement" title="“Intellectually more clever than lots of men”" />
      <p style={proseStyle}>
        In the same year she finished the pair, Boty sat for one of those new interviews, with <strong>Nell Dunn</strong>, for the 1965 book <em>Talking to Women</em>. The line she gave there is the plainest gloss on the work she ever spoke:
      </p>
      <blockquote style={{ margin: '0 0 18px', padding: '4px 0 4px 18px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, fontStyle: 'italic', color: INK }}>
        <p style={{ margin: 0 }}>Lots of women are intellectually more clever than lots of men. But it&rsquo;s difficult for men to accept the idea.</p>
      </blockquote>
      <p style={proseStyle}>
        That sentence is the two canvases in prose. The interview was recorded in <strong>1965</strong> and published by Nell Dunn the same year; it is the documented source for the line, and it is the cleanest thing Boty ever said about exactly the thing she painted. The men of <em>It&rsquo;s a Man&rsquo;s World I</em> are admitted to be admirable, clever, powerful, all of it. The quarrel is not with their gifts. It is with a world that cannot hold the obvious next thought, that women have the same gifts, and so it goes on letting men <em>be</em> people while women are only ever looked at. She painted the difficulty that sentence names, and gave the women in the answering canvas no faces at all.
      </p>
    </article>
  )
}

function ManAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1965–1966" title="A diagnosis, a daughter, and a death at 28" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        hen the story turns hard. In <strong>1965</strong>, at a routine pregnancy check-up, Boty was found to have a <strong>malignant thymoma</strong> (a cancerous tumour of the thymus gland, a small organ behind the breastbone, not leukemia, as the legend sometimes has it). Treating it would have required radiotherapy, and radiotherapy would have meant ending the pregnancy. She refused both. She carried her daughter, <strong>Katy</strong>, to term, gave birth in February <strong>1966</strong>, and died at the Royal Marsden on <strong>1 July 1966</strong>, age <strong>28</strong>. She had been a painter for only a few years.
      </p>

      <SectionHeader accent={accent} label="Provenance" title="A barn on a farm in Kent" />
      <p style={proseStyle}>
        Here is the work&rsquo;s life as an object, the <strong>provenance</strong> (the documented chain of who has owned a work of art, in order, from the artist&rsquo;s hand to where it sits now), and it is unlike any other in this set, because for thirty years the chain effectively stops. After Boty&rsquo;s death the bulk of her output, the two <em>Man&rsquo;s World</em> canvases among it, went into storage in a <strong>barn on her brother&rsquo;s farm in Kent</strong> and sat there, largely forgotten, for <strong>nearly thirty years</strong>. She was written almost entirely out of the history of British Pop. The paintings were not sold, not exhibited, not discussed. They were in a barn.
      </p>

      <SectionHeader accent={accent} label="c.1990–1993" title="Tracked down, and shown again" />
      <p style={proseStyle}>
        The recovery came late and from outside the family. Around <strong>1990</strong>, the curator <strong>David Alan Mellor</strong> sought out Boty&rsquo;s surviving relatives, located the stored work, and had it conserved; he then put it on the wall in his exhibition <em>The Sixties Art Scene in London</em> at the <strong>Barbican</strong> in <strong>1993</strong>. The scholar <strong>Dr. Sue Tate</strong> built the art-historical case that followed. Through the <strong>1990s and 2010s</strong>, the work re-entered view by way of exhibitions, Brighton in 1996&ndash;97, Christie&rsquo;s &ldquo;When Britain Went Pop&rdquo; in 2013, the Thyssen-Bornemisza in Madrid in 2014, Lugano in 2018, and the art market, settling largely into <strong>private hands</strong>. Both <em>Man&rsquo;s World</em> canvases remain in <strong>private collection</strong> today; neither has a recorded permanent museum home, and no purchase price is documented for either.
      </p>
      <p style={proseStyle}>
        And the erasure became part of the work&rsquo;s meaning. A woman painted a pair of pictures about a world that let men be people and women be looked at, and then that world lost her pictures in a barn for three decades. The recovery did not just return some good paintings to the wall; it proved the argument the paintings were making. <em>It&rsquo;s a Man&rsquo;s World</em> reads now as a feminist Pop voice that arrived early, was buried, and had to be dug out, the last work in this whole run of Pop, and the one that turns Pop&rsquo;s own gaze back on the people who held the brush.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'its-a-mans-world': { 'sole-sister': ManSoleSister, 'the-pair': ManThePair, looking: ManLooking, break: ManBreak, afterlife: ManAfterlife },
```
