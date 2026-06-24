# FINAL (reconciled + revised) — Meret Oppenheim, *Object* (fur teacup), 1936 · id `object-fur`

Gated and reconciled draft for the critic pipeline. PART A = the `ArtWorkContent` const for
`src/lib/art-content.ts`. PART B = the five `Obj*` chapter components + the trailing
NARRATIVES-registry comment for `art-section-reader.tsx`. Shared helpers only
(`SectionHeader`, `DropCap`, `proseStyle`, `proseMutedStyle`); no imports, no redefs.
In-copyright: the hero (shown small, credited, under fair use) carries the image; no
inline `PaintingFigure` of the work itself.

All three gates folded:
- FACT [FIX] 1 — age reconciled (born 6 Oct 1913: she was 22 for the May 1936 café/Ratton debut, 23 only from October; stat now reads "made at 22" with the autumn-turn clause; afterlife reconciled).
- FACT [FIX] 2 — café bracelet admiration now Picasso **and** Dora Maar, the "anything in fur" joke kept on Picasso.
- READ [FIX] — meta-narration clause cut from ObjCafe ("it is worth telling as a story, because that is what it is").
- READ [NICE] — break's comfort/revulsion restatement leaned onto content-is-the-collision; spoon-proportion oddity added to looking.
- FRAME [FIX] — "first work by a woman at MoMA / First Lady of MoMA" facet stated-and-scoped in afterlife (was a buried clause).
- FRAME [FIX] — name switched to **Meret** (no accent) to match MoMA + majority sources.
- FRAME [NICE] — *Venus in Furs* sealed as Breton's title-pun, not the object's content.

---

## PART A — const

