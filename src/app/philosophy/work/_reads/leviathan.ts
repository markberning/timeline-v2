// Opus AUTHOR draft of Hobbes's *Leviathan* WORK read (Step 2 of
// audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/leviathan-fact-ledger.md. This is the work-level deep
// read below the (data-only) HOBBES thinker entry; the five critic gates + the
// structural gates run against THIS file before it ships. PhiNarr shape is identical
// to nicomachean.ts / republic.ts; the reader at /philosophy/work/leviathan renders it.
//
// Quote doctrine: every quoted line is verbatim from Project Gutenberg #3207, the
// 1651 English text in original spelling ("poore", "Mortall God", "warre",
// "Common-wealth"). The Latin "bellum omnium contra omnes" / "war of all against all"
// is a LATER gloss and never appears inside quotation marks as Hobbes's Leviathan
// English; the prose flags it as a gloss. Paraphrase-only items (the restless desire
// for power, the four causes of quarrel, the structure of Parts III and IV) never
// appear inside quotation marks. No em-dashes in narration (only inside verified
// quotes and the epigraph "— Author" attributions).

import type { PhiNarr } from '@/components/philosophy-reader'

export const LEVIATHAN: PhiNarr = {
  "title": "Hobbes's Leviathan",
  "throughline": "One argument runs the length of the book, built like a proof. Start from what a human being is: a body in motion, driven by appetite, with no final resting good to aim at, only the next desire and the one after that. Put many such creatures together with no power above them, and the result is not society but war, the condition where life is \"solitary, poore, nasty, brutish, and short.\" The way out is a single move, made by everyone at once: each person lays down the right to govern himself and authorizes one sovereign to do it for all of them. That sovereign, the great Leviathan, is the price of peace, and the price is high. Its power must be absolute and undivided, because \"Covenants, without the Sword, are but Words.\" Hobbes published it in 1651, the year a civil war that had killed a large share of the population finally ended, and the whole book is an answer to the thing he feared most: the collapse of order.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Leviathan_frontispiece.jpg",
    "cap": "The frontispiece engraving by Abraham Bosse, 1651. A crowned giant rises over a town and its fields, holding a sword in one hand and a bishop's crozier in the other. His body is made of hundreds of tiny people, all facing inward toward his head. The image is the argument in one picture: the commonwealth is a single artificial person, the sovereign, composed of the many who authorize him and look to him for protection.",
    "alt": "A 1651 engraving of a crowned giant whose torso and arms are composed of many small human figures, holding a sword and a crozier above a landscape with a town",
    "portrait": true
  },
  "hook": [
    "*Leviathan* is the most forbidding book in English political philosophy and also one of the clearest, because Hobbes built it like a chain of reasoning where each link is bolted to the one before. He begins not with kings or laws but with sense and motion, what a human being even is, and he does not let the reader reach the famous conclusions about absolute power until the human nature that forces those conclusions is on the table. The argument is single and relentless: this is what people are, this is what happens when they are left alone together, and this is the only thing that stops it. Almost everything quotable in the book (the state of nature, \"nasty, brutish, and short,\" the covenant, the \"Mortall God,\" the sword behind the words) is a step in that one proof, not a detachable slogan.",
    "The title is a name, and a loaded one. Leviathan is the great sea-monster of the Book of Job, the creature so powerful that no man can master it. Hobbes takes it for the commonwealth, the artificial giant that men build over themselves and then cannot resist, because they have made it stronger than any of them. The full title spells out the scope: *Leviathan, or The Matter, Forme and Power of a Common-Wealth Ecclesiasticall and Civil*. \"Common-wealth\" is Hobbes's word for the organized state, the body politic; \"ecclesiasticall and civil\" signals that he means to settle the church under the state as much as the state itself, which is what the book's second half is about.",
    "It was published in 1651, and the date is the argument's pressure. England had been through nearly a decade of civil war (1642 to 1651) that pulled apart king, Parliament, and church and killed an enormous share of the population. [Hobbes](/philosophy/thinker/hobbes) spent much of it in exile in Paris, for a time tutoring the young man who would become Charles II, and he wrote *Leviathan* watching the order of a whole country dissolve. The book survives in original 1651 spelling, so quotations preserve \"poore\" and \"warre\" and \"Mortall God.\" Hobbes wrote elegant Latin and English both, and he wrote this one to be unanswerable: a demonstration, from the ground up, of why men must obey one undivided power or fall back into the war he had just watched happen."
  ],
  "brk": {
    "beforeLabel": "Authority comes from above, from God or nature or a sacred order, and binds men whether they consent or not",
    "afterLabel": "Authority is built from below, by men who consent, for one reason only: it is the price of peace",
    "paragraphs": [
      "Before Hobbes, the standard accounts of why men must obey their rulers came from above. Kings ruled by divine right, their authority descending from God. Or political order was natural and given, the way Aristotle had said man is by nature a political animal and the city exists by nature, so that to be ruled well is simply to live according to one's nature. Or the church held a spiritual authority that stood beside, and sometimes over, the civil power, so that a man owed obedience to two masters at once. In every version, authority came down to men from a source higher than their own will, and bound them whether they had agreed to it or not.",
      "Hobbes turns the whole thing upside down and builds it from the bottom. He starts from individuals, each one a self-moving engine of appetite, equal enough to the next that the weakest can kill the strongest, with no natural ruler over any of them and no final good they all aim at. From that starting point there is no authority anywhere. So authority has to be *made*. It is manufactured by the only people who could make it, the individuals themselves, when each lays down his natural right to do as he pleases and hands it to a common power, on condition that everyone else does the same. The state is not natural and not divine in its origin. It is an artifact, an \"artificiall man\" assembled by agreement, and the frontispiece draws it exactly so: a giant made of the people who built him.",
      "The concrete move is this. Authority stops being something that flows down to men from God or nature and becomes something men construct, for a reason any of them can check: it is the alternative to war. Obedience is no longer owed because the ruler is sacred or because nature ordained him; it is owed because, and only as long as, the ruler delivers the protection that was the entire point of building him. \"The end of Obedience is Protection,\" Hobbes writes. That single inversion, authority from consent rather than from above, justified by security rather than by sanctity, is what makes *Leviathan* the foundation of modern political thought, and it is why later thinkers who hated his absolute sovereign (Locke, Rousseau) still argued on his ground, with his tool: the contract."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "Part I, Of Man: a machine made of appetite",
      "epigraph": {
        "text": "\"For WARRE, consisteth not in Battell onely, or the act of fighting; but in a tract of time, wherein the Will to contend by Battell is sufficiently known.\"",
        "attribution": "— Hobbes, *Leviathan*, Part I, ch. 13"
      },
      "blocks": [
        {
          "p": "Hobbes refuses to start with politics. The first part of *Leviathan*, \"Of Man,\" begins with the human being taken apart, because every claim about the state will rest on a claim about the creatures who make it. And his picture of the creature is mechanical. A human being is a body, and everything that happens in it is *motion*. Sensation is motion: an outside object presses on the eye or the ear, and the pressure becomes an internal motion that we experience as a sight or a sound. Imagination is \"decaying sense,\" the leftover motion of a sensation after the object is gone. There is no immaterial soul doing the perceiving in Hobbes's account; there is matter in motion, all the way down."
        },
        {
          "p": "Reason gets the same deflating treatment. For Hobbes, reasoning is not the soul contemplating eternal truths. It is *reckoning*, the adding and subtracting of names, the same operation as arithmetic done with words instead of numbers. We attach names to things, then add and subtract those names to draw conclusions, and truth is just the right joining of names in a sentence. This matters for the politics to come, because it means there is no fixed, mind-independent table of goods written into the universe for reason to read off. Good and evil, for Hobbes, are not properties out in the world. \"Good\" is just whatever a person desires; \"evil\" is whatever he hates. The words name the appetite, not a quality of the thing."
        },
        {
          "p": "From the inside, then, a person is a stream of appetites and aversions, desire reaching for one object, recoiling from another, and Hobbes makes a claim here that quietly overturns the entire older tradition of ethics. There is no *summum bonum*, no greatest good or final end at which all human striving aims. Aristotle had built a whole ethics on the idea that there is such a final good (flourishing) and that a life is the climb toward it. Hobbes denies it. There is no resting place, no goal that ends desire, because desire that has reached its object simply moves to the next one. Life is a continual motion of wanting, and the only thing that ends it is death. He sums up human striving as a perpetual and restless desire for power after power, ceasing only in death: not because men are greedy, but because securing what a man wants today requires the means to secure it tomorrow, and the means is power."
        },
        {
          "p": "Now place several of these creatures together with no authority above them, in what Hobbes calls the *state of nature* (the condition of human beings before, or without, any common power to keep order). Three facts about them make the result inevitable. First, they are roughly *equal*: bodies and minds differ, but not so much that any man is safe, since the weakest can kill the strongest by stealth or by joining with others. Second, they want the same scarce things, and cannot all have them. Third, with no judge above them, each is the sole judge of what he needs and of how to get it. Hobbes draws out three drivers of conflict from this: competition (men fight for gain), diffidence (they strike first out of fear, since trusting is dangerous), and glory (they fight over reputation, a word, a sign of undervaluing). The reasonable thing for each individual to do, given the others, is to strike before being struck."
        },
        {
          "p": "The result is his most famous claim, stated in his exact English: \"Hereby it is manifest, that during the time men live without a common Power to keep them all in awe, they are in that condition which is called Warre; and such a warre, as is of every man, against every man.\" The phrase usually hung on this idea, *bellum omnium contra omnes*, \"the war of all against all,\" is a later Latin gloss and a translator's catchphrase; it is not Hobbes's English in *Leviathan*. His English is \"every man, against every man.\" And he is careful about what \"war\" means: not constant fighting but the standing readiness to fight when nothing assures a man the other will not. \"For WARRE, consisteth not in Battell onely, or the act of fighting; but in a tract of time, wherein the Will to contend by Battell is sufficiently known,\" the way foul weather is not one shower but a settled inclination to rain. \"All other time is PEACE,\" and in the state of nature there is none."
        },
        {
          "p": "The cost of that condition is the line everyone remembers, and Hobbes earns it with a catalogue. With no security, he writes, there is no point in industry, since no one can keep what he makes; so no farming, no shipping, no building, no knowledge, no arts, no letters, no society, \"and which is worst of all, continuall feare, and danger of violent death; And the life of man, solitary, poore, nasty, brutish, and short.\" The 1651 spelling \"poore\" is his. The sentence is not a cynic's grumble about human nature; it is the conclusion of an argument about what rational, self-interested, roughly equal people *must* do when no power stands over them. The point of the rest of the book is to build that power."
        }
      ]
    },
    {
      "num": 2,
      "title": "The laws of nature, and the way out",
      "epigraph": {
        "text": "\"And Covenants, without the Sword, are but Words, and of no strength to secure a man at all.\"",
        "attribution": "— Hobbes, *Leviathan*, Part II, ch. 17"
      },
      "blocks": [
        {
          "p": "The state of nature is intolerable, and Hobbes thinks people can see that it is, because the same reason that drives them to war also shows them the door out. He calls the rules that reason discovers the *laws of nature* (general precepts, found by reasoning, about what tends to a man's preservation). The first and most basic is to seek peace where it can be had, and to defend oneself by all means where it cannot. The second follows: be willing, when others are too, to lay down the natural right to all things and be content with as much liberty against others as one would allow them against oneself. That is the seed of every contract: each party gives up the unlimited right on condition that the other does the same."
        },
        {
          "p": "But Hobbes draws a sharp line first, around a word the whole book hinges on: *right* versus *law*. In the state of nature each person has a \"right of nature,\" the liberty to use his own power however he wishes for his own preservation, including a right to all things, even to another's body. A right is a liberty, a permission. A law is an obligation, something that *binds*. The laws of nature tell a man what he ought to do to survive, but they bind only in conscience, not in act, when others cannot be trusted to keep them. A man who lays down his weapons among men who keep theirs has not made peace; he has made himself prey. So the laws of nature, by themselves, do not get anyone out of the war. They are valid, and they are useless without something more."
        },
        {
          "p": "That something is the hinge of the entire book, and Hobbes states it flatly. The laws of nature, justice and equity and mercy and the rest, run against the passions that pull men toward partiality and pride and revenge, and so without an enforcing power they will not be kept. \"And Covenants, without the Sword, are but Words, and of no strength to secure a man at all.\" A *covenant* is a mutual promise, the kind of agreement that builds a society, and Hobbes's grim insight is that a promise alone secures nothing. If two men in the state of nature agree to disarm, the one who disarms first is a fool, because nothing forces the other to keep his word, and his interest may be to break it. Agreements hold only when breaking them is more dangerous than keeping them, which requires a power that can punish."
        },
        {
          "p": "This is why the way out cannot be a gentle one. It is not enough for people to recognize the laws of nature, agree to be peaceful, and shake hands. The whole problem is that agreements do not bind without a sword behind them. So the move that ends the war must do two things at once: it must be an agreement, and it must create the sword that makes the agreement stick. That double move is the covenant that builds the commonwealth, and it is the subject of Part II. The argument has now assembled everything the next step requires: creatures of appetite, an intolerable war, rules of peace that reason can see but cannot enforce, and the verdict that words without a sword are nothing."
        }
      ]
    },
    {
      "num": 3,
      "title": "Part II, Of Common-wealth: the covenant that builds the Mortall God",
      "epigraph": {
        "text": "\"This is the Generation of that great LEVIATHAN, or rather (to speake more reverently) of that Mortall God, to which wee owe under the Immortall God, our peace and defence.\"",
        "attribution": "— Hobbes, *Leviathan*, Part II, ch. 17"
      },
      "blocks": [
        {
          "p": "Part II, \"Of Common-wealth,\" makes the move the whole book has been building toward. Since covenants need a sword, the people must, by one covenant, create the sword. They do it by transferring their natural right of self-government, all of them at once, to a single power that will hold it for all. The transfer is not a contract *between* the people and the ruler, which is important: the ruler is not a party who could be held to terms. It is a contract of each person with every other person, in which each authorizes the same sovereign. Hobbes gives the exact wording each man is to say to every other man: \"I Authorise and give up my Right of Governing my selfe, to this Man, or to this Assembly of men, on this condition, that thou give up thy Right to him, and Authorise all his Actions in like manner.\""
        },
        {
          "p": "The structure of that sentence carries everything that follows. Each person authorizes the sovereign, which means the sovereign's acts count as the person's own acts; the subject is the author, the sovereign is the actor carrying out what the subjects have authorized. And the condition attached is not a demand on the sovereign; it is a demand on every *other* subject (\"that thou give up thy Right\"). So no subject can later complain that the sovereign has broken faith, because the sovereign made no promise; the subjects made promises, to one another. This is what lets Hobbes call the result one will out of many. The multitude, so united in one person, becomes a *commonwealth*, in Latin a *civitas*, a single artificial person whose will is the sovereign's will."
        },
        {
          "p": "And here the title arrives. \"This is the Generation of that great LEVIATHAN, or rather (to speake more reverently) of that Mortall God, to which wee owe under the Immortall God, our peace and defence.\" The sovereign is the Leviathan, the artificial giant of the frontispiece, and Hobbes calls it a *Mortall God*: god-like in the awe and power it holds over men, but mortal, because it is made by men and can die when it fails. It is owed reverence \"under the Immortall God,\" which already signals the argument of Part III, that there is no rival authority, spiritual or otherwise, above the sovereign within his dominion. The power the subjects have conferred is what lets the sovereign, by the terror of it, shape all their wills toward peace at home and common defense against enemies abroad."
        },
        {
          "p": "From this generation Hobbes derives the rights of the sovereign, and they are sweeping. The sovereign's power must be *absolute*: it makes the laws, judges all disputes, decides war and peace, controls what doctrines may be taught, and is itself above the law, since the law is its own command. It must also be *undivided*. This is Hobbes's direct lesson from the civil war he had watched. A sovereignty split among king, lords, and commons, or shared between a crown and a church, is not a weaker sovereignty but no sovereignty at all, because the moment the parts disagree there is no final judge, and the absence of a final judge is exactly the state of nature returning. A divided power is a country with two swords, which is a country at war with itself. So the sovereign's authority cannot be carved up or limited without dissolving the very thing that ended the war."
        },
        {
          "p": "The single limit Hobbes does allow shows what the whole apparatus is *for*. A subject's obligation to obey lasts exactly as long as the sovereign can protect him, because protection was the entire reason men built the sovereign in the first place. \"The end of Obedience is Protection.\" A man cannot be required to lay down his own life on command, since self-preservation was the point of the covenant, and a sovereign who can no longer defend his subjects has lost their obedience along with his power to compel it. This is the one thread by which Hobbes's absolute sovereign hangs from the consent that made him. He is owed everything, but for one purpose, and a Leviathan that cannot keep the peace is no longer a Leviathan."
        }
      ]
    },
    {
      "num": 4,
      "title": "Part III, Of a Christian Common-wealth: one sword, not two",
      "epigraph": {
        "text": "\"…of that Mortall God, to which wee owe under the Immortall God, our peace and defence.\"",
        "attribution": "— Hobbes, *Leviathan*, Part II, ch. 17"
      },
      "blocks": [
        {
          "p": "More than a third of *Leviathan* is given to religion, which surprises readers who come for the political theory and find Hobbes deep in Scripture. The reason is structural, not pious. His whole argument requires one undivided sovereign, and in 17th-century Europe the single greatest rival to the civil power was the church, which claimed a spiritual authority that could command consciences, excommunicate kings, and call subjects to obey God rather than the magistrate. A sovereign who shares power with a church has a divided sword, which by Hobbes's own argument is the state of nature waiting to return. So Part III, \"Of a Christian Common-wealth,\" sets out to fold the church entirely under the state."
        },
        {
          "p": "Hobbes does it by fighting on the church's own ground, Scripture, rather than around it. He argues at length, text by text, that the Bible gives no independent earthly authority that can stand against the civil sovereign. Prophecy has ceased; miracles have ceased; no living priest or pope speaks with an authority that binds a subject against his sovereign's law. The interpretation of Scripture in any commonwealth belongs to the sovereign, because if private men or a separate clergy could each decide what God commands, every conscience would become its own judge, which is precisely the condition of war Part I described, now dressed in religious language. The sovereign, in his own dominion, is the head of the church as much as of the state."
        },
        {
          "p": "The phrase from the covenant carries the point: the Leviathan is the Mortall God owed reverence \"under the Immortall God.\" Hobbes is not setting the state above God; he is denying that any *human* institution stands between the subject and the sovereign in God's name. God's kingdom, in Hobbes's reading, is not a present spiritual government run by clergy but a thing of the future, to be established by Christ at the end of days. Until then, there is one earthly authority, and obedience to it is not disobedience to God, because God himself, in Hobbes's account, commands men to keep their covenants and obey the powers that protect them."
        },
        {
          "p": "This was the most dangerous part of the book in its own time, and the source of the charges of atheism and heresy that followed Hobbes for the rest of his life. Those charges are accusations, not verdicts. *Leviathan* is full of Scripture and speaks throughout of the Immortall God; Hobbes never declares himself an atheist, and whether he was one is contested to this day. What is plain on the page is the anti-clericalism: a sustained argument that the clergy, as a power separate from the sovereign, is illegitimate. That argument made enemies of nearly every church, and it sets up the book's final and angriest part."
        }
      ]
    },
    {
      "num": 5,
      "title": "Part IV, Of the Kingdome of Darknesse: the war on superstition",
      "epigraph": {
        "text": "\"…that great LEVIATHAN, or rather (to speake more reverently) of that Mortall God.\"",
        "attribution": "— Hobbes, *Leviathan*, Part II, ch. 17"
      },
      "blocks": [
        {
          "p": "The last part of *Leviathan* drops the careful tone of a proof and becomes a polemic. Hobbes calls it \"Of the Kingdome of Darknesse,\" and by it he means not hell but a confederacy here on earth: the company of men who keep others in error and ignorance in order to gain power over them. If the Mortall God is the rightful power that holds a commonwealth together, the Kingdom of Darkness is its shadow, the false authority that lives by deceiving the very subjects the sovereign exists to protect. The target is the same as in Part III, sharpened to an attack: clergy and schoolmen who, in Hobbes's account, dim men's minds with doctrines that serve their own dominion."
        },
        {
          "p": "He names the instruments of the darkness. The first is the misreading of Scripture to claim powers the text does not give, turning the Bible into a warrant for priestly rule. The second is what he calls *daemonology*, the pagan and superstitious belief in spirits, ghosts, and a populated realm of incorporeal beings, smuggled into Christianity and used to frighten men into obedience to those who claim to manage that realm. The third, and the one Hobbes savages most, is \"vain philosophy,\" by which he means the scholastic Aristotelianism taught in the universities (the abstractions of essences and incorporeal substances, language he regards as literally meaningless, words joined to no clear ideas), prized because its very obscurity props up the authority of those who deal in it."
        },
        {
          "p": "Behind the attack is the materialism of Part I. If everything that exists is body in motion, then talk of incorporeal substances and separated spirits is not deep theology but confusion, names strung together with nothing behind them, and confusion is what lets a separate clergy claim a knowledge ordinary subjects cannot check. Hobbes's accusation is that the darkness is not innocent error but error cultivated for power: keep men afraid of invisible things and uncertain about plain words, and they will look for guidance to those who trade in fear and obscurity, rather than to the sovereign who actually protects them."
        },
        {
          "p": "So the book ends where it began, on the conditions of peace. The argument of *Leviathan* is that men escape the war of every man against every man only by erecting one undivided power and owing it their obedience in exchange for protection; and the Kingdom of Darkness is everything that pulls against that, every rival authority that divides the sword and clouds the judgment the sovereign needs subjects to keep clear. Hobbes wrote it in the wreckage of a civil war he traced, in part, to exactly such divided authority and clerical politics. The frontispiece holds both halves of his answer in the giant's two hands: the sword of the civil power and the crozier of the church, gathered into one figure, because for Hobbes there can finally be only one."
        }
      ]
    },
    {
      "num": 6,
      "title": "What Leviathan changed",
      "epigraph": {
        "text": "\"And the life of man, solitary, poore, nasty, brutish, and short.\"",
        "attribution": "— Hobbes, *Leviathan*, Part I, ch. 13"
      },
      "blocks": [
        {
          "p": "The conclusion Hobbes reaches, an absolute and undivided sovereign, is one almost no later thinker accepted, and that is exactly why the book matters so much. What survived and reshaped political philosophy was not the answer but the *method*: build the state from individuals, derive its authority from their consent, and justify obedience by what the state delivers rather than by anything sacred about the ruler. Every later social-contract thinker took up that tool, then turned it against Hobbes's own conclusion. Locke accepted the state of nature and the contract but argued that men keep natural rights the sovereign may not touch, and may resist a ruler who violates them. Rousseau accepted the contract but located sovereignty in the people themselves rather than in a single master. They argued on Hobbes's ground because he had drawn the map."
        },
        {
          "p": "Hobbes is read as the cynic who believed men are wicked, or as the prophet of totalitarian power, and neither is what the book says. He does not claim men are evil by nature; he claims that rational, self-interested people, roughly equal and short of a common power, are driven into war by the structure of their situation, by competition and fear and the absence of any judge, not by malice. His absolute sovereign is argued from a logic of peace and self-preservation in the wreckage of a specific civil war, not from any love of tyranny; the sovereign exists for the subjects' protection and loses its claim the moment it cannot protect them. To read *Leviathan* as a hymn to the total state is to read 17th-century absolutism through 20th-century eyes."
        },
        {
          "p": "The deepest thing the book did was relocate the question of political authority. Before Hobbes the central question was *who* should rule, and the answer came from above: the rightful king, the natural aristocracy, the divinely ordered church. Hobbes replaced it with a different question: *why* should anyone obey at all, and his answer came from below, from the needs of the individuals doing the obeying. Once authority has to justify itself to the people it governs, by reference to what it does for them, the modern argument has begun, and it is the argument we have been having ever since. That a thinker who wanted to silence all dissent with one undivided sword should have founded the tradition that subjects every power to the test of consent is the lasting paradox of *Leviathan*."
        }
      ]
    }
  ]
}
