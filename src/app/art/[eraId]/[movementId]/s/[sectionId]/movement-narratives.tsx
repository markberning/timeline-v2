'use client'

// Cubism, the movement's own six-chapter narrative, 1907–1922. One altitude
// above the Demoiselles work read. House voice (dry wit dialed up, comparisons to
// land the points); inline figures honor the copyright tiers in art-content.ts
// (pre-1931 → inline + Rights line; in-copyright → RestrictedFigure). Revised
// 2026-05-23 against the art content pipeline gates (facts, looking, clarity,
// framing, comprehensiveness), see audits/art-content-pipeline.md.
//
// Registered by movement id in MOVEMENT_NARRATIVES at the bottom.

import {
 DropCap, SectionHeader, PaintingFigure, RestrictedFigure, MeanwhileSheet,
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
const BeforeNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 bricklayer who lets you see every brick. He even let a single tabletop tilt at two angles at once, which is, if you think about it, closer to how you actually scan a table than the polite fiction that
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
 The second thing was a pair of ancient Iberian stone heads (frontal, almond-eyed, severe) that
 Picasso acquired in 1907 from an associate of his poet friend Apollinaire. The provenance turned out to
 be the kind that makes a museum curator reach for a drink: the heads had been lifted straight out of the
 Louvre. Stolen or not, they did their work. The faces in the huge canvas on Picasso&rsquo;s wall began
 to harden into their stillness.
 </p>
 <p style={proseStyle}>
 The third thing was a visit, in mid-1907, to the ethnographic museum in the Trocadéro palace, a hall
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
 masks. Picasso called it, bluntly,{' '}<em>the brothel of Avignon</em>; the loftier title we use now (<em> Les Demoiselles d&rsquo;Avignon</em>) was a later, more respectable coat of paint applied by his
 friends. The picture has its own five-chapter story. Here it matters as the starting
 gun.
 </p>

 <SectionHeader accent={accent} label="L'Estaque · 1908" title="Braque, and a word coined as an insult" />
 <p style={proseStyle}>
 Georges Braque, born in 1882, was a young Fauve (one of the painters then using raw, blazing color
 with no shading to round things out) when a friend marched him into Picasso&rsquo;s studio to see the
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
 </>)

// ── 2. Two men, one rope ────────────────────────────────────
const AnalyticNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1909–1911" title="Roped together" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>F</DropCap>
 rom about 1909 Picasso and Braque stopped being rivals and became a two-man laboratory. They lived
 near each other in Montmartre, visited daily, and worked so closely that Braque later compared it to
 two mountaineers roped together, if one slipped, both fell. They showed each other every canvas in
 progress, and sometimes did not sign the fronts, which meant collectors occasionally paid full price
 for a painting and then had to turn it over to find out whose it was. It is still, more than a century
 on, genuinely hard for experts to tell some of their pictures apart.
 </p>
 <p style={proseStyle}>
 The summer of 1909 is when the experiment clicks into a method. Picasso spent it at Horta de Ebro, his
 family&rsquo;s Catalan village, and painted the houses there as a stack of nesting, light-catching
 cubes, hillside and buildings cut from the same crystalline blocks, the sky pulled down flat behind
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
 Historians call this phase{' '}<strong>Analytic Cubism</strong>, because the painters take an object apart (analyze it) and lay several of its sides down on the flat canvas at once. Picture trying to describe
 a friend by pinning up their passport photo, their profile and the back of their head in a single
 frame: that is roughly the deal. The color drains away to browns, grays and ochres, because color
 would only distract from the real subject, which is{' '}<em>structure</em>. A guitar shows you its face,
 its edge and its sound-hole simultaneously. And the law that had governed European painting since the
 1400s (that a picture is a window seen from one fixed spot, with one eye, in one frozen instant) is
 quietly repealed.
 </p>
 <p style={proseStyle}>
 In the autumn of 1910 Picasso painted his dealer, the 26-year-old German{' '}<strong>Daniel-Henry
 Kahnweiler</strong>, in this new language: a man dissolved into a shimmer of facets, findable only by a
 watch chain, a wave of hair, a pair of clasped hands. Kahnweiler had been quietly buying almost
 everything the two of them made and asking for no explanations, the rare early backer who simply
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
 Braque, meanwhile, was doing the same to the still life (a violin, a jug, a folded newspaper) and
 slipping in a painter&rsquo;s private joke: a single trompe-l&rsquo;œil nail (trompe-l&rsquo;œil is
 French for &ldquo;fool the eye&rdquo;, paint so convincing you nearly reach for it), complete with a
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
 For two years the pair kept climbing. The higher they went, the harder the pictures were to read, until
 they reached a height where even they started to get nervous.
 </p>
 </article>
 </>)

// ── 3. The world in shards ──────────────────────────────────
const ShardsNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1911–1912" title="The edge of legibility" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>B</DropCap>
 y 1911 Picasso and Braque had faceted the world so finely that their pictures hovered on the edge of
 pure abstraction. A portrait of a girl with a mandolin still has a shoulder, a breast, the curve of the
 instrument, but they float in a haze of overlapping planes, and you have to assemble the figure the way
 you assemble a face out of television static. Historians call this the{' '}<em>hermetic</em>{' '}phase, meaning
 sealed, nearly airless. The two painters got nervous enough about it that they began smuggling clues
 back in: a stencilled letter, a scrap of sheet music, the rope-weave of a chair, little handrails so a
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

 <SectionHeader accent={accent} label="Salle 41 · spring 1911" title="The public meets Cubism, without its inventors" />
 <p style={proseStyle}>
 The two men who invented Cubism barely showed it in public; Kahnweiler sold
 their work privately, mostly to foreign collectors, which kept the prices steady and the scandals to a
 minimum. So when Paris finally met &ldquo;Cubism&rdquo; as a public outrage, at the Salon des
 Indépendants of 1911, the big open exhibition that, unlike the official Salon, had no jury to keep
 anything out, the room that became notorious as{' '}<strong>Salle 41</strong>{' '}held no Picassos and no
 Braques at all. The walls were a thicket of brown-gray planes, tilted faces and faceted figures by a{' '}<em> second wave</em>{' '}of painters: Albert Gleizes, Jean Metzinger, Fernand Léger, Robert Delaunay and
 Henri Le Fauconnier, all French, all in their twenties and thirties, who had picked the idea up
 secondhand. Crowds jeered, newspapers cried anarchy, and a movement neither founder had named or hung
 became front-page news.
 </p>
 <p style={proseStyle}>
 It was the perfect modern story: the laboratory builds the bomb in private, and the public first meets
 it through the people who carried it out of the building. The Salon Cubists spread the style because they did the one thing Picasso and Braque flatly refused to do. They explained
 themselves.
 </p>
 <p style={proseStyle}>
 Picasso, asked late in life whether he had set out to demolish perspective, only shrugged. He had been
 trying, he said, to paint what he knew was there, not merely the sliver of it that one eye reports from
 one spot. The revolution, in his telling, was just honesty about how looking actually works.
 </p>
 </article>

 <MeanwhileSheet
 accent={BLUE}
 region="Munich"
 title="Kandinsky is about to drop the subject altogether."
 body="While Cubism clings to a shoulder and a mandolin as handrails, in Munich the Russian painter Wassily Kandinsky is making pictures of nothing but color and line, among the first fully abstract paintings. If Cubism took the window apart pane by pane, Kandinsky simply threw the whole window out."
 />
 </>)

// ── 4. Pasted paper ─────────────────────────────────────────
const PaperNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1912" title="A scrap of oilcloth" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n the spring of 1912 Picasso did something small and irreversible. Onto an oval still-life canvas he
 glued a strip of cheap, machine-printed oilcloth (the kind sold by the yard to line kitchen shelves) patterned to look like the caning of a chair, and ran a length of rope around the edge as a frame. Stop
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
 That autumn Braque answered with{' '}<em>papier collé</em>, pasted paper. He bought a roll of wallpaper
 printed to imitate oak grain, cut it into strips, and built a picture out of them. Where Analytic
 Cubism had{' '}<em>taken objects apart</em>, this new mode{' '}<em>assembled</em>{' '}pictures out of ready-made
 stuff: newspaper, sheet music, cigarette wrappers, stencilled letters, fake wood, fake marble. Call it
 the difference between an autopsy and a scrapbook. Historians call it{' '}<strong>Synthetic Cubism</strong>.
 The color comes back, the planes go big and flat and almost poster-like, and the real world (actual
 newsprint reporting actual Balkan wars) gets pasted bodily into the art.
 </p>
 <p style={proseStyle}>
 It looks like a footnote and it is a hinge. Photomontage (pictures built from cut-up photographs),
 Dada&rsquo;s cut-ups, Surrealist collage, Pop Art&rsquo;s soup cans, the whole modern idea that an artist
 might{' '}<em>select and arrange</em>{' '}existing images rather than render everything from scratch, all of it
 walks through the door Picasso and Braque opened in 1912 with a pot of glue and a yard of shelf liner.
 </p>
 </article>
 </>)

// ── 5. Cubism goes public ───────────────────────────────────
const PublicNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The Salon Cubists" title="The wave that explained itself" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 icasso and Braque never wrote a manifesto and rarely exhibited. The painters who turned Cubism into a
 public movement were the second wave, <strong>Albert Gleizes</strong>{' '}and{' '}<strong>Jean Metzinger</strong>{' '}(the theorists),{' '}<strong>Fernand Léger</strong>{' '}(who pushed it toward gleaming tubes and pistons),{' '}<strong> Robert Delaunay</strong>{' '}(toward pure color), and the Spaniard{' '}<strong>Juan Gris</strong>{' '}(toward
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
 the shows, defended them in print, and minted names the way a mint makes coins, he christened
 Delaunay&rsquo;s color-drunk, near-abstract variant{' '}<em>Orphism</em>{' '}(after Orpheus, because he thought
 it worked on you like music). Robert Delaunay rarely worked alone: his partner{' '}<strong>Sonia Delaunay</strong>{' '}drove the same color experiments and carried them off the canvas entirely, into fabric, fashion and
 book design, which is a large part of why Orphism outlived the painting room.
 </p>

 <SectionHeader accent={accent} label="New York · 1913" title="The freight train reaches America" />
 <p style={proseStyle}>
 In February 1913 a vast show called the{' '}<strong>Armory Show</strong>{' '}opened in a New York drill hall and
 dragged European modern art in front of the American public for the first time. The{' '}<em> succès de scandale</em> (a hit precisely <em>because</em> it caused a scandal) was a
 Cubo-Futurist canvas by Marcel Duchamp,{' '}<em>Nude Descending a Staircase</em>: a figure smeared into a
 cascade of overlapping slats, less a nude than the photographic blur of one walking downstairs. A
 baffled critic called it &ldquo;an explosion in a shingle factory&rdquo;; a newspaper cartoonist redrew
 it as &ldquo;the rude descending a staircase, rush hour at the subway.&rdquo; People queued to be
 outraged. And then American collectors started buying. The center of gravity of modern art was still
 firmly in Paris, but a wire had just been strung across the Atlantic, and thirty years later the
 current would reverse.
 </p>
 </article>
 </>)

// ── 6. Mobilisation ─────────────────────────────────────────
const AfterNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="August 1914" title="The rope is cut" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>O</DropCap>
 n the 2nd of August 1914, France mobilised, and Braque was called up that same day; Léger went into the
 army that month; Apollinaire, Italian-born and not yet a French citizen, talked his way into uniform by
 the end of the year. Picasso (a Spaniard, and neutral) was not called, and he went down to the station
 at Avignon to see Braque off. He said afterward that he never saw his old climbing partner again,
 meaning the partnership: the two of them never again worked side by side. Kahnweiler, a German, had his
 entire stock of their paintings seized by the French state as enemy property, which left the French
 government, by accident and decree, holding one of the largest hoards of Cubist art on earth. The
 laboratory was emptied in a week.
 </p>
 <p style={proseStyle}>
 The war did not deal gently with them. Braque took a head wound at Carency in 1915, was trepanned (a
 disc of skull cut away to ease the pressure), and came back a slower, graver painter. Apollinaire took
 shrapnel to the skull in 1916, never fully recovered, and died in the influenza pandemic of November
 1918, two days before the Armistice, at 38. The man who had explained Cubism to the world did not live
 to see the peace.
 </p>

 <SectionHeader accent={accent} label="After" title="A language, loose in the world" />
 <p style={proseStyle}>
 Picasso, during and after the war, swerved, into stage designs for the{' '}<em>Ballets Russes</em>{' '}(the
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
 caption={<>Three masked carnival figures (a Harlequin, a Pierrot, a monk) built from flat colored cut-outs: the broken window of Analytic Cubism turned into stained glass.</>}
 credit={<>Picasso,{' '}<em>Three Musicians</em>, 1921 · Philadelphia Museum of Art</>}
 rights={PD_RIGHTS}
 />
 <p style={proseStyle}>
 That language went everywhere. The Russian Constructivists, the Dutch De Stijl painters, the German
 Bauhaus, the entire road to pure abstraction, all of them start from the permission Cubism granted:
 that a picture is a flat made thing, free to show several truths at once and to paste the real world
 straight into itself. Two painters in Montmartre had spent six years roped together over a single
 problem; a noisier second wave had argued, written and exhibited it into the open; and between them they
 handed the rest of the century its grammar.
 </p>
 <p style={italicStyle}>
 The first painting where it all begins is{' '}<em>Les Demoiselles d&rsquo;Avignon</em>, the canvas that fired the starting gun.
 </p>
 </article>
 </>)

// ════════════════════════════════════════════════════════════
// REALISM, the Modern era's opening revolt, 1848–1870. Six chapters,
// authored through the art content pipeline (fact pack → Opus draft → 5 critic
// gates → revise; see audits/art-pipeline/). House voice, American spelling;
// figures honor the copyright tiers (all artists PD worldwide).
// ════════════════════════════════════════════════════════════

// ── 1. Why Realism ──────────────────────────────────────────
const WhyRealismNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="France · 1848" title="The year the floor moved" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>M</DropCap>
 ost art movements begin in a studio. This one begins in a riot. In February 1848 the people of Paris
 threw out a king. The monarchy fell, a republic was declared, and for a few intoxicating months it
 looked as though France was going to be remade from the ground up, and then, just as fast, the hope
 soured into fear, repression and, by 1851, a new emperor. That whiplash year is the ground Realism
 grows out of, and you cannot understand the paintings without it. A generation of artists had just
 watched ordinary people (workers, peasants, the poor) step out of the background of history and
 briefly seize the foreground. The question that followed was almost rude in its simplicity: if these
 people can topple a throne, why are they good enough to paint only as scenery?
 </p>
 <p style={proseStyle}>
 Because scenery is what they had always been. The era runs on a single jury-and-rebellion system: a single State-run ladder, topped by the{' '}<strong>Salon</strong>{' '}(the official annual exhibition, the one show in France where a painter’s career was
 made or buried), policed by a jury that prized{' '}<strong>history painting</strong> (grand scenes
 from myth, scripture and ancient history, the human body at heroic size) as the only subject serious
 enough to earn a man real glory. At the very bottom of that ranked menu of approved subjects, the{' '}<strong>hierarchy of genres</strong>, sat plain modern life: a field, a workshop, a bowl of fruit. Gods
 at the top, greengrocers at the bottom. To paint a peasant was permitted; to paint a peasant{' '}<em>the size of a god</em>{' '}was not done.
 </p>

 <SectionHeader accent={accent} label="The demand" title="Paint your own century" />
 <p style={proseStyle}>
 The Realists’ answer was to do exactly the thing that wasn’t done, and to do it on purpose. Their
 program (though “program” makes it sound tidier than it was) came down to a single defiant
 instruction: paint the real, ordinary, contemporary world. Not gods. Not Roman senators in togas. Not a
 goddess rising poreless from a poreless sea. The thing actually in front of you, in the year you are
 actually standing in: laborers, peasants, the urban poor, animals, work, dirt, the present tense.
 </p>
 <p style={proseStyle}>
 That instruction had two enemies, not one. The academy was the obvious target, gods and kings at heroic
 scale. But Realism was also a revolt against{' '}<strong>Romanticism</strong>, the generation just before
 it, which had answered the academy’s stiff antiquity with the opposite excess: exotic settings, heaving
 drama, shipwrecks and harems and battlefield agony, feeling cranked to the ceiling. The Realists wanted
 neither the museum’s gods nor the Romantics’ fever dreams. They wanted the ordinary thing, observed cold.
 </p>
 <p style={proseStyle}>
 It sounds obvious now. That obviousness is the surest sign of how completely they won. But set it against
 what the Salon was rewarding in these very years, its most celebrated painter, Alexandre Cabanel (the
 academy’s reigning star), and his{' '}<em>Birth of Venus</em>, a nude deity sliding along a wave with a
 finish so licked-smooth the paint disappears, and you see the size of the
 heresy. The Realists wanted paint that{' '}<em>looked like paint</em>, surfaces with the trowel marks left
 in, and they wanted to point that rough, honest handling at the least heroic subjects available. It was,
 in the Western tradition, the first time a band of painters made a deliberate movement out of insisting
 on the unglamorous now. That makes Realism a fair candidate for the first modern movement (the first
 shot in the long argument with the jury that runs through the rest of this era) with one honest caveat:
 “first” here means{' '}<em>first in Western painting</em>, the only world this story claims to map.
 </p>
 <p style={proseStyle}>
 There was also a machine making the demand harder to ignore. The{' '}<strong>daguerreotype</strong> (the
 first practical photograph, public from 1839) was barely a decade old and already turning out portraits
 by the thousand. If a small mirrored plate could now capture a face cheaply and exactly, what was left
 for a painter to do that a camera could not? Part of the answer Realism arrived at was rough, handmade
 paint, real human presence, and political content: precisely the things no daguerreotype could give you.
 </p>

 <SectionHeader accent={accent} label="The avant-garde" title="Scouts in front of the army" />
 <p style={proseStyle}>
 A word the era keeps using fits Realism better than almost anyone. The{' '}<strong>avant-garde</strong>{' '}is
 a borrowed military term (the scouts who ride out ahead of the main army) pressed into service for the
 artists who got somewhere first. Realism is where that idea gets its first real face in modern painting:
 a small group running out ahead of respectable taste, taking the abuse, and dragging the rest of art
 behind them. The man riding point was a barrel-chested provincial with an ego the size of a cathedral,
 and Courbet dominates what follows.
 </p>
 </article>

 <MeanwhileSheet
 region="London"
 title="A novelist is doing the same thing in ink."
 body="In the same years the Realist painters are dignifying the French poor, Charles Dickens is filling his novels with London's pickpockets, paupers and factory clerks, ordinary, contemporary, unglamorous people made the center of serious art. The instinct to take the present-day poor seriously was in the air across Europe, in paint and in print at once."
 />
 </>)

// ── 2. Courbet's gauntlet ───────────────────────────────────
const GauntletNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 So he did the unthinkable, twice, in a single year. In 1849 he painted two laborers (one old, one young) breaking rock by the roadside,{' '}<em>The Stone Breakers</em>, and in 1849–1850 he painted an entire
 village funeral in his hometown,{' '}<em>A Burial at Ornans</em>. Both were opening salvos against the jury. Closer up, you can see what was actually on the
 canvases, and why two pictures of nobodies frightened people the way a cannon frightens people.
 </p>

 <SectionHeader accent={accent} label="The Stone Breakers" title="Two men and a pile of rock" />
 <p style={proseStyle}>
 Start with the one you cannot see.{' '}<em>The Stone Breakers</em>{' '}(1849) showed two figures at the
 dullest, hardest, lowest work a body can do, a young man straining to lift a basket of broken stone, an
 old man kneeling to swing the hammer, their backs to us, their faces nearly hidden, their clothes torn at
 the knee and the elbow. No moral, no sermon, no pretty light. Just labor, life-size, painted with the
 gravity the Salon spent on saints. Courbet refused to ennoble them and refused to pity them; he simply
 granted that their work was as real as a coronation, and let the size of the canvas say so.
 </p>
 <p style={proseStyle}>
 You have to take that on trust, because you can no longer see the painting. It hung for decades in
 Dresden, in the city’s old-master gallery, and it vanished in the bombing of Dresden in February 1945.
 The Dresden museum officially lists it as “missing,” and it is generally presumed destroyed; the exact
 fate is disputed, one widely repeated account has it lost in transit toward the fortress of Königstein
 along with 153 other works from the collection, but that is one version, not settled record. Either way,
 it was never viewable again. What survives are reproductions, like the desaturated one below, so
 <em>The Stone Breakers</em>{' '}now reaches us only as a ghost, reconstructed from copies of
 a thing that is gone. There is a grim aptness to it: the great picture of the people history grinds up was
 itself ground up by history.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={R_STONE}
 imageUrl={ART_IMG.courbetStoneBreakers}
 ratio="5/3"
 alt="Courbet, The Stone Breakers (reproduction of the destroyed painting)"
 caption={<>An old man kneeling to swing the hammer, a young man hoisting a basket of broken rock, backs to us, faces hidden, painted life-size and dead serious. The most ordinary backbreaking work there is, given the room a Salon would spend on a king.</>}
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
 forty mourners are strung in a long frieze across the canvas at life size, townsfolk of Ornans, real
 local faces, in their real Sunday black, lined up along the lip of an open grave under a flat gray cliff
 and a flatter gray sky. A priest reads; pallbearers stand; a dog wanders in at the front, indifferent.
 Nobody is beautiful. Nobody is posed for the ages. There is no shaft of holy light, no swooning grief, no
 allegorical figure of Death, just a hole in the ground and a row of unremarkable people who will all be
 in it eventually. It is a funeral painted at the scale of a coronation, with none of a coronation’s
 flattery, and that mismatch was the scandal. Critics asked, in effect, who told these nobodies they could
 fill a wall meant for the gods. The honest answer was: Courbet did, and he refused to apologize for it.
 </p>
 <p style={proseStyle}>
 That refusal is the gauntlet of the chapter title. He had not merely painted humble subjects, humble
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
 caption={<>A country funeral, more than forty real townsfolk in their Sunday black strung along an open grave, painted ten feet tall and twenty-two wide. No holy light, no swooning grief, just a hole in the ground and a dog wandering in at the front.</>}
 credit={<>Courbet,{' '}<em>A Burial at Ornans</em>, 1849–1850 · Musée d’Orsay, Paris</>}
 rights={PD_COURBET}
 />
 </article>
 </>)

// ── 3. The Pavilion and the Manifesto ───────────────────────
const PavilionNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1855" title="When the world’s fair said no" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n 1855 Paris threw a world’s fair, the Exposition Universelle (a vast international showcase of industry
 and art, the kind of event a nation stages to advertise itself to the planet) and naturally it came with
 a grand official art exhibition. Courbet sent in his work. The jury took some of it and refused the
 biggest, most ambitious canvases, including the huge new picture he considered his summary statement,{' '}<em>The Painter’s Studio</em>.
 </p>
 <p style={proseStyle}>
 The refusal makes more sense once you see what the picture actually shows.{' '}<em>The Painter’s Studio</em>{' '}is an enormous, almost stage-like scene with Courbet
 himself seated dead center at his easel, a nude model at his shoulder and a small boy looking on, while
 two crowds flank him, on one side the poor, the workers, the down-and-out of real France; on the other
 his friends, patrons and fellow thinkers, the world of art and ideas. He subtitled it, with
 characteristic modesty, “a real allegory summing up seven years of my artistic life.” It is a painter
 declaring that his own studio is the place where the whole of contemporary society is sorted out, exactly the kind of grandiosity, hung on a man rather than a god, that a jury would sooner not endorse.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={R_STUDIO}
 imageUrl={ART_IMG.courbetStudio}
 ratio="16/9"
 alt="Courbet, The Painter's Studio"
 caption={<>Courbet at his easel dead center, a nude model at his shoulder; to one side the poor of real France, to the other his friends and patrons, his whole world declared a “real allegory” of his art. The world’s fair refused it, so he hung it in his own tent.</>}
 credit={<>Courbet,{' '}<em>The Painter’s Studio</em>, 1855 · Musée d’Orsay, Paris</>}
 rights={PD_COURBET}
 />
 <p style={proseStyle}>
 A rejected painter in 1855 had two normal options: sulk, or try again next year. Courbet invented a
 third. He leased a plot of ground a stone’s throw from the official exhibition, built his own building on
 it at his own expense, hung the refused pictures inside, charged the public admission, and bolted a sign
 over the door reading, simply,{' '}<strong>Du Réalisme</strong>, <em>On Realism</em>. The Pavilion of Realism is worth slowing down for,
 because it is one of the founding acts of the modern art world: a painter, told no by the official
 machine, simply walked around it and set up his own machine across the street. Roughly the
 nineteenth-century equivalent of being turned down by every gallery in town and renting the empty shop
 next door to hang your own show, and selling tickets.
 </p>

 <SectionHeader accent={accent} label="The manifesto" title="A name pinned to a flag" />
 <p style={proseStyle}>
 The pavilion did one thing the Burial and the Stone Breakers could not, for all their scale: it gave the
 movement words. Inside, Courbet handed out a printed catalogue, and the catalogue carried a short
 statement of intent. Today we would call it a{' '}<strong>manifesto</strong>, a public declaration in
 which an artist or a group sets out, in plain language, what they are for and what they are against. It is
 one of the things that makes Realism feel modern: not just new pictures but a printed argument
 deliberately stapled to them. The avant-garde movements that follow (almost every one in this era) will
 arrive with a manifesto in hand, and Courbet’s tent is where the habit starts.
 </p>
 <p style={proseStyle}>
 His statement set out the aim of his painting as “to translate the customs, the ideas, the appearance of
 my epoch, according to my own estimation.” The whole movement is folded into that
 one sentence:{' '}<em>My epoch</em>, not antiquity, not scripture, but now.{' '}<em>The customs, the
 ideas, the appearance</em>, ordinary contemporary life, exactly the rung the academy ranked lowest.{' '}<em>According to my own estimation</em>, by my judgment, not the jury’s. In one line he relocated the
 authority over what counts as art from the State to the individual artist, which is a thing the rest of
 this era will spend a hundred years confirming. It is the difference between a restaurant that serves only
 the dishes on the official menu and a cook who decides for himself what is worth putting on a plate, and
 Courbet had just walked out of the first kitchen to open the second. “Realism” had been floating around as
 a critics’ word, usually a sneer. Here, in his own tent, in his own catalogue, Courbet picked the sneer up
 off the floor and ran it up a flagpole, the same trick the Impressionists and the{' '}<strong>Fauves</strong>{' '}(the “wild beasts,” a later band of painters who took their derisive nickname as a
 badge) would pull with insults of their own.
 </p>
 <p style={proseStyle}>
 It should be said that Courbet did not invent the impulse single-handed, however much his ego would have
 liked the credit. He named it, theorized it, and gave it a scandal big enough to make headlines. But the
 deepest, quietest, most lasting Realist pictures were being painted at the same moment by a man who never
 built a tent and never wanted one, out in a village south of Paris, among the people who actually broke
 the rock.
 </p>
 </article>

 <MeanwhileSheet
 region="Paris"
 title="The State show is right across the way."
 body="Courbet's tent only works because of what it stands next to. A few steps away, inside the Exposition Universelle's official halls, the academy was showing the polished, jury-approved art the State endorsed. The pavilion's whole argument was geographic: here is your art; here is mine; the public can buy a ticket and decide. It is the first time a major painter framed his work as a direct, paying alternative to the official machine rather than a plea to be let inside it."
 />
 </>)

// ── 4. Millet's peasants ────────────────────────────────────
const PeasantsNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 That move is itself part of the Realist argument. The academy wanted nature arranged, composed,
 idealized, lit for drama, built up from sketches in a studio under controlled light. The painters of the{' '}<strong>Barbizon School</strong> (the loose colony that took its name from the village, among them the
 landscapists Jean-Baptiste-Camille Corot and Théodore Rousseau) wanted the actual fields, the actual
 weather, the actual exhausting work going on in them. Millet’s particular subject, the one he returned to
 for the rest of his life, was the peasant at labor: bent backs, heavy tools, the slow grinding rhythm of
 getting food out of the ground. He painted it without the cheerful, rosy-cheeked prettiness the Salon
 liked its peasants to have, and without sentimental pity either. He painted it as fact, and as something
 close to a sacrament.
 </p>

 <SectionHeader accent={accent} label="The Sower" title="A peasant the size of a threat" />
 <p style={proseStyle}>
 His first shock came at exactly the moment Courbet’s did.{' '}<em>The Sower</em>{' '}(1850, now in the Museum
 of Fine Arts, Boston) hung at the same Salon of 1850 that showed Courbet’s{' '}<em>Burial at Ornans</em>, so the two fronts of Realism opened together, one with a village funeral, the other with this. The picture
 is a single lone peasant striding across a dusk field, one arm flung out scattering seed, the great
 rhythmic gesture of sowing frozen mid-swing. He is monumental and almost menacing: a dark, powerful,
 faceless figure bearing down across the foreground, the falling light catching the arc of grain. It made
 Millet famous overnight, and it unsettled people for the same reason Courbet’s nobodies did, a working
 peasant given the size and gravity of a hero, only two years after working people had toppled a throne.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={R_SOWER}
 imageUrl={ART_IMG.milletSower}
 ratio="4/5"
 alt="Millet, The Sower"
 caption={<>A lone peasant striding a dusk field, one arm flung wide to scatter seed, dark, powerful, almost faceless, bearing down across the foreground. A working man given the size and gravity of a hero, two years after the poor had toppled a throne.</>}
 credit={<>Millet,{' '}<em>The Sower</em>, 1850 · Museum of Fine Arts, Boston</>}
 rights={PD_MILLET}
 />

 <SectionHeader accent={accent} label="The Gleaners" title="Three women and the right to scraps" />
 <p style={proseStyle}>
 <em>The Gleaners</em>{' '}(1857) is the picture that frightened the critics, and to see why you have to
 know what gleaning was. After a field was harvested, the very poorest of the rural poor were permitted, by
 old custom, to come in behind the reapers and gather the leftover grain that had fallen, the scraps, the
 dropped heads, what the harvest had missed. It was the bottom of the bottom: the right of the people who
 had nothing to pick up what no one else wanted.
 </p>
 <p style={proseStyle}>
 Millet painted three of these women in the act, and he painted them huge. Three figures fill the front of
 the canvas, bent at the waist over a vast stubbled field that runs back to a gold horizon, their hands
 reaching toward the dirt. Behind them, small and bright in the distance, the real harvest is being brought
 in (wagons, haystacks, a mounted overseer) a whole prosperous farm economy carrying on without them. The
 composition does the politics by itself: the wealth of the harvest is back there, tiny and golden; the
 women who get only its leavings are right here, near, dark, monumental, filling your view. There is no
 slogan. There is just a decision about who gets to be the size of a hero, and Millet gave that scale to
 three women stooping for fallen grain.
 </p>
 <p style={proseStyle}>
 Critics read it exactly that way, and it alarmed them. Some saw in those three monumental peasant women a
 warning, the rural poor, dignified and made enormous, only a few years after 1848 had shown what the poor
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
 caption={<>Three of the poorest women, bent over a stripped field gathering the grain the reapers dropped, painted at the monumental size the Salon kept for heroes. Behind them, small and golden, the real harvest is carried in without them. The composition makes the argument.</>}
 credit={<>Millet,{' '}<em>The Gleaners</em>, 1857 · Musée d’Orsay, Paris</>}
 rights={PD_MILLET}
 />

 <SectionHeader accent={accent} label="The Angelus" title="A field that turns into a church" />
 <p style={proseStyle}>
 If{' '}<em>The Gleaners</em>{' '}is Millet’s argument,{' '}<em>The Angelus</em>{' '}(1857–1859) is his prayer.
 Two peasants (a man and a woman) stand alone in a darkening field at dusk, a basket of potatoes and a
 fork at their feet, and they have stopped work to bow their heads. The title names the reason: the{' '}<em>Angelus</em>{' '}is a Catholic devotion said morning, noon and evening at the sound of a church bell, and
 on the far horizon, almost too small to find, the tower of a village church catches the last light. The
 bell has rung; the two of them have paused mid-labor to pray; the whole flat field has gone still and
 golden-brown around them.
 </p>
 <p style={proseStyle}>
 Look at how the canvas is divided, because the whole feeling of it lives there. The sky fills nearly
 two-thirds of the picture (an enormous flat dusk pressing down from above) and against all that
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
 caption={<>Two peasants pause at the evening bell to bow their heads, a basket of potatoes at their feet. The sky fills two-thirds of the canvas and presses down on the two small stooped bodies, that vastness over them is the whole feeling of the picture.</>}
 credit={<>Millet,{' '}<em>The Angelus</em>, 1857–1859 · Musée d’Orsay, Paris</>}
 rights={PD_MILLET}
 />
 <p style={proseStyle}>
 It is a far gentler picture than{' '}<em>The Gleaners</em> (no edge of menace, no overseer in the back) and it became, for that reason, one of the most reproduced images of the entire nineteenth century, hung
 on parlor walls and printed on a thousand cheap copies across Europe and beyond. Millet had done something
 the academy thought impossible: he had made two stooping peasants in a potato field carry the weight of a
 religious painting, with no saints, no gold halos, no scripture, only the work, the bell, and the bowed
 heads. The sacred, he insisted, was already out there in the dirt. You did not have to import gods to find
 it.
 </p>
 </article>
 </>)

// ── 5. Daumier's city ───────────────────────────────────────
const CityNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The press" title="A weapon you could print" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n 1832 a French artist went to prison for drawing a cartoon of the king. His name was Honoré Daumier
 (1808–1879), and the offending picture was a fat joke about a monarch’s appetite, but the State took it
 seriously enough to lock him up for it. That is the figure who drags Realism off the farm and into the
 modern city. Where Courbet gave us stone and graves and Millet gave us fields, Daumier gave us the
 present-tense town: its crowds, its politicians, its poor. And he did it first not with paint but with the
 printing press.
 </p>
 <p style={proseStyle}>
 Daumier worked for the satirical newspapers of Paris as a{' '}<strong>caricaturist</strong> (an artist
 who exaggerates a public figure’s features and bearing to mock and expose them) and his weapon was{' '}<strong>lithography</strong>, a then-new printing method in which the artist draws directly onto a flat
 stone with a greasy crayon; the stone is inked, and hundreds of identical copies pull off it. Lithography
 is what made political cartooning a mass medium: it was fast, cheap, and it put the same biting image into
 thousands of hands at once. Daumier was its master. Over his life he produced thousands of lithographs for
 the press, skewering the kings, ministers, lawyers and self-satisfied bourgeois of his day with a savage,
 knowing line. It is Realism’s other half, not the dignity of the poor but the satire of the powerful,
 both aimed at the same target: the actual society in front of him, right now.
 </p>

 <SectionHeader accent={accent} label="Gargantua" title="The cartoon that went to jail" />
 <p style={proseStyle}>
 Satire that lands hard tends to get the satirist in trouble, and Daumier’s did. In late 1831 he drew the
 reigning king, Louis-Philippe, as{' '}<em>Gargantua</em>, a grotesque giant, named for the gluttonous
 giant of a famous sixteenth-century French novel, enthroned and gorging himself on the taxes and tribute
 of his starving subjects, who haul wealth up a ramp into his enormous mouth while he excretes honors and
 favors out the other end onto the courtiers below. It was funny, it was filthy, and it was unmistakably
 the king. He was prosecuted the next year and jailed by 1832, by the standard account, for around six
 months. (The story is told so often that the exact term is worth a beat of caution: take the six-month
 figure as the usual account rather than a fact carved in stone.)
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={R_DAUMIER}
 imageUrl={ART_IMG.daumierGargantua}
 ratio="3/2"
 alt="Daumier, Gargantua"
 caption={<>The king as a bloated giant on a throne, gorging on the taxes his starving subjects haul up a ramp into his mouth, and excreting honors onto the courtiers below. Funny, filthy, and unmistakably Louis-Philippe. It sent Daumier to jail.</>}
 credit={<>Daumier,{' '}<em>Gargantua</em>, 1831 · lithograph · Bibliothèque nationale de France</>}
 rights={PD_DAUMIER}
 />
 <p style={proseStyle}>
 What is not in doubt is the principle the episode hands the rest of the era: an image can be dangerous
 enough to imprison a man for. The avant-garde’s later scandals, the riots at the Salon des Refusés (the
 overflow show of rejected pictures), the umbrellas raised against Édouard Manet’s{' '}<em>Olympia</em>{' '}(the modern painter’s notorious nude, who stared straight back at the viewer), are usually about taste.
 Daumier got jailed over power. His Realism had teeth, and the State felt them.
 </p>

 <SectionHeader accent={accent} label="The Third-Class Carriage" title="The modern poor, packed in a box" />
 <p style={proseStyle}>
 Daumier painted, too, though far fewer people saw his canvases than saw his cartoons in his lifetime, and
 his greatest painting is the one that drags Realism fully into the machine age.{' '}<em>The Third-Class
 Carriage</em>{' '}(about 1862–1864, and left unfinished) shows the inside of a railway car’s cheapest class (third class, the bare-bench compartment of the people who could afford no better) packed with the urban
 poor on the move.
 </p>
 <p style={proseStyle}>
 Look at who he gives the front bench. A nursing mother holds her baby; an old woman beside her sits folded
 over a basket, hands clasped, staring at nothing; a small boy has fallen asleep against them. Behind, rows
 of anonymous heads recede into the dim, jostling car. There is no event, no story, no drama, just the
 ordinary, exhausted, anonymous experience of being poor in a modern city, riding the new technology that
 the prosperous rode in better seats up the train. And there is no sentimentality, which is the Realist
 part: Daumier does not ask you to weep for these people, only to look at them. The faces are tired,
 dignified, unidealized, lit by the gray light coming through the carriage windows. The railway (the
 single most modern thing in their world) becomes a frame for the oldest subject there is, which is simply
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
 caption={<>The bare-bench cheapest class of a railway car, packed with the urban poor: a nursing mother, an old woman folded over her basket, a sleeping boy, rows of anonymous heads behind. No story, no pity, just tired, dignified faces in gray light, the newest machine framing the oldest subject there is.</>}
 credit={<>Daumier,{' '}<em>The Third-Class Carriage</em>, about 1862–1864 (unfinished) · The Metropolitan Museum of Art, New York</>}
 rights={PD_DAUMIER}
 />
 </article>
 </>)

