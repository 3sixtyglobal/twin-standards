# Interface: IUneceGeographicalLine

A connection between two points on the surface of the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalLine

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GeographicalLine"`

JSON-LD Type.

***

### associatedDirectPositionList {#associateddirectpositionlist}

> **associatedDirectPositionList**: `string`

The direct position list associated with this geographical line.

#### See

https://vocabulary.uncefact.org/associatedDirectPositionList

***

### associatedGeographicalObjectCharacteristic {#associatedgeographicalobjectcharacteristic}

> **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical line.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation? {#associatedlocation}

> `optional` **associatedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location associated with this specified geographical line.

#### See

https://vocabulary.uncefact.org/associatedLocation
