# Interface: IUneceXHEDocument

A collection of data for electronic matter that provides XHE (Exchange Header Envelope) information or evidence.

## See

https://vocabulary.uncefact.org/XHEDocument

## Properties

### @context? {#context}

> `optional` **@context?**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

***

### type {#type}

> **type**: `"XHEDocument"`

JSON-LD Type.

***

### creationDateTime {#creationdatetime}

> **creationDateTime**: `string`

The date, time, date time or other date time value of the creation of this XHE document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### identifier {#identifier}

> **identifier**: `string` \| `IJsonLdValueObject`

The identifier for this XHE document.

#### See

https://vocabulary.uncefact.org/identifier

***

### recipientXHEParty {#recipientxheparty}

> **recipientXHEParty**: [`IUneceXHEParty`](IUneceXHEParty.md)[]

A recipient party for this XHE document.

#### See

https://vocabulary.uncefact.org/recipientXHEParty

***

### scopeContext? {#scopecontext}

> `optional` **scopeContext?**: [`IUneceXHEContext`](IUneceXHEContext.md)[]

A context scope for this XHE document.

#### See

https://vocabulary.uncefact.org/scopeContext

***

### senderXHEParty? {#senderxheparty}

> `optional` **senderXHEParty?**: [`IUneceXHEParty`](IUneceXHEParty.md)

The sender party for this XHE document.

#### See

https://vocabulary.uncefact.org/senderXHEParty

***

### testIndicator? {#testindicator}

> `optional` **testIndicator?**: `boolean`

The indication of whether or not this XHE document is a test .

#### See

https://vocabulary.uncefact.org/testIndicator

***

### uUIDId? {#uuidid}

> `optional` **uUIDId?**: `string` \| `IJsonLdValueObject`

The UUID (Universally Unique IDentifier) of this XHE document.

#### See

https://vocabulary.uncefact.org/uUIDId
