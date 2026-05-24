'use client'

// Cubism — the movement's own six-chapter narrative. One altitude above the
// Demoiselles work read: this is the story of the movement, 1907–1922, from the
// three things Picasso couldn't stop looking at to the war that scattered the
// founders. House voice; inline figures honour the copyright tiers in
// art-content.ts (pre-1931 → inline + Rights line; in-copyright → RestrictedFigure).
//
// Registered by movement id in MOVEMENT_NARRATIVES at the bottom; the route's
// generateStaticParams only emits section routes for registered movements.

import {
  DropCap, SectionHeader, PaintingFigure, MeanwhileSheet,
  proseStyle, proseMutedStyle, italicStyle, PD_RIGHTS, AMBER, BLUE,
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
        three things he had recently seen and could not stop thinking about. Take the three away and there
        is no Cubism. Put them together in one studio and you get the painting that breaks European art in
        half.
      </p>

      <SectionHeader accent={accent} label="The first thing" title="Cézanne, who had just died" />
      <p style={proseStyle}>
        Paul Cézanne died in Aix-en-Provence in October 1906. Within months every ambitious painter in
        Paris had filed through two memorial exhibitions, and what they saw there was an old man who had
        stopped pretending that a painting was a window. Cézanne built his apples and his mountains out of
        small facets of colour that did not blend but butted up against each other — the canvas reads as a
        thing made, not a scene glimpsed. He had even let the same tabletop tilt at two angles at once,
        because that is closer to how you actually look at a table than the fiction of a single fixed eye.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={CEZANNE}
        imageUrl={ART_IMG.cezanneBathers}
        ratio="6/5"
        alt="Cézanne, The Large Bathers"
        caption={<>Cézanne, <em>The Large Bathers</em>, 1898–1905 — Philadelphia Museum of Art. The bathers, the trees and the sky are all built from the same blunt facets.</>}
        rights="Public domain worldwide (Paul Cézanne died 1906). Wikimedia Commons."
      />
      <p style={proseStyle}>
        &ldquo;Treat nature by the cylinder, the sphere, the cone,&rdquo; Cézanne had written to a young
        painter. Picasso and his eventual partner Georges Braque both read that sentence as a dare.
      </p>

      <SectionHeader accent={accent} label="The second and third things" title="A stone head and a room of masks" />
      <p style={proseStyle}>
        The second thing was a pair of ancient Iberian stone heads — frontal, almond-eyed, severe — that
        Picasso saw (and bought) in 1907; the faces in his new canvas began to harden into their stillness.
        The third was a June afternoon in the ethnographic museum at the Trocadéro, a hall crammed with West
        and Central African masks taken in colonial loot and displayed without labels. Picasso later said he
        understood there, all at once, what painting was actually <em>for</em>: not to flatter, but to
        confront — a thing with power, like a weapon or a charm.
      </p>
      <p style={proseStyle}>
        He took all three obsessions back to a canvas nearly eight feet square that had been pinned to his
        wall since the spring. By the end of July 1907 it was finished: five women, a slash of curtain, a
        little still life, and two faces turned into masks. He called it, privately,
        <em> the philosophical brothel</em>. We call it <em>Les Demoiselles d&rsquo;Avignon</em>, and it
        has its own five-chapter story one level down. Here it matters as the starting gun.
      </p>

      <SectionHeader accent={accent} label="L'Estaque · 1908" title="Braque, and a word coined as an insult" />
      <p style={proseStyle}>
        Georges Braque (born 1882, a year after Picasso) was a young Fauve — a painter of hot, unmodelled
        colour — when a friend dragged him to Picasso&rsquo;s studio to see the Demoiselles. He hated it.
        &ldquo;It is as if you wanted us to eat tow and drink turpentine,&rdquo; he said, and left. Within
        months he was painting it anyway. That summer at L&rsquo;Estaque, in the south of France, he sent
        back landscapes in which houses and trees had been reduced to tilting brown blocks.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={BRAQUE}
        imageUrl={ART_IMG.braqueEstaque}
        ratio="4/5"
        alt="Braque, Houses at l'Estaque"
        caption={<>Braque, <em>Houses at L&rsquo;Estaque</em>, 1908. When these were rejected by the Salon d&rsquo;Automne, the painter Henri Matisse complained to a critic about Braque&rsquo;s little cubes.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseMutedStyle}>
        The critic, Louis Vauxcelles, printed the jibe — <em>cubes</em> — in his review. As with
        &ldquo;Impressionism&rdquo; and &ldquo;Fauvism&rdquo; before it, the movement took its name from a
        critic trying to be rude. By the next summer the insult was a banner.
      </p>
    </article>

    <MeanwhileSheet
      accent={AMBER}
      region="Vienna"
      when="1907 · the same years"
      title="Freud is mapping the same hidden architecture."
      body="As Picasso pulls the single viewpoint apart, Sigmund Freud is arguing that the mind, too, is not one smooth surface but a stack of competing layers. Modernism keeps discovering that the unified self was a convenient fiction."
      palette={['#3a3a4a', '#1c1c2a', '#0a0a14']}
      ctaLabel="Read 'Edwardian Europe'"
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
        rom roughly 1909 Picasso and Braque stopped being rivals and became a two-man laboratory. They
        lived near each other in Montmartre, visited daily, and worked so closely that Braque later
        compared it to two mountaineers <em>roped together</em> — if one slipped, both fell. They showed
        each other every canvas in progress. They sometimes refused to sign the fronts, so that a buyer had
        to turn the picture over to learn whose it was. For a few years it is genuinely hard, even for
        experts, to tell their hands apart.
      </p>
      <p style={proseStyle}>
        The summer of 1909 is when it clicks into a method. Picasso spent it at Horta de Ebro, his
        family&rsquo;s Catalan village, and painted the houses there as a stack of nesting, light-catching
        cubes — the hill and the buildings made of the same crystalline blocks, the sky pulled down flat
        behind them.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PIC}
        imageUrl={ART_IMG.picassoHorta}
        ratio="5/6"
        alt="Picasso, Houses on the Hill, Horta de Ebro"
        caption={<>Picasso, <em>Houses on the Hill, Horta de Ebro</em>, summer 1909. The village and the hillside are built from one continuous set of facets.</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="The method" title="What 'analytic' means" />
      <p style={proseStyle}>
        Historians call this phase <strong>Analytic Cubism</strong>, because the painters take an object
        apart — analyse it — and lay several of its sides on the flat canvas at once. The colour drains
        away to browns, greys and ochres, because colour would only get in the way of the real subject,
        which is <em>structure</em>. A guitar shows you its face, its side and its sound-hole
        simultaneously. A head presents its profile and its full face in the same instant. The single fixed
        viewpoint that had governed European painting since the Renaissance — the &ldquo;window&rdquo; — is
        quietly repealed.
      </p>
      <p style={proseStyle}>
        In 1910 Picasso painted his dealer, the 23-year-old German <strong>Daniel-Henry Kahnweiler</strong>,
        in this new language: a man dissolved into a shimmer of facets, recognisable only by a watch chain, a
        wave of hair, clasped hands. Kahnweiler had bought almost everything the pair made and asked for no
        explanations — the rare early viewer who simply trusted them.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={STONE}
        imageUrl={ART_IMG.kahnweiler}
        ratio="3/4"
        alt="Picasso, Portrait of Daniel-Henry Kahnweiler"
        caption={<>Picasso, <em>Portrait of Daniel-Henry Kahnweiler</em>, 1910 — Art Institute of Chicago. Find the watch chain and the clasped hands, and the rest of the man assembles around them.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        Braque, meanwhile, was doing the same thing to the still life — a violin, a jug, a newspaper —
        and adding a painter&rsquo;s in-jokes: a trompe-l&rsquo;œil nail with a real shadow, painted at the
        top of an otherwise un-illusionistic picture, as if to ask which kind of lie you would prefer.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={BRAQUE}
        imageUrl={ART_IMG.braqueViolinJug}
        ratio="3/4"
        alt="Braque, Violin and Jug"
        caption={<>Braque, <em>Violin and Jug</em>, 1910 — Kunstmuseum Basel. The painted nail at the top casts a real-looking shadow over a picture that has otherwise abandoned illusion.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseMutedStyle}>
        For two years the two of them kept climbing. The higher they got, the harder the pictures were to
        read — until they reached a point where even they grew nervous.
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
        y 1911 Picasso and Braque had faceted the world so finely that their pictures were nearly
        abstract. A portrait of a girl with a mandolin still has a shoulder, a breast, the curve of the
        instrument — but they float in a haze of overlapping planes, and you assemble the figure the way
        you assemble a face out of static. Historians call this the <em>hermetic</em> phase, because the
        paintings had become almost sealed. The pair started smuggling clues back in — a stencilled word, a
        scrap of sheet music, the rope-pattern of a chair — little handholds so the picture would not float
        away entirely.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PIC}
        imageUrl={ART_IMG.girlWithMandolin}
        ratio="5/6"
        alt="Picasso, Girl with a Mandolin"
        caption={<>Picasso, <em>Girl with a Mandolin (Fanny Tellier)</em>, 1910 — MoMA. Already on the edge of legibility; within a year the pictures would go further still.</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="Salle 41 · spring 1911" title="The public is introduced — without the inventors" />
      <p style={proseStyle}>
        Here is the strange part. The two painters who invented Cubism showed it almost nowhere public.
        Kahnweiler sold their work privately, abroad, to collectors. So when Paris finally met
        &ldquo;Cubism&rdquo; as a scandal — at the Salon des Indépendants in the spring of 1911, in a room
        that became notorious as <strong>Salle 41</strong> — the canvases on the wall were not by Picasso or
        Braque at all. They were by a <em>second wave</em>: Albert Gleizes, Jean Metzinger, Fernand Léger,
        Robert Delaunay, Henri Le Fauconnier. The crowds jeered, the newspapers fumed about anarchy and
        madness, and a movement neither founder had named or exhibited became front-page news.
      </p>
      <p style={proseStyle}>
        It was, in a sense, the perfect modern story: the laboratory invents the bomb in private, and the
        public first meets it through the people who carried it out of the building. Those carriers — the
        Salon Cubists — get their own chapter next, because they did something Picasso and Braque refused to
        do. They explained themselves.
      </p>
      <p style={italicStyle}>
        Picasso, asked decades later whether he had set out to break perspective, shrugged: he had only been
        trying to paint what he knew was there, not just what the eye reported.
      </p>
    </article>

    <MeanwhileSheet
      accent={BLUE}
      region="Munich"
      when="1911 · the same year"
      title="Kandinsky is about to drop the subject entirely."
      body="While Cubism keeps a shoulder and a mandolin as handholds, in Munich Wassily Kandinsky is painting pictures of nothing but colour and line — the first fully abstract canvases. Cubism took the window apart; abstraction threw it out."
      palette={['#1c3a6a', '#c8a72a', '#0e1224']}
      ctaLabel="Read 'Der Blaue Reiter'"
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
        glued a piece of cheap oilcloth printed to look like chair caning, and ran a length of rope around
        the edge as a frame. The chair-caning is not painted; it is a manufactured image of caning, a fake,
        pasted straight onto the art. <em>Still Life with Chair Caning</em> is usually called the first
        modern collage, and with it a question detonates that painting has not stopped arguing about since:
        if a real printed scrap can do the work, what exactly is the painter <em>for</em>?
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#b89055', '#3a3020', '#1a1208']}
        imageUrl={ART_IMG.grisBreakfast}
        ratio="4/5"
        alt="Juan Gris, Le Petit Déjeuner (Breakfast)"
        caption={<>The new technique in another hand: Juan Gris, <em>Le Petit Déjeuner (Breakfast)</em>, 1914 — Centre Pompidou, Paris. Real printed wallpaper and paper are pasted straight into the picture.</>}
        rights="Public domain worldwide (Juan Gris died 1927). Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="Synthetic Cubism" title="Building up instead of breaking down" />
      <p style={proseStyle}>
        That autumn Braque answered with <em>papier collé</em> — pasted paper. He bought a roll of
        wallpaper printed with fake wood grain, cut it into strips, and built a picture out of them. Where
        Analytic Cubism had <em>taken objects apart</em>, this new mode <em>assembled</em> pictures out of
        ready-made stuff: newspaper, sheet music, cigarette packets, stencilled letters, fake wood and fake
        marble. Historians call it <strong>Synthetic Cubism</strong>. The colours come back. The planes get
        bigger and flatter, almost like a poster. And the real world — actual newsprint reporting actual
        Balkan wars — gets pasted bodily into the art.
      </p>
      <p style={proseStyle}>
        It looks like a footnote and it is a hinge. Photomontage, Dada&rsquo;s cut-ups, the Surrealist
        collage, Pop art&rsquo;s soup cans, the whole idea that an artist might <em>select and arrange</em>
        existing images rather than render them from scratch — all of it walks through the door Picasso and
        Braque opened with a pot of glue in 1912.
      </p>
      <p style={proseMutedStyle}>
        They had two more years of this before the world interrupted.
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
        icasso and Braque never wrote a manifesto and rarely exhibited. The painters who made Cubism a
        public movement were the second wave — <strong>Albert Gleizes</strong>, <strong>Jean Metzinger</strong>,
        <strong> Fernand Léger</strong>, <strong>Robert Delaunay</strong>, <strong>Juan Gris</strong> — who
        showed at the big open Salons, argued in the cafés, and in 1912 turned the style into theory.
        Gleizes and Metzinger published <em>Du Cubisme</em>, the first book on the movement; a sprawling
        group show called the <em>Section d&rsquo;Or</em> (&ldquo;Golden Section&rdquo;) gathered dozens of
        them under one roof. Cubism now had a name, a literature and a crowd.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#8a6b3a', '#3a2820', '#0e0805']}
        imageUrl={ART_IMG.metzingerTea}
        ratio="4/5"
        alt="Jean Metzinger, Tea Time"
        caption={<>Jean Metzinger, <em>Le Goûter (Tea Time)</em>, 1911 — Philadelphia Museum of Art. A critic dubbed it &ldquo;the Mona Lisa of Cubism.&rdquo; The Salon Cubists kept the figure readable in a way the founders did not.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        Their champion was the poet <strong>Guillaume Apollinaire</strong>, who reviewed the shows, defended
        them in print, coined labels (he called Delaunay&rsquo;s colour-drunk variant <em>Orphism</em>), and
        generally talked Cubism into being a respectable revolution rather than a hoax. Léger pushed it
        toward tubes and pistons — a Cubism in love with the machine. Delaunay pushed it toward pure colour
        and pure abstraction. The single movement was already splitting into the futures it would seed.
      </p>

      <SectionHeader accent={accent} label="New York · 1913" title="The freight train reaches America" />
      <p style={proseStyle}>
        In February 1913 a vast show called the <strong>Armory Show</strong> opened in a New York drill
        hall and dragged European modernism in front of the American public for the first time. The
        succès de scandale was a Cubist-Futurist canvas, Marcel Duchamp&rsquo;s <em>Nude Descending a
        Staircase</em>, which a baffled critic likened to &ldquo;an explosion in a shingle factory&rdquo; and
        a cartoonist redrew as a subway in rush hour. People queued to be outraged. American collectors
        started buying. The center of gravity of modern art was still in Paris — but a wire had just been
        run across the Atlantic, and three decades later the current would reverse.
      </p>
      <p style={proseMutedStyle}>
        Then, in the summer of 1914, the lights went out in Europe.
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
        n the 2nd of August 1914 Braque and Léger and the poet Apollinaire were mobilised into the French
        army. Picasso, a Spaniard and a neutral, was not — and he went to the station at Avignon to see
        Braque off. He later said he never saw his old climbing partner again, meaning the partnership: the
        two of them never worked side by side after that day. Kahnweiler, a German, had his entire stock of
        their paintings seized by the French state as enemy property. The laboratory was emptied in a week.
      </p>
      <p style={proseStyle}>
        Braque took a head wound at Carency in 1915, was trepanned, and came back a changed and slower
        painter. Apollinaire took shrapnel to the skull in 1916, was weakened, and died in the influenza
        pandemic of November 1918 — two days before the Armistice, at 38. The man who had explained Cubism
        to the world did not live to see the peace.
      </p>

      <SectionHeader accent={accent} label="After" title="A language, loose in the world" />
      <p style={proseStyle}>
        Picasso, during and after the war, swerved — into stage designs for the Ballets Russes, into a cool
        neoclassicism of heavy stone-coloured figures, and then back to a flat, bright, decorative Cubism in
        big set-pieces like <em>Three Musicians</em>. Juan Gris carried the strict version forward as an
        almost classical system until his early death in 1927. The movement as a daily shared adventure was
        over by 1914; but by then it had stopped being a movement and become a <em>language</em>.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#c8a72a', '#7a1422', '#1c0a08']}
        imageUrl={ART_IMG.picassoThreeMusicians}
        ratio="5/6"
        alt="Picasso, Three Musicians"
        caption={<>Picasso, <em>Three Musicians</em>, 1921 — Philadelphia Museum of Art. Late, flat, poster-bright Synthetic Cubism: the broken window turned into stained glass.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        That language went everywhere. The Russian Constructivists, the Italian Futurists, the De Stijl
        painters in Holland, the Bauhaus in Germany, the entire road to pure abstraction — all of them start
        from the permission Cubism granted: that a picture is a flat made thing, free to show several truths
        at once and to paste the real world directly into itself. Two men in Montmartre had spent six years
        roped together over a single problem, and in solving it had handed the rest of the century its
        grammar.
      </p>
      <p style={proseMutedStyle}>
        To see where it began as a single object, drop one level down to <em>Les Demoiselles
        d&rsquo;Avignon</em> — the canvas that fired the gun.
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
