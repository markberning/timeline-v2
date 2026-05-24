'use client'

// Cubism — the movement's own six-chapter narrative, 1907–1922. One altitude
// above the Demoiselles work read. House voice (dry wit dialed up, comparisons to
// land the points); inline figures honour the copyright tiers in art-content.ts
// (pre-1931 → inline + Rights line; in-copyright → RestrictedFigure). Revised
// 2026-05-23 against the art content pipeline gates (facts, looking, clarity,
// framing, comprehensiveness) — see audits/art-content-pipeline.md.
//
// Registered by movement id in MOVEMENT_NARRATIVES at the bottom.

import {
  DropCap, SectionHeader, PaintingFigure, MeanwhileSheet,
  proseStyle, italicStyle, PD_RIGHTS, AMBER, BLUE,
  type Narrative,
} from '@/components/mode/art-reader'
import { ART_IMG } from '@/lib/art-content'

const CEZANNE = ['#5a7042', '#8a7848', '#1c1a12'] as [string, string, string]
const PIC = ['#c0a06c', '#3d3a2e', '#8a6b3a'] as [string, string, string]
const BRAQUE = ['#7a6a4a', '#3a3020', '#100c08'] as [string, string, string]
const STONE = ['#5a4a3a', '#2a221c', '#0a0606'] as [string, string, string]

