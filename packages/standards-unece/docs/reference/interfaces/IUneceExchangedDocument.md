# Interface: IUneceExchangedDocument

A collection of data for a piece of written, printed or electronic matter that is exchanged between two or more parties.

## See

https://vocabulary.uncefact.org/ExchangedDocument

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ExchangedDocument"`

JSON-LD Type.

***

### acceptanceDateTime? {#acceptancedatetime}

> `optional` **acceptanceDateTime?**: `string`

The date, time, date time, or other date time value for the acceptance of this exchanged document.

#### See

https://vocabulary.uncefact.org/acceptanceDateTime

***

### additionalId? {#additionalid}

> `optional` **additionalId?**: `string` \| `IJsonLdValueObject`

An additional identifier of this exchanged document.

#### See

https://vocabulary.uncefact.org/additionalId

***

### agentParty? {#agentparty}

> `optional` **agentParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A party representing another party for this exchanged document.

#### See

https://vocabulary.uncefact.org/agentParty

***

### amendmentPurpose? {#amendmentpurpose}

> `optional` **amendmentPurpose?**: `string`

An amendment purpose, expressed in text, for this exchanged document.

#### See

https://vocabulary.uncefact.org/amendmentPurpose

***

### approverSignatoryAuthentication? {#approversignatoryauthentication}

> `optional` **approverSignatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)

The approver signature that authenticates this exchanged document.

#### See

https://vocabulary.uncefact.org/approverSignatoryAuthentication

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this exchanged document.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### attachmentBinaryObject? {#attachmentbinaryobject}

> `optional` **attachmentBinaryObject?**: `string`

A binary object that is attached or otherwise appended to this exchanged document.

#### See

https://vocabulary.uncefact.org/attachmentBinaryObject

***

### buyerSignatoryAuthentication? {#buyersignatoryauthentication}

> `optional` **buyerSignatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)

The buyer signature that authenticates this exchanged document.

#### See

https://vocabulary.uncefact.org/buyerSignatoryAuthentication

***

### cancellationDateTime? {#cancellationdatetime}

> `optional` **cancellationDateTime?**: `string`

The date, time, date time, or other date time value of a cancellation of the exchanged document.

#### See

https://vocabulary.uncefact.org/cancellationDateTime

***

### categoryCode? {#categorycode}

> `optional` **categoryCode?**: `string`

The code specifying a category for this exchanged document.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### contractualClause? {#contractualclause}

> `optional` **contractualClause?**: [`IUneceClause`](IUneceClause.md)[]

A contractual clause of this exchanged document.

#### See

https://vocabulary.uncefact.org/contractualClause

***

### controlRequirementIndicator? {#controlrequirementindicator}

> `optional` **controlRequirementIndicator?**: `boolean`

The indication of whether or not this exchanged document has specific control requirements.

#### See

https://vocabulary.uncefact.org/controlRequirementIndicator

***

### copyIndicator? {#copyindicator}

> `optional` **copyIndicator?**: `boolean`

The indication of whether or not this exchanged document is a copy.

#### See

https://vocabulary.uncefact.org/copyIndicator

***

### copyIssuedQuantity? {#copyissuedquantity}

> `optional` **copyIssuedQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of copies issued of this exchanged document.

#### See

https://vocabulary.uncefact.org/copyIssuedQuantity

***

### copyRequiredQuantity? {#copyrequiredquantity}

> `optional` **copyRequiredQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of copies required of this exchanged document.

#### See

https://vocabulary.uncefact.org/copyRequiredQuantity

***

### creationDateTime? {#creationdatetime}

> `optional` **creationDateTime?**: `string`

The date, time, date time, or other date time value of a creation of this exchanged document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### customsId? {#customsid}

> `optional` **customsId?**: `string` \| `IJsonLdValueObject`

A unique identifier, for customs purposes, for this exchanged document.

#### See

https://vocabulary.uncefact.org/customsId

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this exchanged document.

#### See

https://vocabulary.uncefact.org/description

***

### disposition? {#disposition}

> `optional` **disposition?**: `string`

A disposition, expressed as text, for this exchanged document.

#### See

https://vocabulary.uncefact.org/disposition

***

### documentResponseDocumentTypeCode? {#documentresponsedocumenttypecode}

