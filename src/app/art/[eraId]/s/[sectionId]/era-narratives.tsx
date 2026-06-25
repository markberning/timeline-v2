'use client'

// Modern, the era's own narrative, 1850–1970: the whole century-long argument
// over what a painting is for, from Courbet's tent outside the 1855 Exposition to
// Warhol's soup cans. It opens with a "Lay of the land" scene-setter (the world
// the revolt walked into) and then runs seven movement-cluster chapters framed by
// that argument, so it reads as one story; the per-movement and per-work reads
// (Cubism, the Demoiselles) go deeper one level down.
//
// House voice (dry wit up, comparisons to land the points, made to make you
// LOOK). Revised 2026-05-23 against the art content pipeline gates (facts,
// looking, clarity, framing, comprehensiveness), see audits/art-content-pipeline.md.
// Figures honor the copyright tiers in art-content.ts; the later the chapter,
// the more the rights regime forces the degraded RestrictedFigure, which is
// itself part of the story this era tells.

import {
 DropCap, SectionHeader, PaintingFigure, RestrictedFigure, MeanwhileSheet,
 proseStyle, PD_RIGHTS, AMBER, BLUE,
 type Narrative,
} from '@/components/mode/art-reader'
import { ART_IMG } from '@/lib/art-content'
import { NRO_IMG } from '@/lib/art-content-nro'

const SALON = ['#6b5a3a', '#3a2e1c', '#14100a'] as [string, string, string]
const ACADEMY = ['#4a6a8a', '#c8b89a', '#1c2230'] as [string, string, string]
const COURBET = ['#6b5034', '#3a2820', '#100c08'] as [string, string, string]
const MONET = ['#3a6a8a', '#c8c050', '#1c2a30'] as [string, string, string]
const SEURAT = ['#3a6a4a', '#c8b84a', '#1c2a18'] as [string, string, string]
const VAN_GOGH = ['#1c3a6a', '#c8a72a', '#0e1224'] as [string, string, string]
const MATISSE = ['#bf2f25', '#d6cf3f', '#1c1c1c'] as [string, string, string]
const PIC = ['#c0a06c', '#3d3a2e', '#8a6b3a'] as [string, string, string]
const STEEL = ['#1c1c1c', '#a0a0a0', '#d6cf3f'] as [string, string, string]

// ── Shared NRO era palette tones (used by the pasted Neoclassical & Romantic era reads) ──
const NRO_STONE = ['#8a7a5a', '#4a3c2a', '#14100a'] as [string, string, string]
const NRO_STEEL = ['#5a6470', '#2e3640', '#10141a'] as [string, string, string]
const NRO_OXBLOOD = ['#a8482a', '#5a2418', '#1a0c08'] as [string, string, string]
const NRO_SUNSET = ['#c87a2a', '#7a3014', '#1c0e08'] as [string, string, string]
const NRO_FOG = ['#6a7480', '#3a4450', '#12161c'] as [string, string, string]
const NRO_PD_WORLD = 'Public domain worldwide. Wikimedia Commons.'

