# Interface: IUneceDelimitedPeriod

A period of time from a start date time onwards up to an end date time.

## See

https://vocabulary.uncefact.org/DelimitedPeriod

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"DelimitedPeriod"`

JSON-LD Type.

***

### durationMeasure? {#durationmeasure}

> `optional` **durationMeasure?**: [`IUneceMeasureType`](IUneceMeasureType.md)

The measure of the length of time for this delimited period such as hours, days, weeks, months or years.

#### See

https://vocabulary.uncefact.org/durationMeasure

***

### endDateTime? {#enddatetime}

> `optional` **endDateTime?**: `string`

The date, time, date time or other date time value for the end of this delimited period.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### startDateTime? {#startdatetime}

> `optional` **startDateTime?**: `string`

The date, time, date time or other date time value for the start of this delimited period.

#### See

https://vocabulary.uncefact.org/startDateTime
