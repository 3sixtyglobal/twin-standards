# Interface: IUneceRange

A row, line or series, commonly used to express the difference between lowest and highest values.

## See

https://vocabulary.uncefact.org/Range

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

> **type**: `"Range"`

JSON-LD Type.

***

### endId?

> `optional` **endId**: `string`

The identifier of the end of this specified range.

#### See

https://vocabulary.uncefact.org/endId

***

### maximumValueMeasure?

> `optional` **maximumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the maximum value for this specified range.

#### See

https://vocabulary.uncefact.org/maximumValueMeasure

***

### minimumValueMeasure?

> `optional` **minimumValueMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the minimum value for this specified range.

#### See

https://vocabulary.uncefact.org/minimumValueMeasure

***

### startId?

> `optional` **startId**: `string`

The identifier of the start of this specified range.

#### See

https://vocabulary.uncefact.org/startId

***

### totalItemQuantity?

> `optional` **totalItemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of items in this specified range.

#### See

https://vocabulary.uncefact.org/totalItemQuantity

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying a type of this specified range.

#### See

https://vocabulary.uncefact.org/typeCode

***

### value?

> `optional` **value**: `string`

A value, expressed as text, for this specified range.

#### See

https://vocabulary.uncefact.org/value

***

### valueBaseSystemCode?

> `optional` **valueBaseSystemCode**: `string`

The code specifying the value base system, such as Arabic numerals, for this specified range.

#### See

https://vocabulary.uncefact.org/valueBaseSystemCode

***

### valueCode?

> `optional` **valueCode**: `string`

A code specifying a value for this specified range.

#### See

https://vocabulary.uncefact.org/valueCode