// ── 0. Lay of the land ──────────────────────────────────────
const LandNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · around 1850" title="One ladder, and the State owned it" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>B</DropCap>
 efore anybody breaks anything, look at what there was to break. In France around 1850 there was exactly
 one way to become a painter, and it was less a profession than a single narrow staircase with the State
 standing at the top of it. The{' '}<strong>Académie des Beaux-Arts</strong>{' '}(the art wing of the Institut de
 France, the country&rsquo;s official body of approved excellence) decided what counted as good painting,
 trained the painters who made it, and showed the results once a year in one enormous public hall. Climb
 that staircase and you had collectors, commissions, a name. Miss it and you did not have a career. You had
 a hobby.
 </p>
 <p style={proseStyle}>
 The training was a long boot camp, and the order in which you were allowed to do things tells you
 everything about what the institution valued. At the{' '}<strong>École des Beaux-Arts</strong>{' '}(the state art
 school) a student spent years drawing (first from plaster casts of antique statues, then from the live
 model) before he was trusted to touch serious paint at all.{' '}<em>He</em>, and it mattered: the official
 school admitted no women at all until 1897. A woman who wanted real training got it in the private studios (the{' '}<strong>Académie Julian</strong>, opened in 1868, was the famous one), and it gave its women students
 the thing the École withheld: a live nude model to draw from. For half the population the State staircase
 simply had no bottom step. The supreme prize was the{' '}<strong>Prix de Rome</strong>{' '}(a State-funded
 scholarship to study the old masters), which shipped its winner off to the{' '}<strong>Villa Medici</strong>{' '}in Rome at the country&rsquo;s expense to copy the masters for years on end. The house style this machine
 produced prized{' '}<em>fini</em>{' '}(a surface blended so smoothly that you could not find a single brushstroke
 if you went looking; the paint was supposed to disappear, leaving only the picture) and clean line and
 drawing over loose, expressive color.
 </p>
 <p style={proseStyle}>
 And it enforced a strict pecking order of{' '}<em>subjects</em>, a ranking formalised back in 1667 by the
 royal court historian André Félibien and still running the show two centuries later, the{' '}<strong>hierarchy of genres</strong>. Think of it as a caste system for things you could paint. At the very top
 sat history painting (grand scenes from myth, scripture, ancient history and allegory, full of the human
 body at heroic size), the only category serious enough to win a man real glory. At the very bottom sat the
 still life, a bowl of fruit, a dead pheasant, painted small. The principle was blunt: gods at the top, a
 bowl of fruit at the bottom, with the more ordinary subjects strung out in between. A young painter who
 wanted respect painted gods, not greengrocers.
 </p>

 <SectionHeader accent={accent} label="The one room" title="Where careers were made and skied" />
 <p style={proseStyle}>
 All of it funnelled into a single event. The{' '}<strong>Salon</strong>{' '}was the Académie&rsquo;s official
 public exhibition, and it was the only theater in town, the one place where a wide Paris public, hundreds
 of thousands of people, came each year to look at, fight over and actually{' '}<em>buy</em>{' '}new art. The
 Académie held a monopoly on it right through 1880, so in the 1850s the Salon was, flatly, a State-run
 institution. What got in was decided by the{' '}<strong>Salon jury</strong>, a panel of Académie members and
 state appointees who reviewed the year&rsquo;s submissions and ruled each one in or out. A medal there
 meant a future; rejection meant the dark. Its home kept moving in these years (it had outgrown the Louvre
 by 1848 and used various halls through the early 1850s before settling, from 1857, into the cavernous
 iron-and-glass Palais de l&rsquo;Industrie), but the{' '}<em>experience</em>{' '}of it barely changed for a
 century.
 </p>
 <p style={proseStyle}>
 That experience was a wall of paintings stacked frame-to-frame from knee height all the way to the
 ceiling, dozens of feet up. Run your eye up that wall: the higher a canvas climbed, the harder it was to
 see, until near the top the pictures were just colored rectangles tilted down at a crowd that would never
 read them. Where your picture landed decided its fate. The prime band, at eye level, was called being{' '}<strong>&ldquo;on the line&rdquo;</strong>, seen, studied, reviewed, sold. A picture hung up near the rafters
 was said to be{' '}<strong>&ldquo;skied,&rdquo;</strong>{' '}and a skied canvas was, for all practical purposes, an
 invisible one: nobody craned their neck three storeys up to discover a genius. The hang was the verdict
 before the verdict.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={SALON}
 imageUrl={ART_IMG.salonHang}
 ratio="4/3"
 alt="The Salon hung floor-to-ceiling, paintings stacked frame to frame above a crowd"
 caption={<>The whole game in one room. Paintings packed frame to frame from knee height to the rafters, and a crowd come to judge, and to buy. Where your canvas landed on this wall decided whether it had a career.</>}
 credit={<>Pietro Antonio Martini, after Johann Heinrich Ramberg,{' '}<em>Exposition au Salon du Louvre en 1787</em>{' '}(engraving), 1787 · The Met, New York</>}
 rights="Public domain worldwide. Wikimedia Commons."
 />
 <p style={{ ...proseStyle, fontSize: 13.5, fontStyle: 'italic', opacity: 0.72 }}>
 The engraving above shows the Salon of 1787, some sixty years before our moment, it is here because the
 floor-to-ceiling hang it records had barely changed by 1850.
 </p>

 <SectionHeader accent={accent} label="The official taste" title="What the jury loved" />
 <p style={proseStyle}>
 So what did all this training, all this State machinery, actually want a painting to{' '}<em>look</em>{' '}like?
 Stand in front of{' '}<strong>Alexandre Cabanel</strong>&rsquo;s{' '}<em>The Birth of Venus</em>{' '}and you have
 your answer, because the establishment did not merely admire this picture, it embraced it as its own
 ideal. A nude goddess lies stretched along the crest of a low wave, eyes half-closed, one arm thrown
 languidly back over her head, her body a single unbroken sweep of pearly, soft-focus flesh. The sea is a
 flat, untroubled blue-green; a little fizz of foam supports her; a handful of plump cherubs tumble through
 the air above. Look as hard as you like and you will not find a brushstroke, the surface is licked smooth,{' '}<em>fini</em>{' '}taken to its limit, the paint sanded out of existence so nothing comes between you and the
 illusion. Now look at the skin. There is not a pore on it, not a blemish, not a crease where she has lain
 on the water, no flush of blood, no mark that any real body or any human hand was ever in the room. It is
 flawless the way a thing is flawless when it has never been alive. And there is the catch: it is
 technically faultless and slightly too sweet, like a wedding cake.
 </p>
 <p style={proseStyle}>
 The jury adored it, and so did the man at the very top: shown at the 1863 Salon, it was bought for the
 imperial collection by the Emperor,{' '}<strong>Napoleon III</strong>, straight off the wall. Cabanel was
 elected to the Académie des Beaux-Arts that same year and handed a professorship at the École the next, the institution rewarding the man who had painted its perfect picture and then handing him the next
 generation to train. Almost everything the coming rebels did, they
 did{' '}<em>against</em>{' '}it.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={ACADEMY}
 imageUrl={ART_IMG.cabanelVenus}
 ratio="16/9"
 alt="Cabanel, The Birth of Venus (a smooth academic nude reclining on the foam)"
 caption={<>The Salon&rsquo;s ideal made flesh, a goddess not a woman, and a finish so seamless the paint itself disappears. Shown in 1863, bought for the imperial collection by the Emperor, and its painter handed a professorship at the École the next year.</>}
 credit={<>Alexandre Cabanel,{' '}<em>The Birth of Venus</em>, 1863 · Musée d&rsquo;Orsay, Paris</>}
 rights="Public domain worldwide. Wikimedia Commons."
 />

 <SectionHeader accent={accent} label="Meanwhile, the ground shifts" title="The modern world loads the gun" />
 <p style={proseStyle}>
 While the Académie polished its surfaces, the modern world was quietly loading the gun that would go off in
 its face. The first round had landed already: in 1839 the French government bought the rights to a new
 invention and released it to the world, the{' '}<strong>daguerreotype</strong>, the first practical
 photograph, a hard, perfect image fixed on a silvered copper plate. In seconds, and flawlessly, a machine
 could now do the one job painters had been paid handsomely to do for four hundred years: produce an exact
 likeness. A portrait painter&rsquo;s bread suddenly had a competitor that never blinked. That single fact
 freed painting (or forced it) to go chasing the things a camera could not.
 </p>
 <p style={proseStyle}>
 Then the tools themselves changed. In 1841 an American painter in London named{' '}<strong>John Goffe Rand</strong>{' '}patented oil paint sold in collapsible metal tubes, the squeezable kind we still use, which for
 the first time let a painter carry his colors out the door and set up in front of an actual haystack
 rather than reconstructing it from memory in a studio. (The metal tube is{' '}<em>often credited</em>{' '}with
 making{' '}<em>plein-air</em>{' '}painting (working outdoors, in front of the subject, in the open air) and even
 Impressionism itself possible. That is the popular version of the story; the truth is that it helped,
 alongside several other things.) New railways then carried the painter and his portable colors out of
 Paris to the coast and the countryside for a few francs. And Paris itself was being gutted and rebuilt:
 from the early 1850s, under Napoleon III, his chief city-planner,{' '}<strong>Baron Haussmann</strong>, drove
 wide new boulevards through the medieval tangle and lined them with gas lamps, cafés, grand apartment
 blocks and department-store windows, a glittering, modern spectacle that all but begged to be painted, if
 only painting modern life had been allowed.
 </p>

 <SectionHeader accent={accent} label="The stakes" title="Who decides what a painting is for?" />
 <p style={proseStyle}>
 So the table was set, and underneath every costume change to come (the loose brushwork, the wild color,
 the shattered perspective) it stayed the same fight for a hundred years:{' '}<em>who gets to decide what a
 painting is for?</em>{' '}The Académie&rsquo;s answer was settled and serene. Beauty, in this view, has rules;
 the Académie knows them; and the Salon is simply where you prove you have learned them. (That is the
 institution&rsquo;s attitude put into plain words, not a quotation, nobody at the Académie said it quite
 like that.) It was a closed system, and for two centuries it had worked beautifully for the people inside
 it.
 </p>
 <p style={proseStyle}>
 What it could no longer do was hold. A new kind of buyer was appearing, and with it the faint beginnings
 of a private art trade that might one day let a painter live without the jury&rsquo;s blessing at all. The
 disruptors were in place; the audience was changing; the painters of the chapters ahead would answer the
 Académie&rsquo;s serene certainty with two reckless words:{' '}<em>make it new</em>. These restless newcomers,
 running out ahead of respectable taste, are what the era will keep calling the{' '}<strong>avant-garde</strong>{' '}(a military term, the scouts who go out in front of the main army, borrowed for the artists who got somewhere
 first). And the very first of them would not bother arguing with the jury at all. When the world&rsquo;s
 fair turned his pictures down, he simply built his own tent across the street.
 </p>
 </article>

 <MeanwhileSheet
 accent={AMBER}
 region="the Paris art market"
 title="A new buyer changes who needs the jury."
 body="A rising middle class wanted smaller, cheaper pictures for ordinary walls, not ceiling-high mythologies, and a new kind of private art dealer was beginning to sell to them directly, outside the Salon. No alternative to the official machine yet, but for the first time there was the faint outline of a way to live without it."
 />
 </>)

// ── 1. The Salon and its enemies ────────────────────────────
const SalonNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1850s" title="The one room that mattered" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>F</DropCap>
 or two hundred years there had been exactly one way to be a painter in France: get into the Salon. It
 was the official exhibition of the Académie des Beaux-Arts (the French state&rsquo;s art establishment) and it was the only theater in town. A jury of professors decided what hung. They wanted polished
 surfaces, noble subjects (gods, battles, scripture) and no visible brushwork. The whole of{' '}<em> Western</em>{' '}modern art is, in one sense, a hundred-year argument with that jury.
 </p>
 <p style={proseStyle}>
 The first to pick the fight was{' '}<strong>Gustave Courbet</strong>, who painted ordinary people (stonebreakers, a village funeral) at the vast, heroic scale the Salon reserved for kings and saints,
 in thick, earthy, trowelled-on paint that refused to prettify anyone. In 1855, when the world&rsquo;s
 fair turned down his biggest canvases, Courbet did the unheard-of thing: he put up his own building
 across the street, charged admission, and called it the{' '}<em>Pavilion of Realism</em>. A painter could
 now go around the jury entirely, which is roughly the nineteenth-century equivalent of being rejected
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
 show (the <em>Salon des Refusés</em>, the Salon of the Rejected) so the public could come and laugh at
 the art the jury had thrown out. Second, the star of that freak show was{' '}<strong>Édouard Manet</strong>,
 whose{' '}<em>Déjeuner sur l&rsquo;herbe</em>{' '}sat a plainly naked, plainly modern woman at a picnic between
 two clothed men and had her gaze straight out at you, entirely unbothered. It was not the nudity, the
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
 He did it again two years later, and worse.{' '}<em>Olympia</em>{' '}showed a naked Parisian courtesan (a
 high-priced kept woman) reclining on her bed and meeting your eye with the flat, businesslike stare of
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
 two ideas that would not go back in the box (paint the modern world as it is, and let the paint look
 like paint) and a group of younger admirers took both to heart and went outside.
 </p>
 </article>

 <MeanwhileSheet
 accent={AMBER}
 region="across Europe"
 title="The machine age supplies the disruption."
 body="Railways, paint sold ready-mixed in tubes, and above all the camera all arrive together. If a photograph can record a face perfectly in a second, the painter is suddenly out of the copying business, and free, or forced, to do the thing a camera cannot."
 />
 </>)

