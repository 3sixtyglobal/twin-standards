# Interface: IUnecePolygon

A planar surface, defined by one exterior boundary and zero or more interior boundaries. Each interior boundary defines
a hole in the polygon.

## See

https://vocabulary.uncefact.org/Polygon

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Polygon"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this specified polygon.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation?

> `optional` **associatedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location associated with this specified polygon.

#### See

https://vocabulary.uncefact.org/associatedLocation

***

### exteriorLinearRing

> **exteriorLinearRing**: [`IUneceLinearRing`](IUneceLinearRing.md)

The exterior linear specified ring for this polygon.

#### See

https://vocabulary.uncefact.org/exteriorLinearRing

***

### interiorLinearRing?

> `optional` **interiorLinearRing**: [`IUneceLinearRing`](IUneceLinearRing.md)[]

An interior linear ring specified for this polygon.

#### See

https://vocabulary.uncefact.org/interiorLinearRing
