# Yorklib Exporter

Zotero 7 plugin that exports the currently selected items as:

- `complete/ENTRYKEY.bib` and `complete/ENTRYKEY.pdf` for items with no detected problems
- `needs_attention/ENTRYKEY.bib` and `needs_attention/ENTRYKEY.pdf` for items missing required metadata or a PDF attachment
- `misc/ENTRYKEY.bib` and `misc/ENTRYKEY.pdf` for items whose only problem is that the journal abbreviation cannot be matched to Yorklib
- `fullbib_output/completed.bib` containing all complete BibTeX entries
- `fullbib_output/unpublished.bib` containing all items sent to `needs_attention/`
- `fullbib_output/misc.bib` containing all items sent to `misc/`

The BibTeX key rule matches `doi2yorklib`:

`Last_Journal_Year_vVolume_pFirstPage`

where:

- `Last` is the first creator's family name, ASCII-normalized with spaces removed
- `Journal` in the BibTeX entry is resolved against Yorklib's journal abbreviation table, and the journal part of the key uses the corresponding Yorklib journal token
- `FirstPage` is the first page before a range separator

For ArXiv preprints, the exporter now uses `arXiv` as the journal token and falls back to:

- `vpreprint` for the volume segment
- the arXiv identifier for the `p...` segment of the key

It also writes `eprint` and `archivePrefix = {arXiv}` fields in the BibTeX entry, and ArXiv items always stay in `needs_attention/`.

For items with missing key metadata, the exporter now inserts explicit `XX...` placeholders instead of leaving key segments blank, for example `XXAUTHOR`, `XXJOURNAL`, `XXYEAR`, `XXVOL`, `XXPAGE`, or `XXARXIV`.

## Install

1. Run `./make-xpi.sh` in this directory.
2. In Zotero 7, open `Tools -> Plugins`.
3. Install the generated `.xpi`.

## Use

1. Select one or more items in Zotero.
2. Run `Tools -> Export Selected Items to Yorklib...`
3. Choose an output directory. The plugin will create `complete/`, `needs_attention/`, `misc/`, and `fullbib_output/` inside it.

## Notes

- This version exports directly from Zotero metadata. It does not call Crossref or PubMed to fill missing fields.
- The plugin writes one `.bib` file per item and also writes combined bibliography files.
- It also writes combined bibliography files to `fullbib_output/completed.bib`, `fullbib_output/unpublished.bib`, and `fullbib_output/misc.bib`.
- It writes `fullbib_output/missing_abstracts.txt` listing exported items whose abstract/`annote` field is empty.
- The first attached PDF is copied if present.
- Items are sent to `misc/` when the only problem is missing or unmapped Yorklib journal abbreviation information.
- ArXiv preprints always go to `needs_attention/`.
- Items are sent to `needs_attention/` when there are other missing metadata problems or when no PDF attachment is available.
- Items without titles are skipped.
