// French and Indian War — a PHASE landing (war #2). One dynamic route over the 5
// phase lanes in the config; static-exported via generateStaticParams. This file is
// the server wrapper (so it can export generateStaticParams); the UI lives in the
// client PhaseLanding (it calls warCrumbs, which is a client-module function).

import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'
import { PhaseLanding } from './phase-landing'

export function generateStaticParams() {
  return W.lanes.filter(l => l.kind === 'phase').map(l => ({ phase: l.id }))
}

export default async function PhasePage({ params }: { params: Promise<{ phase: string }> }) {
  const { phase } = await params
  return <PhaseLanding phase={phase} />
}
