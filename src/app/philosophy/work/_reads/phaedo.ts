// Opus AUTHOR draft of the Plato's *Phaedo* WORK read (Step 2 of
// audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/phaedo-work-fact-pack.md (+ cross-ref
// audits/philosophy-pipeline/plato-fact-pack.md, which it must not contradict).
// This is the work-level deep read below the PLATO thinker read (which summarized
// the Phaedo at thinker altitude); this read walks the whole dialogue end to end.
// The five critic gates + the structural gates run against THIS file before it
// ships. PhiNarr shape is identical to plato.ts / republic.ts; the reader at
// /philosophy/work/phaedo (route TBD) renders it.
//
// Quote doctrine: every quoted line is Benjamin Jowett's public-domain Phaedo
// (Project Gutenberg #1658, dialogue-text half) — never an in-copyright translation
// (Gallop, Grube, Tredennick, Rowe, Bluck are all off-limits). Jowett's exact
// wordings are honored: "the second best mode of enquiring into the cause" (NOT the
// popular "second sailing"/"second voyage," which is the Greek deuteros plous /
// other translators' wording, attributed to convention, never to Jowett); "the
// practice of death" (not a death-wish — the dialogue argues against suicide); "the
// wisest and justest and best." PARAPHRASE-ONLY items (the anti-suicide passage, the
// harmony-rebuttal, the underworld rivers, the Greek terms psyche/anamnesis/
// harmonia/deuteros plous) never appear inside quotation marks. The four immortality
// arguments are Plato's, voiced by Socrates, and are kept hedged and self-doubting,
// not as a QED. Figure images carry a [VERIFY] note for the media gate rather than
// asserting a URL.

import type { PhiNarr } from '@/components/philosophy-reader'

export const PHAEDO: PhiNarr = {
  "title": "Plato's Phaedo",
  "throughline": "A man condemned to die spends his last afternoon arguing, calmly and even cheerfully, that the thing about to be killed (his body) is not the thing that matters, because the soul outlives it. The *Phaedo* is Plato's account of Socrates' execution day, and it is two things woven into one: the most moving death scene in ancient philosophy, and the West's first sustained *argument* (four of them, stacked) that the soul is immortal. These proofs are Plato's, put in the mouth of his dead teacher, and the dialogue is honest enough to let the strongest objections to them very nearly win.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/8/8c/David_-_The_Death_of_Socrates.jpg",
    "cap": "Jacques-Louis David, *The Death of Socrates* (1787, Metropolitan Museum of Art). Socrates, about to drink the hemlock, is still mid-argument, one hand on the cup, the other raised, while his friends collapse around him. The painting compresses the *Phaedo*'s whole strange mood: a death scene that is really a philosophy lesson. Painted over two thousand years later, an imagining, not a record.",
    "alt": "A neoclassical painting of Socrates seated upright on a prison bed, reaching for a cup of poison while gesturing in argument, surrounded by grieving friends"
  },
  "hook": [
    "In 399 BCE an Athenian court condemned Socrates to death, and then, by an accident of the religious calendar, made him wait. The city had just sent its annual sacred ship to the island of Delos, and while that ship was away the law forbade any execution. The city kept itself ritually pure during the sacred voyage, so no one could be put to death until the ship came home. So for weeks Socrates sat in prison, alive, with his friends coming and going, until the ship came back. The *Phaedo* is the record of his last day: the afternoon the ship had returned, the holy season was over, and the hemlock (the poison that would kill him) was finally going to be brought. Plato's *Phaedo* (in Greek the *Phaidōn*, named for the man who narrates it, with the old subtitle *peri psychēs*, \"on the soul\") takes that single charged afternoon and fills it not with farewells but with an argument: the longest case anyone in the ancient world had yet made that death is not the end of you.",
    "Two things about how it is built shape every page. First, it is told at a distance, on purpose. We are not in the prison; we are listening to a man named Phaedo, some time later, in a different town, telling a friend who wasn't there what happened. Plato writes the death of Socrates as something that reaches us secondhand, reported, remembered. He even writes himself out of the room. Second, and tied to the first: the speaker doing the arguing is Socrates, but the doctrines he argues (the immortal soul, the eternal Forms, knowledge as buried memory) are Plato's own developed philosophy, written decades after the events, in the 380s BCE. So when \"Socrates argues\" something here, what is on the page is a character, voiced by an absent author, making a case Plato wants made. The dialogue keeps that seam visible itself."
  ],
  "brk": {
    "beforeLabel": "The soul is a wisp, breath or shadow that thins out and dies with the body",
    "afterLabel": "The soul is the one thing in you that *can't* die, and there's an argument for it",
    "paragraphs": [
      "Before the *Phaedo*, the ordinary Greek picture of the soul was thin and grim. In Homer the dead are gibbering shades in the underworld, barely there, a kind of smoke that survives the body only as a sad remnant. The word being argued over, *psychē* (which Jowett simply translates \"soul\"), often meant little more than the breath that leaves you when you die. Inside the dialogue itself one of Socrates' friends voices exactly this fear: that at the moment of death the soul might be \"blown away and destroyed,\" scattered like breath on a windy day. There were richer beliefs around: the Pythagoreans and the Orphic mystery cults taught that souls transmigrate from body to body, but those were religious doctrines, things you were initiated into and took on faith, not conclusions anyone had argued for. And Socrates himself, at his trial (the *Apology*), had been pointedly agnostic about death: it is, he said there, either a dreamless sleep or a journey somewhere else, and he couldn't say which.",
      "The *Phaedo*'s break is to make the immortality of the soul the conclusion of *philosophical argument* rather than of myth or religious authority, and to weld it to Plato's theory of the **Forms**. A Form, in Plato, is the single perfect, changeless original that all the many imperfect things in the visible world are copies of: Equality itself behind all the roughly-equal things, Beauty itself behind all the beautiful ones, graspable by the mind and never by the eye. The dialogue ties the soul to those Forms at every joint. The soul must have existed *before* birth, it argues, because it already knew the Forms. You couldn't recognize two sticks as \"nearly equal\" unless you already carried the standard of perfect Equality, and you didn't get that standard from any pair of sticks. The soul is *imperishable*, it argues, because it resembles the imperishable Forms (invisible, unchanging, akin to the divine) far more than it resembles the body. And in its final argument the soul cannot admit death any more than fire can admit cold, because bringing life is just what a soul *is*. The soul stops being breath or shadow and becomes the kind of thing a Form is.",
      "The *Phaedo* is the first work to *argue* (not merely assert, not merely sing in a hymn) that the soul outlives the body, and to make that argument turn on a theory of eternal Forms the soul must have known before it was born. It dramatizes a man proving the soul's survival on the very day he dies. And it is honest enough to stage its own hardest doubts: Plato writes the two best objections to his own case himself, hands them to two sharp young men, and lets them cast \"a sort of despair\" over the room before Socrates answers."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "A ship, a delay, and a death told secondhand",
      "epigraph": {
        "text": "\"I could hardly believe that I was present at the death of a friend, and therefore I did not pity him... he died so fearlessly, and his words and bearing were so noble and gracious, that to me he appeared blessed.\"",
        "attribution": "— Plato, *Phaedo* 58e, trans. Jowett"
      },
      "blocks": [
        {
          "p": "The *Phaedo* does not open in the prison. It opens somewhere else entirely, with a man being asked to tell a story. \"Were you yourself, Phaedo, in the prison with Socrates on the day when he drank the poison?\" The questioner is Echecrates (eh-KEH-kra-teez), a man from the town of Phlius (FLY-us), in the Peloponnese, who has heard that Socrates is dead and wants the eyewitness account. Phaedo (FEE-doh) of Elis was there, in the cell, all day, and now, some time afterward, far from Athens, he agrees to tell the whole thing from memory. So everything that follows is framed: a conversation, recalled and retold, one remove from the events. The dialogue is named for this narrator, not for its hero."
        },
        {
          "p": "The framing is not an accident of how Plato happened to write it down; it is a habit, and a meaningful one. Plato wrote dialogues, little staged conversations, and he never steps onto the stage in his own person. Here he goes one further and builds a frame around the frame: Phaedo telling Echecrates, who tells us, so that the most emotionally loaded thing Plato ever wrote, the death of his own teacher, reaches the reader at a deliberate distance. The most striking proof of that distance comes when Phaedo lists who was in the cell. He runs through the names (friends, students, men from Athens and abroad) and then, almost in passing, notes one absence: \"Plato, if I am not mistaken, was ill.\" Plato writes himself out of the room. The one person whose account this really is reports that he wasn't there. It is the same instinct that runs through all his work: keep a frame between yourself and the claim, never quite speak in the first person."
        },
        {
          "p": "Echecrates has a practical question first: why the gap? Socrates was tried and condemned, and yet executed \"not at the time, but long afterwards.\" Phaedo explains the mechanism that gives the whole dialogue its single-day shape. Athens sent an annual sacred ship to the island of Delos, a religious mission commemorating the legendary hero Theseus, who (the story went) once sailed to Crete and rescued a group of young Athenians from the Minotaur. From the moment the priest \"crowns the stern of the ship\" until it returns, the city keeps a holy season, \"during which the city is not allowed to be polluted by public executions.\" A death during the sacred season would have counted as a religious defilement of the whole city, so the execution simply had to wait. The ship had been crowned the day before Socrates' trial. So he sat in prison, alive, for the whole length of the voyage, and the day the *Phaedo* records is the day after the ship came home. The condemned man's reprieve has run out."
        },
        {
          "p": "Phaedo also describes the strange mood in the cell, and it sets the tone for everything. He says he felt no pity, which startled him, because he was watching a friend die. The reason was Socrates himself: \"he died so fearlessly, and his words and bearing were so noble and gracious, that to me he appeared blessed.\" The room was a tangle of contradictory feelings, grief and admiration at once, weeping and philosophy in the same breath, because the man at the center of it was so plainly unafraid. That calm is not just mood-setting. It is the dialogue's first piece of evidence. Socrates is about to argue that the soul survives the body, and the fact that he can face the hemlock without flinching is offered, quietly, as a sign that he actually believes what he is about to say."
        },
        {
          "p": "Inside the cell, the day starts with a small human scene. The friends arrive to find Socrates \"just released from chains\" (the jailer has struck off his fetters) and his wife, **Xanthippe** (zan-TIP-ee), sitting beside him holding their child. When she sees the friends come in she cries out, \"O Socrates, this is the last time that either you will converse with your friends, or they with you.\" Socrates, gently and without ceremony, has her taken away: \"Crito, let some one take her home.\" It is easy to read this as coldness, and people have. But the dialogue's logic explains it: Socrates is clearing the room of grief so he can do the one thing he wants to do with his last hours, which is think out loud with his friends. Then, rubbing the leg the chain had marked, he muses on how pleasure and pain seem joined together, one chasing the other. The argument has not started yet, and already the body (its chains, its aches, its small pleasures) is being held at arm's length."
        }
      ]
    },
    {
      "num": 2,
      "title": "Why a philosopher meets death calmly",
      "epigraph": {
        "text": "\"...has in fact been always engaged in the practice of dying? For is not philosophy the practice of death?\"",
        "attribution": "— Plato, *Phaedo* 67e, trans. Jowett"
      },
      "blocks": [
        {
          "p": "With Xanthippe gone and the friends settled, Socrates makes the claim the whole dialogue grows out of. He says that \"the real philosopher has reason to be of good cheer when he is about to die,\" and that he expects, after death, \"to obtain the greatest good in the other world.\" His friends find this baffling, even a little offensive: most people fear death, and here is a man cheerful about it on the day it arrives. So Socrates explains, and the explanation is the dialogue's thesis: a true philosopher has been preparing for this his whole life, because, as he puts it, \"the true votary of philosophy is likely to be misunderstood by other men; they do not perceive that he is always pursuing death and dying.\""
        },
        {
          "p": "That sounds morbid, and the line is routinely misread. \"Pursuing death\" does not mean wanting to die. Socrates first pins down what death even is: it is \"the separation of soul and body... when the soul exists in herself, and is released from the body and the body is released from the soul.\" Death is the soul coming loose from the body. And the philosopher's whole life, Socrates argues, has been a long effort to do that *while still alive*: to free the mind's reasoning from the body's interference so it can reach the truth. The body is a constant distraction: it gets hungry and tired, it wants pleasures, and worst of all its senses are unreliable, feeding the mind a blurry, shifting picture of things. The thinker who wants to grasp what is really true (Equality itself, Beauty itself, the changeless Forms) has to think *past* the body, with the mind alone. That lifelong discipline of pulling the soul free of the body in thought is exactly what death completes, permanently. So the philosopher, Socrates says, \"has in fact been always engaged in the practice of dying. For is not philosophy the practice of death?\""
        },
        {
          "p": "The famous phrase, then (philosophy as \"the practice of death\") is not a death-wish and not an endorsement of suicide. The dialogue is explicit about this, because earlier in the very same conversation Socrates argues *against* suicide. A person, he holds, is like a soldier at his post, set there by the gods, and may not desert that post and take his own life until the gods summon him. The body is something we are placed in and may not simply walk out of on our own authority. So the picture is consistent: the philosopher does not long for death and may not hasten it, but when it comes, when the god finally summons him, as the hemlock now summons Socrates, he can meet it calmly, because death is the consummation of the very thing he has practiced all along. Facing the cup without fear is not bravado. It is the philosophical life arriving at its natural end."
        },
        {
          "p": "All of this rests on a promise Socrates has not yet kept: that the soul actually *does* survive the separation. If death is just the snuffing out of the soul along with the body, then the philosopher's cheerfulness is a delusion and his \"practice for death\" was practice for nothing. His friends Simmias (SIM-ee-as) and Cebes (SEE-beez), two young men from Thebes, both trained in Pythagorean thought, who become the dialogue's two main challengers, press exactly this point. Cebes puts the common fear bluntly: maybe when the soul leaves the body it simply \"is blown away and destroyed,\" dispersed like breath or smoke, gone the instant it is free. That is the worry the rest of the dialogue is built to answer. Socrates needs to show not just that the soul *can* exist apart from the body, but that it really *does*, and goes on existing. So he offers a series of arguments, four of them, building on each other, for the soul's immortality. The rest of the dialogue is those arguments, and the objections they provoke."
        }
      ]
    },
    {
      "num": 3,
      "title": "Two arguments: the cycle of opposites, and learning as remembering",
      "epigraph": {
        "text": "\"Then before we began to see or hear or perceive in any way, we must have had a knowledge of absolute equality...\"",
        "attribution": "— Plato, *Phaedo* 75b, trans. Jowett"
      },
      "blocks": [
        {
          "p": "The first argument is the oldest-feeling and, as the dialogue itself half-admits, the weakest. Socrates reaches for \"an ancient doctrine which affirms that they go from hence into the other world, and returning hither, are born again from the dead,\" the cyclical idea that the living come from the dead and the dead from the living, round and round. He props it up with a general principle: opposites are generated out of their opposites. The greater comes from the less, the weaker from the stronger, the swifter from the slower; a thing becomes hot by coming from cold, becomes asleep by coming from awake, and each process runs both ways. Life and death, he says, are just such a pair of opposites. Dying is the passage from living to dead. So there must be a matching passage the other way, from dead to living, which is being born. \"Then the living, whether things or persons, Cebes, are generated from the dead?\" If the cycle ran only one way, everything would eventually pile up on the side of death and stay there; so the souls of the dead must persist somewhere, waiting to come back."
        },
        {
          "p": "Even taken at face value, this proves less than it seems, and the dialogue knows it. The cycle of opposites shows that *something* survives and comes back, that souls exist before birth and a general balance is kept, but it does not show that *your* particular soul, with your memories and your identity, persists. It shows a wheel turning, not a person enduring. Socrates does not pretend otherwise; the argument is offered as a first move, to be shored up by the ones that follow. It is a foundation, not the building."
        },
        {
          "p": "The second argument is more distinctive, and it is the one that ties the soul to Plato's theory of the Forms. Cebes brings it up himself, reminding Socrates of \"your favorite doctrine, that knowledge is simply recollection.\" The idea: what we call learning is not taking in something brand-new but *recovering* something the soul already knew and forgot. Socrates points to the kind of case where this shows: ask a person the right questions about a geometrical diagram, and \"he will give a true answer of himself,\" the right answer coming out of him, not out of the questioner. (Jowett's text even adds the cross-reference \"Compare *Meno*,\" pointing to another dialogue where Socrates draws this out of an uneducated boy.) How could the boy produce knowledge nobody put into him, \"unless there were knowledge and right reason already in him\"? The knowledge was there, latent, waiting to be drawn out."
        },
        {
          "p": "Then comes the deeper version, the one that runs through the Forms. Consider *equality*. We look at two sticks, or two stones, and call them equal, but no two physical things are ever perfectly equal; measure closely enough and one is always a hair longer. The equal things of the world always fall a little short. And yet we have a grip on *perfect* equality, **Equality itself**, the flawless standard against which we judge the sticks as \"almost\" equal or \"not quite\" equal. Where did that perfect standard come from? Not from the sticks, which never supply it; they could only ever *remind* us of a perfection we must already have known. So, Socrates argues, \"before we began to see or hear or perceive in any way, we must have had a knowledge of absolute equality.\" And not only of equality, but of all the Forms: \"beauty, goodness, justice, holiness, and of all which we stamp with the name of essence.\" Since we plainly didn't learn these perfect standards from the imperfect world in front of us, the soul must have known them *before* it entered the body. The soul pre-exists."
        },
        {
          "p": "The dialogue makes this limit plain rather than hiding it. Recollection proves that the soul existed *before* birth, that it pre-exists the body. It does not, on its own, prove the soul survives *after* death. Those are two different claims: one is about the soul's past, one about its future. Socrates and his friends see this clearly, and they combine the two arguments deliberately to bracket a life on both sides. The cycle of opposites pointed to the soul coming *back* from death; recollection points to the soul existing *before* birth. Put together, the suggestion is that the soul stretches out beyond the body in both directions, with a single life sitting in the middle of a longer existence. It is a stronger case than either argument alone, but the friends are not yet satisfied, and Socrates moves on to a third try."
        }
      ]
    },
    {
      "num": 4,
      "title": "The soul resembles the things that never die",
      "epigraph": {
        "text": "\"Then the soul is more like to the unseen, and the body to the seen?... the soul will be infinitely more like the unchangeable—even the most stupid person will not deny that.\"",
        "attribution": "— Plato, *Phaedo* 79b–80b, trans. Jowett"
      },
      "blocks": [
        {
          "p": "The third argument, usually called the *affinity* argument, asks what *kind* of thing the soul is, and reasons from there. Socrates lays out a basic division of everything that exists into two classes. On one side: things that are **compound** (made of parts put together), **visible**, and **always changing**. A thing made of parts assembled together can naturally be taken apart again, dissolved back into its pieces. On the other side: things that are **uncompounded** (not built out of parts), **invisible**, and **unchanging**. Of these, \"that which is uncompounded... must be, if anything is, indissoluble,\" because there are no parts to come apart. What has no seams cannot fall to pieces."
        },
        {
          "p": "The Forms belong squarely to that second class. \"Absolute equality, beauty,\" and the rest are each \"always what they are, having the same simple self-existent and unchanging\" nature: never built out of parts, never seen with the eye, never varying. They are the very model of the uncompounded, invisible, changeless kind of thing. Now Socrates asks which class the soul more closely resembles, and which the body resembles. The body is obviously of the first kind: visible, composite, always changing, the thing that decays. The soul is not visible, does not seem to be assembled out of parts, and when the soul does its proper work, reasoning by itself, it leaves the shifting world of the senses behind and reaches toward the changeless Forms, \"the region of purity, and eternity, and immortality, and unchangeableness, which are her kindred.\" The soul is at home among the things that never change. So, Socrates concludes, \"the soul is more like to the unseen, and the body to the seen,\" and indeed \"the soul will be infinitely more like the unchangeable—even the most stupid person will not deny that.\" And if the soul resembles the imperishable things so closely, it is reasonable to expect it shares their imperishability."
        },
        {
          "p": "The dialogue is careful about how much this proves. Socrates says \"more like\" and \"infinitely more like,\" not \"identical to\" or \"therefore immortal.\" This is an argument from *resemblance*, and resemblance is a matter of likelihood, not of proof. It shows that the soul is far more similar to the deathless Forms than to the perishable body, and so makes it *plausible* that the soul, too, is deathless. It does not strictly demonstrate that the soul *is* immortal, only that, of the two classes, it clearly belongs with the immortal one. Socrates does not oversell it. That honesty is about to cost him, because his two sharpest listeners have noticed the gap between \"more like the immortal\" and \"actually immortal,\" and they are about to drive two objections straight into it."
        }
      ]
    },
    {
      "num": 5,
      "title": "The objections that nearly win: a broken lyre and a worn-out cloak",
      "epigraph": {
        "text": "\"He may argue in like manner that every soul wears out many bodies, especially if a man live many years.\"",
        "attribution": "— Plato, *Phaedo* 88a, trans. Jowett (Cebes' objection)"
      },
      "blocks": [
        {
          "p": "Chapter 5 is where the *Phaedo* shows it is not a triumphant march to a foregone conclusion. After three arguments, Socrates' two main challengers (**Simmias** and **Cebes**) do not nod along. They raise two objections so strong that, Phaedo recalls, they cast \"a sort of despair\" over the whole room and shook everyone's confidence in everything that had been said. Plato wrote both objections himself, gave them to his sharpest characters, and let them land. A weaker author would have given Socrates' opponents weak lines. Plato armed them."
        },
        {
          "p": "**Simmias goes first, with the lyre.** Suppose, he says, someone made the same kind of argument about a musical instrument. The *harmony* (the tuning, the attunement) of a lyre is \"a thing invisible, incorporeal, perfect, divine, existing in the lyre,\" while the wooden frame and the strings are \"matter and material, composite, earthy, and akin to mortality.\" By the affinity argument's own logic, you could argue that when someone smashes the lyre, the harmony, being the invisible divine thing, must survive: it can't perish along with mere wood and strings. But that is obviously false: break the lyre and the harmony is *gone*, instantly, even though the broken wood and snapped strings lie there for a long time afterward. Now apply it to the soul. Maybe the soul just *is* the harmony of the body (the \"due proportionate admixture\" of the body's elements, the hot and cold, wet and dry, tuned together in the right balance). If so, then when the body is \"unduly loosened or overstrained through disease or other injury,\" the soul, like a harmony, \"perishes at once,\" even though the bodily remains last for years. The soul being *like* the divine wouldn't save it. A harmony is invisible and divine-seeming too, and it dies the moment its instrument breaks."
        },
        {
          "p": "**Then Cebes, with the weaver.** His objection grants more and asks for more. Imagine an old weaver who has died, and someone insists he must still be alive: look, here is the very cloak he wove and wore, still whole and undecayed, so surely the man who made it outlasts it. That reasoning is plainly bad: the weaver in his lifetime \"having woven and worn many such coats, outlived several of them, and was outlived by the last.\" He outlasted *many* cloaks and then died anyway, leaving the final one behind. Now, says Cebes, grant everything Socrates has argued, grant that the soul is stronger and longer-lasting than the body. \"He may argue in like manner that every soul wears out many bodies, especially if a man live many years.\" The soul could be like the weaver: it outlasts body after body, life after life, far more durable than any single body, and *still*, in the end, wear out and perish, leaving its \"last body\" behind like the weaver's last cloak. Durability is not immortality. To prove the soul immortal, you have to show not merely that it lasts a long time, but that it is *imperishable*, that it can never wear out at all. The affinity argument never showed that."
        },
        {
          "p": "These are real objections, and the dialogue treats them as real. Socrates answers Simmias' harmony idea first, and separately. His reply turns on what kind of thing a harmony is. A harmony is an *effect* that depends on its parts: you tune the strings first, and the harmony follows; it can't exist before the thing it's a harmony of. But the soul doesn't follow the body that way; it *rules* the body, often fighting against the body's own pulls (refusing the drink the body craves, mastering its fears). A harmony also admits of degrees, one tuning can be more or less in tune than another, whereas one soul is not \"more a soul\" than another. And, decisively, the harmony theory contradicts recollection, the argument that the soul existed *before* the body: a harmony cannot exist before its instrument, but the soul, by the recollection argument everyone in the room had already accepted, did exist before its body. So the soul cannot be the body's harmony. Simmias concedes."
        },
        {
          "p": "Cebes' objection is harder, and Socrates says so. It demands a proof not just that the soul is durable but that it is *imperishable*: that it cannot, even in principle, wear out. To meet that demand Socrates has to go deeper than any of the first three arguments, and he begins not with a proof but with the story of his own intellectual life. The hardest objection in the dialogue is what forces out both the autobiography and the final, most ambitious argument."
        }
      ]
    },
    {
      "num": 6,
      "title": "A disappointment with Anaxagoras, and the turn to the Forms",
      "epigraph": {
        "text": "\"What expectations I had formed, and how grievously was I disappointed!\"",
        "attribution": "— Plato, *Phaedo* 98b, trans. Jowett"
      },
      "blocks": [
        {
          "p": "To answer Cebes, Socrates tells how he came to think the way he does: a short intellectual autobiography, and one of the most revealing passages Plato ever wrote about *why* the Forms matter. As a young man, Socrates says, he was hungry for explanations of the natural world, the kind the early Greek thinkers offered: what things are made of, why they come to be and pass away. Then one day he heard someone reading from a book by **Anaxagoras** (an-ax-AG-or-as), a philosopher who taught \"that mind was the disposer and cause of all,\" that *Mind* arranges everything. Socrates was thrilled. If Mind orders the world, he reasoned, then Mind must order each thing for the *best*; so a real explanation of anything would show why it is *good* that it is arranged the way it is. He expected Anaxagoras to explain the universe by purpose, by what is best."
        },
        {
          "p": "And then the letdown, which Socrates relates with real feeling: \"What expectations I had formed, and how grievously was I disappointed!\" Reading on, he found that Anaxagoras mentioned Mind and then promptly dropped it, going back to explaining everything mechanically, by \"air, and ether, and water, and other eccentricities,\" physical pushes and pulls with no purpose in them at all. Socrates gives a sharp example of what that failure looks like. Suppose you asked why Socrates is sitting here in this prison cell. The Anaxagoras-style answer would talk about his bones and muscles and joints, how they bend and hold him in a seated position. True enough, but it misses the point entirely. The real reason he is sitting in the cell, \"forgetting to mention the true cause,\" is \"that the Athenians have thought fit to condemn me, and accordingly I have thought it better and more right to remain here and undergo my sentence.\" His bones don't explain why he stayed when he could have fled; his *reasons* do. Mechanism tells you how the body is arranged; it never tells you why that arrangement is good, or chosen. That gap is the thing the whole rest of his philosophy is built to fill."
        },
        {
          "p": "Disappointed with the physicists, Socrates says, he made a fresh start, turning away from staring at the physical world and toward \"the world of mind,\" and he describes this turn modestly, as a fallback. \"As I have failed either to discover myself, or to learn of any one else, the nature of the best,\" he says, \"I will exhibit to you... what I have found to be the second best mode of enquiring into the cause.\" That phrase, \"the second best mode of enquiring into the cause,\" is Jowett's. The passage has a famous nickname Jowett does not use: scholars call it the *deuteros plous*, often translated \"the second sailing\" or \"the second voyage\" (the image is of a sailor who, when the wind dies, takes to the oars, the harder, second-best way to get where he's going). That nickname comes from the Greek and from later translators, not from Jowett, whose actual words are \"the second best mode of enquiring into the cause.\" Same passage, two labels; the quoted one here is Jowett's."
        },
        {
          "p": "What is this second-best method? It is the turn to the Forms. Rather than trying to explain things by physics, Socrates says, he now assumes the Forms and explains things by *them*. He puts it as the safest answer he can give: \"first of all assume that there is an absolute beauty and goodness and greatness,\" and then explain each thing by its share in the relevant Form. Why is a beautiful thing beautiful? Not because of its color or shape or proportions, all of which can be argued about, but simply because of \"the presence and participation of beauty\" in it: \"by beauty all beautiful things become beautiful. This appears to me to be the safest answer which I can give.\" Likewise \"by greatness only great things become great,\" and small things small by smallness. It sounds almost circular, and Socrates admits he can't say exactly *how* a thing participates in a Form. But the move is deliberate: he is grounding every explanation in the Forms, the changeless originals, rather than in the shifting physical features of things. And having set up the Forms as the bedrock of explanation, he is now ready to use them for the hardest job in the dialogue, answering Cebes, and proving the soul not just durable but imperishable."
        }
      ]
    },
    {
      "num": 7,
      "title": "The final argument: the soul cannot admit death",
      "epigraph": {
        "text": "\"Then whatever the soul possesses, to that she comes bearing life?... Then the soul is immortal? / Yes, he said.\"",
        "attribution": "— Plato, *Phaedo* 105c–105e, trans. Jowett"
      },
      "blocks": [
        {
          "p": "The fourth and deepest argument is built entirely on the Forms, and it answers Cebes' demand (prove the soul *imperishable*, not just long-lasting) by a clever route. Socrates starts with a fact about how Forms and their opposites behave. Some things, by their very nature, carry a Form with them and so can never take on that Form's opposite. The number three, for instance, is essentially odd: it carries Oddness with it, so three can never become even. Faced with its opposite, evenness, the number three does not quietly absorb it; it would sooner \"endure annihilation... than be converted into an even number.\" Snow carries cold; bring heat near it, and the snow doesn't become hot snow, it \"will either retire or perish,\" melting away rather than admitting heat. Fire carries heat; bring cold to it, and the fire \"will either retire or perish\" rather than become cold fire. The pattern: a thing that essentially brings one Form can never admit that Form's opposite. It withdraws or is destroyed instead."
        },
        {
          "p": "Now Socrates applies the pattern to the soul, with a single defining claim about what a soul *is*. What is it that, when present in a body, makes that body alive? The soul. The soul is the thing that brings *life* to a body: \"whatever the soul possesses, to that she comes bearing life.\" Bringing life is to the soul what oddness is to three, what heat is to fire: its essential nature, the Form it always carries. And what is the opposite of life? Death. So the soul stands to death exactly as three stands to evenness and fire stands to cold: it \"will never receive the opposite of what she brings.\" The soul cannot admit death. And the principle that does not admit death, Socrates and Cebes agree, is precisely what we *mean* by \"the immortal.\" Therefore the soul is immortal. \"Then the soul is immortal? / Yes, he said.\" Socrates presses the last step, the one Cebes had demanded: not only does the soul refuse death, but \"the soul when attacked by death cannot perish.\" Like the number three, which doesn't *become* even but withdraws intact, the soul retires from death imperishable, rather than being destroyed by it. Cebes grants that it has now been, in his word, \"abundantly proven.\""
        },
        {
          "p": "This is Plato's most ambitious proof: ambitious, and his. The whole thing rests on the claim that the soul *essentially* brings life, so that it can no more take on death than fire can take on cold, plus the further step that what can't admit death is also *imperishable*, that it withdraws intact rather than being destroyed. Both steps can be pushed on, and philosophers have pushed on them ever since: does the soul carry life the way three carries oddness, or is that just an assumption? And even if the soul can't *become* dead, why must it survive rather than simply vanish at death's approach? The *Phaedo* does not pretend these questions are foolish. What it claims is to have made the strongest case it can, four arguments stacked, the weak ones supporting the strong, the hardest objections answered. Cebes is convinced. But the dialogue's own register stays modest: having proven the soul immortal, Socrates immediately turns not to a victory lap but to a *story*, and frames even that as something less than certain knowledge."
        }
      ]
    },
    {
      "num": 8,
      "title": "A likely tale, the hemlock, and a debt to a god",
      "epigraph": {
        "text": "\"Crito, I owe a cock to Asclepius; will you remember to pay the debt?\"",
        "attribution": "— Plato, *Phaedo* 118a, trans. Jowett (the last words)"
      },
      "blocks": [
        {
          "p": "If the soul is immortal, Socrates says, then the danger of neglecting it is enormous: you are caring for a thing that lasts forever. So he closes the argument with a vision of what becomes of souls after death, and he is careful to label it. It is, he says, a charming tale, a likely story, not a proof; afterward he adds that no sensible person would insist the details are exactly as he describes, only that something *like* it is worth believing. With that framing in place (this is myth, not demonstration) he describes a strange cosmology. We think we live on the surface of the earth, he says, but we are mistaken: we actually live down in its great *hollows*, at the bottom of the atmosphere, the way a creature \"at the bottom of the sea\" might \"fancy that he was on the surface of the water,\" mistaking the sea above him for the open sky. The real surface, the *true earth*, is far above us, \"pure and situated in the pure heaven.\""
        },
        {
          "p": "And the true earth, seen from above, is gorgeous. It looks, Socrates says, \"streaked like one of those balls which have leather coverings in twelve pieces,\" a stitched, many-colored sphere, \"decked with various colours, of which the colours used by painters on earth are in a manner samples,\" except that up there the colors are \"brighter far and clearer than ours.\" Everything is more vivid on the true earth: the plants, the stones, the very light. The myth then maps an underworld of rivers and chasms, with names like Acheron (AK-er-on) and the fiery Pyriphlegethon (pir-ih-FLEG-eth-on) and the wailing Cocytus (koh-SY-tus) running down into the great pit of Tartarus (TAR-tar-us), and it describes the sorting of souls after death: the just rewarded, those whose wrongs can be healed purified and released in time, the incurably wicked cast into Tartarus, and the truly holy freed altogether to the pure upper earth. It is a vision of cosmic justice. But the label stays on it the whole time: this is the picture Socrates offers as worth the risk of believing, not as something he claims to know."
        },
        {
          "p": "Then the talking is over, and the dialogue turns to the death itself. Socrates bathes, sees his children and the women of his household one last time, and sends them away. As evening comes the jailer brings in the cup of hemlock, the poison. Socrates asks whether he may pour a little out as an offering to the gods and is told there is only just enough to do the job. So he says a quiet prayer instead, and then, Phaedo recalls, \"quite readily and cheerfully he drank off the poison.\" At that the friends, who had been holding themselves together, break down weeping. And Socrates, of all of them, is the one who scolds the outcry: \"I sent away the women mainly in order that they might not misbehave in this way, for I have been told that a man should die in peace. Be quiet, then, and have patience.\" The man being executed is steadying the people watching."
        },
        {
          "p": "The end is described with clinical gentleness. On the jailer's instructions Socrates \"walked about until... his legs began to fail,\" then lay down on his back. The jailer pressed his foot and asked if he could feel it, then worked his way up the legs, showing the friends that the cold numbness was climbing toward the heart, that Socrates was growing \"cold and stiff\" from the feet up. And then, just as the chill reached his middle, Socrates uncovered his face (he had drawn a cloth over it) and spoke his last words: \"Crito, I owe a cock to Asclepius; will you remember to pay the debt?\" Crito promised it would be paid and asked if there was anything else. \"There was no answer to this question.\" Socrates was gone."
        },
        {
          "p": "Those last words are one of the genuine puzzles of ancient philosophy, and the dialogue itself offers no explanation. Asclepius (as-KLEE-pee-us) was the Greek god of healing, and the customary thank-offering for being cured of an illness was a cock (a rooster). So Socrates' final act is to settle a debt owed for a *cure*. The most common reading takes this as the dialogue's own thesis made into a last gesture: if the soul is freed from the body at death, and the body is a kind of sickness the soul is finally healed of, then dying is itself the cure, and Socrates dies giving thanks for it. Other serious readings are simpler: perhaps Socrates, or a friend, had recently recovered from an actual illness, and he is just paying a real debt of piety before he dies. A much later and more provocative reading, from the philosopher Nietzsche, took the line as a grim verdict that *life itself* was the sickness. The line is genuinely enigmatic and the dialogue does not gloss it; it can be a thought about death as release, an ordinary act of piety, or something stranger, and Plato chose to leave it open."
        },
        {
          "p": "Phaedo ends his account where he began it, looking back at the man, not the argument. \"Such was the end,\" he tells Echecrates, \"of our friend; concerning whom I may truly say, that of all the men of his time whom I have known, he was the wisest and justest and best.\" It is a fitting close, and a revealing one. For all the metaphysical machinery the *Phaedo* builds (the four proofs, the Forms, the cosmic myth) what it leaves you with is a verdict about a person: that here was a man who argued the soul outlives the body and then died as though he believed it. Whether the arguments succeed is something readers have debated for twenty-four centuries; three of the four are, by the dialogue's own admission, less than airtight, and Plato staged the best objections to them himself. But the *Phaedo* never asked to be read as a closed case. It asked to be read as the most serious attempt anyone had yet made to argue, rather than merely hope, that death is not the end, made, fittingly, by a man with every reason to want it to be true, on the one afternoon he had left to make it."
        }
      ]
    }
  ]
}
