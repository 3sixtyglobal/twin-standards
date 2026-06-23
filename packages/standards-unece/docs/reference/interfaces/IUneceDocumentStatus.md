# Interface: IUneceDocumentStatus

The information relevant to a condition related to a document.

## See

https://vocabulary.uncefact.org/DocumentStatus

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DocumentStatus"`

JSON-LD Type.

***

### condition? {#condition}

> `optional` **condition?**: `string`

A condition, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/condition

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this document status.

#### See

https://vocabulary.uncefact.org/description

***

### documentStatusConditionCode? {#documentstatusconditioncode}

> `optional` **documentStatusConditionCode?**: [`UneceDocumentStatusCodeList`](../type-aliases/UneceDocumentStatusCodeList.md)

The code specifying the condition of this document status.

#### See

https://vocabulary.uncefact.org/documentStatusConditionCode

***

### documentStatusProcessConditionCode? {#documentstatusprocessconditioncode}

> `optional` **documentStatusProcessConditionCode?**: `string`

The code specifying the process condition of this document status.

#### See

https://vocabulary.uncefact.org/documentStatusProcessConditionCode

***

### documentStatusReasonCode? {#documentstatusreasoncode}

> `optional` **documentStatusReasonCode?**: `string`

A code specifying a reason for this document status.

#### See

https://vocabulary.uncefact.org/documentStatusReasonCode

***

### includedNote? {#includednote}

> `optional` **includedNote?**: [`IUneceNote`](IUneceNote.md)[]

A note included for this document status.

#### See

https://vocabulary.uncefact.org/includedNote

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/information

***

### invalidInformation? {#invalidinformation}

> `optional` **invalidInformation?**: `string`

The invalid information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/invalidInformation

***

### processCondition? {#processcondition}

> `optional` **processCondition?**: `string`

A process condition, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/processCondition

***

### reason? {#reason}

> `optional` **reason?**: `string`

A reason, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonClassification? {#reasonclassification}

> `optional` **reasonClassification?**: `string`

A reason classification, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/reasonClassification

***

### reasonClassificationCode? {#reasonclassificationcode}

> `optional` **reasonClassificationCode?**: `string`

The code specifying the reason classification for this document status.

#### See

https://vocabulary.uncefact.org/reasonClassificationCode

***

### reasonInformation? {#reasoninformation}

> `optional` **reasonInformation?**: `string`

Reason information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/reasonInformation

***

### reasonInformationCode? {#reasoninformationcode}

> `optional` **reasonInformationCode?**: `string`

The code specifying the reason for the information for this document status.

#### See

https://vocabulary.uncefact.org/reasonInformationCode

***

### referenceDateTime? {#referencedatetime}

> `optional` **referenceDateTime?**: `string`

The reference date, time, date time or other date time value for this document status.

#### See

https://vocabulary.uncefact.org/referenceDateTime

***

### requestedAction? {#requestedaction}

> `optional` **requestedAction?**: `string`

A requested action, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/requestedAction

***

### requestedActionCode? {#requestedactioncode}

> `optional` **requestedActionCode?**: `string`

The code specifying the requested action for this document status.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

A sequence number for this document status.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedDocumentCharacteristic? {#specifieddocumentcharacteristic}

> `optional` **specifiedDocumentCharacteristic?**: [`IUneceDocumentCharacteristic`](IUneceDocumentCharacteristic.md)[]

A document characteristic specified for this document status.

#### See

https://vocabulary.uncefact.org/specifiedDocumentCharacteristic

***

### validInformation? {#validinformation}

> `optional` **validInformation?**: `string`

The valid information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/validInformation

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified validity period for this document status.

#### See

https://vocabulary.uncefact.org/validityPeriod
