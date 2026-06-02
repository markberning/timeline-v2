'use client'

// BATTLE dossier (First Battle of Winchester). Same shape as Antietam: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-winchester1' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'First Battle of Winchester',
  date: 'May 25, 1862',
  place: 'Winchester, Virginia',
  hero: {
    img: '/war-img/first-winchester-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~2,400' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Banks’s command', str: '~6,500 troops', cmd: 'Maj. Gen. Nathaniel Banks', note: 'A political general outmarched and outfought at every turn.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of the Valley', str: '~16,000 troops', cmd: 'Maj. Gen. Thomas J. Jackson', note: '“Stonewall” Jackson’s hard-marching “foot cavalry.”' },
  ],
  casualties: { union: 2019, csa: 400, unionLabel: 'Union ~2,019', csaLabel: 'Confederacy ~400' },
  commanders: [
    { name: 'Thomas J. “Stonewall” Jackson', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Jackson brought roughly 16,000 men up out of the morning fog on May 25 and split his attack, driving up the Valley Turnpike against the Union right while sending Ewell against the left. When the line on Bowers Hill held, he loosed Taylor’s Louisianans in the flank charge that broke Banks’s army and routed it through Winchester, the signature victory of his Shenandoah Valley Campaign.' },
    { name: 'Richard Taylor', role: 'Brigade, CSA', side: 'c', img: '/war-img/cmdr/richard-taylor.jpg', bio: 'Taylor swung his roughly 2,000 Louisianans wide around the Union right and, when Federal artillery found them, rode out in front of the brigade and led it up Bowers Hill at a steady walk. The charge rolled up the Union flank and unhinged Banks’s whole position, the blow that turned the fight into a rout.' },
    { name: 'Richard S. Ewell', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/ewell.jpg', bio: 'Ewell drove up the Front Royal Pike against the Union left, east of town, pressing the brigade dug in on Camp Hill. His push pinned that flank in place while Taylor’s charge broke the right, so the collapse came from both ends at once.' },
    { name: 'Nathaniel P. Banks', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/banks.jpg', bio: 'A Massachusetts politician handed a general’s stars, Banks had been outmarched all week and made a last stand on the hills south of Winchester to buy time for his wagon train. When Taylor’s charge cracked his right, his army broke and fled north through the streets, abandoning the supplies that earned him the mocking name “Commissary Banks.”' },
  ],
  outcome: {
    verdict: 'Confederate victory · the Valley triumph',
    text: 'Jackson’s dawn attack and Taylor’s flank charge broke Banks’s army and routed it north through the streets of Winchester and across the Potomac, with a fortune in captured supplies left behind (earning Banks the mocking name “Commissary Banks”). It was the climax of Jackson’s Shenandoah Valley Campaign, a small army running circles around larger ones, which tied down tens of thousands of Union troops and helped keep them from reinforcing the drive on Richmond. The brilliance, though, served a war fought to preserve slavery.',
  },
  sections: [
    { id: 'the-valley', eyebrow: 'Jackson’s campaign', title: 'The Valley Campaign', blurb: 'The Shenandoah is a granary and an invasion route; Jackson’s mission is to tie down Union armies far from Richmond.', img: '/war-img/first-winchester-valley.png' },
    { id: 'the-rout', eyebrow: 'May 25', title: 'The Rout of Banks', blurb: 'A dawn attack and Taylor’s (South) flank charge roll up Banks (North) on Bowers Hill and send his army fleeing through the town.', img: '/war-img/first-winchester.png' },
    { id: 'commissary-banks', eyebrow: 'The aftermath', title: 'What Banks Left Behind', blurb: 'Banks flees across the Potomac, leaving a mountain of supplies; the Valley triumph helps save Richmond, brilliance in defense of slavery.', img: '/war-img/first-winchester-pursuit.png' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/first-winchester/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FirstWinchesterPage() {
  return <BattleDossier data={DATA} />
}
