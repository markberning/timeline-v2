// One-line, house-voice descriptions of a whole chain — shown under the chain
// label in the Civ home Chains view. Keyed by TlChain.id (reference-data/
// tl-chains.ts). Dry, popular-history voice; describe the arc across the whole
// chain, not any single civ. A chain with no entry here simply renders no blurb.

export const CHAIN_BLURBS: Record<string, string> = {
  // ── Africa ──
  'nubian-tradition': "Egypt's neighbors upriver — who at one point conquered Egypt themselves — from Nubia to Kush to Christian Aksum.",
  'nile-valley': 'Three thousand years of pharaohs, from the first pyramids to Cleopatra’s last stand.',
  'west-african-empires': 'Gold, salt, and the Niger bend — the savanna empires of Mali and Songhai.',

  // ── Americas ──
  'mesoamerican': 'Maize, pyramids, and the ballgame — from the Olmec to the Aztecs, by way of the Maya.',
  'andean-civilizations': 'Pyramids without pottery, lines drawn in the desert, and the road-builders who ended it all: the Inca.',
  'american-republic': 'From 1776 to the Civil Rights movement — a republic arguing with itself the whole way.',
  'north-american-indigenous': 'Cliff towns in the Southwest and earthen mounds on the Mississippi — cities built without the wheel.',

  // ── Asia ──
  'chinese-dynasties': 'Five thousand years of dynasties — Shang bronzes to Mao to the modern superpower.',
  'japanese-civilization': 'The world’s oldest pottery to the postwar boom — samurai, shoguns, and a famously fast modernization.',
  'korean-civilization': 'Three Kingdoms to global powerhouse — the peninsula that gave the world its name for Korea.',
  'indian-subcontinent': 'From the Indus cities to independence — empires, faiths, and invasions stacked five millennia deep.',
  'southeast-asian-maritime': 'Monsoon trade and temple-states — Srivijaya, Angkor, Majapahit, and the Vietnam that outlasted China.',

  // ── Steppe ──
  'central-asian-steppe': 'Horse archers who terrified everyone with a city — from the Scythians to Genghis Khan to Timur.',

  // ── Europe ──
  'northern-european': 'Rome’s unconquerable frontier — Celts, Goths, and the migrations that ended in Viking longships.',
  'greco-roman': 'Aegean palaces to Constantinople — the Greeks, the Romans, and the empire that outlived them both.',
  'western-european-ideas': 'From monasteries to machines — the medieval-to-modern chain of ideas that rebuilt the world.',
  'russian-civilization': 'Kyiv to the Kremlin — Rus’ princes, tsars, and the Soviet superpower that followed.',

  // ── Middle East ──
  'persian-tradition': 'The Iranian plateau across four thousand years — Elam, Cyrus’s empire, and the Safavid shahs.',
  'mesopotamian-succession': 'Where cities, writing, and law were invented — from Sumer to Assyria to Abbasid Baghdad.',
  'anatolian-succession': 'The crossroads of Europe and Asia — from Hittite chariots to Ottoman sultans.',
  'islamic-civilization': 'Conquest, scholarship, and empire — Umayyad expansion to Abbasid Baghdad to the Ottomans.',
}
