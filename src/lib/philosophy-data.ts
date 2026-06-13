// ─────────────────────────────────────────────────────────────────────────────
// Philosophy data spine — the SINGLE source the argument-map home and the
// school › thinker › work drilldown both read from. Schools (incl. "Independent"
// for the loners), thinkers, their major works, and the influence edges (who
// taught / jolted / refuted whom).
//
// FACT DISCIPLINE: names, dates, school assignments, and work titles/years here
// are reference-level facts. The reader-facing PROSE (thinker reads, work reads,
// section glosses) is authored separately through the gated philosophy pipeline
// (audits/philosophy-content-pipeline.md) and flagged with `read: true` only once
// it has shipped. A thinker/work with no read yet renders a clean "on the way".
// ─────────────────────────────────────────────────────────────────────────────

export type SchoolId =
  | 'pre' | 'plat' | 'arist' | 'stoa' | 'schol'
  | 'rat' | 'emp' | 'ideal' | 'util' | 'exist' | 'indep'

// The five chronological era-reads (the "read it straight through" spine).
export type EraId =
  | 'greeks' | 'faith-reason' | 'rationalists-empiricists'
  | 'kant-germans' | 'nineteenth-century'

export interface School {
  id: SchoolId
  name: string
  color: string      // node + accent color on the map and hub
  range: string      // human label, e.g. "1637 – 1716"
  oneLine: string    // the camp's claim, one sentence
}

export interface Thinker {
  id: string
  name: string
  glyph: string      // 1–2 char monogram for the avatar
  dates: string      // "1596 – 1650" / "c.428 – 348 BC"
  born: number       // signed year (BC negative) — for ordering
  school: SchoolId
  era: EraId
  epithet: string    // one line, what they're known for
  works: string[]    // work ids, chronological
  read?: boolean     // a full "walk the system" deep read has shipped
  map?: { x: number; y: number } // argument-map position (viewBox 412 × 1560)
  marquee?: boolean  // shown on the home argument map (vs drilldown-only)
}

export interface WorkSection { id: string; title: string; blurb?: string; read?: boolean }
// Cast + passages are the work-hub "front page" surfaces (who's in it, the set-pieces).
// Both are gated content, authored from the work's verified fact pack — never from memory.
export interface WorkCastMember { name: string; role: string }            // an interlocutor + one-line role
export interface WorkPassage { title: string; where: string; teaser: string }  // a set-piece + which book + the hook
export interface WorkSpineBeat { where: string; what: string }            // the shape of the argument, beat by beat
export interface WorkDiagram {   // a "signature" parallel-structure diagram (e.g. the city ↔ the soul)
  title: string
  leftLabel: string
  rightLabel: string
  rows: { left: string; right: string }[]
  caption: string
}
export interface Work {
  id: string
  title: string
  year: string
  thinker: string    // thinker id
  form: string       // "Six meditations", "Ten books", …
  blurb: string      // one or two sentences — what it is
  sections: WorkSection[]
  stats?: { value: string; label: string }[]  // orienting stat chips
  diagram?: WorkDiagram      // the signature visual
  spine?: WorkSpineBeat[]    // the dialogue map / shape of the argument
  cast?: WorkCastMember[]    // the people arguing (shown on the hub)
  passages?: WorkPassage[]   // "the famous bits" (shown on the hub)
  read?: boolean
}

export interface Edge {
  from: string
  to: string
  type: 'taught' | 'reacted'  // built-on / influenced  vs  reacted-against
  label?: string              // the famous line, where there is one
}

