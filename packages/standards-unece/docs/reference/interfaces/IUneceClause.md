# Interface: IUneceClause

A distinct article or provision in a document, which requires compliance.

## See

https://vocabulary.uncefact.org/Clause

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Clause"`

JSON-LD Type.

***

### associatedMeasurement? {#associatedmeasurement}

> `optional` **associatedMeasurement?**: [`IUneceMeasurement`](IUneceMeasurement.md)[]

A measurement associated with this document clause.

#### See

https://vocabulary.uncefact.org/associatedMeasurement

***

### associatedPeriod? {#associatedperiod}

> `optional` **associatedPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period of time associated with this document clause.

#### See

https://vocabulary.uncefact.org/associatedPeriod

***

### content? {#content}

> `optional` **content?**: `string`

Content, expressed as text, of this document clause.

#### See

https://vocabulary.uncefact.org/content

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier of this document clause.

#### See

https://vocabulary.uncefact.org/identifier

***

### uRLId? {#urlid}

> `optional` **uRLId?**: `string` \| `IJsonLdValueObject`

The Uniform Resource Locator (URL) for this document clause.

#### See

https://vocabulary.uncefact.org/uRLId
