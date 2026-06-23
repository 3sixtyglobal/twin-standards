# Interface: IUneceProductGroup

A grouping of trade products.

## See

https://vocabulary.uncefact.org/ProductGroup

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductGroup"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this trade product group.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedSupplyChainTradeLineItem? {#includedsupplychaintradelineitem}

> `optional` **includedSupplyChainTradeLineItem?**: [`IUneceSupplyChainTradeLineItem`](IUneceSupplyChainTradeLineItem.md)[]

A supply chain trade line item which is included in this trade product group.

#### See

https://vocabulary.uncefact.org/includedSupplyChainTradeLineItem

***

### includedTradeProduct? {#includedtradeproduct}

> `optional` **includedTradeProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product included in this trade product group.

#### See

https://vocabulary.uncefact.org/includedTradeProduct

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this trade product group.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this trade product group.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### subordinateProductGroup? {#subordinateproductgroup}

> `optional` **subordinateProductGroup?**: `IUneceProductGroup`[]

A product group subordinate to this trade product group.

#### See

https://vocabulary.uncefact.org/subordinateProductGroup
