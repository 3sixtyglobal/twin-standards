# Interface: IUneceLinearRing

A specified array of points which define a closed loop which is not self intersecting.

## See

https://vocabulary.uncefact.org/LinearRing

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"LinearRing"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic? {#associatedgeographicalobjectcharacteristic}

> `optional` **associatedGeographicalObjectCharacteristic?**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this linear ring.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### coordinate? {#coordinate}

> `optional` **coordinate?**: `string`

A coordinate, expressed as text, for this specified linear ring.

#### See

https://vocabulary.uncefact.org/coordinate

***

### coordinateDirectPosition? {#coordinatedirectposition}

> `optional` **coordinateDirectPosition?**: [`IUneceDirectPosition`](IUneceDirectPosition.md)

The specified direct position of a coordinate for this linear ring.

#### See

https://vocabulary.uncefact.org/coordinateDirectPosition
