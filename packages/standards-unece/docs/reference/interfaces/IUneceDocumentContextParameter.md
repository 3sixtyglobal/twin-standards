# Interface: IUneceDocumentContextParameter

A feature that is fixed for a particular document context.

## See

https://vocabulary.uncefact.org/DocumentContextParameter

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DocumentContextParameter"`

JSON-LD Type.

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier of this document context parameter.

#### See

https://vocabulary.uncefact.org/identifier

***

### specifiedVersion? {#specifiedversion}

> `optional` **specifiedVersion?**: [`IUneceVersion`](IUneceVersion.md)

The document version specified for this document context parameter.

#### See

https://vocabulary.uncefact.org/specifiedVersion

***

### value? {#value}

> `optional` **value?**: `string`

The value, expressed as text, of this document context parameter.

#### See

https://vocabulary.uncefact.org/value
