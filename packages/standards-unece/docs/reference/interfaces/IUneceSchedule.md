# Interface: IUneceSchedule

A series of planned activities or things to be done in this supply chain.

## See

https://vocabulary.uncefact.org/Schedule

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Schedule"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this supply chain schedule.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this supply chain schedule.

#### See

https://vocabulary.uncefact.org/identifier

***

### occurrenceDateTime? {#occurrencedatetime}

> `optional` **occurrenceDateTime**: `string`

A date, time, date time, or other date time of an occurrence in this supply chain schedule.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### statusCode? {#statuscode}

> `optional` **statusCode**: `string`

A code specifying the status of this supply chain schedule.

#### See

https://vocabulary.uncefact.org/statusCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

A code specifying the type of supply chain schedule.

#### See

https://vocabulary.uncefact.org/typeCode