```ts
export const OBJECT_FUR: ArtWorkContent = {
  id: 'object-fur',
  name: 'Object',
  shortName: 'Object (fur teacup)',
  year: 1936,
  artist: 'Meret Oppenheim',
  artistId: 'oppenheim',
  movement: 'Surrealism',
  movementId: 'sur',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Fur-covered cup, saucer, and spoon (Chinese gazelle fur)',
  dimensions: 'cup 4 3/8 in across · saucer 9 3/8 in across · spoon 8 in long · overall height 2 7/8 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Purchase, 1946',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Surrealism', index: 6, total: 9 },
  hook: 'A teacup, saucer, and spoon wrapped in the speckled tan fur of a Chinese gazelle, so the cozy ritual of afternoon tea turns animal and faintly sickening: imagine the fur against your lip. MoMA visitors voted it the quintessential Surrealist object, and it made its 22-year-old maker famous overnight.',
  heroImage: ART_IMG.oppenheimObject,
  heroCredit: 'Oppenheim, Object, 1936 · MoMA, New York · in copyright, shown small under fair use; rights with the Oppenheim estate / ARS.',
  heroAspect: 1.54, // the assembled set, wider than tall; never cropped
  heroFit: 'contain',
  rights: 'in-copyright',
  stats: [
    { v: '1936', k: 'Made (at 22)' },
    { v: '3 pieces, 1 fur', k: 'Cup, saucer, spoon' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'cafe', eyebrow: 'Paris · 1936', dateLabel: '1936', title: 'A fur bracelet, a café, and a dare', blurb: 'The story goes that Oppenheim was at a Paris café with Picasso and Dora Maar, wearing a fur-covered bracelet of her own design. The two of them admired it; Picasso joked you could cover anything in fur; she answered, “Even this cup and saucer?” Whether the line landed exactly that way or not, she went and made the cup.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1936', title: 'Three things from a department store, and a pelt', blurb: 'No carving, no casting: she buys a plain cup, saucer, and spoon and wraps them in gazelle fur. And a note on the names, because three of them float around: Object is MoMA’s title; the famous French nickname, Luncheon in Fur, was coined by Breton, not by her.', progress: 0.30 },
    { id: 'looking', eyebrow: 'The object', dateLabel: 'cup 4 3/8 in · saucer 9 3/8 in · spoon 8 in', title: 'Small, ordinary, and impossible to use', blurb: 'The whole tea service gone shaggy: cup, saucer, and spoon under one speckled tan fur; the lip you would drink from; the furred spoon (near twice the cup’s width) you can’t stir with; the way the fur cancels every function at once. And the shock of the scale: it is just a normal teacup.', progress: 0.54 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1936', title: 'The object becomes the sculpture', blurb: 'Sculpture used to mean a thing made, carved or modeled or cast. Object is bought and joined: a found-object assemblage where the artwork is the idea and the displacement, not the craft. And its content is a deliberate collision, the comfort of tea fused with the gag of fur in the mouth.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1936–today', title: 'The fur cup, fame, and the trap of it', blurb: 'It travels to London, then to MoMA’s 1936–37 Surrealism show, where visitors crown it the quintessential Surrealist object and make Oppenheim instantly famous, a fame that boxed her in for decades. MoMA bought it; the work is the source of one of her best-known lines about taking your freedom.', progress: 0.96 },
  ],
  provenance: [
    { year: '1936', who: 'Meret Oppenheim (the artist)', place: 'Paris', note: 'Made in Paris in 1936: an ordinary cup, saucer, and spoon (bought at a Paris department store) covered in Chinese gazelle fur. Shown that May at the Exposition surréaliste d’objets at the Charles Ratton gallery, Paris, the exhibition that formalized the Surrealist “object.”', price: null },
    { year: '1936', who: 'London International Surrealist Exhibition', place: 'London', note: 'Traveled to the 1936 London International Surrealist Exhibition, where Alfred H. Barr Jr. of MoMA encountered it.', price: null },
    { year: '1936–37', who: 'The Museum of Modern Art (exhibited)', place: 'New York', note: 'Shown in MoMA’s Fantastic Art, Dada, Surrealism (winter 1936–37), where visitors voted it the “quintessential Surrealist object.”', price: null },
    { year: '1946–today', who: 'The Museum of Modern Art', place: 'New York', note: 'Credit line “Purchase,” acquisition dated 1946. Several sources note Barr bought it himself amid balking trustees; it entered MoMA’s study collection in 1946 and was formally accessioned into the permanent collection in 1963. MoMA’s public credit line still reads Purchase. The 1946 study-collection date is also the root of the widely-repeated “first work by a woman in MoMA’s collection” claim. On view.', price: 'Purchase (museum acquisition)', museum: true },
  ],
  figures: [
    { name: 'Meret Oppenheim', role: 'The maker', palette: ['#6a5038', '#3a2a1c', '#15100a'] },
    { name: 'André Breton', role: 'Surrealism’s founder; coined the French title', palette: ['#2e3a52', '#23303f', '#0c1018'] },
    { name: 'Pablo Picasso', role: 'The café anecdote’s other half', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Dora Maar', role: 'Photographer; at the café table', palette: ['#5a6a52', '#39402e', '#12140e'] },
    { name: 'Alfred H. Barr Jr.', role: 'MoMA director; brought it to New York', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
  ],
  annotations: [
    { label: 'The fur swallows the whole set', where: 'All three pieces: cup, saucer, and spoon, each sheathed in the same speckled tan fur', detail: 'It is not one furred object but an entire tea service gone shaggy. Cup, saucer, and spoon are all wrapped in the same speckled tan fur of a Chinese gazelle, so the unity of a matched tea set survives, only now the matching material is pelt. That repetition is part of the unease: the fur is not an accident on one piece but a decision that has overtaken the place setting.' },
    { label: 'The lip you would drink from', where: 'The rim of the cup, the edge that would meet your mouth', detail: 'Look at the lip of the cup, the edge you would actually drink from. That is where the whole queasy idea lives: fur meeting mouth, hair against the lip and the tongue. Porcelain belongs against the lips and fur belongs against skin, and the rim is where Oppenheim forces the two together. Most of the work’s force is bodily, and it is concentrated right here.' },
    { label: 'The furred spoon', where: 'The spoon, its bowl and handle still legible under the fur', detail: 'The spoon’s shape stays readable beneath the pelt: you can still find the bowl and the handle. At 8 inches it runs nearly twice the cup’s width, a long thing for so small a cup. But a fur-coated spoon is the most useless of the three things, you can neither stir with it nor lift anything to your mouth. The fur does not disguise the spoon so much as defeat it, leaving the silhouette of a tool with the use stripped out.' },
    { label: 'Use is denied, everywhere at once', where: 'The set as a whole: a cup that can’t hold tea cleanly, a saucer that can’t catch a drip, a spoon that can’t scoop', detail: 'The fur cancels every function in turn. A cup like this can’t hold tea without soaking; a saucer can’t catch a drip; a spoon can’t stir or scoop. It looks completely like a tea service and works like nothing. That total denial of use is the point of a Surrealist object: an everyday thing displaced just far enough that it stops being usable and starts being uncanny.' },
    { label: 'Comfort and revulsion in one glance', where: 'The fur surface overall, soft and strokable at sight, sickening at the thought of the mouth', detail: 'The fur reads first as soft, strokable, even luxurious, the touch of a fine collar or muff. Then the mind places it in the mouth and the softness curdles into a small gag. Both responses fire almost at once, and the work holds them there. The disgust is not a flaw in the comfort; it is built on top of it, which is exactly why a cozy tea set is the right thing to fur.' },
    { label: 'Small, ordinary, store-bought', where: 'The modest scale of the whole piece, a normal teacup under the pelt', detail: 'Note how modest it is. This is a normal-sized teacup, not a grand object, and the cup, saucer, and spoon underneath are plain store-bought goods. The unsettling charge comes from cheapness made strange, an everyday place setting turned uncanny, rather than from anything rare or grand. The disturbance is domestic, kitchen-scaled, which is part of why it sticks.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealism', mode: 'art' },
      { label: 'Breton’s Surrealist object', mode: 'art' },
      { label: 'Paris café culture', mode: 'civ' },
    ],
    children: [
      { label: 'The found-object readymade tradition', mode: 'art' },
      { label: 'Assemblage sculpture', mode: 'art' },
      { label: 'Feminist readings of the body in the household object', mode: 'civ' },
    ],
  },
}
```

