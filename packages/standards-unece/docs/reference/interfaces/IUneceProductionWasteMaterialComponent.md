# Interface: IUneceProductionWasteMaterialComponent

A production material component that is unused and rejected as unwanted.

## See

https://vocabulary.uncefact.org/ProductionWasteMaterialComponent

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"ProductionWasteMaterialComponent"`

JSON-LD Type.

***

### applicableProductCertificate?

> `optional` **applicableProductCertificate**: [`IUneceProductCertificate`](IUneceProductCertificate.md)[]

A product certificate applicable to this production waste material component.

#### See

https://vocabulary.uncefact.org/applicableProductCertificate

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

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
