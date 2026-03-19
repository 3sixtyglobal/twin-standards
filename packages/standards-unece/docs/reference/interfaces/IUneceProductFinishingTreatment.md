# Interface: IUneceProductFinishingTreatment

Improving measures for manufactured components or products to meet end use requirements.

## See

https://vocabulary.uncefact.org/ProductFinishingTreatment

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductFinishingTreatment"`

JSON-LD Type.

***

### applicableProcessCertificate? {#applicableprocesscertificate}

> `optional` **applicableProcessCertificate?**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate applicable to this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier of this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of product finishing treatment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedMaterial? {#usedmaterial}

> `optional` **usedMaterial?**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material used for this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/usedMaterial
