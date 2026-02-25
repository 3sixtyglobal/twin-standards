# Interface: IUneceDocument

Written, printed or electronic matter that is referenced.

## See

https://vocabulary.uncefact.org/Document

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Document"`

JSON-LD Type.

***

### acceptablePeriod?

> `optional` **acceptablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period within which this referenced document may be accepted.

#### See

https://vocabulary.uncefact.org/acceptablePeriod

***

### acceptanceDateTime?

> `optional` **acceptanceDateTime**: `string`

The date, time, date time, or other date time value of the acceptance of this referenced document.

#### See

https://vocabulary.uncefact.org/acceptanceDateTime

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file attached to this referenced document.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### attachmentBinaryObject?

> `optional` **attachmentBinaryObject**: `string`

A binary object that is attached or otherwise appended to this referenced document.

#### See

https://vocabulary.uncefact.org/attachmentBinaryObject

***

### authenticatedOriginalIndicator?

> `optional` **authenticatedOriginalIndicator**: `boolean`

The indication of whether or not this referenced document is an authenticated original.

#### See

https://vocabulary.uncefact.org/authenticatedOriginalIndicator

***

### categoryCode?

> `optional` **categoryCode**: `string`

The code specifying the category of this referenced document.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### communicationChannelCode?

> `optional` **communicationChannelCode**: [`UneceCommunicationChannelCodeList`](../type-aliases/UneceCommunicationChannelCodeList.md)

The code specifying the channel by which this referenced document is sent, such as mail, email, fax.

#### See

https://vocabulary.uncefact.org/communicationChannelCode

***

### contractualClause?

> `optional` **contractualClause**: [`IUneceClause`](IUneceClause.md)[]

A contractual clause of this referenced document.

#### See

https://vocabulary.uncefact.org/contractualClause

***

### controlRequirementIndicator?

> `optional` **controlRequirementIndicator**: `boolean`

The indication of whether or not this referenced document requires a control.

#### See

https://vocabulary.uncefact.org/controlRequirementIndicator

***

### copyIndicator?

> `optional` **copyIndicator**: `boolean`

The indication of whether or not the referenced document is a copy.

#### See

https://vocabulary.uncefact.org/copyIndicator

***

### copyIssuedQuantity?

> `optional` **copyIssuedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of copies issued of this referenced document.

#### See

https://vocabulary.uncefact.org/copyIssuedQuantity

***

### copyRequiredQuantity?

> `optional` **copyRequiredQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of copies required of this referenced document.

#### See

https://vocabulary.uncefact.org/copyRequiredQuantity

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this referenced document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### description?

> `optional` **description**: `string`

A textual description for this referenced document.

#### See

https://vocabulary.uncefact.org/description

***

### documentAmendmentPurposeCode?

> `optional` **documentAmendmentPurposeCode**: `string`

The code specifying the purpose of an amendment to this referenced document.

#### See

https://vocabulary.uncefact.org/documentAmendmentPurposeCode

***

### documentLanguageId?

> `optional` **documentLanguageId**: [`UneceLanguageId`](../type-aliases/UneceLanguageId.md)[]

An identifier for a language used in this referenced document.

#### See

https://vocabulary.uncefact.org/documentLanguageId

***

### documentLineStatusCode?

> `optional` **documentLineStatusCode**: [`UneceLineStatusCodeList`](../type-aliases/UneceLineStatusCodeList.md)

The code specifying the status of a line in this referenced document.

#### See

https://vocabulary.uncefact.org/documentLineStatusCode

***

### documentStatusCode?

> `optional` **documentStatusCode**: [`UneceDocumentStatusCodeList`](../type-aliases/UneceDocumentStatusCodeList.md)

The code specifying the status for this referenced document.

#### See

https://vocabulary.uncefact.org/documentStatusCode

***

### documentType?

> `optional` **documentType**: `string`

A type, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/documentType

***

### documentTypeCode?

> `optional` **documentTypeCode**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)

