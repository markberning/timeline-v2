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
  // SELF-HOSTED: the en scan carries a pale canvas/frame border (a gray band along
  // the top, thin edges elsewhere); trimmed so the painting fills the frame. 1907,
  // US-PD (pre-1931). Source: en Les_Demoiselles_d'Avignon, cropped to the canvas.
  demoiselles: '/art/demoiselles.jpg',
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
  // ── Era + movement narrative figures (resolved + load-verified 2026-05-23) ──
  // COMMONS (free worldwide)
  manetOlympia: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/1280px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg',
  manetDejeuner: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg',
  courbetStudio: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Courbet_LAtelier_du_peintre.jpg/1280px-Courbet_LAtelier_du_peintre.jpg',
  // The institution the whole era revolts against: the packed floor-to-ceiling
  // Salon hang (Martini after Ramberg, 1787 — PD worldwide; the hang barely
  // changed by 1850) and the smooth academic nude it rewarded (Cabanel, 1863).
  // SELF-HOSTED: the Met scan sits on a dark mount and carries an engraved caption
  // strip; both were trimmed so the artwork FILLS a card frame (cover-crop) rather
  // than showing border/caption. Source: commons MM43349, cropped to the scene.
  salonHang: '/art/salon-1787.jpg',
  cabanelVenus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg/1280px-Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg',
  // Portrait-orientation works, for the orientation-aware card prototype (these
  // sit image-LEFT / text-right; landscape/square works sit image-on-top).
  matisseHat: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Matisse-Woman-with-a-Hat.jpg/960px-Matisse-Woman-with-a-Hat.jpg',
  seuratGrandeJatte: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg',
  gauguinVision: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/La_vision_apr%C3%A8s_le_sermon_%28Paul_Gauguin%29.jpg/1280px-La_vision_apr%C3%A8s_le_sermon_%28Paul_Gauguin%29.jpg',
  vanGoghSelf: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
  monetCathedral: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Claude_Monet%2C_Rouen_Cathedral%2C_West_Fa%C3%A7ade%2C_Sunlight%2C_1894%2C_NGA_46654.jpg/1280px-Claude_Monet%2C_Rouen_Cathedral%2C_West_Fa%C3%A7ade%2C_Sunlight%2C_1894%2C_NGA_46654.jpg',
  apollinaire: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Guillaume_Apollinaire_1914.jpg',
  matisseDance: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Henri_Matisse%2C_1909%2C_La_danse_%28I%29%2C_Museum_of_Modern_Art.jpg/1280px-Henri_Matisse%2C_1909%2C_La_danse_%28I%29%2C_Museum_of_Modern_Art.jpg',
  boccioniCity: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_City_Rises_by_Umberto_Boccioni_1910.jpg/1280px-The_City_Rises_by_Umberto_Boccioni_1910.jpg',
  duchampFountain: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg/1280px-Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg',
  grisBreakfast: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/1914_Gris_Le_Petit_D%C3%A9jeuner.jpg',
  // EN-tier (US public domain, pre-1931 — inline OK)
  braqueFruitDish: 'https://upload.wikimedia.org/wikipedia/en/6/63/Braque_fruitdish_glass.jpg',
  picassoHorta: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pablo_Picasso%2C_1909%2C_Maisons_%C3%A0_Horta_%28Houses_on_the_Hill%2C_Horta_de_Ebro%29%2C_oil_on_canvas%2C_65_x_81_cm%2C_private_collection.jpg/1280px-Pablo_Picasso%2C_1909%2C_Maisons_%C3%A0_Horta_%28Houses_on_the_Hill%2C_Horta_de_Ebro%29%2C_oil_on_canvas%2C_65_x_81_cm%2C_private_collection.jpg',
  braqueViolinJug: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Georges_Braque%2C_1909-10%2C_Pitcher_and_Violin%2C_oil_on_canvas%2C_116.8_x_73.2_cm%2C_Kunstmuseum_Basel.jpg',
  metzingerTea: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Jean_Metzinger%2C_Le_go%C3%BBter%2C_Tea_Time%2C_1911%2C_75.9_x_70.2_cm%2C_Philadelphia_Museum_of_Art.jpg/1280px-Jean_Metzinger%2C_Le_go%C3%BBter%2C_Tea_Time%2C_1911%2C_75.9_x_70.2_cm%2C_Philadelphia_Museum_of_Art.jpg',
  picassoThreeMusicians: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Pablo_Picasso%2C_1921%2C_Nous_autres_musiciens_%28Three_Musicians%29%2C_oil_on_canvas%2C_204.5_x_188.3_cm%2C_Philadelphia_Museum_of_Art.jpg/1280px-Pablo_Picasso%2C_1921%2C_Nous_autres_musiciens_%28Three_Musicians%29%2C_oil_on_canvas%2C_204.5_x_188.3_cm%2C_Philadelphia_Museum_of_Art.jpg',
  // RESTRICTED — Guernica (1937), NOT US public domain → degraded reference only
  guernica: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
  // SELF-HOSTED — Still Life with Chair Caning (1912) is US public domain (pre-1931)
  // but Wikimedia hosts NO copy of it (Commons can't until France-PD in 2044; no en
  // fair-use file exists). A faithful repro is served from public/art/ instead, the
  // one art figure not on Wikimedia. Subject + tier confirmed by eye (born-verified).
  chairCaning: '/art/chair-caning.jpg',
  // More self-hosted works (US-PD pre-1931; Gris d.1927 = PD worldwide but the Commons
  // copy is tiny, so a higher-res faithful repro is served locally). Verified by eye.
  threeWomen: '/art/three-women.jpg',
  portuguese: '/art/the-portuguese.jpg',
  grisLunch: '/art/gris-breakfast.jpg',
  // ── Realism lineage chips (born-verified 2026-05-25; subjects eyeballed) ──
  // Representative PD works for the "grew out of / led to" nodes.
  rev1848: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Philippoteaux_-_Lamartine_in_front_of_the_Town_Hall_of_Paris_rejects_the_red_flag.jpg/500px-Philippoteaux_-_Lamartine_in_front_of_the_Town_Hall_of_Paris_rejects_the_red_flag.jpg',
  vermeerMilkmaid: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/500px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg',
  daguerreBoulevard: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Boulevard_du_Temple_by_Daguerre.jpg/500px-Boulevard_du_Temple_by_Daguerre.jpg',
  rousseauOak: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Th%C3%A9odore_Rousseau_-_The_Large_Oak_Tree%2C_Forest_of_Fontainebleau.jpg/500px-Th%C3%A9odore_Rousseau_-_The_Large_Oak_Tree%2C_Forest_of_Fontainebleau.jpg',
  bastienHaymaking: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Jules_Bastien-Lepage_-_Hay_making_-_Google_Art_Project.jpg/500px-Jules_Bastien-Lepage_-_Hay_making_-_Google_Art_Project.jpg',
  fildesCasualWard: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Applicants_for_Admission_to_a_Casual_Ward.jpg/500px-Applicants_for_Admission_to_a_Casual_Ward.jpg',
  bellowsCliffDwellers: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/George_Bellows_-_Cliff_Dwellers_%281913%29.jpg/500px-George_Bellows_-_Cliff_Dwellers_%281913%29.jpg',

  // ── Realism movement figures (born-verified 2026-05-25; subjects eyeballed) ──
  // COMMONS (free worldwide; every artist died well before 1931).
  courbetBurial: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg/1280px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg',
  milletGleaners: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg/1280px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project.jpg',
  milletAngelus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg/1280px-Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg',
  milletSower: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Jean-Fran%C3%A7ois_Millet_-_The_Sower_-_Google_Art_Project.jpg/1280px-Jean-Fran%C3%A7ois_Millet_-_The_Sower_-_Google_Art_Project.jpg',
  daumierCarriage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/The_Third-Class_Carriage_MET_DT2142.jpg/1280px-The_Third-Class_Carriage_MET_DT2142.jpg',
  bonheurHorseFair: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/The_Horse_Fair_MET_DT44.jpg/1280px-The_Horse_Fair_MET_DT44.jpg',
  // SELF-HOSTED: Daumier's Gargantua lithograph (1831, PD worldwide), trimmed off
  // its cream paper margin + the engraved title strip so the scene fills the frame.
  daumierGargantua: '/art/gargantua.jpg',
  // SELF-HOSTED: Courbet's The Stone Breakers (1849, PD worldwide — Courbet d.1877).
  // The ORIGINAL was destroyed in the bombing of Dresden, Feb 1945; shown here as a
  // desaturated record of the lost work (an archival stand-in, not the painting).
  courbetStoneBreakers: '/art/stone-breakers.jpg',
  // ── Artist headshots (born-verified portraits/self-portraits, subjects
  // eyeballed 2026-05-25; all PD on Commons). Picasso uses picassoPhoto above. ──
  braquePhoto: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Georges_Braque%2C_1908%2C_photograph_published_in_Gelett_Burgess%2C_The_Wild_Men_of_Paris%2C_Architectural_Record%2C_May_1910.jpg',
  grisPhoto: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Juan_Gris_-_1912_-_Self-portrait.jpg',
  delaunayPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Robert_Delaunay_-_autoportrait.jpg/500px-Robert_Delaunay_-_autoportrait.jpg',
  metzingerPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Jean_Metzinger%2C_portrait_photograph%2C_published_in_Les_Peintres_Cubistes%2C_1913.jpg/500px-Jean_Metzinger%2C_portrait_photograph%2C_published_in_Les_Peintres_Cubistes%2C_1913.jpg',
  courbetPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gustave_Courbet%2C_photograph_Atelier_Nadar%2C_c._1860s.jpg/500px-Gustave_Courbet%2C_photograph_Atelier_Nadar%2C_c._1860s.jpg',
  milletPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Jean-Fran%C3%A7ois_Millet_by_Atelier_Nadar_-_Original.jpg/500px-Jean-Fran%C3%A7ois_Millet_by_Atelier_Nadar_-_Original.jpg',
  daumierPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Honor%C3%A9_Daumier_c1850_-_crop.jpg/500px-Honor%C3%A9_Daumier_c1850_-_crop.jpg',
  bonheurPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_photograph_of_Rosa_Bonheur%2C_private_collection.JPG/500px-Anonymous_photograph_of_Rosa_Bonheur%2C_private_collection.JPG',
  corotPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Camille_Corot_by_%C3%89tienne_Carjat.jpg/500px-Camille_Corot_by_%C3%89tienne_Carjat.jpg',
  rousseauPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Theodore_Rousseau.jpg/500px-Theodore_Rousseau.jpg',
  // Cubism influence-flow lineage nodes (Commons, load-verified 2026-05-24)
  fangMask: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/0623b_Asymetrical_mask%2C_Fang%2C_Gabon_%285539335532%29.jpg/960px-0623b_Asymetrical_mask%2C_Fang%2C_Gabon_%285539335532%29.jpg',
  pissarroBoulevard: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Camille_Pissarro_-_Boulevard_Montmartre%2C_Spring_-_Google_Art_Project.jpg/960px-Camille_Pissarro_-_Boulevard_Montmartre%2C_Spring_-_Google_Art_Project.jpg',
  lissitzkyWedge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Beat_the_Whites_with_the_Red_Wedge.jpg/960px-Beat_the_Whites_with_the_Red_Wedge.jpg',
  kandinskyComp7: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vassily_Kandinsky%2C_1913_-_Composition_7.jpg/960px-Vassily_Kandinsky%2C_1913_-_Composition_7.jpg',
  bauhausDessau: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Dessau_Bauhaus-Geb%C3%A4ude_asv2024-06_img1.jpg/960px-Dessau_Bauhaus-Geb%C3%A4ude_asv2024-06_img1.jpg',
} as const

