# Interface: IUneceOrganizationCharacteristic

A prominent attribute or aspect of an organization.

## See

https://vocabulary.uncefact.org/OrganizationCharacteristic

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"OrganizationCharacteristic"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this organization characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this organization characteristic.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### condition?

> `optional` **condition**: `string`

A condition or status, expressed as text, of this organization characteristic.

#### See

https://vocabulary.uncefact.org/condition

***

### description?

> `optional` **description**: `string`

A textual description of this organization characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this organization characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### organizationCharacteristicValueCode?

> `optional` **organizationCharacteristicValueCode**: `string`

The code specifying the value of this organization characteristic.

#### See

https://vocabulary.uncefact.org/organizationCharacteristicValueCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of organization characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this organization characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

The value for this organization characteristic expressed as a date, time, date time, or other date time value.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator?

> `optional` **valueIndicator**: `boolean`

The value for this organization characteristic expressed as an indicator.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod?

> `optional` **valueMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for the value of this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

The value, expressed as a number, for this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter?

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange?

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this organization characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