// ── 1. Before the cube ──────────────────────────────────────
const BeforeNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1906" title="One painter, three obsessions" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>C</DropCap>
        ubism did not arrive as a manifesto. It arrived as a private problem in the head of a 25-year-old
        Spaniard named Pablo Picasso, living broke at the top of a Montmartre tenement, and it began with
        three things he had recently seen and could not stop thinking about. Think of them as three sticks of
        dynamite stored in one small studio: harmless apart, and together the blast that splits European art
        in half.
      </p>

      <SectionHeader accent={accent} label="The first thing" title="Cézanne, who had just died" />
      <p style={proseStyle}>
        Paul Cézanne died in October 1906, and within months every ambitious painter in Paris had filed
        through his memorial shows to work out what they had been missing. What they found was an old man who
        had quietly stopped pretending a painting was a window onto a real scene. Cézanne built his apples and
        his mountains out of small facets of colour that did not blend but butted up against each other, like a
        bricklayer who lets you see every brick. He even let a single tabletop tilt at two angles at once —
        which is, if you think about it, closer to how you actually scan a table than the polite fiction that
        you take it in from one frozen spot with one unblinking eye.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={CEZANNE}
        imageUrl={ART_IMG.cezanneBathers}
        ratio="6/5"
        alt="Cézanne, The Large Bathers"
        caption={<>The bathers, the trees and the sky are all built from the same blunt facets.</>}
        credit={<>Cézanne,{' '}<em>The Large Bathers</em>, 1898–1905 · Philadelphia Museum of Art</>}
        rights="Public domain worldwide (Paul Cézanne died 1906). Wikimedia Commons."
      />
      <p style={proseStyle}>
        &ldquo;Treat nature by the cylinder, the sphere, the cone,&rdquo; Cézanne had written to a young
        painter. Picasso and his eventual partner Georges Braque both read that line less as advice than as a
        dare.
      </p>

      <SectionHeader accent={accent} label="The second and third things" title="A stolen stone head and a room of masks" />
      <p style={proseStyle}>
        The second thing was a pair of ancient Iberian stone heads — frontal, almond-eyed, severe — that
        Picasso acquired in 1907 from an associate of his poet friend Apollinaire. The provenance turned out to
        be the kind that makes a museum curator reach for a drink: the heads had been lifted straight out of the
        Louvre. Stolen or not, they did their work. The faces in the huge canvas on Picasso&rsquo;s wall began
        to harden into their stillness.
      </p>
      <p style={proseStyle}>
        The third thing was a visit, in mid-1907, to the ethnographic museum in the Trocadéro palace — a hall
        crammed with masks and figures from the Fang, Kota and other West and Central African peoples, hauled
        to Paris as colonial plunder and displayed as curiosities rather than as the precise, purposeful
        sculpture they were. By his own account, given to the writer André Malraux decades later, Picasso had
        something like a conversion experience there: he understood, he said, that an image could be a weapon
        or a charm, a thing made to{' '}<em>do</em>{' '}something rather than to flatter. It is a wonderful story, and
        worth remembering that it is also a story Picasso told about himself, long after the fact and after years
        of denying he owed African art anything at all.
      </p>
      <p style={proseStyle}>
        He carried all three obsessions back to a canvas nearly eight feet square. By the end of July 1907 it
        was finished: five women, a slash of curtain, a little still life, and two faces dragged halfway into
        masks. Picasso called it, bluntly,{' '}<em>the brothel of Avignon</em>; the loftier title we use now —
        <em> Les Demoiselles d&rsquo;Avignon</em>{' '}— was a later, more respectable coat of paint applied by his
        friends. The picture has its own five-chapter story one level down. Here it matters as the starting
        gun.
      </p>

      <SectionHeader accent={accent} label="L'Estaque · 1908" title="Braque, and a word coined as an insult" />
      <p style={proseStyle}>
        Georges Braque, born in 1882, was a young Fauve — one of the painters then using raw, blazing colour
        with no shading to round things out — when a friend marched him into Picasso&rsquo;s studio to see the
        Demoiselles. He hated it. He is supposed to have said it was like being made to eat rope and drink
        turpentine, though the exact wording drifts from teller to teller. Within a year he was painting in the
        new manner anyway. That summer at L&rsquo;Estaque in the south of France he sent back landscapes in
        which houses and trees had been squared off into tilting brown blocks.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={BRAQUE}
        imageUrl={ART_IMG.braqueEstaque}
        ratio="4/5"
        alt="Braque, Houses at l'Estaque"
        caption={<>The houses are stacked like a child&rsquo;s building blocks, the sky squeezed flat behind them.</>}
        credit={<>Braque,{' '}<em>Houses at L&rsquo;Estaque</em>, 1908 · Lille Métropole Museum</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        When Braque showed these, the painter Henri Matisse reportedly grumbled to the critic Louis Vauxcelles
        that they were nothing but &ldquo;little cubes,&rdquo; and Vauxcelles printed the jibe. As with
        &ldquo;Impressionism&rdquo; and &ldquo;Fauvism&rdquo; before it, the movement took its name from a critic
        reaching for an insult. By the next summer the insult was a banner.
      </p>
    </article>

    <MeanwhileSheet
      accent={AMBER}
      region="Vienna"
      title="Freud is taking the mind apart in the same years."
      body="As Picasso pulls the single viewpoint to pieces, Sigmund Freud is arguing that the self is not one smooth surface either, but a stack of competing layers. The age keeps discovering that the unified, single-angle view of things was always a convenient fiction."
    />
  </>
)

