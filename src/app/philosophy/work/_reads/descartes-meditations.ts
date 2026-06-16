// Opus AUTHOR draft of Descartes' *Meditations on First Philosophy* WORK read
// (Step 2 of audits/philosophy-content-pipeline.md, kind = WORK). Written ONLY from
// audits/philosophy-pipeline/descartes-meditations-fact-ledger.md (+ cross-ref the
// DESCARTES thinker read src/app/philosophy/thinker/_reads/descartes.ts and the era-3
// read src/app/philosophy/rationalists-empiricists/narrative.ts, neither of which it
// may contradict). It goes DEEPER than both and never restates them. PhiNarr shape is
// identical to nicomachean.ts / meditations.ts (Marcus); the reader at
// /philosophy/work/meditations renders the work whose id is `meditations`.
//
// NOTE on the name collision: philosophy-data.ts work id `meditations` = Descartes'
// *Meditations on First Philosophy* (this file). The export MEDITATIONS in
// meditations.ts is Marcus Aurelius's *Meditations* (work id `meditations-ma`). This
// file exports DESC_MEDITATIONS to keep them distinct.
//
// Quote doctrine: every quoted line is JOHN VEITCH's 1901 public-domain translation,
// string-matched in the fact ledger, cited by Meditation. Haldane & Ross (1911) was
// cross-checked and agrees in substance; no modern in-copyright translation is quoted
// (Cottingham/CSM, Cress, Moriarty, Williams = blacklist; the Cottingham
// "non-extended... really distinct" trap was avoided). The Latin "Cogito ergo sum" /
// "I think, therefore I am" is framed as the DISCOURSE's and PRINCIPLES' phrasing,
// NEVER attributed to the Meditations, which says "I am, I exist." Elisabeth of
// Bohemia's interaction objection has no confirmed PD English and is never quoted
// (era-3 rule); it sits as a forward-pointer to the thinker read. No em-dashes in
// narration (only inside verified quotes and the epigraph "— Author" lines).

import type { PhiNarr } from '@/components/philosophy-reader'

