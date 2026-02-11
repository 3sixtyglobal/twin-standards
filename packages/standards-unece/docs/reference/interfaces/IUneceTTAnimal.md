# Interface: IUneceTTAnimal

A Track and Trace (TT) animal or a group of animals, such as those kept or raised on a farm, ranch.

## See

https://vocabulary.uncefact.org/TTAnimal

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

> **type**: `"TTAnimal"`

JSON-LD Type.

***

### holderResponsibleParty

> **holderResponsibleParty**: [`IUneceTTParty`](IUneceTTParty.md)

The holder responsible party for this TT animal.

#### See

https://vocabulary.uncefact.org/holderResponsibleParty

***

### relatedTTLocation?

> `optional` **relatedTTLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)[]

A location related to this TT animal.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### speciesTypeCode

> **speciesTypeCode**: `string`

The code specifying the type of species and subclasses of this TT animal, such as bovine, sheep or salmon.

#### See

https://vocabulary.uncefact.org/speciesTypeCode

***

### specifiedAnimalBatch?

> `optional` **specifiedAnimalBatch**: [`IUneceAnimalBatch`](IUneceAnimalBatch.md)

The animal batch specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalBatch

***

### specifiedAnimalCertificate?

> `optional` **specifiedAnimalCertificate**: [`IUneceAnimalCertificate`](IUneceAnimalCertificate.md)[]

An animal certificate specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertificate

***

### specifiedAnimalHoldingEvent

> **specifiedAnimalHoldingEvent**: [`IUneceAnimalHoldingEvent`](IUneceAnimalHoldingEvent.md)[]

An animal holding event specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent

***

### specifiedAnimalIdentity

> **specifiedAnimalIdentity**: [`IUneceAnimalIdentity`](IUneceAnimalIdentity.md)[]

An animal identity specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalIdentity

***

### specifiedDelimitedPeriod?

> `optional` **specifiedDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

A delimited period specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedIndividualTTAnimal?

> `optional` **specifiedIndividualTTAnimal**: [`IUneceIndividualTTAnimal`](IUneceIndividualTTAnimal.md)

The individual tracking animal specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedIndividualTTAnimal

***

### specifiedPeriod?

> `optional` **specifiedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

A delimited period specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedPeriod

***

### specifiedSpeciesTTAnimal?

> `optional` **specifiedSpeciesTTAnimal**: [`IUneceSpeciesTTAnimal`](IUneceSpeciesTTAnimal.md)[]

A species specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedSpeciesTTAnimal
