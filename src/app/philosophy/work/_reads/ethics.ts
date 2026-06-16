// Opus AUTHOR draft of Spinoza's *Ethics* WORK read (Step 2 of
// audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/spinoza-ethics-fact-ledger.md (+ cross-ref the shipped
// descartes.ts thinker read, which it must not contradict — descartes.ts already frames
// Spinoza's one-substance dissolution of the mind-body problem and "God, or Nature").
// PhiNarr shape identical to nicomachean.ts / meditations.ts / republic.ts; the reader
// at /philosophy/work/ethics (route TBD) renders it.
//
// Quote doctrine: every quoted line is R.H.M. ELWES's 1883 public-domain translation
// (Project Gutenberg #3800), string-matched in the fact ledger, cited by Part +
// definition/proposition. The Latin tags Deus sive Natura, conatus, and Ordine
// Geometrico Demonstrata are LABELS/paraphrase, never inside quote marks (Elwes writes
// "God or Nature"). No em-dashes in narration (only inside verified quotes and the
// epigraph "— Author" lines).

import type { PhiNarr } from '@/components/philosophy-reader'

export const ETHICS: PhiNarr = {
  "title": "Spinoza's Ethics",
  "throughline": "The *Ethics* is the most audacious book in the canon: a complete account of God, the mind, the emotions, and how to live well, proved the way Euclid proves geometry. Definitions, then axioms, then numbered propositions, each with a proof and a closing Q.E.D., for five Parts straight. Out of that machinery comes one shattering claim and everything that follows from it. There is only one thing that ultimately exists, an infinite substance Spinoza calls God, or Nature, and everything else (this rock, this body, this thought) is a passing modification of it. From that single move the rest is forced: thought and matter are two faces of one reality, so there is no mind-body gap to bridge; free will is an illusion produced by ignorance of causes; the emotions follow as strictly as theorems; and the only freedom available to a human being is to understand all of this, a freedom that arrives, at the very top of Part V, as the intellectual love of God and a kind of blessedness. It reads like mathematics and ends like scripture.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Spinoza_Opera_Posthuma.jpg",
    "cap": "Title page of the *Opera Posthuma* (1677), the volume that carried the *Ethics* into print for the first time. Spinoza withheld the book during his life; it appeared the year he died, with no author's name on the title page.",
    "alt": "The engraved Latin title page of a 17th-century book, Spinoza's posthumous works, dated 1677"
  },
  "hook": [
    "[Spinoza](/philosophy/thinker/spinoza) (1632 to 1677) wrote one book that he never let anyone print. He had watched a friend jailed for heretical opinions, and he knew what his own argument would cost him: he had already, at twenty-three, been expelled from the Amsterdam Jewish community in the harshest excommunication on its books. So he ground optical lenses for a living, declined a university chair that came with strings, and kept the *Ethics* in a drawer. It appeared in the *Opera Posthuma* in 1677, the year he died, his name left off the title page. Within a few years it was banned. For a century afterward to be called a \"Spinozist\" was roughly to be called an atheist, and the accusation could end a career.",
    "What he had written looks, on the page, like nothing else in philosophy. The full Latin title is *Ethica, Ordine Geometrico Demonstrata*, the Ethics demonstrated in geometrical order, and the form is exactly what it advertises. The book opens with a set of bare definitions (what \"substance\" means, what \"God\" means), then axioms (claims taken as self-evident), and then propositions, each one a numbered claim followed by a proof that cites the earlier definitions, axioms, and propositions by number, and closes with Q.E.D. (the Latin *quod erat demonstrandum*, \"which was to be demonstrated\"). Five Parts run this way without a break: on God, on the mind, on the emotions, on human bondage, and on human freedom. Spinoza is claiming that how to live can be proved with the same necessity as a theorem about triangles.",
    "Behind the geometry is a quarrel with one man. [Descartes](/philosophy/thinker/descartes) had split reality into two separate kinds of substance, mind and matter, and then could not say how a weightless mind moves a physical body. He had also kept a free will, an undetermined power of choice. Spinoza took both pillars out. There are not two substances, he argues, but one; mind and matter are two aspects of that single thing, so there is no gap to leap. And there is no free will at all, only the feeling of it. Everything that follows in the five Parts is the working-out of those two refusals, carried to conclusions that frightened his own century."
  ],
  "brk": {
    "beforeLabel": "Reality is many separate things, including free minds, created and watched over by a God outside the world",
    "afterLabel": "Reality is one infinite substance, God-or-Nature, and everything is a necessary modification of it, free will included as an illusion",
    "paragraphs": [
      "The picture Spinoza inherited had two layers. From religion came a God who stands outside the world, made it by a free choice, and could have made it otherwise or not at all, plus human souls He endowed with free will, so that praise, blame, sin, and salvation made sense. From Descartes, the most advanced philosophy of the day, came a universe of many distinct substances: minds (thinking things) and bodies (extended things), each able to exist on its own, related but never quite welded, with the human will left genuinely free to choose. Both pictures took it for granted that the world is a collection of separate things, that some of them (God, the soul) are free, and that God is one thing and Nature another.",
      "Spinoza's break is to collapse all of it into a single claim and then refuse to flinch from anything that claim entails. He defines substance as what is utterly self-standing, depending on nothing else to exist or to be understood, and argues that by that definition there can be only one such thing, infinite, necessary, and self-caused. He calls it God. He also calls it Nature, in his words \"the eternal and infinite Being, which we call God or Nature.\" God is not a person outside the world who made it; God is the one infinite reality, and the world is not God's creation but God's expression. Everything particular is a *mode*, a passing modification of the one substance, the way a wave is a modification of the sea. Thought and extension (mind and matter) are not two substances but two of the infinitely many *attributes* through which the one substance can be grasped. And because the one substance acts only from the necessity of its own nature, nothing in the universe could have been otherwise; there is no free choice anywhere, not in God and not in us.",
      "The concrete move to hold is this. Before Spinoza, the standard view set God against the world, mind against matter, and a free soul against blind nature, three separations that organized everything. After Spinoza there is one substance and one necessity: God is Nature, mind is matter seen from another side, and freedom is not an exemption from cause but the understanding of cause. That is what makes the *Ethics* a break and not a long theology. It dissolves the gaps the whole tradition had been trying to bridge, by denying that they were ever there. The price is a God with no plans and no mercy and a self with no free will, and Spinoza pays it without apology, then spends Part V arguing that what is left is enough for blessedness."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The method: proving how to live like geometry",
      "epigraph": {
        "text": "\"I shall consider human actions and desires in exactly the same manner, as though I were concerned with lines, planes, and solids.\"",
        "attribution": "— Spinoza, *Ethics* III, Preface, trans. R. H. M. Elwes"
      },
      "blocks": [
        {
          "p": "The form is half the argument. The *Ethics* is written in the style of Euclid's geometry. Each of its five Parts begins with definitions, plain statements of what a key word will mean; then axioms, claims taken without proof as self-evident; and then a long chain of propositions, each a numbered claim with a proof beneath it that cites the earlier numbered material as its steps, ending in Q.E.D. The titles are theorems: \"God, or substance, consisting of infinite attributes… necessarily exists.\" The proofs read like a math text. There are detours, the *Scholia* (notes), where Spinoza drops the geometry to explain in ordinary prose what he is doing and why, and those notes are where the book breathes."
        },
        {
          "p": "Why write ethics this way? Because of what Spinoza is claiming about the world. If everything follows by necessity from the nature of the one substance, the way a triangle's angles follow from its definition, then a true account of God, the mind, and the passions should itself be deducible, step by necessary step. The geometric order is not decoration; it is the claim that the moral world is as law-governed as the mathematical one. He says so directly in the preface to Part III, refusing the usual treatment of the emotions as failings to be scolded: \"I shall consider human actions and desires in exactly the same manner, as though I were concerned with lines, planes, and solids.\" Hatred, anger, and envy are not sins against an order; they are effects with causes, to be understood like any other part of nature."
        },
        {
          "p": "The whole system rests on a single definition, the load-bearing wall of the book, in Part I. \"By substance,\" Spinoza writes, \"I mean that which is in itself, and is conceived through itself: in other words, that of which a conception can be formed independently of any other conception.\" A substance, then, is something utterly self-standing: it depends on nothing else either to exist or to be understood. Set beside it two more definitions that the argument will turn on. An attribute is \"that which the intellect perceives as constituting the essence of substance,\" a fundamental way the substance is, a face it presents to a mind that grasps it. A mode is \"the modifications of substance, or that which exists in, and is conceived through, something other than itself,\" a dependent feature, not a thing on its own."
        },
        {
          "p": "The entire metaphysics is a sorting of reality into those three. Substance is what stands alone. Attributes are the basic ways that substance is. Modes are everything dependent, everything that needs something else in order to be: this body, this idea, this storm. Spinoza's conclusion, the engine of Part I, is that there is exactly one substance, that its attributes include thought and extension, and that absolutely everything else, ourselves included, is a mode of it. The definitions are dry. What he builds from them is not."
        }
      ]
    },
    {
      "num": 2,
      "title": "God, or Nature: the one substance",
      "epigraph": {
        "text": "\"God, or substance, consisting of infinite attributes, of which each expresses eternal and infinite essentiality, necessarily exists.\"",
        "attribution": "— Spinoza, *Ethics* I, Prop. 11, trans. R. H. M. Elwes"
      },
      "blocks": [
        {
          "p": "Part I is titled \"Concerning God,\" and it argues to the most controversial conclusion in early modern philosophy by what look like small, careful steps. The chain runs roughly like this. Two substances cannot share an attribute, because then there would be nothing to tell them apart. A substance is by its nature infinite. And, in the proposition that names the destination, \"Besides God no substance can be granted or conceived.\" If a substance is genuinely self-standing and infinite, there is no room alongside it for a second one; an infinite thing leaves nothing outside itself to be the other thing. So there is exactly one substance, infinite, containing all attributes, and that is what Spinoza means by God, defined in Part I as \"a being absolutely infinite — that is, a substance consisting in infinite attributes, of which each expresses eternal and infinite essentiality.\""
        },
        {
          "p": "This God is not the God most readers arrive with. He does not stand outside the world and make it; he does not choose, plan, love, or punish; he could not have made things otherwise, because he acts only from the necessity of his own nature. He does not exist by some prior cause but is self-caused, defined at the very top of Part I as \"that of which the essence involves existence,\" which is why Proposition 11 can conclude that God \"necessarily exists.\" And, the move that earned the book its century of banning, this God simply is the totality of what is. Spinoza states the identity flatly in a later preface: \"the eternal and infinite Being, which we call God or Nature.\" The Latin phrase the tradition fixed on is *Deus sive Natura*, God-or-Nature, the \"or\" meaning \"in other words.\" God and Nature are two names for the same single infinite substance."
        },
        {
          "p": "The substance is grasped through its attributes, and here is where the system starts to pay off. The one substance has infinitely many attributes, but a human intellect grasps only two of them: thought and extension. Extension is the attribute of being physical, of taking up space; thought is the attribute of being mental, of having ideas. Crucially these are not two substances, as they were for Descartes. They are two attributes of one substance, two complete ways of expressing the very same reality. The physical universe and the mental universe are not two worlds that have to be hooked together. They are one world, described twice."
        },
        {
          "p": "Spinoza is not saying the world is an illusion and only God is real; the modes are real, as real as waves on the sea are wet. He is not saying God is a big person who happens to be everywhere. He is saying there is one infinite reality, that Nature is the way that reality expresses itself, and that to call it God is to say it is infinite, necessary, and the source of all that is. Whether this makes him a pantheist (God is everything), a panentheist (everything is in God), or, as his enemies charged, an atheist who kept the word \"God\" to be safe, is a quarrel scholars have never settled. The text gives the doctrine; the textbook label is the part to be careful with."
        }
      ]
    },
    {
      "num": 3,
      "title": "The mind, and the death of free will",
      "epigraph": {
        "text": "\"The object of the idea constituting the human mind is the body, in other words a certain mode of extension which actually exists, and nothing else.\"",
        "attribution": "— Spinoza, *Ethics* II, Prop. 13, trans. R. H. M. Elwes"
      },
      "blocks": [
        {
          "p": "Part II, \"Of the Nature and Origin of the Mind,\" cashes out the one-substance idea where it bites hardest, on the human being. Descartes had made the mind a separate thinking substance lodged somehow in a bodily machine, and had then spent his life unable to explain how the two communicate, since a weightless mind has no way to push a physical body. Spinoza's answer is that the problem never existed. \"Thought is an attribute of God,\" runs the first proposition of Part II; \"Extension is an attribute of God,\" the second. Mind and body are not two things in contact. They are one thing, a single mode of the one substance, expressed under two attributes at once: as a body when grasped under extension, as a mind when grasped under thought."
        },
        {
          "p": "From this comes the most precise statement of what a mind is in the whole book: \"The object of the idea constituting the human mind is the body, in other words a certain mode of extension which actually exists, and nothing else.\" The mind is not a ghost steering a machine. The mind is the *idea of* the body, the same individual thing thought rather than extended. Whatever happens in the body has its exact counterpart as an idea in the mind, because they are one event seen two ways. Spinoza generalizes the principle into a line that does enormous work later: \"The order and connection of ideas is the same as the order and connection of things.\" The chain of physical causes and the chain of mental ideas run perfectly parallel, because they are the same chain under two descriptions. There is nothing for the mind to do to the body, and nothing to explain, because they never were two."
        },
        {
          "p": "The same move kills free will, and Spinoza states the diagnosis without softening it. People feel free, he says, only because they notice their own choices while staying blind to what causes them: \"men believe themselves to be free, simply because they are conscious of their actions, and unconscious of the causes whereby those actions are determined.\" The feeling of choosing is real; the freedom it seems to report is not. Every act of will has prior causes, in the body and in earlier ideas, running back without a first uncaused link, because everything follows by necessity from the nature of the one substance. A stone thrown through the air, Spinoza suggests in his letters, would think itself free if it were conscious of its flight and ignorant of the hand that threw it. People are that stone, conscious of the motion and not of the throw."
        },
        {
          "p": "He does not leave \"freedom\" as an empty word, though; he redefines it. In Part I he had already set the term: \"That thing is called free, which exists solely by the necessity of its own nature, and of which the action is determined by itself alone.\" Strictly, only God-or-Nature is free in that full sense, since only the whole acts from nothing but its own nature. A human being is never free in the sense of escaping causes. But a human being can be more or less *active*, more or less the adequate cause of what it does rather than something pushed around from outside. That redefinition, freedom as self-determination through understanding rather than as uncaused choice, is the thread Spinoza will pull all the way to blessedness. First he has to deal with the emotions, which is where most of the pushing-around comes from."
        }
      ]
    },
    {
      "num": 4,
      "title": "The emotions, proved like theorems, and the bondage they cause",
      "epigraph": {
        "text": "\"Everything, in so far as it is in itself, endeavours to persist in its own being.\"",
        "attribution": "— Spinoza, *Ethics* III, Prop. 6, trans. R. H. M. Elwes"
      },
      "blocks": [
        {
          "p": "Part III, \"On the Origin and Nature of the Emotions,\" does the thing that scandalized readers almost as much as the metaphysics: it treats love, hatred, envy, hope, and fear as natural effects to be derived, not as virtues and vices to be praised and blamed. This is the preface's promise made good, the emotions handled as if they were lines and planes. And the whole derivation grows from a single root, the most important concept in the back half of the book. Spinoza calls it the *conatus*, the striving by which every single thing tries to keep on being itself: \"in so far as it can, and in so far as it is in itself, it endeavours to persist in its own being.\" A rock resists being broken; a living thing seeks what sustains it. This drive to persevere is not added on to a thing; it *is* the thing. \"The endeavour, wherewith everything endeavours to persist in its own being, is nothing else but the actual essence of the thing in question.\""
        },
        {
          "p": "From that one drive Spinoza builds the entire emotional life out of three primary affects. There is desire, the conatus become conscious. There is pleasure (joy), the feeling of the conatus increasing, of one's power to act going up. And there is pain (sorrow), the feeling of it decreasing, of one's power going down. Every other emotion is one of these three combined with an idea of its cause. Love is pleasure accompanied by the idea of an external cause; hatred is pain accompanied by the idea of an external cause; hope is an unsteady pleasure born of an uncertain future good; fear is the matching pain. Jealousy, pity, ambition, and the rest get the same treatment, defined and located on the same grid. The emotions become a system, derived from a single principle the way a geometry is derived from its axioms."
        },
        {
          "p": "Part IV, \"Of Human Bondage, or the Strength of the Emotions,\" draws the grim consequence. An emotion is *passive*, a passion, when it arises from causes outside us that we do not understand: something is done to us, our power rises or falls, and we are simply carried. To live ruled by the passive emotions is what Spinoza means by bondage. The bound person is a node where outside forces meet, swung between pleasure and pain by things he cannot control and does not comprehend, his conatus constantly overpowered by causes stronger than himself. And because a passion can only be checked by a stronger contrary emotion, not by a bare command of the will (there is no free will to issue one), simply resolving to feel differently does nothing. The man who knows his anger is destroying him, and stays angry, is not weak in some mysterious way; he is being out-muscled by a cause he has not understood."
        },
        {
          "p": "This is where the *Ethics* turns from diagnosis toward cure, and it does so by relocating where the leverage is. If passions cannot be beaten by willpower, and can only be displaced by stronger emotions, then the road out of bondage cannot run through commanding yourself to stop. It has to run through understanding, because understanding a passion changes what kind of emotion it is. That claim, that to grasp the cause of a feeling is already to begin to be free of it, is the hinge between bondage and freedom, and it is what Part V is built to prove."
        }
      ]
    },
    {
      "num": 5,
      "title": "Freedom: the intellectual love of God",
      "epigraph": {
        "text": "\"A free man thinks of death least of all things; and his wisdom is a meditation not of death but of life.\"",
        "attribution": "— Spinoza, *Ethics* IV, Prop. 67, trans. R. H. M. Elwes"
      },
      "blocks": [
        {
          "p": "Part V, \"Of the Power of the Understanding, or of Human Freedom,\" is the destination the geometry has been climbing toward, and the cure for bondage is a single mechanism: understanding. A passive emotion, Spinoza argues, ceases to be passive as soon as we form a clear idea of it. When the cause of a feeling is grasped, the feeling stops being something that merely happens to us from outside and becomes something we comprehend, and to that extent we become its active cause rather than its victim. Freedom, then, is not the power to have chosen otherwise, which no one has, but the power that comes from understanding the necessity of things. The free person is not the one who escapes the causal order but the one who sees it clearly and is therefore moved by adequate ideas of his own rather than dragged by confused ideas of things outside him."
        },
        {
          "p": "Such a person stops being governed by the great organizing fear. \"A free man thinks of death least of all things; and his wisdom is a meditation not of death but of life.\" The line is not bravado. It follows from the system: the free man is the one who lives by reason and seeks what is genuinely good for his persisting, so his attention is on living well, not on the loss of life. Fear of death is a passion like any other, and like any other it loosens its grip when the necessity behind it is understood. Spinoza is not promising that the wise escape dying. He is claiming that a mind occupied with understanding is not, moment to moment, a mind enslaved to dread."
        },
        {
          "p": "At the summit Spinoza names the highest form of knowing and the state it brings. He has distinguished three kinds of knowledge: the first, imagination, the confused knowledge of the senses and hearsay, and the only source of error; the second, reason, the grasp of things through adequate general ideas; and the third, intuition, which sees particular things flowing from the very essence of God-or-Nature. From the third kind comes the book's strangest and most exalted result. To understand things this way is to understand them as expressions of the one infinite substance, and that understanding carries with it a joy directed at its cause: \"this is what I call the intellectual love of God.\" It is not worship of a person, and it asks nothing back. It is the joy of a mind seeing reality as it necessarily is, a love of the whole of which the mind knows itself to be a part."
        },
        {
          "p": "And then the verdict the whole work was built to reach, stated as a proposition like all the rest: \"Blessedness is not the reward of virtue, but virtue itself; neither do we rejoice therein, because we control our lusts, but, contrariwise, because we rejoice therein, we are able to control our lusts.\" Blessedness is not a prize handed out later for being good. It *is* the activity of understanding, which is the same thing as virtue, which is the same thing as freedom; the joy is not the payment, it is the power itself. Spinoza ends the book by refusing to pretend any of this is easy or common. The road he has drawn, out of bondage and into the understanding that is freedom, is steep, and almost no one walks it: \"But all things excellent are as difficult as they are rare.\" It is the last line of the *Ethics*, the geometry finally setting down its compass to admit, in plain words, how high the climb has been."
        }
      ]
    }
  ]
}
