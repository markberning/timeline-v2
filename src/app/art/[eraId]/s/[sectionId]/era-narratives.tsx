'use client'

// Modern — the era's own seven-chapter narrative, 1850–1970. The broadest
// altitude of the Art drilldown: the whole century-long argument over what a
// painting is for, from Courbet's tent outside the 1855 Exposition to Warhol's
// soup cans. Each chapter is a movement-cluster framed by that argument, so it
// reads as one story rather than a list — the per-movement and per-work reads
// (Cubism, the Demoiselles) go deeper one level down.
//
// House voice; figures honour the copyright tiers in art-content.ts. The
// nineteenth-century chapters can show their pictures in full (public domain
// worldwide); the later the chapter, the more the rights regime forces the
// degraded RestrictedFigure — which is itself part of the story this era tells.

import {
  DropCap, SectionHeader, LineageStrip, PaintingFigure, RestrictedFigure, MeanwhileSheet,
  proseStyle, proseMutedStyle, PD_RIGHTS, AMBER, BLUE,
  type Narrative,
} from '@/components/mode/art-reader'
import { ART_IMG } from '@/lib/art-content'

const COURBET = ['#6b5034', '#3a2820', '#100c08'] as [string, string, string]
const MONET = ['#3a6a8a', '#c8c050', '#1c2a30'] as [string, string, string]
const CEZANNE = ['#5a7042', '#8a7848', '#1c1a12'] as [string, string, string]
const VAN_GOGH = ['#1c3a6a', '#c8a72a', '#0e1224'] as [string, string, string]
const MATISSE = ['#bf2f25', '#d6cf3f', '#1c1c1c'] as [string, string, string]
const PIC = ['#c0a06c', '#3d3a2e', '#8a6b3a'] as [string, string, string]
const STEEL = ['#1c1c1c', '#a0a0a0', '#d6cf3f'] as [string, string, string]

