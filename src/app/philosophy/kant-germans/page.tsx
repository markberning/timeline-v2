// "Kant and the Germans" — the fourth Philosophy era. Thin wrapper over the shared
// PhilosophyReader (src/components/philosophy-reader.tsx), which carries the bronze phi- skin +
// the shared app header. The prose lives in ./narrative.ts, a faithful transport of the gated
// draft in audits/philosophy-pipeline/kant-germans-draft-r2.md — never edit content here or
// there; edit the gated .md through the pipeline and re-transport.

import type { Metadata } from 'next'
import { KANT_GERMANS } from './narrative'
import { PhilosophyReader } from '@/components/philosophy-reader'
import { eraCrumbs } from '@/components/philosophy/phi-chrome'

export const metadata: Metadata = {
  title: 'Kant and the Germans · Philosophy · Stuff Happened',
  description:
    'Western philosophy from Kant through Hegel to Schopenhauer: the mind that shapes the world it knows, Spirit moving through history, and the world as blind will.',
}

export default function KantGermansEraPage() {
  return <PhilosophyReader narr={KANT_GERMANS} eyebrow="The fourth era" backHref="/philosophy" crumbs={eraCrumbs('kant-germans')} />
}