---

## PART B — components

```tsx
// ─────────────────────────────────────────────────────────────
// Object (Meret Oppenheim, 1936) — the five sections
// In-copyright: no full inline figure of the work; the hero (shown small, credited
// under fair use) carries the image. The café exchange with Picasso is the standard
// REPORTED account, framed as "the story goes," never as documented fact. Three
// titles are kept distinct: Object is MoMA's; Le Déjeuner en fourrure ("Luncheon in
// Fur") is BRETON's coinage, not Oppenheim's. Gendered/sexual readings are presented
// as later reception, not stated intent. The "first work by a woman at MoMA" claim is
// stated AND scoped (1946 study-collection date; permanent collection only 1963).
// KEY STATEMENT = the 1975 Basel Kunstpreis speech ("Freedom is not given to you; you
// have to take it"), with the translation variant flagged. Name = "Meret" (no accent),
// matching MoMA + most sources. MoMA accession number is [VERIFY]-only in the fact
// pack, so none is asserted; the credit line "Purchase, 1946" with the
// study-collection/1963 wrinkle is the documented surface.
// NARRATIVES['object-fur'] = { cafe: ObjCafe, making: ObjMaking, looking: ObjLooking,
//   break: ObjBreak, afterlife: ObjAfterlife }
// ─────────────────────────────────────────────────────────────
function ObjCafe({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1936" title="The maker, and the movement she walked into" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>M</DropCap>
        eret Oppenheim (1913&ndash;1985; pronounced &ldquo;MEH-ret OPP-en-hime&rdquo;) was a German-born Swiss artist who had come to Paris in 1932, at eighteen, and fallen straight into the circle around the Surrealists. Surrealism, founded in Paris in 1924 by the poet <strong>Andr&eacute; Breton</strong> (1896&ndash;1966), was the movement built on the idea that the unconscious mind, the part that runs your dreams without asking, should be let up onto the canvas and the page, short-circuiting the tidy rational mind that normally keeps it quiet. Oppenheim modeled for the photographer <strong>Man Ray</strong>, showed in the group&rsquo;s exhibitions, and was, at twenty-two (she turned twenty-three that autumn), one of its youngest and most striking members. That inner circle was overwhelmingly male, and the women in it were more often muses and models than recognized authors. She was also broke, supporting herself partly by designing things to sell.
      </p>
      <p style={proseStyle}>
        One of those things was jewelry. She had designed a <strong>bracelet</strong>: a metal tube wrapped in fur, an animal warmth banded around the wrist. The couturi&egrave;re <strong>Elsa Schiaparelli</strong> (the daring Italian-French fashion designer who loved exactly this kind of strangeness) bought the design to sell in her shop. So in 1936 Oppenheim was walking around Paris with fur on her arm, and that small fact is where the most famous object in Surrealism is supposed to have begun.
      </p>

      <SectionHeader accent={accent} label="The café exchange" title="“Even this cup and saucer?”" />
      <p style={proseStyle}>
        The story goes like this, a well-repeated account rather than a documented transcript. Oppenheim was sitting at a Paris café (the retellings name the <strong>Caf&eacute; de Flore</strong>) with <strong>Pablo Picasso</strong> and his partner, the photographer <strong>Dora Maar</strong>. The two of them admired the fur bracelet, and Picasso joked that you could cover just about anything in fur. Oppenheim shot back, gesturing at the table, <strong>&ldquo;Even this cup and saucer?&rdquo;</strong> &mdash; and, as the tale continues, when her tea had gone cold she asked the waiter for <em>&ldquo;un peu plus de fourrure,&rdquo;</em> a little more fur.
      </p>
      <p style={proseStyle}>
        Take the scene with a light hand. It is repeated by reputable sources and is broadly consistent, but it is a reported exchange with small variations from telling to telling: which café, the exact words, whether the &ldquo;more fur&rdquo; line really happened that afternoon. What is solid is the riposte to Picasso, kept attributed to her, and the result. Shortly after, Oppenheim went and did the thing the joke had named. She bought a cup, a saucer, and a spoon, and she covered them in fur.
      </p>
    </article>
  )
}

function ObjMaking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The making · 1936" title="Bought, not made" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        here is almost nothing to the making, and that is the radical part. Oppenheim did not carve or model or cast anything. She went to a Paris department store, bought a plain white cup with its saucer and a metal teaspoon (ordinary goods, the kind of place setting in a thousand kitchens), and bought a piece of the speckled tan fur of a <strong>Chinese gazelle</strong>. Then she wrapped the cup, the saucer, and the spoon in the fur. The whole work is a purchase and a covering. The hand that made it spent more effort choosing than fabricating.
      </p>
      <p style={proseStyle}>
        That economy is deliberate and it is the engine of the thing. A traditional sculpture announces its labor: marble cut, bronze poured, hours of craft you can see. <em>Object</em> hides all of that, because there isn&rsquo;t any. What it asks you to register instead is a <em>decision</em>, a displacement, one familiar thing put in contact with a wrong material. The fur is real fur and the cup is a real cup, and the only art is the joining.
      </p>

      <SectionHeader accent={accent} label="Three names, one cup" title="What it’s called, and who named it" />
      <p style={proseStyle}>
        Three different titles attach to this single object, and they are not interchangeable. <strong><em>Object</em></strong> is the plain title <strong>MoMA</strong> uses, often expanded, descriptively, to <em>Object (Fur-covered cup, saucer, and spoon)</em>, the medium pressed into service as a name. The romantic French nickname everyone repeats is <strong><em>Le D&eacute;jeuner en fourrure</em></strong>, usually rendered <strong>&ldquo;Luncheon in Fur&rdquo;</strong> (loose English versions like <em>Breakfast in Fur</em> are one more step removed).
      </p>
      <p style={proseStyle}>
        Here is the trap: that French title was <strong>not Oppenheim&rsquo;s.</strong> <strong>Breton</strong>, the Surrealist leader, hung it on the cup as a literary pun, glancing at Manet&rsquo;s famous picnic painting <em>Le D&eacute;jeuner sur l&rsquo;herbe</em> and, more slyly, at the erotic novel <em>Venus in Furs</em>, an association Breton built into the name rather than one Oppenheim put in the cup. Her own working title was prosaic, roughly <em>cup, saucer and spoon covered with fur.</em> So when you see the witty French name credited to her, that is Breton&rsquo;s wit, not hers. Use <em>Object</em> as the real title; treat the French as the nickname a colleague hung on it.
      </p>
    </article>
  )
}

function ObjLooking({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The object" title="First, how small and ordinary it is" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        eople expecting an icon are often surprised by the scale. This is not a monument. The cup is about <strong>4 3/8 inches across</strong>, the saucer about <strong>9 3/8 inches</strong>, the spoon roughly <strong>8 inches</strong> long, and the whole assembled set stands only about <strong>2 7/8 inches</strong> tall. It is a normal teacup, exactly the size of the one you might have had your tea in this morning, and the cup, saucer, and spoon beneath the fur are plain, cheap, store-bought goods. The whole charge of the piece comes from something cheap and familiar made strange, not from anything grand.
      </p>
      <p style={proseStyle}>
        And then the fur. Every one of the three pieces is sheathed in the same speckled tan gazelle fur. This is the first thing to register: it is not one furred object sitting on bare china, but a whole matched tea service gone shaggy, the unity of a place setting preserved and turned animal. The cup is furred, the saucer is furred, the spoon is furred, all in one pelt.
      </p>

      <SectionHeader accent={accent} label="The rim, and the spoon" title="Where the idea actually lives" />
      <p style={proseStyle}>
        Look at the <strong>lip of the cup</strong>, the edge you would drink from. That is where the work happens. Porcelain is made to meet the lips; fur is made to lie against skin; and the rim is the seam where Oppenheim presses the two into the same inch of space. To picture drinking from it is to feel hair on the tongue, and the whole queasy idea of the piece is concentrated right there, at the place you would put your mouth.
      </p>
      <p style={proseStyle}>
        Now the <strong>spoon</strong>. Its shape stays legible under the pelt; you can still find the bowl and the handle. At 8 inches it runs nearly twice the cup&rsquo;s width, a long thing for so small a cup. And a fur-coated spoon is the most useless of the three things. You cannot stir with it; you cannot lift anything to your mouth with it. The fur does not hide the tool so much as cancel it, leaving the unmistakable silhouette of a spoon with the function stripped clean out.
      </p>

      <SectionHeader accent={accent} label="Comfort, then revulsion" title="Two responses, fired at once" />
      <p style={proseStyle}>
        Take in the whole set and notice that the fur cancels <strong>every</strong> use at the same time: a cup that can&rsquo;t hold tea without soaking, a saucer that can&rsquo;t catch a drip, a spoon that can&rsquo;t scoop. It looks completely like a tea service and works like nothing. And the surface that does the canceling reads, at first glance, as <strong>soft</strong>, strokable, even luxurious, the touch of a good fur collar. Then the mind sets it in the mouth, and the softness curdles. Both responses fire almost together: the pleasure of the pelt and the small gag of fur against the lip. The work holds you in that double take, and refuses to release you to one feeling or the other.
      </p>
    </article>
  )
}

function ObjBreak({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The break · before" title="Sculpture meant a thing made" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        o feel why a furred teacup mattered, set it against what sculpture had always meant. For centuries a sculpture was a thing <em>made</em>: stone carved away, clay modeled up, bronze poured into a mold. The artist&rsquo;s labor was the point, and you could read it in the surface. And the prized materials, fine porcelain, good fur, signaled luxury and decorum: a teacup was a teacup, an emblem of polite ritual, and fur was the warmth on a wealthy collar. The two belonged to the same comfortable world and never touched. Nobody furred a cup, because there was no reason a maker would ever want one to be anything but a cup.
      </p>

      <SectionHeader accent={accent} label="The break · what she did" title="The found object becomes the sculpture" />
      <p style={proseStyle}>
        Oppenheim did two breaking things in one small piece. The first is about <em>how</em> it is made: nothing here is carved or cast. She <strong>buys</strong> a cup and a pelt and joins them, so the artwork becomes a <strong>found-object assemblage</strong> (a sculpture made by combining ready-made things rather than fabricating them). This is the Surrealist <strong>object</strong> as a category arriving as sculpture in its own right: the everyday thing displaced into art, charged with dream-logic and desire. Just weeks earlier, in May 1936, Breton had mounted the <em>Exposition surr&eacute;aliste d&rsquo;objets</em> in Paris to formalize exactly this idea, and <em>Object</em> became its type-specimen. The work is the <em>idea and the displacement</em>, not the craft. The choosing is the sculpting.
      </p>
      <p style={proseStyle}>
        The second break is about <em>what</em> it does to you. Oppenheim fused two feelings that have no business together: the cozy ritual of tea and the gag reflex of fur in the mouth. That collision is not a side effect; it is the content. A domestic comfort-object, the most reassuring thing on a table, is turned uncanny and faintly obscene, and the unease is built on top of the comfort rather than instead of it. And the collision travels: <em>Object</em> became the canonical Surrealist object and a permanent reference point for found-object and assemblage art, for the uncanny everyday, and, later, for readings of the body lurking in the household thing. Those bodily and erotic readings are real and have made the work a touchstone, but they came <strong>after</strong>, from critics; Oppenheim neither fully endorsed them nor controlled them, and she grew wary of being reduced to the fur cup. Hold them as reception, not as a statement of what she set out to say.
      </p>
    </article>
  )
}

function ObjAfterlife({ accent }: { accent: string; onZoom: (src: string, cap: string) => void }) {
  return (
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Provenance · 1936" title="From a Paris show to a vote at MoMA" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he little cup moved fast. It debuted in Paris in May 1936 at Breton&rsquo;s <em>Exposition surr&eacute;aliste d&rsquo;objets</em> at the Charles Ratton gallery, then traveled that year to the <strong>London International Surrealist Exhibition</strong>, where <strong>Alfred H. Barr Jr.</strong>, the founding director of New York&rsquo;s <strong>Museum of Modern Art</strong>, saw it. Barr brought it into MoMA&rsquo;s landmark winter exhibition <em>Fantastic Art, Dada, Surrealism</em> (1936&ndash;37), and there something telling happened: visitors to the show voted <em>Object</em> the <strong>&ldquo;quintessential Surrealist object.&rdquo;</strong> Of everything in a large survey, the public picked the furred teacup as the one that most was what Surrealism meant.
      </p>
      <p style={proseStyle}>
        On the way into MoMA&rsquo;s own collection, one nuance is worth keeping rather than flattening. MoMA&rsquo;s credit line reads <strong>&ldquo;Purchase,&rdquo;</strong> with the acquisition dated <strong>1946</strong>, and several sources say Barr bought it himself while conservative trustees balked. By those accounts it entered the museum&rsquo;s <strong>study collection in 1946</strong> and was formally accessioned into the permanent collection in <strong>1963</strong>; the public credit line still says Purchase.
      </p>
      <p style={proseStyle}>
        That 1946 date is the root of a claim you will see everywhere: that <em>Object</em> was the <strong>first work by a woman to enter MoMA&rsquo;s collection</strong>, the distinction that earned Oppenheim the nickname &ldquo;the First Lady of MoMA.&rdquo; It is worth stating carefully. The claim hangs on the 1946 study-collection date; the work was not accessioned into the permanent collection until 1963, and the sources run from the confident (&ldquo;MoMA&rsquo;s first work by a female artist&rdquo;) to the hedged (she was <em>thought</em> to be the first woman in the collection). Take it as a widely-repeated distinction with a real asterisk, not a settled record.
      </p>

      <SectionHeader accent={accent} label="Famous at 22" title="The trap of one perfect object" />
      <p style={proseStyle}>
        The fame was instant and it was a cage. Oppenheim was <strong>twenty-two</strong> when she made <em>Object</em> in the spring of 1936 (she turned twenty-three that October), and the cup made her a celebrity of Surrealism almost overnight. But a single, perfect, unforgettable work can eclipse a whole life, and this one did: for decades she was &ldquo;the fur-teacup woman,&rdquo; the maker of one famous thing, while a long and varied career, poetry, painting, objects, sculpture, jewelry, ran on for another half-century behind it. She came to resent the reduction, both the reduction to the one object and the reduction to a &ldquo;woman Surrealist,&rdquo; a muse and a mascot rather than an artist with a full body of work.
      </p>
      <p style={proseStyle}>
        That resentment hardened into one of the things she is best remembered for saying. Accepting the <strong>Art Award of the City of Basel</strong> (the Basler Kunstpreis) on <strong>16 January 1975</strong>, she spoke about what it took to be a woman and an artist, and ended on this:
      </p>
      <blockquote style={{ margin: '4px 0 16px', padding: '2px 0 2px 16px', borderLeft: `3px solid ${accent}`, fontFamily: SERIF, fontSize: 19, fontStyle: 'italic', lineHeight: 1.5, color: INK }}>
        &ldquo;Freedom is not given to you &mdash; you have to take it.&rdquo;
      </blockquote>
      <p style={proseMutedStyle}>
        Meret Oppenheim, from her 1975 Basel Kunstpreis acceptance speech. The line is genuinely hers, but it circulates in two near-identical translations of the same sentence, also rendered &ldquo;Freedom is not given; one has to take it.&rdquo; That is one saying in two English dresses, not two sayings.
      </p>
      <p style={proseStyle}>
        It is a fitting line to leave the fur cup on. The object that made her famous nearly swallowed everything else she did, and the woman who made it spent her life insisting she was more than its maker, that no one was going to hand her a place in art and she would have to take it. The teacup is still in New York, still small, still impossible to drink from, and visitors still flinch at the rim. The flinch is the proof that it works.
      </p>
    </article>
  )
}

// REGISTRY (coordinator splices into NARRATIVES):
//  'object-fur': { cafe: ObjCafe, making: ObjMaking, looking: ObjLooking, break: ObjBreak, afterlife: ObjAfterlife },
```
