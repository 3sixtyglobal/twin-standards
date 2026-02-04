# Interface: IUneceReferencePrice

A reference to a sum of money for which something is or may be bought or sold.

## See

https://vocabulary.uncefact.org/ReferencePrice

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

> **type**: `"ReferencePrice"`

JSON-LD Type.

***

### basisQuantity?

> `optional` **basisQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

A quantity on which the reference price is based.

#### See

https://vocabulary.uncefact.org/basisQuantity

***

### chargeAmount?

> `optional` **chargeAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value of a charged reference price.

#### See

https://vocabulary.uncefact.org/chargeAmount

***

### comparisonMethodCode?

> `optional` **comparisonMethodCode**: `string`

The code specifying the comparison method for this reference price.

#### See

https://vocabulary.uncefact.org/comparisonMethodCode

***

### netPriceIndicator?

> `optional` **netPriceIndicator**: `boolean`

An indication of whether or not the reference price is a net price.

#### See

https://vocabulary.uncefact.org/netPriceIndicator
