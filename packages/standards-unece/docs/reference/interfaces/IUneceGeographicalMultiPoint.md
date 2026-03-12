# Interface: IUneceGeographicalMultiPoint

A collection of points, on the surface of the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalMultiPoint

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GeographicalMultiPoint"`

JSON-LD Type.

***

### associatedDirectPositionList? {#associateddirectpositionlist}

> `optional` **associatedDirectPositionList**: `string`

The direct position list associated with this geographical multi-point.

#### See

https://vocabulary.uncefact.org/associatedDirectPositionList

***

### associatedGeographicalObjectCharacteristic {#associatedgeographicalobjectcharacteristic}

> **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical multi-point.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### memberGeographicalPoint? {#membergeographicalpoint}

> `optional` **memberGeographicalPoint**: [`IUneceGeographicalPoint`](IUneceGeographicalPoint.md)[]

A geographical point member of this geographical multi-point feature.

#### See

https://vocabulary.uncefact.org/memberGeographicalPoint
