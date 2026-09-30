/* Digitalian Folktales — interface script: language switch, map, reader, reading views. */
(function () {
  'use strict';
  var E = window.EDITION;
  var root = document.documentElement;
  var base = document.body.getAttribute('data-base') || '';

  /* ------------------------------------------------------------------ i18n */
  var STR = {
    'nav.tales': { en: 'tales', it: 'fiabe' },
    'nav.compare': { en: 'compare stories', it: 'confronta le fiabe' },
    'nav.guide': { en: 'user guide', it: 'guida' },
    'nav.who': { en: 'who we are', it: 'chi siamo' },
    'page.compare': { en: 'Comparing Stories', it: 'Fiabe a confronto' },
    'page.guide': { en: 'User Guide', it: 'Guida' },
    'home.tagline': { en: 'a digital edition of tales from Italo Calvino’s Fiabe italiane, read against the dialect versions he drew on', it: 'edizione digitale di fiabe dalle Fiabe italiane di Italo Calvino, lette accanto alle versioni dialettali da cui provengono' },
    'search.label': { en: 'Search the tales', it: 'Cerca tra le fiabe' },
    'search.ph': { en: 'e.g. Gesù e San Pietro in Friuli, Cormòns, ATU 774, hare…', it: 'es. Gesù e San Pietro in Friuli, Cormòns, ATU 774, lepre…' },
    'search.go': { en: 'search', it: 'cerca' },
    'search.map': { en: 'browse the map', it: 'sfoglia la mappa' },
    'search.compare': { en: 'compare two folktales', it: 'confronta due fiabe' },
    'search.guide': { en: 'how to read the edition', it: 'come leggere l’edizione' },
    'search.none': { en: 'No tale or episode matches “{q}”.', it: 'Nessuna fiaba o episodio corrisponde a “{q}”.' },
    'search.count': { en: '{n} results', it: '{n} risultati' },
    'kind.tale': { en: 'tale', it: 'fiaba' },
    'kind.episode': { en: 'episode {n}', it: 'episodio {n}' },
    'tick.tales': { en: 'tales', it: 'fiabe' },
    'tick.episodes': { en: 'episodes catalogued', it: 'episodi catalogati' },
    'tick.done': { en: 'transcribed and translated', it: 'trascritti e tradotti' },
    'tick.segs': { en: 'aligned passages', it: 'passi allineati' },
    'map.suggested': { en: 'suggested stories', it: 'altre fiabe' },
    'map.here': { en: 'you are here', it: 'sei qui' },
    'card.no': { en: 'card no. {n}', it: 'scheda n. {n}' },
    'lang.label': { en: 'Leggi in italiano', it: 'Read in English' },
    'skip': { en: 'Skip to content', it: 'Vai al contenuto' },
    'footer.note': { en: 'A digital edition of tales from Italo Calvino’s Fiabe italiane and their dialect sources.', it: 'Edizione digitale di fiabe dalle Fiabe italiane di Italo Calvino e delle loro fonti dialettali.' },
    'footer.repo': { en: 'Source on GitHub', it: 'Codice su GitHub' },

    'home.kicker': { en: 'Digital edition · Italo Calvino, Fiabe italiane', it: 'Edizione digitale · Italo Calvino, Fiabe italiane' },
    'home.title': { en: 'Calvino’s folktales, read against the dialects they came from.', it: 'Le fiabe di Calvino, lette accanto ai dialetti da cui provengono.' },
    'home.lede': { en: 'Calvino retold Italy’s folktales in standard Italian from regional collections. This edition returns two of his tales to their sources: the Friulian and Sicilian texts as collected, an Italian translation aligned passage by passage, and a structured reading of each tale’s type, places, people and events.', it: 'Calvino riscrisse in italiano le fiabe raccolte nelle diverse regioni. Questa edizione riporta due dei suoi racconti alle fonti: i testi friulani e siciliani così come furono raccolti, una traduzione italiana allineata passo per passo e una lettura strutturata di tipo, luoghi, personaggi ed eventi di ogni fiaba.' },
    'fig.tales': { en: 'tales', it: 'fiabe' },
    'fig.episodes': { en: 'episodes catalogued', it: 'episodi catalogati' },
    'fig.transcribed': { en: 'episodes transcribed and translated', it: 'episodi trascritti e tradotti' },
    'fig.segments': { en: 'aligned passages', it: 'passi allineati' },
    'home.s1': { en: 'the tales, by place of collection', it: 'le fiabe, per luogo di raccolta' },
    'home.s1.note': { en: 'Circles mark the places of collection named in each record, squares the further tales from Pitrè; positions from Wikidata. Select a region to open its tale.', it: 'I cerchi indicano i luoghi di rilevamento registrati in ogni scheda, i quadrati le altre fiabe da Pitrè; posizioni da Wikidata. Seleziona una regione per aprire la fiaba.' },
    'home.s2': { en: 'how to read the edition', it: 'come leggere l’edizione' },
    'home.t1.h': { en: 'the dialect text', it: 'il testo dialettale' },
    'home.t1.p': { en: 'Typed in Courier, like the field record it comes from: the tale as it was told and written down, in Friulian or Sicilian.', it: 'Battuto in Courier, come la scheda di rilevamento da cui proviene: la fiaba come fu narrata e trascritta, in friulano o in siciliano.' },
    'home.t2.h': { en: 'the Italian translation', it: 'la traduzione italiana' },
    'home.t2.p': { en: 'Set beside it in a book serif, aligned passage by passage, so the eye can move across without losing its place.', it: 'Composta accanto in un carattere da libro, allineata passo per passo, perché l’occhio possa passare dall’una all’altro senza perdersi.' },
    'home.t3.h': { en: 'the reading', it: 'la lettura' },
    'home.t3.p': { en: 'Each episode’s ATU tale type, the sequence of places, the people, the supernatural figures and the resolution, as recorded by the project team.', it: 'Per ogni episodio: tipo ATU, sequenza dei luoghi, personaggi, figure soprannaturali e scioglimento, come registrati dal gruppo di progetto.' },
    'home.s3': { en: 'sources', it: 'fonti' },
    'home.s3.link': { en: 'More on sources, methods and the team', it: 'Altro su fonti, metodo e gruppo di lavoro' },

    'src.calvino': { en: 'Retelling', it: 'Riscrittura' },
    'src.zorzut': { en: 'Friulian source', it: 'Fonte friulana' },
    'src.pitre': { en: 'Sicilian source', it: 'Fonte siciliana' },
    'src.sff': { en: 'Friulian texts used', it: 'Testi friulani utilizzati' },
    'src.atu': { en: 'Tale types', it: 'Tipi di fiaba' },

    'entry.dialect': { en: 'Dialect', it: 'Dialetto' },
    'entry.episodes': { en: 'Episodes', it: 'Episodi' },
    'entry.atu': { en: 'ATU types', it: 'Tipi ATU' },
    'entry.source': { en: 'Calvino’s source', it: 'Fonte di Calvino' },
    'entry.read': { en: 'Read in parallel', it: 'Leggi in parallelo' },
    'entry.compare': { en: 'Compare the tales', it: 'Confronta le fiabe' },
    'entry.transcribed': { en: '{a} of {b} transcribed', it: '{a} di {b} trascritti' },

    'tale.crumb': { en: 'Tales', it: 'Fiabe' },
    'tale.record': { en: 'Record', it: 'Scheda' },
    'tale.contents': { en: 'Episodes', it: 'Episodi' },
    'tale.view': { en: 'View', it: 'Vista' },
    'tale.parallel': { en: 'Parallel', it: 'Parallelo' },
    'tale.orig': { en: 'Dialect', it: 'Dialetto' },
    'tale.trans': { en: 'Italian', it: 'Italiano' },
    'tale.hint': { en: 'Hover or tab through a passage to hold its counterpart.', it: 'Passa sopra un passo, o raggiungilo con Tab, per evidenziarne il corrispondente.' },
    'tale.editorial': { en: 'Editorial note (in Italian, from the edition files)', it: 'Nota editoriale (dai file dell’edizione)' },
    'tale.h.orig': { en: 'original text · {d}', it: 'testo originale · {d}' },
    'tale.h.trans': { en: 'Italian translation', it: 'traduzione italiana' },
    'tale.episode': { en: 'Episode {n}', it: 'Episodio {n}' },
    'tale.gap': { en: 'The source record for this episode is catalogued above, but its text is not transcribed in this edition.', it: 'La scheda di questo episodio è riportata qui sopra, ma il testo non è trascritto in questa edizione.' },
    'tale.gap.meta': { en: 'This episode is described in the tale’s record only; the edition contains no text for it yet.', it: 'Questo episodio è descritto solo nella scheda della fiaba; l’edizione non ne contiene ancora il testo.' },
    'tale.loadfail': { en: 'The texts could not be loaded. Open the site through a web server (for example, the published GitHub Pages site) rather than from the file system.', it: 'Non è stato possibile caricare i testi. Apri il sito tramite un server web (ad esempio la versione pubblicata su GitHub Pages) e non dal file system.' },
    'tale.reading': { en: 'reading the tale', it: 'lettura della fiaba' },
    'tale.reading.p': { en: 'Tale type, itinerary and cast of each episode, from the project’s annotation.', it: 'Tipo, itinerario e personaggi di ogni episodio, dall’annotazione del progetto.' },
    'tale.metrics': { en: 'measurements', it: 'misure' },
    'tale.metrics.link': { en: 'See both tales measured side by side', it: 'Vedi le misure delle due fiabe a confronto' },
    'tale.also': { en: 'The other tale', it: 'L’altra fiaba' },

    'rec.region': { en: 'Region', it: 'Regione' },
    'rec.place': { en: 'Place of collection', it: 'Luogo di rilevamento' },
    'rec.narrator': { en: 'Narrator', it: 'Narratore o narratrice' },
    'rec.source': { en: 'Calvino’s source', it: 'Fonte di Calvino' },
    'rec.time': { en: 'Documentation time', it: 'Data di documentazione' },
    'rec.atu': { en: 'ATU type', it: 'Tipo ATU' },
    'rec.dialect': { en: 'Language', it: 'Lingua' },

    'f.itinerary': { en: 'Places, in order', it: 'Luoghi, in ordine' },
    'f.actions': { en: 'Actions, events', it: 'Azioni, eventi' },
    'f.people': { en: 'People', it: 'Personaggi' },
    'f.super': { en: 'Supernatural', it: 'Soprannaturale' },
    'f.animals': { en: 'Animals', it: 'Animali' },
    'f.resolution': { en: 'Resolution', it: 'Scioglimento' },
    'f.narrator': { en: 'Narrator', it: 'Narrazione' },
    'f.none': { en: 'none recorded', it: 'non registrato' },
    'f.none.animals': { en: 'none', it: 'nessuno' },
    'f.transcribed': { en: 'Text transcribed and translated in this edition', it: 'Testo trascritto e tradotto in questa edizione' },
    'f.notranscribed': { en: 'Record only — no text in this edition', it: 'Solo scheda — testo non presente nell’edizione' },
    'f.shared': { en: 'shared type', it: 'tipo condiviso' },
    'res.Positive': { en: 'Positive', it: 'Positivo' },
    'res.Mixed': { en: 'Mixed', it: 'Misto' },

    'cmp.kicker': { en: 'Comparison', it: 'Confronto' },
    'cmp.title': { en: 'Two cycles of Jesus and St. Peter, north and south', it: 'Due cicli di Gesù e San Pietro, a nord e a sud' },
    'cmp.lede': { en: 'Calvino placed a Friulian and a Sicilian cycle of Jesus-and-Peter tales in the Fiabe italiane. Their records, structure and measurements are set side by side here, from the project’s annotation.', it: 'Calvino incluse nelle Fiabe italiane un ciclo friulano e uno siciliano di racconti su Gesù e San Pietro. Qui ne sono messi a confronto schede, struttura e misure, dall’annotazione del progetto.' },
    'cmp.s1': { en: 'structure of each episode', it: 'struttura di ogni episodio' },
    'cmp.finding': { en: 'Both cycles open with ATU 774, Jests about Christ and Peter — the Friulian first episode and both Sicilian stories. The Friulian cycle then moves to other types: 785 (Lamb’s heart) and 750B (Hospitality Rewarded).', it: 'Entrambi i cicli si aprono con il tipo ATU 774, Jests about Christ and Peter: il primo episodio friulano e le due storie siciliane. Il ciclo friulano passa poi ad altri tipi: 785 (Lamb’s heart) e 750B (Hospitality Rewarded).' },
    'cmp.s2': { en: 'the records', it: 'le schede' },
    'cmp.s2.p': { en: 'Descriptive metadata as recorded for each tale. Numerals I–III refer to episodes.', it: 'Metadati descrittivi come registrati per ciascuna fiaba. I numeri I–III indicano gli episodi.' },
    'cmp.field': { en: 'Field', it: 'Campo' },
    'cmp.s3': { en: 'measurements', it: 'misure' },
    'cmp.s3.p': { en: 'Each row has its own scale, starting at zero, so values are comparable within a row but not across rows.', it: 'Ogni riga ha una propria scala, che parte da zero: i valori sono confrontabili all’interno della riga, non tra righe diverse.' },
    'cmp.caveat': { en: 'Values as computed by the project team and published in the original edition. The repository does not state whether they were computed on the dialect text or on the translation, and the Fry, Gunning fog, ARI, SMOG and Coleman–Liau formulas were designed for English, so they are best read comparatively. The Gulpease index, added in 2026, is the readability formula designed for Italian, computed on the Italian translation. The hard-word count grows with the length of the text.', it: 'Valori calcolati dal gruppo di progetto e pubblicati nell’edizione originale. Il repository non indica se siano stati calcolati sul testo dialettale o sulla traduzione; le formule di Fry, Gunning fog, ARI, SMOG e Coleman–Liau sono state pensate per l’inglese e vanno lette in senso comparativo. L’indice Gulpease, aggiunto nel 2026, è la formula di leggibilità pensata per l’italiano ed è calcolato sulla traduzione italiana. Il numero di parole difficili cresce con la lunghezza del testo.' },
    'cmp.table': { en: 'Show the measurements as a table', it: 'Mostra le misure in tabella' },
    'cmp.metric': { en: 'Measure', it: 'Misura' },
    'cmp.s4': { en: 'read the texts', it: 'leggi i testi' },

    'guide.kicker': { en: 'Guide & sources', it: 'Guida e fonti' },
    'guide.title': { en: 'About this edition', it: 'Informazioni sull’edizione' },
    'guide.s1': { en: 'user guide', it: 'guida alla lettura' },
    'guide.s2': { en: 'sources and coverage', it: 'fonti e copertura' },
    'guide.s3': { en: 'who we are', it: 'chi siamo' },
    'src.sent': { en: 'Sentiment', it: 'Sentiment' },
    'tale.parallel.h': { en: 'Parallel text', it: 'Testo a fronte' },
    'tale.sub.friuli': { en: 'Three episodes collected in Friuli and told in Friulian, from Dolfo Zorzùt’s Sot la nape…; the first is transcribed here beside its Italian translation.', it: 'Tre episodi raccolti in Friuli e narrati in friulano, da Sot la nape… di Dolfo Zorzùt; il primo è trascritto qui accanto alla sua traduzione italiana.' },
    'tale.transonly': { en: 'Translation', it: 'Traduzione' },
    'tale.tr': { en: 'Translation language', it: 'Lingua della traduzione' },
    'tale.tr.it': { en: 'Italian', it: 'Italiano' },
    'tale.tr.en': { en: 'English', it: 'Inglese' },
    'tale.h.trans.en': { en: 'English working translation (2026)', it: 'traduzione inglese di lavoro (2026)' },
    'tale.gloss': { en: 'Glossary', it: 'Glossario' },
    'tale.gloss.hint': { en: 'Dotted words have a gloss: hover or tab to them.', it: 'Le parole sottolineate a puntini hanno una glossa: passaci sopra o raggiungile con Tab.' },
    'tale.tei': { en: 'TEI', it: 'TEI' },
    'tale.tei.show': { en: 'Show the TEI of passage {n}', it: 'Mostra il TEI del passo {n}' },
    'tale.tei.dl': { en: 'TEI source (XML)', it: 'Sorgente TEI (XML)' },
    'tale.variant': { en: 'Variant', it: 'Variante' },
    'tale.pitre.n': { en: 'Pitrè, n. {n}', it: 'Pitrè, n. {n}' },
    'gap.copyright': { en: 'The text of this episode is not given: Dolfo Zorzùt’s Sot la nape… (1924–27) stays in copyright in Italy until 2031. Its record is above.', it: 'Il testo di questo episodio non è riportato: Sot la nape… di Dolfo Zorzùt (1924–27) è protetto dal diritto d’autore in Italia fino al 2031. La scheda è qui sopra.' },
    'gl.pitre': { en: 'Pitrè’s note', it: 'nota di Pitrè' },
    'rec.links': { en: 'Linked data', it: 'Dati collegati' },
    'rec.collector': { en: 'Collector', it: 'Raccoglitore' },
    'rec.narrators': { en: 'Narrators', it: 'Narratori' },
    'rec.tei': { en: 'TEI source', it: 'Sorgente TEI' },
    'rec.passages': { en: 'Aligned passages', it: 'Passi allineati' },
    'rec.calvino': { en: 'Retold by', it: 'Riscritta da' },
    'kind.passage': { en: 'passage {n}', it: 'passo {n}' },
    'kind.pitre': { en: 'Pitrè, vol. III', it: 'Pitrè, vol. III' },
    'tick.more': { en: 'more tales from Pitrè', it: 'altre fiabe da Pitrè' },
    'nav.pitre': { en: 'more from Pitrè', it: 'altre da Pitrè' },
    'tale.sub.pitre': { en: 'Three more Jesus-and-Peter tales from the volume of Giuseppe Pitrè’s collection that holds the Sicilian source, transcribed in 2026 from the 1875 edition, with Italian and English translations and Pitrè’s own glosses.', it: 'Altre tre fiabe di Gesù e San Pietro dal volume della raccolta di Giuseppe Pitrè che contiene la fonte siciliana, trascritte nel 2026 dall’edizione del 1875, con traduzioni italiana e inglese e le glosse dello stesso Pitrè.' },
    'pitre.also': { en: 'More Jesus-and-Peter tales from the same volume of Pitrè', it: 'Altre fiabe di Gesù e San Pietro dallo stesso volume di Pitrè' },
    'tale.sub.sicily': { en: 'Two stories told in Bagheria in Sicilian, from Giuseppe Pitrè’s collection; both are transcribed here beside their Italian translation.', it: 'Due storie raccontate a Bagheria in siciliano, dalla raccolta di Giuseppe Pitrè; entrambe sono trascritte qui accanto alla loro traduzione italiana.' }
  };

  function getLang() {
    try { return localStorage.getItem('df-lang') === 'it' ? 'it' : 'en'; } catch (e) { return 'en'; }
  }
  var lang = getLang();
  function t(key, vars) {
    var s = (STR[key] && STR[key][lang]) || (STR[key] && STR[key].en) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.replace('{' + k + '}', vars[k]); });
    return s;
  }
  window.DF = { t: t, lang: function () { return lang; } };

  function applyLang() {
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (STR[k]) el.textContent = t(k);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });
    document.querySelectorAll('[data-lang-block]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang-block') !== lang;
    });
    var btn = document.querySelector('.lang-switch');
    if (btn) {
      btn.textContent = lang === 'en' ? 'IT' : 'EN';
      btn.setAttribute('aria-label', t('lang.label'));
      btn.setAttribute('lang', lang === 'en' ? 'it' : 'en');
    }
    document.dispatchEvent(new CustomEvent('df:lang'));
  }
  var langBtn = document.querySelector('.lang-switch');
  if (langBtn) langBtn.addEventListener('click', function () {
    lang = lang === 'en' ? 'it' : 'en';
    try { localStorage.setItem('df-lang', lang); } catch (e) { /* storage unavailable */ }
    applyLang();
  });

  /* --------------------------------------------------------------- helpers */
  function h(tag, attrs, kids) {
    var el = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'text') el.textContent = attrs[k];
      else if (k === 'html') el.innerHTML = attrs[k];
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) el.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) el.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return el;
  }
  var SVGNS = 'http://www.w3.org/2000/svg';
  function s(tag, attrs, kids) {
    var el = document.createElementNS(SVGNS, tag);
    Object.keys(attrs || {}).forEach(function (k) { if (k === 'text') el.textContent = attrs[k]; else el.setAttribute(k, attrs[k]); });
    (kids || []).forEach(function (c) { if (c) el.appendChild(c); });
    return el;
  }
  function tale(id) { return E.tales.filter(function (x) { return x.id === id; })[0]; }
  function sharedAtu() {
    var seen = {}, shared = {};
    E.tales.forEach(function (tl) {
      var codes = {};
      tl.episodes.forEach(function (ep) { codes[ep.atu.code] = 1; });
      Object.keys(codes).forEach(function (c) { if (seen[c]) shared[c] = 1; seen[c] = 1; });
    });
    return shared;
  }
  function marker(id) { return h('span', { 'class': 'mk ' + id, 'aria-hidden': 'true' }); }

  /* ------------------------------------------------------------------- map */
  function rewind(fc) {
    /* d3 expects clockwise exterior rings; flip any feature that covers the globe. */
    fc.features.forEach(function (f) {
      if (d3.geoArea(f) > 2 * Math.PI) {
        var g = f.geometry;
        if (g.type === 'Polygon') g.coordinates.forEach(function (r) { r.reverse(); });
        if (g.type === 'MultiPolygon') g.coordinates.forEach(function (p) { p.forEach(function (r) { r.reverse(); }); });
      }
    });
    return fc;
  }
  function drawMap(el) {
    if (!window.d3 || !window.topojson) return;
    var mode = el.getAttribute('data-map');           /* atlas | locator */
    var focus = el.getAttribute('data-focus');        /* current tale id on a tale page */
    fetch(base + 'topojson/it.topojson').then(function (r) { return r.json(); }).then(function (topo) {
      var fc = rewind(topojson.feature(topo, topo.objects.it));
      var W = mode === 'atlas' ? 640 : 300, H = mode === 'atlas' ? 660 : 330;
      var k = Math.min(2, Math.max(1, (mode === 'atlas' ? 520 : 260) / (el.clientWidth || 520)));
      var pad = mode === 'atlas' ? { l: 4, r: 150 * k, t: 10, b: 10 } : { l: 4, r: 96 * k, t: 8, b: 8 };
      var proj = d3.geoConicConformal().rotate([-12.5, 0]).parallels([38, 44]);
      proj.fitExtent([[pad.l, pad.t], [W - pad.r, H - pad.b]], fc);
      var path = d3.geoPath(proj);
      var svg = s('svg', { 'class': 'map-svg', viewBox: '0 0 ' + W + ' ' + H, role: 'group' });
      svg.setAttribute('aria-label', mode === 'atlas' ? t('home.s1') : t('map.suggested'));
      var byCode = {};
      E.tales.forEach(function (tl) { byCode[tl.regionCode] = tl; });
      var gBase = s('g', { 'aria-hidden': 'true' });
      var gHi = s('g');
      var prefix = mode === 'atlas' ? 'analysis/' : '';
      fc.features.forEach(function (f) {
        var tl = byCode[f.properties.reg_istat_code];
        var p = s('path', { d: path(f), 'class': 'region' + (tl ? ' on' : '') });
        if (tl && (mode === 'atlas' || tl.id !== focus)) {
          var a = s('a', { href: prefix + tl.url, 'aria-label': tl.title + ' — ' + tl.region });
          a.appendChild(p); gHi.appendChild(a);
        } else gBase.appendChild(p);
      });
      svg.appendChild(gBase); svg.appendChild(gHi);
      var gPts = s('g', { 'aria-hidden': 'true' });
      var r = (mode === 'atlas' ? 12 : 9) * (k > 1.3 ? 1.25 : 1);
      E.tales.forEach(function (tl) {
        tl.places.forEach(function (pl) {
          var xy = proj([pl.lon, pl.lat]);
          gPts.appendChild(s('circle', { cx: xy[0], cy: xy[1], r: r, 'class': 'marker ' + tl.id }));
        });
        var f = fc.features.filter(function (x) { return x.properties.reg_istat_code === tl.regionCode; })[0];
        var b = path.bounds(f);
        var ax = b[1][0] + 4, ay = (b[0][1] + b[1][1]) / 2;
        var lx = W - pad.r + 14, ly = tl.id === 'friuli' ? ay - 4 : ay - 16 * k;
        var fs = (mode === 'atlas' ? 15 : 13) * k;
        gPts.appendChild(s('path', { d: 'M' + ax + ',' + ay + ' L' + (lx - 6) + ',' + (ly - fs * 0.35), 'class': 'leader' }));
        var name = mode === 'atlas' ? (tl.id === 'friuli' && k > 1.3 ? 'Friuli' : tl.region) : (tl.id === 'friuli' ? 'Friuli' : 'Sicilia');
        gPts.appendChild(s('text', { x: lx, y: ly, 'class': 'label', style: 'font-size:' + fs + 'px;stroke-width:' + (4 * k) + 'px', text: name }));
        var subs = mode === 'atlas' ? (k < 1.3 ? tl.places.map(function (p) { return p.name; }) : []) : (tl.id === focus ? [t('map.here')] : []);
        if (mode === 'atlas' && k < 1.3 && tl.id === 'sicily') (E.related || []).forEach(function (rl) { subs.push('▪ ' + rl.places.map(function (p) { return p.name.replace(/\s*\(.*\)$/, ''); }).join(', ')); });
        subs.forEach(function (sub, i) {
          gPts.appendChild(s('text', { x: lx, y: ly + fs * (1.15 + i * 1.05), 'class': 'label sub', style: 'font-size:' + (fs * 0.85) + 'px;stroke-width:' + (4 * k) + 'px', text: sub }));
        });
      });
      (E.related || []).forEach(function (rl) {
        rl.places.forEach(function (pl) {
          var xy = proj([pl.lon, pl.lat]), q = r * 0.8;
          gPts.appendChild(s('rect', { x: xy[0] - q, y: xy[1] - q, width: 2 * q, height: 2 * q, 'class': 'marker related' }));
        });
      });
      svg.appendChild(gPts);
      el.innerHTML = '';
      el.appendChild(svg);
    }).catch(function () { el.textContent = ''; });
  }
  function redrawMaps() { document.querySelectorAll('[data-map]').forEach(drawMap); }
  redrawMaps();

  /* -------------------------------------------------------- tale index */
  function renderIndex(el) {
    var shared = sharedAtu();
    el.innerHTML = '';
    E.tales.forEach(function (tl, i) {
      var done = tl.episodes.filter(function (e) { return e.transcribed; }).length;
      var atus = h('dd', null, []);
      var codes = [];
      tl.episodes.forEach(function (ep) { if (codes.indexOf(ep.atu.code) < 0) codes.push(ep.atu.code); });
      codes.forEach(function (c, j) {
        if (j) atus.appendChild(document.createTextNode(' · '));
        atus.appendChild(h('span', { 'class': 'atu' + (shared[c] ? ' shared' : ''), text: c }));
      });
      el.appendChild(h('li', { 'class': 'card' }, [
        h('div', { 'class': 'card-head' }, [
          h('span', null, [marker(tl.id), tl.region.toLowerCase()]),
          h('span', { 'class': 'muted', text: t('card.no', { n: String(i + 1).padStart(2, '0') }) })
        ]),
        h('div', { 'class': 'card-body' }, [
          h('h3', { lang: 'it' }, [h('a', { href: 'analysis/' + tl.url, text: tl.title })]),
          h('dl', { 'class': 'fields' }, [
            h('dt', { text: t('rec.dialect') }), h('dd', { text: tl.dialect[lang] }),
            h('dt', { text: t('entry.episodes') }),
            h('dd', { text: tl.episodes.map(function (e) { return e.n; }).join(', ') + ' — ' + t('entry.transcribed', { a: done, b: tl.episodes.length }) }),
            h('dt', { text: t('entry.atu') }), atus,
            h('dt', { text: t('rec.place') }), h('dd', { text: tl.places.map(function (p) { return p.name; }).join(' · ') }),
            h('dt', { text: t('entry.source') }), h('dd', { 'class': 'serif', text: tl.sourceShort })
          ]),
          h('div', { 'class': 'card-links' }, [
            h('a', { href: 'analysis/' + tl.url, text: t('entry.read') }),
            h('a', { href: 'analysis/comparison.html', text: t('entry.compare') })
          ])
        ])
      ]));
    });
  }

  function renderIndexMore(el) {
    var C = window.CORPUS && window.CORPUS['pitre-iii'];
    if (!C) return;
    var tales = C.units.filter(function (u) { return u.kind === 'tale'; });
    var n = C.units.reduce(function (a, u) { return a + u.passages.length; }, 0);
    el.appendChild(h('li', { 'class': 'card' }, [
      h('div', { 'class': 'card-head' }, [h('span', null, [h('span', { 'class': 'mk related', 'aria-hidden': 'true' }), 'sicilia · pitrè, vol. iii']), h('span', { 'class': 'muted', text: t('card.no', { n: '03' }) })]),
      h('div', { 'class': 'card-body' }, [
        h('h3', { lang: 'it' }, [h('a', { href: 'analysis/pitre.html', text: 'San Pietro in Pitrè, vol. III' })]),
        h('dl', { 'class': 'fields' }, [
          h('dt', { text: t('rec.dialect') }), h('dd', { text: C.dialect[lang] }),
          h('dt', { text: t('entry.episodes') }), h('dd', { lang: 'scn', text: tales.map(function (u) { return u.n + ' ' + u.heads.orig; }).join(' · ') }),
          h('dt', { text: t('entry.atu') }), h('dd', { 'class': 'num', text: tales.map(function (u) { return u.atu.code; }).filter(function (x, i, a) { return a.indexOf(x) === i; }).join(' · ') }),
          h('dt', { text: t('rec.place') }), h('dd', { text: C.places.map(function (p) { return p.name; }).join(' · ') }),
          h('dt', { text: t('rec.passages') }), h('dd', { text: String(n) })
        ]),
        h('div', { 'class': 'card-links' }, [h('a', { href: 'analysis/pitre.html', text: t('entry.read') })])
      ])
    ]));
  }

  /* -------------------------------------------------------- structure */
  function facet(label, content) {
    return [h('dt', { text: label }), content];
  }
  function listDD(items, noneKey) {
    if (!items || !items.length) return h('dd', { 'class': 'none', text: t(noneKey || 'f.none') });
    return h('dd', { text: items.join(', ') });
  }
  function epCard(tl, ep, shared, lvl) {
    var itin = h('ol', { 'class': 'itinerary' }, ep.places.map(function (p) { return h('li', null, [h('span', { 'class': 'stop', text: p })]); }));
    var dl = h('dl', { style: 'margin:0' });
    [
      facet(t('f.itinerary'), h('dd', null, [itin])),
      facet(t('f.actions'), listDD(ep.actions)),
      facet(t('f.people'), listDD(ep.people)),
      facet(t('f.super'), listDD(ep.supernatural)),
      facet(t('f.animals'), listDD(ep.animals, 'f.none.animals')),
      facet(t('f.resolution'), h('dd', { 'class': 'resolution' + (ep.resolution === 'Mixed' ? ' mixed' : ''), text: t('res.' + ep.resolution) })),
      facet(t('f.narrator'), h('dd', { text: ep.narrator + ', ' + ep.geography }))
    ].forEach(function (pair) { dl.appendChild(h('div', { 'class': 'facet' }, pair)); });
    var isShared = !!shared[ep.atu.code];
    return h('article', { 'class': 'ep-card', 'aria-label': t('tale.episode', { n: ep.n }) + ' — ' + ep.title }, [
      h('div', { 'class': 'card-head' }, [
        h('span', { text: t('tale.episode', { n: ep.n }) }),
        h('span', null, ['ATU ', h('span', { 'class': 'atu' + (isShared ? ' shared' : ''), text: ep.atu.code }), isShared ? h('span', { 'class': 'muted', text: ' · ' + t('f.shared') }) : null])
      ]),
      h('div', { 'class': 'card-body' }, [
        h(lvl || 'h4', { 'class': 'ep-title', lang: 'it', text: ep.title }),
        h('p', { 'class': 'ep-atu-label', text: ep.atu.label }),
        dl,
        h('span', { 'class': 'transcribed-flag', text: ep.transcribed ? t('f.transcribed') : t('f.notranscribed') })
      ])
    ]);
  }
  function renderStructure(el) {
    var ids = el.getAttribute('data-structure').split(',');
    var shared = sharedAtu();
    el.innerHTML = '';
    el.className = 'structure' + (ids.length > 1 ? ' cols-2' : '');
    ids.forEach(function (id) {
      var tl = tale(id);
      var col = h('div', { 'class': 'col' });
      if (ids.length > 1) col.appendChild(h('h3', { 'class': 'colhead', lang: 'it' }, [marker(id), h('a', { href: tl.url, text: tl.title })]));
      tl.episodes.forEach(function (ep) { col.appendChild(epCard(tl, ep, shared, ids.length > 1 ? 'h4' : 'h3')); });
      el.appendChild(col);
    });
  }

  /* -------------------------------------------------------- record table (compare) */
  function epList(tl, fn) {
    var ol = h('ol', null, []);
    tl.episodes.forEach(function (ep) {
      var li = h('li', { value: ['I', 'II', 'III'].indexOf(ep.n) + 1 }, [fn(ep)]);
      ol.appendChild(li);
    });
    ol.setAttribute('type', 'I');
    return ol;
  }
  function renderRecord(el) {
    var ids = ['friuli', 'sicily'];
    var shared = sharedAtu();
    var rows = [
      ['rec.region', function (tl) { return document.createTextNode(tl.region); }],
      ['rec.dialect', function (tl) { return document.createTextNode(tl.dialect[lang]); }],
      ['rec.place', function (tl) { return epList(tl, function (ep) { return document.createTextNode(ep.geography); }); }],
      ['rec.narrator', function (tl) { return epList(tl, function (ep) { return document.createTextNode(ep.narrator); }); }],
      ['rec.atu', function (tl) { return epList(tl, function (ep) { return h('span', null, [h('span', { 'class': 'atu' + (shared[ep.atu.code] ? ' shared' : ''), text: ep.atu.code }), ' ' + ep.atu.label]); }); }],
      ['rec.time', function (tl) { return document.createTextNode(tl.documentationTime); }],
      ['rec.source', function (tl) { return h('span', { 'class': 'serif', text: tl.source }); }]
    ];
    var thead = h('thead', null, [h('tr', null, [h('th', { scope: 'col', text: t('cmp.field') })].concat(ids.map(function (id) {
      return h('th', { scope: 'col' }, [h('span', { style: 'display:inline-flex;align-items:center;gap:8px' }, [marker(id), tale(id).title])]);
    })))]);
    var tbody = h('tbody');
    rows.forEach(function (r) {
      tbody.appendChild(h('tr', null, [h('th', { scope: 'row', text: t(r[0]) })].concat(ids.map(function (id) { return h('td', { 'data-label': tale(id).title }, [r[1](tale(id))]); }))));
    });
    el.innerHTML = '';
    el.appendChild(h('div', { 'class': 'table-wrap' }, [h('table', { 'class': 'record-table' }, [thead, tbody])]));
  }

  /* -------------------------------------------------------- measurements */
  var tip = null;
  function showTip(evt, text) {
    if (!tip) { tip = h('div', { 'class': 'viz-tip', role: 'presentation' }); document.body.appendChild(tip); }
    tip.textContent = text;
    var x = evt.clientX + 14, y = evt.clientY + 14;
    if (x + 260 > window.innerWidth) x = evt.clientX - 14 - Math.min(260, tip.offsetWidth || 200);
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
    tip.classList.add('on');
  }
  function hideTip() { if (tip) tip.classList.remove('on'); }
  function niceMax(v) {
    var p = Math.pow(10, Math.floor(Math.log10(v)));
    var steps = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
    for (var i = 0; i < steps.length; i++) if (steps[i] * p >= v * 1.05) return steps[i] * p;
    return 10 * p;
  }
  function fmt(v, dec) {
    return Number(v).toLocaleString(lang === 'it' ? 'it-IT' : 'en-GB', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  }
  function drawTrack(holder, m, max) {
    var w = holder.clientWidth || 300, H = 40, x0 = 2, x1 = w - 2;
    var sc = function (v) { return x0 + (x1 - x0) * (v / max); };
    var svg = s('svg', { width: w, height: H, 'aria-hidden': 'true', focusable: 'false' });
    svg.appendChild(s('line', { x1: x0, x2: x1, y1: 15, y2: 15, 'class': 'base' }));
    [0, max].forEach(function (tv) {
      svg.appendChild(s('line', { x1: sc(tv), x2: sc(tv), y1: 11, y2: 19, 'class': 'tick' }));
    });
    svg.appendChild(s('text', { x: x0, y: 38, 'class': 'ticklabel', text: '0' }));
    svg.appendChild(s('text', { x: x1, y: 38, 'text-anchor': 'end', 'class': 'ticklabel', text: fmt(max, max < 1 ? 1 : 0) }));
    ['friuli', 'sicily'].forEach(function (id) {
      var v = tale(id).metrics[m.key], cx = sc(v), cy = id === 'friuli' ? 8 : 22;
      var dot = s('circle', { cx: cx, cy: cy, r: 5.5, 'class': 'dot ' + id });
      svg.appendChild(dot);
      var hit = s('rect', { x: cx - 10, y: cy - 8, width: 20, height: 16, 'class': 'hit' });
      var label = tale(id).title + ' — ' + m[lang] + ': ' + fmt(v, m.dec);
      hit.addEventListener('mousemove', function (e) { showTip(e, label); });
      hit.addEventListener('mouseleave', hideTip);
      svg.appendChild(hit);
    });
    holder.innerHTML = '';
    holder.appendChild(svg);
  }
  function renderMetrics(el) {
    el.innerHTML = '';
    var legend = h('p', { 'class': 'viz-legend' }, ['friuli', 'sicily'].map(function (id) {
      return h('span', null, [marker(id), tale(id).title]);
    }));
    el.appendChild(legend);
    var wrap = h('div', { 'class': 'metrics' });
    var tracks = [];
    E.metricGroups.forEach(function (g) {
      var grp = h('section', { 'class': 'metric-group', 'aria-label': g[lang] }, [h('h3', { text: g[lang] })]);
      g.metrics.forEach(function (m) {
        var vF = tale('friuli').metrics[m.key], vS = tale('sicily').metrics[m.key];
        var max = m.max || niceMax(Math.max(vF, vS));
        var lab = m.href ? h('a', { href: m.href, text: m[lang] }) : document.createTextNode(m[lang]);
        var track = h('div', { 'class': 'track' });
        tracks.push([track, m, max]);
        grp.appendChild(h('div', { 'class': 'metric-row' }, [
          h('div', { 'class': 'm-label' }, [lab]),
          track,
          h('div', { 'class': 'm-vals' }, [
            h('span', null, [h('span', { 'class': 'visually-hidden', text: 'Friuli ' }), marker('friuli'), fmt(vF, m.dec)]),
            h('span', null, [h('span', { 'class': 'visually-hidden', text: 'Sicilia ' }), marker('sicily'), fmt(vS, m.dec)])
          ])
        ]));
      });
      wrap.appendChild(grp);
    });
    el.appendChild(wrap);
    var draw = function () { tracks.forEach(function (a) { drawTrack(a[0], a[1], a[2]); }); };
    draw();
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(function () { draw(); });
      ro.observe(wrap);
    }
    /* table view */
    var tb = h('tbody');
    E.metricGroups.forEach(function (g) {
      g.metrics.forEach(function (m) {
        tb.appendChild(h('tr', null, [
          h('th', { scope: 'row', text: g[lang] + ' — ' + m[lang] }),
          h('td', { 'class': 'num', text: fmt(tale('friuli').metrics[m.key], m.dec) }),
          h('td', { 'class': 'num', text: fmt(tale('sicily').metrics[m.key], m.dec) })
        ]));
      });
    });
    el.appendChild(h('details', { 'class': 'table-view' }, [
      h('summary', { text: t('cmp.table') }),
      h('div', { 'class': 'table-wrap' }, [h('table', { 'class': 'record-table' }, [
        h('thead', null, [h('tr', null, [h('th', { scope: 'col', text: t('cmp.metric') }), h('th', { scope: 'col', text: tale('friuli').title }), h('th', { scope: 'col', text: tale('sicily').title })])]),
        tb
      ])])
    ]));
  }
  function renderTaleMetrics(el) {
    var tl = tale(el.getAttribute('data-tale-metrics'));
    var tb = h('tbody');
    E.metricGroups.forEach(function (g) {
      g.metrics.forEach(function (m) {
        tb.appendChild(h('tr', null, [h('th', { scope: 'row', text: g[lang] + ' — ' + m[lang] }), h('td', { 'class': 'num', text: fmt(tl.metrics[m.key], m.dec) })]));
      });
    });
    el.innerHTML = '';
    el.appendChild(h('div', { 'class': 'table-wrap' }, [h('table', { 'class': 'record-table' }, [tb])]));
  }

  /* -------------------------------------------------------- tale record sidebar */
  function renderSidebar(el) {
    var tl = tale(el.getAttribute('data-sidebar'));
    var codes = [];
    tl.episodes.forEach(function (ep) { if (codes.indexOf(ep.atu.code) < 0) codes.push(ep.atu.code); });
    el.innerHTML = '';
    el.className = 'card record-card';
    el.appendChild(h('div', { 'class': 'card-head' }, [h('span', null, [marker(tl.id), t('tale.record').toLowerCase()]), h('span', { 'class': 'muted', text: tl.dialectLang })]));
    el.appendChild(h('div', { 'class': 'card-body' }, [
      h('dl', { 'class': 'fields' }, [
        h('dt', { text: t('rec.region') }), h('dd', { text: tl.region }),
        h('dt', { text: t('rec.dialect') }), h('dd', { text: tl.dialect[lang] }),
        h('dt', { text: t('rec.place') }), h('dd', { text: tl.places.map(function (p) { return p.name; }).join('; ') }),
        h('dt', { text: t('entry.atu') }), h('dd', { 'class': 'num', text: codes.join(' · ') }),
        h('dt', { text: t('rec.source') }), h('dd', { 'class': 'serif', text: tl.source })
      ]),
      h('h2', { 'class': 'card-sub', text: t('tale.contents').toLowerCase() }),
      h('ol', null, tl.episodes.map(function (ep) {
        return h('li', null, [h('span', { 'class': 'muted', text: ep.n }), h('a', { href: '#ep-' + ep.n, lang: 'it', text: ep.title })]);
      }))
    ]));
    sidebarLinks(el, tl.id);
  }

  /* -------------------------------------------------------- parallel reader */
  function lines(txt) { return txt.replace(/\r/g, '').split('\n'); }
  function linkify(str) {
    var frag = document.createDocumentFragment();
    var re = /(https?:\/\/[^\s)]+)/g, last = 0, m;
    while ((m = re.exec(str))) {
      frag.appendChild(document.createTextNode(str.slice(last, m.index)));
      frag.appendChild(h('a', { href: m[1], text: m[1].replace(/^https?:\/\//, '').replace(/\/$/, '') }));
      last = m.index + m[1].length;
    }
    frag.appendChild(document.createTextNode(str.slice(last)));
    return frag;
  }
  function paras(arr) { return arr.map(function (l) { return h('p', { text: l.trim() }); }); }

  function gkey(x) { return String(x).toLowerCase().replace(/’/g, "'").replace(/\s+/g, ' '); }
  function glossary(C) {
    if (!C.glossary || !C.glossary.length) return null;
    var map = {}, forms = [];
    C.glossary.forEach(function (g) { g.forms.forEach(function (f) { var k = gkey(f); if (!map[k]) { map[k] = g; forms.push(f); } }); });
    forms.sort(function (a, b) { return b.length - a.length; });
    var alt = forms.map(function (f) { return f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/['’]/g, "['’]").replace(/ /g, '\\s+'); }).join('|');
    return { map: map, rx: new RegExp('(?<![\\p{L}\\p{M}])(' + alt + ')(?![\\p{L}\\p{M}])', 'giu') };
  }
  function glossed(text, G) {
    var p = h('p');
    if (!G) { p.textContent = text; return p; }
    var last = 0, m;
    G.rx.lastIndex = 0;
    while ((m = G.rx.exec(text))) {
      var g = G.map[gkey(m[0])];
      if (!g) continue;
      if (m.index > last) p.appendChild(document.createTextNode(text.slice(last, m.index)));
      p.appendChild(h('span', { 'class': 'gl', tabindex: '0', 'data-it': g.it, 'data-en': g.en, 'data-src': g.src || '' }, [m[0],
        h('span', { 'class': 'visually-hidden gl-sr', lang: lang, text: ' (' + (lang === 'it' ? g.it : g.en) + ')' })]));
      last = m.index + m[0].length;
    }
    if (last < text.length) p.appendChild(document.createTextNode(text.slice(last)));
    return p;
  }
  var tip = null;
  function glTip(e) {
    var g = e.target.closest && e.target.closest('.gl');
    if (!g || g.closest('.no-gloss')) { if (tip) tip.hidden = true; return; }
    if (!tip) { tip = h('div', { id: 'gl-tip', role: 'tooltip' }); document.body.appendChild(tip); }
    tip.innerHTML = '';
    tip.appendChild(h('span', { lang: 'it', text: g.getAttribute('data-it') }));
    tip.appendChild(h('span', { lang: 'en', text: g.getAttribute('data-en') }));
    if (g.getAttribute('data-src')) tip.appendChild(h('span', { 'class': 'src', text: g.getAttribute('data-src').replace(/^Pitrè/, t('gl.pitre')) }));
    tip.hidden = false;
    var r = g.getBoundingClientRect(), w = tip.offsetWidth, x = Math.min(Math.max(8, r.left), innerWidth - w - 8);
    tip.style.left = x + 'px';
    tip.style.top = (r.bottom + 6 + tip.offsetHeight > innerHeight ? r.top - tip.offsetHeight - 6 : r.bottom + 6) + 'px';
  }
  ['mouseover', 'focusin'].forEach(function (ev) { document.addEventListener(ev, glTip); });
  ['mouseout', 'focusout'].forEach(function (ev) { document.addEventListener(ev, function (e) { if (tip && e.target.closest && e.target.closest('.gl')) tip.hidden = true; }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && tip) tip.hidden = true; });

  function readerControls(el, C) {
    var bar = el.querySelector('.controls');
    if (!bar || bar.querySelector('[data-tr]')) return;
    var tr = el.getAttribute('data-tr');
    var grp = h('div', { 'class': 'seg-control', role: 'group', 'aria-labelledby': el.id + '-tr-l' }, ['it', 'en'].map(function (k) {
      return h('button', { type: 'button', 'data-tr': k, 'aria-pressed': String(tr === k), 'data-i18n': 'tale.tr.' + k, text: t('tale.tr.' + k) });
    }));
    var gl = h('label', { 'class': 'gl-switch' }, [h('input', { type: 'checkbox', checked: 'checked' }), h('span', { 'data-i18n': 'tale.gloss', text: t('tale.gloss') })]);
    bar.insertBefore(h('span', { 'class': 'small muted', id: el.id + '-tr-l', 'data-i18n': 'tale.tr', text: t('tale.tr') }), bar.querySelector('.hint'));
    bar.insertBefore(grp, bar.querySelector('.hint'));
    if (C.glossary && C.glossary.length) bar.insertBefore(gl, bar.querySelector('.hint'));
    bar.appendChild(h('a', { 'class': 'tei-dl', href: base + C.file, download: '', 'data-i18n': 'tale.tei.dl', text: t('tale.tei.dl') }));
    grp.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tr]');
      if (!b) return;
      el.setAttribute('data-tr', b.getAttribute('data-tr'));
      try { localStorage.setItem('df-tr', b.getAttribute('data-tr')); } catch (x) { /* storage unavailable */ }
      grp.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      el.querySelectorAll('.h-trans').forEach(function (x) { x.textContent = t(el.getAttribute('data-tr') === 'en' ? 'tale.h.trans.en' : 'tale.h.trans'); });
    });
    gl.querySelector('input').addEventListener('change', function () { el.classList.toggle('no-gloss', !this.checked); if (tip) tip.hidden = true; });
    if (C.glossary && C.glossary.length) bar.querySelector('.hint').setAttribute('data-i18n', 'tale.gloss.hint'), bar.querySelector('.hint').textContent = t('tale.gloss.hint');
  }

  function renderReader(el) {
    var id = el.getAttribute('data-reader');
    var C = window.CORPUS && window.CORPUS[id];
    var body = el.querySelector('.reader-body');
    body.innerHTML = '';
    if (!C) { body.appendChild(h('p', { 'class': 'gap-note', text: t('tale.loadfail') })); return; }
    if (!el.id) el.id = 'reader-' + id;
    if (!el.getAttribute('data-tr')) {
      var saved = null;
      try { saved = localStorage.getItem('df-tr'); } catch (x) { /* storage unavailable */ }
      el.setAttribute('data-tr', saved === 'it' || saved === 'en' ? saved : lang);
    }
    readerControls(el, C);
    var tl = tale(id), dLang = C.lang, G = glossary(C), tr = el.getAttribute('data-tr');
    var place = function (pid) { return C.places.filter(function (p) { return p.id === pid; })[0]; };
    var person = function (pid) { return C.persons.filter(function (p) { return p.id === pid; })[0]; };

    if (C.editorial) {
      var note = h('div', { 'class': 'editorial', role: 'note', lang: C.editorial.lang }, [h('p', { 'class': 'kicker', 'data-i18n': 'tale.editorial', lang: lang, text: t('tale.editorial') })]);
      C.editorial.blocks.forEach(function (b) {
        if (b.list) { note.appendChild(h('ol', null, b.list.map(function (x) { return h('li', { text: x }); }))); return; }
        var p = h('p', { 'class': 'serif' });
        b.p.forEach(function (l, i) { if (i) p.appendChild(h('br')); p.appendChild(linkify(l)); });
        note.appendChild(p);
      });
      body.appendChild(note);
    }
    if (C.heads && C.heads.orig) {
      body.appendChild(h('div', { 'class': 'work-title' }, [
        h('h2', { lang: dLang, text: C.heads.orig }),
        h('p', { 'class': 't-it', lang: 'it', text: C.heads.it }),
        h('p', { 'class': 't-en', lang: 'en', text: C.heads.en })
      ]));
    }

    C.units.forEach(function (u) {
      var ep = tl && u.kind === 'episode' ? tl.episodes.filter(function (e) { return e.n === u.n; })[0] : null;
      var anchor = u.kind === 'episode' ? 'ep-' + u.n : u.id;
      var sec = h('section', { 'class': 'episode' + (u.kind === 'variant' ? ' variant' : ''), id: anchor, 'aria-labelledby': anchor + '-h' });
      var head = h('div', { 'class': 'episode-head' });
      var atu = u.atu || (ep && ep.atu);
      var kick = u.kind === 'episode' ? t('tale.episode', { n: u.n }) : u.kind === 'variant' ? t('tale.variant') : t('tale.pitre.n', { n: u.n });
      head.appendChild(h('div', { 'class': 'ep-no', text: kick + (atu ? ' · ATU ' + atu.code + (u.atu ? ' ' + atu.label : '') : '') }));
      head.appendChild(h('h3', { id: anchor + '-h', lang: u.heads.orig ? dLang : 'it', text: u.heads.orig || u.heads.it }));
      head.appendChild(h('p', { 'class': 't-title' }, [
        u.heads.orig && u.heads.it ? h('span', { 'class': 't-it', lang: 'it', text: u.heads.it }) : null,
        u.heads.en ? h('span', { 'class': 't-en', lang: 'en', text: u.heads.en }) : null
      ]));
      var meta = h('div', { 'class': 'src-meta' });
      if (u.kind === 'episode' && u.record.length) {
        meta.setAttribute('lang', 'it');
        u.record.forEach(function (l) { meta.appendChild(h('span', { text: l })); });
      } else if (ep) {
        [t('rec.narrator') + ': ' + ep.narrator, t('rec.place') + ': ' + ep.geography, 'ATU ' + ep.atu.code + ' ' + ep.atu.label].forEach(function (x) { meta.appendChild(h('span', { text: x })); });
      } else {
        u.refs.forEach(function (r) {
          var pe = person(r), pl = place(r);
          if (pe) meta.appendChild(h('span', { text: (/collector/.test(pe.role) ? t('rec.collector') : t('rec.narrator')) + ': ' + pe.name }));
          if (pl) meta.appendChild(h('span', { text: t('rec.place') + ': ' + pl.name }));
        });
        if (u.record.length) meta.appendChild(h('span', { lang: 'it', text: u.record[0].replace(/; ATU.*$/, '') }));
      }
      head.appendChild(meta);
      sec.appendChild(head);

      if (u.passages.length) {
        sec.appendChild(h('div', { 'class': 'col-heads', 'aria-hidden': 'true' }, [
          h('span', { text: '§' }),
          h('span', { 'class': 'h-orig', text: t('tale.h.orig', { d: C.dialect[lang] }) }),
          h('span', { 'class': 'h-trans', text: t(tr === 'en' ? 'tale.h.trans.en' : 'tale.h.trans') })
        ]));
        u.passages.forEach(function (p) {
          var sid = 's-' + p.n.replace(/\s+/g, '').replace(/\./g, '-');
          var teiId = sid + '-tei';
          var btn = h('button', { type: 'button', 'class': 'tei-btn', 'aria-expanded': 'false', 'aria-controls': teiId, 'aria-label': t('tale.tei.show', { n: p.n }), text: t('tale.tei') });
          var en = h('div', { 'class': 'trans t-en', lang: 'en' }, [h('span', { 'class': 'tag', lang: lang, text: t('tale.tr.en') })].concat(paras(p.en)));
          if (p.note) en.appendChild(h('p', { 'class': 'tr-note', text: p.note }));
          sec.appendChild(h('div', { 'class': 'seg' + (p.start ? ' p-start' : ''), id: sid }, [
            h('div', { 'class': 'sn-col' }, [h('a', { 'class': 'sn', href: '#' + sid, 'aria-label': p.n, text: p.n }), btn]),
            h('div', { 'class': 'orig', lang: dLang }, [h('span', { 'class': 'tag', lang: lang, text: C.dialect[lang] })].concat(p.orig.map(function (x) { return glossed(x, G); }))),
            h('div', { 'class': 'trans t-it', lang: 'it' }, [h('span', { 'class': 'tag', lang: lang, text: t('tale.tr.it') })].concat(paras(p.it))),
            en,
            h('div', { 'class': 'tei-src', id: teiId, hidden: 'hidden' }, [h('pre', null, [h('code', { text: p.xml })])])
          ]));
        });
      } else {
        sec.appendChild(h('p', { 'class': 'gap-note', text: u.gap && u.gap.reason === 'copyright' ? t('gap.copyright') : (ep && !ep.transcribed && u.record.length ? t('tale.gap') : t('tale.gap.meta')) }));
      }
      if (u.kind === 'tale' || u.kind === 'variant') {
        var pl = u.refs.map(place).filter(Boolean)[0];
        if (pl) sec.appendChild(h('p', { 'class': 'colophon', lang: 'it', text: pl.name.replace(/\s*\(.*\)$/, '') }));
      }
      body.appendChild(sec);
    });
    if (id === 'sicily') body.appendChild(h('p', { 'class': 'colophon', lang: 'it', text: 'Bagheria' }));

    if (!el.getAttribute('data-wired')) {
      el.setAttribute('data-wired', '1');
      el.querySelectorAll('.seg-control button[data-view]').forEach(function (b) {
        b.addEventListener('click', function () {
          el.setAttribute('data-view', b.getAttribute('data-view'));
          el.querySelectorAll('.seg-control button[data-view]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        });
      });
      body.addEventListener('click', function (e) {
        var b = e.target.closest('.tei-btn');
        if (!b) return;
        var box = document.getElementById(b.getAttribute('aria-controls'));
        box.hidden = !box.hidden;
        b.setAttribute('aria-expanded', String(!box.hidden));
      });
      if (location.hash) { var tgt = document.getElementById(location.hash.slice(1)); if (tgt) setTimeout(function () { tgt.scrollIntoView(); }, 0); }
    }
  }

  /* -------------------------------------------------------- record sidebar for the Pitrè page (from the TEI header) */
  function wdLink(url, label) { return url ? h('a', { href: url, text: label }) : document.createTextNode(label); }
  function renderCorpusSidebar(el) {
    var C = window.CORPUS && window.CORPUS[el.getAttribute('data-corpus-sidebar')];
    if (!C) return;
    el.innerHTML = '';
    el.className = 'card record-card';
    var list = function (arr) { var d = h('dd'); arr.forEach(function (x, i) { if (i) d.appendChild(document.createTextNode(' · ')); d.appendChild(x); }); return d; };
    var tales = C.units.filter(function (u) { return u.kind === 'tale'; });
    el.appendChild(h('div', { 'class': 'card-head' }, [h('span', null, [h('span', { 'class': 'mk related', 'aria-hidden': 'true' }), t('tale.record').toLowerCase()]), h('span', { 'class': 'muted', text: C.lang })]));
    el.appendChild(h('div', { 'class': 'card-body' }, [
      h('dl', { 'class': 'fields' }, [
        h('dt', { text: t('rec.dialect') }), h('dd', { text: C.dialect[lang] }),
        h('dt', { text: t('rec.place') }), list(C.places.map(function (p) { return wdLink(p.wikidata[0], p.name); })),
        h('dt', { text: t('rec.narrators') }), list(C.persons.filter(function (p) { return !/collector/.test(p.role); }).map(function (p) { return wdLink(p.wikidata, p.name); })),
        h('dt', { text: t('rec.collector') }), list(C.persons.filter(function (p) { return /collector/.test(p.role); }).map(function (p) { return wdLink(p.wikidata, p.name); })),
        h('dt', { text: t('entry.atu') }), h('dd', { 'class': 'num', text: tales.map(function (u) { return u.atu ? u.atu.code : ''; }).filter(function (x, i, a) { return x && a.indexOf(x) === i; }).join(' · ') }),
        h('dt', { text: t('rec.tei') }), h('dd', null, [h('a', { href: base + C.file, text: C.file.replace('tei/', '') })])
      ]),
      h('h2', { 'class': 'card-sub', text: t('tale.contents').toLowerCase() }),
      h('ol', null, C.units.map(function (u) {
        return h('li', null, [h('span', { 'class': 'muted', text: u.kind === 'variant' ? '↳' : u.n }), h('a', { href: '#' + u.id, lang: 'scn', text: u.heads.orig })]);
      }))
    ]));
  }
  /* linked data and TEI rows on the two tale records */
  function sidebarLinks(el, id) {
    var C = window.CORPUS && window.CORPUS[id];
    if (!C) return;
    var body = el.querySelector('.card-body');
    var dl = h('dl', { 'class': 'fields links' });
    var add = function (label, nodes) { var d = h('dd'); nodes.forEach(function (x, i) { if (i) d.appendChild(document.createTextNode(' · ')); d.appendChild(x); }); dl.appendChild(h('dt', { text: label })); dl.appendChild(d); };
    add(t('rec.place'), C.places.map(function (p) { return wdLink(p.wikidata[0], p.name); }));
    var col = C.persons.filter(function (p) { return /collector/.test(p.role); });
    if (col.length) add(t('rec.collector'), col.map(function (p) { return wdLink(p.wikidata, p.name); }));
    var calv = (C.sources.filter(function (s) { return s.type === 'retelling'; })[0] || {}).links || [];
    if (calv.length) add(t('rec.calvino'), [wdLink(calv[0], 'Italo Calvino'), wdLink(calv[1], 'Fiabe italiane')]);
    add(t('rec.tei'), [h('a', { href: base + C.file, text: C.file.replace('tei/', '') })]);
    body.appendChild(h('h2', { 'class': 'card-sub', text: t('rec.links').toLowerCase() }));
    body.appendChild(dl);
  }

  /* -------------------------------------------------------- search (home) */
  function fold(x) { return String(x || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); }
  function searchIndex() {
    var items = [];
    E.tales.forEach(function (tl) {
      items.push({ label: tl.title, kind: t('kind.tale'), href: 'analysis/' + tl.url,
        hay: fold([tl.title, tl.region, tl.dialect.en, tl.dialect.it, tl.originalTitle, tl.source].concat(tl.places.map(function (p) { return p.name; })).join(' ')) });
      tl.episodes.forEach(function (ep) {
        items.push({ label: ep.title + (ep.originalTitle ? ' / ' + ep.originalTitle : ''), kind: tl.region + ' · ' + t('kind.episode', { n: ep.n }), href: 'analysis/' + tl.url + '#ep-' + ep.n,
          hay: fold([tl.title, ep.title, ep.originalTitle, ep.narrator, ep.geography, 'atu ' + ep.atu.code, ep.atu.label].concat(ep.places, ep.people, ep.animals, ep.actions, ep.supernatural).join(' ')) });
      });
    });
    return items;
  }
  function passageIndex() {
    var items = [];
    Object.keys(window.CORPUS || {}).forEach(function (cid) {
      var C = window.CORPUS[cid], tl = tale(cid), page = tl ? 'analysis/' + tl.url : 'analysis/pitre.html';
      C.units.forEach(function (u) {
        if (!tl && u.kind !== 'variant') items.push({ label: u.heads.orig + ' / ' + u.heads.it, kind: t('kind.pitre') + ' · n. ' + u.n, href: page + '#' + u.id, hay: fold([u.heads.orig, u.heads.it, u.heads.en, u.n, u.atu ? 'ATU ' + u.atu.code + ' ' + u.atu.label : ''].join(' ')) });
        u.passages.forEach(function (p) {
          var all = p.orig.concat(p.it, p.en).join(' ');
          items.push({ label: (u.heads.orig || u.heads.it), kind: (tl ? tl.region : t('kind.pitre')) + ' · ' + t('kind.passage', { n: p.n }), href: page + '#s-' + p.n.replace(/\s+/g, '').replace(/\./g, '-'), hay: fold(all), text: all, passage: true });
        });
      });
    });
    return items;
  }
  function snippet(text, term) {
    var f = fold(text), i = f.indexOf(term);
    if (i < 0) return '';
    var a = Math.max(0, i - 40), b = Math.min(text.length, i + term.length + 60);
    return (a ? '…' : '') + text.slice(a, b).replace(/\s+/g, ' ') + (b < text.length ? '…' : '');
  }
  function initSearch(form) {
    var input = form.querySelector('input'), list = form.parentNode.querySelector('.results'), status = form.parentNode.querySelector('.search-status');
    var current = [], sel = -1;
    function render(q) {
      var f = fold(q).trim();
      list.innerHTML = ''; sel = -1;
      if (!f) { list.hidden = true; status.textContent = ''; input.setAttribute('aria-expanded', 'false'); return; }
      var terms = f.split(/\s+/);
      current = searchIndex().concat(passageIndex()).filter(function (it) { return terms.every(function (w) { return it.hay.indexOf(w) >= 0; }); });
      current.sort(function (a, b) { return (a.passage ? 1 : 0) - (b.passage ? 1 : 0); });
      current = current.slice(0, 40);
      if (!current.length) {
        list.appendChild(h('li', null, [h('span', { style: 'display:block;padding:10px 24px', 'class': 'muted', text: t('search.none', { q: q }) })]));
      }
      current.forEach(function (it, i) {
        var lab = h('span', { lang: 'it', text: it.label });
        if (it.passage) lab.appendChild(h('span', { 'class': 'snip', text: snippet(it.text, terms[0]) }));
        list.appendChild(h('li', null, [h('a', { href: it.href, id: 'res-' + i, 'aria-selected': 'false' }, [lab, h('span', { 'class': 'kind', text: it.kind })])]));
      });
      list.hidden = false;
      input.setAttribute('aria-expanded', 'true');
      status.textContent = t('search.count', { n: current.length });
    }
    function move(d) {
      var links = list.querySelectorAll('a');
      if (!links.length) return;
      sel = (sel + d + links.length) % links.length;
      links.forEach(function (a, i) { a.setAttribute('aria-selected', String(i === sel)); });
      input.setAttribute('aria-activedescendant', links[sel].id);
    }
    input.addEventListener('input', function () { render(input.value); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); move(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); }
      else if (e.key === 'Escape') { input.value = ''; render(''); }
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      render(input.value);
      var links = list.querySelectorAll('a');
      if (links.length) location.href = links[Math.max(sel, 0)].getAttribute('href');
    });
    document.addEventListener('click', function (e) { if (!form.parentNode.contains(e.target)) { list.hidden = true; input.setAttribute('aria-expanded', 'false'); } });
  }
  document.querySelectorAll('form.searchbar').forEach(initSearch);
  document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
  document.addEventListener('df:lang', function () {
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    redrawMaps();
  });

  /* -------------------------------------------------------- boot */
  E.tales.forEach(function (tl) { if (window.CORPUS && window.CORPUS[tl.id]) tl.metrics.gulpease = window.CORPUS[tl.id].gulpease; });
  (function figures() {
    var C = window.CORPUS || {}, n = function (id) { return C[id] ? C[id].units.reduce(function (a, u) { return a + u.passages.length; }, 0) : 0; };
    var seg = document.getElementById('fig-segments'), more = document.getElementById('fig-more');
    if (seg) seg.textContent = n('friuli') + n('sicily');
    if (more && C['pitre-iii']) more.textContent = C['pitre-iii'].units.filter(function (u) { return u.kind === 'tale'; }).length;
  })();
  function renderDynamic() {
    document.querySelectorAll('[data-tale-index]').forEach(function (el) { renderIndex(el); renderIndexMore(el); });
    document.querySelectorAll('[data-structure]').forEach(renderStructure);
    document.querySelectorAll('[data-record]').forEach(renderRecord);
    document.querySelectorAll('[data-metrics]').forEach(renderMetrics);
    document.querySelectorAll('[data-tale-metrics]').forEach(renderTaleMetrics);
    document.querySelectorAll('[data-sidebar]').forEach(renderSidebar);
    document.querySelectorAll('[data-corpus-sidebar]').forEach(renderCorpusSidebar);
  }
  applyLang();
  renderDynamic();
  document.querySelectorAll('[data-reader]').forEach(renderReader);
  document.addEventListener('df:lang', function () {
    renderDynamic();
    document.querySelectorAll('[data-reader]').forEach(renderReader);
  });
})();
