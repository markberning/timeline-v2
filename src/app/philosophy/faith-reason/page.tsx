// "Faith meets reason" — the second Philosophy era. Thin wrapper over the shared
// PhilosophyReader (src/components/philosophy-reader.tsx), which carries the bronze phi- skin
// + the shared app header. The prose lives in ./narrative.ts, a faithful transport of the gated
// draft in audits/philosophy-pipeline/faith-reason-draft-r2.md — never edit content here or
// there; edit the gated .md through the pipeline and re-transport.

import type { Metadata } from 'next'
import { FAITH_REASON } from './narrative'
import { PhilosophyReader } from '@/components/philosophy-reader'

export const metadata: Metadata = {
  title: 'Faith meets reason · Philosophy · Stuff Happened',
  description:
    'Western philosophy from Augustine to Ockham: a thousand years of faith and reason needing each other and pulling apart, across Christianity, Islam, and Judaism.',
}

export default function FaithReasonEraPage() {
  return <PhilosophyReader narr={FAITH_REASON} eyebrow="The second era" backHref="/philosophy" />
}
