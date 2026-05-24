// "On This Day" — a curated, hand-verified set of dated events across the four
// threads, shown on the app home. Dates are real calendar anniversaries (no
// invented days; born-verified, same doctrine as the link layer). The set is a
// seed meant to grow — add entries freely. `href` links into existing content
// where a page exists; omit it for a still-static card.

import type { TlKind } from './navigator-tls'

export interface OnThisDayEvent {
  kind: TlKind
  month: number // 1–12
  day: number   // 1–31
  year: number  // signed — negative = BCE
  title: string
  blurb: string
  href?: string
}

export const ON_THIS_DAY: OnThisDayEvent[] = [
  // ── January ──
  { kind: 'music', month: 1, day: 27, year: 1756, title: 'Mozart is born', blurb: 'Wolfgang Amadeus Mozart is born in Salzburg. He will be composing within five years and dead within thirty-six.', href: '/music' },

  // ── February ──
  { kind: 'music', month: 2, day: 9, year: 1964, title: 'The Beatles play Ed Sullivan', blurb: 'Seventy-three million Americans tune in. Pop music quietly resets to zero.', href: '/music' },

  // ── March ──
  { kind: 'music', month: 3, day: 21, year: 1685, title: 'Bach is born', blurb: 'Johann Sebastian Bach is born in Eisenach, into a family so musical the name was local slang for “musician.”', href: '/music' },
  { kind: 'civ', month: 3, day: 24, year: 1603, title: 'Edo Japan begins', blurb: 'Tokugawa Ieyasu is named shōgun. Two and a half centuries of deliberate isolation start.', href: '/edo-japan' },

  // ── April ──
  { kind: 'war', month: 4, day: 9, year: 1865, title: 'Surrender at Appomattox', blurb: 'Lee surrenders to Grant in a Virginia parlor. Grant lets the Confederates keep their horses for the spring planting.', href: '/war-civil-war' },
  { kind: 'war', month: 4, day: 12, year: 1861, title: 'Fort Sumter is fired on', blurb: 'Confederate guns open on a federal fort in Charleston Harbor. The war nobody could stop has started.', href: '/war-civil-war' },
  { kind: 'art', month: 4, day: 15, year: 1452, title: 'Leonardo da Vinci is born', blurb: 'Born near Vinci: painter, anatomist, engineer, and serial non-finisher of commissions.', href: '/art' },
  { kind: 'civ', month: 4, day: 21, year: -753, title: 'Rome is founded', blurb: 'By tradition, Romulus founds Rome — and promptly kills his brother in an argument about a wall.', href: '/ancient-rome' },

  // ── May ──
  { kind: 'music', month: 5, day: 7, year: 1824, title: 'Beethoven’s Ninth premieres', blurb: 'Vienna. Voices in a symphony for the first time — and the composer couldn’t hear a note of it.', href: '/music' },
  { kind: 'civ', month: 5, day: 24, year: 1543, title: 'Copernicus dies', blurb: 'Nicolaus Copernicus dies the same week his book argues the Earth moves. He reportedly sees the first printed copy on his deathbed.', href: '/scientific-revolution' },
  { kind: 'civ', month: 5, day: 24, year: 1844, title: 'The first telegraph message', blurb: 'Samuel Morse taps out “What hath God wrought” from Washington to Baltimore. Distance stops mattering.', href: '/industrial-revolution' },
  { kind: 'civ', month: 5, day: 24, year: 1883, title: 'The Brooklyn Bridge opens', blurb: 'After fourteen years, 150,000 people cross the first day — not all of them sure it will hold.', href: '/industrial-revolution' },
  { kind: 'civ', month: 5, day: 29, year: 1453, title: 'Constantinople falls', blurb: 'Ottoman cannon breach the Theodosian Walls. The Roman Empire, 1,500 years running, finally stops.', href: '/byzantine-empire' },

  // ── June ──
  { kind: 'art', month: 6, day: 8, year: 1949, title: 'Orwell publishes 1984', blurb: 'Nineteen Eighty-Four hits shelves. The author has seven months to live and the language a new adjective.', href: '/art' },

  // ── July ──
  { kind: 'war', month: 7, day: 1, year: 1863, title: 'Gettysburg begins', blurb: 'Two armies collide almost by accident at a Pennsylvania crossroads town. Three days will decide the war.', href: '/war-civil-war/eastern/gettysburg' },
  { kind: 'war', month: 7, day: 2, year: 1863, title: 'Day 2 at Gettysburg', blurb: 'Chamberlain’s 20th Maine holds Little Round Top with a downhill bayonet charge when the ammunition runs out.', href: '/war-civil-war/eastern/gettysburg' },
  { kind: 'civ', month: 7, day: 4, year: 1776, title: 'A republic declares itself', blurb: 'Thirteen colonies announce they’re done. The hard part — actually winning — comes after.', href: '/early-american-republic' },
  { kind: 'civ', month: 7, day: 14, year: 1789, title: 'The Bastille falls', blurb: 'A Paris mob storms a fortress holding seven prisoners. The symbolism does the rest.', href: '/enlightenment' },
  { kind: 'art', month: 7, day: 29, year: 1890, title: 'Van Gogh dies', blurb: 'Vincent van Gogh dies at 37 having sold, by most counts, a single painting in his lifetime.', href: '/art' },

  // ── August ──
  { kind: 'art', month: 8, day: 21, year: 1911, title: 'The Mona Lisa is stolen', blurb: 'It vanishes from the Louvre. It takes a full day for anyone to notice the wall is bare.', href: '/art' },

  // ── September ──
  { kind: 'civ', month: 9, day: 2, year: -31, title: 'The Battle of Actium', blurb: 'Octavian’s fleet crushes Antony and Cleopatra. The Republic is finished; the Empire is coming.', href: '/ancient-rome' },
  { kind: 'war', month: 9, day: 17, year: 1862, title: 'Antietam', blurb: 'The bloodiest single day in American history — roughly 23,000 casualties along one Maryland creek.', href: '/war-civil-war/eastern/antietam' },

  // ── October ──
  { kind: 'civ', month: 10, day: 12, year: 1492, title: 'Columbus makes landfall', blurb: 'He reaches the Bahamas convinced he’s near Japan. Two worlds collide on a misunderstanding.', href: '/late-medieval-europe' },
  { kind: 'art', month: 10, day: 25, year: 1881, title: 'Picasso is born', blurb: 'Pablo Picasso is born in Málaga. He will spend 91 years refusing to paint the same way twice.', href: '/art' },
  { kind: 'art', month: 10, day: 31, year: 1512, title: 'The Sistine ceiling is unveiled', blurb: 'Michelangelo’s ceiling is revealed after four years flat on his back. He’d wanted to be sculpting.', href: '/art' },

  // ── November ──
  { kind: 'civ', month: 11, day: 9, year: 1989, title: 'The Berlin Wall opens', blurb: 'A confused press conference and a surging crowd do what 28 years of politics couldn’t.', href: '/soviet-union' },

  // ── December ──
  { kind: 'music', month: 12, day: 5, year: 1791, title: 'Mozart dies', blurb: 'Dead at 35 in Vienna, his Requiem unfinished, buried in a common grave in the rain.', href: '/music' },
  { kind: 'civ', month: 12, day: 25, year: 800, title: 'Charlemagne is crowned emperor', blurb: 'The Pope crowns him in Rome, reviving a Western imperial title vacant for 324 years.', href: '/early-medieval-europe' },
]

/** Events whose anniversary is the given month/day, oldest first. */
export function eventsForDay(month: number, day: number): OnThisDayEvent[] {
  return ON_THIS_DAY.filter(e => e.month === month && e.day === day).sort((a, b) => a.year - b.year)
}

/**
 * A stable-per-day sampling for dates with no exact anniversary, so the feed is
 * never empty. Seeded by the day so it stays put through a day and varies across
 * days (a tiny LCG shuffle — deterministic, no Math.random hydration drift).
 */
export function sampleEvents(seed: number, n: number): OnThisDayEvent[] {
  const arr = [...ON_THIS_DAY]
  let s = (seed * 9301 + 49297) % 233280
  const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280 }
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, n)
}
