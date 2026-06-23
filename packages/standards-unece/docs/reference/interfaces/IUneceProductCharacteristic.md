# Interface: IUneceProductCharacteristic

A prominent attribute or aspect of a product.

## See

https://vocabulary.uncefact.org/ProductCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductCharacteristic"`

JSON-LD Type.

***

### applicableCondition? {#applicablecondition}

> `optional` **applicableCondition?**: [`IUneceProductCharacteristicCondition`](IUneceProductCharacteristicCondition.md)[]

A condition applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableCondition

***

### applicableCountry? {#applicablecountry}

> `optional` **applicableCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A country applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableCountry

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)

The referenced standard that is applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### contentTypeCode? {#contenttypecode}

> `optional` **contentTypeCode?**: `string`

A code specifying the content type of this product characteristic.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this product characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier for this product characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### measurementMethodCode? {#measurementmethodcode}

> `optional` **measurementMethodCode?**: `string`

A code specifying a measurement method for this product characteristic.

#### See

https://vocabulary.uncefact.org/measurementMethodCode

***

### productCharacteristicValueCode? {#productcharacteristicvaluecode}

> `optional` **productCharacteristicValueCode?**: `string`

The code specifying the value of this product characteristic.

#### See

https://vocabulary.uncefact.org/productCharacteristicValueCode

***

### targetMarketDescription? {#targetmarketdescription}

> `optional` **targetMarketDescription?**: `string`

A textual description of a target market for this product characteristic.

#### See

https://vocabulary.uncefact.org/targetMarketDescription

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of product characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value?**: `string`

A value, expressed as text, for this product characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount? {#valueamount}

> `optional` **valueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this product characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueBinaryFile? {#valuebinaryfile}

> `optional` **valueBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

The value for this product characteristic expressed in a binary file.

#### See

https://vocabulary.uncefact.org/valueBinaryFile

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime?**: `string`

The value for this product characteristic expressed as a date, time, date time, or other date time value.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator? {#valueindicator}

> `optional` **valueIndicator?**: `boolean`

The value for this product characteristic expressed as an indicator.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this product characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod? {#valuemethod}

> `optional` **valueMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric?**: `string`

The value, expressed as a number, for this product characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter? {#valueparameter}

> `optional` **valueParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange? {#valuerange}

> `optional` **valueRange?**: [`IUneceRange`](IUneceRange.md)[]

A range specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance?**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
