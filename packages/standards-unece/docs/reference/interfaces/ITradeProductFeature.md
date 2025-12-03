# Interface: ITradeProductFeature

Distinctive or characteristic parts of a trade product.

## See

https://vocabulary.uncefact.org/TradeProductFeature

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

> **type**: `"TradeProductFeature"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of this trade product feature.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this trade product feature.

#### See

https://vocabulary.uncefact.org/identifier

***

### marketingMeasure?

> `optional` **marketingMeasure**: [`IMeasureType`](IMeasureType.md)[]

A marketing measure for this trade product feature.

#### See

https://vocabulary.uncefact.org/marketingMeasure

***

### marketingPhrase?

> `optional` **marketingPhrase**: `string`

A catch phrase, expressed as text, for marketing of this trade product feature.

#### See

https://vocabulary.uncefact.org/marketingPhrase

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this trade product feature.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of trade product feature.

#### See

https://vocabulary.uncefact.org/typeCode