// ── 2. Painting the light ───────────────────────────────────
const LightNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1874" title="The show that named itself by accident" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n April 1874 a group of friends who were sick of being rejected (Claude Monet, Pierre-Auguste Renoir,
 Camille Pissarro, Edgar Degas, Berthe Morisot) rented the studio of the photographer Nadar and put on
 their own show. A critic seized on the title of one Monet canvas,{' '}<em>Impression, Sunrise</em>, and
 sneered that the whole lot were mere{' '}<em>impressions</em>, sketches, not finished paintings. As usual,
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
 &ldquo;true&rdquo; color, only light bouncing off it at a particular moment. So they stopped painting
 the cathedral and started painting the{' '}<em>light on</em>{' '}the cathedral, Monet would later paint the
 same Rouen facade more than thirty times, the same stone reading pink at dawn and blue-gray in fog, the
 building almost an excuse. New tube paints let them work fast and outdoors, in front of the subject; they
 left the brushwork loose and laid pure dabs of color side by side so your own eye would mix them at a
 distance. A shadow was no longer brown. It was violet and blue.
 </p>
 <p style={proseStyle}>
 Their subjects were just as new, not myth but modern leisure: boating parties, railway stations, dance
 halls, the wide boulevards of a freshly rebuilt Paris.{' '}<strong>Berthe Morisot</strong>, the one woman in
 the founding group, was no bystander: she organized nearly every one of the eight exhibitions and painted
 modern life from the private, domestic vantage (nurseries, drawing rooms, women at the mirror) that her
 male colleagues simply could not enter, which makes her work some of the most distinctive the movement
 produced.{' '}<strong>Edgar Degas</strong>, the awkward cousin of the group, stayed indoors and caught
 dancers and laundresses in off-balance, snapshot poses he learned partly from the camera and partly from
 Japanese woodblock prints, which were arriving in Paris as the wrapping paper around imported china, and
 teaching half the city to crop boldly and flatten space.
 </p>
 <p style={proseStyle}>
 They won the argument so completely that &ldquo;a nice Impressionist painting&rdquo; is now practically a
 synonym for pleasant, inoffensive art, which would have astonished the people who first stood in front of
 these canvases and felt insulted. But by the mid-1880s the younger painters in the circle had begun to
 worry that, in chasing the fleeting light, they had let the picture itself go soft.
 </p>
 </article>

 <MeanwhileSheet
 accent={BLUE}
 region="Japan"
 title="A newly opened Japan rewires the European eye."
 body="Cheap woodblock prints by Hokusai and Hiroshige (flat color, daring crops, off-center composition) flood into Paris and become an obsession. 'Japonisme' teaches Degas, Monet and Van Gogh to throw out the deep Renaissance box and think in flat shapes."
 />
 </>)

// ── 3. Putting the structure back ───────────────────────────
const StructureNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1886–1905" title="Four ways out of the haze" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>T</DropCap>
 he painters we lump together as{' '}<strong>Post-Impressionists</strong>{' '}never formed a group; the label was
 coined later, in London, to mean roughly &ldquo;the interesting ones who came after.&rdquo; What they
 shared was a complaint (Impressionism had dissolved the world into shimmering light and lost its bones) and they took four different escape routes out of the same building, each convinced the others were
 fleeing the wrong way.
 </p>
 <p style={proseStyle}>
 <strong>Georges Seurat</strong>{' '}turned it into a science: he painted in thousands of tiny, deliberate
 dots of pure color (<em>pointillism</em>) arranged by optical theory, and built a vast Sunday park
 scene as still and ordered as an Egyptian frieze.{' '}<strong>Paul Cézanne</strong>{' '}went the opposite way,
 alone in Provence, rebuilding apples and mountains out of blunt facets of color until a painting felt as
 constructed as a stone wall. He is the hinge of this whole story: the man Picasso and Matisse would each
 call their father.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={SEURAT}
 imageUrl={ART_IMG.seuratGrandeJatte}
 ratio="3/2"
 alt="Seurat, A Sunday on La Grande Jatte"
 caption={<>Look closely and the whole sunlit park is built from millions of separate dots of pure color your eye blends for you.</>}
 credit={<>Seurat,{' '}<em>A Sunday on La Grande Jatte</em>, 1884 · Art Institute of Chicago</>}
 rights="Public domain worldwide. Wikimedia Commons."
 />

 <SectionHeader accent={accent} label="Feeling, not optics" title="Van Gogh and Gauguin" />
 <p style={proseStyle}>
 The other two routes went looking for emotion.{' '}<strong>Vincent van Gogh</strong>, a Dutch ex-preacher who
 painted seriously for barely a decade and, by the established record, sold a single painting in his
 lifetime, loaded his color and clawed his brushstrokes until a wheat field or a night sky seemed to
 carry his own nervous charge, color wired straight to feeling, with no polite filter in between. His
 on-and-off friend{' '}<strong>Paul Gauguin</strong>{' '}went searching for an imagined &ldquo;primitive&rdquo;
 innocence and never stopped moving to find it: he quit a Paris stockbroking desk, failed at it in
 Brittany, sailed to Panama and Martinique, came back, and finally fetched up in Tahiti and the Marquesas,
 painting in flat, walled-off zones of unreal color. The &ldquo;innocence&rdquo; was always his own
 projection, and, as we now reckon with, was bound up with a colonial fantasy that used the islands and
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
 Between them, these four had cracked the picture open in every direction at once, toward science, toward
 structure, toward raw feeling, toward flat unreal color. A generation of much younger painters in Paris
 inherited all four exits at the same moment. And, being young, they took all four.
 </p>
 </article>
 </>)

// ── 4. Breaking the picture ─────────────────────────────────
const BreakNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1905" title="Color off the leash" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>A</DropCap>
 t the Salon d&rsquo;Automne of 1905 a room of canvases by{' '}<strong>Henri Matisse</strong>{' '}and his friends
 hit visitors like a shout: a portrait with a green stripe running down the sitter&rsquo;s face, skies and
 shadows painted whatever color the picture seemed to need rather than the color the world actually was.
 A critic called them{' '}<em>les fauves</em>, the wild beasts. Fauvism barely lasted three years, but like a
 lot of movements in this era it burned bright and fast because it had only one point to make, and it
 made it: color does not have to describe anything. It can just be the painting&rsquo;s engine.
 </p>
 <PaintingFigure
 onZoom={onZoom}
 palette={MATISSE}
 imageUrl={ART_IMG.matisseDance}
 ratio="3/2"
 alt="Matisse, Dance"
 caption={<>Five figures, three colors (a green hill, a blue sky, red bodies) no shading, no depth, and total conviction.</>}
 credit={<>Matisse,{' '}<em>Dance (I)</em>, 1909 · MoMA, New York</>}
 rights={PD_RIGHTS}
 />

 <SectionHeader accent={accent} label="1907–1914" title="Then perspective itself is repealed" />
 <p style={proseStyle}>
 If Matisse freed the color,{' '}<strong>Pablo Picasso</strong>{' '}and{' '}<strong>Georges Braque</strong>{' '}went
 after the deeper rule, the single fixed viewpoint that had made a painting behave like a window since
 the 1400s: one eye, one spot, one frozen instant. Starting from Cézanne&rsquo;s facets and from West and
 Central African sculpture (Fang, Kota and other masks Picasso met at Paris&rsquo;s ethnographic museum
 in 1907) the two of them spent years showing several sides of an object on the flat canvas at once. They
 named nothing and declared nothing; they just did it, roped together in neighboring studios, until the
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
 Cubism is the pivot of the whole era: Picasso, Braque, collage, and the war that broke them apart. What matters here is the door it left open.
 If a painting owes nothing to color-as-description (Matisse) and nothing to single-point perspective
 (Cubism), then it owes nothing to the visible world at all. From this moment, abstraction is only a
 matter of nerve.
 </p>
 </article>
 </>)