> `optional` **documentResponseDocumentTypeCode?**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)[]

A code specifying a type of response document for this exchanged document, such as a requested or required response
document type.

#### See

https://vocabulary.uncefact.org/documentResponseDocumentTypeCode

***

### documentStatusCode? {#documentstatuscode}

> `optional` **documentStatusCode?**: [`UneceDocumentStatusCodeList`](../type-aliases/UneceDocumentStatusCodeList.md)

The code specifying the status of this exchanged document.

#### See

https://vocabulary.uncefact.org/documentStatusCode

***

### documentTypeCode? {#documenttypecode}

> `optional` **documentTypeCode?**: [`UneceDocumentCodeList`](../type-aliases/UneceDocumentCodeList.md)

The code specifying the type of exchanged document.

#### See

https://vocabulary.uncefact.org/documentTypeCode

***

### effectiveSpecifiedPeriod? {#effectivespecifiedperiod}

> `optional` **effectiveSpecifiedPeriod?**: [`IUneceSpecifiedPeriod`](IUneceSpecifiedPeriod.md)

The specified period within which this exchanged document is effective.

#### See

https://vocabulary.uncefact.org/effectiveSpecifiedPeriod

***

### electronicPresentationIndicator? {#electronicpresentationindicator}

> `optional` **electronicPresentationIndicator?**: `boolean`

The indication of whether or not this exchanged document is presented in an electronic format.

#### See

https://vocabulary.uncefact.org/electronicPresentationIndicator

***

### exchangedDocumentAmendmentPurposeCode? {#exchangeddocumentamendmentpurposecode}

> `optional` **exchangedDocumentAmendmentPurposeCode?**: `string`

A code specifying a purpose of an amendment to this exchanged document.

#### See

https://vocabulary.uncefact.org/exchangedDocumentAmendmentPurposeCode

***

### exchangedDocumentResponseTypeCode? {#exchangeddocumentresponsetypecode}

> `optional` **exchangedDocumentResponseTypeCode?**: [`UneceResponseTypeCodeList`](../type-aliases/UneceResponseTypeCodeList.md)[]

A code specifying a type of response requested for this exchanged document.

#### See

https://vocabulary.uncefact.org/exchangedDocumentResponseTypeCode

***

### firstSignatoryAuthentication? {#firstsignatoryauthentication}

> `optional` **firstSignatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)

The first or primary signature that authenticates this exchanged document.

#### See

https://vocabulary.uncefact.org/firstSignatoryAuthentication

***

### firstVersionIssueDateTime? {#firstversionissuedatetime}

> `optional` **firstVersionIssueDateTime?**: `string`

The date, time, date time or other date time value when the first version of this exchanged document was issued.

#### See

https://vocabulary.uncefact.org/firstVersionIssueDateTime

***

### fourthSignatoryAuthentication? {#fourthsignatoryauthentication}

> `optional` **fourthSignatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)

The fourth signature, also known as the third counter signature, that has been authenticated on this exchanged document
indicating where appropriate the authentication party.

#### See

https://vocabulary.uncefact.org/fourthSignatoryAuthentication

***

### globalId? {#globalid}

> `optional` **globalId?**: `string` \| `IJsonLdValueObject`

The unique global identifier for this exchanged document.

#### See

https://vocabulary.uncefact.org/globalId

***

### headerInformation? {#headerinformation}

> `optional` **headerInformation?**: `string`

Header information, expressed as text, for this exchanged document.

#### See

https://vocabulary.uncefact.org/headerInformation

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The unique identifier of this exchanged document.

#### See

https://vocabulary.uncefact.org/identifier

***

### includedNote? {#includednote}

> `optional` **includedNote?**: [`IUneceNote`](IUneceNote.md)[]

A note included in this exchanged document.

#### See

https://vocabulary.uncefact.org/includedNote

***

### information? {#information}

> `optional` **information?**: `string`

Information, expressed as text, for this exchanged document.

#### See

https://vocabulary.uncefact.org/information

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

