// Opus AUTHOR draft of Hume's *A Treatise of Human Nature* WORK read (Step 2 of
// audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/hume-fact-pack.md (+ the era-3 rationalists-empiricists
// baseline), and cross-checked against src/app/philosophy/thinker/_reads/hume.ts, which
// it must not contradict and must go DEEPER than. This is the work-level deep read below
// the HUME thinker read; the five critic gates + the structural gates run against THIS
// file before it ships. PhiNarr shape is identical to nicomachean.ts / republic.ts; the
// reader at /philosophy/work/treatise (route TBD) renders it.
//
// Quote doctrine: every quoted line is verbatim PD Hume, authored from the verified
// davidhume.org text (keyed to Selby-Bigge/Nidditch, Gutenberg #4705 backup), cited by
// Book.part.section. The "fell dead-born" line is from "My Own Life" (1776), framed as
// Hume's own LATER verdict, never as the Treatise's text. Paraphrase-only items (the
// Newton-of-the-mind gloss, constant-conjunction at Treatise altitude, the natural/
// artificial-virtue material, the Appendix bind restated) never appear inside quotation
// marks. Goes deeper than the Enquiry-built thinker read on exactly the two things the
// Enquiry dropped: the bundle self (I.IV.6 + the Appendix confession) and the is/ought
// gap (III.I.1). [VERIFY] tags would mark material not in the fact pack; there are none.

import type { PhiNarr } from '@/components/philosophy-reader'

