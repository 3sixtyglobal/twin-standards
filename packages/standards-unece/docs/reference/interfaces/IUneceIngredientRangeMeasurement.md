# Interface: IUneceIngredientRangeMeasurement

A measurement of the variation limits of an ingredient.

## See

https://vocabulary.uncefact.org/IngredientRangeMeasurement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"IngredientRangeMeasurement"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/description

***

### lowerLimitActualMeasure?

> `optional` **lowerLimitActualMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The actual lower limit measure of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/lowerLimitActualMeasure

***

### lowerLimitComparisonOperatorCode?

> `optional` **lowerLimitComparisonOperatorCode**: `string`

The code specifying the comparison operator for the lower limit of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/lowerLimitComparisonOperatorCode

***

### lowerLimitPressureConditionMeasure?

> `optional` **lowerLimitPressureConditionMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the pressure condition at which this lower limit ingredient range measurement is taken.

#### See

https://vocabulary.uncefact.org/lowerLimitPressureConditionMeasure

***

### upperLimitActualMeasure?

> `optional` **upperLimitActualMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The actual upper limit measure of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/upperLimitActualMeasure

***

### upperLimitComparisonOperatorCode?

> `optional` **upperLimitComparisonOperatorCode**: `string`

The code specifying the comparison operator for the upper limit of this ingredient range measurement.

#### See

https://vocabulary.uncefact.org/upperLimitComparisonOperatorCode

***

### upperLimitPressureConditionMeasure?

> `optional` **upperLimitPressureConditionMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the pressure condition at which this upper limit ingredient range measurement is taken.

#### See

https://vocabulary.uncefact.org/upperLimitPressureConditionMeasure