// ── 2. Two men, one rope ────────────────────────────────────
const AnalyticNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1909–1911" title="Roped together" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        rom about 1909 Picasso and Braque stopped being rivals and became a two-man laboratory. They lived
        near each other in Montmartre, visited daily, and worked so closely that Braque later compared it to
        two mountaineers roped together — if one slipped, both fell. They showed each other every canvas in
        progress, and sometimes did not sign the fronts, which meant collectors occasionally paid full price
        for a painting and then had to turn it over to find out whose it was. It is still, more than a century
        on, genuinely hard for experts to tell some of their pictures apart.
      </p>
      <p style={proseStyle}>
        The summer of 1909 is when the experiment clicks into a method. Picasso spent it at Horta de Ebro, his
        family&rsquo;s Catalan village, and painted the houses there as a stack of nesting, light-catching
        cubes — hillside and buildings cut from the same crystalline blocks, the sky pulled down flat behind
        them.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PIC}
        imageUrl={ART_IMG.picassoHorta}
        ratio="5/6"
        alt="Picasso, Houses on the Hill, Horta de Ebro"
        caption={<>The whole village and its hill are cut from one set of facets, so it is hard to say where the rock stops and the houses begin.</>}
        credit={<>Picasso,{' '}<em>Houses on the Hill, Horta de Ebro</em>, 1909 · private collection</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="The method" title="What 'Analytic' means" />
      <p style={proseStyle}>
        Historians call this phase{' '}<strong>Analytic Cubism</strong>, because the painters take an object apart
        — analyse it — and lay several of its sides down on the flat canvas at once. Picture trying to describe
        a friend by pinning up their passport photo, their profile and the back of their head in a single
        frame: that is roughly the deal. The colour drains away to browns, greys and ochres, because colour
        would only distract from the real subject, which is{' '}<em>structure</em>. A guitar shows you its face,
        its edge and its sound-hole simultaneously. And the law that had governed European painting since the
        1400s — that a picture is a window seen from one fixed spot, with one eye, in one frozen instant — is
        quietly repealed.
      </p>
      <p style={proseStyle}>
        In the autumn of 1910 Picasso painted his dealer, the 26-year-old German{' '}<strong>Daniel-Henry
        Kahnweiler</strong>, in this new language: a man dissolved into a shimmer of facets, findable only by a
        watch chain, a wave of hair, a pair of clasped hands. Kahnweiler had been quietly buying almost
        everything the two of them made and asking for no explanations — the rare early backer who simply
        trusted them with his money.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={STONE}
        imageUrl={ART_IMG.kahnweiler}
        ratio="3/4"
        alt="Picasso, Portrait of Daniel-Henry Kahnweiler"
        caption={<>Find the watch chain and the clasped hands first; the rest of the man assembles itself around them.</>}
        credit={<>Picasso,{' '}<em>Portrait of Daniel-Henry Kahnweiler</em>, 1910 · Art Institute of Chicago</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        Braque, meanwhile, was doing the same to the still life — a violin, a jug, a folded newspaper — and
        slipping in a painter&rsquo;s private joke: a single trompe-l&rsquo;œil nail (trompe-l&rsquo;œil is
        French for &ldquo;fool the eye&rdquo; — paint so convincing you nearly reach for it), complete with a
        cast shadow, hammered into the top of a picture that has otherwise given up on illusion entirely. It is
        as if he were asking which kind of lie you would prefer.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={BRAQUE}
        imageUrl={ART_IMG.braqueViolinJug}
        ratio="3/4"
        alt="Braque, Violin and Jug"
        caption={<>The painted nail at the very top throws a real-looking shadow over a picture that has otherwise abandoned realism.</>}
        credit={<>Braque,{' '}<em>Violin and Jug</em>, 1910 · Kunstmuseum Basel</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        For two years the pair kept climbing. The higher they went, the harder the pictures were to read — until
        they reached a height where even they started to get nervous.
      </p>
    </article>
  </>
)

// ── 3. The world in shards ──────────────────────────────────
const ShardsNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1911–1912" title="The edge of legibility" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y 1911 Picasso and Braque had faceted the world so finely that their pictures hovered on the edge of
        pure abstraction. A portrait of a girl with a mandolin still has a shoulder, a breast, the curve of the
        instrument — but they float in a haze of overlapping planes, and you have to assemble the figure the way
        you assemble a face out of television static. Historians call this the{' '}<em>hermetic</em>{' '}phase, meaning
        sealed, nearly airless. The two painters got nervous enough about it that they began smuggling clues
        back in: a stencilled letter, a scrap of sheet music, the rope-weave of a chair — little handrails so a
        viewer would not float off the picture entirely.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PIC}
        imageUrl={ART_IMG.girlWithMandolin}
        ratio="5/6"
        alt="Picasso, Girl with a Mandolin"
        caption={<>Already at the edge of legibility; within a year the pictures would push past it.</>}
        credit={<>Picasso,{' '}<em>Girl with a Mandolin (Fanny Tellier)</em>, 1910 · MoMA</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="Salle 41 · spring 1911" title="The public meets Cubism — without its inventors" />
      <p style={proseStyle}>
        Here is the strange part. The two men who invented Cubism barely showed it in public; Kahnweiler sold
        their work privately, mostly to foreign collectors, which kept the prices steady and the scandals to a
        minimum. So when Paris finally met &ldquo;Cubism&rdquo; as a public outrage — at the Salon des
        Indépendants of 1911, the big open exhibition that, unlike the official Salon, had no jury to keep
        anything out — the room that became notorious as{' '}<strong>Salle 41</strong>{' '}held no Picassos and no
        Braques at all. The walls were a thicket of brown-grey planes, tilted faces and faceted figures by a{' '}<em> second wave</em>{' '}of painters: Albert Gleizes, Jean Metzinger, Fernand Léger, Robert Delaunay and
        Henri Le Fauconnier, all French, all in their twenties and thirties, who had picked the idea up
        secondhand. Crowds jeered, newspapers cried anarchy, and a movement neither founder had named or hung
        became front-page news.
      </p>
      <p style={proseStyle}>
        It was the perfect modern story: the laboratory builds the bomb in private, and the public first meets
        it through the people who carried it out of the building. Those carriers — the Salon Cubists — get the
        next chapter, because they did the one thing Picasso and Braque flatly refused to do. They explained
        themselves.
      </p>
      <p style={proseStyle}>
        Picasso, asked late in life whether he had set out to demolish perspective, only shrugged. He had been
        trying, he said, to paint what he knew was there — not merely the sliver of it that one eye reports from
        one spot. The revolution, in his telling, was just honesty about how looking actually works.
      </p>
    </article>

    <MeanwhileSheet
      accent={BLUE}
      region="Munich"
      title="Kandinsky is about to drop the subject altogether."
      body="While Cubism clings to a shoulder and a mandolin as handrails, in Munich the Russian painter Wassily Kandinsky is making pictures of nothing but colour and line — among the first fully abstract paintings. If Cubism took the window apart pane by pane, Kandinsky simply threw the whole window out."
    />
  </>
)

// ── 4. Pasted paper ─────────────────────────────────────────
const PaperNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1912" title="A scrap of oilcloth" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n the spring of 1912 Picasso did something small and irreversible. Onto an oval still-life canvas he
        glued a strip of cheap, machine-printed oilcloth — the kind sold by the yard to line kitchen shelves —
        patterned to look like the caning of a chair, and ran a length of rope around the edge as a frame. Stop
        and feel how strange that is: the caning is not painted, not even imitated by hand. It is a factory-made
        picture of caning, a found scrap, stuck straight onto what would become a canonical work of Western art.
        For the first time a painter pointed at a piece of the real world and said{' '}<em>that&rsquo;ll do</em>{' '}instead of laboriously copying it.{' '}<em>Still Life with Chair Caning</em>{' '}is usually called the first
        modern collage, and it sets off a question painting has been arguing about ever since: if a glued scrap
        can do the job, what exactly is the painter{' '}<em>for</em>?
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#b89055', '#3a3020', '#1a1208']}
        imageUrl={ART_IMG.grisBreakfast}
        ratio="4/5"
        alt="Juan Gris, Le Petit Déjeuner (Breakfast)"
        caption={<>The new technique in another pair of hands (Juan Gris, a younger Spanish Cubist): real printed wallpaper and paper pasted straight into the picture.</>}
        credit={<>Juan Gris,{' '}<em>Le Petit Déjeuner (Breakfast)</em>, 1914 · Centre Pompidou, Paris</>}
        rights="Public domain worldwide (Juan Gris died 1927). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="Synthetic Cubism" title="Building up instead of breaking down" />
      <p style={proseStyle}>
        That autumn Braque answered with{' '}<em>papier collé</em>{' '}— pasted paper. He bought a roll of wallpaper
        printed to imitate oak grain, cut it into strips, and built a picture out of them. Where Analytic
        Cubism had{' '}<em>taken objects apart</em>, this new mode{' '}<em>assembled</em>{' '}pictures out of ready-made
        stuff: newspaper, sheet music, cigarette wrappers, stencilled letters, fake wood, fake marble. Call it
        the difference between an autopsy and a scrapbook. Historians call it{' '}<strong>Synthetic Cubism</strong>.
        The colour comes back, the planes go big and flat and almost poster-like, and the real world — actual
        newsprint reporting actual Balkan wars — gets pasted bodily into the art.
      </p>
      <p style={proseStyle}>
        It looks like a footnote and it is a hinge. Photomontage (pictures built from cut-up photographs),
        Dada&rsquo;s cut-ups, Surrealist collage, Pop Art&rsquo;s soup cans, the whole modern idea that an artist
        might{' '}<em>select and arrange</em>{' '}existing images rather than render everything from scratch — all of it
        walks through the door Picasso and Braque opened in 1912 with a pot of glue and a yard of shelf liner.
      </p>
    </article>
  </>
)

