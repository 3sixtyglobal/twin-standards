# Interface: IUneceCalibratedMeasurement

A measurement established by a device which is tested to a calibration standard of known accuracy.

## See

https://vocabulary.uncefact.org/CalibratedMeasurement

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

> **type**: `"CalibratedMeasurement"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this calibrated measurement.

#### See

https://vocabulary.uncefact.org/identifier

***

### quantificationTypeCode?

> `optional` **quantificationTypeCode**: `string`

The code specifying a quantification type for this calibrated measurement, such as measured, calculated, or estimated.

#### See

https://vocabulary.uncefact.org/quantificationTypeCode

***

### toleranceMeasure?

> `optional` **toleranceMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the tolerance of this calibrated measurement.

#### See

https://vocabulary.uncefact.org/toleranceMeasure

***

### tolerancePercent?

> `optional` **tolerancePercent**: `string`

The percent of tolerance of this calibrated measurement.

#### See

https://vocabulary.uncefact.org/tolerancePercent

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of calibrated measurement.

#### See

https://vocabulary.uncefact.org/typeCode

***

### valueCode?

> `optional` **valueCode**: `string`

The code specifying a value for this calibrated measurement.

#### See

https://vocabulary.uncefact.org/valueCode

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The value of a measure for this calibrated measurement.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### versionId?

> `optional` **versionId**: `string`

The identifier of a version of this calibrated measurement.

#### See

https://vocabulary.uncefact.org/versionId
