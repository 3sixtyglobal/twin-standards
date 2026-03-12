# Interface: IUneceCircle

A planar surface specified as one completely round flat shape in the mathematical sense.

## See

https://vocabulary.uncefact.org/Circle

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Circle"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic {#associatedgeographicalobjectcharacteristic}

> **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this specified circle.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### associatedLocation? {#associatedlocation}

> `optional` **associatedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics location associated with this specified circle.

#### See

https://vocabulary.uncefact.org/associatedLocation

***

### centreGeographicalPoint? {#centregeographicalpoint}

> `optional` **centreGeographicalPoint**: [`IUneceGeographicalPoint`](IUneceGeographicalPoint.md)

The geographical point which defines the centre of this specified circle.

#### See

https://vocabulary.uncefact.org/centreGeographicalPoint

***

### radiusMeasure? {#radiusmeasure}

> `optional` **radiusMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the radius for this specified circle.

#### See

https://vocabulary.uncefact.org/radiusMeasure
