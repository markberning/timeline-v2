// Opus AUTHOR draft of Epictetus's *Discourses* (and the *Enchiridion*) WORK read
// (Step 2 of audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/discourses-fact-ledger.md (+ cross-ref
// src/app/philosophy/thinker/_reads/epictetus.ts, which it must not contradict — it goes
// DEEPER on the TEXT, never restates the thinker read). This is the work-level deep read
// below the EPICTETUS thinker read; the five critic gates + the structural gates run against
// THIS file before it ships. PhiNarr shape is identical to nicomachean.ts / republic.ts; the
// reader at /philosophy/work/discourses (route TBD) renders it.
//
// Quote doctrine: every quoted line is Elizabeth Carter's 1758 *All the Works of Epictetus*,
// verified verbatim against Wikisource (URLs + section cites in the fact ledger). Carter's
// 18th-century noun capitalization (Things, Power, Choice) is preserved inside quotation
// marks because it is a verbatim period text. The Higginson "views which they take" wording
// and the mislabeled classics.mit.edu page are NOT used. Oldfather (Loeb) is avoided. The
// "bear and forbear" maxim is framed as Aulus Gellius, never as the surviving text. Anything
// not verifiable as verbatim Carter is PARAPHRASE, never inside quotation marks. The hero is
// the Codex Bodleianus, the chief surviving manuscript of the Discourses (distinct from BOTH
// images in the thinker read). Links verified against the registry: epictetus, aurelius.

import type { PhiNarr } from '@/components/philosophy-reader'

