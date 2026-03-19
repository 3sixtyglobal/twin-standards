# Interface: IUneceTaxRegistration

Registration with a specific tax authority.

## See

https://vocabulary.uncefact.org/TaxRegistration

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TaxRegistration"`

JSON-LD Type.

***

### associatedTax? {#associatedtax}

> `optional` **associatedTax?**: [`IUneceRegisteredTax`](IUneceRegisteredTax.md)

The registered tax associated with this tax registration.

#### See

https://vocabulary.uncefact.org/associatedTax

***

### iOSSId? {#iossid}

> `optional` **iOSSId?**: `string` \| `IJsonLdValueObject`

The Import One Stop Shop (IOSS) identifier for this tax registration.

#### See

https://vocabulary.uncefact.org/iOSSId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier for this tax registration.

#### See

https://vocabulary.uncefact.org/identifier
