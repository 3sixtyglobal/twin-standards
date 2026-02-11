# Interface: IUneceProcessCertificate

A piece of written, printed or electronic matter that provides information or evidence that a process has met required
criteria.

## See

https://vocabulary.uncefact.org/ProcessCertificate

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

> **type**: `"ProcessCertificate"`

JSON-LD Type.

***

### actualEffectiveDateTime?

> `optional` **actualEffectiveDateTime**: `string`

The actual effective date, time, date time or other date time value for this process certificate.

#### See

https://vocabulary.uncefact.org/actualEffectiveDateTime

***

### applicableAssertion?

> `optional` **applicableAssertion**: [`IUneceAssertion`](IUneceAssertion.md)

The sustainability assertion applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableObjectCode?

> `optional` **applicableObjectCode**: `string`

A code specifying an object for which this process certificate is applicable.

#### See

https://vocabulary.uncefact.org/applicableObjectCode

***

### applicableProcessCertification?

> `optional` **applicableProcessCertification**: [`IUneceProcessCertification`](IUneceProcessCertification.md)[]

A process certification applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableProcessCertification

***

### applicableProcessCharacteristic?

> `optional` **applicableProcessCharacteristic**: [`IUneceProcessCharacteristic`](IUneceProcessCharacteristic.md)[]

A process characteristic applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableProcessCharacteristic

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this process certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this process certificate.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of process certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### description?

> `optional` **description**: `string`

A textual description of this process certificate.

#### See

https://vocabulary.uncefact.org/description

***

### expiryDateTime?

> `optional` **expiryDateTime**: `string`

The date, time, date time, or other date time value when this process certificate expires.

#### See

https://vocabulary.uncefact.org/expiryDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this process certificate.

#### See

https://vocabulary.uncefact.org/identifier

***

### issueDateTime?

> `optional` **issueDateTime**: `string`

The date, time, date time, or other date time value for the issuance of this process certificate.

#### See

https://vocabulary.uncefact.org/issueDateTime

***

### issueReasonCode?

> `optional` **issueReasonCode**: `string`

The code specifying the reason for the issue of this process certificate.

#### See

https://vocabulary.uncefact.org/issueReasonCode

***

### issuingPartyId?

> `optional` **issuingPartyId**: `string`

An identifier of the party issuing this process certificate.

#### See

https://vocabulary.uncefact.org/issuingPartyId

***

### purposeCode?

> `optional` **purposeCode**: `string`

The code specifying the purpose of this process certificate.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### requestedEffectiveDateTime?

> `optional` **requestedEffectiveDateTime**: `string`

The requested effective date, time, date time or other date time value for this process certificate.

#### See

https://vocabulary.uncefact.org/requestedEffectiveDateTime
