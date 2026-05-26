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
        credit={<>Claude Monet,{' '}<em>La Grenouillère</em>, 1869 · The Metropolitan Museum of Art, New York (Renoir painted the same scene the same day; his version is in the Nationalmuseum, Stockholm)</>}
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
        Look at her best-known canvas,{' '}<em>The Cradle</em>{' '}(1872): a young mother seated beside a gauzy
        bassinet, watching her sleeping infant through the veil of netting, her hand at her cheek. It is painted
        with the lightest, most translucent touch in the whole movement &mdash; the white netting is a few breaths
        of thinned paint you can almost see through &mdash; and it is doing something the men literally could not.
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
        caption={<>A young mother watches her sleeping infant through the gauze of a bassinet, her hand at her cheek &mdash; the netting rendered in a few breaths of thinned, translucent paint. The female world observed from inside it, by a founding member of the movement who made the one room left open to a respectable woman &mdash; the nursery &mdash; into the subject of a masterpiece.</>}
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

export const MOVEMENT_NARRATIVES: Record<string, Record<string, Narrative>> = {
  cubism: {
    before: BeforeNarrative,
    analytic: AnalyticNarrative,
    shards: ShardsNarrative,
    paper: PaperNarrative,
    public: PublicNarrative,
    after: AfterNarrative,
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
}
