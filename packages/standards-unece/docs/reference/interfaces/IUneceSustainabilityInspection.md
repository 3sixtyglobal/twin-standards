# Interface: IUneceSustainabilityInspection

The process of performing documented checks of sustainability characteristics, with a focus on discovering deviations,
related to documented sustainability requirements.

## See

https://vocabulary.uncefact.org/SustainabilityInspection

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SustainabilityInspection"`

JSON-LD Type.

***

### applicableInspectionResult? {#applicableinspectionresult}

> `optional` **applicableInspectionResult**: [`IUneceInspectionResult`](IUneceInspectionResult.md)

The specified inspection result applicable to this sustainability inspection.

#### See

https://vocabulary.uncefact.org/applicableInspectionResult

***

### applicableStandard? {#applicablestandard}

> `optional` **applicableStandard**: [`IUneceStandard`](IUneceStandard.md)[]

A referenced standard applicable to this sustainability inspection.

#### See

https://vocabulary.uncefact.org/applicableStandard

***

### applicableSustainabilityCharacteristic? {#applicablesustainabilitycharacteristic}

> `optional` **applicableSustainabilityCharacteristic**: [`IUneceSustainabilityCharacteristic`](IUneceSustainabilityCharacteristic.md)[]

A characteristic applicable to this sustainability inspection.

#### See

https://vocabulary.uncefact.org/applicableSustainabilityCharacteristic

***

### attachedBinaryFile? {#attachedbinaryfile}

> `optional` **attachedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file attached for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/attachedBinaryFile

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/description

***

### executionParty? {#executionparty}

> `optional` **executionParty**: [`IUneceTradeParty`](IUneceTradeParty.md)

The party responsible for the execution of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/executionParty

***

### executionPerson? {#executionperson}

> `optional` **executionPerson**: [`IUneceInspectionPerson`](IUneceInspectionPerson.md)

The inspector responsible for the execution of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/executionPerson

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this sustainability inspection.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/name

***

### outsourcedIndicator? {#outsourcedindicator}

> `optional` **outsourcedIndicator**: `boolean`

The indication of whether or not this sustainability inspection is outsourced.

#### See

https://vocabulary.uncefact.org/outsourcedIndicator

***

### specifiedDocument? {#specifieddocument}

> `optional` **specifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A referenced document specified for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/specifiedDocument

***

### specifiedInspectionEvent? {#specifiedinspectionevent}

> `optional` **specifiedInspectionEvent**: [`IUneceInspectionEvent`](IUneceInspectionEvent.md)[]

A specified inspection event for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionEvent

***

### specifiedInspectionStatus? {#specifiedinspectionstatus}

> `optional` **specifiedInspectionStatus**: [`IUneceInspectionStatus`](IUneceInspectionStatus.md)

The inspection status specified for this sustainability inspection.

#### See

https://vocabulary.uncefact.org/specifiedInspectionStatus

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of sustainability inspection.

#### See

https://vocabulary.uncefact.org/typeCode
