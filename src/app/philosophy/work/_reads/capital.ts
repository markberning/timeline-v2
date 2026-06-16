// Opus AUTHOR draft of Marx's *Capital*, Volume I (1867) WORK read (philosophy
// pipeline, kind = WORK). Written from audits/philosophy-pipeline/capital-work-fact-ledger.md
// and the shared 19th-c author brief (_c19-author-brief.md). It does NOT restate the MARX
// thinker read or the COMMUNIST MANIFESTO work read; it walks THE ARGUMENT of this one book.
//
// PHILOSOPHY ALTITUDE (brief landmine): Marx is held to the critique of political economy —
// the commodity, value, fetishism, surplus value, accumulation. No Lenin/Stalin read back in;
// no verdict on 20th-c regimes; the read names what the BOOK argues, and is honest that the
// labour theory of value is contested by later economics.
//
// Quote doctrine (HARD floor): every quoted line is the Moore & Aveling English translation
// (the Engels-edited 1887 English edition, public domain), string-matched against the
// marxists.org transcription of that edition (https://www.marxists.org/archive/marx/works/
// 1867-c1/), cited by chapter, translator named. Where wording is summarized I paraphrase in
// my own prose with no quote marks. No em-dashes in narration (only inside verified quotes /
// the epigraph attribution lines). German technical tags are labels, never quoted.

import type { PhiNarr } from '@/components/philosophy-reader'

