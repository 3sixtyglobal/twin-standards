# Interface: ILogisticsLabel

A label used for identifying goods for logistics purposes, such as a barcode, a radio frequency tag or a Vehicle
Identification Number (VIN).

## See

https://vocabulary.uncefact.org/LogisticsLabel

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

> **type**: `"LogisticsLabel"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this logistics label.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSection?

> `optional` **includedSection**: [`ISection`](ISection.md)[]

A section included in this logistics label.

#### See

https://vocabulary.uncefact.org/includedSection

***

### layoutTypeCode?

> `optional` **layoutTypeCode**: `string`

The code specifying the layout type of this logistics label.

#### See

https://vocabulary.uncefact.org/layoutTypeCode

***

### markingIndicator?

> `optional` **markingIndicator**: `boolean`

The indication of whether or not there is a marking on this logistics label.

#### See

https://vocabulary.uncefact.org/markingIndicator

***

### seriesEndId?

> `optional` **seriesEndId**: `string`

The unique identifier of the end of a series of logistics labels.

#### See

https://vocabulary.uncefact.org/seriesEndId

***

### seriesStartId?

> `optional` **seriesStartId**: `string`

The unique identifier of the start of a series of logistics labels.

#### See

https://vocabulary.uncefact.org/seriesStartId

***

### sizeCode?

> `optional` **sizeCode**: `string`

The code specifying the size of this logistics label.

#### See

https://vocabulary.uncefact.org/sizeCode
