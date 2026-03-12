# Interface: IUneceSpecifiedPeriod

A specified period of time.

## See

https://vocabulary.uncefact.org/SpecifiedPeriod

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"SpecifiedPeriod"`

JSON-LD Type.

***

### completeDateTime? {#completedatetime}

> `optional` **completeDateTime**: `string`

The date, time, date time or other date time value for a complete specified period of time expressed as a specific
month, a specific week, etc.

#### See

https://vocabulary.uncefact.org/completeDateTime

***

### continuousIndicator? {#continuousindicator}

> `optional` **continuousIndicator**: `boolean`

The indication of whether or not this specified period is continuous.

#### See

https://vocabulary.uncefact.org/continuousIndicator

***

### dayQuantity? {#dayquantity}

> `optional` **dayQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of days in this specified period.

#### See

https://vocabulary.uncefact.org/dayQuantity

***

### description? {#description}

> `optional` **description**: `string`

A textual description of this specified period of time.

#### See

https://vocabulary.uncefact.org/description

***

### duration? {#duration}

> `optional` **duration**: `string`

A duration, expressed as text, for this specified period.

#### See

https://vocabulary.uncefact.org/duration

***

### durationMeasure? {#durationmeasure}

> `optional` **durationMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the length of time for this specified time period such as hours, days, weeks, months, years.

#### See

https://vocabulary.uncefact.org/durationMeasure

***

### endDateTime? {#enddatetime}

> `optional` **endDateTime**: `string`

The date, time, date time or other date time value for the end of this specified period of time.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### endDayOfWeekCode? {#enddayofweekcode}

> `optional` **endDayOfWeekCode**: `string`

The code specifying the end day of the week for this specified period.

#### See

https://vocabulary.uncefact.org/endDayOfWeekCode

***

### identifier? {#identifier}

> `optional` **identifier**: `string` \| `IJsonLdValueObject`

The unique identifier of this specified period.

#### See

https://vocabulary.uncefact.org/identifier

***

### inclusiveIndicator? {#inclusiveindicator}

> `optional` **inclusiveIndicator**: `boolean`

The indication of whether or not the start and end dates are included in this specified period.

#### See

https://vocabulary.uncefact.org/inclusiveIndicator

***

### maximumDurationMeasure? {#maximumdurationmeasure}

> `optional` **maximumDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)

The measure of the maximum length of time for this specified period, such as hours, days, weeks, months, years.

#### See

https://vocabulary.uncefact.org/maximumDurationMeasure

***

### minimumDurationMeasure? {#minimumdurationmeasure}

> `optional` **minimumDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)

The measure of the minimum length of time for this specified period, such as hours, days, weeks, months, years.

#### See

https://vocabulary.uncefact.org/minimumDurationMeasure

***

### name? {#name}

> `optional` **name**: `string`

A name, expressed as text, of this specified period.

#### See

https://vocabulary.uncefact.org/name

***

### nightQuantity? {#nightquantity}

> `optional` **nightQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)

The number of nights in this specified period.

#### See

https://vocabulary.uncefact.org/nightQuantity

***

### openIndicator? {#openindicator}

> `optional` **openIndicator**: `boolean`

The indication of whether or not an entity is open during this specified period.

#### See

https://vocabulary.uncefact.org/openIndicator

***

### purposeCode? {#purposecode}

> `optional` **purposeCode**: `string`

The code specifying the purpose of this specified period.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### seasonCode? {#seasoncode}

> `optional` **seasonCode**: `string`

The code specifying the season for this specified period.

#### See

https://vocabulary.uncefact.org/seasonCode

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

A sequence number for this specified period.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### startDateFlexibilityCode? {#startdateflexibilitycode}

> `optional` **startDateFlexibilityCode**: `string`

The code specifying the flexibility of the start date of this specified period.

#### See

https://vocabulary.uncefact.org/startDateFlexibilityCode

***

### startDateTime? {#startdatetime}

> `optional` **startDateTime**: `string`

The date, time, date time or other date time value for the start of this specified period of time.

#### See

https://vocabulary.uncefact.org/startDateTime

***

### startDayOfWeekCode? {#startdayofweekcode}

> `optional` **startDayOfWeekCode**: `string`

The code specifying the start day of the week for this specified period.

#### See

https://vocabulary.uncefact.org/startDayOfWeekCode

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of specified period.

#### See

https://vocabulary.uncefact.org/typeCode
