// Newcomer glossary: a plain-language "map of the -isms" for a reader with zero
// philosophy background. Each entry follows the same shape on purpose: what it IS,
// what it is NOT (the confusion it gets mistaken for), a concrete everyday example,
// and where it sits next to its nearest neighbor. Definitions are checked against
// standard reference usage (Stanford Encyclopedia of Philosophy, Internet
// Encyclopedia of Philosophy, Britannica). Cross-links point only where an entry
// genuinely matches a shipped read (school hub, thinker system, or work).
//
// Pure data + interfaces. No imports, no runtime dependencies.

export interface IsmEntry {
  term: string
  is: string
  isnt: string
  example: string
  related?: string
  link?: { kind: 'school' | 'thinker' | 'work'; id: string }
}

export interface IsmGroup {
  title: string
  intro?: string
  entries: IsmEntry[]
}

export const ISM_GROUPS: IsmGroup[] = [
  {
    title: 'The big branches',
    intro: 'Before the -isms, the buckets they fall into. Philosophy splits into a handful of big questions, and almost every term below is an attempt to answer one of them. Get these five and the rest of the map has somewhere to sit.',
    entries: [
      {
        term: 'Metaphysics',
        is: 'The "what is really there?" branch. It asks what actually exists and what the world is ultimately made of underneath everything we notice: is reality only matter, or are minds and ideas real too? Is there a God? Is time real, or only how we experience things?',
        isnt: 'Not "metaphysical" in the crystals-and-energy sense (the word got borrowed for that much later). And not about how we know things (that is epistemology) or how we should live (that is ethics). Metaphysics is only about what is real.',
        example: 'Does the number 7 exist? You cannot see or touch it, yet every sum treats it as completely real. Whether 7, or your mind, or God, or time genuinely exists, and in what way, is a metaphysics question.',
        related: 'It is the branch the "Concerning Reality" terms argue inside: Materialism, Idealism, Dualism, and Monism are rival answers to its core question. Its sibling branches are Epistemology (how we know) and Ethics (how to live).',
      },
      {
        term: 'Epistemology',
        is: 'The "how do we know?" branch. It asks what knowledge actually is, where it comes from, and when we are entitled to say we really know something rather than just believe it or guess.',
        isnt: 'Not about what exists (that is metaphysics) but about how we could ever find out. A belief being true and your being right to hold it are two different jobs, and this branch handles the second.',
        example: 'You are sure the sun will rise tomorrow, yet you have never seen the future. Epistemology asks what makes that confidence reasonable, and whether your senses, memory, and reasoning can be trusted at all.',
        related: 'The "Concerning Knowledge" terms live here: Empiricism and Rationalism are rival answers to where knowledge comes from, and Skepticism is the doubt that shadows it. One of the three core branches with Metaphysics and Ethics.',
      },
      {
        term: 'Ethics',
        is: 'The "how should we live?" branch. It asks what makes an action right or wrong, what a good life is, and how we ought to treat one another.',
        isnt: 'Not a fixed list of commandments handed down, and not mere etiquette or personal taste. It is the reasoned search for what actually makes something right, not just what a given group happens to approve of.',
        example: 'Is it wrong to lie to spare someone\'s feelings? Ethics does not simply poll people; it asks what makes the lie right or wrong, judged by its results, by duty, or by what a good person would do.',
        related: 'The "Concerning Morality" terms are its rival answers: Utilitarianism (judge by results), Deontology (judge by duty), and Virtue Ethics (build good character). Applied to whole societies it becomes Political philosophy.',
      },
      {
        term: 'Logic',
        is: 'The "what follows from what?" branch. It studies the rules of good reasoning: how to tell when a conclusion truly follows from its reasons, and when an argument only looks convincing.',
        isnt: 'Not "being logical" as a personality trait, and not about whether your starting facts are true. Logic checks the wiring of an argument, not the truth of what you plug into it.',
        example: '"All cats are mammals; Felix is a cat; so Felix is a mammal." Logic confirms that shape is valid: if the first two are true, the third has to be. The form can stay valid even when you feed it false premises.',
        related: 'The toolkit the other branches use to argue cleanly. Scholasticism and Analytic Philosophy lean on it especially hard.',
      },
      {
        term: 'Aesthetics',
        is: 'The "what is beauty and art?" branch. It asks what makes something beautiful, what art is for, and whether judgments of taste are purely personal or can actually be argued about.',
        isnt: 'Not "an aesthetic" as a look or vibe, and not art history. It is the questions behind art, not the catalogue of it.',
        example: 'Two people disagree about whether a song is good. Aesthetics asks whether either one can be right, or whether calling something "beautiful" only ever means "I happen to like it."',
        related: 'Sits beside Ethics as a branch about value: one about the good, the other about the beautiful. It surfaces wherever a thinker asks what art reveals about truth or about being human.',
      },
      {
        term: 'Political philosophy',
        is: 'The "how should we live together?" branch. It asks how power ought to be arranged, what makes a government legitimate, and how to balance freedom, equality, and order.',
        isnt: 'Not day-to-day politics or party platforms, and not opinion polls. It asks what a just society would be, not who is winning this week\'s argument.',
        example: 'Why should anyone obey the government at all? Political philosophy presses exactly that question instead of taking the state for granted, and asks what, if anything, would justify it.',
        related: 'The "Concerning Society" terms are its modern answers: Liberalism, Conservatism, Socialism, and Anarchism. It grows out of Ethics, scaled up from one person to a whole community.',
      },
    ],
  },
  {
    title: 'Concerning Reality',
    intro: 'These ask the oldest question, the one Metaphysics is built around: what is actually out there, underneath everything?',
    entries: [
      {
        term: 'Materialism',
        is: 'The view that everything that exists is physical matter and its activity, including thoughts and feelings, which are what brains do.',
        isnt: 'Not the everyday sense of "loving money and stuff." In philosophy it is a claim about what reality is made of, not about a person being greedy.',
        example: 'Love feels like more than chemistry, but a materialist holds that it is, in the end, electrical and chemical activity in the brain and body.',
        related: 'Close to Naturalism, but narrower: materialism says reality is matter, while naturalism says reality is whatever nature and science describe (which can include forces and fields, not just lumps of stuff).',
      },
      {
        term: 'Idealism',
        is: 'The view that reality is fundamentally mental: minds and ideas are what truly exist, and the physical world depends on being perceived or thought.',
        isnt: 'Not "being an idealist" in the everyday sense of having high hopes or noble goals. It is a claim about what reality is, the opposite of materialism.',
        example: 'A tree falls in an empty forest. An idealist in this strict sense (Berkeley) says the tree only exists as something perceived; with no mind anywhere to perceive it, talk of it existing on its own loses its meaning.',
        related: 'The direct rival of Materialism: matter-first versus mind-first. Do not confuse this metaphysical idealism with the later German Idealist school, which is a related but distinct movement.',
      },
      {
        term: 'Dualism',
        is: 'The view that reality has two basic and different kinds of thing, usually mind and matter, neither one reducible to the other.',
        isnt: 'Not the same as good-versus-evil "dualism" in religion or movies. Here it means mind and body are two separate kinds of stuff.',
        example: 'When you decide to raise your arm and it rises, a dualist sees two things meeting: a non-physical thought and a physical muscle. The hard puzzle is how the immaterial one moves the material one.',
        related: 'Sits between Materialism and Idealism, refusing to pick one: it keeps both mind and matter as real and separate.',
        link: { kind: 'thinker', id: 'descartes' },
      },
      {
        term: 'Monism',
        is: 'The view that, at bottom, there is only one kind of thing, or even one single thing, that everything else is part of or made from.',
        isnt: 'Not the same as Materialism specifically. A monist could say the one stuff is matter, or mind, or something that is neither: the point is just that there is one, not two.',
        example: 'Tap water, ice, and steam look like three things but are one substance in three states. A monist (Spinoza) says all of reality is like that: one underlying thing showing up in countless forms.',
        related: 'The direct opposite of Dualism (one basic kind versus two). Materialism and Idealism are both kinds of monism, since each names a single basic stuff.',
      },
      {
        term: 'Naturalism',
        is: 'The view that everything that happens has a natural cause and can in principle be studied by science, with no supernatural forces stepping in.',
        isnt: 'Not "being natural" or favoring organic food and the outdoors. And not strictly the same as materialism: naturalism allows whatever nature turns out to contain, including energy and physical laws.',
        example: 'A naturalist explains a lightning storm by air pressure and electric charge, not by a god throwing bolts, and expects the same approach to work for the mind and for life itself.',
        related: 'Overlaps heavily with Materialism but is broader. It pairs naturally with Empiricism, since both lean on evidence and observation.',
      },
      {
        term: 'Nihilism',
        is: 'The view that there are no objective values, no built-in meaning, and no real moral facts: nothing matters in any cosmic, given-from-outside way.',
        isnt: 'Not "believing in nothing," not chaos, and not an excuse for destruction. A nihilist still eats lunch and keeps promises; the claim is only that meaning is not handed down by the universe.',
        example: 'Asking "what is the meaning of life?" and concluding the universe supplies no answer at all, that any meaning has to be made by people rather than found, is the nihilist position.',
        related: 'Often confused with Relativism, but they differ: relativism says values are real but vary by culture, while nihilism says objective values are not there in the first place. It is the problem that Existentialism and Absurdism each try to answer.',
        link: { kind: 'thinker', id: 'nietzsche' },
      },
    ],
  },
  {
    title: 'Concerning Knowledge',
    intro: 'These ask how we can know anything at all, and what counts as a good reason to believe something.',
    entries: [
      {
        term: 'Empiricism',
        is: 'The view that knowledge comes from experience: what we see, hear, touch, and measure is the real source of what we know.',
        isnt: 'Not the same as Materialism (a claim about what reality is). Empiricism is a claim about where knowledge comes from, and an empiricist can still doubt plenty.',
        example: 'You cannot reason your way to knowing whether the stove is hot; you have to look, or touch it. An empiricist says all real knowledge ultimately works like that.',
        related: 'The direct rival of Rationalism: empiricism trusts the senses, rationalism trusts reasoning. Locke and Hume are its central figures.',
        link: { kind: 'school', id: 'emp' },
      },
      {
        term: 'Rationalism',
        is: 'The view that reason alone can reach important truths about reality, even truths the senses could never deliver.',
        isnt: 'Not "being rational" or level-headed in everyday life. It is the specific claim that the mind, by thinking carefully, can know things on its own.',
        example: 'You know that 7 plus 5 equals 12 without checking it against the world, and that a triangle has three sides by definition. A rationalist says the deepest truths are grasped that way, by thought rather than by looking.',
        related: 'The direct rival of Empiricism. Where empiricism trusts the senses, rationalism trusts reason. Descartes, Spinoza, and Leibniz are its central figures.',
        link: { kind: 'school', id: 'rat' },
      },
      {
        term: 'Skepticism',
        is: 'The position that we should doubt our claims to knowledge, and withhold confident belief until we have real grounds for it.',
        isnt: 'Not cynicism (assuming people act from bad motives) and not flat denial that anything is true. A skeptic suspends judgment rather than insisting "nothing is real."',
        example: 'You are sure you locked the door, then realize you cannot actually remember doing it today versus yesterday. A skeptic takes that ordinary doubt seriously and asks how much of what we "know" is really that secure.',
        related: 'A natural tool of Empiricism: Hume pushed empiricism so hard it turned skeptical about cause and effect. Different from Relativism, which says truth varies rather than that it is hard to be sure of.',
        link: { kind: 'thinker', id: 'hume' },
      },
      {
        term: 'Pragmatism',
        is: 'The view that the meaning and truth of an idea are tied to how it works in practice: a belief is "true" if it reliably guides action and holds up in experience.',
        isnt: 'Not "being practical" or cutting corners, and not cynicism. It is a real theory of truth, not advice to do whatever is convenient.',
        example: 'Two maps of the same city disagree. A pragmatist judges the better one by which gets you where you are going without dead ends, not by which matches some perfect map no one has.',
        related: 'A close cousin of Empiricism (both lean on experience), but pragmatism measures ideas by their consequences and usefulness rather than just by the senses. An American tradition (Peirce, James, Dewey).',
      },
    ],
  },
  {
    title: 'Concerning Human Existence',
    intro: 'These are less about the universe and more about how to live in it, knowing you will die.',
    entries: [
      {
        term: 'Existentialism',
        is: 'The view that there is no fixed human nature handed to you in advance: you exist first, then make yourself who you are through your choices, and you are responsible for them.',
        isnt: 'Not gloom, black turtlenecks, or "life is pointless." Many existentialists are urgent about freedom and responsibility, not despairing.',
        example: 'You are not "born a coward" or "born brave." An existentialist says you become brave or cowardly one choice at a time, and cannot blame your nature for the result.',
        related: 'Shares its starting point with Absurdism (a meaningless universe), but most existentialists then say you should create your own meaning, where the absurdist refuses even that.',
        link: { kind: 'school', id: 'exist' },
      },
      {
        term: 'Absurdism',
        is: 'The view that humans crave meaning but the universe offers none, and the honest response is to face that clash head-on without pretending it away.',
        isnt: 'Not the same as nihilism or giving up. The absurdist (Camus) says keep living fully anyway, in open-eyed defiance, rather than ending it or escaping into false comfort.',
        example: 'Camus pictures Sisyphus, doomed to roll a boulder uphill forever only to watch it roll back. The absurd answer is not to quit but to own the task and find life worth living inside it.',
        related: 'Grows out of Existentialism but parts ways with it: existentialism says make your own meaning, while absurdism rejects that leap and insists on simply living with the contradiction.',
      },
      {
        term: 'Humanism',
        is: 'The view that human dignity, reason, and flourishing are the center of value, and that people can lead good and meaningful lives by their own lights.',
        isnt: 'Not necessarily atheism. Renaissance humanism was largely religious; "secular humanism" is one branch, not the whole thing. It centers humanity without by itself denying God.',
        example: 'Deciding to study literature, art, and history to become a fuller, wiser person, rather than only for a paycheck or for the afterlife, is a humanist impulse.',
        related: 'Compatible with many other views here (a humanist can be an empiricist, a stoic, or religious). It contrasts with outlooks that put doctrine or the supernatural above human concerns.',
      },
      {
        term: 'Stoicism',
        is: 'The view that a good life comes from virtue and from focusing only on what is in your control, while calmly accepting everything that is not.',
        isnt: 'Not "being stoic" in the everyday sense of suppressing emotion or going cold. Stoics aim to not be ruled by what they cannot control, not to feel nothing.',
        example: 'Your flight is cancelled. A Stoic notes that the airline is not up to them but their reaction is, so they handle the rebooking without letting anger run the rest of the day.',
        related: 'Sits near Existentialism in caring about how to live, but where existentialism stresses radical freedom to make yourself, Stoicism stresses accepting a fixed order and mastering your own responses.',
        link: { kind: 'school', id: 'stoa' },
      },
    ],
  },
  {
    title: 'Concerning Morality',
    intro: 'These ask the same question different ways: what makes an action right or wrong?',
    entries: [
      {
        term: 'Utilitarianism',
        is: 'The view that the right action is the one that produces the most overall well-being, or the greatest happiness for the greatest number.',
        isnt: 'Not "the ends always justify any means" cartoon, and not selfishness: it counts everyone\'s happiness equally, including yours weighed the same as a stranger\'s.',
        example: 'Deciding where to donate by asking which charity relieves the most suffering per dollar, rather than which one feels closest to home, is utilitarian reasoning.',
        related: 'The direct rival of Deontology: utilitarianism judges by results, deontology judges by rules. It is a kind of consequentialism, the family of theories that grade actions by their outcomes.',
        link: { kind: 'school', id: 'util' },
      },
      {
        term: 'Deontology',
        is: 'The view that some actions are right or wrong in themselves because of the duties and rules we are bound by, regardless of how the results turn out.',
        isnt: 'Not the same as following any law you are handed, and not blind rule-worship. The rules are meant to be ones reason itself can justify, like "do not treat people merely as tools."',
        example: 'A deontologist refuses to lie even when a lie would smooth things over, because the duty to tell the truth holds whether or not the lie would "work out."',
        related: 'The direct rival of Utilitarianism: duty versus outcomes. Kant is its central figure, with his rule to act only on principles you could will everyone to follow.',
        link: { kind: 'thinker', id: 'kant' },
      },
      {
        term: 'Virtue Ethics',
        is: 'The view that morality is about becoming a good kind of person, building character traits like courage, honesty, and fairness, rather than ticking off rules or tallying outcomes.',
        isnt: 'Not vague "just be nice." It is a worked-out approach asking what a person of good character would do, and how habits over time shape that character.',
        example: 'Instead of asking "what rule applies?" or "what gets the best result?", you ask "what would an honest, generous person do here?" and try to become that person by practice.',
        related: 'The third main rival to Utilitarianism and Deontology: those judge acts, this builds people. It goes back to Aristotle and his idea of the golden mean (the right amount between two extremes).',
        link: { kind: 'thinker', id: 'aristotle' },
      },
      {
        term: 'Relativism',
        is: 'The view that what is right or true is not fixed for everyone but depends on the culture, time, or person making the judgment.',
        isnt: 'Not the same as Nihilism: relativism says values are real but vary, while nihilism says objective values are not there at all. Also not simple tolerance, which can be argued for on many grounds.',
        example: 'One culture buries its dead, another cremates them, and a relativist says neither is "really" correct: each is right relative to its own customs.',
        related: 'Sits opposite Utilitarianism, Deontology, and Virtue Ethics, which all look for standards that hold across cultures. Often confused with Skepticism, but skepticism doubts whether we can know, while relativism says the answer itself shifts.',
      },
    ],
  },
  {
    title: 'Concerning Society',
    intro: 'These are the modern senses you will meet in politics, about how a society and its government should be arranged.',
    entries: [
      {
        term: 'Liberalism',
        is: 'In its broad modern sense, the tradition that centers individual liberty, equal rights, consent of the governed, and limits on power, usually with elected government and rule of law.',
        isnt: 'Not the same as the narrower American party label "liberal." In the wider sense both major US parties are descendants of liberalism, since both accept rights, elections, and markets.',
        example: 'The idea that you can say what you like, worship as you choose, and vote out leaders you dislike, with those freedoms written into law, is the liberal core.',
        related: 'Contrasts with Conservatism mainly over pace and priority of change. Both differ from Socialism over how much the economy should be privately versus collectively run.',
      },
      {
        term: 'Conservatism',
        is: 'In its broad modern sense, the disposition to value established institutions, tradition, and gradual change, trusting tested ways over sweeping reform.',
        isnt: 'Not a single fixed program, and not the same in every country: what counts as the tradition to conserve differs from place to place and decade to decade.',
        example: 'Faced with a proposal to overhaul a long-standing institution overnight, a conservative instinct is to ask what worked about the old way before replacing it, and to change it carefully.',
        related: 'Defined largely against the reforming impulse of Liberalism and the larger restructuring sought by Socialism. The difference is often about how fast and how far to change, not whether to change at all.',
      },
      {
        term: 'Socialism',
        is: 'The view that the major means of producing wealth (factories, land, large enterprises) should be owned or controlled collectively or by the public, to spread the benefits more evenly.',
        isnt: 'Not a synonym for any government social program, and not the same as communism. Many systems mix private business with public services without being socialist in the full sense.',
        example: 'A country that puts railways, healthcare, and major industry under public ownership so the profits serve everyone, rather than private shareholders, is moving toward socialism.',
        related: 'Stands opposite the private-ownership emphasis shared by Liberalism and Conservatism. It is distinct from Anarchism, which targets the state itself rather than the question of who owns industry.',
      },
      {
        term: 'Anarchism',
        is: 'The view that rulers and the state are unjust or unnecessary, and that society should be organized through voluntary, self-governing cooperation instead of top-down authority.',
        isnt: 'Not chaos, riots, or "no rules." Anarchists oppose imposed authority, not order itself, and most envision communities with their own freely agreed arrangements.',
        example: 'A neighborhood that runs its own affairs by open agreement, with no police or higher officials giving orders, is the kind of self-organization an anarchist points to.',
        related: 'Shares with Socialism a suspicion of concentrated economic power, but anarchism rejects the state as well, whereas socialism often relies on the state to run things.',
      },
    ],
  },
  {
    title: 'Major Historical Schools',
    intro: 'Named after a founder or a method, these are traditions you meet by name throughout the history.',
    entries: [
      {
        term: 'Platonism',
        is: 'The tradition following Plato, holding that the truly real things are perfect, eternal Forms (like Beauty or Justice itself), and the changing world we see is only their shadow.',
        isnt: 'Not "platonic" in the dating sense of a non-romantic friendship. That everyday word comes from Plato by a long detour and is unrelated to the Forms.',
        example: 'Every circle you draw is a little off, yet you grasp "circle" perfectly in thought. A Platonist says that perfect circle is more real than any drawn one, existing as a Form.',
        related: 'The great rival of Aristotelianism: Plato puts the real elsewhere, in the Forms, while his student Aristotle puts it here in the world. Augustine later fused Platonism with Christianity.',
        link: { kind: 'school', id: 'plat' },
      },
      {
        term: 'Aristotelianism',
        is: 'The tradition following Aristotle, holding that reality is the world in front of us, known by observing things, sorting them into kinds, and finding the purpose built into each.',
        isnt: 'Not pure science-by-experiment in the modern lab sense, and not Platonism: Aristotle keeps the real here in ordinary things rather than in a separate realm of Forms.',
        example: 'To understand an acorn, an Aristotelian studies acorns and sees that becoming an oak is the goal built into it, rather than looking to a perfect "acorn Form" elsewhere.',
        related: 'The counterweight to Platonism (world-first versus Forms-first). It was carried through the Islamic world by Avicenna and Averroes and fused with Christianity by Aquinas.',
        link: { kind: 'school', id: 'arist' },
      },
      {
        term: 'Scholasticism',
        is: 'The medieval method of teaching and argument that tried to reconcile faith with reason (especially Christian doctrine with Aristotle) through rigorous, highly organized debate.',
        isnt: 'Not a single doctrine about reality, but a way of doing philosophy: posing a question, raising objections, and answering them step by step. Not anti-reason; it prized careful logic.',
        example: 'A scholastic text states a question ("Does God exist?"), lists the strongest objections, then methodically answers each, the way Aquinas lays out his Five Ways.',
        related: 'Built largely on Aristotelianism applied to Christian theology. The opposite caricature, dry hair-splitting, is where the put-down "scholastic" comes from, but the method itself was demanding.',
        link: { kind: 'school', id: 'schol' },
      },
      {
        term: 'Cartesianism',
        is: 'The philosophy of Descartes and his followers: start by doubting everything, rebuild knowledge on what cannot be doubted ("I think, therefore I am"), and treat mind and body as two separate substances.',
        isnt: 'Not the same as the Cartesian coordinate grid from math class, though both come from Descartes. Here it names his method of doubt and his mind-body dualism.',
        example: 'Wondering whether your whole life could be a dream, then noticing that the very doubting proves a thinker is there, is the Cartesian starting move.',
        related: 'A founding form of Rationalism (reason rebuilds knowledge) and the most famous version of Dualism (mind and matter as two kinds of thing).',
        link: { kind: 'thinker', id: 'descartes' },
      },
      {
        term: 'Kantianism',
        is: 'The philosophy of Kant: the mind is not a passive screen but actively shapes experience, so we know the world as it appears to us, and we should act only on rules we could will everyone to follow.',
        isnt: 'Not pure rationalism or pure empiricism, but Kant\'s attempt to combine them: the senses supply the raw material, the mind supplies the structure.',
        example: 'You never meet "time" or "cause" out in the world the way you meet a chair, yet you cannot experience anything without them. Kant says the mind brings those frames to every experience.',
        related: 'Tries to settle the fight between Rationalism and Empiricism. In ethics it is the leading form of Deontology, judging acts by duty rather than results.',
        link: { kind: 'thinker', id: 'kant' },
      },
      {
        term: 'Phenomenology',
        is: 'The approach (founded by Husserl) of describing experience exactly as it presents itself to consciousness, setting aside assumptions about whether the outside world is "really" there.',
        isnt: 'Not paranormal "phenomena" or ghost-hunting. And not a theory of what reality is made of: it studies how things show up in experience, not what they are behind the scenes.',
        example: 'Instead of asking whether the coffee cup exists independently, a phenomenologist carefully describes how the cup appears to you: its warmth, its weight, the side you cannot see but expect.',
        related: 'A major root of Existentialism (Sartre and Heidegger came through it). It heads the Continental tradition, in contrast with the puzzle-and-logic style of Analytic Philosophy.',
      },
      {
        term: 'Analytic Philosophy',
        is: 'A broad modern style, dominant in the English-speaking world, that prizes clear arguments, precise language, and close work on logic, science, and the meaning of words.',
        isnt: 'Not a single doctrine or set of conclusions: it is a way of working. Not the rival "team" of Continental philosophy in any hostile sense, just a different emphasis.',
        example: 'An analytic philosopher faced with "free will" first pins down exactly what "free" means in the sentence, then tests each step of the argument for hidden slips.',
        related: 'Usually paired against Continental Philosophy as the two broad streams of 20th-century thought: analytic leans on logic and clarity, continental on history, culture, and lived experience. The split is one of style and focus, not strict doctrine.',
      },
      {
        term: 'Continental Philosophy',
        is: 'A broad modern style, rooted in mainland Europe, more concerned with history, culture, language, power, and lived human experience than with formal logic.',
        isnt: 'Not a single school or doctrine, and not "the opposite of being clear." It gathers very different movements (phenomenology, existentialism, critical theory, post-structuralism) under one loose umbrella.',
        example: 'Asked about "freedom," a continental thinker is likely to dig into how the very idea of freedom grew out of particular histories and power structures, rather than defining the word in the abstract.',
        related: 'The usual counterpart to Analytic Philosophy. Both are streams, not creeds: continental favors history and interpretation, analytic favors logic and precision.',
      },
    ],
  },
  {
    title: "20th-Century Terms You'll See Often",
    intro: 'A quick-scan list of the labels that turn up most in modern writing. Two repeat from earlier groups and are kept short here.',
    entries: [
      {
        term: 'Phenomenology',
        is: 'Describing experience exactly as it appears to consciousness, before adding theories about what lies behind it. (See Concerning Reality / Major Schools for the fuller entry.)',
        isnt: 'Not the study of spooky "phenomena," and not a claim about what stuff reality is made of.',
        example: 'Carefully describing the felt experience of fear (the tight chest, the narrowed attention) rather than explaining fear as brain chemistry.',
        related: 'The seedbed of Existentialism and the head of the Continental tradition.',
      },
      {
        term: 'Existentialism',
        is: 'You have no fixed nature handed to you; you make yourself through choices and own the result. (See Concerning Human Existence for the fuller entry.)',
        isnt: 'Not just gloom or "life is meaningless"; it is mostly about freedom and responsibility.',
        example: 'Refusing to say "that is just who I am" and instead treating your character as something your choices are still building.',
        related: 'Grew out of Phenomenology; closely tied to, but distinct from, Absurdism.',
        link: { kind: 'school', id: 'exist' },
      },
      {
        term: 'Structuralism',
        is: 'The approach that explains human culture (language, myths, kinship, fashion) by the hidden systems of rules and contrasts underneath it, rather than by individual intentions.',
        isnt: 'Not about buildings or engineering "structures." And not focused on the lone author or speaker: it looks at the shared system that makes any single act meaningful.',
        example: 'A word like "hot" means something only by contrast with "cold." Structuralism says all meaning works that way, through a network of differences, and studies the network rather than the speaker.',
        related: 'The thing Post-structuralism reacts against: structuralism trusts that stable underlying systems can be mapped, where post-structuralism doubts they hold still.',
      },
      {
        term: 'Post-structuralism',
        is: 'The reaction against structuralism, arguing that the underlying systems are never stable or fixed: meaning keeps shifting, and clean structures leak, contradict, and break down.',
        isnt: 'Not simply "after structuralism" in time only, and not the claim that nothing means anything. It says meaning is unstable and tangled up with power, not absent.',
        example: 'Take a single word like "freedom": post-structuralism shows it slides into different, even opposed, meanings depending on who uses it and against whom, so no neat structure pins it down.',
        related: 'Defined against Structuralism (unstable meaning versus mappable systems). It overlaps heavily with Deconstruction and feeds into Postmodernism.',
      },
      {
        term: 'Postmodernism',
        is: 'A broad mood across philosophy and the arts that distrusts grand, all-explaining stories (about progress, reason, or history) and stresses that knowledge is partial, plural, and shaped by power.',
        isnt: 'Not just a style of architecture or art, and not the simple claim that "there is no truth." It is skepticism toward sweeping master-narratives, not a tidy doctrine of its own.',
        example: 'Doubting any single story that claims to explain all of history (whether "humanity marches ever upward" or one fixed account of how the world works) and asking whose interests that story serves.',
        related: 'Grows out of Post-structuralism. Stands opposed to the confidence of Enlightenment liberalism in universal reason and progress.',
      },
      {
        term: 'Hermeneutics',
        is: 'The theory and art of interpretation: how we understand texts, actions, and meaning, always from within our own background and assumptions.',
        isnt: 'Not a religious sect, and not only about scripture, though it began with interpreting sacred texts. It now covers interpreting anything meaningful, including history and conversation.',
        example: 'Reading an old letter, you cannot help filling gaps with what you already expect; understanding it means moving back and forth between the parts and the whole until it makes sense.',
        related: 'A Continental concern, close to Phenomenology in taking lived understanding seriously. It treats interpretation as unavoidable, where Analytic Philosophy more often seeks a single precise meaning.',
      },
      {
        term: 'Critical Theory',
        is: 'An approach (from the Frankfurt School) that studies society in order to expose and change the hidden ways power, economics, and culture keep people unfree.',
        isnt: 'Not just "thinking critically" in the everyday sense, and not a single political program. It is a specific tradition aimed at diagnosing domination, not neutral description for its own sake.',
        example: 'Asking not just "is this advertisement effective?" but "how does mass advertising shape what people want, and whose power does that serve?" is a critical-theory move.',
        related: 'Part of the Continental stream and influenced by socialism\'s critique of economic power. It differs from plain social science by aiming at liberation, not only at explanation.',
      },
      {
        term: 'Deconstruction',
        is: 'A method (associated with Derrida) of reading a text closely to show how it undercuts itself: the very terms it relies on turn out to be unstable and to hide buried assumptions.',
        isnt: 'Not "tearing something down" or destroying it, despite the name. It is careful reading that exposes tensions already inside the text, not demolition.',
        example: 'A text praises "speech" as natural and live while treating "writing" as a lifeless copy, yet has to use writing to make its case. Deconstruction draws out that the text quietly depends on what it dismisses.',
        related: 'A specific practice within Post-structuralism and a key tool of Postmodernism. Like Hermeneutics it is about reading, but its aim is to surface contradictions rather than to settle on a meaning.',
      },
    ],
  },
]
