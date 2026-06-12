'use client'

// BATTLE dossier (The Battle of Monmouth, 1778), American Revolution: the proof
// battle of the vertical: the army Steuben drilled all winter at Valley Forge
// catches Clinton's evacuation column in 100-degree heat, survives its own
// vanguard commander's retreat, and stands toe-to-toe with British regulars in
// the open field for the rest of the day. The last major battle in the north.
// Thin data wrapper over the shared <BattleDossier>. Content produced through
// the war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides: American on the rev US rail / Clinton's column on
// the British (red) rail; the win marker is a DRAW, no win flag. Apocrypha
// blacklist enforced per the final: Molly Pitcher at evidence level; the
// Washington-swearing stories told AS later legend against the seven-witness
// record; no battlefield cashiering of Lee; no Lee treason asserted. Portrait
// honesty: no life portrait of Charles Lee survives, so the posthumous-engraving
// caveat travels as an italic Image: tail in his bio (Saratoga/Fraser pattern).
// The hero is the Leutze "Washington Rallying the Troops at Monmouth"; its
// mandatory heroic-imagining caveat cannot ride the dossier masthead (credit
// line only, per the shared component; Germantown precedent). The casualty bar
// carries the contested arithmetic honestly: ~475 American (mid of the 450–500
// with the heat dead) against ~550 British (between the ~358 admitted return
// and the burial-count/estimate figures); the full dispute lives in the
// footnote. Image prefix rev-monmouth-* (incl. born-verified in-repo portrait
// reuses copied to the prefix).
// Sources: audits/war-pipeline/rev-monmouth-final.md (+ rev-monmouth-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-monmouth' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1778',
  title: 'Monmouth',
  date: 'June 28, 1778',
  place: 'Monmouth Court House (modern Freehold) and the farms west of it, New Jersey',
  note: 'France had come into the war, the British were giving up Philadelphia and marching across New Jersey to New York, and the army that had drilled all winter at Valley Forge went after their column. The vanguard (the forward attack force sent ahead to strike the enemy) was led by Charles Lee, who had argued against the whole idea, and when his attack came apart he ordered a retreat without telling Washington. Washington rode into the retreating troops, turned them around, and built a line that stood all afternoon in heat near 100 degrees, against the best regiments in the British Army. The battle ended a draw. It read, on the American side, like the proof of everything the winter had built. It was the last major battle in the north, and it cost the army its most experienced general.',
  hero: { img: '/war-img/rev-monmouth-hero.jpg', pal: ['#473a2a', '#725d45', '#171109'], credit: 'Emanuel Leutze · oil painting · c. 1851–54 · Berkeley Art Museum / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'engaged from about 8 a.m. to dusk · a morning attack and retreat, an afternoon stand and a two-hour artillery duel, then evening counterattacks · in heat near 100 degrees' },
    { label: 'Casualties', value: 'each side officially admitted about 360 · American burial parties counted some 250 British dead on the field · heat killed more men than gunfire by many accounts' },
    { label: 'Winner', value: 'A tactical draw: Clinton got his army and his 1,500-wagon train safely to New York, exactly as planned; but the army Steuben drilled at Valley Forge stood all day in open field against British regulars, ended the battle advancing, and held the ground at dark' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The main Continental Army', str: 'more than 14,000 (Lee\'s vanguard ~4,500; the main body ~7,800; Morgan\'s ~600–800 riflemen off the flank; plus militia)', cmd: 'Gen. George Washington', note: 'The army that came off the Valley Forge winter remade by Steuben\'s drill. Roughly half the Continentals (the full-time paid regulars, as opposed to part-time militia) were recruits enlisted since January, so what held the army together in the open field was the training, not veteran seasoning. Monmouth was the first major battle the retrained army fought.' },
    { side: 'c', tag: 'British', force: 'Clinton\'s column on the march', str: 'about 10,000 of Clinton\'s best troops turned to fight (Cornwallis\'s first division and the rearguard); the whole column, with its 1,500-wagon train, ran 17,700 to 19,700, and most of it kept marching', cmd: 'Gen. Sir Henry Clinton', note: 'An army on a forced evacuation it had not chosen. France\'s entry into the war had reset the strategic board, London had ordered Philadelphia abandoned, and Clinton was marching some 20,000 people and a baggage train stretched 12 miles across New Jersey toward the ships at Sandy Hook. When Lee\'s vanguard struck the rear, Clinton turned his elite first division around and threw it at them.' },
  ],
  casualties: {
    union: 475, csa: 550,
    unionLabel: 'American ~450–500 including the heat dead',
    csaLabel: 'British ~360 admitted · likely well over 500',
    footnote: 'American: Washington\'s return listed 69 killed, 161 wounded, and 132 to 140 missing, a reported total of 362 to 370. Many of the missing later came back, a share of them heat casualties, so real losses including the heat dead are usually put at about 450 to 500 and more; American heatstroke deaths ran to dozens. British: Clinton\'s return listed 65 killed, 59 dead "of fatigue" (heatstroke), 170 wounded, and 64 missing, a total around 358. But American burial parties reported interring about 250 British dead on the field, a count later revised to just over 300, far above the 124 killed and heat-dead Clinton admitted; estimates that fold in the buried, the wounded, and the campaign\'s roughly 256 German deserters run as high as 1,100 to 1,200 British losses for the whole march. The British numbers are genuinely contested: both armies\' official returns came to about 360, but the American burial count alone exceeds the British admitted dead, and no single figure reconciles the two. What is not in dispute is that on both sides the heat killed men who never saw an enemy.',
  },
  commanders: [
    { name: 'George Washington', role: 'Cmdr. in chief, American', side: 'u', img: '/war-img/rev-monmouth-washington.jpg', bio: 'Commander of the Continental Army since 1775, and after Brandywine, Germantown, and a winter of grumbling about replacing him, a general who needed a battlefield success and got one here. Monmouth is his rally battle: warned of nothing, he rode into a retreating vanguard, confronted its commander, turned the columns around, and built a line under fire that held all afternoon. He spent the night on the field expecting to renew the fight at dawn; Clinton was gone by morning. By year\'s end "Father of his Country" was attaching to him in print.' },
    { name: 'Charles Lee', role: 'Cmdr., the vanguard, American', side: 'u', img: '/war-img/rev-monmouth-lee.jpg', bio: <>English-born professional soldier and the army&apos;s most experienced general: a British regular in the French and Indian War, a soldier of fortune in Portugal and Poland, who settled in Virginia in 1773 and became Washington&apos;s second-in-command and loudest internal critic. Captured in 1776 and a British prisoner for sixteen months, he was exchanged that April. He argued against attacking Clinton at all, declined the vanguard as beneath his rank, then claimed it back by seniority, led it to Monmouth, and ordered the retreat that brought on the most famous confrontation of the war. Court-martialed at his own demand and convicted, he was ruined: suspended, then dismissed in 1780, dead in a Philadelphia tavern in 1782. Whether he deserved the verdict is still argued; historians who read the trial record closely have called the conviction political necessity as much as justice, the army choosing Washington over the merits. <em>Image: a nineteenth-century engraving by A.H. Ritchie; no portrait of Lee taken from life survives, and this is a posthumous likeness.</em></> },
    { name: 'Nathanael Greene', role: 'Cmdr., right wing, American', side: 'u', img: '/war-img/rev-monmouth-greene.jpg', bio: 'A Rhode Island ironmaster, self-taught from military books, Washington\'s most trusted subordinate and his quartermaster general besides. At Monmouth he commanded the right wing of the main line. His decisive act came in mid-afternoon: he planted Henry Knox\'s guns and Woodford\'s brigade on Combs Hill, off to the south, where their fire raked the length of the British line, silenced the enemy\'s edge in the artillery duel, and broke up the counterattack against Wayne.' },
    { name: 'William Alexander, Lord Stirling', role: 'Cmdr., left wing, American', side: 'u', img: '/war-img/rev-monmouth-stirling.jpg', bio: 'The New Jersey-born general who claimed an old Scottish earldom as his title, a quirk that never stopped him fighting for the Revolution, and who fought stubbornly at Long Island and Brandywine. At Monmouth he commanded the left wing on Perrine Ridge, the anchor of Washington\'s new line, directing the massed guns through the two-hour artillery duel and feeding out the flanking counterattack of picked men against the 42nd Highlanders that ended the British push on that flank.' },
    { name: 'Anthony Wayne', role: 'Forward cmdr., American', side: 'u', img: '/war-img/rev-monmouth-wayne.jpg', bio: 'The aggressive Pennsylvanian who led the vanguard\'s fixing force in the morning and was furious at the retreat order. He held the forward positions all afternoon: the Point of Woods, then the hedgerow line, then the late-day fight at the parsonage farm, where his roughly 400 Pennsylvanians caught the withdrawing grenadiers and where the British Lieutenant Colonel Henry Monckton was killed. Pressed by superior numbers, he was pulled out under the cover of the Combs Hill guns.' },
    { name: 'Marquis de Lafayette', role: 'Second-line cmdr., American', side: 'u', img: '/war-img/rev-monmouth-lafayette.jpg', bio: 'The young French major general who got the vanguard command first, lost it to Lee\'s seniority two days before the battle, and served under Lee on the field, where he sent Washington the morning\'s only warning that things were going wrong. In the afternoon he commanded the second line. His later recollections are some of the most quoted, and least reliable, sources for the day.' },
    { name: 'Friedrich Wilhelm von Steuben', role: 'Drillmaster, American', side: 'u', img: '/war-img/rev-monmouth-steuben.jpg', bio: 'The former Prussian officer whom Benjamin Franklin\'s advertising had inflated into a lieutenant general, and who from March 1778 drilled standardized maneuver and bayonet work through the whole army at Valley Forge. His fingerprints are the battle\'s real story: the vanguard retreated under fire without dissolving and the main line maneuvered like regulars. On the day he carried orders, helped re-form Lee\'s retreating units, and around three o\'clock took command of the reserve at Englishtown, formally relieving Lee.' },
    { name: 'Sir Henry Clinton', role: 'Cmdr. in chief, British', side: 'c', img: '/war-img/rev-monmouth-clinton.jpg', bio: 'The new British commander in chief, who had succeeded Howe in May 1778 and inherited an evacuation he had not chosen on a board France had reset. At Monmouth he turned his elite first division around and threw it at Lee\'s vanguard, nearly bagging it, then spent the afternoon battering at Washington\'s ridge line until the heat and the Combs Hill guns ended it. He slipped away at midnight, got his army and its train to Sandy Hook intact, and was ferried to New York days before a French fleet appeared off the coast: his mission, narrowly, accomplished.' },
    { name: 'Charles, Lord Cornwallis', role: 'First division cmdr., British', side: 'c', img: '/war-img/rev-monmouth-cornwallis.jpg', bio: 'Commander of the first division, the grenadiers, light infantry, and Guards, the best troops in the army. He personally directed the heavy counterattacks against the hedgerow and against Perrine Ridge through the worst of the afternoon heat.' },
  ],
  outcome: {
    verdict: 'A tactical draw · the day Washington\'s command inside the army stopped being questioned',
    text: 'Clinton accomplished his mission and Washington held the field, and both things were true at once. The Continental Army had stood in open ground against British regulars for a full day and finished it attacking, the first time this army ever ended a battle advancing, and the Valley Forge winter was made good in front of the whole country. Congress voted its thanks; the press celebrated; inside the army the talk of replacing Washington stopped. It was the last major battle between the two main armies in the north. The price was Charles Lee, the army\'s most experienced general, ruined by a retreat, a confrontation, and a court-martial that historians still argue about.',
  },
  sections: [
    { id: 'a-bridge-of-gold', eyebrow: 'Why fight at all', title: 'A bridge of gold', blurb: 'France was in the war, the British were abandoning Philadelphia, and a 12-mile column was crawling across New Jersey in killing heat. Washington\'s council split: shadow the British and let them go, or strike. The army\'s most experienced general argued hard for letting them go, and then demanded command of the attack he had opposed.' },
    { id: 'the-confrontation', eyebrow: 'The retreat and the rally', title: '"Whence arises this disorder?"', blurb: 'Lee\'s attack came apart against troops that turned out to be Cornwallis\'s best, his vanguard fell back in good order but with no word sent to Washington, and Washington rode forward into the retreat. What he said to Lee is the most legend-scraped scene in the war. The seven men close enough to swear to it recorded cold fury and no profanity at all.' },
    { id: 'the-stand', eyebrow: 'The afternoon', title: 'The army that held', blurb: 'Behind the ravines, the line Steuben\'s winter had built: Stirling\'s guns on Perrine Ridge, Greene\'s on Combs Hill, Wayne forward at the hedgerow, an artillery duel in the heat, and a woman at a gun whose story the whole country would tell. By dark the army was advancing, Clinton was slipping away, and Charles Lee was writing the letters that would destroy him.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/monmouth/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function MonmouthPage() {
  return <BattleDossier data={DATA} />
}
