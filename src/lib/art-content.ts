// art-content.ts, the authored content for the Art vertical's first vertical
// slice: the Modern era → Cubism movement → Les Demoiselles d'Avignon work →
// Picasso artist. Ported from the mockup (art-data.jsx). All other eras/
// movements render a "coming soon" state until authored.
//
// Numbers carried over from the mockup are FLAGGED where they look like
// generated filler (see audits/art-vertical.md §8), verify before shipping.
// Images use Wikimedia Special:FilePath URLs with a palette fallback.

import { ART_ACCENTS } from './art-data'

export type Palette = [string, string, string]

// A hero image cell. `focus` is the CSS object-position (e.g. '50% 20%') used to
// frame a deliberate landscape *detail* of a tall work without cutting content.
export interface HeroImage { src: string; focus?: string }

// Verified image URLs, resolved via the MediaWiki API and load-checked (200,
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
  // EN-tier (US public domain, pre-1931, inline OK)
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
  // Salon hang (Martini after Ramberg, 1787, PD worldwide; the hang barely
  // changed by 1850) and the smooth academic nude it rewarded (Cabanel, 1863).
  // SELF-HOSTED: the Met scan sits on a dark mount and carries an engraved caption
  // strip; both were trimmed so the artwork FILLS a card frame (cover-crop) rather
  // than showing border/caption. Source: commons MM43349, cropped to the scene.
  salonHang: '/art/salon-1787.jpg',
  cabanelVenus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg/1280px-Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg',
  // "Why this is a break" predecessor foils (born-verified 2026-05-25, PD; subjects eyeballed).
  ingresOdalisque: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg/960px-Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg',
  davidHoratii: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg/960px-Jacques-Louis_David_-_Oath_of_the_Horatii_-_Google_Art_Project.jpg',
  // Portrait-orientation works, for the orientation-aware card prototype (these
  // sit image-LEFT / text-right; landscape/square works sit image-on-top).
  matisseHat: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Matisse-Woman-with-a-Hat.jpg/960px-Matisse-Woman-with-a-Hat.jpg',
  seuratGrandeJatte: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg',
  gauguinVision: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/La_vision_apr%C3%A8s_le_sermon_%28Paul_Gauguin%29.jpg/1280px-La_vision_apr%C3%A8s_le_sermon_%28Paul_Gauguin%29.jpg',
  vanGoghSelf: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
  monetCathedral: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Claude_Monet%2C_Rouen_Cathedral%2C_West_Fa%C3%A7ade%2C_Sunlight%2C_1894%2C_NGA_46654.jpg/1280px-Claude_Monet%2C_Rouen_Cathedral%2C_West_Fa%C3%A7ade%2C_Sunlight%2C_1894%2C_NGA_46654.jpg',
  apollinaire: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Guillaume_Apollinaire_1914.jpg',
  matisseDance: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Henri_Matisse%2C_1909%2C_La_danse_%28I%29%2C_Museum_of_Modern_Art.jpg/1280px-Henri_Matisse%2C_1909%2C_La_danse_%28I%29%2C_Museum_of_Modern_Art.jpg',
  // ── Fauvism movement figures (born-verified 2026-06-18; subjects eyeballed) ──
  // Paintings are 1872–1908; pre-1930 reproductions = US-PD. Monet d.1926 / Van
  // Gogh d.1890 = PD worldwide; the Fauve painters (Matisse/Derain/Vlaminck/Dufy
  // d.1953–58) are US-PD via pre-1930 publication.
  monetRegatta: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Claude_Monet_-_Regattas_at_Argenteuil_-_Google_Art_Project.jpg/1280px-Claude_Monet_-_Regattas_at_Argenteuil_-_Google_Art_Project.jpg',
  matisseGreenStripe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Matisse_-_Green_Line.jpeg/1280px-Matisse_-_Green_Line.jpeg',
  matisseLuxe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Matisse-Luxe.jpg/1280px-Matisse-Luxe.jpg',
  matisseOpenWindow: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Matisse-Open-Window.jpg/960px-Matisse-Open-Window.jpg',
  matisseBonheur: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Bonheur_Matisse.jpg',
  matisseBlueNude: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Matisse_Souvenir_de_Biskra.jpg',
  derainCharingCross: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Derain_CharingCrossBridge.png',
  derainTurningRoad: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/The_Turning_Road%2C_L%C2%B4Estaque.jpg',
  // The exact "Restaurant de la Machine at Bougival" is not on Wikimedia; a sibling
  // 1906 Vlaminck Fauve canvas (the Seine at Chatou, where he had his studio) stands in.
  vlaminckChatou: 'https://upload.wikimedia.org/wikipedia/en/2/21/SeineChatou.JPG',
  dufyRuePavoisee: 'https://upload.wikimedia.org/wikipedia/commons/4/40/La_Rue_pavois%C3%A9e.jpg',
  marquetFauve: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Posters_at_Trouville_Albert_Marquet_%281906%29.jpg',
  // Artist portrait photos (pre-1930 = US-PD). Vlaminck + Marquet have no PD photo
  // on Commons → gradient fallback in the artists row.
  matissePhoto: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Henri_Matisse_photo_taken_by_Carl_Van_Vechten.jpg',
  derainPhoto: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Andr%C3%A9_Derain_1928.jpg',
  dufyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Raoul_Dufy%2C_portrait_photograph.jpg',
  vanDongenPhoto: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Kees_van_Dongen_1923.jpg',
  // ── Futurism movement figures (born-verified 2026-06-18; subjects eyeballed) ──
  // Works are 1901–1915; pre-1930 reproductions = US-PD. Boccioni d.1916 +
  // Pellizza d.1907 = PD worldwide; Balla d.1958 / Carrà + Severini d.1966 /
  // Russolo d.1947 works are US-PD via pre-1930 publication (several hosted on
  // en.wikipedia rather than Commons because they are not yet PD in Italy).
  boccioniStatesFarewells: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Boccioni_-_States_of_Mind_The_Farewells%2C_1911.jpg',
  ballaDog: 'https://upload.wikimedia.org/wikipedia/en/3/36/Giacomo_Balla%2C_1912%2C_Dynamism_of_a_Dog_on_a_Leash%2C_oil_on_canvas%2C_89.8_x_109.8_cm%2C_Albright-Knox_Art_Gallery.jpg',
  severiniBalTabarin: 'https://upload.wikimedia.org/wikipedia/en/3/38/Gino_Severini%2C_1912%2C_Dynamic_Hieroglyphic_of_the_Bal_Tabarin%2C_oil_on_canvas_with_sequins%2C_161.6_x_156.2_cm_%2863.6_x_61.5_in.%29%2C_Museum_of_Modern_Art%2C_New_York.jpg',
  carraGalli: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Funeraloftheanarchistgalli.jpg',
  boccioniCyclist: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Umberto_Boccioni%2C_1913%2C_Dynamism_of_a_Cyclist_%28Dinamismo_di_un_ciclista%29%2C_oil_on_canvas%2C_70_x_95_cm%2C_Gianni_Mattioli_Collection%2C_on_long-term_loan_to_the_Peggy_Guggenheim_Collection%2C_Venice.jpg',
  ballaAbstractSpeed: 'https://upload.wikimedia.org/wikipedia/en/1/12/GBallaArt.jpg',
  russoloAutomobile: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Luigi_Russolo_dynamism-of-a-car-1913.jpg',
  boccioniMateria: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Boccioni_materia_1912.jpg',
  // Unique Forms: the 1913 ORIGINAL is plaster (São Paulo); every bronze is a
  // posthumous 1931+ cast (NOT US-PD), so we show Boccioni's own 1913 study drawing.
  boccioniUniqueFormsStudy: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Boccioni_-_Study_for_Unique_Forms_of_Continuity_in_Space%2C_1913.jpg',
  santeliaCitta: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Centrale_elettrica_Sant%27Elia.jpg',
  russoloIntonarumori: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Luigi_Russolo_and_Ugo_Piatti_in_Milan%2C_Italy%2C_1913.jpg',
  // The break "before": a calm Divisionist tableau that freezes people mid-stride.
  futuQuartoStato: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Quarto_Stato.jpg',
  // The five Futurists in front of Le Figaro, Paris, 9 Feb 1912 (US-PD pre-1931).
  futuristsGroup: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Russolo%2C_Carr%C3%A0%2C_Marinetti%2C_Boccioni_and_Severini_in_front_of_Le_Figaro%2C_Paris%2C_9_February_1912.jpg',
  marinettiPhoto: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Emilio_Sommariva_%281883_-_1956%29_Ritratto_di_Filippo_Tommaso_Marinetti%2C_intellettuale_futurista_%281913%29.jpg',
  boccioniPhoto: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Emilio_Sommariva_%281883_-_1956%29_Ritratto_del_pittore_Umberto_Boccioni_%281914%29.jpg',
  severiniPhoto: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Gino_Severini.jpg',
  carraPhoto: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Carr%C3%A0_in_front_of_Le_Figaro%2C_Paris%2C_9_February_1912_%28cropped%29.jpg',
  // ── Dada movement figures (born-verified 2026-06-18; subjects eyeballed) ──
  // Works 1913–1921; pre-1930 reproductions = US-PD. Several are en-hosted (non-free
  // in source country, US-PD by pre-1930 publication). Many canonical Dada works
  // survive only as post-1930 replicas / destroyed (Bicycle Wheel, Man Ray Gift +
  // Indestructible Object, Merzbau, Cherry Picture, Arp's chance collage, Taeuber's
  // Dada Head) so they are listed name-only with no inlineable PD image.
  monaLisa: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg/960px-Leonardo_da_Vinci_-_Mona_Lisa_%28Louvre%2C_Paris%29.jpg',
  picabiaStieglitz: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Francis_Picabia%2C_Ici%2C_c%27est_ici_Stieglitz%2C_foi_et_amour%2C_cover_of_291%2C_No1%2C_1915.jpg',
  duchampLhooq: 'https://upload.wikimedia.org/wikipedia/en/7/74/Marcel_Duchamp%2C_1919%2C_L.H.O.O.Q.jpg',
  hochKnife: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Hoch-Cut_With_the_Kitchen_Knife.jpg',
  hausmannHead: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Mechanical_Head_%28The_Spirit_of_Our_Time%29%2C_assemblage_circa_1920.png',
  ernstHatMan: 'https://upload.wikimedia.org/wikipedia/en/0/02/The_Hat_Makes_the_Man.jpg',
  ernstCelebes: 'https://upload.wikimedia.org/wikipedia/en/2/2b/The_Elephant_Celebes.jpg',
  picabiaVierge: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Francis_Picabia%2C_1920%2C_La_Sainte_Vierge_%28The_Blessed_Virgin%29%2C_ink_and_graphite_on_paper%2C_33_x_24_cm%2C_Mus%C3%A9e_National_d%27Art_Moderne%2C_Paris.jpg',
  groszDaum: 'https://upload.wikimedia.org/wikipedia/en/d/d0/George_Grosz%2C_Daum_marries_her_pedantic_automaton_George_in_May_1920%2C_John_Heartfield_is_very_glad_of_it%2C_Berlinische_Galerie.jpg',
  picabiaTresRare: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Francis_Picabia%2C_1915_-_Tr%C3%A8s_rare_tableau_sur_la_terre.jpg',
  picabiaFlamenca: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Francis_Picabia%2C_Flamenca%2C_391%2C_n._3%2C_March_1%2C_1917.jpg',
  dadaGroup1920: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Dada_artists%2C_group_photograph%2C_1920%2C_Paris.jpg',
  ballCostume: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Hugo_Ball_Cabaret_Voltaire.jpg',
  tzaraPhoto: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Tristan_Tzara_Photo_of_Artist_in_Zurich.jpg',
  arpPhotoDada: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Hans_Arp.JPG',
  duchampPhoto: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Five-Way_Portrait_of_Marcel_Duchamp%2C_21_June_1917%2C_New_York_City.jpg',
  // ── Surrealism: de Chirico Metaphysical anchors (born-verified 2026-06-18) ──
  // de Chirico d.1978, but his 1909–1919 works reproduced before 1930 are US-PD;
  // all en-hosted (still in copyright in Italy until 2049). They are the ONLY
  // inlineable images on the Surrealism page: every actual Surrealist work
  // (Dalí, Magritte, Miró, Ernst, the women) is post-1930 / in-copyright and
  // ships as a RestrictedFigure card or prose only.
  chiricoSongLove: 'https://upload.wikimedia.org/wikipedia/en/1/1b/De_Chirico%27s_Love_Song.jpg',
  chiricoMysteryStreet: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Giorgio_de_Chirico_-_Mystery_and_Melancholy_of_a_Street_(1914).jpg',
  chiricoChildBrain: 'https://upload.wikimedia.org/wikipedia/en/0/07/Giorgio_de_Chirico_-_The_Child%27s_Brain.jpg',
  chiricoGreatMetaphysician: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Giorgio_de_Chirico%2C_1917%2C_Il_grande_metafisico%2C_oil_on_canvas%2C_104.8_x_69.5_cm.jpg',
  chiricoGareMontparnasse: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Gare_Montparnasse_%28The_Melancholy_of_Departure%29_by_Giorgio_de_Chirico.jpg',
  chiricoRedTower: 'https://upload.wikimedia.org/wikipedia/en/b/b2/The_Red_Tower_by_Giorgio_de_Chirico.jpg',
  chiricoSoothsayer: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Giorgio_de_Chirico_-_The_Soothsayer%27s_Recompense.jpg',
  chiricoNostalgiaInfinite: 'https://upload.wikimedia.org/wikipedia/en/6/69/TheNostalgiaoftheInfinite.jpg',
  chiricoEnigmaHour: 'https://upload.wikimedia.org/wikipedia/en/6/68/The_Enigma_of_the_Hour.jpg',
  // ── Abstract Expressionism + Pop Art: US-PD period photos (LoC, "no known
  // restrictions") — the ONLY inlineable images for these two movements, since
  // every canonical work is post-1940 and in copyright. Used as captioned
  // PERIOD CONTEXT (the world the art came out of / mirrored), never as the art.
  abexNYC: 'https://tile.loc.gov/storage-services/service/pnp/ppmsca/69700/69726v.jpg',
  popSupermarket: 'https://tile.loc.gov/storage-services/service/pnp/ppmsca/51700/51713v.jpg',
  popFrozenFoods: 'https://tile.loc.gov/storage-services/service/pnp/ppmsca/51700/51714v.jpg',
  popTimesSquare: 'https://tile.loc.gov/storage-services/service/pnp/ppmsca/69600/69617v.jpg',
  popBillboards: 'https://tile.loc.gov/storage-services/service/pnp/ppmsca/69600/69697v.jpg',
  // ── In-copyright 20th-c. works shown under FAIR USE (low-res educational
  // thumbnails, credited, with a museum/Wikipedia link), the standard posture for
  // art-historical writing and consistent with how Guernica is already handled.
  // These are deliberately small en.wikipedia fair-use files (born-verified by eye
  // 2026-06-18). Used in works strips, canon thumbnails, and RestrictedFigure
  // "Under copyright" cards, never as a large hero.
  // Surrealism
  miroHarlequin: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/The_Harlequin%27s_Carnival.jpg/500px-The_Harlequin%27s_Carnival.jpg',
  massonAuto: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Masson_automatic_drawing.jpg/500px-Masson_automatic_drawing.jpg',
  daliPersistence: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/500px-The_Persistence_of_Memory.jpg',
  magrittePipe: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/MagrittePipe.jpg/500px-MagrittePipe.jpg',
  magritteSonOfMan: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Magritte_TheSonOfMan.jpg',
  oppenheimObject: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Meret_Oppenheim._Object._Paris%2C_1936_-MoMA.png/330px-Meret_Oppenheim._Object._Paris%2C_1936_-MoMA.png',
  carringtonSelf: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Self-Portrait_%28Inn_of_the_Dawn_Horse%29.jpg',
  tanguyDivis: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Indefinite_Divisibility.jpg/500px-Indefinite_Divisibility.jpg',
  daliLobster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Lobster_Telephone_Photo.jpg/500px-Lobster_Telephone_Photo.jpg',
  kahloTwoFridas: 'https://upload.wikimedia.org/wikipedia/en/f/f9/The_Two_Fridas.jpg',
  tanningBirthday: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dorothea_Tanning%2C_%22Birthday%22.jpg/500px-Dorothea_Tanning%2C_%22Birthday%22.jpg',
  // Abstract Expressionism
  pollockAutumn: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Autumn_Rhythm.jpg',
  deKooningWoman: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Woman_I-Willem_de_Kooning.jpg',
  rothkoNo61: 'https://upload.wikimedia.org/wikipedia/en/5/5f/No_61_Mark_Rothko.jpg',
  newmanVir: 'https://upload.wikimedia.org/wikipedia/en/0/06/Vir_Heroicus_Sublimis.jpg',
  newmanOnement: 'https://upload.wikimedia.org/wikipedia/en/2/29/Newman-Onement_1.jpg',
  stillCliff: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Still_1957_D1.jpg',
  gorkyLiver: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/The_Liver_is_the_Cock%27s_Comb_y_Arshile_Gorky%2C_1944.jpg/500px-The_Liver_is_the_Cock%27s_Comb_y_Arshile_Gorky%2C_1944.jpg',
  frankenthalerMtns: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Frankenthaler_Helen_Mountains_and_Sea_1952.jpg/500px-Frankenthaler_Helen_Mountains_and_Sea_1952.jpg',
  motherwellElegy: 'https://upload.wikimedia.org/wikipedia/en/3/32/Robert_Motherwell%27s_%27Elegy_to_the_Spanish_Republic_No._110%27.jpg',
  mitchellUntitled: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Joan_Mitchell_-_Untitled_%281960%29.jpg',
  // Pop Art
  hamiltonHomes: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Hamilton-appealing2.jpg/250px-Hamilton-appealing2.jpg',
  paolozziPlaything: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/I_was_a_Rich_Man%27s_Plaything_1947.jpg/250px-I_was_a_Rich_Man%27s_Plaything_1947.jpg',
  johnsFlag: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Jasper_Johns%27s_%27Flag%27%2C_Encaustic%2C_oil_and_collage_on_fabric_mounted_on_plywood%2C1954-55.jpg/330px-Jasper_Johns%27s_%27Flag%27%2C_Encaustic%2C_oil_and_collage_on_fabric_mounted_on_plywood%2C1954-55.jpg',
  warholSoup: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/500px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg',
  warholMarilyn: 'https://upload.wikimedia.org/wikipedia/en/8/87/Marilyndiptych.jpg',
  warholBrillo: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Brillo-Boxes-by-Andy-Warhol.jpg',
  lichtWhaam: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Roy_Lichtenstein_Whaam.jpg',
  lichtDrowning: 'https://upload.wikimedia.org/wikipedia/en/d/df/Roy_Lichtenstein_Drowning_Girl.jpg',
  // Dada (replicas / destroyed works, fair use)
  duchampBicycle: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Marcel_Duchamp%2C_1916-17_studio_photograph.jpg/330px-Marcel_Duchamp%2C_1916-17_studio_photograph.jpg',
  manRayGift: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/%27Cadeau%27_by_Man_Ray%2C_iron_and_nails%2C_Tate_Modern.JPG/250px-%27Cadeau%27_by_Man_Ray%2C_iron_and_nails%2C_Tate_Modern.JPG',
  manRayIndestructible: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Objectdestroyed.jpg/250px-Objectdestroyed.jpg',
  schwittersMerzbau: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Hanover_Merzbau.jpg/500px-Hanover_Merzbau.jpg',
  taeuberDadaHead: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Dada_Head_by_Sophie_Taeuber-Arp%2C_1920.jpg',
  boccioniCity: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_City_Rises_by_Umberto_Boccioni_1910.jpg/1280px-The_City_Rises_by_Umberto_Boccioni_1910.jpg',
  duchampFountain: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg/1280px-Marcel_Duchamp%2C_1917%2C_Fountain%2C_photograph_by_Alfred_Stieglitz.jpg',
  grisBreakfast: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/1914_Gris_Le_Petit_D%C3%A9jeuner.jpg',
  // EN-tier (US public domain, pre-1931, inline OK)
  braqueFruitDish: 'https://upload.wikimedia.org/wikipedia/en/6/63/Braque_fruitdish_glass.jpg',
  picassoHorta: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/36/Pablo_Picasso%2C_1909%2C_Maisons_%C3%A0_Horta_%28Houses_on_the_Hill%2C_Horta_de_Ebro%29%2C_oil_on_canvas%2C_65_x_81_cm%2C_private_collection.jpg/1280px-Pablo_Picasso%2C_1909%2C_Maisons_%C3%A0_Horta_%28Houses_on_the_Hill%2C_Horta_de_Ebro%29%2C_oil_on_canvas%2C_65_x_81_cm%2C_private_collection.jpg',
  braqueViolinJug: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Georges_Braque%2C_1909-10%2C_Pitcher_and_Violin%2C_oil_on_canvas%2C_116.8_x_73.2_cm%2C_Kunstmuseum_Basel.jpg',
  metzingerTea: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Jean_Metzinger%2C_Le_go%C3%BBter%2C_Tea_Time%2C_1911%2C_75.9_x_70.2_cm%2C_Philadelphia_Museum_of_Art.jpg/1280px-Jean_Metzinger%2C_Le_go%C3%BBter%2C_Tea_Time%2C_1911%2C_75.9_x_70.2_cm%2C_Philadelphia_Museum_of_Art.jpg',
  picassoThreeMusicians: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Pablo_Picasso%2C_1921%2C_Nous_autres_musiciens_%28Three_Musicians%29%2C_oil_on_canvas%2C_204.5_x_188.3_cm%2C_Philadelphia_Museum_of_Art.jpg/1280px-Pablo_Picasso%2C_1921%2C_Nous_autres_musiciens_%28Three_Musicians%29%2C_oil_on_canvas%2C_204.5_x_188.3_cm%2C_Philadelphia_Museum_of_Art.jpg',
  // RESTRICTED, Guernica (1937), NOT US public domain → degraded reference only
  guernica: 'https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg',
  // SELF-HOSTED, Still Life with Chair Caning (1912) is US public domain (pre-1931)
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
  // SELF-HOSTED: Courbet's The Stone Breakers (1849, PD worldwide, Courbet d.1877).
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

  // ── Impressionism movement figures (born-verified 2026-05-25; every file page
  // checked for the right subject/artist/museum; all artists died well before 1931
  // → US-PD, most PD worldwide). COMMONS (free worldwide) unless noted. ──
  // Signature works rail + inline narrative figures (larger size)
  monetGrenouillere: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Claude_Monet_La_Grenouill%C3%A9re.jpg/1280px-Claude_Monet_La_Grenouill%C3%A9re.jpg',
  monetGareSaintLazare: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/La_Gare_Saint-Lazare_-_Claude_Monet.jpg/1280px-La_Gare_Saint-Lazare_-_Claude_Monet.jpg',
  renoirMoulinGalette: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg/1280px-Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg',
  renoirBoatingParty: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/1280px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg',
  degasDanceClass: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edgar_Degas_The_Dance_Class.jpg/1280px-Edgar_Degas_The_Dance_Class.jpg',
  degasAbsinthe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg/1280px-Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg',
  caillebotteParisStreet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/1280px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg',
  morisotCradle: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Berthe_Morisot_008.jpg/1280px-Berthe_Morisot_008.jpg',
  // Break "before", the academy's porcelain ideal (Bouguereau, NOT Cabanel; Realism uses Cabanel)
  bouguereauVenus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/William-Adolphe_Bouguereau_%281825-1905%29_-_The_Birth_of_Venus_%281879%29.jpg/1280px-William-Adolphe_Bouguereau_%281825-1905%29_-_The_Birth_of_Venus_%281879%29.jpg',
  // Canon thumbnails (500px)
  renoirGrenouillere: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Auguste_Renoir_-_La_Grenouill%C3%A8re_-_Google_Art_Project.jpg/500px-Auguste_Renoir_-_La_Grenouill%C3%A8re_-_Google_Art_Project.jpg',
  pissarroHoarfrost: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Camille_Pissarro%2C_Gelee_blanche_%28Hoarfrost%29%2C_1873.jpg/500px-Camille_Pissarro%2C_Gelee_blanche_%28Hoarfrost%29%2C_1873.jpg',
  monetBoulevardCapucines: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Claude_Monet%2C_1873-74%2C_Boulevard_des_Capucines%2C_oil_on_canvas%2C_80.3_x_60.3_cm%2C_Nelson-Atkins_Museum_of_Art%2C_Kansas_City.jpg/500px-Claude_Monet%2C_1873-74%2C_Boulevard_des_Capucines%2C_oil_on_canvas%2C_80.3_x_60.3_cm%2C_Nelson-Atkins_Museum_of_Art%2C_Kansas_City.jpg',
  caillebotteFloorPlaners: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg/500px-Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg',
  manetBar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg/500px-%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg',
  degasLittleDancer: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Edgar_Degas%2C_Little_Dancer_Aged_Fourteen%2C_1878-1881%2C_NGA_110292.jpg/500px-Edgar_Degas%2C_Little_Dancer_Aged_Fourteen%2C_1878-1881%2C_NGA_110292.jpg',
  cassattBlueArmchair: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Cassat_-_Blue_Armchair_NGA.jpg/500px-Cassat_-_Blue_Armchair_NGA.jpg',
  cassattChildBath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg/500px-Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg',
  morisotIsleWight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Berthe_Morisot_-_Eug%C3%A8ne_Manet_%C3%A0_l%27%C3%AEle_de_Wight.jpg/500px-Berthe_Morisot_-_Eug%C3%A8ne_Manet_%C3%A0_l%27%C3%AEle_de_Wight.jpg',
  sisleyBridge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/The_Bridge_at_Villeneuve-la-Garenne_MET_DT1040.jpg/500px-The_Bridge_at_Villeneuve-la-Garenne_MET_DT1040.jpg',
  sisleyFloods: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Sisley%2C_Alfred_-_L%27Inondation_%C3%A0_Port-Marly_RF_2020.jpg/500px-Sisley%2C_Alfred_-_L%27Inondation_%C3%A0_Port-Marly_RF_2020.jpg',
  monetHaystacks: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/500px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg',
  gonzalesLoge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Eva_Gonzal%C3%A8s_-_Une_loge_aux_Italiens.jpg/500px-Eva_Gonzal%C3%A8s_-_Une_loge_aux_Italiens.jpg',
  monetParasol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/500px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg',
  // Lineage + parallels chips (500px representative PD works)
  hokusaiWave: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Great_Wave_off_Kanagawa2.jpg/500px-Great_Wave_off_Kanagawa2.jpg',
  cezanneMontSainteVictoire: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Mont_Sainte-Victoire_with_Large_Pine%2C_by_Paul_C%C3%A9zanne.jpg/500px-Mont_Sainte-Victoire_with_Large_Pine%2C_by_Paul_C%C3%A9zanne.jpg',
  whistlerNocturne: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/James_Abbot_McNeill_Whistler_006.jpg/500px-James_Abbot_McNeill_Whistler_006.jpg',
  // Artist headshots (PD portraits/self-portraits; subjects eyeballed)
  monetPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/500px-Claude_Monet_1899_Nadar_crop.jpg',
  renoirPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg/500px-Pierre_Auguste_Renoir%2C_uncropped_image.jpg',
  pissarroPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pissarro-portrait.jpg/500px-Pissarro-portrait.jpg',
  sisleyPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Alfred_Sisley_photo_full.jpg/500px-Alfred_Sisley_photo_full.jpg',
  degasPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Self-portrait_by_Edgar_Degas.jpg/500px-Self-portrait_by_Edgar_Degas.jpg',
  morisotPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Morisot_berthe_photo.jpg/500px-Morisot_berthe_photo.jpg',
  cassattPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mary_Cassatt_photograph_1913.jpg/500px-Mary_Cassatt_photograph_1913.jpg',
  manetPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/500px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg',
  caillebottePhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Caillebotteautoportrait.jpg/500px-Caillebotteautoportrait.jpg',
  bazillePhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fr%C3%A9d%C3%A9ric_Bazille_004.jpg/500px-Fr%C3%A9d%C3%A9ric_Bazille_004.jpg',

  // ── Post-Impressionism (born-verified 2026-05-25; every URL HEAD-checked 200 OK;
  // every artist died well before 1931 → US-PD, most PD worldwide). All COMMONS
  // unless noted. Signature works (1280px), canon + lineage chips (500–1280px),
  // artist headshots (500px). Subjects eyeballed against each file page. ──
  seuratBathersAsnieres: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Baigneurs_a_Asnieres.jpg/1280px-Baigneurs_a_Asnieres.jpg',
  vanGoghBedroomArles: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg',
  gauguinWhereDoWeComeFrom: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Paul_Gauguin_-_D%27ou_venons-nous.jpg/1280px-Paul_Gauguin_-_D%27ou_venons-nous.jpg',
  cezanneCardPlayers: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg/1280px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg',
  // Philadelphia "from Les Lauves" version (preferred for the break/after pair)
  cezanneMontSainteVictoireLauves: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg/1280px-Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_Google_Art_Project.jpg',
  lautrecMoulinRouge: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Henri_de_Toulouse-Lautrec%2C_At_the_Moulin_Rouge.jpg/1280px-Henri_de_Toulouse-Lautrec%2C_At_the_Moulin_Rouge.jpg',
  cezanneAppleOranges: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nature_morte_aux_pommes_et_aux_oranges%2C_par_Paul_C%C3%A9zanne.jpg/1280px-Nature_morte_aux_pommes_et_aux_oranges%2C_par_Paul_C%C3%A9zanne.jpg',
  cezanneBoyRedVest: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Le_Gar%C3%A7on_au_gilet_rouge%2C_par_Paul_C%C3%A9zanne%2C_FWN_496.jpg/1280px-Le_Gar%C3%A7on_au_gilet_rouge%2C_par_Paul_C%C3%A9zanne%2C_FWN_496.jpg',
  vanGoghBandagedEar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg/1280px-Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg',
  vanGoghSunflowers: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/1280px-Vincent_Willem_van_Gogh_127.jpg',
  vanGoghWheatfieldCrows: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg/1280px-Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg',
  vanGoghCafeTerraceNight: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/1280px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG',
  vanGoghNightCafe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/1280px-Vincent_Willem_van_Gogh_076.jpg',
  gauguinYellowChrist: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Paul_Gauguin_-_The_Yellow_Christ_%28Le_Christ_jaune%29_1889.jpg/1280px-Paul_Gauguin_-_The_Yellow_Christ_%28Le_Christ_jaune%29_1889.jpg',
  gauguinSpiritDead: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Paul_Gauguin-_Manao_tupapau_%28The_Spirit_of_the_Dead_Keep_Watch%29.JPG/1280px-Paul_Gauguin-_Manao_tupapau_%28The_Spirit_of_the_Dead_Keep_Watch%29.JPG',
  seuratCircus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Georges_Seurat%2C_1891%2C_Le_Cirque_%28The_Circus%29%2C_oil_on_canvas%2C_185_x_152_cm%2C_Mus%C3%A9e_d%27Orsay.jpg/1280px-Georges_Seurat%2C_1891%2C_Le_Cirque_%28The_Circus%29%2C_oil_on_canvas%2C_185_x_152_cm%2C_Mus%C3%A9e_d%27Orsay.jpg',
  lautrecSalonRueMoulins: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Au_Salon_de_la_rue_des_Moulins_-_Henri_de_Toulouse-Lautrec.jpg/1280px-Au_Salon_de_la_rue_des_Moulins_-_Henri_de_Toulouse-Lautrec.jpg',
  lautrecMoulinPoster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Henri_de_Toulouse-Lautrec%2C_Moulin_Rouge_-_La_Goulue%2C_1891_-_The_Metropolitan_Museum_of_Art.jpg/1280px-Henri_de_Toulouse-Lautrec%2C_Moulin_Rouge_-_La_Goulue%2C_1891_-_The_Metropolitan_Museum_of_Art.jpg',
  rousseauDream: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Henri_Rousseau_-_Le_R%C3%AAve_-_Google_Art_Project.jpg/1280px-Henri_Rousseau_-_Le_R%C3%AAve_-_Google_Art_Project.jpg',
  bonnardNudeBath: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Pierre_Bonnard_-_Nu_dans_le_bain.jpg/1280px-Pierre_Bonnard_-_Nu_dans_le_bain.jpg',
  vuillardMotherSister: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Int%C3%A9rieur%2C_m%C3%A8re_et_s%C5%93ur_de_l%27artiste%2C_par_%C3%89douard_Vuillard.jpg/1280px-Int%C3%A9rieur%2C_m%C3%A8re_et_s%C5%93ur_de_l%27artiste%2C_par_%C3%89douard_Vuillard.jpg',
  serusierTalisman: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Paul_S%C3%A9rusier_-_The_Talisman_-_Google_Art_Project.jpg/1280px-Paul_S%C3%A9rusier_-_The_Talisman_-_Google_Art_Project.jpg',
  redonCyclops: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Odilon_Redon_-_The_Cyclops%2C_c._1914.jpg/1280px-Odilon_Redon_-_The_Cyclops%2C_c._1914.jpg',
  signacFelixFeneon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Signac_-_Portrait_de_F%C3%A9lix_F%C3%A9n%C3%A9on.jpg/1280px-Signac_-_Portrait_de_F%C3%A9lix_F%C3%A9n%C3%A9on.jpg',
  morisotLate: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Eugene_Manet_and_His_Daughter_at_Bougival_1881_Berthe_Morisot.jpg/1280px-Eugene_Manet_and_His_Daughter_at_Bougival_1881_Berthe_Morisot.jpg',
  denisMuses: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Les_Muses%2C_par_Maurice_Denis.jpg/1280px-Les_Muses%2C_par_Maurice_Denis.jpg',
  redonNoir: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Redon_-_The_Eye%2C_Like_a_Strange_Balloon_Moves_Towards_Infinity%2C_plate_one_from_To_Edgar_Poe%2C_1920.1570.jpg/1280px-Redon_-_The_Eye%2C_Like_a_Strange_Balloon_Moves_Towards_Infinity%2C_plate_one_from_To_Edgar_Poe%2C_1920.1570.jpg',
  redonPastel: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Odilon_Redon_-_Vase_of_Flowers_-_Google_Art_Project.jpg/1280px-Odilon_Redon_-_Vase_of_Flowers_-_Google_Art_Project.jpg',
  // Post-Impressionism artist headshots (PD; subjects eyeballed)
  cezannePhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Paul-Cezanne.jpg/500px-Paul-Cezanne.jpg',
  vanGoghPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
  gauguinPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Paul_Gauguin_1891.png/500px-Paul_Gauguin_1891.png',
  seuratPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Georges_Seurat_1888.jpg/500px-Georges_Seurat_1888.jpg',
  lautrecPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Photolautrec.jpg/500px-Photolautrec.jpg',
  bonnardPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/T%C3%AAte_de_Bonnard_%28Portrait_photograph_of_Pierre_Bonnard%29%2C_c.1899%2C_Mus%C3%A9e_d%27Orsay%2C_restaur%C3%A9e.jpg/500px-T%C3%AAte_de_Bonnard_%28Portrait_photograph_of_Pierre_Bonnard%29%2C_c.1899%2C_Mus%C3%A9e_d%27Orsay%2C_restaur%C3%A9e.jpg',
  vuillardPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Self-Portrait%2C_Aged_21_A21192.jpg/500px-Self-Portrait%2C_Aged_21_A21192.jpg',
  denisPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/MauriceDenis-AutoportraitDevantLePrieure.JPG/500px-MauriceDenis-AutoportraitDevantLePrieure.JPG',
  serusierPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Serusier-picture.jpg/500px-Serusier-picture.jpg',
  signacPhoto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Paul_Signac%2C_ca._1883.jpg/500px-Paul_Signac%2C_ca._1883.jpg',
  // Lineage chips for Post-Impressionism: parent + child foils
  monetWaterLilies: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Reflections_of_Clouds_on_the_Water-Lily_Pond.jpg/1280px-Reflections_of_Clouds_on_the_Water-Lily_Pond.jpg',
  chevreulColorWheel: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Cercle_chromatique_Chevreul_1.jpg/1280px-Cercle_chromatique_Chevreul_1.jpg',
  kirchnerStreet: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kirchner_1913_Street%2C_Berlin.jpg/1280px-Kirchner_1913_Street%2C_Berlin.jpg',
} as const

export interface ArtStat { v: string; k: string }
export interface ArtSide { side?: string; label: string; color: string; motto?: string; detail?: string; members?: string[] }
export interface ArtLineageChip { label: string; mode: 'art' | 'civ' | 'war'; img?: string; palette?: Palette; note?: string }
export interface ArtLineage { parents: ArtLineageChip[]; children: ArtLineageChip[] }

// ─────────────────────────────────────────────────────────────
// Era, Modern (1850–1970)
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
  // "Why this is a break", explicit contrast with the predecessor era (see WhatChanged).
  whatChanged?: WhatChanged
  // "The manifesto", the era's founding document, if it had one (rare at era altitude).
  manifesto?: Manifesto
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
    { v: '18', k: 'Major movements' }, // FLAG: only 10 listed below, reconcile
    { v: '~600', k: 'Canonical works' }, // FLAG: fuzzy filler
  ],
  tensions: [
    { side: 'tradition', label: 'The Academies', color: ART_ACCENTS.amber, motto: 'Beauty has rules, and we know them.', detail: 'Salons, royal academies, art schools, the institutions that defined what a painting was supposed to look like.' },
    { side: 'rupture', label: 'The Avant-Gardes', color: ART_ACCENTS.violet, motto: 'Make it new. Then make it newer.', detail: 'A century of small magazines, group manifestos, gallerists, and a Paris café full of arguments.' },
  ],
  movements: [
    { id: 'real', name: 'Realism', range: '1848–1870', accent: ART_ACCENTS.amber, size: 'm', hook: 'Paint your own century, laborers and peasants, given the wall the Salon kept for gods.', palette: ['#8a7a4a', '#4a3c22', '#14100a'], imageUrl: ART_IMG.milletGleaners, credit: 'Millet, The Gleaners, 1857 · Musée d’Orsay, Paris' },
    { id: 'imp', name: 'Impressionism', range: '1860s–1886', accent: ART_ACCENTS.blue, size: 'l', hook: 'Painting the LIGHT instead of the thing. Outdoors. Quick.', palette: ['#3a6a8a', '#c8c050', '#1c2a30'], imageUrl: ART_IMG.impressionSunrise, credit: 'Monet, Impression, Sunrise · Musée Marmottan Monet, Paris' },
    { id: 'postimp', name: 'Post-Impressionism', range: '1886–1905', accent: ART_ACCENTS.green, size: 'm', hook: 'Putting the structure back. Cézanne in Aix, Van Gogh in Arles, Gauguin in Tahiti.', palette: ['#5a7042', '#8a7848', '#1c1a12'], imageUrl: ART_IMG.vanGoghSelf, portrait: true, credit: 'Van Gogh, Self-Portrait, 1889 · Musée d’Orsay, Paris' },
    { id: 'fauv', name: 'Fauvism', range: '1905–1908', accent: ART_ACCENTS.rust, size: 's', hook: 'Color off the leash. Matisse, three years, four canvases, done.', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'], imageUrl: ART_IMG.matisseHat, portrait: true, credit: 'Matisse, Woman with a Hat, 1905 · SFMOMA, San Francisco' },
    { id: 'cubism', name: 'Cubism', range: '1907–1922', accent: ART_ACCENTS.violet, size: 'xl', hook: 'A face has six sides now. A guitar shows you its strings and its back.', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], imageUrl: ART_IMG.demoiselles, imageAspect: '4500 / 4661', credit: 'Picasso, Les Demoiselles d’Avignon · MoMA, New York' },
    { id: 'fut', name: 'Futurism', range: '1909–1918', accent: ART_ACCENTS.rust, size: 's', hook: 'Italian painters in love with motorcars and speed. It ended in the trenches, and in fascism.', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], imageUrl: ART_IMG.boccioniCity, credit: 'Boccioni, The City Rises, 1910 · MoMA, New York' },
    { id: 'dada', name: 'Dada', range: '1916–1924', accent: ART_ACCENTS.amber, size: 'm', hook: 'A war in the background and a urinal in the foreground.', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'], imageUrl: ART_IMG.duchampFountain, credit: 'Stieglitz, Duchamp’s Fountain, 1917 · The Blind Man' },
    { id: 'sur', name: 'Surrealism', range: '1924–1966', accent: ART_ACCENTS.green, size: 'l', hook: 'The unconscious gets a paintbrush. Freud and a clock that won’t hold its shape.', palette: ['#1c3a6a', '#c8a72a', '#0e1224'], imageUrl: ART_IMG.chiricoRedTower, credit: 'de Chirico, The Red Tower, 1913 · the dream-world Surrealism grew out of' },
    { id: 'abex', name: 'Abstract Expressionism', range: '1943–1960', accent: ART_ACCENTS.blue, size: 'l', hook: 'The action stops being something the painting shows and starts being what makes it.', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'], imageUrl: ART_IMG.abexNYC, credit: '1950s New York (period photo) · where painting’s center moved' },
    { id: 'pop', name: 'Pop Art', range: '1956–1970', accent: ART_ACCENTS.violet, size: 'm', hook: 'A soup can, but with conviction. Warhol’s factory; Lichtenstein’s dots.', palette: ['#ff3e7f', '#1f1f1f', '#7adff0'], imageUrl: ART_IMG.popSupermarket, credit: 'A 1950s supermarket aisle (period photo) · the world Pop made art of' },
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
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.davidHoratii,
      title: 'Before · David, Oath of the Horatii (1784)',
      caption: 'What "great painting" had meant: a clear story from antiquity, idealized heroic bodies, textbook one-point perspective, the finish flawless, art as a window onto a noble world.',
    },
    after: {
      img: ART_IMG.kandinskyComp7,
      title: 'After · Kandinsky, Composition VII (1913)',
      caption: 'No legible subject, no window, colour, line and force alone. Within two generations, painting had stopped depicting the visible world.',
    },
    prose: [
      'Before 1850, everyone agreed what painting was for. It opened a window onto a recognizable world, gods, heroes, saints, history, rendered with idealized bodies, believable space and a finish that hid every brushstroke. David’s Oath of the Horatii is that ideal made law: three brothers throw out their arms to swear on the swords their father holds aloft, the architecture recedes in textbook perspective, the drama crystal clear.',
      'The modern era is the slow-motion demolition of that agreement. Realism put real labourers where the gods had been; Impressionism dissolved solid form into light; Cubism broke the single viewpoint; then Kandinsky took the last step and dissolved the subject altogether. The boats, waves and apocalyptic riders he began with vanish into pure colour and line, a picture that refuses to be a window onto anything but itself.',
      'That is the thread that makes 1850–1970 one era and not a string of unrelated styles: each movement attacks a different rule of the old picture, its subjects, its space, its surface, its very duty to depict, until almost nothing of the window is left. Modern art isn’t a single look. It is the century painting spent taking itself apart.',
    ],
  },
  sections: [
    { id: 'land', eyebrow: 'Lay of the land', dateLabel: 'c. 1850', title: 'The world before the revolt', blurb: 'One ladder, owned by the State, and the modern world quietly loading the gun to kick it over.', progress: 0 },
    { id: 'salon', eyebrow: 'The setup', dateLabel: '1850–1870', title: 'The Salon and its enemies', blurb: 'Who gets to decide what a painting is for, and the painters who stopped asking permission.', progress: 1 / 7 },
    { id: 'light', eyebrow: 'Impressionism', dateLabel: '1860s–1886', title: 'Painting the light', blurb: 'A handful of friends quit painting the thing and start painting the light falling on it.', progress: 2 / 7 },
    { id: 'structure', eyebrow: 'Post-Impressionism', dateLabel: '1886–1905', title: 'Putting the structure back', blurb: 'Cézanne, Van Gogh and Gauguin decide light was not enough, and go looking for what holds a picture up.', progress: 3 / 7 },
    { id: 'break', eyebrow: 'Fauvism & Cubism', dateLabel: '1905–1914', title: 'Breaking the picture', blurb: 'First color comes off the leash, then perspective itself is repealed. The window shatters.', progress: 4 / 7 },
    { id: 'manifesto', eyebrow: 'The avant-gardes', dateLabel: '1909–1924', title: 'Manifestos and machines', blurb: 'Futurists worship the motorcar; Dada answers the trenches with a urinal. Art picks sides.', progress: 5 / 7 },
    { id: 'unconscious', eyebrow: 'Surrealism', dateLabel: '1924–1940', title: 'The unconscious gets a paintbrush', blurb: 'Between two wars, the dream becomes a subject and Freud gets a studio.', progress: 6 / 7 },
    { id: 'newyork', eyebrow: 'The center moves', dateLabel: '1940–1970', title: 'The center moves to New York', blurb: 'War empties Europe of its painters. America inherits modern art and makes it enormous, then sells it back as soup cans.', progress: 1 },
  ],
}

// City hubs for the era "where it happened" map. Coordinates are SVG viewBox
// units (0–340 wide, 0–224 tall, a schematic, not true geography), with the
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
// Every label reads "● City", dot, then the city name on the same line (name to
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
// Movement, Cubism (1907–1922)
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
// "Canonical works" stat). Name · artist · year only, no descriptions. `wiki`
// is a born-verified link to the work's OWN Wikipedia article, set only when one
// exists (no artist-page fallbacks). `img` is a born-verified thumbnail of the
// work (US-PD; all canon works pre-1931), tapped to open the lightbox.
export interface CanonWork { year: number; name: string; artist: string; wiki?: string; img?: string; nsfw?: boolean; note?: string }

// "Why this is a break", the explicit contrast that proves this is genuinely a NEW
// era/movement, not a relabel. `before` = a representative work of what came just
// before (often OUTSIDE our corpus, e.g. the academic Salon art Realism rejected);
// `after` = a work of this era/movement. `prose` names the concrete rules that
// changed (subjects, finish, scale, viewpoint), not vibes. Both images born-verified;
// prose is gated like all narrative. Rendered as a side-by-side visual contrast +
// the passage. (User directive 2026-05-25; applies to art + music.)
export interface WhatChanged {
  heading?: string
  before: { img: string; title: string; caption: string }
  after: { img: string; title: string; caption: string }
  prose: string[]
}

// "The manifesto", the movement's founding document in its own words (or, when a
// movement deliberately had none, the story of that silence: `absent: true`).
// Quotes are born-verified against the real text and fact-checked like any prose.
export interface Manifesto {
  heading?: string   // defaults to "The manifesto" (or "No manifesto" when absent)
  absent?: boolean   // the movement issued no manifesto (e.g. Cubism), prose tells why
  title?: string     // the document's name
  author?: string    // who wrote it
  dateLabel?: string // year(s)
  venue?: string     // where it first appeared
  quotes?: string[]  // verified excerpt lines, the actual manifesto words
  prose: string[]    // house voice: what it claimed and why it mattered
  sourceUrl?: string   // link to the actual full text (born-verified to resolve + be the right doc)
  sourceLabel?: string // link label (defaults to "Read the full manifesto")
}

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
  // "Why this is a break", explicit contrast with the predecessor (see WhatChanged).
  whatChanged?: WhatChanged
  // "The manifesto", the movement's founding document in its own words (see Manifesto).
  manifesto?: Manifesto
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
  // A portrait diptych, two analytic-Cubism works side by side represent the
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
    { id: 'kahnweiler', year: 1910, name: 'Portrait of Daniel-Henry Kahnweiler', artist: 'Picasso', place: 'Paris', size: 'm', blurb: 'Their dealer, in shards. Analytic Cubism arrives, monochrome, angular, almost unreadable.', palette: ['#5a4a3a', '#2a221c', '#0a0606'], imageUrl: ART_IMG.kahnweiler, credit: 'Picasso, Portrait of Kahnweiler · Art Institute of Chicago' },
    { id: 'violin-jug', year: 1910, name: 'Violin and Jug', artist: 'Braque', place: 'Paris', size: 'm', blurb: 'Braque takes the still life apart. A nail in the corner of the canvas points to what was supposed to be the trompe-l’œil.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.braqueViolinJug, credit: 'Braque, Violin and Jug · Kunstmuseum Basel' },
    { id: 'chair-caning', year: 1912, name: 'Still Life with Chair Caning', artist: 'Picasso', place: 'Paris', size: 'l', blurb: 'A piece of oilcloth printed with chair caning, glued to the canvas. Collage is born; painting will never be only paint again.', palette: ['#b89055', '#3a3020', '#1a1208'], imageUrl: ART_IMG.chairCaning, credit: 'Picasso, Still Life with Chair Caning · Musée Picasso, Paris' },
    { id: 'the-portuguese', year: 1911, name: 'The Portuguese', artist: 'Braque', place: 'Paris', size: 'm', blurb: 'Braque stencils letters straight onto the canvas, the first time type sits on the surface as pure form, and the hinge toward collage.', palette: ['#9a8458', '#4a3f28', '#15110a'], imageUrl: ART_IMG.portuguese, credit: 'Braque, The Portuguese, 1911 · Kunstmuseum Basel' },
    { id: 'gris-breakfast', year: 1914, name: 'Breakfast', artist: 'Juan Gris', place: 'Paris', size: 'm', blurb: 'Gris turns Cubism into a system, pasted wood-grain paper, a torn newspaper, his own name hidden in the headline.', palette: ['#3a6a7a', '#8a6b3a', '#1c2a2e'], imageUrl: ART_IMG.grisLunch, credit: 'Gris, Breakfast (Le Petit Déjeuner), 1914 · MoMA, New York' },
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
    { year: 1915, movement: 'Suprematism', place: 'Petrograd', blurb: 'Malevich shows the Black Square at the 0,10 exhibition. Suprematism begins.' },
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
  manifesto: {
    absent: true,
    prose: [
      'Cubism is the great exception, the movement with no manifesto at all. The two men who invented it, Picasso and Braque, published almost nothing: no program, no slogans, barely an interview. They worked in deliberate near-silence, roped together like mountaineers, and let the paintings do the arguing.',
      'The theory came from other hands entirely. The first real book on the movement, Du Cubisme (1912), was written by two second-wave painters, Albert Gleizes and Jean Metzinger, not by Picasso or Braque. The poet and critic Guillaume Apollinaire, Cubism’s loudest champion, followed with Les Peintres cubistes (1913). And a whole public-facing group, the Salon Cubists of the Section d’Or, exhibited and explained themselves in the open while the two inventors stayed cagey.',
      'So Cubism’s “manifesto” is really a book by its followers and an essay by a friendly critic, the movement explained from the outside in. The silence is the point: Cubism made its case in pictures, not paragraphs.',
    ],
    sourceUrl: 'https://projects.mcah.columbia.edu/arthumanities/websites/picmon/pdf/art_hum_reading_46.pdf',
    sourceLabel: 'Read Du Cubisme (Gleizes & Metzinger, 1912)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.ingresOdalisque,
      title: 'Before · Ingres, La Grande Odalisque (1814)',
      caption: 'What "a nude" had meant for centuries: an idealized body seen from one fixed spot through an invisible window, the brushwork sanded to glass.',
    },
    after: {
      img: ART_IMG.demoiselles,
      title: 'After · Picasso, Les Demoiselles d’Avignon (1907)',
      caption: 'What Picasso did instead: five women built from jagged planes and mask-faces, shown from several angles at once, the deep illusionistic space flattened against the surface.',
    },
    prose: [
      'For five hundred years a painting was a window. You stood in one place, the picture opened onto a believable space, and the painter’s job was to hide the seams, to make a flat cloth read as a room you could step into. Ingres’s odalisque is that tradition at its most polished: one viewpoint, one idealized body, every brushstroke buffed away.',
      'Les Demoiselles d’Avignon smashes the window. The five figures are assembled from hard angular shards; two of the faces are African masks; and bodies are shown from several positions at the same time, a back and a face that no single observer could ever see together. The illusion of depth is gone, pressed flat against the canvas.',
      'That is why Cubism is a new movement and not a new style. It didn’t change how the window looked, it threw the window out. Once a painting could hold many viewpoints at once and admit it was a flat made thing, the single fixed eye that had governed Western art since the Renaissance was finished, and nearly every abstraction that followed walked through the hole Picasso and Braque tore open.',
    ],
  },
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
    { id: 'before', eyebrow: 'Setting', dateLabel: '1906–1908', title: 'Before the cube', blurb: 'A dead painter, a stolen stone head, a room of looted masks, the three things Picasso could not stop looking at.', progress: 1 / 6 },
    { id: 'analytic', eyebrow: 'The partnership', dateLabel: '1909–1911', title: 'Two men, one rope', blurb: 'Picasso and Braque climb the mountain roped together, faceting the world into brown and gray shards.', progress: 2 / 6 },
    { id: 'shards', eyebrow: 'The hermetic peak', dateLabel: '1911–1912', title: 'The world in shards', blurb: 'The pictures get so abstract even the painters get nervous, and the public meets Cubism in a room they were not ready for.', progress: 3 / 6 },
    { id: 'paper', eyebrow: 'A new technique', dateLabel: '1912–1914', title: 'Pasted paper', blurb: 'They glue a scrap of oilcloth to a canvas, and five centuries of painting-as-illusion quietly end.', progress: 4 / 6 },
    { id: 'public', eyebrow: 'The second wave', dateLabel: '1911–1914', title: 'Cubism goes public', blurb: 'The Salon Cubists exhibit, theorise and scandalise, and a freight train of it reaches New York.', progress: 5 / 6 },
    { id: 'after', eyebrow: 'The war and after', dateLabel: '1914–1922', title: 'Mobilisation', blurb: 'In August 1914 the founders are scattered to the front. What they had built was already loose in the world.', progress: 1 },
  ],
}

// Influence Ribbon tracks, artists across years, dots at works, derived for the
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
// Movement, Realism (1848–1870). The Modern era's opening revolt.
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
    'Around 1848 a handful of painters made a deliberate movement out of an almost rude idea: paint the real, ordinary, contemporary world, laborers, peasants, the urban poor, at the size and seriousness the academy had always reserved for myth and kings. It was the first shot in the whole modern revolt, and everything restless that follows is still answering it.',
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
    { side: 'realists', label: 'The Realists', color: ART_ACCENTS.amber, members: ['Courbet', 'Millet', 'Daumier', 'Bonheur'], detail: 'No manifesto-signing club, a loose front who agreed on one thing: paint the real, contemporary world, at full scale and dead serious.' },
    { side: 'academy', label: 'The Academy', color: '#7c6f5a', members: ['The Salon jury', 'Cabanel', 'Bouguereau'], detail: 'The State-run ladder that ranked gods and kings at the top and modern life at the bottom, and policed the one show in France where a career was made.' },
  ],
  works: [
    { id: 'gargantua', year: 1831, name: 'Gargantua', artist: 'Daumier', place: 'Paris', size: 'm', blurb: 'Daumier draws the king as a gluttonous giant gorging on his subjects’ taxes. It earned the cartoonist six months in jail.', palette: ['#8a8074', '#4a4038', '#16120e'], imageUrl: ART_IMG.daumierGargantua, credit: 'Daumier, Gargantua, 1831 · lithograph · Bibliothèque nationale de France' },
    { id: 'stone-breakers', year: 1849, name: 'The Stone Breakers', artist: 'Courbet', place: 'Ornans', size: 'm', blurb: 'Two laborers breaking rock, life-size and dead serious. The original was destroyed in 1945; only reproductions survive.', palette: ['#7a7064', '#42382c', '#15110c'], imageUrl: ART_IMG.courbetStoneBreakers, credit: 'Courbet, The Stone Breakers, 1849 · destroyed 1945 (formerly Gemäldegalerie, Dresden)' },
    { id: 'burial', year: 1850, name: 'A Burial at Ornans', artist: 'Courbet', place: 'Ornans', size: 'xl', blurb: 'A whole village funeral painted ten feet tall and twenty-two wide, the scale the Salon kept for the death of a Greek hero.', palette: ['#6b6354', '#39322a', '#120f0c'], imageUrl: ART_IMG.courbetBurial, credit: 'Courbet, A Burial at Ornans, 1849–50 · Musée d’Orsay, Paris' },
    { id: 'sower', year: 1850, name: 'The Sower', artist: 'Millet', place: 'Barbizon', size: 'm', blurb: 'A lone peasant striding a dusk field, flinging seed. Monumental, almost menacing, two years after the poor toppled a throne.', palette: ['#5a5238', '#332c1e', '#100c08'], imageUrl: ART_IMG.milletSower, credit: 'Millet, The Sower, 1850 · Museum of Fine Arts, Boston' },
    { id: 'studio', year: 1855, name: 'The Painter’s Studio', artist: 'Courbet', place: 'Paris', size: 'l', blurb: 'Courbet at his easel, all of contemporary society sorted into one room. The world’s fair refused it; he built his own tent.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.courbetStudio, credit: 'Courbet, The Painter’s Studio, 1855 · Musée d’Orsay, Paris' },
    { id: 'horse-fair', year: 1855, name: 'The Horse Fair', artist: 'Bonheur', place: 'Paris', size: 'l', blurb: 'The Paris horse market at full gallop, draft horses rearing, handlers straining. You can nearly hear the hooves.', palette: ['#8a7a52', '#4a3c22', '#15110a'], imageUrl: ART_IMG.bonheurHorseFair, credit: 'Bonheur, The Horse Fair, 1852–55 · The Metropolitan Museum of Art, New York' },
    { id: 'gleaners', year: 1857, name: 'The Gleaners', artist: 'Millet', place: 'Barbizon', size: 'l', blurb: 'Three of the poorest women bent over a stripped field, gathering the grain the reapers dropped, painted at the size of heroes.', palette: ['#a8915a', '#5a4a2a', '#1a1410'], imageUrl: ART_IMG.milletGleaners, credit: 'Millet, The Gleaners, 1857 · Musée d’Orsay, Paris' },
    { id: 'angelus', year: 1859, name: 'The Angelus', artist: 'Millet', place: 'Barbizon', size: 'm', blurb: 'Two peasants pause to pray at the evening bell, tiny under an enormous sky. One of the most reproduced images of the century.', palette: ['#7a6a44', '#3e3320', '#12100a'], imageUrl: ART_IMG.milletAngelus, credit: 'Millet, The Angelus, 1857–59 · Musée d’Orsay, Paris' },
    { id: 'carriage', year: 1864, name: 'The Third-Class Carriage', artist: 'Daumier', place: 'Paris', size: 'l', blurb: 'The cheapest class of a railway car, packed with the urban poor, tired, dignified, unsentimental. Modern life, no pity.', palette: ['#53412c', '#2a1f14', '#0c0805'], imageUrl: ART_IMG.daumierCarriage, credit: 'Daumier, The Third-Class Carriage, c.1862–64 · The Metropolitan Museum of Art, New York' },
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
    { year: 1855, movement: 'Exposition Universelle', place: 'Paris', blurb: 'A world’s fair with a grand official art show, and Courbet’s rival one-man Pavilion of Realism pitched right beside it.' },
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
  manifesto: {
    title: 'The “Realist Manifesto”',
    author: 'Gustave Courbet',
    dateLabel: '1855',
    venue: 'preface to the catalogue of his Pavilion of Realism, Paris',
    quotes: [
      'The title of Realist was thrust upon me just as the title of Romantic was imposed upon the men of 1830.',
      'To be in a position to translate the customs, the ideas, the appearance of my epoch, according to my own estimation; to be not only a painter, but a man as well; in short, to create living art, this is my goal.',
    ],
    prose: [
      'Realism’s manifesto is not a sheet with a dozen signatures. It is a single page Courbet wrote to hand out at the door of his own tent, the Pavilion of Realism he threw up beside the 1855 world’s fair after its jury rejected his two biggest canvases (the Painter’s Studio and the Burial). A manifesto smuggled in as an exhibition catalogue.',
      'What it claims is the whole movement in miniature: he did not pick the label, he accepted it; and his one aim is to paint his own century exactly as he finds it, its people, its manners, its look, with no gods borrowed from myth and nothing prettied up. Art made of the present tense. Living art.',
      'A Burial at Ornans had already made that argument in paint five years earlier (its own read in this app); this page just says out loud what the ten-foot canvas had said in oil. The picture declared it first. The catalogue gave it words, and a name.',
    ],
    sourceUrl: 'https://www.gettydocents.org/wp-content/uploads/Gustave-Courbet-Realist-Manifesto.pdf',
    sourceLabel: 'Read Courbet’s Realist Manifesto (1855)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.cabanelVenus,
      title: 'Before · Cabanel, The Birth of Venus (1863)',
      caption: 'What the Salon crowned: a mythological goddess, idealized and weightless, finished so smoothly the brushwork disappears. Napoleon III bought it for himself.',
    },
    after: {
      img: ART_IMG.courbetBurial,
      title: 'After · Courbet, A Burial at Ornans (1850)',
      caption: 'What Courbet did instead: real villagers at a real funeral, ten feet tall and twenty-two wide, the scale reserved for gods, in blunt, palpable paint.',
    },
    prose: [
      'For two centuries French painting ran on a ladder. At the top: history and myth, gods, heroes, saints, kings. At the bottom: ordinary life. The Salon, the one official show that made or broke a career, rewarded the top of the ladder polished to a porcelain shine. Cabanel’s Venus is the perfect specimen, a flawless nude floating on a decorative wave, every brushstroke sanded away, the eroticism made respectable by calling her a goddess. The Emperor hung it in his own collection.',
      'Courbet took the giant canvas size that the academy reserved for the death of a hero and spent it on a village funeral. No goddess, no allegory, no heaven opening overhead, just his own provincial neighbors in mud-black mourning clothes, ringed around an open grave, the paint laid on thick with brush and palette knife so you can see and almost feel every stroke. The faces are plain. The dog is bored. Nothing is idealized.',
      'That is the whole argument of Realism, and it is why it counts as a new movement rather than a new style: the present, ordinary, unbeautiful, contemporary, deserves the scale and seriousness art had always saved for myth. Cabanel and Courbet hung in the same Paris a few years apart, and they are on opposite planets. The break wasn’t a new brush or a new color. It was throwing out the ladder.',
    ],
  },
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
    // The Origin of the World, kept + linked, but with NO inline thumbnail and an
    // "explicit" tag, so tapping through to Courbet's explicit work is informed, not a surprise.
    { year: 1866, name: 'The Origin of the World', artist: 'Courbet', wiki: "L'Origine du monde", nsfw: true },
    { year: 1869, name: 'Woman with a Pearl', artist: 'Corot', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Camille_Corot_-_Woman_with_a_Pearl.jpg/500px-Camille_Corot_-_Woman_with_a_Pearl.jpg' },
    { year: 1872, name: 'The Trout', artist: 'Courbet', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Courbet_-_La_truite_Musee_Orsay.jpg/500px-Courbet_-_La_truite_Musee_Orsay.jpg' },
  ],
  sections: [
    { id: 'why', eyebrow: 'The demand', dateLabel: '1848', title: 'Why Realism', blurb: 'A revolution puts ordinary people in the foreground of history, and a generation of painters asks why they’re only ever scenery.', progress: 1 / 6 },
    { id: 'gauntlet', eyebrow: 'Courbet', dateLabel: '1849–1850', title: 'Courbet’s gauntlet', blurb: 'Two laborers breaking rock and a whole village funeral, painted at the scale the Salon kept for gods. The scandal of dignifying nobodies.', progress: 2 / 6 },
    { id: 'pavilion', eyebrow: 'The manifesto', dateLabel: '1855', title: 'The Pavilion and the Manifesto', blurb: 'Refused by the world’s fair, Courbet builds his own tent across the street, charges admission, and gives the movement its name.', progress: 3 / 6 },
    { id: 'peasants', eyebrow: 'Millet', dateLabel: '1850–1859', title: 'Millet’s peasants', blurb: 'Out at Barbizon, the quiet half of Realism paints the rural poor as fact and as sacrament, and frightens the critics doing it.', progress: 4 / 6 },
    { id: 'city', eyebrow: 'Daumier', dateLabel: '1831–1864', title: 'Daumier’s city', blurb: 'A caricaturist jailed for mocking the king drags Realism into the modern town, its crowds, its politicians, its third-class poor.', progress: 5 / 6 },
    { id: 'reach', eyebrow: 'Bonheur & after', dateLabel: '1853–1877', title: 'Bonheur, and the reach', blurb: 'The most celebrated woman painter of the century, the handoff to Impressionism, and the price Courbet paid for his politics.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Impressionism (1860s–1886). The Modern era's second movement.
// Authored through the art content pipeline (fact pack → Opus draft → 5 critic
// gates → reconcile → revise); narrative in movement-narratives.tsx under 'imp'.
// ─────────────────────────────────────────────────────────────
export const IMPRESSIONISM: ArtMovementContent = {
  id: 'imp',
  name: 'Impressionism',
  range: '1860s–1886',
  span: '~25 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Movements of the Modern era', index: 2, total: 10 },
  hook: 'A critic sneered that wallpaper was more finished. They wore the insult as a name.',
  hookLong:
    'In the Paris of the 1870s these were the canvases the jury rejected and the public came to laugh at, pictures that looked unfinished, smeared, dashed-off, wrong. Their makers were a quarrelsome cooperative who never agreed on a creed, never signed a manifesto, and got their very name from a man making fun of them. This is how a generation that could see the brand-new modern city, its boulevards, railway stations and Sunday boating parties, fought a decade-long war with the official machine that refused to let them paint it, invented a way of putting light itself on canvas, and then, having finally won, woke to find a younger painter had hung the picture that made them, suddenly, look like the past.',
  heroImage: ART_IMG.impressionSunrise,
  heroFit: 'cover',
  heroFocus: '50% 50%',
  heroCredit: 'Monet, Impression, Sunrise, 1872 · Musée Marmottan Monet, Paris',
  stats: [
    { v: '8 shows', k: '1874–1886' },
    { v: '27', k: 'Canonical works' },
    { v: 'Paris', k: 'Centered on' },
  ],
  factions: [
    { side: 'independents', label: 'The Independents', color: ART_ACCENTS.blue, members: ['Monet', 'Renoir', 'Pissarro', 'Degas', 'Morisot', 'Cassatt'], detail: 'No creed, no manifesto, a quarrelsome cooperative (the Société Anonyme) bound by one thing: a wall of their own, outside the Salon, where the modern world could hang unjudged.' },
    { side: 'academy', label: 'The Salon', color: '#7c6f5a', members: ['The Salon jury', 'Bouguereau', 'Gérôme', 'Cabanel'], detail: 'The one State-run show that made or broke a French career, guarded by a jury that prized noble subjects and a porcelain, invisible finish, and read the visible brushstroke as proof a picture wasn’t done.' },
  ],
  works: [
    { id: 'grenouillere', year: 1869, name: 'La Grenouillère', artist: 'Monet', place: 'Bougival', size: 'm', blurb: 'Monet and Renoir set up side by side at a floating river café and each came back with a chop of quick blue-and-white strokes that reads as real moving water, the new way of seeing, invented on the spot.', palette: ['#3a6a8a', '#c8c050', '#1c2a30'], imageUrl: ART_IMG.monetGrenouillere, credit: 'Monet, La Grenouillère, 1869 · The Metropolitan Museum of Art, New York' },
    { id: 'impression-sunrise', year: 1872, name: 'Impression, Sunrise', artist: 'Monet', place: 'Le Havre', size: 'm', blurb: 'A hazy harbor at dawn, sky and water melting into one soft murk, the sun a single fierce dab of orange. A critic mocked the title; the movement took the joke for its name.', palette: ['#3a6a8a', '#c8c050', '#1c2a30'], imageUrl: ART_IMG.impressionSunrise, credit: 'Monet, Impression, Sunrise, 1872 · Musée Marmottan Monet, Paris' },
    { id: 'cradle', year: 1872, name: 'The Cradle', artist: 'Morisot', place: 'Paris', size: 'm', blurb: 'Morisot’s sister Edma watches her own sleeping daughter through gauze netting painted in a few translucent breaths, the female world observed from inside it, by a founding member of the movement.', palette: ['#9aa0a4', '#5a6066', '#1a1e22'], imageUrl: ART_IMG.morisotCradle, credit: 'Morisot, The Cradle, 1872 · Musée d’Orsay, Paris' },
    { id: 'dance-class', year: 1874, name: 'The Dance Class', artist: 'Degas', place: 'Paris', size: 'm', blurb: 'A rehearsal room seen at a tilt, the floor tipping toward you, dancers scattered off-center like a snapshot, Japanese cropping, the caught instant, and not a square inch of open air.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.degasDanceClass, credit: 'Degas, The Dance Class, 1874 · The Metropolitan Museum of Art, New York' },
    { id: 'absinthe', year: 1876, name: 'L’Absinthe', artist: 'Degas', place: 'Paris', size: 'm', blurb: 'Two hollow figures shoved into the corner of a café, the foreground a zig-zag of empty tables, the one note of color the milky-green glass. The loneliness of the modern city, told without comfort.', palette: ['#6a6a58', '#34342a', '#0e0e0a'], imageUrl: ART_IMG.degasAbsinthe, credit: 'Degas, L’Absinthe, 1875–76 · Musée d’Orsay, Paris' },
    { id: 'moulin-galette', year: 1876, name: 'Bal du moulin de la Galette', artist: 'Renoir', place: 'Paris', size: 'l', blurb: 'A Montmartre dance garden dappled with sun through the trees, crowded with a happy Sunday throng, modern leisure painted at the scale the Salon kept for history.', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'], imageUrl: ART_IMG.renoirMoulinGalette, credit: 'Renoir, Bal du moulin de la Galette, 1876 · Musée d’Orsay, Paris' },
    { id: 'gare-saint-lazare', year: 1877, name: 'The Gare Saint-Lazare', artist: 'Monet', place: 'Paris', size: 'l', blurb: 'Steam, glass and iron under a station roof, Monet makes the dirtiest, newest machinery of the modern city into a study of light dissolving in vapor.', palette: ['#5a6a72', '#2e3a42', '#0e1014'], imageUrl: ART_IMG.monetGareSaintLazare, credit: 'Monet, La Gare Saint-Lazare, 1877 · Musée d’Orsay, Paris' },
    { id: 'paris-street', year: 1877, name: 'Paris Street; Rainy Day', artist: 'Caillebotte', place: 'Paris', size: 'xl', blurb: 'Well-dressed Parisians under umbrellas crossing a wet, gleaming boulevard, the cobbles and a wedge of new apartment block rendered with almost architectural precision. Haussmann’s city as the subject.', palette: ['#5a6a72', '#2e3a42', '#0e1014'], imageUrl: ART_IMG.caillebotteParisStreet, credit: 'Caillebotte, Paris Street; Rainy Day, 1877 · Art Institute of Chicago' },
    { id: 'boating-party', year: 1881, name: 'Luncheon of the Boating Party', artist: 'Renoir', place: 'Chatou', size: 'l', blurb: 'A riverside lunch on a balcony, friends and a little dog, light sieving through a striped awning onto wine and skin. The warmth and ease of the new Sunday leisure, at full scale.', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'], imageUrl: ART_IMG.renoirBoatingParty, credit: 'Renoir, Luncheon of the Boating Party, 1880–81 · The Phillips Collection, Washington' },
  ],
  artists: [
    { id: 'monet', name: 'Monet', role: 'The light-chaser', years: '1840–1926', palette: ['#3a6a8a', '#c8c050', '#1c2a30'], photo: ART_IMG.monetPhoto },
    { id: 'renoir', name: 'Renoir', role: 'Warmth & crowds', years: '1841–1919', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'], photo: ART_IMG.renoirPhoto },
    { id: 'pissarro', name: 'Pissarro', role: 'The conscience', years: '1830–1903', palette: ['#6a7250', '#3a3c28', '#14140e'], photo: ART_IMG.pissarroPhoto },
    { id: 'degas', name: 'Degas', role: 'The indoor eye', years: '1834–1917', palette: ['#7a6a4a', '#3a3020', '#100c08'], photo: ART_IMG.degasPhoto },
    { id: 'morisot', name: 'Morisot', role: 'Founder, not footnote', years: '1841–1895', palette: ['#9aa0a4', '#5a6066', '#1a1e22'], photo: ART_IMG.morisotPhoto },
    { id: 'cassatt', name: 'Cassatt', role: 'The American', years: '1844–1926', palette: ['#8a6a6a', '#4a2e2e', '#160e0e'], photo: ART_IMG.cassattPhoto },
    { id: 'sisley', name: 'Sisley', role: 'Pure landscapist', years: '1839–1899', palette: ['#6a7a82', '#3a4248', '#12161a'], photo: ART_IMG.sisleyPhoto },
    { id: 'caillebotte', name: 'Caillebotte', role: 'Painter & patron', years: '1848–1894', palette: ['#5a6a72', '#2e3a42', '#0e1014'], photo: ART_IMG.caillebottePhoto },
    { id: 'manet', name: 'Manet', role: 'The patriarch', years: '1832–1883', palette: ['#6a5a4a', '#332820', '#0e0a06'], photo: ART_IMG.manetPhoto },
    { id: 'bazille', name: 'Bazille', role: 'The lost one', years: '1841–1870', palette: ['#5a6a5a', '#2e3a2e', '#0e120e'], photo: ART_IMG.bazillePhoto },
  ],
  parallels: [
    { year: 1863, movement: 'Salon des Refusés', place: 'Paris', blurb: 'The jury’s rejects get their own overflow show; Manet’s Déjeuner sur l’herbe turns scandal into a rallying point for the young.' },
    { year: 1872, movement: 'Japonisme', place: 'Paris', blurb: 'The critic Philippe Burty names the craze for Japanese woodblock prints, whose flat color and radical cropping are quietly rewiring French composition.' },
    { year: 1886, movement: 'La Grande Jatte', place: 'Paris', blurb: 'Seurat hangs his pointillist epic at the eighth and final Impressionist show, the loose instant answered by the slow, systematic dot.' },
    { year: 1886, movement: 'Durand-Ruel in New York', place: 'New York', blurb: 'The dealer ships the unsold movement across the Atlantic; America buys what Paris still mocks, and the U.S. market opens.' },
  ],
  lineage: {
    parents: [
      { label: 'Realism', mode: 'art', img: ART_IMG.courbetBurial, palette: ['#6b6354', '#39322a', '#120f0c'], note: 'gave: the ordinary present, worth the big canvas' },
      { label: 'Manet', mode: 'art', img: ART_IMG.manetDejeuner, palette: ['#6a5a4a', '#332820', '#0e0a06'], note: 'gave: modern life, blunt paint, the Salon scandal' },
      { label: 'Barbizon landscape', mode: 'art', img: ART_IMG.rousseauOak, palette: ['#6a7250', '#3a3c28', '#14140e'], note: 'gave: the habit of painting outdoors' },
      { label: 'Japanese prints', mode: 'art', img: ART_IMG.hokusaiWave, palette: ['#2a5a6a', '#1c3a42', '#0a1418'], note: 'gave: flat color, daring crops, odd viewpoints' },
    ],
    children: [
      { label: 'Post-Impressionism', mode: 'art', img: ART_IMG.seuratGrandeJatte, palette: ['#3a6a4a', '#c8b84a', '#1c2a18'], note: 'took: the broken stroke, made it a system' },
      { label: 'Cézanne', mode: 'art', img: ART_IMG.cezanneMontSainteVictoire, palette: ['#5a7042', '#8a7848', '#1c1a12'], note: 'took: painting from nature, sought its structure' },
      { label: 'Van Gogh', mode: 'art', img: ART_IMG.starryNight, palette: ['#2a3a6a', '#c8b84a', '#0e1428'], note: 'took: pure color, charged it with feeling' },
      { label: 'Fauvism', mode: 'art', img: ART_IMG.matisseHat, palette: ['#b03a3a', '#5a1c1c', '#1a0808'], note: 'took: bright unmixed color, set it on fire' },
    ],
  },
  influenceSummary: 'Impressionism took Realism’s permission to paint the present, Manet’s blunt modern eye, the Barbizon habit of working outdoors, and the flat daring of the Japanese print, and used them to put fleeting light itself on canvas, handing the loosened brushstroke straight to Post-Impressionism.',
  manifesto: {
    absent: true,
    prose: [
      'Most of the movements in this era arrive with a manifesto in hand, a printed declaration in which the artists state, in plain language, what they are for and what they are against. The Realists had one (Courbet’s catalogue statement, run up like a flag). The Futurists, the Surrealists, nearly everyone who follows, would publish a creed before they published a second painting. Impressionism is the great exception. There is no Impressionist manifesto: no founding document, no signed program, no agreed list of beliefs, because there was never a single agreed belief to write down. They were a cooperative bound together by what they were against (the Salon’s locked door) far more than by any shared doctrine, and they couldn’t even hold that coalition together for eight shows running.',
      'And so the one thing they all share, their name, was not chosen by them at all. It was thrown at them by a hostile critic as a joke, and they shrugged and kept it. A movement with no creed, named by an enemy, held together by exclusion rather than by faith. The thing that should have been a weakness, no party line, no orthodoxy, turns out to be why the work is so various: a Monet harbor, a Degas rehearsal room, a Morisot nursery and a Cassatt mother and child barely look like members of the same school, because there was no school, only a shared front in a long argument with a jury.',
      'The closest anyone came to writing the creed they never wrote was a sympathetic outsider. In 1876, to coincide with the second exhibition, the critic Edmond Duranty, a Realist novelist, a Café Guerbois regular and a close friend of Degas, published a slim pamphlet called La Nouvelle Peinture (“The New Painting”): the first serious attempt to explain these painters to a baffled public. Duranty argued that the new art should abandon the studio-isolated, decorative figure posed like an ornament, and instead show people inseparable from their real surroundings, that, set among the things of a real life, even a person’s back ought to betray a temperament, an age, a social class. But the painters never signed it, never commissioned it, never adopted it; it was Duranty’s own essay, in his own voice, and tellingly he never once used the word “Impressionism.” The nearest thing Impressionism has to a manifesto is a pamphlet the Impressionists didn’t write, didn’t sign, and which pointedly declined to call them what the world would.',
    ],
    sourceUrl: 'https://arthistorians.info/durantyl/',
    sourceLabel: 'Read about Duranty’s “The New Painting” (1876)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.bouguereauVenus,
      title: 'Before · Bouguereau, The Birth of Venus (1879)',
      caption: 'A porcelain Salon goddess, every brushstroke sanded away, lit by a light that comes from nowhere real, the academy’s ideal of finish and idealized light, never alive in any real minute of any real day.',
    },
    after: {
      img: ART_IMG.impressionSunrise,
      title: 'After · Monet, Impression, Sunrise (1872)',
      caption: 'A real harbor at a real dawn caught in a few quick visible strokes, the sun a single fierce dab of orange, finished on the spot in one fleeting moment, “unfinished” by every rule the academy lived by.',
    },
    prose: [
      'Realism had already won the subject fight a generation earlier, it dragged ordinary modern life up onto the big canvas and made it a fit thing to paint. Impressionism’s break is a different one, and a subtler one: a break over three things the academy held sacred, finish, light, and time. Set the Salon’s poreless goddess beside Monet’s harbor and you can watch all three quarrels happen at once.',
      'Start with finish and the stroke. The academic surface is licked, worked and reworked until the paint is seamless and the hand that made it has vanished, so you see a window onto a world, never a layer of pigment. Monet does the opposite on purpose: he leaves the stroke showing, so you can read the speed of his hand in every dab and the sun is plainly a few licks of loaded paint. Then light and color. The academic flesh glows under a soft, even, invented studio light, and its shadows are darker tones of the same skin color; Monet paints the light that was genuinely landing on the water at that one dawn, and builds his shadows from color, blues and violets, not from black. Local color, the label color, gives way to the color that light actually makes.',
      'And finally time, the deepest break of all. The academic picture is outside of time: a posed, eternal, idealized tableau no clock ever ticked through. Monet paints a single passing instant, this dawn, this minute, the mist about to lift, and paints it fast enough to catch it before it goes. The honest caveat is that one limb of this break is not universal: most of the Impressionists abandoned the studio for the riverbank to catch that light in the open air, but Degas never did, he kept the studio and broke the academy on subject, cropping and the caught modern instant instead. So the break is light, finish, and the fleeting moment; open-air painting is its strongest single limb, not the whole of it. What was universal was the verdict the academy handed down on all of them in one word, unfinished, which the Impressionists decided was the truest thing they could be.',
    ],
  },
  canon: [
    { year: 1863, name: 'Le Déjeuner sur l’herbe', artist: 'Manet', img: ART_IMG.manetDejeuner, note: 'A naked woman picnicking with two clothed men, staring straight out with no mythological alibi. Its scandal at the 1863 Salon des Refusés announced that modern life could be a serious subject, and lit the fuse for the whole movement.' },
    { year: 1863, name: 'Olympia', artist: 'Manet', img: ART_IMG.manetOlympia, note: 'A nude who is plainly a contemporary courtesan, not a goddess, meeting your eye in flat, blunt paint. The shock of the 1865 Salon, and the work that made Manet the reluctant father-figure the younger painters gathered around.' },
    { year: 1869, name: 'La Grenouillère', artist: 'Monet', img: ART_IMG.monetGrenouillere, note: 'Painted on the spot beside Renoir at a river café, the water reduced to quick separate dashes, the loose, broken-color sketch treated as a finished picture. This is the new way of seeing being invented in real time.' },
    { year: 1869, name: 'La Grenouillère', artist: 'Renoir', img: ART_IMG.renoirGrenouillere, note: 'Renoir’s view of the same spot, easel to easel with Monet across the summer of 1869, the twin canvas that shows two friends working out Impressionism together, stroke for stroke.' },
    { year: 1872, name: 'Impression, Sunrise', artist: 'Monet', img: ART_IMG.impressionSunrise, note: 'A hazy harbor at dawn with a single orange dab of sun. A hostile critic seized on the loose title to mock the whole show; the painters wore “Impressionism” as their name. The picture that christened the movement.' },
    { year: 1872, name: 'The Cradle', artist: 'Morisot', img: ART_IMG.morisotCradle, note: 'Morisot’s sister Edma watching her own sleeping daughter through gauzy netting, painted in a few translucent breaths. The female world observed from inside it by a founding member, the signature work of what a respectable woman was allowed to show.' },
    { year: 1873, name: 'Hoarfrost', artist: 'Pissarro', img: ART_IMG.pissarroHoarfrost, note: 'A frost-stiff field built from broken strokes and colored shadows, hung in the first 1874 exhibition, where a critic sneered it was all palette-scrapings. Pure Impressionist landscape by the one painter who showed in all eight exhibitions.' },
    { year: 1874, name: 'Boulevard des Capucines', artist: 'Monet', img: ART_IMG.monetBoulevardCapucines, note: 'The new Paris boulevard seen from an upstairs window, the crowd dissolved into flecks of paint, Haussmann’s city as pure modern motion. Shown at the first Impressionist exhibition, 1874.' },
    { year: 1874, name: 'The Dance Class', artist: 'Degas', img: ART_IMG.degasDanceClass, note: 'A rehearsal seen at a tilt, dancers scattered off-center like a snapshot, Japanese cropping and the caught, ungraceful instant, with no plein air at all. Degas’s indoor Impressionism at its purest.' },
    { year: 1875, name: 'The Floor Planers', artist: 'Caillebotte', img: ART_IMG.caillebotteFloorPlaners, note: 'Three shirtless workmen scraping a parquet floor, muscled and anonymous, rejected by the Salon as vulgar, then a sensation at the 1876 exhibition. Modern urban labor at unflinching scale.' },
    { year: 1875, name: 'Woman with a Parasol', artist: 'Monet', img: ART_IMG.monetParasol, note: 'Madame Monet and their son on a windy rise, seen from below against a racing sky, a full figure painted quickly in the open air, light and movement chosen over likeness.' },
    { year: 1875, name: 'Eugène Manet on the Isle of Wight', artist: 'Morisot', img: ART_IMG.morisotIsleWight, note: 'Her husband seated at a window, the garden beyond compressed into bright strokes, a woman painting a man hemmed into a domestic interior, quietly inverting the era’s usual gaze.' },
    { year: 1872, name: 'The Bridge at Villeneuve-la-Garenne', artist: 'Sisley', img: ART_IMG.sisleyBridge, note: 'A sunlit river bridge in clear, calm, broken light, Sisley, the group’s most single-minded pure landscapist, doing the one thing he did better than almost anyone.' },
    { year: 1876, name: 'Bal du moulin de la Galette', artist: 'Renoir', img: ART_IMG.renoirMoulinGalette, note: 'A Montmartre dance garden dappled with sun falling through the trees, painted at the size the Salon kept for history. The great warm crowd-scene of the movement, and modern leisure made monumental.' },
    { year: 1876, name: 'L’Absinthe', artist: 'Degas', img: ART_IMG.degasAbsinthe, note: 'Two hollow figures shoved into the corner of a café, the foreground all empty tables, the one note of color a milky-green glass, the loneliness of the modern city, and the source of an uproar when it was shown in London in 1893, where critics called it a study in degradation.' },
    { year: 1876, name: 'Floods at Port-Marly', artist: 'Sisley', img: ART_IMG.sisleyFloods, note: 'Floodwater turning a village street into a still mirror of the sky, quiet, exact, and now counted the high point of his art, though his prices only soared after he died poor.' },
    { year: 1877, name: 'The Gare Saint-Lazare', artist: 'Monet', img: ART_IMG.monetGareSaintLazare, note: 'Steam, glass and iron under a station roof, Monet turns the dirtiest new machinery of the city into a study of light dissolving in vapor. Modernity itself as the subject, shown at the 1877 exhibition.' },
    { year: 1877, name: 'Paris Street; Rainy Day', artist: 'Caillebotte', img: ART_IMG.caillebotteParisStreet, note: 'A huge, cool, almost photographic canvas of Parisians under umbrellas on a wet new boulevard, Haussmann’s rebuilt city as subject, rendered with an architectural precision the looser Impressionists never aimed for.' },
    { year: 1878, name: 'Little Girl in a Blue Armchair', artist: 'Cassatt', img: ART_IMG.cassattBlueArmchair, note: 'A bored child sprawled sideways in an armchair, a small dog asleep nearby, childhood caught unposed and ungraceful. Cassatt’s breakthrough, painted the year before her 1879 debut with the group, Degas, who had brought her in, even worked on the background himself.' },
    { year: 1874, name: 'A Box at the Théâtre des Italiens', artist: 'Gonzalès', img: ART_IMG.gonzalesLoge, note: 'An elegant couple in a theatre box, painted in the new manner by Manet’s only formal pupil, evidence that the circle’s women, so often dropped from the story, were working at its center.' },
    { year: 1881, name: 'The Little Dancer Aged Fourteen', artist: 'Degas', img: ART_IMG.degasLittleDancer, note: 'A two-thirds-size wax sculpture of a ballet student in a real tutu and real hair, so lifelike it disturbed the 1881 exhibition, critics called her a repulsive monster who belonged in a natural-history museum. Now, in its bronze casts, one of the most beloved objects of the century.' },
    { year: 1881, name: 'Luncheon of the Boating Party', artist: 'Renoir', img: ART_IMG.renoirBoatingParty, note: 'Friends and a little dog at a riverside lunch, light sieving through a striped awning onto wine and skin, the warmth and ease of the new Sunday leisure, painted at full scale.' },
    { year: 1882, name: 'A Bar at the Folies-Bergère', artist: 'Manet', img: ART_IMG.manetBar, note: 'A barmaid facing us, the whole glittering hall behind her in a mirror that doesn’t quite add up. Manet’s last great painting, modern life and modern doubt in a single canvas.' },
    { year: 1891, name: 'Haystacks (End of Summer)', artist: 'Monet', img: ART_IMG.monetHaystacks, note: 'The same grainstacks painted again and again at different hours and seasons, then hung together so the light itself, not the hay, becomes the subject. Impressionism pushed to its serial extreme.' },
    { year: 1893, name: 'The Child’s Bath', artist: 'Cassatt', img: ART_IMG.cassattChildBath, note: 'A woman and child seen from a high, flattened, Japanese-print angle, the two heads bent together over a basin, Cassatt’s masterpiece of the mother-and-child theme she made her own.' },
    { year: 1893, name: 'Rouen Cathedral', artist: 'Monet', img: ART_IMG.monetCathedral, note: 'The cathedral front dissolved into pure colored light, one of a series tracking the same façade from dawn to dusk, solid stone turned into nothing but atmosphere.' },
    { year: 1897, name: 'Boulevard Montmartre', artist: 'Pissarro', img: ART_IMG.pissarroBoulevard, note: 'The grand boulevard seen from a hotel window across the seasons, the eldest Impressionist, late in life, painting the modern city he had helped make a fit subject thirty years earlier.' },
  ],
  sections: [
    { id: 'why', eyebrow: 'The wall', dateLabel: '1860s', title: 'The world that said no', blurb: 'A generation can see the modern city, boulevards, stations, Sunday crowds, but the one official show that makes a career won’t let them paint it.', progress: 1 / 7 },
    { id: 'eye', eyebrow: 'The technique', dateLabel: '1869', title: 'Paint what you actually see', blurb: 'Plein air, broken color, the death of black, the visible stroke, and two friends inventing the new way side by side at a river café.', progress: 2 / 7 },
    { id: 'name', eyebrow: 'The name', dateLabel: 'April 1874', title: 'The seascape they laughed at', blurb: 'Their own show in a borrowed studio, a hazy harbor called Impression, and a critic who turned the title into a joke they decided to wear.', progress: 3 / 7 },
    { id: 'group', eyebrow: 'The group', dateLabel: '1874–1886', title: 'A cooperative at war with itself', blurb: 'Eight shows, Degas the engine and the earthquake, and the dealer who bet everything on them twice, and was saved by America.', progress: 4 / 7 },
    { id: 'women', eyebrow: 'The women', dateLabel: '1870s–1886', title: 'The women, in the rooms they were allowed', blurb: 'Morisot, Cassatt and Gonzalès, founders and operators who did brilliant work against a wall of access the men never had to feel.', progress: 5 / 7 },
    { id: 'degas', eyebrow: 'The indoor eye', dateLabel: '1874–1886', title: 'Degas and the indoor eye', blurb: 'The man who never went outdoors: dancers, laundresses, the café, the bath, Japanese cropping and the caught, off-balance modern instant.', progress: 6 / 7 },
    { id: 'last', eyebrow: 'The end', dateLabel: '1886–1926', title: 'The last show', blurb: 'Late triumphs, Monet’s serial light, the final 1886 show where Seurat’s dots ended it, and France hanging them at last, twenty-three years late.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Post-Impressionism (1886–1905). The Modern era's third movement.
// Authored through the art content pipeline (fact pack → Opus draft → 5 critic
// gates → reconcile → revise); narrative in movement-narratives.tsx under 'postimp'.
// Keyed as 'postimp' (matching MODERN_ERA.movements + the router slug
// /art/mod/postimp); the const itself is named POST_IMP for readability.
// ─────────────────────────────────────────────────────────────
export const POST_IMP: ArtMovementContent = {
  id: 'postimp',
  name: 'Post-Impressionism',
  range: '1886–1905',
  span: '~20 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.green,
  chain: { name: 'Movements of the Modern era', index: 3, total: 10 },
  hook: 'Five painters who never agreed about anything got grouped together by an English critic in a London gallery twenty-four years after the youngest of them had painted his best picture.',
  hookLong:
    '“Post-Impressionism” is one of the strangest labels in art history, because the people inside it were not a movement, did not meet, did not write a manifesto, and were mostly dead by the time anyone called them this. Roger Fry, an English critic with a London gallery to fill in the autumn of 1910, needed an umbrella name for a roomful of French pictures that came after Impressionism but weren’t Fauvism or Cubism yet. He picked Post-Impressionists almost on the fly, and the name stuck to five very different painters working in five different cities, mostly in disagreement with one another, all of them answering Impressionism in their own way. Cézanne wanted weight. Van Gogh wanted feeling. Gauguin wanted flat color and symbol. Seurat wanted science. Toulouse-Lautrec wanted the modern dance hall. Five answers, one room.',
  heroImage: ART_IMG.seuratGrandeJatte,
  heroFit: 'cover',
  heroFocus: '50% 50%',
  heroCredit: 'Seurat, A Sunday on La Grande Jatte, 1884–86 · Art Institute of Chicago',
  stats: [
    { v: '5', k: 'Anchors' },
    { v: '30', k: 'Canonical works' },
    { v: 'Paris → Tahiti', k: 'Centered on' },
  ],
  factions: [
    { side: 'anchors', label: 'The Anchors', color: ART_ACCENTS.green, members: ['Cézanne', 'Van Gogh', 'Gauguin', 'Seurat', 'Lautrec'], detail: 'The five painters Roger Fry put on the wall in London in 1910, Cézanne building weight in Aix, Van Gogh charging color with feeling in Arles, Gauguin flattening symbol in Pont-Aven and Tahiti, Seurat doing color by formula in Paris, Lautrec painting Montmartre at midnight. They worked in five cities, mostly never met, and were all dead by the time Fry named them.' },
    { side: 'field', label: 'The Field', color: ART_ACCENTS.amber, members: ['Bernard', 'Sérusier', 'Bonnard', 'Vuillard', 'Denis', 'Signac', 'Cassatt', 'Morisot', 'Redon', 'Rousseau'], detail: 'The wider cast around the five, Émile Bernard and Sérusier carrying Gauguin’s lesson back to Paris, the Nabis (Bonnard, Vuillard, Denis) painting flat-color interiors, Signac codifying Divisionism after Seurat’s death, Cassatt and the late Morisot working at the center, Redon’s Symbolist dreamworld, Henri Rousseau the self-taught outsider the avant-garde adopted as a forerunner.' },
  ],
  works: [
    { id: 'bathers-asnieres', year: 1884, name: 'Bathers at Asnières', artist: 'Seurat', place: 'Paris', size: 'l', blurb: 'Working-class Parisians sunning themselves on the Seine, six and a half feet tall and nearly ten wide, Salon-scale dignity for a riverbank picnic, and the canvas that opened the first jury-free Salon des Indépendants.', palette: ['#5a7a8a', '#8a8048', '#1c2630'], imageUrl: ART_IMG.seuratBathersAsnieres, credit: 'Seurat, Bathers at Asnières, 1884 · National Gallery, London' },
    { id: 'grande-jatte', year: 1886, name: 'A Sunday on La Grande Jatte', artist: 'Seurat', place: 'Paris', size: 'xl', blurb: 'Two years of work and millions of tiny separate dots, stiff Parisians under flat dappled light, the painting that quietly buried Impressionism at the 8th and last Impressionist show.', palette: ['#3a6a4a', '#c8b84a', '#1c2a18'], imageUrl: ART_IMG.seuratGrandeJatte, credit: 'Seurat, A Sunday on La Grande Jatte, 1884–86 · Art Institute of Chicago' },
    { id: 'vision-sermon', year: 1888, name: 'Vision after the Sermon', artist: 'Gauguin', place: 'Pont-Aven', size: 'm', blurb: 'Breton women in white coiffes coming out of mass, eyes closed in prayer, while Jacob wrestles the angel on a field of pure flat red. Imagination put on the canvas as its own zone, Synthetism made visible.', palette: ['#a8322a', '#5a1c14', '#1a0808'], imageUrl: ART_IMG.gauguinVision, credit: 'Gauguin, Vision after the Sermon, 1888 · Scottish National Gallery, Edinburgh' },
    { id: 'bedroom-arles', year: 1888, name: 'Bedroom in Arles', artist: 'Van Gogh', place: 'Arles', size: 'm', blurb: 'His own small bedroom at the Yellow House, lemon yellow, cobalt blue, brick red, the floor tipped up at the viewer. Painted to welcome Gauguin, who arrived weeks later for the worst nine weeks of either man’s life.', palette: ['#c8a72a', '#3a4a8a', '#1a1408'], imageUrl: ART_IMG.vanGoghBedroomArles, credit: 'Van Gogh, Bedroom in Arles, 1888 · Van Gogh Museum, Amsterdam' },
    { id: 'starry-night', year: 1889, name: 'The Starry Night', artist: 'Van Gogh', place: 'Saint-Rémy', size: 'l', blurb: 'A cypress, a sleeping village and a swirling sky painted in his asylum room at Saint-Paul-de-Mausole, the view from his window remade from memory and imagination. The most reproduced picture in Western art after the Mona Lisa, made in spite of the suffering, not because of it.', palette: ['#2a3a6a', '#c8b84a', '#0e1428'], imageUrl: ART_IMG.starryNight, credit: 'Van Gogh, The Starry Night, 1889 · Museum of Modern Art, New York' },
    { id: 'card-players', year: 1895, name: 'The Card Players', artist: 'Cézanne', place: 'Aix-en-Provence', size: 'm', blurb: 'Two Aix farm laborers at a small table, a bottle between them, looking at their cards in total silence. Peasant gravity given the seriousness Caravaggio would have given a saint.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.cezanneCardPlayers, credit: 'Cézanne, The Card Players, 1894–95 · Musée d’Orsay, Paris' },
    { id: 'moulin-rouge', year: 1895, name: 'At the Moulin Rouge', artist: 'Toulouse-Lautrec', place: 'Paris', size: 'l', blurb: 'A cabaret table at midnight, regulars in the foreground, and the dancer May Milton’s face looming up at the canvas edge, lit a lurid green from below. Japanese-print cropping applied to the Montmartre night.', palette: ['#8a7a4a', '#4a3a22', '#15110a'], imageUrl: ART_IMG.lautrecMoulinRouge, credit: 'Toulouse-Lautrec, At the Moulin Rouge, 1892–95 · Art Institute of Chicago' },
    { id: 'where-do-we-come-from', year: 1898, name: 'Where Do We Come From? What Are We? Where Are We Going?', artist: 'Gauguin', place: 'Tahiti', size: 'xl', blurb: 'A twelve-foot mural Gauguin painted as his testament before an arsenic suicide attempt he survived. Read right-to-left, a baby, an adult reaching for a fruit, an old woman. Birth, life, death.', palette: ['#3a5a4a', '#8a7848', '#1c2418'], imageUrl: ART_IMG.gauguinWhereDoWeComeFrom, credit: 'Gauguin, Where Do We Come From? What Are We? Where Are We Going?, 1897–98 · Museum of Fine Arts, Boston' },
    { id: 'mont-sainte-victoire-lauves', year: 1904, name: 'Mont Sainte-Victoire seen from Les Lauves', artist: 'Cézanne', place: 'Aix-en-Provence', size: 'l', blurb: 'A mountain put back together as architecture, built from blocky planes of color set side by side like masonry. He painted it about thirty times in oil; the late versions stripped almost everything else away.', palette: ['#5a7042', '#8a7848', '#1c1a12'], imageUrl: ART_IMG.cezanneMontSainteVictoireLauves, credit: 'Cézanne, Mont Sainte-Victoire seen from Les Lauves, 1902–04 · Philadelphia Museum of Art' },
  ],
  artists: [
    { id: 'cezanne', name: 'Cézanne', role: 'The architect', years: '1839–1906', palette: ['#5a7042', '#8a7848', '#1c1a12'], photo: ART_IMG.cezannePhoto },
    { id: 'vangogh', name: 'Van Gogh', role: 'Colorist of feeling', years: '1853–1890', palette: ['#c8a72a', '#2a3a6a', '#1a1408'], photo: ART_IMG.vanGoghPhoto },
    { id: 'gauguin', name: 'Gauguin', role: 'The synthesist', years: '1848–1903', palette: ['#a8322a', '#3a5a4a', '#1a0808'], photo: ART_IMG.gauguinPhoto },
    { id: 'seurat', name: 'Seurat', role: 'The scientist', years: '1859–1891', palette: ['#3a6a4a', '#c8b84a', '#1c2a18'], photo: ART_IMG.seuratPhoto },
    { id: 'lautrec', name: 'Toulouse-Lautrec', role: 'The chronicler', years: '1864–1901', palette: ['#8a7a4a', '#4a3a22', '#15110a'], photo: ART_IMG.lautrecPhoto },
    { id: 'bernard', name: 'Bernard', role: 'Synthetist, correspondent', years: '1868–1941', palette: ['#7a5a3a', '#3a2820', '#10080a'] },
    { id: 'serusier', name: 'Sérusier', role: 'Talisman painter', years: '1864–1927', palette: ['#5a6a3a', '#3a3a20', '#10120a'], photo: ART_IMG.serusierPhoto },
    { id: 'bonnard', name: 'Bonnard', role: 'Intimate Nabi', years: '1867–1947', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'], photo: ART_IMG.bonnardPhoto },
    { id: 'vuillard', name: 'Vuillard', role: 'Pattern Nabi', years: '1868–1940', palette: ['#7a6a5a', '#3a3028', '#100c08'], photo: ART_IMG.vuillardPhoto },
    { id: 'denis', name: 'Denis', role: 'The theorist', years: '1870–1943', palette: ['#6a7a5a', '#3a4028', '#10120a'], photo: ART_IMG.denisPhoto },
  ],
  parallels: [
    { year: 1886, movement: '8th Impressionist Exhibition', place: 'Paris', blurb: 'The eighth and last Impressionist group show, above the Maison Dorée on rue Laffitte, where Seurat hung La Grande Jatte and the Impressionist project quietly broke open.' },
    { year: 1888, movement: 'Le Talisman', place: 'Pont-Aven', blurb: 'Paul Sérusier paints a tiny landscape on a cigar-box lid under Gauguin’s instruction, pure color, no naturalism. His Académie Julian classmates name it Le Talisman and call themselves the Nabis.' },
    { year: 1903, movement: 'Salon d’Automne founded', place: 'Paris', blurb: 'A new annual show that quickly becomes modernism’s home, and the venue for the 1907 Cézanne retrospective that lit the fuse for Cubism.' },
    { year: 1907, movement: 'Cézanne retrospective', place: 'Paris', blurb: 'One year after his death, the Salon d’Automne mounts the full Cézanne show, about 56 works. Picasso, Braque, Matisse, Derain all walk through it and come out changed.' },
    { year: 1910, movement: 'Manet and the Post-Impressionists', place: 'London', blurb: 'Roger Fry opens his Grafton Galleries show on 8 November and gives the five painters the name that stuck. Every one of them was already dead.' },
  ],
  lineage: {
    parents: [
      { label: 'Impressionism', mode: 'art', img: ART_IMG.monetWaterLilies, palette: ['#3a6a8a', '#c8c050', '#1c2a30'], note: 'gave: the loosened stroke and modern subject, but only the eye' },
      { label: 'Manet', mode: 'art', img: ART_IMG.manetDejeuner, palette: ['#6a5a4a', '#332820', '#0e0a06'], note: 'gave: the borrowed elder, the original modern scandal' },
      { label: 'Japanese prints', mode: 'art', img: ART_IMG.hokusaiWave, palette: ['#2a5a6a', '#1c3a42', '#0a1418'], note: 'gave: flat color, hard contours, off-center cropping' },
      { label: 'Chevreul / Rood color theory', mode: 'civ', img: ART_IMG.chevreulColorWheel, palette: ['#a83232', '#3a5a8a', '#0a0a0a'], note: 'gave: optical mixing as a science Seurat could use' },
    ],
    children: [
      { label: 'Fauvism', mode: 'art', img: ART_IMG.matisseHat, palette: ['#b03a3a', '#5a1c1c', '#1a0808'], note: 'took: Van Gogh’s emotive color, set it on fire' },
      { label: 'Cubism', mode: 'art', img: ART_IMG.demoiselles, palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], note: 'took: Cézanne’s faceted planes, repealed perspective' },
      { label: 'Expressionism', mode: 'art', img: ART_IMG.kirchnerStreet, palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], note: 'took: Van Gogh + Gauguin, German cities and the German interior' },
      { label: 'Abstraction', mode: 'art', img: ART_IMG.kandinskyComp7, palette: ['#1d4ed8', '#d6cf3f', '#bf2f25'], note: 'took: color and form cut free of the subject' },
    ],
  },
  influenceSummary: 'Post-Impressionism took Impressionism’s loosened stroke and Manet’s modern eye, added the flat color of Japanese prints and the optical science of Chevreul and Rood, and used them to put weight, feeling, meaning and method back into the picture, handing Cézanne to Cubism, Van Gogh and Gauguin to Fauvism and Expressionism, and the whole of it to the abstraction that followed.',
  manifesto: {
    absent: true,
    prose: [
      'Post-Impressionism is the great absence among the era’s manifestos, there isn’t one. The five painters Roger Fry put on the wall in 1910 never met as a group, never signed a program, never even used the word about themselves. Cézanne worked alone in Provence; Van Gogh in Arles, Saint-Rémy, Auvers; Gauguin in Pont-Aven and then Tahiti; Seurat in Paris; Lautrec in Montmartre. They mostly never met (Van Gogh and Gauguin at the Yellow House in 1888 is the famous, terrible exception). By the time anyone called them a movement, four of the five were already dead.',
      'So the “founding documents” of Post-Impressionism are surrogates, written for it from the outside. The first is Roger Fry’s catalogue for Manet and the Post-Impressionists at the Grafton Galleries (London, 8 November 1910 – 15 January 1911), drafted at speed with Desmond MacCarthy as a defense of unfamiliar pictures, the page that named the movement and stuck the name. The second is a private letter Cézanne wrote to a young painter called Émile Bernard on 15 April 1904, kept now at the Courtauld in London. In one sentence, “treat nature by means of the cylinder, the sphere, the cone”, Cézanne handed Picasso, Braque, and a century of art-historical surveys the line they would quote when they needed to make him the father of modern art.',
      'Neither was meant as a manifesto. Fry’s catalogue is a critic’s defense of a show; Cézanne’s letter is a sketcher’s advice to a younger painter. But between them they are what Post-Impressionism has, a critic gave the room its name and a private letter gave it its theorem, and the five painters who were nominally inside it had nothing to say about either.',
    ],
    sourceUrl: 'https://en.wikipedia.org/wiki/Paul_C%C3%A9zanne#Letter_to_%C3%89mile_Bernard,_15_April_1904',
    sourceLabel: 'Read about Cézanne’s letter to Émile Bernard (15 April 1904)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.monetWaterLilies,
      title: 'Before · Monet, Water Lilies (1899–1926)',
      caption: 'A pond dissolved into reflections of light; the world melted by Impressionism into pure optical flicker, the structure of the picture sacrificed for the moment.',
    },
    after: {
      img: ART_IMG.cezanneMontSainteVictoireLauves,
      title: 'After · Cézanne, Mont Sainte-Victoire (1902–06)',
      caption: 'A mountain put back together as architecture, built from blocky planes of color set side by side like masonry. Where Impressionism dissolved the world, Cézanne rebuilds it.',
    },
    prose: [
      'Impressionism had taught a generation to paint light, the flicker of shadow on snow, an orange sun smearing across a gray harbor at dawn. It put the instant on canvas, and it did it brilliantly. But the instant is weightless. It doesn’t stay. By the late 1880s the younger painters could see something the elders had missed: the architecture that lasts, the feeling of a picture, the thing it is actually about. The break is not a new technique. It is the return of everything Impressionism had let go of.',
      'Set Monet’s late Water Lilies beside Cézanne’s Mont Sainte-Victoire and the argument is visible in two glances. Monet has dissolved a pond into reflections, sky and lily and water bleed into each other; there is no edge, no architecture, almost no figure. Cézanne, the same years, is doing the opposite in front of his mountain, building it back together out of small blocky strokes of color set side by side like masonry, until the canvas reads as planes of weight before it reads as landscape. The mountain refuses to dissolve.',
      'And it isn’t only Cézanne. The objection ran four ways, one anchor against each. Cézanne wanted weight, a mountain has weight; light passing over a mountain does not. Van Gogh wanted feeling, a wheatfield is yellow at noon, but what does that yellow do to the man standing in it? Gauguin wanted meaning, a Breton peasant in church doesn’t see a Bible story; she imagines one, and how do you paint that? Seurat wanted method, the Impressionists were eyeballing optical mixing by instinct; what if you did it properly, by formula? Lautrec wanted the modern night, not Renoir’s sunlit Sunday afternoon but the same dance hall at midnight under flat green gaslight. Five answers to one question, all of them refusing to settle for what the eye alone could catch.',
    ],
  },
  canon: [
    { year: 1884, name: 'Bathers at Asnières', artist: 'Seurat', wiki: 'Bathers at Asnières', img: ART_IMG.seuratBathersAsnieres, note: 'Working-class Parisians sunning themselves on the Seine, painted at Salon scale, about six and a half feet tall, nearly ten wide. Rejected by the Salon of 1884 and hung instead at the first jury-free Salon des Indépendants. Seurat was 24.' },
    { year: 1886, name: 'A Sunday on La Grande Jatte', artist: 'Seurat', wiki: "A Sunday Afternoon on the Island of La Grande Jatte", img: ART_IMG.seuratGrandeJatte, note: 'Two years of work and millions of tiny separate dots of pure color. Debuted at the 8th and last Impressionist Exhibition in May 1886, the canvas that quietly buried its parents and christened Divisionism in front of a hostile room.' },
    { year: 1888, name: 'Vision after the Sermon', artist: 'Gauguin', wiki: 'Vision After the Sermon', img: ART_IMG.gauguinVision, note: 'Breton women in starched coiffes coming out of mass, eyes closed in prayer; Jacob and the angel wrestling above them on a field of pure flat red. The breakthrough Synthetist picture, meaning painted as its own zone, separate from the world.' },
    { year: 1888, name: 'Bedroom in Arles', artist: 'Van Gogh', wiki: 'Bedroom in Arles', img: ART_IMG.vanGoghBedroomArles, note: 'His own small room at the Yellow House, lemon yellow walls, cobalt shutters, brick red floor. Painted to welcome Gauguin, who would arrive in October for nine weeks that destroyed the friendship. The first of three versions; this is the original.' },
    { year: 1888, name: 'Sunflowers', artist: 'Van Gogh', wiki: 'Sunflowers (Van Gogh series)', img: ART_IMG.vanGoghSunflowers, note: 'Fifteen single-stalked sunflowers in a yellow vase against a yellow wall, painted as decoration for the spare bedroom he prepared for Gauguin. Yellow on yellow on yellow, Van Gogh’s great chromatic gamble, made in the heat of Arles.' },
    { year: 1888, name: 'The Night Café', artist: 'Van Gogh', wiki: 'The Night Café', img: ART_IMG.vanGoghNightCafe, note: 'An all-night café in Arles with billiard table, sallow gaslight, and four lonely drinkers. Van Gogh wrote that he had tried to express the terrible passions of humanity by means of red and green, a place where one could ruin oneself, go mad, or commit a crime.' },
    { year: 1888, name: 'Café Terrace at Night', artist: 'Van Gogh', wiki: 'Café Terrace at Night', img: ART_IMG.vanGoghCafeTerraceNight, note: 'The terrace of a café in Arles under a starry sky, painted on the spot at night with a candle in his hatband. The cobalt blue and citron yellow are the same key as the bedroom, colors keyed to feeling, not to optics.' },
    { year: 1889, name: 'Self-Portrait with Bandaged Ear', artist: 'Van Gogh', wiki: 'Self-Portrait with Bandaged Ear', img: ART_IMG.vanGoghBandagedEar, note: 'Painted in January 1889, three weeks after he cut off most of his left ear and delivered it to a woman at a brothel (long known only as “Rachel” later identified as Gabrielle Berlatier). Pipe in mouth, fur cap, a Japanese print on the wall behind him, the great unflinching face of post-traumatic 1889.' },
    { year: 1889, name: 'The Yellow Christ', artist: 'Gauguin', wiki: 'The Yellow Christ', img: ART_IMG.gauguinYellowChrist, note: 'A wooden polychrome crucifix from a Pont-Aven chapel transplanted into a Breton autumn field, with three peasant women in white coiffes praying at its feet. The picture turned yellow because Gauguin painted Brittany to look like the imagined gold of his head, symbol over fact.' },
    { year: 1889, name: 'The Starry Night', artist: 'Van Gogh', wiki: 'The Starry Night', img: ART_IMG.starryNight, note: 'A cypress, a sleeping village and a swirling sky, painted in June 1889 in his room at the Saint-Paul-de-Mausole asylum. The most reproduced picture in Western art after the Mona Lisa, and Van Gogh painted it locked up.' },
    { year: 1890, name: 'Wheatfield with Crows', artist: 'Van Gogh', wiki: 'Wheatfield with Crows', img: ART_IMG.vanGoghWheatfieldCrows, note: 'A field of wheat under a roiling blue-black sky, a flock of crows lifting off, three paths forking away. Often called his last painting; the Van Gogh Museum no longer treats it that way, but it remains the picture the legend wants it to be.' },
    { year: 1892, name: 'Spirit of the Dead Watching (Manaò tupapaú)', artist: 'Gauguin', wiki: 'Manaò tupapaú', img: ART_IMG.gauguinSpiritDead, note: 'A young Tahitian girl lying face-down on a bed under a yellow blanket, watched by a dark spirit figure. The model was Teha’amana, Gauguin’s adolescent “wife” at the time. One of his most famous Tahitian canvases, and one whose biography does not sand down.' },
    { year: 1891, name: 'The Circus', artist: 'Seurat', wiki: 'The Circus (Seurat)', img: ART_IMG.seuratCircus, note: 'A circus ring with a bareback rider on a galloping white horse, a clown in the foreground, the audience climbing into bleachers behind. Unfinished at Seurat’s sudden death in March 1891 at age 31; the final demonstration of pointillism by the painter who built it.' },
    { year: 1891, name: 'Moulin Rouge: La Goulue', artist: 'Toulouse-Lautrec', wiki: 'Moulin Rouge: La Goulue', img: ART_IMG.lautrecMoulinPoster, note: 'A color lithograph that made the medium. Three flat zones: a yellow ground, La Goulue’s white frilled bloomers at the center, the audience as a black silhouetted frieze behind her. Glued to Paris walls in November 1891, the entire 20th-century commercial poster descends from this single sheet.' },
    { year: 1895, name: 'At the Moulin Rouge', artist: 'Toulouse-Lautrec', wiki: 'At the Moulin Rouge', img: ART_IMG.lautrecMoulinRouge, note: 'Five regulars around a center table at the famous cabaret; Lautrec himself painted in the background beside his tall cousin Gabriel; the dancer May Milton’s face looms up at the right edge, lit a lurid green from below. Japanese-print cropping applied to the dance hall at midnight.' },
    { year: 1895, name: 'The Card Players', artist: 'Cézanne', wiki: 'The Card Players', img: ART_IMG.cezanneCardPlayers, note: 'Two Aix farm laborers at a small wooden table, a bottle between them, looking at their cards in total silence. The Orsay version is the smallest and most reproduced of five; a fifth version sold privately in 2011 for between $250 and $320 million, at the time the highest price ever paid for a painting.' },
    { year: 1894, name: 'In the Salon at the Rue des Moulins', artist: 'Toulouse-Lautrec', wiki: 'In the Salon at the Rue des Moulins', img: ART_IMG.lautrecSalonRueMoulins, note: 'Three women on red plush sofas inside a legal Paris brothel, dressed in long camisoles, bored, waiting between customers. No leer, no judgment, the women are people, off the clock. Painted from inside the building Lautrec had more or less moved into.' },
    { year: 1898, name: 'Where Do We Come From? What Are We? Where Are We Going?', artist: 'Gauguin', wiki: 'Where Do We Come From? What Are We? Where Are We Going?', img: ART_IMG.gauguinWhereDoWeComeFrom, note: 'A twelve-foot mural painted in Tahiti as his testament before an attempted suicide by arsenic in late 1897. He intended it read right-to-left, a baby on the right, an adult reaching for a fruit in the center, an old woman on the left. Birth, life, death.' },
    { year: 1899, name: 'Still Life with Apples and Oranges', artist: 'Cézanne', wiki: 'Still Life with Apples and Oranges', img: ART_IMG.cezanneAppleOranges, note: 'A heaped white cloth, a patterned drape, a fruit bowl, a jug, apples and oranges spilling toward the viewer, and a table tipped just enough that nothing should sit on it. The still life rebuilt as a structure of planes.' },
    { year: 1890, name: 'Boy in the Red Vest', artist: 'Cézanne', wiki: 'The Boy in the Red Vest', img: ART_IMG.cezanneBoyRedVest, note: 'A young Italian model called Michelangelo di Rosa, in a vivid red waistcoat, leaning his head on his fist. One of four versions; the Bührle Foundation canvas is the most famous, stolen in 2008 in the largest art robbery in Swiss history, recovered in Serbia in 2012.' },
    { year: 1893, name: 'The Child’s Bath', artist: 'Cassatt', wiki: "The Child's Bath", img: ART_IMG.cassattChildBath, note: 'A mother in a striped dress bending forward to wash her young child’s feet in a white china basin, seen from a high angle that flattens the floor into pattern. Cassatt’s signature canvas of the mother-and-child theme she made her own, overtly indebted to Japanese prints.' },
    { year: 1888, name: 'The Talisman', artist: 'Sérusier', wiki: 'The Talisman (Sérusier)', img: ART_IMG.serusierTalisman, note: 'A tiny 10½ × 8½-inch panel painted on a cigar-box lid in October 1888 in the Bois d’Amour at Pont-Aven, under Gauguin’s direct instruction to use pure color and no naming. Sérusier’s classmates at the Académie Julian named it Le Talisman and called themselves the Nabis.' },
    { year: 1890, name: 'Portrait of Félix Fénéon', artist: 'Signac', wiki: 'Portrait of Félix Fénéon', img: ART_IMG.signacFelixFeneon, note: 'The critic who had named Néo-Impressionnisme in 1886 rendered as a dapper top-hatted profile against a swirling, dot-by-dot field of colored arabesques. The canonical Signac, Divisionism turned into propaganda.' },
    { year: 1881, name: 'Eugène Manet and His Daughter at Bougival', artist: 'Morisot', wiki: 'Berthe Morisot', img: ART_IMG.morisotLate, note: 'Manet’s younger brother seated in a garden with their daughter Julie, painted by Morisot in her late, dissolution-prone brushwork. She kept painting through the early Post-Impressionist decade and died in 1895; her death certificate listed her occupation as “no profession.”' },
    { year: 1893, name: 'Mother and Sister of the Artist', artist: 'Vuillard', img: ART_IMG.vuillardMotherSister, note: 'Vuillard’s mother, a Paris corsetmaker, and his sister Marie in a small interior at home, the sister half-absorbed into the floral wallpaper. The intimate, pattern-soaked Nabi interior at its purest; about 18 × 22 inches, MoMA.' },
    { year: 1893, name: 'The Muses', artist: 'Denis', wiki: 'Maurice Denis', img: ART_IMG.denisMuses, note: 'Nine women, the Muses, distinguished by the slightest of attributes, set in a flat decorative grove of chestnut trees in the park at Saint-Germain-en-Laye. The Nabis’ theorist working his own program: “a flat surface covered with colors assembled in a certain order.”' },
    { year: 1882, name: 'The Eye, Like a Strange Balloon', artist: 'Redon', wiki: 'Odilon Redon', img: ART_IMG.redonNoir, note: 'A floating eye-balloon drifting upward through the dark, from his series for Edgar Allan Poe. One of Redon’s noirs, the disturbing charcoal lithographs of the Symbolist phase he ran from the 1870s until about 1895, before switching to luminous color.' },
    { year: 1905, name: 'Vase of Flowers', artist: 'Redon', wiki: 'Odilon Redon', img: ART_IMG.redonPastel, note: 'A late luminous bouquet on a dark ground, the photographic negative of the early noirs. From about 1895 Redon switched from charcoal to pastel and oil, and the floating eye and spider-faced creatures gave way to color so saturated it almost burns.' },
    { year: 1914, name: 'The Cyclops', artist: 'Redon', wiki: 'The Cyclops (Redon)', img: ART_IMG.redonCyclops, note: 'A single-eyed giant peering over a rocky cliff at the reclining nymph Galatea, Symbolist subject in late Redon color, a bouquet keyed to mythology. The Kröller-Müller record gives c.1914.' },
    { year: 1910, name: 'The Dream', artist: 'Rousseau', wiki: 'The Dream (Rousseau)', img: ART_IMG.rousseauDream, note: 'A nude on a Louis-Philippe sofa stranded in a moonlit jungle of his own invention, a snake-charmer piping among the leaves. Painted in 1910, Rousseau’s last and largest jungle picture; he died on 2 September of that year. The avant-garde elected him their outsider forerunner.' },
    { year: 1925, name: 'Nude in the Bath', artist: 'Bonnard', img: ART_IMG.bonnardNudeBath, note: 'His lifelong companion Marthe submerged in a clawfoot tub under shifting violet, rose and orange light. Bonnard painted her in the bath over and over from 1925 onward, the late Nabi interior carried fifty years past its founding.' },
  ],
  sections: [
    { id: 'why', eyebrow: 'Paris · 1886', dateLabel: 'Why the eye wasn’t enough', title: 'After the moment, the structure', blurb: 'Impressionism caught the dazzle; what it couldn’t catch was weight. At the last Impressionist show, the next generation walks in.', progress: 1 / 8 },
    { id: 'five', eyebrow: '1886–1905', dateLabel: 'The five who weren’t a group', title: 'Cézanne, Van Gogh, Gauguin, Seurat, Lautrec', blurb: 'Five painters in five cities, mostly hating each other, each answering Impressionism a different way. The list isn’t a movement, it’s a label, applied later.', progress: 2 / 8 },
    { id: 'cezanne', eyebrow: 'Aix-en-Provence · 1870s–1906', dateLabel: 'The mountain refuses to dissolve', title: 'Cézanne, the cylinder, the sphere, the cone', blurb: 'A banker’s son in Provence, painting a mountain over and over, building the world out of planes. When he died, the young painters in Paris discovered him. Cubism started six months later.', progress: 3 / 8 },
    { id: 'van-gogh', eyebrow: 'Arles · 1888–1890', dateLabel: 'Color as feeling', title: 'Van Gogh, the yellow house, the wheat, the gun', blurb: 'A late starter who painted his life, under 900 canvases in about ten years, and died at 37 in a wheatfield outside Paris, having sold barely anything in his lifetime.', progress: 4 / 8 },
    { id: 'gauguin', eyebrow: 'Pont-Aven · 1886; Tahiti · 1891–1903', dateLabel: 'Flat color, big symbol', title: 'Gauguin, Pont-Aven, Tahiti, the colonial question', blurb: 'An ex-stockbroker who walked out of his marriage, found his style in Brittany, then sailed to Tahiti chasing a fantasy that was a French colony in real life. The pictures matter. The biography is harder.', progress: 5 / 8 },
    { id: 'seurat-lautrec', eyebrow: 'Paris · 1884–1901', dateLabel: 'Theory and the dance hall', title: 'Seurat’s dots, Lautrec’s posters', blurb: 'Two Paris painters who could not have been more different in temperament, both dead in their thirties. Seurat made color a science. Lautrec made the modern poster a fine art.', progress: 6 / 8 },
    { id: 'nabis', eyebrow: 'Paris · 1888–1905', dateLabel: 'The Nabis and the wider field', title: 'Bonnard, Vuillard, Denis, and the cast around them', blurb: 'Around the five anchors orbits a wider cast, a younger group called the Nabis, plus Morisot, Signac, Redon, Cassatt. The room gets crowded.', progress: 7 / 8 },
    { id: 'fry', eyebrow: 'London · 8 November 1910', dateLabel: 'Roger Fry hangs a show', title: 'How a category got its name', blurb: 'A London critic with a gallery to fill needs a name for a roomful of French pictures. He picks one on the fly. It is the name we still use.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Work, Les Demoiselles d'Avignon (1907)
// ─────────────────────────────────────────────────────────────
export interface WorkSection { id: string; eyebrow: string; dateLabel: string; title: string; blurb: string; progress: number }
export interface ProvenanceEntry { year: string; who: string; place: string; note: string; price: string | null; museum?: boolean }
export interface WorkFigure { name: string; role: string; palette: Palette }
// "Look closer" = a prose pointer into the FULL painting (shown uncropped above
// the list). `where` is a short, scannable location phrase ("Center foreground,
// low"); `label` names the thing; `detail` is why it matters. We do NOT crop or
// pin the image: any coordinate is authored blind (we can't see where it lands),
// so it's unreliable by construction, words are the one thing we can place
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
  heroAspect?: number // source image W/H, used to frame the "Look closer" region crops
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
  // The work page hero shows the WHOLE painting (≈square), contain, never cropped.
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
  // FLAG: provenance prices below are from the mockup, verify before shipping.
  provenance: [
    { year: '1907–1924', who: 'Pablo Picasso (the artist)', place: 'Bateau-Lavoir, Paris', note: 'Rolled up in the studio. Shown publicly once, briefly, at the Salon d’Antin in 1916.', price: null },
    { year: '1924', who: 'Jacques Doucet', place: 'Paris', note: 'Couturier and book collector. Buys the canvas for 25,000 francs, a modest price for what it would become; within months it was appraised at ten times that.', price: '25,000 ₣ (1924)' },
    { year: '1924–1929', who: 'Doucet collection', place: 'Paris', note: 'Hangs at the foot of Doucet’s staircase. Visitors complained about climbing past it.', price: null },
    { year: '1929–1937', who: 'Mme Jacques Doucet', place: 'Paris', note: 'On Doucet’s death in 1929 the painting passes to his widow, who holds it for eight years before selling.', price: null },
    { year: '1937', who: 'Jacques Seligmann & Co.', place: 'New York', note: 'The widow sells it on; the New York gallery shows it, looking for an institutional buyer.', price: null },
    { year: '1939', who: 'Museum of Modern Art', place: 'New York', note: 'MoMA buys the painting for $24,000 through the Lillie P. Bliss Bequest, raising $18,000 by selling a Degas (Jockeys on Horseback before Distant Hills) and the rest from the dealers Germain Seligman and César de Hauke.', price: '$24,000 (1939)', museum: true },
    { year: '1939–today', who: 'Museum of Modern Art', place: 'New York', note: 'On near-continuous view; it rarely travels. Insured value undisclosed, long treated as effectively priceless.', price: 'never resold', museum: true },
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
    { label: 'Archaic faces · the left figures', where: 'The figures at left', detail: 'The two central figures are calm and almond-eyed, lifted from the ancient Iberian stone heads Picasso had studied at the Louvre (he even owned two stolen fragments). The far-left woman, turned in true profile, is different again: scholars read her face as Egyptian or southern Asian in style. Either way, he is reaching past the Renaissance to older, pre-classical sources.' },
    { label: 'African mask · right-most figures', where: 'The two figures at right', detail: 'The two figures on the right wear faces like carved African masks, gouged, striated, deliberately other. Picasso had just been hit hard by Fang and Kota masks at the Trocadéro ethnographic museum; here a “beautiful nude” is given a mask for a face.' },
    { label: 'Still life, faceted form (Cézanne)', where: 'Bottom center, below the figures', detail: 'The wedge of fruit at the bottom is built from blunt, faceted planes, pure Cézanne, whose late work taught Picasso to construct a picture out of solid geometric blocks instead of smooth illusion.' },
    { label: 'Two views at once', where: 'The crouching figure, lower right', detail: 'The crouching figure shows you her muscular back and, twisted impossibly round, her masked face at the same instant. There is no single spot you could stand to see this, which is exactly the point: Cubism abolishes the one fixed viewpoint a painting had assumed for 500 years.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne’s Bathers', mode: 'art' }, { label: 'Iberian sculpture', mode: 'art' }, { label: 'African masks', mode: 'art' }, { label: 'Belle Époque Paris', mode: 'civ' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Futurism', mode: 'art' }, { label: 'Abstract art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Portrait of Daniel-Henry Kahnweiler (1910): the textbook Analytic
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
  hook: 'A real man, Picasso’s own dealer, dissolved into a shimmer of brown-and-gray facets you have to decode.',
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
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Finding the man in the facets', blurb: 'The wave of hair, two almond eyes, the clasped hands, the footholds that turn a gray scaffold back into a seated man.', progress: 0.55 },
    { id: 'sitting', eyebrow: 'The edge of legible', dateLabel: 'Autumn 1910', title: 'Sitting for a near-abstraction', blurb: 'Many sittings push the portrait to the brink of unreadability, and then, deliberately, it stops just short.', progress: 0.78 },
    { id: 'seized', eyebrow: 'Afterlife', dateLabel: '1914–1948', title: 'Seized, scattered, saved', blurb: 'War turns Kahnweiler into an enemy alien; his whole collection is confiscated and auctioned, and the portrait drifts toward Chicago.', progress: 0.95 },
  ],
  provenance: [
    { year: '1910', who: 'Daniel-Henry Kahnweiler', place: 'Paris', note: 'Acquired straight from Picasso, the dealer owned his own portrait.', price: null },
    { year: '1914', who: 'Sequestered by the French state', place: 'Paris', note: 'A German citizen caught abroad when war broke out, Kahnweiler could not return; his stock was seized as enemy property.', price: null },
    { year: '1921', who: 'Isaac Grünewald', place: 'Hôtel Drouot, Paris', note: 'Lot 84 in the first forced sequestration auction, bought by the Swedish painter Isaac Grünewald.', price: null },
    { year: 'c. 1929', who: 'Earl Horter', place: 'Philadelphia', note: 'The American artist and collector Earl Horter.', price: null },
    { year: '1934', who: 'Mrs. Gilbert W. Chapman', place: 'Chicago', note: 'Bought by the Chicago collector then known as Mrs. Charles Goodspeed.', price: null },
    { year: '1948', who: 'Art Institute of Chicago', place: 'Chicago', note: 'Her gift, in memory of Charles B. Goodspeed, now a landmark of the museum’s Cubism.', price: null, museum: true },
  ],
  figures: [],
  annotations: [
    { x: '61%', y: '12%', w: 30, h: 18, label: 'The wave of hair', detail: 'Start at the top: that patch of fine diagonal hatching is Kahnweiler’s neatly combed, wavy hair, one of the few passages Picasso leaves almost describable, a foothold before the rest dissolves.' },
    { x: '50%', y: '22%', w: 32, h: 24, label: 'His eyes, looking out', detail: 'Below the hair, two dark almond eyes and the ridge of a nose surface out of the facets. Find the face looking back and the whole gray scaffold suddenly reads as a seated man.' },
    { x: '52%', y: '89%', w: 42, h: 20, label: 'The clasped hands', detail: 'At the very bottom, a cluster of pale interlocking blocks resolves into his hands, folded in his lap. Picasso pins the figure down with hair and hands, top and bottom, and lets everything between them break apart.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'African & Oceanic art', mode: 'art' }, { label: 'Les Demoiselles', mode: 'art' } ],
    children: [ { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Collage', mode: 'art' }, { label: 'Abstract art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Still Life with Chair Caning (1912): the first Cubist collage and the
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
    { id: 'making', eyebrow: 'Spring 1912', dateLabel: 'May 1912', title: 'The morning he stopped painting', blurb: 'On a small oval canvas Picasso reaches not for a brush but for a strip of machine-printed oilcloth and a length of rope, and glues them down.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'A café table, seen from above', blurb: 'It reads as chaos until you spot the tabletop: a newspaper, a pipe, a wineglass, a slice of lemon, and the chair you would sit on, printed onto cloth.', progress: 0.56 },
    { id: 'break', eyebrow: 'The break', dateLabel: '1912', title: 'Five centuries of illusion, over', blurb: 'The moment a real object lands on the canvas, painting stops having to pretend. Collage is born, and four months later Braque takes the next step.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1912–today', title: 'The little oval that opened the century', blurb: 'It is the size of a sheet of paper, Picasso never sold it, and almost every glued, taped or bolted-together artwork since descends from it.', progress: 0.95 },
  ],
  provenance: [
    { year: '1912–1973', who: 'Pablo Picasso (the artist)', place: 'Paris', note: 'Picasso kept his own breakthrough. The little oval stayed in his personal collection for sixty-one years, he never put it up for sale.', price: null },
    { year: '1973', who: 'Estate of Pablo Picasso', place: 'Mougins / Paris', note: 'Picasso dies without a will. A vast hoard of work he had held back his whole life passes to his heirs, and the French state takes years to inventory it.', price: null },
    { year: '1979', who: 'French national collections (by dation)', place: 'Paris', note: 'France lets heirs pay inheritance tax in artworks rather than cash, the dation. This canvas is among the works that pass to the nation, forming the core of a future Picasso museum.', price: 'paid as estate tax' },
    { year: '1985', who: 'Musée national Picasso-Paris', place: 'Paris (Hôtel Salé)', note: 'The museum opens in a grand 17th-century mansion once built on a salt-tax fortune. The little oval, still framed in its piece of rope, has hung there since.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Braque', role: 'Papier collé, that September', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Kurt Schwitters', role: 'The heir, in glued trash', palette: ['#8a3a2a', '#2a1c16', '#0a0606'] },
  ],
  annotations: [
    { x: '30%', y: '34%', w: 34, h: 18, label: 'The letters JOU', detail: 'Big black painted capitals: J-O-U, the first three letters of journal, French for newspaper (and literally “daily”). A café kept its papers on a rack; here one lies on the table. Viewers have long enjoyed the wink to jouer, “to play”, the game of the whole picture.' },
    { x: '28%', y: '64%', w: 32, h: 28, label: 'The printed chair caning', detail: 'This woven lattice is the trick at the center of the work. It is not real cane, and it is not painted, it is a strip of cheap oilcloth, machine-printed to imitate the rattan seat of a bistro chair, glued straight onto the canvas. A factory-made fake, standing in for the chair you would sit on.' },
    { x: '50%', y: '90%', w: 52, h: 16, label: 'The rope frame', detail: 'A length of ordinary rope, glued around the oval edge. It reads two ways at once: the carved rim of a little round café table seen from above, and the gilt edge of a picture frame. Picasso lets you choose, and so blurs the line between an object and a picture of one.' },
    { x: '60%', y: '44%', w: 42, h: 38, label: 'The still life, in facets', detail: 'Everything else is hand-painted illusion in the brown-gray shards of Analytic Cubism: a stemmed wineglass, a pipe, a knife, a slice of lemon, a scalloped white form (a shell, or the frilled edge of a napkin, scholars read it both ways), the remains of a drink and a light meal, dissolving into planes. The old painted fakery sits right beside the glued-on real thing.' },
  ],
  lineage: {
    parents: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Cézanne', mode: 'art' }, { label: 'Braque', mode: 'art' }, { label: 'Industrial mass production', mode: 'civ' } ],
    children: [ { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Papier collé', mode: 'art' }, { label: 'Dada photomontage', mode: 'art' }, { label: 'Pop Art', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Houses on the Hill, Horta de Ebro (1909): the landscape summer where
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
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Summer 1909', title: 'Why he went back to Horta', blurb: 'Broke, exhausted and stuck, Picasso flees Paris for the baked Catalan village of an old friend, a town of cube-shaped houses that turns out to be the perfect laboratory.', progress: 0.08 },
    { id: 'making', eyebrow: 'The summer', dateLabel: 'Jun–Sep 1909', title: 'Painting the village as blocks', blurb: 'He reduces the houses to nested geometric solids, tilts every plane, and, famously, brings home photographs to prove the cubes were really there.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'A town built from geometry', blurb: 'Ochre cubes climbing a hill, roofs flattened into facets, the mountain behind broken into the same planes, and one stubborn patch of green.', progress: 0.56 },
    { id: 'breakthrough', eyebrow: 'The breakthrough', dateLabel: '1909–1910', title: 'The summer it became a movement', blurb: 'This is where the shock of the Demoiselles hardens into a method. Cézanne’s advice, made real on a hillside, the launch pad for everything Picasso and Braque do next.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1909–today', title: 'The Picasso MoMA let go', blurb: 'A Rockefeller treasure, bequeathed to MoMA, and then, to some critics’ horror, quietly sold off, ending up a star of a Berlin museum.', progress: 0.95 },
  ],
  provenance: [
    { year: '1909', who: 'Pablo Picasso (the artist)', place: 'Horta de Sant Joan, Catalonia', note: 'Painted over the summer in his friend Pallarès’s village, then rolled up and carried back to Paris.', price: null },
    { year: 'by the 1970s', who: 'Nelson A. Rockefeller', place: 'New York', note: 'The canvas enters the celebrated modern collection of the oil heir, New York governor and future US vice-president.', price: null },
    { year: '1979', who: 'Museum of Modern Art', place: 'New York', note: 'Bequeathed to MoMA on Rockefeller’s death, for decades one of the museum’s landmark early Cubist paintings.', price: null, museum: true },
    { year: '2003', who: 'Sold by MoMA (via Acquavella)', place: 'New York', note: 'In a deaccession that appalled some critics, MoMA sold the Horta, reported at $12–15 million, through Acquavella Galleries to raise acquisition funds.', price: '≈ $12–15m (2003)' },
    { year: '2003–today', who: 'Museum Berggruen', place: 'Berlin', note: 'The Berlin-born dealer-collector Heinz Berggruen buys it from the MoMA sale and adds it to his collection, by then the state-owned Museum Berggruen, which calls it one of its most significant works.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Manuel Pallarès', role: 'The friend, the village', palette: ['#8a6b3a', '#3a2820', '#0e0805'] },
    { name: 'Fernande Olivier', role: 'With him that summer', palette: ['#a85a4a', '#3a221c', '#0a0606'] },
    { name: 'Gertrude Stein', role: 'Patron, early champion', palette: ['#8a3a4a', '#2a1c1c', '#0a0606'] },
  ],
  annotations: [
    { x: '46%', y: '56%', w: 42, h: 34, label: 'Houses as cubes', detail: 'The heart of the picture: the village’s flat-roofed houses, stripped down to bare ochre blocks, cubes, wedges, prisms, stacked and tilted up the slope. Picasso throws out the fussy detail and keeps only the geometry, the lesson he took from Cézanne: build the world out of solid shapes.' },
    { x: '64%', y: '20%', w: 52, h: 24, label: 'The hill, faceted too', detail: 'The mountain behind is broken into the same angular planes as the buildings. Village and hillside rhyme; nature and architecture are made of one geometry. There is no soft, hazy distance, the far hill is pulled up flat against the houses.' },
    { x: '30%', y: '46%', w: 30, h: 26, label: 'A roof becomes a plane', detail: 'Follow a single house and watch a roof flatten into a tilted facet, a wall into another, the two meeting at an impossible angle. Picasso lights each plane from a different, unfixable direction, so the cube reads as solid and as flat at the same time.' },
    { x: '12%', y: '33%', w: 24, h: 26, label: 'The one green note', detail: 'A patch of cool green, vegetation, clings to the left edge: almost the only green in a picture of relentless ochre and gray. In all that dry, faceted geometry it is the one hint of organic life, though Picasso gives it the same angular planes as everything else.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'Les Demoiselles', mode: 'art' }, { label: 'Catalan hill towns', mode: 'civ' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Portrait of Kahnweiler', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Violin and Jug (Braque, 1909–10): the textbook Analytic Cubism still
// life, and the painted trompe-l'œil nail. Image en-tier (braqueViolinJug, low-
// res but the only clean copy, crops kept large); verified 2026-05-24.
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
  hook: 'Braque shattered a violin and a jug into a fog of brown facets, then, at the top, painted one perfectly real nail to hold it all up.',
  heroImage: ART_IMG.braqueViolinJug,
  heroCredit: 'Braque, Violin and Jug, 1909–10 · Kunstmuseum Basel',
  heroAspect: 0.63,
  // The work is a tall portrait canvas, show the whole thing, never cropped.
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1909–10', k: 'Painted' },
    { v: '3′10″ × 2′5″', k: 'Dimensions' },
    { v: 'Basel', k: 'Now at' },
  ],
  sections: [
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1909–1910', title: 'The other half of Cubism', blurb: 'Everyone remembers Picasso. But Cubism took two, and the quieter, more methodical half was a house-painter’s son from Normandy named Georges Braque.', progress: 0.08 },
    { id: 'making', eyebrow: 'The winter', dateLabel: 'Winter 1909–10', title: 'Faceting a violin', blurb: 'Braque takes a violin and a jug and shatters them into a near-colourless shimmer of planes, the purest example of the style he and Picasso were building.', progress: 0.3 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Find the nail, then the violin', blurb: 'Start at the top with the one solid thing, a painted nail, then hunt down the scroll, the strings and the body of the violin surfacing out of the rubble.', progress: 0.55 },
    { id: 'nail', eyebrow: 'The point', dateLabel: 'The picture', title: 'Why paint a perfect nail', blurb: 'In the most radical painting in Europe, Braque planted one old-fashioned illusion, a joke, a foothold, and a quiet hint of the collage revolution two years off.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1910–today', title: 'How it got to Basel', blurb: 'A Swiss banker who bought Cubism when nobody else would gave his collection to his home city, which is why the textbook Analytic Cubist still life hangs in Basel.', progress: 0.95 },
  ],
  provenance: [
    { year: '1909–10', who: 'Georges Braque (the artist)', place: 'Paris', note: 'Painted in Montmartre over the winter, at the height of the daily Picasso–Braque exchange.', price: null },
    { year: 'from 1921', who: 'Raoul La Roche', place: 'Paris / Basel', note: 'The Basel-born banker and friend of Le Corbusier buys heavily at the 1921 Kahnweiler sequestration sale (Braque’s dealer stock, seized in the war), building one of the deepest private Cubist collections.', price: null },
    { year: '1952–63', who: 'Kunstmuseum Basel', place: 'Basel', note: 'La Roche gives his Cubist collection to his home city’s museum in stages, across three donations, making Basel a stronghold of the movement.', price: null, museum: true },
  ],
  figures: [
    { name: 'Braque', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Picasso', role: 'The other rope-end', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Raoul La Roche', role: 'The collector who saved it', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
  ],
  annotations: [
    { x: '52%', y: '9%', w: 52, h: 15, label: 'The painted nail', detail: 'Start at the very top. That is a nail, painted with old-fashioned, photographic realism, casting a neat little shadow, as if it were pinning the whole picture to the wall. It is the one perfectly solid, real-looking thing in the painting, and Braque put it there on purpose.' },
    { x: '50%', y: '64%', w: 58, h: 40, label: 'The violin', detail: 'Below the nail the violin surfaces out of the rubble: the curled scroll near the center, the strings, and lower down the unmistakable curves of the body with its f-holes. Braque, who loved music, lets you half-find the instrument and then lose it again in the facets.' },
    { x: '33%', y: '33%', w: 46, h: 30, label: 'The jug', detail: 'Above the violin, a pale faceted shape with a rounded lip is the jug. It is dissolving into the same brown-gray planes as everything around it, readable for a second, then gone: exactly the brink of legibility Analytic Cubism likes to walk.' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'Houses at Horta', mode: 'art' }, { label: 'Trompe-l’œil', mode: 'art' } ],
    children: [ { label: 'Collage', mode: 'art' }, { label: 'Chair Caning', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Three Women (1908): the year Picasso spent digesting the Demoiselles,
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
  hook: 'The year after the Demoiselles, Picasso fused three nudes into a single carved, rust-red mass, and quietly worked out what the explosion had been for.',
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
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: 'Winter 1907–08', title: 'After the bomb', blurb: 'With the Demoiselles rolled up in the corner, Picasso spends a year working out what the explosion was for, and keeps going back to a room of carved African masks.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: '1907–08', title: 'Three figures, one block', blurb: 'He paints, scrapes back and repaints, fusing three nudes into a single mass of rust-red planes, as if the picture were carved rather than brushed.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Bodies like hewn wood', blurb: 'Mask-faces, interlocking limbs, a palette of fired clay, and one sliver of green. How to find the three women in the geometry.', progress: 0.56 },
    { id: 'primitivism', eyebrow: 'The source', dateLabel: '1907–08', title: 'Borrowed from the carvers', blurb: 'Where the mask-faces came from, and the harder question, still argued over, about a European taking them.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1908–today', title: 'A Russian buys the future', blurb: 'Bought by a Moscow textile baron, seized by the Revolution, and locked for decades behind the Iron Curtain in the Hermitage.', progress: 0.95 },
  ],
  provenance: [
    { year: '1908', who: 'Pablo Picasso (the artist)', place: 'Paris', note: 'Painted in the year after the Demoiselles, in the Bateau-Lavoir studio on Montmartre.', price: null },
    { year: 'c. 1911–1914', who: 'Sergei Shchukin', place: 'Moscow', note: 'The Russian textile magnate, introduced to Picasso by Matisse and among the first anywhere to collect him, acquires it through the Paris trade and carries it to Moscow. He would gather more than fifty Picassos.', price: null },
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
    { x: '48%', y: '20%', w: 46, h: 22, label: 'A monumental head', detail: 'The central figure’s head, tipped back with raised arms: heavy almond eyes, a blunt nose, the whole face simplified into a few carved planes. There is no expression to read, Picasso wants a mask, not a person, a head you could imagine cut from wood.' },
    { x: '75%', y: '34%', w: 40, h: 26, label: 'A mask for a face', detail: 'The right-hand figure’s face is the clearest mask of the three, gouged, frontal, deliberately “other” lifted from the carved African sculpture Picasso had been staring at. A beautiful nude is given the face of a carved mask.' },
    { x: '42%', y: '58%', w: 54, h: 32, label: 'Carved from one block', detail: 'Where the three bodies meet, you can barely tell whose limb is whose: thighs, shoulders and arms lock into a single faceted mass of rust and ochre. The picture reads less like three figures than one solid thing chiselled into shape.' },
    { x: '14%', y: '20%', w: 26, h: 26, label: 'A breath of green', detail: 'At the edges, slivers of cool green press in against all that fired-clay red, nearly the only color in the picture that isn’t earth. It is the one note of air around a group otherwise packed as tight as masonry.' },
  ],
  lineage: {
    parents: [ { label: 'Les Demoiselles', mode: 'art' }, { label: 'African sculpture', mode: 'art' }, { label: 'Cézanne', mode: 'art' } ],
    children: [ { label: 'Analytic Cubism', mode: 'art' }, { label: 'Houses at Horta', mode: 'art' }, { label: 'Carved sculpture', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Portuguese (Braque, 1911): the first stencilled letters in Cubism.
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
  hook: 'Braque dissolved a guitar player into a haze of brown facets, then stencilled the letters “D BAL” across the top, and printed type walked into painting for good.',
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
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1911', title: 'Roped to Picasso, still', blurb: 'A year on from Violin and Jug, Braque and Picasso have faceted the world almost to vapour, and Braque is about to let a printed word into the fog.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: 'Summer 1911', title: 'A musician, dissolved', blurb: 'A Portuguese guitarist Braque remembered from a bar, broken into a shimmer of brown planes so fine the figure nearly vanishes.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Find “D BAL”, then the guitar', blurb: 'Start with the stencilled letters at the top, then hunt down the head and the guitar surfacing from the haze.', progress: 0.56 },
    { id: 'letters', eyebrow: 'The point', dateLabel: '1911', title: 'The day type walked in', blurb: 'Why a few stencilled letters were a revolution, flat, real, mass-produced, sitting on the surface, and pointing straight at collage.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1911–today', title: 'Basel, again', blurb: 'Like Violin and Jug, it owes its home to one Swiss banker who bought Cubism before the world agreed it was art.', progress: 0.95 },
  ],
  provenance: [
    { year: '1911', who: 'Georges Braque (the artist)', place: 'Paris / Céret', note: 'Painted partly in the Pyrenean town of Céret, where Braque and Picasso spent the summer working side by side.', price: null },
    { year: 'from 1921', who: 'Raoul La Roche', place: 'Paris / Basel', note: 'The Basel-born banker and Le Corbusier’s friend buys it at the 1921 Kahnweiler sequestration sale (Braque’s dealer stock, seized as enemy property in the war), part of his deep Cubist collection.', price: null },
    { year: '1952–63', who: 'Kunstmuseum Basel', place: 'Basel', note: 'Donated with the rest of La Roche’s Cubist holdings, in stages, making Basel a stronghold of the movement.', price: null, museum: true },
  ],
  figures: [
    { name: 'Braque', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Picasso', role: 'The other rope-end', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Raoul La Roche', role: 'The collector who saved it', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
  ],
  annotations: [
    { x: '66%', y: '20%', w: 58, h: 34, label: 'Stencilled letters', detail: 'Across the top, in crisp block capitals, the letters “D BAL” (from GRAND BAL, a dance-hall poster) and below them a scatter of stencilled numbers. They are stencilled, sharp, flat, mechanical, and they sit dead on the surface, refusing to join the faceted haze behind them. This is the move the whole picture is famous for.' },
    { x: '46%', y: '28%', w: 54, h: 24, label: 'The musician’s head', detail: 'Below the lettering, a rounded mass of paler planes is the player’s head and shoulders, tipped slightly, almost lost in the shimmer. Braque gives you just enough, a curve, a shadow, to feel a person is there before he dissolves again.' },
    { x: '40%', y: '74%', w: 52, h: 28, label: 'The guitar', detail: 'Lower center, the diagonal strings and the soft curve of a sound-hole give away the guitar across the musician’s lap. It is the firmest representational object in the picture, the thing that tells you this is a seated player and not pure abstraction.' },
    { x: '55%', y: '50%', w: 44, h: 26, label: 'Planes that bleed', detail: 'Everywhere, edges that should belong to the figure open and leak into the background, so body and air are built from the same broken brown light, the Analytic-Cubism trick called passage, here pushed nearly to the point of vapour.' },
  ],
  lineage: {
    parents: [ { label: 'Violin and Jug', mode: 'art' }, { label: 'Cézanne', mode: 'art' }, { label: 'Café posters', mode: 'civ' } ],
    children: [ { label: 'Collage', mode: 'art' }, { label: 'Chair Caning', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Breakfast / Le Petit Déjeuner (Juan Gris, 1914): the model Synthetic-
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
    { id: 'setting', eyebrow: 'Lay of the land', dateLabel: '1912–14', title: 'The third man', blurb: 'While the founders improvised, a quiet Spaniard named Juan Gris turned Cubism from an instinct into a system, and joined the collage revolution they had started.', progress: 0.08 },
    { id: 'making', eyebrow: 'The work', dateLabel: '1914', title: 'Pasted, not painted', blurb: 'Gris glues down two kinds of printed wood-grain paper and a strip of real wallpaper, then draws and paints the breakfast table on top of them.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'A table you can actually read', blurb: 'Coffee pot, cup, glasses, a newspaper, far more legible than the founders ever allowed, with a joke folded into the headline.', progress: 0.56 },
    { id: 'system', eyebrow: 'The point', dateLabel: '1914', title: 'Cubism made rigorous', blurb: 'Where Picasso and Braque felt their way, Gris calculated, clean, locked, almost architectural. The most orderly Cubism anyone made.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1914–today', title: 'The short, bright career', blurb: 'Gris died at forty with his reputation still catching up; his Breakfast now hangs at MoMA as the textbook Synthetic-Cubist collage.', progress: 0.95 },
  ],
  provenance: [
    { year: '1914', who: 'Juan Gris (the artist)', place: 'Paris', note: 'Made early in 1914 (the collaged newspaper is dated February), during Gris’s great burst of papiers collés.', price: null },
    { year: 'from 1914', who: 'Daniel-Henry Kahnweiler', place: 'Paris', note: 'Gris was under contract to Kahnweiler, the same dealer who backed Picasso and Braque, until the war scattered them.', price: null },
    { year: '1948', who: 'Museum of Modern Art', place: 'New York', note: 'Bought from Galerie Louise Leiris (Kahnweiler’s reconstituted gallery) through the Lillie P. Bliss Bequest; now among MoMA’s core Cubist holdings, the model of how collage rebuilt the still life.', price: null, museum: true },
  ],
  figures: [
    { name: 'Juan Gris', role: 'The painter', palette: ['#3a6a7a', '#8a6b3a', '#1c2a2e'] },
    { name: 'Picasso', role: 'The senior Spaniard', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Kahnweiler', role: 'The dealer', palette: ['#5a4a3a', '#2a221c', '#0a0606'] },
    { name: 'Braque', role: 'Co-inventor of papier collé', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
  ],
  annotations: [
    { x: '42%', y: '78%', w: 42, h: 16, label: 'His name in the headline', detail: 'A torn strip of newspaper reads “…OURN…”, from the masthead of Le Journal, and read aloud it puns on the painter’s own first name: Juan sounds like that fragment in French. Just below, “…ZA GRIS” gives his surname (gris means “gray”). His whole name, signed inside the picture as a scrap of newsprint.' },
    { x: '56%', y: '55%', w: 40, h: 24, label: 'The cup and saucer', detail: 'Dead center, a white coffee cup and saucer are drawn with almost old-fashioned, rounded clarity, solid, shaded, completely readable. Gris lets you have the real object, then surrounds it with flat pasted planes, so realism and abstraction share one table.' },
    { x: '33%', y: '40%', w: 40, h: 26, label: 'The coffee pot', detail: 'To the left, the tall pale shape of a coffee pot or pitcher rises out of the composition. Notice how Gris splits it down a clean vertical seam, light on one side, shadow on the other, slicing a single object into two views without ever losing it.' },
    { x: '30%', y: '86%', w: 46, h: 18, label: 'Imitation wood-grain', detail: 'That wood-grain is not painted: the tabletop, the legs at the bottom, and the strips behind are cheap, factory-printed wood-grain paper, glued down (Gris used two different kinds). A mass-produced fake of timber, standing in for the real café table: collage doing the work paint used to do.' },
  ],
  lineage: {
    parents: [ { label: 'Chair Caning', mode: 'art' }, { label: 'Analytic Cubism', mode: 'art' }, { label: 'Mechanical printing', mode: 'civ' } ],
    children: [ { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Purism', mode: 'art' }, { label: 'Art Deco', mode: 'civ' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Three Musicians (Picasso, 1921, the Philadelphia version): the grand
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
  hook: 'Picasso’s farewell to Cubism’s heroic decade: three masked players built from flat, bright planes, collage remembered in pure paint, and a quiet elegy for lost friends.',
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
    { id: 'making', eyebrow: 'The work', dateLabel: 'Summer 1921', title: 'Painted like cut paper', blurb: 'Two near-identical giants, built from flat interlocking planes of bright color, the look of pasted paper, achieved in pure paint.', progress: 0.32 },
    { id: 'reading', eyebrow: 'How to look', dateLabel: 'The picture', title: 'Three masked players', blurb: 'A violin, a clarinet and an accordion: a Harlequin, a Pierrot and a robed monk, staring out of a shallow brown room.', progress: 0.56 },
    { id: 'elegy', eyebrow: 'The point', dateLabel: '1921', title: 'A portrait of ghosts', blurb: 'The three masks are widely read as Picasso and two poet friends, one dead, one turned monk, which makes this bright picture a quiet elegy.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'What happened next', dateLabel: '1921–today', title: 'Two versions, two cities', blurb: 'He painted it twice in the same summer; one hangs in New York, this one in Philadelphia, the grand last word of Cubism’s great decade.', progress: 0.95 },
  ],
  provenance: [
    { year: '1921', who: 'Pablo Picasso (the artist)', place: 'Fontainebleau', note: 'Painted over the summer in the garage of a rented villa, in two large versions at once.', price: null },
    { year: 'by the 1930s', who: 'A. E. Gallatin', place: 'New York', note: 'The American collector hangs it in his Gallery of Living Art at New York University (renamed the Museum of Living Art in 1936), one of the first places Americans could see modern art for free.', price: null },
    { year: '1943–52', who: 'Philadelphia Museum of Art', place: 'Philadelphia', note: 'Gallatin gives his collection to the museum in 1943 (when NYU reclaimed the gallery space); the bequest is completed on his death in 1952. A centrepiece of the Cubist rooms.', price: null, museum: true },
  ],
  figures: [
    { name: 'Picasso', role: 'The painter (Harlequin)', palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'] },
    { name: 'Apollinaire', role: 'The dead poet (Pierrot)', palette: ['#3a4a6a', '#2a3048', '#0e1422'] },
    { name: 'Max Jacob', role: 'The friend turned monk', palette: ['#3a3026', '#1c160e', '#0a0606'] },
    { name: 'A. E. Gallatin', role: 'The collector', palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'] },
  ],
  annotations: [
    { x: '50%', y: '22%', w: 82, h: 20, label: 'Three masks', detail: 'Across the top, three masked faces stare straight out: the diamond-costumed Harlequin at left, the white Pierrot in a black domino mask at center, a hooded monk at right. They are flat, frontal and unreadable, carnival masks, not portraits, which is part of why the picture feels haunted.' },
    { x: '38%', y: '31%', w: 52, h: 24, label: 'The instruments', detail: 'A violin in the hands of the Harlequin at left, a clarinet held to the Pierrot’s mouth at center, and an accordion worked by the robed monk at right: the “music” of three musicians, rendered as flat brown and black shapes. You read the instruments by their silhouettes, the way you’d read a paper cut-out.' },
    { x: '30%', y: '64%', w: 34, h: 28, label: 'Flat shapes, cut and laid down', detail: 'The Harlequin’s costume is a field of orange-and-cream diamonds, built as flat interlocking planes with hard edges, exactly the look of pasted colored paper. Nine years after Chair Caning, Picasso paints collage instead of gluing it.' },
  ],
  lineage: {
    parents: [ { label: 'Chair Caning', mode: 'art' }, { label: 'Synthetic Cubism', mode: 'art' }, { label: 'Commedia dell’arte', mode: 'civ' } ],
    children: [ { label: 'Surrealism', mode: 'art' }, { label: 'Pop Art', mode: 'art' }, { label: 'Modern stage design', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Artist, Picasso (1881–1973)
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
  span: '91 years',
  nationality: 'Spanish (worked in France)',
  movements: ['Cubism', 'Surrealism (occasional)', 'Neoclassicism', 'Symbolism (early)'],
  accent: ART_ACCENTS.violet,
  chain: { name: 'Cubist artists', index: 1, total: 6 },
  hook: 'The most famous artist of the twentieth century, and the one who decided what the rest of it would have to argue with.',
  hookLong:
    'Picasso made roughly 50,000 works in his lifetime, paintings, drawings, sculptures, ceramics, prints, costumes. With the French painter Georges Braque he invented Cubism, the breaking of the single fixed viewpoint so a face could show several sides at once, then walked away from it. He painted in classical styles in the 1920s, made the most famous antiwar painting of the century in 1937, and was wealthy by forty and a millionaire long before the end. He treated the women in his life badly, by their accounts and his own, and the work does not erase it. He outlived most of his contemporaries and rivals.',
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
    { id: 'african', label: 'African / Proto-Cubist', range: '1906–1909', color: ART_ACCENTS.rust, summary: 'Ancient Iberian carving (the pre-Roman sculpture of his native Spain), then African masks brought to Paris through colonial channels, their makers unnamed. Demoiselles falls in this period.', size: 'm' },
    { id: 'analytic', label: 'Analytic Cubism', range: '1909–1912', color: ART_ACCENTS.violet, summary: 'The object taken apart into faceted planes, with Braque, in Paris. Almost monochrome, almost unreadable.', size: 'l' },
    { id: 'synthetic', label: 'Synthetic Cubism', range: '1912–1919', color: ART_ACCENTS.green, summary: 'The object built back up from flat shapes and pasted scraps, a brighter palette, sometimes literal newspaper.', size: 'm' },
    { id: 'neo', label: 'Neoclassical', range: '1920–1929', color: ART_ACCENTS.amber, summary: 'A return to classical figures, large women, Mediterranean light.', size: 'm' },
    { id: 'sur', label: 'Surrealist tendency', range: '1930–1936', color: ART_ACCENTS.violet, summary: 'Bull-headed Minotaurs, bodies melting into soft organic shapes, sex and violence.', size: 's' },
    { id: 'war', label: 'War Years', range: '1937–1945', color: ART_ACCENTS.rust, summary: 'Guernica, photographed as he painted it by Dora Maar, whose face became his Weeping Woman. Then the German occupation, which he sat out in Paris.', size: 'l' },
    { id: 'late', label: 'Late Period', range: '1946–1973', color: ART_ACCENTS.blue, summary: 'Ceramics, painted variations on the old masters, the south of France. He never set foot in Spain again while Franco ruled.', size: 'l' },
  ],
  keyWorks: [
    { year: 1903, name: 'La Vie', period: 'blue', hook: 'A mournful blue picture painted after the suicide of his close friend Carles Casagemas.' },
    { year: 1905, name: 'Family of Saltimbanques', period: 'rose', hook: 'A circus family in pink dust, painted as his first real money arrived.' },
    { year: 1907, name: 'Les Demoiselles d’Avignon', period: 'african', hook: 'The painting nobody liked. The one that mattered most.' },
    { year: 1910, name: 'Portrait of Kahnweiler', period: 'analytic', hook: 'Picasso and Braque’s dealer, in shards. Cubism at its most austere.' },
    { year: 1912, name: 'Still Life with Chair Caning', period: 'synthetic', hook: 'A scrap of oilcloth glued straight to the canvas: the first Cubist collage, real stuff stuck on instead of painted.' },
    { year: 1937, name: 'Guernica', period: 'war', hook: 'A bombed Basque town, in black and white, 25 feet across.' },
    { year: 1957, name: 'Las Meninas (series)', period: 'late', hook: 'Fifty-eight canvases in one summer, forty-four of them variations on Velázquez, the old Spanish master.' },
  ],
  life: [
    { year: 1881, label: 'Born Málaga' },
    { year: 1895, label: 'Family moves to Barcelona' },
    { year: 1900, label: 'First trip to Paris' },
    { year: 1904, label: 'Settles in Paris (the Bateau-Lavoir, the cheap Montmartre studio building)' },
    { year: 1907, label: 'Demoiselles' },
    { year: 1910, label: 'Analytic Cubism (with Braque)' },
    { year: 1914, label: 'Braque mobilised; Cubism partnership ends' },
    { year: 1917, label: 'Designs for the Ballets Russes, a Paris ballet company (Parade)' },
    { year: 1918, label: 'Marries the dancer Olga Khokhlova' },
    { year: 1927, label: 'Meets Marie-Thérèse Walter (she is 17, he is 45)' },
    { year: 1936, label: 'Dora Maar, who photographs Guernica and becomes the Weeping Woman' },
    { year: 1937, label: 'Guernica' },
    { year: 1943, label: 'Meets Françoise Gilot, who later leaves him and writes about it' },
    { year: 1944, label: 'Joins the French Communist Party' },
    { year: 1961, label: 'Marries Jacqueline Roque, his last wife and model' },
    { year: 1973, label: 'Dies at Mougins' },
  ],
  lineage: {
    parents: [ { label: 'Cézanne', mode: 'art' }, { label: 'Iberian sculpture', mode: 'art' }, { label: 'Belle Époque Paris', mode: 'civ' } ],
    children: [ { label: 'Cubism', mode: 'art' }, { label: 'Surrealism', mode: 'art' }, { label: 'Abstract Expressionism', mode: 'art' } ],
  },
}

// Lookups for routing (only authored entities resolve; others ⇒ coming-soon).
// ─────────────────────────────────────────────────────────────
// Work, A Burial at Ornans (1850). The flagship Realism work read. Authored
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
  chain: { name: 'Works of Realism', index: 3, total: 9 },
  hook: 'A whole village funeral, painted ten feet tall, the scale the Salon kept for the death of kings.',
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
    { id: 'town', eyebrow: 'Ornans · 1848', dateLabel: '1848', title: 'The town and the grave', blurb: 'The most ordinary death there is, a relative’s funeral in a backwater town, and Courbet decides to paint it at the size Europe kept for kings.', progress: 0.08 },
    { id: 'frieze', eyebrow: 'The canvas', dateLabel: '1849–50', title: 'Forty neighbors at the scale of kings', blurb: 'Ten feet tall, twenty-two wide: a long frieze of real townsfolk around an open grave, the gravedigger, the skull, the red beadles, the indifferent dog, the Ornans cliff.', progress: 0.34 },
    { id: 'salon', eyebrow: 'Paris · 1850–51', dateLabel: '1850–51', title: 'The bomb in the Salon', blurb: 'Hung beside The Stone Breakers in the official Salon, the country funeral detonates, ugliness, monstrous scale, and the shadow of 1848.', progress: 0.58 },
    { id: 'romanticism', eyebrow: 'Courbet’s verdict', dateLabel: '1850s', title: 'The burial of Romanticism', blurb: 'What Courbet meant by his famous line, and why this canvas is Realism’s public birth five years before the 1855 manifesto.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1881–today', title: 'Afterlife', blurb: 'Juliette Courbet gives it to the nation in 1881; the Louvre to the Musée d’Orsay in 1986; the canvas where modern art’s subject cracked open.', progress: 0.96 },
  ],
  provenance: [
    { year: '1849–1877', who: 'Gustave Courbet (the artist)', place: 'Ornans / Paris', note: 'Painted 1849–50 in Ornans; shown at the Salon of 1850–51; it stayed with the artist until his death in Swiss exile in 1877.', price: null },
    { year: '1877–1881', who: 'The Courbet family', place: 'Ornans', note: 'After Courbet died in exile in Switzerland in 1877, the enormous canvas remained with his family.', price: null },
    { year: '1881', who: 'Juliette Courbet (his sister)', place: 'Paris', note: 'Donates the painting to the French State, the very canvas the State’s official Salon had recoiled from thirty years earlier.', price: 'gift to the nation', museum: true },
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
    { label: 'The hole everyone is here for', where: 'Center foreground, low, the bare turned earth', detail: 'The whole crowd is gathered around this, not a coffin, not a cross, but an open grave painted as a flat black wedge with almost no depth, a void dropped into the dead center where a hero ought to be. The gravedigger kneels patiently beside it in his shirtsleeves, and on the turned earth lie a skull and a scatter of bones, dug up to make room: the bluntest reminder of death there is, with no allegory and no scythe.' },
    { label: 'The one thing pointing up', where: 'Upper left, held against the gray sky', detail: 'A bearer holds a crucifix aloft against the flat gray sky, the single strong vertical in a painting that is otherwise all horizontal line. In a Salon history painting the heavens would open behind it; here the sky just stays gray and gives nothing back.' },
    { label: 'The loudest color in the room', where: 'Left of center, with the clergy, the two figures in red', detail: 'The figures in vivid red are beadles, minor parish officers who keep order at services. Courbet gave the grandest color in the whole painting (the red a history painter would save for a cardinal or a king) to two small-town church ushers with frankly ordinary faces.' },
    { label: 'Two men wearing the wrong decade', where: 'Center, in white stockings and knee breeches', detail: 'Among the men in 1840s mourning black stand two old fellows in the suits and knee breeches of 1793, the dress of the First Republic, half a century out of fashion. They are real sitters (friends of Courbet’s grandfather): veterans of the Revolution planted in the crowd. In 1850, two years after the barricades, that detail did not feel safe.' },
    { label: 'Grief on the right, a dog who doesn’t care', where: 'The right half (the women); the white dog, center-right foreground', detail: 'The women are massed on the right, some pressing handkerchiefs to their faces, the only open grief in the picture (the artist’s own sisters Juliette, Zoé and Zélie are among them). And down in front, back turned to the whole solemn business, a small dog sniffs off toward the edge, completely indifferent. No history painter would have let that animal stay; Courbet gave it the front row.' },
    { label: 'The real rock behind the real people', where: 'The pale band across the top, behind the crowd', detail: 'That pale, chalky wall of limestone is not invented scenery, it is the actual escarpment of the Ornans valley, Courbet’s hometown geology placed behind his hometown neighbors. Almost the same value as the sky, it refuses to recede; it stands up as a near-featureless wall that presses the figures flat against the viewer.' },
  ],
  lineage: {
    parents: [ { label: 'Dutch group portrait', mode: 'art' }, { label: 'The 1848 Revolution', mode: 'civ' }, { label: 'The Stone Breakers', mode: 'art' } ],
    children: [ { label: 'Realism', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'Édouard Manet', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Impression, Sunrise (Monet, 1872), the first IMPRESSIONISM work.
// Authored through the art content pipeline (fact pack → Opus draft → 5 critic
// gates → reconcile → revise); narrative in art-section-reader.tsx under
// 'impression-sunrise' (Is… prefix).
// ─────────────────────────────────────────────────────────────
export const IMPRESSION_SUNRISE: ArtWorkContent = {
  id: 'impression-sunrise',
  name: 'Impression, Sunrise',
  shortName: 'Impression, Sunrise',
  year: 1872,
  artist: 'Claude Monet',
  artistId: 'monet',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 7 in × 2 ft 1 in',
  location: 'Musée Marmottan Monet, Paris',
  acquired: 'Gift of Eugène and Victorine Donop de Monchy, 1940',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 2, total: 9 },
  hook: 'A foggy little dawn sketch a critic said wallpaper was more finished than, and the insult named the movement.',
  heroImage: ART_IMG.impressionSunrise,
  heroCredit: 'Monet, Impression, Sunrise, 1872 · Musée Marmottan Monet, Paris',
  heroAspect: 1.31, // 48 × 63 cm → W/H ≈ 1.31
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1872', k: 'Painted' },
    { v: '1′7″ × 2′1″', k: 'Dimensions' },
    { v: 'Marmottan', k: 'Now at' },
  ],
  sections: [
    { id: 'le-havre', eyebrow: 'Le Havre', dateLabel: '1872', title: 'Home port at war’s end', blurb: 'Monet returns from London exile to his home harbour, where Turner and Whistler’s dissolved-form fog meets his own modern, smoking, working port at dawn.', progress: 0.08 },
    { id: 'the-morning', eyebrow: 'A hotel window', dateLabel: '13 Nov 1872 · 7:35 a.m.', title: '7:35 a.m., a hotel window', blurb: 'One rapid dawn impression from a hotel window, the sun that vanishes in greyscale, the broken reflection, and the forensic-astronomy detective work that dated it to a specific morning.', progress: 0.32 },
    { id: 'the-name', eyebrow: 'Paris', dateLabel: '25 April 1874', title: 'Wallpaper more finished than that seascape', blurb: 'Nadar’s old studio, catalogue No. 98, and Leroy’s mocking Charivari review, followed four days later by a friendly critic who used the same word approvingly.', progress: 0.56 },
    { id: 'the-break', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'Not the first, but the one that named it', blurb: 'Impression over finish, sensation over description, the modern industrial subject, and colour-contrast over brightness, four breaks carried by one small canvas.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1878–today', title: 'Sold for a song, stolen at gunpoint, immortal', blurb: 'A bankruptcy auction sells it for 210 francs; an armed gang walks it out of the Marmottan in 1985; it comes back damaged, gets conserved, and rehangs in 1991.', progress: 0.96 },
  ],
  provenance: [
    { year: '1874–1878', who: 'Ernest Hoschedé (department-store magnate, early Impressionist patron)', place: 'Paris', note: 'Bought from Monet not long after the first Impressionist exhibition for 800 francs, the painting’s first owner.', price: '800 francs' },
    { year: '1878', who: 'Dr Georges de Bellio (Romanian-born homeopathic physician, an earliest Impressionist collector)', place: 'Paris (Hôtel Drouot)', note: 'Bought at the forced auction of the bankrupt Hoschedé’s collection, for 210 francs, about a quarter of what Hoschedé had paid four years earlier. The famous figure behind the "sold for a song" story.', price: '210 francs' },
    { year: '1894–1940', who: 'Victorine de Bellio + Eugène Donop de Monchy', place: 'Paris', note: 'De Bellio’s daughter Victorine and her husband Eugène inherit the painting on the doctor’s death in 1894 and keep it through the next two generations.', price: null },
    { year: '1940–today', who: 'Musée Marmottan Monet', place: 'Paris', note: 'The Donop de Monchys give the painting to the Académie des Beaux-Arts; it enters the Musée Marmottan in Paris’s 16th arrondissement (inv. 4014). Stolen at gunpoint in October 1985, recovered five years later in Corsica with damp damage, conserved, and back on view in 1991. On permanent view.', price: 'gift to the nation', museum: true },
  ],
  figures: [
    { name: 'Claude Monet', role: 'The painter', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Louis Leroy', role: 'Critic who mocked it', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Jules-Antoine Castagnary', role: 'Critic who praised it', palette: ['#5a7a6a', '#2e3a30', '#0e1410'] },
    { name: 'Ernest Hoschedé', role: 'First owner', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Georges de Bellio', role: 'Bought it for 210 francs', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Donald Olson', role: 'Astronomer-detective', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Margaret Livingstone', role: 'Neuroscientist · equiluminance', palette: ['#6a7250', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The sun, and the trail it drops', where: 'Upper area, a little above centre and slightly right of centre', detail: 'That small orange disk is the sun, low over the water through morning mist. Follow it straight down and you’ll find its reflection, not a smooth column of light but a broken, flickering streak of orange dabs on the gray water, the way a real reflection shatters on a moving surface. Both the sun and this trail were the very last marks Monet added, dropped warm onto a cool gray field.' },
    { label: 'The brightest thing that isn’t bright', where: 'That same orange sun, upper area, slightly right of centre', detail: 'The sun looks like it blazes, but it’s almost exactly as bright as the gray sky around it, it only pops because of its warm orange colour against the cool gray. The proof: imagine the whole picture as a black-and-white copy, colour drained away. The sun nearly disappears into the sky. Its punch is a colour punch, not a brightness one, and that mismatch is why it seems to faintly shimmer: the part of your vision that pins down position can’t lock onto a sun it can’t even detect in gray, so your eye keeps re-aiming and never quite settles.' },
    { label: 'Two boats, fading into the morning', where: 'Lower portion, toward the centre', detail: 'Two dark little boats sit low on the water, each with a figure aboard, somebody rowing or standing. The nearer one is a touch sharper; the farther one is fainter, half-dissolved into the haze. Don’t count too hard: the boats and figures are deliberately vague, painted as silhouettes, not described in detail. That softness is the point, it’s what the eye actually catches at dawn.' },
    { label: 'A ghost-fleet of masts', where: 'Background, toward the left', detail: 'Those faint vertical lines rising against the misty sky on the left are the masts of sailing ships at anchor in the outer harbour, including the tall, slim masts of the fast cargo clippers. Monet doesn’t draw the rigging; he barely suggests the poles. They’re a pale gray-blue ghost-fleet, there and not-there, exactly as a forest of masts looks across the water through morning fog.' },
    { label: 'The working port is the whole point', where: 'A drifting smoke-plume on the left; cranes and derricks on the right', detail: 'This is an industrial harbour on both sides. To the left, beyond the masts, a plume of smoke drifts across the sky, leaning on a faint wind. To the right, look for the hazy shapes of dockside cranes and derricks (the tall arms that load cargo) and factory chimneys trailing more smoke. It’s not a pretty timeless seascape, it’s a modern working port at dawn, and the smoke and machinery are the subject, not background clutter.' },
    { label: 'Paint that doesn’t pretend to be water', where: 'Across the lower half, the whole stretch of harbour surface', detail: 'The water is brushed in quick, loose horizontal strokes, wet and slithery, with no attempt to render individual waves or careful reflections. You can see the speed in it. This open, "unfinished" handling is exactly what critics attacked, one said wallpaper was more finished than this, but it’s deliberate: Monet wanted the liveness of a fleeting morning, which a slow polish would have killed.' },
    { label: 'Where the sea and sky stop being two things', where: 'The middle band, where water meets sky', detail: 'Try to find the horizon line and you’ll struggle. Monet lets the gray water and the gray sky blur into each other in the haze, so there’s barely a seam between them. That dissolving of solid edges, the trick he absorbed from Turner and Whistler’s foggy Thames in London, is the whole atmosphere of the painting: a world softened into coloured air at first light.' },
  ],
  lineage: {
    parents: [ { label: 'Turner', mode: 'art' }, { label: 'Whistler', mode: 'art' }, { label: 'Manet', mode: 'art' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Post-Impressionism', mode: 'art' }, { label: 'Modern painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, La Grenouillère (Monet, 1869). The Impressionist method invented
// side by side with Renoir on the Seine, across the summer of 1869.
// Authored through the art content pipeline; narrative under 'grenouillere'.
// ─────────────────────────────────────────────────────────────
export const GRENOUILLERE: ArtWorkContent = {
  id: 'grenouillere',
  name: 'La Grenouillère',
  shortName: 'La Grenouillère',
  year: 1869,
  artist: 'Claude Monet',
  artistId: 'monet',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 5½ in × 3 ft 3 in',
  location: 'The Metropolitan Museum of Art, New York',
  acquired: 'H. O. Havemeyer Collection, bequest of Mrs. H. O. Havemeyer, 1929',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 1, total: 9 },
  hook: 'Two broke friends spent a summer on the Seine, easels next to each other, and worked out how to paint moving sun-struck water as paint.',
  heroImage: ART_IMG.monetGrenouillere,
  heroCredit: 'Monet, La Grenouillère, 1869 · The Metropolitan Museum of Art, New York',
  heroAspect: 1.34, // 74.6 × 99.7 cm → W/H ≈ 1.336
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1869', k: 'Painted' },
    { v: '2′5½″ × 3′3″', k: 'Dimensions' },
    { v: 'Met', k: 'Now at' },
  ],
  sections: [
    { id: 'seine', eyebrow: 'Croissy · summer 1869', dateLabel: '1869', title: 'Croissy, summer 1869', blurb: 'Monet at Saint-Michel, Renoir at Voisins, both broke; the new Saint-Lazare railway puts Paris’s working class on the river for the afternoon, and the floating café "La Grenouillère" is where they all go.', progress: 0.08 },
    { id: 'making', eyebrow: 'Two easels', dateLabel: 'July–Sept 1869', title: 'Two friends, one method', blurb: 'Monet & Renoir set up easels next to each other across the summer, not on a single day. The pochades they paint there invent a working method that will later be named Impressionism.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '74.6 × 99.7 cm', title: 'What’s in the picture', blurb: 'The floating café, the round wooden "Camembert" island, day-trippers without faces, dark rowboats, small bathers in the water on the left, a band of dappled trees overhead, and water in jabs of separate color.', progress: 0.56 },
    { id: 'break', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'A method, not a movement (yet)', blurb: 'Four breaks: sketch-as-finished-picture, paint that reads as moving water, figures-as-marks, modern leisure as a fit subject, the working method of Impressionism, found before the name.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1870–today', title: 'A lost tableau, three transcripts', blurb: 'The big Salon version, rejected in 1870, ends up in the Berlin Arnhold collection and is lost in WWII. The three surviving on-the-spot pochades sit in the Met, the Nationalmuseum (Stockholm) and the National Gallery (London).', progress: 0.96 },
  ],
  provenance: [
    { year: '1869–c.1880s', who: 'Claude Monet (the artist)', place: 'France', note: 'Painted on the spot at La Grenouillère, Croissy-sur-Seine, summer 1869, one of several pochades Monet wrote to Bazille about that season.', price: null },
    { year: 'c.1880s–1897', who: 'Édouard / Suzanne Manet, then Durand-Ruel circle', place: 'Paris', note: 'Tentatively passed to Manet’s widow Suzanne Leenhoff after his death (1883); circulated through Paul Durand-Ruel’s gallery in the 1880s–90s, the chain has some hedge in the documentation.', price: null },
    { year: '1897–1929', who: 'H. O. and Louisine Havemeyer', place: 'New York', note: 'The great American Impressionist collectors bought it 27 September 1897 (~12,500 francs), guided by their friend Mary Cassatt. Held in their Fifth Avenue collection for three decades.', price: '~12,500 fr' },
    { year: '1929–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Louisine Havemeyer’s 1929 bequest brings hundreds of Impressionist canvases into the Met, this one among them (acc. 29.100.112). On permanent view.', price: 'bequest', museum: true },
  ],
  figures: [
    { name: 'Claude Monet', role: 'The painter', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Pierre-Auguste Renoir', role: 'Painted the same spot beside him', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'] },
    { name: 'Frédéric Bazille', role: 'Their friend who got the letter (killed 1870)', palette: ['#5a6a5a', '#2e3a2e', '#0e120e'] },
    { name: 'H. O. & Louisine Havemeyer', role: 'American collectors who bought it', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The floating café and its little round island', where: 'Middle distance, dead center, the round wooded island and the wooden gangplank running out to the flat platform', detail: 'That fat round green island in the middle is the one locals nicknamed "Le Camembert," after the round French cheese. The narrow wooden gangplank running out from it leads to the rectangular floating platform, the bathing-and-dance pavilion of La Grenouillère itself, where everyone is hanging out. Monet paints the planking as broad horizontal slabs of olive green and warm gray, no fussy plank-by-plank detail; the whole pavilion reads as a flat stage, the people on it as a cast.' },
    { label: 'Clerks and shopgirls with no faces', where: 'On the platform and along the gangplank, just above center', detail: 'Look for the dark-suited figures clustered on the platform and walking the gangplank. They’re Parisian day-trippers in their Sunday best, clerks, shopgirls, students, out from the city by train for the afternoon. They’re painted only a few inches high, as wedges of dark paint with pale highlights, with no faces at all. From across the river in glare, this is exactly what a small crowd looks like, silhouettes, not portraits.' },
    { label: 'Tilted hulls in the foreground', where: 'Lower left foreground, along the bank, the prows of several boats jutting out', detail: 'Those tilted dark wedges with pale ribs along the bottom-left are the bows of rowboats and skiffs tied along the riverbank, long-bellied wooden boats you’d rent for the afternoon. Monet paints them as solid dark masses with little pale highlights along the gunwale (the boat’s upper edge) catching the sun. They are the heaviest, darkest paint in the picture, anchoring the corner.' },
    { label: 'A few brushstrokes that happen to be people in the river', where: 'Middle distance on the LEFT side of the canvas, small figures in the water, just past the rowboats and over toward the floating pavilion', detail: 'Half-immersed in the water on the LEFT side of the picture, well back from the bank and just shy of the floating pavilion, is a small cluster of bathers, men and women in white or dark shirts, standing waist-deep on a hot afternoon. They are easy to miss because they’re small and set back. Each one is only a few broken brushstrokes. They have no faces.' },
    { label: 'Choppy water in separate dashes of color', where: 'The whole lower two-thirds of the canvas, the entire stretch of river surface', detail: 'This is the technical headline of the picture. Look closely and the water is not painted as a smooth pane or a mirror, it’s slate blue, emerald, white, ochre, and dark brown, slashed across in short, separate, mostly-horizontal jabs of unmixed paint. Where the trees on the far bank reflect, Monet doesn’t paint a mirrored shape, he paints continuous horizontal bars in the colors of the reflection. Step back and your eye does the mixing on its own.' },
    { label: 'Summer foliage in unblended greens', where: 'The upper third, the dense band of trees on the far bank', detail: 'The whole top third of the canvas is trees, dense summer foliage on the far bank, painted in unblended greens and yellow-greens with dapples of warm light and pockets of dark shadow stitched into them. There is essentially no sky visible above; the picture’s light isn’t coming down from a blue band overhead, it is bouncing up off the water.' },
  ],
  lineage: {
    parents: [ { label: 'Manet · Déjeuner', mode: 'art' }, { label: 'Barbizon plein air', mode: 'art' }, { label: 'Saint-Lazare railway', mode: 'civ' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Broken color', mode: 'art' }, { label: 'Post-Impressionism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Cradle (Morisot, 1872). Morisot's sister Edma watching her own
// sleeping daughter Blanche; debuted at the FIRST Impressionist Exhibition 1874.
// ─────────────────────────────────────────────────────────────
export const CRADLE: ArtWorkContent = {
  id: 'cradle',
  name: 'The Cradle',
  shortName: 'The Cradle',
  year: 1872,
  artist: 'Berthe Morisot',
  artistId: 'morisot',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 10 in × 1 ft 6¼ in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Bought by the Louvre from Blanche Pontillon Forget in 1930, 300,000 francs; transferred to the Musée d’Orsay 1986',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 3, total: 9 },
  hook: 'Berthe Morisot’s sister Edma watching her own sleeping daughter through a veil of paint, by the only woman to show at the first Impressionist exhibition.',
  heroImage: ART_IMG.morisotCradle,
  heroCredit: 'Morisot, The Cradle, 1872 · Musée d’Orsay, Paris',
  heroAspect: 0.83, // 56 × 46.5 cm portrait → W/H ≈ 0.83
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1872', k: 'Painted' },
    { v: '1′10″ × 1′6¼″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'sister', eyebrow: 'Two sisters', dateLabel: '1869–1872', title: 'The sister who quit, and the one who didn’t', blurb: 'Berthe and Edma both trained as painters; Edma, the more praised early on, quit on her marriage in 1869. Berthe, who didn’t, painted her sister into one of the most famous paintings of motherhood ever made.', progress: 0.08 },
    { id: 'making', eyebrow: 'The wall of access', dateLabel: '1872', title: 'The room she could observe', blurb: 'A respectable bourgeois woman in 1872 Paris could not sit alone in a café, go backstage at the ballet, or stand at the Folies-Bergère bar. Morisot painted what she could see, the nursery, and turned the access-wall into a method.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '56 × 46.5 cm', title: 'Edma, the gauze, and the baby through it', blurb: 'Edma seated on the left in a dark blue jacket, the cradle hung with translucent white gauze on the right, the sleeping Blanche just visible through the veil. The lightest, most translucent touch in the whole movement.', progress: 0.56 },
    { id: 'show', eyebrow: 'First Impressionist Exhibition', dateLabel: 'April 1874', title: 'The only woman in the show', blurb: 'Listed in the catalogue at 800 francs and did NOT sell. Morisot, the only woman among the 30 artists, exhibited nine works in the show that gave the movement its name; she married Eugène Manet (Édouard’s brother) eight months later.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1875–today', title: 'The sister who didn’t quit put it there', blurb: 'Descended within the family to Blanche herself; the Louvre bought it from Blanche Forget in 1930 for 300,000 francs; transferred to the Musée d’Orsay 1986. On permanent view.', progress: 0.96 },
  ],
  provenance: [
    { year: '1872–1874', who: 'Berthe Morisot (the artist)', place: 'Paris', note: 'Painted in 1872; kept by the artist. She married Eugène Manet (Édouard’s brother) on 22 December 1874, after the spring 1874 exhibition.', price: null },
    { year: '1874', who: 'Société Anonyme · 1st Impressionist Exhibition', place: 'Paris (35 bd des Capucines)', note: 'Listed in the catalogue at 800 francs. Did not sell. Morisot was the only woman among the thirty exhibitors.', price: '800 fr (listed; unsold)' },
    { year: '1874–1930', who: 'Berthe Morisot → Eugène Manet → Julie Manet → Edma Pontillon → Blanche Pontillon Forget', place: 'Paris', note: 'Stayed in the family through the next two generations and ultimately came to Blanche Pontillon Forget, the very baby asleep in the cradle in the picture.', price: null },
    { year: '1930–1986', who: 'Musée du Louvre', place: 'Paris', note: 'Bought from Blanche Pontillon Forget in 1930 for 300,000 francs, the State finally paying for what it had been offered for 800 fifty-six years earlier.', price: '300,000 fr', museum: true },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'Transferred from the Louvre when the Orsay opened in 1986. On permanent view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Berthe Morisot', role: 'The painter', palette: ['#9aa0a4', '#5a6066', '#1a1e22'] },
    { name: 'Edma Pontillon (née Morisot)', role: 'Her sister, the figure in the painting', palette: ['#6a5a7a', '#332a3e', '#0e0a16'] },
    { name: 'Blanche Pontillon', role: 'Edma’s daughter, the baby in the cradle', palette: ['#e4d6c0', '#a08858', '#3a2a14'] },
    { name: 'Eugène Manet', role: 'Édouard’s brother, Morisot married him Dec 1874', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Édouard Manet', role: 'The reluctant patriarch (NOT her husband)', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The whole picture is one act of looking', where: 'Left two-thirds, the seated woman in the dark blue jacket', detail: 'Find her eyes first; they’re aimed down and to the viewer’s right, into the cradle. Her near arm (the one closer to you) is bent up so that her hand rests against her cheek, fingers curled under her chin; her other arm reaches forward to lay its hand on the cradle’s lower rail. One hand at her face, one hand on the rail. It’s the posture of a person who has stopped doing anything and is simply watching. The diagonal of her gaze, meeting the diagonal of the cradle’s gauze sloping up to its peak on the right, is the picture’s main compositional X.' },
    { label: 'A curtain made by not quite painting one', where: 'Right third, the white drape that covers the entire cradle, peaking at the right edge', detail: 'That whole pale veil over the cot is translucent white gauze, the period’s standard cradle netting against flies and dust. Look at how it’s painted: a handful of rapid, thin, oyster-white passes, dragged loose enough that in places the warmer ground underneath glimmers through. At arm’s length the strokes resolve into fabric, into the unmistakable softness of real gauze in folds. Step closer and they come apart into individual brushstrokes again. That oscillation is the picture’s signature technical move.' },
    { label: 'Blanche, just visible', where: 'Inside the upper portion of the draped cradle, under the gauze, on the right side of the canvas', detail: 'Look hard at the upper portion of the drape, the part nearer the peak on the right, and you’ll start to make out, under the gauze, the soft paler oval of the sleeping infant’s closed eyes, and lower, the suggestion of a tiny fisted hand. That is Blanche Pontillon, born 1871, asleep here at perhaps a year old. Morisot has painted the sheer fabric AND the thing on the other side of it in the same passage, with neither cancelling the other.' },
    { label: 'Mother and child make the same shape', where: 'Edma’s bent near arm (left side of canvas, hand at her cheek) and Blanche’s bent little arm (inside the cradle, on the right)', detail: 'Look at Edma’s near arm, elbow tucked, hand up to her cheek, then look at the baby’s bent little arm under the gauze, tucked up near her face. They are, very nearly, the same shape. Two bent elbows, two raised hands, mirrored across the divide of the veil. That match is hidden in the geometry, not declared in words, Morisot trusts you to find it.' },
    { label: 'One dark mass that lets everything else sing', where: 'Edma’s dark blue jacket (left two-thirds) and the white-veiled cradle (right third)', detail: 'Almost the entire picture is made of whites, oysters, pale greys and one quiet flesh tone. The single anchoring dark note is Edma’s jacket, and it isn’t black. Look longer at it: it’s a deep saturated navy-indigo, with a small white lace ruffle at the collar and a thin black ribbon at her throat. That dark blue mass is the gravitational center of the canvas: it lets all the white air around it read as pure light.' },
    { label: 'A nursery with the door shut and the noise turned off', where: 'The sheer pale curtain falling in from the upper-left corner; the plain darker wall behind Edma', detail: 'The room is deliberately almost empty, and Morisot has emptied it with intent. The sheer vertical curtain falling in from the upper-left is painted in exactly the same translucent handling as the cradle’s gauze on the right, both veils of paint bracket Edma between them. Behind her: no wallpaper pattern, no frame, no mantel, just a quiet darker field. Soft daylight from the upper-left; no hard shadow anywhere.' },
  ],
  lineage: {
    parents: [ { label: 'Manet · scandals', mode: 'art' }, { label: 'Dutch interiors', mode: 'art' }, { label: 'The wall of access', mode: 'civ' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Mary Cassatt', mode: 'art' }, { label: 'Modern motherhood', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Bal du moulin de la Galette (Renoir, 1876). Sunday at a Montmartre
// dance garden, modern leisure painted at history-painting scale.
// ─────────────────────────────────────────────────────────────
export const MOULIN_GALETTE: ArtWorkContent = {
  id: 'moulin-galette',
  name: 'Bal du moulin de la Galette',
  shortName: 'Bal du moulin de la Galette',
  year: 1876,
  artist: 'Pierre-Auguste Renoir',
  artistId: 'renoir',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 3¾ in × 5 ft 9 in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Caillebotte bequest, 1896 (Luxembourg → Louvre 1929 → Jeu de Paume 1947 → Musée d’Orsay 1986)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 5, total: 9 },
  hook: 'A Sunday at a Montmartre dance garden, painted at the size the Salon kept for history, and given to a crowd of working-class Parisians at four o’clock.',
  heroImage: ART_IMG.renoirMoulinGalette,
  heroCredit: 'Renoir, Bal du moulin de la Galette, 1876 · Musée d’Orsay, Paris',
  heroAspect: 1.34, // 131 × 175 cm → W/H ≈ 1.336
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1876', k: 'Painted' },
    { v: '4′3¾″ × 5′9″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'montmartre', eyebrow: 'Montmartre', dateLabel: '1876', title: 'Sunday at the windmill', blurb: 'The Moulin de la Galette was an open-air dance garden at the foot of two surviving Debray windmills (Blute-Fin and Radet), a Sunday spot for the working-class Montmartre crowd of seamstresses, milliners, clerks and journeymen.', progress: 0.08 },
    { id: 'making', eyebrow: 'A class provocation at history-painting scale', dateLabel: '1876', title: 'Paint the Sunday at the size of a king', blurb: 'Nearly six feet wide, the canvas Europe kept for the death of generals, spent on shopgirls dancing. The provocation was the scale, the dappled sun was the method.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '131 × 175 cm', title: 'What you find in the crowd', blurb: 'The dancing couple at the centre, the seated friends in the right foreground (Goeneutte, Rivière, Estelle Samary), the pink-violet sunspots on a dark jacket, the unlit paper-globe lanterns strung overhead.', progress: 0.56 },
    { id: 'show', eyebrow: '3rd Impressionist Exhibition', dateLabel: 'April 1877', title: 'The third show, not the Salon', blurb: 'Hung at the 3rd Impressionist Exhibition, rue Le Peletier, April 1877, NOT the Salon. Some critics scornful, Georges Rivière (in his journal L’Impressionniste) wrote the great defense.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1879–today', title: 'The bequest that finally took it inside', blurb: 'Caillebotte bought it from Renoir in 1879 and left it to France in his will. Accepted in 1896, hung at the Luxembourg, the first Impressionist room in a French public museum. To the Louvre 1929, Jeu de Paume 1947, Orsay 1986.', progress: 0.96 },
  ],
  provenance: [
    { year: '1876–1879', who: 'Pierre-Auguste Renoir', place: 'Paris', note: 'Painted in Renoir’s rue Cortot studio, around the corner from the Moulin de la Galette itself; shown at the 3rd Impressionist Exhibition, April 1877.', price: null },
    { year: '1879–1894', who: 'Gustave Caillebotte', place: 'Paris', note: 'Caillebotte, engineer-painter, patron, and the group’s banker, bought the canvas from Renoir in 1879 (NOT a commission). He held it in his collection until his death.', price: 'sale' },
    { year: '1894–1896', who: 'The French State (in negotiation)', place: 'Paris', note: 'Caillebotte left his Impressionist collection to France in his will; the Académie des Beaux-Arts resisted, with Gérôme reportedly leading the objection. After negotiation only 38 of the bequeathed works were accepted in 1896; this canvas was among them.', price: null },
    { year: '1896–today', who: 'Musée du Luxembourg → Musée du Louvre → Musée du Jeu de Paume → Musée d’Orsay', place: 'Paris', note: 'Unveiled in the Caillebotte room at the Musée du Luxembourg, February 1897, the first time the Impressionists hung in a French public museum, twenty-three years after the first show. Louvre 1929; Jeu de Paume 1947; Orsay 1986. On permanent view.', price: 'gift to the nation', museum: true },
  ],
  figures: [
    { name: 'Pierre-Auguste Renoir', role: 'The painter', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'] },
    { name: 'Gustave Caillebotte', role: 'Bought it 1879; bequeathed it to France', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Georges Rivière', role: 'Friend; wrote its great defense', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Norbert Goeneutte', role: 'Painter friend, in the right-foreground table group', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Estelle Samary', role: 'Neighborhood model, the woman in the striped dress', palette: ['#a87880', '#5a3a4a', '#1a0e10'] },
  ],
  annotations: [
    { label: 'The dancing couple, dead center', where: 'Middle ground, roughly the center of the canvas, slightly left', detail: 'Find them just behind the seated table group: a couple dancing, the woman in a pale pink dress with her back partly to us, her partner facing her. They are not the loudest figures in the picture, Renoir is subtler than that, but they’re the structural anchor. The painting is about dancing, and here, almost at dead center, is a couple dancing. Don’t try to name them; they’re part of the soft middle-ground crowd, deliberately unspecified, the type rather than the individual. Once you find them, the whole composition snaps into place around them.' },
    { label: 'The seated friends, front right', where: 'Lower-right corner of the canvas', detail: 'A small round café table with a green wine bottle and glasses, three of Renoir’s friends around it, painted with noticeably more definition than the dancing crowd behind. The man in profile in the straw boater is the painter Norbert Goeneutte. The man facing us, leaning forward, is the writer Georges Rivière. The young woman leaning back against the bench in the striped pink-and-blue dress is Estelle Samary, a neighborhood model. These are Renoir’s actual Sunday afternoon, pinned down in the corner of the picture.' },
    { label: 'A coin of sunlight on a dark suit', where: 'Lower foreground, on the back of the man in the dark jacket leaning into the picture', detail: 'Look for a clear pink-violet patch on the back of the dark suit, the same color as nothing else in the picture except other sunspots. Up close it looks like a bizarre mauve smear sitting on the cloth; from across a room it reads instantly as a coin of afternoon sunlight falling through leaves. This is the painting’s signature trick: dappled sun painted as discrete dabs of warm color, not as a general golden wash.' },
    { label: 'Lanterns waiting for nightfall', where: 'Upper third of the canvas, strung between the trees on wires', detail: 'Round paper-globe lanterns are strung overhead between the acacia trees that close over the garden. They are unlit, it’s still daylight, mid-afternoon, but they’re set up to light the place when the sun goes down and the dancing carries into the evening. They are the only lighting fixtures on the canvas (no gas lamps on posts, no standing fixtures, just these paper globes on wires).' },
    { label: 'A pink-and-blue rhyme across the front', where: 'Lower-right (seated) and lower-left (dancing)', detail: 'Two young women are wearing striped pink-and-blue dresses, mirrored across the bottom of the canvas. In the front right, Estelle Samary leans back against the bench in one. In the front left, Renoir’s model Margot dances in another. Renoir liked to compose with rhymes, colors and shapes echoed across a picture, and this is the most visible one in the painting.' },
    { label: 'No pure white, no hard black', where: 'Everywhere across the canvas', detail: 'Scan the picture for pure white. You won’t find any. The "white" dresses are pale pink, lilac, and soft blue. Now scan for hard black shadows. Also gone, the "black" suits are warm grays and slightly-purpled blacks, and the shadows on the ground are warm, not cold. By keeping the extremes off the canvas, Renoir lets every color belong to the warm afternoon air.' },
    { label: 'Edges that blur on purpose', where: 'The whole middle-ground crowd, especially the dancers receding into the trees', detail: 'Try to find a sharp drawn edge anywhere in the dancing crowd. There almost isn’t one. Faces are soft, dresses bleed into the air around them, the far crowd dissolves into atmosphere. This is deliberate, Renoir is painting the way the eye really sees a moving crowd in shifting light: you focus on one face at a time and the rest blurs at the edges of your attention.' },
  ],
  lineage: {
    parents: [ { label: 'Manet · modern life', mode: 'art' }, { label: 'Rococo crowd scenes', mode: 'art' }, { label: 'Haussmann Sunday', mode: 'civ' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Late Renoir', mode: 'art' }, { label: 'Modern leisure painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Paris Street; Rainy Day (Caillebotte, 1877). The cool, almost-photographic
// vast canvas of Parisians under umbrellas at a Haussmann boulevard intersection.
// ─────────────────────────────────────────────────────────────
export const PARIS_STREET: ArtWorkContent = {
  id: 'paris-street',
  name: 'Paris Street; Rainy Day',
  shortName: 'Paris Street; Rainy Day',
  year: 1877,
  artist: 'Gustave Caillebotte',
  artistId: 'caillebotte',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 11½ in × 9 ft ¾ in',
  location: 'Art Institute of Chicago',
  acquired: 'Charles H. and Mary F. S. Worcester Collection, 1964 (acc. 1964.336)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 8, total: 9 },
  hook: 'A nine-foot canvas of bourgeois Parisians under umbrellas at a wet Haussmann intersection, painted so cool and so sharp it was the LEAST Impressionist picture in the third Impressionist show.',
  heroImage: ART_IMG.caillebotteParisStreet,
  heroCredit: 'Caillebotte, Paris Street; Rainy Day, 1877 · Art Institute of Chicago',
  heroAspect: 1.3, // 212.2 × 276.2 cm → W/H ≈ 1.302
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1877', k: 'Painted' },
    { v: '6′11½″ × 9′¾″', k: 'Dimensions' },
    { v: 'AIC', k: 'Now at' },
  ],
  sections: [
    { id: 'haussmann', eyebrow: 'Haussmann’s Paris', dateLabel: '1853–1877', title: 'The rebuilt city as subject', blurb: 'Baron Haussmann’s twenty-year gut-and-rebuild of Paris created the long cream boulevards and the wedge intersections that Caillebotte painted. The specific intersection: Place de Dublin (then Carrefour de Moscou), east of Gare Saint-Lazare.', progress: 0.08 },
    { id: 'making', eyebrow: 'An engineer-painter', dateLabel: '1876–77', title: 'Built like a building', blurb: 'Caillebotte the wealthy engineer-painter (no Salon battles needed; he financed several Impressionist shows). Nine feet wide, built on one-point perspective with a vanishing point above the central lamppost, almost architectural precision.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '212.2 × 276.2 cm', title: 'What’s on a nine-foot rainy boulevard', blurb: 'The bourgeois couple under one pale lavender-grey umbrella; the cropped man at the right edge; the wedge-shaped Haussmann apartment block; the wet cobblestones; the umbrellas against a flat overcast; the cool gray-tan palette without a warm color anywhere.', progress: 0.56 },
    { id: 'show', eyebrow: '3rd Impressionist Exhibition', dateLabel: 'April 1877', title: 'The least Impressionist picture in the show', blurb: 'One of the largest and most thoroughly designed pictures in the 3rd Impressionist Exhibition (Renoir’s Galette was nearly six feet wide alongside). Its cool sharp-edged style was the show’s outlier, modern Paris rendered with the discipline of an engineer.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1894–today', title: 'Family, Chrysler, the AIC', blurb: 'NOT in the Caillebotte bequest (which went to France), stayed in the Caillebotte family (Martial → Geneviève Chardeau) to 1950, then Walter P. Chrysler Jr. 1954/55, Wildenstein 1964, Art Institute of Chicago 1964 (acc. 1964.336). On permanent view.', progress: 0.96 },
  ],
  provenance: [
    { year: '1877–1894', who: 'Gustave Caillebotte (the artist)', place: 'Paris', note: 'Painted in his studio in 1876–77; hung at the 3rd Impressionist Exhibition, April 1877. Held by the artist for the rest of his life.', price: null },
    { year: '1894–1950', who: 'Martial & Marie Caillebotte → Geneviève Chardeau (née Caillebotte)', place: 'Paris', note: 'Inherited by Gustave’s brother Martial on his death (1894), then by descent through the Caillebotte family, including a long deposit at the Château de Montglat, into the next generation.', price: null },
    { year: '1954/55', who: 'Walter P. Chrysler Jr.', place: 'New York', note: 'Bought from the Caillebotte family by the great American collector Walter Chrysler in 1954 or 1955, one of the canvases that left France in the postwar resale wave.', price: 'sale' },
    { year: '1964', who: 'Wildenstein & Co. → Art Institute of Chicago', place: 'New York / Chicago', note: 'Sold via Wildenstein in 1964 to the Art Institute of Chicago (Charles H. and Mary F. S. Worcester Collection fund); accessioned 1964.336. On permanent view, Gallery 201.', price: 'sale', museum: true },
  ],
  figures: [
    { name: 'Gustave Caillebotte', role: 'The painter, engineer & patron', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Baron Haussmann', role: 'Built the boulevard Caillebotte painted', palette: ['#7a6a52', '#3a3020', '#100c08'] },
    { name: 'Walter P. Chrysler Jr.', role: 'Bought it from the Caillebotte family', palette: ['#6a6a5a', '#3a3a2e', '#0e0e08'] },
  ],
  annotations: [
    { label: 'The couple, well-dressed, half-bored, walking past you', where: 'Just right of center foreground, walking toward you under a single pale lavender-grey umbrella', detail: 'The two best-dressed strangers in the picture. The umbrella sheltering them is lavender-grey / pale blue-grey, NOT black, the Art Institute’s varnish cleaning confirmed the cool light tone; under a century of yellowed varnish it had read nearly black, but the cleaned canvas reads pale. The man on the woman’s right in a tall black top hat and dark overcoat; the woman on his left in a small dark hat with a soft veil, a single earring catching a dab of light, a fur-trimmed coat. They are not looking at each other or at you. They are walking past, with the slightly-faraway expression of two people who do this every morning. Their identities are unknown.' },
    { label: 'Half a man, photograph-style', where: 'Right edge of the canvas, walking past the couple in the opposite direction', detail: 'A third figure, top hat, dark overcoat, umbrella, sliced abruptly by the right edge of the picture. You see his left side, his arm, his umbrella; the other half is simply gone. Up until the 1860s no respectable European painting did this. To crop a person in half on the canvas edge was something that happened in photographs, where a passerby would wander into the lens and end up bisected at the frame’s edge. Caillebotte lifted the trick on purpose.' },
    { label: 'The wedge, still standing in Paris today', where: 'Upper center of the canvas, behind the gas lamppost, where two streets peel away', detail: 'The narrow apex of a six-floor cream-stone apartment block points straight at you, like the prow of a ship. Two streets, rue de Turin to one side, rue de Moscou to the other, open out around it. Six floors. Wrought-iron balconies on the regulation second and fifth floors. Mansard roof on top. Go to the Place de Dublin in the 8th arrondissement today and you can still find it.' },
    { label: 'The morning after rain, pavement still shining', where: 'The lower quarter of the canvas, the whole foreground ground', detail: 'Roughly the bottom fourth of the painting is wet cobblestones, gray-blue, individually rendered, each stone catching a faint dab of light reflected off the overcast sky. No puddles, no streaming water; the storm is over. But the city hasn’t dried yet. Caillebotte lightens the top edge of each stone by exactly one value, and that single-value lift is what reads as reflective surface. Stone by stone, across the lower fourth of a nine-foot canvas.' },
    { label: 'Umbrellas against a sky, not against rain', where: 'Spread across the picture, at least five or six open, in the foreground and middle ground', detail: 'Almost every figure is under a plain dark umbrella, EXCEPT the central couple’s, which is the picture’s one cool note of pale lavender-grey. They’re protecting against the threat of more rain, not against rain in progress. And look at the figures, nobody has a cast shadow of any consequence. The sky is a flat, even overcast that lights everything from all directions at once. The umbrellas are pointed at a damp ceiling of cloud.' },
    { label: 'A single point pulls every line into depth', where: 'Just above and to the right of the central gas lamppost, on the horizon line', detail: 'Follow the curbs of the wet pavement. Follow the rooflines on the right. Follow the cornices and the upper window courses. They all run, ruler-straight, toward a single point a little above and right of the central lamppost. This is one-point perspective at its plainest, every line that runs away from you converging on one vanishing point on the horizon. Renaissance painters worked this out in fifteenth-century Florence; almost nobody flaunts it. Caillebotte, an engineer, flaunts it.' },
    { label: 'A picture in cool colors only', where: 'The whole canvas, sky, stones, walls, clothes', detail: 'Look for a warm color anywhere in the picture. Not a soft pink, not a yellow, not an orange, not a red. There isn’t one. Cool grays, slate blue, oyster white, dull black, the dark green of the cast-iron lamppost, the pale lavender-grey of the central umbrella, a single muted-green note on the wagon. The entire human range of warm color has been refused, on purpose. Caillebotte is telling you, by elimination, what kind of light a wet Paris morning has: the kind that drains color out of the city and leaves only its values.' },
  ],
  lineage: {
    parents: [ { label: 'Haussmann’s Paris', mode: 'civ' }, { label: 'The photograph', mode: 'civ' }, { label: 'One-point perspective', mode: 'art' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Modern urban realism', mode: 'art' }, { label: 'Photographic painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Dance Class (Degas, 1874, Met). Indoor Impressionism;
// Japonisme cropping, the caught off-balance moment.
// ─────────────────────────────────────────────────────────────
export const DANCE_CLASS: ArtWorkContent = {
  id: 'dance-class',
  name: 'The Dance Class',
  shortName: 'The Dance Class',
  year: 1874,
  artist: 'Edgar Degas',
  artistId: 'degas',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 8¾ in × 2 ft 6¼ in',
  location: 'The Metropolitan Museum of Art, New York',
  acquired: 'Bequest of Mrs. Harry Payne Bingham, 1986 (acc. 1987.47.1)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 4, total: 9 },
  hook: 'A ballet class with no ballet in it, scratching, twisting, waiting, an old man with a stick, Impressionism’s most honest argument about work.',
  heroImage: ART_IMG.degasDanceClass,
  heroCredit: 'Degas, The Dance Class, 1874 · The Metropolitan Museum of Art, New York',
  heroAspect: 0.92, // 76.8 × 83.2 cm → W/H ≈ 0.923 (near-square, slight portrait)
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1874', k: 'Painted' },
    { v: '2′8¾″ × 2′6¼″', k: 'Dimensions' },
    { v: 'Met', k: 'Now at' },
  ],
  sections: [
    { id: 'rehearsal', eyebrow: 'Paris Opéra', dateLabel: '1870s', title: 'The work, not the gala', blurb: 'A 1870s Paris Opéra rehearsal room: the ballet workforce of *petits rats* (the young dancers) and their stage mothers, the coercive economy of the wealthy *abonnés* (subscribers), Degas painted the labour, not the show.', progress: 0.08 },
    { id: 'making', eyebrow: 'A commission', dateLabel: '1873–74', title: 'Commissioned by Faure, painted over an earlier figure', blurb: 'The baritone Jean-Baptiste Faure commissioned it in 1873; Degas delivered it in November 1874 for 5,000 francs. X-ray shows the ballet master at right was painted OVER an earlier, unidentified dance master figure.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '83.2 × 76.8 cm', title: 'A rehearsal room caught mid-yawn', blurb: 'The tipped-up floor, the dancers scattered off-centre in unposed moments (scratching, twisting, waiting), Jules Perrot at the right leaning on his stick, the watering can on the floor, the stage mothers at the upper right by the doorway.', progress: 0.56 },
    { id: 'show', eyebrow: '2nd Impressionist Exhibition', dateLabel: 'April 1876', title: 'Lent by Faure to the 2nd show, not the 1st', blurb: 'Faure loaned it to the 2nd Impressionist Exhibition (April 1876), NOT the 1st (1874). Degas was the show’s organiser as well as its most uncomfortable member. His indoor Impressionism on the wall.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1898–today', title: 'Faure → Durand-Ruel → Payne → the Met', blurb: 'Faure sold it to Durand-Ruel in February 1898 (10,000 fr); Durand-Ruel resold it to the American collector Colonel Oliver H. Payne in April 1898 (~$25,000); descended through the Payne/Bingham family until Mrs Bingham’s bequest to the Met in 1986. The Met and Orsay canvases are SEPARATE related paintings, not versions of the same picture.', progress: 0.96 },
  ],
  provenance: [
    { year: '1874–1898', who: 'Jean-Baptiste Faure (commissioned)', place: 'Paris', note: 'The baritone Faure, the leading French opera singer of his day, commissioned the picture from Degas in 1873 and took delivery in November 1874 for 5,000 francs; loaned to the 2nd Impressionist Exhibition (1876).', price: '5,000 fr (commission)' },
    { year: '1898', who: 'Paul Durand-Ruel (dealer)', place: 'Paris', note: 'Faure sold it to Durand-Ruel on 19 February 1898 for 10,000 francs, a two-step sale, NOT direct artist-to-collector.', price: '10,000 fr' },
    { year: '1898–1917', who: 'Colonel Oliver H. Payne (Standard Oil)', place: 'New York', note: 'Durand-Ruel resold it to Colonel Oliver H. Payne on 4 April 1898 for approximately $25,000, a fast dealer’s margin and a watershed moment in the American Impressionist market.', price: '~$25,000' },
    { year: '1917–1986', who: 'The Payne / Bingham family', place: 'New York', note: 'Passed from Colonel Payne to his nephew Harry Payne Bingham, and then to Mrs Harry Payne Bingham; held in the family for nearly seven decades.', price: null },
    { year: '1986–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Bequeathed by Mrs Bingham in 1986; accessioned 1987.47.1. On permanent view. The SEPARATE Musée d’Orsay version of the same subject is a related but distinct canvas, not a copy or version of this one.', price: 'bequest', museum: true },
  ],
  figures: [
    { name: 'Edgar Degas', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Jules Perrot', role: 'Ballet master · in the painting', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Jean-Baptiste Faure', role: 'Baritone · commissioned the work', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Paul Durand-Ruel', role: 'Dealer · the two-step 1898 sale', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Col. Oliver H. Payne / Mrs Bingham', role: 'American buyer · then family bequest', palette: ['#6a7250', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The legend in the corner', where: 'Right foreground, the elderly man in a brown jacket', detail: 'The white-haired man at the right, leaning his weight forward onto a long walking stick, is Jules Perrot, once one of the great male stars of European ballet, partner of Marie Taglioni, choreographer of Giselle’s ghost-act. By 1874 he was sixty-four, retired, and teaching to keep busy. He is the one figure painted with full portrait care: every other face is sketched, his is finished. (He is also a second draft: X-ray shows Degas first painted an earlier, unidentified dance master in this spot, then painted Perrot over him.)' },
    { label: 'The unposed second', where: 'Across the middle group of dancers in pale tutus', detail: 'Don’t look for a graceful pose. Look for the opposite, the small unguarded gestures painters before Degas would have edited out. One girl has reached an arm up to scratch the back of her neck. Another is twisted around to talk to a neighbour. Another is bent forward, adjusting a slipper. Several are leaning on the dance bar, just waiting. The picture’s whole argument is sitting in those little human gestures.' },
    { label: 'Standing on a hinge', where: 'The whole floor of the rehearsal room', detail: 'Notice how the wooden floor seems to rear up toward you, as if you were leaning over a balcony rather than seated quietly in a corner. The floor doesn’t recede politely into the back of the room; it tilts, throwing the dancers out across its surface like a tray. This off-axis, tipped-up floor is a compositional trick Degas learned from Japanese woodblock prints (ukiyo-e) flooding Paris in his decade, the deliberate cut-off and the high tilted viewpoint, borrowed on purpose.' },
    { label: 'Sliced by the frame', where: 'Far right edge of the canvas', detail: 'Look at the very right edge. The picture slices a dancer in half: you see a sliver of tutu, a shoulder, the side of a face, and then nothing. The canvas stops in the middle of a person, as if a camera shutter caught her on her way out of frame. Painters in 1874 didn’t do this; figures were supposed to be complete inside the picture. The trick is again from Japanese prints.' },
    { label: 'Factory-floor evidence', where: 'On the floorboards, just to the left of the central group', detail: 'That small dull-metal cylindrical object near the dancers’ feet is a watering can. It is there because the rehearsal-room floor had to be sprinkled with water before class so the dancers wouldn’t slip on the bare boards. Degas paints it with the seriousness of a Dutch still life, documentary evidence that this is a workplace. Factory floors had buckets. Rehearsal floors had watering cans.' },
    { label: 'Posted at the threshold', where: 'Upper right of the canvas, near the doorway opening into the secondary room', detail: 'Look up to the upper right, near where the back wall opens through a doorway into a further room. In dark dresses and hats, in shadow on benches, sit several women, the stage mothers, working-class Paris parents who came with their dancing daughters to every rehearsal. They are posted by the door not because their presence kept anyone out, it didn’t; the wealthy male abonnés (subscribers) had backstage access bought into their subscription, and a mother on a bench couldn’t revoke a ticket, but because their presence let a working-class family keep up the appearance of supervision.' },
    { label: 'A private love note to the patron', where: 'Back wall, behind the dancers, partly visible', detail: 'On the back wall, half-screened by the central column and the cluster of dancers, you can just read the printed title of an opera poster: Guillaume Tell, Rossini’s opera about the Swiss crossbow archer. This is Degas’s private courtesy to his patron Jean-Baptiste Faure, who commissioned the painting and was famous in Paris as the leading baritone in the title role.' },
  ],
  lineage: {
    parents: [ { label: 'Japanese ukiyo-e', mode: 'art' }, { label: 'Paris Opéra workforce', mode: 'civ' }, { label: 'Dutch genre interior', mode: 'art' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Toulouse-Lautrec', mode: 'art' }, { label: 'Modern photography', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, L'Absinthe (Degas, 1875–76, Orsay). Two real sitters at a café,
// the empty foreground as the picture's argument.
// ─────────────────────────────────────────────────────────────
export const ABSINTHE: ArtWorkContent = {
  id: 'absinthe',
  name: 'L’Absinthe',
  shortName: 'L’Absinthe',
  year: 1876,
  artist: 'Edgar Degas',
  artistId: 'degas',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 0¼ in × 2 ft 3 in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Camondo bequest, 1911 (Louvre 1911 → Musée d’Orsay 1986)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 6, total: 9 },
  hook: 'Two real sitters who weren’t drinking, posed in a Pigalle café, and then mocked seventeen years later in London as a study in degradation.',
  heroImage: ART_IMG.degasAbsinthe,
  heroCredit: 'Degas, L’Absinthe (Dans un café), 1875–76 · Musée d’Orsay, Paris',
  heroAspect: 0.74, // 92 × 68.5 cm (H × W) → W/H ≈ 0.745 portrait
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1875–76', k: 'Painted' },
    { v: '3′0¼″ × 2′3″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'cafe', eyebrow: 'Place Pigalle', dateLabel: '1875–76', title: 'The Nouvelle-Athènes', blurb: 'The Café de la Nouvelle-Athènes on the Place Pigalle, the late-1870s Impressionist hangout (NOT the older Café Guerbois); the demi-monde; absinthe as a cheap, potent, faintly disreputable green spirit and its cultural charge.', progress: 0.08 },
    { id: 'making', eyebrow: 'Two sitters', dateLabel: '1875–76', title: 'Two real friends who weren’t drinking', blurb: 'Degas got two friends to pose: the actress Ellen Andrée at the table (she was NOT an absinthe drinker in real life, clarified in her 1921 interview with Félix Fénéon); and the artist Marcellin Desboutin beside her (his glass holds mazagran, a cold coffee, not absinthe).', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '92 × 68.5 cm', title: 'The empty foreground is the argument', blurb: 'Two figures shoved off into the upper right; a zig-zag of empty marble café tables marching in from the lower-left foreground; the drained gray-brown palette pierced by one charged note of milky-green absinthe; Andrée’s lowered off-into-nothing stare under a broad pale lavender-grey hat; Desboutin’s dark jacket and clay pipe.', progress: 0.56 },
    { id: 'show', eyebrow: 'Paris 1876 → London 1893', dateLabel: '1876 / 1893', title: '1876 in Paris, 1893 in London', blurb: 'Shown at the 2nd Impressionist Exhibition Paris April 1876 with little fuss. 17 YEARS later, exhibited at the Grafton Gallery, London, and Victorian critics (including Walter Crane) savaged it as a study in degradation. The London showing FIXED its English title; Andrée had to publicly clarify she wasn’t a drinker.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1876–today', title: 'From Captain Henry Hill of Brighton to the Orsay', blurb: 'Deschamps → Captain Henry Hill of Brighton (private collector, NOT a "Sussex club"; held 1876–92) → Reid → Kay → Comte Isaac de Camondo → Louvre 1911 (Camondo bequest) → Orsay 1986. On permanent view.', progress: 0.96 },
  ],
  provenance: [
    { year: '1876', who: 'Charles W. Deschamps (dealer)', place: 'London', note: 'Acquired soon after the painting’s Paris debut at the 2nd Impressionist Exhibition.', price: null },
    { year: '1876–1892', who: 'Captain Henry Hill', place: 'Brighton, England', note: 'A retired English military tailor and private collector, NOT a "Sussex club", hung the picture in his Brighton house, where it sat for sixteen years.', price: 'private sale' },
    { year: '1892–1911', who: 'Alex Reid → Arthur Kay → Comte Isaac de Camondo', place: 'Glasgow → Edinburgh → Paris', note: 'Sold via the Glasgow dealer Alex Reid; bought by the Scottish collector Arthur Kay (who fielded the worst of the 1893 Grafton Gallery scandal); on to the Paris-based Comte Isaac de Camondo.', price: null },
    { year: '1911–1986', who: 'Musée du Louvre', place: 'Paris', note: 'Bequeathed by Camondo on his death in 1911, the Louvre formally inherited the picture that Victorian London had refused. On permanent view.', price: 'bequest', museum: true },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'Transferred from the Louvre to the newly opened Musée d’Orsay in 1986 (RF 1984). On permanent view.', price: null, museum: true },
  ],
  figures: [
    { name: 'Edgar Degas', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Ellen Andrée', role: 'The actress; the woman in the painting', palette: ['#a87880', '#5a3a4a', '#1a0e10'] },
    { name: 'Marcellin Desboutin', role: 'The artist; the man in the painting', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Captain Henry Hill', role: 'Brighton collector · sixteen-year owner', palette: ['#6a7280', '#3a3a48', '#10101a'] },
    { name: 'Walter Crane', role: 'The 1893 London critic who called it degradation', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Comte Isaac de Camondo', role: 'Paris collector · bequeathed it to the Louvre', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'Two people, pushed off into one corner', where: 'Upper-right portion of the canvas, well above centre, well right of centre', detail: 'Find the two figures and notice how little of the picture they take up. Together they fill maybe a third of the canvas, jammed into the upper-right corner. Most paintings of two people put them in the middle. Degas refused. By shoving them off into one corner and giving the rest of the canvas to empty tables, he made the composition itself the argument, these two are not the centre of anything.' },
    { label: 'The one charged note of colour', where: 'On the table directly in front of the seated woman, upper right', detail: 'Look at the tall stemmed glass in front of Andrée. Its liquid is pale, slightly cloudy, faintly green, milky rather than vivid. This is absinthe after the louche, the moment when ice water has been dripped through sugar into the spirit and turned it cloudy. This small glass is the only piece of charged colour in the whole picture, everything else is drained gray and dusty brown.' },
    { label: 'A staircase of nothing', where: 'Across the lower-left half of the canvas, marching in from the corner', detail: 'Look at the foreground tables. Notice how they zig-zag: three or four marble tabletops at jagged angles, like a small staircase of stone slabs climbing from the lower-left corner up and into the figures’ table. They are nearly bare, one of them has a folded newspaper, and that’s it. No drinks, no plates, no people. This whole big empty foreground is the picture’s largest visual fact.' },
    { label: 'A stare into the middle distance', where: 'Andrée’s face, the seated woman in the pale dress, upper right, under the broad light hat', detail: 'Look at her eyes. They’re lowered, turned slightly to one side, fixed on nothing in particular. The broad brim of her pale lavender-gray hat throws a soft shadow across the upper part of her face, dimming the eyes further. She isn’t looking at her drink. She isn’t looking at the man beside her. She isn’t looking at us. That blank, internal middle-distance stare is the painting’s emotional centre.' },
    { label: 'The man looking off in the other direction', where: 'Right edge of the canvas, beside and slightly behind Andrée', detail: 'Find the bearded man. He’s a denser, more solid figure than she is, a thick, dark, almost black jacket painted in heavy strokes, a battered tall hat pushed back on his head, a beard that takes over the lower half of his face. In his hand is a long-stemmed clay pipe. His eyes are turned off to the right, out of the picture entirely. He and Andrée are looking in opposite directions, two people at the same table, twice as alone.' },
    { label: 'A room with the colour wiped off', where: 'Across the whole picture, wall, tables, floor, figures', detail: 'Stand back and look at the whole canvas as a field of colour. Cool grays in the wall and the tabletops, warm browns in the floor, a near-black in Desboutin’s jacket, a dusty pink in Andrée’s jacket, a soft lavender-gray in her hat, and that one faint milky off-green in her glass. No reds. No bright blues. No sunlight, this is gas-lit interior, painted in the yellowish low light of nineteenth-century cafés. The figures are nearly the same colour as the wall behind them.' },
  ],
  lineage: {
    parents: [ { label: 'Manet · café scene', mode: 'art' }, { label: 'Zola · L’Assommoir', mode: 'civ' }, { label: 'Demi-monde Paris', mode: 'civ' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Toulouse-Lautrec', mode: 'art' }, { label: 'Modern alienation painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Luncheon of the Boating Party (Renoir, 1880–81, Phillips).
// Friends at the Maison Fournaise on the Île de Chatou.
// ─────────────────────────────────────────────────────────────
export const BOATING_PARTY: ArtWorkContent = {
  id: 'boating-party',
  name: 'Luncheon of the Boating Party',
  shortName: 'Luncheon of the Boating Party',
  year: 1881,
  artist: 'Pierre-Auguste Renoir',
  artistId: 'renoir',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 3¼ in × 5 ft 9¼ in',
  location: 'The Phillips Collection, Washington DC',
  acquired: 'Bought from Durand-Ruel by Duncan Phillips, 1923, $125,000',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 9, total: 9 },
  hook: 'Fourteen friends at the end of a summer lunch on a Seine balcony, the warmest large picture Impressionism ever painted, assembled across a whole season.',
  heroImage: ART_IMG.renoirBoatingParty,
  heroCredit: 'Renoir, Luncheon of the Boating Party, 1880–81 · The Phillips Collection, Washington DC',
  heroAspect: 1.35, // 130.2 × 175.6 cm → W/H ≈ 1.349
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1880–81', k: 'Painted' },
    { v: '4′3¼″ × 5′9¼″', k: 'Dimensions' },
    { v: 'Phillips', k: 'Now at' },
  ],
  sections: [
    { id: 'chatou', eyebrow: 'Île de Chatou', dateLabel: '1880', title: 'The Maison Fournaise on the Seine', blurb: 'The Île de Chatou, Île des Impressionnistes today, and the Maison Fournaise restaurant on the river, a 30-minute train ride from Paris’s Gare Saint-Lazare; the *canotage* (boating) subculture; modern middle-class leisure as subject.', progress: 0.08 },
    { id: 'making', eyebrow: 'A canvas of friends', dateLabel: '1880–81', title: 'Assembled across a summer, sitting by sitting', blurb: 'Renoir asked his friends to pose, working at the Maison Fournaise across the summer and autumn of 1880–81. NOT one balcony lunch, pose by pose, friend by friend, built into a single warm scene at history-painting scale.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '130.2 × 175.6 cm', title: 'Fourteen friends, twelve firmly named', blurb: 'Aline Charigot kissing a little dog (lower left); Caillebotte sitting backwards in his chair (lower right); Ellen Andrée raising a glass at the centre; Charles Ephrussi the banker-critic in his top hat at the rear; the striped awning overhead; the wine-and-fruit still life across the table; boats on the Seine glimpsed through the railings.', progress: 0.56 },
    { id: 'show', eyebrow: '7th Impressionist Exhibition', dateLabel: 'March 1882', title: 'The hit of the seventh show', blurb: 'Shown at the 7th Impressionist Exhibition, March 1882, three critics named it best in show. Durand-Ruel had already bought it from Renoir in February 1881 for 6,000 francs and would hold it for 42 years.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1881–today', title: 'Duncan Phillips’s twelve-year pursuit', blurb: 'Held by Durand-Ruel for 42 years; Duncan Phillips chased it from 1911 onward; bought it from Durand-Ruel in 1923 for $125,000. The Phillips Collection, a private collection-museum opened in 1921, has held it on permanent view ever since. Renoir + Aline married in 1890, NINE years later (not "right after").', progress: 0.96 },
  ],
  provenance: [
    { year: '1881–1923', who: 'Galerie Paul Durand-Ruel', place: 'Paris / New York', note: 'Bought from Renoir by Durand-Ruel in February 1881 for 6,000 francs, the baseline for the picture’s eventual price climb. Held in the gallery for 42 years.', price: '6,000 fr' },
    { year: '1911–1923', who: 'Duncan Phillips (pursuing)', place: 'Washington DC', note: 'The American collector Duncan Phillips chased the picture from 1911 onward, a twelve-year pursuit before he finally pried it loose.', price: null },
    { year: '1923–today', who: 'The Phillips Collection', place: 'Washington DC', note: 'Bought from Durand-Ruel in 1923 for $125,000 (then a famous price). Hung in the Phillips, a private collection-museum opened in 1921, on permanent view ever since. Aline Charigot, the woman with the dog, eventually married Renoir in 1890 (NINE years after this picture, not "right after"); they had three sons, including the filmmaker Jean Renoir.', price: '$125,000', museum: true },
  ],
  figures: [
    { name: 'Pierre-Auguste Renoir', role: 'The painter', palette: ['#b07a62', '#5a3a2a', '#1a0e0a'] },
    { name: 'Aline Charigot', role: 'Renoir’s then-girlfriend; future wife (m. 1890)', palette: ['#a87880', '#5a3a4a', '#1a0e10'] },
    { name: 'Gustave Caillebotte', role: 'Painter / patron · seated backwards', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Ellen Andrée', role: 'Actress · raised glass at centre (same model as L’Absinthe)', palette: ['#9a8090', '#4a3a44', '#160e12'] },
    { name: 'Charles Ephrussi', role: 'Banker-critic · in top hat, rear', palette: ['#6a6a5a', '#3a3a2e', '#0e0e08'] },
    { name: 'Alphonse Fournaise Jr', role: 'Restaurant owner’s son · leaning on the rail', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Duncan Phillips', role: 'The American collector who pursued it 12 years', palette: ['#6a7280', '#3a3a48', '#10101a'] },
  ],
  annotations: [
    { label: 'The girl with the dog', where: 'Lower-left, at the table', detail: 'A young woman in a dark hat, Aline Charigot, twenty-one years old, Renoir’s then-girlfriend, leans down toward a small fluffy dog she is holding up at her chin and kissing on the nose. The dog (a Brussels griffon / affenpinscher type) is the only animal in the picture, and it is getting the picture’s most undivided affection. She wouldn’t marry Renoir for another nine years; she’s a girlfriend here, not a fiancée.' },
    { label: 'The patron in the corner', where: 'Lower-right, seated at the table', detail: 'A muscular man in a white sleeveless singlet and a straw boater hat, straddling a chair backwards with his arms folded over the back, gazes across the picture toward Aline. This is Gustave Caillebotte, a serious painter himself, a competitive sailor, and the wealthy friend who bailed out his fellow Impressionists by buying their work when nobody else would. Renoir putting him in the foreground in boating dress, posed informally on a turned-around chair, is a quiet thank-you.' },
    { label: 'The actress in the centre', where: 'Centre of the picture, at the table', detail: 'A woman in a pale dress holds a tall glass up to her face, sometimes read as raised to her ear, sometimes as raised in a toast. This is Ellen Andrée, an actress who sat for half the Impressionist circle through the 1870s and 80s. If she looks familiar, that’s because she’s the same model who appears in Degas’s L’Absinthe (1875–76); the picture’s Ellen Andrée and this one’s are the same woman on either side of the same circle of friends.' },
    { label: 'The banker-critic at the back', where: 'Right side, rear of the picture', detail: 'Look for the one top hat in the painting, the formal black silk cylinder a man wore when dressing up, at the right rear. That’s Charles Ephrussi, a banker, an art critic, and the editor of the leading French art magazine of the day, the Gazette des beaux-arts. He’s overdressed for a lunch on a balcony, and that’s the point: he’s a city gentleman who has come out to slum it on the river with the painters.' },
    { label: 'Veronese’s curtain', where: 'Across the top of the picture', detail: 'The whole top of the canvas is filled by a red-and-white striped awning, the cloth canopy stretched over the balcony to shade the table from the high summer sun. It does a lot of work. It casts dappled, slightly tinted light over everybody underneath. It locks the group into a single shared space. And it is Renoir’s deliberate nod to the parted curtains overhead in Paolo Veronese’s huge sixteenth-century banquet paintings, the Renaissance machinery dragged into a modern Sunday lunch on the Seine.' },
    { label: 'The lunch is over, nobody’s leaving', where: 'Foreground, along the table', detail: 'Look along the white tablecloth at the bottom: half-empty wine bottles, drained glasses, grapes spilled across a napkin, the remains of fruit. Renoir paints every transparent bottle as a small jewel, the light passing through the dark red into the white cloth below. The whole still life is the picture’s quiet announcement that lunch is already finished; the cast is in the lingering, end-of-meal, talking-and-laughing stage. The dishes haven’t been cleared because nobody wants to leave.' },
    { label: 'The actual reason everyone is here', where: 'Background, between the figures, just above the railings', detail: 'Look through the gaps between the people at the back, just above the painted railings: faint shapes of slim rowing skiffs on the river. Two or three are suggested, no more. They’re easy to miss, and that’s almost the joke, those boats are the reason for the Maison Fournaise, for the balcony, for the train out from Paris, for the canotage subculture, and for all fourteen of these people being on this balcony at all.' },
  ],
  lineage: {
    parents: [ { label: 'Veronese · banquets', mode: 'art' }, { label: 'Île de Chatou', mode: 'civ' }, { label: 'Modern leisure', mode: 'civ' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Late Renoir', mode: 'art' }, { label: 'Modern crowd painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Gare Saint-Lazare (Monet, 1877, Orsay). The iron-and-glass
// cathedral of modern Paris; steam, smoke, the industrial subject.
// ─────────────────────────────────────────────────────────────
export const GARE_SAINT_LAZARE: ArtWorkContent = {
  id: 'gare-saint-lazare',
  name: 'The Gare Saint-Lazare',
  shortName: 'The Gare Saint-Lazare',
  year: 1877,
  artist: 'Claude Monet',
  artistId: 'monet',
  movement: 'Impressionism',
  movementId: 'imp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 5½ in × 3 ft 5⅜ in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Caillebotte bequest, 1894/1896 (Luxembourg → Louvre 1929 → Jeu de Paume 1947 → Musée d’Orsay 1986)',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Works of Impressionism', index: 7, total: 9 },
  hook: 'Monet pointed his easel at a train station and decided the steam, the soft moving body of weather under the iron, was the painting.',
  heroImage: ART_IMG.monetGareSaintLazare,
  heroCredit: 'Monet, La Gare Saint-Lazare, 1877 · Musée d’Orsay, Paris',
  heroAspect: 1.4, // 75 × 105 cm (H × W) → W/H = 1.4
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1877', k: 'Painted' },
    { v: '2′5½″ × 3′5⅜″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'station', eyebrow: 'Paris · 1877', dateLabel: '1877', title: 'The iron-and-glass cathedral of modern Paris', blurb: 'Claude Monet (1840–1926) pointed his easel at the Gare Saint-Lazare, by then Paris’s busiest station, the gateway to the Seine resorts Monet had painted for a decade. The iron-and-glass train shed roof, the steam, the coal, the new industrial architecture as fit subject.', progress: 0.08 },
    { id: 'making', eyebrow: 'Rented studio, formal permission', dateLabel: 'Jan–April 1877', title: 'Permission to paint inside the shed', blurb: 'Early 1877 Monet rented a Paris studio nearby and got formal permission to set up his easel inside the train shed itself. The 1877 series ran to about 12 canvases (Fogg, NGL, Orsay, Art Institute Chicago, Pola Museum…). The colourful "trains stoked / platforms cleared" anecdotes are Monet’s later reminiscences, not flat fact.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '75 × 105 cm', title: 'Steam as the subject, the rest as setting', blurb: 'The dark iron-girder roof overhead, two black locomotives on the tracks (left and centre), a great soft central plume of steam fusing into the dark vault, Haussmannian apartment buildings hazed at the upper right, small porter/passenger figures along the platform, and a broken-color steam plume that dissolves only at arm’s length.', progress: 0.56 },
    { id: 'show', eyebrow: '3rd Impressionist Exhibition', dateLabel: 'April 1877', title: 'Seven of the series on one wall', blurb: 'Monet hung seven canvases from the Gare series at the 3rd Impressionist Exhibition (NOT all twelve). This Orsay version was almost certainly among them. Reception split, some critics saw a hopeful celebration of modernity, others sneered.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1878–today', title: 'Caillebotte buys it for 685 francs', blurb: 'Caillebotte bought it from Monet on 10 March 1878 for 685 francs, an act in a distressed market (Hoschedé’s collection was being liquidated through several sales that spring, with the main bankruptcy auction at Hôtel Drouot 5–6 June 1878). Then via Caillebotte’s 1894 will and the 1896 bequest negotiation: France accepted 38 of 67 works (the rejected 29 offered back in 1904 and 1908 and refused both times). To the Luxembourg 1896, Louvre 1929, Jeu de Paume 1947, Musée d’Orsay 1986. RF 2775. On permanent view.', progress: 0.96 },
  ],
  provenance: [
    { year: '1877–1878', who: 'Claude Monet (the artist)', place: 'Paris', note: 'Painted in early 1877 from inside the shed, with formal permission, then finished in his nearby rented studio. Shown at the 3rd Impressionist Exhibition, April 1877, as one of seven Gare Saint-Lazare canvases on the wall.', price: null },
    { year: '1878–1894', who: 'Gustave Caillebotte', place: 'Paris', note: 'Bought from Monet on 10 March 1878 for 685 francs, a few months before Ernest Hoschedé’s catastrophic bankruptcy auction on 5–6 June 1878 sent Impressionist prices into freefall. Held by Caillebotte for the rest of his life.', price: '685 fr' },
    { year: '1894–1896', who: 'The French State (in negotiation)', place: 'Paris', note: 'Caillebotte’s will left 67 Impressionist paintings to France; after a two-year wrangle the Académie des Beaux-Arts accepted only 38 of them in 1896 (the rejected 29 were offered back to the family in 1904 and 1908 and refused both times). This canvas was among the 38 accepted.', price: null },
    { year: '1896–today', who: 'Musée du Luxembourg → Musée du Louvre → Musée du Jeu de Paume → Musée d’Orsay', place: 'Paris', note: 'Unveiled in the Caillebotte room at the Musée du Luxembourg, February 1897, the first time the Impressionists hung in a French public museum. Louvre 1929; Jeu de Paume 1947; Musée d’Orsay 1986 (RF 2775). On permanent view.', price: 'gift to the nation', museum: true },
  ],
  figures: [
    { name: 'Claude Monet', role: 'The painter', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Gustave Caillebotte', role: 'Bought it for 685 fr; bequeathed it to France', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Ernest Hoschedé', role: 'Bankrupt 1878; Monet later moved in with his widow', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Baron Haussmann', role: 'Built the boulevards beyond the shed', palette: ['#7a6a52', '#3a3020', '#100c08'] },
    { name: 'Jean-Léon Gérôme', role: 'Academic painter; led the 1894 bequest objection', palette: ['#6a6a5a', '#3a3a2e', '#0e0e08'] },
  ],
  annotations: [
    { label: 'The dark vault of girders', where: 'The entire upper third of the canvas, top edge inward', detail: 'Look up. The dark beams cutting diagonally across the top of the picture are the iron girders of the train shed’s roof, the structural ribs of a great cast-iron skeleton holding up panes of dirty glass. The blue-grays you see between the girders are weak daylight leaking through the smoke-streaked glass. Monet painted the roof from underneath, from inside the shed, so this whole upper band is a kind of metal cathedral ceiling, the cathedral of modern Paris is iron, not stone.' },
    { label: 'Two engines, left and centre', where: 'The lower middle of the picture, on the platform floor', detail: 'Two locomotives, the engine cars of the trains, sit on parallel tracks pointing roughly toward you. The closer one is on the left, a darker, sharper black mass with the faint suggestion of a smokestack and boiler. The farther one is just to the right of it, set back, fainter through the haze, its body half-erased by the steam it’s producing. They aren’t drawn in detail, no rivets, no nameplates, they’re solid silhouettes, more like dark blocks than rendered machines.' },
    { label: 'The painting’s real subject', where: 'The centre of the canvas, rising from the engines up toward the roof', detail: 'A great soft cloud of steam fills the heart of the picture, rising from the locomotives below and billowing up under the iron roof. Get close and you can see Monet has built it out of dabs of nearly white paint, pale yellow, soft blue, and feathered gray edges. Now back up two paces. The separate dabs vanish; the dabs of white and blue and gray fuse in your eye into a single moving body of vapor. That arm’s-length blending is the broken-color trick, colors laid down side by side on the canvas, mixed by the viewer’s eye at viewing distance, not by Monet on the palette.' },
    { label: 'The city beyond the shed', where: 'Upper right, beyond the steam', detail: 'Look to the right side of the cloud, toward the upper right of the canvas, and you can just make out pale rectangular shapes, the Haussmannian apartment buildings of the rue de Rome, the bourgeois Paris streets right outside the open end of the shed. They are hazed almost to ghosts here, half-erased by the steam, but they’re there. They tell you the shed is open at the far end and the city is right outside, the painting is not a sealed interior, it’s a room facing out.' },
    { label: 'Porters and passengers in dabs', where: 'Low in the picture, at the platform edge near the engines', detail: 'Along the platform near the engines you can find a handful of small figures, porters, passengers, railway crew, picked out in quick brushstroke-sized dabs. They have no faces; they barely have shoulders. Monet has given them just enough mark to register as human scale, so you can tell how big the engines and the shed are.' },
    { label: 'Where the shed ends and the daylight begins', where: 'The contrast between the dark upper interior and the pale far-right back', detail: 'Trace your eye from the dark iron roof at the upper left across to the pale, hazed apartments at the upper right, and you can feel where the shed ends. Under the roof on the left it is dark, the vault of iron and dirty glass keeps the light low. Out at the far end, where the shed opens onto the rail yard and the city, the light brightens. That contrast, dim interior against bright opening, is the architectural logic of any cathedral-scaled hall: dark vault, light beyond the doors.' },
  ],
  lineage: {
    parents: [ { label: 'Turner · Rain Steam Speed', mode: 'art' }, { label: 'Manet · railway', mode: 'art' }, { label: 'Haussmann’s Paris', mode: 'civ' } ],
    children: [ { label: 'Impressionism', mode: 'art' }, { label: 'Monet’s serial light', mode: 'art' }, { label: 'Modern industrial painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────────────────
// The Stone Breakers (Courbet, 1849), ArtWorkContent
// Drafted by the AUTHOR agent in the gated art pipeline. Same field shape as
// BURIAL (src/lib/art-content.ts ~1390). To be integrated by the coordinator
// into art-content.ts after the critic gates pass. Section ids match the
// Sb… JSX functions in stone-breakers-narratives.tsx.
// ─────────────────────────────────────────────────────────────────────────

export const STONE_BREAKERS: ArtWorkContent = {
  id: 'stone-breakers',
  name: 'The Stone Breakers',
  shortName: 'The Stone Breakers',
  year: 1849,
  artist: 'Gustave Courbet',
  artistId: 'courbet',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '5 ft 5 in × 8 ft 5 in',
  location: 'Destroyed 1945, formerly Gemäldegalerie, Dresden',
  acquired: 'Lost in WWII, February 1945 (museum status: missing, presumed destroyed)',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 2, total: 9 },
  hook: 'Two road laborers breaking rock, life-size and dead serious, the scale the Salon kept for gods, spent on men with holes in their shoes. The original is gone; only reproductions survive.',
  heroImage: ART_IMG.courbetStoneBreakers,
  heroCredit: 'Courbet, The Stone Breakers, 1849 · destroyed 1945, formerly Gemäldegalerie, Dresden',
  heroAspect: 1.56, // 257 × 165 cm → W/H ≈ 1.558
  heroFit: 'contain', // the work hero shows the WHOLE canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1849', k: 'Painted' },
    { v: '5′5″ × 8′5″', k: 'Dimensions' },
    { v: 'Destroyed 1945', k: 'Now' },
  ],
  sections: [
    { id: 'road', eyebrow: 'Near Maisières · 1849', dateLabel: '1849', title: 'Two men on a road', blurb: 'Courbet stops his carriage to watch two laborers break stones, sees “the most complete expression of poverty” and asks them to his studio the next morning, to paint them life-size.', progress: 0.08 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1849', title: 'A boy, an old man, and two hidden faces', blurb: 'The straining youth with the basket, the kneeling old man with the hammer, the patched clothes and cracked clogs, and the one decision that runs the whole picture: you never see either face.', progress: 0.32 },
    { id: 'salon', eyebrow: 'Paris · 1850–51', dateLabel: '1850–51', title: 'The Burial’s twin', blurb: 'Hung in the same Salon as A Burial at Ornans, two monumental Courbets, one program, delivered as a single coordinated assault on what serious painting was allowed to be about.', progress: 0.56 },
    { id: 'meaning', eyebrow: 'Dignity vs pity', dateLabel: '1850s–1865', title: '“The first socialist painting”?', blurb: 'Proudhon read it as a manifesto for the laboring poor; Courbet swore he’d simply painted what he saw. Why the refusal of pity is exactly what gives the two men their weight.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1945–today', title: 'A painting that only survives as a photograph', blurb: 'Dresden, the last months of the war, and a masterpiece lost, the museum lists it as “missing.” Why the image you can see is gray, and what it means to read a work that no longer exists.', progress: 0.96 },
  ],
  provenance: [
    { year: '1849–1850s', who: 'Gustave Courbet (the artist)', place: 'Ornans / Paris', note: 'Painted in 1849 after meeting two stone breakers on the road near Maisières; shown at the Salon of 1850–51 alongside A Burial at Ornans.', price: null },
    { year: '19th–20th c.', who: 'Private hands → German collections', place: 'France → Germany', note: 'The canvas passed out of Courbet’s hands and eventually into German collections, entering the Dresden picture gallery.', price: null },
    { year: 'by the 20th c.–1945', who: 'Gemäldegalerie, Dresden', place: 'Dresden', note: 'Held by the Dresden state picture gallery, one of the great public homes for the painting before the war.', price: null, museum: true },
    { year: 'February 1945', who: 'Lost in WWII', place: 'near Dresden', note: 'Lost in the last months of the war. By the standard account it was on a transport moving pictures toward Königstein Fortress when the convoy was bombed, destroyed with more than 150 other pictures; one scholar (Raskin, 1988) argues it had already gone missing in 1944. The museum lists it as “missing” presumed destroyed.', price: 'destroyed', museum: true },
  ],
  figures: [
    { name: 'Courbet', role: 'The painter', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'The old man', role: 'Kneeling, hammer raised', palette: ['#6a6256', '#3a342a', '#15110c'] },
    { name: 'The young man', role: 'Standing, basket of stone', palette: ['#7a7064', '#42382c', '#15110c'] },
    { name: 'Proudhon', role: 'Read it as “socialist”', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
    { name: 'Francis Wey', role: 'Got the “I saw them” letter', palette: ['#5a4a32', '#2e2418', '#0e0a06'] },
  ],
  annotations: [
    { label: 'The boy with the basket', where: 'Left, the standing figure seen from behind', detail: 'A young man, too young, really, for this work, strains under a heavy basket of broken stone, his whole body torqued by the weight. You see his back and the nape of his neck; his face is turned away from you entirely. His white shirt has split open at the shoulder blade, a leather strap crosses his back, and his trousers and shoes are coming apart. Courbet gives you his effort and his rags, and withholds the one thing that would let you feel sorry for him: his face.' },
    { label: 'The old man with the hammer', where: 'Right of center, kneeling on one knee', detail: 'An old man, Courbet said about seventy, kneels on a pad of straw with a long-handled hammer raised over his shoulder, caught at the top of its arc, an instant before it falls on the stone. He is too old, really, for this work either, which is the quiet point: between the boy and the old man there is no prime-of-life in this picture, only the start of a hard life and the end of one. His face is hidden under the brim of a battered straw hat; like the boy, he is all labor and no expression.' },
    { label: 'The two hidden faces', where: 'Both heads, the boy’s turned away, the old man’s under the hat', detail: 'This is the decision that runs the whole painting. Neither man looks at you; neither face is visible. A contemporary critic complained that Courbet had “suppressed the two heads.” He had, on purpose. A visible, pleading face turns a laborer into a sympathetic individual you pity. Two hidden faces leave you only the bodies and the work, which is harder to feel sentimental about and harder to look away from.' },
    { label: 'Patched clothes and cracked clogs', where: 'Low, the old man’s trousers and wooden sabots', detail: 'Look at the clothing close and you find the poverty rendered as fact, not pathos: trousers patched and re-patched, a striped waistcoat, and on the old man’s feet wooden sabots (clogs) so split you can almost see the heel through them. When the picture reached Paris, the press caricatured these clogs, drawing them comically huge, a tell that the real offense was making this kind of poverty big and serious at all.' },
    { label: 'The pot at the edge', where: 'Far right, at ground level by the rocks', detail: 'Off to the right, easy to miss, sits a small dark cooking pot with a little bread beside it, presumably the men’s meal, set down in the dirt where they work. It is the only soft, domestic note in the picture, and it is parked at the very margin, almost out of frame: even lunch is an afterthought to the rock.' },
    { label: 'The wall of hill behind them', where: 'The whole upper canvas, the dark bank, a sliver of sky at upper right', detail: 'There is almost no sky. A steep, dark bank fills nearly the entire top of the canvas, leaving only a thin wedge of pale light in the upper right corner. The hill presses the two men forward to the very front of the picture, with no horizon to look off into and no air to breathe. A landscape would have given them a distance; Courbet gives them a wall. They are pinned between the rock they break and the rock that rises behind them.' },
  ],
  lineage: {
    parents: [
      { label: 'The 1848 Revolution', mode: 'civ' },
      { label: 'Dutch genre painting', mode: 'art' },
      { label: 'Realism', mode: 'art' },
    ],
    children: [
      { label: 'A Burial at Ornans', mode: 'art' },
      { label: 'Social Realism', mode: 'art' },
      { label: 'Millet’s peasants', mode: 'art' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// The Painter's Studio (Courbet, 1854–55), ArtWorkContent
// Built to the EXACT shape of BURIAL (art-content.ts). Drop into ART_WORK_CONTENT.
// kind: WORK · chain "Works of Realism" 5 of 9 · accent amber.
// ─────────────────────────────────────────────────────────────
export const STUDIO: ArtWorkContent = {
  id: 'studio',
  name: 'The Painter’s Studio',
  shortName: 'The Painter’s Studio',
  year: 1855,
  artist: 'Gustave Courbet',
  artistId: 'courbet',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '11 ft 10 in × 19 ft 7 in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Bought for the Louvre by public subscription, 1920; to the Musée d’Orsay, 1986',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 5, total: 9 },
  hook: 'A whole society sorted into one room, with the painter dead-center, and a subtitle that calls itself, on purpose, a “real allegory.”',
  heroImage: ART_IMG.courbetStudio,
  heroCredit: 'Courbet, The Painter’s Studio, 1855 · Musée d’Orsay, Paris',
  heroAspect: 1.66,
  heroFit: 'contain', // the work hero shows the WHOLE ~1.66:1 three-part composition, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1854–55', k: 'Painted' },
    { v: '11′10″ × 19′7″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'refusal', eyebrow: 'Paris · 1855', dateLabel: '1855', title: 'The world’s fair says no', blurb: 'The biggest show on Earth opens in Paris and refuses Courbet’s two largest canvases, this one and A Burial at Ornans, so he builds his own tent across the road and hangs them there himself.', progress: 0.08 },
    { id: 'allegory', eyebrow: 'The subtitle', dateLabel: '1854–55', title: 'A “real allegory” of seven years', blurb: 'What it means to call a painting both real and an allegory at once, and why the painter sits dead-center, painting a landscape with his back to the whole crowd.', progress: 0.32 },
    { id: 'reading', eyebrow: 'Look closer', dateLabel: 'The canvas', title: 'The walk across the room', blurb: 'Center, then right, then left: the self-portrait at the easel, the “shareholders” who back him, and the “other world” of the poor and the powerful he claims as his subject.', progress: 0.56 },
    { id: 'cast', eyebrow: 'Who’s in it', dateLabel: '1848–1855', title: 'Naming the room', blurb: 'Baudelaire reading in the corner, Proudhon the radical, Bruyas the collector who helped shape the picture’s whole idea, and the wide-hatted poacher on the left that half of art history reads as the Emperor.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1855–today', title: 'Afterlife', blurb: 'The tent loses money, the painting is too big to sell, and seventy years later France buys it back by public subscription, Courbet’s testament, hanging in the Orsay.', progress: 0.96 },
  ],
  provenance: [
    { year: '1855–1877', who: 'Gustave Courbet (the artist)', place: 'Paris / Ornans', note: 'Painted 1854–55; refused by the 1855 Exposition Universelle jury and shown instead in Courbet’s own Pavilion of Realism. The vast, near-unsellable canvas stayed with the artist until his death in Swiss exile in 1877.', price: null },
    { year: '1877–1881', who: 'The Courbet estate', place: 'France', note: 'After Courbet died in exile, the enormous painting passed through his estate; too large and too political to find an easy buyer.', price: null },
    { year: '1881–1919', who: 'Private hands', place: 'France', note: 'Held privately for decades, exactly the fate (a foreign sale, a breakup) a national-treasure painting risks when it is this hard to house.', price: null },
    { year: '1920', who: 'Musée du Louvre', place: 'Paris', note: 'Bought for the French national museums by a public subscription, with the Société des Amis du Louvre, the nation raising the money to keep Courbet’s testament in France.', price: 'public subscription', museum: true },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'When the Orsay opens in a converted railway station, the Louvre’s 19th-century collection crosses the river to fill it. On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Courbet', role: 'At the easel, center', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'Bruyas', role: 'Collector & friend who shaped the idea', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Proudhon', role: 'Radical thinker (right)', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
    { name: 'Baudelaire', role: 'Poet, reading (far right)', palette: ['#5a4a32', '#2e2418', '#0e0a06'] },
    { name: 'Champfleury', role: 'The movement’s theorist & namer', palette: ['#5a4a32', '#2e2418', '#0e0a06'] },
    { name: 'The poacher (left)', role: 'Often read as Napoleon III', palette: ['#53412c', '#2a1f14', '#0c0805'] },
  ],
  annotations: [
    { label: 'The painter, painting the wrong thing', where: 'Dead center, the seated man at the easel', detail: 'Courbet sits at his easel in the exact middle of the canvas, palette in hand, and the picture he is working on is not a portrait or a Bible scene but a plain green river landscape, a view of the Loue valley back home near Ornans. He is showing you what Realism does: turns its back on the whole theatrical room of human society behind him and paints the unremarkable real world instead. The self-portrait that runs the painting has the painter looking away from almost everyone in it.' },
    { label: 'A nude with nowhere to be', where: 'Just behind Courbet, standing, the pale figure with a white sheet', detail: 'A naked model stands at Courbet’s shoulder, a white drapery slipping down her hip to the floor. The joke is that she has no job here: he is painting a landscape, so she is a model with nothing to model for, the academic nude (the idealized naked body the official schools drilled endlessly) standing idle behind a painter who would rather paint a riverbank. She is the old kind of subject, watching the new kind get made.' },
    { label: 'The only one really looking', where: 'At the foot of the easel, the small boy in a smock', detail: 'A small peasant boy in a pale smock stands right at the easel, head tipped back, watching the landscape appear. In a room of forty adults posing, networking, reading, brooding, the child is the one figure giving the act of painting his whole open attention, the unschooled eye, the viewer Courbet actually wants.' },
    { label: 'The cat that doesn’t care', where: 'On the floor near Courbet’s feet, center-low', detail: 'A white cat crouches on the bare floor by the painter’s feet, attending to nothing. It is the same flick of nerve as the bored dog in A Burial at Ornans (which has its own read in this app): a small indifferent animal dropped into a solemn, self-important scene, quietly refusing to be impressed by any of it.' },
    { label: 'Baudelaire, reading in the corner', where: 'Far right edge, bent over a large book', detail: 'At the extreme right, almost falling off the canvas, a man sits hunched over a big open book, absorbed, ignoring the whole gathering. That is the poet Charles Baudelaire, copied from a portrait Courbet had painted of him in 1847, the “shareholders” side’s patron saint, present but lost in his reading, the way poets are.' },
    { label: 'The wide-hatted poacher (the Emperor?)', where: 'Left foreground, the seated man in a broad hat with hunting dogs', detail: 'Over on the dark left side sits a man in a broad-brimmed hat with hunting dogs at his feet, dressed as a poacher. Many readers, then and since, take him for Napoleon III, France’s emperor, slipped in among “the people who live off death” identified by the hunting dogs and the curled moustache. Courbet’s own letter never names him, and X-rays show the figure was reworked later, so treat the imperial reading as the famous interpretation it is, not a caption Courbet signed.' },
    { label: 'Cast-offs on the studio floor', where: 'Lower-left foreground, on the bare boards', detail: 'Scattered on the floor at the bottom-left lie a guitar, a dagger, and a plumed cavalier’s hat, the dressing-up box of Romanticism (the swashbuckling, exotic, high-drama painting Courbet was burying). Tossed aside on the boards of the “real” world, they read as the discarded props of the kind of art he refused to make.' },
    { label: 'The crucified mannequin', where: 'Up in the shadows on the dark left side, behind the standing figures', detail: 'Strung up in the gloom on the left hangs a lay figure, an artist’s mannequin, the jointed, stuffed studio dummy academic painters draped and posed in place of a living body. Courbet has trussed his with the arms wrenched back so it reads unmistakably as a body on a cross. A crucified dummy, pinned up on the side of the room he gave to misery and the dead: the death of academic art itself, the lifeless stand-in for the real body nailed up in the shadows while the new kind of painting happens, alive, in the light at the center.' },
  ],
  lineage: {
    parents: [ { label: 'A Burial at Ornans', mode: 'art' }, { label: 'The 1848 Revolution', mode: 'civ' }, { label: 'Dutch group portrait', mode: 'art' } ],
    children: [ { label: 'Realism', mode: 'art' }, { label: 'The artist’s self-portrait as manifesto', mode: 'art' }, { label: 'Édouard Manet', mode: 'art' } ],
  },
}

// Millet, The Sower (1850), ArtWorkContent (Realism works chain, index 4 of 9).
// Author draft for the gated art pipeline. Copies the BURIAL shape exactly.
// NOTE: ART_IMG.milletSower (the Google Art Project / Wikimedia file) is the
// MUSEUM OF FINE ARTS, BOSTON version, credit confirmed correct. The which-
// canvas-hung-at-the-Salon question (Boston vs Yamanashi) is handled as a debate
// in the prose, not asserted here. See sower-factpack.md.

export const SOWER: ArtWorkContent = {
  id: 'sower',
  name: 'The Sower',
  shortName: 'The Sower',
  year: 1850,
  artist: 'Jean-François Millet',
  artistId: 'millet',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '3 ft 4 in × 2 ft 8½ in',
  location: 'Museum of Fine Arts, Boston',
  acquired: 'Gift of Quincy Adams Shaw, 1917',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 4, total: 9 },
  hook: 'A lone peasant strides a dusk field flinging seed, life-size, dark, almost menacing, two years after the poor toppled a throne.',
  heroImage: ART_IMG.milletSower,
  heroCredit: 'Millet, The Sower, 1850 · Museum of Fine Arts, Boston',
  heroAspect: 0.813,
  heroFit: 'contain', // the work is a PORTRAIT canvas, show the whole figure, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1850', k: 'Painted' },
    { v: '3′4″ × 2′8½″', k: 'Dimensions' },
    { v: 'MFA Boston', k: 'Now at' },
  ],
  sections: [
    { id: 'barbizon', eyebrow: 'Gruchy · Paris · Barbizon', dateLabel: '1814–1850', title: 'The farm boy who left for the field', blurb: 'A real peasant’s son trains as a painter, flees a cholera epidemic in Paris, and settles in a forest village to do the one thing the art world ranked dead last: paint the people he grew up with.', progress: 0.1 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1850', title: 'The man on the hill', blurb: 'Six feet of striding peasant, dark as a silhouette, flinging seed down a dusk slope, the sowing arm, the shadowed face, the diagonal, the tiny ploughman behind. Slow down and look.', progress: 0.36 },
    { id: 'salon', eyebrow: 'Paris · 1850–51', dateLabel: '1850–51', title: 'A peasant in the temple', blurb: 'Hung in the official Salon the same season as Courbet’s village funeral and stone-breakers, the giant sower frightened a Paris still raw from 1848, a field hand made monumental read like a threat.', progress: 0.6 },
    { id: 'meaning', eyebrow: 'What it means', dateLabel: '1850s', title: 'Monument, sermon, or menace', blurb: 'Peasant as monument; the oldest parable in the West; a class threat in frightened eyes, and a painter who kept insisting he was not a socialist, only painting the truth of the soil.', progress: 0.82 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1851–today', title: 'Afterlife', blurb: 'An American buys it off the Salon wall, it crosses the Atlantic to Boston, and a young Dutchman named Van Gogh spends his whole life copying it. The versions question, and the long road.', progress: 0.97 },
  ],
  provenance: [
    { year: '1850', who: 'Jean-François Millet (the artist)', place: 'Barbizon', note: 'Painted at Barbizon in 1850 and shown at the Paris Salon of 1850–51. Millet made a nearly identical second version the same year (now in Japan); which exact canvas hung at the Salon is debated.', price: null },
    { year: 'c. 1851–52', who: 'William Morris Hunt', place: 'Paris / Boston', note: 'The American painter William Morris Hunt saw The Sower at the Salon, bought it from Millet, and went to live near him at Barbizon for about two years. Hunt became the great early champion of Millet in the United States, the reason so much Millet ended up in Boston.', price: 'sold by the artist' },
    { year: '1874', who: 'Quincy Adams Shaw', place: 'Boston', note: 'Hunt sold the painting through the Boston dealers Doll and Richards to the collector Quincy Adams Shaw (1825–1908), one of the largest private holders of Millet anywhere.', price: 'sold to a collector' },
    { year: '1917', who: 'Museum of Fine Arts, Boston', place: 'Boston', note: 'After Shaw’s death his heirs, Quincy Adams Shaw, Jr. and Mrs. Marian Shaw Haughton, gave the painting to the MFA. On view there ever since.', price: 'gift to the museum', museum: true },
    { year: 'today', who: 'Museum of Fine Arts, Boston', place: 'Boston', note: 'Accession 17.1485. The famous version, the one reproduced everywhere, including this app, hangs permanently in the MFA’s 19th-century galleries.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Millet', role: 'The peasant painter', palette: ['#a8915a', '#5a4a2a', '#1a1410'] },
    { name: 'The sower', role: 'A field laborer, made monumental', palette: ['#5a5238', '#332c1e', '#100c08'] },
    { name: 'Courbet', role: 'Realism’s firebrand; Salon-mate of 1850–51', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'William Morris Hunt', role: 'American who bought it off the wall', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Van Gogh', role: 'Copied it his whole life', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
  ],
  annotations: [
    { label: 'The striding giant', where: 'The whole foreground, the dark figure walking toward you down the slope', detail: 'A single peasant fills almost the entire canvas, pitched diagonally downhill, his leading leg driving forward and down the slope while the trailing leg stretches back up the rise, weight tipping toward you. He is painted so dark and so large that he reads less as a man than as a silhouette cut out of the dusk, monumental, looming, and a little menacing. There is no one else near him at his scale; the whole picture is built to make this one field hand enormous.' },
    { label: 'The sowing arm, caught mid-throw', where: 'His right arm, flung across his body to the left; the seed in the air', detail: 'His right arm is swept all the way across his chest, the hand open, just past the instant of the throw, you are seeing the follow-through, the seed scattering off into the furrows. It is the single most active gesture in the picture, and Millet froze it at the most violent point of the arc, which is why the figure feels like it is moving even though it is paint.' },
    { label: 'The seed-bag at his hip', where: 'His left hand, holding a sack of grain against his left side', detail: 'His left hand grips a coarse sack or apron of seed slung at his hip, the supply his right hand keeps dipping into and flinging. It anchors the lower-left of the figure and explains the whole motion: reach in, stride, throw, repeat, all the way down the field.' },
    { label: 'The face that isn’t there', where: 'Under the soft hat, upper-center of the figure', detail: 'A soft, floppy hat is pulled down low, and the face beneath it is sunk in shadow, barely a feature legible, no eyes to meet. He is almost faceless, and that is the point: not a portrait of a particular man but Labor itself, anonymous and a little frightening, walking straight at you.' },
    { label: 'The legs, bound in straw and mud', where: 'His lower legs and feet', detail: 'Blue trousers, a rust-brown jacket, and the lower legs and feet wrapped in straw or rag and caked in the same dark earth he treads. These are not boots for a portrait. They are the real protection a man ties on to walk a cold, broken field at the end of the day.' },
    { label: 'The tiny world behind him', where: 'Far upper right (ploughman and oxen, warm sky) and upper left (birds)', detail: 'Up the slope, very small, a man drives a team of oxen finishing the ploughing, with the last warm orange light of dusk and a sunlit bank behind him. At the upper left, a scatter of birds lifts off, already after the seed. These miniature figures do two jobs: they tell you it is the close of the working day, and by being so small they make the foreground sower colossal.' },
  ],
  lineage: {
    parents: [ { label: 'Barbizon landscape', mode: 'art' }, { label: 'The 1848 Revolution', mode: 'civ' }, { label: 'The Parable of the Sower', mode: 'civ' } ],
    children: [ { label: 'Van Gogh’s Sower', mode: 'art' }, { label: 'Realism', mode: 'art' }, { label: 'Social Realism', mode: 'art' } ],
  },
}

// The Gleaners (Jean-François Millet, 1857), ArtWorkContent
// Author draft for the art-content pipeline. Matches the BURIAL shape in src/lib/art-content.ts.
// Facts verified in gleaners-factpack.md (fact ledger). Dimensions ft/in only (house rule).
// Defers movement-level material to the REALISM movement object; goes deeper on THIS work.

export const GLEANERS: ArtWorkContent = {
  id: 'gleaners',
  name: 'The Gleaners',
  shortName: 'The Gleaners',
  year: 1857,
  artist: 'Jean-François Millet',
  artistId: 'millet',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 9 in × 3 ft 8 in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Bequeathed to the Louvre by Mme Pommery, 1891',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 7, total: 9 },
  hook: 'Three of the poorest women bent over a stripped field, gathering the grain the reapers dropped, and the bourgeois Salon saw a threat.',
  heroImage: ART_IMG.milletGleaners,
  heroCredit: 'Millet, The Gleaners, 1857 · Musée d’Orsay, Paris',
  heroAspect: 1.33,
  heroFit: 'contain', // the work hero shows the WHOLE ~1.33:1 field, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1857', k: 'Painted' },
    { v: '2′9″ × 3′8″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'gleaning', eyebrow: 'The custom', dateLabel: 'centuries', title: 'Gleaning: the right of the poorest', blurb: 'Before the painting, the practice, the ancient, regulated, vanishing right of the poorest to enter a harvested field and gather the grain the reapers left on the ground.', progress: 0.08 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1857', title: 'Three bent backs and a harvest they don’t share', blurb: 'Look hard: three women stooped over the stubble in blue, red, and yellow caps, and behind them, in golden light, the overflowing harvest they are not part of.', progress: 0.34 },
    { id: 'salon', eyebrow: 'Paris · 1857', dateLabel: '1857', title: 'The Salon takes fright', blurb: 'Hung in the official exhibition, three poor women gathering scraps read to the propertied classes as “the three Fates of Poverty” and a whiff of 1793, the rural poor made dignified, and dangerous.', progress: 0.58 },
    { id: 'meaning', eyebrow: 'What Millet meant', dateLabel: '1850s', title: 'Sympathy without sentiment', blurb: 'Millet gives the poor the seriousness of art without prettifying them, and whether that was a political act or simple human truth is a fight that has never settled.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1889–today', title: 'Afterlife', blurb: 'The despised picture sells for a hundred times its first price, becomes one of the most reproduced images ever made, and ends bequeathed to the nation that recoiled from it.', progress: 0.96 },
  ],
  provenance: [
    { year: '1857', who: 'Jean-François Millet (the artist)', place: 'Barbizon / Paris', note: 'Painted in Barbizon and shown at the Salon of 1857. Short of money, Millet sold it for 3,000 francs, below his 4,000-franc asking price.', price: '3,000 francs' },
    { year: 'by 1880s', who: 'Ferdinand Bischoffsheim', place: 'Paris', note: 'By the 1880s the once-scandalous canvas had risen into a Paris banker’s collection, the picture the Salon had recoiled from now a sought-after asset.', price: null },
    { year: '1889', who: 'Auction → Mme Pommery', place: 'Paris', note: 'Sold at auction for 300,000 francs, a hundredfold jump in about thirty years. Within a week it was announced that the champagne-house owner Jeanne-Alexandrine Louise Pommery had acquired it.', price: '300,000 francs' },
    { year: '1891', who: 'Musée du Louvre', place: 'Paris', note: 'On Pommery’s death the painting was bequeathed to the Louvre per the terms of her will, given, free, to the nation whose official Salon had once treated it as a threat.', price: 'bequest to the nation', museum: true },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'When the Musée d’Orsay opens in the converted Gare d’Orsay railway station, the Louvre’s 19th-century collection crosses the river to fill it. The Gleaners goes with it, and is on permanent view.', price: 'never sold since', museum: true },
  ],
  figures: [
    { name: 'Millet', role: 'The painter', palette: ['#a8915a', '#5a4a2a', '#1a1410'] },
    { name: 'The three gleaners', role: 'The subject', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Mme Pommery', role: 'Bought it; left it to France', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Courbet', role: 'The loud half of Realism', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'Van Gogh', role: 'Worshipped Millet', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
  ],
  annotations: [
    { label: 'The three bent backs', where: 'Foreground, across the lower third', detail: 'Three women work the stripped field in a slow diagonal, and the picture’s whole feeling lives in their backs. The two on the left are folded almost double, hands down at the stubble; the one on the right is the most nearly upright of the three (still stooped, never standing straight), as if pausing to ease a back that has been bent all day. Millet gives you the labor as posture: you can feel the ache without a single grimace, because the bodies do all the talking.' },
    { label: 'Blue, red, yellow, the only loud color', where: 'The three caps / headscarves', detail: 'Look at the caps: blue on the left woman, red on the center one, a warm yellow-gold on the woman at right. In a field of dust-browns and faded grays those three notes are the brightest color in the painting, the primary colors handed not to a goddess’s robe but to three field-workers’ headscarves. The eye finds them first and then has nowhere grander to go.' },
    { label: 'What they’re actually holding', where: 'The women’s hands and aprons', detail: 'Now look at the harvest of the gleaners themselves: the right-hand woman holds a thin little bundle of stalks; the center woman has a small bunch tucked at her apron. After a full day bent over the ground, this is the yield, a few fistfuls of grain the reapers happened to drop. The meagreness is the point. They are gathering what the harvest threw away.' },
    { label: 'The harvest they don’t share', where: 'The sunlit middle distance, behind the women', detail: 'Behind the three, the field is golden and overflowing: tall round stacks of grain, a loaded cart, long rows of sheaves, and a busy crew bringing the crop in under a hazy late-summer sun. This is the rich harvest, and the three women in front have no part in it. Millet split the canvas in two: grinding poverty stooped in the cool near-ground, abundance blazing in the warm distance, the bare stripped field between them like a moat.' },
    { label: 'The man on the horse', where: 'Far right, among the working crew', detail: 'Small and easy to miss at the right edge of the busy distance sits a figure on horseback, by the usual reading the farm’s mounted overseer, watching the work get done. He is tiny, but once you find him the social order of the field snaps into place: someone owns this harvest and supervises it on horseback, and the three women bent in front own none of it and gather its leavings on foot.' },
    { label: 'The low flat horizon', where: 'The top quarter of the canvas', detail: 'There are no mountains, no drama, no opening heaven, just a low, flat horizon with farm buildings and a hazy sky, the unremarkable countryside around Barbizon. Millet refuses scenery the way Courbet refuses it: nature here is not a backdrop for feeling, just the plain ground these people work, going on being ground.' },
  ],
  lineage: {
    parents: [
      { label: 'The right of gleaning', mode: 'civ' },
      { label: 'The Book of Ruth', mode: 'civ' },
      { label: 'Barbizon landscape', mode: 'art' },
      { label: 'The Sower', mode: 'art' },
    ],
    children: [
      { label: 'The Angelus', mode: 'art' },
      { label: 'Vincent van Gogh', mode: 'art' },
      { label: 'Social Realism', mode: 'art' },
      { label: 'Naturalism', mode: 'art' },
    ],
  },
}

// The Angelus (Jean-François Millet, 1857–59), ArtWorkContent
// Author draft for the art-content pipeline. Matches the BURIAL shape in src/lib/art-content.ts.
// Facts verified in angelus-factpack.md (fact ledger). Dimensions ft/in only (house rule).
// Defers movement-level material to the REALISM movement object; goes deeper on THIS work.
// Cross-references the Millet siblings SOWER (1850) and GLEANERS (1857); does not contradict them.

export const ANGELUS: ArtWorkContent = {
  id: 'angelus',
  name: 'The Angelus',
  shortName: 'The Angelus',
  year: 1859,
  artist: 'Jean-François Millet',
  artistId: 'millet',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 9⅞ in × 2 ft 2 in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Bequeathed by Alfred Chauchard, 1910',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 8, total: 9 },
  hook: 'Two peasants stop digging potatoes to pray at the evening bell, tiny under an enormous sky, and the small canvas becomes one of the most reproduced images of the century.',
  heroImage: ART_IMG.milletAngelus,
  heroCredit: 'Millet, The Angelus, 1857–59 · Musée d’Orsay, Paris',
  heroAspect: 1.19,
  heroFit: 'contain', // a small ~1.19:1 canvas, show the whole field + sky, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1857–59', k: 'Painted' },
    { v: '1′9⅞″ × 2′2″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'bell', eyebrow: 'The evening bell', dateLabel: '1857', title: 'The bell that stops the work', blurb: 'What the Angelus actually is, a prayer rung from the church three times a day, and why a memory of his grandmother stopping work at the sound of it is the seed of this whole small painting.', progress: 0.08 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1857–59', title: 'Two bowed heads under an enormous sky', blurb: 'Slow down and look: the man with his hat in his hands, the woman with her hands clasped, the potato basket, the fork in the dirt, the wheelbarrow, the speck of a church on the horizon, and the vast dusk sky pressing it all flat.', progress: 0.34 },
    { id: 'reception', eyebrow: 'A quiet start', dateLabel: '1857–1870s', title: 'The commission that fell through', blurb: 'It began as a job for a Boston collector who never collected it, under a different title about a potato harvest. The fame came slowly, and then all at once.', progress: 0.58 },
    { id: 'meaning', eyebrow: 'What it means', dateLabel: '1850s', title: 'Piety, or poverty, or both', blurb: 'Millet said it came from remembering his grandmother praying in the fields. The world turned it into a sentimental devotional postcard. The gap between those two readings is the whole argument about this picture.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1889–today', title: 'Afterlife', blurb: 'A trans-Atlantic bidding war, a record price, a trip to America and back; Dalí’s lifelong conviction that the basket hid a child’s coffin; the most reproduced image of its century; and the long road to the Orsay.', progress: 0.96 },
  ],
  provenance: [
    { year: '1857–59', who: 'Jean-François Millet (the artist)', place: 'Barbizon', note: 'Painted at Barbizon. Begun as a commission for the Boston collector Thomas Gold Appleton under the title “Prayer for the Potato Crop”; Appleton never collected it, so Millet reworked the canvas, by most accounts adding the small church tower on the horizon, retitled it The Angelus, and sold it on the open market.', price: null },
    { year: '1860s–1880s', who: 'A chain of private collectors', place: 'France', note: 'As Millet’s reputation soared in the years after his death in 1875, the once-modest canvas passed through a series of private owners at steadily climbing prices, eventually entering the collection of the French copper magnate Eugène Secrétan.', price: null },
    { year: '1 July 1889', who: 'Secrétan sale → American Art Association', place: 'Paris', note: 'At the auction of Secrétan’s collection (Galerie Sedelmeyer, timed to the 1889 Exposition Universelle), a bidding war broke out between Antonin Proust, fighting to keep it for the Louvre, and the American Art Association of New York. Bidding reached 553,000 francs. France nominally won, but the government refused to fund the purchase, so the painting passed to the under-bidding Americans and was shipped to the United States.', price: '553,000 francs' },
    { year: '1889–1890', who: 'American Art Association', place: 'New York / United States', note: 'The Association exhibited the painting in America, where it drew large, paying crowds, a single small canvas treated as a touring marvel.', price: null },
    { year: '1890', who: 'Alfred Chauchard', place: 'Paris', note: 'The Paris department-store magnate Alfred Chauchard (a founder of the Grands Magasins du Louvre) bought it back for France, for about 800,000 francs (some sources say 750,000), returning the painting across the Atlantic.', price: '≈800,000 francs' },
    { year: '1910', who: 'Musée du Louvre', place: 'Paris', note: 'Chauchard bequeathed his collection to the State; after his death in 1909 the gift was formally accepted into the Louvre on 15 January 1910, the picture given, free, to the nation that had failed to buy it at auction.', price: 'bequest to the nation', museum: true },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'When the Musée d’Orsay opens in the converted Gare d’Orsay railway station, the Louvre’s 19th-century collection crosses the river to fill it. The Angelus goes with it, and is on permanent view.', price: 'never sold since', museum: true },
  ],
  figures: [
    { name: 'Millet', role: 'The peasant painter', palette: ['#a8915a', '#5a4a2a', '#1a1410'] },
    { name: 'The two peasants', role: 'The subject; praying at dusk', palette: ['#7a6a44', '#3e3320', '#12100a'] },
    { name: 'Alfred Chauchard', role: 'Bought it back for France; left it to the nation', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Salvador Dalí', role: 'Obsessed; saw a hidden coffin', palette: ['#5a4a6a', '#322844', '#100c18'] },
    { name: 'Van Gogh', role: 'Worshipped Millet; copied it', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
  ],
  annotations: [
    { label: 'The man, hat in his hands', where: 'Left of center, standing, head bowed', detail: 'The man stands stock-still with his head dropped and his hat taken off and held in both hands at his waist, the exact posture Millet remembered from his grandmother, who prayed “with cap in hand.” He has interrupted himself mid-job; the prayer simply stopped him where he stood. His face is barely legible in the dusk, which is the point: this is not a portrait of a particular pious man but the gesture of stopping itself.' },
    { label: 'The woman, hands clasped', where: 'Right of center, standing, head bowed', detail: 'She faces him across the basket, head bent lower than his, her hands pressed together at her chest in the plainest gesture of prayer there is. A white cap, a dark dress, a worn apron. The two of them make a quiet matched pair, both stilled, both bowed, both anonymous, and the small gap of empty field between them is where the whole hush of the picture lives.' },
    { label: 'The basket of potatoes', where: 'On the ground between them, at their feet', detail: 'A low woven basket of potatoes sits in the turned earth between the two figures, the day’s dug crop, set down the instant the bell rang. It is the most ordinary object imaginable, and it became the most argued-over: this is the basket Salvador Dalí would later insist was painted over a small child’s coffin (see the afterlife chapter). For now, it is potatoes.' },
    { label: 'The fork, the barrow, the dropped tools', where: 'A digging fork upright at lower left; a wheelbarrow and sacks at the right edge', detail: 'Down at the lower left a digging fork stands jammed upright in the broken ground, exactly where the man left off; off to the right, half in shadow behind the woman, sit a wheelbarrow and sacks already loaded with the harvest. Together with the basket they finish the inventory of the labor, fork, basket, barrow, sacks, the unglamorous gear of a hard day digging potatoes, and every piece of it is dropped, not packed. That is how Millet tells you, without a word, that work was happening here a second ago and will resume the second the prayer is done.' },
    { label: 'The church on the horizon', where: 'On the far horizon, slightly right of center, behind and between the two figures', detail: 'Look hard at the flat far horizon and you will find it: a tiny church spire, no taller than a pin, on the far horizon, slightly right of center, behind and between the two figures. That speck is the source of everything, the bell ringing from it is what stopped these two where they stand. By most accounts Millet added this little tower when he reworked the painting, and it is the single detail that turns a potato field into a prayer.' },
    { label: 'The enormous sky', where: 'The top two-thirds of the canvas', detail: 'Most of the painting is sky, a vast, pale, dusk-flushed expanse that fills roughly the top two-thirds and presses the two small bodies down into a thin band of dark earth at the bottom. There are no mountains, no drama, no opening heaven; just the huge low evening pressing on two tiny figures, which is exactly how small a person feels alone in a field when the light is going.' },
  ],
  lineage: {
    parents: [
      { label: 'The Angelus prayer', mode: 'civ' },
      { label: 'Barbizon landscape', mode: 'art' },
      { label: 'The Gleaners', mode: 'art' },
      { label: 'The Sower', mode: 'art' },
    ],
    children: [
      { label: 'Vincent van Gogh', mode: 'art' },
      { label: 'Salvador Dalí', mode: 'art' },
      { label: 'Mass-reproduced art', mode: 'civ' },
    ],
  },
}

// Gargantua (Honoré Daumier, 1831), ArtWorkContent
// Drop into src/lib/art-content.ts after BURIAL. Matches the BURIAL shape exactly.
// NOTE: this is a LITHOGRAPH (a print), not an oil, medium/dimensions/provenance
// adapted honestly to a print: seizure + suppression history rather than an
// ownership chain. Facts: see gargantua-factpack.md (fact ledger).

export const GARGANTUA: ArtWorkContent = {
  id: 'gargantua',
  name: 'Gargantua',
  shortName: 'Gargantua',
  year: 1831,
  artist: 'Honoré Daumier',
  artistId: 'daumier',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Lithograph',
  dimensions: '8.5 in × 12 in', // image, landscape (~21.4 × 30.5 cm); figures vary by impression, see fact ledger
  location: 'Bibliothèque nationale de France, Paris',
  acquired: 'Few impressions survive the 1831 seizure; held by the BnF and other print rooms',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 1, total: 9 },
  hook: 'A cartoon of the king as a giant eating the poor’s taxes and excreting medals, it cost the artist six months in jail.',
  heroImage: ART_IMG.daumierGargantua,
  heroCredit: 'Daumier, Gargantua, 1831 · lithograph · Bibliothèque nationale de France',
  heroAspect: 1.44,
  heroFit: 'contain', // the work hero shows the WHOLE landscape print, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1831', k: 'Made' },
    { v: 'Lithograph', k: 'Medium' },
    { v: 'BnF, Paris', k: 'Now at' },
  ],
  sections: [
    { id: 'king', eyebrow: 'Paris · 1830–31', dateLabel: '1830–31', title: 'The Citizen King and the war of the press', blurb: 'A revolution puts a bourgeois “King of the French” on the throne; a young caricaturist and his fearless publisher declare war on him in cheap printed pictures.', progress: 0.08 },
    { id: 'looking', eyebrow: 'The print', dateLabel: '1831', title: 'The giant, the plank, and the excreted honors', blurb: 'Read the image inch by inch: the pear-headed king gorging, the ramp of tribute-bearers feeding his mouth, the destitute crowd, and the medals dropping out the other end.', progress: 0.34 },
    { id: 'trial', eyebrow: 'The reckoning', dateLabel: '1831–33', title: 'Six months for a drawing', blurb: 'The print is seized on sight, the stone smashed, three men charged with insulting the king, and Daumier, after a suspended sentence, ends up in Sainte-Pélagie prison.', progress: 0.58 },
    { id: 'meaning', eyebrow: 'What it invented', dateLabel: '1831', title: 'The birth of the modern political cartoon', blurb: 'Why this one banned sheet matters: a fine-art print medium turned into a cheap mass weapon for the poor’s grievance, the template every editorial cartoonist still works from.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1833–today', title: 'From caricaturist to the painter of the poor', blurb: 'The surviving impressions, the censorship that followed, and Daumier’s long road from jailed cartoonist to the Realist painter of The Third-Class Carriage.', progress: 0.96 },
  ],
  // A print has no ownership chain; this is its publication-and-suppression history.
  provenance: [
    { year: 'Dec 1831', who: 'Drawn by Honoré Daumier for Charles Philipon’s satirical world', place: 'Paris', note: 'Daumier draws the king as Gargantua on a lithographic stone; the sheet is put out through Gabriel Aubert’s caricature shop in the Galerie Véro-Dodat, the storefront of Philipon’s La Caricature press.', price: null },
    { year: 'late Dec 1831', who: 'Seized by the police', place: 'Paris', note: 'On appearing in Aubert’s shop window the print is banned and confiscated almost at once. Police order the lithographic stone destroyed and the remaining proofs (printed copies pulled from the stone) seized, so the print barely circulates. By the careful scholarly account it was sold as a separate sheet and never ran inside La Caricature, though some museums (e.g. Yale) still catalogue their impression as “from the journal La Caricature.”', price: 'suppressed' },
    { year: '22–23 Feb 1832', who: 'Daumier, Aubert (publisher) & Delaporte (printer) on trial', place: 'Paris', note: 'All three charged under the November 1830 press law with arousing hatred and contempt of the king’s government and offending the king’s person (lèse-majesté). Daumier is held chiefly responsible; sentenced to six months and a 500-franc fine, at first suspended. (Daumier was not the lone martyr: Philipon, who steered the whole campaign, was himself repeatedly prosecuted, convicted, and jailed for his anti-Louis-Philippe satire.)', price: null },
    { year: '1832–33', who: 'Honoré Daumier (in prison)', place: 'Sainte-Pélagie, Paris', note: 'After he keeps needling the regime the suspended term is activated; Daumier is arrested and serves from 30 August 1832, released 14 February 1833. He goes on drawing inside.', price: null },
    { year: 'today', who: 'Bibliothèque nationale de France & other print rooms', place: 'Paris / Yale / San Francisco / etc.', note: 'Because the police were largely successful, very few impressions survive. The ones that do are held by the BnF and a handful of museum print collections, a banned cartoon that became a treasured object.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Daumier', role: 'The cartoonist', palette: ['#7a7064', '#42382c', '#15110c'] },
    { name: 'Charles Philipon', role: 'Publisher; invented the pear', palette: ['#6b5a3a', '#3a2e1c', '#120d08'] },
    { name: 'Louis-Philippe', role: 'The “Citizen King”', palette: ['#8a8074', '#4a4038', '#16120e'] },
  ],
  annotations: [
    { label: 'The pear-headed giant', where: 'Upper left, the enormous seated king', detail: 'King Louis-Philippe drawn as Gargantua, Rabelais’s gluttonous giant: a vast bloated body splayed in a low chair, belly enormous, mouth gaping open to be fed. His head is the famous pear, round-cheeked, tapering to a tuft, Charles Philipon’s mocking “poire” (French slang for “fathead”) made monstrous. The biggest, fattest thing in the picture is the king, and all he does is eat.' },
    { label: 'The plank running into his mouth', where: 'The long diagonal ramp, lower-right up to the king’s face', detail: 'A steep plank or gangway runs from the ground all the way up to the king’s open mouth, a conveyor belt of tribute. It is the spine of the whole image: everything the poor have travels up this ramp and disappears into the giant. The single line that turns a fat man into an economic machine.' },
    { label: 'The tribute-bearers and the basket', where: 'On the plank and at its foot', detail: 'Tiny laborers trudge up the plank hauling baskets and sacks of coins; at the bottom one bends double over a great hamper, loading the king’s next mouthful. They are drawn small and bent, the scale gap between the giant and the people feeding him is the joke. Their money goes up; it does not come back.' },
    { label: 'The destitute crowd', where: 'Massed at the right', detail: 'A ragged throng of common people crowds the right edge, the source of the squeezed wealth, thin and shabby where the king is gorged. This is where the taxes come from: the bottom of the country, emptied to fill the top.' },
    { label: 'The excreted honors', where: 'Below / beneath the king’s seat, with the scrambling officials', detail: 'Out the other end of the giant come not waste but documents, patents, commissions, ribbons, decorations, and a knot of well-dressed officials and cronies scrambles to gather them up. The savage core of the cartoon: the people’s money goes in one end and jobs, medals and favours for the privileged drop out the other. Trickle-up, drawn literally.' },
    { label: 'The government building', where: 'Lower left, behind the scrambling officials', detail: 'A government building closes the lower left, widely identified as the Palais Bourbon, the seat of the Chamber of Deputies (the lower house of France’s parliament), toward which the favour-laden officials hurry off: the bureaucracy and legislature on the receiving end of the king’s bounty. The circuit is complete: from the poor, into the king, out to the state’s own insiders.' },
  ],
  lineage: {
    parents: [
      { label: 'Rabelais’s Gargantua', mode: 'art' },
      { label: 'The July Monarchy', mode: 'civ' },
      { label: 'Philipon’s “poire”', mode: 'art' },
    ],
    children: [
      { label: 'The modern political cartoon', mode: 'art' },
      { label: 'The Third-Class Carriage', mode: 'art' },
      { label: 'Realism', mode: 'art' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// The Third-Class Carriage (Daumier, c.1862–64), ArtWorkContent
// EXACT BURIAL shape. Drop into src/lib/art-content.ts as `CARRIAGE`
// and register in ART_WORK_CONTENT. Authored gates-first; see
// audits/art-pipeline/realism-works/carriage-factpack.md for the ledger.
// ─────────────────────────────────────────────────────────────

export const CARRIAGE: ArtWorkContent = {
  id: 'carriage',
  name: 'The Third-Class Carriage',
  shortName: 'The Third-Class Carriage',
  year: 1864,
  artist: 'Honoré Daumier',
  artistId: 'daumier',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas (unfinished)',
  dimensions: '2 ft 1¾ in × 2 ft 11½ in',
  location: 'The Metropolitan Museum of Art, New York',
  acquired: 'The H.O. Havemeyer Collection, Bequest of Mrs. H. O. Havemeyer, 1929',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 9, total: 9 },
  hook: 'The cheapest seats on the new railway, packed with the urban poor, tired, dignified, and painted by a man the world only knew as a cartoonist.',
  heroImage: ART_IMG.daumierCarriage,
  heroCredit: 'Daumier, The Third-Class Carriage, c.1862–64 · The Metropolitan Museum of Art, New York',
  heroAspect: 1.38,
  heroFit: 'contain', // the work hero shows the WHOLE ~1.38:1 canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: 'c.1862–64', k: 'Painted' },
    { v: '2′1¾″ × 2′11½″', k: 'Dimensions' },
    { v: 'The Met', k: 'Now at' },
  ],
  sections: [
    { id: 'rail', eyebrow: 'Paris · the railway age', dateLabel: 'c.1862', title: 'The cheapest seats on a moving machine', blurb: 'A new machine, the railway, has thrown the poor of a whole city into one crowded box. France’s most famous cartoonist quietly picks up a brush to paint it.', progress: 0.08 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: 'c.1862–64', title: 'Three people, and a hundred behind them', blurb: 'A nursing mother, an old woman with a basket, a sleeping boy, and rows of anonymous passengers dissolving into the dim car. Dignity, and no pity at all.', progress: 0.34 },
    { id: 'unfinished', eyebrow: 'Behind the paint', dateLabel: 'c.1862–64', title: 'The grid he never painted over', blurb: 'This canvas was abandoned half-done, so the ruled grid and the drawing underneath show right through. A rare X-ray into exactly how a picture was built.', progress: 0.58 },
    { id: 'meaning', eyebrow: 'What it’s doing', dateLabel: '1860s', title: 'Realism gets on the train', blurb: 'Courbet painted the village, Millet the fields. Daumier paints the modern city, its crowds, its anonymity, its tenderness, without a drop of sentimentality.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1878–today', title: 'Famous as a cartoonist, blind, and broke', blurb: 'Barely sold in his lifetime, going blind in a borrowed house, Daumier dies poor in 1879. Then an American collector buys this canvas, and leaves it to New York.', progress: 0.96 },
  ],
  provenance: [
    { year: 'c.1862–64', who: 'Honoré Daumier (the artist)', place: 'Paris / Valmondois', note: 'Painted but left unfinished, the canvas still carries the ruled transfer grid. Daumier’s oils barely sold in his lifetime; he was known as a newspaper cartoonist, and this picture stayed an unsold studio canvas.', price: null },
    { year: '1879–1913', who: 'The art market, after Daumier’s death', place: 'France / New York', note: 'Daumier died in poverty in 1879. The exact chain of hands the canvas passed through before reaching America is not securely documented; what is certain is where it landed.', price: null },
    { year: '1913', who: 'Louisine Havemeyer (wife of sugar magnate H. O. Havemeyer)', place: 'New York', note: 'The great American collector, guided for years by her friend Mary Cassatt, the American painter who championed French Impressionism, buys the painting, reportedly for about $40,000, bringing it into the collection that did more than any other to put modern French painting in New York.', price: '~$40,000' },
    { year: '1929', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'On Louisine Havemeyer’s death the canvas enters the Met by bequest, as part of the H. O. Havemeyer Collection (Bequest of Mrs. H. O. Havemeyer, 1929). In the collection ever since.', price: 'bequest', museum: true },
  ],
  figures: [
    { name: 'Daumier', role: 'The cartoonist who painted', palette: ['#7a7064', '#42382c', '#15110c'] },
    { name: 'The nursing mother', role: 'Front bench, left', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'The old woman', role: 'Front bench, center', palette: ['#6b6354', '#39322a', '#120f0c'] },
    { name: 'The sleeping boy', role: 'Front bench, right', palette: ['#53412c', '#2a1f14', '#0c0805'] },
    { name: 'Louisine Havemeyer', role: 'Brought it to New York', palette: ['#5a4a32', '#2e2418', '#0e0a06'] },
    { name: 'Camille Corot', role: 'The friend who kept him afloat', palette: ['#6a7250', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The mother and the baby', where: 'Front bench, far left', detail: 'A young woman sits at the left end of the bench, head bowed, cradling an infant wrapped in her lap. Hers is one of the most tenderly worked passages in the whole picture, lit softly by the windows behind her, and it is doing the quiet emotional work of the painting: ordinary, unposed care, given the same weight as anything else in the frame.' },
    { label: 'The old woman and her basket', where: 'Front bench, dead center', detail: 'The most finished face in the painting belongs to the old woman in the middle, framed by a pale cream head-wrap, a hood of light cloth that is the single brightest passage in this dark picture, so your eye lands on her first of all. Beneath it: a face deeply lined, eyes forward, exhausted, both hands folded over the handle of a woven wicker basket on her lap. She is not grieving or pleading or telling a story, she is just sitting, the way people sit on a long ride, and that flat ordinariness is exactly the point.' },
    { label: 'The sleeping boy', where: 'Front bench, right end', detail: 'At the right end of the bench a boy has slumped over asleep, head dropped, the way children give out on a long journey. A dark box or chest, luggage, sits in the lower-right corner beside him. He completes the little family unit on the front bench: youth, motherhood, and age, three ages of the poor, lined up on one hard seat.' },
    { label: 'The crowd, dissolving backward', where: 'The whole upper register, behind the bench', detail: 'Behind the front three, rows of anonymous passengers, men in tall hats and caps, women in bonnets, recede into the dim car, and the farther back they go the sketchier and more ghostly the faces become (the unfinished paint exaggerates it). Nobody back there is an individual; they are the crowd, the mass of the modern city packed into a moving box.' },
    { label: 'The two windows', where: 'Upper left', detail: 'Two pale rectangles of window are the only real light in the carriage. Everything else is brown, low, and enclosed. The light falls forward onto the three figures on the front bench and leaves the back of the car in murk, which is why your eye lands on the mother, the old woman, and the boy before it even registers the crowd.' },
    { label: 'The grid he never painted over', where: 'Across the unfinished passages, clearest in the upper-left window area', detail: 'Look closely and you can see straight ruled lines and the drawn contours of figures showing right through the thin paint. This is the squaring grid, the scaffolding an artist drew to copy and enlarge a composition accurately, which was supposed to vanish under the finished paint. The picture was abandoned before that happened, so the bones of the method are left bare on the surface.' },
  ],
  lineage: {
    parents: [ { label: 'Realism', mode: 'art' }, { label: 'Daumier’s railway lithographs', mode: 'art' }, { label: 'Dutch genre painting', mode: 'art' } ],
    children: [ { label: 'Social Realism', mode: 'art' }, { label: 'Ashcan School', mode: 'art' }, { label: 'Impressionism', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// The Horse Fair (Rosa Bonheur, 1852–55), ArtWorkContent
// Drop into src/lib/art-content.ts (matches the BURIAL shape exactly)
// and register in ART_WORK_CONTENT. Dimensions FT/IN only, never cm.
// ─────────────────────────────────────────────────────────────
export const HORSE_FAIR: ArtWorkContent = {
  id: 'horse-fair',
  name: 'The Horse Fair',
  shortName: 'The Horse Fair',
  year: 1855,
  artist: 'Rosa Bonheur',
  artistId: 'bonheur',
  movement: 'Realism',
  movementId: 'real',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '8 ft × 16 ft 7½ in',
  location: 'The Metropolitan Museum of Art, New York',
  acquired: 'Gift of Cornelius Vanderbilt, 1887',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Works of Realism', index: 6, total: 9 },
  hook: 'Eight feet tall and over sixteen wide, the scale the Salon kept for the death of kings, spent on draft horses at a Paris market.',
  heroImage: ART_IMG.bonheurHorseFair,
  heroCredit: 'Bonheur, The Horse Fair, 1852–55 · The Metropolitan Museum of Art, New York',
  heroAspect: 2.07,
  heroFit: 'contain', // the hero shows the WHOLE ~2.07:1 panorama, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1852–55', k: 'Painted' },
    { v: '8′ × 16′7″', k: 'Dimensions' },
    { v: 'The Met', k: 'Now at' },
  ],
  sections: [
    { id: 'market', eyebrow: 'Paris · 1850–52', dateLabel: '1850–52', title: 'The market and the trousers', blurb: 'A working animal-painter wants the rawest horse subject in Paris, so she gets a police permit to dress as a man and spends eighteen months sketching the Boulevard de l’Hôpital horse market.', progress: 0.08 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '1852–55', title: 'Eight feet of muscle and dust', blurb: 'Read the painting itself: the dark horse rearing left of center, the rolling grey Percherons beside it, the twisting mounted handler, the left-to-right churn of horse and handler, the clouds of dust, the plane trees, the far dome of the Salpêtrière.', progress: 0.34 },
    { id: 'salon', eyebrow: 'The Salon · 1853', dateLabel: '1853', title: 'Horses at the scale of kings', blurb: 'The Salon of 1853 meets a market scene blown up to history-painting size, and instead of recoiling, the critics cheer. Instant, international fame.', progress: 0.58 },
    { id: 'bonheur', eyebrow: 'Rosa Bonheur', dateLabel: '1822–1899', title: 'The most famous woman painter alive', blurb: 'The animalière who out-earned the men, ran her own château and menagerie, was decorated by the Empress, and lived four decades with Nathalie Micas. A working professional, not a curiosity.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1854–today', title: 'Afterlife', blurb: 'Gambart tours it through Britain and has it engraved for the masses; Vanderbilt buys it in 1887 and gives it to New York; a half-size sister hangs in London. The picture that conquered two continents.', progress: 0.96 },
  ],
  provenance: [
    { year: '1852–1854', who: 'Rosa Bonheur (the artist)', place: 'Paris', note: 'Painted 1852–55; first shown at the Salon of 1853, then finished and reworked. Bonheur sold it to her dealer in 1854.', price: null },
    { year: '1854–1857', who: 'Ernest Gambart (art dealer)', place: 'London', note: 'The Belgian-born London dealer buys it from the artist for 40,000 French francs, tours it through Britain as a paying attraction, and has it engraved for mass sale, turning one canvas into a print empire.', price: '40,000 francs' },
    { year: '1857–1866', who: 'William Parkinson Wright', place: 'England', note: 'Passes to the English collector Wright after Gambart’s tour and reproduction campaign.', price: null },
    { year: '1866–1887', who: 'Alexander Turney Stewart', place: 'New York', note: 'Crosses the Atlantic into the collection of A. T. Stewart, the New York department-store magnate, one of the richest men in America.', price: null },
    { year: '1887', who: 'Cornelius Vanderbilt II', place: 'New York', note: 'Buys it for $53,000 at the estate auction of Stewart’s widow, and immediately gives it to the Metropolitan Museum of Art, just steps from his own Fifth Avenue mansion.', price: '$53,000', museum: true },
    { year: '1887–today', who: 'The Metropolitan Museum of Art', place: 'New York', note: 'Gift of Cornelius Vanderbilt, 1887 (accession 87.25). On permanent view ever since, one of the most-visited paintings in the building.', price: 'gift to the museum', museum: true },
  ],
  figures: [
    { name: 'Rosa Bonheur', role: 'The painter', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Nathalie Micas', role: 'Lifelong companion', palette: ['#7a6a44', '#3e3320', '#12100a'] },
    { name: 'Ernest Gambart', role: 'Dealer; toured + engraved it', palette: ['#6b6354', '#39322a', '#120f0c'] },
  ],
  annotations: [
    { label: 'The dark horse rearing, and the rolling greys', where: 'Center: a near-black horse left of center, the pale greys to its right', detail: 'The sharpest spike of motion is the dark, near-black horse just left of center, reared straight up off its front hooves with its head flung back and forelegs clawing the air, the single animal that has truly gone vertical. Right beside it, the brightest mass on the whole canvas: two big, pale, dappled-grey draft horses, the heavy French farm breed called a Percheron, not rearing but wheeling and rolling at a hard trot, the most fully-lit thing in the picture. The dark horse gives the rear; the greys give the unstoppable bulk. Bonheur gave the center of a sixteen-foot painting, the spot a history painter saved for a hero or a saint, to panicking workhorses.' },
    { label: 'The diagonal stampede', where: 'Running left-to-right across the whole canvas', detail: 'Nothing in this picture stands still. The horses and their handlers pour across the canvas in a single churning diagonal, surging from the upper left down toward the lower right, a dark horse rearing at left of center, a chestnut straining beside it, the greys wheeling in the middle, more animals crowding off to the right. There is no calm row of figures the way there is in a posed group portrait; there is a moving river of muscle, and you read it the way you’d read a real crowd of spooked animals: fast, and a little alarmed.' },
    { label: 'The mounted handler, twisting in his saddle', where: 'Center, on horseback, in a blue smock', detail: 'The figure that really arrests you sits right in the thick of it: a mounted handler in a blue smock, wrenched around in his saddle, one arm reaching back, his whole torso fighting the pull of the animals he is trying to hold. He is the human pivot of the picture, the still axis the stampede turns around, and his strain is painted as carefully as the horses’. Down at the lower left a second handler in a red cap throws his weight against a halter, the one warm spot of color low in the churn; others on foot are dwarfed by the beasts. None of them are posing; they are working, and mostly losing. The painting is about labor as much as horseflesh, the sheer physical job of moving a ton of frightened animal down a public street. (By a long-repeated tradition, that figure on horseback is sometimes said to be Bonheur’s own self-portrait, a popular suggestion, not a proven fact.)' },
    { label: 'The dust', where: 'Low, around the horses’ legs and hooves', detail: 'Down at the bottom, around the churning hooves, the ground dissolves into clouds of pale, kicked-up dust. It’s painted loosely, almost smudged, so the legs of the horses seem to vanish into it, which is exactly how a real stampeding crowd looks, the footing lost in its own grit. The dust is the painting’s proof of motion: you don’t just see the horses move, you see what their movement throws into the air.' },
    { label: 'The far dome of the Salpêtrière', where: 'Far left, low on the horizon, a faint grey dome', detail: 'Off in the distance at the upper left, almost lost behind the haze and the trees, sits a pale grey dome and turret. That is the chapel dome of the Salpêtrière, a sprawling old Paris hospital and asylum on the Left Bank, and it fixes the scene to a real place: the horse market really was held just outside it, on the Boulevard de l’Hôpital. This is not an invented arena. It’s a specific Tuesday on a specific Paris street.' },
    { label: 'The wall of plane trees', where: 'Across the whole background, behind the horses', detail: 'Behind the surging animals runs a long screen of trees, the plane trees that lined the boulevard, closing off the back of the picture in a band of dusty green and brown under a heavy, weather-blown sky. They do the job the cliff does in a Courbet: they stop the eye from escaping into deep distance and press the whole stampede forward, up against you, so the horses feel like they’re coming off the canvas and into your lap.' },
  ],
  lineage: {
    parents: [
      { label: 'George Stubbs', mode: 'art' },
      { label: 'Géricault’s horses', mode: 'art' },
      { label: 'The Parthenon frieze', mode: 'art' },
    ],
    children: [
      { label: 'Animal painting’s rise', mode: 'art' },
      { label: 'Women in the academy', mode: 'civ' },
      { label: 'The reproduction print boom', mode: 'civ' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Starry Night (Van Gogh, 1889). The flagship Post-Impressionism
// work read. Authored through the art content pipeline (fact pack → Opus →
// 5 gates → revise). Chapter prose in art-section-reader.tsx NARRATIVES['starry-night']
// (Sn… prefix). LEGENDS handled per fact pack: painted BY DAY in the studio
// (depicts the east-window view, village largely invented), not "from the window
// at night" and not "from memory"; "sold only one painting" is a myth (one
// DOCUMENTED sale, The Red Vineyard).
// ─────────────────────────────────────────────────────────────
export const STARRY_NIGHT: ArtWorkContent = {
  id: 'starry-night',
  name: 'The Starry Night',
  shortName: 'The Starry Night',
  year: 1889,
  artist: 'Vincent van Gogh',
  artistId: 'vangogh',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 5 in × 3 ft 1/4 in',
  location: 'Museum of Modern Art, New York',
  acquired: 'Acquired through the Lillie P. Bliss Bequest (by exchange), 1941',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 5, total: 9 },
  hook: 'A swirling night sky over a sleeping village, painted by daylight in an asylum studio, that its own maker called a failure.',
  heroImage: ART_IMG.starryNight,
  heroCredit: 'Van Gogh, The Starry Night, 1889 · Museum of Modern Art, New York',
  heroAspect: 1.25, // 73.7 × 92.1 cm → W/H ≈ 1.25
  heroFit: 'contain', // whole canvas, never cropped
  rights: 'pd-us',
  stats: [
    { v: 'June 1889', k: 'Painted' },
    { v: '2′5″ × 3′¼″', k: 'Dimensions' },
    { v: 'MoMA', k: 'Now at' },
  ],
  sections: [
    { id: 'asylum', eyebrow: 'Saint-Rémy · 1889', dateLabel: 'May 1889', title: 'The man at the barred window', blurb: 'After the breakdown in Arles, Van Gogh checks himself into the Saint-Paul asylum and is given a ground-floor room as a studio and an east-facing bedroom that looks out over the valley.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '~17–18 June 1889', title: 'Painted by day, from a dawn he remembered', blurb: 'Not painted at the window at night. Made in the studio in daylight, working up the pre-dawn view he had watched with the morning star big over the hills, the village largely invented.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 5 in × 3 ft ¼ in', title: 'The stars and a rolling sky', blurb: 'The cypress, the crescent moon, the one star he named, the invented steeple, the real Alpilles, and the great curling eddies that have no model in any real sky.', progress: 0.56 },
    { id: 'reception', eyebrow: 'His own verdict', dateLabel: 'Nov 1889', title: 'The picture he called a failure', blurb: 'Van Gogh thought it a near-miss, told Bernard he had reached for stars too big, and it sold no better than the rest. He did not sell only one painting in his life, but he never sold this one.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1890–today', title: 'How a failure became a touchstone', blurb: 'His brother dead within months, the estate carried by Theo’s widow Jo, the canvas passing through dealers to MoMA in 1941, where the 20th century made it one of the most recognizable paintings on Earth.', progress: 0.96 },
  ],
  provenance: [
    { year: '1889–1890', who: 'Vincent van Gogh (the artist)', place: 'Saint-Rémy / Auvers', note: 'Painted in June 1889 at the Saint-Paul-de-Mausole asylum. Never sold in his lifetime; passed to his brother Theo on Vincent’s death in July 1890.', price: null },
    { year: '1890–1900', who: 'Theo van Gogh, then Johanna (Jo) van Gogh-Bonger', place: 'Paris / Netherlands', note: 'Theo died in January 1891; his widow Jo inherited the estate and spent her life building Van Gogh’s posthumous reputation.', price: null },
    { year: '1900–1906', who: 'Julien Leclercq · Émile Schuffenecker · (repurchased by Jo van Gogh-Bonger)', place: 'Paris', note: 'Sold to the poet Leclercq in 1900, to the painter-collector Schuffenecker in 1901, then bought back by Jo in 1905 before passing to the Oldenzeel Gallery, Rotterdam, in 1906.', price: null },
    { year: '1906–1938', who: 'Georgette P. van Stolk', place: 'Rotterdam', note: 'Held in a Rotterdam collection for some three decades.', price: null },
    { year: '1938–1941', who: 'Paul Rosenberg (dealer)', place: 'Paris / New York', note: 'Acquired by the dealer Rosenberg, who fled France for the United States in 1940.', price: null },
    { year: '1941–today', who: 'Museum of Modern Art', place: 'New York', note: 'Acquired through the Lillie P. Bliss Bequest, by exchange (traded for rather than bought with cash). Accession 472.1941. There the 20th century made it canonical. On permanent view.', price: 'by exchange', museum: true },
  ],
  figures: [
    { name: 'Vincent van Gogh', role: 'The painter', palette: ['#2a3a6a', '#c8b84a', '#0e1428'] },
    { name: 'Theo van Gogh', role: 'Brother · first owner', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Jo van Gogh-Bonger', role: 'Built the reputation', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Émile Bernard', role: 'Painter · letter on the “failure”', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Anna Boch', role: 'Bought The Red Vineyard', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
  ],
  annotations: [
    { label: 'The one star he actually named', where: 'The single largest, brightest “star,” out toward the center of the sky, just to the right of the central cypress', detail: 'This is not a star at all but the planet Venus, the morning star, the one celestial body Van Gogh names in his letter to Theo, where he wrote that he had seen the countryside before sunrise with nothing but the morning star, which looked very big. It is the single element on the canvas you can tie to a documented observation, and astronomical records confirm Venus was prominent at dawn in Provence that spring.' },
    { label: 'The moon that is astronomically wrong', where: 'Upper right, the glowing yellow-orange crescent', detail: 'The moon glows as a thin crescent, but on the real date the moon over Saint-Rémy was a waning gibbous, nearly full. So the crescent is an invention, not a record. It is the cleanest proof on the canvas that this is a composed picture, not a transcription of one night’s sky.' },
    { label: 'The flame that is a tree', where: 'Foreground left, the dark spire that climbs the whole left edge', detail: 'A cypress, pushed far larger and closer than life until it reads like a dark green flame licking up into the stars. Cypresses were a Saint-Rémy obsession Van Gogh painted again and again that year. Nothing forces it to that size; he chose to exaggerate it, and the deliberate distortion is the heart of why the picture feels modern rather than observed.' },
    { label: 'The village that was never there', where: 'Lower center, the cluster of houses around a tall, thin church steeple', detail: 'The sleeping town sits under the sky with a tall narrow steeple rising from it, and that steeple is more Dutch and northern than anything in Provence. The village is largely invented, not the actual view from his barred window. It is the tell that the whole picture is synthesized in the studio, the real and the imagined stitched together.' },
    { label: 'The sky that no sky has ever done', where: 'Across the whole upper half, the great curling eddies and the scattered stars', detail: 'The stars (roughly a dozen, by the usual count) sit inside enormous rolling spirals of paint that no real night sky has ever produced. This is pure expressive invention, laid on in thick ridges of pigment (impasto, paint heaped so high the brush leaves standing furrows you can read as texture). The swirls are often read as a vision of his illness, but that is interpretation, not fact; Van Gogh himself denied a romantic or religious program for the picture.' },
    { label: 'The one real thing along the bottom of the sky', where: 'The low band of rolling blue hills along the horizon, behind the village', detail: 'These are the Alpilles, the low mountain range just south of Saint-Rémy, and they are the one topographically real backdrop element in the painting. Everything above them swirls into invention; the hills are the thin thread of the actual valley he could see.' },
  ],
  lineage: {
    parents: [ { label: 'Impressionism', mode: 'art' }, { label: 'Japanese prints', mode: 'art' }, { label: 'The asylum at Saint-Rémy', mode: 'civ' } ],
    children: [ { label: 'Expressionism', mode: 'art' }, { label: 'Fauvism', mode: 'art' }, { label: 'Modern painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Bedroom (Bedroom in Arles), Van Gogh, FIRST version, Oct 1888,
// Van Gogh Museum, Amsterdam (F482 / JH1608). Three autograph versions exist;
// this read covers ONLY the first. Authored through the art content pipeline.
// Chapter prose in art-section-reader.tsx NARRATIVES['bedroom-arles'] (Bd… prefix).
// LEGEND handled: painted "quickly, mid-Oct 1888," NOT "in one day."
// ─────────────────────────────────────────────────────────────
export const BEDROOM_ARLES: ArtWorkContent = {
  id: 'bedroom-arles',
  name: 'The Bedroom',
  shortName: 'Bedroom in Arles',
  year: 1888,
  artist: 'Vincent van Gogh',
  artistId: 'vangogh',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 4 in × 2 ft 11 1/2 in',
  location: 'Van Gogh Museum, Amsterdam',
  acquired: 'Vincent van Gogh Foundation, 1962 (on permanent loan)',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 4, total: 9 },
  hook: 'His own small room at the Yellow House, painted flat as a Japanese print, where the color was meant to do all the work and make the mind rest.',
  heroImage: ART_IMG.vanGoghBedroomArles,
  heroCredit: 'Van Gogh, The Bedroom (first version), 1888 · Van Gogh Museum, Amsterdam',
  heroAspect: 1.25, // 72 × 90 cm → W/H = 1.25
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: 'Oct 1888', k: 'Painted' },
    { v: '2′4″ × 2′11½″', k: 'Dimensions' },
    { v: 'Van Gogh Museum', k: 'Now at' },
  ],
  sections: [
    { id: 'yellow-house', eyebrow: 'Arles · 1888', dateLabel: 'Oct 1888', title: 'The Yellow House, waiting for Gauguin', blurb: 'Van Gogh has rented a little house on the Place Lamartine and dreams of a “Studio of the South,” a colony of painters. Worn out and bedridden for days, he paints his own bedroom as a picture of rest, just before Gauguin arrives.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: 'mid-Oct 1888', title: 'Where the color does the job', blurb: 'Painted quickly over a few days, not in one day. Flat, plain tints with the shadows removed, the way of the Japanese prints he loved, with a color scheme he wrote out for Theo line by line.', progress: 0.34 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '2 ft 4 in × 2 ft 11½ in', title: 'A tilted room for one sleeper', blurb: 'The bed, the two chairs, the two pillows, the friends’ portraits on the wall, the shuttered window, and a floor that tilts up at you, which is part real, because the room itself was a trapezoid.', progress: 0.56 },
    { id: 'flood', eyebrow: 'Why there are three', dateLabel: '1889', title: 'A flood, and two copies', blurb: 'While Van Gogh is hospitalized in 1889, river flooding water-damages this first canvas in storage, and it is relined to save it. That is why he later painted a full-size copy and a smaller one. This is the original.', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1890–today', title: 'The room that never left the family', blurb: 'No great sale, no key exhibition in his lifetime; fame built by the estate. The first version passed down through the family to the Van Gogh Foundation in 1962 and the Van Gogh Museum, and is now among the most reproduced images he ever made.', progress: 0.96 },
  ],
  provenance: [
    { year: '1888–1890', who: 'Vincent van Gogh (the artist)', place: 'Arles', note: 'Painted mid-October 1888 in the Yellow House. The first version never left the family estate. To his brother Theo on Vincent’s death in 1890.', price: null },
    { year: '1890s–1962', who: 'Jo van Gogh-Bonger, then V. W. van Gogh (nephew)', place: 'Netherlands', note: 'Theo’s widow Jo, then the artist’s nephew Vincent Willem van Gogh, kept the canvas in the family across two generations.', price: null },
    { year: '1962–today', who: 'Vincent van Gogh Foundation', place: 'Amsterdam', note: 'The nephew established the Vincent van Gogh Foundation in 1962, which has held the painting since and placed it on permanent loan to the Van Gogh Museum (opened 1973). Inv. s0047V1962; catalogue F482 / JH1608. On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Vincent van Gogh', role: 'The painter', palette: ['#c8a72a', '#3a4a8a', '#1a1408'] },
    { name: 'Theo van Gogh', role: 'Brother · received the letters', palette: ['#3a4a6a', '#2e3848', '#0e1220'] },
    { name: 'Paul Gauguin', role: 'The painter he was waiting for', palette: ['#6a5a3a', '#332820', '#0e0a06'] },
    { name: 'Eugène Boch', role: 'Painter friend, portrait on the wall', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Paul-Eugène Milliet', role: 'Soldier friend, portrait on the wall', palette: ['#8a1c1c', '#c79338', '#0d0606'] },
  ],
  annotations: [
    { label: 'A floor that tilts, for a real reason', where: 'The whole lower half, the red-tiled floor running up toward the bed', detail: 'The floor tips up at you and the walls seem to lean, and the lazy reading is that Van Gogh simply could not do perspective. He could. The real bedroom was not rectangular; it was a trapezoid, with an obtuse angle at the front-left and an acute angle at the right, so part of the “wrong” perspective is the genuinely odd shape of the room, and part is his deliberate flattening. Both at once.' },
    { label: 'A bed for one, framed as rest', where: 'Right side, the wooden bed with two pillows and a turned-down red coverlet', detail: 'Two pillows lie on a bed turned down for a single sleeper. It would be easy to read the empty single bed as loneliness, but that is later interpretation laid over the picture. In his own letter Van Gogh framed the whole room as an image of rest and sleep, made while he was worn out and recovering, not as a portrait of isolation.' },
    { label: 'The butter-yellow furniture he named', where: 'The pair of rush-seated chairs, one at the foot of the bed and one by the wall', detail: 'The two simple chairs with woven rush seats are the “fresh butter” yellow Van Gogh listed by name in his letter to Theo, where he wrote out the color of every object in the room. They let you point straight at his documented palette: the chairs and bed butter-yellow, the floor red tiles, the basin blue, the window green.' },
    { label: 'Two friends on the wall', where: 'Upper right, the pair of small framed portraits above the bed', detail: 'In this first version the pictures on the wall are small portraits of two friends, usually identified as the poet Eugène Boch and the soldier Paul-Eugène Milliet (the exact which-is-which differs between sources, so read them simply as portraits of friends). These wall pictures are the tell that tells the three versions of the Bedroom apart.' },
    { label: 'The room’s one opening', where: 'The back wall, the green shuttered casement window', detail: 'At the back, a shuttered casement window in green looks out onto the Place Lamartine and the public garden outside the Yellow House. It is the single opening to the world in an otherwise closed, snug room, the seam between Van Gogh’s private space of rest and the street.' },
    { label: 'Color instead of shadow', where: 'Everywhere, the broad flat areas of unmodelled color', detail: 'Look for the cast shadows under the bed, the chairs, the table, and you will not find them. Van Gogh wrote that he had removed the shadows and cast shadows and colored the room in flat, plain tints “like the Japanese prints.” The flatness is his own stated technique, not a failing, and it is why the room reads as a pattern of pure color rather than a modelled, three-dimensional box.' },
  ],
  lineage: {
    parents: [ { label: 'Japanese prints', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'The Yellow House, Arles', mode: 'civ' } ],
    children: [ { label: 'Expressionism', mode: 'art' }, { label: 'Fauvism', mode: 'art' }, { label: 'Flat-color modern painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, A Sunday on La Grande Jatte — 1884 (Seurat, 1884–86). Founding monument
// of Neo-Impressionism / Divisionism / Pointillism. Art Institute of Chicago.
// Authored through the art content pipeline. Chapter prose in
// art-section-reader.tsx NARRATIVES['grande-jatte'] (Gj… prefix).
// PRECISION handled: Pointillism vs Divisionism are NOT synonyms (Seurat preferred
// Divisionism for the method); "~48 figures" / monkey-fishing puns are approximate /
// interpretive; the grass has darkened from a degraded zinc-yellow pigment.
// ─────────────────────────────────────────────────────────────
export const GRANDE_JATTE: ArtWorkContent = {
  id: 'grande-jatte',
  name: 'A Sunday on La Grande Jatte — 1884',
  shortName: 'La Grande Jatte',
  year: 1886,
  artist: 'Georges Seurat',
  artistId: 'seurat',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 9 3/4 in × 10 ft 1 1/4 in',
  location: 'Art Institute of Chicago',
  acquired: 'Helen Birch Bartlett Memorial Collection, 1926',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 2, total: 9 },
  hook: 'Two years of work and countless tiny separate dots of pure color, building a frozen Sunday crowd, the founding monument of a whole new science of painting.',
  heroImage: ART_IMG.seuratGrandeJatte,
  heroCredit: 'Seurat, A Sunday on La Grande Jatte — 1884, 1884–86 · Art Institute of Chicago',
  heroAspect: 1.48, // 207.5 × 308.1 cm → W/H ≈ 1.485
  heroFit: 'contain', // the whole ~7×10 ft panorama, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1884–86', k: 'Painted' },
    { v: '6′9¾″ × 10′1¼″', k: 'Dimensions' },
    { v: 'Art Institute', k: 'Now at' },
  ],
  sections: [
    { id: 'island', eyebrow: 'Paris · 1884', dateLabel: '1884', title: 'A science to replace Impressionism', blurb: 'Seurat, in his mid-20s, is building a rigorous, systematic alternative to Impressionism out of contemporary color theory. His subject: a real leisure island in the Seine where Parisians of every class stroll on Sundays.', progress: 0.08 },
    { id: 'making', eyebrow: 'The making', dateLabel: '1884–1886', title: 'Two years, and the dots', blurb: 'Dozens of preparatory studies, then two years building the surface out of countless small dots meant to mix in the eye, not on the palette. Two names get used for the method, Divisionism and Pointillism, and they do not mean the same thing.', progress: 0.32 },
    { id: 'looking', eyebrow: 'The canvas', dateLabel: '6 ft 9¾ in × 10 ft 1¼ in', title: 'A frozen Sunday, seven by ten feet', blurb: 'About forty-eight stiff figures, a woman with a pet monkey, a girl in white at the optical center, the painted dotted border, and grass that has darkened with age from a failing pigment.', progress: 0.56 },
    { id: 'reception', eyebrow: 'May 1886', dateLabel: '15 May 1886', title: 'The eighth and last Impressionist show', blurb: 'It debuts at the final Impressionist exhibition to a divided room, some seeing the future, some put off by its airless, frozen calm. The critic Félix Fénéon champions it and coins the word “Neo-Impressionism.”', progress: 0.78 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1891–today', title: 'The icon, and the fade', blurb: 'Seurat dies suddenly at 31; the canvas passes through his brother to French collectors and reaches the Art Institute of Chicago in 1926, where it becomes a signature work, even as the sunlit lawn quietly browns.', progress: 0.96 },
  ],
  provenance: [
    { year: '1886–1891', who: 'Georges Seurat (the artist)', place: 'Paris', note: 'Worked 1884–86, with the painted dotted border reworked around 1888–89. Held by Seurat until his sudden death in 1891, then passed to his family.', price: null },
    { year: '1891–1900', who: 'Émile Seurat (the artist’s brother)', place: 'Paris', note: 'The artist’s brother held it, then in 1900 sold it for about 800 francs to Léon-Casimir Bru, who bought on the advice of his daughter, the painter Lucie Cousturier.', price: '~800 francs' },
    { year: '1900–1924', who: 'Léon-Casimir Bru, then Lucie Cousturier', place: 'Paris', note: 'Cousturier inherited it from her father, then sold it in 1924 to the Paris gallery of Charles Vildrac.', price: null },
    { year: '1924', who: 'Charles Vildrac (gallery) → Frederic Clay & Helen Birch Bartlett', place: 'Paris / Chicago', note: 'Vildrac resold it the same year to the Chicago collectors Frederic Clay Bartlett and his wife Helen Birch Bartlett.', price: null },
    { year: '1926–today', who: 'Art Institute of Chicago', place: 'Chicago', note: 'Given to the Art Institute in 1926 as the Helen Birch Bartlett Memorial Collection (acc. 1926.224). A condition reportedly restricts external loans. On permanent view.', price: 'gift in memoriam', museum: true },
  ],
  figures: [
    { name: 'Georges Seurat', role: 'The painter', palette: ['#3a6a4a', '#c8b84a', '#1c2a18'] },
    { name: 'Félix Fénéon', role: 'Coined “Neo-Impressionism”', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Paul Signac', role: 'Painter who worked alongside Seurat with the dot method', palette: ['#3a6a8a', '#c8c050', '#1c2a30'] },
    { name: 'Camille Pissarro', role: 'Older painter who joined the method', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Émile Seurat', role: 'Brother who held / sold it', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Helen Birch Bartlett', role: 'Whose memorial gift it became', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The border that is painted, not framed', where: 'The band of dots running all the way around the edge of the image, just inside the white wooden frame', detail: 'Around the whole picture runs a border made of painted dots, which Seurat added around 1888–89, a few years after the main canvas. It is not the frame; the plain white wooden frame sits outside it. The dotted border is part of the artwork itself, painted to control the transition from the image to the wall, and the Art Institute still shows it that way.' },
    { label: 'The woman with a monkey', where: 'Foreground right, the elegant couple, at the woman’s feet on a leash', detail: 'A fashionably dressed woman stands at the right holding a leash, and at the end of it is a small pet monkey, the detail most viewers miss entirely. In French a monkey is a singe, and in this era the animal carried a sly pun on female impropriety, so some read the monkey as the picture’s quiet social joke. Treat that reading as interpretation, not fact; the monkey on the leash is simply, verifiably there.' },
    { label: 'The girl in white at the center', where: 'Near the middle of the canvas, a small brightly lit child in a white dress', detail: 'Near the center stands a little girl in white, and she is rendered almost without dots, brightly and smoothly lit, so she becomes the one still, clear point in a canvas built entirely from broken color. She is the optical and compositional focus, the eye’s resting place in the dazzle.' },
    { label: 'The dots, up close and far back', where: 'Anywhere across the surface, but easiest to test in the broad sunlit lawn', detail: 'Stand close and the whole picture dissolves into countless separate dots and short strokes of pure, unmixed color. Step back and they fuse: the grass that looked like a confetti of green, yellow, orange, and blue up close reads as one luminous sunlit lawn from across the room. That fusing-in-the-eye is the entire method and the single best demonstration of why the painting was a break.' },
    { label: 'A woman seeming to fish', where: 'Left edge, at the waterline, a standing woman holding a rod', detail: 'At the left, by the water, a standing woman holds a fishing rod. Some scholars make a pun of it, since the French for “to fish” sounds close to the word for “to sin,” and read her as a hint at the area’s reputation. That is a reading, not a fact; at minimum she anchors the left edge of the composition.' },
    { label: 'The grass you see is partly faded', where: 'The broad areas of sunlit lawn, where the green is patched with dull brown', detail: 'Look for dull brownish patches in what should be brilliant sunlit grass. Those are not Seurat’s intention; he used a zinc yellow pigment that has chemically darkened to brown over the decades, so the lawn was meant to be far brighter and more golden than it now appears. What you are seeing is partly faded, a real conservation fact, not the original effect.' },
  ],
  lineage: {
    parents: [ { label: 'Impressionism', mode: 'art' }, { label: 'Color science (Chevreul · Rood)', mode: 'civ' }, { label: 'Bathers at Asnières', mode: 'art' } ],
    children: [ { label: 'Neo-Impressionism', mode: 'art' }, { label: 'Fauvism', mode: 'art' }, { label: 'Abstract color painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Bathers at Asnières (Seurat, 1884). The first POST-IMPRESSIONISM
// work read. Authored through the art content pipeline (fact pack →
// Opus draft → 5 gates → revise); narrative in art-section-reader.tsx
// under 'bathers-asnieres' (Ba… prefix).
// ─────────────────────────────────────────────────────────────
export const BATHERS_ASNIERES: ArtWorkContent = {
  id: 'bathers-asnieres',
  name: 'Bathers at Asnières',
  shortName: 'Bathers at Asnières',
  year: 1884,
  artist: 'Georges Seurat',
  artistId: 'seurat',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '6 ft 7 in × 9 ft 10 in',
  location: 'The National Gallery, London',
  acquired: 'Acquired for the British national collection through the Courtauld Fund, 1924',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 1, total: 9 },
  hook: 'A working-class riverbank afternoon, painted nearly ten feet wide at the scale the Salon kept for kings, and then rejected by it, which started a jury-free rebel show.',
  heroImage: ART_IMG.seuratBathersAsnieres,
  heroCredit: 'Seurat, Bathers at Asnières, 1884 · The National Gallery, London',
  heroAspect: 1.49, // ~201 × 300 cm → W/H ≈ 1.49
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1883–84', k: 'Painted' },
    { v: '6′7″ × 9′10″', k: 'Dimensions' },
    { v: 'National Gallery', k: 'Now at' },
  ],
  sections: [
    { id: 'riverbank', eyebrow: 'Asnières · 1883', dateLabel: '1883', title: 'A bid at the scale of kings', blurb: 'Seurat, barely 24 and just out of art school, decides his first monumental canvas will be a working-class suburb cooling off in the Seine, with the factory chimneys of Clichy smoking across the water.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1883–84', title: 'Built from cigar-box sketches', blurb: 'About fourteen little oil studies on the riverbank, then a huge studio canvas brushed in long woven strokes Seurat called balayé, and, years later, a few pointillist dots added back in.', progress: 0.34 },
    { id: 'salon', eyebrow: 'Paris · 1884', dateLabel: '1884', title: 'Rejected, so he built his own Salon', blurb: 'The official Salon jury throws it out. In answer Seurat helps found a jury-free, prize-free rebel exhibition, the show that becomes the Salon des Indépendants.', progress: 0.58 },
    { id: 'reception', eyebrow: 'The verdict', dateLabel: '1884–86', title: 'A false Puvis, or a monster', blurb: 'Hung at the Indépendants as no. 261, shown in New York in 1886, and met with the usual mix: one critic calls it a false Puvis de Chavannes, another simply calls it monstrous.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1924–today', title: 'The launch of Neo-Impressionism', blurb: 'The critic who coined Neo-Impressionism owned it; the Courtauld Fund brought it to Britain in 1924; it is now a National Gallery centerpiece and the prelude to La Grande Jatte.', progress: 0.96 },
  ],
  provenance: [
    { year: '1884–c.1900', who: 'Seurat’s family / estate', place: 'Paris', note: 'Rejected by the 1884 Salon and shown instead at the inaugural Indépendants, the canvas stayed with the artist and, after his early death in 1891, with his family and circle. The exact intermediate owners are not fully pinned.', price: null },
    { year: 'c.1900', who: 'Félix Fénéon (the critic who coined “Neo-Impressionism”)', place: 'Paris', note: 'The champion of Seurat’s circle acquired it; he is the key early collector on the chain.', price: null },
    { year: '1924', who: 'The British national collection, via the Courtauld Fund', place: 'London', note: 'Bought for the nation through the fund Samuel Courtauld endowed to bring French modern art into British public collections.', price: 'acquired for the nation', museum: true },
    { year: '1924–1961', who: 'Tate Gallery', place: 'London', note: 'Hung at the Tate after the 1924 acquisition.', price: null, museum: true },
    { year: '1961–today', who: 'The National Gallery, London', place: 'London', note: 'Transferred from the Tate to the National Gallery in 1961, where it is a centerpiece of the collection (NG3908). On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Georges Seurat', role: 'The painter', palette: ['#5a7a8a', '#8a8048', '#1c2630'] },
    { name: 'Félix Fénéon', role: 'Coined “Neo-Impressionism”; early owner', palette: ['#5a7042', '#3a3c28', '#14140e'] },
    { name: 'The Indépendants', role: 'The jury-free show he helped found', palette: ['#6a7250', '#3a3c28', '#14140e'] },
    { name: 'Paul Durand-Ruel', role: 'Dealer who showed it in New York', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Samuel Courtauld', role: 'His fund brought it to Britain', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  annotations: [
    { label: 'The two techniques on one canvas', where: 'The boy in the water, right of center, hands cupped at his mouth', detail: 'The orange-red hat on his head carries the clearest patch of pointillist dots, tiny separate touches of orange against blue, that Seurat added back in years later. It is the one spot where you can see his two methods, the early woven brushwork and the later dot, sitting side by side on a single picture.' },
    { label: 'This is not Arcadia', where: 'The far bank, upper-left to center along the horizon', detail: 'Thin factory chimneys at Clichy, smoking. They are the tell that these bathers are not nymphs in a myth but clerks and workers on a hot day off, in an industrial suburb of Paris.' },
    { label: 'Modern infrastructure behind soft bodies', where: 'The bridge spanning the river in the background', detail: 'The railway bridge at Asnières, a hard horizontal of iron and modern transport stretched behind the still, rounded swimmers. The river that carries them is also the river the trains cross.' },
    { label: 'The man who is not swimming', where: 'The seated figure in the foreground, in a bowler hat, fully clothed', detail: 'The most prominent person in the picture is dressed, not bathing: a clerk on his day off, sitting on the bank. He anchors the whole social reading, that this is a picture of who gets to rest, and how.' },
    { label: 'Everyone alone, no one talking', where: 'Across the spaced-out figures along the bank', detail: 'Notice that the bathers do not interact. Each is isolated, still, set apart with the calm spacing of figures on an ancient frieze, which is why people compare the painting’s stillness to Piero della Francesca and to Puvis de Chavannes.' },
    { label: 'Woven strokes, not dabs', where: 'Across the grass and the water', detail: 'Look at the brushwork itself: long, controlled, criss-crossing strokes Seurat called balayé, “swept.” This is the smooth, hatched method he used before he invented the dot, and it is proof the canvas began before pointillism existed.' },
  ],
  lineage: {
    parents: [ { label: 'Puvis de Chavannes', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'Industrial Paris', mode: 'civ' } ],
    children: [ { label: 'Neo-Impressionism', mode: 'art' }, { label: 'A Sunday on La Grande Jatte', mode: 'art' }, { label: 'The Salon des Indépendants', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, The Card Players (Cézanne, c.1894–95). The Musée d'Orsay
// two-player version (smallest, generally read as last of five).
// Authored through the art content pipeline; narrative in
// art-section-reader.tsx under 'card-players' (Cp… prefix).
// ─────────────────────────────────────────────────────────────
export const CARD_PLAYERS: ArtWorkContent = {
  id: 'card-players',
  name: 'The Card Players',
  shortName: 'The Card Players',
  year: 1895,
  artist: 'Paul Cézanne',
  artistId: 'cezanne',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '1 ft 6½ in × 1 ft 10½ in',
  location: 'Musée d’Orsay, Paris',
  acquired: 'Camondo bequest to the French State, 1911',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 6, total: 9 },
  hook: 'Two estate laborers at a small table, a bottle between them, looking at their cards in total silence, the quiet gravity of men at work given the seriousness a history painter would save for a saint.',
  heroImage: ART_IMG.cezanneCardPlayers,
  heroCredit: 'Cézanne, The Card Players, 1894–95 · Musée d’Orsay, Paris',
  heroAspect: 1.2, // ~47.5 × 57 cm → W/H ≈ 1.2
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1894–95', k: 'Painted' },
    { v: '1′6½″ × 1′10½″', k: 'Dimensions' },
    { v: 'Orsay', k: 'Now at' },
  ],
  sections: [
    { id: 'estate', eyebrow: 'Aix-en-Provence', dateLabel: '1890s', title: 'The men from the estate', blurb: 'Cézanne in his fifties at the family estate near Aix, posing the local farm laborers he knew, men he set down playing cards in a plain rustic room with no story and no stakes, only weight.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: 'c.1894–95', title: 'Form built from patches', blurb: 'Over a dozen single-figure studies of seated smokers first, then a canvas built not from line and shadow but from flat modulated planes of color, the smallest, most distilled of five versions.', progress: 0.34 },
    { id: 'reception', eyebrow: 'The verdict', dateLabel: 'Then & now', title: 'The genre painting with the joke removed', blurb: 'Tavern card scenes were comedy, cheating and grimaces. Cézanne drained every anecdote out and left only two men and their concentration, and that stillness became a cornerstone of his late genius.', progress: 0.58 },
    { id: 'versions', eyebrow: 'Five canvases', dateLabel: '1890–95', title: 'Five versions, and the famous price', blurb: 'The series runs from a crowded five-figure canvas down to this stripped two-player one. A different two-player version sold to Qatar around 2011 for a reported sum that made headlines worldwide.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1911–today', title: 'Ancestor of Cubism', blurb: 'Bequeathed to France in 1911, stolen and recovered in the 1960s, reunited with its siblings in a 2010–11 exhibition, and read ever since as a direct ancestor of Cubism.', progress: 0.96 },
  ],
  provenance: [
    { year: 'c.1895', who: 'Ambroise Vollard (Cézanne’s dealer)', place: 'Paris', note: 'Vollard handled most of Cézanne’s late sales after 1895; the exact first-sale date for this canvas is not pinned.', price: null },
    { year: 'before 1911', who: 'Count Isaac de Camondo (collector)', place: 'Paris', note: 'Entered the celebrated Camondo collection in Paris.', price: null },
    { year: '1911', who: 'The French State (Camondo bequest)', place: 'Paris', note: 'Bequeathed to the nation on Camondo’s death and accepted for the national museums in 1911; entered the Louvre, later the Jeu de Paume.', price: 'bequest to the nation', museum: true },
    { year: '1961', who: 'Stolen, then recovered', place: 'Paris', note: 'Stolen in 1961 while in the French national collection (then held at the Jeu de Paume), and recovered after a ransom was paid. (Reported via secondary sources; kept light.)', price: null },
    { year: '1986–today', who: 'Musée d’Orsay', place: 'Paris', note: 'Crossed into the Musée d’Orsay when it opened in 1986 to hold the national 19th-century collection. On permanent view.', price: 'never sold', museum: true },
  ],
  figures: [
    { name: 'Paul Cézanne', role: 'The painter', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'The estate laborers', role: 'The sitters', palette: ['#6a5a3a', '#3a3020', '#14100a'] },
    { name: 'Ambroise Vollard', role: 'His dealer', palette: ['#6a5a4a', '#332820', '#0e0a06'] },
    { name: 'Count Isaac de Camondo', role: 'Bequeathed it to France', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
    { name: 'Picasso & Braque', role: 'Heirs to the method', palette: ['#5a7042', '#3a3c28', '#14140e'] },
  ],
  annotations: [
    { label: 'The axis of the whole picture', where: 'The wine bottle standing dead-center on the table', detail: 'A single bottle stands upright at the exact middle, splitting the canvas cleanly into two halves and acting as the pivot the two men are balanced around. It is the most pointed-to thing in the painting, a still vertical holding the composition together.' },
    { label: 'A study in balanced opposites', where: 'The left player against the right player', detail: 'On the left, a man sits upright in a dark coat with a taller hat, pipe and posture formal. On the right, a man in lighter, looser clothes and a shorter hat hunches forward over his cards. The two are deliberate opposites, weighed against each other across the table.' },
    { label: 'No stakes, no faces meeting', where: 'The hands and the cards, held low', detail: 'The cards are held close to the body and low; no eyes meet, no money is shown, no winner is hinted. Cézanne has stripped out every bit of anecdote that a tavern card scene usually carries. The stillness itself is the subject.' },
    { label: 'Solidity made from flat patches', where: 'The tablecloth and the table edge', detail: 'Look at how the cloth and table are built: not modeled with smooth gradual shadow but assembled from flat planes of color set side by side. Cézanne makes a thing feel solid out of patches, the method that would feed straight into Cubism.' },
    { label: 'Shapes that rhyme', where: 'The drape or curtain behind the left man', detail: 'The folds of the hanging cloth behind the left player echo the bulk and curve of the seated bodies. Cézanne rhymes shapes across the canvas instead of describing a real, measured room; the picture is built on visual echoes.' },
    { label: 'Weight in concentration, not action', where: 'The downcast eyes of both men', detail: 'Nothing happens, and that is the power of it. Both men look down, completely absorbed, and all the psychological weight of the picture sits in that quiet concentration rather than in any event.' },
  ],
  lineage: {
    parents: [ { label: 'Le Nain brothers', mode: 'art' }, { label: 'Impressionism', mode: 'art' }, { label: 'Provençal peasant life', mode: 'civ' } ],
    children: [ { label: 'Cubism', mode: 'art' }, { label: 'Picasso', mode: 'art' }, { label: 'Braque', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Mont Sainte-Victoire seen from Les Lauves (Cézanne, 1902–04).
// The Philadelphia Museum of Art version. Authored through the art
// content pipeline; narrative in art-section-reader.tsx under
// 'mont-sainte-victoire-lauves' (Mv… prefix).
// ─────────────────────────────────────────────────────────────
export const MONT_SAINTE_VICTOIRE_LAUVES: ArtWorkContent = {
  id: 'mont-sainte-victoire-lauves',
  name: 'Mont Sainte-Victoire seen from Les Lauves',
  shortName: 'Mont Sainte-Victoire',
  year: 1904,
  artist: 'Paul Cézanne',
  artistId: 'cezanne',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 4¾ in × 3 ft ¼ in',
  location: 'Philadelphia Museum of Art',
  acquired: 'George W. Elkins Collection, 1936',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 9, total: 9 },
  hook: 'A mountain he painted about eleven times from one hillside, dissolved here into a mosaic of color patches with the bare canvas left showing, the picture the next generation called the start of everything.',
  heroImage: ART_IMG.cezanneMontSainteVictoireLauves,
  heroCredit: 'Cézanne, Mont Sainte-Victoire seen from Les Lauves, 1902–04 · Philadelphia Museum of Art',
  heroAspect: 1.26, // ~73 × 91.9 cm → W/H ≈ 1.26
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1902–04', k: 'Painted' },
    { v: '2′4¾″ × 3′¼″', k: 'Dimensions' },
    { v: 'Philadelphia', k: 'Now at' },
  ],
  sections: [
    { id: 'lauves', eyebrow: 'Les Lauves · 1902', dateLabel: '1902', title: 'A studio on the hill', blurb: 'In 1902 Cézanne built a studio on the rise of Les Lauves above Aix, and from the slope behind it he had a sweeping view east to Mont Sainte-Victoire, the limestone ridge that had been his lifelong motif.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1902–04', title: 'A mountain made of color', blurb: 'Overlapping semi-transparent patches of green, ochre, blue and violet, areas of bare canvas left showing, near and far knit into one plane, the work that read as proto-Cubist to the next generation.', progress: 0.34 },
    { id: 'reception', eyebrow: 'Cézanne’s idea', dateLabel: '1904', title: 'The cylinder, the sphere, the cone', blurb: 'In an April 1904 letter, Cézanne wrote the line that became modern art’s most quoted instruction. This is the period and the method it describes.', progress: 0.58 },
    { id: 'death', eyebrow: 'Aix · October 1906', dateLabel: '1906', title: 'Caught in a storm', blurb: 'On 15 October 1906 Cézanne was caught in a storm while out painting, collapsed, and died of pneumonia a week later. Not, despite the legend, at his easel before the mountain.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1907–today', title: 'The father of modern art', blurb: 'The 1907 retrospective the year after his death hit Picasso, Braque and Matisse; the late Mont Sainte-Victoires became the recognized bridge from Impressionism to Cubism.', progress: 0.96 },
  ],
  provenance: [
    { year: '1906', who: 'Left in Cézanne’s studio at his death', place: 'Aix-en-Provence', note: 'The late Les Lauves canvases were in the studio when Cézanne died in 1906 and were dispersed afterward, largely through Vollard and the heirs.', price: null },
    { year: '1936', who: 'Philadelphia Museum of Art (George W. Elkins Collection)', place: 'Philadelphia', note: 'Entered the Philadelphia Museum of Art through the George W. Elkins Collection in 1936, where it is now part of the permanent collection. On permanent view.', price: 'in the collection', museum: true },
  ],
  figures: [
    { name: 'Paul Cézanne', role: 'The painter', palette: ['#5a7042', '#8a7848', '#1c1a12'] },
    { name: 'Émile Bernard', role: 'Got the “cylinder, sphere, cone” letter', palette: ['#5a6a72', '#2e3a42', '#0e1014'] },
    { name: 'Mont Sainte-Victoire', role: 'The lifelong motif', palette: ['#6a7a8a', '#3a4250', '#14181e'] },
    { name: 'Picasso & Braque', role: 'Heirs at the 1907 retrospective', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { name: 'Henri Matisse', role: 'Also marked by the retrospective', palette: ['#b44d3b', '#5a2a20', '#150a08'] },
  ],
  annotations: [
    { label: 'The mountain dissolving into the sky', where: 'The peak, upper right, against the sky', detail: 'The summit is built from blue and violet patches whose edge does not draw a hard line against the sky but breaks up into it. The mountain and the air share the same touches of color, so the solid ridge and the empty sky are made of the same paint.' },
    { label: 'The gaps Cézanne left on purpose', where: 'Small bare spots showing between the strokes, across the canvas', detail: 'Look for patches of unpainted canvas left showing between the color touches. Cézanne stopped before filling them. The picture is openly, deliberately unfinished-looking, and those gaps are a concrete thing you can point to.' },
    { label: 'A valley made of colored blocks', where: 'The plain in the middle ground', detail: 'The fields, houses and viaduct of the valley are reduced to a mosaic of small green and ochre blocks. Representation is boiled down to color-architecture; you read “a plain with buildings” from an arrangement of patches, not from drawn detail.' },
    { label: 'The valley tipped up toward you', where: 'The relationship of near ground to far mountain', detail: 'Try to find a single vanishing point and you cannot. Near and far are pulled into one shallow plane, so the valley seems to tip up toward you instead of receding correctly into depth. This flatness is the proto-Cubist move.' },
    { label: 'The picture as stacked bands', where: 'Read top to bottom: plain, valley, mountain, sky', detail: 'The composition reads as horizontal zones stacked one above another, foreground plain, mid-valley, mountain, sky, like colored bands. That quiet banding is the scaffolding the whole picture hangs on.' },
    { label: 'Strokes that knit everything together', where: 'The repeated parallel diagonal touches across the surface', detail: 'Cézanne’s constructive stroke, parallel diagonal marks, runs across unrelated things, a roof, a tree, the slope, and ties them into one continuous fabric of paint. The same brush-rhythm binds the whole landscape into a single surface.' },
  ],
  lineage: {
    parents: [ { label: 'Impressionism', mode: 'art' }, { label: 'Poussin’s landscape', mode: 'art' }, { label: 'Provence', mode: 'civ' } ],
    children: [ { label: 'Cubism', mode: 'art' }, { label: 'Abstraction', mode: 'art' }, { label: 'Modern painting', mode: 'art' } ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Vision after the Sermon (Gauguin, 1888). The breakthrough
// Synthetist / Cloisonnist picture. Authored through the art content
// pipeline; narrative under 'vision-sermon' (Vs… prefix).
// ─────────────────────────────────────────────────────────────
export const VISION_SERMON: ArtWorkContent = {
  id: 'vision-sermon',
  name: 'Vision after the Sermon',
  shortName: 'Vision after the Sermon',
  year: 1888,
  artist: 'Paul Gauguin',
  artistId: 'gauguin',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '2 ft 4 in × 3 ft 0 in',
  location: 'Scottish National Gallery, Edinburgh',
  acquired: 'Purchased by the gallery, 1925',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 3, total: 9 },
  hook: 'Breton women come out of mass with their eyes shut, and the thing they pray about, Jacob wrestling the angel, appears on a field of flat, impossible red.',
  heroImage: ART_IMG.gauguinVision,
  heroCredit: 'Gauguin, Vision after the Sermon, 1888 · Scottish National Gallery, Edinburgh',
  heroAspect: 1.26, // 72.2 × 91 cm → W/H ≈ 1.26
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1888', k: 'Painted' },
    { v: '2′4″ × 3′0″', k: 'Dimensions' },
    { v: 'Edinburgh', k: 'Now at' },
  ],
  sections: [
    { id: 'pont-aven', eyebrow: 'Pont-Aven · 1888', dateLabel: '1888', title: 'A Breton village and a younger painter with theories', blurb: 'Summer in a Brittany artists’ colony, where Gauguin and the younger painter Émile Bernard argue Impressionism into the ground and a new method, Synthetism, comes out of it.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1888', title: 'Two worlds in one frame', blurb: 'Praying women in white coiffes in front, Jacob and the angel wrestling behind, a tree slicing the canvas in two, and a ground of pure flat red that is not a meadow but a vision.', progress: 0.34 },
    { id: 'reception', eyebrow: 'The first viewers', dateLabel: '1888', title: 'A letter to Van Gogh, a parish that said no', blurb: 'Gauguin sketches the picture for Van Gogh by post, and (by Émile Bernard’s later account) offers it to a Breton church, which refuses the gift.', progress: 0.58 },
    { id: 'cloisonnism', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'Painting the inside of a head', blurb: 'Flat color bounded by dark outline, stained-glass and cloisonné enamel made into oil paint, and a picture that puts imagination on the canvas as its own zone instead of describing the world.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1925–today', title: 'Edinburgh buys the heresy', blurb: 'Through private hands after Gauguin’s death, then bought by the Scottish National Gallery in 1925 while British taste still recoiled from Post-Impressionism. Now read as the first complete Synthetist picture.', progress: 0.96 },
  ],
  provenance: [
    { year: '1888', who: 'Paul Gauguin (the artist)', place: 'Pont-Aven, Brittany', note: 'Painted in the summer of 1888. Gauguin offered it as a gift to a local Breton parish church, which turned it down, so it stayed with him.', price: null },
    { year: '1888–1903', who: 'Paul Gauguin', place: 'France / the Pacific', note: 'Retained by the artist through his later years and his move to the Pacific; he died in the Marquesas in 1903.', price: null },
    { year: 'after 1903', who: 'Private hands (chain not fully documented)', place: 'Europe', note: 'Passed through private owners and dealers after Gauguin’s death; the full intermediate chain is not reliably recorded.', price: null },
    { year: '1925–today', who: 'Scottish National Gallery (National Galleries of Scotland)', place: 'Edinburgh', note: 'Purchased by the gallery in 1925, a bold acquisition given the strong British hostility to Post-Impressionism after Roger Fry’s London shows of 1910 and 1912. On permanent view (NG 1643).', price: 'purchased', museum: true },
  ],
  figures: [
    { name: 'Paul Gauguin', role: 'The painter', palette: ['#a8322a', '#5a1c14', '#1a0808'] },
    { name: 'Émile Bernard', role: 'The younger painter with the prior claim on the method', palette: ['#5a6a4a', '#2e3a26', '#0e120a'] },
    { name: 'The Breton women', role: 'The sitters, fresh from a sermon', palette: ['#cfc8bc', '#5a5650', '#1a1814'] },
    { name: 'Jacob and the angel', role: 'The vision, from Genesis 32', palette: ['#a8322a', '#c79338', '#1a0808'] },
  ],
  annotations: [
    { label: 'The red that is not a field', where: 'The entire ground behind and between the figures', detail: 'The whole stretch of ground is one flat, saturated red, not grass, not earth, not a meadow at any hour of any day. Gauguin makes the color itself do the work of telling you this is a vision and not the world. Nothing in nature is this red, which is exactly the point: you are looking at what is happening inside these women’s shut eyes, and inside a head there is no rule that the ground has to be green.' },
    { label: 'A wall of white headdresses', where: 'The foreground, the heads and shoulders of the women', detail: 'The tall, starched white caps the women wear are Breton coiffes, the regional headdress, and Gauguin lines them up across the front of the canvas as a rhythm of pale curved shapes against black dresses. They are painted as flat cut-out forms, not rounded with light and shade, so they read almost like a row of paper sculptures, the largest and nearest things in the picture.' },
    { label: 'The tree that splits the canvas', where: 'A diagonal trunk running corner to corner across the picture', detail: 'A single tree trunk cuts on a diagonal straight across the canvas and divides it into two countries: the real one (the praying women, near and low) and the imagined one (the wrestling match, far and high). It is the seam between the world and the vision, drawn as one bold line. (Some readers call it an apple tree and tie it to the Garden of Eden; that is one interpretation, not something Gauguin spelled out.)' },
    { label: 'The actual subject, shrunk and shoved back', where: 'Upper right area, Jacob and the angel locked together', detail: 'Jacob wrestling the angel is, on paper, the holy subject of the painting, the thing the sermon was about. Gauguin paints the two struggling figures small and pushes them up into the far corner, smaller than the women’s heads and backs in front. The sacred event is deliberately made less important-looking than the ordinary people watching it in their minds. This scale-inversion is exactly what got the picture called irreligious.' },
    { label: 'A cow, wandered in from real life', where: 'Small, near the dividing tree', detail: 'A little cow turns up near the splitting tree, a scrap of ordinary Breton field life that has strayed into the holy vision. It is the kind of small, unbothered animal Gauguin liked to leave in: proof that the everyday world keeps going on, cattle and all, even while a miracle is being imagined a few feet away.' },
    { label: 'Hard outlines around everything', where: 'Every coiffe, face, hand and limb', detail: 'Look at any edge: each shape is bounded by a firm dark contour line, with flat color inside and almost no blended shading. This is the cloisonné and stained-glass effect made literal, the dark lines doing the job that modeling and shadow do in ordinary painting. It is what flattens the whole picture into bright sealed compartments of color.' },
  ],
  lineage: {
    parents: [
      { label: 'Japanese woodblock prints', mode: 'art' },
      { label: 'Stained glass & cloisonné', mode: 'art' },
      { label: 'Émile Bernard', mode: 'art' },
    ],
    children: [
      { label: 'Synthetism', mode: 'art' },
      { label: 'The Nabis', mode: 'art' },
      { label: 'Symbolism', mode: 'art' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, Where Do We Come From? What Are We? Where Are We Going?
// (Gauguin, 1897–98). The twelve-foot Tahitian testament.
// Authored through the art content pipeline; narrative under
// 'where-do-we-come-from' (Wd… prefix).
// ─────────────────────────────────────────────────────────────
export const WHERE_DO_WE_COME_FROM: ArtWorkContent = {
  id: 'where-do-we-come-from',
  name: 'Where Do We Come From? What Are We? Where Are We Going?',
  shortName: 'Where Do We Come From?',
  year: 1898,
  artist: 'Paul Gauguin',
  artistId: 'gauguin',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 7 in × 12 ft 4 in',
  location: 'Museum of Fine Arts, Boston',
  acquired: 'Tompkins Collection, Arthur Gordon Tompkins Fund, 1936',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 8, total: 9 },
  hook: 'A twelve-foot mural Gauguin painted in Tahiti as his last word, three French questions lettered in the corner and no answers anywhere on the canvas.',
  heroImage: ART_IMG.gauguinWhereDoWeComeFrom,
  heroCredit: 'Gauguin, Where Do We Come From? What Are We? Where Are We Going?, 1897–98 · Museum of Fine Arts, Boston',
  heroAspect: 2.69, // 139.1 × 374.6 cm → W/H ≈ 2.69
  heroFit: 'contain', // the work hero shows the WHOLE wide frieze, never cropped
  rights: 'pd-us',
  stats: [
    { v: '1897–98', k: 'Painted' },
    { v: '4′7″ × 12′4″', k: 'Dimensions' },
    { v: 'MFA Boston', k: 'Now at' },
  ],
  sections: [
    { id: 'tahiti', eyebrow: 'Tahiti · 1897', dateLabel: '1897', title: 'A colony Gauguin called paradise', blurb: 'Gauguin’s second and final Tahitian years, sick and broke and grieving, and the romantic "primitive" Tahiti he sold to Europe set honestly against the colonized island it actually was.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1897–98', title: 'A life read right to left', blurb: 'A twelve-foot band of figures meant to be read backwards: a sleeping baby on the right, an adult reaching to pick fruit in the center, an old woman near death on the left, with a blue idol Gauguin called "the Beyond" standing behind it all.', progress: 0.34 },
    { id: 'reception', eyebrow: 'Paris · 1898', dateLabel: '1898', title: 'The suicide story, and a cool room at Vollard’s', blurb: 'Gauguin’s own claim, in a letter, that he tried to poison himself after finishing it, weighed for what it is, and the picture’s mixed reception when it was first shown in Paris.', progress: 0.58 },
    { id: 'symbolism', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'A painting built to ask, not to tell', blurb: 'Symbolism over storytelling, flat decorative color, a deliberately unreadable subject, and an artist who wanted a picture to work like scripture instead of like an illustration.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1898–today', title: 'From Vollard’s wall to a Boston masterpiece', blurb: 'A long chain of dealers and collectors carries it from Paris to Norway to New York, and in 1936 the Museum of Fine Arts, Boston buys it for $80,000. Now the centerpiece of Gauguin’s late myth.', progress: 0.96 },
  ],
  provenance: [
    { year: '1898', who: 'Galerie Vollard · first exhibition', place: 'Paris', note: 'Sent to Paris from Tahiti and shown at Ambroise Vollard’s gallery, 17 November to 10 December 1898, to mixed reviews.', price: null },
    { year: '1901', who: 'Gabriel Frizeau', place: 'Paris', note: 'Bought from the dealer Ambroise Vollard for 2,500 francs.', price: '2,500 fr' },
    { year: 'c.1913', who: 'Galerie Barbazanges', place: 'Paris', note: 'Passed to the Barbazanges gallery around 1913.', price: null },
    { year: 'by 1920', who: 'Jørgen Breder Stang', place: 'Norway', note: 'Owned by the Norwegian collector Jørgen Breder Stang.', price: null },
    { year: '1935', who: 'Alfred Gold (dealer)', place: 'Europe', note: 'Sold through the dealer Alfred Gold in 1935.', price: null },
    { year: '1936', who: 'Marie Harriman Gallery', place: 'New York', note: 'Handled by the Marie Harriman Gallery in New York before its museum sale.', price: null },
    { year: '1936–today', who: 'Museum of Fine Arts, Boston', place: 'Boston', note: 'Acquired by the MFA on 16 April 1936 for $80,000 (Tompkins Collection, Arthur Gordon Tompkins Fund). One of the museum’s signature holdings. On permanent view (36.270).', price: '$80,000', museum: true },
  ],
  figures: [
    { name: 'Paul Gauguin', role: 'The painter', palette: ['#3a5a4a', '#8a7848', '#1c2418'] },
    { name: 'The sleeping infant', role: 'The right edge, where the life begins', palette: ['#e4d6c0', '#a08858', '#3a2a14'] },
    { name: 'The figure picking fruit', role: 'The center, young adulthood', palette: ['#8a7848', '#5a4a2a', '#1c1408'] },
    { name: 'The old woman', role: 'The far left, near death', palette: ['#6a6258', '#3a342c', '#14110c'] },
    { name: 'The blue idol', role: 'Behind the figures, Gauguin’s "Beyond"', palette: ['#3a5a72', '#22384a', '#0c1620'] },
  ],
  annotations: [
    { label: 'The questions, lettered on the canvas', where: 'Upper-left corner, in a pale yellow field', detail: 'Gauguin painted the title straight onto the picture in the top-left corner, the three French questions ("D’où venons-nous / Que sommes-nous / Où allons-nous") in plain capitals, with no question marks. It is rare for a painting to print its own title inside itself; it tells you Gauguin wanted you reading the canvas as a stated riddle, not just looking at a scene.' },
    { label: 'Where the life starts (so read backwards)', where: 'The far right edge, a sleeping baby with three crouched women', detail: 'At the right edge a baby sleeps near three crouching women. This is the beginning of the human life the painting traces, which means the whole frieze is meant to be read right to left, against the direction you normally scan a picture. Start here, at birth, and travel left toward death.' },
    { label: 'The reach for the fruit', where: 'Dead center, a standing figure with an arm raised', detail: 'In the middle a standing figure stretches an arm up to pick fruit. It is the central act of the picture and an old gesture of knowledge and "sin," the Eve reach, dropped into a Tahitian setting. This is the daily life of young adulthood, the busy middle of a life, placed at the literal center of the canvas.' },
    { label: 'The blue idol Gauguin called "the Beyond"', where: 'Left of center, in the background, arms raised', detail: 'Behind the central figures stands a tall blue statue with its arms lifted. Gauguin said it represents "the Beyond," the world past this one. It is worth knowing it is largely an invention: not a real Tahitian deity Gauguin found and recorded, but an image he made up to look ancient and sacred for a European audience.' },
    { label: 'The old woman, folded in on herself', where: 'The far left, hunched, hands near her face', detail: 'At the very left an old woman draws into herself, hands near her face, beside a white bird. She is the end of the life-cycle, death, and Gauguin paints her as resigned rather than terrified. The white bird clutching a small lizard at her feet, he said, stands for the uselessness of empty words, the painting’s quiet shrug at its own grand questions.' },
    { label: 'Corners aged like an old fresco', where: 'The two upper corners, painted gold-yellow', detail: 'Gauguin painted the two top corners a worn gold-yellow, as if the canvas were a damaged old fresco (a painting done straight into wet plaster, the medium of Renaissance church walls) or a faded tapestry. It is a deliberate antiquing effect, meant to make a brand-new painting feel like something dug up from a far older, sacred tradition.' },
  ],
  lineage: {
    parents: [
      { label: 'Symbolism', mode: 'art' },
      { label: 'Synthetism', mode: 'art' },
      { label: 'French colonial Tahiti', mode: 'civ' },
    ],
    children: [
      { label: 'Primitivism', mode: 'art' },
      { label: 'The Fauves', mode: 'art' },
      { label: 'Modern painting', mode: 'art' },
    ],
  },
}

// ─────────────────────────────────────────────────────────────
// Work, At the Moulin Rouge (Toulouse-Lautrec, 1892–95). The
// Montmartre cabaret group portrait. Authored through the art
// content pipeline; narrative under 'moulin-rouge' (Mr… prefix).
// ─────────────────────────────────────────────────────────────
export const MOULIN_ROUGE: ArtWorkContent = {
  id: 'moulin-rouge',
  name: 'At the Moulin Rouge',
  shortName: 'At the Moulin Rouge',
  year: 1895,
  artist: 'Henri de Toulouse-Lautrec',
  artistId: 'lautrec',
  movement: 'Post-Impressionism',
  movementId: 'postimp',
  era: 'Modern',
  eraId: 'mod',
  medium: 'Oil on canvas',
  dimensions: '4 ft 0 in × 4 ft 7 in',
  location: 'Art Institute of Chicago',
  acquired: 'Helen Birch Bartlett Memorial Collection, 1928',
  accent: ART_ACCENTS.green,
  chain: { name: 'Works of Post-Impressionism', index: 7, total: 9 },
  hook: 'A cabaret table at midnight, painted by a man who had his own reserved seat there, with a dancer’s face lunging in at the edge lit a poisonous green.',
  heroImage: ART_IMG.lautrecMoulinRouge,
  heroCredit: 'Toulouse-Lautrec, At the Moulin Rouge, 1892–95 · Art Institute of Chicago',
  heroAspect: 1.15, // 123 × 141 cm → W/H ≈ 1.15
  heroFit: 'contain',
  rights: 'pd-us',
  stats: [
    { v: '1892–95', k: 'Painted' },
    { v: '4′0″ × 4′7″', k: 'Dimensions' },
    { v: 'Chicago', k: 'Now at' },
  ],
  sections: [
    { id: 'montmartre', eyebrow: 'Montmartre · 1890s', dateLabel: '1892–95', title: 'The cabaret, and the man with his own table', blurb: 'The Moulin Rouge, the Montmartre cabaret (a Paris nightclub with dancing, singing and drink) that defined Paris nightlife in the 1890s, and the aristocratic painter who had his own table there, met plainly, neither romanticized nor sensationalized.', progress: 0.08 },
    { id: 'making', eyebrow: 'The canvas', dateLabel: '1892–95', title: 'A group portrait of the regulars', blurb: 'Not a generic crowd but specific, nameable people around one table, lit by harsh electric light, pitched at you down a steep diagonal railing in the tipped, cropped framing borrowed from Japanese prints.', progress: 0.34 },
    { id: 'reception', eyebrow: 'The cut canvas', dateLabel: 'then & later', title: 'The piece that was sliced off', blurb: 'For reasons no one has established, an L-shaped strip was cut from the canvas, taking May Milton’s green-lit face with it, and was reattached by 1914. The off-balance right edge is the scar.', progress: 0.58 },
    { id: 'looking', eyebrow: 'Why it broke the rules', dateLabel: 'Then & now', title: 'Modern night, modern light', blurb: 'A snapshot composition instead of a posed scene, the acid colors of artificial electric light, ordinary nightlife treated as a fit subject, and a painter pointing his eye at the margins of his own city.', progress: 0.8 },
    { id: 'afterlife', eyebrow: 'After', dateLabel: '1901–today', title: 'A short life, an immortal picture', blurb: 'Lautrec died in 1901 at thirty-six. The painting passed through dealers to Chicago, given to the Art Institute in 1928, and became one of the most reproduced images of fin-de-siècle Paris.', progress: 0.96 },
  ],
  provenance: [
    { year: 'by 1902', who: 'Maurice Joyant', place: 'Paris', note: 'Held by Lautrec’s friend and champion Maurice Joyant after the artist’s death in 1901.', price: null },
    { year: 'through 1926', who: 'Manzi, then Jean Laroche', place: 'Paris', note: 'Passed through the collector Manzi and then to Jean Laroche by 1926.', price: null },
    { year: '1926–1928', who: 'Paul Rosenberg, then Reid & Lefevre', place: 'Paris / London', note: 'Handled by the dealer Paul Rosenberg and then by Reid & Lefevre in London in 1928.', price: null },
    { year: '1928', who: 'Frederick Clay Bartlett', place: 'Chicago', note: 'Bought by the Chicago collector Frederick Clay Bartlett.', price: null },
    { year: '1928–today', who: 'Art Institute of Chicago', place: 'Chicago', note: 'Given to the Art Institute in 1928 as part of the Helen Birch Bartlett Memorial Collection, in memory of Bartlett’s late wife. On permanent view (1928.610).', price: 'gift', museum: true },
  ],
  figures: [
    { name: 'Henri de Toulouse-Lautrec', role: 'The painter (himself, tiny, in the back)', palette: ['#8a7a4a', '#4a3a22', '#15110a'] },
    { name: 'Jane Avril', role: 'Dancer, seen from behind, the red-orange hair', palette: ['#c4602a', '#7a3818', '#1c0e06'] },
    { name: 'La Goulue', role: 'The Moulin Rouge’s star can-can dancer', palette: ['#b08a4a', '#5a4222', '#1a1208'] },
    { name: 'May Milton', role: 'English dancer, the green-lit face at the right edge', palette: ['#5a7a4a', '#2e3a26', '#0e160a'] },
    { name: 'Gabriel Tapié de Céleyran', role: 'Lautrec’s tall cousin, the physician in the back', palette: ['#5a5a52', '#32322c', '#121210'] },
  ],
  annotations: [
    { label: 'The green-lit face at the edge', where: 'Far right foreground, a woman’s face lunging into the frame', detail: 'A woman’s face crowds in at the right edge, her chin and cheek washed a lurid, unnatural acid green by the cabaret’s electric light from below. This is the English dancer May Milton, and the shocking color is not symbolism, it is honest reporting of what artificial light does to skin. The way she is cut off by the frame, mid-lunge, is the most modern thing in the picture.' },
    { label: 'The burst of orange hair', where: 'Center, above the dark table group, seen from behind', detail: 'Rising over the dark-clad people at the table is a head of flaming red-orange hair, seen from behind. It belongs to the dancer and entertainer Jane Avril, and it is the visual anchor of the whole canvas, the one hot note your eye keeps returning to in a scene of murky greens and browns.' },
    { label: 'The painter, tiny, in the back', where: 'Background, a short top-hatted figure beside a very tall one', detail: 'Crossing the back of the room is a short man in a top hat walking just ahead of a conspicuously tall companion. The short one is Lautrec himself, the tall one his cousin, the physician Gabriel Tapié de Céleyran. Lautrec puts himself in his own painting as a small background figure and makes the height gap part of the joke, a dry, unsentimental self-insertion.' },
    { label: 'La Goulue at the mirror', where: 'Back right, a woman fixing her hair, reflected in glass', detail: 'At the back on the right a woman arranges her hair, half-caught in a greenish mirror. She is La Goulue ("The Glutton"), the Moulin Rouge’s famous can-can star, shown not mid-performance but in an offhand, backstage moment, fixing herself up like anyone else.' },
    { label: 'The diagonal that pitches you in', where: 'Lower left, a long balustrade sweeping back into the room', detail: 'A long railing cuts in from the lower-left corner on a steep diagonal and drives your eye back to the table. This tipped-up, cropped, off-center framing comes straight from Japanese woodblock prints, and it throws you into the room as if you had just walked up to the rail yourself, rather than looking at a tidy, posed picture.' },
    { label: 'The off-balance right edge', where: 'The right side, where the canvas feels oddly cut', detail: 'The right edge feels slightly wrong, lopsided, as if part of the composition is missing. It is: an L-shaped strip was cut from the canvas at some point (taking May Milton’s green face with it) and reattached by 1914. Who cut it, and why, is not known. The faint seam and the off-kilter crop are the record of that lost-and-recovered piece.' },
    { label: 'The monogram, lower left', where: 'Lower left corner, a small interlocked mark', detail: 'Down in the lower-left corner is Lautrec’s monogram, his initials stamped together in a small interlocked mark, the period’s version of a signature.' },
  ],
  lineage: {
    parents: [
      { label: 'Japanese woodblock prints', mode: 'art' },
      { label: 'Degas', mode: 'art' },
      { label: 'Belle Époque Montmartre', mode: 'civ' },
    ],
    children: [
      { label: 'The modern poster', mode: 'art' },
      { label: 'Expressionism', mode: 'art' },
      { label: 'Nightlife as a subject', mode: 'art' },
    ],
  },
}

export const ART_ERA_CONTENT: Record<string, ArtEraContent> = { mod: MODERN_ERA }
// ─────────────────────────────────────────────────────────────
// Movement, Fauvism (1905–1908). The first 20th-century movement: color cut
// loose from describing anything. Authored through the art content pipeline
// (fact pack → Opus draft → 5 critic gates → reconcile → born-verified images);
// narrative in movement-narratives.tsx under 'fauv'.
// ─────────────────────────────────────────────────────────────
export const FAUVISM: ArtMovementContent = {
  id: 'fauv',
  name: 'Fauvism',
  range: '1905–1908',
  span: '3 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Movements of the Modern era', index: 4, total: 10 },
  hook: 'Matisse paints a green stripe down his wife’s living face, and color stops having to tell the truth.',
  hookLong:
    'For roughly four hundred years in European painting, color had a job: tell you the dress is blue, the apple red, the shadow cool. For about three years after 1905, a loose band in France fired color from that job. A face could carry a green stripe, a road could run orange, a harbor could be pink and turquoise, not because anything was that color but because the picture wanted it. A hostile critic called them les fauves, the wild beasts. They never chose the name and never quite shook it, and the freedom it mocked outlasted everyone who laughed.',
  heroImage: ART_IMG.matisseBonheur,
  heroFit: 'cover',
  heroFocus: '50% 50%',
  heroCredit: 'Matisse, Le Bonheur de vivre (detail), 1905–06 · Barnes Foundation, Philadelphia',
  stats: [
    { v: '3 yrs', k: 'Span' },
    { v: '32', k: 'Canonical works' },
    { v: 'France', k: 'Centered on' },
  ],
  factions: [
    { side: 'fauves', label: 'The wild beasts', color: ART_ACCENTS.rust, members: ['Matisse', 'Derain', 'Vlaminck', 'Marquet', 'Dufy', 'van Dongen'], detail: 'No manifesto, no meeting, no membership card. A loose band who agreed on one thing, color chosen for effect instead of accuracy, and who never picked the name they are now famous under.' },
    { side: 'critics', label: 'The critics and patrons', color: '#7c6f5a', members: ['Louis Vauxcelles', 'the Salon public', 'the Steins', 'Ambroise Vollard'], detail: 'The hostile press that coined the insult les fauves, the public that called the room a scandal, and the dealers and American collectors who quietly turned that scandal into a market.' },
  ],
  works: [
    { id: 'luxe', year: 1904, name: 'Luxe, calme et volupté', artist: 'Matisse', place: 'Saint-Tropez', size: 'm', blurb: 'The proto-Fauve picture, painted in pointillist dabs after a summer with Signac. Matisse keeps the pure color and is about to throw the dots away.', palette: ['#3a6a8a', '#c8a04a', '#1c2a30'], imageUrl: ART_IMG.matisseLuxe, credit: 'Matisse, Luxe, calme et volupté, 1904 · Musée d’Orsay, Paris' },
    { id: 'green-stripe', year: 1905, name: 'The Green Stripe', artist: 'Matisse', place: 'Paris', size: 'm', blurb: 'A vertical green stripe straight down a living face, cool side against warm. The single most legible picture of color cut loose from description.', palette: ['#8a7a3a', '#7a3a52', '#1c1810'], imageUrl: ART_IMG.matisseGreenStripe, credit: 'Matisse, The Green Stripe, 1905 · Statens Museum for Kunst, Copenhagen' },
    { id: 'hat', year: 1905, name: 'Woman with a Hat', artist: 'Matisse', place: 'Paris', size: 'l', blurb: 'The 1905 Salon scandal-piece: his wife Amélie, her face stroked in green, violet and orange. The Steins bought it off the wall for 500 francs.', palette: ['#4a7a4a', '#8a4a7a', '#15110c'], imageUrl: ART_IMG.matisseHat, credit: 'Matisse, Woman with a Hat, 1905 · SFMOMA, San Francisco' },
    { id: 'open-window', year: 1905, name: 'Open Window, Collioure', artist: 'Matisse', place: 'Collioure', size: 'm', blurb: 'Painted that decisive summer: a window onto pink and turquoise boats, the whole picture built of pure-color patches with no modeling.', palette: ['#d06a7a', '#3a8a8a', '#1c2a2a'], imageUrl: ART_IMG.matisseOpenWindow, credit: 'Matisse, Open Window, Collioure, 1905 · National Gallery of Art, Washington' },
    { id: 'chatou', year: 1906, name: 'The Seine at Chatou', artist: 'Vlaminck', place: 'Chatou', size: 'm', blurb: 'A Seine-side town in pure, rhythmic, tube-fresh color by the band’s most violent colorist, proudly self-taught and hostile to museums.', palette: ['#bf2f25', '#1d4ed8', '#1c1c14'], imageUrl: ART_IMG.vlaminckChatou, credit: 'Vlaminck, The Seine at Chatou, 1906 · The Metropolitan Museum of Art, New York' },
    { id: 'bonheur', year: 1906, name: 'Le Bonheur de vivre', artist: 'Matisse', place: 'Paris', size: 'xl', blurb: 'The movement at full volume: an arcadia of nudes in flat, saturated, clashing color, nearly six feet by eight. Often read as the spark for Picasso’s Demoiselles.', palette: ['#d08a3a', '#3a8a5a', '#1c2218'], imageUrl: ART_IMG.matisseBonheur, credit: 'Matisse, Le Bonheur de vivre, 1905–06 · Barnes Foundation, Philadelphia' },
    { id: 'charing-cross', year: 1906, name: 'Charing Cross Bridge, London', artist: 'Derain', place: 'London', size: 'l', blurb: 'The Thames in flaming orange, pink and green, a Fauve answer to Monet’s misty gray London. Same river, colors it does not own.', palette: ['#d06a2a', '#3a8a6a', '#d04a7a'], imageUrl: ART_IMG.derainCharingCross, credit: 'Derain, Charing Cross Bridge, London, 1906 · National Gallery of Art, Washington' },
    { id: 'rue-pavoisee', year: 1906, name: 'Street Decked with Flags, Le Havre', artist: 'Dufy', place: 'Le Havre', size: 'm', blurb: 'A holiday street of tricolor flags dissolved into bright Fauve patches, the buoyant, ornamental, purely happy wing of the movement.', palette: ['#1d4ed8', '#bf2f25', '#c8b84a'], imageUrl: ART_IMG.dufyRuePavoisee, credit: 'Dufy, La Rue pavoisée, 1906 · Centre Pompidou, Paris' },
    { id: 'blue-nude', year: 1907, name: 'Blue Nude (Souvenir de Biskra)', artist: 'Matisse', place: 'Paris', size: 'l', blurb: 'A reclining nude in harsh blue, distorted and angular, late-Fauve Matisse pushing past pretty color. It scandalized the 1907 Salon des Indépendants.', palette: ['#2a5a8a', '#8a6a3a', '#0e141c'], imageUrl: ART_IMG.matisseBlueNude, credit: 'Matisse, Blue Nude (Souvenir de Biskra), 1907 · Baltimore Museum of Art' },
  ],
  artists: [
    { id: 'matisse', name: 'Matisse', role: 'The leader', years: '1869–1954', palette: ['#4a7a4a', '#8a4a7a', '#15110c'], photo: ART_IMG.matissePhoto },
    { id: 'derain', name: 'Derain', role: 'The co-leader', years: '1880–1954', palette: ['#d06a2a', '#3a8a6a', '#15110a'], photo: ART_IMG.derainPhoto },
    { id: 'vlaminck', name: 'Vlaminck', role: 'The wild man', years: '1876–1958', palette: ['#bf2f25', '#1d4ed8', '#1c1c14'] },
    { id: 'marquet', name: 'Marquet', role: 'The one who stepped back', years: '1875–1947', palette: ['#5a6a7a', '#33414c', '#12161a'] },
    { id: 'dufy', name: 'Dufy', role: 'The decorative Fauve', years: '1877–1953', palette: ['#1d4ed8', '#bf2f25', '#c8b84a'], photo: ART_IMG.dufyPhoto },
    { id: 'vandongen', name: 'van Dongen', role: 'The glamour wing', years: '1877–1968', palette: ['#bf3a6a', '#3a7a5a', '#1c1014'], photo: ART_IMG.vanDongenPhoto },
  ],
  parallels: [
    { year: 1905, movement: 'Die Brücke', place: 'Dresden', blurb: 'The same year as the Paris scandal, four German architecture students form Die Brücke and push the same idea, raw anti-naturalistic color, independently.' },
    { year: 1906, movement: 'Cubism brewing', place: 'Paris', blurb: 'While the Fauves peak, Picasso builds toward Les Demoiselles d’Avignon and the 1907 Cézanne retrospective swings the avant-garde from color to structure.' },
    { year: 1905, movement: 'The dealers and collectors', place: 'Paris', blurb: 'Vollard commissions Derain’s London series; the American Steins buy Matisse out of the Salon. The network that turned a scandal into a market.' },
  ],
  lineage: {
    parents: [
      { label: 'Van Gogh', mode: 'art', img: ART_IMG.vanGoghNightCafe, palette: ['#7a1c1c', '#1c5a3a', '#0e0a06'], note: 'gave: emotional, arbitrary color' },
      { label: 'Gauguin', mode: 'art', img: ART_IMG.gauguinVision, palette: ['#8a3a3a', '#3a5a4a', '#15110a'], note: 'gave: flat saturated symbolic color' },
      { label: 'Neo-Impressionism', mode: 'art', img: ART_IMG.seuratGrandeJatte, palette: ['#3a6a4a', '#c8b84a', '#1c2a18'], note: 'gave: pure unmixed pigment' },
      { label: 'Cézanne', mode: 'art', img: ART_IMG.cezanneBathers, palette: ['#5a7042', '#8a7848', '#1c1a12'], note: 'gave: structure (then ended Fauvism)' },
    ],
    children: [
      { label: 'Cubism', mode: 'art', img: ART_IMG.demoiselles, palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'], note: 'took: a Fauve named Braque' },
      { label: 'German Expressionism', mode: 'art', img: ART_IMG.kirchnerStreet, palette: ['#bf2f4a', '#1c5a6a', '#1c1414'], note: 'took: Fauve color as raw emotion' },
      { label: 'Abstraction', mode: 'art', img: ART_IMG.kandinskyComp7, palette: ['#1d4ed8', '#d6cf3f', '#bf2f25'], note: 'took: color cut free from description' },
      { label: 'Matisse alone', mode: 'art', img: ART_IMG.matisseDance, palette: ['#bf3a52', '#1d4ed8', '#2a6a3a'], note: 'took: the whole project, for 45 more years' },
    ],
  },
  influenceSummary: 'Fauvism took Van Gogh’s and Gauguin’s arbitrary color and Seurat’s pure unmixed pigment, cut color loose from describing anything, and handed that permission on to Cubism, German Expressionism, and nearly every later painter who ever used a color the world wasn’t wearing.',
  manifesto: {
    absent: true,
    prose: [
      'Fauvism is the movement with nothing to quote. There was no founding manifesto (a manifesto being a public declaration of a movement’s program and principles), no founding meeting, no program, no membership list, not even a name the painters chose for themselves. A hostile critic named them, as an insult, and they kept the insult because it was the only label anyone could agree on. A movement defined entirely from the outside has no statement of its own, and that absence is the honest record.',
      'The closest thing to a creed is a single essay, and it is Matisse speaking only for himself. “Notes of a Painter” (Notes d’un peintre) appeared in the Paris journal La Grande Revue on 25 December 1908, written as a reply to critics of the new painting. It is a personal account of one man’s aims, not a platform spoken for a group, and its timing gives the game away: by December 1908 the 1907 Cézanne retrospective and Braque’s Cubist summer had already pulled the band apart. The essay reads less as Fauvism’s flag than as Matisse-the-individual, published just as the thing it might have spoken for was breaking up.',
      'Two lines carry the whole of his thinking. The first is almost a slogan: “What I am after, above all, is expression.” The second tells you what expression meant to him, that a picture is built, not transcribed: “Composition is the art of arranging in a decorative manner the diverse elements at the painter’s command to express his feelings.” A creed for one painter, arriving too late to be a flag for the rest.',
    ],
    sourceUrl: 'https://www.arthistoryproject.com/artists/henri-matisse/notes-of-a-painter/',
    sourceLabel: 'Read Matisse’s “Notes of a Painter” (1908)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.monetRegatta,
      title: 'Before · Monet, Regatta at Argenteuil (c.1872)',
      caption: 'Color already broken into bright touches, but still doing its old job: describing the real light on real water. The blue is the sky’s blue, the white is sail in sun.',
    },
    after: {
      img: ART_IMG.matisseGreenStripe,
      title: 'After · Matisse, The Green Stripe (1905)',
      caption: 'A vertical green stripe runs straight down the center of a living face, splitting a cool side from a warm one. No face is green. The picture wanted it there, so it is there.',
    },
    prose: [
      'For something like four hundred years, color in European painting had one assignment: describe. It told you the local color of things (the flesh is pink, the sea is blue-green) and it modeled light and shadow so a flat cloth read as a round, solid world. Even the Impressionists, who shattered color into thousands of bright separate touches, were still chasing the same prize, the real light falling on real things. Monet’s regatta is color at its most liberated and still completely loyal: every dab of blue and white is reporting on actual water and actual sky.',
      'The Green Stripe fires color from that job. Matisse paints his wife Amélie with a band of pure green running down the middle of her face, one cheek cool, one cheek warm, the background slammed in as slabs of orange and pink. Nobody’s face is green. The stripe is not a shadow, not a reflection, not anything you could photograph. It is there because the composition needed a cool axis to push the warm flesh against. Three moves are doing the work: color chosen for effect, not accuracy; pure unmixed color laid on straight (no blending toward “realistic” hues); and flatness, the shading that used to fake roundness simply dropped, so the canvas reads as a bright patterned surface instead of a window.',
      'That is why Fauvism counts as a new movement and not just a louder palette (a painter’s palette being the range of colors they work in). It did not improve how color described the world. It cut the cord between color and description entirely. After 1905, in the Western tradition this story maps, a painter no longer owed the world its real colors, and every later use of arbitrary, expressive, or purely decorative color is spending the permission the Fauves bought.',
    ],
  },
  canon: [
    { year: 1904, name: 'Luxe, calme et volupté', artist: 'Matisse', wiki: 'Luxe, Calme et Volupté', img: ART_IMG.matisseLuxe },
    { year: 1905, name: 'Woman with a Hat', artist: 'Matisse', wiki: 'Woman with a Hat', img: ART_IMG.matisseHat },
    { year: 1905, name: 'The Green Stripe', artist: 'Matisse', wiki: 'The Green Stripe', img: ART_IMG.matisseGreenStripe },
    { year: 1905, name: 'Open Window, Collioure', artist: 'Matisse', wiki: 'Open Window, Collioure', img: ART_IMG.matisseOpenWindow },
    { year: 1905, name: 'View of Collioure', artist: 'Matisse', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Matisse_-_View_of_Collioure_%281905%29.jpg/800px-Matisse_-_View_of_Collioure_%281905%29.jpg' },
    { year: 1905, name: 'Boats in the Harbor of Collioure', artist: 'Derain', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Boats_in_the_Harbor_of_Collioure_%28Bateaux_dans_le_port_de_Collioure%29_by_Andr%C3%A9_Derain.jpg/960px-Boats_in_the_Harbor_of_Collioure_%28Bateaux_dans_le_port_de_Collioure%29_by_Andr%C3%A9_Derain.jpg' },
    { year: 1905, name: 'Mountains at Collioure', artist: 'Derain', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Montagnes_%C3%A0_Collioure%2C_par_Andr%C3%A9_Derain.jpg/960px-Montagnes_%C3%A0_Collioure%2C_par_Andr%C3%A9_Derain.jpg' },
    { year: 1905, name: 'The Drying Sails', artist: 'Derain', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Andr%C3%A9_Derain%2C_1905%2C_Le_s%C3%A9chage_des_voiles_%28The_Drying_Sails%29%2C_oil_on_canvas%2C_82_x_101_cm%2C_Pushkin_Museum%2C_Moscow._Exhibited_at_the_1905_Salon_d%27Automne.jpg' },
    { year: 1905, name: 'La Sieste', artist: 'Manguin', img: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Henri_Manguin%2C_1905%2C_La_Sieste_%28Le_repos%2C_Jeanne%29%2C_oil_on_canvas%2C_88.9_x_116.84_cm%2C_Villa_Flora%2C_Winterthur.jpg' },
    { year: 1905, name: 'The Port of Cassis', artist: 'Camoin', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/%28Bemberg_Foundation%29_-_Charles_Camoin_-_The_Port_of_Cassis_%28Sunrise%29._Oil_on_canvas_%281905%29.jpg/960px-%28Bemberg_Foundation%29_-_Charles_Camoin_-_The_Port_of_Cassis_%28Sunrise%29._Oil_on_canvas_%281905%29.jpg' },
    { year: 1905, name: 'Matisse in Manguin’s Studio', artist: 'Marquet', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Matisse_in_Manguin%27s_Studio_Albert_Marquet_%281905%29.jpg' },
    { year: 1906, name: 'Le Bonheur de vivre', artist: 'Matisse', wiki: 'Le bonheur de vivre', img: ART_IMG.matisseBonheur },
    { year: 1906, name: 'The Gypsy', artist: 'Matisse', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/La_Gitane%2C_par_Henri_Matisse.jpg/800px-La_Gitane%2C_par_Henri_Matisse.jpg' },
    { year: 1906, name: 'The Young Sailor II', artist: 'Matisse', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Young_Sailor_II.jpg/800px-Young_Sailor_II.jpg' },
    { year: 1906, name: 'Self-Portrait in a Striped T-shirt', artist: 'Matisse', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Henri_Matisse_Self-Portrait_in_a_Striped_T-shirt_%281906%29.jpg/960px-Henri_Matisse_Self-Portrait_in_a_Striped_T-shirt_%281906%29.jpg' },
    { year: 1906, name: 'The Seine at Chatou', artist: 'Vlaminck', img: ART_IMG.vlaminckChatou },
    { year: 1906, name: 'Barges on the Seine', artist: 'Vlaminck', img: 'https://upload.wikimedia.org/wikipedia/en/6/60/Maurice_de_Vlaminck%2C_1905-06%2C_Barges_on_the_Seine_%28Bateaux_sur_la_Seine%29%2C_oil_on_canvas%2C_81_x_100_cm%2C_Pushkin_Museum%2C_Moscow.jpg' },
    { year: 1906, name: 'Charing Cross Bridge, London', artist: 'Derain', img: ART_IMG.derainCharingCross },
    { year: 1906, name: 'The Pool of London', artist: 'Derain', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Le_Bassin_de_Londres%2C_par_Andr%C3%A9_Derain.jpg/800px-Le_Bassin_de_Londres%2C_par_Andr%C3%A9_Derain.jpg' },
    { year: 1906, name: 'The Turning Road, L’Estaque', artist: 'Derain', img: ART_IMG.derainTurningRoad },
    { year: 1906, name: 'Street Decked with Flags, Le Havre', artist: 'Dufy', img: ART_IMG.dufyRuePavoisee },
    { year: 1906, name: 'The Beach at Sainte-Adresse', artist: 'Dufy', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Barberini_August_2023-Raoul_Dufy_-_Der_Strand_von_Sainte-Adresse%2C_1906_-_Sammlung_Hasso_Plattner.jpg/960px-Barberini_August_2023-Raoul_Dufy_-_Der_Strand_von_Sainte-Adresse%2C_1906_-_Sammlung_Hasso_Plattner.jpg' },
    { year: 1906, name: 'Honfleur', artist: 'Dufy', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Raoul_Dufy_Honfleur_1906.jpg' },
    { year: 1906, name: 'Posters at Trouville', artist: 'Marquet', img: ART_IMG.marquetFauve },
    { year: 1906, name: 'The Beach at Fécamp', artist: 'Marquet', img: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/The_Beach_at_F%C3%A9camp_Albert_Marquet_%281906%29.jpg' },
    { year: 1907, name: 'Portrait of Marguerite', artist: 'Matisse', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Henri_Matisse%2C_1906-07%2C_Portrait_de_Marguerite%2C_oil_on_canvas%2C_65_x_54_cm%2C_Mus%C3%A9e_Picasso%2C_Paris.jpg/800px-Henri_Matisse%2C_1906-07%2C_Portrait_de_Marguerite%2C_oil_on_canvas%2C_65_x_54_cm%2C_Mus%C3%A9e_Picasso%2C_Paris.jpg' },
    { year: 1907, name: 'Blue Nude (Souvenir de Biskra)', artist: 'Matisse', wiki: 'Blue Nude (Souvenir de Biskra)', img: ART_IMG.matisseBlueNude },
    { year: 1907, name: 'White Sailboat at Chatou', artist: 'Vlaminck', img: 'https://upload.wikimedia.org/wikipedia/en/8/80/Maurice_de_Vlaminck%2C_1907%2C_Le_bassin_%C3%A0_Chatou_%28White_Sailboat_at_Chatou%29%2C_oil_on_canvas%2C_60.2_x_73.7_cm%2C_private_collection.jpg' },
    { year: 1907, name: 'Paysage de La Ciotat', artist: 'Friesz', img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Paysage_de_La_Ciotat.jpg' },
    { year: 1907, name: 'Bay of Anthéor', artist: 'Valtat', img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Louis_Valtat_-_Bay_of_Anth%C3%A9or.jpg' },
    { year: 1908, name: 'The Dessert: Harmony in Red', artist: 'Matisse', wiki: 'The Dessert: Harmony in Red', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Matisse-The-Dessert-Harmony-in-Red-Henri-1908-fast.jpg/960px-Matisse-The-Dessert-Harmony-in-Red-Henri-1908-fast.jpg' },
    { year: 1908, name: 'Modjesko, Soprano Singer', artist: 'van Dongen' },
  ],
  sections: [
    { id: 'oldjob', eyebrow: 'Setting', dateLabel: 'Before 1905', title: 'Color’s old job', blurb: 'For four hundred years color described; even the Impressionists chased the real light. Here is the rule that is about to break.', progress: 1 / 6 },
    { id: 'twostudios', eyebrow: 'The roots', dateLabel: '1898–1904', title: 'Two studios, one fuse', blurb: 'A teacher who let his students run loose, two strangers thrown together by a train wreck, a dead Dutchman’s blazing canvases, and Matisse’s summer of dots.', progress: 2 / 6 },
    { id: 'collioure', eyebrow: 'The birthplace', dateLabel: 'Summer 1905', title: 'Collioure', blurb: 'Matisse and Derain in the southern light, squeezing color straight from the tube. The movement is made before anyone names it.', progress: 3 / 6 },
    { id: 'cage', eyebrow: 'The scandal', dateLabel: 'Autumn 1905', title: 'The cage of wild beasts', blurb: 'Room VII at the Salon d’Automne, a polite marble bust adrift in a sea of raw color, and the insult that became a name.', progress: 4 / 6 },
    { id: 'band', eyebrow: 'The wider band', dateLabel: '1905–1907', title: 'The wild band', blurb: 'Vlaminck’s violence, Marquet’s restraint, Dufy’s flags, van Dongen’s cabaret, Derain’s burning London, and the biggest canvas of them all.', progress: 5 / 6 },
    { id: 'airgoesout', eyebrow: 'The end', dateLabel: '1907–1908', title: 'The air goes out', blurb: 'A dead man’s retrospective and a roomful of impossible women swing everyone toward structure. The band scatters; Matisse keeps the color.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Futurism (1909–1918). The first movement launched as a manifesto:
// paint motion and the machine, burn the past. Authored through the art content
// pipeline (fact pack → Opus draft → 5 critic gates → reconcile → born-verified
// images); narrative in movement-narratives.tsx under 'fut'. The honesty axis
// (Marinetti's war-worship + fascism, the manifesto's misogyny) is carried plain.
// ─────────────────────────────────────────────────────────────
export const FUTURISM: ArtMovementContent = {
  id: 'fut',
  name: 'Futurism',
  range: '1909–1918',
  span: '~9 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.rust,
  chain: { name: 'Movements of the Modern era', index: 6, total: 10 },
  hook: 'A poet who could not paint buys the front page of a Paris newspaper and announces a movement that has, as yet, not a single painting.',
  hookLong:
    'In 1909 Filippo Tommaso Marinetti launched Futurism the way other people launch a product: with a press release. The art came later, when he went and recruited the painters, who then taught Western painting something it had never managed, how to show motion happening over time, the dog’s legs blurred into a fan, the building site churning, the body dissolved into lines of force. Their subject was the machine age at full throttle, the car and the tram and the electric light and the crowd. It is also the movement whose founder glorified war as the world’s only hygiene and went on to help write the founding manifesto of Italian Fascism, so the story has to carry both halves at once.',
  heroImage: ART_IMG.boccioniCity,
  heroFit: 'cover',
  heroFocus: '50% 45%',
  heroCredit: 'Boccioni, The City Rises (detail), 1910 · Museum of Modern Art, New York',
  stats: [
    { v: '~9 yrs', k: 'First phase' },
    { v: '27', k: 'Canonical works' },
    { v: 'Milan', k: 'Centered on' },
  ],
  factions: [
    { side: 'futurists', label: 'The Futurists', color: ART_ACCENTS.rust, members: ['Marinetti', 'Boccioni', 'Balla', 'Carrà', 'Severini', 'Russolo'], detail: 'Not a quiet studio circle but a one-poet publicity machine and the young painters he recruited, united by a single demand: paint speed, the machine and modern life, and do it louder than anyone.' },
    { side: 'past', label: 'The dead weight of the past', color: '#7c6f5a', members: ['The museums', 'The academies', 'The Greek statue', 'The nude'], detail: 'Everything the manifesto wanted demolished: the museums Marinetti called graveyards, the academic ladder, the old subjects (the nude, the myth, the portrait), and the idea that a Greek statue could be lovelier than a racing car.' },
  ],
  works: [
    { id: 'city-rises', year: 1910, name: 'The City Rises', artist: 'Boccioni', place: 'Milan', size: 'xl', blurb: 'The modern city under construction, a huge red dray-horse and the workers around it dissolved into one churning surge of labor and energy. Not a scene, a force.', palette: ['#bf3a25', '#3a4a6a', '#1c1208'], imageUrl: ART_IMG.boccioniCity, credit: 'Boccioni, The City Rises, 1910 · Museum of Modern Art, New York' },
    { id: 'farewells', year: 1911, name: 'States of Mind: The Farewells', artist: 'Boccioni', place: 'Milan', size: 'l', blurb: 'A parting at a train station painted as feeling: a steam-choked platform, embracing couples half-dissolved in the churn, a stenciled locomotive number floating in the fog.', palette: ['#3a7a8a', '#7a6a3a', '#14201c'], imageUrl: ART_IMG.boccioniStatesFarewells, credit: 'Boccioni, States of Mind: The Farewells, 1911 · Museum of Modern Art, New York' },
    { id: 'dog', year: 1912, name: 'Dynamism of a Dog on a Leash', artist: 'Balla', place: 'Tuscany', size: 'm', blurb: 'A dachshund trotting on a leash, its four legs and the swinging chain multiplied into a blur of repeated shapes. The single clearest picture of what painted motion means.', palette: ['#5a4a2a', '#2a2218', '#0e0a06'], imageUrl: ART_IMG.ballaDog, credit: 'Balla, Dynamism of a Dog on a Leash, 1912 · Buffalo AKG Art Museum' },
    { id: 'bal-tabarin', year: 1912, name: 'Dynamic Hieroglyphic of the Bal Tabarin', artist: 'Severini', place: 'Paris', size: 'l', blurb: 'A Montmartre night club shattered into spinning dancers and cancan legs, with real sequins glued to the surface for glitter. Cubist faceting put to Futurist work.', palette: ['#bf3a6a', '#3a6a8a', '#1c1418'], imageUrl: ART_IMG.severiniBalTabarin, credit: 'Severini, Dynamic Hieroglyphic of the Bal Tabarin, 1912 · Museum of Modern Art, New York' },
    { id: 'galli', year: 1911, name: 'Funeral of the Anarchist Galli', artist: 'Carrà', place: 'Milan', size: 'l', blurb: 'A real police-broken funeral turned into a storm of red banners, black-clad bodies and raised poles, the riot rendered as crossing lines of force.', palette: ['#bf2f25', '#1c1c1c', '#6a1414'], imageUrl: ART_IMG.carraGalli, credit: 'Carrà, Funeral of the Anarchist Galli, 1910–11 · Museum of Modern Art, New York' },
    { id: 'cyclist', year: 1913, name: 'Dynamism of a Cyclist', artist: 'Boccioni', place: 'Milan', size: 'm', blurb: 'A man on a bicycle abstracted almost out of existence: a tight knot of slashing blue and ochre wedges, body and machine and rushing air fused into one diagonal of effort.', palette: ['#2a4a8a', '#a07a3a', '#0e1422'], imageUrl: ART_IMG.boccioniCyclist, credit: 'Boccioni, Dynamism of a Cyclist, 1913 · Museo del Novecento, Milan (Mattioli Collection)' },
    { id: 'automobile', year: 1913, name: 'Dynamism of an Automobile', artist: 'Russolo', place: 'Milan', size: 'm', blurb: 'A car driven into a wedge of overlapping blue arcs, pure speed turned into geometry, by the painter who would soon put down his brushes and invent noise music.', palette: ['#2a5a8a', '#bf3a25', '#0e1420'], imageUrl: ART_IMG.russoloAutomobile, credit: 'Russolo, Dynamism of a Car, 1912–13 · Centre Pompidou, Paris' },
    { id: 'unique-forms', year: 1913, name: 'Unique Forms of Continuity in Space', artist: 'Boccioni', place: 'Milan', size: 'm', blurb: 'A striding human figure remade as wind made solid, the muscles pulled out into wings of motion. (Shown here as Boccioni’s 1913 study; the 1913 original is plaster, the famous bronzes are posthumous casts.)', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.boccioniUniqueFormsStudy, credit: 'Boccioni, study for Unique Forms of Continuity in Space, 1913 · public domain' },
    { id: 'abstract-speed', year: 1914, name: 'Abstract Speed + Sound', artist: 'Balla', place: 'Rome', size: 'm', blurb: 'No car and no rider left at all, just the swoosh of speed and the wedge of noise it leaves behind. Futurism arriving at near-total abstraction.', palette: ['#3a8a6a', '#bf3a25', '#14201a'], imageUrl: ART_IMG.ballaAbstractSpeed, credit: 'Balla, Abstract Speed + Sound, 1913–14 · Peggy Guggenheim Collection, Venice' },
  ],
  artists: [
    { id: 'marinetti', name: 'Marinetti', role: 'The impresario', years: '1876–1944', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], photo: ART_IMG.marinettiPhoto },
    { id: 'boccioni', name: 'Boccioni', role: 'Painter-sculptor, theorist', years: '1882–1916', palette: ['#bf3a25', '#3a4a6a', '#1c1208'], photo: ART_IMG.boccioniPhoto },
    { id: 'balla', name: 'Balla', role: 'The elder; toward abstraction', years: '1871–1958', palette: ['#5a4a2a', '#2a2218', '#0e0a06'] },
    { id: 'carra', name: 'Carrà', role: 'Painter of the crowd', years: '1881–1966', palette: ['#bf2f25', '#1c1c1c', '#6a1414'], photo: ART_IMG.carraPhoto },
    { id: 'severini', name: 'Severini', role: 'The Paris man', years: '1883–1966', palette: ['#bf3a6a', '#3a6a8a', '#1c1418'], photo: ART_IMG.severiniPhoto },
    { id: 'russolo', name: 'Russolo', role: 'Painter turned composer', years: '1885–1947', palette: ['#2a5a8a', '#bf3a25', '#0e1420'] },
  ],
  parallels: [
    { year: 1911, movement: 'Cubism', place: 'Paris', blurb: 'While Marinetti shouts, Picasso and Braque are quietly inventing Cubism a few streets away. The 1911 Paris trip is where the two movements collide.' },
    { year: 1914, movement: 'The Great War', place: 'Europe', blurb: 'Futurism’s worship of speed and violence lands in the exact years Europe arms for the First World War. The Futurists campaigned for Italy to join, then died in it.' },
    { year: 1911, movement: 'Der Blaue Reiter', place: 'Munich', blurb: 'Kandinsky, Marc and Klee push toward spiritual abstraction. Where the Germans sought the inner and spiritual, the Italians worshipped the outer and mechanical.' },
  ],
  lineage: {
    parents: [
      { label: 'Italian Divisionism', mode: 'art', img: ART_IMG.futuQuartoStato, palette: ['#7a6a4a', '#3a3020', '#14100a'], note: 'gave: separated strokes of pure color' },
      { label: 'Cubism', mode: 'art', img: ART_IMG.portuguese, palette: ['#9a8458', '#4a3f28', '#15110a'], note: 'gave: the fractured, faceted plane' },
      { label: 'The machine age', mode: 'civ', palette: ['#5a5a64', '#2a2a30', '#0e0e12'], note: 'gave: the subject, car, tram, electric light' },
      { label: 'Marinetti’s politics', mode: 'civ', img: ART_IMG.marinettiPhoto, palette: ['#bf2f25', '#1c1c1c', '#6a1414'], note: 'gave: nationalism and the cult of speed' },
    ],
    children: [
      { label: 'Vorticism', mode: 'art', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], note: 'took: machine art and the manifesto (BLAST)' },
      { label: 'Constructivism', mode: 'art', img: ART_IMG.lissitzkyWedge, palette: ['#a83232', '#1c1c1c', '#d6cf3f'], note: 'took: the machine and the speed-line' },
      { label: 'Dada', mode: 'art', img: ART_IMG.duchampFountain, palette: ['#1c1c1c', '#a0a0a0', '#d6cf3f'], note: 'took: the manifesto as a weapon' },
      { label: 'Noise music', mode: 'art', img: ART_IMG.russoloIntonarumori, palette: ['#3a3a44', '#1c1c24', '#0a0a10'], note: 'took: Russolo, sound from the machine age' },
    ],
  },
  influenceSummary: 'Futurism grabbed Cubism’s fractured planes and Divisionism’s broken color, taught painting to show speed and the machine, and made the manifesto-launch the weapon of the avant-garde, so that nearly every later movement that announced itself with a printed manifesto is downstream of Marinetti’s Le Figaro stunt.',
  manifesto: {
    title: 'Founding and Manifesto of Futurism',
    author: 'Filippo Tommaso Marinetti',
    dateLabel: '20 February 1909',
    venue: 'front page of Le Figaro, Paris',
    quotes: [
      'A roaring motorcar, which seems to race on like machine-gun fire, is more beautiful than the Winged Victory of Samothrace.',
      'We wish to glorify war, the sole cleanser of the world, militarism, patriotism, the destructive act of the libertarian, beautiful ideas worth dying for, and scorn for woman.',
      'We wish to destroy museums, libraries, academies of any sort, and fight against moralism, feminism, and every kind of materialistic, self-serving cowardice.',
    ],
    prose: [
      'Most movements get named after the fact, by a critic, usually as an insult. Futurism arrived as a press release. In 1909 a poet who had never picked up a brush bought the front page of a Paris newspaper and announced a movement, then went and found the painters.',
      'The manifesto is gorgeous, brutal, and not safely quotable. It wants to burn the museums; it calls a racing car lovelier than a Greek goddess; and in the same breath it glorifies war as the world’s only hygiene and preaches scorn for woman. Those last lines are not a youthful slip you can skip past. Marinetti meant them.',
      'Ten years later he helped write the founding manifesto of Italian Fascism and served Mussolini for the rest of his life. The manifesto that launched a thrilling revolution in art is the same document that turned art into a recruiting poster for war. Both halves are true at once, and the page below is where you can read it whole.',
    ],
    sourceUrl: 'https://www.moma.org/interactives/exhibitions/2009/futurism/',
    sourceLabel: 'Read the Manifesto of Futurism (MoMA, Words in Freedom)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.futuQuartoStato,
      title: 'Before · Pellizza da Volpedo, The Fourth Estate (1901)',
      caption: 'How painting handled a moving crowd: freeze it. The workers stride toward you, but the canvas holds them in one posed, monumental instant, the way a photograph stops a clock. (It is also the Italian Divisionist tradition the Futurists came out of.)',
    },
    after: {
      img: ART_IMG.ballaDog,
      title: 'After · Balla, Dynamism of a Dog on a Leash (1912)',
      caption: 'What Futurism did instead: a dachshund’s legs and the leash multiplied into a fan of repeated shapes, painting movement happening across time instead of a single frozen instant.',
    },
    prose: [
      'For as long as there had been painting, a picture froze a single instant. A horse, a dancer, a train were each caught in one fixed pose, in one fixed light, the way a photograph stops a clock. Even the most modern pictures, the bright Impressionist boulevards, the wild Fauve colors, the early Cubist still lifes, showed a world that was standing still, however oddly. And the proper subjects of serious art were still the old ones: the nude, the portrait, the landscape, the myth.',
      'Look at Balla’s dachshund instead. The little dog trots along a sunlit path at the end of a lady’s leash, and Balla paints not one dog but the smear of a dog in motion: the four legs multiplied into a blur, the swinging leash repeated into a fan of arcs, the lady’s own feet stuttered into a row of steps. Nothing is frozen. The picture is trying to show the same legs in many positions at once, time itself laid out across the canvas.',
      'Two moves stack to make it. First, the Futurists borrowed Cubism’s trick of breaking an object into faceted planes, but aimed those planes at speed and motion instead of a static studio object; they thought Cubism, for all its cleverness, stood perfectly still. Second, they threw out the old subjects entirely and painted the machine age, the car, the tram, the arc-lamp, the construction site, the rioting crowd, as the only fit subjects for modern art. Motion and the machine become the content.',
    ],
  },
  canon: [
    { year: 1910, name: 'The City Rises', artist: 'Boccioni', wiki: 'The City Rises', img: ART_IMG.boccioniCity },
    { year: 1910, name: 'Riot in the Galleria', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Rissa_in_galleria_boccioni_1910.jpg' },
    { year: 1910, name: 'Perfume', artist: 'Russolo', img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Luigi_Russolo_-_Profumo_%281910%29.jpg' },
    { year: 1911, name: 'Street Light', artist: 'Balla', img: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Street_Light_Giacomo_Balla_1909.jpg' },
    { year: 1911, name: 'States of Mind: The Farewells', artist: 'Boccioni', wiki: 'States of Mind (Boccioni)', img: ART_IMG.boccioniStatesFarewells },
    { year: 1911, name: 'States of Mind: Those Who Go', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/UmbertoBoccioniStatesofMindIIThoseWhoGo1911.jpg' },
    { year: 1911, name: 'States of Mind: Those Who Stay', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/%27States_of_Mind_III%3B_Those_Who_Stay%27%2C_oil_on_canvas_painting_by_Umberto_Boccioni%2C_1911.jpg' },
    { year: 1911, name: 'The Street Enters the House', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Umberto_Boccioni%2C_1911%2C_The_Street_Enters_the_House%2C_oil_on_canvas%2C_100_x_100.6_cm%2C_Sprengel_Museum.jpg/960px-Umberto_Boccioni%2C_1911%2C_The_Street_Enters_the_House%2C_oil_on_canvas%2C_100_x_100.6_cm%2C_Sprengel_Museum.jpg' },
    { year: 1911, name: 'Modern Idol', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Modern_Idol_by_Umberto_Boccioni%2C_1911_Estorick_Collection.jpeg' },
    { year: 1911, name: 'The Revolt', artist: 'Russolo', img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Luigi_Russolo_La_Rivolta_1911.jpg' },
    { year: 1911, name: 'Music', artist: 'Russolo', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/La_musica%2C_Luigi_Russolo.jpg' },
    { year: 1911, name: 'Le Boulevard', artist: 'Severini', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Gino_Severini%2C_1911%2C_Le_Boulevard%2C_oil_on_canvas%2C_63.5_x_91.5_cm%2C_Estorick_Collection%2C_London.jpg/960px-Gino_Severini%2C_1911%2C_Le_Boulevard%2C_oil_on_canvas%2C_63.5_x_91.5_cm%2C_Estorick_Collection%2C_London.jpg' },
    { year: 1911, name: 'Funeral of the Anarchist Galli', artist: 'Carrà', wiki: 'Funeral of the Anarchist Galli', img: ART_IMG.carraGalli },
    { year: 1912, name: 'Dynamism of a Dog on a Leash', artist: 'Balla', wiki: 'Dynamism of a Dog on a Leash', img: ART_IMG.ballaDog },
    { year: 1912, name: 'Girl Running on a Balcony', artist: 'Balla', img: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Girl_Running_on_a_Balcony_1912_Balla.jpg' },
    { year: 1912, name: 'Dynamic Hieroglyphic of the Bal Tabarin', artist: 'Severini', wiki: 'Dynamic Hieroglyphic of the Bal Tabarin', img: ART_IMG.severiniBalTabarin },
    { year: 1912, name: 'Dynamism of a Dancer', artist: 'Severini', img: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Gino_Severini%2C_1912%2C_Dynamism_of_a_Dancer%2C_oil_on_canvas%2C_60_x_45_cm%2C_Jucker_Collection%2C_Pinacoteca_di_Brera%2C_Milan.jpg/960px-Gino_Severini%2C_1912%2C_Dynamism_of_a_Dancer%2C_oil_on_canvas%2C_60_x_45_cm%2C_Jucker_Collection%2C_Pinacoteca_di_Brera%2C_Milan.jpg' },
    { year: 1912, name: 'Elasticity', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Umberto_Boccioni%2C_1912%2C_Elasticity_%28Elasticit%C3%A0%29%2C_oil_on_canvas%2C_100_x_100_cm%2C_Museo_del_Novecento.jpg' },
    { year: 1912, name: 'Materia', artist: 'Boccioni', img: ART_IMG.boccioniMateria },
    { year: 1913, name: 'Dynamism of a Cyclist', artist: 'Boccioni', wiki: 'Dynamism of a Cyclist', img: ART_IMG.boccioniCyclist },
    { year: 1913, name: 'Dynamism of an Automobile', artist: 'Russolo', img: ART_IMG.russoloAutomobile },
    { year: 1913, name: 'Unique Forms of Continuity in Space', artist: 'Boccioni', wiki: 'Unique Forms of Continuity in Space', img: ART_IMG.boccioniUniqueFormsStudy },
    { year: 1914, name: 'Abstract Speed + Sound', artist: 'Balla', img: ART_IMG.ballaAbstractSpeed },
    { year: 1914, name: 'La Città Nuova (the power station)', artist: 'Sant’Elia', img: ART_IMG.santeliaCitta },
    { year: 1914, name: 'La Città Nuova (the stepped house)', artist: 'Sant’Elia', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Casa_a_gradinata_%28La_Citt%C3%A0_Nuova%29_1914_ART_Antonio_Sant%27Elia_2023_RET_WjArendshorst.png/960px-Casa_a_gradinata_%28La_Citt%C3%A0_Nuova%29_1914_ART_Antonio_Sant%27Elia_2023_RET_WjArendshorst.png' },
    { year: 1914, name: 'Interventionist Demonstration', artist: 'Carrà' },
    { year: 1915, name: 'Charge of the Lancers', artist: 'Boccioni', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Umberto_Boccioni_-_Charge_of_the_Lancers.jpg' },
  ],
  sections: [
    { id: 'press', eyebrow: 'The launch', dateLabel: '1909', title: 'The press release that started a movement', blurb: 'A poet buys the front page of a Paris newspaper and announces a painting movement that has, as yet, not a single painting.', progress: 1 / 6 },
    { id: 'painters', eyebrow: 'Recruitment', dateLabel: '1910', title: 'Finding the painters', blurb: 'Marinetti gathers five young men, hands them a cause, and they write the manifestos that turn a slogan into a way to paint.', progress: 2 / 6 },
    { id: 'paris', eyebrow: 'The Cubist debt', dateLabel: '1911–1912', title: 'Paris, 1911: borrowing the broken plane', blurb: 'They go to Paris, meet Picasso and Braque, grab Cubism’s fractured planes, and bend them to do the one thing Cubism would not: move.', progress: 3 / 6 },
    { id: 'speed', eyebrow: 'The masterpieces', dateLabel: '1910–1914', title: 'Painting speed', blurb: 'The churning building site, the railway-station goodbye, the dog’s blurred legs, the night club spun into sequins, the striding figure made of wind.', progress: 4 / 6 },
    { id: 'program', eyebrow: 'The total program', dateLabel: '1912–1914', title: 'A total program, and a woman answers back', blurb: 'Riotous staged evenings, noise machines, a machine city, words torn loose on the page, and the woman who answered Marinetti’s scorn in his own form.', progress: 5 / 6 },
    { id: 'war', eyebrow: 'The reckoning', dateLabel: '1914–1944', title: 'The war it wanted', blurb: 'The Futurists got the war they begged for, and it killed them, and then their founder helped build fascism. Both halves are true.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Dada (1916–1924). Art turning on the idea of art, born in neutral
// Zurich out of disgust at WWI. Authored through the art content pipeline (fact
// pack → Opus draft → 5 critic gates → reconcile → born-verified images);
// narrative in movement-narratives.tsx under 'dada'. Honesty axes carried plain:
// the women of Dada (Höch's sidelining), the Fountain authorship debate (left
// unresolved). Many canonical works survive only as post-1930 replicas / are
// destroyed, so they are listed name-only (no inlineable PD image).
// ─────────────────────────────────────────────────────────────
export const DADA: ArtMovementContent = {
  id: 'dada',
  name: 'Dada',
  range: '1916–1924',
  span: '~8 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.amber,
  chain: { name: 'Movements of the Modern era', index: 7, total: 10 },
  hook: 'A handful of refugees in neutral Zurich answered a war chewing up Europe with a urinal, a moustache on the Mona Lisa, and a name that means nothing.',
  hookLong:
    'Dada is the moment art turned on itself. Born in Zurich in 1916, in the middle of a war feeding a generation into the mud, a few exiled poets and painters decided the civilization that had produced both the Mona Lisa and the machine gun no longer deserved to be taken seriously, so they made an art of nonsense, accident and provocation. Under the clowning sat a deadly serious invention: the idea that the artist’s choice, not the artist’s hand, is what makes a thing art. It jumped from Zurich to New York, Berlin, Hannover, Cologne and Paris, burned out around 1923, and was swallowed by the movement it had hatched, Surrealism.',
  heroImage: ART_IMG.hochKnife,
  heroFit: 'cover',
  heroFocus: '50% 38%',
  heroCredit: 'Höch, Cut with the Kitchen Knife (detail), 1919–20 · Nationalgalerie, Berlin',
  stats: [
    { v: '~8 yrs', k: 'Span' },
    { v: '20', k: 'Canonical works' },
    { v: 'Zurich', k: 'Born in' },
  ],
  factions: [
    { side: 'dadaists', label: 'The Dadaists', color: ART_ACCENTS.amber, members: ['Tzara', 'Ball', 'Arp', 'Duchamp', 'Picabia', 'Höch'], detail: 'Not a school with a style but a scattered international gang of refugee poets and painters across six cities, united by one demand: make an art that attacks the idea of art, with nonsense, accident, the readymade and the cut-up photograph.' },
    { side: 'bourgeois', label: 'The bourgeois world', color: '#7c6f5a', members: ['The museum', 'The Salon jury', 'Good taste', 'The war-making nation'], detail: 'Everything Dada set out to insult: the gallery and museum cult, polite respectable taste, the idea that art needs skill or beauty or sense, and the patriotic, war-making civilization the Dadaists blamed for the trenches.' },
  ],
  works: [
    { id: 'fountain', year: 1917, name: 'Fountain', artist: 'Duchamp', place: 'New York', size: 'l', blurb: 'A factory-made urinal laid on its back, signed “R. Mutt,” submitted as sculpture to a show that promised to reject nothing, then hid it. The whole artistic act is the choice.', palette: ['#b8b4ac', '#6a665e', '#2a2824'], imageUrl: ART_IMG.duchampFountain, credit: 'Alfred Stieglitz, photograph of Duchamp’s Fountain, 1917 · The Blind Man no. 2' },
    { id: 'lhooq', year: 1919, name: 'L.H.O.O.Q.', artist: 'Duchamp', place: 'Paris', size: 'm', blurb: 'A cheap Mona Lisa postcard with a pencilled moustache and a five-letter dirty pun, aimed not at Leonardo but at the worship of the masterpiece.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.duchampLhooq, credit: 'Duchamp, L.H.O.O.Q., 1919 · rectified readymade' },
    { id: 'kitchen-knife', year: 1920, name: 'Cut with the Kitchen Knife', artist: 'Höch', place: 'Berlin', size: 'xl', blurb: 'A nearly four-foot photomontage that shreds and reassembles the whole Weimar republic, generals and dancers and machine parts cut from the illustrated press, with a corner map of where women could vote.', palette: ['#8a7a52', '#4a3c22', '#15110a'], imageUrl: ART_IMG.hochKnife, credit: 'Höch, Cut with the Kitchen Knife…, 1919–20 · Nationalgalerie, Berlin' },
    { id: 'mechanical-head', year: 1920, name: 'Mechanical Head', artist: 'Hausmann', place: 'Berlin', size: 'm', blurb: 'A wig-maker’s dummy head studded with a ruler, a tape measure and a watch movement, a head whose only thoughts are the gadgets clamped to its outside.', palette: ['#6a5a3a', '#33291a', '#100c08'], imageUrl: ART_IMG.hausmannHead, credit: 'Hausmann, The Spirit of Our Time (Mechanical Head), c.1920 · Centre Pompidou' },
    { id: 'hat-makes-man', year: 1920, name: 'The Hat Makes the Man', artist: 'Ernst', place: 'Cologne', size: 'm', blurb: 'Rows of catalogue-cut hats stacked into wobbly, faintly human columns, Cologne Dada collage already tilting toward the dream logic of Surrealism.', palette: ['#5a4a8a', '#2a2440', '#100c1c'], imageUrl: ART_IMG.ernstHatMan, credit: 'Ernst, The Hat Makes the Man, 1920 · MoMA, New York' },
    { id: 'stieglitz', year: 1915, name: 'Ici, c’est ici Stieglitz', artist: 'Picabia', place: 'New York', size: 'm', blurb: 'A portrait of the photographer Alfred Stieglitz drawn as a broken bellows camera, the deadpan “man as machine” style.', palette: ['#3a3a44', '#1c1c24', '#0a0a10'], imageUrl: ART_IMG.picabiaStieglitz, credit: 'Picabia, Ici, c’est ici Stieglitz, cover of 291, 1915' },
    { id: 'celebes', year: 1921, name: 'The Elephant Celebes', artist: 'Ernst', place: 'Cologne', size: 'l', blurb: 'A monstrous, boiler-bodied “elephant” looming on a bare plain, half Dada absurdity and half dream. Often called the first masterpiece of Surrealist painting.', palette: ['#3a5a6a', '#2a3640', '#100c08'], imageUrl: ART_IMG.ernstCelebes, credit: 'Ernst, Celebes, 1921 · Tate, London' },
    { id: 'sainte-vierge', year: 1920, name: 'La Sainte Vierge', artist: 'Picabia', place: 'Paris', size: 'm', blurb: 'An ink splatter captioned “The Blessed Virgin,” the most economical blasphemy in modern art and a Paris-Dada provocation in a single flick of the wrist.', palette: ['#5a5a5a', '#2a2a2a', '#0c0c0c'], imageUrl: ART_IMG.picabiaVierge, credit: 'Picabia, La Sainte Vierge, 1920 · Centre Pompidou, Paris' },
    { id: 'daum', year: 1920, name: 'Daum Marries…', artist: 'Grosz', place: 'Berlin', size: 'm', blurb: 'A savage Berlin watercolor-collage of a bride and a pedantic clockwork man, the city’s sexual and mechanical rot pinned to the page.', palette: ['#8a4a3a', '#3a2018', '#100805'], imageUrl: ART_IMG.groszDaum, credit: 'Grosz, Daum Marries Her Pedantic Automaton George…, 1920 · Berlinische Galerie' },
  ],
  artists: [
    { id: 'tzara', name: 'Tzara', role: 'The ringmaster', years: '1896–1963', palette: ['#8a7a52', '#4a3c22', '#15110a'], photo: ART_IMG.tzaraPhoto },
    { id: 'ball', name: 'Hugo Ball', role: 'The founder', years: '1886–1927', palette: ['#3a4a6a', '#2a3048', '#0e1422'], photo: ART_IMG.ballCostume },
    { id: 'arp', name: 'Arp', role: 'Chance', years: '1886–1966', palette: ['#5a6a4a', '#33402a', '#101408'], photo: ART_IMG.arpPhotoDada },
    { id: 'duchamp', name: 'Duchamp', role: 'The readymade', years: '1887–1968', palette: ['#7a6a4a', '#3a3020', '#100c08'], photo: ART_IMG.duchampPhoto },
    { id: 'picabia', name: 'Picabia', role: 'The machine-painter', years: '1879–1953', palette: ['#3a3a44', '#1c1c24', '#0a0a10'] },
    { id: 'hoch', name: 'Höch', role: 'Photomontage', years: '1889–1978', palette: ['#8a7a52', '#4a3c22', '#15110a'] },
  ],
  parallels: [
    { year: 1916, movement: 'The First World War', place: 'Europe', blurb: 'Not background but cause: while the Western Front fed millions into the trenches, the Dadaists in neutral Zurich answered the civilization that built the machine gun with nonsense and ridicule.' },
    { year: 1917, movement: 'Revolution & Constructivism', place: 'Russia', blurb: 'The Bolshevik Revolution and Constructivism tried to build a brand-new machine-age art for a new society. Where Berlin Dada used photomontage to attack, the Constructivists used it to build.' },
    { year: 1924, movement: 'Surrealism', place: 'Paris', blurb: 'Less “meanwhile” than “next”: Paris Dada’s split handed straight off to Surrealism, which kept Dada’s chance and collage but aimed them at the unconscious and the dream.' },
  ],
  lineage: {
    parents: [
      { label: 'Futurism', mode: 'art', img: ART_IMG.boccioniCity, palette: ['#bf3a25', '#3a4a6a', '#1c1208'], note: 'gave: the manifesto and the provocation evening' },
      { label: 'Cubism', mode: 'art', img: ART_IMG.portuguese, palette: ['#9a8458', '#4a3f28', '#15110a'], note: 'gave: collage, the cut-and-pasted fragment' },
      { label: 'The First World War', mode: 'civ', palette: ['#5a5048', '#2a2520', '#0e0c0a'], note: 'gave: the engine, disgust at reason and beauty' },
      { label: 'Duchamp’s readymades', mode: 'art', img: ART_IMG.duchampFountain, palette: ['#b8b4ac', '#6a665e', '#2a2824'], note: 'gave: choosing, not making, as the art' },
    ],
    children: [
      { label: 'Surrealism', mode: 'art', img: ART_IMG.ernstCelebes, palette: ['#3a5a6a', '#2a3640', '#100c08'], note: 'took: chance and collage, aimed at the dream' },
      { label: 'Pop Art', mode: 'art', palette: ['#bf2f6a', '#d6cf3f', '#1c1c1c'], note: 'took: the found commercial image, deadpan' },
      { label: 'Conceptual art', mode: 'art', palette: ['#5a5a5a', '#2a2a2a', '#0c0c0c'], note: 'took: art is a decision, not a craft' },
      { label: 'Punk', mode: 'civ', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], note: 'took: the cut-up, the DIY collage, the provocation' },
    ],
  },
  influenceSummary: 'Dada took Futurism’s manifesto-as-weapon and Cubism’s collage, set them against a civilization that had just produced the trenches, and out of the wreckage handed forward three ideas that changed art permanently, the readymade, photomontage and chance, and bred Surrealism outright.',
  manifesto: {
    title: 'Dada Manifesto 1918',
    author: 'Tristan Tzara (and Hugo Ball, 1916)',
    dateLabel: '1918',
    venue: 'read at a Zurich soirée, 23 March 1918; published in Dada no. 3, December 1918',
    quotes: [
      'Dada is a new tendency in art. One can tell this from the fact that until now nobody knew anything about it, and tomorrow everyone in Zurich will be talking about it.',
      'DADA DOES NOT MEAN ANYTHING.',
      'I write a manifesto and I want nothing, yet I say certain things, and in principle I am against manifestos, as I am also against principles.',
    ],
    prose: [
      'Most movements write a manifesto to explain themselves earnestly. (A manifesto is a public declaration of a movement’s aims; Futurism, in the read next door, had practically invented the art-world version, and Dada took the weapon straight from it.) Dada wrote manifestos to prove that manifestos were worthless.',
      'In 1916 Hugo Ball stood up in a Zurich guildhall and announced “Dada is a new tendency in art,” then cheerfully explained that the whole point was that it meant nothing. Two years later Tzara wrote the most famous one of all, which partway through flatly declares “DADA DOES NOT MEAN ANYTHING,” and elsewhere admits he is writing a manifesto while being against manifestos and against principles.',
      'It is a manifesto that argues itself out of existence, which is exactly the joke and exactly the point. There is no creed to sign, no program to follow, only the refusal of creeds and programs. That is as close to a founding statement as a movement built on negation can get.',
    ],
    sourceUrl: 'https://391.org/manifestos/1918-dada-manifesto-tristan-tzara/',
    sourceLabel: 'Read Tzara’s Dada Manifesto 1918 in full',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.monaLisa,
      title: 'Before · Leonardo, Mona Lisa (c.1503)',
      caption: 'What art had always been: a thing made with skill, aimed at beauty and meaning, revered enough to become the most worshipped painting in the world. Even the wildest pre-1916 modern art still believed in the picture and the artist’s hand.',
    },
    after: {
      img: ART_IMG.duchampFountain,
      title: 'After · Duchamp, Fountain (1917)',
      caption: 'What Dada did instead: a factory-made urinal, signed “R. Mutt,” laid on its back and called sculpture. The skill is gone, the beauty is gone, the hand is gone. What is left is the choice, and the argument that the choice is the art.',
    },
    prose: [
      'For centuries a work of art was something an artist made with skill, that aimed at beauty or meaning or at least craft, and earned its place by hanging where the public took it seriously. Even the wildest modern art before 1916 still believed in all of that. Fauvism’s screaming colors, Cubism’s broken planes, Futurism’s blurred speed (all in the reads alongside this one) were violent quarrels with how to make a picture, but they never doubted that a picture was the thing to make, by hand.',
      'Dada doubted exactly that. Duchamp bought a mass-produced piece of plumbing, signed it with a fake name, laid it on its back, called it sculpture, and argued that his choosing it was the entire artistic act. There is no skill, no beauty, no subject. The only thing the artist did was point at an object and say “this.” That single move, the readymade, is the most disruptive idea in modern art, and it is the whole break in one glance.',
      'Three more moves stack behind it. Chance: Arp tore up paper, let the scraps fall, and glued them where they landed. Photomontage: in Berlin, Hannah Höch and John Heartfield cut up news photographs into political weapons. And nonsense: sound poems with no words, a name chosen because it means nothing, a moustache on the Mona Lisa. The skill, the beauty, even the made-by-hand part are thrown out. What is left is the idea and the gesture, and almost everything in art that comes after is built on that.',
    ],
  },
  canon: [
    { year: 1913, name: 'Bicycle Wheel', artist: 'Duchamp', wiki: 'Bicycle Wheel', img: ART_IMG.duchampBicycle },
    { year: 1915, name: 'Très rare tableau sur la terre', artist: 'Picabia', img: ART_IMG.picabiaTresRare },
    { year: 1915, name: 'Ici, c’est ici Stieglitz', artist: 'Picabia', img: ART_IMG.picabiaStieglitz },
    { year: 1916, name: 'Collage with Squares (Laws of Chance)', artist: 'Arp', wiki: 'Untitled (Collage with Squares Arranged according to the Laws of Chance)' },
    { year: 1917, name: 'Fountain', artist: 'Duchamp', wiki: 'Fountain (Duchamp)', img: ART_IMG.duchampFountain },
    { year: 1917, name: 'Flamenca (391 cover)', artist: 'Picabia', img: ART_IMG.picabiaFlamenca },
    { year: 1919, name: 'L.H.O.O.Q.', artist: 'Duchamp', wiki: 'L.H.O.O.Q.', img: ART_IMG.duchampLhooq },
    { year: 1920, name: 'The Art Critic', artist: 'Hausmann', wiki: 'The Art Critic (Hausmann)' },
    { year: 1920, name: 'Cut with the Kitchen Knife', artist: 'Höch', wiki: 'Cut with the Kitchen Knife', img: ART_IMG.hochKnife },
    { year: 1920, name: 'Mechanical Head (The Spirit of Our Time)', artist: 'Hausmann', img: ART_IMG.hausmannHead },
    { year: 1920, name: 'The Hat Makes the Man', artist: 'Ernst', img: ART_IMG.ernstHatMan },
    { year: 1920, name: 'La Sainte Vierge', artist: 'Picabia', img: ART_IMG.picabiaVierge },
    { year: 1920, name: 'Daum Marries Her Pedantic Automaton George', artist: 'Grosz', img: ART_IMG.groszDaum },
    { year: 1920, name: 'Republican Automatons', artist: 'Grosz', wiki: 'Republican Automatons' },
    { year: 1920, name: 'Tête dada (Dada Head)', artist: 'Taeuber-Arp', img: ART_IMG.taeuberDadaHead },
    { year: 1921, name: 'The Cherry Picture (Merz 32 A)', artist: 'Schwitters', wiki: 'The Cherry Picture' },
    { year: 1921, name: 'The Elephant Celebes', artist: 'Ernst', wiki: 'The Elephant Celebes', img: ART_IMG.ernstCelebes },
    { year: 1921, name: 'Gift', artist: 'Man Ray', wiki: 'Gift (Man Ray)', img: ART_IMG.manRayGift },
    { year: 1923, name: 'Indestructible Object', artist: 'Man Ray', wiki: 'Indestructible Object', img: ART_IMG.manRayIndestructible },
    { year: 1933, name: 'Merzbau', artist: 'Schwitters', wiki: 'Merzbau', img: ART_IMG.schwittersMerzbau },
  ],
  sections: [
    { id: 'cabaret', eyebrow: 'Zurich', dateLabel: '1916', title: 'The cabaret at the end of the world', blurb: 'In neutral Zurich, with Europe at war, a refugee poet opens a nightclub of nonsense, and a movement that means nothing on purpose gets its name.', progress: 1 / 6 },
    { id: 'urinal', eyebrow: 'New York', dateLabel: '1913–1919', title: 'A urinal in New York', blurb: 'Across the ocean, Duchamp turns a piece of plumbing into the most argued-over object in modern art, and we cannot even be sure who really sent it.', progress: 2 / 6 },
    { id: 'berlin', eyebrow: 'Berlin', dateLabel: '1918–1920', title: 'Berlin cuts it up', blurb: 'In a defeated, starving Germany, Dada turns savagely political and invents its sharpest weapon out of scissors and the daily paper, while the men shove the women aside.', progress: 3 / 6 },
    { id: 'trash', eyebrow: 'Hannover & Cologne', dateLabel: '1919–1921', title: 'Trash and one-man movements', blurb: 'A blackballed artist builds his own movement out of street garbage, a Cologne show hands you an axe, and Arp lets chance compose the picture.', progress: 4 / 6 },
    { id: 'paris', eyebrow: 'Paris', dateLabel: '1920–1923', title: 'Paris, and the family feud', blurb: 'Tzara brings Dada to the young writers who will become the Surrealists, then the movement tears itself apart over whether nonsense should be put to serious use.', progress: 5 / 6 },
    { id: 'left', eyebrow: 'The afterlife', dateLabel: '1924 on', title: 'What Dada left', blurb: 'Surrealism inherits it outright, and the readymade, photomontage and chance run forward into Pop, Conceptual art, Fluxus and punk.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Surrealism (1924–c.1950). Art of the unconscious and the dream.
// Authored through the art content pipeline (fact pack → Opus author → 5 critic
// gates → reconcile → born-verified images); narrative under 'sur'. THE IMAGE-
// RIGHTS WORST CASE: almost every famous Surrealist work is post-1930 and in
// copyright, so the only inlineable images are de Chirico's pre-1930 metaphysical
// paintings (the movement's visual DNA). The actual Surrealist works ship as
// palette cards in the strip + name-only canon entries, vivid in the prose.
// Honesty axes carried plain: the women (muse vs maker), Dalí's fascism, Breton's
// authoritarianism, Freud's skepticism, colonial primitivism (Wifredo Lam).
// ─────────────────────────────────────────────────────────────
export const SURREALISM: ArtMovementContent = {
  id: 'sur',
  name: 'Surrealism',
  range: '1924–1950',
  span: '~26 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.green,
  chain: { name: 'Movements of the Modern era', index: 8, total: 10 },
  hook: 'A poet wrote a rulebook for making art with the reasoning mind switched off, and a generation started painting their dreams.',
  hookLong:
    'Surrealism was at once a real attempt to map the unconscious and a personality cult with a pope. In Paris in 1924 the poet André Breton published a manifesto declaring Surrealism to be “pure psychic automatism,” art made with the rational, editing mind turned off, the hand running free the way Freud’s patients free-associated on the couch. Out of that one idea grew two streams that look nothing alike: the automatists (Miró, Masson, Ernst) who let chance and the wandering line do the composing, and the dream-image painters (Dalí, Magritte, Tanguy) who rendered impossible scenes with photographic precision, a clock melting over a branch, a pipe that insists it is not a pipe. Where Dada burned art down with a laugh, Surrealism rebuilt on the ashes with a program, ran itself like a church, and leaked into film, advertising, and the everyday word “surreal” so completely it never really ended.',
  heroImage: ART_IMG.chiricoRedTower,
  heroFit: 'cover',
  heroFocus: '50% 45%',
  heroCredit: 'de Chirico, The Red Tower (detail), 1913 · the metaphysical dream-world Surrealism grew out of',
  stats: [
    { v: '~26 yrs', k: 'Span' },
    { v: '22', k: 'Canonical works' },
    { v: 'Paris', k: 'Born in' },
  ],
  factions: [
    { side: 'automatists', label: 'The automatists', color: ART_ACCENTS.green, members: ['Masson', 'Miró', 'Ernst'], detail: 'Let the unconscious do the drawing. The pen or hand runs with no plan and no editing, the way Freud’s patients free-associated, so chance composes the picture. Masson’s automatic drawings, Miró’s nursery-bright biomorphs, Ernst’s rubbed-and-scraped frottage. This stream drifts toward abstraction.' },
    { side: 'veristic', label: 'The dream-image painters', color: ART_ACCENTS.violet, members: ['Dalí', 'Magritte', 'Tanguy'], detail: 'Paint the impossible as if it were a photograph. Hyper-real, sign-painter-precise scenes that make the irrational utterly convincing. Dalí’s melting clocks, Magritte’s deadpan pipe-that-is-not-a-pipe, Tanguy’s stone-littered nowhere-lands. Also called the veristic (truth-to-appearance) stream.' },
  ],
  works: [
    { id: 'song-of-love', year: 1914, name: 'The Song of Love', artist: 'de Chirico', place: 'Paris', size: 'l', blurb: 'A Greek head and a red rubber glove nailed side by side to a wall, a green ball below, a train on the horizon. Painted a decade early, the calm dreadful empty square the whole movement grew out of.', palette: ['#3a5a6a', '#7a6a4a', '#1c1a14'], imageUrl: ART_IMG.chiricoSongLove, credit: 'de Chirico, The Song of Love, 1914 · MoMA, New York' },
    { id: 'harlequin', year: 1925, name: 'The Harlequin’s Carnival', artist: 'Miró', place: 'Paris', size: 'm', blurb: 'A nursery-bright room boiling over with dancing biomorphic shapes, painted, Miró said, out of hunger hallucinations. The founding picture of the automatist stream.', palette: ['#bf2f25', '#1d4ed8', '#c8b84a'], imageUrl: ART_IMG.miroHarlequin },
    { id: 'masson-auto', year: 1924, name: 'Automatic Drawing', artist: 'Masson', place: 'Paris', size: 'm', blurb: 'A pen let loose with no plan, the line tangling into half-figures you only find afterward. As pure a picture of “psychic automatism” as the movement made.', palette: ['#5a5a64', '#2a2a30', '#0e0e12'], imageUrl: ART_IMG.massonAuto },
    { id: 'persistence', year: 1931, name: 'The Persistence of Memory', artist: 'Dalí', place: 'Paris', size: 'l', blurb: 'The melting watches draped over a branch and a table edge on a deserted Catalan shore, time gone soft, painted jewel-small and exact. The most famous Surrealist image.', palette: ['#3a6a7a', '#c8a04a', '#1c2422'], imageUrl: ART_IMG.daliPersistence },
    { id: 'treachery', year: 1929, name: 'The Treachery of Images', artist: 'Magritte', place: 'Brussels', size: 'm', blurb: 'A carefully painted pipe over the tidy line “Ceci n’est pas une pipe,” this is not a pipe. The cleanest lesson in art about the gap between a word, an image, and the thing.', palette: ['#7a6a4a', '#3a3020', '#100c08'], imageUrl: ART_IMG.magrittePipe },
    { id: 'object-fur', year: 1936, name: 'Object (the fur teacup)', artist: 'Oppenheim', place: 'Paris', size: 'm', blurb: 'A teacup, saucer and spoon covered in gazelle fur, the genteel ritual of tea turned animal and faintly revolting. MoMA’s first acquisition of a work by a woman.', palette: ['#6a5038', '#3a2a1c', '#15100a'], imageUrl: ART_IMG.oppenheimObject },
    { id: 'carrington-self', year: 1938, name: 'Self-Portrait (Inn of the Dawn Horse)', artist: 'Carrington', place: 'Paris', size: 'm', blurb: 'The artist in jodhpurs with a lactating hyena beside her, a white rocking-horse floating behind her head, a real horse galloping out the window. A woman painting her own dream, not posing in a man’s.', palette: ['#3a5a4a', '#8a7a52', '#15140e'], imageUrl: ART_IMG.carringtonSelf },
    { id: 'ernst-histoire', year: 1926, name: 'Histoire Naturelle (frottage)', artist: 'Ernst', place: 'Paris', size: 'm', blurb: 'Thirty-four “natural history” plates conjured by frottage: paper rubbed over grainy wood so leaves and creatures surface by chance. A field guide to things a floorboard dreamed up. (Under copyright; shown in words.)', palette: ['#5a4a2a', '#2a2218', '#0e0a06'] },
    { id: 'tanguy-divis', year: 1942, name: 'Indefinite Divisibility', artist: 'Tanguy', place: 'New York', size: 'm', blurb: 'A vast, evenly lit nowhere-plain littered with smooth pale shapes like bones worn round by an invisible sea. The single landscape Tanguy painted for life.', palette: ['#5a6a6a', '#33403e', '#0e1412'], imageUrl: ART_IMG.tanguyDivis },
  ],
  artists: [
    { id: 'breton', name: 'Breton', role: 'The pope', years: '1896–1966', palette: ['#3a5a4a', '#2a3630', '#0e1410'] },
    { id: 'ernst', name: 'Ernst', role: 'The inventor', years: '1891–1976', palette: ['#5a4a2a', '#2a2218', '#0e0a06'] },
    { id: 'dali', name: 'Dalí', role: 'The showman', years: '1904–1989', palette: ['#3a6a7a', '#c8a04a', '#1c2422'] },
    { id: 'magritte', name: 'Magritte', role: 'The deadpan philosopher', years: '1898–1967', palette: ['#7a6a4a', '#3a3020', '#100c08'] },
    { id: 'miro', name: 'Miró', role: 'Automatist of shape', years: '1893–1983', palette: ['#bf2f25', '#1d4ed8', '#c8b84a'] },
    { id: 'carrington', name: 'Carrington', role: 'Muse turned master', years: '1917–2011', palette: ['#3a5a4a', '#8a7a52', '#15140e'] },
    { id: 'oppenheim', name: 'Oppenheim', role: 'The object-maker', years: '1913–1985', palette: ['#6a5038', '#3a2a1c', '#15100a'] },
  ],
  parallels: [
    { year: 1933, movement: 'The rise of fascism', place: 'Europe', blurb: 'Surrealism’s whole life runs between the wars, against Mussolini, Hitler and Franco. The group was militantly left (Breton joined the Communist Party, broke with Stalin, later co-wrote a manifesto with Trotsky), which is exactly why Dalí’s refusal to condemn Hitler got him expelled.' },
    { year: 1924, movement: 'Freud goes mainstream', place: 'Vienna', blurb: 'Freud’s ideas spread across Europe in these decades. Surrealism took him most literally, turning a clinical theory into a studio program. Freud privately called them cranks and only reconsidered, about Dalí, after meeting him in 1938.' },
    { year: 1925, movement: 'The drive to abstraction', place: 'Northern Europe', blurb: 'While the Surrealists mined the dream, Mondrian’s De Stijl and the Bauhaus pushed the opposite way, pure geometry, no story, no unconscious. Two avant-gardes at once, one diving into the mind, one purging it.' },
  ],
  lineage: {
    parents: [
      { label: 'Dada', mode: 'art', img: ART_IMG.duchampFountain, palette: ['#b8b4ac', '#6a665e', '#2a2824'], note: 'gave: chance, collage, provocation' },
      { label: 'de Chirico', mode: 'art', img: ART_IMG.chiricoSongLove, palette: ['#3a5a6a', '#7a6a4a', '#1c1a14'], note: 'gave: the dreamlit empty square' },
      { label: 'Freud', mode: 'civ', palette: ['#5a5048', '#2a2520', '#0e0c0a'], note: 'gave: the unconscious and free association' },
      { label: 'Symbolism', mode: 'art', img: ART_IMG.gauguinVision, palette: ['#8a3a3a', '#3a5a4a', '#15110a'], note: 'gave: the inner vision over the seen world' },
    ],
    children: [
      { label: 'Abstract Expressionism', mode: 'art', img: ART_IMG.kandinskyComp7, palette: ['#1d4ed8', '#d6cf3f', '#bf2f25'], note: 'took: automatism, made into gesture' },
      { label: 'Film', mode: 'civ', palette: ['#3a3a44', '#1c1c24', '#0a0a10'], note: 'took: dream-logic on screen' },
      { label: 'Magical realism', mode: 'civ', palette: ['#5a4a2a', '#2a2218', '#0e0a06'], note: 'took: the dream folded into the everyday' },
      { label: 'Advertising', mode: 'civ', palette: ['#bf2f6a', '#d6cf3f', '#1c1c1c'], note: 'took: the surreal juxtaposition as a sales grammar' },
    ],
  },
  influenceSummary: 'Surrealism took Dada’s chance and collage, de Chirico’s dreamlit empty square, and Freud’s unconscious, made the dream and the accident serious artistic subjects with working methods to match, and handed automatism forward to Abstract Expressionism and the word “surreal” to everyone else.',
  manifesto: {
    title: 'Manifesto of Surrealism',
    author: 'André Breton',
    dateLabel: '1924',
    venue: 'published in Paris by Éditions du Sagittaire, 15 October 1924',
    quotes: [
      'SURREALISM, n. m. Pure psychic automatism by means of which one intends to express, either verbally, or in writing, or in any other manner, the actual functioning of thought. Dictated by thought, in the absence of any control exercised by reason, free of any aesthetic or moral concern.',
      'Surrealism is based on the belief in the superior reality of certain forms of previously neglected association, in the omnipotence of dream, in the disinterested play of thought.',
    ],
    prose: [
      'Most movements get a manifesto after the fact, written to defend work already hanging on walls. Surrealism is the rare case where the document came first and named the thing into being. In October 1924 André Breton published the Manifesto of Surrealism, and its heart is a joke that is also dead serious: a mock-dictionary entry, complete with the abbreviation for a masculine noun, defining the new word the way a dictionary would.',
      'The whole program lives in that definition: art made with the conscious, rational, editing mind switched off, so thought flows out unsupervised. Breton called it “psychic automatism” (psychic here meaning of the mind, from the Greek psyche, nothing supernatural), and he took the method straight from Freud’s couch, where patients free-associated, saying whatever surfaced with no filter.',
      'He borrowed the word itself from the poet Guillaume Apollinaire, who had coined “surréalisme” back in 1917, seven years before the movement it would name. Breton founded the movement and wrote its rulebook; the name is Apollinaire’s. And writing the rules brought a power Breton would use, for the next forty years, to decide who counted as a Surrealist and who did not.',
    ],
    sourceUrl: 'https://www.poetsofmodernity.xyz/POMBR/French/Manifesto.php',
    sourceLabel: 'Read the Manifesto of Surrealism (Breton, 1924)',
  },
  whatChanged: {
    heading: 'Why it was a break',
    before: {
      img: ART_IMG.demoiselles,
      title: 'Before · Cubism (Picasso, Les Demoiselles d’Avignon, 1907)',
      caption: 'Even the most radical pre-1924 art still worked the world you can see, or the picture itself. Cubism shattered a visible room into planes, but it was a room, built by a wide-awake, deciding mind.',
    },
    after: {
      img: ART_IMG.chiricoSongLove,
      title: 'After · de Chirico, The Song of Love (1914)',
      caption: 'What the movement turned toward instead: an eerie, dreamlit nowhere where a Greek head and a red rubber glove hang nailed to a wall and nothing follows the rules of waking life. The subject of art is no longer what you see. It is what you dream.',
    },
    prose: [
      'For all their quarrels, the radical movements before 1924 agreed on one thing: art works the world you can see, or the picture itself, and a wide-awake, deciding mind is in charge of the job. The Impressionists chased light; Cubism broke a visible room into planes; even Dada, in the read right before this one, aimed its insults at public targets. Whatever they did, they did it with the conscious, editing mind switched on.',
      'Surrealism turned the camera around. It went after the inside, the unconscious, the dream, desire, the irrational, and it deliberately switched the conscious mind off to get there. Breton borrowed the method from Freud’s consulting room: free association, where a patient says whatever surfaces with no filter, and the unfiltered flow tells you what the reasoning mind has buried. He called it “psychic automatism,” and it is the whole movement in two words.',
      'From that one idea grew two methods that look like opposites. Automatism lets the hand run with no plan, so chance and the unconscious compose: Masson’s tangled drawings, Miró’s drifting shapes, Ernst’s rubbed surfaces. The dream image does the reverse, painting an impossible scene with hyper-real precision so the irrational looks convincing: Dalí’s soft watches, Magritte’s pipe that denies being a pipe, Tanguy’s deserts of stones. One stream slides toward abstraction, the other toward a too-clear nightmare, but they share a single new subject. Not the seen world. The dreaming mind.',
    ],
  },
  canon: [
    { year: 1911, name: 'The Nostalgia of the Infinite', artist: 'de Chirico', wiki: 'The Nostalgia of the Infinite', img: ART_IMG.chiricoNostalgiaInfinite },
    { year: 1913, name: 'The Red Tower', artist: 'de Chirico', wiki: 'The Red Tower (de Chirico)', img: ART_IMG.chiricoRedTower },
    { year: 1913, name: 'The Soothsayer’s Recompense', artist: 'de Chirico', wiki: 'The Soothsayer’s Recompense', img: ART_IMG.chiricoSoothsayer },
    { year: 1914, name: 'The Song of Love', artist: 'de Chirico', wiki: 'The Song of Love', img: ART_IMG.chiricoSongLove },
    { year: 1914, name: 'Mystery and Melancholy of a Street', artist: 'de Chirico', wiki: 'Mystery and Melancholy of a Street', img: ART_IMG.chiricoMysteryStreet },
    { year: 1914, name: 'The Child’s Brain', artist: 'de Chirico', wiki: 'The Child’s Brain', img: ART_IMG.chiricoChildBrain },
    { year: 1914, name: 'Gare Montparnasse (The Melancholy of Departure)', artist: 'de Chirico', img: ART_IMG.chiricoGareMontparnasse },
    { year: 1917, name: 'The Great Metaphysician', artist: 'de Chirico', img: ART_IMG.chiricoGreatMetaphysician },
    { year: 1916, name: 'The Disquieting Muses', artist: 'de Chirico', wiki: 'The Disquieting Muses' },
    { year: 1924, name: 'Automatic Drawing', artist: 'Masson', img: ART_IMG.massonAuto },
    { year: 1924, name: 'Two Children Are Threatened by a Nightingale', artist: 'Ernst', wiki: 'Two Children Are Threatened by a Nightingale' },
    { year: 1925, name: 'The Harlequin’s Carnival', artist: 'Miró', wiki: 'Harlequin’s Carnival', img: ART_IMG.miroHarlequin },
    { year: 1926, name: 'Histoire Naturelle (frottage portfolio)', artist: 'Ernst' },
    { year: 1929, name: 'Un Chien Andalou (film, with Buñuel)', artist: 'Dalí', wiki: 'Un Chien Andalou' },
    { year: 1929, name: 'The Treachery of Images', artist: 'Magritte', wiki: 'The Treachery of Images', img: ART_IMG.magrittePipe },
    { year: 1931, name: 'The Persistence of Memory', artist: 'Dalí', wiki: 'The Persistence of Memory', img: ART_IMG.daliPersistence },
    { year: 1936, name: 'Object (the fur teacup)', artist: 'Oppenheim', wiki: 'Object (Oppenheim)', img: ART_IMG.oppenheimObject },
    { year: 1937, name: 'Self-Portrait (Inn of the Dawn Horse)', artist: 'Carrington', wiki: 'Self-Portrait (Carrington)', img: ART_IMG.carringtonSelf },
    { year: 1938, name: 'Lobster Telephone', artist: 'Dalí', wiki: 'Lobster Telephone', img: ART_IMG.daliLobster },
    { year: 1939, name: 'The Two Fridas', artist: 'Kahlo', wiki: 'The Two Fridas', img: ART_IMG.kahloTwoFridas },
    { year: 1942, name: 'Birthday', artist: 'Tanning', wiki: 'Birthday (Tanning)', img: ART_IMG.tanningBirthday },
    { year: 1964, name: 'The Son of Man', artist: 'Magritte', wiki: 'The Son of Man', img: ART_IMG.magritteSonOfMan },
  ],
  sections: [
    { id: 'manifesto', eyebrow: 'Paris', dateLabel: '1924', title: 'A word, a pope, and a manifesto', blurb: 'Breton turns Dada’s serious wing into a program, writes the rulebook for art made with the reasoning mind switched off, and gives himself the power that comes with writing the rules.', progress: 1 / 6 },
    { id: 'automatism', eyebrow: 'The wandering hand', dateLabel: '1924–1929', title: 'Letting the hand run', blurb: 'Masson lets a pen loose with no plan, Miró paints out of hunger hallucinations, and Ernst rubs an image up out of the grain of a floor. Chance becomes the composer.', progress: 2 / 6 },
    { id: 'dream', eyebrow: 'The hyper-real dream', dateLabel: '1929–1938', title: 'Painting the dream like a photograph', blurb: 'The other stream renders the impossible with a sign-painter’s finish: melting clocks, a pipe that is not a pipe, deserts of smooth stone. The irrational, made convincing.', progress: 3 / 6 },
    { id: 'women', eyebrow: 'Muse and maker', dateLabel: '1930s', title: 'Woman as muse, woman as artist', blurb: 'The movement worshipped “woman” while keeping women out of the room as colleagues. Name the real ones: Carrington, Oppenheim, Varo, Tanning, Sage, Fini, Cahun, and Kahlo, who rejected the label.', progress: 4 / 6 },
    { id: 'pope', eyebrow: 'The purges', dateLabel: '1926–1939', title: 'The pope and the excommunications', blurb: 'Breton’s authoritarianism: the trials, the expulsions (Artaud, then Dalí and “Avida Dollars”), the recorded homophobia, and the politics of the 1930s that fractured the group.', progress: 5 / 6 },
    { id: 'exile', eyebrow: 'New York and after', dateLabel: '1939–1950s', title: 'Exile, and what leaked out', blurb: 'The war scatters the group to New York, their automatism lights the fuse for Abstract Expressionism, and the dream-logic leaks into film, advertising, and the word “surreal.”', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Pop Art (1956–1970). Mass/commercial culture made into art, done
// cool, the flat mechanical answer to Abstract Expressionism. Gated pipeline;
// narrative under 'pop'. THE APP'S WORST IMAGE CASE: not one Pop work is
// inlineable (all post-1930, in copyright); the only images are US-PD period
// photos of consumer culture, captioned as context. No whatChanged block (the
// "before" = AbEx has no PD image); the break is carried in the prose. Honesty
// axes plain: celebration-vs-critique held open, the erased women, Pop's
// whiteness, uncredited labor/appropriation (James Harvey's Brillo box).
// ─────────────────────────────────────────────────────────────
export const POP_ART: ArtMovementContent = {
  id: 'pop',
  name: 'Pop Art',
  range: '1956–1970',
  span: '~14 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.violet,
  chain: { name: 'Movements of the Modern era', index: 10, total: 10 },
  hook: 'Where Abstract Expressionism flung paint from the soul, Pop hung a soup can on the wall and refused to say whether it was a joke.',
  hookLong:
    'Pop Art took the cheapest, most public images anybody saw every day, soup labels, comic strips, advertising, movie stars, supermarket packaging, and made them the content of serious art, done cold. It was the cool, flat, mechanical answer to Abstract Expressionism’s hot, gestural, soul-baring painting, and it started in Britain first, not America: a London discussion club called the Independent Group got obsessed with glossy American mass culture in grey, rationed postwar Britain years before Warhol picked up a silkscreen. Then America made it enormous, Warhol’s grids of soup cans and silkscreened Marilyns, Lichtenstein’s giant comic panels, Oldenburg’s saggy soft hamburgers. The deepest question Pop poses it never answers on purpose: is this a love letter to consumer abundance or a deadpan burial under it, and the same deadpan also hid, for decades, the women it wrote out, the near-total whiteness of its canon, and the uncredited people whose designs and labor the machine ran on.',
  heroImage: ART_IMG.popSupermarket,
  heroFit: 'cover',
  heroFocus: '50% 50%',
  heroCredit: 'A 1950s American supermarket aisle (period photograph, NOT a Pop artwork) · Library of Congress · the world Pop made art of',
  stats: [
    { v: '~14 yrs', k: 'Span' },
    { v: '18', k: 'Canonical works' },
    { v: 'Britain → USA', k: 'Born in' },
  ],
  factions: [
    { side: 'british', label: 'British Pop (the Independent Group)', color: ART_ACCENTS.violet, members: ['Hamilton', 'Paolozzi', 'Blake', 'Boty'], detail: 'It started here, in grey postwar London. A circle of young artists, critics and architects (the Independent Group) at the ICA got hypnotized by the glossy American abundance flooding in from across the Atlantic, and built art out of it. Paolozzi’s 1947 magazine collages, Hamilton’s tiny 1956 living-room collage, and the 1957 letter that defined Pop like an ad slogan. Cooler and more analytical than the American wave, and years earlier.' },
    { side: 'american', label: 'American Pop', color: '#bf2f6a', members: ['Warhol', 'Lichtenstein', 'Oldenburg', 'Rosenquist'], detail: 'The second wave, and the bigger one. America took the British idea and made it huge, brash and unmissable: Warhol’s soup-can grids and silkscreened Marilyns out of the Factory, Lichtenstein’s comic panels at billboard size, Oldenburg’s giant soft hamburgers, Rosenquist’s room-length splices. Where the British circle studied mass culture, the Americans matched its scale and gloss head-on.' },
  ],
  works: [
    { id: 'just-what-is-it', year: 1956, name: 'Just what is it that makes today’s homes so different, so appealing?', artist: 'Hamilton', place: 'London', size: 'm', blurb: 'The first iconic Pop work: the entire 1950s consumer dream crammed into one tiny living-room collage, a flexing bodybuilder holding a giant Tootsie Pop.', palette: ['#bf2f6a', '#1f1f1f', '#7adff0'], imageUrl: ART_IMG.hamiltonHomes },
    { id: 'rich-mans-plaything', year: 1947, name: 'I was a Rich Man’s Plaything', artist: 'Paolozzi', place: 'London', size: 'm', blurb: 'Proto-Pop a full decade early: American magazine cuttings glued together, with a toy gun firing a puff of smoke lettered “POP!”, often called the first appearance of the word.', palette: ['#d6483a', '#3a3030', '#100c08'], imageUrl: ART_IMG.paolozziPlaything },
    { id: 'flag', year: 1954, name: 'Flag', artist: 'Johns', place: 'New York', size: 'm', blurb: 'The Stars and Stripes, life-size, edge to edge, in pigmented hot wax over newsprint. The bridge out of Abstract Expressionism: is it a painting of a flag, or just a flag?', palette: ['#3a4a8a', '#a83232', '#15110c'], imageUrl: ART_IMG.johnsFlag },
    { id: 'soup-cans', year: 1962, name: 'Campbell’s Soup Cans', artist: 'Warhol', place: 'Los Angeles', size: 'l', blurb: 'Thirty-two near-identical canvases, one per soup variety, first propped on a shelf like a grocery aisle. The supermarket walks into the museum and hangs where a Rothko hung.', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'], imageUrl: ART_IMG.warholSoup },
    { id: 'marilyn', year: 1962, name: 'Marilyn Diptych', artist: 'Warhol', place: 'New York', size: 'l', blurb: 'Fifty silkscreened Marilyns from one publicity still, made weeks after her death, vivid on the left and fading to ghostly grays on the right. Celebrity, mass reproduction and death at once.', palette: ['#bf2f6a', '#d6cf3f', '#1c1c1c'], imageUrl: ART_IMG.warholMarilyn },
    { id: 'brillo', year: 1964, name: 'Brillo Boxes', artist: 'Warhol', place: 'New York', size: 'm', blurb: 'Plywood boxes silkscreened to look exactly like Brillo shipping cartons. If the art is identical to a grocery box, what makes it art? (The real carton was designed by James Harvey.)', palette: ['#bf2f25', '#3a4a8a', '#f0f0f0'], imageUrl: ART_IMG.warholBrillo },
    { id: 'whaam', year: 1963, name: 'Whaam!', artist: 'Lichtenstein', place: 'New York', size: 'l', blurb: 'A thirteen-foot war-comic panel: a fighter fires a rocket, the enemy plane erupting in a yellow-and-red “WHAAM!”, hand-painted Ben-Day dots and all.', palette: ['#d6cf3f', '#bf2f25', '#1c1c1c'], imageUrl: ART_IMG.lichtWhaam },
    { id: 'floor-burger', year: 1962, name: 'Floor Burger', artist: 'Oldenburg', place: 'New York', size: 'm', blurb: 'A hamburger the size of a sofa, soft and sagging, painted canvas stuffed with foam. The most familiar object in the world made monstrous and absurd. (Under copyright; shown in words.)', palette: ['#a8702a', '#3a2a1c', '#15100a'] },
    { id: 'its-a-mans-world', year: 1965, name: 'It’s a Man’s World', artist: 'Boty', place: 'London', size: 'm', blurb: 'The lone prominent woman of British Pop turns the gaze around, assembling the icons of male culture seen plainly from a woman looking back. Lost for decades, some works found in a barn. (Under copyright; shown in words.)', palette: ['#bf3a6a', '#3a5a4a', '#15140e'] },
  ],
  artists: [
    { id: 'hamilton', name: 'Hamilton', role: 'Father of British Pop', years: '1922–2011', palette: ['#bf2f6a', '#1f1f1f', '#7adff0'] },
    { id: 'paolozzi', name: 'Paolozzi', role: 'The proto-Pop collagist', years: '1924–2005', palette: ['#d6483a', '#3a3030', '#100c08'] },
    { id: 'warhol', name: 'Warhol', role: 'The icon and the machine', years: '1928–1987', palette: ['#bf2f25', '#d6cf3f', '#1c1c1c'] },
    { id: 'lichtenstein', name: 'Lichtenstein', role: 'The comic-strip painter', years: '1923–1997', palette: ['#d6cf3f', '#bf2f25', '#1c1c1c'] },
    { id: 'oldenburg', name: 'Oldenburg', role: 'Maker of giant soft things', years: '1929–2022', palette: ['#a8702a', '#3a2a1c', '#15100a'] },
    { id: 'rosenquist', name: 'Rosenquist', role: 'The billboard painter', years: '1933–2017', palette: ['#3a6a8a', '#bf2f6a', '#15110c'] },
    { id: 'boty', name: 'Boty', role: 'The woman British Pop erased', years: '1938–1966', palette: ['#bf3a6a', '#3a5a4a', '#15140e'] },
  ],
  parallels: [
    { year: 1957, movement: 'The consumer boom', place: 'USA / UK', blurb: 'Pop is inseparable from the supermarket, the suburb, the TV set and Madison Avenue. Postwar prosperity flooded America with branded goods and ads; the British fascination was sharper because Britain was still grey and rationed while American abundance glittered from across the Atlantic.' },
    { year: 1952, movement: 'Abstract Expressionism’s reign', place: 'New York', blurb: 'While Pop was being born, AbEx (Pollock, Rothko, de Kooning) was the establishment avant-garde, the hot lone genius baring his soul. Pop’s rise is the story of AbEx being dethroned by the cool machine.' },
    { year: 1962, movement: 'The celebrity machine', place: 'the West', blurb: 'Television, glossy magazines and Hollywood’s star machine peaked in these years, manufacturing fame as a product. Warhol’s Marilyns (made the month she died) ride that wave: fame, repetition, image-as-merchandise.' },
  ],
  lineage: {
    parents: [
      { label: 'Abstract Expressionism', mode: 'art', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'], note: 'gave: the foil, inverted on every axis' },
      { label: 'Neo-Dada (Johns, Rauschenberg)', mode: 'art', palette: ['#3a4a8a', '#a83232', '#15110c'], note: 'gave: the door, the everyday object back in' },
      { label: 'Dada & the readymade', mode: 'art', img: ART_IMG.duchampFountain, palette: ['#b8b4ac', '#6a665e', '#2a2824'], note: 'gave: collage, appropriation, the readymade' },
      { label: 'Mass culture', mode: 'civ', img: ART_IMG.popTimesSquare, palette: ['#bf2f6a', '#d6cf3f', '#1c1c1c'], note: 'gave: the raw material and the subject' },
    ],
    children: [
      { label: 'Conceptual art', mode: 'art', palette: ['#5a5a5a', '#2a2a2a', '#0c0c0c'], note: 'took: the idea, not the object, is the art' },
      { label: 'The Pictures Generation', mode: 'art', palette: ['#3a3a44', '#1c1c24', '#0a0a10'], note: 'took: appropriation as a critical weapon' },
      { label: 'Neo-Pop (Koons)', mode: 'art', palette: ['#bf2f6a', '#d6cf3f', '#1c1c1c'], note: 'took: consumer kitsch and branding as fine art' },
      { label: 'Today’s image world', mode: 'civ', img: ART_IMG.popBillboards, palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'], note: 'took: the high/low wall, gone for good' },
    ],
  },
  influenceSummary: 'Pop took Abstract Expressionism’s scale and Dada’s readymade, turned art outward to the cheapest, most public mass imagery and rendered it cool and mechanical, and handed appropriation and mechanical reproduction forward as legitimate art, dissolving the wall between fine art and the commercial image so completely that the museum and the supermarket now speak the same visual language.',
  manifesto: {
    title: 'The “characteristics of pop art” (Hamilton’s 1957 letter)',
    author: 'Richard Hamilton',
    dateLabel: '1957',
    venue: 'a private letter to the architects Alison and Peter Smithson, fellow members of the Independent Group; later reprinted so often it became the de-facto definition of the movement',
    quotes: [
      'Pop Art is: Popular (designed for a mass audience), Transient (short-term solution), Expendable (easily forgotten), Low cost, Mass produced, Young (aimed at youth), Witty, Sexy, Gimmicky, Glamorous, Big business.',
      'The reason I’m painting this way is that I want to be a machine. (Andy Warhol, 1963)',
    ],
    prose: [
      'Pop never got a manifesto. It got a letter. Most movements announce themselves with a public declaration nailed to the door of the art world. Pop had no founding document and no signatures, which fits a movement that was deadpan and noncommittal on principle. What it had instead was a private letter: in 1957 Richard Hamilton wrote to his friends Alison and Peter Smithson, two architects in the Independent Group, and listed what “pop art” should be.',
      'The list is the closest thing the movement ever had to a creed, and it reads exactly like the advertising it was about: popular, transient, expendable, low cost, mass produced, young, witty, sexy, gimmicky, glamorous, big business. That is not a call to arms. It is a product description, and that flatness is the message. There is nothing in it about the soul, beauty, or genius.',
      'Andy Warhol gave the movement its other famous lines, but they are color, not a creed. “I want to be a machine,” he told an interviewer in 1963, and meant it as a compliment. (A line about everyone being world-famous for fifteen minutes is also attached to him, but it was first printed in 1968 and he may never actually have said it, two facts worth keeping straight.)',
    ],
    sourceUrl: 'https://www.tate.org.uk/art/art-terms/p/pop-art',
    sourceLabel: 'Read Hamilton’s list on Tate’s Pop art page (1957)',
  },
  canon: [
    { year: 1947, name: 'I was a Rich Man’s Plaything (BUNK!)', artist: 'Paolozzi', wiki: 'I was a Rich Man’s Plaything', img: ART_IMG.paolozziPlaything },
    { year: 1954, name: 'Flag', artist: 'Johns', wiki: 'Flag (Jasper Johns)', img: ART_IMG.johnsFlag },
    { year: 1955, name: 'Bed', artist: 'Rauschenberg', wiki: 'Bed (Rauschenberg)' },
    { year: 1955, name: 'On the Balcony', artist: 'Blake', wiki: 'On the Balcony (Blake)' },
    { year: 1956, name: 'Just what is it that makes today’s homes so different, so appealing?', artist: 'Hamilton', wiki: 'Just what is it that makes today’s homes so different, so appealing?', img: ART_IMG.hamiltonHomes },
    { year: 1961, name: 'The Store', artist: 'Oldenburg', wiki: 'The Store (Oldenburg)' },
    { year: 1961, name: 'Great American Nude series', artist: 'Wesselmann', wiki: 'Tom Wesselmann' },
    { year: 1962, name: 'Campbell’s Soup Cans', artist: 'Warhol', wiki: 'Campbell’s Soup Cans', img: ART_IMG.warholSoup },
    { year: 1962, name: 'Marilyn Diptych', artist: 'Warhol', wiki: 'Marilyn Diptych', img: ART_IMG.warholMarilyn },
    { year: 1962, name: 'Floor Burger', artist: 'Oldenburg', wiki: 'Floor Burger' },
    { year: 1963, name: 'Whaam!', artist: 'Lichtenstein', wiki: 'Whaam!', img: ART_IMG.lichtWhaam },
    { year: 1963, name: 'Drowning Girl', artist: 'Lichtenstein', wiki: 'Drowning Girl', img: ART_IMG.lichtDrowning },
    { year: 1963, name: 'Standard Station, Amarillo, Texas', artist: 'Ruscha', wiki: 'Standard Station' },
    { year: 1964, name: 'Brillo Boxes', artist: 'Warhol', wiki: 'Brillo Boxes', img: ART_IMG.warholBrillo },
    { year: 1965, name: 'F-111', artist: 'Rosenquist', wiki: 'F-111 (painting)' },
    { year: 1965, name: 'It’s a Man’s World I', artist: 'Boty', wiki: 'Pauline Boty' },
    { year: 1967, name: 'Sgt. Pepper’s album cover', artist: 'Blake', wiki: 'Sgt. Pepper’s Lonely Hearts Club Band' },
    { year: 1964, name: 'Marisol’s carved-wood Pop figures', artist: 'Marisol' },
  ],
  sections: [
    { id: 'britain', eyebrow: 'London', dateLabel: '1947–1957', title: 'Britain saw it first', blurb: 'In grey, rationed postwar London, a circle of young artists, critics and architects gets hypnotized by glossy American abundance, Paolozzi glues it into collage from 1947, Hamilton crams it into one tiny living room in 1956, and a 1957 letter defines Pop like an ad slogan.', progress: 1 / 6 },
    { id: 'bridge', eyebrow: 'New York', dateLabel: '1954–1955', title: 'Killing the lone genius', blurb: 'Why Abstract Expressionism ruled American art, hot, gestural, inward, heroic, and how two younger New Yorkers, Johns with his flag and Rauschenberg with his bed, cracked it open by dragging the everyday object back in.', progress: 2 / 6 },
    { id: 'machine', eyebrow: 'The big wave', dateLabel: '1961–1965', title: 'The supermarket walks into the museum', blurb: 'America makes Pop enormous: Warhol’s soup cans and Marilyns, the Factory, silkscreen, “I want to be a machine,” the Brillo boxes; Lichtenstein’s comic panels; Oldenburg’s soft giants; Rosenquist’s billboard scale.', progress: 3 / 6 },
    { id: 'debate', eyebrow: 'Love letter or burial?', dateLabel: '1962–1968', title: 'Celebration or indictment?', blurb: 'The question Pop refuses to answer: is this a love letter to consumer abundance or a deadpan burial under it? Both readings held open, plus the appropriation question and the uncredited Brillo-box designer James Harvey.', progress: 4 / 6 },
    { id: 'leftout', eyebrow: 'The blind spots', dateLabel: '1960s', title: 'Who got left out', blurb: 'The erased women named as real artists (Boty, Marisol, Drexler, Weber, Strider, Axell) and the erasure named; the objectified female nude; Pop’s near-total whiteness; the uncredited Factory labor behind the “machine.”', progress: 5 / 6 },
    { id: 'legacy', eyebrow: 'After Pop', dateLabel: '1970–today', title: 'What Pop left us', blurb: 'Appropriation and mechanical reproduction made legitimate, the high/low wall gone for good, and the line out to Conceptual art, the Pictures Generation and Koons. Both halves held: a real rethinking of art, and a movement with real blind spots.', progress: 1 },
  ],
}

// ─────────────────────────────────────────────────────────────
// Movement, Abstract Expressionism (1943–1960). The first American movement to
// lead world art; pure abstraction at mural scale, the canvas as "an arena in
// which to act." Gated pipeline (fact pack -> author -> 5 critics -> Opus
// reconcile); narrative under 'abex'. THE APP'S WORST IMAGE CASE: not one work
// is inlineable (all post-1940) and even the milieu photos are encumbered, so the
// only image is a US-PD 1950s New York streetscape used as atmosphere; the works
// ship as "Under copyright" cards + prose. Manifesto ABSENT (key-text surrogates).
// No whatChanged block (the "after" = an AbEx work has no PD image; break in prose).
// Honesty axes plain: the women written out, the genius-myth, the documented CIA
// Cold-War promotion (precise), Pollock's death unromanticized.
// ─────────────────────────────────────────────────────────────
export const ABSTRACT_EXPRESSIONISM: ArtMovementContent = {
  id: 'abex',
  name: 'Abstract Expressionism',
  range: '1943–1960',
  span: '~17 years',
  era: 'Modern',
  eraId: 'mod',
  accent: ART_ACCENTS.blue,
  chain: { name: 'Movements of the Modern era', index: 9, total: 10 },
  hook: 'After the war, painting crossed the Atlantic: New York decided a picture did not have to be of anything.',
  hookLong:
    'For the first time an American movement led the world, or so the standard account goes, and Paris handed the avant-garde to New York. A loose group later called the New York School made the canvas, in one critic’s phrase, “an arena in which to act,” big enough to swallow the viewer and built to record the body, the gesture and the unconscious directly. The single idea split into two wings that look nothing alike: the gesture painters who put the act of painting on the wall, and the color-field painters who built vast glowing fields aimed at the sublime. Almost none of the actual paintings can be shown here, because the whole movement is still under copyright, so the words have to carry the pictures.',
  heroImage: ART_IMG.abexNYC,
  heroFit: 'cover',
  heroFocus: '50% 50%',
  heroCredit: 'Washington Square, Greenwich Village, 1953 (period photograph) · Library of Congress · the city where this happened, not the art',
  stats: [
    { v: '~17 yrs', k: 'Span' },
    { v: '17', k: 'Canonical works' },
    { v: 'New York', k: 'Centered on' },
  ],
  factions: [
    { side: 'gesture', label: 'The gesture wing (“action”)', color: ART_ACCENTS.blue, members: ['Pollock', 'de Kooning', 'Kline', 'Gorky'], detail: 'The painting as the record of an event: the artist’s body and unconscious moving across the canvas, edge to edge, no focal point. “Action painting” is the critic Harold Rosenberg’s 1952 term, and it means THIS wing only.' },
    { side: 'field', label: 'The color-field wing', color: '#7a4d8a', members: ['Rothko', 'Newman', 'Still', 'Frankenthaler'], detail: 'The opposite move: a vast, enveloping field of color built for stillness and scale, meant to deliver something like the sublime. The names listed are the core, not the full roster (Frankenthaler’s soak-stain is the bridge into Color Field). Never call these painters “action painters.”' },
  ],
  works: [
    { id: 'autumn-rhythm', year: 1950, name: 'Autumn Rhythm (Number 30)', artist: 'Pollock', place: 'New York', size: 'xl', blurb: 'A wall of poured and dripped line in black, white and tan, almost nine feet tall and seventeen wide, made on the floor from all four sides. No figure, no center: the subject is the act of painting itself.', palette: ['#2a2620', '#a8966a', '#0e0c08'], imageUrl: ART_IMG.pollockAutumn },
    { id: 'woman-i', year: 1952, name: 'Woman I', artist: 'de Kooning', place: 'New York', size: 'l', blurb: 'A ferocious, toothy, more-than-life-size female figure built of slashing strokes, reworked over months. De Kooning kept the human body when his peers dropped it, and made both camps angry.', palette: ['#bf6a5a', '#3a4a6a', '#15110c'], imageUrl: ART_IMG.deKooningWoman },
    { id: 'chief', year: 1950, name: 'Chief', artist: 'Kline', place: 'New York', size: 'l', blurb: 'A few enormous black girders of house-paint crossing a white ground, blown up so large they read like architecture, named after a locomotive Kline knew as a boy. (Under copyright; shown in words.)', palette: ['#1c1c1c', '#e8e4dc', '#3a3a3a'] },
    { id: 'orange-yellow', year: 1953, name: 'No. 61 (Rust and Blue)', artist: 'Rothko', place: 'Los Angeles', size: 'l', blurb: 'Bands of rust and deep blue stacked on a brooding grey-mauve field, the soft edges feathered so the color seems to float and pulse, meant to be seen up close so it fills your whole field of vision.', palette: ['#a85a3a', '#3a4a6a', '#4a3a3a'], imageUrl: ART_IMG.rothkoNo61 },
    { id: 'vir-heroicus', year: 1951, name: 'Vir Heroicus Sublimis', artist: 'Newman', place: 'New York', size: 'xl', blurb: 'A vast red field nearly eight feet tall and almost eighteen wide, crossed by a few thin vertical “zips.” An abstract American painting reaching for the sublime.', palette: ['#a8322a', '#6a1c18', '#1c0c0a'], imageUrl: ART_IMG.newmanVir },
    { id: 'still-cliff', year: 1957, name: '1957-D No. 1', artist: 'Still', place: 'Buffalo', size: 'l', blurb: 'Huge and dark, built from torn, ragged vertical sheets of thick paint like cliffs or peeling bark, with flashes of color stranded violent against the gloom.', palette: ['#2a2620', '#a83232', '#0c0a08'], imageUrl: ART_IMG.stillCliff },
    { id: 'liver-cocks-comb', year: 1944, name: 'The Liver Is the Cock’s Comb', artist: 'Gorky', place: 'New York', size: 'l', blurb: 'A large turbulent canvas of biomorphic near-shapes in acid color, somewhere between a body-map and a hallucination. The literal hinge from Surrealist automatism to Abstract Expressionism.', palette: ['#bf4a6a', '#3a6a4a', '#15120e'], imageUrl: ART_IMG.gorkyLiver },
    { id: 'mountains-sea', year: 1952, name: 'Mountains and Sea', artist: 'Frankenthaler', place: 'New York', size: 'l', blurb: 'Thinned paint poured into raw, unprimed canvas so the color soaks in like a stain: soft luminous veils suggesting a landscape without depicting one. Painted at 23, it launched Color Field.', palette: ['#7aa6c8', '#d6a87a', '#2a3640'], imageUrl: ART_IMG.frankenthalerMtns },
    { id: 'krasner-seasons', year: 1957, name: 'The Seasons', artist: 'Krasner', place: 'New York', size: 'l', blurb: 'Surging fields of organic pink-and-green forms, nearly seventeen feet wide. Krasner did some of her boldest work after Pollock’s death, in the years the legend had decided she was a footnote. (Under copyright; shown in words.)', palette: ['#bf6a8a', '#5a8a4a', '#1c1810'] },
  ],
  artists: [
    { id: 'pollock', name: 'Pollock', role: 'The drip; “action” painting', years: '1912–1956', palette: ['#2a2620', '#a8966a', '#0e0c08'] },
    { id: 'dekooning', name: 'de Kooning', role: 'The figure that would not die', years: '1904–1997', palette: ['#bf6a5a', '#3a4a6a', '#15110c'] },
    { id: 'rothko', name: 'Rothko', role: 'The color-field mystic', years: '1903–1970', palette: ['#d6a23a', '#bf5a2a', '#3a2a1c'] },
    { id: 'newman', name: 'Newman', role: 'The man with one stripe', years: '1905–1970', palette: ['#a8322a', '#6a1c18', '#1c0c0a'] },
    { id: 'krasner', name: 'Krasner', role: 'Written out as “the wife”', years: '1908–1984', palette: ['#bf6a8a', '#5a8a4a', '#1c1810'] },
    { id: 'frankenthaler', name: 'Frankenthaler', role: 'Inventor of the soak-stain', years: '1928–2011', palette: ['#7aa6c8', '#d6a87a', '#2a3640'] },
    { id: 'gorky', name: 'Gorky', role: 'The bridge from Surrealism', years: '1904–1948', palette: ['#bf4a6a', '#3a6a4a', '#15120e'] },
  ],
  parallels: [
    { year: 1947, movement: 'The early Cold War', place: 'Washington & Moscow', blurb: 'The Marshall Plan, NATO, McCarthyism, the bomb. The documented CIA covert promotion of this art abroad made it a showcase of “American freedom” against Soviet socialist realism. But the CIA did not create the movement, the painters had invented it years earlier, and most of them never knew their work was being used this way.' },
    { year: 1945, movement: 'New York takes the crown', place: 'New York', blurb: 'The war broke Europe and emptied Paris of its avant-garde, many of them to New York; American money, a booming gallery and museum scene, and a confident superpower culture shifted the center of art across the Atlantic for the first time.' },
    { year: 1950, movement: 'Existentialism', place: 'Paris & New York', blurb: 'Sartre, Camus, the bomb, a culture of anxiety and individual authenticity, running in parallel with Rosenberg’s idea of the canvas as an existential “act,” the painting as the record of a self facing the void.' },
  ],
  lineage: {
    parents: [
      { label: 'Surrealist automatism', mode: 'art', img: ART_IMG.chiricoSongLove, palette: ['#3a5a6a', '#7a6a4a', '#1c1a14'], note: 'gave: marks straight from the unconscious' },
      { label: 'Arshile Gorky', mode: 'art', palette: ['#bf4a6a', '#3a6a4a', '#15120e'], note: 'gave: the hinge from automatism to abstraction' },
      { label: 'Hans Hofmann', mode: 'art', palette: ['#3a6a8a', '#c8a04a', '#1c2a30'], note: 'gave: “push and pull,” the émigré teacher' },
      { label: 'The WPA', mode: 'civ', palette: ['#5a5048', '#2a2520', '#0e0c0a'], note: 'gave: the survival and the New York milieu' },
    ],
    children: [
      { label: 'Color Field', mode: 'art', palette: ['#d6a23a', '#bf5a2a', '#3a2a1c'], note: 'took: the soak-stain and the pure field' },
      { label: 'Pop Art', mode: 'art', img: ART_IMG.popSupermarket, palette: ['#bf2f6a', '#d6cf3f', '#1c1c1c'], note: 'took (by reaction): cool mass-culture surfaces' },
      { label: 'Minimalism', mode: 'art', palette: ['#5a5a5a', '#2a2a2a', '#0c0c0c'], note: 'took (by reaction): the scale, minus the gesture' },
      { label: 'The NY art world', mode: 'civ', img: ART_IMG.abexNYC, palette: ['#5a6a7a', '#33414c', '#12161a'], note: 'took: the scale, the market, the critic machine' },
    ],
  },
  influenceSummary: 'Abstract Expressionism took Surrealist automatism, Hofmann’s classroom and the survival the WPA had bought, pushed abstraction to its largest and most ambitious scale, and in doing so moved the center of world art from Paris to New York for good.',
  manifesto: {
    absent: true,
    prose: [
      'Surrealism got a manifesto and a pope. Abstract Expressionism got neither. It was never a club with a rulebook; it was a loose set of New York painters who mostly distrusted programs, plus two critics who fought over what they were doing. There is no founding document that names the movement and lays down its rules. The nearest thing is a letter two of them sent the New York Times in 1943, and after that the key texts arrive one at a time, by individual hands, often years apart.',
      'Adolph Gottlieb and Mark Rothko wrote that letter (with Barnett Newman a co-editor), published on 13 June 1943 in reply to a critic, Edward Alden Jewell, who had dismissed their work. Its most-quoted line draws the whole future of the movement in one sentence: “There is no such thing as good painting about nothing.” The subject, they insisted, is everything, and only the tragic and timeless will do. Note the attribution: it is Gottlieb and Rothko’s, with Newman, and it is a letter, not a manifesto.',
      'After that, four voices and no chorus. Pollock published a short statement, “My Painting” (in the journal Possibilities, which Robert Motherwell co-edited, winter 1947–48), describing how he worked on the floor so he could “literally be in the painting.” Newman published “The Sublime Is Now” (1948), the color-field wing’s credo. And the critic Harold Rosenberg published “The American Action Painters” (1952), the essay that coined “action painting” and called the canvas “an arena in which to act.” Two painters’ statements, two critics’ framings, and no manifesto.',
    ],
    sourceUrl: 'https://www.gottliebfoundation.org/about-the-artist',
    sourceLabel: 'Read about the 1943 Gottlieb-Rothko letter',
  },
  canon: [
    { year: 1944, name: 'The Liver Is the Cock’s Comb', artist: 'Gorky', wiki: 'The Liver Is the Cock’s Comb', img: ART_IMG.gorkyLiver },
    { year: 1948, name: 'Onement I', artist: 'Newman', wiki: 'Onement I', img: ART_IMG.newmanOnement },
    { year: 1950, name: 'Autumn Rhythm (Number 30)', artist: 'Pollock', wiki: 'Autumn Rhythm', img: ART_IMG.pollockAutumn },
    { year: 1950, name: 'One: Number 31, 1950', artist: 'Pollock', wiki: 'One: Number 31, 1950' },
    { year: 1950, name: 'Chief', artist: 'Kline', wiki: 'Chief (painting)' },
    { year: 1951, name: 'Vir Heroicus Sublimis', artist: 'Newman', wiki: 'Vir Heroicus Sublimis', img: ART_IMG.newmanVir },
    { year: 1952, name: 'Woman I', artist: 'de Kooning', wiki: 'Woman I', img: ART_IMG.deKooningWoman },
    { year: 1952, name: 'Mountains and Sea', artist: 'Frankenthaler', wiki: 'Mountains and Sea', img: ART_IMG.frankenthalerMtns },
    { year: 1953, name: 'No. 61 (Rust and Blue)', artist: 'Rothko', wiki: 'No. 61 (Rust and Blue)', img: ART_IMG.rothkoNo61 },
    { year: 1957, name: 'The Seasons', artist: 'Krasner', wiki: 'Lee Krasner' },
    { year: 1957, name: '1957-D No. 1', artist: 'Still', wiki: 'Clyfford Still', img: ART_IMG.stillCliff },
    { year: 1958, name: 'The Seagram Murals', artist: 'Rothko', wiki: 'Seagram murals' },
    { year: 1960, name: 'No. 14, 1960', artist: 'Rothko', wiki: 'Mark Rothko' },
    { year: 1961, name: 'Elegy to the Spanish Republic (series)', artist: 'Motherwell', wiki: 'Elegy to the Spanish Republic', img: ART_IMG.motherwellElegy },
    { year: 1957, name: 'Blast, I', artist: 'Gottlieb', wiki: 'Adolph Gottlieb' },
    { year: 1957, name: 'a late gestural abstraction', artist: 'Joan Mitchell', wiki: 'Joan Mitchell', img: ART_IMG.mitchellUntitled },
    { year: 1971, name: 'The Rothko Chapel', artist: 'Rothko', wiki: 'Rothko Chapel' },
  ],
  sections: [
    { id: 'crown', eyebrow: 'New York', dateLabel: 'c.1943', title: 'The center of art crosses the ocean', blurb: 'The war empties Paris, the Surrealist émigrés arrive with automatism, Hofmann teaches, the WPA had kept the painters alive, and the bomb pushes toward “tragic and timeless” subjects. Paris hands the avant-garde to New York.', progress: 1 / 6 },
    { id: 'arena', eyebrow: 'The gesture wing', dateLabel: '1947–1952', title: 'The canvas as an arena', blurb: 'Pollock pours and drips on the floor, the all-over web with no center; de Kooning slashes his Woman into being; Kline paints wall-sized black girders. The act of painting goes on the wall.', progress: 2 / 6 },
    { id: 'fields', eyebrow: 'The color-field wing', dateLabel: '1948–1960', title: 'Fields of color', blurb: 'Rothko’s floating rectangles and his refusal of the Seagram money; Newman’s single zip and “the sublime is now”; Still’s torn cliffs. Stillness and scale instead of gesture, the same ambition aimed the opposite way.', progress: 3 / 6 },
    { id: 'critics', eyebrow: 'The reputation machine', dateLabel: '1950–1955', title: 'Two critics, one fight', blurb: 'The movement goes public (the Irascibles, the 9th Street Show); Rosenberg says the painting is an event, Greenberg says it is a flat object of pure color and shape; and the critics and dealers, not just the painters, manufactured the canon.', progress: 4 / 6 },
    { id: 'cut', eyebrow: 'The half that got cut', dateLabel: '1948–1959', title: 'The women written out', blurb: 'The heroic-male-genius myth crowned a few men and buried the rest. Name them as major artists: Krasner, Frankenthaler (whose soak-stain built Color Field), Mitchell, Elaine de Kooning, Hartigan.', progress: 5 / 6 },
    { id: 'weapon', eyebrow: 'A weapon and a wreck', dateLabel: '1950–1967', title: 'A weapon and a wreck', blurb: 'The documented CIA promotion of AbEx abroad, told straight; Pollock’s worsening drinking and his 1956 death at 44; and the afterlife: New York as the new center, Color Field as the heir, Pop and Minimalism as the reaction.', progress: 1 },
  ],
}

export const ART_MOVEMENT_CONTENT: Record<string, ArtMovementContent> = { real: REALISM, imp: IMPRESSIONISM, postimp: POST_IMP, fauv: FAUVISM, fut: FUTURISM, dada: DADA, sur: SURREALISM, abex: ABSTRACT_EXPRESSIONISM, pop: POP_ART, cubism: CUBISM }
export const ART_WORK_CONTENT: Record<string, ArtWorkContent> = { burial: BURIAL, demoiselles: DEMOISELLES, kahnweiler: KAHNWEILER, 'chair-caning': CHAIR_CANING, horta: HORTA, 'violin-jug': VIOLIN_JUG, 'three-women': THREE_WOMEN, 'the-portuguese': THE_PORTUGUESE, 'gris-breakfast': GRIS_BREAKFAST, 'three-musicians': THREE_MUSICIANS, 'stone-breakers': STONE_BREAKERS, studio: STUDIO, sower: SOWER, gleaners: GLEANERS, angelus: ANGELUS, gargantua: GARGANTUA, carriage: CARRIAGE, 'horse-fair': HORSE_FAIR, 'impression-sunrise': IMPRESSION_SUNRISE, grenouillere: GRENOUILLERE, cradle: CRADLE, 'moulin-galette': MOULIN_GALETTE, 'paris-street': PARIS_STREET, 'dance-class': DANCE_CLASS, absinthe: ABSINTHE, 'boating-party': BOATING_PARTY, 'gare-saint-lazare': GARE_SAINT_LAZARE, 'starry-night': STARRY_NIGHT, 'bedroom-arles': BEDROOM_ARLES, 'grande-jatte': GRANDE_JATTE, 'bathers-asnieres': BATHERS_ASNIERES, 'card-players': CARD_PLAYERS, 'mont-sainte-victoire-lauves': MONT_SAINTE_VICTOIRE_LAUVES, 'vision-sermon': VISION_SERMON, 'moulin-rouge': MOULIN_ROUGE, 'where-do-we-come-from': WHERE_DO_WE_COME_FROM }
export const ART_ARTIST_CONTENT: Record<string, ArtArtistContent> = { picasso: PICASSO }
