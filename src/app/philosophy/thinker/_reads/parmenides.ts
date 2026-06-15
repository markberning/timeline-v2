// DRAFT (Opus author, gated pipeline step 2) — Parmenides of Elea philosophy thinker read.
// Structurally modeled on src/app/philosophy/thinker/_reads/socrates.ts (the closest template).
// Drops straight into the provisional reader. Every factual claim + quotation is mapped to its
// fact-pack section in audits/philosophy-pipeline/parmenides-thinker-fact-ledger.md. Authored ONLY
// from that ledger; nothing from memory. Fragments cite Diels-Kranz (DK 28 B…); verbatim English is
// John Burnet, Early Greek Philosophy (1920, PD); Plato is Jowett (PD). The B3 "to think and to be
// are the same" slogan is NOT quoted (contested translation) — B6 carries that idea verbatim.
// Inline *italics* and **bold** are rendered by the page. Epigraphs prefer verified pack lines.

import type { PhiNarr } from '@/components/philosophy-reader'

export const PARMENIDES: PhiNarr = {
  "title": "Parmenides",
  "throughline": "He sat down, reasoned his way step by step, and came out the other side insisting that the whole visible world is a lie. Change is impossible. Plurality is impossible. What truly is must be one thing, eternal and frozen, and the moving, breathing, dying world the senses report simply is not real. Almost nobody believed him. Almost everybody after him had to answer him. Metaphysics, the study of what it is for anything to be at all, starts here, with the strangest argument in Greek philosophy.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Velia_WLM18_08.jpg/1280px-Velia_WLM18_08.jpg",
    "cap": "The ruins of ancient Elea (Roman *Velia*), the Greek colony on the Tyrrhenian coast of southern Italy where Parmenides was born and founded his school. Photo by Saverio.G, CC BY-SA 4.0.",
    "alt": "Sunlit stone ruins of the ancient Greek city of Elea-Velia in southern Italy, with grass-covered ground and fragments of ancient walls"
  },
  "hook": [
    "Sometime around 450 BC, by Plato's telling, an old man from a Greek colony on the Italian coast came to Athens and met a very young Socrates. The old man was about sixty-five. Socrates was barely out of boyhood. And in the dialogue Plato wrote about it, it is the old man who does the schooling, taking the young Socrates' best ideas apart with a patience that is almost cruel. The old man was Parmenides of Elea, and he is the only earlier thinker Plato ever treated with that kind of awe. Everyone else Plato could argue with. Parmenides he called \"father.\"",
    "What earned that reverence was a single poem, most of it now lost, and an argument inside it so extreme that on first hearing it sounds like a man who has lost his grip. Parmenides claimed that change does not happen. Not that it is hard to explain, not that it is less real than it looks. That it does not happen at all. Nothing is ever born and nothing ever dies; nothing moves; nothing becomes anything else. There is no past and no future, only an eternal *is*. And there are not many things, only one thing, whole and undivided. The grass growing, the fire burning, the body aging: illusions, all of them.",
    "The natural response is that this is absurd, and Parmenides knew it was absurd. He could see the world changing as well as anyone. The point is that he did not get there by ignoring the evidence. He got there by *reasoning*, one careful step after another, from a starting point that looks almost too obvious to bother stating, and the steps are hard to break. He set the conclusions of pure logic against the testimony of his own eyes, and when they disagreed, he trusted the logic and called the eyes liars. That decision, reason over the senses, is one of the most consequential moves anyone has ever made.",
    "So the puzzle is not why his conclusion sounds mad. It is why, for the next two and a half thousand years, the smartest people alive could not simply wave it away. His pupil Zeno built a set of paradoxes to defend it. The atomists redesigned the universe to get around it. Plato wrote one dialogue to honor him and another to commit what he called \"parricide\" against him. The argument starts from one small word, the word *is*, and following exactly how a man talks himself from there into denying the entire visible world is the only way to understand why it held the tradition for two and a half thousand years."
  ],
  "brk": {
    "beforeLabel": "Find the one stuff the changing world is really made of, and trust the senses to study it",
    "afterLabel": "Reason alone decides what can exist, and reason says the changing world cannot be real",
    "paragraphs": [
      "Before Parmenides, Greek philosophy was a search for the *stuff*. The thinkers we now call the **pre-Socratics** (the philosophers who came before Socrates, most of whom survive only as fragments quoted by later writers) were trying to find the one underlying material or principle behind the endless changing surface of the world. **Thales** said it was water; **Anaximenes** said air; others named fire, or an indefinite something. The whole project assumed that *change is the basic fact about the world* and the job of philosophy is to explain it, to find the permanent stuff that takes on all these passing shapes. And the way to study it was by looking: observe the world, the way water becomes ice and steam, and reason from what the eyes report. The senses were the starting evidence.",
      "The sharpest version of this was **Heraclitus** ([read his chapter](/philosophy/thinker/heraclitus)), who pushed change to the center of everything. For Heraclitus, flux is not a problem to be explained away; flux *is* reality. No one can step into the same river twice, because fresh water is always flowing past; the world is an ever-living fire, kindling and going out in measures. Stability is the illusion. The deep truth is that nothing ever stays the same for an instant. That is the high-water mark of the change-is-fundamental worldview, and it is the exact position Parmenides' argument runs straight into and over. (No ancient text records the two men reading or debating each other; the head-on opposition between them is a pairing later readers drew, because their conclusions are perfect opposites. But it is the cleanest way to see what Parmenides did.)",
      "Parmenides' break is to stop trusting the senses at all and let *reason alone* decide what can and cannot exist. He starts from something that seems trivially true: that *what is, is*, and *what is not, is not* and cannot even be thought or spoken of. Then he follows that single thread with ruthless logic, and it drags him to a place no observation would ever suggest. If there is no such thing as \"what is not,\" then nothing can come into being (it would have to come from what is not) and nothing can pass away (it would have to become what is not); so there is no birth, no death, no change. And what is cannot be split up by stretches of \"what is not,\" so it is one undivided whole, the same everywhere, motionless, complete. Every one of those conclusions contradicts what the eyes report every second of every day. Parmenides' answer is that *the eyes are wrong*. The senses show a world of many things changing; reason proves that is impossible; therefore the world the senses show is mere seeming, and the truth is the one changeless thing that reason can prove. That reversal, putting argument above observation and being willing to deny the obvious when the argument demands it, is the move the whole tradition of **metaphysics** (the study of what it is for anything to exist at all) is built on top of. Most historians treat this poem as the place that study begins."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "A poem about being, dictated by a goddess",
      "epigraph": {
        "text": "\"Welcome, O youth, that comest to my abode on the car that bears thee tended by immortal charioteers!\"",
        "attribution": "— the goddess greets Parmenides, DK 28 B1, trans. John Burnet"
      },
      "blocks": [
        {
          "p": "The first surprise about the most rigorously logical argument in early Greek philosophy is its packaging. Parmenides did not write a treatise. He wrote a **poem**, in **dactylic hexameter** (the grand epic meter of Homer and Hesiod, the verse form of gods and heroes), conventionally called ***On Nature***, and he framed its iron argument as a religious revelation handed to him by a goddess. Roughly a hundred and fifty lines survive, no more, scattered as quotations inside the works of later writers. The single biggest reason we have as much as we do is a commentator named **Simplicius**, writing in the sixth century AD, a full thousand years after Parmenides, who copied out long stretches of the poem into his own books precisely because by his day the original had become rare. Almost everything that survives of the poem reaches us through other people's quotations of a text no one alive has ever seen whole."
        },
        {
          "fig": "https://upload.wikimedia.org/wikipedia/commons/2/20/Sanzio_01_Parmenides.jpg",
          "cap": "Raphael's Parmenides, a detail from *The School of Athens*, 1509–1511. A Renaissance invention, not a likeness. The one ancient sculpted head inscribed with his name, dug up at Velia in 1966, is itself an idealized type and probably not modeled on his real face either. We do not know what he looked like.",
          "alt": "Painted detail of a robed, bearded man reading from a book, one of the philosophers in Raphael's fresco",
          "portrait": true
        },
        {
          "p": "The poem opens with a journey. A young man is carried in a chariot drawn by mares, escorted by the **daughters of the Sun**, who have left the halls of Night to convey him \"into the light\" and who throw back their veils as they go. The road leads to a great gate, \"the gates of the ways of Night and Day,\" fitted with a stone threshold and a lintel, and the maidens coax the guardian into swinging it open. Beyond it a **goddess** receives him kindly, takes his hand, and speaks the words of the epigraph, welcoming the youth who has come the long way to her home. Then she tells him what she is going to teach: \"the unshaken heart of well-rounded truth,\" and alongside it \"the opinions of mortals in which is no true belief at all.\" The entire rest of the poem is the goddess talking. Parmenides puts his philosophy in a god's mouth."
        },
        {
          "p": "The goddess frame is not mere decoration, the poetic costume an early thinker reached for because prose philosophy did not yet exist. By having the argument *revealed* by a goddess rather than argued by a man, Parmenides marks it as truth that comes from somewhere other than the human senses. The young man does not figure being out by looking around at the world. He is carried out of the ordinary daylight world entirely, through a gate, to be told the truth by a divine voice. The poem's structure mirrors its content: the truth about what is will turn out to be something the senses could never have shown, something reached only by leaving them behind. Whether Parmenides believed in a literal goddess or used her as a device for a truth he thought more than human, the effect is the same. The authority for what follows is reason and revelation, not observation."
        },
        {
          "p": "What can be said about the man behind the poem is thin, and honesty about how thin it is matters. He came from **Elea** (Latin *Velia*), a Greek colony on the Tyrrhenian coast of southern Italy, and he founded what later writers called the **Eleatic school**, the line of thinkers who defended the idea that reality is one and changeless. His dates are genuinely uncertain, and there are two competing estimates that the sources do not reconcile. One runs off Plato's *Parmenides*, which stages a meeting where Parmenides is \"about sixty-five years old\" and Socrates \"a very young man\"; working back from Socrates' age puts Parmenides' birth around 515 BC and the meeting around 450. The other comes from the much-later biographical tradition (chiefly **Diogenes Laertius**, writing some seven centuries after the fact, whose dates lean on a standard formula that fixes a man's \"prime\" at age forty around some public event), and it puts the birth roughly twenty-five years earlier, around 540 BC. Both are reconstructions. The c.515 figure is the one used here, because it fits the Plato story that keeps recurring, but the gap is real and the confident-sounding single date often quoted is papering over it."
        },
        {
          "p": "Of his death, his appearance, his daily life, nothing reliable survives. Diogenes Laertius reports that he was well-born and wealthy, that he studied under a Pythagorean named Ameinias, that he gave the city of Elea its laws. These are pleasant details and they may even be true, but every one of them comes from that same late, legend-prone source, and none of it is needed. The poem is the man. Everything that made Parmenides matter is in the argument the goddess is about to deliver."
        }
      ]
    },
    {
      "num": 2,
      "title": "The two roads",
      "epigraph": {
        "text": "\"Come now, I will tell thee—and do thou hearken to my saying and carry it away—the only two ways of search that can be thought of.\"",
        "attribution": "— the goddess, DK 28 B2, trans. John Burnet"
      },
      "blocks": [
        {
          "p": "The goddess lays out a fork in the road, and the whole argument hangs on it. There are, she says, \"the only two ways of search that can be thought of.\" The first is the way of *It is*. The second is the way of *It is not*. Her exact words, in Burnet's translation: \"The first, namely, that *It is*, and that it is impossible for it not to be, is the way of belief, for truth is its companion. The other, namely, that *It is not*…\" The first road is the **Way of Truth**. The second road she immediately condemns as a path \"that none can learn of at all,\" a dead end, and she warns the young man to keep off it. Everything that follows is the working-out of why the second road is impassable, and where the first one leads."
        },
        {
          "p": "The second road is supposed to be impassable because of what \"the way of *It is not*\" actually asks. It asks a person to think about, talk about, inquire into *what is not*: nothing, non-being, what isn't there. And Parmenides' claim, stated flatly in the fragment usually numbered B6, is that this simply cannot be done: \"It needs must be that what can be spoken and thought is; for it is possible for it to be, and it is not possible for what is nothing to be.\" The idea is that thought and speech always have to be *about* something, have to have an object, and \"nothing\" is by definition not an object. The moment the mind tries to think about non-being, the \"nothing\" it is reaching for turns into a *something*, and the attempt to think about real nothing has failed. So \"what is not\" cannot be thought, cannot be spoken, cannot be the subject of any genuine inquiry. The road of *It is not* leads nowhere because there is nothing down it to find. As the goddess puts it in B7: \"For this shall never be proved, that the things that are not are; and do thou restrain thy thought from this way of inquiry.\""
        },
        {
          "p": "The charge of word-play is fair enough to take seriously, so the strongest version of the argument runs like this. A person who genuinely attempts to think about sheer nothingness, not empty space (that is still something, a region) and not darkness (that is the absence of light, still defined by something), but pure non-being, the total absence of anything whatever, finds that the mind slides off it. Every attempt to grab it ends up grabbing some faint *thing*. Parmenides' point is that this is not a failure of effort but a structural fact: meaning requires an object, non-being offers none, and so non-being is literally unthinkable and unsayable. And if it cannot even be thought, the goddess says, then it certainly cannot be used as an ingredient in any account of reality. The second road is closed not because it is forbidden but because it is empty. That single move, *there is no such thing as what-is-not, and it cannot be reasoned with*, is the hinge on which everything that follows turns. Refusing to let \"what is not\" back in by any door is the premise from which all the strange conclusions in the next section are derived."
        }
      ]
    },
    {
      "num": 3,
      "title": "What follows if nothing is not",
      "epigraph": {
        "text": "\"Nor was it ever, nor will it be; for now *it is*, all at once, a continuous one.\"",
        "attribution": "— the goddess on what-is, DK 28 B8, trans. John Burnet"
      },
      "blocks": [
        {
          "p": "Now the argument does its work. Take the one open road, *It is*, hold firmly to the rule that \"what is not\" can play no part in anything, and the goddess says the \"tokens,\" the signs, of what truly *is* can be read straight off. The fragment that carries this, B8, is the longest stretch of the poem we have, and it is the heart of the whole thing. \"One path only is left for us to speak of, namely, that *It is*. In this path are very many tokens that what is is uncreated and indestructible; for it is complete, immovable, and without end.\" Each of those properties is not asserted but *derived*, squeezed out by the ban on non-being, and the chain is tighter than it first appears."
        },
        {
          "p": "**It cannot have come into being.** Suppose what-is was born at some moment. Then before that moment it was *not*. But there is no \"was not,\" no \"what is not\" for it to have come out of, and no reason that would have picked one moment over another for a thing to spring out of nothing. Coming-to-be would require starting from non-being, and non-being is impossible. So what-is never came into being. **And it cannot perish,** by the mirror of the same argument: to perish would be to pass into \"what is not,\" and there is no such state to pass into. It is, in Burnet's words, \"uncreated and indestructible.\" **Which means it has no past and no future.** If it was never born and will never die, then it never *was* in the sense of being over, and never *will be* in the sense of being not-yet. There is only an eternal present tense: \"Nor was it ever, nor will it be; for now *it is*, all at once, a continuous one.\" Time as a sequence, the flow from then to now to next, falls away. What-is simply *is*, complete, in one changeless now."
        },
        {
          "p": "**It cannot be divided into parts.** To divide what-is into separate pieces, there would have to be gaps between the pieces, stretches where what-is is *not* and something else, or nothing, holds the parts apart. But there is no \"is not\" to do the separating. So there are no gaps, no seams, nothing to break it up: \"Nor is it divisible, since it is all alike, and there is no more of it in one place than in another, to hinder it from holding together.\" It is one seamless whole, the same all the way through. **And it cannot move or change.** Motion needs somewhere to move *into*, some empty \"is not\" for the thing to go toward; change needs the thing to stop being one way and start being another, to let a bit of \"is not\" into what it was. Both are barred. So what-is is \"immovable in the bonds of mighty chains, without beginning and without end,\" resting \"in the self-same place, abiding in itself.\" Frozen, motionless, full."
        },
        {
          "p": "Stack the signs together and out comes the conclusion that made Parmenides notorious. What truly *is* must be **ungenerated, indestructible, eternal, one, indivisible, whole, motionless, and unchanging**. A single, perfect, frozen block of being, the same everywhere, with no birth, no death, no parts, no motion, no time. Parmenides even reaches for an image of its completeness, describing what-is as bounded evenly on every side, equally poised from the center out, the way a well-rounded sphere is the same in all directions. Not a sphere made of matter sitting in space, but that *kind* of even, finished wholeness, nothing lacking, nothing extra, nowhere thinner or thicker."
        },
        {
          "p": "The collision with ordinary life is total: every single one of those signs is contradicted by the plainest experience. The world is obviously *many* things, not one. Things are obviously *born* and obviously *die*. Everything is plainly *moving*, *changing*, becoming other than it was, strung out along a *time* that flows. The senses report the exact opposite of what the argument proves at every point. So one of them has to be lying, the argument or the eyes, and Parmenides does not flinch. The argument is valid; the premise (no \"is not\") is undeniable; therefore the conclusion is true and the *senses are the liars*. The world they show, the moving, plural, perishing world, is not the way reality actually is. It is mere seeming. This is the boldest bet in early philosophy: when watertight reasoning contradicts the plain testimony of the eyes, throw out the eyes."
        }
      ]
    },
    {
      "num": 4,
      "title": "The world of seeming",
      "epigraph": {
        "text": "\"…the opinions of mortals in which is no true belief at all.\"",
        "attribution": "— the goddess names the second half of her lesson, DK 28 B1, trans. John Burnet"
      },
      "blocks": [
        {
          "p": "If the visible world is an illusion, the obvious next question is why a serious man would spend his time describing it. And the strangest feature of the poem is that he does. After the Way of Truth, the goddess turns to the second part of her promised lesson, the **Way of Opinion** (the Greek is *doxa*, meaning seeming, belief, the way things appear to mortals), and she lays out a full account of the everyday world: a cosmology built from two opposed principles, fire or light against night, and an account of the heavenly bodies and how things come to be. She gives this in real detail, as much care as a thinker who took the visible world seriously would. And she has already branded the whole thing false, \"the opinions of mortals in which is no true belief at all.\""
        },
        {
          "p": "Why include it? This is one of the genuinely unsettled questions in the study of Parmenides, and the honest move is to flag it rather than smooth it over. Scholars have read the Way of Opinion several incompatible ways. Some take it as the best possible account of a world that is, at bottom, still false, a kind of \"if the seeming world must be explained at all, here is the least bad way to do it.\" Some read it as a deliberate exercise, Parmenides showing he could play the ordinary cosmology game as well as anyone before refusing it. Some think he is laying out the rival views of other thinkers in order to mark them as the errors mortals fall into. Some argue it has more positive value than the goddess's harsh verdict admits. The text does not settle it, and the poem is too fragmentary to force an answer. What is clear is the *ranking*: the Way of Truth is the truth, the Way of Opinion is how things merely seem, and the reader is told which is which."
        },
        {
          "p": "Whatever its purpose, the two-road structure carries the single most important thing about Parmenides, the move that echoes down the whole later tradition: he splits reality clean in two. There is the way things *truly are*, reached by reason, which is one, eternal, and changeless, and there is the way things *appear to be*, reported by the senses, which is many, fleeting, and false. Truth on one side, seeming on the other; reason on one side, the senses on the other. Almost every later philosophy that distinguishes a deeper *real* world from a shallower *apparent* one is working in the groove Parmenides cut. The most famous example is Plato, who separates the eternal, unchanging Forms (the perfect realities grasped by thought) from the shifting, second-rate world of the senses, building on a floor Parmenides poured."
        }
      ]
    },
    {
      "num": 5,
      "title": "Zeno, and the paradoxes that defend the One",
      "epigraph": {
        "text": "\"For this shall never be proved, that the things that are not are; and do thou restrain thy thought from this way of inquiry.\"",
        "attribution": "— the goddess, DK 28 B7, trans. John Burnet"
      },
      "blocks": [
        {
          "p": "Parmenides had a pupil, **Zeno of Elea** (born around 490 BC, and per Plato's *Parmenides* the master's much-younger companion, the two of them visiting Athens together), and Zeno found a brilliant way to defend a conclusion almost nobody could accept. He did not argue *for* the One directly. Instead he went after the other side. He took the common-sense view, the view of the senses, that motion is real and that there are many separate things, and he tried to show that *that* view leads to flat absurdity. If believing in motion and plurality forces a thinker into contradiction, then maybe Parmenides' frozen, undivided One is not the crazy option after all. It is the common-sense world, Zeno argued, that falls apart under examination. (This is a different Zeno from **Zeno of Citium**, the founder of Stoicism, who lived two centuries later and whose only connection is the name. The two are constantly confused; they should not be.)"
        },
        {
          "p": "His method was the **paradox**, and the most famous is **Achilles and the tortoise**. Give the tortoise a head start in a race against the swift hero Achilles. To catch up, Achilles must first reach the point where the tortoise started. But by the time he gets there, the tortoise has crawled a little farther on. So Achilles must now reach *that* new point, and by the time he does, the tortoise has moved again, a smaller distance, but moved. Every time Achilles reaches where the tortoise *was*, the tortoise has inched ahead. There are infinitely many of these gaps to close, one after another, and how can anyone complete an infinite series of tasks? So Achilles, the fastest runner alive, can never overtake the slowest of creatures. The conclusion is plainly false. He obviously does catch the tortoise. And that, for Zeno, is the point: ordinary belief in motion has led, by steps that each look reasonable, to something impossible. Another of his paradoxes, the **arrow**, runs the same trick on a flying arrow: at any single instant the arrow occupies exactly one position, a space equal to itself, and in that frozen instant it is not moving; but its whole flight is just a sum of such motionless instants; so the arrow in flight never moves."
        },
        {
          "p": "A note on what we actually have, because the famous packaging is later than the man. Zeno's own book survives only in scraps. Most of what we know about the paradoxes comes second-hand, above all through **Aristotle's *Physics*** (which reports them mainly in order to refute them) and later commentators. The vivid casting, the named tortoise and the hero Achilles, belongs to that downstream tradition; Aristotle's own text speaks more plainly of \"the slowest runner\" and \"the fastest.\" None of which dulls the force of the argument. Whether or not Zeno's paradoxes succeed (mathematicians have a great deal to say about infinite series, and the debate is genuinely alive), their job in the Eleatic project is clear. They are bodyguards for the One. They make the everyday world of motion and many-ness look incoherent, so that Parmenides' single changeless being, however bizarre, starts to look like the position that at least does not contradict itself."
        }
      ]
    },
    {
      "num": 6,
      "title": "The father everyone had to answer",
      "epigraph": {
        "text": "\"Then I fear that I must lay hands on my father Parmenides; but do not call me a parricide; for there is no way out of the difficulty except to show that in some sense not-being is.\"",
        "attribution": "— the Eleatic Stranger, Plato, *Sophist*, trans. Benjamin Jowett"
      },
      "blocks": [
        {
          "p": "Parmenides' conclusion was, in the plainest sense, unbelievable, and almost no one believed it. Yet that is exactly the measure of his importance: the people who came after could not just disagree and move on. They had to find a way *around* him, because his argument had a frightening feature. It looked valid. Grant the premise, that there is no \"what is not\" and nothing cannot be reasoned with, and the rest seems to follow, all the way to the frozen One. So the work of the next generations became, in large part, the work of escaping Parmenides without simply ignoring him. Three responses show how deep the problem went."
        },
        {
          "p": "**The atomists rebuilt the universe to get past him.** The thinkers who proposed that everything is made of tiny, uncuttable bodies, **atoms**, moving through empty space accepted a huge piece of Parmenides and then made one daring break. They agreed that being cannot come from non-being, so they made each atom a little Parmenidean *what-is*: each one ungenerated, indestructible, unchanging, internally solid and seamless, exactly the frozen being of the poem, only shrunk down small and made plural. That preserved his point that real being cannot be born or destroyed. But to allow the atoms to *move* and *combine*, they needed somewhere for them to move, and so they did the one thing Parmenides forbade absolutely: they let \"what is not\" back in, calling it the **void**, the empty space between the atoms. On the standard reading, atomism is a direct engineering response to Parmenides, conceding that being is changeless while smuggling motion back in by granting reality to a kind of nothing. The price of saving the visible world was admitting the very thing he had banned."
        },
        {
          "p": "**Plato honored him, then turned on him.** Of everyone in the tradition, Plato ([read his chapter](/philosophy/thinker/plato)) took Parmenides most seriously, and the relationship runs in two directions. In the dialogue Plato named ***Parmenides***, he stages a meeting: the elderly Parmenides and Zeno questioning a very young Socrates, and it is the old Eleatic who comes out ahead, pressing hard on weaknesses in the young Socrates' theory of Forms. It is the only time Plato lets an earlier philosopher get the better of his own hero, a gesture of real deference. But deference was not the end of it. In a later dialogue, the ***Sophist***, Plato faced a problem he could not solve while Parmenides' ban held. To explain how a person can say something *false* (a statement that says what is not the case) requires making sense of not-being, of \"what is not,\" the exact thing Parmenides declared unthinkable. So Plato's spokesman in the dialogue, a visitor from Elea of all places, nerves himself to break the rule, and calls it what it is in the epigraph: \"I must lay hands on my father Parmenides; but do not call me a parricide; for there is no way out of the difficulty except to show that in some sense not-being is.\" To rescue falsehood, error, and the simple act of saying that something is *not* so, Plato had to argue that not-being, in some sense, exists. He had to kill the father."
        },
        {
          "p": "That word, **parricide**, is the truest measure of Parmenides. No one commits parricide against a thinker who has been refuted and forgotten. It happens against a founder whose rule has boxed everyone in, whose argument is strong enough that getting past it feels like a violation. Parmenides wrote one poem, most of which is lost. He reached a conclusion that almost everyone, then and since, has judged to be false. He left no system anyone could simply adopt. And yet by following the small word *is* with total seriousness, refusing to let the senses overrule the argument, and pressing all the way to a single frozen being, he forced everyone who came after to either answer him or build around him. He is the point at which Greek thought stopped only asking what the world is *made of* and started asking what it even *means* for anything to *be*. That question, the one the goddess promised at the gate, has never closed."
        }
      ]
    }
  ]
}