// ── 1. The Salon and its enemies ────────────────────────────
const SalonNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'Neoclassicism & Romanticism' }, { label: 'Photography', mode: 'civ' }]}
      descendants={[{ label: 'Impressionism' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1850s" title="The one room that mattered" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or two hundred years there had been one way to be a painter in France: get into the Salon. The
        official exhibition of the Académie des Beaux-Arts, held in Paris, was the only place a living artist
        could be seen, sold and made. A jury of professors decided what hung. They wanted polished surfaces,
        noble subjects — gods, battles, scripture — and absolutely no visible brushwork. The whole of modern
        art is, in one sense, a hundred-year argument with that jury.
      </p>
      <p style={proseStyle}>
        The first to pick the fight was <strong>Gustave Courbet</strong>, who painted ordinary people —
        stonebreakers, a village funeral — at the enormous scale the Salon reserved for kings and saints. In
        1855, when the world&rsquo;s fair rejected his biggest canvases, Courbet did something unheard of: he
        built his own tent across the street, charged admission, and called it the
        <em> Pavilion of Realism</em>. An artist could now go around the jury entirely.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={COURBET}
        imageUrl={ART_IMG.courbetStudio}
        ratio="2/1"
        alt="Courbet, The Painter's Studio"
        caption={<>Courbet, <em>The Painter&rsquo;s Studio</em>, 1855 — Musée d&rsquo;Orsay. The canvas the Exposition refused, hung instead in his own one-man tent.</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="1863" title="The picture that started the war" />
      <p style={proseStyle}>
        Two things broke in 1863. First, so many painters were rejected that the Emperor ordered an overflow
        show, the <em>Salon des Refusés</em> — the Salon of the Rejected — which let the public see, and
        laugh at, the art the jury had thrown out. Second, the star of that scandal was
        <strong> Édouard Manet</strong>, whose <em>Déjeuner sur l&rsquo;herbe</em> put a naked woman at a
        picnic between two clothed men and had her stare straight out at the viewer, unbothered. It was not
        the nudity — the Salon was full of nudes. It was that she was plainly a real Parisian woman, here and
        now, not a goddess; and that Manet painted her in flat, blunt patches instead of the expected creamy
        modelling. The audience felt mocked.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#5a4a3a', '#2a221c', '#0a0606']}
        imageUrl={ART_IMG.manetOlympia}
        ratio="3/2"
        alt="Manet, Olympia"
        caption={<>Manet, <em>Olympia</em>, 1863 — Musée d&rsquo;Orsay. A modern courtesan, returning the viewer&rsquo;s gaze without shame. The Salon hung it high, out of reach of walking sticks.</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />
      <p style={proseMutedStyle}>
        Manet never wanted to be a rebel — he craved Salon success his whole life. But he had handed the
        next generation two ideas that would not go back in the box: paint the modern world as it is, and let
        the paint look like paint. A group of younger admirers took both to heart, and went outside.
      </p>
    </article>

    <MeanwhileSheet
      accent={AMBER}
      region="across Europe"
      when="1850s–60s"
      title="The machine age supplies the disruption."
      body="Railways, cheap paint in tubes, and above all the camera arrive together. If a photograph can record a face perfectly in a second, the painter is suddenly free — or obliged — to do something a camera cannot."
      palette={['#6b6b6b', '#3a3a3a', '#1c1c1c']}
      ctaLabel="Read 'The Industrial Revolution'"
    />
  </>
)

// ── 2. Painting the light ───────────────────────────────────
const LightNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'The Salon and its enemies' }, { label: 'Manet' }]}
      descendants={[{ label: 'Post-Impressionism' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1874" title="The exhibition that named itself by accident" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n April 1874 a group of friends who were tired of being rejected — Claude Monet, Pierre-Auguste
        Renoir, Camille Pissarro, Edgar Degas, Berthe Morisot — rented a photographer&rsquo;s studio and put
        on their own show. A critic seized on the title of one Monet canvas, <em>Impression, Sunrise</em>, and
        sneered that the whole lot were mere <em>impressions</em> — unfinished, sketchy, not real paintings.
        The name stuck, and the painters eventually wore it with pride.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MONET}
        imageUrl={ART_IMG.impressionSunrise}
        ratio="3/2"
        alt="Monet, Impression, Sunrise"
        caption={<>Monet, <em>Impression, Sunrise</em>, 1872 — Musée Marmottan Monet. The painting a hostile critic used to coin &ldquo;Impressionism.&rdquo;</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="The idea" title="Paint the light, not the thing" />
      <p style={proseStyle}>
        The Impressionists&rsquo; insight was almost scientific: you never see an object&rsquo;s
        &ldquo;true&rdquo; colour, only light bouncing off it at a particular moment. So they stopped
        painting the cathedral and started painting the <em>light on</em> the cathedral — the same building at
        dawn, at noon, in fog, as a different picture each time. New tube paints let them work outdoors,
        fast, in front of the subject. They left the brushstrokes loose and visible and put pure dabs of
        colour side by side so the eye would mix them. A shadow was no longer brown; it was violet and blue.
      </p>
      <p style={proseStyle}>
        Their subjects were just as new: not myth but modern leisure — boating parties, railway stations,
        dance halls, the boulevards of a freshly rebuilt Paris. Degas, the odd man out, stayed indoors and
        caught dancers and laundresses in off-balance, snapshot poses he learned partly from the camera and
        partly from Japanese prints, which were flooding into Paris and teaching everyone to flatten space
        and crop boldly.
      </p>
      <p style={proseMutedStyle}>
        Over eight independent exhibitions they won the argument so completely that &ldquo;a nice
        Impressionist painting&rdquo; is now almost a synonym for pleasant art. But by the mid-1880s the
        younger painters among them had begun to worry that, in chasing the fleeting light, they had let the
        picture itself go soft.
      </p>
    </article>

    <MeanwhileSheet
      accent={BLUE}
      region="Japan"
      when="1850s onward"
      title="A newly opened Japan reshapes the European eye."
      body="Cheap woodblock prints by Hokusai and Hiroshige — flat colour, daring crops, off-centre composition — arrive as wrapping paper and become an obsession. 'Japonisme' teaches Degas, Monet and Van Gogh to abandon Renaissance depth."
      palette={['#1c3a6a', '#c8a72a', '#0e1224']}
      ctaLabel="Read 'Meiji Japan'"
    />
  </>
)

// ── 3. Putting the structure back ───────────────────────────
const StructureNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'Impressionism' }]}
      descendants={[{ label: 'Fauvism' }, { label: 'Cubism' }, { label: 'Abstraction' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1886–1905" title="Four ways out of the haze" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>T</DropCap>
        he painters lumped together as <strong>Post-Impressionists</strong> never formed a group; the label
        was invented later, in London, to mean &ldquo;the interesting ones who came after.&rdquo; What they
        shared was a complaint: Impressionism had dissolved the world into shimmering light and lost its
        bones. Each of them set out, in a different direction, to put the structure back.
      </p>
      <p style={proseStyle}>
        <strong>Georges Seurat</strong> made it a science. He painted in tiny, deliberate dots of pure
        colour — <em>pointillism</em> — arranged by optical theory, and built a vast Sunday park scene as
        still and ordered as a temple frieze. <strong>Paul Cézanne</strong> went the other way, alone in
        Provence, rebuilding apples and mountains out of blunt facets of colour until a painting felt as
        solid and constructed as architecture. He is the hinge: the man Picasso and Matisse would both call
        their father.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={CEZANNE}
        imageUrl={ART_IMG.cezanneBathers}
        ratio="6/5"
        alt="Cézanne, The Large Bathers"
        caption={<>Cézanne, <em>The Large Bathers</em>, 1898–1905 — Philadelphia Museum of Art. Figures, trees and sky built from the same structural facets. Cubism is fifteen years away and already implied.</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />

      <SectionHeader accent={accent} label="Feeling, not optics" title="Van Gogh and Gauguin" />
      <p style={proseStyle}>
        The other two went looking for emotion. <strong>Vincent van Gogh</strong>, a Dutch ex-preacher who
        painted seriously for only a decade and sold almost nothing in his lifetime, loaded his colour and
        twisted his brushstrokes until a wheat field or a starry sky seemed to carry his own nervous charge —
        colour as a direct line to feeling. His friend <strong>Paul Gauguin</strong> abandoned a stockbroking
        career and, eventually, Europe itself, sailing to Tahiti in search of an imagined &ldquo;primitive&rdquo;
        innocence and painting in flat, walled-off zones of unreal colour.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={VAN_GOGH}
        imageUrl={ART_IMG.starryNight}
        ratio="5/4"
        alt="Van Gogh, The Starry Night"
        caption={<>Van Gogh, <em>The Starry Night</em>, 1889 — MoMA. Painted from the window of an asylum in Saint-Rémy. Colour and stroke carry the feeling, not the fact.</>}
        rights="Public domain worldwide. Wikimedia Commons."
      />
      <p style={proseMutedStyle}>
        Between them these four had broken the picture open in every direction at once — toward structure,
        toward science, toward raw feeling, toward flat unreal colour. A generation of much younger painters
        in Paris inherited all four exits at the same moment, and took them all.
      </p>
    </article>
  </>
)

// ── 4. Breaking the picture ─────────────────────────────────
const BreakNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'Post-Impressionism' }, { label: 'Cézanne' }]}
      descendants={[{ label: 'Abstraction' }, { label: 'Dada' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1905" title="Colour off the leash" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>A</DropCap>
        t the Salon d&rsquo;Automne of 1905, a room of canvases by <strong>Henri Matisse</strong> and his
        friends blazed with colour used for its own sake — a face with a green stripe down it, a sky that was
        whatever colour the picture needed. A critic called them <em>les fauves</em>, the wild beasts. Fauvism
        barely lasted three years, but it settled a point Van Gogh had only hinted at: colour need not
        describe anything. It could simply be the painting&rsquo;s engine.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={MATISSE}
        imageUrl={ART_IMG.matisseDance}
        ratio="3/2"
        alt="Matisse, Dance"
        caption={<>Matisse, <em>Dance (I)</em>, 1909 — MoMA. Three colours, five figures, no modelling, no depth — and complete conviction.</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="1907–1914" title="Then perspective itself is repealed" />
      <p style={proseStyle}>
        If Matisse freed colour, <strong>Pablo Picasso</strong> and <strong>Georges Braque</strong> went
        after the deeper rule — the single fixed viewpoint that had made a painting behave like a window since
        the 1400s. Starting from Cézanne&rsquo;s facets and the African masks Picasso saw in 1907, the two of
        them spent years showing several sides of an object on the flat canvas at once. They called nothing;
        they just did it, roped together in adjacent studios, until the window was gone.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={PIC}
        imageUrl={ART_IMG.demoiselles}
        ratio="1/1"
        alt="Picasso, Les Demoiselles d'Avignon"
        caption={<>Picasso, <em>Les Demoiselles d&rsquo;Avignon</em>, 1907 — MoMA. The gun that started Cubism. It has its own movement and its own five-chapter story below this era.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseMutedStyle}>
        Cubism is the pivot of the whole era, which is why it has its own read one level down — six chapters
        on Picasso, Braque, collage and the war that broke them up. From here, the dam is open: if a painting
        owes nothing to colour-as-description or to perspective, then it owes nothing to the visible world at
        all. Abstraction is now only a matter of nerve.
      </p>
    </article>
  </>
)

// ── 5. Manifestos and machines ──────────────────────────────
const ManifestoNarrative: Narrative = ({ accent, onZoom }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'Cubism' }, { label: 'The First World War', mode: 'war' }]}
      descendants={[{ label: 'Surrealism' }, { label: 'Conceptual art' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1909–1914" title="Art in love with the motorcar" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>O</DropCap>
        nce Cubism showed that the rules could be torn up, a wave of movements arrived each with a slogan and
        a printed <em>manifesto</em>. In Italy the <strong>Futurists</strong>, led by the poet Marinetti,
        declared that a racing car was more beautiful than an ancient statue and demanded the museums be
        flooded. They painted speed, machines and crowds as Cubist shards set violently in motion, and they
        meant the worship of force and youth politically as well as on canvas — a romance with the machine
        that would curdle, for some of them, into fascism.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={STEEL}
        imageUrl={ART_IMG.boccioniCity}
        ratio="3/2"
        alt="Boccioni, The City Rises"
        caption={<>Umberto Boccioni, <em>The City Rises</em>, 1910 — MoMA. Futurism&rsquo;s blurred horses and labourers: the modern city as raw kinetic energy.</>}
        rights={PD_RIGHTS}
      />

      <SectionHeader accent={accent} label="1916" title="Then the war answers with a urinal" />
      <p style={proseStyle}>
        The First World War turned the machine-romance into a slaughterhouse, and the artists who survived it
        answered with disgust. In neutral Zürich, refugees founded <strong>Dada</strong> — deliberate
        nonsense, a name picked at random, performances designed to insult an audience and a civilisation that
        had marched into the trenches reciting poetry. Its sharpest weapon was the <em>readymade</em>: in 1917
        <strong> Marcel Duchamp</strong> submitted a factory urinal, signed with a joke name, to an art show
        and titled it <em>Fountain</em>. If the artist says it is art, his gesture asked, is it art? A century
        of conceptual art has not finished answering.
      </p>
      <PaintingFigure
        onZoom={onZoom}
        palette={['#3a3a3a', '#8a8a8a', '#141414']}
        imageUrl={ART_IMG.duchampFountain}
        ratio="3/4"
        alt="Duchamp, Fountain"
        caption={<>Marcel Duchamp, <em>Fountain</em>, 1917, in Alfred Stieglitz&rsquo;s photograph. A mass-produced object, chosen and re-titled. The original was lost almost at once.</>}
        rights={PD_RIGHTS}
      />
      <p style={proseMutedStyle}>
        Dada was pure demolition and could not last. But its energy — chance, collage, provocation, the
        ordinary object hauled into the gallery — did not dissipate. A circle of ex-Dadaists in Paris was
        about to point it inward, at the mind.
      </p>
    </article>

    <MeanwhileSheet
      accent={AMBER}
      region="the Western Front"
      when="1914–1918"
      title="The war that broke the machine-romance."
      body="Futurism cheered the cleansing power of war; the war then killed a generation, including several of the movement's own painters. Modern art's love affair with the machine never fully recovered its innocence."
      palette={['#3a3a4a', '#1c1c2a', '#0a0a14']}
      ctaLabel="Read 'The First World War'"
    />
  </>
)

// ── 6. The unconscious gets a paintbrush ────────────────────
const UnconsciousNarrative: Narrative = ({ accent }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'Dada' }, { label: 'Freud', mode: 'civ' }]}
      descendants={[{ label: 'Abstract Expressionism' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="Paris · 1924" title="A manifesto for the dream" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>I</DropCap>
        n 1924 the poet <strong>André Breton</strong> published the <em>Surrealist Manifesto</em> and gave
        the inward turn a programme. Where Dada had only mocked, <strong>Surrealism</strong> had a faith: that
        Freud was right, that the unconscious was the realer self, and that art&rsquo;s job was to bypass the
        rational mind and let the dream up. The painters split into two methods. One — Max Ernst, Joan Miró,
        André Masson — chased <em>automatism</em>, doodling and rubbing and dripping to let chance and the hand
        outrun the conscious will.
      </p>
      <p style={proseStyle}>
        The other painted dreams with hallucinatory, academic precision, so that the impossible looked
        photographed. Its showman was <strong>Salvador Dalí</strong>, whose limp, melting watches draped over
        a dead Catalan landscape became the single most famous image the movement produced — and a problem for
        a reader like this one, because it crosses a line in the calendar.
      </p>
      <RestrictedFigure
        title={<>Dalí, <i>The Persistence of Memory</i></>}
        year="1931 · Museum of Modern Art, New York"
        note="First published in 1931 — still under copyright in the US, so it can't be served inline. The soft watches are exactly the picture the prose has to carry."
        linkLabel="View at MoMA"
        href="https://www.moma.org/collection/works/79018"
      />
      <p style={proseStyle}>
        That cut-off — works first published before 1931 are public domain in the United States; 1931 and
        after are not — is why this era&rsquo;s pictures get thinner as the story approaches the present. It is
        not an accident of our archive; it is the law drawing a line right across the middle of Surrealism.
      </p>
      <p style={proseMutedStyle}>
        Surrealism spread worldwide in the 1930s and became, briefly, the dominant avant-garde. Then a second
        world war scattered its artists — many of them to New York, with their theories of chance and the
        unconscious packed in their luggage.
      </p>
    </article>
  </>
)

// ── 7. The center moves to New York ─────────────────────────
const NewYorkNarrative: Narrative = ({ accent }) => (
  <>
    <LineageStrip accent={accent}
      parents={[{ label: 'Surrealism' }, { label: 'The Second World War', mode: 'war' }]}
      descendants={[{ label: 'Contemporary art' }, { label: 'Postmodernism' }]}
    />
    <article style={{ padding: '18px 18px 40px' }}>
      <SectionHeader accent={accent} label="1940–1950" title="The wire reverses" first />
      <p style={proseStyle}>
        <DropCap accent={accent}>F</DropCap>
        or ninety years modern art had meant Paris. Then Hitler emptied Europe of its avant-garde — driven
        out as &ldquo;degenerate,&rdquo; Jewish, or simply unsafe — and a great many of them washed up in New
        York, where a generation of young American painters was waiting and watching. When the war ended, for
        the first time, the center of gravity of Western art was on the far side of the Atlantic. The Armory
        Show&rsquo;s wire of 1913 now carried the current the other way.
      </p>
      <p style={proseStyle}>
        What the Americans made was <strong>Abstract Expressionism</strong> — huge, ambitious, wholly
        abstract. <strong>Jackson Pollock</strong> took the Surrealists&rsquo; chance and automatism literally,
        laying the canvas on the floor and flinging skeins of house paint across it so that the painting
        recorded the <em>action</em> of making it. <strong>Mark Rothko</strong> went the opposite way, into
        vast soft rectangles of glowing colour meant to be stood in front of like an altarpiece. It was the
        first art movement the world looked to America to lead.
      </p>
      <RestrictedFigure
        title={<>Pollock, <i>One: Number 31, 1950</i></>}
        year="1950 · Museum of Modern Art, New York"
        note="Post-war and firmly under copyright — the poured, all-over canvases can't be shown inline. Picture an eight-foot field of flung black, white and silver with no top, bottom or center."
        linkLabel="View at MoMA"
        href="https://www.moma.org/collection/works/78386"
      />

      <SectionHeader accent={accent} label="1956–1970" title="And then a soup can answers back" />
      <p style={proseStyle}>
        Abstract Expressionism became so grand and so solemn that the next move was almost inevitable: deflate
        it. <strong>Pop art</strong> dragged the supermarket and the comic strip into the gallery —
        <strong> Andy Warhol</strong>&rsquo;s silkscreened soup cans and Marilyns, <strong>Roy
        Lichtenstein</strong>&rsquo;s blown-up comic panels complete with printer&rsquo;s dots. Where the
        Abstract Expressionists agonised over the unique handmade mark, Warhol courted the mechanical and the
        mass-produced and said he wanted to be a machine. It was Duchamp&rsquo;s 1917 readymade question
        returning in colour, at scale, and for sale.
      </p>
      <p style={proseStyle}>
        With Pop, the century-long argument that began with Courbet&rsquo;s tent had come full circle. The
        question was never really about cubes or colour or drips. It was always the same question the Salon
        jury thought it had settled: <em>who decides what counts as art, and what is it for?</em> By 1970 the
        answer was wide open — which is where &ldquo;modern&rdquo; ends and &ldquo;contemporary&rdquo; begins,
        the next era along.
      </p>
      <p style={proseMutedStyle}>
        To climb back down into the detail, the Cubism story is the deepest-built read in this era so far —
        and below it, a single painting, the Demoiselles, gets five chapters of its own.
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