// ── 6. Bonheur, and the reach ───────────────────────────────
const ReachNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1853" title="The most famous painter you weren’t told about" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>B</DropCap>
 y the 1850s the single most celebrated painter of animals in France (and one of the most celebrated
 painters of any kind, of either sex) was a woman. Rosa Bonheur (1822–1899) is the part of the Realist
 story usually trimmed out, and she belongs at full size, because she was not a curiosity on the edge of
 the movement. She was one of its biggest successes, on the movement’s own terms: she painted the real,
 contemporary, unglamorous world (in her case, animals and the people who worked with them) at a scale
 and with a seriousness the academy reserved for grander things, and the public loved her for it.
 </p>
 <p style={proseStyle}>
 Her subject was animal life rendered with the exactness of someone who had genuinely studied it. To get
 her anatomy right she spent long hours in places respectable women were not expected to be (slaughterhouses, cattle markets, horse fairs) observing how a real animal stands, strains and moves. The
 fruit of that study was the picture that made her internationally famous.
 </p>

 <SectionHeader accent={accent} label="The Horse Fair" title="A canvas you can hear" />
 <p style={proseStyle}>
 <em>The Horse Fair</em> (begun in 1852, shown at the Salon of 1853, and finished in 1855) is enormous
 and it moves. It shows the great Paris horse market: a churning parade of powerful draft horses being led,
 ridden and wrestled around a tree-lined boulevard by their handlers, the animals rearing, tossing their
 heads, straining against the men who grip their bridles. Bonheur painted the muscle and the motion with
 such conviction that you can almost hear it, the stamp of hooves, the shouts of the dealers, the snorting
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
 caption={<>The Paris horse market at full gallop: powerful draft horses rearing and tossing their heads while their handlers wrestle them around a tree-lined boulevard. Bonheur painted the muscle and motion so convincingly you can nearly hear the hooves, the everyday horse trade given the size of a battle scene.</>}
 credit={<>Bonheur,{' '}<em>The Horse Fair</em>, 1852–1855 · The Metropolitan Museum of Art, New York (gift of Cornelius Vanderbilt II, 1887)</>}
 rights={PD_BONHEUR}
 />
 <p style={proseStyle}>
 The painting was a sensation, and it traveled, it ended up across the Atlantic, given in 1887 by the
 American railroad heir Cornelius Vanderbilt II to the Metropolitan Museum of Art in New York, where it
 still hangs. A movement that began as a French quarrel with a French jury had, in this one giant canvas,
 become a thing Americans crossed an ocean to own.
 </p>

 <SectionHeader accent={accent} label="The trousers" title="Agency, not anecdote" />
 <p style={proseStyle}>
 There is a famous story about how Bonheur got into those markets at all. To sketch the horse fair
 unbothered (a woman alone in a rough, male, working crowd) she obtained, by her own record, an official
 police permit to wear men’s clothing, the trousers and smock that let her move through the market without
 being stared at or harassed. The detail is repeated everywhere, and it is genuinely useful, because it
 makes plain a thing that is otherwise easy to miss: the obstacles Bonheur cleared to do her work were not
 the obstacles a Courbet or a Daumier faced.
 </p>
 <p style={proseStyle}>
 The substance behind it is not in doubt. Bonheur lived openly on her own terms, ran her own household and
 career, dressed for the work she meant to do, and built one of the most successful artistic lives of her
 century, sharing it with her lifelong companion Nathalie Micas, who ran the household and business side
 of things and so freed Bonheur to paint, without a patron’s leash or the official school that had refused
 to admit women at all. She is not a footnote to a movement of men. She is one of the people who proved the
 movement could win an audience, and she won a bigger one than most of them.
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
 real world, the thing that is actually there. A circle of younger painters, boating parties and railway
 stations rather than gleaners and horse fairs, with Édouard Manet (the{' '}<em>Olympia</em>{' '}scandal-maker
 of the previous chapter) standing in the doorway between the two generations, would soon say something
 subtler: paint not the thing that is there, but the thing you actually see, the flicker of light on it in
 a single passing moment. That is the move from Realism to Impressionism, and it is less a break than a
 relay (the Impressionists get their own chapter). Courbet had
 thrown the door open by insisting the present was worth painting. The Impressionists walked through it and
 started painting the light.
 </p>
 <p style={proseStyle}>
 Its leader did not get a soft landing. Realism’s politics caught up with the man who had made it a banner.
 In the{' '}<strong>Paris Commune of 1871</strong> (the radical city government that seized Paris for ten
 weeks after France’s defeat by Prussia) Courbet helped pull down the Vendôme Column, Napoleon’s bronze
 victory monument, as a symbol of empire and war. When the Commune was crushed, he was convicted: six
 months in prison and a 500-franc fine. Then, in 1873, the State went further and ordered him to pay for
 the column’s reconstruction, an estimated 323,000 francs, to be handed over in yearly installments for
 the rest of his life. He fled to Switzerland and died there in exile in 1877. The man who had spent his
 career painting labor and the people paid, in the end, for his politics.
 </p>
 <p style={italicStyle}>
 Realism was the first shot of the whole modern revolt, the moment a group of painters decided that their
 own ordinary century, exactly as it was, deserved the wall the gods had always hung on. Everything
 restless that follows in this era is, in some sense, still answering Courbet’s flat instruction: paint
 your own epoch, as it actually is.
 </p>
 </article>

 <MeanwhileSheet
 region="Russia"
 title="The same argument, in the same years, far to the east."
 body="Realism was not only a French event. In Russia, in 1863, a group of art students walked out of the Imperial Academy rather than paint the mythological subject they were assigned for the gold-medal competition, they demanded the freedom to choose their own subjects. The instinct to turn from the academy's prescribed gods toward the real contemporary world was a wave moving across European art at once, and France was simply where it broke first and loudest."
 />
 </>)

// ── Impressionism (1860s–1886), the Modern era's second movement read.
// Authored gates-first via the art content pipeline; see audits/art-pipeline/impressionism-*.
// ── Impressionism palettes ──────────────────────────────────
const MANET_PAL = ['#6a5a4a', '#332820', '#0e0a06'] as [string, string, string]
const MONET_PAL = ['#3a6a8a', '#c8c050', '#1c2a30'] as [string, string, string]
const CAILLE_PAL = ['#5a6a72', '#2e3a42', '#0e1014'] as [string, string, string]
const MORISOT_PAL = ['#9aa0a4', '#5a6066', '#1a1e22'] as [string, string, string]
const DEGAS_PAL = ['#7a6a4a', '#3a3020', '#100c08'] as [string, string, string]

// ── 1. The world that said no ───────────────────────────────
const WhyImpNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 spilling onto wide sidewalks. This is{' '}<strong>Haussmannization</strong>, the wholesale
 demolition-and-rebuild that gave Paris the look it still has today. It was brutal (whole neighborhoods
 erased, the poor pushed to the edges) and it was, visually, electric. Overnight the city had a new face:
 modern, bright, in motion, crowded with strangers and traffic and weather and light.
 </p>
 <p style={proseStyle}>
 And here was the strange thing. A young painter could walk out the door, look straight down one of those
 new boulevards (the crowd, the carriages, the smear of a rainy afternoon) and see, plainly,
 the most exciting subject any artist had ever been handed. The actual present tense, the brand-new world,
 right there. The problem was that there was nowhere to{' '}<em>show</em>{' '}it.
 </p>

 <SectionHeader accent={accent} label="The machine" title="One jury, one door, one approved kind of beauty" />
 <p style={proseStyle}>
 To understand why, you need the machine that ran French art. In one breath: there was essentially one door to a career, the{' '}<strong>Salon</strong>, the gigantic official exhibition the State ran each year, the single show where a French painter was
 made or buried. A jury decided what hung. And the jury was not running on arbitrary snobbery: the academy
 had a coherent program, a whole theory of what art was{' '}<em>for</em>. Art should morally uplift; it
 should treat the noblest, most legible subjects in a fixed hierarchy, <strong>history painting</strong>{' '}(gods, saints, kings, ancient heroes, the human body at heroic size) ranked at the very top, mere
 landscape and still life down at the bottom; and it should prove its maker had mastered the craft. The
 visible proof of that mastery was{' '}<em>fini</em>, &ldquo;finish&rdquo;: a surface so smoothly,
 invisibly worked that the brushstrokes vanished and the paint looked like polished porcelain. By Salon
 logic a proper picture showed no trace of the hand that made it, because the hand still showing meant the
 work wasn&rsquo;t{' '}<em>done</em>. It was, on its own terms, a system that made perfect sense.
 </p>
 <p style={proseStyle}>
 Now lay the modern city against that standard and watch them refuse to fit. The new Paris was fast,
 fleeting, weather-soaked, full of ordinary people doing ordinary modern things. None of that was a god or
 a king. And the only honest way to{' '}<em>catch</em>{' '}a passing moment (a glance, a flicker of
 light, steam dispersing) is fast, loose, with the strokes still showing. Which is to say: the exact
 opposite of{' '}<em>fini</em>. The subject the city was offering and the finish the jury demanded were
 chemically incompatible. You could paint the modern world, or you could pass the jury. Not both.
 </p>

 <SectionHeader accent={accent} label="The patriarch" title="Manet lights the fuse and refuses to leave the building" />
 <p style={proseStyle}>
 One man had already detonated this contradiction, loudly, and he was older than the rest.{' '}<strong>Édouard Manet</strong>{' '}(1832&ndash;1883) is the most misread figure in Impressionism. In 1863 he showed{' '}<em>Le Déjeuner sur l&rsquo;herbe</em>, a naked
 woman picnicking, perfectly at ease, beside two fully clothed modern gentlemen, staring straight out at
 the viewer with no mythological excuse whatsoever. Two years later came{' '}<em>Olympia</em>. Stand in
 front of it and what jumps you is how{' '}<em>blunt</em>{' '}it is: a nude propped on her pillows, but
 plainly a contemporary woman (a working courtesan, not a goddess) looking the viewer dead in
 the eye, cool and unembarrassed, level as a transaction. A black ribbon is tied at her throat. A maid
 leans in from the shadows holding a fat bunch of wrapped flowers, a gift just arrived; a black cat
 bristles at the foot of the bed, tail up. And the paint itself is the affront: flat, hard-edged, laid on
 in blunt slabs of light and dark where the Salon wanted soft, modeled, licked-smooth flesh. The public
 was scandalized, partly by the nudity, mostly by the refusal to dress it up as myth, and by paint
 that looked rude where it was supposed to be porcelain. (The Realism chapter tells these scandals in full;
 the point here is what they{' '}<em>did</em>{' '}to the next generation.)
 </p>
 <p style={proseStyle}>
 What they did was act like a starting gun. A circle of younger painters (Monet, Renoir, the others) saw in Manet a man putting the unvarnished modern world on a Salon-scale canvas and getting away
 with it (or at least surviving the attempt), and they gathered around him. They met to argue at the{' '}<strong>Café Guerbois</strong>, a place in the Batignolles district where, on Thursday and Sunday evenings
 through the late 1860s, the talk ran on color and light and the stupidity of the jury, with Manet at the
 center, the novelist Émile Zola defending him, and the rest leaning in.
 </p>
 <p style={proseStyle}>
 The distinction matters:{' '}<strong>Manet was not an Impressionist, and he never became one.</strong>{' '}He never once exhibited in any of the eight shows the group would later stage. For all that
 he lit their fuse and traded influence with them, his deepest wish was the one thing they were rebelling
 against, official approval, a medal at the Salon, recognition from the very machine they were
 walking away from. He submitted to that jury his whole life. Call him the reluctant patriarch who stayed
 at the Salon: the father of the family who never moved into the house. The younger painters loved him,
 learned from him, and left him behind at the front door.
 </p>
 <p style={proseStyle}>
 So that is the wall. A generation that could see the modern city perfectly, a jury that would never let it
 through, and an admired older man who showed them it could be done but refused to do it{' '}<em>with</em>{' '}them. The only way out was to stop knocking on the official door, and build their own. They
 had to figure out how to paint what they were actually seeing.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={MANET_PAL}
 imageUrl={ART_IMG.manetOlympia}
 ratio="3/2"
 alt="Manet, Olympia"
 caption={<>A reclining nude who is plainly a contemporary woman, not a goddess (cool, head-on, a black ribbon at her throat, a maid bringing a bunch of flowers, a cat bristling at her feet) painted in flat, blunt, deliberately un-licked slabs of paint. Manet&rsquo;s Salon bombshell lit the fuse for the younger painters, but he himself never joined them, chasing official approval at the Salon to the end.</>}
 credit={<>Édouard Manet,{' '}<em>Olympia</em>, 1863 · Musée d&rsquo;Orsay, Paris (NOT an Impressionist-exhibition work, Manet never showed in any of the eight)</>}
 rights="Public domain worldwide (Édouard Manet died 1883). Wikimedia Commons."
 />
 </article>

 <MeanwhileSheet
 region="Paris, the building site"
 title="The subject was being built in the street."
 body="Haussmann's boulevards were not just a backdrop, they were the new motif itself. Within a few years the grand boulevard, the café terrace, the railway station and the rainy street would become the recurring subjects of the movement: Monet would paint the Boulevard des Capucines from an upstairs window, Caillebotte the rain-slick intersections, Pissarro the boulevards seen from above. The emperor's planner had, without meaning to, painted the city's portrait first (in stone) and handed the painters their material."
 />
 </>)

// ── 2. Paint what you actually see ──────────────────────────
const EyeImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The riverbank" title="Paint what you actually see" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>L</DropCap>
 ook at a shadow on a sunny day, a shadow on snow
 is best, but pale pavement will do. You have always been told shadows are gray, or black. Look harder. On
 a bright day that shadow is faintly{' '}<em>blue</em>. Your brain, which knows perfectly well that snow is
 &ldquo;white&rdquo; and shadow is &ldquo;dark,&rdquo; has been quietly lying to you your whole life,
 editing the colors into the labels it expects. The Impressionists&rsquo; entire technical revolution can
 be summed up as: stop letting your brain edit, and paint what your eye is genuinely receiving.
 </p>
 <p style={proseStyle}>
 That sounds like nothing. It was everything, because what the eye genuinely receives is{' '}<em>colored light</em>, not objects with fixed colors. A haystack is not &ldquo;yellow.&rdquo; It is whatever the six
 a.m. light makes it, then whatever the noon light makes it, then something else entirely at five p.m., pink, lavender, orange, smoke-blue. The academy painted the{' '}<em>idea</em>{' '}of a haystack
 (local color, the label color, mixed once and laid down smooth). The Impressionists set out to paint the{' '}<em>light landing on</em>{' '}a haystack, in one particular minute, before it changed.
 </p>

 <SectionHeader accent={accent} label="The toolkit" title="Broken color, the death of black, the visible stroke" />
 <p style={proseStyle}>
 To do that they rebuilt how paint goes on the canvas, and four moves matter.
 </p>
 <p style={proseStyle}>
 First,{' '}<strong>plein air</strong>, French for &ldquo;open air,&rdquo; meaning you take the
 canvas{' '}<em>outdoors</em>{' '}and finish it there, in front of the real thing, in the real changing
 light, rather than working it up later from sketches in a dim studio. You cannot fake the actual color of
 a cloud at four o&rsquo;clock; you have to be standing under it. (Two pieces of kit made this practical, ready-made oil paint in collapsible metal tubes, an American invention of the 1840s, and the
 folding{' '}<em>box easel</em>{' '}you could sling on your back. Useful, both of them; but neither one{' '}<em>invented</em>{' '}outdoor painting, the Barbizon painters had been working outside for decades.)
 </p>
 <p style={proseStyle}>
 Second,{' '}<strong>broken color</strong>{' '}and{' '}<strong>optical mixing</strong>. Instead of carefully
 blending green paint on the palette and laying down a flat tone for grass, you stab down little separate
 strokes of pure-ish color side by side (a dab of yellow, a dab of blue, a dab of green) and
 let the{' '}<em>viewer&rsquo;s eye</em>{' '}do the blending at a distance. Stand close and it&rsquo;s a
 mess of jabs. Step back and it fuses into a shimmering, living green that a single flat tone could never
 match. (It is roughly how a screen works: tiny separate dots of color your eye combines into a picture.
 The Impressionists got there a century early, by hand, and by instinct, this was eyeballing, not a
 theory out of a book, a distinction that matters when the{' '}<em>next</em>{' '}generation turns it into
 actual science.)
 </p>
 <p style={proseStyle}>
 Third, the{' '}<strong>death of black</strong>. The academy built its shadows out of black and muddy
 browns. The Impressionists largely threw black off the palette and built shadows out of{' '}<em>color</em> (that blue shadow on the snow, a violet shadow under a tree) because that is what shadows
 actually contain when you stop editing.{' '}<strong>Colored shadows</strong>{' '}are one of the instant
 tells of an Impressionist canvas: nothing is ever simply dark.
 </p>
 <p style={proseStyle}>
 Fourth, the{' '}<strong>visible stroke</strong>. They let the brushwork{' '}<em>show</em> (the
 jab, the smear, the drag of loaded paint) instead of sanding it down to invisible{' '}<em>fini</em>. The picture wears its own making on its face. To a Salon eye trained on porcelain finish,
 this didn&rsquo;t look like daring. It looked unfinished, like a rough sketch someone had the gall to
 frame. (That title, meant as a sneer, became the movement's name.)
 </p>

 <SectionHeader accent={accent} label="London" title="Turner, Constable, and a dealer in exile" />
 <p style={proseStyle}>
 Where did the new eye get its license? Partly from across the Channel. When the{' '}<strong>Franco-Prussian War</strong>{' '}broke out in 1870&ndash;71, Monet and Pissarro fled the fighting to
 London, and there they spent their exile studying the English landscape painters{' '}<strong>J. M. W. Turner</strong>{' '}and{' '}<strong>John Constable</strong>, whose canvases were already
 doing reckless things with atmosphere, weather, and dissolved light that no Frenchman had dared. It was a
 private masterclass in painting air rather than objects. And London handed them something even more
 practical than a lesson: the dealer{' '}<strong>Paul Durand-Ruel</strong>, who had moved his own stock to
 London to keep it safe from the war, was there too. The man who would spend the next forty years keeping
 the movement financially alive met two of its founders as refugees in a foreign city. (Durand-Ruel, who kept the movement solvent through years of rejection, gets his full story later.)
 </p>

 <SectionHeader accent={accent} label="The tube" title="A useful myth, gently disarmed" />
 <p style={proseStyle}>
 It is worth pausing on a famous line that the collapsible metal{' '}<strong>paint tube</strong>{' '}&ldquo;made Impressionism possible.&rdquo; The tube was real, an American painter, John Goffe Rand,
 patented it in 1841, and ready-made tube paint in bright new synthetic pigments (chrome yellow, cobalt
 blue, viridian green) genuinely did let these painters work brighter, lighter, and faster than any
 generation before. But it didn&rsquo;t{' '}<em>cause</em>{' '}the movement. Painters had worked outdoors
 for decades before, the Barbizon landscapists (the Realism chapter covers them) were out in the
 fields with the previous generation&rsquo;s kit. The catchiest version of the legend, &ldquo;without paint
 in tubes there would have been no Impressionism,&rdquo; comes from Renoir&rsquo;s son writing a memoir in
 1962, decades after the fact, putting a quip in his father&rsquo;s mouth. Treat it as a charming
 exaggeration, not a cause. The tube was an enabler, like a good pair of boots is an enabler for a long
 walk. It did not decide where anyone walked.
 </p>

 <SectionHeader accent={accent} label="La Grenouillère" title="Two friends, one spot, the new way found" />
 <p style={proseStyle}>
 You can watch the new way of seeing get invented at a single muddy spot on the river. In the summer of
 1869{' '}<strong>Claude Monet</strong>{' '}(1840&ndash;1926) and{' '}<strong>Pierre-Auguste Renoir</strong>{' '}(1841&ndash;1919), broke, hungry, sharing what little they had, set up their easels side by
 side at{' '}<strong>La Grenouillère</strong>{' '}(&ldquo;the frog pond&rdquo;), a rowdy floating
 café-and-bathing resort on the Seine just outside Paris, the kind of cheap day-trip pleasure spot the new
 railways had put within reach of every Parisian clerk.
 </p>
 <p style={proseStyle}>
 Look at what they painted. Not a grand composition, just the dazzle of a Sunday: dark little
 rowboats clustered on water that is a churning chop of horizontal strokes, blue and green and white and
 black laid down in quick separate dashes that{' '}<em>read</em>{' '}as moving, sun-struck water the instant
 you stop staring at the individual marks. Bathers are a few flicks of paint. The dappled light coming
 through the trees is dabs. Nobody&rsquo;s face is finished; nobody needs to be. The whole thing has the
 speed of the thing it depicts. Two friends stood at the same view and each came back with a canvas that
 looked less like a &ldquo;picture&rdquo; than like a held breath of an actual afternoon.
 </p>
 <p style={proseStyle}>
 That is the year the eye changed. They didn&rsquo;t have the name yet (that was five years and one
 furious critic away) and they certainly didn&rsquo;t have a buyer. But the{' '}<em>method</em>{' '}was now real: the loose, bright, broken-color sketch, finished on the spot, treated not as a study for some
 later proper painting but as the proper painting itself. All they needed now was a wall to hang it on. The
 Salon was never going to give them one.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={MONET_PAL}
 imageUrl={ART_IMG.monetGrenouillere}
 ratio="4/3"
 alt="Monet, La Grenouillère"
 caption={<>A floating café and bathing spot on the Seine, painted on the spot in quick separate dashes, water that is a chop of blue, green, white and black strokes reading as real moving light the instant you step back, bathers reduced to a few flicks. Monet and Renoir set up side by side here in 1869; this is the new way of seeing being invented in real time.</>}
 credit={<>Claude Monet,{' '}<em>La Grenouillère</em>, 1869 · The Metropolitan Museum of Art, New York (Renoir painted the same scene that summer, easel to easel; his version is in the Nationalmuseum, Stockholm)</>}
 rights="Public domain worldwide (Claude Monet died 1926). Wikimedia Commons."
 />
 </article>
 </>)

// ── 3. The seascape they laughed at ─────────────────────────
const NameImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · April 1874" title="The seascape they laughed at" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>B</DropCap>
 y the early 1870s the younger painters had run out of patience with knocking on a door that would not
 open. The Franco-Prussian War of 1870&ndash;71 had just scattered them violently (their gifted
 friend <strong>Frédéric Bazille</strong> was killed in action, age 28, before any of this had a
 name) and the survivors came back to a Paris where the jury was no friendlier than before. So{' '}<strong>Camille Pissarro</strong>{' '}(1830&ndash;1903), the eldest of them and the closest thing the group
 had to a steady conscience, proposed the obvious heresy: stop begging the official machine for a wall.
 Build your own show.
 </p>
 <p style={proseStyle}>
 In December 1873 they did the paperwork. They formed a{' '}<strong>cooperative</strong> (a
 business that the members own and run jointly, sharing the costs and the takings) and gave it a
 name so dull it was almost a joke: the{' '}<strong>Société Anonyme des Artistes Peintres, Sculpteurs, Graveurs</strong>{' '}(&ldquo;Anonymous Society of Painters, Sculptors, Engravers&rdquo;).
 &ldquo;Anonymous&rdquo; here is just the French legal term for a joint-stock company; there was nothing
 mysterious about it. The point was independence: their own jury (which is to say, no jury), their own
 walls, their own door.
 </p>

 <SectionHeader accent={accent} label="Nadar's studio" title="Thirty painters, one franc, three thousand laughs" />
 <p style={proseStyle}>
 The first show opened on{' '}<strong>15 April 1874</strong>{' '}and ran a month. The venue tells you
 everything about their world: they borrowed the empty upstairs rooms of a famous{' '}<em>photographer</em>,{' '}<strong>Nadar</strong>, at 35 boulevard des Capucines, the photographer lending his old studio to
 the painters whose whole problem was that a camera could now do &ldquo;finish&rdquo; better than any human
 hand. Admission was one franc. Thirty-odd artists hung something like 165 to 175 works. Monet, Renoir,
 Pissarro, Sisley, Degas, Berthe Morisot, the founding core was there. Manet, characteristically,
 was not; he was still angling for the Salon and feared the company would ruin his chances.
 </p>
 <p style={proseStyle}>
 Around three and a half thousand people came. Many of them came to laugh.
 </p>

 <SectionHeader accent={accent} label="No. 98" title="A title given in a shrug, an insult given in print" />
 <p style={proseStyle}>
 Hanging in those rooms was a small canvas by Monet, barely a foot and a half tall: a hazy harbor at dawn,
 the water and sky melting into one soft gray-pink-blue murk, a few dark boats sketched in shorthand, and (the one hot note in the whole picture) a small, fierce dab of orange sun, its reflection
 broken across the water in a few quick licks. It was catalogue{' '}<strong>No. 98</strong>.
 </p>
 <p style={proseStyle}>
 It needed a title for that catalogue, and here the story is best told as Monet himself later told it (so
 take it as his own recollection, not court testimony): asked what to call it, and knowing it
 &ldquo;couldn&rsquo;t really pass as a view of Le Havre&rdquo; (too loose, too vague, too obviously <em>not</em> a finished topographical view of the port) he shrugged and said, in effect, just put{' '}<em>Impression</em>. And so it hung as{' '}<em>Impression, Sunrise</em>.
 </p>
 <p style={proseStyle}>
 That word was already drifting around the painters&rsquo; own vocabulary; one friendly critic, Jules
 Castagnary, even used &ldquo;impressionists&rdquo; approvingly that very month. But it took an enemy to
 make it stick. On 25 April 1874 a satirist named{' '}<strong>Louis Leroy</strong>{' '}published a review in
 the comic paper{' '}<em>Le Charivari</em>, and he titled it, with a sneer, &ldquo;The Exhibition
 of the Impressionists.&rdquo; He wrote it as a comic skit: he walks the show arm in arm with an invented
 stuffy academic painter who grows steadily more apoplectic at the unfinished-looking pictures. Stopping in
 front of No. 98, the punchline lands (this is the widely reproduced translation):{' '}<em>Impression, I was certain of it. I was just telling myself that, since I was impressed, there had to be some impression in it... and what freedom, what ease of workmanship! Wallpaper in its embryonic state is more finished than that seascape.</em>
 </p>
 <p style={proseStyle}>
 Wallpaper is more finished than that. There, in one line, is the whole quarrel: a critic raised on{' '}<em>fini</em>{' '}looking at the visible stroke and seeing not a method but a failure, an unfinished
 smear that someone had the nerve to frame and charge a franc for.
 </p>

 <SectionHeader accent={accent} label="The banner" title="Wearing the joke" />
 <p style={proseStyle}>
 So, to be precise about a thing the romantic version always fudges: Leroy did not invent the word from
 thin air. Monet had titled the painting; a friendly critic had already used the term kindly. What Leroy
 did was{' '}<em>weaponize</em>{' '}it, turn the painters&rsquo; own quiet word into a public joke at
 their expense, and make it stick to all of them at once.
 </p>
 <p style={proseStyle}>
 And then the painters did the thing that makes them permanently likable: they picked the insult up off the
 floor and ran it up a flagpole. Within three years (by their third exhibition in 1877) they
 had stopped fighting the name and openly called themselves{' '}<em>les Impressionnistes</em>. It is the same
 trick the Realists had pulled with &ldquo;Realism&rdquo; before them and the{' '}<strong>Fauves</strong>{' '}(&ldquo;wild beasts&rdquo;) would pull after them: take the word the enemy threw at you and wear it like a
 medal. A movement that had no manifesto, no agreed program, and no founding creed got, instead, a name, handed to it by a man who meant it as a punchline. They said thank you and put it on the door.
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
 </>)

// ── 4. A cooperative at war with itself ─────────────────────
const GroupImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1874–1886" title="A cooperative at war with itself" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 t is tempting to picture the Impressionists as a band of brothers, comrades against the jury, loyal
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
 group&rsquo;s organizing engine (tireless about staging the shows, recruiting, arguing) and
 simultaneously its great internal earthquake. He had two convictions that kept blowing the cooperative
 apart. First, a hard rule: if you showed with the independents, you were{' '}<em>forbidden</em>{' '}to also
 submit to the Salon, no hedging, no double-dipping. Second, he kept insisting on inviting his own
 allies, Realist illustrators and figure painters who weren&rsquo;t really doing the bright plein-air thing
 at all, which the landscape men resented.
 </p>
 <p style={proseStyle}>
 Picture how that played in the room. Monet, Renoir, and Sisley still needed Salon sales to eat, and
 Degas&rsquo;s no-Salon rule was, to them, a luxury demanded by men with private incomes. So when Degas
 pressed it (<em>show with us and you may not show there</em>) the landscape men simply
 walked. They sat out the show of 1879 and stayed out; by the sixth exhibition in 1881, Monet, Renoir,
 Sisley, Caillebotte, and Cézanne were{' '}<em>all</em>{' '}absent, leaving the room a largely Degas-faction
 affair stuffed with his Realist friends. The thing had nearly become two rival shows wearing one name.
 </p>
 <p style={proseStyle}>
 Then in 1882 it swung the other way, and the swing had an author: the dealer{' '}<strong>Paul Durand-Ruel</strong> (who had a great deal of his money tied up in Monet, Renoir, and
 Sisley canvases and needed those names exhibiting together) pushed to get the landscape men back in
 for what became the most purely Impressionist of the late shows. Degas, contrary to the end, abstained
 from that one in a huff rather than show beside the plein-air crowd on someone else&rsquo;s terms. The
 &ldquo;Impressionist exhibitions&rdquo; were, much of the time, an argument with the lights on.
 </p>
 <p style={proseStyle}>
 Two more painters drift through this story and matter.{' '}<strong>Paul Cézanne</strong>{' '}(1839&ndash;1906) showed in the first and third exhibitions, got savaged by the critics, and quietly
 withdrew to work alone in Provence, he{' '}<em>passed through and left</em>, and what he did next
 would help found the movement that buried Impressionism. He did not arrive untutored: around 1872, the
 patient Pissarro took the younger Cézanne under his wing out at Pontoise, painting beside him in the
 fields and coaxing him away from his early murky studio manner toward working directly from nature, Pissarro the conscience again, this time as a teacher. And{' '}<strong>Gustave Caillebotte</strong>{' '}(1848&ndash;1894, a wealthy engineer-painter) was the group&rsquo;s banker, financing
 several of the shows out of his own pocket and buying his friends&rsquo; work when no one else would.
 </p>
 <p style={proseStyle}>
 But to leave Caillebotte as the money man would be to miss a real painter. His own canvases are
 unmistakable: cool, sharp-edged, almost photographic pictures of Haussmann&rsquo;s new Paris, painted with
 a hard precision the looser Impressionists never aimed for.{' '}<em>The Floor Planers</em>{' '}(1875, three shirtless workmen scraping a parquet floor, muscled and anonymous) was rejected by the Salon
 as vulgar before he hung it at the 1876 exhibition.{' '}<em>Paris Street; Rainy Day</em>{' '}(1877) is the
 masterpiece: a vast canvas of well-dressed Parisians under umbrellas crossing a wet, gleaming boulevard
 intersection, the cobbles and the great wedge of a new apartment block rendered with an almost
 architectural exactness. He didn&rsquo;t just pay for the modern city to be painted. He painted it
 himself, harder-edged than anyone. (He also left so much of his collection to the French state in his will
 that the bequest set off a fight.)
 </p>

 <SectionHeader accent={accent} label="The dealer" title="Durand-Ruel bets everything, twice" />
 <p style={proseStyle}>
 A cooperative can hang its own pictures. It cannot, by itself, create{' '}<em>buyers</em>. For that the
 movement needed a{' '}<strong>dealer</strong>, a merchant who buys paintings from artists and
 resells them at a profit, and who, crucially, can keep an artist alive by paying for work the public
 hasn&rsquo;t learned to want yet. The Impressionists&rsquo; dealer, and one of the genuine heroes of the
 story, was{' '}<strong>Paul Durand-Ruel</strong>{' '}(1831&ndash;1922).
 </p>
 <p style={proseStyle}>
 Durand-Ruel did something nearly unheard of: he bet on these painters{' '}<em>in bulk</em>. He had met
 Monet and Pissarro in London during the war (where all three had fled), and from 1872 he began buying
 their work by the armful, not a canvas here and there, but cornering an artist&rsquo;s entire
 output, paying a steady stream so the painter could keep painting. He once bought some two dozen canvases
 out of Manet&rsquo;s studio in a single swoop. It was a radical, all-in business model: stockpile an
 unfashionable artist and wait for the world to catch up.
 </p>
 <p style={proseStyle}>
 The world took its time, and the wait nearly destroyed him. By the mid-1880s Durand-Ruel was sitting on a
 mountain of unsold Impressionist paintings and was close to bankruptcy, he had bought faster than
 France would buy from him. What saved him was a continent away. In 1886 an American association invited him
 to bring the pictures to{' '}<strong>New York</strong>, and the New York exhibitions were a hit: Americans,
 with no Salon prejudice to overcome and new money to spend, bought what Paris still mocked. It opened the
 entire American market; he opened a New York branch the next year. His own verdict was blunt and grateful:
 without America, he said, he would have been ruined after buying so many Monets and Renoirs, the
 two 1886 shows over there saved him.
 </p>
 <p style={proseStyle}>
 So follow the irony all the way down. The movement that began with a mocked seascape in a borrowed
 photographer&rsquo;s studio was, in the end, kept alive less by the country that produced it than by the
 country that imported it. The Salon never did come around in time. The buyers came from across an ocean, which is one reason so many of the greatest Impressionist canvases hang today not in Paris but in
 Chicago, Washington, and New York.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={CAILLE_PAL}
 imageUrl={ART_IMG.caillebotteParisStreet}
 ratio="4/3"
 alt="Caillebotte, Paris Street; Rainy Day"
 caption={<>Well-dressed Parisians under umbrellas crossing a wet, gleaming boulevard intersection, the cobbles and a great wedge of new apartment block rendered with almost architectural precision. Caillebotte (the group&rsquo;s wealthy financier) was also a sharp, cool, almost photographic painter of Haussmann&rsquo;s new Paris in his own right, not merely the man who paid the bills.</>}
 credit={<>Gustave Caillebotte,{' '}<em>Paris Street; Rainy Day</em>, 1877 · Art Institute of Chicago</>}
 rights="Public domain worldwide (Gustave Caillebotte died 1894). Wikimedia Commons."
 />
 </article>

 <MeanwhileSheet
 region="New York"
 title="The country that didn't say no."
 body="While Paris was still treating Impressionism as a joke or a scandal, the American market, reached through Durand-Ruel's 1886 New York shows, simply bought it. No Salon, no jury, no century of academic taste to defend, just collectors with money and no reason to be offended. It saved the dealer, opened the U.S. to the movement, and is the direct reason an American visitor today can see world-class Monets, Renoirs and Degas without crossing the Atlantic at all."
 />
 </>)