The code specifying the type of referenced document.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### effectiveSpecifiedPeriod?

> `optional` **effectiveSpecifiedPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period within which this referenced document is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### electronicPresentationIndicator?

> `optional` **electronicPresentationIndicator**: `boolean`

The indication of whether or not this referenced document is presented in an electronic format.

#### See

https://vocabulary.uncefact.org/electronicPresentationIndicator

***

### globalId?

> `optional` **globalId**: `string`

A unique global identifier for this referenced document.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier for this referenced document.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedAmount?

> `optional` **includedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value included in this referenced document.

#### See

https://vocabulary.uncefact.org/includedAmount

***

### includedNote?

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included in this referenced document.

#### See

https://vocabulary.uncefact.org/includedNote

***

### information?

> `optional` **information**: `string`

Information, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/information

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The formatted date or date time for the issuance of this referenced document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueLogisticsLocation?

> `optional` **issueLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics related location where this referenced document has been issued.

#### See

https://vocabulary.uncefact.org/issueLogisticsLocation

***

### issuerAssignedId?

> `optional` **issuerAssignedId**: `string`

The unique issuer assigned identifier for this referenced document.

#### See

https://vocabulary.uncefact.org/issuerAssignedId

***

### issuerParty?

> `optional` **issuerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade related party that issues this referenced document.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### issuerSpecifiedInstructions?

> `optional` **issuerSpecifiedInstructions**: [`IUneceDocumentHandlingInstructions`](IUneceDocumentHandlingInstructions.md)[]

Handling instructions specified by the issuer for this referenced document.

#### See

https://vocabulary.uncefact.org/issuerSpecifiedInstructions

***

### itemIdentificationId?

> `optional` **itemIdentificationId**: `string`

The unique identifier of an item in this referenced document.

#### See

https://vocabulary.uncefact.org/itemIdentificationId

***

### lineCountNumeric?

> `optional` **lineCountNumeric**: `string`

The number of lines for this referenced document.

#### See

https://vocabulary.uncefact.org/lineCountNumeric

***

### lineId?

> `optional` **lineId**: `string`

The unique identifier of a line in this referenced document.

#### See

https://vocabulary.uncefact.org/lineId

***

### lineItemQuantity?

> `optional` **lineItemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of line items in this referenced document.

#### See

https://vocabulary.uncefact.org/lineItemQuantity

***

### lodgementLocation?

> `optional` **lodgementLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics related location where this referenced document has been lodged.

#### See

https://vocabulary.uncefact.org/lodgementLocation

***

### messageFunctionPurposeCode?

> `optional` **messageFunctionPurposeCode**: [`UneceMessageFunctionCodeList`](../type-aliases/UneceMessageFunctionCodeList.md)

The code specifying the purpose of this referenced document.

#### See

https://vocabulary.uncefact.org/messageFunctionPurposeCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/name

***

### originalIssuedQuantity?

> `optional` **originalIssuedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of originals issued of this referenced document.

#### See

https://vocabulary.uncefact.org/originalIssuedQuantity

***

### originalRequiredQuantity?

> `optional` **originalRequiredQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of originals required of this referenced document.

#### See

https://vocabulary.uncefact.org/originalRequiredQuantity

***

### pageId?

> `optional` **pageId**: `string`

The identifier of the page for this referenced document.

#### See

https://vocabulary.uncefact.org/pageId

***

### previousRevisionId?

> `optional` **previousRevisionId**: `string`

An identifier for a previous revision of this referenced document.

#### See

https://vocabulary.uncefact.org/previousRevisionId

***

### processCondition?

> `optional` **processCondition**: `string`

A process condition, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/processCondition

***

### processConditionCode?

> `optional` **processConditionCode**: `string`

The code specifying the process condition for this referenced document.

#### See

https://vocabulary.uncefact.org/processConditionCode

***

### proprietaryType?

> `optional` **proprietaryType**: `string`

