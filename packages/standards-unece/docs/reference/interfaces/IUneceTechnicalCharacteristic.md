# Interface: IUneceTechnicalCharacteristic

A prominent technical attribute or aspect.

## See

https://vocabulary.uncefact.org/TechnicalCharacteristic

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"TechnicalCharacteristic"`

JSON-LD Type.

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this technical characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### capacityValueMeasure?

> `optional` **capacityValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The capacity, expressed as a measure, such as a production volume, a surface area or a number of animals, for this
technical characteristic.

#### See

https://vocabulary.uncefact.org/capacityValueMeasure

***

### certificationCode?

> `optional` **certificationCode**: `string`

The code specifying the certification granted to this technical characteristic.

#### See

https://vocabulary.uncefact.org/certificationCode

***

### componentMaterial?

> `optional` **componentMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

A specified material component of this technical characteristic.

#### See

https://vocabulary.uncefact.org/componentMaterial

***

### constructionDateTime?

> `optional` **constructionDateTime**: `string`

The date, time, date time, or other date time value of the construction of this technical characteristic.

#### See

https://vocabulary.uncefact.org/constructionDateTime

***

### description?

> `optional` **description**: `string`

The textual description of this technical characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### descriptionCode?

> `optional` **descriptionCode**: `string`

A code specifying a description of this technical characteristic.

#### See

https://vocabulary.uncefact.org/descriptionCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this technical characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestRenovationDateTime?

> `optional` **latestRenovationDateTime**: `string`

The date, time, date time, or other date time value of the latest renovation of this technical characteristic.

#### See

https://vocabulary.uncefact.org/latestRenovationDateTime

***

### licence?

> `optional` **licence**: `string`

The licence, expressed as text, for this technical characteristic.

#### See

https://vocabulary.uncefact.org/licence

***

### measurementMethodCode?

> `optional` **measurementMethodCode**: `string`

The code specifying the measurement method for this technical characteristic.

#### See

https://vocabulary.uncefact.org/measurementMethodCode

***

### specifiedAnimalHoldingEvent?

> `optional` **specifiedAnimalHoldingEvent**: [`IUneceAnimalHoldingEvent`](IUneceAnimalHoldingEvent.md)[]

An animal holding event specified for this technical characteristic.

#### See

https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this technical characteristic.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type for this technical characteristic.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### technicalCharacteristicValueCode?

> `optional` **technicalCharacteristicValueCode**: `string`

The code specifying the value of this technical characteristic.

#### See

https://vocabulary.uncefact.org/technicalCharacteristicValueCode

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying the type of technical characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this technical characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

The value, expressed as a date, time, date time, or other date time value. for this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator?

> `optional` **valueIndicator**: `boolean`

The value, expressed as an indicator, for this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value of this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

The value, expressed as a number, for this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter?

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange?

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this technical characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
