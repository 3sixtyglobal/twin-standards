# Interface: IUneceSpecifiedPeriod

A specified period of time.

## See

https://vocabulary.uncefact.org/SpecifiedPeriod

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"SpecifiedPeriod"`

JSON-LD Type.

***

### completeDateTime?

> `optional` **completeDateTime**: `string`

The date, time, date time or other date time value for a complete specified period of time expressed as a specific
month, a specific week, etc.

#### See

https://vocabulary.uncefact.org/completeDateTime

***

### continuousIndicator?

> `optional` **continuousIndicator**: `boolean`

The indication of whether or not this specified period is continuous.

#### See

https://vocabulary.uncefact.org/continuousIndicator

***

### dayQuantity?

> `optional` **dayQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of days in this specified period.

#### See

https://vocabulary.uncefact.org/dayQuantity

***

### description?

> `optional` **description**: `string`

A textual description of this specified period of time.

#### See

https://vocabulary.uncefact.org/description

***

### duration?

> `optional` **duration**: `string`

A duration, expressed as text, for this specified period.

#### See

https://vocabulary.uncefact.org/duration

***

### durationMeasure?

> `optional` **durationMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

A measure of the length of time for this specified time period such as hours, days, weeks, months, years.

#### See

https://vocabulary.uncefact.org/durationMeasure

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time or other date time value for the end of this specified period of time.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### endDayOfWeekCode?

> `optional` **endDayOfWeekCode**: `string`

The code specifying the end day of the week for this specified period.

#### See

https://vocabulary.uncefact.org/endDayOfWeekCode

***

### identifier?

> `optional` **identifier**: `string`

The unique identifier of this specified period.

#### See

https://vocabulary.uncefact.org/identifier

***

### inclusiveIndicator?

> `optional` **inclusiveIndicator**: `boolean`

The indication of whether or not the start and end dates are included in this specified period.

#### See

https://vocabulary.uncefact.org/inclusiveIndicator

***

### maximumDurationMeasure?

> `optional` **maximumDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the maximum length of time for this specified period, such as hours, days, weeks, months, years.

#### See

https://vocabulary.uncefact.org/maximumDurationMeasure

***

### minimumDurationMeasure?

> `optional` **minimumDurationMeasure**: [`IUneceDurationUnitMeasureType`](IUneceDurationUnitMeasureType.md)[]

The measure of the minimum length of time for this specified period, such as hours, days, weeks, months, years.

#### See

https://vocabulary.uncefact.org/minimumDurationMeasure

***

### name?

> `optional` **name**: `string`

A name, expressed as text, of this specified period.

#### See

https://vocabulary.uncefact.org/name

***

### nightQuantity?

> `optional` **nightQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

The number of nights in this specified period.

#### See

https://vocabulary.uncefact.org/nightQuantity

***

### openIndicator?

> `optional` **openIndicator**: `boolean`

The indication of whether or not an entity is open during this specified period.

#### See

https://vocabulary.uncefact.org/openIndicator

***

### purposeCode?

> `optional` **purposeCode**: `string`

The code specifying the purpose of this specified period.

#### See

https://vocabulary.uncefact.org/purposeCode

***

### seasonCode?

> `optional` **seasonCode**: `string`

The code specifying the season for this specified period.

#### See

https://vocabulary.uncefact.org/seasonCode

***

### sequenceNumeric?

> `optional` **sequenceNumeric**: `string`

A sequence number for this specified period.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### startDateFlexibilityCode?

> `optional` **startDateFlexibilityCode**: `string`

The code specifying the flexibility of the start date of this specified period.

#### See

https://vocabulary.uncefact.org/startDateFlexibilityCode

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time or other date time value for the start of this specified period of time.

#### See

https://vocabulary.uncefact.org/startDateTime

***

### startDayOfWeekCode?

> `optional` **startDayOfWeekCode**: `string`

The code specifying the start day of the week for this specified period.

#### See

https://vocabulary.uncefact.org/startDayOfWeekCode

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of specified period.

#### See

https://vocabulary.uncefact.org/typeCode
