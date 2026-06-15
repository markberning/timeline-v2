// Opus AUTHOR draft of J.S. Mill's *On Liberty* (1859) WORK read
// (Step 2 of audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/liberty-work-fact-ledger.md. PhiNarr shape is identical
// to hume-enquiry.ts / nicomachean.ts; the reader at /philosophy/work/liberty renders
// it. This WORK read goes INTO the book (why written -> the argument walked ->
// reception -> afterlife) and does NOT restate the Mill thinker page.
//
// Quote doctrine: every quoted line is verbatim from the public-domain text of
// *On Liberty* (Project Gutenberg ebook 34901, the Walter Scott edition), string-matched
// at authoring time and cited by chapter. Mill wrote in English; there is no translation
// question. British spellings of the edition ("civilised") are preserved inside quotes.
// The harm principle is presented as built WITH Harriet Taylor (Mill's own dedication),
// not as a footnote. Utilitarianism is named as the ground Mill stands on ("utility in
// the largest sense, grounded on the permanent interests of man as a progressive being"),
// not the ends-justify-any-means cartoon.

import type { PhiNarr } from '@/components/philosophy-reader'

export const LIBERTY: PhiNarr = {
  "title": "Mill's On Liberty",
  "throughline": "One short book tries to draw a single line: where does society's power over a person stop and that person's own sovereignty begin. Mill's answer is the harm principle, that the only ground on which anyone may be coerced against their will is to prevent harm to others, and that a person's conduct toward themselves is theirs alone. From that one rule he builds the most complete defense of free speech ever written (even one dissenter must be heard, because the silencers might be wrong, because a half-truth needs its opposite, and because a truth no one is allowed to question rots into dead dogma), a case for individuality as a piece of human well-being, and a warning that the danger to liberty had shifted from the king's soldiers to the silent pressure of the majority's opinion, which reaches deeper than any law. The book was dedicated to Harriet Taylor, who died the year before it appeared, and whom Mill called in part its author.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/7/72/On_Liberty_%28first_edition_title_page_via_facsimile%29.jpg",
    "cap": "The title page of the first edition, London, 1859, published by John W. Parker and Son. Mill drafted the book with Harriet Taylor and reserved the final revision for her; she died at Avignon in November 1858, before it was finished, and Mill published it the next year with a dedication to her memory.",
    "alt": "The title page of the 1859 first edition of John Stuart Mill's On Liberty",
    "portrait": true
  },
  "hook": [
    "*On Liberty* is barely a hundred pages, and it spends them on a single question. Not who should govern, the question that had occupied politics for centuries, but a deeper one underneath it: whatever the government is, how much of a person's life is any of its business, or anyone's business. [Mill](/philosophy/thinker/mill) names the subject in his first paragraph as \"the nature and limits of the power which can be legitimately exercised by society over the individual,\" and calls it a question seldom stated and almost never discussed in plain terms, though it shapes every practical controversy of the age.",
    "The book opens with a death notice disguised as a dedication. \"To the beloved and deplored memory of her who was the inspirer, and in part the author, of all that is best in my writings,\" it begins, the friend and wife whose revision the work was meant to have and never received, \"some of the most important portions having been reserved for a more careful re-examination, which they are now never destined to receive.\" The her is [Harriet Taylor](/philosophy/thinker/taylor), Mill's partner in thought across two decades and his wife for the last seven years of her life. She died in 1858. Mill said the book belonged as much to her as to him, and he meant it as a claim about the work, not a courtesy.",
    "What Mill builds from his one question is a principle so simple it can be stated in a sentence and so consequential that the next century of arguments about censorship, drugs, sex, and speech would be fought on its terms. The only thing that justifies forcing a person to do or not do something, against their will, is preventing harm to other people. A person's good, their health, their happiness, their soul, is never enough. That rule, and its limits, is the whole book.",
    "Mill was a utilitarian, raised inside the movement, and *On Liberty* is not a retreat from that. He does not appeal to natural rights or to a liberty that floats free of consequences. He grounds the whole thing in utility, but utility \"in the largest sense, grounded on the permanent interests of man as a progressive being.\" The wager of the book is that the greatest good, in the long run, comes from leaving people free, and that a society which polices its members for their own good ends up smaller, duller, and more wrong than one that lets them alone."
  ],
  "brk": {
    "beforeLabel": "Liberty means the people holding the reins of power, so a self-governing people needs no protection from itself",
    "afterLabel": "Self-government can become the tyranny of the majority, and the worst coercion is now social, not legal",
    "paragraphs": [
      "The older idea of liberty was a contest between two parties: the rulers and the ruled. Liberty meant fencing in the rulers, wringing concessions from kings, setting limits the crown could not cross. The next stage of the argument said the cure was to make the rulers and the ruled the same people, to put power in the hands of the nation itself through elections and representatives, on the reasoning that a people cannot need protection against its own will. Mill grants that this was the natural hope of a reforming age, and that it carried real gains.",
      "His break is to notice that the hope rested on a confusion. \"The people\" who exercise the power are not the same as \"the people\" over whom it is exercised; the will of the people means, in practice, the will of the most numerous or most active part, the majority, or those who manage to get themselves accepted as the majority. So a self-governing people can oppress a minority within it exactly as a king oppressed his subjects. Mill gives the danger the name that stuck: \"the tyranny of the majority,\" an evil that a society now has to guard against like any other.",
      "And the deepest part of the break is where Mill locates the threat. A tyrant with soldiers can only reach a person's outward acts, and only so far as his reach extends. The majority's tyranny works through opinion and custom, and that, Mill argues, can be worse: it leaves fewer ways to escape, it penetrates the details of daily life, and it enslaves the soul itself. A society that meddles where it ought not, he writes, \"practises a social tyranny more formidable than many kinds of political oppression.\" The protection a free person needs is no longer only against the magistrate. It is against the silent, crushing pressure of everyone else's disapproval."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The line, and who drew it",
      "epigraph": {
        "text": "\"To the beloved and deplored memory of her who was the inspirer, and in part the author, of all that is best in my writings—the friend and wife whose exalted sense of truth and right was my strongest incitement, and whose approbation was my chief reward—I dedicate this volume.\"",
        "attribution": "— J.S. Mill, *On Liberty*, dedication (1859)"
      },
      "blocks": [
        {
          "p": "Before the argument starts, there is the dedication, and it is unusual enough to read twice. [Mill](/philosophy/thinker/mill) dedicates the book to the memory of [Harriet Taylor](/philosophy/thinker/taylor), who had died the year before, and he does not call her his inspiration in the soft sense an author might thank a spouse. He calls her \"in part the author\" of the best of his work, and he says of the book in hand that \"it belongs as much to her as to me.\" He adds, with visible grief, that it had not had the benefit of her revision, that the most important parts had been held back for a re-examination with her that death made impossible. Taylor and Mill had been close for two decades, in a relationship that scandalized respectable London while her first husband lived; they married in 1851, after his death, and she died in 1858 at Avignon. The harm principle, the doctrine the book exists to state, was worked out between them. Crediting her is not gallantry. It is the record."
        },
        {
          "p": "The subject Mill announces is narrow and enormous at once: \"the nature and limits of the power which can be legitimately exercised by society over the individual.\" Not the liberty of the will, the old metaphysical puzzle about whether choices are free; civil liberty, the practical question of how much of a life society may run. He sets it up by retracing how the danger to liberty had changed shape (Chapter on the break), from the king who had to be fenced in, to the majority that turned out to need fencing in too, to the discovery that the heaviest hand on a person is now not law but opinion. The book is the attempt to find one rule that marks off the zone where that hand has no business reaching."
        },
        {
          "p": "Then comes the rule, stated in the plainest sentence in nineteenth-century political thought. \"The only purpose for which power can be rightfully exercised over any member of a civilised community, against his will, is to prevent harm to others.\" Everything else follows from this. A person's own good is explicitly ruled out as a ground for compulsion: he cannot rightfully be forced to act \"because it will be better for him to do so, because it will make him happier, because, in the opinions of others, to do so would be wise, or even right.\" Those are reasons to argue with him, to plead with him, to try to talk him round. They are never reasons to make him. To justify force, the conduct in question must threaten to harm someone else."
        },
        {
          "p": "Mill draws the boundary the principle implies as a wall around a private kingdom. The part of a person's conduct for which they answer to society is the part that concerns others; the rest is theirs. \"In the part which merely concerns himself, his independence is, of right, absolute. Over himself, over his own body and mind, the individual is sovereign.\" That word, sovereign, is doing the heavy lifting. A sovereign is not answerable to a higher authority within their own domain, and Mill is saying each adult is exactly that over their own life. The body, the mind, the choices that fall on no one else: a no-trespassing line that neither the state nor the neighbors nor the whole of society may cross, however certain they are that they know better."
        },
        {
          "p": "Mill is careful about where the principle does not apply, and the caveats matter. It is meant for \"human beings in the maturity of their faculties,\" not children, who can rightly be protected from themselves. He also exempts what he calls \"those backward states of society in which the race itself may be considered as in its nonage,\" holding that despotism is a legitimate government for peoples he judged not yet capable of improvement by free discussion, citing an Akbar or a Charlemagne. This is the book's most dated and most criticized passage, a Victorian imperial assumption written straight into the text, and later readers have rightly refused to follow him there. It sits inside the same book that, two chapters on, makes the deepest case ever made for letting people alone, and the tension is real."
        },
        {
          "p": "One more thing is settled before the demolitions begin: the ground Mill is standing on. He refuses any appeal to \"abstract right, as a thing independent of utility.\" He is a utilitarian, and he stays one. \"I regard utility as the ultimate appeal on all ethical questions,\" he writes, \"but it must be utility in the largest sense, grounded on the permanent interests of man as a progressive being.\" This is the hinge that separates Mill's utilitarianism from the cartoon version that justifies anything that adds up. The greatest happiness, taken over the long run and over a species that grows and improves, is best served by freedom, not by managing people for their own good. The case for liberty is itself a case about consequences. The full defense of that move is the business of his other book, [*Utilitarianism*](/philosophy/work/utilitarianism); here he simply plants the flag and walks on."
        }
      ]
    },
    {
      "num": 2,
      "title": "Why even one dissenter must be heard",
      "epigraph": {
        "text": "\"If all mankind minus one, were of one opinion, and only one person were of the contrary opinion, mankind would be no more justified in silencing that one person, than he, if he had the power, would be justified in silencing mankind.\"",
        "attribution": "— J.S. Mill, *On Liberty*, ch. 2 (1859)"
      },
      "blocks": [
        {
          "p": "The second chapter is the most influential argument for free speech ever written, and its first move is its boldest claim. Mill does not start with the easy case of a persecuted truth. He starts with the hardest possible case for his own side: a single crank against the entire human race. \"If all mankind minus one, were of one opinion, and only one person were of the contrary opinion, mankind would be no more justified in silencing that one person, than he, if he had the power, would be justified in silencing mankind.\" The whole world is not allowed to gag one dissenter, and Mill spends the chapter explaining why, on four distinct grounds, each of which would hold even if the dissenter were certainly wrong."
        },
        {
          "p": "The first ground is the one people remember: the silenced opinion might be true. To assume it is false, and to forbid it on that basis, is to assume one's own infallibility, to act as if the present generation had a monopoly on truth that no future age could correct. History is a graveyard of certainties that turned out to be errors, persecuted in their day by people just as sure as anyone is now. Mill's point is not that the heretic is usually right. It is that the censor has no way of being sure he is wrong, because the only test of an opinion is to let it be contested, and silencing it removes the test. Suppressing a view does not refute it; it just hides the question of whether it could be refuted."
        },
        {
          "p": "The second ground covers the more common situation, where the orthodox opinion is mostly right and the heretic mostly wrong. Even then, Mill argues, the dissenting view very often contains a portion of truth that the prevailing view is missing, because the prevailing opinion on almost any subject is rarely the whole truth. The clash is how the missing piece gets supplied: \"it is only by the collision of adverse opinions, that the remainder of the truth has any chance of being supplied.\" A reformer who is wrong about ninety percent of his program may be right about the ten percent the establishment has overlooked, and only the argument he forces will bring it out."
        },
        {
          "p": "The third and fourth grounds are the ones Mill thought most neglected, and they bite even in the case where the received opinion is not just mostly true but wholly true. An unquestioned truth, he argues, decays. Held without ever being contested, it is believed \"in the manner of a prejudice, with little comprehension or feeling of its rational grounds,\" and worse, its very meaning drains away, the doctrine becoming \"a mere formal profession, inefficacious for good,\" a phrase recited from habit by people who could not say why it is true or even quite what it means. This is the famous distinction: a truth that is never challenged becomes \"a dead dogma, not a living truth.\" The collision with error is not a threat to truth. It is what keeps truth alive, the exercise that keeps a belief from going slack."
        },
        {
          "p": "From this comes the chapter's coolest and most demanding line, the one that turns the argument from a defense of dissent into a standard for knowing anything at all. \"He who knows only his own side of the case, knows little of that.\" Knowing the arguments for one's own position is not knowledge; it is half of knowledge, and the weaker half. One must know the strongest case against, well enough to feel its force, well enough that one could not refute it more powerfully oneself. A person who cannot do that, Mill says, has no real ground for their opinion even if the opinion is correct; the rational position for them would be to suspend judgment. The cost of censorship is not only that it might bury a truth. It is that it rots the truths it protects, leaving a population that holds the right views for no reason and could not defend them if pressed."
        },
        {
          "p": "Mill does not pretend speech has no limits, and the limit he draws shows exactly how the harm principle governs the case. An opinion that corn-dealers starve the poor, he writes, ought to pass unmolested when printed in a newspaper, but may justly be punished \"when delivered orally to an excited mob assembled before the house of a corn-dealer.\" The same words are protected as opinion and punishable as incitement, and the line between them is harm: the mob outside the door is about to do violence, and the speech has become the trigger of an act, not the expression of a view. Free discussion is near-absolute. What it does not cover is the word that is itself a blow."
        }
      ]
    },
    {
      "num": 3,
      "title": "Individuality, and the ape-like one of imitation",
      "epigraph": {
        "text": "\"He who lets the world, or his own portion of it, choose his plan of life for him, has no need of any other faculty than the ape-like one of imitation.\"",
        "attribution": "— J.S. Mill, *On Liberty*, ch. 3 (1859)"
      },
      "blocks": [
        {
          "p": "The third chapter extends the logic of free speech from opinions to lives. The same reasons that make it useful for there to be different opinions while mankind is imperfect make it useful for there to be \"different experiments of living,\" different modes of life tried out and proved in practice by anyone who thinks fit to try them. Freedom of thought is not just a right to hold private views. It earns its keep only when people are also free to act on them, to build a life around them and let the result be seen. Individuality, Mill argues, is not a luxury indulged at society's expense. It is, in the chapter's own title, one of the elements of well-being, a component of a good human life and a good society, not a threat to either."
        },
        {
          "p": "His argument for it is developmental, and it is about what a person becomes, not just what they get to do. A man who lets the world choose his plan of life for him \"has no need of any other faculty than the ape-like one of imitation.\" The man who chooses for himself, by contrast, \"employs all his faculties\": observation to see the options, reasoning to foresee where each leads, judgment to weigh them, decision to settle, and the firmness to hold to what he has decided. These are muscles, and they grow only with use. A life of conformity, however correct each conformist choice happens to be, leaves them slack. Choosing well is a skill, and a person kept from choosing never develops it, even if every choice is made for them rightly."
        },
        {
          "p": "The picture behind this is of a human being as something that grows rather than something that is built to spec. Mill has just quoted the Prussian thinker Wilhelm von Humboldt on the importance of individuality, and now writes the image that channels that thought: a person is not a machine assembled to a pattern but a tree, \"which requires to grow and develop itself on all sides, according to the tendency of the inward forces which make it a living thing.\" Those are Mill's own words, not Humboldt's, though the idea travels from Humboldt's treatise on the limits of state action. A custom that fits the people who made it may strangle a different nature, and a society that presses everyone into one shape, even a good shape, produces stunted growth. The point is not that eccentricity is good in itself. It is that the conditions which let an oak become a full oak are the same conditions that let a person become a full person, and uniformity is to character what a bonsai wire is to a tree."
        },
        {
          "p": "This is where Mill names the real enemy of his age, and it is not the censor or the policeman. It is the flattening pressure of public opinion in a commercial, democratic society, where the comfortable many set the tone and quietly punish anyone who deviates, not with prison but with disapproval, exclusion, the cold shoulder of a whole community. He calls eccentricity a service precisely because the pressure of opinion is so strong, and holds that the amount of eccentricity in a society tends to track the amount of genius, mental vigor, and moral courage it contains. The danger is a world of people so thoroughly trained to want what they are supposed to want that the very capacity for an individual desire withers, and no one even notices the loss because there is no one left who is different enough to show what was lost."
        }
      ]
    },
    {
      "num": 4,
      "title": "Where the line really falls",
      "epigraph": {
        "text": "\"The only part of the conduct of any one, for which he is amenable to society, is that which concerns others. In the part which merely concerns himself, his independence is, of right, absolute.\"",
        "attribution": "— J.S. Mill, *On Liberty*, ch. 1 (1859)"
      },
      "blocks": [
        {
          "p": "The fourth chapter faces the question every reader has been saving up: where exactly does the line fall, given that almost nothing a person does is truly sealed off from everyone else. Mill's tool is the distinction between self-regarding conduct, which affects only the person acting, or others only with their free consent, and other-regarding conduct, which affects the interests of people who did not agree to be affected. Society's authority runs over the second and stops at the first. A person who damages only themselves is answerable to advice, persuasion, and the natural consequence that others may think less of them and keep their distance, but not to punishment. Drunkenness, idleness, ingratitude, a wasted life: these may earn a person disfavor and lost friendships, the natural penalties of being disagreeable, but not the organized force of law or social punishment aimed at correcting them."
        },
        {
          "p": "The hard cases are where the distinction earns its keep, and Mill works them rather than ducking them. The standard objection is that no person is an island: a man who ruins himself with drink ruins his family, fails his creditors, sets a bad example, becomes a burden on the public. Does that not make his drinking everyone's business after all. Mill's answer is precise. Where the self-harm spills into a definite harm or a broken duty to specific others, the family he is obliged to support, the creditor he cannot now pay, the conduct crosses the line and becomes other-regarding, and society may act, not on the drinking, but on the broken obligation. A soldier or policeman drunk on duty may be punished for the dereliction. The drinking as such, the harm a man does to himself alone, stays inside the wall."
        },
        {
          "p": "Mill heads off the move that would swallow his whole principle, the claim that any self-harm hurts society by the bad example it sets and the general lowering of the moral tone. If that counted as harm to others, nothing would be left inside the private kingdom; every personal failing could be policed as a public injury. Mill refuses it. The supposed injury to society from a person merely living badly, harming only themselves, is one society can well afford to bear \"for the sake of the greater good of human freedom.\" The risk that some will misuse liberty to ruin themselves is the price of everyone else having it, and it is a price worth paying. A society that confiscates freedom to spare itself the spectacle of people choosing badly has made a bad bargain."
        },
        {
          "p": "Behind the line-drawing is Mill's hardest claim about who is the right judge. On matters that concern only themselves, the person is almost always the better judge of their own interest than any outsider, however well-meaning, because they alone feel the whole of it and bear the whole of the result. The interference of society in self-regarding conduct, he argues, is grounded on general presumptions about how people ought to live which are as likely to be wrong as right, and which are applied by people with no stake in the outcome and no access to the inner facts. The case for liberty is not that people never choose badly. It is that they choose badly less often, and learn more from it, than the strangers who would choose for them."
        }
      ]
    },
    {
      "num": 5,
      "title": "The applications, and the limits of paternalism",
      "epigraph": {
        "text": "\"Liberty consists in doing what one desires, and he does not desire to fall into the river.\"",
        "attribution": "— J.S. Mill, *On Liberty*, ch. 5 (1859)"
      },
      "blocks": [
        {
          "p": "The last chapter puts the principle to work on real cases, and the first thing it shows is where paternalism is allowed in, because the line is not where a careless reader expects. A man is walking toward a bridge that has been found unsafe, and there is no time to warn him. May a bystander seize him and turn him back. Mill says yes, and explains why it is no breach of liberty at all: \"liberty consists in doing what one desires, and he does not desire to fall into the river.\" The intervention serves the man's own will, not overrides it; he wants to cross, not to drown, and stopping him from a danger he does not know about is helping him do what he actually wants. Restraint that serves a person's own purpose is not coercion."
        },
        {
          "p": "But Mill draws the boundary tight, and the very next sentence is the heart of his anti-paternalism. Once the bystander has a moment to warn the man of the danger, the warning is all that is permitted. If, knowing the bridge is unsafe, the man still chooses to cross, the choice is his. \"When there is not a certainty, but only a danger of mischief, no one but the person himself can judge of the sufficiency of the motive which may prompt him to incur the risk.\" The bridge example is not a license for paternalism; it is a fence around it. Force is allowed only to buy the time for information, and only where the person plainly does not know or does not will the harm. Where they know the risk and accept it, the decision belongs to them, and the rest of the world is limited to warning."
        },
        {
          "p": "On trade, Mill applies the principle with a result that surprised his own allies. Free trade, he says, rests on different grounds from individual liberty, on the fact that restraints on commerce produce bad results, not on any right of the trader. So selling poisons, or dangerous goods, is not protected by the liberty principle, because the buyer of poison may harm a third party, and society may rightly require labels, registers, and warnings, the machinery that preserves the buyer's freedom to use a thing while guarding against its use to injure others. The test is always the same. The question is never whether the state dislikes the conduct. It is whether the conduct threatens harm to someone who has not consented, and the regulation is tailored to that risk and no further."
        },
        {
          "p": "The book's deepest tension surfaces in its treatment of acts that bind a person's own future freedom, and Mill follows his logic to a conclusion he plainly finds uncomfortable. He holds that a person should not be free to sell themselves into slavery, even voluntarily, because the principle of freedom cannot require that one be free not to be free; an act that abdicates liberty altogether defeats the very purpose, future self-determination, for which liberty is valued. The case marks the outer edge of the harm principle, where the harm in question is to one's own future capacity to choose. It is the point at which Mill's confidence that the individual is the best judge of their own interest meets the one decision that would surrender the right to make any further decisions, and he steps off his own road to forbid it."
        },
        {
          "p": "What *On Liberty* left to the world was a single sentence and a century of fights over it. The harm principle became the standard frame for nearly every argument about the limits of law: the decriminalization of conduct between consenting adults, the legal status of obscenity, drugs, suicide, and speech, the perennial quarrel over how much the state may do to people for their own good. Critics pressed hard on the seam Mill himself had worried, the elasticity of harm, since almost any act touches someone, and on the imperial caveat of his first chapter, which his admirers quietly drop. But the core held and spread, because it answered a question that would only grow more urgent as states grew more powerful and societies more uniform: not what the majority may want, but what it may impose. Mill credited the answer to Harriet Taylor, and gave it the plainest possible form. The line runs at harm to others, and on the inside of that line, over their own body and mind, every adult is sovereign."
        }
      ]
    }
  ]
}
