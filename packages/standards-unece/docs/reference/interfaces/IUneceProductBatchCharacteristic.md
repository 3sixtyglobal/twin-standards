# Interface: IUneceProductBatchCharacteristic

A prominent attribute or aspect of a group of products considered or dealt with together.

## See

https://vocabulary.uncefact.org/ProductBatchCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductBatchCharacteristic"`

JSON-LD Type.

***

### applicableCountry? {#applicablecountry}

> `optional` **applicableCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A country applicable to this product batch characteristic.

#### See

https://vocabulary.uncefact.org/applicableCountry

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this product batch characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### productBatchCharacteristicValueCode? {#productbatchcharacteristicvaluecode}

> `optional` **productBatchCharacteristicValueCode?**: `string`

The code specifying the value of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/productBatchCharacteristicValueCode

***

### targetMarketDescription? {#targetmarketdescription}

> `optional` **targetMarketDescription?**: `string`

A textual description of a target market for this product characteristic.

#### See

https://vocabulary.uncefact.org/targetMarketDescription

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of product batch characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value?**: `string`

A value, expressed as text, for this product batch characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount? {#valueamount}

> `optional` **valueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime?**: `string`

The value, expressed as a date, time, date time, or other date time value, for this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator? {#valueindicator}

> `optional` **valueIndicator?**: `boolean`

The value, expressed as an indicator, for this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod? {#valuemethod}

> `optional` **valueMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for a value of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric?**: `string`

The value, expressed as a number, for this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter? {#valueparameter}

> `optional` **valueParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for a value of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange? {#valuerange}

> `optional` **valueRange?**: [`IUneceRange`](IUneceRange.md)[]

A range specified for a value of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance?**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for a value of this product batch characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
