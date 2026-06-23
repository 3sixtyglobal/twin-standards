# Interface: IUneceVersion

A specific variant of a document.

## See

https://vocabulary.uncefact.org/Version

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Version"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this document version.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

The date, time, date and time or other date time value of issue of this document version.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, of this document version.

#### See

https://vocabulary.uncefact.org/name
