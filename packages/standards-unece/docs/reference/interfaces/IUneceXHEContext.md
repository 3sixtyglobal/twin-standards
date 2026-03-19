# Interface: IUneceXHEContext

A set of circumstances that form the setting for an XHE (Exchange Header Envelope) data exchange.

## See

https://vocabulary.uncefact.org/XHEContext

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"XHEContext"`

JSON-LD Type.

***

### scopeReference? {#scopereference}

> `optional` **scopeReference?**: [`IUneceXHEReference`](IUneceXHEReference.md)[]

A reference to the scope of this XHE context.

#### See

https://vocabulary.uncefact.org/scopeReference

***

### specifiedParameter? {#specifiedparameter}

> `optional` **specifiedParameter?**: [`IUneceXHEParameter`](IUneceXHEParameter.md)[]

A parameter specified for this XHE context.

#### See

https://vocabulary.uncefact.org/specifiedParameter
