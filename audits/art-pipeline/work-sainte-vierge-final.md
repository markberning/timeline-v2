# FINAL — Francis Picabia, *La Sainte Vierge (The Blessed Virgin)* (1920)

Work id: `sainte-vierge` · Dada · reconciled + revised through the gated art pipeline (fact pack → Opus → 5 gates → this reconcile). Every [BLOCKER] and [FIX] folded. Two parts below: PART A (the `ArtWorkContent` const, for `art-content.ts`) and PART B (the five `Svg*` section components + trailing NARRATIVES registry comment, for `art-section-reader.tsx`).

PART A — const

```ts
// ─────────────────────────────────────────────────────────────
// Work, La Sainte Vierge (The Blessed Virgin), Francis Picabia, 1920,
// Centre Pompidou / Musée National d'Art Moderne, Paris (AM 2008-91). A
// Dada flagship work read. Authored through the art content pipeline
// (fact pack → Opus → 5 gates → revise). Chapter prose in
// art-section-reader.tsx NARRATIVES['sainte-vierge'] (Svg… prefix).
// FACT HANDLING (gate-relevant): the WIRED image is the ORIGINAL DRAWING
// at the Pompidou (gray ground, drips in the original direction), NOT
// the magazine plate; the 391 no. 12 (March 1920) printed version was
// CROPPED and MIRROR-REVERSED, flipping the drip direction — kept
// separate, never conflated. The Commons file's "291" is a TYPO for
// 391. No Picabia quote exists ABOUT the drawing itself, so the key
// statement uses his 391 no. 12 Dada-manifesto lines (printed alongside
// the drawing) and the separate Manifeste Cannibale Dada, each labeled.
// The Cannibale was read 27 March 1920 at the Théâtre de la Maison de
// l'Œuvre (the 3rd Dada soirée, pub. in Dadaphone / Dada no. 7), NOT the
// Salle Gaveau (whose Festival Dada was a separate event, 26 May 1920).
// Making-method (flung vs ink-dropper) is interpretive and hedged.
// PD-US (published 1920); Picabia d. 1953 → also PD in France/EU since
// 2024.
// ─────────────────────────────────────────────────────────────
export const SAINTE_VIERGE: ArtWorkContent = {
  id: 'sainte-vierge',
  name: 'La Sainte Vierge',
  shortName: 'La Sainte Vierge',
  year: 1920,
  artist: 'Francis Picabia',
  artistId: 'picabia',
  movement: 'Dada',
  movementId: 'dada',
  era: 'Modern',
  eraId: 'mod',
  medium: 'India ink and graphite on paper',
  dimensions: '1 ft 1 in × 9 1/2 in',
  location: 'Centre Pompidou / Musée National d’Art Moderne, Paris',
  acquired: 'Acquired 2008 (with the participation of Frieder Burda), acc. AM 2008-91',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Dada', index: 8, total: 9 },
  hook: 'The holiest figure in Catholic France, the Virgin Mary, rendered as a single splatter of black ink on a gray sheet, captioned in Picabia’s hand and signed. No skill, no subject, no labor: just a flick of ink and a sacred title colliding to insult Church and Art at once.',
  heroImage: ART_IMG.picabiaVierge,
  heroCredit: 'Picabia, La Sainte Vierge, 1920 · Centre Pompidou, Paris',
  heroAspect: 0.73, // 24 × 33 cm drawing → W/H ≈ 0.73, portrait
  heroFit: 'contain', // the whole small sheet, never cropped
  rights: 'pd-us', // published 1920 in 391 no. 12 → US public domain; Picabia d. 1953 → also PD in France/EU since 2024
  stats: [
    { v: '1920', k: 'Made' },
    { v: '1′1″ × 9½″', k: 'Dimensions' },
    { v: 'Centre Pompidou', k: 'Now at' },
  ],
  sections: [
    { id: 'paris-dada', eyebrow: 'Paris · 1920', dateLabel: '1920', title: 'A wealthy provocateur and his anarchic little magazine', blurb: 'Picabia, an ex-Cubist millionaire turned Dada’s chief publisher, ran an irregular review called 391, full of lewd drawings, scrambled type, and attacks on good taste. Into issue 12 he dropped a blot titled for the Virgin.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'March 1920', title: 'A drop of ink, a caption, a signature', blurb: 'The whole work is a single black ink blot let fall on a gray sheet, with the title lettered above and his name below in blue-violet ink. The drawing now in Paris and the magazine plate are mirror images, because 391 printed it cropped and reversed.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The sheet', dateLabel: '1 ft 1 in × 9 1/2 in', title: 'A stain offered as the Madonna', blurb: 'The blot, the drips that record gravity and chance, the hand-lettered “LA SAINTE VIERGE,” the signature claiming authorship over an accident, the bare ground around it, and the deliberate crudeness of all of it.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1920', title: 'Both skill and subject, dethroned in one gesture', blurb: 'A flick of the wrist titled as a sacred image, where the content is the chance of the ink and the provocation of the name. The line runs forward to Surrealist automatism, art informel, and the poured paint of Action Painting.', progress: 0.78 },
    { id: 'after', eyebrow: 'After', dateLabel: '1920–today', title: 'One image, several objects', blurb: 'There is no single Sainte Vierge: a drawing now at the Pompidou, a cropped and reversed magazine plate, a separate lithograph at Yale. The drawing was bought by the Musée National d’Art Moderne in 2008.', progress: 0.96 },
  ],
  provenance: [
    { year: '1920', who: 'Francis Picabia (the artist)', place: 'Paris', note: 'Made in 1920 and reproduced, cropped and mirror-reversed, in Picabia’s own review 391, no. 12 (Paris, March 1920). Earlier ownership of the drawing before the 2008 purchase is not stated on the museum record.', price: null },
    { year: '2008–today', who: 'Musée National d’Art Moderne, Centre Pompidou', place: 'Paris', note: 'Bought by the museum in 2008, with the participation of the collector Frieder Burda, for its Cabinet d’art graphique (Graphic Arts Cabinet). Accession AM 2008-91. No purchase figure is published in the sources.', price: 'Museum purchase, 2008 (with Frieder Burda)', museum: true },
  ],
  figures: [
    { name: 'Francis Picabia', role: 'The provocateur', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { name: 'Paris Dada', role: 'The movement around him', palette: ['#d97706', '#3a2e1c', '#0e0a06'] },
    { name: '391', role: 'His own magazine, where it ran', palette: ['#8a7a3a', '#3a3020', '#100c08'] },
    { name: 'The Catholic Church', role: 'The target of the blasphemy', palette: ['#3a4a6a', '#2a3048', '#0e1220'] },
    { name: 'Chance', role: 'The thing that actually made the mark', palette: ['#5a5048', '#2e2a24', '#0e0c0a'] },
  ],
  annotations: [
    { label: 'The splatter itself', where: 'The center of the sheet, the single dark mass that is the whole “image”', detail: 'One generous blot of black India ink, irregular and organic, with no contour and nothing you could read as a figure. There is no Madonna anywhere on the page except in the words above it. The literal fact is a stain; that the stain stands in for the Virgin is entirely the work of the title.' },
    { label: 'The drips', where: 'Trailing off the main mass, fine runs where the wet ink ran before it dried', detail: 'Thin runs of ink trail away from the blot, the plain record of gravity and chance: ink let fall and allowed to move on its own. In the original drawing they run one way; the 391 plate is mirror-flipped, so there they run the other way.' },
    { label: 'The caption, “LA SAINTE VIERGE”', where: 'Hand-lettered across the top of the sheet, above the blot', detail: 'The title is written out plainly in blue-violet ink, unceremonious, in Picabia’s own hand. It is the caption, not the mark, that performs the whole provocation: these three words are what turn a stain into “the Blessed Virgin.” Without them there is no work, only a blot.' },
    { label: 'The signature', where: 'Below the blot, in the same blue-violet ink', detail: '“Francis Picabia,” inscribed underneath. It is the only conventional gesture of authorship on the page, a painter signing his picture, except that the picture is an accident. The signature claims an act of chance as a deliberate work of art, which is exactly the readymade move: the naming, not the making, is what is being signed.' },
    { label: 'The bare ground', where: 'The empty gray paper surrounding the blot', detail: 'A near-empty sheet around the mark: no halo, no setting, no composition, none of the gold and drapery a Madonna is owed. The emptiness is doing work, not failing to. Maximum sacred subject, minimum means; the void around the stain is part of the insult.' },
    { label: 'The deliberate crudeness', where: 'The whole sheet, the rough unfinished handling of every part of it', detail: 'Nothing here is refined, corrected, or finished. The lettering is plain, the blot is raw, the drips are left where they fell. For centuries a Holy Virgin was the supreme test of a painter’s polish; the roughness is the message, because skill and finish are precisely what Dada is refusing.' },
  ],
  lineage: {
    parents: [
      { label: 'Duchamp’s readymades', mode: 'art' },
      { label: 'The magazine 391', mode: 'art' },
      { label: 'Anti-clerical France', mode: 'civ' },
    ],
    children: [
      { label: 'Surrealist automatism', mode: 'art' },
      { label: 'Art informel / tachisme', mode: 'art' },
      { label: 'Action Painting', mode: 'art' },
    ],
  },
}
```

