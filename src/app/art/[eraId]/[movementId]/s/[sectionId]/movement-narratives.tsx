'use client'

// Cubism — the movement's own six-chapter narrative, 1907–1922. One altitude
// above the Demoiselles work read. House voice (dry wit dialed up, comparisons to
// land the points); inline figures honor the copyright tiers in art-content.ts
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

// ── Realism palettes (figure fallbacks) + per-artist rights lines ──
const R_COURBET = ['#6b6354', '#39322a', '#120f0c'] as [string, string, string]
const R_STONE = ['#7a7064', '#42382c', '#15110c'] as [string, string, string]
const R_STUDIO = ['#7a6a4a', '#3a3020', '#100c08'] as [string, string, string]
const R_MILLET = ['#a8915a', '#5a4a2a', '#1a1410'] as [string, string, string]
const R_SOWER = ['#5a5238', '#332c1e', '#100c08'] as [string, string, string]
const R_ANGELUS = ['#7a6a44', '#3e3320', '#12100a'] as [string, string, string]
const R_DAUMIER = ['#7a7064', '#42382c', '#15110c'] as [string, string, string]
const R_CARRIAGE = ['#53412c', '#2a1f14', '#0c0805'] as [string, string, string]
const R_BONHEUR = ['#8a7a52', '#4a3c22', '#15110a'] as [string, string, string]
const PD_COURBET = 'Public domain worldwide (Gustave Courbet died 1877). Wikimedia Commons.'
const PD_MILLET = 'Public domain worldwide (Jean-François Millet died 1875). Wikimedia Commons.'
const PD_DAUMIER = 'Public domain worldwide (Honoré Daumier died 1879).'
const PD_BONHEUR = 'Public domain worldwide (Rosa Bonheur died 1899). Wikimedia Commons.'

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
        his mountains out of small facets of color that did not blend but butted up against each other, like a
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
        Georges Braque, born in 1882, was a young Fauve — one of the painters then using raw, blazing color
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
        — analyze it — and lay several of its sides down on the flat canvas at once. Picture trying to describe
        a friend by pinning up their passport photo, their profile and the back of their head in a single
        frame: that is roughly the deal. The color drains away to browns, grays and ochres, because color
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
        Braques at all. The walls were a thicket of brown-gray planes, tilted faces and faceted figures by a{' '}<em> second wave</em>{' '}of painters: Albert Gleizes, Jean Metzinger, Fernand Léger, Robert Delaunay and
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
      body="While Cubism clings to a shoulder and a mandolin as handrails, in Munich the Russian painter Wassily Kandinsky is making pictures of nothing but color and line — among the first fully abstract paintings. If Cubism took the window apart pane by pane, Kandinsky simply threw the whole window out."
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
        The color comes back, the planes go big and flat and almost poster-like, and the real world — actual
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
        public movement were the second wave — <strong>Albert Gleizes</strong>{' '}and{' '}<strong>Jean Metzinger</strong>{' '}(the theorists),{' '}<strong>Fernand Léger</strong>{' '}(who pushed it toward gleaming tubes and pistons),{' '}<strong> Robert Delaunay</strong>{' '}(toward pure color), and the Spaniard{' '}<strong>Juan Gris</strong>{' '}(toward
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
        Delaunay&rsquo;s color-drunk, near-abstract variant{' '}<em>Orphism</em>{' '}(after Orpheus, because he thought
        it worked on you like music). Robert Delaunay rarely worked alone: his partner{' '}<strong>Sonia Delaunay</strong>{' '}drove the same color experiments and carried them off the canvas entirely, into fabric, fashion and
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
        outraged. And then American collectors started buying. The center of gravity of modern art was still
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
        of heavy, stone-colored figures that looked back to ancient Greece and Rome, and then back into a flat,
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
        caption={<>Three masked carnival figures — a Harlequin, a Pierrot, a monk — built from flat colored cut-outs: the broken window of Analytic Cubism turned into stained glass.</>}
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

// ════════════════════════════════════════════════════════════
// REALISM — the Modern era's opening revolt, 1848–1870. Six chapters,
// authored through the art content pipeline (fact pack → Opus draft → 5 critic
// gates → revise; see audits/art-pipeline/). House voice, American spelling;
// figures honor the copyright tiers (all artists PD worldwide).
// ════════════════════════════════════════════════════════════

// ── 1. Why Realism ──────────────────────────────────────────
const WhyRealismNarrative: Narrative = ({ accent }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="France · 1848" title="The year the floor moved" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>M</DropCap>
        ost art movements begin in a studio. This one begins in a riot. In February 1848 the people of Paris
        threw out a king. The monarchy fell, a republic was declared, and for a few intoxicating months it
        looked as though France was going to be remade from the ground up — and then, just as fast, the hope
        soured into fear, repression and, by 1851, a new emperor. That whiplash year is the ground Realism
        grows out of, and you cannot understand the paintings without it. A generation of artists had just
        watched ordinary people — workers, peasants, the poor — step out of the background of history and
        briefly seize the foreground. The question that followed was almost rude in its simplicity: if these
        people can topple a throne, why are they good enough to paint only as scenery?
      </p>
      <p style={proseStyle}>
        Because scenery is what they had always been. Remember the system the rest of this era runs on (the
        “Lay of the land” read, one level up): a single State-run ladder, topped by the{' '}<strong>Salon</strong>{' '}(the official annual exhibition, the one show in France where a painter’s career was
        made or buried), policed by a jury that prized{' '}<strong>history painting</strong>{' '}— grand scenes
        from myth, scripture and ancient history, the human body at heroic size — as the only subject serious
        enough to earn a man real glory. At the very bottom of that ranked menu of approved subjects, the{' '}<strong>hierarchy of genres</strong>, sat plain modern life: a field, a workshop, a bowl of fruit. Gods
        at the top, greengrocers at the bottom. To paint a peasant was permitted; to paint a peasant{' '}<em>the size of a god</em>{' '}was not done.
      </p>

      <SectionHeader accent={accent} label="The demand" title="Paint your own century" />
      <p style={proseStyle}>
        The Realists’ answer was to do exactly the thing that wasn’t done, and to do it on purpose. Their
        program — though “program” makes it sound tidier than it was — came down to a single defiant
        instruction: paint the real, ordinary, contemporary world. Not gods. Not Roman senators in togas. Not a
        goddess rising poreless from a poreless sea. The thing actually in front of you, in the year you are
        actually standing in: laborers, peasants, the urban poor, animals, work, dirt, the present tense.
      </p>
      <p style={proseStyle}>
        That instruction had two enemies, not one. The academy was the obvious target — gods and kings at heroic
        scale. But Realism was also a revolt against{' '}<strong>Romanticism</strong>, the generation just before
        it, which had answered the academy’s stiff antiquity with the opposite excess: exotic settings, heaving
        drama, shipwrecks and harems and battlefield agony, feeling cranked to the ceiling. The Realists wanted
        neither the museum’s gods nor the Romantics’ fever dreams. They wanted the ordinary thing, observed cold.
      </p>
      <p style={proseStyle}>
        It sounds obvious now. That obviousness is the surest sign of how completely they won. But set it against
        what the Salon was rewarding in these very years — its most celebrated painter, Alexandre Cabanel (the
        academy’s reigning star), and his{' '}<em>Birth of Venus</em>, a nude deity sliding along a wave with a
        finish so licked-smooth the paint disappears (as the era overview shows) — and you see the size of the
        heresy. The Realists wanted paint that{' '}<em>looked like paint</em>, surfaces with the trowel marks left
        in, and they wanted to point that rough, honest handling at the least heroic subjects available. It was,
        in the Western tradition, the first time a band of painters made a deliberate movement out of insisting
        on the unglamorous now. That makes Realism a fair candidate for the first modern movement — the first
        shot in the long argument with the jury that runs through the rest of this era — with one honest caveat:
        “first” here means{' '}<em>first in Western painting</em>, the only world this story claims to map.
      </p>
      <p style={proseStyle}>
        There was also a machine making the demand harder to ignore. The{' '}<strong>daguerreotype</strong>{' '}— the
        first practical photograph, public from 1839 — was barely a decade old and already turning out portraits
        by the thousand. If a small mirrored plate could now capture a face cheaply and exactly, what was left
        for a painter to do that a camera could not? Part of the answer Realism arrived at was rough, handmade
        paint, real human presence, and political content: precisely the things no daguerreotype could give you.
      </p>

      <SectionHeader accent={accent} label="The avant-garde" title="Scouts in front of the army" />
      <p style={proseStyle}>
        A word the era keeps using fits Realism better than almost anyone. The{' '}<strong>avant-garde</strong>{' '}is
        a borrowed military term — the scouts who ride out ahead of the main army — pressed into service for the
        artists who got somewhere first. Realism is where that idea gets its first real face in modern painting:
        a small group running out ahead of respectable taste, taking the abuse, and dragging the rest of art
        behind them. The man riding point was a barrel-chested provincial with an ego the size of a cathedral,
        and the next chapter is mostly his.
      </p>
    </article>

    <MeanwhileSheet
      region="London"
      title="A novelist is doing the same thing in ink."
      body="In the same years the Realist painters are dignifying the French poor, Charles Dickens is filling his novels with London's pickpockets, paupers and factory clerks — ordinary, contemporary, unglamorous people made the center of serious art. The instinct to take the present-day poor seriously was in the air across Europe, in paint and in print at once."
    />
  </>
)

// ── 2. Courbet's gauntlet ───────────────────────────────────
const GauntletNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Ornans → Paris" title="The man who would not flinch" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>G</DropCap>
        ustave Courbet (1819–1877) was the kind of self-believer who makes a movement possible and a dinner
        party unbearable. Born in 1819 in Ornans, a small town in the Franche-Comté countryside near the Swiss
        border, he came to Paris, taught himself largely by copying old masters in the Louvre, and arrived at a
        conviction he never once doubted: that the only honest subject was what a painter could actually see, and
        the only honest scale for it was the scale the Salon had reserved for kings.
      </p>
      <p style={proseStyle}>
        So he did the unthinkable, twice, in a single year. In 1849 he painted two laborers — one old, one young
        — breaking rock by the roadside,{' '}<em>The Stone Breakers</em>, and in 1849–1850 he painted an entire
        village funeral in his hometown,{' '}<em>A Burial at Ornans</em>. The era overview introduces both as the
        opening salvo against the jury. Here we get closer — close enough to see what was actually on the
        canvases, and why two pictures of nobodies frightened people the way a cannon frightens people.
      </p>

      <SectionHeader accent={accent} label="The Stone Breakers" title="Two men and a pile of rock" />
      <p style={proseStyle}>
        Start with the one you cannot see.{' '}<em>The Stone Breakers</em>{' '}(1849) showed two figures at the
        dullest, hardest, lowest work a body can do — a young man straining to lift a basket of broken stone, an
        old man kneeling to swing the hammer, their backs to us, their faces nearly hidden, their clothes torn at
        the knee and the elbow. No moral, no sermon, no pretty light. Just labor, life-size, painted with the
        gravity the Salon spent on saints. Courbet refused to ennoble them and refused to pity them; he simply
        granted that their work was as real as a coronation, and let the size of the canvas say so.
      </p>
      <p style={proseStyle}>
        You have to take that on trust, because you can no longer see the painting. It hung for decades in
        Dresden, in the city’s old-master gallery, and it vanished in the bombing of Dresden in February 1945.
        The Dresden museum officially lists it as “missing,” and it is generally presumed destroyed; the exact
        fate is disputed — one widely repeated account has it lost in transit toward the fortress of Königstein
        along with 153 other works from the collection, but that is one version, not settled record. Either way,
        it was never viewable again. What survives are reproductions, like the desaturated one below — so when
        this read describes{' '}<em>The Stone Breakers</em>, it is describing a ghost, reconstructed from copies of
        a thing that is gone. There is a grim aptness to it: the great picture of the people history grinds up was
        itself ground up by history.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_STONE}
        imageUrl={ART_IMG.courbetStoneBreakers}
        ratio="5/3"
        alt="Courbet, The Stone Breakers (reproduction of the destroyed painting)"
        caption={<>An old man kneeling to swing the hammer, a young man hoisting a basket of broken rock — backs to us, faces hidden, painted life-size and dead serious. The most ordinary backbreaking work there is, given the room a Salon would spend on a king.</>}
        credit={<>Courbet,{' '}<em>The Stone Breakers</em>, 1849 · destroyed 1945 (formerly Gemäldegalerie, Dresden)</>}
        rights="The original was destroyed in the bombing of Dresden, February 1945; only reproductions survive. Public domain worldwide (Courbet died 1877); shown desaturated, as a record of the lost painting."
      />

      <SectionHeader accent={accent} label="A Burial at Ornans" title="A funeral the size of a battle" />
      <p style={proseStyle}>
        <em>A Burial at Ornans</em>{' '}(1849–1850) survives, and it is enormous: roughly ten feet tall and
        twenty-two feet wide, the kind of acreage the academy handed out for the death of a Greek hero. Courbet
        spent it on a country funeral.
      </p>
      <p style={proseStyle}>
        Stand in front of it and the first thing you register is the sheer ordinariness of the crowd. More than
        forty mourners are strung in a long frieze across the canvas at life size — townsfolk of Ornans, real
        local faces, in their real Sunday black, lined up along the lip of an open grave under a flat gray cliff
        and a flatter gray sky. A priest reads; pallbearers stand; a dog wanders in at the front, indifferent.
        Nobody is beautiful. Nobody is posed for the ages. There is no shaft of holy light, no swooning grief, no
        allegorical figure of Death — just a hole in the ground and a row of unremarkable people who will all be
        in it eventually. It is a funeral painted at the scale of a coronation, with none of a coronation’s
        flattery, and that mismatch was the scandal. Critics asked, in effect, who told these nobodies they could
        fill a wall meant for the gods. The honest answer was: Courbet did, and he refused to apologize for it.
      </p>
      <p style={proseStyle}>
        That refusal is the gauntlet of the chapter title. He had not merely painted humble subjects — humble
        subjects were allowed, down at the bottom of the ladder, painted small. He had smuggled them up to the
        top of the ladder and stood them at heroic scale, and in doing so he had told the entire ranking system
        that its ranks were a fiction. The jury could feel the threat even when it couldn’t name it.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_COURBET}
        imageUrl={ART_IMG.courbetBurial}
        ratio="20/9"
        alt="Courbet, A Burial at Ornans"
        caption={<>A country funeral — more than forty real townsfolk in their Sunday black strung along an open grave, painted ten feet tall and twenty-two wide. No holy light, no swooning grief, just a hole in the ground and a dog wandering in at the front.</>}
        credit={<>Courbet,{' '}<em>A Burial at Ornans</em>, 1849–1850 · Musée d’Orsay, Paris</>}
        rights={PD_COURBET}
      />
    </article>
  </>
)

// ── 3. The Pavilion and the Manifesto ───────────────────────
const PavilionNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1855" title="When the world’s fair said no" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1855 Paris threw a world’s fair, the Exposition Universelle — a vast international showcase of industry
        and art, the kind of event a nation stages to advertise itself to the planet — and naturally it came with
        a grand official art exhibition. Courbet sent in his work. The jury took some of it and refused the
        biggest, most ambitious canvases, including the huge new picture he considered his summary statement,{' '}<em>The Painter’s Studio</em>.
      </p>
      <p style={proseStyle}>
        It is worth pausing on what that picture actually shows, because the refusal makes more sense once you
        have looked.{' '}<em>The Painter’s Studio</em>{' '}is an enormous, almost stage-like scene with Courbet
        himself seated dead center at his easel, a nude model at his shoulder and a small boy looking on, while
        two crowds flank him — on one side the poor, the workers, the down-and-out of real France; on the other
        his friends, patrons and fellow thinkers, the world of art and ideas. He subtitled it, with
        characteristic modesty, “a real allegory summing up seven years of my artistic life.” It is a painter
        declaring that his own studio is the place where the whole of contemporary society is sorted out —
        exactly the kind of grandiosity, hung on a man rather than a god, that a jury would sooner not endorse.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_STUDIO}
        imageUrl={ART_IMG.courbetStudio}
        ratio="16/9"
        alt="Courbet, The Painter's Studio"
        caption={<>Courbet at his easel dead center, a nude model at his shoulder; to one side the poor of real France, to the other his friends and patrons — his whole world declared a “real allegory” of his art. The world’s fair refused it, so he hung it in his own tent.</>}
        credit={<>Courbet,{' '}<em>The Painter’s Studio</em>, 1855 · Musée d’Orsay, Paris</>}
        rights={PD_COURBET}
      />
      <p style={proseStyle}>
        A rejected painter in 1855 had two normal options: sulk, or try again next year. Courbet invented a
        third. He leased a plot of ground a stone’s throw from the official exhibition, built his own building on
        it at his own expense, hung the refused pictures inside, charged the public admission, and bolted a sign
        over the door reading, simply,{' '}<strong>Du Réalisme</strong>{' '}— <em>On Realism</em>. The era overview
        names it the Pavilion of Realism and leaves it there, as a gesture. The gesture is worth slowing down for,
        because it is one of the founding acts of the modern art world: a painter, told no by the official
        machine, simply walked around it and set up his own machine across the street. Roughly the
        nineteenth-century equivalent of being turned down by every gallery in town and renting the empty shop
        next door to hang your own show — and selling tickets.
      </p>

      <SectionHeader accent={accent} label="The manifesto" title="A name pinned to a flag" />
      <p style={proseStyle}>
        The pavilion did one thing the Burial and the Stone Breakers could not, for all their scale: it gave the
        movement words. Inside, Courbet handed out a printed catalogue, and the catalogue carried a short
        statement of intent. Today we would call it a{' '}<strong>manifesto</strong>{' '}— a public declaration in
        which an artist or a group sets out, in plain language, what they are for and what they are against. It is
        one of the things that makes Realism feel modern: not just new pictures but a printed argument
        deliberately stapled to them. The avant-garde movements that follow — almost every one in this era — will
        arrive with a manifesto in hand, and Courbet’s tent is where the habit starts.
      </p>
      <p style={proseStyle}>
        His statement set out the aim of his painting as “to translate the customs, the ideas, the appearance of
        my epoch, according to my own estimation.” Read it slowly, because the whole movement is folded into that
        one sentence.{' '}<em>My epoch</em>{' '}— not antiquity, not scripture, but now.{' '}<em>The customs, the
        ideas, the appearance</em>{' '}— ordinary contemporary life, exactly the rung the academy ranked lowest.{' '}<em>According to my own estimation</em>{' '}— by my judgment, not the jury’s. In one line he relocated the
        authority over what counts as art from the State to the individual artist, which is a thing the rest of
        this era will spend a hundred years confirming. It is the difference between a restaurant that serves only
        the dishes on the official menu and a cook who decides for himself what is worth putting on a plate — and
        Courbet had just walked out of the first kitchen to open the second. “Realism” had been floating around as
        a critics’ word, usually a sneer. Here, in his own tent, in his own catalogue, Courbet picked the sneer up
        off the floor and ran it up a flagpole — the same trick the Impressionists and the{' '}<strong>Fauves</strong>{' '}(the “wild beasts,” a later band of painters who took their derisive nickname as a
        badge) would pull with insults of their own.
      </p>
      <p style={proseStyle}>
        It should be said that Courbet did not invent the impulse single-handed, however much his ego would have
        liked the credit. He named it, theorized it, and gave it a scandal big enough to make headlines. But the
        deepest, quietest, most lasting Realist pictures were being painted at the same moment by a man who never
        built a tent and never wanted one — out in a village south of Paris, among the people who actually broke
        the rock.
      </p>
    </article>

    <MeanwhileSheet
      region="Paris"
      title="The State show is right across the way."
      body="Courbet's tent only works because of what it stands next to. A few steps away, inside the Exposition Universelle's official halls, the academy was showing the polished, jury-approved art the State endorsed. The pavilion's whole argument was geographic: here is your art; here is mine; the public can buy a ticket and decide. It is the first time a major painter framed his work as a direct, paying alternative to the official machine rather than a plea to be let inside it."
    />
  </>
)

// ── 4. Millet's peasants ────────────────────────────────────
const PeasantsNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Barbizon" title="Painting where the work happens" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>J</DropCap>
        ean-François Millet (1814–1875) was Courbet’s opposite in every way but conviction. Where Courbet was
        loud, urban, theatrical and forever managing his own legend, Millet was quiet, rural, and serious to the
        point of grimness. He had grown up in a farming family in Normandy and never lost the sense that field
        labor was the realest thing there was, and in the late 1840s he moved out to{' '}<strong>Barbizon</strong>,
        a village on the edge of the forest of Fontainebleau, south of Paris, where a loose colony of landscape
        painters had gathered to work directly from the countryside instead of inventing it back in a city studio.
      </p>
      <p style={proseStyle}>
        That move is itself part of the Realist argument. The academy wanted nature arranged — composed,
        idealized, lit for drama, built up from sketches in a studio under controlled light. The painters of the{' '}<strong>Barbizon School</strong>{' '}— the loose colony that took its name from the village, among them the
        landscapists Jean-Baptiste-Camille Corot and Théodore Rousseau — wanted the actual fields, the actual
        weather, the actual exhausting work going on in them. Millet’s particular subject, the one he returned to
        for the rest of his life, was the peasant at labor: bent backs, heavy tools, the slow grinding rhythm of
        getting food out of the ground. He painted it without the cheerful, rosy-cheeked prettiness the Salon
        liked its peasants to have, and without sentimental pity either. He painted it as fact, and as something
        close to a sacrament.
      </p>

      <SectionHeader accent={accent} label="The Sower" title="A peasant the size of a threat" />
      <p style={proseStyle}>
        His first shock came at exactly the moment Courbet’s did.{' '}<em>The Sower</em>{' '}(1850, now in the Museum
        of Fine Arts, Boston) hung at the same Salon of 1850 that showed Courbet’s{' '}<em>Burial at Ornans</em>{' '}— so the two fronts of Realism opened together, one with a village funeral, the other with this. The picture
        is a single lone peasant striding across a dusk field, one arm flung out scattering seed, the great
        rhythmic gesture of sowing frozen mid-swing. He is monumental and almost menacing: a dark, powerful,
        faceless figure bearing down across the foreground, the falling light catching the arc of grain. It made
        Millet famous overnight, and it unsettled people for the same reason Courbet’s nobodies did — a working
        peasant given the size and gravity of a hero, only two years after working people had toppled a throne.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_SOWER}
        imageUrl={ART_IMG.milletSower}
        ratio="4/5"
        alt="Millet, The Sower"
        caption={<>A lone peasant striding a dusk field, one arm flung wide to scatter seed — dark, powerful, almost faceless, bearing down across the foreground. A working man given the size and gravity of a hero, two years after the poor had toppled a throne.</>}
        credit={<>Millet,{' '}<em>The Sower</em>, 1850 · Museum of Fine Arts, Boston</>}
        rights={PD_MILLET}
      />

      <SectionHeader accent={accent} label="The Gleaners" title="Three women and the right to scraps" />
      <p style={proseStyle}>
        <em>The Gleaners</em>{' '}(1857) is the picture that frightened the critics, and to see why you have to
        know what gleaning was. After a field was harvested, the very poorest of the rural poor were permitted, by
        old custom, to come in behind the reapers and gather the leftover grain that had fallen — the scraps, the
        dropped heads, what the harvest had missed. It was the bottom of the bottom: the right of the people who
        had nothing to pick up what no one else wanted.
      </p>
      <p style={proseStyle}>
        Millet painted three of these women in the act, and he painted them huge. Three figures fill the front of
        the canvas, bent at the waist over a vast stubbled field that runs back to a gold horizon, their hands
        reaching toward the dirt. Behind them, small and bright in the distance, the real harvest is being brought
        in — wagons, haystacks, a mounted overseer — a whole prosperous farm economy carrying on without them. The
        composition does the politics by itself: the wealth of the harvest is back there, tiny and golden; the
        women who get only its leavings are right here, near, dark, monumental, filling your view. There is no
        slogan. There is just a decision about who gets to be the size of a hero, and Millet gave that scale to
        three women stooping for fallen grain.
      </p>
      <p style={proseStyle}>
        Critics read it exactly that way, and it alarmed them. Some saw in those three monumental peasant women a
        warning — the rural poor, dignified and made enormous, only a few years after 1848 had shown what the poor
        could do when they stopped staying small. To monumentalize a peasant in the 1850s was, to a nervous{' '}<strong>bourgeois</strong>{' '}(the propertied middle class) eye, very nearly a political act, and that
        political charge is part of the honest story of the picture, not a modern reading bolted on after the fact.
        It is fairer to say Millet’s sympathy was genuine and his politics were real than to pretend the painting
        is just a tender study of country life. It is tender. It is also a claim.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_MILLET}
        imageUrl={ART_IMG.milletGleaners}
        ratio="4/3"
        alt="Millet, The Gleaners"
        caption={<>Three of the poorest women, bent over a stripped field gathering the grain the reapers dropped — painted at the monumental size the Salon kept for heroes. Behind them, small and golden, the real harvest is carried in without them. The composition makes the argument.</>}
        credit={<>Millet,{' '}<em>The Gleaners</em>, 1857 · Musée d’Orsay, Paris</>}
        rights={PD_MILLET}
      />

      <SectionHeader accent={accent} label="The Angelus" title="A field that turns into a church" />
      <p style={proseStyle}>
        If{' '}<em>The Gleaners</em>{' '}is Millet’s argument,{' '}<em>The Angelus</em>{' '}(1857–1859) is his prayer.
        Two peasants — a man and a woman — stand alone in a darkening field at dusk, a basket of potatoes and a
        fork at their feet, and they have stopped work to bow their heads. The title names the reason: the{' '}<em>Angelus</em>{' '}is a Catholic devotion said morning, noon and evening at the sound of a church bell, and
        on the far horizon, almost too small to find, the tower of a village church catches the last light. The
        bell has rung; the two of them have paused mid-labor to pray; the whole flat field has gone still and
        golden-brown around them.
      </p>
      <p style={proseStyle}>
        Look at how the canvas is divided, because the whole feeling of it lives there. The sky fills nearly
        two-thirds of the picture — an enormous flat dusk pressing down from above — and against all that
        emptiness the two figures are tiny, bowed, stooped low over the earth. The church tower whose bell has
        stopped them is just a smudge on the far horizon, barely there. That vastness hanging over the two small
        stooped bodies is the painting’s whole emotional mechanism: it makes the prayer feel less like a scene and
        more like a weight, the sheer size of the heavens settling onto two people who have nothing but a basket
        of potatoes and a moment of stillness.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_ANGELUS}
        imageUrl={ART_IMG.milletAngelus}
        ratio="6/5"
        alt="Millet, The Angelus"
        caption={<>Two peasants pause at the evening bell to bow their heads, a basket of potatoes at their feet. The sky fills two-thirds of the canvas and presses down on the two small stooped bodies — that vastness over them is the whole feeling of the picture.</>}
        credit={<>Millet,{' '}<em>The Angelus</em>, 1857–1859 · Musée d’Orsay, Paris</>}
        rights={PD_MILLET}
      />
      <p style={proseStyle}>
        It is a far gentler picture than{' '}<em>The Gleaners</em>{' '}— no edge of menace, no overseer in the back —
        and it became, for that reason, one of the most reproduced images of the entire nineteenth century, hung
        on parlor walls and printed on a thousand cheap copies across Europe and beyond. Millet had done something
        the academy thought impossible: he had made two stooping peasants in a potato field carry the weight of a
        religious painting, with no saints, no gold halos, no scripture — only the work, the bell, and the bowed
        heads. The sacred, he insisted, was already out there in the dirt. You did not have to import gods to find
        it.
      </p>
    </article>
  </>
)

