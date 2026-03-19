# Interface: IUneceAgriculturalCharacteristic

A prominent attribute or aspect of an agricultural object.

## See

https://vocabulary.uncefact.org/AgriculturalCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AgriculturalCharacteristic"`

JSON-LD Type.

***

### agriculturalCharacteristicValueCode? {#agriculturalcharacteristicvaluecode}

> `optional` **agriculturalCharacteristicValueCode?**: `string`

The code specifying the value of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/agriculturalCharacteristicValueCode

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of agricultural characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value?**: `string`

The value, expressed as text, for this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount? {#valueamount}

> `optional` **valueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime?**: `string`

The value, expressed as a date, time, date time, or other date time value, of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator? {#valueindicator}

> `optional` **valueIndicator?**: `boolean`

The value, expressed as an indicator, for this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of a value for this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod? {#valuemethod}

> `optional` **valueMethod?**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for the value of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric?**: `string`

The value, expressed as a number, for this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter? {#valueparameter}

> `optional` **valueParameter?**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange? {#valuerange}

> `optional` **valueRange?**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance? {#valuetolerance}

> `optional` **valueTolerance?**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this agricultural characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
