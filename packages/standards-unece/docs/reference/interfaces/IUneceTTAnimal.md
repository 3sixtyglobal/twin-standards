# Interface: IUneceTTAnimal

A Track and Trace (TT) animal or a group of animals, such as those kept or raised on a farm, ranch.

## See

https://vocabulary.uncefact.org/TTAnimal

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TTAnimal"`

JSON-LD Type.

***

### holderResponsibleParty {#holderresponsibleparty}

> **holderResponsibleParty**: [`IUneceTTParty`](IUneceTTParty.md)

The holder responsible party for this TT animal.

#### See

https://vocabulary.uncefact.org/holderResponsibleParty

***

### relatedTTLocation? {#relatedttlocation}

> `optional` **relatedTTLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)[]

A location related to this TT animal.

#### See

https://vocabulary.uncefact.org/relatedTTLocation

***

### speciesTypeCode {#speciestypecode}

> **speciesTypeCode**: `string`

The code specifying the type of species and subclasses of this TT animal, such as bovine, sheep or salmon.

#### See

https://vocabulary.uncefact.org/speciesTypeCode

***

### specifiedAnimalBatch? {#specifiedanimalbatch}

> `optional` **specifiedAnimalBatch**: [`IUneceAnimalBatch`](IUneceAnimalBatch.md)

The animal batch specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalBatch

***

### specifiedAnimalCertificate? {#specifiedanimalcertificate}

> `optional` **specifiedAnimalCertificate**: [`IUneceAnimalCertificate`](IUneceAnimalCertificate.md)[]

An animal certificate specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalCertificate

***

### specifiedAnimalHoldingEvent {#specifiedanimalholdingevent}

> **specifiedAnimalHoldingEvent**: [`IUneceAnimalHoldingEvent`](IUneceAnimalHoldingEvent.md)[]

An animal holding event specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent

***

### specifiedAnimalIdentity {#specifiedanimalidentity}

> **specifiedAnimalIdentity**: [`IUneceAnimalIdentity`](IUneceAnimalIdentity.md)[]

An animal identity specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedAnimalIdentity

***

### specifiedDelimitedPeriod? {#specifieddelimitedperiod}

> `optional` **specifiedDelimitedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

A delimited period specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedDelimitedPeriod

***

### specifiedIndividualTTAnimal? {#specifiedindividualttanimal}

> `optional` **specifiedIndividualTTAnimal**: [`IUneceIndividualTTAnimal`](IUneceIndividualTTAnimal.md)

The individual tracking animal specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedIndividualTTAnimal

***

### specifiedPeriod? {#specifiedperiod}

> `optional` **specifiedPeriod**: [`IUneceDelimitedPeriod`](IUneceDelimitedPeriod.md)[]

A delimited period specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedPeriod

***

### specifiedSpeciesTTAnimal? {#specifiedspeciesttanimal}

> `optional` **specifiedSpeciesTTAnimal**: [`IUneceSpeciesTTAnimal`](IUneceSpeciesTTAnimal.md)[]

A species specified for this TT animal.

#### See

https://vocabulary.uncefact.org/specifiedSpeciesTTAnimal