// ── Schools ──────────────────────────────────────────────────────────────────
export const SCHOOLS: School[] = [
  { id: 'pre',   name: 'Pre-Socratics',     color: '#8a9b6e', range: 'c.585 – 450 BC', oneLine: 'The first people to explain the world by nature instead of the gods.' },
  { id: 'plat',  name: 'Platonism',         color: '#c98b3a', range: 'c.380 BC –',      oneLine: 'What is truly real are the eternal Forms; the world we see is their shadow.' },
  { id: 'arist', name: 'Aristotelians',     color: '#5b9bd5', range: 'c.350 BC –',      oneLine: 'Truth is in the world, found by observing it and sorting it into kinds.' },
  { id: 'stoa',  name: 'Stoics',            color: '#6ec0a8', range: 'c.300 BC –',      oneLine: 'Live according to nature; master what is yours, accept the rest with calm.' },
  { id: 'schol', name: 'Scholastics',       color: '#b07cc6', range: '1078 – 1347',     oneLine: 'Faith and reason need not fight; reconcile them by rigorous argument.' },
  { id: 'rat',   name: 'Rationalists',      color: '#e0884f', range: '1637 – 1716',     oneLine: 'Reason alone — not the senses — reaches the deepest truths.' },
  { id: 'emp',   name: 'Empiricists',       color: '#6db36d', range: '1689 – 1776',     oneLine: 'All knowledge starts in experience; the mind begins as a blank sheet.' },
  { id: 'ideal', name: 'German Idealists',  color: '#c264a0', range: '1781 – 1831',     oneLine: 'The mind does not receive the world — it actively builds the world it sees.' },
  { id: 'util',  name: 'Utilitarians',      color: '#d2a04a', range: '1789 – 1873',     oneLine: 'The right act is the one that produces the greatest happiness for the most people.' },
  { id: 'exist', name: 'Existentialists',   color: '#d2624a', range: '1843 –',          oneLine: 'Existence comes before essence; with no fixed nature, you make yourself by choosing.' },
  { id: 'indep', name: 'Independent',       color: '#8d8678', range: 'all eras',        oneLine: 'The giants who founded no school and joined none — the source, the loner, the dynamite.' },
]

