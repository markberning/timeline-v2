'use client'

// BATTLE dossier (Battle of Mobile Bay). Same shape as Shiloh/Forts Jackson: hero ·
// collapsible At-a-glance (stat strip + fleets face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md). Naval theatre — fleets, not regiments.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero credit — /war-img/mobile-bay-hero.jpg has no source/PD comment in the original; credit left blank pending verification.
// FLAG: old CasBlock for CSA showed "~1,500 captured" appended to the CSA legend text; that extra note is not representable in the casualties schema and is dropped here.
const DATA: BattleData = {
  theatre: 'naval',
  crumbs: civilWarCrumbs({ theatre: 'naval', battleId: 'n-mobilebay' }),
  backHref: '/war-civil-war/naval',
  eyebrow: 'Battle · Naval',
  title: 'Battle of Mobile Bay',
  date: 'August 5, 1864',
  place: 'Mobile Bay, Alabama',
  hero: {
    img: '/war-img/mobile-bay-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '', // FLAG: no source/PD confirmed for this image
  },
  stats: [
    { label: 'Duration', value: 'One morning' },
    { label: 'Casualties', value: '~630 + forts' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'West Gulf Blockading Squadron', str: '4 monitors + 14 wooden ships', cmd: 'R. Adm. David G. Farragut', note: 'Lashed his ships in pairs and drove straight over a minefield to cork the last Gulf door.' },
    { side: 'c', tag: 'Confederacy', force: 'Forts Morgan & Gaines + CSS Tennessee', str: '1 ironclad + 3 gunboats · 2 forts', cmd: 'Adm. Franklin Buchanan', note: 'One slow ironclad turned and fought the whole fleet alone.' },
  ],
  casualties: { union: 320, csa: 312, unionLabel: 'Union ~320', csaLabel: 'Confederacy ~312 + ~1,500 captured' },
  commanders: [
    { name: 'David G. Farragut', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/farragut.jpg', bio: 'Farragut planned to run his whole fleet past the forts and over the minefield to cork the bay, lashing his wooden ships in pairs for the passage. When the lead monitor sank and the column froze under Fort Morgan’s guns, he swung his flagship Hartford into the lead and drove straight through the mines, the decision the famous “damn the torpedoes” line was built around.' },
    { name: 'Tunis A. M. Craven', role: '† USS Tecumseh', side: 'u', img: '/war-img/cmdr/craven.jpg', bio: 'Craven led the monitor column aboard Tecumseh and, trying to close on the Confederate ironclad, steered west of the marker buoys onto the mined side of the channel. Tecumseh struck a torpedo and went down in under half a minute, taking Craven and most of her crew with her, the single deadliest moment of the battle.' },
    { name: 'Gordon Granger', role: 'Land siege, Union', side: 'u', img: '/war-img/cmdr/granger.jpg', bio: 'Granger landed his infantry on Dauphin Island days before the fleet went in, opening the land siege so each fort would be squeezed between his troops behind it and the navy’s guns in front. His men pressed Fort Gaines into surrender on August 8 and then shifted across the bay to invest Fort Morgan until it gave up on August 23.' },
    { name: 'Franklin Buchanan', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/buchanan.jpg', bio: 'Buchanan, the senior Confederate naval officer afloat, commanded the defending squadron from the ironclad ram CSS Tennessee. After his three gunboats were wrecked or taken, he turned the slow Tennessee back into the entire Union fleet alone and fought until a broken leg and a battered ship forced her surrender.' },
    { name: 'Richard L. Page', role: 'Fort Morgan, CSA', side: 'c', img: '/war-img/cmdr/rl-page.jpg', bio: 'Page commanded Fort Morgan, the strong fort guarding the east side of the channel, and kept its forty-six guns firing on the fleet as it ran past. With the bay lost and Granger’s siege guns leapfrogging closer, he held out under bombardment until August 23 before surrendering the last fort.' },
  ],
  outcome: {
    verdict: 'Union victory · the last Gulf door shuts',
    text: 'Farragut’s fleet forced the bay, losing the monitor Tecumseh and most of its dead to a single mine in thirty seconds, then drove through the minefield, swarmed CSS Tennessee, and closed Mobile to blockade-runners. The forts fell over the following weeks. Coming three months before the 1864 election and just ahead of Atlanta’s fall, it helped turn Northern gloom into momentum and assure Lincoln’s re-election. On the flagship’s gun decks, formerly enslaved men were working the guns that shut the Confederacy’s last Gulf door.',
  },
  sections: [
    { id: 'the-last-door', eyebrow: 'Mobile Bay · The prize', title: 'The Last Door on the Gulf', blurb: 'By August 1864 Mobile is the Confederacy’s last big Gulf port, the blockade-runners’ surviving hub, guarded by two forts and a minefield.', img: '/war-img/mobile-bay-the-bay.png' },
    { id: 'running-the-forts', eyebrow: 'Dawn, August 5', title: 'Lashed in Pairs, Straight at the Guns', blurb: 'Farragut (North) runs his fleet at the channel, monitors leading and wooden ships tied in pairs, straight under Fort Morgan’s guns.', img: '/war-img/mobile-bay-running-the-forts.png' },
    { id: 'damn-the-torpedoes', eyebrow: '~7:30 a.m.', title: 'Damn the Torpedoes', blurb: 'Craven (North) steers Tecumseh into the mines and she sinks in seconds. Brooklyn stalls, and Farragut drives Hartford through anyway.', img: '/war-img/mobile-bay-running-the-forts.png' },
    { id: 'the-tennessee', eyebrow: 'Inside the bay', title: 'One Ironclad Against a Fleet', blurb: 'Buchanan (South) turns CSS Tennessee back into the entire Union fleet alone, and fights until she is battered into surrender.', img: '/war-img/mobile-bay-the-tennessee.png' },
    { id: 'what-it-won', eyebrow: 'The cost & the meaning', title: 'The Door, the Reason, and the Men on the Deck', blurb: 'The port is corked, the forts fall, and Lincoln’s re-election turns, while formerly enslaved men work the flagship’s guns.', img: '/war-img/cmdr/farragut.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/naval/mobile-bay/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function MobileBayPage() {
  return <BattleDossier data={DATA} />
}
