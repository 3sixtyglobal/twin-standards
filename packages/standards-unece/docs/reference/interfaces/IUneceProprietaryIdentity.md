# Interface: IUneceProprietaryIdentity

Proprietary information which uniquely identifies a person or organization.

## See

https://vocabulary.uncefact.org/ProprietaryIdentity

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProprietaryIdentity"`

JSON-LD Type.

***

### identificationType? {#identificationtype}

> `optional` **identificationType?**: `string`

An identifier type, expressed as text, for this proprietary identity.

#### See

https://vocabulary.uncefact.org/identificationType

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A proprietary identifier.

#### See

https://vocabulary.uncefact.org/identifier
