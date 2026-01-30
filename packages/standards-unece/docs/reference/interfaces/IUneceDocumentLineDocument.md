# Interface: IUneceDocumentLineDocument

A collection of data for a line on a piece of written, printed or electronic matter that provides information or
evidence.

## See

https://vocabulary.uncefact.org/DocumentLineDocument

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

> **type**: `"DocumentLineDocument"`

JSON-LD Type.

***

### buyerAssignedCategoryCode?

> `optional` **buyerAssignedCategoryCode**: `string`

The code specifying the category assigned by the buyer for this document line.

#### See

https://vocabulary.uncefact.org/buyerAssignedCategoryCode

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this document line.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### documentLineDocumentRequestedResponseTypeCode?

> `optional` **documentLineDocumentRequestedResponseTypeCode**: `string`

The code specifying the type of response requested for this document line.

#### See

https://vocabulary.uncefact.org/documentLineDocumentRequestedResponseTypeCode

***

### documentLineStatusCode?

> `optional` **documentLineStatusCode**: [`UneceLineStatusCodeList`](../type-aliases/UneceLineStatusCodeList.md)

The code specifying the status of this document line.

#### See

https://vocabulary.uncefact.org/documentLineStatusCode

***

### effectiveSpecifiedPeriod?

> `optional` **effectiveSpecifiedPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The period within which this document line is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this document line document.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedNote?

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included in this document line.

#### See

https://vocabulary.uncefact.org/includedNote

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value for the issuance of this document line.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### latestRevisionDateTime?

> `optional` **latestRevisionDateTime**: `string`

The date, time, date time, or other date time value for the latest revision of this document line.

#### See

https://vocabulary.uncefact.org/latestRevisionDateTime

***

### lineId?

> `optional` **lineId**: `string`

The unique identifier of this document line.

#### See

https://vocabulary.uncefact.org/lineId

***

### lineStatusReason?

> `optional` **lineStatusReason**: `string`

A reason, expressed as text, for the line status in this document line.

#### See

https://vocabulary.uncefact.org/lineStatusReason

***

### lineStatusReasonCode?

> `optional` **lineStatusReasonCode**: `string`

The code specifying the line status reason for this document line.

#### See

https://vocabulary.uncefact.org/lineStatusReasonCode

***

### parentLineId?

> `optional` **parentLineId**: `string`

The unique identifier of the parent line to this document line.

#### See

https://vocabulary.uncefact.org/parentLineId

***

### publicationDateTime?

> `optional` **publicationDateTime**: `string`

The date, time, date time, or other date time value of the publication of this document line.

#### See

https://vocabulary.uncefact.org/publicationDateTime

***

### referenceAcknowledgementDocument?

> `optional` **referenceAcknowledgementDocument**: [`IUneceAcknowledgementDocument`](IUneceAcknowledgementDocument.md)[]

The acknowledgement document referenced in this document line.

#### See

https://vocabulary.uncefact.org/referenceAcknowledgementDocument

***

### referenceDocument?

> `optional` **referenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced from this document line.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### responseReasonCode?

> `optional` **responseReasonCode**: `string`

The code specifying the response reason of this document line.

#### See

https://vocabulary.uncefact.org/responseReasonCode

***

### subordinateLineId?

> `optional` **subordinateLineId**: `string`

An identifier of a subordinate line of this document line.

#### See

https://vocabulary.uncefact.org/subordinateLineId

***

### uUIDLineId?

> `optional` **uUIDLineId**: `string`

The universally unique identifier (UUID) of this document line.

#### See

https://vocabulary.uncefact.org/uUIDLineId
