# Interface: ITTAnimal

A Track and Trace (TT) animal or a group of animals, such as those kept or raised on a farm, ranch.

## See

https://vocabulary.uncefact.org/TTAnimal

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

> **type**: `"TTAnimal"`

JSON-LD Type.

***

### holderResponsibleParty?

> `optional` **holderResponsibleParty**: [`ITTParty`](ITTParty.md)[]

The holder responsible party for this TT animal.

#### See

https://vocabulary.uncefact.org/holderResponsibleParty

***

### relatedTTLocation?

> `optional` **relatedTTLocation**: [`ITTLocation`](ITTLocation.md)[]

A location related to this TT animal.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### speciesTypeCode?

> `optional` **speciesTypeCode**: `string`

The code specifying the type of species and subclasses of this TT animal, such as bovine, sheep or salmon.

#### See

https://vocabulary.uncefact.org/speciesTypeCode

***

### specifiedAnimalBatch?

> `optional` **specifiedAnimalBatch**: [`IAnimalBatch`](IAnimalBatch.md)

The animal batch specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalBatch

***

### specifiedAnimalCertificate?

> `optional` **specifiedAnimalCertificate**: [`IAnimalCertificate`](IAnimalCertificate.md)[]

An animal certificate specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertificate

***

### specifiedAnimalHoldingEvent?

> `optional` **specifiedAnimalHoldingEvent**: [`IAnimalHoldingEvent`](IAnimalHoldingEvent.md)[]

An animal holding event specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent

***

### specifiedAnimalIdentity?

> `optional` **specifiedAnimalIdentity**: [`IAnimalIdentity`](IAnimalIdentity.md)[]

An animal identity specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalIdentity

***

### specifiedDelimitedPeriod?

> `optional` **specifiedDelimitedPeriod**: [`IDelimitedPeriod`](IDelimitedPeriod.md)[]

A delimited period specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedIndividualTTAnimal?

> `optional` **specifiedIndividualTTAnimal**: [`IIndividualTTAnimal`](IIndividualTTAnimal.md)[]

The individual tracking animal specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedIndividualTTAnimal

***

### specifiedPeriod?

> `optional` **specifiedPeriod**: [`IDelimitedPeriod`](IDelimitedPeriod.md)[]

A delimited period specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedPeriod

***

### specifiedSpeciesTTAnimal?

> `optional` **specifiedSpeciesTTAnimal**: [`ISpeciesTTAnimal`](ISpeciesTTAnimal.md)[]

A species specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedSpeciesTTAnimal
