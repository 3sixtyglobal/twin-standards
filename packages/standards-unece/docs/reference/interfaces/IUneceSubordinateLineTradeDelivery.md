# Interface: IUneceSubordinateLineTradeDelivery

Supply chain shipping arrangements and movement of products and or services including despatch and delivery.

## See

https://vocabulary.uncefact.org/SubordinateLineTradeDelivery

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

> **type**: `"SubordinateLineTradeDelivery"`

JSON-LD Type.

***

### actualDeliveryEvent?

> `optional` **actualDeliveryEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

An actual delivery event for this subordinate line trade delivery.

#### See

https://vocabulary.uncefact.org/actualDeliveryEvent

***

### billedQuantity?

> `optional` **billedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

A billed quantity of this subordinate line trade delivery.

#### See

https://vocabulary.uncefact.org/billedQuantity

***

### includedPackaging?

> `optional` **includedPackaging**: [`IUneceSupplyChainPackaging`](IUneceSupplyChainPackaging.md)[]

Packaging included in this subordinate line trade delivery.

#### See

https://vocabulary.uncefact.org/includedPackaging

***

### packageQuantity?

> `optional` **packageQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of packages in this subordinate line trade delivery.

#### See

https://vocabulary.uncefact.org/packageQuantity

***

### perPackageUnitQuantity?

> `optional` **perPackageUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of units per package in this subordinate line trade delivery.

#### See

https://vocabulary.uncefact.org/perPackageUnitQuantity

***

### productUnitQuantity?

> `optional` **productUnitQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of product units in this subordinate line trade delivery.

#### See

https://vocabulary.uncefact.org/productUnitQuantity