// ── 5. Manifestos and machines ──────────────────────────────
const ManifestoNarrative: Narrative = ({ accent, onZoom }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1909–1914" title="Art in love with the motorcar" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>O</DropCap>
 nce Cubism proved the rules could be torn up, a wave of movements arrived, each with a slogan and a
 printed{' '}<em>manifesto</em>. In Italy the{' '}<strong>Futurists</strong>, led by the poet Marinetti, declared
 that a roaring racing car was more beautiful than an ancient Greek statue and that the museums should be
 flooded. They painted speed, crowds and machines as Cubist shards set violently in motion, and they
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
 answered with disgust. In neutral Zürich, refugees founded{' '}<strong>Dada</strong> (deliberate nonsense,
 the name supposedly chosen by stabbing a knife at random into a dictionary) and staged performances built
 to insult an audience, and a civilization, that had marched into the trenches quoting poetry. Its sharpest
 weapon was the{' '}<em>readymade</em>: in 1917{' '}<strong>Marcel Duchamp</strong>{' '}submitted a factory urinal,
 signed with a joke name and titled{' '}<em>Fountain</em>, to an art show. If the artist says it is art, his
 gesture asked, is it art? A century of conceptual art (art where the <em>idea</em> is the work and the
 craft is beside the point) has not finished answering. Dada had its women, too: in Berlin{' '}<strong> Hannah Höch</strong>{' '}was scissoring apart magazines and newspapers and reassembling the pieces
 into savage photomontages that dissected the gender politics of her day, arguably the movement&rsquo;s
 most cutting visual work.
 </p>

 <SectionHeader accent={accent} label="The other answer" title="Order, not noise" />
 <p style={proseStyle}>
 Not every response to the chaos was a provocation; some were the opposite, utopian order. In Holland,{' '}<strong> Piet Mondrian</strong>{' '}and the{' '}<strong>De Stijl</strong>{' '}(&ldquo;The Style&rdquo;) group pushed
 abstraction to its purest end: nothing but black grids, white fields and rectangles of primary red,
 yellow and blue, a kind of cosmic plumbing diagram meant to picture universal harmony. In Germany,
 the{' '}<strong>Bauhaus</strong> (a 1919 art-and-design school that became the most influential of the whole
 century) took that clean abstraction off the canvas and into everyday life: the chairs, lamps,
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
 </>)

// ── 6. The unconscious gets a paintbrush ────────────────────
const UnconsciousNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="Paris · 1924" title="A manifesto for the dream" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>I</DropCap>
 n 1924 the poet{' '}<strong>André Breton</strong>{' '}published the{' '}<em>Surrealist Manifesto</em>{' '}and turned the
 inward turn into a programme. Where Dada had only mocked,{' '}<strong>Surrealism</strong>{' '}had a faith: that
 Sigmund Freud was right, that the unconscious mind was the realer self, and that art&rsquo;s job was to
 slip past the rational guard and let the dream out. (Avant-garde just means the leading edge, the scouts who run out ahead of the army.) The painters split into
 two camps. One (<strong>Max Ernst</strong>, the Catalan <strong>Joan Miró</strong>, the Frenchman <strong> André Masson</strong>) chased{' '}<em>automatism</em>: doodling, scraping paint over rough surfaces,
 and otherwise letting chance and the twitching hand outrun the conscious mind.
 </p>
 <p style={proseStyle}>
 The other camp painted dreams with hard, hallucinatory, almost photographic precision, so the impossible
 looked like a snapshot. Its showman was{' '}<strong>Salvador Dalí</strong>, whose limp watches, draped over
 a branch, sliding off a table-edge, one being eaten by ants, all melting under a hard blue sky above a
 bare Catalan shore, became the single most famous image the movement ever produced. (The Belgian{' '}<strong> René Magritte</strong>{' '}worked the same quiet menace from the other end: a pipe labelled
 &ldquo;this is not a pipe,&rdquo; a sky-blue day where it is somehow also night.) And here Dalí presents a
 problem this app cannot solve, because his watches cross a line drawn not by any critic but by the
 calendar.
 </p>
 <RestrictedFigure
 title={<>Dalí, <i>The Persistence of Memory</i></>}
 year="1931 · Museum of Modern Art, New York"
 note="First published in 1931, still under US copyright, so it can't be shown inline. Picture four soft watches melting like warm cheese over a dead landscape, and a single fly keeping the time."
 linkLabel="View at MoMA"
 href="https://www.moma.org/collection/works/79018"
 />
 <p style={proseStyle}>
 Dalí spent his life cultivating the most irrational public image in
 art (a movement devoted to dreams and the unconscious) and the thing now standing between you and his
 most famous painting is the single most rational, bureaucratic instrument civilization owns: United
 States copyright law. Works first published before 1931 are public domain in the US; 1931 and after are
 not. That one-year line runs straight through the middle of Surrealism, which is exactly why this
 era&rsquo;s pictures thin out as the story nears the present. It is not a gap in our archive. It is the
 law, drawn across the page.
 </p>
 <p style={proseStyle}>
 Surrealism spread worldwide in the 1930s and briefly became the dominant avant-garde, though it had a
 bad habit of treating women as muses and dream-objects rather than artists, a habit the likes of{' '}<strong> Leonora Carrington</strong>{' '}and{' '}<strong>Meret Oppenheim</strong>{' '}spent careers pushing back
 against. Then a second world war scattered the Surrealists, many of them to New York, with their theories
 of chance and the unconscious packed in the luggage.
 </p>
 </article>
 </>)

// ── 7. The center moves to New York ─────────────────────────
const NewYorkNarrative: Narrative = ({ accent }) => (<>
 <article style={{ padding: '18px 18px 40px' }}>
 <SectionHeader accent={accent} label="1940–1950" title="The wire reverses" first />
 <p style={proseStyle}>
 <DropCap accent={accent}>F</DropCap>
 or ninety years modern art had meant Paris. Then Hitler emptied Europe of its avant-garde (driven out as
 &ldquo;degenerate,&rdquo; or Jewish, or simply unsafe) and a great many of them washed up in New York,
 where a generation of young American painters had been waiting and watching. For a century Americans had
 sailed to Paris to learn how to paint; now, abruptly, the traffic ran the other way. When the war ended,
 for the first time the center of gravity of Western art sat on the far side of the Atlantic.
 </p>
 <p style={proseStyle}>
 What the Americans built was{' '}<strong>Abstract Expressionism</strong>, huge, ambitious, completely
 abstract.{' '}<strong>Jackson Pollock</strong>{' '}took the Surrealists&rsquo; chance and automatism at its word:
 he laid the canvas on the floor and flung and dripped skeins of ordinary house paint across it, so the
 finished picture is a frozen record of the dance that made it.{' '}<strong>Mark Rothko</strong>{' '}went the
 opposite way, two or three soft-edged rectangles of luminous color stacked on a tall canvas, the edges
 bleeding and breathing so the color seems to hover and glow, meant to be stood close to like an
 altarpiece until it swallows your whole field of view.{' '}<strong>Willem de Kooning</strong>{' '}kept a
 slashing, half-buried human figure in the mix. It was the first art movement the world looked to America
 to lead.
 </p>
 <RestrictedFigure
 title={<>Pollock, <i>One: Number 31, 1950</i></>}
 year="1950 · Museum of Modern Art, New York"
 note="Post-war and firmly under copyright, the poured canvases can't be shown inline. Picture a wall-sized field of flung and dripped black, white and silver, with no top, no bottom and no center, like weather."
 linkLabel="View at MoMA"
 href="https://www.moma.org/collection/works/78386"
 />
 <p style={proseStyle}>
 It helped that the timing was political. In the Cold War, an art of total individual freedom made a
 useful advertisement for the free world against Soviet socialist realism, and critics like Clement
 Greenberg (plus, it later emerged, some quiet government money behind the touring exhibitions) helped
 push American abstraction onto the world stage. New York did not just inherit modern art; it was sold,
 hard.
 </p>

 <SectionHeader accent={accent} label="1956–1970" title="And then a soup can answers back" />
 <p style={proseStyle}>
 Abstract Expressionism grew so grand and so solemn that the next move was almost inevitable: puncture it.{' '}<strong> Pop Art</strong>{' '}walked the supermarket and the comic strip straight into the museum, <strong> Andy Warhol</strong>&rsquo;s silkscreened soup cans and repeated Marilyns,{' '}<strong>Roy
 Lichtenstein</strong>&rsquo;s comic-book panels blown up huge, printer&rsquo;s dots and all. Where the
 Abstract Expressionists had agonised over the unique, soulful, handmade mark, Warhol courted the
 mechanical and the mass-produced and said, flatly, that he wanted to be a machine. There is a hard little
 joke buried in the reversal: the Abstract Expressionists mostly drank and suffered and died not rich,
 chasing authenticity; Warhol faked the factory and got famous and wealthy doing it. It was Duchamp&rsquo;s
 1917 urinal question coming back, in color, at scale, and very much{' '}<em>for sale</em>.
 </p>
 <p style={proseStyle}>
 By the late 1960s a younger crowd was stripping even Pop&rsquo;s jokes away, the Minimalists, reducing
 art to a plain metal box or a row of bricks, daring you to ask whether that counted. Which is right where
 &ldquo;modern&rdquo; quietly hands off to &ldquo;contemporary,&rdquo; the next era along. The whole
 century-long argument that began with Courbet&rsquo;s tent had come full circle, because it was never
 really about cubes or color or drips. It was always the same question the Salon jury thought it had
 settled for good:{' '}<em>who gets to decide what counts as art, and what is it for?</em>{' '}By 1970 the answer
 was wide open, which is the most modern thing about it.
 </p>
 </article>
 </>)

