# Interface: IUneceSustainabilityCharacteristic

A prominent attribute or aspect of an object, such as recyclability of a product, which can meet customer needs without
compromising the ability of future generations to meet their own needs.

## See

https://vocabulary.uncefact.org/SustainabilityCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SustainabilityCharacteristic"`

JSON-LD Type.

***

### applicableInspectionResult? {#applicableinspectionresult}

> `optional` **applicableInspectionResult?**: [`IUneceInspectionResult`](IUneceInspectionResult.md)[]

A specified inspection result applicable to this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/applicableInspectionResult

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

The code specifying the category of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### contentTypeCode? {#contenttypecode}

> `optional` **contentTypeCode?**: `string`

The code specifying the content type of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumValueMeasure? {#maximumvaluemeasure}

> `optional` **maximumValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a maximum value for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### measurementMethodCode? {#measurementmethodcode}

> `optional` **measurementMethodCode?**: `string`

The code specifying the measurement method for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/measurementMethodCode

***

### minimumValueMeasure? {#minimumvaluemeasure}

> `optional` **minimumValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a minimum value for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### shareableIndicator? {#shareableindicator}

> `optional` **shareableIndicator?**: `boolean`

The indication of whether or not this sustainability characteristic is shareable.

#### See

https://vocabulary.uncefact.org/shareableIndicator

***

### specifiedSupplyChainEvent? {#specifiedsupplychainevent}

> `optional` **specifiedSupplyChainEvent?**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### subordinateCategoryCode? {#subordinatecategorycode}

> `optional` **subordinateCategoryCode?**: `string`

The subordinate category for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/subordinateCategoryCode

***

### subordinateTypeCode? {#subordinatetypecode}

> `optional` **subordinateTypeCode?**: `string`

The code specifying the subordinate type of sustainability characteristic.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### sustainabilityCharacteristicValueCode? {#sustainabilitycharacteristicvaluecode}

> `optional` **sustainabilityCharacteristicValueCode?**: `string`

The code specifying the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/sustainabilityCharacteristicValueCode

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of sustainability characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value?**: `string`

A value, expressed as text, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount? {#valueamount}

> `optional` **valueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueBinaryFile? {#valuebinaryfile}

> `optional` **valueBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A value, expressed in a binary file, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueBinaryFile

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime?**: `string`

The value, expressed as a date, time, date time, or other date time value, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator? {#valueindicator}

> `optional` **valueIndicator?**: `boolean`

The value, expressed as an indicator, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric?**: `string`

The value, expressed as a number, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter? {#valueparameter}

> `optional` **valueParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valuePeriod? {#valueperiod}

> `optional` **valuePeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valuePeriod

***

### valueRange? {#valuerange}

> `optional` **valueRange?**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance?**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