export const DISCOURSES: PhiNarr = {
  "title": "Epictetus's Discourses (and the Enchiridion)",
  "throughline": "A lame former slave taught philosophy out loud in a Greek classroom and wrote not a single word of it down. A student named Arrian sat in the room and took notes, and those notes are the closest thing the ancient world preserved to a great teacher actually teaching. They keep returning to one idea, drawn with a single hard line: some things are up to a person and most things are not, and almost all human misery comes from confusing the two. The long *Discourses* argue the line again and again, in the rough back-and-forth of a real lecture; the short *Enchiridion* boils it down to a handbook a person could carry in a pocket and reach for on a bad morning.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Codex_Bodleianus_%28Cod._graec._Misc._251%2C_Auct._T._4._13%29.jpg",
    "cap": "A leaf of the Codex Bodleianus (Bodleian Library, MS Auct. T. 4. 13), the chief surviving Greek manuscript of Epictetus's *Discourses*, copied around AD 1200. The visible text is *Discourses* I.18; the stain that blurs part of it is a thousand years of handling. Epictetus wrote nothing, so every word of the *Discourses* reaches us through his pupil Arrian, and through copies like this one. Public domain (faithful reproduction of a medieval manuscript).",
    "alt": "A medieval Greek manuscript page in two columns of brown ink, the parchment stained and worn, carrying the text of Epictetus's Discourses"
  },
  "hook": [
    "The *Discourses* are not a book Epictetus wrote. They are a book about him, made out of his own voice. Epictetus (born around AD 50, died around 135) was a slave in Rome who became, after he was freed, the most influential Stoic teacher of the Roman world, and like the philosopher he most admired, Socrates, he published nothing. He taught in a classroom, by argument and rebuke and example, and regarded writing treatises about virtue as roughly the activity he warned his students against. What survives, survives because one student wrote it all down.",
    "That student was *Arrian* (Lucius Flavius Arrianus, born around AD 86), a serious young Greek who would go on to a major Roman public career and to write the standard ancient history of Alexander the Great. As a young man he studied under Epictetus at the school in Nicopolis, on the western coast of Greece, and he took down the lectures. His stated aim was not to compose polished philosophy but to keep the teacher's actual voice, the blunt give-and-take of the room, as nearly word-for-word as he could. The result reads like a transcript rather than a system. A student asks something, or fails at something, and Epictetus turns on the question and works it, often sharply, sometimes very funny, always circling back to the one rule.",
    "Two books came out of that classroom. The *Discourses* (in Greek the *Diatribai*, roughly \"the talks\") were originally eight books; four survive. They are long, loose, and conversational. The *Enchiridion* (Greek for \"handbook,\" with the literal sense of a thing kept ready to the hand, the same root that names a soldier's dagger) is the opposite: about fifty short chapters, no argument running between them, each a single Stoic rule stated bare and meant to be memorized. Arrian made the handbook by distilling the lectures down to what a person actually needed to carry. Both open on the same move, because for Epictetus that move is the handle the whole of philosophy hangs from."
  ],
  "brk": {
    "beforeLabel": "Philosophy as a system to study: physics, logic, and cosmology, mastered in treatises",
    "afterLabel": "Philosophy as a drill to run: one rule about what is and is not in a person's power, practiced until it holds under pressure",
    "paragraphs": [
      "Stoicism was already old and elaborate when Epictetus taught it. Founded in Athens around 300 BC by Zeno of Citium and built into a full system by Chrysippus a generation later, it came in three vast interlocking parts: a logic (a theory of valid argument), a physics (a theory of the whole rational cosmos), and an ethics (how to live). The early Stoics wrote hundreds of treatises, almost all now lost, on the technicalities of all three. Stoicism was a thing one studied, the way one studies a science, in its full architecture.",
      "The *Discourses* keep the architecture but stop pointing at it. The text almost never argues cosmology for its own sake. It does one thing, relentlessly: it takes the towering old system and aims it at a single question, how to be unconquerable from the inside, and throws out everything that does not serve that aim. Epictetus mocks the student who can parse a Stoic syllogism but falls apart when his ship sinks or his child dies. The point of the logic, on his account, was never the logic. It was to be unshaken. So the *Discourses* mark a change in what philosophy is *for*: not a body of knowledge to master, but a set of exercises to practice, judged entirely by whether they hold up when life turns hard.",
      "That is why the same words fit a slave and an emperor. A system of physics and logic is the property of people with leisure and libraries. The teaching in the *Discourses* needs nothing but a person and their own mind, the one possession captivity cannot confiscate and power cannot enlarge. A century after the lectures, a Roman emperor was running their core drill on himself by lamplight in an army tent. The text was built from the start to be portable enough for that, which is most of why it outlasted the empire that produced it."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The book nobody wrote",
      "epigraph": {
        "text": "\"…this most excellent and superior Faculty alone, a right Use of the Appearances of Things, the Gods have placed in our own Power\"",
        "attribution": "— Epictetus, *Discourses* I.1, trans. Elizabeth Carter (1758)"
      },
      "blocks": [
        {
          "p": "The first thing to settle about the *Discourses* is what kind of object they are, because the title misleads. They are not Epictetus's own composition. A philosophy whose entire claim is that talking about virtue is worthless next to practicing it does not naturally produce treatises, and Epictetus, like Socrates four and a half centuries before him, left no writing at all. The teaching reaches the present only because Arrian, his pupil at Nicopolis, took it down. In the prefatory letter he attached to the work, Arrian says plainly that he wrote the lectures to preserve the teacher's words as nearly as he could in the teacher's own voice, not to make literature out of them. The claim is unusual and it shows in the prose: the *Discourses* read less like a book than like a recording."
        },
        {
          "p": "What that recording captures is a room. A typical chapter opens with a person, a student, a visitor, a Roman official passing through, who says something or asks something or has just made a mess of something, and Epictetus rounds on the occasion and works it in the open. The arguments are not laid out in advance and proved in order; they arrive the way they arrive in a real lecture, by objection and counter-objection, with the teacher needling, joking, and doubling back. The looseness is not a defect to be apologized for. It is the form the philosophy demanded: a method of training, captured in the act of training someone, by the one person who happened to be writing it down."
        },
        {
          "p": "Of the original eight books, four survive, a loss large enough to be worth stating plainly: half of the *Discourses* is simply gone, along with whatever the missing books contained. The four that remain are enough to fix the shape of the whole. And running parallel to them is the second, far shorter text Arrian made out of the same material, the *Enchiridion*. The Greek word means \"handbook,\" and it carries the literal sense of a thing kept close, ready to the hand, the same root that gives a name to the dagger a soldier wears at his hip. That is exactly the book's purpose. It is about fifty short chapters with no connecting argument, each a single rule stated bare, meant to be memorized and carried and reached for in the moment a person needs it. The *Discourses* are the lectures; the *Enchiridion* is the part a person takes with them."
        },
        {
          "fig": "https://upload.wikimedia.org/wikipedia/commons/a/a8/Epictetus.png",
          "cap": "Epictetus in an 18th-century engraving (after Claude Reydellet, engraved by S. Beyssent). No likeness made in his lifetime survives; every portrait, like this one, is a later artist's guess at what a former-slave Stoic teacher looked like. The text he left was never a picture or a treatise but a transcript. Public domain.",
          "alt": "Eighteenth-century engraving of Epictetus shown as an elderly bearded man in classical dress",
          "portrait": true
        },
        {
          "p": "Both books open on the same idea, and the first chapter of the *Discourses* states the philosophical ground of it. The gods, Epictetus says, placed in human power one thing alone: \"a right Use of the Appearances of Things.\" The phrase carries the whole project. An \"appearance,\" in his vocabulary, is how a situation first strikes a person, the raw impression before they have done anything with it (*this is a disaster*, *that man insulted me*, *I am ruined*). The impression arrives on its own, uninvited. What a person *does* with it, whether to endorse it, question it, or throw it out, is entirely theirs. That power of right use, the power to judge an impression rather than be swept along by it, is the one faculty fully in human hands, and it is the faculty the rest of the text trains."
        }
      ]
    },
    {
      "num": 2,
      "title": "The line down the middle of a life",
      "epigraph": {
        "text": "\"Of Things, some are in our Power, and others not. In our Power are Opinion, Pursuit, Desire, Aversion, and in one Word, whatever are our own Actions. Not in our Power, are Body, Property, Reputation, Command, and, in one Word, whatever are not our own Actions.\"",
        "attribution": "— Epictetus, *Enchiridion* 1, trans. Elizabeth Carter (1758)"
      },
      "blocks": [
        {
          "p": "The *Enchiridion* opens on the move that does all the work, and the handbook puts it first because it is the handle the rest hangs from. Some things are in a person's power and some are not. In their power: opinion, pursuit, desire, aversion, and in one word their own actions. Not in their power: body, property, reputation, command, and in one word everything that is not their own action. The modern name for this sorting is the **dichotomy of control** (\"dichotomy\" simply means a division into two; the label belongs to the present-day Stoic revival, but the doctrine is Epictetus's own, the first line of the book). The whole discipline is drawing that line, honestly and without flinching, across every event in a life: pour all energy and all hope onto the side that is genuinely one's own, and meet whatever lands on the other side with acceptance."
        },
        {
          "p": "What makes this a path to peace rather than mere resignation is the claim stated in the fifth chapter of the *Enchiridion*, the most quoted line in Stoicism: \"Men are disturbed, not by Things, but by the Principles and Notions, which they form concerning Things.\" The event itself, the loss or the insult or the setback, sits on the not-in-our-power side and is, in itself, inert. It happens, it sits there, it is over. What wounds a person is the verdict they pass on the event, the judgment that it is terrible, and that verdict sits on the in-our-power side. It is the one part of the whole episode they author. Change the verdict and the suffering changes, because the suffering was never inside the event. It was always in the judgment about it."
        },
        {
          "p": "Epictetus's own example, in the same chapter, is death. Death is not in itself terrible, he argues, or it would have struck Socrates as terrible, and it did not (Socrates drank the hemlock calmly). What is terrible is the notion of death as terrible, the judgment a person attaches to the bare fact. The fact is fixed and outside anyone's control; the judgment is not. So the entire drama of fearing death is staged, start to finish, on the one piece of ground a person actually owns, which is exactly why it can be rewritten there."
        },
        {
          "p": "The move bites hardest on a concrete case, the kind Epictetus drilled. A man is betrayed by someone he trusted, who does him a real and undeserved wrong. The ordinary response treats the wrong itself as the wound, and the wound as warrant for rage. The Stoic move sorts the situation across the line. The other man's act is on the not-in-our-power side: it is done, it sits there finished, and no quantity of fury reaches back and unmakes it. On the in-our-power side sit exactly two things, the betrayed man's judgment about what the act actually costs him, and what he chooses to become in response. The betrayal cannot be undone. The story he tells himself about it, and the person he is the next morning, are his, and that is where all his effort belongs."
        },
        {
          "p": "The standard objection arrives at once: this is a recipe for passivity, for sorting everything into \"not mine\" and doing nothing. It is the reverse. The dichotomy does not say stop acting. It says where action has purchase and where it is wasted. Epictetus's students were told to work hard at the part that answers to effort, their own preparation, their own conduct, their own choices, and to stop bleeding peace onto the part that does not, the results, which were never theirs to command. A person prepares as well as they possibly can (in their power) and lets the outcome fall where it falls (not in their power). Far from breeding inaction, the rule frees up the enormous energy most people spend churning over results they cannot control and points all of it at the one place force does anything."
        }
      ]
    },
    {
      "num": 3,
      "title": "The one thing that is yours",
      "epigraph": {
        "text": "\"You will fetter my Leg; but not Jupiter himself can get the better of my Choice.\"",
        "attribution": "— Epictetus, *Discourses* I.1, trans. Elizabeth Carter (1758)"
      },
      "blocks": [
        {
          "p": "Underneath the dichotomy of control sits the thing Epictetus thinks a person actually *is*, the thing that does the controlling. His technical word for it is **prohairesis**, which translators render as \"will,\" \"choice,\" \"volition,\" or \"the faculty of choice.\" It is the deciding part of a person: the inner agent that takes an impression and judges it, that assents or refuses, that chooses. For Epictetus this faculty is the real self. The body is a possession the self happens to be carrying; reputation and property and station are external furniture; but the will is the person. And it is the one thing, the *Discourses* insist over and over, that nothing outside can reach. Another person can chain the body, exile the citizen, kill the animal, but cannot, unless its owner lets him, compel the will to call a bad thing good. The line lands in the first chapter, spoken to a tyrant: \"You will fetter my Leg; but not Jupiter himself can get the better of my Choice.\" The leg is on one side of the line. The choice is on the other, and the threat does not cross."
        },
        {
          "p": "The authority of that line comes from who is plausibly behind it. Epictetus had been a slave, his body the legal property of another man, lame from an injury or illness the ancient sources do not agree on. A person who has had his body, his liberty, and his city each taken by someone else's decision is in an unusually strong position to notice which things in a life answer to a person's own will and which never did. The doctrine of the unconquerable will is not an abstract proposition in the *Discourses*. It is the report of a man describing the one possession that bondage had left him, and finding it sufficient."
        },
        {
          "p": "For the will to be enough, the things outside it have to be genuinely set aside, and here the *Discourses* lean on a piece of older Stoic equipment, the doctrine of **indifferents**. The Stoics held that only one thing is truly good, a person's own virtue (their wisdom, justice, courage, and self-command), and only one thing truly bad, their own vice. Everything else, wealth, health, reputation, pleasure, even life and death, is in a precise technical sense *indifferent*: not good or bad in itself, because none of it makes its owner good or bad. A scoundrel can be rich and healthy; a decent person can be poor and sick. So the externals everyone scrambles for are, by the Stoic accounting, simply not where good and bad live."
        },
        {
          "p": "That doctrine sounds inhuman until a second term is added, the **preferred indifferent**. Epictetus and the Stoics did not pretend a sane person should be equally content starving or fed. Among the indifferents, some are naturally to be chosen (health over sickness, wealth over poverty), and it is perfectly rational to pursue them. They are *preferred*. The single narrow point is that they are not *good* the way virtue is good, and so are never worth purchasing at the cost of one's character or staking one's peace upon. A person should work for the raise. The trap is becoming a worse person to get it, or coming apart when it does not come. Money matters; it simply is not the good. With that distinction in place, the will can chase the externals worth chasing without ever handing them the power to disturb it."
        }
      ]
    },
    {
      "num": 4,
      "title": "The three disciplines",
      "epigraph": {
        "text": "\"Require not Things to happen as you wish; but wish them to happen as they do happen; and you will go on well.\"",
        "attribution": "— Epictetus, *Enchiridion* 8, trans. Elizabeth Carter (1758)"
      },
      "blocks": [
        {
          "p": "Keeping the will in good order is, in the *Discourses*, the entire job, and the text breaks the work into three fields a student trains in. (Later scholars, especially Pierre Hadot, sharpened these into a tidy numbered scheme, \"the three disciplines\"; the three fields themselves are Epictetus's own, set out in the second book of the *Discourses*.) Philosophy here is **askesis**, training, the same root as \"ascetic,\" practiced like an athlete's drill rather than learned like a subject. A person does not study the rule and have it. A person runs the rule, in three areas, until it becomes reflex."
        },
        {
          "p": "The first field is the discipline of **desire**: learning to want only what is actually in one's power, so that disappointment never comes, because the wanting was never staked on something outside one's control. The eighth chapter of the *Enchiridion* states it in a single sentence: \"Require not Things to happen as you wish; but wish them to happen as they do happen; and you will go on well.\" Demanding that the world match one's wishes puts peace at the mercy of the world, which answers to no one's demands. Wishing instead for things as they actually are leaves nothing to be thwarted. The whole of the discipline of desire is the slow retraining of wanting away from outcomes and onto the only territory that obeys: a person's own conduct."
        },
        {
          "p": "The second field is the discipline of **action**: dealing rightly with other people and with one's duties, acting justly and doing what one's roles require, while holding the results loosely. This is the part of the philosophy that keeps it from collapsing into private serenity. The Stoic still has a father to honor, a city to serve, a job to do, and the discipline of action is the steady performance of all of it, with full effort poured into the doing and no peace staked on the outcome. The text is firm that withdrawal is not the goal. The goal is right action with a will that the outcome cannot touch."
        },
        {
          "p": "The third field is the discipline of **assent**: governing one's judgments, catching the impressions as they arrive and refusing to rubber-stamp the false or hasty ones. This is the faculty from the first chapter, the right use of appearances, turned into a daily practice. An impression presents itself (*this is unbearable*), and the trained person does not simply nod it through. They stop, examine it, and find it false or overblown, so the feeling built on it loses its grip. The three disciplines are one motion seen from three angles: train desire so it reaches only for what is yours, train action so the reaching is just and dutiful, train assent so no false verdict slips past the gate. Run all three, and the will the philosophy is built to protect stays in a person's own keeping."
        }
      ]
    },
    {
      "num": 5,
      "title": "The actor in the play",
      "epigraph": {
        "text": "\"Remember that you are an Actor in a Drama, of such a Kind as the Author pleases to make it… For this is your Business, to act well the Character assigned you: to chuse it, is another's.\"",
        "attribution": "— Epictetus, *Enchiridion* 17, trans. Elizabeth Carter (1758)"
      },
      "blocks": [
        {
          "p": "The single most memorable image in the *Enchiridion* answers the question the whole philosophy provokes: if the externals are not a person's own and the outcomes are not a person's own, what exactly is a person's life? The seventeenth chapter answers with the theatre. \"Remember that you are an Actor in a Drama, of such a Kind as the Author pleases to make it. If short, of a short one; if long, of a long one. If it be his Pleasure you should act a poor Man, a Cripple, a Governor, or a private Person, see that you act it naturally. For this is your Business, to act well the Character assigned you: to chuse it, is another's.\""
        },
        {
          "p": "Every term of the dichotomy is in that image, set out as a stage direction. A person does not pick the play, the part, or the length of the run; an actor is handed a role and the runtime is set by someone else. All of that is on the not-in-our-power side. What is on the in-our-power side is exactly one thing: how the assigned part is played. The role is given; the playing is one's own. So the philosophy's hardest-sounding conclusion turns out to be its most freeing. A person can be cast as a slave or cast as a magistrate, and the assignment, in the only reckoning that counts, is identical, because the question was never *which* part, which was never theirs to pick, but *how well* it is acted, which is theirs entirely."
        },
        {
          "p": "The image carries the weight Epictetus needs it to carry partly because of who is using it. A man who had been cast, in life, as a slave, and then recast as a free teacher, is well placed to insist that the casting was never the thing that mattered. The list of possible parts in the text is pointed: a poor man, a cripple, a governor. The teacher who had been poor and was lame is naming his own roles and treating each as a thing to be acted well rather than a verdict on the actor. The role ethics of the *Enchiridion* is the dichotomy of control compressed into a single picture a person can hold, which is exactly the kind of thing a handbook is for: not an argument to follow but an image to keep ready to the hand."
        },
        {
          "p": "It is also the reason the same text could fit two stations as far apart as a Roman life allowed. A teaching that locates a person's whole worth in how well they act an assigned part, and none of it in which part they were assigned, does not change when the part changes. The man who owned nothing and the man who owned everything are, on this account, doing the identical work, because the work was always the playing and never the role. That portability, designed into the philosophy from the first chapter, is most of why the *Discourses* travelled the way they did."
        }
      ]
    },
    {
      "num": 6,
      "title": "What the handbook leaves, and the hand that carried it",
      "epigraph": {
        "text": "\"bear and forbear\"",
        "attribution": "— Epictetus's two-word maxim, as reported by Aulus Gellius, *Attic Nights* XVII.19"
      },
      "blocks": [
        {
          "p": "A text this clean has costs, and the honest version names them. The first is the charge that it asks too much, that its calm is bought by going numb. To be told, while grieving a dead child, that the loss is an \"indifferent\" and the pain is merely a judgment one is free to drop can read as monstrous rather than wise. The *Discourses* have an answer (the loss is real, the grief is a judgment, and judgments can be examined), but the answer can shade into a demand to feel less than a human being feels, and the Stoics were attacked on exactly this point in antiquity. Whether the dichotomy of control is liberating or chilling depends a great deal on who is using it, and on what."
        },
        {
          "p": "The second cost is political, and it is the deepest tension in the book. Its doctrine of inner freedom, that no master can enslave the will, that the one true possession is untouchable, was forged out of an actual enslavement and is genuinely profound as a private consolation. It is also a teaching that leaves the institution of slavery entirely intact. If the only real freedom is internal, and external bondage is an indifferent that cannot harm the part of a person that matters, then on the doctrine's own terms there is no urgent reason to break anyone's chains. The *Discourses* draw on Epictetus's own bondage to dramatize the freedom of the will, and nowhere in what survives call for the freeing of slaves. The philosophy that the body's bondage does not touch the soul was, as a social fact, perfectly compatible with the body's bondage continuing. That is a real limit, and the doctrine's private power does not erase it."
        },
        {
          "p": "Against those costs stands what the text actually does, compressed (the report goes) into two Greek words. The Roman writer Aulus Gellius records, in his *Attic Nights*, that Epictetus said the whole of right living could be carried in the phrase *anechou kai apechou*, \"bear and forbear\": endure what cannot be changed, and abstain from grasping at what is not one's own. The phrase is not in the surviving *Discourses* or the *Enchiridion*; it reaches the present through Gellius. But it is the dichotomy of control as a slogan a person could keep at the very front of the mind, which is the whole ambition of the handbook the *Enchiridion* set out to be. Bear the part that is not up to you; forbear from staking anything on it; spend everything only on the part that is."
        },
        {
          "p": "The text's survival is its own argument. Epictetus held that reputation was an indifferent, outside a person's power and not worth a moment's anxiety, and he wrote nothing, expecting to be forgotten as he taught his students they should expect to be. Instead Arrian's record outlasted the empire. The *Enchiridion* became one of the most widely read and most translated short books in the history of philosophy. A Roman emperor, [Marcus Aurelius](/philosophy/thinker/aurelius), received the *Discourses* from his teacher and ran their central drill on himself in a private notebook on a war frontier; Christian monasteries copied a baptized version of the handbook for centuries; and in the present day the line from the fifth chapter, that people are disturbed not by things but by their judgments about things, sits at the documented root of cognitive behavioural therapy. The most physical proof is a stained leaf of parchment, copied around AD 1200, carrying the Greek of a lecture given more than a thousand years earlier by a man who never wrote a word, preserved by a student who did. [Epictetus](/philosophy/thinker/epictetus) would have called the throne and the chain equally indifferent, and would have said the only thing that ever mattered was how each man played the part he was handed. By that measure, the slave who taught the *Discourses* played his well."
        }
      ]
    }
  ]
}
