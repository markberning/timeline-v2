// DRAFT (Opus author, gated pipeline step 2) — William of Ockham philosophy thinker read.
// Structurally identical to src/app/philosophy/thinker/_reads/aquinas.ts (the template). Drops
// straight into the provisional reader. Every factual claim + quotation is mapped to its entry in
// audits/philosophy-pipeline/ockham-thinker-fact-ledger.md and the verified era-2 fact pack
// (audits/philosophy-pipeline/faith-reason-fact-pack.md §3 Ch7, §4, §image table). Authored ONLY
// from those; nothing from memory. Goes DEEPER than the era read at src/app/philosophy/faith-reason/
// (Ch7) — never restates it. Latin razor/nominalism forms are quoted (PD, short); his POSITIONS are
// paraphrased without quotation marks (no clean PD English of his prose). The famous slogan "entities
// must not be multiplied" is flagged as a LATER formula, not his sentence. eyebrow = "Scholastics".

import type { PhiNarr } from '@/components/philosophy-reader'

export const OCKHAM: PhiNarr = {
  "title": "Ockham",
  "throughline": "He took the most rigorous tool reason had built, a principle of economy, and turned it on the cathedral that the schools had spent a thousand years raising. Where his predecessors saw a world thick with real shared natures and necessary connections that the mind could read off by pure thought, Ockham saw a universe of bare individuals, held together by nothing but the free choice of an all-powerful God who could have made it all otherwise. Trim every explanation to the fewest things that do the work, he argued, and most of the metaphysical furniture vanishes. What is left is a world reason can no longer deduce, only observe, and a faith that no longer needs reason's permission to be true.",
  "hero": {
    "fig": "https://upload.wikimedia.org/wikipedia/commons/d/dd/William_of_Occam_-_Sketch_-_Frater_Occham_iste%2C_1341.jpg",
    "cap": "Sketch labelled *frater Occham iste* (\"this is Brother Ockham\"), from a 1341 manuscript of Ockham's *Summa Logicae*. Drawn during or just after his lifetime, it is the closest thing to a contemporary likeness; whether it records his actual face or is the scribe's idea of the author is unknown.",
    "alt": "Small ink drawing in the margin of a medieval manuscript showing a tonsured friar, captioned in Latin"
  },
  "hook": [
    "There is a tool everyone has used and almost nobody can name correctly. When two explanations both account for the facts, prefer the simpler one. Do not invent extra causes, extra forces, extra entities, when the few already at hand will do the job. It is called *Ockham's razor*, after a 14th-century English friar, and it is one of the most useful ideas ever handed to science.",
    "Almost everything in that sentence is slightly off. The famous wording, \"entities must not be multiplied beyond necessity,\" appears nowhere in anything William of Ockham wrote. The principle was old before he was born, and a sharper logician than Ockham, Duns Scotus, had already worked out the formulas a generation earlier. The slogan in its tidy Latin dress first surfaces in 1639, nearly three hundred years after Ockham died, in a book by an Irish editor who called it a *common* scholastic saying, not Ockham's invention. The razor bears his name roughly the way America bears Amerigo Vespucci's: by a later accident of labeling.",
    "What Ockham actually did with the principle is far more radical than trimming a few stray hypotheses. He pointed it at the deepest assumptions of medieval metaphysics and started cutting. The shared natures that thinkers from Plato to Aquinas had believed in, the real \"humanity\" that every human supposedly partook of, the real \"redness\" running through every red thing: gone, shaved away as unnecessary. The necessary connections reason claimed to find in the world, this cause always producing that effect: loosened, because an all-powerful God could have wired things any way he pleased. By the time the razor had done its work, the confident cathedral of reason-and-faith that Thomas Aquinas had finished only decades before was visibly cracking.",
    "He was a friar who never finished his degree, ended his life excommunicated and on the run, and spent his last twenty years writing pamphlets against a pope he had declared a heretic. The schools nicknamed him the Venerable Beginner, for the doctorate he started and never completed. The name turned out to fit in a larger sense than they meant. He began something. The medieval synthesis ends with him, and the modern habit of mind, trust what can be observed, distrust what cannot, multiply nothing without need, starts to come into focus on the far side."
  ],
  "brk": {
    "beforeLabel": "Reason reads real shared natures and necessary connections off the world",
    "afterLabel": "Only individuals exist; the rest is names, and the world's order is God's free choice",
    "paragraphs": [
      "The world Ockham inherited was, metaphysically, a crowded place. The dominant view, *realism*, held that universals are real. A universal is whatever more than one thing can share: \"humanity\" is shared by every human, \"redness\" by every red apple and red coat, \"triangularity\" by every triangle. For the realist these are not just words. They are genuine features of reality, really present in each individual that has them, and the mind grasps them when it understands what a thing *is*. This is the machinery under the whole great synthesis of [Aquinas](/philosophy/thinker/aquinas) (era 2, chapter 6): the world comes carved into real natures, reason can read those natures off it, and from them it can climb, by necessary steps, all the way to conclusions about God. The order in things is really there, and really intelligible, because God built it in.",
      "The realist case deserves its strongest form, because it is not naive. Consider why \"this is a cat\" is *true* and \"this is a cat\" said of a rock is *false*. The realist's answer is clean: there is something, felinity, that the cat genuinely has and the rock genuinely lacks, and the word \"cat\" is true of a thing exactly when that thing has that nature. Science seems to need this too. The chemist studies not this sample of gold and that one, but *gold*, what all samples share; the law she discovers holds for every instance because every instance has the same real nature. Strip out the shared natures and it gets hard to say why words apply to some things and not others, or why knowledge of one specimen reveals anything about the next. Realism is the natural philosophy of a mind that trusts the world to come pre-sorted into kinds.",
      "Ockham's break is to deny that the kinds are out there at all. The razor's logic: if individual cats, plus the mind's ability to notice they resemble one another and file them under a single name, already explain everything observed, then a further entity, felinity, floating in the world or in the divine mind and somehow present in each cat, is a wheel that turns nothing. So cut it. There is no \"humanity\"; there are only individual humans. There is no \"redness\"; there are only red things. Generality is something the mind *does*, not something it *finds*. This is *nominalism* (from the Latin *nomen*, \"name\"): universals are names, or more precisely concepts, signs the mind uses to group resembling individuals, never real items in the world. And it pairs with a second, theological move that pulls the floor out from under reason's confidence. The connections realism saw as necessary, fire necessarily heating, this cause necessarily yielding that effect, are for Ockham not necessary at all. God is absolutely free and could have made the world otherwise, could have made fire cool and ice burn. So the order reason finds is real, but contingent: it is how God *chose*, not how things *had* to be. The consequence is the whole break in one line. Reason can no longer deduce how the world must be from pure thought. It can only watch how the world happens to be."
    ]
  },
  "chapters": [
    {
      "num": 1,
      "title": "The Venerable Beginner",
      "epigraph": {
        "text": "\"Pluralitas non est ponenda sine necessitate.\" (\"Plurality is not to be posited without necessity.\")",
        "attribution": "— William of Ockham, Commentary on the Sentences I, dist. 1, as collected by W. M. Thorburn (1918)"
      },
      "blocks": [
        {
          "p": "He was born around 1287, almost certainly in the English village of Ockham, in Surrey, that gave him his name. The date is a reconstruction, not a record: no one wrote down the birth of a younger son in a small place, so scholars work backward from the documented events of his later career and land on late 1287 or early 1288. He entered the Franciscans, the order founded by Francis of Assisi a lifetime earlier, whose friars took a strict vow of poverty and owned nothing, not as individuals and, in the strong version Ockham would later fight for, not even in common. That vow, abstract as it sounds, would one day cost him his freedom."
        },
        {
          "p": "He went up to Oxford around 1317 to do what every aspiring theologian did: lecture his way through the *Sentences* of Peter Lombard, the standard 12th-century textbook that every medieval student commented on to earn his standing (era 2, chapter 5). Ockham gave the lectures. He was, by every account, formidably sharp, the most penetrating logician of his generation. And then he did not finish. The remaining formal steps to the doctorate, the ones that would have made him a full master with a chair, he never completed, probably because his ideas had already drawn official suspicion and the path was blocked. The result is the wry nickname the schools hung on him: *Venerabilis Inceptor*, the \"Venerable Beginner.\" An *inceptor* was a man who had begun the doctoral process but not yet finished it. The title was a polite way of noting that the sharpest mind in Oxford had no degree."
        },
        {
          "p": "The shape of that career, brilliant, blocked, unfinished, fits the man. Ockham was a beginner in the larger sense too: where Aquinas had built a finished cathedral, a vast system that aimed to settle the relation of faith and reason once and for all, Ockham was the one who started pulling stones out to see whether they were load-bearing. He arrives at the close of the thousand-year experiment in holding faith and reason together (era 2, chapter 7). The demolition goes tool by tool, one cut at a time."
        }
      ]
    },
    {
      "num": 2,
      "title": "Only individuals exist",
      "epigraph": {
        "text": "\"Sufficiunt singularia, et ita tales res universales omnino frustra ponuntur.\" (\"Singulars suffice, and so such universal things are posited entirely in vain.\")",
        "attribution": "— William of Ockham, Commentary on the Sentences I, dist. 2, q. 4, as collected by W. M. Thorburn (1918)"
      },
      "blocks": [
        {
          "p": "Ockham's whole system grows out of his answer to the oldest fight in the discipline, the problem of universals (era 2, chapter 5). The question is deceptively small. A red apple and a red coat are both red. Is there one *thing*, redness, that they both have, a single feature really present in each? Or are there only two individual colored objects, with \"red\" a word the mind throws over both because they look alike? Plato's answer was that redness is a real, perfect, eternal Form, more real than the apple (era 1, Plato thinker). Aristotle pulled the universal down into the things themselves but kept it real, a nature genuinely present in each individual. Aquinas inherited that realist line: the world comes carved into real natures, and the intellect knows a thing by grasping the universal nature in it."
        },
        {
          "p": "Ockham's answer is the most thoroughgoing nominalism in the medieval tradition, and the word names the heart of it. From the Latin *nomen*, \"name,\" nominalism holds that universals are not things but names, concepts the mind forms, never entities in the world. His claim, stated as flatly as anyone ever stated it, is that everything existing in the created universe is a single individual substance or a single individual quality. There is no shared \"humanity\" out there that every human partakes of, and there is none tucked inside each human either. There are only individual humans, this one and that one, each complete in itself. What the realist calls a universal nature, Ockham calls a concept: the mind notices that these individuals resemble one another, forms a single sign that stands for all of them, and labels it \"human.\" The generality is a feature of the *sign*, not of the world. Reality is a heap of particulars; the universal is the mind's filing system, not a fact about what is filed."
        },
        {
          "p": "The strongest version of nominalism has real pull and survives the objection. Search for the universal and it never turns up. A herd of horses shows brown ones and grey ones, tall and short, fast and slow, no two identical, and no extra item called \"horseness\" standing among them. Every horse there is a particular horse. The shared nature is precisely the thing experience never delivers; what experience delivers is always one more individual. So why insist on an entity nobody can observe, doing work that resemblance plus a concept already do? That is the razor's move, applied to the universals fight: singulars suffice, Ockham wrote, and so such universal things are posited entirely in vain. A whole stratum of reality the realists were certain of, the layer of shared natures, simply falls away as unnecessary."
        },
        {
          "p": "The realist's objection is sharp and Ockham has to answer it. If there is no real shared nature, what makes \"this is a horse\" *true* of a horse and *false* of a cow? The realist had a clean answer: the word is true of a thing when that thing has the nature the word names. Knock out the nature and truth seems to lose its anchor; \"horse\" looks like an arbitrary label slapped on whatever the mind decides to lump together. Ockham's reply is that the anchor is resemblance among the individuals themselves, which is real even though no third thing called \"horseness\" is. Individual horses are genuinely more like one another than any of them is like a cow, and the concept \"horse\" is the natural sign the mind forms in response to that real likeness. Truth is preserved without the extra entity: \"this is a horse\" is true because *this individual* really does resemble the others the concept covers, not because it shares some floating nature with them. The likeness is in the things; the universal is in the mind; and nothing whatever is gained by adding a universal to the world."
        }
      ]
    },
    {
      "num": 3,
      "title": "The razor he did not write",
      "epigraph": {
        "text": "\"Frustra fit per plura quod potest fieri per pauciora.\" (\"It is futile to do with more what can be done with fewer.\")",
        "attribution": "— William of Ockham, Summa Totius Logicae I, ch. 12, as collected by W. M. Thorburn (1918)"
      },
      "blocks": [
        {
          "p": "The version everyone learns, \"entities must not be multiplied beyond necessity,\" in Latin *entia non sunt multiplicanda praeter necessitatem*, is a fine summary of a real idea. It is also not a sentence Ockham ever wrote. The Stanford Encyclopedia of Philosophy puts it plainly: that particular formulation is nowhere to be found in his texts. The famous Latin wording surfaces for the first time in 1639, almost three centuries after Ockham's death, in an edition prepared by an Irish scholar named John Punch (Ponce of Cork), who introduces it as a *common* scholastic axiom, the kind of thing everybody said, not a coinage of Ockham's. The slogan, in other words, is a later tidy-up that got pinned to the most famous name in the neighborhood."
        },
        {
          "p": "What Ockham actually wrote, repeatedly, across his logical and theological works, were lines like the chapter's epigraph and its cousins: plurality is not to be posited without necessity; it is futile to do with more what can be done with fewer. Same principle, different and looser words, scattered through the books rather than stamped as a single maxim. And the principle was not even his to begin with. Duns Scotus (around 1266 to 1308), the Franciscan logician of the generation just before Ockham, nicknamed the Subtle Doctor for the fineness of his distinctions, had already worked out and systematically used the parsimony formulas. Earlier still, the principle shows up as an *objection* inside Aquinas's own *Summa*, where Aquinas raises economy as an argument against God's existence before answering it (Aquinas thinker, chapter 3). The razor, then, is genuinely medieval, genuinely useful, and genuinely shared property of the schools. The one thing it is not is Ockham's private invention. It bears his name the way America bears Amerigo Vespucci's, by a later accident of labeling that stuck."
        },
        {
          "p": "In Ockham's hands the principle is not a tip about tidy explanations but a weapon against whole categories of being. The realist posits a shared nature, \"humanity,\" present in every human. Ockham asks what that posit *buys*. If individual humans, plus the mind's power to group them by resemblance, already account for every fact, then the nature explains nothing the individuals and the concept did not already explain. It is an entity multiplied beyond necessity. So it goes. The razor, turned on metaphysics, becomes a way of asking of every grand posited entity, real universals, certain unseen distinctions in things, what observable work does this actually do? and discarding whatever fails the test. This is the move that makes Ockham feel oddly modern: the demand that an explanation earn its entities, that nothing be admitted into the account of the world unless something we can actually check requires it."
        },
        {
          "p": "There is one critical limit, and missing it produces the worst caricature of Ockham there is. The razor governs *explanations*; it never shaves away God. Ockham was a Franciscan theologian, not a proto-atheist sharpening a blade against heaven, and he was explicit that the principle has exceptions: one may, indeed must, posit more than the bare minimum when reason, or experience, or the infallible authority of Scripture requires it. Parsimony disciplines what human beings infer about the world from evidence. It does not constrain what an all-powerful God may freely choose to create. So the razor cuts away surplus *metaphysics*, not surplus *divinity*. The popular picture of Ockham as the medieval rationalist using logic to thin out religion gets him exactly backwards. The thinning-out of religion's claims on reason comes from the opposite direction: from making God so free that reason cannot keep up."
        }
      ]
    },
    {
      "num": 4,
      "title": "A God too free",
      "epigraph": {
        "text": "The will is able knowingly to act directly against its ultimate good.",
        "attribution": "— Ockham's position on the freedom of the will, as summarized by the Stanford Encyclopedia of Philosophy"
      },
      "blocks": [
        {
          "p": "Under the nominalism and the razor runs one conviction that drives the whole system: the absolute freedom of God. For Ockham, God is bound by nothing except the law of non-contradiction; he cannot make a square circle, because that is not a thing to do but a phrase that cancels itself, but short of outright contradiction he could have made anything, any way at all. He could have created a wholly different world. He could have attached the feeling of warmth to ice and cold to fire. He could, Ockham was prepared to say, have made different acts good and evil, so that what is now a sin would have been a duty. Nothing outside God's own will constrains God's will. This is voluntarism (from the Latin *voluntas*, \"will\"): the view that will, not reason, is the deepest thing in God and in us, so that things are good because God wills them, rather than God willing them because they are independently good."
        },
        {
          "p": "Theologians captured this with a pair of precise terms. God's *absolute power* (*potentia absoluta*) is everything God could possibly do, the whole range of the non-contradictory. God's *ordained power* (*potentia ordinata*) is the order he actually, freely chose to set up, the world as it in fact runs. The point of the distinction is that the second is a free selection from the first. The laws of nature, the moral order, the channels of grace, all of it is real, but none of it was forced. God picked this arrangement out of countless arrangements he could equally have picked, and could in principle override at any moment, since his absolute power is never used up by his ordained choices."
        },
        {
          "p": "The human will gets the same radical freedom, scaled down. Where Aquinas had held that the will follows the intellect, that a person wills what reason presents as good, so understanding leads and choice obeys, Ockham (following Scotus) makes the will free to choose against reason's verdict. The will, on his account, can knowingly act directly against what it sees to be its own ultimate good. A person can look straight at the better course and choose the worse, not from ignorance but from sheer freedom of will. This is a real wedge between Ockham and the older synthesis. For the intellectualist tradition running back through Aquinas to Aristotle, no one knowingly chooses evil as evil; wrongdoing is always at bottom a mistake about what is good. For Ockham, the will is free enough to do exactly that. Choice runs out ahead of understanding, in God and in the human heart alike."
        },
        {
          "p": "The consequence for *knowledge* is the hinge of the whole story. If God could have made the world any way he liked, and freely chose this one, then the connections built into the world, fire heating, water flowing downhill, this cause yielding that effect, are not *necessary*. They are contingent, simply how God happened to arrange things, and he could arrange them otherwise. But if no connection in the world is necessary, then reason cannot deduce how the world *must* be by sitting still and thinking hard. There is nothing to deduce; the world did not have to be this way. Reason can only go and *look*, and report how the world in fact behaves. The realist's confidence, that the mind could read the necessary structure of reality off the natures of things, dissolves once the structure is admitted to be a free divine choice. Ockham does not announce this as a program to limit reason. It falls out, quietly and inevitably, from taking God's freedom seriously."
        }
      ]
    },
    {
      "num": 5,
      "title": "The wedge between faith and reason",
      "epigraph": {
        "text": "\"Grace does not destroy nature but perfects it.\"",
        "attribution": "— Thomas Aquinas, Summa Theologiae I, q. 1, a. 8, the synthesis Ockham's God strains, trans. Fathers of the English Dominican Province"
      },
      "blocks": [
        {
          "p": "To measure what Ockham unsettled, set his world beside the one Aquinas had finished only decades earlier (era 2, chapter 6; Aquinas thinker). Aquinas's whole achievement was a peace treaty between faith and reason. There is one truth, he held, reached by two non-competing routes: unaided reason climbs as far as the *preambles of faith* (that God exists, that God is one), demonstrating them by argument, and revelation supplies the *mysteries* (the Trinity, the Incarnation) that lie above reason's reach but never against it. \"Grace does not destroy nature but perfects it.\" Faith completes what reason found; the two could never finally collide, because both come from the one God who authors both. The Five Ways are the high-water mark of that confidence: reason, on its own, marching all the way to the existence of God."
        },
        {
          "p": "Ockham's commitments narrow that confident reach from two directions at once, and neither cut is an attack on faith. The first cut is the contingency just established. If the world's order is God's free choice rather than a necessary structure, then reason's grand demonstrations, which work by tracing necessary connections from creatures up to God, lose their footing. Where Aquinas could argue from the necessary features of motion or causation to a first mover or first cause, Ockham's world offers no *necessary* features to argue from, only contingent arrangements God could have made differently. The second cut comes from nominalism: with no real shared natures linking creatures to their creator, the bridges that earlier natural theology walked across are not there to walk. Ockham does not say the existence of God cannot be approached by reason at all, but he holds the demonstrations far more loosely than Aquinas did, and the great rational ascent to God shrinks toward something probable, or merely persuasive, rather than proven."
        },
        {
          "p": "The result is a sharper division of labor than the synthesis wanted, and it is the move with the longest future. Truths about God as a Trinity, as incarnate, as freely choosing this world, are matters of faith, held on the authority of revelation, not conclusions reason can establish or even securely defend. Reason keeps its own territory, logic, the analysis of language, the study of what can actually be observed, and gets sharper there precisely because it has stopped overreaching into what only faith can hold. This is not Ockham wounding religion; if anything it *protects* faith, by freeing it from depending on philosophical proofs that might fail. But it does end the marriage on Aquinas's terms. Faith and reason are no longer two routes climbing one wall together. They are two enterprises, each sound in its own domain, no longer guaranteed to meet at the top."
        },
        {
          "p": "Two long shadows fall forward from here, both tendencies rather than things Ockham planned. A faith held on revelation's authority rather than on reason's proofs, with Scripture rising as the load-bearing source, is closer in spirit to what the Protestant Reformers would press two centuries later, and Luther in fact trained in a university culture steeped in Ockham's *via moderna*, \"the modern way,\" the school of thought that spread from Ockham through the late-medieval universities. And a reason restricted to what observation can actually catch, forbidden to multiply unseen entities, is recognizably the temper of the empirical science that would come. Neither the Reformation nor modern science *is* Ockham, and he intended neither; both have many other parents. But the habits of mind, trust the evidence, distrust the unobservable posit, keep faith and demonstrable knowledge in separate accounts, are running, in 14th-century dress, in his work."
        }
      ]
    },
    {
      "num": 6,
      "title": "The pen and the sword",
      "epigraph": {
        "text": "\"Defend me with the sword, and I will defend you with the pen.\"",
        "attribution": "— a line the tradition puts in Ockham's mouth to Ludwig of Bavaria; a later legend, with no contemporary source, not Ockham's documented words"
      },
      "blocks": [
        {
          "p": "The logician's life ended in a political brawl, and it began with the vow of poverty he had taken as a young friar. By the 1320s the Franciscans were locked in a bitter quarrel with the papacy over a question that sounds abstract and was anything but: had Christ and the apostles owned property? The strict Franciscans said no, that Christ and his apostles had held nothing, as individuals or in common, and that the order's vow of total poverty therefore imitated Christ himself. Pope John XXII, ruling not from Rome but from Avignon in southern France, where the popes were then living, a dislocation that signaled how unsettled the Church's own house had become, declared that doctrine false, and in a series of pronouncements insisted that Christ and the apostles had indeed owned things. To the rigorist Franciscans this was the pope contradicting the gospel."
        },
        {
          "p": "Ockham was already at Avignon, summoned there in May 1324 to answer charges of heresy over opinions drawn from his Oxford lectures; the proceedings dragged on, and his views were never in the end officially condemned. While he waited, the head of his order, Michael of Cesena, asked him to study the pope's pronouncements on poverty. Ockham read them closely and reached a conclusion that left no room for compromise: John XXII was not merely teaching error, he was himself a heretic, because he had defined doctrine against the faith and clung to it after being shown he was wrong. For a friar to brand the reigning pope a heretic was not a debating point. It was a declaration of war."
        },
        {
          "fig": "https://upload.wikimedia.org/wikipedia/commons/1/10/Jean_XXII_1316.JPG",
          "cap": "Pope John XXII (Jacques Duèze, reigned 1316–1334), in a 14th-century portrait from the Palais du Roure, Avignon. The longest-reigning of the Avignon popes, he drove the Franciscan poverty dispute that turned Ockham from a logician into a political fugitive; Ockham concluded John was himself a heretic.",
          "alt": "Medieval portrait of a pope in white and gold vestments and the papal tiara, against a plain ground",
          "portrait": true
        },
        {
          "p": "On 26 May 1328 Ockham fled Avignon by night, together with Michael of Cesena and a few companions. They made their way to the protection of Ludwig of Bavaria, the Holy Roman Emperor, who was himself at war with the papacy over who had the authority to make an emperor. The bargain between fugitive friar and excommunicate emperor was natural: each was the pope's enemy, and each had what the other lacked. The tradition records Ockham offering the emperor a line: defend me with the sword, and the pen will defend the emperor in return. There is no contemporary source for the words, and they read like a later flourish, but the arrangement they describe was exactly real. Eleven days after the flight, on 6 June 1328, the Church excommunicated Ockham for leaving Avignon without permission."
        },
        {
          "p": "He took the protection and kept the bargain. From Munich, where he settled at the imperial court, Ockham spent the last two decades of his life almost entirely on political and church-political treatises, arguing the limits of papal power, the rights of the emperor, the proper bounds of authority in the Church. The most penetrating logician of the age, the man who had reshaped the problem of universals, ended as a pamphleteer in exile, his pen turned wholly to the fight he had walked into over a friar's vow of poverty. The unity of faith and reason he had philosophically pulled apart was now, in his own life, an open war between the spiritual and worldly powers that the medieval order had been built to hold together."
        },
        {
          "p": "He died in Munich on the night of 9 and 10 April 1347, around sixty years old, still excommunicate, the formal quarrel with the Church never resolved. (The widely repeated account that he died of the Black Death in 1349 is simply wrong; he was dead before the plague reached Munich.) Within two years the Black Death would erase a third of Europe, and the medieval world Ockham had spent his life arguing inside would never quite recover its confidence. His way of thinking outlived him under the name *via moderna* and spread through the universities. And the thousand-year project of holding a book and an argument in one hand, the project Augustine began and Aquinas brought to its height (era 2, chapters 1 and 6), reached, with the Venerable Beginner, something like its end. He had taken the sharpest tool the schools ever made and used it to show that faith did not need reason's proofs and reason could not reach faith's truths. The two could be set down, each in its own hand, and held apart. Three centuries later a Frenchman shut in a warm room would pick up the question Ockham had left exposed, what can reason establish entirely on its own?, and try to answer it from nothing but his own doubting mind, and the modern story would begin."
        }
      ]
    }
  ]
}
