// Opus AUTHOR draft of Thomas Aquinas's *Summa Theologica* WORK read (Step 2 of
// audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/summa-fact-ledger.md (+ cross-ref the era-2
// "Faith meets reason" fact pack, which it must not contradict). This is the
// work-level deep read below the AQUINAS thinker read; the five critic gates + the
// structural gates run against THIS file before it ships. PhiNarr shape is identical
// to cityofgod.ts / nicomachean.ts; the reader at /philosophy/work/summa renders it.
//
// Quote doctrine: every quoted line is the public-domain Fathers of the English
// Dominican Province translation (1911–1925 / 1920 revision), as served by
// newadvent.org/summa, fetched word-for-word and matched in the fact ledger — never a
// modern in-copyright translation (Blackfriars / Freddoso / McDermott are blacklisted).
// Each quote carries its ST citation (Part, Question, Article). PARAPHRASE-ONLY items —
// the natural-law definition (I-II Q90 A4), the first precept of natural law
// (I-II Q94 A2), the happiness/beatitude summary (I-II QQ1–5), and the Q90 "treatise on
// law" framing — never appear inside quotation marks. The "all that I have written seems
// like straw to me" remark ships as reported biographical tradition (via Reginald of
// Piperno), NEVER as a Summa quotation. Image URLs are HTTP-checked in the ledger; the
// hero is the genuinely-PD Crivelli panel (portrait: true; integrator may want a 2-up).

import type { PhiNarr } from '@/components/philosophy-reader'

