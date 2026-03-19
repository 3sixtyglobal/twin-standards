# Interface: IUneceAnimalCertificate

A collection of data for a piece of written, printed or electronic matter that provides information or evidence about
the identity of an animal or a batch of animals.

## See

https://vocabulary.uncefact.org/AnimalCertificate

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"AnimalCertificate"`

JSON-LD Type.

***

### applicableAnimalCertification? {#applicableanimalcertification}

> `optional` **applicableAnimalCertification?**: [`IUneceAnimalCertification`](IUneceAnimalCertification.md)[]

An animal certification applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableAnimalCertification

***

### applicableAssertion? {#applicableassertion}

> `optional` **applicableAssertion?**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard?**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic?**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### certificateTypeCode {#certificatetypecode}

> **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)

The code specifying the type of animal certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this animal certificate.

#### See

https://vocabulary.uncefact.org/identifier
