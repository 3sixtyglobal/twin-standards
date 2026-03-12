# Interface: IUneceRange

A row, line or series, commonly used to express the difference between lowest and highest values.

## See

https://vocabulary.uncefact.org/Range

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Range"`

JSON-LD Type.

***

### endId? {#endid}

> `optional` **endId**: `string` \| `IJsonLdValueObject`

The identifier of the end of this specified range.

#### See

https://vocabulary.uncefact.org/endId

***

### maximumValueMeasure? {#maximumvaluemeasure}

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the maximum value for this specified range.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### minimumValueMeasure? {#minimumvaluemeasure}

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the minimum value for this specified range.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### startId? {#startid}

> `optional` **startId**: `string` \| `IJsonLdValueObject`

The identifier of the start of this specified range.

#### See

https://vocabulary.uncefact.org/startId

***

### totalItemQuantity? {#totalitemquantity}

> `optional` **totalItemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of items in this specified range.

#### See

https://vocabulary.uncefact.org/totalItemQuantity

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying a type of this specified range.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value? {#value}

> `optional` **value**: `string`

A value, expressed as text, for this specified range.

#### See

https://vocabulary.uncefact.org/value

***

### valueBaseSystemCode? {#valuebasesystemcode}

> `optional` **valueBaseSystemCode**: `string`

The code specifying the value base system, such as Arabic numerals, for this specified range.

#### See

https://vocabulary.uncefact.org/valueBaseSystemCode

***

### valueCode? {#valuecode}

> `optional` **valueCode**: `string`

A code specifying a value for this specified range.

#### See

https://vocabulary.uncefact.org/valueCode