// ── 0. Lay of the land ──────────────────────────────────────
const NroLandNarrative: Narrative = ({ accent, onZoom }) => (<>
  <article style={{ padding: '18px 18px 40px' }}>
    <SectionHeader accent={accent} label="Europe · around 1760" title="A girl on a swing, and what came for her" first />
    <p style={proseStyle}>
      <DropCap accent={accent}>L</DropCap>
      ook at the picture the next hundred years set out to destroy. A girl in a froth of pink silk swings out over
      a garden, kicking one slipper into the air, while a young man hidden in the bushes below gazes happily up her
      billowing skirts and an old servant works the ropes, oblivious. This is Jean-Honoré Fragonard&rsquo;s{' '}<em>The Swing</em>{' '}(1767), and it is the perfect emblem of{' '}<strong>Rococo</strong>{' '}(the light, ornamental,
      aristocratic style of the mid-eighteenth century, made for the private pleasure of a small rich world). The
      colors are pastel, the brushwork is feathery, the whole thing is weightless. It is beautiful, and it is about
      nothing at all except delight. To the generation coming up behind it, that was the problem.
    </p>
    <PaintingFigure
      onZoom={onZoom}
      palette={NRO_SUNSET}
      imageUrl={NRO_IMG.fragonardSwing}
      ratio="4/5"
      alt="Fragonard, The Swing: a girl in pink swings over a garden, kicking off a slipper, a hidden admirer below"
      caption={<>The thing the era set out to bury. Fragonard&rsquo;s{' '}<em>Swing</em>: flirtation, a hidden lover, a flying slipper. Pretty, weightless, and made for a rich world&rsquo;s private amusement.</>}
      credit={<>Jean-Honoré Fragonard,{' '}<em>The Swing</em>, 1767 · 2 ft 7⅞ in × 2 ft 1¼ in · Wallace Collection, London</>}
      rights={NRO_PD_WORLD}
    />
    <p style={proseStyle}>
      What came for the swing was a single long argument, fought out in paint across about a century, roughly 1750
      to 1850, over one question the whole modern age would inherit: is the truest art the one that orders the world
      by reason, or the one that tells the truth of feeling? Two answers came back, and they could not have been more
      opposed. The first, in clean hard line, said reason. The second, in hot loud color, said feeling. They are the
      two halves of this era, and the thing to hold onto from the start is that they did not take turns. They
      overlapped, and they fought.
    </p>

    <SectionHeader accent={accent} label="The first answer · reason" title="Greek heroes and a German with a phrase" />
    <p style={proseStyle}>
      The first answer is the one later historians would label{' '}<strong>Neoclassicism</strong>{' '}(the revival of Greek
      and Roman models in art; the word is a much later coinage, an 1880s invention, and no painter in 1780 ever
      called himself one). It did not arrive from a single cause. The{' '}<strong>Enlightenment</strong>{' '}(the
      eighteenth-century intellectual movement that prized reason, clarity, and civic virtue) made antiquity its
      model for everything. At the same time the antique was coming up out of the ground: the buried Roman towns of{' '}<strong>Herculaneum</strong>{' '}(dug from 1738) and{' '}<strong>Pompeii</strong>{' '}(from 1748) were handing Europe
      real Roman rooms, objects, and wall-paintings for the first time. And a German scholar named{' '}<strong>Johann
      Joachim Winckelmann</strong>, who could not paint at all, gave the whole thing its motto. In a slim 1755 essay
      he told artists to stop inventing and imitate the Greeks, whose supreme quality he named as &ldquo;a noble
      simplicity and quiet grandeur.&rdquo; The creed of an art of severe, drawn, moral pictures was written, fittingly,
      by a critic.
    </p>
    <p style={proseStyle}>
      The look that answered him was the opposite of the swing in every part. Out went the pastel and the boudoir.
      In came clear contour and drawing (<strong>line</strong>{' '}carrying the picture, not soft color), a smooth finish
      that hid the brushstroke so figures read like carved marble, a shallow stage like a Roman frieze (a band of
      figures arranged in a shallow line across the surface, like a carved relief on a Greek temple), and subjects
      from Greek and Roman history chosen for a moral lesson: sacrifice, duty, dying for your country. This was
      painting as ethics. And it was not only men&rsquo;s work: Angelica Kauffman painted Neoclassical history at the
      top rank and was one of only two women among the founders of Britain&rsquo;s Royal Academy in 1768, while
      Elisabeth Vig&eacute;e Le Brun, Marie Antoinette&rsquo;s own portraitist, was the most sought-after painter of
      faces in pre-Revolutionary France.
    </p>

    <SectionHeader accent={accent} label="David" title="The man who painted the oath, then lived it" />
    <p style={proseStyle}>
      Its engine was{' '}<strong>Jacques-Louis David</strong>{' '}(1748&ndash;1825). His{' '}<em>Oath of the Horatii</em>{' '}(1784&ndash;85), nearly fourteen feet wide, sets three Roman brothers reaching to swear on their father&rsquo;s
      outstretched swords that they will die for the city. The men on the left are a single block of rigid resolve,
      every arm a straight line; the women on the right have collapsed into a soft knot of grief. The whole canvas is
      pulled as taut as the oath itself. Where Fragonard had put a swing, David put a vow. Painted five years before
      the storming of the Bastille, it would read, soon enough, like a summons to put the republic above the self.
    </p>
    <PaintingFigure
      onZoom={onZoom}
      palette={NRO_STONE}
      imageUrl={NRO_IMG.oathHoratii}
      ratio="16/9"
      alt="David, Oath of the Horatii: three brothers swear on their father's swords while women grieve at right"
      caption={<>The hinge of the era. Three brothers swear to die for Rome, rigid male resolve at left, the women collapsing at right, every line as tight as the oath. Pleasure replaced by duty.</>}
      credit={<>Jacques-Louis David,{' '}<em>Oath of the Horatii</em>, 1784&ndash;85 · 10 ft 10 in × 13 ft 11 in · Louvre, Paris</>}
      rights={NRO_PD_WORLD}
    />
    <p style={proseStyle}>
      Then David did something almost no painter ever does: he stopped depicting the drama and walked into it. When the
      Revolution came, he became its image-maker. He was elected a deputy to the National Convention, voted for the
      death of King Louis XVI and signed the warrant (a regicide), sat on a committee that signed arrest orders, and
      staged the Revolution&rsquo;s great public festivals as its artistic director in all but title. His{' '}<em>Death
      of Marat</em>{' '}(1793) turned the murder of a radical journalist, stabbed in his medicinal bath, into a tender,
      austere martyrdom, pen still in his dead hand: propaganda and a genuinely great painting at the same time. After
      his side fell from power he was jailed; he later resurfaced as First Painter to a new master, the Emperor
      Napoleon. The official style of reason was now the official style of a Revolution, and then of an empire.
    </p>

    <SectionHeader accent={accent} label="The earthquake" title="The ground the whole era stands on" />
    <p style={proseStyle}>
      That is the thing to understand before the second answer arrives: under all of this runs one continuous political
      upheaval, and the painting tracks it move for move. The chain goes Enlightenment, then the French Revolution
      from 1789, then the execution of the king in 1793, then a young general named Napoleon seizing power in 1799 and
      crowning himself Emperor in 1804, then his final defeat at Waterloo in 1815, then the old royal family put back
      on the throne (the Restoration), then one more rising in 1830 that knocked a king off again. Art and politics
      here are not two stories laid side by side. They are the same story. David served the Revolution and the Empire;
      the painters coming next would paint the wreckage and the recoil.
    </p>

    <SectionHeader accent={accent} label="The second answer · feeling" title="A firing squad, a raft, a barricade" />
    <p style={proseStyle}>
      The second answer revolted against the cold of reason itself. Later critics would call it{' '}<strong>Romanticism</strong>, and the name fools almost everyone, so settle it now: it has nothing to do with
      romance or love. The word comes from &ldquo;romance&rdquo; in the old sense of a medieval verse tale written in
      the everyday Romance languages, and the movement is about intensity, not affection: emotion, imagination, the
      individual, the nation, dream and nightmare. Its targets were exactly Neoclassicism&rsquo;s virtues. Against the
      cool antique it set the present and its terrors. Against clean line it set{' '}<strong>color</strong>{' '}and visible,
      agitated brushwork. And against serene beauty it set the{' '}<strong>sublime</strong>: a feeling theorized by the
      writer Edmund Burke in 1757, the pleasurable dread we get from vastness, power, and terror seen from a safe
      remove (a storm watched from shore, an Alp from the valley floor). The Romantics painted what the philosophers
      had described.
    </p>
    <p style={proseStyle}>
      It had no leader and no single country. In Madrid,{' '}<strong>Francisco Goya</strong>{' '}painted{' '}<em>The Third
      of May 1808</em>: a faceless French firing squad mowing down Madrid civilians in the dark, the central victim
      flinging up his arms in a glaring white shirt, lit like a martyr before the muzzles, a dead man already crumpled
      in his own blood. No heroism, no order, just modern slaughter. In Paris,{' '}<strong>Théodore Géricault</strong>{' '}heaped the survivors of a real, recent shipwreck onto{' '}<em>The Raft of the Medusa</em>, a canvas the size of a
      wall, the dead and dying piled into a straining pyramid, a Black man at its very summit reaching toward a speck of
      a rescue ship on the horizon: a current-events scandal painted at the giant scale once kept for gods and kings. And{' '}<strong>Eugène
      Delacroix</strong>{' '}painted the 1830 rising itself in{' '}<em>Liberty Leading the People</em>, a bare-breasted
      allegorical Liberty striding over the barricade dead, the tricolor in one hand and a musket in the other,
      leading a ragged crowd through the gunsmoke.
    </p>
    <PaintingFigure
      onZoom={onZoom}
      palette={NRO_OXBLOOD}
      imageUrl={NRO_IMG.thirdOfMay}
      ratio="16/9"
      alt="Goya, The Third of May 1808: a faceless firing squad guns down a man in a white shirt with arms flung up"
      caption={<>The other answer. Goya&rsquo;s firing squad guns down Madrid civilians at night; the man in white throws up his arms before the muzzles. No order, no glory, just terror. And Goya (1746&ndash;1828) was David&rsquo;s near-exact contemporary.</>}
      credit={<>Francisco Goya,{' '}<em>The Third of May 1808</em>, 1814 · 8 ft 9½ in × 11 ft 4⅝ in · Museo del Prado, Madrid</>}
      rights={NRO_PD_WORLD}
    />
    <p style={proseStyle}>
      Britain and Germany took the sublime out to sea and up the mountain. J.M.W. Turner&rsquo;s{' '}<em>The Slave
      Ship</em>{' '}(1840) burns a whole sky and sea orange and blood-red over a slaver that has thrown sick and dying
      enslaved Africans overboard to claim them on insurance as cargo lost at sea (the real 1781 Zong massacre behind
      it), the drowning bodies half-dissolved into pure turbulent light. Caspar David
      Friedrich&rsquo;s{' '}<em>Wanderer above the Sea of Fog</em>{' '}(c.1818) puts a single dark-coated man, seen from
      behind, on a crag above a swirling ocean of mist: the individual standing small before the infinite, the
      cleanest image of the whole Romantic idea that nature is something to be felt, not measured.
    </p>

    <SectionHeader accent={accent} label="One era, two answers" title="Why they belong in the same century" />
    <p style={proseStyle}>
      The temptation is to line these two up in order, reason first and feeling after, the way a textbook stacks its
      chapters. The dates forbid it.{' '}<strong>David (1748&ndash;1825) and Goya (1746&ndash;1828) were born two years
      apart and died three years apart</strong>; the arch-rationalist and the painter of the firing squad lived almost
      exactly the same life, at the same time, in neighboring countries. A generation on, the line-and-color quarrel
      had two living champions who snarled at each other across the same Paris exhibition for decades: Ingres, who
      carried David&rsquo;s primacy of drawing into the next age, and Delacroix, who answered with color and motion.
      They were not a sequence. They were a standing argument.
    </p>
    <p style={proseStyle}>
      And they are two faces of one coin, because they share more than they admit. Both reject the weightless Rococo
      pleasure of the swing. Both take their subjects with deadly seriousness. Both ride the same flood of revolution
      and war: Neoclassicism became the face of the Revolution&rsquo;s optimism, Romanticism painted its hangover, its
      carnage, and its longing. They split on one question only, whether the answer to a violent century is{' '}<strong>order</strong>{' '}(reason, line, the calm antique) or{' '}<strong>intensity</strong>{' '}(feeling, color, the
      sublime). That is why the era is told as an argument and not a timeline.
    </p>

    <SectionHeader accent={accent} label="The handoff" title="A third man who threw out both" />
    <p style={proseStyle}>
      The argument did not end with a winner. It ended when a third position walked in and rejected both sides at once.
      Around mid-century Gustave Courbet and{' '}<strong>Realism</strong>{' '}threw out the antique gods{' '}<em>and</em>{' '}the
      Romantic storms together, and painted only the plain, contemporary, unidealized present: stone-breakers, a
      country funeral, peasants, at the same grand scale David had reserved for heroes and Delacroix for catastrophe.
      No ideal past, no heightened feeling, just the ordinary now. That refusal of both wings is the door into the
      Modern era this app covers next, where the line-versus-color fight these painters started would go on organizing
      French art for another half-century. The swing was buried, the oath was sworn, the firing squad had fired, and
      the argument they began was about to become the whole modern question: what is a painting for?
    </p>
  </article>

  <MeanwhileSheet
    accent={accent}
    region="Europe, beyond the canvas"
    title="The same feeling, in words and music."
    body="The painting did not turn toward feeling alone. The decades around 1800 are the Age of Revolutions (America 1776, France 1789, the risings of 1830 and 1848), and Romanticism ran in lockstep across every art: Goethe and the German Sturm und Drang, Wordsworth and Byron, Beethoven and then Berlioz, all turning at once to feeling, nature, the individual, and the nation. The label 'Romanticism' even reached painting from this literary world first."
  />
</>)

