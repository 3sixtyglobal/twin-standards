# Interface: IUneceProductFinishingTreatment

Improving measures for manufactured components or products to meet end use requirements.

## See

https://vocabulary.uncefact.org/ProductFinishingTreatment

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ProductFinishingTreatment"`

JSON-LD Type.

***

### applicableProcessCertificate?

> `optional` **applicableProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate applicable to this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

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

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

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

> `optional` **usedMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material used for this specified product finishing treatment.

#### See

https://vocabulary.uncefact.org/usedMaterial
