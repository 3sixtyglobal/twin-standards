# Interface: IUneceProduce

Agricultural plants or plant products grown and harvested, such as grain, fruit, vegetables, silage.

## See

https://vocabulary.uncefact.org/Produce

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Produce"`

JSON-LD Type.

***

### calculatedYieldMeasure?

> `optional` **calculatedYieldMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the calculated yield, such as weight per surface area unit, of this crop produce.

#### See

https://vocabulary.uncefact.org/calculatedYieldMeasure

***

### estimatedYieldMeasure?

> `optional` **estimatedYieldMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the estimated yield, such as weight per surface area unit, of this crop produce.

#### See

https://vocabulary.uncefact.org/estimatedYieldMeasure

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this crop produce.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputSpecifiedBatch?

> `optional` **inputSpecifiedBatch**: [`IUneceCropProduceBatch`](IUneceCropProduceBatch.md)[]

An input batch crop produce, such as seed or fertilizer, specified for this crop produce.

#### See

https://vocabulary.uncefact.org/inputSpecifiedBatch

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this crop produce.

#### See

https://vocabulary.uncefact.org/name

***

### outputSpecifiedBatch

> **outputSpecifiedBatch**: [`IUneceCropProduceBatch`](IUneceCropProduceBatch.md)[]

An output batch crop produce, such as potatoes, grain, straw, specified for this crop produce.

#### See

https://vocabulary.uncefact.org/outputSpecifiedBatch

***

### subordinateTypeCode?

> `optional` **subordinateTypeCode**: `string`

The code specifying the subordinate type of crop produce, such as product or by-product.

#### See

https://vocabulary.uncefact.org/subordinateTypeCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of crop produce.

#### See

https://vocabulary.uncefact.org/typeCode
