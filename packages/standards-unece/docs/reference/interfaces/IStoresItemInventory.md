# Interface: IStoresItemInventory

A stores item, such as for onboard use during a journey.

## See

https://vocabulary.uncefact.org/StoresItemInventory

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

> **type**: `"StoresItemInventory"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this stores inventory item.

#### See

https://vocabulary.uncefact.org/description

***

### onboardQuantity?

> `optional` **onboardQuantity**: [`IQuantityType`](IQuantityType.md)[]

An onboard quantity for this stores inventory item.

#### See

https://vocabulary.uncefact.org/onboardQuantity

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for this stores inventory item.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A location specified for this stores inventory item.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of stores inventory item.

#### See

https://vocabulary.uncefact.org/typeCode