The date, time, date time or other date time value for the issuance of this exchanged document.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueLogisticsLocation? {#issuelogisticslocation}

> `optional` **issueLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location where this exchanged document has been issued.

#### See

https://vocabulary.uncefact.org/issueLogisticsLocation

***

### issuerParty? {#issuerparty}

> `optional` **issuerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that issues this exchanged document.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### itemIdentificationId? {#itemidentificationid}

> `optional` **itemIdentificationId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a specific item in this exchanged document.

#### See

https://vocabulary.uncefact.org/itemIdentificationId

***

### languageId? {#languageid}

> `optional` **languageId?**: `string` \| `IJsonLdValueObject`

A unique identifier for a language used in this exchanged document.

#### See

https://vocabulary.uncefact.org/languageId

***

### lineCountNumeric? {#linecountnumeric}

> `optional` **lineCountNumeric?**: `string`

The count of the number of lines in this exchanged document.

#### See

https://vocabulary.uncefact.org/lineCountNumeric

***

### lineItemQuantity? {#lineitemquantity}

> `optional` **lineItemQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of line items in this exchanged document.

#### See

https://vocabulary.uncefact.org/lineItemQuantity

***

### lodgementLocation? {#lodgementlocation}

> `optional` **lodgementLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)

The location where this exchanged document has been lodged.

#### See

https://vocabulary.uncefact.org/lodgementLocation

***

### messageFunctionPurposeCode? {#messagefunctionpurposecode}

> `optional` **messageFunctionPurposeCode?**: [`UneceMessageFunctionCodeList`](../type-aliases/UneceMessageFunctionCodeList.md)[]

A code specifying the purpose of this exchanged document, such as request or reminder.

#### See

https://vocabulary.uncefact.org/messageFunctionPurposeCode

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, of this exchanged document.

#### See

https://vocabulary.uncefact.org/name

***

### offsetProcessingStatus? {#offsetprocessingstatus}

> `optional` **offsetProcessingStatus?**: `string`

A status of an offset processing, expressed as text, for this exchanged document, such as the process offsetted by this
document.

#### See

https://vocabulary.uncefact.org/offsetProcessingStatus

***

### originalIssuedQuantity? {#originalissuedquantity}

> `optional` **originalIssuedQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of originals issued of this exchanged document.

#### See

https://vocabulary.uncefact.org/originalIssuedQuantity

***

### originalRequiredQuantity? {#originalrequiredquantity}

> `optional` **originalRequiredQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of originals required of this exchanged document.

#### See

https://vocabulary.uncefact.org/originalRequiredQuantity

***

### ownerParty? {#ownerparty}

> `optional` **ownerParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that owns this exchanged document.

#### See

https://vocabulary.uncefact.org/ownerParty

***

### pageId? {#pageid}

> `optional` **pageId?**: `string` \| `IJsonLdValueObject`

The unique identifier of a specific page of this exchanged document.

#### See

https://vocabulary.uncefact.org/pageId

***

### platformProviderParty? {#platformproviderparty}

> `optional` **platformProviderParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A platform provider party specified for this exchanged document.

#### See

https://vocabulary.uncefact.org/platformProviderParty

***

### previousRevisionId? {#previousrevisionid}

> `optional` **previousRevisionId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the previous revision of this exchanged document.

#### See

https://vocabulary.uncefact.org/previousRevisionId

***

### purpose? {#purpose}

> `optional` **purpose?**: `string`

The purpose, expressed as text, of this exchanged document.

#### See

https://vocabulary.uncefact.org/purpose

***

### recipientAssignedId? {#recipientassignedid}

> `optional` **recipientAssignedId?**: `string` \| `IJsonLdValueObject`

A unique recipient assigned identifier for this exchanged document.

#### See

https://vocabulary.uncefact.org/recipientAssignedId

***

### recipientTradeParty? {#recipienttradeparty}

> `optional` **recipientTradeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

A trade party that receives this exchanged document.

#### See

https://vocabulary.uncefact.org/recipientTradeParty

***

### referenceDocument? {#referencedocument}

> `optional` **referenceDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

Other documents referenced by this exchanged document.

#### See

https://vocabulary.uncefact.org/referenceDocument

***

### rejectionResponseDateTime? {#rejectionresponsedatetime}

> `optional` **rejectionResponseDateTime?**: `string`

A date, time, date time, or other date time value of a rejection response of the exchanged document.

#### See

https://vocabulary.uncefact.org/rejectionResponseDateTime

***

### remarks? {#remarks}

> `optional` **remarks?**: `string`

A remark, expressed as text, regarding this exchanged document.

#### See

