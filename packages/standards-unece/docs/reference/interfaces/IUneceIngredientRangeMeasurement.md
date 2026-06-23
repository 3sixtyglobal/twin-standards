# Interface: IUneceIngredientRangeMeasurement

A measurement of the variation limits of an ingredient.

## See

https://vocabulary.uncefact.org/IngredientRangeMeasurement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"IngredientRangeMeasurement"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/description

***

### lowerLimitActualMeasure {#lowerlimitactualmeasure}

> **lowerLimitActualMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The actual lower limit measure of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/lowerLimitActualMeasure

***

### lowerLimitComparisonOperatorCode {#lowerlimitcomparisonoperatorcode}

> **lowerLimitComparisonOperatorCode**: `string`

The code specifying the comparison operator for the lower limit of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/lowerLimitComparisonOperatorCode

***

### lowerLimitPressureConditionMeasure? {#lowerlimitpressureconditionmeasure}

> `optional` **lowerLimitPressureConditionMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the pressure condition at which this lower limit ingredient range measurement is taken.

#### See

https://vocabulary.uncefact.org/lowerLimitPressureConditionMeasure

***

### upperLimitActualMeasure? {#upperlimitactualmeasure}

> `optional` **upperLimitActualMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The actual upper limit measure of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/upperLimitActualMeasure

***

### upperLimitComparisonOperatorCode? {#upperlimitcomparisonoperatorcode}

> `optional` **upperLimitComparisonOperatorCode?**: `string`

The code specifying the comparison operator for the upper limit of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/upperLimitComparisonOperatorCode

***

### upperLimitPressureConditionMeasure? {#upperlimitpressureconditionmeasure}

> `optional` **upperLimitPressureConditionMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the pressure condition at which this upper limit ingredient range measurement is taken.

#### See

https://vocabulary.uncefact.org/upperLimitPressureConditionMeasure
