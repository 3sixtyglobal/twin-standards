# Interface: ISpecifiedInspection

The process of performing documented checks, such as on materials or processes, with a focus on discovering deviations,
errors or faults related to documented requirements.

## See

https://vocabulary.uncefact.org/SpecifiedInspection

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

> **type**: `"SpecifiedInspection"`

JSON-LD Type.

***

### attachedBinaryFile?

> `optional` **attachedBinaryFile**: [`IBinaryFile`](IBinaryFile.md)[]

A binary file attached to this specified inspection.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### description?

> `optional` **description**: `string`

A textual description of this specified inspection.

#### See

https://vocabulary.uncefact.org/description

***

### executionParty?

> `optional` **executionParty**: [`ITradeParty`](ITradeParty.md)[]

The party executing this specified inspection.

#### See

https://vocabulary.uncefact.org/executionParty

***

### executionPerson?

> `optional` **executionPerson**: [`IInspectionPerson`](IInspectionPerson.md)[]

The inspector executing this specified inspection.

#### See

https://vocabulary.uncefact.org/executionPerson

***

### identifier?

> `optional` **identifier**: `string`

The identifier of this specified inspection.

#### See

https://vocabulary.uncefact.org/identifier

***

### name?

> `optional` **name**: `string`

The name, expressed as text, for this specified inspection.

#### See

https://vocabulary.uncefact.org/name

***

### outsourcedIndicator?

> `optional` **outsourcedIndicator**: `boolean`

The indication of whether or not this specified inspection is outsourced.

#### See

https://vocabulary.uncefact.org/outsourcedIndicator

***

### reportedInspectionResult?

> `optional` **reportedInspectionResult**: [`IInspectionResult`](IInspectionResult.md)[]

The result reported for this specified inspection.

#### See

https://vocabulary.uncefact.org/reportedInspectionResult

***

### specifiedDocument?

> `optional` **specifiedDocument**: [`IDocument`](IDocument.md)[]

A referenced document for this specified inspection.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedInspectionEvent?

> `optional` **specifiedInspectionEvent**: [`IInspectionEvent`](IInspectionEvent.md)[]

An inspection event for this specified inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedInspectionStatus?

> `optional` **specifiedInspectionStatus**: [`IInspectionStatus`](IInspectionStatus.md)[]

The status for this specified inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionStatus

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of inspection.

#### See

https://vocabulary.uncefact.org/typeCode
