// Opus AUTHOR draft of Nietzsche's *Beyond Good and Evil* (1886) WORK read (philosophy
// pipeline, kind = WORK). Written from audits/philosophy-pipeline/beyondgood-work-fact-ledger.md
// and the shared 19th-c author brief (_c19-author-brief.md). It does NOT restate the NIETZSCHE
// thinker read; it walks THE ARGUMENT of this one book, aphorism by aphorism, in its nine parts.
//
// NIETZSCHE ALTITUDE (brief landmine): ideas defined plainly, never as strongman caricature.
// Will to power is NOT a "domination" cartoon; master/slave morality is presented as Nietzsche's
// DESCRIPTIVE genealogy (good/bad vs good/evil, ressentiment, transvaluation), with the explicit
// note that the Genealogy (1887) systematizes it. The posthumous misuse is NAMED in the read:
// Elisabeth Förster-Nietzsche, the cobbled-together *Will to Power*, the Nazi appropriation —
// motive hedged to documented EFFECT, never read back into the 1886 book. The notorious passages
// on women are named honestly by aphorism number (231–239), neither hidden nor endorsed.
//
// Quote doctrine (HARD floor): every quoted line is the Helen Zimmern English translation (1907,
// public domain), cited by aphorism number, translator named. Verified against the Project
// Gutenberg / Wikisource transcriptions of the Zimmern edition. Where wording is summarized I
// paraphrase in my own prose with no quote marks. No em-dashes in narration (only inside verified
// quotes / the epigraph attribution lines). German technical tags are labels, never quoted.

import type { PhiNarr } from '@/components/philosophy-reader'

