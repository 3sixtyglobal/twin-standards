# Interface: IUneceGeopoliticalRegion

A collection of countries and/or economies united for trade purposes.

## See

https://vocabulary.uncefact.org/GeopoliticalRegion

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"GeopoliticalRegion"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this trade geopolitical region.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedCountry? {#includedcountry}

> `optional` **includedCountry?**: [`IUneceCountry`](IUneceCountry.md)[]

A country included in this trade geopolitical region.

#### See

https://vocabulary.uncefact.org/includedCountry

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this trade geopolitical region.

#### See

https://vocabulary.uncefact.org/name

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of trade geopolitical region.

#### See

https://vocabulary.uncefact.org/typeCode
