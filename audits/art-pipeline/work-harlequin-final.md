# Final reconciled — The Harlequin's Carnival (Joan Miró, 1924–25)

Reconciler/reviser output for the Surrealism works chain (index 2 of 9). Folds every
[BLOCKER]/[FIX] from the fact, read, and frame gates over `work-harlequin-draft.md`.
Two parts: PART A is the `HARLEQUIN` const; PART B is the five `Hrq*` section
components plus the NARRATIVES registry comment. Identifiers, section ids, and
component names are identical to the draft. Shared helpers only; no new imports.

Changes folded:
- FRAME: Miró situated beyond Breton — rue Blomet studio next to Masson, the
  proto-Surrealist core that gathered there, plus Catalan / Mont-roig roots. He no
  longer reads as a lone hungry dreamer.
- FACT: `year` kept at 1925 (completion year, single-int data-model field); every
  visible date string already reads 1924–25, and nothing renders the bare `year` as
  the reader-facing date, so no surface clip. Rights caption polished to
  "pre-1931 publication".
- READ: reader-commands rewritten to statements; honesty-label opener removed; the
  "stated plainly" / "Read that carefully" / "Hold that fact" / "Start with the size"
  / "Let's pick out" / "keep the two halves apart" / "Look at his stomach" tics gone;
  app-structure meta-references trimmed; the third caveat beat in HrqMaking compressed;
  one party-motif instance dropped.
- KEPT (gate-praised): "deliberately built and revised" (not pure automatism); the
  hunger anecdote attributed + guarded ("did not literally starve at the easel"); the
  "ball of yarn" line as paraphrase; soft Eiffel/globe attributions. No "starvation"
  language added. Both Miró quotes stay verbatim.

## PART A — the const