// ── 5. The women, in the rooms they were allowed ────────────
const WomenImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris" title="The women, in the rooms they were allowed" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he tote-bag version of Impressionism quietly drops something: some of the movement&rsquo;s founders,
 its most loyal members, and its sharpest operators were women, and the reason their paintings look
 the way they look is not a gentle preference for domestic things. It is a{' '}<em>wall</em>.
 </p>
 <p style={proseStyle}>
 A respectable bourgeois woman in 1870s Paris could not go where the male Impressionists went. She could
 not sit alone in a café sketching strangers. She could not loiter at the racetrack, go backstage at the
 ballet, drink at the bar of the Folies-Bergère, or stand in a working-class dance hall taking notes. Those
 modern, public, often slightly disreputable spaces (the exact spaces that were the male
 painters&rsquo; richest subject matter) were closed to her by the iron etiquette of her class. So
 the women painted what they{' '}<em>were allowed to see</em>: the drawing room, the garden, the nursery,
 women and children in private interiors. Not because their ambition was small. Because the door to
 everywhere else was bolted. The constraint is the story. Read these canvases as brilliant work done inside
 a cage, and they snap into focus.
 </p>

 <SectionHeader accent={accent} label="Berthe Morisot" title="Founder, not footnote" />
 <p style={proseStyle}>
 Start with{' '}<strong>Berthe Morisot</strong>{' '}(1841&ndash;1895), and start by deleting the word
 &ldquo;muse.&rdquo; Morisot was a{' '}<em>founding member</em>{' '}of the Société Anonyme (there at
 the start, a signer, an organizer) and she was its most faithful exhibitor after Pissarro, showing
 in all but one of the eight exhibitions (she missed only 1879, the year she had her daughter). She married
 into the circle (to Eugène Manet, brother of Édouard) but &ldquo;married into&rdquo;
 undersells her: at the very end, in 1886, she and Eugène{' '}<strong>organized and financed the eighth and final exhibition</strong>{' '}themselves. She didn&rsquo;t drift through the movement. She helped run it,
 from the first show to the last.
 </p>
 <p style={proseStyle}>
 Look at her best-known canvas,{' '}<em>The Cradle</em>{' '}(1872): her own sister, Edma, seated beside a
 gauzy bassinet, watching her sleeping daughter through the veil of netting, her hand at her cheek. It is
 painted with the lightest, most translucent touch in the whole movement (the white netting is a few
 breaths of thinned paint you can almost see through) and it is doing something the men literally could not.
 This is the female world observed{' '}<em>from inside</em>{' '}it, by someone who lived in those rooms and
 made them the subject. The tenderness is real. So is the boundary that produced it, and
 Morisot&rsquo;s answer to the boundary was not to apologize for the nursery but to paint it more finely
 than anyone alive.
 </p>

 <SectionHeader accent={accent} label="Mary Cassatt" title="The American who ran the market" />
 <p style={proseStyle}>
 <strong>Mary Cassatt</strong>{' '}(1844&ndash;1926) was the outsider&rsquo;s outsider: an American, from
 Pittsburgh, who came to Paris to be a serious painter and refused to go home. When Degas (who
 admired her work) invited her to exhibit with the independents, she weighed it and{' '}<em>accepted</em>, glad to be free of the Salon jury she had come to despise; she debuted with the group in
 1879. Her great subject was mothers and children and the interior lives of women (again, the
 territory open to her) rendered with a hard, modern, unsentimental edge and a deep debt to Japanese
 woodblock prints, whose flat planes and bold outlines she studied and openly echoed in her own color
 prints.
 </p>
 <p style={proseStyle}>
 But Cassatt&rsquo;s most consequential agency was not on the canvas at all, it was over the{' '}<em>market</em>, the very lever the women were supposedly shut out of. She had a wealthy American friend, the
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
 real talent working inside the same circle, and she died at thirty-four, of an embolism following
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
 caption={<>Morisot&rsquo;s sister Edma watches her sleeping daughter through the gauze of a bassinet, her hand at her cheek, the netting rendered in a few breaths of thinned, translucent paint. The female world observed from inside it, by a founding member of the movement who made the one room left open to a respectable woman (the nursery) into the subject of a masterpiece.</>}
 credit={<>Berthe Morisot,{' '}<em>The Cradle</em>, 1872 · Musée d&rsquo;Orsay, Paris</>}
 rights="Public domain worldwide (Berthe Morisot died 1895). Wikimedia Commons."
 />
 </article>
 </>)

// ── 6. Degas and the indoor eye ─────────────────────────────
const DegasImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The studio" title="Degas and the indoor eye" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>D</DropCap>
 egas broke the movement's own rules from the start, including the ones he had helped establish.
 </p>
 <p style={proseStyle}>
 If &ldquo;Impressionism&rdquo; means going outdoors to paint the changing light, then{' '}<strong>Edgar Degas</strong>{' '}was not an Impressionist, and he would have agreed with you, loudly. Degas{' '}<em>never painted outdoors.</em>{' '}He scorned the whole plein-air religion; he worked in his studio, from
 drawings and memory, building his pictures with the deliberation of an old-master draftsman who simply
 happened to have chosen the most modern subjects in Paris. He preferred to call himself a Realist, or an
 Independent, and he openly{' '}<em>hated</em>{' '}being lumped in as an Impressionist. (The movement&rsquo;s
 most relentless organizer despised its name, one more reason the name was never anyone&rsquo;s
 manifesto.) And yet his pictures are unmistakably part of the same revolution. Hold both facts at once;
 the contradiction is the point of the man.
 </p>

 <SectionHeader accent={accent} label="The subjects" title="Dancers, laundresses, the café, the bath" />
 <p style={proseStyle}>
 What Degas brought was the indoor modern eye, pointed at the parts of the new city the others mostly
 missed. His great recurring subject was the{' '}<strong>ballet</strong>, but not the ballet of
 the gala performance. He painted the{' '}<em>work</em>: dancers rehearsing, scratching, yawning, adjusting
 a shoe, exhausted, caught in the ungraceful in-between moments, a teacher with a stick, sunlight from a
 high studio window. He painted laundresses straining over an iron, jockeys and horses fidgeting before a
 race, women washing themselves in shallow tubs (he called it seeing them &ldquo;as if through a
 keyhole&rdquo;, the unposed body doing an ordinary private thing). It was modern life, like the
 others, but the{' '}<em>labor</em>{' '}and the awkward private instant rather than the sunny Sunday.
 </p>

 <SectionHeader accent={accent} label="The eye" title="Japonisme and the caught, off-balance moment" />
 <p style={proseStyle}>
 The look of a Degas is built from two tools. The first is the{' '}<strong>off-balance, caught moment</strong>, figures sliced by the edge of the canvas, a dancer cropped in half by the
 frame, a great swathe of empty floor where a Salon painter would have centered everything tidily. It looks
 like a snapshot grabbed before the subject could compose herself, which is exactly the modern, accidental
 feeling he was after.
 </p>
 <p style={proseStyle}>
 The second tool has a name:{' '}<em>Japonisme</em>. When Japan reopened to trade in the 1850s&ndash;60s,
 Japanese woodblock prints (<em>ukiyo-e</em>, the cheap, brilliant &ldquo;pictures of the
 floating world&rdquo; by masters like Hokusai, Hiroshige, and Utamaro) flooded into Paris and
 detonated French ideas about composition. These prints did everything the academy forbade: flat planes of
 unshaded color, daring asymmetry, high or odd viewpoints, and radical{' '}<em>cropping</em>{' '}(a figure
 casually cut off by the frame as if the world simply continued past the edge of the paper). Degas and
 Cassatt didn&rsquo;t passively absorb this; they raided it, studying the prints, owning them, and
 deliberately importing their devices into French pictures (Cassatt&rsquo;s color prints openly rework
 Utamaro&rsquo;s compositions of women at their domestic tasks). That cropped, tilted, off-center Degas
 dancer is, in part, a Paris ballet studio built on the compositional logic of a Tokyo print, borrowed on
 purpose.
 </p>
 <p style={proseStyle}>
 Look at{' '}<em>The Dance Class</em>{' '}(1874): a rehearsal room seen at a slightly high, tilted angle, the
 floor tipping up toward you, a knot of young dancers scattered unevenly across it (one scratching
 her back, one twisting to look, several merely <em>waiting</em>) an old ballet master in the
 middle leaning on his stick. No center, no symmetry, no posed climax. Just a real working room caught
 mid-yawn. There is not a square inch of open air in it, and it is one of the purest pictures the movement
 produced.
 </p>

 <SectionHeader accent={accent} label="The scandals" title="L'Absinthe and a wax girl in a real skirt" />
 <p style={proseStyle}>
 Degas&rsquo;s modern eye had an edge that could draw blood.{' '}<em>L&rsquo;Absinthe</em>{' '}(1875&ndash;76)
 takes its name from{' '}<strong>absinthe</strong>, the cheap, potent, faintly disreputable green
 spirit that was the drink of the Paris demi-monde, with a whiff of addiction and ruin about it; naming the
 picture after it was half the scandal before anyone even looked. And then you look. The two figures are
 shoved off into the upper right of the canvas (a hollow-eyed woman with a glass of the cloudy green
 liquor in front of her, a disheveled man slumped beside her) while the entire lower-left foreground
 is given over to a zig-zag of empty marble café tables marching in at a steep, vertiginous tilt. The
 palette is drained to greys and browns; the one charged note of color in the whole picture is the
 milky-green absinthe in her glass. The figures don&rsquo;t look at each other or at us; they stare past
 everything into nothing. Compositionally they are nearly crowded out of their own portrait, and
 that off-to-the-side emptiness is the picture&rsquo;s whole argument: the loneliness of the modern city,
 two people alone{' '}<em>together</em>{' '}in a crowded café, rendered without a shred of comfort. When it
 was later shown in London, critics recoiled at it as ugly and degrading, which rather missed that
 the chill was the entire point.
 </p>
 <p style={proseStyle}>
 His strangest provocation wasn&rsquo;t a painting at all. At the sixth exhibition in 1881 he unveiled{' '}<em>The Little Dancer Aged Fourteen</em>: a two-thirds-life-size{' '}<strong>wax</strong>{' '}sculpture of a
 young ballet student, and he dressed her in a{' '}<em>real</em>{' '}fabric tutu, a real bodice, a
 real ribbon in her hair, and real hair. The realism was uncanny, almost taxidermic; viewers found it
 disturbing, even monstrous, a little too much like a real specimen in a{' '}<em>vitrine</em>{' '}(a glass
 display case). It scandalized the show. It is now, of course, one of the most beloved objects in
 nineteenth-century art (cast in bronze after his death and standing in museums on three continents) which is the usual fate of these scandals: the thing that horrified one generation becomes the
 postcard the next one lines up to buy.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={DEGAS_PAL}
 imageUrl={ART_IMG.degasDanceClass}
 ratio="1/1"
 alt="Degas, The Dance Class"
 caption={<>A ballet rehearsal seen from a high, tilted angle, the floor tipping toward you, young dancers scattered unevenly (one scratching, one twisting, several just waiting) an old master leaning on his stick at the center of nothing in particular. Cropped and off-balance like a Japanese print, caught like a snapshot, and not a square inch of open air: Degas&rsquo;s indoor Impressionism.</>}
 credit={<>Edgar Degas,{' '}<em>The Dance Class</em>, 1874 · The Metropolitan Museum of Art, New York</>}
 rights="Public domain worldwide (Edgar Degas died 1917). Wikimedia Commons."
 />
 </article>
 </>)

// ── 7. Winning, slowly, separately ──────────────────────────
const LastImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Giverny" title="Winning, slowly, separately" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 icture Claude Monet in his seventies, rich and famous, standing at the edge of a pond he had dug himself.
 At Giverny, the village house he bought and then expanded, he built a water-garden (a lily pond, a
 green Japanese footbridge, banks of iris and wisteria) and spent his last decades painting it, over
 and over, on canvases so large he had a special studio raised to hold them. The man the public had once
 come to{' '}<em>laugh at</em>{' '}now had gardeners, a chauffeur, dealers competing for his work, and a
 private paradise built solely to be painted. This is where the story of &ldquo;the poor, doomed
 Impressionists&rdquo; goes to die.
 </p>
 <p style={proseStyle}>
 Because the legend is wrong, and it is worth correcting precisely. Not all of them won, and one of them
 genuinely didn&rsquo;t:{' '}<strong>Alfred Sisley</strong>{' '}(1839&ndash;1899), British-born but
 Paris-based, the most single-mindedly devoted pure landscapist of the whole group, the one who never
 wandered off into figures or fashion the way Renoir did, stayed poor his entire life and died poor,
 in 1899, just as the prices of the others were beginning to climb; the surge in{' '}<em>his</em>{' '}prices
 came only after he was in the ground, which is the cruelest possible version of recognition. Pissarro
 struggled for years before things eased. But for most of them the honest arc is &ldquo;struggled early,
 then mostly won.&rdquo; Manet and Degas had always been comfortable; Caillebotte was wealthy; and by the
 1880s Monet and Renoir were selling, traveling, prospering. Monet would die in 1926 a famous and wealthy
 man in that very water-garden. The mockery had not stopped them. It had merely been early.
 </p>
 <p style={proseStyle}>
 And as they won, they scattered, each pushing his own discovery further on his own. Monet&rsquo;s
 late move is the clearest. Having spent his life chasing the light of a single moment, he started painting
 the{' '}<em>same subject over and over</em> (a row of haystacks, the front of Rouen Cathedral) at different hours and seasons, hanging the variations together so you could see the light itself
 change across a wall. The{' '}<strong>Haystacks</strong>{' '}series (1890&ndash;91, around twenty-five
 canvases) and the{' '}<strong>Rouen Cathedral</strong>{' '}series (the 1890s, thirty-odd canvases) are the
 original Impressionist idea taken to its logical extreme: the subject barely matters; the light is the
 whole picture. It is, in a sense, the movement completing itself, and quietly pointing past itself,
 since when the object stops mattering you are already most of the way to abstraction.
 </p>

 <SectionHeader accent={accent} label="1886" title="The last show, and the picture that ended it" />
 <p style={proseStyle}>
 The eighth exhibition opened in May 1886, organized and paid for, fittingly, by Berthe Morisot and Eugène
 Manet, a movement that began in a borrowed studio ending in a show its founding woman put on
 herself. Most of the old core stayed away: no Monet, no Renoir, no Sisley, no Caillebotte. The band was
 effectively done. And then, on the wall, hung the picture that announced what was coming next.
 </p>
 <p style={proseStyle}>
 It was by a young painter named Georges Seurat, and it was enormous:{' '}<em>A Sunday on La Grande Jatte</em>, a sunny riverside park full of stiff, frozen, oddly toy-like Parisians at leisure. But look
 closely (closer than the Impressionists ever asked you to) and the entire surface is built
 from millions of tiny, separate, mechanical{' '}<em>dots</em>{' '}of pure color, applied with a deliberate,
 almost scientific precision. This is{' '}<strong>Pointillism</strong>: optical mixing turned from the
 Impressionists&rsquo; loose, intuitive eyeballing into a rigorous{' '}<em>system</em>, the dot as method,
 color theory followed like a manual. Where Monet had dashed the light down in a hurried instant, Seurat
 had spent two years assembling his light dot by dot, in the studio, on purpose.
 </p>
 <p style={proseStyle}>
 And there it was, the trap that every winning movement eventually walks into. The Impressionists
 had spent twelve years getting the world to accept the loose, the fleeting, the spontaneous, the
 dashed-off-in-a-moment. Now a younger man had hung, in their own show, a picture that took their core idea
 and made it the{' '}<em>opposite</em>, slow, frozen, systematic, premeditated. To the next
 generation, the spontaneous Impressionist instant was no longer the rebellion. It was the new
 establishment, the thing to push against. Impressionism, having finally won, had become a wall of its own.
 </p>

 <SectionHeader accent={accent} label="The bequest" title="France comes around, twenty-three years late" />
 <p style={proseStyle}>
 There is one last twist, and it is the most fitting ending the movement could have asked for, though most of them did not live to see it. When{' '}<strong>Gustave Caillebotte died on 21 February 1894</strong>, his will left his personal collection of{' '}<strong>68 Impressionist paintings</strong> (Monets, Renoirs, Degas, Pissarros, Cézannes, the work he had bought from friends when no one else
 would touch it) to the French state, on one condition: that the pictures hang not in some storeroom
 but in a national museum, as art the nation officially owned. He named{' '}<strong>Renoir as the executor</strong>{' '}to see it done.
 </p>
 <p style={proseStyle}>
 The state&rsquo;s reaction tells you the war was not yet over. The academic establishment recoiled, and by
 the standard account it was the grand academic painter{' '}<strong>Jean-Léon Gérôme</strong>{' '}who led the
 objection, reportedly aghast that the government would dignify such work by hanging it in a public
 collection at all. After a wrangle, the state agreed in an{' '}<strong>1896</strong>{' '}negotiation to
 accept only{' '}<strong>38</strong>{' '}of the 68 works. Those 38 were finally{' '}<strong>unveiled in a room of their own (the Caillebotte room) at the Musée du Luxembourg in February 1897.</strong>{' '}It does not sound like much. It was, in fact,{' '}<strong>the first time the Impressionists were shown in a public museum in France</strong>, twenty-three years after the mocked little
 seascape hung in Nadar&rsquo;s borrowed studio. The country that had laughed them out of the Salon finally
 hung them on a state wall, grudgingly, having shed a third of the gift to do it, almost a quarter of a
 century too late for the joke to sting anyone but itself.
 </p>
 <p style={proseStyle}>
 So that is how it ends. The cooperative dissolved; there was no ninth exhibition. What came after (Seurat&rsquo;s dots, Cézanne&rsquo;s slow architecture out in Provence, and the wilder painters still to
 come) belongs to what came after. That is a story for another reading. This one ends where it should, with
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
 caption={<>The same cathedral front, painted again and again at different hours (morning, full sun, dusk, fog) and hung together so the changing light, not the building, becomes the subject. Monet took the original Impressionist idea (paint one fleeting moment of light) to its logical end, and in doing so pointed quietly past the movement toward what came next.</>}
 credit={<>Claude Monet,{' '}<em>Rouen Cathedral series</em>, 1892&ndash;94 · Musée d&rsquo;Orsay, the National Gallery of Art, the Metropolitan Museum and others</>}
 rights="Public domain worldwide (Claude Monet died 1926). Wikimedia Commons."
 />
 </article>

 <MeanwhileSheet
 region="The same room, 1886"
 title="The future was hanging on the wall."
 body="Seurat's Grande Jatte debuted at the eighth and final Impressionist exhibition, inside the very show the movement had built. The painters who taught the world to love the loose, fleeting, spontaneous stroke watched a younger man hang a vast picture built from millions of slow, deliberate, systematic dots: their idea, inverted. It is the cleanest moment in this whole era of one movement handing the torch to the thing that would replace it, in its own house, on its own last night."
 />
 </>)

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
const WhyPostImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="rue Laffitte &middot; spring 1886" title="The room where it tips over" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 icture a long, hot, awkward upstairs room in Paris in late spring 1886, above a fashionable restaurant
 called the Maison Dor&eacute;e on rue Laffitte. This is the{' '}<strong>8th Impressionist Exhibition</strong>, the eighth and last group show the Impressionists would ever mount; they had been doing them since
 1874, the year a hostile critic gave them the name as a joke, running from{' '}<strong>15 May to 15 June 1886</strong>. Most of the founders are not even here. Monet, Renoir, Sisley and Caillebotte have all
 defected back to the Salon (the official state-run annual exhibition, the only door to a career in French
 art for two centuries). The cooperative is on its last legs.
 </p>
 <p style={proseStyle}>
 And the picture stopping every visitor is by a 26-year-old none of them had quite figured out. It is
 enormous (about six and a half feet tall, ten feet wide) a Sunday afternoon on a small island
 in the Seine, stiff Parisians and their dogs and parasols across a striped lawn under flat dappled light.
 And the entire surface is built out of millions of tiny separate dots of pure color, laid down like a
 mosaic. Not strokes.{' '}<em>Dots.</em>{' '}Step back four feet and it shimmers; step back ten and it locks
 into place.{' '}<strong>Georges Seurat</strong>&rsquo;s{' '}<em>A Sunday Afternoon on the Island of La Grande Jatte</em>{' '}(two years of work; now Art Institute of Chicago) is the painting that (politely, almost
 academically) kills its parents.
 </p>
 <p style={proseStyle}>
 Monet had refused to show alongside it. Pissarro, the oldest and steadiest of the Impressionists, had stood
 up for Seurat and Signac and got called a deserter by his own friends for it. The younger painters stayed.
 They had seen what the elders had done, and they thought they could see what it had missed.
 </p>

 <SectionHeader accent={accent} label="The trick the eye couldn&rsquo;t catch" title="Weight, meaning, feeling" />
 <p style={proseStyle}>
 What Impressionism had done was teach a generation to paint{' '}<em>light</em>, the flicker of
 shadow on snow, the smear of an orange sun across a gray dawn harbor. The Impressionists put the{' '}<em>instant</em>{' '}on canvas. But the instant is weightless. It doesn&rsquo;t stay. By the late 1880s the
 younger painters could see something was missing, the architecture that lasts, the{' '}<em>feeling</em>{' '}of a picture, the thing it was about.
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
 Every time, the mountain is built out of small blocky strokes of color set side by side like masonry, not blended, not dissolved, but stacked into planes of weight.
 </p>
 <p style={proseStyle}>
 What he is doing, in the year the Seurat hangs in Paris, is the exact opposite of Impressionism. The
 Impressionists tried to catch the instant of light eating the world. C&eacute;zanne is trying to find the{' '}<em>thing the light is eating</em>, the structure that survives weather and time. The mountain
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
 caption={<>The mountain east of Aix that C&eacute;zanne painted around thirty times in oil and many more in watercolor, built up out of small blocky strokes of color set side by side like masonry, not blended, not dissolved, but stacked into planes of weight. The Impressionists chased the instant of light eating the world; C&eacute;zanne was after the thing the light was eating.</>}
 credit={<>Paul C&eacute;zanne,{' '}<em>Mont Sainte-Victoire with Large Pine</em>{' '}&middot; one of about thirty oils of the same ridge, early 1880s&ndash;1906</>}
 rights={PD_CEZANNE}
 />
 </article>
 </>)

// ── 2. The five who weren&rsquo;t a group ───────────────────
const FivePostImpNarrative: Narrative = ({ accent }) => (<>
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
 decade and died in 1895. Paul Signac, &Eacute;mile Bernard, Bonnard, Vuillard, the field around the
 five anchors is most of the following chapters&rsquo; true subject. The
 five are the figures Fry put on the wall; they are not the only figures who were painting.
 </p>

 <SectionHeader accent={accent} label="The five, one line each" title="A table of contents, in faces" />
 <p style={proseStyle}>
 These are the short versions; each anchor gets a longer read of his own. These are the
 tags.
 </p>
 <p style={proseStyle}>
 <strong>Paul C&eacute;zanne</strong>{' '}(1839&ndash;1906; Aix-en-Provence). The architect. He wanted to take
 the Impressionist palette and use it to rebuild the picture out of solid planes, geometry that lasts.
 (Chapter 3.)
 </p>
 <p style={proseStyle}>
 <strong>Vincent van Gogh</strong>{' '}(1853&ndash;1890; Dutch, working in France). The colorist of feeling.
 Color was not optics; color was what yellow{' '}<em>did</em>{' '}to the man standing in the wheatfield. A
 ten-year career, about 900 canvases, one painting sold for real money. (Chapter 4.)
 </p>
 <p style={proseStyle}>
 <strong>Paul Gauguin</strong>{' '}(1848&ndash;1903; ex-stockbroker, dies in the Marquesas). The synthesist.
 Flat areas of saturated color, dark contour lines, the picture&rsquo;s{' '}<em>meaning</em>{' '}on the surface, and a life whose colonial frame the 21st century cannot skim past. (Chapter 5.)
 </p>
 <p style={proseStyle}>
 <strong>Georges Seurat</strong>{' '}(1859&ndash;1891; Paris). The scientist. He took Chevreul&rsquo;s and
 Rood&rsquo;s color theory and built{' '}<strong>Divisionism</strong> (what outsiders called <strong>Pointillism</strong>) small separate dots of pure pigment, optically combining in the eye.
 Dead at 31. (Chapter 6.)
 </p>
 <p style={proseStyle}>
 <strong>Henri de Toulouse-Lautrec</strong>{' '}(1864&ndash;1901; Albi-born, Montmartre by adoption). The
 chronicler. He painted the cabaret at midnight, made the modern poster a fine-art medium, and drank himself
 to death at 36. (Chapter 6.)
 </p>
 <p style={proseStyle}>
 These five lived in different rooms (Aix, Auvers, Pont-Aven and then Tahiti, Paris, Montmartre) and sometimes hated each other (Gauguin and Van Gogh in Arles, December 1888, will turn out badly).
 They got grouped because, in{' '}<strong>1910</strong>, an English critic named{' '}<strong>Roger Fry</strong>{' '}needed a name for a roomful of pictures he had borrowed for a London gallery. By 1910, C&eacute;zanne had
 been dead four years, Van Gogh twenty, Gauguin seven, Seurat nineteen, Lautrec nine. Not one of the five
 was alive to argue with him. He called them, in want of a better word,{' '}<em>Post-Impressionists</em>.
 Chapter 8 is the story of how that room came together.
 </p>
 </article>
 </>)

// ── 3. C&eacute;zanne, the cylinder, the sphere, the cone ──
const CezannePostImpNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 the family farmhouse outside Aix), two or three local farm laborers at a small wooden table, a bottle
 between them, looking down at their cards in silence. Peasant gravity rendered with the seriousness
 Caravaggio would have given a saint. The fifth sold privately in 2011 for a figure between $250 and $320
 million, at the time the highest price ever paid for a painting.
 </p>
 <p style={proseStyle}>
 The{' '}<strong>Bathers</strong>{' '}(three large versions, 1890s&ndash;1905). The biggest, at the
 Philadelphia Museum of Art, is about 7 ft &times; 8 ft 2 in, and C&eacute;zanne worked on it for seven
 years. The figures are blocky, with mask-like faces; the trees lean inward to form a Gothic arch over the
 scene. This is not eroticism; it is architecture made of bodies. (The Bathers will haunt Picasso when he
 paints the{' '}<em>Demoiselles d&rsquo;Avignon</em>{' '}in 1907.)
 </p>
 <p style={proseStyle}>
 And{' '}<strong>Mont Sainte-Victoire</strong>, about 30 oils and many more watercolors, early
 1880s to 1906. The early versions are recognizable landscapes. The late ones, from the studio he built at{' '}<strong>Les Lauves</strong>{' '}in 1902, strip out almost everything; by 1906 the mountain is a slope of
 overlapping blue and green and orange planes with the white of the canvas showing through. It has become
 its own scaffolding.
 </p>

 <SectionHeader accent={accent} label="15 April 1904" title="One sentence" />
 <p style={proseStyle}>
 Here Cézanne arrives at the three principles every modernist painter after him used.
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
 sketcher&rsquo;s piece of advice. What Picasso and Braque and Bernard himself did with the sentence (quote it back at the world as the founding theorem of modern art) was their decision, not
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
 retrospective (about 56 works, late ones included) and every young painter in Paris filed
 through it. Picasso was 25, Braque 25, Matisse 37, Derain 27, Vlaminck 31. They all came out of it changed.
 </p>
 <p style={proseStyle}>
 Picasso would say, later, that{' '}<em>&ldquo;C&eacute;zanne was my one and only master.&rdquo;</em>{' '}Within
 months of the 1907 retrospective Picasso was painting{' '}<em>Les Demoiselles d&rsquo;Avignon</em>, the
 picture with which Cubism begins. (Cubism picked this up directly.) The cumulative effect of the late
 C&eacute;zannes coming out of Aix into Paris is the single most concentrated transmission line in modern
 art. The mountain refused to dissolve, and the young men in Paris saw it.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={PI_CEZ}
 imageUrl={ART_IMG.cezanneBathers}
 ratio="4/3"
 alt="C&eacute;zanne, The Large Bathers"
 caption={<>The biggest of the three late Bathers, at the Philadelphia Museum of Art, about 7 ft &times; 8 ft 2 in; C&eacute;zanne worked on it for seven years. The figures are blocky, with mask-like faces; the trees lean inward to form a Gothic arch over the scene. Not eroticism, architecture made of bodies, the painting that will haunt Picasso when he comes to the{' '}<em>Demoiselles d&rsquo;Avignon</em>{' '}in 1907.</>}
 credit={<>Paul C&eacute;zanne,{' '}<em>The Large Bathers</em>, 1900&ndash;06 &middot; Philadelphia Museum of Art</>}
 rights={PD_CEZANNE}
 />
 </article>
 </>)

// ── 4. Van Gogh, the yellow house, the wheat, the gun ──
const VanGoghPostImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Zundert &middot; 1853" title="A late start, a brother" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he hardest fact about Van Gogh, the one the romance always blurs, is how{' '}<em>late</em>{' '}he started.{' '}<strong>Vincent van Gogh</strong>{' '}was born in{' '}<strong>Zundert</strong>{' '}(a village in the southern
 Netherlands) on{' '}<strong>30 March 1853</strong>, the eldest son of a Dutch Reformed pastor. He did not
 begin to paint seriously until{' '}<strong>1881</strong>, when he was 28. He died nine years and four months
 later, at 37, a career shorter than a college sports star&rsquo;s.
 </p>
 <p style={proseStyle}>
 He had tried to be an art dealer at Goupil &amp; Cie (1869&ndash;1876), fired for temperament; and a lay
 preacher in the{' '}<strong>Borinage</strong>{' '}coal-mining district of southern Belgium, dismissed for
 &ldquo;excessive zeal.&rdquo; His younger brother{' '}<strong>Theo van Gogh</strong>{' '}(1857&ndash;1891), by
 the 1880s a dealer in Paris at Boussod, Valadon &amp; Cie, sent him money every month from the late 1870s
 until Vincent&rsquo;s death. Without Theo there is no painter Van Gogh.
 </p>
 <p style={proseStyle}>
 Vincent spent his first five years painting peasants in muddy browns, <em>The Potato Eaters</em>{' '}(1885, Van Gogh Museum) the most famous. The colors are Rembrandt&rsquo;s. In{' '}<strong>March 1886</strong>{' '}he moved to Paris, into Theo&rsquo;s apartment on the rue Lepic in Montmartre, and met the Impressionists.
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
 yellow, cobalt blue and brick red. And he painted the sunflowers, <strong>fifteen</strong>{' '}giant
 single-stalked sunflowers in a yellow vase against a yellow wall (National Gallery, London; F.454, August
 1888), as decoration for the spare bedroom he was preparing for{' '}<strong>Paul Gauguin</strong>{' '}(Chapter 5), who arrived broke on{' '}<strong>23 October 1888</strong>.
 </p>

 <SectionHeader accent={accent} label="October&ndash;December 1888" title="Nine weeks, two painters, one ear" />
 <p style={proseStyle}>
 What followed was nine weeks of co-habitation that destroyed the friendship and produced, partly out of
 adrenal terror, some of the best work either painter ever made. They argued constantly, Gauguin
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
 year, some of his most famous canvases, including{' '}<em>The Starry Night</em>, painted in{' '}<strong>June 1889</strong>{' '}from memory and the view out his barred east-facing window (MoMA, New York;
 about 2 ft 5 in &times; 3 ft 0&frac14; in). It is the most reproduced picture in Western art after the{' '}<em>Mona Lisa</em>, and Van Gogh painted it locked up. The work was made{' '}<em>in spite of</em>{' '}the
 suffering, not because of it; the madness-genius myth gets the arrow exactly backward.
 </p>

 <SectionHeader accent={accent} label="Auvers &middot; summer 1890" title="The wheatfield and the gun" />
 <p style={proseStyle}>
 In May 1890 he left Saint-R&eacute;my and travelled about twenty miles north of Paris to{' '}<strong>Auvers-sur-Oise</strong>, under the care of{' '}<strong>Dr Paul Gachet</strong>, a homeopathic
 physician who painted on the side. (Van Gogh&rsquo;s{' '}<em>Portrait of Dr Gachet</em>{' '}sold at
 Christie&rsquo;s New York in 1990 for $82.5 million, for years the auction record for an
 Impressionist or Post-Impressionist work.) He painted Auvers in a frenzy, the town church, the
 wheatfields,{' '}<em>Wheatfield with Crows</em>{' '}(Van Gogh Museum), a roiling blue-black sky with a flock
 of crows lifting off.
 </p>
 <p style={proseStyle}>
 On the afternoon of{' '}<strong>Sunday, 27 July 1890</strong>, Van Gogh walked out into a field near Auvers
 and shot himself in the chest with a small revolver. The shot did not kill him. He staggered back to the{' '}<strong>Auberge Ravoux</strong>, the inn where he was lodging. Two doctors couldn&rsquo;t get at the bullet.
 Theo arrived the next morning. Vincent died around 1:30 a.m. on{' '}<strong>29 July 1890</strong>, with Theo
 at his side. He was 37. Theo reported his last words to their mother as{' '}<em>&ldquo;La tristesse durera toujours&rdquo;</em>, <em>&ldquo;the sadness will last forever.&rdquo;</em>{' '}(One hedge: in 2011 the
 biographers Naifeh and Smith argued he was shot by a local boy, not by his own hand; the Van Gogh Museum
 still treats it as suicide.)
 </p>
 <p style={proseStyle}>
 <strong>Theo</strong>{' '}died six months later, on{' '}<strong>25 January 1891</strong>, age 33, of
 complications from syphilis. His wife{' '}<strong>Jo</strong>{' '}was left with a one-year-old baby (also
 named Vincent), hundreds of Vincent&rsquo;s letters, and most of the unsold paintings. She spent the rest
 of her life building Vincent&rsquo;s posthumous reputation; she is the reason the Van Gogh Museum exists.
 Vincent sold one painting in life at a real price, <em>The Red Vineyard</em>, bought by the
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
 </>)

// ── 5. Gauguin, Pont-Aven, Tahiti, the colonial question ──
const GauguinPostImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris &middot; 1882" title="The crash, the wife, the leap" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 <strong>aul Gauguin</strong>{' '}was born in Paris on{' '}<strong>7 June 1848</strong>, son of a French
 journalist father and a Peruvian-French mother. When he was 1, the family sailed for Peru; his father died
 en route. The boy grew up in{' '}<strong>Lima</strong>{' '}until he was 7, that early displacement
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
 a field of pure flat red, the kind of red a child reaches for first in a paint box.
 </p>
 <p style={proseStyle}>
 Where is the wrestling really happening? Not in the field. It is in the{' '}<em>minds</em>{' '}of the Breton
 women, who heard the sermon, closed their eyes, and{' '}<em>imagined</em>{' '}it. The painter has put the
 inside of their imagination on the canvas as a separate zone. The whole machinery of &ldquo;a picture as a
 window&rdquo; is dismantled. What you are looking at is{' '}<em>meaning</em>, painted directly. (Gauguin
 tried to give the canvas to the parish church; the priest refused, he could see the picture was{' '}<em>about</em>{' '}the women, not{' '}<em>about</em>{' '}Jacob.)
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
 arriving in Papeete on 9 June. He had told the friends who saw him off (the Symbolist writers
 Mallarm&eacute; and Charles Morice) that he was going to find a{' '}<em>primitive</em>, pre-Christian
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
 He painted there anyway, and what he painted was extraordinary, the saturated, flat-color, dreamlike
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
 It is important not to project 21st-century legal categories backward without thinking (adolescent
 marriage was legal and common in late-19th-century France and across French colonial territory) and
 it is also important not to use that context to disappear what these relationships actually were. Gauguin
 was a European man in his 40s using colonial power and money to set up sexual partnerships with Polynesian
 girls who could not, by any honest reading, have refused him on equal terms. Several of his greatest
 paintings (<em>Mana&ograve; tupapa&uacute;</em> among them) depict these girls. The
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
 </>)

// ── 6. Seurat&rsquo;s dots, Lautrec&rsquo;s posters ──────────
const SeuratLautrecPostImpNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris &middot; 1884" title="A jury-free Salon" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n{' '}<strong>1884</strong>, a group of younger Paris painters, exhausted by the official Salon&rsquo;s
 rejections, founded the{' '}<strong>Soci&eacute;t&eacute; des Artistes Ind&eacute;pendants</strong>: no
 jury, no prizes, no medals. Anyone who paid dues could hang. The first{' '}<strong>Salon des Ind&eacute;pendants</strong>{' '}ran from 15 May to 1 July 1884 in a temporary exhibition pavilion on the
 Champs-&Eacute;lys&eacute;es. Among the founders were{' '}<strong>Paul Signac</strong>,{' '}<strong>Odilon Redon</strong>,{' '}<strong>Albert Dubois-Pillet</strong>,{' '}<strong>Henri Edmond Cross</strong>, and a
 24-year-old painter whose first major canvas, a six-and-a-half-by-ten-foot picture of working-class
 Parisians sunbathing on the Asni&egrave;res riverbank, had just been rejected by the official Salon. They
 hung his rejected picture instead. The 24-year-old was{' '}<strong>Georges Seurat</strong>.
 </p>

 <SectionHeader accent={accent} label="Seurat" title="A short life, a long method" />
 <p style={proseStyle}>
 <strong>Georges-Pierre Seurat</strong>{' '}was born in Paris on{' '}<strong>2 December 1859</strong>. He
 trained academically, first a free local drawing school, then in{' '}<strong>1878</strong>{' '}at the{' '}<strong>&Eacute;cole des Beaux-Arts</strong>{' '}under{' '}<strong>Henri Lehmann</strong>, a pupil of Ingres.
 So Seurat, alone among the Post-Impressionist anchors, came up through the official system. He drew the way
 they had drawn it at the &Eacute;cole for fifty years, patient, meticulous, the figure constructed
 out of clearly modelled tonal values.
 </p>

 <SectionHeader accent={accent} label="Optical mixing" title="The trick that names the chapter" />
 <p style={proseStyle}>
 The pointillist trick (the term comes later, Seurat preferred{' '}<em>divisionism</em>,
 &ldquo;dividing&rdquo; each tone into its components) is built on what the French chemist{' '}<strong>Michel Eug&egrave;ne Chevreul</strong>{' '}had worked out half a century earlier as the{' '}<em>law of simultaneous contrast</em>. Place a pure red dot beside a pure green dot on the canvas. At reading distance,
 your eye doesn&rsquo;t see two dots; it averages them, and the resulting muddy brown looks brighter and
 more alive than the same brown mixed on a palette. Physically the pigment is still pigment; optically, the
 light bouncing off the canvas does the mixing in your eye. The canvas becomes, in effect, a primitive
 projector.
 </p>
 <p style={proseStyle}>
 Seurat read the rest of the theory, Chevreul&rsquo;s 1839 book, Charles Blanc&rsquo;s{' '}<em>Grammaire des arts du dessin</em>{' '}(1867), the American physicist Ogden Rood&rsquo;s{' '}<em>Modern Chromatics</em>{' '}(1879, translated into French in 1881). Out of these he built his method. The critic{' '}<strong>F&eacute;lix F&eacute;n&eacute;on</strong>{' '}named it{' '}<em>N&eacute;o-Impressionnisme</em>{' '}in 1886;
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
 meningitis, pneumonia, infectious angina, or diphtheria, the record is unclear. His infant son by
 his common-law partner Madeleine Knobloch died of the same illness days later. The career was seven years
 long.
 </p>

 <SectionHeader accent={accent} label="Toulouse-Lautrec" title="Open at the canvas" />
 <p style={proseStyle}>
 Start with the picture.{' '}<em>At the Moulin Rouge</em>{' '}(1892&ndash;95, Art Institute of Chicago; about 4
 ft 0&frac12; in &times; 4 ft 7&frac14; in). The famous Moulin Rouge at its tables. Five regulars sit around
 a center table; in the background a small group walks toward us, with Lautrec himself painted in, the short top-hatted man beside his tall cousin Gabriel. In the right foreground a face looms up close,
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
 He drank himself to death, absinthe mostly, with syphilis on top. He died at his mother&rsquo;s{' '}<strong>Ch&acirc;teau Malrom&eacute;</strong>, in Gironde, on{' '}<strong>9 September 1901</strong>, age 36.
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
 </>)

