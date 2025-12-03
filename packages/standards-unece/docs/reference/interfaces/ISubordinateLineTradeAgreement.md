# Interface: ISubordinateLineTradeAgreement

The contractual terms of a subordinate line trade agreement.

## See

https://vocabulary.uncefact.org/SubordinateLineTradeAgreement

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

> **type**: `"SubordinateLineTradeAgreement"`

JSON-LD Type.

***

### additionalDocument?

> `optional` **additionalDocument**: [`IDocument`](IDocument.md)[]

An additional document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### buyerOrderDocument?

> `optional` **buyerOrderDocument**: [`IDocument`](IDocument.md)[]

A buyer generated order document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### grossPriceProductPrice?

> `optional` **grossPriceProductPrice**: [`ITradePrice`](ITradePrice.md)[]

A gross product price in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/grossPriceProductPrice

***

### netPriceProductPrice?

> `optional` **netPriceProductPrice**: [`ITradePrice`](ITradePrice.md)[]

A net product price in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/netPriceProductPrice

***

### sellerOrderDocument?

> `optional` **sellerOrderDocument**: [`IDocument`](IDocument.md)[]

The seller generated order document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument
