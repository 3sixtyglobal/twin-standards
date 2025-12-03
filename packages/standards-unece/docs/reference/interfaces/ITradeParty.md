# Interface: ITradeParty

An individual, a group, or a body having a role in a trade business function.

## See

https://vocabulary.uncefact.org/TradeParty

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

> **type**: `"TradeParty"`

JSON-LD Type.

***

### agreedContract?

> `optional` **agreedContract**: [`IContract`](IContract.md)[]

A trade contract agreed with this trade party.

#### See

https://vocabulary.uncefact.org/agreedContract

***

### allianceName?

> `optional` **allianceName**: `string`

An alliance name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/allianceName

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IAssessment`](IAssessment.md)[]

An assessment applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDeclaration?

> `optional` **applicableDeclaration**: [`ISpecifiedDeclaration`](ISpecifiedDeclaration.md)[]

A specified declaration applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableLicence?

> `optional` **applicableLicence**: [`ILicence`](ILicence.md)[]

A specified licence applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableOrganizationalCertificate?

> `optional` **applicableOrganizationalCertificate**: [`IOrganizationalCertificate`](IOrganizationalCertificate.md)[]

An organizational certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableOrganizationalCertificate

***

### applicableOrganizationalCertification?

> `optional` **applicableOrganizationalCertification**: [`IOrganizationalCertification`](IOrganizationalCertification.md)[]

An organizational certification applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableOrganizationalCertification

***

### applicableProcessCertificate?

> `optional` **applicableProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableProductBatchCertificate?

> `optional` **applicableProductBatchCertificate**: [`IProductBatchCertificate`](IProductBatchCertificate.md)[]

A product batch certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableProductBatchCertificate

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableServiceCharge?

> `optional` **applicableServiceCharge**: [`IServiceCharge`](IServiceCharge.md)[]

A logistics service charge applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection?

> `optional` **applicableSpecifiedInspection**: [`ISpecifiedInspection`](ISpecifiedInspection.md)[]

A specified inspection applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection?

> `optional` **applicableSustainabilityInspection**: [`ISustainabilityInspection`](ISustainabilityInspection.md)[]

A sustainability inspection applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### applicableTechnicalCharacteristic?

> `optional` **applicableTechnicalCharacteristic**: [`ITechnicalCharacteristic`](ITechnicalCharacteristic.md)[]

A technical characteristic applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### associatedMembership?

> `optional` **associatedMembership**: [`IMembership`](IMembership.md)[]

A membership associated with this trade party.

#### See

https://vocabulary.uncefact.org/associatedMembership

***

### associatedParty?

> `optional` **associatedParty**: `ITradeParty`[]

A party associated with this trade party, such as a local agent of a shipping line.

#### See

https://vocabulary.uncefact.org/associatedParty

***

### attentionOfAssociatedParty?

> `optional` **attentionOfAssociatedParty**: `ITradeParty`[]

A trade party associated with this trade party to whom incoming mail is marked with words such as 'for the attention of'
or 'FAO' or 'ATTN'.

#### See

https://vocabulary.uncefact.org/attentionOfAssociatedParty

***

### availableExperienceItem?

> `optional` **availableExperienceItem**: [`IExperienceItem`](IExperienceItem.md)[]

An experience item available for this trade party.

#### See

https://vocabulary.uncefact.org/availableExperienceItem

***

### availableFacility?

> `optional` **availableFacility**: [`IExperienceFacility`](IExperienceFacility.md)[]

An experience facility made available for or by this trade party.

#### See

https://vocabulary.uncefact.org/availableFacility

***

### brandName?

> `optional` **brandName**: `string`

A brand name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/brandName

***

### businessTypeCode?

> `optional` **businessTypeCode**: `string`

The code specifying the business type of this trade party.

#### See

https://vocabulary.uncefact.org/businessTypeCode

***

### cAGEId?

> `optional` **cAGEId**: `string`

The unique Commercial And Government Entity (CAGE) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/cAGEId

***

### chainName?

> `optional` **chainName**: `string`

A chain name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/chainName

***

### claimedLanguageProficiency?

> `optional` **claimedLanguageProficiency**: [`ILanguageProficiency`](ILanguageProficiency.md)[]

Personal language proficiency skills claimed by this trade party.

#### See

https://vocabulary.uncefact.org/claimedLanguageProficiency

***

### commentedReviewNote?

> `optional` **commentedReviewNote**: [`ISpecifiedNote`](ISpecifiedNote.md)[]

A commented review note specified for this trade party.

#### See

https://vocabulary.uncefact.org/commentedReviewNote

***

### confirmedAuthentication?

> `optional` **confirmedAuthentication**: [`IAuthentication`](IAuthentication.md)[]

A confirmed document authentication for this trade party.

#### See

https://vocabulary.uncefact.org/confirmedAuthentication

***

### cooperativeInformationSource?

> `optional` **cooperativeInformationSource**: [`IInformationSource`](IInformationSource.md)[]

A cooperative information source specified for this trade party.

#### See

https://vocabulary.uncefact.org/cooperativeInformationSource

***

### dODAACId?

> `optional` **dODAACId**: `string`

The unique Department Of Defense Activity Address Code (DODAAC) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/dODAACId

***

### dUNSId?

> `optional` **dUNSId**: `string`

The unique nine-digit Data Universal Numbering System (DUNS) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/dUNSId

***

### definedContact?

> `optional` **definedContact**: [`ITradeContact`](ITradeContact.md)[]

A trade contact defined for this trade party.

#### See

https://vocabulary.uncefact.org/definedContact

***

### description?

> `optional` **description**: `string`

A textual description of this trade party.

#### See

https://vocabulary.uncefact.org/description

***

### disclosureLevelCode?

> `optional` **disclosureLevelCode**: `string`

A code specifying a disclosure level for this trade party.

#### See

https://vocabulary.uncefact.org/disclosureLevelCode

***

### emailURICommunication?

> `optional` **emailURICommunication**: [`ICommunication`](ICommunication.md)[]

The email communication for this trade party.

#### See

https://vocabulary.uncefact.org/emailURICommunication

***

### endPointURICommunication?

> `optional` **endPointURICommunication**: [`ICommunication`](ICommunication.md)[]

The communication address of the end point URI for this trade party.

#### See

https://vocabulary.uncefact.org/endPointURICommunication

***

### faxCommunication?

> `optional` **faxCommunication**: [`ICommunication`](ICommunication.md)[]

A fax communication for this trade party.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### gLNId?

> `optional` **gLNId**: `string`

A Global Location Number (GLN) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/gLNId

***

### globalId?

> `optional` **globalId**: `string`

A globally unique identifier of this trade party.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier?

> `optional` **identifier**: `string`

A unique identifier of this trade party.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuedNotificationReferencedDocument?

> `optional` **issuedNotificationReferencedDocument**: [`IDocument`](IDocument.md)[]

A referenced notification document issued to this trade party.

#### See

https://vocabulary.uncefact.org/issuedNotificationReferencedDocument

***

### logoAssociatedBinaryFile?

> `optional` **logoAssociatedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

A file containing a specified binary representation of a logo associated with this trade party.

#### See

https://vocabulary.uncefact.org/logoAssociatedBinaryFile

***

### logoReferencedDocument?

> `optional` **logoReferencedDocument**: [`IDocument`](IDocument.md)[]

The referenced logo document for this trade party.

#### See

https://vocabulary.uncefact.org/logoReferencedDocument

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/name

***

### ownedFinancialAccount?

> `optional` **ownedFinancialAccount**: [`ICreditorFinancialAccount`](ICreditorFinancialAccount.md)[]

The creditor financial account owned by this trade party.

#### See

https://vocabulary.uncefact.org/ownedFinancialAccount

***

### partyRoleCode?

> `optional` **partyRoleCode**: [`PartyRoleCodeList`](../type-aliases/PartyRoleCodeList.md)[]

A code specifying the role of this trade party.

#### See

https://vocabulary.uncefact.org/partyRoleCode

***

### partyTypeCode?

> `optional` **partyTypeCode**: [`PartyTypeCodeList`](../type-aliases/PartyTypeCodeList.md)[]

A code specifying the type of trade party that is independent of its role.

#### See

https://vocabulary.uncefact.org/partyTypeCode

***

### postalAddress?

> `optional` **postalAddress**: [`ITradeAddress`](ITradeAddress.md)[]

The postal address for this trade party.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### providedProcess?

> `optional` **providedProcess**: [`IProductionProcess`](IProductionProcess.md)[]

A production process provided by this trade party.

#### See

https://vocabulary.uncefact.org/providedProcess

***

### providedService?

> `optional` **providedService**: [`IService`](IService.md)[]

A transport service provided by this trade party.

#### See

https://vocabulary.uncefact.org/providedService

***

### qualityAssuranceIndicator?

> `optional` **qualityAssuranceIndicator**: `boolean`

The indication of whether or not this trade party is quality assured.

#### See

https://vocabulary.uncefact.org/qualityAssuranceIndicator

***

### rICId?

> `optional` **rICId**: `string`

The unique Routing Identifier Code (RIC) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/rICId

***

### registeredId?

> `optional` **registeredId**: `string`

A registered identifier of this trade party.

#### See

https://vocabulary.uncefact.org/registeredId

***

### relatedBatch?

> `optional` **relatedBatch**: [`IProductBatch`](IProductBatch.md)[]

A product batch related to this trade party.

#### See

https://vocabulary.uncefact.org/relatedBatch

***

### relatedMaterial?

> `optional` **relatedMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Material related to this trade party.

#### See

https://vocabulary.uncefact.org/relatedMaterial

***

### requestedExperienceItem?

> `optional` **requestedExperienceItem**: [`IExperienceItem`](IExperienceItem.md)[]

An experience item requested for or by this trade party.

#### See

https://vocabulary.uncefact.org/requestedExperienceItem

***

### requestedNotificationReferencedDocument?

> `optional` **requestedNotificationReferencedDocument**: [`IDocument`](IDocument.md)[]

A referenced notification document requested by this trade party.

#### See

https://vocabulary.uncefact.org/requestedNotificationReferencedDocument

***

### reservedExperienceItem?

> `optional` **reservedExperienceItem**: [`IExperienceItem`](IExperienceItem.md)[]

An experience item reserved for or by this trade party.

#### See

https://vocabulary.uncefact.org/reservedExperienceItem

***

### role?

> `optional` **role**: `string`

A role, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/role

***

### salesManagerName?

> `optional` **salesManagerName**: `string`

A name of a sales manager, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/salesManagerName

***

### searchedWishListExperienceItem?

> `optional` **searchedWishListExperienceItem**: [`IExperienceItem`](IExperienceItem.md)[]

An experience item wish list searched for or by this trade party.

#### See

https://vocabulary.uncefact.org/searchedWishListExperienceItem

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IAssertion`](IAssertion.md)[]

The sustainability assertion specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedAuthoritativeSignatoryPerson?

> `optional` **specifiedAuthoritativeSignatoryPerson**: [`IAuthoritativeSignatoryPerson`](IAuthoritativeSignatoryPerson.md)[]

A person specified to sign on behalf of this trade party.

#### See

https://vocabulary.uncefact.org/specifiedAuthoritativeSignatoryPerson

***

### specifiedContactPerson?

> `optional` **specifiedContactPerson**: [`IContactPerson`](IContactPerson.md)[]

A contact person specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedContactPerson

***

### specifiedCooperatingOrganization?

> `optional` **specifiedCooperatingOrganization**: [`ICooperatingOrganization`](ICooperatingOrganization.md)[]

A cooperating organization specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedCooperatingOrganization

***

### specifiedCreditorFinancialInstitution?

> `optional` **specifiedCreditorFinancialInstitution**: [`ICreditorFinancialInstitution`](ICreditorFinancialInstitution.md)[]

A creditor financial institution specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialInstitution

***

### specifiedFacility?

> `optional` **specifiedFacility**: [`IProductionFacility`](IProductionFacility.md)[]

A production facility specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedFinancialIdentity?

> `optional` **specifiedFinancialIdentity**: [`IFinancialIdentity`](IFinancialIdentity.md)[]

