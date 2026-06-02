// "Follow a commander through the war" — the cast registry.
//
// Each commander is defined ONCE here (canonical name, side, portrait, life
// dates, a short overview, and how their war ended), with an `appearances` list
// keyed by battle id (the roster id in civil-war-roster.ts). The per-battle
// `note` is that commander's beat in that battle — what they did there. The
// commander page (commander-page.tsx) looks up each battle's date/theatre/name/
// href from MAJORS and renders the appearances as a chronological arc.
//
// PROTOTYPE: Grant only, to evaluate the layout. The per-battle notes are drawn
// from the gated commander strips already shipped in the battle dossiers; the
// overview + fate are new prose and must clear the war critic pipeline before a
// full cast rollout. A `transition` caption marks where a commander's arc shifts
// theatre (e.g. Grant promoted east).

export type Side = 'U' | 'C'

export interface CommanderAppearance {
  battleId: string      // matches an id in MAJORS (civil-war-roster.ts)
  role: string          // their rank / role in THIS battle (as shipped in the dossier strip)
  note: string          // the beat: what they did here (one or two sentences)
  transition?: string   // when set, a labeled divider renders BEFORE this beat (an arc turning point)
}

export interface Commander {
  id: string            // url slug + headshot basename
  name: string
  side: Side
  portrait: string      // /war-img/cmdr/<id>.jpg
  born: number
  died: number
  epithet: string       // one-line role at the height of the war
  overview: string      // 2–4 sentences: who they were, the arc in brief
  fate: string          // how their war (and life) ended
  appearances: CommanderAppearance[]   // any order; the page sorts chronologically
}

