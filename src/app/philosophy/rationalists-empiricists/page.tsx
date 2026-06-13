// "The rationalists and the empiricists" — the third Philosophy era. Thin wrapper over the
// shared PhilosophyReader (src/components/philosophy-reader.tsx), which carries the bronze phi-
// skin + the shared app header. The prose lives in ./narrative.ts, a faithful transport of the
// gated draft in audits/philosophy-pipeline/rationalists-empiricists-draft-r2.md — never edit
// content here or there; edit the gated .md through the pipeline and re-transport.

import type { Metadata } from 'next'
import { RATIONALISTS_EMPIRICISTS } from './narrative'
import { PhilosophyReader } from '@/components/philosophy-reader'

export const metadata: Metadata = {
  title: 'The rationalists and the empiricists · Philosophy · Stuff Happened',
  description:
    'Western philosophy from Descartes through Spinoza, Leibniz, Hobbes, Locke and Berkeley to Hume: six minds rebuilding knowledge from scratch, and the Scotsman who showed the foundation might not hold.',
}

export default function RationalistsEmpiricistsEraPage() {
  return <PhilosophyReader narr={RATIONALISTS_EMPIRICISTS} eyebrow="The third era" backHref="/philosophy" />
}
