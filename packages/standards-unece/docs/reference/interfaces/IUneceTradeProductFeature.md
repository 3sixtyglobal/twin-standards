# Interface: IUneceTradeProductFeature

Distinctive or characteristic parts of a trade product.

## See

https://vocabulary.uncefact.org/TradeProductFeature

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeProductFeature"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this trade product feature.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this trade product feature.

#### See

https://vocabulary.uncefact.org/identifier

***

### marketingMeasure? {#marketingmeasure}

> `optional` **marketingMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A marketing measure for this trade product feature.

#### See

https://vocabulary.uncefact.org/marketingMeasure

***

### marketingPhrase? {#marketingphrase}

> `optional` **marketingPhrase?**: `string`

A catch phrase, expressed as text, for marketing of this trade product feature.

#### See

https://vocabulary.uncefact.org/marketingPhrase

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this trade product feature.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of trade product feature.

#### See

https://vocabulary.uncefact.org/typeCode