// ── 5. Daumier's city ───────────────────────────────────────
const CityNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The press" title="A weapon you could print" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1832 a French artist went to prison for drawing a cartoon of the king. His name was Honoré Daumier
        (1808–1879), and the offending picture was a fat joke about a monarch’s appetite — but the State took it
        seriously enough to lock him up for it. That is the figure who drags Realism off the farm and into the
        modern city. Where Courbet gave us stone and graves and Millet gave us fields, Daumier gave us the
        present-tense town: its crowds, its politicians, its poor. And he did it first not with paint but with the
        printing press.
      </p>
      <p style={proseStyle}>
        Daumier worked for the satirical newspapers of Paris as a{' '}<strong>caricaturist</strong>{' '}— an artist
        who exaggerates a public figure’s features and bearing to mock and expose them — and his weapon was{' '}<strong>lithography</strong>, a then-new printing method in which the artist draws directly onto a flat
        stone with a greasy crayon; the stone is inked, and hundreds of identical copies pull off it. Lithography
        is what made political cartooning a mass medium: it was fast, cheap, and it put the same biting image into
        thousands of hands at once. Daumier was its master. Over his life he produced thousands of lithographs for
        the press, skewering the kings, ministers, lawyers and self-satisfied bourgeois of his day with a savage,
        knowing line. It is Realism’s other half — not the dignity of the poor but the satire of the powerful,
        both aimed at the same target: the actual society in front of him, right now.
      </p>

      <SectionHeader accent={accent} label="Gargantua" title="The cartoon that went to jail" />
      <p style={proseStyle}>
        Satire that lands hard tends to get the satirist in trouble, and Daumier’s did. In late 1831 he drew the
        reigning king, Louis-Philippe, as{' '}<em>Gargantua</em>{' '}— a grotesque giant, named for the gluttonous
        giant of a famous sixteenth-century French novel, enthroned and gorging himself on the taxes and tribute
        of his starving subjects, who haul wealth up a ramp into his enormous mouth while he excretes honors and
        favors out the other end onto the courtiers below. It was funny, it was filthy, and it was unmistakably
        the king. He was prosecuted the next year and jailed by 1832 — by the standard account, for around six
        months. (The story is told so often that the exact term is worth a beat of caution: take the six-month
        figure as the usual account rather than a fact carved in stone.)
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_DAUMIER}
        imageUrl={ART_IMG.daumierGargantua}
        ratio="3/2"
        alt="Daumier, Gargantua"
        caption={<>The king as a bloated giant on a throne, gorging on the taxes his starving subjects haul up a ramp into his mouth — and excreting honors onto the courtiers below. Funny, filthy, and unmistakably Louis-Philippe. It sent Daumier to jail.</>}
        credit={<>Daumier,{' '}<em>Gargantua</em>, 1831 · lithograph · Bibliothèque nationale de France</>}
        rights={PD_DAUMIER}
      />
      <p style={proseStyle}>
        What is not in doubt is the principle the episode hands the rest of the era: an image can be dangerous
        enough to imprison a man for. The avant-garde’s later scandals — the riots at the Salon des Refusés (the
        overflow show of rejected pictures), the umbrellas raised against Édouard Manet’s{' '}<em>Olympia</em>{' '}(the modern painter’s notorious nude, who stared straight back at the viewer) — are usually about taste.
        Daumier got jailed over power. His Realism had teeth, and the State felt them.
      </p>

      <SectionHeader accent={accent} label="The Third-Class Carriage" title="The modern poor, packed in a box" />
      <p style={proseStyle}>
        Daumier painted, too, though far fewer people saw his canvases than saw his cartoons in his lifetime, and
        his greatest painting is the one that drags Realism fully into the machine age.{' '}<em>The Third-Class
        Carriage</em>{' '}(about 1862–1864, and left unfinished) shows the inside of a railway car’s cheapest class
        — third class, the bare-bench compartment of the people who could afford no better — packed with the urban
        poor on the move.
      </p>
      <p style={proseStyle}>
        Look at who he gives the front bench. A nursing mother holds her baby; an old woman beside her sits folded
        over a basket, hands clasped, staring at nothing; a small boy has fallen asleep against them. Behind, rows
        of anonymous heads recede into the dim, jostling car. There is no event, no story, no drama — just the
        ordinary, exhausted, anonymous experience of being poor in a modern city, riding the new technology that
        the prosperous rode in better seats up the train. And there is no sentimentality, which is the Realist
        part: Daumier does not ask you to weep for these people, only to look at them. The faces are tired,
        dignified, unidealized, lit by the gray light coming through the carriage windows. The railway — the
        single most modern thing in their world — becomes a frame for the oldest subject there is, which is simply
        being poor.
      </p>
      <p style={proseStyle}>
        That is the full reach of Realism in one canvas: the present tense, the modern machine, the ordinary poor,
        taken seriously and prettified not at all.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_CARRIAGE}
        imageUrl={ART_IMG.daumierCarriage}
        ratio="4/3"
        alt="Daumier, The Third-Class Carriage"
        caption={<>The bare-bench cheapest class of a railway car, packed with the urban poor: a nursing mother, an old woman folded over her basket, a sleeping boy, rows of anonymous heads behind. No story, no pity — just tired, dignified faces in gray light, the newest machine framing the oldest subject there is.</>}
        credit={<>Daumier,{' '}<em>The Third-Class Carriage</em>, about 1862–1864 (unfinished) · The Metropolitan Museum of Art, New York</>}
        rights={PD_DAUMIER}
      />
    </article>
  </>
)

// ── 6. Bonheur, and the reach ───────────────────────────────
const ReachNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1853" title="The most famous painter you weren’t told about" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y the 1850s the single most celebrated painter of animals in France — and one of the most celebrated
        painters of any kind, of either sex — was a woman. Rosa Bonheur (1822–1899) is the part of the Realist
        story usually trimmed out, and she belongs at full size, because she was not a curiosity on the edge of
        the movement. She was one of its biggest successes, on the movement’s own terms: she painted the real,
        contemporary, unglamorous world — in her case, animals and the people who worked with them — at a scale
        and with a seriousness the academy reserved for grander things, and the public loved her for it.
      </p>
      <p style={proseStyle}>
        Her subject was animal life rendered with the exactness of someone who had genuinely studied it. To get
        her anatomy right she spent long hours in places respectable women were not expected to be —
        slaughterhouses, cattle markets, horse fairs — observing how a real animal stands, strains and moves. The
        fruit of that study was the picture that made her internationally famous.
      </p>

      <SectionHeader accent={accent} label="The Horse Fair" title="A canvas you can hear" />
      <p style={proseStyle}>
        <em>The Horse Fair</em>{' '}— begun in 1852, shown at the Salon of 1853, and finished in 1855 — is enormous
        and it moves. It shows the great Paris horse market: a churning parade of powerful draft horses being led,
        ridden and wrestled around a tree-lined boulevard by their handlers, the animals rearing, tossing their
        heads, straining against the men who grip their bridles. Bonheur painted the muscle and the motion with
        such conviction that you can almost hear it — the stamp of hooves, the shouts of the dealers, the snorting
        heave of a half-ton animal that does not want to be where it is. It is Realism at full gallop: not a
        mythological horse, not a noble steed under a general, but the actual, sweating, commercial horse trade of
        contemporary Paris, given the size and energy of a battle scene.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={R_BONHEUR}
        imageUrl={ART_IMG.bonheurHorseFair}
        ratio="2/1"
        alt="Bonheur, The Horse Fair"
        caption={<>The Paris horse market at full gallop: powerful draft horses rearing and tossing their heads while their handlers wrestle them around a tree-lined boulevard. Bonheur painted the muscle and motion so convincingly you can nearly hear the hooves — the everyday horse trade given the size of a battle scene.</>}
        credit={<>Bonheur,{' '}<em>The Horse Fair</em>, 1852–1855 · The Metropolitan Museum of Art, New York (gift of Cornelius Vanderbilt II, 1887)</>}
        rights={PD_BONHEUR}
      />
      <p style={proseStyle}>
        The painting was a sensation, and it traveled — it ended up across the Atlantic, given in 1887 by the
        American railroad heir Cornelius Vanderbilt II to the Metropolitan Museum of Art in New York, where it
        still hangs. A movement that began as a French quarrel with a French jury had, in this one giant canvas,
        become a thing Americans crossed an ocean to own.
      </p>

      <SectionHeader accent={accent} label="The trousers" title="Agency, not anecdote" />
      <p style={proseStyle}>
        There is a famous story about how Bonheur got into those markets at all. To sketch the horse fair
        unbothered — a woman alone in a rough, male, working crowd — she obtained, by her own record, an official
        police permit to wear men’s clothing, the trousers and smock that let her move through the market without
        being stared at or harassed. The detail is repeated everywhere, and it is genuinely useful, because it
        makes plain a thing that is otherwise easy to miss: the obstacles Bonheur cleared to do her work were not
        the obstacles a Courbet or a Daumier faced.
      </p>
      <p style={proseStyle}>
        The substance behind it is not in doubt. Bonheur lived openly on her own terms, ran her own household and
        career, dressed for the work she meant to do, and built one of the most successful artistic lives of her
        century — sharing it with her lifelong companion Nathalie Micas, who ran the household and business side
        of things and so freed Bonheur to paint — without a patron’s leash or the official school that had refused
        to admit women at all. She is not a footnote to a movement of men. She is one of the people who proved the
        movement could win an audience — and she won a bigger one than most of them.
      </p>

      <SectionHeader accent={accent} label="The handoff" title="From the real to the seen" />
      <p style={proseStyle}>
        So where does Realism go? It does not so much end as graduate. By around 1870 its central permission had
        been granted and could not be taken back: ordinary, contemporary, unglamorous life was now a fit subject
        for serious art, at any scale a painter dared. The fight Courbet picked, Millet deepened, Daumier
        sharpened and Bonheur popularized had been, on that point, won.
      </p>
      <p style={proseStyle}>
        The next generation took the permission and pushed it one step further. The Realists had said: paint the
        real world, the thing that is actually there. A circle of younger painters — boating parties and railway
        stations rather than gleaners and horse fairs, with Édouard Manet (the{' '}<em>Olympia</em>{' '}scandal-maker
        of the previous chapter) standing in the doorway between the two generations — would soon say something
        subtler: paint not the thing that is there, but the thing you actually see, the flicker of light on it in
        a single passing moment. That is the move from Realism to Impressionism, and it is less a break than a
        relay (the Impressionists get their own telling, one chapter along in the era overview). Courbet had
        thrown the door open by insisting the present was worth painting. The Impressionists walked through it and
        started painting the light.
      </p>
      <p style={proseStyle}>
        Its leader did not get a soft landing. Realism’s politics caught up with the man who had made it a banner.
        In the{' '}<strong>Paris Commune of 1871</strong>{' '}— the radical city government that seized Paris for ten
        weeks after France’s defeat by Prussia — Courbet helped pull down the Vendôme Column, Napoleon’s bronze
        victory monument, as a symbol of empire and war. When the Commune was crushed, he was convicted: six
        months in prison and a 500-franc fine. Then, in 1873, the State went further and ordered him to pay for
        the column’s reconstruction — an estimated 323,000 francs, to be handed over in yearly installments for
        the rest of his life. He fled to Switzerland and died there in exile in 1877. The man who had spent his
        career painting labor and the people paid, in the end, for his politics.
      </p>
      <p style={italicStyle}>
        Realism was the first shot of the whole modern revolt — the moment a group of painters decided that their
        own ordinary century, exactly as it was, deserved the wall the gods had always hung on. Everything
        restless that follows in this era is, in some sense, still answering Courbet’s flat instruction: paint
        your own epoch, as it actually is.
      </p>
    </article>

    <MeanwhileSheet
      region="Russia"
      title="The same argument, in the same years, far to the east."
      body="Realism was not only a French event. In Russia, in 1863, a group of art students walked out of the Imperial Academy rather than paint the mythological subject they were assigned for the gold-medal competition — they demanded the freedom to choose their own subjects. The instinct to turn from the academy's prescribed gods toward the real contemporary world was a wave moving across European art at once, and France was simply where it broke first and loudest."
    />
  </>
)

// ── Impressionism (1860s–1886) — the Modern era's second movement read.
// Authored gates-first via the art content pipeline; see audits/art-pipeline/impressionism-*.
// ── Impressionism palettes ──────────────────────────────────
const MANET_PAL = ['#6a5a4a', '#332820', '#0e0a06'] as [string, string, string]
const MONET_PAL = ['#3a6a8a', '#c8c050', '#1c2a30'] as [string, string, string]
const CAILLE_PAL = ['#5a6a72', '#2e3a42', '#0e1014'] as [string, string, string]
const MORISOT_PAL = ['#9aa0a4', '#5a6066', '#1a1e22'] as [string, string, string]
const DEGAS_PAL = ['#7a6a4a', '#3a3020', '#100c08'] as [string, string, string]

// ── 1. The world that said no ───────────────────────────────
const WhyImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · the 1860s" title="The world that said no" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        magine a city tearing itself down and rebuilding while you watch.
      </p>
      <p style={proseStyle}>
        That is the Paris these painters grew up into. Starting in 1853, an emperor&rsquo;s chief planner,{' '}<strong>Baron Haussmann</strong>, spent nearly two decades gutting the old medieval city and replacing it with
        something that had never existed before: long straight boulevards cut clean through the slums, mile after
        mile of matching cream-colored façades, parks, fountains, a gleaming new opera house, gaslit cafés
        spilling onto wide sidewalks. This is{' '}<strong>Haussmannization</strong>{' '}&mdash; the wholesale
        demolition-and-rebuild that gave Paris the look it still has today. It was brutal (whole neighborhoods
        erased, the poor pushed to the edges) and it was, visually, electric. Overnight the city had a new face:
        modern, bright, in motion, crowded with strangers and traffic and weather and light.
      </p>
      <p style={proseStyle}>
        And here was the strange thing. A young painter could walk out the door, look straight down one of those
        new boulevards &mdash; the crowd, the carriages, the smear of a rainy afternoon &mdash; and see, plainly,
        the most exciting subject any artist had ever been handed. The actual present tense, the brand-new world,
        right there. The problem was that there was nowhere to{' '}<em>show</em>{' '}it.
      </p>

      <SectionHeader accent={accent} label="The machine" title="One jury, one door, one approved kind of beauty" />
      <p style={proseStyle}>
        To understand why, you need the machine that ran French art, which the Realism chapter covers in full;
        here it is in one breath. There was essentially one door to a career, the{' '}<strong>Salon</strong>{' '}&mdash; the gigantic official exhibition the State ran each year, the single show where a French painter was
        made or buried. A jury decided what hung. And the jury was not running on arbitrary snobbery: the academy
        had a coherent program, a whole theory of what art was{' '}<em>for</em>. Art should morally uplift; it
        should treat the noblest, most legible subjects in a fixed hierarchy &mdash;{' '}<strong>history painting</strong>{' '}(gods, saints, kings, ancient heroes, the human body at heroic size) ranked at the very top, mere
        landscape and still life down at the bottom; and it should prove its maker had mastered the craft. The
        visible proof of that mastery was{' '}<em>fini</em>, &ldquo;finish&rdquo;: a surface so smoothly,
        invisibly worked that the brushstrokes vanished and the paint looked like polished porcelain. By Salon
        logic a proper picture showed no trace of the hand that made it, because the hand still showing meant the
        work wasn&rsquo;t{' '}<em>done</em>. It was, on its own terms, a system that made perfect sense.
      </p>
      <p style={proseStyle}>
        Now lay the modern city against that standard and watch them refuse to fit. The new Paris was fast,
        fleeting, weather-soaked, full of ordinary people doing ordinary modern things. None of that was a god or
        a king. And the only honest way to{' '}<em>catch</em>{' '}a passing moment &mdash; a glance, a flicker of
        light, steam dispersing &mdash; is fast, loose, with the strokes still showing. Which is to say: the exact
        opposite of{' '}<em>fini</em>. The subject the city was offering and the finish the jury demanded were
        chemically incompatible. You could paint the modern world, or you could pass the jury. Not both.
      </p>

      <SectionHeader accent={accent} label="The patriarch" title="Manet lights the fuse and refuses to leave the building" />
      <p style={proseStyle}>
        One man had already detonated this contradiction, loudly, and he was older than the rest.{' '}<strong>Édouard Manet</strong>{' '}(1832&ndash;1883) is the figure you have to get exactly right, because almost
        everyone gets him wrong. In 1863 he showed{' '}<em>Le Déjeuner sur l&rsquo;herbe</em>{' '}&mdash; a naked
        woman picnicking, perfectly at ease, beside two fully clothed modern gentlemen, staring straight out at
        the viewer with no mythological excuse whatsoever. Two years later came{' '}<em>Olympia</em>. Stand in
        front of it and what jumps you is how{' '}<em>blunt</em>{' '}it is: a nude propped on her pillows, but
        plainly a contemporary woman &mdash; a working courtesan, not a goddess &mdash; looking the viewer dead in
        the eye, cool and unembarrassed, level as a transaction. A black ribbon is tied at her throat. A maid
        leans in from the shadows holding a fat bunch of wrapped flowers, a gift just arrived; a black cat
        bristles at the foot of the bed, tail up. And the paint itself is the affront: flat, hard-edged, laid on
        in blunt slabs of light and dark where the Salon wanted soft, modeled, licked-smooth flesh. The public
        was scandalized &mdash; partly by the nudity, mostly by the refusal to dress it up as myth, and by paint
        that looked rude where it was supposed to be porcelain. (The Realism chapter tells these scandals in full;
        the point here is what they{' '}<em>did</em>{' '}to the next generation.)
      </p>
      <p style={proseStyle}>
        What they did was act like a starting gun. A circle of younger painters &mdash; Monet, Renoir, the others
        &mdash; saw in Manet a man putting the unvarnished modern world on a Salon-scale canvas and getting away
        with it (or at least surviving the attempt), and they gathered around him. They met to argue at the{' '}<strong>Café Guerbois</strong>, a place in the Batignolles district where, on Thursday and Sunday evenings
        through the late 1860s, the talk ran on color and light and the stupidity of the jury, with Manet at the
        center, the novelist Émile Zola defending him, and the rest leaning in.
      </p>
      <p style={proseStyle}>
        But here is the nuance you must never blur:{' '}<strong>Manet was not an Impressionist, and he never became one.</strong>{' '}He never once exhibited in any of the eight shows the group would later stage. For all that
        he lit their fuse and traded influence with them, his deepest wish was the one thing they were rebelling
        against &mdash; official approval, a medal at the Salon, recognition from the very machine they were
        walking away from. He submitted to that jury his whole life. Call him the reluctant patriarch who stayed
        at the Salon: the father of the family who never moved into the house. The younger painters loved him,
        learned from him, and left him behind at the front door.
      </p>
      <p style={proseStyle}>
        So that is the wall. A generation that could see the modern city perfectly, a jury that would never let it
        through, and an admired older man who showed them it could be done but refused to do it{' '}<em>with</em>{' '}them. The only way out was to stop knocking on the official door &mdash; and build their own. But first they
        had to figure out how to paint what they were actually seeing.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MANET_PAL}
        imageUrl={ART_IMG.manetOlympia}
        ratio="3/2"
        alt="Manet, Olympia"
        caption={<>A reclining nude who is plainly a contemporary woman, not a goddess &mdash; cool, head-on, a black ribbon at her throat, a maid bringing a bunch of flowers, a cat bristling at her feet &mdash; painted in flat, blunt, deliberately un-licked slabs of paint. Manet&rsquo;s Salon bombshell lit the fuse for the younger painters &mdash; but he himself never joined them, chasing official approval at the Salon to the end.</>}
        credit={<>Édouard Manet,{' '}<em>Olympia</em>, 1863 · Musée d&rsquo;Orsay, Paris (NOT an Impressionist-exhibition work &mdash; Manet never showed in any of the eight)</>}
        rights="Public domain worldwide (Édouard Manet died 1883). Wikimedia Commons."
      />
    </article>

    <MeanwhileSheet
      region="Paris, the building site"
      title="The subject was being built in the street."
      body="Haussmann's boulevards were not just a backdrop — they were the new motif itself. Within a few years the grand boulevard, the café terrace, the railway station and the rainy street would become the recurring subjects of the movement: Monet would paint the Boulevard des Capucines from an upstairs window, Caillebotte the rain-slick intersections, Pissarro the boulevards seen from above. The emperor's planner had, without meaning to, painted the city's portrait first — in stone — and handed the painters their material."
    />
  </>
)

