# Interface: IUneceGeographicalPoint

A point on the surface of the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalPoint

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"GeographicalPoint"`

JSON-LD Type.

***

### associatedDirectPositionList

> **associatedDirectPositionList**: `string`

The direct position list associated with this geographical point.

#### See

https://vocabulary.uncefact.org/associatedDirectPositionList

***

### associatedGeographicalObjectCharacteristic

> **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical point.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation?

> `optional` **associatedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location associated with this specified geographical point.

#### See

https://vocabulary.uncefact.org/associatedLocation
