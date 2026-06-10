// American Revolution — a PHASE landing (war #3). One dynamic route over the 6
// phase lanes in the config; static-exported via generateStaticParams. This file is
// the server wrapper (so it can export generateStaticParams); the UI lives in the
// client PhaseLanding (it calls warCrumbs, which is a client-module function).

import { REVOLUTION as W } from '@/lib/wars/revolution'
import { PhaseLanding } from './phase-landing'

export function generateStaticParams() {
  return W.lanes.filter(l => l.kind === 'phase').map(l => ({ phase: l.id }))
}

export default async function PhasePage({ params }: { params: Promise<{ phase: string }> }) {
  const { phase } = await params
  return <PhaseLanding phase={phase} />
}