export interface ArtStat { v: string; k: string }
export interface ArtSide { side?: string; label: string; color: string; motto?: string; detail?: string; members?: string[] }
export interface ArtLineageChip { label: string; mode: 'art' | 'civ' | 'war'; img?: string; palette?: Palette; note?: string }
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
  imageAspect?: string // the work's true w/h, so the xl panel fills edge-to-edge with ~no crop
  portrait?: boolean // tall work → card renders image-LEFT / text-right (else image-on-top)
  credit?: string // art credit shown bold at the end of the card when imageUrl is set (artist · current location)
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
  // The era's own long-form narrative: chaptered prose entered via the "Read the
  // full story" button under the hook. The prose itself lives in the reader
  // (modern-narratives.tsx); this is only the chapter metadata.
  sections: WorkSection[]
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
    { id: 'real', name: 'Realism', range: '1848–1870', accent: ART_ACCENTS.amber, size: 'm', hook: 'Paint your own century — laborers and peasants, given the wall the Salon kept for gods.', palette: ['#8a7a4a', '#4a3c22', '#14100a'], imageUrl: ART_IMG.milletGleaners, credit: 'Millet, The Gleaners, 1857 · Musée d’Orsay, Paris' },
    { id: 'imp', name: 'Impressionism', range: '1860s–1886', accent: ART_ACCENTS.blue, size: 'l', hook: 'Painting the LIGHT instead of the thing. Outdoors. Quick.', palette: ['#3a6a8a', '#c8c050', '#1c2a30'], imageUrl: ART_IMG.impressionSunrise, credit: 'Monet, Impression, Sunrise · Musée Marmottan Monet, Paris' },
    { id: 'post', name: 'Post-Impressionism', range: '1886–1905', accent: ART_ACCENTS.green, size: 'm', hook: 'Putting the structure back. Cézanne in Aix, Van Gogh in Arles, Gauguin in Tahiti.', palette: ['#5a7042', '#8a7848', '#1c1a12'], imageUrl: ART_IMG.vanGoghSelf, portrait: true, credit: 'Van Gogh, Self-Portrait, 1889 · Musée d’Orsay, Paris' },
    { id: 'fauv', name: 'Fauvism', range: '1905–1908', accent: ART_ACCENTS.rust, size: 's', hook: 'Color off the leash. Matisse, three years, four canvases, done.', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'], imageUrl: ART_IMG.matisseHat, portrait: true, credit: 'Matisse, Woman with a Hat, 1905 · SFMOMA, San Francisco' },
    { id: 'cubism', name: 'Cubism', range: '1907–1922', accent: ART_ACCENTS.violet, size: 'xl', hook: 'A face has six sides now. A guitar shows you its strings and its back.', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], imageUrl: ART_IMG.demoiselles, imageAspect: '4500 / 4661', credit: 'Picasso, Les Demoiselles d’Avignon · MoMA, New York' },
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
    { name: 'Matisse', role: 'Color', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { name: 'Duchamp', role: 'The provocateur', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
    { name: 'Pollock', role: 'The action', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'] },
  ],
  lineage: {
    parents: [ { label: 'Neoclassical & Romantic', mode: 'art' }, { label: 'Industrial Revolution', mode: 'civ' }, { label: 'Photography', mode: 'civ' } ],
    children: [ { label: 'Contemporary', mode: 'art' }, { label: 'Conceptual art', mode: 'art' }, { label: 'Postmodernism', mode: 'civ' } ],
  },
  sections: [
    { id: 'land', eyebrow: 'Lay of the land', dateLabel: 'c. 1850', title: 'The world before the revolt', blurb: 'One ladder, owned by the State — and the modern world quietly loading the gun to kick it over.', progress: 0 },
    { id: 'salon', eyebrow: 'The setup', dateLabel: '1850–1870', title: 'The Salon and its enemies', blurb: 'Who gets to decide what a painting is for — and the painters who stopped asking permission.', progress: 1 / 7 },
    { id: 'light', eyebrow: 'Impressionism', dateLabel: '1860s–1886', title: 'Painting the light', blurb: 'A handful of friends quit painting the thing and start painting the light falling on it.', progress: 2 / 7 },
    { id: 'structure', eyebrow: 'Post-Impressionism', dateLabel: '1886–1905', title: 'Putting the structure back', blurb: 'Cézanne, Van Gogh and Gauguin decide light was not enough, and go looking for what holds a picture up.', progress: 3 / 7 },
    { id: 'break', eyebrow: 'Fauvism & Cubism', dateLabel: '1905–1914', title: 'Breaking the picture', blurb: 'First color comes off the leash, then perspective itself is repealed. The window shatters.', progress: 4 / 7 },
    { id: 'manifesto', eyebrow: 'The avant-gardes', dateLabel: '1909–1924', title: 'Manifestos and machines', blurb: 'Futurists worship the motorcar; Dada answers the trenches with a urinal. Art picks sides.', progress: 5 / 7 },
    { id: 'unconscious', eyebrow: 'Surrealism', dateLabel: '1924–1940', title: 'The unconscious gets a paintbrush', blurb: 'Between two wars, the dream becomes a subject and Freud gets a studio.', progress: 6 / 7 },
    { id: 'newyork', eyebrow: 'The center moves', dateLabel: '1940–1970', title: 'The center moves to New York', blurb: 'War empties Europe of its painters. America inherits modern art and makes it enormous, then sells it back as soup cans.', progress: 1 },
  ],
}

// City hubs for the era "where it happened" map. Coordinates are SVG viewBox
// units (0–340 wide, 0–224 tall — a schematic, not true geography), with the
// Atlantic divider at x≈120. Each hub carries the movement(s) that happened
// there; the two `hub` cities (Paris, then New York) are the era's centers of
// gravity, joined on the map by the c.1940 migration arc.
export interface ModernHub {
  city: string
  x: number
  y: number
  hub?: boolean
  movements: string[]
  movLines?: string[] // explicit label line-wrap for the multi-movement hubs
  nameAnchor?: 'start' | 'middle' | 'end'
  nameDx?: number // city-name horizontal nudge (to dodge the migration arc)
  nameDy?: number // city-name offset above the dot
  movAnchor?: 'start' | 'middle' | 'end' // movement labels can align differently to the name
  movDy?: number // movement-label offset below the dot
}
// Every label reads "● City" — dot, then the city name on the same line (name to
// the right). Movements sit one line below. Coordinates are tuned so the right-
// hand names don't run off the 340-wide canvas or into a neighbor.
export const MODERN_MAP_HUBS: ModernHub[] = [
  { city: 'New York', x: 68, y: 120, hub: true, movements: ['Abstract Expressionism', 'Pop Art'], movLines: ['Abstract Expressionism', 'Pop Art'], nameAnchor: 'start', nameDx: 8, nameDy: 3, movAnchor: 'middle', movDy: 17 },
  { city: 'Mexico City', x: 52, y: 216, movements: ['Muralism'], nameAnchor: 'start', nameDx: 7, nameDy: 3, movAnchor: 'middle', movDy: 14 },
  { city: 'Paris', x: 170, y: 122, hub: true, movements: ['Impressionism', 'Cubism', 'Fauvism', 'Surrealism'], movLines: ['Impressionism · Cubism', 'Fauvism · Surrealism'], nameAnchor: 'start', nameDx: 8, nameDy: 3, movAnchor: 'middle', movDy: 16 },
  { city: 'Zürich', x: 208, y: 162, movements: ['Dada'], nameAnchor: 'start', nameDx: 7, nameDy: 3, movAnchor: 'middle', movDy: 14 },
  { city: 'Milan', x: 215, y: 210, movements: ['Futurism'], nameAnchor: 'start', nameDx: 7, nameDy: 3, movAnchor: 'middle', movDy: 14 },
  { city: 'Munich', x: 250, y: 104, movements: ['Expressionism'], nameAnchor: 'start', nameDx: 7, nameDy: 3, movAnchor: 'middle', movDy: 14 },
  { city: 'St Petersburg', x: 265, y: 52, movements: ['Suprematism'], nameAnchor: 'start', nameDx: 7, nameDy: 3, movAnchor: 'middle', movDy: 14 },
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
  credit?: string // art credit shown bold at the end of the card when imageUrl is set (artist · current location)
}
export interface MovementArtist { id: string; name: string; role: string; years: string; palette: Palette; photo?: string }
export interface MovementParallel { year: number; movement: string; place: string; blurb: string }
// A canonical work in the movement's full checklist (the count behind the
// "Canonical works" stat). Name · artist · year only — no descriptions. `wiki`
// is a born-verified link to the work's OWN Wikipedia article, set only when one
// exists (no artist-page fallbacks). `img` is a born-verified thumbnail of the
// work (US-PD; all canon works pre-1931), tapped to open the lightbox.
export interface CanonWork { year: number; name: string; artist: string; wiki?: string; img?: string; nsfw?: boolean }

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
  // One-line italic summary under the influence-flow diagram (what fed in → what
  // it handed on). Falls back to nothing when omitted.
  influenceSummary?: string
  // The full canonical-works checklist (the count behind the "Canonical works"
  // stat). Browsable as a plain list on the movement page; no descriptions.
  canon?: CanonWork[]
  // The movement's own long-form narrative (chaptered prose). Prose lives in the
  // reader (movement-narratives.tsx); this is the chapter metadata only.
  sections: WorkSection[]
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
  heroCredit: 'Picasso · Girl with a Mandolin (MoMA) · Portrait of Kahnweiler (Art Institute of Chicago) · 1910',
  // A portrait diptych — two analytic-Cubism works side by side represent the
  // movement without cropping either (the genre-pairing pattern).
  heroImages: [
    { src: ART_IMG.girlWithMandolin, focus: '50% 14%' },
    { src: ART_IMG.kahnweiler, focus: '50% 16%' },
  ],
  stats: [
    { v: '15 yrs', k: 'Span' },
    { v: '30', k: 'Canonical works' },
    { v: 'Paris', k: 'Centered on' },
  ],
  factions: [
    { side: 'pioneers', label: 'The pioneers', color: ART_ACCENTS.violet, members: ['Picasso', 'Braque'], detail: 'Two studios in Montmartre. Daily visits. Joint shows. They invented it together and then drifted apart in the war.' },
    { side: 'salon', label: 'The Salon Cubists', color: ART_ACCENTS.amber, members: ['Gleizes', 'Metzinger', 'Léger', 'Delaunay', 'Gris'], detail: 'A larger second wave that showed at the Salon des Indépendants. They wrote the manifestos. The pioneers didn’t join.' },
  ],
  works: [
    { id: 'demoiselles', year: 1907, name: 'Les Demoiselles d’Avignon', artist: 'Picasso', place: 'Paris', size: 'xl', blurb: 'Five women, five sets of impossible angles, masks where the faces should be. Even his friends thought he had lost it.', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], imageUrl: ART_IMG.demoiselles, credit: 'Picasso, Les Demoiselles d’Avignon · MoMA, New York' },
    { id: 'three-women', year: 1908, name: 'Three Women', artist: 'Picasso', place: 'Paris', size: 'm', blurb: 'The morning after the Demoiselles. The faces calm into masks; the bodies harden into carved, rust-red blocks.', palette: ['#a8482a', '#5a2418', '#1a0c08'], imageUrl: ART_IMG.threeWomen, credit: 'Picasso, Three Women, 1908 · Hermitage Museum, St Petersburg' },
    { id: 'horta', year: 1909, name: 'Houses on the Hill, Horta', artist: 'Picasso', place: 'Catalonia', size: 'l', blurb: 'Picasso paints a Spanish village as nesting cubes. The summer everyone agrees this is now a movement.', palette: ['#a08a4a', '#5a4a1c', '#1a1a14'], imageUrl: ART_IMG.picassoHorta, credit: 'Picasso, Houses on the Hill, Horta de Ebro · Museum Berggruen, Berlin' },
    { id: 'kahnweiler', year: 1910, name: 'Portrait of Daniel-Henry Kahnweiler', artist: 'Picasso', place: 'Paris', size: 'm', blurb: 'Their dealer, in shards. Analytic Cubism arrives — monochrome, angular, almost unreadable.', palette: ['#5a4a3a', '#2a221c', '#0a0606'], imageUrl: ART_IMG.kahnweiler, credit: 'Picasso, Portrait of Kahnweiler · Art Institute of Chicago' },
    { id: 'violin-jug', year: 1910, name: 'Violin and Jug', artist: 'Braque', place: 'Paris', size: 'm', blurb: 'Braque takes the still life apart. A nail in the corner of the canvas points to what was supposed to be the trompe-l’œil.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.braqueViolinJug, credit: 'Braque, Violin and Jug · Kunstmuseum Basel' },
    { id: 'chair-caning', year: 1912, name: 'Still Life with Chair Caning', artist: 'Picasso', place: 'Paris', size: 'l', blurb: 'A piece of oilcloth printed with chair caning, glued to the canvas. Collage is born; painting will never be only paint again.', palette: ['#b89055', '#3a3020', '#1a1208'], imageUrl: ART_IMG.chairCaning, credit: 'Picasso, Still Life with Chair Caning · Musée Picasso, Paris' },
    { id: 'the-portuguese', year: 1911, name: 'The Portuguese', artist: 'Braque', place: 'Paris', size: 'm', blurb: 'Braque stencils letters straight onto the canvas — the first time type sits on the surface as pure form, and the hinge toward collage.', palette: ['#9a8458', '#4a3f28', '#15110a'], imageUrl: ART_IMG.portuguese, credit: 'Braque, The Portuguese, 1911 · Kunstmuseum Basel' },
    { id: 'gris-breakfast', year: 1914, name: 'Breakfast', artist: 'Juan Gris', place: 'Paris', size: 'm', blurb: 'Gris turns Cubism into a system — pasted wood-grain paper, a torn newspaper, his own name hidden in the headline.', palette: ['#3a6a7a', '#8a6b3a', '#1c2a2e'], imageUrl: ART_IMG.grisLunch, credit: 'Gris, Breakfast (Le Petit Déjeuner), 1914 · MoMA, New York' },
    { id: 'three-musicians', year: 1921, name: 'Three Musicians', artist: 'Picasso', place: 'Fontainebleau', size: 'l', blurb: 'Picasso revisits Cubism as a synthetic, decorative language. Flat planes, bright colors, almost a poster.', palette: ['#c8a72a', '#7a1422', '#1c0a08'], imageUrl: ART_IMG.picassoThreeMusicians, credit: 'Picasso, Three Musicians, 1921 · Philadelphia Museum of Art' },
  ],
  artists: [
    { id: 'picasso', name: 'Picasso', role: 'Pioneer', years: '1881–1973', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], photo: ART_IMG.picassoPhoto },
    { id: 'braque', name: 'Braque', role: 'Pioneer', years: '1882–1963', palette: ['#7a6a4a', '#3a3020', '#100c08'], photo: ART_IMG.braquePhoto },
    { id: 'gris', name: 'Juan Gris', role: 'Synthesist', years: '1887–1927', palette: ['#8a6b3a', '#3a2820', '#0e0805'], photo: ART_IMG.grisPhoto },
    { id: 'leger', name: 'Léger', role: 'Salon cubist', years: '1881–1955', palette: ['#1c1c1c', '#a0a0a0', '#bf2f25'] },
    { id: 'delaunay', name: 'Delaunay', role: 'Orphist', years: '1885–1941', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'], photo: ART_IMG.delaunayPhoto },
    { id: 'metzinger', name: 'Metzinger', role: 'Theorist', years: '1883–1956', palette: ['#5a4a3a', '#2a221c', '#0a0606'], photo: ART_IMG.metzingerPhoto },
  ],
  parallels: [
    { year: 1909, movement: 'Futurism', place: 'Milan', blurb: 'Marinetti publishes the Futurist Manifesto in Le Figaro.' },
    { year: 1911, movement: 'Der Blaue Reiter', place: 'Munich', blurb: 'Kandinsky, Marc, Münter form a group around color, music and abstraction.' },
    { year: 1913, movement: 'Suprematism', place: 'St Petersburg', blurb: 'Malevich is heading toward the Black Square.' },
    { year: 1916, movement: 'Dada', place: 'Zürich', blurb: 'At the Cabaret Voltaire, a war refugee scene mocks the very idea of meaning.' },
  ],
  lineage: {
    parents: [
      { label: 'Cézanne', mode: 'art', img: ART_IMG.cezanneBathers, palette: ['#5a7042', '#8a7848', '#1c1a12'], note: 'gave: form built from faceted planes' },
      { label: 'African masks', mode: 'art', img: ART_IMG.fangMask, palette: ['#6b5034', '#3a2820', '#100c08'], note: 'gave: flat, frontal geometry' },
      { label: 'Post-Impressionism', mode: 'art', img: ART_IMG.seuratGrandeJatte, palette: ['#3a6a4a', '#c8b84a', '#1c2a18'], note: 'gave: structure over appearance' },
      { label: 'Edwardian Paris', mode: 'civ', img: ART_IMG.pissarroBoulevard, palette: ['#3a4a6a', '#2a3048', '#0e1422'], note: 'gave: dealers, rivals, an audience' },
    ],
    children: [
      { label: 'Futurism', mode: 'art', img: ART_IMG.boccioniCity, palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], note: 'took: fractured planes, set in motion' },
      { label: 'Constructivism', mode: 'art', img: ART_IMG.lissitzkyWedge, palette: ['#a83232', '#1c1c1c', '#d6cf3f'], note: 'took: geometry as structure' },
      { label: 'Abstract art', mode: 'art', img: ART_IMG.kandinskyComp7, palette: ['#1d4ed8', '#d6cf3f', '#bf2f25'], note: 'took: leaving the subject behind' },
      { label: 'Bauhaus', mode: 'art', img: ART_IMG.bauhausDessau, palette: ['#1c1c1c', '#bf2f25', '#d6cf3f'], note: 'took: pure geometry, into design' },
    ],
  },
  influenceSummary: 'Cubism took Cézanne’s faceted space and the flat planes of African masks, broke the single-viewpoint window once and for all, and handed that break on to nearly every abstract movement that followed.',
  canon: [
    { year: 1907, name: 'Les Demoiselles d’Avignon', artist: 'Picasso', wiki: "Les Demoiselles d'Avignon", img: ART_IMG.demoiselles },
    { year: 1908, name: 'Houses at L’Estaque', artist: 'Braque', wiki: "Houses at l'Estaque", img: ART_IMG.braqueEstaque },
    { year: 1908, name: 'Three Women', artist: 'Picasso', img: ART_IMG.threeWomen },
    { year: 1909, name: 'Houses on the Hill, Horta de Ebro', artist: 'Picasso', img: ART_IMG.picassoHorta },
    { year: 1910, name: 'Girl with a Mandolin (Fanny Tellier)', artist: 'Picasso', wiki: "Girl with a Mandolin", img: ART_IMG.girlWithMandolin },
    { year: 1910, name: 'Portrait of Daniel-Henry Kahnweiler', artist: 'Picasso', wiki: "Daniel-Henry Kahnweiler (Picasso)", img: ART_IMG.kahnweiler },
    { year: 1910, name: 'Violin and Candlestick', artist: 'Braque', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Violin_and_Candlestick.jpg/500px-Violin_and_Candlestick.jpg' },
    { year: 1910, name: 'Violin and Jug', artist: 'Braque', wiki: "Pitcher and Violin", img: ART_IMG.braqueViolinJug },
    { year: 1911, name: 'The Portuguese', artist: 'Braque', img: ART_IMG.portuguese },
    { year: 1911, name: 'The Accordionist', artist: 'Picasso', wiki: 'The Accordionist', img: 'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Accordionist_by_Picasso.jpg' },
    { year: 1911, name: 'Le Goûter (Tea Time)', artist: 'Metzinger', wiki: "Tea Time (Metzinger)", img: ART_IMG.metzingerTea },
    { year: 1911, name: 'The Eiffel Tower', artist: 'Delaunay', wiki: "Eiffel Tower (Delaunay series)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Robert_Delaunay_-_Eiffel_Tower_-_1911_-_Solomon_R._Guggenheim_Museum.jpg/500px-Robert_Delaunay_-_Eiffel_Tower_-_1911_-_Solomon_R._Guggenheim_Museum.jpg' },
    { year: 1911, name: 'Abundance', artist: 'Le Fauconnier', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Henri_Le_Fauconnier%2C_1910-11%2C_L%27Abondance_%28Abundance%29%2C_oil_on_canvas%2C_191_x_123_cm_%2875.25_x_48.5_in.%29%2C_Gemeentemuseum_Den_Haag.jpg/500px-Henri_Le_Fauconnier%2C_1910-11%2C_L%27Abondance_%28Abundance%29%2C_oil_on_canvas%2C_191_x_123_cm_%2875.25_x_48.5_in.%29%2C_Gemeentemuseum_Den_Haag.jpg' },
    { year: 1911, name: 'Portrait of Jacques Nayral', artist: 'Gleizes', wiki: "Portrait of Jacques Nayral", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Albert_Gleizes%2C_1911%2C_Portrait_de_Jacques_Nayral%2C_oil_on_canvas%2C_161.9_x_114_cm%2C_Tate_Modern%2C_London.jpg/500px-Albert_Gleizes%2C_1911%2C_Portrait_de_Jacques_Nayral%2C_oil_on_canvas%2C_161.9_x_114_cm%2C_Tate_Modern%2C_London.jpg' },
    { year: 1912, name: 'Still Life with Chair Caning', artist: 'Picasso', wiki: "Still Life with Chair Caning", img: ART_IMG.chairCaning },
    { year: 1912, name: 'Fruit Dish and Glass', artist: 'Braque', wiki: "Fruit Dish and Glass", img: ART_IMG.braqueFruitDish },
    { year: 1912, name: 'The City of Paris', artist: 'Delaunay', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Robert_Delaunay%2C_1912%2C_La_Ville_de_Paris%2C_oil_on_canvas%2C_267_%C3%97_406_cm%2C_Mus%C3%A9e_National_d%27Art_Moderne.jpg/500px-Robert_Delaunay%2C_1912%2C_La_Ville_de_Paris%2C_oil_on_canvas%2C_267_%C3%97_406_cm%2C_Mus%C3%A9e_National_d%27Art_Moderne.jpg' },
    { year: 1912, name: 'Simultaneous Windows', artist: 'Delaunay', wiki: "Windows (Delaunay series)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Robert_Delaunay_-_Windows_-_1912_-_Museum_of_Modern_Art.jpg/500px-Robert_Delaunay_-_Windows_-_1912_-_Museum_of_Modern_Art.jpg' },
    { year: 1912, name: 'Nude Descending a Staircase No. 2', artist: 'Duchamp', wiki: "Nude Descending a Staircase, No. 2", img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Duchamp_-_Nude_Descending_a_Staircase.jpg/500px-Duchamp_-_Nude_Descending_a_Staircase.jpg' },
    { year: 1912, name: 'Man on a Balcony', artist: 'Gleizes', wiki: "Man on a Balcony", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Albert_Gleizes%2C_1912%2C_Dessin_pour_L%27Homme_au_balcon%2C_Salon_des_Ind%C3%A9pendants_1912%2C_published_in_Du_%22Cubisme%22%2C_1912.jpg/500px-Albert_Gleizes%2C_1912%2C_Dessin_pour_L%27Homme_au_balcon%2C_Salon_des_Ind%C3%A9pendants_1912%2C_published_in_Du_%22Cubisme%22%2C_1912.jpg' },
    { year: 1912, name: 'Woman in Blue', artist: 'Léger', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Esquisse_pour_la_femme_en_bleu_-_Fernand_L%C3%A9ger.png' },
    { year: 1912, name: 'Homage to Pablo Picasso', artist: 'Gris', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg/500px-Juan_Gris_-_Portrait_of_Pablo_Picasso_-_Google_Art_Project.jpg' },
    { year: 1913, name: 'The Cardiff Team', artist: 'Delaunay', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Delaunay_-_Die_Mannschaft_von_Cardiff_PA291361.jpg/500px-Delaunay_-_Die_Mannschaft_von_Cardiff_PA291361.jpg' },
    { year: 1913, name: 'Contrast of Forms', artist: 'Léger', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Contrast_of_Forms%2C_1913-1914_-_Fernand_L%C3%A9ger.png' },
    { year: 1913, name: 'Udnie', artist: 'Picabia', wiki: "Udnie", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francis_Picabia%2C_1913%2C_Udnie_%28Young_American_Girl%2C_The_Dance%29%2C_oil_on_canvas%2C_290_x_300_cm%2C_Mus%C3%A9e_National_d%E2%80%99Art_Moderne%2C_Centre_Georges_Pompidou%2C_Paris..jpg/500px-Francis_Picabia%2C_1913%2C_Udnie_%28Young_American_Girl%2C_The_Dance%29%2C_oil_on_canvas%2C_290_x_300_cm%2C_Mus%C3%A9e_National_d%E2%80%99Art_Moderne%2C_Centre_Georges_Pompidou%2C_Paris..jpg' },
    { year: 1914, name: 'The Sunblind', artist: 'Gris', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Juan_Gris_%281887-1927%29_-_The_Sunblind_%28La_Jalouise%29_-_NG5747_-_National_Gallery.jpg/500px-Juan_Gris_%281887-1927%29_-_The_Sunblind_%28La_Jalouise%29_-_NG5747_-_National_Gallery.jpg' },
    { year: 1914, name: 'Breakfast (Le Petit Déjeuner)', artist: 'Gris', img: ART_IMG.grisLunch },
    { year: 1915, name: 'Man with a Guitar', artist: 'Lipchitz', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Jacques_Lipchitz%2C_1920%2C_Man_with_Guitar.jpg/500px-Jacques_Lipchitz%2C_1920%2C_Man_with_Guitar.jpg' },
    { year: 1919, name: 'The City (La Ville)', artist: 'Léger', wiki: "The City (Léger)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Fernand_L%C3%A9ger%2C_1919%2C_The_City_%28La_Ville%29%2C_oil_on_canvas%2C_231.1_x_298.4_cm%2C_Philadelphia_Museum_of_Art.jpg/500px-Fernand_L%C3%A9ger%2C_1919%2C_The_City_%28La_Ville%29%2C_oil_on_canvas%2C_231.1_x_298.4_cm%2C_Philadelphia_Museum_of_Art.jpg' },
    { year: 1921, name: 'Three Musicians', artist: 'Picasso', wiki: "Three Musicians (Picasso)", img: ART_IMG.picassoThreeMusicians },
  ],
  sections: [
    { id: 'before', eyebrow: 'Setting', dateLabel: '1906–1908', title: 'Before the cube', blurb: 'A dead painter, a stolen stone head, a room of looted masks — the three things Picasso could not stop looking at.', progress: 1 / 6 },
    { id: 'analytic', eyebrow: 'The partnership', dateLabel: '1909–1911', title: 'Two men, one rope', blurb: 'Picasso and Braque climb the mountain roped together, faceting the world into brown and gray shards.', progress: 2 / 6 },
    { id: 'shards', eyebrow: 'The hermetic peak', dateLabel: '1911–1912', title: 'The world in shards', blurb: 'The pictures get so abstract even the painters get nervous — and the public meets Cubism in a room they were not ready for.', progress: 3 / 6 },
    { id: 'paper', eyebrow: 'A new technique', dateLabel: '1912–1914', title: 'Pasted paper', blurb: 'They glue a scrap of oilcloth to a canvas, and five centuries of painting-as-illusion quietly end.', progress: 4 / 6 },
    { id: 'public', eyebrow: 'The second wave', dateLabel: '1911–1914', title: 'Cubism goes public', blurb: 'The Salon Cubists exhibit, theorise and scandalise, and a freight train of it reaches New York.', progress: 5 / 6 },
    { id: 'after', eyebrow: 'The war and after', dateLabel: '1914–1922', title: 'Mobilisation', blurb: 'In August 1914 the founders are scattered to the front. What they had built was already loose in the world.', progress: 1 },
  ],
}

// Influence Ribbon tracks — artists across years, dots at works, derived for the
// movement page's signature visual. (Track = artist; axis = years 1907–1922.)
export const CUBISM_RIBBON = {
  startYear: 1907,
  endYear: 1922,
  tracks: [
    { artist: 'Picasso', color: ART_ACCENTS.violet, dots: [
      { year: 1907, canonical: true, label: 'Demoiselles', workId: 'demoiselles' },
      { year: 1908, canonical: true, label: 'Three Women', workId: 'three-women' },
      { year: 1909, canonical: true, label: 'Horta', workId: 'horta' },
      { year: 1910, canonical: true, label: 'Kahnweiler', workId: 'kahnweiler' },
      { year: 1912, canonical: true, label: 'Chair Caning', workId: 'chair-caning' },
      { year: 1921, canonical: true, label: 'Three Musicians', workId: 'three-musicians' },
    ] },
    { artist: 'Braque', color: ART_ACCENTS.amber, dots: [
      { year: 1908, canonical: false, label: 'L’Estaque' },
      { year: 1910, canonical: true, label: 'Violin and Jug', workId: 'violin-jug' },
      { year: 1911, canonical: true, label: 'The Portuguese', workId: 'the-portuguese' },
      { year: 1914, canonical: false, terminal: true, label: 'Mobilised' },
    ] },
    { artist: 'Gris', color: ART_ACCENTS.green, dots: [
      { year: 1912, canonical: false, label: 'Hommage à Picasso' },
      { year: 1914, canonical: true, label: 'Breakfast', workId: 'gris-breakfast' },
    ] },
  ],
  // dashed influence threads between tracks (from → to, by year)
  threads: [
    { fromYear: 1907, fromTrack: 0, toYear: 1908, toTrack: 1 },
    { fromYear: 1910, fromTrack: 0, toYear: 1912, toTrack: 2 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement — Realism (1848–1870). The Modern era's opening revolt.
// Authored through the art content pipeline (fact pack → Opus draft → 5 critic
// gates → revise); narrative in movement-narratives.tsx under 'real'.
// ─────────────────────────────────────────────────────────────
export const REALISM: ArtMovementContent = {
  id: 'real',
  name: 'Realism',
  range: '1848–1870',
  span: '22 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Movements of the Modern era', index: 1, total: 10 },
  hook: 'Courbet hangs a stone-breaker where the Salon kept its gods.',
  hookLong:
    'Around 1848 a handful of painters made a deliberate movement out of an almost rude idea: paint the real, ordinary, contemporary world — laborers, peasants, the urban poor — at the size and seriousness the academy had always reserved for myth and kings. It was the first shot in the whole modern revolt, and everything restless that follows is still answering it.',
  heroImage: ART_IMG.courbetBurial,
  heroFit: 'cover',
  heroFocus: '50% 52%',
  heroCredit: 'Courbet, A Burial at Ornans (detail), 1849–50 · Musée d’Orsay, Paris',
  stats: [
    { v: '22 yrs', k: 'Span' },
    { v: '30', k: 'Canonical works' },
    { v: 'Paris', k: 'Centered on' },
  ],
  factions: [
    { side: 'realists', label: 'The Realists', color: ART_ACCENTS.amber, members: ['Courbet', 'Millet', 'Daumier', 'Bonheur'], detail: 'No manifesto-signing club — a loose front who agreed on one thing: paint the real, contemporary world, at full scale and dead serious.' },
    { side: 'academy', label: 'The Academy', color: '#7c6f5a', members: ['The Salon jury', 'Cabanel', 'Bouguereau'], detail: 'The State-run ladder that ranked gods and kings at the top and modern life at the bottom — and policed the one show in France where a career was made.' },
  ],
  works: [
    { id: 'gargantua', year: 1831, name: 'Gargantua', artist: 'Daumier', place: 'Paris', size: 'm', blurb: 'Daumier draws the king as a gluttonous giant gorging on his subjects’ taxes. It earned the cartoonist six months in jail.', palette: ['#8a8074', '#4a4038', '#16120e'], imageUrl: ART_IMG.daumierGargantua, credit: 'Daumier, Gargantua, 1831 · lithograph · Bibliothèque nationale de France' },
    { id: 'stone-breakers', year: 1849, name: 'The Stone Breakers', artist: 'Courbet', place: 'Ornans', size: 'm', blurb: 'Two laborers breaking rock, life-size and dead serious. The original was destroyed in 1945; only reproductions survive.', palette: ['#7a7064', '#42382c', '#15110c'], imageUrl: ART_IMG.courbetStoneBreakers, credit: 'Courbet, The Stone Breakers, 1849 · destroyed 1945 (formerly Gemäldegalerie, Dresden)' },
    { id: 'burial', year: 1850, name: 'A Burial at Ornans', artist: 'Courbet', place: 'Ornans', size: 'xl', blurb: 'A whole village funeral painted ten feet tall and twenty-two wide — the scale the Salon kept for the death of a Greek hero.', palette: ['#6b6354', '#39322a', '#120f0c'], imageUrl: ART_IMG.courbetBurial, credit: 'Courbet, A Burial at Ornans, 1849–50 · Musée d’Orsay, Paris' },
    { id: 'sower', year: 1850, name: 'The Sower', artist: 'Millet', place: 'Barbizon', size: 'm', blurb: 'A lone peasant striding a dusk field, flinging seed. Monumental, almost menacing — two years after the poor toppled a throne.', palette: ['#5a5238', '#332c1e', '#100c08'], imageUrl: ART_IMG.milletSower, credit: 'Millet, The Sower, 1850 · Museum of Fine Arts, Boston' },
    { id: 'studio', year: 1855, name: 'The Painter’s Studio', artist: 'Courbet', place: 'Paris', size: 'l', blurb: 'Courbet at his easel, all of contemporary society sorted into one room. The world’s fair refused it; he built his own tent.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.courbetStudio, credit: 'Courbet, The Painter’s Studio, 1855 · Musée d’Orsay, Paris' },
    { id: 'horse-fair', year: 1855, name: 'The Horse Fair', artist: 'Bonheur', place: 'Paris', size: 'l', blurb: 'The Paris horse market at full gallop — draft horses rearing, handlers straining. You can nearly hear the hooves.', palette: ['#8a7a52', '#4a3c22', '#15110a'], imageUrl: ART_IMG.bonheurHorseFair, credit: 'Bonheur, The Horse Fair, 1852–55 · The Metropolitan Museum of Art, New York' },
    { id: 'gleaners', year: 1857, name: 'The Gleaners', artist: 'Millet', place: 'Barbizon', size: 'l', blurb: 'Three of the poorest women bent over a stripped field, gathering the grain the reapers dropped — painted at the size of heroes.', palette: ['#a8915a', '#5a4a2a', '#1a1410'], imageUrl: ART_IMG.milletGleaners, credit: 'Millet, The Gleaners, 1857 · Musée d’Orsay, Paris' },
    { id: 'angelus', year: 1859, name: 'The Angelus', artist: 'Millet', place: 'Barbizon', size: 'm', blurb: 'Two peasants pause to pray at the evening bell, tiny under an enormous sky. One of the most reproduced images of the century.', palette: ['#7a6a44', '#3e3320', '#12100a'], imageUrl: ART_IMG.milletAngelus, credit: 'Millet, The Angelus, 1857–59 · Musée d’Orsay, Paris' },
    { id: 'carriage', year: 1864, name: 'The Third-Class Carriage', artist: 'Daumier', place: 'Paris', size: 'l', blurb: 'The cheapest class of a railway car, packed with the urban poor — tired, dignified, unsentimental. Modern life, no pity.', palette: ['#53412c', '#2a1f14', '#0c0805'], imageUrl: ART_IMG.daumierCarriage, credit: 'Daumier, The Third-Class Carriage, c.1862–64 · The Metropolitan Museum of Art, New York' },
  ],
  artists: [
    { id: 'courbet', name: 'Courbet', role: 'The firebrand', years: '1819–1877', palette: ['#6b6354', '#39322a', '#120f0c'], photo: ART_IMG.courbetPhoto },
    { id: 'millet', name: 'Millet', role: 'Peasant painter', years: '1814–1875', palette: ['#a8915a', '#5a4a2a', '#1a1410'], photo: ART_IMG.milletPhoto },
    { id: 'daumier', name: 'Daumier', role: 'The satirist', years: '1808–1879', palette: ['#7a7064', '#42382c', '#15110c'], photo: ART_IMG.daumierPhoto },
    { id: 'bonheur', name: 'Bonheur', role: 'Animalier', years: '1822–1899', palette: ['#8a7a52', '#4a3c22', '#15110a'], photo: ART_IMG.bonheurPhoto },
    { id: 'corot', name: 'Corot', role: 'Barbizon', years: '1796–1875', palette: ['#6a7250', '#3a3c28', '#14140e'], photo: ART_IMG.corotPhoto },
    { id: 'rousseau', name: 'Rousseau', role: 'Barbizon', years: '1812–1867', palette: ['#5a5236', '#332e1c', '#100e08'], photo: ART_IMG.rousseauPhoto },
  ],
  parallels: [
    { year: 1848, movement: 'Pre-Raphaelites', place: 'London', blurb: 'Seven young British painters band together to revolt against academic polish and paint with sharp-eyed truth to nature.' },
    { year: 1855, movement: 'Exposition Universelle', place: 'Paris', blurb: 'A world’s fair with a grand official art show — and Courbet’s rival one-man Pavilion of Realism pitched right beside it.' },
    { year: 1857, movement: 'Realism on trial', place: 'Paris', blurb: 'Flaubert’s Madame Bovary and Baudelaire’s Les Fleurs du Mal are prosecuted for offending public morals. The unvarnished now unsettles in print, too.' },
    { year: 1863, movement: 'Salon des Refusés', place: 'Paris', blurb: 'The jury’s rejects get their own overflow show; Manet’s Déjeuner sur l’herbe turns scandal into the next revolt.' },
  ],
  lineage: {
    parents: [
      { label: 'The 1848 Revolution', mode: 'civ', img: ART_IMG.rev1848, palette: ['#8a1c1c', '#c79338', '#0d0606'], note: 'gave: the people step into history' },
      { label: 'Dutch genre painting', mode: 'art', img: ART_IMG.vermeerMilkmaid, palette: ['#5a4a32', '#2e2418', '#0e0a06'], note: 'gave: dignity in everyday scenes' },
      { label: 'Photography', mode: 'civ', img: ART_IMG.daguerreBoulevard, palette: ['#3a3a44', '#1c1c24', '#0a0a10'], note: 'gave: a cheap, exact rival to the brush' },
      { label: 'Barbizon landscape', mode: 'art', img: ART_IMG.rousseauOak, palette: ['#6a7250', '#3a3c28', '#14140e'], note: 'gave: working from real nature' },
    ],
    children: [
      { label: 'Impressionism', mode: 'art', img: ART_IMG.impressionSunrise, palette: ['#3a6a8a', '#c8c050', '#1c2a30'], note: 'took: the contemporary world, lit by real light' },
      { label: 'Naturalism', mode: 'art', img: ART_IMG.bastienHaymaking, palette: ['#5a5238', '#332c1e', '#100c08'], note: 'took: unflinching social observation' },
      { label: 'Social Realism', mode: 'art', img: ART_IMG.fildesCasualWard, palette: ['#6b5034', '#3a2820', '#100c08'], note: 'took: art as a witness to labor' },
      { label: 'Ashcan School', mode: 'art', img: ART_IMG.bellowsCliffDwellers, palette: ['#53412c', '#2a1f14', '#0c0805'], note: 'took: the gritty modern city, in New York' },
    ],
  },
  influenceSummary: 'Realism took the shock of 1848 and the new mirror of photography, granted the ordinary present the scale once kept for gods, and handed that permission straight to the Impressionists.',
  canon: [
    { year: 1826, name: 'The Bridge at Narni', artist: 'Corot', wiki: "The Bridge at Narni", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Le_pont_de_Narni_-_Jean-Baptiste_Camille_Corot_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1613_-_photo_2.jpg/500px-Le_pont_de_Narni_-_Jean-Baptiste_Camille_Corot_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1613_-_photo_2.jpg' },
    { year: 1831, name: 'Gargantua', artist: 'Daumier', img: ART_IMG.daumierGargantua },
    { year: 1834, name: 'Rue Transnonain', artist: 'Daumier', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Rue_Transnonain%2C_le_15_Avril_1834.tif/lossy-page1-500px-Rue_Transnonain%2C_le_15_Avril_1834.tif.jpg' },
    { year: 1834, name: 'The Legislative Belly', artist: 'Daumier', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Honor%C3%A9_Daumier_-_The_Monthly_Association_%28plate_18%29-_The_Legislative_Belly_-_1923.206_-_Cleveland_Museum_of_Art.tif/lossy-page1-500px-Honor%C3%A9_Daumier_-_The_Monthly_Association_%28plate_18%29-_The_Legislative_Belly_-_1923.206_-_Cleveland_Museum_of_Art.tif.jpg' },
    { year: 1852, name: 'The Oaks at Apremont', artist: 'Rousseau', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ch%C3%AAnes_Apremont_by_Rousseau_Louvre_RF1447_n1.jpg/500px-Ch%C3%AAnes_Apremont_by_Rousseau_Louvre_RF1447_n1.jpg' },
    { year: 1848, name: 'The Winnower', artist: 'Millet', wiki: "The Winnower (Millet)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Jean-Fran%C3%A7ois_Millet%2C_The_Winnower_%28London%29.jpg/500px-Jean-Fran%C3%A7ois_Millet%2C_The_Winnower_%28London%29.jpg' },
    { year: 1848, name: 'The Uprising', artist: 'Daumier', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Honor%C3%A9_Daumier_-_The_Uprising_%28L%27Emeute%29_-_Google_Art_Project.jpg/500px-Honor%C3%A9_Daumier_-_The_Uprising_%28L%27Emeute%29_-_Google_Art_Project.jpg' },
    { year: 1849, name: 'After Dinner at Ornans', artist: 'Courbet', wiki: "After Dinner at Ornans", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Gustave_Courbet_031.jpg/500px-Gustave_Courbet_031.jpg' },
    { year: 1849, name: 'The Stone Breakers', artist: 'Courbet', wiki: "The Stone Breakers", img: ART_IMG.courbetStoneBreakers },
    { year: 1849, name: 'Ploughing in the Nivernais', artist: 'Bonheur', wiki: "Ploughing in the Nivernais", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg/500px-Rosa_Bonheur_-_Ploughing_in_Nevers_-_Google_Art_Project.jpg' },
    { year: 1850, name: 'A Burial at Ornans', artist: 'Courbet', wiki: "A Burial at Ornans", img: ART_IMG.courbetBurial },
    { year: 1850, name: 'The Sower', artist: 'Millet', wiki: "The Sower (Millet)", img: ART_IMG.milletSower },
    { year: 1853, name: 'Harvesters Resting (Ruth and Boaz)', artist: 'Millet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Harvesters_Resting_%28Ruth_and_Boaz%29%2C_Jean-Fran%C3%A7ois_Millet.jpg/500px-Harvesters_Resting_%28Ruth_and_Boaz%29%2C_Jean-Fran%C3%A7ois_Millet.jpg' },
    { year: 1853, name: 'The Bathers', artist: 'Courbet', wiki: "The Bathers (Courbet)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Les_Baigneuses-Courbet.jpg/500px-Les_Baigneuses-Courbet.jpg' },
    { year: 1854, name: 'The Wheat Sifters', artist: 'Courbet', wiki: "The Wheat Sifters", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Gustave_Courbet_014.jpg/500px-Gustave_Courbet_014.jpg' },
    { year: 1854, name: 'The Meeting (Bonjour, Monsieur Courbet)', artist: 'Courbet', wiki: "The Meeting (Courbet)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Gustave_Courbet_-_Bonjour_Monsieur_Courbet_-_Mus%C3%A9e_Fabre.jpg/500px-Gustave_Courbet_-_Bonjour_Monsieur_Courbet_-_Mus%C3%A9e_Fabre.jpg' },
    { year: 1855, name: 'The Painter’s Studio', artist: 'Courbet', wiki: "The Painter's Studio", img: ART_IMG.courbetStudio },
    { year: 1855, name: 'The Horse Fair', artist: 'Bonheur', wiki: "The Horse Fair", img: ART_IMG.bonheurHorseFair },
    { year: 1857, name: 'The Gleaners', artist: 'Millet', wiki: "The Gleaners", img: ART_IMG.milletGleaners },
    { year: 1857, name: 'Young Ladies on the Banks of the Seine', artist: 'Courbet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Young_Ladies_on_the_Bank_of_the_Seine%2C_before_1857.jpg/500px-Young_Ladies_on_the_Bank_of_the_Seine%2C_before_1857.jpg' },
    { year: 1859, name: 'The Angelus', artist: 'Millet', wiki: "The Angelus (painting)", img: ART_IMG.milletAngelus },
    { year: 1859, name: 'The Banks of the Oise', artist: 'Daubigny', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Charles-Fran%C3%A7ois_Daubigny_008.jpg/500px-Charles-Fran%C3%A7ois_Daubigny_008.jpg' },
    { year: 1862, name: 'Man with a Hoe', artist: 'Millet', wiki: "Man with a Hoe", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Millet%2C_Jean-Fran%C3%A7ois_-_Man_with_a_Hoe_-_Google_Art_Project.jpg/500px-Millet%2C_Jean-Fran%C3%A7ois_-_Man_with_a_Hoe_-_Google_Art_Project.jpg' },
    { year: 1862, name: 'The Third-Class Carriage', artist: 'Daumier', wiki: "The Third-Class Carriage", img: ART_IMG.daumierCarriage },
    { year: 1863, name: 'The Laundress', artist: 'Daumier', wiki: "The Laundress (Daumier)", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Honor%C3%A9_Daumier_-_The_Washerwoman_-_WGA05957.jpg/500px-Honor%C3%A9_Daumier_-_The_Washerwoman_-_WGA05957.jpg' },
    { year: 1863, name: 'Shepherdess with her Flock', artist: 'Millet', wiki: "Shepherdess with her Flock", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Jean-Fran%C3%A7ois_Millet_Pastora.jpg/500px-Jean-Fran%C3%A7ois_Millet_Pastora.jpg' },
    { year: 1864, name: 'Souvenir de Mortefontaine', artist: 'Corot', wiki: "Souvenir de Mortefontaine", img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Souvenir_de_Mortefontaine_-_Jean-Baptiste_Camille_Corot_-_Mus%C3%A9e_du_Louvre_Peintures_MI_692_bis_-_photo_2.jpg/500px-Souvenir_de_Mortefontaine_-_Jean-Baptiste_Camille_Corot_-_Mus%C3%A9e_du_Louvre_Peintures_MI_692_bis_-_photo_2.jpg' },
    // The Origin of the World — kept + linked, but with NO inline thumbnail and an
    // "explicit" tag, so tapping through to Courbet's explicit work is informed, not a surprise.
    { year: 1866, name: 'The Origin of the World', artist: 'Courbet', wiki: "L'Origine du monde", nsfw: true },
    { year: 1869, name: 'Woman with a Pearl', artist: 'Corot', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Camille_Corot_-_Woman_with_a_Pearl.jpg/500px-Camille_Corot_-_Woman_with_a_Pearl.jpg' },
    { year: 1872, name: 'The Trout', artist: 'Courbet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Courbet_-_La_truite_Musee_Orsay.jpg/500px-Courbet_-_La_truite_Musee_Orsay.jpg' },
  ],
  sections: [
    { id: 'why', eyebrow: 'The demand', dateLabel: '1848', title: 'Why Realism', blurb: 'A revolution puts ordinary people in the foreground of history — and a generation of painters asks why they’re only ever scenery.', progress: 1 / 6 },
    { id: 'gauntlet', eyebrow: 'Courbet', dateLabel: '1849–1850', title: 'Courbet’s gauntlet', blurb: 'Two laborers breaking rock and a whole village funeral, painted at the scale the Salon kept for gods. The scandal of dignifying nobodies.', progress: 2 / 6 },
    { id: 'pavilion', eyebrow: 'The manifesto', dateLabel: '1855', title: 'The Pavilion and the Manifesto', blurb: 'Refused by the world’s fair, Courbet builds his own tent across the street, charges admission, and gives the movement its name.', progress: 3 / 6 },
    { id: 'peasants', eyebrow: 'Millet', dateLabel: '1850–1859', title: 'Millet’s peasants', blurb: 'Out at Barbizon, the quiet half of Realism paints the rural poor as fact and as sacrament — and frightens the critics doing it.', progress: 4 / 6 },
    { id: 'city', eyebrow: 'Daumier', dateLabel: '1831–1864', title: 'Daumier’s city', blurb: 'A caricaturist jailed for mocking the king drags Realism into the modern town — its crowds, its politicians, its third-class poor.', progress: 5 / 6 },
    { id: 'reach', eyebrow: 'Bonheur & after', dateLabel: '1853–1877', title: 'Bonheur, and the reach', blurb: 'The most celebrated woman painter of the century, the handoff to Impressionism, and the price Courbet paid for his politics.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Work — Les Demoiselles d'Avignon (1907)
// ─────────────────────────────────────────────────────────────
export interface WorkSection { id: string; eyebrow: string; dateLabel: string; title: string; blurb: string; progress: number }
export interface ProvenanceEntry { year: string; who: string; place: string; note: string; price: string | null; museum?: boolean }
export interface WorkFigure { name: string; role: string; palette: Palette }
// "Look closer" = a prose pointer into the FULL painting (shown uncropped above
// the list). `where` is a short, scannable location phrase ("Center foreground,
// low"); `label` names the thing; `detail` is why it matters. We do NOT crop or
// pin the image: any coordinate is authored blind (we can't see where it lands),
// so it's unreliable by construction — words are the one thing we can place
// accurately. The legacy x/y/w/h are kept optional + unused (locked 2026-05-25).
export interface CanvasAnnotation { label: string; where?: string; detail?: string; x?: string; y?: string; w?: number; h?: number }

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
  heroAspect?: number // source image W/H — used to frame the "Look closer" region crops
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
  dimensions: '8 ft × 7 ft 8 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Acquired 1939',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 1, total: 9 },
  hook: 'Five women, five sets of impossible angles, masks where the faces should be.',
  heroImage: ART_IMG.demoiselles,
  heroCredit: 'Picasso, Les Demoiselles d’Avignon, 1907 · MoMA',
  heroAspect: 0.966,
  // The work page hero shows the WHOLE painting (≈square) — contain, never cropped.
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1907', k: 'Painted' },
    { v: '8′ × 7′8″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Winter 1906', title: 'Where this came from', blurb: 'A 25-year-old Spaniard in a tenement studio at the top of Montmartre is looking at three things he can’t stop looking at.', progress: 0.06 },
    { id: 'making', eyebrow: 'Spring – Summer 1907', dateLabel: 'May–Jul 1907', title: 'Painting it', blurb: 'Hundreds of preparatory sketches. The canvas changes radically twice. By July the five faces have become masks.', progress: 0.3 },
    { id: 'reception', eyebrow: 'Studio shock', dateLabel: 'July–Nov 1907', title: 'What his friends said', blurb: 'Matisse calls it an outrage. Braque says it makes him feel like Picasso has been drinking turpentine and eating tow.', progress: 0.52 },
    { id: 'hidden', eyebrow: 'Nine years rolled up', dateLabel: '1907–1916', title: 'The painting goes away', blurb: 'Picasso rolls it up. It is shown only once, in 1916. Most painters who go on to make Cubism never see it.', progress: 0.74 },
    { id: 'legacy', eyebrow: 'What happened next', dateLabel: '1916–today', title: 'The painting that broke the picture', blurb: 'Bought by a couturier, sold to MoMA in 1939, and slowly recognized as the canvas where modern art changed gear.', progress: 0.95 },
  ],
  // FLAG: provenance prices below are from the mockup — verify before shipping.
  provenance: [
    { year: '1907–1924', who: 'Pablo Picasso (the artist)', place: 'Bateau-Lavoir, Paris', note: 'Rolled up in the studio. Shown publicly once, briefly, at the Salon d’Antin in 1916.', price: null },
    { year: '1924', who: 'Jacques Doucet', place: 'Paris', note: 'Couturier and book collector. Buys the canvas for 25,000 francs — a modest price for what it would become; within months it was appraised at ten times that.', price: '25,000 ₣ (1924)' },
    { year: '1924–1929', who: 'Doucet collection', place: 'Paris', note: 'Hangs at the foot of Doucet’s staircase. Visitors complained about climbing past it.', price: null },
    { year: '1937', who: 'Jacques Seligmann & Co.', place: 'New York', note: 'Doucet’s widow sells the painting; the New York gallery shows it, looking for an institutional buyer.', price: null },
    { year: '1939', who: 'Museum of Modern Art', place: 'New York', note: 'MoMA buys the painting for $24,000 through the Lillie P. Bliss Bequest — raising $18,000 by selling a Degas (Jockeys on Horseback before Distant Hills) and the rest from the dealers Germain Seligman and César de Hauke.', price: '$24,000 (1939)', museum: true },
    { year: '1939–today', who: 'Museum of Modern Art', place: 'New York', note: 'On near-continuous view; it rarely travels. Insured value undisclosed — long treated as effectively priceless.', price: 'never resold', museum: true },
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
    { label: 'Iberian stone heads · the three left faces', where: 'The three figures at left', detail: 'The three faces on the left are calm and almond-eyed — lifted from the ancient Iberian stone heads Picasso had studied at the Louvre (he even owned two stolen fragments). Only the far-left woman is turned in true profile; the other two stare straight out. He is reaching past the Renaissance to Spain’s own pre-Roman past.' },
    { label: 'African mask · right-most figures', where: 'The two figures at right', detail: 'The two figures on the right wear faces like carved African masks — gouged, striated, deliberately other. Picasso had just been hit hard by Fang and Kota masks at the Trocadéro ethnographic museum; here a “beautiful nude” is given a mask for a face.' },
    { label: 'Still life, faceted form (Cézanne)', where: 'Bottom center, below the figures', detail: 'The wedge of fruit at the bottom is built from blunt, faceted planes — pure Cézanne, whose late work taught Picasso to construct a picture out of solid geometric blocks instead of smooth illusion.' },
    { label: 'Two views at once', where: 'The crouching figure, lower right', detail: 'The crouching figure shows you her muscular back and — twisted impossibly round — her masked face at the same instant. There is no single spot you could stand to see this, which is exactly the point: Cubism abolishes the one fixed viewpoint a painting had assumed for 500 years.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne’s Bathers', mode: 'art' }, { label: 'Iberian sculpture', mode: 'art' }, { label: 'African masks', mode: 'art' }, { label: 'Belle Époque Paris', mode: 'civ' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Futurism', mode: 'art' }, { label: 'Abstract art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Portrait of Daniel-Henry Kahnweiler (1910): the textbook Analytic
// Cubism canvas, a foil to the Demoiselles. Annotation pins verified on the
// painting 2026-05-24. Chapter prose lives in the section reader (NARRATIVES.kahnweiler).
// ─────────────────────────────────────────────────────────────
export const KAHNWEILER: ArtWorkContent = {
  id: 'kahnweiler',
  name: 'Portrait of Daniel-Henry Kahnweiler',
  shortName: 'Kahnweiler',
  year: 1910,
  artist: 'Pablo Picasso',
  artistId: 'picasso',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 3½ in × 2 ft 4½ in',
  location: 'Art Institute of Chicago',
  acquired: 'Acquired 1948',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 2, total: 9 },
  hook: 'A real man — Picasso’s own dealer — dissolved into a shimmer of brown-and-gray facets you have to decode.',
  heroImage: ART_IMG.kahnweiler,
  heroCredit: 'Picasso, Portrait of Daniel-Henry Kahnweiler, 1910 · Art Institute of Chicago',
  heroAspect: 0.717,
  rights: 'pd-us',
  stats: [
    { v: '1910', k: 'Painted' },
    { v: '3′3½″ × 2′4½″', k: 'Dimensions' },
    { v: 'Art Institute', k: 'Now at' },
  ],
  sections: [
    { id: 'dealer', eyebrow: 'The man', dateLabel: '1907–1910', title: 'The dealer who bankrolled Cubism', blurb: 'A young German walks into a Paris backwater, signs the painters nobody else will touch, and becomes the quiet engine behind Cubism.', progress: 0.1 },
    { id: 'analytic', eyebrow: 'The style', dateLabel: '1909–1911', title: 'Cubism, three years on', blurb: 'By 1910 Picasso and Braque are roped together, faceting the whole visible world into a shimmer of brown and gray.', progress: 0.3 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Finding the man in the facets', blurb: 'The wave of hair, two almond eyes, the clasped hands — the footholds that turn a gray scaffold back into a seated man.', progress: 0.55 },
    { id: 'sitting', eyebrow: 'The edge of legible', dateLabel: 'Autumn 1910', title: 'Sitting for a near-abstraction', blurb: 'Many sittings push the portrait to the brink of unreadability — and then, deliberately, it stops just short.', progress: 0.78 },
    { id: 'seized', eyebrow: 'Afterlife', dateLabel: '1914–1948', title: 'Seized, scattered, saved', blurb: 'War turns Kahnweiler into an enemy alien; his whole collection is confiscated and auctioned, and the portrait drifts toward Chicago.', progress: 0.95 },
  ],
  provenance: [
    { year: '1910', who: 'Daniel-Henry Kahnweiler', place: 'Paris', note: 'Acquired straight from Picasso — the dealer owned his own portrait.', price: null },
    { year: '1914', who: 'Sequestered by the French state', place: 'Paris', note: 'A German citizen caught abroad when war broke out, Kahnweiler could not return; his stock was seized as enemy property.', price: null },
    { year: '1921', who: 'Isaac Grünewald', place: 'Hôtel Drouot, Paris', note: 'Lot 84 in the first forced sequestration auction — bought by the Swedish painter Isaac Grünewald.', price: null },
    { year: 'c. 1929', who: 'Earl Horter', place: 'Philadelphia', note: 'The American artist and collector Earl Horter.', price: null },
    { year: '1934', who: 'Mrs. Gilbert W. Chapman', place: 'Chicago', note: 'Bought by the Chicago collector then known as Mrs. Charles Goodspeed.', price: null },
    { year: '1948', who: 'Art Institute of Chicago', place: 'Chicago', note: 'Her gift, in memory of Charles B. Goodspeed — now a landmark of the museum’s Cubism.', price: null, museum: true },
  ],
  figures: [],
  annotations: [
    { x: '61%', y: '12%', w: 30, h: 18, label: 'The wave of hair', detail: 'Start at the top: that patch of fine diagonal hatching is Kahnweiler’s neatly combed, wavy hair — one of the few passages Picasso leaves almost describable, a foothold before the rest dissolves.' },
    { x: '50%', y: '22%', w: 32, h: 24, label: 'His eyes, looking out', detail: 'Below the hair, two dark almond eyes and the ridge of a nose surface out of the facets. Find the face looking back and the whole gray scaffold suddenly reads as a seated man.' },
    { x: '52%', y: '89%', w: 42, h: 20, label: 'The clasped hands', detail: 'At the very bottom, a cluster of pale interlocking blocks resolves into his hands, folded in his lap. Picasso pins the figure down with hair and hands — top and bottom — and lets everything between them break apart.' },
    { x: '18%', y: '70%', w: 32, h: 28, label: 'A still-life corner', detail: 'Down in the lower left (to the sitter’s right) sit the faceted shards of a small still life — a bottle, and probably a glass beside it. The everyday tabletop motif Picasso and Braque were faceting over and over in these years, tucked into the corner of a portrait.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'African & Oceanic art', mode: 'art' }, { label: 'Les Demoiselles', mode: 'art' } ],
    children: [ { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Collage', mode: 'art' }, { label: 'Abstract art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Still Life with Chair Caning (1912): the first Cubist collage and the
// hinge between Analytic and Synthetic Cubism. Self-hosted image (no Wikimedia
// copy exists); Look-closer crops verified against the 1043×796 repro 2026-05-24.
// Chapter prose lives in the section reader (NARRATIVES['chair-caning']).
// ─────────────────────────────────────────────────────────────
export const CHAIR_CANING: ArtWorkContent = {
  id: 'chair-caning',
  name: 'Still Life with Chair Caning',
  shortName: 'Chair Caning',
  year: 1912,
  artist: 'Pablo Picasso',
  artistId: 'picasso',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil and oilcloth on canvas, framed with rope',
  dimensions: '11½ in × 14½ in',
  location: 'Musée national Picasso-Paris',
  acquired: 'Acquired 1979 (dation)',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 3, total: 9 },
  hook: 'Picasso glued a scrap of printed oilcloth to a canvas, framed it with rope, and quietly ended five centuries of Western painting-as-illusion.',
  heroImage: ART_IMG.chairCaning,
  heroCredit: 'Picasso, Still Life with Chair Caning, 1912 · Musée Picasso, Paris',
  heroAspect: 1.31,
  rights: 'pd-us',
  stats: [
    { v: '1912', k: 'Painted' },
    { v: '11½″ × 14½″', k: 'Dimensions' },
    { v: 'Musée Picasso', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Winter 1912', title: 'The dead end of the facets', blurb: 'Three years of faceting has left Picasso and Braque at the edge of a cliff: a few more shards and the picture dissolves into pure pattern. They need a way back to the world.', progress: 0.08 },
    { id: 'making', eyebrow: 'Spring 1912', dateLabel: 'May 1912', title: 'The morning he stopped painting', blurb: 'On a small oval canvas Picasso reaches not for a brush but for a strip of machine-printed oilcloth and a length of rope — and glues them down.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'A café table, seen from above', blurb: 'It reads as chaos until you spot the tabletop: a newspaper, a pipe, a wineglass, a slice of lemon — and the chair you would sit on, printed onto cloth.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1912', title: 'Five centuries of illusion, over', blurb: 'The moment a real object lands on the canvas, painting stops having to pretend. Collage is born — and four months later Braque takes the next step.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1912–today', title: 'The little oval that opened the century', blurb: 'It is the size of a sheet of paper, Picasso never sold it, and almost every glued, taped or bolted-together artwork since descends from it.', progress: 0.95 },
  ],
  provenance: [
    { year: '1912–1973', who: 'Pablo Picasso (the artist)', place: 'Paris', note: 'Picasso kept his own breakthrough. The little oval stayed in his personal collection for sixty-one years — he never put it up for sale.', price: null },
    { year: '1973', who: 'Estate of Pablo Picasso', place: 'Mougins / Paris', note: 'Picasso dies without a will. A vast hoard of work he had held back his whole life passes to his heirs, and the French state takes years to inventory it.', price: null },
    { year: '1979', who: 'French national collections (by dation)', place: 'Paris', note: 'France lets heirs pay inheritance tax in artworks rather than cash — the dation. This canvas is among the works that pass to the nation, forming the core of a future Picasso museum.', price: 'paid as estate tax' },
    { year: '1985', who: 'Musée national Picasso-Paris', place: 'Paris (Hôtel Salé)', note: 'The museum opens in a grand 17th-century mansion once built on a salt-tax fortune. The little oval, still framed in its piece of rope, has hung there since.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Braque', role: 'Papier collé, that September', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Kurt Schwitters', role: 'The heir, in glued trash', palette: ['#8a3a2a', '#2a1c16', '#0a0606'] },
  ],
  annotations: [
    { x: '30%', y: '34%', w: 34, h: 18, label: 'The letters JOU', detail: 'Big black painted capitals: J-O-U, the first three letters of journal — French for newspaper (and literally “daily”). A café kept its papers on a rack; here one lies on the table. Viewers have long enjoyed the wink to jouer, “to play” — the game of the whole picture.' },
    { x: '28%', y: '64%', w: 32, h: 28, label: 'The printed chair caning', detail: 'This woven lattice is the trick at the center of the work. It is not real cane, and it is not painted — it is a strip of cheap oilcloth, machine-printed to imitate the rattan seat of a bistro chair, glued straight onto the canvas. A factory-made fake, standing in for the chair you would sit on.' },
    { x: '50%', y: '90%', w: 52, h: 16, label: 'The rope frame', detail: 'A length of ordinary rope, glued around the oval edge. It reads two ways at once: the carved rim of a little round café table seen from above, and the gilt edge of a picture frame. Picasso lets you choose — and so blurs the line between an object and a picture of one.' },
    { x: '60%', y: '44%', w: 42, h: 38, label: 'The still life, in facets', detail: 'Everything else is hand-painted illusion in the brown-gray shards of Analytic Cubism: a stemmed wineglass, a pipe, a knife, a slice of lemon, a scalloped white form (a shell, or the frilled edge of a napkin — scholars read it both ways) — the remains of a drink and a light meal, dissolving into planes. The old painted fakery sits right beside the glued-on real thing.' },
  ],
  lineage: {
    parents: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Cézanne', mode: 'art' }, { label: 'Braque', mode: 'art' }, { label: 'Industrial mass production', mode: 'civ' } ],
    children: [ { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Papier collé', mode: 'art' }, { label: 'Dada photomontage', mode: 'art' }, { label: 'Pop Art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Houses on the Hill, Horta de Ebro (1909): the landscape summer where
// Analytic Cubism crystallised. Image en-tier (picassoHorta); Look-closer crops
// verified against the 1280×1025 repro 2026-05-24. Prose: NARRATIVES['horta'].
// ─────────────────────────────────────────────────────────────
export const HORTA: ArtWorkContent = {
  id: 'horta',
  name: 'Houses on the Hill, Horta de Ebro',
  shortName: 'Horta',
  year: 1909,
  artist: 'Pablo Picasso',
  artistId: 'picasso',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 1⅝ in × 2 ft 7⅞ in',
  location: 'Museum Berggruen, Berlin',
  acquired: 'Acquired 2003',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 4, total: 9 },
  hook: 'Picasso spent a summer in a Spanish hill town, painted its houses as a tumble of bare cubes, and came home with Cubism worked out.',
  heroImage: ART_IMG.picassoHorta,
  heroCredit: 'Picasso, Houses on the Hill, Horta de Ebro, 1909 · Museum Berggruen, Berlin',
  heroAspect: 1.249,
  rights: 'pd-us',
  stats: [
    { v: '1909', k: 'Painted' },
    { v: '2′1⅝″ × 2′7⅞″', k: 'Dimensions' },
    { v: 'Berggruen', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Summer 1909', title: 'Why he went back to Horta', blurb: 'Broke, exhausted and stuck, Picasso flees Paris for the baked Catalan village of an old friend — a town of cube-shaped houses that turns out to be the perfect laboratory.', progress: 0.08 },
    { id: 'making', eyebrow: 'The summer', dateLabel: 'Jun–Sep 1909', title: 'Painting the village as blocks', blurb: 'He reduces the houses to nested geometric solids, tilts every plane, and — famously — brings home photographs to prove the cubes were really there.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'A town built from geometry', blurb: 'Ochre cubes climbing a hill, roofs flattened into facets, the mountain behind broken into the same planes — and one stubborn patch of green.', progress: 0.56 },
    { id: 'breakthrough', eyebrow: 'The breakthrough', dateLabel: '1909–1910', title: 'The summer it became a movement', blurb: 'This is where the shock of the Demoiselles hardens into a method. Cézanne’s advice, made real on a hillside — the launch pad for everything Picasso and Braque do next.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1909–today', title: 'The Picasso MoMA let go', blurb: 'A Rockefeller treasure, bequeathed to MoMA — and then, to some critics’ horror, quietly sold off, ending up a star of a Berlin museum.', progress: 0.95 },
  ],
  provenance: [
    { year: '1909', who: 'Pablo Picasso (the artist)', place: 'Horta de Sant Joan, Catalonia', note: 'Painted over the summer in his friend Pallarès’s village, then rolled up and carried back to Paris.', price: null },
    { year: 'by the 1970s', who: 'Nelson A. Rockefeller', place: 'New York', note: 'The canvas enters the celebrated modern collection of the oil heir, New York governor and future US vice-president.', price: null },
    { year: '1979', who: 'Museum of Modern Art', place: 'New York', note: 'Bequeathed to MoMA on Rockefeller’s death — for decades one of the museum’s landmark early Cubist paintings.', price: null, museum: true },
    { year: '2003', who: 'Sold by MoMA (via Acquavella)', place: 'New York', note: 'In a deaccession that appalled some critics, MoMA sold the Horta — reported at $12–15 million — through Acquavella Galleries to raise acquisition funds.', price: '≈ $12–15m (2003)' },
    { year: '2003–today', who: 'Museum Berggruen', place: 'Berlin', note: 'The Berlin-born dealer-collector Heinz Berggruen buys it from the MoMA sale and adds it to his collection, by then the state-owned Museum Berggruen, which calls it one of its most significant works.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Manuel Pallarès', role: 'The friend, the village', palette: ['#8a6b3a', '#3a2820', '#0e0805'] },
    { name: 'Fernande Olivier', role: 'With him that summer', palette: ['#a85a4a', '#3a221c', '#0a0606'] },
    { name: 'Gertrude Stein', role: 'Patron, early champion', palette: ['#8a3a4a', '#2a1c1c', '#0a0606'] },
  ],
  annotations: [
    { x: '46%', y: '56%', w: 42, h: 34, label: 'Houses as cubes', detail: 'The heart of the picture: the village’s flat-roofed houses, stripped down to bare ochre blocks — cubes, wedges, prisms — stacked and tilted up the slope. Picasso throws out the fussy detail and keeps only the geometry, the lesson he took from Cézanne: build the world out of solid shapes.' },
    { x: '64%', y: '20%', w: 52, h: 24, label: 'The hill, faceted too', detail: 'The mountain behind is broken into the same angular planes as the buildings. Village and hillside rhyme; nature and architecture are made of one geometry. There is no soft, hazy distance — the far hill is pulled up flat against the houses.' },
    { x: '30%', y: '46%', w: 30, h: 26, label: 'A roof becomes a plane', detail: 'Follow a single house and watch a roof flatten into a tilted facet, a wall into another, the two meeting at an impossible angle. Picasso lights each plane from a different, unfixable direction, so the cube reads as solid and as flat at the same time.' },
    { x: '12%', y: '33%', w: 24, h: 26, label: 'The one green note', detail: 'A patch of cool green — vegetation — clings to the left edge: almost the only green in a picture of relentless ochre and gray. In all that dry, faceted geometry it is the one hint of organic life, though Picasso gives it the same angular planes as everything else.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'Les Demoiselles', mode: 'art' }, { label: 'Catalan hill towns', mode: 'civ' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Portrait of Kahnweiler', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Violin and Jug (Braque, 1909–10): the textbook Analytic Cubism still
// life, and the painted trompe-l'œil nail. Image en-tier (braqueViolinJug, low-
// res but the only clean copy — crops kept large); verified 2026-05-24.
// Prose: NARRATIVES['violin-jug'].
// ─────────────────────────────────────────────────────────────
export const VIOLIN_JUG: ArtWorkContent = {
  id: 'violin-jug',
  name: 'Violin and Jug',
  shortName: 'Violin and Jug',
  year: 1910,
  artist: 'Georges Braque',
  artistId: 'braque',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 10 in × 2 ft 5 in',
  location: 'Kunstmuseum Basel',
  acquired: 'Gift of Raoul La Roche',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 5, total: 9 },
  hook: 'Braque shattered a violin and a jug into a fog of brown facets — then, at the top, painted one perfectly real nail to hold it all up.',
  heroImage: ART_IMG.braqueViolinJug,
  heroCredit: 'Braque, Violin and Jug, 1909–10 · Kunstmuseum Basel',
  heroAspect: 0.63,
  // The work is a tall portrait canvas — show the whole thing, never cropped.
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1909–10', k: 'Painted' },
    { v: '3′10″ × 2′5″', k: 'Dimensions' },
    { v: 'Basel', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1909–1910', title: 'The other half of Cubism', blurb: 'Everyone remembers Picasso. But Cubism took two — and the quieter, more methodical half was a house-painter’s son from Normandy named Georges Braque.', progress: 0.08 },
    { id: 'making', eyebrow: 'The winter', dateLabel: 'Winter 1909–10', title: 'Faceting a violin', blurb: 'Braque takes a violin and a jug and shatters them into a near-colourless shimmer of planes — the purest example of the style he and Picasso were building.', progress: 0.3 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Find the nail, then the violin', blurb: 'Start at the top with the one solid thing — a painted nail — then hunt down the scroll, the strings and the body of the violin surfacing out of the rubble.', progress: 0.55 },
    { id: 'nail', eyebrow: 'The point', dateLabel: 'The picture', title: 'Why paint a perfect nail', blurb: 'In the most radical painting in Europe, Braque planted one old-fashioned illusion — a joke, a foothold, and a quiet hint of the collage revolution two years off.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1910–today', title: 'How it got to Basel', blurb: 'A Swiss banker who bought Cubism when nobody else would gave his collection to his home city — which is why the textbook Analytic Cubist still life hangs in Basel.', progress: 0.95 },
  ],
  provenance: [
    { year: '1909–10', who: 'Georges Braque (the artist)', place: 'Paris', note: 'Painted in Montmartre over the winter, at the height of the daily Picasso–Braque exchange.', price: null },
    { year: 'from 1921', who: 'Raoul La Roche', place: 'Paris / Basel', note: 'The Basel-born banker and friend of Le Corbusier buys heavily at the 1921 Kahnweiler sequestration sale (Braque’s dealer stock, seized in the war), building one of the deepest private Cubist collections.', price: null },
    { year: '1952–63', who: 'Kunstmuseum Basel', place: 'Basel', note: 'La Roche gives his Cubist collection to his home city’s museum in stages, across three donations — making Basel a stronghold of the movement.', price: null, museum: true },
  ],
  figures: [
    { name: 'Braque', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Picasso', role: 'The other rope-end', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Raoul La Roche', role: 'The collector who saved it', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
  ],
  annotations: [
    { x: '52%', y: '9%', w: 52, h: 15, label: 'The painted nail', detail: 'Start at the very top. That is a nail — painted with old-fashioned, photographic realism, casting a neat little shadow, as if it were pinning the whole picture to the wall. It is the one perfectly solid, real-looking thing in the painting, and Braque put it there on purpose.' },
    { x: '50%', y: '64%', w: 58, h: 40, label: 'The violin', detail: 'Below the nail the violin surfaces out of the rubble: the curled scroll near the center, the strings, and lower down the unmistakable curves of the body with its f-holes. Braque, who loved music, lets you half-find the instrument and then lose it again in the facets.' },
    { x: '33%', y: '33%', w: 46, h: 30, label: 'The jug', detail: 'Above the violin, a pale faceted shape with a rounded lip is the jug. It is dissolving into the same brown-gray planes as everything around it — readable for a second, then gone: exactly the brink of legibility Analytic Cubism likes to walk.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'Houses at Horta', mode: 'art' }, { label: 'Trompe-l’œil', mode: 'art' } ],
    children: [ { label: 'Collage', mode: 'art' }, { label: 'Chair Caning', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Three Women (1908): the year Picasso spent digesting the Demoiselles,
// fusing three nudes into one carved, rust-red mass. Self-hosted (US-PD 1908).
// Look-closer crops verified against the 961×1088 repro. Prose: NARRATIVES['three-women'].
// ─────────────────────────────────────────────────────────────
export const THREE_WOMEN: ArtWorkContent = {
  id: 'three-women',
  name: 'Three Women',
  shortName: 'Three Women',
  year: 1908,
  artist: 'Pablo Picasso',
  artistId: 'picasso',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 6¾ in × 5 ft 10 in',
  location: 'Hermitage Museum, St Petersburg',
  acquired: 'Acquired 1948',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 6, total: 9 },
  hook: 'The year after the Demoiselles, Picasso fused three nudes into a single carved, rust-red mass — and quietly worked out what the explosion had been for.',
  heroImage: ART_IMG.threeWomen,
  heroCredit: 'Picasso, Three Women, 1908 · Hermitage Museum, St Petersburg',
  heroAspect: 0.883,
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1908', k: 'Painted' },
    { v: '6′6¾″ × 5′10″', k: 'Dimensions' },
    { v: 'Hermitage', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Winter 1907–08', title: 'After the bomb', blurb: 'With the Demoiselles rolled up in the corner, Picasso spends a year working out what the explosion was for — and keeps going back to a room of carved African masks.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: '1907–08', title: 'Three figures, one block', blurb: 'He paints, scrapes back and repaints, fusing three nudes into a single mass of rust-red planes — as if the picture were carved rather than brushed.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Bodies like hewn wood', blurb: 'Mask-faces, interlocking limbs, a palette of fired clay — and one sliver of green. How to find the three women in the geometry.', progress: 0.56 },
    { id: 'primitivism', eyebrow: 'The source', dateLabel: '1907–08', title: 'Borrowed from the carvers', blurb: 'Where the mask-faces came from — and the harder question, still argued over, about a European taking them.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1908–today', title: 'A Russian buys the future', blurb: 'Bought by a Moscow textile baron, seized by the Revolution, and locked for decades behind the Iron Curtain in the Hermitage.', progress: 0.95 },
  ],
  provenance: [
    { year: '1908', who: 'Pablo Picasso (the artist)', place: 'Paris', note: 'Painted in the year after the Demoiselles, in the Bateau-Lavoir studio on Montmartre.', price: null },
    { year: 'c. 1913', who: 'Sergei Shchukin', place: 'Moscow', note: 'The Russian textile magnate — introduced to Picasso by Matisse, and among the first anywhere to collect him — acquires it through the Paris trade and carries it to Moscow. He would gather more than fifty Picassos.', price: null },
    { year: '1918', who: 'Nationalised by the Soviet state', place: 'Moscow', note: 'The Revolution seizes Shchukin’s collection; he flees to Paris. His Picassos become state property.', price: null },
    { year: '1948', who: 'Hermitage Museum', place: 'Leningrad', note: 'Stalin breaks up the old collection between Moscow and Leningrad; this canvas goes to the Hermitage, where for decades it is rarely shown.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Sergei Shchukin', role: 'The Moscow buyer', palette: ['#8a3a2a', '#2a1c16', '#0a0606'] },
    { name: 'Matisse', role: 'Rival, fellow collected', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
  ],
  annotations: [
    { x: '48%', y: '20%', w: 46, h: 22, label: 'A monumental head', detail: 'The central figure’s head, tipped back with raised arms: heavy almond eyes, a blunt nose, the whole face simplified into a few carved planes. There is no expression to read — Picasso wants a mask, not a person, a head you could imagine cut from wood.' },
    { x: '75%', y: '34%', w: 40, h: 26, label: 'A mask for a face', detail: 'The right-hand figure’s face is the clearest mask of the three — gouged, frontal, deliberately “other,” lifted from the carved African sculpture Picasso had been staring at. A beautiful nude is given the face of a carved mask.' },
    { x: '42%', y: '58%', w: 54, h: 32, label: 'Carved from one block', detail: 'Where the three bodies meet, you can barely tell whose limb is whose: thighs, shoulders and arms lock into a single faceted mass of rust and ochre. The picture reads less like three figures than one solid thing chiselled into shape.' },
    { x: '14%', y: '20%', w: 26, h: 26, label: 'A breath of green', detail: 'At the edges, slivers of cool green press in against all that fired-clay red — nearly the only color in the picture that isn’t earth. It is the one note of air around a group otherwise packed as tight as masonry.' },
  ],
  lineage: {
    parents: [ { label: 'Les Demoiselles', mode: 'art' }, { label: 'African sculpture', mode: 'art' }, { label: 'Cézanne', mode: 'art' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Houses at Horta', mode: 'art' }, { label: 'Carved sculpture', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — The Portuguese (Braque, 1911): the first stencilled letters in Cubism.
// Self-hosted (US-PD 1911). Crops verified against the 824×1206 repro.
// Prose: NARRATIVES['the-portuguese'].
// ─────────────────────────────────────────────────────────────
export const THE_PORTUGUESE: ArtWorkContent = {
  id: 'the-portuguese',
  name: 'The Portuguese',
  shortName: 'The Portuguese',
  year: 1911,
  artist: 'Georges Braque',
  artistId: 'braque',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 10 in × 2 ft 8 in',
  location: 'Kunstmuseum Basel',
  acquired: 'Gift of Raoul La Roche',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 7, total: 9 },
  hook: 'Braque dissolved a guitar player into a haze of brown facets — then stencilled the letters “D BAL” across the top, and printed type walked into painting for good.',
  heroImage: ART_IMG.portuguese,
  heroCredit: 'Braque, The Portuguese, 1911 · Kunstmuseum Basel',
  heroAspect: 0.683,
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1911', k: 'Painted' },
    { v: '3′10″ × 2′8″', k: 'Dimensions' },
    { v: 'Basel', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1911', title: 'Roped to Picasso, still', blurb: 'A year on from Violin and Jug, Braque and Picasso have faceted the world almost to vapour — and Braque is about to let a printed word into the fog.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: 'Summer 1911', title: 'A musician, dissolved', blurb: 'A Portuguese guitarist Braque remembered from a bar, broken into a shimmer of brown planes so fine the figure nearly vanishes.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Find “D BAL”, then the guitar', blurb: 'Start with the stencilled letters at the top, then hunt down the head and the guitar surfacing from the haze.', progress: 0.56 },
    { id: 'letters', eyebrow: 'The point', dateLabel: '1911', title: 'The day type walked in', blurb: 'Why a few stencilled letters were a revolution — flat, real, mass-produced, sitting on the surface, and pointing straight at collage.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1911–today', title: 'Basel, again', blurb: 'Like Violin and Jug, it owes its home to one Swiss banker who bought Cubism before the world agreed it was art.', progress: 0.95 },
  ],
  provenance: [
    { year: '1911', who: 'Georges Braque (the artist)', place: 'Paris / Céret', note: 'Painted partly in the Pyrenean town of Céret, where Braque and Picasso spent the summer working side by side.', price: null },
    { year: 'from 1921', who: 'Raoul La Roche', place: 'Paris / Basel', note: 'The Basel-born banker and Le Corbusier’s friend buys it at the 1921 Kahnweiler sequestration sale (Braque’s dealer stock, seized as enemy property in the war), part of his deep Cubist collection.', price: null },
    { year: '1952–63', who: 'Kunstmuseum Basel', place: 'Basel', note: 'Donated with the rest of La Roche’s Cubist holdings, in stages — making Basel a stronghold of the movement.', price: null, museum: true },
  ],
  figures: [
    { name: 'Braque', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Picasso', role: 'The other rope-end', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Raoul La Roche', role: 'The collector who saved it', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
  ],
  annotations: [
    { x: '66%', y: '20%', w: 58, h: 34, label: 'Stencilled letters', detail: 'Across the top, in crisp block capitals, the letters “D BAL” (from GRAND BAL — a dance-hall poster) and below them a scatter of stencilled numbers. They are stencilled — sharp, flat, mechanical — and they sit dead on the surface, refusing to join the faceted haze behind them. This is the move the whole picture is famous for.' },
    { x: '46%', y: '28%', w: 54, h: 24, label: 'The musician’s head', detail: 'Below the lettering, a rounded mass of paler planes is the player’s head and shoulders, tipped slightly, almost lost in the shimmer. Braque gives you just enough — a curve, a shadow — to feel a person is there before he dissolves again.' },
    { x: '40%', y: '74%', w: 52, h: 28, label: 'The guitar', detail: 'Lower center, the diagonal strings and the soft curve of a sound-hole give away the guitar across the musician’s lap. It is the firmest representational object in the picture, the thing that tells you this is a seated player and not pure abstraction.' },
    { x: '55%', y: '50%', w: 44, h: 26, label: 'Planes that bleed', detail: 'Everywhere, edges that should belong to the figure open and leak into the background, so body and air are built from the same broken brown light — the Analytic-Cubism trick called passage, here pushed nearly to the point of vapour.' },
  ],
  lineage: {
    parents: [ { label: 'Violin and Jug', mode: 'art' }, { label: 'Cézanne', mode: 'art' }, { label: 'Café posters', mode: 'civ' } ],
    children: [ { label: 'Collage', mode: 'art' }, { label: 'Chair Caning', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Breakfast / Le Petit Déjeuner (Juan Gris, 1914): the model Synthetic-
// Cubism papier collé. Self-hosted higher-res (Gris PD worldwide, d.1927).
// Crops verified against the 833×1128 repro. Prose: NARRATIVES['gris-breakfast'].
// ─────────────────────────────────────────────────────────────
export const GRIS_BREAKFAST: ArtWorkContent = {
  id: 'gris-breakfast',
  name: 'Breakfast',
  shortName: 'Breakfast',
  year: 1914,
  artist: 'Juan Gris',
  artistId: 'gris',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Gouache, oil and crayon on cut-and-pasted printed paper on canvas',
  dimensions: '2 ft 7⅞ in × 1 ft 11½ in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Lillie P. Bliss Bequest (by exchange), 1948',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 8, total: 9 },
  hook: 'The third Cubist, Juan Gris, glued down printed wood-grain paper and a torn newspaper, painted a café breakfast on top, and hid his own name in the headline.',
  heroImage: ART_IMG.grisLunch,
  heroCredit: 'Gris, Breakfast (Le Petit Déjeuner), 1914 · MoMA, New York',
  heroAspect: 0.738,
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1914', k: 'Made' },
    { v: '2′7⅞″ × 1′11½″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1912–14', title: 'The third man', blurb: 'While the founders improvised, a quiet Spaniard named Juan Gris turned Cubism from an instinct into a system — and joined the collage revolution they had started.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: '1914', title: 'Pasted, not painted', blurb: 'Gris glues down two kinds of printed wood-grain paper and a strip of real wallpaper, then draws and paints the breakfast table on top of them.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'A table you can actually read', blurb: 'Coffee pot, cup, glasses, a newspaper — far more legible than the founders ever allowed, with a joke folded into the headline.', progress: 0.56 },
    { id: 'system', eyebrow: 'The point', dateLabel: '1914', title: 'Cubism made rigorous', blurb: 'Where Picasso and Braque felt their way, Gris calculated — clean, locked, almost architectural. The most orderly Cubism anyone made.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1914–today', title: 'The short, bright career', blurb: 'Gris died at forty with his reputation still catching up; his Breakfast now hangs at MoMA as the textbook Synthetic-Cubist collage.', progress: 0.95 },
  ],
  provenance: [
    { year: '1914', who: 'Juan Gris (the artist)', place: 'Paris', note: 'Made early in 1914 (the collaged newspaper is dated February), during Gris’s great burst of papiers collés.', price: null },
    { year: 'from 1914', who: 'Daniel-Henry Kahnweiler', place: 'Paris', note: 'Gris was under contract to Kahnweiler — the same dealer who backed Picasso and Braque — until the war scattered them.', price: null },
    { year: '1948', who: 'Museum of Modern Art', place: 'New York', note: 'Bought from Galerie Louise Leiris (Kahnweiler’s reconstituted gallery) through the Lillie P. Bliss Bequest; now among MoMA’s core Cubist holdings, the model of how collage rebuilt the still life.', price: null, museum: true },
  ],
  figures: [
    { name: 'Juan Gris', role: 'The painter', palette: ['#3a6a7a', '#8a6b3a', '#1c2a2e'] },
    { name: 'Picasso', role: 'The senior Spaniard', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Braque', role: 'Co-inventor of papier collé', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
  ],
  annotations: [
    { x: '42%', y: '78%', w: 42, h: 16, label: 'JOURNAL — and his name', detail: 'A torn strip of newspaper reads “…OURN…” — journal, the French daily — and just below it, “…ZA GRIS.” That last word is the painter signing his work inside the picture: Gris means “gray” in French, and here it is set in newsprint, a pun and a signature in one.' },
    { x: '56%', y: '55%', w: 40, h: 24, label: 'The cup and saucer', detail: 'Dead center, a white coffee cup and saucer are drawn with almost old-fashioned, rounded clarity — solid, shaded, completely readable. Gris lets you have the real object, then surrounds it with flat pasted planes, so realism and abstraction share one table.' },
    { x: '33%', y: '40%', w: 40, h: 26, label: 'The coffee pot', detail: 'To the left, the tall pale shape of a coffee pot or pitcher rises out of the composition. Notice how Gris splits it down a clean vertical seam — light on one side, shadow on the other — slicing a single object into two views without ever losing it.' },
    { x: '30%', y: '86%', w: 46, h: 18, label: 'Imitation wood-grain', detail: 'That wood-grain is not painted: the tabletop, the legs at the bottom, and the strips behind are cheap, factory-printed wood-grain paper, glued down (Gris used two different kinds). A mass-produced fake of timber, standing in for the real café table: collage doing the work paint used to do.' },
  ],
  lineage: {
    parents: [ { label: 'Chair Caning', mode: 'art' }, { label: 'Analytic Cubism', mode: 'art' }, { label: 'Mechanical printing', mode: 'civ' } ],
    children: [ { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Purism', mode: 'art' }, { label: 'Art Deco', mode: 'civ' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work — Three Musicians (Picasso, 1921, the Philadelphia version): the grand
// summation of Synthetic Cubism. Image en-tier (picassoThreeMusicians).
// Crops verified against the 1280×1385 repro. Prose: NARRATIVES['three-musicians'].
// ─────────────────────────────────────────────────────────────
export const THREE_MUSICIANS: ArtWorkContent = {
  id: 'three-musicians',
  name: 'Three Musicians',
  shortName: 'Three Musicians',
  year: 1921,
  artist: 'Pablo Picasso',
  artistId: 'picasso',
  movement: 'Cubism',
  movementId: 'cubism',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 8½ in × 6 ft 2 in',
  location: 'Philadelphia Museum of Art',
  acquired: 'A. E. Gallatin Collection, 1952',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Works of Cubism', index: 9, total: 9 },
  hook: 'Picasso’s farewell to Cubism’s heroic decade: three masked players built from flat, bright planes — collage remembered in pure paint, and a quiet elegy for lost friends.',
  heroImage: ART_IMG.picassoThreeMusicians,
  heroCredit: 'Picasso, Three Musicians, 1921 · Philadelphia Museum of Art',
  heroAspect: 0.924,
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1921', k: 'Painted' },
    { v: '6′8½″ × 6′2″', k: 'Dimensions' },
    { v: 'Philadelphia', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1921', title: 'Ten years on', blurb: 'Cubism is no longer a scandal but a style; the war is over, the old circle scattered, and Picasso sits down to paint its summation in a rented garage.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: 'Summer 1921', title: 'Painted like cut paper', blurb: 'Two near-identical giants, built from flat interlocking planes of bright color — the look of pasted paper, achieved in pure paint.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Three masked players', blurb: 'A clarinet, a guitar and a sheet of music: Pierrot, Harlequin and a robed monk, staring out of a shallow brown room.', progress: 0.56 },
    { id: 'elegy', eyebrow: 'The point', dateLabel: '1921', title: 'A portrait of ghosts', blurb: 'The three masks are widely read as Picasso and two poet friends — one dead, one turned monk — which makes this bright picture a quiet elegy.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1921–today', title: 'Two versions, two cities', blurb: 'He painted it twice in the same summer; one hangs in New York, this one in Philadelphia — the grand last word of Cubism’s great decade.', progress: 0.95 },
  ],
  provenance: [
    { year: '1921', who: 'Pablo Picasso (the artist)', place: 'Fontainebleau', note: 'Painted over the summer in the garage of a rented villa, in two large versions at once.', price: null },
    { year: 'by the 1930s', who: 'A. E. Gallatin', place: 'New York', note: 'The American collector hangs it in his Gallery of Living Art at New York University (renamed the Museum of Living Art in 1936) — one of the first places Americans could see modern art for free.', price: null },
    { year: '1943–52', who: 'Philadelphia Museum of Art', place: 'Philadelphia', note: 'Gallatin gives his collection to the museum in 1943 (when NYU reclaimed the gallery space); the bequest is completed on his death in 1952. A centrepiece of the Cubist rooms.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter (Harlequin)', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Apollinaire', role: 'The dead poet (Pierrot)', palette: ['#3a4a6a', '#2a3048', '#0e1422'] },
    { name: 'Max Jacob', role: 'The friend turned monk', palette: ['#3a3026', '#1c160e', '#0a0606'] },
    { name: 'A. E. Gallatin', role: 'The collector', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
  ],
  annotations: [
    { x: '50%', y: '22%', w: 82, h: 20, label: 'Three masks', detail: 'Across the top, three masked faces stare straight out: the diamond-costumed Harlequin at left, the white Pierrot in a black domino mask at center, a hooded monk at right. They are flat, frontal and unreadable — carnival masks, not portraits, which is part of why the picture feels haunted.' },
    { x: '38%', y: '31%', w: 52, h: 24, label: 'The instruments', detail: 'A clarinet held to the center figure’s mouth, a violin in the hands of the Harlequin at left — the “music” of three musicians, rendered as flat brown and black shapes. You read the instruments by their silhouettes, the way you’d read a paper cut-out.' },
    { x: '47%', y: '52%', w: 40, h: 18, label: 'The sheet music', detail: 'On the table, a sheet of music with actual staves and notes — one of the few “realistic” passages in the picture, a small window of legibility in a wall of flat color.' },
    { x: '30%', y: '64%', w: 34, h: 28, label: 'Flat shapes, cut and laid down', detail: 'The Harlequin’s costume is a field of orange-and-cream diamonds, built as flat interlocking planes with hard edges — exactly the look of pasted colored paper. Nine years after Chair Caning, Picasso paints collage instead of gluing it.' },
  ],
  lineage: {
    parents: [ { label: 'Chair Caning', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Commedia dell’arte', mode: 'civ' } ],
    children: [ { label: 'Surrealism', mode: 'art' }, { label: 'Pop Art', mode: 'art' }, { label: 'Modern stage design', mode: 'art' } ],
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
// ─────────────────────────────────────────────────────────────
// Work — A Burial at Ornans (1850). The flagship Realism work read. Authored
// through the art content pipeline (fact pack → Opus → 5 gates → revise);
// chapter prose in art-section-reader.tsx NARRATIVES.burial. Annotations placed
// against the real panorama (gate 6, 2026-05-25).
// ─────────────────────────────────────────────────────────────
export const BURIAL: ArtWorkContent = {
  id: 'burial',
  name: 'A Burial at Ornans',
  shortName: 'A Burial at Ornans',
  year: 1850,
  artist: 'Gustave Courbet',
  artistId: 'courbet',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '10 ft 4 in × 21 ft 11 in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Given by Juliette Courbet, 1881',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 1, total: 9 },
  hook: 'A whole village funeral, painted ten feet tall — the scale the Salon kept for the death of kings.',
  heroImage: ART_IMG.courbetBurial,
  heroCredit: 'Courbet, A Burial at Ornans, 1849–50 · Musée d’Orsay, Paris',
  heroAspect: 2.18,
  heroFit: 'contain', // the work hero shows the WHOLE ~2.1:1 panorama, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1849–50', k: 'Painted' },
    { v: '10′4″ × 21′11″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'town', eyebrow: 'Ornans · 1848', dateLabel: '1848', title: 'The town and the grave', blurb: 'The most ordinary death there is — a relative’s funeral in a backwater town — and Courbet decides to paint it at the size Europe kept for kings.', progress: 0.08 },
    { id: 'frieze', eyebrow: 'The canvas', dateLabel: '1849–50', title: 'Forty neighbors at the scale of kings', blurb: 'Ten feet tall, twenty-two wide: a long frieze of real townsfolk around an open grave — the gravedigger, the skull, the red beadles, the indifferent dog, the Ornans cliff.', progress: 0.34 },
    { id: 'salon', eyebrow: 'Paris · 1850–51', dateLabel: '1850–51', title: 'The bomb in the Salon', blurb: 'Hung beside The Stone Breakers in the official Salon, the country funeral detonates — ugliness, monstrous scale, and the shadow of 1848.', progress: 0.58 },
    { id: 'romanticism', eyebrow: 'Courbet’s verdict', dateLabel: '1850s', title: 'The burial of Romanticism', blurb: 'What Courbet meant by his famous line, and why this canvas is Realism’s public birth five years before the 1855 manifesto.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1881–today', title: 'Afterlife', blurb: 'Juliette Courbet gives it to the nation in 1881; the Louvre to the Musée d’Orsay in 1986; the canvas where modern art’s subject cracked open.', progress: 0.96 },
  ],
  provenance: [
    { year: '1849–1877', who: 'Gustave Courbet (the artist)', place: 'Ornans / Paris', note: 'Painted 1849–50 in Ornans; shown at the Salon of 1850–51; it stayed with the artist until his death in Swiss exile in 1877.', price: null },
    { year: '1877–1881', who: 'The Courbet family', place: 'Ornans', note: 'After Courbet died in exile in Switzerland in 1877, the enormous canvas remained with his family.', price: null },
    { year: '1881', who: 'Juliette Courbet (his sister)', place: 'Paris', note: 'Donates the painting to the French State — the very canvas the State’s official Salon had recoiled from thirty years earlier.', price: 'gift to the nation', museum: true },
    { year: '1881–1986', who: 'Musée du Louvre', place: 'Paris', note: 'Enters the national collections; for decades hangs in the Louvre, among the history paintings it had once mocked.', price: null, museum: true },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'When the Orsay opens in a converted railway station, the Louvre’s 19th-century collection crosses the river to fill it. On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Courbet', role: 'The painter', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'Champfleury', role: 'Named “Realism”', palette: ['#5a4a32', '#2e2418', '#0e0a06'] },
    { name: 'Proudhon', role: 'Radical friend', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
    { name: 'Juliette Courbet', role: 'Sitter; gave it to France', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'The Ornans townsfolk', role: 'The sitters', palette: ['#6a7250', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The hole everyone is here for', where: 'Center foreground, low — the bare turned earth', detail: 'The whole crowd is gathered around this — not a coffin, not a cross, but an open grave painted as a flat black wedge with almost no depth, a void dropped into the dead center where a hero ought to be. The gravedigger kneels patiently beside it in his shirtsleeves, and on the turned earth lie a skull and a scatter of bones, dug up to make room: the bluntest reminder of death there is, with no allegory and no scythe.' },
    { label: 'The one thing pointing up', where: 'Upper left, held against the gray sky', detail: 'A bearer holds a crucifix aloft against the flat gray sky — the single strong vertical in a painting that is otherwise all horizontal line. In a Salon history painting the heavens would open behind it; here the sky just stays gray and gives nothing back.' },
    { label: 'The loudest color in the room', where: 'Left of center, with the clergy — the two figures in red', detail: 'The figures in vivid red are beadles — minor parish officers who keep order at services. Courbet gave the grandest color in the whole painting (the red a history painter would save for a cardinal or a king) to two small-town church ushers with frankly ordinary faces.' },
    { label: 'Two men wearing the wrong decade', where: 'Center, in white stockings and knee breeches', detail: 'Among the men in 1840s mourning black stand two old fellows in the suits and knee breeches of 1793 — the dress of the First Republic, half a century out of fashion. They are real sitters (friends of Courbet’s grandfather): veterans of the Revolution planted in the crowd. In 1850, two years after the barricades, that detail did not feel safe.' },
    { label: 'Grief on the right, a dog who doesn’t care', where: 'The right half (the women); the white dog, center-right foreground', detail: 'The women are massed on the right, some pressing handkerchiefs to their faces — the only open grief in the picture (the artist’s own sisters Juliette, Zoé and Zélie are among them). And down in front, back turned to the whole solemn business, a small dog sniffs off toward the edge, completely indifferent. No history painter would have let that animal stay; Courbet gave it the front row.' },
    { label: 'The real rock behind the real people', where: 'The pale band across the top, behind the crowd', detail: 'That pale, chalky wall of limestone is not invented scenery — it is the actual escarpment of the Ornans valley, Courbet’s hometown geology placed behind his hometown neighbors. Almost the same value as the sky, it refuses to recede; it stands up as a near-featureless wall that presses the figures flat against the viewer.' },
  ],
  lineage: {
    parents: [ { label: 'Dutch group portrait', mode: 'art' }, { label: 'The 1848 Revolution', mode: 'civ' }, { label: 'The Stone Breakers', mode: 'art' } ],
    children: [ { label: 'Realism', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'Édouard Manet', mode: 'art' } ],
  },
}

export const ART_ERA_CONTENT: Record<string, ArtEraContent> = { mod: MODERN_ERA }
export const ART_MOVEMENT_CONTENT: Record<string, ArtMovementContent> = { real: REALISM, cubism: CUBISM }
export const ART_WORK_CONTENT: Record<string, ArtWorkContent> = { burial: BURIAL, demoiselles: DEMOISELLES, kahnweiler: KAHNWEILER, 'chair-caning': CHAIR_CANING, horta: HORTA, 'violin-jug': VIOLIN_JUG, 'three-women': THREE_WOMEN, 'the-portuguese': THE_PORTUGUESE, 'gris-breakfast': GRIS_BREAKFAST, 'three-musicians': THREE_MUSICIANS }
export const ART_ARTIST_CONTENT: Record<string, ArtArtistContent> = { picasso: PICASSO }
