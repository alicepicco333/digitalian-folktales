"""Build docs/assets/corpus.js from the TEI files in docs/tei/.

The TEI files are the source of the edition's texts since 2026: the dialect text, the 2023 Italian translation,
the 2026 English working translation, the alignment of the three (each translation passage points to its
original with @corresp), the glossary in <back>, and the people and places in the header with their Wikidata
identifiers. The site reads only the generated corpus.js. Run from the repository root:

    python tools/build_corpus.py

It also computes the Gulpease readability index of each Italian translation (Lucisano and Piemontese, 1988),
the readability formula made for Italian: 89 + (300 x sentences - 10 x letters) / words.
"""
import glob
import json
import os
import re
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS = os.path.join(ROOT, 'docs')
T = '{http://www.tei-c.org/ns/1.0}'
XML = '{http://www.w3.org/XML/1998/namespace}'
ET.register_namespace('', T.strip('{}'))
DIALECT = {'fur': {'en': 'Friulian', 'it': 'friulano'}, 'scn': {'en': 'Sicilian', 'it': 'siciliano'}}


def txt(e):
    return re.sub(r'\s+', ' ', ''.join(e.itertext())).strip() if e is not None else ''


def lines(p):
    """a <p> with <lb/> -> its lines"""
    out, cur = [], [p.text or '']
    for c in p:
        if c.tag == T + 'lb':
            out.append(''.join(cur)); cur = [c.tail or '']
        else:
            cur.append(''.join(c.itertext()) + (c.tail or ''))
    out.append(''.join(cur))
    return [re.sub(r'\s+', ' ', l).strip() for l in out if l.strip()]


def source(e):
    """the element as written in the TEI file, without namespace declarations"""
    tail, e.tail = e.tail, None
    s = ET.tostring(e, encoding='unicode')
    e.tail = tail
    return re.sub(r' xmlns(:\w+)?="[^"]+"', '', s).strip()


def heads(div):
    h = {}
    for x in div.findall(T + 'head'):
        h['orig' if x.get('type') == 'original' else x.get(XML + 'lang')] = txt(x)
    return h


def gulpease(text):
    words = re.findall(r"[A-Za-zÀ-ÿ’']+", text)
    letters = sum(len(re.sub(r"[’']", '', w)) for w in words)
    sentences = max(1, len(re.findall(r'[.!?…]+(?=\s|$|[»”"])', text)))
    return round(89 + (300 * sentences - 10 * letters) / len(words), 1) if words else None


def unit(div, tid, kind):
    orig = div.find(T + "div[@type='original']")
    trans = {d.get(XML + 'lang'): d for d in div.findall(T + "div[@type='translation']")}
    u = {'id': div.get(XML + 'id'), 'kind': kind, 'n': div.get('n'), 'heads': heads(div), 'refs': (div.get('corresp') or '').replace('#', '').split(),
         'record': [], 'passages': [], 'gap': None}
    rec = div.find(T + "note[@type='record']")
    if rec is not None:
        ps = rec.findall(T + 'p')
        u['record'] = [txt(p) for p in ps] if ps else [txt(rec)]
        atu = rec.find('.//' + T + "term[@type='atu']")
        if atu is not None:
            u['atu'] = {'code': atu.get('n'), 'label': txt(atu)}
    sc = div.find(T + "note[@type='scans']")
    u['scans'] = [{'label': txt(r), 'url': r.get('target')} for r in sc.findall(T + 'ref')] if sc is not None else []
    gap = div.find(T + 'gap')
    if gap is not None:
        u['gap'] = {'reason': gap.get('reason'), 'desc': txt(gap.find(T + 'desc'))}
    if orig is None:
        return u
    by = {lang: {d.get('corresp', '').lstrip('#'): d for d in t.findall(T + "div[@type='passage']")} for lang, t in trans.items()}
    for p in orig.findall(T + "div[@type='passage']"):
        pid = p.get(XML + 'id')
        it, en = by.get('it', {}).get(pid), by.get('en', {}).get(pid)
        note = en.find(T + "note[@type='translation']") if en is not None else None
        u['passages'].append({
            'id': pid, 'n': p.get('n'), 'start': p.get('rend') == 'p-start',
            'orig': [txt(x) for x in p.findall(T + 'p')],
            'it': [txt(x) for x in it.findall(T + 'p')] if it is not None else [],
            'en': [txt(x) for x in en.findall(T + 'p')] if en is not None else [],
            'note': txt(note) if note is not None else None,
            'xml': '\n\n'.join(source(x) for x in (p, it, en) if x is not None),
        })
    u['itResp'] = (trans.get('it').get('resp') or '').lstrip('#') if trans.get('it') is not None else None
    return u


