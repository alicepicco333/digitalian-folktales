/*
 * Digitalian Folktales — edition data.
 * Every value below is transcribed from the project's original tale pages
 * (docs/analysis/*.html, "document's features", "Propp's ontology" and
 * "story's measurements" tables) and from the text files in docs/texts/.
 * Map coordinates of the places of collection are those of their Wikidata items
 * (the same identifiers as in the TEI headers, docs/tei/*.xml). The texts
 * themselves are in the TEI files and reach the site through assets/corpus.js.
 * Honorifics (Mr./Mrs.) from the original tables are omitted.
 */
window.EDITION = {
  tales: [
    {
      id: 'friuli',
      title: 'Gesù e San Pietro in Friuli',
      url: 'gesù-e-san-pietro-in-friuli.html',
      region: 'Friuli-Venezia Giulia',
      regionCode: '06',
      dialect: { en: 'Friulian', it: 'friulano' },
      dialectLang: 'fur',
      originalTitle: 'Zimût che san Pieri al è lât cul Signôr',
      source: 'Dolfo Zorzùt, Sot la nape… (I racconti del popolo friulano), 3 voll., Udine 1924, 1925, 1927.',
      sourceShort: 'Zorzùt, Sot la nape…',
      documentationTime: 'Not specified',
      places: [
        { name: 'Cormòns', episodes: ['I', 'II'], lon: 13.4667, lat: 45.95, wikidata: ['Q53124'] },
        { name: 'Enemonzo e Preone', episodes: ['III'], lon: 12.8727, lat: 46.4055, wikidata: ['Q53255', 'Q53319'] }
      ],
      /* Calvino's cycle, as listed in docs/texts/friuli-original.txt */
      cycle: [
        'Come fu che San Pietro è andato col Signore',
        'La coratella di lepre',
        "L'ospitalità",
        'Il grano saraceno'
      ],
      episodes: [
        {
          n: 'I',
          title: 'Come fu che San Pietro è andato col Signore',
          originalTitle: 'Zimût che san Pieri al è lât cul Signôr',
          geography: 'Cormòns',
          atu: { code: '774', label: 'Jests about Christ and Peter' },
          narrator: 'Caterina Braida (Minèn)',
          resolution: 'Positive',
          animals: [],
          places: ['Peter’s house', 'road', 'field'],
          actions: [],
          people: ['Peter', 'Peter’s wife', 'Stranger / The Lord', 'Delusional owners'],
          supernatural: [],
          transcribed: true
        },
        {
          n: 'II',
          title: 'La coratella di lepre',
          originalTitle: 'La corodele tradîs San Pieri',
          geography: 'Cormòns',
          atu: { code: '785', label: 'Lamb’s heart' },
          narrator: 'Giovanni Minèn',
          resolution: 'Positive',
          animals: ['Hare'],
          places: ['Village', 'Town', 'King’s daughter room'],
          actions: ['Joke', 'healing'],
          people: ['The Lord', 'St. Peter', 'Host', 'Soldier 1', 'King', 'King’s daughter', 'Physicians', 'Soldiers'],
          supernatural: ['The Lord'],
          transcribed: false
        },
        {
          n: 'III',
          title: "L'ospitalità",
          originalTitle: null,
          geography: 'Enemonzo e Preone',
          atu: { code: '750B', label: 'Hospitality Rewarded' },
          narrator: 'Iole Taddio (Iole di Mini)',
          resolution: 'Positive',
          animals: [],
          places: ['Woman’s house', 'Poor house', 'Manure'],
          actions: [],
          people: ['Jesus', 'St. Peter', 'Comare Giacoma', 'Catìn'],
          supernatural: [],
          transcribed: false
        }
      ],
      metrics: {
        avgSentenceLength: 12.74, maxSentenceLength: 50, avgWordLength: 4.08, maxWordLength: 16,
        avgSyllables: 1.76, ttr: 0.31, lexicalDensity: 0.45, hardWords: 602, fry: 45.37,
        fog: 13.04, ari: 3.79, smog: 12.21, colemanLiau: 5.40, positivity: 0.9882, positivityStd: 0.0482
      }
    },
    {
      id: 'sicily',
      title: 'Gesù e San Pietro in Sicilia',
      url: 'gesù-e-san-pietro-in-sicilia.html',
      region: 'Sicilia',
      regionCode: '19',
      dialect: { en: 'Sicilian', it: 'siciliano' },
      dialectLang: 'scn',
      originalTitle: 'Lu Signuri, S. Petru e li Apostuli',
      source: 'Fiabe, novelle e racconti popolari siciliani, raccolti e illustrati da Giuseppe Pitrè, 4 voll., Palermo 1875. Biblioteca delle tradizioni popolari siciliane, voll. IV–VII.',
      sourceShort: 'Pitrè, Fiabe, novelle e racconti popolari siciliani',
      documentationTime: 'Not specified',
      places: [
        { name: 'Bagheria (PA)', episodes: ['I', 'II'], lon: 13.5, lat: 38.0833, wikidata: ['Q27000'] }
      ],
      cycle: null,
      episodes: [
        {
          n: 'I',
          title: 'Storia I',
          originalTitle: null,
          geography: 'Bagheria (PA)',
          atu: { code: '774', label: 'Jests About Christ and Peter' },
          narrator: 'Gargano',
          resolution: 'Mixed',
          animals: [],
          places: ['Countryside / road', 'Village 1', 'Village 2'],
          actions: ['Transmutation', 'Joke'],
          people: ['Apostles', 'Jesus', 'St. Peter'],
          supernatural: ['Jesus — capable of the magical features in the text'],
          transcribed: true
        },
        {
          n: 'II',
          title: 'Storia II',
          originalTitle: null,
          geography: 'Bagheria (PA)',
          atu: { code: '774', label: 'Jests About Christ and Peter' },
          narrator: 'Gargano',
          resolution: 'Positive',
          animals: [],
          places: ['Outside', 'Dead woman house'],
          actions: ['Death', 'Resurrection'],
          people: ['Apostles', 'The Master / The Lord', 'St. Peter', 'Man 1', 'Man 2', 'Mother'],
          supernatural: ['The Master / The Lord — capable of the magical features in the text'],
          transcribed: true
        }
      ],
      metrics: {
        avgSentenceLength: 11.88, maxSentenceLength: 38, avgWordLength: 4.18, maxWordLength: 15,
        avgSyllables: 1.79, ttr: 0.36, lexicalDensity: 0.5, hardWords: 393, fry: 43.67,
        fog: 13.18, ari: 3.86, smog: 12.16, colemanLiau: 5.86, positivity: 0.9971, positivityStd: 0.0178
      }
    }
  ],

  /*
   * 2026: the further tales, annotated on the model of the 2023 records (type, places in order, actions,
   * people, supernatural figures, animals, resolution). The annotation is the 2026 editor's.
   */
  collections: [
    {
      id: 'friuli-pf', title: 'San Pieri nelle Pagine friulane', url: 'pagine-friulane.html', region: 'Friuli-Venezia Giulia', regionCode: '06', marker: 'friuli',
      episodes: [
        { n: 'I', title: 'L’origine del grano saraceno', originalTitle: 'L’orìgin de ’l sarasìn', geography: 'Alto Friuli orientale (signed at Gorizia)',
          atu: { code: '752A', label: 'Christ and Peter in the Barn' }, narrator: 'Giobi (author)', resolution: 'Positive', animals: [],
          places: ['The woman’s house', 'The bed', 'Threshing floor', 'The neighbour’s yard'], actions: ['Beating', 'Threshing by fire', 'Imitation', 'Transformation'],
          people: ['The Lord', 'St Peter', 'St James', 'The mistress of the house', 'A neighbour'], supernatural: ['The Lord — separates the grain with fire and turns burnt wheat into buckwheat'], transcribed: true },
        { n: 'II', title: 'Un’altra leggenda sul lago di Cavazzo', originalTitle: 'Un’altre leggende sul làd di Chavazz', geography: 'Cavazzo Carnico',
          atu: { code: '750B', label: 'Hospitality Rewarded' }, narrator: 'unsigned', resolution: 'Mixed', animals: [],
          places: ['Road from Tolmezzo', 'Village under Mount San Simeone', 'The old woman’s house', 'Heaven', 'Lake of Cavazzo'], actions: ['Hospitality refused', 'Hospitality', 'Flood', 'Reward'],
          people: ['The Lord', 'St Peter', 'The villagers', 'A poor old woman', 'Angels'], supernatural: ['The Lord — makes the lake', 'Angels — carry the house up the mountain', 'Souls of the dead — a yearly procession'], transcribed: true },
        { n: 'III', title: 'Invidioso come la madre di San Pietro', originalTitle: 'Invidiôs tanche la mâri di San Pieri', geography: 'not stated',
          atu: { code: '804', label: 'Peter’s Mother Falls from Heaven' }, narrator: 'Valentino Ostermann (author)', resolution: 'Negative', animals: [],
          places: ['Paradise', 'The storehouse of paradise', 'Hell'], actions: ['Intercession', 'Rescue', 'Fall', 'Earthquake'],
          people: ['The Lord', 'St Peter', 'St Peter’s mother', 'The souls in hell'], supernatural: ['The Lord — grants one rescue by a braid of garlic'], transcribed: true },
        { n: 'IV', title: 'Il maestro sopra tutti i maestri', originalTitle: 'Il mestri sore duch i mestris', geography: 'Carnia (Clavais, Avosacco, Cedarchis, Incaroio, Racolana)',
          atu: { code: '753', label: 'Christ and the Smith' }, narrator: 'Luigi Gortani (author)', resolution: 'Mixed', animals: [],
          places: ['The smithy', 'The forge', 'The room upstairs', 'The road'], actions: ['Rejuvenation', 'Imitation', 'Death', 'Resurrection'],
          people: ['The smith', 'The Lord', 'St Peter', 'The smith’s father'], supernatural: ['The Lord — makes St Peter young in the fire and brings the father back to life'], transcribed: true },
        { n: 'V', title: 'L’ostinato', originalTitle: 'L’ustinàd', geography: 'Orgnano',
          atu: { code: '830C', label: 'If God Wills' }, narrator: 'V. Great (author)', resolution: 'Mixed', animals: ['Toad'],
          places: ['Road', 'Ditch', 'Road'], actions: ['Transformation', 'Forgiveness'],
          people: ['The Lord', 'St Peter', 'A stubborn man'], supernatural: ['St Peter — turns the man into a toad and back'], transcribed: true }
      ]
    },
    {
      id: 'pitre-iii', title: 'San Pietro in Pitrè, vol. III', url: 'pitre.html', region: 'Sicilia', regionCode: '19', marker: 'sicily',
      episodes: [
        { n: 'CXXI', title: 'San Pietro e i ladri', originalTitle: 'San Petru e li latri', geography: 'Borgetto (PA)',
          atu: { code: '774', label: 'Jests about Christ and Peter' }, narrator: 'collected by Salvatore Salomone-Marino', resolution: 'Positive', animals: [],
          places: ['Countryside', 'Sheepfold', 'Straw hut'], actions: ['Hospitality refused', 'Robbery', 'Feast'],
          people: ['The Master', 'St Peter', 'The Apostles', 'The head shepherd', 'The shepherds', 'Thieves'], supernatural: [], transcribed: true },
        { n: 'CXXII', title: 'San Pietro e l’oste', originalTitle: 'S. Petru e lu tavirnaru', geography: 'Palermo',
          atu: { code: '774', label: 'Jests about Christ and Peter' }, narrator: 'Francesca Deodato', resolution: 'Negative', animals: [],
          places: ['The towns', 'The tavern', 'The road'], actions: ['Deception', 'Explanation of a word (’nfinucchiari)'],
          people: ['Jesus Christ', 'St Peter', 'The Apostles', 'The innkeeper'], supernatural: [], transcribed: true },
        { n: 'CXXVI', title: 'Il porro di San Pietro', originalTitle: 'Lu porru di S. Petru', geography: 'Palermo; variant from Bagheria',
          atu: { code: '804', label: 'Peter’s Mother Falls from Heaven' }, narrator: 'Agatuzza Messia', resolution: 'Negative', animals: [],
          places: ['The mother’s house', 'Hell', 'The gate of Paradise'], actions: ['Alms refused', 'Intercession', 'Rescue', 'Fall'],
          people: ['St Peter’s mother', 'A poor woman', 'The Lord', 'St Peter', 'An Angel', 'The souls in hell'], supernatural: ['An Angel — lowers the leek leaf'], transcribed: true }
      ]
    }
  ],

  /* Further tales from the source volume of the Sicilian cycle (2026), on the map as squares. */
  related: [
    { id: 'friuli-pf', title: 'San Pieri nelle Pagine friulane', url: 'pagine-friulane.html', short: 'Pagine friulane', regionCode: '06', marker: 'friuli', places: [
      { name: 'Gorizia', lon: 13.6193, lat: 45.9352, wikidata: ['Q6596'] },
      { name: 'Cavazzo Carnico', lon: 13.0333, lat: 46.3667, wikidata: ['Q53239'] },
      { name: 'Carnia', lon: 13.0267, lat: 46.4724, wikidata: ['Q369765'] },
      { name: 'Orgnano', lon: 13.1421, lat: 46.0073, wikidata: ['Q3885756'] }
    ] },
    { id: 'pitre-iii', title: 'San Pietro in Pitrè, vol. III', url: 'pitre.html', short: 'Pitrè, vol. III', regionCode: '19', marker: 'sicily', places: [
      { name: 'Borgetto (PA)', lon: 13.15, lat: 38.05, wikidata: ['Q496869'] },
      { name: 'Palermo', lon: 13.3613, lat: 38.1157, wikidata: ['Q2656'] }
    ] }
  ],

  /* 2026: the same tale types told in Friuli and in Sicily, across the five files of the edition (href: page#anchor). */
  parallels: [
    { atu: '774', label: { en: 'Jests about Christ and Peter', it: 'Facezie su Cristo e Pietro' },
      friuli: [['Zimût che san Pieri al è lât cul Signôr', 'gesù-e-san-pietro-in-friuli.html#ep-I']],
      sicily: [['Lu Signuri, S. Petru e li Apostuli (I)', 'gesù-e-san-pietro-in-sicilia.html#ep-I'], ['San Petru e li latri', 'pitre.html#pitre-latri'], ['S. Petru e lu tavirnaru', 'pitre.html#pitre-tavirnaru']] },
    { atu: '753', label: { en: 'Christ and the Smith: made young by fire', it: 'Cristo e il fabbro: ringiovanito col fuoco' },
      note: { en: 'In Friuli the Lord makes St Peter young in the forge and the proud smith kills his father copying him; in Sicily it is St Peter who copies the Lord’s oven and burns an old woman.', it: 'In Friuli il Signore ringiovanisce San Pietro nella fucina e il fabbro superbo, imitandolo, uccide il padre; in Sicilia è San Pietro a imitare il forno del Signore e a bruciare una vecchia.' },
      friuli: [['Il mestri sore duch i mestris', 'pagine-friulane.html#pf-mestri']],
      sicily: [['Lu Signuri, S. Petru e li Apostuli (II)', 'gesù-e-san-pietro-in-sicilia.html#ep-II']] },
    { atu: '804', label: { en: 'St Peter’s mother falls from heaven', it: 'La madre di San Pietro cade dal cielo' },
      note: { en: 'Her one good deed is a braid of garlic in Friuli, a leek leaf in Sicily; both versions end in a proverb.', it: 'La sua unica buona azione è una treccia d’aglio in Friuli, una foglia di porro in Sicilia; entrambe le versioni finiscono in un proverbio.' },
      friuli: [['Invidiôs tanche la mâri di San Pieri', 'pagine-friulane.html#pf-mari']],
      sicily: [['Lu porru di S. Petru', 'pitre.html#pitre-porru'], ['La Mamma di S. Petru (Bagheria)', 'pitre.html#pitre-porru-v']] },
    { atu: '750B', label: { en: 'Hospitality rewarded', it: 'L’ospitalità premiata' },
      friuli: [['L’ospitalità (record only)', 'gesù-e-san-pietro-in-friuli.html#ep-III'], ['Un’altre leggende sul làd di Chavazz', 'pagine-friulane.html#pf-chavazz']],
      sicily: [] },
    { atu: '752A', label: { en: 'Christ and Peter in the barn: the origin of buckwheat', it: 'Cristo e Pietro nel fienile: l’origine del grano saraceno' },
      note: { en: 'The subject of Calvino’s fourth Friulian tale, Il grano saraceno, for which the 2023 edition had found no source.', it: 'L’argomento del quarto racconto friulano di Calvino, Il grano saraceno, di cui l’edizione del 2023 non aveva trovato la fonte.' },
      friuli: [['L’orìgin de ’l sarasìn', 'pagine-friulane.html#pf-sarasin']],
      sicily: [] },
    { atu: '785', label: { en: 'Lamb’s heart', it: 'Il cuore dell’agnello' },
      friuli: [['La corodele tradîs San Pieri (record only)', 'gesù-e-san-pietro-in-friuli.html#ep-II']], sicily: [] },
    { atu: '830C', label: { en: 'If God wills', it: 'Se Dio vuole' },
      friuli: [['L’ustinàd', 'pagine-friulane.html#pf-ustinad']], sicily: [] }
  ],

  /* 2026: the same tale types told in Friuli and in Sicily, across the five files of the edition (href: page#anchor). */
  parallels: [
    { atu: '774', label: { en: 'Jests about Christ and Peter', it: 'Facezie su Cristo e Pietro' },
      friuli: [['Zimût che san Pieri al è lât cul Signôr', 'gesù-e-san-pietro-in-friuli.html#ep-I']],
      sicily: [['Lu Signuri, S. Petru e li Apostuli (I)', 'gesù-e-san-pietro-in-sicilia.html#ep-I'], ['San Petru e li latri', 'pitre.html#pitre-latri'], ['S. Petru e lu tavirnaru', 'pitre.html#pitre-tavirnaru']] },
    { atu: '753', label: { en: 'Christ and the Smith: made young by fire', it: 'Cristo e il fabbro: ringiovanito col fuoco' },
      note: { en: 'In Friuli the Lord makes St Peter young in the forge and the proud smith kills his father copying him; in Sicily it is St Peter who copies the Lord’s oven and burns an old woman.', it: 'In Friuli il Signore ringiovanisce San Pietro nella fucina e il fabbro superbo, imitandolo, uccide il padre; in Sicilia è San Pietro a imitare il forno del Signore e a bruciare una vecchia.' },
      friuli: [['Il mestri sore duch i mestris', 'pagine-friulane.html#pf-mestri']],
      sicily: [['Lu Signuri, S. Petru e li Apostuli (II)', 'gesù-e-san-pietro-in-sicilia.html#ep-II']] },
    { atu: '804', label: { en: 'St Peter’s mother falls from heaven', it: 'La madre di San Pietro cade dal cielo' },
      note: { en: 'Her one good deed is a braid of garlic in Friuli, a leek leaf in Sicily; both versions end in a proverb.', it: 'La sua unica buona azione è una treccia d’aglio in Friuli, una foglia di porro in Sicilia; entrambe le versioni finiscono in un proverbio.' },
      friuli: [['Invidiôs tanche la mâri di San Pieri', 'pagine-friulane.html#pf-mari']],
      sicily: [['Lu porru di S. Petru', 'pitre.html#pitre-porru'], ['La Mamma di S. Petru (Bagheria)', 'pitre.html#pitre-porru-v']] },
    { atu: '750B', label: { en: 'Hospitality rewarded', it: 'L’ospitalità premiata' },
      friuli: [['L’ospitalità (record only)', 'gesù-e-san-pietro-in-friuli.html#ep-III'], ['Un’altre leggende sul làd di Chavazz', 'pagine-friulane.html#pf-chavazz']],
      sicily: [] },
    { atu: '752A', label: { en: 'Christ and Peter in the barn: the origin of buckwheat', it: 'Cristo e Pietro nel fienile: l’origine del grano saraceno' },
      note: { en: 'The subject of Calvino’s fourth Friulian tale, Il grano saraceno, for which the 2023 edition had found no source.', it: 'L’argomento del quarto racconto friulano di Calvino, Il grano saraceno, di cui l’edizione del 2023 non aveva trovato la fonte.' },
      friuli: [['L’orìgin de ’l sarasìn', 'pagine-friulane.html#pf-sarasin']],
      sicily: [] },
    { atu: '785', label: { en: 'Lamb’s heart', it: 'Il cuore dell’agnello' },
      friuli: [['La corodele tradîs San Pieri (record only)', 'gesù-e-san-pietro-in-friuli.html#ep-II']], sicily: [] },
    { atu: '830C', label: { en: 'If God wills', it: 'Se Dio vuole' },
      friuli: [['L’ustinàd', 'pagine-friulane.html#pf-ustinad']], sicily: [] }
  ],

  /* Metric definitions: labels and links as in the original measurement tables. */
  metricGroups: [
    { key: 'basic', en: 'Basic metrics', it: 'Metriche di base', metrics: [
      { key: 'avgSentenceLength', en: 'Average sentence length', it: 'Lunghezza media della frase', dec: 2 },
      { key: 'maxSentenceLength', en: 'Maximum sentence length', it: 'Lunghezza massima della frase', dec: 0 },
      { key: 'avgWordLength', en: 'Average word length', it: 'Lunghezza media della parola', dec: 2 },
      { key: 'maxWordLength', en: 'Maximum word length', it: 'Lunghezza massima della parola', dec: 0 },
      { key: 'avgSyllables', en: 'Average syllables per word', it: 'Media di sillabe per parola', dec: 2 }
    ]},
    { key: 'vocab', en: 'Vocabulary', it: 'Lessico', metrics: [
      { key: 'ttr', en: 'Type–token ratio', it: 'Type–token ratio', dec: 2, max: 1, href: 'https://en.wikipedia.org/wiki/Lexical_density' },
      { key: 'lexicalDensity', en: 'Lexical density', it: 'Densità lessicale', dec: 2, max: 1, href: 'https://en.wikipedia.org/wiki/Lexical_density' }
    ]},
    { key: 'complexity', en: 'Text complexity', it: 'Complessità del testo', metrics: [
      { key: 'hardWords', en: 'Hard words (count)', it: 'Parole difficili (numero)', dec: 0 },
      { key: 'fry', en: 'Fry readability formula', it: 'Formula di leggibilità di Fry', dec: 2, href: 'https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests' },
      { key: 'fog', en: 'Gunning fog index', it: 'Indice Gunning fog', dec: 2, href: 'https://en.wikipedia.org/wiki/Gunning_fog_index' },
      { key: 'ari', en: 'Automated readability index', it: 'Automated readability index', dec: 2, href: 'https://en.wikipedia.org/wiki/Automated_readability_index' },
      { key: 'smog', en: 'SMOG grade', it: 'Indice SMOG', dec: 2, href: 'https://en.wikipedia.org/wiki/SMOG' },
      { key: 'colemanLiau', en: 'Coleman–Liau index', it: 'Indice Coleman–Liau', dec: 2, href: 'https://en.wikipedia.org/wiki/Coleman%E2%80%93Liau_index' }
    ]},
    { key: 'sentiment', en: 'Sentiment (MilaNLProc model)', it: 'Sentiment (modello MilaNLProc)', metrics: [
      { key: 'positivity', en: 'Average sentence positivity', it: 'Positività media delle frasi', dec: 4, max: 1 },
      { key: 'positivityStd', en: 'Sentence positivity, std. dev.', it: 'Positività delle frasi, dev. std.', dec: 4, max: 0.1 }
    ]},
    /* 2026: computed by tools/build_corpus.py on the Italian translation */
    { key: 'readIt', en: 'Italian readability (2026)', it: 'Leggibilità in italiano (2026)', metrics: [
      { key: 'gulpease', en: 'Gulpease index, Italian translation (0–100, higher is easier)', it: 'Indice Gulpease, traduzione italiana (0–100, più alto è più facile)', dec: 1, max: 100, href: 'https://it.wikipedia.org/wiki/Indice_Gulpease' }
    ]}
  ]
};
