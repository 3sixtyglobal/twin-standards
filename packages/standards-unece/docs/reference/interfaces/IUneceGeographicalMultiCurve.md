# Interface: IUneceGeographicalMultiCurve

A collection of curves on the surface of the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalMultiCurve

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"GeographicalMultiCurve"`

JSON-LD Type.

***

### associatedDirectPositionList?

> `optional` **associatedDirectPositionList**: `string`

The direct position list associated with this geographical multi-curve.

#### See

https://vocabulary.uncefact.org/associatedDirectPositionList

***

### associatedGeographicalObjectCharacteristic

> **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical multi-curve.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### memberGeographicalLine?

> `optional` **memberGeographicalLine**: [`IUneceGeographicalLine`](IUneceGeographicalLine.md)[]

A geographical line member of this geographical multi-curve.

#### See

https://vocabulary.uncefact.org/memberGeographicalLine
