# Interface: IUneceMarketplace

An actual or virtual place where buyers and sellers interact, directly or through intermediaries, to trade goods or
services.

## See

https://vocabulary.uncefact.org/Marketplace

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Marketplace"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this specified marketplace.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this specified marketplace.

#### See

https://vocabulary.uncefact.org/name

***

### orderingAvailablePeriod? {#orderingavailableperiod}

> `optional` **orderingAvailablePeriod?**: [`IUneceAvailablePeriod`](IUneceAvailablePeriod.md)[]

An available ordering period for this specified marketplace.

#### See

https://vocabulary.uncefact.org/orderingAvailablePeriod

***

### salesMethodCode? {#salesmethodcode}

> `optional` **salesMethodCode?**: `string`

The code specifying a sales method, such as an auction clock or mediation, for this specified marketplace.

#### See

https://vocabulary.uncefact.org/salesMethodCode

***

### virtualIndicator? {#virtualindicator}

> `optional` **virtualIndicator?**: `boolean`

The indication of whether or not this specified marketplace is virtual, such as a web-based marketplace.

#### See

https://vocabulary.uncefact.org/virtualIndicator

***

### websiteURIId? {#websiteuriid}

> `optional` **websiteURIId?**: `string` \| `IJsonLdValueObject`

A website Uniform Resource Identifier (URI) for this specified marketplace.

#### See

https://vocabulary.uncefact.org/websiteURIId
