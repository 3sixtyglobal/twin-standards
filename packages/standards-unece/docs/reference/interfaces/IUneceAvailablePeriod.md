# Interface: IUneceAvailablePeriod

A specific period of time such as the length of time between two known date/time points, from a start date onwards, or
up to an end date for which something is available.

## See

https://vocabulary.uncefact.org/AvailablePeriod

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

> **type**: `"AvailablePeriod"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

The textual description of this available period.

#### See

https://vocabulary.uncefact.org/description

***

### endDateTime?

> `optional` **endDateTime**: `string`

The date, time, date time or other date time value for the end of this available period of time.

#### See

https://vocabulary.uncefact.org/endDateTime

***

### startDateTime?

> `optional` **startDateTime**: `string`

The date, time, date time or other date time value for the start of this available period of time.

#### See

https://vocabulary.uncefact.org/startDateTime
