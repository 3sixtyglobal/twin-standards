# Interface: IUneceObservation

A specified act or instance of viewing or noting a fact or occurrence for some scientific or other special purpose.

## See

https://vocabulary.uncefact.org/Observation

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Observation"`

JSON-LD Type.

***

### applicableNote? {#applicablenote}

> `optional` **applicableNote**: [`IUneceNote`](IUneceNote.md)[]

A note providing information applicable to this specified observation.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### description? {#description}

> `optional` **description**: `string`

The textual description for this specified observation.

#### See

https://vocabulary.uncefact.org/description

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this specified observation.

#### See

https://vocabulary.uncefact.org/identifier

***

### relatedBinaryFile? {#relatedbinaryfile}

> `optional` **relatedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file related to this specified observation.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile
