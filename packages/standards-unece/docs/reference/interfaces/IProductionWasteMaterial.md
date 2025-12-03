# Interface: IProductionWasteMaterial

Any materials unused and rejected as unwanted during a production process.

## See

https://vocabulary.uncefact.org/ProductionWasteMaterial

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

> **type**: `"ProductionWasteMaterial"`

JSON-LD Type.

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate applicable to this production waste material.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableProductionWasteRecoveryDisposalProcess?

> `optional` **applicableProductionWasteRecoveryDisposalProcess**: [`IProductionWasteRecoveryDisposalProcess`](IProductionWasteRecoveryDisposalProcess.md)[]

A production waste recovery disposal process applicable to this production waste material.

#### See

https://vocabulary.uncefact.org/applicableProductionWasteRecoveryDisposalProcess

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production waste material.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### includedProductionWasteMaterialComponent?

> `optional` **includedProductionWasteMaterialComponent**: [`IProductionWasteMaterialComponent`](IProductionWasteMaterialComponent.md)[]

A production waste material component included in this production waste material.

#### See

https://vocabulary.uncefact.org/includedProductionWasteMaterialComponent

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of production waste material.

#### See

https://vocabulary.uncefact.org/typeCode

***

### volumeMeasure?

> `optional` **volumeMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the volume of this production waste material.

#### See

https://vocabulary.uncefact.org/volumeMeasure

***

### weightMeasure?

> `optional` **weightMeasure**: [`IMeasureType`](IMeasureType.md)[]

A measure of the weight of this production waste material.

#### See

https://vocabulary.uncefact.org/weightMeasure
