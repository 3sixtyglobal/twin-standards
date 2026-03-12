# Interface: IEpcisEvent

Base EPCIS 2.0 Event carrying shared fields across all event types.

## See

https://ref.gs1.org/epcis/Event

## Extended by

- [`IEpcisAggregationEvent`](IEpcisAggregationEvent.md)
- [`IEpcisAssociationEvent`](IEpcisAssociationEvent.md)
- [`IEpcisObjectEvent`](IEpcisObjectEvent.md)
- [`IEpcisTransactionEvent`](IEpcisTransactionEvent.md)
- [`IEpcisTransformationEvent`](IEpcisTransformationEvent.md)

## Properties

### @context {#context}

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

JSON-LD @context.

***

### type {#type}

> **type**: `string`

Type of Event.

***

### eventID? {#eventid}

> `optional` **eventID**: `string`

URI identifier of a specific EPCIS event (alias of id in JSON or XML).

***

### certificationInfo? {#certificationinfo}

> `optional` **certificationInfo**: `string` \| `string`[]

(Optional) CertificationDetails relevant for Objects, Places and/or
Organizations mentioned in this Event.

***

### errorDeclaration? {#errordeclaration}

> `optional` **errorDeclaration**: [`IEpcisErrorDeclaration`](IEpcisErrorDeclaration.md)

Error declaration.

***

### eventTime {#eventtime}

> **eventTime**: `string`

The date and time at which the EPCIS Capturing Applications asserts the event
occurred.

***

### eventTimeZoneOffset {#eventtimezoneoffset}

> **eventTimeZoneOffset**: `string`

The time zone offset in effect at the time and place the event occurred,
expressed as an offset from UTC.

***

### recordTime? {#recordtime}

> `optional` **recordTime**: `string`

(Optional) The date and time at which this event was recorded by an EPCIS
Repository; ignored at capture and present on query results.
