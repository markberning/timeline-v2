// Registry of shipped school "the whole tradition" deep reads — the school-level
// analog of the thinker _reads registry. Each entry is a faithful transport of a
// gated draft (audits/philosophy-pipeline/*-school.read.ts). A school listed here
// renders a full PhilosophyReader at /philosophy/school/<id>/read and shows a live
// "Read the tradition" button on the school hub; schools absent here show no button.
// Add a school by importing its narrative and adding one line — nothing else.

import type { PhiNarr } from '@/components/philosophy-reader'
import { PLATONISM } from './platonism'
import { PRESOCRATICS } from './presocratics'
import { ARISTOTELIANISM } from './aristotelianism'
import { STOICISM } from './stoicism'
import { SCHOLASTICISM } from './scholasticism'
import { RATIONALISM } from './rationalism'

export interface SchoolRead { narr: PhiNarr; eyebrow: string }

export const SCHOOL_READS: Record<string, SchoolRead> = {
  pre: { narr: PRESOCRATICS, eyebrow: 'The tradition' },
  plat: { narr: PLATONISM, eyebrow: 'The tradition' },
  arist: { narr: ARISTOTELIANISM, eyebrow: 'The tradition' },
  stoa: { narr: STOICISM, eyebrow: 'The tradition' },
  schol: { narr: SCHOLASTICISM, eyebrow: 'The tradition' },
  rat: { narr: RATIONALISM, eyebrow: 'The tradition' },
}

export const hasSchoolRead = (id: string): boolean => id in SCHOOL_READS
export const SCHOOL_READ_IDS = Object.keys(SCHOOL_READS)
