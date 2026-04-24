export interface GlobeCiv2 {
  id: string
  name: string
  start: number      // year, negative = BCE
  end: number
  capital: [number, number]   // [lon, lat]
  region: string
  summary: string
  cities: string[]
  extent: [number, number][]  // polygon vertices
}

export const GLOBE2_CIVS: GlobeCiv2[] = [
  // ── Mesopotamia / Near East (12) ──────────────────────────────
  { id: "sumer", name: "Sumer (Mesopotamia)", start: -4500, end: -1900, capital: [45.7, 31.3], region: "Southern Mesopotamia", summary: "The earliest urban civilization, Sumer invented cuneiform writing, the wheel for transport, monumental ziggurats, and the first city-states. Its temple-based economies and legal codes shaped every later Mesopotamian culture.", cities: ["Uruk", "Ur", "Eridu", "Lagash", "Nippur"], extent: [[44.5,29.8],[47.5,30.3],[47.2,32.5],[44.0,32.8],[43.5,31.2]] },
  { id: "akkad", name: "Akkadian Empire (Mesopotamia)", start: -2334, end: -2154, capital: [44.4, 33.1], region: "Mesopotamia", summary: "Founded by Sargon of Akkad, the first true empire unified Sumerian city-states under a single ruler and spread Akkadian, a Semitic language, across the Near East.", cities: ["Akkad", "Kish", "Nineveh"], extent: [[40.0,30.0],[48.0,30.5],[48.5,36.5],[39.5,36.0]] },
  { id: "babylon", name: "Babylonia (Mesopotamia)", start: -1894, end: -539, capital: [44.42, 32.54], region: "Mesopotamia", summary: "Babylon rose under Hammurabi, whose famous law code standardized justice. Later Neo-Babylonia under Nebuchadnezzar II rebuilt the city with the legendary Hanging Gardens and Ishtar Gate.", cities: ["Babylon", "Sippar", "Borsippa"], extent: [[43.0,30.5],[47.0,30.8],[47.0,34.5],[42.5,34.2]] },
  { id: "assyria", name: "Assyria", start: -2025, end: -609, capital: [43.15, 36.37], region: "Upper Mesopotamia", summary: "A martial empire famed for iron weaponry, siege engineering, and the vast library of Ashurbanipal. At its height it stretched from Egypt to the Persian Gulf.", cities: ["Nineveh", "Assur", "Nimrud", "Dur-Sharrukin"], extent: [[38.0,34.5],[48.0,34.0],[48.5,38.0],[37.5,37.5]] },
  { id: "elam", name: "Elam", start: -3200, end: -539, capital: [48.25, 32.19], region: "Southwest Iran", summary: "A long-lived civilization east of Mesopotamia, Elam developed its own writing (Linear Elamite) and rivalled Sumer, Akkad and Babylon for two millennia.", cities: ["Susa", "Anshan"], extent: [[47.5,30.0],[51.5,30.5],[51.0,33.8],[47.0,33.5]] },
  { id: "hittites", name: "Hittite Empire", start: -1650, end: -1178, capital: [34.62, 40.02], region: "Anatolia", summary: "An Indo-European power in central Anatolia, the Hittites fought Egypt to a stalemate at Kadesh and produced the earliest known peace treaty. Masters of iron and chariot warfare.", cities: ["Hattusa", "Tarsa", "Kanesh"], extent: [[29.0,37.0],[39.0,37.5],[40.0,41.5],[28.5,41.0]] },
  { id: "phoenicia", name: "Phoenicia", start: -1500, end: -300, capital: [35.52, 33.27], region: "Levantine coast", summary: "Sea-faring traders who spread the first true alphabet across the Mediterranean. Their colonies stretched from Cyprus to Spain; Carthage was the greatest of them.", cities: ["Tyre", "Sidon", "Byblos", "Arwad"], extent: [[34.8,33.0],[36.0,33.0],[36.2,34.8],[35.0,34.8]] },
  { id: "israel", name: "Kingdom of Israel / Judah", start: -1020, end: -586, capital: [35.23, 31.78], region: "Southern Levant", summary: "The united and divided Hebrew kingdoms produced the foundational texts of Judaism. The First Temple in Jerusalem was destroyed by the Babylonians in 586 BCE.", cities: ["Jerusalem", "Samaria", "Lachish"], extent: [[34.5,31.0],[35.9,31.2],[35.9,33.3],[34.8,33.1]] },
  { id: "urartu", name: "Urartu", start: -860, end: -590, capital: [43.32, 38.51], region: "Armenian Highlands", summary: "A rugged mountain kingdom centered on Lake Van, Urartu rivaled Assyria and pioneered irrigation works still visible today.", cities: ["Tushpa", "Erebuni"], extent: [[39.0,37.5],[46.5,38.0],[46.5,41.0],[39.5,40.5]] },
  { id: "achaemenid", name: "Achaemenid Persia (Persian Empire)", start: -550, end: -330, capital: [52.89, 29.93], region: "Iranian Plateau", summary: "Founded by Cyrus the Great, the first world empire stretched from the Indus to Libya. It pioneered royal roads, satrapies, and religious tolerance before falling to Alexander.", cities: ["Persepolis", "Susa", "Pasargadae", "Ecbatana"], extent: [[26.0,25.0],[72.0,28.0],[72.0,42.0],[26.0,42.0]] },
  { id: "parthia", name: "Parthian Empire (Persian Empire)", start: -247, end: 224, capital: [55.0, 37.5], region: "Iran & Mesopotamia", summary: "Horse-archer rivals to Rome who ruled the Silk Road for nearly 500 years. The Parthian shot — firing backward at full gallop — became legendary.", cities: ["Ctesiphon", "Nisa", "Hecatompylos"], extent: [[40.0,28.0],[70.0,30.0],[70.0,42.0],[40.0,41.0]] },
  { id: "sassanid", name: "Sassanid Empire (Persian Empire)", start: 224, end: 651, capital: [44.58, 33.09], region: "Iran & Mesopotamia", summary: "The last pre-Islamic Persian empire, patrons of Zoroastrianism, architecture, and art. Endless wars with Byzantium exhausted both before the Arab conquest.", cities: ["Ctesiphon", "Istakhr", "Gundeshapur"], extent: [[38.0,25.0],[72.0,28.0],[72.0,42.0],[38.0,41.0]] },

  // ── Egypt / North Africa (8) ──────────────────────────────────
  { id: "egypt-early", name: "Early Egypt", start: -5000, end: -2686, capital: [31.25, 30.05], region: "Nile Valley", summary: "From Saharan herders to the first pharaohs — Egypt's predynastic and early dynastic period saw the unification of Upper and Lower Egypt, the invention of hieroglyphics, and the first monumental tombs.", cities: ["Memphis", "Abydos", "Hierakonpolis", "Buto"], extent: [[29.5,24.0],[33.5,24.0],[34.0,31.7],[29.0,31.5]] },
  { id: "egypt-old", name: "Old Kingdom Egypt", start: -2686, end: -2181, capital: [31.13, 29.98], region: "Nile Valley", summary: "The age of the pyramid-builders. Pharaohs Khufu, Khafre, and Menkaure raised the Giza complex; a centralized state and bureaucracy produced some of humanity's most iconic monuments.", cities: ["Memphis", "Giza", "Saqqara"], extent: [[30.0,22.0],[33.5,22.0],[34.0,31.7],[29.5,31.5]] },
  { id: "egypt-new", name: "New Kingdom Egypt", start: -2055, end: -1069, capital: [32.64, 25.72], region: "Nile Valley & Levant", summary: "Egypt's imperial age, producing Hatshepsut, Akhenaten's monotheism, Tutankhamun, and Ramesses II. Its reach stretched into the Levant and deep Nubia.", cities: ["Thebes", "Memphis", "Pi-Ramesses", "Amarna"], extent: [[29.0,20.0],[37.0,22.0],[37.0,32.5],[28.5,32.0]] },
  { id: "nubia", name: "Ancient Nubia", start: -3500, end: -1070, capital: [30.97, 19.60], region: "Upper Nile", summary: "Egypt's southern rival and occasional conqueror, Nubia developed its own kingdoms along the Upper Nile — from the cattle-herding A-Group through the fortress-building Kingdom of Kerma, which rivalled the pharaohs for a millennium.", cities: ["Kerma", "Buhen", "Faras", "Semna"], extent: [[29.5,17.0],[35.0,17.0],[35.0,24.0],[29.0,23.5]] },
  { id: "kush", name: "Kingdom of Kush", start: -1070, end: 350, capital: [33.72, 18.43], region: "Nubia (Sudan)", summary: "Nubian kingdoms of Napata and Meroë built more pyramids than Egypt, conquered Egypt as its 25th Dynasty, and developed their own Meroitic script.", cities: ["Napata", "Meroë", "Kerma"], extent: [[30.0,14.0],[37.0,14.0],[37.0,22.5],[29.5,22.0]] },
  { id: "carthage", name: "Carthage", start: -814, end: -146, capital: [10.33, 36.85], region: "North Africa & W. Mediterranean", summary: "A Phoenician colony that grew into a maritime empire dominating the western Mediterranean. Hannibal's elephants crossed the Alps; Rome's final answer was total destruction.", cities: ["Carthage", "Utica", "Gadir", "Panormus"], extent: [[-6.0,35.0],[11.5,36.5],[11.5,37.5],[-6.0,36.2]] },
  { id: "aksum", name: "Kingdom of Aksum", start: 80, end: 940, capital: [38.72, 14.13], region: "Ethiopian Highlands", summary: "An Indian Ocean trade power minting its own coinage, Aksum converted to Christianity in the 4th century and raised towering stone obelisks still standing today.", cities: ["Aksum", "Adulis", "Matara"], extent: [[36.0,12.0],[42.0,12.5],[42.0,17.5],[36.0,17.0]] },
  { id: "mali", name: "Mali Empire", start: 1226, end: 1670, capital: [-8.0, 12.65], region: "West Africa", summary: "Mansa Musa's legendary hajj distributed so much gold it inflated Egyptian currency for years. Timbuktu became a continent-wide center of learning.", cities: ["Timbuktu", "Niani", "Djenné"], extent: [[-16.0,10.0],[4.0,10.0],[4.0,22.0],[-16.0,22.0]] },
  { id: "songhai", name: "Songhai Empire", start: 1464, end: 1591, capital: [-1.48, 17.03], region: "West Africa", summary: "Successor to Mali and one of the largest states in African history, Songhai's cities along the Niger were centers of trade and Islamic scholarship.", cities: ["Gao", "Timbuktu", "Djenné"], extent: [[-10.0,10.0],[8.0,10.0],[8.0,20.0],[-10.0,20.0]] },

  // ── Mediterranean / Europe (13) ───────────────────────────────
  { id: "minoan", name: "Minoan Civilization", start: -2700, end: -1450, capital: [25.16, 35.3], region: "Crete", summary: "Europe's first complex civilization, the Minoans built sprawling palaces like Knossos, produced vivid frescoes, and dominated Aegean trade until volcanic catastrophe and Mycenaean takeover.", cities: ["Knossos", "Phaistos", "Kato Zakros"], extent: [[23.5,34.8],[26.5,34.8],[26.5,35.7],[23.5,35.7]] },
  { id: "mycenaean", name: "Mycenaean Greece", start: -1600, end: -1100, capital: [22.75, 37.73], region: "Mainland Greece", summary: "Bronze Age warrior kingdoms with massive cyclopean walls and shaft-grave gold. The world of Homer's Iliad collapsed mysteriously around 1100 BCE.", cities: ["Mycenae", "Tiryns", "Pylos", "Thebes"], extent: [[20.5,36.5],[24.0,36.5],[24.0,40.5],[20.5,40.5]] },
  { id: "greece-classical", name: "Classical Greece (Ancient Greece)", start: -510, end: -323, capital: [23.73, 37.98], region: "Greece & Aegean", summary: "The age of Athenian democracy, Socrates, the Parthenon, Greek tragedy, and the Peloponnesian War. A constellation of city-states that reshaped philosophy, politics, and art.", cities: ["Athens", "Sparta", "Corinth", "Thebes"], extent: [[19.5,35.5],[28.0,35.5],[28.0,41.5],[19.5,41.5]] },
  { id: "macedon", name: "Macedonian Empire (Ancient Greece)", start: -336, end: -323, capital: [22.52, 40.64], region: "Greece to India", summary: "Alexander the Great's thirteen-year conquest stretched from Greece to the Punjab, fusing Greek and Eastern cultures into the Hellenistic world.", cities: ["Pella", "Babylon", "Alexandria"], extent: [[20.0,30.0],[72.0,30.0],[72.0,42.0],[20.0,42.0]] },
  { id: "etruscan", name: "Etruscan Civilization (Ancient Rome)", start: -900, end: -27, capital: [11.79, 42.42], region: "Central Italy", summary: "Italy's pre-Roman masters, skilled in metallurgy, tomb painting, and urban planning. Their language remains only partly deciphered; Rome inherited their engineering and religion.", cities: ["Tarquinii", "Veii", "Cerveteri", "Populonia"], extent: [[10.0,41.0],[13.5,41.0],[13.5,44.0],[10.0,44.0]] },
  { id: "roman-republic", name: "Roman Republic (Ancient Rome)", start: -509, end: -27, capital: [12.48, 41.89], region: "Italy & Mediterranean", summary: "Five centuries of senatorial rule, citizen legions, and relentless expansion. The Republic conquered the Mediterranean before civil wars ended it with Caesar and Augustus.", cities: ["Rome", "Capua", "Tarentum"], extent: [[-6.0,33.0],[30.0,33.0],[30.0,48.0],[-6.0,48.0]] },
  { id: "roman-empire", name: "Roman Empire (Ancient Rome)", start: -27, end: 476, capital: [12.48, 41.89], region: "Mediterranean & Europe", summary: "At its peak the empire ruled 70 million people from Britain to Mesopotamia. Roman law, roads, aqueducts, and Latin shaped the Western world for two millennia.", cities: ["Rome", "Alexandria", "Antioch", "Carthage", "Londinium"], extent: [[-10.0,30.0],[45.0,30.0],[45.0,56.0],[-10.0,56.0]] },
  { id: "byzantine", name: "Byzantine Empire", start: 330, end: 1453, capital: [28.98, 41.01], region: "E. Mediterranean", summary: "The eastern continuation of Rome, preserving classical learning and Orthodox Christianity for a thousand years. Constantinople's walls held until Ottoman cannon in 1453.", cities: ["Constantinople", "Thessalonica", "Antioch", "Ravenna"], extent: [[20.0,30.0],[42.0,30.0],[42.0,47.0],[20.0,47.0]] },
  { id: "celts", name: "Celtic Cultures (La Tène)", start: -450, end: -50, capital: [8.73, 47.0], region: "Western Europe", summary: "Iron Age peoples spanning Gaul, Britain, Iberia, and Galatia, famed for intricate metalwork, druidic religion, and fierce resistance to Rome.", cities: ["Bibracte", "Alesia", "Gergovia", "Camulodunum"], extent: [[-10.0,43.0],[18.0,43.0],[18.0,56.0],[-10.0,56.0]] },
  { id: "franks", name: "Frankish Kingdom (Medieval Europe)", start: 481, end: 843, capital: [2.35, 48.86], region: "Western Europe", summary: "From Clovis to Charlemagne, the Franks united much of western Europe and revived the title of Roman Emperor in 800, shaping medieval Christendom.", cities: ["Paris", "Aachen", "Soissons"], extent: [[-5.0,42.0],[15.0,42.0],[15.0,54.0],[-5.0,54.0]] },
  { id: "vikings", name: "Norse / Vikings", start: 793, end: 1066, capital: [10.75, 59.91], region: "Scandinavia & beyond", summary: "Seaborne raiders, traders, and settlers who reached Baghdad, Byzantium, Iceland, Greenland and Newfoundland. Their longships rewrote medieval geography.", cities: ["Uppsala", "Hedeby", "Jorvik", "Dublin"], extent: [[4.0,55.0],[30.0,55.0],[30.0,71.0],[4.0,71.0]] },
  { id: "kievan-rus", name: "Kievan Rus'", start: 882, end: 1240, capital: [30.52, 50.45], region: "Eastern Europe", summary: "A federation of East Slavic principalities along river trade routes from the Baltic to the Black Sea. Conversion to Orthodox Christianity under Vladimir I in 988 set Russia's cultural course.", cities: ["Kiev", "Novgorod", "Chernigov"], extent: [[22.0,48.0],[42.0,48.0],[42.0,62.0],[22.0,62.0]] },
  { id: "hre", name: "Holy Roman Empire (Medieval Europe)", start: 962, end: 1806, capital: [8.68, 50.11], region: "Central Europe", summary: "A loose confederation of hundreds of German-speaking principalities, bishoprics, and free cities under an elected emperor. Voltaire quipped it was neither holy, Roman, nor an empire.", cities: ["Aachen", "Frankfurt", "Prague", "Vienna"], extent: [[3.0,44.0],[18.0,44.0],[18.0,56.0],[3.0,56.0]] },

  // ── Eurasian Steppe (6) ───────────────────────────────────────
  { id: "scythians", name: "Scythians", start: -800, end: -200, capital: [35.0, 47.0], region: "Pontic Steppe", summary: "Horse nomads of the Eurasian steppe renowned for gold craftsmanship and mounted archery. Herodotus described them vividly; their kurgan burial mounds still dot the grasslands.", cities: ["Kamenskoe", "Gelonus"], extent: [[25.0,43.0],[55.0,43.0],[55.0,55.0],[25.0,55.0]] },
  { id: "xiongnu", name: "Xiongnu Confederacy", start: -209, end: 93, capital: [106.0, 48.5], region: "Mongolian Steppe", summary: "The great nomadic rival of Han China, the Xiongnu's raids prompted the Great Wall's expansion. Their decline reshaped the steppe and perhaps sent the Huns westward.", cities: ["Luut"], extent: [[85.0,40.0],[125.0,40.0],[125.0,55.0],[85.0,55.0]] },
  { id: "huns", name: "Huns", start: 370, end: 469, capital: [20.0, 47.0], region: "Central & Eastern Europe", summary: "Under Attila the Huns terrorized both halves of the Roman Empire, extracting tribute from Constantinople and raiding into Gaul and Italy before their confederation collapsed.", cities: [], extent: [[15.0,43.0],[45.0,43.0],[45.0,54.0],[15.0,54.0]] },
  { id: "gokturk", name: "Göktürk Khaganate", start: 552, end: 744, capital: [101.5, 47.5], region: "Inner Asia", summary: "The first people to call themselves 'Turk', the Göktürks ruled a vast steppe empire and left the Orkhon Inscriptions — the earliest Turkic writing.", cities: ["Ötüken"], extent: [[70.0,38.0],[125.0,38.0],[125.0,55.0],[70.0,55.0]] },
  { id: "mongol", name: "Mongol Empire", start: 1206, end: 1368, capital: [106.93, 47.92], region: "Eurasia", summary: "Genghis Khan and his heirs built the largest contiguous empire in history, from Korea to Hungary. Pax Mongolica briefly knit Eurasia together along the Silk Road.", cities: ["Karakorum", "Khanbaliq (Beijing)", "Samarkand"], extent: [[30.0,30.0],[135.0,30.0],[135.0,60.0],[30.0,60.0]] },
  { id: "timurid", name: "Timurid Empire", start: 1370, end: 1507, capital: [66.97, 39.65], region: "Central Asia & Iran", summary: "Tamerlane's conquests rivaled the Mongols in scope and brutality; his descendants patronized a cultural golden age at Samarkand, Herat, and later Mughal India.", cities: ["Samarkand", "Herat", "Bukhara"], extent: [[45.0,25.0],[78.0,25.0],[78.0,45.0],[45.0,45.0]] },

  // ── South Asia (7) ────────────────────────────────────────────
  { id: "indus", name: "Indus Valley Civilization", start: -3300, end: -1300, capital: [68.14, 27.33], region: "Indus basin", summary: "A vast Bronze Age urban culture with planned cities, standardized weights, and an undeciphered script. Mohenjo-daro and Harappa had advanced drainage and baths unmatched for millennia.", cities: ["Mohenjo-daro", "Harappa", "Dholavira", "Lothal"], extent: [[66.0,22.0],[77.0,22.0],[77.0,33.0],[66.0,33.0]] },
  { id: "vedic", name: "Vedic Period", start: -1500, end: -322, capital: [80.95, 26.85], region: "Northern India", summary: "The Indo-Aryan migrations brought Sanskrit, the Vedas, and the caste system. An oral civilization — hymns memorized without writing became the foundation of Hinduism, while the late Vedic age produced Buddhism and Jainism.", cities: ["Hastinapura", "Kashi (Varanasi)", "Taxila", "Kaushambi"], extent: [[69.0,20.0],[88.0,20.0],[88.0,32.0],[69.0,32.0]] },
  { id: "maurya", name: "Mauryan Empire", start: -322, end: -185, capital: [85.14, 25.61], region: "South Asia", summary: "The first pan-Indian empire, reaching its zenith under Ashoka whose conversion to Buddhism reshaped Asian religion. Pillar edicts spread his dharma across the subcontinent.", cities: ["Pataliputra", "Taxila", "Ujjain"], extent: [[67.0,8.0],[92.0,8.0],[92.0,35.0],[67.0,35.0]] },
  { id: "gupta", name: "Gupta Empire", start: 320, end: 550, capital: [85.14, 25.61], region: "Northern India", summary: "India's classical golden age: the decimal system and zero, Kalidasa's poetry, Nalanda university, and masterworks of temple sculpture.", cities: ["Pataliputra", "Ujjain", "Prayag"], extent: [[70.0,15.0],[90.0,15.0],[90.0,32.0],[70.0,32.0]] },
  { id: "chola", name: "Chola Empire (Medieval India)", start: 848, end: 1279, capital: [79.12, 10.78], region: "South India & Maritime SE Asia", summary: "A Tamil naval power that projected force to Sri Lanka, the Maldives, and Srivijaya. Its bronze Nataraja statues and granite temples are high points of Indian art.", cities: ["Thanjavur", "Gangaikonda Cholapuram", "Kanchipuram"], extent: [[74.0,7.0],[82.0,7.0],[82.0,16.0],[74.0,16.0]] },
  { id: "delhi", name: "Delhi Sultanate", start: 1206, end: 1526, capital: [77.21, 28.61], region: "Northern India", summary: "Five successive Turko-Afghan dynasties ruled much of India for three centuries, introducing Indo-Islamic architecture like the Qutb Minar.", cities: ["Delhi", "Daulatabad", "Multan"], extent: [[70.0,12.0],[90.0,12.0],[90.0,33.0],[70.0,33.0]] },
  { id: "vijayanagara", name: "Vijayanagara Empire (Medieval India)", start: 1336, end: 1646, capital: [76.47, 15.34], region: "South India", summary: "A Hindu empire that held southern India against northern sultanates for over two centuries. Its capital Hampi was said to rival Rome in splendor.", cities: ["Hampi", "Penukonda", "Chandragiri"], extent: [[74.0,8.0],[82.0,8.0],[82.0,18.0],[74.0,18.0]] },
  { id: "mughal", name: "Mughal Empire", start: 1526, end: 1857, capital: [78.04, 27.17], region: "South Asia", summary: "Descendants of Timur and Genghis who built the Taj Mahal, Red Fort, and a cosmopolitan Persianate court. At its peak it ruled a quarter of the world economy.", cities: ["Agra", "Delhi", "Lahore", "Fatehpur Sikri"], extent: [[66.0,8.0],[95.0,8.0],[95.0,36.0],[66.0,36.0]] },

  // ── East Asia (14) ────────────────────────────────────────────
  { id: "erlitou", name: "Erlitou Culture (Ancient China)", start: -1900, end: -1500, capital: [112.7, 34.71], region: "Yellow River basin", summary: "Often identified with the semi-legendary Xia dynasty, Erlitou produced China's earliest bronze ritual vessels and palace architecture.", cities: ["Erlitou"], extent: [[110.0,33.0],[116.0,33.0],[116.0,37.0],[110.0,37.0]] },
  { id: "shang", name: "Shang Dynasty", start: -1600, end: -1046, capital: [114.35, 36.1], region: "Yellow River basin", summary: "China's first historically attested dynasty, famed for oracle-bone divination, exquisite bronze casting, and the earliest Chinese writing.", cities: ["Yinxu (Anyang)", "Zhengzhou", "Erligang"], extent: [[108.0,32.0],[120.0,32.0],[120.0,40.0],[108.0,40.0]] },
  { id: "zhou", name: "Zhou Dynasty", start: -1046, end: -256, capital: [108.95, 34.27], region: "Northern China", summary: "The longest Chinese dynasty. Its later centuries hosted the Hundred Schools of Thought — Confucius, Laozi, Mozi — as the realm fragmented into Warring States.", cities: ["Hao", "Luoyang", "Linzi"], extent: [[105.0,30.0],[122.0,30.0],[122.0,41.0],[105.0,41.0]] },
  { id: "qin", name: "Qin Dynasty", start: -221, end: -206, capital: [108.95, 34.27], region: "China", summary: "Qin Shi Huang unified China, standardized script, currency, and axle widths, built the first Great Wall, and was buried with the Terracotta Army.", cities: ["Xianyang"], extent: [[102.0,22.0],[122.0,22.0],[122.0,42.0],[102.0,42.0]] },
  { id: "han", name: "Han Dynasty", start: -206, end: 220, capital: [108.95, 34.27], region: "China & Central Asia", summary: "A Chinese golden age contemporary with Rome. Paper, the seismograph, the Silk Road, and Confucian bureaucracy all took lasting form under the Han.", cities: ["Chang'an", "Luoyang"], extent: [[95.0,20.0],[125.0,20.0],[125.0,45.0],[95.0,45.0]] },
  { id: "tang", name: "Tang Dynasty", start: 618, end: 907, capital: [108.95, 34.27], region: "China & Central Asia", summary: "A cosmopolitan empire whose capital Chang'an was the world's largest city. Tang poetry, printing, porcelain, and open borders defined a cultural high-water mark.", cities: ["Chang'an", "Luoyang", "Yangzhou"], extent: [[75.0,18.0],[125.0,18.0],[125.0,50.0],[75.0,50.0]] },
  { id: "song", name: "Song Dynasty", start: 960, end: 1279, capital: [114.35, 34.76], region: "China", summary: "An era of gunpowder weapons, movable type, paper money, and a commercial revolution. Song painting and Neo-Confucian philosophy reshaped East Asian thought.", cities: ["Kaifeng", "Hangzhou"], extent: [[98.0,20.0],[122.0,20.0],[122.0,42.0],[98.0,42.0]] },
  { id: "yuan", name: "Yuan Dynasty", start: 1271, end: 1368, capital: [116.4, 39.9], region: "China & Mongolia", summary: "Kublai Khan's Mongol dynasty ruled China and welcomed travelers like Marco Polo. Beijing became the imperial capital it remains today.", cities: ["Khanbaliq (Beijing)", "Shangdu"], extent: [[75.0,20.0],[130.0,20.0],[130.0,55.0],[75.0,55.0]] },
  { id: "ming", name: "Ming Dynasty", start: 1368, end: 1644, capital: [116.4, 39.9], region: "China", summary: "Builders of today's Great Wall and Forbidden City. Admiral Zheng He's treasure fleets reached East Africa decades before Columbus sailed.", cities: ["Beijing", "Nanjing"], extent: [[98.0,20.0],[125.0,20.0],[125.0,45.0],[98.0,45.0]] },
  { id: "goguryeo", name: "Goguryeo (Ancient Korea)", start: -37, end: 668, capital: [125.75, 39.03], region: "Korea & Manchuria", summary: "A militarized kingdom straddling Korea and Manchuria that repulsed massive Sui and Tang invasions before finally falling. Its tomb murals are UNESCO treasures.", cities: ["Pyongyang", "Gungnae"], extent: [[118.0,37.0],[132.0,37.0],[132.0,46.0],[118.0,46.0]] },
  { id: "silla", name: "Silla / Unified Silla (Ancient Korea)", start: -57, end: 935, capital: [129.22, 35.86], region: "Korean Peninsula", summary: "Unifier of the Three Kingdoms of Korea in 668, Silla built Buddhist masterpieces like Seokguram Grotto and ruled a peninsula-wide realm for nearly three centuries.", cities: ["Gyeongju"], extent: [[125.0,33.0],[130.0,33.0],[130.0,39.0],[125.0,39.0]] },
  { id: "goryeo", name: "Goryeo (Korean Civilization)", start: 918, end: 1392, capital: [126.56, 37.97], region: "Korean Peninsula", summary: "Namesake of modern 'Korea', Goryeo produced the world's first movable metal type and celadon ceramics, and carved the Tripitaka Koreana onto 81,000 woodblocks.", cities: ["Kaesong"], extent: [[124.5,33.0],[131.0,33.0],[131.0,43.0],[124.5,43.0]] },
  { id: "yamato", name: "Yamato / Nara Japan (Ancient Japan)", start: 250, end: 794, capital: [135.8, 34.69], region: "Japan", summary: "The formative Japanese state, adopting Chinese writing, Buddhism, and imperial ritual. The Kojiki and Nihon Shoki were compiled in this era.", cities: ["Nara", "Asuka"], extent: [[130.0,31.0],[141.0,31.0],[141.0,41.0],[130.0,41.0]] },
  { id: "heian", name: "Heian Japan (Ancient Japan)", start: 794, end: 1185, capital: [135.77, 35.01], region: "Japan", summary: "A courtly golden age that produced The Tale of Genji, elegant kana script, and a refined aristocratic aesthetic that still defines 'classical' Japan.", cities: ["Heian-kyō (Kyoto)"], extent: [[130.0,31.0],[142.0,31.0],[142.0,42.0],[130.0,42.0]] },

  // ── Southeast Asia (4) ────────────────────────────────────────
  { id: "khmer", name: "Khmer Empire", start: 802, end: 1431, capital: [103.87, 13.44], region: "Mainland SE Asia", summary: "Builders of Angkor Wat, the largest religious monument on Earth. A vast hydraulic civilization ruled much of Southeast Asia for six centuries.", cities: ["Angkor", "Hariharalaya", "Yasodharapura"], extent: [[99.0,10.0],[108.0,10.0],[108.0,18.0],[99.0,18.0]] },
  { id: "srivijaya", name: "Srivijaya", start: 650, end: 1377, capital: [104.76, -2.98], region: "Maritime SE Asia", summary: "A Buddhist thalassocracy on Sumatra that controlled the Strait of Malacca and hosted thousands of monks studying Sanskrit texts.", cities: ["Palembang", "Kedah"], extent: [[98.0,-6.0],[115.0,-6.0],[115.0,8.0],[98.0,8.0]] },
  { id: "majapahit", name: "Majapahit", start: 1293, end: 1527, capital: [112.43, -7.55], region: "Maritime SE Asia", summary: "A Javanese empire whose reach across the archipelago is remembered as a classical Indonesian golden age.", cities: ["Trowulan"], extent: [[95.0,-11.0],[132.0,-11.0],[132.0,6.0],[95.0,6.0]] },
  { id: "dai-viet", name: "Đại Việt", start: 939, end: 1804, capital: [105.85, 21.03], region: "Northern Vietnam", summary: "Successive Vietnamese dynasties that repelled Chinese, Mongol, and Ming invasions while expanding southward to their modern frontiers.", cities: ["Thăng Long (Hanoi)", "Huế"], extent: [[102.0,8.5],[110.0,8.5],[110.0,23.5],[102.0,23.5]] },

  // ── Islamic World (5) ─────────────────────────────────────────
  { id: "rashidun", name: "Rashidun & Umayyad Caliphates", start: 632, end: 750, capital: [36.3, 33.51], region: "Near East & N. Africa", summary: "Within a century of Muhammad's death, Arab armies conquered from Spain to the Indus — one of history's most rapid expansions. Damascus became the Umayyad capital.", cities: ["Medina", "Damascus", "Cordoba"], extent: [[-10.0,15.0],[75.0,15.0],[75.0,45.0],[-10.0,45.0]] },
  { id: "abbasid", name: "Abbasid Caliphate (Islamic Golden Age)", start: 750, end: 1258, capital: [44.36, 33.34], region: "Middle East", summary: "Baghdad's House of Wisdom led the Islamic Golden Age in mathematics, medicine, and translation. Algebra, algorithms, and hospitals all trace to this era.", cities: ["Baghdad", "Samarra", "Basra"], extent: [[-5.0,18.0],[70.0,18.0],[70.0,42.0],[-5.0,42.0]] },
  { id: "al-andalus", name: "Al-Andalus", start: 711, end: 1492, capital: [-4.78, 37.89], region: "Iberian Peninsula", summary: "Islamic Spain's convivencia of Muslims, Christians, and Jews produced the Alhambra, Cordoba's Mezquita, and a flowering of philosophy and science.", cities: ["Cordoba", "Granada", "Seville", "Toledo"], extent: [[-10.0,36.0],[3.0,36.0],[3.0,44.0],[-10.0,44.0]] },
  { id: "ottoman", name: "Ottoman Empire", start: 1299, end: 1922, capital: [28.98, 41.01], region: "SE Europe, Near East, N. Africa", summary: "Six centuries of rule from the Balkans to Arabia. The conquest of Constantinople in 1453 ended the Byzantine era; Suleiman the Magnificent presided over a cultural zenith.", cities: ["Constantinople", "Bursa", "Edirne", "Cairo"], extent: [[-5.0,15.0],[50.0,15.0],[50.0,48.0],[-5.0,48.0]] },
  { id: "safavid", name: "Safavid Empire", start: 1501, end: 1736, capital: [51.67, 32.65], region: "Iran", summary: "Re-established Persian statehood and made Twelver Shia Islam the official religion — a decision that still shapes the Middle East. Isfahan's Naqsh-e Jahan square is a world heritage jewel.", cities: ["Isfahan", "Tabriz", "Qazvin"], extent: [[42.0,25.0],[66.0,25.0],[66.0,42.0],[42.0,42.0]] },

  // ── Americas (14) ─────────────────────────────────────────────
  { id: "olmec", name: "Olmec Civilization", start: -1500, end: -400, capital: [-94.17, 18.12], region: "Gulf Coast Mexico", summary: "Mesoamerica's 'mother culture', famed for colossal basalt heads carved without metal tools and a ritual ballgame passed to every later civilization.", cities: ["San Lorenzo", "La Venta", "Tres Zapotes"], extent: [[-96.0,17.0],[-92.0,17.0],[-92.0,19.0],[-96.0,19.0]] },
  { id: "maya", name: "Maya Civilization", start: -1000, end: 1697, capital: [-89.62, 17.22], region: "Yucatán & Central America", summary: "An astronomically precise civilization of city-states that invented the only fully developed pre-Columbian writing system and a dazzling zero-based mathematics.", cities: ["Tikal", "Palenque", "Copán", "Chichén Itzá"], extent: [[-93.0,13.5],[-86.5,13.5],[-86.5,22.5],[-93.0,22.5]] },
  { id: "teotihuacan", name: "Teotihuacan", start: -100, end: 550, capital: [-98.84, 19.69], region: "Central Mexico", summary: "A metropolis of 100,000+ dominated by the Pyramid of the Sun. Its grid-planned streets and multi-ethnic apartment compounds influenced all of Mesoamerica.", cities: ["Teotihuacan"], extent: [[-99.5,19.0],[-98.0,19.0],[-98.0,20.5],[-99.5,20.5]] },
  { id: "zapotec", name: "Zapotec Civilization", start: -500, end: 1521, capital: [-96.77, 17.04], region: "Oaxaca Valley", summary: "Builders of the mountaintop capital Monte Albán and one of Mesoamerica's earliest writing systems.", cities: ["Monte Albán", "Mitla"], extent: [[-98.0,15.5],[-95.0,15.5],[-95.0,18.5],[-98.0,18.5]] },
  { id: "toltec", name: "Toltec Civilization", start: 900, end: 1168, capital: [-99.34, 20.06], region: "Central Mexico", summary: "Warrior-artisans whose capital Tula bristled with giant atlantean stone warriors. Later Aztecs claimed Toltec descent as a mark of legitimacy.", cities: ["Tula"], extent: [[-101.0,19.0],[-98.0,19.0],[-98.0,22.0],[-101.0,22.0]] },
  { id: "aztec", name: "Aztec Empire", start: 1345, end: 1521, capital: [-99.13, 19.43], region: "Central Mexico", summary: "The Triple Alliance centered on Tenochtitlan, an island city of 200,000 with chinampa farms and a tribute empire stretching to both coasts — destroyed by Cortés in 1521.", cities: ["Tenochtitlan", "Texcoco", "Tlacopan"], extent: [[-103.0,15.0],[-94.0,15.0],[-94.0,22.0],[-103.0,22.0]] },
  { id: "chavin", name: "Chavín Culture (Early Andean)", start: -900, end: -200, capital: [-77.18, -9.59], region: "Andean highlands", summary: "A pan-Andean religious tradition that spread from the temple complex of Chavín de Huántar, unifying early Peruvian art and iconography.", cities: ["Chavín de Huántar"], extent: [[-79.0,-12.0],[-75.0,-12.0],[-75.0,-6.0],[-79.0,-6.0]] },
  { id: "nazca", name: "Nazca Culture (Andean Kingdoms)", start: -100, end: 800, capital: [-74.94, -14.83], region: "Southern Peru coast", summary: "Creators of the enormous Nazca Lines — geoglyphs only fully visible from the air — and a vivid polychrome ceramic tradition.", cities: ["Cahuachi"], extent: [[-76.5,-16.0],[-73.5,-16.0],[-73.5,-13.0],[-76.5,-13.0]] },
  { id: "moche", name: "Moche Culture (Andean Kingdoms)", start: 100, end: 700, capital: [-78.82, -8.12], region: "Northern Peru coast", summary: "Skilled metallurgists and ceramicists whose astonishingly realistic portrait vessels offer a direct window into Andean faces and daily life.", cities: ["Cerro Blanco", "Sipán"], extent: [[-81.0,-10.0],[-77.5,-10.0],[-77.5,-5.5],[-81.0,-5.5]] },
  { id: "tiwanaku", name: "Tiwanaku (Tiwanaku & Wari)", start: 300, end: 1000, capital: [-68.67, -16.55], region: "Lake Titicaca basin", summary: "A high-altitude empire at 3,850 m whose monumental gateways and raised-field agriculture sustained a polity across the Andes for seven centuries.", cities: ["Tiwanaku"], extent: [[-71.0,-18.0],[-66.0,-18.0],[-66.0,-14.0],[-71.0,-14.0]] },
  { id: "wari", name: "Wari Empire (Tiwanaku & Wari)", start: 500, end: 1000, capital: [-74.22, -13.06], region: "Peruvian Andes", summary: "Often called the first Andean empire, Wari pioneered road networks and administrative centers that the Inca later inherited and expanded.", cities: ["Huari"], extent: [[-79.0,-16.0],[-72.0,-16.0],[-72.0,-8.0],[-79.0,-8.0]] },
  { id: "inca", name: "Inca Empire", start: 1438, end: 1533, capital: [-71.97, -13.53], region: "Andean South America", summary: "The largest pre-Columbian empire, knit together by 40,000 km of roads, rope bridges, and quipu record-keeping — all without the wheel or written script.", cities: ["Cuzco", "Machu Picchu", "Quito"], extent: [[-81.0,-36.0],[-66.0,-36.0],[-66.0,1.0],[-81.0,1.0]] },
  { id: "mississippian", name: "Mississippian Culture", start: 800, end: 1600, capital: [-90.06, 38.66], region: "Eastern North America", summary: "Mound-building chiefdoms across the eastern woodlands. Cahokia, near modern St. Louis, was larger than contemporary London.", cities: ["Cahokia", "Moundville", "Etowah"], extent: [[-96.0,29.0],[-80.0,29.0],[-80.0,42.0],[-96.0,42.0]] },
  { id: "pueblo", name: "Ancestral Puebloans", start: -100, end: 1300, capital: [-107.99, 36.06], region: "American Southwest", summary: "Builders of cliff dwellings like Mesa Verde and the great houses of Chaco Canyon, linked by hundreds of miles of straight ceremonial roads.", cities: ["Chaco Canyon", "Mesa Verde", "Aztec Ruins"], extent: [[-114.0,33.0],[-105.0,33.0],[-105.0,40.0],[-114.0,40.0]] },

  // ── Oceania (1) ───────────────────────────────────────────────
  { id: "polynesia", name: "Polynesian Voyagers", start: -1500, end: 1300, capital: [-149.57, -17.67], region: "Pacific Ocean", summary: "The greatest wayfinders in human history, settling a triangle from Hawaii to New Zealand to Rapa Nui using stars, swells, and double-hulled canoes.", cities: ["Tahiti", "Hawaiki", "Rapa Nui"], extent: [[-180.0,-30.0],[-130.0,-30.0],[-130.0,25.0],[-180.0,25.0]] },
]

