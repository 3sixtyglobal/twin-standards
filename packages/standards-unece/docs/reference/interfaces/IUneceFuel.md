# Interface: IUneceFuel

Any specified material that is burnt or altered in order to obtain energy.

## See

https://vocabulary.uncefact.org/Fuel

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Fuel"`

JSON-LD Type.

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of specified fuel.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeUnitVolumeMeasure? {#volumeunitvolumemeasure}

> `optional` **volumeUnitVolumeMeasure?**: [`IUneceVolumeUnitMeasureType`](IUneceVolumeUnitMeasureType.md)[]

A measure of a weight (mass) for this specified fuel.

#### See

https://vocabulary.uncefact.org/volumeUnitVolumeMeasure

***

### weightUnitWeightMeasure? {#weightunitweightmeasure}

> `optional` **weightUnitWeightMeasure?**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A measure of a volume for this specified fuel.

#### See

https://vocabulary.uncefact.org/weightUnitWeightMeasure

***

### workingPressureMeasure? {#workingpressuremeasure}

> `optional` **workingPressureMeasure?**: [`IUneceUnitMeasureType`](IUneceUnitMeasureType.md)[]

A working pressure measure for this specified fuel.

#### See

https://vocabulary.uncefact.org/workingPressureMeasure
