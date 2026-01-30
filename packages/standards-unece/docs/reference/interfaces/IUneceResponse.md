# Interface: IUneceResponse

A response to a specification query.

## See

https://vocabulary.uncefact.org/Response

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"Response"`

JSON-LD Type.

***

### content?

> `optional` **content**: `string`

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

### identifier?

> `optional` **identifier**: `string`

The unique identifier for this specification response.

#### See

https://vocabulary.uncefact.org/identifier

***

### queryId?

> `optional` **queryId**: `string`

The unique identifier for the query to which this response refers.

#### See

https://vocabulary.uncefact.org/queryId

***

### responseTypeCode?

> `optional` **responseTypeCode**: [`UneceResponseTypeCodeList`](../type-aliases/UneceResponseTypeCodeList.md)[]

The code specifying the type of this specification response.

#### See

https://vocabulary.uncefact.org/responseTypeCode
