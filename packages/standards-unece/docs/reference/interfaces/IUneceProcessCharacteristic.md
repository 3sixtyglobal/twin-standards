# Interface: IUneceProcessCharacteristic

A prominent attribute or aspect of a process.

## See

https://vocabulary.uncefact.org/ProcessCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProcessCharacteristic"`

JSON-LD Type.

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this process characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this process characteristic.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### condition? {#condition}

> `optional` **condition?**: `string`

A condition or status, expressed as text, for this process characteristic.

#### See

https://vocabulary.uncefact.org/condition

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this process characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this process characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumValueMeasure? {#maximumvaluemeasure}

> `optional` **maximumValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum value for this process characteristic.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### measuredAttributeTypeCode? {#measuredattributetypecode}

> `optional` **measuredAttributeTypeCode?**: [`UneceMeasuredAttributeCodeList`](../type-aliases/UneceMeasuredAttributeCodeList.md)

The code specifying the type of this process characteristic.

#### See

https://vocabulary.uncefact.org/measuredAttributeTypeCode

***

### minimumValueMeasure? {#minimumvaluemeasure}

> `optional` **minimumValueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the minimum value for this process characteristic.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### processCharacteristicValueCode? {#processcharacteristicvaluecode}

> `optional` **processCharacteristicValueCode?**: `string`

The code specifying the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/processCharacteristicValueCode

***

### value? {#value}

> `optional` **value?**: `string`

A value, expressed as text, for this process characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount? {#valueamount}

> `optional` **valueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime?**: `string`

The value, expressed as a date, time, date time, or other date time value, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator? {#valueindicator}

> `optional` **valueIndicator?**: `boolean`

The value, expressed as an indicator, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod? {#valuemethod}

> `optional` **valueMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric?**: `string`

The measure of the value, expressed as a number, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter? {#valueparameter}

> `optional` **valueParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange? {#valuerange}

> `optional` **valueRange?**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance?**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
