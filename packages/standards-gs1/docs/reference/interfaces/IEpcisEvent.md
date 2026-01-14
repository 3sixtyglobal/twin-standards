# Interface: IEpcisEvent

Base EPCIS 2.0 Event carrying shared fields across all event types.

## See

https://ref.gs1.org/epcis/Event

## Extends

- `IJsonLdNodeObject`

## Extended by

- [`IEpcisAggregationEvent`](IEpcisAggregationEvent.md)
- [`IEpcisAssociationEvent`](IEpcisAssociationEvent.md)
- [`IEpcisObjectEvent`](IEpcisObjectEvent.md)
- [`IEpcisTransactionEvent`](IEpcisTransactionEvent.md)
- [`IEpcisTransformationEvent`](IEpcisTransformationEvent.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

JSON-LD @context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `string`

Type of Event.

***

### eventID?

> `optional` **eventID**: `string`

URI identifier of a specific EPCIS event (alias of id in JSON or XML).

***

### certificationInfo?

> `optional` **certificationInfo**: `string` \| `string`[]

(Optional) CertificationDetails relevant for Objects, Places and/or
Organizations mentioned in this Event.

***

### errorDeclaration?

> `optional` **errorDeclaration**: [`IEpcisErrorDeclaration`](IEpcisErrorDeclaration.md)

Error declaration.

***

### eventTime

> **eventTime**: `string`

The date and time at which the EPCIS Capturing Applications asserts the event
occurred.

***

### eventTimeZoneOffset

> **eventTimeZoneOffset**: `string`

The time zone offset in effect at the time and place the event occurred,
expressed as an offset from UTC.

***

### recordTime?

> `optional` **recordTime**: `string`

(Optional) The date and time at which this event was recorded by an EPCIS
Repository; ignored at capture and present on query results.
