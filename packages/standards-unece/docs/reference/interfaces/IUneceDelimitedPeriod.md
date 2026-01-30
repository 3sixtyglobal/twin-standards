# Interface: IUneceDelimitedPeriod

A period of time from a start date time onwards up to an end date time.

## See

https://vocabulary.uncefact.org/DelimitedPeriod

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"DelimitedPeriod"`

JSON-LD Type.

***

### durationMeasure?

> `optional` **durationMeasure**: [`IUneceMeasureType`](IUneceMeasureType.md)[]

The measure of the length of time for this delimited period such as hours, days, weeks, months or years.

#### See

https://vocabulary.uncefact.org/durationMeasure

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time or other date time value for the end of this delimited period.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time or other date time value for the start of this delimited period.

#### See

https://vocabulary.uncefact.org/startDateTime
