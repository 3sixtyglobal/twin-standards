# Interface: IUneceDocument

Written, printed or electronic matter that is referenced.

## See

https://vocabulary.uncefact.org/Document

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Document"`

JSON-LD Type.

***

### acceptablePeriod? {#acceptableperiod}

> `optional` **acceptablePeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period within which this referenced document may be accepted.

#### See

https://vocabulary.uncefact.org/acceptablePeriod

***

### acceptanceDateTime? {#acceptancedatetime}

> `optional` **acceptanceDateTime**: `string`

The date, time, date time, or other date time value of the acceptance of this referenced document.

#### See

https://vocabulary.uncefact.org/acceptanceDateTime

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A specified binary file attached to this referenced document.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### attachmentBinaryObject? {#attachmentbinaryobject}

> `optional` **attachmentBinaryObject**: `string`

A binary object that is attached or otherwise appended to this referenced document.

#### See

https://vocabulary.uncefact.org/attachmentBinaryObject

***

### authenticatedOriginalIndicator? {#authenticatedoriginalindicator}

> `optional` **authenticatedOriginalIndicator**: `boolean`

The indication of whether or not this referenced document is an authenticated original.

#### See

https://vocabulary.uncefact.org/authenticatedOriginalIndicator

***

### categoryCode? {#categorycode}

> `optional` **categoryCode**: `string`

The code specifying the category of this referenced document.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### communicationChannelCode? {#communicationchannelcode}

> `optional` **communicationChannelCode**: [`UneceCommunicationChannelCodeList`](../type-aliases/UneceCommunicationChannelCodeList.md)

The code specifying the channel by which this referenced document is sent, such as mail, email, fax.

#### See

https://vocabulary.uncefact.org/communicationChannelCode

***

### contractualClause? {#contractualclause}

> `optional` **contractualClause**: [`IUneceClause`](IUneceClause.md)[]

A contractual clause of this referenced document.

#### See

https://vocabulary.uncefact.org/contractualClause

***

### controlRequirementIndicator? {#controlrequirementindicator}

> `optional` **controlRequirementIndicator**: `boolean`

The indication of whether or not this referenced document requires a control.

#### See

https://vocabulary.uncefact.org/controlRequirementIndicator

***

### copyIndicator? {#copyindicator}

> `optional` **copyIndicator**: `boolean`

The indication of whether or not the referenced document is a copy.

#### See

https://vocabulary.uncefact.org/copyIndicator

***

### copyIssuedQuantity? {#copyissuedquantity}

> `optional` **copyIssuedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of copies issued of this referenced document.

#### See

https://vocabulary.uncefact.org/copyIssuedQuantity

***

### copyRequiredQuantity? {#copyrequiredquantity}

> `optional` **copyRequiredQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of copies required of this referenced document.

#### See

https://vocabulary.uncefact.org/copyRequiredQuantity

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime**: `string`

The date, time, date time, or other date time value of the creation of this referenced document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### description? {#description}

> `optional` **description**: `string`

A textual description for this referenced document.

#### See

https://vocabulary.uncefact.org/description

***

### documentAmendmentPurposeCode? {#documentamendmentpurposecode}

> `optional` **documentAmendmentPurposeCode**: `string`

The code specifying the purpose of an amendment to this referenced document.

#### See

https://vocabulary.uncefact.org/documentAmendmentPurposeCode

***

### documentLanguageId? {#documentlanguageid}

> `optional` **documentLanguageId**: `string` \| `IJsonLdValueObject`

An identifier for a language used in this referenced document.

#### See

https://vocabulary.uncefact.org/documentLanguageId

***

### documentLineStatusCode? {#documentlinestatuscode}

> `optional` **documentLineStatusCode**: [`UneceLineStatusCodeList`](../type-aliases/UneceLineStatusCodeList.md)

The code specifying the status of a line in this referenced document.

#### See

https://vocabulary.uncefact.org/documentLineStatusCode

***

### documentStatusCode? {#documentstatuscode}

> `optional` **documentStatusCode**: [`UneceDocumentStatusCodeList`](../type-aliases/UneceDocumentStatusCodeList.md)

The code specifying the status for this referenced document.

#### See

https://vocabulary.uncefact.org/documentStatusCode

***

### documentType? {#documenttype}

> `optional` **documentType**: `string`

A type, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/documentType

***

### documentTypeCode? {#documenttypecode}

> `optional` **documentTypeCode**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)

The code specifying the type of referenced document.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### effectiveSpecifiedPeriod? {#effectivespecifiedperiod}

> `optional` **effectiveSpecifiedPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period within which this referenced document is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### electronicPresentationIndicator? {#electronicpresentationindicator}

