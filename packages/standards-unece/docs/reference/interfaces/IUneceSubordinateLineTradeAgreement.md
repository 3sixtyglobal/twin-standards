# Interface: IUneceSubordinateLineTradeAgreement

The contractual terms of a subordinate line trade agreement.

## See

https://vocabulary.uncefact.org/SubordinateLineTradeAgreement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

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

> `optional` **additionalDocument**: [`IUneceDocument`](IUneceDocument.md)

An additional document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/additionalDocument

***

### buyerOrderDocument?

> `optional` **buyerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

A buyer generated order document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/buyerOrderDocument

***

### grossPriceProductPrice?

> `optional` **grossPriceProductPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)

A gross product price in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/grossPriceProductPrice

***

### netPriceProductPrice?

> `optional` **netPriceProductPrice**: [`IUneceTradePrice`](IUneceTradePrice.md)

A net product price in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/netPriceProductPrice

***

### sellerOrderDocument?

> `optional` **sellerOrderDocument**: [`IUneceDocument`](IUneceDocument.md)

The seller generated order document referenced in this subordinate line trade agreement.

#### See

https://vocabulary.uncefact.org/sellerOrderDocument
