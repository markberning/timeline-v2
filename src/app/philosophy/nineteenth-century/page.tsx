// "The nineteenth century" — the fifth Philosophy era. Thin wrapper over the shared
// PhilosophyReader (src/components/philosophy-reader.tsx), which carries the bronze phi- skin +
// the shared app header. The prose lives in ./narrative.ts, a faithful transport of the gated
// draft in audits/philosophy-pipeline/nineteenth-century-draft-r2.md — never edit content here
// or there; edit the gated .md through the pipeline and re-transport.

import type { Metadata } from 'next'
import { NINETEENTH_CENTURY } from './narrative'
import { PhilosophyReader } from '@/components/philosophy-reader'

export const metadata: Metadata = {
  title: 'The nineteenth century · Philosophy · Stuff Happened',
  description:
    'Western philosophy from Mill and Harriet Taylor through Kierkegaard and Marx to Nietzsche: liberty, the leap, alienation, and the death of God that ends the arc.',
}

export default function NineteenthCenturyEraPage() {
  return <PhilosophyReader narr={NINETEENTH_CENTURY} eyebrow="The fifth era" backHref="/philosophy" />
}
