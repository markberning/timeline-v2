'use client'

// BATTLE dossier (Battle of Stones River). Same shape as Shiloh: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a2e21, #2a221c, #0a0806).

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-stonesriver' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Stones River',
  date: 'December 31, 1862 – January 2, 1863',
  place: 'Murfreesboro, Tennessee',
  hero: {
    img: '/war-img/stones-river-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~24,600' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Cumberland', str: '~43,400 troops', cmd: 'Rosecrans', note: `Surprised at dawn and folded back three miles, but it would not retreat.` },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee', str: '~35,000 troops', cmd: 'Bragg', note: `Struck first and thought it had won, then bled itself white on January 2.` },
  ],
  casualties: { union: 12906, csa: 11739, unionLabel: 'Union ~12,906', csaLabel: 'Confederacy ~11,739' },
  commanders: [
    { name: 'William S. Rosecrans', role: 'Cmdr., Cumberland', side: 'u', img: '/war-img/cmdr/rosecrans.jpg', bio: `Rosecrans was caught off balance when Bragg struck his right at dawn on December 31, his chief of staff killed at his side by a cannonball as the two rode the lines. He refused his officers’ advice to retreat, held the army together near the Nashville Pike, and seized the high ground east of the river that decided the battle two days later.` },
    { name: 'George H. Thomas', role: 'Center, Union', side: 'u', img: '/war-img/cmdr/thomas.jpg', bio: `Thomas held the Union center near the pike and railroad as the right wing collapsed around him, turning back Polk’s piecemeal attacks with heavy loss to the Confederates. When the council of war debated retreat that night, he was among those who backed Rosecrans in deciding to stay and fight it out.` },
    { name: 'Philip H. Sheridan', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: `Sheridan’s division dug in among the cedar brakes and stood for roughly four hours in the sector the soldiers named the Slaughter Pen, buying the time the rest of the army needed to form a new line. All three of his brigade commanders were killed and more than a third of his men fell before he pulled back, his ammunition gone.` },
    { name: 'Alexander M. McCook', role: 'Right Wing, Union', side: 'u', img: '/war-img/cmdr/mccook.jpg', bio: `McCook commanded the Union right wing, posted in open ground with its flank anchored on nothing, and bore the full weight of Hardee’s dawn attack. His men were caught at their cook fires and folded back roughly three miles before the line finally stiffened near the pike.` },
    { name: 'Braxton Bragg', role: 'Cmdr., Tennessee', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: `Bragg struck first on December 31, bent the Union line nearly double, and wired Richmond that he had won. When the enemy was still there two days later, he ordered Breckinridge into a doomed charge against his general’s protest, then withdrew his bled-white army south toward Tullahoma.` },
    { name: 'William J. Hardee', role: 'Corps, CSA', side: 'c', img: '/war-img/cmdr/hardee.jpg', bio: `Hardee, the army’s ablest tactician and author of its drill manual, led the dawn assault that swept out of the cedars and crumpled the Union right. His attack drove McCook’s wing back three miles before Sheridan’s stand and the line near the pike halted the Confederate advance.` },
    { name: 'Leonidas Polk', role: 'Corps, CSA', side: 'c', img: '/war-img/cmdr/polk.jpg', bio: `Polk’s corps struck the Union center to keep Thomas from reinforcing the collapsing right, but his attacks went in piecemeal and were turned back at heavy cost. His repeated assaults on the Round Forest, the salient the soldiers called Hell’s Half Acre, could not break the one piece of the original Union line that never gave ground.` },
    { name: 'John C. Breckinridge', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/breckinridge.jpg', bio: `A former Vice President of the United States, Breckinridge protested Bragg’s January 2 order to storm the Union-held hill as suicidal, then led the charge when he was overruled. Roughly fifty massed Union guns on the far bank tore his division apart in under an hour, nearly destroying the Kentucky Orphan Brigade in the process.` },
  ],
  outcome: {
    verdict: `Union victory · the win that backstopped emancipation`,
    text: `Bragg’s dawn surprise folded the Union right back three miles and very nearly destroyed Rosecrans’s army before breakfast, but the line held near the Nashville Pike and refused to retreat. After a strange, still New Year’s Day, Bragg threw away a division in Breckinridge’s doomed January 2 charge, then withdrew. The fighting was as concentrated as any in the war, one of its highest casualty rates, but the meaning was in the timing: Stones River was the first major Union victory of the Emancipation Proclamation era, handing Lincoln a desperately needed win at the exact moment the war became, in law, a war to end slavery.`,
  },
  sections: [
    { id: 'the-armies-face-off', eyebrow: 'Two mirror-image plans', title: 'The Year Turns at Murfreesboro', blurb: `Rosecrans (North) marches out of Nashville; Bragg (South) turns to face him, and both generals plan the identical dawn attack.`, img: '/war-img/stones-river-overview.png' },
    { id: 'the-dawn-blow', eyebrow: 'December 31, before breakfast', title: 'The Confederate Jackknife', blurb: `Hardee (South) strikes first and folds the Union right back three miles; Sheridan (North) bleeds for four hours in the Slaughter Pen to save the army.`, img: '/war-img/stones-river.png' },
    { id: 'the-new-years-pause', eyebrow: 'January 1', title: 'The Day Nobody Moved', blurb: `A day almost nothing happens, and the Emancipation Proclamation takes effect over a battlefield that has no idea its whole meaning just changed.`, img: '/war-img/cmdr/rosecrans.jpg' },
    { id: 'breckinridges-charge', eyebrow: 'January 2, four o’clock', title: `The Charge at McFadden’s Ford`, blurb: `Bragg (South) orders Breckinridge (South) into an assault his own general calls suicidal; fifty massed Union guns annihilate it in under an hour.`, img: '/war-img/stones-river-day2.png' },
    { id: 'the-cost-and-the-meaning', eyebrow: 'The cost & the meaning', title: 'A Hard-Earned Victory', blurb: `~25,000 fall in three days at one of the highest casualty rates of the war. Bragg retreats; the North gets the win that backstops emancipation.`, img: '/war-img/cmdr/breckinridge.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/stones-river/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function StonesRiverPage() {
  return <BattleDossier data={DATA} />
}
