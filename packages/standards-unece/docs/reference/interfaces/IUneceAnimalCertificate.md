# Interface: IUneceAnimalCertificate

A collection of data for a piece of written, printed or electronic matter that provides information or evidence about
the identity of an animal or a batch of animals.

## See

https://vocabulary.uncefact.org/AnimalCertificate

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"AnimalCertificate"`

JSON-LD Type.

***

### applicableAnimalCertification?

> `optional` **applicableAnimalCertification**: [`IUneceAnimalCertification`](IUneceAnimalCertification.md)

An animal certification applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableAnimalCertification

***

### applicableAssertion?

> `optional` **applicableAssertion**: [`IUneceAssertion`](IUneceAssertion.md)[]

A sustainability assertion applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableAssertion

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A sustainability characteristic applicable to this animal certificate.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### certificateTypeCode?

> `optional` **certificateTypeCode**: [`UneceCertificateTypeCodeList`](../type-aliases/UneceCertificateTypeCodeList.md)[]

The code specifying the type of animal certificate.

#### See

https://vocabulary.uncefact.org/certificateTypeCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this animal certificate.

#### See

https://vocabulary.uncefact.org/identifier
