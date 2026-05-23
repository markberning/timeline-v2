// art-content.ts — the authored content for the Art vertical's first vertical
// slice: the Modern era → Cubism movement → Les Demoiselles d'Avignon work →
// Picasso artist. Ported from the mockup (art-data.jsx). All other eras/
// movements render a "coming soon" state until authored.
//
// Numbers carried over from the mockup are FLAGGED where they look like
// generated filler (see audits/art-vertical.md §8) — verify before shipping.
// Images use Wikimedia Special:FilePath URLs with a palette fallback.

import { ART_ACCENTS } from './art-data'

export type Palette = [string, string, string]

// A hero image cell. `focus` is the CSS object-position (e.g. '50% 20%') used to
// frame a deliberate landscape *detail* of a tall work without cutting content.
export interface HeroImage { src: string; focus?: string }

// Verified image URLs — resolved via the MediaWiki API and load-checked (200,
// image/*) on 2026-05-23. The earlier mockup filenames mostly 404'd (wrong names;
// curly vs straight apostrophe; Commons doesn't host works still in copyright).
//
// COPYRIGHT TIERS (drives the inline-vs-restricted treatment):
//  • EN-tier  = en.wikipedia *fair-use* copy. These works are PUBLIC DOMAIN IN
//    THE US (first published before 1931), so they are servable inline in this
//    US-jurisdiction product even though still under copyright in France.
//  • COMMONS  = free worldwide (PD or CC). Inline anywhere.
//  • Guernica (1937) is NOT US public domain → it is NEVER inline; it renders as
//    a restricted reference (degraded treatment) in the reader.
export const ART_IMG = {
  // EN-tier (US public domain, pre-1931 — inline OK)
  demoiselles: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/960px-Les_Demoiselles_d%27Avignon.jpg',
  girlWithMandolin: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg/960px-Pablo_Picasso%2C_1910%2C_Girl_with_a_Mandolin_%28Fanny_Tellier%29%2C_oil_on_canvas%2C_100.3_x_73.6_cm%2C_Museum_of_Modern_Art_New_York..jpg',
  picassoStudy1907: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cb/Pablo_Picasso%2C_1907%2C_Head_of_a_Sleeping_Woman_%28Study_for_Nude_with_Drapery%29%2C_oil_on_canvas%2C_61.4_x_47.6_cm%2C_The_Museum_of_Modern_Art%2C_New_York.jpg/960px-Pablo_Picasso%2C_1907%2C_Head_of_a_Sleeping_Woman_%28Study_for_Nude_with_Drapery%29%2C_oil_on_canvas%2C_61.4_x_47.6_cm%2C_The_Museum_of_Modern_Art%2C_New_York.jpg',
  kahnweiler: 'https://upload.wikimedia.org/wikipedia/en/6/68/Picasso_Portrait_of_Daniel-Henry_Kahnweiler_1910.jpg',
  braqueEstaque: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Georges_Braque%2C_1908%2C_Maisons_et_arbre%2C_oil_on_canvas%2C_40.5_x_32.5_cm%2C_Lille_M%C3%A9tropole_Museum_of_Modern%2C_Contemporary_and_Outsider_Art.jpg',
  // COMMONS (free worldwide)
  starryNight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
  impressionSunrise: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg',
  picassoPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/960px-Pablo_picasso_1.jpg',
  cezanneBathers: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Paul_C%C3%A9zanne%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg/960px-Paul_C%C3%A9zanne%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg',
  momaFacade: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/960px-MoMa_NY_USA_1.jpg',
  // RESTRICTED — Guernica (1937), NOT US public domain → degraded reference only
  guernica: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
} as const

export interface ArtStat { v: string; k: string }
export interface ArtSide { side?: string; label: string; color: string; motto?: string; detail?: string; members?: string[] }
export interface ArtLineageChip { label: string; mode: 'art' | 'civ' | 'war' }
export interface ArtLineage { parents: ArtLineageChip[]; children: ArtLineageChip[] }

// ─────────────────────────────────────────────────────────────
// Era — Modern (1850–1970)
// ─────────────────────────────────────────────────────────────
export interface EraMovement {
  id: string
  name: string
  range: string
  accent: string
  size: 's' | 'm' | 'l' | 'xl'
  hook: string
  palette: Palette
  imageUrl?: string // representative work; cord card falls back to palette gradient
  focus?: string // object-position for the xl banner / column crop (frame a detail)
}
export interface AnchorPainter { name: string; role: string; palette: Palette }

export interface ArtEraContent {
  id: string
  name: string
  range: string
  span: string
  accent: string
  chain: { name: string; index: number; total: number }
  hook: string
  hookLong: string
  heroImage: string
  heroCredit: string
  // Hero composition (see ArtHero / audits/art-vertical.md "Image orientation"):
  // default is a single cover image; use contain for a whole portrait/square work,
  // or heroImages (2+) for a portrait diptych. heroFocus frames a cover detail.
  heroFit?: 'cover' | 'contain'
  heroFocus?: string
  heroImages?: HeroImage[]
  stats: ArtStat[]
  tensions: ArtSide[]
  movements: EraMovement[]
  anchorPainters: AnchorPainter[]
  lineage: ArtLineage
}

export const MODERN_ERA: ArtEraContent = {
  id: 'mod',
  name: 'Modern',
  range: '1850–1970',
  span: '120 years',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Eras of Western art', index: 7, total: 8 },
  hook: 'Painters break the picture and put it back together wrong on purpose.',
  hookLong:
    'In a hundred and twenty years, Western painting goes from cathedral-trained perspective masters making one more Madonna to a man in a Paris studio dripping enamel onto a canvas on the floor. Almost everything in between is somebody arguing about whether that should be allowed.',
  heroImage: ART_IMG.starryNight,
  heroCredit: 'Van Gogh, The Starry Night, 1889 · MoMA · public domain worldwide',
  stats: [
    { v: '120 yrs', k: 'Span' },
    { v: '18', k: 'Major movements' }, // FLAG: only 10 listed below — reconcile
    { v: '~600', k: 'Canonical works' }, // FLAG: fuzzy filler
  ],
  tensions: [
    { side: 'tradition', label: 'The Academies', color: ART_ACCENTS.amber, motto: 'Beauty has rules, and we know them.', detail: 'Salons, royal academies, art schools — the institutions that defined what a painting was supposed to look like.' },
    { side: 'rupture', label: 'The Avant-Gardes', color: ART_ACCENTS.violet, motto: 'Make it new. Then make it newer.', detail: 'A century of small magazines, group manifestos, gallerists, and a Paris café full of arguments.' },
  ],
  movements: [
    { id: 'real', name: 'Realism', range: '1848–1870', accent: ART_ACCENTS.amber, size: 's', hook: 'Painting the world as the eye actually sees it. Mostly farmers and laundresses.', palette: ['#6b5034', '#3a2820', '#100c08'] },
    { id: 'imp', name: 'Impressionism', range: '1860s–1886', accent: ART_ACCENTS.blue, size: 'l', hook: 'Painting the LIGHT instead of the thing. Outdoors. Quick.', palette: ['#3a6a8a', '#c8c050', '#1c2a30'], imageUrl: ART_IMG.impressionSunrise },
    { id: 'post', name: 'Post-Impressionism', range: '1886–1905', accent: ART_ACCENTS.green, size: 'm', hook: 'Putting the structure back. Cézanne in Aix, Van Gogh in Arles, Gauguin in Tahiti.', palette: ['#5a7042', '#8a7848', '#1c1a12'], imageUrl: ART_IMG.cezanneBathers },
    { id: 'fauv', name: 'Fauvism', range: '1905–1908', accent: ART_ACCENTS.rust, size: 's', hook: 'Colour off the leash. Matisse, three years, four canvases, done.', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { id: 'cubism', name: 'Cubism', range: '1907–1922', accent: ART_ACCENTS.violet, size: 'xl', hook: 'A face has six sides now. A guitar shows you its strings and its back.', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], imageUrl: ART_IMG.demoiselles, focus: '50% 30%' },
    { id: 'fut', name: 'Futurism', range: '1909–1944', accent: ART_ACCENTS.rust, size: 's', hook: 'Italian painters in love with motorcars. It ended badly.', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'] },
    { id: 'dada', name: 'Dada', range: '1916–1924', accent: ART_ACCENTS.amber, size: 'm', hook: 'A war in the background and a urinal in the foreground.', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { id: 'sur', name: 'Surrealism', range: '1924–1966', accent: ART_ACCENTS.green, size: 'l', hook: 'The unconscious gets a paintbrush. Freud and a clock that won’t hold its shape.', palette: ['#1c3a6a', '#c8a72a', '#0e1224'] },
    { id: 'abex', name: 'Abstract Expressionism', range: '1943–1960', accent: ART_ACCENTS.blue, size: 'l', hook: 'The action stops being something the painting shows and starts being what makes it.', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'] },
    { id: 'pop', name: 'Pop Art', range: '1956–1970', accent: ART_ACCENTS.violet, size: 'm', hook: 'A soup can, but with conviction. Warhol’s factory; Lichtenstein’s dots.', palette: ['#ff3e7f', '#1f1f1f', '#7adff0'] },
  ],
  anchorPainters: [
    { name: 'Cézanne', role: 'The bridge', palette: ['#5a7042', '#8a7848', '#1c1a12'] },
    { name: 'Monet', role: 'Light, water', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Picasso', role: 'The fault line', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Matisse', role: 'Colour', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { name: 'Duchamp', role: 'The provocateur', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { name: 'Pollock', role: 'The action', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'] },
  ],
  lineage: {
    parents: [ { label: 'Neoclassical & Romantic', mode: 'art' }, { label: 'Industrial Revolution', mode: 'civ' }, { label: 'Photography', mode: 'civ' } ],
    children: [ { label: 'Contemporary', mode: 'art' }, { label: 'Conceptual art', mode: 'art' }, { label: 'Postmodernism', mode: 'civ' } ],
  },
}

// City hubs for the era "where it happened" map.
export const MODERN_MAP_HUBS = [
  { city: 'Paris', x: '46%', y: '38%', count: 7, hub: true },
  { city: 'Munich', x: '60%', y: '34%', count: 1 },
  { city: 'Milan', x: '54%', y: '50%', count: 1 },
  { city: 'Zürich', x: '52%', y: '42%', count: 1 },
  { city: 'St Petersburg', x: '78%', y: '22%', count: 1 },
  { city: 'New York', x: '14%', y: '46%', count: 2 },
  { city: 'Mexico City', x: '12%', y: '70%', count: 1 },
]

// ─────────────────────────────────────────────────────────────
// Movement — Cubism (1907–1922)
// ─────────────────────────────────────────────────────────────
export interface MovementWork {
  id: string
  year: number
  name: string
  artist: string
  place: string
  size: 's' | 'm' | 'l' | 'xl'
  blurb: string
  palette: Palette
  imageUrl?: string
}
export interface MovementArtist { id: string; name: string; role: string; years: string; palette: Palette }
export interface MovementParallel { year: number; movement: string; place: string; blurb: string }

export interface ArtMovementContent {
  id: string
  name: string
  range: string
  span: string
  era: string
  eraId: string
  accent: string
  chain: { name: string; index: number; total: number }
  hook: string
  hookLong: string
  heroImage: string
  heroCredit: string
  // Hero composition (see ArtHero / audits/art-vertical.md "Image orientation"):
  // default is a single cover image; use contain for a whole portrait/square work,
  // or heroImages (2+) for a portrait diptych. heroFocus frames a cover detail.
  heroFit?: 'cover' | 'contain'
  heroFocus?: string
  heroImages?: HeroImage[]
  stats: ArtStat[]
  factions: ArtSide[]
  works: MovementWork[]
  artists: MovementArtist[]
  parallels: MovementParallel[]
  lineage: ArtLineage
}

export const CUBISM: ArtMovementContent = {
  id: 'cubism',
  name: 'Cubism',
  range: '1907–1922',
  span: '15 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Movements of the Modern era', index: 5, total: 10 },
  hook: 'Pablo and Georges decide a face has six sides.',
  hookLong:
    'For about a decade, two painters in Paris worked so closely that they had to sign the backs of each other’s canvases just to remember whose was whose. What they did, in essence, was repeal the law of single-point perspective that had ruled European painting since 1420. The picture stopped pretending to be a window.',
  heroImage: ART_IMG.girlWithMandolin,
  heroCredit: 'Picasso, Girl with a Mandolin · Portrait of Kahnweiler · 1910 · PD-US',
  // A portrait diptych — two analytic-Cubism works side by side represent the
  // movement without cropping either (the genre-pairing pattern).
  heroImages: [
    { src: ART_IMG.girlWithMandolin, focus: '50% 14%' },
    { src: ART_IMG.kahnweiler, focus: '50% 16%' },
  ],
  stats: [
    { v: '15 yrs', k: 'Span' },
    { v: '~40', k: 'Canonical works' },
    { v: 'Paris', k: 'Centred on' },
  ],
  factions: [
    { side: 'pioneers', label: 'The pioneers', color: ART_ACCENTS.violet, members: ['Picasso', 'Braque'], detail: 'Two studios in Montmartre. Daily visits. Joint shows. They invented it together and then drifted apart in the war.' },
    { side: 'salon', label: 'The Salon Cubists', color: ART_ACCENTS.amber, members: ['Gleizes', 'Metzinger', 'Léger', 'Delaunay', 'Gris'], detail: 'A larger second wave that showed at the Salon des Indépendants. They wrote the manifestos. The pioneers didn’t join.' },
  ],
  works: [
    { id: 'demoiselles', year: 1907, name: 'Les Demoiselles d’Avignon', artist: 'Picasso', place: 'Paris', size: 'xl', blurb: 'Five women, five sets of impossible angles, masks where the faces should be. Even his friends thought he had lost it.', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], imageUrl: ART_IMG.demoiselles },
    { id: 'three-women', year: 1908, name: 'Three Women', artist: 'Picasso', place: 'Paris', size: 's', blurb: 'The hangover from Demoiselles. The faces become less savage; the geometry hardens.', palette: ['#7a5a3a', '#3a2820', '#1a1208'] },
    { id: 'horta', year: 1909, name: 'Houses on the Hill, Horta', artist: 'Picasso', place: 'Catalonia', size: 'l', blurb: 'Picasso paints a Spanish village as nesting cubes. The summer everyone agrees this is now a movement.', palette: ['#a08a4a', '#5a4a1c', '#1a1a14'] },
    { id: 'kahnweiler', year: 1910, name: 'Portrait of Daniel-Henry Kahnweiler', artist: 'Picasso', place: 'Paris', size: 'm', blurb: 'Their dealer, in shards. Analytic Cubism arrives — monochrome, angular, almost unreadable.', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { id: 'violin-jug', year: 1910, name: 'Violin and Jug', artist: 'Braque', place: 'Paris', size: 'm', blurb: 'Braque takes the still life apart. A nail in the corner of the canvas points to what was supposed to be the trompe-l’œil.', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { id: 'chair-caning', year: 1912, name: 'Still Life with Chair Caning', artist: 'Picasso', place: 'Paris', size: 'l', blurb: 'A piece of oilcloth printed with chair caning, glued to the canvas. Collage is born; painting will never be only paint again.', palette: ['#b89055', '#3a3020', '#1a1208'] },
    { id: 'cubist-years-end', year: 1914, name: 'The Cubist Years end', artist: 'Picasso & Braque', place: 'Paris', size: 'm', blurb: 'August 1914. Braque is mobilised; Picasso, a Spaniard, is not. They never paint together again.', palette: ['#3a3a4a', '#1c1c2a', '#0a0a14'] },
    { id: 'gris-bottle', year: 1916, name: 'Bottle and Glass', artist: 'Juan Gris', place: 'Paris', size: 's', blurb: 'Gris turns Cubism into a system. Tight, almost classical. The argument continues without the founders.', palette: ['#8a6b3a', '#3a2820', '#0e0805'] },
    { id: 'three-musicians', year: 1921, name: 'Three Musicians', artist: 'Picasso', place: 'Fontainebleau', size: 'l', blurb: 'Picasso revisits Cubism as a synthetic, decorative language. Flat planes, bright colours, almost a poster.', palette: ['#c8a72a', '#7a1422', '#1c0a08'] },
  ],
  artists: [
    { id: 'picasso', name: 'Picasso', role: 'Pioneer', years: '1881–1973', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { id: 'braque', name: 'Braque', role: 'Pioneer', years: '1882–1963', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { id: 'gris', name: 'Juan Gris', role: 'Synthesist', years: '1887–1927', palette: ['#8a6b3a', '#3a2820', '#0e0805'] },
    { id: 'leger', name: 'Léger', role: 'Salon cubist', years: '1881–1955', palette: ['#1c1c1c', '#a0a0a0', '#bf2f25'] },
    { id: 'delaunay', name: 'Delaunay', role: 'Orphist', years: '1885–1941', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
    { id: 'metzinger', name: 'Metzinger', role: 'Theorist', years: '1883–1956', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
  ],
  parallels: [
    { year: 1909, movement: 'Futurism', place: 'Milan', blurb: 'Marinetti publishes the Futurist Manifesto in Le Figaro.' },
    { year: 1911, movement: 'Der Blaue Reiter', place: 'Munich', blurb: 'Kandinsky, Marc, Münter form a group around colour, music and abstraction.' },
    { year: 1913, movement: 'Suprematism', place: 'St Petersburg', blurb: 'Malevich is heading toward the Black Square.' },
    { year: 1916, movement: 'Dada', place: 'Zürich', blurb: 'At the Cabaret Voltaire, a war refugee scene mocks the very idea of meaning.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'African masks', mode: 'art' }, { label: 'Post-Impressionism', mode: 'art' }, { label: 'Edwardian Paris', mode: 'civ' } ],
    children: [ { label: 'Futurism', mode: 'art' }, { label: 'Constructivism', mode: 'art' }, { label: 'Abstract art', mode: 'art' }, { label: 'Bauhaus', mode: 'art' } ],
  },
}

// Influence Ribbon tracks — artists across years, dots at works, derived for the
// movement page's signature visual. (Track = artist; axis = years 1907–1922.)
export const CUBISM_RIBBON = {
  startYear: 1907,
  endYear: 1922,
  tracks: [
    { artist: 'Picasso', color: ART_ACCENTS.violet, dots: [
      { year: 1907, canonical: true, label: 'Demoiselles', workId: 'demoiselles' },
      { year: 1909, canonical: true, label: 'Horta', workId: 'horta' },
      { year: 1910, canonical: true, label: 'Kahnweiler', workId: 'kahnweiler' },
      { year: 1912, canonical: true, label: 'Chair Caning', workId: 'chair-caning' },
      { year: 1921, canonical: true, label: 'Three Musicians', workId: 'three-musicians' },
    ] },
    { artist: 'Braque', color: ART_ACCENTS.amber, dots: [
      { year: 1908, canonical: false, label: 'L’Estaque' },
      { year: 1910, canonical: true, label: 'Violin and Jug', workId: 'violin-jug' },
      { year: 1914, canonical: false, terminal: true, label: 'Mobilised' },
    ] },
    { artist: 'Gris', color: ART_ACCENTS.green, dots: [
      { year: 1912, canonical: false, label: 'Hommage à Picasso' },
      { year: 1916, canonical: true, label: 'Bottle and Glass', workId: 'gris-bottle' },
    ] },
  ],
  // dashed influence threads between tracks (from → to, by year)
  threads: [
    { fromYear: 1907, fromTrack: 0, toYear: 1908, toTrack: 1 },
    { fromYear: 1910, fromTrack: 0, toYear: 1912, toTrack: 2 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Work — Les Demoiselles d'Avignon (1907)
// ─────────────────────────────────────────────────────────────
export interface WorkSection { id: string; eyebrow: string; dateLabel: string; title: string; blurb: string; progress: number }
export interface ProvenanceEntry { year: string; who: string; place: string; note: string; price: string | null; museum?: boolean }
export interface WorkFigure { name: string; role: string; palette: Palette }
export interface CanvasAnnotation { x: string; y: string; label: string }

export interface ArtWorkContent {
  id: string
  name: string
  shortName: string
  year: number
  artist: string
  artistId: string
  movement: string
  movementId: string
  era: string
  eraId: string
  medium: string
  dimensions: string
  location: string
  acquired: string
  accent: string
  chain: { name: string; index: number; total: number }
  hook: string
  heroImage: string
  heroCredit: string
  // Hero composition (see ArtHero / audits/art-vertical.md "Image orientation"):
  // default is a single cover image; use contain for a whole portrait/square work,
  // or heroImages (2+) for a portrait diptych. heroFocus frames a cover detail.
  heroFit?: 'cover' | 'contain'
  heroFocus?: string
  heroImages?: HeroImage[]
  // rights: drives the inline-figure treatment. PD-US for pre-1931 works.
  rights: 'pd-us' | 'in-copyright'
  stats: ArtStat[]
  sections: WorkSection[]
  provenance: ProvenanceEntry[]
  figures: WorkFigure[]
  annotations: CanvasAnnotation[]
  lineage: ArtLineage
}

export const DEMOISELLES: ArtWorkContent = {
  id: 'demoiselles',
  name: 'Les Demoiselles d’Avignon',
  shortName: 'Les Demoiselles',
  year: 1907,
  artist: 'Pablo Picasso',
  artistId: 'picasso',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '243.9 cm × 233.7 cm (96 in × 92 in)',
  location: 'Museum of Modern Art, New York',
  acquired: 'Acquired 1939',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 1, total: 9 },
  hook: 'Five women, five sets of impossible angles, masks where the faces should be.',
  heroImage: ART_IMG.demoiselles,
  heroCredit: 'MoMA · Bequest of Lillie P. Bliss · fair use',
  // The work page hero shows the WHOLE painting (≈square) — contain, never cropped.
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1907', k: 'Painted' },
    { v: '243 × 234 cm', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Winter 1906', title: 'Where this came from', blurb: 'A 25-year-old Spaniard in a tenement studio at the top of Montmartre is looking at three things he can’t stop looking at.', progress: 0.06 },
    { id: 'making', eyebrow: 'Spring – Summer 1907', dateLabel: 'May–Jul 1907', title: 'Painting it', blurb: 'Hundreds of preparatory sketches. The canvas changes radically twice. By July the five faces have become masks.', progress: 0.3 },
    { id: 'reception', eyebrow: 'Studio shock', dateLabel: 'July–Nov 1907', title: 'What his friends said', blurb: 'Matisse calls it an outrage. Braque says it makes him feel like Picasso has been drinking turpentine and eating tow.', progress: 0.52 },
    { id: 'hidden', eyebrow: 'Nine years rolled up', dateLabel: '1907–1916', title: 'The painting goes away', blurb: 'Picasso rolls it up. It is shown only once, in 1916. Most painters who go on to make Cubism never see it.', progress: 0.74 },
    { id: 'legacy', eyebrow: 'What happened next', dateLabel: '1916–today', title: 'The painting that broke the picture', blurb: 'Bought by a couturier, sold to MoMA in 1939, and slowly recognised as the canvas where modern art changed gear.', progress: 0.95 },
  ],
  // FLAG: provenance prices below are from the mockup — verify before shipping.
  provenance: [
    { year: '1907–1924', who: 'Pablo Picasso (the artist)', place: 'Bateau-Lavoir, Paris', note: 'Rolled up in the studio. Shown publicly once, briefly, at the Salon d’Antin in 1916.', price: null },
    { year: '1924', who: 'Jacques Doucet', place: 'Paris', note: 'Couturier and book collector. Buys the canvas for 25,000 francs (≈ $1,300 in 1924; about $20,000 today).', price: '25,000 ₣ (1924)' },
    { year: '1924–1929', who: 'Doucet collection', place: 'Paris', note: 'Hangs at the foot of Doucet’s staircase. Visitors complained about climbing past it.', price: null },
    { year: '1937', who: 'Galerie Seligmann', place: 'Paris', note: 'Doucet’s widow consigns the painting; the gallery takes it to New York to find an institutional buyer.', price: null },
    { year: '1939', who: 'Museum of Modern Art', place: 'New York', note: 'MoMA acquires the painting through the Lillie P. Bliss Bequest, in exchange for Degas’s Race Course at Longchamp and ≈ $24,000 cash. Equivalent to roughly $530,000 today.', price: '≈ $28,000 (1939)', museum: true },
    { year: '1939–today', who: 'Museum of Modern Art', place: 'New York', note: 'On near-continuous view. Loaned once, to the Musée Picasso in Paris (1988). Insured value not disclosed; private estimates have placed it above $1.2 billion.', price: 'never resold', museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Matisse', role: 'Rival, in shock', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { name: 'Braque', role: 'Will follow soon', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Gertrude Stein', role: 'Salonnière, patron', palette: ['#8a3a4a', '#2a1c1c', '#0a0606'] },
    { name: 'Doucet', role: 'First buyer', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { name: 'Alfred Barr', role: 'MoMA, the believer', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
  ],
  annotations: [
    { x: '18%', y: '24%', label: 'Iberian profile · the two left figures' },
    { x: '76%', y: '28%', label: 'African mask · right-most figure' },
    { x: '52%', y: '64%', label: 'Still life, pyramid form (Cézanne)' },
    { x: '38%', y: '88%', label: 'No vanishing point. Anywhere.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne’s Bathers', mode: 'art' }, { label: 'Iberian sculpture', mode: 'art' }, { label: 'African masks', mode: 'art' }, { label: 'Belle Époque Paris', mode: 'civ' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Futurism', mode: 'art' }, { label: 'Abstract art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Artist — Picasso (1881–1973)
// ─────────────────────────────────────────────────────────────
export interface ArtistPeriod { id: string; label: string; range: string; color: string; summary: string; size: 's' | 'm' | 'l' }
export interface ArtistKeyWork { year: number; name: string; period: string; hook: string }
export interface ArtistLifeMoment { year: number; label: string }

export interface ArtArtistContent {
  id: string
  name: string
  fullName: string
  born: { year: number; place: string }
  died: { year: number; place: string }
  span: string
  nationality: string
  movements: string[]
  accent: string
  chain: { name: string; index: number; total: number }
  hook: string
  hookLong: string
  heroImage: string
  heroCredit: string
  // Hero composition (see ArtHero / audits/art-vertical.md "Image orientation"):
  // default is a single cover image; use contain for a whole portrait/square work,
  // or heroImages (2+) for a portrait diptych. heroFocus frames a cover detail.
  heroFit?: 'cover' | 'contain'
  heroFocus?: string
  heroImages?: HeroImage[]
  stats: ArtStat[]
  periods: ArtistPeriod[]
  keyWorks: ArtistKeyWork[]
  life: ArtistLifeMoment[]
  lineage: ArtLineage
}

export const PICASSO: ArtArtistContent = {
  id: 'picasso',
  name: 'Pablo Picasso',
  fullName: 'Pablo Ruiz Picasso',
  born: { year: 1881, place: 'Málaga, Spain' },
  died: { year: 1973, place: 'Mougins, France' },
  span: '92 years',
  nationality: 'Spanish (worked in France)',
  movements: ['Cubism', 'Surrealism (occasional)', 'Neoclassicism', 'Symbolism (early)'],
  accent: ART_ACCENTS.violet,
  chain: { name: 'Cubist artists', index: 1, total: 6 },
  hook: 'The most famous artist of the twentieth century, and the one who decided what the rest of it would have to argue with.',
  hookLong:
    'Picasso made roughly 50,000 works in his lifetime — paintings, drawings, sculptures, ceramics, prints, costumes. He invented Cubism with Braque, then walked away from it. He painted in classical styles in the 1920s, made the most famous antiwar painting of the century in 1937, and was a millionaire by forty. He outlived most of his contemporaries and several of his children.',
  heroImage: ART_IMG.picassoPhoto,
  heroCredit: 'Photograph · Wikimedia Commons',
  heroFocus: '50% 22%',
  stats: [
    { v: '1881–1973', k: 'Lived' },
    { v: '~50,000', k: 'Works (lifetime)' },
    { v: '9', k: 'Periods (canonical)' },
  ],
  periods: [
    { id: 'blue', label: 'Blue Period', range: '1901–1904', color: ART_ACCENTS.blue, summary: 'Sombre blues and greens. Painted in poverty.', size: 's' },
    { id: 'rose', label: 'Rose Period', range: '1904–1906', color: ART_ACCENTS.amber, summary: 'Pinks, oranges, circus performers, harlequins.', size: 's' },
    { id: 'african', label: 'African / Proto-Cubist', range: '1906–1909', color: ART_ACCENTS.rust, summary: 'Iberian sculpture, then African masks. Demoiselles falls in this period.', size: 'm' },
    { id: 'analytic', label: 'Analytic Cubism', range: '1909–1912', color: ART_ACCENTS.violet, summary: 'With Braque, in Paris. Almost monochrome. Almost unreadable.', size: 'l' },
    { id: 'synthetic', label: 'Synthetic Cubism', range: '1912–1919', color: ART_ACCENTS.green, summary: 'Collage, brighter palette, sometimes literal scraps of newspaper.', size: 'm' },
    { id: 'neo', label: 'Neoclassical', range: '1920–1929', color: ART_ACCENTS.amber, summary: 'A return to classical figures, large women, Mediterranean light.', size: 'm' },
    { id: 'sur', label: 'Surrealist tendency', range: '1930–1936', color: ART_ACCENTS.violet, summary: 'Minotaurs, biomorphic distortions, sex and violence.', size: 's' },
    { id: 'war', label: 'War Years', range: '1937–1945', color: ART_ACCENTS.rust, summary: 'Guernica. Then the German occupation of Paris, in which he stayed.', size: 'l' },
    { id: 'late', label: 'Late Period', range: '1946–1973', color: ART_ACCENTS.blue, summary: 'Ceramics, painted variations on the old masters, the south of France.', size: 'l' },
  ],
  keyWorks: [
    { year: 1903, name: 'La Vie', period: 'blue', hook: 'A blue allegory painted after his friend Casagemas’s suicide.' },
    { year: 1905, name: 'Family of Saltimbanques', period: 'rose', hook: 'A circus family in pink dust. Picasso buys his first new clothes.' },
    { year: 1907, name: 'Les Demoiselles d’Avignon', period: 'african', hook: 'The painting nobody liked. The one that mattered most.' },
    { year: 1910, name: 'Portrait of Kahnweiler', period: 'analytic', hook: 'Their dealer, in shards. Cubism at its most austere.' },
    { year: 1912, name: 'Still Life with Chair Caning', period: 'synthetic', hook: 'A scrap of oilcloth. The invention of collage.' },
    { year: 1937, name: 'Guernica', period: 'war', hook: 'A bombed Basque town, in black and white, 25 feet across.' },
    { year: 1955, name: 'Las Meninas (series)', period: 'late', hook: 'Fifty-eight variations on Velázquez, one summer.' },
  ],
  life: [
    { year: 1881, label: 'Born Málaga' },
    { year: 1895, label: 'Family moves to Barcelona' },
    { year: 1900, label: 'First trip to Paris' },
    { year: 1904, label: 'Settles in Paris (Bateau-Lavoir)' },
    { year: 1907, label: 'Demoiselles' },
    { year: 1910, label: 'Analytic Cubism (with Braque)' },
    { year: 1914, label: 'Braque mobilised; Cubism partnership ends' },
    { year: 1917, label: 'Designs for Ballets Russes; marries Olga' },
    { year: 1937, label: 'Guernica' },
    { year: 1944, label: 'Joins the French Communist Party' },
    { year: 1961, label: 'Marries Jacqueline Roque' },
    { year: 1973, label: 'Dies at Mougins' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'Iberian sculpture', mode: 'art' }, { label: 'Belle Époque Paris', mode: 'civ' } ],
    children: [ { label: 'Cubism', mode: 'art' }, { label: 'Surrealism', mode: 'art' }, { label: 'Abstract Expressionism', mode: 'art' } ],
  },
}

// Lookups for routing (only authored entities resolve; others ⇒ coming-soon).
export const ART_ERA_CONTENT: Record<string, ArtEraContent> = { mod: MODERN_ERA }
export const ART_MOVEMENT_CONTENT: Record<string, ArtMovementContent> = { cubism: CUBISM }
export const ART_WORK_CONTENT: Record<string, ArtWorkContent> = { demoiselles: DEMOISELLES }
export const ART_ARTIST_CONTENT: Record<string, ArtArtistContent> = { picasso: PICASSO }