// ── 1. Reason ───────────────────────────────────────────────
const NroReasonNarrative: Narrative = ({ accent, onZoom }) => (<>
  <article style={{ padding: '18px 18px 40px' }}>
    <SectionHeader accent={accent} label="Rome · the 1760s" title="The case for order" first />
    <p style={proseStyle}>
      <DropCap accent={accent}>T</DropCap>
      he reason wing built its whole case on a single conviction: that the way out of a frivolous, decadent present was
      to go back to the antique and copy its severity. Its bible was Winckelmann&rsquo;s 1755 essay calling for &ldquo;a
      noble simplicity and quiet grandeur,&rdquo; and its method was drawing. A young painter trained for years on{' '}<strong>line</strong>{' '}before he was trusted with serious color, because in this faith the contour is the truth of
      a thing and color is mere decoration laid on top. The ideal surface was{' '}<em>fini</em>{' '}(a finish blended so
      smooth you could not find a brushstroke if you searched), so the figures would read like polished marble rather
      than like paint. Beauty, in this view, has rules, the ancients knew them, and the job is to learn them.
    </p>
    <p style={proseStyle}>
      The subjects matched the method. This was{' '}<strong>history painting</strong>{' '}(grand scenes from myth, scripture,
      and ancient history, the most prestigious kind a painter could attempt), and the scenes were chosen for their
      moral charge: a Roman swearing to die for the city, a philosopher drinking poison rather than recant. The point
      was never just to show a beautiful body. The point was to hold up a stoic ancient virtue as a mirror for a soft
      modern age. Art as a public lesson, not a private delight.
    </p>

    <SectionHeader accent={accent} label="What order looks like" title="Stillness you could set a clock by" />
    <p style={proseStyle}>
      Stand in front of one of these pictures and the first thing it does is stop time. Everything is held at the one
      frozen instant that carries the most meaning, the way a stage freezes the second the curtain lifts. The figures
      stand in a shallow band close to the front, as if on a narrow stone ledge with a wall just behind them, so nothing
      recedes into deep space to pull the eye away. Their edges are hard and exact and the brushwork is sanded off until
      skin and cloth read like polished marble; the color is local and severe, stone gray and steel and the dull red of
      dried blood, never a pretty pastel. And the whole moral of the picture is loaded into a single gesture you cannot
      miss. This is a style built to be understood at a glance and obeyed.
    </p>
    <p style={proseStyle}>
      David&rsquo;s{' '}<em>Oath of the Horatii</em>{' '}is the copybook of it. Three brothers throw their arms out in one
      rigid line toward the swords their father lifts, every limb straightened to the same taut angle, a block of male
      resolve machined to a single edge; the women at the right have melted into a soft curve of grief, and the two
      halves do not touch. Three round arches behind sort the canvas into its parts: the men, the weapons, the cost.
      Nothing blurs, nothing moves, nothing is in doubt. The{' '}<em>Death of Marat</em>{' '}strips the same method almost
      to nothing and shows how much it can still carry: a murdered man slumped in his bath, one bare arm hanging
      straight to the floor with the pen still in the fingers, the wound and the dropped knife rendered exactly, and
      above all of it a great empty brown void doing the work an altarpiece&rsquo;s gold once did. The reason style can
      hold a whole martyrdom in an arm and a blank wall.
    </p>
    <p style={proseStyle}>
      That economy is also the style&rsquo;s open secret. An art built to embody virtue turned out to be exquisitely
      built to serve power: the same severe line that swore the Horatii&rsquo;s oath went on to serve a Revolution and
      then an Emperor without changing its look, which is the lesson the feeling wing would seize on.
    </p>

    <SectionHeader accent={accent} label="Ingres" title="Line made voluptuous" />
    <p style={proseStyle}>
      David&rsquo;s pupil{' '}<strong>Jean-Auguste-Dominique Ingres</strong>{' '}(1780&ndash;1867) carried the primacy of
      line into the next generation and made it strange. His{' '}<em>La Grande Odalisque</em>{' '}(1814) is a reclining
      harem nude (an{' '}<em>odalisque</em>{' '}is a woman of a sultan&rsquo;s household) whose cool back is drawn
      impossibly, sinuously long; critics joked she had two or three vertebrae too many. Ingres had bent anatomy itself
      in the service of pure, flowing contour, proof that the worship of line could become as sensuous and as willful as
      anything the colorists did. He would spend forty years as the defender of drawing for{' '}<strong>the
      academy</strong>{' '}(the official art establishment, in France the Acad&eacute;mie with its school and its Salon,
      that trained painters and controlled which pictures the public got to see) against the rising tide of color, the
      standing rebuttal to everything the second wing of the era believed.
    </p>
    <PaintingFigure
      onZoom={onZoom}
      palette={NRO_STONE}
      imageUrl={NRO_IMG.grandeOdalisque}
      ratio="16/9"
      alt="Ingres, La Grande Odalisque: a reclining nude seen from behind with an impossibly long, smooth back"
      caption={<>Line carried to the edge of anatomy. Ingres draws his nude&rsquo;s back too long on purpose, bending the body to the curve, the cool primacy of drawing pushed all the way into the exotic and the strange.</>}
      credit={<>Ingres,{' '}<em>La Grande Odalisque</em>, 1814 · 3 ft × 5 ft 4 in · Louvre, Paris</>}
      rights={NRO_PD_WORLD}
    />
  </article>
</>)

