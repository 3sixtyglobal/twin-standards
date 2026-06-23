# UN/LOCODE

Information about this data can be found here: [https://vocabulary.uncefact.org/unlocode-about](https://vocabulary.uncefact.org/unlocode-about)

Raw CSV Data: [https://unece.org/trade/cefact/UNLOCODE-Download](https://unece.org/trade/cefact/UNLOCODE-Download)

JSON-LD Data Sources:

- [Countries](https://github.com/uncefact/vocabulary-outputs/blob/main/unlocode-countries.jsonld)
- [Functions](https://github.com/uncefact/vocabulary-outputs/blob/main/unlocode-functions.jsonld)
- [Subdivisions](https://github.com/uncefact/vocabulary-outputs/blob/main/unlocode-subdivisions.jsonld)
- [Locode](https://github.com/uncefact/vocabulary-outputs/blob/main/unlocode.jsonld)

## Conversion

Download the latest raw .csv files.

Run `node country-split.mjs` from this folder, this will split the country codes and subdivisions into their own .csv file in the `countries/csv` and `subdivisions/csv` folders.

Run `npm run build:country-to-json.mjs` from the package root, this will read the .csv files and convert them to .json in the `json` folder and also output a compressed version .json.gz of the file in `../../src/data/`.
