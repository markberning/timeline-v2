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
  nicomachean:{ id:'nicomachean',title:'Nicomachean Ethics',       year:'c.4th c. BCE', thinker:'aristotle', form:'Ten books', blurb:'What is the good life, and how do you actually become good? Flourishing as the goal, virtue as a trained habit, the mean between extremes, and contemplation at the summit.', read:true, sections:[],
    stats: [
      { value:'10', label:'Books' },
      { value:'4th c. BCE', label:'Written' },
      { value:'The good life', label:'On' },
    ],
    diagram: {
      kind:'triad',
      title:'The golden mean',
      leftLabel:'Too little', midLabel:'The virtue (the mean)', rightLabel:'Too much',
      rows: [
        { left:'Cowardice',         mid:'Courage',       right:'Recklessness' },
        { left:'Insensibility',     mid:'Temperance',    right:'Overindulgence' },
        { left:'Stinginess',        mid:'Generosity',    right:'Extravagance' },
        { left:'Self-deprecation',  mid:'Truthfulness',  right:'Boastfulness' },
      ],
      caption:'Virtue is the mean between two vices, one of too little and one of too much, fixed by reason in the particular case. It is not a mathematical midpoint or “moderation in all things”: some acts (murder, betrayal) have no virtuous amount at all.',
    },
    spine: [
      { where:'Book I',       what:'The human good is eudaimonia (flourishing), and the function argument: our good is the soul’s activity in line with virtue.' },
      { where:'Books II–V',   what:'The virtues of character: virtue as trained habit, the doctrine of the mean, responsibility, and justice.' },
      { where:'Book VI',      what:'The virtues of the intellect, above all practical wisdom (phronesis) and theoretical wisdom (sophia).' },
      { where:'Book VII',     what:'Weakness of will (akrasia): how we know the better and still do the worse. And pleasure.' },
      { where:'Books VIII–IX', what:'The long treatment of friendship: of use, of pleasure, and of character, where the friend is “another self.”' },
      { where:'Book X',       what:'Pleasure again, and the verdict: the contemplative life is the highest happiness. Then it hands off to the Politics.' },
    ],
    cast: [
      { name:'Eudaimonia',          role:'flourishing — the highest good, the life that lacks nothing' },
      { name:'The golden mean',     role:'virtue as the reasoned middle between too little and too much' },
      { name:'Habit',               role:'we become good by doing good acts; character is trained, not taught' },
      { name:'Phronesis',           role:'practical wisdom — knowing the right thing to do in the particular case' },
      { name:'Friendship',          role:'two of the ten books — the true friend as “another self”' },
      { name:'The contemplative life', role:'theoria — the highest happiness, the verdict of Book X' },
    ],
    passages: [
      { title:'The function argument', where:'Book I',    teaser:'What is a human being FOR? Our good is the soul’s activity in line with virtue — and “one swallow does not make a summer.”' },
      { title:'The golden mean',       where:'Book II',   teaser:'Virtue is the reasoned middle between too little and too much — not “moderation in all things,” and some acts have no right amount at all.' },
      { title:'Weakness of will',      where:'Book VII',  teaser:'Akrasia: how a person can know the better and still do the worse.' },
      { title:'The three friendships', where:'Book VIII', teaser:'Friendships of use, of pleasure, and of character — the last is rare, and the friend becomes “another self.”' },
      { title:'The contemplative life', where:'Book X',   teaser:'The highest happiness is not action or pleasure but contemplation, the most godlike thing in us.' },
    ] },
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
  politics:   { id:'politics',   title:'Politics',                  year:'c.4th c. BCE', thinker:'aristotle', form:'Eight books', blurb:'Man is by nature a political animal. What a city is for, who should rule, how to sort every government, and why regimes fall — grounded in the study of 158 real constitutions.', read:true, sections:[],
    stats: [
      { value:'8', label:'Books' },
      { value:'4th c. BCE', label:'Written' },
      { value:'6 regimes', label:'Mapped' },
    ],
    diagram: {
      kind:'pairs',
      title:'The six constitutions',
      leftLabel:'Correct (for the common good)', rightLabel:'Deviation (for the rulers)',
      rows: [
        { left:'Monarchy (one)',           right:'Tyranny' },
        { left:'Aristocracy (the few best)', right:'Oligarchy' },
        { left:'Polity (the many)',        right:'Democracy' },
      ],
      caption:'Sort any government by two questions — who rules (one, few, or many) and for whose good (everyone’s, or the rulers’ own) — and you get all six. The deviant trio is just the good trio gone selfish. Note: Aristotle’s “democracy” is the deviant popular form; his good form of popular rule is “polity.”',
    },
    spine: [
      { where:'Book I',        what:'The city as natural — household to village to polis — and “man is by nature a political animal.” Also the work’s gravest claim: the defense of natural slavery.' },
      { where:'Book II',       what:'A critique of Plato’s Republic and its communal city.' },
      { where:'Book III',      what:'What a citizen is, and the six constitutions, sorted by who rules and for whose good.' },
      { where:'Books IV–VI',   what:'The best practicable state, the stabilizing middle class, and why regimes fall — almost always over equality.' },
      { where:'Books VII–VIII', what:'The ideal state and its education; the text breaks off mid-discussion of music.' },
    ],
    cast: [
      { name:'The polis',              role:'the natural, self-sufficient community that completes human life' },
      { name:'The citizen',            role:'defined by sharing in rule, not by birth or residence' },
      { name:'The six constitutions',  role:'the two-axis map of every government — who rules × for whose good' },
      { name:'The middle class',       role:'the stabilizer; the best practicable state rests on a broad middle' },
      { name:'The household & slavery', role:'the smallest community — and the work’s gravest, most indefensible claim' },
    ],
    passages: [
      { title:'“Man is a political animal”', where:'Book I',   teaser:'The city isn’t optional; it’s what finishes a human being. Outside it, Aristotle says, you are “a beast or a god.”' },
      { title:'The defense of slavery',      where:'Book I',   teaser:'The work’s gravest claim, argued plainly: that some people are “slaves by nature.” One of the most indefensible arguments in the canon.' },
      { title:'The six constitutions',       where:'Book III', teaser:'Sort any government by who rules and for whose good, and you get all six — the deviant trio just the good trio gone selfish.' },
      { title:'The middle-class state',      where:'Book IV',  teaser:'The most stable city isn’t ruled by the best or the richest, but by the broad, moderate middle.' },
      { title:'Why regimes fall',            where:'Book V',   teaser:'Revolutions come over equality: inferiors revolt to become equal, equals to become superior.' },
    ] },
  discourses: { id:'discourses', title:'Discourses',               year:'c.108',    thinker:'epictetus', form:'Lecture notes', blurb:'A freed slave’s teaching, written down by a student: focus only on what is in your power.', read:true, sections:[],
    stats: [
      { value:'4 of 8', label:'Books surviving' },
      { value:'c.108', label:'Recorded' },
      { value:'Nicopolis', label:'Taught at' },
    ],
    diagram: {
      kind:'pairs',
      title:'The dichotomy of control',
      leftLabel:'Up to us', rightLabel:'Not up to us',
      rows: [
        { left:'Our judgments', right:'Our body' },
        { left:'Our desires', right:'Our property' },
        { left:'Our own actions', right:'Our reputation' },
        { left:'Our choices (the will)', right:'What others do' },
        { left:'How we play the part', right:'Which part we are given' },
      ],
      caption:'The opening move of the Enchiridion, and the spine of the whole work: some things are in our power (judgments, desires, and choices, in a word our own actions) and most things are not (the body, property, reputation, other people, outcomes). Almost all suffering, Epictetus held, comes from staking peace on the second column.',
    },
    spine: [
      { where:'Discourses I.1', what:'What is and is not in our power: the one faculty fully ours is the right use of impressions.' },
      { where:'Enchiridion 1', what:'The dichotomy stated bare: ours are opinion, desire, and our own actions; not ours, the body, property, and reputation.' },
      { where:'Enchiridion 5', what:'People are disturbed not by things but by their judgments about things, so the cure is in the judgment, never the event.' },
      { where:'Discourses I.1', what:'The leg can be chained, but not the will: prohairesis (the faculty of choice) is the real self and cannot be compelled.' },
      { where:'Discourses II', what:'The three disciplines (desire, action, assent): training the will like an athlete until the rule becomes reflex.' },
      { where:'Enchiridion 8', what:'Wishing events to happen as they happen: the discipline of desire in one sentence.' },
      { where:'Enchiridion 17', what:'Life as a play: a person does not choose the role or its length, only how well the part is acted.' },
    ],
    cast: [
      { name:'Epictetus', role:'the lame former slave whose lectures these are; he wrote none of it down' },
      { name:'Arrian', role:'his pupil at Nicopolis; took down the talks in the teacher’s own voice and made the Enchiridion from them' },
      { name:'The students', role:'the visitors and pupils whose questions and failures set off each discourse' },
    ],
    passages: [
      { title:'The dichotomy of control', where:'Enchiridion 1', teaser:'Some things are in our power and most are not: the line the rest of the work draws across every event in a life.' },
      { title:'Disturbed by judgments', where:'Enchiridion 5', teaser:'Not the loss but the verdict on the loss is what wounds, and the verdict is the one part that is ours.' },
      { title:'You will fetter my leg', where:'Discourses I.1', teaser:'Spoken to a tyrant: the body can be chained, the will cannot, not even by Jupiter himself.' },
      { title:'The actor in the play', where:'Enchiridion 17', teaser:'A poor man, a cripple, a governor: the role is assigned, and the only task is to act it well.' },
    ] },
  'meditations-ma':{ id:'meditations-ma', title:'Meditations',      year:'c.175',    thinker:'aurelius',  form:'Private notebooks', blurb:'An emperor’s Stoic reminders to himself, never meant to be read by anyone.', read:true, sections:[],
    stats: [
      { value:'12', label:'Books' },
      { value:'c.170–180', label:'Written' },
      { value:'On campaign', label:'Where' },
    ],
    diagram: {
      kind:'pairs',
      title:'The dichotomy of control',
      leftLabel:'Up to me', rightLabel:'Not up to me',
      rows: [
        { left:'My judgments', right:'My body and health' },
        { left:'My choices', right:'My reputation' },
        { left:'My own conduct', right:'What other people do' },
        { left:'How I meet events', right:'The events themselves' },
      ],
      caption:'The Epictetan division the whole notebook runs on: some things are up to us (our own judgments, choices, and conduct) and some are not (the body, reputation, other people, fortune). Marcus rehearses it again and again, because the one thing fully his is the only thing worth governing.',
    },
    spine: [
      { where:'Book 1', what:'A catalogue of debts: what Marcus learned, and from whom, ending with the gift of Epictetus.' },
      { where:'The notebook', what:'Not a treatise but private reminders, in Greek, circling the same few truths to stay steady.' },
      { where:'Meeting people', what:'Expect the difficult in the morning; no one can injure the only thing that is truly one’s own.' },
      { where:'What is mine', what:'The Epictetan dichotomy of control: master one’s own judgments, accept the rest.' },
      { where:'Impermanence', what:'Time is a river; death comes soon; the deadline is for living now and shrinking fame to nothing.' },
      { where:'The view from above', what:'Pull back to all time and all substance, and a single life’s troubles turn small against one ordered whole.' },
      { where:'Do the work', what:'Duty for the common good, acceptance of fate, and the obstacle turned into the occasion to act well.' },
    ],
    cast: [
      { name:'Marcus Aurelius', role:'the author, talking only to himself: Roman emperor, Stoic, on the Danube frontier' },
      { name:'Epictetus', role:'the freed-slave Stoic whose recorded teaching is the notebook’s backbone' },
      { name:'Rusticus', role:'his Stoic teacher, who handed him Epictetus from his own collection (Bk 1.7)' },
      { name:'Antoninus Pius', role:'his adoptive father and predecessor, named in Book 1 as a model of steady rule' },
      { name:'Verus', role:'his grandfather, the first debt in Book 1: good morals and the government of temper' },
    ],
    passages: [
      { title:'The morning rehearsal', where:'Book 2.1', teaser:'“Begin the morning by saying to thyself, I shall meet with the busybody, the ungrateful, arrogant…”' },
      { title:'Time is a river', where:'Book 4.43', teaser:'Everything streams past and is carried away; to grip any of it tightly is to grip running water.' },
      { title:'Live each act as the last', where:'Book 2.5', teaser:'Not recklessness but full seriousness: there may be no later in which to do it properly.' },
      { title:'The view from above', where:'Book 9.30', teaser:'Look down on the countless herds of men, and posthumous fame turns out to be worth nothing.' },
      { title:'The obstacle on the road', where:'Book 5.20', teaser:'The hindrance becomes a furtherance: the source of the modern slogan “the obstacle is the way.”' },
      { title:'A list of debts', where:'Book 1', teaser:'Before any doctrine, an inventory of who shaped him: grandfather, mother, teachers, the gods.' },
    ] },
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
  summa:      { id:'summa',      title:'Summa Theologica',         year:'1265–1274',thinker:'aquinas',   form:'Thousands of articles', blurb:'The great cathedral of medieval thought, every question argued point and counter-point.', read:true, sections:[],
    stats: [
      { value:'3', label:'Parts' },
      { value:'~3,000', label:'Articles' },
      { value:'1265–74', label:'Written' },
      { value:'Unfinished', label:'Status' },
    ],
    diagram: {
      kind:'triad',
      title:'How every article works',
      leftLabel:'Objections', midLabel:'I answer that', rightLabel:'Replies',
      rows: [
        { left:'“It seems that…”: the strongest case for the WRONG answer, stated first', mid:'“On the contrary” turns the room, then Aquinas gives his reasoned verdict', right:'He goes back and dismantles each opening objection, one by one' },
      ],
      caption:'The Summa is built from one unit repeated thousands of times: the article. It opens by arguing AGAINST itself at full strength (the objections), pivots on a single authority (“On the contrary”), delivers Aquinas’s own answer (“I answer that”), then answers every objection in turn. Fairness is built into the form, not added as a courtesy.',
    },
    spine: [
      { where:'Prima Pars (I)', what:'God’s existence (the Five Ways) and nature, the Trinity, and creation: everything flowing out from God.' },
      { where:'I, Q2, A3', what:'The Five Ways: five arguments from motion, cause, necessity, degree, and design, each ending by naming its conclusion “God.”' },
      { where:'Prima Secundae (I-II)', what:'The moral machine: the final end (happiness, ultimately God), human acts, the passions, virtue, and the treatise on law.' },
      { where:'I-II, QQ90–97', what:'Natural law: the basic moral truths any rational mind can read off human nature, part of God’s eternal law.' },
      { where:'Secunda Secundae (II-II)', what:'The virtues one at a time (faith, hope, charity, prudence, justice, courage, temperance) and the states of life.' },
      { where:'Tertia Pars (III)', what:'Christ, the Incarnation, and the sacraments: the road home. Left UNFINISHED after December 1273.' },
      { where:'The Supplement', what:'Compiled after his death from his earlier writings to close the gap the unfinished Third Part left open.' },
    ],
    cast: [
      { name:'Aristotle', role:'“the Philosopher,” cited constantly; the recovered pagan logic Aquinas turns on Christian doctrine' },
      { name:'Augustine', role:'the authority he answers and updates: “believe so that you may understand”' },
      { name:'Averroes', role:'“the Commentator” on Aristotle, admired and then argued against on the soul and the eternity of the world' },
      { name:'Albert the Great', role:'his teacher, who said the “dumb ox” would one day be heard worldwide' },
      { name:'Scripture and the Fathers', role:'the revealed authorities the “On the contrary” of each article leans on' },
    ],
    passages: [
      { title:'The Five Ways', where:'I, Q2, A3', teaser:'Five short arguments that the world points beyond itself (from motion, cause, necessity, degree, and design), each ending “and this we call God.”' },
      { title:'Grace perfects nature', where:'I, Q1, A8', teaser:'The keystone sentence: grace does not destroy nature but perfects it, so reason ministers to faith rather than bowing to it.' },
      { title:'Natural law', where:'I-II, QQ90–97', teaser:'Right and wrong written into human nature and readable by anyone’s reason, not just divine command.' },
      { title:'The form itself', where:'every article', teaser:'State the strongest objections to its own answer first, then reply to them point by point.' },
      { title:'“Like straw”', where:'after 6 Dec 1273', teaser:'The mystical experience that stopped him: “all that I have written seems like straw to me.” He never wrote again.' },
    ] },
  discourse:  { id:'discourse',  title:'Discourse on the Method',  year:'1637',     thinker:'descartes', form:'Six parts', blurb:'How to throw out everything you were taught and rebuild belief on certainty alone — in plain French.', read:true, sections:[],
    stats: [
      { value:'1637', label:'Published (in French)' },
      { value:'6', label:'Parts' },
      { value:'Je pense, donc je suis', label:'The cogito, first stated' },
    ],
  },
  meditations:{ id:'meditations',title:'Meditations on First Philosophy', year:'1641', thinker:'descartes', form:'Six meditations',
    blurb:'Descartes shuts himself in a warm room, resolves to doubt absolutely everything, and rebuilds knowledge from the one thing he cannot doubt.', read:true, sections:[],
    stats: [
      { value:'6', label:'Meditations' },
      { value:'1641', label:'Published' },
      { value:'Six days', label:'One per sitting' },
    ],
    diagram: {
      kind:'ladder',
      title:'The descent into doubt, and the climb back up',
      rungs: [
        'Everything doubtable (the senses, the dream)',
        'The evil demon (even arithmetic could be rigged)',
        'I think, I exist (the one stone the demon cannot reach)',
        'God exists, and is no deceiver',
        'The external world (recovered, because God would not deceive)',
      ],
      caption:'The first three Meditations tear down; the last three build back up. The demon is a tool, not a belief: doubt cranked to its limit to find what survives it. The climb back to the world runs through God, the exact step Mersenne and Arnauld attacked as circular.',
    },
    spine: [
      { where:'Meditation I', what:'Methodic doubt: the senses deceive, waking cannot be told from dreaming, and a malignant demon could rig even arithmetic. Nothing is left standing.' },
      { where:'Meditation II', what:'The one survivor: the doubter cannot doubt that he exists. The phrasing here is “I am, I exist.” Then the ball of wax: the mind, not the senses, grasps it.' },
      { where:'Meditation III', what:'The first proof of God (the trademark argument): the idea of an infinite, perfect being is too large for a finite mind to have made, so a perfect being placed it there.' },
      { where:'Meditation IV', what:'The cause of error: the will is wider than the intellect, and error is the will affirming what the intellect never clearly perceived. The fix is to assent only to the clear and distinct.' },
      { where:'Meditation V', what:'The second proof of God, the ontological argument: existence belongs to a supremely perfect being’s essence as three angles belong to a triangle.' },
      { where:'Meditation VI', what:'The real distinction of mind and body, and the external world recovered: a non-deceiving God would not let so strong a belief in bodies be wholly false.' },
    ],
    cast: [
      { name:'Descartes', role:'the meditator: doubts everything, then rebuilds from the one certainty he finds' },
      { name:'The evil demon', role:'the deceiver hypothesis: the strongest possible doubt, built as a tool, not believed' },
      { name:'God', role:'proved twice, then made the guarantor that clear and distinct ideas are true' },
    ],
    passages: [
      { title:'Methodic doubt', where:'Meditation I', teaser:'Tear out the foundations once in a life and accept nothing back that is not certain: the senses deceive, and waking cannot be told from sleep.' },
      { title:'The evil demon', where:'Meditation I', teaser:'“Some malignant demon, who is at once exceedingly potent and deceitful, has employed all his artifice to deceive me.” The terminal doubt.' },
      { title:'“I am, I exist”', where:'Meditation II', teaser:'The slogan “I think, therefore I am” is the Discourse and the Principles; the Meditations says “I am, I exist,” true each time it is thought.' },
      { title:'The ball of wax', where:'Meditation II', teaser:'Hold the wax to the fire and every sensed quality changes, yet it is the same wax. The mind grasps it, not the senses.' },
      { title:'The two proofs of God', where:'Meditations III, V', teaser:'The trademark argument (the idea of perfection needs a perfect cause) and the ontological argument (existence belongs to God’s essence).' },
      { title:'Mind and body', where:'Meditation VI', teaser:'The real distinction: a thinking, unextended thing and an extended, unthinking thing, “entirely and truly distinct,” able to exist apart.' },
    ] },
  principles: { id:'principles', title:'Principles of Philosophy',  year:'1644',     thinker:'descartes', form:'A textbook of the whole system', blurb:'Descartes lays out his entire physics and metaphysics as one teachable structure.', read:true, sections:[],
    stats: [
      { value:'1644', label:'Published (Latin)' },
      { value:'4', label:'Parts' },
      { value:'Cogito ergo sum', label:'Where the Latin slogan lives (I.7)' },
    ],
  },
  ethics:     { id:'ethics',     title:'Ethics',                    year:'1677',     thinker:'spinoza',   form:'Geometric proofs', blurb:'God-or-Nature, proved like Euclid: definitions, axioms, and propositions, all the way to blessedness.', read:true, sections:[],
    stats: [
      { value:'5', label:'Parts' },
      { value:'1677', label:'Published' },
      { value:'Geometric', label:'Method' },
    ],
    diagram: {
      kind:'ladder',
      title:'The climb from God to human freedom',
      rungs: [
        'God, or Nature (one infinite substance)',
        'The mind (the idea of the body)',
        'The emotions (derived from the conatus)',
        'Human bondage (ruled by the passions)',
        'Human freedom (the intellectual love of God)',
      ],
      caption:'The five Parts read as one ascent. Spinoza starts at the top of reality, the single infinite substance he calls God or Nature, works down into the human mind and its emotions, hits bottom in the bondage of the passions, and climbs back out through understanding to a freedom that arrives as the intellectual love of God.',
    },
    spine: [
      { where:'Part I', what:'Concerning God: there is only one substance, infinite and necessary, and it is God, or Nature.' },
      { where:'Part II', what:'The mind: thought and extension are two attributes of that one substance, so the mind is the idea of the body, not a separate thing.' },
      { where:'Part III', what:'The emotions, derived like theorems from the conatus, the striving by which each thing persists in its own being.' },
      { where:'Part IV', what:'Human bondage: being ruled by the passive emotions, swung by outside causes the mind does not understand.' },
      { where:'Part V', what:'Human freedom: understanding turns passion into power, ending in the intellectual love of God and blessedness.' },
    ],
    cast: [
      { name:'Spinoza', role:'proves a whole ethics in geometrical order, then withholds it until after his death' },
      { name:'The geometric method', role:'definitions, axioms, propositions, and Q.E.D.: the claim that how to live is as necessary as a theorem' },
      { name:'Descartes', role:'the foil: two substances and a free will, both of which Spinoza takes out' },
    ],
    passages: [
      { title:'God, or Nature', where:'Part I', teaser:'One infinite substance is all there is, and Nature is the name for how it expresses itself.' },
      { title:'The geometric method', where:'Throughout', teaser:'Definitions, then axioms, then numbered propositions, each proved and closed with Q.E.D.' },
      { title:'The illusion of free will', where:'Part III', teaser:'People feel free only because they see their choices and stay blind to the causes behind them.' },
      { title:'The bondage of the passions', where:'Part IV', teaser:'Being governed by emotions whose causes one does not understand is not weakness but being out-muscled.' },
      { title:'The intellectual love of God', where:'Part V', teaser:'The highest knowing carries a joy directed at the whole of which the mind knows itself a part, and that joy is blessedness itself.' },
    ] },
  monadology: { id:'monadology', title:'The Monadology',           year:'1714',     thinker:'leibniz',   form:'Ninety numbered points', blurb:'Reality is built of monads — windowless points of perception — in pre-established harmony.', read:true, sections:[],
    stats: [
      { value:'90', label:'Numbered sections' },
      { value:'1714', label:'Written (in French)' },
      { value:'No windows', label:'Monads, each mirroring all' },
    ],
  },
  leviathan:  { id:'leviathan',  title:'Leviathan',                year:'1651',     thinker:'hobbes',    form:'Four parts', blurb:'Why we trade our freedom to an absolute sovereign rather than live in the war of all against all.', read:true, sections:[],
    stats: [
      { value:'4', label:'Parts' },
      { value:'1651', label:'Published' },
      { value:'Social contract', label:'The tool it forged' },
    ],
    diagram: {
      kind:'pairs',
      title:'Why leave the state of nature',
      leftLabel:'No common power', rightLabel:'Under one sovereign',
      rows: [
        { left:'A war of every man against every man', right:'Peace, kept by a power able to overawe all' },
        { left:'No industry, farming, building, or arts', right:'The security in which all of those become possible' },
        { left:'Every man his own judge, so no end to the quarrel', right:'One undivided judgment everyone has agreed to obey' },
        { left:'Life solitary, poore, nasty, brutish, and short', right:'Life and limb protected, in exchange for obedience' },
      ],
      caption:'Hobbes builds the whole book from one comparison. Roughly equal people, with no common power above them, are driven by competition and fear into a war of all against all; the only exit is to hand the sword to a single undivided sovereign and owe it obedience in return for protection. The trade is the argument.',
    },
    spine: [
      { where:'Part I — Of Man', what:'From sense and appetite up to the state of nature and the laws of nature: what people are, and why, left alone, they end in war.' },
      { where:'Part II — Of Commonwealth', what:'The covenant that ends the war: why authority must be single and undivided, and what powers the sovereign must hold to keep the peace.' },
      { where:'Part III — Of a Christian Commonwealth', what:'Religion placed under the civil sovereign, with scripture read to deny any church a rival sword.' },
      { where:'Part IV — Of the Kingdom of Darkness', what:'The errors and clerical politics that divide authority and, Hobbes argues, breed exactly the civil war he had lived through.' },
    ],
    cast: [
      { name:'Hobbes', role:'writes in exile during the English Civil War, tracing the bloodshed to divided authority' },
      { name:'The Leviathan', role:'the "mortal god": one undivided sovereign holding both sword and crozier' },
      { name:'The state of nature', role:'the thought experiment that does all the work, men without a common power above them' },
      { name:'Locke and Rousseau', role:'the heirs who took up his method and turned it against his conclusion' },
    ],
    passages: [
      { title:'The state of nature', where:'Part I, ch. 13', teaser:'Strip away the common power and what remains is not freedom but a war of every man against every man.' },
      { title:'Nasty, brutish, and short', where:'Part I, ch. 13', teaser:'The most quoted line in political philosophy is a description of life with no state to keep the peace.' },
      { title:'The laws of nature', where:'Part I, chs. 14–15', teaser:'Reason’s own rules for survival, which point toward peace but bind no one until a power can enforce them.' },
      { title:'The covenant', where:'Part II, ch. 17', teaser:'Each lays down the right to govern himself, on condition every other does the same, and authorises one sovereign over all.' },
      { title:'The Kingdom of Darkness', where:'Part IV', teaser:'Every rival authority that divides the sword and clouds the judgment the sovereign needs his subjects to keep clear.' },
    ] },
  essay:      { id:'essay',      title:'Essay Concerning Human Understanding', year:'1689', thinker:'locke', form:'Four books', blurb:'There are no innate ideas; the mind starts blank and is written on by experience.', read:true, sections:[],
    stats: [
      { value:'4', label:'Books' },
      { value:'1689', label:'Published' },
      { value:'White paper', label:'The famous image' },
    ],
    diagram: {
      kind:'pairs',
      title:'Two kinds of quality',
      leftLabel:'Primary qualities', rightLabel:'Secondary qualities',
      rows: [
        { left:'Really in the body itself', right:'Only powers in the body to produce sensations in us' },
        { left:'Solidity, extension, figure, motion, number', right:'Colour, sound, taste, smell, warmth' },
        { left:'The idea resembles what is actually there', right:'The idea resembles nothing in the object' },
        { left:'Inseparable from the body in any state', right:'Drain away the moment no mind is perceiving' },
      ],
      caption:'Locke splits what the senses report. Some ideas (shape, size, motion) copy features genuinely in the body; others (colour, sound, taste) are real experiences in us but match nothing in the thing itself, which holds only the power to cause them. The line is the hinge Berkeley would later pull on to argue that nothing at all is left outside the mind.',
    },
    spine: [
      { where:'Book I', what:'Against innate ideas: there are none. If any were stamped in at birth, children and "idiots" would have them, and they do not.' },
      { where:'Book II', what:'Where ideas really come from: the two fountains of sensation and reflection, simple ideas combined into complex ones, and the white paper written on by experience.' },
      { where:'Book III', what:'Words: how general terms get their meaning, and how the abuse of words breeds most of the disputes that pass for philosophy.' },
      { where:'Book IV', what:'Knowledge: what it is (perceiving how ideas agree or clash), its three degrees, its narrow limits, and the clean border between reason and faith.' },
    ],
    cast: [
      { name:'Locke', role:'sets out to map the limits of the understanding so that what lies inside them can be trusted' },
      { name:'The two fountains', role:'sensation and reflection: the only two sources from which every idea is drawn' },
      { name:'White paper', role:'Locke’s own image for the mind at birth, void of all characters until experience writes on it' },
      { name:'Innate ideas', role:'the doctrine he spends Book I demolishing, that some truths are stamped in from birth' },
    ],
    passages: [
      { title:'No innate ideas', where:'Book I', teaser:'If truths were printed on the mind at birth, everyone would already have them, and plainly not everyone does.' },
      { title:'White paper', where:'Book II', teaser:'Suppose the mind to be white paper, void of all characters: how does it come to be furnished?' },
      { title:'The two fountains', where:'Book II', teaser:'Every idea flows from one of two sources, the outward senses and the inward observation of the mind’s own workings.' },
      { title:'Primary and secondary qualities', where:'Book II', teaser:'Shape is in the thing; colour is only a power in the thing to produce a sensation in you.' },
      { title:'Personal identity', where:'Book II', teaser:'What makes you the same person over time is not the same soul or body but the reach of your own consciousness.' },
      { title:'Reason and faith', where:'Book IV', teaser:'Faith has its own province beyond reason’s reach, but it can never license believing against what reason plainly knows.' },
    ] },
  treatise:   { id:'treatise',   title:'A Treatise of Human Nature',year:'1739',     thinker:'hume',      form:'Three books', blurb:'The boldest empiricism: on the self, cause and effect, and why reason is the slave of the passions.', read:true, sections:[],
    stats: [
      { value:'3', label:'Books' },
      { value:'1739–40', label:'Published' },
      { value:'“Dead-born”', label:'How Hume rated its reception' },
    ],
    diagram: {
      kind:'triad',
      title:'One demolition, three floors',
      leftLabel:'Book I — Understanding', midLabel:'Book II — Passions', rightLabel:'Book III — Morals',
      rows: [
        { left:'What the mind can actually know', mid:'What actually moves us to act', right:'How we tell right from wrong' },
        { left:'Cause is habit; the self is a bundle', mid:'Reason is, and ought to be, the slave of the passions', right:'Morals are felt through sympathy, not deduced' },
        { left:'No experiential receipt for necessary connection', mid:'Reason alone never sets an end, only finds the means', right:'No "ought" follows from an "is" without a further "ought"' },
      ],
      caption:'The three Books are one argument run three times. Each demands the experiential receipt for something everyone assumes is solid, necessary connection, the self, the move from fact to value, and each time reports, in a tone of perfect calm, that the receipt never appears.',
    },
    spine: [
      { where:'Book I — Of the Understanding', what:'The meaning-detector traces every idea to an impression, and finds none behind necessary connection or behind the self, which dissolves into a bundle of passing perceptions.' },
      { where:'Book II — Of the Passions', what:'The passions mapped, and the deliberately shocking claim that reason is, and ought only to be, the slave of the passions: it finds means, it never sets the ends.' },
      { where:'Book III — Of Morals', what:'Moral distinctions are felt through sympathy, not reasoned out; natural versus artificial virtues; and the observation that an "ought" never simply follows from an "is".' },
    ],
    cast: [
      { name:'Hume', role:'publishes the whole system before thirty, then watches it "fall dead-born from the press"' },
      { name:'Sympathy', role:'the natural capacity to catch others’ feelings, on which Hume rests all of morality' },
      { name:'The bundle', role:'what the self turns out to be once you look for it: a heap of perceptions, no owner found' },
      { name:'Kant', role:'reads the argument on causation and is "woken from his dogmatic slumber"' },
    ],
    passages: [
      { title:'Impressions and ideas', where:'Book I', teaser:'Every idea is a faded copy of some prior impression; no impression, no genuine idea behind the word.' },
      { title:'Cause and effect as habit', where:'Book I', teaser:'We never observe the necessity-glue between events, only one following another, until habit makes us expect it.' },
      { title:'The self as a bundle', where:'Book I', teaser:'Look inward for the self and you only ever catch a particular perception, never the owner of them all.' },
      { title:'Reason, slave of the passions', where:'Book II', teaser:'Reason alone moves nobody; it serves desires it cannot itself set or correct.' },
      { title:'Sympathy and moral sentiment', where:'Book III', teaser:'Approval and blame are feelings caught from others, not conclusions drawn by argument.' },
      { title:'The is–ought gap', where:'Book III', teaser:'Writers slide from what is to what ought to be without ever showing how the bridge is crossed.' },
    ] },
  enquiry:    { id:'enquiry',    title:'Enquiry Concerning Human Understanding', year:'1748', thinker:'hume', form:'Twelve sections', blurb:'The Treatise rewritten to actually be read: the problem of induction, sharpened.', read:true, sections:[],
    stats: [
      { value:'12', label:'Sections' },
      { value:'1748', label:'Published' },
      { value:'Induction', label:'The problem it sharpened' },
    ],
    diagram: {
      kind:'pairs',
      title:'Hume’s Fork',
      leftLabel:'Relations of ideas', rightLabel:'Matters of fact',
      rows: [
        { left:'True by the meaning of the terms alone', right:'True only by how the world happens to turn out' },
        { left:'Mathematics and logic', right:'Everything experience reports' },
        { left:'Certain, but tells you nothing new about the world', right:'Informative, but never certain' },
        { left:'To deny it is a flat contradiction', right:'To deny it is always perfectly conceivable' },
      ],
      caption:'Every claim worth anything, Hume argues, falls into one of two bins. The catch is that the whole of natural science lives in the right-hand bin, which means it rests on cause and effect, which rests on nothing firmer than past experience. That gap is the problem of induction.',
    },
    spine: [
      { where:'Sections 1–3', what:'The meaning-detector and the association of ideas: trace every idea back to the impression it copies, or treat it as empty.' },
      { where:'Section 4', what:'The fork, and the problem of induction: matters of fact rest on cause and effect, and cause and effect rest on nothing but past experience.' },
      { where:'Sections 5–7', what:'Custom as the answer: belief is habit, and the idea of necessary connection turns out to be the mind’s own expectation, projected onto the world.' },
      { where:'Sections 8–11', what:'The fork turned on the hard cases: liberty and necessity, miracles, and the argument for a designing providence.' },
      { where:'Section 12', what:'The sceptic’s conclusion: commit to the flames any book holding neither calculation nor experience, for it can contain nothing but sophistry and illusion.' },
    ],
    cast: [
      { name:'Hume', role:'rewrites the dead-born Treatise into the sharp, readable book he hoped would finally land' },
      { name:'Hume’s Fork', role:'the two-bin test that sorts every claim into the certain-but-empty or the informative-but-uncertain' },
      { name:'Custom', role:'the quiet hero: the habit that carries us where reason cannot, and the only source of the idea of necessity' },
      { name:'Kant', role:'reads Section 4 and spends the next era of philosophy trying to rebuild the floor Hume pulled up' },
    ],
    passages: [
      { title:'Impressions and ideas', where:'Sections 2–3', teaser:'Every idea is traced to a prior impression; a word with no impression behind it carries no real idea.' },
      { title:'Hume’s Fork', where:'Section 4', teaser:'Relations of ideas or matters of fact: certain and empty, or informative and uncertain, with nothing in between.' },
      { title:'The problem of induction', where:'Section 4', teaser:'That the future will resemble the past is the one assumption all reasoning leans on and none can prove.' },
      { title:'Custom and habit', where:'Sections 5–7', teaser:'What reason cannot justify, habit performs: it is custom, not logic, that makes us expect tomorrow.' },
      { title:'Of miracles', where:'Section 10', teaser:'No testimony can establish a miracle unless its falsehood would be a greater wonder than the event itself.' },
      { title:'Commit it to the flames', where:'Section 12', teaser:'A book with neither abstract reasoning nor matters of fact holds only sophistry and illusion: burn it.' },
    ] },
  cpr:        { id:'cpr',        title:'Critique of Pure Reason',   year:'1781',     thinker:'kant',      form:'A vast architecture', blurb:'What can the mind know? The book that says the mind shapes experience rather than copying it.', read:true, sections:[],
    stats: [
      { value:'1781', label:'First edition' },
      { value:'1787', label:'Second edition' },
      { value:'Synthetic a priori', label:'The question' },
    ],
    diagram: {
      kind:'pairs',
      title:'The two worlds the book draws a line between',
      leftLabel:'Phenomena (appearances)', rightLabel:'The thing-in-itself (noumena)',
      rows: [
        { left:'The world as our minds structure it', right:'The world as it is apart from any mind' },
        { left:'In space and time, under the categories', right:'Not in space or time; the categories do not reach it' },
        { left:'Knowable: the home ground of science', right:'Thinkable but never knowable' },
        { left:'Where causality and substance hold', right:'The loose end Fichte, Schelling, and Hegel would pull' },
      ],
      caption:'Kant’s "Copernican revolution" is the claim that objects conform to our way of knowing, not the reverse. The price is a permanent fence: we know the world only as it appears to minds built like ours, never as it is in itself. Everything the book builds, and everything German Idealism later tore down, sits on that line.',
    },
    spine: [
      { where:'Introduction', what:'The driving question: how are synthetic a priori judgments (informative truths known in advance of all experience, like "7 + 5 = 12") possible at all?' },
      { where:'Transcendental Aesthetic', what:'Space and time are not things out in the world but the mind’s own forms of intuition, which is why geometry can be both certain and about the world.' },
      { where:'Transcendental Analytic', what:'The categories of the understanding (causality, substance) are the a priori scaffolding every experience must fit; and the line is drawn between phenomena and the unknowable thing-in-itself.' },
      { where:'Transcendental Dialectic', what:'The illusions reason falls into when it oversteps experience: the antinomies, the paralogisms of the soul, and the demolition of the classic proofs of God.' },
      { where:'Doctrine of Method', what:'What is left for metaphysics once criticism has done its work: not a science of the beyond, but a disciplined account of reason’s own limits.' },
    ],
    cast: [
      { name:'Kant', role:'spends a silent decade, then publishes the book that resets philosophy, at fifty-seven' },
      { name:'Hume', role:'the spark: his attack on causation "woke Kant from his dogmatic slumber"' },
      { name:'The thing-in-itself', role:'the unknowable reality behind appearances, and the most argued-over move in the book' },
      { name:'The German Idealists', role:'Fichte, Schelling, Hegel, who took the thing-in-itself as the thread to pull' },
    ],
    passages: [
      { title:'The Copernican revolution', where:'Preface (2nd ed.)', teaser:'Stop assuming the mind conforms to objects; assume objects conform to the mind, and metaphysics becomes possible.' },
      { title:'The synthetic a priori', where:'Introduction', teaser:'Some truths are both informative and known in advance of experience; explaining how is the whole task.' },
      { title:'Space and time as forms of intuition', where:'Transcendental Aesthetic', teaser:'Space and time are not out there to be found; they are the lenses every experience is already wearing.' },
      { title:'The categories and causality', where:'Transcendental Analytic', teaser:'Cause and effect is not read off the world but supplied by the understanding as a condition of experience.' },
      { title:'Phenomena and the thing-in-itself', where:'Transcendental Analytic', teaser:'We know appearances, shaped by us; the thing as it is in itself is thought but never known.' },
      { title:'Existence is not a predicate', where:'Transcendental Dialectic', teaser:'The ontological proof of God fails because "exists" adds nothing to the concept of a thing.' },
    ] },
  groundwork: { id:'groundwork', title:'Groundwork of the Metaphysics of Morals', year:'1785', thinker:'kant', form:'Three sections', blurb:'The categorical imperative: act only on a rule you could will everyone to follow.', read:true, sections:[],
    stats: [
      { value:'1785', label:'Published' },
      { value:'3', label:'Sections' },
      { value:'Categorical imperative', label:'The supreme principle' },
    ],
    diagram: {
      kind:'pairs',
      title:'Two kinds of "ought"',
      leftLabel:'Hypothetical imperative', rightLabel:'Categorical imperative',
      rows: [
        { left:'"If you want X, then do Y"', right:'"Do Y", with no strings' },
        { left:'Binds only if you happen to want the end', right:'Binds every rational being, no matter what they want' },
        { left:'A counsel of skill or prudence', right:'The form of a moral law' },
        { left:'Its force borrowed from a desire', right:'Its force from reason alone' },
      ],
      caption:'Kant’s whole ethics turns on this split. Most "shoulds" are conditional: they grip you only because you want something. A moral "should" is different in kind, binding unconditionally, which is why Kant thinks it can come only from reason and not from any desire, reward, or consequence.',
    },
    spine: [
      { where:'Section I', what:'From common moral thought to the good will: the only thing good without qualification, and the difference between acting from duty and merely in accordance with it.' },
      { where:'Section II', what:'From popular morality to the categorical imperative, with its formulas worked out: universal law, humanity as an end in itself, and the kingdom of ends.' },
      { where:'Section III', what:'From the moral law to freedom: morality is possible only if the will is autonomous, giving the law to itself rather than taking it from outside.' },
    ],
    cast: [
      { name:'Kant', role:'sets out to find the supreme principle of morality by pure reason, owing nothing to consequences' },
      { name:'The good will', role:'the one thing good without qualification: a will that acts from duty, not for reward' },
      { name:'The categorical imperative', role:'the unconditional command of reason, stated in several equivalent formulas' },
      { name:'The shopkeeper', role:'Kant’s worked case: honest only because honesty pays, so acting in accordance with duty but not from it' },
    ],
    passages: [
      { title:'The good will', where:'Section I', teaser:'Nothing in the world can be called good without qualification except a good will.' },
      { title:'Duty versus inclination', where:'Section I', teaser:'The honest shopkeeper who is honest only for profit acts in accordance with duty, not from it.' },
      { title:'The formula of universal law', where:'Section II', teaser:'Act only on a maxim you could will to become a universal law; the lying promise fails the test.' },
      { title:'Humanity as an end', where:'Section II', teaser:'Treat humanity, in yourself and others, always as an end and never merely as a means.' },
      { title:'The kingdom of ends', where:'Section II', teaser:'Act as a lawmaking member of a community in which every rational being is both author and subject of the law.' },
      { title:'Autonomy and freedom', where:'Section III', teaser:'A will bound by a law it gives itself is free; morality and freedom turn out to be the same discovery.' },
    ] },
  phenomenology:{ id:'phenomenology', title:'Phenomenology of Spirit', year:'1807', thinker:'hegel',    form:'A journey of consciousness', blurb:'Spirit climbing toward self-knowledge: the master and slave, the unhappy consciousness, and more.', read:true, sections:[],
    stats: [
      { value:'1807', label:'Published' },
      { value:'Jena', label:'Finished as Napoleon entered' },
      { value:'Geist', label:'Its real subject' },
    ],
    diagram: {
      kind:'ladder',
      title:'The ladder of consciousness',
      rungs: [
        'Sense-certainty (the bare "this, here, now")',
        'Perception and the understanding',
        'Self-consciousness (the master–slave struggle for recognition)',
        'Reason (looking for the self in the world)',
        'Spirit / Geist (the "I that is We": the ethical world and its collapse)',
        'Religion',
        'Absolute Knowing',
      ],
      caption:'The book is a ladder, and the rungs are not topics but stages of awareness. Each shape of consciousness sets up its own standard for what is real, then fails by that very standard, and the failure forces the next rung. Hegel calls the engine determinate negation, or *Aufhebung*: each collapse cancels, preserves, and lifts up at once.',
    },
    spine: [
      { where:'Consciousness', what:'Sense-certainty, perception, and the understanding: the attempt to grasp the bare object "out there" keeps dissolving into something the mind has shaped.' },
      { where:'Self-consciousness', what:'The struggle for recognition and the master–slave (lordship-and-bondage) dialectic, where the bondsman, not the lord, wins through fear and work; then the unhappy consciousness.' },
      { where:'Reason', what:'Consciousness now looks for itself in the world, in observation and action, and finds it cannot be read off nature alone.' },
      { where:'Spirit (Geist)', what:'The "I that is We": the shared ethical world, its tragic collapse (Antigone), the world of culture, and the Terror of the Revolution.' },
      { where:'Religion and Absolute Knowing', what:'Spirit grasps itself in images, then at last recognizes the whole climb as its own self-knowledge.' },
    ],
    cast: [
      { name:'Hegel', role:'finishes the manuscript in a rush as Napoleon’s army enters Jena, October 1806' },
      { name:'Geist (Spirit)', role:'the real protagonist: not a ghost but the shared, developing life of minds coming to know themselves' },
      { name:'The master and the bondsman', role:'the most influential dozen pages Hegel wrote: recognition, the fear of death, and labour' },
      { name:'Marx, Kojève, Beauvoir, Fanon', role:'the afterlife: the master–slave reading reborn in revolution, existentialism, and anticolonial thought' },
    ],
    passages: [
      { title:'The way of despair', where:'Introduction', teaser:'The climb is a sequence of collapses; each shape of consciousness is undone by its own standard (Aufhebung).' },
      { title:'Sense-certainty', where:'Consciousness', teaser:'The attempt to grasp the bare "this, here, now" turns, on inspection, into something universal.' },
      { title:'Lordship and bondage', where:'Self-consciousness', teaser:'Two self-consciousnesses fight for recognition; the one who fears death and works ends up the freer of the two.' },
      { title:'The unhappy consciousness', where:'Self-consciousness', teaser:'The divided self that puts its own essence in a beyond it can never reach.' },
      { title:'Substance is also Subject', where:'Preface', teaser:'Reality is not an inert given but an active, self-developing whole; "the truth is the whole".' },
      { title:'Absolute Knowing', where:'The close', teaser:'Spirit looks back and recognizes the entire journey as its own coming-to-know-itself.' },
    ] },
  wwr:        { id:'wwr',        title:'The World as Will and Representation', year:'1818', thinker:'schopenhauer', form:'Four books', blurb:'Behind every appearance is a single blind striving Will, and the only escape is art and compassion.', read:true, sections:[],
    stats: [
      { value:'1818', label:'Published (vol. II 1844)' },
      { value:'4', label:'Books' },
      { value:'One thought', label:'From four sides' },
    ],
    diagram: {
      kind:'ladder',
      title:'One thought, told from four sides',
      rungs: [
        'Book I — the world as Representation (Kant’s appearances)',
        'Book II — the world as Will (the thing-in-itself, felt in the body)',
        'Book III — the Ideas and art (escape through will-less contemplation)',
        'Book IV — ethics and the denial of the will (compassion, asceticism)',
      ],
      caption:'Schopenhauer said the book communicates a single thought, approached from four directions. Start with the world as it appears, find the blind Will behind it, glimpse the brief escape art offers, and end at the lasting one: turning the will against itself.',
    },
    spine: [
      { where:'Book I — Representation', what:'The world as idea: every object exists only for a subject, in the forms of space, time, and causality (the principle of sufficient reason).' },
      { where:'Book II — Will', what:'Through one’s own body, the thing-in-itself is revealed as Will: a single, blind, aimless striving that objectifies itself in everything from gravity to human desire.' },
      { where:'Book III — Idea and art', what:'Will-less aesthetic contemplation lifts a person briefly out of striving; the arts are ranked, with music as the direct copy of the Will itself, not of the Ideas.' },
      { where:'Book IV — Ethics and denial', what:'Since willing is lack, life is suffering; the way out is compassion (seeing through the illusion of separateness) and finally the ascetic denial of the will.' },
    ],
    cast: [
      { name:'Schopenhauer', role:'publishes his whole system at thirty and waits decades for anyone to read it' },
      { name:'The Will', role:'the thing-in-itself: one blind, purposeless striving behind every appearance' },
      { name:'Music', role:'the one art that copies the Will directly, which is why it moves us so deeply' },
      { name:'Kant and the Upanishads', role:'his two acknowledged sources: the appearance/thing-in-itself split, and the Veil of Maya' },
    ],
    passages: [
      { title:'The world is my idea', where:'Book I, §1', teaser:'The opening line: the world is only ever given as representation, an object for a subject.' },
      { title:'The world as Will', where:'Book II', teaser:'The body is the one window through which the thing-in-itself shows itself, and it shows itself as will.' },
      { title:'Music as the copy of the Will', where:'Book III, §52', teaser:'Music is not a copy of the Ideas like the other arts, but a copy of the Will itself.' },
      { title:'The pendulum of suffering', where:'Book IV, §57', teaser:'All willing springs from lack, so life swings between the pain of want and the emptiness of boredom.' },
      { title:'Compassion and the denial of the will', where:'Book IV', teaser:'To see through the illusion of separateness is the root of ethics; to turn the will against itself is the only lasting peace.' },
    ] },
  liberty:    { id:'liberty',    title:'On Liberty',                year:'1859',     thinker:'mill',      form:'Five chapters', blurb:'The one principle: power may be used over a person against their will only to prevent harm to others.', read:true, sections:[],
    stats: [
      { value:'1859', label:'Published' },
      { value:'5', label:'Chapters' },
      { value:'The harm principle', label:'Its one rule' },
    ],
    diagram: {
      kind:'pairs',
      title:'Where society’s power stops',
      leftLabel:'Self-regarding', rightLabel:'Other-regarding',
      rows: [
        { left:'Concerns chiefly the person himself', right:'Affects the interests of other people' },
        { left:'Belief, taste, lifestyle, what one reads or says', right:'Acts that harm or endanger others' },
        { left:'Society may argue and persuade, never compel', right:'Society may rightfully restrain and punish' },
        { left:'Liberty here is near-absolute', right:'Liberty ends where harm to others begins' },
      ],
      caption:'The whole book turns on one line. Power may be exercised over a member of a civilized community against his will only to prevent harm to others; his own good is never a sufficient warrant. Draw that boundary and free speech, individuality, and the limits of the state all follow.',
    },
    spine: [
      { where:'Ch. 1 — Introductory', what:'The real modern danger is not the tyrant but the tyranny of the majority: social pressure that crushes the individual more thoroughly than any law.' },
      { where:'Ch. 2 — Liberty of Thought and Discussion', what:'The four-ground case for free speech: silence no opinion, because it may be true, may hold part of the truth, must be contested to stay alive, and must be understood to be really held.' },
      { where:'Ch. 3 — Of Individuality', what:'Individuality as an element of well-being: a person who lets the world choose his plan of life needs only the ape-like faculty of imitation.' },
      { where:'Ch. 4 — Limits of Society’s Authority', what:'The harm principle applied: where conduct is self-regarding the individual is sovereign; only other-regarding harm licenses interference.' },
      { where:'Ch. 5 — Applications', what:'The hard cases (poisons, the unsafe bridge, incitement, the sale of freedom into slavery) that test exactly where the line falls.' },
    ],
    cast: [
      { name:'Mill', role:'writes the century’s defining defense of individual freedom against both state and crowd' },
      { name:'Harriet Taylor', role:'the dedicatee, whom Mill credits as a genuine joint author of the book' },
      { name:'The harm principle', role:'the one criterion: only preventing harm to others can justify coercion' },
      { name:'The tyranny of the majority', role:'the new threat: not law but custom and opinion enforcing conformity' },
    ],
    passages: [
      { title:'The harm principle', where:'Ch. 1', teaser:'The sole end for which mankind is warranted in interfering with the liberty of any of their number is self-protection.' },
      { title:'The tyranny of the majority', where:'Ch. 1', teaser:'Social tyranny is more formidable than many kinds of political oppression, since it leaves fewer means of escape.' },
      { title:'The four grounds for free speech', where:'Ch. 2', teaser:'Even one dissenter must be heard, because the silenced opinion may be true, or part-true, or the only thing keeping the truth alive.' },
      { title:'Knowing only your own side', where:'Ch. 2', teaser:'He who knows only his own side of the case knows little even of that.' },
      { title:'Individuality', where:'Ch. 3', teaser:'A person whose desires and impulses are his own has a character; one who lets the world choose for him has none.' },
    ] },
  utilitarianism:{ id:'utilitarianism', title:'Utilitarianism',    year:'1863',     thinker:'mill',      form:'Five chapters', blurb:'The greatest-happiness principle defended, with higher and lower pleasures, against its critics.', read:true, sections:[],
    stats: [
      { value:'1863', label:'Published' },
      { value:'5', label:'Chapters' },
      { value:'Higher pleasures', label:'Mill’s revision' },
    ],
    diagram: {
      kind:'pairs',
      title:'Mill’s answer to the "doctrine worthy of swine"',
      leftLabel:'Higher pleasures', rightLabel:'Lower pleasures',
      rows: [
        { left:'Of the intellect, feelings, imagination, moral sense', right:'Of the body and the senses' },
        { left:'Preferred by those who have known both kinds', right:'Chosen by those who have known nothing better' },
        { left:'"Better to be Socrates dissatisfied…"', right:'"…than a fool satisfied"' },
        { left:'Count for more by their quality', right:'Count for less, however intense' },
      ],
      caption:'Bentham measured pleasure by quantity alone, which made utilitarianism sound like a philosophy for pigs. Mill’s repair is qualitative: some pleasures are higher than others, and the only judge is the competent person who has actually tasted both.',
    },
    spine: [
      { where:'Ch. 1 — General Remarks', what:'Morality has limped for 2,000 years without an agreed first principle; the greatest-happiness principle is offered as that missing foundation.' },
      { where:'Ch. 2 — What Utilitarianism Is', what:'The principle stated, the "worthy only of swine" objection answered by higher vs lower pleasures and the competent-judges test, and the standard objections met.' },
      { where:'Ch. 3 — The Ultimate Sanction', what:'What actually binds a person to the principle: external sanctions, and above all the internal sanction of conscience, a feeling of duty.' },
      { where:'Ch. 4 — Of What Proof It Is Susceptible', what:'The notorious "proof": the only evidence that a thing is desirable is that people desire it, so the general happiness is desirable.' },
      { where:'Ch. 5 — Justice and Utility', what:'The hardest chapter: reconciling the powerful feelings of justice and rights with the utilitarian standard, treating them as the most vital class of utilities.' },
    ],
    cast: [
      { name:'Mill', role:'defends and refines the greatest-happiness principle against a century of caricature' },
      { name:'The competent judges', role:'those who have known both higher and lower pleasures, and whose verdict settles which is which' },
      { name:'Bentham', role:'the foil: the quantity-only hedonism Mill keeps but qualifies' },
      { name:'The "proof"', role:'the desirable-is-what-is-desired argument, ever after accused of a fallacy' },
    ],
    passages: [
      { title:'The greatest-happiness principle', where:'Ch. 2', teaser:'Actions are right as they tend to promote happiness, wrong as they tend to produce the reverse.' },
      { title:'Higher and lower pleasures', where:'Ch. 2', teaser:'Some kinds of pleasure are more desirable and more valuable than others, by quality and not merely quantity.' },
      { title:'Socrates dissatisfied', where:'Ch. 2', teaser:'Better to be a human being dissatisfied than a pig satisfied; better Socrates dissatisfied than a fool satisfied.' },
      { title:'The proof of utility', where:'Ch. 4', teaser:'The sole evidence that anything is desirable is that people actually do desire it.' },
      { title:'Justice and rights', where:'Ch. 5', teaser:'Justice names the most sacred and binding part of morality, but it rests, Mill argues, on utility after all.' },
    ] },
  feartrembling:{ id:'feartrembling', title:'Fear and Trembling',  year:'1843',     thinker:'kierkegaard', form:'Under a pseudonym', blurb:'Abraham raising the knife over Isaac: faith as a leap that reason can neither reach nor justify.', read:true, sections:[],
    stats: [
      { value:'1843', label:'Published' },
      { value:'Johannes de silentio', label:'The pseudonym' },
      { value:'Genesis 22', label:'The story it circles' },
    ],
    diagram: {
      kind:'pairs',
      title:'Two responses to losing everything',
      leftLabel:'Knight of infinite resignation', rightLabel:'Knight of faith',
      rows: [
        { left:'Gives up the finite thing for good', right:'Gives it up and expects to receive it back' },
        { left:'Finds a kind of peace in renunciation', right:'Believes the impossible, on the strength of the absurd' },
        { left:'A movement reason can follow and admire', right:'A movement reason cannot reach at all' },
        { left:'The tragic hero, like Agamemnon', right:'Abraham, who from outside looks like a murderer' },
      ],
      caption:'Kierkegaard (writing as Johannes de silentio, "John of the Silence") separates two figures often confused. The first nobly lets go. The second lets go and still believes he will get it back in this life. Only the second has faith, and it is a movement Johannes confesses he cannot make or even understand.',
    },
    spine: [
      { where:'Exordium & Eulogy on Abraham', what:'Four retellings of the journey to Mount Moriah, then praise of Abraham as the father of faith whom no one can quite comprehend.' },
      { where:'Preliminary Expectoration', what:'Infinite resignation versus faith "by virtue of the absurd"; the knight of faith who looks like a contented tax collector.' },
      { where:'Problema I', what:'Is there a teleological suspension of the ethical? Can the single individual stand higher than the universal moral law?' },
      { where:'Problema II', what:'Is there an absolute duty to God that can override what ethics commands?' },
      { where:'Problema III', what:'Was Abraham justified in keeping silent, in saying nothing to Sarah or Isaac about what he had been asked to do?' },
    ],
    cast: [
      { name:'Johannes de silentio', role:'the pseudonym, an author who admires faith but admits he cannot achieve it' },
      { name:'Abraham', role:'the knight of faith, commanded to sacrifice Isaac, suspended between murder and obedience' },
      { name:'The tragic hero', role:'Agamemnon and his kind, who sacrifice for the universal and stay inside ethics' },
      { name:'Hegel’s System', role:'the target: a philosophy in which the individual is always lower than the universal' },
    ],
    passages: [
      { title:'The teleological suspension of the ethical', where:'Problema I', teaser:'If Abraham is justified, the single individual can be higher than the universal, and ethics is not the last word.' },
      { title:'Faith by virtue of the absurd', where:'Preliminary Expectoration', teaser:'Abraham believes he will not lose Isaac, not despite the impossibility but on the strength of it.' },
      { title:'The knight of faith', where:'Preliminary Expectoration', teaser:'He looks exactly like a tax collector or a shopkeeper; nothing outward betrays the infinite movement he has made.' },
      { title:'Abraham’s silence', where:'Problema III', teaser:'He cannot explain himself, because what he is doing cannot be said in the language of the universal.' },
    ] },
  manifesto:  { id:'manifesto',  title:'The Communist Manifesto',  year:'1848',     thinker:'marx',      form:'A pamphlet', blurb:'All history is the history of class struggle, written to set a continent alight.', read:true, sections:[],
    stats: [
      { value:'1848', label:'Published' },
      { value:'4', label:'Sections' },
      { value:'Marx & Engels', label:'Authors' },
    ],
    diagram: {
      kind:'pairs',
      title:'The two classes of the modern age',
      leftLabel:'Bourgeoisie', rightLabel:'Proletariat',
      rows: [
        { left:'Owns the means of production', right:'Owns only its own labour-power' },
        { left:'Revolutionised production like no class before it', right:'The class its own revolution called into being' },
        { left:'"Constant revolutionising of production"', right:'"Nothing to lose but its chains"' },
        { left:'Piles up wealth', right:'"Produces, above all, its own grave-diggers"' },
      ],
      caption:'The pamphlet reads industrial society as a single great antagonism. The same bourgeoisie whose energy Marx genuinely admires (it has accomplished wonders surpassing the pyramids) creates, by massing workers in factories, the class that will end it.',
    },
    spine: [
      { where:'I — Bourgeois and Proletarians', what:'History as the history of class struggle; an awed account of what capitalism achieved, then the contradiction that turns it against itself.' },
      { where:'II — Proletarians and Communists', what:'The program: the abolition of bourgeois (not all) private property, and the answers to the objections about family, country, and eternal truths.' },
      { where:'III — Socialist and Communist Literature', what:'A brisk, often scornful survey of the rival socialisms of the day, clearing the ground for this one.' },
      { where:'IV — Position Toward the Opposition', what:'The tactics and the close, ending on the call for the workers of all countries to unite.' },
    ],
    cast: [
      { name:'Marx & Engels', role:'commissioned by the Communist League to state its aims; Engels a genuine co-author' },
      { name:'The bourgeoisie', role:'the revolutionary class whose achievements Marx praises before predicting its fall' },
      { name:'The proletariat', role:'the working class that capitalism creates and concentrates, and that will bury it' },
      { name:'What came after', role:'the 20th-century states built in its name, which the 1848 text neither describes nor licenses' },
    ],
    passages: [
      { title:'A spectre is haunting Europe', where:'Preamble', teaser:'The opening line that announces communism as a power the old order already fears.' },
      { title:'All history is class struggle', where:'Section I', teaser:'The history of all hitherto existing society is the history of class struggles.' },
      { title:'All that is solid melts into air', where:'Section I', teaser:'Capitalism’s endless upheaval sweeps away every fixed, fast-frozen relation.' },
      { title:'Its own grave-diggers', where:'Section I', teaser:'What the bourgeoisie produces, above all, are the workers who will end it.' },
      { title:'Workers of all countries, unite', where:'Section IV', teaser:'The proletarians have nothing to lose but their chains; they have a world to win.' },
    ] },
  capital:    { id:'capital',    title:'Capital, Volume I',        year:'1867',     thinker:'marx',      form:'Eight parts', blurb:'A forensic anatomy of capitalism: the commodity, surplus value, and where profit really comes from.', read:true, sections:[],
    stats: [
      { value:'1867', label:'Volume I published' },
      { value:'8', label:'Parts' },
      { value:'Surplus value', label:'The engine it exposes' },
    ],
    diagram: {
      kind:'ladder',
      title:'From a single commodity to capital',
      rungs: [
        'The commodity (use-value and exchange-value)',
        'Value as socially necessary labour time',
        'Money, and the circuit M–C–M′ (value that grows)',
        'Labour-power: the commodity that makes more than it costs',
        'Surplus value: the unpaid portion of the working day',
        'Accumulation, and the bloody "primitive accumulation"',
      ],
      caption:'Marx builds the whole system one rung at a time, starting from the most ordinary thing imaginable, a single commodity, and climbing until the source of profit is exposed: not clever trading, but the unpaid labour locked inside every working day.',
    },
    spine: [
      { where:'Parts I–II', what:'The commodity, value, and money; then the transformation of money into capital (the M–C–M′ circuit, value that seeks to expand itself).' },
      { where:'Part III', what:'The production of absolute surplus value: labour-power as a special commodity, and the working day split into necessary and surplus labour.' },
      { where:'Parts IV–VI', what:'Relative surplus value: cooperation, machinery, and modern industry; and the form wages take that hides the unpaid labour.' },
      { where:'Part VII', what:'The accumulation of capital: how surplus value is reinvested, concentrating wealth at one pole and labour at the other.' },
      { where:'Part VIII', what:'So-called primitive accumulation: the conquest, enclosure, and plunder that gave capitalism its original stock.' },
    ],
    cast: [
      { name:'Marx', role:'spends decades in the British Museum writing the scientific anatomy of capitalism' },
      { name:'The commodity', role:'the cell-form he starts from, where use-value and exchange-value first split apart' },
      { name:'Labour-power', role:'the one commodity whose use creates more value than it costs: the secret of profit' },
      { name:'The labour theory of value', role:'the engine of the argument, and the part later economics most disputes' },
    ],
    passages: [
      { title:'The commodity', where:'Part I', teaser:'Every commodity has a use-value and an exchange-value, and prying those two apart starts the whole analysis.' },
      { title:'Commodity fetishism', where:'Part I', teaser:'Under capitalism the social relations between people take on the fantastic form of relations between things.' },
      { title:'Surplus value', where:'Part III', teaser:'Profit comes from the unpaid hours of the working day, the labour the worker gives but is not paid for.' },
      { title:'The working day', where:'Part III', teaser:'The documented horror of the factory: capital as dead labour that, vampire-like, lives by sucking living labour.' },
      { title:'Primitive accumulation', where:'Part VIII', teaser:'Capital comes into the world dripping, from head to foot, from every pore, with blood and dirt.' },
    ] },
  zarathustra:{ id:'zarathustra',title:'Thus Spoke Zarathustra',   year:'1883–1885',thinker:'nietzsche', form:'A prophet’s tale', blurb:'God is dead; behold the Übermensch and the eternal recurrence — philosophy as scripture and song.', read:true, sections:[],
    stats: [
      { value:'4', label:'Parts (1883–1885)' },
      { value:'Übermensch', label:'The meaning of the earth' },
      { value:'Eternal recurrence', label:'The heaviest weight' },
    ],
  },
  beyondgood: { id:'beyondgood', title:'Beyond Good and Evil',     year:'1886',     thinker:'nietzsche', form:'Nine parts', blurb:'An assault on every inherited certainty, and the will to power beneath our talk of truth and morals.', read:true, sections:[],
    stats: [
      { value:'1886', label:'Published' },
      { value:'296', label:'Aphorisms' },
      { value:'Will to power', label:'The drive beneath' },
    ],
    diagram: {
      kind:'pairs',
      title:'The two moralities',
      leftLabel:'Master morality', rightLabel:'Slave morality',
      rows: [
        { left:'Invents "good" and "bad"', right:'Invents "good" and "evil"' },
        { left:'"Good" = noble, strong, life-affirming (himself)', right:'"Good" = meek, harmless, humble (the weak)' },
        { left:'"Bad" = the contemptible, the low', right:'"Evil" = the strong, now made into the villain' },
        { left:'Springs from overflowing self-affirmation', right:'Springs from ressentiment, a "No" to the powerful' },
      ],
      caption:'Nietzsche’s most explosive distinction, offered as history not battle-cry. The strong once named themselves "good" and their opposite merely "bad." The weak, unable to act, took revenge in imagination, recoining the strong as "evil" and themselves as "good." Modern morality, he argues, is the descendant of that second move.',
    },
    spine: [
      { where:'Part 1 — Prejudices of Philosophers', what:'The will to truth interrogated: philosophers as unconscious memoirists, and the demand to go behind the opposition of values.' },
      { where:'Parts 2–4 — The free spirit, religion, maxims', what:'The new philosophers of the future, the critique of religion as a use of the will, and a run of aphorisms.' },
      { where:'Parts 5–7 — Morals, scholars, our virtues', what:'The natural history of morals, the rank of the genuine philosopher above the scholar, and the honesty of the free spirit.' },
      { where:'Part 9 — What is Noble?', what:'Master morality versus slave morality, ressentiment, and the transvaluation, the seed the Genealogy would systematize a year later.' },
    ],
    cast: [
      { name:'Nietzsche', role:'writes the "prelude to a philosophy of the future" after Zarathustra' },
      { name:'The will to power', role:'the basic drive he reads beneath knowledge, morality, and life: self-expansion, not mere domination' },
      { name:'The free spirit', role:'the thinker who can live beyond the inherited opposition of good and evil' },
      { name:'Elisabeth and the aftermath', role:'the sister who later cobbled the notes into "The Will to Power" and steered the legacy toward the Nazis' },
    ],
    passages: [
      { title:'The will to truth', where:'Part 1', teaser:'Why do we want truth rather than untruth? The question almost no philosopher had thought to ask.' },
      { title:'Philosophy as confession', where:'§6', teaser:'Every great philosophy is the personal confession of its author, an involuntary memoir.' },
      { title:'The will to power', where:'§13, §259', teaser:'Life itself is will to power; self-preservation is only one of its results.' },
      { title:'Master and slave morality', where:'§260', teaser:'Two root types of value: the noble who affirms himself, and the powerless who begins from a "No" to the strong.' },
      { title:'Gazing into the abyss', where:'§146', teaser:'He who fights monsters should see that he does not become one; gaze into the abyss and it gazes back.' },
    ] },
  genealogy:  { id:'genealogy',  title:'On the Genealogy of Morals',year:'1887',    thinker:'nietzsche', form:'Three essays', blurb:'Where did "good" and "evil" come from? A history of morality as the slave’s revenge on the master.', read:true, sections:[],
    stats: [
      { value:'1887', label:'Published' },
      { value:'3', label:'Essays' },
      { value:'A Polemic', label:'Its subtitle' },
    ],
    diagram: {
      kind:'triad',
      title:'Three essays, three excavations',
      leftLabel:'First Essay', midLabel:'Second Essay', rightLabel:'Third Essay',
      rows: [
        { left:'"Good and Evil," "Good and Bad"', mid:'"Guilt," "Bad Conscience"', right:'The meaning of ascetic ideals' },
        { left:'Where our moral words came from', mid:'Where conscience came from', right:'Why self-denial has ruled' },
        { left:'The slave revolt and ressentiment', mid:'Debt, punishment, instinct turned inward', right:'The priest, and science as its heir' },
      ],
      caption:'Not a treatise but three linked digs into the buried origins of morality. Each essay takes something we treat as eternal, our values, our conscience, our reverence for self-denial, and asks where it actually came from and what it conceals.',
    },
    spine: [
      { where:'Preface', what:'The real question is not which morality is true but what our morality is worth, and where its values came from.' },
      { where:'First Essay', what:'Two value systems: master morality (good/bad) and the slave revolt that, out of ressentiment, recoins the strong as "evil."' },
      { where:'Second Essay', what:'Conscience traced to the creditor/debtor relation; the "bad conscience" as the instincts turned inward when society caged them.' },
      { where:'Third Essay', what:'Why the ascetic ideal has ruled: the will would rather will nothingness than not will at all, and science is its latest disguise.' },
    ],
    cast: [
      { name:'Nietzsche', role:'writes his most systematic book to make the scattered Beyond Good and Evil case land' },
      { name:'Ressentiment', role:'the impotent rancor of the weak that, denied action, takes its revenge by inventing values' },
      { name:'The ascetic priest', role:'the figure who gives suffering a meaning and so rules the herd' },
      { name:'The "blond beast"', role:'the predator-core of every noble race (Roman, Arab, Greek, Viking), not the Germanic emblem the Nazis made of it' },
    ],
    passages: [
      { title:'The slave revolt in morality', where:'First Essay', teaser:'When the powerless cannot strike back, they take their revenge in the imagination, by recoining their masters as "evil."' },
      { title:'Ressentiment', where:'First Essay', teaser:'A morality born not of self-affirmation but of a festering "No" to everything strong and noble.' },
      { title:'The bad conscience', where:'Second Essay', teaser:'When the old instincts can no longer discharge outward, they turn inward, and that turning is the origin of the soul.' },
      { title:'The ascetic ideal', where:'Third Essay', teaser:'Self-denial has ruled because a meaning, any meaning, was better than the void of meaninglessness.' },
      { title:'Rather will nothingness', where:'Third Essay', teaser:'The closing verdict: the human will would sooner will nothingness than not will at all.' },
    ] },
  gayscience: { id:'gayscience', title:'The Gay Science',          year:'1882',     thinker:'nietzsche', form:'Aphorisms', blurb:'The madman runs into the marketplace crying that we have killed God, and asks what comes next.', read:true, sections:[],
    stats: [
      { value:'1882', label:'Published (Book V 1887)' },
      { value:'§125', label:'"God is dead"' },
      { value:'Amor fati', label:'The answer it reaches' },
    ],
    diagram: {
      kind:'pairs',
      title:'The death of God: catastrophe and opening',
      leftLabel:'The crisis', rightLabel:'The opening',
      rows: [
        { left:'The ground of all values has been cut away', right:'No fixed horizon means the sea is open again' },
        { left:'"What were we doing when we unchained this earth from its sun?"', right:'Values can be created, not merely received' },
        { left:'The deed is too great; we have not grasped it', right:'A "gay" science: knowledge pursued with courage and lightness' },
        { left:'Nihilism, if nothing replaces the old faith', right:'Amor fati: to love one’s fate, and will it again' },
      ],
      caption:'The book where "God is dead" first rings out, and it is a cry of horror, not triumph. The madman finds the marketplace empty of belief and asks who will wipe the blood off humanity’s hands. The same loss, faced with courage, becomes an open sea: the chance to create meaning rather than inherit it.',
    },
    spine: [
      { where:'The title', what:'The "gay science" (gaya scienza) of the troubadours: knowledge pursued with lightness, courage, and a singing spirit.' },
      { where:'§125 — The madman', what:'The death of God announced as a deed humanity has done without yet grasping it, a catastrophe still travelling toward us.' },
      { where:'§341 — The heaviest weight', what:'Eternal recurrence as a thought experiment: a demon asks whether you could will this same life, in every detail, an infinite number of times.' },
      { where:'§344 — The will to truth', what:'Even science rests on a faith, the conviction that truth matters more than untruth, which is itself a metaphysical belief.' },
      { where:'§343 — Book V', what:'"The greatest recent event, that God is dead, has begun to cast its shadows": the long aftermath, and the open sea ahead.' },
    ],
    cast: [
      { name:'Nietzsche', role:'writes his warmest, most personal book in a burst of recovered health (Sanctus Januarius)' },
      { name:'The madman', role:'who carries a lantern in daylight, seeking the God the marketplace has already abandoned' },
      { name:'Eternal recurrence', role:'the thought meant to test whether a person can affirm life utterly' },
      { name:'Amor fati', role:'the love of fate: to want nothing other than what is, forwards or backwards, for all eternity' },
    ],
    passages: [
      { title:'God is dead', where:'§125', teaser:'The madman’s cry: we have killed him, you and I, and the deed is greater than we can yet bear.' },
      { title:'The heaviest weight', where:'§341', teaser:'Would you live this exact life again, eternally? The question is a weight, or a liberation.' },
      { title:'Amor fati', where:'§276', teaser:'The New Year’s vow: to learn to see as beautiful what is necessary, and so to become a yes-sayer.' },
      { title:'The faith in truth', where:'§344', teaser:'Even the scientist who rejects God still kneels at the altar of truth, an unexamined faith.' },
      { title:'The open sea', where:'§343', teaser:'With the old horizon gone, the sea, our sea, lies open again; perhaps there has never been so open a sea.' },
    ] },
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
