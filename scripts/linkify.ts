/**
 * Event name auto-linking for narrative text.
 * Ported from v1 linkifyEvents.tsx — runs at build time on raw markdown.
 */

interface EventInfo {
  id: string
  label: string
  category: string
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// Words that DON'T indicate a compound proper name when capitalized
const COMPOUND_NAME_STOP = /^(The|A|An|In|On|At|By|Of|To|For|From|With|And|Or|But|As|If|So|Into|After|Before|During|Through|Between|Under|Over|About|Its|Their|His|Her|This|That|These|Those|Was|Were|Is|Are|Has|Had|Have|Who|Which|When|Where|While|Not|No|All|Each|Every|Most|Some|Such|What|How|Why|Both|Either|Neither|Ancient|Early|Late|Old|New|Great|First|Last|Many|Young|Modern|Upper|Lower|Northern|Southern|Eastern|Western|Central|Sacred|Golden|Final|Grand|Various|Other|Another|Entire|Former|Latter|Several|Major|Minor|Mid|Near|Far|Full|True|Real|Pure|High|Low|Deep|Rich|Raw|Rare|Half|Small|Large|Long|Short|Heavy|Free|Open|Chief|Main|Key|Dark|Bright)$/i

/** Check if a regex-matched term is a fragment of a larger compound proper name. */
function isCompoundNameFragment(parts: string[], matchIndex: number): boolean {
  const match = parts[matchIndex]
  if (!/^[A-Z]/.test(match)) return false

  if (matchIndex > 0) {
    const prev = parts[matchIndex - 1]
    if (/[A-Z]\w+\s+of\s+$/i.test(prev)) return true
    if (match.length <= 6) {
      const lastWord = prev.match(/(\S+)\s+$/)
      if (lastWord) {
        const cleaned = lastWord[1].replace(/^[^A-Za-z]+/, '')
        if (cleaned && /^[A-Z]/.test(cleaned) && !COMPOUND_NAME_STOP.test(cleaned)) return true
      }
    }
  }

  if (match.length <= 6 && matchIndex < parts.length - 1) {
    const next = parts[matchIndex + 1]
    const firstWord = next.match(/^[^A-Za-z]*([A-Z]\S*)/)
    if (firstWord) {
      const cleaned = firstWord[1].replace(/[^A-Za-z]+$/, '')
      if (cleaned && !COMPOUND_NAME_STOP.test(cleaned)) return true
    }
  }

  return false
}

/** Auto-generate common derivative forms for -ism/-ist terms */
function addDerivatives(term: string, phrases: string[]): void {
  const lower = term.toLowerCase()
  if (lower.endsWith('ism') && term.length >= 5) {
    phrases.push(term.slice(0, -3) + 'ist')
    const stripped = term.slice(0, -3)
    if (stripped.length >= 6) phrases.push(stripped)
  }
  if (lower.endsWith('ist') && term.length >= 5) {
    phrases.push(term.slice(0, -3) + 'ism')
  }
}

const GENERIC_SUFFIXES = /\s+(?:Culture|Civilization|Dynasty|Period|Kingdom|Empire|Tradition|System|Doctrine|Origins?|Production|Construction|Networks?|Settlements?|Records?|Inscriptions?|Vessels?|Casting|Evidence|Marks|Flutes|Village|Pottery|Images|Begins|Emerges|Founded)$/i

const FIRST_WORD_BLOCK = new Set([
  'ancestor', 'ancient', 'battle', 'bronze', 'campaigns', 'cowrie', 'divine', 'duke', 'early',
  'earliest', 'emperor', 'empress', 'fall', 'first', 'general', 'golden', 'great', 'human',
  'introduction', 'iron', 'jade', 'book', 'king', 'lady', 'last', 'late', 'lord', 'mandate',
  'minister', 'music', 'new', 'old', 'oracle', 'origin', 'piece', 'prince', 'princess',
  'queen', 'rammed', 'rice', 'rise', 'ritual', 'royal', 'sacred', 'silk', 'spring', 'state',
  'three', 'five', 'seven', 'eight', 'tomb', 'turquoise', 'hundred', 'school', 'walled',
  'war', 'warring', 'western', 'eastern', 'worship', 'yellow',
  // Geographic/civilization names too generic as standalone matches
  'indus', 'harappan', 'harappa', 'mesopotamia', 'sumerian', 'akkadian', 'babylonian',
  'assyrian', 'persian', 'vedic', 'mature', 'urban', 'trade', 'city',
])

/** Build a map of lowercased phrases → event info. */
export function buildEventMatchMap(
  events: EventInfo[],
): Map<string, EventInfo> {
  const map = new Map<string, EventInfo>()

  for (const evt of events) {
    const label = evt.label
    const phrases: string[] = [label]

    // Strip parenthetical: "Yellow Emperor (Huangdi)" → "Yellow Emperor" + "Huangdi"
    const parenMatch = label.match(/^(.+?)\s*\(([^)]+)\)$/)
    const noParen = parenMatch ? parenMatch[1] : label
    if (noParen !== label && noParen.length >= 5) phrases.push(noParen)
    if (parenMatch && parenMatch[2].length >= 4) phrases.push(parenMatch[2])

    // Strip leading article
    const noArticle = label.replace(/^(The|A|An)\s+/i, '')
    if (noArticle !== label && noArticle.length >= 5) phrases.push(noArticle)

    // Strip generic suffix
    const noSuffix = label.replace(GENERIC_SUFFIXES, '')
    if (noSuffix !== label && noSuffix.length >= 5) phrases.push(noSuffix)

    // First word as standalone (distinctive proper nouns only)
    const words = label.split(/\s+/)
    const firstWord = words[0]
    if (firstWord.length >= 4 && /^[A-Z]/.test(firstWord) && !FIRST_WORD_BLOCK.has(firstWord.toLowerCase())) {
      phrases.push(firstWord)
    }

    // First two words as phrase
    if (words.length >= 3 && !/^(the|a|an)$/i.test(words[0]) && !FIRST_WORD_BLOCK.has(words[0].toLowerCase())) {
      const firstTwo = words.slice(0, 2).join(' ')
      if (firstTwo.length >= 6) phrases.push(firstTwo)
    }

    // Strip title prefix: "King Wu Ding" → "Wu Ding"
    const titleMatch = label.match(/^(King|Queen|Lady|Minister|Emperor|Empress|Prince|Princess|General|Lord)\s+/i)
    if (titleMatch) {
      const noTitle = label.slice(titleMatch[0].length)
      if (noTitle.length >= 4) phrases.push(noTitle)
      if (noParen !== label) {
        const noParenNoTitle = noParen.slice(titleMatch[0].length)
        if (noParenNoTitle.length >= 4 && noParenNoTitle !== noTitle) phrases.push(noParenNoTitle)
      }
      const nameWords = noTitle.split(/\s+/)
      if (nameWords[0].length >= 4) phrases.push(nameWords[0])
      if (nameWords.length >= 1 && nameWords[0].length >= 2) {
        const titlePlusName = titleMatch[1] + ' ' + nameWords[0]
        if (titlePlusName.length >= 6) phrases.push(titlePlusName)
      }
    }

    // "X of Y" pattern → extract Y
    const ofMatch = label.match(/\bof\s+(.+)$/i)
    if (ofMatch && ofMatch[1].length >= 4) {
      const yWords = ofMatch[1].split(/\s+/)
      const allBlocked = yWords.every(w => FIRST_WORD_BLOCK.has(w.toLowerCase()))
      if (!allBlocked) phrases.push(ofMatch[1])
    }

    // Derivatives
    addDerivatives(label, phrases)

    for (const phrase of phrases) {
      const key = phrase.toLowerCase()
      if (key.length >= 4 && !map.has(key)) map.set(key, evt)
      if (key.length >= 4 && !key.endsWith('s')) {
        const plural = key + 's'
        if (!map.has(plural)) map.set(plural, evt)
      }
    }
  }

