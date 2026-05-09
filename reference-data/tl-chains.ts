/**
 * Timeline Chains — ordered sequences of related timelines.
 * A TL can appear in multiple chains. Chains are relationships between TLs,
 * not properties of individual TLs, so they live here rather than in JSON files.
 */

export interface TlChainEntry {
  timelineId: string
  transition?: string // How this TL connects to the NEXT one (1-2 sentences)
}

export interface TlChain {
  id: string
  label: string       // e.g. "Chinese Dynasties"
  shortLabel: string  // Compact form for tight UI rows (e.g. "China")
  origins: string     // What came before the first TL (2-3 sentences)
  entries: TlChainEntry[]
}

export const TL_CHAINS: TlChain[] = [
  // ── AFRICA ──
  // nubian-tradition is listed before nile-valley so that kingdom-of-kush
  // (which belongs to both) gets its primary chip as "Nubia 2/3" — making
  // the Nubian chain read cleanly as 1/3, 2/3, 3/3 when scanning down the
  // Africa region. The first-match rule in rowChainInfo picks whichever
  // chain appears first in this array.
  {
    id: 'nubian-tradition',
    label: 'Nubian Tradition',
    shortLabel: 'Nubia',
    origins: 'The middle Nile valley south of Egypt supported settled communities from at least 5000 BCE. The Kerma culture, centered near the Third Cataract, became one of Africa\'s earliest urban civilizations.',
    entries: [
      { timelineId: 'ancient-nubia', transition: 'Nubian kingdoms maintained their identity even under Egyptian domination, and when Egypt weakened, Kush emerged as a major power in its own right.' },
      { timelineId: 'kingdom-of-kush', transition: 'As Kush declined in the 4th century CE, the Kingdom of Aksum — fueled by Red Sea trade and early Christianity — became the dominant power in northeast Africa.' },
      { timelineId: 'kingdom-of-aksum' },
    ],
  },
  {
    id: 'nile-valley',
    label: 'Nile Valley',
    shortLabel: 'Nile',
    origins: 'Before the first pharaohs, scattered farming communities along the Nile slowly coalesced into two distinct regions — Upper and Lower Egypt. By 3500 BCE, these communities had developed irrigation, pottery, and the beginnings of hieroglyphic writing.',
    // kingdom-of-kush belongs to nubian-tradition (its natural home) and is
    // deliberately not listed here, so the Nile chain chips read 1/4..4/4
    // cleanly. Kush's rule over Egypt is still documented in the prose.
    entries: [
      { timelineId: 'early-dynastic-egypt', transition: 'King Narmer unified Upper and Lower Egypt around 3100 BCE, launching the Age of the Pyramids — when divine pharaohs commanded the resources to build the most ambitious monuments the ancient world had ever seen.' },
      { timelineId: 'old-kingdom-egypt', transition: 'After a century of civil war between rival warlords, Mentuhotep II reunified Egypt and launched a cultural renaissance — the Middle Kingdom. When the Hyksos invaded and were expelled, Egypt erupted into its imperial zenith.' },
      { timelineId: 'new-kingdom-egypt', transition: 'The New Kingdom collapsed into fragmentation as Libyan warlords, Nubian pharaohs, and Persian conquerors fought over the Nile. Alexander the Great\'s conquest launched a final Hellenistic chapter under the Ptolemies.' },
      { timelineId: 'late-egypt' },
    ],
  },
  {
    id: 'west-african-empires',
    label: 'West African Empires',
    shortLabel: 'W Africa',
    origins: 'Trans-Saharan trade in gold, salt, and slaves created wealthy trading centers across the West African savanna. By the 11th century, the Ghana Empire had demonstrated that the region could support large, centralized states.',
    entries: [
      { timelineId: 'mali-empire', transition: 'Mali fragmented in the 15th century as provincial governors asserted independence. The Songhai, once a vassal state, seized control of the vital Niger River trade routes.' },
      { timelineId: 'songhai-empire' },
    ],
  },

  // ── AMERICAS ──
  {
    id: 'mesoamerican',
    label: 'Mesoamerican Civilizations',
    shortLabel: 'Mesoamerica',
    origins: 'Mesoamerica\'s first complex societies emerged from villages that domesticated maize, beans, and squash. By 1500 BCE, monumental architecture and long-distance trade networks were already taking shape along the Gulf Coast.',
    entries: [
      { timelineId: 'olmec-civilization', transition: 'Olmec cultural innovations — the calendar, writing, ballgame, and monumental sculpture — spread across Mesoamerica and deeply influenced the Maya who followed.' },
      { timelineId: 'maya-civilization', transition: 'While Maya city-states persisted in the Yucatán, the Valley of Mexico saw the rise of the Aztec Triple Alliance, which built the largest empire Mesoamerica had ever seen.' },
      { timelineId: 'aztec-empire' },
    ],
  },
  {
    id: 'andean-civilizations',
    label: 'Andean Civilizations',
    shortLabel: 'Andes',
    origins: 'The central Andes — from coastal Peru to the highland altiplano — gave rise to complex societies independently of the Old World. By 3000 BCE, the people of Caral were building monumental pyramids and managing irrigation without pottery, writing, or grain agriculture.',
    entries: [
      { timelineId: 'early-andean-civilizations', transition: 'As Chavín influence waned around 200 BCE, regional cultures exploded in creativity. The Moche built pyramid-temple complexes and mastered gold work on the north coast, while the Nazca etched enormous geoglyphs into the southern desert.' },
      { timelineId: 'andean-kingdoms', transition: 'By 500 CE, two expansionist states — Tiwanaku on the shores of Lake Titicaca and Wari in the central highlands — built the first pan-Andean empires, unifying diverse peoples through roads, religion, and colonization.' }, // label: "Kingdoms of the Desert & Coast"
      { timelineId: 'middle-horizon-empires', transition: 'When Tiwanaku and Wari collapsed around 1000 CE, the Andes fragmented into rival kingdoms. From the Cusco Valley, a small Quechua-speaking group — the Inca — would eventually conquer them all.' }, // label: "Tiwanaku & Wari Empires"
      { timelineId: 'inca-empire' },
    ],
  },
  {
    id: 'american-republic',
    label: 'American Republic',
    shortLabel: 'USA',
    origins: 'Thirteen British colonies along the Atlantic seaboard declared independence in 1776 and fought a revolutionary war to establish a republic governed by a written constitution.',
    entries: [
      { timelineId: 'early-american-republic', transition: 'The young republic expanded westward, but the question of slavery in new territories drove an irreconcilable divide between North and South.' },
      { timelineId: 'antebellum-america', transition: 'The Civil War ended slavery but left the South devastated and the nation facing the enormous challenge of Reconstruction.' },
      { timelineId: 'reconstruction', transition: 'The end of Reconstruction left Black Americans largely unprotected in the South, while industrialization transformed the nation into a global economic power.' },
      { timelineId: 'roaring-twenties', transition: 'The Depression and World War II reshaped American society, and returning Black veterans helped spark the Civil Rights movement that would transform the country again.' },
      { timelineId: 'civil-rights-era' },
    ],
  },

  // ── ASIA ──
  {
    id: 'chinese-dynasties',
    label: 'Chinese Dynasties',
    shortLabel: 'China',
    origins: 'Neolithic cultures along the Yellow and Yangtze Rivers developed agriculture, silk production, and jade working over millennia. By 3000 BCE, walled settlements and ritual jade burials suggest emerging social hierarchies that would eventually coalesce into China\'s first states.',
    entries: [
      { timelineId: 'ancient-china', transition: 'The Xia\'s legacy — real or mythologized — set the template of dynastic rule. The Shang, China\'s first archaeologically verified dynasty, built on these foundations with bronze casting, oracle bones, and the first Chinese writing.' },
      { timelineId: 'shang-dynasty', transition: 'The Shang fell at the Battle of Muye in 1046 BCE when King Wu of Zhou defeated the last Shang king, claiming the Mandate of Heaven.' },
      { timelineId: 'zhou-dynasty', transition: 'The Zhou\'s Warring States era ended when the state of Qin conquered all rivals, unifying China under a single emperor for the first time in 221 BCE.' },
      { timelineId: 'qin-dynasty', transition: 'The Qin collapsed just 15 years after unification, undone by its own brutality. A peasant rebel named Liu Bang seized power and founded the Han, which would rule for four centuries.' },
      { timelineId: 'han-dynasty', transition: 'The Han dissolved into three rival kingdoms in 220 CE. Nearly four centuries of fragmentation followed — an era of war, Buddhist expansion, and cultural blending between Chinese and nomadic peoples.' },
      { timelineId: 'six-dynasties', transition: 'After nearly four centuries of division, a northern general named Yang Jian seized the throne and reunified China as Emperor Wen of Sui in 589 — launching the era of reunification, grand infrastructure, and golden ages that followed.' },
      { timelineId: 'tang-song-china', transition: 'The Song fell to Kublai Khan\'s Mongol armies in 1279. For the first time, all of China was ruled by a foreign dynasty — the Yuan.' },
      { timelineId: 'yuan-dynasty', transition: 'Mongol rule lasted less than a century. A Buddhist monk turned rebel leader, Zhu Yuanzhang, drove out the Yuan and founded the Ming dynasty in 1368.' }, // label: "Yuan Dynasty: Mongol China"
      { timelineId: 'ming-dynasty', transition: 'The Ming weakened from within — corruption, famine, and peasant revolt. In 1644, the Manchu Qing swept in from the north and established China\'s last imperial dynasty.' }, // label: "Ming Dynasty: Great Wall & Treasure Fleets"
      { timelineId: 'qing-dynasty', transition: 'The Qing collapsed in 1912 under the weight of foreign humiliation and internal revolution, ending two millennia of imperial rule.' },
      { timelineId: 'chinese-revolution', transition: 'Mao\'s revolution transformed China into a communist state. After his death in 1976, Deng Xiaoping\'s reforms launched China\'s rise as a global economic superpower.' },
      { timelineId: 'rise-of-china' },
    ],
  },
  {
    id: 'japanese-civilization',
    label: 'Japanese Civilization',
    shortLabel: 'Japan',
    origins: 'Japan\'s earliest inhabitants were the Jōmon people, hunter-gatherers who produced some of the world\'s oldest pottery around 14,000 BCE. Wet-rice agriculture arrived from the Korean peninsula beginning around 900 BCE, transforming settlement patterns and enabling the rise of powerful clans.',
    entries: [
      { timelineId: 'prehistoric-japan', transition: 'In 538, envoys from the Korean kingdom of Baekje presented a Buddhist statue and sutras to the Yamato court. The political crisis that followed launched Japan into the era of literacy, centralized state, and continental influence — the Asuka period.' },
      { timelineId: 'asuka-nara-japan', transition: 'In 794, Emperor Kammu moved the capital to Heian-kyo (modern Kyoto), launching nearly four centuries of courtly literature, aristocratic refinement, and the slow emergence of a warrior class that would eventually overshadow the imperial court.' },
      { timelineId: 'heian-japan', transition: 'The Genpei War ended the Heian era in 1185. Centuries of warrior rule and civil war followed, until Tokugawa Ieyasu unified Japan in 1603 and established 250 years of isolationist peace.' },
      { timelineId: 'edo-japan', transition: 'American warships in 1853 forced Japan open. The Tokugawa shogunate collapsed, and the Meiji Emperor launched a crash modernization that transformed Japan into an industrial power in a single generation.' },
      { timelineId: 'meiji-japan', transition: 'Meiji modernization fueled imperial ambitions that culminated in World War II. After devastating defeat, Japan reinvented itself as a pacifist economic powerhouse.' },
      { timelineId: 'japanese-economic-miracle' },
    ],
  },
  {
    id: 'korean-civilization',
    label: 'Korean Civilization',
    shortLabel: 'Korea',
    origins: 'The Korean peninsula was home to Bronze Age kingdoms from around 700 BCE. The mythical founder Dangun is said to have established Gojoseon in 2333 BCE, but archaeological evidence points to the Three Kingdoms period as the first era of major state formation.',
    entries: [
      { timelineId: 'ancient-korea', transition: 'The Goryeo dynasty unified the peninsula in 936 CE, but Mongol invasions weakened it. In 1392, General Yi Seong-gye overthrew Goryeo and founded the Joseon dynasty.' },
      { timelineId: 'joseon-korea', transition: 'Japanese colonization from 1910 to 1945, followed by the Korean War, left the peninsula divided. South Korea\'s transformation from war-ravaged poverty to technological powerhouse is one of the modern era\'s most dramatic stories.' },
      { timelineId: 'korean-modern' },
    ],
  },
  {
    id: 'indian-subcontinent',
    label: 'Indian Subcontinent',
    shortLabel: 'India',
    origins: 'The Indian subcontinent hosted one of the world\'s earliest urban civilizations along the Indus River. By 2600 BCE, cities like Mohenjo-daro had sophisticated drainage systems, standardized weights, and a still-undeciphered script.',
    entries: [
      { timelineId: 'indus-valley', transition: 'The Indus civilization declined around 1900 BCE, likely due to climate change. Indo-Aryan migrants brought new languages, rituals, and the Vedic tradition that would shape Indian civilization for millennia.' },
      { timelineId: 'vedic-period', transition: 'From the Vedic kingdoms emerged India\'s first great empire when Chandragupta Maurya unified most of the subcontinent under a single rule.' },
      { timelineId: 'maurya-empire', transition: 'The Maurya Empire collapsed in 185 BCE. India fragmented into competing kingdoms — the Shungas, Satavahanas, Indo-Greeks, and eventually the Kushan Empire, which connected India to the Silk Road and spread Buddhism across Central Asia.' },
      { timelineId: 'post-maurya-kingdoms', transition: 'From the patchwork of post-Maurya states, the Gupta dynasty reunified much of northern India and launched a classical golden age of science, literature, and art.' }, // label: "Kushan Era & Silk Road India"
      { timelineId: 'gupta-empire', transition: 'The Gupta Empire dissolved in the 6th century under Hunnic invasions. For six centuries India was ruled by powerful regional dynasties — Cholas, Chalukyas, Palas, Rashtrakutas — until Turkish invaders established the Delhi Sultanate.' },
      { timelineId: 'medieval-india', transition: 'The Delhi Sultanate brought Islam to South Asia and ruled for three centuries. When it weakened, Babur — a descendant of both Timur and Genghis Khan — swept in and founded the Mughal Empire.' }, // label: "India's Regional Kingdoms"
      { timelineId: 'delhi-sultanate', transition: 'The Mughals built India\'s most magnificent empire, but by the 18th century their power crumbled as the British East India Company filled the vacuum, eventually establishing direct colonial rule.' },
      { timelineId: 'mughal-empire', transition: 'Mughal power crumbled in the 18th century as the British East India Company filled the vacuum, eventually establishing direct colonial rule that lasted until independence in 1947.' },
      { timelineId: 'modern-india' },
    ],
  },
  {
    id: 'southeast-asian-maritime',
    label: 'Southeast Asian Maritime',
    shortLabel: 'SE Asia',
    origins: 'The waters between the Indian and Pacific Oceans have been a crossroads of trade since prehistoric times. Indian cultural influence — Hinduism, Buddhism, Sanskrit — spread to Southeast Asia through merchant networks, not conquest.',
    entries: [
      { timelineId: 'srivijaya', transition: 'As Srivijaya\'s maritime dominance faded, the Khmer Empire — centered at Angkor in mainland Southeast Asia — became the region\'s most powerful state.' },
      { timelineId: 'khmer-empire' },
    ],
  },

  // ── STEPPE ──
  {
    id: 'central-asian-steppe',
    label: 'Central Asian Steppe',
    shortLabel: 'Steppe',
    origins: 'The Eurasian steppe — a belt of grassland stretching 5,000 miles from Hungary to Mongolia — produced a succession of nomadic empires built on mounted archery, mobile warfare, and control of the trade routes connecting East and West.',
    entries: [
      { timelineId: 'scythians', transition: 'The Scythians were displaced by the Sarmatians in the west, but on the eastern steppe a new power was rising. Modu Chanyu unified the Xiongnu tribes around 209 BCE, creating the first true steppe empire and the template every successor would follow.' },
      { timelineId: 'xiongnu-huns', transition: 'After the Xiongnu split and their western remnants possibly became the Huns, the steppe saw centuries of smaller confederacies before the Göktürks created the first empire to call itself "Turk."' },
      { timelineId: 'gokturk-khaganate', transition: 'The Göktürk Khaganate fragmented and was absorbed by the Tang Chinese and Uighurs. Four centuries later, Temüjin united the Mongol tribes and launched the largest contiguous land empire in history.' },
      { timelineId: 'mongol-empire', transition: 'The Mongol Empire fractured into successor khanates. From the ruins of the Chagatai Khanate, Timur built a Central Asian empire that rivaled the Mongols in military ambition if not in territorial extent.' },
      { timelineId: 'timurid-empire' },
    ],
  },

  // ── EUROPE ──
  {
    id: 'northern-european',
    label: 'Northern European',
    shortLabel: 'N Europe',
    origins: 'Before the Romans reached northern Europe, Celtic-speaking peoples had built a sophisticated Iron Age civilization across the continent — with salt mines, hilltop fortresses, and an artistic tradition that rivaled anything in the Mediterranean.',
    entries: [
      { timelineId: 'celtic-cultures', transition: 'Roman conquest destroyed Celtic political independence in Gaul and Britain, but Celtic culture survived on the fringes — in Ireland, Scotland, and Wales. Centuries later, Scandinavian raiders burst from the same northern edge of Europe.' },
      { timelineId: 'viking-age' },
    ],
  },
  {
    id: 'greco-roman',
    label: 'Greco-Roman World',
    shortLabel: 'Greco-Roman',
    origins: 'European civilization began on the islands and coasts of the Aegean Sea, where Bronze Age palace cultures developed writing, long-distance trade, and monumental architecture as early as 2700 BCE.',
    entries: [
      { timelineId: 'minoan-civilization', transition: 'The Minoan civilization collapsed around 1450 BCE — possibly from volcanic eruption and Mycenaean invasion. The Mycenaeans adopted Minoan art and religion while building their own warrior culture.' },
      { timelineId: 'mycenaean-civilization', transition: 'Mycenaean civilization collapsed around 1100 BCE in the Bronze Age catastrophe. After a centuries-long "Dark Age," Greek civilization re-emerged with the alphabet, the polis, and democracy.' },
      { timelineId: 'ancient-greece', transition: 'Rome conquered the Greek world by 146 BCE, but Greek culture conquered Rome in return — philosophy, art, religion, and language all flowed east to west.' },
      { timelineId: 'ancient-rome', transition: 'When Rome fell in the west in 476 CE, the eastern half — centered on Constantinople — continued for nearly a thousand years as the Byzantine Empire.' },
      { timelineId: 'byzantine-empire' },
    ],
  },
  {
    id: 'western-european-ideas',
    label: 'Western European Ideas',
    shortLabel: 'W Europe',
    origins: 'After the fall of Rome, medieval Europe preserved fragments of classical learning in monasteries while developing feudalism, Gothic architecture, and the university system.',
    entries: [
      { timelineId: 'early-medieval-europe', transition: 'After Charlemagne and the Ottonian recovery, the year 1000 marked a turning point. Climate warming, agricultural innovation, and urban revival fueled three centuries of unprecedented growth — the High Middle Ages.' },
      { timelineId: 'high-medieval-europe', transition: 'The Mongol shock of 1241 was the first crack in the High Medieval order. Famine, plague, and a hundred-year war between England and France would soon define a new era of crisis.' },
      { timelineId: 'late-medieval-europe', transition: 'The fall of Constantinople in 1453, the completion of the Reconquista in 1492, and the Columbus voyage that same year closed the medieval era. The Italian city-states had already begun a Renaissance that would reshape European thought.' },
      { timelineId: 'renaissance-italy', transition: 'Renaissance humanism encouraged direct observation of nature, laying the groundwork for the Scientific Revolution that would transform how Europeans understood the physical world.' },
      { timelineId: 'scientific-revolution', transition: 'The new scientific thinking fueled the Enlightenment — a broad intellectual movement that applied reason to politics, religion, and social organization.' },
      { timelineId: 'enlightenment', transition: 'Enlightenment ideas about progress and applied science combined with new energy sources to launch the Industrial Revolution, which reshaped economies and societies worldwide.' },
      { timelineId: 'industrial-revolution' },
    ],
  },
  {
    id: 'russian-civilization',
    label: 'Russian Civilization',
    shortLabel: 'Russia',
    origins: 'The Russian state traces its origins to the medieval Kievan Rus\', a federation of Slavic tribes united by Varangian rulers. Mongol domination from the 13th to 15th centuries shaped Russian political culture before the Muscovite tsars consolidated power.',
    entries: [
      { timelineId: 'russian-empire', transition: 'The Russian Empire collapsed in the revolutions of 1917. The Bolsheviks seized power and built the Soviet Union — a communist superpower that would reshape the 20th century.' },
      { timelineId: 'soviet-union' },
    ],
  },

  // ── MIDDLE EAST ──
  // persian-tradition is listed before mesopotamian-succession so that
  // persian-empire (in both chains) gets its primary chip as "Persia 2/3",
  // matching elamite-civilization's "Persia 1/3" and safavid-persia's
  // "Persia 3/3" visually. First-match rule in rowChainInfo.
  {
    id: 'persian-tradition',
    label: 'Persian Tradition',
    shortLabel: 'Persia',
    origins: 'The Iranian plateau has been home to complex societies since at least 3200 BCE. The earliest known civilization in the region, Elam, developed independently of Mesopotamia with its own writing system and cultural traditions.',
    entries: [
      { timelineId: 'elamite-civilization', transition: 'Elam was eventually absorbed into the Achaemenid Persian Empire founded by Cyrus the Great, who built the largest empire the world had yet seen.' },
      { timelineId: 'persian-empire', transition: 'After Alexander\'s conquest and centuries of Parthian and Sassanid rule, the Safavid dynasty reunified Persia in 1501 and established Shia Islam as the state religion.' },
      { timelineId: 'safavid-persia' },
    ],
  },
  {
    id: 'mesopotamian-succession',
    label: 'Mesopotamian Succession',
    shortLabel: 'Mesopotamia',
    origins: 'The fertile land between the Tigris and Euphrates rivers — Mesopotamia — saw the world\'s first cities, writing, and codified law emerge around 3500 BCE. Sumerians, Akkadians, and Babylonians built successive civilizations in this cradle.',
    // persian-empire belongs to persian-tradition (its natural home) and is
    // deliberately not listed here, so the Mesopotamia chain chips read
    // 1/3..3/3 cleanly. Persian rule over Babylon is still documented in
    // the prose and the transition text below.
    entries: [
      { timelineId: 'mesopotamia', transition: 'From the fragmented city-states of Mesopotamia, the Assyrians built the ancient world\'s first true military empire through iron weapons, siege warfare, and systematic terror.' },
      { timelineId: 'assyrian-empire', transition: 'Assyria\'s brutal methods united its enemies. A coalition of Babylonians and Medes destroyed Nineveh in 612 BCE. Within a century, Cyrus the Great\'s Persian Empire absorbed the entire region — and several centuries later, the Arab conquests brought the Abbasid caliphate, ushering in an Islamic golden age of science, philosophy, and art.' },
      { timelineId: 'islamic-golden-age' },
    ],
  },
  {
    id: 'anatolian-succession',
    label: 'Anatolian Powers',
    shortLabel: 'Anatolia',
    origins: 'Anatolia (modern Turkey) has been a crossroads between Europe and Asia since prehistory. The region hosted some of the world\'s earliest settlements, including Çatalhöyük, before Bronze Age kingdoms rose to prominence.',
    entries: [
      { timelineId: 'hittite-empire', transition: 'The Hittite Empire collapsed in the Bronze Age catastrophe around 1200 BCE. Anatolia passed through Phrygian, Lydian, Persian, Greek, Roman, and Byzantine hands before the Ottoman Turks conquered Constantinople in 1453.' },
      { timelineId: 'ottoman-empire' },
    ],
  },

  // ── GLOBAL ──
  // modern-conflicts chain removed — its TLs (world-war-i, world-war-ii,
  // cold-war, war-on-terror) don't exist in the navigator yet. Re-add
  // when those TLs are created.
]

