'use client'

// BATTLE dossier (Fort Stedman). Same shape as Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties bar) · commanders strip ·
// outcome pill · numbered section list. Content produced through the war content
// pipeline (audits/war-content-pipeline.md). Facts web-verified against American
// Battlefield Trust, NPS (Petersburg National Battlefield), and Wikipedia.

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-fortstedman' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Fort Stedman',
  date: 'March 25, 1865',
  place: 'Petersburg, Virginia',
  hero: {
    img: '/war-img/fort-stedman-hero.jpg',
    pal: ['#2a241c', '#4a2c24', '#0f0807'],
  },
  stats: [
    { label: 'Duration', value: '~4 hours' },
    { label: 'Casualties', value: '~5k' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~10,000 troops', cmd: 'Maj. Gen. John B. Gordon', note: 'Threw its best assault troops at one fort before dawn, the army’s last roll of the dice.' },
    { side: 'u', tag: 'Union', force: 'Army of the Potomac (IX Corps)', str: '~15,000 troops', cmd: 'Maj. Gen. John G. Parke', note: 'Caught by surprise, then sealed the breach and turned the lost ground into a trap.' },
  ],
  casualties: { union: 1044, csa: 4000, csaLabel: 'Confederacy ~4,000' },
  commanders: [
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Starved, outnumbered, and watching his lines stretch toward breaking, Lee approved Gordon’s pre-dawn gamble as his one chance to break the siege and slip the army south to join Johnston. He rode up to watch it fail, then authorized the withdrawal once the breakthrough stalled and the ring closed.' },
    { name: 'John B. Gordon', role: 'Attack cmdr., CSA', side: 'c', img: '/war-img/cmdr/gordon.jpg', bio: 'Gordon studied Fort Stedman for weeks, then planned and led the assault: axemen and men posing as deserters to clear the way, a rush in the dark that took the fort and its flanking batteries within an hour. When his columns failed to find the rear forts they were sent for and the Union guns ringed him in, he pulled back what he could of a wrecked attack.' },
    { name: 'Ulysses S. Grant', role: 'Gen.-in-chief, Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Grant was at City Point and already had his own offensive set to open within days. He let Parke handle the morning, then used the failed sortie as cover to seize Confederate picket lines elsewhere on the front, ground that helped open the breakthrough a week later.' },
    { name: 'John G. Parke', role: 'Acting cmdr., Potomac', side: 'u', img: '/war-img/cmdr/parke.jpg', bio: 'With Meade away, Parke commanded the Army of the Potomac that morning and the IX Corps holding the breached line. He kept his head at the hole in his center, ordered the reserve division forward to seal it, and put the reserve artillery on a ridge behind the lost forts to shell the lodgement.' },
    { name: 'John F. Hartranft', role: 'Reserve div., Union', side: 'u', img: '/war-img/cmdr/hartranft.jpg', bio: 'Hartranft fed his green Pennsylvania regiments in piece by piece to contain the breakthrough, building a curving wall nearly a mile and a half long around the entire Confederate penetration. A little before 8 a.m. he ordered the ring forward, retook Fort Stedman and its batteries, and collapsed the lodgement.' },
    { name: 'Napoleon B. McLaughlen', role: 'Sector cmdr., Union', side: 'u', img: '/war-img/cmdr/mclaughlen.jpg', bio: 'McLaughlen commanded the stretch of line around Fort Stedman and rode up in the dark to steady his men. He began calmly giving orders before realizing the soldiers around him were Confederates who had just taken the fort, and was captured, surrendering his sword to Gordon.' },
  ],
  outcome: {
    verdict: 'Union victory · the last gasp of Lee’s army',
    text: 'Gordon’s dawn assault took Fort Stedman and its batteries within an hour, then stalled when its columns could not find the forts they were sent to seize. Parke sealed the breach and Hartranft (North) ringed it with troops and guns, turning the captured ground into a killing pocket; by 8 a.m. it was over, the line back where it began. The Confederates lost roughly 4,000 men they could not replace against about 1,044 for the Union. It was the Army of Northern Virginia’s last offensive. Within days Grant’s own attack opened, Five Forks fell on April 1 and Petersburg on April 2, and Lee surrendered at Appomattox two weeks later.',
  },
  sections: [
    { id: 'last-card', eyebrow: 'Lee’s last card', title: 'A general out of options', blurb: 'Nine months in the Petersburg trenches, an army starving and deserting, and Gordon brings Lee a plan to break out before Grant’s noose closes.', img: '/war-img/cmdr/gordon.jpg' },
    { id: 'before-dawn', eyebrow: 'The assault', title: 'Before dawn', blurb: 'Axemen and fake deserters clear the way in the dark; the fort and its batteries fall in an hour, then the breakthrough goes looking for forts that aren’t there.', img: '/war-img/fort-stedman-breakthrough.png' },
    { id: 'crossfire', eyebrow: 'The counterattack', title: 'The ring of guns', blurb: 'Parke keeps his head and Hartranft (North) builds a wall of troops around the breach; the captured ground becomes a killing pocket.', img: '/war-img/fort-stedman-ring.png' },
    { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: 'The last sortie', blurb: '4,000 men gone for nothing in four hours. The Army of Northern Virginia’s final attack, and a week later the line breaks for good.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/fort-stedman/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FortStedmanPage() {
  return <BattleDossier data={DATA} />
}