> `optional` **electronicPresentationIndicator**: `boolean`

The indication of whether or not this referenced document is presented in an electronic format.

#### See

https://vocabulary.uncefact.org/electronicPresentationIndicator

***

### globalId? {#globalid}

> `optional` **globalId**: `string` \| `IJsonLdValueObject`

A unique global identifier for this referenced document.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

A unique identifier for this referenced document.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedAmount? {#includedamount}

> `optional` **includedAmount**: [`IUneceAmountType`](IUneceAmountType.md)[]

A monetary value included in this referenced document.

#### See

https://vocabulary.uncefact.org/includedAmount

***

### includedNote? {#includednote}

> `optional` **includedNote**: [`IUneceNote`](IUneceNote.md)[]

A note included in this referenced document.

#### See

https://vocabulary.uncefact.org/includedNote

***

### information? {#information}

> `optional` **information**: `string`

Information, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/information

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

The formatted date or date time for the issuance of this referenced document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueLogisticsLocation? {#issuelogisticslocation}

> `optional` **issueLogisticsLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics related location where this referenced document has been issued.

#### See

https://vocabulary.uncefact.org/issueLogisticsLocation

***

### issuerAssignedId? {#issuerassignedid}

> `optional` **issuerAssignedId**: `string` \| `IJsonLdValueObject`

The unique issuer assigned identifier for this referenced document.

#### See

https://vocabulary.uncefact.org/issuerAssignedId

***

### issuerParty? {#issuerparty}

> `optional` **issuerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade related party that issues this referenced document.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### issuerSpecifiedInstructions? {#issuerspecifiedinstructions}

> `optional` **issuerSpecifiedInstructions**: [`IUneceDocumentHandlingInstructions`](IUneceDocumentHandlingInstructions.md)[]

Handling instructions specified by the issuer for this referenced document.

#### See

https://vocabulary.uncefact.org/issuerSpecifiedInstructions

***

### itemIdentificationId? {#itemidentificationid}

> `optional` **itemIdentificationId**: `string` \| `IJsonLdValueObject`

The unique identifier of an item in this referenced document.

#### See

https://vocabulary.uncefact.org/itemIdentificationId

***

### lineCountNumeric? {#linecountnumeric}

> `optional` **lineCountNumeric**: `string`

The number of lines for this referenced document.

#### See

https://vocabulary.uncefact.org/lineCountNumeric

***

### lineId? {#lineid}

> `optional` **lineId**: `string` \| `IJsonLdValueObject`

The unique identifier of a line in this referenced document.

#### See

https://vocabulary.uncefact.org/lineId

***

### lineItemQuantity? {#lineitemquantity}

> `optional` **lineItemQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of line items in this referenced document.

#### See

https://vocabulary.uncefact.org/lineItemQuantity

***

### lodgementLocation? {#lodgementlocation}

> `optional` **lodgementLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The logistics related location where this referenced document has been lodged.

#### See

https://vocabulary.uncefact.org/lodgementLocation

***

### messageFunctionPurposeCode? {#messagefunctionpurposecode}

> `optional` **messageFunctionPurposeCode**: [`UneceMessageFunctionCodeList`](../type-aliases/UneceMessageFunctionCodeList.md)

The code specifying the purpose of this referenced document.

#### See

https://vocabulary.uncefact.org/messageFunctionPurposeCode

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/name

***

### originalIssuedQuantity? {#originalissuedquantity}

> `optional` **originalIssuedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of originals issued of this referenced document.

#### See

https://vocabulary.uncefact.org/originalIssuedQuantity

***

### originalRequiredQuantity? {#originalrequiredquantity}

> `optional` **originalRequiredQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of originals required of this referenced document.

#### See

https://vocabulary.uncefact.org/originalRequiredQuantity

***

### pageId? {#pageid}

> `optional` **pageId**: `string` \| `IJsonLdValueObject`

The identifier of the page for this referenced document.

#### See

https://vocabulary.uncefact.org/pageId

***

### previousRevisionId? {#previousrevisionid}

> `optional` **previousRevisionId**: `string` \| `IJsonLdValueObject`

An identifier for a previous revision of this referenced document.

#### See

https://vocabulary.uncefact.org/previousRevisionId

***

### processCondition? {#processcondition}

> `optional` **processCondition**: `string`

A process condition, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/processCondition

***

### processConditionCode? {#processconditioncode}

> `optional` **processConditionCode**: `string`

The code specifying the process condition for this referenced document.

#### See

https://vocabulary.uncefact.org/processConditionCode

***

### proprietaryType? {#proprietarytype}

> `optional` **proprietaryType**: `string`

A proprietary type, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/proprietaryType

***

### receiptDateTime? {#receiptdatetime}

> `optional` **receiptDateTime**: `string`

The date, time, date time, or other date time value for the formal receipt of this referenced document.

#### See

https://vocabulary.uncefact.org/receiptDateTime

***

### recipientTradeParty? {#recipienttradeparty}

> `optional` **recipientTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade related party that receives this referenced document.

#### See

https://vocabulary.uncefact.org/recipientTradeParty

***

### referenceDateTime? {#referencedatetime}

> `optional` **referenceDateTime**: `string`

The reference date or date time for this referenced document.

#### See

https://vocabulary.uncefact.org/referenceDateTime

***

### referenceRelationshipTypeCode? {#referencerelationshiptypecode}

> `optional` **referenceRelationshipTypeCode**: [`UneceReferenceCodeList`](../type-aliases/UneceReferenceCodeList.md)

The code specifying the type of relationship between this referenced document and another artefact, such as a
replacement of an original document.

#### See

https://vocabulary.uncefact.org/referenceRelationshipTypeCode

***

### referenceTypeCode? {#referencetypecode}

> `optional` **referenceTypeCode**: [`UneceReferenceCodeList`](../type-aliases/UneceReferenceCodeList.md)

The code specifying the reference type of this referenced document.

#### See

https://vocabulary.uncefact.org/referenceTypeCode

***

### remarks? {#remarks}

> `optional` **remarks**: `string`

A remark, expressed as text, regarding this referenced document.

#### See

https://vocabulary.uncefact.org/remarks

***

### reportCountNumeric? {#reportcountnumeric}

> `optional` **reportCountNumeric**: `string`

The report count for this referenced document.

#### See

https://vocabulary.uncefact.org/reportCountNumeric

***

### revision? {#revision}

> `optional` **revision**: `string`

A revision, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/revision

***

### revisionDateTime? {#revisiondatetime}

> `optional` **revisionDateTime**: `string`

A date, time, date time or other date time value for the revision of this referenced document.

#### See

https://vocabulary.uncefact.org/revisionDateTime

***

### revisionId? {#revisionid}

> `optional` **revisionId**: `string` \| `IJsonLdValueObject`

A unique identifier for a revision of this referenced document.

#### See

https://vocabulary.uncefact.org/revisionId

***

### sectionName? {#sectionname}

> `optional` **sectionName**: `string`

A section name, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/sectionName

***

### senderTradeParty? {#sendertradeparty}

> `optional` **senderTradeParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The trade related party that sends this referenced document.

#### See

https://vocabulary.uncefact.org/senderTradeParty

***

### signatoryAuthentication? {#signatoryauthentication}

> `optional` **signatoryAuthentication**: [`IUneceAuthentication`](IUneceAuthentication.md)[]

A signatory authentication for this referenced document.

#### See

https://vocabulary.uncefact.org/signatoryAuthentication

***

### specifiedDocumentStatus? {#specifieddocumentstatus}

> `optional` **specifiedDocumentStatus**: [`IUneceDocumentStatus`](IUneceDocumentStatus.md)[]

Status information specified for this referenced document.

#### See

https://vocabulary.uncefact.org/specifiedDocumentStatus

***

### status? {#status}

> `optional` **status**: `string`

A status, expressed as text, for this referenced document.

#### See

https://vocabulary.uncefact.org/status

***

### subordinateLineId? {#subordinatelineid}

> `optional` **subordinateLineId**: `string` \| `IJsonLdValueObject`

The identifier of the subordinate line of this referenced document.

#### See

https://vocabulary.uncefact.org/subordinateLineId

***

### subtypeCode? {#subtypecode}

> `optional` **subtypeCode**: `string`

A code specifying a subtype of this referenced document.

#### See

https://vocabulary.uncefact.org/subtypeCode

***

### totalIssueCountNumeric? {#totalissuecountnumeric}

> `optional` **totalIssueCountNumeric**: `string`

The total issue count for this referenced document.

#### See

https://vocabulary.uncefact.org/totalIssueCountNumeric

***

### uRIId? {#uriid}

> `optional` **uRIId**: `string` \| `IJsonLdValueObject`

The unique Uniform Resource Identifier (URI) for this referenced document.

#### See

https://vocabulary.uncefact.org/uRIId

***

### validityPeriod? {#validityperiod}

> `optional` **validityPeriod**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)[]

A period of validity specified for this referenced document.

#### See

https://vocabulary.uncefact.org/validityPeriod

***

### versionId? {#versionid}

> `optional` **versionId**: `string` \| `IJsonLdValueObject`

The identifier for the version of this referenced document.

#### See

https://vocabulary.uncefact.org/versionId
