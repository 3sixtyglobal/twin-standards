# Interface: IUneceSustainabilityInspection

The process of performing documented checks of sustainability characteristics, with a focus on discovering deviations,
related to documented sustainability requirements.

## See

https://vocabulary.uncefact.org/SustainabilityInspection

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

> **type**: `"SustainabilityInspection"`

JSON-LD Type.

***

### applicableInspectionResult?

> `optional` **applicableInspectionResult**: [`IUneceInspectionResult`](IUneceInspectionResult.md)[]

The specified inspection result applicable to this sustainability inspection.

#### See

https://vocabulary.uncefact.org/applicableInspectionResult

***

### applicableStandard?

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this sustainability inspection.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic?

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A characteristic applicable to this sustainability inspection.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### description?

> `optional` **description**: `string`

A textual description of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/description

***

### executionParty?

> `optional` **executionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)[]

The party responsible for the execution of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/executionParty

***

### executionPerson?

> `optional` **executionPerson**: [`IUneceInspectionPerson`](IUneceInspectionPerson.md)[]

The inspector responsible for the execution of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/executionPerson

***

### identifier?

> `optional` **identifier**: `string`

An identifier of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/name

***

### outsourcedIndicator?

> `optional` **outsourcedIndicator**: `boolean`

The indication of whether or not this sustainability inspection is outsourced.

#### See

https://vocabulary.uncefact.org/outsourcedIndicator

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedInspectionEvent?

> `optional` **specifiedInspectionEvent**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

A specified inspection event for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedInspectionStatus?

> `optional` **specifiedInspectionStatus**: [`IUneceInspectionStatus`](IUneceInspectionStatus.md)[]

The inspection status specified for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionStatus

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of sustainability inspection.

#### See

https://vocabulary.uncefact.org/typeCode