// ── 2. Feeling ──────────────────────────────────────────────
const NroFeelingNarrative: Narrative = ({ accent, onZoom }) => (<>
  <article style={{ padding: '18px 18px 40px' }}>
    <SectionHeader accent={accent} label="Madrid · Paris · London · Dresden" title="The case for feeling" first />
    <p style={proseStyle}>
      <DropCap accent={accent}>T</DropCap>
      he feeling wing had no academy, no leader, and no manifesto, just painters scattered across four countries who
      mostly never met and shared a temperament rather than a program. What they shared was a set of refusals. Where
      reason wanted calm, they wanted intensity. Where reason drew a clean edge, they let edges dissolve and the
      brushstroke show, so{' '}<strong>color</strong>, not line, carried the emotion. Where reason held up the serene
      antique, they reached for the present, the medieval, the exotic, the dream, and above all the{' '}<strong>sublime</strong>: Burke&rsquo;s terror-and-grandeur, the overwhelming thing that thrills precisely because
      it could destroy you. The truest subject was no longer virtue calmly depicted. It was whatever overwhelms us.
    </p>

    <SectionHeader accent={accent} label="The look" title="What feeling does to a wall" />
    <p style={proseStyle}>
      Stand back from a roomful of these pictures and the style announces itself before any one subject does. The edges
      have gone soft. Where the reason wing sealed every contour and sanded the brushwork until the figures looked
      carved, here the edges bleed into their surroundings and the stroke is left showing, loaded and visible, so the
      paint reads as something a hand shoved around in a hurry. Nothing stands in a calm row. The compositions tip and
      spiral on the diagonal, weighted hard into one corner, so the whole picture seems to heave or slide rather than
      hold still. Color has taken over the work line used to do: the feeling is carried by a furnace of red, a bruised
      storm-gray, a glare of white, not by the drawing under it. And the light is no longer the even, sourceless glow
      that let a David figure read like a statue. It is thrown for drama, raked across the dark, tearing one face or one
      gesture out of a surrounding blackness. The reason wing built its pictures to be understood. The feeling wing
      built them to hit you before you understand anything.
    </p>

    <SectionHeader accent={accent} label="The grand wall, turned on itself" title="The scale of gods, handed to a disaster" />
    <p style={proseStyle}>
      The clearest single proof of the new way of seeing is the French painter Th&eacute;odore G&eacute;ricault&rsquo;s{' '}<em>The Raft of the Medusa</em>{' '}(1818&ndash;19), sixteen feet of it. It keeps the colossal scale the reason
      wing reserved for Roman heroes and gods and hands it instead to the survivors of a real, recent, squalid
      shipwreck: castaways heaped on a few lashed planks, the dead sliding off the front edge, the living straining up
      through a pyramid of bodies toward a speck of a rescue ship on the far horizon. Look at how unstable it is. Two
      diagonals cross the raft and pull against each other, so the whole mass feels like it is lifting on the swell;
      nothing in it is level, nothing is at rest. A Black man, hoisted on his fellows&rsquo; shoulders, stands at the
      very apex of the pyramid, the highest and most hopeful point in the painting, waving a rag at the horizon. There
      is the feeling style&rsquo;s whole answer to reason in one canvas: not a moral held calmly up for study, but a
      catastrophe flung at you at the size once kept for the death of kings.
    </p>
    <PaintingFigure
      onZoom={onZoom}
      palette={NRO_OXBLOOD}
      imageUrl={NRO_IMG.raftMedusa}
      ratio="16/9"
      alt="Géricault, The Raft of the Medusa: survivors heaped on a raft strain toward a speck of a ship on the horizon"
      caption={<>Disaster at the scale of gods and kings. G&eacute;ricault piles the survivors of a real shipwreck into a heaving pyramid, the dead sliding off the front, a Black man at the apex waving toward a ship so far off you have to hunt for it. Sixteen feet of current-events horror.</>}
      credit={<>Th&eacute;odore G&eacute;ricault,{' '}<em>The Raft of the Medusa</em>, 1818&ndash;19 · 16 ft 1 in × 23 ft 6 in · Louvre, Paris</>}
      rights={NRO_PD_WORLD}
    />
    <p style={proseStyle}>
      The same charge runs through the wing&rsquo;s other great public pictures, every one of them taking the grand wall
      and aiming it at horror or revolt instead of virtue: Goya&rsquo;s faceless firing squad working in the dark,
      Delacroix&rsquo;s bare-breasted Liberty climbing a barricade through the gunsmoke. The subject changed from the
      ideal to the unbearable, and the paint changed to match it.
    </p>

    <SectionHeader accent={accent} label="The sublime, out of doors" title="Nature too vast to master" />
    <p style={proseStyle}>
      The other half of feeling went outside, into weather and wilderness, where the sublime really lived, and there the
      human figure shrank instead of commanding. Turner dissolved a slave ship and a steam train alike into furnaces of
      light until the subject all but vanished into pure color. The German painter Caspar David Friedrich set a lone
      man on a crag above a sea of fog and let him stand small and speechless under an immense sky. Where a David hero
      plants himself at the front of the stage and rules it, the Romantic figure turns its back to us and is very nearly
      swallowed by what it looks at. Reason measured the world from outside. Feeling stood inside it and trembled.
    </p>
    <PaintingFigure
      onZoom={onZoom}
      palette={NRO_FOG}
      imageUrl={NRO_IMG.wanderer}
      ratio="4/5"
      alt="Friedrich, Wanderer above the Sea of Fog: a lone man seen from behind on a crag above a sea of swirling mist"
      caption={<>The whole Romantic idea in one figure. A lone man on a summit, seen from behind, gazing over an ocean of mist: the individual small before the infinite. Nature is something to be felt here, not surveyed.</>}
      credit={<>Caspar David Friedrich,{' '}<em>Wanderer above the Sea of Fog</em>, c.1818 · 3 ft 1¼ in × 2 ft 5½ in · Hamburger Kunsthalle, Hamburg</>}
      rights={NRO_PD_WORLD}
    />
  </article>
</>)

