// DRAFT (Opus author, gated pipeline step 2) — Avicenna (Ibn Sina) philosophy thinker read.
// Structurally identical to src/app/philosophy/thinker/_reads/aquinas.ts (the medieval,
// systematic, faith-meets-reason model). Drops straight into the provisional reader. Every
// factual claim is mapped to its fact-pack section in
// audits/philosophy-pipeline/avicenna-thinker-fact-ledger.md. Authored ONLY from that ledger;
// nothing from memory. Consistent with the era read at src/app/philosophy/faith-reason/ (goes
// DEEPER, never restates) and with the Aquinas thinker read it feeds into.
//
// QUOTATION DISCIPLINE: Avicenna wrote in Arabic; clean PD English translations of his prose are
// scarce (Rahman, Marmura, Goichon all in copyright). Per the pipeline's Duranty rule the read
// uses PARAPHRASE THROUGHOUT for Avicenna — NO quotation marks anywhere around his own words. The
// only quoted epigraph is a verified PD line from Aquinas's Summa (Dominican Fathers translation),
// attributed to Aquinas, crediting where Avicenna's contingency proof landed. See the ledger.
//
// Inline *italics* and bold are rendered by the page; [text](/internal-href) links go only to
// verified existing thinker hubs (aristotle, aquinas — confirmed in _reads/index.ts). Figure
// captions are gated fact-pack content; alt text is presentational.

import type { PhiNarr } from '@/components/philosophy-reader'

