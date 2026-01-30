# Interface: IUneceMetricCharacteristic

A prominent attribute or aspect of a metric (a standard of measurement).

## See

https://vocabulary.uncefact.org/MetricCharacteristic

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

> **type**: `"MetricCharacteristic"`

JSON-LD Type.

***

### contentTypeCode?

> `optional` **contentTypeCode**: `string`

The code specifying the content type of this metric characteristic.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### description?

> `optional` **description**: `string`

A textual description of this metric characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this metric characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### metricCharacteristicValueCode?

> `optional` **metricCharacteristicValueCode**: `string`

The code specifying the value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/metricCharacteristicValueCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of metric characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this metric characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The monetary value for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

The value for this metric characteristic, expressed as a date, time, date time, or other date time value.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator?

> `optional` **valueIndicator**: `boolean`

The value for this metric characteristic expressed as an indicator.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod?

> `optional` **valueMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for a value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

The value, expressed as a number, for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter?

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for a value for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueQuantity?

> `optional` **valueQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The value, expressed as a quantity, for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueQuantity

***

### valueRange?

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for a value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for a value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
