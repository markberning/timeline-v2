'use client'

// BATTLE dossier (Forts Jackson & St. Philip). Same shape as Antietam: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero credit — /war-img/forts-jackson-hero.jpg has no source/PD comment in the original; credit left blank pending verification.
const DATA: BattleData = {
  theatre: 'naval',
  crumbs: civilWarCrumbs({ theatre: 'naval', battleId: 'n-jacksonstphilip' }),
  backHref: '/war-civil-war/naval',
  eyebrow: 'Battle · Naval & Coastal',
  title: 'Forts Jackson & St. Philip',
  date: 'April 18–28, 1862',
  place: 'Lower Mississippi, Louisiana',
  hero: {
    img: '/war-img/forts-jackson-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '', // FLAG: no source/PD confirmed for this image
  },
  stats: [
    { label: 'Duration', value: '11 days' },
    { label: 'Casualties', value: '~1,000' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'West Gulf Blockading Squadron', str: '~17 warships', cmd: 'Farragut & Porter', note: 'Chose to run the fleet straight past the forts in the dark.' },
    { side: 'c', tag: 'Confederacy', force: 'River defenses below New Orleans', str: '2 forts + a fleet', cmd: 'Duncan & Lovell', note: 'Two forts, a chain, fire rafts, and three commands that would not cooperate.' },
  ],
  casualties: { union: 229, csa: 782, unionLabel: 'Union ~229', csaLabel: 'Confederacy ~782' },
  commanders: [
    { name: 'David Glasgow Farragut', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/farragut.jpg', bio: 'Handed secret orders and the West Gulf Blockading Squadron, Farragut decided the forts would never fall on a timetable he could afford and chose to run his wooden fleet straight past them in the pre-dawn dark of April 24. He brought most of his ships through the gauntlet of fire rafts and Confederate gunboats and anchored before a defenseless New Orleans the next day.' },
    { name: 'David Dixon Porter', role: 'Mortars, Union', side: 'u', img: '/war-img/cmdr/dd-porter.jpg', bio: 'Farragut’s foster brother led the mortar flotilla, twenty schooners that lobbed thousands of 13-inch shells into Fort Jackson over five or six days of bombardment. He wanted to keep shelling rather than run the forts, was overruled, and afterward took the forts’ surrender once their garrison had mutinied.' },
    { name: 'Benjamin Butler', role: 'Occupation, Union', side: 'u', img: '/war-img/cmdr/butler.jpg', bio: 'Butler’s army of some 18,000 men waited offshore while the navy forced the river, then marched into New Orleans on May 1 to begin the occupation. His martial law, the notorious “Woman Order,” and the hanging of William Mumford earned him the lasting nickname “Beast” Butler, even as he raised the first Black regiments in the captured city.' },
    { name: 'Johnson K. Duncan', role: 'Forts, CSA', side: 'c', img: '/war-img/cmdr/duncan.jpg', bio: 'A Pennsylvania-born engineer commanding the river forts for the Confederacy, Duncan held Fort Jackson through the heaviest bombardment of the war to that point and refused Porter’s first demand to surrender. Cut off after the fleet passed and abandoned by a mutinous garrison, he gave up both forts on April 28; he was dead of malaria before the year was out.' },
    { name: 'Mansfield Lovell', role: 'New Orleans, CSA', side: 'c', img: '/war-img/cmdr/lovell.jpg', bio: 'Left to defend New Orleans with about 3,000 short-term militia after the upstream war drained off his troops, Lovell had no way to fight a fleet of warships in the streets. He pulled his men out rather than turn the city into a hopeless slaughter, and spent the rest of the war under a cloud for losing the South’s greatest port.' },
  ],
  outcome: {
    verdict: 'Union victory · New Orleans falls',
    text: 'Rather than batter the forts into submission, Farragut ran his fleet past them in the pre-dawn dark of April 24, through fire rafts and a Confederate flotilla, and emerged above them with his ships intact. New Orleans, the Confederacy’s largest city, biggest port, and greatest slave market, was defenseless, and fell without a fight. It was a catastrophic early blow: the South lost its commercial heart and the mouth of the Mississippi, and the harsh occupation under “Beast” Butler began.',
  },
  sections: [
    { id: 'the-great-port', eyebrow: 'The prize', title: 'The Mouth of the River', blurb: 'New Orleans, the South’s largest city, port, and slave market, lies behind two forts, a chain, and fire rafts, its defenses stripped.', img: '/war-img/forts-jackson-strategy.png' },
    { id: 'running-the-forts', eyebrow: 'April 18–24', title: 'Running the Forts', blurb: 'Porter’s (North) mortars pound the forts for days; then Farragut (North) gambles everything and runs the fleet past them in the dark.', img: '/war-img/forts-jackson.png' },
    { id: 'the-fall-of-new-orleans', eyebrow: 'April 25–28', title: 'The Fall of New Orleans', blurb: 'Past Chalmette to a defenseless city; the cut-off forts mutiny and surrender, and Butler (North) occupies the South’s greatest port.', img: '/war-img/forts-jackson-city.png' },
  ],
  sectionHref: (id) => `/war-civil-war/naval/forts-jackson/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FortsJacksonPage() {
  return <BattleDossier data={DATA} />
}
