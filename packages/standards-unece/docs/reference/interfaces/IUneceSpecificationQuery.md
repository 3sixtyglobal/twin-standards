# Interface: IUneceSpecificationQuery

A formally raised question or request for information about this specification.

## See

https://vocabulary.uncefact.org/SpecificationQuery

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecificationQuery"`

JSON-LD Type.

***

### content {#content}

> **content**: `string`

The content, expressed as text, of this specification query.

#### See

https://vocabulary.uncefact.org/content

***

### contractualLanguageCode? {#contractuallanguagecode}

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this specification query.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this specification query.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of specification query.

#### See

https://vocabulary.uncefact.org/typeCode
