# Interface: IUneceAcknowledgementDocument

A document exchanged between parties for a business application level acknowledgement of the receipt of information.

## See

https://vocabulary.uncefact.org/AcknowledgementDocument

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

> **type**: `"AcknowledgementDocument"`

JSON-LD Type.

***

### acknowledgementDocumentChannelCode?

> `optional` **acknowledgementDocumentChannelCode**: `string`

The code specifying the channel by which this acknowledgement document is sent, such as mail, email, fax.

#### See

https://vocabulary.uncefact.org/acknowledgementDocumentChannelCode

***

### acknowledgementDocumentReasonInformation?

> `optional` **acknowledgementDocumentReasonInformation**: `string`

Reason information, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/acknowledgementDocumentReasonInformation

***

### acknowledgementDocumentStatusCode?

> `optional` **acknowledgementDocumentStatusCode**: [`UneceStatusCodeList`](../type-aliases/UneceStatusCodeList.md)[]

A code specifying a status for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/acknowledgementDocumentStatusCode

***

### acknowledgementStatusCode?

> `optional` **acknowledgementStatusCode**: [`UneceAcknowledgementCodeList`](../type-aliases/UneceAcknowledgementCodeList.md)[]

A code specifying an acknowledgment status for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/acknowledgementStatusCode

***

### channelCode?

> `optional` **channelCode**: `string`

The code specifying the channel by which this acknowledgement document is sent, such as mail, email, fax.

#### See

https://vocabulary.uncefact.org/channelCode

***

### controlRequirementIndicator?

> `optional` **controlRequirementIndicator**: `boolean`

The indication of whether or not this acknowledgement document has a control requirement.

#### See

https://vocabulary.uncefact.org/controlRequirementIndicator

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date or date time value of the creation of this acknowledgement document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### documentTypeCode?

> `optional` **documentTypeCode**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)[]

A code specifying a type of acknowledgement document.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this acknowledgement document.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time or other date time value for the issuance of this acknowledgement document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### itemIdentificationId?

> `optional` **itemIdentificationId**: `string`

The unique identifier of an item in this acknowledgement document.

#### See

https://vocabulary.uncefact.org/itemIdentificationId

***

### multipleReferencesIndicator?

> `optional` **multipleReferencesIndicator**: `boolean`

The indication of whether or not this acknowledgement document has multiple references.

#### See

https://vocabulary.uncefact.org/multipleReferencesIndicator

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/name

***

### processCondition?

> `optional` **processCondition**: `string`

A process condition, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/processCondition

***

### processConditionCode?

> `optional` **processConditionCode**: `string`

The code specifying the process condition for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/processConditionCode

***

### referenceDocument?

> `optional` **referenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced by this acknowledgement document.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### reportReceiptDateTime?

> `optional` **reportReceiptDateTime**: `string`

The date, time, date time or other date time value of the receipt of the report being acknowledged by this
acknowledgment document.

#### See

https://vocabulary.uncefact.org/reportReceiptDateTime

***

### reportSubmissionDateTime?

> `optional` **reportSubmissionDateTime**: `string`

The date, time, date time or other date time value of the submission of the report being acknowledged by this
acknowledgment document.

#### See

https://vocabulary.uncefact.org/reportSubmissionDateTime

***

### status?

> `optional` **status**: `string`

A status, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/status