// ══════════════════════════════════════════════════════════════════════════════
// PLANNED CHAINS — not yet implemented, tracked here for roadmap purposes
// ══════════════════════════════════════════════════════════════════════════════
//
// ── TIER 1: Chain existing orphan TLs (minimal new TLs needed) ──
//
// Central Asian Steppe — IMPLEMENTED as 'central-asian-steppe'
//   scythians → xiongnu-huns → gokturk-khaganate → mongol-empire → timurid-empire
//
// Islamic Civilization
//   (umayyad-caliphate — NEW) → islamic-golden-age → (mamluk-sultanate — NEW) → ottoman-empire
//   Theme: Islamic expansion, scholarship, imperial succession
//   Chains 2 existing TLs (islamic-golden-age already in Mesopotamian chain, ottoman in Anatolian)
//   Note: islamic-golden-age and ottoman-empire would appear in multiple chains
//
// Colonial / Atlantic World
//   age-of-exploration → spanish-empire → british-empire → decolonization-africa
//   Alt branch: spanish-empire → latin-american-revolutions
//   Theme: European expansion, colonialism, independence movements
//   Chains 4-5 existing orphans, 0 new TLs needed
//
// Southern African
//   great-zimbabwe → (mutapa-kingdom — NEW) → zulu-kingdom
//   Theme: southern African state formation, trade, resistance
//   Chains 2 existing orphans + 1 new TL
//
// Northern European — IMPLEMENTED as 'northern-european'
//   celtic-cultures → viking-age (+ medieval-scandinavia planned)
//   Theme: pre-Christian northern Europe, raids, settlement, conversion
//
// Western European Extended (expand existing chain or parallel track)
//   Option A: Prepend holy-roman-empire → medieval-europe (already in Ideas chain)
//   Option B: Append french-revolution → industrial-revolution (already in Ideas chain)
//   Option C: Parallel "European Power" chain: holy-roman-empire → protestant-reformation → french-revolution
//   Chains 3 existing orphans
//
// ── TIER 2: Need all-new TLs ──
//
// Southeast Asian Mainland
//   (bagan-myanmar — NEW) → (ayutthaya-siam — NEW) → (dai-viet — NEW)
//   Theme: mainland kingdoms, Theravada Buddhism, monsoon agriculture
//   Gap: SE Asian Maritime chain only covers island/maritime powers
//   3-4 new TLs needed
//
// Ethiopian Highland
//   kingdom-of-aksum (already end of Nubian chain) → (zagwe-dynasty — NEW) → (solomonic-ethiopia — NEW)
//   Theme: Christian kingdom, highland isolation, unique script/calendar
//   Aksum would appear in multiple chains
//   2-3 new TLs needed
//
// Swahili Coast
//   (swahili-coast — NEW) → (kilwa-sultanate — NEW) → (zanzibar — NEW)
//   Theme: Indian Ocean trade, Bantu-Arab cultural fusion, port cities
//   Major African gap — no coverage of East African coast
//   2-3 new TLs needed
//
// North American Indigenous
//   (ancestral-puebloans — NEW) → (cahokia-mississippian — NEW) → (haudenosaunee — NEW)
//   Theme: complex societies without Old World contact, mound building, confederacy
//   Completely absent from current coverage
//   2-3 new TLs needed
//
// Tibetan
//   (tibetan-empire — NEW) → (tibetan-buddhism — NEW)
//   Theme: high-plateau civilization, Buddhist transmission, theocratic state
//   2 new TLs needed
//
// ── PERMANENT ORPHANS (no natural chain) ──
//
// polynesian-voyaging — unique tradition, no predecessor/successor
// arab-israeli-conflict — modern regional conflict, not a civilizational chain
// european-union — modern institution
// climate-energy, pandemic-era — thematic/modern
// digital-age, ai-revolution, internet-social-media, space-age — modern tech (could form a "Digital Age" chain?)
//
// ── UNCHAINED WAR/BATTLE TLs (don't need chains) ──
//
// american-civil-war, american-revolution — war mother TLs
// battle-of-* — battle sub-TLs
// ══════════════════════════════════════════════════════════════════════════════

/** Get all chains that include a given timeline */
export function getChainsForTimeline(tlId: string): TlChain[] {
  return TL_CHAINS.filter(chain => chain.entries.some(e => e.timelineId === tlId))
}

/** Get position info for a timeline within a specific chain */
export function getChainPosition(chain: TlChain, tlId: string): {
  index: number
  total: number
  before: string[]
  after: string[]
  origins: string | null
  transitionIn: string | null
  transitionOut: string | null
} {
  const idx = chain.entries.findIndex(e => e.timelineId === tlId)
  if (idx === -1) return { index: -1, total: chain.entries.length, before: [], after: [], origins: null, transitionIn: null, transitionOut: null }
  return {
    index: idx,
    total: chain.entries.length,
    before: chain.entries.slice(0, idx).map(e => e.timelineId),
    after: chain.entries.slice(idx + 1).map(e => e.timelineId),
    origins: idx === 0 ? chain.origins : null,
    transitionIn: idx > 0 ? (chain.entries[idx - 1].transition ?? null) : null,
    transitionOut: chain.entries[idx].transition ?? null,
  }
}
