# Interface: IShippingMarks

Physical markings or labels on individual packages or transport units for logistics purposes.

## See

https://vocabulary.uncefact.org/ShippingMarks

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"ShippingMarks"`

JSON-LD Type.

***

### barcodeLabel?

> `optional` **barcodeLabel**: [`ILogisticsLabel`](ILogisticsLabel.md)[]

A barcode label that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/barcodeLabel

***

### logisticsShippingMarksMarkingInstructionCode?

> `optional` **logisticsShippingMarksMarkingInstructionCode**: [`MarkingInstructionCodeList`](../type-aliases/MarkingInstructionCodeList.md)[]

A code specifying a marking instruction for these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/logisticsShippingMarksMarkingInstructionCode

***

### logisticsShippingMarksPackageCategoryCode?

> `optional` **logisticsShippingMarksPackageCategoryCode**: `string`

The code specifying the package category for these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/logisticsShippingMarksPackageCategoryCode

***

### marking?

> `optional` **marking**: `string`

Marking, expressed as text, for these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/marking

***

### rFIDLabel?

> `optional` **rFIDLabel**: [`ILogisticsLabel`](ILogisticsLabel.md)[]

A Radio Frequency Identification (RFID) label that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/rFIDLabel

***

### radioactiveLabel?

> `optional` **radioactiveLabel**: [`ILogisticsLabel`](ILogisticsLabel.md)[]

Radioactive labelling that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/radioactiveLabel

***

### vINLabel?

> `optional` **vINLabel**: [`ILogisticsLabel`](ILogisticsLabel.md)[]

A Vehicle Identification Number (VIN) label that is a part of these logistics shipping marks.

#### See

https://vocabulary.uncefact.org/vINLabel