export const DESC_MEDITATIONS: PhiNarr = {
  "title": "Descartes's Meditations on First Philosophy",
  "throughline": "The *Meditations* is a demolition followed by a rebuild, run in cold blood over six short stages. [Descartes](/philosophy/thinker/descartes) sets out to doubt everything that can possibly be doubted, not because he thinks it all false but as a sieve, to catch whatever refuses to wash away. The senses go first, then the whole external world (he cannot prove he is not dreaming), then even arithmetic (an all-powerful deceiver could rig his mind). When nothing seems to be left, one thing survives: he cannot doubt that he, the doubter, exists, because there must be a someone there to be deceived. From that single point he tries to climb back out to a world, by way of a God who exists and would not systematically lie to him. The famous slogan everyone hangs on this book is not in it. The *Meditations* says \"I am, I exist,\" with no \"therefore.\" And the bridge he builds back to the world has a crack in it that was named before the ink was dry.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/960px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    "cap": "Portrait of René Descartes, after Frans Hals, 1649 (the year before his death). Oil on canvas, 77.5 × 68.5 cm, Louvre, Paris (INV. 1317). The *Meditations* had been in print eight years when this was painted.",
    "alt": "Oil portrait of René Descartes in three-quarter view, a man with long dark hair and a moustache in dark clothing against a dark ground"
  },
  "hook": [
    "The *Meditations on First Philosophy* (in Latin, *Meditationes de Prima Philosophia*) appeared in 1641, written by [René Descartes](/philosophy/thinker/descartes) (1596 to 1650) in Paris, in Latin, for philosophers and theologians. \"First philosophy\" is the old name for metaphysics: the most basic questions of all, about what exists and what can be known. The book asks one of them and refuses every easy answer. What, if anything, can a person know with absolute certainty, certainty that no possible doubt could ever shake? Not what is probably true, not what everyone agrees on, not what the senses report or the authorities teach. What is so solid that even the wildest doubt cannot reach it.",
    "The form is unusual and deliberate. There are six meditations, written in the first person, each presented as a single sitting of withdrawn thought. Descartes frames them in his Synopsis as work to be done slowly, one stage at a time, the reader thinking each through rather than skimming it, which is where the traditional shorthand of \"six days\" comes from. The first three tear down; the last three build back up. The downward arc is the most radical doubt anyone had put on paper: by the end of the first meditation there is no world, no body, no mathematics left standing. The upward arc tries to recover all of it from the one thing the doubt could not destroy.",
    "Descartes did something with this book that almost no one does. Before publishing it, he sent the manuscript to the sharpest minds in Europe and printed their objections, with his replies, bound in the same volume. The mathematician Antoine Arnauld, the philosopher Thomas Hobbes, the friar Marin Mersenne, and others got to attack the argument in print, on the page facing it. One of those objections found a flaw at the very center of the rebuild, a flaw the book has never shaken. The argument and the strongest case against it ship together, which is one signal of what kind of book it is."
  ],
  "brk": {
    "beforeLabel": "Knowledge starts from what the authorities and the senses give; the task is to understand the world as handed down",
    "afterLabel": "Knowledge starts from nothing, from the one thing the doubter cannot doubt, and is rebuilt outward, every step certified from the inside",
    "paragraphs": [
      "The philosophy Descartes was trained in started from the outside and worked in. The medieval universities, heirs to Aquinas and Aristotle (the faith-and-reason chapter), began from what was held most certain and best established: the authoritative texts, revelation, the senses as the mind's natural windows onto a real, God-made world. The world was given; the task was to grasp it correctly. That was a coherent and defensible program, and it had organized European thought for a thousand years. Its weak point was that it never asked a prior question. It took its starting points on trust and reasoned forward from them, without first proving that the starting points themselves could bear any weight.",
      "The *Meditations* puts that prior question first and makes it the whole of the first half of the book. Before asserting anything about what exists, God, the soul, matter, or even that two and three make five, Descartes asks what procedure could give him a single claim he is genuinely unable to doubt. Not a claim an authority vouches for, not a claim the senses report, but a claim he has personally driven down to bedrock and certified himself. The tool is universal methodic doubt: doubting everything that can possibly be doubted, not to stay in doubt but to find what survives it. He runs the doubt as hard as it will go precisely so that whatever is left at the bottom will have outlasted the worst.",
      "The concrete move is the one that defines what is still called modern philosophy. The starting point becomes the thinking subject. Not \"what is the world made of,\" not \"what does the authority say,\" but \"what can I establish, examining my own mind from the inside, beginning from nothing I have not verified myself.\" The foundations are no longer inherited. They are rebuilt, by the thinker, from a single first-person certainty outward, with nothing admitted into the structure until it has passed. Everyone in the rest of the era, the rationalists building on the method and the empiricists tearing at it, is working on the ground the six meditations cleared."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "Meditation I: the demolition",
      "epigraph": {
        "text": "\"All that I have, up to this moment, accepted as possessed of the highest truth and certainty, I received either from or through the senses.\"",
        "attribution": "— René Descartes, *Meditations*, Meditation I, trans. John Veitch"
      },
      "blocks": [
        {
          "p": "The first meditation opens with a decision and a labor-saving trick. The decision is to clear the ground completely: to set aside, once in a life, everything previously believed and accept nothing back that is not certain beyond any possible doubt. The trick is that the beliefs do not have to be examined one at a time, which would never end. They rest on a few foundations, and knocking out a foundation brings down everything built on it at once. So Descartes goes after the foundations, and the first one carries almost everything. \"All that I have, up to this moment, accepted as possessed of the highest truth and certainty, I received either from or through the senses.\" Sight, hearing, touch: nearly the entire contents of a mind enter through them."
        },
        {
          "p": "The senses are caught lying constantly. A straight stick looks bent where it enters water; a square tower looks round from a distance; the sun looks small. A faculty that has deceived even once is not to be trusted completely, so anything resting on sense-perception is, in principle, suspect, and out it goes. But some perceptions seem too obvious to doubt. A man sitting by a fire, holding a sheet of paper, seems unable to doubt that he is there at all, and only someone deranged would try. Descartes grants that this feels unshakable, which is exactly why he needs a stronger acid than the ordinary unreliability of the senses."
        },
        {
          "p": "The stronger acid is dreams. In a dream the dreamer takes the dream for reality, every time, while it is happening. Descartes has dreamt, with total conviction, of sitting by a fire when in fact he was asleep in bed, and there is no test he can run at this moment to prove he is awake now rather than dreaming that he is awake. \"I perceive so clearly that there exist no certain marks by which the state of waking can ever be distinguished from sleep, that I feel greatly astonished; and in amazement I almost persuade myself that I am now dreaming.\" If waking cannot be told from sleep, then \"I am sitting here by the fire\" might be false, and the whole external world goes with it: every object, his own hands, his own body, all possibly a dream. Two sentences sweep the material world off the table."
        },
        {
          "p": "Something seems to survive even the dream. Whether a man is awake or asleep, two and three still make five and a square still has four sides; the general truths of mathematics look indifferent to who is sleeping. Reaching for the bottom, Descartes builds the strongest doubt that can be constructed. Suppose there is not a good God but some being of enormous power and cunning bending its whole effort to deception. \"I will suppose, then, not that Deity, who is sovereignly good and the fountain of truth, but that some malignant demon, who is at once exceedingly potent and deceitful, has employed all his artifice to deceive me.\" This deceiver makes the sky, the earth, colours, and shapes nothing but traps laid for belief, and can go further than any dream: it can rig the mind so that it errs even in arithmetic, so that the most self-evident truths are planted lies. Now nothing is left. Not the world, not the body, not mathematics."
        },
        {
          "p": "Descartes does not believe in the demon. The malignant demon is a tool, the strongest possible challenge he can build, cranked deliberately past anything he actually fears, so that whatever outlasts it will have outlasted the worst. It is hyperbolic doubt, doubt on purpose, doubt past the point of sincerity. Descartes has contempt for the ancient skeptics who doubted in order to stay in doubt forever (the Greeks chapter); his doubt has an off-switch, and the entire point is to find the thing that throws it. The demon is also not conjured from nowhere. The medieval logician Ockham had already pressed that an all-powerful God could arrange the world, or a mind, to deceive (the faith-and-reason chapter). Descartes' deceiver is that thought taken to its terminus."
        },
        {
          "p": "The first meditation ends at the bottom on purpose. There is no world, no body, no mathematics, no God yet to appeal to: only a mind, alone, that has just supposed an omnipotent liar is feeding it falsehoods about everything. The staged collapse is what makes the next move land. What survives this, the one thing the demon cannot reach no matter how hard it works, will not arrive as a clever slogan. It will arrive as the floor stopping, the first solid thing in a free fall."
        }
      ]
    },
    {
      "num": 2,
      "title": "Meditation II: the one thing left, and the ball of wax",
      "epigraph": {
        "text": "\"this proposition, I am, I exist, is necessarily true each time it is expressed by me, or conceived in my mind.\"",
        "attribution": "— René Descartes, *Meditations*, Meditation II, trans. John Veitch"
      },
      "blocks": [
        {
          "p": "The floor stops at the start of the second meditation. Suppose the demon is deceiving the meditator about absolutely everything. Then there is a meditator being deceived, a someone for the demon to fool. The demon can make a mind wrong about the sky and the earth and arithmetic, but it cannot make a mind wrong about the bare fact that it, right now, is being made wrong, because nothing cannot be deceived. The harder the deceiver works to prove the thinker is nothing, the more certain it becomes that the thinker is something. Doubt settles it directly: doubting is a kind of thinking, and if there is thinking, there is a thing doing it. Veitch's wording is exact: \"this proposition, I am, I exist, is necessarily true each time it is expressed by me, or conceived in my mind.\" Every time the thought is thought, it cannot be false. That is the bedrock."
        },
        {
          "p": "The wording is also the place almost every retelling goes wrong. The world knows this moment as four Latin words, *Cogito, ergo sum*, \"I think, therefore I am,\" and believes them to be the climax of the *Meditations*. They are not in the *Meditations* at all. What the *Meditations* gives, at this exact moment, is \"I am, I exist\" (Descartes' Latin: *ego sum, ego existo*), with no \"therefore\" and no syllogism, a fact the thinker cannot help affirming the instant the thought occurs. The slogan lives in two other books. The *Discourse on the Method* of 1637, written in French, has \"je pense, donc je suis\" as something Descartes says he observed to be true; the Latin tag stamped into English editions of that passage is Veitch's own added gloss, not Descartes' 1637 words. Only the *Principles of Philosophy* of 1644 states the formal Latin axiom \"ego cogito, ergo sum\" as a first principle. The book where the argument actually does its work is the book without the slogan."
        },
        {
          "p": "The punchy syllogism makes the cogito look like a piece of logic, premise to premise to conclusion, something a clever skeptic might dispute a step of. In the *Meditations*, where the move carries its real weight, it is not a deduction. It is a thing that cannot be doubted in the very act of doubting it, because the doubting performs it. There is no premise to attack. The certainty is also thin, and Descartes is scrupulous about its size. All it establishes is that something that thinks exists, right now, for as long as it is thinking. It does not prove the thinker has a body; the body went into doubt in the first meditation and stays there. It does not prove the world is real or that the thinker persists when thought stops. One momentary first-person fact, with no world attached, is the entire haul. The rest of the book is the work of getting from this single point back out to a world."
        },
        {
          "p": "Before leaving the second meditation, Descartes runs an argument that quietly decides the metaphysics of the whole book. He takes a piece of beeswax fresh from the comb. It tastes of honey, smells of flowers, has a colour, a shape, a size; it is hard and cold and makes a sound when rapped. Everything that lets one identify it seems to arrive through the senses. Then it is held to the fire. The taste burns off, the smell vanishes, the colour changes, the shape collapses, it turns liquid and hot and silent. Every sensory quality used to identify the wax is now gone, and yet no one doubts it is the same wax. So whatever grasps the wax itself, the thing that lasted through the total change of all its sensible qualities, was never the senses, because the senses reported only the qualities, and all of those changed. Veitch's line: \"the perception of it is neither an act of sight, of touch, nor of imagination, and never was either of these, though it might formerly seem so, but is simply an intuition of the mind.\""
        },
        {
          "p": "The wax does two jobs. The first strikes at the Scholastic confidence that knowledge starts in the senses: real knowledge of a material thing turns out to be intellectual, grasped by the mind, with the senses reporting only a passing surface. This is the claim the empiricists, two chapters of the era later, come for hardest. The second job is quieter and sets up the sixth meditation. The wax argument has just shown the thinking thing, the mind established a moment earlier, doing something the senses cannot do, holding onto what persists when every sensible quality is stripped away. The intellect has a kind of access to reality the body lacks, and that difference is the first hint of the great thesis to come: that mind and body are not two parts of one person but two different kinds of thing."
        }
      ]
    },
    {
      "num": 3,
      "title": "Meditation III: the idea of God",
      "epigraph": {
        "text": "\"there must at least be as much reality in the efficient and total cause as in its effect.\"",
        "attribution": "— René Descartes, *Meditations*, Meditation III, trans. John Veitch"
      },
      "blocks": [
        {
          "p": "After the second meditation Descartes is stuck in a corner of his own making. He has exactly one certainty, that he, a thinking thing, exists right now, and a malignant demon still hypothetically rigging everything else. He has no world, no trustworthy body, no reliable mathematics, because the deceiver could be faking even that. To recover anything, he needs to disarm the demon, to establish that his most careful thoughts are not being systematically falsified. The route runs through God. If a perfect, non-deceiving God exists, then such a God would not leave him hopelessly wrong about what he perceives clearly and distinctly, the demon dies, and the world can be rebuilt. The third meditation is the first proof that God exists, and everything downstream depends on it."
        },
        {
          "p": "The proof works from an inventory of ideas. Among the ideas in his mind, Descartes finds one of God, defined with care: \"By the name God, I understand a substance infinite, [eternal, immutable], independent, all-knowing, all-powerful, and by which I myself, and every other thing that exists, if any such there be, were created.\" The question is where an idea of an infinite, perfect being could have come from. His governing principle is a claim about causes: \"there must at least be as much reality in the efficient and total cause as in its effect.\" There cannot be more in an effect than was available in its cause, and an idea must have a cause adequate to what the idea represents."
        },
        {
          "p": "Apply that principle to the idea of infinite perfection. A finite, imperfect, error-prone mind has the materials to build plenty of ideas out of pieces it already knows. It can assemble a unicorn from a horse and a horn, both met before. But infinite perfection is not a patchwork of finite parts. It is a positive idea of something with no limit at all, and a small, flawed, limited mind is too thin a cause for so large an effect. Veitch's line states the conclusion: \"I should not, however, have the idea of an infinite substance, seeing I am a finite being, unless it were given me by some substance in reality infinite.\" Something actually infinite and perfect must have placed the idea there. The name for this is the trademark argument, after Descartes' own image: the idea of God in the mind is like the mark a craftsman stamps on his work, a maker's signature left in the made thing."
        },
        {
          "p": "The proof is doing structural work, not piety. A non-deceiving God, once established, certifies a general rule: whatever the mind perceives clearly and distinctly is true. That rule is the engine of the entire rebuild. With it, Descartes can begin to recover mathematics, the external world, and his own body, each as something a good God would not let him be systematically wrong about. The lonely cogito gave him one point. God is meant to be the bridge from that point back out to a knowable world. The third meditation buys the bridge. The next two meditations test whether it holds."
        }
      ]
    },
    {
      "num": 4,
      "title": "Meditation IV: why we go wrong",
      "epigraph": {
        "text": "\"the will, which is of much wider range than the understanding... readily falls into error and sin by choosing the false in room of the true.\"",
        "attribution": "— René Descartes, *Meditations*, Meditation IV, trans. John Veitch"
      },
      "blocks": [
        {
          "p": "The fourth meditation answers a problem the third one creates. If a perfect God made the meditator and is no deceiver, why does the meditator get things wrong at all? A flawless maker who hates deception seems to have built a faulty product, one that falls into error constantly. The worry is real, because Descartes' whole recovery depends on the reliability of a God-given faculty of judgment, and a faculty that fails looks like a strike against the God who gave it. He has to locate the source of error somewhere other than in God's design, or the rebuild collapses back into the demon's world."
        },
        {
          "p": "His answer separates two faculties of the mind. The understanding (the intellect) is the power to perceive ideas, to grasp what is presented for judgment. The will is the power to affirm or deny, to say yes or no, to assent or withhold. The understanding, Descartes notes, is limited: there is a great deal a finite mind simply does not perceive clearly. The will is not limited in the same way. It can range over anything at all, affirming or denying propositions the understanding has not actually made clear. Error lives in the gap between the two."
        },
        {
          "p": "On where errors come from, Veitch's sentence states the mechanism in full: \"They arise from this cause alone, that I do not restrain the will, which is of much wider range than the understanding, within the same limits, but extend it even to things I do not understand, and as the will is of itself indifferent to such, it readily falls into error and sin by choosing the false in room of the true, and evil instead of good.\" Error is not a defect installed by God. It is a misuse of a good faculty: the will outrunning the intellect, affirming what was never clearly perceived. A man asked whether a distant shape is a person or a post, who sees only a blur and nonetheless declares it a person, has not been deceived by his maker. He has chosen to affirm beyond what he was given to see. God gave a reliable intellect and a free will; the error is in pushing the second past the first."
        },
        {
          "p": "The fix follows directly and becomes Descartes' rule for inquiry. Withhold judgment until the understanding presents something clearly and distinctly; affirm only what is perceived that plainly, and on everything else suspend assent. Used that way, the will cannot lead into error, because it never reaches past what the intellect has secured. The fourth meditation has done more than excuse God. It has handed the rebuild its operating procedure: clear and distinct perception is the licence to affirm, and the discipline of the will is what keeps the recovered world from being built on guesses. The next meditation puts that licence to work on the hardest case, God's own existence, a second time."
        }
      ]
    },
    {
      "num": 5,
      "title": "Meditation V: God again, from the idea alone",
      "epigraph": {
        "text": "\"the existence can no more be separated from the essence of God, than the idea of a mountain from that of a valley.\"",
        "attribution": "— René Descartes, *Meditations*, Meditation V, trans. John Veitch"
      },
      "blocks": [
        {
          "p": "The fifth meditation proves God exists a second time, by a completely different route, and the second proof is the cleaner of the two. The third meditation argued from an effect (the idea of God in the mind) back to its cause. The fifth argues from the bare definition of God, with no appeal to where any idea came from. It is a version of an argument made six hundred years earlier by Anselm (the faith-and-reason chapter), now called the ontological argument, from the Greek for \"being\": a proof of God's existence drawn purely from what God is."
        },
        {
          "p": "The reasoning rests on what belongs to a thing's essence, its nature, the set of properties without which it would not be the thing it is. A triangle's essence includes having three angles that sum to two right angles; that is not an optional extra, it is built into being a triangle, and anyone who really grasps a triangle cannot consistently deny it. God's essence, Descartes argues, includes every perfection. Existence, he claims, is itself a perfection: a supremely perfect being that did not exist would be missing something and so would not be supremely perfect. So existence belongs to God's essence the way three-angles-summing-to-two-right-angles belongs to a triangle's. Veitch's line: \"the existence can no more be separated from the essence of God, than the idea of a mountain from that of a valley, or the equality of its three angles to two right angles, from the essence of a [rectilinear] triangle.\""
        },
        {
          "p": "The mountain and the valley carry the force of it. A mountain is a rise with a dip beside it; the idea of an uphill slope brings a downhill slope with it, and no one can think a slope rising on every side with no descent anywhere. The two ideas are inseparable, not by choice but by what the ideas are. Descartes claims the same inseparability for a supremely perfect being and existence: once the concept is grasped clearly, existence comes built in, and denying it is like trying to think a mountain with no valley. This is exactly the kind of clear and distinct perception the fourth meditation licensed the will to affirm, which is why the proof belongs here, after the rule of clear and distinct ideas is in place."
        },
        {
          "p": "Whether the proof works has been argued ever since, and the standing objection is old. Existence may not be a property a thing can have or lack the way it has a colour or a number of angles; saying a thing exists may not add to its definition but only assert that the definition is met somewhere. Kant pressed this hardest, a century and a half later (era 4). For the structure of the *Meditations*, what matters is the job the proof does. Two proofs of a non-deceiving God now stand, and together they are meant to lock in the rule that whatever is perceived clearly and distinctly is true. With that rule secured, the sixth meditation can finally do what the whole book was for: walk back out of the mind to the world."
        }
      ]
    },
    {
      "num": 6,
      "title": "Meditation VI: mind, body, and the world recovered",
      "epigraph": {
        "text": "\"it is certain that I... am entirely and truly distinct from my body, and may exist without it.\"",
        "attribution": "— René Descartes, *Meditations*, Meditation VI, trans. John Veitch"
      },
      "blocks": [
        {
          "p": "The sixth meditation collects the payoff and states the book's most consequential thesis. With a non-deceiving God established, Descartes argues that mind and body are two genuinely different kinds of thing. \"Substance\" is the technical word at work: a basic, self-standing kind of stuff, a thing able to exist on its own. The mind, *res cogitans* or \"thinking thing,\" thinks and has no extension; it takes up no space, has no shape, sits at no location. The body, *res extensa* or \"extended thing,\" takes up space, has a shape and a place, obeys mechanical laws, and divides into parts. Veitch's conclusion: \"because, on the one hand, I have a clear and distinct idea of myself, in as far as I am only a thinking and unextended thing, and as, on the other hand, I possess a distinct idea of body, in as far as it is only an extended and unthinking thing, it is certain that I... am entirely and truly distinct from my body, and may exist without it.\" This is the real distinction, the heart of what is called substance dualism."
        },
        {
          "p": "Descartes did not invent the idea that mind and body are distinct. Plato's *Phaedo* separates soul from body explicitly (the Plato read, and the Greeks chapter); Augustine spent the *Confessions* anatomizing the inner self against the flesh (the faith-and-reason chapter); the Scholastics distinguished the two for a thousand years. What the sixth meditation makes new is the sharpness. In Plato and Aristotle the soul and the body are parts or aspects of one living creature. Descartes makes them two complete substances, each able in principle to exist without the other, sharing not one property in common, the mind with no size and the body with no thoughts, as unlike each other as a number is unlike a stone. The thinker read carries the rest of that story, including the body-as-machine and the problem of how the two could ever touch."
        },
        {
          "p": "The real distinction also recovers the external world, the thing the first meditation had thrown away. Descartes has a strong, involuntary tendency to believe that his sensations of colour, sound, and resistance come from real bodies outside him; the ideas arrive whether he wills them or not, as if pressed on him from without. A good God gave him both that tendency and no faculty for correcting it, which means a deceiving God would be the only explanation for its being systematically false. \"God is no deceiver.\" So the tendency is trustworthy in its general form: material things exist, more or less as mathematics describes them, even if particular sense-perceptions can mislead about the details. The world the doubt erased comes back, certified by the same non-deceiving God who certified everything else."
        },
        {
          "p": "The whole rebuild rests on that God, and the rest rests on the rule that clear and distinct ideas are true. Which is where the crack is. Clear and distinct ideas are trusted because a non-deceiving God exists; God's existence was proved by reasoning Descartes accepts only because it struck him as clear and distinct. The guarantee depends on the very faculty it was brought in to guarantee. The objection has a name, the Cartesian circle, and it was raised in the volume itself: first by Marin Mersenne in the second set of Objections, then pressed harder by Antoine Arnauld in the fourth. Descartes replied; most scholars hold he never escaped it. The bridge from the lonely cogito back out to the world runs in a loop with no anchor."
        },
        {
          "p": "The *Meditations* leaves a foundation that holds and a structure that does not quite stand on it. The cogito is solid: four hundred years on, no one has gotten behind \"I am, I exist.\" The rebuild is contested at every joint, the trademark argument, the ontological argument, the circle, and the real distinction, which created the mind-body problem it could not solve and left it open to the present day. The deepest blow came not from the printed Objections but from Princess Elisabeth of Bohemia, who pressed Descartes on how an unextended mind could move an extended body at all, an exchange the thinker read takes up in full. The book reset the central question of the modern era, from what the authorities hand down to what a single mind can establish from nothing. It did not close its own proof, and it is read still because it failed in the most productive way a great book can."
        }
      ]
    }
  ]
}