// ── 7. The Nabis and the wider field ─────────────────────────
const NabisPostImpNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="October 1888 &middot; Pont-Aven" title="A cigar-box panel" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he wider cast of Post-Impressionism begins in October 1888 in the Brittany village we left in Chapter 5.{' '}<strong>Paul S&eacute;rusier</strong>{' '}(1864&ndash;1927), a 24-year-old French painter and a student at the{' '}<strong>Acad&eacute;mie Julian</strong>{' '}(a private Paris art school founded in 1867 that took the students
 the &Eacute;cole des Beaux-Arts wouldn&rsquo;t), was on holiday in Pont-Aven and asked Gauguin for a lesson.
 </p>
 <p style={proseStyle}>
 Gauguin took him out to a small wood by the river called the{' '}<strong>Bois d&rsquo;Amour</strong>, set him
 in front of trees reflected in the Aven, and gave him a small wooden panel, a cigar-box lid.
 Gauguin&rsquo;s instruction (as S&eacute;rusier later told it to Maurice Denis) was something like:{' '}<em>What do you see, that tree? Is it really green? Then use green, the most beautiful green on your palette. And that shadow, rather blue? Don&rsquo;t be afraid to paint it as blue as possible.</em>{' '}Use pure
 color. Don&rsquo;t blend.
 </p>
 <p style={proseStyle}>
 The panel S&eacute;rusier brought back is tiny (about 10&frac12; &times; 8&frac12; inches, oil on wood) and
 shows flat patches of orange, green, blue and red that{' '}<em>read</em>{' '}as a landscape only if you already
 know it&rsquo;s a landscape. His fellow students at the Acad&eacute;mie Julian lost their minds over it.
 They named the panel{' '}<strong>Le Talisman</strong>{' '}and treated it like a religious icon (now
 Mus&eacute;e d&rsquo;Orsay, RF 1985-13). And they named themselves, in late 1888, the{' '}<strong>Nabis</strong>, the Hebrew word for &ldquo;prophets,&rdquo; picked by a Hebraist friend on
 the self-mocking ground that they were now the prophets of a new art. The core members were S&eacute;rusier,{' '}<strong>Pierre Bonnard</strong>,{' '}<strong>&Eacute;douard Vuillard</strong>,{' '}<strong>Maurice Denis</strong>,
 and a wider circle of about a dozen. They met weekly at Paul Ranson&rsquo;s studio (which they jokingly
 called &ldquo;the Temple&rdquo;).
 </p>

 <SectionHeader accent={accent} label="Maurice Denis" title="A teenager writes the catechism" />
 <p style={proseStyle}>
 In{' '}<strong>August 1890</strong>, in a periodical called{' '}<em>Art et Critique</em>, an essay titled{' '}<em>D&eacute;finition du n&eacute;o-traditionnisme</em>{' '}appeared, signed{' '}<em>Pierre Louis</em>{' '}(a pen
 name). It contained the line the 20th century would quote at every student who ever picked up a brush:{' '}<em>&ldquo;Remember that a picture (before being a battle horse, a nude woman, or any other anecdote) is essentially a flat surface covered with colors assembled in a certain order.&rdquo;</em>
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
 <strong>Pierre Bonnard</strong>{' '}(1867&ndash;1947) painted his lifelong companion{' '}<strong>Marthe</strong>{' '}(born Maria Boursin; they finally married in 1925 after thirty years together) over and over, in the
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
 One older painter belongs here even though she stood with the Impressionists at every show that mattered.{' '}<strong>Berthe Morisot</strong>{' '}(1841&ndash;1895), Manet&rsquo;s sister-in-law and, more importantly,
 his peer, kept painting through the early Post-Impressionist decade in a hand that loosened year
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
 Divisionist. After Seurat&rsquo;s death in 1891, Signac became the propagandist, his 1899{' '}<em>D&rsquo;Eug&egrave;ne Delacroix au n&eacute;o-impressionnisme</em>{' '}codified Divisionism as a coherent
 theory. He ran the Salon des Ind&eacute;pendants for almost three decades. His own great picture is{' '}<em>Portrait of F&eacute;lix F&eacute;n&eacute;on</em>{' '}(1890, MoMA): the critic who had named
 N&eacute;o-Impressionnisme rendered as a dapper top-hatted profile against a swirling, dot-by-dot field of
 colored arabesques.
 </p>
 <p style={proseStyle}>
 <strong>Odilon Redon</strong>{' '}(1840&ndash;1916). The Symbolist tributary. Until about 1895 he painted{' '}<em>noirs</em>, disturbing dreamlike charcoals of floating eyes, spider-faced creatures, monsters.
 Then around 1895 he switched to pastel and oil, and his late style is the photographic negative of his
 early one: luminous, saturated bouquets of flowers on dark grounds.
 </p>
 <p style={proseStyle}>
 <strong>Mary Cassatt</strong>{' '}(1844&ndash;1926). Pittsburgh-born, French-resident from 1874 onward, the
 only American in the inner circle of the Impressionist exhibitions (recruited by Degas). Her late work is
 overtly indebted to Japanese prints, flat color, hard outlines, off-center cropping.{' '}<em>The Child&rsquo;s Bath</em>{' '}(1893, Art Institute of Chicago) is the signature canvas: a mother in a striped dress
 bending forward to wash her young child&rsquo;s feet in a white china basin, seen from a high vantage that
 flattens the floor into a decorative pattern.
 </p>
 <p style={proseStyle}>
 By 1900 there are not five Post-Impressionists; there are forty or fifty painters working in clusters
 across France, each pulling away from Impressionism in their own direction. All they need is somebody to
 walk into the room and put a name on the door.
 </p>
 </article>
 </>)

// ── 8. How a category got its name ───────────────────────────
const FryPostImpNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 Seurat, Signac, S&eacute;rusier, Vallotton. (Henri Rousseau,{' '}<em>Le Douanier</em> (the self-taught
 customs officer who painted dreamlike jungles he had never seen) would be hung in the 1912 sequel.)
 </p>
 <p style={proseStyle}>
 Fry, late at night against a printer&rsquo;s deadline, scribbled out the running title{' '}<strong>Manet and the Post-Impressionists</strong>. He later told{' '}<em>The Nation</em>{' '}(1911) that he had picked the name
 almost on the fly (he had rejected alternatives like &ldquo;expressionists&rdquo;) and needed
 an umbrella elastic enough to cover all of them without committing to any program. The show opened on{' '}<strong>8 November 1910</strong>{' '}and ran through{' '}<strong>15 January 1911</strong>.
 </p>

 <SectionHeader accent={accent} label="&ldquo;An extremely bad joke or a swindle&rdquo;" title="The London press loses its mind" />
 <p style={proseStyle}>
 The press response was one of the great public freak-outs in art history.{' '}<strong>Wilfrid Scawen Blunt</strong>{' '}recorded the show as &ldquo;either an extremely bad joke or a swindle&rdquo;, the paintings
 &ldquo;the work of madmen.&rdquo;{' '}<strong>Robert Ross</strong>{' '}(Oscar Wilde&rsquo;s executor) wrote in
 the{' '}<em>Morning Post</em>{' '}that the show was a widespread plot to destroy the whole fabric of European
 painting.{' '}<em>The Times</em>{' '}called it &ldquo;the rejection of all that civilization has done.&rdquo;
 The phrase &ldquo;the work of a lunatic&rdquo; appears across more than a dozen reviews.
 </p>
 <p style={proseStyle}>
 In absolute terms it was a commercial success, about{' '}<strong>25,000 visitors</strong>{' '}over two
 months, gate around{' '}<strong>&pound;4,600</strong>. Many had come to laugh. The{' '}<strong>Bloomsbury Group</strong>{' '}(Fry, Vanessa Bell, Clive Bell, Virginia Woolf, Lytton Strachey, John Maynard Keynes, Duncan
 Grant) coalesced around the defense. Virginia Woolf&rsquo;s retrospective epitaph, in a 1924 lecture
 published as{' '}<em>Mr Bennett and Mrs Brown</em>, has overgrown its own context:{' '}<strong>&ldquo;On or about December 1910 human character changed.&rdquo;</strong>{' '}Woolf meant a whole shift in modernist
 sensibility, not just the Grafton, but the Grafton was what she had at the back of her mind.
 </p>

 <SectionHeader accent={accent} label="The question the outrage did not include" title="An empire&rsquo;s blind spot" />
 <p style={proseStyle}>
 One thing the outrage did not include. London in 1910 was the capital of an empire at maximum extent, about a quarter of the world&rsquo;s land and a fifth of its people answered to it. Among the
 pictures the Grafton crowd was shoving in to see were Gauguin&rsquo;s Tahitians: nude teenage girls painted
 in a French colony in the South Pacific, on their way back across the Channel after a sale by his estate.
 They were trophies of one empire on display in the capital of another, and the press storm (about
 whether they were <em>art</em>) never quite reached the question of how they had got there. That
 question was asked in 1910 in Tahiti and Britain (and the Congo, and Bengal, and many rooms a Roger Fry
 never set foot in). It was not asked at the Grafton.
 </p>
 <p style={proseStyle}>
 What Fry himself would later say about these pictures, in his 1920 book{' '}<em>Vision and Design</em>, was
 that the art on the Grafton walls &ldquo;aimed not at illusion but at reality.&rdquo;
 </p>

 <SectionHeader accent={accent} label="The sequel (1912) and the Armory crossing, 1913" title="The category goes international" />
 <p style={proseStyle}>
 In{' '}<strong>1912</strong>{' '}Fry mounted a{' '}<strong>Second Post-Impressionist Exhibition</strong>{' '}at the
 Grafton (5 October &ndash; 31 December 1912; poster by Vanessa Bell and Duncan Grant). The French section,
 selected by Fry, included about 5 C&eacute;zannes, 19 Matisses, 13 Picassos, plus Derain, Vlaminck, Bonnard, and Rousseau, hung among the moderns. By Christmas 1912{' '}<em>Post-Impressionism</em>{' '}was a known
 category in the English-speaking world.
 </p>
 <p style={proseStyle}>
 The Atlantic crossing happened the next year. The{' '}<strong>International Exhibition of Modern Art</strong> (the <strong>Armory Show</strong>) opened on{' '}<strong>17 February 1913</strong>{' '}at the
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
 <strong>C&eacute;zanne</strong>{' '}had been dead{' '}<strong>four years</strong>, died Aix, 22
 October 1906.{' '}<strong>Van Gogh</strong>{' '}had been dead{' '}<strong>twenty years</strong>, died
 Auvers, 29 July 1890.{' '}<strong>Gauguin</strong>{' '}had been dead{' '}<strong>seven years</strong>, died Hiva Oa, 8 May 1903.{' '}<strong>Seurat</strong>{' '}had been dead{' '}<strong>nineteen years</strong>, died Paris, 29 March 1891.{' '}<strong>Toulouse-Lautrec</strong>{' '}had been dead{' '}<strong>nine years</strong>, died Ch&acirc;teau Malrom&eacute;, 9 September 1901.
 </p>
 <p style={proseStyle}>
 The name was retrospective. The room was retrospective. The category itself was a London critic&rsquo;s
 late, improvised umbrella for five French painters who had never met as a group, never written a manifesto,
 never agreed about anything, and were all in their graves before the umbrella opened. The name stuck,
 anyway, because the public didn&rsquo;t have a better one.
 </p>
 <p style={proseStyle}>
 What that umbrella covered was the bridge from Impressionism into 20th-century modernism. Without those
 five painters (and the wider cast around them, the Nabis, the pointillists, the Symbolists) there is no{' '}<strong>Fauvism</strong>{' '}(Matisse and Derain at the Salon d&rsquo;Automne in 1905), no{' '}<strong>Die Br&uuml;cke</strong>{' '}(Dresden, 1905, lit fuse Van Gogh and Gauguin), no{' '}<strong>Der Blaue Reiter</strong>{' '}(Munich, 1911, lit fuse Gauguin and C&eacute;zanne), no{' '}<strong>Cubism</strong>{' '}(Picasso and Braque, 1907&ndash;14, direct out of the late C&eacute;zanne), and no{' '}<strong>abstraction</strong>{' '}(Kandinsky in{' '}<em>Concerning the Spiritual in Art</em>, 1911, citing
 C&eacute;zanne by name).
 </p>
 <p style={proseStyle}>
 Five painters and a wider cast. Five answers to one question, <em>what comes after Impressionism?</em>, and one English critic, hanging a London show on a printer&rsquo;s deadline, who
 needed a name and gave them the only one we now use. The mountain refused to dissolve. The wheatfield kept
 burning. The Breton women kept seeing things their eyes couldn&rsquo;t see. The dots kept building the
 Sunday lawn. The cabaret lights kept catching on the dancers&rsquo; faces. And then, around the turn of the
 new century, the painters all died, one by one, and a generation of younger painters in Paris and Munich
 and Dresden and London picked up the pieces and ran with them.
 </p>
 <p style={proseStyle}>
 That generation built what came after.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={PI_VG}
 imageUrl={ART_IMG.vanGoghSelf}
 ratio="4/5"
 alt="Van Gogh, Self-Portrait"
 caption={<>One of the faces on Roger Fry&rsquo;s Grafton walls in November 1910. By the time the London public was filing past it, Van Gogh had been dead twenty years. The name above the room (<em>Manet and the Post-Impressionists</em>) was scribbled out by Fry late at night against a printer&rsquo;s deadline. It stuck anyway.</>}
 credit={<>Vincent van Gogh,{' '}<em>Self-Portrait</em>, 1889 &middot; Mus&eacute;e d&rsquo;Orsay, Paris</>}
 rights={PD_VANGOGH}
 />
 </article>
 </>)

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
const ColorsOldJobNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 </>)

// ── 2. Two studios, one fuse ────────────────────────────────
const TwoStudiosNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 </>)

// ── 3. Collioure ────────────────────────────────────────────
const CollioureNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 existed. The key thing to keep: the movement was fully invented, on
 canvas, in a fishing port, before the art world had any idea what to call it or any chance to be
 appalled. The appalling came in the autumn, in Paris, in a room that would get a nickname.
 </p>
 </article>
 </>)

// ── 4. The cage of wild beasts ──────────────────────────────
const CageNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 </>)

// ── 5. The wild band ────────────────────────────────────────
const WildBandNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 </>)

// ── 6. The air goes out ─────────────────────────────────────
const AirGoesOutNarrative: Narrative = ({ accent, onZoom }) => (<>
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
 </>)

// ─────────────────────────────────────────────────────────────
// Movement, Futurism (1909–1918). The first movement launched as a manifesto:
// paint motion and the machine, burn the past. Authored through the art content
// pipeline (fact pack → Opus draft → 5 critic gates → reconcile). The fascism +
// misogyny honesty axis is carried plain. No em-dashes in shippable prose.
// ─────────────────────────────────────────────────────────────
const T_GROUP = ['#6a6a5a', '#3a3a30', '#14140e'] as [string, string, string]
const T_CITY = ['#bf3a25', '#3a4a6a', '#1c1208'] as [string, string, string]
const T_BRAQUE = ['#9a8458', '#4a3f28', '#15110a'] as [string, string, string]
const T_SEVERINI = ['#bf3a6a', '#3a6a8a', '#1c1418'] as [string, string, string]
const T_DOG = ['#5a4a2a', '#2a2218', '#0e0a06'] as [string, string, string]
const T_GALLI = ['#bf2f25', '#1c1c1c', '#6a1414'] as [string, string, string]
const T_UNIQUE = ['#7a6a4a', '#3a3020', '#100c08'] as [string, string, string]
const T_NOISE = ['#3a3a44', '#1c1c24', '#0a0a10'] as [string, string, string]
const T_CITTA = ['#5a5a64', '#2a2a30', '#0e0e12'] as [string, string, string]
const PD_BOCCIONI = 'Public domain worldwide (Umberto Boccioni died 1916). Wikimedia Commons.'
const PD_SANTELIA = 'Public domain worldwide (Antonio Sant’Elia died 1916). Wikimedia Commons.'

// ── 1. The press release that started a movement ────────────
const FuturismPressNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 20 February 1909" title="A movement with no paintings" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>M</DropCap>
 ost art movements begin in a studio, and you can read the rest of this era to watch them do it: a few
 painters quietly working out a new way of seeing, then a critic arriving years later to give the thing a
 name, usually as an insult. Futurism begins the opposite way. It begins on a newspaper&rsquo;s front
 page, with a man who could not paint at all.
 </p>
 <p style={proseStyle}>
 On 20 February 1909 the readers of{' '}<em>Le Figaro</em>, the most respectable daily in Paris, opened
 the most respectable position in their paper, the front page, and found a roar. It was a{' '}
 <strong>manifesto</strong>, a public declaration of beliefs and intentions, the form a political party
 or a religious sect uses to announce itself to the world. This one announced an art movement. It was
 titled the{' '}<em>Founding and Manifesto of Futurism</em>, and it was signed by an Italian poet named{' '}
 <strong>Filippo Tommaso Marinetti</strong>, who was thirty-two, wealthy, Paris-educated, born in
 Alexandria in Egypt in 1876, and who had, as yet, not a single painter behind him and not one Futurist
 painting in existence. He announced the movement first. He went and found the artists afterward.
 </p>
 <p style={proseStyle}>
 That order, words before art, is the whole reason Futurism matters as much for its method as for its
 pictures. It is widely called the first movement launched by manifesto, the prototype of the way the
 twentieth-century{' '}<strong>avant-garde</strong>{' '}(the experimental, rule-breaking front edge of art)
 would announce itself: not by quietly painting but by issuing a printed declaration of war on the old.
 Be careful with the superlative. It was not the first manifesto ever written, and the text had in fact
 already appeared in an Italian paper, the{' '}<em>Gazzetta dell&rsquo;Emilia</em>{' '}in Bologna, two weeks
 earlier. But Paris was the capital of the art world, the place a thing had to happen to become world
 news, and that is exactly why Marinetti spent his money on the front page of a Paris daily. The Bologna
 printing was the first ink. The{' '}<em>Le Figaro</em>{' '}front page was the launch that mattered.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_GROUP}
 imageUrl={ART_IMG.futuristsGroup}
 ratio="3/2"
 alt="The Futurists in front of Le Figaro, Paris, 1912"
 caption={<>The movement arrived this way: not in a gallery but through the press. Here the five Futurists pose in front of the Le Figaro building in Paris. From left, Russolo, Carr&agrave;, Marinetti, Boccioni and Severini.</>}
 credit={<>Russolo, Carr&agrave;, Marinetti, Boccioni and Severini in front of Le Figaro, Paris, 9 February 1912 · photograph</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The program" title="Speed, the machine, burn the museums" />
 <p style={proseStyle}>
 The manifesto comes in two parts. The first is a swaggering prose preamble, a kind of origin myth, in
 which Marinetti and his friends argue all night under hanging lamps, then storm out at dawn and tear off
 through Milan in their motorcars, drunk on speed. Swerving to miss two cyclists, Marinetti flips his car
 into a factory drainage ditch and goes nose-down into the muck. He hauls himself out covered in
 industrial sludge and treats the crash not as bad luck but as a baptism: the old, careful world is the
 ditch, and he has just been reborn fast and modern. Then comes the program proper, eleven numbered
 points fired off like rounds.
 </p>
 <p style={proseStyle}>
 What they demand is a clean break with everything old and a worship of everything fast. The proper
 subjects of art, the manifesto says, are no longer the nude and the myth and the saint but the things of
 modern life at full throttle: the car, the tram, the electric arc-lamp, the factory, the railway station,
 the great machine-made crowd, and above all speed itself, treated as a new kind of beauty. Point four
 says it most famously: a roaring racing car, it claims, is more beautiful than the{' '}
 <em>Winged Victory of Samothrace</em>, the celebrated ancient Greek statue of a winged goddess that
 stands at the top of the great staircase in the Louvre. A machine beats a goddess. And the past has to
 go: the museums and libraries and academies are graveyards, the manifesto says, and the right response
 to them is demolition. It is genuinely thrilling to read, which is part of the trouble, because the same
 document carries its rot right out in the open.
 </p>

 <SectionHeader accent={accent} label="The ugly core" title="&ldquo;The world&rsquo;s only hygiene&rdquo;" />
 <p style={proseStyle}>
 You cannot quote the manifesto honestly and quietly drop the ninth point. Point nine is where Marinetti
 writes that the movement wishes to glorify war, which he calls the sole cleanser of the world (the line
 is more often quoted in the older English translation as &ldquo;war, the world&rsquo;s only
 hygiene&rdquo;), along with militarism, patriotism, and, in the same breath, scorn for women. Point ten
 adds that the movement means to fight against feminism. This is not a slip of the pen or a young
 man&rsquo;s pose that the rest of the story walks back. Marinetti meant it. He spent the next years
 agitating for Italy to go to war, and ten years after the manifesto he helped write the founding
 document of Italian{' '}<strong>Fascism</strong>{' '}(the violent nationalist movement that would put Italy
 under the dictator Benito Mussolini in 1922, abolish elections, and become the model Hitler&rsquo;s
 Nazis followed in Germany). Marinetti served that regime for the rest of his life.
 </p>
 <p style={proseStyle}>
 So Futurism is two things at once from its very first sentence. On one side, a real and electrifying
 revolution in art, the movement that taught Western painting how to show motion. On the other, the
 movement that turned art into a recruiting poster for war and, in its founder&rsquo;s case, for fascism.
 </p>
 </article>

 <MeanwhileSheet
 region="Paris"
 title="Cubism, quietly, a few streets away"
 body="While Marinetti was buying the loudest page in Paris, Picasso and Braque were a short walk off doing the exact opposite: inventing Cubism in near-total silence, publishing nothing, letting the paintings argue. The two movements would collide in person in 1911. The Cubism read covers what Cubism actually did; here it is enough to note the contrast in volume."
 />
 </>)

// ── 2. Finding the painters ─────────────────────────────────
const FuturismPaintersNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Milan → Rome · 1910" title="A cause goes looking for its artists" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>A</DropCap>
 manifesto with no art is a stunt. To become a movement, Futurism needed people who could actually make
 things, and within a year Marinetti had them. He gathered a handful of young painters, mostly in Milan,
 some in Rome, and signed them up to his cause. What Marinetti gave them was not a technique, which he did
 not have, but a banner, a publicity machine, and permission to be as loud and modern as they wanted.
 </p>
 <p style={proseStyle}>
 They were not interchangeable, and it is worth telling them apart, because the rest of the story keeps
 splitting along their differences.{' '}<strong>Umberto Boccioni</strong>{' '}(born 1882) was the engine of
 the group, an intense, theoretical man who argued in print as hard as he painted and who wanted, as he
 put it, to show that everything moves and runs and turns at top speed; he would push furthest, all the
 way into sculpture.{' '}<strong>Giacomo Balla</strong>{' '}(born 1871) was the odd one out by a decade, the
 eldest, the teacher, a patient experimenter who had taught the younger men their craft and would end up
 chasing the painted blur further toward pure abstraction than anyone.{' '}<strong>Carlo Carr&agrave;</strong>{' '}
 (born 1881) was the political one, drawn to crowds, riots and funerals, the painter of the mob.{' '}
 <strong>Gino Severini</strong>{' '}(born 1883) was the cosmopolitan, the one who actually lived in Paris
 and knew everybody. And{' '}<strong>Luigi Russolo</strong>{' '}(born 1885) was the youngest and the
 strangest, a painter who would soon get bored of paint and walk off to invent a new kind of music. Five
 very different men, one borrowed banner.
 </p>
 <p style={proseStyle}>
 In 1910 they paid Marinetti back in the only currency the movement traded in: manifestos. In February
 they issued the{' '}<em>Manifesto of the Futurist Painters</em>, signed by all five, and in April the{' '}
 <em>Technical Manifesto of Futurist Painting</em>, largely written by Boccioni. The April document is
 the one that actually says how to paint. It demands the painting of what it calls the dynamic sensation,
 the felt energy of things in motion, and a &ldquo;universal dynamism&rdquo; in which nothing is ever
 truly at rest. It rejects the nude. It is, for the first time, an aesthetic program and not just a
 slogan, the painters working out what the poet&rsquo;s noise was supposed to look like on canvas.
 </p>

 <SectionHeader accent={accent} label="The starting point" title="Italian Divisionism" />
 <p style={proseStyle}>
 The textbooks tend to skip this: at this moment, in 1910, these men were not yet doing
 anything that looks like the Futurism you have seen. They were not Cubists, they had not yet been to
 Paris, and their canvases shimmer with an entirely Italian technique called{' '}
 <strong>Divisionism</strong>. Divisionism is the Italian cousin of the French pointillism of Georges
 Seurat: instead of mixing colors on the palette and laying down a smooth field, you paint in many small
 separated dots and strokes of pure unmixed color and let the viewer&rsquo;s eye blend them, which makes
 the surface vibrate with a peculiar inner light. The Italians had their own line of it through Previati,
 Segantini and Pellizza da Volpedo, and Balla had learned the method and taught it to the younger men. So
 early Futurist pictures shimmer with little broken strokes of bright color before they ever learn to
 fracture into planes. The light comes first. The motion comes later.
 </p>
 <p style={proseStyle}>
 There was a second pull on them too, this one from a machine. In the years just before Futurism, the
 photographers &Eacute;tienne-Jules Marey in France and Eadweard Muybridge in America had been making
 what are called chronophotographs, sequences that froze a galloping horse or a running man into a row of
 separate instants on one plate, the body caught in a dozen positions at once. Those motion studies were
 famous and widely reproduced, and they prefigure the most recognizable Futurist trick of all, the
 multiplied limb, the single body shown in many positions across one image. The camera had already
 chopped motion into frames. The Futurists would paint the frames back into a blur. By 1910 the painters
 had their shimmering color and a head full of motion studies, but still no way to make a canvas actually
 move. That tool was about to be handed to them, by their rivals, on a train trip to Paris.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_CITY}
 imageUrl={ART_IMG.boccioniCity}
 ratio="3/2"
 alt="Boccioni, The City Rises"
 caption={<>Boccioni&rsquo;s first major Futurist canvas still glows with broken Divisionist strokes, the bright separated touches of color the painters carried over from their Italian training before Paris taught them to fracture.</>}
 credit={<>Boccioni,{' '}<em>The City Rises</em>, 1910 · Museum of Modern Art, New York</>}
 rights={PD_BOCCIONI}
 />
 </article>
 </>)

// ── 3. Paris, 1911: borrowing the broken plane ──────────────
const FuturismParisNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Autumn 1911" title="The train ride that changed the look" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he single most important journey in Futurist history is a train ride to Paris in the autumn of 1911.{' '}
 <strong>Severini</strong>{' '}was the group&rsquo;s man in France; he actually lived in Paris, among the
 painters, and he understood that his Milan friends, for all their noise, had not yet seen the most
 advanced painting in Europe. So he brought Boccioni, Carr&agrave; and Russolo to the city and introduced
 them to Pablo Picasso and Georges Braque, and to{' '}<strong>Cubism</strong>, the movement (covered in
 full in this era&rsquo;s Cubism reads) that had found a way to break an object into faceted, overlapping
 planes and show it from several angles at once.
 </p>
 <p style={proseStyle}>
 The encounter rewired them. The Futurists looked at that fractured surface and saw exactly the tool they
 had been missing. Several of them went home and reworked canvases they had already started, breaking
 their shimmering Divisionist surfaces into hard Cubist planes. The look of mature Futurism, the thing you
 picture when you hear the word, is born in the months after this trip.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_BRAQUE}
 imageUrl={ART_IMG.portuguese}
 ratio="4/5"
 alt="Braque, The Portuguese"
 caption={<>The tool the Futurists went to Paris to borrow: a Cubist canvas broken into faceted brown and grey planes, the object turned and studied from several angles at once. What the Italians added was time, the planes set in motion.</>}
 credit={<>Braque,{' '}<em>The Portuguese</em>, 1911 · Kunstmuseum Basel (shown in the Cubism read)</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The one big difference" title="&ldquo;Cubism stands still&rdquo;" />
 <p style={proseStyle}>
 But they did not simply copy. The Futurists picked a fight with their own teachers, and the fight is the
 key to the whole movement. Cubism, they complained, was motionless: it took its broken planes and aimed
 them at a guitar, a bottle, a newspaper, a person sitting still in a studio. The Futurists wanted to aim
 the same broken planes at the opposite target. They wanted to use fracture not to anatomize a still thing
 but to depict{' '}<strong>motion</strong>, the rush and blur of a thing moving through space and time.
 Same tool, opposite job. The way the Futurists told it, with the swagger they told everything, Cubism
 had invented a marvelous machine and then wasted it painting a fruit bowl.
 </p>
 <p style={proseStyle}>
 So the debt is real and it is large, the biggest single visual debt Futurism owes anyone, and it is
 only honest to say so plainly rather than pretend the Italians invented the fractured plane. What the
 Italians added was time. They took Cubism&rsquo;s still, faceted space and set it spinning.
 </p>

 <SectionHeader accent={accent} label="Bernheim-Jeune · February 1912" title="Futurism goes international" />
 <p style={proseStyle}>
 They announced the result with another piece of theater. In February 1912 the{' '}
 <em>First Exhibition of Futurist Painting</em>{' '}opened at the Bernheim-Jeune gallery in Paris, one of
 the city&rsquo;s leading dealers in modern art, then toured to London, Berlin, Brussels and beyond. It
 put Futurism in front of the whole international avant-garde at once, and provoked the obvious charge,
 which was half fair: that the Italians were just Cubist imitators who had arrived late and turned up the
 volume. The Futurists&rsquo; answer was the one they always gave. Yes, we took your planes. No, we are
 not doing your painting. You froze the world. We are going to make it move.
 </p>
 <p style={proseStyle}>
 The tour did real work. The London leg in particular is where Futurism lit a fuse under the English
 avant-garde: a young painter named Wyndham Lewis saw the show and the noise around it, and within two
 years he had launched his own hard-edged, machine-worshipping British movement, Vorticism, with a
 magazine called{' '}<em>BLAST</em>{' '}(1914). It is the clearest case of Futurism&rsquo;s most durable
 export, which was never really a style but a method: the manifesto, the scandal, the touring
 provocation, copied movement by movement across Europe.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_SEVERINI}
 imageUrl={ART_IMG.severiniBalTabarin}
 ratio="1/1"
 alt="Severini, Dynamic Hieroglyphic of the Bal Tabarin"
 caption={<>Severini, the group&rsquo;s Paris man, puts Cubism&rsquo;s faceting straight to Futurist work: a Montmartre night club shattered into spinning dancers and cancan legs, with real sequins glued to the surface for glitter.</>}
 credit={<>Severini,{' '}<em>Dynamic Hieroglyphic of the Bal Tabarin</em>, 1912 · Museum of Modern Art, New York</>}
 rights={PD_RIGHTS}
 />
 </article>
 </>)

// ── 4. Painting speed ───────────────────────────────────────
const FuturismSpeedNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The machine city" title="Boccioni&rsquo;s The City Rises" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>S</DropCap>
 tart with the building site. Boccioni&rsquo;s{' '}<em>The City Rises</em>{' '}(1910) is his first big
 Futurist canvas, almost ten feet wide, and it shows the modern city under construction, which is to say
 it shows the city literally rising. In the foreground a huge red dray-horse, an enormous working draft
 animal, strains and rears, and around it men haul and heave, and the whole surface, horse and men and
 scaffolding and dust, dissolves into one churning, swirling surge of labor and energy. You do not read
 it as a horse and some workers. You read it as force. The subject is not a scene; the subject is the
 energy of a city being built.
 </p>

 <SectionHeader accent={accent} label="Emotion as motion" title="The States of Mind triptych" />
 <p style={proseStyle}>
 Then the railway station. Boccioni&rsquo;s{' '}<em>States of Mind</em>{' '}(1911) is a set of three panels
 about a parting at a train station, and it tries to do something almost impossible: to paint feelings as
 movement. Stand in front of the first panel,{' '}<em>The Farewells</em>, and you are inside the goodbye:
 a steam-choked platform, embracing couples half-dissolved in the churn, and floating through the fog a
 giant locomotive number stenciled on the side of the engine, a banal stamped numeral turned into the one
 solid thing in a swimming world. The second panel,{' '}<em>Those Who Go</em>, drives the departing
 passengers into hard slanting streaks, faces and window frames smeared sideways by the speed of the
 carriage. The third,{' '}<em>Those Who Stay</em>, drops into long, sagging verticals, like a downpour of
 grief. Three kinds of motion for three states of feeling. Emotion painted as direction.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_DOG}
 imageUrl={ART_IMG.ballaDog}
 ratio="5/4"
 alt="Balla, Dynamism of a Dog on a Leash"
 caption={<>The textbook image of painted motion: a dachshund&rsquo;s legs and the swinging leash multiplied into a blur of repeated shapes, the same legs in a dozen places in a single still picture.</>}
 credit={<>Balla,{' '}<em>Dynamism of a Dog on a Leash</em>, 1912 · Buffalo AKG Art Museum</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The textbook of motion" title="Balla&rsquo;s dog" />
 <p style={proseStyle}>
 Now the famous one, and the easiest to read on a phone. Balla&rsquo;s{' '}
 <em>Dynamism of a Dog on a Leash</em>{' '}(1912), painted while he was staying out in the Tuscan
 countryside, shows a little dachshund being walked along a sunlit path, and it is the single clearest
 demonstration of what painted motion even means. Balla does not paint one dog; he paints the blur of a
 trotting dog, the four short legs smeared into a fan, the swinging leash repeated into a stack of arcs,
 the lady&rsquo;s walking feet stuttered into a little row of steps. It is what your eye actually does
 when something moves too fast to fix, multiplied and laid out on the canvas. A camera could freeze that
 dog in one crisp instant; what a camera cannot do, and what Balla is after, is to hold all the instants
 at once. This is the Futurist image that held.
 </p>

 <SectionHeader accent={accent} label="The riot" title="Carr&agrave;&rsquo;s Funeral of the Anarchist Galli" />
 <p style={proseStyle}>
 If Boccioni took the machine city and Balla took the trotting dog,{' '}<strong>Carr&agrave;</strong>{' '}
 took the mob. His{' '}<em>Funeral of the Anarchist Galli</em>{' '}(1910&ndash;11) paints a real event he
 had witnessed: the funeral of Angelo Galli, an anarchist worker, which the police tried to break up, so
 that the mourners&rsquo; procession turned into a brawl. Carr&agrave; gives you the clash itself, a storm
 of red flags and black-clad bodies and raised poles, everything tilted and slashing, the violence
 rendered as so many lines of force crossing and colliding. It is the third of the Futurists&rsquo; chosen
 modern subjects, alongside labor and travel: political violence in the street, painted with the same
 churning energy as the building site.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_GALLI}
 imageUrl={ART_IMG.carraGalli}
 ratio="5/4"
 alt="Carrà, Funeral of the Anarchist Galli"
 caption={<>A real police-broken funeral turned into a storm of red banners, bodies and raised poles, the riot rendered as crossing lines of force. The Futurists&rsquo; third modern subject, political violence in the street.</>}
 credit={<>Carr&agrave;,{' '}<em>Funeral of the Anarchist Galli</em>, 1910&ndash;11 · Museum of Modern Art, New York</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The line of force" title="The cyclist, and the figure made of wind" />
 <p style={proseStyle}>
 Push the idea further and the subject starts to disappear into pure energy. Boccioni&rsquo;s{' '}
 <em>Dynamism of a Cyclist</em>{' '}(1913) takes a man on a bicycle and abstracts him almost out of
 existence: no clear face, no clear wheel, just a tight knot of slashing blue and ochre wedges leaning
 hard to one side, the body and the machine and the rushing air fused into one diagonal streak of effort.
 What you are looking at is a picture made almost entirely of what the Futurists called{' '}
 <strong>lines of force</strong>, the imaginary lines along which a moving thing&rsquo;s energy seems to
 travel and bend the space around it. The man has become his own speed. By the time Balla paints{' '}
 <em>Abstract Speed + Sound</em>{' '}(1913&ndash;14), even the body is gone; there is no car and no rider
 left at all, just the swoosh of speed and the wedge of noise it leaves behind.
 </p>

 <SectionHeader accent={accent} label="Sculpture" title="Unique Forms of Continuity in Space" />
 <p style={proseStyle}>
 And then the single most famous Futurist object, which is not a painting at all. Boccioni, never content
 to stay in one medium, had written a{' '}<em>Technical Manifesto of Futurist Sculpture</em>{' '}in 1912,
 arguing that statues too should be opened up and set in motion instead of standing there like polished
 idols, and{' '}<em>Unique Forms of Continuity in Space</em>{' '}(1913) is that argument made solid. It is a
 striding human figure remade as flame and wind made solid, the muscles peeled back and pulled out into
 wings and ridges of motion, as if the figure were leaving streaks of its own movement in the air as it
 walked. Italy put it on the twenty-cent euro coin. One honest footnote: Boccioni made the work in 1913,
 but he made it in plaster, and that original plaster survives in S&atilde;o Paulo, Brazil. Every famous
 bronze you have seen is a later, posthumous cast, the earliest from 1931, fifteen years after Boccioni
 was dead. So when people say &ldquo;Boccioni&rsquo;s 1913 bronze,&rdquo; they are using shorthand: the
 sculpture is 1913, the bronze is posthumous.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_UNIQUE}
 imageUrl={ART_IMG.boccioniUniqueFormsStudy}
 ratio="3/4"
 alt="Boccioni, study for Unique Forms of Continuity in Space"
 caption={<>Boccioni&rsquo;s own 1913 study for the striding figure, drawn rather than cast. (The famous bronzes are posthumous casts from 1931 onward, so we show the artist&rsquo;s own pre-1930 drawing of it.)</>}
 credit={<>Boccioni, study for{' '}<em>Unique Forms of Continuity in Space</em>, 1913 · public domain</>}
 rights={PD_BOCCIONI}
 />
 </article>
 </>)

