# Interface: IUneceEmission

A calculation of the pollution (including noise, heat, and radiation etc.) discharged into the environment by a
residential, commercial, or industrial facility or by a means of transport, such as a vessel, aircraft or truck.

## See

https://vocabulary.uncefact.org/Emission

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Emission"`

JSON-LD Type.

***

### affectedDistanceMeasure? {#affecteddistancemeasure}

> `optional` **affectedDistanceMeasure**: [`IUneceLinearUnitMeasureType`](IUneceLinearUnitMeasureType.md)

The affected distance over which this calculated emission is measured.

#### See

https://vocabulary.uncefact.org/affectedDistanceMeasure

***

### pollutionMeasure? {#pollutionmeasure}

> `optional` **pollutionMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the pollution calculated for this emission.

#### See

https://vocabulary.uncefact.org/pollutionMeasure

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of this calculated emission.

#### See

https://vocabulary.uncefact.org/typeCode

***

### weightUnitWeightMeasure? {#weightunitweightmeasure}

> `optional` **weightUnitWeightMeasure**: [`IUneceWeightUnitMeasureType`](IUneceWeightUnitMeasureType.md)[]

A weight for which this calculated emission is measured.

#### See

https://vocabulary.uncefact.org/weightUnitWeightMeasure