def build(path):
    tid = os.path.splitext(os.path.basename(path))[0]
    root = ET.parse(path).getroot()
    h = root.find(T + 'teiHeader')
    lang = [l.get('ident') for l in h.iter(T + 'language') if l.get('ident') in DIALECT][0]
    places = []
    for pl in h.iter(T + 'place'):
        pn = pl.find(T + 'placeName')
        lat, lon = (float(x) for x in txt(pl.find('.//' + T + 'geo')).split())
        places.append({'id': pl.get(XML + 'id'), 'name': txt(pn), 'wikidata': (pn.get('ref') or '').split(), 'lat': lat, 'lon': lon})
    persons = []
    for pe in h.iter(T + 'person'):
        pn = pe.find(T + 'persName')
        persons.append({'id': pe.get(XML + 'id'), 'name': txt(pn), 'role': txt(pe.find(T + 'note')), 'wikidata': pn.get('ref')})
    sources = [{'type': b.get('type'), 'text': txt(b), 'links': [x.get('ref') or x.get('target') for x in b.iter() if x.get('ref') or x.get('target')]}
               for b in h.find('.//' + T + 'sourceDesc').findall(T + 'bibl')]
    text = root.find(T + 'text')
    front = text.find(T + 'front')
    out = {'id': tid, 'file': 'tei/' + os.path.basename(path), 'title': txt(h.find('.//' + T + 'titleStmt/' + T + 'title')), 'lang': lang, 'dialect': DIALECT[lang],
           'places': places, 'persons': persons, 'sources': sources, 'heads': {}, 'editorial': None, 'units': [], 'glossary': []}
    if front is not None:
        out['heads'] = heads(front)
        ed = front.find(T + "div[@type='editorial']")
        if ed is not None:
            blocks = []
            for c in ed:
                if c.tag == T + 'p':
                    blocks.append({'p': lines(c)})
                elif c.tag == T + 'list':
                    blocks.append({'list': [txt(i) for i in c.findall(T + 'item')]})
            out['editorial'] = {'lang': ed.get(XML + 'lang'), 'blocks': blocks}
    for div in text.find(T + 'body'):
        kind = div.get('type')
        out['units'].append(unit(div, tid, kind))
        for v in div.findall(T + "div[@type='variant']"):
            u = unit(v, tid, 'variant')
            u['parent'] = div.get(XML + 'id')
            out['units'].append(u)
    for item in text.iter(T + 'item'):
        terms = [txt(t) for t in item.findall(T + 'term')]
        if not terms:
            continue
        g = {x.get(XML + 'lang'): txt(x) for x in item.findall(T + 'gloss')}
        b = item.find(T + 'bibl')
        out['glossary'].append({'forms': terms, 'it': g.get('it'), 'en': g.get('en'), 'src': txt(b) if b is not None else None})
    it_text = ' '.join(' '.join(p['it']) for u in out['units'] for p in u['passages'])
    out['gulpease'] = gulpease(it_text) if it_text else None
    for u in out['units']:
        t_ = ' '.join(' '.join(p['it']) for p in u['passages'])
        u['gulpease'] = gulpease(t_) if t_ else None
        u['words'] = {k: sum(len(' '.join(p[k]).split()) for p in u['passages']) for k in ('orig', 'it', 'en')}
    return out


def main():
    corpus = {os.path.splitext(os.path.basename(p))[0]: build(p) for p in sorted(glob.glob(os.path.join(DOCS, 'tei', '*.xml')))}
    js = ('/* Generated by tools/build_corpus.py from docs/tei/*.xml. Do not edit by hand. */\n'
          'window.CORPUS = ' + json.dumps(corpus, ensure_ascii=False, separators=(',', ':')) + ';\n')
    with open(os.path.join(DOCS, 'assets', 'corpus.js'), 'w', encoding='utf-8', newline='\n') as f:
        f.write(js)
    for k, c in corpus.items():
        n = sum(len(u['passages']) for u in c['units'])
        print(f"{k:10s} {len(c['units'])} units, {n} passages, {len(c['glossary'])} glossary entries, Gulpease (Italian) {c['gulpease']}")


if __name__ == '__main__':
    main()
