'use client'

// Modern — the era's own seven-chapter narrative, 1850–1970: the whole
// century-long argument over what a painting is for, from Courbet's tent outside
// the 1855 Exposition to Warhol's soup cans. Each chapter is a movement-cluster
// framed by that argument, so it reads as one story; the per-movement and
// per-work reads (Cubism, the Demoiselles) go deeper one level down.
//
// House voice (dry wit up, comparisons to land the points, made to make you
// LOOK). Revised 2026-05-23 against the art content pipeline gates (facts,
// looking, clarity, framing, comprehensiveness) — see audits/art-content-pipeline.md.
// Figures honour the copyright tiers in art-content.ts; the later the chapter,
// the more the rights regime forces the degraded RestrictedFigure — which is
// itself part of the story this era tells.

import {
  DropCap, SectionHeader, PaintingFigure, RestrictedFigure, MeanwhileSheet,
  proseStyle, PD_RIGHTS, AMBER, BLUE,
  type Narrative,
} from '@/components/mode/art-reader'
import { ART_IMG } from '@/lib/art-content'

const COURBET = ['#6b5034', '#3a2820', '#100c08'] as [string, string, string]
const MONET = ['#3a6a8a', '#c8c050', '#1c2a30'] as [string, string, string]
const SEURAT = ['#3a6a4a', '#c8b84a', '#1c2a18'] as [string, string, string]
const VAN_GOGH = ['#1c3a6a', '#c8a72a', '#0e1224'] as [string, string, string]
const MATISSE = ['#bf2f25', '#d6cf3f', '#1c1c1c'] as [string, string, string]
const PIC = ['#c0a06c', '#3d3a2e', '#8a6b3a'] as [string, string, string]
const STEEL = ['#1c1c1c', '#a0a0a0', '#d6cf3f'] as [string, string, string]

