# Interface: IUneceProduce

Agricultural plants or plant products grown and harvested, such as grain, fruit, vegetables, silage.

## See

https://vocabulary.uncefact.org/Produce

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Produce"`

JSON-LD Type.

***

### calculatedYieldMeasure? {#calculatedyieldmeasure}

> `optional` **calculatedYieldMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the calculated yield, such as weight per surface area unit, of this crop produce.

#### See

https://vocabulary.uncefact.org/calculatedYieldMeasure

***

### estimatedYieldMeasure? {#estimatedyieldmeasure}

> `optional` **estimatedYieldMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the estimated yield, such as weight per surface area unit, of this crop produce.

#### See

https://vocabulary.uncefact.org/estimatedYieldMeasure

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier for this crop produce.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputSpecifiedBatch? {#inputspecifiedbatch}

> `optional` **inputSpecifiedBatch**: [`IUneceCropProduceBatch`](IUneceCropProduceBatch.md)[]

An input batch crop produce, such as seed or fertilizer, specified for this crop produce.

#### See

https://vocabulary.uncefact.org/inputSpecifiedBatch

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this crop produce.

#### See

https://vocabulary.uncefact.org/name

***

### outputSpecifiedBatch {#outputspecifiedbatch}

> **outputSpecifiedBatch**: [`IUneceCropProduceBatch`](IUneceCropProduceBatch.md)[]

An output batch crop produce, such as potatoes, grain, straw, specified for this crop produce.

#### See

https://vocabulary.uncefact.org/outputSpecifiedBatch

***

### subordinateTypeCode? {#subordinatetypecode}

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of crop produce, such as product or by-product.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of crop produce.

#### See

https://vocabulary.uncefact.org/typeCode