export const SUMMA: PhiNarr = {
  "title": "Aquinas's Summa Theologica",
  "throughline": "It is the largest argument anyone in the Middle Ages ever attempted: a single book that tries to lay out everything a Christian can say about God, the world, and the human person, and to do it by *reasoning*, point against counter-point, with the newly recovered logic of Aristotle in one hand and the Bible in the other. The driving conviction underneath it is that faith and reason can never really contradict each other, because both come from the same God. Aquinas never finished it. After thirteen years and thousands of arguments, he stopped one day in December 1273, said he could write no more, and was dead within months. What he left behind became the official philosophy of the Catholic Church.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Thomas_Aquinas_by_Carlo_Crivelli.png/960px-Thomas_Aquinas_by_Carlo_Crivelli.png",
    "cap": "Carlo Crivelli, *St Thomas Aquinas* (c. 1476). Thomas is shown in the black-and-white habit of the Dominican order, holding a book and a model church, the standard emblems of a teaching friar of the Church.",
    "alt": "A Renaissance devotional panel of a tonsured friar in a black-and-white habit, holding an open book in one hand and a small model church in the other, against a gold ground",
    "portrait": true
  },
  "hook": [
    "The ambition is almost comic in its size: not a topic, not a treatise, but a single book that writes down the whole of what can be said about God, creation, angels, the soul, law, virtue, sin, grace, happiness, and the life of Christ, organized so that every claim is argued and every obvious objection is answered first. That is roughly what Thomas Aquinas set out to do in the *Summa Theologica*, and the strange thing is how close he came. The book runs to thousands of separate arguments across three enormous parts, and it is built to be read by a beginner: Aquinas says in the opening lines that he is writing for *beginners* in theology, a fact that says a great deal about how high the standards were.",
    "The Latin title means \"a summary of theology,\" which is one of history's great understatements, because the *Summa* is anything but short. *Summa* in the medieval schools meant a comprehensive textbook that gathered a whole field into one ordered structure, and Aquinas wrote his between roughly 1265 and 1274. The word \"theology\" (the study of God, and of everything else in relation to God) sets the subject; the method is what makes it famous. Every question in the book is settled the same way, by a small machine of argument that runs objections against a counter-claim and then a verdict, over and over, for a length that has to be seen to be believed.",
    "The man building it was a Dominican friar named Thomas Aquinas (c. 1225 to 1274), born to a noble family in southern Italy and trained in the new university world of the thirteenth century. The Dominicans were a recently founded order of preaching friars, committed to study and teaching, and Aquinas became their greatest mind and one of the most relentless thinkers the West has produced. His nickname among contemporaries was \"the dumb ox,\" from his bulk and his silence as a student; his teacher Albert the Great is supposed to have said that the bellowing of this ox would one day be heard around the world.",
    "Behind the whole project was a problem that was tearing at the universities of his day. The complete works of Aristotle, the greatest philosopher of the ancient world, had recently come flooding back into Latin Europe after centuries of being mostly lost to it, and they came carrying a fully worked-out account of nature, the soul, and reasoning that owed nothing to Christianity and in places seemed to flatly contradict it. To some churchmen Aristotle was a threat to be banned. To Aquinas he was a gift, the sharpest tool reason had ever produced, and the task was not to fight him but to *use* him: to show that the best pagan philosophy and the Christian faith, rightly understood, fit together. The *Summa* is that demonstration, carried out across an entire worldview.",
    "And the conviction holding it all up is a single, confident claim that the rest of the book exists to prove in detail. Faith and reason cannot truly contradict each other, Aquinas held, because both come from God, who is the one source of all truth and does not lie to himself. Reason can travel a long way on its own, all the way to knowing that a creator exists. Some things, like the Trinity, reason cannot reach and only revelation can give. But the two never collide, and where they seem to, someone has reasoned badly. That is the bet of the entire *Summa*: that the whole of Christian doctrine can be run through the hardest available logic, and it will hold."
  ],
  "brk": {
    "beforeLabel": "Believe first, so that you may understand; reason serves a faith it cannot question",
    "afterLabel": "Faith and reason can never contradict, because both come from God; so reason them out together",
    "paragraphs": [
      "The view Aquinas was working against deserves its strongest form, because it was held by the greatest mind of the previous Christian age. Augustine of Hippo (354 to 430, the towering theologian of the late Roman world, whose [City of God](/philosophy/work/cityofgod/read) is its own read) had set the tone for eight hundred years with a phrase: \"believe so that you may understand.\" The order matters. One starts from faith, accepts what the Church teaches on God's authority, and *then* understanding deepens from the inside. Reason is a servant of faith, useful for explaining and defending what is already believed, but it does not stand outside faith and judge it. This was not anti-intellectual. Augustine reasoned brilliantly. But reason for him moved within the circle of belief; it did not get a vote on whether the circle was true.",
      "Through the early Middle Ages this settled into a wider habit of keeping the two apart. Theology was its own thing, drawn from Scripture and the Church Fathers (the revered Christian writers of the first centuries). Philosophy, what little survived of it, was a separate and lesser business. And then the recovered Aristotle made keeping them apart impossible, because here was a complete philosophy, built by pure reason, that made claims about the very same subjects theology cared about: the soul, the cosmos, cause and effect, the highest good. Some of it lined up with Christian teaching. Some of it seemed to deny it outright, including the eternity of the world and a soul that might not survive the body. The two could no longer sit in separate rooms.",
      "Aquinas's break is to deny that they were ever really in separate rooms at all. Truth is one, he insists, because God is one, and God is the author both of the natural light of reason and of the supernatural light of revelation. So a conclusion reached by sound reasoning and a truth delivered by revelation cannot finally conflict; if they appear to, the reasoning is flawed or the revelation has been misread. This lets him do the thing no one had dared at this scale: take Aristotle's logic, his categories, his whole apparatus, and turn it loose on Christian doctrine, not to test whether the doctrine is true (faith settles that) but to *understand* it, defend it, and show its inner order. The concrete move is in a single sentence of the *Summa*'s opening question: \"grace does not destroy nature but perfects it.\" Reason is not the enemy of faith that grace has to overrule. Reason is part of the nature that grace completes. So reason runs through everything as far as it can, and where reason runs out, revelation takes over, and the two are building the same cathedral."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The dumb ox and the dangerous philosopher",
      "epigraph": {
        "text": "\"Since therefore grace does not destroy nature but perfects it, natural reason should minister to faith.\"",
        "attribution": "— Aquinas, *Summa Theologica* I, Q1, A8, trans. Fathers of the English Dominican Province"
      },
      "blocks": [
        {
          "p": "Thomas Aquinas was born around 1225 into a noble family near the town of Aquino, in the south of Italy, and his family had plans for him. He was sent young to the great Benedictine monastery of Monte Cassino, the kind of placement that could end with a relative running a powerful and wealthy abbey. Instead, studying at the new university in Naples, Thomas fell in with the Dominicans, a young order of friars who owned nothing, begged for their food, and lived to preach and study. He joined them. His family was appalled enough to kidnap him and hold him for the better part of a year to talk him out of it. He did not budge, and in time they gave up, and the future abbot became a mendicant friar instead."
        },
        {
          "p": "As a student he was large, heavy, and quiet, and his classmates took the silence for slowness and nicknamed him \"the dumb ox.\" The story goes that his teacher, the formidable scholar Albert the Great, heard the mockery and said that this ox would one day bellow so loud the whole world would hear him. Whether Albert said it in those words or not, the judgment was right. Aquinas turned out to have one of the most orderly and powerful minds in the history of thought, able to hold an enormous structure of argument in view all at once, and a working capacity that strains belief: he is reported to have dictated to several secretaries at the same time, on different topics, keeping every thread straight."
        },
        {
          "p": "He came of age inside a crisis that would define his life's work. For centuries the Latin-speaking West had known only fragments of Aristotle (384 to 322 BCE), the ancient Greek philosopher whose work covered nearly every field there was, from logic to biology to ethics. Most of his writings had survived elsewhere: preserved, translated, and extended in the Arabic-speaking world by thinkers like Avicenna and Averroes, and now, in the twelfth and thirteenth centuries, pouring into Europe in fresh Latin translations. Suddenly Aristotle was available whole, and what he offered was overwhelming: a complete, rigorous account of the natural world and of human reasoning, worked out without any reference to the Bible, and in many places more impressive than anything Christian scholars had produced on the same questions."
        },
        {
          "p": "That was the danger. Aristotle reasoned to conclusions that sat badly with Christian faith. He seemed to teach that the universe had always existed, with no creation in time. He gave an account of the soul that left it unclear whether anything personal survived death. And his Arabic interpreters had pushed some of these further still. The reaction in the schools was alarm; at the University of Paris the church authorities repeatedly tried to ban the teaching of Aristotle's natural philosophy outright. The new logic looked like a solvent that might dissolve the faith. For many serious churchmen, the safe course was to wall it off."
        },
        {
          "p": "Aquinas took the opposite view, and it is the founding decision of the *Summa*. Aristotle was not a threat to be quarantined but the best instrument reason had ever built, and a good Christian should pick it up and use it. Throughout his work Aquinas refers to Aristotle simply as \"the Philosopher,\" the way one might say \"the Champion,\" and cites him constantly. His wager was that truth does not fight truth. The principle is stated flat in the *Summa*'s very first question: \"Since therefore grace does not destroy nature but perfects it, natural reason should minister to faith.\" Grace (God's saving help) does not cancel nature; it brings nature to its full height. Reason is part of the nature God made, so reason serves faith not as a slave serves a master but as a foundation serves the building raised on it. The job, then, was not to defend the faith *from* philosophy. It was to think the faith *through* with the best philosophy going. That job became the *Summa Theologica*."
        }
      ]
    },
    {
      "num": 2,
      "title": "The machine: how a Summa article works",
      "epigraph": {
        "text": "\"It seems that… On the contrary… I answer that… Reply to Objection.\"",
        "attribution": "— the four moves of every article in the *Summa Theologica*"
      },
      "blocks": [
        {
          "p": "To read the *Summa* at all, the first thing to understand is not a doctrine but a *form*, because the whole book is built out of one small unit repeated thousands of times. That unit is the **article**, and every article asks a single yes-or-no question and settles it the same way, in four moves. The questions are tiny and exact: not \"what is God like?\" but \"whether God exists,\" \"whether God is composed of matter and form,\" \"whether it is lawful to kill a man in self-defence.\" The book advances by chopping every huge subject into hundreds of these narrow questions and grinding through each one. The structure is the scholastic method (the highly formal style of argument taught in the medieval universities, the *schools*, from which \"scholastic\" comes) at its most disciplined."
        },
        {
          "p": "The four moves run in a fixed order, and the order is the clever part. First come the **objections**, and here is the twist that makes the method honest: an article opens by arguing *against* the position Aquinas is going to defend. Each objection begins \"It seems that\" (in his Latin, *videtur quod*) and lays out, as strongly as it can, the case for the other side, often quoting Scripture, Aristotle, or earlier authorities in support of the wrong answer. Aquinas states his opponents' best arguments first, in their strongest form, before he has said a word in his own defence. A bad version of an objection would be easy to knock down; the method forbids it, because the objections are there to be genuinely reckoned with."
        },
        {
          "p": "The second move flips the room. After the objections comes the line \"On the contrary\" (in Latin *sed contra*), which produces a single weighty authority or argument on the *other* side, the side Aquinas actually holds, usually a verse of Scripture or a line from a Father or from \"the Philosopher.\" It is a hinge, a brief signal that the tide is about to turn. Then comes the heart of the article, the third move: \"I answer that\" (in Latin *respondeo dicendum*, \"I respond that it must be said\"). This is Aquinas's own determination of the question, his reasoned verdict, where he lays out the true position and the argument for it in his own voice. The bulk of the thinking lives here."
        },
        {
          "p": "And then the fourth move, which is what keeps the whole thing from being a lecture: the **replies to the objections**. Having given his answer, Aquinas goes back to each of the opening objections, one by one, and shows exactly where it went wrong, often by drawing a distinction (granting that the objection is right in one sense while false in the sense that matters). He does not get to ignore the strong case he made against himself at the start. He has to dismantle it, piece by piece, on the record. An article, then, is a complete little trial: prosecution first, at full strength, then a key witness for the defence, then the judge's reasoned ruling, then a point-by-point answer to every charge the prosecution raised."
        },
        {
          "p": "The form matters as much as any single conclusion in the book, and it is worth seeing why rather than skipping past it as mere style. It builds in fairness as a rule, not a courtesy: no position can be held in the *Summa* without first stating the best arguments against it and answering them. It makes the reasoning visible, every step exposed, so a reader can see precisely where an argument turns and disagree at the exact joint. And it is teachable, which is the point, since Aquinas wrote for beginners; a student learns not a list of answers but a way of arguing, a habit of meeting the other side at its strongest. The famous caricature of medieval thought is hair-splitting monks debating how many angels can dance on the head of a pin. No medieval text actually asks that question; it was invented centuries later to mock the schools. What the schools really did was this article-machine, and run honestly, at scale, it is one of the most rigorous instruments of thought the West ever devised."
        }
      ]
    },
    {
      "num": 3,
      "title": "The architecture of everything",
      "epigraph": {
        "text": "\"Because the chief aim of sacred doctrine is to teach the knowledge of God, not only as He is in Himself, but also as He is the beginning of things and their last end.\"",
        "attribution": "— Aquinas, *Summa Theologica* I, Q2, prologue, trans. Fathers of the English Dominican Province"
      },
      "blocks": [
        {
          "p": "Out of that one small unit, the article, Aquinas built something vast and deliberately shaped. The articles are gathered into **questions** (a question is a cluster of related articles on one topic), the questions into long treatises, and the treatises into three great **parts**. Scholars count roughly 512 questions and around three thousand articles in all, which gives some sense of the scale; reading the whole *Summa* straight through is the work of months. But the size is not a heap. The three parts trace a single grand circle, and the shape is the argument: everything comes *from* God and everything returns *to* God, and the human person is the creature who can make that return freely."
        },
        {
          "p": "The **First Part** (the *Prima Pars*) is about God and the going-out of all things from God. It opens with God's own existence and nature (this is where the Five Ways sit, Chapter 4), then God as three persons in one (the Trinity), then creation: the angels, the physical universe, and finally the human being, body and soul together, the hinge between the spiritual and material worlds. The First Part is the source of everything, the outflow. It answers where it all came from."
        },
        {
          "p": "The **Second Part** is the longest, and it is about the human person's journey *back* to God, which means it is about action, and it is the moral heart of the book. It is so large that it splits in two. The first half (called the *Prima Secundae*, the \"first part of the second part\") handles the general machinery of the moral life: the final end that all human action aims at (happiness, which Aquinas locates ultimately in God), then human acts, the passions, habits, virtue and vice, and law and grace. The second half (the *Secunda Secundae*, the \"second part of the second part\") gets specific, working through the individual virtues one at a time, faith, hope, charity, prudence, justice, courage, temperance, and the states of life. Aquinas on how to live is the Second Part, start to finish."
        },
        {
          "p": "The **Third Part** (the *Tertia Pars*) is about Christ, the way back made flesh: the Incarnation (God becoming a human being), the life of Christ, and the sacraments (the Church's sacred rites, like baptism and the Eucharist, through which grace reaches people). Christ is the bridge home, the road by which the journey of the Second Part is actually completed. The circle was meant to close here: out from God in the First Part, the long human road back in the Second, and in the Third the one who makes the road passable. The book's own prologue states the plan plainly: the aim is to know God \"not only as He is in Himself, but also as He is the beginning of things and their last end.\" Beginning and end, source and return, the whole of reality on a single arc."
        },
        {
          "p": "There is one large fact about this architecture that the rest of the read keeps coming back to: the Third Part was never finished. Aquinas stopped writing partway through the treatment of the sacraments and never resumed (the reason is the story of the final chapter). The circle the book was built to complete was left open at the top. After his death, his followers patched the gap with a *Supplement*, assembled out of things Aquinas had written earlier in his career, so that the *Summa* could be read as a whole. But the seam shows, and it is worth knowing as a reader that the most ambitious book of the Middle Ages comes to the reader unfinished by its author's own hand."
        }
      ]
    },
    {
      "num": 4,
      "title": "The Five Ways",
      "epigraph": {
        "text": "\"The existence of God can be proved in five ways. The first and more manifest way is the argument from motion.\"",
        "attribution": "— Aquinas, *Summa Theologica* I, Q2, A3, trans. Fathers of the English Dominican Province"
      },
      "blocks": [
        {
          "p": "The single most famous passage in the *Summa* is short, and it sits early, in the First Part, Question 2, Article 3, under the question \"Whether God exists?\" True to the method, the article opens by arguing that God does *not* exist (two strong objections: that an all-good God is incompatible with the evil in the world, and that everything can be explained by nature and human reason without needing God). Then the hinge, \"On the contrary,\" quoting God's own words in Exodus, \"I am Who am.\" And then the answer, beginning with the line that has been quoted ever since: \"The existence of God can be proved in five ways.\" These are the **Five Ways**, five separate arguments that the world, looked at carefully, points beyond itself to God."
        },
        {
          "p": "The first three are variations on one powerful idea: that some chain of dependence in the world cannot go back forever, so it must start somewhere. The **first way**, from *motion* (which for Aquinas means any kind of change), notes that whatever is changing is being changed by something else; that mover is itself being moved by something further; and the series cannot stretch back infinitely with nothing to start it, or there would be no change at all. So there must be a first mover, itself unmoved, \"and this everyone understands to be God.\" The **second way** runs the same shape on *cause*: nothing causes itself, the chain of causes cannot regress forever, so there is a first cause, \"to which everyone gives the name of God.\" The **third way**, from *possibility and necessity*, argues that not everything can be the kind of thing that merely happens to exist and could just as easily not, or at some point nothing would have existed and nothing would exist now; so there must be something that exists necessarily, in its own right, \"This all men speak of as God.\""
        },
        {
          "p": "The last two change tack. The **fourth way**, from the *gradation* of things, observes that we rank things as more or less good, true, noble, and that grading by degrees implies a maximum, a best by which the rest are measured, \"and this we call God.\" The **fifth way** is the one most people meet first, the argument from *design* or governance: natural things that lack any intelligence of their own (Aquinas's example is an arrow) nonetheless act toward ends, hitting targets they cannot have aimed at themselves, the way an arrow is aimed by an archer. Something intelligent, then, must be directing nature toward its ends, \"and this being we call God.\" Five different roads, from change, cause, necessity, degree, and order, each ending at the same destination."
        },
        {
          "p": "What the Five Ways prove, and what they do not, is the thing most worth getting straight, because the arguments are routinely oversold and routinely dismissed for being oversold. Each one actually ends in a careful, narrow place: not \"and therefore the God of the Bible, three persons, who became man in Christ,\" but only \"and this we call God,\" \"this all men speak of as God.\" Each way argues that there must be a first mover, or a first cause, or a necessary being, or a highest standard, or an intelligent orderer, and then *names* that thing \"God.\" That is all a single way claims. They do not, on their own, deliver the full Christian God in one stroke, and Aquinas does not pretend they do. They are the opening move."
        },
        {
          "p": "The rest of the First Part is the follow-through, and skipping it is what makes the Five Ways look thinner than they are. Having argued in Question 2 *that* such a being exists, Aquinas spends the next dozen questions arguing what it must be *like*: that it is simple (not made of parts), perfect, infinite, unchanging, eternal, one. Step by careful step he reasons from \"there is a first cause\" toward the attributes of the God of faith, each attribute its own article, objections and all. So the Five Ways are not five knockdown blows that settle everything; they are the foundation course of a long building. They get reason to the doorstep, to a first and necessary and intelligent source of all things, and then the patient work of the *Summa* carries on from there. Taken for what they are, the start of an argument and not the whole of it, they are among the most influential five paragraphs in Western philosophy."
        }
      ]
    },
    {
      "num": 5,
      "title": "Where reason ends and revelation begins",
      "epigraph": {
        "text": "\"Since therefore grace does not destroy nature but perfects it, natural reason should minister to faith as the natural bent of the will ministers to charity.\"",
        "attribution": "— Aquinas, *Summa Theologica* I, Q1, A8, trans. Fathers of the English Dominican Province"
      },
      "blocks": [
        {
          "p": "The Five Ways raise the question the whole *Summa* is organized to answer: if reason can reach all the way to the existence of God, what is left for faith to do? A confident rationalist might say faith is a crutch for what reason has not yet figured out, and will shrink as knowledge grows. Aquinas's answer is more interesting and more carefully drawn. He divides the truths about God into two kinds. Some, like the existence of a creator and a few of the divine attributes, *can* be reached by natural reason alone, by anyone thinking hard enough, Christian or not. Others, like the Trinity (God as three persons in one) and the Incarnation (God becoming a human being in Christ), reason could never have discovered on its own, and these are known only because God revealed them."
        },
        {
          "p": "The dividing line is not a wall, and this is the point that makes Aquinas Aquinas. The two kinds of truth never contradict each other, because both come from the same God, who is truth itself and the single author of both the natural light of reason and the supernatural light of revelation. A sound argument and a revealed doctrine cannot finally collide. So where a piece of philosophy seems to contradict the faith, Aquinas does not retreat into \"faith just believes the impossible.\" He goes looking for the flaw in the reasoning, confident there is one, because truth does not fight truth. This is why he can let Aristotle loose on Christian doctrine without fear: a genuinely valid argument will never land on a conclusion that revelation denies."
        },
        {
          "fig": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Benozzo_Gozzoli_005.jpg",
          "cap": "Detail of Benozzo Gozzoli's *The Triumph of St Thomas Aquinas* (c. 1471, now in the Louvre). Thomas sits enthroned with open books, flanked by Aristotle and Plato, the pagan philosophers he put to Christian use; below him lies the figure of the Arab philosopher Averroes, whose reading of Aristotle Aquinas argued against. The painting is the synthesis made into a picture: the best of pagan reason gathered up and crowned inside the faith.",
          "alt": "A Renaissance painting: a robed friar enthroned with books on his lap, two ancient philosophers standing on either side of him, and a defeated reclining figure on the ground below"
        },
        {
          "p": "The relationship between the two is captured in the sentence that is the keystone of the whole book, from the very first question: \"Since therefore grace does not destroy nature but perfects it, natural reason should minister to faith as the natural bent of the will ministers to charity.\" The first clause is the famous one. Grace (God's saving help, lifting a person toward God) does not cancel or override nature; it *perfects* it, brings it to its full flourishing. Reason and the natural world are not a rival realm that grace has to crush. They are the foundation grace builds higher. And so, the sentence goes on, reason *ministers* to faith, serves it, the way a person's natural good impulses serve the higher love of God. Faith does not humiliate reason. It puts reason to work at the top of its powers."
        },
        {
          "p": "It helps to take this concretely, the way Aquinas himself reasons by example. A person can reason their way to the conclusion that the universe has a first cause, the way one of the Five Ways does, with no Bible at all; that is reason walking on its own legs as far as they go. But that same person, by reasoning alone, will never arrive at the doctrine that this one God is somehow three persons, Father, Son, and Spirit, because nothing in the structure of the world points there; that truth has to be told, revealed, received as a gift. Reason climbs the mountain to the point where the path runs out, and revelation carries on the rest of the way. The two stretches of road belong to the same journey and lead to the same summit, which is why faith and reason, for Aquinas, are partners and never enemies."
        },
        {
          "p": "This is the deepest thing the *Summa* is *for*, underneath all the articles. It is the case, argued at book length and in every direction, that a person does not have to choose between thinking honestly and believing faithfully. Reason explored as hard as it can be explored, and faith received as a gift, do not pull a human being in two; held rightly, they pull in one direction. That conviction is what made Aquinas, centuries later, the model thinker of a church that wanted to say faith was reasonable, and it is the thread that runs through the cathedral of arguments from the first page to the last he managed to write."
        }
      ]
    },
    {
      "num": 6,
      "title": "Law, virtue, and the good life",
      "epigraph": {
        "text": "\"For the chief aim of sacred doctrine is to teach the knowledge of God… as He is the beginning of things and their last end.\"",
        "attribution": "— Aquinas, *Summa Theologica* I, Q2, prologue, trans. Fathers of the English Dominican Province"
      },
      "blocks": [
        {
          "p": "If the First Part is about where everything comes from, the Second Part is about how a human being lives, and it is where Aquinas's Aristotle does its most striking work. Aristotle's [Nicomachean Ethics](/philosophy/work/nicomachean/read) had argued that every human action aims at some good, that all the smaller goods point toward one final end, and that the final end is *eudaimonia*, flourishing, the good life lived well. Aquinas takes that whole structure and accepts it, and then completes it with a single move: the final end that all human striving is really reaching for, the happiness nothing else can satisfy, is *God*. Aristotle had the shape of the human journey right and could not see its destination; Aquinas keeps the shape and names the destination. Perfect happiness, he argues, is not in wealth, honor, power, or pleasure, all of which leave the wanting unfinished, but in the vision of God, and that is what a human life is finally for."
        },
        {
          "p": "Getting there is the work of the **virtues**, and here too Aquinas takes Aristotle's account (virtue as a settled disposition, built by habit, to act well) and extends it. He keeps the classical virtues the Greeks had named, prudence, justice, courage, and temperance, the ones a person develops by practice and reason. But he adds three that reason could never build on its own and that come only as a gift of grace: faith, hope, and charity (love), the *theological* virtues, so called because they have God himself as their object. The natural virtues make a good citizen; the theological virtues, poured in by grace, orient a person to God directly. Once again the pattern: nature first, then grace perfecting it, the classical good life lifted toward a higher end."
        },
        {
          "p": "The most influential single stretch of the Second Part is the **treatise on law**, and at its center is the idea Aquinas is best known for in ethics and politics: **natural law**. Law in general, he holds, is a rule of reason, directed at the common good, made by whoever has charge of a community, and made public. Above all law stands the *eternal law*, God's own reason governing the whole of creation. **Natural law** is the part of that eternal law that a rational creature can grasp by its own reason: the basic moral truths built into human nature, accessible in principle to anyone, believer or not, just by thinking clearly about what human beings are and what is good for them. Its most basic precept is paraphrasable as the obvious-sounding starting point that good is to be done and pursued and evil avoided, from which the more particular duties follow."
        },
        {
          "p": "The power of natural law is that it makes morality a matter of *reason*, not just divine command, and therefore something shared across the whole human race. A person who has never heard the Ten Commandments can still know by natural reason that murder and theft are wrong, because the wrongness is written into human nature and readable by the mind, the way the conclusion of an argument is readable. Revealed law, the commandments given in Scripture, then confirms and completes what natural law already shows, and adds what reason could not have known on its own. This gives Aquinas a way to talk about right and wrong that a non-Christian can in principle follow all the way, which is exactly what the thinker whose whole project is that reason and faith run together would be expected to produce. Natural law became one of the most durable ideas in the Western tradition of ethics and politics, long after the theology around it stopped being assumed."
        },
        {
          "p": "Underneath the whole moral edifice is the same circle the architecture drew. Human beings came out from God in the First Part; in the Second Part they make their way back, and the virtues and the law are the road, the trained dispositions and the rational order that carry a free creature toward the end it was made for. The good life, for Aquinas, is not a set of rules obeyed under threat. It is a nature brought to completion: a human being becoming fully what a human being is for, which turns out to be union with the God it came from. That is the journey the unfinished Third Part was meant to show completed in Christ, and it is the journey the *Summa* was still describing when its author put down his pen."
        }
      ]
    },
    {
      "num": 7,
      "title": "Like straw",
      "epigraph": {
        "text": "\"Reginald, I cannot, because all that I have written seems like straw to me.\"",
        "attribution": "— reported of Aquinas by his companion Reginald of Piperno (biographical tradition, not a Summa text)"
      },
      "blocks": [
        {
          "p": "On 6 December 1273, while saying Mass in Naples, Aquinas had some kind of experience that he never explained and that changed him. Afterward he stopped working. He had been driving the *Summa* forward for years at his usual relentless pace, deep into the Third Part, the treatment of the sacraments, when whatever happened that morning made him lay it all down. His secretary and companion, a friar named Reginald of Piperno, who had taken much of the dictation, was alarmed and begged him to take it up again. The reply is one of the most famous things ever reported of a philosopher, and it has to be reported carefully, because it is biographical tradition and not a line he wrote: as the story is told, Aquinas answered, \"Reginald, I cannot, because all that I have written seems like straw to me.\""
        },
        {
          "p": "What he meant has been argued over ever since, and the honest answer is that no one knows. Some read it as a mystic's verdict that he had glimpsed God directly and the millions of careful words now looked like nothing beside the reality. Some read it as illness, perhaps a stroke or a breakdown after a lifetime of overwork. The two readings are not even exclusive. What is documented is the result: the greatest builder of arguments in the medieval world fell silent, and the most ambitious book of the age stopped where it stopped. He set out a few months later, in early 1274, on a journey to a church council, fell ill on the road, and died at a monastery in March 1274, not yet fifty. The *Summa* was left unfinished, its great circle open at the top, exactly where its author had abandoned it."
        },
        {
          "p": "His followers could not leave it open. The *Summa* was too important, and too nearly complete, to circulate as a torso, so after his death his students assembled a *Supplement* to the Third Part out of things Aquinas had written years earlier, mostly in an early commentary, and stitched it onto the end so the book could be read as a whole. It is a faithful patch and a useful one, but it is not the master's own finished work, and readers have always known it. The unfinished ending is part of the book's character: the man who tried to reason out the whole of reality did not get to the end of his own outline."
        },
        {
          "p": "And then the afterlife, which dwarfs the life. In his own century Aquinas was a controversial figure as much as a celebrated one; some of his positions were caught up in a sweeping church condemnation at Paris in 1277, three years after his death, when conservatives moved against the bolder uses of Aristotle. But the tide turned hard. He was canonized as a saint in 1323, declared a Doctor of the Church, and given the title \"the Angelic Doctor.\" Over the following centuries his thought, called Thomism, became the dominant framework of Catholic theology, and in 1879 a pope formally held it up as the model of Christian philosophy, sending generations of students back into the *Summa*. The book written for beginners became the official intellectual structure of the largest church in the world."
        },
        {
          "p": "Strip away the canonizations and the schools, and what Aquinas left is a single, durable wager about the human mind. He bet that a person does not have to choose between believing and thinking; that the hardest reasoning and the deepest faith are not rivals but partners, because both come from the one source of all truth. He took the most dangerous philosophy of his age, the one his colleagues wanted banned, and instead of fearing it he put it to work building the largest argument anyone had ever attempted, on the conviction that grace does not destroy nature but perfects it. He never finished, and at the end the whole magnificent structure looked to him like straw. But the wager outlasted him by seven centuries, and the cathedral of arguments still stands, open at the top, where the dumb ox set down his pen."
        }
      ]
    }
  ]
}
