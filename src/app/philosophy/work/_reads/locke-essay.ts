// Opus AUTHOR draft of John Locke's *An Essay Concerning Human Understanding* WORK
// read (Step 2 of audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY
// from audits/philosophy-pipeline/locke-essay-fact-ledger.md (+ cross-ref the era-3
// read src/app/philosophy/rationalists-empiricists/narrative.ts, which it must not
// contradict and must go deeper than). PhiNarr shape is identical to nicomachean.ts /
// republic.ts; the reader at /philosophy/work/essay (route TBD) renders it.
//
// Quote doctrine: Locke wrote in English, so there is no translation layer. Every
// quoted line is Locke's own public-domain English, string-matched from Project
// Gutenberg (eBooks #10615 / #10616), cited by Book.chapter.section. "Tabula rasa" is
// NOT Locke's phrase and never appears as a quotation: his line is "white paper, void
// of all characters" (II.1.2); "tabula rasa" is named only as the later label.
// Paraphrase (Latin tags, framing labels) never appears inside quotation marks.

import type { PhiNarr } from '@/components/philosophy-reader'

export const LOCKE_ESSAY: PhiNarr = {
  "title": "Locke's Essay Concerning Human Understanding",
  "throughline": "One question runs the length of the book: where does everything in a human mind come from, and how far can the mind actually be trusted to know? Locke's answer is that nothing is stamped in at birth. The mind begins as white paper, and every idea it ever holds gets written on it by experience, through the senses and through the mind watching its own work. From those raw materials it builds everything else, sorts the qualities that are really in the world from the ones that are only ideas in us, runs on words that are no more than arbitrary signs, and ends up with a knowledge that is real but narrow, hedged on every side by what experience never delivered.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Godfrey_Kneller_-_Portrait_of_John_Locke_%28Hermitage%29.jpg/960px-Godfrey_Kneller_-_Portrait_of_John_Locke_%28Hermitage%29.jpg",
    "cap": "John Locke, painted by Godfrey Kneller in 1697 (State Hermitage Museum), eight years after the Essay appeared. Locke called himself an under-labourer, clearing the ground so the new science could build; the Essay is the ground-clearing.",
    "alt": "A 1697 oil portrait of John Locke, an older man in a dark robe with long hair, by Godfrey Kneller"
  },
  "hook": [
    "There is a stretch of 1689 that belongs to one man. In that single year John Locke (1632 to 1704) published the *Two Treatises of Government*, the *Letter Concerning Toleration*, and the book that asked the question under all the others: how does a human being come to know anything at all? That last book is the *Essay Concerning Human Understanding*, and it is the foundation the rest stands on. Before anyone can argue about rights or worship, Locke wanted to settle what the mind is and what it can reach, because almost every fight people have turns out to be a fight over ideas they never examined.",
    "The story of the book's own origin is small and telling. Locke and a few friends, by his account, got tangled in a debate (about morality and revealed religion) and ran themselves into a wall. It dawned on him that they were stuck not because the topic was too hard but because they had never asked the prior question: what are human minds *equipped* to know, and what is simply beyond their range? He set out to draw that boundary. Nearly twenty years later the result was four Books long.",
    "What the four Books do is straightforward to state and radical to follow through. Book I clears away the reigning theory, that the mind comes loaded with built-in ideas. Book II replaces it: everything in the mind arrives by experience, and Locke shows how the whole furniture of thought gets assembled from that one source. Book III turns to words, the signs thinking runs on, and the trouble they cause. Book IV asks the closing question, what knowledge actually is and how far it reaches, and the answer it reaches is: not nearly as far as people assume."
  ],
  "brk": {
    "beforeLabel": "The mind comes furnished: certain ideas and truths are stamped in at birth, the bedrock of all certainty",
    "afterLabel": "The mind starts as white paper; every idea is written on it by experience, and knowledge reaches only as far as experience does",
    "paragraphs": [
      "The view Locke set out to dismantle was respectable and widely held. Descartes (the previous era's founder of modern philosophy) had grounded certainty in ideas the mind possesses by its own nature, the idea of God among them, not derived from the senses. The Cambridge Platonists held that moral and religious truths are written on the soul from birth. And behind both ran an older tradition that treated certain logical and ethical maxims (\"whatever is, is\"; \"do as you would be done by\") as innate principles every mind agrees to. The appeal was obvious. If certainty is built in, it has a floor nothing can shake.",
      "Locke's break is to deny the floor and show the building stands without it. Book I argues that no principle and no idea is innate. The headline evidence is plain: if some truth were stamped on every mind, every mind would assent to it, and \"it is evident, that all children and idiots have not the least apprehension or thought of them.\" The usual reply, that the truths are there but need reason to draw them out, Locke turns into a trap: a thing that needs reasoning to reach was discovered, not found ready-made, and on that logic every conclusion reason ever reaches would count as innate, which empties the word. His deeper point cuts the same way. A truth \"never be thought innate which we have need of reason to discover.\"",
      "The positive claim follows in Book II and changes the subject of philosophy. The mind starts empty of content and gets everything from experience: ideas of the outer world through the senses, ideas of its own workings by watching itself, and nothing from any third source. Knowledge is then assembled out of those materials and reaches exactly as far as they do and no further. The concrete move is this. Before Locke, the ground of certainty was something the mind brought to experience. After Locke, the mind brings nothing but bare faculties, and experience supplies the rest, which means the limits of experience are the limits of knowledge. That reframing is what makes the *Essay* a break rather than one more theory of ideas, and it set the agenda for Berkeley and Hume after him."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "Book I: nothing is written in at birth",
      "epigraph": {
        "text": "\"it is evident, that all children and idiots have not the least apprehension or thought of them.\"",
        "attribution": "— John Locke, *Essay* I.2.4"
      },
      "blocks": [
        {
          "p": "The *Essay* opens by attacking a theory most of Locke's readers took for granted: that the mind comes furnished. The doctrine of innate ideas held that certain ideas and principles are stamped on every human mind at birth, prior to any experience, the way a maker might cast a coin already bearing its design. Logical maxims (whatever is, is; a thing cannot both be and not be), moral rules, the idea of God: these, the theory said, are not learned but built in, and that is precisely why they feel so certain. Locke's whole first Book is the dismantling of this, because the innate-ideas theory was the reigning account of where certainty comes from. Knock it out and the floor has to be rebuilt."
        },
        {
          "p": "The argument the innatists leaned on hardest was universal consent: everyone, everywhere, agrees to these principles, and what else but a built-in stamp could explain agreement that wide? Locke takes the argument apart on its own terms. First, the agreement is not actually universal. \"it is evident, that all children and idiots have not the least apprehension or thought of them.\" A newborn has no grasp whatever of \"whatever is, is\"; neither does someone too cognitively impaired ever to form the thought. (\"Idiots\" is Locke's period word, quoted as he wrote it.) If a principle were genuinely imprinted on the mind, it would have to be present in *every* mind that has it, and these minds plainly do not. So even granting that many adults assent to the maxim, that assent is something they came to, not something they were born holding."
        },
        {
          "p": "The innatists had a ready escape, and Locke had been waiting for it. The principles are there from birth, they answered, but latent; the mind needs to grow and use its reason before it can bring them to light. Locke springs the trap. If a truth has to be *discovered* by reasoning, then it was not lying there ready-made; it was worked out. And the cost of the escape is fatal: by that standard, every theorem reason ever proves would count as innate, since reason reaches it too, which drains \"innate\" of any meaning. His line is the hinge of Book I: a truth is \"never be thought innate which we have need of reason to discover.\" Either the principle is present without reasoning (and infants refute that) or it takes reasoning to reach (and then it is a conclusion, not an inheritance). The escape route is a dead end."
        },
        {
          "p": "Two clarifications keep this from being a caricature, and Locke is careful with both. The mind that starts empty of *ideas* is not a mind with no equipment. It comes with faculties, the powers to perceive, to compare, to remember, to reflect; what it lacks is content, not machinery. An oven with no bread in it is still an oven. And Locke's target is the ideas, not the truths. He does not deny that \"whatever is, is\" is true; he denies it was stamped on the mind before experience. The maxims are real, the morality is real; they are just *acquired*, reached through the materials experience supplies, not issued at birth. With the innate furniture cleared out, Book I leaves the room empty on purpose, and the rest of the *Essay* is the account of how it gets filled."
        }
      ]
    },
    {
      "num": 2,
      "title": "Book II: white paper, and the two fountains",
      "epigraph": {
        "text": "\"Let us then suppose the mind to be, as we say, white paper, void of all characters, without any ideas:—How comes it to be furnished?\"",
        "attribution": "— John Locke, *Essay* II.1.2"
      },
      "blocks": [
        {
          "p": "Book II states the famous image in its first pages. \"Let us then suppose the mind to be, as we say, white paper, void of all characters, without any ideas:—How comes it to be furnished?\" That is the figure: not a stone tablet, not a wax slate, but a sheet of blank paper waiting to be written on. The Latin tag tabula rasa (\"scraped tablet\") that everyone attaches to Locke is the later schoolroom label for the doctrine, with roots in an image from Aristotle; Locke's own phrase is \"white paper,\" a distinction that matters because the paper is the thing the rest of the Book explains. The question he sets himself is direct: if the mind starts blank, where does its \"vast store\" of ideas come from?"
        },
        {
          "p": "The answer is one word. \"To this I answer, in one word, from EXPERIENCE.\" Everything the mind holds was delivered by experience, and Locke names exactly two channels through which it arrives. \"These two are the fountains of knowledge, from whence all the ideas we have, or can naturally have, do spring.\" The first is sensation: the outer senses, reporting the world. Sight, hearing, touch, taste, smell convey ideas of colour, sound, hardness, heat, the qualities of bodies outside us. This is the obvious channel, the one any account of the mind has to include. Locke's contribution is the *second* fountain, the one earlier theories left out."
        },
        {
          "p": "That second channel is reflection: the mind turning its attention inward and watching its own operations. \"as I call the other Sensation, so I call this REFLECTION, the ideas it affords being such only as the mind gets by reflecting on its own operations within itself.\" When a person notices that they are *perceiving*, or *doubting*, or *willing*, or *remembering*, they pick up ideas of those activities, and those ideas could not have come from the senses, because perceiving and willing are not things out in the world to be seen or touched. They are the mind's own doings, and the mind learns them by introspection, an inner sense trained on itself. So the two fountains between them cover the whole supply: the world delivers ideas of bodies, the mind delivers ideas of thinking, and Locke insists there is no third source. Subtract both and the paper stays blank."
        },
        {
          "p": "From those raw materials the mind builds, and Locke's account of the building is the engine of Book II. The deliverances of the two fountains are simple ideas: a single colour, a particular smell, the bare feel of warmth, the sense of one's own act of thinking. A simple idea is unmixed and the mind cannot manufacture it; no one could conjure the idea of scarlet who had never seen a colour, any more than a person born blind could invent it from a description. The mind is purely passive in receiving them. But once it has a stock of simples, the mind goes to work *actively*, and this is where it earns its keep. It combines simple ideas into complex ideas (the idea of an apple is red and round and sweet and firm, several simples bound into one); it compares them to get ideas of relation; it abstracts, stripping away the particulars to form general ideas like \"triangle\" or \"animal.\""
        },
        {
          "p": "The payoff is a complete inventory of the mind with no innate deposit anywhere in it. Take an idea that looks too grand to have come from the senses, the idea of God: Locke argues it is built, not given, by taking simple ideas the senses and reflection supply (existence, knowledge, power, goodness) and extending each one to infinity. Even infinity is assembled, from the idea of repeating a quantity without ever having to stop. Everything decomposes, eventually, into simples that came through one of the two fountains. That is the whole claim of Book II in one line: complex thought is built out of simple experience, and there is no ingredient anywhere that experience did not deliver. The mind is an extraordinary builder, working with materials it did not make."
        }
      ]
    },
    {
      "num": 3,
      "title": "Book II: what is really out there, and what is only in us",
      "epigraph": {
        "text": "\"are in truth nothing in the objects themselves, but powers to produce various sensations in us; and depend on those primary qualities, viz. bulk, figure, texture, and motion of parts.\"",
        "attribution": "— John Locke, on secondary qualities, *Essay* II.8.14"
      },
      "blocks": [
        {
          "p": "Inside Book II sits one chapter that has outlived almost everything around it, because it asks a question that still bites: when an apple looks red and tastes sweet, how much of that is in the apple and how much is in the eater? Locke's answer divides the qualities of a body (a quality is the body's power to produce an idea in a perceiver) into two kinds, and the division decides which of our ideas actually resemble the world and which only mislead us into thinking they do. The distinction was not Locke's invention; Galileo and Descartes had drawn versions of it, and Locke took his terms directly from the chemist Robert Boyle, whose corpuscular science (the view that bodies are built of tiny particles) supplied the whole picture. Locke gave the distinction its most influential statement."
        },
        {
          "p": "The first kind are the primary qualities, and they are the ones genuinely in the body whether anyone is looking or not. Locke lists them: \"these primary ones in bodies that produce simple ideas in us, viz. SOLIDITY, EXTENSION, MOTION or REST, NUMBER or FIGURE. These, which I call ORIGINAL or PRIMARY qualities of body, are wholly inseparable from it.\" Solidity (taking up space and resisting other bodies), extension (size), figure (shape), motion or rest, number: these stay with a body through every change, and Locke's proof is the grain of wheat. Cut it in half and each half still has solidity, extension, figure, and motion. Cut it again, and again, down past what the eye can see, and the pieces still have them. A body cannot be divided into parts that lack shape or size. The primary qualities are not optional; they are what it *is* to be a body."
        },
        {
          "p": "The second kind are the secondary qualities, and Locke's claim about them runs against the obvious reading of experience. Colour, sound, taste, smell, warmth: these feel like they are sitting out there on the surface of things, but Locke says they are not in the things at all. They \"are in truth nothing in the objects themselves, but powers to produce various sensations in us; and depend on those primary qualities, viz. bulk, figure, texture, and motion of parts.\" There is no redness in the apple. What is in the apple is a particular surface texture, an arrangement of tiny particles with certain shapes and motions (all primary qualities), and that arrangement has the *power* to act on the eye and produce, in the perceiver, the idea of red. The redness is the idea; the apple holds only the machinery that triggers it. His own example is a violet, whose particles, \"by the impulse of such insensible particles of matter,\" cause \"the ideas of the blue colour, and sweet scent of that flower to be produced in our minds.\""
        },
        {
          "p": "The consequence is the sharp edge of the chapter, and Locke states it flatly: ideas of primary qualities *resemble* their cause, and ideas of secondary qualities do not. The idea of a marble's roundness is a fair copy of a roundness that is really in the marble. The idea of its colour copies nothing, because there is no colour in the marble to copy, only particles arranged to make the colour appear. So a large share of the world as experienced (its colours, its flavours, its music, its warmth) is not a report of the world as it is but a production staged in the perceiver by a colourless, tasteless arrangement of particles. The world out there has shape, size, and motion; the rest is added by the meeting of that world with a mind. Locke meant this as the sober reading of the new science, but he had loaded a charge that would go off in the next generation: if the colours are only in us, Berkeley would ask, why stop there, and what exactly keeps the shapes and sizes from being in us too?"
        }
      ]
    },
    {
      "num": 4,
      "title": "Book II: the prince and the cobbler, or what makes a person the same person",
      "epigraph": {
        "text": "\"a thinking intelligent being, that has reason and reflection, and can consider itself as itself, the same thinking thing, in different times and places.\"",
        "attribution": "— John Locke, defining a person, *Essay* II.27.11"
      },
      "blocks": [
        {
          "p": "Locke added a chapter to the second edition of the *Essay* (\"Of Identity and Diversity,\" II.27, not in the 1689 first edition) that opened a problem philosophy has argued over ever since: what makes a person at one time the *same* person as someone at an earlier time? It is not idle. Reward and punishment, promises and debts, praise and blame all assume that the person held to account today is the very one who acted years ago. Locke's answer breaks sharply with the old assumption that personal identity rides on some underlying *substance* (a soul, say) that stays the same underneath. He relocates the self entirely, and the relocation is the famous move."
        },
        {
          "p": "He starts by fixing what the word means, because the whole puzzle hinges on it. A person, for Locke, is \"a thinking intelligent being, that has reason and reflection, and can consider itself as itself, the same thinking thing, in different times and places; which it does only by that consciousness which is inseparable from thinking.\" The load-bearing word is *consciousness*. What makes someone a self, aware of being one continuous thing across time, is that consciousness reaches back: a person now can take up a past thought or act as their own. Memory, in other words, is the thread. As far as present consciousness can be extended backward to take in a past experience, that past experience belongs to the same person, and that is *all* personal identity consists in. Not the same soul, not the same body. The same reaching-back consciousness."
        },
        {
          "p": "To pry identity loose from substance Locke runs a thought experiment that has never left the philosophy classroom. Suppose the soul of a prince, carrying every memory of the prince's life, moved into the body of a cobbler whose own soul had departed. Who wakes up? Locke's verdict: \"should the soul of a prince, carrying with it the consciousness of the prince's past life, enter and inform the body of a cobbler... every one sees he would be the same PERSON with the prince, accountable only for the prince's actions: but who would say it was the same MAN?\" The figure in the bed is the same living human being (the same MAN) as the cobbler, since it is the cobbler's body. But it is the same *person* as the prince, because it carries the prince's consciousness and would rightly answer for the prince's deeds. Person and human being come apart. Identity of the self follows the consciousness, not the body it happens to inhabit and not the soul underneath."
        },
        {
          "p": "Locke knew he was making personal identity a matter of accountability, not metaphysics; he calls \"person\" a term that assigns actions to their owner. That is the strength of the view and also where its trouble lives. If the self is the span of what consciousness can reach, then a stretch of life genuinely forgotten falls outside the person who lived it, which sits uneasily with holding a man to a crime he honestly cannot recall. The standard objection (sharpened a half-century later by Thomas Reid, with the case of an officer who recalls a boyhood flogging when young, and later, as a general, recalls the officer but not the boy) presses on exactly that gap in the memory thread. Locke's relocation of the self into consciousness is one of the most consequential moves in the book, and it bought its elegance at the price of a puzzle no one has fully closed."
        }
      ]
    },
    {
      "num": 5,
      "title": "Book III: words, and the trouble with them",
      "epigraph": {
        "text": "\"The use, then, of words, is to be sensible marks of ideas; and the ideas they stand for are their proper and immediate signification.\"",
        "attribution": "— John Locke, *Essay* III.2.1"
      },
      "blocks": [
        {
          "p": "Locke gave a whole Book to language, which was unusual, and his reason is built into the structure of the *Essay*. Ideas live invisible inside one head; thought has to be carried between people, and words are the only freight. But thinking itself also runs on words, and a flaw in the words is a flaw in the thought. Having spent Book II showing that all ideas come from experience, Locke turns in Book III to the signs those ideas travel under, because most of the disputes that look like deep disagreements about the world turn out, on inspection, to be confusions about words. Clean up the language and a surprising number of philosophical quarrels simply dissolve."
        },
        {
          "p": "His core claim about what a word *is* sounds modest and is not. \"The use, then, of words, is to be sensible marks of ideas; and the ideas they stand for are their proper and immediate signification.\" A word stands, in the first place, for an idea in the mind of the person using it, not directly for a thing in the world. And the link between a sound and the idea it marks is not natural but chosen: \"not by any natural connexion that there is between particular articulate sounds and certain ideas, for then there would be but one language amongst all men; but by a voluntary imposition.\" The proof is the existence of more than one language. If \"dog\" were tied to the idea by nature, every people on earth would say \"dog\"; that they do not shows the tie is arbitrary, a convention a community settles into. Words are signs of ideas, hung on by agreement, and that is the whole of their meaning."
        },
        {
          "p": "Two consequences follow, and they are why Locke thought language was dangerous. First, since a word signifies the speaker's *idea*, two people can trade the same word for years while each attaches a different idea to it, and never notice, because the sound matches even though the meanings do not. They think they disagree about a thing when they merely use a word two ways, or think they agree when they do not. Second, general words (which is most of them) do not name real boundaries in nature so much as boundaries the mind has drawn. The general term \"gold\" stands for a bundle of observed qualities the mind has grouped and named; whether nature itself cuts the world at that exact joint is a further question the word quietly papers over. Language hands us ready-made categories and lets us forget we are the ones who built them."
        },
        {
          "p": "Locke catalogues the resulting abuses of words with the irritation of a man who has sat through too many empty arguments. Using words with no clear idea behind them at all, so the sound is just noise. Shifting a word's meaning mid-argument. Taking words for things, and assuming that because there is a single word there must be a single real essence answering to it. Inventing learned jargon that impresses without informing. His remedy is plain to the point of severity: use no word without a settled idea attached, keep that idea steady, and where a term is contested, state its meaning before proceeding. It reads like advice for clearer writing, and it is, but Locke meant it as something larger, a discipline for keeping thought honest, since a mind that lets its words drift has already lost hold of its ideas."
        }
      ]
    },
    {
      "num": 6,
      "title": "Book IV: what knowledge is, and how far it goes",
      "epigraph": {
        "text": "\"KNOWLEDGE then seems to me to be nothing but THE PERCEPTION OF THE CONNEXION OF AND AGREEMENT, OR DISAGREEMENT AND REPUGNANCY OF ANY OF OUR IDEAS.\"",
        "attribution": "— John Locke, *Essay* IV.1.2"
      },
      "blocks": [
        {
          "p": "The last Book finally asks the question the whole *Essay* was clearing the way for: given that every idea comes from experience, what is *knowledge*, and how far can it reach? Locke's definition is narrow and exact. \"KNOWLEDGE then seems to me to be nothing but THE PERCEPTION OF THE CONNEXION OF AND AGREEMENT, OR DISAGREEMENT AND REPUGNANCY OF ANY OF OUR IDEAS. In this alone it consists.\" To know something is to *perceive* how two ideas stand to each other: that they agree, or clash. To know that white is not black is to perceive that the idea of white and the idea of black disagree. Where that perception is present there is knowledge; where it is absent there is at best belief, however confident. Knowledge is the mind seeing the fit, or the misfit, between its own ideas."
        },
        {
          "p": "Locke then ranks knowledge by how directly the mind perceives the fit, and the ranking explains why some things feel rock-solid and others shaky. The surest is intuitive knowledge, where the mind sees the agreement of two ideas immediately, in one glance, the way it sees that white is not black or that three is more than two; nothing stands between the ideas, so the certainty is total. Next is demonstrative knowledge, where the connection is real but the mind cannot see it directly and has to reach it through a chain of intervening steps, each one intuitive, the way a geometric proof links its start to its end through a sequence of obvious moves. The chain is only as strong as the attention that holds it, so demonstration, though certain, costs effort and can slip. Below both is sensitive knowledge, the assurance that particular things exist outside us right now, when something is actually present to the senses; Locke grants it the name of knowledge, though it is the least of the three."
        },
        {
          "p": "Knowledge, on Locke's own definition, is hemmed in tight. \"we can have knowledge no further than we have IDEAS,\" and we have ideas of very little, since the two fountains deliver only what they happen to deliver. Worse, even among the ideas we *do* have, we often cannot perceive whether they agree, so knowledge stops short of our ideas too. The deep texture of bodies (the real inner constitution that makes gold yellow and heavy) lies past what the senses report, so the natural sciences, Locke says soberly, will mostly be well-grounded *belief* rather than strict knowledge. This is the honest yield of the empiricist starting point: build everything from experience, and the knowledge that results is genuine but small, fenced on every side by what experience never brought in. Locke does not find this gloomy. The candle of reason, he says in effect, is bright enough for our purposes, which are practical: to know enough to act well and live decently, not to know everything."
        },
        {
          "p": "Where knowledge gives out, Locke is careful about what may fill the gap, and Book IV closes by policing the border between reason and faith. He defines each so the line is clean. Reason is \"the discovery of the certainty or probability of such propositions or truths, which the mind arrives at by deduction made from such ideas, which it has got by the use of its natural faculties; viz. by sensation or reflection.\" Faith, by contrast, \"is the assent to any proposition, not thus made out by the deductions of reason, but upon the credit of the proposer, as coming from God.\" Faith has its own province, beyond reason's reach, where revelation may deliver what the natural faculties cannot. But Locke sets a firm rule at the boundary: a claimed revelation cannot overturn what reason plainly knows, and reason itself must judge whether an alleged revelation really comes from God. Faith above reason, yes; faith against clear reason, no. It is the same instinct that runs the whole book, drawing the limits of the understanding so that what lies inside them can be trusted, and what lies outside is named honestly as something other than knowledge."
        }
      ]
    }
  ]
}
