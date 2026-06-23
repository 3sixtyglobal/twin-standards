# UN/CEFACT

The documentation for these data types can be found [https://vocabulary.uncefact.org/about](https://vocabulary.uncefact.org/about).

## JSON-LD Schema

* Repository: [https://github.com/uncefact/vocabulary-outputs/](https://github.com/uncefact/vocabulary-outputs/)
* Source: [https://github.com/uncefact/vocabulary-outputs/blob/D23B-branch/unece.jsonld](https://github.com/uncefact/vocabulary-outputs/blob/D23B-branch/unece.jsonld)
* Local: [./D23B/unece.jsonld](./D23B/unece.jsonld)

## Schema CSV

* Web Site: [https://unece.org/trade/uncefact/unccl](https://unece.org/trade/uncefact/unccl)
* Source: [https://unece.org/sites/default/files/2024-01/CCL23B.zip](https://unece.org/sites/default/files/2024-01/CCL23B.zip)
* Local: [./D23B/CCL 23B_01JAN24.xls](./D23B/CCL%2023B_01JAN24.xls)
* Local Reduced: [./D23B/unece-reduced.csv](./D23B/unece-reduced.csv)

The reduced version is simplified to lower the processing requirements in the conversion script.

Steps:

* Open `CCL 23B_01JAN24.xls` in Excel
* Switch to the `Reference BIE` tab
* Copy and paste the required columns [`Dictionary Entry Name`, `Occurrence Min`, `Occurrence Max`] in to a new sheet
* Export new sheet as a UTF-8 comma delimited CSV to `unuece-reduced.csv`
* Remove the header lines 1 to 8

## Automation

The script [generate-interfaces.mjs](../scripts/generate-interfaces.mjs) converts these files into TypeScript definitions [../src/models](../src/models) directory.

* [../src/models/bsp](../src/models/bsp) contains the BSP Models as TypeScript interfaces
* [../src/models/lists](../src/models/lists) contains the List Codes as TypeScript const enums

The script uses the JSON-LD schema to construct the model heirarchy, and then augments those models with cardinality information from both the JSON Schema (`maxItems`) and the CSV (`occurrenceMin`, `occurrenceMax`).

The [ts-to-schema.json](../ts-to-schema.json), [UneceTypes.ts](../src/models/UneceTypes.ts) and [index.ts](../src/index.ts) are also updated to include the generated content.
