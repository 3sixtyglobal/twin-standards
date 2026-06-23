# Interface: IUneceCalibratedMeasurement

A measurement established by a device which is tested to a calibration standard of known accuracy.

## See

https://vocabulary.uncefact.org/CalibratedMeasurement

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CalibratedMeasurement"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this calibrated measurement.

#### See

https://vocabulary.uncefact.org/identifier

***

### quantificationTypeCode? {#quantificationtypecode}

> `optional` **quantificationTypeCode?**: `string`

The code specifying a quantification type for this calibrated measurement, such as measured, calculated, or estimated.

#### See

https://vocabulary.uncefact.org/quantificationTypeCode

***

### toleranceMeasure? {#tolerancemeasure}

> `optional` **toleranceMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the tolerance of this calibrated measurement.

#### See

https://vocabulary.uncefact.org/toleranceMeasure

***

### tolerancePercent? {#tolerancepercent}

> `optional` **tolerancePercent?**: `string`

The percent of tolerance of this calibrated measurement.

#### See

https://vocabulary.uncefact.org/tolerancePercent

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of calibrated measurement.

#### See

https://vocabulary.uncefact.org/typeCode

***

### valueCode? {#valuecode}

> `optional` **valueCode?**: `string`

The code specifying a value for this calibrated measurement.

#### See

https://vocabulary.uncefact.org/valueCode

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The value of a measure for this calibrated measurement.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### versionId? {#versionid}

> `optional` **versionId?**: `string` \| `IJsonLdValueObject`

The identifier of a version of this calibrated measurement.

#### See

https://vocabulary.uncefact.org/versionId
