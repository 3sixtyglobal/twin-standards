# Interface: IUneceXHEParty

An individual, a group, or a body having a role in an XHE (Exchange Header Envelope).

## See

https://vocabulary.uncefact.org/XHEParty

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

> **type**: `"XHEParty"`

JSON-LD Type.

***

### specifiedXHEIdentity?

> `optional` **specifiedXHEIdentity**: [`IUneceXHEIdentity`](IUneceXHEIdentity.md)[]

Identifying information specified for an XHE party.

#### See

https://vocabulary.uncefact.org/specifiedXHEIdentity
