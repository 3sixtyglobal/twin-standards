# Interface: IUneceSpecifiedCertificate

A document issued by a government, public organization or association to certify a property of a person, entity, process
or object.

## See

https://vocabulary.uncefact.org/SpecifiedCertificate

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"SpecifiedCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime?

> `optional` **actualEffectiveDateTime**: `string`

The actual effective date, time, date time or other date time value for this specified certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### aliasNameCode?

> `optional` **aliasNameCode**: `string`

A code specifying an alias name of this specified certificate.

#### See

https://vocabulary.uncefact.org/aliasNameCode

***

### applicableClause?

> `optional` **applicableClause**: [`IUneceClause`](IUneceClause.md)[]

A clause applicable to this specified certificate.

#### See

https://vocabulary.uncefact.org/applicableClause

***

### applicableGeographicRegion?

> `optional` **applicableGeographicRegion**: `string`

A geographic region, expressed as text, applicable for this specified certificate.

#### See

https://vocabulary.uncefact.org/applicableGeographicRegion

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this specified certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### assuranceLevelCode?

> `optional` **assuranceLevelCode**: `string`

The code specifying the assurance level, such as certified by third party, for this specified certificate.

#### See

https://vocabulary.uncefact.org/assuranceLevelCode

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this specified certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### availableLanguageCode?

> `optional` **availableLanguageCode**: [`UneceLanguageCodeList`](../type-aliases/UneceLanguageCodeList.md)[]

A code specifying an available language for this specified certificate.

#### See

https://vocabulary.uncefact.org/availableLanguageCode

***

### capabilityLevel?

> `optional` **capabilityLevel**: `string`

A capability level, expressed as text, in this specified certificate.

#### See

https://vocabulary.uncefact.org/capabilityLevel

***

### categoryCode?

> `optional` **categoryCode**: `string`

A code specifying a category for this specified certificate.

#### See

https://vocabulary.uncefact.org/categoryCode

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)[]

A code specifying a type of specified certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### certifiedObject?

> `optional` **certifiedObject**: [`IUneceObject`](IUneceObject.md)[]

An object certified by this specified certificate.

#### See

https://vocabulary.uncefact.org/certifiedObject

***

### certifiedParty?

> `optional` **certifiedParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The certified party for this specified certificate.

#### See

https://vocabulary.uncefact.org/certifiedParty

***

### certifiedPersonQuantity?

> `optional` **certifiedPersonQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of certified persons for this specified certificate.

#### See

https://vocabulary.uncefact.org/certifiedPersonQuantity

***

### description?

> `optional` **description**: `string`

A textual description of this specified certificate.

#### See

https://vocabulary.uncefact.org/description

***

### effectiveFromDateTime?

> `optional` **effectiveFromDateTime**: `string`

The date, time, date time, or other date time value from which this specified certificate is effective.

#### See

https://vocabulary.uncefact.org/effectiveFromDateTime

***

### endorsementDateTime?

> `optional` **endorsementDateTime**: `string`

An endorsement date, time, date time or other date time value for this specified certificate.

#### See

https://vocabulary.uncefact.org/endorsementDateTime

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The expiry date, time, date time, or other date time value for this specified certificate.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this specified certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issuanceLocation?

> `optional` **issuanceLocation**: [`IUneceTradeLocation`](IUneceTradeLocation.md)[]

An issuance location for this specified certificate.

#### See

https://vocabulary.uncefact.org/issuanceLocation

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The issue date, time, date time, or other date time value for this specified certificate.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode?

> `optional` **issueReasonCode**: `string`

The code specifying the reason why this specified certificate was issued.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuerParty?

> `optional` **issuerParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The issuer party for this specified certificate.

#### See

https://vocabulary.uncefact.org/issuerParty

***

### latestEndorsementDateTime?

> `optional` **latestEndorsementDateTime**: `string`

A latest endorsement date, time, date time or other date time value for this specified certificate.

#### See

https://vocabulary.uncefact.org/latestEndorsementDateTime

***

### name?

> `optional` **name**: `string`

A name, expressed as text, for this specified certificate.

#### See

https://vocabulary.uncefact.org/name

***

### partyId?

> `optional` **partyId**: `string`

An identifier of a party for this specified certificate.

#### See

https://vocabulary.uncefact.org/partyId

***

### providingParty?

> `optional` **providingParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party, other than the issuer, providing this specified certificate.

#### See

https://vocabulary.uncefact.org/providingParty

***

### purposeCode?

> `optional` **purposeCode**: `string`

A code specifying a purpose of this specified certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### relatedTradeTransaction?

> `optional` **relatedTradeTransaction**: [`IUneceSupplyChainTradeTransaction`](IUneceSupplyChainTradeTransaction.md)[]

A supply chain trade transaction related to this specified certificate.

#### See

https://vocabulary.uncefact.org/relatedTradeTransaction

***

### reportedDocumentStatus?

> `optional` **reportedDocumentStatus**: [`IUneceDocumentStatus`](IUneceDocumentStatus.md)[]

A reported status for this specified certificate.

#### See

https://vocabulary.uncefact.org/reportedDocumentStatus

***

### requestedEffectiveDateTime?

> `optional` **requestedEffectiveDateTime**: `string`

The requested effective date, time, date time or other date time value for this specified certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime

***

### requiredIndicator?

> `optional` **requiredIndicator**: `boolean`

The indication of whether or not this specified certificate is required.

#### See

https://vocabulary.uncefact.org/requiredIndicator

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for this specified certificate.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### statusCode?

> `optional` **statusCode**: `string`

The code specifying the status of this specified certificate.

#### See

https://vocabulary.uncefact.org/statusCode

***

### subjectTypeCode?

> `optional` **subjectTypeCode**: [`UneceSubjectCodeList`](../type-aliases/UneceSubjectCodeList.md)[]

A code specifying a subject type for this specified certificate.

#### See

https://vocabulary.uncefact.org/subjectTypeCode

***

### validIndicator?

> `optional` **validIndicator**: `boolean`

The indication of whether or not this specified certificate is valid.

#### See

https://vocabulary.uncefact.org/validIndicator

***

### validityExtendedUntilDateTime?

> `optional` **validityExtendedUntilDateTime**: `string`

A date, time, date time or other date time value until which this specified certificate will remain valid under the
terms of an approved extension period.

#### See

https://vocabulary.uncefact.org/validityExtendedUntilDateTime

***

### validityTypeCode?

> `optional` **validityTypeCode**: `string`

A code specifying a type of validity for this specified certificate.

#### See

https://vocabulary.uncefact.org/validityTypeCode
