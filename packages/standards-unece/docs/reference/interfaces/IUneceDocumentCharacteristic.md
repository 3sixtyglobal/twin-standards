# Interface: IUneceDocumentCharacteristic

A prominent attribute or aspect of a document.

## See

https://vocabulary.uncefact.org/DocumentCharacteristic

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DocumentCharacteristic"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this document characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### documentCharacteristicValueCode? {#documentcharacteristicvaluecode}

> `optional` **documentCharacteristicValueCode?**: `string`

A code specifying a value of this document characteristic.

#### See

https://vocabulary.uncefact.org/documentCharacteristicValueCode

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this document characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### location? {#location}

> `optional` **location?**: `string`

A location, expressed as text, for this document characteristic.

#### See

https://vocabulary.uncefact.org/location

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this document characteristic.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of document characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value?**: `string`

A value, expressed as text, for this document characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAdjustmentDirectionCode? {#valueadjustmentdirectioncode}

> `optional` **valueAdjustmentDirectionCode?**: `string`

The code specifying the adjustment direction for value of this document characteristic.

#### See

https://vocabulary.uncefact.org/valueAdjustmentDirectionCode

***

### valueAmount? {#valueamount}

> `optional` **valueAmount?**: [`IUneceAmountType`](IUneceAmountType.md)[]

A value, expressed as a monetary value, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueChangedIndicator? {#valuechangedindicator}

> `optional` **valueChangedIndicator?**: `boolean`

The indication of whether or not the value of this document characteristic is changed.

#### See

https://vocabulary.uncefact.org/valueChangedIndicator

***

### valueDateTime? {#valuedatetime}

> `optional` **valueDateTime?**: `string`

A date, time, date time or other date time value for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of a value for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueNumeric? {#valuenumeric}

> `optional` **valueNumeric?**: `string`

A value, expressed as a number, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valuePercent? {#valuepercent}

> `optional` **valuePercent?**: `string`

A value, expressed as a percentage, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valuePercent

***

### valueQuantity? {#valuequantity}

> `optional` **valueQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A value, expressed as a quantity, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueQuantity
