# Interface: IUneceHazardousMaterial

Material which exhibits adverse effects on living organisms.

## See

https://vocabulary.uncefact.org/HazardousMaterial

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

> **type**: `"HazardousMaterial"`

JSON-LD Type.

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableProductCharacteristic?

> `optional` **applicableProductCharacteristic**: [`IUneceProductCharacteristic`](IUneceProductCharacteristic.md)[]

A product characteristic applicable to this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/applicableProductCharacteristic

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### biologicalSeverityDescription?

> `optional` **biologicalSeverityDescription**: `string`

The textual description of the biological severity of this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/biologicalSeverityDescription

***

### description?

> `optional` **description**: `string`

The textual description of this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/description

***

### entryRouteDescription?

> `optional` **entryRouteDescription**: `string`

A textual description of the entry route of this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/entryRouteDescription

***

### reproductiveToxinName?

> `optional` **reproductiveToxinName**: `string`

The name, expressed as text, of the reproductive toxin in this toxicological hazardous material.

#### See

https://vocabulary.uncefact.org/reproductiveToxinName
