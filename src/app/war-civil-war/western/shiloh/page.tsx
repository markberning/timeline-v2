'use client'

// BATTLE dossier (Battle of Shiloh). Same shape as Antietam: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a2e21, #2a221c, #0a0806).

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-shiloh' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Shiloh',
  date: 'April 6–7, 1862',
  place: 'Pittsburg Landing, Tennessee',
  hero: {
    img: '/war-img/shiloh-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '2 days' },
    { label: 'Casualties', value: '~23,700' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Armies of the Tennessee & Ohio', str: '~66,000 troops', cmd: 'Grant & Buell', note: `Caught unentrenched at dawn, saved by the river and the night.` },
    { side: 'c', tag: 'Confederacy', force: 'Army of the Mississippi', str: '~44,000 troops', cmd: 'A.S. Johnston, then Beauregard', note: `Attacked first and nearly won, until their commander bled to death.` },
  ],
  casualties: { union: 13047, csa: 10699, unionLabel: 'Union ~13,047', csaLabel: 'Confederacy ~10,699' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: `Caught with his army unentrenched and scattered in its camps, Grant reached Pittsburg Landing mid-morning to find the first day going badly and steadied the broken line by the river at dusk. He refused to retreat across the Tennessee, attacked at first light on April 7 with the fresh men who had crossed overnight, and drove the Confederates off the field.` },
    { name: 'William T. Sherman', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: `Commanding the division nearest Shiloh Church, Sherman took the leading edge of the dawn attack, was wounded twice and had three horses shot under him while rallying his men. His stubborn fighting retreat slowed the Confederate advance and bought the army the time it needed to survive the first day.` },
    { name: 'Don Carlos Buell', role: 'Army of the Ohio', side: 'u', img: '/war-img/cmdr/buell.jpg', bio: `Buell’s Army of the Ohio, marching to link up with Grant, reached the river the evening of April 6 and ferried roughly 18,000 fresh men across overnight. His divisions led the counterattack at dawn on April 7 that turned the second day into a Union victory.` },
    { name: 'Benjamin Prentiss', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/prentiss.jpg', bio: `Prentiss held the center along the farm lane that became known as the Hornet’s Nest, beating back charge after charge for most of the afternoon. Surrounded at last by massed artillery and infantry, he and roughly 2,200 men surrendered near dusk, the largest Union capitulation of the day.` },
    { name: 'Albert Sidney Johnston', role: 'Cmdr., CSA †', side: 'c', img: '/war-img/cmdr/as-johnston.jpg', bio: `The senior Confederate commander in the West, Johnston marched his army out of Corinth to surprise Grant and nearly destroyed him on the first day. Leading an attack near the Peach Orchard in the afternoon, he was shot behind the knee and bled to death, the highest-ranking officer on either side killed in combat in the war.` },
    { name: 'P.G.T. Beauregard', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/beauregard.jpg', bio: `Johnston’s second-in-command, Beauregard took over when Johnston was killed and halted the attacks at dusk, certain he would finish Grant in the morning, even wiring Richmond that he had won a complete victory. Outnumbered by the reinforcements that crossed overnight, he was driven back the next day and retreated to Corinth.` },
    { name: 'Braxton Bragg', role: 'Corps, CSA', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: `Bragg commanded one of the Confederate corps and threw brigade after brigade at the Hornet’s Nest in piecemeal frontal attacks that were shredded against the line. His refusal to flank the position instead of charging it head-on cost the Confederates heavily in time and blood.` },
    { name: 'Nathan Bedford Forrest', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/forrest.jpg', bio: `Forrest scouted the river himself the night of April 6 and saw Buell’s reinforcements crossing, a warning his superiors ignored. Covering the retreat on April 8, he ambushed the pursuing Union force at Fallen Timbers and, riding too far in, was shot at close range but galloped out alive.` },
  ],
  outcome: {
    verdict: `Union victory · the war turns total`,
    text: `A Confederate surprise nearly destroyed Grant’s army on the first day, but the line held by the river at nightfall, and fresh troops under Buell turned the second day into a counterattack that drove the enemy back to Corinth. The cost stunned the country: more men fell in two days than in all the war’s earlier battles combined, killing forever the idea of a short, bloodless war in the West. Grant, blamed and nearly relieved, survived to take Vicksburg the next year and, in the end, the whole Confederacy.`,
  },
  sections: [
    { id: 'the-surprise', eyebrow: 'Dawn, April 6', title: `The Surprise at Pittsburg Landing`, blurb: `Grant’s unentrenched army is overrun at dawn; Sherman makes a stand as the camps fall.`, img: '/war-img/shiloh.png' },
    { id: 'the-hornets-nest', eyebrow: 'The center holds', title: `The Hornet’s Nest`, blurb: `Prentiss (North) holds a sunken lane for six hours; Johnston (South) bleeds to death; the line clings to the river by dusk.`, img: '/war-img/shiloh-hornets-nest.png' },
    { id: 'the-second-day', eyebrow: 'April 7', title: 'Buell Arrives', blurb: `Fresh divisions cross the river overnight and the Union counterattacks, driving the Confederates back to Corinth.`, img: '/war-img/shiloh-day2.png' },
    { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: 'The Bloodiest Day Yet', blurb: `~23,700 fall in two days. The short-war illusion dies in the West; Grant is blamed, then vindicated.`, img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/shiloh/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function ShilohPage() {
  return <BattleDossier data={DATA} />
}
