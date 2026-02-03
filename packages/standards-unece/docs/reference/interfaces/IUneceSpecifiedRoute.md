# Interface: IUneceSpecifiedRoute

A specified way or course taken from one location to another.

## See

https://vocabulary.uncefact.org/SpecifiedRoute

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

> **type**: `"SpecifiedRoute"`

JSON-LD Type.

***

### departurePoint?

> `optional` **departurePoint**: `string`

A departure point, expressed as text, for this specified route.

#### See

https://vocabulary.uncefact.org/departurePoint

***

### description?

> `optional` **description**: `string`

A textual description of this specified route.

#### See

https://vocabulary.uncefact.org/description

***

### linearUnitDistanceMeasure?

> `optional` **linearUnitDistanceMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The measure of the distance of this specified route.

#### See

https://vocabulary.uncefact.org/linearUnitDistanceMeasure

***

### mapURIId?

> `optional` **mapURIId**: `string`

The Uniform Resource Identifier (URI) of the map of this specified route.

#### See

https://vocabulary.uncefact.org/mapURIId

***

### routeType?

> `optional` **routeType**: `string`

A type, expressed as text, for this specified route.

#### See

https://vocabulary.uncefact.org/routeType

***

### securityLevelCode?

> `optional` **securityLevelCode**: `string`

The code specifying the security level of this specified route.

#### See

https://vocabulary.uncefact.org/securityLevelCode

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this specified route.

#### See

https://vocabulary.uncefact.org/statusCode

***

### transportMeans?

> `optional` **transportMeans**: `string`

A transport means, expressed as text, for this specified route.

#### See

https://vocabulary.uncefact.org/transportMeans
