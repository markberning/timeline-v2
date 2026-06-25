// art-content-nro.ts — the Neoclassical & Romantic era (`nro`, c.1750–1850) data
// layer, kept in its own module so the giant art-content.ts is not edited
// fragilely. Translated ONLY from the three born-verified fact packs
// (audits/art-pipeline/nro-era-factpack.md + nro-neoclassicism-factpack.md +
// nro-romanticism-factpack.md). The long-form chaptered prose is authored in a
// LATER pass — every `sections` array here is intentionally empty.
//
// IMAGE-RIGHTS NOTE: this era is the inverse of the Abstract-Expressionism case —
// every canonical work is pre-1900 and public-domain WORLDWIDE, so every NRO_IMG
// URL is a free `/commons/` file inlineable anywhere. URLs use the Wikimedia
// ORIGINAL on upload.wikimedia.org (md5-hashed path, NOT a /thumb/ or
// commons.wikimedia.org path, which 400 on the target network); each was
// load-checked to return HTTP 200 + image/* at authoring time.

import { ART_ACCENTS } from './art-data'
import type {
  ArtMovementContent,
  ArtEraContent,
  EraMovement,
} from './art-content'

// Every image URL the consts below reference, keyed by short camelCase names.
// All are free public-domain Commons files (the era has no rights problem).
export const NRO_IMG: Record<string, string> = {
  // ── Rococo "before" foils (era + movement break blocks) ──
  fragonardSwing:
    'https://upload.wikimedia.org/wikipedia/commons/8/83/The_Swing_(P430).jpg',
  bouchePompadour:
    'https://upload.wikimedia.org/wikipedia/commons/4/4c/Boucher_Marquise_de_Pompadour_1756.jpg',

  // ── NEOCLASSICISM canon ──
  oathHoratii:
    'https://upload.wikimedia.org/wikipedia/commons/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
  deathSocrates:
    'https://upload.wikimedia.org/wikipedia/commons/e/ed/The_Death_of_Socrates_MET_DP-13139-001.jpg',
  deathMarat:
    'https://upload.wikimedia.org/wikipedia/commons/a/aa/Death_of_Marat_by_David.jpg',
  napoleonAlps:
    'https://upload.wikimedia.org/wikipedia/commons/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg',
  grandeOdalisque:
    'https://upload.wikimedia.org/wikipedia/commons/f/f4/Jean_Auguste_Dominique_Ingres_-_The_Grand_Odalisque_-_WGA11841.jpg',
  apotheosisHomer:
    'https://upload.wikimedia.org/wikipedia/commons/d/d8/Jean_Auguste_Dominique_Ingres_-_The_Apotheosis_of_Homer_-_WGA11849.jpg',
  napoleonThrone:
    'https://upload.wikimedia.org/wikipedia/commons/2/28/Ingres%2C_Napoleon_on_his_Imperial_throne.jpg',

  // ── NEOCLASSICISM artist portraits ──
  davidPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/c/c6/David_Self_Portrait.jpg',
  ingresPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/e/ee/Ingres%2C_Self-portraitFXD.jpg',
  canovaPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/3/38/John_Jackson_-_Antonio_Canova_-_Google_Art_Project.jpg',
  kauffmanPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/2/27/Angelica_Kauffmann%2C_Self-Portrait_as_the_Muse_of_Painting%2C_1787.jpg',
  westPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/Benjamin_West_-_Self-Portrait_-_Google_Art_Project.jpg',
  mengsPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/0/02/Autorretrato_de_Anton_Raphael_Mengs_(Museo_del_Prado).jpg',
  winckelmannPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/d/d5/Johann_Joachim_Winckelmann_(Raphael_Mengs_after_1755).jpg',

  // ── ROMANTICISM canon ──
  thirdOfMay:
    'https://upload.wikimedia.org/wikipedia/commons/4/48/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_in_Google_Earth.jpg',
  saturn:
    'https://upload.wikimedia.org/wikipedia/commons/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_(1819-1823).jpg',
  familyCharlesIV:
    'https://upload.wikimedia.org/wikipedia/commons/8/89/La_familia_de_Carlos_IV%2C_Francisco_de_Goya.jpg',
  sleepReason:
    "https://upload.wikimedia.org/wikipedia/commons/1/11/Plate_43_from_'Los_Caprichos'-_The_sleep_of_reason_produces_monsters_(El_sue%C3%B1o_de_la_razon_produce_monstruos)_MET_DP816992.jpg",
  raftMedusa:
    'https://upload.wikimedia.org/wikipedia/commons/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_(Museo_del_Louvre%2C_1818-19).jpg',
  liberty:
    'https://upload.wikimedia.org/wikipedia/commons/5/5d/Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg',
  sardanapalus:
    'https://upload.wikimedia.org/wikipedia/commons/6/66/Eug%C3%A8ne_Delacroix_-_The_Death_of_Sardanapalus_-_WGA6173.jpg',
  slaveShip:
    'https://upload.wikimedia.org/wikipedia/commons/2/26/Slave-ship.jpg',
  rainSteamSpeed:
    'https://upload.wikimedia.org/wikipedia/commons/9/96/Turner_-_Rain%2C_Steam_and_Speed_-_National_Gallery_file.jpg',
  fightingTemeraire:
    'https://upload.wikimedia.org/wikipedia/commons/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg',
  snowStorm:
    "https://upload.wikimedia.org/wikipedia/commons/3/30/Joseph_Mallord_William_Turner_-_Snow_Storm_-_Steam-Boat_off_a_Harbour's_Mouth_-_WGA23178.jpg",
  wanderer:
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Caspar_David_Friedrich_-_Wanderer_above_the_Sea_of_Fog.jpeg',
  monkBySea:
    'https://upload.wikimedia.org/wikipedia/commons/2/21/Caspar_David_Friedrich_-_Der_M%C3%B6nch_am_Meer_-_Google_Art_Project.jpg',
  hayWain:
    'https://upload.wikimedia.org/wikipedia/commons/5/5e/John_Constable_-_The_Hay_Wain_(1821).jpg',

  // ── ROMANTICISM artist portraits ──
  goyaPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg',
  gericaultPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/5/53/Portrait_of_Th%C3%A9odore_Gericault_MET_DP879349.jpg',
  delacroixPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/e/e8/Autoportrait_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_25.jpg',
  turnerPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/1/1d/Joseph_Mallord_William_Turner_-_Self-Portrait_-_Google_Art_Project.jpg',
  friedrichPhoto:
    'https://upload.wikimedia.org/wikipedia/commons/5/55/Hamburg%2C_Kunsthalle%2C_Gerhard_von_K%C3%BCgelgen%2C_Bildnis_von_Caspar_David_Friedrich.jpg',
  constablePhoto:
    'https://upload.wikimedia.org/wikipedia/commons/3/30/ConstableSelfPortrait.png',
}

