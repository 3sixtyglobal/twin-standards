# Interface: IUneceDocumentCharacteristic

A prominent attribute or aspect of a document.

## See

https://vocabulary.uncefact.org/DocumentCharacteristic

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

> **type**: `"DocumentCharacteristic"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this document characteristic.

#### See

https://vocabulary.uncefact.org/description

***

### documentCharacteristicValueCode?

> `optional` **documentCharacteristicValueCode**: `string`

A code specifying a value of this document characteristic.

#### See

https://vocabulary.uncefact.org/documentCharacteristicValueCode

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this document characteristic.

#### See

https://vocabulary.uncefact.org/identifier

***

### location?

> `optional` **location**: `string`

A location, expressed as text, for this document characteristic.

#### See

https://vocabulary.uncefact.org/location

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this document characteristic.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of document characteristic.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this document characteristic.

#### See

https://vocabulary.uncefact.org/value

***

### valueAdjustmentDirectionCode?

> `optional` **valueAdjustmentDirectionCode**: `string`

The code specifying the adjustment direction for value of this document characteristic.

#### See

https://vocabulary.uncefact.org/valueAdjustmentDirectionCode

***

### valueAmount?

> `optional` **valueAmount**: [`IUneceAmountType`](IUneceAmountType.md)

A value, expressed as a monetary value, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueAmount

***

### valueChangedIndicator?

> `optional` **valueChangedIndicator**: `boolean`

The indication of whether or not the value of this document characteristic is changed.

#### See

https://vocabulary.uncefact.org/valueChangedIndicator

***

### valueDateTime?

> `optional` **valueDateTime**: `string`

A date, time, date time or other date time value for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueDateTime

***

### valueMeasure?

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

A measure of a value for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueMeasure

***

### valueNumeric?

> `optional` **valueNumeric**: `string`

A value, expressed as a number, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueNumeric

***

### valuePercent?

> `optional` **valuePercent**: `string`

A value, expressed as a percentage, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valuePercent

***

### valueQuantity?

> `optional` **valueQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

A value, expressed as a quantity, for this document characteristic.

#### See

https://vocabulary.uncefact.org/valueQuantity