// ── 5. A total program, and a woman answers back ────────────
const FuturismProgramNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1912–1914" title="Not just painting, a way of living" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>F</DropCap>
 uturism never stayed inside the picture frame, because it was never really about painting alone.
 Marinetti&rsquo;s idea was a total program, a wholesale remaking of modern life, and so the manifestos
 kept coming, for sculpture, for photography, for theatre, for cooking, even for clothing. The point was
 to drag every corner of life into the machine age.
 </p>
 <p style={proseStyle}>
 It even had a live arm. The Futurists staged what they called{' '}<em>serate</em>, &ldquo;evenings,&rdquo;
 rowdy stage events at theatres in Milan, Turin, Rome and beyond. A serata was not a performance so much
 as a scripted ambush: the Futurists would take the stage in front of a paying crowd, read incendiary
 manifestos and free-word poems, insult the audience and the city&rsquo;s most sacred local heroes, and
 wait for the room to turn. It usually did, into jeering, then thrown vegetables and coins, then outright
 brawls and the occasional arrest. That was the goal; the riot was the art. The serata was Futurism&rsquo;s
 most direct invention, the artistic event staged to provoke, and it became the template for the noisy
 public provocations of Dada a few years later.
 </p>

 <SectionHeader accent={accent} label="Sound" title="Russolo and the noise machines" />
 <p style={proseStyle}>
 Start with sound.{' '}<strong>Russolo</strong>, who had begun as a painter, put down his brushes and
 effectively invented noise music. In 1913 he wrote a manifesto called{' '}<em>The Art of Noises</em>,
 which argued that the modern ear, raised on factories and engines and trams, was bored by the polite
 sounds of the orchestra and craved the actual noise of the machine age. Then he built the instruments to
 make it. He called them{' '}<strong>intonarumori</strong>, which means &ldquo;noise intoners,&rdquo; a
 family of boxes with cranks and levers and horns that produced rumbles, hisses, roars and shrieks on
 command, a machine-age orchestra of pure noise. It sounds like a joke and it was a foundation:
 Russolo&rsquo;s noise machines are one of the starting points of twentieth-century experimental and
 electronic music.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_NOISE}
 imageUrl={ART_IMG.russoloIntonarumori}
 ratio="2/3"
 alt="Russolo and Piatti with the intonarumori"
 caption={<>Russolo (left) and his assistant Ugo Piatti with the intonarumori: a machine-age orchestra of cranks and horns built to play the rumbles and roars of the modern city.</>}
 credit={<>Luigi Russolo and Ugo Piatti with the intonarumori, Milan, about 1913 · photograph</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="Architecture" title="Sant&rsquo;Elia&rsquo;s New City" />
 <p style={proseStyle}>
 Then architecture, and the drawings are extraordinary objects in their own right.{' '}
 <strong>Antonio Sant&rsquo;Elia</strong>, a young architect, drew a visionary metropolis he called the{' '}
 <em>Citt&agrave; Nuova</em>, the &ldquo;New City,&rdquo; and wrote a{' '}
 <em>Manifesto of Futurist Architecture</em>{' '}(1914) to go with it. Look at one of the sheets and you
 see a single colossal building drawn at a steep upward angle, like a tower photographed from the gutter:
 a stepped, set-back power station, sheer and many storeys tall, its elevators run up the outside of the
 wall in glass and steel shafts instead of being hidden inside, and below it the streets, the tramlines
 and the railways stacked in open layers one above another. No columns, no domes, no ornament, no nod to
 a single thing built before. It is a city designed for speed and electricity rather than for monuments,
 and it looks like nothing that existed in 1914. Almost none of it was built, and Sant&rsquo;Elia did not
 live to build any of it, but the drawings shaped how the whole twentieth century pictured the city of
 the future.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_CITTA}
 imageUrl={ART_IMG.santeliaCitta}
 ratio="2/3"
 alt="Sant'Elia, La Città Nuova"
 caption={<>The machine city on paper: a stepped power-station tower drawn from below, elevators run up the outside in glass shafts, the streets and railways stacked in open layers. None of it was built.</>}
 credit={<>Antonio Sant&rsquo;Elia,{' '}<em>La Citt&agrave; Nuova</em>{' '}(study), 1914 · drawing</>}
 rights={PD_SANTELIA}
 />

 <SectionHeader accent={accent} label="Words" title="Marinetti&rsquo;s words in freedom" />
 <p style={proseStyle}>
 Marinetti, for his own part, kept writing, but he attacked the page itself. He pushed a style he called{' '}
 <em>parole in libert&agrave;</em>, &ldquo;words in freedom&rdquo;: poems with the grammar torn out, the
 words scattered across the page at different sizes and angles and typefaces, sometimes mixed with
 mathematical signs and onomatopoeia, the layout doing the work that sentences used to do. His showpiece
 was{' '}<em>Zang Tumb Tumb</em>{' '}(1914), a book-length sound-poem about a battle he had reported on in
 the Balkans, in which the title itself is the noise of the artillery and the typography lurches and
 explodes to mime the bombardment. It reads less like a poem than like a page trying to be an engine.
 </p>

 <SectionHeader accent={accent} label="A woman answers back" title="Valentine de Saint-Point" />
 <p style={proseStyle}>
 Now the part the movement&rsquo;s admirers tend to skip. The manifesto&rsquo;s scorn for women was not
 an accident, and it did not go unanswered. In 1912 a French writer and performer named{' '}
 <strong>Valentine de Saint-Point</strong>{' '}published a{' '}<em>Manifesto of the Futurist Woman</em>, and
 she pointedly subtitled it &ldquo;An Answer to F.T. Marinetti.&rdquo; What makes her interesting is that
 she did not simply scold him. She out-radicalized him: she rejected the soft, muse-like idea of woman
 just as fiercely as he did, and demanded a fierce, strong, even violent womanhood to match the violent
 age, and the next year she pushed further with a scandalous{' '}<em>Futurist Manifesto of Lust</em>{' '}
 (1913). She took Futurism&rsquo;s own logic and turned it back on its misogyny.
 </p>
 <p style={proseStyle}>
 Marinetti himself later offered a defense, worth reporting precisely so it can be measured. He claimed
 that &ldquo;scorn for woman&rdquo; had been aimed at the old sentimental-muse cliché and not at actual
 women. That is his after-the-fact gloss, and it does not survive contact with point ten of the founding
 manifesto, which calls in plain words to fight against feminism. You do not get to scorn the cliché and
 outlaw the movement for women&rsquo;s rights in the same breath and then say you only meant the cliché.
 And the movement leaned on women even as it scorned them in print: Benedetta Cappa, a serious painter who
 would become one of the leading figures of Futurism&rsquo;s aerial-painting second phase, was also
 Marinetti&rsquo;s wife. Futurism scorned women on the page and depended on them in fact.
 </p>
 </article>

 <MeanwhileSheet
 region="Munich"
 title="The opposite road out of the modern moment"
 body="In the same years the German painters of Der Blaue Reiter (The Blue Rider, a Munich group around Kandinsky, Marc and Klee) were chasing abstraction too, but toward the inner and the spiritual rather than the outer and the mechanical (Kandinsky's book Concerning the Spiritual in Art came out in 1911). Two opposite escapes from the same modern present. Like Boccioni, the painter Franz Marc would die in the coming war."
 />
 </>)

// ── 6. The war it wanted ────────────────────────────────────
const FuturismWarNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1914–1916" title="Begging for the war" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 oint nine was not a metaphor. When the First World War broke out in the summer of 1914, the Futurists did
 exactly what the manifesto had promised: they campaigned, loudly, for Italy to abandon its neutrality
 and join the fighting. This is the movement called interventionism, the push to get Italy into the war,
 and the Futurists threw their whole publicity machine behind it. Carr&agrave; made the case in paint with
 his{' '}<em>Interventionist Demonstration</em>{' '}(1914), a spinning collage of torn newspaper, slogans
 and shouting words, a picture that is literally war propaganda made of headlines. Many Futurists did not
 just agitate. They volunteered.
 </p>

 <SectionHeader accent={accent} label="1916" title="The war kills the movement" />
 <p style={proseStyle}>
 And then the war they had begged for destroyed them. In 1916 it killed two of the most important men in
 the movement in a single year.{' '}<strong>Boccioni</strong>, the best painter and the sharpest mind
 Futurism had, died on 17 August 1916, near Verona, and the manner of it is a cruelty almost too neat to
 believe. He had volunteered for the war he had spent years demanding. He was not killed in combat. He was
 on a cavalry exercise, a training ride, when his horse bolted; he was thrown and trampled, and he died
 the next day, aged thirty-three. The &ldquo;died gloriously in battle&rdquo; version that sometimes
 attaches to him is simply wrong, and the truth is worse: a training accident, not a heroic charge. And
 one detail makes it unbearable. He had named the horse Vermiglia, after the red dray-horse churning up
 the building site in{' '}<em>The City Rises</em>. The red horse that announced the movement threw and
 killed the man who painted it.
 </p>
 <p style={proseStyle}>
 The same year,{' '}<strong>Sant&rsquo;Elia</strong>, the architect of the New City, was killed in action.
 The heroic group did not survive the peace. Carr&agrave; drifted away into a still, dreamlike,
 classicizing manner called Metaphysical painting; Severini moved toward a calmer, more classical Cubism;
 the first and greatest phase of Futurism, the painters&rsquo; Futurism, was effectively over by 1918,
 gutted by the very catastrophe it had cheered on.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={T_CITY}
 imageUrl={ART_IMG.boccioniCity}
 ratio="3/2"
 alt="Boccioni, The City Rises (the red horse)"
 caption={<>The red dray-horse that gives the movement its first masterpiece. Boccioni named the cavalry horse that would throw and kill him after it.</>}
 credit={<>Boccioni,{' '}<em>The City Rises</em>{' '}(detail), 1910 · Museum of Modern Art, New York</>}
 rights={PD_BOCCIONI}
 />

 <SectionHeader accent={accent} label="The rot" title="Marinetti and fascism" />
 <p style={proseStyle}>
 That is the tragedy. The disgrace: Marinetti did not stop.
 In 1919, with Alceste De Ambris, he co-wrote the{' '}<strong>Fascist Manifesto</strong>, the founding
 platform of Benito Mussolini&rsquo;s new movement, published in Mussolini&rsquo;s own paper that June.
 Marinetti had been there at the founding meeting in Milan that March. He was a genuine, founding-era
 fascist, and Futurism&rsquo;s whole worldview, its romance with violence, with the machine, with
 national rebirth and the cleansing power of war, fed straight into the aesthetics of the regime. In the
 1920s and 1930s he rebuilt a &ldquo;second Futurism,&rdquo; chiefly a style called{' '}
 <em>aeropittura</em>, aerial painting: pictures made from the dizzying viewpoint of an airplane, the
 ground tilting and rushing up at the viewer. Marinetti called it the daughter of fascist aviation and
 Italian Futurism, which tells you exactly whom it was painted for. He took a seat in the regime&rsquo;s
 official academy of honored intellectuals in 1929, and he died in 1944 still serving Mussolini.
 </p>
 <p style={proseStyle}>
 Hold the contradiction, because flattening it in either direction is a lie. Do not pretend Marinetti was
 anything other than a fascist who helped build fascism; the man earned the label. But do not run the
 disgrace backward over everything, either. Not every Futurist was a fascist; some had been anarchists or
 socialists, and some drifted away from both the movement and the politics. The masterpieces of the last
 chapter, the churning city and the blurred dog and the striding bronze, were painted between 1910 and
 1913, years before the Fascist party existed. Even Marinetti&rsquo;s own arc has a complication worth
 keeping: in 1920 he actually walked out on the fascists, calling them reactionary, before reconciling and
 serving them for the rest of his life. The dog on the leash is not a fascist object, and saying so is not
 laundering anything.
 </p>
 <p style={proseStyle}>
 So the verdict is double and it has to stay double. Futurism taught Western art to show time and motion,
 the blur, the multiplied limb, the line of force, and it made the manifesto the avant-garde&rsquo;s
 weapon, art launched by media campaign, so that Dada and Surrealism and Constructivism and Vorticism,
 every later movement that announced itself with a printed program, are downstream of one poet&rsquo;s
 stunt on the front page of{' '}<em>Le Figaro</em>. And it is the movement that made art a recruiting
 poster for war, and whose founder helped write fascism into being. Both of those are true at the same
 time, and the reason Futurism is worth this much trouble is that you are not allowed to keep only the
 half you like.
 </p>
 </article>
 </>)

// ─────────────────────────────────────────────────────────────
// Movement, Dada (1916–1924). Art turning on the idea of art, born in Zurich out
// of disgust at WWI. Gated pipeline; narrative under 'dada'. Honesty axes carried
// plain (women of Dada; the Fountain authorship debate). Figures are limited to
// works with clean US-PD images, so several name-only readymades/destroyed works
// are discussed in prose without a picture. No em-dashes in shippable prose.
// ─────────────────────────────────────────────────────────────
const D_BALL = ['#3a4a6a', '#2a3048', '#0e1422'] as [string, string, string]
const D_PICABIA = ['#3a3a44', '#1c1c24', '#0a0a10'] as [string, string, string]
const D_FOUNTAIN = ['#b8b4ac', '#6a665e', '#2a2824'] as [string, string, string]
const D_LHOOQ = ['#7a6a4a', '#3a3020', '#100c08'] as [string, string, string]
const D_HAUSMANN = ['#6a5a3a', '#33291a', '#100c08'] as [string, string, string]
const D_HOCH = ['#8a7a52', '#4a3c22', '#15110a'] as [string, string, string]
const D_ERNST = ['#5a4a8a', '#2a2440', '#100c1c'] as [string, string, string]
const D_GROUP = ['#6a6a5a', '#3a3a30', '#14140e'] as [string, string, string]
const D_CELEBES = ['#3a5a6a', '#2a3640', '#100c08'] as [string, string, string]
const PD_LEONARDO = 'Public domain worldwide (Leonardo da Vinci died 1519). Wikimedia Commons.'

// ── 1. The cabaret at the end of the world ──────────────────
const DadaCabaretNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Zurich · 1916" title="An island in the war" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n February 1916, while the armies of Europe were settling into the second year of grinding each other
 to paste, two German refugees opened a nightclub in Zurich. One was the writer and theater director
 Hugo Ball. The other was the poet, singer and performer Emmy Hennings, a published author in her own
 right before any of this began and the equal co-founder of what they were about to make, not a hired
 act. (She tends to get filed under &ldquo;Ball&rsquo;s partner who sang,&rdquo; which is the first small
 injustice in a story that has several.) Both had seen enough of the war&rsquo;s logic up close to
 conclude that the whole civilization producing it had gone insane. Switzerland was neutral, an island
 of peace in a continent at war, which is exactly why the artists, the deserters, the pacifists and the
 exiles had all washed up there.
 </p>
 <p style={proseStyle}>
 So on 5 February 1916 the two of them opened the{' '}<strong>Cabaret Voltaire</strong> (a cabaret being
 a small nightclub with a stage), tucked into a back room of a tavern at Spiegelgasse 1. They named it
 after Voltaire, the eighteenth-century French writer who had spent his life mocking the powerful, which
 tells you the program before the curtain even goes up. A press notice invited &ldquo;young Zurich
 artists of all tendencies&rdquo; to come and contribute. What turned up was stranger than anyone
 advertised.
 </p>

 <SectionHeader accent={accent} label="The acts" title="Verses without words" />
 <p style={proseStyle}>
 A circle gathered fast: the Romanian poet{' '}<strong>Tristan Tzara</strong>, who would become the
 movement&rsquo;s loudest mouth and tireless impresario; the Romanian painter Marcel Janco; the Alsatian
 artist{' '}<strong>Hans Arp</strong> (he also went by the French &ldquo;Jean&rdquo;); the German writer
 Richard Huelsenbeck; and the Swiss artist{' '}<strong>Sophie Taeuber</strong>, later Taeuber-Arp, who
 was making some of the most formally rigorous work in the room. What they did on the little stage had no
 precedent and was meant to have none. Poems were shouted in three languages at once, deliberately
 drowning each other out. There were chants and drumming, Hennings singing her cabaret songs, Janco&rsquo;s
 jagged cardboard masks, and Ball&rsquo;s{' '}<strong>sound poems</strong>, which he called &ldquo;verses
 without words&rdquo;: strings of invented syllables that meant nothing and were arranged purely for their
 noise. If that sounds like a child banging pots, that was rather the idea. Sense, they had decided, was
 what had built the trenches. Nonsense was the cure.
 </p>
 <p style={proseStyle}>
 The most famous night came in June 1916, when Ball performed his sound poem &ldquo;Karawane&rdquo;
 dressed in a costume of stiff blue cardboard tubes for legs and a huge gold cardboard collar he flapped
 like wings. He could not walk in it. He had to be carried onto the stage and off again, intoning his
 made-up syllables like a priest of a religion that did not exist. It is the founding image of Dada: total
 seriousness and total absurdity wearing the same costume, and you genuinely cannot tell which one is the
 joke.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_BALL}
 imageUrl={ART_IMG.ballCostume}
 ratio="3/4"
 alt="Hugo Ball reciting Karawane at the Cabaret Voltaire, 1916"
 caption={<>Hugo Ball intoning a sound poem (a poem of invented, meaningless syllables) in a costume of blue cardboard tubes and a flapping gold collar. He could not walk in it and had to be carried on and off the stage.</>}
 credit={<>Hugo Ball performing at the Cabaret Voltaire, Zurich, 1916 (publicity photograph)</>}
 rights={PD_RIGHTS}
 />
 <p style={proseStyle}>
 There was a verbal version of the nonsense too, and it became one of Dada&rsquo;s most quoted recipes.
 Tzara&rsquo;s instruction for making a Dada poem was, roughly: take a newspaper, cut out every word of an
 article, shake the words up in a bag, then draw them out one by one and copy them down in the order they
 come. The poem is whatever chance hands you. Remove the author&rsquo;s taste and judgment from the work
 and let accident write it instead. Off to one side, quietly, Sophie Taeuber-Arp was making the most
 disciplined objects in the whole circle, spare geometric abstractions that were the opposite of the
 cabaret&rsquo;s chaos, and the fact that she is most often remembered under her husband&rsquo;s name is
 the same injustice the movement kept running, one we will hit again.
 </p>

 <SectionHeader accent={accent} label="The name" title="A word born no one knows how" />
 <p style={proseStyle}>
 At some point that spring the group needed a name, and they chose the word{' '}<strong>Dada</strong>.
 Where it came from is the most-disputed fact in the whole movement, and the honest thing is to tell the
 famous story as a legend rather than a fact. The legend goes that someone stabbed a paper-knife blindly
 into a French-German dictionary and hit &ldquo;dada,&rdquo; which in French is a child&rsquo;s word for a
 hobby-horse. It is a wonderful story. It may even be true. But Tzara later claimed he invented the name
 himself, which set off a lifelong feud over who &ldquo;owned&rdquo; Dada, and the most reputable accounts
 simply shrug. What is not in doubt is that the word was chosen because it means nothing, or rather
 because its meanings are all trivial: a child&rsquo;s toy in French, a brush-off in German, &ldquo;yes,
 yes&rdquo; in Romanian. A movement that had decided sense was the enemy could hardly march under a
 sensible banner. On Bastille Day, 14 July 1916, at the first public Dada soir&eacute;e, Ball read the
 first Dada manifesto, which announced &ldquo;Dada is a new tendency in art&rdquo; and then gleefully
 explained that the whole point was that it meant nothing. A manifesto that argues itself out of
 existence. It would not be the last.
 </p>
 </article>

 <MeanwhileSheet
 region="Europe, 1916"
 title="The war that built the cabaret"
 body="Twenty feet of stage in Zurich is hard to understand without the thing it was reacting to. In 1916 the war the Dadaists had fled was at its worst: the battles of Verdun and the Somme between them killed or wounded well over a million men, much of it for a few miles of churned ground. The Dadaists were not painting the war. They were refusing the entire mindset, reason, order, patriotism, beauty, that they believed had marched a generation into it. The nonsense on the cabaret stage was a moral position."
 />
 </>)

// ── 2. A urinal in New York ─────────────────────────────────
const DadaUrinalNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="New York" title="Dada before Dada" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>W</DropCap>
 hile Zurich was inventing the cabaret, a parallel version of the same revolt was already running in New
 York, and it had started even earlier. Two French artists,{' '}<strong>Marcel Duchamp</strong> and{' '}
 <strong>Francis Picabia</strong>, had crossed the Atlantic to escape the war, and in New York they found
 a small{' '}<strong>avant-garde</strong> scene (the avant-garde being art&rsquo;s experimental front
 edge) with two hubs: the gallery &ldquo;291&rdquo; run by the photographer Alfred Stieglitz, and the
 apartment of the collectors Walter and Louise Arensberg, where artists argued, drank and played chess
 most nights. With the American photographer Man Ray and the painter Beatrice Wood, they made a New York
 Dada every bit as anti-everything as Zurich&rsquo;s but cooler in temperature, drier, the quiet sabotage
 of a single well-placed object.
 </p>
 <p style={proseStyle}>
 Picabia&rsquo;s specialty was machines. He drew people as deadpan mechanical diagrams, a portrait of
 Stieglitz as a broken bellows camera, the &ldquo;mechanomorphic&rdquo; (man-as-machine) style. The joke
 was bleak and exact: in the age that had just industrialized killing, maybe a person really was just a
 machine, and a badly made one. He poured his energy into a magazine,{' '}<em>391</em>, which he kept
 publishing across four cities from 1917 to 1924. Dada&rsquo;s journals were artworks in their own right,
 and they are how the scattered cities stayed one movement.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_PICABIA}
 imageUrl={ART_IMG.picabiaStieglitz}
 ratio="3/4"
 alt="Picabia, Ici, c'est ici Stieglitz"
 caption={<>Picabia draws his friend Alfred Stieglitz not as a man but as a broken bellows camera, the bellows slack. His &ldquo;mechanomorphic&rdquo; style: a person rendered as a deadpan machine schematic, made as a mock magazine cover.</>}
 credit={<>Picabia,{' '}<em>Ici, c&rsquo;est ici Stieglitz</em>, cover of 291, 1915</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The readymade" title="Choosing instead of making" />
 <p style={proseStyle}>
 Duchamp&rsquo;s specialty was the single well-placed object, and it is the most consequential idea in
 modern art, so it is worth slowing down. In 1913 he bolted a bicycle wheel upside-down onto a kitchen
 stool. The next year he bought a galvanized iron bottle rack from a department store and declared that,
 untouched, exactly as the shop sold it, to be art. He coined the actual word{' '}
 <strong>readymade</strong> around 1915. (So the dates need honesty: the first readymade object is usually
 dated to the 1913 wheel, but Duchamp did not yet have the concept or the word when he made it. He arrived
 at the idea by doing it, then named what he had done.)
 </p>
 <p style={proseStyle}>
 Here is the idea, stated plainly. A readymade is an ordinary, mass-produced object that an artist
 declares to be a work of art simply by choosing it and presenting it as one. No carving, no painting, no
 skill, no making. The whole artistic act is the choice. That sounds like a shrug, and it nearly is, but
 follow it through: if choosing is enough, then art is not a craft you practice with your hands. It is a
 decision you make with your mind, and anything at all can be art the moment an artist points at it.
 Nearly every Conceptual artist and most of what came after is downstream of that sentence.
 </p>

 <SectionHeader accent={accent} label="Fountain · 1917" title="A urinal called sculpture" />
 <p style={proseStyle}>
 In 1917 a new exhibiting society started up in New York, the Society of Independent Artists, on the
 radical principle of &ldquo;no jury, no prizes&rdquo;: anyone who paid the fee could exhibit anything.
 Duchamp was on the board. To test whether they meant it, someone in his circle submitted a work, a
 standard porcelain urinal, laid on its back, signed &ldquo;R. Mutt 1917,&rdquo; and titled{' '}
 <em>Fountain</em>. The &ldquo;no jury, no prizes&rdquo; society panicked and hid it. Duchamp and
 Arensberg resigned the board in protest. And an anonymous defense ran in the little magazine{' '}
 <em>The Blind Man</em>, laying out the whole philosophy of the readymade in two sentences: whether Mr.
 Mutt made the fountain with his own hands or not has no importance, the writer said; he chose it. That is
 the argument in full. The skill is irrelevant. The choice is the art.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_FOUNTAIN}
 imageUrl={ART_IMG.duchampFountain}
 ratio="4/5"
 alt="Duchamp, Fountain, 1917, photographed by Stieglitz"
 caption={<>The single most argued-over object in modern art: a factory-made urinal laid on its back, signed &ldquo;R. Mutt 1917,&rdquo; submitted to a show that promised to reject nothing, then hidden. The original was soon lost; this 1917 photograph by Alfred Stieglitz is the only surviving image of it.</>}
 credit={<>Alfred Stieglitz, photograph of Duchamp&rsquo;s{' '}<em>Fountain</em>, 1917 ·{' '}<em>The Blind Man</em>{' '}no. 2</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The dispute" title="Who really sent it?" />
 <p style={proseStyle}>
 Now the part most books skip. We do not actually know for certain who sent{' '}<em>Fountain</em> in. In a
 letter to his sister dated 11 April 1917 Duchamp wrote that &ldquo;one of my female friends under a
 masculine pseudonym, Richard Mutt, sent in a porcelain urinal as a sculpture.&rdquo; A female friend. A
 vocal scholarly minority reads that letter to mean the work was the idea of the German-born artist-poet
 Baroness Elsa von Freytag-Loringhoven, a wild performance artist before the term existed, who was central
 to the New York circle and entirely capable of the gesture. The counter-case reads the same letter the
 other way: Duchamp openly told his own sister a woman had fronted the entry, which is hardly what a man
 covering up a stolen idea would do, and identifies the friend as another associate, Louise Norton.
 Mainstream museums still credit Duchamp; the Baroness case rests on stylistic affinity and circumstantial
 ties. The honest position is that the debate is real and unresolved, and it may never be
 settled. What the episode does cleanly is puncture the myth of the lone male genius: the most famous artwork of
 the century may not even have a single sure author.
 </p>

 <SectionHeader accent={accent} label="L.H.O.O.Q. · 1919" title="A moustache on the Mona Lisa" />
 <p style={proseStyle}>
 If the urinal asked &ldquo;what counts as art,&rdquo; Duchamp&rsquo;s next provocation asked &ldquo;what
 do we worship, and why.&rdquo; In 1919 he took a cheap printed postcard of Leonardo&rsquo;s{' '}
 <em>Mona Lisa</em>, the most revered painting in the world, and drew a moustache and a goatee on her in
 pencil, captioned with five letters,{' '}<em>L.H.O.O.Q.</em>, that sound out a rude French pun when read
 aloud. He called it a &ldquo;rectified readymade,&rdquo; a found object the artist has altered. With a
 pencil and a dirty joke he had defaced the most worshipped image in Western art, and the target was not
 Leonardo but the worship itself: the museum cult, the idea that a painting becomes holy because enough
 people agree to genuflect.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_LHOOQ}
 imageUrl={ART_IMG.duchampLhooq}
 ratio="4/5"
 alt="Duchamp, L.H.O.O.Q., 1919"
 caption={<>The most worshipped painting in the world, on a cheap postcard, with a pencilled moustache and goatee and a five-letter dirty pun. The target is not Leonardo but the reverence itself.</>}
 credit={<>Duchamp,{' '}<em>L.H.O.O.Q.</em>, 1919 · rectified readymade</>}
 rights={PD_RIGHTS}
 />
 </article>
 </>)

// ── 3. Berlin cuts it up ────────────────────────────────────
const DadaBerlinNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Berlin · 1918" title="From nonsense to fury" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>W</DropCap>
 hen Richard Huelsenbeck carried Dada from Zurich back to Berlin, it landed in a completely different
 country and turned into a completely different thing. Zurich Dada had been nonsense as an end in itself,
 refusal made in a safe neutral bubble. Berlin in 1918 was no bubble: Germany had lost the war, the
 Kaiser had fled, the streets were full of demobilized soldiers and revolutionaries, people were
 genuinely starving, and a fragile new republic (later called the Weimar Republic) was being born in
 chaos. Dada here could not afford to be a private joke. It got savagely political, pointed squarely at
 the militarists who had run the war and the new establishment papering over the wreckage. The Berlin
 circle constituted itself as &ldquo;Club Dada&rdquo; and ran hard left: Raoul Hausmann, the
 self-styled &ldquo;Dadasoph&rdquo;; Hannah Höch; John Heartfield, who had anglicized his German name as
 a protest against wartime nationalism and would become the great anti-Nazi photomontagist; the savage
 caricaturist George Grosz; and others.
 </p>

 <SectionHeader accent={accent} label="The technique" title="Scissors and the daily paper" />
 <p style={proseStyle}>
 Their weapon was{' '}<strong>photomontage</strong>. A{' '}<strong>collage</strong> (a technique Cubism
 had developed a few years earlier) is any picture assembled by gluing found materials onto a surface.
 Photomontage is the special case where the found materials are photographs, cut out of newspapers and
 magazines and reassembled into a new, jarring, satirical image: a general&rsquo;s head on a baby&rsquo;s
 body, a machine where a brain should be. Berlin Dada used scissors and the daily paper to make pictures
 that attacked the people in the daily paper. (Hedge the famous claim: both Grosz and Heartfield, and
 separately Hausmann and Höch, said they invented photomontage, but cut-and-pasted photographs went back
 to the 1850s. Nobody in Dada invented it. What Berlin Dada did was seize the technique and turn it into a
 political weapon, an art made from the same mass media it was attacking.)
 </p>
 <p style={proseStyle}>
 Hausmann made the same indictment in three dimensions. His{' '}<em>Mechanical Head</em>, subtitled{' '}
 <em>The Spirit of Our Time</em>, is a wig-maker&rsquo;s wooden dummy head with objects screwed to it: a
 folding ruler, a tape measure curled over one ear, a tin cup, the works of a pocket watch. The head has
 no thoughts of its own. Its only contents are the measuring and counting instruments bolted to the
 outside of it. That, Hausmann is saying, is what the war-machine society has produced: a person who is
 nothing but the gadgets done to him.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_HAUSMANN}
 imageUrl={ART_IMG.hausmannHead}
 ratio="4/5"
 alt="Hausmann, Mechanical Head"
 caption={<>A wig-maker&rsquo;s wooden dummy head studded with measuring instruments, a ruler, a tape measure, a watch movement, a tin cup. A head whose only thoughts are the gadgets clamped to its outside.</>}
 credit={<>Hausmann,{' '}<em>The Spirit of Our Time (Mechanical Head)</em>, c.1920 · Centre Pompidou, Paris</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="Höch · 1919–20" title="The whole republic, cut up" />
 <p style={proseStyle}>
 The masterpiece of the form has one of the longest titles in art:{' '}
 <em>Cut with the Kitchen Knife Dada through the Last Weimar Beer-Belly Cultural Epoch of Germany</em>,
 made by{' '}<strong>Hannah Höch</strong> in 1919&ndash;20. The title is itself a sneer at the comfortable
 respectability of the new republic, the well-fed politicians and generals who had survived the war and
 now ran things as if nothing had happened. Stand in front of it (it is large, nearly four feet tall) and
 it is overwhelming on purpose: a teeming field of hundreds of cut-out fragments from the illustrated
 press, generals&rsquo; heads and dancers&rsquo; legs and machine cogs, the whole republic shredded and
 reassembled, with the words &ldquo;the great dada world&rdquo; and &ldquo;anti-dada&rdquo; scattered to
 sort the figures into camps. And down in one corner, easy to miss, she pasted a little map of the
 European countries where women had won the vote, a quiet flag planted by one of the very few women the
 movement let near its center.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_HOCH}
 imageUrl={ART_IMG.hochKnife}
 ratio="4/5"
 alt="Höch, Cut with the Kitchen Knife"
 caption={<>A nearly four-foot photomontage that shreds and reassembles the whole Weimar republic, generals, dancers, machine parts and crowds cut from the illustrated press, sorted into &ldquo;dada&rdquo; and &ldquo;anti-dada.&rdquo; In one corner, a small map marks where women could vote.</>}
 credit={<>Höch,{' '}<em>Cut with the Kitchen Knife&hellip;</em>, 1919&ndash;20 · Nationalgalerie, Berlin</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="1920" title="The Fair, and the women shoved aside" />
 <p style={proseStyle}>
 In the summer of 1920 the Berlin group staged its great spectacle, the First International Dada Fair:
 around two hundred works, slogans on every wall, and a stuffed dummy in a German officer&rsquo;s uniform
 with a papier-mache pig&rsquo;s head hanging from the ceiling, a gesture so contemptuous of the military
 it later drew prosecution. But the Fair is also where one of Dada&rsquo;s ugliest truths shows clearly.
 Hannah Höch, who made the work that became the emblem of the whole movement, was nearly left out
 entirely. Grosz and Heartfield wanted her excluded; she got in only after Hausmann, her partner,
 threatened to withdraw his own work. Years later the Dadaist Hans Richter summed up Höch&rsquo;s
 contribution to the group as &ldquo;the sandwiches, beer and coffee she managed somehow to conjure up
 despite the shortage of money.&rdquo; The line was both contemptuous and false: Höch held a paying day
 job at the Ullstein publishing house and was a working artist the whole time, not the group&rsquo;s
 hostess. She wrote that the men &ldquo;continued, into their old age, to look on us women artists as
 charming and gifted amateurs, denying us any real professional status.&rdquo;
 </p>
 <p style={proseStyle}>
 She was not alone in being written out. In Zurich, Sophie Taeuber-Arp was a serious abstract artist
 usually filed under her husband&rsquo;s name; Emmy Hennings co-founded the entire Cabaret Voltaire and
 is remembered mostly as a singer; and in New York the Baroness Elsa von Freytag-Loringhoven turned her
 own body and apartment into art years before the men got around to it, and is now best remembered for a
 urinal that may be hers and is credited to a man. The movement that wanted to tear up every hierarchy
 kept one of them carefully intact. Name them, because their own colleagues mostly did not.
 </p>
 </article>
 </>)

// ── 4. Trash and one-man movements ──────────────────────────
const DadaTrashNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Hannover" title="Schwitters and Merz" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>D</DropCap>
 ada had no headquarters and no membership card, and nowhere is that clearer than in the smaller German
 cities, where it splintered into private versions that barely resembled each other. Not everyone even
 got to be a Dadaist.{' '}<strong>Kurt Schwitters</strong>, working in Hannover, wanted into Berlin Dada
 and was blackballed: the Berliners thought his art was too pretty, too crafted, too bourgeois to count.
 So he did the most Dada thing imaginable. Rejected for caring about beauty, he founded his own one-man
 movement, made it out of garbage, and called it{' '}<strong>Merz</strong>. The name is pure Dada
 accident: a meaningless fragment, the middle of the words &ldquo;Commerz und Privatbank&rdquo; (a
 German bank), which had turned up on a scrap of paper in one of his collages. He liked the sound and
 named his entire life&rsquo;s work after a piece of a bank&rsquo;s signage.
 </p>
 <p style={proseStyle}>
 Merz meant art made from literal garbage. Where Berlin Dada cut up the glossy printed press, Schwitters
 worked from the street and the gutter: tram tickets, candy wrappers, bits of wood and wire, broken junk,
 glued and nailed into collages and assemblages (an assemblage being a collage that comes off the wall
 into three dimensions). His most ambitious work no longer exists. Starting in the mid-1920s he built the
 Merzbau inside his own house, an architectural sculpture of white plaster grottoes and niches that he
 never stopped adding to, until it broke through walls and the ceiling and ate through the building, a
 single sculpture you could walk inside. It was destroyed in an Allied air raid on Hannover in October
 1943, and only photographs survive. The most extraordinary Dada object became, fittingly for a movement
 born out of the First World War, a casualty of the Second.
 </p>

 <SectionHeader accent={accent} label="Cologne · 1920" title="Enter past the urinal" />
 <p style={proseStyle}>
 A short train ride away, in Cologne, another cell ran the rawest Dada show of all.{' '}
 <strong>Max Ernst</strong>, Hans Arp and Johannes Baargeld staged an exhibition in April 1920 in the
 courtyard of a pub. Visitors had to enter past the men&rsquo;s urinal, where a girl in a child&rsquo;s
 communion dress recited lewd verse. One of Ernst&rsquo;s sculptures was displayed with a hatchet
 attached, an open invitation for the public to smash it. The police shut the show for obscenity, then
 dropped the charges when the supposedly obscene image turned out to be a four-hundred-year-old print of
 Albrecht D&uuml;rer&rsquo;s{' '}<em>Adam and Eve</em>. The show reopened in triumph. Ernst&rsquo;s own
 work here pointed somewhere new. His 1920 collage{' '}<em>The Hat Makes the Man</em> stacks rows of
 catalogue-cut hats into wobbly, faintly human, faintly absurd columns. It is funny, but it is also
 dreamlike in a way the cooler Dada objects were not, an early sign of where Ernst was heading.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_ERNST}
 imageUrl={ART_IMG.ernstHatMan}
 ratio="5/4"
 alt="Ernst, The Hat Makes the Man"
 caption={<>Rows of hats cut from a commercial catalogue, stacked into wobbly, faintly human columns and captioned with a pun. Cologne Dada collage already tilting toward the dream logic of Surrealism.</>}
 credit={<>Max Ernst,{' '}<em>The Hat Makes the Man</em>, 1920 · MoMA, New York</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="Arp · chance" title="Letting the scraps fall where they may" />
 <p style={proseStyle}>
 Running through Zurich and Cologne both was Hans Arp, and his great contribution was the third durable
 Dada idea after the readymade and photomontage:{' '}<strong>chance</strong>. The story is that Arp,
 frustrated with a drawing, tore it up and let the pieces drop to the floor, then noticed that the way
 they fell pleased him more than anything he had arranged on purpose, so he glued them down where they had
 landed. His{' '}<em>Collage with Squares Arranged according to the Laws of Chance</em> (1916&ndash;17) is
 a field of pale torn-paper squares scattered with no pattern you can name, a snapshot of where gravity
 left the scraps. Handing the picture to accident sounds like the least effort possible, and that is half
 the point: if the artist&rsquo;s skilled judgment was the thing that made art, then deliberately removing
 it was the perfect Dada sabotage. (One honest caveat: the actual collage looks rather tidy and balanced,
 which strongly suggests Arp kept a hand in. Even Dada&rsquo;s purest surrender to randomness had a human
 thumb on the scale.) Chance as a working method was now loose in art, and it would run straight into
 Surrealist automatism, John Cage&rsquo;s music and Fluxus decades later.
 </p>
 <p style={proseStyle}>
 So by 1921 Dada had no single style and barely a single city. It was a readymade in New York, a political
 photomontage in Berlin, a cathedral of trash in Hannover, an axe in a Cologne courtyard, and a pile of
 dropped paper in Zurich. It was less a movement than a shared refusal, wearing a different costume in
 every town, which made it very hard to kill and, as it turned out, very hard to hold together.
 </p>
 </article>
 </>)

// ── 5. Paris, and the family feud ───────────────────────────
const DadaParisNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1920" title="The ringmaster arrives" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he last great Dada chapter, and the one that ended it, was Paris. In 1920 Tristan Tzara moved there and
 was welcomed like a prophet by a group of young French writers gathered around a journal called{' '}
 <em>Littérature</em>:{' '}<strong>André Breton</strong>, the most serious-minded and imperious of them, a
 born organizer who wanted a cause to lead; Louis Aragon; Philippe Soupault; and the poet Paul &Eacute;luard.
 For a couple of years Paris Dada was the loudest avant-garde act in the city, almost pure provocation,
 much of it staged as theater meant to detonate the audience. Man Ray, over from New York, fit right in.
 On the afternoon of his first Paris show he built an object he called{' '}<em>Gift</em>: he glued a single
 neat row of fourteen pointed tacks down the smooth sole of a clothes-iron. The one surface whose entire
 job is to be flat and harmless now shreds whatever it touches, a domestic tool turned useless and faintly
 menacing, and the title twists the knife: he made it as a gift.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_GROUP}
 imageUrl={ART_IMG.dadaGroup1920}
 ratio="3/2"
 alt="The Paris Dada group, 1920"
 caption={<>The Paris Dadaists who would soon tear the movement apart: Tzara, Picabia, Breton, &Eacute;luard, Aragon, Soupault and others. Within three years Breton and Tzara would be calling the police on each other.</>}
 credit={<>Dada artists, group photograph, Paris, 1920</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="1921" title="The trial of a living man" />
 <p style={proseStyle}>
 The strangest event of Paris Dada was a mock trial. In May 1921 the group put a real, living, famous
 French writer, the nationalist Maurice Barr&egrave;s, on trial in absentia for &ldquo;crimes against the
 security of the spirit,&rdquo; with Breton presiding as a black-robed judge, other Dadaists as
 prosecution and defense, and a dummy standing in for the accused. But look at who was running it. A
 solemn judge, a structured trial, a real political target, a verdict to be reached: this was Dada being
 organized, serious, even moralistic, and that was Breton&rsquo;s instinct, not Tzara&rsquo;s. The trial
 that was supposed to mock authority had quietly built a little authority of its own, and that small crack
 would split the movement open.
 </p>

 <SectionHeader accent={accent} label="1922–23" title="Two men who could not share a room" />
 <p style={proseStyle}>
 The split was, at bottom, a disagreement about what Dada was for. Breton wanted to turn it into a serious
 instrument pointed at remaking art and the mind. Tzara wanted it to stay pure negation, pure nonsense, an
 attack with no program and no future, because a program and a future were precisely the bourgeois things
 Dada existed to refuse. To Tzara, a Dada with goals was a contradiction in terms. To Breton, a Dada with
 no goals was a machine that could only smash, never build, and he was tired of smashing. In 1922 Breton
 tried to organize a grand &ldquo;Congress of Paris&rdquo; to federate the whole modern spirit and decide,
 in an orderly way, where art should go next, a thoroughly un-Dada idea, and Tzara refused to take part.
 Breton attacked him in print, reviving the old Zurich feud over whether Tzara had even invented Dada. It
 came to blows the next year: in July 1923, at a soir&eacute;e built around Tzara&rsquo;s play{' '}
 <em>The Gas Heart</em>, Breton and his allies stormed the stage mid-show, a brawl broke out that
 reportedly left one performer with a broken arm, and Tzara called the police on his former comrades. You
 cannot run a movement that ends in its leaders calling the police on each other. Dada in Paris, and
 effectively everywhere, was finished by 1923, killed less by the bourgeois world it had attacked than by
 its own argument about whether nonsense could be put to serious use.
 </p>
 </article>
 </>)

// ── 6. What Dada left ───────────────────────────────────────
const DadaLeftNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1924" title="Surrealism takes the inheritance" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>D</DropCap>
 ada did not so much die as get reorganized by the man who had broken it. Having driven Tzara out, André
 Breton took Dada&rsquo;s best tools, its love of chance, its collage, its appetite for provocation, and
 pointed them somewhere new: at the unconscious mind and the dream. In 1924 he published the Surrealist
 Manifesto and{' '}<strong>Surrealism</strong> was born, a movement that kept Dada&rsquo;s methods but gave
 them a purpose Dada had refused to have. The Paris Dada circle simply walked across the bridge: Ernst,
 Arp, Man Ray, &Eacute;luard, Aragon, Breton himself all became Surrealists. Ernst&rsquo;s strange
 Cologne pictures had been pointing this way all along. Look at his 1921{' '}<em>Celebes</em>: a vast,
 rounded, dark body like a cast-iron boiler on legs, a ribbed tube curling up like a trunk ending in a
 blunt mechanical head, a small headless mannequin beside it, an empty sky behind. It is part machine,
 part beast, part nightmare, and it makes no rational sense at all, which is the point. This is
 Dada&rsquo;s nonsense turning into the Surrealist dream, and it is often called the first masterpiece of
 Surrealist painting. Dada had hatched the movement that ate it.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={D_CELEBES}
 imageUrl={ART_IMG.ernstCelebes}
 ratio="6/5"
 alt="Ernst, The Elephant Celebes"
 caption={<>A monstrous, boiler-bodied &ldquo;elephant&rdquo; looming on a bare plain, half Dada absurdity and half dream. Often called the first masterpiece of Surrealist painting, it shows Cologne Dada tipping fully into the uncanny.</>}
 credit={<>Max Ernst,{' '}<em>Celebes</em>, 1921 · Tate, London</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The legacy" title="The three things that outlived the joke" />
 <p style={proseStyle}>
 Strip away the clowning and three of Dada&rsquo;s inventions ran forward and changed everything
 downstream. The{' '}<strong>readymade</strong>, Duchamp&rsquo;s claim that choosing can be art, became
 the foundation of Conceptual art and of Pop Art, and is, in a real sense, the seed of much of the art
 made after 1950.{' '}<strong>Photomontage</strong>, the political cut-and-paste, found its full power in
 the 1930s when John Heartfield (Berlin Dada&rsquo;s own) used it for savage anti-Nazi covers on a
 mass-circulation weekly, the same cut-up-the-daily-press weapon turned on fascism in the daily press
 itself, and from there the line runs straight to the protest poster and the punk record sleeve. And{' '}
 <strong>chance</strong> fed Surrealist automatism, the music of John Cage, the events of Fluxus and the
 whole idea of art as a procedure rather than a craft. There is a clean way to measure how far the joke
 traveled: in 2004 a poll of five hundred art-world professionals, asked to name the single most
 influential artwork of the twentieth century, did not choose a Picasso. They chose Duchamp&rsquo;s
 urinal.
 </p>

 <SectionHeader accent={accent} label="The verdict" title="The gag and the earthquake" />
 <p style={proseStyle}>
 It is tempting to tidy Dada up into one thing or the other, to call it either a silly prank or a profound
 revolution, but it was emphatically both, and the refusal to choose is the point. The Dadaists genuinely
 meant the horse-laugh. They genuinely believed that after the trenches, reason and beauty and seriousness
 were a fraud, and that the only honest art was an art that attacked art. And it really was the seedbed of
 everything that came after. Hold both halves at once, the prank that felt like an ending and the idea
 that turned out to be a beginning, because that double nature is exactly what Dada built and exactly what
 it left behind. A movement whose name means nothing turned out to mean almost everything.
 </p>
 </article>
 </>)

// ─────────────────────────────────────────────────────────────
// Movement, Surrealism (1924–c.1950). Art of the unconscious and the dream.
// Gated pipeline; narrative under 'sur'. The image-rights worst case: only
// de Chirico's pre-1930 metaphysical paintings are inlineable; every actual
// Surrealist work is post-1930 / in copyright and appears as a RestrictedFigure
// "under copyright" card or in prose. Honesty axes carried plain. No em-dashes.
// ─────────────────────────────────────────────────────────────
const S_CHIRICO = ['#3a5a6a', '#7a6a4a', '#1c1a14'] as [string, string, string]
const S_TOWER = ['#a8482a', '#5a4a2a', '#1c1208'] as [string, string, string]

// ── 1. A word, a pope, and a manifesto ──────────────────────
const SurManifestoNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1924" title="After the bonfire" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>D</DropCap>
 ada, the anarchic anti-art movement that came just before, had burned art down, and a fire that consumes
 everything eventually runs out of things to consume. By 1923 the Paris wing was tearing itself apart over
 what came next. The Romanian poet Tristan Tzara wanted to keep Dada a pure machine for nonsense with no
 destination. A young French poet named{' '}<strong>André Breton</strong>{' '}wanted to point all that energy
 somewhere. Breton was a man of imperious certainty, the kind who states a definition as if it were a
 command and dares you to disagree, and he won the Paris circle. What matters here is the handoff: Surrealism is Dada&rsquo;s serious wing. It kept the
 chance, the collage and the appetite for scandal, and it pointed them at a target Dada never had, the
 unconscious mind.
 </p>
 <p style={proseStyle}>
 A word about that word, because the story usually gets it wrong. Breton did not invent the term
 &ldquo;surr&eacute;alisme.&rdquo; The French poet{' '}<strong>Guillaume Apollinaire</strong>{' '}(1880&ndash;1918)
 coined it back in 1917, using it in the program note for a ballet and as the subtitle of one of his own
 plays. Breton took the existing word, gave it his own definition, and tipped his hat to Apollinaire while
 doing it. The name is seven years older than the movement it would label.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={S_TOWER}
 imageUrl={ART_IMG.chiricoNostalgiaInfinite}
 ratio="3/4"
 alt="de Chirico, The Nostalgia of the Infinite"
 caption={<>The dreamlit, depopulated world the Italian painter Giorgio de Chirico had been making since before the war: the empty square, the long shadow, the tiny figures. The visual country Surrealism was about to claim (Chapter 3).</>}
 credit={<>de Chirico,{' '}<em>The Nostalgia of the Infinite</em>, c.1911 · MoMA, New York</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The manifesto" title="The rulebook nobody asked for" />
 <p style={proseStyle}>
 On 15 October 1924 Breton published the{' '}<strong>Manifesto of Surrealism</strong>{' '}(a manifesto being a
 public declaration of what a movement stands for, here how it intends to make art), through a small
 press. Most movements get a manifesto after they already exist, to defend work already on walls.
 Surrealism is the rare case where the document came first and named the thing into being. The heart of it
 is a joke that is also dead serious: Breton wrote a mock-dictionary entry, complete with the abbreviation
 for a masculine noun, defining the new word.{' '}
 <strong>&ldquo;SURREALISM, n. m.,&rdquo;</strong>{' '}it reads,{' '}
 <strong>&ldquo;Pure psychic automatism by means of which one intends to express ... the actual
 functioning of thought ... in the absence of any control exercised by reason, free of any aesthetic or
 moral concern.&rdquo;</strong>
 </p>
 <p style={proseStyle}>
 Unpack the key phrase, because the whole program lives in it.{' '}<strong>Automatism</strong>, in
 Breton&rsquo;s sense, means making art with the conscious, rational, editing mind switched off, so thought
 flows out unsupervised. He called his version{' '}<strong>psychic automatism</strong>; &ldquo;psychic&rdquo;
 here just means &ldquo;of the mind&rdquo; (from the Greek{' '}<em>psyche</em>), nothing supernatural. The
 model was sitting in the consulting rooms of the day.
 </p>

 <SectionHeader accent={accent} label="Freud" title="The foundation, who called them cranks" />
 <p style={proseStyle}>
 That model was{' '}<strong>Sigmund Freud</strong>, the Viennese doctor whose{' '}<strong>psychoanalysis</strong>{' '}
 (his method of treating the mind by digging up what it has buried) had spread across Europe in exactly
 these decades. Two of his ideas became Surrealism&rsquo;s bedrock. The first is{' '}
 <strong>the unconscious</strong>: the part of the mind you do not control or even know about, where
 buried desires and fears keep running. The second is{' '}<strong>free association</strong>, Freud&rsquo;s
 technique of having a patient say whatever floats up, no filter, no shame, on the theory that the
 unfiltered flow leads to the buried material. Breton had seen it work: in the First World War he served as
 a medical orderly and used Freud-derived methods on shell-shocked soldiers. He took free association off
 the couch and made it a studio technique: do not compose, do not plan, do not edit, just let it come.
 </p>
 <p style={proseStyle}>
 One caveat, because the movement liked to claim more than it invented. Automatic writing was not new in
 1924; nineteenth-century spiritualist mediums had scrawled it, and Freud&rsquo;s free association is the
 direct model. Breton&rsquo;s real contribution was making psychic automatism the defining method of an
 organized movement, with a manifesto, a headquarters and a membership list. It got all three fast, and
 the headquarters actually came first: on 11 October 1924, four days before the manifesto, the group
 opened the{' '}<strong>Bureau of Surrealist Research</strong>{' '}in Paris, put under the direction of the
 poet and actor{' '}<strong>Antonin Artaud</strong>. In December they launched a journal. Within weeks
 Surrealism had a manifesto, an HQ, a magazine and a man at the center deciding who belonged. Breton would
 be called the &ldquo;Pope of Surrealism&rdquo; before long. From his one idea now grew two streams that
 run through the next two chapters: the{' '}<strong>automatists</strong>, who let chance compose (Chapter
 2), and the{' '}<strong>dream-image</strong>{' '}painters, who rendered the impossible with photographic
 precision (Chapter 3). One idea, two methods.
 </p>
 </article>

 <MeanwhileSheet
 region="Vienna"
 title="Freud thought they were cranks"
 body="The Surrealists took Freud more literally than anyone, building a studio program out of his clinical theory. The feeling was not mutual. Freud privately wrote that he was inclined to look on the Surrealists as absolute cranks. Only after Dalí came to see him in London in July 1938, bringing his Metamorphosis of Narcissus, did the doctor revise his view upward, and only about that one painter, writing that the young Spaniard's candid, fanatical eyes and undeniable technical mastery had made him reconsider."
 />
 </>)

// ── 2. Letting the hand run ─────────────────────────────────
const SurAutomatismNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The first stream" title="Hand off the wheel" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>B</DropCap>
 reton had defined the method. Now somebody had to figure out how to actually paint or draw with the
 reasoning mind switched off. This is the first of Surrealism&rsquo;s two streams, the{' '}
 <strong>automatist</strong>{' '}stream, and its rule is simple to state and very hard to do: let the
 unconscious make the marks. Hand off the wheel. Whatever shows up, keep.
 </p>
 <p style={proseStyle}>
 The purest demonstration came from{' '}<strong>André Masson</strong>, whom Breton brought in in 1924.
 Masson had been bayoneted and badly wounded in the war, and he kept the pen moving even when the line
 frightened him. He made what he called{' '}<strong>automatic drawing</strong>: he put a pen to paper and
 let it run with no subject, no plan, no control, the line tangling across the sheet, and only afterward
 looked for the half-figures, the limbs and beaks and torsos, that had surfaced in the snarl. The picture
 was not designed and then executed. It was let happen and then read.
 </p>
 <RestrictedFigure
 title={<>Masson, <em>Automatic Drawing</em></>}
 year="1924 · MoMA, New York"
 imageUrl={ART_IMG.massonAuto}
 note="A pen let loose with no plan, the line tangling into half-figures you only find afterward. As pure a picture of psychic automatism as the movement made."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Andr%C3%A9_Masson"
 />

 <SectionHeader accent={accent} label="Miró" title="A carnival out of hunger" />
 <p style={proseStyle}>
 The automatist stream&rsquo;s founding painting belongs to the Catalan painter{' '}<strong>Joan Miró</strong>,
 and by his own account it came out of an empty stomach.{' '}<em>The Harlequin&rsquo;s Carnival</em>{' '}(1924&ndash;25)
 is a nursery-bright room boiling over with dancing shapes: a winged die, a cat with a guitar, a ladder, a
 single staring eye, a crowd of little creatures that are not quite animals and not quite toys. Mir&oacute;
 said he painted it out of hallucinations brought on by hunger, the visions of a poor young artist who
 could not afford to eat. The shapes are what get called{' '}<strong>biomorphic</strong>, meaning they look
 like living forms, blobs and cells and limbs, without being any creature you can name. From here
 Mir&oacute; keeps simplifying, and his stream of Surrealism slides, picture by picture, toward pure
 abstraction.
 </p>
 <RestrictedFigure
 title={<>Miró, <em>The Harlequin&rsquo;s Carnival</em></>}
 year="1924–25 · Buffalo AKG Art Museum"
 note="A teeming, nursery-bright room of dancing biomorphic shapes, a winged die, a guitar-playing cat, a staring eye. Miró said he painted it out of hunger hallucinations. The founding picture of the automatist stream."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Harlequin%27s_Carnival"
 />

 <SectionHeader accent={accent} label="Ernst" title="Rubbing an image up out of the floor" />
 <p style={proseStyle}>
 The most inventive automatist was the German painter{' '}<strong>Max Ernst</strong>, who had crossed over
 from Dada and treated chance as a machine to be engineered. His great invention was{' '}
 <strong>frottage</strong>, from the French{' '}<em>frotter</em>, &ldquo;to rub.&rdquo; Lay a sheet of paper
 over something with a strong grain, a plank floor, weathered wood, and rub a soft pencil across the top so
 the texture comes up through the paper. Ernst would then look into the random grain the way you look for
 faces in clouds, and coax out forests, leaves, birds and beasts the wood had suggested. He collected
 thirty-four of these into a portfolio,{' '}<em>Histoire Naturelle</em>{' '}(1926), a deadpan field guide to
 creatures no naturalist ever catalogued because the grain of a floorboard dreamed them up. He had a
 companion trick for paint,{' '}<strong>grattage</strong>, scraping wet paint off a textured surface so
 chance shaped what stayed.
 </p>
 <p style={proseStyle}>
 Hold all three side by side and the stream comes clear. Masson hands the composition to the running line,
 Mir&oacute; to the drifting shape, Ernst to the grain of the wood. None of them sat down to paint a thing
 they had already pictured. They built methods for getting the conscious mind out of the way, and then read
 what was left. It is the part of Surrealism that points forward most directly, because twenty years later,
 in New York, this exact instinct would become the engine of an entirely American movement.
 </p>

 <SectionHeader accent={accent} label="The exquisite corpse" title="Automatism as a party game" />
 <p style={proseStyle}>
 Automatism did not stay solitary. From about 1925 Breton&rsquo;s circle turned it into a group game called
 the{' '}<strong>exquisite corpse</strong>{' '}(in French{' '}<em>cadavre exquis</em>): players take a folded
 sheet and each, in turn, draws or writes one section of a figure, the head, then the torso, then the legs,
 without seeing what the others did, passing it along folded so the next hand works blind. Then the paper
 is unfolded and an absurd composite stares back, a creature no single mind designed. The game took its
 name from the very first sentence it produced, assembled the same blind way:{' '}
 <em>&ldquo;Le cadavre exquis boira le vin nouveau,&rdquo;</em>{' '}the exquisite corpse shall drink the new
 wine. It is automatism made social, chance composing the whole room&rsquo;s picture at once. The American{' '}
 <strong>Man Ray</strong>{' '}ran the same instinct through the camera, making cameraless{' '}
 <strong>rayographs</strong>{' '}(objects laid on light-sensitive paper and exposed, so the picture forms by
 chance) and eerie solarized portraits, the camera as an unconscious instrument.
 </p>
 </article>

 <MeanwhileSheet
 region="Northern Europe"
 title="The opposite of the dream"
 body="While the Surrealists taught the hand to wander, Piet Mondrian and the De Stijl group, and the teachers at the Bauhaus, were pushing the opposite way: pure geometry, the grid, primary colors, no story and no unconscious at all. Two avant-gardes at the same moment, one diving into the dreaming mind, the other scrubbing every trace of it out."
 />
 </>)

// ── 3. Painting the dream like a photograph ─────────────────
const SurDreamNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The second stream" title="The too-clear nightmare" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he automatists let the picture happen. The other half of Surrealism did the reverse. The{' '}
 <strong>dream-image</strong>{' '}painters (their other name is the{' '}<strong>veristic</strong>{' '}stream,
 from the same root as &ldquo;verity&rdquo;; veristic means truth-to-appearance) planned and executed
 impossible scenes with the slow, exact, photographic finish of an old master, precisely so the irrational
 would look undeniable. A melting clock painted as a smear is just a smear; a melting clock painted with
 every reflection in place, on a real-looking table on a real-looking shore, forces your eye to believe a
 thing your mind knows is impossible.
 </p>
 <p style={proseStyle}>
 The visual grandfather of this stream had been working a decade before Surrealism had a name. The Italian
 painter Giorgio de Chirico, in his{' '}<strong>Metaphysical painting</strong>{' '}(in Italian{' '}
 <em>pittura metafisica</em>, his term for an art of dream-logic and dread built from ordinary things),
 painted empty Italian squares with long raking shadows, classical statues, distant trains and faceless
 tailor&rsquo;s dummies.{' '}<em>The Song of Love</em>{' '}(1914) nails a Greek head and a red surgeon&rsquo;s
 rubber glove side by side to a wall, a green ball below, a train on the horizon, an utterly calm picture
 of an utterly impossible arrangement. Nothing melts and nothing screams; the dread comes from the silence
 and the wrongness of the light. Ernst, Tanguy, Dal&iacute; and Magritte all drank from de Chirico. He is
 the literal visual DNA of the movement, which is why his earlier pictures, not the more famous later
 ones, are the ones in public collections.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={S_CHIRICO}
 imageUrl={ART_IMG.chiricoSongLove}
 ratio="4/5"
 alt="de Chirico, The Song of Love"
 caption={<>A Greek head and a red surgeon&rsquo;s rubber glove nailed side by side to a wall, a green ball below, a train slipping along the horizon. De Chirico&rsquo;s dream-logic a full decade before Surrealism had a name, the calm, dreadful empty square the whole dream-image stream grew out of.</>}
 credit={<>de Chirico,{' '}<em>The Song of Love</em>, 1914 · MoMA, New York</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="Dalí" title="The clocks, and the man who would not stop talking" />
 <p style={proseStyle}>
 The showman of the stream was the Spaniard{' '}<strong>Salvador Dal&iacute;</strong>, who joined around
 1929 and painted the single most famous Surrealist image. There is a catch:
 the picture cannot be shown, because{' '}<em>The Persistence of Memory</em>{' '}(1931) is still under
 copyright. So take it in words, and it is worth the slow look. The light is hard and clear, a deserted
 luminous shoreline running back to the gold cliffs of Dal&iacute;&rsquo;s own Catalan coast. At the left
 edge stands a plain table, its hard corner jutting forward. Now the watches, one at a time. One pocket
 watch drapes limp over the table edge, drooping like something left too long in the sun. A second hangs
 off the dead branch of a leafless olive tree, melted soft and folded over the wood like wax. A third
 slumps across a strange pale shape on the sand, an eyeless, sleeping-face creature, half a face and half a
 slug. The fourth, the only firm one, is a closed orange watch crawling with black ants. Take in the
 whole: hard light, hard ground, and time itself gone soft, the scene held in a dream-stillness. And it is
 tiny, about nine inches by thirteen, painted with a jeweler&rsquo;s precision, the impossible softness
 sitting inside a world rendered exact.
 </p>
 <p style={proseStyle}>
 Dal&iacute; had a name for his method: the{' '}<strong>paranoiac-critical method</strong>. The idea was to
 deliberately induce in himself a paranoid, hallucinatory way of seeing, the kind of mind that reads a
 hidden second image into everything, and then paint both images at once so the canvas flickers between
 them. As for the watches, Dal&iacute; said they came to him contemplating a runny Camembert cheese at the
 end of a meal. File that exactly where it belongs, as Dal&iacute;&rsquo;s own story; he was a relentless
 self-mythologizer who never let a fact get in the way of a better line about himself. Before the clocks,
 he had already proved the dream image would work in any medium. With the filmmaker Luis Bu&ntilde;uel he
 made{' '}<em>Un Chien Andalou</em>{' '}(1929), a short film of pure dream-logic whose opening shot, a straight
 razor drawn across a woman&rsquo;s eye, still lands like an assault. The dream image, now moving on a wall.
 </p>
 <RestrictedFigure
 title={<>Dalí, <em>The Persistence of Memory</em></>}
 year="1931 · MoMA, New York"
 imageUrl={ART_IMG.daliPersistence}
 note="The melting watches on a deserted Catalan shore, time gone soft, painted jewel-small and exact. The most famous Surrealist image, and one of the most reproduced paintings of the century."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/The_Persistence_of_Memory"
 />

 <SectionHeader accent={accent} label="Magritte" title="The pipe that is not a pipe" />
 <p style={proseStyle}>
 Where Dal&iacute; performed, the Belgian{' '}<strong>René Magritte</strong>{' '}sat perfectly still. His
 paintings are flat, sober and as plainly painted as a shop sign, which is exactly what makes them
 unsettling: he renders the impossible in the bland, reasonable voice of an instruction manual. His most
 quoted picture is a lesson in one image.{' '}<em>The Treachery of Images</em>{' '}(1929) shows a single brown
 pipe, carefully painted, and beneath it, in tidy cursive,{' '}<em>&ldquo;Ceci n&rsquo;est pas une pipe,&rdquo;</em>{' '}
 this is not a pipe. The first reaction is to object: of course it is. But Magritte is right and you are
 wrong. It is not a pipe. It is a picture of a pipe. You cannot pack it with tobacco; the word, the painted
 image, and an actual pipe you could hold are three different things, and we go through life cheerfully
 confusing them. He delivers the cleanest one-line lesson in modern art with the straightest face
 imaginable. (He kept worrying the same theme for decades; his later{' '}<em>The Son of Man</em>{' '}(1964) shows
 a man in a bowler hat whose face is blocked by a hovering green apple, a self-portrait that hides the
 self.)
 </p>
 <RestrictedFigure
 title={<>Magritte, <em>The Treachery of Images</em></>}
 year="1929 · LACMA"
 imageUrl={ART_IMG.magrittePipe}
 note="A carefully painted pipe over the line “Ceci n’est pas une pipe.” It is not a pipe; it is a picture of a pipe. The cleanest lesson in modern art about the gap between a word, an image, and the thing."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/The_Treachery_of_Images"
 />

 <SectionHeader accent={accent} label="Tanguy" title="A desert of stones" />
 <p style={proseStyle}>
 The third dream-image painter worth knowing is the Frenchman{' '}<strong>Yves Tanguy</strong>, entirely
 self-taught, who decided to become a painter on the spot in 1923 after glimpsing a de Chirico in the
 window of a Paris gallery from a passing bus and leaping off to look. He never trained and he never
 strayed: Tanguy invented a single landscape and painted it for the rest of his life, a vast, evenly lit
 plain receding to a far low horizon, the ground littered with smooth pale shapes like bones or pebbles
 worn round by some invisible sea. Nothing in it is nameable and nothing is alive, but the light is so
 consistent and the space so deep that you believe in the place completely. Breton thought him the most
 faithful of all of them to Surrealist principles. His mature work is all from the 1930s and 1940s.
 </p>
 </article>
 </>)

// ── 4. Woman as muse, woman as artist ───────────────────────
const SurWomenNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The contradiction" title="Woman everywhere, women nowhere" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>S</DropCap>
 urrealism had a problem it never solved and mostly never noticed. The Surrealists were obsessed with
 &ldquo;woman.&rdquo; She was their great subject and symbol: the muse, the gateway to the marvelous, the
 embodiment of desire and the irrational. They had a special idol, the{' '}<strong>femme-enfant</strong>,
 the &ldquo;woman-child,&rdquo; an ideal of a young woman supposedly closer to the unconscious precisely
 because she was naive and unschooled. On canvas and in the manifestos, woman was everywhere and exalted.
 In the studio and on the membership lists, real women were mostly somewhere else, welcomed as lovers,
 models and muses, and slow to be treated as serious artists. That is the contradiction: a movement that
 put woman at the dead center of its art while keeping actual women out of the room where the art was
 discussed.
 </p>

 <SectionHeader accent={accent} label="The artists they kept calling muses" title="Name them" />
 <p style={proseStyle}>
 And yet the women were there, they were good, and several made work that outlasted the men&rsquo;s.{' '}
 <strong>Leonora Carrington</strong>{' '}came into the orbit through a relationship with Max Ernst,
 twenty-six years her senior, and was treated as the femme-enfant ideal made flesh. She was also a painter
 and writer of ferocious originality who built an entire private mythology of alchemy, animals and dream.
 Her{' '}<em>Self-Portrait (Inn of the Dawn Horse)</em>{' '}(c.1937&ndash;38) shows her seated in jodhpurs
 with a lactating hyena beside her, a white rocking-horse floating behind her head, and a real horse
 galloping free out the window, a woman painting her own dream-world rather than posing inside a
 man&rsquo;s. She left Europe, settled in Mexico, and worked for another seventy years.
 </p>
 <RestrictedFigure
 title={<>Carrington, <em>Self-Portrait (Inn of the Dawn Horse)</em></>}
 year="c.1937–38 · The Metropolitan Museum of Art"
 imageUrl={ART_IMG.carringtonSelf}
 note="The artist in jodhpurs with a lactating hyena beside her, a white rocking-horse floating behind her head, a real horse galloping out the window. A woman painting her own dream, not posing in a man’s."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Leonora_Carrington"
 />
 <p style={proseStyle}>
 <strong>Meret Oppenheim</strong>, Swiss-German, made the single most famous Surrealist object of them all,
 and she made it at twenty-two. The men around her tended to condescend to her as a pretty young
 prot&eacute;g&eacute;e; the object answered them.{' '}<em>Object</em>{' '}(1936), often called{' '}
 <em>Breakfast in Fur</em>, is a teacup, saucer and spoon entirely covered in gazelle fur. It started as a
 caf&eacute; joke in Paris with Picasso and the photographer Dora Maar about covering anything in fur, and
 it turns the most genteel ritual imaginable, taking tea, into something animal and faintly revolting: a
 cup you cannot drink from without putting fur to your lips. It was the very first work by a woman artist
 the Museum of Modern Art ever acquired, and its sudden total fame so overwhelmed Oppenheim that she walked
 away from the Paris scene for years.
 </p>
 <RestrictedFigure
 title={<>Oppenheim, <em>Object</em> (the fur teacup)</>}
 year="1936 · MoMA, New York"
 imageUrl={ART_IMG.oppenheimObject}
 note="A teacup, saucer and spoon covered in gazelle fur: the genteel ritual of tea turned animal and faintly revolting. The most-cited Surrealist sculpture, and MoMA’s first acquisition of a work by a woman."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Object_(Oppenheim)"
 />
 <p style={proseStyle}>
 The list runs on, and each deserves better than a name.{' '}<strong>Dorothea Tanning</strong>{' '}painted her
 own arrival: her{' '}<em>Birthday</em>{' '}(1942) is a self-portrait staged like a dream, the artist
 bare-breasted in a narrow corridor where door after door swings open into a receding infinity of rooms,
 her skirt dissolving into a tangle of writhing roots, a small winged lemur-like creature at her feet.{' '}
 <strong>Remedios Varo</strong>, the Spanish-Mexican painter, worked in a wholly different key: meticulous,
 jewel-like interiors that look like pages from an alchemist&rsquo;s manual, hooded figures in narrow
 towers spinning thread out of moonlight, every panel painted with the patience of a Renaissance
 miniature.{' '}<strong>Claude Cahun</strong>, the French photographer, turned the self-portrait into a
 laboratory of identity decades before the vocabulary existed, shaving the head bald, posing as a
 weightlifter, a doll, a masked androgyne, insisting the self was a costume you could change.{' '}
 <strong>Leonor Fini</strong>{' '}painted commanding sphinx-women and pointedly refused to formally join
 Breton&rsquo;s group, keeping the imagery and declining the membership;{' '}<strong>Kay Sage</strong>{' '}
 painted austere architectural dreamscapes stranded in empty light.
 </p>

 <SectionHeader accent={accent} label="Kahlo, who said no" title="The artist who refused the label" />
 <p style={proseStyle}>
 And then there is{' '}<strong>Frida Kahlo</strong>, the Mexican painter, whom Breton met and promptly tried
 to claim for Surrealism, declaring her work surrealist as if that settled it. Kahlo declined flatly.
 &ldquo;I never painted dreams,&rdquo; she said. &ldquo;I painted my own reality.&rdquo; It is the cleanest
 rebuke the movement ever got: the most famous painter Breton tried to absorb looked at the label and
 refused it, on the grounds that her work was not fantasy at all but the literal facts of her own broken
 body and divided life. Include her here not as a Surrealist but as the artist who saw the label clearly
 and walked away. The summary is the one the men of the movement could never quite make: Surrealism
 worshipped woman and sidelined women, and the women it sidelined were, several of them, the equals or
 betters of the men idolizing them.
 </p>
 </article>
 </>)