export interface Globe2Group {
  id: string
  label: string
  color: string      // hex color for pins, region polygon, drawer labels
  ids: string[]
}

export const GLOBE2_GROUPS: Globe2Group[] = [
  { id: "mesopotamia", label: "Mesopotamia & Near East", color: "#d97706", ids: ["sumer","akkad","babylon","assyria","elam","hittites","phoenicia","israel","urartu","achaemenid","parthia","sassanid"] },
  { id: "egypt", label: "Egypt & Africa", color: "#b44d3b", ids: ["egypt-early","egypt-old","egypt-new","nubia","kush","carthage","aksum","mali","songhai"] },
  { id: "europe", label: "Mediterranean & Europe", color: "#2563eb", ids: ["minoan","mycenaean","greece-classical","macedon","etruscan","roman-republic","roman-empire","byzantine","celts","franks","vikings","kievan-rus","hre"] },
  { id: "steppe", label: "Eurasian Steppe", color: "#9a6e3a", ids: ["scythians","xiongnu","huns","gokturk","mongol","timurid"] },
  { id: "south-asia", label: "South Asia", color: "#7c3aed", ids: ["indus","vedic","maurya","gupta","chola","delhi","vijayanagara","mughal"] },
  { id: "east-asia", label: "East Asia", color: "#dc2626", ids: ["erlitou","shang","zhou","qin","han","tang","song","yuan","ming","goguryeo","silla","goryeo","yamato","heian"] },
  { id: "se-asia", label: "Southeast Asia", color: "#0d9488", ids: ["khmer","srivijaya","majapahit","dai-viet"] },
  { id: "islamic", label: "Islamic World", color: "#059669", ids: ["rashidun","abbasid","al-andalus","ottoman","safavid"] },
  { id: "americas", label: "The Americas", color: "#16a34a", ids: ["olmec","maya","teotihuacan","zapotec","toltec","aztec","chavin","nazca","moche","tiwanaku","wari","inca","mississippian","pueblo"] },
  { id: "oceania", label: "Oceania", color: "#0ea5e9", ids: ["polynesia"] },
]

