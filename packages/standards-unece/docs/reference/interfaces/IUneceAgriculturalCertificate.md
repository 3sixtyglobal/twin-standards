# Interface: IUneceAgriculturalCertificate

A legal proof of ownership, worthiness or qualification to operate an agricultural item.

## See

https://vocabulary.uncefact.org/AgriculturalCertificate

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AgriculturalCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime? {#actualeffectivedatetime}

> `optional` **actualEffectiveDateTime?**: `string`

The actual effective date, time, date time or other date time value for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion? {#applicableassertion}

> `optional` **applicableAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion applicable to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode? {#applicableobjectcode}

> `optional` **applicableObjectCode?**: `string`

A code specifying an applicable object, such as item, animal, person or organization, for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode? {#certificatetypecode}

> `optional` **certificateTypeCode?**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of agricultural certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description? {#description}

> `optional` **description?**: `string`

The textual description of this agricultural certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime?**: `string`

The date, time, date time, or other date time value when this agricultural certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

The date, time, date time, or other date time value when this agricultural certificate was issued.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode? {#issuereasoncode}

> `optional` **issueReasonCode?**: `string`

The code specifying the reason why the agricultural certificate was issued.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId? {#issuingpartyid}

> `optional` **issuingPartyId?**: `string` \| `IJsonLdValueObject`

The identifier for the issuing party of this agricultural certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode? {#purposecode}

> `optional` **purposeCode?**: `string`

A code specifying the purpose of this agricultural certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime? {#requestedeffectivedatetime}

> `optional` **requestedEffectiveDateTime?**: `string`

The requested effective date, time, date time or other date time value for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
