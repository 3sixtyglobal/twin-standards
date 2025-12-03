# Interface: IGeographicalPoint

A point on the surface of the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalPoint

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

> **type**: `"GeographicalPoint"`

JSON-LD Type.

***

### associatedDirectPositionList?

> `optional` **associatedDirectPositionList**: `string`

The direct position list associated with this geographical point.

#### See

https://vocabulary.uncefact.org/associatedDirectPositionList

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IGeographicalObjectCharacteristic`](IGeographicalObjectCharacteristic.md)[]

The geographical object characteristic associated with this geographical point.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation?

> `optional` **associatedLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics location associated with this specified geographical point.

#### See

https://vocabulary.uncefact.org/associatedLocation