// ── 2. Paint what you actually see ──────────────────────────
const EyeImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The riverbank" title="Paint what you actually see" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is a small experiment you can run right now. Look at a shadow on a sunny day &mdash; a shadow on snow
        is best, but pale pavement will do. You have always been told shadows are gray, or black. Look harder. On
        a bright day that shadow is faintly{' '}<em>blue</em>. Your brain, which knows perfectly well that snow is
        &ldquo;white&rdquo; and shadow is &ldquo;dark,&rdquo; has been quietly lying to you your whole life,
        editing the colors into the labels it expects. The Impressionists&rsquo; entire technical revolution can
        be summed up as: stop letting your brain edit, and paint what your eye is genuinely receiving.
      </p>
      <p style={proseStyle}>
        That sounds like nothing. It was everything, because what the eye genuinely receives is{' '}<em>colored light</em>, not objects with fixed colors. A haystack is not &ldquo;yellow.&rdquo; It is whatever the six
        a.m. light makes it, then whatever the noon light makes it, then something else entirely at five p.m.
        &mdash; pink, lavender, orange, smoke-blue. The academy painted the{' '}<em>idea</em>{' '}of a haystack
        (local color, the label color, mixed once and laid down smooth). The Impressionists set out to paint the{' '}<em>light landing on</em>{' '}a haystack, in one particular minute, before it changed.
      </p>

      <SectionHeader accent={accent} label="The toolkit" title="Broken color, the death of black, the visible stroke" />
      <p style={proseStyle}>
        To do that they rebuilt how paint goes on the canvas, and four moves matter.
      </p>
      <p style={proseStyle}>
        First,{' '}<strong>plein air</strong>{' '}&mdash; French for &ldquo;open air,&rdquo; meaning you take the
        canvas{' '}<em>outdoors</em>{' '}and finish it there, in front of the real thing, in the real changing
        light, rather than working it up later from sketches in a dim studio. You cannot fake the actual color of
        a cloud at four o&rsquo;clock; you have to be standing under it. (Two pieces of kit made this practical
        &mdash; ready-made oil paint in collapsible metal tubes, an American invention of the 1840s, and the
        folding{' '}<em>box easel</em>{' '}you could sling on your back. Useful, both of them; but neither one{' '}<em>invented</em>{' '}outdoor painting, as we&rsquo;ll see in a moment.)
      </p>
      <p style={proseStyle}>
        Second,{' '}<strong>broken color</strong>{' '}and{' '}<strong>optical mixing</strong>. Instead of carefully
        blending green paint on the palette and laying down a flat tone for grass, you stab down little separate
        strokes of pure-ish color side by side &mdash; a dab of yellow, a dab of blue, a dab of green &mdash; and
        let the{' '}<em>viewer&rsquo;s eye</em>{' '}do the blending at a distance. Stand close and it&rsquo;s a
        mess of jabs. Step back and it fuses into a shimmering, living green that a single flat tone could never
        match. (It is roughly how a screen works: tiny separate dots of color your eye combines into a picture.
        The Impressionists got there a century early, by hand, and by instinct &mdash; this was eyeballing, not a
        theory out of a book, a distinction that matters when the{' '}<em>next</em>{' '}generation turns it into
        actual science.)
      </p>
      <p style={proseStyle}>
        Third, the{' '}<strong>death of black</strong>. The academy built its shadows out of black and muddy
        browns. The Impressionists largely threw black off the palette and built shadows out of{' '}<em>color</em>{' '}&mdash; that blue shadow on the snow, a violet shadow under a tree &mdash; because that is what shadows
        actually contain when you stop editing.{' '}<strong>Colored shadows</strong>{' '}are one of the instant
        tells of an Impressionist canvas: nothing is ever simply dark.
      </p>
      <p style={proseStyle}>
        Fourth, the{' '}<strong>visible stroke</strong>. They let the brushwork{' '}<em>show</em>{' '}&mdash; the
        jab, the smear, the drag of loaded paint &mdash; instead of sanding it down to invisible{' '}<em>fini</em>. The picture wears its own making on its face. To a Salon eye trained on porcelain finish,
        this didn&rsquo;t look like daring. It looked unfinished, like a rough sketch someone had the gall to
        frame. (Hold that thought; it becomes the joke that names the whole movement.)
      </p>

      <SectionHeader accent={accent} label="London" title="Turner, Constable, and a dealer in exile" />
      <p style={proseStyle}>
        Where did the new eye get its license? Partly from across the Channel. When the{' '}<strong>Franco-Prussian War</strong>{' '}broke out in 1870&ndash;71, Monet and Pissarro fled the fighting to
        London &mdash; and there they spent their exile studying the English landscape painters{' '}<strong>J. M. W. Turner</strong>{' '}and{' '}<strong>John Constable</strong>, whose canvases were already
        doing reckless things with atmosphere, weather, and dissolved light that no Frenchman had dared. It was a
        private masterclass in painting air rather than objects. And London handed them something even more
        practical than a lesson: the dealer{' '}<strong>Paul Durand-Ruel</strong>, who had moved his own stock to
        London to keep it safe from the war, was there too. The man who would spend the next forty years keeping
        the movement financially alive met two of its founders as refugees in a foreign city. (More on him in
        Chapter 4 &mdash; he is the hinge the whole market turns on.)
      </p>

      <SectionHeader accent={accent} label="The tube" title="A useful myth, gently disarmed" />
      <p style={proseStyle}>
        It is worth pausing on a famous line that the collapsible metal{' '}<strong>paint tube</strong>{' '}&ldquo;made Impressionism possible.&rdquo; The tube was real &mdash; an American painter, John Goffe Rand,
        patented it in 1841, and ready-made tube paint in bright new synthetic pigments (chrome yellow, cobalt
        blue, viridian green) genuinely did let these painters work brighter, lighter, and faster than any
        generation before. But it didn&rsquo;t{' '}<em>cause</em>{' '}the movement. Painters had worked outdoors
        for decades before &mdash; the Barbizon landscapists (the Realism chapter covers them) were out in the
        fields with the previous generation&rsquo;s kit. The catchiest version of the legend, &ldquo;without paint
        in tubes there would have been no Impressionism,&rdquo; comes from Renoir&rsquo;s son writing a memoir in
        1962, decades after the fact, putting a quip in his father&rsquo;s mouth. Treat it as a charming
        exaggeration, not a cause. The tube was an enabler, like a good pair of boots is an enabler for a long
        walk. It did not decide where anyone walked.
      </p>

      <SectionHeader accent={accent} label="La Grenouillère" title="Two friends, one spot, the new way found" />
      <p style={proseStyle}>
        You can watch the new way of seeing get invented at a single muddy spot on the river. In the summer of
        1869{' '}<strong>Claude Monet</strong>{' '}(1840&ndash;1926) and{' '}<strong>Pierre-Auguste Renoir</strong>{' '}(1841&ndash;1919) &mdash; broke, hungry, sharing what little they had &mdash; set up their easels side by
        side at{' '}<strong>La Grenouillère</strong>{' '}(&ldquo;the frog pond&rdquo;), a rowdy floating
        café-and-bathing resort on the Seine just outside Paris, the kind of cheap day-trip pleasure spot the new
        railways had put within reach of every Parisian clerk.
      </p>
      <p style={proseStyle}>
        Look at what they painted. Not a grand composition &mdash; just the dazzle of a Sunday: dark little
        rowboats clustered on water that is a churning chop of horizontal strokes, blue and green and white and
        black laid down in quick separate dashes that{' '}<em>read</em>{' '}as moving, sun-struck water the instant
        you stop staring at the individual marks. Bathers are a few flicks of paint. The dappled light coming
        through the trees is dabs. Nobody&rsquo;s face is finished; nobody needs to be. The whole thing has the
        speed of the thing it depicts. Two friends stood at the same view and each came back with a canvas that
        looked less like a &ldquo;picture&rdquo; than like a held breath of an actual afternoon.
      </p>
      <p style={proseStyle}>
        That is the year the eye changed. They didn&rsquo;t have the name yet &mdash; that was five years and one
        furious critic away &mdash; and they certainly didn&rsquo;t have a buyer. But the{' '}<em>method</em>{' '}was now real: the loose, bright, broken-color sketch, finished on the spot, treated not as a study for some
        later proper painting but as the proper painting itself. All they needed now was a wall to hang it on. The
        Salon was never going to give them one.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MONET_PAL}
        imageUrl={ART_IMG.monetGrenouillere}
        ratio="4/3"
        alt="Monet, La Grenouillère"
        caption={<>A floating café and bathing spot on the Seine, painted on the spot in quick separate dashes &mdash; water that is a chop of blue, green, white and black strokes reading as real moving light the instant you step back, bathers reduced to a few flicks. Monet and Renoir set up side by side here in 1869; this is the new way of seeing being invented in real time.</>}
        credit={<>Claude Monet,{' '}<em>La Grenouillère</em>, 1869 · The Metropolitan Museum of Art, New York (Renoir painted the same scene that summer, easel to easel; his version is in the Nationalmuseum, Stockholm)</>}
        rights="Public domain worldwide (Claude Monet died 1926). Wikimedia Commons."
      />
    </article>
  </>
)

// ── 3. The seascape they laughed at ─────────────────────────
const NameImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · April 1874" title="The seascape they laughed at" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>B</DropCap>
        y the early 1870s the younger painters had run out of patience with knocking on a door that would not
        open. The Franco-Prussian War of 1870&ndash;71 had just scattered them violently &mdash; their gifted
        friend{' '}<strong>Frédéric Bazille</strong>{' '}was killed in action, age 28, before any of this had a
        name &mdash; and the survivors came back to a Paris where the jury was no friendlier than before. So{' '}<strong>Camille Pissarro</strong>{' '}(1830&ndash;1903), the eldest of them and the closest thing the group
        had to a steady conscience, proposed the obvious heresy: stop begging the official machine for a wall.
        Build your own show.
      </p>
      <p style={proseStyle}>
        In December 1873 they did the paperwork. They formed a{' '}<strong>cooperative</strong>{' '}&mdash; a
        business that the members own and run jointly, sharing the costs and the takings &mdash; and gave it a
        name so dull it was almost a joke: the{' '}<strong>Société Anonyme des Artistes Peintres, Sculpteurs, Graveurs</strong>{' '}(&ldquo;Anonymous Society of Painters, Sculptors, Engravers&rdquo;).
        &ldquo;Anonymous&rdquo; here is just the French legal term for a joint-stock company; there was nothing
        mysterious about it. The point was independence: their own jury (which is to say, no jury), their own
        walls, their own door.
      </p>

      <SectionHeader accent={accent} label="Nadar's studio" title="Thirty painters, one franc, three thousand laughs" />
      <p style={proseStyle}>
        The first show opened on{' '}<strong>15 April 1874</strong>{' '}and ran a month. The venue tells you
        everything about their world: they borrowed the empty upstairs rooms of a famous{' '}<em>photographer</em>,{' '}<strong>Nadar</strong>, at 35 boulevard des Capucines &mdash; the photographer lending his old studio to
        the painters whose whole problem was that a camera could now do &ldquo;finish&rdquo; better than any human
        hand. Admission was one franc. Thirty-odd artists hung something like 165 to 175 works. Monet, Renoir,
        Pissarro, Sisley, Degas, Berthe Morisot &mdash; the founding core was there. Manet, characteristically,
        was not; he was still angling for the Salon and feared the company would ruin his chances.
      </p>
      <p style={proseStyle}>
        Around three and a half thousand people came. Many of them came to laugh.
      </p>

      <SectionHeader accent={accent} label="No. 98" title="A title given in a shrug, an insult given in print" />
      <p style={proseStyle}>
        Hanging in those rooms was a small canvas by Monet, barely a foot and a half tall: a hazy harbor at dawn,
        the water and sky melting into one soft gray-pink-blue murk, a few dark boats sketched in shorthand, and
        &mdash; the one hot note in the whole picture &mdash; a small, fierce dab of orange sun, its reflection
        broken across the water in a few quick licks. It was catalogue{' '}<strong>No. 98</strong>.
      </p>
      <p style={proseStyle}>
        It needed a title for that catalogue, and here the story is best told as Monet himself later told it (so
        take it as his own recollection, not court testimony): asked what to call it, and knowing it
        &ldquo;couldn&rsquo;t really pass as a view of Le Havre&rdquo; &mdash; too loose, too vague, too obviously{' '}<em>not</em>{' '}a finished topographical view of the port &mdash; he shrugged and said, in effect, just put{' '}<em>Impression</em>. And so it hung as{' '}<em>Impression, Sunrise</em>.
      </p>
      <p style={proseStyle}>
        That word was already drifting around the painters&rsquo; own vocabulary; one friendly critic, Jules
        Castagnary, even used &ldquo;impressionists&rdquo; approvingly that very month. But it took an enemy to
        make it stick. On 25 April 1874 a satirist named{' '}<strong>Louis Leroy</strong>{' '}published a review in
        the comic paper{' '}<em>Le Charivari</em>{' '}&mdash; and he titled it, with a sneer, &ldquo;The Exhibition
        of the Impressionists.&rdquo; He wrote it as a comic skit: he walks the show arm in arm with an invented
        stuffy academic painter who grows steadily more apoplectic at the unfinished-looking pictures. Stopping in
        front of No. 98, the punchline lands (this is the widely reproduced translation):{' '}<em>Impression &mdash; I was certain of it. I was just telling myself that, since I was impressed, there had to be some impression in it... and what freedom, what ease of workmanship! Wallpaper in its embryonic state is more finished than that seascape.</em>
      </p>
      <p style={proseStyle}>
        Wallpaper is more finished than that. There, in one line, is the whole quarrel: a critic raised on{' '}<em>fini</em>{' '}looking at the visible stroke and seeing not a method but a failure &mdash; an unfinished
        smear that someone had the nerve to frame and charge a franc for.
      </p>

      <SectionHeader accent={accent} label="The banner" title="Wearing the joke" />
      <p style={proseStyle}>
        So, to be precise about a thing the romantic version always fudges: Leroy did not invent the word from
        thin air. Monet had titled the painting; a friendly critic had already used the term kindly. What Leroy
        did was{' '}<em>weaponize</em>{' '}it &mdash; turn the painters&rsquo; own quiet word into a public joke at
        their expense, and make it stick to all of them at once.
      </p>
      <p style={proseStyle}>
        And then the painters did the thing that makes them permanently likable: they picked the insult up off the
        floor and ran it up a flagpole. Within three years &mdash; by their third exhibition in 1877 &mdash; they
        had stopped fighting the name and openly called themselves{' '}<em>les Impressionnistes</em>. It is the same
        trick the Realists had pulled with &ldquo;Realism&rdquo; before them and the{' '}<strong>Fauves</strong>{' '}(&ldquo;wild beasts&rdquo;) would pull after them: take the word the enemy threw at you and wear it like a
        medal. A movement that had no manifesto, no agreed program, and no founding creed got, instead, a name
        &mdash; handed to it by a man who meant it as a punchline. They said thank you and put it on the door.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MONET_PAL}
        imageUrl={ART_IMG.impressionSunrise}
        ratio="4/3"
        alt="Monet, Impression, Sunrise"
        caption={<>A hazy harbor at dawn, water and sky melting into one soft murk, a few boats sketched in shorthand, and one fierce dab of orange sun broken in licks across the water. Barely a foot and a half tall. Monet shrugged out the title &ldquo;Impression&rdquo; for the catalogue; a hostile critic turned it into a joke; the painters wore the joke as their name.</>}
        credit={<>Claude Monet,{' '}<em>Impression, Sunrise</em>, 1872 · Musée Marmottan Monet, Paris (catalogue No. 98 at the 1874 exhibition)</>}
        rights="Public domain worldwide (Claude Monet died 1926). Wikimedia Commons."
      />
    </article>
  </>
)

// ── 4. A cooperative at war with itself ─────────────────────
const GroupImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1874–1886" title="A cooperative at war with itself" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t is tempting to picture the Impressionists as a band of brothers &mdash; comrades against the jury, loyal
        to the end. The truth is messier and more human: they were a fractious cooperative that spent twelve years
        and eight exhibitions fighting{' '}<em>each other</em>{' '}nearly as hard as they fought the Salon. The
        wonder is not that the group fell apart in 1886. The wonder is that it held together long enough to win.
      </p>
      <p style={proseStyle}>
        They mounted{' '}<strong>eight exhibitions</strong>{' '}between 1874 and 1886, and almost nobody showed up
        to all of them. In fact, of the entire shifting cast, exactly{' '}<strong>one</strong>{' '}painter exhibited
        in all eight: the patient eldest, Pissarro, the conscience of the thing, who simply kept turning up.
        Everyone else came and went depending on the quarrel of the year.
      </p>

      <SectionHeader accent={accent} label="The fracture line" title="Degas, the engine and the earthquake" />
      <p style={proseStyle}>
        The chief quarrel had a name:{' '}<strong>Edgar Degas</strong>{' '}(1834&ndash;1917). Degas was the
        group&rsquo;s organizing engine &mdash; tireless about staging the shows, recruiting, arguing &mdash; and
        simultaneously its great internal earthquake. He had two convictions that kept blowing the cooperative
        apart. First, a hard rule: if you showed with the independents, you were{' '}<em>forbidden</em>{' '}to also
        submit to the Salon &mdash; no hedging, no double-dipping. Second, he kept insisting on inviting his own
        allies, Realist illustrators and figure painters who weren&rsquo;t really doing the bright plein-air thing
        at all, which the landscape men resented.
      </p>
      <p style={proseStyle}>
        Picture how that played in the room. Monet, Renoir, and Sisley still needed Salon sales to eat, and
        Degas&rsquo;s no-Salon rule was, to them, a luxury demanded by men with private incomes. So when Degas
        pressed it &mdash;{' '}<em>show with us and you may not show there</em>{' '}&mdash; the landscape men simply
        walked. They sat out the show of 1879 and stayed out; by the sixth exhibition in 1881, Monet, Renoir,
        Sisley, Caillebotte, and Cézanne were{' '}<em>all</em>{' '}absent, leaving the room a largely Degas-faction
        affair stuffed with his Realist friends. The thing had nearly become two rival shows wearing one name.
      </p>
      <p style={proseStyle}>
        Then in 1882 it swung the other way, and the swing had an author: the dealer{' '}<strong>Paul Durand-Ruel</strong>{' '}&mdash; who had a great deal of his money tied up in Monet, Renoir, and
        Sisley canvases and needed those names exhibiting together &mdash; pushed to get the landscape men back in
        for what became the most purely Impressionist of the late shows. Degas, contrary to the end, abstained
        from that one in a huff rather than show beside the plein-air crowd on someone else&rsquo;s terms. The
        &ldquo;Impressionist exhibitions&rdquo; were, much of the time, an argument with the lights on.
      </p>
      <p style={proseStyle}>
        Two more painters drift through this story and matter.{' '}<strong>Paul Cézanne</strong>{' '}(1839&ndash;1906) showed in the first and third exhibitions, got savaged by the critics, and quietly
        withdrew to work alone in Provence &mdash; he{' '}<em>passed through and left</em>, and what he did next
        would help found the movement that buried Impressionism. He did not arrive untutored: around 1872, the
        patient Pissarro took the younger Cézanne under his wing out at Pontoise, painting beside him in the
        fields and coaxing him away from his early murky studio manner toward working directly from nature &mdash;
        Pissarro the conscience again, this time as a teacher. And{' '}<strong>Gustave Caillebotte</strong>{' '}(1848&ndash;1894) &mdash; a wealthy engineer-painter &mdash; was the group&rsquo;s banker, financing
        several of the shows out of his own pocket and buying his friends&rsquo; work when no one else would.
      </p>
      <p style={proseStyle}>
        But to leave Caillebotte as the money man would be to miss a real painter. His own canvases are
        unmistakable: cool, sharp-edged, almost photographic pictures of Haussmann&rsquo;s new Paris, painted with
        a hard precision the looser Impressionists never aimed for.{' '}<em>The Floor Planers</em>{' '}(1875) &mdash;
        three shirtless workmen scraping a parquet floor, muscled and anonymous &mdash; was rejected by the Salon
        as vulgar before he hung it at the 1876 exhibition.{' '}<em>Paris Street; Rainy Day</em>{' '}(1877) is the
        masterpiece: a vast canvas of well-dressed Parisians under umbrellas crossing a wet, gleaming boulevard
        intersection, the cobbles and the great wedge of a new apartment block rendered with an almost
        architectural exactness. He didn&rsquo;t just pay for the modern city to be painted. He painted it
        himself, harder-edged than anyone. (He also left so much of his collection to the French state in his will
        that the bequest set off a fight &mdash; a story this reading saves for its last chapter.)
      </p>

      <SectionHeader accent={accent} label="The dealer" title="Durand-Ruel bets everything, twice" />
      <p style={proseStyle}>
        A cooperative can hang its own pictures. It cannot, by itself, create{' '}<em>buyers</em>. For that the
        movement needed a{' '}<strong>dealer</strong>{' '}&mdash; a merchant who buys paintings from artists and
        resells them at a profit, and who, crucially, can keep an artist alive by paying for work the public
        hasn&rsquo;t learned to want yet. The Impressionists&rsquo; dealer, and one of the genuine heroes of the
        story, was{' '}<strong>Paul Durand-Ruel</strong>{' '}(1831&ndash;1922).
      </p>
      <p style={proseStyle}>
        Durand-Ruel did something nearly unheard of: he bet on these painters{' '}<em>in bulk</em>. He had met
        Monet and Pissarro in London during the war (where all three had fled), and from 1872 he began buying
        their work by the armful &mdash; not a canvas here and there, but cornering an artist&rsquo;s entire
        output, paying a steady stream so the painter could keep painting. He once bought some two dozen canvases
        out of Manet&rsquo;s studio in a single swoop. It was a radical, all-in business model: stockpile an
        unfashionable artist and wait for the world to catch up.
      </p>
      <p style={proseStyle}>
        The world took its time, and the wait nearly destroyed him. By the mid-1880s Durand-Ruel was sitting on a
        mountain of unsold Impressionist paintings and was close to bankruptcy &mdash; he had bought faster than
        France would buy from him. What saved him was a continent away. In 1886 an American association invited him
        to bring the pictures to{' '}<strong>New York</strong>, and the New York exhibitions were a hit: Americans,
        with no Salon prejudice to overcome and new money to spend, bought what Paris still mocked. It opened the
        entire American market; he opened a New York branch the next year. His own verdict was blunt and grateful:
        without America, he said, he would have been ruined after buying so many Monets and Renoirs &mdash; the
        two 1886 shows over there saved him.
      </p>
      <p style={proseStyle}>
        So follow the irony all the way down. The movement that began with a mocked seascape in a borrowed
        photographer&rsquo;s studio was, in the end, kept alive less by the country that produced it than by the
        country that imported it. The Salon never did come around in time. The buyers came from across an ocean
        &mdash; which is one reason so many of the greatest Impressionist canvases hang today not in Paris but in
        Chicago, Washington, and New York.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={CAILLE_PAL}
        imageUrl={ART_IMG.caillebotteParisStreet}
        ratio="4/3"
        alt="Caillebotte, Paris Street; Rainy Day"
        caption={<>Well-dressed Parisians under umbrellas crossing a wet, gleaming boulevard intersection, the cobbles and a great wedge of new apartment block rendered with almost architectural precision. Caillebotte &mdash; the group&rsquo;s wealthy financier &mdash; was also a sharp, cool, almost photographic painter of Haussmann&rsquo;s new Paris in his own right, not merely the man who paid the bills.</>}
        credit={<>Gustave Caillebotte,{' '}<em>Paris Street; Rainy Day</em>, 1877 · Art Institute of Chicago</>}
        rights="Public domain worldwide (Gustave Caillebotte died 1894). Wikimedia Commons."
      />
    </article>

    <MeanwhileSheet
      region="New York"
      title="The country that didn't say no."
      body="While Paris was still treating Impressionism as a joke or a scandal, the American market, reached through Durand-Ruel's 1886 New York shows, simply bought it. No Salon, no jury, no century of academic taste to defend — just collectors with money and no reason to be offended. It saved the dealer, opened the U.S. to the movement, and is the direct reason an American visitor today can see world-class Monets, Renoirs and Degas without crossing the Atlantic at all."
    />
  </>
)

