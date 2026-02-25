# Interface: IUneceTTTransformationEvent

Information about an event that captures the relationship between one or more physical or digital objects identified by
identifiers, such as an EPC (Electronic Product Code) or EPC class, that are fully or partially consumed as inputs or as
outputs.

## See

https://vocabulary.uncefact.org/TTTransformationEvent

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"TTTransformationEvent"`

JSON-LD Type.

***

### businessRelatedLocation?

> `optional` **businessRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The business location related to this TT transformation event.

#### See

https://vocabulary.uncefact.org/businessRelatedLocation

***

### businessStepCode?

> `optional` **businessStepCode**: `string`

The code specifying the business step for this TT transformation event.

#### See

https://vocabulary.uncefact.org/businessStepCode

***

### destinationRelatedParty?

> `optional` **destinationRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)[]

A destination related party for this TT transformation event.

#### See

https://vocabulary.uncefact.org/destinationRelatedParty

***

### dispositionCode?

> `optional` **dispositionCode**: `string`

The code specifying the disposition related to this TT transformation event.

#### See

https://vocabulary.uncefact.org/dispositionCode

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this TT transformation event.

#### See

https://vocabulary.uncefact.org/identifier

***

### inputObjectInstanceId?

> `optional` **inputObjectInstanceId**: `string`

An instance identifier for an input object of this TT transformation event.

#### See

https://vocabulary.uncefact.org/inputObjectInstanceId

***

### inputQuantitySpecifiedEventElement?

> `optional` **inputQuantitySpecifiedEventElement**: [`IUneceEventElement`](IUneceEventElement.md)[]

A quantity event element specified for an input of this TT transformation event.

#### See

https://vocabulary.uncefact.org/inputQuantitySpecifiedEventElement

***

### occurrenceDateTime

> **occurrenceDateTime**: `string`

The date, time, date time, or other date time value at which this TT transformation event occurred.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### outputObjectInstanceId?

> `optional` **outputObjectInstanceId**: `string`

An instance identifier for an output object of this TT transformation event.

#### See

https://vocabulary.uncefact.org/outputObjectInstanceId

***

### outputQuantitySpecifiedEventElement?

> `optional` **outputQuantitySpecifiedEventElement**: [`IUneceEventElement`](IUneceEventElement.md)[]

A quantity event element specified for an output of this TT transformation event.

#### See

https://vocabulary.uncefact.org/outputQuantitySpecifiedEventElement

***

### readPointRelatedLocation?

> `optional` **readPointRelatedLocation**: [`IUneceTTLocation`](IUneceTTLocation.md)

The read point related location of this TT transformation event.

#### See

https://vocabulary.uncefact.org/readPointRelatedLocation

***

### recordedDateTime

> **recordedDateTime**: `string`

The date, time, date time, or other date time value at which this TT transformation event was recorded.

#### See

https://vocabulary.uncefact.org/recordedDateTime

***

### relatedCertification?

> `optional` **relatedCertification**: [`IUneceSpecifiedCertification`](IUneceSpecifiedCertification.md)[]

A certification related to this TT transformation event.

#### See

https://vocabulary.uncefact.org/relatedCertification

***

### sourceRelatedParty?

> `optional` **sourceRelatedParty**: [`IUneceTTParty`](IUneceTTParty.md)[]

A source related party for this TT transformation event.

#### See

https://vocabulary.uncefact.org/sourceRelatedParty

***

### specifiedError?

> `optional` **specifiedError**: [`IUneceError`](IUneceError.md)[]

A declared error specified for this TT transformation event.

#### See

https://vocabulary.uncefact.org/specifiedError

***

### specifiedTradeTransaction?

> `optional` **specifiedTradeTransaction**: [`IUneceTTTradeTransaction`](IUneceTTTradeTransaction.md)[]

A trade transaction specified for this TT transformation event.

#### See

https://vocabulary.uncefact.org/specifiedTradeTransaction

***

### transformationId?

> `optional` **transformationId**: `string`

The transformation identifier for this TT transformation event.

#### See

https://vocabulary.uncefact.org/transformationId
