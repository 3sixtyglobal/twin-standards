# Interface: IUneceCropProtectionTreatment

A method or substance, such as chemical fertilizers and crop protection products, applied to plant growth whilst
managing and controlling diseases and pests.

## See

https://vocabulary.uncefact.org/CropProtectionTreatment

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"CropProtectionTreatment"`

JSON-LD Type.

***

### applicableProcessCertificate?

> `optional` **applicableProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate applicable to this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/applicableProcessCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

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

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

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

> `optional` **usedMaterial**: [`IUneceSpecifiedMaterial`](IUneceSpecifiedMaterial.md)[]

Material used for this specified crop protection treatment.

#### See

https://vocabulary.uncefact.org/usedMaterial
