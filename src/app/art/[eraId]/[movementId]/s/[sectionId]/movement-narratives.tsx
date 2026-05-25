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
}