The financial identity specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedFinancialIdentity

***

### specifiedGovernmentRegistration?

> `optional` **specifiedGovernmentRegistration**: [`IGovernmentRegistration`](IGovernmentRegistration.md)[]

A governmental registration specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedGovernmentRegistration

***

### specifiedGuestPerson?

> `optional` **specifiedGuestPerson**: [`IGuestPerson`](IGuestPerson.md)[]

A guest person specified by this trade party.

#### See

https://vocabulary.uncefact.org/specifiedGuestPerson

***

### specifiedLegalOrganization?

> `optional` **specifiedLegalOrganization**: [`ILegalOrganization`](ILegalOrganization.md)[]

The legally constituted organization specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedLegalOrganization

***

### specifiedLogisticsLocation?

> `optional` **specifiedLogisticsLocation**: [`ILogisticsLocation`](ILogisticsLocation.md)[]

A logistics related location or place specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedProprietaryIdentity?

> `optional` **specifiedProprietaryIdentity**: [`IProprietaryIdentity`](IProprietaryIdentity.md)[]

A proprietary identity specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedProprietaryIdentity

***

### specifiedRiskAnalysisResult?

> `optional` **specifiedRiskAnalysisResult**: [`IRiskAnalysisResult`](IRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedTaxRegistration?

> `optional` **specifiedTaxRegistration**: [`ITaxRegistration`](ITaxRegistration.md)[]

A tax registration specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedTaxRegistration

***

### specifiedTradeProduct?

> `optional` **specifiedTradeProduct**: [`ITradeProduct`](ITradeProduct.md)[]

A product specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedTradeProduct

***

### subcontractorParty?

> `optional` **subcontractorParty**: `ITradeParty`[]

A subcontractor for this trade party.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### telephoneCommunication?

> `optional` **telephoneCommunication**: [`ICommunication`](ICommunication.md)

A telephone communication for this trade party.

#### See

https://vocabulary.uncefact.org/telephoneCommunication

***

### tradePartyLanguageCode?

> `optional` **tradePartyLanguageCode**: [`LanguageCodeList`](../type-aliases/LanguageCodeList.md)[]

A code specifying a language for this trade party.

#### See

https://vocabulary.uncefact.org/tradePartyLanguageCode

***

### uRICommunication?

> `optional` **uRICommunication**: [`ICommunication`](ICommunication.md)[]

A Uniform Resource Identifier (URI) communication for this trade party, such as a web or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