// ── 3. The quarrel ──────────────────────────────────────────
const NroQuarrelNarrative: Narrative = ({ accent, onZoom }) => (<>
  <article style={{ padding: '18px 18px 40px' }}>
    <SectionHeader accent={accent} label="The dates that ruin the textbook" title="They were never in line" first />
    <p style={proseStyle}>
      <DropCap accent={accent}>T</DropCap>
      he tidy version of this era has reason come first and feeling come after, as if a country tired of order and
      switched to passion one decade. The lives ruin it. David and Goya were near-twins in age, born two years
      apart, dead three years apart, working through the exact same wars in neighboring countries: the most severe of
      the rationalists and the bleakest of the proto-Romantics were not a before-and-after, they were contemporaries
      glaring across the Pyrenees. The two tendencies did not succeed each other. They ran side by side for a hundred
      years, competing the whole way.
    </p>

    <SectionHeader accent={accent} label="Ingres versus Delacroix" title="The argument given two faces" />
    <p style={proseStyle}>
      The quarrel even had named champions in the same room. For decades the Paris exhibition was the stage for a
      running feud between Ingres, who held that drawing was the honest skeleton of art and color a mere cosmetic, and
      Delacroix, who held that color and feeling were the living thing and Ingres&rsquo;s perfect line a corpse. Critics
      lined up behind one or the other; a young painter had to choose a side. It was the era&rsquo;s central question,
      order against intensity, shrunk down to two men who genuinely could not stand the sight of each other&rsquo;s work.
    </p>

    <SectionHeader accent={accent} label="Two faces of one coin" title="What they could not see they shared" />
    <p style={proseStyle}>
      And yet, step back, and the two wings look less like enemies than like brothers who refuse to admit the
      resemblance. Both began by rejecting the same thing, the weightless Rococo pleasure of Fragonard&rsquo;s swing.
      Both treated painting as a serious moral and public act, not a decoration for a salon wall. Both seized the giant
      scale of history painting and aimed it at the great matters of their century. And both were carried on the same
      flood of revolution and war, the one painting its hopes, the other its wreckage. They were two answers to one
      question, not two unrelated styles, which is the only reason it makes sense to call this single, fractious century
      a single era at all.
    </p>
    <p style={proseStyle}>
      Hold the two emblems side by side and the argument is right there on the surface: the oath and the firing squad.
      David lines his Romans up like statues, evenly lit, every edge finished, the brushwork hidden, the feeling held
      under iron control. Goya throws his light like a thrown bottle, lets the dark eat half the canvas, and gives the
      reason wing no order to hold onto at all, only terror. Same century, same wars, opposite faith. That is the era,
      in two pictures.
    </p>
  </article>
</>)

// ── 4. The handoff ──────────────────────────────────────────
const NroHandoffNarrative: Narrative = ({ accent }) => (<>
  <article style={{ padding: '18px 18px 40px' }}>
    <SectionHeader accent={accent} label="Around 1850" title="The man who refused both" first />
    <p style={proseStyle}>
      <DropCap accent={accent}>A</DropCap>
      n argument with two sides usually ends when one side wins. This one ended differently, when a third man arrived
      and threw out both. Around mid-century Gustave Courbet looked at the reason wing&rsquo;s idealized antique gods
      and the feeling wing&rsquo;s heightened storms and decided he wanted neither. He would paint only the plain,
      contemporary, unidealized present, and he would paint it big. Two laborers breaking rock by a road, a whole
      provincial village turned out for a funeral, peasants and stone and ordinary dirt, given the grand scale David
      had kept for Roman heroes and Delacroix had filled with catastrophe. No ideal past. No sublime terror. Just the
      ordinary now, painted as if it mattered as much as a god.
    </p>
    <p style={proseStyle}>
      This was{' '}<strong>Realism</strong>, and it is the hinge into the next era. By rejecting{' '}<em>both</em>{' '}the
      idealized past of Neoclassicism and the raised pulse of Romanticism, Courbet opened the long modern argument
      about what a painting is even for, the argument the Modern era carries from here. The line-versus-color fight
      that Ingres and Delacroix waged did not die with them either; it went on organizing French painting for another
      fifty years, straight into the academic establishment that the Impressionists would later have to fight.
    </p>

    <SectionHeader accent={accent} label="What the century settled" title="The question it handed on" />
    <p style={proseStyle}>
      So between roughly 1750 and 1850, European painting argued out, in pictures, a question the whole modern age would
      inherit: is the truest art the one that orders the world by reason, or the one that tells the truth of feeling?
      Neoclassicism answered with line, the antique, and civic virtue, and became the face of a Revolution. Romanticism
      answered with color, nature, and the sublime, and painted the era&rsquo;s terrors and longings. The two never
      took turns; they overlapped and fought, both of them riding the same flood of revolution and war. And when
      Realism finally walked away from both to paint only the plain present, the swing long buried and the oath long
      sworn, the modern age had begun.
    </p>
  </article>
</>)

export const ERA_NARRATIVES: Record<string, Record<string, Narrative>> = {
 mod: {
 land: LandNarrative,
 salon: SalonNarrative,
 light: LightNarrative,
 structure: StructureNarrative,
 break: BreakNarrative,
 manifesto: ManifestoNarrative,
 unconscious: UnconsciousNarrative,
 newyork: NewYorkNarrative,
 },
 nro: {
  land: NroLandNarrative,
  reason: NroReasonNarrative,
  feeling: NroFeelingNarrative,
  quarrel: NroQuarrelNarrative,
  handoff: NroHandoffNarrative,
 },
}
