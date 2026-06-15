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
import { CONFESSIONS } from './confessions'
import { CITYOFGOD } from './cityofgod'
import { METAPHYSICS } from './metaphysics'
import { POLITICS } from './politics'
import { NICOMACHEAN } from './nicomachean'
import { DISCOURSES } from './discourses'
import { MEDITATIONS } from './meditations'
import { SUMMA } from './summa'
import { ETHICS } from './ethics'
import { DESC_MEDITATIONS } from './descartes-meditations'
import { LEVIATHAN } from './leviathan'
import { LOCKE_ESSAY } from './locke-essay'
import { HUME_ENQUIRY } from './hume-enquiry'
import { HUME_TREATISE } from './hume-treatise'
import { CPR } from './cpr'
import { GROUNDWORK } from './groundwork'
import { PHENOMENOLOGY } from './phenomenology'

export interface WorkRead { narr: PhiNarr; eyebrow: string }

export const WORK_READS: Record<string, WorkRead> = {
  republic: { narr: REPUBLIC, eyebrow: 'Plato' },
  symposium: { narr: SYMPOSIUM, eyebrow: 'Plato' },
  apology: { narr: APOLOGY, eyebrow: 'Plato' },
  phaedo: { narr: PHAEDO, eyebrow: 'Plato' },
  confessions: { narr: CONFESSIONS, eyebrow: 'Augustine' },
  cityofgod: { narr: CITYOFGOD, eyebrow: 'Augustine' },
  metaphysics: { narr: METAPHYSICS, eyebrow: 'Aristotle' },
  politics: { narr: POLITICS, eyebrow: 'Aristotle' },
  nicomachean: { narr: NICOMACHEAN, eyebrow: 'Aristotle' },
  discourses: { narr: DISCOURSES, eyebrow: 'Epictetus' },
  'meditations-ma': { narr: MEDITATIONS, eyebrow: 'Marcus Aurelius' },
  summa: { narr: SUMMA, eyebrow: 'Aquinas' },
  ethics: { narr: ETHICS, eyebrow: 'Spinoza' },
  meditations: { narr: DESC_MEDITATIONS, eyebrow: 'Descartes' },
  leviathan: { narr: LEVIATHAN, eyebrow: 'Hobbes' },
  essay: { narr: LOCKE_ESSAY, eyebrow: 'Locke' },
  enquiry: { narr: HUME_ENQUIRY, eyebrow: 'Hume' },
  treatise: { narr: HUME_TREATISE, eyebrow: 'Hume' },
  cpr: { narr: CPR, eyebrow: 'Kant' },
  groundwork: { narr: GROUNDWORK, eyebrow: 'Kant' },
  phenomenology: { narr: PHENOMENOLOGY, eyebrow: 'Hegel' },
}

export const hasWorkRead = (id: string): boolean => id in WORK_READS
export const WORK_READ_IDS = Object.keys(WORK_READS)