/** Look up the group color for a given civ id. */
const _civColorMap = new Map<string, string>()
for (const g of GLOBE2_GROUPS) {
  for (const id of g.ids) _civColorMap.set(id, g.color)
}
export function getCivColor(civId: string): string {
  return _civColorMap.get(civId) ?? '#d97706'
}

/**
 * Map globe civ IDs → reader page slugs (only civs with shipped content).
 * Globe has finer-grained civs than the reader; multiple globe civs can map
 * to the same reader TL (e.g. Sumer/Akkad/Babylon → mesopotamia).
 */
const GLOBE_TO_READER: Record<string, string> = {
  sumer: 'mesopotamia',
  akkad: 'mesopotamia',
  babylon: 'mesopotamia',
  assyria: 'assyrian-empire',
  elam: 'elamite-civilization',
  hittites: 'hittite-empire',
  achaemenid: 'persian-empire',
  parthia: 'persian-empire',
  sassanid: 'persian-empire',
  'egypt-early': 'early-dynastic-egypt',
  'egypt-old': 'old-kingdom-egypt',
  'egypt-new': 'new-kingdom-egypt',
  nubia: 'ancient-nubia',
  kush: 'kingdom-of-kush',
  indus: 'indus-valley',
  vedic: 'vedic-period',
  maurya: 'maurya-empire',
  erlitou: 'ancient-china',
  shang: 'shang-dynasty',
  zhou: 'zhou-dynasty',
  qin: 'qin-dynasty',
  minoan: 'minoan-civilization',
  mycenaean: 'mycenaean-civilization',
  olmec: 'olmec-civilization',
  chavin: 'early-andean-civilizations',
  goguryeo: 'ancient-korea',
  silla: 'ancient-korea',
}

