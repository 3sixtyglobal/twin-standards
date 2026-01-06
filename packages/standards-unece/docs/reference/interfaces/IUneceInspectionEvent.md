# Interface: IUneceInspectionEvent

A significant occurrence or happening related to an inspection.

## See

https://vocabulary.uncefact.org/InspectionEvent

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

> **type**: `"InspectionEvent"`

JSON-LD Type.

***

### description?

> `optional` **description**: `string`

A textual description of the inspection for this event.

#### See

https://vocabulary.uncefact.org/description

***

### occurrenceDateTime?

> `optional` **occurrenceDateTime**: `string`

The date, time, date time, or other date time value of the occurrence of this inspection event.

#### See

https://vocabulary.uncefact.org/occurrenceDateTime

***

### occurrenceLocation?

> `optional` **occurrenceLocation**: [`IUneceLocation`](IUneceLocation.md)[]

The referenced location where this inspection event will occur or has occurred.

#### See

https://vocabulary.uncefact.org/occurrenceLocation

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type of inspection for this event.

#### See

https://vocabulary.uncefact.org/typeCode
