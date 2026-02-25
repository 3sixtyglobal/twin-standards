# Interface: IUneceFuel

Any specified material that is burnt or altered in order to obtain energy.

## See

https://vocabulary.uncefact.org/Fuel

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Fuel"`

JSON-LD Type.

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified fuel.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeUnitVolumeMeasure?

> `optional` **volumeUnitVolumeMeasure**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of a weight (mass) for this specified fuel.

#### See

https://vocabulary.uncefact.org/volumeUnitVolumeMeasure

***

### weightUnitWeightMeasure?

> `optional` **weightUnitWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of a volume for this specified fuel.

#### See

https://vocabulary.uncefact.org/weightUnitWeightMeasure

***

### workingPressureMeasure?

> `optional` **workingPressureMeasure**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)[]

A working pressure measure for this specified fuel.

#### See

https://vocabulary.uncefact.org/workingPressureMeasure