// ── Thinkers ─────────────────────────────────────────────────────────────────
// map coords: x 60–340, y grows with time. marquee = shown on the home map.
export const THINKERS: Record<string, Thinker> = {
  thales:    { id:'thales',    name:'Thales',          glyph:'Θ', dates:'c.626 – 548 BC', born:-626, school:'pre',   era:'greeks', epithet:'Said the world is made of water — and looked for the answer in nature, not myth.', works:[], map:{x:208,y:62},  marquee:true },
  pythagoras:{ id:'pythagoras',name:'Pythagoras',      glyph:'∿', dates:'c.570 – 495 BC', born:-570, school:'pre',   era:'greeks', epithet:'Number is the secret of the cosmos; reality is mathematical.', works:[], map:{x:64,y:104}, marquee:false },
  heraclitus:{ id:'heraclitus',name:'Heraclitus',      glyph:'Δ', dates:'c.535 – 475 BC', born:-535, school:'pre',   era:'greeks', epithet:'You cannot step in the same river twice — everything flows.', works:[], map:{x:96,y:140}, marquee:true },
  parmenides:{ id:'parmenides',name:'Parmenides',      glyph:'Π', dates:'c.515 – 450 BC', born:-515, school:'pre',   era:'greeks', epithet:'Change is an illusion; what is, simply is, eternal and unmoving.', works:[], map:{x:300,y:150}, marquee:false },
  socrates:  { id:'socrates',  name:'Socrates',        glyph:'Σ', dates:'c.470 – 399 BC', born:-470, school:'indep', era:'greeks', epithet:'Wrote nothing, questioned everything, and died for it.', works:[], map:{x:206,y:212}, marquee:true },
  plato:     { id:'plato',     name:'Plato',           glyph:'Π', dates:'c.428 – 348 BC', born:-428, school:'plat',  era:'greeks', epithet:'The Forms, the cave, the divided line, the just soul and the just city.', works:['republic','symposium','phaedo','apology'], read:true, map:{x:104,y:288}, marquee:true },
  aristotle: { id:'aristotle', name:'Aristotle',       glyph:'A', dates:'384 – 322 BC',   born:-384, school:'arist', era:'greeks', epithet:'Catalogued nearly everything; founded logic, ethics as habit, the golden mean.', works:['nicomachean','metaphysics','politics'], map:{x:300,y:300}, marquee:true },
  zeno:      { id:'zeno',      name:'Zeno of Citium',  glyph:'Z', dates:'c.334 – 262 BC', born:-334, school:'stoa',  era:'greeks', epithet:'Founded Stoicism on a painted porch: virtue is the only good.', works:[], map:{x:322,y:388}, marquee:true },
  epictetus: { id:'epictetus', name:'Epictetus',       glyph:'E', dates:'c.50 – 135',     born:50,   school:'stoa',  era:'greeks', epithet:'A freed slave: some things are up to us, and some are not.', works:['discourses'], map:{x:64,y:430}, marquee:false },
  aurelius:  { id:'aurelius',  name:'Marcus Aurelius', glyph:'M', dates:'121 – 180',      born:121,  school:'stoa',  era:'greeks', epithet:'A Roman emperor writing Stoic reminders to himself, for no one else.', works:['meditations-ma'], map:{x:330,y:470}, marquee:false },
  plotinus:  { id:'plotinus',  name:'Plotinus',        glyph:'Ø', dates:'c.204 – 270',    born:204,  school:'plat',  era:'faith-reason', epithet:'Reworked Plato into a ladder from matter up to the One.', works:[], map:{x:120,y:452}, marquee:false },
  augustine: { id:'augustine', name:'Augustine',       glyph:'✝', dates:'354 – 430',      born:354,  school:'plat',  era:'faith-reason', epithet:'Fused Plato with Christianity; invented the inner self of the Confessions.', works:['confessions','cityofgod'], map:{x:110,y:520}, marquee:true },
  avicenna:  { id:'avicenna',  name:'Avicenna',        glyph:'ا', dates:'980 – 1037',     born:980,  school:'arist', era:'faith-reason', epithet:'Carried Aristotle through the Islamic world; the flying-man argument.', works:[], map:{x:300,y:560}, marquee:false },
  averroes:  { id:'averroes',  name:'Averroes',        glyph:'ر', dates:'1126 – 1198',    born:1126, school:'arist', era:'faith-reason', epithet:'The great commentator on Aristotle; reason and faith as two truths.', works:[], map:{x:316,y:600}, marquee:false },
  maimonides:{ id:'maimonides',name:'Maimonides',      glyph:'מ', dates:'1138 – 1204',    born:1138, school:'arist', era:'faith-reason', epithet:'Guided the perplexed between Aristotle and the Torah.', works:[], map:{x:60,y:600}, marquee:false },
  anselm:    { id:'anselm',    name:'Anselm',          glyph:'A', dates:'1033 – 1109',    born:1033, school:'schol', era:'faith-reason', epithet:'The ontological argument: God is that than which nothing greater can be thought.', works:[], map:{x:200,y:572}, marquee:false },
  aquinas:   { id:'aquinas',   name:'Aquinas',         glyph:'✠', dates:'1225 – 1274',    born:1225, school:'schol', era:'faith-reason', epithet:'Reconciled Aristotle with Christianity; the Five Ways to God.', works:['summa'], map:{x:296,y:648}, marquee:true },
  ockham:    { id:'ockham',    name:'Ockham',          glyph:'W', dates:'c.1287 – 1347',  born:1287, school:'schol', era:'faith-reason', epithet:"The razor: do not multiply entities beyond necessity.", works:[], map:{x:196,y:726}, marquee:true },
  descartes: { id:'descartes', name:'Descartes',       glyph:'R', dates:'1596 – 1650',    born:1596, school:'rat',   era:'rationalists-empiricists', epithet:'Founder of modern philosophy: I think, therefore I am.', works:['discourse','meditations','principles'], map:{x:108,y:842}, marquee:true },
  spinoza:   { id:'spinoza',   name:'Spinoza',         glyph:'S', dates:'1632 – 1677',    born:1632, school:'rat',   era:'rationalists-empiricists', epithet:'God, or Nature: one infinite substance, proved like geometry.', works:['ethics'], map:{x:78,y:920}, marquee:false },
  leibniz:   { id:'leibniz',   name:'Leibniz',         glyph:'L', dates:'1646 – 1716',    born:1646, school:'rat',   era:'rationalists-empiricists', epithet:'Reality is monads; this is the best of all possible worlds.', works:['monadology'], map:{x:60,y:888}, marquee:false },
  hobbes:    { id:'hobbes',    name:'Hobbes',          glyph:'H', dates:'1588 – 1679',    born:1588, school:'emp',   era:'rationalists-empiricists', epithet:'Life without the state is nasty, brutish, and short — so we build the Leviathan.', works:['leviathan'], map:{x:330,y:812}, marquee:false },
  locke:     { id:'locke',     name:'Locke',           glyph:'J', dates:'1632 – 1704',    born:1632, school:'emp',   era:'rationalists-empiricists', epithet:'The mind is a blank slate; government rests on consent.', works:['essay'], map:{x:308,y:892}, marquee:true },
  berkeley:  { id:'berkeley',  name:'Berkeley',        glyph:'B', dates:'1685 – 1753',    born:1685, school:'emp',   era:'rationalists-empiricists', epithet:'To be is to be perceived — there is no matter, only minds and ideas.', works:[], map:{x:340,y:932}, marquee:false },
  hume:      { id:'hume',      name:'Hume',            glyph:'H', dates:'1711 – 1776',    born:1711, school:'emp',   era:'rationalists-empiricists', epithet:'Cause and effect is a habit of mind, not a fact in the world.', works:['treatise','enquiry'], map:{x:312,y:980}, marquee:true },
  kant:      { id:'kant',      name:'Kant',            glyph:'K', dates:'1724 – 1804',    born:1724, school:'ideal', era:'kant-germans', epithet:'The mind builds the world it experiences; the categorical imperative.', works:['cpr','groundwork'], map:{x:198,y:1066}, marquee:true },
  hegel:     { id:'hegel',     name:'Hegel',           glyph:'G', dates:'1770 – 1831',    born:1770, school:'ideal', era:'kant-germans', epithet:'Spirit unfolds through history by thesis meeting its negation.', works:['phenomenology'], map:{x:150,y:1158}, marquee:true },
  fichte:    { id:'fichte',    name:'Fichte',          glyph:'F', dates:'1762 – 1814',    born:1762, school:'ideal', era:'kant-germans', epithet:'The self posits itself, and the world along with it.', works:[], map:{x:240,y:1130}, marquee:false },
  schopenhauer:{ id:'schopenhauer',name:'Schopenhauer',glyph:'A',dates:'1788 – 1860',    born:1788, school:'indep', era:'kant-germans', epithet:'The world is blind will — striving, suffering, without purpose.', works:['wwr'], map:{x:316,y:1228}, marquee:true },
  bentham:   { id:'bentham',   name:'Bentham',         glyph:'B', dates:'1748 – 1832',    born:1748, school:'util',  era:'nineteenth-century', epithet:'The greatest happiness of the greatest number — measured like arithmetic.', works:[], map:{x:340,y:1120}, marquee:false },
  mill:      { id:'mill',      name:'Mill',            glyph:'J', dates:'1806 – 1873',    born:1806, school:'util',  era:'nineteenth-century', epithet:'Liberty, and a utilitarianism with room for higher pleasures.', works:['liberty','utilitarianism'], map:{x:332,y:1300}, marquee:true },
  taylor:    { id:'taylor',    name:'Harriet Taylor',  glyph:'H', dates:'1807 – 1858',    born:1807, school:'util',  era:'nineteenth-century', epithet:'Argued the case for the full equality of women; Mill’s partner in thought.', works:[], map:{x:340,y:1340}, marquee:false },
  kierkegaard:{ id:'kierkegaard',name:'Kierkegaard',   glyph:'S', dates:'1813 – 1855',    born:1813, school:'exist', era:'nineteenth-century', epithet:'Truth is subjectivity; faith is a leap over the edge of reason.', works:['feartrembling'], map:{x:78,y:1316}, marquee:true },
  marx:      { id:'marx',      name:'Marx',            glyph:'M', dates:'1818 – 1883',    born:1818, school:'indep', era:'nineteenth-century', epithet:'Philosophers have interpreted the world; the point is to change it.', works:['manifesto','capital'], map:{x:300,y:1346}, marquee:true },
  nietzsche: { id:'nietzsche', name:'Nietzsche',       glyph:'N', dates:'1844 – 1900',    born:1844, school:'indep', era:'nineteenth-century', epithet:'God is dead — and we must become who we are without him.', works:['zarathustra','beyondgood','genealogy','gayscience'], map:{x:196,y:1452}, marquee:true },
}