export const BEYONDGOOD: PhiNarr = {
  "title": "Nietzsche's Beyond Good and Evil",
  "throughline": "Most philosophy books open by trying to win the reader's trust. [Nietzsche](/philosophy/thinker/nietzsche) opens *Beyond Good and Evil* by withdrawing his own. Supposing truth is a woman, he writes on the first page, then what follows for all the solemn philosophers who clumsily courted her and went home empty-handed? The book is a sustained act of suspicion, aimed first at the people who are supposed to be least suspect: philosophers themselves. Its subtitle calls it a *Prelude to a Philosophy of the Future*, and that is exactly its shape. It clears ground rather than builds a system, moving in two hundred and ninety-six numbered aphorisms across nine parts, some a paragraph long, some running for pages. Nietzsche goes after the will to truth and asks why anyone assumed truth was worth more than illusion. He treats the great philosophers as men writing secret memoirs they mistook for proofs. He proposes that the basic drive of everything alive is not survival but a will to power, that there is no neutral view from nowhere but only perspectives, that the self every system leaned on is a grammatical habit, not a fact. And in the long final part he lays out the most dangerous claim of all: that our words *good* and *evil* are not eternal truths but the residue of a war between two moralities, one belonging to masters and one invented by the weak as revenge. The book is brilliant, scattered, deliberately provoking, and easy to misread, and it was misread, catastrophically, by people who came after him with their own uses for a philosopher of power. Walked carefully, on its own terms, it is something stranger and more careful than the caricature: a diagnosis of where European values came from, written by a man who thought they were dying.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Jenseits_von_Gut_und_B%C3%B6se_-_1886.jpg",
    "cap": "Title page of the 1886 first edition: *Jenseits von Gut und Böse. Vorspiel einer Philosophie der Zukunft*, by Friedrich Nietzsche, published by C. G. Naumann in Leipzig. The subtitle, *Prelude to a Philosophy of the Future*, sets the book's task: not a finished system but ground-clearing for thinkers Nietzsche believed had not yet arrived. Public domain.",
    "alt": "The 1886 German title page of Beyond Good and Evil by Friedrich Nietzsche",
    "portrait": true
  },
  "hook": [
    "*Beyond Good and Evil* came out in 1886, paid for largely by [Nietzsche](/philosophy/thinker/nietzsche) himself, and sold almost nothing. He had left his professorship at Basel years earlier, broken by illness, and was living a wandering, half-invalid life in boarding houses in the Alps and on the Italian coast, writing in short bursts between collapses. The grand work he had hoped people would read, *Thus Spake Zarathustra*, had baffled them. This book was meant in part as the plain-prose key to that one: the same ideas, argued rather than chanted, set down as numbered aphorisms a reader could chew slowly. It is the most accessible door into his mature thought, which is not to say an easy one.",
    "An aphorism, in Nietzsche's hands, is not a tidy maxim with a moral. It is a thrust. He distrusted systems, the great cathedrals of connected propositions that philosophers from Spinoza to [Kant](/philosophy/thinker/kant) to [Hegel](/philosophy/thinker/hegel) had built, because he thought a system was a way of hiding the single prejudice at the bottom of the whole thing under a scaffold of proofs. So he wrote in fragments on purpose. Each numbered section drops a thought, sharpens it, and leaves before the reader can domesticate it. The nine parts have an order, moving from the failures of past philosophy through the free spirits, religion, morality, scholars, and virtues, to the long closing meditation on rank and nobility, but within each part the method is the raid, not the march.",
    "The title is the program. To go *beyond good and evil* does not mean to be wicked, the misreading Nietzsche spent the rest of his life fending off. It means to step outside the particular pair of categories, *good* and *evil*, that one specific moral tradition treats as the eternal furniture of the universe, and to ask where that pair came from and whose interests it served. The book's wager is that morality has a history, that it was made, and made by identifiable kinds of people for identifiable reasons, and that once this is seen no single moral code can still be taken as simply the voice of reason or of God. The values are real; their pretension to be timeless is what he attacks.",
    "It is also a book that was turned, after his death, into something he did not write. Nietzsche collapsed into insanity in early 1889 and never wrote again; he died in 1900. His sister, Elisabeth Förster-Nietzsche, an antisemite and a German nationalist whom Nietzsche himself had broken with over exactly those politics, took control of his manuscripts and his reputation. She assembled his discarded notebook fragments into a book called *The Will to Power* that he had planned and abandoned, presenting her arrangement as his masterwork, and she courted the German right. By the 1930s a butchered version of his thought hung in the foyer of Nazi ideology. None of that is in the 1886 book, and reading it back into the book is the single most common way to get *Beyond Good and Evil* wrong."
  ],
  "brk": {
    "beforeLabel": "Philosophy is the disinterested search for truth; the philosopher follows reason and evidence wherever they lead, his system stands or falls on its arguments, and morality, whatever its source, names real and universal goods and evils binding on everyone. The self that does the reasoning and the choosing is a given, the soul or the thinking 'I'",
    "afterLabel": "Philosophy is interested all the way down; every system is the disguised confession of a particular drive, and the will to truth is itself a value to be questioned, not assumed. Morality is plural and historical, the deposit of conflicts between human types; the 'good/evil' code is one tradition's invention. And the unified self is a grammatical fiction over a swarm of competing drives",
    "paragraphs": [
      "The view Nietzsche broke from is the one that makes philosophy respectable. On that view the philosopher is the most honest of inquirers, a person who has put aside his own wishes to follow the argument, and the truths he reaches, in logic, in ethics, in metaphysics, hold for everyone because they answer to how things really are. [Kant](/philosophy/thinker/kant) had built a moral law he believed every rational being would legislate for itself; the whole tradition assumed that under the disagreements lay a single truth that reason could in principle reach. That is the dignified self-image *Beyond Good and Evil* sets out to puncture.",
      "Nietzsche's first move is to turn the tools of suspicion back on the suspicious. Philosophers, he says, are not disinterested at all. Behind every system stands a man with a temperament, a body, a set of drives, and the system is the elaborate justification that temperament built for itself after the fact. The argument did not produce the conclusion; the conclusion was wanted first, and the argument was hired. This does not, by itself, prove any particular philosophy false. It changes what a philosophy is. It becomes evidence about its author, a memoir written in the third person and the abstract.",
      "From there the demolition spreads. If thinkers are advocates for their own prejudices, then the will to truth they all profess is itself suspect: why should truth be worth more than a useful error, and who benefits from insisting that it is? If there is no disinterested viewpoint, then the dream of seeing the world as it is in itself, from nowhere in particular, collapses into a set of perspectives, each from a particular living body with particular needs. And if the knowing self is not a simple given but a busy crowd of drives that happen to speak through one grammar, then the 'I think' that [Descartes](/philosophy/thinker/descartes) and the whole tradition rested on is not bedrock at all.",
      "The deepest break is about morality, and it is the one the book is named for. Where the tradition treated good and evil as a single scale every decent person reads off the same way, Nietzsche treats them as the outcome of a fight. There have been, he argues, fundamentally different kinds of morality, growing from fundamentally different kinds of people, and the code that calls humility and pity and meekness 'good' and calls strength and pride 'evil' is not the natural moral law. It is the victory, slow and total, of one side in that fight. To name the sides, and to show that our deepest moral words carry the fingerprints of the winners, is the work of the final part. The Genealogy of Morals would turn that sketch into a history a year later. (Chapter 6, and [Genealogy](/philosophy/work/genealogy).)"
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The prejudices of philosophers",
      "epigraph": {
        "text": "\"SUPPOSING that Truth is a woman—what then? Is there not ground for suspecting that all philosophers, in so far as they have been dogmatists, have failed to understand women...\"",
        "attribution": "— Nietzsche, *Beyond Good and Evil*, Preface, trans. Helen Zimmern (1907)"
      },
      "blocks": [
        {
          "p": "The first part is called \"Prejudices of Philosophers,\" and the title is the argument. [Nietzsche](/philosophy/thinker/nietzsche) opens not by stating a thesis but by interrogating a desire that every philosopher before him took for granted: the wish to know the truth. The very first aphorism turns it into a question. The will to truth, he writes, which is to tempt us to many a hazardous enterprise, the famous truthfulness of which all philosophers have hitherto spoken with respect, what questions has this will to truth not laid before us. The honored thing, the love of truth, is made into a riddle rather than a starting point. Why do we want truth at all, and why have we never thought to ask what it is worth?"
        },
        {
          "p": "The suspicion sharpens into an accusation. Philosophers present themselves as cold discoverers who followed the argument to its conclusion. Nietzsche says it runs the other way: the conclusion came first, as a thing wanted, and the proofs were assembled afterward to defend it. In aphorism five he is blunt about it. They are all advocates, he writes, who do not wish to be regarded as such, generally astute defenders, also, of their prejudices, which they dub truths. The image is of a courtroom, not a laboratory. The philosopher is a lawyer for a position he already holds, dressing private conviction in the robes of universal reason."
        },
        {
          "p": "Aphorism six states the positive version of the charge, and it is the most quoted sentence in the part. Every great philosophy up till now, Nietzsche writes, has consisted of the confession of its originator, and a species of involuntary and unconscious auto-biography. A man's metaphysics is a confession about the man. Spinoza's austere geometry of God-or-Nature, Kant's love of moral law, Schopenhauer's gloom: each is the temperament of its author projected onto the cosmos and called eternal truth. This is not name-calling. It is a method. To understand a philosophy, Nietzsche says, ask not only whether it is true but what kind of person needed it to be true, and what that need reveals."
        },
        {
          "p": "He then runs the method on specific targets, and the demonstrations matter more than any slogan. The Stoics had urged men to live according to Nature, treating Nature as a wise and ordered teacher. In aphorism nine Nietzsche calls this a fraud of words. Nature, he points out, is wasteful, indifferent, without purpose or mercy; to live truly according to it would be monstrous. What the Stoics actually did was read their own ideal of self-command into Nature first, then command themselves to obey 'her,' so that their morality of discipline could pose as simple obedience to the way things are. They saw their own face in the well and called it the world. (Compare the [Stoics](/philosophy/school/stoicism) on their own terms.)"
        },
        {
          "p": "[Kant](/philosophy/thinker/kant) gets the same treatment, and the joke is pointed. Kant had asked how synthetic judgments known in advance of experience are possible, the question on which his whole critical philosophy turns, and answered, in effect, that the mind possesses a faculty for making them. Nietzsche, in aphorism eleven, treats this as a non-answer dressed as a discovery: to explain that we can do something by saying we have a faculty for doing it is to explain the sleeping power of opium, in the old gibe he echoes, by its dormitive virtue. Naming the capacity is not finding the cause. A grand system, Nietzsche suggests, had been built on a word standing in for an explanation that was never given."
        },
        {
          "p": "The part's most consequential demolition is of the free will, in aphorism twenty-one, and Nietzsche dismantles both sides of the old quarrel at once. The idea of a will that is its own first cause, a self that authors its own choices out of nothing, he calls a self-contradiction, the best self-contradiction that has yet been conceived. But he refuses the determinist's tidy opposite just as firmly. There is no 'unfree will' either, no mechanical billiard-ball self pushed helplessly by prior causes, because both pictures rest on the same crude fantasy of a simple unified will that is either free or chained. In real life, he says, there is only strong will and weak will. The whole metaphysical drama of freedom and necessity, he implies, is a confusion produced by taking the grammar of 'I will' for a fact about the soul."
        }
      ]
    },
    {
      "num": 2,
      "title": "The will to power, defined plainly",
      "epigraph": {
        "text": "\"A living thing seeks above all to DISCHARGE its strength—life itself is WILL TO POWER; self-preservation is only one of the indirect and most frequent RESULTS thereof.\"",
        "attribution": "— Nietzsche, *Beyond Good and Evil*, §13, trans. Helen Zimmern (1907)"
      },
      "blocks": [
        {
          "p": "Underneath the assault on philosophers runs a positive idea, and it is the one most often flattened into a slogan. Nietzsche calls it the will to power. The crude version reads it as a creed of bullying: a celebration of strongmen trampling the weak. That is not what the phrase means in the book, and getting it right is the whole task of this part. The claim is first of all a claim about life, not a recommendation. In aphorism thirteen Nietzsche states it: a living thing seeks above all to discharge its strength, and life itself is will to power; self-preservation is only one of the indirect and most frequent results thereof."
        },
        {
          "p": "The target of that sentence is Darwin, or rather a popular reading of Darwin, and naming the target makes the idea concrete. The reigning explanation of life held that the basic drive of every organism is to survive and reproduce, the struggle for existence. Nietzsche thinks this gets the direction backward. Organisms do not merely cling to life; they reach, expand, overcome, expend themselves, often at the cost of safety. A plant cracks a wall to reach light. An artist ruins his health to finish the work. A thinker risks everything he is comfortable believing to push a thought further. Survival, on this view, is a frequent side effect of that reaching, not its motive. The deepest drive is not to persist but to grow, to discharge force, to become more."
        },
        {
          "p": "Power, then, in Nietzsche's sense, is closer to the realization and expansion of a capacity than to domination over other people. A river has power; a melody has power; a proof has power. The strong type Nietzsche admires is not the one who controls the most slaves but the one whose force is most fully and freely discharged, who creates, commands himself, imposes form. Domination of others is one shape the will to power can take, and often a poor and reactive one, the recourse of those who cannot expand any other way. To collapse the whole idea into 'wanting to boss people around' is to mistake one degraded form for the thing itself."
        },
        {
          "p": "In the boldest aphorism of the part, number thirty-six, Nietzsche extends the idea past biology into a hypothesis about everything. He proposes, tentatively and as an experiment in thought, that if the world seen from within, the world defined and designated according to its 'intelligible character,' has any single character at all, it would simply be will to power, and nothing else. Even the play of forces that physics describes might be, at bottom, the same striving-to-overcome we know directly in ourselves. He floats this as a daring conjecture, not a proved doctrine, and the hedging is deliberate. The will to power is offered as the most economical single key he can find, a wager about the basic grain of reality, advanced in the same suspicious spirit as everything else in the book."
        }
      ]
    },
    {
      "num": 3,
      "title": "Perspectivism, and the dissolving self",
      "epigraph": {
        "text": "\"...the soul as something indestructible, eternal, indivisible, as a monad, as an atomon: this belief ought to be expelled from science!\"",
        "attribution": "— Nietzsche, *Beyond Good and Evil*, §12, trans. Helen Zimmern (1907)"
      },
      "blocks": [
        {
          "p": "If the will to truth is itself a value rather than a duty, a second question follows at once: a value for whom, seen from where? Nietzsche's answer is that there is no 'where' that is nowhere. Every act of knowing is done by a particular living body, from a particular standpoint, shaped by particular needs and drives. This is his perspectivism: not the lazy claim that any opinion is as good as any other, but the harder claim that knowledge is always knowledge from somewhere, that the very idea of a view detached from all interest and all position is incoherent. There is seeing, and there is interpreting; there is no seeing that is not also from an angle."
        },
        {
          "p": "The chief casualty of this is the philosophers' favorite object, the thing in itself, the world as it is apart from any knower. [Kant](/philosophy/thinker/kant) had insisted that behind the world we experience lies a reality we can never reach, the thing in itself. Nietzsche pushes harder than Kant dared and questions whether the notion means anything at all. A thing 'as it is in itself,' stripped of every relation to every possible perspective, is not a deep hidden truth but an empty phrase, a world with all its observers and all their angles subtracted until nothing is left to describe. What there is, instead, is the world as it appears to this kind of creature and that kind, each interpretation a function of the form of life doing the interpreting."
        },
        {
          "p": "The same acid dissolves the self that was supposed to do the knowing. The tradition since [Descartes](/philosophy/thinker/descartes) had taken the thinking 'I' as the one unshakable certainty, and the soul behind it as a simple, indivisible thing. Nietzsche attacks both. In aphorism twelve he goes after what he calls soul-atomism, the belief that regards the soul as something indestructible, eternal, indivisible, as a monad, as an atomon, and says flatly that this belief ought to be expelled from science. The soul is not a single indestructible pellet of self. Whatever the word names, it is something built, plural, and changeable, not a given atom."
        },
        {
          "p": "Even the bare 'I think,' Descartes's bedrock, gets taken apart. In aphorism sixteen Nietzsche examines the sentence and finds it crowded with smuggled assumptions: that there is an 'I,' that thinking is an activity, that this 'I' is its cause, that we even know what thinking is well enough to be sure it is what is happening. None of these is given in the experience; all are read into it by habit and grammar. It is not 'I think,' he suggests elsewhere in the part, so much as 'a thought comes when it will, not when I will it.' The unified author of one's mental life is an inference, and a shaky one, layered over a process that does not announce a single owner. The self the whole tradition leaned on turns out to be one more prejudice of philosophers, the deepest and least examined."
        }
      ]
    },
    {
      "num": 4,
      "title": "The free spirits and the philosophers of the future",
      "epigraph": {
        "text": "\"...they will be free, VERY free spirits, these philosophers of the future—as certainly also they will not be merely free spirits, but something more, higher, greater...\"",
        "attribution": "— Nietzsche, *Beyond Good and Evil*, §44, trans. Helen Zimmern (1907)"
      },
      "blocks": [
        {
          "p": "Tearing down is only half the book. The subtitle promised a prelude to a philosophy of the future, and the second part introduces the people Nietzsche hopes will write it. He calls them free spirits, and he is careful to distinguish them from the cheap version. The ordinary 'free-thinker' of his day, the progressive liberal who had dropped religion and signed on to democracy, equality, and the general welfare, Nietzsche regards as not free at all, merely obedient to a newer set of pieties, levelling herd-values wearing the costume of emancipation. He puts the word for them in scornful quotation marks. They had swapped one faith for another and called it freedom."
        },
        {
          "p": "The genuine free spirit is something rarer and lonelier: one who has cut loose from inherited convictions, including the comfortable new ones, and can hold a thought at arm's length without needing it to be true for the sake of comfort. Such a person is dangerous to himself, because nothing is propping him up, and he is suited to experiment. In aphorism forty-two Nietzsche names the coming type with a word he admits is risky. A new order of philosophers is appearing, he writes, and he ventures to baptize them by a name not without danger: tempters, or experimenters, in the German *Versucher*, a word that holds both senses at once. They will test ideas the way a chemist tests reagents, including ideas that might be poison."
        },
        {
          "p": "These philosophers of the future are not described as system-builders or even, mainly, as discoverers of truth. They are described as creators of values. Nietzsche's deepest charge against past philosophers was that they pretended to find values lying in the world like fossils, when in fact every great philosopher had legislated values while claiming to report them. The coming type would do this knowingly. They would not ask only what is true; they would ask what is worth willing, and have the strength to answer with new tables of worth, the way an artist imposes a form that was not there before. In aphorism forty-four Nietzsche says they will be free, very free spirits, and adds at once that they will not be merely free spirits but something more, higher, greater, the freedom being only the clearing in which the creating can begin."
        },
        {
          "p": "It is worth being plain about what this part does and does not say, because it is so often read as a recruitment poster for tyrants. The free spirit's strength is aimed first and hardest at himself: at his own inherited beliefs, his own need for consolation, his own fear of standing alone. The discipline Nietzsche praises is the discipline of a thinker who can live without certainties, not the brutality of a conqueror. The 'philosophers of the future' are a wager that someone, someday, will be honest and strong enough to face a world without given values and make new ones on purpose, rather than pretending the old ones fell from heaven. Whether such people would be admirable or appalling, Nietzsche leaves more open than his later readers did."
        }
      ]
    },
    {
      "num": 5,
      "title": "Master morality and slave morality",
      "epigraph": {
        "text": "\"There is MASTER-MORALITY and SLAVE-MORALITY...\"",
        "attribution": "— Nietzsche, *Beyond Good and Evil*, §260, trans. Helen Zimmern (1907)"
      },
      "blocks": [
        {
          "p": "The long final part, \"What is Noble?\", contains the idea the whole book was named to reach, and it is the one that most needs to be walked slowly rather than slogan'd. Nietzsche's claim is that there is not one morality with a single history but at least two, grown from two opposite kinds of human being. In aphorism two hundred sixty he states it directly: there is master-morality and slave-morality, adding at once that in all higher and mixed civilizations the two are tangled together inside the same person. He is not describing two tribes so much as two value-making impulses, two answers to the question of what counts as good, that have warred inside European morality for millennia."
        },
        {
          "p": "Master morality comes first, and it is the simpler of the two. The noble type, Nietzsche says, regards himself as a determiner of values; he does not require to be approved of. The strong, confident, flourishing person does not look outward for permission. He calls 'good' whatever he finds in himself, the qualities of his own abundance: strength, courage, candor, generosity, the capacity to keep a promise and to have enemies worth having. And 'bad,' for him, is simply the opposite and the absence of all that, the contemptible, the cowardly, the petty, the low. The crucial point is the order of operations. The master says 'I am good' first, spontaneously, out of fullness, and only afterward, almost as an afterthought, calls what is unlike him 'bad.' Good comes first; bad is the shadow it casts."
        },
        {
          "p": "Slave morality is the photographic negative, and it is born from a different position entirely: from below, from the oppressed, the suffering, the unfree, the people who cannot act out their strength and must content themselves with reacting. Their values do not begin with a 'yes' to themselves. They begin with a 'no' to the powerful. Here, Nietzsche writes, is the seat of the origin of the famous antithesis 'good' and 'evil,' and the word that drives it is one he leaves in French: *ressentiment*. It is the festering grudge of those who cannot strike back, who avenge themselves in imagination instead. The master they fear and envy is recast as 'evil,' the source of all menace. And only then, by contrast, is a new 'good' defined: the safe, the harmless, the humble, the patient, everything the powerful are not."
        },
        {
          "p": "The difference between the two codes is precise, and Nietzsche wants it understood as a difference in structure, not just in content. Master morality runs *good* versus *bad*, where 'good' is the primary, self-affirming term and 'bad' the faint afterthought. Slave morality runs *good* versus *evil*, where 'evil' is the primary, charged, accusing term, aimed at the strong, and 'good' is what is left over once the strong have been condemned. The very same trait, a lion's fearless aggression, is called 'good' by the first code and 'evil' by the second. Slave morality, Nietzsche adds, is essentially the morality of utility: it prizes whatever eases the lot of the suffering, sympathy, kindness, patience, humility, the qualities that help the herd endure."
        },
        {
          "p": "Then comes the historical claim, and it is the hinge of the whole book. Slave morality, Nietzsche argues, won. The transvaluation, the great inversion of values, was carried through with awesome consistency by the priestly and the oppressed, and it succeeded so completely that its terms now feel like simple moral reality. In aphorism one hundred ninety-five he points to the ancient Jews as the people who, hated and powerless under empire, performed the miracle of the inversion of valuations, by means of which life on earth obtained a new and dangerous charm for a couple of millenniums, the moment at which, in his phrase, the slave-insurrection in morals commences. Christianity then carried that inversion across Europe. What the modern conscience calls plain decency, the elevation of meekness, pity, and humility, the suspicion of pride and strength, is on this account the long-delayed victory of the slaves' valuation, so total that almost no one can now feel it as one option among others rather than as morality itself."
        },
        {
          "p": "Two cautions belong here, both load-bearing. First, this is descriptive genealogy, not a battle cry. Nietzsche is claiming to *explain where our moral feelings came from*, tracing 'good' and 'evil' back to a conflict of human types, the way Marx traced economic categories back to a history. He is not issuing an order to go be a master and crush slaves; he himself notes the two moralities are mixed in every modern soul, his own included. Second, this sketch is exactly that, a sketch. A year later, in 1887, Nietzsche took the master-slave story and built it into a sustained three-essay history, *On the Genealogy of Morals*, working out *ressentiment*, bad conscience, and the ascetic ideal at length. The careful, systematic version of everything in this part lives there. (Chapter 6, and [Genealogy](/philosophy/work/genealogy).)"
        }
      ]
    },
    {
      "num": 6,
      "title": "The notorious passages, and the afterlife",
      "epigraph": {
        "text": "\"He who fights with monsters should be careful lest he thereby become a monster. And if thou gaze long into an abyss, the abyss will also gaze into thee.\"",
        "attribution": "— Nietzsche, *Beyond Good and Evil*, §146, trans. Helen Zimmern (1907)"
      },
      "blocks": [
        {
          "p": "A book this provoking does not get to be quoted only for its best lines, and honesty requires naming its worst. Scattered through *Beyond Good and Evil*, and concentrated in a run of aphorisms in the seventh part, numbers two hundred thirty-one through two hundred thirty-nine, are Nietzsche's pronouncements on women, and they are ugly. He treats woman as a problem to be managed rather than a person, mocks the movement for women's emancipation, and in aphorism two hundred thirty-eight makes the sneering claim that a man who thinks deeply about women must regard her as a possession, as confinable property, a being made for service. These passages are not a misreading by his enemies; they are on the page, in his voice, and no amount of context turns them into something defensible. They are stated here plainly because hiding them would be its own kind of dishonesty, and because a reader meeting the brilliant aphorisms deserves to know the same pen wrote these."
        },
        {
          "p": "Set beside them is the book's most famous warning, and it cuts back against Nietzsche's own project in a way worth noticing. In aphorism one hundred forty-six he writes that he who fights with monsters should be careful lest he thereby become a monster, and that he who gazes long into an abyss will find the abyss gazing back. The line is usually quoted as gothic atmosphere. In context it is a caution to exactly the free spirit he has been praising: the person who spends himself attacking morality, staring into the void where given values used to be, is in danger of being deformed by the fight, of becoming the cruelty he diagnoses. Nietzsche, at his best, knew the danger of his own medicine."
        },
        {
          "p": "He did not get to manage how the medicine was used. In January 1889, in Turin, Nietzsche collapsed into a mental breakdown from which he never recovered, almost certainly the late stage of an organic illness, and he spent his last eleven years mute and incapable, dying in 1900. The custody of his work fell to his sister, Elisabeth Förster-Nietzsche. She was a committed German nationalist and antisemite, who with her husband had tried to found a 'pure-German' colony in Paraguay, and Nietzsche had quarreled bitterly with her over precisely those views, views that *Beyond Good and Evil* itself attacks where it mocks nationalism and antisemitism as herd-instincts of the weak."
        },
        {
          "p": "What Elisabeth did with the archive is a matter of documented record, and the effect, whatever her motives, is clear. She took the heaps of fragments her brother had left in his notebooks, including notes toward a book he had planned under the title *The Will to Power* and then abandoned, and arranged them herself into a volume she published as that book, presenting her editorial construction as his crowning system. It was not a work Nietzsche finished or authorized in that form. She also cultivated the German right and, in the 1930s, the Nazi regime, welcoming Hitler to the Nietzsche archive and lending her brother's name and a mutilated reading of his ideas, the will to power flattened into a doctrine of racial domination, the Übermensch into a master race, to a movement built on the very mass politics and antisemitism he had despised."
        },
        {
          "p": "The honest summary keeps three things apart. Nietzsche wrote genuinely dangerous things: he attacked equality, exalted hierarchy and hardness, and praised a kind of strength that can be read cruelly, and a reader should not pretend the raw material was innocent. But the specific use the Nazis made of him required active distortion: selective quotation, the spurious *Will to Power*, the suppression of his contempt for German nationalism and antisemitism, all of it managed through an archive run by an antisemite he had broken with. And the will to power and the Übermensch, defined as he defined them, are not programs for conquest at all but a theory of life's self-expansion and an image of a person strong enough to create his own values. *Beyond Good and Evil* is a hard, suspicious, sometimes repellent book, and it is also one of the most penetrating accounts ever written of where a civilization's deepest values come from. Both are true, and reading it well means refusing to let either one cancel the other. (For the man behind it, [Nietzsche](/philosophy/thinker/nietzsche); for the debt to his first master, [Schopenhauer](/philosophy/thinker/schopenhauer).)"
        }
      ]
    }
  ]
}
