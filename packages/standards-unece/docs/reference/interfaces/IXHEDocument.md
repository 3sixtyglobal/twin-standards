# Interface: IXHEDocument

A collection of data for electronic matter that provides XHE (Exchange Header Envelope) information or evidence.

## See

https://vocabulary.uncefact.org/XHEDocument

## Extends

- `IJsonLdNodeObject`

## Indexable

\[`key`: `string`\]: `string` \| `number` \| `boolean` \| `IJsonLdContextDefinition` \| `IJsonLdNodeObject` \| `IJsonLdGraphObject` \| `object` & `object` \| `object` & `object` \| `object` & `object` \| `IJsonLdListObject` \| `IJsonLdSetObject` \| `IJsonLdNodePrimitive`[] \| `IJsonLdLanguageMap` \| `IJsonLdIndexMap` \| `IJsonLdNodeObject`[] \| `IJsonLdIdMap` \| `IJsonLdTypeMap` \| `IJsonLdContextDefinitionElement`[] \| `string`[] \| `IJsonLdJsonObject` \| `IJsonLdJsonObject`[] \| \{\[`key`: `string`\]: `string`; \} \| `null` \| `undefined`

## Properties

### @context?

> `optional` **@context**: [`UneceContextType`](../type-aliases/UneceContextType.md)

JSON-LD Context.

#### Overrides

`IJsonLdNodeObject.@context`

***

### type

> **type**: `"XHEDocument"`

JSON-LD Type.

***

### creationDateTime?

> `optional` **creationDateTime**: `string`

The date, time, date time or other date time value of the creation of this XHE document.

#### See

https://vocabulary.uncefact.org/creationDateTime

***

### identifier?

> `optional` **identifier**: `string`

The identifier for this XHE document.

#### See

https://vocabulary.uncefact.org/identifier

***

### recipientXHEParty?

> `optional` **recipientXHEParty**: [`IXHEParty`](IXHEParty.md)[]

A recipient party for this XHE document.

#### See

https://vocabulary.uncefact.org/recipientXHEParty

***

### scopeContext?

> `optional` **scopeContext**: [`IXHEContext`](IXHEContext.md)[]

A context scope for this XHE document.

#### See

https://vocabulary.uncefact.org/scopeContext

***

### senderXHEParty?

> `optional` **senderXHEParty**: [`IXHEParty`](IXHEParty.md)[]

The sender party for this XHE document.

#### See

https://vocabulary.uncefact.org/senderXHEParty

***

### testIndicator?

> `optional` **testIndicator**: `boolean`

The indication of whether or not this XHE document is a test .

#### See

https://vocabulary.uncefact.org/testIndicator

***

### uUIDId?

> `optional` **uUIDId**: `string`

The UUID (Universally Unique IDentifier) of this XHE document.

#### See

https://vocabulary.uncefact.org/uUIDId
