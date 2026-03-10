# Interface: IUneceSpecifiedChemicalTreatment

Any substance such as dyestuffs, chrome oxide, acids, sulphate, surfactant or other chemicals applied to an agricultural
field, substrate, plant, animal product, material or product.

## See

https://vocabulary.uncefact.org/SpecifiedChemicalTreatment

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"SpecifiedChemicalTreatment"`

JSON-LD Type.

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this specified chemical treatment.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description of this specified chemical treatment.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this specified chemical treatment.

#### See

https://vocabulary.uncefact.org/identifier

***

### specifiedProcessCertificate?

> `optional` **specifiedProcessCertificate**: [`IUneceProcessCertificate`](IUneceProcessCertificate.md)[]

A process certificate for this specified chemical treatment.

#### See

https://vocabulary.uncefact.org/specifiedProcessCertificate

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of chemical treatment.

#### See

https://vocabulary.uncefact.org/typeCode

***

### usedChemical?

> `optional` **usedChemical**: [`IUneceChemical`](IUneceChemical.md)[]

A distinct chemical used for this specified chemical treatment.

#### See

https://vocabulary.uncefact.org/usedChemical