export const HUME_TREATISE: PhiNarr = {
  "title": "Hume's A Treatise of Human Nature",
  "throughline": "A twenty-something Scot sat down to be the Newton of the human mind, to find the laws underneath thought, feeling, and right and wrong the way Newton had found the laws underneath the planets. He built a single tool first, that every idea in the head is a faint copy of some experience that produced it, and then ran it without mercy over the ideas everyone had been leaning on without checking. It dissolved the necessary connection inside cause and effect. It dissolved the enduring self into a bundle of passing perceptions, and then dissolved even Hume's own account of that. And in the volume on morals it caught every moral system in the same quiet trick, sliding from what *is* to what *ought* without ever showing the bridge. The book sank on publication, and by Hume's own later word fell dead-born from the press. It is now generally read as the deepest thing he wrote.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Painting_of_David_Hume.jpg",
    "cap": "David Hume, painted by Allan Ramsay in 1754, about fifteen years after the *Treatise* appeared. National Galleries of Scotland (PG 3521). The earlier of Ramsay's two Hume portraits, the one nearer in age to the young man who wrote the book.",
    "alt": "Oil portrait of David Hume as a younger man, in a dark coat against a plain ground, head turned slightly toward the viewer",
    "portrait": true
  },
  "hook": [
    "*A Treatise of Human Nature* came out in three volumes in 1739 and 1740, and almost nobody read it. Its author was a Scot barely into his twenties who had drafted most of it in a French country town, and who meant it to do for the mind what Newton had done for the heavens: stop spinning systems out of the head, observe how the thing actually behaves, and find the laws underneath. The full title says the ambition out loud: *A Treatise of Human Nature: Being an Attempt to Introduce the Experimental Method of Reasoning into Moral Subjects*. \"Moral subjects\" meant the whole of human life, knowledge, emotion, conduct, and the experimental method meant Newton's: generalize from what is observed, never from what would be convenient.",
    "It sank without a ripple. Decades later, in the short autobiography he wrote months before his death, Hume delivered the verdict that has clung to the book ever since: it \"fell dead-born from the press, without reaching such distinction, as even to excite a murmur among the zealots.\" That line is regularly misread as history's judgment. It is Hume's own retrospective judgment on the book's first reception, written in 1776. He came to think he had buried good arguments in a young man's overlong book, and he recast the best of them later into the leaner *Enquiries*. Posterity then reached back past those polished versions to the dense original, which is now generally regarded as his masterwork and the deepest thing he ever wrote.",
    "The *Treatise* has three Books, and they march in order: Book I, *Of the Understanding*, on where the mind's contents come from and what they can prove; Book II, *Of the Passions*, on the emotions and what actually moves a person to act; Book III, *Of Morals*, on where right and wrong come from. The famous results that the leaner *Enquiry* later left out live in Books I and III: the self dissolved into a bundle, and the gap between *is* and *ought*. Those are the deep end of the book, and they are where it goes furthest past the version most readers meet."
  ],
  "brk": {
    "beforeLabel": "Run experience carefully and it builds solid knowledge: of cause, of the self, of right and wrong",
    "afterLabel": "Run experience honestly and it dissolves all three, and a habit of the mind holds the floor up instead",
    "paragraphs": [
      "The empiricists before Hume (the camp that held all knowledge starts in experience, not in reason working on its own) were running a confident program. Locke had cleared the ground, arguing the mind comes into the world as blank paper and every scrap of content gets written there by the senses. Berkeley had pressed harder, arguing we never meet \"matter\" at all, only our own ideas. Both still believed the program *built* things: start from experience, reason carefully, and arrive at solid knowledge of cause and effect, of a continuing self, of an ordered world worth relying on. The *Treatise* set out in that spirit. Its first Book hands itself a single empiricist rule, that every idea must trace back to some experience that produced it, and goes looking for the experience behind each grand idea the philosophers had been using.",
      "That confidence is the natural one, and breaking it took nerve. Of course experience grounds knowledge of the world. Touch the stove and get burned, and now one knows stoves burn. The sun has risen every day of a life, so of course it rises tomorrow. Experience is the thing that teaches how the world works, and reading those lessons off the senses is what learning is. Locke and Berkeley were not naive to think so; they were stating what looks like plain sense.",
      "Hume's move is to take that one rule and apply it without exception, including to the ideas empiricists themselves had never put to the test. Trace the idea of a *necessary connection* between cause and effect back to its experience, and the trace fails: a ball strikes a ball ten thousand times and the necessity binding them never once appears, only one event and then the next. Trace the idea of an enduring *self* inward to the impression it copies, and there is no such impression, only a rush of passing perceptions. Look for the warrant that the *future will resemble the past*, the silent premise under every prediction, and it cannot be supplied without arguing in a circle. The concrete move is always the same: demand the experiential receipt, and watch it fail to appear.",
      "So consistent empiricism turns out to be corrosive. The same rule that dissolved the rationalists' airy concepts does not stop there. Run honestly, with no exceptions for the ideas no one can live without, it eats causation, it eats the self, and in Book III it exposes the hidden seam in every moral system, where each one slides from *is* to *ought* without ever showing how. The tool Locke built to construct knowledge becomes a solvent. And the *Treatise* reports back calmly, because Book I also works out the thing that makes the result survivable: a habit of the mind, not a proof, is what holds the everyday floor up, and a habit needs no permission from reason to do its job."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The book that fell dead-born",
      "epigraph": {
        "text": "\"Never literary attempt was more unfortunate than my Treatise of Human Nature. It fell dead-born from the press, without reaching such distinction, as even to excite a murmur among the zealots.\"",
        "attribution": "— David Hume, \"My Own Life\" (1776)"
      },
      "blocks": [
        {
          "p": "[Hume](/philosophy/thinker/hume) wrote the *Treatise* young, mostly in his early-to-mid twenties, much of it during a three-year stay in France at La Flèche in Anjou, the town where Descartes had been schooled by the Jesuits a century before. He was not being modest about the size of the project. The book's subtitle states it flatly: it is *An Attempt to Introduce the Experimental Method of Reasoning into Moral Subjects*. Newton had refused to invent forces and then look for them; he observed how bodies actually move and read the laws off the motion. Hume wanted to do the same for the inside of a human being: observe how ideas actually behave, how feelings actually move people, how moral approval actually arises, and find the laws governing all of it. The aim was nothing less than a science of human nature built on Newton's method rather than on the systems the rationalists had spun out of pure reason."
        },
        {
          "p": "The three volumes appeared in 1739 and 1740, and they did not catch. More than three decades later, dying of an intestinal cancer and writing the short, dry autobiography \"My Own Life,\" Hume passed sentence on his own first book: it \"fell dead-born from the press, without reaching such distinction, as even to excite a murmur among the zealots.\" The phrase is precise and it is regularly misused. It is not posterity's verdict; it is Hume's verdict on how the book landed *at the time*. What he meant, and the rest of his career bears it out, is that he thought the failure was partly his own doing: he had packed brilliant arguments into a sprawling young man's book, and the good was lost in the bulk."
        },
        {
          "p": "So he did the rare thing and rewrote himself. The epistemology of Book I he recast as *An Enquiry Concerning Human Understanding* in 1748, shorter and aimed at an educated public; the morals of Book III became a second *Enquiry* in 1751, which he came to call, in \"My Own Life,\" \"of all my writings, historical, philosophical, or literary, incomparably the best.\" For a long time the *Enquiries* were the Hume people read. Then philosophy reached back. The *Treatise* is now generally taken as the deeper and more original text, the place where the arguments run furthest before Hume tidied and softened them, and modern work on him keeps returning to it rather than to the leaner books he preferred."
        },
        {
          "p": "The book the rewrites left behind dropped its two most radical stretches. The leaner epistemology kept the assault on causation and induction, but cut almost entirely the long, vertiginous argument of Book I that there is no such thing as a continuing self. The leaner morals kept the sentimentalism, but does not carry the famous paragraph of Book III where Hume catches every moral writer sliding from *is* to *ought*. Both of those are in the *Treatise* and only really in the *Treatise*, which is why the original survived its own author's second thoughts. The three Books run in order: the understanding, the passions, and morals, with the dissolved self and the *is*/*ought* gap carrying the weight they deserve, since they are the parts the famous version leaves out."
        }
      ]
    },
    {
      "num": 2,
      "title": "Impressions and ideas: the one tool",
      "epigraph": {
        "text": "\"Those perceptions, which enter with most force and violence, we may name impressions: and under this name I comprehend all our sensations, passions and emotions, as they make their first appearance in the soul.\"",
        "attribution": "— David Hume, *A Treatise of Human Nature*, I.I.1 (1739–40)"
      },
      "blocks": [
        {
          "p": "Book I opens by building the tool that does all the later damage, and it builds it so calmly that its purpose stays hidden until the demolitions arrive. Everything that ever passes through the mind, every perception in Hume's broad sense, divides into two kinds, told apart by nothing more than *force and liveliness*. The vivid ones are impressions: \"Those perceptions, which enter with most force and violence, we may name impressions: and under this name I comprehend all our sensations, passions and emotions, as they make their first appearance in the soul.\" The actual searing of a hand on a stove, the red of an actual sunset, a stab of actual fear, all impressions, immediate and forceful. The faint ones are ideas, \"the faint images of these in thinking and reasoning.\" To remember the burn afterward, or picture the sunset with the eyes shut, is to traffic in ideas, the paler copies. The whole difference is intensity, the way the memory of pain stands to the pain."
        },
        {
          "p": "The rule that turns this sorting into a weapon is the copy principle: \"That all our simple ideas in their first appearance are deriv'd from simple impressions, which are correspondent to them, and which they exactly represent.\" Every idea in the head is a copy of some impression actually had. The mind can shuffle and recombine freely, gluing gold and a mountain into a golden mountain it never saw, but a *simple* idea cannot be conjured from nothing. A man born blind has no idea of red, because he never had the impression of it. This reads as a modest point about psychology. It is in fact a meaning-detector. Whenever a philosopher leans on some grand abstract term suspected of being empty noise, the term goes up against one question: from what impression is that idea derived? If the impression turns up, the idea is legitimate. If not, the word has nothing behind it, and out it goes. Book I is about to march substance, necessary connection, and the self up to that test, and watch them fail."
        },
        {
          "p": "Hume will not hide the one place his own rule seems to crack, and the way he handles it shows the kind of thinker the *Treatise* is run by. It is the missing shade of blue. Suppose a man has had his sight for thirty years and seen every shade of every color except one particular shade of blue, which he has somehow never met. Lay out a chart of all the blues in order, with that one shade left as a gap. Could he, from the shades on either side, raise the missing one in his mind's eye, having never had its impression? Hume grants that most people would say yes, and if yes, here is a simple idea that came from no impression, a clean counterexample to his own central law. He concedes it. He calls the case \"so particular and singular, that 'tis scarce worth our observing, and is not able to overturn our general maxim,\" and moves on. Pointing at the hole in one's own floor and arguing it is too small to fall through is a gamble, and readers have worried at that hole for centuries. The instinct is the *Treatise*'s signature: expose the exception rather than pretend the system is seamless. Book I will do exactly this again, on a far larger scale, when it gets to the self."
        }
      ]
    },
    {
      "num": 3,
      "title": "The crack in cause and effect",
      "epigraph": {
        "text": "\"the necessary connexion betwixt causes and effects is the foundation of our inference from one to the other. The foundation of our inference is the transition arising from the accustomed union. These are, therefore, the same.\"",
        "attribution": "— David Hume, *A Treatise of Human Nature*, I.III.14 (1739–40)"
      },
      "blocks": [
        {
          "p": "The longest stretch of Book I turns the copy principle on the idea that seems to hold the whole world together: cause and effect, and the conviction of *necessity* buried inside it. Everything anyone does assumes it. Turn the key and the engine starts; let go of the cup and it falls. The expectation is not just that the effect *will* follow but that it *must*, that some real force or power makes the cause produce the effect. That conviction of necessary connection is the most important and most invisible idea a person owns, and Hume asks the copy-principle question of it: from what impression does the idea of necessary connection come? Find the experience that stamped it on the mind."
        },
        {
          "p": "The search comes up empty in the world. One event gives way to another, observed as closely as anything can be, and what is there is a sequence: one motion, then a touch, then a second motion. The necessity, the making-happen, the power binding the second to the first, is nowhere in the picture. Strictly from the first event, before the world has been watched, *anything* could follow. All experience ever supplies is what Hume calls constant conjunction: A followed by B, over and over, heat then flame, the strike then the motion, a lifetime of one thing reliably trailing the next. The conjunction is seen ten thousand times; the connection, the glue, is never once seen. By the copy principle the idea of necessary connection must come from *some* impression, and it does not come from out there, where only constant conjunction is ever found."
        },
        {
          "p": "So Hume finds its source inside. After enough repetitions of A then B, the mind forms a habit, and on meeting A it slides automatically into expecting B. The only impression of \"necessary connection\" anyone can actually point to is that internal feeling of expectation, the mind's own learned reflex, which is then projected outward and mistaken for a force in things. Necessity turns out to be a *determination of the mind*, a habit dressed up as a law of nature. The spine of all science, the most solid-seeming thing there is, names a feeling in us rather than a glue in the world. The *Treatise* states this and does not flinch, and Hume is careful that the result changes nothing about how anyone lives: nature built the habit, the sun will be expected to rise tomorrow whether or not the expectation can be justified, and the leaner *Enquiry* would later carry exactly this argument to a wide public in its sharpest, most quotable form. (The billiard-ball version, the line about being \"determined by custom alone,\" belongs to that later book; the thinker read walks it move by move.) The causation chapter lays the ground for everything after: if the most rock-solid idea anyone owns is really a habit of the mind, the same scalpel can be turned on the self, which is where Book I goes next, and on the very idea of an *ought*, which is where Book III ends up."
        }
      ]
    },
    {
      "num": 4,
      "title": "The self dissolved: the bundle, and the labyrinth",
      "epigraph": {
        "text": "\"they are nothing but a bundle or collection of different perceptions, which succeed each other with an inconceivable rapidity, and are in a perpetual flux and movement.\"",
        "attribution": "— David Hume, *A Treatise of Human Nature*, I.IV.6 (1739–40)"
      },
      "blocks": [
        {
          "p": "This is the most radical thing in the book, and the *Enquiry* would later leave it almost entirely out. Having dissolved the necessary connection out in the world, Book I turns the same tool inward on the one thing that should be beyond doubt: not the body, but the *self*, the \"I,\" the single continuous someone assumed to sit behind every experience and have it. Descartes had made it the bedrock of everything, the one thing he could not doubt, a thinking substance proved by pure reason. Hume asks of it exactly what he asks of every grand idea: the self, from what impression is that idea derived? Find the experience that gives us the \"I.\""
        },
        {
          "p": "The search is the argument. Turn the attention inward and try to catch this bare self that supposedly underlies everything, and what actually turns up is a perception: a feeling of warmth, a patch of color, a thought, a twinge, a flicker of memory. Try again and there is another perception, and another. The *perceiver* never appears, only the perceptions. \"I never can catch myself at any time without a perception, and never can observe any thing but the perception.\" There is no impression of a bare self, because every time the mind looks inward it finds more contents and never the container. By the copy principle, an idea with no impression behind it is empty. The unified \"I\" is a word for something never actually experienced."
        },
        {
          "p": "So Hume offers the replacement that the *Treatise* is famous for. The self is not a thing that *has* perceptions; it is \"nothing but a bundle or collection of different perceptions, which succeed each other with an inconceivable rapidity, and are in a perpetual flux and movement.\" No soul-substance holds the experiences together; there is just the fast-running stream of them, one after another, and \"the self\" is the bundle's name. Not a person who is having a day, but the day happening. There is no still someone behind the parade of thoughts and feelings; there is the parade, and \"you\" is what the parade is called. Hume's image for it is the theatre: \"The mind is a kind of theatre, where several perceptions successively make their appearance; pass, re-pass, glide away, and mingle in an infinite variety of postures and situations.\" A theatre, the perceptions the actors crossing the stage. Hume catches his own metaphor before it misleads: the comparison must not be taken to imply an actual stage the perceptions appear on, or an audience watching them. There is no theatre, no spectator in the seats, no place where it all happens. There are only the appearings, a play with no building and no one in the room."
        },
        {
          "p": "Structurally this completes Berkeley's move. Berkeley had used empiricist tools to dissolve *material* substance, the stuff supposedly standing behind perceptions of the outer world: we never perceive matter, only ideas, so matter as an unperceived substrate is empty. Hume takes the identical step and applies it to *mental* substance, the soul or self supposedly standing behind the inner perceptions: we never perceive a self, only perceptions, so the self as an underlying substrate is equally empty. Berkeley pulled the floor out from under matter; Hume, with the same tool used more consistently, pulls it out from under the soul. The empiricist solvent does not respect the line between outer and inner. It eats both."
        },
        {
          "p": "And then the part the famous version drops and the *Treatise* alone preserves: Hume decided the account did not work, and printed the failure. In an Appendix he wrote later for the book, he came back to the self and admitted he could not make it hang together. He had argued both that the distinct perceptions are genuinely *separate* existences, and that the mind never perceives any real connection binding them. Yet something does, undeniably, bind them into the single running stream a mind actually is, and he could not say what without smuggling back in exactly the kind of real connection, or real self, he had spent the chapter denying. \"I find myself involv'd in such a labyrinth,\" he confessed, \"that, I must confess, I neither know how to correct my former opinions, nor how to render them consistent.\" He needs the perceptions to be wholly separate, with no real connections anywhere, the heart of his argument, and he needs *something* to bind them into the one stream a mind actually is, and he cannot supply the binding without sneaking back the connection he dissolved. He left the objection to his own theory standing, unsolved, in print. It is the second loaded gun he hands his own critics, after the missing shade of blue, and it is the surest sign of what the *Treatise* is: a book willing to follow its method past the point where its author can keep up with it."
        }
      ]
    },
    {
      "num": 5,
      "title": "Of the passions: reason the slave",
      "epigraph": {
        "text": "\"Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.\"",
        "attribution": "— David Hume, *A Treatise of Human Nature*, II.III.3 (1739–40)"
      },
      "blocks": [
        {
          "p": "Book II, *Of the Passions*, is the bridge between the understanding and morals, and it carries the line of Hume that gets quoted most and understood least: \"Reason is, and ought only to be the slave of the passions, and can never pretend to any other office than to serve and obey them.\" At a glance it sounds like a philosopher cheerfully recommending that one throw out the brain and run on feeling. It is the opposite of that. It is one of the most precise claims about human action ever made, and the *Treatise* is the book where Hume works it out in full before the *Enquiries* compress it."
        },
        {
          "p": "\"Passions,\" for Hume, means roughly what would now be called desires, drives, and emotions: the things a person *wants*, the ends ultimately cared about. The claim has two halves. First, reason by itself can never move anyone to act. Reason is a calculating faculty; it tells what is true and what follows from what, traces causes and effects and means and ends. But knowing a fact has never, on its own, gotten anyone out of a chair. Reason can establish that *this road leads to the city*; it cannot supply the wanting to go to the city. The destination has to come from a passion, a desire. Reason discovers the route; desire supplies the place worth reaching, and the fuel for the trip. Second, the half that dissolves the apparent nihilism: any apparent fight between \"reason\" and \"passion\" is mislabeled. When reason seems to wrestle a craving and win, what actually happened is that one passion (say, a calm long-term concern for one's health) overcame another passion (the immediate craving), with reason's only job being to inform them both, to point out that the cake will make one sick. What opposes a passion is always another passion. Reason cannot, all by itself, want anything, so it cannot, all by itself, want *against* anything either."
        },
        {
          "p": "\"Slave of the passions,\" then, is not contempt for reason and it is not a license for impulse. It is a job description. Wants set the destination; reason finds the route. A person who somehow ran on pure reason with no desires at all would not be a perfect sage but inert, a flawless map-reader with nowhere any wish to go. And this is where Book II hands Book III its foundation, because if reason cannot supply our ultimate ends, then it cannot supply our *moral* ends either. The caring about others, the approval of kindness, the horror at cruelty: none of that comes from reason. It comes from feeling. Reason maps the consequences of an act; something else supplies the verdict of approval or disapproval. Book III is the working-out of where that verdict comes from, and the answer, sentiment rather than proof, is exactly where Hume thinks moral judgment ought to live, given everything Book I showed about how little proof can really do."
        }
      ]
    },
    {
      "num": 6,
      "title": "Of morals: the gap between is and ought",
      "epigraph": {
        "text": "\"instead of the usual copulations of propositions, is, and is not, I meet with no proposition that is not connected with an ought, or an ought not.\"",
        "attribution": "— David Hume, *A Treatise of Human Nature*, III.I.1 (1739–40)"
      },
      "blocks": [
        {
          "p": "Book III, *Of Morals*, opens from the conclusion Book II reached: moral distinctions are not the work of reason. They are felt. A person approves of a generous act or recoils from a cruel one not by deducing a conclusion but by a movement of sentiment, a feeling of approval or disapproval that arises, Hume argues, through *sympathy*, the natural human capacity to catch and share other people's feelings. We feel the good an action spreads and the harm it prevents, and that felt approval *is* the moral judgment. Reason traces what produces what; sympathy delivers the verdict. Morality on this account is real and substantial, built on feeling rather than on proof. Hume draws one distinction inside it that seeds a whole later school: some virtues are *natural*, approved on sight because sympathy makes the good they do felt immediately (compassion, generosity); others are *artificial*, built conventions like justice and keeping promises, approved not because each single act feels good but because the whole system of such rules, kept by everyone, is what makes a society livable. \"Artificial\" does not mean fake; it means made. That lands Hume on the usefulness of a rule as the root of much of morality, and a generation later the utilitarians would make that usefulness the whole of ethics."
        },
        {
          "p": "Then, near the end of the first part of Book III, comes the observation that quietly unsettled a way of doing ethics that had run for centuries. Hume reports it in the tone of a man noticing a recurring trick. Reading every system of morality he had met, he kept catching the same slide. The author reasons along in the ordinary way for a while, making claims about what *is* the case, about God, about human nature, about how society works, and then, of a sudden, the sentences change: instead of *is* and *is not*, every proposition is now joined by an *ought* or an *ought not*. The passage is exact, and the exactness matters:"
        },
        {
          "p": "\"In every system of morality, which I have hitherto met with, I have always remark'd, that the author proceeds for some time in the ordinary way of reasoning, and establishes the being of a God, or makes observations concerning human affairs; when of a sudden I am surpriz'd to find, that instead of the usual copulations of propositions, *is*, and *is not*, I meet with no proposition that is not connected with an *ought*, or an *ought not*. This change is imperceptible; but is, however, of the last consequence. For as this *ought*, or *ought not*, expresses some new relation or affirmation, 'tis necessary that it shou'd be observ'd and explain'd; and at the same time that a reason should be given, for what seems altogether inconceivable, how this new relation can be a deduction from others, which are entirely different from it.\""
        },
        {
          "p": "The point is that an \"ought\" is a genuinely *new* kind of relation, and it cannot simply be deduced from premises that only ever stated what *is*, not without some further premise that has already brought an \"ought\" in from somewhere. From \"this drug is addictive and ruins lives,\" all statements of fact, nothing about what anyone *ought* to do follows, until a premise like \"no one ought to ruin lives\" is added, and that premise is itself an *ought* fetched from outside. Pile up facts however high, and they never by themselves force a value. The careful reading matters here, because the passage is among the most over-claimed in philosophy. Hume does not triumphantly announce that an ought can *never* come from an is. He says the transition is \"imperceptible,\" that it is \"of the last consequence,\" and that a reason for it \"should be given\" and the new relation \"observ'd and explain'd.\" He is demanding that the bridge be shown, not declaring it impossible. The later nickname for an alleged unbridgeable chasm is a twentieth-century label, not Hume's own term."
        },
        {
          "p": "The effect on ethics was the same either way. Every moral system that claimed to read its values straight off the facts of nature, *this is how humans are, therefore this is how they ought to live*, now had to show its work at the exact join where it slipped from *is* to *ought*, and most of them, it turned out, had no work to show. It is the same nerve that runs through the whole *Treatise*. Book I demanded the experiential receipt for the idea of necessary connection and the idea of a self, and watched both fail to appear. Book III demands the receipt for the move from fact to value, and finds it missing too. The book that fell dead-born had located, in three separate places, the seam where the floor gives way: under causation, under the self, and under the word *ought*, and it pointed at each one and reported, in a tone of perfect calm, that there was nothing holding it up."
        }
      ]
    }
  ]
}