  return map
}

/**
 * Replace event names in markdown text with <a> tags.
 * Runs on raw markdown before HTML conversion — rehype-raw passes the tags through.
 */
export function linkifyText(
  text: string,
  matchMap: Map<string, EventInfo>,
): string {
  if (matchMap.size === 0) return text

  // Build regex: longest phrases first, word boundaries
  const phrases = [...matchMap.keys()].sort((a, b) => b.length - a.length)
  const pattern = new RegExp(`\\b(${phrases.map(escapeRegex).join('|')})\\b`, 'gi')

  const parts = text.split(pattern)
  const linked = new Set<string>()

  return parts.map((part, i) => {
    const info = matchMap.get(part.toLowerCase())
    const phraseKey = part.toLowerCase()

    if (info && !linked.has(phraseKey) && !isCompoundNameFragment(parts, i)) {
      // Don't linkify inside markdown headings (## lines) or existing links
      // Check if we're inside a heading by looking at preceding text
      const preceding = parts.slice(0, i).join('')
      const lastNewline = preceding.lastIndexOf('\n')
      const currentLine = preceding.slice(lastNewline + 1)
      if (/^#{1,6}\s/.test(currentLine)) return part
      // Don't linkify inside markdown link syntax [text](url)
      if (/\[[^\]]*$/.test(preceding)) return part

      linked.add(phraseKey)
      return `<a class="event-link" data-event-id="${info.id}" data-category="${info.category}">${part}</a>`
    }

    return part
  }).join('')
}
