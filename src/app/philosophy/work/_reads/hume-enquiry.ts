// Opus AUTHOR draft of Hume's *An Enquiry Concerning Human Understanding* WORK read
// (Step 2 of audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/hume-enquiry-fact-ledger.md (+ cross-ref
// src/app/philosophy/thinker/_reads/hume.ts, which it goes DEEPER than and must not
// restate). PhiNarr shape is identical to nicomachean.ts / republic.ts; the reader at
// /philosophy/work/enquiry (route TBD) renders it. Hub-data surfaces (stats/diagram/
// spine/cast/passages) live separately in src/lib/philosophy-data.ts under `enquiry`.
//
// Quote doctrine: every quoted line is verbatim from the public-domain *Enquiry*
// (Project Gutenberg ebook 9662), string-matched at authoring time and cited by
// Section. Hume wrote in English; there is no translation question. The read stays
// INSIDE the *Enquiry*: *Treatise* wording (the bundle-self lines, "slave of the
// passions," is/ought) belongs to the thinker read and is NOT quoted here. The
// "missing shade of blue" and the copy principle appear in paraphrase only, never in
// quotation marks. "Hume was an atheist" is never asserted; the fork forbids it.

import type { PhiNarr } from '@/components/philosophy-reader'

export const HUME_ENQUIRY: PhiNarr = {
  "title": "Hume's Enquiry Concerning Human Understanding",
  "throughline": "Hume built two simple tools at the front of the book and then used them to take the floor out from under everything. The first sorts the contents of the mind into vivid impressions and their faint copies, ideas, and rules that any idea with no impression behind it is empty noise. The second, the fork, sorts every claim anyone can make into two bins: truths of pure reason, certain but empty, and matters of fact, informative but never certain. With those tools he showed that causation is not a force we observe but a habit of expectation in us, that nothing in reason or experience justifies the belief that tomorrow will resemble today, that no testimony can establish a miracle, and that whole libraries of metaphysics and theology fit neither bin and should be burned. The closing instruction is literal: commit it to the flames.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/6/65/Hume_1748_Human_Understanding.jpg",
    "cap": "The 1748 title page of the first edition. The book first appeared as *Philosophical Essays concerning Human Understanding*; Hume renamed it *An Enquiry Concerning Human Understanding* for the 1758 edition, the title it has carried since. It was Book I of his failed *Treatise of Human Nature*, recast shorter and sharper for a reading public.",
    "alt": "The engraved title page of the 1748 first edition of Hume's Philosophical Essays concerning Human Understanding"
  },
  "hook": [
    "Hume's first big book sank without a ripple in 1739, and he blamed the writing, not the ideas. So he took the epistemology out of it, the part about knowledge and the mind, and rebuilt it from the ground up as a leaner, public book: twelve sections, plain prose, no wasted moves. That book is the *Enquiry Concerning Human Understanding*, published in 1748. It is the most readable thing he wrote, and it contains the arguments that woke Kant, founded an open problem in philosophy that is still open, and gave the word \"Humean\" its meaning.",
    "The structure is a slow-motion trap. The opening sections seem mild, almost dull: a theory of where the mind's contents come from, a way of sorting claims into two kinds. Nothing alarming. But the tools built in those calm pages are weapons, and Hume knows it. By the time the demolitions arrive, causation reduced to a feeling, the future cut loose from any rational warrant, miracles weighed and found wanting, the reader has already agreed to every premise. The book ends by instructing the reader to take most of the philosophy ever written and put it in the fire.",
    "What it never does is panic. The conclusions are corrosive enough to have kept Hume out of two universities on suspicion of atheism, yet the prose is the calmest in the canon. The reason is the book's secret: Hume thought reason was far weaker than anyone admitted, that it could not justify ordinary life, and that this changed nothing, because nature never asked reason's permission. The *Enquiry* is the report of a man who looked at the place where the floor gives way, found nothing holding it up, and went home to play cards."
  ],
  "brk": {
    "beforeLabel": "Experience and reason together build secure knowledge of the world",
    "afterLabel": "Experience, followed honestly, can't even ground tomorrow; habit does the work reason claimed",
    "paragraphs": [
      "The empiricists before Hume ran a confident program. Locke had cleared away innate ideas and made the mind a blank sheet that experience writes on; Berkeley had pressed the same tools until \"matter\" dissolved into ideas. Both still believed the program *built* knowledge: start from experience, reason carefully, and arrive at solid results about cause and effect, the self, and an ordered nature one can rely on. That confidence is the natural one. Touch the stove and learn that stoves burn; see the sun rise every day of a life and of course know it will rise tomorrow. Reading the world's lessons off the senses is just what learning is.",
      "The *Enquiry*'s break is to take empiricism's own first rule, that every idea must trace back to some experience that produced it, and turn it without exception on the ideas empiricists had been leaning on unchecked. The idea of a necessary connection binding a cause to its effect: trace it to the experience that stamped it, and the experience is not there, only one event and then the next. The assumption that the future resembles the past, the silent premise under every prediction: try to justify it without arguing in a circle, and it cannot be done. The move is always the same. Demand the experiential receipt for an idea everyone assumed was safe, and the receipt fails to appear.",
      "Run consistently, with no exceptions made for the ideas no one can live without, empiricism stops being a tool that constructs knowledge and becomes a solvent. The same rule that dissolved the rationalists' airy concepts eats causation, eats the rational warrant for science and daily life, and at the end of the book closes on metaphysics and theology and instructs the reader to burn them. The break is not a clever objection. It is the discovery that empiricism, taken all the way down, dissolves the very things it was built to secure, and that what carries us through the day in their place is not reason but habit."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The book Hume rebuilt",
      "epigraph": {
        "text": "\"The less forcible and lively are commonly denominated Thoughts or Ideas.\"",
        "attribution": "— David Hume, *An Enquiry Concerning Human Understanding*, §2 (1748)"
      },
      "blocks": [
        {
          "p": "The *Enquiry* is a second draft of a failure. In 1739 [Hume](/philosophy/thinker/hume) had published *A Treatise of Human Nature*, a vast three-volume attempt to do for the human mind what Newton had done for the heavens, and almost no one read it. He decided the ideas were sound and the presentation was the problem: too long, too tangled, the good arguments buried in a young man's excess. So he took Book I, the part on knowledge and the understanding, and rebuilt it as a short, public book of twelve sections. That book, published in 1748, is the *Enquiry Concerning Human Understanding*. (It first appeared under the title *Philosophical Essays concerning Human Understanding*; the now-familiar name was the 1758 edition's.)"
        },
        {
          "p": "The book opens by sorting the entire contents of the mind into two kinds, distinguished by nothing more than vividness. Every perception, in Hume's word, is either forceful and lively or faint and dim. The vivid ones he calls impressions: the actual searing of a hand on a stove, the red of an actual sunset, a present stab of fear. The faint ones, \"the less forcible and lively,\" are \"commonly denominated *Thoughts* or *Ideas*.\" To remember the burn afterward, or picture a sunset with the eyes shut, or merely think about fear without feeling it, is to traffic in ideas, the pale copies of impressions. Hume names the dividing line precisely: the two classes differ \"by their different degrees of force and vivacity.\" Impressions are the originals, ideas the echoes, and the only difference is intensity."
        },
        {
          "p": "Impressions came first and ideas are their copies, which gives Hume the rule he will swing for the rest of the book. Trace any idea back, and it leads to some impression that produced it. The mind can shuffle and recombine ideas freely (a golden mountain is gold and a mountain glued together, both already seen), but it cannot manufacture a simple idea out of nothing. A man born blind has no idea of red because he never had the impression. This looks like a modest point about psychology. It is in fact a meaning-detector. Whenever a philosopher waves around a grand abstract term suspected of being empty, the test is to ask what impression it copies. If the impression turns up, the term means something. If it does not, the term is a word with nothing behind it, and out it goes. Most of metaphysics is about to fail this test."
        },
        {
          "p": "Hume points at the one case where his own rule seems to break, rather than hiding it. Suppose a man has seen every shade of blue except one, with that single shade left as a gap in an ordered chart of all the others. Could he, from the shades on either side, conjure the missing one in his mind without ever having had its impression? Hume grants that most people would say yes, which would make it a simple idea derived from no impression, a clean counterexample to his central law. He concedes the case, calls it too singular to overturn the general maxim, and moves on. Pointing at the hole in one's own floor and then arguing it is too small to fall through is a gamble, and it is exactly the kind of honesty that runs through the book: Hume would rather show the exception than pretend the system is airtight."
        }
      ]
    },
    {
      "num": 2,
      "title": "The fork",
      "epigraph": {
        "text": "\"All the objects of human reason or enquiry may naturally be divided into two kinds, to wit, Relations of Ideas, and Matters of Fact.\"",
        "attribution": "— David Hume, *An Enquiry Concerning Human Understanding*, §4 (1748)"
      },
      "blocks": [
        {
          "p": "Section 4 builds the book's second tool, the great sorting device now called Hume's fork. \"All the objects of human reason or enquiry,\" he writes, \"may naturally be divided into two kinds, to wit, *Relations of Ideas*, and *Matters of Fact*.\" Two bins, and Hume insists there is no third. Everything anyone can claim to know goes into one or the other, and the two have completely different powers."
        },
        {
          "p": "Relations of ideas are the truths of mathematics, geometry, and logic: established by thought alone, by seeing how the ideas hang together, with no need to check the world. That three times five is fifteen, that the angles of a triangle sum to two right angles, are certain, and their certainty does not depend on there being any actual fifteen things or any actual triangles anywhere in the universe. Their mark is that the contrary is a contradiction: a four-sided triangle is not merely false, it is unthinkable, it cancels itself out. These truths are certain. They are also empty, in the sense that they tell us nothing about what actually exists; they only unfold what is already contained in the definitions."
        },
        {
          "p": "Matters of fact are everything else: that the sun will rise, that fire is hot, that water boils, that Paris exists. Here the fork's edge comes out. \"The contrary of every matter of fact is still possible; because it can never imply a contradiction.\" The sun *failing* to rise tomorrow is a perfectly coherent thought. It can be pictured, it breaks no law of logic, it is merely (one assumes) not going to happen. A four-sided triangle cannot even be pictured; a sunless tomorrow can. That asymmetry is the whole engine of the book. It means no matter of fact can ever be proved the way a theorem is proved, because denying a theorem self-destructs and denying a fact never does. Matters of fact can be known one way only: through experience."
        },
        {
          "p": "Stated plainly, there are exactly two kinds of truth: the kind worked out in the head and the kind one has to go and check. The in-the-head kind is certain but says nothing about the world. The go-and-check kind says everything about the world but is never certain. Nothing is both. Hume's entire campaign is now just this: walk every grand claim of philosophy and religion up to the fork and ask which bin it goes in. Anything that fits neither, neither provable by pure logic nor checkable by experience, is not knowledge at all. It is words. In the next section he marches the most fundamental idea anyone has, cause and effect, straight up to the fork, and it does not survive the trip."
        }
      ]
    },
    {
      "num": 3,
      "title": "The billiard balls, and the crack in the world",
      "epigraph": {
        "text": "\"Motion in the second Billiard-ball is a quite distinct event from motion in the first; nor is there anything in the one to suggest the smallest hint of the other.\"",
        "attribution": "— David Hume, *An Enquiry Concerning Human Understanding*, §4 (1748)"
      },
      "blocks": [
        {
          "p": "This is the center of the book and the argument that made Hume immortal. The idea under examination is causation, the glue that seems to hold the whole world together. Everything anyone does assumes it: turn the key and the engine starts, let go of the cup and it falls, light the fuse and the bomb goes off. Buried inside that expectation is a conviction of *necessity*, that the effect not only will follow but *must*, that there is some real force or power by which the cause makes the effect happen. That conviction of necessary connection is the most important and most invisible idea anyone owns. Hume asks the meaning-detector's question: from what impression does the idea of necessary connection come? Find the experience that stamped it on the mind."
        },
        {
          "p": "His instrument is the most famous thought-experiment in the history of empiricism, the billiard balls, walked one move at a time. A white ball rolls across the felt toward a red ball: one event, fully visible. The white ball reaches the red and touches it: a second event, the contact, also visible. The red ball, which was still, begins moving away: a third event, also visible. White-moving, then touch, then red-moving. Hume's killing question is where, in all of that, the *necessity* was. Where was the force, the power, the making-happen binding the second motion to the first? It was nowhere in the picture. An observer sees one motion, a touch, another motion, and never the connection between them. \"Motion in the second Billiard-ball is a quite distinct event from motion in the first; nor is there anything in the one to suggest the smallest hint of the other.\" Strictly from the first event alone, before anyone had ever seen a billiard ball, anything could happen next: the red ball could vanish, fly upward, or stay put. Nothing in the white ball's motion *contains* the red ball's motion. What tells an observer what comes next is only that they have seen it before."
        },
        {
          "p": "Seeing it before is the whole of what experience actually delivers. All it ever gives is constant conjunction: A followed by B, over and over. Heat, then flame; flame, then heat; the cue ball strikes, the object ball moves, ten thousand times in a lifetime of watching. The conjunction is observed, the two events going reliably together; the connection, the necessity-glue between them, is never observed once. Run that through the meaning-detector. The idea of necessary connection must copy *some* impression, and it does not come from the outside world, where only constant conjunction is ever seen. So where does it come from? Hume's answer is the quiet bombshell of the *Enquiry*: it comes from inside. After flame has been followed by heat enough times, the mind forms a habit, and on seeing the one it slides automatically into expecting the other. The only impression of necessary connection to be found anywhere is that internal feeling of expectation, the mind's own learned reflex, which is then projected outward and mistaken for a force in things. \"After the constant conjunction of two objects—heat and flame, for instance, weight and solidity—we are determined by custom alone to expect the one from the appearance of the other.\" Hume names the principle flatly: \"This principle is Custom or Habit.\" Causation, the spine of all science, turns out to name a feeling in us, not a glue in the world."
        },
        {
          "p": "The move that tips the whole house over is the problem of induction. Induction is the everyday engine of all reasoning beyond the present moment: observe particular cases, draw a general expectation. Fire has burned every time so far, therefore it will burn next time; the sun has risen every recorded morning, therefore it will rise tomorrow. Every prediction and every step science takes runs on it. The silent assumption underneath every inductive step is that the future will resemble the past, that the unobserved cases behave like the observed ones. Hume states it exactly: all such reasoning proceeds \"upon the supposition that the future will be conformable to the past.\" Then he asks the simplest and most devastating question in philosophy: what justifies that supposition? How does anyone *know* the future will resemble the past?"
        },
        {
          "p": "There are only two possible answers and Hume closes both. Could pure reason prove it, making it a relation of ideas? No: a world whose course changes tomorrow, where fire freezes and bread poisons, is perfectly conceivable, it implies no contradiction, so logic cannot rule it out. The principle is not a theorem. Could experience prove it, then? This is the natural move (it has always worked before, so that is how we know) and it is exactly where the floor gives way. To argue that the future has always resembled the past *before*, therefore it will resemble the past *this time*, is to assume the very thing in question; it uses a past track record to vouch for the future, which only works *if* the future resembles the past. The argument bites its own tail. In Hume's words, \"any arguments from experience can prove this resemblance of the past to the future\" is impossible, \"since all these arguments are founded on the supposition of that resemblance.\" There is no third option. Reason cannot do it; experience cannot do it without circularity. Nothing rationally justifies the expectation that tomorrow will be like today. Not the sunrise, not the stove, not gravity, not one prediction anyone will ever make."
        },
        {
          "p": "What Hume does with that result matters as much as the result. He does not tell anyone to stop trusting the sunrise, and he does not descend into paralysis. He asks a better question: if reason does not ground the expectation of the future, what does? The answer is the one already found, custom. \"Custom, then, is the great guide of human life. It is that principle alone which renders our experience useful to us, and makes us expect, for the future, a similar train of events with those which have appeared in the past.\" The sun is expected to rise not because anyone has proved it will but because nature built the mind to form habits, and a lifetime of sunrises has worn the habit deep. The expectation is psychologically irresistible and rationally unjustified, and both are true at once. Skepticism wins the argument and changes nothing, because nature was never waiting for the argument to come out right. That is the crack in the world, and the strange calm Hume keeps standing beside it."
        }
      ]
    },
    {
      "num": 4,
      "title": "Liberty and necessity",
      "epigraph": {
        "text": "\"By liberty, then, we can only mean a power of acting or not acting, according to the determinations of the will.\"",
        "attribution": "— David Hume, *An Enquiry Concerning Human Understanding*, §8 (1748)"
      },
      "blocks": [
        {
          "p": "Section 8 turns the account of causation on a problem that had set philosophers against each other for centuries: whether human actions are free or determined. The standard picture treats freedom and necessity as enemies. Either a choice is *caused*, fixed by prior conditions like any billiard ball, in which case it is not really free; or it is *free*, which seems to mean uncaused, springing from nowhere. Pick one. Hume's move is to deny that the two are enemies at all, the position later called compatibilism: properly understood, freedom and necessity not only can both be true, they require each other."
        },
        {
          "p": "The trick is to clean up what each word actually means, using the analysis already in hand. \"Necessity,\" Hume has shown, is not some iron force out in the world; it is just constant conjunction plus the mind's habit of inferring one event from another. And human conduct shows exactly that pattern. People act in regular, predictable ways given their characters and circumstances; one expects a kind man to act kindly and a coward to flinch, and is right about it as reliably as one is right about flame and heat. So human action carries necessity in the only sense necessity ever had: regular conjunction and confident inference. There is no spookier necessity anywhere for it to lack."
        },
        {
          "p": "Freedom, meanwhile, was never the absence of causes; an uncaused action would not be free, it would be random, no more one's own than a twitch. Freedom is something else entirely. \"By liberty,\" Hume writes, \"we can only mean a power of acting or not acting, according to the determinations of the will.\" An action is free when it flows from the agent's own will rather than from chains or a gun to the head, when the person could have acted otherwise *had they chosen otherwise*. A prisoner is unfree; a man walking where he likes is free, and his walking is no less caused by his desires for being free. The opposite of liberty is not necessity but *constraint*."
        },
        {
          "p": "So the ancient deadlock dissolves once the words are fixed. Necessity (regular, inferable conjunction) is compatible with liberty (acting from one's own will), and morality actually *needs* both. Praise, blame, and punishment only make sense if actions flow reliably from a person's character, which is to say only if conduct is in this sense necessary; one does not blame a man for what was pure chance or forced on him at knifepoint. The position is characteristically deflationary. The grand metaphysical battle between free will and determinism turns out to have been, in large part, two camps using \"necessity\" and \"liberty\" to mean different things and talking past each other. Define the terms by what experience actually shows, and the war is a misunderstanding."
        }
      ]
    },
    {
      "num": 5,
      "title": "Of miracles",
      "epigraph": {
        "text": "\"That no testimony is sufficient to establish a miracle, unless the testimony be of such a kind, that its falsehood would be more miraculous, than the fact, which it endeavours to establish.\"",
        "attribution": "— David Hume, *An Enquiry Concerning Human Understanding*, §10 (1748)"
      },
      "blocks": [
        {
          "p": "Section 10, \"Of Miracles,\" is the book's most notorious chapter, and it is not a thunderbolt but a piece of bookkeeping. Hume does not say miracles are impossible. He defines one precisely: \"A miracle is a violation of the laws of nature.\" And the laws of nature, he points out, are exactly the things established by the most massive and uniform body of evidence anyone has, \"a firm and unalterable experience.\" The entire weight of all human experience says fire burns, the dead stay dead, water does not become wine. The laws are not idle guesses; they are the most heavily confirmed claims in existence."
        },
        {
          "p": "So a reported miracle is a collision of evidence. On one side stands the uniform experience of mankind, the full proof that the law holds. On the other stands a particular human testimony that on one occasion it broke. And human testimony, Hume notes drily, fails all the time: people lie, mistake, exaggerate, and deceive themselves, never more so than where wonder and religion are involved. The two weights have to be set against each other, and the question is which way the scale tips."
        },
        {
          "p": "Out of that comes the maxim, the most quoted sentence in his philosophy of religion: \"That no testimony is sufficient to establish a miracle, unless the testimony be of such a kind, that its falsehood would be more miraculous, than the fact, which it endeavours to establish.\" In plain terms, before crediting a report of a miracle, ask which would be the bigger miracle: that the laws of nature actually broke, or that this witness was mistaken or lying. A witness being wrong is the most ordinary thing in the world; a law of nature breaking is, by definition, the least ordinary thing in the world. So the testimony will essentially never clear the bar. It is the problem of induction's calm cousin: weigh the evidence honestly, and the uniform experience of the world will almost always outweigh the word of one excited witness. Hume has not refuted any particular religion. He has built a scale and shown that the miracle stories do not balance on it."
        }
      ]
    },
    {
      "num": 6,
      "title": "Commit it to the flames",
      "epigraph": {
        "text": "\"Commit it then to the flames: for it can contain nothing but sophistry and illusion.\"",
        "attribution": "— David Hume, *An Enquiry Concerning Human Understanding*, §12 (1748)"
      },
      "blocks": [
        {
          "p": "The last section gathers the whole book into a single test and then drops it on the entire library of metaphysics. The fork from Section 4 had two bins: relations of ideas, certain but empty, and matters of fact, informative but checkable only by experience. Section 12 turns that into a question to be put to any book on the shelf. Does it contain reasoning about quantity and number, the certain truths of mathematics? Or does it contain experimental reasoning about matters of fact and existence, the things experience can check? If a book holds neither, it holds nothing that counts as knowledge at all."
        },
        {
          "p": "Hume states the test and the verdict in one of the most quoted passages in philosophy: \"If we take in our hand any volume; of divinity or school metaphysics, for instance; let us ask, *Does it contain any abstract reasoning concerning quantity or number?* No. *Does it contain any experimental reasoning concerning matter of fact and existence?* No. Commit it then to the flames: for it can contain nothing but sophistry and illusion.\" The instruction is literal. Whole shelves of theology and metaphysics, the grand systems built on neither calculation nor observation, fit neither bin of the fork, which means they are not false so much as *empty*: words arranged to look like claims, with nothing behind them. The proper response is not refutation but the fire."
        },
        {
          "p": "The line is corrosive enough to explain Hume's career. The same arguments that made the *Enquiry* great kept him out of two universities on the charge that his philosophy led to atheism, and yet the book itself never asserts atheism, and the omission is deliberate. By the book's own rule, God's existence is a matter of fact, a claim about what exists, settled only by evidence and never by pure reason. Hume holds that the evidence offered for it falls far short, but he does not claim evidence proving the opposite, which would be the same overreach pointing the other way. The fork forbids the confident denial as firmly as it forbids the confident affirmation. The honest verdict, the one the whole book trains the reader toward, is suspension: not enough to affirm, not enough to deny."
        },
        {
          "p": "What the *Enquiry* leaves behind is a method and a temperament. The method is the meaning-detector and the fork: trace every idea to its impression, sort every claim into the two bins, and burn what fits neither. The temperament is the calm that survived the demolition. Hume proved that reason cannot ground causation, cannot ground the expectation of tomorrow, cannot establish a miracle or a God, and then reported, accurately, that none of this disturbs ordinary life, because custom carries the day where proof cannot. Across the Channel, Kant read the argument about causation and called it the thing that woke him from his dogmatic slumber, and spent the next era of philosophy trying to build back the floor Hume had pulled up. The book that fell dead-born in its first form turned out, in this second form, to set the agenda for everything that came after it."
        }
      ]
    }
  ]
}
