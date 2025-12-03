# Interface: ITTLocation

A physical place related to a Track and Trace (TT) process.

## See

https://vocabulary.uncefact.org/TTLocation

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

> **type**: `"TTLocation"`

JSON-LD Type.

***

### applicableTechnicalCharacteristic?

> `optional` **applicableTechnicalCharacteristic**: [`ITechnicalCharacteristic`](ITechnicalCharacteristic.md)[]

A technical characteristic applicable to this TT location.

#### See

https://vocabulary.uncefact.org/applicableTechnicalCharacteristic

***

### description?

> `optional` **description**: `string`

A textual description of this TT location.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this TT location.

#### See

https://vocabulary.uncefact.org/identifier

***

### locationFunctionTypeCode?

> `optional` **locationFunctionTypeCode**: [`LocationFunctionCodeList`](../type-aliases/LocationFunctionCodeList.md)[]

The code specifying the type of TT location.

#### See

https://vocabulary.uncefact.org/locationFunctionTypeCode

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this TT location.

#### See

https://vocabulary.uncefact.org/name

***

### responsibleTTParty?

> `optional` **responsibleTTParty**: [`ITTParty`](ITTParty.md)[]

The party responsible for this TT location.

#### See

https://vocabulary.uncefact.org/responsibleTTParty

***

### specifiedAnimalHoldingEvent?

> `optional` **specifiedAnimalHoldingEvent**: [`IAnimalHoldingEvent`](IAnimalHoldingEvent.md)[]

An animal holding event specified for this TT location.

#### See

https://vocabulary.uncefact.org/specifiedAnimalHoldingEvent

***

### specifiedGeographicalArea?

> `optional` **specifiedGeographicalArea**: [`IGeographicalArea`](IGeographicalArea.md)[]

The geographical area specified for this TT location.

#### See

https://vocabulary.uncefact.org/specifiedGeographicalArea

***

### specifiedTTAnimal?

> `optional` **specifiedTTAnimal**: [`ITTAnimal`](ITTAnimal.md)[]

An animal specified for this TT location.

#### See

https://vocabulary.uncefact.org/specifiedTTAnimal
