# Interface: IUneceCoordinateSourceSystem

Properties defining a geographical coordinate source system used in different places around the world to identify
locations on the earth.

## See

https://vocabulary.uncefact.org/CoordinateSourceSystem

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"CoordinateSourceSystem"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/identifier

***

### signalSourceAvailableQuantity?

> `optional` **signalSourceAvailableQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity of signal source available for this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/signalSourceAvailableQuantity

***

### sourceTypeCode?

> `optional` **sourceTypeCode**: `string`

The code specifying a type of source for this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/sourceTypeCode

***

### toleranceMeasure?

> `optional` **toleranceMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the tolerance of this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/toleranceMeasure

***

### usedSignalSourceQuantity?

> `optional` **usedSignalSourceQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The quantity of the used signal source of this geographical coordinate source system.

#### See

https://vocabulary.uncefact.org/usedSignalSourceQuantity