// ── 5. The pope and the excommunications ────────────────────
const SurPopeNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The purges" title="A movement run like a church" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>S</DropCap>
 urrealism was the most organized of the{' '}<strong>avant-gardes</strong>{' '}(the experimental artists out
 ahead of the mainstream), and the price of that organization was a single man deciding who counted.
 André Breton did not just write the manifesto and edit the journal; he policed the membership, and he was
 ruthless about it. The nickname he earned, half in awe and half in mockery, was &ldquo;the Pope of
 Surrealism,&rdquo; and the joke had teeth. He convened meetings that functioned as doctrinal courts, and
 when a member strayed, in art, in politics or in private life, Breton excommunicated him the way a church
 casts out a heretic.
 </p>
 <p style={proseStyle}>
 The expulsions started early and never really stopped.{' '}<strong>Antonin Artaud</strong>, the visionary
 actor and theorist who had directed the movement&rsquo;s own Bureau of Surrealist Research, was expelled
 in 1926. His case stings the most: he was too extreme even for a movement of extremes, a man who wanted
 theater to be cruelty and convulsion and who pushed the irrational past where even Breton would follow,
 and so the man who had run Surrealism&rsquo;s headquarters was read out of it. The bloodiest purge came
 with the{' '}<strong>Second Manifesto of Surrealism</strong>{' '}(1930), in which Breton settled scores in
 print and read a long list of members out of the movement, often staging the reckonings as collective
 &ldquo;trials&rdquo; where the accused answered before the assembled faithful and the verdict was rarely
 in question.
 </p>

 <SectionHeader accent={accent} label="1928–1932" title="The sex sessions, and what they recorded" />
 <p style={proseStyle}>
 One episode deserves to be named plainly, because it is documented in the movement&rsquo;s own pages.
 Beginning in January 1928 and continuing through 1932, the group held a series of recorded discussions
 about sex, the{' '}<em>Recherches sur la sexualité</em>{' '}(Researches on Sexuality), and published them in
 their journal. Across the sessions Breton repeatedly and aggressively denounced male homosexuality,
 shutting down the topic and the men who raised it. A movement that prided itself on liberating desire from
 bourgeois rules turned out to have firm rules of its own about which desires were acceptable, and
 Breton&rsquo;s homophobia is there in black and white in the group&rsquo;s own pages.
 </p>

 <SectionHeader accent={accent} label="Between Stalin and Trotsky" title="The politics that fractured the group" />
 <p style={proseStyle}>
 The purges were never only about art, because Surrealism was always also political, and its politics were
 the real fault line. Breton joined the{' '}<strong>French Communist Party</strong>{' '}(the French branch of
 the international Communist movement, taking its line from Moscow) in 1927, convinced a revolution of the
 mind needed a revolution of the state. It did not go well: the Party wanted art subordinated to its
 program, and Breton would not bend, so he was expelled in 1933. He turned hard against{' '}
 <strong>Stalin</strong>, the Soviet dictator, and in 1938 traveled to Mexico to meet the exiled{' '}
 <strong>Leon Trotsky</strong>, Stalin&rsquo;s great rival, then living under Diego Rivera&rsquo;s roof.
 There the two drafted a manifesto,{' '}<em>Pour un art révolutionnaire indépendant</em>{' '}(Manifesto for an
 Independent Revolutionary Art, 1938), arguing that art must be utterly free of state control; Rivera
 signed as co-author so Trotsky&rsquo;s name would not sink it. This is the real political story of
 Surrealism: not a movement that simply was Communist, but one caught between Stalinism and anti-fascism,
 whose Marxism turned out to be fiercely anti-Stalinist.
 </p>

 <SectionHeader accent={accent} label="Dalí" title="Fascism, and &ldquo;Avida Dollars&rdquo;" />
 <p style={proseStyle}>
 The most famous expulsion was Dal&iacute;&rsquo;s, and it turned on exactly that politics. The Surrealists
 took it as given that an artist of conscience stood against fascism as Mussolini, Hitler and Franco rose
 across Europe. Dal&iacute; would not. He refused to condemn Hitler and was openly fascinated by him, a
 fascination he kept painting (his{' '}<em>The Enigma of Hitler</em>, 1939, broods over a photograph of the
 dictator), and after the Spanish Civil War he supported{' '}<strong>Franco</strong>, the general turned
 dictator who had just crushed his own country. To his Marxist peers this was unforgivable, compounded by
 Dal&iacute;&rsquo;s gleeful commercialism, a lesser second charge. Breton drove him out, the break
 formalized by around 1939, and as a parting shot coined an anagram of &ldquo;Salvador Dal&iacute;&rdquo;
 that rearranges into{' '}<strong>&ldquo;Avida Dollars,&rdquo;</strong>{' '}which reads in French as{' '}
 <em>avide à dollars</em>, greedy for dollars. Dal&iacute;, never one to lose the last word, said the
 nickname had &ldquo;a certain magical value&rdquo; and answered the group with his motto,{' '}
 <em>&ldquo;Le surréalisme, c&rsquo;est moi&rdquo;</em>{' '}(Surrealism, it&rsquo;s me). Both lines are
 Dal&iacute;&rsquo;s own self-mythology, not neutral history.
 </p>

 <SectionHeader accent={accent} label="What they collected" title="The colonial gaze, and Wifredo Lam" />
 <p style={proseStyle}>
 One more thing belongs in the account. Like many European artists of their generation, the Surrealists
 avidly collected non-Western art, masks and carvings from Africa, Oceania and Native America, prizing them
 as windows onto &ldquo;the marvelous.&rdquo; The admiration was real, but filtered through the colonial
 assumptions of the time, treating whole living cultures as a quarry of exotic raw material for European
 dreams, with little interest in what the objects meant to the people who made them. The living example of
 the tension was the Cuban painter{' '}<strong>Wifredo Lam</strong>, of African, Chinese and Spanish
 descent, who moved inside the circle, embraced and exoticized in nearly the same gesture, prized for the
 very &ldquo;primitive&rdquo; otherness the group projected onto him. Lam turned the Surrealist vocabulary
 the other way, against the colonial gaze: his great canvas{' '}<em>The Jungle</em>{' '}(1943) claims the
 marvelous for the colonized rather than borrowing it from them.
 </p>
 <p style={proseStyle}>
 For all the in-fighting, the movement was reaching a real public. The International Surrealist Exhibition
 opened in London in June 1936 and drew some 23,000 visitors in six weeks; two years later the{' '}
 <em>Exposition Internationale du Surréalisme</em>{' '}in Paris (January 1938) turned the gallery into
 theater, Marcel Duchamp suspending 1,200 coal sacks from the ceiling over a brazier so visitors moved
 through a dim, sooty cavern. Hold the two halves together. Surrealism produced genuinely liberating art,
 and filled galleries doing it, and it also ran like a sect, with a pope, heresy trials, recorded
 prejudice, and a tangle with the worst politics of its century. The second does not cancel the first.
 </p>
 </article>
 </>)

// ── 6. Exile, and what leaked out ───────────────────────────
const SurExileNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1940" title="The war scatters the group" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>W</DropCap>
 hat finally broke up the Paris group was not Breton&rsquo;s trials but the German army. When France fell
 in 1940, the Surrealists, many of them Jewish, foreign, leftist, or all three, were in obvious danger, and
 they scattered. A rescue operation run out of Marseille by{' '}<strong>Varian Fry</strong>{' '}(an American
 journalist who ran an underground network smuggling thousands of refugees out of Vichy France, the
 collaborationist regime in the unoccupied south), with money from the American heiress and collector Peggy
 Guggenheim, helped get endangered artists to safety. Across 1940 and 1941 Breton, Ernst, Masson, Tanguy,
 the Chilean painter Matta and more reached New York. The capital of the avant-garde had, for the duration
 of the war, moved across the Atlantic.
 </p>
 <p style={proseStyle}>
 The &eacute;migr&eacute;s announced themselves with a 1942 show whose title was a grim immigrant joke,{' '}
 &ldquo;First Papers of Surrealism,&rdquo; named for the first documents an immigrant files toward
 citizenship. Its most memorable feature was not a painting but an installation by Marcel Duchamp, the old
 Dada provocateur, who webbed the galleries with something like a mile of string strung crisscross through
 the rooms, so visitors had to peer at the paintings through a literal tangle. It was a fitting welcome:
 the movement of the irrational, in exile, hanging its dreams behind a maze. And it is worth registering
 how far Surrealism had already spread: by the mid-1930s organized groups existed in Belgium (Magritte,
 Paul Delvaux), Britain, Czechoslovakia (a formal Prague group founded in 1934, one of the most active
 anywhere), and as far as Japan. No other modern movement traveled so wide or lasted so long.
 </p>

 <SectionHeader accent={accent} label="The fuse" title="Lighting Abstract Expressionism" />
 <p style={proseStyle}>
 The deepest mark the exiles left on America was not their own pictures but their method. The young New
 York painters circling them, Jackson Pollock, Arshile Gorky, Robert Motherwell and the rest, latched onto
 the one idea that traveled best across the language barrier:{' '}<strong>automatism</strong>, making marks
 straight from the unconscious with the editing mind switched off. They took Masson&rsquo;s running line
 and Ernst&rsquo;s chance procedures and pushed them past any recognizable image at all, into pure gesture.
 Pollock laying a canvas on the floor and pouring paint across it in long automatic arcs is Breton&rsquo;s
 psychic automatism carried to its limit, the hand running free with no plan, only now the line never
 resolves into a figure. Surrealism&rsquo;s most forward-looking idea became the engine of the first
 American movement to lead the world, Abstract Expressionism, taken up in its own read. The center of art
 moved, for good, to New York.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={S_CHIRICO}
 imageUrl={ART_IMG.chiricoMysteryStreet}
 ratio="4/5"
 alt="de Chirico, Mystery and Melancholy of a Street"
 caption={<>Where it began, visually: de Chirico&rsquo;s empty arcaded street, a girl with a hoop, a long raking shadow. The dreamlit silence the whole movement was an attempt to enter, painted before any of it had a name.</>}
 credit={<>de Chirico,{' '}<em>Mystery and Melancholy of a Street</em>, 1914 · private collection</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="What leaked out" title="The most complete victory" />
 <p style={proseStyle}>
 Breton went home to Paris in 1946 and kept the group going, but its moment as the avant-garde was over.
 And yet, of all the movements in this era, Surrealism may have won the most completely, because it did not
 stay in the galleries. It leaked. It leaked into{' '}<strong>film</strong>, where Bu&ntilde;uel and
 Dal&iacute;&rsquo;s{' '}<em>Un Chien Andalou</em>{' '}had already proved dream-logic could run on a screen,
 and where the line runs on through David Lynch and a thousand music videos. It leaked into{' '}
 <strong>advertising and fashion</strong>, where the surreal juxtaposition, two things that have no
 business together jammed into one image, became and remains a default grammar of selling. It leaked into{' '}
 <strong>magical realism</strong>{' '}in literature. And it leaked into the language itself:
 &ldquo;surreal&rdquo; is now an everyday word, used a million times a day by people who have never heard of
 André Breton.
 </p>
 <p style={proseStyle}>
 So measure the movement by what it left behind. Surrealism set out to make the dream, the accident and the
 irrational into real artistic subjects, and it won that argument so completely that its instincts are now
 the common air. The same movement ran like a church, idolized woman while shutting women out, and tangled
 with the worst politics of its century. Those are not two stories competing for the verdict; they are the
 same story, the melting clock and the heresy trial cut from one cloth. Taking the dream seriously turned
 out to be one of the most consequential ideas in modern art, and the people who had it were as human, as
 petty, and as flawed as the dreams they painted.
 </p>
 </article>
 </>)

// ─────────────────────────────────────────────────────────────
// Movement, Pop Art (1956–1970). Mass culture made into art, done cool. Gated
// pipeline; narrative under 'pop'. The app's worst image case: NO Pop work is
// inlineable (all post-1930, in copyright); the only images are US-PD period
// photos of consumer culture, captioned as context. Famous works = RestrictedFigure
// "Under copyright" cards. No em-dashes in shippable prose.
// ─────────────────────────────────────────────────────────────
const P_CTX = ['#bf2f6a', '#d6cf3f', '#1c1c1c'] as [string, string, string]

// ── 1. Britain saw it first ─────────────────────────────────
const PopBritainNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="London · 1947–1956" title="Grey island, glossy dream" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>S</DropCap>
 tart with the thing almost everybody gets wrong. Pop Art did not start in America with Andy Warhol. It
 started in Britain, years earlier, and for a very British reason: envy. In the late 1940s and early
 1950s Britain was still digging out of the Second World War. Food was rationed (some of it until 1954),
 cities were bombed flat, money was tight, and everything was, by every account, grey. Across the
 Atlantic sat America, fat and bright and undamaged, pumping out a flood of glossy mass culture that
 washed up in British magazines and movies: Hollywood stars, enormous chrome cars, full-color advertising,
 pulp sci-fi, comics, supermarket packaging in colors Britain had not seen on its own shelves in years. To
 a young British artist, all that abundance was a fantasy, half-loved and half-suspicious, beamed in from
 a richer planet. That mixture, hunger plus a cool analytical distance, is where Pop was born.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={P_CTX}
 imageUrl={ART_IMG.popTimesSquare}
 ratio="5/4"
 alt="Times Square advertising, 1953"
 caption={<>The glossy American abundance British Pop watched from across the Atlantic: a 1953 Times Square wall of advertising and marquees. A period photograph, not a Pop artwork, the raw material the movement was about to make art of.</>}
 credit={<>Times Square, New York, 1953 · Library of Congress · period context, not a Pop artwork</>}
 rights={PD_RIGHTS}
 />
 <p style={proseStyle}>
 The people who first turned it into art were a loose circle of young artists, critics and architects who
 met at the Institute of Contemporary Arts in London. They called themselves the{' '}
 <strong>Independent Group</strong>{' '}(an informal discussion club, not a school or a gallery), first
 convening in the winter of 1952. Two of them carry the story here: the sculptor and collagist{' '}
 <strong>Eduardo Paolozzi</strong>, who had the eye, and the painter{' '}<strong>Richard Hamilton</strong>,
 who supplied the theory. Around them sat photographers, designers and critics, including{' '}
 <strong>Lawrence Alloway</strong>, usually credited with first attaching the phrase &ldquo;Pop art&rdquo;
 to all this. What bound them was a refusal to sneer. The respectable view was that American mass culture
 was junk, beneath serious art. The Independent Group looked at the junk and got fascinated, studying car
 styling and ad layouts with the seriousness others gave old masters, and asked the question that became
 Pop: why is this not art?
 </p>

 <SectionHeader accent={accent} label="Paolozzi · 1947" title="A toy gun that fires the word “POP”" />
 <p style={proseStyle}>
 The first to act on it was Paolozzi, a Scottish-Italian sculptor who had hoarded American magazines for
 years. As early as{' '}<strong>1947</strong>, a full decade before anyone used the term, he was cutting up
 that hoard into{' '}<strong>collage</strong>{' '}(an image built by pasting found scraps of printed paper
 onto a surface, a technique inherited from Dada). The one to picture is{' '}
 <em>I was a Rich Man&rsquo;s Plaything</em>: a dense sheet of cuttings, a pulp-romance cover, a
 Coca-Cola ad, a cherry-pie ad, a pin-up, an Army recruiting hand, and in the corner, cut from the
 packaging of a toy gun, a pistol firing a little puff of smoke with one word printed inside it,
 &ldquo;POP!&rdquo; That puff is often called the first appearance of the very word in this art, a
 comic-book gunshot that happens to spell out the name of a movement that did not yet exist.
 </p>
 <RestrictedFigure
 title={<>Paolozzi, <em>I was a Rich Man&rsquo;s Plaything</em></>}
 year="1947 · Tate, London"
 imageUrl={ART_IMG.paolozziPlaything}
 note="American magazine cuttings glued together by a man on a grey, rationed island, with a toy gun firing a puff of smoke lettered “POP!” in the corner. Proto-Pop, a decade early."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/I_was_a_Rich_Man%27s_Plaything"
 />

 <SectionHeader accent={accent} label="Hamilton · 1956" title="The whole consumer dream in one room" />
 <p style={proseStyle}>
 The picture usually called the first iconic Pop work came nine years later, from Hamilton, the most
 deliberate thinker in the group. For the 1956 London exhibition{' '}<strong>This Is Tomorrow</strong>{' '}he
 made a tiny collage, about ten inches square, with a title as long as a sentence:{' '}
 <em>Just what is it that makes today&rsquo;s homes so different, so appealing?</em>{' '}It is a single
 modern living room pasted from magazine cuttings and stuffed with every shiny promise of 1950s life at
 once: a bodybuilder flexing in the center, holding a giant Tootsie Pop the size of a tennis racket with
 the word &ldquo;POP&rdquo; up its wrapper (there it is again); a pin-up in a lampshade hat; a television,
 a tape recorder, a vacuum cleaner, a tinned ham on the coffee table like a centerpiece, a comic-book
 cover framed on the wall as if it were a painting. The entire dream of postwar abundance, deadpan, in one
 room, assembled from the ads, a piece of consumer culture made of consumer culture.
 </p>
 <RestrictedFigure
 title={<>Hamilton, <em>Just what is it that makes today&rsquo;s homes so different, so appealing?</em></>}
 year="1956 · Kunsthalle Tübingen"
 imageUrl={ART_IMG.hamiltonHomes}
 note="The first iconic Pop work: the whole 1950s consumer dream crammed into one tiny living-room collage, a flexing bodybuilder holding a giant lollipop lettered “POP.”"
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Just_what_is_it_that_makes_today%27s_homes_so_different,_so_appealing%3F"
 />
 <p style={proseStyle}>
 The year after, Hamilton wrote the nearest thing Pop ever had to a creed, and it was a private letter,
 not a manifesto: a 1957 note to the architects Alison and Peter Smithson listing the
 &ldquo;characteristics of pop art.&rdquo; The list reads exactly like the advertising it describes,
 popular, transient, expendable, low cost, mass produced, young, witty, sexy, gimmicky, glamorous, big
 business. Nothing about the soul, beauty or genius. A product spec sheet for a movement, and that
 flatness is the message. British Pop kept going (Peter Blake, who would later design the{' '}
 <em>Sgt. Pepper</em>{' '}sleeve; the young Hockney; and one woman, Pauline Boty, whom a later chapter will
 not let the story forget), but by the late 1950s the center of gravity was shifting west. The British had
 the idea first. The Americans were about to make it loud.
 </p>
 </article>
 </>)

// ── 2. Killing the lone genius ──────────────────────────────
const PopBridgeNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="New York · the 1950s" title="The painting on top of the heap" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 o see why American Pop hit like a thrown brick, you have to know what it was thrown at. In the New York
 of the 1950s the most serious painting in the world was{' '}<strong>Abstract Expressionism</strong>{' '}(the
 first art movement America could call its own, which pulled the center of the art world from Paris to New
 York). It was huge, abstract and made entirely of feeling: Jackson Pollock poured and flung house paint
 across canvas on the floor; Mark Rothko stacked enormous soft rectangles of glowing color; Willem de
 Kooning slashed at the canvas until a woman&rsquo;s face half-emerged from the violence. Hot, gestural,
 heroic and deadly serious, and under all of it ran one faith: real art comes from inside the artist,
 poured out raw, and the painter is a lone genius wrestling his own soul onto the wall. (The Abstract
 Expressionism read tells that story; here it is the giant Pop had to knock over.)
 </p>
 <p style={proseStyle}>
 That faith had hardened into an orthodoxy, and orthodoxies invite revolt. The first cracks came from two
 slightly older New Yorkers who loved the everyday world too much to leave it out. They are filed under{' '}
 <strong>Neo-Dada</strong>{' '}(literally &ldquo;new Dada,&rdquo; art reviving the old Dada trick of
 dragging real objects and found images back into fine art), and they are the bridge: the door from
 Abstract Expressionism that Pop would walk through.
 </p>

 <SectionHeader accent={accent} label="Johns" title="A flag that is only a flag" />
 <p style={proseStyle}>
 The quieter was{' '}<strong>Jasper Johns</strong>, and the picture that broke the spell was a flag.
 Between 1954 and 1955 he painted{' '}<em>Flag</em>, the Stars and Stripes, life-size, filling the whole
 canvas with nothing else, no sky, no pole, no story. Abstract Expressionism insisted a painting be a
 window into the artist&rsquo;s inner life; Johns picked the single most familiar, flattest public image
 he could think of (one that is already a flat design before anybody paints it) and painted that. A flag
 is not a feeling. He even painted it in{' '}<strong>encaustic</strong>{' '}(pigment mixed into hot wax) over
 scraps of newspaper, so the surface up close is thick, handmade and lovingly textured while the image it
 adds up to stays as impersonal as the flag on a post-office wall. Is it a painting of a flag, or just a
 flag? Johns will not say, and that refusal is the seed of Pop.
 </p>
 <RestrictedFigure
 title={<>Johns, <em>Flag</em></>}
 year="1954–55 · MoMA, New York"
 imageUrl={ART_IMG.johnsFlag}
 note="The Stars and Stripes, life-size, edge to edge, in pigmented hot wax over newsprint. By painting the flattest public image there is, Johns drained the personal soul out of painting."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Flag_(Jasper_Johns)"
 />

 <SectionHeader accent={accent} label="Rauschenberg" title="A bed on the wall" />
 <p style={proseStyle}>
 The louder was{' '}<strong>Robert Rauschenberg</strong>, Johns&rsquo;s friend and studio neighbor, who
 attacked the same orthodoxy from the opposite direction. He dragged actual three-dimensional junk into
 the picture and coined a word for the result: the{' '}<strong>combine</strong>{' '}(a work that combines
 painting with real found objects bolted, glued or hung onto it, half-painting, half-sculpture). The one
 to picture is{' '}<em>Bed</em>{' '}(1955): he took his own bedding, a quilt, a sheet, a pillow, hung it
 upright on the wall like a canvas, and splashed paint down it in a way that looks deliberately exactly
 like a Pollock. He keeps Abstract Expressionism&rsquo;s gestural paint, but pours it onto the most
 intimate ordinary object in any life, and the spell breaks. Real life is back in the painting, literally
 stitched into it.
 </p>
 <RestrictedFigure
 title={<>Rauschenberg, <em>Bed</em></>}
 year="1955 · MoMA, New York"
 note="His own quilt, sheet and pillow hung upright and splashed with paint that mimics a Pollock. The heroic gesture lands on a household object, and Abstract Expressionism’s spell breaks. Under copyright, so it lives here in words."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Bed_(Rauschenberg)"
 />
 <p style={proseStyle}>
 None of this went down quietly. The critic Clement Greenberg, the most powerful voice in American art,
 had spent years arguing Abstract Expressionism was the high point of all painting, and to him dragging a
 flag or a bed back into a picture looked like a betrayal, a step back into the ordinary world serious
 painting had finally escaped. But hold Johns and Rauschenberg side by side and the hinge is clear:
 Abstract Expressionism looked inward at the soul; these two turned the painting back outward, toward the
 shared, ordinary, public world. They reopened the door between art and the everyday object, and through
 it, in 1962, walked Andy Warhol, still paying his bills drawing shoe ads, about to push the cool, flat
 and mechanical further than either of them dared.
 </p>
 </article>
 </>)

// ── 3. The supermarket walks into the museum ────────────────
const PopMachineNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Andy Warhol" title="The man who wanted to be a machine" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he center of the American wave is{' '}<strong>Andy Warhol</strong>. Before he was a fine artist he was a
 hugely successful commercial illustrator, drawing shoe ads, and he never pretended to outgrow it. The
 commercial world was his subject and his method, and he flattened the wall between the two on purpose. In
 1962 he made the work that is shorthand for the whole movement, and it could hardly be more ordinary:
 thirty-two paintings of soup cans.{' '}<em>Campbell&rsquo;s Soup Cans</em>{' '}is thirty-two separate
 canvases, each under two feet tall, each a single can, one per variety the company sold. First shown at
 the Ferus Gallery in Los Angeles, propped on a thin shelf running around the wall exactly the way cans
 sit in a grocery aisle. That is the entire gesture, and it is enormous: the supermarket walks into the
 museum and hangs where a Rothko hung. No feeling on display, no brushwork to admire, no story. Just the
 can, and then the can again.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={P_CTX}
 imageUrl={ART_IMG.popSupermarket}
 ratio="3/2"
 alt="A 1950s American supermarket aisle"
 caption={<>The literal source world, not the art: a 1950s American supermarket aisle, shelves stacked with branded cans. This is what Warhol&rsquo;s soup cans came from, a period photograph standing in for paintings that are all under copyright.</>}
 credit={<>&ldquo;Shopping in supermarket,&rdquo; 1957 · Library of Congress · period context, NOT a Pop artwork</>}
 rights={PD_RIGHTS}
 />
 <RestrictedFigure
 title={<>Warhol, <em>Campbell&rsquo;s Soup Cans</em></>}
 year="1962 · MoMA, New York"
 imageUrl={ART_IMG.warholSoup}
 note="Thirty-two near-identical canvases, one per soup variety, first propped on a shelf like a grocery aisle. The dull repetition of the shelf, treated as a subject worthy of a museum wall."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Campbell%27s_Soup_Cans"
 />
 <p style={proseStyle}>
 Warhol was as deadpan as the work. In interviews he answered with &ldquo;yes,&rdquo; &ldquo;no,&rdquo;
 and &ldquo;I don&rsquo;t know,&rdquo; insisting there was nothing behind the surface and that if you
 wanted to know him you should just look at the surface of his paintings, and there he was, with nothing
 behind it. Then he industrialized the art itself. He switched to{' '}<strong>silkscreen</strong>{' '}(a
 printing technique that pushes ink through a stencil mesh to lay an image down fast and identically, over
 and over, the same process used for commercial posters), set up a studio he called{' '}
 <strong>the Factory</strong>{' '}(a real silver-foiled loft, and the name is the point: a place where art
 is manufactured, not agonized over), and turned out work in editions. When Marilyn Monroe died in August
 1962 he made{' '}<em>Marilyn Diptych</em>, fifty silkscreened Marilyns from one publicity still, the left
 half in hot color, the right fading to smeared grays until she nearly disappears: celebrity, mass
 reproduction and death at once, the star copied until she wears out. Asked why he worked this way, in a
 1963 interview, he gave the movement&rsquo;s motto, at least as it was printed at the time:
 &ldquo;I want to be a machine.&rdquo;
 </p>
 <RestrictedFigure
 title={<>Warhol, <em>Marilyn Diptych</em></>}
 year="1962 · Tate, London"
 imageUrl={ART_IMG.warholMarilyn}
 note="Fifty silkscreened Marilyns from a single publicity still, made weeks after her death, vivid on the left and fading to ghostly grays on the right. The star reduced to a repeatable product."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Marilyn_Diptych"
 />
 <p style={proseStyle}>
 The most provocative thing Warhol made was a box. In 1964 he showed the{' '}<strong>Brillo Boxes</strong>:
 plywood boxes silkscreened so carefully they looked exactly like the cardboard Brillo shipping cartons in
 any stockroom. Not a painting of a box. A box, indistinguishable from the real thing, presented as
 sculpture. The question it forced is the one Pop kept asking and never answering: if a work of art is
 identical to a grocery carton, what makes one art and the other trash? The gallery, the signature, the
 price, the intention? It put a philosophical bomb under the whole idea of art, with a twist at its center
 a later chapter returns to: the design Warhol copied was the work of a real, named commercial artist.
 </p>

 <SectionHeader accent={accent} label="Lichtenstein, Oldenburg, Rosenquist" title="Comics, soft giants, billboard scale" />
 <p style={proseStyle}>
 If Warhol made art out of the supermarket,{' '}<strong>Roy Lichtenstein</strong>{' '}made it out of the
 comic book, taking single panels from cheap war and romance comics and blowing them up huge in flat
 primary colors. The signature detail is the dots: cheap comics were printed with{' '}
 <strong>Ben-Day dots</strong>{' '}(a commercial process that builds shades out of tiny evenly spaced
 colored dots), and Lichtenstein kept them, then painted them by hand through a stencil, faking the look
 of cheap mechanical printing with slow craft. His{' '}<em>Whaam!</em>{' '}(1963) is thirteen feet wide: a
 fighter fires a rocket, the enemy plane erupting in a yellow-and-red &ldquo;WHAAM!&rdquo; lettered across
 the panel.{' '}<strong>Claes Oldenburg</strong>{' '}attacked the everyday object by making it huge and
 soft, his{' '}<em>Floor Burger</em>{' '}(1962) a hamburger the size of a sofa, slumping under its own
 weight, the most familiar thing in the world made monstrous. And{' '}<strong>James Rosenquist</strong>,
 who had painted actual billboards, brought their scale: his{' '}<em>F-111</em>{' '}wraps a whole room,
 eighty-six feet of a fighter-bomber spliced with spaghetti, a tire, and a child under a hair-dryer.
 </p>
 <RestrictedFigure
 title={<>Lichtenstein, <em>Whaam!</em></>}
 year="1963 · Tate, London"
 imageUrl={ART_IMG.lichtWhaam}
 note="A thirteen-foot war-comic panel: a fighter fires a rocket, the enemy plane erupting in a hand-painted Ben-Day-dot “WHAAM!” The cheapest storytelling in America, hung at the scale of history painting."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Whaam!"
 />
 <p style={proseStyle}>
 So the manner is complete, and it is the exact opposite of Abstract Expressionism on every axis. Cool,
 not hot. Flat, not gestural. Mechanical, not handmade (or, in Lichtenstein&rsquo;s case, handmade to look
 mechanical). Impersonal, not soul-baring. Outward, at the shared world of the store and the screen, not
 inward at the artist. The lone genius wrestling his soul onto the canvas has been replaced by a man who
 says he wants to be a machine, and means it as a compliment.
 </p>
 </article>
 </>)

// ── 4. Celebration or indictment? ───────────────────────────
const PopDebateNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="A designer walks into a gallery" title="Whose box is it?" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n April 1964 a commercial artist named{' '}<strong>James Harvey</strong>{' '}walked into the Stable Gallery
 in New York and found his own work hanging on the wall as art, with another man&rsquo;s name on it. Three
 years earlier Harvey had designed the cardboard shipping carton for Brillo soap pads, the red, white and
 blue box in any stockroom. Now here it was, rebuilt in plywood, silkscreened to look exactly like his
 carton, stacked in a gallery, selling as a Warhol. None of the money, and none of the credit, was coming
 to him. Hold that scene, because it is the whole argument in one room: a piece of
 throwaway commercial design, lifted without credit, turned into expensive fine art, and nobody quite able
 to say whether that is theft, homage, a brilliant idea, or all three at once.
 </p>

 <SectionHeader accent={accent} label="The question Pop will not answer" title="Love letter or burial?" />
 <p style={proseStyle}>
 Here is the strangest thing about Pop, and the reason it stays interesting long after the soup can stopped
 being shocking: nobody can agree on what it thinks. Stand in front of Warhol&rsquo;s cans or
 Lichtenstein&rsquo;s explosion and ask the obvious question, is this for consumer culture or against it,
 and the work just stares back. There are two opposite readings, both serious, and the art refuses to
 settle between them. The first is{' '}<strong>celebration</strong>: Pop as a genuine love letter to the
 modern world, democratic and honest about what people actually look at and enjoy, putting the supermarket
 and the comic on the wall without sneering. Warhol said he loved Coca-Cola precisely because the president
 and the poorest person drink the same Coke, and meant it warmly. The second is{' '}
 <strong>critique</strong>: Pop as a cold, deadpan indictment of the same world, the endless repetition
 (fifty Marilyns, thirty-two identical cans) a portrait of a culture grinding everything, even a dead movie
 star, into interchangeable product. The same Marilyns that look like a tribute look, tilted the other
 way, like an autopsy.
 </p>
 <p style={proseStyle}>
 The trap is to pick one. The artists mostly refused to, on purpose. Warhol built a public persona out of
 saying nothing meaningful, insisting there was nothing behind the surface, that he wanted to be a machine
 and machines do not have opinions. Whether that blankness was a profound statement or a brilliant evasion
 is exactly the question Pop leaves open. So hold both at once. A soup can can be a hymn and a diagnosis in
 the same instant, and the deadpan that makes it impossible to tell which is the most modern thing about
 it.
 </p>

 <SectionHeader accent={accent} label="Appropriation" title="The names the machine left off" />
 <p style={proseStyle}>
 There is a second debate folded inside the first, with a sharper moral edge, because here Pop did do
 something concrete: it took. The engine of the movement is{' '}<strong>appropriation</strong>{' '}(copying or
 reusing an image somebody else made, and re-presenting it as your own art). It descends from Dada&rsquo;s{' '}
 <strong>readymade</strong>, Duchamp&rsquo;s signed urinal (the Dada read tells that story), but goes a
 step further: appropriation remakes someone else&rsquo;s image inside a new work, which is what Warhol
 did with a soup label and Lichtenstein with a comic panel. And once you ask where the material came from,
 real people appear whose names got left off. Warhol&rsquo;s Brillo box lifted James Harvey&rsquo;s paid
 design. Lichtenstein&rsquo;s comics were drawn by working artists:{' '}<em>Whaam!</em>{' '}came from a panel
 by Irv Novick, with an element from Russ Heath; the weeping woman of{' '}<em>Drowning Girl</em>{' '}from a
 romance comic drawn by Tony Abruzzo. Lichtenstein cropped, recolored and recomposed, so it was never
 simple copying, but the original artists were not credited and not paid while the paintings sold for
 fortunes. None of this is a reason to throw Pop out. It is a reason to tell the whole truth: a movement
 built on appropriating commercial imagery was, by the same logic, built on other people&rsquo;s
 uncredited work, and those names belong in the story.
 </p>
 </article>
 </>)

// ── 5. Who got left out ─────────────────────────────────────
const PopLeftOutNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The boys’ club" title="The women it wrote out" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 op is remembered as a boys&rsquo; club, and the memory is mostly accurate, but the reason it is so clean
 a boys&rsquo; club is that the women were there and got written out afterward. Putting them back is not a
 takedown of the movement; it is telling the rest of what happened. British Pop&rsquo;s one prominent
 woman was{' '}<strong>Pauline Boty</strong>{' '}(1938 to 1966), a founding figure who painted female desire
 and the male gaze head-on, from a woman&rsquo;s side, at a time when Pop&rsquo;s women were mostly painted
 by men as objects. In{' '}<em>It&rsquo;s a Man&rsquo;s World</em>{' '}she turned the tables, assembling the
 icons of male culture seen plainly from a woman looking back, the gaze running the other way for once. She
 was glamorous and well known in her brief life, then died of cancer at twenty-eight, and within a
 generation was so thoroughly dropped from the history that her paintings were literally lost for decades,
 some rediscovered in a barn.
 </p>
 <RestrictedFigure
 title={<>Pauline Boty, <em>It&rsquo;s a Man&rsquo;s World</em></>}
 year="1965–66 · estate / various"
 note="British Pop’s lone prominent woman turns the male gaze around. Dropped from the history for decades, some of her paintings literally lost and later found in a barn. Under copyright, so it lives here in words."
 linkLabel="See her on Wikipedia"
 href="https://en.wikipedia.org/wiki/Pauline_Boty"
 />
 <p style={proseStyle}>
 The American side had its own roster, every one a serious artist, every one marginalized.{' '}
 <strong>Marisol</strong>{' '}(Marisol Escobar) made boxy carved-wood figures, part folk totem and part Pop
 portrait, and was famous in the 1960s; Warhol called her, in a line that says everything about how the
 era saw its women, &ldquo;the first girl artist with glamour.&rdquo;{' '}<strong>Rosalyn Drexler</strong>{' '}
 made vivid paintings over collaged pulp and film images;{' '}<strong>Idelle Weber</strong>{' '}painted flat
 silhouetted businessmen on escalators;{' '}<strong>Marjorie Strider</strong>{' '}made reliefs where the
 figure pushed physically out of the canvas; and the Belgian{' '}<strong>Evelyne Axell</strong>{' '}painted
 female pleasure frankly from the woman&rsquo;s point of view. Name them as artists, not wives or muses or
 footnotes, because that is what they were and what the record long refused to say.
 </p>

 <SectionHeader accent={accent} label="The blind spots" title="The objectified nude, and Pop’s whiteness" />
 <p style={proseStyle}>
 There is a related problem inside the art itself. A great deal of Pop, when it did put women in the
 picture, reduced them to flat, faceless objects interchangeable with the products around them. The
 clearest case is{' '}<strong>Tom Wesselmann</strong>&rsquo;s long{' '}<em>Great American Nude</em>{' '}series:
 bright, flat, often faceless female nudes arranged among branded packaging and patriotic color, the woman
 as one more consumer object on the shelf. You can read it generously as a deadpan diagnosis of how
 advertising already treated women&rsquo;s bodies, or plainly as Pop doing the same thing advertising did,
 with a museum&rsquo;s blessing. Both are fair, and Pop&rsquo;s gender politics sit in that uncomfortable
 overlap. And then there is who is almost entirely absent: the Pop canon, British and American alike, is
 very nearly all white, a movement that claimed to mirror American mass culture somehow reflecting a
 culture with almost no Black faces in it, at the exact moment the civil rights movement was reshaping the
 country. That gap is part of the truth about Pop, not a distraction from it.
 </p>
 <p style={proseStyle}>
 Finally, the machine itself. Warhol&rsquo;s whole persona was the artist as factory, and the Factory was
 a real place full of real people doing the actual labor: assistants pulling the silkscreens, a rotating
 cast making the films and keeping it running. &ldquo;I want to be a machine&rdquo; sounds like a statement
 about style, and it is, but a machine needs operators, and Warhol&rsquo;s ran on many hands besides his
 own, most of them not famous and not credited the way he was. Saying so does not diminish his genuine
 reinvention of what an artist could be. It just refuses to let the &ldquo;machine&rdquo; pose hide the
 people inside it.
 </p>
 </article>
 </>)