// ── 1. The Salon and its enemies ────────────────────────────
const SalonNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1850s" title="The one room that mattered" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or two hundred years there had been exactly one way to be a painter in France: get into the Salon. It
        was the official exhibition of the Académie des Beaux-Arts — the French state&rsquo;s art establishment —
        and it was the only theatre in town. A jury of professors decided what hung. They wanted polished
        surfaces, noble subjects (gods, battles, scripture) and no visible brushwork. The whole of{' '}<em> Western</em>{' '}modern art is, in one sense, a hundred-year argument with that jury.
      </p>
      <p style={proseStyle}>
        The first to pick the fight was{' '}<strong>Gustave Courbet</strong>, who painted ordinary people —
        stonebreakers, a village funeral — at the vast, heroic scale the Salon reserved for kings and saints,
        in thick, earthy, trowelled-on paint that refused to prettify anyone. In 1855, when the world&rsquo;s
        fair turned down his biggest canvases, Courbet did the unheard-of thing: he put up his own building
        across the street, charged admission, and called it the{' '}<em>Pavilion of Realism</em>. A painter could
        now go around the jury entirely — which is roughly the nineteenth-century equivalent of being rejected
        by every gallery and opening your own.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={COURBET}
        imageUrl={ART_IMG.courbetStudio}
        ratio="2/1"
        alt="Courbet, The Painter's Studio"
        caption={<>The huge canvas the Exposition refused, hung instead in his own one-man tent.</>}
        credit={<>Courbet,{' '}<em>The Painter&rsquo;s Studio</em>, 1855 · Musée d&rsquo;Orsay, Paris</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="1863" title="The pictures that started the war" />
      <p style={proseStyle}>
        Two things broke in 1863. First, the jury rejected so many painters that the Emperor ordered an overflow
        show — the{' '}<em>Salon des Refusés</em>, the Salon of the Rejected — so the public could come and laugh at
        the art the jury had thrown out. Second, the star of that freak show was{' '}<strong>Édouard Manet</strong>,
        whose{' '}<em>Déjeuner sur l&rsquo;herbe</em>{' '}sat a plainly naked, plainly modern woman at a picnic between
        two clothed men and had her gaze straight out at you, entirely unbothered. It was not the nudity — the
        Salon was wall-to-wall nudes. It was that she was obviously a real Parisian, here and now, not a goddess
        with an alibi; and that Manet painted her in flat, blunt patches instead of the smooth, blended shading
        (the &ldquo;modelling&rdquo;) that made academic flesh look rounded and real. The audience felt mocked.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a6a3a', '#2a3018', '#0a0c06']}
        imageUrl={ART_IMG.manetDejeuner}
        ratio="5/4"
        alt="Manet, Le Déjeuner sur l'herbe"
        caption={<>The scandal of the Salon des Refusés: a modern naked woman picnicking with two clothed men, looking calmly out at us.</>}
        credit={<>Manet,{' '}<em>Le Déjeuner sur l&rsquo;herbe</em>, 1863 · Musée d&rsquo;Orsay, Paris</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />
      <p style={proseStyle}>
        He did it again two years later, and worse.{' '}<em>Olympia</em>{' '}showed a naked Parisian courtesan — a
        high-priced kept woman — reclining on her bed and meeting your eye with the flat, businesslike stare of
        someone deciding whether you can afford her. At the 1865 Salon, contemporaries report, it had to be
        re-hung high on the wall, out of reach of the umbrellas and walking sticks of visitors who genuinely
        wanted to attack it.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a4a3a', '#2a221c', '#0a0606']}
        imageUrl={ART_IMG.manetOlympia}
        ratio="3/2"
        alt="Manet, Olympia"
        caption={<>The same flat, blunt handling, the same level, unembarrassed gaze.</>}
        credit={<>Manet,{' '}<em>Olympia</em>, 1863 (shown 1865) · Musée d&rsquo;Orsay, Paris</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />
      <p style={proseStyle}>
        The richest irony of all: Manet never wanted to be a rebel. He craved the Salon&rsquo;s approval his
        whole life and was wounded every time it withheld it. The man who did more than anyone to destroy the
        jury&rsquo;s authority spent his career desperate for its medal. But he had handed the next generation
        two ideas that would not go back in the box — paint the modern world as it is, and let the paint look
        like paint — and a group of younger admirers took both to heart and went outside.
      </p>
    </article>

    <MeanwhileSheet
      accent={AMBER}
      region="across Europe"
      title="The machine age supplies the disruption."
      body="Railways, paint sold ready-mixed in tubes, and above all the camera all arrive together. If a photograph can record a face perfectly in a second, the painter is suddenly out of the copying business — and free, or forced, to do the thing a camera cannot."
    />
  </>
)

// ── 2. Painting the light ───────────────────────────────────
const LightNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1874" title="The show that named itself by accident" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n April 1874 a group of friends who were sick of being rejected — Claude Monet, Pierre-Auguste Renoir,
        Camille Pissarro, Edgar Degas, Berthe Morisot — rented the studio of the photographer Nadar and put on
        their own show. A critic seized on the title of one Monet canvas,{' '}<em>Impression, Sunrise</em>, and
        sneered that the whole lot were mere{' '}<em>impressions</em>{' '}— sketches, not finished paintings. As usual,
        the painters eventually wore the insult as a badge.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MONET}
        imageUrl={ART_IMG.impressionSunrise}
        ratio="3/2"
        alt="Monet, Impression, Sunrise"
        caption={<>An orange sun over a hazy harbour, the water a few quick smears, the cranes and smokestacks barely there. The painting a hostile critic used to coin &ldquo;Impressionism.&rdquo;</>}
        credit={<>Monet,{' '}<em>Impression, Sunrise</em>, 1872 · Musée Marmottan Monet, Paris</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The idea" title="Paint the light, not the thing" />
      <p style={proseStyle}>
        The Impressionists&rsquo; insight was almost a scientific one: you never actually see an object&rsquo;s
        &ldquo;true&rdquo; colour, only light bouncing off it at a particular moment. So they stopped painting
        the cathedral and started painting the{' '}<em>light on</em>{' '}the cathedral — Monet would later paint the
        same Rouen facade more than thirty times, the same stone reading pink at dawn and blue-grey in fog, the
        building almost an excuse. New tube paints let them work fast and outdoors, in front of the subject; they
        left the brushwork loose and laid pure dabs of colour side by side so your own eye would mix them at a
        distance. A shadow was no longer brown. It was violet and blue.
      </p>
      <p style={proseStyle}>
        Their subjects were just as new — not myth but modern leisure: boating parties, railway stations, dance
        halls, the wide boulevards of a freshly rebuilt Paris.{' '}<strong>Berthe Morisot</strong>, the one woman in
        the founding group, was no bystander: she organised nearly every one of the eight exhibitions and painted
        modern life from the private, domestic vantage — nurseries, drawing rooms, women at the mirror — that her
        male colleagues simply could not enter, which makes her work some of the most distinctive the movement
        produced.{' '}<strong>Edgar Degas</strong>, the awkward cousin of the group, stayed indoors and caught
        dancers and laundresses in off-balance, snapshot poses he learned partly from the camera and partly from
        Japanese woodblock prints — which were arriving in Paris as the wrapping paper around imported china, and
        teaching half the city to crop boldly and flatten space.
      </p>
      <p style={proseStyle}>
        They won the argument so completely that &ldquo;a nice Impressionist painting&rdquo; is now practically a
        synonym for pleasant, inoffensive art — which would have astonished the people who first stood in front of
        these canvases and felt insulted. But by the mid-1880s the younger painters in the circle had begun to
        worry that, in chasing the fleeting light, they had let the picture itself go soft.
      </p>
    </article>

    <MeanwhileSheet
      accent={BLUE}
      region="Japan"
      title="A newly opened Japan rewires the European eye."
      body="Cheap woodblock prints by Hokusai and Hiroshige — flat colour, daring crops, off-centre composition — flood into Paris and become an obsession. 'Japonisme' teaches Degas, Monet and Van Gogh to throw out the deep Renaissance box and think in flat shapes."
    />
  </>
)

// ── 3. Putting the structure back ───────────────────────────
const StructureNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1886–1905" title="Four ways out of the haze" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painters we lump together as{' '}<strong>Post-Impressionists</strong>{' '}never formed a group; the label was
        coined later, in London, to mean roughly &ldquo;the interesting ones who came after.&rdquo; What they
        shared was a complaint — Impressionism had dissolved the world into shimmering light and lost its bones —
        and they took four different escape routes out of the same building, each convinced the others were
        fleeing the wrong way.
      </p>
      <p style={proseStyle}>
        <strong>Georges Seurat</strong>{' '}turned it into a science: he painted in thousands of tiny, deliberate
        dots of pure colour — <em>pointillism</em>{' '}— arranged by optical theory, and built a vast Sunday park
        scene as still and ordered as an Egyptian frieze.{' '}<strong>Paul Cézanne</strong>{' '}went the opposite way,
        alone in Provence, rebuilding apples and mountains out of blunt facets of colour until a painting felt as
        constructed as a stone wall. He is the hinge of this whole story: the man Picasso and Matisse would each
        call their father.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={SEURAT}
        imageUrl={ART_IMG.seuratGrandeJatte}
        ratio="3/2"
        alt="Seurat, A Sunday on La Grande Jatte"
        caption={<>Look closely and the whole sunlit park is built from millions of separate dots of pure colour your eye blends for you.</>}
        credit={<>Seurat,{' '}<em>A Sunday on La Grande Jatte</em>, 1884 · Art Institute of Chicago</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="Feeling, not optics" title="Van Gogh and Gauguin" />
      <p style={proseStyle}>
        The other two routes went looking for emotion.{' '}<strong>Vincent van Gogh</strong>, a Dutch ex-preacher who
        painted seriously for barely a decade and, by the established record, sold a single painting in his
        lifetime, loaded his colour and clawed his brushstrokes until a wheat field or a night sky seemed to
        carry his own nervous charge — colour wired straight to feeling, with no polite filter in between. His
        on-and-off friend{' '}<strong>Paul Gauguin</strong>{' '}went searching for an imagined &ldquo;primitive&rdquo;
        innocence and never stopped moving to find it: he quit a Paris stockbroking desk, failed at it in
        Brittany, sailed to Panama and Martinique, came back, and finally fetched up in Tahiti and the Marquesas,
        painting in flat, walled-off zones of unreal colour. The &ldquo;innocence&rdquo; was always his own
        projection — and, as we now reckon with, was bound up with a colonial fantasy that used the islands and
        their young women as scenery.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={VAN_GOGH}
        imageUrl={ART_IMG.starryNight}
        ratio="5/4"
        alt="Van Gogh, The Starry Night"
        caption={<>Painted from the window of an asylum at Saint-Rémy: the sky churns in thick spiralling strokes, the cypress claws upward like a dark flame. The feeling is in the paint, not the facts.</>}
        credit={<>Van Gogh,{' '}<em>The Starry Night</em>, 1889 · MoMA, New York</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />
      <p style={proseStyle}>
        Between them, these four had cracked the picture open in every direction at once — toward science, toward
        structure, toward raw feeling, toward flat unreal colour. A generation of much younger painters in Paris
        inherited all four exits at the same moment. And, being young, they took all four.
      </p>
    </article>
  </>
)

// ── 4. Breaking the picture ─────────────────────────────────
const BreakNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1905" title="Colour off the leash" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        t the Salon d&rsquo;Automne of 1905 a room of canvases by{' '}<strong>Henri Matisse</strong>{' '}and his friends
        hit visitors like a shout: a portrait with a green stripe running down the sitter&rsquo;s face, skies and
        shadows painted whatever colour the picture seemed to need rather than the colour the world actually was.
        A critic called them{' '}<em>les fauves</em>{' '}— the wild beasts. Fauvism barely lasted three years, but like a
        lot of movements in this era it burned bright and fast because it had only one point to make, and it
        made it: colour does not have to describe anything. It can just be the painting&rsquo;s engine.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MATISSE}
        imageUrl={ART_IMG.matisseDance}
        ratio="3/2"
        alt="Matisse, Dance"
        caption={<>Five figures, three colours — a green hill, a blue sky, red bodies — no shading, no depth, and total conviction.</>}
        credit={<>Matisse,{' '}<em>Dance (I)</em>, 1909 · MoMA, New York</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="1907–1914" title="Then perspective itself is repealed" />
      <p style={proseStyle}>
        If Matisse freed the colour,{' '}<strong>Pablo Picasso</strong>{' '}and{' '}<strong>Georges Braque</strong>{' '}went
        after the deeper rule — the single fixed viewpoint that had made a painting behave like a window since
        the 1400s: one eye, one spot, one frozen instant. Starting from Cézanne&rsquo;s facets and from West and
        Central African sculpture — Fang, Kota and other masks Picasso met at Paris&rsquo;s ethnographic museum
        in 1907 — the two of them spent years showing several sides of an object on the flat canvas at once. They
        named nothing and declared nothing; they just did it, roped together in neighbouring studios, until the
        window was gone.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PIC}
        imageUrl={ART_IMG.demoiselles}
        ratio="1/1"
        alt="Picasso, Les Demoiselles d'Avignon"
        caption={<>Five women, the two on the right wearing mask-faces; the starting gun of Cubism. It has its own movement and its own five-chapter story below this era.</>}
        credit={<>Picasso,{' '}<em>Les Demoiselles d&rsquo;Avignon</em>, 1907 · MoMA, New York</>}
        rights={PD_RIGHTS}
      />
      <p style={proseStyle}>
        Cubism is the pivot of the whole era, which is why it has its own read one level down — six chapters on
        Picasso, Braque, collage and the war that broke them apart. What matters here is the door it left open.
        If a painting owes nothing to colour-as-description (Matisse) and nothing to single-point perspective
        (Cubism), then it owes nothing to the visible world at all. From this moment, abstraction is only a
        matter of nerve.
      </p>
    </article>
  </>
)

