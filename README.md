# Visualizing Collation Results
Visualization and interactive manipulation of the collation results from [CollateX](https://collatex.net/) with a jupyter notebook.

## Content
This repository contains:
- **collation results** of the *Declamations* of Calpurnius Flaccus in JSON format
- **jupyter notebook** where it is possible to modify, search or filter the collation, and save the new results
- **HTML alignment tables** to visualize not only variant readings, but also notes, links to digital facsimile, etc.

## Collation results
The files are provided as examples of collation results to use with the notebook, and do not represent the final collation of Calpurnius. One file has consecutive matching tokens joint into segments (`calpurnius-collation-joint-BCMNPH.json`), and the other file has separated tokens (`calpurnius-collation-sep-BCMNPH.json`).

## Jupyter Notebook
The notebook `interactive-collation.ipynb` is intended for exploring the collation of Calpurnius Flaccus, with interactive [widgets](https://ipywidgets.readthedocs.io/en/latest/index.html).
It allows users to:
 1. **Modify the collation**: move tokens, add or delete rows, add or del notes, and save the new JSON results
 2. **Filter the collation**: select readings from the collation in order to find unique readings of a witness, select a group of witnesses which agree together
, or find differences between two specific witnesses
 3. **Save HTML tables**: selections of readings can be saved in HTML tables, more comprehensive than the basic tables displayed within the notebook
 3. **Search the collation**
 4. **Clarify a reading**: display information about this reading such as a normalized form of the word, 
the page or folio and line where it appears in the witness, a link to the digital image of the page when available, etc.

#### How to use the notebook?
In order to use the juypter notebook, you should have python and jupyter installed. If this is not the case, follow the instructions given in the jupyter documentation: <https://jupyter.readthedocs.io/en/latest/install.html>.

Install the widgets by following the instructions here: <https://ipywidgets.readthedocs.io/en/latest/user_install.html>

Download the repository `collation-viz`. Unzip and open a command line window from the newly created folder, or [navigate](https://www.wikihow.com/Change-Directories-in-Command-Prompt) to the folder. Type the following instruction to open the notebook in a browser webpage:
```
jupyter notebook interactive-collation.ipynb
```

When the notebook is open, select `Cell > Run All`. You are now ready to explore the collation of Calpurnius Flaccus!

#### Use your own collation
If you wish to use the notebook for your own collation, add your JSON file in the `json-collations` folder. Then in the notebook, change the code of the cell `IMPORT DATA > Collation import`:

1. update the `path` variable with your own JSON file
2. change the `base_text` variable to chose a base text from your own witnesses (or leave it empty if you do not want to set a base text)
3. run the modified cell again, to upload your collation results

## HTML alignment tables
Preview of a collation table displayed in HTML [here](alignment-tables/example.html).

- hidden notes can be displayed by clicking on (i) symbols
- hidden  location (page/folio and line numbers) can be displayed for readings from the ID column
- when available, the location will link to a digital facsimile

