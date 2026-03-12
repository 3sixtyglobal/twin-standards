# Interface: IUneceCoordinateReferenceSystem

A coordinate reference system that is used in a contextually local sense to describe the relative locations of objects
in which coordinates of points are recorded in a Coordinate System (CS) (reference ISO 19111).

## See

https://vocabulary.uncefact.org/CoordinateReferenceSystem

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CoordinateReferenceSystem"`

JSON-LD Type.

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this CS engineering coordinate reference system.

#### See

https://vocabulary.uncefact.org/identifier

***

### level {#level}

> **level**: `string`

The level, expressed as text, of this CS engineering coordinate reference system.

#### See

https://vocabulary.uncefact.org/level

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this CS engineering coordinate reference system.

#### See

https://vocabulary.uncefact.org/name

***

### specifiedDelimitedPeriod? {#specifieddelimitedperiod}

> `optional` **specifiedDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

A delimited period specified for this CS engineering coordinate reference system.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedPeriod? {#specifiedperiod}

> `optional` **specifiedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

A delimited period specified for this CS engineering coordinate reference system.

#### See

https://vocabulary.uncefact.org/specifiedPeriod

***

### subordinateCoordinateReferenceSystem? {#subordinatecoordinatereferencesystem}

> `optional` **subordinateCoordinateReferenceSystem**: `IUneceCoordinateReferenceSystem`[]

A CS engineering coordinate reference system subordinate to this CS engineering coordinate reference system.

#### See

https://vocabulary.uncefact.org/subordinateCoordinateReferenceSystem
