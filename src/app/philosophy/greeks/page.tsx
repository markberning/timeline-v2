// "The Greeks" — the first Philosophy era. Thin wrapper over the shared PhilosophyReader
// (src/components/philosophy-reader.tsx), which carries the bronze phi- skin + the shared
// app header. The prose lives in ./narrative.ts, a faithful transport of the gated draft in
// audits/philosophy-pipeline/greeks-draft-r2.md — never edit content here or there; edit the
// gated .md through the pipeline and re-transport.

import type { Metadata } from 'next'
import { GREEKS } from './narrative'
import { PhilosophyReader } from '@/components/philosophy-reader'
import { eraCrumbs } from '@/components/philosophy/phi-chrome'

export const metadata: Metadata = {
  title: 'The Greeks · Philosophy · Stuff Happened',
  description:
    'Western philosophy from Thales to the Hellenistic schools and Rome: one long argument about what the world runs on, what we can know, and how to live.',
}

export default function GreeksEraPage() {
  return <PhilosophyReader narr={GREEKS} eyebrow="The first era" backHref="/philosophy" crumbs={eraCrumbs('greeks')} />
}
