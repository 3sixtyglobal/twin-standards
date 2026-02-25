# Interface: IUnecePayload

Transmitted data that is included in an XHE (Exchange Header Envelope).

## See

https://vocabulary.uncefact.org/Payload

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"Payload"`

JSON-LD Type.

***

### includedPayloadInstance

> **includedPayloadInstance**: [`IUnecePayloadInstance`](IUnecePayloadInstance.md)[]

A payload instance included in this XHE payload.

#### See

https://vocabulary.uncefact.org/includedPayloadInstance
