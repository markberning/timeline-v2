// Opus AUTHOR draft of J.S. Mill's *Utilitarianism* (1863) WORK read (Step 2 of
// audits/philosophy-content-pipeline.md, kind = WORK). Walks the book chapter by
// chapter; does NOT restate the Mill thinker page (/philosophy/thinker/mill), which
// it goes deeper than. PhiNarr shape identical to hume-enquiry-work.read.ts; the
// reader at /philosophy/work/utilitarianism renders it.
//
// Quote doctrine: every quoted line is verbatim public-domain Mill, string-matched
// at authoring time against the standard PD text (Gutenberg ebook 11224, 4th ed.
// 1871, cross-checked on Wikisource), cited by chapter. Mill wrote in English; there
// is no translation question. Companion: utilitarianism-work-fact-ledger.md.

import type { PhiNarr } from '@/components/philosophy-reader'

export const UTILITARIANISM_WORK: PhiNarr = {
  "title": "Mill's Utilitarianism",
  "throughline": "Mill wrote a short book to rescue an idea from its cartoon. The idea was old: the right act is the one that produces the most happiness, counting everyone equally. The cartoon was that this reduced morality to a swinish chase after pleasure, a calculating machine with no room for nobility or rights. Over five short chapters Mill answers the charge. He distinguishes higher pleasures from lower ones and lets the people who have tasted both be the judges; he explains what could possibly motivate anyone to obey such a standard; he offers a notorious one-paragraph 'proof' that happiness is the thing all conduct aims at, a proof critics have been picking apart ever since; and in the long final chapter he absorbs the hardest case of all, justice, showing that our fiercest sense of rights and desert is not a rival to utility but utility's most important branch. The book is the most influential defense of consequentialist ethics ever written, and it is barely sixty pages.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/9/99/John_Stuart_Mill_by_London_Stereoscopic_Company%2C_c1870.jpg",
    "cap": "John Stuart Mill, photographed by the London Stereoscopic Company around 1870. *Utilitarianism* first ran as three articles in *Fraser's Magazine* in 1861 and appeared as a book in 1863, written to defend and refine the greatest-happiness principle he had inherited from his father James Mill and from [Bentham](/philosophy/thinker/bentham).",
    "alt": "Photographic portrait of John Stuart Mill, an older clean-shaven man in a dark coat",
    "portrait": true
  },
  "hook": [
    "Utilitarianism had a public-relations problem, and Mill set out to fix it. The doctrine he grew up inside, the one his father and [Bentham](/philosophy/thinker/bentham) had built, said something blunt and powerful: an action is right insofar as it tends to produce happiness and wrong insofar as it tends to produce the reverse, with everyone's happiness weighed equally and no one's counting for more. Stated that baldly it invited a sneer. Critics heard a philosophy fit for animals, a creed that made pleasure the whole of life and turned morality into arithmetic. Mill's little book, three magazine articles in 1861 gathered as a volume in 1863, is the answer to the sneer.",
    "It is not a treatise. It is a defense lawyer's closing argument, organized around the objections rather than around a system. Chapter 1 clears the ground. Chapter 2 states the principle and spends most of its length on the swine objection, answering it with the move the book is most famous for, the claim that pleasures differ in kind and not just in amount. Chapter 3 asks what could ever make a person obey such a standard. Chapter 4 offers the proof, the single most attacked paragraph Mill ever wrote. Chapter 5, the longest and the best, takes on justice, the place where everyone expects utilitarianism to break.",
    "What holds it together is a refusal to let the doctrine be caricatured into something stupid. The utilitarianism Mill defends has higher pleasures in it, and rights, and the whole apparatus of justice; it is not the ends-justify-any-means machine of the cartoon. The cost of all that refinement is a book that never quite sits still, forever qualifying, conceding, distinguishing. Bentham had been content with one kind of pleasure and a calculus. Mill, who had a nervous breakdown at twenty and climbed out of it partly through poetry, could not believe that pushpin was as good as poetry, and built the difference into the foundations.",
    "The result is the most influential statement of consequentialist ethics there is, the version every later moral philosopher argues with. It is also a book at war with itself in productive ways, smuggling in distinctions of quality that strict utilitarians say it has no right to, and resting the whole structure on a proof that has been called a textbook fallacy. Both the influence and the cracks are the point. Mill took the strongest objections to the idea and built his answers into the floor."
  ],
  "brk": {
    "beforeLabel": "Bentham's utilitarianism: one happiness, measured by quantity, summed by a calculus",
    "afterLabel": "Pleasures differ in kind; the competent judge decides; rights and justice are utility's core, not its rivals",
    "paragraphs": [
      "The view Mill inherited was clean and merciless. [Bentham](/philosophy/thinker/bentham) had reduced morality to a single principle and a single currency: maximize pleasure and minimize pain, with all pleasures treated as the same kind of thing, differing only in measurable dimensions like intensity and duration. Push-pin, a children's game, is as good as poetry if it yields as much pleasure. There is no higher and lower, only more and less, and the moral question becomes a sum. It was a deliberately flat doctrine, and its flatness was its strength: it let Bentham measure, compare, and reform, treating a beggar's pleasure as equal to a lord's.",
      "Mill keeps the foundation and rebuilds the middle floors. He had grown up the experiment of this philosophy, drilled in Greek at three by his father James Mill, and at twenty he collapsed into a depression in which the prospect of achieving every reform he had been raised to want left him feeling nothing. He came out of it through Wordsworth, through poetry and feeling, and never again believed that pleasures were all one kind. So *Utilitarianism* makes a change that strict Benthamites consider a betrayal: it grants that pleasures differ in *quality*, that some are intrinsically higher, and that a smaller amount of a higher pleasure can outrank a larger amount of a lower one. The cartoon of utilitarianism as a creed for swine is refuted by building nobility into the standard itself.",
      "The deeper break is in the final chapter, on justice. The standard charge against any happiness-maximizing ethics is that it would trample rights whenever the numbers favored it: convict an innocent to calm a mob, since the mob's relief outweighs one man's suffering. Mill's answer is not to bolt rights on from outside but to show that the sentiment of justice, the fierce conviction that some things may simply not be done to a person, is itself the expression of the most vital utilities of all, the securities without which no other good is safe. Justice is not the exception utilitarianism cannot handle. It is, in Mill's account, the part of utility that matters most."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "Why a first principle is missing",
      "epigraph": {
        "text": "\"There are few circumstances among those which make up the present condition of human knowledge, more unlike what might have been expected... than the little progress which has been made in the decision of the controversy respecting the criterion of right and wrong.\"",
        "attribution": "— J.S. Mill, *Utilitarianism*, Ch. 1 (1863)"
      },
      "blocks": [
        {
          "p": "[Mill](/philosophy/thinker/mill) opens with an embarrassment. After more than two thousand years, philosophy still has no agreed answer to the most basic moral question there is: what makes a right action right? The sciences have a settled core that everyone builds on; ethics does not. Mill marks the strangeness flatly, that of all the parts of human knowledge, the one showing the least progress is the controversy over the criterion of right and wrong. People argue endlessly about particular duties, yet cannot say what the duties are duties *to*, what the underlying standard is that makes anything a duty at all."
        },
        {
          "p": "The problem is the absence of a first principle. Mill's point is that all the confident moralizing in the world floats free unless something anchors it. There ought, he says, to be some one fundamental law at the root of all morality, or if there are several, a settled order of precedence among them and a rule for deciding when they conflict, and that rule ought to be self-evident. None of the going systems supplies it. They lay down rules and call them obvious, but when two rules collide they have no way to adjudicate, because they never identified the deeper standard the rules were serving. A list of commandments is not an ethics; it is an ethics waiting for its principle."
        },
        {
          "p": "Mill's claim is that the principle has in fact been operating all along, unacknowledged. Even the moralists who loudly reject utility, who say the right has nothing to do with consequences, secretly smuggle happiness back in whenever they have to defend a particular rule, because in the end the only argument for keeping promises or telling the truth that anyone finds persuasive is what would happen if we did not. The greatest-happiness principle, he argues, is the tacit standard under the surface of every system, including the systems that disown it. The book's job is to drag that standard into the open, state it precisely, and defend it against the objections that have kept people from owning it."
        },
        {
          "p": "Mill is careful at the outset about what kind of defense is possible. A first principle of conduct cannot be *proved* in the way a theorem is proved, by deriving it from something more basic, because there is nothing more basic to derive it from. That is what makes it a first principle. What can be offered instead is something weaker and more honest: considerations capable of determining the intellect to give or withhold its assent, a rational case that falls short of demonstration. He flags this limit early so that the famous proof in Chapter 4 is read for what it is, not a geometric deduction but the most that the subject matter allows."
        }
      ]
    },
    {
      "num": 2,
      "title": "What utilitarianism is, and the doctrine worthy of swine",
      "epigraph": {
        "text": "\"It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied.\"",
        "attribution": "— J.S. Mill, *Utilitarianism*, Ch. 2 (1863)"
      },
      "blocks": [
        {
          "p": "Here is the doctrine, stated. \"The creed which accepts as the foundation of morals, Utility, or the Greatest Happiness Principle, holds that actions are right in proportion as they tend to promote happiness, wrong as they tend to produce the reverse of happiness.\" By happiness Mill means pleasure and the absence of pain; by unhappiness, pain and the loss of pleasure. The standard is not the agent's own happiness but the total, everyone's counted, the agent's no more than any other person's. An act's rightness is measured by its consequences for the general welfare, and by nothing else. That is the whole machine, and almost everything in the chapter is the defense of it against a single recurring sneer."
        },
        {
          "p": "The sneer is the oldest one in the book. To make pleasure the foundation of morals, critics said, is to teach \"a doctrine worthy only of swine, to whom the followers of Epicurus were, at a very early period, contemptuously likened.\" If the good life is the pleasant life, then a contented pig is living it perfectly, and a philosophy that cannot rank a man above a happy animal has disqualified itself. Mill takes the objection seriously rather than waving it off, and his answer is the single most important move in the book, the thing that separates his utilitarianism from Bentham's."
        },
        {
          "p": "The answer is that pleasures differ in **quality**, not merely in quantity. Bentham had counted only how much: intensity, duration, how many people. Mill insists that some kinds of pleasure are intrinsically more valuable than others, that the pleasures of intellect, feeling, imagination, and moral sentiment stand above the pleasures of mere sensation, and that this superiority is one of kind, so that no quantity of the lower can simply buy out the higher. A life of pushpin is not redeemed by piling up more pushpin. The swine objection assumes there is one currency of pleasure; Mill's reply is that there are denominations, and the higher ones do not convert into the lower at any exchange rate."
        },
        {
          "p": "The obvious challenge is who gets to say which pleasures are higher, and Mill's answer is a test, not a decree. \"Of two pleasures, if there be one to which all or almost all who have experience of both give a decided preference, irrespective of any feeling of moral obligation to prefer it, that is the more desirable pleasure.\" The verdict belongs to the **competent judges**, the people who have actually tasted both kinds and so are in a position to compare. And those judges, Mill claims, reliably prefer the higher: a person who has known both the pleasures of the mind and the pleasures of the body will not consent to sink into the lower life even for a much larger ration of its pleasures, because doing so would mean giving up a faculty they are not willing to lose. The preference is not moralizing imposed from outside; it is the considered choice of those who know."
        },
        {
          "p": "This is the chapter's most quoted line and its sharpest form of the argument: \"It is better to be a human being dissatisfied than a pig satisfied; better to be Socrates dissatisfied than a fool satisfied. And if the fool, or the pig, are of a different opinion, it is because they only know their own side of the question.\" The fool and the pig are content because they cannot conceive of what they are missing; the human being and [Socrates](/philosophy/thinker/socrates) feel the dissatisfaction precisely because their faculties reach for more than the lower life can supply. A being with higher capacities requires more to be happy and is exposed to more acute suffering, yet would never trade down, because to trade down is to become a lesser kind of thing. The reply to the swine objection is complete: utilitarianism does not flatten Socrates and the pig, it ranks them, and it does so on the testimony of those who have lived both."
        },
        {
          "p": "Two further objections get crisp answers. The first says the standard is too high for humanity, that it is asking too much to require people always to act for the good of the world. Mill replies that this confuses the standard of rightness with the motive of the actor. The general happiness is the test of whether an act is *right*; it need not be the thing the agent is consciously thinking about. \"He who saves a fellow creature from drowning does what is morally right, whether his motive be duty, or the hope of being paid for his trouble.\" Ninety-nine acts in a hundred concern only the people immediately around us, and attending to them well is all morality demands; nobody is required to keep the welfare of the species in mind at every moment."
        },
        {
          "p": "The second objection says there is no time, in the rush of action, to calculate the effects of each choice on the general happiness. Mill answers that this mistakes the standard for a procedure to be run fresh each time. Mankind has had the entire history of the species to learn the tendencies of actions, and the result of that long experience is exactly the body of ordinary moral rules, that lying corrodes trust, that cruelty wounds, that promises must be kept. Those rules are the inherited conclusions of utility, the corollaries already worked out, and one consults them in the moment rather than recomputing from scratch. \"Nobody argues that the art of navigation is not founded on astronomy, because sailors cannot wait to calculate the Nautical Almanack.\" The sailor uses the almanac, already computed; the moral agent uses the secondary rules, already established. The principle of utility is the astronomy underneath, not a sum to be done on deck in a storm."
        }
      ]
    },
    {
      "num": 3,
      "title": "What makes anyone obey",
      "epigraph": {
        "text": "\"The internal sanction of duty, whatever our standard of duty may be, is one and the same—a feeling in our own mind; a pain, more or less intense, attendant on violation of duty.\"",
        "attribution": "— J.S. Mill, *Utilitarianism*, Ch. 3 (1863)"
      },
      "blocks": [
        {
          "p": "A standard is one thing; a reason to live by it is another. Chapter 3 asks what gives the greatest-happiness principle any hold on a person, what its **sanctions** are, meaning the sources of motive and obligation that bind people to a moral rule at all. The question presses harder on utilitarianism than on a customary morality, because the duty to promote the general happiness can feel like an abstract import, less gripping than the familiar commandments people were raised on. Mill's task is to show that utilitarianism can draw on exactly the same motivating forces as any other moral creed, and on one in particular that he thinks is decisive."
        },
        {
          "p": "The sanctions divide into external and internal. The **external** ones are the ordinary levers: the hope of favor and the fear of displeasure from other people and, for those who believe, from God, along with the sympathy and affection we feel for others. These attach to utilitarian morality as readily as to any other; there is nothing in the greatest-happiness principle that society's approval and disapproval cannot be trained to enforce. But external sanctions are not the heart of obligation, because a person can escape the eyes of others, and the question is what binds in private, when no one is watching."
        },
        {
          "p": "That is the **internal sanction**, and it is conscience. Mill defines it without mystification: it is a feeling in the mind, a pain, more or less intense, that attends the violation of duty, which in any person of decent moral nature rises into a real obstacle the wrong act has to break through. The force of conscience is not its supposed origin in some external authority but the actual mass of feeling behind it, a tangle of sympathy, memory, self-respect, and fear that has gathered around the idea of duty over a life. Where that feeling is strong, it restrains; where it is weak, no doctrine restrains very well. This is the ultimate sanction of all morality whatever, not of utilitarianism in particular, and the utilitarian standard can recruit it as fully as any rival."
        },
        {
          "p": "The natural worry is that conscience built this way is merely planted, a product of upbringing that dissolves the moment a person sees through it. Mill grants frankly that the moral feelings are not innate but acquired, and refuses to treat that as fatal. Acquired faculties can be perfectly natural in their growth, the way speech and reason are; and the feeling of unity with one's fellow creatures, the deep-seated wish to be at one with those around us, is a firm foundation for utilitarian morality because it strengthens as civilization advances and people grow ever more bound up in each other's lives. The basis of obligation is not a metaphysical fact about the universe but a fact about human beings as social creatures, and Mill thinks that basis grows sturdier, not weaker, the more clearly it is understood."
        }
      ]
    },
    {
      "num": 4,
      "title": "The proof, and the famous flaw",
      "epigraph": {
        "text": "\"The only proof capable of being given that an object is visible, is that people actually see it. The only proof that a sound is audible, is that people hear it.\"",
        "attribution": "— J.S. Mill, *Utilitarianism*, Ch. 4 (1863)"
      },
      "blocks": [
        {
          "p": "Mill had said in Chapter 1 that a first principle cannot be proved in the strict sense, yet Chapter 4 is titled as a proof, and the tension is deliberate. What he offers is the strongest case the subject allows, not a deduction from something prior but an appeal to the only kind of evidence available for what is ultimately desirable. The question the chapter must answer is the one underneath everything: granting that utilitarianism makes happiness the criterion, what reason is there to believe that happiness is in fact the thing that *is* desirable, the proper end of conduct? The proof is barely a paragraph, and it has been argued over ever since."
        },
        {
          "p": "The argument runs by analogy with the senses. \"The only proof capable of being given that an object is visible, is that people actually see it. The only proof that a sound is audible, is that people hear it: and so of the other sources of our experience.\" For the things given through the senses, the test of whether something can be perceived just *is* whether it is perceived; there is no higher court. Mill then applies the same form to value: \"In like manner, I apprehend, the sole evidence it is possible to produce that anything is desirable, is that people do actually desire it.\" The proof that happiness is desirable is that people desire it, and that each person desires their own happiness is, he says, a fact as certain and universal as anything in psychology."
        },
        {
          "p": "From the part he builds to the whole. Each person desires their own happiness; therefore each person's happiness is a good to that person; therefore the general happiness, the sum of all these, is a good to the aggregate of all persons. \"No reason can be given why the general happiness is desirable, except that each person, so far as he believes it to be attainable, desires his own happiness.\" Happiness has thus made out its claim to be *one* of the ends of conduct, and so one of the criteria of morality. Mill goes further in the chapter, arguing that happiness is not merely one end among others but the *whole* of the end, since the other things people seem to desire for themselves, virtue, money, music, are desired as parts of happiness or as means that have grown into parts of it."
        },
        {
          "p": "This paragraph is the most attacked thing Mill ever wrote, and the charge is that the analogy hides two slides. The first: \"visible\" means *able* to be seen, but Mill's parallel for \"desirable\" is treated as *able* to be desired, when the word he actually needs means *worthy* of being desired, *ought* to be desired. That something is in fact desired shows only that it *can* be desired; it does not show that it *should* be, and the proof needs the second to get an ethics off the ground. Sliding from what is desired to what is desirable is, in the standard verdict, a move from fact to value that the senses analogy quietly disguises. The English philosopher G.E. Moore later made this the textbook example of the naturalistic fallacy, defining a value in terms of a natural fact."
        },
        {
          "p": "The second alleged slide is the jump from each to all. Even granting that every person desires their own happiness, it does not follow that anyone desires the *general* happiness, the sum; that each part is desired by its owner is not the same as the whole being desired by anyone, and certainly not the same as the whole being *good*. Mill's defenders argue the passage is more careful than its critics allow, that he is offering not a deduction but exactly the looser kind of rational consideration he promised in Chapter 1, evidence to incline the intellect rather than to compel it. The fairest reading is that both are true at once: the proof does not work as a strict argument, and Mill never claimed it would, yet it has functioned for over a century as the place every student first meets the gap between *is* and *ought*."
        }
      ]
    },
    {
      "num": 5,
      "title": "Justice, the hardest case",
      "epigraph": {
        "text": "\"Justice remains the appropriate name for certain social utilities which are vastly more important, and therefore more absolute and imperative, than any others are as a class.\"",
        "attribution": "— J.S. Mill, *Utilitarianism*, Ch. 5 (1863)"
      },
      "blocks": [
        {
          "p": "The final chapter is the longest, the most carefully built, and the one Mill plainly regards as decisive, because justice is where utilitarianism is supposed to die. The feeling that justice is sacred, that some things are simply owed to a person and may not be taken away no matter what good would come of it, seems to point at a standard entirely unlike utility, something absolute that does not bend to consequences. If there is a real, independent principle of justice, then happiness is not the foundation of morals after all. Mill's whole strategy is to show that the powerful and seemingly separate sentiment of justice is itself a department of utility, the most important one."
        },
        {
          "p": "He works by first asking what justice actually picks out, surveying the things called just and unjust, respecting legal rights, respecting moral rights, giving people their deserts, keeping faith, treating people impartially, and looking for the common thread. What he finds is the notion of a **right** held by an assignable person. \"Justice implies something which it is not only right to do, and wrong not to do, but which some individual person can claim from us as his moral right.\" This is what separates justice from the rest of morality. Generosity is good, but no particular person can *claim* my generosity as their due; a creditor can claim repayment. Justice is the part of morality concerned with what individuals can demand, and where there is a right, there is someone with a valid claim that society back them up. \"To have a right, then, is, I conceive, to have something which society ought to defend me in the possession of.\""
        },
        {
          "p": "Then the utilitarian question: why ought society to defend it? Mill's answer is **security**. The interests that justice protects, against being robbed, defrauded, attacked, betrayed, are not ordinary interests that can be traded against others on the scale. They are the precondition of having any settled good at all. \"Security no human being can possibly do without; on it we depend for all our immunity from evil, and for the whole value of all and every good, beyond the passing moment.\" Without it nothing else can be relied on, since the next stronger person could strip away everything a moment's pleasure had gained. Because security is the most vital of all interests, the rules that protect it carry a feeling of absoluteness, an urgency and a force entirely different in degree from ordinary considerations of expediency. That feeling of difference is real, and it has made people think justice is different in *kind*. Mill's claim is that it is different in degree, the degree being so great it feels like a difference in kind."
        },
        {
          "p": "The sentiment of justice itself gets the same treatment, taken apart into components that are not themselves moral until utility binds them together. There is the natural desire to retaliate against a hurt, drawn from the animal impulse of self-defense and sympathy, and there is the wider human capacity to feel that impulse on behalf of anyone, not just oneself. The bare desire to punish is not yet a sense of justice; it becomes moral only when it is enlisted in the service of the general good, when the hurt one resents is resented as a hurt to the shared securities everyone depends on. So the towering intensity of the feeling of justice, its air of something sacred and beyond calculation, is the animal thirst for retaliation harnessed to the most important of all social utilities. The fierceness is the retaliatory instinct; the morality is the utility it has been yoked to."
        },
        {
          "p": "This is why the standard nightmare case does not refute the doctrine the way it is supposed to. Condemning an innocent person to satisfy a crowd seems to be just the act utilitarianism would command and justice would forbid, the place where counting heads runs over a human being. Mill's framework answers that the security of the innocent against exactly this is among the most vital utilities there is, so a morality that took it seriously could not license the sacrifice without destroying the very interest that gives rules their weight; the apparent gain is bought by gutting the thing all gains depend on. Justice, for Mill, is not a brake on utility imported from outside. It is the name for the social utilities so essential that they are felt as rights, and a utilitarianism that understood itself would guard them more jealously than anything else. \"Justice remains the appropriate name for certain social utilities which are vastly more important, and therefore more absolute and imperative, than any others are as a class.\""
        },
        {
          "p": "The same instinct runs through Mill's other work. The defense of individual liberty he built with Harriet Taylor in [On Liberty](/philosophy/work/liberty), the harm principle that walls off a region of the self the state may not invade, is the political face of the same conviction: that certain securities are so fundamental to any worthwhile life that they function as near-absolutes, even inside a philosophy that in the end measures everything by happiness. The cartoon utilitarian counts heads and tramples the one for the many. Mill's utilitarian, having seen that the trampling destroys the securities on which every head's happiness rests, refuses, on grounds of utility itself."
        }
      ]
    }
  ]
}
