# Interface: IUneceSpecifiedInspection

The process of performing documented checks, such as on materials or processes, with a focus on discovering deviations,
errors or faults related to documented requirements.

## See

https://vocabulary.uncefact.org/SpecifiedInspection

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedInspection"`

JSON-LD Type.

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile?**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached to this specified inspection.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this specified inspection.

#### See

https://vocabulary.uncefact.org/description

***

### executionParty? {#executionparty}

> `optional` **executionParty?**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party executing this specified inspection.

#### See

https://vocabulary.uncefact.org/executionParty

***

### executionPerson? {#executionperson}

> `optional` **executionPerson?**: [`IUneceInspectionPerson`](IUneceInspectionPerson.md)

The inspector executing this specified inspection.

#### See

https://vocabulary.uncefact.org/executionPerson

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

The identifier of this specified inspection.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name?**: `string`

The name, expressed as text, for this specified inspection.

#### See

https://vocabulary.uncefact.org/name

***

### outsourcedIndicator? {#outsourcedindicator}

> `optional` **outsourcedIndicator?**: `boolean`

The indication of whether or not this specified inspection is outsourced.

#### See

https://vocabulary.uncefact.org/outsourcedIndicator

***

### reportedInspectionResult? {#reportedinspectionresult}

> `optional` **reportedInspectionResult?**: [`IUneceInspectionResult`](IUneceInspectionResult.md)

The result reported for this specified inspection.

#### See

https://vocabulary.uncefact.org/reportedInspectionResult

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument?**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document for this specified inspection.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedInspectionEvent? {#specifiedinspectionevent}

> `optional` **specifiedInspectionEvent?**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

An inspection event for this specified inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedInspectionStatus? {#specifiedinspectionstatus}

> `optional` **specifiedInspectionStatus?**: [`IUneceInspectionStatus`](IUneceInspectionStatus.md)

The status for this specified inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionStatus

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of inspection.

#### See

https://vocabulary.uncefact.org/typeCode
