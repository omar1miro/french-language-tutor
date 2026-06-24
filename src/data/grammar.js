export const GRAMMAR_EXERCISES = [
  // ── BEGINNER ──
  {
    id: 1,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Fill in the blank with the correct article (le, la, l\', les).',
    sentence: '___ estudiant est en classe.',
    answer: "L'",
    options: ['Le', 'La', "L'", 'Les'],
    explanation: "L' is used before words starting with a vowel or silent h. 'Étudiant' starts with a vowel.",
    hint: 'The noun starts with a vowel sound.'
  },
  {
    id: 2,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Choose the correct form of "être" (to be).',
    sentence: 'Nous ___ heureux de vous voir.',
    answer: 'sommes',
    options: ['sommes', 'êtes', 'sont', 'es'],
    explanation: '"Nous sommes" is the first-person plural conjugation of "être" in present tense.',
    hint: 'Conjugate for "nous" (we).'
  },
  {
    id: 3,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Fill in the blank with the correct possessive adjective.',
    sentence: 'C\'est ___ livre. (my)',
    answer: 'mon',
    options: ['mon', 'ma', 'mes', 'ton'],
    explanation: '"Mon" is the masculine singular possessive adjective for "my" before a masculine noun.',
    hint: '"Livre" is masculine singular.'
  },
  {
    id: 4,
    difficulty: 'beginner',
    type: 'conjugation',
    instruction: 'Conjugate "avoir" (to have) for "je" in present tense.',
    verb: 'avoir',
    person: 'je',
    answer: 'ai',
    options: ['ai', 'as', 'avons', 'ont'],
    explanation: '"J\'ai" is the first-person singular conjugation of "avoir" in present tense.',
    hint: 'It\'s a very common irregular verb.'
  },
  {
    id: 5,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Choose the correct past participle. (passé composé)',
    sentence: 'Elle ___ mangé une pomme. (avoir + manger)',
    answer: 'a',
    options: ['a', 'est', 'ont', 'as'],
    explanation: '"Elle a mangé" — "avoir" is used as the auxiliary for most verbs in passé composé.',
    hint: 'Use "avoir" as the auxiliary verb.'
  },
  {
    id: 6,
    difficulty: 'beginner',
    type: 'conjugation',
    instruction: 'Conjugate "aller" (to go) for "tu" in present tense.',
    verb: 'aller',
    person: 'tu',
    answer: 'vas',
    options: ['vas', 'vais', 'va', 'vont'],
    explanation: '"Tu vas" is the second-person singular conjugation of "aller" in present tense.',
    hint: 'Irregular verb — one of the most common.'
  },
  {
    id: 7,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Fill in with the correct negation.',
    sentence: 'Il ___ pas à l\'école.',
    answer: 'ne',
    options: ['ne', 'pas', 'non', 'ni'],
    explanation: '"Ne...pas" is the standard negation in French. "Ne" comes before the verb.',
    hint: 'The negation has two parts surrounding the verb.'
  },
  {
    id: 8,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Choose the correct adjective agreement.',
    sentence: 'Les maisons sont ___ (grand = big).',
    answer: 'grandes',
    options: ['grand', 'grande', 'grandes', 'grands'],
    explanation: '"Grandes" agrees in gender (feminine) and number (plural) with "les maisons".',
    hint: '"Maisons" is feminine plural.'
  },
  {
    id: 9,
    difficulty: 'beginner',
    type: 'conjugation',
    instruction: 'Conjugate "faire" (to do/make) for "nous" in present tense.',
    verb: 'faire',
    person: 'nous',
    answer: 'faisons',
    options: ['faisons', 'faites', 'font', 'fais'],
    explanation: '"Nous faisons" is an irregular conjugation — note the special pronunciation /fəzɔ̃/.',
    hint: 'This verb is highly irregular.'
  },
  {
    id: 10,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Fill in with the correct preposition.',
    sentence: 'Je vais ___ Paris.',
    answer: 'à',
    options: ['à', 'en', 'de', 'sur'],
    explanation: '"À" is used for cities. "En" is used for countries/regions (feminine).',
    hint: 'Which preposition is used with city names?'
  },
  {
    id: 11,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Choose the correct form of "pouvoir" (to be able to).',
    sentence: '___-je vous aider ?',
    answer: 'Puis',
    options: ['Puis', 'Peux', 'Pouvez', 'Peut'],
    explanation: '"Puis-je" is the inverted form for "je" — commonly used in polite questions.',
    hint: 'This is an inverted question form.'
  },
  {
    id: 12,
    difficulty: 'beginner',
    type: 'fill-blank',
    instruction: 'Fill in the correct relative pronoun.',
    sentence: 'La femme ___ parle est ma mère.',
    answer: 'qui',
    options: ['qui', 'que', 'dont', 'où'],
    explanation: '"Qui" is the subject relative pronoun — it replaces the subject of the relative clause.',
    hint: 'The pronoun is the subject of "parle" (speaks).'
  },

  // ── INTERMEDIATE ──
  {
    id: 13,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Choose the correct passé composé with être. (Movement verbs)',
    sentence: 'Ils ___ allés au cinéma.',
    answer: 'sont',
    options: ['sont', 'ont', 'suis', 'es'],
    explanation: 'Movement verbs (aller, venir, partir, etc.) use "être" as auxiliary in passé composé.',
    hint: 'Aller is a movement verb — it uses être.'
  },
  {
    id: 14,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Choose the imparfait or passé composé.',
    sentence: 'Quand j\'étais petit, je ___ jouais au parc tous les jours.',
    answer: 'allais',
    options: ['allais', 'suis allé', 'ai allé', 'vais'],
    explanation: 'Imparfait is used for habitual actions in the past. "Allais" shows repeated action.',
    hint: 'This describes a habitual past action.'
  },
  {
    id: 15,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Fill in with the correct object pronoun (y or en).',
    sentence: 'Tu ___ penses ? (about it)',
    answer: 'y',
    options: ['y', 'en', 'le', 'lui'],
    explanation: '"Y" replaces "à + thing" or "sur + thing". "Penser à" → "y penser".',
    hint: 'Penser takes "à" — what replaces "à + thing"?'
  },
  {
    id: 16,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Fill in with the correct object pronoun (y or en).',
    sentence: 'J\'___ ai besoin. (some of it)',
    answer: 'en',
    options: ['en', 'y', 'le', 'la'],
    explanation: '"En" replaces "de + thing". "Avoir besoin de" → "en avoir besoin".',
    hint: 'Besoin takes "de" — what replaces "de + thing"?'
  },
  {
    id: 17,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Choose the correct comparative form.',
    sentence: 'Paris est ___ que Londres. (beautiful)',
    answer: 'plus beau',
    options: ['plus beau', 'beau', 'le plus beau', 'très beau'],
    explanation: 'Comparative: "plus + adjective + que". "Plus beau que" = more beautiful than.',
    hint: 'We\'re comparing two things.'
  },
  {
    id: 18,
    difficulty: 'intermediate',
    type: 'conjugation',
    instruction: 'Conjugate "venir" (to come) for "nous" in present tense.',
    verb: 'venir',
    person: 'nous',
    answer: 'venons',
    options: ['venons', 'venez', 'viennent', 'viens'],
    explanation: '"Nous venons" — the stem changes to "ven-" for nous/vous forms.',
    hint: 'Irregular verb with stem change.'
  },
  {
    id: 19,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Choose the conditional form of the verb.',
    sentence: 'Si j\'avais de l\'argent, je ___ voyagerais. (I would travel)',
    answer: 'voyagerais',
    options: ['voyagerais', 'voyagerai', 'voyageais', 'voyage'],
    explanation: 'Si + imparfait → conditionnel présent. "Voyagerais" is the conditional of "voyager".',
    hint: 'The si-clause uses imparfait, so the result uses conditionnel.'
  },
  {
    id: 20,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Fill in with the correct preposition (à or de).',
    sentence: 'Elle a besoin ___ temps.',
    answer: 'de',
    options: ['de', 'à', 'pour', 'avec'],
    explanation: '"Avoir besoin de" is a fixed expression meaning "to need".',
    hint: 'Avoir besoin is always followed by the same preposition.'
  },
  {
    id: 21,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Choose the correct form of the future proche.',
    sentence: 'Nous ___ partirons demain. (We are going to leave)',
    answer: 'allons',
    options: ['allons', 'sommes', 'avons', 'faisons'],
    explanation: 'Futur proche: "aller + infinitif". "Nous allons partir" = We are going to leave.',
    hint: 'Futur proche uses the verb "aller".'
  },
  {
    id: 22,
    difficulty: 'intermediate',
    type: 'fill-blank',
    instruction: 'Fill in with the correct direct object pronoun.',
    sentence: 'Le livre, je ___ lis. (it)',
    answer: 'le',
    options: ['le', 'la', 'lui', 'y'],
    explanation: '"Le" replaces a masculine direct object. "Je le lis" = I read it.',
    hint: 'Livre is masculine.'
  },

  // ── ADVANCED ──
  {
    id: 23,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct subjunctive form.',
    sentence: 'Il faut que je ___ (partir) maintenant.',
    answer: 'parte',
    options: ['parte', 'pars', 'partirai', 'partais'],
    explanation: 'After "il faut que", the subjunctive is required. "Parte" is the subjunctive of "partir".',
    hint: 'Expressions of necessity take the subjunctive.'
  },
  {
    id: 24,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct subjunctive after a doubt expression.',
    sentence: 'Je doute qu\'il ___ (avoir) raison.',
    answer: 'ait',
    options: ['ait', 'a', 'aura', 'avait'],
    explanation: '"Douter que" triggers the subjunctive. "Ait" is the subjunctive of "avoir".',
    hint: 'Expressions of doubt take the subjunctive.'
  },
  {
    id: 25,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct conditional past.',
    sentence: 'Si j\'avais étudié, j\'___ (réussir) l\'examen.',
    answer: 'aurais réussi',
    options: ['aurais réussi', 'ai réussi', 'réussirais', 'avais réussi'],
    explanation: 'Si + plus-que-parfait → conditionnel passé. "J\'aurais réussi" = I would have succeeded.',
    hint: 'This is a past unreal conditional.'
  },
  {
    id: 26,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct passive voice construction.',
    sentence: 'Le français ___ dans beaucoup de pays.',
    answer: 'est parlé',
    options: ['est parlé', 'parle', 'est parlant', 'parlé'],
    explanation: 'Passive voice: être + past participle. "Le français est parlé" = French is spoken.',
    hint: 'Passive voice uses "être" + past participle.'
  },
  {
    id: 27,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Fill in with the correct discourse connector.',
    sentence: 'Il fait froid. ___ , je sors quand même.',
    answer: 'Cependant',
    options: ['Cependant', 'Donc', 'Ensuite', 'D\'abord'],
    explanation: '"Cependant" (however) shows contrast. It connects two opposing ideas.',
    hint: 'We need a word that shows contrast.'
  },
  {
    id: 28,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct relative pronoun (dont).',
    sentence: 'Le livre ___ je vous ai parlé est excellent.',
    answer: 'dont',
    options: ['dont', 'que', 'qui', 'où'],
    explanation: '"Dont" replaces "de + thing". "Parler de" → "dont je vous ai parlé".',
    hint: 'The verb "parler" takes "de" — what replaces "de + thing"?'
  },
  {
    id: 29,
    difficulty: 'advanced',
    type: 'conjugation',
    instruction: 'Conjugate "pouvoir" (to be able to) for "ils" in present tense.',
    verb: 'pouvoir',
    person: 'ils',
    answer: 'peuvent',
    options: ['peuvent', 'pouvons', 'pouvez', 'peux'],
    explanation: '"Ils peuvent" — highly irregular verb with stem change to "peuv-" for ils/elles.',
    hint: 'The stem changes significantly for ils/elles.'
  },
  {
    id: 30,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct form of the subjonctif after "bien que".',
    sentence: 'Bien qu\'il ___ (pleuvoir), nous sortons.',
    answer: 'pleuve',
    options: ['pleuve', 'pleut', 'pleuvra', 'pleuvait'],
    explanation: '"Bien que" (although) always triggers the subjunctive. "Pleuve" is the subjunctive of "pleuvoir".',
    hint: 'Bien que always takes the subjunctive.'
  },
  {
    id: 31,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Fill in with the correct pronoun (en).',
    sentence: 'J\'___ ai beaucoup. (of them)',
    answer: 'en',
    options: ['en', 'y', 'les', 'leur'],
    explanation: '"En" replaces "de + noun" or quantified expressions. "J\'en ai beaucoup" = I have a lot of them.',
    hint: 'What replaces "de + thing" with quantity?'
  },
  {
    id: 32,
    difficulty: 'advanced',
    type: 'fill-blank',
    instruction: 'Choose the correct plus-que-parfait.',
    sentence: 'Quand je suis arrivé, il ___ déjà parti.',
    answer: 'était',
    options: ['était', 'a été', 'sera', 'serait'],
    explanation: 'Plus-que-parfait: imparfait of être/avoir + past participle. Used for an action before another past action.',
    hint: 'This action happened before another past action.'
  }
];
