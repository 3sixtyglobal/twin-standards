# Interface: IUneceGeographicalFeature

Representation of real world phenomenon associated with a location relative to the Earth, such as cities, buildings,
roads, rivers, forests and lakes.

## See

https://vocabulary.uncefact.org/GeographicalFeature

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GeographicalFeature"`

JSON-LD Type.

***

### collectionIndicator? {#collectionindicator}

> `optional` **collectionIndicator**: `boolean`

The indication of whether or not this specified geographical feature is a collection of features.

#### See

https://vocabulary.uncefact.org/collectionIndicator

***

### coordinateReferenceSystemId? {#coordinatereferencesystemid}

> `optional` **coordinateReferenceSystemId**: `string` \| `IJsonLdValueObject`

The identifier of the coordinate reference system for this geographical feature.

#### See

https://vocabulary.uncefact.org/coordinateReferenceSystemId

***

### description? {#description}

> `optional` **description**: `string`

The textual description of this specified geographical feature.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this specified geographical feature.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedCircle? {#includedcircle}

> `optional` **includedCircle**: [`IUneceCircle`](IUneceCircle.md)[]

A circle included in this specified geographical feature.

#### See

https://vocabulary.uncefact.org/includedCircle

***

### includedGeographicalGrid? {#includedgeographicalgrid}

> `optional` **includedGeographicalGrid**: [`IUneceGeographicalGrid`](IUneceGeographicalGrid.md)

The geographical grid included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalGrid

***

### includedGeographicalLine? {#includedgeographicalline}

> `optional` **includedGeographicalLine**: [`IUneceGeographicalLine`](IUneceGeographicalLine.md)

The geographical line included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalLine

***

### includedGeographicalMultiCurve? {#includedgeographicalmulticurve}

> `optional` **includedGeographicalMultiCurve**: [`IUneceGeographicalMultiCurve`](IUneceGeographicalMultiCurve.md)

The geographical multi-curve included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalMultiCurve

***

### includedGeographicalMultiPoint? {#includedgeographicalmultipoint}

> `optional` **includedGeographicalMultiPoint**: [`IUneceGeographicalMultiPoint`](IUneceGeographicalMultiPoint.md)

The geographical multi-point included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalMultiPoint

***

### includedGeographicalMultiSurface? {#includedgeographicalmultisurface}

> `optional` **includedGeographicalMultiSurface**: [`IUneceGeographicalMultiSurface`](IUneceGeographicalMultiSurface.md)

The geographical multi-surface included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalMultiSurface

***

### includedGeographicalPoint? {#includedgeographicalpoint}

> `optional` **includedGeographicalPoint**: [`IUneceGeographicalPoint`](IUneceGeographicalPoint.md)

The geographical point included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalPoint

***

### includedGeographicalSurface? {#includedgeographicalsurface}

> `optional` **includedGeographicalSurface**: [`IUneceGeographicalSurface`](IUneceGeographicalSurface.md)

The geographical surface included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedGeographicalSurface

***

### includedPolygon? {#includedpolygon}

> `optional` **includedPolygon**: [`IUnecePolygon`](IUnecePolygon.md)

The polygon included in this geographical feature.

#### See

https://vocabulary.uncefact.org/includedPolygon

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this specified geographical feature.

#### See

https://vocabulary.uncefact.org/name

***

### usedCoordinateReferenceSystem? {#usedcoordinatereferencesystem}

> `optional` **usedCoordinateReferenceSystem**: [`IUneceCoordinateReferenceSystem`](IUneceCoordinateReferenceSystem.md)

The CS (Coordinate System) engineering coordinate reference system used for this specified geographical feature.

#### See

https://vocabulary.uncefact.org/usedCoordinateReferenceSystem

***

### usedCoordinateSourceSystem? {#usedcoordinatesourcesystem}

> `optional` **usedCoordinateSourceSystem**: [`IUneceCoordinateSourceSystem`](IUneceCoordinateSourceSystem.md)

The geographical coordinate source system used for this specified geographical feature.

#### See

https://vocabulary.uncefact.org/usedCoordinateSourceSystem
