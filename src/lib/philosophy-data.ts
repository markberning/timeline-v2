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
// A "signature" visual for the work. Three shapes so far:
//  - 'pairs'  → a two-column correspondence (e.g. the Republic's city ↔ soul)
//  - 'ladder' → a vertical ascent, rungs[0] = lowest (e.g. the Symposium's ladder of love)
//  - 'triad'  → three columns with an emphasized middle (e.g. the Ethics' Deficiency · Mean · Excess)
export type WorkDiagram =
  | { kind: 'pairs'; title: string; leftLabel: string; rightLabel: string; rows: { left: string; right: string }[]; caption: string }
  | { kind: 'ladder'; title: string; rungs: string[]; caption: string }
  | { kind: 'triad'; title: string; leftLabel: string; midLabel: string; rightLabel: string; rows: { left: string; mid: string; right: string }[]; caption: string }
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
      kind:'pairs',
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
  symposium:  { id:'symposium',  title:'The Symposium',             year:'c.385 BCE', thinker:'plato',     form:'A single dinner party', blurb:'At a drinking party, speeches on love climb from desire for a beautiful body all the way to Beauty itself — until a drunk Alcibiades crashes in to praise Socrates instead.', read:true, sections:[],
    stats: [
      { value:'7', label:'Speeches' },
      { value:'~385 BCE', label:'Written' },
      { value:'Athens', label:'Set in' },
    ],
    diagram: {
      kind:'ladder',
      title:'The ladder of love',
      rungs: [
        'One beautiful body',
        'All beautiful bodies',
        'Beautiful souls',
        'Laws and institutions',
        'Knowledge',
        'Beauty itself',
      ],
      caption:'Diotima’s ladder: love begins as desire for one beautiful body and, trained upward, climbs through all bodies, then souls, then laws and knowledge, to Beauty itself — the eternal Form. The first rung is a physical body, which is why “Platonic love” meaning chaste affection gets the dialogue backwards.',
    },
    spine: [
      { where:'Phaedrus',        what:'Love is the eldest god, and a spur to courage and sacrifice.' },
      { where:'Pausanias',       what:'Two loves — a common, bodily one and a higher, heavenly one.' },
      { where:'Eryximachus',     what:'A physician finds love at work all through nature.' },
      { where:'Aristophanes',    what:'The comic myth: we were once whole, Zeus split us, and love is the search for our other half.' },
      { where:'Agathon',         what:'Love as the youngest, fairest god — gorgeous, empty rhetoric.' },
      { where:'Socrates & Diotima', what:'Love is no god but a needy in-between spirit, trainable into the climb to Beauty itself.' },
      { where:'Alcibiades',      what:'A drunk gatecrasher praises Socrates instead — the ladder made flesh.' },
    ],
    cast: [
      { name:'Phaedrus',     role:'opens: love is the oldest god, a spur to bravery and sacrifice' },
      { name:'Pausanias',    role:'splits love into a common, bodily kind and a higher, heavenly one' },
      { name:'Eryximachus',  role:'the doctor; finds love at work all through nature' },
      { name:'Aristophanes', role:'the comic poet; tells the split-humans “other half” myth' },
      { name:'Agathon',      role:'the host, fresh off a tragedy prize; love as the fairest young god' },
      { name:'Socrates',     role:'refuses the game: love is a lack, not a god' },
      { name:'Diotima',      role:'the priestess whose teaching Socrates relays — the ladder of love' },
      { name:'Alcibiades',   role:'crashes in drunk and praises Socrates instead of love' },
    ],
    passages: [
      { title:'The other half',            where:'Aristophanes', teaser:'We were once whole, four-armed and two-faced; Zeus split us, and love is the hunt for our missing half.' },
      { title:'Love desires what it lacks', where:'Socrates',    teaser:'The question that deflates Agathon: you can’t already possess what you long for.' },
      { title:'Love is a daimon',          where:'Diotima',      teaser:'Neither mortal nor god, but the in-between spirit that spans the gap between them.' },
      { title:'The ladder of love',        where:'Diotima',      teaser:'Love climbs from one beautiful body through souls and laws and knowledge to Beauty itself.' },
      { title:'The Silenus',               where:'Alcibiades',   teaser:'Socrates is ugly on the outside, and full of golden images within.' },
      { title:'The night under the cloak', where:'Alcibiades',   teaser:'The most beautiful man in Athens tries to seduce Socrates, and nothing happens.' },
    ] },
  phaedo:     { id:'phaedo',     title:'Phaedo',                    year:'c.380 BCE', thinker:'plato',     form:'Socrates’ last day', blurb:'On his execution day, calm and even cheerful, Socrates argues that the soul outlives the body — four times over — and then drinks the hemlock.', read:true, sections:[],
    stats: [
      { value:'4', label:'Proofs' },
      { value:'399 BCE', label:'Set' },
      { value:'A prison', label:'Set in' },
    ],
    diagram: {
      kind:'pairs',
      title:'Body and soul',
      leftLabel:'The body', rightLabel:'The soul',
      rows: [
        { left:'Visible',    right:'Invisible' },
        { left:'Changing',   right:'Unchanging' },
        { left:'Perishable', right:'Deathless' },
      ],
      caption:'The “affinity” argument: the body is like the things that decay — visible, changing, breakable — while the soul is more like the Forms it reasons about: invisible, unchanging, and so, Socrates argues, not the kind of thing that can die. It is one of four proofs the dialogue stacks, none meant to stand alone.',
    },
    spine: [
      { where:'Why face death calmly', what:'Death is the soul set free from the body, and philosophy has been practice for it all along.' },
      { where:'1 · Opposites',  what:'The living come from the dead and the dead from the living — so the soul must persist between lives.' },
      { where:'2 · Recollection', what:'We recognize the Forms as if remembering them — so the soul knew them, and existed, before birth.' },
      { where:'3 · Affinity',   what:'The soul resembles the invisible, unchanging Forms it grasps, so it is the imperishable kind of thing.' },
      { where:'The objections', what:'Simmias: maybe the soul is just the body’s tuning, gone when the lyre breaks. Cebes: it may outlast many bodies and still wear out.' },
      { where:'4 · The final proof', what:'The soul brings life, so it can no more admit death than fire can admit cold — therefore deathless.' },
      { where:'The hemlock',    what:'A closing myth of the true earth, then the poison, the covered face, and a last debt owed to the god of healing.' },
    ],
    cast: [
      { name:'Socrates',   role:'the condemned philosopher, calm and even cheerful, arguing the soul outlives the body' },
      { name:'Phaedo',     role:'narrates the whole last day afterward, from Phlius' },
      { name:'Echecrates', role:'the listener whose questions pull the story out of Phaedo' },
      { name:'Cebes',      role:'the sharp objector: lasting a long time isn’t the same as never dying' },
      { name:'Simmias',    role:'objects that the soul may be the body’s tuning, gone when the lyre breaks' },
      { name:'Crito',      role:'the old friend who receives the last words about the cock owed to Asclepius' },
    ],
    passages: [
      { title:'Practice for death',     where:'The thesis',      teaser:'The philosopher spends his life freeing the soul from the body — so death is the thing he has been training for.' },
      { title:'Learning is remembering', where:'Recollection',   teaser:'We recognize the Forms as if recovering them — proof the soul knew them, and existed, before we were born.' },
      { title:'The broken lyre',        where:'The objection',   teaser:'Simmias: maybe the soul is just the body’s tuning, and dies the moment the instrument breaks.' },
      { title:'The final argument',     where:'The summit',      teaser:'The soul brings life, so it can no more admit death than fire can admit cold — therefore it cannot die.' },
      { title:'The last words',         where:'The death',       teaser:'“Crito, I owe a cock to Asclepius” — the enigmatic close, as if death were the cure for a long illness.' },
      { title:'The likely tale',        where:'The myth',        teaser:'A picture of the true earth and the soul’s journey after death — offered not as fact but as a story worth the risk.' },
    ] },
  apology:    { id:'apology',    title:'Apology',                   year:'399 BCE', thinker:'plato',     form:'A courtroom speech', blurb:'Socrates’ defense at his trial for his life — where he refuses to grovel, calls himself the city’s gadfly, and says the unexamined life is not worth living.', read:true, sections:[],
    stats: [
      { value:'399 BCE', label:'Tried' },
      { value:'3', label:'Accusers' },
      { value:'Death', label:'Sentence' },
    ],
    diagram: {
      kind:'pairs',
      title:'The oracle’s riddle',
      leftLabel:'He questioned', rightLabel:'What he found',
      rows: [
        { left:'Politicians', right:'Thought wise, were not' },
        { left:'Poets',       right:'Inspired, couldn’t explain it' },
        { left:'Craftsmen',   right:'Skilled, but overreached' },
      ],
      caption:'Told by the Delphic oracle that no man was wiser, Socrates cross-examined Athens’ reputed experts to prove it wrong — and found each one thought he knew what he didn’t. His own “human wisdom” was only this: he at least knew that he did not know.',
    },
    spine: [
      { where:'The old slander', what:'He answers the years-deep caricature first — the sky-gazing sophist of Aristophanes’ comedy — because rumor can’t be cross-examined.' },
      { where:'The oracle',      what:'Why he made enemies: a god-given mission to test the oracle that called him wisest, by questioning everyone who claimed to know.' },
      { where:'The charges',     what:'He cross-examines Meletus and traps him — the impiety charge contradicts itself.' },
      { where:'The gadfly',      what:'He defends the examined life: he is the sting that keeps a sluggish Athens awake, a gift, not an enemy.' },
      { where:'Incorruptible',   what:'His inner sign kept him out of politics; he twice defied unjust orders, under democracy and tyranny alike.' },
      { where:'Guilty',          what:'Convicted narrowly — and instead of begging, he says he deserves free meals at public expense, then offers a token fine.' },
      { where:'The sentence',    what:'Condemned to death, he tells the court that injustice runs faster than death, and no evil can touch a good man.' },
    ],
    cast: [
      { name:'Socrates',    role:'the defendant, 70, on trial for his life — Athens’ self-described gadfly' },
      { name:'Meletus',     role:'the young lead accuser, trapped in self-contradiction under questioning' },
      { name:'Anytus',      role:'the powerful politician behind the prosecution, pushing for death' },
      { name:'Lycon',       role:'the third accuser, speaking for the orators' },
      { name:'Chaerephon',  role:'the old friend who asked the oracle if anyone was wiser than Socrates' },
      { name:'The jury',    role:'~500 Athenian citizens who convict, then condemn him to death' },
    ],
    passages: [
      { title:'The Delphic oracle',          where:'Human wisdom', teaser:'The oracle says no one is wiser than Socrates — so he sets out to prove it wrong, and learns the “wise” only think they know.' },
      { title:'“I know that I know nothing”', where:'The real line', teaser:'What he actually says is subtler: he neither knows nor imagines he knows — and that not-overclaiming is his only wisdom.' },
      { title:'The gadfly',                  where:'His mission',   teaser:'Athens is a great, sluggish horse; Socrates is the fly the god set on it to sting it awake.' },
      { title:'The daimonion',               where:'The sign',     teaser:'A divine voice that only ever forbids — and its silence on the day of the trial is his proof that death is no evil.' },
      { title:'The unexamined life',         where:'His stand',    teaser:'He would rather be put to death than give up questioning: a life without self-examination isn’t worth living.' },
      { title:'“I to die, and you to live”', where:'The close',    teaser:'His last words to the court: which of us goes to the better fate, only God knows.' },
    ] },
  nicomachean:{ id:'nicomachean',title:'Nicomachean Ethics',       year:'c.340 BC', thinker:'aristotle', form:'Ten books', blurb:'What is the good life? Happiness as flourishing, virtue as a trained habit, the golden mean.', sections:[] },
  metaphysics:{ id:'metaphysics',title:'Metaphysics',              year:'c.330 BCE', thinker:'aristotle', form:'Fourteen books', blurb:'What does it mean for anything to exist? A climb from the four causes to a single eternal mind that moves the whole cosmos by being loved.', read:true, sections:[],
    stats: [
      { value:'14', label:'Books' },
      { value:'4th c. BCE', label:'Written' },
      { value:'Being itself', label:'On' },
    ],
    diagram: {
      kind:'pairs',
      title:'The four causes',
      leftLabel:'The cause', rightLabel:'For a bronze statue',
      rows: [
        { left:'Material',  right:'the bronze it’s made of' },
        { left:'Formal',    right:'the shape that makes it a statue' },
        { left:'Efficient', right:'the sculptor who shapes it' },
        { left:'Final',     right:'what it’s for — to honor someone' },
      ],
      caption:'Aristotle’s master tool: the little word “why?” is secretly four questions, and you haven’t explained a thing until you’ve answered all four — above all what it’s for. (The worked statue example is from his Physics; the four-cause scheme runs through the Metaphysics.)',
    },
    spine: [
      { where:'Books I–II',   what:'The itch to understand, and the four causes — the four-part answer to every “why.”' },
      { where:'Book I',       what:'Where the earlier philosophers, Plato included, each saw only part of the picture.' },
      { where:'Book IV',      what:'What this science even is: the study of being as being, resting on the one rule thought can’t do without.' },
      { where:'Books VII–VIII', what:'The question under all questions — “what is being?” becomes “what is substance?”: form, matter, essence.' },
      { where:'Book IX',      what:'Potentiality and actuality: how anything passes from what it could be to what it actually is.' },
      { where:'Book XII',     what:'The summit: the unmoved mover, a mind that moves the whole cosmos by being loved.' },
    ],
    cast: [
      { name:'Being qua being',      role:'the subject — what it is for anything to exist at all' },
      { name:'The four causes',      role:'the four-part answer to every “why” — Aristotle’s master tool' },
      { name:'Substance (ousia)',    role:'the primary kind of being; “what is being?” reduces to “what is substance?”' },
      { name:'Potentiality & actuality', role:'the pair that explains all change — and actuality comes first' },
      { name:'The unmoved mover',    role:'the eternal mind that moves the world by being loved, thinking only of itself' },
    ],
    passages: [
      { title:'“All men by nature desire to know”', where:'Book I',  teaser:'The most famous opening in philosophy — and he proves it from something as ordinary as our love of looking.' },
      { title:'The four causes',     where:'Book I',   teaser:'The little word “why?” is secretly four questions; you haven’t explained anything until you’ve answered all four.' },
      { title:'Being as being',      where:'Book IV',  teaser:'Every other science studies a slice of reality; this one studies existence itself.' },
      { title:'What is substance?',  where:'Book VII', teaser:'The oldest question there is — “what is being?” — turns out to be a question about which things are the real ones.' },
      { title:'The unmoved mover',   where:'Book XII', teaser:'The thing that moves the whole universe never moves; it draws everything the way a beloved draws you across a room, and thinks only about thinking.' },
    ] },
  politics:   { id:'politics',   title:'Politics',                  year:'c.330 BC', thinker:'aristotle', form:'Eight books', blurb:'Man is a political animal; a survey of constitutions and what makes a city good.', sections:[] },
  discourses: { id:'discourses', title:'Discourses',               year:'c.108',    thinker:'epictetus', form:'Lecture notes', blurb:'A freed slave’s teaching, written down by a student: focus only on what is in your power.', sections:[] },
  'meditations-ma':{ id:'meditations-ma', title:'Meditations',      year:'c.175',    thinker:'aurelius',  form:'Private notebooks', blurb:'An emperor’s Stoic reminders to himself, never meant to be read by anyone.', sections:[] },
  confessions:{ id:'confessions',title:'Confessions',              year:'c.397–400 CE', thinker:'augustine', form:'Thirteen books', blurb:'A restless young man’s road to conversion — sin, ambition, a divided will, a garden — written as one long prayer to God, then a turn inward to memory and time.', read:true, sections:[],
    stats: [
      { value:'13', label:'Books' },
      { value:'~397 CE', label:'Written' },
      { value:'A prayer', label:'The form' },
    ],
    diagram: {
      kind:'pairs',
      title:'The restless self, and rest in God',
      leftLabel:'The restless self', rightLabel:'Rest in God',
      rows: [
        { left:'A heart “restless”',           right:'“until it repose in Thee”' },
        { left:'Seeking outward, abroad',       right:'The turn inward — “Thou wert within”' },
        { left:'A divided will: “only not yet”', right:'The will healed in the garden' },
        { left:'Time, the soul scattered',      right:'Gathered into God’s eternal present' },
      ],
      caption:'The whole book is built on one tension, set in its first sentence and answered in its last: a restless, scattered self that seeks everywhere outside itself, against the rest it finds only by turning inward to God.',
    },
    spine: [
      { where:'Books I–II',   what:'A willful boyhood and the theft of the pears — sin with no motive but the sin itself.' },
      { where:'Book III',     what:'Carthage, lust, and Cicero’s spark — then nine years lost to the Manichee sect.' },
      { where:'Books V–VI',   what:'Faustus disappoints; Rome, then Milan, where Ambrose reopens Christianity to him.' },
      { where:'Book VII',     what:'The books of the Platonists: God is not a body, evil is not a thing, and truth is found within.' },
      { where:'Book VIII',    what:'The will divided against itself, healed in a garden by a child’s voice: “take up and read.”' },
      { where:'Book IX',      what:'Baptism, the shared vision at Ostia with his mother Monica, and her death — the story ends.' },
      { where:'Books X–XIII', what:'The turn inward made explicit: memory, the riddle of time, and creation — closing in rest.' },
    ],
    cast: [
      { name:'God',       role:'the “Thou” the whole book addresses — it is a prayer, not a memoir' },
      { name:'Monica',    role:'his devout mother and co-protagonist; shares the vision at Ostia, then dies' },
      { name:'Ambrose',   role:'the bishop of Milan whose preaching reopened Christianity to him' },
      { name:'Alypius',   role:'his close friend, converted beside him in the garden' },
      { name:'Adeodatus', role:'his son by an unnamed partner, baptized with him' },
      { name:'Faustus',   role:'the celebrated Manichee bishop whose emptiness ended his nine Manichee years' },
    ],
    passages: [
      { title:'The restless heart',     where:'Book I',     teaser:'“Thou madest us for Thyself, and our heart is restless, until it repose in Thee” — the conclusion, stated before the story begins.' },
      { title:'The theft of the pears', where:'Book II',    teaser:'He steals fruit he doesn’t even want, to study a sin with no motive but the sin itself.' },
      { title:'“Only not yet”',         where:'Book VIII',  teaser:'The prayer of a will divided against itself: wanting to be chaste, wanting the pleasure more.' },
      { title:'Take up and read',       where:'The garden', teaser:'A child’s chant, a Bible opened at random, and the long paralysis breaks at once.' },
      { title:'The vision at Ostia',    where:'Book IX',    teaser:'Mother and son, at a window, touch eternal Wisdom together for a single instant.' },
      { title:'“What then is time?”',   where:'Book XI',    teaser:'“If no one asks me, I know; if I wish to explain it, I know not.”' },
    ] },
  cityofgod:  { id:'cityofgod',  title:'The City of God',          year:'413–426 CE', thinker:'augustine', form:'Twenty-two books', blurb:'Rome has fallen and the pagans blame the Christians. Augustine answers with a vision of two cities — one built on love of God, one on love of self — running mixed through all of history.', read:true, sections:[],
    stats: [
      { value:'22', label:'Books' },
      { value:'413–426 CE', label:'Written' },
      { value:'410 sack', label:'Occasion' },
    ],
    diagram: {
      kind:'pairs',
      title:'The two cities',
      leftLabel:'The Earthly City', rightLabel:'The City of God',
      rows: [
        { left:'Built by love of self', right:'Built by love of God' },
        { left:'Glories in itself',     right:'Glories in the Lord' },
        { left:'Rules by domination',   right:'Serves in love' },
        { left:'Ends in death',         right:'Ends in eternal peace' },
      ],
      caption:'The book’s whole vision in one contrast: two cities built by two loves — the love of self to the contempt of God, and the love of God to the contempt of self. They run mixed together through all of history and are sorted out only at the end, so neither one is simply Rome or the Church.',
    },
    spine: [
      { where:'Books I–V',     what:'The pagan charge answered: the old gods never made Rome moral or kept it safe — and the barbarians spared those who fled to the churches.' },
      { where:'Books VI–X',    what:'Nor can the gods give eternal life — not even the Platonists, who come nearest and still fall short of the Incarnation.' },
      { where:'Books XI–XIV',  what:'The origin of the two cities: creation, the angels, the Fall, and the two loves that divide them.' },
      { where:'Books XV–XVIII', what:'Their history, intertwined from Cain and Abel down through Rome — the two cities running mixed through time.' },
      { where:'Book XIX',      what:'The true highest good: peace as “the tranquillity of order,” and the limits of any peace on earth.' },
      { where:'Books XX–XXII', what:'How it ends: the Last Judgment, and the eternal City of God.' },
    ],
    cast: [
      { name:'The City of God',  role:'the community bound by love of God — a pilgrim through history' },
      { name:'The Earthly City', role:'the community bound by love of self, driven by the lust to dominate' },
      { name:'Pagan Rome',       role:'the defendant: the old gods who never protected Rome, yet blame Christ for its fall' },
      { name:'The Platonists',   role:'the philosophers who come nearest the truth but lack the Incarnation' },
      { name:'Cain & Abel',      role:'the two cities’ first citizens — Cain who built a city, Abel the pilgrim who built none' },
      { name:'Marcellinus',      role:'the Roman official to whom Augustine addresses the whole work' },
    ],
    passages: [
      { title:'Two loves, two cities',     where:'Book XIV', teaser:'The one sentence that defines the work: two cities built by two loves, the love of self and the love of God.' },
      { title:'“Great robberies”',         where:'Book IV',  teaser:'A captured pirate tells Alexander they’re in the same trade — only the size of the fleet differs.' },
      { title:'The philosophers came nearest', where:'Book VIII', teaser:'The Platonists are brought to the very door of the Incarnation, and can’t walk through it.' },
      { title:'The tranquillity of order', where:'Book XIX', teaser:'Augustine’s definition of peace — and the reason no peace on earth can ever be the whole of it.' },
      { title:'Answering the sack',        where:'Book I',   teaser:'The barbarians spared everyone who fled to the churches: Christ’s name shielded even pagans.' },
    ] },
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
