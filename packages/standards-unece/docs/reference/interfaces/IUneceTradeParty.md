# Interface: IUneceTradeParty

An individual, a group, or a body having a role in a trade business function.

## See

https://vocabulary.uncefact.org/TradeParty

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TradeParty"`

JSON-LD Type.

***

### agreedContract? {#agreedcontract}

> `optional` **agreedContract?**: [`IUneceContract`](IUneceContract.md)[]

A trade contract agreed with this trade party.

#### See

https://vocabulary.uncefact.org/agreedContract

***

### allianceName? {#alliancename}

> `optional` **allianceName?**: `string`

An alliance name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/allianceName

***

### applicableAssessment? {#applicableassessment}

> `optional` **applicableAssessment?**: [`IUneceAssessment`](IUneceAssessment.md)[]

An assessment applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableDeclaration? {#applicabledeclaration}

> `optional` **applicableDeclaration?**: [`IUneceSpecifiedDeclaration`](IUneceSpecifiedDeclaration.md)[]

A specified declaration applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableLicence? {#applicablelicence}

> `optional` **applicableLicence?**: [`IUneceLicence`](IUneceLicence.md)[]

A specified licence applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableOrganizationalCertificate? {#applicableorganizationalcertificate}

> `optional` **applicableOrganizationalCertificate?**: [`IUneceOrganizationalCertificate`](IUneceOrganizationalCertificate.md)[]

An organizational certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableOrganizationalCertificate

***

### applicableOrganizationalCertification? {#applicableorganizationalcertification}

> `optional` **applicableOrganizationalCertification?**: [`IUneceOrganizationalCertification`](IUneceOrganizationalCertification.md)[]

An organizational certification applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableOrganizationalCertification

***

### applicableProcessCertificate? {#applicableprocesscertificate}

> `optional` **applicableProcessCertificate?**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableProductBatchCertificate? {#applicableproductbatchcertificate}

> `optional` **applicableProductBatchCertificate?**: [`IUneceProductBatchCertificate`](IUneceProductBatchCertificate.md)[]

A product batch certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableProductBatchCertificate

***

### applicableProductCertificate? {#applicableproductcertificate}

> `optional` **applicableProductCertificate?**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableServiceCharge? {#applicableservicecharge}

> `optional` **applicableServiceCharge?**: [`IUneceServiceCharge`](IUneceServiceCharge.md)[]

A logistics service charge applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableServiceCharge

***

### applicableSpecifiedCertificate? {#applicablespecifiedcertificate}

> `optional` **applicableSpecifiedCertificate?**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A certificate applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### applicableSpecifiedInspection? {#applicablespecifiedinspection}

> `optional` **applicableSpecifiedInspection?**: [`IUneceSpecifiedInspection`](IUneceSpecifiedInspection.md)[]

A specified inspection applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedInspection

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableSustainabilityInspection? {#applicablesustainabilityinspection}

> `optional` **applicableSustainabilityInspection?**: [`IUneceSustainabilityInspection`](IUneceSustainabilityInspection.md)[]

A sustainability inspection applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityInspection

***

### applicableTechnicalCharacteristic? {#applicabletechnicalcharacteristic}

> `optional` **applicableTechnicalCharacteristic?**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this trade party.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### associatedMembership? {#associatedmembership}

> `optional` **associatedMembership?**: [`IUneceMembership`](IUneceMembership.md)[]

A membership associated with this trade party.

#### See

https://vocabulary.uncefact.org/associatedMembership

***

### associatedParty? {#associatedparty}

> `optional` **associatedParty?**: `IUneceTradeParty`[]

A party associated with this trade party, such as a local agent of a shipping line.

#### See

https://vocabulary.uncefact.org/associatedParty

***

### attentionOfAssociatedParty? {#attentionofassociatedparty}

> `optional` **attentionOfAssociatedParty?**: `IUneceTradeParty`[]

A trade party associated with this trade party to whom incoming mail is marked with words such as 'for the attention of'
or 'FAO' or 'ATTN'.

#### See

https://vocabulary.uncefact.org/attentionOfAssociatedParty

***

### availableExperienceItem? {#availableexperienceitem}

> `optional` **availableExperienceItem?**: [`IUneceExperienceItem`](IUneceExperienceItem.md)[]

An experience item available for this trade party.

#### See

https://vocabulary.uncefact.org/availableExperienceItem

***

### availableFacility? {#availablefacility}

> `optional` **availableFacility?**: [`IUneceExperienceFacility`](IUneceExperienceFacility.md)[]

An experience facility made available for or by this trade party.

#### See

https://vocabulary.uncefact.org/availableFacility

***

### brandName? {#brandname}

> `optional` **brandName?**: `string`

A brand name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/brandName

***

### businessTypeCode? {#businesstypecode}

> `optional` **businessTypeCode?**: `string`

The code specifying the business type of this trade party.

#### See

https://vocabulary.uncefact.org/businessTypeCode

***

### cAGEId? {#cageid}

> `optional` **cAGEId?**: `string` \| `IJsonLdValueObject`

The unique Commercial And Government Entity (CAGE) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/cAGEId

***

### chainName? {#chainname}

> `optional` **chainName?**: `string`

A chain name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/chainName

***

### claimedLanguageProficiency? {#claimedlanguageproficiency}

> `optional` **claimedLanguageProficiency?**: [`IUneceLanguageProficiency`](IUneceLanguageProficiency.md)[]

Personal language proficiency skills claimed by this trade party.

#### See

https://vocabulary.uncefact.org/claimedLanguageProficiency

***

### commentedReviewNote? {#commentedreviewnote}

> `optional` **commentedReviewNote?**: [`IUneceSpecifiedNote`](IUneceSpecifiedNote.md)[]

A commented review note specified for this trade party.

#### See

https://vocabulary.uncefact.org/commentedReviewNote

***

### confirmedAuthentication? {#confirmedauthentication}

> `optional` **confirmedAuthentication?**: [`IUneceAuthentication`](IUneceAuthentication.md)[]

A confirmed document authentication for this trade party.

#### See

https://vocabulary.uncefact.org/confirmedAuthentication

***

### cooperativeInformationSource? {#cooperativeinformationsource}

> `optional` **cooperativeInformationSource?**: [`IUneceInformationSource`](IUneceInformationSource.md)[]

A cooperative information source specified for this trade party.

#### See

https://vocabulary.uncefact.org/cooperativeInformationSource

***

### dODAACId? {#dodaacid}

> `optional` **dODAACId?**: `string` \| `IJsonLdValueObject`

The unique Department Of Defense Activity Address Code (DODAAC) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/dODAACId

***

### dUNSId? {#dunsid}

> `optional` **dUNSId?**: `string` \| `IJsonLdValueObject`

The unique nine-digit Data Universal Numbering System (DUNS) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/dUNSId

***

### definedContact? {#definedcontact}

> `optional` **definedContact?**: [`IUneceTradeContact`](IUneceTradeContact.md)[]

A trade contact defined for this trade party.

#### See

https://vocabulary.uncefact.org/definedContact

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this trade party.

#### See

https://vocabulary.uncefact.org/description

***

### disclosureLevelCode? {#disclosurelevelcode}

> `optional` **disclosureLevelCode?**: `string`

A code specifying a disclosure level for this trade party.

#### See

https://vocabulary.uncefact.org/disclosureLevelCode

***

### emailURICommunication? {#emailuricommunication}

> `optional` **emailURICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)

The email communication for this trade party.

#### See

https://vocabulary.uncefact.org/emailURICommunication

***

### endPointURICommunication? {#endpointuricommunication}

> `optional` **endPointURICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)

The communication address of the end point URI for this trade party.

#### See

https://vocabulary.uncefact.org/endPointURICommunication

***

### faxCommunication? {#faxcommunication}

> `optional` **faxCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

A fax communication for this trade party.

#### See

https://vocabulary.uncefact.org/faxCommunication

***

### gLNId? {#glnid}

> `optional` **gLNId?**: `string` \| `IJsonLdValueObject`

A Global Location Number (GLN) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/gLNId

***

### globalId? {#globalid}

> `optional` **globalId?**: `string` \| `IJsonLdValueObject`

A globally unique identifier of this trade party.

#### See

https://vocabulary.uncefact.org/globalId

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

A unique identifier of this trade party.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuedNotificationReferencedDocument? {#issuednotificationreferenceddocument}

> `optional` **issuedNotificationReferencedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced notification document issued to this trade party.

#### See

https://vocabulary.uncefact.org/issuedNotificationReferencedDocument

***

### logoAssociatedBinaryFile? {#logoassociatedbinaryfile}

> `optional` **logoAssociatedBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A file containing a specified binary representation of a logo associated with this trade party.

#### See

https://vocabulary.uncefact.org/logoAssociatedBinaryFile

***

### logoReferencedDocument? {#logoreferenceddocument}

> `optional` **logoReferencedDocument?**: [`IUneceDocument`](IUneceDocument.md)

The referenced logo document for this trade party.

#### See

https://vocabulary.uncefact.org/logoReferencedDocument

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/name

***

### ownedFinancialAccount? {#ownedfinancialaccount}

> `optional` **ownedFinancialAccount?**: [`IUneceCreditorFinancialAccount`](IUneceCreditorFinancialAccount.md)

The creditor financial account owned by this trade party.

#### See

https://vocabulary.uncefact.org/ownedFinancialAccount

***

### partyRoleCode? {#partyrolecode}

> `optional` **partyRoleCode?**: `string`[]

A code specifying the role of this trade party.

#### See

https://vocabulary.uncefact.org/partyRoleCode

***

### partyTypeCode? {#partytypecode}

> `optional` **partyTypeCode?**: [`UnecePartyTypeCodeList`](../type-aliases/UnecePartyTypeCodeList.md)[]

A code specifying the type of trade party that is independent of its role.

#### See

https://vocabulary.uncefact.org/partyTypeCode

***

### postalAddress? {#postaladdress}

> `optional` **postalAddress?**: [`IUneceTradeAddress`](IUneceTradeAddress.md)

The postal address for this trade party.

#### See

https://vocabulary.uncefact.org/postalAddress

***

### providedProcess? {#providedprocess}

> `optional` **providedProcess?**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A production process provided by this trade party.

#### See

https://vocabulary.uncefact.org/providedProcess

***

### providedService? {#providedservice}

> `optional` **providedService?**: [`IUneceService`](IUneceService.md)[]

A transport service provided by this trade party.

#### See

https://vocabulary.uncefact.org/providedService

***

### qualityAssuranceIndicator? {#qualityassuranceindicator}

> `optional` **qualityAssuranceIndicator?**: `boolean`

The indication of whether or not this trade party is quality assured.

#### See

https://vocabulary.uncefact.org/qualityAssuranceIndicator

***

### rICId? {#ricid}

> `optional` **rICId?**: `string` \| `IJsonLdValueObject`

The unique Routing Identifier Code (RIC) identifier for this trade party.

#### See

https://vocabulary.uncefact.org/rICId

***

### registeredId? {#registeredid}

> `optional` **registeredId?**: `string` \| `IJsonLdValueObject`

A registered identifier of this trade party.

#### See

https://vocabulary.uncefact.org/registeredId

***

### relatedBatch? {#relatedbatch}

> `optional` **relatedBatch?**: [`IUneceProductBatch`](IUneceProductBatch.md)[]

A product batch related to this trade party.

#### See

https://vocabulary.uncefact.org/relatedBatch

***

### relatedMaterial? {#relatedmaterial}

> `optional` **relatedMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material related to this trade party.

#### See

https://vocabulary.uncefact.org/relatedMaterial

***

### requestedExperienceItem? {#requestedexperienceitem}

> `optional` **requestedExperienceItem?**: [`IUneceExperienceItem`](IUneceExperienceItem.md)[]

An experience item requested for or by this trade party.

#### See

https://vocabulary.uncefact.org/requestedExperienceItem

***

### requestedNotificationReferencedDocument? {#requestednotificationreferenceddocument}

> `optional` **requestedNotificationReferencedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced notification document requested by this trade party.

#### See

https://vocabulary.uncefact.org/requestedNotificationReferencedDocument

***

### reservedExperienceItem? {#reservedexperienceitem}

> `optional` **reservedExperienceItem?**: [`IUneceExperienceItem`](IUneceExperienceItem.md)[]

An experience item reserved for or by this trade party.

#### See

https://vocabulary.uncefact.org/reservedExperienceItem

***

### role? {#role}

> `optional` **role?**: `string`

A role, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/role

***

### salesManagerName? {#salesmanagername}

> `optional` **salesManagerName?**: `string`

A name of a sales manager, expressed as text, for this trade party.

#### See

https://vocabulary.uncefact.org/salesManagerName

***

### searchedWishListExperienceItem? {#searchedwishlistexperienceitem}

> `optional` **searchedWishListExperienceItem?**: [`IUneceExperienceItem`](IUneceExperienceItem.md)[]

An experience item wish list searched for or by this trade party.

#### See

https://vocabulary.uncefact.org/searchedWishListExperienceItem

***

### specifiedAssertion? {#specifiedassertion}

> `optional` **specifiedAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)

The sustainability assertion specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedAuthoritativeSignatoryPerson? {#specifiedauthoritativesignatoryperson}

> `optional` **specifiedAuthoritativeSignatoryPerson?**: [`IUneceAuthoritativeSignatoryPerson`](IUneceAuthoritativeSignatoryPerson.md)[]

A person specified to sign on behalf of this trade party.

#### See

https://vocabulary.uncefact.org/specifiedAuthoritativeSignatoryPerson

***

### specifiedContactPerson? {#specifiedcontactperson}

> `optional` **specifiedContactPerson?**: [`IUneceContactPerson`](IUneceContactPerson.md)[]

A contact person specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedContactPerson

***

### specifiedCooperatingOrganization? {#specifiedcooperatingorganization}

> `optional` **specifiedCooperatingOrganization?**: [`IUneceCooperatingOrganization`](IUneceCooperatingOrganization.md)[]

A cooperating organization specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedCooperatingOrganization

***

### specifiedCreditorFinancialInstitution? {#specifiedcreditorfinancialinstitution}

> `optional` **specifiedCreditorFinancialInstitution?**: [`IUneceCreditorFinancialInstitution`](IUneceCreditorFinancialInstitution.md)[]

A creditor financial institution specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedCreditorFinancialInstitution

***

### specifiedFacility? {#specifiedfacility}

> `optional` **specifiedFacility?**: [`IUneceProductionFacility`](IUneceProductionFacility.md)[]

A production facility specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedFacility

***

### specifiedFinancialIdentity? {#specifiedfinancialidentity}

> `optional` **specifiedFinancialIdentity?**: [`IUneceFinancialIdentity`](IUneceFinancialIdentity.md)

The financial identity specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedFinancialIdentity

***

### specifiedGovernmentRegistration? {#specifiedgovernmentregistration}

> `optional` **specifiedGovernmentRegistration?**: [`IUneceGovernmentRegistration`](IUneceGovernmentRegistration.md)[]

A governmental registration specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedGovernmentRegistration

***

### specifiedGuestPerson? {#specifiedguestperson}

> `optional` **specifiedGuestPerson?**: [`IUneceGuestPerson`](IUneceGuestPerson.md)[]

A guest person specified by this trade party.

#### See

https://vocabulary.uncefact.org/specifiedGuestPerson

***

### specifiedLegalOrganization? {#specifiedlegalorganization}

> `optional` **specifiedLegalOrganization?**: [`IUneceLegalOrganization`](IUneceLegalOrganization.md)

The legally constituted organization specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedLegalOrganization

***

### specifiedLogisticsLocation? {#specifiedlogisticslocation}

> `optional` **specifiedLogisticsLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

A logistics related location or place specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedLogisticsLocation

***

### specifiedProprietaryIdentity? {#specifiedproprietaryidentity}

> `optional` **specifiedProprietaryIdentity?**: [`IUneceProprietaryIdentity`](IUneceProprietaryIdentity.md)[]

A proprietary identity specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedProprietaryIdentity

***

### specifiedRiskAnalysisResult? {#specifiedriskanalysisresult}

> `optional` **specifiedRiskAnalysisResult?**: [`IUneceRiskAnalysisResult`](IUneceRiskAnalysisResult.md)[]

A result of a logistics risk analysis calculation specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedRiskAnalysisResult

***

### specifiedTaxRegistration? {#specifiedtaxregistration}

> `optional` **specifiedTaxRegistration?**: [`IUneceTaxRegistration`](IUneceTaxRegistration.md)[]

A tax registration specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedTaxRegistration

***

### specifiedTradeProduct? {#specifiedtradeproduct}

> `optional` **specifiedTradeProduct?**: [`IUneceTradeProduct`](IUneceTradeProduct.md)[]

A product specified for this trade party.

#### See

https://vocabulary.uncefact.org/specifiedTradeProduct

***

### subcontractorParty? {#subcontractorparty}

> `optional` **subcontractorParty?**: `IUneceTradeParty`[]

A subcontractor for this trade party.

#### See

https://vocabulary.uncefact.org/subcontractorParty

***

### telephoneCommunication? {#telephonecommunication}

> `optional` **telephoneCommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

A telephone communication for this trade party.

#### See

https://vocabulary.uncefact.org/telephoneCommunication

***

### tradePartyLanguageCode? {#tradepartylanguagecode}

> `optional` **tradePartyLanguageCode?**: [`UneceLanguageCodeList`](../type-aliases/UneceLanguageCodeList.md)[]

A code specifying a language for this trade party.

#### See

https://vocabulary.uncefact.org/tradePartyLanguageCode

***

### uRICommunication? {#uricommunication}

> `optional` **uRICommunication?**: [`IUneceCommunication`](IUneceCommunication.md)[]

A Uniform Resource Identifier (URI) communication for this trade party, such as a web or email address.

#### See

https://vocabulary.uncefact.org/uRICommunication
