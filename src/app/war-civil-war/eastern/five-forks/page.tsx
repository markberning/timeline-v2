'use client'

// BATTLE dossier (Five Forks). Same shape as Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties bar) · outcome pill ·
// commanders strip · numbered section list. Timeline view: hero + hook + cards.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-fiveforks' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Five Forks',
  date: 'April 1, 1865',
  place: 'Dinwiddie County, Virginia',
  hero: {
    img: '/war-img/five-forks-hero.jpg',
    pal: ['#2a2417', '#43321e', '#0c0805'],
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~3.8k' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac (V Corps) & Cavalry', str: '~22,000 troops', cmd: 'Maj. Gen. Philip Sheridan', note: 'Hammered the bent-back left flank while the cavalry pinned the front.' },
    { side: 'c', tag: 'Confederacy', force: 'Pickett’s detached command', str: '~10,000 troops', cmd: 'Maj. Gen. George E. Pickett', note: 'Hung out alone at the end of Lee’s line, with no reserves behind it.' },
  ],
  casualties: { union: 830, csa: 3000, csaLabel: 'Confederacy ~3,000' },
  commanders: [
    { name: 'Philip Sheridan', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: 'Brought east after burning the Shenandoah Valley, Sheridan was handed the cavalry and an infantry corps and told to break Lee’s last railroad. When his attack drifted into empty woods, he rode straight into the lines, waving the battle flag and dragging the infantry back onto the enemy until the Confederate left caved in.' },
    { name: 'Gouverneur K. Warren', role: 'V Corps, Union', side: 'u', img: '/war-img/cmdr/warren.jpg', bio: 'Warren’s V Corps infantry delivered the decisive blow against the bent-back Confederate left, though faulty maps sent two of his divisions wide of the angle first. In the hour of victory Sheridan relieved him for being too slow, a verdict a court of inquiry would overturn in 1882, after Warren was dead.' },
    { name: 'George Custer', role: 'Cavalry div., Union', side: 'u', img: '/war-img/cmdr/custer.jpg', bio: 'Custer led a cavalry division on the far Union left, pressing the Confederate front dismounted so the defenders could not shift to meet the infantry hitting their flank. His troopers kept the pressure on through the collapse and rode hard in the pursuit that followed it to Appomattox.' },
    { name: 'George E. Pickett', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/pickett.jpg', bio: 'Ordered by Lee to hold Five Forks at all costs, Pickett dug in along the White Oak Road, then rode a mile and a half to the rear for a shad bake and could not be reached when the Union attack came on. He galloped back through Federal troops to find his command already disintegrating, the same general whose division had been wrecked charging at Gettysburg.' },
    { name: 'Fitzhugh Lee', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/fitzhugh-lee.jpg', bio: 'Robert E. Lee’s nephew commanded the Confederate cavalry at Five Forks and shared the shad bake with Pickett well behind the line. With both senior commanders absent and unreachable, the defense fought leaderless through the opening of the assault and came apart.' },
  ],
  outcome: {
    verdict: 'Decisive Union victory · the fall of Petersburg begins',
    text: 'In a single afternoon Five Forks cracked open the position nine and a half months of siege could not. Sheridan’s attack wrecked Pickett’s detached command, taking close to 3,000 casualties out of about 10,000, most of them prisoners, and laid bare the last railroad into Petersburg. Grant ordered a general assault for the next dawn; the lines broke, and on April 2 and 3 the Confederates abandoned Petersburg and Richmond. A week later, run to ground at Appomattox, Robert E. Lee surrendered the Army of Northern Virginia.',
  },
  sections: [
    { id: 'crossroads', eyebrow: 'The last supply line', title: 'The crossroads that held Petersburg', blurb: 'Nine months of siege come down to one backwoods intersection. Cut the South Side Railroad here, and Petersburg falls.', img: '/war-img/cmdr/sheridan.jpg' },
    { id: 'dinwiddie', eyebrow: 'March 31', title: 'A wet fight in the woods', blurb: 'Rain turns the roads to soup. Pickett (South) drives Sheridan’s cavalry back, then realizes he has pushed too far and digs in at Five Forks.', img: '/war-img/five-forks-dinwiddie.png' },
    { id: 'shad-bake', eyebrow: 'The afternoon', title: 'The shad bake', blurb: 'Pickett (South) and Fitzhugh Lee (South) ride to the rear for a fish fry. An acoustic shadow swallows the sound of their own line being destroyed.', img: '/war-img/cmdr/pickett.jpg' },
    { id: 'collapse', eyebrow: 'The assault', title: 'The line comes apart', blurb: 'Sheridan rides into the confusion and turns a near-miss into a rout. Then, in the hour of victory, he relieves Warren (North).', img: '/war-img/five-forks-assault.png' },
    { id: 'fall', eyebrow: 'What it meant', title: 'The week the war ended', blurb: 'Petersburg falls, Richmond burns, and a week later Lee surrenders at Appomattox. The blow that started the last week of the war.', img: '/war-img/cmdr/warren.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/five-forks/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FiveForksPage() {
  return <BattleDossier data={DATA} />
}
