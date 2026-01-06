# Interface: IUnecePairing

The process by which two potentially communicating entities are linked.

## See

https://vocabulary.uncefact.org/Pairing

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

> **type**: `"Pairing"`

JSON-LD Type.

***

### matchingEvent?

> `optional` **matchingEvent**: [`IUneceCommunicationEvent`](IUneceCommunicationEvent.md)[]

A matching event for this communication pairing.

#### See

https://vocabulary.uncefact.org/matchingEvent

***

### methodCode?

> `optional` **methodCode**: `string`

The code specifying the method of this communication pairing.

#### See

https://vocabulary.uncefact.org/methodCode

***

### pairedIndicator?

> `optional` **pairedIndicator**: `boolean`

The indication of whether or not the entity is paired in this communication pairing.

#### See

https://vocabulary.uncefact.org/pairedIndicator

***

### targetEntityId?

> `optional` **targetEntityId**: `string`

The identifier of the target entity for this communication pairing.

#### See

https://vocabulary.uncefact.org/targetEntityId
