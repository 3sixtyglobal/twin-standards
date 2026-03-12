# Interface: IUneceMetricCharacteristic

A prominent attribute or aspect of a metric (a standard of measurement).

## See

https://vocabulary.uncefact.org/MetricCharacteristic

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"MetricCharacteristic"`

JSON-LD Type.

***

### contentTypeCode? {#contenttypecode}

> `optional` **contentTypeCode**: `string`

The code specifying the content type of this metric characteristic.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this metric characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this metric characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### metricCharacteristicValueCode? {#metriccharacteristicvaluecode}

> `optional` **metricCharacteristicValueCode**: `string`

The code specifying the value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/metricCharacteristicValueCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of metric characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value**: `string`

A value, expressed as text, for this metric characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount? {#valueamount}

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The monetary value for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime**: `string`

The value for this metric characteristic, expressed as a date, time, date time, or other date time value.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator? {#valueindicator}

> `optional` **valueIndicator**: `boolean`

The value for this metric characteristic expressed as an indicator.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod? {#valuemethod}

> `optional` **valueMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for a value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric**: `string`

The value, expressed as a number, for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter? {#valueparameter}

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for a value for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueQuantity? {#valuequantity}

> `optional` **valueQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The value, expressed as a quantity, for this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueQuantity

***

### valueRange? {#valuerange}

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for a value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for a value of this metric characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
