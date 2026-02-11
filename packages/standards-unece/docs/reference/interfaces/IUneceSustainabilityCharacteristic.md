# Interface: IUneceSustainabilityCharacteristic

A prominent attribute or aspect of an object, such as recyclability of a product, which can meet customer needs without
compromising the ability of future generations to meet their own needs.

## See

https://vocabulary.uncefact.org/SustainabilityCharacteristic

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"SustainabilityCharacteristic"`

JSON-LD Type.

***

### applicableInspectionResult?

> `optional` **applicableInspectionResult**: [`IUneceInspectionResult`](IUneceInspectionResult.md)[]

A specified inspection result applicable to this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/applicableInspectionResult

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### contentTypeCode?

> `optional` **contentTypeCode**: `string`

The code specifying the content type of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### description?

> `optional` **description**: `string`

A textual description of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### maximumValueMeasure?

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a maximum value for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### measurementMethodCode?

> `optional` **measurementMethodCode**: `string`

The code specifying the measurement method for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/measurementMethodCode

***

### minimumValueMeasure?

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a minimum value for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### shareableIndicator?

> `optional` **shareableIndicator**: `boolean`

The indication of whether or not this sustainability characteristic is shareable.

#### See

https://vocabulary.uncefact.org/shareableIndicator

***

### specifiedSupplyChainEvent?

> `optional` **specifiedSupplyChainEvent**: [`IUneceSupplyChainEvent`](IUneceSupplyChainEvent.md)[]

A supply chain event specified for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/specifiedSupplyChainEvent

***

### subordinateCategoryCode?

> `optional` **subordinateCategoryCode**: `string`

The subordinate category for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/subordinateCategoryCode

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of sustainability characteristic.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### sustainabilityCharacteristicValueCode?

> `optional` **sustainabilityCharacteristicValueCode**: `string`

The code specifying the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/sustainabilityCharacteristicValueCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of sustainability characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

The value, expressed as an amount, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueBinaryFile?

> `optional` **valueBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A value, expressed in a binary file, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueBinaryFile

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

The value, expressed as a date, time, date time, or other date time value, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator?

> `optional` **valueIndicator**: `boolean`

The value, expressed as an indicator, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

The value, expressed as a number, for this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter?

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valuePeriod?

> `optional` **valuePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valuePeriod

***

### valueRange?

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for the value of this sustainability characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