const GRANT: Commander = {
  id: 'grant',
  name: 'Ulysses S. Grant',
  side: 'U',
  portrait: '/war-img/cmdr/grant.jpg',
  born: 1822,
  died: 1885,
  epithet: 'General-in-Chief, U.S. Armies',
  overview:
    "Before the war Ulysses S. Grant was a West Point graduate who had washed out of the peacetime army and was clerking in his family's leather-goods store in Galena, Illinois. The war remade him. He rose from colonel of an Illinois regiment to general-in-chief of all United States armies, taking the western rivers, splitting the Confederacy at Vicksburg, and breaking the siege at Chattanooga before Lincoln brought him east to face Robert E. Lee. There he did what no Union commander before him had managed: he absorbed Lee's punishment and kept coming, grinding the Army of Northern Virginia from the Wilderness all the way to Appomattox.",
  fate:
    "Grant took Lee's surrender at Appomattox in April 1865 and went on to serve two terms as the eighteenth President. Bankrupted by a business swindle and dying of throat cancer, he raced to finish his Personal Memoirs to provide for his family, completing them days before his death in July 1885. Published by Mark Twain, the book became a bestseller and is still counted one of the finest memoirs ever written by an American soldier.",
  appearances: [
    { battleId: 'w-donelson', role: 'Cmdr., Union',
      note: "Grant marched overland from Fort Henry and pressed the siege from the land side after the gunboats were beaten off the river. When the Confederate breakout broke his right, he read the captured soldiers' packed knapsacks for what they were, ordered an attack all along the line, and the next morning demanded an unconditional surrender that bagged the whole garrison." },
    { battleId: 'w-shiloh', role: 'Cmdr., Union',
      note: "Caught with his army unentrenched and scattered in its camps, Grant reached Pittsburg Landing mid-morning to find the first day going badly and steadied the broken line by the river at dusk. He refused to retreat across the Tennessee, attacked at first light the next morning with the fresh men who had crossed overnight, and drove the Confederates off the field." },
    { battleId: 'w-corinth', role: 'Dept. cmd., Union',
      note: "Grant ran the wider western theater from his headquarters at Jackson, Tennessee, with his forces scattered between Corinth, Memphis, and Bolivar. He did not command on the field at Corinth, but the victory secured his rear and freed him to turn south toward the campaign against Vicksburg." },
    { battleId: 'w-championhill', role: 'Cmdr., Union',
      note: "Loose in the interior of Mississippi with his supply line cut, Grant reached the field around mid-morning and aimed his blow at the exposed northern flank up the Jackson Road, where the road home ran. He won the day with barely half his army and broke Pemberton in the open before the siege of Vicksburg ever began." },
    { battleId: 'w-vicksburg', role: 'Cmdr., Union',
      note: "After the overland march and a frontal assault both failed, Grant ran the batteries, crossed below the city, cut loose from his supply line, and won five battles in eighteen days, driving Pemberton's army inside the walls. Two storms on the works failed bloodily, so he settled into a 47-day siege and starved the garrison into surrendering nearly 30,000 men on July 4." },
    { battleId: 'w-lookout', role: 'Cmdr., Union',
      note: "In overall command at Chattanooga, Grant planned a three-day breakout to crack the ring of heights around the city and meant Lookout Mountain only as a feint to set up the main blow on Missionary Ridge. He thought the fight on the cliffs was overrated and never counted it as much of a battle." },
    { battleId: 'w-missionary', role: 'Cmdr., Union',
      note: "Grant built his plan around a hammer blow by Sherman against the Confederate right, with Thomas's men set only to feint at the center. When the flank attacks stalled, he sent the center forward against the base of the ridge, then watched from Orchard Knob as those men kept climbing without his order and carried the crest." },
    { battleId: 'e-wilderness', role: 'Gen.-in-Chief, Union',
      transition: 'Promoted to general-in-chief of all United States armies. Grant comes east in March 1864 and rides with the Army of the Potomac, leaving the West to Sherman.',
      note: "Newly made general-in-chief, Grant rode into the Wilderness meaning to march through it and fight Lee in the open beyond. Stopped cold and bloodied worse than Lee, he did the thing no Union commander before him had done after a battle with Lee: instead of retreating across the river, he ordered the army south around Lee's flank and kept attacking." },
    { battleId: 'e-spotsylvania', role: 'Gen.-in-Chief, Union',
      note: "Grant ran the campaign himself, and after the bloody draw in the Wilderness he turned the army southeast rather than north. For two weeks he attacked Lee's works, was repulsed, and slid southeast to try again, telling Washington he meant to fight it out on this line if it took all summer." },
    { battleId: 'e-coldharbor', role: 'Gen.-in-Chief, Union',
      note: "Believing Lee's line could be broken, Grant ordered a dawn assault on the finished Confederate works. It failed in about an hour and he called it off by noon; years later he wrote that he had always regretted ordering the last assault at Cold Harbor." },
    { battleId: 'e-petersburg2', role: 'Gen.-in-Chief, Union',
      note: "Grant conceived the campaign's masterstroke, slipping the whole Army of the Potomac out of its lines at Cold Harbor and across the James to reach Petersburg from the rear. When the assaults stalled and the city dug in, he ordered one last charge, watched it fail, then settled in for the siege he had hoped to avoid." },
    { battleId: 'e-crater', role: 'Gen.-in-Chief, Union',
      note: "Grant backed Meade's order pulling the Black division from the lead, fearing the army would be blamed if they were slaughtered going in first. He called the Crater the saddest affair he had witnessed in the war, and an opportunity for carrying fortifications he never expected to see again." },
    { battleId: 'e-fortstedman', role: 'Gen.-in-Chief, Union',
      note: "Grant was at City Point with his own offensive already set to open within days. He let Parke handle the morning, then used the failed Confederate sortie as cover to seize picket lines elsewhere on the front, ground that helped open the breakthrough a week later." },
    { battleId: 'e-petersburg3', role: 'Gen.-in-Chief, Union',
      note: "When word came that Sheridan had broken the Confederate right at Five Forks, Grant did not wait for morning: he ordered the entire Petersburg line assaulted at first light. The blow he had been building toward for nine months landed all along the front at once, cracked the siege open in twenty minutes, and put Lee's army on the road at last." },
    { battleId: 'e-appomattox', role: 'Gen.-in-Chief, Union',
      note: "Grant broke the Petersburg line, then ran Lee down across ninety miles, throwing cavalry across the road west and pushing infantry to cut off every turn south. At the McLean house he wrote out terms that paroled the Confederates and let them keep their horses, and sent 25,000 rations to feed the army he had just beaten." },
  ],
}

export const COMMANDERS: Record<string, Commander> = {
  grant: GRANT,
}

export const commanderIds = Object.keys(COMMANDERS)
