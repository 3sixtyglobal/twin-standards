# Interface: IEpcisDocument

EPCIS 2.0 capture document containing header metadata and an event list.

## See

https://ref.gs1.org/epcis/EPCISDocument

## Properties

### @context {#context}

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

The @context.

***

### id? {#id}

> `optional` **id?**: `string`

The JSON-LD document id.

***

### type {#type}

> **type**: `"EPCISDocument"`

JSON-LD Type.

***

### schemaVersion {#schemaversion}

> **schemaVersion**: `string`

Schema version.

***

### creationDate {#creationdate}

> **creationDate**: `string`

Creation Date.

***

### instanceIdentifier? {#instanceidentifier}

> `optional` **instanceIdentifier?**: `string`

(Optional) The instance identifier of an EPCISDocument.

***

### sender? {#sender}

> `optional` **sender?**: `string`

(Optional) The sender of an EPCISDocument.

***

### receiver? {#receiver}

> `optional` **receiver?**: `string`

(Optional) The intended receiver of an EPCISDocument.

***

### epcisHeader? {#epcisheader}

> `optional` **epcisHeader?**: [`IEpcisHeader`](IEpcisHeader.md)

EPCIS Header.

***

### epcisBody {#epcisbody}

> **epcisBody**: `object`

The EPCIS Body.

#### eventList

> **eventList**: [`EpcisEvents`](../type-aliases/EpcisEvents.md)[]

The list of events.