export const AVICENNA: PhiNarr = {
  "title": "Avicenna",
  "throughline": "Between Aristotle and the moderns, no one built a bigger system than Ibn Sina. He took the whole of Aristotle, fused it with the Neoplatonic picture of a world flowing out of the One, and set at the center of metaphysics a single distinction the Greeks had never made load-bearing: that what a thing IS and THAT it is are two different facts. From that one cut he drew the existence of God, a direct proof that the self knows itself without the body, and a chain of being that runs from a necessary source down to every passing thing. Latin Europe read him for centuries, and when [Aquinas](/philosophy/thinker/aquinas) reached for the tools to prove God by reason, half of them were Avicenna's.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/The_Canon_of_Medicine.jpg/960px-The_Canon_of_Medicine.jpg",
    "cap": "A Persian manuscript of Avicenna's Canon of Medicine, photographed on display at the Museum and Mausoleum of Avicenna in Hamadan, Iran (photo by Wikimedia Commons user Coffeetalkh, 2010; CC BY-SA 3.0). The Canon, in Latin translation, was the standard medical textbook in European universities for roughly six centuries. No likeness made in Avicenna's lifetime survives.",
    "alt": "Open Persian manuscript with two pages of Arabic-script text in a display case, a copy of Avicenna's Canon of Medicine"
  },
  "hook": [
    "By the time he was a teenager, the local doctors were coming to him. He had read his way through medicine the way he had read his way through everything else, fast and early, and at around seventeen he was treating a Samanid ruler in Bukhara well enough that the grateful prince opened the royal library to him. The story goes that he read it nearly empty, then it burned, and his rivals muttered that he had set the fire himself to keep what he had learned. He let them mutter. He had it all in his head anyway.",
    "Ibn Sina (Latinized to Avicenna) was born around 980 near Bukhara, in the Persian-speaking heart of the Islamic Golden Age, and he had the kind of mind that makes the biographers reach for legend. He had memorized the entire Qur'an by ten. He worked out geometry and logic on his own as a boy, got stuck on Aristotle's *Metaphysics*, read it forty times without cracking it, then bought a cheap commentary at a bookstall that broke it open in an afternoon. He claimed that by eighteen there was nothing left for him to learn, only to deepen. It is the kind of boast that would be insufferable if the output had not gone on to back it up for the next forty years.",
    "And the output is staggering. He wrote on the move, between courts and crises, serving one Iranian ruler after another as physician and even as vizier, drafting philosophy at night and on horseback, composing during a four-month stretch locked in a fortress. Out of that unsettled life came two of the most consequential books of the Middle Ages. One, the *Canon of Medicine*, became the standard medical text in Europe for some six hundred years. The other, the *Book of Healing*, was a philosophical encyclopedia so complete that it tried to contain the whole of knowledge: logic, the natural world, mathematics, and at its summit, metaphysics, the study of being itself.",
    "It is in that metaphysics that he did the thing he is remembered for among philosophers. He built the most complete system anyone would manage between Aristotle and Descartes, and he hung it on a distinction so simple it sounds like nothing: that *what* a thing is and *that* it is are not the same. Out of that single cut came a fresh proof that the self exists, a fresh proof that God exists, and a map of all reality flowing out of one necessary source. Aristotle had handed the Islamic world a toolbox. Avicenna built a cathedral with it."
  ],
  "brk": {
    "beforeLabel": "Aristotle hands down a logic of substances; existence is just assumed",
    "afterLabel": "Existence itself becomes the question, and it splits from essence",
    "paragraphs": [
      "Aristotle (era 1) had given philosophy a powerful machinery for describing the world: substances and their properties, form and matter, potency and act, the four causes. He had asked what things *are*, and answered in terms of their natures and forms. What he had not made into a central problem was the bare fact *that* anything is at all. Existence, in the Aristotelian inheritance, came along for free; one analyzed *what* a thing was, and its being was simply assumed in the asking. The al-Farabi generation of Arabic philosophers (era 2, chapter 3) had begun to press on this, but it was Avicenna who turned it into the hinge of all metaphysics.",
      "The view Avicenna broke from deserves its strongest form, because it was not careless. For Aristotle, to know a thing fully was to grasp its essence (its *what-it-is*, the nature that makes it the kind of thing it is) through its causes and its form, and that was the deepest layer there was. A complete definition of a horse, on this view, told its reader everything there was to know about horse-ness. There was no further, separate fact lurking underneath the essence, no extra ingredient called *being* that the definition had left out. The question was always *what is it?*, and a good answer to that question was the end of the road.",
      "Avicenna's break is to insist that the answer to *what is it?* leaves out the most basic fact of all, namely *whether it is*. Take the essence of a horse: the full nature, everything that makes a horse a horse. That essence, taken just in itself, is silent about whether any horse actually exists. The entire nature of a horse can be held in mind, complete and exact, and it still will not say whether there is a single horse anywhere in the world. So existence (*that it is*) is not part of essence (*what it is*). In every created thing the two come apart: a thing's nature does not include, and cannot guarantee, its own being. Existence is something *added* to the essence, handed to it from outside. This is the essence/existence distinction, and once it is made, a new question opens that Aristotle never had to face. If nothing's nature gives it its own existence, then where does existence come from? That question reorganizes metaphysics around being itself, and every move in the rest of Avicenna's system is an answer to it. The break is not from Aristotle to anti-Aristotle. It is from a philosophy that asks only *what* things are to one that asks, first and hardest, *why there is anything at all*."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The boy who read the library",
      "epigraph": {
        "text": "He claimed that by the age of eighteen there was nothing left for him to learn, only to understand more deeply what he already knew.",
        "attribution": "— Avicenna's own account in his autobiography, as the tradition reports it"
      },
      "blocks": [
        {
          "p": "He was born around 980 (the sources vary, and 980 is the figure usually given) in Afshana, a village on the outskirts of Bukhara, a great city of the Samanid realm in Transoxiana (the land beyond the Oxus river, in what is now Uzbekistan). This was the Persian-speaking world at the height of the Islamic Golden Age, when the libraries of the East held the translated works of Greek antiquity that Latin Europe had lost. Avicenna grew up inside that inheritance rather than having to recover it. He wrote mostly in Arabic, the scholarly common tongue of the Islamic world, and some in Persian, his mother language."
        },
        {
          "p": "The prodigy stories are unusually well attested, partly because Avicenna left an autobiography (continued by a devoted student) that is the chief source for his early life. He had memorized the whole of the Qur'an by the age of ten. He took up arithmetic, then logic, then geometry, often outrunning his tutors until he was teaching himself from books. The famous one concerns Aristotle's *Metaphysics* (the hardest of the Greek's works, the one on being as such): the young Avicenna read it, by his own account, around forty times until he had it memorized and still could not see the point of it. Then he bought a short commentary by al-Farabi (era 2, chapter 3) at a bookstall, almost on a whim, and the whole thing suddenly came clear. He was so relieved he gave alms to the poor in thanks. It is a revealing story whichever way it runs, because the book that finally unlocked Aristotle for him was the one whose central problem he would go on to redraw."
        },
        {
          "p": "Medicine, he said, he found easy, and he was practicing it as a teenager. At around seventeen he treated the Samanid ruler of Bukhara, Nuh ibn Mansur, for an illness the court physicians could not manage, and as a reward he was granted the run of the royal library. The tradition holds that he devoured it, room after room of rare books, and that when the library later burned some accused him of torching it so that no one else could profit from what he had learned. The accusation, true or not, is its own kind of compliment: even his enemies assumed he had absorbed everything in there."
        },
        {
          "p": "The settled court life did not last. His father died, the Samanid dynasty fell, and Avicenna spent the rest of his life as a kind of brilliant wanderer, moving between the courts of Iran (Gurganj, Gorgan, Ray, Hamadan, Isfahan), serving rulers as physician and administrator, twice as a vizier (a chief minister), once thrown into the fortress of Fardajan for four months when the politics turned against him. He wrote through all of it. He composed on horseback between cities, dictated to students late into the night, and produced parts of his greatest works during the imprisonment. The largest philosophical system of the medieval world was assembled by a man who almost never had a quiet desk. He died in 1037, at Hamadan, around fifty-seven years old, worn out by the life and (the tradition says) by his own appetite for it."
        }
      ]
    },
    {
      "num": 2,
      "title": "The two great books",
      "epigraph": {
        "text": "The Canon of Medicine ... formed the basis of medical instruction in European universities until the 17th century.",
        "attribution": "— Stanford Encyclopedia of Philosophy, \"Ibn Sina [Avicenna]\""
      },
      "blocks": [
        {
          "p": "Two books carry Avicenna's name out of the eleventh century, and they pull in opposite directions, which is the first thing to understand about him: he was a complete physician and a complete philosopher at once, and refused to choose. The first book is the *Canon of Medicine* (*al-Qanun fi al-Tibb*), a five-volume encyclopedia that gathered and organized the whole of Greek and Arabic medicine into one ordered system. Translated into Latin in the twelfth century, it became the standard medical textbook in the universities of Europe and stayed on the curriculum for roughly six hundred years, still in use as late as the mid-1600s. For most of the second millennium, to train as a doctor in Christian Europe was, in part, to study a Persian Muslim's textbook."
        },
        {
          "p": "The second book is the one philosophers care about: the *Book of Healing* (*Kitab al-Shifa*). The title is a small trap, because it is not a medical book at all. The healing it promises is the cure of the soul from ignorance. It is a vast philosophical encyclopedia, running to many volumes, that aims to lay out the entire body of knowledge in order: logic first, then the natural sciences (physics, psychology, the study of living things), then mathematics, and finally, crowning the whole structure, metaphysics, the science of being as being. Avicenna meant it as a complete account of everything a rational mind could know, built as a single connected system rather than a shelf of separate treatises."
        },
        {
          "fig": "https://upload.wikimedia.org/wikipedia/commons/2/23/Avicenna_canon_1597.jpg",
          "cap": "A page from a 1597 manuscript copy of Avicenna's Canon of Medicine (public domain). Copies were still being made by hand, and the work still studied, more than five centuries after Avicenna's death.",
          "alt": "A page of a handwritten manuscript in Arabic script with red rubrication, from a 1597 copy of the Canon of Medicine",
          "portrait": true
        },
        {
          "p": "The shape of the system is the argument, so the kind of philosophy matters. Avicenna is an Aristotelian: he takes Aristotle's logic, his physics, his analysis of substance and cause as the working frame. But he is not only an Aristotelian. Into that frame he folds the Neoplatonic vision of reality (the picture, descended from Plotinus by way of the late-antique tradition, of all things flowing out from a single source; era 1, the Platonism strand). The result is a fusion: Aristotle's rigor about *what things are* married to a Neoplatonic story about *where being comes from*. The *Healing* is the place where that fusion is worked out at full length, and the place where Avicenna does the thing only he could do, which is to make existence itself the central question of metaphysics."
        }
      ]
    },
    {
      "num": 3,
      "title": "The flying man",
      "epigraph": {
        "text": "Suppose a man created in an instant, fully grown, suspended in the void, his senses receiving nothing at all. He affirms one thing without hesitation: that he is.",
        "attribution": "— a paraphrase of Avicenna's thought experiment in the De Anima of the Book of Healing"
      },
      "blocks": [
        {
          "p": "Avicenna's most arresting argument is a thought experiment, and it lands almost a thousand years before Descartes will make a similar move famous (era 3). It appears in the *De Anima* (the *Book of the Soul*) of the *Healing*, in the section where Avicenna is arguing that the soul is not just a function of the body but a substance in its own right. He sets up the case to be tested by stripping away every possible source of self-knowledge except one, to see what is left."
        },
        {
          "p": "The setup runs like this. Suppose a person created all at once, fully grown and perfectly formed, with no memories and no history, suspended in the air or in empty space so that nothing touches him: his limbs are spread apart and do not feel each other, his eyes see nothing, his ears hear nothing, he has never had a single sensation in his life and is having none now. He receives, in short, zero input from the body or the world. The question is simple: in that condition, would he affirm *anything*? Avicenna's answer is that he would affirm one thing. He would affirm that he himself exists. Cut off from every sense, knowing nothing of his own body (not even that he has a length, a breadth, a depth), the flying man would still be certain of his own self."
        },
        {
          "p": "The conclusion Avicenna draws is precise. If the self can be known with certainty even when the body and all its senses have been subtracted, then knowledge of the self does not come *through* the body or the senses. It is direct and immediate, what the tradition calls knowledge by presence: the soul is present to itself without needing to perceive anything. And if the self can be affirmed while the body is, so far as the thinker can tell, entirely absent, then the self is not identical to the body. The soul is its own thing, an immaterial substance, known first and known directly, prior to any knowledge of the physical. The body is something the soul *has*, not something the soul *is*."
        },
        {
          "p": "The strongest version of the argument is not the claim that the soul could float around bodiless (Avicenna does not think people actually exist that way). It is the claim about *order of knowledge*. Everything else a person knows arrives through the senses and has to be checked, doubted, confirmed. The self alone arrives without any of that machinery, given to itself for free, impossible for the doubter to doubt while doing the doubting. That asymmetry (everything external is mediated and dubitable; the self is immediate and certain) is what the flying man is built to expose. The resemblance to Descartes' later certainty of his own existence is real, and Latin readers of Avicenna will have met the move centuries before the *Meditations*. The difference is the target: Descartes will use his certainty to rebuild all knowledge from the ground up, while Avicenna uses it to prove what the soul *is* (an immaterial substance), which is the question the *De Anima* was asking in the first place."
        }
      ]
    },
    {
      "num": 4,
      "title": "What a thing is, that a thing is",
      "epigraph": {
        "text": "In everything except the One, what it is and that it is are two facts, and the second is borrowed.",
        "attribution": "— a plain statement of Avicenna's essence/existence distinction"
      },
      "blocks": [
        {
          "p": "The move that makes Avicenna a turning point in the history of metaphysics is this, and the whole rest of the system hangs on it. Take any ordinary thing: a horse, a tree, a person. There is, first, *what it is*: its essence, the nature that makes it the kind of thing it is, everything a complete definition would capture. And there is, second, *that it is*: its existence, the sheer brute fact that it is actually here, real, rather than merely a possibility that could be described. Avicenna's claim is that in everything except God, these two come apart. They are genuinely distinct facts, and one of them does not contain the other."
        },
        {
          "p": "The test that shows the gap is just to think hard about an essence on its own. The full nature of a horse (four legs, a certain shape, the capacity to gallop, the whole definition, complete and exact) is, considered purely in itself, completely silent on the question of whether any horse exists. The essence of a horse is the same essence whether the world is full of horses or contains none at all; it is the same in a real horse and in a merely imagined one. Nothing inside *what a horse is* settles *whether a horse is*. So existence is not folded into essence. It is, in Avicenna's image, something added to the essence, accidental to it in the strict sense that the essence does not demand it. A thing's nature is one fact; its being there is another, and the second has to come from somewhere."
        },
        {
          "p": "That last point is the engine. If no created thing's essence guarantees its own existence, then every created thing has its existence on loan, received from outside itself. This is the distinction between the contingent and the necessary. A *contingent* being is one whose essence does not include its existence: it can be or not be, it might never have existed, and so it needs a cause to give it the existence its own nature withholds. A *necessary* being would be the opposite: something whose very essence *is* to exist, which cannot not be, and which therefore needs no cause at all. Everything around us is contingent. We come and go; nothing about what we are required us to be. The question Avicenna has been building toward is now unavoidable. If everything we can point to is the kind of thing that has to borrow its existence, what does it borrow from?"
        },
        {
          "p": "Put plainly, every passing thing is a question with the answer left out. Its nature gives what it would be *if* it existed, but not that it does, so its existence is a fact that points beyond the thing to whatever supplied it. Stack up all those borrowed existences and the debt has to be settled somewhere. It cannot be loans all the way down. Somewhere there must be a being that does not borrow, that exists out of its own essence and lends to everything else. Avicenna has a name for it, and a proof."
        }
      ]
    },
    {
      "num": 5,
      "title": "The Necessary Existent",
      "epigraph": {
        "text": "Therefore we cannot but postulate the existence of some being having of itself its own necessity, and not receiving it from another, but rather causing in others their necessity. This all men speak of as God.",
        "attribution": "— Thomas Aquinas, Summa Theologiae I, q. 2, a. 3 (Third Way), trans. Fathers of the English Dominican Province (Aquinas carrying forward the contingency proof Avicenna built)"
      },
      "blocks": [
        {
          "p": "Avicenna's proof for the existence of God is called, in the tradition, the Proof of the Truthful (*burhan al-siddiqin*), and it is a genuine break from the older arguments. The usual ancient route to a first cause, the one Aristotle took, ran through *motion*: things are moved, the chain of movers cannot run back forever, so there must be an unmoved mover. Avicenna's argument does not run through motion at all, and (this is the clever part) it does not even need to rule out an infinite chain. It runs straight through the contingency of the last chapter. It is, at root, an argument from the fact that anything exists rather than nothing."
        },
        {
          "p": "Walk it slowly. Everything in the world, taken one by one, is contingent: each thing's essence fails to guarantee its existence, so each thing depends on a cause for its being. Now gather them all up and consider the entire collection of contingent things as a whole. That whole is itself contingent, because a collection made entirely of borrowers does not stop being a borrower by being large. It does not contain, anywhere inside itself, anything that exists by its own essence; so the whole collection still has its existence on loan, and still requires a cause. But that cause cannot be one more member of the collection (those are all contingent, all borrowers, already counted). So the cause of the whole contingent order must lie outside it, and must be something that is *not* contingent: a being whose essence simply is to exist. Avicenna calls it the Necessary Existent (*wajib al-wujud*): the one being that does not borrow its existence because its existence is its essence. Everything else hangs from it."
        },
        {
          "p": "What makes this a metaphysical argument rather than a cosmological story is the same thing that made [Aquinas's](/philosophy/thinker/aquinas) First Way a claim about present dependence rather than ancient history. Avicenna is not asking what got the universe started long ago. He is asking what is holding contingent being in existence *at all*, right now, given that nothing contingent carries its own existence within it. That is why the proof does not care whether the chain of causes is infinite or whether the world is eternal. Even an eternal, beginningless universe made entirely of contingent things would still be a universe of borrowers, and the whole of it would still need a lender whose existence is its own. The argument bites on dependence, not on a starting gun."
        },
        {
          "p": "From the bare Necessary Existent, Avicenna then reasons out the divine attributes, and the method is to ask what such a being must be like. A being whose essence is to exist cannot have parts (parts would be things it depends on, and it depends on nothing), so it is utterly simple. It cannot be material (matter is contingent and divisible), so it is immaterial. There cannot be two of it (two would each need something to tell them apart, and that would make them contingent), so it is one. Reasoning on, Avicenna derives that the Necessary Existent is pure intellect, and good, and the source from which all else proceeds. The God reached at the end is not just a first cause sitting at the head of a line. It is being itself, simple and singular, the ground under everything that merely happens to be."
        }
      ]
    },
    {
      "num": 6,
      "title": "The chain of being, and the long afterlife",
      "epigraph": {
        "text": "From the One, by necessity, the many overflow.",
        "attribution": "— a plain statement of the emanationist picture Avicenna fused with Aristotle"
      },
      "blocks": [
        {
          "p": "Having reached the Necessary Existent, Avicenna has to explain how a single, perfectly simple being could be the source of a universe full of countless different things. His answer is emanation, the picture he inherits from the Neoplatonic tradition and fits to his own metaphysics. Emanation does not mean God deliberately fashions each thing the way a craftsman builds a chair, choosing this and rejecting that. It means the world *overflows* from the One the way light streams from the sun or conclusions follow from a premise: necessarily, eternally, by the very nature of the source, without deliberation. The One thinks itself, and from that act of self-understanding the next reality proceeds; and so on, down the line."
        },
        {
          "p": "The line is a hierarchy of Intellects. From the Necessary Existent there proceeds a first Intellect; from its thinking there proceeds a second, which governs the outermost celestial sphere; from that, a third; and so on through a descending chain, each Intellect governing a sphere of the heavens, each less unified than the one above. At the bottom of the chain stands the Active Intellect, the lowest of the separate Intellects, which governs our own sublunar world (the world below the moon, the realm of change and decay) and which Avicenna assigns a remarkable double job. It is the source of the forms that organize matter into the things around us, *and* it is the source of the concepts that organize our minds: when a human being grasps a universal idea, Avicenna says, it is the Active Intellect that supplies it. The same intelligence that shapes the world also illuminates the mind that understands it. The whole cosmos, on this picture, is a single connected outflow, descending from the perfect unity of the One down through the Intellects to the shifting multiplicity of the physical world, with our own knowing hooked into the bottom rung of the chain."
        },
        {
          "p": "This is the system that mattered enormously and that drew the sharpest fire. Within a couple of generations al-Ghazali (era 2, chapter 3) would attack Avicenna's philosophy hard, charging that an eternal emanating world and a God who does not deliberately choose were not the God of religion at all, and later Averroes would answer Ghazali in turn. The emanationist scheme and the claim that the world is eternal are exactly the points where Avicenna's fusion of Aristotle and Neoplatonism strained against revealed faith, and his successors fought over them for centuries."
        },
        {
          "p": "The deepest afterlife, though, ran west. In the twelfth century Avicenna's works were translated into Latin, and the Christian schoolmen read him closely. When [Aquinas](/philosophy/thinker/aquinas) built his own case that reason can prove God exists (era 2, chapter 4), the essence/existence distinction was at the heart of it: Aquinas holds, with Avicenna, that in every creature existence is distinct from essence and received from outside, while in God alone essence and existence are one (God is, in Aquinas's phrase, subsistent Being itself). Aquinas's argument from contingency, the Third Way, is recognizably the descendant of Avicenna's Proof of the Truthful. Duns Scotus took up the necessary-existent reasoning; the Jewish philosopher Maimonides drew on the same well. The Latin West did not simply preserve Aristotle through the Arabic transmission; it received, through Avicenna, a fully built metaphysics of being that it then argued with for the rest of the Middle Ages. The boy who read the library, dictating philosophy between courts and on horseback, set the terms that a Dominican in Paris would still be working with two hundred years later."
        }
      ]
    }
  ]
}
