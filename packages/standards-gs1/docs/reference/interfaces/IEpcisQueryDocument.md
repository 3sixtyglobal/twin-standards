# Interface: IEpcisQueryDocument

EPCIS 2.0 QueryDocument used to submit queries to an EPCIS repository.

## See

https://ref.gs1.org/epcis/EPCISQueryDocument

## Properties

### @context {#context}

> **@context**: [`EpcisContextType`](../type-aliases/EpcisContextType.md)

The @context.

***

### id? {#id}

> `optional` **id**: `string`

The JSON-LD document id.

***

### type {#type}

> **type**: `"EPCISQueryDocument"`

JSON-LD Type.

***

### schemaVersion? {#schemaversion}

> `optional` **schemaVersion**: `string`

Schema version.

***

### creationDate? {#creationdate}

> `optional` **creationDate**: `string`

Creation Date.

***

### epcisBody {#epcisbody}

> **epcisBody**: [`IEpcisQueryDocumentBody`](IEpcisQueryDocumentBody.md)

The EPCIS Body.