// ── 6. What Pop left us ─────────────────────────────────────
const PopLegacyNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="After Pop" title="The wall that never went back up" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>P</DropCap>
 op Art did not last long as a named movement; by around 1970 the moment had passed and the artists had
 scattered into separate later careers. But almost nothing else in twentieth-century art changed the basic
 rules as permanently, because the thing it broke never got fixed back. Before Pop there was a wall, taken
 for granted, between fine art on one side and commercial, mass, low culture on the other: the museum and
 the supermarket spoke different visual languages, and serious art was defined partly by not being the
 other thing. Pop knocked that wall down so completely that it never went back up. After Pop, a soup label,
 a comic panel, a brand logo and a movie star are all legitimate raw material for serious art,
 permanently, and we now live so far inside that change it is hard to feel how radical it was.
 </p>
 <p style={proseStyle}>
 The other permanent legacy is a method:{' '}<strong>appropriation</strong>{' '}and mechanical reproduction
 made fully respectable. After Warhol, an artist could take an existing image, copy it, repeat it, and the
 taking itself could be the art. That ran straight into{' '}<strong>Conceptual art</strong>{' '}(where the
 idea matters more than the handmade object, the Brillo-box question pushed to its end); into{' '}
 <strong>the Pictures Generation</strong>{' '}of the late 1970s and 80s (Sherrie Levine, Richard Prince,
 Cindy Sherman), who turned appropriation into a sharp critical tool; and into{' '}<strong>Neo-Pop</strong>,
 above all Jeff Koons, who took consumer kitsch and branding and made them fine art again. The line runs
 unbroken from Warhol&rsquo;s shelf of soup cans to a present where advertising, street art, graphic design
 and the gallery all draw from the same image bank.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={P_CTX}
 imageUrl={ART_IMG.popBillboards}
 ratio="5/4"
 alt="A 1950s wall of illuminated advertising"
 caption={<>The world Pop saw coming: a wall of illuminated advertising, brands and signs competing for the eye. A period photograph, not a Pop artwork. We now live so completely inside Pop&rsquo;s outcome, where ad, museum piece and phone-screen image all speak one language, that it is invisible.</>}
 credit={<>Broadway at night, 1953 · Library of Congress · period context, not a Pop artwork</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="The verdict" title="Both halves of the truth" />
 <p style={proseStyle}>
 So hold both halves of Pop at the end, because both are true and the movement is more interesting if you
 refuse to flatten it. On one side, it was a genuine, permanent rethinking of what art can be made of: it
 dragged the most public, most despised everyday imagery into the museum, killed the lone-genius mystique
 with a single deadpan gesture, dissolved a wall that had stood for centuries, and asked a question (what
 makes a thing art rather than a grocery carton?) that art is still answering. On the other, it was a
 movement with real blind spots: it wrote its women out of its own history, was near-totally white in a
 country it claimed to mirror, deadpan about an objectified female nude, and built, for all its
 &ldquo;machine&rdquo; talk, on a great deal of uncredited labor. The cool surface that made Pop possible
 is the same cool surface that let it look past all of that without blinking.
 </p>
 <p style={proseStyle}>
 And the question it was built around it still has not answered, on purpose. Is the soup can a love letter
 to consumer abundance or a deadpan burial under it? Pop hangs the can on the wall, refuses to tell you,
 and lets you keep arguing. Sixty years later, in a world where the museum and the supermarket genuinely do
 speak the same visual language, that refusal looks less like an evasion and more like the most honest
 thing the movement ever did.
 </p>
 </article>
 </>)

// ─────────────────────────────────────────────────────────────
// Movement, Abstract Expressionism (1943–1960). The first American movement to
// lead world art. Gated pipeline; narrative under 'abex'. The app's worst image
// case: NO work is inlineable (all post-1940) and even milieu photos are
// encumbered, so the only image is the hero (a PD 1950s NYC streetscape); the
// works are RestrictedFigure "Under copyright" cards + vivid prose. Manifesto
// absent. No em-dashes in shippable prose.
// ─────────────────────────────────────────────────────────────

// ── 1. The center of art crosses the ocean ──────────────────
const AbexCrownNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="New York · the 1940s" title="The capital moves" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>F</DropCap>
 or three centuries, if you wanted the newest thing in painting, you went to Europe, usually to Paris.
 The Impressionists, the Cubists, the Surrealists were all Paris stories. Then the war broke Europe, and
 the capital of art moved across an ocean. By the late 1940s the new thing in painting came out of New
 York, and for the first time the rest of the world looked to America to see what came next. That, at
 least, is the standard account, and it is the one large fact behind the story (it is a widely held
 judgment more than a measured fact, but by the early 1950s the art world was unmistakably watching New
 York). How it happened is a story of refugees, a New Deal jobs program, a teacher with a German accent,
 and a bomb. It is also, fair warning, a movement whose painters held a frankly enormous opinion of what
 they were doing; a little of that self-belief is the price of admission.
 </p>
 <p style={proseStyle}>
 Start with the refugees. As the Nazis overran Europe its artists ran, many of them to New York: the
 Surrealists almost as a group (André Breton, Max Ernst, André Masson, the young Matta), plus the
 abstract painters Mondrian and Léger. The Surrealism read tells that exile in full. What matters is what
 the émigrés (people forced into exile) carried in their luggage: a method.{' '}<strong>Automatism</strong>,
 the Surrealist practice of making marks straight from the unconscious with the editing, reasoning mind
 switched off, so chance and buried impulse do the composing. The goal was{' '}<strong>abstraction</strong>{' '}
 (painting with no recognizable objects or scenes), and the refugees handed the Americans the tool to get
 there.
 </p>

 <SectionHeader accent={accent} label="Gorky" title="The human hinge" />
 <p style={proseStyle}>
 If you want one person who is the bridge from Surrealism into this new American painting, it is{' '}
 <strong>Arshile Gorky</strong>, and he deserves more than the word &ldquo;bridge.&rdquo; He was born
 Vostanik Manoug Adoian around 1904 in Ottoman Armenia, survived the Armenian Genocide (the mass killing
 and deportation of Armenians during the First World War), reached America as a young man, and reinvented
 himself wholesale, taking the name Arshile Gorky and a half-invented past to go with it. He spent the
 1930s working through Cézanne and Picasso almost like a syllabus, and in the 1940s found his own voice by
 fusing automatism with abstraction. Then his luck collapsed: a 1946 studio fire destroyed much of his
 work, cancer followed, and in 1948 he died by suicide, just as the movement he had done so much to seed
 was taking off. He opened the door and did not live to walk through it.
 </p>
 <RestrictedFigure
 title={<>Gorky, <em>The Liver Is the Cock&rsquo;s Comb</em></>}
 year="1944 · Buffalo AKG Art Museum"
 imageUrl={ART_IMG.gorkyLiver}
 note="A large, turbulent canvas of biomorphic near-shapes in acid color, somewhere between a body-map and a hallucination. The literal hinge from Surrealist automatism to Abstract Expressionism."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/The_Liver_Is_the_Cock%27s_Comb"
 />

 <SectionHeader accent={accent} label="The teacher, the WPA, the bomb" title="The ground it grew from" />
 <p style={proseStyle}>
 The Americans changed automatism on the way. The Surrealists used it to dredge up dream-images; the
 Americans (Pollock, Gorky, the young Robert Motherwell) kept the part where the hand runs unsupervised
 but dropped the dream-pictures. What was left was pure{' '}<strong>gesture</strong>{' '}(the physical mark of
 the artist&rsquo;s moving hand and body, the brushstroke or poured line as a direct trace of motion).
 There was a second European who stayed:{' '}<strong>Hans Hofmann</strong>, who ran an art school in New
 York and Provincetown that nearly every American modernist passed through. He preached &ldquo;push and
 pull,&rdquo; that flat patches of color, arranged right, can make a flat canvas seem to advance and
 recede without ever pretending to be a window. He taught the Americans to treat a painting as an object
 in its own right rather than a picture of something. (Lee Krasner studied
 with him.)
 </p>
 <p style={proseStyle}>
 None of these painters could have kept working through the 1930s without help, and it came from the
 government. The{' '}<strong>WPA</strong>{' '}Federal Art Project (part of the Works Progress
 Administration, the New Deal program that put millions of unemployed Americans to work in the
 Depression) paid artists a modest salary to make art. Pollock, de Kooning, Gorky, Krasner and Rothko all
 drew WPA paychecks, and it kept them alive and, just as important, in the same city, broke and ambitious
 together. Then came the war&rsquo;s end and the bomb. Painters who had lived through a global slaughter
 and a weapon that could erase a city wanted a painting equal to that weight, and many turned to myth,
 ritual and the unconscious. Their ambition got a public statement in 1943, when Adolph Gottlieb and Mark
 Rothko, with Barnett Newman, wrote to the New York Times in reply to a critic, Edward Alden Jewell, who
 had dismissed their work. The line they all stood on:{' '}<em>there is no such thing as good painting
 about nothing.</em>
 </p>

 <SectionHeader accent={accent} label="The bar and the Club" title="The room where it got argued" />
 <p style={proseStyle}>
 A movement is not only paintings; it is the room where the painters argue, and for this one there were
 two, a block apart in Greenwich Village. The first was a bar. The{' '}<strong>Cedar Tavern</strong>{' '}(the
 Cedar Street Tavern, 24 University Place) was the social engine from about 1950: a plain, smoky place
 where Pollock, de Kooning, Kline, Joan Mitchell, Krasner and Frankenthaler drank, argued theory and
 money, threw punches, slept with each other, and made and broke reputations over a night. Pollock once
 tore the men&rsquo;s-room door off its hinges. The second room was the brain.{' '}
 <strong>The Artists&rsquo; Club</strong>, known as &ldquo;the Club&rdquo; (founded 1949, 39 East 8th
 Street), held Friday-night panels and debates: artists and critics hashing out what abstraction was for
 and what &ldquo;the sublime&rdquo; meant in a Manhattan loft. The Cedar supplied the heat and the Club
 the talk, and between them they were the movement&rsquo;s Montmartre.
 </p>
 <p style={proseStyle}>
 That is the ground: refugees with a method, a hinge-figure who fused it with abstraction, a teacher with
 a theory, a jobs program that kept everyone together, a war that demanded a heavy painting, and a bar
 and a club where it got argued into shape. Out of it grew one idea, that a painting need not be{' '}
 <em>of</em>{' '}anything, which is what people meant by{' '}<strong>Abstract Expressionism</strong>:
 abstract, with no recognizable subject, and expressionist, made to deliver raw feeling. That one idea
 promptly split into two wings that look like opposites. The next two chapters take them one at a time.
 </p>
 </article>

 <MeanwhileSheet
 region="Paris"
 title="The capital that did not come back"
 body="The city that had been the capital of art for a century came out of the Occupation exhausted and broke, its leading avant-garde scattered or in exile. The center of gravity did not so much leave Paris as fail to return to it. Critics still argue about exactly when New York won, but by the early 1950s the international art world was watching New York, not Paris, for the next move."
 />
 </>)

// ── 2. The canvas as an arena ───────────────────────────────
const AbexArenaNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The floor" title="Pollock and the pour" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he picture most people have in their heads when they hear &ldquo;Abstract Expressionism&rdquo; is one
 man flinging paint, and the man is{' '}<strong>Jackson Pollock</strong>{' '}(1912&ndash;1956). He was a
 Westerner, born in Cody, Wyoming, raised in Arizona and California, and he carried a cowboy-loner persona
 into the New York art world, romanticizing Native American sand-painting (made by trickling colored sand
 onto the ground) as a model for an art made flat on the floor. The heavy drinking that would eventually
 kill him was already part of his life during these peak years, not just at the end. Around 1947 he did
 something that sounds simple and was not: he took the canvas off the easel and laid it on the floor of
 his barn studio on Long Island, then walked around all four sides and flung, dripped and poured thinned
 house enamel from a stick, letting the paint fall in long looping skeins. In his statement
 &ldquo;My Painting&rdquo; he said the floor let him feel nearer the work, able to walk around it and
 &ldquo;literally be in the painting.&rdquo;
 </p>
 <p style={proseStyle}>
 Picture the result.{' '}<em>Autumn Rhythm (Number 30)</em>{' '}of 1950 is almost nine feet tall and more
 than seventeen wide, a wall of poured and dripped line in black, white and tan, threads crossing and
 looping over the whole surface. There is no figure, no horizon, no center; your eye cannot rest on a
 main thing because there is no main thing, the density the same in the corners as in the middle. Critics
 named it the{' '}<strong>all-over composition</strong>{' '}(a picture with no focal point and no hierarchy,
 the same all the way across, more like a field or a weather system than a scene).{' '}
 <em>One: Number 31, 1950</em>, from the same peak year, is an even denser tangle of black, white and grey
 drips at the same mural scale.
 </p>
 <RestrictedFigure
 title={<>Pollock, <em>Autumn Rhythm (Number 30)</em></>}
 year="1950 · The Metropolitan Museum of Art"
 imageUrl={ART_IMG.pollockAutumn}
 note="A web of poured and dripped paint running edge to edge with no center, almost nine feet tall and seventeen wide, made on the floor from all four sides. The subject is no longer what you see; it is the act of painting itself."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Autumn_Rhythm_(Number_30)"
 />

 <SectionHeader accent={accent} label="“Action painting”" title="A critic’s word, one wing only" />
 <p style={proseStyle}>
 The critic Harold Rosenberg gave this kind of work a name that stuck:{' '}<strong>action painting</strong>.
 The phrase means what it says: the painting is the record of an action, the physical act of the artist
 moving and marking, frozen on the surface. The canvas, Rosenberg wrote, had become &ldquo;an arena in
 which to act.&rdquo; Two warnings, both load-bearing. First, it is a critic&rsquo;s word, coined in 1952,
 not a name the painters chose; Pollock never called himself an action painter. Second, it describes this
 wing only. The color-field painters are not action painters, and calling them that
 gets the whole movement wrong. And the legend oversells the originality: pouring paint had been tried
 before, and the deeper idea, letting the unconscious and chance compose, came straight from Surrealist
 automatism. What Pollock did was build a whole new way of painting out of it, at a scale and commitment
 nobody had matched. That is the claim, and it is plenty.
 </p>

 <SectionHeader accent={accent} label="de Kooning, Kline" title="The Woman, and the girders" />
 <p style={proseStyle}>
 The gesture wing was not all abstraction.{' '}<strong>Willem de Kooning</strong>{' '}(1904&ndash;1997), a
 Dutchman who had stowed away to America in 1926, kept the human figure when nearly everyone dropped it.
 His{' '}<em>Woman I</em>{' '}(1950&ndash;52) is a ferocious, toothy, more-than-life-size female figure
 built of slashing, scraping strokes, the paint dragged and reworked over months until the whole surface
 looks fought-over. It scandalized both camps at once: the avant-garde thought he had betrayed abstraction
 by keeping a recognizable woman, traditionalists thought the woman a monstrous insult to painting. He had
 managed to be figurative and abstract in the same picture, and to make everyone angry, which is one
 definition of being ahead of your time.
 </p>
 <RestrictedFigure
 title={<>de Kooning, <em>Woman I</em></>}
 year="1950–52 · MoMA, New York"
 imageUrl={ART_IMG.deKooningWoman}
 note="A ferocious, toothy, more-than-life-size female figure built of slashing strokes, reworked over months. Figurative and abstract at once, it made the avant-garde and the traditionalists equally furious."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Woman_I"
 />
 <p style={proseStyle}>
 <strong>Franz Kline</strong>{' '}(1910&ndash;1962) went the other way, into pure black-and-white
 abstraction at the scale of a wall. His{' '}<em>Chief</em>{' '}(1950) looks like a few enormous brush-marks,
 thick black girders of house-paint crossing a white ground, blown up so large they read like
 architecture or the skeleton of a bridge. The title is the name of a locomotive Kline knew as a boy, and
 the pictures have that heavy, mechanical weight, as if a single calligrapher&rsquo;s stroke had been
 enlarged until you could walk into it. Pollock&rsquo;s web, de Kooning&rsquo;s slashing figure,
 Kline&rsquo;s black beams: three painters who agreed only that the act of painting, the gesture itself,
 was now the thing worth putting on the wall.
 </p>
 </article>

 <MeanwhileSheet
 region="Long Island, 1950"
 title="The camera makes a legend"
 body="A photographer named Hans Namuth filmed and photographed Pollock at work in the barn, circling a canvas on the floor with paint trailing from the stick, even shooting up through a sheet of glass so the camera looked through the painting as it was made. The films turned the studio into a stage and made Pollock a celebrity, fixing the image of the heroic male genius in his element, which is part of why the myth attached so hard to this one man."
 />
 </>)

// ── 3. Fields of color ──────────────────────────────────────
const AbexFieldsNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The opposite move" title="Rothko’s rectangles" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he other half of Abstract Expressionism looks like the calm after Pollock&rsquo;s storm, and it is just
 as radical. The{' '}<strong>color-field</strong>{' '}painters (the term means painting built from large,
 simple, mostly unbroken areas of color rather than from gesture or drawing) wanted not the trace of a
 frantic act but stillness, vastness, and a kind of glow. Their patron saint is{' '}
 <strong>Mark Rothko</strong>{' '}(1903&ndash;1970). A mature Rothko is two or three soft-edged rectangles
 of color, stacked and hovering on a larger field of a different color, the edges feathered so the blocks
 seem to float and pulse rather than sit flat.{' '}<em>No. 61 (Rust and Blue)</em>{' '}(1953) stacks a band of rust
 and a band of deep blue on a brooding grey-mauve field, the kind of layered, smoldering color he meant you to stand inside.
 </p>
 <p style={proseStyle}>
 The point was scale and closeness. Rothko made the canvases big and wanted them hung low and seen from a
 few feet away, so the color fills your whole field of vision and you stand inside it rather than in front
 of it. He hated being called an abstractionist or a colorist; he insisted his real subject was raw human
 emotion, tragedy and ecstasy and doom, and that a person who wept in front of his paintings had
 understood them better than one admiring the color relationships. The rectangles were the door, not the
 subject. You can read the man straight off the canvas: over the years his palette darkened with his mood,
 from the glowing orange-and-yellow of the mid-1950s to the near-black of his last work as his depression
 deepened, so the pigment itself becomes a record of where he was.
 </p>
 <RestrictedFigure
 imageUrl={ART_IMG.rothkoNo61}
 title={<>Rothko, <em>No. 61 (Rust and Blue)</em></>}
 year="1953 · Museum of Contemporary Art, Los Angeles"
 note="Bands of rust and deep blue stacked on a brooding grey-mauve field, the soft-feathered edges making the color float and pulse, built big and meant to be seen up close so it fills your whole vision."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/No._61_(Rust_and_Blue)"
 />

 <SectionHeader accent={accent} label="The Seagram refusal" title="Walking away from the money" />
 <p style={proseStyle}>
 Two stories show how seriously Rothko meant it. In 1958 he took a lucrative commission to paint murals
 for the Four Seasons, an expensive restaurant in the new Seagram Building, worked over a year on dark,
 wine-colored canvases built around looming portal shapes, then walked away from the money and pulled the
 commission, unwilling to let his art hang as decor for rich diners. He later gave nine of the Seagram
 murals to the Tate in London, where, by a grim coincidence, they arrived on 25 February 1970, the day he
 was found dead in his studio, having taken his own life. His final project was the{' '}
 <strong>Rothko Chapel</strong>{' '}in Houston, an eight-sided, octagonal room holding fourteen of his
 canvases, nearly black, made not as pictures to look at but as an environment to sit inside: a place, not
 a painting.
 </p>

 <SectionHeader accent={accent} label="Newman, Still" title="The zip and the cliffs" />
 <p style={proseStyle}>
 If Rothko was the wing&rsquo;s mystic,{' '}<strong>Barnett Newman</strong>{' '}(1905&ndash;1970) was its
 theorist of the void. His whole art turns on a single device he called the{' '}<strong>&ldquo;zip&rdquo;</strong>:
 one thin vertical band of color running the full height of the canvas, dividing and charging an otherwise
 empty field. He found it in 1948 in a modest maroon canvas,{' '}<em>Onement I</em>, split top to bottom by
 a single ragged orange stripe (the title is an old root of &ldquo;atonement,&rdquo; the state of being
 made one). The masterpiece is{' '}<em>Vir Heroicus Sublimis</em>{' '}(1950&ndash;51), a vast red field
 nearly eight feet tall and almost eighteen wide, crossed by a few thin zips, meant to be stood in front
 of so close it fills your sight. The Latin means roughly &ldquo;man, heroic and sublime,&rdquo; and that
 is the claim: that an abstract American painting could reach the{' '}<strong>sublime</strong>{' '}(the old
 idea of a beauty so vast it tips past pleasure into awe and dread). Newman wrote the wing&rsquo;s credo
 in 1948 and titled it, with no hedging, &ldquo;The Sublime Is Now.&rdquo;
 </p>
 <RestrictedFigure
 title={<>Newman, <em>Vir Heroicus Sublimis</em></>}
 year="1950–51 · MoMA, New York"
 imageUrl={ART_IMG.newmanVir}
 note="A vast red field nearly eight feet tall and almost eighteen wide, crossed by a few thin vertical “zips,” meant to be stood in front of so close it fills your sight. An abstract painting reaching for the sublime."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Vir_Heroicus_Sublimis"
 />
 <p style={proseStyle}>
 The most extreme of the field painters, and arguably the first of them to the pure field, was{' '}
 <strong>Clyfford Still</strong>{' '}(1904&ndash;1980). He arrived at the large vertical color-field format
 early, in the early-to-mid 1940s, before either Rothko or Newman had settled into theirs, which makes him
 a founder of color-field painting and not merely its hermit. His canvases are huge and dark, built from
 torn, ragged vertical sheets of thick paint that look like cliffs or peeling bark, with bright flashes of
 color stranded and violent against the charcoal dark, like a torn map of a country that does not exist.
 He despised the market, hoarded most of his own output, and arranged for it to go to a single dedicated
 museum (now in Denver) rather than be scattered and sold. Three painters, one wing: Rothko&rsquo;s
 floating veils, Newman&rsquo;s single charged line, Still&rsquo;s torn cliffs, all aiming at stillness
 and immensity, the same towering ambition as the gesture painters pointed the opposite way. Not the
 record of an act. The field itself.
 </p>
 </article>
 </>)

// ── 4. Two critics, one fight ───────────────────────────────
const AbexCriticsNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Going public" title="The Irascibles and the 9th Street Show" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>B</DropCap>
 efore the critics crowned anyone, the painters announced themselves. In May 1950 eighteen of them signed
 an open letter protesting the Metropolitan Museum&rsquo;s conservative jury for a big exhibition of
 American art, and the magazine LIFE photographed the group, a glowering huddle of painters in suits that
 ran in January 1951 under the nickname the{' '}<strong>Irascibles</strong>. It was the movement&rsquo;s
 first public collective act, the moment it cohered into a recognizable group. The next year they did it
 with art. In the spring of 1951 the painters themselves, with help from the dealer Leo Castelli, rented
 an empty storefront at 60 East 9th Street and hung the{' '}<strong>9th Street Show</strong>{' '}(the
 &ldquo;9th Street Exhibition of Paintings and Sculpture&rdquo;), a sprawling self-organized group show of
 Pollock, de Kooning, Kline, Rothko, Newman, Krasner, Frankenthaler and some sixty others. It was the
 public declaration that a New York School now existed, mounted not by a museum but by the artists in a
 rented room.
 </p>

 <SectionHeader accent={accent} label="Rosenberg" title="The painting as an event" />
 <p style={proseStyle}>
 The legend leaves out something: the painters did not make their own reputations alone. Two New
 York critics did much of it for them, and they could not stand each other. The first was{' '}
 <strong>Harold Rosenberg</strong>, the poet-critic of the pair, who drank with the painters at the Cedar
 and wrote about painting as if he were flinging the paint himself, all heat and motion. In December 1952
 he published &ldquo;The American Action Painters&rdquo; in ARTnews, the single most influential piece of
 writing the movement produced, and its core idea is that a painting is no longer a picture but an{' '}
 <strong>event</strong>. The canvas had become &ldquo;an arena in which to act&rdquo;; what ends up on the
 wall is the trace of a man facing a blank surface and doing something on it, an existential act more than
 an image. (Existential here points to the philosophy of the day, that a person&rsquo;s choices and acts,
 made in the face of a meaningless universe, are what define them.) For Rosenberg the drama was the doing;
 the painting was the leftover proof. &ldquo;Action painting&rdquo; was his coinage, and it fit the
 gesture wing like a glove and Rothko&rsquo;s still fields not at all, which is why it belongs to one wing
 only.
 </p>

 <SectionHeader accent={accent} label="Greenberg" title="The painting as an object" />
 <p style={proseStyle}>
 The rival was{' '}<strong>Clement Greenberg</strong>, the opposite kind of man and critic: a cold-eyed
 ex-Trotskyist (once a follower of the revolutionary Leon Trotsky) turned the most exacting formalist of
 his generation, who believed, simply and without much doubt, that he was right, and had the power to
 match it, since a Greenberg review could make or break a career. He was a{' '}<strong>formalist</strong>,
 meaning he held that the meaning of a painting lives in its physical form, its color, shape and surface,
 not in any story, emotion or &ldquo;act&rdquo; behind it. His big idea was{' '}<strong>flatness</strong>:
 painting had spent five centuries pretending a flat canvas was a deep space, and the whole march of
 modern art was painting slowly admitting the one thing that made it itself, that it is flat, a stretched
 cloth covered in color. Abstract Expressionism, in his reading, was the next step in that purification.
 He championed Pollock early (from the early 1940s, writing the &ldquo;Art&rdquo; column in The Nation, he
 was praising Pollock by 1943, before the drip paintings and the fame) and, years later, turned on him,
 backing instead the staining color painters who came after. He laid out the theory in
 &ldquo;American-Type Painting&rdquo; (1955).
 </p>

 <SectionHeader accent={accent} label="The machine" title="Why the rivalry matters" />
 <p style={proseStyle}>
 So two clean opposites fought over the same pictures. Rosenberg: the painting is an event, the record of
 a self in action. Greenberg: the painting is an object, pure flat optical form, the next move in
 modernism&rsquo;s logic. They backed different artists, wrote in different magazines, and their dislike
 was personal and vicious, not merely a clash of theories, and that quarrel is not a footnote. It is part
 of how the canon got built. And the dealers were the other half of the machine. The single most
 important early platform was the{' '}<strong>Betty Parsons Gallery</strong>, which opened in 1946 and gave
 the movement its first real commercial home: Pollock (from 1947), Rothko, Newman and Still all showed
 there between 1947 and 1952, before Sidney Janis lured several away to a more established gallery. A
 movement that distrusted the market still ran on it. A painting did not become a masterpiece by hanging
 on a wall; someone with a typewriter and a magazine, and someone with a gallery and a price list, had to
 say so first.
 </p>
 </article>
 </>)

// ── 5. The women written out ────────────────────────────────
const AbexCutNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The myth and the names" title="Half the people in the room" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he story Abstract Expressionism told about itself starred a handful of heroic men: the lone genius in his
 studio, fighting paint, drinking hard, making history with his body. It is a thrilling story, and it is
 missing half the people who were in the room. A whole cohort of serious women painters helped make this
 movement and were written out of it, dismissed as wives or &ldquo;lady painters,&rdquo; left out of the
 big shows and the big essays, and largely forgotten until art historians went looking again in recent
 decades. Naming them is not a courtesy. It is correcting the record.
 </p>
 <p style={proseStyle}>
 Start with{' '}<strong>Lee Krasner</strong>{' '}(1908&ndash;1984), the textbook case. A rigorously trained
 painter who had studied with Hofmann and a major artist in her own right, she happened to marry Jackson
 Pollock, and for decades the art world filed her under &ldquo;Pollock&rsquo;s wife,&rdquo; which suited
 the genius myth and buried a real career. In fact she kept painting at full power for nearly thirty years
 after Pollock&rsquo;s death, and some of her boldest, largest work, surging fields of organic
 pink-and-green forms like{' '}<em>The Seasons</em>{' '}(1957), came in exactly the years the legend had
 decided she was a footnote.
 </p>
 <RestrictedFigure
 title={<>Lee Krasner, <em>The Seasons</em></>}
 year="1957 · Whitney Museum of American Art"
 note="Surging fields of organic pink-and-green forms, nearly seventeen feet wide, painted in the years after Pollock’s death when the legend had filed her under “the wife.” Under copyright, so it lives here in words."
 linkLabel="See her on Wikipedia"
 href="https://en.wikipedia.org/wiki/Lee_Krasner"
 />

 <SectionHeader accent={accent} label="The soak-stain" title="Frankenthaler, and the credit" />
 <p style={proseStyle}>
 The single most consequential thing any woman did in this movement may be the most consequential thing
 anyone did for what came after it. In 1952, at the age of twenty-three,{' '}
 <strong>Helen Frankenthaler</strong>{' '}(1928&ndash;2011) made{' '}<em>Mountains and Sea</em>{' '}by pouring
 thinned-down paint directly onto raw, unprimed canvas, so the color soaked into the weave like a stain on
 cloth rather than sitting on top of it as a brushed skin. The result was soft, luminous veils of color,
 suggesting a landscape without depicting one. She had invented the{' '}<strong>soak-stain</strong>, and it
 became the literal bridge from Abstract Expressionism to the next movement.
 </p>
 <RestrictedFigure
 title={<>Frankenthaler, <em>Mountains and Sea</em></>}
 year="1952 · National Gallery of Art (long-term loan)"
 imageUrl={ART_IMG.frankenthalerMtns}
 note="Thinned paint poured into raw, unprimed canvas so the color soaks in like a stain: soft luminous veils suggesting a landscape without depicting one. Painted at 23, it founded the soak-stain and launched Color Field."
 linkLabel="See it on Wikipedia"
 href="https://en.wikipedia.org/wiki/Mountains_and_Sea"
 />
 <p style={proseStyle}>
 There were more.{' '}<strong>Joan Mitchell</strong>{' '}(1925&ndash;1992) made lush, slashing gestural
 abstractions that turn memories of landscape into storms of color, working much of her life in France.{' '}
 <strong>Elaine de Kooning</strong>{' '}(1918&ndash;1989) was a painter and a sharp, widely read art critic
 at once, writing the reviews that shaped opinion in the very scene that overlooked her own canvases.{' '}
 <strong>Grace Hartigan</strong>{' '}(1922&ndash;2008) was among the most respected painters of the younger
 New York generation in the 1950s. Each was a central New York School artist; each was, for decades,
 treated as a minor character in a story about men.
 </p>
 <p style={proseStyle}>
 The injustice sharpens here: two younger painters, Morris Louis and Kenneth Noland, saw{' '}
 <em>Mountains and Sea</em>, picked up Frankenthaler&rsquo;s soak-stain, and built it into Color Field
 painting, and it was those two men, not the woman who invented the method, who collected most of the
 founding credit for the movement that grew straight out of her experiment. A young woman worked out how
 paint should meet cloth, and two men walked through the door she opened and got their names on it.
 </p>
 </article>
 </>)

// ── 6. A weapon and a wreck ─────────────────────────────────
const AbexWeaponNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="The CIA, told straight" title="A weapon nobody asked to be" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n the 1950s Abstract Expressionism became a tool of American foreign policy, and most of the painters
 never knew. This is a real story with a documented record, and it is easy to tell badly in either
 direction, so here it is carefully. During the early Cold War the United States was competing with the
 Soviet Union in culture as well as weapons, and the Soviets pointed to their official art,{' '}
 <strong>socialist realism</strong>{' '}(heroic, legible, propagandistic paintings of happy workers and
 strong leaders), as proof of a healthy society. American officials wanted a counter-image, and Abstract
 Expressionism made a perfect one: free, individual, expressive, abstract, the visual opposite of
 state-dictated realism.
 </p>
 <p style={proseStyle}>
 The promotion was covert. Working largely through a front organization called the{' '}
 <strong>Congress for Cultural Freedom</strong>{' '}and a web of foundations, the CIA secretly funded
 exhibitions and magazines that showcased this American painting abroad, roughly from 1950 into the late
 1960s; the historian Frances Stonor Saunders documented the operation in{' '}<em>The Cultural Cold War</em>{' '}
 (1999). Now the careful part, both ways. The CIA did not create Abstract Expressionism; the painters had
 invented it on their own years earlier, and most of them never learned their work had been used this way,
 and they were not agents of anything. The accurate statement is narrow and strange enough on its own: a
 secret arm of the American state quietly used these paintings, made by mostly left-leaning artists who
 would have been horrified, as a Cold War advertisement for American freedom. Not a fake movement, not a
 conspiracy that painted the pictures. State patronage that hijacked art the painters thought was nobody&rsquo;s
 business but their own.
 </p>

 <SectionHeader accent={accent} label="Pollock’s wreck" title="The end of the man at the center" />
 <p style={proseStyle}>
 The man at the center of the myth did not get to enjoy it for long. Jackson Pollock was a lifelong
 alcoholic, and his drinking got worse as his fame grew and his painting stalled. On the night of 11
 August 1956, drunk, he drove his car off a road near his home in Springs and crashed into the trees. He
 was killed, and so was a young woman riding with him, Edith Metzger; a second passenger, Ruth Kligman,
 survived. Pollock was forty-four. There is nothing romantic in it, and the legend tends to launder the death into tragic poetry. A man whose drinking had worsened as his
 fame grew drank himself into a state where he killed himself and an innocent passenger with a car.
 </p>

 <SectionHeader accent={accent} label="What it left" title="The center, and the reaction" />
 <p style={proseStyle}>
 What the movement left behind is enormous, and it outlasted every one of these quarrels. Abstract
 Expressionism moved the center of the art world to New York and kept it there for a generation, and it
 set the terms everything afterward had to answer: the giant scale, the abstraction, the heroic gesture,
 and the whole modern machinery of dealers, critics and a market that turns living artists into stars. Its
 direct heir was{' '}<strong>Color Field</strong>{' '}painting, which ran straight out of
 Frankenthaler&rsquo;s soak-stain through Morris Louis and Kenneth Noland and gave you the pure glowing
 field with the gesture drained out.
 </p>
 <p style={proseStyle}>
 The two movements that came next had a simpler choice: match this art&rsquo;s huge, earnest,
 self-serious scale, or mock it.{' '}<strong>Pop Art</strong>{' '}chose mockery,
 trading the heroic inward self for the cool surfaces of advertising, comics and the supermarket.{' '}
 <strong>Minimalism</strong>{' '}kept the scale and dumped the soul, holding onto the big empty field but
 stripping out the drama and the personality for something impersonal, industrial and literal. Either way,
 the next generation needed something enormous to push against, and Abstract Expressionism was it.
 </p>
 </article>
 </>)

export const MOVEMENT_NARRATIVES: Record<string, Record<string, Narrative>> = {
 cubism: {
 before: BeforeNarrative,
 analytic: AnalyticNarrative,
 shards: ShardsNarrative,
 paper: PaperNarrative,
 public: PublicNarrative,
 after: AfterNarrative,
 },
 abex: {
 crown: AbexCrownNarrative,
 arena: AbexArenaNarrative,
 fields: AbexFieldsNarrative,
 critics: AbexCriticsNarrative,
 cut: AbexCutNarrative,
 weapon: AbexWeaponNarrative,
 },
 pop: {
 britain: PopBritainNarrative,
 bridge: PopBridgeNarrative,
 machine: PopMachineNarrative,
 debate: PopDebateNarrative,
 leftout: PopLeftOutNarrative,
 legacy: PopLegacyNarrative,
 },
 sur: {
 manifesto: SurManifestoNarrative,
 automatism: SurAutomatismNarrative,
 dream: SurDreamNarrative,
 women: SurWomenNarrative,
 pope: SurPopeNarrative,
 exile: SurExileNarrative,
 },
 dada: {
 cabaret: DadaCabaretNarrative,
 urinal: DadaUrinalNarrative,
 berlin: DadaBerlinNarrative,
 trash: DadaTrashNarrative,
 paris: DadaParisNarrative,
 left: DadaLeftNarrative,
 },
 fut: {
 press: FuturismPressNarrative,
 painters: FuturismPaintersNarrative,
 paris: FuturismParisNarrative,
 speed: FuturismSpeedNarrative,
 program: FuturismProgramNarrative,
 war: FuturismWarNarrative,
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
