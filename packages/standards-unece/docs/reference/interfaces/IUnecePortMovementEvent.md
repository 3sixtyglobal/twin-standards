# Interface: IUnecePortMovementEvent

A movement of a vessel during a port call.

## See

https://vocabulary.uncefact.org/PortMovementEvent

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"PortMovementEvent"`

JSON-LD Type.

***

### actualOccurrenceDateTime? {#actualoccurrencedatetime}

> `optional` **actualOccurrenceDateTime?**: `string`

An actual date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/actualOccurrenceDateTime

***

### arrivalRelatedLocation? {#arrivalrelatedlocation}

> `optional` **arrivalRelatedLocation?**: [`IUneceLogisticsLocation`](IUneceLogisticsLocation.md)[]

An arrival location related to this port movement event.

#### See

https://vocabulary.uncefact.org/arrivalRelatedLocation

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of this port movement event.

#### See

https://vocabulary.uncefact.org/description

***

### estimatedOccurrenceDateTime? {#estimatedoccurrencedatetime}

> `optional` **estimatedOccurrenceDateTime?**: `string`

An estimated date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/estimatedOccurrenceDateTime

***

### identifier? {#identifier}

> `optional` **identifier?**: `string` \| `IJsonLdValueObject`

An identifier for this port movement event.

#### See

https://vocabulary.uncefact.org/identifier

***

### maritimeAnchorageIndicator? {#maritimeanchorageindicator}

> `optional` **maritimeAnchorageIndicator?**: `boolean`

The indication of whether or not this port movement event involves a maritime anchorage.

#### See

https://vocabulary.uncefact.org/maritimeAnchorageIndicator

***

### pilotBoardingPlace? {#pilotboardingplace}

> `optional` **pilotBoardingPlace?**: `string`

A pilot boarding place, expressed as text, for this port movement event.

#### See

https://vocabulary.uncefact.org/pilotBoardingPlace

***

### requestedOccurrenceDateTime? {#requestedoccurrencedatetime}

> `optional` **requestedOccurrenceDateTime?**: `string`

A requested date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/requestedOccurrenceDateTime

***

### scheduledOccurrenceDateTime? {#scheduledoccurrencedatetime}

> `optional` **scheduledOccurrenceDateTime?**: `string`

A scheduled date, time, date time, or other date time value of the occurrence of this port movement event.

#### See

https://vocabulary.uncefact.org/scheduledOccurrenceDateTime

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric?**: `string`

The sequence number for this port movement event.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

A code specifying a type of port movement event.

#### See

https://vocabulary.uncefact.org/typeCode
