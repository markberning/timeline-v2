// Registry of shipped thinker "walk the whole system" deep reads. Each entry is a
// faithful transport of a gated draft (audits/philosophy-pipeline/*). A thinker
// listed here renders a full PhilosophyReader at /philosophy/thinker/<id>/system
// and shows a live "Read" button on the hub; thinkers absent here show "Soon".
// Add a thinker by importing its narrative and adding one line — nothing else.

import type { PhiNarr } from '@/components/philosophy-reader'
import { PLATO } from './plato'
import { SOCRATES } from './socrates'
import { HUME } from './hume'
import { DESCARTES } from './descartes'
import { ARISTOTLE } from './aristotle'
import { KANT } from './kant'
import { AQUINAS } from './aquinas'
import { ZENO_CITIUM } from './zeno-citium'
import { MARCUS_AURELIUS } from './marcus-aurelius'
import { NIETZSCHE } from './nietzsche'
import { AUGUSTINE } from './augustine'
import { THALES } from './thales'
import { PYTHAGORAS } from './pythagoras'
import { HERACLITUS } from './heraclitus'
import { PARMENIDES } from './parmenides'
import { PLOTINUS } from './plotinus'
import { AVICENNA } from './avicenna'
import { AVERROES } from './averroes'
import { MAIMONIDES } from './maimonides'
import { EPICTETUS } from './epictetus'
import { ANSELM } from './anselm'
import { OCKHAM } from './ockham'
import { SPINOZA } from './spinoza'
import { LEIBNIZ } from './leibniz'
import { HOBBES } from './hobbes'
import { LOCKE } from './locke'
import { BERKELEY } from './berkeley'
import { HEGEL } from './hegel'
import { FICHTE } from './fichte'

export interface ThinkerRead { narr: PhiNarr; eyebrow: string }

export const THINKER_READS: Record<string, ThinkerRead> = {
  thales: { narr: THALES, eyebrow: 'Pre-Socratics' },
  pythagoras: { narr: PYTHAGORAS, eyebrow: 'Pre-Socratics' },
  heraclitus: { narr: HERACLITUS, eyebrow: 'Pre-Socratics' },
  parmenides: { narr: PARMENIDES, eyebrow: 'Pre-Socratics' },
  socrates: { narr: SOCRATES, eyebrow: 'Independent' },
  plato: { narr: PLATO, eyebrow: 'Platonism' },
  plotinus: { narr: PLOTINUS, eyebrow: 'Platonism' },
  aristotle: { narr: ARISTOTLE, eyebrow: 'Aristotelians' },
  avicenna: { narr: AVICENNA, eyebrow: 'Aristotelians' },
  averroes: { narr: AVERROES, eyebrow: 'Aristotelians' },
  maimonides: { narr: MAIMONIDES, eyebrow: 'Aristotelians' },
  anselm: { narr: ANSELM, eyebrow: 'Scholastics' },
  aquinas: { narr: AQUINAS, eyebrow: 'Scholastics' },
  ockham: { narr: OCKHAM, eyebrow: 'Scholastics' },
  hobbes: { narr: HOBBES, eyebrow: 'Empiricists' },
  locke: { narr: LOCKE, eyebrow: 'Empiricists' },
  berkeley: { narr: BERKELEY, eyebrow: 'Empiricists' },
  hume: { narr: HUME, eyebrow: 'Empiricists' },
  descartes: { narr: DESCARTES, eyebrow: 'Rationalists' },
  spinoza: { narr: SPINOZA, eyebrow: 'Rationalists' },
  leibniz: { narr: LEIBNIZ, eyebrow: 'Rationalists' },
  kant: { narr: KANT, eyebrow: 'German Idealists' },
  fichte: { narr: FICHTE, eyebrow: 'German Idealists' },
  hegel: { narr: HEGEL, eyebrow: 'German Idealists' },
  zeno: { narr: ZENO_CITIUM, eyebrow: 'Stoics' },
  epictetus: { narr: EPICTETUS, eyebrow: 'Stoics' },
  aurelius: { narr: MARCUS_AURELIUS, eyebrow: 'Stoics' },
  nietzsche: { narr: NIETZSCHE, eyebrow: 'Independent' },
  augustine: { narr: AUGUSTINE, eyebrow: 'Platonism' },
}

export const hasRead = (id: string): boolean => id in THINKER_READS
export const READ_IDS = Object.keys(THINKER_READS)