PART B — section components + registry

```tsx
// ─────────────────────────────────────────────────────────────
// La Sainte Vierge (Picabia, 1920) — the five sections
// ─────────────────────────────────────────────────────────────
function SvgParisDada({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1920" title="A millionaire who set out to make art look ridiculous" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        rancis Picabia (1879&ndash;1953) was not a starving artist. He was a wealthy Parisian, the son of a Cuban-Spanish diplomat&rsquo;s family, who at one point owned more than a hundred cars and burned through several fortunes. He had painted his way through Impressionism and then Cubism (the movement we&rsquo;ve been following, where a thing is shown from many angles at once), and by 1920 he had left painting-as-usual behind to become something stranger: the chief publisher, financier, and provocateur of <strong>Dada</strong>.
      </p>
      <p style={proseStyle}>
        Dada was the movement that came out of the First World War like a slap. It started in neutral Zurich in 1916, among artists and writers who had watched the most advanced nations in Europe spend four years feeding their young men into machine guns, and who concluded that the whole apparatus of Western reason, progress, good taste, and high culture had just proved itself a sham. Their response was an art of deliberate nonsense and provocation. The name itself, <em>Dada</em>, was reportedly picked at random from a dictionary (it is French baby-talk for a hobby-horse), chosen precisely because it means nothing. If civilization had marched so confidently into the trenches, Dada wanted no part of making sense.
      </p>
      <p style={proseStyle}>
        Picabia&rsquo;s weapon in all this was a magazine. He ran an irregular, deliberately anarchic little review called <strong><em>391</em></strong>, which he kept going from 1917 to 1924, printing it wherever he happened to be (Barcelona, New York, Zurich, and finally Paris). It traded in lewd drawings, multilingual jokes, scrambled typography, and what one historian calls its &ldquo;exuberantly nihilistic&rdquo; attacks on &ldquo;good taste and sound morals.&rdquo; The title is <em>391</em>, with a 3; you will see it misprinted as <em>291</em>, after an earlier New York magazine, but Picabia&rsquo;s review was always <em>391</em>.
      </p>

      <SectionHeader accent={accent} label="Issue 12" title="The drawing that ran inside the magazine" />
      <p style={proseStyle}>
        Into <strong>issue 12</strong> of <em>391</em>, published in Paris in <strong>March 1920</strong>, Picabia dropped the small work we are here for. It carried a title that, in Catholic France, you did not say lightly: <em>La Sainte Vierge</em>, &ldquo;The Holy Virgin,&rdquo; the Virgin Mary, mother of Christ, the most venerated figure in French religious life and the very emblem of purity. And under that title sat&hellip; a stain. A single splatter of black ink. That collision is the entire work: the holiest possible name attached to a smear of ink.
      </p>
      <p style={proseStyle}>
        The magazine around it was already doing this kind of thing. <em>391</em> was a permanent dare. Picabia used it to mock the art world that had made him rich, to needle the Church, to print insults dressed as poems. <em>La Sainte Vierge</em> is that program in its most compressed form: his smallest, most compressed gesture aimed at the biggest possible target. Chance and the readymade&rsquo;s naming-move, which Dada had been circling since Arp&rsquo;s chance collages and Duchamp&rsquo;s readymades, fired at the one subject guaranteed to give maximum offense. One drop of ink, one sacred caption, and a great deal of trouble.
      </p>
    </article>
  )
}

function SvgMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1920" title="How do you “make” a stain?" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is very little making here, and that is the point. The work is <strong>India ink</strong> (a dense black drawing ink, called <em>encre de Chine</em> in French) let fall onto a sheet of gray paper, plus a few words and a signature added in blue-violet ink. The blot was applied and the ink was allowed to <strong>run by chance</strong>, gravity finishing the picture the artist started. That is essentially the whole technique.
      </p>
      <p style={proseStyle}>
        Exactly how the ink got onto the page is a question popular accounts answer more confidently than they should. You will often read that Picabia <em>flung</em> or <em>threw</em> the ink, hurled it dramatically across the studio. The careful scholarly reading is quieter: the blot was most likely placed with an <strong>ink dropper or pipette</strong> from the bottle and then let run. Either way the crucial fact is the same: the shape of the mark was handed over to <strong>chance</strong> rather than chosen by a skilled hand. Whether he flung it or dripped it, he did not <em>draw</em> it. The dramatic &ldquo;flung across the room&rdquo; version is at arm&rsquo;s length here, because the sources do not actually support it.
      </p>
      <p style={proseStyle}>
        Then he did the two small things that turn an accident into a work of art. He <strong>lettered the title</strong> across the top, &ldquo;LA SAINTE VIERGE,&rdquo; and he <strong>signed his name</strong> below. The medium line at the Centre Pompidou records all of it together: India ink, graphite pencil, and ink on paper. So it is not, strictly, &ldquo;just an ink splatter,&rdquo; even though that is how it is usually described. The lettering and the signature are part of the work, and they carry the entire blasphemy. The blot alone is nothing; the blot plus the words is the joke.
      </p>

      <SectionHeader accent={accent} label="One image, two versions" title="The drawing and the magazine plate run opposite ways" />
      <p style={proseStyle}>
        The image on this page is the <strong>original drawing</strong>, the actual blot-on-gray-paper now held by the Centre Pompidou. When the same image was printed in <em>391</em> no. 12, the magazine reproduced it <strong>cropped and mirror-reversed</strong>, flipped left-for-right like a reflection, so the <strong>drips run in opposite directions</strong> in the two versions: the way the ink trails off the blot in the drawing is the reverse of the way it trails off in the printed plate. That flip is the cleanest way to tell, at a glance, whether you are looking at the drawing or the magazine print.
      </p>
    </article>
  )
}

function SvgLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The sheet" title="A stain, where the Madonna should be" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n front of it, the first thing is an anticlimax, and the anticlimax is the work. The sheet is <strong>small</strong>, about <strong>thirteen inches tall by nine and a half wide</strong> (smaller than a sheet of letter paper, a thing you could hold in one hand), and most of it is empty gray ground. In the middle sits a single dark mass: one generous <strong>blot of black ink</strong>, irregular and organic, with no edge you could call a contour and nothing in it you could call a figure. This is the &ldquo;image&rdquo; of the Holy Virgin. There is no Virgin in it. There is a stain.
      </p>
      <p style={proseStyle}>
        Off the main mass run the <strong>drips</strong>, fine trails of ink where the wet ink moved before it dried. They are the literal record of gravity and chance, the trace of a thing that was let happen rather than composed. (These drips run one way here; the <em>391</em> plate is flipped.) Nothing about them was designed. They are what the ink did when nobody was steering it.
      </p>

      <SectionHeader accent={accent} label="The words" title="Three words that do all the work" />
      <p style={proseStyle}>
        Across the top runs the <strong>caption</strong>: <em>LA SAINTE VIERGE</em>, hand-lettered in blue-violet ink, plain and unceremonious. This is the hinge of the whole thing. The blot is just a blot until those three words land on it; the instant they do, the stain becomes &ldquo;the Blessed Virgin,&rdquo; and the insult goes off. The work is not in the mark. The work is in the gap between the mark and the name, and the title is what opens that gap.
      </p>
      <p style={proseStyle}>
        Below the blot is the <strong>signature</strong>, &ldquo;Francis Picabia,&rdquo; in the same blue-violet ink. It is the only conventional artistic gesture on the page, a painter putting his name to his picture. Except that what he is signing is an accident. The signature claims authorship over a thing chance made, which is precisely the provocation: he is asserting that choosing to drop the ink and naming the result is enough to count as making a work of art.
      </p>
      <p style={proseStyle}>
        There is a sharper joke in the choice of subject. The Virgin is, in Catholic doctrine, the one human being conceived <strong>without stain</strong>, the &ldquo;immaculate&rdquo; one (the word literally means &ldquo;spotless&rdquo;). Picabia offers her, as her portrait, a literal <strong>stain</strong>. He gives the spotless Virgin a spot. It is a homage in the exact form of an insult, the meanest possible pun, and once you see it you cannot look at the blot the same way again.
      </p>
      <p style={proseStyle}>
        There is one more turn here. The lettered title is writing; the blot is a picture; and the joke sits exactly between them, refusing to be either. The mark is, as one scholar puts it, <em>at once both not writing and not drawing</em>, which is its own small attack on the idea that a work has to commit to being one or the other.
      </p>

      <SectionHeader accent={accent} label="The ground" title="Why the emptiness counts" />
      <p style={proseStyle}>
        What is <strong>not</strong> there matters as much as what is. The blot sits in a near-empty field of gray paper: no halo, no blue robe, no setting, no composition, none of the gold and drapery a Madonna had been given for five hundred years. The emptiness is not laziness; it is the argument. Maximum sacred subject, absolute minimum of means. And nothing on the sheet is refined or finished: the lettering is plain, the blot is raw, the drips are left exactly where they fell. The deliberate crudeness is the message, because skill and finish are precisely the things Dada is refusing to give.
      </p>
    </article>
  )
}

function SvgBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="When a Virgin was the hardest thing a painter could do" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or roughly five hundred years, a &ldquo;Holy Virgin&rdquo; was the summit of a painter&rsquo;s ambition. Raphael, Murillo, Bouguereau: a Madonna was where reverence for the most sacred subject and total mastery of the hand were supposed to meet, the picture by which a painter proved he could do everything. Even Cubism, the movement Picabia himself had just walked out of, still prized composition, the considered mark, the discipline of the surface. Across all of it, two things were never in question: the picture <em>depicted</em> something, and a skilled hand <em>made</em> it.
      </p>

      <SectionHeader accent={accent} label="The break · after" title="Both skill and subject, gone in one gesture" />
      <p style={proseStyle}>
        <em>La Sainte Vierge</em> dethrones <strong>both of those at once</strong>. A flick of the wrist, an accident, a chance stain, is titled as a sacred image, and that is the entire picture. What is on the page is no longer <strong>depiction</strong> (it depicts nothing) and no longer even <strong>drawing</strong> (no hand drew the shape). The content of the work is the <strong>gesture and the chance of the ink</strong>, plus the provocation of the name. Authorship has shrunk to a single choice and a caption. The painter&rsquo;s hand, the thing the whole tradition was built to celebrate, has been fired.
      </p>
      <p style={proseStyle}>
        That sounds like pure destruction, and it partly is. But the strange thing about this little blot is how much of the next forty years of art is hiding inside it. Make <strong>chance and gesture</strong> the actual content of a work, and you are a step from the automatic drawing the Surrealists would make into a method within a few years, and from <strong>art informel</strong> and <strong>tachisme</strong>, the post-war European painting built entirely out of the blot and the smear (the French <em>tache</em> means, precisely, &ldquo;stain&rdquo;: Picabia&rsquo;s medium here is literally their name). Let the <strong>chance-made mark</strong> be the work itself, and you are on the road to gestural abstraction and the poured, dripped skeins of <strong>Action Painting</strong> a generation later. And let the <strong>title do the work instead of the hand</strong>, naming as the creative act, and you are inside the lineage that runs through Duchamp toward Conceptual art, where the idea is the art and the object is almost an afterthought.
      </p>
      <p style={proseStyle}>
        None of that is a claim that Picabia sat down in 1920 and planned the next half-century. He made a one-off insult for a magazine. But the insult happened to put a finger on something real, that a mark made by chance and named by the artist could carry as much weight as a labored picture, and that idea turned out to have an enormous future. The smallest work in this whole sequence is one of the most far-reaching.
      </p>
    </article>
  )
}

function SvgAfter({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="What it said" title="The manifesto printed beside the blot" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icabia left no documented words about <em>this drawing</em> in particular, no line where he explains the blot. What survives instead is his framing of the whole Dada game, set down in the very same months, and it frames exactly what the blot was for. The clearest statement comes from his <strong>Dada Manifesto</strong>, printed in <em>391</em> no. 12, the issue that carried <em>La Sainte Vierge</em> itself:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px' }}>
        &ldquo;Dada &hellip; wants nothing, absolutely nothing, and what it does is to make the public say: &lsquo;We understand nothing, nothing, nothing.&rsquo;&rdquo;
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px' }}>
        &ldquo;Art is a pharmaceutical product for idiots.&rdquo;
      </p>
      <p style={proseMutedStyle}>
        (Both lines are from the &ldquo;Dada Manifesto&rdquo; in <em>391</em> no. 12, Paris, March 1920. That last line turns up in English as both &ldquo;for idiots&rdquo; and &ldquo;for imbeciles&rdquo;; both render the same French original, <em>un produit pharmaceutique pour imb&eacute;ciles</em>.)
      </p>
      <p style={proseStyle}>
        Read the blot back through those two sentences and it stops being a riddle. A work that &ldquo;wants nothing&rdquo; and is built to make you &ldquo;understand nothing&rdquo; looks exactly like a stain captioned as a Madonna. And if &ldquo;art is a pharmaceutical product for idiots,&rdquo; then the right thing to hang in the place where a masterpiece goes is a smear of ink. The drawing is the manifesto, drawn.
      </p>
      <p style={proseStyle}>
        A second, separate text from the same month sits beside it, kept separate on purpose. Picabia&rsquo;s <em>Manifeste Cannibale Dada</em> (&ldquo;Cannibal Dada Manifesto&rdquo;) was read aloud by Andr&eacute; Breton at the third Dada soir&eacute;e at the Th&eacute;&acirc;tre de la Maison de l&rsquo;&OElig;uvre on <strong>27 March 1920</strong>, with its flat little litany:
      </p>
      <p style={{ ...proseStyle, fontStyle: 'italic', borderLeft: `3px solid ${accent}`, paddingLeft: 14, margin: '0 0 14px' }}>
        &ldquo;&hellip; like your idols: nothing / like your heroes: nothing / like your artists: nothing / like your religions: nothing.&rdquo;
      </p>
      <p style={proseMutedStyle}>
        (From the <em>Manifeste Cannibale Dada</em>, read at the third Dada soir&eacute;e, Th&eacute;&acirc;tre de la Maison de l&rsquo;&OElig;uvre, 27 March 1920, and printed in <em>Dadaphone</em> / <em>Dada</em> no. 7. This one was <em>not</em> printed inside <em>391</em> no. 12, so it stays separate from the lines above; it belongs to the festival season, not the magazine that carried the drawing.) &ldquo;Like your religions: nothing&rdquo; is, in four words, the program of a Holy Virgin made of ink.
      </p>

      <SectionHeader accent={accent} label="After · the object" title="One image, several objects, and a 2008 sale" />
      <p style={proseStyle}>
        There is no single thing called <em>La Sainte Vierge</em>. The image exists as at least three separate objects. There is the <strong>drawing</strong> on gray paper, the one we have been looking at, now at the <strong>Centre Pompidou</strong> in Paris. There is the <strong>printed plate</strong> in <em>391</em> no. 12, cropped and mirror-reversed from the drawing, surviving in every copy of the magazine. And there is a separate <strong>lithograph</strong> of the image, on a larger sheet, held by the Yale University Art Gallery. Scholars even argue that Picabia probably made two closely related drawings in a single session on the same paper stock, one perhaps set aside. So &ldquo;the original&rdquo; is not a single, simple thing; it depends which object you mean.
      </p>
      <p style={proseStyle}>
        The drawing&rsquo;s own life as an object is short on record. Its ownership before 2008 simply isn&rsquo;t set down on the museum&rsquo;s sheet, so no chain is invented for it here. What is documented is the end: in <strong>2008</strong> the <strong>Mus&eacute;e National d&rsquo;Art Moderne</strong>, the national museum of modern art at the Centre Pompidou, bought the drawing, with the participation of the German collector <strong>Frieder Burda</strong>, for its Cabinet d&rsquo;art graphique (its Graphic Arts Cabinet). It carries the accession number AM 2008-91. No price is published, so none is given here.
      </p>
      <p style={proseStyle}>
        The work is in the <strong>public domain</strong>. It was published in 1920, in <em>391</em> no. 12, well before the cutoff that governs old works in the United States, and Picabia died in 1953, so copyright in France and the rest of the life-plus-seventy world expired in 2024. A museum may claim a right in its own <em>photograph</em> of the sheet under European law, but that does not fence off the underlying work. The blot itself belongs to everyone, which is a fitting end for a picture that set out to be worth nothing at all.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'sainte-vierge': { 'paris-dada': SvgParisDada, making: SvgMaking, looking: SvgLooking, break: SvgBreak, after: SvgAfter },
```