// ── 5. Manifestos and machines ──────────────────────────────
const ManifestoNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1909–1914" title="Art in love with the motorcar" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        nce Cubism proved the rules could be torn up, a wave of movements arrived, each with a slogan and a
        printed{' '}<em>manifesto</em>. In Italy the{' '}<strong>Futurists</strong>, led by the poet Marinetti, declared
        that a roaring racing car was more beautiful than an ancient Greek statue and that the museums should be
        flooded. They painted speed, crowds and machines as Cubist shards set violently in motion — and they
        meant the worship of force, youth and speed as politics too, a romance with the machine that would
        curdle, for some of them, into fascism.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={STEEL}
        imageUrl={ART_IMG.boccioniCity}
        ratio="3/2"
        alt="Boccioni, The City Rises"
        caption={<>A huge blue workhorse lunges forward and the labourers and buildings smear into its motion: the modern city painted as raw, blurred force.</>}
        credit={<>Umberto Boccioni,{' '}<em>The City Rises</em>, 1910 · MoMA, New York</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="1916" title="Then the war answers with a urinal" />
      <p style={proseStyle}>
        The First World War turned the machine-romance into a slaughterhouse, and the artists who survived
        answered with disgust. In neutral Zürich, refugees founded{' '}<strong>Dada</strong>{' '}— deliberate nonsense,
        the name supposedly chosen by stabbing a knife at random into a dictionary — and staged performances built
        to insult an audience, and a civilisation, that had marched into the trenches quoting poetry. Its sharpest
        weapon was the{' '}<em>readymade</em>: in 1917{' '}<strong>Marcel Duchamp</strong>{' '}submitted a factory urinal,
        signed with a joke name and titled{' '}<em>Fountain</em>, to an art show. If the artist says it is art, his
        gesture asked, is it art? A century of conceptual art — art where the{' '}<em>idea</em>{' '}is the work and the
        craft is beside the point — has not finished answering. Dada had its women, too: in Berlin{' '}<strong> Hannah Höch</strong>{' '}was scissoring apart magazines and newspapers and reassembling the pieces
        into savage photomontages that dissected the gender politics of her day — arguably the movement&rsquo;s
        most cutting visual work.
      </p>

      <SectionHeader accent={accent} label="The other answer" title="Order, not noise" />
      <p style={proseStyle}>
        Not every response to the chaos was a provocation; some were the opposite — utopian order. In Holland,{' '}<strong> Piet Mondrian</strong>{' '}and the{' '}<strong>De Stijl</strong>{' '}(&ldquo;The Style&rdquo;) group pushed
        abstraction to its purest end: nothing but black grids, white fields and rectangles of primary red,
        yellow and blue, a kind of cosmic plumbing diagram meant to picture universal harmony. In Germany,
        the{' '}<strong>Bauhaus</strong>{' '}— a 1919 art-and-design school that became the most influential of the whole
        century — took that clean abstraction off the canvas and into everyday life: the chairs, lamps,
        typefaces and glass-and-steel buildings that still look &ldquo;modern&rdquo; a hundred years on were
        largely dreamed up there. Cubism had broken the window; here, some of its heirs were quietly designing
        the whole new house.
      </p>
    </article>

    <MeanwhileSheet
      accent={AMBER}
      region="the Western Front"
      title="The war that broke the machine-romance."
      body="Futurism cheered the cleansing power of war; the war then killed a generation, including several of the movement's own painters. Modern art's love affair with the machine never quite recovered its innocence."
    />
  </>
)

