# Interface: IUneceProductCharacteristicCondition

A state that applies to a product characteristic.

## See

https://vocabulary.uncefact.org/ProductCharacteristicCondition

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductCharacteristicCondition"`

JSON-LD Type.

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this product characteristic condition.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of product characteristic condition.

#### See

https://vocabulary.uncefact.org/typeCode

***

### valueMeasure? {#valuemeasure}

> `optional` **valueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the value for this product characteristic condition.

#### See

https://vocabulary.uncefact.org/valueMeasure