// ── 5. The women, in the rooms they were allowed ────────────
const WomenImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris" title="The women, in the rooms they were allowed" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>H</DropCap>
        ere is a fact the tote-bag version of Impressionism quietly drops: some of the movement&rsquo;s founders,
        its most loyal members, and its sharpest operators were women &mdash; and the reason their paintings look
        the way they look is not a gentle preference for domestic things. It is a{' '}<em>wall</em>. We need to name
        the wall plainly, because softening it is exactly how their achievement gets misread.
      </p>
      <p style={proseStyle}>
        A respectable bourgeois woman in 1870s Paris could not go where the male Impressionists went. She could
        not sit alone in a café sketching strangers. She could not loiter at the racetrack, go backstage at the
        ballet, drink at the bar of the Folies-Bergère, or stand in a working-class dance hall taking notes. Those
        modern, public, often slightly disreputable spaces &mdash; the exact spaces that were the male
        painters&rsquo; richest subject matter &mdash; were closed to her by the iron etiquette of her class. So
        the women painted what they{' '}<em>were allowed to see</em>: the drawing room, the garden, the nursery,
        women and children in private interiors. Not because their ambition was small. Because the door to
        everywhere else was bolted. The constraint is the story. Read these canvases as brilliant work done inside
        a cage, and they snap into focus.
      </p>

      <SectionHeader accent={accent} label="Berthe Morisot" title="Founder, not footnote" />
      <p style={proseStyle}>
        Start with{' '}<strong>Berthe Morisot</strong>{' '}(1841&ndash;1895), and start by deleting the word
        &ldquo;muse.&rdquo; Morisot was a{' '}<em>founding member</em>{' '}of the Société Anonyme &mdash; there at
        the start, a signer, an organizer &mdash; and she was its most faithful exhibitor after Pissarro, showing
        in all but one of the eight exhibitions (she missed only 1879, the year she had her daughter). She married
        into the circle &mdash; to Eugène Manet, brother of Édouard &mdash; but &ldquo;married into&rdquo;
        undersells her: at the very end, in 1886, she and Eugène{' '}<strong>organized and financed the eighth and final exhibition</strong>{' '}themselves. She didn&rsquo;t drift through the movement. She helped run it,
        from the first show to the last.
      </p>
      <p style={proseStyle}>
        Look at her best-known canvas,{' '}<em>The Cradle</em>{' '}(1872): her own sister, Edma, seated beside a
        gauzy bassinet, watching her sleeping daughter through the veil of netting, her hand at her cheek. It is
        painted with the lightest, most translucent touch in the whole movement &mdash; the white netting is a few
        breaths of thinned paint you can almost see through &mdash; and it is doing something the men literally could not.
        This is the female world observed{' '}<em>from inside</em>{' '}it, by someone who lived in those rooms and
        made them the subject. The tenderness is real. So is the boundary that produced it &mdash; and
        Morisot&rsquo;s answer to the boundary was not to apologize for the nursery but to paint it more finely
        than anyone alive.
      </p>

      <SectionHeader accent={accent} label="Mary Cassatt" title="The American who ran the market" />
      <p style={proseStyle}>
        <strong>Mary Cassatt</strong>{' '}(1844&ndash;1926) was the outsider&rsquo;s outsider: an American, from
        Pittsburgh, who came to Paris to be a serious painter and refused to go home. When Degas &mdash; who
        admired her work &mdash; invited her to exhibit with the independents, she weighed it and{' '}<em>accepted</em>, glad to be free of the Salon jury she had come to despise; she debuted with the group in
        1879. Her great subject was mothers and children and the interior lives of women &mdash; again, the
        territory open to her &mdash; rendered with a hard, modern, unsentimental edge and a deep debt to Japanese
        woodblock prints, whose flat planes and bold outlines she studied and openly echoed in her own color
        prints.
      </p>
      <p style={proseStyle}>
        But Cassatt&rsquo;s most consequential agency was not on the canvas at all &mdash; it was over the{' '}<em>market</em>, the very lever the women were supposedly shut out of. She had a wealthy American friend, the
        collector Louisine Havemeyer, and Cassatt became her advisor, steering first-rate Impressionist (and Old
        Master) pictures into the Havemeyer collection. That collection is a huge part of why the Metropolitan
        Museum in New York is now stuffed with masterpieces. Sit with that: a woman the Paris establishment
        regarded as a curiosity quietly redirected the flow of great paintings across an ocean and helped build
        one of the world&rsquo;s major museums by proxy. She did not just make the art. She moved it.
      </p>

      <SectionHeader accent={accent} label="Eva Gonzalès" title="Named, so she isn't a token" />
      <p style={proseStyle}>
        And there was a third, who gets dropped from the story so routinely that naming her is itself a small
        correction.{' '}<strong>Eva Gonzalès</strong>{' '}(1849&ndash;1883) was Manet&rsquo;s only formal pupil, a
        real talent working inside the same circle &mdash; and she died at thirty-four, of an embolism following
        childbirth, six days after Manet himself. Include her, and the women stop being a tidy duo and become what
        they were: a cohort, working at the top of the movement, against a wall the men never had to feel. The
        wall is not a sad footnote to their story. It is the thing they painted around, and beat.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MORISOT_PAL}
        imageUrl={ART_IMG.morisotCradle}
        ratio="4/5"
        alt="Morisot, The Cradle"
        caption={<>Morisot&rsquo;s sister Edma watches her sleeping daughter through the gauze of a bassinet, her hand at her cheek &mdash; the netting rendered in a few breaths of thinned, translucent paint. The female world observed from inside it, by a founding member of the movement who made the one room left open to a respectable woman &mdash; the nursery &mdash; into the subject of a masterpiece.</>}
        credit={<>Berthe Morisot,{' '}<em>The Cradle</em>, 1872 · Musée d&rsquo;Orsay, Paris</>}
        rights="Public domain worldwide (Berthe Morisot died 1895). Wikimedia Commons."
      />
    </article>
  </>
)

// ── 6. Degas and the indoor eye ─────────────────────────────
const DegasImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The studio" title="Degas and the indoor eye" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>N</DropCap>
        ow for the man who breaks every rule you have just learned, including the ones his own movement was built
        on.
      </p>
      <p style={proseStyle}>
        If &ldquo;Impressionism&rdquo; means going outdoors to paint the changing light, then{' '}<strong>Edgar Degas</strong>{' '}was not an Impressionist &mdash; and he would have agreed with you, loudly. Degas{' '}<em>never painted outdoors.</em>{' '}He scorned the whole plein-air religion; he worked in his studio, from
        drawings and memory, building his pictures with the deliberation of an old-master draftsman who simply
        happened to have chosen the most modern subjects in Paris. He preferred to call himself a Realist, or an
        Independent, and he openly{' '}<em>hated</em>{' '}being lumped in as an Impressionist. (The movement&rsquo;s
        most relentless organizer despised its name &mdash; one more reason the name was never anyone&rsquo;s
        manifesto.) And yet his pictures are unmistakably part of the same revolution. Hold both facts at once;
        the contradiction is the point of the man.
      </p>

      <SectionHeader accent={accent} label="The subjects" title="Dancers, laundresses, the café, the bath" />
      <p style={proseStyle}>
        What Degas brought was the indoor modern eye, pointed at the parts of the new city the others mostly
        missed. His great recurring subject was the{' '}<strong>ballet</strong>{' '}&mdash; but not the ballet of
        the gala performance. He painted the{' '}<em>work</em>: dancers rehearsing, scratching, yawning, adjusting
        a shoe, exhausted, caught in the ungraceful in-between moments, a teacher with a stick, sunlight from a
        high studio window. He painted laundresses straining over an iron, jockeys and horses fidgeting before a
        race, women washing themselves in shallow tubs (he called it seeing them &ldquo;as if through a
        keyhole&rdquo; &mdash; the unposed body doing an ordinary private thing). It was modern life, like the
        others &mdash; but the{' '}<em>labor</em>{' '}and the awkward private instant rather than the sunny Sunday.
      </p>

      <SectionHeader accent={accent} label="The eye" title="Japonisme and the caught, off-balance moment" />
      <p style={proseStyle}>
        The look of a Degas is built from two tools. The first is the{' '}<strong>off-balance, caught moment</strong>{' '}&mdash; figures sliced by the edge of the canvas, a dancer cropped in half by the
        frame, a great swathe of empty floor where a Salon painter would have centered everything tidily. It looks
        like a snapshot grabbed before the subject could compose herself, which is exactly the modern, accidental
        feeling he was after.
      </p>
      <p style={proseStyle}>
        The second tool has a name:{' '}<em>Japonisme</em>. When Japan reopened to trade in the 1850s&ndash;60s,
        Japanese woodblock prints &mdash;{' '}<em>ukiyo-e</em>, the cheap, brilliant &ldquo;pictures of the
        floating world&rdquo; by masters like Hokusai, Hiroshige, and Utamaro &mdash; flooded into Paris and
        detonated French ideas about composition. These prints did everything the academy forbade: flat planes of
        unshaded color, daring asymmetry, high or odd viewpoints, and radical{' '}<em>cropping</em>{' '}(a figure
        casually cut off by the frame as if the world simply continued past the edge of the paper). Degas and
        Cassatt didn&rsquo;t passively absorb this; they raided it &mdash; studying the prints, owning them, and
        deliberately importing their devices into French pictures (Cassatt&rsquo;s color prints openly rework
        Utamaro&rsquo;s compositions of women at their domestic tasks). That cropped, tilted, off-center Degas
        dancer is, in part, a Paris ballet studio built on the compositional logic of a Tokyo print, borrowed on
        purpose.
      </p>
      <p style={proseStyle}>
        Look at{' '}<em>The Dance Class</em>{' '}(1874): a rehearsal room seen at a slightly high, tilted angle, the
        floor tipping up toward you, a knot of young dancers scattered unevenly across it &mdash; one scratching
        her back, one twisting to look, several merely{' '}<em>waiting</em>{' '}&mdash; an old ballet master in the
        middle leaning on his stick. No center, no symmetry, no posed climax. Just a real working room caught
        mid-yawn. There is not a square inch of open air in it, and it is one of the purest pictures the movement
        produced.
      </p>

      <SectionHeader accent={accent} label="The scandals" title="L'Absinthe and a wax girl in a real skirt" />
      <p style={proseStyle}>
        Degas&rsquo;s modern eye had an edge that could draw blood.{' '}<em>L&rsquo;Absinthe</em>{' '}(1875&ndash;76)
        takes its name from{' '}<strong>absinthe</strong>{' '}&mdash; the cheap, potent, faintly disreputable green
        spirit that was the drink of the Paris demi-monde, with a whiff of addiction and ruin about it; naming the
        picture after it was half the scandal before anyone even looked. And then you look. The two figures are
        shoved off into the upper right of the canvas &mdash; a hollow-eyed woman with a glass of the cloudy green
        liquor in front of her, a disheveled man slumped beside her &mdash; while the entire lower-left foreground
        is given over to a zig-zag of empty marble café tables marching in at a steep, vertiginous tilt. The
        palette is drained to greys and browns; the one charged note of color in the whole picture is the
        milky-green absinthe in her glass. The figures don&rsquo;t look at each other or at us; they stare past
        everything into nothing. Compositionally they are nearly crowded out of their own portrait &mdash; and
        that off-to-the-side emptiness is the picture&rsquo;s whole argument: the loneliness of the modern city,
        two people alone{' '}<em>together</em>{' '}in a crowded café, rendered without a shred of comfort. When it
        was later shown in London, critics recoiled at it as ugly and degrading &mdash; which rather missed that
        the chill was the entire point.
      </p>
      <p style={proseStyle}>
        His strangest provocation wasn&rsquo;t a painting at all. At the sixth exhibition in 1881 he unveiled{' '}<em>The Little Dancer Aged Fourteen</em>: a two-thirds-life-size{' '}<strong>wax</strong>{' '}sculpture of a
        young ballet student &mdash; and he dressed her in a{' '}<em>real</em>{' '}fabric tutu, a real bodice, a
        real ribbon in her hair, and real hair. The realism was uncanny, almost taxidermic; viewers found it
        disturbing, even monstrous, a little too much like a real specimen in a{' '}<em>vitrine</em>{' '}(a glass
        display case). It scandalized the show. It is now, of course, one of the most beloved objects in
        nineteenth-century art &mdash; cast in bronze after his death and standing in museums on three continents
        &mdash; which is the usual fate of these scandals: the thing that horrified one generation becomes the
        postcard the next one lines up to buy.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={DEGAS_PAL}
        imageUrl={ART_IMG.degasDanceClass}
        ratio="1/1"
        alt="Degas, The Dance Class"
        caption={<>A ballet rehearsal seen from a high, tilted angle, the floor tipping toward you, young dancers scattered unevenly &mdash; one scratching, one twisting, several just waiting &mdash; an old master leaning on his stick at the center of nothing in particular. Cropped and off-balance like a Japanese print, caught like a snapshot, and not a square inch of open air: Degas&rsquo;s indoor Impressionism.</>}
        credit={<>Edgar Degas,{' '}<em>The Dance Class</em>, 1874 · The Metropolitan Museum of Art, New York</>}
        rights="Public domain worldwide (Edgar Degas died 1917). Wikimedia Commons."
      />
    </article>
  </>
)

// ── 7. Winning, slowly, separately ──────────────────────────
const LastImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Giverny" title="Winning, slowly, separately" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture Claude Monet in his seventies, rich and famous, standing at the edge of a pond he had dug himself.
        At Giverny, the village house he bought and then expanded, he built a water-garden &mdash; a lily pond, a
        green Japanese footbridge, banks of iris and wisteria &mdash; and spent his last decades painting it, over
        and over, on canvases so large he had a special studio raised to hold them. The man the public had once
        come to{' '}<em>laugh at</em>{' '}now had gardeners, a chauffeur, dealers competing for his work, and a
        private paradise built solely to be painted. This is where the story of &ldquo;the poor, doomed
        Impressionists&rdquo; goes to die.
      </p>
      <p style={proseStyle}>
        Because the legend is wrong, and it is worth correcting precisely. Not all of them won, and one of them
        genuinely didn&rsquo;t:{' '}<strong>Alfred Sisley</strong>{' '}(1839&ndash;1899) &mdash; British-born but
        Paris-based, the most single-mindedly devoted pure landscapist of the whole group, the one who never
        wandered off into figures or fashion the way Renoir did &mdash; stayed poor his entire life and died poor,
        in 1899, just as the prices of the others were beginning to climb; the surge in{' '}<em>his</em>{' '}prices
        came only after he was in the ground, which is the cruelest possible version of recognition. Pissarro
        struggled for years before things eased. But for most of them the honest arc is &ldquo;struggled early,
        then mostly won.&rdquo; Manet and Degas had always been comfortable; Caillebotte was wealthy; and by the
        1880s Monet and Renoir were selling, traveling, prospering. Monet would die in 1926 a famous and wealthy
        man in that very water-garden. The mockery had not stopped them. It had merely been early.
      </p>
      <p style={proseStyle}>
        And as they won, they scattered &mdash; each pushing his own discovery further on his own. Monet&rsquo;s
        late move is the clearest. Having spent his life chasing the light of a single moment, he started painting
        the{' '}<em>same subject over and over</em>{' '}&mdash; a row of haystacks, the front of Rouen Cathedral
        &mdash; at different hours and seasons, hanging the variations together so you could see the light itself
        change across a wall. The{' '}<strong>Haystacks</strong>{' '}series (1890&ndash;91, around twenty-five
        canvases) and the{' '}<strong>Rouen Cathedral</strong>{' '}series (the 1890s, thirty-odd canvases) are the
        original Impressionist idea taken to its logical extreme: the subject barely matters; the light is the
        whole picture. It is, in a sense, the movement completing itself &mdash; and quietly pointing past itself,
        since when the object stops mattering you are already most of the way to abstraction.
      </p>

      <SectionHeader accent={accent} label="1886" title="The last show, and the picture that ended it" />
      <p style={proseStyle}>
        The eighth exhibition opened in May 1886, organized and paid for, fittingly, by Berthe Morisot and Eugène
        Manet &mdash; a movement that began in a borrowed studio ending in a show its founding woman put on
        herself. Most of the old core stayed away: no Monet, no Renoir, no Sisley, no Caillebotte. The band was
        effectively done. And then, on the wall, hung the picture that announced what was coming next.
      </p>
      <p style={proseStyle}>
        It was by a young painter named Georges Seurat, and it was enormous:{' '}<em>A Sunday on La Grande Jatte</em>, a sunny riverside park full of stiff, frozen, oddly toy-like Parisians at leisure. But look
        closely &mdash; closer than the Impressionists ever asked you to &mdash; and the entire surface is built
        from millions of tiny, separate, mechanical{' '}<em>dots</em>{' '}of pure color, applied with a deliberate,
        almost scientific precision. This is{' '}<strong>Pointillism</strong>: optical mixing turned from the
        Impressionists&rsquo; loose, intuitive eyeballing into a rigorous{' '}<em>system</em>, the dot as method,
        color theory followed like a manual. Where Monet had dashed the light down in a hurried instant, Seurat
        had spent two years assembling his light dot by dot, in the studio, on purpose.
      </p>
      <p style={proseStyle}>
        And there it was &mdash; the trap that every winning movement eventually walks into. The Impressionists
        had spent twelve years getting the world to accept the loose, the fleeting, the spontaneous, the
        dashed-off-in-a-moment. Now a younger man had hung, in their own show, a picture that took their core idea
        and made it the{' '}<em>opposite</em>{' '}&mdash; slow, frozen, systematic, premeditated. To the next
        generation, the spontaneous Impressionist instant was no longer the rebellion. It was the new
        establishment, the thing to push against. Impressionism, having finally won, had become a wall of its own.
      </p>

      <SectionHeader accent={accent} label="The bequest" title="France comes around, twenty-three years late" />
      <p style={proseStyle}>
        There is one last twist, and it is the most fitting ending the movement could have asked for &mdash;
        though most of them did not live to see it. When{' '}<strong>Gustave Caillebotte died on 21 February 1894</strong>, his will left his personal collection of{' '}<strong>68 Impressionist paintings</strong>{' '}&mdash; Monets, Renoirs, Degas, Pissarros, Cézannes, the work he had bought from friends when no one else
        would touch it &mdash; to the French state, on one condition: that the pictures hang not in some storeroom
        but in a national museum, as art the nation officially owned. He named{' '}<strong>Renoir as the executor</strong>{' '}to see it done.
      </p>
      <p style={proseStyle}>
        The state&rsquo;s reaction tells you the war was not yet over. The academic establishment recoiled, and by
        the standard account it was the grand academic painter{' '}<strong>Jean-Léon Gérôme</strong>{' '}who led the
        objection &mdash; reportedly aghast that the government would dignify such work by hanging it in a public
        collection at all. After a wrangle, the state agreed in an{' '}<strong>1896</strong>{' '}negotiation to
        accept only{' '}<strong>38</strong>{' '}of the 68 works. Those 38 were finally{' '}<strong>unveiled in a room of their own &mdash; the Caillebotte room &mdash; at the Musée du Luxembourg in February 1897.</strong>{' '}It does not sound like much. It was, in fact,{' '}<strong>the first time the Impressionists were shown in a public museum in France</strong>{' '}&mdash; twenty-three years after the mocked little
        seascape hung in Nadar&rsquo;s borrowed studio. The country that had laughed them out of the Salon finally
        hung them on a state wall, grudgingly, having shed a third of the gift to do it, almost a quarter of a
        century too late for the joke to sting anyone but itself.
      </p>
      <p style={proseStyle}>
        So that is how it ends. The cooperative dissolved; there was no ninth exhibition. What came after &mdash;
        Seurat&rsquo;s dots, Cézanne&rsquo;s slow architecture out in Provence, and the wilder painters still to
        come &mdash; belongs to the next chapter, the one usually filed under{' '}<strong>Post-Impressionism</strong>: the generation that grew up{' '}<em>on</em>{' '}Impressionism and then spent
        its life arguing with it. That is a story for another reading. This one ends where it should &mdash; with
        a movement that started life as a joke about an unfinished seascape, won its long argument not by
        outlasting a jury but by building a market the jury couldn&rsquo;t control (Durand-Ruel, the Americans,
        the whole network of dealers and collectors), changed the way Western art saw and painted light, and then
        graciously, on its last night, held the door for the painter who would make it look old.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MONET_PAL}
        imageUrl={ART_IMG.monetCathedral}
        ratio="3/4"
        alt="Monet, Rouen Cathedral series"
        caption={<>The same cathedral front, painted again and again at different hours &mdash; morning, full sun, dusk, fog &mdash; and hung together so the changing light, not the building, becomes the subject. Monet took the original Impressionist idea (paint one fleeting moment of light) to its logical end, and in doing so pointed quietly past the movement toward what came next.</>}
        credit={<>Claude Monet,{' '}<em>Rouen Cathedral series</em>, 1892&ndash;94 · Musée d&rsquo;Orsay, the National Gallery of Art, the Metropolitan Museum and others</>}
        rights="Public domain worldwide (Claude Monet died 1926). Wikimedia Commons."
      />
    </article>

    <MeanwhileSheet
      region="The same room, 1886"
      title="The future was hanging on the wall."
      body="Seurat's Grande Jatte debuted at the eighth and final Impressionist exhibition — inside the very show the movement had built. The painters who taught the world to love the loose, fleeting, spontaneous stroke watched a younger man hang a vast picture built from millions of slow, deliberate, systematic dots: their idea, inverted. It is the cleanest moment in this whole era of one movement handing the torch to the thing that would replace it, in its own house, on its own last night."
    />
  </>
)

// ── Post-Impressionism palettes ─────────────────────────────
const PI_CEZ = ['#5a7042', '#8a7848', '#1c1a12'] as [string, string, string]
const PI_VG = ['#2a3a6a', '#c8b84a', '#0e1428'] as [string, string, string]
const PI_GAUG = ['#a82828', '#c8a430', '#1c1410'] as [string, string, string]
const PI_SEURAT = ['#3a6a4a', '#c8b84a', '#1c2a18'] as [string, string, string]
const PD_CEZANNE = 'Public domain worldwide (Paul C&eacute;zanne died 1906). Wikimedia Commons.'
const PD_VANGOGH = 'Public domain worldwide (Vincent van Gogh died 1890). Wikimedia Commons.'
const PD_GAUGUIN = 'Public domain worldwide (Paul Gauguin died 1903). Wikimedia Commons.'
const PD_SEURAT = 'Public domain worldwide (Georges Seurat died 1891). Wikimedia Commons.'

// ── 1. After the moment, the structure ──────────────────────
const WhyPostImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="rue Laffitte &middot; spring 1886" title="The room where it tips over" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        icture a long, hot, awkward upstairs room in Paris in late spring 1886, above a fashionable restaurant
        called the Maison Dor&eacute;e on rue Laffitte. This is the{' '}<strong>8th Impressionist Exhibition</strong>{' '}&mdash; the eighth and last group show the Impressionists would ever mount; they had been doing them since
        1874, the year a hostile critic gave them the name as a joke &mdash; running from{' '}<strong>15 May to 15 June 1886</strong>. Most of the founders are not even here. Monet, Renoir, Sisley and Caillebotte have all
        defected back to the Salon (the official state-run annual exhibition, the only door to a career in French
        art for two centuries). The cooperative is on its last legs.
      </p>
      <p style={proseStyle}>
        And the picture stopping every visitor is by a 26-year-old none of them had quite figured out. It is
        enormous &mdash; about six and a half feet tall, ten feet wide &mdash; a Sunday afternoon on a small island
        in the Seine, stiff Parisians and their dogs and parasols across a striped lawn under flat dappled light.
        And the entire surface is built out of millions of tiny separate dots of pure color, laid down like a
        mosaic. Not strokes.{' '}<em>Dots.</em>{' '}Step back four feet and it shimmers; step back ten and it locks
        into place.{' '}<strong>Georges Seurat</strong>&rsquo;s{' '}<em>A Sunday Afternoon on the Island of La Grande Jatte</em>{' '}(two years of work; now Art Institute of Chicago) is the painting that &mdash; politely, almost
        academically &mdash; kills its parents.
      </p>
      <p style={proseStyle}>
        Monet had refused to show alongside it. Pissarro, the oldest and steadiest of the Impressionists, had stood
        up for Seurat and Signac and got called a deserter by his own friends for it. The younger painters stayed.
        They had seen what the elders had done, and they thought they could see what it had missed.
      </p>

      <SectionHeader accent={accent} label="The trick the eye couldn&rsquo;t catch" title="Weight, meaning, feeling" />
      <p style={proseStyle}>
        What Impressionism had done was teach a generation to paint{' '}<em>light</em>{' '}&mdash; the flicker of
        shadow on snow, the smear of an orange sun across a gray dawn harbor. The Impressionists put the{' '}<em>instant</em>{' '}on canvas. But the instant is weightless. It doesn&rsquo;t stay. By the late 1880s the
        younger painters could see something was missing &mdash; the architecture that lasts, the{' '}<em>feeling</em>{' '}of a picture, the thing it was about.
      </p>
      <p style={proseStyle}>
        The objection had four parts, one anchor against each.{' '}<strong>Weight.</strong>{' '}A mountain has weight.
        Light passing over a mountain does not. (C&eacute;zanne, in Aix.){' '}<strong>Feeling.</strong>{' '}A wheatfield
        is yellow at noon. So what does it{' '}<em>feel</em>{' '}like to a man standing in it? (Van Gogh, in Arles.){' '}<strong>Meaning.</strong>{' '}A Breton peasant in church doesn&rsquo;t{' '}<em>see</em>{' '}a Bible story; she{' '}<em>imagines</em>{' '}one. How do you paint imagination? (Gauguin, in Pont-Aven.){' '}<strong>Science.</strong>{' '}The Impressionists were eyeballing optical mixing by instinct. What if you did it properly, by formula?
        (Seurat, in Paris.)
      </p>
      <p style={proseStyle}>
        A fifth painter, Toulouse-Lautrec, was already in Montmartre painting the dance hall not the way Renoir had
        painted it (a sunlit Sunday afternoon) but the way it really looked at midnight, lit by flat green gaslight.
        None of these five would have called what they were doing &ldquo;Post-Impressionism,&rdquo; or anything
        together at all. They worked in different cities, often barely knew each other, and would mostly have been
        horrified to be hung in the same room. But each was picking up where Impressionism had run out of road.
      </p>

      <SectionHeader accent={accent} label="Aix-en-Provence" title="A mountain that refuses to dissolve" />
      <p style={proseStyle}>
        End the chapter in Provence. The rue Laffitte show is closing in Paris, and 500 miles south an angrier,
        slower painter has set up his easel in front of a mountain.
      </p>
      <p style={proseStyle}>
        The mountain is{' '}<strong>Mont Sainte-Victoire</strong>{' '}(a long limestone ridge east of the town of
        Aix), where{' '}<strong>Paul C&eacute;zanne</strong>{' '}(1839&ndash;1906) has lived since he was a boy.
        C&eacute;zanne is 47, doubt-ridden, ridiculed in Paris for twenty years, painting in near-isolation. He will
        paint that mountain about thirty times in oil and many more in watercolor by the time he is done in 1906.
        Every time, the mountain is built out of small blocky strokes of color set side by side like masonry &mdash;
        not blended, not dissolved, but stacked into planes of weight.
      </p>
      <p style={proseStyle}>
        What he is doing, in the year the Seurat hangs in Paris, is the exact opposite of Impressionism. The
        Impressionists tried to catch the instant of light eating the world. C&eacute;zanne is trying to find the{' '}<em>thing the light is eating</em>{' '}&mdash; the structure that survives weather and time. The mountain
        refuses to dissolve.
      </p>
      <p style={proseStyle}>
        So here are the two ends of the same year. In Paris, a 26-year-old has finished a vast pointillist canvas
        that quietly buries Impressionism in dots. In Provence, a 47-year-old is staring at a mountain and
        rebuilding it out of bricks of paint. Neither knows the other has done it. Twenty-four years later, an
        English critic will hang them in the same room and give them all a name.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PI_CEZ}
        imageUrl={ART_IMG.cezanneMontSainteVictoire}
        ratio="4/3"
        alt="C&eacute;zanne, Mont Sainte-Victoire"
        caption={<>The mountain east of Aix that C&eacute;zanne painted around thirty times in oil and many more in watercolor &mdash; built up out of small blocky strokes of color set side by side like masonry, not blended, not dissolved, but stacked into planes of weight. The Impressionists chased the instant of light eating the world; C&eacute;zanne was after the thing the light was eating.</>}
        credit={<>Paul C&eacute;zanne,{' '}<em>Mont Sainte-Victoire with Large Pine</em>{' '}&middot; one of about thirty oils of the same ridge, early 1880s&ndash;1906</>}
        rights={PD_CEZANNE}
      />
    </article>
  </>
)

// ── 2. The five who weren&rsquo;t a group ───────────────────
const FivePostImpNarrative: Narrative = ({ accent }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="A note before the five faces" title="What the label is, and isn&rsquo;t" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>N</DropCap>
        one of these men called themselves Post-Impressionists. Four of them were dead before the word existed. The
        shape of &ldquo;five anchors&rdquo; is Roger Fry&rsquo;s curatorial argument from 1910 (Chapter 8), not the
        shape of the field in 1886.
      </p>
      <p style={proseStyle}>
        Painting did not stop and reorganize itself when Seurat hung{' '}<em>La Grande Jatte</em>. Mary Cassatt
        (1844&ndash;1926) kept working, increasingly under the influence of the Japanese prints that Lautrec and the
        Nabis would also seize on. Berthe Morisot (1841&ndash;1895) painted through the early Post-Impressionist
        decade and died in 1895. Paul Signac, &Eacute;mile Bernard, Bonnard, Vuillard &mdash; the field around the
        five anchors is most of the next chapters&rsquo; true subject, and we&rsquo;ll meet them in Chapter 7. The
        five are the figures Fry put on the wall; they are not the only figures who were painting.
      </p>

      <SectionHeader accent={accent} label="The five, one line each" title="A table of contents, in faces" />
      <p style={proseStyle}>
        Treat this chapter as the table of contents. Each anchor gets a longer chapter of his own; these are the
        tags.
      </p>
      <p style={proseStyle}>
        <strong>Paul C&eacute;zanne</strong>{' '}(1839&ndash;1906; Aix-en-Provence). The architect. He wanted to take
        the Impressionist palette and use it to rebuild the picture out of solid planes &mdash; geometry that lasts.
        (Chapter 3.)
      </p>
      <p style={proseStyle}>
        <strong>Vincent van Gogh</strong>{' '}(1853&ndash;1890; Dutch, working in France). The colorist of feeling.
        Color was not optics; color was what yellow{' '}<em>did</em>{' '}to the man standing in the wheatfield. A
        ten-year career, about 900 canvases, one painting sold for real money. (Chapter 4.)
      </p>
      <p style={proseStyle}>
        <strong>Paul Gauguin</strong>{' '}(1848&ndash;1903; ex-stockbroker, dies in the Marquesas). The synthesist.
        Flat areas of saturated color, dark contour lines, the picture&rsquo;s{' '}<em>meaning</em>{' '}on the surface
        &mdash; and a life whose colonial frame the 21st century cannot skim past. (Chapter 5.)
      </p>
      <p style={proseStyle}>
        <strong>Georges Seurat</strong>{' '}(1859&ndash;1891; Paris). The scientist. He took Chevreul&rsquo;s and
        Rood&rsquo;s color theory and built{' '}<strong>Divisionism</strong>{' '}&mdash; what outsiders called{' '}<strong>Pointillism</strong>{' '}&mdash; small separate dots of pure pigment, optically combining in the eye.
        Dead at 31. (Chapter 6.)
      </p>
      <p style={proseStyle}>
        <strong>Henri de Toulouse-Lautrec</strong>{' '}(1864&ndash;1901; Albi-born, Montmartre by adoption). The
        chronicler. He painted the cabaret at midnight, made the modern poster a fine-art medium, and drank himself
        to death at 36. (Chapter 6.)
      </p>
      <p style={proseStyle}>
        These five lived in different rooms &mdash; Aix, Auvers, Pont-Aven and then Tahiti, Paris, Montmartre
        &mdash; and sometimes hated each other (Gauguin and Van Gogh in Arles, December 1888, will turn out badly).
        They got grouped because, in{' '}<strong>1910</strong>, an English critic named{' '}<strong>Roger Fry</strong>{' '}needed a name for a roomful of pictures he had borrowed for a London gallery. By 1910, C&eacute;zanne had
        been dead four years, Van Gogh twenty, Gauguin seven, Seurat nineteen, Lautrec nine. Not one of the five
        was alive to argue with him. He called them, in want of a better word,{' '}<em>Post-Impressionists</em>.
        Chapter 8 is the story of how that room came together.
      </p>
    </article>
  </>
)

// ── 3. C&eacute;zanne &mdash; the cylinder, the sphere, the cone ──
const CezannePostImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Aix &middot; the inheritance" title="A bank, a son, a refusal" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>S</DropCap>
        tart with the father.{' '}<strong>Louis-Auguste C&eacute;zanne</strong>{' '}was a hatter who got into banking
        in Aix and by the 1860s was one of the richest men in town. He wanted his son to be a lawyer. Paul, born 19
        January 1839, dutifully tried, then with his father&rsquo;s grudging permission decamped to Paris in 1861
        to paint.
      </p>
      <p style={proseStyle}>
        What it bought him was the rarest thing a French painter could have in the late 19th century: the freedom
        not to sell. C&eacute;zanne never had to flatter the Salon or court a dealer; his father&rsquo;s money kept
        the household running through C&eacute;zanne&rsquo;s own death in 1906. He told &Eacute;mile Zola (the two
        had known each other since school) that he was trying to make of Impressionism{' '}<em>something solid and durable, like the art of the museums</em>. The Impressionists tried to catch the moment. C&eacute;zanne wanted
        to build the thing the moment was passing over.
      </p>

      <SectionHeader accent={accent} label="The great series" title="Cards, bathers, the mountain" />
      <p style={proseStyle}>
        He worked in series. Once he found a subject he could believe in, he stayed with it for years.
      </p>
      <p style={proseStyle}>
        The{' '}<strong>Card Players</strong>{' '}(about 1890&ndash;95, five versions painted at the Jas de Bouffan,
        the family farmhouse outside Aix) &mdash; two or three local farm laborers at a small wooden table, a bottle
        between them, looking down at their cards in silence. Peasant gravity rendered with the seriousness
        Caravaggio would have given a saint. The fifth sold privately in 2011 for a figure between $250 and $320
        million &mdash; at the time the highest price ever paid for a painting.
      </p>
      <p style={proseStyle}>
        The{' '}<strong>Bathers</strong>{' '}(three large versions, 1890s&ndash;1905). The biggest, at the
        Philadelphia Museum of Art, is about 7 ft &times; 8 ft 2 in, and C&eacute;zanne worked on it for seven
        years. The figures are blocky, with mask-like faces; the trees lean inward to form a Gothic arch over the
        scene. This is not eroticism; it is architecture made of bodies. (The Bathers will haunt Picasso when he
        paints the{' '}<em>Demoiselles d&rsquo;Avignon</em>{' '}in 1907.)
      </p>
      <p style={proseStyle}>
        And{' '}<strong>Mont Sainte-Victoire</strong>{' '}&mdash; about 30 oils and many more watercolors, early
        1880s to 1906. The early versions are recognizable landscapes. The late ones, from the studio he built at{' '}<strong>Les Lauves</strong>{' '}in 1902, strip out almost everything; by 1906 the mountain is a slope of
        overlapping blue and green and orange planes with the white of the canvas showing through. It has become
        its own scaffolding.
      </p>

      <SectionHeader accent={accent} label="15 April 1904" title="One sentence" />
      <p style={proseStyle}>
        This is where C&eacute;zanne accidentally gives modernism its catechism.
      </p>
      <p style={proseStyle}>
        A young painter named{' '}<strong>&Eacute;mile Bernard</strong>{' '}(1868&ndash;1941), formerly close to
        Gauguin in Pont-Aven where the two had worked out{' '}<strong>Synthetism</strong>{' '}together in 1888, had
        come down to Aix in early 1904 to visit C&eacute;zanne. They talked about painting. Bernard went home to
        Paris; they began a correspondence. On{' '}<strong>15 April 1904</strong>{' '}C&eacute;zanne wrote him the
        letter (original at the Courtauld Gallery, London) that contained the sentence the whole 20th century would
        quote:{' '}<em>Allow me to repeat what I said when you were here: treat nature by means of the cylinder, the sphere, the cone, the whole put into perspective, so that each side of an object or a plane is directed towards a central point.</em>
      </p>
      <p style={proseStyle}>
        Be careful what this is. Not a manifesto. One sentence in an informal letter to a younger painter who had
        asked for technical advice. C&eacute;zanne meant something modest: when you look at a tree, see the
        underlying cylindrical mass of the trunk; when you look at an apple, see the sphere; when you look at the
        roof of a barn, see the cone. Build the picture out of those geometries first, then add the rest. A
        sketcher&rsquo;s piece of advice. What Picasso and Braque and Bernard himself did with the sentence &mdash;
        quote it back at the world as the founding theorem of modern art &mdash; was their decision, not
        C&eacute;zanne&rsquo;s. He died two and a half years later.
      </p>

      <SectionHeader accent={accent} label="October 1906" title="The rainstorm" />
      <p style={proseStyle}>
        He died on{' '}<strong>22 October 1906</strong>, in Aix, at 67. He had been working outdoors, was caught in
        a thunderstorm, kept painting, walked home soaked, collapsed in the street, was carried back to his bed,
        developed pneumonia, and died days later. He had been at work on another Mont Sainte-Victoire. It was
        unfinished.
      </p>
      <p style={proseStyle}>
        Now watch what happens to him in death, because the speed of it is the point. Vollard&rsquo;s 1895 one-man
        show had given him a Paris market, and the{' '}<strong>Salon d&rsquo;Automne</strong>{' '}(the modernist
        annual founded in 1903) had been giving him memorial rooms while he was still alive: 1904, 1905, 1906. Then
        in{' '}<strong>October 1907</strong>, one year after his death, the Salon d&rsquo;Automne mounted the full
        retrospective &mdash; about 56 works, late ones included &mdash; and every young painter in Paris filed
        through it. Picasso was 25, Braque 25, Matisse 37, Derain 27, Vlaminck 31. They all came out of it changed.
      </p>
      <p style={proseStyle}>
        Picasso would say, later, that{' '}<em>&ldquo;C&eacute;zanne was my one and only master.&rdquo;</em>{' '}Within
        months of the 1907 retrospective Picasso was painting{' '}<em>Les Demoiselles d&rsquo;Avignon</em>{' '}&mdash; the
        picture with which Cubism begins. (The Cubism page is the next door over.) The cumulative effect of the late
        C&eacute;zannes coming out of Aix into Paris is the single most concentrated transmission line in modern
        art. The mountain refused to dissolve, and the young men in Paris saw it.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PI_CEZ}
        imageUrl={ART_IMG.cezanneBathers}
        ratio="4/3"
        alt="C&eacute;zanne, The Large Bathers"
        caption={<>The biggest of the three late Bathers, at the Philadelphia Museum of Art, about 7 ft &times; 8 ft 2 in; C&eacute;zanne worked on it for seven years. The figures are blocky, with mask-like faces; the trees lean inward to form a Gothic arch over the scene. Not eroticism &mdash; architecture made of bodies, the painting that will haunt Picasso when he comes to the{' '}<em>Demoiselles d&rsquo;Avignon</em>{' '}in 1907.</>}
        credit={<>Paul C&eacute;zanne,{' '}<em>The Large Bathers</em>, 1900&ndash;06 &middot; Philadelphia Museum of Art</>}
        rights={PD_CEZANNE}
      />
    </article>
  </>
)

// ── 4. Van Gogh &mdash; the yellow house, the wheat, the gun ──
const VanGoghPostImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Zundert &middot; 1853" title="A late start, a brother" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he hardest fact about Van Gogh, the one the romance always blurs, is how{' '}<em>late</em>{' '}he started.{' '}<strong>Vincent van Gogh</strong>{' '}was born in{' '}<strong>Zundert</strong>{' '}(a village in the southern
        Netherlands) on{' '}<strong>30 March 1853</strong>, the eldest son of a Dutch Reformed pastor. He did not
        begin to paint seriously until{' '}<strong>1881</strong>, when he was 28. He died nine years and four months
        later, at 37 &mdash; a career shorter than a college sports star&rsquo;s.
      </p>
      <p style={proseStyle}>
        He had tried to be an art dealer at Goupil &amp; Cie (1869&ndash;1876), fired for temperament; and a lay
        preacher in the{' '}<strong>Borinage</strong>{' '}coal-mining district of southern Belgium, dismissed for
        &ldquo;excessive zeal.&rdquo; His younger brother{' '}<strong>Theo van Gogh</strong>{' '}(1857&ndash;1891), by
        the 1880s a dealer in Paris at Boussod, Valadon &amp; Cie, sent him money every month from the late 1870s
        until Vincent&rsquo;s death. Without Theo there is no painter Van Gogh.
      </p>
      <p style={proseStyle}>
        Vincent spent his first five years painting peasants in muddy browns &mdash;{' '}<em>The Potato Eaters</em>{' '}(1885, Van Gogh Museum) the most famous. The colors are Rembrandt&rsquo;s. In{' '}<strong>March 1886</strong>{' '}he moved to Paris, into Theo&rsquo;s apartment on the rue Lepic in Montmartre, and met the Impressionists.
      </p>

      <SectionHeader accent={accent} label="Paris, then Arles" title="A color education and a yellow house" />
      <p style={proseStyle}>
        Paris was a two-year color crash course. He saw the Impressionists at the 8th show (Chapter 1), met{' '}<strong>Pissarro</strong>{' '}and{' '}<strong>Toulouse-Lautrec</strong>, papered Theo&rsquo;s apartment with
        Japanese prints, and abandoned the muddy palette. He painted nearly 200 canvases in those Paris months and
        wore his brother out.
      </p>
      <p style={proseStyle}>
        By February{' '}<strong>1888</strong>{' '}he had had enough of Paris and got on a train south. He stepped off
        in{' '}<strong>Arles</strong>, looking, he wrote, for &ldquo;the Japan of the south.&rdquo; In May he rented
        half a small two-story building at{' '}<strong>2 place Lamartine</strong>: the{' '}<strong>Yellow House</strong>, painted yellow with green shutters. He painted his bedroom (first version of{' '}<em>Bedroom in Arles</em>, October 1888, Van Gogh Museum; about 2 ft 4&frac12; in &times; 3 ft 0 in) in lemon
        yellow, cobalt blue and brick red. And he painted the sunflowers &mdash;{' '}<strong>fifteen</strong>{' '}giant
        single-stalked sunflowers in a yellow vase against a yellow wall (National Gallery, London; F.454, August
        1888) &mdash; as decoration for the spare bedroom he was preparing for{' '}<strong>Paul Gauguin</strong>{' '}(Chapter 5), who arrived broke on{' '}<strong>23 October 1888</strong>.
      </p>

      <SectionHeader accent={accent} label="October&ndash;December 1888" title="Nine weeks, two painters, one ear" />
      <p style={proseStyle}>
        What followed was nine weeks of co-habitation that destroyed the friendship and produced, partly out of
        adrenal terror, some of the best work either painter ever made. They argued constantly &mdash; Gauguin
        wanted Van Gogh to paint from memory, Van Gogh hated it; they drank absinthe. By mid-December they were
        screaming at each other.
      </p>
      <p style={proseStyle}>
        The night of{' '}<strong>23 December 1888</strong>{' '}is the famous one. The exact sequence is debated, but
        the broad shape is documented: there was a quarrel; Gauguin walked out intending to spend the night at a
        hotel; Vincent followed him into the street, possibly with a razor; Gauguin scared him off; Vincent went
        home and, in the bathroom,{' '}<strong>cut off the lower lobe of his left ear</strong>{' '}(not the whole ear;
        an inch or so of flesh from the lower auricle). He wrapped it in newspaper, walked it down to a brothel he
        frequented, and gave it to one of the women working there (known in the records as{' '}<strong>Rachel</strong>), asking her to &ldquo;keep this object carefully.&rdquo; He passed out from blood
        loss and was found the next morning. Gauguin telegraphed Theo and left town.
      </p>
      <p style={proseStyle}>
        In May 1889 Vincent voluntarily admitted himself to the asylum at{' '}<strong>Saint-Paul-de-Mausole</strong>,
        in Saint-R&eacute;my-de-Provence, and stayed a year. He was permitted to paint. He produced, during that
        year, some of his most famous canvases &mdash; including{' '}<em>The Starry Night</em>, painted in{' '}<strong>June 1889</strong>{' '}from memory and the view out his barred east-facing window (MoMA, New York;
        about 2 ft 5 in &times; 3 ft 0&frac14; in). It is the most reproduced picture in Western art after the{' '}<em>Mona Lisa</em>, and Van Gogh painted it locked up. The work was made{' '}<em>in spite of</em>{' '}the
        suffering, not because of it; the madness-genius myth gets the arrow exactly backward.
      </p>

      <SectionHeader accent={accent} label="Auvers &middot; summer 1890" title="The wheatfield and the gun" />
      <p style={proseStyle}>
        In May 1890 he left Saint-R&eacute;my and travelled about twenty miles north of Paris to{' '}<strong>Auvers-sur-Oise</strong>, under the care of{' '}<strong>Dr Paul Gachet</strong>, a homeopathic
        physician who painted on the side. (Van Gogh&rsquo;s{' '}<em>Portrait of Dr Gachet</em>{' '}sold at
        Christie&rsquo;s New York in 1990 for $82.5 million &mdash; for years the auction record for an
        Impressionist or Post-Impressionist work.) He painted Auvers in a frenzy &mdash; the town church, the
        wheatfields,{' '}<em>Wheatfield with Crows</em>{' '}(Van Gogh Museum), a roiling blue-black sky with a flock
        of crows lifting off.
      </p>
      <p style={proseStyle}>
        On the afternoon of{' '}<strong>Sunday, 27 July 1890</strong>, Van Gogh walked out into a field near Auvers
        and shot himself in the chest with a small revolver. The shot did not kill him. He staggered back to the{' '}<strong>Auberge Ravoux</strong>, the inn where he was lodging. Two doctors couldn&rsquo;t get at the bullet.
        Theo arrived the next morning. Vincent died around 1:30 a.m. on{' '}<strong>29 July 1890</strong>, with Theo
        at his side. He was 37. Theo reported his last words to their mother as{' '}<em>&ldquo;La tristesse durera toujours&rdquo;</em>{' '}&mdash;{' '}<em>&ldquo;the sadness will last forever.&rdquo;</em>{' '}(One hedge: in 2011 the
        biographers Naifeh and Smith argued he was shot by a local boy, not by his own hand; the Van Gogh Museum
        still treats it as suicide.)
      </p>
      <p style={proseStyle}>
        <strong>Theo</strong>{' '}died six months later, on{' '}<strong>25 January 1891</strong>, age 33, of
        complications from syphilis. His wife{' '}<strong>Jo</strong>{' '}was left with a one-year-old baby (also
        named Vincent), hundreds of Vincent&rsquo;s letters, and most of the unsold paintings. She spent the rest
        of her life building Vincent&rsquo;s posthumous reputation; she is the reason the Van Gogh Museum exists.
        Vincent sold one painting in life at a real price &mdash;{' '}<em>The Red Vineyard</em>, bought by the
        Belgian painter Anna Boch for 400 francs at Les XX in Brussels in early 1890. He painted around 900
        canvases. Within twenty years his pictures would be the most fought-over canvases in Europe.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PI_VG}
        imageUrl={ART_IMG.starryNight}
        ratio="4/3"
        alt="Van Gogh, The Starry Night"
        caption={<>Painted from memory and the view out the barred east-facing window of the asylum at Saint-Paul-de-Mausole in June 1889. The most reproduced picture in Western art after the{' '}<em>Mona Lisa</em>, made by a man who had voluntarily checked himself in to a psychiatric ward and was permitted to keep painting. The work was made{' '}<em>in spite of</em>{' '}the suffering, not because of it; the madness-genius myth gets the arrow exactly backward.</>}
        credit={<>Vincent van Gogh,{' '}<em>The Starry Night</em>, June 1889 &middot; Museum of Modern Art, New York</>}
        rights={PD_VANGOGH}
      />
    </article>
  </>
)

// ── 5. Gauguin &mdash; Pont-Aven, Tahiti, the colonial question ──
const GauguinPostImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris &middot; 1882" title="The crash, the wife, the leap" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>P</DropCap>
        <strong>aul Gauguin</strong>{' '}was born in Paris on{' '}<strong>7 June 1848</strong>, son of a French
        journalist father and a Peruvian-French mother. When he was 1, the family sailed for Peru; his father died
        en route. The boy grew up in{' '}<strong>Lima</strong>{' '}until he was 7 &mdash; that early displacement
        matters; he never quite settled back into being French.
      </p>
      <p style={proseStyle}>
        By his 20s he was a Parisian stockbroker, good at it. In{' '}<strong>1873</strong>{' '}he married{' '}<strong>Mette-Sophie Gad</strong>, a Danish woman; they had{' '}<strong>five children</strong>{' '}between 1874
        and 1883. Then in{' '}<strong>1882</strong>{' '}the Paris stock market crashed (the{' '}<em>krach de l&rsquo;Union g&eacute;n&eacute;rale</em>) and Gauguin lost his job. He took it as a sign. He moved the family
        to Copenhagen in 1884; the Danish in-laws found him impossible. By{' '}<strong>1885</strong>{' '}he had walked
        out of the marriage and returned to Paris alone. He never lived with his wife and children again.
      </p>
      <p style={proseStyle}>
        There is no charitable way to tell this part. Gauguin was not poor in 1885 the way Van Gogh was poor. He
        was a man with a wife and five small children whom he chose to leave so that he could be a painter. The art
        does not exist without that decision. The decision is part of the art&rsquo;s price.
      </p>

      <SectionHeader accent={accent} label="Pont-Aven &middot; 1888" title="Brittany, Bernard, and a red field" />
      <p style={proseStyle}>
        In summer 1888 Gauguin came back to{' '}<strong>Pont-Aven</strong>, a small Brittany village that had become
        a painters&rsquo; colony (low pension rates, local women still in picturesque starched bonnets), this time
        with a clear program. He met a younger painter named{' '}<strong>&Eacute;mile Bernard</strong>{' '}(19,
        theoretically minded), and they began working out{' '}<strong>Synthetism</strong>{' '}(sometimes{' '}<em>cloisonnisme</em>, after the cloisonn&eacute; enamels the technique visually resembled): paintings built
        of large flat areas of saturated color, separated by hard dark contour lines, with depth and modeling cut
        out. The picture was no longer a window onto a real scene; it was an arrangement of color{' '}<em>areas</em>,
        designed for emotional or symbolic effect.
      </p>
      <p style={proseStyle}>
        The picture that demonstrates the move is{' '}<em>Vision after the Sermon (Jacob Wrestling with the Angel)</em>, autumn 1888 (Scottish National Gallery, Edinburgh; about 2 ft 4&frac12; in &times; 3 ft 0 in). In the
        lower half, Breton peasant women in starched bonnets are coming out of mass; they have just heard the
        sermon about Jacob wrestling the angel. Their eyes are closed in something between prayer and exhaustion.
        In the upper half, separated from the women by the diagonal tree (often read as an apple tree, after Eden)
        slicing the canvas, Jacob and the angel are{' '}<em>actually visible</em>{' '}in the act of wrestling, against
        a field of pure flat red &mdash; the kind of red a child reaches for first in a paint box.
      </p>
      <p style={proseStyle}>
        Where is the wrestling really happening? Not in the field. It is in the{' '}<em>minds</em>{' '}of the Breton
        women, who heard the sermon, closed their eyes, and{' '}<em>imagined</em>{' '}it. The painter has put the
        inside of their imagination on the canvas as a separate zone. The whole machinery of &ldquo;a picture as a
        window&rdquo; is dismantled. What you are looking at is{' '}<em>meaning</em>, painted directly. (Gauguin
        tried to give the canvas to the parish church; the priest refused &mdash; he could see the picture was{' '}<em>about</em>{' '}the women, not{' '}<em>about</em>{' '}Jacob.)
      </p>

      <SectionHeader accent={accent} label="Arles &middot; October&ndash;December 1888" title="Forwarded to Chapter 4" />
      <p style={proseStyle}>
        The nine weeks at the Yellow House are Chapter 4&rsquo;s territory. Briefly: Gauguin came south because he
        was broke; Theo van Gogh would stipend him for going; Vincent had been pleading. The visit went badly.
        Vincent cut off the lower lobe of his left ear on 23 December and Gauguin left two days later. What Gauguin
        took from Arles, beyond the trauma, was the confirmation that his future was not in France. He went back to
        Paris with the idea, now hardening, that he would go somewhere very far away.
      </p>

      <SectionHeader accent={accent} label="1 April 1891" title="The boat to Tahiti" />
      <p style={proseStyle}>
        On{' '}<strong>1 April 1891</strong>{' '}Gauguin sailed from Marseille for{' '}<strong>Tahiti</strong>,
        arriving in Papeete on 9 June. He had told the friends who saw him off &mdash; the Symbolist writers
        Mallarm&eacute; and Charles Morice &mdash; that he was going to find a{' '}<em>primitive</em>, pre-Christian
        paradise where he could paint untouched by European convention. He was exporting a French romance of the{' '}<em>primitif</em>{' '}about as far as it could go.
      </p>
      <p style={proseStyle}>
        What he was actually doing was sailing into a French colony. Tahiti had been a French protectorate since
        1842 and a formal colony since 1880. Papeete had cathedrals, gendarmes, French administrators, French
        missionaries, French gunboats. The surviving Tahitians lived under colonial rule, paid colonial taxes, and
        were mostly Catholic. Gauguin&rsquo;s{' '}<em>primitive</em>{' '}Tahiti was a fantasy he carried in his
        luggage; the real Tahiti was a French outpost where colonial police came round when he made trouble.
      </p>
      <p style={proseStyle}>
        He painted there anyway, and what he painted was extraordinary &mdash; the saturated, flat-color, dreamlike
        Tahitian pictures we now know him by:{' '}<em>Mana&ograve; tupapa&uacute; (Spirit of the Dead Watching)</em>,
        1892 (Buffalo AKG Art Museum), a young Tahitian girl lying face-down on a bed under a yellow blanket,
        watched by a dark spirit-figure;{' '}<em>Where Do We Come From? What Are We? Where Are We Going?</em>,
        1897&ndash;98 (Museum of Fine Arts, Boston; about 4 ft 6&frac12; in &times; 12 ft 3&frac12; in), a long
        horizontal mural Gauguin painted as his testament before attempting suicide with arsenic in late 1897 (he
        survived). It reads right-to-left: a baby on the right, an adult reaching for a fruit in the center, an old
        woman on the left. Birth, life, death.
      </p>

      <SectionHeader accent={accent} label="The part of the story that doesn&rsquo;t sand down" title="The colonial question, in plain language" />
      <p style={proseStyle}>
        The part of Gauguin&rsquo;s story that 21st-century writing cannot skim past, and that earlier 20th-century
        writing did.
      </p>
      <p style={proseStyle}>
        In Tahiti and later in the Marquesas, Gauguin lived with three successive Polynesian girls, all{' '}<strong>adolescents</strong>:{' '}<strong>Teha&rsquo;amana</strong>{' '}(in Tahiti, from 1892, traditionally said
        to have been 13 when he took her into his house; uncertain but certainly a child);{' '}<strong>Pau&rsquo;ura a Tai</strong>{' '}(in Tahiti, around 14 when their relationship began in 1896); and{' '}<strong>Vaeoho Marie-Rose</strong>{' '}(in the Marquesas, around 14 when she moved in with him in 1901). He
        had children by at least two of them. He referred to all three as his &ldquo;wives&rdquo; in his journals.
      </p>
      <p style={proseStyle}>
        It is important not to project 21st-century legal categories backward without thinking &mdash; adolescent
        marriage was legal and common in late-19th-century France and across French colonial territory &mdash; and
        it is also important not to use that context to disappear what these relationships actually were. Gauguin
        was a European man in his 40s using colonial power and money to set up sexual partnerships with Polynesian
        girls who could not, by any honest reading, have refused him on equal terms. Several of his greatest
        paintings &mdash;{' '}<em>Mana&ograve; tupapa&uacute;</em>{' '}among them &mdash; depict these girls. The
        pictures will not be undone; but a serious account of Gauguin cannot pretend the biography is just colorful.
      </p>
      <p style={proseStyle}>
        He had advanced{' '}<strong>syphilis</strong>{' '}by his last years and spent his last decade in pain. In{' '}<strong>September 1901</strong>{' '}he moved to{' '}<strong>Hiva Oa</strong>{' '}in the{' '}<strong>Marquesas</strong>{' '}and built himself a wooden house he called the{' '}<em>Maison du Jouir</em>{' '}(&ldquo;House of
        Pleasure&rdquo;), carved with sculpted nudes around the doorway. He wrote pamphlets attacking the colonial
        authorities for their treatment of the Polynesians, which is to his credit, while continuing his
        exploitation of Polynesian girls, which is not.
      </p>
      <p style={proseStyle}>
        He died on{' '}<strong>8 May 1903</strong>{' '}on Hiva Oa, age 54, of a heart attack while taking morphine for
        the syphilis pain. The French Catholic bishop, with whom he had been feuding bitterly, buried him in the
        local cemetery. His pictures were auctioned cheap on Tahiti the following autumn. Within fifteen years they
        would be unaffordable in any market on earth.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PI_GAUG}
        imageUrl={ART_IMG.gauguinVision}
        ratio="4/3"
        alt="Gauguin, Vision after the Sermon (Jacob Wrestling with the Angel)"
        caption={<>Breton peasant women in starched bonnets come out of mass, eyes closed in something between prayer and exhaustion. In the upper half, separated by a diagonal tree slicing the canvas, Jacob and the angel are{' '}<em>actually visible</em>{' '}wrestling against a field of pure flat red. The wrestling isn&rsquo;t happening in the field; it&rsquo;s happening inside the women&rsquo;s minds, and Gauguin has painted the inside of their imagination on the canvas as a separate zone. The whole machinery of &ldquo;a picture as a window&rdquo; is dismantled.</>}
        credit={<>Paul Gauguin,{' '}<em>Vision after the Sermon (Jacob Wrestling with the Angel)</em>, autumn 1888 &middot; Scottish National Gallery, Edinburgh</>}
        rights={PD_GAUGUIN}
      />
    </article>
  </>
)

// ── 6. Seurat&rsquo;s dots, Lautrec&rsquo;s posters ──────────
const SeuratLautrecPostImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris &middot; 1884" title="A jury-free Salon" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n{' '}<strong>1884</strong>, a group of younger Paris painters, exhausted by the official Salon&rsquo;s
        rejections, founded the{' '}<strong>Soci&eacute;t&eacute; des Artistes Ind&eacute;pendants</strong>: no
        jury, no prizes, no medals. Anyone who paid dues could hang. The first{' '}<strong>Salon des Ind&eacute;pendants</strong>{' '}ran from 15 May to 1 July 1884 in a temporary exhibition pavilion on the
        Champs-&Eacute;lys&eacute;es. Among the founders were{' '}<strong>Paul Signac</strong>,{' '}<strong>Odilon Redon</strong>,{' '}<strong>Albert Dubois-Pillet</strong>,{' '}<strong>Henri Edmond Cross</strong>{' '}&mdash; and a
        24-year-old painter whose first major canvas, a six-and-a-half-by-ten-foot picture of working-class
        Parisians sunbathing on the Asni&egrave;res riverbank, had just been rejected by the official Salon. They
        hung his rejected picture instead. The 24-year-old was{' '}<strong>Georges Seurat</strong>.
      </p>

      <SectionHeader accent={accent} label="Seurat" title="A short life, a long method" />
      <p style={proseStyle}>
        <strong>Georges-Pierre Seurat</strong>{' '}was born in Paris on{' '}<strong>2 December 1859</strong>. He
        trained academically &mdash; first a free local drawing school, then in{' '}<strong>1878</strong>{' '}at the{' '}<strong>&Eacute;cole des Beaux-Arts</strong>{' '}under{' '}<strong>Henri Lehmann</strong>, a pupil of Ingres.
        So Seurat, alone among the Post-Impressionist anchors, came up through the official system. He drew the way
        they had drawn it at the &Eacute;cole for fifty years &mdash; patient, meticulous, the figure constructed
        out of clearly modelled tonal values.
      </p>

      <SectionHeader accent={accent} label="Optical mixing" title="The trick that names the chapter" />
      <p style={proseStyle}>
        The pointillist trick (the term comes later &mdash; Seurat preferred{' '}<em>divisionism</em>,
        &ldquo;dividing&rdquo; each tone into its components) is built on what the French chemist{' '}<strong>Michel Eug&egrave;ne Chevreul</strong>{' '}had worked out half a century earlier as the{' '}<em>law of simultaneous contrast</em>. Place a pure red dot beside a pure green dot on the canvas. At reading distance,
        your eye doesn&rsquo;t see two dots; it averages them, and the resulting muddy brown looks brighter and
        more alive than the same brown mixed on a palette. Physically the pigment is still pigment; optically, the
        light bouncing off the canvas does the mixing in your eye. The canvas becomes, in effect, a primitive
        projector.
      </p>
      <p style={proseStyle}>
        Seurat read the rest of the theory &mdash; Chevreul&rsquo;s 1839 book, Charles Blanc&rsquo;s{' '}<em>Grammaire des arts du dessin</em>{' '}(1867), the American physicist Ogden Rood&rsquo;s{' '}<em>Modern Chromatics</em>{' '}(1879, translated into French in 1881). Out of these he built his method. The critic{' '}<strong>F&eacute;lix F&eacute;n&eacute;on</strong>{' '}named it{' '}<em>N&eacute;o-Impressionnisme</em>{' '}in 1886;
        outsiders called it{' '}<strong>Pointillism</strong>. The principle: do scientifically, by formula, what the
        Impressionists had been doing by gut instinct.{' '}<em>La Grande Jatte</em>{' '}is a 7-by-10-foot demonstration
        of the idea.
      </p>
      <p style={proseStyle}>
        The pictures came out slowly. Seurat would spend two summers and a winter on a single canvas, with dozens
        of preparatory studies before the first dot. The big ones are{' '}<em>Bathers at Asni&egrave;res</em>{' '}(1884,
        National Gallery, London; about 6 ft 7 in &times; 9 ft 10&frac12; in, the rejected canvas from the first
        Salon des Ind&eacute;pendants);{' '}<em>La Grande Jatte</em>{' '}(1884&ndash;86, Art Institute of Chicago; about
        6 ft 9&frac12; in &times; 10 ft 1 in, the picture from Chapter 1); and{' '}<em>The Circus</em>{' '}(1890&ndash;91, Mus&eacute;e d&rsquo;Orsay), unfinished at his death.
      </p>
      <p style={proseStyle}>
        He died suddenly on{' '}<strong>29 March 1891</strong>, age 31, of an infection variously identified as
        meningitis, pneumonia, infectious angina, or diphtheria &mdash; the record is unclear. His infant son by
        his common-law partner Madeleine Knobloch died of the same illness days later. The career was seven years
        long.
      </p>

      <SectionHeader accent={accent} label="Toulouse-Lautrec" title="Open at the canvas" />
      <p style={proseStyle}>
        Start with the picture.{' '}<em>At the Moulin Rouge</em>{' '}(1892&ndash;95, Art Institute of Chicago; about 4
        ft 0&frac12; in &times; 4 ft 7&frac14; in). The famous Moulin Rouge at its tables. Five regulars sit around
        a center table; in the background a small group walks toward us, with Lautrec himself painted in &mdash;
        the short top-hatted man beside his tall cousin Gabriel. In the right foreground a face looms up close,
        sliced by the canvas edge, lit a lurid pale{' '}<strong>green</strong>{' '}from below: the English dancer{' '}<strong>May Milton</strong>. The off-square cropping is straight out of a Japanese print. This is the
        chapter&rsquo;s other half: the dance hall at midnight, lit by green gaslight, painted by an aristocrat 5
        ft tall who lived in it.
      </p>
      <p style={proseStyle}>
        <strong>Henri Marie Raymond de Toulouse-Lautrec-Monfa</strong>{' '}was born in{' '}<strong>Albi</strong>{' '}on{' '}<strong>24 November 1864</strong>, into one of the oldest families in Europe (descendants of the medieval
        Counts of Toulouse). His parents were first cousins; consanguineous marriage repeated over generations is
        the accepted cause of the inherited disorder that defined his life. At 13 he broke his left femur; at 14,
        the right. The legs stopped growing. His adult height was around 5 ft 0 in on a normal adult torso. The
        modern diagnostic guess (inferred, not proven) is{' '}<strong>pycnodysostosis</strong>, a rare recessive
        bone-density disorder.
      </p>
      <p style={proseStyle}>
        He went to Paris, studied briefly under{' '}<strong>Fernand Cormon</strong>{' '}(where he met Van Gogh and
        &Eacute;mile Bernard in 1886), and by{' '}<strong>1884</strong>{' '}had moved to{' '}<strong>Montmartre</strong>{' '}for the rest of his short life. He painted the{' '}<em>working</em>{' '}Montmartre: the
        cabaret at midnight, the dancers on stage, the bored prostitutes between customers. He borrowed from
        Japanese prints the flat color, the hard contours, the off-center cropping.
      </p>
      <p style={proseStyle}>
        The{' '}<strong>poster</strong>{' '}<em>Moulin Rouge: La Goulue</em>{' '}(1891, color lithograph; MoMA, the Met,
        the V&amp;A, the BNF) made the medium. Three flat zones of color: yellow ground, La Goulue&rsquo;s white
        frilled bloomers at the center, the silhouettes of the audience as a black frieze behind her. The entire
        20th-century commercial graphic look descends from this single sheet of paper, glued to a Paris wall in
        November 1891.
      </p>
      <p style={proseStyle}>
        The{' '}<strong>brothel pictures</strong>: in the early 1890s Lautrec moved more or less into a series of
        legal brothels and painted the women off-shift.{' '}<em>In the Salon at the Rue des Moulins</em>{' '}(1894,
        Mus&eacute;e Toulouse-Lautrec, Albi) shows three women on red plush sofas, dressed in long camisoles,
        bored, waiting. There is no leer. The women are people, off the clock.
      </p>
      <p style={proseStyle}>
        He drank himself to death &mdash; absinthe mostly, with syphilis on top. He died at his mother&rsquo;s{' '}<strong>Ch&acirc;teau Malrom&eacute;</strong>, in Gironde, on{' '}<strong>9 September 1901</strong>, age 36.
        The{' '}<strong>Mus&eacute;e Toulouse-Lautrec</strong>{' '}in{' '}<strong>Albi</strong>{' '}opened in 1922 and
        holds the largest single collection of him on earth.
      </p>
      <p style={proseStyle}>
        Seurat and Lautrec are linked here not because they were friends (they were barely acquainted) but because
        they died young, in Paris, having between them shown two opposite ways out of Impressionism: science on the
        one hand, the modern Parisian night on the other.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PI_SEURAT}
        imageUrl={ART_IMG.seuratGrandeJatte}
        ratio="3/2"
        alt="Seurat, A Sunday on La Grande Jatte"
        caption={<>About 6 ft 9&frac12; in &times; 10 ft 1 in, painted 1884&ndash;86, hung at the 8th and last Impressionist Exhibition in spring 1886. The entire surface is built from millions of tiny separate dots of pure color, applied with deliberate, almost scientific precision. Step back four feet and it shimmers; step back ten and it locks. Seurat called his method{' '}<em>divisionism</em>; outsiders called it Pointillism. Two years of work; the canvas that politely, almost academically, buried Impressionism in dots.</>}
        credit={<>Georges Seurat,{' '}<em>A Sunday on La Grande Jatte</em>, 1884&ndash;86 &middot; Art Institute of Chicago</>}
        rights={PD_SEURAT}
      />
    </article>
  </>
)

// ── 7. The Nabis and the wider field ─────────────────────────
const NabisPostImpNarrative: Narrative = ({ accent }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="October 1888 &middot; Pont-Aven" title="A cigar-box panel" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he wider cast of Post-Impressionism begins in October 1888 in the Brittany village we left in Chapter 5.{' '}<strong>Paul S&eacute;rusier</strong>{' '}(1864&ndash;1927), a 24-year-old French painter and a student at the{' '}<strong>Acad&eacute;mie Julian</strong>{' '}(a private Paris art school founded in 1867 that took the students
        the &Eacute;cole des Beaux-Arts wouldn&rsquo;t), was on holiday in Pont-Aven and asked Gauguin for a lesson.
      </p>
      <p style={proseStyle}>
        Gauguin took him out to a small wood by the river called the{' '}<strong>Bois d&rsquo;Amour</strong>, set him
        in front of trees reflected in the Aven, and gave him a small wooden panel &mdash; a cigar-box lid.
        Gauguin&rsquo;s instruction (as S&eacute;rusier later told it to Maurice Denis) was something like:{' '}<em>What do you see, that tree? Is it really green? Then use green, the most beautiful green on your palette. And that shadow, rather blue? Don&rsquo;t be afraid to paint it as blue as possible.</em>{' '}Use pure
        color. Don&rsquo;t blend.
      </p>
      <p style={proseStyle}>
        The panel S&eacute;rusier brought back is tiny (about 10&frac12; &times; 8&frac12; inches, oil on wood) and
        shows flat patches of orange, green, blue and red that{' '}<em>read</em>{' '}as a landscape only if you already
        know it&rsquo;s a landscape. His fellow students at the Acad&eacute;mie Julian lost their minds over it.
        They named the panel{' '}<strong>Le Talisman</strong>{' '}and treated it like a religious icon (now
        Mus&eacute;e d&rsquo;Orsay, RF 1985-13). And they named themselves, in late 1888, the{' '}<strong>Nabis</strong>{' '}&mdash; the Hebrew word for &ldquo;prophets,&rdquo; picked by a Hebraist friend on
        the self-mocking ground that they were now the prophets of a new art. The core members were S&eacute;rusier,{' '}<strong>Pierre Bonnard</strong>,{' '}<strong>&Eacute;douard Vuillard</strong>,{' '}<strong>Maurice Denis</strong>,
        and a wider circle of about a dozen. They met weekly at Paul Ranson&rsquo;s studio (which they jokingly
        called &ldquo;the Temple&rdquo;).
      </p>

      <SectionHeader accent={accent} label="Maurice Denis" title="A teenager writes the catechism" />
      <p style={proseStyle}>
        In{' '}<strong>August 1890</strong>, in a periodical called{' '}<em>Art et Critique</em>, an essay titled{' '}<em>D&eacute;finition du n&eacute;o-traditionnisme</em>{' '}appeared, signed{' '}<em>Pierre Louis</em>{' '}(a pen
        name). It contained the line the 20th century would quote at every student who ever picked up a brush:{' '}<em>&ldquo;Remember that a picture &mdash; before being a battle horse, a nude woman, or any other anecdote &mdash; is essentially a flat surface covered with colors assembled in a certain order.&rdquo;</em>
      </p>
      <p style={proseStyle}>
        Pierre Louis was{' '}<strong>Maurice Denis</strong>{' '}(1870&ndash;1943), the Nabis&rsquo; theorist. He was{' '}<strong>19 years old</strong>, had been a Nabi for about a year, and had taken Gauguin&rsquo;s instruction in
        the Bois d&rsquo;Amour and condensed it into one sentence: the picture is{' '}<em>first</em>{' '}a surface with
        colored shapes on it;{' '}<em>then</em>, perhaps, also a story. No single sentence pushed European painting
        further toward abstraction.
      </p>

      <SectionHeader accent={accent} label="Bonnard and Vuillard" title="The intimate Nabis" />
      <p style={proseStyle}>
        The two Nabis with the longest lives took Gauguin&rsquo;s flat-color program inward, toward the bourgeois
        interior, and stayed there for fifty years.
      </p>
      <p style={proseStyle}>
        <strong>Pierre Bonnard</strong>{' '}(1867&ndash;1947) painted his lifelong companion{' '}<strong>Marthe</strong>{' '}(born Maria Boursin; they finally married in 1925 after thirty years together) over and over &mdash; in the
        bath, in a yellow dress, at the breakfast table. The late{' '}<em>Nude in the Bath</em>{' '}series (Centre
        Pompidou; 1925 onward) has Marthe submerged in a clawfoot tub under shifting violet and rose and orange
        light. Bonnard outlived almost the whole movement and was still painting in Provence into the 1940s.
      </p>
      <p style={proseStyle}>
        <strong>&Eacute;douard Vuillard</strong>{' '}(1868&ndash;1940) painted smaller, denser interiors, packed with
        pattern. His mother was a corsetmaker; he grew up among fabric samples, and as a painter he refused to let
        the wallpaper recede. In{' '}<em>Mother and Sister of the Artist</em>{' '}(c. 1893, MoMA; about 18 &times; 22
        in), his sister is half-absorbed into the floral wallpaper. The Nabis&rsquo; dominant patrons were the{' '}<strong>Natanson</strong>{' '}brothers, founders of{' '}<em>La Revue blanche</em>{' '}(1889&ndash;1903), who
        commissioned decorative panels from Vuillard for their apartments.
      </p>

      <SectionHeader accent={accent} label="Berthe Morisot" title="The Impressionist who painted into the next decade" />
      <p style={proseStyle}>
        One older painter belongs here even though she stood with the Impressionists at every show that mattered.{' '}<strong>Berthe Morisot</strong>{' '}(1841&ndash;1895) &mdash; Manet&rsquo;s sister-in-law and, more importantly,
        his peer &mdash; kept painting through the early Post-Impressionist decade in a hand that loosened year
        after year. By 1890 her brushwork was as dissolution-prone as anything Bonnard would do; the marks no
        longer describe a wrist or a curtain, they suggest one. She died of pneumonia in 1895, three weeks after
        sitting with her daughter Julie through a flu. The death certificate listed her occupation as &ldquo;no
        profession.&rdquo; She had hung in every Impressionist exhibition but the one she missed for childbirth.
      </p>

      <SectionHeader accent={accent} label="The other tributaries" title="Signac, Redon, Cassatt" />
      <p style={proseStyle}>
        The wider Nabi circle ran to a dozen painters this short chapter will not catalog. Three painters outside
        it belong in the room.
      </p>
      <p style={proseStyle}>
        <strong>Paul Signac</strong>{' '}(1863&ndash;1935). Seurat&rsquo;s partner from 1884 onward, the second great
        Divisionist. After Seurat&rsquo;s death in 1891, Signac became the propagandist &mdash; his 1899{' '}<em>D&rsquo;Eug&egrave;ne Delacroix au n&eacute;o-impressionnisme</em>{' '}codified Divisionism as a coherent
        theory. He ran the Salon des Ind&eacute;pendants for almost three decades. His own great picture is{' '}<em>Portrait of F&eacute;lix F&eacute;n&eacute;on</em>{' '}(1890, MoMA): the critic who had named
        N&eacute;o-Impressionnisme rendered as a dapper top-hatted profile against a swirling, dot-by-dot field of
        colored arabesques.
      </p>
      <p style={proseStyle}>
        <strong>Odilon Redon</strong>{' '}(1840&ndash;1916). The Symbolist tributary. Until about 1895 he painted{' '}<em>noirs</em>{' '}&mdash; disturbing dreamlike charcoals of floating eyes, spider-faced creatures, monsters.
        Then around 1895 he switched to pastel and oil, and his late style is the photographic negative of his
        early one: luminous, saturated bouquets of flowers on dark grounds.
      </p>
      <p style={proseStyle}>
        <strong>Mary Cassatt</strong>{' '}(1844&ndash;1926). Pittsburgh-born, French-resident from 1874 onward, the
        only American in the inner circle of the Impressionist exhibitions (recruited by Degas). Her late work is
        overtly indebted to Japanese prints &mdash; flat color, hard outlines, off-center cropping.{' '}<em>The Child&rsquo;s Bath</em>{' '}(1893, Art Institute of Chicago) is the signature canvas: a mother in a striped dress
        bending forward to wash her young child&rsquo;s feet in a white china basin, seen from a high vantage that
        flattens the floor into a decorative pattern.
      </p>
      <p style={proseStyle}>
        By 1900 there are not five Post-Impressionists; there are forty or fifty painters working in clusters
        across France, each pulling away from Impressionism in their own direction. All they need is somebody to
        walk into the room and put a name on the door.
      </p>
    </article>
  </>
)

