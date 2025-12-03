# Interface: IProductFinishingTreatment

Improving measures for manufactured components or products to meet end use requirements.

## See

https://vocabulary.uncefact.org/ProductFinishingTreatment

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

> **type**: `"ProductFinishingTreatment"`

JSON-LD Type.

***

### applicableProcessCertificate?

> `optional` **applicableProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate applicable to this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description of this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of product finishing treatment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedMaterial?

> `optional` **usedMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Material used for this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/usedMaterial
