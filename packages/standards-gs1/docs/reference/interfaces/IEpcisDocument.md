# Interface: IEpcisDocument

EPCIS 2.0 capture document containing header metadata and an event list.

## See

https://ref.gs1.org/epcis/EPCISDocument

## Properties

### @context

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

The @context.

***

### id?

> `optional` **id**: `string`

The JSON-LD document id.

***

### type

> **type**: `"EPCISDocument"`

JSON-LD Type.

***

### schemaVersion

> **schemaVersion**: `string`

Schema version.

***

### creationDate

> **creationDate**: `string`

Creation Date.

***

### instanceIdentifier?

> `optional` **instanceIdentifier**: `string`

(Optional) The instance identifier of an EPCISDocument.

***

### sender?

> `optional` **sender**: `string`

(Optional) The sender of an EPCISDocument.

***

### receiver?

> `optional` **receiver**: `string`

(Optional) The intended receiver of an EPCISDocument.

***

### epcisHeader?

> `optional` **epcisHeader**: [`IEpcisHeader`](IEpcisHeader.md)

EPCIS Header.

***

### epcisBody

> **epcisBody**: `object`

The EPCIS Body.

#### eventList

> **eventList**: [`EpcisEvents`](../type-aliases/EpcisEvents.md)[]

The list of events.
