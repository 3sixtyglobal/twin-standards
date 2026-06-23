# Interface: IUneceDocumentLineDocument

A collection of data for a line on a piece of written, printed or electronic matter that provides information or
evidence.

## See

https://vocabulary.uncefact.org/DocumentLineDocument

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DocumentLineDocument"`

JSON-LD Type.

***

### buyerAssignedCategoryCode? {#buyerassignedcategorycode}

> `optional` **buyerAssignedCategoryCode?**: `string`

The code specifying the category assigned by the buyer for this document line.

#### See

https://vocabulary.uncefact.org/buyerAssignedCategoryCode

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

The code specifying the category of this document line.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### documentLineDocumentRequestedResponseTypeCode? {#documentlinedocumentrequestedresponsetypecode}

> `optional` **documentLineDocumentRequestedResponseTypeCode?**: `string`

The code specifying the type of response requested for this document line.

#### See

https://vocabulary.uncefact.org/documentLineDocumentRequestedResponseTypeCode

***

### documentLineStatusCode? {#documentlinestatuscode}

> `optional` **documentLineStatusCode?**: [`UneceLineStatusCodeList`](../type-aliases/UneceLineStatusCodeList.md)

The code specifying the status of this document line.

#### See

https://vocabulary.uncefact.org/documentLineStatusCode

***

### effectiveSpecifiedPeriod? {#effectivespecifiedperiod}

> `optional` **effectiveSpecifiedPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The period within which this document line is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier of this document line document.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedNote? {#includednote}

> `optional` **includedNote?**: [`IUneceNote`](IUneceNote.md)[]

A note included in this document line.

#### See

https://vocabulary.uncefact.org/includedNote

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

The date, time, date time, or other date time value for the issuance of this document line.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### latestRevisionDateTime? {#latestrevisiondatetime}

> `optional` **latestRevisionDateTime?**: `string`

The date, time, date time, or other date time value for the latest revision of this document line.

#### See

https://vocabulary.uncefact.org/latestRevisionDateTime

***

### lineId? {#lineid}

> `optional` **lineId?**: `string` \| `IJsonLdValueObject`

The unique identifier of this document line.

#### See

https://vocabulary.uncefact.org/lineId

***

### lineStatusReason? {#linestatusreason}

> `optional` **lineStatusReason?**: `string`

A reason, expressed as text, for the line status in this document line.

#### See

https://vocabulary.uncefact.org/lineStatusReason

***

### lineStatusReasonCode? {#linestatusreasoncode}

> `optional` **lineStatusReasonCode?**: `string`

The code specifying the line status reason for this document line.

#### See

https://vocabulary.uncefact.org/lineStatusReasonCode

***

### parentLineId? {#parentlineid}

> `optional` **parentLineId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the parent line to this document line.

#### See

https://vocabulary.uncefact.org/parentLineId

***

### publicationDateTime? {#publicationdatetime}

> `optional` **publicationDateTime?**: `string`

The date, time, date time, or other date time value of the publication of this document line.

#### See

https://vocabulary.uncefact.org/publicationDateTime

***

### referenceAcknowledgementDocument? {#referenceacknowledgementdocument}

> `optional` **referenceAcknowledgementDocument?**: [`IUneceAcknowledgementDocument`](IUneceAcknowledgementDocument.md)

The acknowledgement document referenced in this document line.

#### See

https://vocabulary.uncefact.org/referenceAcknowledgementDocument

***

### referenceDocument? {#referencedocument}

> `optional` **referenceDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced from this document line.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### responseReasonCode? {#responsereasoncode}

> `optional` **responseReasonCode?**: `string`

The code specifying the response reason of this document line.

#### See

https://vocabulary.uncefact.org/responseReasonCode

***

### subordinateLineId? {#subordinatelineid}

> `optional` **subordinateLineId?**: `string` \| `IJsonLdValueObject`

An identifier of a subordinate line of this document line.

#### See

https://vocabulary.uncefact.org/subordinateLineId

***

### uUIDLineId? {#uuidlineid}

> `optional` **uUIDLineId?**: `string` \| `IJsonLdValueObject`

The universally unique identifier (UUID) of this document line.

#### See

https://vocabulary.uncefact.org/uUIDLineId
