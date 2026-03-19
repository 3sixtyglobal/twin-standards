# Interface: IUneceTTLocation

A physical place related to a Track and Trace (TT) process.

## See

https://vocabulary.uncefact.org/TTLocation

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"TTLocation"`

JSON-LD Type.

***

### applicableTechnicalCharacteristic? {#applicabletechnicalcharacteristic}

> `optional` **applicableTechnicalCharacteristic?**: [`IUneceTechnicalCharacteristic`](IUneceTechnicalCharacteristic.md)[]

A technical characteristic applicable to this TT location.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this TT location.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier for this TT location.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode? {#locationfunctiontypecode}

> `optional` **locationFunctionTypeCode?**: [`UneceLocationFunctionCodeList`](../type-aliases/UneceLocationFunctionCodeList.md)

The code specifying the type of TT location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name? {#name}

> `optional` **name?**: `string`

A name, expressed as text, of this TT location.

#### See

https://vocabulary.uncefact.org/name

***

### responsibleTTParty? {#responsiblettparty}

> `optional` **responsibleTTParty?**: [`IUneceTTParty`](IUneceTTParty.md)

The party responsible for this TT location.

#### See

https://vocabulary.uncefact.org/responsibleTTParty

***

### specifiedAnimalHoldingEvent? {#specifiedanimalholdingevent}

> `optional` **specifiedAnimalHoldingEvent?**: [`IUneceAnimalHoldingEvent`](IUneceAnimalHoldingEvent.md)[]

An animal holding event specified for this TT location.

#### See

https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent

***

### specifiedGeographicalArea? {#specifiedgeographicalarea}

> `optional` **specifiedGeographicalArea?**: [`IUneceGeographicalArea`](IUneceGeographicalArea.md)

The geographical area specified for this TT location.

#### See

https://vocabulary.uncefact.org/specifiedGeographicalArea

***

### specifiedTTAnimal? {#specifiedttanimal}

> `optional` **specifiedTTAnimal?**: [`IUneceTTAnimal`](IUneceTTAnimal.md)[]

An animal specified for this TT location.

#### See

https://vocabulary.uncefact.org/specifiedTTAnimal
