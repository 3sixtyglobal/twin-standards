# Interface: IUneceCropProtectionTreatment

A method or substance, such as chemical fertilizers and crop protection products, applied to plant growth whilst
managing and controlling diseases and pests.

## See

https://vocabulary.uncefact.org/CropProtectionTreatment

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"CropProtectionTreatment"`

JSON-LD Type.

***

### applicableProcessCertificate? {#applicableprocesscertificate}

> `optional` **applicableProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate applicable to this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of crop protection treatment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedMaterial? {#usedmaterial}

> `optional` **usedMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material used for this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/usedMaterial