// ── 6. The unconscious gets a paintbrush ────────────────────
const UnconsciousNarrative: Narrative = ({ accent }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1924" title="A manifesto for the dream" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1924 the poet{' '}<strong>André Breton</strong>{' '}published the{' '}<em>Surrealist Manifesto</em>{' '}and turned the
        inward turn into a programme. Where Dada had only mocked,{' '}<strong>Surrealism</strong>{' '}had a faith: that
        Sigmund Freud was right, that the unconscious mind was the realer self, and that art&rsquo;s job was to
        slip past the rational guard and let the dream out. (Avant-garde, by the way — a phrase you will keep
        meeting — just means the leading edge, the scouts who run out ahead of the army.) The painters split into
        two camps. One — <strong>Max Ernst</strong>, the Catalan{' '}<strong>Joan Miró</strong>, the Frenchman{' '}<strong> André Masson</strong>{' '}— chased{' '}<em>automatism</em>: doodling, scraping paint over rough surfaces,
        and otherwise letting chance and the twitching hand outrun the conscious mind.
      </p>
      <p style={proseStyle}>
        The other camp painted dreams with hard, hallucinatory, almost photographic precision, so the impossible
        looked like a snapshot. Its showman was{' '}<strong>Salvador Dalí</strong>, whose limp watches — draped over
        a branch, sliding off a table-edge, one being eaten by ants, all melting under a hard blue sky above a
        bare Catalan shore — became the single most famous image the movement ever produced. (The Belgian{' '}<strong> René Magritte</strong>{' '}worked the same quiet menace from the other end: a pipe labelled
        &ldquo;this is not a pipe,&rdquo; a sky-blue day where it is somehow also night.) And here Dalí presents a
        problem this app cannot solve — because his watches cross a line drawn not by any critic but by the
        calendar.
      </p>
      <RestrictedFigure
        title={<>Dalí, <i>The Persistence of Memory</i></>}
        year="1931 · Museum of Modern Art, New York"
        note="First published in 1931 — still under US copyright, so it can't be shown inline. Picture four soft watches melting like warm cheese over a dead landscape, and a single fly keeping the time."
        linkLabel="View at MoMA"
        href="https://www.moma.org/collection/works/79018"
      />
      <p style={proseStyle}>
        Sit with that irony for a second. Dalí spent his life cultivating the most irrational public image in
        art — a movement devoted to dreams and the unconscious — and the thing now standing between you and his
        most famous painting is the single most rational, bureaucratic instrument civilisation owns: United
        States copyright law. Works first published before 1931 are public domain in the US; 1931 and after are
        not. That one-year line runs straight through the middle of Surrealism, which is exactly why this
        era&rsquo;s pictures thin out as the story nears the present. It is not a gap in our archive. It is the
        law, drawn across the page.
      </p>
      <p style={proseStyle}>
        Surrealism spread worldwide in the 1930s and briefly became the dominant avant-garde — though it had a
        bad habit of treating women as muses and dream-objects rather than artists, a habit the likes of{' '}<strong> Leonora Carrington</strong>{' '}and{' '}<strong>Meret Oppenheim</strong>{' '}spent careers pushing back
        against. Then a second world war scattered the Surrealists, many of them to New York, with their theories
        of chance and the unconscious packed in the luggage.
      </p>
    </article>
  </>
)

