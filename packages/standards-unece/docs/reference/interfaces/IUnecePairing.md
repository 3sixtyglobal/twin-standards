# Interface: IUnecePairing

The process by which two potentially communicating entities are linked.

## See

https://vocabulary.uncefact.org/Pairing

## Properties

### @context? {#context}

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"Pairing"`

JSON-LD Type.

***

### matchingEvent? {#matchingevent}

> `optional` **matchingEvent**: [`IUneceCommunicationEvent`](IUneceCommunicationEvent.md)[]

A matching event for this communication pairing.

#### See

https://vocabulary.uncefact.org/matchingEvent

***

### methodCode? {#methodcode}

> `optional` **methodCode**: `string`

The code specifying the method of this communication pairing.

#### See

https://vocabulary.uncefact.org/methodCode

***

### pairedIndicator? {#pairedindicator}

> `optional` **pairedIndicator**: `boolean`

The indication of whether or not the entity is paired in this communication pairing.

#### See

https://vocabulary.uncefact.org/pairedIndicator

***

### targetEntityId? {#targetentityid}

> `optional` **targetEntityId**: `string` \| `IJsonLdValueObject`

The identifier of the target entity for this communication pairing.

#### See

https://vocabulary.uncefact.org/targetEntityId
