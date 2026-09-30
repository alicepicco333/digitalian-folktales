# Digitalian Folktales

A digital edition of tales from Italo Calvino’s *Fiabe italiane*, read against the dialect versions he drew on:
**Gesù e San Pietro in Friuli** (Friulian, from Dolfo Zorzùt’s *Sot la nape…*) and **Gesù e San Pietro in Sicilia**
(Sicilian, from Giuseppe Pitrè’s *Fiabe, novelle e racconti popolari siciliani*, 1875), with five more Friulian
Jesus-and-Peter legends from the magazine *Pagine friulane* (1890–1894) and three more Sicilian tales from the same
volume of Pitrè.

Site: https://alicepicco333.github.io/digitalian-folktales/

## What is in the edition

- The dialect text beside an Italian translation (2023) and an English working translation (2026), aligned passage
  by passage. Where the English reads the dialect differently from the Italian, a note under the passage says so.
- A glossary of dialect words, shown on hover or keyboard focus; for the Pitrè tales the glosses are Pitrè’s own notes.
- The record of each tale: narrators, places of collection, sources and ATU tale types, with people and places linked
  to Wikidata. The maps use the Wikidata coordinates.
- A structured reading of each episode (itinerary, cast, resolution) and the 2023 measurements, with the Gulpease
  readability index for the Italian translations.
- A search across tales, episodes and the text of every passage, in the three languages.
- A table of the tale types told both in Friuli and in Sicily (ATU 753, 774, 804…), linking the passages.
- On each tale page the map shows only that tale’s places; the home map shows them all.

Translations made in 2026 are working translations; the guide lists the dialect readings a Friulian or Sicilian
reader could settle (docs/guide.html, “Readings to check”).

The second and third Friulian episodes are catalogued but their text is not given: Zorzùt died in 1960, so
*Sot la nape…* is in copyright in Italy until 2031 (Calvino’s own text until 2055).

## Files

- `docs/tei/*.xml`: the texts, in TEI P5. They are the source of the edition: dialect text, translations, alignment
  (each translation passage points to its original with `@corresp`), glossary, people and places.
- `tools/build_corpus.py`: builds `docs/assets/corpus.js` from the TEI (run `python tools/build_corpus.py` after
  editing a TEI file).
- `docs/assets/data.js`: the tale records, episode annotation and measurements.
- `docs/assets/site.js`, `docs/assets/site.css`: the interface, in Italian and English.

## Credits

The first prototype of the site was made by Nikolai Gorbachev ([n1kg0r](https://github.com/n1kg0r)) in 2023; texts,
translations and annotation by the project team. The 2026 edition (TEI encoding, English translation, glossary,
the Pagine friulane and Pitrè tales, linked data and the redesign) is by Alice Picco. Both were transcribed from page
images on the Internet Archive: [Pagine friulane](https://archive.org/search?query=title%3A%28pagine+friulane%29) and
[Pitrè, vol. III](https://archive.org/details/fiabenovelleera01pitrgoog).