export const CAPITAL: PhiNarr = {
  "title": "Marx's Capital, Volume I",
  "throughline": "For most of human history wealth meant land, gold, grain, things a person could point at. By the middle of the nineteenth century a new kind of wealth had taken over the richest country on earth, and nobody could quite say what it was. A factory owner put down money, bought cotton and machines and the time of people who had nothing to sell but their hands, and at the end of the process had more money than he started with. Where did the extra come from? [Marx](/philosophy/thinker/marx) spent decades in the British Museum reading room trying to answer that one question with the rigor of a natural scientist, and *Capital* is the answer. He starts with the humblest unit of the new world, a single commodity, and shows that hidden inside it is a relationship between people that has been frozen into a relationship between things. He builds from there to value, to money, to the strange circuit in which money is thrown into circulation only to come back larger, and finally to the one commodity that explains the whole mystery: labour-power, the human capacity to work, which the worker sells by the day and which, once bought, can be made to produce more value than it costs. That gap is surplus value, and Marx defines it with the precision of an accountant: so many hours the worker labours to cover his own wage, so many more he labours for free. The rest of the book follows that free labour out into the world, into the actual factories whose hours and horrors Marx documents from government reports, and back into history, to the conquest and dispossession that stocked the system at its birth. It is a hard book, deliberately so, and it changed how an enormous part of the world would argue about money, work, and who owns what.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/b/b6/Kapital_titel_bd1.png",
    "cap": "Title page of the first edition: *Das Kapital. Kritik der politischen Oekonomie. Von Karl Marx. Erster Band. Buch I: Der Produktionsprocess des Kapitals*. Hamburg, Verlag von Otto Meissner, 1867. Volume I was the only volume Marx finished; Engels edited Volumes II and III from his notes after his death. Public domain.",
    "alt": "The 1867 German title page of Das Kapital, Volume One, by Karl Marx",
    "portrait": true
  },
  "hook": [
    "*Capital* opens not with a manifesto but with a thing. The wealth of modern society, [Marx](/philosophy/thinker/marx) writes in the Moore and Aveling translation, presents itself as an immense accumulation of commodities, its unit being a single commodity. So that is where he starts, with one object on a market stall, and he turns it over the way a biologist turns over a cell, because he is convinced that the whole vast organism of capitalism is folded up inside it. The first chapter is famously the hardest thing in the book. Readers who came for revolution found themselves staring at a discussion of linen and coats and the value of twenty yards of cloth. They were not being stalled. They were being shown that the dullest object on the market has a secret in it.",
    "The book had a long and painful birth. Marx, a German exile living in London, spent the bulk of the 1850s and 1860s in the domed reading room of the British Museum, working through the literature of political economy and the blue books, the bound government reports on factory conditions, that the British state published in alarming volume. He meant to write the scientific anatomy of the capitalist mode of production, to do for the economy what a physiologist does for the body, and he meant it to be exact. The work wrecked his health and his finances; Engels supported him for years; whole stretches were written while creditors circled. Volume I appeared in Hamburg in 1867. It was the only volume he lived to finish.",
    "What he was after, he said in the preface, was the ultimate aim of laying bare the economic law of motion of modern society. He chose England as his chief illustration, not out of any special interest in England but because, as he put it, the physicist observes natural processes where they occur in their most typical form, and England was where the new system had run furthest. To the German reader inclined to feel that all this factory horror was a foreign affair, Marx addressed a line from Horace, *De te fabula narratur*, which warns that the tale being told is the reader's own, and the prediction that the country more developed industrially only shows, to the less developed, the image of its own future.",
    "The argument that follows is built like a proof. Each piece is forced by the one before it. The commodity forces the question of value; value forces the riddle of money; money in motion forces the strange figure of capital, value that grows; and capital that grows forces the search for the one commodity whose use creates more value than it costs. That commodity turns out to be the worker's own capacity to labour, and once Marx has it, the central accusation of the book can be stated as a piece of bookkeeping. Whether Marx was right is a separate matter, and on one crucial link, the theory of value itself, later economics broke with him. What the book actually argues, walked link by link, is something far stranger and more careful than its reputation."
  ],
  "brk": {
    "beforeLabel": "Political economy (Smith, Ricardo) treats capitalism's categories (value, profit, wages, rent) as natural and permanent, the rational way any economy must work; profit is the just reward of the capitalist's abstinence and risk, and the market is a meeting of free and equal owners exchanging equivalents",
    "afterLabel": "Those categories are historical, not natural; they are crystallized social relations between people that only look like properties of things, and beneath the equal exchange of the market lies an unequal extraction in production. Profit is unpaid labour, and the whole arrangement had a violent, datable birth",
    "paragraphs": [
      "Marx did not invent the question he was answering. He inherited it from the very economists he was attacking, above all Adam Smith and David Ricardo, the classical political economists who had already proposed that the value of a thing is governed by the quantity of labour it takes to make it. Marx took that labour theory of value seriously, more seriously than they had, and pushed it where they would not go. Where Smith and Ricardo treated the categories of their science, value, capital, wages, profit, as simply the way an economy works, fixed features of economic nature, Marx insisted they were features of one particular kind of society that had a beginning and would have an end.",
      "That is the first break, and it is a philosophical one before it is an economic one. To call profit natural is to put it beyond question, the way gravity is beyond question. To call it historical is to make it the kind of thing that arose under specific conditions and can be analysed, criticized, and in principle undone. The economists, on Marx's account, mistook the scenery of their own moment for the permanent structure of the world. He set out to show that what looked like eternal economic law was the law of motion of a society with a date stamped on it.",
      "The second break cuts deeper. Classical economics looked at the market and saw exactly what is on its surface: free people meeting to swap things of equal value, nobody forced, nobody robbed, each side better off. Marx accepts every word of that description as a description of the market. His move is to say the market is not where the action is. The secret of profit cannot be in exchange, because in a fair exchange equal values trade for equal values and no new value appears. So the source of the surplus has to lie somewhere the economists were not looking, in the hidden process of production behind the shop front, and finding it there is the spine of the whole book.",
      "And the third break is about violence and time. The economists told a soothing story about how capital first arose: long ago some people were diligent and thrifty and saved, while others were lazy and spent, and so the world divided into owners and workers. Marx calls this a children's fable and replaces it with a history of conquest, enclosure, slavery, and plunder. The starting capital was not saved. It was taken. That is the argument of the book's blood-soaked final chapters, and it is the point at which the cool anatomy of value turns into something closer to an indictment."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The anatomy: a scientist in the reading room",
      "epigraph": {
        "text": "\"...it is the ultimate aim of this work, to lay bare the economic law of motion of modern society...\"",
        "attribution": "— Marx, *Capital*, Vol. I, Preface to the First Edition (1867), trans. Moore & Aveling"
      },
      "blocks": [
        {
          "p": "By the 1860s the country [Marx](/philosophy/thinker/marx) lived in had become something no country had ever been. In Britain, more people worked for wages in factories and mills than worked the land; cotton spun in Lancashire clothed half the world; railways and steamships knit the planet into a single market. This was new, and Marx was convinced that almost nobody understood it, including the economists whose job it was. They described the machine while it ran but could not say what made it run, the way a person can use a clock without knowing what is inside the case. He set out to open the case."
        },
        {
          "p": "His method was borrowed from natural science. A *Contribution to the Critique of Political Economy*, his title and his subtitle for *Capital* itself, signals that this is not economics as cheerleading for the market but a critique, an X-ray of its underlying structure. In the preface he compares his work to that of the physicist, who studies a natural process where it appears in its most typical and least disturbed form. That is why England fills the book. It was the clearest specimen on the dissecting table, the place where the capitalist mode of production had developed with the fewest local complications, so its inner laws showed through most plainly."
        },
        {
          "p": "The dissection took the better part of two decades, most of it in the British Museum's reading room, where Marx had a regular seat and worked through economics, statistics, and the British government's own factory inspectors' reports and parliamentary commissions. Those reports matter to the argument, not just the biography. When Marx later describes the horrors of the working day, he is not inventing atrocities for effect; he is quoting the Crown's own inspectors, the respectable officials whose job was to document conditions, and turning their dry findings into evidence. The book is built to be unanswerable on the facts because so many of its facts come from the system's own bookkeeping."
        },
        {
          "p": "The aim he announced was grand and exact at once: to lay bare the economic law of motion of modern society. Not to moralize about greed, not to dream up a better world on paper, but to find the mechanism, the law that governed how this particular society moved and grew and where it was tending. Twenty years earlier, in [The Communist Manifesto](/philosophy/work/manifesto), he and Engels had issued the political call to arms; *Capital* is the patient science underneath it, the attempt to prove on the page what the pamphlet had only declared. And he warned his readers that the findings would not stay safely abroad. To the German who read about English factory hells and felt secure, Marx threw the Latin tag *De te fabula narratur*, the warning that the story being told is the reader's own, and the flat prediction that the less developed country sees in the more developed one the image of its own future. The anatomy of England was meant as the anatomy of everywhere the system would reach."
        }
      ]
    },
    {
      "num": 2,
      "title": "The commodity: a secret in a thing",
      "epigraph": {
        "text": "\"A commodity is, in the first place, an object outside us, a thing that by its properties satisfies human wants of some sort or another.\"",
        "attribution": "— Marx, *Capital*, Vol. I, ch. 1, trans. Moore & Aveling"
      },
      "blocks": [
        {
          "p": "A commodity, in Marx's definition, is an object outside us that by its properties satisfies human wants of some sort or another. A coat keeps a person warm; that usefulness Marx calls its *use-value*. Use-value is concrete and qualitative: the coat warms, the bread feeds, the knife cuts, and each does its own particular job. If that were all there was to a commodity there would be nothing to explain. But a commodity is also something that exchanges, that trades against other commodities at definite rates, and there the puzzle begins. Twenty yards of linen exchange for one coat. What makes those two utterly different objects, a bolt of cloth and a garment, equal enough to swap at all?"
        },
        {
          "p": "It cannot be their use-values, because as use-values they are incommensurable; warmth and length-of-cloth share no common unit, and nobody trades a coat for linen because the two are equally useful. Yet they do trade, in some fixed proportion, which means there must be a third thing, present in both, of which each contains a measurable amount. Marx's answer, following Smith and Ricardo but pressing harder, is that the common element is *human labour*. Strip away everything that makes the linen linen and the coat a coat, every physical property, and what remains common to both is that each is the product of human work. Their *exchange-value*, the proportion in which they trade, is governed by how much labour they contain."
        },
        {
          "p": "This is the labour theory of value, and Marx immediately repairs an obvious hole in it. If value were just labour-time, then the lazier and slower the worker, the more valuable his product, since he poured more hours into it. That is plainly absurd. So Marx specifies: what counts is not the time any individual happens to take, but the *socially necessary labour-time*, which he defines as that required to produce an article under the normal conditions of production, and with the average degree of skill and intensity prevalent at the time. The value of a thing is set by how long it takes society, on average, with current tools and skills, to make one. A daydreaming weaver who takes twice as long produces no more value; he has simply wasted half his labour. When power looms cut the time to weave cloth, the value of cloth falls accordingly, no matter how hard the old hand-weavers still toil."
        },
        {
          "p": "A worked case makes the rule concrete. Suppose it takes society, on average, the same number of labour-hours to produce a coat as to produce twenty yards of linen. Then a coat and twenty yards of linen have equal value and will tend to exchange one for the other, regardless of how skilled or slack the particular tailor and the particular weaver happened to be. Now invent a machine that halves the labour needed to weave linen. The linen's value falls by half; it now takes forty yards of linen to equal one coat. Nothing about the cloth's usefulness changed. What changed was the quantity of socially necessary labour congealed in it, and the exchange rate moved exactly to track it."
        },
        {
          "p": "Then comes the turn that gives the chapter its fame, the passage on *commodity fetishism*, and it is the most philosophical thing in the book. A table, Marx says, is an ordinary wooden object as long as we only use it. But the moment it becomes a commodity, it changes into something transcendent; it stands, he writes, not just on its feet but on its head, and evolves out of its wooden brain grotesque ideas, far more wonderful than table-turning ever was. The joke has a precise target. In the market, the value of a thing seems to be a property of the thing itself, like its weight or its color: this watch is worth more than that loaf, the way the watch is heavier than the loaf. People say the price as if they were reading off a fact of nature."
        },
        {
          "p": "But value is not a natural property of any object. It is, Marx insists, congealed human labour and nothing else, which is to say it is a relationship between the people who did the work. When a weaver's cloth exchanges for a tailor's coat, what is really being related is two people's labour, set equal through the things they made. The market hides this. It makes the social relation between the producers appear instead as a relation between the products, a price-relation between things on a shelf. In his exact phrase, it is a definite social relation between men that assumes, in their eyes, the fantastic form of a relation between things. He calls it fetishism by analogy with the worshipper who carves an idol and then bows to it as if it had power of its own. The market makes idols of commodities. Human beings make value with their hands, then meet it again in the shop as if it were a force that governs them, and forget that they are the ones who put it there."
        }
      ]
    },
    {
      "num": 3,
      "title": "Money, and capital: value that grows",
      "epigraph": {
        "text": "\"The value originally advanced, therefore, not only remains intact while in circulation, but adds to itself a surplus-value or expands itself. It is this movement that converts it into capital.\"",
        "attribution": "— Marx, *Capital*, Vol. I, ch. 4, trans. Moore & Aveling"
      },
      "blocks": [
        {
          "p": "Once commodities exchange in fixed proportions of value, one of them naturally drifts into the role of measuring all the others. That is money: a commodity, historically gold, that becomes the universal yardstick of value and the thing everything else trades against. Ordinary commerce then runs in a simple circuit Marx labels C-M-C, commodity to money to commodity. A weaver sells his cloth for money and uses the money to buy bread. He begins with a use-value he does not want to keep, the cloth, and ends with one he does, the bread, and the money is just a go-between. He sells in order to buy. The aim of the loop is the bread at the end; the money is a means."
        },
        {
          "p": "Alongside that ancient circuit Marx finds another, which looks similar and is in fact its reverse, and which he names M-C-M. Here a man starts with money, buys a commodity, and sells it again for money. He buys in order to sell. But stated that way the circuit is pointless: why turn a hundred pounds into cotton only to turn the cotton back into a hundred pounds? Nobody troubles to swap money for money of the same amount. The circuit only makes sense if the money that comes back is larger than the money that went out. The real form is M-C-M-prime, where the prime marks an increase, an extra sum returned over and above the original. That increase Marx calls *surplus-value*, and the movement that produces it is what defines capital."
        },
        {
          "p": "Marx's definition of capital departs from the everyday sense of the word. Capital is not a pile of money, nor a heap of machines, nor wealth as such. Capital is *value in motion that returns enlarged*, value that has been set going through the circuit M-C-M-prime in order to come back bigger. Money hoarded in a drawer is not capital; it just sits. Money thrown into circulation precisely so as to expand itself is capital. As Marx puts it, the value originally advanced not only remains intact while in circulation but adds to itself a surplus-value, expands itself, and it is this self-expanding movement that converts it into capital. The defining trait is the growth."
        },
        {
          "p": "He describes this self-expanding value in almost uncanny terms, because there is something genuinely uncanny about it. In ordinary exchange, value just passes through money and commodities as inert forms. But in the capital-circuit, the same value suddenly presents itself, in his words, as an independent substance, endowed with a motion of its own, passing through a life-process of its own, in which money and commodities are mere forms which it assumes and casts off in turn. Value starts to behave like a living thing whose whole drive is to become more value. The capitalist is its servant; his subjective aim, the restless making of more money, is simply this objective movement become conscious in a person. Capital is value that has acquired, he says, the occult quality of being able to add value to itself."
        },
        {
          "p": "And that is exactly where the chapter slams into a wall, the wall the rest of the book is written to get past. Where can the extra value possibly come from? Marx has already proved that in a fair exchange, equal value trades for equal value, so no new value is created in the act of buying or selling; trade just shifts existing value from hand to hand. A sharp dealer can cheat, buying cheap and selling dear, but cheating only moves value around between traders; it cannot explain a surplus for the capitalist class as a whole, since one man's gain by overcharging is another's loss. So surplus-value cannot arise in circulation. And yet, just as plainly, it cannot arise outside circulation either, because the capitalist starts and ends in the market with money. The surplus must somehow come from a commodity bought at its full, fair value, whose *use* then produces more value than was paid for it. Marx says such a commodity exists, and the search for it sets up the heart of the book."
        }
      ]
    },
    {
      "num": 4,
      "title": "Labour-power and surplus value: the analytical heart",
      "epigraph": {
        "text": "\"...the daily cost of maintaining it, and its daily expenditure in work, are two totally different things. The former determines the exchange-value of the labour-power, the latter is its use-value.\"",
        "attribution": "— Marx, *Capital*, Vol. I, ch. 7, trans. Moore & Aveling"
      },
      "blocks": [
        {
          "p": "The commodity Marx is looking for is the worker's own capacity to work, which he names *labour-power*: in his definition, the aggregate of those mental and physical capabilities existing in a human being which he exercises whenever he produces a use-value of any description. Labour-power is not the same as labour. Labour is the activity, the actual spinning and hammering; labour-power is the capacity to do it, the potential the worker carries in his muscles and mind. And under capitalism this capacity has become a commodity that is bought and sold by the day, because a class of people exists who own no land, no tools, no stock of goods, nothing to live on, and so must sell the one thing they have, their ability to work, to anyone who will pay for it."
        },
        {
          "p": "Like every commodity, labour-power has a value, and Marx sets it by his own rule: the socially necessary labour-time needed to *produce* it, which here means the labour-time needed to keep the worker alive and able to come back tomorrow, plus enough to raise the next generation of workers. In plain terms, the value of a day's labour-power is the value of a day's food, housing, clothing, and the rest of subsistence, at the customary standard. This is the wage. And here Marx is scrupulously fair to the system he is attacking: he assumes the capitalist pays this value in full, that the worker is not cheated, that labour-power is bought at its honest price like any other commodity. The exploitation he is about to expose happens with every market rule obeyed."
        },
        {
          "p": "The whole secret rests on a single distinction, the analytical hinge of the entire book. The *value* of labour-power and the *value it can create when used* are two different magnitudes. What it costs to keep a worker for a day, and what that worker can produce in a day, have no reason to be equal. In Marx's words, the daily cost of maintaining labour-power and its daily expenditure in work are two totally different things; the cost of maintaining it determines its exchange-value, the wage, while the work it actually performs is its use-value. The capitalist buys the use-value. And the peculiar, world-making property of this one commodity is that its use, unlike a lump of coal that is simply burned up, is itself the creation of fresh value. It is a commodity whose consumption is an embodiment of labour and consequently a creation of value."
        },
        {
          "p": "Marx works it as a sum, and the sum is the moral of the book. Suppose a day's subsistence, the worker's wage, is worth six hours of labour. Say it costs the capitalist three shillings, and that three shillings represents the value created in six hours of spinning. The worker, in six hours, will have spun enough yarn to add three shillings of new value, exactly covering his wage. If the working day were six hours long, the capitalist would get nothing extra; the books would balance and surplus-value would be zero. But the capitalist did not buy six hours. He bought a *day*, the use of the labour-power for as long as the working day runs, and the working day runs to twelve hours. So the worker keeps spinning. In the second six hours he adds another three shillings of value, and this time it covers no wage, because the wage was already covered. That second three shillings is surplus-value, and it falls into the capitalist's pocket for nothing."
        },
        {
          "p": "Marx divides the working day in two along exactly this line, and the two halves are the precise definition of exploitation. The first stretch he calls *necessary labour*, the part of the day in which the worker reproduces the value of his own wage, works, in effect, to pay for himself. The second stretch he calls *surplus labour*, the part in which, as he puts it, the worker creates no value for himself but produces surplus-value which, for the capitalist, has all the charms of a creation out of nothing. The worker is not underpaid for his hours; he is paid in full for some of them and works the rest for free. Surplus-value is unpaid labour, the whole accusation stated as a fact about how the working day is split."
        },
        {
          "p": "The ratio of the two, surplus labour set against necessary labour, Marx calls the rate of surplus-value, and he says flatly that it is an exact expression for the degree of exploitation of labour-power by capital. Six hours unpaid against six hours paid is a rate of one hundred percent. Lengthen the day, or speed up the work, or cheapen the worker's subsistence so that fewer hours cover the wage, and the rate climbs. This is why he insists the source of profit was never in the marketplace. At the close of the chapter on the sale of labour-power he leaves the noisy sphere of exchange, which he calls a very Eden of the innate rights of man, where, he says with open sarcasm, there alone rule Freedom, Equality, Property, and Bentham, and follows the two parties through a door marked, in his quotation, No admittance except on business, into the hidden abode of production. The market is all fairness and free consent. The unfairness is inside, where the day is split and the second half is taken."
        }
      ]
    },
    {
      "num": 5,
      "title": "The working day: the horror in the blue books",
      "epigraph": {
        "text": "\"Capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks.\"",
        "attribution": "— Marx, *Capital*, Vol. I, ch. 10, trans. Moore & Aveling"
      },
      "blocks": [
        {
          "p": "If surplus-value comes from the unpaid hours of the working day, then the length of that day is not a detail; it is the whole battlefield. Every hour added to the day past the point where the wage is covered is pure surplus for the capitalist. So capital has a structural, built-in hunger to make the day longer, and Marx puts it in the book's most memorable image: capital is dead labour, that, vampire-like, only lives by sucking living labour, and lives the more, the more labour it sucks. The metaphor is not decoration. It states a mechanism. The drive to extend the day is not the personal cruelty of bad employers; it is the logic of self-expanding value working through whoever happens to own it."
        },
        {
          "p": "Against the long day stands only the worker's body, which has limits, and the law, which is fought for. The chapter on the working day, the longest in the book, is the history of that fight, and Marx tells it largely in the words of the British government's own factory inspectors and medical officers. Here the cool anatomy of the earlier chapters gives way to documented horror, and the horror is more damning for being officially recorded. He pulls case after case from the reports: children of nine and ten worked through the night in lace and pottery and match-making, shifts of fourteen and sixteen hours, factories where relays of children kept the machines running around the clock."
        },
        {
          "p": "One case he records stands for the rest. Mary Anne Walkley, twenty years old, was employed in a respectable London dressmaking establishment run, Marx notes with cold irony, by a lady with the pleasant name of Elise, supplying gowns for the court during the height of the season. Walkley, in the inspectors' account Marx reproduces, had worked without intermission for twenty-six and a half hours, with sixty other girls, thirty to a room that afforded a third of the air they needed, sleeping at night in pairs in stifling board-partitioned holes. She died. The doctor's testimony before the coroner's jury, as Marx quotes it, was that she had died from long hours of work in an overcrowded workroom and a too-small, badly ventilated bedroom. The dresses for the ball were finished on time."
        },
        {
          "p": "What makes the chapter an argument and not merely an atrocity catalogue is Marx's account of *why* it happens, which follows from everything before it. The individual capitalist may be a perfectly decent man; it does not matter. He is in competition with every other capitalist, and any rival who works his hands longer and harder undersells him. The pressure to extend and intensify the day is therefore systemic, bearing down on owner and worker alike. Marx captures the owner's horizon in a borrowed phrase: *Après moi le déluge*, after me the flood, is, he writes, the watchword of every capitalist and of every capitalist nation. Capital, he concludes, is reckless of the health and length of life of the labourer unless forced to care by society. The day does not shorten because owners grow kind. It shortens when workers organize and the state, against capital's will, compels it by law."
        }
      ]
    },
    {
      "num": 6,
      "title": "So-called primitive accumulation: the bloody birth",
      "epigraph": {
        "text": "\"...capital comes dripping from head to foot, from every pore, with blood and dirt.\"",
        "attribution": "— Marx, *Capital*, Vol. I, ch. 31, trans. Moore & Aveling"
      },
      "blocks": [
        {
          "p": "The whole machine, by this late stage of the book, runs on a loop. Surplus-value is squeezed from labour; the surplus is turned into more capital; the larger capital commands more labour and squeezes out more surplus, which becomes still more capital. Marx calls this *accumulation*, the conversion of surplus-value back into capital, and it is the system's law of growth, the engine that makes capital pile up at one pole. But the loop has a chicken-and-egg problem at its very start. To extract surplus-value the capitalist needs workers who own nothing and must sell their labour-power. Where did that propertyless working class come from? And where did the first capitalist get the capital to start the loop, before there was any surplus-value to accumulate?"
        },
        {
          "p": "The economists had a comforting answer, and Marx treats it with contempt. Their story, which he says plays in political economy about the same role original sin plays in theology, was that long ago there were two sorts of people, the diligent and frugal who saved, and the lazy and riotous who squandered, and from this the first division into owners and have-nots naturally grew. He calls it an insipid childishness. The real history, he says, is written in letters of blood and fire. He gives this founding process a deliberately ironic name: *so-called* primitive accumulation, the original hoard that had to exist before the cycle could begin, which the economists imagined as innocent saving and which was in fact a violent expropriation."
        },
        {
          "p": "Its essence, Marx says, is a single brutal act repeated across history: the divorcing of the producer from the means of production. In his exact words, so-called primitive accumulation is nothing else than the historical process of divorcing the producer from the means of production. A peasant who has his own strip of land and his own tools is nobody's wage-labourer; he works for himself and has no reason to sell his days to an employer. To create a working class, that self-sufficiency had to be destroyed, the producers cut off from the land and tools that let them live independently, until they had nothing left to sell but themselves. His chief English example is the enclosures, the long process by which common lands that villagers had farmed and grazed for generations were fenced off and seized by landlords, often by act of Parliament, driving the rural poor off the soil and into the towns and the mills as a mass of people with no choice but to work for wages."
        },
        {
          "p": "And the dispossession at home was matched by plunder abroad, on a scale that funneled the world's wealth into the new system. Marx names it without euphemism. The discovery of gold and silver in America, he writes, the extirpation, enslavement, and entombment in mines of the aboriginal population, the beginning of the conquest and looting of the East Indies, the turning of Africa into a warren for the commercial hunting of black-skins, signalised the rosy dawn of the era of capitalist production. Colonial conquest, the transatlantic slave trade, the looting of India: these were not unfortunate excesses at the edge of an otherwise clean system. In Marx's account they were the system's stock of starting capital, the hoard that primed the pump."
        },
        {
          "p": "From this he draws a general claim about how new economic orders come into being, and it is one of the book's hardest sayings: force is the midwife of every old society pregnant with a new one, and force, he adds, is itself an economic power. The point is that the capitalist order did not grow up gently and lawfully out of fair exchange, the way its admirers told the story. It was delivered by violence, by conquest, enslavement, and the armed seizure of land, and the violence was not incidental to the economics but part of it. This is where the controlled scientific prose of the earlier chapters finally boils over into the line the book is remembered for: if money, he writes, quoting another author, comes into the world with a congenital blood-stain on one cheek, then capital comes dripping from head to foot, from every pore, with blood and dirt."
        },
        {
          "p": "One honest qualification belongs at the end, because the book stands or falls partly on it. The whole edifice rests on the labour theory of value, the claim that value is congealed socially necessary labour and nothing else. Within a few years of Marx's death, the mainstream of economics abandoned that theory. The marginalist economists who reshaped the field held that the value of a thing comes not from the labour in it but from the subjective usefulness of the last unit to the people who want it, and modern economics has largely followed them, treating the labour theory as a historical position it left behind. So the strict economic claim, that all value and all profit trace to unpaid labour-time, is contested at its foundation and is not the consensus of the discipline. What survives the loss, and what kept *Capital* alive as philosophy, is the deeper structure: the insistence that the categories of economic life are historical rather than natural, that social relations between people can harden into what looks like the natural behaviour of things, and that a system can be perfectly fair at the level of each exchange and systematically unjust in the whole. Those ideas outran the value theory that first carried them, and they are why this difficult, unfinished book is still read by people who would never balance Marx's ledger of shillings and hours."
        }
      ]
    }
  ]
}
