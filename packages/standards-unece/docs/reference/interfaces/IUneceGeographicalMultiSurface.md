# Interface: IUneceGeographicalMultiSurface

A collection of surfaces on the Earth (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalMultiSurface

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"GeographicalMultiSurface"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic

> **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical multi-surface.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### includedPolygon?

> `optional` **includedPolygon**: [`IUnecePolygon`](IUnecePolygon.md)[]

A polygon included in this geographical multi-surface.

#### See

https://vocabulary.uncefact.org/includedPolygon