// ── 5. Cubism goes public ───────────────────────────────────
const PublicNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The Salon Cubists" title="The wave that explained itself" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icasso and Braque never wrote a manifesto and rarely exhibited. The painters who turned Cubism into a
        public movement were the second wave — <strong>Albert Gleizes</strong>{' '}and{' '}<strong>Jean Metzinger</strong>{' '}(the theorists),{' '}<strong>Fernand Léger</strong>{' '}(who pushed it toward gleaming tubes and pistons),{' '}<strong> Robert Delaunay</strong>{' '}(toward pure colour), and the Spaniard{' '}<strong>Juan Gris</strong>{' '}(toward
        a tight, almost mathematical order). All French or Paris-based, all younger, they showed at the big
        open Salons, argued in the cafés, and in 1912 did the unthinkable: they turned a style into a theory.
        Gleizes and Metzinger published{' '}<em>Du Cubisme</em>, the first book on the movement, and a sprawling
        group show called the{' '}<em>Section d&rsquo;Or</em>{' '}(&ldquo;Golden Section,&rdquo; after the classical
        proportion) gathered dozens of them under one roof. Cubism now had a name, a literature and a crowd.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#8a6b3a', '#3a2820', '#0e0805']}
        imageUrl={ART_IMG.metzingerTea}
        ratio="4/5"
        alt="Jean Metzinger, Tea Time"
        caption={<>A woman with a teacup, her face split into a calm front-and-profile at once. A critic dubbed it &ldquo;the Mona Lisa of Cubism&rdquo;; the Salon Cubists kept the figure far more readable than the founders did.</>}
        credit={<>Jean Metzinger,{' '}<em>Le Goûter (Tea Time)</em>, 1911 · Philadelphia Museum of Art</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        Their champion was the poet{' '}<strong>Guillaume Apollinaire</strong>, a one-man label factory who reviewed
        the shows, defended them in print, and minted names the way a mint makes coins — he christened
        Delaunay&rsquo;s colour-drunk, near-abstract variant{' '}<em>Orphism</em>{' '}(after Orpheus, because he thought
        it worked on you like music). Robert Delaunay rarely worked alone: his partner{' '}<strong>Sonia Delaunay</strong>{' '}drove the same colour experiments and carried them off the canvas entirely, into fabric, fashion and
        book design — which is a large part of why Orphism outlived the painting room.
      </p>

      <SectionHeader accent={accent} label="New York · 1913" title="The freight train reaches America" />
      <p style={proseStyle}>
        In February 1913 a vast show called the{' '}<strong>Armory Show</strong>{' '}opened in a New York drill hall and
        dragged European modern art in front of the American public for the first time. The{' '}<em> succès de scandale</em>{' '}— a hit precisely{' '}<em>because</em>{' '}it caused a scandal — was a
        Cubo-Futurist canvas by Marcel Duchamp,{' '}<em>Nude Descending a Staircase</em>: a figure smeared into a
        cascade of overlapping slats, less a nude than the photographic blur of one walking downstairs. A
        baffled critic called it &ldquo;an explosion in a shingle factory&rdquo;; a newspaper cartoonist redrew
        it as &ldquo;the rude descending a staircase — rush hour at the subway.&rdquo; People queued to be
        outraged. And then American collectors started buying. The centre of gravity of modern art was still
        firmly in Paris — but a wire had just been strung across the Atlantic, and thirty years later the
        current would reverse.
      </p>
    </article>
  </>
)

