# Interface: IUneceProcessCertificate

A piece of written, printed or electronic matter that provides information or evidence that a process has met required
criteria.

## See

https://vocabulary.uncefact.org/ProcessCertificate

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProcessCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime? {#actualeffectivedatetime}

> `optional` **actualEffectiveDateTime?**: `string`

The actual effective date, time, date time or other date time value for this process certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion? {#applicableassertion}

> `optional` **applicableAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)

The sustainability assertion applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode? {#applicableobjectcode}

> `optional` **applicableObjectCode?**: `string`

A code specifying an object for which this process certificate is applicable.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableProcessCertification? {#applicableprocesscertification}

> `optional` **applicableProcessCertification?**: [`IUneceProcessCertification`](IUneceProcessCertification.md)[]

A process certification applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableProcessCertification

***

### applicableProcessCharacteristic? {#applicableprocesscharacteristic}

> `optional` **applicableProcessCharacteristic?**: [`IUneceProcessCharacteristic`](IUneceProcessCharacteristic.md)[]

A process characteristic applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableProcessCharacteristic

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this process certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode? {#certificatetypecode}

> `optional` **certificateTypeCode?**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of process certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this process certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime?**: `string`

The date, time, date time, or other date time value when this process certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier of this process certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime?**: `string`

The date, time, date time, or other date time value for the issuance of this process certificate.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode? {#issuereasoncode}

> `optional` **issueReasonCode?**: `string`

The code specifying the reason for the issue of this process certificate.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId? {#issuingpartyid}

> `optional` **issuingPartyId?**: `string` \| `IJsonLdValueObject`

An identifier of the party issuing this process certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode? {#purposecode}

> `optional` **purposeCode?**: `string`

The code specifying the purpose of this process certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime? {#requestedeffectivedatetime}

> `optional` **requestedEffectiveDateTime?**: `string`

The requested effective date, time, date time or other date time value for this process certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
