# Interface: IUneceObservation

A specified act or instance of viewing or noting a fact or occurrence for some scientific or other special purpose.

## See

https://vocabulary.uncefact.org/Observation

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Observation"`

JSON-LD Type.

***

### applicableNote?

> `optional` **applicableNote**: [`IUneceNote`](IUneceNote.md)[]

A note providing information applicable to this specified observation.

#### See

https://vocabulary.uncefact.org/applicableNote

***

### description?

> `optional` **description**: `string`

The textual description for this specified observation.

#### See

https://vocabulary.uncefact.org/description

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this specified observation.

#### See

https://vocabulary.uncefact.org/identifier

***

### relatedBinaryFile?

> `optional` **relatedBinaryFile**: [`IUneceBinaryFile`](IUneceBinaryFile.md)[]

A binary file related to this specified observation.

#### See

https://vocabulary.uncefact.org/relatedBinaryFile
