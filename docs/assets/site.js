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
    'home.s1.note': { en: 'Circles mark the places of collection named in each record (positions approximate). Select a region to open its tale.', it: 'I cerchi indicano i luoghi di rilevamento registrati in ogni scheda (posizioni approssimative). Seleziona una regione per aprire la fiaba.' },
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
    'cmp.caveat': { en: 'Values as computed by the project team and published in the original edition. The repository does not state whether they were computed on the dialect text or on the translation, and readability formulas calibrated on English are best read comparatively. The hard-word count grows with the length of the text.', it: 'Valori calcolati dal gruppo di progetto e pubblicati nell’edizione originale. Il repository non indica se siano stati calcolati sul testo dialettale o sulla traduzione; le formule di leggibilità tarate sull’inglese vanno lette in senso comparativo. Il numero di parole difficili cresce con la lunghezza del testo.' },
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
        subs.forEach(function (sub, i) {
          gPts.appendChild(s('text', { x: lx, y: ly + fs * (1.15 + i * 1.05), 'class': 'label sub', style: 'font-size:' + (fs * 0.85) + 'px;stroke-width:' + (4 * k) + 'px', text: sub }));
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

  /* -------------------------------------------------------- structure */
  function facet(label, content) {
    return [h('dt', { text: label }), content];
  }
  function listDD(items, noneKey) {
    if (!items || !items.length) return h('dd', { 'class': 'none', text: t(noneKey || 'f.none') });
    return h('dd', { text: items.join(', ') });
  }
  function epCard(tl, ep, shared) {
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
        h('h4', { 'class': 'ep-title', lang: 'it', text: ep.title }),
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
      tl.episodes.forEach(function (ep) { col.appendChild(epCard(tl, ep, shared)); });
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
      h('h4', { text: t('tale.contents').toLowerCase() }),
      h('ol', null, tl.episodes.map(function (ep) {
        return h('li', null, [h('span', { 'class': 'muted', text: ep.n }), h('a', { href: '#ep-' + ep.n, lang: 'it', text: ep.title })]);
      }))
    ]));
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

  function renderReader(el) {
    var id = el.getAttribute('data-reader');
    var tl = tale(id), al = E.alignment[id];
    var dLang = tl.dialectLang;
    Promise.all([al.original, al.translation].map(function (f) {
      return fetch(base + 'texts/' + f).then(function (r) { if (!r.ok) throw new Error(f); return r.text(); });
    })).then(function (res) {
      var O = lines(res[0]), T = lines(res[1]);
      var body = el.querySelector('.reader-body');
      body.innerHTML = '';

      if (al.preface) {
        var pre = O.slice(al.preface[0], al.preface[1] + 1);
        var note = h('aside', { 'class': 'editorial', lang: 'it' }, [h('p', { 'class': 'kicker', 'data-i18n': 'tale.editorial', lang: lang, text: t('tale.editorial') })]);
        var buf = [], list = null;
        var flush = function () { if (buf.length) { var p = h('p', { 'class': 'serif' }); buf.forEach(function (l, i) { if (i) p.appendChild(h('br')); p.appendChild(linkify(l)); }); note.appendChild(p); buf = []; } };
        pre.forEach(function (l) {
          var m = /^(\d)\.\s+(.*)$/.exec(l);
          if (m) { flush(); if (!list) { list = h('ol'); note.appendChild(list); } list.appendChild(h('li', { text: m[2] })); }
          else if (!l.trim()) { flush(); list = null; }
          else { list = null; buf.push(l); }
        });
        flush();
        body.appendChild(note);
      }

      var titleO = al.titleLine ? O[al.titleLine[0]].trim() : null;
      var titleT = al.titleLine ? T[al.titleLine[1]].trim() : null;
      if (titleO) {
        body.appendChild(h('div', { 'class': 'work-title' }, [
          h('h2', { lang: dLang, text: titleO }),
          h('p', { lang: 'it', text: titleT })
        ]));
      }

      var byN = {};
      al.episodes.forEach(function (ea) { byN[ea.n] = ea; });
      tl.episodes.forEach(function (ep) {
        var ea = byN[ep.n];
        var sec = h('section', { 'class': 'episode', id: 'ep-' + ep.n, 'aria-labelledby': 'ep-' + ep.n + '-h' });
        var head = h('div', { 'class': 'episode-head' });
        head.appendChild(h('div', { 'class': 'ep-no', text: t('tale.episode', { n: ep.n }) + ' · ATU ' + ep.atu.code }));
        var hO = ea && ea.titleLine && ea.titleLine[0] !== null ? O[ea.titleLine[0]].replace(/^\d\.\s*/, '').trim() : (ep.originalTitle || ep.title);
        var hT = ea && ea.titleLine && ea.titleLine[1] !== null ? T[ea.titleLine[1]].trim() : (ep.originalTitle ? ep.title : null);
        head.appendChild(h('h3', { id: 'ep-' + ep.n + '-h', lang: ep.originalTitle || (ea && ea.titleLine) ? dLang : 'it', text: hO }));
        head.appendChild(hT ? h('p', { 'class': 't-title', lang: 'it', text: hT }) : h('span'));
        var meta = h('div', { 'class': 'src-meta', lang: 'it' });
        if (ea && ea.metaLines) {
          O.slice(ea.metaLines[0], ea.metaLines[1] + 1).forEach(function (l) { if (l.trim()) meta.appendChild(h('span', { text: l.replace(/\s+/g, ' ').replace(/:(\S)/, ': $1').trim() })); });
        } else {
          meta.removeAttribute('lang');
          [t('rec.narrator') + ': ' + ep.narrator, t('rec.place') + ': ' + ep.geography, 'ATU ' + ep.atu.code + ' ' + ep.atu.label].forEach(function (x) { meta.appendChild(h('span', { text: x })); });
        }
        head.appendChild(meta);
        sec.appendChild(head);

        if (ea && ea.pairs.length) {
          sec.appendChild(h('div', { 'class': 'col-heads', 'aria-hidden': 'true' }, [
            h('span', { text: '§' }),
            h('span', { 'class': 'h-orig', text: t('tale.h.orig', { d: tl.dialect[lang] }) }),
            h('span', { 'class': 'h-trans', text: t('tale.h.trans') })
          ]));
          ea.pairs.forEach(function (pair, i) {
            var sid = 's-' + ep.n + '-' + (i + 1);
            sec.appendChild(h('div', { 'class': 'seg' + (pair[2] ? ' p-start' : ''), id: sid }, [
              h('a', { 'class': 'sn', href: '#' + sid, 'aria-label': ep.n + '.' + (i + 1), text: ep.n + '.' + (i + 1) }),
              h('div', { 'class': 'orig', lang: dLang }, [h('span', { 'class': 'tag', lang: lang, text: tl.dialect[lang] })].concat(paras(pair[0].map(function (k) { return O[k]; })))),
              h('div', { 'class': 'trans', lang: 'it' }, [h('span', { 'class': 'tag', lang: lang, text: t('tale.trans') })].concat(paras(pair[1].map(function (k) { return T[k]; }))))
            ]));
          });
        } else {
          sec.appendChild(h('p', { 'class': 'gap-note', text: ea ? t('tale.gap') : t('tale.gap.meta') }));
        }
        body.appendChild(sec);
      });
      if (al.colophonLine) body.appendChild(h('p', { 'class': 'colophon', lang: 'it', text: T[al.colophonLine[1]].trim() }));
      if (location.hash) { var tgt = document.getElementById(location.hash.slice(1)); if (tgt) tgt.scrollIntoView(); }
    }).catch(function () {
      el.querySelector('.reader-body').appendChild(h('p', { 'class': 'gap-note', text: t('tale.loadfail') }));
    });

    el.querySelectorAll('.seg-control button').forEach(function (b) {
      b.addEventListener('click', function () {
        el.setAttribute('data-view', b.getAttribute('data-view'));
        el.querySelectorAll('.seg-control button').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      });
    });
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
  function initSearch(form) {
    var input = form.querySelector('input'), list = form.parentNode.querySelector('.results'), status = form.parentNode.querySelector('.search-status');
    var current = [], sel = -1;
    function render(q) {
      var f = fold(q).trim();
      list.innerHTML = ''; sel = -1;
      if (!f) { list.hidden = true; status.textContent = ''; input.setAttribute('aria-expanded', 'false'); return; }
      var terms = f.split(/\s+/);
      current = searchIndex().filter(function (it) { return terms.every(function (w) { return it.hay.indexOf(w) >= 0; }); });
      if (!current.length) {
        list.appendChild(h('li', null, [h('span', { style: 'display:block;padding:10px 24px', 'class': 'muted', text: t('search.none', { q: q }) })]));
      }
      current.forEach(function (it, i) {
        list.appendChild(h('li', null, [h('a', { href: it.href, id: 'res-' + i, 'aria-selected': 'false' }, [h('span', { lang: 'it', text: it.label }), h('span', { 'class': 'kind', text: it.kind })])]));
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
  function renderDynamic() {
    document.querySelectorAll('[data-tale-index]').forEach(renderIndex);
    document.querySelectorAll('[data-structure]').forEach(renderStructure);
    document.querySelectorAll('[data-record]').forEach(renderRecord);
    document.querySelectorAll('[data-metrics]').forEach(renderMetrics);
    document.querySelectorAll('[data-tale-metrics]').forEach(renderTaleMetrics);
    document.querySelectorAll('[data-sidebar]').forEach(renderSidebar);
  }
  applyLang();
  renderDynamic();
  document.querySelectorAll('[data-reader]').forEach(renderReader);
  document.addEventListener('df:lang', function () {
    renderDynamic();
    /* reader: re-label column heads and gap notes without refetching */
    document.querySelectorAll('[data-reader]').forEach(function (el) {
      var tl = tale(el.getAttribute('data-reader'));
      el.querySelectorAll('.h-orig').forEach(function (x) { x.textContent = t('tale.h.orig', { d: tl.dialect[lang] }); });
      el.querySelectorAll('.h-trans').forEach(function (x) { x.textContent = t('tale.h.trans'); });
      el.querySelectorAll('.orig .tag').forEach(function (x) { x.textContent = tl.dialect[lang]; x.setAttribute('lang', lang); });
      el.querySelectorAll('.trans .tag').forEach(function (x) { x.textContent = t('tale.trans'); x.setAttribute('lang', lang); });
      el.querySelectorAll('.episode .ep-no').forEach(function (x) { x.textContent = x.textContent.replace(/^(Episode|Episodio)/, lang === 'it' ? 'Episodio' : 'Episode'); });
    });
  });
})();
