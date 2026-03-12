# Interface: IUneceSpecialQuery

A special question or request for information.

## See

https://vocabulary.uncefact.org/SpecialQuery

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecialQuery"`

JSON-LD Type.

***

### content? {#content}

> `optional` **content**: `string`

Content, expressed as text, of this special query.

#### See

https://vocabulary.uncefact.org/content

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this special query.

#### See

https://vocabulary.uncefact.org/identifier

***

### latestResponseDateTime? {#latestresponsedatetime}

> `optional` **latestResponseDateTime**: `string`

The date, time, date time, or other date time value for the latest response to this special query.

#### See

https://vocabulary.uncefact.org/latestResponseDateTime

***

### responseDateTime? {#responsedatetime}

> `optional` **responseDateTime**: `string`

The date, time, date time, or other date time value of the response for this special query.

#### See

https://vocabulary.uncefact.org/responseDateTime

***

### responseStatusCode? {#responsestatuscode}

> `optional` **responseStatusCode**: `string`

The code specifying the response status for this special query.

#### See

https://vocabulary.uncefact.org/responseStatusCode

***

### subject? {#subject}

> `optional` **subject**: `string`

A subject, expressed as text, of this special query.

#### See

https://vocabulary.uncefact.org/subject

***

### submittedDateTime? {#submitteddatetime}

> `optional` **submittedDateTime**: `string`

The date, time, date time, or other date time value when this special query was submitted.

#### See

https://vocabulary.uncefact.org/submittedDateTime

***

### submittingPersonName? {#submittingpersonname}

> `optional` **submittingPersonName**: `string`

A name, expressed as text, of the person submitting this special query.

#### See

https://vocabulary.uncefact.org/submittingPersonName

***

### versionId? {#versionid}

> `optional` **versionId**: `string` \| `IJsonLdValueObject`

The identifier of the version for this special query.

#### See

https://vocabulary.uncefact.org/versionId