```ts
export const HARLEQUIN: ArtWorkContent = {
  id: 'harlequin',
  name: 'The Harlequin’s Carnival',
  shortName: 'Harlequin’s Carnival',
  year: 1925,
  artist: 'Joan Miró',
  artistId: 'miro',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 2 in × 3 ft 5/8 in',
  location: 'Buffalo AKG Art Museum, Buffalo',
  acquired: 'Room of Contemporary Art Fund, 1940',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 2, total: 9 },
  hook: 'A small room boiling over with squiggles, single eyes and ears, drifting musical notes and half-animal sprites, painted, Miró said, out of the hallucinations his own hunger produced. The founding picture of Surrealism’s playful, automatist stream.',
  heroImage: ART_IMG.miroHarlequin,
  heroCredit: 'Miró, The Harlequin’s Carnival, 1924–25 · Buffalo AKG Art Museum',
  heroAspect: 1.39, // 66 × 93 cm → W/H ≈ 1.41 (museum), landscape; framed crop ≈ 1.39
  heroFit: 'contain', // the whole small canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1924–25', k: 'Painted' },
    { v: '2′2″ × 3′⅝″', k: 'Dimensions' },
    { v: 'Buffalo AKG', k: 'Now at' },
  ],
  sections: [
    { id: 'paris', eyebrow: 'Paris · 1924–25', dateLabel: '1924–1925', title: 'A starving painter in a Surrealist Paris', blurb: 'Joan Miró is in Paris just as André Breton publishes the first Manifesto of Surrealism, the document that puts dreams, the unconscious, and automatism (letting the hand draw without a plan) at the center of art. He works at the heart of the circle forming around it, and he is also too poor to eat properly, and that hunger is about to walk straight into the painting.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1924–1925', title: 'Hunger, a trance, and a carefully built picture', blurb: 'Miró said the imagery came from hallucinations brought on by his hunger, not from his dreams, and that he distanced himself from the pure dream-painting Breton’s circle wanted. But the canvas that looks so spontaneous was, by his own account, meditated on at length and revised as he worked. Source and execution are two different things here.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 2 in × 3 ft 5/8 in', title: 'A room full of living squiggles', blurb: 'The moustached harlequin with his pipe, the ladder that carries an eye and an ear, the cat batting a ball of yarn, the black notes drifting in the air, the window with its dark triangle and globe, and the swarm of small biomorphic creatures that fill every inch of the room.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1924–1925', title: 'From the still life on the table to the dream in the air', blurb: 'For centuries a picture organized itself around recognizable things in real space; even Cubism fractured real guitars and bottles. Miró floats an invented vocabulary of biomorphic shapes that answers to no observed scene. He swaps the sober academic still life for a weightless little universe where objects are alive. That is the break.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1940–today', title: 'How a Paris dream-room reached Buffalo', blurb: 'Held up as one of the touchstone early Surrealist paintings and among Miró’s greatest works, the canvas entered the Albright-Knox Art Gallery (now the Buffalo AKG Art Museum) in 1940, through the museum’s pioneering Room of Contemporary Art Fund, where it has stayed ever since.', progress: 0.96 },
  ],
  provenance: [
    { year: '1924–1940', who: 'Joan Miró (the artist), then Paris dealers/collectors', place: 'Paris', note: 'Painted in Paris across 1924–25. The early ownership chain before 1940 (the Paris dealers and collectors who handled it in the 1920s–30s) is not pinned down in the sources used here, so it is left unstated rather than invented.', price: null },
    { year: '1940–today', who: 'Albright-Knox Art Gallery / Buffalo AKG Art Museum', place: 'Buffalo, New York', note: 'Entered the Albright-Knox Art Gallery (renamed the Buffalo AKG Art Museum in 2023) in 1940, through the museum’s Room of Contemporary Art Fund, an early endowment dedicated to buying living artists. Accession RCA1940:8. On view.', price: 'Room of Contemporary Art Fund (museum purchase)', museum: true },
  ],
  figures: [
    { name: 'Joan Miró', role: 'The painter', palette: ['#bf2f25', '#1d4ed8', '#c8b84a'] },
    { name: 'André Breton', role: 'Wrote the Surrealist manifesto', palette: ['#1c3a6a', '#2e3848', '#0e1220'] },
    { name: 'The Harlequin', role: 'Commedia clown, reimagined', palette: ['#bf2f25', '#1d4ed8', '#1c1208'] },
    { name: 'Room of Contemporary Art', role: 'The 1940 fund that bought it', palette: ['#3a5a3a', '#2a3a28', '#0e140e'] },
  ],
  annotations: [
    { label: 'The moustached harlequin', where: 'Center-left, a tall guitar-shaped figure standing upright, wearing the costume cues', detail: 'The traditional commedia-dell’arte Harlequin (the diamond-patterned clown of old Italian comedy) reimagined as a near-musical body. He wears a face split red on one side and blue on the other, a diamond-patterned tunic, a curling moustache, and smokes a pipe; some accounts add a small admiral’s hat. There is a dark hole in his belly, commonly read as a sign of Miró’s own hunger and poverty in this period. The costume cues are on the canvas; the belly-hole-as-hunger is a reading the museum offers, not a label painted on it.' },
    { label: 'The ladder with an eye and an ear', where: 'Left side, a ladder standing on its own', detail: 'A ladder that is also a creature: it carries a single eye and a single ear, an everyday object given sense organs. The ladder is a motif Miró returned to again and again, usually read as a sign of flight, escape, or climbing toward something. Here it stands and looks back at you, which is exactly the kind of impossible aliveness the whole room runs on.' },
    { label: 'The cat and the ball of yarn', where: 'Lower right, a cat-like creature playing with a round, threaded shape', detail: 'A cat-like sprite bats at what looks like a ball of wool or yarn. Miró’s own writing about the painting talks about a ball of yarn and cats, so the motif is his, not a museum invention, though the exact wording of that passage wobbles between sources and is best treated as a vivid description rather than a fixed quote. On the canvas: a cat, and something round it is playing with.' },
    { label: 'Musical notes in the air', where: 'Drifting through the upper and central room', detail: 'Small black musical notes float free in the room. The museum describes the revelers “playing, singing, dancing, and celebrating, with music literally in the air,” and the notes are the literal sign of that: the whole scene is a noisy carnival of sound, a party you are meant to half-hear.' },
    { label: 'The window with the black triangle and globe', where: 'Upper right, an opening onto a sky', detail: 'An opening reads as a window onto a small patch of sky. Inside it sit a dark triangle and a round dark sphere or globe. The triangle is often read as the Eiffel Tower (a nod to the Paris setting) and the sphere as the world or the globe, but those are the standard interpretations rather than facts the museum states, so hold them as “commonly read as,” not as caption.' },
    { label: 'The swarm of small creatures', where: 'Filling the rest of the room, top to bottom', detail: 'Every remaining inch teems with small hybrid sprites: half-animal, half-human, half-object shapes, plus insects, fish, and winged beings, all playing and singing and dancing. The museum calls them hybrid creatures with the characteristics of both humans and animals. This biomorphic crowd (biomorphic meaning soft, rounded, organic, life-like shapes) is the carnival itself.' },
  ],
  lineage: {
    parents: [
      { label: 'Breton’s Surrealist manifesto', mode: 'art' },
      { label: 'Automatism', mode: 'art' },
      { label: 'Paris in the 1920s', mode: 'civ' },
    ],
    children: [
      { label: 'Miró’s biomorphic language', mode: 'art' },
      { label: 'Abstract Expressionism', mode: 'art' },
      { label: 'Surrealism’s automatist stream', mode: 'art' },
    ],
  },
}
```

