'use client'

// French and Indian War — home (war #2). Now a thin wrapper over the shared, config-
// driven <WarHome>: every war-specific bit (masthead, card copy, off-field phase
// groupings, the all-battles map) lives in FRENCH_INDIAN.home, and the tab lists come
// from the config. This is the turnkey template — a new war's home is the same one line
// with its own config. (The Civil War keeps its own page for its extra Theatres/Facts
// tabs.) Not linked from the /war front door until there's real content.

import { WarHome } from '@/components/mode/war-home'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

export default function FrenchIndianHome() {
  return <WarHome cfg={FRENCH_INDIAN} />
}
