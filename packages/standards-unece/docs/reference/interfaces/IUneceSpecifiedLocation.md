# Interface: IUneceSpecifiedLocation

A specified physical location or place.

## See

https://vocabulary.uncefact.org/SpecifiedLocation

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

> **type**: `"SpecifiedLocation"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description for this specified location.

#### See

https://vocabulary.uncefact.org/description

***

### directions?

> `optional` **directions**: `string`

Directions, expressed as text, for this specified location.

#### See

https://vocabulary.uncefact.org/directions

***

### geopoliticalRegionCode?

> `optional` **geopoliticalRegionCode**: `string`

The code specifying the geopolitical region for this specified location.

#### See

https://vocabulary.uncefact.org/geopoliticalRegionCode

***

### geopoliticalRegionName?

> `optional` **geopoliticalRegionName**: `string`

The name, expressed as text, of the geopolitical region for this specified location.

#### See

https://vocabulary.uncefact.org/geopoliticalRegionName

***

### mapURIId?

> `optional` **mapURIId**: `string`

The identifier of a URI (Uniform Resource Identifier) for a map of this specified location.

#### See

https://vocabulary.uncefact.org/mapURIId

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified location.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedLocationTypeCode?

> `optional` **specifiedLocationTypeCode**: `string`

The code specifying the type of this specified location.

#### See

https://vocabulary.uncefact.org/specifiedLocationTypeCode

***

### specifiedTradeAddress?

> `optional` **specifiedTradeAddress**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

A address specified for this location.

#### See

https://vocabulary.uncefact.org/specifiedTradeAddress
