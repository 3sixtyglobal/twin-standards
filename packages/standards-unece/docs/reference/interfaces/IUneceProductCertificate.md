# Interface: IUneceProductCertificate

A collection of data for a piece of written, printed or electronic matter that provides information or evidence about
the product.

## See

https://vocabulary.uncefact.org/ProductCertificate

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime? {#actualeffectivedatetime}

> `optional` **actualEffectiveDateTime**: `string`

The actual effective date, time, date time or other date time value for this product certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion? {#applicableassertion}

> `optional` **applicableAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion applicable to this product certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode? {#applicableobjectcode}

> `optional` **applicableObjectCode**: `string`

A code specifying an object, such as item, animal, person or organization applicable for this product certificate.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableProductCharacteristic? {#applicableproductcharacteristic}

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this product certificate.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this product certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this product certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### applicableTradeProductCertification? {#applicabletradeproductcertification}

> `optional` **applicableTradeProductCertification**: [`IUneceTradeProductCertification`](IUneceTradeProductCertification.md)

The trade product certification applicable to this product certificate.

#### See

https://vocabulary.uncefact.org/applicableTradeProductCertification

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this product certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode? {#certificatetypecode}

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)[]

A code specifying the type of product certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this product certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime? {#expirydatetime}

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value when this product certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this product certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime? {#issuedatetime}

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value when this product certificate was issued.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode? {#issuereasoncode}

> `optional` **issueReasonCode**: `string`

The code specifying the reason why this product certificate was issued.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId? {#issuingpartyid}

> `optional` **issuingPartyId**: `string` \| `IJsonLdValueObject`

The identifier for the party issuing this product certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode? {#purposecode}

> `optional` **purposeCode**: `string`

A code specifying the purpose of this product certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime? {#requestedeffectivedatetime}

> `optional` **requestedEffectiveDateTime**: `string`

The requested effective date, time, date time or other date time value for this product certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
