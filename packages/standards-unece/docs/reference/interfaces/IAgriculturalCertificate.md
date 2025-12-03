# Interface: IAgriculturalCertificate

A legal proof of ownership, worthiness or qualification to operate an agricultural item.

## See

https://vocabulary.uncefact.org/AgriculturalCertificate

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

> **type**: `"AgriculturalCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime?

> `optional` **actualEffectiveDateTime**: `string`

The actual effective date, time, date time or other date time value for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion?

> `optional` **applicableAssertion**: [`IAssertion`](IAssertion.md)[]

A sustainability assertion applicable to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode?

> `optional` **applicableObjectCode**: `string`

A code specifying an applicable object, such as item, animal, person or organization, for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableStandard?

> `optional` **applicableStandard**: [`IStandard`](IStandard.md)[]

A referenced standard applicable to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

A binary file attached to this agricultural certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`CertificateTypeCodeList`](../type-aliases/CertificateTypeCodeList.md)[]

The code specifying the type of agricultural certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description?

> `optional` **description**: `string`

The textual description of this agricultural certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value when this agricultural certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value when this agricultural certificate was issued.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode?

> `optional` **issueReasonCode**: `string`

The code specifying the reason why the agricultural certificate was issued.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId?

> `optional` **issuingPartyId**: `string`

The identifier for the issuing party of this agricultural certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode?

> `optional` **purposeCode**: `string`

A code specifying the purpose of this agricultural certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime?

> `optional` **requestedEffectiveDateTime**: `string`

The requested effective date, time, date time or other date time value for this agricultural certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
