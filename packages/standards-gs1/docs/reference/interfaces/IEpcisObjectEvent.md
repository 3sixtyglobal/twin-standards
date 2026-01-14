# Interface: IEpcisObjectEvent

EPCIS 2.0 ObjectEvent describing one or more objects (instance- or class-level)
observed at a point in the business process.

## See

https://ref.gs1.org/epcis/ObjectEvent

## Extends

- [`IEpcisEvent`](IEpcisEvent.md)

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `string`[] \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

JSON-LD @context.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`@context`](IEpcisEvent.md#context)

***

### eventID?

> `optional` **eventID**: `string`

URI identifier of a specific EPCIS event (alias of id in JSON or XML).

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventID`](IEpcisEvent.md#eventid)

***

### certificationInfo?

> `optional` **certificationInfo**: `string` \| `string`[]

(Optional) CertificationDetails relevant for Objects, Places and/or
Organizations mentioned in this Event.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`certificationInfo`](IEpcisEvent.md#certificationinfo)

***

### errorDeclaration?

> `optional` **errorDeclaration**: [`IEpcisErrorDeclaration`](IEpcisErrorDeclaration.md)

Error declaration.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`errorDeclaration`](IEpcisEvent.md#errordeclaration)

***

### eventTime

> **eventTime**: `string`

The date and time at which the EPCIS Capturing Applications asserts the event
occurred.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventTime`](IEpcisEvent.md#eventtime)

***

### eventTimeZoneOffset

> **eventTimeZoneOffset**: `string`

The time zone offset in effect at the time and place the event occurred,
expressed as an offset from UTC.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`eventTimeZoneOffset`](IEpcisEvent.md#eventtimezoneoffset)

***

### recordTime?

> `optional` **recordTime**: `string`

(Optional) The date and time at which this event was recorded by an EPCIS
Repository; ignored at capture and present on query results.

#### Inherited from

[`IEpcisEvent`](IEpcisEvent.md).[`recordTime`](IEpcisEvent.md#recordtime)

***

### type

> **type**: `"ObjectEvent"`

Fixed to ObjectEvent.

#### Overrides

[`IEpcisEvent`](IEpcisEvent.md).[`type`](IEpcisEvent.md#type)

***

### epcList?

> `optional` **epcList**: `string`[]

(Optional) Unordered list of one or more EPCs naming specific objects to which
the event pertained.

***

### quantityList?

> `optional` **quantityList**: [`IEpcisQuantity`](IEpcisQuantity.md)[]

Unordered list of one or more QuantityElements identifying contained objects at
the class level.

***

### action

> **action**: [`EpcisActionTypes`](../type-aliases/EpcisActionTypes.md)

How this event relates to the lifecycle of the EPCs named in this event.

***

### bizStep?

> `optional` **bizStep**: `string`

(Optional) The business step of which this event was a part.

***

### disposition?

> `optional` **disposition**: `string`

(Optional) The business condition of the objects associated with the EPCs,
presumed to hold true until contradicted by a subsequent event.

***

### persistentDisposition?

> `optional` **persistentDisposition**: [`IEpcisPersistentDisposition`](IEpcisPersistentDisposition.md)

Persistent disposition.

***

### readPoint?

> `optional` **readPoint**: [`IEpcisLocation`](IEpcisLocation.md)

(Optional) The read point at which the event took place.

***

### bizLocation?

> `optional` **bizLocation**: [`IEpcisLocation`](IEpcisLocation.md)

(Optional) The business location where the objects associated with the EPCs may
be found, until contradicted by a subsequent event.

***

### bizTransactionList?

> `optional` **bizTransactionList**: [`IEpcisBizTransaction`](IEpcisBizTransaction.md)[]

(Optional) Unordered list of business transactions that define the context of
this event.

***

### sourceList?

> `optional` **sourceList**: [`IEpcisSource`](IEpcisSource.md)[]

(Optional) Unordered list of Source elements that provide context about the
originating endpoint of a business transfer of which this event is a part.

***

### destinationList?

> `optional` **destinationList**: [`IEpcisDestination`](IEpcisDestination.md)[]

(Optional) Unordered list of Destination elements that provide context about the
terminating endpoint of a business transfer of which this event is a part.

***

### sensorElementList?

> `optional` **sensorElementList**: [`IEpcisSensorElement`](IEpcisSensorElement.md)[]

(Optional) Connects event to one or more SensorElements.

***

### ilmd?

> `optional` **ilmd**: [`IEpcisIlmd`](IEpcisIlmd.md)

(Optional) Instance/Lot master data that describes the objects created during
this event.
