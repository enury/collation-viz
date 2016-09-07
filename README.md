# Visualizing Collation Results
### Visualization and interactive manipulation of the collation results from [CollateX](collatex.net) with a jupyter notebook.


## Content
This repository contains
- **collation results** of the *Declamations* of Calpurnius Flaccus in JSON format
- **jupyter notebook** where it is possible to modify, search or filter the collation, and save the new results
- **HTML alignment tables** to visualize not only variant readings, but also notes, links to digital facsimile, etc.

## Collation results
The files are provided as examples of collation results to use with the notebook, and do not represent the final collation of Calpurnius. One file has consecutive matching tokens joint into segments (`calpurnius-collation-joint-BCMNPH.json`), and the other file has separated tokens (`calpurnius-collation-sep-BCMNPH.json`).

## Jupyter Notebook
The notebook is intended for exploring the collation of Calpurnius Flaccus, with interactive [widgets](http://ipywidgets.readthedocs.io/en/latest/index.html).
It allows users to:
 1. **Modify the collation**: move tokens, add or delete rows, add or del notes, and save the new JSON results
 2. **Filter the collation**: select readings from the collation in order to find unique readings of a witness, select a group of witnesses which agree together
, or find differences between two specific witnesses
 3. **Save HTML tables**: selections of readings can be saved in HTML tables, more comprehensive than the basic tables displaed within the notebook
 3. **Search the collation**
 4. **Clarify a reading**: display information about this reading such as a normalized form of the word, 
the page or folio and line where it appaears in the witness, a link to the digital image of the page when available

## HTML alignment tables
Preview of a collation table displayed in HTML [here](https://htmlpreview.github.io/?https://github.com/enury/collation-viz/blob/master/alignment-tables/example.html).

- Hidden notes can be displayed by clicking on (i) symbols
- Hidden  location (page/folio and line numbers) can be displayed for readings from the ID column
- When available, the location will link to a digital facsimile

