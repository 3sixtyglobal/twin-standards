# Interface: IUneceProductGroup

A grouping of trade products.

## See

https://vocabulary.uncefact.org/ProductGroup

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

> **type**: `"ProductGroup"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this trade product group.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSupplyChainTradeLineItem?

> `optional` **includedSupplyChainTradeLineItem**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)[]

A supply chain trade line item which is included in this trade product group.

#### See

https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem

***

### includedTradeProduct?

> `optional` **includedTradeProduct**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product included in this trade product group.

#### See

https://vocabulary.uncefact.org/includedTradeProduct

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this trade product group.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this trade product group.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### subordinateProductGroup?

> `optional` **subordinateProductGroup**: `IUneceProductGroup`[]

A product group subordinate to this trade product group.

#### See

https://vocabulary.uncefact.org/subordinateProductGroup
