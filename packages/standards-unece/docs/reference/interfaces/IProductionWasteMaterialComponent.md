# Interface: IProductionWasteMaterialComponent

A production material component that is unused and rejected as unwanted.

## See

https://vocabulary.uncefact.org/ProductionWasteMaterialComponent

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

> **type**: `"ProductionWasteMaterialComponent"`

JSON-LD Type.

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IProductCertificate`](IProductCertificate.md)[]

A product certificate applicable to this production waste material component.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`ISustainabilityCharacteristic`](ISustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this production waste material component.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description of this production waste material component.

#### See

https://vocabulary.uncefact.org/description

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of production waste material component.

#### See

https://vocabulary.uncefact.org/typeCode
