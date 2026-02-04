# Interface: IUneceMarketplace

An actual or virtual place where buyers and sellers interact, directly or through intermediaries, to trade goods or
services.

## See

https://vocabulary.uncefact.org/Marketplace

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

> **type**: `"Marketplace"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this specified marketplace.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this specified marketplace.

#### See

https://vocabulary.uncefact.org/name

***

### orderingAvailablePeriod?

> `optional` **orderingAvailablePeriod**: [`IUneceAvailablePeriod`](IUneceAvailablePeriod.md)[]

An available ordering period for this specified marketplace.

#### See

https://vocabulary.uncefact.org/orderingAvailablePeriod

***

### salesMethodCode?

> `optional` **salesMethodCode**: `string`

The code specifying a sales method, such as an auction clock or mediation, for this specified marketplace.

#### See

https://vocabulary.uncefact.org/salesMethodCode

***

### virtualIndicator?

> `optional` **virtualIndicator**: `boolean`

The indication of whether or not this specified marketplace is virtual, such as a web-based marketplace.

#### See

https://vocabulary.uncefact.org/virtualIndicator

***

### websiteURIId?

> `optional` **websiteURIId**: `string`

A website Uniform Resource Identifier (URI) for this specified marketplace.

#### See

https://vocabulary.uncefact.org/websiteURIId
