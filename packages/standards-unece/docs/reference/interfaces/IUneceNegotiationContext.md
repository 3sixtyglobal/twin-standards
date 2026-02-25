# Interface: IUneceNegotiationContext

The protocol and setting of a negotiation.

## See

https://vocabulary.uncefact.org/NegotiationContext

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type

> **type**: `"NegotiationContext"`

JSON-LD Type.

***

### identifier?

> `optional` **identifier**: `string`

The identifier of the negotiation context.

#### See

https://vocabulary.uncefact.org/identifier

***

### typeCode?

> `optional` **typeCode**: `string`

The code specifying the type for this negotiation context, such as chain negotiation, item negotiation or counterpart
negotiation.

#### See

https://vocabulary.uncefact.org/typeCode