https://vocabulary.uncefact.org/remarks

***

### responseDateTime? {#responsedatetime}

> `optional` **responseDateTime?**: `string`

A date, time, date time, or other date time value of a response of the exchanged document.

#### See

https://vocabulary.uncefact.org/responseDateTime

***

### responseReasonCode? {#responsereasoncode}

> `optional` **responseReasonCode?**: `string`

A code specifying a response reason for this exchanged document.

#### See

https://vocabulary.uncefact.org/responseReasonCode

***

### revisionDateTime? {#revisiondatetime}

> `optional` **revisionDateTime?**: `string`

The date, time, date time or other date time value for the revision of this exchanged document.

#### See

https://vocabulary.uncefact.org/revisionDateTime

***

### revisionId? {#revisionid}

> `optional` **revisionId?**: `string` \| `IJsonLdValueObject`

The unique identifier of the revision of this exchanged document.

#### See

https://vocabulary.uncefact.org/revisionId

***

### secondSignatoryAuthentication? {#secondsignatoryauthentication}

> `optional` **secondSignatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)

The second signature, also known as the first counter signature, that has been authenticated on this exchanged document
indicating where appropriate the authentication party.

#### See

https://vocabulary.uncefact.org/secondSignatoryAuthentication

***

### senderAssignedId? {#senderassignedid}

> `optional` **senderAssignedId?**: `string` \| `IJsonLdValueObject`

A unique sender assigned identifier for this exchanged document.

#### See

https://vocabulary.uncefact.org/senderAssignedId

***

### senderTradeParty? {#sendertradeparty}

> `optional` **senderTradeParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party that sends this exchanged document.

#### See

https://vocabulary.uncefact.org/senderTradeParty

***

### signatoryAuthentication? {#signatoryauthentication}

> `optional` **signatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)[]

A signatory document authentication for this exchanged document.

#### See

https://vocabulary.uncefact.org/signatoryAuthentication

***

### submissionDateTime? {#submissiondatetime}

> `optional` **submissionDateTime?**: `string`

The date, time, date time or other date time value for the formal submission of this exchanged document to a receiver by
a sender.

#### See

https://vocabulary.uncefact.org/submissionDateTime

***

### subtypeCode? {#subtypecode}

> `optional` **subtypeCode?**: `string`

The code specifying the subtype of this exchanged document.

#### See

https://vocabulary.uncefact.org/subtypeCode

***

### suffixId? {#suffixid}

> `optional` **suffixId?**: `string` \| `IJsonLdValueObject`

A unique suffix identifier for this exchanged document.

#### See

https://vocabulary.uncefact.org/suffixId

***

### summaryInformation? {#summaryinformation}

> `optional` **summaryInformation?**: `string`

Summary information, expressed as text, for this exchanged document.

#### See

https://vocabulary.uncefact.org/summaryInformation

***

### thirdSignatoryAuthentication? {#thirdsignatoryauthentication}

> `optional` **thirdSignatoryAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)

The third signature, also known as the second counter signature, that has been authenticated on this exchanged document
indicating where appropriate the authentication party.

#### See

https://vocabulary.uncefact.org/thirdSignatoryAuthentication

***

### totalPageQuantity? {#totalpagequantity}

> `optional` **totalPageQuantity?**: [`IUneceQuantityType`](IUneceQuantityType.md)

The total number of pages for this exchanged document.

#### See

https://vocabulary.uncefact.org/totalPageQuantity

***

### traderAssignedId? {#traderassignedid}

> `optional` **traderAssignedId?**: `string` \| `IJsonLdValueObject`

A unique trader assigned identifier for this exchanged document.

#### See

https://vocabulary.uncefact.org/traderAssignedId

***

### urgency? {#urgency}

> `optional` **urgency?**: `string`

An urgency, expressed as text, of this exchanged document.

#### See

https://vocabulary.uncefact.org/urgency

***

### urgencyCode? {#urgencycode}

> `optional` **urgencyCode?**: `string`

The code specifying the urgency for this exchanged document.

#### See

https://vocabulary.uncefact.org/urgencyCode

***

### versionId? {#versionid}

> `optional` **versionId?**: `string` \| `IJsonLdValueObject`

The unique identifier for the version of this exchanged document.

#### See

https://vocabulary.uncefact.org/versionId