// ── Works (the marquee titles; sections + reads fill in through the pipeline) ──
export const WORKS: Record<string, Work> = {
  republic:   { id:'republic',   title:'The Republic',              year:'c.375 BCE', thinker:'plato',     form:'Ten books, in dialogue', blurb:'What is justice — and what would a perfectly just city, and a perfectly just soul, actually look like?', read:true, sections:[],
    stats: [
      { value:'10', label:'Books' },
      { value:'~375 BCE', label:'Written' },
      { value:'Athens', label:'Set in' },
    ],
    diagram: {
      title:'The city and the soul',
      leftLabel:'City', rightLabel:'Soul',
      rows: [
        { left:'Rulers',    right:'Reason' },
        { left:'Soldiers',  right:'Spirit' },
        { left:'Producers', right:'Appetite' },
      ],
      caption:'The book’s central move: a city has the same three parts as a soul. Justice is each part doing its own work and not meddling in the others’ — wisdom belongs to the rulers, courage to the soldiers, and temperance holds the whole together.',
    },
    spine: [
      { where:'Book I',       what:'What is justice? Three answers — and Thrasymachus’ attack — all fail.' },
      { where:'Book II',      what:'Glaucon revives the challenge, so Socrates builds a city to read justice writ large.' },
      { where:'Books II–IV',  what:'Three classes, the guardians’ education, and the same three parts found inside the soul.' },
      { where:'Book V',       what:'Three waves: women guardians, families held in common, and the philosopher-king.' },
      { where:'Books VI–VII', what:'The Good, the Sun, the Divided Line, and the Cave — the climb to real knowledge.' },
      { where:'Books VIII–IX',what:'City and soul decay through five regimes; the tyrant is the unhappiest man alive.' },
      { where:'Book X',       what:'Poetry put on trial, and the Myth of Er on how souls choose their next life.' },
    ],
    cast: [
      { name:'Socrates',     role:'narrates the whole conversation the day after' },
      { name:'Cephalus',     role:'the contented old host; justice is telling the truth and paying your debts' },
      { name:'Polemarchus',  role:'Cephalus’ son; justice is giving each person their due' },
      { name:'Thrasymachus', role:'the sophist who bursts in: justice is the interest of the stronger' },
      { name:'Glaucon',      role:'Plato’s brother; presses the Ring of Gyges challenge' },
      { name:'Adeimantus',   role:'Plato’s brother; argues justice is praised only for its rewards' },
    ],
    passages: [
      { title:'The Ring of Gyges',        where:'Book II',  teaser:'A ring that turns you invisible — would anyone stay just if they could never be caught?' },
      { title:'The Royal Lie',            where:'Book III', teaser:'A founding myth that sorts citizens into souls of gold, silver, and bronze.' },
      { title:'Philosopher-kings',        where:'Book V',   teaser:'The claim Socrates calls almost unsayable: cities will not rest until philosophers rule.' },
      { title:'The Sun and the Good',     where:'Book VI',  teaser:'The highest thing the mind can reach, said to lie beyond being itself.' },
      { title:'The Allegory of the Cave', where:'Book VII', teaser:'Prisoners who take the shadows thrown on a wall for the whole of reality.' },
      { title:'The Myth of Er',           where:'Book X',   teaser:'A soldier returns from death to report how souls choose their next lives.' },
    ] },
  symposium:  { id:'symposium',  title:'The Symposium',             year:'c.385 BC', thinker:'plato',     form:'A single dinner party', blurb:'Seven speeches on the nature of love, climbing Diotima’s ladder from bodies to Beauty itself.', sections:[] },
  phaedo:     { id:'phaedo',     title:'Phaedo',                    year:'c.380 BC', thinker:'plato',     form:'Socrates’ last day', blurb:'On the soul’s immortality — the dialogue set in the hours before Socrates drinks the hemlock.', sections:[] },
  apology:    { id:'apology',    title:'Apology',                   year:'c.399 BC', thinker:'plato',     form:'A courtroom speech', blurb:'Plato’s account of Socrates’ defense at his trial — the unexamined life is not worth living.', sections:[] },
  nicomachean:{ id:'nicomachean',title:'Nicomachean Ethics',       year:'c.340 BC', thinker:'aristotle', form:'Ten books', blurb:'What is the good life? Happiness as flourishing, virtue as a trained habit, the golden mean.', sections:[] },
  metaphysics:{ id:'metaphysics',title:'Metaphysics',              year:'c.330 BC', thinker:'aristotle', form:'Fourteen books', blurb:'Being as being — substance, form and matter, and the unmoved mover behind all motion.', sections:[] },
  politics:   { id:'politics',   title:'Politics',                  year:'c.330 BC', thinker:'aristotle', form:'Eight books', blurb:'Man is a political animal; a survey of constitutions and what makes a city good.', sections:[] },
  discourses: { id:'discourses', title:'Discourses',               year:'c.108',    thinker:'epictetus', form:'Lecture notes', blurb:'A freed slave’s teaching, written down by a student: focus only on what is in your power.', sections:[] },
  'meditations-ma':{ id:'meditations-ma', title:'Meditations',      year:'c.175',    thinker:'aurelius',  form:'Private notebooks', blurb:'An emperor’s Stoic reminders to himself, never meant to be read by anyone.', sections:[] },
  confessions:{ id:'confessions',title:'Confessions',              year:'c.400',    thinker:'augustine', form:'Thirteen books', blurb:'The first true autobiography — a prayer-memoir of sin, restlessness, and conversion.', sections:[] },
  cityofgod:  { id:'cityofgod',  title:'The City of God',          year:'426',      thinker:'augustine', form:'Twenty-two books', blurb:'Written as Rome fell: two cities, the earthly and the heavenly, running through all history.', sections:[] },
  summa:      { id:'summa',      title:'Summa Theologica',         year:'1265–1274',thinker:'aquinas',   form:'Thousands of articles', blurb:'The great cathedral of medieval thought, every question argued point and counter-point.', sections:[] },
  discourse:  { id:'discourse',  title:'Discourse on the Method',  year:'1637',     thinker:'descartes', form:'Six parts', blurb:'How to throw out everything you were taught and rebuild belief on certainty alone — in plain French.', sections:[] },
  meditations:{ id:'meditations',title:'Meditations on First Philosophy', year:'1641', thinker:'descartes', form:'Six meditations',
    blurb:'Descartes shuts himself in a warm room, resolves to doubt absolutely everything, and rebuilds knowledge from the one thing he cannot doubt.',
    sections:[
      { id:'m1', title:'Meditation I — Everything can be doubted' },
      { id:'m2', title:'Meditation II — I think, therefore I am' },
      { id:'m3', title:'Meditation III — The idea of God' },
      { id:'m4', title:'Meditation IV — Truth and error' },
      { id:'m5', title:'Meditation V — God’s existence again' },
      { id:'m6', title:'Meditation VI — Mind, body, and the world' },
    ] },
  principles: { id:'principles', title:'Principles of Philosophy',  year:'1644',     thinker:'descartes', form:'A textbook of the whole system', blurb:'Descartes lays out his entire physics and metaphysics as one teachable structure.', sections:[] },
  ethics:     { id:'ethics',     title:'Ethics',                    year:'1677',     thinker:'spinoza',   form:'Geometric proofs', blurb:'God-or-Nature, proved like Euclid: definitions, axioms, and propositions, all the way to blessedness.', sections:[] },
  monadology: { id:'monadology', title:'The Monadology',           year:'1714',     thinker:'leibniz',   form:'Ninety numbered points', blurb:'Reality is built of monads — windowless points of perception — in pre-established harmony.', sections:[] },
  leviathan:  { id:'leviathan',  title:'Leviathan',                year:'1651',     thinker:'hobbes',    form:'Four parts', blurb:'Why we trade our freedom to an absolute sovereign rather than live in the war of all against all.', sections:[] },
  essay:      { id:'essay',      title:'Essay Concerning Human Understanding', year:'1689', thinker:'locke', form:'Four books', blurb:'There are no innate ideas; the mind starts blank and is written on by experience.', sections:[] },
  treatise:   { id:'treatise',   title:'A Treatise of Human Nature',year:'1739',     thinker:'hume',      form:'Three books', blurb:'The boldest empiricism — on the self, cause and effect, and why reason is the slave of the passions.', sections:[] },
  enquiry:    { id:'enquiry',    title:'Enquiry Concerning Human Understanding', year:'1748', thinker:'hume', form:'Twelve sections', blurb:'The Treatise rewritten to actually be read — the problem of induction, sharpened.', sections:[] },
  cpr:        { id:'cpr',        title:'Critique of Pure Reason',   year:'1781',     thinker:'kant',      form:'A vast architecture', blurb:'What can the mind know? The book that says the mind shapes experience rather than copying it.', sections:[] },
  groundwork: { id:'groundwork', title:'Groundwork of the Metaphysics of Morals', year:'1785', thinker:'kant', form:'Three sections', blurb:'The categorical imperative: act only on a rule you could will everyone to follow.', sections:[] },
  phenomenology:{ id:'phenomenology', title:'Phenomenology of Spirit', year:'1807', thinker:'hegel',    form:'A journey of consciousness', blurb:'Spirit climbing toward self-knowledge — the master and slave, the unhappy consciousness, and more.', sections:[] },
  wwr:        { id:'wwr',        title:'The World as Will and Representation', year:'1818', thinker:'schopenhauer', form:'Four books', blurb:'Behind every appearance is a single blind striving Will — and the only escape is art and compassion.', sections:[] },
  liberty:    { id:'liberty',    title:'On Liberty',                year:'1859',     thinker:'mill',      form:'Five chapters', blurb:'The one principle: power may be used over you against your will only to prevent harm to others.', sections:[] },
  utilitarianism:{ id:'utilitarianism', title:'Utilitarianism',    year:'1863',     thinker:'mill',      form:'Five chapters', blurb:'The greatest-happiness principle, defended — with higher and lower pleasures, against its critics.', sections:[] },
  feartrembling:{ id:'feartrembling', title:'Fear and Trembling',  year:'1843',     thinker:'kierkegaard', form:'Under a pseudonym', blurb:'Abraham raising the knife over Isaac — faith as a leap that reason can neither reach nor justify.', sections:[] },
  manifesto:  { id:'manifesto',  title:'The Communist Manifesto',  year:'1848',     thinker:'marx',      form:'A pamphlet', blurb:'All history is the history of class struggle — written to set a continent alight.', sections:[] },
  capital:    { id:'capital',    title:'Capital, Volume I',        year:'1867',     thinker:'marx',      form:'Eight parts', blurb:'A forensic anatomy of capitalism: the commodity, surplus value, and where profit really comes from.', sections:[] },
  zarathustra:{ id:'zarathustra',title:'Thus Spoke Zarathustra',   year:'1883–1885',thinker:'nietzsche', form:'A prophet’s tale', blurb:'God is dead; behold the Übermensch and the eternal recurrence — philosophy as scripture and song.', sections:[] },
  beyondgood: { id:'beyondgood', title:'Beyond Good and Evil',     year:'1886',     thinker:'nietzsche', form:'Nine parts', blurb:'An assault on every inherited certainty — and the will to power beneath our talk of truth and morals.', sections:[] },
  genealogy:  { id:'genealogy',  title:'On the Genealogy of Morals',year:'1887',    thinker:'nietzsche', form:'Three essays', blurb:'Where did "good" and "evil" come from? A history of morality as the slave’s revenge on the master.', sections:[] },
  gayscience: { id:'gayscience', title:'The Gay Science',          year:'1882',     thinker:'nietzsche', form:'Aphorisms', blurb:'The madman runs into the marketplace crying that we have killed God — and asks what comes next.', sections:[] },
}