/** Get the reader page slug for a globe civ, or null if no content. */
export function getReaderSlug(civId: string): string | null {
  return GLOBE_TO_READER[civId] ?? null
}

/**
 * Chain info for each globe civ: chain label, position (1-based), total members.
 * Maps globe civ ID → its reader TL's chain membership.
 */
export interface ChainInfo {
  label: string       // e.g. "Chinese Dynasties"
  shortLabel: string  // e.g. "China"
  pos: number         // 1-based position in chain
  total: number       // total members in chain
}

// Chain definitions (matches reference-data/tl-chains.ts)
const CHAINS: { label: string; shortLabel: string; members: string[] }[] = [
  { label: 'Mesopotamian Succession', shortLabel: 'Mesopotamia', members: ['mesopotamia','assyrian-empire','islamic-golden-age'] },
  { label: 'Nile Valley', shortLabel: 'Nile', members: ['early-dynastic-egypt','old-kingdom-egypt','new-kingdom-egypt','late-egypt'] },
  { label: 'Nubian Tradition', shortLabel: 'Nubia', members: ['ancient-nubia','kingdom-of-kush','kingdom-of-aksum'] },
  { label: 'Persian Tradition', shortLabel: 'Persia', members: ['elamite-civilization','persian-empire','safavid-persia'] },
  { label: 'Indian Subcontinent', shortLabel: 'India', members: ['indus-valley','vedic-period','maurya-empire','post-maurya-kingdoms','gupta-empire','medieval-india','delhi-sultanate','mughal-empire','modern-india'] },
  { label: 'Chinese Dynasties', shortLabel: 'China', members: ['ancient-china','shang-dynasty','zhou-dynasty','qin-dynasty','han-dynasty','six-dynasties','tang-song-china','yuan-dynasty','ming-dynasty','qing-dynasty','chinese-revolution','rise-of-china'] },
  { label: 'Korean Civilization', shortLabel: 'Korea', members: ['ancient-korea','joseon-korea','korean-modern'] },
  { label: 'Greco-Roman World', shortLabel: 'Greco-Roman', members: ['minoan-civilization','mycenaean-civilization','ancient-greece','ancient-rome','byzantine-empire'] },
  { label: 'Anatolian Powers', shortLabel: 'Anatolia', members: ['hittite-empire','ottoman-empire'] },
  { label: 'Mesoamerican Civilizations', shortLabel: 'Mesoamerica', members: ['olmec-civilization','maya-civilization','aztec-empire'] },
  { label: 'Andean Civilizations', shortLabel: 'Andes', members: ['early-andean-civilizations','andean-kingdoms','middle-horizon-empires','inca-empire'] },
]

// Build a lookup: reader TL id → chain info
const _readerChainMap = new Map<string, ChainInfo>()
for (const chain of CHAINS) {
  for (let i = 0; i < chain.members.length; i++) {
    _readerChainMap.set(chain.members[i], {
      label: chain.label,
      shortLabel: chain.shortLabel,
      pos: i + 1,
      total: chain.members.length,
    })
  }
}

/** Get chain info for a globe civ, or null if not in a chain. */
export function getCivChain(civId: string): ChainInfo | null {
  const readerSlug = GLOBE_TO_READER[civId]
  if (!readerSlug) return null
  return _readerChainMap.get(readerSlug) ?? null
}

export const TIME_MIN = -5000
export const TIME_MAX = 1700

export interface GlobeEra {
  y: number
  label: string
}

export const ERAS: GlobeEra[] = [
  { y: -3000, label: 'Bronze Age' },
  { y: -1000, label: 'Iron Age' },
  { y: 0, label: 'Classical' },
  { y: 500, label: 'Medieval' },
  { y: 1500, label: 'Early Modern' },
]
