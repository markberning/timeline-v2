'use client'

// BATTLE dossier (Battle of Malvern Hill) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-malvern' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Malvern Hill',
  date: 'July 1, 1862',
  place: 'Henrico County, Virginia',
  hero: {
    img: '/war-img/malvern-hill-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~8,500' },
    { label: 'Winner', value: 'Union (tactical)' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~54,000 troops', cmd: 'Porter & Hunt', note: 'Massed scores of guns tier on tier on a commanding hill.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~55,000 troops', cmd: 'Gen. Robert E. Lee', note: 'Sent men uphill, piecemeal, into the teeth of the guns.' },
  ],
  casualties: { union: 3000, csa: 5500, unionLabel: 'Union ~3,000', csaLabel: 'Confederacy ~5,500' },
  commanders: [
    { name: 'Fitz John Porter', role: 'On the field, Union', side: 'u', img: '/war-img/cmdr/fj-porter.jpg', bio: 'With McClellan off inspecting the landing downriver, Porter was the de facto Union commander on Malvern Hill, his V Corps holding the crest and the ridge around the guns. He posted the infantry, fed in reinforcements as the charges came, and ran the defense that broke every Confederate assault.' },
    { name: 'Henry J. Hunt', role: 'Artillery, Union', side: 'u', img: '/war-img/cmdr/hunt.jpg', bio: 'As chief of artillery, Hunt gathered the Union batteries side by side and tier on tier along the crest, all of them looking down the open northern slope. His massed guns fired first, fired from above, and broke charge after charge before the attackers could ever close to musket range.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Having chased the Union army across the Peninsula all week, Lee believed one more blow might shatter it and ordered the assault despite the murderous ground. His plan depended on his cannon silencing Hunt first; the guns never managed it, and the infantry walked uphill into the slaughter anyway.' },
    { name: 'Daniel Harvey Hill', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/dh-hill.jpg', bio: 'Hill rode out that morning, studied the massed Union guns, and warned the others to leave the hill alone; he was overruled. He sent five brigades up the slope himself and watched them shot down, and afterward gave the day the line it has carried ever since: it was not war, it was murder.' },
    { name: 'John B. Magruder', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/magruder.jpg', bio: 'Magruder reached the field hours late, sent the wrong way by a mismarked road, then arrived amid the confusion and threw his men forward around 5:30 in the afternoon. His piecemeal brigade attacks from the right were broken by the Union guns and rifle fire and forced back to where they started.' },
    { name: 'Thomas J. “Stonewall” Jackson', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Jackson held the Confederate left, lining up batteries that were mostly powerless to subdue the Union fire from above. Late in the day his brigades went forward on D. H. Hill’s left into the same futile frontal assaults and took heavy losses for nothing.' },
  ],
  outcome: {
    verdict: 'Union tactical victory · the retreat continues',
    text: 'On a commanding hill above the James, the Union artillery chief Henry Hunt (North) massed scores of guns and shredded Lee’s confused, piecemeal assaults across open ground; D.H. Hill (South) called it “not war, it was murder.” Yet McClellan, absent aboard a gunboat, ordered the retreat to continue anyway, ending the Seven Days. The Union won the field and lost the campaign. In a single week Lee had driven McClellan away from Richmond, a strategic Confederate triumph bought at a terrible, and sometimes pointless, cost.',
  },
  sections: [
    { id: 'the-retreat', eyebrow: 'The Seven Days’ end', title: 'The Hill Above the James', blurb: 'After a week of Lee’s hammering, McClellan retreats to the James; the rearguard makes a stand on Malvern Hill, guns massed on the crest.', img: '/war-img/malvern-hill-retreat.png' },
    { id: 'it-was-murder', eyebrow: 'July 1', title: 'It Was Not War', blurb: 'Lee’s confused, piecemeal assaults charge uphill into the massed Union guns and are slaughtered. “Not war,” said D.H. Hill (South), “it was murder.”', img: '/war-img/malvern-hill.png' },
    { id: 'richmond-saved', eyebrow: 'The aftermath', title: 'Richmond Saved', blurb: 'The Union wins the field and retreats anyway. The Seven Days end with Richmond saved: a strategic Confederate triumph despite the tactical defeat.', img: '/war-img/cmdr/dh-hill.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/malvern-hill/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function MalvernHillPage() {
  return <BattleDossier data={DATA} />
}
