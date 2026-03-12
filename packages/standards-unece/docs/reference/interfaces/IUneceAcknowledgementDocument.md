# Interface: IUneceAcknowledgementDocument

A document exchanged between parties for a business application level acknowledgement of the receipt of information.

## See

https://vocabulary.uncefact.org/AcknowledgementDocument

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AcknowledgementDocument"`

JSON-LD Type.

***

### acknowledgementDocumentChannelCode? {#acknowledgementdocumentchannelcode}

> `optional` **acknowledgementDocumentChannelCode**: `string`

The code specifying the channel by which this acknowledgement document is sent, such as mail, email, fax.

#### See

https://vocabulary.uncefact.org/acknowledgementDocumentChannelCode

***

### acknowledgementDocumentReasonInformation? {#acknowledgementdocumentreasoninformation}

> `optional` **acknowledgementDocumentReasonInformation**: `string`

Reason information, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/acknowledgementDocumentReasonInformation

***

### acknowledgementDocumentStatusCode? {#acknowledgementdocumentstatuscode}

> `optional` **acknowledgementDocumentStatusCode**: [`UneceStatusCodeList`](../type-aliases/UneceStatusCodeList.md)[]

A code specifying a status for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/acknowledgementDocumentStatusCode

***

### acknowledgementStatusCode? {#acknowledgementstatuscode}

> `optional` **acknowledgementStatusCode**: [`UneceAcknowledgementCodeList`](../type-aliases/UneceAcknowledgementCodeList.md)[]

A code specifying an acknowledgment status for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/acknowledgementStatusCode

***

### channelCode? {#channelcode}

> `optional` **channelCode**: `string`

The code specifying the channel by which this acknowledgement document is sent, such as mail, email, fax.

#### See

https://vocabulary.uncefact.org/channelCode

***

### controlRequirementIndicator? {#controlrequirementindicator}

> `optional` **controlRequirementIndicator**: `boolean`

The indication of whether or not this acknowledgement document has a control requirement.

#### See

https://vocabulary.uncefact.org/controlRequirementIndicator

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime**: `string`

The date or date time value of the creation of this acknowledgement document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### documentTypeCode? {#documenttypecode}

> `optional` **documentTypeCode**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)[]

A code specifying a type of acknowledgement document.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier of this acknowledgement document.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

The date, time, date time or other date time value for the issuance of this acknowledgement document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### itemIdentificationId? {#itemidentificationid}

> `optional` **itemIdentificationId**: `string` \| `IJsonLdValueObject`

The unique identifier of an item in this acknowledgement document.

#### See

https://vocabulary.uncefact.org/itemIdentificationId

***

### multipleReferencesIndicator? {#multiplereferencesindicator}

> `optional` **multipleReferencesIndicator**: `boolean`

The indication of whether or not this acknowledgement document has multiple references.

#### See

https://vocabulary.uncefact.org/multipleReferencesIndicator

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/name

***

### processCondition? {#processcondition}

> `optional` **processCondition**: `string`

A process condition, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/processCondition

***

### processConditionCode? {#processconditioncode}

> `optional` **processConditionCode**: `string`

The code specifying the process condition for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/processConditionCode

***

### referenceDocument? {#referencedocument}

> `optional` **referenceDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A document referenced by this acknowledgement document.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### reportReceiptDateTime? {#reportreceiptdatetime}

> `optional` **reportReceiptDateTime**: `string`

The date, time, date time or other date time value of the receipt of the report being acknowledged by this
acknowledgment document.

#### See

https://vocabulary.uncefact.org/reportReceiptDateTime

***

### reportSubmissionDateTime? {#reportsubmissiondatetime}

> `optional` **reportSubmissionDateTime**: `string`

The date, time, date time or other date time value of the submission of the report being acknowledged by this
acknowledgment document.

#### See

https://vocabulary.uncefact.org/reportSubmissionDateTime

***

### status? {#status}

> `optional` **status**: `string`

A status, expressed as text, for this acknowledgement document.

#### See

https://vocabulary.uncefact.org/status
