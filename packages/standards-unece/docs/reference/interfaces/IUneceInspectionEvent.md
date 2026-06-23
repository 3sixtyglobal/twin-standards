# Interface: IUneceInspectionEvent

A significant occurrence or happening related to an inspection.

## See

https://vocabulary.uncefact.org/InspectionEvent

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"InspectionEvent"`

JSON-LD Type.

***

### description? {#description}

> `optional` **description?**: `string`

A textual description of the inspection for this event.

#### See

https://vocabulary.uncefact.org/description

***

### occurrenceDateTime {#occurrencedatetime}

> **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of the occurrence of this inspection event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceLocation {#occurrencelocation}

> **occurrenceLocation**: [`IUneceLocation`](IUneceLocation.md)

The referenced location where this inspection event will occur or has occurred.

#### See

https://vocabulary.uncefact.org/occurrenceLocation

***

### typeCode? {#typecode}

> `optional` **typeCode?**: `string`

The code specifying the type of inspection for this event.

#### See

https://vocabulary.uncefact.org/typeCode
