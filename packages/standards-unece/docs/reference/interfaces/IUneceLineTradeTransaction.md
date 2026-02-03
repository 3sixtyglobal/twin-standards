# Interface: IUneceLineTradeTransaction

A group of trade line items, trade line agreement, trade line delivery and trade line settlement details.

## See

https://vocabulary.uncefact.org/LineTradeTransaction

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

> **type**: `"LineTradeTransaction"`

JSON-LD Type.

***

### applicableLineTradeAgreement?

> `optional` **applicableLineTradeAgreement**: [`IUneceLineTradeAgreement`](IUneceLineTradeAgreement.md)

A trade agreement applicable to this line trade transaction, such as payment or delivery terms.

#### See

https://vocabulary.uncefact.org/applicableLineTradeAgreement

***

### applicableLineTradeDelivery?

> `optional` **applicableLineTradeDelivery**: [`IUneceLineTradeDelivery`](IUneceLineTradeDelivery.md)

A trade delivery applicable to this line trade transaction.

#### See

https://vocabulary.uncefact.org/applicableLineTradeDelivery

***

### includedTradeProduct?

> `optional` **includedTradeProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)

A trade product included in this line trade transaction.

#### See

https://vocabulary.uncefact.org/includedTradeProduct
