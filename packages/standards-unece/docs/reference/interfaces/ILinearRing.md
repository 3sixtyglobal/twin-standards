# Interface: ILinearRing

A specified array of points which define a closed loop which is not self intersecting.

## See

https://vocabulary.uncefact.org/LinearRing

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

> **type**: `"LinearRing"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IGeographicalObjectCharacteristic`](IGeographicalObjectCharacteristic.md)[]

The geographical object characteristic associated with this linear ring.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### coordinate?

> `optional` **coordinate**: `string`

A coordinate, expressed as text, for this specified linear ring.

#### See

https://vocabulary.uncefact.org/coordinate

***

### coordinateDirectPosition?

> `optional` **coordinateDirectPosition**: [`IDirectPosition`](IDirectPosition.md)[]

The specified direct position of a coordinate for this linear ring.

#### See

https://vocabulary.uncefact.org/coordinateDirectPosition
