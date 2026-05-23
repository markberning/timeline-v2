// THEME section — The Emancipation Proclamation (Off the Battlefield, kind=theme).
// First non-battle section built through the war content pipeline (fact pack →
// author(Opus) → fact-check + storytelling critic(Sonnet) → revise). A theme is
// ONE arc-driven section (pressure → turning point → consequence), rendered by
// the shared <BattleSectionReader>; no stat block, no tactical map. Source +
// gate records: audits/war-pipeline/emancipation-*.md. Green accent.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'
import { ACCENTS } from '@/components/mode/war-chrome'

const NARR: Record<string, Narr> = {
  main: {
    eyebrow: 'The war’s purpose changes',
    title: 'The Stroke of a Pen, the Slowest Liberation',
    blocks: [
      { p: `For thirteen months Abraham Lincoln had been waiting for a win. Then, on September 17, 1862, along a creek in Maryland called Antietam, he got one — barely. Confederate general Robert E. Lee (South) was stopped cold and pulled his army back across the Potomac, leaving behind a single day of fighting that produced roughly 23,000 combined casualties, the bloodiest single day in American history. It was less a triumph than a survival. But it was enough. Five days later, Lincoln picked up a document he’d been carrying in his pocket for two months and turned it loose on the country.` },
      { p: `What he issued is one of the most famous pieces of paper in American history — and one of the most misunderstood. People remember it as the moment four million enslaved people walked free. It wasn’t. On the day Lincoln signed the final version, it freed almost no one he could actually reach. And yet it remade the war, the country, and the meaning of the whole bloody fight. That paradox — a freedom document that didn’t immediately free people, and mattered enormously anyway — is the real story.` },

      { h: 'The president who said one thing — and was already doing another', eyebrow: 'Pressure' },
      { p: `By the summer of 1862, the question of slavery was no longer something the war could politely avoid. It kept walking into Union army camps on its own two feet.` },
      { p: `Congress had been inching toward it. The First Confiscation Act (August 6, 1861) let the Union seize enslaved people being used against it. The Second Confiscation Act (July 17, 1862) went further: enslaved people who escaped to Union lines, or were seized from rebel owners, “shall be forever free,” and the army was authorized to enlist African Americans against the rebellion. (That March, Congress had even barred the army from returning people who’d fled to its lines.) Step by step, “this isn’t a war about slavery” was getting harder to say with a straight face.` },
      { p: `Lincoln had already made up his mind. On July 13, 1862, he quietly read a draft proclamation to just two men: Secretary of State William H. Seward (his chief diplomat) and Navy Secretary Gideon Welles (whose diary would become one of the great records of the era). On July 22 he laid it before the full cabinet. Edwin Stanton, the Secretary of War, wanted it out immediately. Treasury Secretary Salmon Chase was on board. But Seward raised a hand: not yet. The Union had been losing. Drop an emancipation order now, he warned, and the world would read it as a desperate gesture — “its last shriek of retreat.” Wait for a victory, Seward said, so it goes out from strength.` },
      { p: `So Lincoln waited. And here is where the most famous misunderstanding of his whole presidency was born.` },

      { h: 'The Greeley letter, read correctly' },
      { p: `In August 1862, Horace Greeley — editor of the New York Tribune, the loudest newspaper voice in the North — published a furious open letter to the president titled “The Prayer of Twenty Millions,” demanding Lincoln strike at slavery already. On August 22, Lincoln answered him in public, and produced the lines that still get quoted to “prove” he didn’t care about enslaved people:` },
      { p: `My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery. If I could save the Union without freeing any slave I would do it, and if I could save it by freeing all the slaves I would do it; and if I could save it by freeing some and leaving others alone I would also do that.`, q: true },
      { p: `Read cold, it sounds like a man weighing freedom on a scale of pure expedience. But context flips it. Lincoln had already privately decided to issue the proclamation — the draft was sitting in his desk, waiting only for Seward’s victory. The letter wasn’t indifference; it was a performance for a nervous public, framing emancipation as the thing that would save the Union and keeping the jittery slaveholding states still loyal to the U.S. from bolting. He even tucked the truth into the closing line: “I intend no modification of my oft-expressed personal wish that all men every where could be free.” He was managing the country’s nerves while holding a freedom order in his hand.` },

      { h: 'A covenant, a deadline, and a document with a hole in the middle', eyebrow: 'Turning point' },
      { p: `When the news came that Lee had been turned back at Antietam, Lincoln treated it as the sign he’d been promised. Welles recorded that the president felt he had “made a covenant with God”: if the army drove the enemy out of Maryland, he would issue the proclamation. The army had. So he did.` },
      { p: `On September 22, 1862, came the preliminary Emancipation Proclamation — an ultimatum with a clock on it. Any state still in rebellion on January 1, 1863, would have the enslaved people within it declared, in Lincoln’s own words, “thenceforward, and forever free.” The rebel states had a little over three months to lay down arms and rejoin the Union. None did. And so, on the afternoon of January 1, 1863, after standing through the traditional White House New Year’s reception, Lincoln signed the final version.` },
      { fig: '/war-img/emancipation-cabinet.jpg', cap: 'Lincoln reads the draft to his cabinet, summer 1862 — Stanton seated at left, Welles bearded at center, Seward at front right.', credit: 'Francis B. Carpenter, “First Reading of the Emancipation Proclamation” (1864), Senate wing of the U.S. Capitol · public domain' },

      { h: 'What it actually said — and the hole at its center' },
      { p: `Lincoln did not free the enslaved as a moral emperor waving a wand. He freed them as a general — specifically, as “Commander-in-Chief,” calling the act “a fit and necessary war measure for suppressing said rebellion.” That phrase, war measure, was the whole game. It was his legal justification, and it was also his cage. A president at war can seize an enemy’s resources. A president has no general power to abolish slavery by decree. So the proclamation could only reach the enemy’s territory — which is exactly where Lincoln’s pen could not yet reach anybody.` },
      { p: `Look at where it applied. It named ten states in rebellion: Arkansas, Texas, Louisiana, Mississippi, Alabama, Florida, Georgia, South Carolina, North Carolina, and Virginia. And then look at who it pointedly left out. The “border states” — the slaveholding states along the line between North and South (Missouri, Kentucky, Maryland, and Delaware) that had stayed in the Union — were exempt; slavery stayed perfectly legal there. So was all of Tennessee, under Union military government. So were thirteen Union-occupied Louisiana parishes, New Orleans among them, and the Virginia counties breaking away to form West Virginia, plus the Norfolk area.` },
      { p: `In other words: the proclamation freed enslaved people only in the places the Union army didn’t yet control, and exempted the slaveholding places it did control. Hundreds of thousands of people — across the border states and the occupied zones — were left exactly where they were, still held in bondage. The document covered more than 3.5 million of the nearly 4 million enslaved in America, but “covered” is doing heavy lifting. On the day it was signed, the number actually walking free, in the few coastal corners the army already held, was perhaps twenty thousand. For everyone else, freedom now had a precondition: the United States Army had to physically arrive. Liberation would advance one mile at a time, at the speed of the columns. It was not a moment. It was a promise the army would have to keep with its boots.` },

      { h: 'Why it landed like thunder anyway' },
      { p: `So why did anyone celebrate? Because the people who understood slavery best understood what had just changed.` },
      { p: `In Boston, at Tremont Temple, Frederick Douglass — the great abolitionist orator who had himself been enslaved — spent New Year’s night in an agony of waiting for the telegraph. “We were waiting and listening as for a bolt from the sky, which should rend the fetters of four millions of slaves,” he later wrote, “we were longing for the answer to the agonizing prayers of centuries.” When word finally came that Lincoln had signed, the hall erupted — and the rejoicing spilled into a nearby church that, by Douglass’s account, “did not break up till near the dawn of day.” Douglass grasped what the fine print couldn’t hide: the United States government had just, officially, put itself on the side of ending slavery. The war’s purpose had changed. There was no going back.` },

      { h: 'One signature, four ways the world tilted', eyebrow: 'Consequence' },
      { p: `The story of why it mattered is really four stories.` },
      { p: `First, it changed what the war was for. Before, the official goal was simple: restore the Union. After January 1, 1863, the goal was to restore the Union and end slavery in the rebel states. You cannot overstate how big that is. Every mile the army advanced now carried freedom with it as a matter of national policy. The war and abolition had become the same campaign.` },
      { p: `Second, it put rifles in the hands of the formerly enslaved. The proclamation authorized Black men to enlist, and on May 22, 1863, General Order No. 143 created the Bureau of U.S. Colored Troops to organize them. Roughly 180,000 Black soldiers would serve in the Union army — about one in ten of all Union manpower — with some twenty thousand more in the Navy. And they did not just fill out the ranks. That July, the 54th Massachusetts, one of the first Black regiments, charged the sand walls of Fort Wagner in South Carolina at dusk and lost nearly half its men in a single assault — and the country read about it. Men who had been property a year earlier now wore the uniform and bled for the freedom of the rest.` },
      { p: `Third, it quietly killed the Confederacy’s last hope abroad. The South had been betting that Britain and France, starved of Southern cotton, would step in and recognize the Confederacy as a real country. But once Lincoln reframed the war as a war against slavery, recognizing the Confederacy meant openly siding with slavery — politically impossible in Britain, where abolitionism ran deep. After Antietam and the proclamation, British leaders dropped the mediation talk that had been drifting around in the fall of 1862; Britain never recognized the Confederacy. Even the cotton-mill workers of Manchester, thrown out of work by the loss of Southern cotton, backed the Union anyway. Lincoln, moved, praised their “sublime Christian heroism.” The South’s foreign lifeline went slack.` },
      { p: `And fourth, it pointed the way to making freedom permanent. Because the proclamation was only a war measure, everyone understood its weakness: it could be challenged, narrowed, or unwound once the war ended. To free people for good, the Constitution itself had to change. That recognition drove the push for the 13th Amendment, which abolished slavery nationwide — passing the Senate in April 1864, the House on January 31, 1865, and finally ratified on December 6, 1865. The proclamation lit the road. The amendment paved it.` },

      { h: '“My whole soul is in it”' },
      { p: `On signing day, Lincoln’s hand was a mess — not from nerves, but from hours of holiday handshaking. He reportedly joked that he’d “been receiving calls and shaking hands since nine o’clock this morning, till my arm is stiff and numb,” and worried that “this signature is one that will be closely examined, and if they find my hand trembled they will say he had some compunctions.” So he steadied himself and signed slow and firm. “I never in my life felt more certain that I was doing right,” he reportedly said, “than I do in signing this paper.” And, the artist Francis Carpenter later remembered, he added that if his name ever went into history it would be for this act — “and my whole soul is in it.”` },
      { p: `He was right about the history. The Emancipation Proclamation freed shockingly few people on the day it was signed. But it changed what the war meant, who could fight it, who would help it from abroad, and where the whole story was heading. It was a beginning that read like an ending — a promise the army would spend two more years keeping, mile by mile, until a constitutional amendment made it forever.` },
    ],
    meanwhile: {
      region: 'the Eastern Theatre, five days earlier',
      title: 'Antietam',
      body: 'The bloodiest single day in American history was also the victory Lincoln had been waiting for. Lee’s retreat from Maryland gave him the moment of strength Seward had told him to find — and the preliminary proclamation followed within the week.',
    },
  },
}

export default function EmancipationThemePage() {
  return (
    <BattleSectionReader
      sections={NARR}
      id="main"
      slug="emancipation"
      battleName="The Emancipation Proclamation"
      theatreId="offfield"
      battleId="th-emancipation"
      theatreHref="/war-civil-war/off-the-battlefield"
      accent={ACCENTS.green}
      endHref="/war-civil-war/off-the-battlefield"
      endKicker="End of this story"
      endLabel="Back to Off the Battlefield"
    />
  )
}
