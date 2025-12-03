# Interface: ISpecialQuery

A special question or request for information.

## See

https://vocabulary.uncefact.org/SpecialQuery

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"SpecialQuery"`

JSON-LD Type.

***

### content?

> `optional` **content**: `string`

Content, expressed as text, of this special query.

#### See

https://vocabulary.uncefact.org/content

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this special query.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestResponseDateTime?

> `optional` **latestResponseDateTime**: `string`

The date, time, date time, or other date time value for the latest response to this special query.

#### See

https://vocabulary.uncefact.org/latestResponseDateTime

***

### responseDateTime?

> `optional` **responseDateTime**: `string`

The date, time, date time, or other date time value of the response for this special query.

#### See

https://vocabulary.uncefact.org/responseDateTime

***

### responseStatusCode?

> `optional` **responseStatusCode**: `string`

The code specifying the response status for this special query.

#### See

https://vocabulary.uncefact.org/responseStatusCode

***

### subject?

> `optional` **subject**: `string`

A subject, expressed as text, of this special query.

#### See

https://vocabulary.uncefact.org/subject

***

### submittedDateTime?

> `optional` **submittedDateTime**: `string`

The date, time, date time, or other date time value when this special query was submitted.

#### See

https://vocabulary.uncefact.org/submittedDateTime

***

### submittingPersonName?

> `optional` **submittingPersonName**: `string`

A name, expressed as text, of the person submitting this special query.

#### See

https://vocabulary.uncefact.org/submittingPersonName

***

### versionId?

> `optional` **versionId**: `string`

The identifier of the version for this special query.

#### See

https://vocabulary.uncefact.org/versionId
