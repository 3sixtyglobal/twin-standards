# Interface: IStandard

A referenced norm or requirement that establishes uniform criteria, methods, processes and practices, such as in
engineering or technical areas.

## See

https://vocabulary.uncefact.org/Standard

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

> **type**: `"Standard"`

JSON-LD Type.

***

### agencyId?

> `optional` **agencyId**: `string`

The identifier of the agency for this referenced standard.

#### See

https://vocabulary.uncefact.org/agencyId

***

### applicableAssessment?

> `optional` **applicableAssessment**: [`IAssessment`](IAssessment.md)[]

A specified assessment applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableAssessment

***

### applicableCountry?

> `optional` **applicableCountry**: [`ICountry`](ICountry.md)[]

A country where this referenced standard is applicable.

#### See

https://vocabulary.uncefact.org/applicableCountry

***

### applicableDeclaration?

> `optional` **applicableDeclaration**: [`ISpecifiedDeclaration`](ISpecifiedDeclaration.md)[]

A specified declaration applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableDeclaration

***

### applicableLicence?

> `optional` **applicableLicence**: [`ILicence`](ILicence.md)[]

A specified licence applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableLicence

***

### applicableMetricCharacteristic?

> `optional` **applicableMetricCharacteristic**: [`IMetricCharacteristic`](IMetricCharacteristic.md)[]

A metric characteristic applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableMetricCharacteristic

***

### applicableSpecifiedCertificate?

> `optional` **applicableSpecifiedCertificate**: [`ISpecifiedCertificate`](ISpecifiedCertificate.md)[]

A specified certificate applicable to this referenced standard.

#### See

https://vocabulary.uncefact.org/applicableSpecifiedCertificate

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

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

> `optional` **elementVersionId**: `string`

The identifier of the version of a specific element within the referenced standard, such as the version of a data
element.

#### See

https://vocabulary.uncefact.org/elementVersionId

***

### identifier?

> `optional` **identifier**: `string`

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

> `optional` **partId**: `string`

The identifier of a part of this referenced standard, such as a section or topic.

#### See

https://vocabulary.uncefact.org/partId

***

### specifiedAssertion?

> `optional` **specifiedAssertion**: [`IAssertion`](IAssertion.md)[]

A sustainability assertion specified for this referenced standard.

#### See

https://vocabulary.uncefact.org/specifiedAssertion

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IDocument`](IDocument.md)[]

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

> `optional` **uRIId**: `string`

The Uniform Resource Identifier (URI) for this referenced standard.

#### See

https://vocabulary.uncefact.org/uRIId

***

### versionId?

> `optional` **versionId**: `string`

The identifier of the version of this referenced standard.

#### See

https://vocabulary.uncefact.org/versionId
