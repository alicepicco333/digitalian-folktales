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

  /* Further tales from the source volume of the Sicilian cycle (2026), on the map as squares. */
  related: [
    { id: 'pitre-iii', title: 'San Pietro in Pitrè, vol. III', url: 'pitre.html', places: [
      { name: 'Borgetto (PA)', lon: 13.15, lat: 38.05, wikidata: ['Q496869'] },
      { name: 'Palermo', lon: 13.3613, lat: 38.1157, wikidata: ['Q2656'] }
    ] }
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
