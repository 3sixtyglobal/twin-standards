# Interface: IUneceProductCharacteristic

A prominent attribute or aspect of a product.

## See

https://vocabulary.uncefact.org/ProductCharacteristic

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"ProductCharacteristic"`

JSON-LD Type.

***

### applicableCondition?

> `optional` **applicableCondition**: [`IUneceProductCharacteristicCondition`](IUneceProductCharacteristicCondition.md)[]

A condition applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableCondition

***

### applicableCountry?

> `optional` **applicableCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A country applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableCountry

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

The referenced standard that is applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this product characteristic.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### contentTypeCode?

> `optional` **contentTypeCode**: `string`

A code specifying the content type of this product characteristic.

#### See

https://vocabulary.uncefact.org/contentTypeCode

***

### description?

> `optional` **description**: `string`

A textual description of this product characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this product characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### measurementMethodCode?

> `optional` **measurementMethodCode**: `string`

A code specifying a measurement method for this product characteristic.

#### See

https://vocabulary.uncefact.org/measurementMethodCode

***

### productCharacteristicValueCode?

> `optional` **productCharacteristicValueCode**: `string`

The code specifying the value of this product characteristic.

#### See

https://vocabulary.uncefact.org/productCharacteristicValueCode

***

### targetMarketDescription?

> `optional` **targetMarketDescription**: `string`

A textual description of a target market for this product characteristic.

#### See

https://vocabulary.uncefact.org/targetMarketDescription

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of product characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this product characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

The value, expressed as an amount, for this product characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueBinaryFile?

> `optional` **valueBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

The value for this product characteristic expressed in a binary file.

#### See

https://vocabulary.uncefact.org/valueBinaryFile

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

The value for this product characteristic expressed as a date, time, date time, or other date time value.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueIndicator?

> `optional` **valueIndicator**: `boolean`

The value for this product characteristic expressed as an indicator.

#### See

https://vocabulary.uncefact.org/valueIndicator

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this product characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueMethod?

> `optional` **valueMethod**: [`IUneceSpecifiedMethod`](IUneceSpecifiedMethod.md)[]

A method specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueMethod

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

The value, expressed as a number, for this product characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valueParameter?

> `optional` **valueParameter**: [`IUneceSpecifiedParameter`](IUneceSpecifiedParameter.md)[]

A parameter specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueParameter

***

### valueRange?

> `optional` **valueRange**: [`IUneceRange`](IUneceRange.md)[]

A range specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueRange

***

### valueTolerance?

> `optional` **valueTolerance**: [`IUneceTolerance`](IUneceTolerance.md)[]

A tolerance specified for a value of this product characteristic.

#### See

https://vocabulary.uncefact.org/valueTolerance