// Era palette tones used as card/lineage gradients (stone/steel/blood for the
// reason wing; warm oxblood/gold/ink for the feeling wing).
const STONE: [string, string, string] = ['#8a7a5a', '#4a3c2a', '#14100a']
const STEEL: [string, string, string] = ['#5a6470', '#2e3640', '#10141a']
const OXBLOOD: [string, string, string] = ['#a8482a', '#5a2418', '#1a0c08']
const SUNSET: [string, string, string] = ['#c87a2a', '#7a3014', '#1c0e08']
const FOG: [string, string, string] = ['#6a7480', '#3a4450', '#12161c']

// ─────────────────────────────────────────────────────────────
// Movement, Neoclassicism (c.1750–c.1830) — Reason, line, civic virtue
// ─────────────────────────────────────────────────────────────
export const NEOCLASSICISM: ArtMovementContent = {
  id: 'neoclassicism',
  name: 'Neoclassicism',
  range: 'c.1750–c.1830',
  span: 'about 80 years',
  era: 'Neoclassical & Romantic',
  eraId: 'nro',
  accent: ART_ACCENTS.amber, // stone/cool register at the warm-neutral end of the palette
  chain: { name: 'Movements of the Neoclassical & Romantic era', index: 1, total: 2 },
  hook: 'Painting goes sober. Greek and Roman heroes, hard line, and a moral lesson.',
  hookLong:
    'Mid-century Europe was tired of Rococo prettiness, and the buried Roman cities were coming up out of the ground. A German scholar told painters to imitate the Greeks and chase a noble simplicity and quiet grandeur, and in Jacques-Louis David they found a master who painted civic duty with a draughtsman’s hardness. The same severe style then became the official look of the French Revolution and of Napoleon.',
  // The Death of Socrates is landscape and reads cleanly in the hero band.
  heroImage: NRO_IMG.deathSocrates,
  heroCredit:
    'David, The Death of Socrates, 1787 · 4 ft 3 in × 6 ft 5¼ in · The Metropolitan Museum of Art, New York · public domain worldwide',
  stats: [
    { v: 'c.80 yrs', k: 'Span' },
    { v: '9', k: 'Canonical works' },
    { v: 'Paris · Rome', k: 'Centered on' },
  ],
  factions: [
    {
      side: 'reason',
      label: 'Line and the antique',
      color: ART_ACCENTS.amber,
      members: ['David', 'Ingres', 'Mengs', 'Canova'],
      detail:
        'Clear contour over color, the Greeks and republican Rome as the model, the canvas as a moral lesson. David made it the State’s style; Ingres defended the primacy of line for forty years.',
    },
    {
      side: 'rococo',
      label: 'The Rococo it buried',
      color: ART_ACCENTS.rust,
      members: ['Boucher', 'Fragonard'],
      detail:
        'Pastel goddesses, flirtation, gardens of idle pleasure, art as a private delight for a small rich world. Exactly what the new severity set out to replace.',
    },
  ],
  works: [
    { id: 'horatii', year: 1784, name: 'Oath of the Horatii', artist: 'David', place: 'Paris', size: 'xl', blurb: 'Three brothers swear on their father’s outstretched swords to die for Rome, taut male resolve at left, the women collapsing in grief at right. A royal commission painted five years before 1789, later read as a summons to put country above self.', palette: STONE, imageUrl: NRO_IMG.oathHoratii, credit: 'David, Oath of the Horatii, 1784–85 · 10 ft 10 in × 13 ft 11 in · Louvre, Paris' },
    { id: 'socrates', year: 1787, name: 'The Death of Socrates', artist: 'David', place: 'Paris', size: 'l', blurb: 'Condemned by Athens, Socrates reaches for the cup of hemlock mid-argument, finger raised, still teaching as he dies. Reason facing death without a tremor.', palette: STONE, imageUrl: NRO_IMG.deathSocrates, credit: 'David, The Death of Socrates, 1787 · 4 ft 3 in × 6 ft 5¼ in · The Metropolitan Museum of Art, New York' },
    { id: 'marat', year: 1793, name: 'The Death of Marat', artist: 'David', place: 'Brussels', size: 'm', blurb: 'The murdered radical journalist Jean-Paul Marat slumped dead in his medicinal bath, pen still in hand, painted by his friend David as a secular martyr. Propaganda and great painting at once.', palette: OXBLOOD, imageUrl: NRO_IMG.deathMarat, credit: 'David, The Death of Marat, 1793 · 5 ft 5 in × 4 ft 2⅜ in · Royal Museums of Fine Arts of Belgium, Brussels' },
    { id: 'napoleon-alps', year: 1801, name: 'Napoleon Crossing the Alps', artist: 'David', place: 'Paris', size: 'm', blurb: 'Bonaparte on a rearing white horse, cloak streaming, pointing over the pass, the names of Hannibal and Charlemagne carved in the rock below. Heroic myth, not reportage (he actually crossed on a mule).', palette: STEEL, imageUrl: NRO_IMG.napoleonAlps, credit: 'David, Napoleon Crossing the Alps, 1801–05 · 8 ft 6⅜ in × 7 ft 3 in · Château de Malmaison, Rueil-Malmaison' },
    { id: 'odalisque', year: 1814, name: 'La Grande Odalisque', artist: 'Ingres', place: 'Paris', size: 'l', blurb: 'A reclining harem nude seen from behind, her cool back drawn impossibly long and smooth, line bent past anatomy for the sake of the curve. Critics at the 1819 Salon said it had two or three vertebrae too many.', palette: STONE, imageUrl: NRO_IMG.grandeOdalisque, credit: 'Ingres, La Grande Odalisque, 1814 · 3 ft × 5 ft 4 in · Louvre, Paris' },
    { id: 'napoleon-throne', year: 1806, name: 'Napoleon I on his Imperial Throne', artist: 'Ingres', place: 'Paris', size: 'm', blurb: 'Napoleon enthroned head-on as a frozen Byzantine icon, ivory, gold, and ermine, hieratic and cold. Ingres’s line pushed all the way into ritual stiffness; the Salon of 1806 disliked it.', palette: STONE, imageUrl: NRO_IMG.napoleonThrone, credit: 'Ingres, Napoleon I on his Imperial Throne, 1806 · 8 ft 6 in × 5 ft 3¾ in · Musée de l’Armée, Paris' },
    { id: 'apotheosis-homer', year: 1827, name: 'The Apotheosis of Homer', artist: 'Ingres', place: 'Paris', size: 'l', blurb: 'Homer enthroned and crowned by Victory before a Greek temple, the great writers and artists of all ages ranged below in symmetrical homage. Late Neoclassicism as a closed pantheon of genius.', palette: STONE, imageUrl: NRO_IMG.apotheosisHomer, credit: 'Ingres, The Apotheosis of Homer, 1827 · 12 ft 8 in × 16 ft 9½ in · Louvre, Paris' },
  ],
  artists: [
    { id: 'david', name: 'Jacques-Louis David', role: 'The severe master', years: '1748–1825', palette: STONE, photo: NRO_IMG.davidPhoto },
    { id: 'ingres', name: 'Ingres', role: 'Apostle of line', years: '1780–1867', palette: STONE, photo: NRO_IMG.ingresPhoto },
    { id: 'canova', name: 'Antonio Canova', role: 'The sculptor', years: '1757–1822', palette: STEEL, photo: NRO_IMG.canovaPhoto },
    { id: 'kauffman', name: 'Angelica Kauffman', role: 'History painter, RA founder', years: '1741–1807', palette: SUNSET, photo: NRO_IMG.kauffmanPhoto },
    { id: 'west', name: 'Benjamin West', role: 'History painter', years: '1738–1820', palette: STONE, photo: NRO_IMG.westPhoto },
    { id: 'mengs', name: 'Anton Raphael Mengs', role: 'The painted manifesto', years: '1728–1779', palette: STONE, photo: NRO_IMG.mengsPhoto },
    { id: 'winckelmann', name: 'Winckelmann', role: 'The founding voice', years: '1717–1768', palette: STEEL, photo: NRO_IMG.winckelmannPhoto },
  ],
  parallels: [
    { year: 1751, movement: 'The Encyclopédie', place: 'Paris', blurb: 'Diderot and d’Alembert begin the Encyclopédie. Neoclassicism is the visual arm of the same Enlightenment cult of reason and civic virtue.' },
    { year: 1789, movement: 'The French Revolution', place: 'Paris', blurb: 'The Revolution makes David its image-maker, a Convention deputy and regicide who staged its festivals. The style becomes a government’s official propaganda.' },
    { year: 1748, movement: 'The Grand Tour', place: 'Rome · Pompeii', blurb: 'With Pompeii newly under excavation, Rome is Europe’s finishing school; Winckelmann, Mengs, Canova, Kauffman, and West all pass through the same ruins.' },
  ],
  lineage: {
    parents: [
      { label: 'Rococo', mode: 'art', img: NRO_IMG.fragonardSwing, palette: SUNSET, note: 'gave: a target to revolt against' },
      { label: 'Antiquity', mode: 'civ', palette: STONE, note: 'gave: subjects, figures, the frieze stage' },
      { label: 'Pompeii excavated', mode: 'civ', palette: STONE, note: 'gave: real Roman rooms and design' },
      { label: 'The Enlightenment', mode: 'civ', palette: STEEL, note: 'gave: reason and civic virtue' },
    ],
    children: [
      { label: 'Romanticism', mode: 'art', img: NRO_IMG.raftMedusa, palette: OXBLOOD, note: 'took: the line-vs-color fight, as its opposite' },
      { label: 'Academic art', mode: 'art', img: NRO_IMG.apotheosisHomer, palette: STONE, note: 'took: drawing-first training' },
      { label: 'Realism', mode: 'art', palette: STONE, note: 'took: the rules it would break' },
    ],
  },
  influenceSummary:
    'Neoclassicism took antiquity, the dug-up Roman cities, and Winckelmann’s creed, made line and moral seriousness the center of painting, and set the drawing-first academic rules that every later movement would define itself against.',
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: NRO_IMG.fragonardSwing,
      title: 'Before · Fragonard, The Swing (1767)',
      caption: 'What painting had been for the Rococo: a private pleasure for a rich world. A girl on a swing kicks off a slipper toward a hidden lover peering up her skirts, pastel, feathery, weightless, about nothing but delight.',
    },
    after: {
      img: NRO_IMG.oathHoratii,
      title: 'After · David, Oath of the Horatii (1784)',
      caption: 'What David did instead: a stripped, severe stage, hard contour over soft color, sculptural figures, and a stoic civic subject. Pleasure replaced by duty, the swing replaced by an oath.',
    },
    prose: [
      'Before David, elite painting was Rococo (the light, ornamental, aristocratic style made for private pleasure). The palette was pastel, the brushwork feathery and visible, the composition swung on soft curves, and the subjects were flirtation and mythological play. Fragonard’s Swing is the textbook case: pretty, weightless, and about nothing more than delight.',
      'Neoclassicism strips all of that out. The palette goes severe and local (stone, steel, blood-red), the brushwork goes smooth and nearly invisible so the figures read as carved marble, the stage goes shallow and frieze-like with the action pressed forward, and the subject becomes stoic duty from Greek and Roman history. Above all, clear LINE replaces soft color as the thing carrying the picture, you could trace every figure with a pencil.',
      'That is why this is a new movement and not a new fashion. The canvas stops being a decoration on a salon wall and becomes an argument: art as a public lesson in virtue. Within a decade that same severe style would be drafted as the official image of the French Revolution.',
    ],
  },
  manifesto: {
    absent: true,
    title: 'Reflections on the Imitation of Greek Works in Painting and Sculpture',
    author: 'Johann Joachim Winckelmann',
    dateLabel: '1755',
    venue: 'Dresden',
    quotes: [
      'a noble simplicity and quiet grandeur',
      'eine edle Einfalt und eine stille Größe',
    ],
    prose: [
      'The Neoclassical painters never wrote a manifesto. Their creed was written for them, by a man who could not paint. In 1755 a German scholar named Johann Joachim Winckelmann published a slim essay (the first edition was a run of about fifty copies) telling artists to stop inventing and start imitating the Greeks, whose supreme quality he named in a phrase that became the movement’s motto: a noble simplicity and quiet grandeur.',
      'Anton Raphael Mengs, Winckelmann’s friend, tried to paint the doctrine in his Parnassus ceiling of 1761, often called the first programmatic Neoclassical picture. David, thirty years later, actually did. So the founding document of an art of severe, drawn, moral pictures is a piece of art criticism.',
      'One honest footnote on the famous line. The first English translator, Henry Fuseli, rendered stille Größe in 1765 as sedate grandeur, not quiet grandeur. The smoother quiet grandeur is the modern standard wording everyone quotes now. The open source below lets the reader check Fuseli’s own words.',
    ],
    sourceUrl: 'https://www.gutenberg.org/ebooks/61317',
    sourceLabel: 'Read Fuseli’s 1765 translation of Winckelmann',
  },
  canon: [
    { year: 1761, name: 'Parnassus (ceiling)', artist: 'Mengs' },
    { year: 1770, name: 'The Death of General Wolfe', artist: 'Benjamin West' },
    { year: 1784, name: 'Oath of the Horatii', artist: 'David', img: NRO_IMG.oathHoratii },
    { year: 1787, name: 'The Death of Socrates', artist: 'David', img: NRO_IMG.deathSocrates },
    { year: 1793, name: 'Psyche Revived by Cupid’s Kiss', artist: 'Canova' },
    { year: 1793, name: 'The Death of Marat', artist: 'David', img: NRO_IMG.deathMarat },
    { year: 1801, name: 'Napoleon Crossing the Alps', artist: 'David', img: NRO_IMG.napoleonAlps },
    { year: 1806, name: 'Napoleon I on his Imperial Throne', artist: 'Ingres', img: NRO_IMG.napoleonThrone },
    { year: 1814, name: 'La Grande Odalisque', artist: 'Ingres', img: NRO_IMG.grandeOdalisque },
    { year: 1827, name: 'The Apotheosis of Homer', artist: 'Ingres', img: NRO_IMG.apotheosisHomer },
  ],
  // Chaptered narrative authored in a later pass.
  sections: [],
}

