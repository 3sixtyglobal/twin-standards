# Interface: IUneceProcessCharacteristic

A prominent attribute or aspect of a process.

## See

https://vocabulary.uncefact.org/ProcessCharacteristic

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ProcessCharacteristic"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this process characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this process characteristic.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### condition?

> `optional` **condition**: `string`

A condition or status, expressed as text, for this process characteristic.

#### See

https://vocabulary.uncefact.org/condition

***

### description?

> `optional` **description**: `string`

A textual description of this process characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this process characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumValueMeasure?

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum value for this process characteristic.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### measuredAttributeTypeCode?

> `optional` **measuredAttributeTypeCode**: [`UneceMeasuredAttributeCodeList`](../type-aliases/UneceMeasuredAttributeCodeList.md)

The code specifying the type of this process characteristic.

#### See

https://vocabulary.uncefact.org/measuredAttributeTypeCode

***

### minimumValueMeasure?

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the minimum value for this process characteristic.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### processCharacteristicValueCode?

> `optional` **processCharacteristicValueCode**: `string`

The code specifying the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/processCharacteristicValueCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this process characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

The value, expressed as a date, time, date time, or other date time value, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator?

> `optional` **valueIndicator**: `boolean`

The value, expressed as an indicator, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod?

> `optional` **valueMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

The measure of the value, expressed as a number, for this process characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter?

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange?

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this process characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
