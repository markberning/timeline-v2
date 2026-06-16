// Opus AUTHOR draft of Marx & Engels' *The Communist Manifesto* (1848) WORK read
// (Step 2 of audits/philosophy-content-pipeline.md, kind = WORK). Written from the
// nineteenth-century fact pack + author-time verification against the Samuel Moore
// 1888 public-domain English translation hosted on Marxists.org (the brief's named PD
// text). PhiNarr shape is identical to liberty-work.ts / cpr-work.ts; the reader at
// /philosophy/work/manifesto renders it. This WORK read goes INTO the pamphlet (why it
// was commissioned -> the argument walked section by section -> the close -> the honest
// gap between the document and what was later done in its name) and does NOT restate the
// Marx thinker page.
//
// Quote doctrine: every quoted line is verbatim from the Samuel Moore 1888 translation
// (approved and annotated by Engels — the standard English edition), string-matched at
// authoring time against Marxists.org ch01/ch02/ch04 and cited by section. The 1888
// edition's spellings ("revolutionising", "labour", "Tsar") are preserved inside quotes.
// The famous close is quoted as Moore's edition renders it: "Working Men of All
// Countries, Unite!" Marx is held at PHILOSOPHY altitude (history as class struggle,
// the awed account of the bourgeoisie, the contradiction-bearing system); twentieth-
// century state communism is named as what was DONE in the pamphlet's name, never read
// back into the 1848 text. Engels' co-authorship is framed honestly: the final
// manuscript was Marx's hand, on Engels' "Principles of Communism" draft, both credited.

import type { PhiNarr } from '@/components/philosophy-reader'

