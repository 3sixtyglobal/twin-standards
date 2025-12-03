# Interface: IProductLabel

A label, such as a garment label or a radio frequency tag, used for identifying a product.

## See

https://vocabulary.uncefact.org/ProductLabel

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

> **type**: `"ProductLabel"`

JSON-LD Type.

***

### attachmentDateTime?

> `optional` **attachmentDateTime**: `string`

The date, time, date time, or other date time value, for the attachment of this product label.

#### See

https://vocabulary.uncefact.org/attachmentDateTime

***

### barcodeId?

> `optional` **barcodeId**: `string`

The barcode identifier of this product label.

#### See

https://vocabulary.uncefact.org/barcodeId

***

### brandName?

> `optional` **brandName**: `string`

The brand name, expressed as text, on this product label.

#### See

https://vocabulary.uncefact.org/brandName

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this product label.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this product label.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedAssertion?

> `optional` **includedAssertion**: [`IAssertion`](IAssertion.md)[]

A sustainability assertion included on this product label.

#### See

https://vocabulary.uncefact.org/includedAssertion

***

### layoutTypeCode?

> `optional` **layoutTypeCode**: `string`

The code specifying the layout type of this product label.

#### See

https://vocabulary.uncefact.org/layoutTypeCode

***

### name?

> `optional` **name**: `string`

The name, expressed as a text, of this product label.

#### See

https://vocabulary.uncefact.org/name

***

### seriesEndId?

> `optional` **seriesEndId**: `string`

The identifier of the end of a series of product labels.

#### See

https://vocabulary.uncefact.org/seriesEndId

***

### seriesStartId?

> `optional` **seriesStartId**: `string`

The identifier of the start of a series of product labels.

#### See

https://vocabulary.uncefact.org/seriesStartId

***

### sizeCode?

> `optional` **sizeCode**: `string`

The code specifying the size of this product label.

#### See

https://vocabulary.uncefact.org/sizeCode

***

### tagTypeCode?

> `optional` **tagTypeCode**: `string`

The code specifying the type of tag for this product label.

#### See

https://vocabulary.uncefact.org/tagTypeCode
