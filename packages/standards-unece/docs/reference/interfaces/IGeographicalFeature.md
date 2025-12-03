# Interface: IGeographicalFeature

Representation of real world phenomenon associated with a location relative to the Earth, such as cities, buildings,
roads, rivers, forests and lakes.

## See

https://vocabulary.uncefact.org/GeographicalFeature

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

> **type**: `"GeographicalFeature"`

JSON-LD Type.

***

### collectionIndicator?

> `optional` **collectionIndicator**: `boolean`

The indication of whether or not this specified geographical feature is a collection of features.

#### See

https://vocabulary.uncefact.org/collectionIndicator

***

### coordinateReferenceSystemId?

> `optional` **coordinateReferenceSystemId**: `string`

The identifier of the coordinate reference system for this geographical feature.

#### See

https://vocabulary.uncefact.org/coordinateReferenceSystemId

***

### description?

> `optional` **description**: `string`

The textual description of this specified geographical feature.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this specified geographical feature.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedCircle?

> `optional` **includedCircle**: [`ICircle`](ICircle.md)[]

A circle included in this specified geographical feature.

#### See

https://vocabulary.uncefact.org/includedCircle

***

### includedGeographicalGrid?

> `optional` **includedGeographicalGrid**: [`IGeographicalGrid`](IGeographicalGrid.md)[]

The geographical grid included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalGrid

***

### includedGeographicalLine?

> `optional` **includedGeographicalLine**: [`IGeographicalLine`](IGeographicalLine.md)[]

The geographical line included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalLine

***

### includedGeographicalMultiCurve?

> `optional` **includedGeographicalMultiCurve**: [`IGeographicalMultiCurve`](IGeographicalMultiCurve.md)[]

The geographical multi-curve included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalMultiCurve

***

### includedGeographicalMultiPoint?

> `optional` **includedGeographicalMultiPoint**: [`IGeographicalMultiPoint`](IGeographicalMultiPoint.md)[]

The geographical multi-point included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalMultiPoint

***

### includedGeographicalMultiSurface?

> `optional` **includedGeographicalMultiSurface**: [`IGeographicalMultiSurface`](IGeographicalMultiSurface.md)[]

The geographical multi-surface included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalMultiSurface

***

### includedGeographicalPoint?

> `optional` **includedGeographicalPoint**: [`IGeographicalPoint`](IGeographicalPoint.md)[]

The geographical point included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalPoint

***

### includedGeographicalSurface?

> `optional` **includedGeographicalSurface**: [`IGeographicalSurface`](IGeographicalSurface.md)[]

The geographical surface included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalSurface

***

### includedPolygon?

> `optional` **includedPolygon**: [`IPolygon`](IPolygon.md)

The polygon included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedPolygon

***

### name?

> `optional` **name**: `string`

The name, expressed as text, of this specified geographical feature.

#### See

https://vocabulary.uncefact.org/name

***

### usedCoordinateReferenceSystem?

> `optional` **usedCoordinateReferenceSystem**: [`ICoordinateReferenceSystem`](ICoordinateReferenceSystem.md)[]

The CS (Coordinate System) engineering coordinate reference system used for this specified geographical feature.

#### See

https://vocabulary.uncefact.org/usedCoordinateReferenceSystem

***

### usedCoordinateSourceSystem?

> `optional` **usedCoordinateSourceSystem**: [`ICoordinateSourceSystem`](ICoordinateSourceSystem.md)[]

The geographical coordinate source system used for this specified geographical feature.

#### See

https://vocabulary.uncefact.org/usedCoordinateSourceSystem