## PART B — the five `Hrq*` section components + NARRATIVES registry comment

```tsx
function HrqParis({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1924–25" title="A starving painter in a Surrealist Paris" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the winter of 1924 a young Catalan painter named <strong>Joan Mir&oacute;</strong> (1893&ndash;1983; the surname is roughly &ldquo;mee-ROH&rdquo;) was living in <strong>Paris</strong>, and he was hungry. Not metaphorically. He had come up from <strong>Barcelona</strong>, splitting these years between Paris and his family&rsquo;s farm at <strong>Mont-roig</strong> in Catalonia, where the landscape and folk vocabulary he was steadily inventing took shape; and he was poor enough in these Paris years that, by the account the holding museum gives, he could once feed a dinner guest only a plate of <strong>radishes</strong>. That fact climbs straight into the painting, hole and all.
      </p>
      <p style={proseStyle}>
        He had also walked into the middle of something. Paris in 1924 was the birthplace of <strong>Surrealism</strong>, an art and literary movement that had just been given its founding document. In <strong>1924</strong> the poet <strong>Andr&eacute; Breton</strong> (1896&ndash;1966), the movement&rsquo;s organizer and chief theorist, published the first <em>Manifesto of Surrealism</em>. It argued that the truest material for art was not the visible world but the <strong>unconscious</strong>: dreams, free association, and above all <strong>automatism</strong>, the practice of letting your hand make marks, or your pen write words, without a conscious plan steering it, so that whatever was underneath could surface on its own.
      </p>

      <SectionHeader accent={accent} label="Why this picture matters" title="A touchstone of a movement being born" />
      <p style={proseStyle}>
        Mir&oacute; never formally joined Breton&rsquo;s circle, but he was at its center in a more literal way than that sounds: his Paris studio was on the <strong>rue Blomet</strong>, next door to the painter <strong>Andr&eacute; Masson</strong>, and Masson&rsquo;s studio was the room where the writers and painters who became Surrealism gathered (Masson, Michel Leiris, Robert Desnos, and the rest). Mir&oacute; and Masson, drawing without a plan, are often credited with starting Surrealism as a way of <em>painting</em>, not just writing. The picture Mir&oacute; made across <strong>1924 and 1925</strong> became one of the touchstone works of that early Surrealism, widely counted among his greatest. Its title is <em>The Harlequin&rsquo;s Carnival</em> (in French, <em>Carnaval d&rsquo;Arlequin</em>; the museum that owns it titles it <em>Carnival of Harlequin</em>, and all three are the same picture). A <strong>harlequin</strong> is the diamond-patterned clown of old Italian street comedy, and a <strong>carnival</strong> is a riot of costume and noise, so the title alone promises a party. What Mir&oacute; delivered is a small room so crammed with dancing, half-alive shapes that it looks like the inside of a dream having a party with itself.
      </p>
      <p style={proseStyle}>
        Two things, then, are sitting in the room with him as he begins: a brand-new theory that says paint what rises from the unconscious, and a body that has not had enough to eat. The next chapter is about what those two things did when they met.
      </p>
    </article>
  )
}

function HrqMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making" title="Out of a hunger, not a dream" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>M</DropCap>
        ir&oacute; himself was at pains to correct the easy story. That story is that this is a painted dream, the unconscious transcribed while he slept. That is not what he said. By his own account the strange creatures came from <strong>hallucinations brought on by hunger</strong>, the way a starving person can begin to see things that are not there, and he was careful to separate that from the dream-painting Breton&rsquo;s group prized. The line the museum quotes is the clearest statement he left about how this picture came to be:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px', color: INK }}>
        &ldquo;I tried to capture the hallucinations that my hunger produced in me. It&rsquo;s not that I painted what I saw in my dreams, as Breton and his lot predicated in those days, but that hunger provoked in me a sort of trance.&rdquo;
      </p>
      <p style={proseMutedStyle}>
        Joan Mir&oacute;, on <em>The Harlequin&rsquo;s Carnival</em>, as quoted in the Buffalo AKG account of the work.
      </p>
      <p style={proseStyle}>
        The line does two jobs at once. It ties the boiling imagery directly to his empty stomach, and it gently shoves away from Breton&rsquo;s pure dream-painting. He described coming home at the end of a foodless day and, &ldquo;in a kind of trance,&rdquo; drawing the forms that became the picture. So the <em>source</em> of the imagery is real, bodily hunger, not a remembered dream.
      </p>

      <SectionHeader accent={accent} label="Looks automatic, was composed" title="The trap in the word ‘automatic’" />
      <p style={proseStyle}>
        Now the second correction, which matters just as much. The picture <em>looks</em> like pure automatism, like marks that spilled out unplanned, and that look is exactly why it&rsquo;s a Surrealist icon. But Mir&oacute; was equally clear that the canvas itself was <strong>deliberately built and revised</strong>, not poured out in one unguided rush. In another statement the museum records, he described a planned, considered process:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px', color: INK }}>
        &ldquo;After long meditation on what I proposed to do, I began to paint, and as I painted I introduced all the changes I believed to be appropriate.&rdquo;
      </p>
      <p style={proseStyle}>
        Held apart, the two halves give the whole truth of how it was made. The <em>hallucinations of hunger</em> supplied the cast of creatures; the <em>execution</em> was meditated on at length and adjusted as he went. The spontaneous, automatist surface is partly a constructed effect, a careful arrangement made to feel like an accident. That is a much better picture of the artist than the legend of a man hallucinating onto a canvas: hunger lit the imagery, and a disciplined hand laid it down. None of which means he literally starved at the easel, or that the whole picture is an unmediated vision. He was poor, he was hungry, that hunger was the well he drew the imagery from, and the painting on top of it he composed.
      </p>
    </article>
  )
}

function HrqLooking({ accent, onZoom }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The canvas" title="A small room, packed to the corners" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he size surprises people. For a picture this famous, <em>The Harlequin&rsquo;s Carnival</em> is small: about <strong>2 feet 2 inches tall and a hair over 3 feet wide</strong> (66 by 93 centimeters, by the holding museum&rsquo;s measurement), an intimate easel painting you could carry under one arm, not a mural. All of the chaos below is packed into that modest rectangle. The width is sometimes given as 90.5 centimeters elsewhere; the museum that owns it says 93, and on a question of its own catalogue the museum wins.
      </p>
      <p style={proseStyle}>
        The setting is a single <strong>interior</strong>, a room with a checkered floor, a table, and a window, and every inch of it is alive with soft, rounded, organic shapes the books call <strong>biomorphic</strong> (meaning life-shaped: forms that read as half-human, half-animal, half-object). The museum describes them as hybrid creatures with the characteristics of both humans and animals, &ldquo;playing, singing, dancing, and celebrating, with music literally in the air.&rdquo; It is a party of invented little beings. A few are worth finding.
      </p>

      <SectionHeader accent={accent} label="The host" title="The moustached harlequin with his pipe" />
      <p style={proseStyle}>
        Center-left stands the <strong>harlequin</strong> himself, and he is not a man so much as a near-musical body, tall and guitar-shaped. Mir&oacute; gives him the clown&rsquo;s costume cues: a face split <strong>red on one side and blue on the other</strong>, a <strong>diamond-patterned</strong> tunic (the harlequin&rsquo;s traditional checks), a curling <strong>moustache</strong>, a <strong>pipe</strong> in his mouth, and, by some accounts, a little admiral&rsquo;s hat. A dark <strong>hole</strong> is punched through his stomach. That hole is commonly read as the artist&rsquo;s own hunger made visible, the empty belly of the man who painted him. The costume is plainly on the canvas; the belly-as-hunger is the reading the museum offers, and a persuasive one.
      </p>

      <SectionHeader accent={accent} label="The objects that came alive" title="The ladder, the cat, the notes in the air" />
      <p style={proseStyle}>
        Now the things in the room that have quietly grown senses. To the left, a <strong>ladder</strong> stands on its own and has become a creature: it carries a single <strong>eye</strong> and a single <strong>ear</strong>. The ladder is one of Mir&oacute;&rsquo;s recurring motifs, usually read as flight or escape, a way of climbing up and out, and here it watches and listens. Lower right, a <strong>cat</strong>-like sprite bats at a round, threaded shape that looks like a <strong>ball of yarn</strong>; Mir&oacute;&rsquo;s own writings about the painting mention a ball of yarn and cats, so the motif is genuinely his. Through the whole upper room drift small black <strong>musical notes</strong>, the literal sign of the &ldquo;music in the air&rdquo;: the carnival is loud, and you are meant to half-hear it.
      </p>

      <PaintingFigure
        onZoom={onZoom}
        palette={['#bf2f25', '#1d4ed8', '#1c1208']}
        imageUrl={ART_IMG.miroHarlequin}
        ratio="7/5"
        alt="Miró, The Harlequin's Carnival, the whole canvas"
        caption={<>Mir&oacute;,{' '}<em>The Harlequin&rsquo;s Carnival</em>, 1924&ndash;25. Buffalo AKG Art Museum.</>}
        rights="Public domain in the US (pre-1931 publication; Miró d. 1983, so still under copyright in many countries). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The window, and the crowd" title="A triangle, a globe, and a swarm of sprites" />
      <p style={proseStyle}>
        Upper right, an opening reads as a <strong>window</strong> onto a small patch of sky, and inside it sit a dark <strong>triangle</strong> and a round dark <strong>sphere</strong>. These two are the most interpreted marks on the canvas: the triangle is often read as the <strong>Eiffel Tower</strong> (a wink at the Paris setting) and the sphere as the <strong>globe</strong>, the world seen through the window. Those readings are conventions, not labels the museum prints, so take them as &ldquo;commonly read as&rdquo; rather than fact. What is certainly there is a window, a triangle, and a dark ball.
      </p>
      <p style={proseStyle}>
        Everything left over teems. The rest of the room is filled with a <strong>swarm of small creatures</strong>: hybrid sprites that are part animal and part human, plus insects, fish, and winged things, all of them playing and singing and dancing. This biomorphic crowd is the carnival itself, the celebration the title promises, painted not as people in costume but as a roomful of living shapes. Step back and the whole small canvas reads as one cheerful, weightless party, which is exactly the effect Mir&oacute; was after.
      </p>
    </article>
  )
}

function HrqBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="A picture used to obey the world" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why this little room mattered, set it beside what came before. For centuries a painting organized itself around <strong>recognizable things in real space</strong>. A still life was a table with nameable objects (a jug, a loaf, a lemon) sitting where you could imagine reaching for them. A history painting set real figures in a real room. Even <strong>Cubism</strong>, the radical movement just before this one, fractured and re-faceted <em>real</em> things: it broke a guitar or a bottle or a person into planes, but you were still meant to reassemble a guitar. The picture, however strangely, still answered to the seen world. It obeyed.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="An invented vocabulary that answers to nothing on a table" />
      <p style={proseStyle}>
        Mir&oacute; cut that cord. In <em>The Harlequin&rsquo;s Carnival</em> there is no observed scene underneath the shapes, no still life on a table that the squiggles are a stylized version of. He floats an <strong>invented vocabulary</strong>: squiggles, dots, single eyes and ears, ladders that look back at you, notes drifting in the air, half-animal sprites, a wholly biomorphic cast that corresponds to nothing you could photograph. The forms come from <em>inside</em>, from the hunger-hallucinations and the unconscious the Surrealists prized, not from a motif arranged on a tabletop. And the real-world rules of space go with the still life: nothing has proper weight, nothing casts a settling shadow, objects are alive and the room ignores gravity.
      </p>
      <p style={proseStyle}>
        That is the break. Painting stops <strong>depicting the seen world</strong> and starts <strong>staging the unconscious</strong> as a populated little universe, a room you could never walk into because it never existed anywhere but in a hungry man&rsquo;s head. It swaps the sober <strong>academic still life</strong>, objects sitting obediently on a table, for a <strong>playful, weightless Surrealist world</strong> where a ladder has an ear and the music is visible. The grim, fevered dream-paintings of some other Surrealists pushed the unconscious toward menace; Mir&oacute; pushed it toward a nursery-bright party. Either way the move underneath is the same one, and this is one of the pictures that made it: a canvas that answers to no scene, only to what was rising from below.
      </p>
    </article>
  )
}

function HrqAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <>
      <article style={{ padding: '18px 18px 40px' }}>
        <SectionHeader accent={accent} label="After · 1940" title="From a Paris dream-room to Buffalo" first />
        <p style={proseStyle}>
          <DropCap accent={accent}>T</DropCap>
          he painting Mir&oacute; built out of his hunger has had a quiet, lucky afterlife: it found one home early and stayed there. In <strong>1940</strong>, only fifteen years after it was finished, it crossed the Atlantic and entered an American museum, the <strong>Albright-Knox Art Gallery</strong> in <strong>Buffalo, New York</strong> (renamed the <strong>Buffalo AKG Art Museum</strong> in 2023). It has been there ever since. The earlier chain of Paris dealers and collectors who handled it in the 1920s and 1930s is not nailed down in the records used here, so it is better left blank than guessed at; what is documented is the moment it reached Buffalo.
        </p>
        <p style={proseStyle}>
          And the way it got there is itself a small piece of art history. The museum bought it through its <strong>Room of Contemporary Art Fund</strong> (its accession number, the museum&rsquo;s catalogue tag, is RCA1940:8). The Room of Contemporary Art was an unusually forward-looking program for an American museum in 1940, an endowment set up specifically to buy the work of <em>living</em> modern artists at a time when most institutions still waited for an artist to be safely dead and canonical. Mir&oacute; was very much alive (he would live until 1983), and a teeming Surrealist dream-room was exactly the kind of risk the fund existed to take.
        </p>

        <SectionHeader accent={accent} label="The standing" title="One of the pictures Surrealism is measured by" />
        <p style={proseStyle}>
          Time has been kind to that bet. <em>The Harlequin&rsquo;s Carnival</em> is now held up as one of the touchstone paintings of early Surrealism and among the greatest things Mir&oacute; ever made, the picture where his lifelong vocabulary of squiggles, single eyes, ladders, and biomorphic sprites first arrived in full. The cast of little creatures he assembled in that cold, hungry Paris room would populate his work for the next half-century. It just moved to a wall in Buffalo, where you can still stand in front of it, small as it is, and hear the music in the air.
        </p>
      </article>

      <MeanwhileSheet
        accent={accent}
        region="Paris"
        when="1924 · the same moment"
        title="Surrealism gets its founding document."
        body="As Miró fills his small canvas with hunger-born sprites, André Breton publishes the first Manifesto of Surrealism in Paris, the text that puts dreams, the unconscious, and automatism at the center of a new movement. The painters and poets gathering around Breton are arguing on the page about what the unconscious can do to art; a Catalan painter a few streets away is quietly proving it on canvas, in a room full of living squiggles."
        palette={['#1c3a6a', '#c8a72a', '#0e1224']}
        ctaLabel="Read ‘Surrealism’"
      />
    </>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  harlequin: { paris: HrqParis, making: HrqMaking, looking: HrqLooking, break: HrqBreak, afterlife: HrqAfterlife },
```