// ── Edges — the conversation (taught/built-on, or reacted-against) ────────────
export const EDGES: Edge[] = [
  { from:'socrates', to:'plato',     type:'taught' },
  { from:'plato',    to:'aristotle', type:'taught' },
  { from:'socrates', to:'zeno',      type:'taught' },
  { from:'plato',    to:'plotinus',  type:'taught' },
  { from:'plotinus', to:'augustine', type:'taught', label:'Christianized' },
  { from:'aristotle',to:'avicenna',  type:'taught' },
  { from:'avicenna', to:'averroes',  type:'taught' },
  { from:'aristotle',to:'aquinas',   type:'taught', label:'revived 1,500 yrs on' },
  { from:'aquinas',  to:'ockham',    type:'reacted', label:'razor to the system' },
  { from:'locke',    to:'hume',      type:'taught' },
  { from:'hume',     to:'kant',      type:'taught', label:'“woke me from dogmatic slumber”' },
  { from:'descartes',to:'hume',      type:'reacted' },
  { from:'kant',     to:'hegel',     type:'taught' },
  { from:'kant',     to:'fichte',    type:'taught' },
  { from:'hegel',    to:'schopenhauer', type:'reacted', label:'loathed him' },
  { from:'hegel',    to:'kierkegaard', type:'reacted', label:'“the System is a lie”' },
  { from:'hegel',    to:'marx',      type:'reacted', label:'flipped upside down' },
  { from:'schopenhauer', to:'nietzsche', type:'taught', label:'the will' },
  { from:'heraclitus',to:'nietzsche', type:'taught' },
  { from:'bentham',  to:'mill',      type:'taught' },
]

