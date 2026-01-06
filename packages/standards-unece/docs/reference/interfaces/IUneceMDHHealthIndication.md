# Interface: IUneceMDHHealthIndication

Information related to a specific transportation indication to be reported on a WHO MDH (Maritime Declaration of
Health).

## See

https://vocabulary.uncefact.org/MDHHealthIndication

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

> **type**: `"MDHHealthIndication"`

JSON-LD Type.

***

### appliedSanitaryMeasure?

> `optional` **appliedSanitaryMeasure**: [`IUneceSanitaryMeasure`](IUneceSanitaryMeasure.md)[]

A sanitary measure applied for this MDH health indication.

#### See

https://vocabulary.uncefact.org/appliedSanitaryMeasure

***

### description?

> `optional` **description**: `string`

A textual description of this MDH health indication.

#### See

https://vocabulary.uncefact.org/description

***

### locationId?

> `optional` **locationId**: `string`

An identifier of a location for this MDH health indication.

#### See

https://vocabulary.uncefact.org/locationId

***

### locationName?

> `optional` **locationName**: `string`

A location name, expressed as text, of a location for this MDH health indication.

#### See

https://vocabulary.uncefact.org/locationName

***

### reportedDateTime?

> `optional` **reportedDateTime**: `string`

A reported date, time, date time or other date time value for this MDH health indication.

#### See

https://vocabulary.uncefact.org/reportedDateTime

***

### reportedQuantity?

> `optional` **reportedQuantity**: [`IUneceQuantityType`](IUneceQuantityType.md)[]

A reported quantity for this MDH health indication.

#### See

https://vocabulary.uncefact.org/reportedQuantity

***

### statusIndicator?

> `optional` **statusIndicator**: `boolean`

The indication of whether or not the status of this MDH health indication is true or false.

#### See

https://vocabulary.uncefact.org/statusIndicator

***

### typeCode?

> `optional` **typeCode**: `string`

A code specifying a type of MDH health indication.

#### See

https://vocabulary.uncefact.org/typeCode
