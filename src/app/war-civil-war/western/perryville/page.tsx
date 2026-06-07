'use client'

// BATTLE dossier (Battle of Perryville). Same shape as Shiloh/Stones River: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a2e21, #2a221c, #0a0806).

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-perryville' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Perryville',
  date: 'October 8, 1862',
  place: 'Perryville, Kentucky',
  hero: {
    img: '/war-img/perryville-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~7,600' },
    { label: 'Winner', value: 'Union (strategic)', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Ohio', str: '~22,000 engaged', cmd: 'Buell', note: `A huge army in the area, but most of it never heard the battle, let alone fought it.` },
    { side: 'c', tag: 'Confederacy', force: 'Army of the Mississippi', str: '~16,000 engaged', cmd: 'Bragg', note: `Bloodied a force several times its size, won the field, and walked away from the state.` },
  ],
  casualties: { union: 4211, csa: 3396, unionLabel: 'Union ~4,211', csaLabel: 'Confederacy ~3,396' },
  commanders: [
    { name: 'Don Carlos Buell', role: 'Cmdr., Ohio', side: 'u', img: '/war-img/cmdr/buell.jpg', bio: `Buell tricked Bragg with a strong feint toward Frankfort, then concentrated his far larger army around Perryville and meant to attack on October 8. An acoustic shadow kept the sound of the fighting from his headquarters two miles off, so he fed in almost no reserves while one of his corps was torn apart, and he was relieved of command soon after for the half-fought battle and the escape it allowed.` },
    { name: 'Alexander McD. McCook', role: 'I Corps, Union', side: 'u', img: '/war-img/cmdr/mccook.jpg', bio: `McCook’s I Corps held the Union left and absorbed nearly the whole Confederate assault, the part of the field where the day’s killing was concentrated. He sent aides begging for help that came late and thin, his line buckling at Open Knob before a rear ridge finally held.` },
    { name: 'Philip H. Sheridan', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: `Sheridan seized Peters Hill west of town at dawn, then was ordered by his corps commander to pull back and avoid a general engagement. Late in the afternoon his division threw back a Confederate lunge on the Springfield Pike, but he stayed out of the fight raging just to his north.` },
    { name: 'Braxton Bragg', role: 'Cmdr., Mississippi', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: `Bragg led the invasion of Kentucky to flip a loyal slave state, then misread Buell’s feint and threw only about sixteen thousand men against a corner of a much larger army. He held the field at dusk, but that night he read the closing trap, abandoned nine hundred wounded, and withdrew, giving up the state his victory was meant to win.` },
    { name: 'Leonidas Polk', role: 'Right Wing, CSA', side: 'c', img: '/war-img/cmdr/polk.jpg', bio: `Polk directed the right wing and sent Cheatham’s division rolling against the Union left in the en-echelon attack that decided the day. In the failing light he blundered into the 22nd Indiana and, by the much-repeated story, bluffed his way clear by posing as a Union officer before calling off the assault.` },
    { name: 'William J. Hardee', role: 'Left Wing, CSA', side: 'c', img: '/war-img/cmdr/hardee.jpg', bio: `Hardee commanded the Confederate left wing, holding the roads into town from the north and west and feeding his divisions into the afternoon assaults on McCook’s corps. A noted authority on infantry tactics, he managed the part of the line that pressed the Union center while the heavier blow fell to the north.` },
    { name: 'Benjamin F. Cheatham', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/cheatham.jpg', bio: `Cheatham’s division opened the bombardment around half past noon and led the main Confederate assault against the Union left. His brigades, including Maney’s, charged Open Knob again and again until they overran the guns, the bloodiest action of the battle.` },
  ],
  outcome: {
    verdict: `Tactical Confederate win · strategic Union victory`,
    text: `Bragg had marched into Kentucky to flip a loyal slave state into the Confederacy. With only ~16,000 men he bloodied a far larger Union army and held the field at dusk, a battle his own commanding general slept through, two miles off, in an acoustic shadow that kept most of the North’s strength out of the fight. But that night Bragg read the trap closing, abandoned 900 of his wounded, and withdrew. The victory was the retreat it forced, not the ground it gave up: the Kentucky campaign was over, the slave state stayed in the Union for good, and emancipation moved from threat toward law.`,
  },
  sections: [
    { id: 'the-invasion', eyebrow: 'The Kentucky gamble', title: `Bragg’s Bid for a Slave State`, blurb: `Bragg (South) marches north to flip a loyal slave state, hauling 20,000 spare rifles for recruits who never come.`, img: '/war-img/cmdr/bragg.jpg' },
    { id: 'the-fight-for-water', eyebrow: `Doctor’s Creek, Oct 6–8`, title: `A Battle That Began at the Creek`, blurb: `In a drought, men shoot each other over the right to drink; Buell (North) feints toward Frankfort and tricks Bragg into looking the wrong way.`, img: '/war-img/perryville-overview.png' },
    { id: 'the-acoustic-shadow', eyebrow: 'Afternoon, October 8', title: `The Battle Buell Never Heard`, blurb: `A trick of the air muffles the roar two miles off; Buell (North) sleeps through it while one corps is torn apart on Open Knob.`, img: '/war-img/perryville.png' },
    { id: 'the-victory-and-the-retreat', eyebrow: 'Dusk & the night march', title: `Winning the Field, Losing the State`, blurb: `Bragg (South) holds the ground at dark, then reads the trap closing, abandons 900 wounded, and gives up Kentucky.`, img: '/war-img/cmdr/buell.jpg' },
    { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: `The Bloodiest Afternoon for the Smallest Fight`, blurb: `~7,600 fall in one afternoon, one in five engaged. The slave state Bragg came to claim stays in the Union for good.`, img: '/war-img/cmdr/sheridan.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/perryville/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function PerryvillePage() {
  return <BattleDossier data={DATA} />
}
