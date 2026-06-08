'use client'

// American Revolution — home (war #3). The turnkey test: a thin wrapper over the shared,
// config-driven <WarHome>, exactly like the French & Indian War. Every war-specific bit
// (masthead, card copy, off-field phase groupings, the all-battles map) lives in
// REVOLUTION.home; the tab lists come from the config. Not linked from the /war front
// door until there's real content (sections render "Soon" until built through the gate).

import { WarHome } from '@/components/mode/war-home'
import { REVOLUTION } from '@/lib/wars/revolution'

export default function RevolutionHome() {
  return <WarHome cfg={REVOLUTION} />
}
