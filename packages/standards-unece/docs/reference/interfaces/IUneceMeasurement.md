# Interface: IUneceMeasurement

An amount, size, or extent as established by measuring.

## See

https://vocabulary.uncefact.org/Measurement

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Measurement"`

JSON-LD Type.

***

### actualMeasure?

> `optional` **actualMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

An actual measure for this measurement.

#### See

https://vocabulary.uncefact.org/actualMeasure

***

### comparisonOperatorCode?

> `optional` **comparisonOperatorCode**: `string`

A code specifying the operator, such as, less than, greater than or equal to, for comparing two actual measures.

#### See

https://vocabulary.uncefact.org/comparisonOperatorCode

***

### conditionMeasure?

> `optional` **conditionMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a condition for this measurement.

#### See

https://vocabulary.uncefact.org/conditionMeasure

***

### description?

> `optional` **description**: `string`

A textual description of this measurement.

#### See

https://vocabulary.uncefact.org/description

***

### method?

> `optional` **method**: `string`

A measurement method expressed as text.

#### See

https://vocabulary.uncefact.org/method

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of measurement.

#### See

https://vocabulary.uncefact.org/typeCode
