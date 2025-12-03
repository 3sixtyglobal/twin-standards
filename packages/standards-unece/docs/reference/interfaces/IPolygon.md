# Interface: IPolygon

A planar surface, defined by one exterior boundary and zero or more interior boundaries. Each interior boundary defines
a hole in the polygon.

## See

https://vocabulary.uncefact.org/Polygon

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

> **type**: `"Polygon"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IGeographicalObjectCharacteristic`](IGeographicalObjectCharacteristic.md)[]

The geographical object characteristic associated with this specified polygon.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation?

> `optional` **associatedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics location associated with this specified polygon.

#### See

https://vocabulary.uncefact.org/associatedLocation

***

### exteriorLinearRing

> **exteriorLinearRing**: [`ILinearRing`](ILinearRing.md)

The exterior linear specified ring for this polygon.

#### See

https://vocabulary.uncefact.org/exteriorLinearRing

***

### interiorLinearRing?

> `optional` **interiorLinearRing**: [`ILinearRing`](ILinearRing.md)[]

An interior linear ring specified for this polygon.

#### See

https://vocabulary.uncefact.org/interiorLinearRing