// ── 8. How a category got its name ───────────────────────────
const FryPostImpNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="London &middot; autumn 1910" title="A critic, a gallery, a deadline" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>R</DropCap>
        <strong>oger Fry</strong>{' '}was{' '}<strong>43</strong>{' '}in 1910 (he would turn 44 on 14 December, after
        the show opened), an English critic and Bloomsbury-adjacent intellectual who had spent a few years
        (1906&ndash;1910) as Curator of Paintings at the Met in New York and had recently been fired in a row with
        its president, J. Pierpont Morgan. He had been spending his summers in France and had begun to think
        England had no idea what had happened in those studios.
      </p>
      <p style={proseStyle}>
        In summer 1910 he proposed an exhibition to the{' '}<strong>Grafton Galleries</strong>{' '}on Grafton Street,
        Mayfair. He rounded up{' '}<strong>Desmond MacCarthy</strong>{' '}(the show&rsquo;s secretary, who helped draft
        the catalogue introduction) and{' '}<strong>Clive Bell</strong>{' '}(the young art writer who would in 1914
        publish{' '}<em>Art</em>{' '}and the concept of &ldquo;significant form&rdquo;), went to France, twisted arms
        at dealers (Vollard among them), and came back with about 228 works.{' '}<strong>C&eacute;zanne</strong>{' '}had
        the most; then{' '}<strong>Van Gogh</strong>,{' '}<strong>Gauguin</strong>, plus{' '}<strong>Manet</strong>{' '}as the borrowed elder, plus the living wave: Matisse, Picasso, Derain, Vlaminck, Maurice Denis, Redon,
        Seurat, Signac, S&eacute;rusier, Vallotton. (Henri Rousseau,{' '}<em>Le Douanier</em>{' '}&mdash; the self-taught
        customs officer who painted dreamlike jungles he had never seen &mdash; would be hung in the 1912 sequel.)
      </p>
      <p style={proseStyle}>
        Fry, late at night against a printer&rsquo;s deadline, scribbled out the running title{' '}<strong>Manet and the Post-Impressionists</strong>. He later told{' '}<em>The Nation</em>{' '}(1911) that he had picked the name
        almost on the fly &mdash; he had rejected alternatives like &ldquo;expressionists&rdquo; &mdash; and needed
        an umbrella elastic enough to cover all of them without committing to any program. The show opened on{' '}<strong>8 November 1910</strong>{' '}and ran through{' '}<strong>15 January 1911</strong>.
      </p>

      <SectionHeader accent={accent} label="&ldquo;An extremely bad joke or a swindle&rdquo;" title="The London press loses its mind" />
      <p style={proseStyle}>
        The press response was one of the great public freak-outs in art history.{' '}<strong>Wilfrid Scawen Blunt</strong>{' '}recorded the show as &ldquo;either an extremely bad joke or a swindle&rdquo; &mdash; the paintings
        &ldquo;the work of madmen.&rdquo;{' '}<strong>Robert Ross</strong>{' '}(Oscar Wilde&rsquo;s executor) wrote in
        the{' '}<em>Morning Post</em>{' '}that the show was a widespread plot to destroy the whole fabric of European
        painting.{' '}<em>The Times</em>{' '}called it &ldquo;the rejection of all that civilization has done.&rdquo;
        The phrase &ldquo;the work of a lunatic&rdquo; appears across more than a dozen reviews.
      </p>
      <p style={proseStyle}>
        In absolute terms it was a commercial success &mdash; about{' '}<strong>25,000 visitors</strong>{' '}over two
        months, gate around{' '}<strong>&pound;4,600</strong>. Many had come to laugh. The{' '}<strong>Bloomsbury Group</strong>{' '}(Fry, Vanessa Bell, Clive Bell, Virginia Woolf, Lytton Strachey, John Maynard Keynes, Duncan
        Grant) coalesced around the defense. Virginia Woolf&rsquo;s retrospective epitaph, in a 1924 lecture
        published as{' '}<em>Mr Bennett and Mrs Brown</em>, has overgrown its own context:{' '}<strong>&ldquo;On or about December 1910 human character changed.&rdquo;</strong>{' '}Woolf meant a whole shift in modernist
        sensibility, not just the Grafton &mdash; but the Grafton was what she had at the back of her mind.
      </p>

      <SectionHeader accent={accent} label="The question the outrage did not include" title="An empire&rsquo;s blind spot" />
      <p style={proseStyle}>
        One thing the outrage did not include. London in 1910 was the capital of an empire at maximum extent
        &mdash; about a quarter of the world&rsquo;s land and a fifth of its people answered to it. Among the
        pictures the Grafton crowd was shoving in to see were Gauguin&rsquo;s Tahitians: nude teenage girls painted
        in a French colony in the South Pacific, on their way back across the Channel after a sale by his estate.
        They were trophies of one empire on display in the capital of another, and the press storm &mdash; about
        whether they were{' '}<em>art</em>{' '}&mdash; never quite reached the question of how they had got there. That
        question was asked in 1910 in Tahiti and Britain (and the Congo, and Bengal, and many rooms a Roger Fry
        never set foot in). It was not asked at the Grafton.
      </p>
      <p style={proseStyle}>
        What Fry himself would later say about these pictures, in his 1920 book{' '}<em>Vision and Design</em>, was
        that the art on the Grafton walls &ldquo;aimed not at illusion but at reality.&rdquo;
      </p>

      <SectionHeader accent={accent} label="The sequel &mdash; 1912 &mdash; and the Armory crossing &mdash; 1913" title="The category goes international" />
      <p style={proseStyle}>
        In{' '}<strong>1912</strong>{' '}Fry mounted a{' '}<strong>Second Post-Impressionist Exhibition</strong>{' '}at the
        Grafton (5 October &ndash; 31 December 1912; poster by Vanessa Bell and Duncan Grant). The French section,
        selected by Fry, included about 5 C&eacute;zannes, 19 Matisses, 13 Picassos, plus Derain, Vlaminck, Bonnard
        &mdash; and Rousseau, hung among the moderns. By Christmas 1912{' '}<em>Post-Impressionism</em>{' '}was a known
        category in the English-speaking world.
      </p>
      <p style={proseStyle}>
        The Atlantic crossing happened the next year. The{' '}<strong>International Exhibition of Modern Art</strong>{' '}&mdash; the{' '}<strong>Armory Show</strong>{' '}&mdash; opened on{' '}<strong>17 February 1913</strong>{' '}at the
        69th Regiment Armory in New York, ran through 15 March, then travelled to Chicago and Boston. Roughly 1,250
        works by about 300 artists. Within the European third were about 13 C&eacute;zannes, 18 Van Goghs, 12
        Gauguins, several Seurats, the largest Redon retrospective outside France, plus Matisse, Picasso and Marcel
        Duchamp. Duchamp&rsquo;s{' '}<em>Nude Descending a Staircase No. 2</em>{' '}(painted January 1912, exhibited at
        the Armory the year after) was the{' '}<em>succ&egrave;s de scandale</em>, mocked by the American press as
        &ldquo;an explosion in a shingle factory.&rdquo; The Armory Show is to American modernism what the 1910
        Grafton is to British. American collectors went home and started buying.
      </p>

      <SectionHeader accent={accent} label="One last fact" title="They were all dead" />
      <p style={proseStyle}>
        End on the strangeness of it. When Roger Fry opened his Grafton show on 8 November 1910, every one of the
        five painters he had put at its center was already in the ground.
      </p>
      <p style={proseStyle}>
        <strong>C&eacute;zanne</strong>{' '}had been dead{' '}<strong>four years</strong>{' '}&mdash; died Aix, 22
        October 1906.{' '}<strong>Van Gogh</strong>{' '}had been dead{' '}<strong>twenty years</strong>{' '}&mdash; died
        Auvers, 29 July 1890.{' '}<strong>Gauguin</strong>{' '}had been dead{' '}<strong>seven years</strong>{' '}&mdash;
        died Hiva Oa, 8 May 1903.{' '}<strong>Seurat</strong>{' '}had been dead{' '}<strong>nineteen years</strong>{' '}&mdash; died Paris, 29 March 1891.{' '}<strong>Toulouse-Lautrec</strong>{' '}had been dead{' '}<strong>nine years</strong>{' '}&mdash; died Ch&acirc;teau Malrom&eacute;, 9 September 1901.
      </p>
      <p style={proseStyle}>
        The name was retrospective. The room was retrospective. The category itself was a London critic&rsquo;s
        late, improvised umbrella for five French painters who had never met as a group, never written a manifesto,
        never agreed about anything, and were all in their graves before the umbrella opened. The name stuck,
        anyway, because the public didn&rsquo;t have a better one.
      </p>
      <p style={proseStyle}>
        What that umbrella covered was the bridge from Impressionism into 20th-century modernism. Without those
        five painters &mdash; and the wider cast around them, the Nabis, the pointillists, the Symbolists &mdash;
        there is no{' '}<strong>Fauvism</strong>{' '}(Matisse and Derain at the Salon d&rsquo;Automne in 1905), no{' '}<strong>Die Br&uuml;cke</strong>{' '}(Dresden, 1905, lit fuse Van Gogh and Gauguin), no{' '}<strong>Der Blaue Reiter</strong>{' '}(Munich, 1911, lit fuse Gauguin and C&eacute;zanne), no{' '}<strong>Cubism</strong>{' '}(Picasso and Braque, 1907&ndash;14, direct out of the late C&eacute;zanne), and no{' '}<strong>abstraction</strong>{' '}(Kandinsky in{' '}<em>Concerning the Spiritual in Art</em>, 1911, citing
        C&eacute;zanne by name).
      </p>
      <p style={proseStyle}>
        Five painters and a wider cast. Five answers to one question &mdash;{' '}<em>what comes after Impressionism?</em>{' '}&mdash; and one English critic, hanging a London show on a printer&rsquo;s deadline, who
        needed a name and gave them the only one we now use. The mountain refused to dissolve. The wheatfield kept
        burning. The Breton women kept seeing things their eyes couldn&rsquo;t see. The dots kept building the
        Sunday lawn. The cabaret lights kept catching on the dancers&rsquo; faces. And then, around the turn of the
        new century, the painters all died, one by one, and a generation of younger painters in Paris and Munich
        and Dresden and London picked up the pieces and ran with them.
      </p>
      <p style={proseStyle}>
        That generation&rsquo;s room is the next door over.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PI_VG}
        imageUrl={ART_IMG.vanGoghSelf}
        ratio="4/5"
        alt="Van Gogh, Self-Portrait"
        caption={<>One of the faces on Roger Fry&rsquo;s Grafton walls in November 1910. By the time the London public was filing past it, Van Gogh had been dead twenty years. The name above the room &mdash;{' '}<em>Manet and the Post-Impressionists</em>{' '}&mdash; was scribbled out by Fry late at night against a printer&rsquo;s deadline. It stuck anyway.</>}
        credit={<>Vincent van Gogh,{' '}<em>Self-Portrait</em>, 1889 &middot; Mus&eacute;e d&rsquo;Orsay, Paris</>}
        rights={PD_VANGOGH}
      />
    </article>
  </>
)

// ─────────────────────────────────────────────────────────────
// Movement, Fauvism (1905–1908). The Modern era's first 20th-century revolt:
// color cut loose from describing anything. Authored through the art content
// pipeline (fact pack → Opus draft → 5 critic gates → reconcile); narrative
// under 'fauv'. No em-dashes in shippable prose (house rule).
// ─────────────────────────────────────────────────────────────
const F_MONET = ['#3a6a8a', '#c8c050', '#1c2a30'] as [string, string, string]
const F_GREEN = ['#8a7a3a', '#7a3a52', '#1c1810'] as [string, string, string]
const F_VANGOGH = ['#7a1c1c', '#1c5a3a', '#0e0a06'] as [string, string, string]
const F_LUXE = ['#3a6a8a', '#c8a04a', '#1c2a30'] as [string, string, string]
const F_WINDOW = ['#d06a7a', '#3a8a8a', '#1c2a2a'] as [string, string, string]
const F_HAT = ['#4a7a4a', '#8a4a7a', '#15110c'] as [string, string, string]
const F_VLAMINCK = ['#bf2f25', '#1d4ed8', '#1c1c14'] as [string, string, string]
const F_DUFY = ['#1d4ed8', '#bf2f25', '#c8b84a'] as [string, string, string]
const F_DERAIN = ['#d06a2a', '#3a8a6a', '#d04a7a'] as [string, string, string]
const F_BONHEUR = ['#d08a3a', '#3a8a5a', '#1c2218'] as [string, string, string]
const F_DANCE = ['#bf3a52', '#1d4ed8', '#2a6a3a'] as [string, string, string]
const PD_MONET = 'Public domain worldwide (Claude Monet died 1926). Wikimedia Commons.'
const PD_VANGOGH_F = 'Public domain worldwide (Vincent van Gogh died 1890). Wikimedia Commons.'

// ── 1. Color's old job ──────────────────────────────────────
const ColorsOldJobNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="The rule" title="The job color was hired to do" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or about four hundred years, color in a European painting was a servant, and everybody knew its
        duties. Its first job was to tell you what things were: this fabric is blue, this apple red, this
        cheek pink. Painters even had a word for that,{' '}<strong>local color</strong>, meaning the actual
        settled color a thing is when you name it, the green of grass, the brown of a table, before any trick
        of light gets to it. Color&rsquo;s second job was to fake roundness. By easing a hue from light into
        shadow, a painter could make a flat smear of paint swell into an apple you feel you could pick up.
        Color described, and color modeled. That was the whole of the assignment, and for four centuries it
        never came up for review.
      </p>
      <p style={proseStyle}>
        Even the great rule-breakers of the generation just before our story were still loyal to it. The
        Impressionists, working in France from the 1870s, had done something that looked radical at the time:
        instead of mixing a tidy brown on the palette, they shattered a scene into thousands of small bright
        separate touches of pure color and let your eye blend them at a distance. It feels like a revolution,
        and in handling it was. But look at what those touches are{' '}<em>for</em>. They are chasing real
        light, the exact glitter of sun on a river at eleven in the morning, the specific blue a shadow turns
        on snow. The Impressionists broke color into pieces in order to describe light more truthfully than
        anyone ever had. They sped color up; they never let it off the leash.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_MONET}
        imageUrl={ART_IMG.monetRegatta}
        ratio="3/2"
        alt="Monet, Regatta at Argenteuil"
        caption={<>Color already broken into bright dabs, and still completely loyal: every touch of blue and white is reporting on real water and real sail in real sun.</>}
        credit={<>Monet,{' '}<em>Regatta at Argenteuil</em>, c.1872 · Mus&eacute;e d&rsquo;Orsay, Paris</>}
        rights={PD_MONET}
      />

      <SectionHeader accent={accent} label="The one move nobody had made" title="A face was never, ever green" />
      <p style={proseStyle}>
        So here is the rule, stated plainly, because the whole movement is one move against it: a painter could
        be as bold, as bright, as broken-up as the Impressionists, and color still answered to the world. You
        did not get to paint a thing a color it was not. A face was some shade of flesh. A tree trunk was some
        shade of brown. The sky was not, under any circumstances, pink because you felt like it.
      </p>
      <p style={proseStyle}>
        And then, over a few weeks in the summer of 1905, in a fishing port most people had never heard of, two
        painters decided otherwise. A face could carry a green stripe. The stripe was allowed to mean nothing
        but itself. Everything that follows in this story, the studios, the scandal, the wild band, the fast
        death, turns on that single hinge.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_GREEN}
        imageUrl={ART_IMG.matisseGreenStripe}
        ratio="4/5"
        alt="Matisse, The Green Stripe (Portrait of Madame Matisse)"
        caption={<>The hinge itself: a vertical green stripe straight down a living face, cool side against warm. No face is green; the picture wanted it.</>}
        credit={<>Matisse,{' '}<em>The Green Stripe</em>, 1905 · Statens Museum for Kunst, Copenhagen</>}
        rights={PD_RIGHTS}
      />
    </article>
  </>
)

// ── 2. Two studios, one fuse ────────────────────────────────
const TwoStudiosNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris" title="The teacher who let go of the wheel" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>M</DropCap>
        ost movements grow out of one circle. This one grew out of two, and they did not fully merge until a
        train wreck and a dead painter pushed them together.
      </p>
      <p style={proseStyle}>
        The first circle formed inside the{' '}<strong>&Eacute;cole des Beaux-Arts</strong>, the State art
        school in Paris, in the studio of a teacher named{' '}<strong>Gustave Moreau</strong>. Moreau painted
        lush, jewel-encrusted mythological scenes that have almost nothing to do with what his students became,
        and that is exactly the point: he was unusually willing to leave his pupils alone. Where the academy
        drilled students to sand every brushstroke smooth and copy the approved masters, Moreau told them to go
        to the Louvre, yes, but also to go look at the street, and to paint how they actually saw. Through his
        studio in the 1890s passed{' '}<strong>Henri Matisse</strong>, and around him a knot of friends,{' '}
        <strong>Albert Marquet</strong>,{' '}<strong>Charles Camoin</strong>,{' '}<strong>Henri Manguin</strong>,{' '}
        <strong>Jean Puy</strong>. These were the patient, schooled half of the future band, men who had been
        drilled in the academy and were now being quietly let off the leash, as against the self-taught street
        painters down the river at Chatou. Their wildness, when it came, would be the wildness of trained
        painters deciding to misbehave on purpose.
      </p>

      <SectionHeader accent={accent} label="Chatou" title="A derailment near the river" />
      <p style={proseStyle}>
        The second circle had no school at all. In{' '}<strong>1900</strong>, on a stalled train near{' '}
        <strong>Chatou</strong> (a riverside town just west of Paris, where the Seine loops through boating
        country), two young men got to talking after a derailment:{' '}<strong>Andr&eacute; Derain</strong> and{' '}
        <strong>Maurice de Vlaminck</strong>. They took a studio together on the riverbank and painted the
        Seine side by side. Vlaminck was the opposite of the Moreau crowd, self-taught, broke, a part-time
        racing cyclist and novelist who was loudly proud of never having set foot in a proper art school and
        was hostile to museums on principle. Derain was younger, more curious, the one who would eventually
        carry messages between the two worlds.
      </p>

      <SectionHeader accent={accent} label="Bernheim-Jeune · 1901" title="The dead Dutchman who lit the fuse" />
      <p style={proseStyle}>
        What welded the two circles was a show of a man who had been dead eleven years. In{' '}
        <strong>1901</strong> the Bernheim-Jeune gallery in Paris mounted a{' '}<strong>retrospective</strong>{' '}
        of{' '}<strong>Vincent van Gogh</strong> (a{' '}<em>retrospective</em>{' '}being a backward-looking survey
        of a whole career, usually staged after the artist is gone). For the young painters it was a detonation.
        Van Gogh had used color as raw feeling, a sky clawed in churning blue, a wall slapped down in acid
        yellow, color cranked far past what the eye reports because the emotion demanded it. Vlaminck came out
        of that room saying, in his famous remark, that he loved Van Gogh more than his own father. And it was
        at the Van Gogh show that{' '}<strong>Matisse met Derain</strong>, the introduction that would, four
        years later, take the two of them to a fishing port and make the movement.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_VANGOGH}
        imageUrl={ART_IMG.vanGoghNightCafe}
        ratio="5/4"
        alt="Van Gogh, The Night Cafe"
        caption={<>Color used as raw feeling, not description: Van Gogh said he tried to paint &ldquo;the terrible passions of humanity&rdquo; with clashing red and green. This is the fuse the young French painters lit themselves from.</>}
        credit={<>Van Gogh,{' '}<em>The Night Caf&eacute;</em>, 1888 · Yale University Art Gallery</>}
        rights={PD_VANGOGH_F}
      />
      <p style={proseStyle}>
        Van Gogh was one of three dead or fading fathers feeding the fuse. The second was{' '}
        <strong>Paul Gauguin</strong>, who had laid color down in flat unbroken areas of hot, saturated, almost
        arbitrary hue, a method he called{' '}<strong>Synthetism</strong> (boiling a scene down to a few
        simplified flat shapes and bold colors rather than copying every detail). Many of those flat-color
        pictures came out of Tahiti, where Gauguin had gone by way of France&rsquo;s colonial Pacific empire,
        painting the islands and their people through a romanticizing, outsider&rsquo;s lens. It is worth saying
        plainly, because the Fauves and their admirers rarely did: the &ldquo;freedom&rdquo; the young French
        painters inherited from him as a purely formal trick (color let off the leash) reached them carrying a
        colonial context none of them named. Gauguin&rsquo;s flat saturated patches shaped Derain in
        particular. The third influence was the most disciplined of all, and Matisse went and lived inside it
        for a summer.
      </p>

      <SectionHeader accent={accent} label="Saint-Tropez · 1904" title="The summer of dots" />
      <p style={proseStyle}>
        In the summer of{' '}<strong>1904</strong> Matisse went south to{' '}<strong>Saint-Tropez</strong> and
        spent it with{' '}<strong>Paul Signac</strong>, the surviving champion of a method called{' '}
        <strong>Divisionism</strong> (the technical name) or{' '}<strong>pointillism</strong> (the nickname that
        stuck), the system Georges Seurat had invented in the 1880s of building a picture entirely out of small
        separate dots of pure, unmixed pigment placed side by side so the eye fuses them. Matisse tried it
        wholesale. The picture that came out,{' '}<em>Luxe, calme et volupt&eacute;</em>{' '}(1904), is a beach
        scene of bathers stippled all over in tidy dots of pure color.
      </p>
      <p style={proseStyle}>
        It matters because of what Matisse did{' '}<em>next</em>. He kept the lesson and threw away the rule.
        The lesson was the pure unmixed color, pigment straight and bright, never muddied toward a
        &ldquo;realistic&rdquo; tone. The rule he ditched was the tidy little dots and the patient optical
        science behind them. What if you kept the pure tube color but laid it on in big, loose, emotional
        strokes, with no obligation to describe the real light at all? That question is Fauvism, one summer
        early, still in Matisse&rsquo;s head. The next summer he took it, and Derain, to the Mediterranean and
        answered it on canvas.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_LUXE}
        imageUrl={ART_IMG.matisseLuxe}
        ratio="6/5"
        alt="Matisse, Luxe, calme et volupté"
        caption={<>The proto-Fauve picture: pure color, but still parceled into Signac&rsquo;s tidy dots. Matisse keeps the pure pigment and is about to throw the dots away.</>}
        credit={<>Matisse,{' '}<em>Luxe, calme et volupt&eacute;</em>, 1904 · Mus&eacute;e d&rsquo;Orsay, Paris</>}
        rights={PD_RIGHTS}
      />
    </article>

    <MeanwhileSheet
      region="Dresden"
      title="A second wild band, forming blind"
      body="In June 1905, the very year the French scandal breaks, four German architecture students in Dresden (Kirchner, Heckel, Schmidt-Rottluff and Bleyl) form a group they call Die Brucke and start pushing almost exactly the same idea, raw, anti-naturalistic, emotional color and deliberately crude force, with no knowledge of what is happening in Paris. They were lighting themselves from the same fuses, Van Gogh and Gauguin. The notion that color could be cut loose to carry feeling was in the European air, and it ignited in two countries at once."
    />
  </>
)

