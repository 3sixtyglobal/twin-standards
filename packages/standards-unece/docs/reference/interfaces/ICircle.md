# Interface: ICircle

A planar surface specified as one completely round flat shape in the mathematical sense.

## See

https://vocabulary.uncefact.org/Circle

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

> **type**: `"Circle"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IGeographicalObjectCharacteristic`](IGeographicalObjectCharacteristic.md)[]

The geographical object characteristic associated with this specified circle.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation?

> `optional` **associatedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics location associated with this specified circle.

#### See

https://vocabulary.uncefact.org/associatedLocation

***

### centreGeographicalPoint?

> `optional` **centreGeographicalPoint**: [`IGeographicalPoint`](IGeographicalPoint.md)

The geographical point which defines the centre of this specified circle.

#### See

https://vocabulary.uncefact.org/centreGeographicalPoint

***

### radiusMeasure?

> `optional` **radiusMeasure**: [`IMeasureType`](IMeasureType.md)[]

The measure of the radius for this specified circle.

#### See

https://vocabulary.uncefact.org/radiusMeasure