// ─────────────────────────────────────────────────────────────
// Movement, Romanticism (c.1780–c.1850) — Feeling, color, the sublime
// ─────────────────────────────────────────────────────────────
export const ROMANTICISM: ArtMovementContent = {
  id: 'romanticism',
  name: 'Romanticism',
  range: 'c.1780–c.1850',
  span: 'about 70 years',
  era: 'Neoclassical & Romantic',
  eraId: 'nro',
  accent: ART_ACCENTS.rust, // warm oxblood register
  chain: { name: 'Movements of the Neoclassical & Romantic era', index: 2, total: 2 },
  hook: 'Feeling answers reason. Color over line, the sublime, the firing squad and the storm.',
  hookLong:
    'Romanticism is not a style but a temperament, the revolt of feeling against Neoclassical reason. It has no leader and no manifesto, just painters in Madrid, Paris, London, and Dresden who mostly never met and shared a mood: color over line, emotion over restraint, and nature too vast and terrifying to master. It is the Revolutionary age seen from the other side, disillusion, the horror of war, and national feeling.',
  // The Raft of the Medusa is landscape/wide and reads at history-painting scale
  // in the hero band (NOT a portrait work, per the no-portrait-in-the-band rule).
  heroImage: NRO_IMG.raftMedusa,
  heroCredit:
    'Géricault, The Raft of the Medusa, 1818–19 · 16 ft 1 in × 23 ft 6 in · Louvre, Paris · public domain worldwide',
  stats: [
    { v: 'c.70 yrs', k: 'Span' },
    { v: '14', k: 'Canonical works' },
    { v: 'Spain · France · Britain · Germany', k: 'Spread across' },
  ],
  factions: [
    {
      side: 'feeling',
      label: 'Color and the sublime',
      color: ART_ACCENTS.rust,
      members: ['Goya', 'Géricault', 'Delacroix', 'Turner', 'Friedrich', 'Constable'],
      detail:
        'Emotion as the real subject, visible agitated brushwork, and nature as terrifyingly grand. A shared mood crossing borders with no central command.',
    },
    {
      side: 'reason',
      label: 'The Neoclassical foil',
      color: ART_ACCENTS.amber,
      members: ['David', 'Ingres'],
      detail:
        'Cool line, finished surface, classical calm, civic virtue. The order the Romantics revolted against; Delacroix and Ingres snarled at each other across the Salon for decades.',
    },
  ],
  works: [
    { id: 'third-of-may', year: 1814, name: 'The Third of May 1808', artist: 'Goya', place: 'Madrid', size: 'xl', blurb: 'A faceless French firing squad guns down Madrid civilians at night; the central victim flings up his arms in a glaring white shirt, lit like a martyr before the muzzles. No order, no glory, just modern slaughter.', palette: OXBLOOD, imageUrl: NRO_IMG.thirdOfMay, credit: 'Goya, The Third of May 1808, 1814 · 8 ft 9½ in × 11 ft 4½ in · Museo del Prado, Madrid' },
    { id: 'saturn', year: 1820, name: 'Saturn Devouring His Son', artist: 'Goya', place: 'Madrid', size: 'm', blurb: 'The Titan Saturn, eyes wild, crams a small headless body into his mouth, painted on Goya’s own dining-room wall, never titled by him, never meant to be seen. The blackest of the Black Paintings.', palette: OXBLOOD, imageUrl: NRO_IMG.saturn, credit: 'Goya, Saturn Devouring His Son, c.1819–23 · 4 ft 8½ in × 2 ft 8 in · mural transferred to canvas · Museo del Prado, Madrid' },
    { id: 'family-charles-iv', year: 1801, name: 'The Family of Charles IV', artist: 'Goya', place: 'Madrid', size: 'l', blurb: 'The Spanish royal family lined up in gold and medals, Goya himself half-shadowed at his easel behind them in homage to Velázquez’s Las Meninas. The famous grotesque reading is later interpretation, not documented intent.', palette: STONE, imageUrl: NRO_IMG.familyCharlesIV, credit: 'Goya, The Family of Charles IV, 1800–01 · 9 ft 2¼ in × 11 ft ¼ in · Museo del Prado, Madrid' },
    { id: 'sleep-of-reason', year: 1799, name: 'The Sleep of Reason Produces Monsters', artist: 'Goya', place: 'Madrid', size: 's', blurb: 'A sleeping artist slumped over his desk while owls and bats swarm out of the dark, plate 43 of the Caprichos. The Spanish sueño means both sleep and dream, so the title also reads The Dream of Reason.', palette: OXBLOOD, imageUrl: NRO_IMG.sleepReason, credit: 'Goya, Los Caprichos plate 43, 1799 · etching and aquatint · The Metropolitan Museum of Art, New York' },
    { id: 'raft-medusa', year: 1819, name: 'The Raft of the Medusa', artist: 'Géricault', place: 'Paris', size: 'xl', blurb: 'Survivors of the 1816 Méduse wreck heaped on a makeshift raft, a pyramid of the dead and the barely-living straining toward a speck of a rescue ship. A fresh national scandal painted at the scale once reserved for gods and kings.', palette: OXBLOOD, imageUrl: NRO_IMG.raftMedusa, credit: 'Géricault, The Raft of the Medusa, 1818–19 · 16 ft 1 in × 23 ft 6 in · Louvre, Paris' },
    { id: 'liberty', year: 1830, name: 'Liberty Leading the People', artist: 'Delacroix', place: 'Paris', size: 'l', blurb: 'Liberty, bare-breasted with the tricolor in hand and a Phrygian cap on her head, strides over the barricade dead leading an armed crowd. The July 1830 Revolution (not 1789), and an allegory, not a real woman.', palette: SUNSET, imageUrl: NRO_IMG.liberty, credit: 'Delacroix, Liberty Leading the People, 1830 · 8 ft 6 in × 10 ft 8 in · Louvre, Paris' },
    { id: 'sardanapalus', year: 1827, name: 'The Death of Sardanapalus', artist: 'Delacroix', place: 'Paris', size: 'l', blurb: 'The Assyrian king reclines on his red bed watching his concubines, slaves, and horses slaughtered as his city falls, a Byronic orgy of hot color and writhing diagonals reviled at the Salon of 1827 as the fanaticism of ugliness.', palette: OXBLOOD, imageUrl: NRO_IMG.sardanapalus, credit: 'Delacroix, The Death of Sardanapalus, 1827 · 12 ft 10 in × 16 ft 3 in · Louvre, Paris' },
    { id: 'slave-ship', year: 1840, name: 'The Slave Ship', artist: 'Turner', place: 'London', size: 'm', blurb: 'A blood-and-gold sunset over a heaving sea, shackled limbs and fish in the bloody foreground, Turner’s response to the 1781 Zong massacre, exhibited in 1840 as the abolition movement met in London.', palette: SUNSET, imageUrl: NRO_IMG.slaveShip, credit: 'Turner, The Slave Ship, 1840 · 2 ft 11¾ in × 4 ft ¼ in · Museum of Fine Arts, Boston' },
    { id: 'rain-steam-speed', year: 1844, name: 'Rain, Steam and Speed', artist: 'Turner', place: 'London', size: 'm', blurb: 'A Great Western Railway locomotive bursts out of a storm of golden mist across Brunel’s Maidenhead bridge, the modern machine dissolving into Turner’s light, the railway age painted as weather.', palette: SUNSET, imageUrl: NRO_IMG.rainSteamSpeed, credit: 'Turner, Rain, Steam and Speed — The Great Western Railway, 1844 · 2 ft 11¾ in × 4 ft ⅛ in · The National Gallery, London' },
    { id: 'fighting-temeraire', year: 1839, name: 'The Fighting Temeraire', artist: 'Turner', place: 'London', size: 'm', blurb: 'The ghostly white HMS Temeraire, a Trafalgar veteran, towed by a squat dark steam tug up a sunset Thames to be broken up, the age of sail handed to the age of steam.', palette: SUNSET, imageUrl: NRO_IMG.fightingTemeraire, credit: 'Turner, The Fighting Temeraire, 1839 · 2 ft 11¾ in × 3 ft 11⅞ in · The National Gallery, London' },
    { id: 'snow-storm', year: 1842, name: 'Snow Storm — Steam-Boat off a Harbour’s Mouth', artist: 'Turner', place: 'London', size: 'm', blurb: 'A steamer swallowed in a vortex of snow and spray, the whole canvas a spinning storm, the painting around which Turner told the almost certainly apocryphal story that he had himself lashed to the mast for four hours.', palette: FOG, imageUrl: NRO_IMG.snowStorm, credit: 'Turner, Snow Storm — Steam-Boat off a Harbour’s Mouth, 1842 · 3 ft × 4 ft · Tate, London' },
    { id: 'wanderer', year: 1818, name: 'Wanderer above the Sea of Fog', artist: 'Friedrich', place: 'Dresden', size: 'm', blurb: 'A man in a dark coat seen from behind, alone on a crag above a sea of fog and jagged peaks, the icon of the Romantic individual facing the sublime. Possibly a self-portrait; the identity is unconfirmed.', palette: FOG, imageUrl: NRO_IMG.wanderer, credit: 'Friedrich, Wanderer above the Sea of Fog, c.1818 · 3 ft 1⅜ in × 2 ft 5½ in · Hamburger Kunsthalle, Hamburg' },
    { id: 'monk-by-sea', year: 1810, name: 'The Monk by the Sea', artist: 'Friedrich', place: 'Dresden', size: 'm', blurb: 'A tiny lone monk on a sliver of dune beneath an enormous, almost empty sky and sea, one of the emptiest and most radical landscapes of its century, the sublime as near-nothingness.', palette: FOG, imageUrl: NRO_IMG.monkBySea, credit: 'Friedrich, The Monk by the Sea, 1808–10 · 3 ft 7¼ in × 5 ft 7½ in · Alte Nationalgalerie, Berlin' },
    { id: 'hay-wain', year: 1821, name: 'The Hay Wain', artist: 'Constable', place: 'London', size: 'm', blurb: 'A hay wain (horse-drawn cart) crossing the River Stour at Flatford under a big moving English sky, quiet rural England with weather as the real subject. It won a gold medal at the 1824 Paris Salon and impressed Delacroix.', palette: ['#5a7042', '#3a4a28', '#141a10'], imageUrl: NRO_IMG.hayWain, credit: 'Constable, The Hay Wain, 1821 · 4 ft 3¼ in × 6 ft ¾ in · The National Gallery, London' },
  ],
  artists: [
    { id: 'goya', name: 'Francisco Goya', role: 'The lone prophet of the dark', years: '1746–1828', palette: OXBLOOD, photo: NRO_IMG.goyaPhoto },
    { id: 'gericault', name: 'Théodore Géricault', role: 'Disaster on the big wall', years: '1791–1824', palette: OXBLOOD, photo: NRO_IMG.gericaultPhoto },
    { id: 'delacroix', name: 'Eugène Delacroix', role: 'Champion of color and revolt', years: '1798–1863', palette: SUNSET, photo: NRO_IMG.delacroixPhoto },
    { id: 'turner', name: 'J.M.W. Turner', role: 'Light dissolving the world', years: '1775–1851', palette: SUNSET, photo: NRO_IMG.turnerPhoto },
    { id: 'friedrich', name: 'Caspar David Friedrich', role: 'Landscape as religion', years: '1774–1840', palette: FOG, photo: NRO_IMG.friedrichPhoto },
    { id: 'constable', name: 'John Constable', role: 'Poet of English weather', years: '1776–1837', palette: ['#5a7042', '#3a4a28', '#141a10'], photo: NRO_IMG.constablePhoto },
  ],
  parallels: [
    { year: 1789, movement: 'Revolution to 1830', place: 'Paris', blurb: 'Romanticism’s whole life runs through the political earthquake. Where Neoclassicism painted the Revolution’s optimism, Romanticism paints its hangover, disillusion, the horror of war, and revolt (Delacroix’s Liberty).' },
    { year: 1798, movement: 'Romantic literature', place: 'England · Germany', blurb: 'The same decades produced Wordsworth and Coleridge’s Lyrical Ballads, Byron (whose Sardanapalus Delacroix paints), Goethe, and the German Sturm und Drang. Painting and poetry shared one temperament.' },
    { year: 1830, movement: 'The machine age', place: 'Britain', blurb: 'As the railway and steamship remade Britain, Turner painted them dissolving into light and weather. The same age that built the railways produced the painting that most distrusts cold reason.' },
  ],
  lineage: {
    parents: [
      { label: 'Neoclassicism', mode: 'art', img: NRO_IMG.oathHoratii, palette: STONE, note: 'gave: the foil it revolted against' },
      { label: 'The sublime (Burke)', mode: 'civ', palette: FOG, note: 'gave: terror and vastness as a subject' },
      { label: 'Romantic literature', mode: 'civ', palette: SUNSET, note: 'gave: feeling, the Byronic hero, the nation' },
      { label: 'Baroque color', mode: 'art', palette: OXBLOOD, note: 'gave: the loose colorist tradition' },
    ],
    children: [
      { label: 'Barbizon & Realism', mode: 'art', img: NRO_IMG.hayWain, palette: ['#5a7042', '#3a4a28', '#141a10'], note: 'took: loose, weather-true landscape' },
      { label: 'Impressionism', mode: 'art', img: NRO_IMG.rainSteamSpeed, palette: SUNSET, note: 'took: dissolved light, color over line' },
      { label: 'Orientalism', mode: 'art', palette: SUNSET, note: 'took: the exotic, from Delacroix’s Morocco' },
    ],
  },
  influenceSummary:
    'Romanticism took David’s grand history-painting scale and filled it with disaster, took Burke’s sublime and the cult of feeling, and handed loose weather-driven landscape, color over line, and feeling-as-subject on to Realism, Impressionism, and modern painting itself.',
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: NRO_IMG.oathHoratii,
      title: 'Before · David, Oath of the Horatii (1784)',
      caption: 'The Neoclassical picture: built like a Roman frieze, clear contour, sculptural figures lit evenly, every edge finished, the brushwork hidden, the mood austere and morally controlled. Reason and order rule.',
    },
    after: {
      img: NRO_IMG.raftMedusa,
      title: 'After · Géricault, The Raft of the Medusa (1818–19)',
      caption: 'The Romantic picture: a place of feeling and force. Edges dissolve, the brushwork shows, color carries the emotion, and the composition heaves on the diagonal, ordinary suffering piled into a straining pyramid.',
    },
    prose: [
      'Neoclassicism, above all David, built a painting like a Roman frieze: clear contour, sculptural figures lit evenly, every edge finished, the brushwork hidden, the mood austere and morally controlled. The Oath of the Horatii lines its heroes up like statues swearing on cue. Reason and order rule, and the cool classical line is the thing that carries the picture.',
      'Romanticism throws the rulebook out. The picture stops being a controlled diagram and becomes a place of feeling and force. Edges dissolve, the brushwork shows, color carries the emotion, and the composition heaves on the diagonal. Géricault piles the dead into a straining pyramid on a raft; Delacroix lets hot color and motion run riot; Goya goes dark; Friedrich shrinks a single figure under an enormous sky; Turner dissolves a ship into light.',
      'That is why this is a temperament and not a tidy style. The subject is no longer civic virtue calmly depicted but emotion, the sublime (nature as terrifyingly grand), the individual, the nation, and the nightmare, painted with visible heat. There is no manifesto and no single look, because there was no movement to issue one.',
    ],
  },
  manifesto: {
    absent: true,
    title: 'Preface to Lyrical Ballads · Friedrich’s aphorisms · Delacroix’s Journal · Baudelaire’s criticism',
    author: 'Wordsworth · Friedrich · Delacroix · Baudelaire',
    dateLabel: '1800–1863',
    quotes: [
      'I have said that poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity. (Wordsworth)',
      'The artist should not only paint what he sees before him, but also what he sees in himself. (Friedrich)',
      'Romanticism is precisely situated neither in choice of subjects nor in exact truth, but in a way of feeling. (Baudelaire)',
    ],
    prose: [
      'There was no Romantic manifesto, because there was no Romantic movement to sign one, just painters in Madrid, Paris, London, and Dresden who mostly never met and shared a mood instead of a program. No club, no rulebook, no pope.',
      'The nearest thing to a creed came from the writers and critics. Wordsworth, in the Preface to Lyrical Ballads (added in 1800, expanded 1802), defined poetry as the spontaneous overflow of powerful feelings. Friedrich told painters to shut the bodily eye and paint what they saw within. Delacroix argued for color and imagination in the privacy of his Journal. And Baudelaire pinned it down a generation later: Romanticism lives not in choice of subjects but in a way of feeling.',
      'So the surrogate manifesto is a handful of poems, diaries, and reviews. Friedrich’s lines reach English only as a circulated translation, not a primary document, so treat them as such. No manifesto. A temperament.',
    ],
    sourceUrl:
      'https://viscomi.sites.oasis.unc.edu/viscomi/coursepack/wordsworth/Wordsworth-1800_LB_Preface.pdf',
    sourceLabel: 'Read Wordsworth’s 1800 Preface to Lyrical Ballads',
  },
  canon: [
    { year: 1799, name: 'The Sleep of Reason Produces Monsters', artist: 'Goya', img: NRO_IMG.sleepReason },
    { year: 1801, name: 'The Family of Charles IV', artist: 'Goya', img: NRO_IMG.familyCharlesIV },
    { year: 1810, name: 'The Monk by the Sea', artist: 'Friedrich', img: NRO_IMG.monkBySea },
    { year: 1814, name: 'The Third of May 1808', artist: 'Goya', img: NRO_IMG.thirdOfMay },
    { year: 1818, name: 'Wanderer above the Sea of Fog', artist: 'Friedrich', img: NRO_IMG.wanderer },
    { year: 1819, name: 'The Raft of the Medusa', artist: 'Géricault', img: NRO_IMG.raftMedusa },
    { year: 1820, name: 'Saturn Devouring His Son', artist: 'Goya', img: NRO_IMG.saturn },
    { year: 1821, name: 'The Hay Wain', artist: 'Constable', img: NRO_IMG.hayWain },
    { year: 1827, name: 'The Death of Sardanapalus', artist: 'Delacroix', img: NRO_IMG.sardanapalus },
    { year: 1830, name: 'Liberty Leading the People', artist: 'Delacroix', img: NRO_IMG.liberty },
    { year: 1839, name: 'The Fighting Temeraire', artist: 'Turner', img: NRO_IMG.fightingTemeraire },
    { year: 1840, name: 'The Slave Ship', artist: 'Turner', img: NRO_IMG.slaveShip },
    { year: 1842, name: 'Snow Storm — Steam-Boat off a Harbour’s Mouth', artist: 'Turner', img: NRO_IMG.snowStorm },
    { year: 1844, name: 'Rain, Steam and Speed', artist: 'Turner', img: NRO_IMG.rainSteamSpeed },
  ],
  // Chaptered narrative authored in a later pass.
  sections: [],
}

// ─────────────────────────────────────────────────────────────
// Era, Neoclassical & Romantic (1750–1850) — Reason vs Feeling
// ─────────────────────────────────────────────────────────────

// EraMovement card metadata for the era page's two-movement grid.
const NEO_CARD: EraMovement = {
  id: 'neoclassicism',
  name: 'Neoclassicism',
  range: 'c.1750–1830',
  accent: ART_ACCENTS.amber,
  size: 'l',
  hook: 'Reason, line, and civic virtue. The antique revived, and the official style of the Revolution and Napoleon.',
  palette: STONE,
  imageUrl: NRO_IMG.oathHoratii,
  credit: 'David, Oath of the Horatii, 1784–85 · Louvre, Paris',
}

const ROM_CARD: EraMovement = {
  id: 'romanticism',
  name: 'Romanticism',
  range: 'c.1780–1850',
  accent: ART_ACCENTS.rust,
  size: 'l',
  hook: 'Feeling, color, and the sublime. A firing squad, a raft of corpses, a barricade, a lone man before the fog.',
  palette: OXBLOOD,
  imageUrl: NRO_IMG.thirdOfMay,
  credit: 'Goya, The Third of May 1808, 1814 · Museo del Prado, Madrid',
}

export const NRO_ERA: ArtEraContent = {
  id: 'nro',
  name: 'Neoclassical & Romantic',
  range: '1750–1850',
  span: '100 years',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Eras of Western art', index: 6, total: 8 },
  hook: 'One century of European painting argues out a single question: reason, or feeling?',
  hookLong:
    'A single century, told as one argument with two answers. First Neoclassicism answers Rococo frivolity with classical restraint, line, and civic virtue, rising with the Enlightenment and the dug-up Roman cities. Then Romanticism revolts against the cold of reason itself, for emotion, color, and the sublime. The twist: the two do not take turns. They overlap and fight, all of it riding one continuous political earthquake from the French Revolution through Napoleon to 1830.',
  // Hero MUST be landscape/near-square (no tall portrait in the band). Liberty
  // Leading the People is wide, dramatic, and instantly readable.
  heroImage: NRO_IMG.liberty,
  heroCredit:
    'Delacroix, Liberty Leading the People, 1830 · 8 ft 6 in × 10 ft 8 in · Louvre, Paris · public domain worldwide',
  stats: [
    { v: '100 yrs', k: 'Span' },
    { v: '2', k: 'Movements' },
    { v: 'Reason vs Feeling', k: 'The argument' },
  ],
  tensions: [
    { side: 'reason', label: 'Reason', color: ART_ACCENTS.amber, motto: 'A noble simplicity and quiet grandeur.', detail: 'Neoclassicism (David, Ingres): line over color, the antique revived, civic virtue, moral seriousness. Painting as ethics, and then the official image of a Revolution.' },
    { side: 'feeling', label: 'Feeling', color: ART_ACCENTS.rust, motto: 'Paint what you see within.', detail: 'Romanticism (Goya, Géricault, Delacroix, Turner, Friedrich): color over line, the sublime, nature’s power, the individual and the nation, dream and nightmare.' },
  ],
  movements: [NEO_CARD, ROM_CARD],
  anchorPainters: [
    { name: 'David', role: 'The severe master', palette: STONE },
    { name: 'Ingres', role: 'Line', palette: STONE },
    { name: 'Goya', role: 'The dark', palette: OXBLOOD },
    { name: 'Géricault', role: 'The raft', palette: OXBLOOD },
    { name: 'Delacroix', role: 'Color and revolt', palette: SUNSET },
    { name: 'Turner', role: 'Light and the sublime', palette: SUNSET },
  ],
  lineage: {
    parents: [
      { label: 'Rococo', mode: 'art', img: NRO_IMG.fragonardSwing, palette: SUNSET, note: 'gave: the pleasure-art it buried' },
      { label: 'Antiquity & Pompeii', mode: 'civ', palette: STONE, note: 'gave: the antique, freshly excavated' },
      { label: 'The Enlightenment', mode: 'civ', palette: STEEL, note: 'gave: reason, and Burke’s sublime' },
      { label: 'Baroque', mode: 'art', palette: OXBLOOD, note: 'gave: color and drama, to Romanticism' },
    ],
    children: [
      { label: 'Realism', mode: 'art', palette: STONE, note: 'took: a target, rejecting both wings' },
      { label: 'Modern', mode: 'art', palette: ['#7c3aed', '#3d2a6a', '#150f24'], note: 'took: the line-vs-color axis' },
      { label: 'Impressionism', mode: 'art', img: NRO_IMG.rainSteamSpeed, palette: SUNSET, note: 'took: loose brushwork and dissolving light' },
    ],
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: NRO_IMG.fragonardSwing,
      title: 'Before · Fragonard, The Swing (1767)',
      caption: 'Rococo: light, ornamental, aristocratic, made for private pleasure. A girl kicks off a slipper toward a hidden admirer. Beautiful, weightless, and about nothing more than delight.',
    },
    after: {
      img: NRO_IMG.thirdOfMay,
      title: 'After · Goya, The Third of May 1808 (1814)',
      caption: 'By the end of the era, painting is loud, agitated, and emotional: color over line, turbulent brushwork, and subjects of terror and grandeur. A firing squad, lit like a martyrdom. The subject is feeling and the sublime.',
    },
    prose: [
      'The era break is a two-step change. Before it, mid-century elite painting was Rococo (light, ornamental, aristocratic, made for private pleasure): Boucher’s pink mythologies, Fragonard’s Swing. Beautiful, weightless, and about nothing more than delight.',
      'First, Neoclassicism makes painting sober and severe. Out go the boudoir and the pastel; in come Greek and Roman heroes, clean hard contour (line over color), smooth finish, and subjects chosen for a moral lesson. David’s Oath of the Horatii puts grim civic duty where Fragonard had put a swing. Art becomes ethics, and then the official image of a Revolution.',
      'Then Romanticism breaks again, this time against the coldness of reason itself. Painting gets loud, agitated, and emotional: color over line, turbulent brushwork, and subjects of terror and grandeur, a firing squad, a raft of corpses, a barricade, a lone man before an infinite fog. The two answers overlap and fight rather than succeed each other, which is exactly why the era is one argument, Reason against Feeling, and not a tidy timeline.',
    ],
  },
  // Era-level manifesto block is not gate-required (a manifesto belongs to a
  // movement, not an era); the underwriting texts (Winckelmann, Burke) live in
  // the movement reads.
  landCard: {
    mo: '1750', year: '–1850',
    name: 'Lay of the land',
    place: 'Paris · Rome · one century, two answers',
    blurb: 'A single century of European painting, told as one argument with two answers. Reason against Feeling, line against color, the antique against the storm, riding one continuous political earthquake from the French Revolution through Napoleon to 1830.',
    size: 'm',
    palette: STONE,
    imageUrl: NRO_IMG.oathHoratii,
    credit: 'David, Oath of the Horatii, 1784–85 · Louvre, Paris',
    imgLabel: 'David swears the era in',
  },
  // Chaptered era narrative authored in a later pass.
  sections: [],
}