export const MANIFESTO: PhiNarr = {
  "title": "The Communist Manifesto",
  "throughline": "A thirty-page pamphlet, written on a deadline for a small workers' society, that turned out to be one of the most consequential political documents ever printed. Its argument is that all of history has been a struggle between classes, that the modern world was built by a class called the bourgeoisie whose achievement the pamphlet describes with open astonishment, and that this same class, by its own logic, manufactures the class that will end it. The reasoning is not a wish but a claim about a mechanism. The voice swings from the awed (the bourgeoisie has accomplished wonders surpassing the pyramids) to the prophetic (all that is solid melts into air) to the famous call that closes it. Marx wrote the final text; the project was Engels' as much as his; and the gap between what these two young men argued in 1848 and what was later built in their name is part of the document's story, not a footnote to it.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/8/86/Communist-manifesto.png",
    "cap": "The cover of the first edition, *Manifest der kommunistischen Partei*, printed in London in late February 1848 in a dark-green wrapper. It appeared anonymously, commissioned by the Communist League. The standard English text, by Samuel Moore and approved by Engels, did not appear until 1888.",
    "alt": "The green title page of the 1848 first German edition of the Communist Manifesto",
    "portrait": true
  },
  "hook": [
    "In the last weeks of 1847 a small organization of émigré workers and radicals, the Communist League, met in London and gave two of its members a commission: write down, plainly, what the League stood for. The two were [Karl Marx](/philosophy/thinker/marx), then twenty-nine, and Friedrich Engels, twenty-seven. Engels had already drafted a version in the old form of a catechism, a list of questions and answers (\"What is Communism?\"), and he wrote to Marx that the form was poor and they should drop it. They did. What Marx produced instead, working against the League's deadline and his own habit of lateness, was not a creed but a history of the world compressed into a few thousand words, ending in a call to action.",
    "It opens with one of the most quoted sentences in any language. \"A spectre is haunting Europe — the spectre of communism.\" The image is precise and a little mocking: communism in 1848 was not a power but a rumor, a thing the established order spoke of in fear without quite being able to point to it, and the pamphlet's first move is to make the spectre take a body and speak for itself. \"All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.\" The point of the document, it announces, is to stop being a ghost story told by frightened rulers and to state openly what it is.",
    "The argument underneath the rhetoric is a theory of history, and it is the engine of everything else. \"The history of all hitherto existing society is the history of class struggles.\" Not the history of kings, or ideas, or nations, but of the conflict between the group that produces and the group that owns: freeman and slave, lord and serf, and now, in the modern age, two great camps drawn up against each other, the bourgeoisie (the class that owns the factories, the capital, the means of production) and the proletariat (the class that owns nothing but its labor and must sell it to live). History moves, on this account, by the friction between such classes, and the modern struggle is only the latest and, the pamphlet claims, the last.",
    "What gives the document its strange power is that it is not a simple denunciation. Its long central passage is an account of what the bourgeoisie has built, and that account is full of genuine wonder, the part later quotation tends to forget. Before Marx and Engels condemn the system, they marvel at it, and the marvel is essential to the argument: the class they want to see fall is, in their telling, the most dynamic and creative force history has ever produced, and it is precisely its restless creative power that drives it toward its own end. The pamphlet is a story about a system that succeeds itself to death."
  ],
  "brk": {
    "beforeLabel": "Socialism is a moral appeal: the poor suffer, the rich are unjust, and decent people should be moved to reform",
    "afterLabel": "Capitalism is a historical system that, by its own internal logic, produces the class and the crises that will end it",
    "paragraphs": [
      "The socialism of the 1840s was mostly a literature of sympathy and blueprint. Reformers described the misery of the new factory towns, indicted the selfishness of the owners, and drew up plans for better communities, model villages, cooperative workshops, ideal towns to be founded by the goodwill of enlightened men. It worked on the conscience. It asked the reader to feel the wrong and to choose the right. The Manifesto's third section runs through these schools, the Saint-Simonians, the Fourierists, the Owenites, with a mixture of respect and dismissal, calling them utopian because they expected the new world to arrive by persuasion and example rather than by the actual movement of history.",
      "The break is to stop appealing to anyone's conscience and to describe a mechanism instead. The pamphlet does not argue that capitalism ought to end because it is cruel, though it holds that it is. It argues that capitalism will end because of how it is built. The bourgeoisie cannot stand still: competition forces every owner to revolutionize production constantly or be ruined, which heaps up ever larger factories, ever more workers concentrated in cities, ever more violent crises of overproduction. In doing all this to survive, the bourgeoisie assembles, trains, and organizes the very mass of people whose interest is to overturn it. The class does not fall because it is wicked. It falls because its own conditions of life produce its successor.",
      "That move changes what the document is for. A moral appeal can be ignored by anyone who feels no guilt; a claimed law of history cannot be argued out of existence by good behavior. \"What the bourgeoisie therefore produces, above all, are its own grave-diggers. Its fall and the victory of the proletariat are equally inevitable.\" Whether the claim is true is the question the next century and a half would test to destruction. But its form is what set the pamphlet apart from every reform tract beside it: not a plea for sympathy, but a forecast presented as a deduction, with the present order cast as the author of its own end."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "A commission and a deadline",
      "epigraph": {
        "text": "\"A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.\"",
        "attribution": "— Marx & Engels, *The Communist Manifesto*, preamble (1848), trans. Samuel Moore (1888)"
      },
      "blocks": [
        {
          "p": "The document had a client. The Communist League was a small international society of mostly German artisans and exiles, recently renamed from an older group called the League of the Just, whose motto had been \"All men are brothers.\" At its second congress in London, from late November into December 1847, the League resolved to issue a public statement of its aims, and it handed the job to [Marx](/philosophy/thinker/marx) and Engels, the two members who had pushed hardest to give the organization a hard, secular, class-based program in place of the older brotherhood-of-man sentiment. The Manifesto is, among other things, the founding charter of a particular faction's victory inside a tiny political body almost no one had heard of."
        },
        {
          "p": "Engels had a draft in hand and did not like it. He had written a piece called *Principles of Communism* in the form then standard for political creeds, a catechism of twenty-five questions with answers, \"What is the proletariat?\" and the like. He wrote to Marx in late 1847 suggesting they abandon the question-and-answer scaffolding and write a proper manifesto, because the catechism form could not carry history. Marx took the substance of Engels' draft and recast it entirely. The final manuscript was in Marx's hand and Marx's voice, the rolling, ironic, hammered prose that the catechism could never have produced, built on the shared work and the shared analysis the two had developed together since 1844. Both names belong on it, and the partnership is real; the sentences are Marx's."
        },
        {
          "p": "He was late. The League, having waited, sent word in late January 1848 that if the manuscript did not arrive promptly, measures would be taken against him. It arrived. The pamphlet was printed in London in the last days of February 1848, anonymously, a small German-language booklet of some thirty pages in a dark-green wrapper, under the title *Manifest der kommunistischen Partei*. Its timing was an accident that looked like prophecy: within days, revolution broke out in Paris and then across the German states and the Austrian Empire, the great wave of 1848. The pamphlet that announced a spectre haunting Europe appeared in the same week that Europe caught fire, though almost no one in the streets had read it or ever would."
        },
        {
          "p": "Its reach in its own moment was nearly nothing. The 1848 revolutions were crushed within a year or two, the Communist League dissolved soon after, and the Manifesto sank into obscurity for two decades, out of print, untranslated into most languages, a curiosity of a failed year. Its career as a world document began later, in the 1870s and after, when the rise of socialist parties and the trial of communists in Germany pulled it back into print, and it was only in 1888, forty years on, that the English version that became standard appeared, translated by Marx's friend Samuel Moore and approved and annotated by Engels, by then the surviving author. The text walked here is that one, the Moore edition, the form in which the English-speaking world has read it ever since."
        }
      ]
    },
    {
      "num": 2,
      "title": "Bourgeois and proletarians: the awe",
      "epigraph": {
        "text": "\"The bourgeoisie, historically, has played a most revolutionary part.\"",
        "attribution": "— Marx & Engels, *The Communist Manifesto*, sect. I (1848), trans. Samuel Moore (1888)"
      },
      "blocks": [
        {
          "p": "Section I, titled \"Bourgeois and Proletarians,\" opens with the line that frames the whole pamphlet as history rather than complaint: \"The history of all hitherto existing society is the history of class struggles.\" Engels added a careful note to the 1888 edition narrowing it to all written history, since the prehistory of human society was, as he put it, all but unknown in 1847. The list of antagonists is a sweep through the past: \"Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed.\" The modern epoch has not abolished this. It has simplified it, splitting society more and more into two hostile camps directly facing each other, the bourgeoisie and the proletariat."
        },
        {
          "p": "Then comes the surprise. Having set up the bourgeoisie as the enemy, the pamphlet spends pages praising it, and the praise is not ironic. \"The bourgeoisie, historically, has played a most revolutionary part.\" It has torn apart the old feudal world, with its fixed ranks and its web of personal duties binding man to his lord, and it has \"left remaining no other nexus between man and man than naked self-interest, than callous 'cash payment'.\" It has \"drowned the most heavenly ecstasies of religious fervour, of chivalrous enthusiasm, of philistine sentimentalism, in the icy water of egotistical calculation.\" Everything that the old world held sacred, rank, honor, the priest, the knight, the trade reduced to exchange value. The pamphlet does not mourn this as loss. It records it as a demolition of breathtaking thoroughness, performed by a class that recognized no holiness it could not price."
        },
        {
          "p": "What the bourgeoisie built in place of the old world is described with a wonder that borders on the religious. It has created productive forces greater than all previous generations together; it has built cities, conquered nature, run railways and ocean lines and telegraphs across the planet, drawn every nation into a single world market, made the countryside dependent on the towns and the East on the West. \"It has accomplished wonders far surpassing Egyptian pyramids, Roman aqueducts, and Gothic cathedrals,\" the pamphlet says, comparing the bourgeoisie's works to the monuments humanity had always pointed to as its peaks. The man who wanted this class overthrown thought it had done more to transform the earth than any power that ever lived, and he said so without hedging."
        },
        {
          "p": "The engine of all this, and the heart of the analysis, is that the bourgeoisie can never stop. Unlike every earlier ruling class, which throve on keeping things as they were, this one survives only by perpetual upheaval. \"Constant revolutionising of production, uninterrupted disturbance of all social conditions, everlasting uncertainty and agitation distinguish the bourgeois epoch from all earlier ones.\" Competition forces every owner to remake his methods or be undersold and destroyed, so the whole society is dragged into a permanent churn. From this comes the pamphlet's most famous prophecy, a description of modern life that readers a century later found uncannily exact. \"All fixed, fast-frozen relations, with their train of ancient and venerable prejudices and opinions, are swept away, all new-formed ones become antiquated before they can ossify. All that is solid melts into air, all that is holy is profaned, and man is at last compelled to face with sober senses his real conditions of life, and his relations with his kind.\""
        },
        {
          "p": "And the same engine, the pamphlet argues, drives the system toward the wall. The drive to expand produces crises unlike any before, crises not of scarcity but of plenty, of overproduction, in which there is too much industry, too much commerce, too much wealth, and the system convulses because it has made more than it can sell. To survive each crisis the bourgeoisie destroys what it has built and conquers new markets, which only sets up a larger crisis later. Meanwhile the same process forges the proletariat: it herds workers into factories and cities, drills them into disciplined masses, strips away their local and trade divisions, and teaches them, through the machinery of modern industry itself, to act together. The class that the bourgeoisie needs in order to run its factories is the class organized, concentrated, and made conscious by the act of running them. \"What the bourgeoisie therefore produces, above all, are its own grave-diggers.\" The system's success is the form of its undoing."
        }
      ]
    },
    {
      "num": 3,
      "title": "Proletarians and communists: the program, carefully",
      "epigraph": {
        "text": "\"The distinguishing feature of Communism is not the abolition of property generally, but the abolition of bourgeois property.\"",
        "attribution": "— Marx & Engels, *The Communist Manifesto*, sect. II (1848), trans. Samuel Moore (1888)"
      },
      "blocks": [
        {
          "p": "Section II, \"Proletarians and Communists,\" turns from history to program and immediately handles the charge everyone brings first. The communists, it says, can sum up their theory in a single sentence: \"Abolition of private property.\" That phrase has done more to define and to distort the document than any other, so the pamphlet's own qualification matters and is usually dropped. It is not all property that is meant. \"The distinguishing feature of Communism is not the abolition of property generally, but the abolition of bourgeois property,\" meaning capital, the kind of property that consists in owning the means by which other people are made to work and from which their unpaid labor is drawn off as profit. The hard-won property of a craftsman or a small farmer, the property that is the fruit of a person's own labor, is not the target; that kind, the pamphlet says, modern industry is already destroying on its own."
        },
        {
          "p": "The argument is sharpened to a needle in one line aimed back at the accuser. \"You are horrified at our intending to do away with private property. But in your existing society, private property is already done away with for nine-tenths of the population; its existence for the few is solely due to its non-existence in the hands of those nine-tenths.\" The point is that the proletarian, the mass of people in this society, already owns no productive property; he has only his labor to sell. To speak of private property as a universal birthright being threatened, the pamphlet says, is to defend the property of a tenth in the name of a society in which the other nine tenths have none. What is to be abolished is not a thing everyone has. It is a thing almost no one has, held by the few, and worked by the many who have nothing."
        },
        {
          "p": "Then come the objections, and the pamphlet takes them in turn, fairly stating each before answering. On the family: the bourgeoisie accuses communists of wanting to abolish the family, and the pamphlet replies that the bourgeois family, founded on capital and private gain, already barely exists for the proletarian, whose family ties modern industry has torn apart, whose children it has turned into instruments of labor. On country: communists are charged with abolishing nationality, and the answer is blunt. \"The working men have no country. We cannot take from them what they have not got.\" On the eternal truths, religion, justice, morality, said to stand above all history: the pamphlet replies that these so-called eternal truths have changed in every age with the class that ruled it, that the ideas of a society have always been the ideas of its ruling class, so that to be scandalized at communism for breaking with them is only to defend one particular class's ideas dressed up as eternity."
        },
        {
          "p": "The program has a concrete list, and it is more modest and more dated than the rhetoric around it. For the most advanced countries, the pamphlet sets out ten measures the victorious workers would carry through, and several of them have a strikingly familiar look from the far side of the twentieth century: a heavy progressive income tax, abolition of inheritance, centralization of credit in a state bank, free public education for all children, abolition of child factory labor. Others are radical to the root: abolition of property in land, centralization of all the means of production in the hands of the state. The pamphlet presents these not as a finished blueprint but as first steps, frankly insufficient, that would in the course of things lead further. The list is the seam where the sweeping theory meets the practical politics of 1848, and it shows its date plainly."
        },
        {
          "p": "Where Section II ends is its most idealistic and its least often quoted point, and it is worth setting against everything done later in the document's name. The goal is not the all-powerful state. The state, the concentration of production in its hands, is a means and a phase. The end is a condition in which class antagonism, and with it the state as an instrument of one class over another, has disappeared, replaced by \"an association, in which the free development of each is the condition for the free development of all.\" The freedom of every single person, the pamphlet says, is not the price of the general good but its very condition. That sentence is the moral center of the program, and it is the sharpest measure of the distance between what was argued here and what was later built."
        }
      ]
    },
    {
      "num": 4,
      "title": "The rival socialists, and the close",
      "epigraph": {
        "text": "\"The proletarians have nothing to lose but their chains. They have a world to win. Working Men of All Countries, Unite!\"",
        "attribution": "— Marx & Engels, *The Communist Manifesto*, sect. IV (1848), trans. Samuel Moore (1888)"
      },
      "blocks": [
        {
          "p": "Section III is the part of the pamphlet that has aged into the background, a tour of the other socialisms of the day and a settling of accounts with them, and it matters mainly for showing what Marx and Engels were defining themselves against. They sort the rivals into kinds. There is a feudal and clerical socialism that attacks capitalism from the standpoint of the old aristocracy and the church, nostalgic for a world the bourgeoisie destroyed, which the pamphlet treats with contempt as reaction in radical dress. There is a petty-bourgeois socialism that wants to cure the system's evils while keeping its property, which it calls impossible. And there is the strain it takes most seriously and treats most gently."
        },
        {
          "p": "That strain is what the pamphlet names \"Critical-Utopian\" socialism, the great schemes of Saint-Simon, Fourier, and Owen, men who had seen the misery of the new industrial world clearly and early and had drawn up plans for model communities and rational reorganizations of society. The pamphlet honors them: they had grasped the class antagonism, had attacked every principle of existing society, and their writings were full of value for the enlightenment of the working class. Its objection is to their method. They imagined the new society could be brought in by the force of example and the goodwill of the powerful, by founding ideal colonies and appealing to all classes, rather than by the self-conscious struggle of the proletariat itself. They expected reason to persuade where the pamphlet held that only the actual movement of a class fighting for its own interest could prevail. That is the line the document draws between itself and the socialism it inherited: not on the diagnosis, but on how change actually comes."
        },
        {
          "p": "Section IV is two short pages on tactics, the communists' relation to the various opposition parties across Europe, and then it ends. The closing paragraph rises into the register the document is remembered for. The communists, it declares, \"disdain to conceal their views and aims. They openly declare that their ends can be attained only by the forcible overthrow of all existing social conditions. Let the ruling classes tremble at a Communistic revolution.\" And then the final lines, among the most quoted in political history: \"The proletarians have nothing to lose but their chains. They have a world to win. Working Men of All Countries, Unite!\""
        },
        {
          "p": "The force of that ending is in its arithmetic. The whole argument has built to the claim that the proletarian, stripped of property, of country, of any stake in the existing order, has reached a position no oppressed class ever held before: he is the first whose liberation requires the abolition of all property rather than the seizure of someone else's, the first who can free himself only by freeing everyone, because he has no separate interest to secure, no smaller world to defend, nothing of his own to lose. \"Nothing to lose but their chains\" is not a slogan bolted onto the theory; it is the theory's last term. The man at the bottom, precisely because he owns nothing, is the only one who can carry the change all the way through."
        }
      ]
    },
    {
      "num": 5,
      "title": "The pamphlet and what was done in its name",
      "epigraph": {
        "text": "\"All that is solid melts into air, all that is holy is profaned, and man is at last compelled to face with sober senses his real conditions of life, and his relations with his kind.\"",
        "attribution": "— Marx & Engels, *The Communist Manifesto*, sect. I (1848), trans. Samuel Moore (1888)"
      },
      "blocks": [
        {
          "p": "What the Manifesto is, read as a piece of philosophy rather than as a banner, is the first compact statement of historical materialism applied to a single object: the rise and the predicted fall of capitalism. Its claims are theoretical claims, about how production shapes society, about how classes form and clash, about a system whose own dynamism produces its crises and its opponent. The full working-out of that economics, the labor theory of value, the analysis of surplus value and the commodity, would take Marx the next two decades and fill the volume he is most identified with, [*Capital*](/philosophy/work/capital), of which he finished only the first part before he died. The Manifesto is the program; *Capital* is the proof Marx spent his life trying to supply. The pamphlet states the conclusion the great book was meant to earn."
        },
        {
          "p": "Its philosophical spine runs back to [Hegel](/philosophy/thinker/hegel), and the debt is worth naming exactly. Hegel had argued that history is rational, that it moves through conflict toward a goal, driven by the unfolding of Spirit, of mind and idea. Marx kept the shape of that, the dialectical motion, history advancing through contradiction toward resolution, and threw out its content. For him the motor of history is not idea but matter: the way human beings produce their means of life, and the class relations that producing sets up. The Manifesto is that inversion in action. Where Hegel saw the march of freedom as the self-realization of Spirit, the pamphlet sees it as the succession of modes of production, each carrying within it the conflict that breaks it. The grandeur of the historical vision is Hegelian; the ground it stands on is the factory floor."
        },
        {
          "p": "The honest difficulty is the one the document's afterlife forces, and it should be stated plainly. In the twentieth century, states calling themselves communist were founded in the Manifesto's name, in Russia, in China, and elsewhere, and several of them became machineries of famine, terror, and mass killing on a scale the two young authors of 1848 never imagined and never proposed. The pamphlet contains hard sentences, the forcible overthrow, the dictatorship of the proletariat that Marx would later name, the centralization of production in the state. It does not contain the one-party police state, the gulag, the engineered famine, the cult of a leader. Those were built by later men, in conditions Marx did not foresee, justified by a curated reading of texts, many of which (the early manuscripts on alienation, for one) were not even published until decades after his death."
        },
        {
          "p": "Reading the regimes back into the pamphlet is a category error, and so is the opposite move, treating the document as innocent of everything done under its words. Both are evasions. The accurate thing is harder and more specific: the Manifesto is a brilliant, awed, ferocious analysis of capitalism written by two men in their twenties, whose stated end was a society in which the free development of each is the condition for the free development of all, and whose words were later used to license the opposite. That the end was betrayed does not prove the analysis false, and that the analysis is powerful does not absolve the words of how they were used. The document holds both facts at once, and a serious reader holds them too."
        },
        {
          "p": "What survives, stripped of the prophecy that did not come true (the proletarian revolution in the advanced industrial countries, the inevitable victory, the withering away of the state), is the description, and the description has proved remarkably durable. The account of a world remade ceaselessly by the drive of capital, of old certainties dissolving faster than new ones can set, of a global market drawing every corner of the earth into a single restless system, of human relations reduced to what they fetch, reads less like a relic of 1848 than like a report from the present. \"All that is solid melts into air.\" Whatever one makes of the cure the pamphlet prescribed, its picture of the disease, the constant revolutionizing, the everlasting uncertainty and agitation of the bourgeois epoch, is one the modern world keeps confirming. Marx and Engels were sure they were describing a system on its way to its grave. They were certainly describing a system that would never sit still, and on that much the last two centuries have not contradicted them."
        }
      ]
    }
  ]
}
