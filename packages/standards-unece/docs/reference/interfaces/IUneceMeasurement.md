# Interface: IUneceMeasurement

An amount, size, or extent as established by measuring.

## See

https://vocabulary.uncefact.org/Measurement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Measurement"`

JSON-LD Type.

***

### actualMeasure? {#actualmeasure}

> `optional` **actualMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

An actual measure for this measurement.

#### See

https://vocabulary.uncefact.org/actualMeasure

***

### comparisonOperatorCode? {#comparisonoperatorcode}

> `optional` **comparisonOperatorCode?**: `string`

A code specifying the operator, such as, less than, greater than or equal to, for comparing two actual measures.

#### See

https://vocabulary.uncefact.org/comparisonOperatorCode

***

### conditionMeasure? {#conditionmeasure}

> `optional` **conditionMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a condition for this measurement.

#### See

https://vocabulary.uncefact.org/conditionMeasure

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this measurement.

#### See

https://vocabulary.uncefact.org/description

***

### method? {#method}

> `optional` **method?**: `string`

A measurement method expressed as text.

#### See

https://vocabulary.uncefact.org/method

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of measurement.

#### See

https://vocabulary.uncefact.org/typeCode
