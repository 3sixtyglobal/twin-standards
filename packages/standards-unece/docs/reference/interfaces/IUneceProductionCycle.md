# Interface: IUneceProductionCycle

A series of activities associated with the processing of a product.

## See

https://vocabulary.uncefact.org/ProductionCycle

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"ProductionCycle"`

JSON-LD Type.

***

### applicableProductionProcess? {#applicableproductionprocess}

> `optional` **applicableProductionProcess**: [`IUneceProductionProcess`](IUneceProductionProcess.md)[]

A process applicable to this specified production cycle.

#### See

https://vocabulary.uncefact.org/applicableProductionProcess

***

### endDateTime? {#enddatetime}

> `optional` **endDateTime**: `string`

The date, time, date time, or other date time value of the end of this specified production cycle.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

An identifier of this specified production cycle.

#### See

https://vocabulary.uncefact.org/identifier

***

### name? {#name}

> `optional` **name**: `string`

The name, expressed as text, of this specified production cycle.

#### See

https://vocabulary.uncefact.org/name

***

### processSpecifiedDocument? {#processspecifieddocument}

> `optional` **processSpecifiedDocument**: [`IUneceDocument`](IUneceDocument.md)[]

A process document referenced for this specified production cycle.

#### See

https://vocabulary.uncefact.org/processSpecifiedDocument

***

### productionYearDateTime? {#productionyeardatetime}

> `optional` **productionYearDateTime**: `string`

The production year for this specified production cycle.

#### See

https://vocabulary.uncefact.org/productionYearDateTime

***

### relatedBinaryFile? {#relatedbinaryfile}

> `optional` **relatedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file related to this specified production cycle.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

The sequence number for this specified production cycle.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### startDateTime? {#startdatetime}

> `optional` **startDateTime**: `string`

The date, time, date time, or other date time value of the start of this specified production cycle.

#### See

https://vocabulary.uncefact.org/startDateTime
