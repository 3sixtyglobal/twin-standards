# Interface: IUneceResponse

A response to a specification query.

## See

https://vocabulary.uncefact.org/Response

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Response"`

JSON-LD Type.

***

### content

> **content**: `string`

The content, expressed as text, of this specification response.

#### See

https://vocabulary.uncefact.org/content

***

### contractualLanguageCode?

> `optional` **contractualLanguageCode**: `string`

The code specifying the contractual language for this specification response.

#### See

https://vocabulary.uncefact.org/contractualLanguageCode

***

### identifier

> **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier for this specification response.

#### See

https://vocabulary.uncefact.org/identifier

***

### queryId?

> `optional` **queryId**: `string` \| `IJsonLdValueObject`

The unique identifier for the query to which this response refers.

#### See

https://vocabulary.uncefact.org/queryId

***

### responseTypeCode?

> `optional` **responseTypeCode**: [`UneceResponseTypeCodeList`](../type-aliases/UneceResponseTypeCodeList.md)

The code specifying the type of this specification response.

#### See

https://vocabulary.uncefact.org/responseTypeCode