// ── 7. The center moves to New York ─────────────────────────
const NewYorkNarrative: Narrative = ({ accent }) => (
  <>
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1940–1950" title="The wire reverses" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or ninety years modern art had meant Paris. Then Hitler emptied Europe of its avant-garde — driven out as
        &ldquo;degenerate,&rdquo; or Jewish, or simply unsafe — and a great many of them washed up in New York,
        where a generation of young American painters had been waiting and watching. For a century Americans had
        sailed to Paris to learn how to paint; now, abruptly, the traffic ran the other way. When the war ended,
        for the first time the centre of gravity of Western art sat on the far side of the Atlantic.
      </p>
      <p style={proseStyle}>
        What the Americans built was{' '}<strong>Abstract Expressionism</strong>{' '}— huge, ambitious, completely
        abstract.{' '}<strong>Jackson Pollock</strong>{' '}took the Surrealists&rsquo; chance and automatism at its word:
        he laid the canvas on the floor and flung and dripped skeins of ordinary house paint across it, so the
        finished picture is a frozen record of the dance that made it.{' '}<strong>Mark Rothko</strong>{' '}went the
        opposite way — two or three soft-edged rectangles of luminous colour stacked on a tall canvas, the edges
        bleeding and breathing so the colour seems to hover and glow, meant to be stood close to like an
        altarpiece until it swallows your whole field of view.{' '}<strong>Willem de Kooning</strong>{' '}kept a
        slashing, half-buried human figure in the mix. It was the first art movement the world looked to America
        to lead.
      </p>
      <RestrictedFigure
        title={<>Pollock, <i>One: Number 31, 1950</i></>}
        year="1950 · Museum of Modern Art, New York"
        note="Post-war and firmly under copyright — the poured canvases can't be shown inline. Picture a wall-sized field of flung and dripped black, white and silver, with no top, no bottom and no center, like weather."
        linkLabel="View at MoMA"
        href="https://www.moma.org/collection/works/78386"
      />
      <p style={proseStyle}>
        It helped that the timing was political. In the Cold War, an art of total individual freedom made a
        useful advertisement for the free world against Soviet socialist realism, and critics like Clement
        Greenberg — plus, it later emerged, some quiet government money behind the touring exhibitions — helped
        push American abstraction onto the world stage. New York did not just inherit modern art; it was sold,
        hard.
      </p>

      <SectionHeader accent={accent} label="1956–1970" title="And then a soup can answers back" />
      <p style={proseStyle}>
        Abstract Expressionism grew so grand and so solemn that the next move was almost inevitable: puncture it.{' '}<strong> Pop Art</strong>{' '}walked the supermarket and the comic strip straight into the museum —
        <strong> Andy Warhol</strong>&rsquo;s silkscreened soup cans and repeated Marilyns,{' '}<strong>Roy
        Lichtenstein</strong>&rsquo;s comic-book panels blown up huge, printer&rsquo;s dots and all. Where the
        Abstract Expressionists had agonised over the unique, soulful, handmade mark, Warhol courted the
        mechanical and the mass-produced and said, flatly, that he wanted to be a machine. There is a hard little
        joke buried in the reversal: the Abstract Expressionists mostly drank and suffered and died not rich,
        chasing authenticity; Warhol faked the factory and got famous and wealthy doing it. It was Duchamp&rsquo;s
        1917 urinal question coming back — in colour, at scale, and very much{' '}<em>for sale</em>.
      </p>
      <p style={proseStyle}>
        By the late 1960s a younger crowd was stripping even Pop&rsquo;s jokes away — the Minimalists, reducing
        art to a plain metal box or a row of bricks, daring you to ask whether that counted. Which is right where
        &ldquo;modern&rdquo; quietly hands off to &ldquo;contemporary,&rdquo; the next era along. The whole
        century-long argument that began with Courbet&rsquo;s tent had come full circle, because it was never
        really about cubes or colour or drips. It was always the same question the Salon jury thought it had
        settled for good:{' '}<em>who gets to decide what counts as art, and what is it for?</em>{' '}By 1970 the answer
        was wide open — which is the most modern thing about it.
      </p>
    </article>
  </>
)

export const ERA_NARRATIVES: Record<string, Record<string, Narrative>> = {
  mod: {
    salon: SalonNarrative,
    light: LightNarrative,
    structure: StructureNarrative,
    break: BreakNarrative,
    manifesto: ManifestoNarrative,
    unconscious: UnconsciousNarrative,
    newyork: NewYorkNarrative,
  },
}
