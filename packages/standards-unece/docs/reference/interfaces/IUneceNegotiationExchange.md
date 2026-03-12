# Interface: IUneceNegotiationExchange

An offer exchanged between parties for an electronic negotiation.

## See

https://vocabulary.uncefact.org/NegotiationExchange

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"NegotiationExchange"`

JSON-LD Type.

***

### protocolTypeCode? {#protocoltypecode}

> `optional` **protocolTypeCode**: `string`

The code specifying the type of the protocol for this electronic negotiation exchange, such as Alternating Offer
Protocol, Continuous Offer Protocol, Withdrawable Alternating Offer Protocol, Withdrawable Continuous Offer Protocol.

#### See

https://vocabulary.uncefact.org/protocolTypeCode

***

### responseDueDateTime? {#responseduedatetime}

> `optional` **responseDueDateTime**: `string`

The date or date time value when the response is due for this electronic negotiation exchange.

#### See

https://vocabulary.uncefact.org/responseDueDateTime

***

### sequenceNumeric? {#sequencenumeric}

> `optional` **sequenceNumeric**: `string`

The sequence number for this electronic negotiation exchange.

#### See

https://vocabulary.uncefact.org/sequenceNumeric

***

### sessionId {#sessionid}

> **sessionId**: `string` \| `IJsonLdValueObject`

The identifier of the session for this electronic negotiation exchange.

#### See

https://vocabulary.uncefact.org/sessionId

***

### specifiedContext? {#specifiedcontext}

> `optional` **specifiedContext**: [`IUneceNegotiationContext`](IUneceNegotiationContext.md)[]

A context specified for this electronic negotiation exchange.

#### See

https://vocabulary.uncefact.org/specifiedContext

***

### specifiedIssue? {#specifiedissue}

> `optional` **specifiedIssue**: [`IUneceIssue`](IUneceIssue.md)[]

A target issue specified for this electronic negotiation exchange.

#### See

https://vocabulary.uncefact.org/specifiedIssue

***

### typeCode? {#typecode}

> `optional` **typeCode**: `string`

The code specifying the type of electronic negotiation exchange, such as prerequisite, offer, suggestion or withdrawal.

#### See

https://vocabulary.uncefact.org/typeCode