A proprietary type, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### receiptDateTime?

> `optional` **receiptDateTime**: `string`

The date, time, date time, or other date time value for the formal receipt of this referenced document.

#### See

https://vocabulary.uncefact.org/receiptDateTime

***

### recipientTradeParty?

> `optional` **recipientTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade related party that receives this referenced document.

#### See

https://vocabulary.uncefact.org/recipientTradeParty

***

### referenceDateTime?

> `optional` **referenceDateTime**: `string`

The reference date or date time for this referenced document.

#### See

https://vocabulary.uncefact.org/referenceDateTime

***

### referenceRelationshipTypeCode?

> `optional` **referenceRelationshipTypeCode**: [`UneceReferenceCodeList`](../type-aliases/UneceReferenceCodeList.md)

The code specifying the type of relationship between this referenced document and another artefact, such as a
replacement of an original document.

#### See

https://vocabulary.uncefact.org/referenceRelationshipTypeCode

***

### referenceTypeCode?

> `optional` **referenceTypeCode**: [`UneceReferenceCodeList`](../type-aliases/UneceReferenceCodeList.md)

The code specifying the reference type of this referenced document.

#### See

https://vocabulary.uncefact.org/referenceTypeCode

***

### remarks?

> `optional` **remarks**: `string`

A remark, expressed as text, regarding this referenced document.

#### See

https://vocabulary.uncefact.org/remarks

***

### reportCountNumeric?

> `optional` **reportCountNumeric**: `string`

The report count for this referenced document.

#### See

https://vocabulary.uncefact.org/reportCountNumeric

***

### revision?

> `optional` **revision**: `string`

A revision, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/revision

***

### revisionDateTime?

> `optional` **revisionDateTime**: `string`

A date, time, date time or other date time value for the revision of this referenced document.

#### See

https://vocabulary.uncefact.org/revisionDateTime

***

### revisionId?

> `optional` **revisionId**: `string`

A unique identifier for a revision of this referenced document.

#### See

https://vocabulary.uncefact.org/revisionId

***

### sectionName?

> `optional` **sectionName**: `string`

A section name, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/sectionName

***

### senderTradeParty?

> `optional` **senderTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade related party that sends this referenced document.

#### See

https://vocabulary.uncefact.org/senderTradeParty

***

### signatoryAuthentication?

> `optional` **signatoryAuthentication**: [`IUneceAuthentication`](IUneceAuthentication.md)[]

A signatory authentication for this referenced document.

#### See

https://vocabulary.uncefact.org/signatoryAuthentication

***

### specifiedDocumentStatus?

> `optional` **specifiedDocumentStatus**: [`IUneceDocumentStatus`](IUneceDocumentStatus.md)[]

Status information specified for this referenced document.

#### See

https://vocabulary.uncefact.org/specifiedDocumentStatus

***

### status?

> `optional` **status**: `string`

A status, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/status

***

### subordinateLineId?

> `optional` **subordinateLineId**: `string`

The identifier of the subordinate line of this referenced document.

#### See

https://vocabulary.uncefact.org/subordinateLineId

***

### subtypeCode?

> `optional` **subtypeCode**: `string`

A code specifying a subtype of this referenced document.

#### See

https://vocabulary.uncefact.org/subtypeCode

***

### totalIssueCountNumeric?

> `optional` **totalIssueCountNumeric**: `string`

The total issue count for this referenced document.

#### See

https://vocabulary.uncefact.org/totalIssueCountNumeric

***

### uRIId?

> `optional` **uRIId**: `string`

The unique Uniform Resource Identifier (URI) for this referenced document.

#### See

https://vocabulary.uncefact.org/uRIId

***

### validityPeriod?

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period of validity specified for this referenced document.

#### See

https://vocabulary.uncefact.org/validityPeriod

***

### versionId?

> `optional` **versionId**: `string`

The identifier for the version of this referenced document.

#### See

https://vocabulary.uncefact.org/versionId
