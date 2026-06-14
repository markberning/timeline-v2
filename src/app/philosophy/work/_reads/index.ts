// Registry of shipped work "read it in the house voice" deep reads — the work-level
// analog of the thinker/school _reads registries. Each entry is a faithful transport
// of a gated draft (audits/philosophy-pipeline/*-work.read.ts). A work listed here
// renders a full PhilosophyReader at /philosophy/work/<id>/read; the work hub's
// "Read it" button goes live when the work's `read` flag is set in philosophy-data.
// Add a work by importing its narrative and adding one line — nothing else.

import type { PhiNarr } from '@/components/philosophy-reader'
import { REPUBLIC } from './republic'
import { SYMPOSIUM } from './symposium'
import { APOLOGY } from './apology'
import { PHAEDO } from './phaedo'

export interface WorkRead { narr: PhiNarr; eyebrow: string }

export const WORK_READS: Record<string, WorkRead> = {
  republic: { narr: REPUBLIC, eyebrow: 'Plato' },
  symposium: { narr: SYMPOSIUM, eyebrow: 'Plato' },
  apology: { narr: APOLOGY, eyebrow: 'Plato' },
  phaedo: { narr: PHAEDO, eyebrow: 'Plato' },
}

export const hasWorkRead = (id: string): boolean => id in WORK_READS
export const WORK_READ_IDS = Object.keys(WORK_READS)