// ── Helpers ──────────────────────────────────────────────────────────────────
export const SCHOOL_BY_ID: Record<SchoolId, School> = Object.fromEntries(SCHOOLS.map(s => [s.id, s])) as Record<SchoolId, School>
export const schoolById = (id: string): School | undefined => SCHOOL_BY_ID[id as SchoolId]
export const thinkerById = (id: string): Thinker | undefined => THINKERS[id]
export const workById = (id: string): Work | undefined => WORKS[id]

export function thinkersOfSchool(id: SchoolId): Thinker[] {
  return Object.values(THINKERS).filter(t => t.school === id).sort((a, b) => a.born - b.born)
}
export function worksOfThinker(id: string): Work[] {
  const t = THINKERS[id]
  if (!t) return []
  return t.works.map(w => WORKS[w]).filter(Boolean)
}
export function schoolColor(id: string): string {
  return schoolById(id)?.color ?? '#a08423'
}
export const ALL_THINKERS = Object.values(THINKERS)
export const MARQUEE_THINKERS = ALL_THINKERS.filter(t => t.marquee)
export const ERA_NAME: Record<EraId, string> = {
  'greeks': 'The Greeks',
  'faith-reason': 'Faith meets reason',
  'rationalists-empiricists': 'The rationalists & empiricists',
  'kant-germans': 'Kant and the Germans',
  'nineteenth-century': 'The nineteenth century',
}
