// Registry of shipped thinker "walk the whole system" deep reads. Each entry is a
// faithful transport of a gated draft (audits/philosophy-pipeline/*). A thinker
// listed here renders a full PhilosophyReader at /philosophy/thinker/<id>/system
// and shows a live "Read" button on the hub; thinkers absent here show "Soon".
// Add a thinker by importing its narrative and adding one line — nothing else.

import type { PhiNarr } from '@/components/philosophy-reader'
import { PLATO } from './plato'
import { SOCRATES } from './socrates'
import { HUME } from './hume'

export interface ThinkerRead { narr: PhiNarr; eyebrow: string }

export const THINKER_READS: Record<string, ThinkerRead> = {
  socrates: { narr: SOCRATES, eyebrow: 'Independent' },
  plato: { narr: PLATO, eyebrow: 'Platonism' },
  hume: { narr: HUME, eyebrow: 'Empiricists' },
}

export const hasRead = (id: string): boolean => id in THINKER_READS
export const READ_IDS = Object.keys(THINKER_READS)