// ── 6. Mobilisation ─────────────────────────────────────────
const AfterNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="August 1914" title="The rope is cut" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        n the 2nd of August 1914, France mobilised, and Braque was called up that same day; Léger went into the
        army that month; Apollinaire, Italian-born and not yet a French citizen, talked his way into uniform by
        the end of the year. Picasso — a Spaniard, and neutral — was not called, and he went down to the station
        at Avignon to see Braque off. He said afterward that he never saw his old climbing partner again,
        meaning the partnership: the two of them never again worked side by side. Kahnweiler, a German, had his
        entire stock of their paintings seized by the French state as enemy property — which left the French
        government, by accident and decree, holding one of the largest hoards of Cubist art on earth. The
        laboratory was emptied in a week.
      </p>
      <p style={proseStyle}>
        The war did not deal gently with them. Braque took a head wound at Carency in 1915, was trepanned (a
        disc of skull cut away to ease the pressure), and came back a slower, graver painter. Apollinaire took
        shrapnel to the skull in 1916, never fully recovered, and died in the influenza pandemic of November
        1918 — two days before the Armistice, at 38. The man who had explained Cubism to the world did not live
        to see the peace.
      </p>

      <SectionHeader accent={accent} label="After" title="A language, loose in the world" />
      <p style={proseStyle}>
        Picasso, during and after the war, swerved — into stage designs for the{' '}<em>Ballets Russes</em>{' '}(the
        dazzling Paris-based Russian dance company everyone in the arts was chasing), into a cool neoclassicism
        of heavy, stone-coloured figures that looked back to ancient Greece and Rome, and then back into a flat,
        bright, almost decorative Cubism in big set-pieces like{' '}<em>Three Musicians</em>. Juan Gris carried the
        strict version forward as an almost classical system until his early death in 1927. The movement as a
        daily shared adventure was over by 1914; but by then it had stopped being a movement and become a{' '}<em> language</em>.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#c8a72a', '#7a1422', '#1c0a08']}
        imageUrl={ART_IMG.picassoThreeMusicians}
        ratio="5/6"
        alt="Picasso, Three Musicians"
        caption={<>Three masked carnival figures — a Harlequin, a Pierrot, a monk — built from flat coloured cut-outs: the broken window of Analytic Cubism turned into stained glass.</>}
        credit={<>Picasso,{' '}<em>Three Musicians</em>, 1921 · Philadelphia Museum of Art</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        That language went everywhere. The Russian Constructivists, the Dutch De Stijl painters, the German
        Bauhaus, the entire road to pure abstraction — all of them start from the permission Cubism granted:
        that a picture is a flat made thing, free to show several truths at once and to paste the real world
        straight into itself. Two painters in Montmartre had spent six years roped together over a single
        problem; a noisier second wave had argued, written and exhibited it into the open; and between them they
        handed the rest of the century its grammar.
      </p>
      <p style={italicStyle}>
        To watch it all begin in a single object, drop one level down to{' '}<em>Les Demoiselles d&rsquo;Avignon</em>
        — the canvas that fired the starting gun.
      </p>
    </article>
  </>
)

export const MOVEMENT_NARRATIVES: Record<string, Record<string, Narrative>> = {
  cubism: {
    before: BeforeNarrative,
    analytic: AnalyticNarrative,
    shards: ShardsNarrative,
    paper: PaperNarrative,
    public: PublicNarrative,
    after: AfterNarrative,
  },
}
