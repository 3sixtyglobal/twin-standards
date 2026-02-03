# Interface: IUneceOrganizationalCertificate

A piece of written, printed or electronic matter that provides information or evidence that an organization has met
required organizational criteria.

## See

https://vocabulary.uncefact.org/OrganizationalCertificate

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

> **type**: `"OrganizationalCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime?

> `optional` **actualEffectiveDateTime**: `string`

The actual effective date, time, date time or other date time value for this organizational certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion?

> `optional` **applicableAssertion**: [`IUneceAssertion`](IUneceAssertion.md)

A sustainability assertion applicable to this organizational certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode?

> `optional` **applicableObjectCode**: `string`

A code specifying an object for which this organizational certificate is applicable.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableOrganizationCharacteristic?

> `optional` **applicableOrganizationCharacteristic**: [`IUneceOrganizationCharacteristic`](IUneceOrganizationCharacteristic.md)

A characteristic applicable to this organization certificate.

#### See

https://vocabulary.uncefact.org/applicableOrganizationCharacteristic

***

### applicableOrganizationalCertification?

> `optional` **applicableOrganizationalCertification**: [`IUneceOrganizationalCertification`](IUneceOrganizationalCertification.md)

An organizational certification applicable to this organizational certificate.

#### See

https://vocabulary.uncefact.org/applicableOrganizationalCertification

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)

A referenced standard applicable to this organizational certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)

A sustainability characteristic applicable to this organizational certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)

A binary file attached to this organizational certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of organizational certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description?

> `optional` **description**: `string`

A textual description of this organizational certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value when this organizational certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this organizational certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value for the issuance of this organizational certificate.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode?

> `optional` **issueReasonCode**: `string`

The code specifying the reason why this organizational certificate was issued.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId?

> `optional` **issuingPartyId**: `string`

An identifier of the party issuing this organizational certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode?

> `optional` **purposeCode**: `string`

The code specifying the purpose of this organizational certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime?

> `optional` **requestedEffectiveDateTime**: `string`

The requested effective date, time, date time or other date time value for this organizational certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
