# Interface: IUneceDocumentStatus

The information relevant to a condition related to a document.

## See

https://vocabulary.uncefact.org/DocumentStatus

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"DocumentStatus"`

JSON-LD Type.

***

### condition?

> `optional` **condition**: `string`

A condition, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/condition

***

### description?

> `optional` **description**: `string`

The textual description of this document status.

#### See

https://vocabulary.uncefact.org/description

***

### documentStatusConditionCode?

> `optional` **documentStatusConditionCode**: [`UneceDocumentStatusCodeList`](../type-aliases/UneceDocumentStatusCodeList.md)

The code specifying the condition of this document status.

#### See

https://vocabulary.uncefact.org/documentStatusConditionCode

***

### documentStatusProcessConditionCode?

> `optional` **documentStatusProcessConditionCode**: `string`

The code specifying the process condition of this document status.

#### See

https://vocabulary.uncefact.org/documentStatusProcessConditionCode

***

### documentStatusReasonCode?

> `optional` **documentStatusReasonCode**: `string`

A code specifying a reason for this document status.

#### See

https://vocabulary.uncefact.org/documentStatusReasonCode

***

### includedNote?

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included for this document status.

#### See

https://vocabulary.uncefact.org/includedNote

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/information

***

### invalidInformation?

> `optional` **invalidInformation**: `string`

The invalid information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/invalidInformation

***

### processCondition?

> `optional` **processCondition**: `string`

A process condition, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/processCondition

***

### reason?

> `optional` **reason**: `string`

A reason, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/reason

***

### reasonClassification?

> `optional` **reasonClassification**: `string`

A reason classification, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/reasonClassification

***

### reasonClassificationCode?

> `optional` **reasonClassificationCode**: `string`

The code specifying the reason classification for this document status.

#### See

https://vocabulary.uncefact.org/reasonClassificationCode

***

### reasonInformation?

> `optional` **reasonInformation**: `string`

Reason information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/reasonInformation

***

### reasonInformationCode?

> `optional` **reasonInformationCode**: `string`

The code specifying the reason for the information for this document status.

#### See

https://vocabulary.uncefact.org/reasonInformationCode

***

### referenceDateTime?

> `optional` **referenceDateTime**: `string`

The reference date, time, date time or other date time value for this document status.

#### See

https://vocabulary.uncefact.org/referenceDateTime

***

### requestedAction?

> `optional` **requestedAction**: `string`

A requested action, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/requestedAction

***

### requestedActionCode?

> `optional` **requestedActionCode**: `string`

The code specifying the requested action for this document status.

#### See

https://vocabulary.uncefact.org/requestedActionCode

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for this document status.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### specifiedDocumentCharacteristic?

> `optional` **specifiedDocumentCharacteristic**: [`IUneceDocumentCharacteristic`](IUneceDocumentCharacteristic.md)[]

A document characteristic specified for this document status.

#### See

https://vocabulary.uncefact.org/specifiedDocumentCharacteristic

***

### validInformation?

> `optional` **validInformation**: `string`

The valid information, expressed as text, for this document status.

#### See

https://vocabulary.uncefact.org/validInformation

***

### validityPeriod?

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A specified validity period for this document status.

#### See

https://vocabulary.uncefact.org/validityPeriod