// ── 3. Collioure ────────────────────────────────────────────
const CollioureNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Summer 1905" title="A fishing port near the border" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he movement was not made in Paris and not made at a Salon. It was made over a few weeks of one summer
        in a small Mediterranean fishing port called{' '}<strong>Collioure</strong>, tucked against the Spanish
        border in the far south of France. In{' '}<strong>early summer 1905</strong> Matisse, then in his
        mid-thirties and badly short of money, invited Derain, eleven years younger, to come paint with him
        there. They worked side by side in a southern light far harder and more saturated than anything in gray
        Paris, and in those weeks they did the thing the whole fuse had been building toward: they pushed color
        past description entirely.
      </p>

      <SectionHeader accent={accent} label="The method" title="Squeezing it straight from the tube" />
      <p style={proseStyle}>
        The method was almost insultingly simple, which is part of why it scandalized people. These were oil
        paintings (oil paint being pigment ground into linseed oil, the standard medium of the era) made on
        canvas, the stretched cloth that is both the surface a painter works on and, finished, the thing we mean
        when we call a picture &ldquo;a canvas.&rdquo; Matisse and Derain squeezed{' '}
        <strong>pure color straight from the tube</strong>{' '}onto that cloth, vermilion, cobalt, chrome yellow,
        with little or no mixing to soften it toward anything a real harbor wears. They left bare white canvas
        showing between the strokes, so the picture breathes and flickers instead of sealing shut like a window.
        And they keyed the color to sensation rather than fact: if the heat and dazzle of the port made Matisse
        want a pink wall and a turquoise boat next to an orange sail, he painted a pink wall and a turquoise boat
        and an orange sail, and let the real local colors go hang.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_WINDOW}
        imageUrl={ART_IMG.matisseOpenWindow}
        ratio="4/5"
        alt="Matisse, Open Window, Collioure"
        caption={<>Painted that summer: a window onto pink and turquoise boats, the whole picture built of patches of pure color with no shading, no modeling, no window-illusion.</>}
        credit={<>Matisse,{' '}<em>Open Window, Collioure</em>, 1905 · National Gallery of Art, Washington</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <em>Open Window, Collioure</em>{' '}is the clean demonstration. You are looking through a window frame at
        masts and water, and there is not one passage of &ldquo;realistic&rdquo; color in it: the inner wall is
        a screen of pink and pistachio verticals, the boats are dabs of pink, the sea and sky are streaks of
        pure blue, green and rose. Nothing is modeled into roundness. The whole canvas reads as a flat, bright,
        patterned surface, a wall of color that happens to add up to a harbor. (This particular subject, a
        window thrown open onto the world, becomes a Matisse signature he will paint for the next forty years;
        it starts here.)
      </p>

      <SectionHeader accent={accent} label="Before the name" title="Made before it was named" />
      <p style={proseStyle}>
        By the end of that summer the thing existed. Back in Paris that autumn, carrying the Collioure
        breakthrough with him, Matisse painted the portrait that would soon detonate at the Salon,{' '}
        <em>Woman with a Hat</em>, his wife Am&eacute;lie shown with her face stroked in greens, violets and
        oranges. Derain, for his part, had painted the Collioure harbor that summer in the same blaze. None of
        it had a name yet, no critic had insulted it, no group had formed, no word like &ldquo;Fauvism&rdquo;
        existed. That is the quiet fact this read most wants you to keep: the movement was fully invented, on
        canvas, in a fishing port, before the art world had any idea what to call it or any chance to be
        appalled. The appalling came in the autumn, in Paris, in a room that would get a nickname.
      </p>
    </article>
  </>
)

// ── 4. The cage of wild beasts ──────────────────────────────
const CageNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Autumn 1905" title="Room VII" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he pictures from Collioure, and from the other future Fauves, went on the wall that autumn at the{' '}
        <strong>Salon d&rsquo;Automne</strong>, the &ldquo;Autumn Salon,&rdquo; a newer, more adventurous yearly
        exhibition set up in 1903 by artists tired of the stuffy official Salon. (A{' '}<em>Salon</em>, in this
        whole era, is the big public art exhibition where reputations were made or destroyed; by 1905 there were
        several rival ones, the official Salon, the no-jury{' '}<strong>Salon des Ind&eacute;pendants</strong>,
        and this Autumn Salon.) The 1905 edition opened on 18 October at the Grand Palais in Paris and hung the
        new work together in one space,{' '}<strong>Room VII</strong>: Matisse, Derain, Vlaminck, Marquet,
        Manguin, Camoin, the Dutchman{' '}<strong>Kees van Dongen</strong>{' '}and others, wall after wall of raw,
        clashing, unmixed color with no shading to calm it down.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_HAT}
        imageUrl={ART_IMG.matisseHat}
        ratio="3/4"
        alt="Matisse, Woman with a Hat"
        caption={<>One wall of Room VII: a portrait of the artist&rsquo;s wife with her face stroked in green, violet and orange, hat and background built of pure color slabs. This is what the public walked in on.</>}
        credit={<>Matisse,{' '}<em>Woman with a Hat</em>, 1905 · SFMOMA, San Francisco</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="Gil Blas · 17 October 1905" title="A polite marble caught in the wild" />
      <p style={proseStyle}>
        In the middle of that room, by chance, sat something from another world entirely: a small,
        Renaissance-style marble{' '}<strong>bust</strong>{' '}by a sculptor named{' '}<strong>Albert Marque</strong>{' '}
        (paired in Vauxcelles&rsquo;s own account with a child&rsquo;s torso nearby), all smooth classical
        restraint, marooned in the blaze of color around it. The critic{' '}<strong>Louis Vauxcelles</strong>,
        writing in the newspaper{' '}<em>Gil Blas</em>{' '}on{' '}<strong>17 October 1905</strong>{' '}(a preview, the
        day before the Salon opened its doors to the public on the 18th), looked at the polite little marble
        surrounded by the riot and wrote the line that named a movement:{' '}
        <strong>&ldquo;Donatello chez les fauves.&rdquo;</strong>{' '}<em>Donatello among the wild beasts</em>,
        Donatello being the great gentle sculptor of the Italian Renaissance,{' '}<em>les fauves</em>{' '}meaning
        literally the wild beasts, the big predatory cats. The joke was that a civilized old-master sculpture
        had wandered into a den of savages. The word{' '}<em>fauves</em>{' '}stuck. The room itself picked up a
        nickname,{' '}<em>la cage aux fauves</em>, the cage of wild beasts. And so the movement got its name the
        way it got everything else, from the outside, from an enemy, as an insult, and the painters kept it
        because it was the only thing anyone agreed to call them.
      </p>
      <p style={italicStyle}>
        The coinage has its own legend layer, which is fitting for a movement built on stories. In a 1939 book
        Vauxcelles recalled that the comparison may have first come from an unknown bystander who muttered
        something like it on the spot. Treat the 1905{' '}<em>Gil Blas</em>{' '}line as the documented origin and
        the bystander as Vauxcelles&rsquo;s own much later memory.
      </p>

      <SectionHeader accent={accent} label="The rescue" title="The scandal, and the Steins" />
      <p style={proseStyle}>
        The public reaction was real and ugly. The work was called infantile, deranged, barely paintings at
        all; critics reached for the oldest insult in the box, the idea of a picture as a pot of paint simply
        flung in the public&rsquo;s face. (That exact &ldquo;pot of paint&rdquo; jeer is most securely
        Ruskin&rsquo;s, hurled at Whistler back in 1877, and critics in 1905 were reaching for an off-the-shelf
        insult more than coining a fresh one; the air was full of it.) The French president,
        &Eacute;mile Loubet, reportedly declined to formally inaugurate the Salon, a small official cold
        shoulder. Matisse, already poor and now publicly mocked, was demoralized.
      </p>
      <p style={proseStyle}>
        And then, out of that same hostile room, came the rescue. Two Americans living in Paris,{' '}
        <strong>Leo and Gertrude Stein</strong>, bought{' '}<em>Woman with a Hat</em>, the very portrait people
        were laughing at, straight off the Salon wall for{' '}<strong>500 francs</strong>. (The face they bought
        was Matisse&rsquo;s wife Am&eacute;lie, who modeled for him through these poverty years and helped keep
        the household afloat while he painted; she is the woman in the hat, not a hired model.) For the broke and
        stung Matisse it was a lifeline, and for modern art it was the start of something larger. The{' '}
        <strong>avant-garde</strong>{' '}(the term, borrowed from the military, means the scouts who ride out
        ahead of the main army, and it got pinned to the artists who got somewhere first) was acquiring its
        first serious patrons. The Steins were really two households, Leo and Gertrude, and Henri&rsquo;s
        brother Michael with his wife{' '}<strong>Sarah Stein</strong>, and it was Sarah and Michael who became
        the more committed Matisse collectors of the two, Sarah even studying with him. Soon the Russian
        collector{' '}<strong>Sergei Shchukin</strong>{' '}in Moscow began buying, and would end up Matisse&rsquo;s
        single most prolific patron. A picture the public found unbearable, several people wanted enough to fight
        over.
      </p>
    </article>
  </>
)

// ── 5. The wild band ────────────────────────────────────────
const WildBandNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1905–1907" title="Not a club, and not two men" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        t is easy to shrink Fauvism to Matisse and Derain at Collioure, but the band that filled Room VII was
        real and various, and the lazy labels (the angry one, the quiet one) do them a disservice. What held
        them together was not a creed, there wasn&rsquo;t one, but a shared permission: color chosen for effect.
        What they did with that permission ran from violent to decorative to almost shy.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_VLAMINCK}
        imageUrl={ART_IMG.vlaminckChatou}
        ratio="4/3"
        alt="Vlaminck, The Seine at Chatou"
        caption={<>A Seine-side town in pure, rhythmic, tube-fresh color, painted by the most violent colorist of the band, proudly self-taught and hostile to museums.</>}
        credit={<>Vlaminck,{' '}<em>The Seine at Chatou</em>, 1906 · The Metropolitan Museum of Art, New York</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        <strong>Maurice de Vlaminck</strong>{' '}pushed the color hardest of anyone. He squeezed cobalt,
        vermilion and chrome onto the canvas barely tamed, in thick, rhythmic, almost aggressive strokes,
        painting the riverside towns west of Paris as if the landscape were on fire from inside. At the other
        end stood{' '}<strong>Albert Marquet</strong>, who carried the bright Fauve key for only a season and
        then quietly stepped back into calm, tonal, gray-blue harbor and river views that he painted serenely
        for the rest of his life, the Fauve who tried the wildness on, found it wasn&rsquo;t him, and folded it
        away.
      </p>

      <SectionHeader accent={accent} label="Le Havre, and cabaret" title="From the port, and from the stage" />
      <p style={proseStyle}>
        The label kept pulling in more. From the port city of{' '}<strong>Le Havre</strong>{' '}came two friends,{' '}
        <strong>Raoul Dufy</strong>{' '}and{' '}<strong>Othon Friesz</strong>, both swept up after seeing
        Matisse&rsquo;s work. Dufy became the most purely joyful of the Fauves: his{' '}
        <em>Street Decked with Flags, Le Havre</em>{' '}(1906) takes an ordinary street strung with French
        tricolor flags on a holiday and dissolves the whole thing into a confetti of bright Fauve patches, color
        as sheer celebration. His friend Othon Friesz, drilled in the dull browns of the academy, said the hot
        Fauve color came to him as a release, and for a few years he painted his home coast of Normandy in the
        same bright key before the pull of C&eacute;zanne&rsquo;s structure drew him back toward weighed planes
        and quieter tones.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_DUFY}
        imageUrl={ART_IMG.dufyRuePavoisee}
        ratio="4/5"
        alt="Dufy, Street Decked with Flags, Le Havre"
        caption={<>A holiday street of tricolor flags dissolved into bright Fauve patches, the buoyant, ornamental, purely happy wing of the movement.</>}
        credit={<>Dufy,{' '}<em>La Rue pavois&eacute;e</em>, 1906 · Centre Pompidou, Paris</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        Then there was{' '}<strong>Kees van Dongen</strong>, a Dutchman in Paris who took Fauve color somewhere
        none of the others did, into the world of glamour. He aimed the wild palette at fashionable society
        portraits, dancers and cabaret performers, hot greens and acid pinks on the faces of singers under stage
        light. (He was, for a time, even a member of the German Die Br&uuml;cke group, a living bridge between
        the French and German strands of the same impulse.)
      </p>

      <SectionHeader accent={accent} label="London" title="Derain&rsquo;s burning Thames" />
      <p style={proseStyle}>
        Monet had already painted the Thames, famously, a few years before: bridges and water dissolved into
        soft gray and lilac fog, the very breath of London weather. Then Derain went to London and painted the
        same river flaming. The dealer{' '}<strong>Ambroise Vollard</strong>, sensing a market, had sent him
        over in{' '}<strong>1906</strong>, and he came back with around thirty canvases, Charing Cross Bridge,
        the Pool of London, Big Ben, in colors London simply does not wear: the Thames in orange and pink and
        green, the sky a pure rose. It is one of the cleanest demonstrations of the whole point. The same city,
        the same bridge, two painters, and the only difference is that one let the place choose the colors and
        the other let the picture choose them.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_DERAIN}
        imageUrl={ART_IMG.derainCharingCross}
        ratio="5/4"
        alt="Derain, Charing Cross Bridge, London"
        caption={<>The Thames in flaming orange, pink and green, a Fauve answer to Monet&rsquo;s misty gray London: same river, colors it does not own.</>}
        credit={<>Derain,{' '}<em>Charing Cross Bridge, London</em>, 1906 · National Gallery of Art, Washington</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="Salon des Indépendants · 1906" title="The high-water mark" />
      <p style={proseStyle}>
        The biggest single statement came from Matisse, at the spring 1906{' '}
        <strong>Salon des Ind&eacute;pendants</strong>{' '}(the no-jury exhibition where anyone could show).{' '}
        <em>Le Bonheur de vivre</em>, &ldquo;The Joy of Life,&rdquo; is enormous, nearly six feet by eight, and
        it is the movement at full volume: a dreamy clearing full of nude figures lounging, dancing, embracing,
        the bodies drawn in flowing simplified outlines and the whole scene flooded with flat, saturated,
        clashing color, grass that goes orange and pink, trees that curl like ribbons, no shadow doing any
        honest work anywhere. It was the grandest thing Fauvism produced, an entire imaginary arcadia built out
        of the new freedom. It is also worth seeing clearly what that arcadia is: a European fantasy of a golden
        age outside civilization, the kind of &ldquo;natural&rdquo; paradise the period routinely imagined
        through non-Western bodies and landscapes. The art-historical name for that habit is primitivism, and it
        is part of the colonial picture (the same one Gauguin sits inside) that Fauvism&rsquo;s &ldquo;freedom&rdquo;
        has had to be reckoned with against, not waved away.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_BONHEUR}
        imageUrl={ART_IMG.matisseBonheur}
        ratio="4/3"
        alt="Matisse, Le Bonheur de vivre"
        caption={<>The movement at full volume: an arcadia of nudes in flat, saturated, clashing color, nearly six feet by eight. Many have read it as Picasso&rsquo;s prompt toward the Demoiselles.</>}
        credit={<>Matisse,{' '}<em>Le Bonheur de vivre</em>, 1905&ndash;06 · Barnes Foundation, Philadelphia</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        It also became a turning point in a rivalry, though here the story has to be told carefully.{' '}
        <em>Le Bonheur de vivre</em>{' '}was the sensation of 1906, and the following year Picasso unveiled{' '}
        <em>Les Demoiselles d&rsquo;Avignon</em>{' '}(covered in depth in this era&rsquo;s Cubism reads). Many
        people, then and since, have read the{' '}<em>Demoiselles</em>{' '}as Picasso&rsquo;s answer to
        Matisse&rsquo;s arcadia, his attempt to outdo the reigning shock-picture of Paris. The rivalry was real
        and the chronology fits, but no one can show that Picasso set out to beat Matisse; it is a reading the
        pictures invite, not a plan anyone recorded. And the picture that supposedly provoked the{' '}
        <em>Demoiselles</em>{' '}points, by the same stroke, at the thing about to kill Fauvism, because the{' '}
        <em>Demoiselles</em>{' '}belongs to what came next.
      </p>
    </article>
  </>
)

// ── 6. The air goes out ─────────────────────────────────────
const AirGoesOutNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1907" title="Two events, one direction" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        auvism is the shortest of the great modern movements, and the reason it died so fast is almost as clean
        as the reason it was born. Two events, both in 1907, pulled the air out of the room, and both pointed
        the same way, away from color and toward{' '}<strong>structure</strong>.
      </p>
      <p style={proseStyle}>
        The first was a dead painter&rsquo;s homecoming. In 1907 the Salon d&rsquo;Automne, the same Autumn
        Salon that had birthed the scandal two years earlier, mounted a large{' '}
        <strong>retrospective of Paul C&eacute;zanne</strong>, who had died the previous autumn. C&eacute;zanne
        had spent his life doing the near-opposite of the Fauves: building a picture out of carefully weighed
        planes, treating a landscape or a still life as a kind of architecture, the canvas as a solid
        construction rather than a flush of feeling. He would let a single tabletop tilt at two angles at once,
        or stack a hillside of houses into a pile of blocks, so that a painting felt assembled rather than
        glimpsed. Seeing his whole career laid out at once swung the most ambitious young painters hard toward
        that idea. Suddenly the live question was not &ldquo;what color does the picture want?&rdquo; but
        &ldquo;how is the picture built?&rdquo;
      </p>
      <p style={proseStyle}>
        The second event was that roomful of impossible women.{' '}
        <strong>Picasso&rsquo;s{' '}<em>Les Demoiselles d&rsquo;Avignon</em></strong>{' '}(1907) cracked open the
        door to{' '}<strong>Cubism</strong>, the movement that would take C&eacute;zanne&rsquo;s structural
        obsession and run it to its limit, faceting the world into geometric planes. (The Cubism reads in this
        era cover the{' '}<em>Demoiselles</em>{' '}and Cubism&rsquo;s birth in full; here it is enough that it
        pulled the avant-garde the same direction C&eacute;zanne did, toward structure and away from hot
        emotional color.)
      </p>

      <SectionHeader accent={accent} label="1908" title="The band scatters" />
      <p style={proseStyle}>
        With the wind blowing toward structure, the loose Fauve band came apart fast, because there was nothing
        holding it together but a shared mood.{' '}<strong>Georges Braque</strong>, who had been a late and brief
        Fauve (he caught the color only around 1906&ndash;07), spent the summer of{' '}<strong>1908</strong>{' '}at
        L&rsquo;Estaque in the south shedding Fauve color and painting hard, blocky, cube-like landscapes. Those
        very pictures gave the next movement its name, and the man who named it was Matisse: looking at
        Braque&rsquo;s L&rsquo;Estaque canvases, he reportedly remarked to Vauxcelles that they were built of
        little{' '}<em>cubes</em>, and the critic who had coined &ldquo;fauves&rdquo; now coined
        &ldquo;Cubism.&rdquo; The leader of Fauvism had named the movement that would help kill it. Braque
        became Picasso&rsquo;s Cubist partner.{' '}<strong>Derain</strong>, Matisse&rsquo;s Collioure partner,
        cooled toward a darker, more structured, near-classical manner.{' '}<strong>Dufy</strong>{' '}and{' '}
        <strong>Friesz</strong>{' '}also took up C&eacute;zanne&rsquo;s architecture. By around 1908 the group,
        as a group, had effectively dissolved.
      </p>
      <p style={proseStyle}>
        That endpoint is a soft one, worth saying plainly: the intense group phase runs roughly 1905 to 1908,
        the last group-ish showings trail off around then, and stray pictures people still call &ldquo;Fauve&rdquo;
        turn up a little later. The movement did not so much end on a date as evaporate, as one by one its
        painters found a different question more interesting.
      </p>

      <SectionHeader accent={accent} label="25 December 1908" title="A creed that arrived too late" />
      <p style={proseStyle}>
        And it was in the middle of this scattering, on{' '}<strong>25 December 1908</strong>, that the nearest
        thing Fauvism ever had to a statement finally appeared, far too late to be one. Matisse published an
        essay,{' '}<strong>&ldquo;Notes of a Painter,&rdquo;</strong>{' '}in the Paris journal{' '}
        <em>La Grande Revue</em>, answering the critics who still found the new painting baffling.{' '}
        <strong>&ldquo;What I am after, above all, is expression,&rdquo;</strong>{' '}he wrote, and what he meant
        by it was the whole arrangement of a picture, not any one thing in it:{' '}
        <strong>&ldquo;Composition is the art of arranging in a decorative manner the diverse elements at the
        painter&rsquo;s command to express his feelings.&rdquo;</strong>{' '}It is a clear, generous account of
        how to paint, and it spoke for exactly one painter. By the time it ran, the band it might have rallied
        had already walked off toward C&eacute;zanne and Cubism. The closest thing Fauvism had to a flag was
        raised over an empty field.
      </p>

      <SectionHeader accent={accent} label="The afterlife" title="Matisse alone, and the permission that stays" />
      <p style={proseStyle}>
        So Fauvism ends almost the way it began, with no ceremony and no document, just a handful of painters
        quietly walking off in a new direction. But one of them did not walk off. Matisse never went Cubist. He
        carried the color project forward by himself for another forty-five years,{' '}<em>Dance</em>,{' '}
        <em>The Red Studio</em>, and at the very end the great paper cut-outs, the single longest line drawn out
        of those weeks at Collioure.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={F_DANCE}
        imageUrl={ART_IMG.matisseDance}
        ratio="3/2"
        alt="Matisse, Dance (I)"
        caption={<>Matisse alone carried the color project forward for another forty-five years: five figures, a few flat colors, the whole world reduced to blue, green and the red of moving bodies.</>}
        credit={<>Matisse,{' '}<em>Dance (I)</em>, 1909 · Museum of Modern Art, New York</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        And the idea outlived the movement by a century. In the story Western painting tells about itself,
        Fauvism is the first movement of the twentieth century and the first one made almost entirely by
        scandal, and for all its looseness it did one enormous thing once and permanently: it broke the bond
        between a color and the thing it was supposed to report. German Expressionism took that freedom and made
        it anguished; Kandinsky took it and walked off the edge of the visible world into abstraction; Matisse
        himself rode it for forty more years into the flat, glowing paper cut-outs of his old age. The band
        lasted three years. What it won never went back.
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
  fauv: {
    oldjob: ColorsOldJobNarrative,
    twostudios: TwoStudiosNarrative,
    collioure: CollioureNarrative,
    cage: CageNarrative,
    band: WildBandNarrative,
    airgoesout: AirGoesOutNarrative,
  },
  real: {
    why: WhyRealismNarrative,
    gauntlet: GauntletNarrative,
    pavilion: PavilionNarrative,
    peasants: PeasantsNarrative,
    city: CityNarrative,
    reach: ReachNarrative,
  },
  imp: {
    why: WhyImpNarrative,
    eye: EyeImpNarrative,
    name: NameImpNarrative,
    group: GroupImpNarrative,
    women: WomenImpNarrative,
    degas: DegasImpNarrative,
    last: LastImpNarrative,
  },
  postimp: {
    why: WhyPostImpNarrative,
    five: FivePostImpNarrative,
    cezanne: CezannePostImpNarrative,
    'van-gogh': VanGoghPostImpNarrative,
    gauguin: GauguinPostImpNarrative,
    'seurat-lautrec': SeuratLautrecPostImpNarrative,
    nabis: NabisPostImpNarrative,
    fry: FryPostImpNarrative,
  },
}
