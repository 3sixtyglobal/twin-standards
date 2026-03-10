# Interface: IUneceStandard

A referenced norm or requirement that establishes uniform criteria, methods, processes and practices, such as in
engineering or technical areas.

## See

https://vocabulary.uncefact.org/Standard

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Standard"`

JSON-LD Type.

***

### agencyId?

> `optional` **agencyId**: `string` \| `IJsonLdValueObject`

The identifier of the agency for this referenced standard.

#### See

https://vocabulary.uncefact.org/agencyId

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IUneceAssessment`](IUneceAssessment.md)[]

A specified assessment applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableCountry?

> `optional` **applicableCountry**: [`IUneceCountry`](IUneceCountry.md)[]

A country where this referenced standard is applicable.

#### See

https://vocabulary.uncefact.org/applicableCountry

***

### applicableDeclaration?

> `optional` **applicableDeclaration**: [`IUneceSpecifiedDeclaration`](IUneceSpecifiedDeclaration.md)[]

A specified declaration applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableLicence?

> `optional` **applicableLicence**: [`IUneceLicence`](IUneceLicence.md)[]

A specified licence applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableMetricCharacteristic?

> `optional` **applicableMetricCharacteristic**: [`IUneceMetricCharacteristic`](IUneceMetricCharacteristic.md)[]

A metric characteristic applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableMetricCharacteristic

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`IUneceSpecifiedCertificate`](IUneceSpecifiedCertificate.md)[]

A specified certificate applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this referenced standard.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### description?

> `optional` **description**: `string`

A textual description of this referenced standard.

#### See

https://vocabulary.uncefact.org/description

***

### elementVersionId?

> `optional` **elementVersionId**: `string` \| `IJsonLdValueObject`

The identifier of the version of a specific element within the referenced standard, such as the version of a data
element.

#### See

https://vocabulary.uncefact.org/elementVersionId

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier of this referenced standard.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this referenced standard.

#### See

https://vocabulary.uncefact.org/name

***

### partId?

> `optional` **partId**: `string` \| `IJsonLdValueObject`

The identifier of a part of this referenced standard, such as a section or topic.

#### See

https://vocabulary.uncefact.org/partId

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion specified for this referenced standard.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this referenced standard.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of referenced standard.

#### See

https://vocabulary.uncefact.org/typeCode

***

### uRIId?

> `optional` **uRIId**: `string` \| `IJsonLdValueObject`

The Uniform Resource Identifier (URI) for this referenced standard.

#### See

https://vocabulary.uncefact.org/uRIId

***

### versionId?

> `optional` **versionId**: `string` \| `IJsonLdValueObject`

The identifier of the version of this referenced standard.

#### See

https://vocabulary.uncefact.org/versionId
