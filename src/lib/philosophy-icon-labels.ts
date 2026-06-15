// Works that have a generated emblem in /public/philosophy/icons/<workId>.png.
// A work listed here renders its emblem in place of the year glyph (rows + hub hero).
export const WORK_ICONS = new Set<string>(['republic'])

// Short captions for the generated thinker emblems (/public/philosophy/icons) —
// each names the thinker's SIGNATURE IDEA (not just what the emblem depicts),
// shown under the larger emblem on thinker rows (the civ-home-card treatment).
// A thinker WITHOUT an entry here keeps the small inline emblem.
export const THINKER_ICON_LABELS: Record<string, string> = {
  // Pre-Socratics
  thales: 'Everything Is Water',
  pythagoras: 'All Is Number',
  heraclitus: 'Everything Flows',
  parmenides: 'Being Is One',
  // Greeks
  socrates: 'The Examined Life',
  plato: 'The Forms',
  aristotle: 'Form & Purpose',
  plotinus: 'Emanation',
  // Stoics
  zeno: 'Virtue Alone',
  epictetus: 'What We Control',
  aurelius: 'The Inner Citadel',
  // Faith & reason
  augustine: 'The Restless Heart',
  avicenna: 'Necessary Being',
  averroes: 'Faith & Reason',
  maimonides: 'The Hidden God',
  anselm: 'Proof of God',
  aquinas: 'The Five Ways',
  // Rationalists
  descartes: 'I Think, Therefore',
  spinoza: 'God or Nature',
  leibniz: 'The Monads',
  // Empiricists
  hobbes: 'The Social Contract',
  locke: 'The Blank Slate',
  berkeley: 'Only Perception',
  hume: 'Cause Is Habit',
  // German Idealists
  kant: 'The Moral Law',
  fichte: 'The Self Posits',
  hegel: 'The Dialectic',
  schopenhauer: 'World as Will',
  // The nineteenth century
  bentham: 'Greatest Happiness',
  mill: 'On Liberty',
  taylor: 'Women’s Rights',
  kierkegaard: 'Leap of Faith',
  marx: 'Class Struggle',
  nietzsche: 'Will to Power',
}
