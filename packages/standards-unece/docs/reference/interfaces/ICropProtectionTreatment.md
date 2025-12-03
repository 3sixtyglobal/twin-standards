# Interface: ICropProtectionTreatment

A method or substance, such as chemical fertilizers and crop protection products, applied to plant growth whilst
managing and controlling diseases and pests.

## See

https://vocabulary.uncefact.org/CropProtectionTreatment

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

> **type**: `"CropProtectionTreatment"`

JSON-LD Type.

***

### applicableProcessCertificate?

> `optional` **applicableProcessCertificate**: [`IProcessCertificate`](IProcessCertificate.md)[]

A process certificate applicable to this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description of this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of crop protection treatment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedMaterial?

> `optional` **usedMaterial**: [`ISpecifiedMaterial`](ISpecifiedMaterial.md)[]

Material used for this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/usedMaterial
