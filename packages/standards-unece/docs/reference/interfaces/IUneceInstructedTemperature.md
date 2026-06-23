# Interface: IUneceInstructedTemperature

Temperature settings instructed for storage or movement of goods.

## See

https://vocabulary.uncefact.org/InstructedTemperature

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"InstructedTemperature"`

JSON-LD Type.

***

### controlCode? {#controlcode}

> `optional` **controlCode?**: `string`

The code specifying the control of this instructed temperature, such as normal or chilled.

#### See

https://vocabulary.uncefact.org/controlCode

***

### maximumValueMeasure? {#maximumvaluemeasure}

> `optional` **maximumValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum value of this instructed temperature.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### minimumValueMeasure? {#minimumvaluemeasure}

> `optional` **minimumValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the minimum value of this instructed temperature.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure
