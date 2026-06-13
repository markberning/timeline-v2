// "Plato" — a thinker deep read from The Greeks. Thin wrapper over the shared PhilosophyReader
// (src/components/philosophy-reader.tsx), which carries the bronze phi- skin + the shared app
// header. The prose lives in ./narrative.ts, a faithful transport of the gated draft in
// audits/philosophy-pipeline/plato-draft-r2.md — never edit content here or there; edit the
// gated .md through the pipeline and re-transport.

import type { Metadata } from 'next'
import { PLATO } from './narrative'
import { PhilosophyReader } from '@/components/philosophy-reader'

export const metadata: Metadata = {
  title: 'Plato · Philosophy · Stuff Happened',
  description:
    "A deep read on Plato: the Forms, the cave and the divided line, the just soul and the just city, the Ring of Gyges, and Diotima's ladder — the system genuinely taught.",
}

export default function PlatoReaderPage() {
  return <PhilosophyReader narr={PLATO} eyebrow="The Greeks" backHref="/philosophy/greeks" />
}
