# Interface: IUneceGeographicalSurface

A figure on the Earth having only two dimensions (reference ISO 19136).

## See

https://vocabulary.uncefact.org/GeographicalSurface

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"GeographicalSurface"`

JSON-LD Type.

***

### associatedGeographicalObjectCharacteristic?

> `optional` **associatedGeographicalObjectCharacteristic**: [`IUneceGeographicalObjectCharacteristic`](IUneceGeographicalObjectCharacteristic.md)

The geographical object characteristic associated with this geographical surface.

#### See

https://vocabulary.uncefact.org/associatedGeographicalObjectCharacteristic

***

### includedPolygon?

> `optional` **includedPolygon**: [`IUnecePolygon`](IUnecePolygon.md)

The polygon included in this geographical surface.

#### See

https://vocabulary.uncefact.org/includedPolygon
