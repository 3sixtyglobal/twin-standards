# Interface: IUnecePortMovementEvent

A movement of a vessel during a port call.

## See

https://vocabulary.uncefact.org/PortMovementEvent

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"PortMovementEvent"`

JSON-LD Type.

***

### actualOccurrenceDateTime?

> `optional` **actualOccurrenceDateTime**: `string`

An actual date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/actualOccurrenceDateTime

***

### arrivalRelatedLocation?

> `optional` **arrivalRelatedLocation**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

An arrival location related to this port movement event.

#### See

https://vocabulary.uncefact.org/arrivalRelatedLocation

***

### description?

> `optional` **description**: `string`

A textual description of this port movement event.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedOccurrenceDateTime?

> `optional` **estimatedOccurrenceDateTime**: `string`

An estimated date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/estimatedOccurrenceDateTime

***

### identifier?

> `optional` **identifier**: `string`

An identifier for this port movement event.

#### See

https://vocabulary.uncefact.org/identifier

***

### maritimeAnchorageIndicator?

> `optional` **maritimeAnchorageIndicator**: `boolean`

The indication of whether or not this port movement event involves a maritime anchorage.

#### See

https://vocabulary.uncefact.org/maritimeAnchorageIndicator

***

### pilotBoardingPlace?

> `optional` **pilotBoardingPlace**: `string`

A pilot boarding place, expressed as text, for this port movement event.

#### See

https://vocabulary.uncefact.org/pilotBoardingPlace

***

### requestedOccurrenceDateTime?

> `optional` **requestedOccurrenceDateTime**: `string`

A requested date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/requestedOccurrenceDateTime

***

### scheduledOccurrenceDateTime?

> `optional` **scheduledOccurrenceDateTime**: `string`

A scheduled date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/scheduledOccurrenceDateTime

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

The sequence number for this port movement event.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of port movement event.

#### See

https://vocabulary.uncefact.org/typeCode
